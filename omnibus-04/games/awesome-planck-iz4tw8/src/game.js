// Game flow: the courier, residents, deliveries, doors, camera framing.
import * as THREE from 'three';
import { Courier, LEG, HW } from './courier.js';
import { Resident, makeKids } from './residents.js';
import { LEVEL } from './level.js';
import { setLeaf } from './building.js';
import { setStaticEnabled } from './physics.js';
import { makeParcel } from './parcel.js';
import { Finale } from './finale.js';

const REACH = 1.45;

export class Game {
  constructor(ctx) {
    Object.assign(this, ctx);
    this.courier = new Courier(this);
    this.residents = [];
    for (const st of LEVEL.stops) {
      if (st.who === 'kids') { const kids = makeKids(this.scene, st); kids.forEach(k => { k.stop = st; k.group = kids; }); this.residents.push(...kids); this.kids = kids; }
      else this.residents.push(new Resident(this.scene, st));
    }
    this.doorAnims = [];
    this.delivery = null;
    this.flyingParcels = [];
    this.finale = new Finale(this);
    this.day = 0;
    this.served = 0;
    this.timers = [];
    this.reset();
  }

  reset() {
    const c = this.courier;
    const pole = this.props.poles[LEVEL.start.hold];
    c.pos.set(pole.hold.ax + 1.1, LEVEL.start.y);
    c.grab(pole.hold, pole.hold.ax, LEVEL.start.y, false);
    c.phi = 0.25; c.omega = 0;
    if (c.parcel.parent !== c.h.j.chest) {
      c.parcel = makeParcel();
      c.h.j.chest.add(c.parcel);
      c.parcel.position.set(0, -0.12, 0.26);
    }
    c.hasParcel = true; c.parcel.visible = true; c.parcel.scale.setScalar(1);
    c.overridePose = null;
    for (const r of this.residents) {
      r.state = 'idle'; r.served = false;
      if (r.parcel) { r.parcel.parent?.remove(r.parcel); r.parcel = null; }
    }
    // doors back to their initial state
    for (const b of LEVEL.buildings) for (const o of b.openings || []) this.setOpening(o.id, o.open, true);
    this.served = 0;
    this.time = 0;
    this.delivery = null;
    // establishing shot: the whole street and the sky full of falling things
    this.intro = 4.5;
    this.stuff?.burst();
  }

  later(sec, fn) { this.timers.push({ t: sec, fn }); }

  setOpening(id, open, instant = false) {
    const rec = this.town.openings.get(id);
    this.w2d.setOpen(id, open);
    setStaticEnabled(id, !open);
    if (!rec) return;
    if (instant) setLeaf(rec, open ? 1 : 0);
    else this.doorAnims.push({ rec, from: rec.leaves.t, to: open ? 1 : 0, t: 0 });
    if (!instant) this.audio?.slide();
  }

  // the resident the courier should be heading for
  focusResident() {
    const c = this.courier;
    let best = null, bd = 1e9;
    for (const r of this.residents) {
      if (r.served) continue;
      if (r.group && r !== r.group[1]) continue;
      const dx = r.spot.x - c.pos.x;
      if (dx < -6) continue; // left behind (upstream): out of reach now
      const d = Math.abs(dx) + Math.abs(r.spot.y - c.pos.y) * 0.5 + (dx < 0 ? 4 : 0);
      if (d < bd) { bd = d; best = r; }
    }
    return best;
  }

  update(dt, input) {
    this.time += dt;
    for (let i = this.timers.length - 1; i >= 0; i--) { const tm = this.timers[i]; tm.t -= dt; if (tm.t <= 0) { this.timers.splice(i, 1); tm.fn(); } }
    const c = this.courier;
    // the world point under the finger is fixed when it touches / moves, so the camera
    // gliding along doesn't drag the courier's goal around under a still finger
    if (input.pressed || input.moved || (input.released && !this.lockTarget)) this.lockTarget = this.rig.pickPlane(input.sx, input.sy);
    const target = input.down || input.released ? this.lockTarget : null;
    this.target = target;
    const inp = { down: input.down, pressed: input.pressed, released: input.released, target };

    if (this.intro > 0) {
      this.intro -= dt;
      if (inp.pressed) { this.intro = 0; inp.pressed = false; inp.down = false; this.swallow = true; }
    }
    if (this.swallow) { if (!input.down) this.swallow = false; inp.down = false; inp.pressed = false; inp.released = false; }
    if (this.finale.active) {
      this.finale.update(dt, inp);
    } else if (this.delivery) {
      this.updDelivery(dt);
      c.update(dt, { down: false, pressed: false, released: false, target: null });
    } else {
      // tap a resident a few metres upstream: toss the parcel up to them (a sideways parabola)
      if (inp.pressed && target && c.hasParcel && c.state === 'stand') {
        const tp = new THREE.Vector3(target.x, target.y, 0);
        const dSelf = Math.hypot(target.x - (c.pos.x - 0.4), target.y - c.pos.y);
        const r = this.residents.find(r => !r.served && r.spot.distanceTo(tp) < 1.1 && r.spot.distanceTo(tp) < dSelf);
        if (r) {
          const d = Math.hypot(r.spot.x - (c.pos.x - 0.45), r.spot.y - c.pos.y);
          if (d > REACH && d < 4.6 && this.clearLine(c.pos.x - 0.5, c.pos.y, r.spot.x, r.spot.y)) { this.toss(r); inp.pressed = false; }
        }
      }
      c.update(dt, inp);
      this.checkDelivery();
    }
    this.handleEvents();
    // residents
    const fr = this.focusResident();
    this.focus = fr;
    for (const r of this.residents) {
      if (!r.served && r.state !== 'receive') r.state = (fr && (r === fr || (fr.group && r.group === fr.group))) ? 'calling' : 'idle';
      r.update(dt, c.pos);
    }
    this.updFlyingParcels(dt);
    // doors / windows sliding
    for (let i = this.doorAnims.length - 1; i >= 0; i--) {
      const a = this.doorAnims[i];
      a.t = Math.min(1, a.t + dt / 0.7);
      const e = a.t * a.t * (3 - 2 * a.t);
      setLeaf(a.rec, a.from + (a.to - a.from) * e);
      if (a.t >= 1) this.doorAnims.splice(i, 1);
    }
    this.frameCamera(dt);
  }

  clearLine(x0, y0, x1, y1) {
    for (let i = 1; i < 12; i++) {
      const t = i / 12;
      if (this.w2d.inside(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t)) return false;
    }
    return true;
  }

  checkDelivery() {
    const c = this.courier;
    if (!c.hasParcel || c.state === 'script') return;
    const chest = new THREE.Vector2(c.pos.x - 0.45 * Math.cos(c.bodyAng - Math.PI / 2), c.pos.y - 0.45 * Math.sin(c.bodyAng - Math.PI / 2));
    for (const r of this.residents) {
      if (r.served) continue;
      const d = Math.hypot(r.spot.x - chest.x, r.spot.y - chest.y);
      // in the air you can only hand over when really close (except to someone leaning out of a window)
      // in the air you can only hand over to someone leaning out of a window; others wait until you land
      if (c.state === 'fall' && !r.lean) continue;
      const reach = REACH;
      if (d < reach) { this.startDelivery(r); return; }
    }
    // after landing next to a resident on the same floor, walk over by yourself
    if (c.state === 'stand' && c.autoWalk == null && !this.target) {
      for (const r of this.residents) {
        if (r.served || r.lean) continue;
        if (r.stop.feet !== undefined && Math.abs(r.stop.feet - c.face) < 0.15 && Math.abs(r.spot.y - c.pos.y) < 3.2 && Math.abs(r.spot.y - c.pos.y) > 0.3) {
          c.autoWalk = r.spot.y; break;
        }
      }
    }
  }

  startDelivery(r) {
    const c = this.courier;
    this.delivery = { r, t: 0, phase: 0, prevState: c.state, prevVel: c.vel.clone() };
    c.state = 'script';
    c.vel.set(0, 0);
    r.state = 'receive';
    this.audio?.chime();
    // detach the parcel into world space so it can travel between hands
    const p = c.parcel;
    p.updateWorldMatrix(true, false);
    const wp = new THREE.Vector3(), wq = new THREE.Quaternion();
    p.getWorldPosition(wp); p.getWorldQuaternion(wq);
    this.scene.add(p);
    p.position.copy(wp); p.quaternion.copy(wq);
    this.delivery.from = wp.clone(); this.delivery.fromQ = wq.clone();
    c.hasParcel = false;
  }

  updDelivery(dt) {
    const D = this.delivery, c = this.courier, r = D.r;
    D.t += dt;
    const p = c.parcel;
    // courier reaches out, then waves
    c.overridePose = D.t < 0.9 ? { shoulderL: [-80, 0, 10], shoulderR: [-80, 0, -10], elbowL: [-15], elbowR: [-15] } : { shoulderR: [-150 + Math.sin(D.t * 9) * 20, 0, -25], elbowR: [-30], shoulderL: [5, 0, 8] };
    if (D.phase === 0) {
      const k = Math.min(1, D.t / 0.75), e = k * k * (3 - 2 * k);
      const hand = new THREE.Vector3();
      r.h.j.chest.getWorldPosition(hand);
      const to = hand.clone().add(new THREE.Vector3(-0.3 * r.s, 0, 0.25));
      p.position.lerpVectors(D.from, to, e);
      p.position.x -= Math.sin(k * Math.PI) * 0.25;
      if (k >= 1) {
        D.phase = 1;
        // parcel now belongs to the resident
        r.h.j.chest.attach(p);
        p.position.set(0, -0.1, 0.28); p.rotation.set(0, 0, 0);
        r.state = 'happy'; r.served = true; r.parcel = p;
        this.served++;
        this.audio?.yay(r.s < 0.8);
        // the present pops out of the box... and of course it falls sideways
        if (r.stop.pop && this.stuff) this.later(0.9, () => {
          const wp = new THREE.Vector3(); p.getWorldPosition(wp);
          const rec = this.stuff.spawn(r.stop.pop, wp.add(new THREE.Vector3(-0.15, 0.1, 0.1)), { vel: { x: -1.5, y: 0.6, z: 0.2 }, angvel: { x: 2, y: 1, z: 3 } });
          rec.obj.traverse(o => { if (o.isMesh) o.castShadow = false; });
          this.audio?.pop();
        });
        if (r.group) for (const k2 of r.group) { k2.served = true; k2.state = 'cheer'; }
      }
    } else if (D.phase === 1 && D.t > 2.0) {
      D.phase = 2;
      if (r.stop.final) { this.finish(r); return; }
      // a new parcel out of the shoulder bag
      c.parcel = makeParcel(0.34 + Math.random() * 0.12, 0.24 + Math.random() * 0.1, 0.3);
      c.h.j.chest.add(c.parcel);
      c.parcel.position.set(0, -0.12, 0.26);
      c.parcel.scale.setScalar(0.01);
      c.hasParcel = true;
      this.audio?.rustle();
    } else if (D.phase === 2) {
      const s = Math.min(1, (D.t - 2.0) / 0.4);
      c.parcel.scale.setScalar(Math.max(0.01, s));
      if (s >= 1) this.endDelivery();
    }
  }

  endDelivery() {
    const D = this.delivery, c = this.courier;
    c.overridePose = null;
    this.delivery = null;
    // back to physics
    if (D.prevState === 'stand' && c.face != null) c.state = 'stand';
    else if (D.prevState === 'hang' && c.hold) c.state = 'hang';
    else { c.state = 'fall'; c.vel.set(0.5, 0); c.face = null; }
    for (const a of D.r.stop.after || []) {
      const [cmd, id] = a.split(':');
      if (cmd === 'open') this.later(0.35, () => { this.setOpening(id, true); D.r.state = 'openDoor'; this.later(1.2, () => { D.r.state = 'happy'; }); });
    }
    this.later(4, () => { if (D.r.state === 'happy') D.r.state = 'idle2'; });
  }

  toss(r) {
    const c = this.courier;
    const p = c.parcel;
    const wp = new THREE.Vector3(); p.getWorldPosition(wp);
    const wq = new THREE.Quaternion(); p.getWorldQuaternion(wq);
    this.scene.add(p); p.position.copy(wp); p.quaternion.copy(wq);
    c.hasParcel = false;
    const to = r.spot.clone();
    const T = 0.8;
    // sideways ballistic: x(t) = x0 + vx t + g t²/2 ; y(t) = y0 + vy t
    const vx = (to.x - wp.x - 0.5 * 9.8 * T * T) / T, vy = (to.y - wp.y) / T;
    this.flyingParcels.push({ p, pos: wp.clone(), vel: new THREE.Vector3(vx, vy, (to.z - wp.z) / T), t: 0, T, r });
    r.state = 'receive';
    c.overridePose = { shoulderL: [-150, 0, 20], shoulderR: [-150, 0, -20], elbowL: [-20], elbowR: [-20] };
    this.later(0.5, () => { c.overridePose = null; });
    this.audio?.whoosh(0.5);
  }

  updFlyingParcels(dt) {
    for (let i = this.flyingParcels.length - 1; i >= 0; i--) {
      const f = this.flyingParcels[i];
      f.t += dt;
      f.vel.x += 9.8 * dt;
      f.pos.addScaledVector(f.vel, dt);
      f.p.position.copy(f.pos);
      f.p.rotation.z += dt * 4;
      if (f.t >= f.T) {
        this.flyingParcels.splice(i, 1);
        const r = f.r;
        r.h.j.chest.attach(f.p);
        f.p.position.set(0, -0.1, 0.28); f.p.rotation.set(0, 0, 0);
        r.state = 'happy'; r.served = true; this.served++;
        this.audio?.chime(); this.audio?.yay(r.s < 0.8);
        const c = this.courier;
        r.parcel = f.p;
        this.later(0.7, () => {
          c.parcel = makeParcel(0.34 + Math.random() * 0.12, 0.26, 0.3);
          c.h.j.chest.add(c.parcel); c.parcel.position.set(0, -0.12, 0.26); c.hasParcel = true;
          this.audio?.rustle();
        });
        for (const a of r.stop.after || []) { const [cmd, id] = a.split(':'); if (cmd === 'open') this.later(0.9, () => this.setOpening(id, true)); }
      }
    }
  }

  finish(r) {
    this.courier.overridePose = { shoulderR: [-160, 0, -25], elbowR: [-20] };
    this.finale.start(r);
  }

  handleEvents() {
    const c = this.courier, a = this.audio;
    for (const ev of c.events) {
      switch (ev.e) {
        case 'land': a?.thud(Math.min(1, ev.impact / 8)); if (ev.impact > 5) this.rig.shake = Math.min(1, ev.impact / 14); this.fx?.dust(c.pos.x + LEG, c.pos.y, 0, ev.impact); break;
        case 'bounce': a?.boing(ev.v); if (this.park?.futon) this.park.futon.squash = 1; break;
        case 'grab': a?.grab(ev.kind); break;
        case 'letgo': a?.whoosh(0.35); break;
        case 'drop': a?.whoosh(0.25); break;
        case 'hop': a?.step(); break;
        case 'step': a?.step(); break;
        case 'bump': a?.thud(0.3); break;
        case 'lost': this.rescue(); break;
      }
    }
    c.events.length = 0;
  }

  rescue() {
    // should never happen, but never strand the courier: back to the last safe footing
    const c = this.courier;
    if (c.lastSafe) {
      c.state = 'stand'; c.face = c.lastSafe.face; c.pos.set(c.face - LEG, c.lastSafe.y); c.vel.set(0, 0); c.hold = null;
      return;
    }
    const pole = this.props.poles[LEVEL.start.hold];
    c.pos.set(pole.hold.ax + 1.1, LEVEL.start.y);
    c.grab(pole.hold, pole.hold.ax, LEVEL.start.y, false);
  }

  frameCamera(dt) {
    const c = this.courier, rig = this.rig;
    if (this.finale.active) return;
    if (this.intro > 0) {
      const k = rig.k ?? 1;
      rig.frame(-3, k > 0.5 ? 8.5 : 10, k > 0.5 ? 34 : 18, k > 0.5 ? 18 : 30);
      return;
    }
    const k = rig.k ?? 1;
    let x0 = c.pos.x - 2.2, x1 = c.pos.x + 2.6, y0 = c.pos.y - 2.2, y1 = c.pos.y + 2.4;
    const fr = this.focus;
    if (this.delivery) {
      const r = this.delivery.r;
      x0 = Math.min(x0, r.spot.x - 1.5); x1 = Math.max(x1, r.spot.x + 1.5);
      y0 = Math.min(y0, r.spot.y - 1.2); y1 = Math.max(y1, r.spot.y + 1.2);
    } else if (fr && Math.abs(fr.spot.x - c.pos.x) < 16) {
      x0 = Math.min(x0, fr.spot.x - 1.6); x1 = Math.max(x1, fr.spot.x + 1.8);
      y0 = Math.min(y0, fr.spot.y - 1.4); y1 = Math.max(y1, fr.spot.y + 1.6);
    }
    // while falling, look ahead in the direction of motion
    if (c.state === 'fall') x1 = Math.max(x1, c.pos.x + 2 + Math.min(6, c.vel.x * 0.6));
    let minW = k > 0.5 ? 10.5 : 5.6, minH = k > 0.5 ? 6.2 : 8;
    if (this.delivery) { minW *= 0.62; minH *= 0.62; }  // lean in for the hand-over
    let w = Math.max(minW, x1 - x0), h = Math.max(minH, y1 - y0);
    const cx = (x0 + x1) / 2, cy = Math.max(h / 2 - 0.6, (y0 + y1) / 2);
    rig.frame(cx, cy, w, h);
  }
}
