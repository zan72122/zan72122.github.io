export const TAU = Math.PI * 2;
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const inv = (a, b, v) => clamp((v - a) / (b - a), 0, 1);
export const damp = (a, b, lambda, dt) => a + (b - a) * (1 - Math.exp(-lambda * dt));
export const dist = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);
export const rand = (a = 0, b = 1) => a + Math.random() * (b - a);
export const pick = (arr) => arr[(Math.random() * arr.length) | 0];

export const E = {
  lin: (t) => t,
  in: (t) => t * t,
  out: (t) => 1 - (1 - t) * (1 - t),
  out3: (t) => 1 - Math.pow(1 - t, 3),
  inOut: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
  smooth: (t) => t * t * (3 - 2 * t),
  outBack: (t) => {
    const c1 = 1.70158, c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  outBounce: (t) => {
    const n1 = 7.5625, d1 = 2.75;
    if (t < 1 / d1) return n1 * t * t;
    if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
    if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
    return n1 * (t -= 2.625 / d1) * t + 0.984375;
  },
};

export function angDiff(a, b) {
  let d = b - a;
  while (d > Math.PI) d -= TAU;
  while (d < -Math.PI) d += TAU;
  return d;
}

export function seeded(seed) {
  let s = seed | 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Quadratic bezier point
export function qbez(ax, ay, cx, cy, bx, by, t) {
  const u = 1 - t;
  return { x: u * u * ax + 2 * u * t * cx + t * t * bx, y: u * u * ay + 2 * u * t * cy + t * t * by };
}

/*
 * Tiny coroutine runner.  Scripts are generator functions:
 *   yield 0.5          -> wait 0.5 seconds
 *   yield () => cond   -> wait until cond() is true
 *   yield              -> wait one frame (receives dt)
 *   yield* anim(d, fn) -> run fn(t) for d seconds
 */
export class Runner {
  constructor() { this.list = []; }
  run(gen) {
    const s = { it: gen, wait: 0, cond: null, done: false };
    this.list.push(s);
    this._adv(s, 0);
    return s;
  }
  _adv(s, dt) {
    for (let guard = 0; guard < 1000; guard++) {
      const r = s.it.next(dt);
      dt = 0;
      if (r.done) { s.done = true; return; }
      const v = r.value;
      if (typeof v === 'number') {
        if (v > 0) { s.wait = v; return; }
        continue;
      }
      if (typeof v === 'function') {
        if (v()) continue;
        s.cond = v;
        return;
      }
      s.wait = 0;
      s.frame = true;
      return;
    }
  }
  update(dt) {
    const list = this.list.slice();
    for (const s of list) {
      if (s.done) continue;
      if (s.cond) {
        if (s.cond()) { s.cond = null; this._adv(s, dt); }
        continue;
      }
      if (s.frame) { s.frame = false; this._adv(s, dt); continue; }
      s.wait -= dt;
      if (s.wait <= 0) this._adv(s, dt);
    }
    this.list = this.list.filter((s) => !s.done);
  }
  clear() { this.list.length = 0; }
  get busy() { return this.list.length > 0; }
}

export function* anim(dur, fn, ease = E.inOut) {
  let t = 0;
  fn(ease(0), 0);
  while (t < dur) {
    const dt = yield;
    t += dt || 0;
    fn(ease(Math.min(1, t / dur)), Math.min(1, t / dur));
  }
}

export function* waitAll(...scripts) {
  yield () => scripts.every((s) => s.done);
}
