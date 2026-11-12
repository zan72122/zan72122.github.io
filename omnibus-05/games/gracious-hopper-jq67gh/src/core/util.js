// 汎用の数学・補間・乱数ユーティリティ
export const clamp = (x, a = 0, b = 1) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const invLerp = (a, b, x) => clamp((x - a) / (b - a));
export const smooth = (t) => { t = clamp(t); return t * t * (3 - 2 * t); };
export const smoother = (t) => { t = clamp(t); return t * t * t * (t * (t * 6 - 15) + 10); };
export const smoothstep = (a, b, x) => smooth((x - a) / (b - a));
export const easeOutCubic = (t) => 1 - Math.pow(1 - clamp(t), 3);
export const easeInOutSine = (t) => -(Math.cos(Math.PI * clamp(t)) - 1) / 2;
export const easeOutBack = (t, s = 1.70158) => { t = clamp(t) - 1; return t * t * ((s + 1) * t + s) + 1; };
export const easeOutElastic = (t) => {
  t = clamp(t);
  if (t === 0 || t === 1) return t;
  return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI / 3)) + 1;
};
export const TAU = Math.PI * 2;

// フレームレート非依存の指数減衰
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export function dampV3(v, target, lambda, dt) {
  const k = 1 - Math.exp(-lambda * dt);
  v.x += (target.x - v.x) * k; v.y += (target.y - v.y) * k; v.z += (target.z - v.z) * k;
  return v;
}

// 角度差 (-PI..PI)
export function angleDiff(a, b) {
  let d = (b - a) % TAU;
  if (d > Math.PI) d -= TAU; if (d < -Math.PI) d += TAU;
  return d;
}

// 減衰バネ (半陰的オイラー)
export class Spring {
  constructor(x = 0, k = 60, c = 8) { this.x = x; this.v = 0; this.target = x; this.k = k; this.c = c; }
  update(dt) {
    const steps = Math.max(1, Math.ceil(dt / 0.008));
    const h = dt / steps;
    for (let i = 0; i < steps; i++) {
      const a = (this.target - this.x) * this.k - this.v * this.c;
      this.v += a * h; this.x += this.v * h;
    }
    return this.x;
  }
  kick(v) { this.v += v; }
}

// 決定論的乱数
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const rng = mulberry32(20261013);
export const rand = (a = 0, b = 1) => a + (b - a) * Math.random();
export const randr = (r, a = 0, b = 1) => a + (b - a) * r();

// 値ノイズ (周期指定可能)
function hashi(x, y, s) {
  let h = (x * 374761393 + y * 668265263 + s * 1442695041) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
export function vnoise(x, y, seed = 0, period = 0) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  let x0 = xi, x1 = xi + 1, y0 = yi, y1 = yi + 1;
  if (period) { x0 = ((x0 % period) + period) % period; x1 = ((x1 % period) + period) % period; y0 = ((y0 % period) + period) % period; y1 = ((y1 % period) + period) % period; }
  const a = hashi(x0, y0, seed), b = hashi(x1, y0, seed), c = hashi(x0, y1, seed), d = hashi(x1, y1, seed);
  return lerp(lerp(a, b, u), lerp(c, d, u), v);
}
export function fbm(x, y, oct = 4, seed = 0, period = 0) {
  let s = 0, amp = 0.5, f = 1, n = 0;
  for (let i = 0; i < oct; i++) {
    s += amp * vnoise(x * f, y * f, seed + i * 17, period ? period * f : 0);
    n += amp; amp *= 0.5; f *= 2;
  }
  return s / n;
}

export function catmull(p0, p1, p2, p3, t) {
  const t2 = t * t, t3 = t2 * t;
  return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}
