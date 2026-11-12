// Camera rig: shots describe where the camera wants to be; the rig follows with
// critically damped springs (no cuts), plus a breath of hand-held drift.
// fitShot() places the camera so a set of subject points fits any aspect ratio.
import * as THREE from '../../lib/three.module.js';
import { springVec, springStep, clamp } from '../core/math.js';

const _r = new THREE.Vector3(), _u = new THREE.Vector3(), _f = new THREE.Vector3(), _o = new THREE.Vector3();
const ZERO = new THREE.Vector3();

export function fitShot({ points, dir, fov, aspect, margin = 0.14, target = null, minDist = 0.3, lift = 0 }) {
  const tgt = target ? target.clone() : new THREE.Vector3();
  if (!target) {
    for (const p of points) tgt.add(p);
    tgt.multiplyScalar(1 / points.length);
  }
  tgt.y += lift;
  const d = dir.clone().normalize();
  // camera basis looking along -d
  _f.copy(d).negate();
  _r.crossVectors(_f, new THREE.Vector3(0, 1, 0));
  if (_r.lengthSq() < 1e-6) _r.set(1, 0, 0);
  _r.normalize();
  _u.crossVectors(_r, _f).normalize();
  const tv = Math.tan((fov * Math.PI) / 360) * (1 - margin);
  const th = tv * aspect;
  let dist = minDist;
  for (const p of points) {
    _o.subVectors(p, tgt);
    const along = _o.dot(d); // toward camera
    const x = Math.abs(_o.dot(_r)), y = Math.abs(_o.dot(_u));
    dist = Math.max(dist, along + x / th, along + y / tv);
  }
  return { pos: tgt.clone().addScaledVector(d, dist), tgt, fov, dist };
}

export class CameraRig {
  constructor(camera) {
    this.cam = camera;
    this.pos = new THREE.Vector3(0, 2, 6);
    this.tgt = new THREE.Vector3(0, 0.5, 0);
    this.vp = new THREE.Vector3();
    this.vt = new THREE.Vector3();
    this.fovS = { x: 40, v: 0 };
    this.stiff = 1.6;
    this.shake = 0;
    this.time = 0;
    this.drift = 1;
    this.roll = 0;
  }

  snap(shot) {
    this.pos.copy(shot.pos);
    this.tgt.copy(shot.tgt);
    this.anchorId = shot.anchorId || null;
    this.anchor = shot.anchor ? shot.anchor.clone() : new THREE.Vector3();
    this.relPos = this.pos.clone().sub(this.anchor);
    this.relTgt = this.tgt.clone().sub(this.anchor);
    this.vp.set(0, 0, 0);
    this.vt.set(0, 0, 0);
    this.fovS.x = shot.fov;
    this.fovS.v = 0;
    this._apply();
  }

  update(dt, shot, stiff = this.stiff) {
    this.time += dt;
    if (shot) {
      // springs act on the offset from a moving anchor (e.g. the galloping unicorn)
      const A = shot.anchor || ZERO;
      const id = shot.anchorId || null;
      if (id !== this.anchorId || !this.relPos) {
        this.anchorId = id;
        this.relPos = this.pos.clone().sub(A);
        this.relTgt = this.tgt.clone().sub(A);
      }
      _o.subVectors(shot.pos, A);
      springVec(this.relPos, this.vp, _o, stiff, dt);
      _o.subVectors(shot.tgt, A);
      springVec(this.relTgt, this.vt, _o, stiff * 1.25, dt);
      this.pos.addVectors(A, this.relPos);
      this.tgt.addVectors(A, this.relTgt);
      springStep(this.fovS, shot.fov, stiff, dt);
    }
    this._apply();
  }

  _apply() {
    const c = this.cam;
    c.position.copy(this.pos);
    // gentle hand-held drift
    const t = this.time;
    const k = 0.012 * this.drift + this.shake * 0.05;
    c.position.x += Math.sin(t * 0.53) * k + Math.sin(t * 1.7) * k * 0.3;
    c.position.y += Math.sin(t * 0.41 + 1.3) * k;
    c.lookAt(this.tgt);
    if (this.roll) c.rotateZ(this.roll);
    if (Math.abs(c.fov - this.fovS.x) > 1e-3) {
      c.fov = clamp(this.fovS.x, 15, 80);
      c.updateProjectionMatrix();
    }
    c.updateMatrixWorld();
    this.shake = Math.max(0, this.shake - 0.02);
  }
}
