// Small math + randomness helpers shared by every module.
import * as THREE from 'three';

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const invLerp = (a, b, v) => clamp((v - a) / (b - a), 0, 1);
export const smooth = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };
export const easeOut = (t) => 1 - Math.pow(1 - clamp(t, 0, 1), 3);
export const easeIn = (t) => Math.pow(clamp(t, 0, 1), 3);
export const easeInOut = (t) => { t = clamp(t, 0, 1); return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
// Frame-rate independent exponential approach.
export const damp = (cur, target, rate, dt) => lerp(cur, target, 1 - Math.exp(-rate * dt));
export const approach = (cur, target, step) => (cur < target ? Math.min(cur + step, target) : Math.max(cur - step, target));
export const TAU = Math.PI * 2;
export const DEG = Math.PI / 180;

// Deterministic PRNG (mulberry32). Every random choice in the game goes through one of these.
export function makeRng(seed) {
  let a = (seed >>> 0) || 1;
  const rng = () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  rng.range = (lo, hi) => lo + (hi - lo) * rng();
  rng.int = (lo, hi) => Math.floor(lo + (hi - lo + 1) * rng());
  rng.pick = (arr) => arr[Math.floor(rng() * arr.length)];
  rng.fork = (salt) => makeRng(Math.floor(rng() * 1e9) ^ (salt * 2654435761));
  return rng;
}

// Damped spring on a scalar: returns new [x, v].
export function spring(x, v, target, k, c, dt) {
  const a = k * (target - x) - c * v;
  v += a * dt; x += v * dt;
  return [x, v];
}

// Rotate a rest pose (position + quaternion) about a world pivot/axis by angle.
const _q = new THREE.Quaternion();
const _v = new THREE.Vector3();
export function pivotPose(restPos, restQuat, pivot, axis, angle, outPos, outQuat) {
  _q.setFromAxisAngle(axis, angle);
  _v.copy(restPos).sub(pivot).applyQuaternion(_q).add(pivot);
  outPos.copy(_v);
  outQuat.copy(_q).multiply(restQuat);
}

export const V3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
export const AXIS_Z = new THREE.Vector3(0, 0, 1);
export const AXIS_X = new THREE.Vector3(1, 0, 0);
export const AXIS_Y = new THREE.Vector3(0, 1, 0);

// Simple timer-based tween list for authored motion that must not block state.
export class Tweens {
  constructor() { this.list = []; }
  add(duration, fn, done) {
    const t = { t: 0, d: Math.max(1e-4, duration), fn, done, dead: false };
    this.list.push(t); return t;
  }
  update(dt) {
    for (const tw of this.list) {
      if (tw.dead) continue;
      tw.t += dt;
      const k = clamp(tw.t / tw.d, 0, 1);
      tw.fn(k);
      if (k >= 1) { tw.dead = true; tw.done && tw.done(); }
    }
    this.list = this.list.filter((t) => !t.dead);
  }
  clear() { this.list.length = 0; }
}
