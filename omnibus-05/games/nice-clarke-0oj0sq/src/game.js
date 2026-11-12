// Wires every system together and owns the frame loop and all touch targets.
import * as THREE from 'three';
import { Engine } from './engine.js';
import { StoreLights } from './lighting.js';
import { buildCatalogue } from './products.js';
import { Store } from './store.js';
import { Checkout } from './checkout.js';
import { Physics, CANNON } from './physics.js';
import { Items } from './items.js';
import { Input, rayToPlaneY } from './input.js';
import { CameraRig } from './camera.js';
import { Audio } from './audio.js';
import { PosScreen } from './screen.js';
import { makeFamily, makeCart } from './characters.js';
import { Receipt } from './receipt.js';
import { Director } from './director.js';
import { Fx } from './fx.js';
import { BELT, BIN, COUNTER_TOP } from './layout.js';
import { clamp, damp, Tweens, Timers } from './util.js';

const TOP = COUNTER_TOP;

export class Game {
  constructor(stage, params) {
    this.params = params;
    this.engine = new Engine(stage);
    this.scene = this.engine.scene;
    this.lights = new StoreLights();
    this.cat = buildCatalogue();
    this.store = new Store(this.scene, this.lights, this.cat);
    this.co = new Checkout(this.scene, this.lights);
    this.physics = new Physics(this.co);
    this.items = new Items(this.scene, this.physics, this.lights, this.cat);
    this.input = new Input(this.engine);
    this.rig = new CameraRig(this.engine);
    this.audio = new Audio();
    this.screen = new PosScreen(this.co);
    this.fx = new Fx(this.scene);
    const fam = makeFamily(this.lights);
    this.mom = fam.mom;
    this.dad = fam.dad;
    this.clerk = fam.clerk;
    for (const c of [this.mom, this.dad, this.clerk]) this.scene.add(c.root);
    this.cart = makeCart(this.lights);
    this.scene.add(this.cart);
    this.receipt = new Receipt(this.scene, this.lights);
    this.tweens = new Tweens();
    this.timers = new Timers();
    this.time = 0;

    // belt control state
    this.btnHeld = 0; // seconds held
    this.beltDrive = null; // finger driving the belt
    this.beltMomentum = 0;
    this.motorOn = false;
    this.beltMul = 1;
    this.belt = 0;

    this.registered = []; // {icon, price, note}
    this.total = 0;

    this.director = new Director(this);
    this.setupInput();
    this.wireItems();

    this.input.onAnyDown = () => this.audio.unlock();
    window.addEventListener('pointerup', () => this.audio.unlock());
    window.addEventListener('touchend', () => this.audio.unlock());

    this.last = performance.now();
    this.loop = this.loop.bind(this);
    this.testMode = params.has('test');
    if (!this.testMode) requestAnimationFrame(this.loop);
  }

  // test hooks: deterministic fast-forward without rendering
  async advance(sec, dt = 1 / 60) {
    const n = Math.round(sec / dt);
    const yieldTask = () =>
      new Promise((r) => {
        const ch = new MessageChannel();
        ch.port1.onmessage = () => r();
        ch.port2.postMessage(0);
      });
    for (let i = 0; i < n; i++) {
      this.step(dt, false);
      await yieldTask();
    }
  }

  screenOf(obj) {
    const v = obj.isVector3 ? obj.clone() : obj.getWorldPosition(new THREE.Vector3());
    return this.input.project(v);
  }

  renderNow() {
    this.rig.update(0);
    this.engine.render();
  }

  // ---------- items ----------
  wireItems() {
    const it = this.items;
    it.onScan = (item) => this.director.onScan(item);
    it.onReject = (item, why) => this.director.onReject(item, why);
    it.onLand = (item, speed) => {
      const kind = item.p.kind;
      const g = clamp((speed - 0.3) / 2.2, 0.15, 1);
      const pan = clamp((item.body.position.x - this.engine.camera.position.x) * 0.6, -1, 1);
      if (this.time - (this._lastThud || 0) > 0.03) {
        this._lastThud = this.time;
        this.audio.thud(kind, g, pan);
      }
      if (kind === 'giant' && speed > 0.8) {
        this.rig.addShake(0.6);
        this.bounceBin(0.6);
      }
      if (speed > 1.2) item.squash = Math.min(1, speed / 3);
    };
  }

  // everything resting in the bagging well jumps (watermelon thud)
  bounceBin(power) {
    for (const i of this.items.list) {
      if (!i.inBin) continue;
      i.body.wakeUp();
      i.body.velocity.y += power * (0.8 + Math.random() * 0.8);
      i.body.angularVelocity.x += (Math.random() - 0.5) * 4 * power;
    }
  }

  // ---------- input ----------
  setupInput() {
    const inp = this.input;
    const co = this.co;
    const D = () => this.director;
    const hitNear = (obj, reach = 1) => (x, y, r) => {
      if (!obj.visible && obj.parent && !obj.parent.visible) return null;
      const p = inp.project(obj.getWorldPosition(new THREE.Vector3()));
      if (p.behind) return null;
      const d = Math.hypot(p.x - x, p.y - y);
      return d < r * reach ? { d } : null;
    };

    // the step stool
    inp.add({
      name: 'stool',
      priority: 2,
      enabled: () => D().stage === 'floor',
      objects: () => [co.hit.stool],
      near: hitNear(co.hit.stool, 1.6),
      down: () => ({ tap: () => D().tapStool(), up: (e) => !e.tap && D().tapStool() }),
    });

    // the dangling key
    inp.add({
      name: 'key',
      priority: 3,
      enabled: () => D().keyReady,
      objects: () => [D().keyHit],
      near: hitNear(D().keyHit, 1.6),
      down: () => ({ up: () => D().tapKey() }),
    });

    // items (all live products)
    inp.add({
      name: 'items',
      priority: 1,
      enabled: () => D().itemsLive,
      objects: () => this.items.list.map((i) => i.mesh),
      near: (x, y, r) => {
        let best = null;
        for (const i of this.items.list) {
          const p = inp.project(i.mesh.position);
          if (p.behind) continue;
          const d = Math.hypot(p.x - x, p.y - y);
          if (d < r * 0.9 && (!best || d < best.d)) best = { d, hit: { object: i.mesh } };
        }
        return best;
      },
      down: (e) => {
        let o = e.hit && e.hit.object;
        while (o && !o.userData.item) o = o.parent;
        if (!o) return null;
        return this.itemSession(o.userData.item, e);
      },
    });

    // the belt surface: drag it like a treadmill
    inp.add({
      name: 'belt',
      priority: 0,
      enabled: () => D().beltLive,
      objects: () => [co.hit.belt],
      down: (e) => this.beltSession(e),
    });

    // belt button
    inp.add({
      name: 'button',
      priority: 4,
      enabled: () => D().stage !== 'floor',
      objects: () => [co.hit.button],
      near: hitNear(co.button, 0.9),
      down: () => {
        co.btnDown = true;
        this.audio.bigButton(true);
        this.btnHeld = 0.0001;
        const t0 = this.time;
        return {
          up: () => {
            co.btnDown = false;
            this.audio.bigButton(false);
            // a quick tap still runs the belt for a moment
            const held = this.time - t0;
            if (held < 0.6) this.btnHoldExtra = 0.6 - held;
            this.btnHeld = 0;
          },
        };
      },
    });

    // keypad keys (a toy keyboard) and the total key
    inp.add({
      name: 'total',
      priority: 5,
      enabled: () => D().stage !== 'floor',
      objects: () => [co.hit.total],
      down: () => {
        co.totalKey.userData.press = 1;
        this.audio.click(1.2);
        D().tapTotal();
        return null;
      },
    });
    inp.add({
      name: 'keys',
      priority: 3,
      enabled: () => D().stage !== 'floor',
      objects: () => co.keys,
      down: (e) => {
        const k = e.hit.object;
        k.userData.press = 1;
        if (co.power > 0) this.audio.keyBeep(k.userData.note);
        else this.audio.click(0.7);
        D().onKeypad(k);
        return null;
      },
    });

    // drawer
    inp.add({
      name: 'drawer',
      priority: 3,
      enabled: () => co.drawerOpen > 0.5,
      objects: () => [co.hit.drawer],
      near: hitNear(co.hit.drawer, 1.2),
      down: () => ({ up: () => D().tapDrawer() }),
    });

    // microphone
    inp.add({
      name: 'mic',
      priority: 3,
      enabled: () => D().stage !== 'floor',
      objects: () => [co.hit.mic],
      near: hitNear(co.micHead, 1.0),
      down: () => ({ up: () => D().tapMic() }),
    });

    // people: a poke makes them giggle and wave
    for (const ch of [this.mom, this.dad, this.clerk]) {
      inp.add({
        name: ch.root.name,
        priority: -1,
        enabled: () => ch.root.visible,
        objects: () => [ch.root],
        down: () => ({ tap: () => D().pokePerson(ch) }),
      });
    }

    // lane lamp and printer: little toys
    inp.add({
      name: 'lamp',
      priority: 1,
      enabled: () => true,
      objects: () => [co.hit.lamp],
      down: () => {
        co.lampBlink = 1;
        if (co.power > 0) this.audio.scanBeep({ pan: 0.6 });
        else this.audio.click(0.6);
        return null;
      },
    });
    inp.add({
      name: 'printer',
      priority: 1,
      enabled: () => D().stage !== 'receipt',
      objects: () => [co.hit.printer],
      down: () => {
        if (co.power > 0) {
          this.audio.setPrinter(0.6);
          setTimeout(() => this.audio.setPrinter(0), 120);
        } else this.audio.click(0.5);
        return null;
      },
    });

    // anything else: the director decides (hop on the floor, pull the receipt, …)
    inp.fallback = (e) => D().fallback(e);
    inp.exclusive = (e) => (D().stage === 'receipt' ? D().receiptPull(e) : null);
  }

  itemSession(item, e) {
    const D = this.director;
    if (item.p.id === 'watermelon') return D.melonSession(item, e);
    const b = item.body;
    const startY = b.position.y;
    const lift = TOP + 0.1 + (item.p.shape.h ? item.p.shape.h[1] : item.p.shape.r);
    const target = new THREE.Vector3();
    let dragging = false;
    let rub = 0;
    let lastHit = null;
    const begin = (ev) => {
      dragging = true;
      item.dragging = true;
      b.wakeUp();
      b.type = CANNON.Body.KINEMATIC;
      b.angularVelocity.set(0, 0, 0);
      this.audio.hop();
      D.onGrab(item);
      const h = rayToPlaneY(ev.ray, Math.max(lift, startY), target);
      if (h) lastHit = h.clone();
    };
    return {
      move: (ev) => {
        if (!dragging && ev.pointer.moved > 14) begin(ev);
        if (!dragging) return;
        const h = rayToPlaneY(ev.ray, lift, target);
        if (h) {
          if (lastHit) rub += h.distanceTo(lastHit);
          lastHit = h.clone();
          // keep it inside the counter area
          target.x = clamp(target.x, BELT.x0 - 0.1, BIN.x1 - 0.1);
          target.z = clamp(target.z, -0.42, 0.34);
          item.dragTarget = target.clone();
        }
        if (item.crinkle > 0 && rub > 0.09) {
          rub = 0;
          D.smoothBag(item, 0.11);
        }
      },
      tap: () => {
        D.tapItem(item);
      },
      up: () => {
        if (!dragging) return;
        dragging = false;
        item.dragging = false;
        item.dragTarget = null;
        b.type = CANNON.Body.DYNAMIC;
        b.wakeUp();
        // fling: convert screen velocity to a modest world velocity
        const v = b.velocity;
        const sp = Math.hypot(v.x, v.z);
        if (sp > 3) {
          v.x *= 3 / sp;
          v.z *= 3 / sp;
        }
        v.y = Math.max(v.y, 0);
        D.onRelease(item);
      },
    };
  }

  beltSession(e) {
    const D = this.director;
    const start = rayToPlaneY(e.ray, TOP);
    if (!start) return null;
    let last = start.clone();
    let lastT = this.time;
    const drive = { v: 0 };
    this.beltDrive = drive;
    D.onBeltTouch();
    return {
      move: (ev) => {
        const h = rayToPlaneY(ev.ray, TOP);
        if (!h) return;
        const dt = Math.max(1 / 120, this.time - lastT);
        const dx = h.x - last.x;
        drive.v = drive.v * 0.4 + clamp(dx / dt, -0.6, 2.2) * 0.6;
        drive.moved = true;
        last.copy(h);
        lastT = this.time;
      },
      tap: () => {
        // a poke nudges the belt forward a little
        this.beltMomentum = Math.max(this.beltMomentum, 0.55);
        D.onBeltTouch(true);
      },
      up: () => {
        if (this.beltDrive === drive) {
          this.beltMomentum = drive.moved ? drive.v : this.beltMomentum;
          this.beltDrive = null;
        }
      },
    };
  }

  // ---------- belt ----------
  updateBelt(dt) {
    const co = this.co;
    let target = 0;
    const powered = co.power > 0;
    let strain = 0;
    if (powered && (co.btnDown || this.btnHoldExtra > 0)) {
      if (co.btnDown) this.btnHeld += dt;
      this.btnHoldExtra = Math.max(0, (this.btnHoldExtra || 0) - dt);
      // the motor winds up the longer you hold it
      target = 0.32 + Math.min(1, this.btnHeld / 3) * 0.75;
      this.motorOn = true;
    } else this.motorOn = false;
    if (this.beltDrive) {
      target = this.beltDrive.v;
      this.beltDrive.v *= Math.exp(-6 * dt);
      this.beltMomentum = target;
    } else if (!this.motorOn) {
      this.beltMomentum *= Math.exp(-1.6 * dt);
      if (Math.abs(this.beltMomentum) < 0.02) this.beltMomentum = 0;
      target = this.beltMomentum;
    }
    if (!powered && !this.beltDrive) target = 0;
    // a giant weight slows everything down
    if (this.director.melonOnBelt) {
      target *= 0.45;
      strain = Math.abs(target) > 0.02 ? 1 : 0;
    }
    this.belt = damp(this.belt, target, this.beltDrive ? 30 : 10, dt);
    this.physics.beltSpeed = this.belt;
    co.beltPos += this.belt * dt;
    this.audio.setMotor(powered || this.beltDrive ? this.belt : 0, strain);
  }

  // ---------- loop ----------
  loop(now) {
    requestAnimationFrame(this.loop);
    const raw = Math.max(0, (now - this.last) / 1000);
    const dt = Math.min(1 / 20, raw);
    this.last = now;
    this.watchPerf(raw);
    this.step(dt);
  }

  // keep the frame rate up on smaller devices by trading resolution
  watchPerf(raw) {
    if (raw <= 0 || raw > 0.5) return;
    this.perf = this.perf || { acc: 0, n: 0, cool: 3 };
    const pf = this.perf;
    pf.cool -= raw;
    pf.acc += raw;
    pf.n++;
    if (pf.n >= 90) {
      const avg = pf.acc / pf.n;
      pf.acc = 0;
      pf.n = 0;
      const r = this.engine.renderer;
      const pr = r.getPixelRatio();
      if (pf.cool <= 0 && avg > 1 / 42 && pr > 1) {
        r.setPixelRatio(Math.max(1, pr - 0.25));
        this.engine.resize();
        pf.cool = 3;
      }
    }
  }

  step(dt, render = true) {
    this.time += dt;
    this.input.update(dt);
    this.timers.update(dt);
    this.tweens.update(dt);
    this.director.update(dt);
    this.updateBelt(dt);
    // dragged items chase the finger
    for (const it of this.items.list) {
      if (it.dragging && it.dragTarget) {
        const b = it.body;
        const k = 16;
        let vx = (it.dragTarget.x - b.position.x) * k;
        let vy = (it.dragTarget.y - b.position.y) * k;
        let vz = (it.dragTarget.z - b.position.z) * k;
        const sp = Math.hypot(vx, vy, vz);
        if (sp > 4) {
          vx *= 4 / sp;
          vy *= 4 / sp;
          vz *= 4 / sp;
        }
        b.velocity.set(vx, vy, vz);
        b.angularVelocity.set(Math.sin(this.time * 6) * 0.6, 0, Math.cos(this.time * 5) * 0.5);
      }
    }
    this.physics.step(dt);
    this.items.update(dt);
    this.lights.update(dt);
    this.store.update(dt, this.time, this.engine.camera);
    this.co.update(dt);
    this.screen.update(dt);
    this.mom.update(dt);
    this.dad.update(dt);
    this.clerk.update(dt);
    this.receipt.update(dt, this.director.receiptCrawl || 0.12);
    this.fx.update(dt);
    this.rig.update(dt);
    if (render) this.engine.render();
  }
}
