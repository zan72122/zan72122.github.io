// Small math + timing helpers shared by every module.

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const invLerp = (a, b, v) => clamp((v - a) / (b - a), 0, 1);
export const smooth = (t) => t * t * (3 - 2 * t);
export const smoother = (t) => t * t * t * (t * (t * 6 - 15) + 10);
export const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
export const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const easeOutBack = (t, s = 1.70158) => 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2);
export const easeOutElastic = (t) => {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1;
};
// Frame-rate independent exponential approach.
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));

// Deterministic PRNG so the world looks the same every visit.
export function rng(seed = 1) {
  let s = seed >>> 0;
  return () => {
    s += 0x6d2b79f5;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const pick = (r, arr) => arr[Math.floor(r() * arr.length) % arr.length];

// Simple tween list: call update(dt) every frame.
export class Tweens {
  constructor() {
    this.list = [];
  }
  add(duration, fn, done, delay = 0) {
    const tw = { t: -delay, duration, fn, done, alive: true };
    this.list.push(tw);
    return tw;
  }
  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const tw = this.list[i];
      if (!tw.alive) {
        this.list.splice(i, 1);
        continue;
      }
      tw.t += dt;
      if (tw.t < 0) continue;
      const k = Math.min(1, tw.t / tw.duration);
      tw.fn(k);
      if (k >= 1) {
        tw.alive = false;
        this.list.splice(i, 1);
        if (tw.done) tw.done();
      }
    }
  }
}

// Timed callbacks that respect the game clock.
export class Timers {
  constructor() {
    this.list = [];
    this.now = 0;
  }
  after(sec, fn) {
    const t = { at: this.now + sec, fn, alive: true };
    this.list.push(t);
    return t;
  }
  update(dt) {
    this.now += dt;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const t = this.list[i];
      if (!t.alive) {
        this.list.splice(i, 1);
      } else if (this.now >= t.at) {
        this.list.splice(i, 1);
        t.fn();
      }
    }
  }
  clear() {
    this.list.length = 0;
  }
}
