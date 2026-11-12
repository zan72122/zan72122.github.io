// Small math helpers shared across the game.
export const PI = Math.PI;
export const TAU = Math.PI * 2;
export const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
export const len2 = (x, y) => Math.sqrt(x * x + y * y);
export const rand = (a = 0, b = 1) => a + Math.random() * (b - a);
export const sign = (x) => (x < 0 ? -1 : 1);

// Deterministic hash -> [0,1)
export function hash1(n) {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

// Seeded PRNG (mulberry32)
export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Critically/under-damped spring step for a scalar.
// state: {x, v}; returns state (mutated)
export function spring(s, target, k, c, dt) {
  const a = (target - s.x) * k - s.v * c;
  s.v += a * dt;
  s.x += s.v * dt;
  return s;
}

export function angleWrap(a) {
  while (a > PI) a -= TAU;
  while (a < -PI) a += TAU;
  return a;
}

// Exponential smoothing factor independent of frame rate.
export const damp = (rate, dt) => 1 - Math.exp(-rate * dt);

// HSL -> RGB (0..1)
export function hsl(h, s, l) {
  h = ((h % 1) + 1) % 1;
  const f = (n) => {
    const k = (n + h * 12) % 12;
    const a = s * Math.min(l, 1 - l);
    return l - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));
  };
  return [f(0), f(8), f(4)];
}

export function hexToRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}
