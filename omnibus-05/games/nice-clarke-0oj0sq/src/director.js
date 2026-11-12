// The story, beat by beat. Written as small coroutines so the pacing reads like a script.
// No beat needs words: every step waits for something the child does, and if nothing
// happens for a while, someone in the store gently shows the way.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';
import { shot } from './camera.js';
import { BELT, SCANNER, BIN, COUNTER_TOP, CASHIER, STORE } from './layout.js';
import { product } from './products.js';
import { patchStoreMaterial } from './lighting.js';
import { rayToPlaneY } from './input.js';
import { clamp, lerp, damp, easeOutCubic, easeInOutCubic, easeOutBack, smooth } from './util.js';

const TOP = COUNTER_TOP;
const V = (x, y, z) => new THREE.Vector3(x, y, z);

// ---------- shots ----------
const SHOTS = {
  outside: shot({ pos: [4.6, 1.0, 13.4], at: [3.9, 2.2, 0], fov: 68 }, { pos: [5.0, 1.05, 12.6], at: [2.6, 2.0, 0], fov: 56 }),
  enter1: shot({ pos: [5.5, 0.98, 6.6], at: [4.9, 1.05, 0], fov: 68 }, { pos: [5.5, 0.98, 6.6], at: [4.9, 1.05, 0], fov: 58 }),
  enter2: shot({ pos: [3.1, 0.9, 3.3], at: [0.1, 0.95, 0.6], fov: 68 }, { pos: [3.1, 0.9, 3.3], at: [0.1, 0.95, 0.6], fov: 58 }),
  floor: shot({ pos: [-0.08, 0.66, 1.95], at: [-0.32, 1.04, -0.6], fov: 66 }, { pos: [-0.12, 0.7, 1.85], at: [-0.35, 0.92, -0.6], fov: 58 }),
  step1: shot({ pos: [0.05, 1.05, 1.6], at: [-0.35, 0.98, -0.5], fov: 64 }, { pos: [-0.15, 1.05, 1.5], at: [-0.38, 0.98, -0.5], fov: 56 }),
  work: shot({ pos: [0.72, 2.05, 1.08], at: [-0.95, 0.84, -0.22], fov: 62 }, { pos: [-0.46, 1.64, 1.36], at: [-0.62, 0.88, -0.25], fov: 55 }),
  key: shot({ pos: [-0.42, 1.78, 1.38], at: [-0.95, 0.95, 0.3], fov: 58 }, { pos: [-0.45, 1.6, 1.35], at: [-0.8, 0.98, 0.1], fov: 52 }),
  flood: shot({ pos: [0.85, 2.4, 1.3], at: [-1.0, 0.84, -0.3], fov: 62 }, { pos: [-0.35, 2.0, 1.8], at: [-0.55, 0.88, -0.45], fov: 56 }),
  cart: shot({ pos: [0.3, 2.3, 1.55], at: [-1.3, 1.05, -1.0], fov: 62 }, { pos: [-0.2, 1.95, 1.8], at: [-1.2, 1.05, -1.0], fov: 56 }),
  melon: shot({ pos: [0.2, 1.78, 0.95], at: [-0.3, 0.95, -0.12], fov: 62 }, { pos: [-0.05, 1.5, 1.0], at: [-0.25, 1.0, -0.15], fov: 52 }),
  total: shot({ pos: [-0.62, 1.92, 1.42], at: [-0.86, 0.86, 0.3], fov: 60 }, { pos: [-0.4, 1.62, 1.45], at: [-0.62, 0.86, 0.1], fov: 54 }),
  pay: shot({ pos: [0.2, 1.95, 1.5], at: [-0.25, 0.92, -0.25], fov: 64 }, { pos: [-0.15, 1.65, 1.5], at: [-0.25, 0.98, -0.3], fov: 56 }),
  printer: shot({ pos: [0.78, 1.62, 0.3], at: [0.42, 0.45, -1.35], fov: 64 }, { pos: [0.62, 1.5, 0.5], at: [0.35, 0.55, -1.35], fov: 56 }),
  stamp: shot({ pos: [0.95, 1.38, -1.55], at: [0.5, 0.98, -0.62], fov: 56 }, { pos: [1.0, 1.32, -1.5], at: [0.5, 0.98, -0.62], fov: 48 }),
  overview: shot({ pos: [0.2, 27, -4.2], at: [0, 0, -7.4], fov: 58 }, { pos: [0.2, 19.5, -2.0], at: [0, 0, -7.0], fov: 54 }),
  announce: shot({ pos: [1.6, 2.35, 1.75], at: [0.6, 1.1, -1.2], fov: 62 }, { pos: [1.55, 2.15, 1.7], at: [0.2, 1.1, -1.6], fov: 56 }),
  voice: shot({ pos: [0.6, 3.5, 2.6], at: [-0.6, 0.9, -9], fov: 66 }, { pos: [0.8, 3.3, 2.8], at: [-0.6, 1.0, -9], fov: 58 }),
  final: shot({ pos: [1.0, 3.7, 3.3], at: [-0.5, 0.7, -5.5], fov: 66 }, { pos: [1.4, 3.6, 3.4], at: [-0.6, 0.8, -6.5], fov: 56 }),
};

const MOM_BATCHES = [['apple'], ['banana', 'milk'], ['bread', 'eggs', 'carrot', 'yogurt'], ['chips*'], ['orange', 'tomato', 'pudding', 'juice', 'cheese', 'cookies']];

const CART_ITEMS = [
  'toilet', 'cereal', 'cereal', 'tissue', 'cookies', 'donut', 'milk', 'milk', 'juice', 'juice', 'can', 'can', 'can', 'can', 'ketchup', 'chips', 'chips', 'candy', 'candy',
  'apple', 'apple', 'orange', 'orange', 'orange', 'tomato', 'onion', 'onion', 'broccoli', 'carrot', 'banana', 'grapes', 'bread', 'bread', 'eggs', 'yogurt', 'yogurt', 'pudding',
  'pudding', 'cheese', 'fish', 'fish', 'tofu', 'icecream', 'icecream', 'riceball', 'riceball', 'cookies', 'donut', 'tissue', 'cereal', 'can', 'juice', 'milk', 'chips', 'candy',
  'apple', 'banana', 'yogurt', 'toilet', 'cookies', 'riceball', 'orange', 'can', 'pudding',
];

class Script {
  constructor() {
    this.waiters = [];
    this.epoch = 0;
  }
  wait(t) {
    const epoch = this.epoch;
    return new Promise((res) => this.waiters.push({ t, res, epoch }));
  }
  until(fn) {
    const epoch = this.epoch;
    return new Promise((res) => this.waiters.push({ fn, res, epoch }));
  }
  update(dt) {
    const list = this.waiters;
    this.waiters = [];
    for (const w of list) {
      if (w.epoch !== this.epoch) continue;
      if (w.fn) {
        let ok = false;
        try {
          ok = w.fn();
        } catch (e) {
          console.error(e);
        }
        if (ok) w.res();
        else this.waiters.push(w);
      } else {
        w.t -= dt;
        if (w.t <= 0) w.res();
        else this.waiters.push(w);
      }
    }
  }
  reset() {
    this.epoch++;
    this.waiters = [];
  }
}

export class Director {
  constructor(game) {
    this.g = game;
    this.s = new Script();
    this.stage = 'floor';
    this.itemsLive = false;
    this.beltLive = false;
    this.keyReady = false;
    this.melonOnBelt = false;
    this.receiptCrawl = 0.12;
    this.scans = 0;
    this.lastScanAt = -10;
    this.lightCursor = 0;
    this.time = 0;
    this.hintAt = 0;
    this.buildKey();
    this.buildMoney();
    this.prepareLightOrder();
    this.setupScene();
    const P = game.params;
    if (P.has('skip')) this.debugSkip(P.get('skip'));
    else this.run();
  }

  // ---------- objects owned by the story ----------
  buildKey() {
    const g = new THREE.Group();
    const lights = this.g.lights;
    const m = (color, o = {}) => {
      const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.35, ...o });
      patchStoreMaterial(mat, lights);
      return mat;
    };
    const chrome = m('#e9ecef', { metalness: 1, roughness: 0.15 });
    // the key hangs from its ring; local origin = the ring
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.018, 0.0035, 8, 24), chrome);
    g.add(ring);
    const keyG = new THREE.Group();
    keyG.position.y = -0.03;
    g.add(keyG);
    const bow = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.012, 28), m('#f3c74a', { roughness: 0.3 }));
    bow.rotation.x = Math.PI / 2;
    bow.position.y = -0.01;
    keyG.add(bow);
    const star = new THREE.Mesh(new THREE.CircleGeometry(0.012, 5), m('#e94f37'));
    star.position.set(0, -0.01, 0.0065);
    keyG.add(star);
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.06, 0.004), chrome);
    blade.position.y = -0.065;
    keyG.add(blade);
    for (let i = 0; i < 3; i++) {
      const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.008, 0.004), chrome);
      tooth.position.set(0.009, -0.055 - i * 0.012, 0);
      keyG.add(tooth);
    }
    // the little name tag that comes with it
    const tag = new THREE.Group();
    tag.position.set(0.0, -0.005, 0.0);
    const card = new THREE.Mesh(new RoundedBoxGeometry(0.05, 0.034, 0.004, 2, 0.006), m('#ffffff'));
    card.position.set(0.03, -0.03, -0.004);
    tag.add(card);
    const face = new THREE.Mesh(new THREE.CircleGeometry(0.01, 16), m('#ff8f6a'));
    face.position.set(0.02, -0.03, -0.0015);
    face.rotation.y = Math.PI;
    tag.add(face);
    g.add(tag);
    for (const c of g.children) c.castShadow = true;
    const hit = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.y = -0.05;
    g.add(hit);
    this.keyHit = hit;
    this.key = g;
    this.keyInner = keyG;
    // big enough to be the most touchable thing on screen
    g.scale.setScalar(1.9);
    g.visible = false;
    this.g.scene.add(g);
    this.keySwing = { a: 0.3, v: 0, b: 0, bv: 0 };
  }

  buildMoney() {
    const lights = this.g.lights;
    const grp = new THREE.Group();
    const bill = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.002, 0.075), new THREE.MeshStandardMaterial({ color: '#c9b8e8', roughness: 0.8 }));
    patchStoreMaterial(bill.material, lights);
    bill.position.set(0, 0.02, 0.0);
    bill.rotation.z = 0.3;
    grp.add(bill);
    this.coins = [];
    for (let i = 0; i < 4; i++) {
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.003, 14), new THREE.MeshStandardMaterial({ color: i % 2 ? '#c9ccd2' : '#d9b44a', metalness: 0.9, roughness: 0.25 }));
      patchStoreMaterial(c.material, lights);
      c.position.set(-0.02 + i * 0.012, 0.03 + i * 0.004, 0.01);
      c.rotation.x = 0.4;
      grp.add(c);
      this.coins.push(c);
    }
    this.bill = bill;
    const hit = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), new THREE.MeshBasicMaterial({ visible: false }));
    grp.add(hit);
    this.moneyHit = hit;
    this.money = grp;
    grp.visible = false;
    this.g.scene.add(grp);
    // the money target is registered here (it only lives in this beat)
    this.g.input.add({
      name: 'money',
      priority: 4,
      enabled: () => this.money.visible && this.stage === 'pay' && !this.paid,
      objects: () => [this.moneyHit],
      near: (x, y, r) => {
        const p = this.g.input.project(this.money.getWorldPosition(V(0, 0, 0)));
        const d = Math.hypot(p.x - x, p.y - y);
        return d < r * 2.2 ? { d } : null;
      },
      down: () => ({ up: () => this.takeMoney() }),
    });
  }

  prepareLightOrder() {
    const st = this.g.store;
    const near = [...st.frontFixtures, ...st.mainFixtures];
    const c = V(-0.5, 0, -0.5);
    near.sort((a, b) => Math.hypot(a.x - c.x, a.z - c.z) - Math.hypot(b.x - c.x, b.z - c.z));
    this.lightOrder = near;
  }

  setupScene() {
    const g = this.g;
    const { mom, dad, clerk, cart } = g;
    mom.root.position.set(-0.55, 0, -0.98);
    mom.root.rotation.y = 0.1;
    mom.lookAt(V(-0.14, 0.75, 0.9));
    dad.root.position.set(-7.5, 0, -3.1);
    dad.root.rotation.y = Math.PI / 2;
    dad.root.visible = false;
    cart.visible = false;
    clerk.root.position.set(-1.08, 0, 1.18);
    clerk.root.rotation.y = 2.35;
    clerk.lookAt(V(-0.14, 0.75, 0.9));
    // the stool sits a little off to the side, waiting
    const st = g.co.stool;
    st.position.set(CASHIER.x - 0.22, 0, 0.66);
    st.rotation.y = 0.42;
    g.rig.cut(SHOTS.outside);
    g.rig.breath = 1.4;
    g.screen.setMode('off');
    this.stage = 'outside';
    g.store.exterior.visible = true;
    // the door: the first thing to touch
    g.input.add({
      name: 'door',
      priority: 3,
      enabled: () => this.stage === 'outside',
      objects: () => [g.store.doorHit],
      down: () => ({ up: () => this.openDoors() }),
    });
  }

  // ---------- frame ----------
  update(dt) {
    this.time += dt;
    this.s.update(dt);
    this.updateKey(dt);
    if (this.melonSpin) this.updateMelon(dt);
    if (this.cartWobble) this.updateCart();
    if (this.stage === 'receipt' || this.stage === 'overview') this.updateReceipt(dt);
    if (this.voiceActive) this.updateVoice(dt);
    if (this.festival && Math.floor(this.time * 10) !== Math.floor((this.time - dt) * 10)) this.updateFestival();
    if (this.carryMelon) this.updateCarry();
    if (this.moneyFollow) {
      const h = this.g.mom.handWorld('R', V(0, 0, 0));
      this.money.position.copy(h).add(V(0, 0.03, 0.04));
      this.moneyJiggle = Math.max(0, (this.moneyJiggle || 0) - dt * 2);
      this.money.rotation.z = Math.sin(this.time * 25) * 0.15 * this.moneyJiggle;
    }
    // scale readout follows whatever rests on the glass
    const co = this.g.co;
    if (co.power > 0) {
      let kg = 0;
      for (const it of this.g.items.list) {
        const p = it.body.position;
        if (!it.dragging && p.x > SCANNER.x0 && p.x < SCANNER.x1 && p.z > SCANNER.z0 && p.z < SCANNER.z1 && p.y < TOP + 0.3 && it.body.velocity.length() < 0.3) kg += it.p.mass;
      }
      co.weightTarget = kg;
    }
    // anything unscanned that falls to the floor is quietly put back at the start of the belt
    for (const it of this.g.items.list) {
      if (it.scanned || it.p.id === 'watermelon' || it.dragging || it.placing) continue;
      if (it.body.position.y < 0.45) {
        it.fallen = (it.fallen || 0) + dt;
        if (it.fallen > 1.2) {
          it.fallen = 0;
          it.body.position.set(-1.9 + Math.random() * 0.3, TOP + 0.35, (Math.random() - 0.5) * 0.2);
          it.body.velocity.set(0, 0, 0);
          it.body.angularVelocity.set(0, 0, 0);
          it.body.wakeUp();
        }
      } else it.fallen = 0;
    }
    // things stranded beside the belt (behind its side guards) are handed back onto it
    if (this.itemsLive) {
      for (const it of this.g.items.list) {
        if (it.scanned || it.dragging || it.placing || it.p.id === 'watermelon') continue;
        const p = it.body.position;
        const v = it.body.velocity;
        const beside = p.x > BELT.x0 - 0.25 && p.x < BELT.x1 + 0.02 && Math.abs(p.z) > 0.27 && Math.abs(p.z) < 0.7 && p.y > TOP - 0.06 && p.y < TOP + 0.45;
        if (beside && v.length() < 0.25) {
          it.stranded = (it.stranded || 0) + dt;
          if (it.stranded > 1.4) {
            it.stranded = 0;
            const halfH = it.p.shape.h ? it.p.shape.h[1] : it.p.shape.r;
            this.g.items.place(it, V(clamp(p.x, BELT.x0 + 0.12, BELT.x1 - 0.2), TOP + halfH + 0.01, (Math.random() - 0.5) * 0.16), 0.5, 0.1);
            const helper = p.z < 0 && this.g.dad.root.visible ? this.g.dad : this.g.mom;
            if (helper.poseName === 'idle') {
              helper.pose('reach', 6);
              this.s.wait(0.7).then(() => helper.poseName === 'reach' && helper.pose('idle', 4));
            }
          }
        } else it.stranded = 0;
      }
    }
    // the watermelon is too heavy to slide off the scale by itself
    if (this.melon && this.melon.body && !this.melon.dragging) {
      const b = this.melon.body;
      const p = b.position;
      this.melonOnBelt = p.x < BELT.x1 + 0.1 && p.x > BELT.x0 && p.y < TOP + 0.4;
      if (p.x > SCANNER.x0 - 0.06 && p.x < SCANNER.x1 + 0.2 && p.y < TOP + 0.45) {
        if (!this.melonParked) {
          this.melonParked = true;
          this.onMelonOnScale();
        }
        b.velocity.x = damp(b.velocity.x, (-0.14 - p.x) * 2, 10, dt);
        b.velocity.z = damp(b.velocity.z, (0 - p.z) * 2, 10, dt);
      }
    } else this.melonOnBelt = false;
  }

  // ---------- the story ----------
  async run() {
    const s = this.s;
    const g = this.g;
    // 0. OUTSIDE — the store is closed, but one lane is still lit
    await this.outsideBeat();
    // 1. FLOOR — small, looking up at the big machine
    this.stage = 'floor';
    this.floorHints();
    await s.until(() => this.climbed);
    // 2. PERMISSION — the clerk hands over the key
    this.stage = 'key';
    await this.keyBeat();
    // 3. FIRST BEEPS — Mom's basket, one by one
    this.stage = 'scan';
    this.itemsLive = true;
    this.beltLive = true;
    g.items.scanEnabled = true;
    await this.momBeat();
    // 4. DAD'S MOUNTAIN
    this.stage = 'cart';
    await this.cartBeat();
    // 5. THE GIANT
    this.stage = 'melon';
    await this.melonBeat();
    // 6. TOTAL, DRAWER, MONEY
    this.stage = 'total';
    await this.totalBeat();
    // 7. THE RECEIPT
    this.stage = 'receipt';
    await this.receiptBeat();
    // 8. THE ANNOUNCEMENT
    this.stage = 'announce';
    await this.announceBeat();
    this.stage = 'free';
    this.finale();
  }

  // --- 0. outside ---
  async outsideBeat() {
    const s = this.s;
    const g = this.g;
    let idle = 0;
    while (!this.doorsOpening) {
      await s.wait(0.25);
      idle += 0.25;
      if (idle > 5 && !this.doorsOpening) {
        // the sensor twitches: the doors breathe open a crack and close again
        idle = 0;
        g.audio.whoosh(0.5, 0.04);
        g.tweens.add(1.2, (k) => g.store.setDoors(Math.sin(k * Math.PI) * 0.12));
      }
    }
    await s.until(() => this.entered);
    g.store.exterior.visible = false;
  }

  openDoors() {
    if (this.doorsOpening) return;
    this.doorsOpening = true;
    const g = this.g;
    const s = this.s;
    g.audio.unlock();
    // the motor hum and the two-note entrance chime
    g.audio.whoosh(0.9, 0.08);
    g.timers.after(0.15, () => {
      g.audio.tone('sine', 1318.5, g.audio.t, 0.05, { gain: 0.12, release: 0.9, verb: 0.5 });
      g.audio.tone('sine', 1046.5, g.audio.t + 0.42, 0.05, { gain: 0.12, release: 1.2, verb: 0.5 });
    });
    const k0 = g.store.doorOpen;
    g.tweens.add(0.9, (k) => g.store.setDoors(lerp(k0, 1, easeOutCubic(k))));
    (async () => {
      await s.wait(0.5);
      // walk in: footsteps, past the dark lanes, to lane 3
      const steps = (n, every) => {
        for (let i = 0; i < n; i++) g.timers.after(i * every, () => g.audio.step(0.22));
      };
      g.rig.go(SHOTS.enter1, 2.2, { ease: easeInOutCubic });
      steps(5, 0.42);
      await s.wait(2.2);
      g.rig.go(SHOTS.enter2, 1.9, { ease: easeInOutCubic });
      steps(4, 0.45);
      g.timers.after(1.2, () => g.tweens.add(1.0, (k) => g.store.setDoors(1 - easeOutCubic(k))));
      await s.wait(1.9);
      g.rig.go(SHOTS.floor, 2.0, { ease: easeInOutCubic });
      steps(4, 0.45);
      await s.wait(2.0);
      this.entered = true;
      g.input.lastInputTime = g.input.time;
    })();
  }

  // --- 1. floor ---
  async floorHints() {
    const s = this.s;
    const g = this.g;
    let n = 0;
    while (!this.climbed) {
      await s.wait(0.5);
      if (this.climbed) break;
      if (g.input.idleTime > 6 + n * 5) {
        n++;
        // the stool rocks as if bumped
        this.wobbleStool();
        if (n === 2) {
          g.mom.pose('peek', 3);
          g.mom.face('grin');
          await s.wait(1.2);
          g.mom.pose('wave', 4);
          await s.wait(1.6);
          g.mom.pose('idle', 3);
          g.mom.face('smile');
        }
        if (n === 3) {
          g.clerk.pose('reachLow', 3);
          await s.wait(0.8);
          this.wobbleStool();
          await s.wait(0.6);
          g.clerk.pose('idle', 3);
        }
        g.input.lastInputTime = g.input.time - 2;
      }
    }
  }

  wobbleStool() {
    const st = this.g.co.stool;
    this.g.audio.step(0.35);
    this.g.tweens.add(0.6, (k) => {
      st.rotation.z = Math.sin(k * Math.PI * 4) * 0.06 * (1 - k);
      st.position.y = Math.abs(Math.sin(k * Math.PI * 4)) * 0.01 * (1 - k);
    });
  }

  tapStool() {
    if (this.climbing || this.climbed) return;
    this.climbing = true;
    const g = this.g;
    const st = g.co.stool;
    // the stool slides into place under you
    const p0 = st.position.clone();
    const r0 = st.rotation.y;
    g.audio.whoosh(0.3, 0.06);
    g.tweens.add(0.45, (k) => {
      const e = easeOutCubic(k);
      st.position.set(lerp(p0.x, CASHIER.x, e), 0, lerp(p0.z, CASHIER.z + 0.04, e));
      st.rotation.y = lerp(r0, 0, e);
    });
    const s = this.s;
    (async () => {
      await s.wait(0.5);
      g.audio.step(1);
      g.rig.go(SHOTS.step1, 0.42, { ease: easeOutCubic, arc: 0.06 });
      g.rig.bump(-0.02);
      await s.wait(0.5);
      g.audio.step(1.1);
      g.rig.go(SHOTS.work, 0.75, { ease: easeOutCubic, arc: 0.08 });
      await s.wait(0.35);
      g.rig.bump(-0.035);
      g.rig.breath = 1;
      g.mom.face('grin');
      g.mom.pose('wave', 4);
      await s.wait(1.4);
      g.mom.pose('idle', 3);
      g.mom.face('smile');
      this.climbed = true;
    })();
  }

  // a little jump when the floor is touched anywhere else: you glimpse the counter top
  hop() {
    if (this.hopping || this.climbing) return;
    this.hopping = true;
    const g = this.g;
    g.audio.hop();
    // up on tiptoes for a peek over the edge, then back down
    g.tweens.add(
      0.62,
      (k) => (g.rig.lift = 4 * k * (1 - k) * 0.3),
      () => {
        g.rig.lift = 0;
        g.audio.step(0.5);
        g.rig.bump(-0.015);
        this.hopping = false;
      },
    );
  }

  // --- 2. key ---
  async keyBeat() {
    const s = this.s;
    const g = this.g;
    const clerk = g.clerk;
    clerk.pose('reach', 3);
    clerk.lookAt(g.co.lockWorld());
    this.key.visible = true;
    this.keyHeld = true;
    this.keyReady = true;
    g.audio.jingle();
    g.rig.go(SHOTS.key, 1.2);
    let hint = 0;
    while (!this.keyInserted) {
      await s.wait(0.2);
      hint += 0.2;
      if (hint > 5) {
        hint = 0;
        this.keySwing.v += 4;
        g.audio.jingle();
      }
    }
    clerk.pose('idle', 3);
    clerk.lookAt(V(-0.14, 1.2, 0.9));
    hint = 0;
    while (!this.keyTurned) {
      await s.wait(0.2);
      hint += 0.2;
      if (hint > 4) {
        hint = 0;
        this.keyWiggle = 1;
        g.audio.jingle();
      }
    }
    // BOOT
    g.audio.boot();
    g.screen.boot();
    g.tweens.add(1.4, (k) => g.co.setPower(smooth(k)));
    await s.wait(0.6);
    // the lane lamp and the two tubes over the lane flicker awake, brighter
    for (const f of g.store.laneFixtures) {
      f.target = 0;
      f.level = 0.2;
      g.lights.turnOn(f, 0.05);
    }
    g.audio.fluoro(0, 2);
    await s.wait(1.2);
    clerk.pose('thumbs', 4);
    clerk.face('grin');
    g.mom.pose('clap', 4);
    g.mom.onClap = () => g.audio.applause(0.12, 0.6, 1);
    await s.wait(1.4);
    g.mom.pose('idle', 3);
    g.mom.onClap = null;
    clerk.pose('idle', 3);
    clerk.face('smile');
    g.rig.go(SHOTS.work, 1.2);
    this.keyReady = false;
    // the clerk steps back: from here on, it is your register
    await this.walk(clerk, V(-1.6, 0, 1.75), 0.9);
    clerk.root.rotation.y = 2.55;
    clerk.lookAt(V(-0.3, 1.0, 0));
  }

  updateKey(dt) {
    const k = this.key;
    if (!k.visible) return;
    const g = this.g;
    if (this.keyHeld) {
      // dangling from the clerk's fingers, swinging like a pendulum
      const hand = g.clerk.handWorld('R', V(0, 0, 0));
      hand.y -= 0.02;
      k.position.copy(hand);
      const sw = this.keySwing;
      sw.v += -sw.a * 30 * dt - sw.v * 0.6 * dt;
      sw.a += sw.v * dt;
      sw.bv += -sw.b * 20 * dt - sw.bv * 0.8 * dt;
      sw.b += sw.bv * dt;
      k.rotation.set(sw.b, Math.sin(g.time * 0.8) * 0.6, sw.a);
      // a glint now and then, like keys catching the light
      this.glintT = (this.glintT || 0) - dt;
      if (this.glintT <= 0) {
        this.glintT = 1.1 + Math.random() * 0.6;
        g.fx.burst(k.position.clone().add(V(0.02, -0.08, 0.03)), '#fff4c0', 3, 0.15, 0.05, 0);
      }
    } else if (this.keyInserted) {
      // standing up out of the lock, blade inside
      const kp = g.co.keypad;
      const up = V(0, 1, 0).applyQuaternion(kp.quaternion);
      k.position.copy(g.co.lockWorld()).addScaledVector(up, 0.18);
      k.quaternion.copy(kp.quaternion);
      const turn = this.keyTurnK || 0;
      const wig = (this.keyWiggle = Math.max(0, (this.keyWiggle || 0) - dt * 2));
      k.rotateY(turn * (Math.PI / 2) + Math.sin(g.time * 30) * 0.08 * wig);
    }
  }

  tapKey() {
    const g = this.g;
    if (this.keyHeld && !this.keyFlying) {
      this.keyFlying = true;
      g.audio.jingle();
      const from = this.key.position.clone();
      const q0 = this.key.quaternion.clone();
      this.keyHeld = false;
      g.tweens.add(
        0.55,
        (k) => {
          const e = easeInOutCubic(k);
          const to = g.co.lockWorld().add(V(0, 0.18, 0));
          this.key.position.lerpVectors(from, to, e);
          this.key.position.y += Math.sin(Math.PI * e) * 0.12;
          this.key.quaternion.copy(q0);
          this.key.rotation.z += k * 2;
        },
        () => {
          this.keyInserted = true;
          this.keyFlying = false;
          g.audio.keyTurn();
          g.rig.bump(-0.01);
        },
      );
      return;
    }
    if (this.keyInserted && !this.keyTurned) {
      this.keyTurned = true;
      g.audio.keyTurn();
      g.tweens.add(0.35, (k) => (this.keyTurnK = easeOutBack(k)));
    }
  }

  onKeypad() {
    // pressing keys after the machine is on makes the screen pop a tiny sparkle
    const g = this.g;
    if (g.co.power > 0 && this.stage !== 'floor') {
      g.co.lampBlink = Math.max(g.co.lampBlink, 0.3);
    }
  }

  // --- 3. Mom's basket ---
  async momBeat() {
    const s = this.s;
    const g = this.g;
    const mom = g.mom;
    await this.walk(mom, V(-1.72, 0, -0.98), 0.9);
    mom.root.rotation.y = 0.05;
    for (let b = 0; b < MOM_BATCHES.length; b++) {
      const batch = MOM_BATCHES[b];
      mom.lookAt(V(-1.6, TOP, 0));
      for (let i = 0; i < batch.length; i++) {
        await this.momPlace(batch[i], i, batch.length);
      }
      mom.lookAt(V(-0.14, 1.3, 0.9));
      if (b === 0) {
        // the first one: wait for the very first beep, helping if needed
        await this.waitScans(1, true);
        await s.wait(0.6);
      } else {
        await this.waitBeltClear(true);
        await s.wait(0.4);
      }
    }
    await this.waitBeltClear(true);
    await s.wait(0.8);
  }

  async momPlace(id, i, n) {
    const s = this.s;
    const g = this.g;
    const mom = g.mom;
    mom.pose('reach', 7);
    await s.wait(0.42);
    const crinkled = id.endsWith('*');
    const pid = crinkled ? id.slice(0, -1) : id;
    const hand = mom.handWorld('R', V(0, 0, 0));
    const p = product(pid);
    hand.y = Math.max(hand.y, TOP + 0.12);
    const it = g.items.spawn(pid, hand, { crinkled, ry: (Math.random() - 0.5) * 0.6 });
    const halfH = p.shape.h ? p.shape.h[1] : p.shape.r;
    const tx = n === 1 ? -1.75 : -2.0 + (i / Math.max(1, n - 1)) * 0.75;
    g.items.place(it, V(tx, TOP + halfH + 0.005, (Math.random() - 0.5) * 0.16), 0.5, 0.08);
    if (crinkled) {
      this.bag = it;
      g.audio.crinkle(1.2);
    }
    await s.wait(0.45);
    mom.pose('idle', 5);
    await s.wait(0.15);
  }

  async waitScans(n, help) {
    const s = this.s;
    const g = this.g;
    const target = this.scans + n;
    let idle = 0;
    while (this.scans < target) {
      await s.wait(0.25);
      idle = g.input.idleTime;
      if (help && idle > 9 && this.time - this.hintAt > 14) {
        this.hintAt = this.time;
        await this.clerkPressesButton();
      }
    }
  }

  // unscanned items still on the counter side of the scanner
  pending() {
    return this.g.items.list.filter((it) => !it.scanned && it.p.id !== 'watermelon' && it.body.position.x < SCANNER.x1 + 0.1 && it.body.position.y > TOP - 0.2 && Math.abs(it.body.position.z) < 0.6);
  }

  async waitBeltClear(help, leave = 0) {
    const s = this.s;
    const g = this.g;
    let clearFor = 0;
    while (clearFor < 1.0) {
      await s.wait(0.25);
      const pend = this.pending();
      clearFor = pend.length <= leave ? clearFor + 0.25 : 0;
      if (help && pend.length && g.input.idleTime > 10 && this.time - this.hintAt > 15) {
        this.hintAt = this.time;
        if (this.bag && !this.bag.scanned && pend.includes(this.bag)) {
          // Mom shows how: she smooths the bag with her hand
          await this.momSmooths();
        } else await this.clerkPressesButton();
      }
      // last resort: something that has sat unreachable for a long while hops over the scanner
      const sig = pend.map((it) => it.id).join(',');
      if (sig && sig === this._pendSig && pend.every((it) => it.body.velocity.length() < 0.05)) this._pendStill = (this._pendStill || 0) + 0.25;
      else this._pendStill = 0;
      this._pendSig = sig;
      if (this._pendStill > 12) {
        this._pendStill = 0;
        const it = pend[0];
        g.items.hop(it, g.items.binTarget(), 0.12, 1);
        g.audio.hop();
      }
      // things that fell to the floor are handed back
      for (const it of g.items.list) {
        if (!it.scanned && it.body.position.y < 0.3 && it.p.id !== 'watermelon') {
          it.body.position.set(-1.7 + Math.random() * 0.4, TOP + 0.3, (Math.random() - 0.5) * 0.2);
          it.body.velocity.set(0, 0, 0);
          it.body.wakeUp();
        }
      }
    }
  }

  async clerkPressesButton() {
    const s = this.s;
    const g = this.g;
    const c = g.clerk;
    await this.walk(c, V(-0.98, 0, 0.98), 1.1);
    c.root.rotation.y = 2.5;
    c.pose('reachLow', 4);
    c.lookAt(g.co.button.getWorldPosition(V(0, 0, 0)));
    await s.wait(0.6);
    g.co.btnDown = true;
    g.audio.bigButton(true);
    g.btnHeld = 0.0001;
    await s.wait(1.5);
    g.co.btnDown = false;
    g.audio.bigButton(false);
    g.btnHeld = 0;
    c.pose('idle', 3);
    c.lookAt(V(-0.14, 1.2, 0.9));
    await this.walk(c, V(-1.6, 0, 1.75), 1.0);
    c.root.rotation.y = 2.55;
  }

  async momSmooths() {
    const s = this.s;
    const g = this.g;
    g.mom.pose('reach', 5);
    g.mom.face('ooh');
    for (let i = 0; i < 3; i++) {
      await s.wait(0.3);
      if (this.bag) this.smoothBag(this.bag, 0.12);
    }
    g.mom.pose('idle', 4);
    g.mom.face('smile');
  }

  // --- scanning ---
  onScan(item) {
    const g = this.g;
    const co = g.co;
    this.scans++;
    this.lastScanAt = this.time;
    const special = item.p.id === 'watermelon' ? 2 : item === this.bag ? 1 : 0;
    const note = g.audio.scanBeep({ special, pan: -0.1 });
    item.note = note;
    g.registered.push({ icon: item.p.icon, price: item.p.price, note });
    g.total += item.p.price;
    g.screen.addItem(item.p);
    co.scanFlash = 1;
    co.lampBlink = 1;
    // a tiny buzz in the hand on devices that support it
    if (navigator.vibrate && !this.g.testMode) navigator.vibrate(special ? [20, 40, 30] : 12);
    const p = item.body.position;
    g.fx.burst(V(p.x, TOP + 0.05, p.z), special ? '#ffd34a' : '#7dff9a', special ? 30 : 10, special ? 1.4 : 0.8, special ? 0.05 : 0.03);
    g.fx.ring(V((SCANNER.x0 + SCANNER.x1) / 2, TOP + 0.005, 0), '#7dff9a', { r0: 0.05, r1: 0.32, dur: 0.45, opacity: 0.6 });
    // the store answers: every couple of beeps another light wakes up
    if (this.scans === 1) {
      this.wakeNextLight();
      this.wakeNextLight();
      g.mom.face('grin');
      g.mom.pose('clap', 5);
      g.mom.onClap = () => g.audio.applause(0.1, 0.5, 1);
      this.s.wait(1.3).then(() => {
        g.mom.pose('idle', 3);
        g.mom.onClap = null;
      });
    } else if (this.scans % 2 === 0) this.wakeNextLight();
    if (item === this.bag) {
      g.mom.face('happy');
      g.mom.jump(1.4);
      g.audio.applause(1.2, 0.8, 1);
      this.s.wait(1.6).then(() => g.mom.face('smile'));
    }
  }

  wakeNextLight(delay = 0) {
    const f = this.lightOrder[this.lightCursor];
    if (!f) return;
    this.lightCursor++;
    const g = this.g;
    if (g.lights.turnOn(f, delay)) {
      const cam = g.engine.camera.position;
      const dx = f.x - cam.x;
      g.timers.after(delay, () => g.audio.fluoro(clamp(dx / 8, -1, 1), Math.hypot(dx, f.z - cam.z)));
      this.updateHum();
    }
  }

  updateHum() {
    const L = this.g.lights;
    const on = L.fixtures.filter((f) => f.target === 1).length;
    this.g.audio.setLightHum(on / L.fixtures.length);
  }

  onReject(item, why) {
    const g = this.g;
    g.audio.error();
    g.co.scanErr = 1;
    g.screen.error(why);
    if (why === 'crinkle') {
      // every honest try smooths it a little; nobody gets stuck
      item.squash = 1;
      g.audio.crinkle(1);
      if (item.tries >= 2) this.smoothBag(item, 0.2);
      // the bag bounces back onto the glass
      const b = item.body;
      if (!item.dragging) {
        b.velocity.set(-0.6, 1.2, 0);
        b.angularVelocity.set(0, 0, 3);
      }
      g.mom.face('ooh');
      this.s.wait(1.2).then(() => g.mom.face('smile'));
    }
  }

  smoothBag(item, amt) {
    const g = this.g;
    if (item.crinkle <= 0) return;
    g.items.setCrinkle(item, item.crinkle - amt);
    g.audio.crinkle(0.7);
    item.squash = 0.6;
    const p = item.body.position;
    g.fx.burst(V(p.x, p.y + 0.05, p.z), '#ffffff', 4, 0.4, 0.02, 1);
  }

  tapItem(item) {
    const g = this.g;
    const b = item.body;
    b.wakeUp();
    if (item.crinkle > 0) {
      this.smoothBag(item, 0.3);
      // pat it and it hops onto the glass to try again
      g.items.hop(item, V((SCANNER.x0 + SCANNER.x1) / 2 - 0.04, TOP + 0.05, 0), 0.12, 0.3);
      g.audio.hop();
      return;
    }
    if (item.inBin) {
      g.items.hop(item, V(b.position.x + (Math.random() - 0.5) * 0.2, b.position.y + 0.05, b.position.z + (Math.random() - 0.5) * 0.2), 0.12, 1);
      g.audio.hop();
      return;
    }
    // over the red window (beep!) and down into the well
    const tgt = g.items.binTarget();
    g.items.hop(item, tgt, item.scanned ? 0.1 : 0.16, 1);
    g.audio.hop();
  }

  onGrab(item) {
    if (item.crinkle > 0) this.g.audio.crinkle(1);
  }

  onRelease() {}

  onBeltTouch() {}

  // --- 4. Dad's cart ---
  async cartBeat() {
    const s = this.s;
    const g = this.g;
    const { mom, dad, cart } = g;
    // Mom steps aside and looks back into the dark store
    mom.lookAt(V(-4, 1.2, -3.5));
    await this.walk(mom, V(-0.42, 0, -1.08), 1.0);
    mom.root.rotation.y = -0.4;
    mom.lookAt(V(-4, 1.2, -3.5));
    this.fillCart();
    cart.visible = true;
    dad.root.visible = true;
    g.rig.go(SHOTS.cart, 2.2);
    dad.pose('push', 4);
    dad.face('grin');
    // Dad pushes the mountain out of the dark aisle
    const path = [V(-7.5, 0, -3.1), V(-4.5, 0, -3.0), V(-2.6, 0, -2.0), V(-2.35, 0, -1.05)];
    await this.walkPath(dad, path, 0.95, true);
    // park alongside the belt: rotate the cart so its long side faces the belt
    const c0 = cart.rotation.y;
    g.tweens.add(0.8, (k) => {
      cart.rotation.y = lerp(c0, 0, easeInOutCubic(k));
      cart.position.set(lerp(cart.position.x, -1.28, k * 0.2), 0, lerp(cart.position.z, -1.06, k * 0.2));
    });
    g.tweens.add(0.8, (k) => {
      dad.root.position.x = lerp(dad.root.position.x, -2.25, k * 0.2);
      dad.root.rotation.y = lerp(dad.root.rotation.y, 0.6, k * 0.2);
    });
    await s.wait(0.9);
    cart.position.set(-1.28, 0, -1.06);
    dad.pose('idle', 3);
    dad.lookAt(V(-0.14, 1.3, 0.9));
    mom.lookAt(cart.position.clone().add(V(0, 1.4, 0)));
    mom.face('open');
    g.rig.go(SHOTS.flood, 1.6);
    // the tower wobbles; touch it (or wait) and it all comes down onto the belt
    this.cartTouchable = true;
    this.cartWobble = 1;
    let waited = 0;
    while (!this.dumped) {
      await s.wait(0.2);
      waited += 0.2;
      if (waited > 8 && !this.dumped) this.dumpCart();
    }
    mom.face('grin');
    await s.wait(2.5);
    mom.face('smile');
    dad.pose('idle', 3);
    // the flood
    await this.waitBeltClear(true, 1);
    await s.wait(0.5);
  }

  fillCart() {
    const g = this.g;
    const cart = g.cart;
    cart.position.set(-6.6, 0, -3.1);
    cart.rotation.y = 0;
    if (this.pile) cart.remove(this.pile);
    const pile = new THREE.Group();
    this.pile = pile;
    cart.add(pile);
    const { L, W, y0 } = cart.userData.size;
    this.pileMeshes = [];
    // a heap: drop each product where the mound is low and near the middle
    const cell = 0.05;
    const nx = Math.ceil((L + 0.1) / cell);
    const nz = Math.ceil((W + 0.06) / cell);
    const hf = new Float32Array(nx * nz).fill(y0 + 0.01);
    const list = CART_ITEMS.map((id) => product(id)).sort((a, b) => b.size.x * b.size.z - a.size.x * a.size.z + (Math.random() - 0.5) * 0.004);
    const rnd = Math.random;
    for (const p of list) {
      const rot = rnd() < 0.5 ? 0 : Math.PI / 2;
      const fx = rot ? p.size.z : p.size.x;
      const fz = rot ? p.size.x : p.size.z;
      let best = null;
      for (let k = 0; k < 18; k++) {
        const cx = (rnd() - 0.5) * (L - fx * 0.7);
        const cz = (rnd() - 0.5) * (W - fz * 0.7);
        const i0 = Math.max(0, Math.floor((cx - fx / 2 + L / 2 + 0.05) / cell));
        const i1 = Math.min(nx - 1, Math.floor((cx + fx / 2 + L / 2 + 0.05) / cell));
        const j0 = Math.max(0, Math.floor((cz - fz / 2 + W / 2 + 0.03) / cell));
        const j1 = Math.min(nz - 1, Math.floor((cz + fz / 2 + W / 2 + 0.03) / cell));
        let top = 0;
        for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) top = Math.max(top, hf[i * nz + j]);
        const score = top + Math.hypot(cx / L, cz / W) * 0.35;
        if (!best || score < best.score) best = { score, top, cx, cz, i0, i1, j0, j1 };
      }
      const m = new THREE.Mesh(p.geo, g.items.mat);
      m.castShadow = true;
      const h = p.size.y;
      m.position.set(best.cx, best.top + h / 2, best.cz);
      m.rotation.set((rnd() - 0.5) * 0.12, rot + (rnd() - 0.5) * 0.3, (rnd() - 0.5) * 0.12);
      m.userData.pid = p.id;
      pile.add(m);
      this.pileMeshes.push(m);
      const nt = best.top + h * 0.92;
      for (let i = best.i0; i <= best.i1; i++) for (let j = best.j0; j <= best.j1; j++) hf[i * nz + j] = nt;
    }
    // the giant rides on the bottom rack
    const wm = product('watermelon');
    const melonMesh = new THREE.Mesh(wm.geo, g.items.mat);
    melonMesh.add(new THREE.Mesh(wm.stickerGeo, g.items.mat));
    melonMesh.scale.setScalar(0.62);
    melonMesh.position.set(0.05, 0.2, 0);
    melonMesh.castShadow = true;
    cart.add(melonMesh);
    this.cartMelon = melonMesh;
    this.cartHit = new THREE.Mesh(new THREE.BoxGeometry(L + 0.3, 2.0, W + 0.4), new THREE.MeshBasicMaterial({ visible: false }));
    this.cartHit.position.y = 1.0;
    cart.add(this.cartHit);
    if (!this.cartTarget) {
      this.cartTarget = g.input.add({
        name: 'cart',
        priority: 2,
        enabled: () => this.cartTouchable && !this.dumped,
        objects: () => [this.cartHit],
        near: (x, y, r) => {
          const p = g.input.project(g.cart.position.clone().add(V(0, 1.2, 0)));
          const d = Math.hypot(p.x - x, p.y - y);
          return d < r * 2.5 ? { d } : null;
        },
        down: () => ({ up: () => this.dumpCart() }),
      });
    }
  }

  updateCart() {
    if (!this.pile || this.dumped) return;
    const t = this.time;
    const w = this.cartWobble;
    this.pile.rotation.x = Math.sin(t * 2.3) * 0.025 * w;
    this.pile.rotation.z = Math.sin(t * 1.7 + 1) * 0.02 * w;
  }

  dumpCart() {
    if (this.dumped) return;
    this.dumped = true;
    this.cartTouchable = false;
    const g = this.g;
    const cart = g.cart;
    const dad = g.dad;
    dad.pose('liftHigh', 6);
    dad.face('open');
    g.audio.squeak(1.5);
    // tip the whole basket toward the belt
    g.tweens.add(0.55, (k) => {
      cart.rotation.x = easeOutCubic(k) * 0.42;
      cart.position.y = Math.sin(k * Math.PI) * 0.05;
    });
    g.tweens.add(
      0.8,
      (k) => {
        cart.rotation.x = 0.42 * (1 - easeInOutCubic(k));
      },
      () => {
        cart.rotation.x = 0;
        dad.pose('cheer', 4);
        dad.face('happy');
        dad.jump(1.2);
        g.mom.pose('clap', 4);
        g.mom.onClap = () => g.audio.applause(0.1, 0.4, 1);
        this.s.wait(2).then(() => {
          dad.pose('idle', 3);
          g.mom.pose('idle', 3);
          g.mom.onClap = null;
        });
      },
      1.4,
    );
    // release every product as a real body, top of the pile first
    const meshes = this.pileMeshes.slice().sort((a, b) => b.position.y - a.position.y);
    const wp = V(0, 0, 0);
    const wq = new THREE.Quaternion();
    meshes.forEach((m, i) => {
      const delay = 0.12 + (i / meshes.length) * 0.55;
      g.timers.after(delay, () => {
        m.getWorldPosition(wp);
        m.getWorldQuaternion(wq);
        this.pile.remove(m);
        const it = g.items.spawn(m.userData.pid, wp.clone().add(V(0, 0.05, 0.05)), { quat: wq.clone() });
        const b = it.body;
        // aim at the belt, spread along its length
        const tx = clamp(-1.95 + Math.random() * 1.35, BELT.x0 + 0.1, BELT.x1 - 0.15);
        const tz = (Math.random() - 0.5) * 0.3;
        const ty = TOP + 0.15 + Math.random() * 0.25;
        const T = 0.42 + Math.random() * 0.12;
        b.velocity.set((tx - wp.x) / T, (ty - wp.y + 0.5 * 9.82 * T * T) / T, (tz - wp.z) / T);
        b.angularVelocity.set((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 8);
      });
    });
    g.audio.avalanche(46, 1.6);
    g.timers.after(0.5, () => g.rig.addShake(0.55));
    g.timers.after(0.9, () => g.rig.addShake(0.35));
  }

  // --- 5. the watermelon ---
  // Sweep the scale plate: anything left on it hops into the well (read on the way if it wasn't).
  clearPlate() {
    const g = this.g;
    let k = 0;
    for (const it of g.items.list) {
      const p = it.body.position;
      if (it.p.id === 'watermelon' || it.dragging) continue;
      if (p.x > SCANNER.x0 - 0.1 && p.x < BIN.x0 + 0.15 && Math.abs(p.z) < 0.4 && p.y > TOP - 0.1 && p.y < TOP + 0.6) {
        g.timers.after(k * 0.18, () => {
          if (!it.scanned) g.items.markScanned(it);
          g.items.hop(it, g.items.binTarget(), 0.15, 1);
        });
        k++;
      }
    }
  }

  async melonBeat() {
    const s = this.s;
    const g = this.g;
    const { dad, mom, cart } = g;
    this.clearPlate();
    g.rig.go(SHOTS.cart, 1.4);
    // Dad crouches, hugs the giant out of the bottom rack...
    dad.pose('reachLow', 3);
    dad.lookAt(cart.position.clone().add(V(0, 0.2, 0)));
    mom.lookAt(cart.position.clone().add(V(0, 0.2, 0)));
    mom.face('ooh');
    await s.wait(0.9);
    g.audio.groan(1);
    const mm = this.cartMelon;
    const handsMid = () => g.dad.handWorld('L', V(0, 0, 0)).add(g.dad.handWorld('R', V(0, 0, 0))).multiplyScalar(0.5);
    // carry: the melon follows Dad's hands
    cart.remove(mm);
    g.scene.add(mm);
    this.carryMelon = { mesh: mm, get: handsMid };
    dad.pose('lift', 2.5);
    g.tweens.add(1.0, (k) => mm.scale.setScalar(lerp(0.62, 1, easeOutCubic(k))));
    await s.wait(1.2);
    dad.pose('liftHigh', 2);
    await s.wait(1.0);
    // ...and sets it down on the belt: THUD
    g.scene.remove(mm);
    this.carryMelon = null;
    const dir = V(0.2, 0.55, 1).normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(V(-1, 0, 0), dir);
    const it = g.items.spawn('watermelon', V(-1.35, TOP + 0.4, 0), { quat: q });
    it.body.velocity.set(0.1, -0.5, 0);
    this.melon = it;
    dad.pose('idle', 3);
    dad.face('grin');
    dad.lookAt(V(-0.14, 1.3, 0.9));
    g.rig.go(SHOTS.work, 1.8);
    // roll it to the scale with the belt (heavy!) and turn it until the sticker faces the glass
    let idle = 0;
    while (!it.scanned) {
      await s.wait(0.25);
      idle = g.input.idleTime;
      if (idle > 10 && this.time - this.hintAt > 12) {
        this.hintAt = this.time;
        if (!this.melonParked) await this.clerkPressesButton();
        else {
          // Dad gives it a little push to show it turns
          dad.pose('reach', 4);
          await s.wait(0.5);
          this.rollMelon(1);
          await s.wait(0.6);
          dad.pose('idle', 3);
        }
      }
    }
    // celebration
    g.audio.fanfare();
    g.rig.addShake(0.3);
    for (let i = 0; i < 6; i++) this.wakeNextLight(0.12 * i);
    mom.pose('cheer', 4);
    dad.pose('cheer', 4);
    mom.face('happy');
    dad.face('happy');
    mom.jump(1.6);
    dad.jump(1.4);
    g.audio.applause(2.2, 1, 2);
    await s.wait(2.4);
    mom.pose('idle', 3);
    dad.pose('idle', 3);
    mom.face('smile');
    // Dad lifts it off the scale and back to the cart
    dad.pose('reach', 3);
    await this.walk(dad, V(-0.55, 0, -1.0), 1.0);
    dad.root.rotation.y = 0;
    dad.pose('lift', 3);
    await s.wait(0.6);
    g.items.remove(it);
    this.melon = null;
    this.melonParked = false;
    this.melonSpin = null;
    const carry = new THREE.Mesh(product('watermelon').geo, g.items.mat);
    carry.add(new THREE.Mesh(product('watermelon').stickerGeo, g.items.mat));
    carry.castShadow = true;
    g.scene.add(carry);
    this.carryMelon = { mesh: carry, get: handsMid };
    g.audio.groan(0.8);
    await this.walk(dad, V(-2.3, 0, -1.2), 0.8);
    this.carryMelon = null;
    g.scene.remove(carry);
    cart.add(mm);
    mm.scale.setScalar(0.62);
    mm.position.set(0.05, 0.2, 0);
    mm.rotation.set(0, 0, 0);
    dad.pose('idle', 3);
    dad.root.rotation.y = 0.5;
    dad.lookAt(V(-0.14, 1.3, 0.9));
  }

  onMelonOnScale() {
    const g = this.g;
    g.rig.addShake(0.5);
    g.rig.go(SHOTS.melon, 1.4);
    g.screen.showWeight(this.melon.p.mass);
    g.audio.thud('giant', 1);
    this.bounceAll();
  }

  bounceAll() {
    this.g.bounceBin(0.5);
  }

  melonSession(item, e) {
    const g = this.g;
    const start = rayToPlaneY(e.ray, TOP + 0.25) || V(0, 0, 0);
    let last = start.clone();
    return {
      move: (ev) => {
        const h = rayToPlaneY(ev.ray, TOP + 0.25);
        if (!h) return;
        const d = h.clone().sub(last);
        if (d.length() > 0.06) {
          // roll in the swipe direction (axis = up × swipe), nudged toward the glass
          const axis = V(0, 1, 0).cross(d.normalize());
          this.rollMelon(1, axis);
          last = h.clone();
        }
      },
      tap: () => {
        if (!this.melonParked) {
          // on the belt: a poke helps the belt along
          g.beltMomentum = Math.max(g.beltMomentum, 0.45);
          g.audio.thud('giant', 0.3);
          return;
        }
        this.rollMelon(1);
      },
    };
  }

  // a quarter turn, biased so the sticker heads for the glass
  rollMelon(strength = 1, axisHint = null) {
    const g = this.g;
    const it = this.melon;
    if (!it || it.scanned) return;
    const b = it.body;
    b.wakeUp();
    const sd = g.items.stickerDir(it, V(0, 0, 0)).clone();
    const want = V(0, -1, -0.25).normalize();
    let axis = new THREE.Vector3().crossVectors(sd, want);
    if (axis.length() < 0.05) axis = V(1, 0, 0);
    axis.normalize();
    if (axisHint) axis.lerp(axisHint.normalize(), 0.35).normalize();
    const angle = Math.min(Math.PI / 3, sd.angleTo(want) + 0.05);
    this.melonSpin = { axis, left: angle, rate: 3.2 * strength };
    g.audio.thud('giant', 0.35);
    g.audio.groan(0.5);
    it.squash = 0.4;
  }

  updateMelon(dt) {
    const sp = this.melonSpin;
    const it = this.melon;
    if (!it || !sp) return;
    const step = Math.min(sp.left, sp.rate * dt);
    sp.left -= step;
    const q = new THREE.Quaternion().setFromAxisAngle(sp.axis, step);
    const b = it.body;
    const cq = new THREE.Quaternion(b.quaternion.x, b.quaternion.y, b.quaternion.z, b.quaternion.w);
    cq.premultiply(q);
    b.quaternion.set(cq.x, cq.y, cq.z, cq.w);
    b.angularVelocity.set(0, 0, 0);
    if (sp.left <= 0.0001) this.melonSpin = null;
  }

  // --- 6. total, drawer, money ---
  async totalBeat() {
    const s = this.s;
    const g = this.g;
    const co = g.co;
    this.clearPlate();
    g.rig.go(SHOTS.total, 1.6);
    co.totalGlow = 1;
    let waited = 0;
    while (!this.totalPressed) {
      await s.wait(0.25);
      waited += 0.25;
      if (waited > 9 && this.time - this.hintAt > 12) {
        this.hintAt = this.time;
        // the clerk taps the glowing key's edge, then pulls back: "that one"
        g.clerk.pose('reachLow', 4);
        g.clerk.lookAt(co.totalKey.getWorldPosition(V(0, 0, 0)));
        await s.wait(1.2);
        g.clerk.pose('idle', 3);
      }
    }
    co.totalGlow = 0;
    // KA-CHING: the drawer flies open toward your belly
    g.screen.setMode('total');
    co.drawerTarget = 1;
    g.audio.drawerOpen();
    g.rig.bump(0.0, 0.05);
    g.rig.addShake(0.25);
    g.mom.face('happy');
    g.dad.face('happy');
    await s.wait(0.9);
    this.stage = 'pay';
    g.rig.go(SHOTS.pay, 1.3);
    // Mom comes to the front with money in her hand
    await this.walk(g.mom, V(-0.3, 0, -0.95), 1.0);
    g.mom.root.rotation.y = 0.1;
    g.mom.pose('reach', 4);
    g.mom.lookAt(V(-0.14, 1.2, 0.8));
    this.money.visible = true;
    this.moneyFollow = true;
    let w = 0;
    while (!this.paid) {
      await s.wait(0.25);
      w += 0.25;
      if (w > 7) {
        w = 0;
        g.audio.coin(0);
        this.moneyJiggle = 1;
      }
    }
    await s.wait(1.4);
    g.mom.pose('idle', 3);
    // close the drawer (or it closes itself after a while)
    w = 0;
    while (!this.drawerClosed) {
      await s.wait(0.25);
      w += 0.25;
      if (w > 6 && !this.drawerClosed) {
        g.co.drawerTarget = 0.85;
        g.timers.after(0.15, () => (g.co.drawerTarget = 1));
        w = 2;
      }
      if (w > 14) this.tapDrawer();
    }
  }

  tapTotal() {
    const g = this.g;
    if (this.stage === 'total' && !this.totalPressed) {
      this.totalPressed = true;
      g.audio.keyBeep(15);
      return;
    }
    if (g.co.power > 0) g.audio.keyBeep(14);
  }

  takeMoney() {
    if (this.paid) return;
    this.paid = true;
    const g = this.g;
    const co = g.co;
    this.moneyFollow = false;
    // coins arc into their cups one by one, the bill under the clip
    const slots = co.coinSlots;
    this.coins.forEach((c, i) => {
      const start = c.getWorldPosition(V(0, 0, 0));
      g.scene.attach(c);
      g.timers.after(i * 0.16, () => {
        g.tweens.add(
          0.45,
          (k) => {
            const to = slots[i % slots.length].getWorldPosition(V(0, 0, 0)).add(V(0, 0.03, 0));
            c.position.lerpVectors(start, to, easeInOutCubic(k));
            c.position.y += Math.sin(Math.PI * k) * 0.15;
            c.rotation.x += 0.4;
          },
          () => {
            g.audio.coin(0);
            g.fx.burst(c.position.clone(), '#ffd34a', 5, 0.5, 0.02, 2);
            slots[i % slots.length].attach(c);
          },
        );
      });
    });
    const b = this.bill;
    const bs = b.getWorldPosition(V(0, 0, 0));
    g.scene.attach(b);
    g.tweens.add(
      0.6,
      (k) => {
        const to = co.drawer.getWorldPosition(V(0, 0, 0)).add(V(-0.1, -0.03, -0.1));
        b.position.lerpVectors(bs, to, easeInOutCubic(k));
        b.position.y += Math.sin(Math.PI * k) * 0.12;
        b.rotation.z = lerp(0.3, 0, k);
      },
      () => co.drawer.attach(b),
      0.7,
    );
    g.mom.face('happy');
  }

  tapDrawer() {
    const g = this.g;
    if (this.stage !== 'pay' || !this.paid || this.drawerClosed) return;
    this.drawerClosed = true;
    g.co.drawerTarget = 0;
    g.audio.drawerClose();
    g.rig.bump(0, -0.03);
    g.screen.setMode('paid');
  }

  // --- 7. the receipt ---
  async receiptBeat() {
    const s = this.s;
    const g = this.g;
    const r = g.receipt;
    this.itemsLive = false;
    this.beltLive = false;
    g.mom.face('smile');
    await this.walk(g.mom, V(0.15, 0, -1.25), 0.9);
    g.mom.root.rotation.y = 0;
    g.mom.lookAt(g.co.slotWorld.clone());
    g.dad.lookAt(g.co.slotWorld.clone());
    g.rig.go(SHOTS.printer, 1.6);
    await s.wait(1.2);
    r.setItems(g.registered, g.total);
    this.buildReceiptEvents();
    r.onLine = (i, item) => this.onReceiptLine(i, item);
    r.onTotal = () => this.onReceiptTotal();
    r.onCut = () => (this.receiptCut = true);
    r.start();
    g.co.printerLed.material.color.set('#ffd34a');
    this.receiptStartT = this.time;
    this.receiptCam = { pos: g.rig.cur.pos.clone(), at: g.rig.cur.at.clone(), fov: g.rig.cur.fov, follow: 0 };
    g.rig.to = (aspect, out) => this.receiptShot(aspect, out);
    g.rig.from = null;
    g.rig.k = 1;
    await s.until(() => this.receiptCut);
    g.audio.setPrinter(0);
    g.audio.noiseBurst(g.audio.t, 0.08, { gain: 0.4, type: 'highpass', freq: 2500, verb: 0.2 });
    g.co.printerLed.material.color.set('#30ff60');
    // the whole store is lit; rise above it all
    this.stage = 'overview';
    this.allLightsOn(0.02);
    await s.wait(0.6);
    const cur = { pos: g.rig.cur.pos.clone(), at: g.rig.cur.at.clone(), fov: g.rig.cur.fov };
    g.rig.cur = cur;
    g.rig.go(SHOTS.overview, 7, { ease: easeInOutCubic });
    g.audio.whoosh(4, 0.08);
    this.festival = true;
    g.mom.pose('cheer', 3);
    g.dad.pose('cheer', 3);
    g.mom.lookAt(V(0, 6, 0));
    g.dad.lookAt(V(0, 6, 0));
    await s.wait(3.5);
    this.danceWave(0, 6);
    g.audio.applause(3, 0.5, 3);
    await s.wait(5.5);
    g.mom.pose('idle', 3);
    g.dad.pose('idle', 3);
    // back down to the printer: the last thing on the paper is your stamp
    g.rig.go(SHOTS.stamp, 3.2, { ease: easeInOutCubic });
    g.audio.whoosh(2.5, 0.06);
    await s.wait(3.4);
    const sp = r.at(0.54, V(0, 0, 0));
    g.tweens.add(0.25, (k) => (r.uniforms.uStamp.value = easeOutBack(k, 3)));
    g.audio.thud('soft', 1.2);
    g.audio.tone('sine', 880, g.audio.t, 0.08, { gain: 0.15, release: 0.4, verb: 0.5 });
    g.fx.burst(sp.add(V(0, 0.02, 0)), '#ff6a5a', 18, 0.7, 0.04, 1);
    g.fx.burst(sp, '#ffd34a', 12, 0.9, 0.04, 1);
    g.rig.bump(-0.01);
    g.mom.face('happy');
    await s.wait(2.4);
  }

  buildReceiptEvents() {
    const g = this.g;
    const r = g.receipt;
    const ev = [];
    const p = V(0, 0, 0);
    // fixtures and shelf sections near the route light up / dance as the head passes
    const step = 0.25;
    const seenF = new Set();
    const seenS = new Set();
    for (let sv = 0; sv < r.pathLen; sv += step) {
      r.at(sv, p);
      for (const f of g.lights.fixtures) {
        if (seenF.has(f)) continue;
        if (Math.hypot(f.x - p.x, f.z - p.z) < 2.0) {
          seenF.add(f);
          ev.push({ s: sv, f });
        }
      }
      for (const sec of g.store.sections) {
        if (seenS.has(sec)) continue;
        if (Math.hypot(sec.x - p.x, sec.z - p.z) < 1.3) {
          seenS.add(sec);
          ev.push({ s: sv + 0.3, sec });
        }
      }
    }
    ev.sort((a, b) => a.s - b.s);
    this.receiptEvents = ev;
    this.receiptEvIdx = 0;
  }

  onReceiptLine(i, item) {
    const g = this.g;
    g.audio.musicBox(item.note ?? i, { chord: i % 4 === 0, gain: 0.9 });
    const sp = g.co.slotWorld;
    if (i % 2 === 0) g.fx.burst(sp.clone().add(V(0, 0.03, 0)), '#ffffff', 3, 0.35, 0.02, 1.5);
  }

  onReceiptTotal() {
    const g = this.g;
    g.audio.fanfare();
    g.audio.applause(2.5, 0.8, 2);
    this.allLightsOn(0.03);
  }

  allLightsOn(stagger = 0.03) {
    const g = this.g;
    const L = g.lights;
    const cam = g.engine.camera.position;
    const off = L.fixtures.filter((f) => f.target !== 1);
    off.sort((a, b) => Math.hypot(a.x - cam.x, a.z - cam.z) - Math.hypot(b.x - cam.x, b.z - cam.z));
    off.forEach((f, i) => {
      L.turnOn(f, i * stagger);
      if (i % 3 === 0) g.timers.after(i * stagger, () => g.audio.fluoro(clamp((f.x - cam.x) / 10, -1, 1), Math.hypot(f.x - cam.x, f.z - cam.z), 0.6));
    });
    g.timers.after(off.length * stagger + 0.2, () => this.updateHum());
  }

  receiptShot(aspect, out) {
    const g = this.g;
    const r = g.receipt;
    const rc = this.receiptCam;
    const head = r.len;
    const dt = 1 / 60;
    let pos;
    let at;
    let fov;
    const portrait = aspect < 0.9;
    if (head < 2.6) {
      const base = g.rig.resolve(SHOTS.printer);
      pos = base.pos;
      at = base.at;
      fov = base.fov;
    } else {
      const hp = r.at(head, V(0, 0, 0), (this._t = this._t || V(0, 0, 0)));
      const tan = this._t.clone();
      const look = r.at(Math.min(r.pathLen, head + 2.5), V(0, 0, 0));
      const prog = clamp((head - 2.6) / 25, 0, 1);
      // above the shelf tops, a little behind the leading edge, looking along the route
      const height = lerp(1.5, 2.4, prog) + (portrait ? 0.4 : 0);
      const back = lerp(1.5, 2.2, prog) + (portrait ? 0.3 : 0);
      pos = hp.clone().addScaledVector(tan, -back).add(V(0, height, 0));
      at = look.clone().lerp(hp, 0.55);
      fov = portrait ? 68 : 60;
    }
    rc.follow = Math.min(1, rc.follow + dt * 0.5);
    const k = head < 2.6 ? 0.05 : 0.035;
    rc.pos.lerp(pos, k);
    rc.at.lerp(at, k * 1.4);
    rc.fov = lerp(rc.fov, fov, 0.04);
    out.pos.copy(rc.pos);
    out.at.copy(rc.at);
    out.fov = rc.fov;
    return out;
  }

  updateReceipt(dt) {
    const g = this.g;
    const r = g.receipt;
    if (r.state === 'printing') {
      // if nobody pulls, the printer keeps going on its own, a bit faster as time passes
      const since = g.input.idleTime;
      this.receiptCrawl = since > 3 ? Math.min(1.6, 0.12 + (since - 3) * 0.08) : 0.12;
      g.audio.setPrinter(Math.min(1, r.feed / 3));
      // events at the head
      const ev = this.receiptEvents;
      while (ev && this.receiptEvIdx < ev.length && ev[this.receiptEvIdx].s <= r.len) {
        const e = ev[this.receiptEvIdx++];
        if (e.f) {
          if (g.lights.turnOn(e.f)) {
            const cam = g.engine.camera.position;
            g.audio.fluoro(clamp((e.f.x - cam.x) / 6, -1, 1), Math.hypot(e.f.x - cam.x, e.f.z - cam.z));
          }
        }
        if (e.sec) g.store.danceSection(e.sec, 1, 1.2);
      }
      if (this.time % 2 < dt) this.updateHum();
      // the leading edge leaves a trail of sparkles: easy to follow, even from far away
      this.trailT = (this.trailT || 0) - dt;
      if (this.trailT <= 0 && r.len > 1.0) {
        this.trailT = 0.06;
        const hp = r.at(r.len, V(0, 0, 0));
        g.fx.burst(hp.add(V(0, 0.04, 0)), '#fff6d0', 2, 0.35, 0.05, 0.5);
      }
    }
  }

  updateFestival() {
    const g = this.g;
    if (this.festival) {
      // a slow wave of warm colours rolling across the ceiling
      const t = this.time;
      for (const f of g.lights.fixtures) {
        const ph = f.x * 0.25 + f.z * 0.18 - t * 1.4;
        const k = 0.5 + 0.5 * Math.sin(ph);
        const hue = (0.08 + 0.12 * Math.sin(ph * 0.5 + 1)) % 1;
        const c = new THREE.Color().setHSL(hue, 0.55 * k, 0.75 + 0.1 * k);
        f.tintTarget.copy(c);
      }
    }
  }

  receiptPull(e) {
    const g = this.g;
    let lx = e.x;
    let ly = e.y;
    const scale = 2.6 / Math.min(g.engine.size.w, g.engine.size.h);
    return {
      move: (ev) => {
        const d = Math.hypot(ev.x - lx, ev.y - ly);
        lx = ev.x;
        ly = ev.y;
        g.receipt.pull(d * scale);
      },
      tap: () => g.receipt.pull(0.5),
    };
  }

  danceWave(x0 = 0, speed = 6) {
    const g = this.g;
    for (const sec of g.store.sections) {
      const d = Math.hypot(sec.x - x0, sec.z - 0);
      g.timers.after(d / speed, () => g.store.danceSection(sec, 1, 1.0));
    }
  }

  // --- 8. the announcement ---
  async announceBeat() {
    const s = this.s;
    const g = this.g;
    const co = g.co;
    g.rig.go(SHOTS.announce, 4.5, { ease: easeInOutCubic });
    await s.wait(4.6);
    this.micArmed = true;
    co.micBtnMat.emissiveIntensity = 1.2;
    while (!this.announced) {
      await s.wait(0.25);
      co.micLamp.material.color.setRGB(0.4 + 0.3 * Math.sin(this.time * 4), 0.05, 0.03);
    }
  }

  async tapMic() {
    const g = this.g;
    const co = g.co;
    if (this.recording) {
      // a second press ends the announcement
      this.stopRecording = true;
      g.audio.click(0.8);
      return;
    }
    if (!this.micArmed || this.micBusy) {
      // before the end it is just a microphone: a little "tok" and a wobble
      g.audio.click(0.8);
      this.wiggle(co.micHead, 0.25);
      return;
    }
    this.micBusy = true;
    const s = this.s;
    co.micBtnMat.emissiveIntensity = 2.5;
    co.micLamp.material.color.set('#ff2a1a');
    this.wiggle(co.micHead, 0.4);
    g.mom.lookAt(V(0, STORE.h, -2));
    g.dad.lookAt(V(-1, STORE.h, -2));
    g.mom.pose('lookUp', 3);
    g.dad.pose('lookUp', 3);
    const chimeDur = g.audio.chime(true);
    // light rings from every ceiling speaker with the chime
    this.speakerPulse(1);
    await s.wait(chimeDur);
    // listen
    const ok = await g.audio.startVoice();
    let buffer = null;
    if (ok) {
      this.recording = true;
      this.voiceActive = true;
      let t = 0;
      let heard = 0;
      let quiet = 0;
      this.stopRecording = false;
      while (t < 6 && !this.stopRecording) {
        await s.wait(0.05);
        t += 0.05;
        const lv = g.audio.voiceLevel();
        this.voiceLevel = lv;
        if (lv > 0.04) {
          heard += 0.05;
          quiet = 0;
        } else quiet += 0.05;
        if (heard > 0.3 && quiet > 1.2) break;
      }
      this.recording = false;
      buffer = g.audio.stopVoice();
    }
    co.micLamp.material.color.set('#ff8a30');
    // the store speaks with your voice
    g.rig.go(SHOTS.voice, 1.8, { ease: easeInOutCubic });
    await s.wait(0.6);
    const dur = buffer ? g.audio.playPA(buffer) : g.audio.playSongPA(g.registered.map((r) => r.note));
    this.voiceActive = true;
    this.playing = true;
    await s.wait(dur + 1.2);
    this.playing = false;
    this.voiceActive = false;
    g.lights.pulse = 0;
    g.receipt.uniforms.uFlutter.value = 0;
    g.audio.chime(false);
    this.speakerPulse(0.6);
    g.mom.pose('cheer', 3);
    g.dad.pose('cheer', 3);
    g.mom.face('happy');
    g.dad.face('happy');
    g.audio.applause(2.5, 1, 3);
    g.mom.jump(1.5);
    g.dad.jump(1.3);
    await s.wait(2.6);
    g.mom.pose('idle', 3);
    g.dad.pose('idle', 3);
    co.micLamp.material.color.set('#3a0a08');
    co.micBtnMat.emissiveIntensity = 0.8;
    this.micBusy = false;
    this.announced = true;
  }

  speakerPulse(strength) {
    const g = this.g;
    for (const sp of g.store.speakers) g.fx.ring(sp.clone().add(V(0, -0.05, 0)), '#ffe9a8', { r0: 0.1, r1: 1.4 * strength, dur: 0.9, opacity: 0.5 });
  }

  updateVoice(dt) {
    const g = this.g;
    const lv = this.recording ? this.voiceLevel || 0 : this.playing ? g.audio.paLevel() : 0;
    this.voiceSm = damp(this.voiceSm || 0, lv, 18, dt);
    const v = clamp(this.voiceSm * 5, 0, 1.5);
    g.lights.pulse = v * 0.8;
    g.receipt.uniforms.uFlutter.value = v * 2.5;
    if (this.recording) {
      const head = g.co.micHead.getWorldPosition(V(0, 0, 0));
      if (v > 0.25 && Math.random() < v * 0.4) g.fx.ring(head, '#ff8a6a', { r0: 0.03, r1: 0.25 * v + 0.1, dur: 0.5, up: false, face: g.engine.camera.position, opacity: 0.6 });
    }
    if (this.playing && v > 0.15) {
      this.spkT = (this.spkT || 0) - dt;
      if (this.spkT <= 0) {
        this.spkT = 0.12;
        for (const sp of g.store.speakers) if (Math.random() < 0.5) g.fx.ring(sp.clone().add(V(0, -0.05, 0)), '#fff2c8', { r0: 0.1, r1: 0.4 + v * 1.2, dur: 0.6, opacity: 0.35 + v * 0.3 });
        // shelves bounce to the voice
        const secs = g.store.sections;
        for (let i = 0; i < 4; i++) g.store.danceSection(secs[Math.floor(Math.random() * secs.length)], Math.min(1, v), 0.7);
      }
    }
  }

  // --- 9. after ---
  finale() {
    const g = this.g;
    g.rig.go(SHOTS.final, 4, { ease: easeInOutCubic });
    const again = document.getElementById('again');
    again.classList.add('show');
    this.micArmed = true;
    this.announced = false;
    // the microphone stays live: every new announcement replays the voice ritual
    (async () => {
      while (true) {
        await this.s.until(() => this.micBusy);
        await this.s.until(() => !this.micBusy);
        g.rig.go(SHOTS.final, 3, { ease: easeInOutCubic });
      }
    })();
  }

  // ---------- generic interactions ----------
  fallback(e) {
    const g = this.g;
    if (this.stage === 'outside') {
      this.openDoors();
      return null;
    }
    if (this.stage === 'floor') {
      this.hop();
      return null;
    }
    if (this.stage === 'receipt') return this.receiptPull(e);
    if (this.stage === 'overview' || this.stage === 'free' || this.stage === 'announce') {
      // poke the store: a light flashes and sings where you touched
      const h = rayToPlaneY(e.ray, 0.01);
      if (h) {
        let best = null;
        let bd = 1e9;
        for (const f of g.lights.fixtures) {
          const d = Math.hypot(f.x - h.x, f.z - h.z);
          if (d < bd) {
            bd = d;
            best = f;
          }
        }
        if (best && bd < 3) {
          best.level = 0.2;
          best.flicker = 0.15;
          best.target = 1;
          g.audio.musicBox(Math.floor(Math.random() * 32), { gain: 0.7 });
          g.fx.burst(V(best.x, STORE.h - 0.4, best.z), '#ffe9a8', 10, 1.2, 0.08, 2);
        }
      }
      return null;
    }
    return null;
  }

  pokePerson(ch) {
    const g = this.g;
    if (ch._poked) return;
    ch._poked = true;
    const prev = ch.poseName;
    ch.face('happy');
    ch.pose('wave', 6);
    g.audio.giggle(ch === g.dad ? 0.75 : ch === g.clerk ? 0.9 : 1.1);
    ch.jump(0.8);
    this.s.wait(1.2).then(() => {
      ch.pose(prev === 'wave' ? 'idle' : prev, 4);
      ch.face('smile');
      ch._poked = false;
    });
  }

  wiggle(obj, amt) {
    const r0 = obj.rotation.z;
    this.g.tweens.add(0.5, (k) => (obj.rotation.z = r0 + Math.sin(k * Math.PI * 6) * amt * 0.2 * (1 - k)));
  }

  // walk a character to a point (feet on the floor)
  async walk(ch, to, speed = 1) {
    const from = ch.root.position.clone();
    const d = from.distanceTo(to);
    if (d < 0.02) return;
    const dur = d / speed;
    const dir = to.clone().sub(from);
    const yaw = Math.atan2(dir.x, dir.z);
    ch.walk = 1;
    const y0 = ch.root.rotation.y;
    const s = this.s;
    let k = 0;
    while (k < 1) {
      await s.wait(1 / 60);
      k = Math.min(1, k + 1 / 60 / dur);
      ch.root.position.lerpVectors(from, to, smooth(k));
      ch.root.rotation.y = lerpAngle(y0, yaw, Math.min(1, k * 4));
    }
    ch.walk = 0;
  }

  async walkPath(ch, pts, speed = 1, withCart = false) {
    const g = this.g;
    const s = this.s;
    ch.walk = 1;
    let squeakT = 0;
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i];
      const b = pts[i + 1];
      const d = a.distanceTo(b);
      const dur = d / speed;
      const yaw = Math.atan2(b.x - a.x, b.z - a.z);
      let k = 0;
      const y0 = ch.root.rotation.y;
      while (k < 1) {
        await s.wait(1 / 60);
        k = Math.min(1, k + 1 / 60 / dur);
        ch.root.position.lerpVectors(a, b, k);
        ch.root.rotation.y = lerpAngle(y0, yaw, Math.min(1, k * 3));
        if (withCart) {
          const c = g.cart;
          const fwd = V(Math.sin(ch.root.rotation.y), 0, Math.cos(ch.root.rotation.y));
          c.position.copy(ch.root.position).addScaledVector(fwd, 0.85);
          c.rotation.y = ch.root.rotation.y - Math.PI / 2;
          for (const w of c.userData.wheels) w.rotation.y += 0.2;
          squeakT -= 1 / 60;
          if (squeakT <= 0) {
            squeakT = 0.35 + Math.random() * 0.3;
            g.audio.squeak(0.8);
            g.audio.rattle(0.6);
          }
        }
      }
    }
    ch.walk = 0;
  }

  updateCarry() {
    const c = this.carryMelon;
    if (!c) return;
    c.mesh.position.copy(c.get()).add(V(0, 0.12, 0.12));
  }

  // ---------- debug ----------
  async debugSkip(to) {
    const g = this.g;
    // fast-forward for testing: ?skip=scan|cart|melon|total|receipt|announce
    this.climbed = true;
    this.entered = true;
    g.store.exterior.visible = false;
    g.co.stool.position.set(CASHIER.x, 0, CASHIER.z + 0.04);
    g.co.stool.rotation.y = 0;
    g.co.setPower(1);
    g.screen.setMode('main');
    this.keyInserted = true;
    this.keyTurned = true;
    this.keyTurnK = 1;
    this.key.visible = true;
    this.itemsLive = true;
    this.beltLive = true;
    g.items.scanEnabled = true;
    g.clerk.root.position.set(-1.6, 0, 1.75);
    g.clerk.root.rotation.y = 2.55;
    g.rig.cut(SHOTS.work);
    const fake = (n) => {
      const ids = ['apple', 'banana', 'milk', 'bread', 'eggs', 'cereal', 'can', 'juice', 'chips', 'cookies', 'orange', 'tomato'];
      for (let i = 0; i < n; i++) {
        const p = product(ids[i % ids.length]);
        g.registered.push({ icon: p.icon, price: p.price, note: i });
        g.total += p.price;
        g.screen.addItem(p);
        this.scans++;
      }
    };
    if (to === 'scan') {
      this.stage = 'scan';
      await this.momBeat();
      to = 'cart';
    }
    if (to === 'cart') {
      fake(14);
      for (let i = 0; i < 8; i++) this.wakeNextLight();
      this.stage = 'cart';
      await this.cartBeat();
      to = 'melon';
    }
    if (to === 'melon') {
      if (this.scans === 0) fake(70);
      for (let i = 0; i < 20; i++) this.wakeNextLight();
      g.dad.root.visible = true;
      g.dad.root.position.set(-2.25, 0, -1.2);
      g.dad.root.rotation.y = 0.6;
      g.cart.visible = true;
      if (!this.pile) this.fillCart();
      for (const m of this.pileMeshes) this.pile.remove(m);
      this.pileMeshes = [];
      g.cart.position.set(-1.28, 0, -1.06);
      g.cart.rotation.y = 0;
      g.mom.root.position.set(-0.42, 0, -1.08);
      this.stage = 'melon';
      await this.melonBeat();
      to = 'total';
    }
    if (to === 'total' || to === 'receipt' || to === 'announce') {
      if (this.scans === 0) {
        fake(90);
        for (let i = 0; i < 26; i++) this.wakeNextLight();
        g.dad.root.visible = true;
        g.dad.root.position.set(-2.3, 0, -1.2);
        g.cart.visible = true;
        this.fillCart();
        for (const m of this.pileMeshes) this.pile.remove(m);
        g.cart.position.set(-1.28, 0, -1.06);
        g.mom.root.position.set(-0.42, 0, -1.08);
      }
    }
    if (to === 'total') {
      this.stage = 'total';
      await this.totalBeat();
      to = 'receipt';
    }
    if (to === 'receipt') {
      this.stage = 'receipt';
      await this.receiptBeat();
      to = 'announce';
    }
    if (to === 'announce') {
      this.stage = 'announce';
      if (g.receipt.state !== 'done') {
        g.receipt.setItems(g.registered, g.total);
        g.receipt.start();
        g.receipt.len = g.receipt.paperLen;
        g.receipt.uniforms.uLen.value = g.receipt.len;
        g.receipt.state = 'done';
        g.receipt.uniforms.uStamp.value = 1;
        this.allLightsOn(0);
        this.festival = true;
      }
      await this.announceBeat();
      this.stage = 'free';
      this.finale();
    }
  }
}

function lerpAngle(a, b, t) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

export { SHOTS };
