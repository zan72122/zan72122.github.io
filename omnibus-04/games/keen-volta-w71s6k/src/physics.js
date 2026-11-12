// Physically-motivated motion helpers: a tipping controller for standing
// dominoes (gravity torque about the bottom edge), impact dust, debris chips.
import * as THREE from 'three';
import { clamp, AXIS_Z } from './util.js';
import { softDot } from './textures.js';
import { sound } from './audio.js';

const G = 7.2; // slightly soft gravity so giant things read as heavy and slow

// Tips a standing domino about its bottom edge. Positive angle = toward local +x.
export class TipController {
  constructor(game, dom, o = {}) {
    this.game = game; this.d = dom; this.o = o;
    this.a = 0; this.v = 0; this.mode = 'stand'; this.dir = 0; this.target = 0;
    const T = dom.T, H = dom.H;
    this.tip = Math.atan(T / H); this.K = (3 * G) / (4 * 0.5 * Math.hypot(T, H));
    this.allowed = o.allowed ?? 1;               // +1, -1 or 0 (both)
    this.land = o.land || (() => Math.PI / 2);   // landing angle for a direction
    this._pv = new THREE.Vector3(); this._ax = new THREE.Vector3();
  }
  get fallen() { return this.mode === 'down'; }
  get busy() { return this.mode === 'fall' || this.mode === 'held'; }
  pivotFor(dir) {
    const d = this.d;
    this._pv.set((dir >= 0 ? 1 : -1) * d.T / 2, -d.H / 2, 0).applyQuaternion(d.restQuat).add(d.restPos);
    this._ax.copy(AXIS_Z).applyQuaternion(d.restQuat);
    return this._pv;
  }
  apply() {
    const dir = this.a >= 0 ? 1 : -1;
    const p = this.pivotFor(dir);
    this.d.pivotFromRest(p, this._ax, -this.a);
  }
  // Finger interaction ---------------------------------------------------
  grab() { if (this.mode === 'stand') { this.mode = 'held'; this.target = this.a; } }
  drag(metres) {                                // horizontal finger travel at the top
    if (this.mode !== 'held') return;
    let t = Math.atan2(metres, this.d.H) * 0.95;
    const lim = 0.07;                           // a disallowed direction only rocks a little
    if (this.allowed > 0 && t < 0) t = -lim * (1 - Math.exp(t / lim));
    if (this.allowed < 0 && t > 0) t = lim * (1 - Math.exp(-t / lim));
    this.target = clamp(t, -0.6, 0.6);
    if (Math.abs(this.target) > this.tip * 1.9 && this.ok(Math.sign(this.target))) this.release(Math.sign(this.target) * 0.6);
  }
  ok(s) { return this.allowed === 0 || s === this.allowed; }
  release(fingerVel = 0) {
    if (this.mode !== 'held') return;
    const s = Math.sign(this.a || fingerVel);
    // kind inference: an almost-sufficient push in an allowed direction commits
    if (this.ok(s) && (Math.abs(this.a) > this.tip * 0.45 || Math.abs(fingerVel) > 0.35)) this.commit(s);
    else { this.mode = 'stand'; this.v *= 0.5; }
  }
  nudge(dirPref) {                              // a tap is a push away from whoever taps
    const s = this.allowed || dirPref || 1;
    if (this.mode === 'stand') this.commit(s);
  }
  commit(s) {
    this.mode = 'fall'; this.dir = s;
    if (Math.abs(this.a) < this.tip * 1.05 || Math.sign(this.a) !== s) this.a = s * this.tip * 1.08;
    this.v = s * Math.max(Math.abs(this.v), 0.9);
    this.o.onStart && this.o.onStart(s);
  }
  // Physically-motivated idle wobble: a breath of wind rocks it on its edge.
  rock(amount) { if (this.mode === 'stand') this.v += amount; }

  update(dt) {
    const sub = 4, h = dt / sub;
    for (let i = 0; i < sub; i++) this._step(h);
    this.apply();
  }
  _step(dt) {
    const s = Math.sign(this.a) || 1, abs = Math.abs(this.a);
    const grav = s * this.K * Math.sin(abs - this.tip);
    if (this.mode === 'stand') {
      this.v += (grav - 6 * this.v) * dt; this.a += this.v * dt;
      if (Math.abs(this.a) > this.tip * 0.9) { this.a = Math.sign(this.a) * this.tip * 0.9; this.v *= -0.3; }
      if (Math.abs(this.a) < 0.004 && Math.abs(this.v) > 0.05) {
        if (Math.abs(this.v) > 0.18) sound.impact(0.12, this.o.pan ? this.o.pan() : 0, 'domino');
        this.v *= -0.25;
      }
    } else if (this.mode === 'held') {
      const acc = 70 * (this.target - this.a) - 14 * this.v + grav * 0.3;
      this.v += acc * dt; this.a += this.v * dt;
    } else if (this.mode === 'fall') {
      this.v += grav * dt; this.a += this.v * dt;
      const L = this.land(this.dir);
      if (Math.abs(this.a) >= L) {
        this.a = this.dir * L;
        const impactV = Math.abs(this.v);
        if (!this.landed) { this.landed = true; this.o.onLand && this.o.onLand(this.dir, impactV); }
        else if (impactV > 0.4) sound.impact(0.25 * impactV, this.o.pan ? this.o.pan() : 0, 'domino');
        this.v = -this.v * 0.18;
        if (Math.abs(this.v) < 0.25) { this.v = 0; this.mode = 'down'; this.o.onRest && this.o.onRest(this.dir); }
      }
    }
  }
}

// Impact dust: short-lived soft puffs that drift and settle. Physically caused only.
export class Dust {
  constructor(scene) {
    this.scene = scene; this.tex = softDot('236,222,196'); this.list = [];
  }
  puff(p, n = 10, spread = 1, strength = 1) {
    for (let i = 0; i < n; i++) {
      const m = new THREE.SpriteMaterial({ map: this.tex, transparent: true, depthWrite: false, opacity: 0.0, fog: true });
      const s = new THREE.Sprite(m);
      s.position.copy(p).add(new THREE.Vector3((Math.random() - 0.5) * spread, Math.random() * 0.2, (Math.random() - 0.5) * spread));
      const v = new THREE.Vector3((Math.random() - 0.5) * 2.2, 0.3 + Math.random() * 0.9, (Math.random() - 0.5) * 1.4).multiplyScalar(strength);
      this.scene.add(s);
      this.list.push({ s, v, t: 0, life: 1.2 + Math.random() * 1.1, size: (0.5 + Math.random() * 0.7) * spread * 0.9 + 0.3 });
    }
  }
  update(dt) {
    for (const p of this.list) {
      p.t += dt; p.v.multiplyScalar(Math.exp(-2.2 * dt)); p.v.y -= 0.05 * dt;
      p.s.position.addScaledVector(p.v, dt);
      const k = p.t / p.life; const sc = p.size * (0.6 + k * 1.6);
      p.s.scale.set(sc, sc, sc); p.s.material.opacity = Math.min(1, k * 8) * (1 - k) * 0.55;
    }
    this.list = this.list.filter((p) => { if (p.t < p.life) return true; this.scene.remove(p.s); p.s.material.dispose(); return false; });
  }
}

// Debris chips: ballistic fragments that bounce and come to rest on a floor.
export class Debris {
  constructor(scene) { this.scene = scene; this.list = []; this.mat = new THREE.MeshStandardMaterial({ color: 0xe8dcc2, roughness: 0.7 }); }
  burst(p, n, floorY, dirX = 1, pan = 0, mat = null) {
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(new THREE.TetrahedronGeometry(0.06 + Math.random() * 0.07), mat || this.mat);
      m.position.copy(p); m.castShadow = true; this.scene.add(m);
      const v = new THREE.Vector3(dirX * (0.4 + Math.random() * 1.4), 1 + Math.random() * 2, (Math.random() - 0.5) * 1.5);
      this.list.push({ m, v, w: new THREE.Vector3(Math.random() * 9, Math.random() * 9, 0), floorY, rest: false, pan });
    }
    setTimeout(() => sound.pebbles(pan, Math.min(6, n)), 220);
  }
  update(dt) {
    for (const d of this.list) {
      if (d.rest) continue;
      d.v.y -= 9.8 * dt; d.m.position.addScaledVector(d.v, dt);
      d.m.rotation.x += d.w.x * dt; d.m.rotation.y += d.w.y * dt;
      if (d.m.position.y < d.floorY + 0.05) {
        d.m.position.y = d.floorY + 0.05; d.v.y *= -0.3; d.v.x *= 0.5; d.v.z *= 0.5; d.w.multiplyScalar(0.5);
        if (Math.abs(d.v.y) < 0.3) d.rest = true;
      }
    }
  }
}
