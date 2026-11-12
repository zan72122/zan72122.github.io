import * as THREE from 'three';
import { Z_START, Z_END, PILLAR } from './config.js';

const tmpA = new THREE.Vector3();
const tmpB = new THREE.Vector3();

function damp(cur, target, lambda, dt) {
  return target + (cur - target) * Math.exp(-lambda * dt);
}
export function smooth01(t) { t = Math.min(1, Math.max(0, t)); return t * t * t * (t * (t * 6 - 15) + 10); }

// Composes the view automatically around the scrubber. No user camera control.
export class CamRig {
  constructor(camera) {
    this.cam = camera;
    this.focus = new THREE.Vector3(0, 0, 0);
    this.side = 1;          // +1: play above the floor, -1: play below it
    this.mode = 'follow';
    this.params = null;
    this.orbit = null;
    this.ending = null;
    this.shake = 0;
    this.pos = new THREE.Vector3();
    this.target = new THREE.Vector3();
    this.up = new THREE.Vector3(0, 1, 0);
  }

  setAspect(aspect) {
    this.aspect = aspect;
    const P = { vfov: 50, h: 6.8, d: 3.9, look: 1.2, bandHi: 1.4, bandLo: -1.0, xf: 0.28 };
    const L = { vfov: 42, h: 4.7, d: 3.6, look: 1.0, bandHi: 1.2, bandLo: -0.9, xf: 0.18 };
    const t = Math.min(1, Math.max(0, (aspect - 0.62) / (1.3 - 0.62)));
    const p = {};
    for (const k of Object.keys(P)) p[k] = P[k] + (L[k] - P[k]) * t;
    this.params = p;
    this.cam.fov = p.vfov;
    this.cam.aspect = aspect;
    this.cam.updateProjectionMatrix();
  }

  fwd() { return this.side > 0 ? -1 : 1; } // z direction of "forward"

  snapTo(x, z) {
    this.focus.set(x * this.params.xf, 0, z);
    this.clampFocus();
    this.followPose(this.pos, this.target, this.up);
  }

  clampFocus() {
    const f = this.fwd();
    if (f < 0) this.focus.z = Math.min(Z_START - 2.2, Math.max(Z_END + 3.2, this.focus.z));
    else this.focus.z = Math.max(Z_END + 2.4, Math.min(Z_START - 3.0, this.focus.z));
  }

  followPose(pos, target, up) {
    const p = this.params, f = this.fwd();
    pos.set(this.focus.x, this.side * p.h, this.focus.z - f * p.d);
    target.set(this.focus.x * 0.6, 0, this.focus.z + f * p.look);
    up.set(0, this.side, 0);
  }

  updateFollow(dt, tool) {
    const p = this.params, f = this.fwd();
    const ahead = (tool.z - this.focus.z) * f;
    let goal = this.focus.z;
    if (ahead > p.bandHi) goal = tool.z - f * p.bandHi;
    else if (ahead < p.bandLo) goal = tool.z - f * p.bandLo;
    this.focus.z = damp(this.focus.z, goal, 3.2, dt);
    this.focus.x = damp(this.focus.x, tool.x * p.xf, 2.0, dt);
    this.clampFocus();
    this.followPose(tmpA, tmpB, this.up);
    this.pos.copy(tmpA);
    this.target.copy(tmpB);
  }

  // Orbit through the floor around the pivot (the janitor) to the other side.
  startOrbit(pivot) {
    const P0 = this.pos.clone(), T0 = this.target.clone();
    const side0 = this.side;
    this.side = -side0;
    this.focus.set(pivot.x * this.params.xf, 0, pivot.z + this.fwd() * 0.9);
    this.clampFocus();
    const P1 = new THREE.Vector3(), T1 = new THREE.Vector3(), U1 = new THREE.Vector3();
    this.followPose(P1, T1, U1);
    this.side = side0;
    const rel0 = P0.clone().sub(pivot), rel1 = P1.clone().sub(pivot);
    // angles in the y-z plane, measured from +z toward +y (upper) around the x axis
    const a0 = Math.atan2(rel0.y, rel0.z);
    let a1 = Math.atan2(rel1.y, rel1.z);
    // go over the top: forward roll (angle increases for side +1)
    if (side0 > 0) { while (a1 <= a0) a1 += Math.PI * 2; } else { while (a1 >= a0) a1 -= Math.PI * 2; }
    this.orbit = {
      t: 0, dur: 4.2, pivot: pivot.clone(), P0, T0, P1, T1, U1, a0, a1,
      r0: Math.hypot(rel0.y, rel0.z), r1: Math.hypot(rel1.y, rel1.z), x0: P0.x, x1: P1.x, side0,
    };
    this.mode = 'orbit';
  }

  updateOrbit(dt) {
    const o = this.orbit;
    o.t = Math.min(1, o.t + dt / o.dur);
    const e = smooth01(o.t);
    const a = o.a0 + (o.a1 - o.a0) * e;
    // radius tightens in the middle so the level moment happens inside the corridor
    const rMid = 4.4;
    const r = (o.r0 + (o.r1 - o.r0) * e) * (1 - Math.sin(Math.PI * e)) + rMid * Math.sin(Math.PI * e);
    const x = o.x0 + (o.x1 - o.x0) * e;
    this.pos.set(x, o.pivot.y + Math.sin(a) * r, o.pivot.z + Math.cos(a) * r);
    // look at the pivot (slightly ahead), up vector rotates with the orbit
    const look = new THREE.Vector3().copy(o.pivot);
    look.y += 0.0;
    const tBlend = smooth01((o.t - 0.8) / 0.2);
    const sBlend = 1 - smooth01(o.t / 0.2);
    this.target.copy(look).lerp(o.T1, tBlend).lerp(o.T0, sBlend);
    const sgn = o.side0 > 0 ? 1 : -1;
    this.up.set(0, Math.cos(a), -Math.sin(a) * sgn).multiplyScalar(sgn);
    // ensure continuity with start/end ups
    if (o.t >= 1) {
      this.side = -o.side0;
      this.pos.copy(o.P1); this.target.copy(o.T1); this.up.copy(o.U1);
      this.mode = 'follow';
      this.orbit = null;
      return true;
    }
    return false;
  }

  startEnding(subject) {
    const f = this.fwd();
    // pull back as far as possible while keeping a clear line of sight past the pillar
    const blocked = (px, pz) => {
      const hx = PILLAR.hw + 0.25, hz = PILLAR.hw + 0.25;
      for (let i = 0; i <= 24; i++) {
        const u = i / 24;
        const x = px + (subject.x - px) * u, z = pz + (subject.z - pz) * u;
        if (Math.abs(x - PILLAR.x) < hx && Math.abs(z - PILLAR.z) < hz) return true;
      }
      return false;
    };
    let px = subject.x * 0.35, pz = subject.z - f * 7.2;
    let found = false;
    for (const off of [0, 0.9, -0.9, 1.25, -1.25]) {
      for (let d = 7.2; d >= 4.2; d -= 0.3) {
        const x = Math.max(-1.3, Math.min(1.3, subject.x * 0.35 + off)), z = Math.max(Z_END + 0.8, Math.min(Z_START - 0.8, subject.z - f * d));
        if (!blocked(x, z)) { px = x; pz = z; found = true; break; }
      }
      if (found) break;
    }
    this.ending = {
      t: 0, dur: 5.0,
      P0: this.pos.clone(), T0: this.target.clone(), U0: this.up.clone(),
      // exactly in the plane of the floor: the floor vanishes into a line and both corridors are equal
      P1: new THREE.Vector3(px, 0, pz),
      T1: new THREE.Vector3(subject.x * 0.35 + (px - subject.x * 0.35) * 0.3, 0, subject.z + f * 3.0),
      U1: new THREE.Vector3(0, this.side, 0),
    };
    this.mode = 'ending';
  }

  updateEnding(dt) {
    const E = this.ending;
    E.t = Math.min(1, E.t + dt / E.dur);
    const e = smooth01(E.t);
    this.pos.lerpVectors(E.P0, E.P1, e);
    // a gentle arc: stay a little high at first
    this.pos.y = E.P0.y * (1 - e) * (1 - e) + E.P1.y * e;
    this.target.lerpVectors(E.T0, E.T1, e);
    this.up.lerpVectors(E.U0, E.U1, e).normalize();
  }

  apply(time) {
    const c = this.cam;
    c.position.copy(this.pos);
    if (this.shake > 0) {
      c.position.x += Math.sin(time * 61) * this.shake * 0.02;
      c.position.y += Math.sin(time * 47) * this.shake * 0.015;
    }
    c.up.copy(this.up);
    c.lookAt(this.target);
    c.updateMatrixWorld();
  }
}
