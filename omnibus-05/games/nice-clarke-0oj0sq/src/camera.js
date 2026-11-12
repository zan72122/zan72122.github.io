// Cinematic camera: every shot is authored twice (portrait phone / landscape tablet)
// and blended by the live aspect ratio, so composition holds on any screen.
import * as THREE from 'three';
import { clamp, smooth, easeInOutCubic, lerp } from './util.js';

const v3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);

export function shot(p, l) {
  // p, l: { pos:[x,y,z], at:[x,y,z], fov }
  return { p: { pos: v3(p.pos), at: v3(p.at), fov: p.fov }, l: { pos: v3(l.pos), at: v3(l.at), fov: l.fov } };
}

export class CameraRig {
  constructor(engine) {
    this.engine = engine;
    this.cam = engine.camera;
    this.cur = { pos: new THREE.Vector3(0, 1.5, 2), at: new THREE.Vector3(0, 1, 0), fov: 50 };
    this.from = null;
    this.to = null; // shot or function(aspect, dt) -> pose
    this.k = 1;
    this.dur = 1;
    this.ease = easeInOutCubic;
    this.arc = 0;
    this.shake = 0;
    this.shakeT = 0;
    this.time = 0;
    this.breath = 1;
    this.offset = new THREE.Vector3(); // transient nudge (hops, bumps)
    this.offsetV = new THREE.Vector3();
    this.lookOffset = new THREE.Vector3();
    this.lift = 0; // scripted vertical offset (little jumps)
  }

  aspectT() {
    const a = this.engine.size.aspect;
    return smooth(clamp((a - 0.56) / (1.3 - 0.56), 0, 1));
  }

  resolve(s, out = { pos: new THREE.Vector3(), at: new THREE.Vector3(), fov: 50 }) {
    if (typeof s === 'function') return s(this.engine.size.aspect, out, this);
    const t = this.aspectT();
    out.pos.lerpVectors(s.p.pos, s.l.pos, t);
    out.at.lerpVectors(s.p.at, s.l.at, t);
    out.fov = lerp(s.p.fov, s.l.fov, t);
    // very tall screens need a touch more field of view
    const a = this.engine.size.aspect;
    if (a < 0.5) out.fov *= 1 + (0.5 - a) * 0.6;
    return out;
  }

  cut(s) {
    this.to = s;
    this.from = null;
    this.k = 1;
    this.resolve(s, this.cur);
  }

  go(s, dur = 1.5, { ease = easeInOutCubic, arc = 0 } = {}) {
    this.from = { pos: this.cur.pos.clone(), at: this.cur.at.clone(), fov: this.cur.fov };
    this.to = s;
    this.k = 0;
    this.dur = dur;
    this.ease = ease;
    this.arc = arc;
  }

  bump(dy = -0.03, dz = 0) {
    this.offsetV.y += dy * 12;
    this.offsetV.z += dz * 12;
  }

  addShake(a) {
    this.shake = Math.min(1, this.shake + a);
  }

  get moving() {
    return this.k < 1;
  }

  update(dt) {
    this.time += dt;
    const target = this.to ? this.resolve(this.to, this._tmp || (this._tmp = { pos: new THREE.Vector3(), at: new THREE.Vector3(), fov: 50 })) : null;
    if (target) {
      if (this.from && this.k < 1) {
        this.k = Math.min(1, this.k + dt / this.dur);
        const e = this.ease(this.k);
        this.cur.pos.lerpVectors(this.from.pos, target.pos, e);
        if (this.arc) this.cur.pos.y += Math.sin(Math.PI * e) * this.arc;
        this.cur.at.lerpVectors(this.from.at, target.at, e);
        this.cur.fov = lerp(this.from.fov, target.fov, e);
      } else {
        this.cur.pos.copy(target.pos);
        this.cur.at.copy(target.at);
        this.cur.fov = target.fov;
      }
    }
    // spring for bumps
    this.offsetV.addScaledVector(this.offset, -140 * dt);
    this.offsetV.multiplyScalar(Math.exp(-14 * dt));
    this.offset.addScaledVector(this.offsetV, dt);

    const cam = this.cam;
    cam.position.copy(this.cur.pos).add(this.offset);
    cam.position.y += this.lift;
    // gentle handheld breathing keeps the frame alive
    const b = this.breath;
    const t = this.time;
    cam.position.x += Math.sin(t * 0.7) * 0.004 * b;
    cam.position.y += Math.sin(t * 0.9 + 1) * 0.005 * b;
    this.shake = Math.max(0, this.shake - dt * 1.8);
    const s = this.shake * this.shake;
    const at = this._at || (this._at = new THREE.Vector3());
    at.copy(this.cur.at).add(this.lookOffset);
    at.y += this.lift * 0.6;
    if (s > 0) {
      cam.position.x += (Math.random() - 0.5) * 0.05 * s;
      cam.position.y += (Math.random() - 0.5) * 0.05 * s;
      at.x += (Math.random() - 0.5) * 0.03 * s;
    }
    cam.lookAt(at);
    if (Math.abs(cam.fov - this.cur.fov) > 0.01) {
      cam.fov = this.cur.fov;
      cam.updateProjectionMatrix();
    }
  }
}
