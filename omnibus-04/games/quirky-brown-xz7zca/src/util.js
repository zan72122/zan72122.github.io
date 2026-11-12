export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, v) => {
  const t = clamp((v - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
export const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
export const easeOutBack = (t) => {
  const c1 = 1.70158, c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};
export const TAU = Math.PI * 2;

// Frame-rate independent exponential approach.
export const approach = (cur, target, rate, dt) => target + (cur - target) * Math.exp(-rate * dt);

// Deterministic PRNG (mulberry32).
export function rng(seed) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Smooth 1D value noise in [0,1].
export function noise1(seed) {
  const r = rng(seed);
  const N = 256;
  const tbl = new Float32Array(N);
  for (let i = 0; i < N; i++) tbl[i] = r();
  return function (x) {
    const i = Math.floor(x);
    const f = x - i;
    const a = tbl[((i % N) + N) % N];
    const b = tbl[(((i + 1) % N) + N) % N];
    const u = f * f * (3 - 2 * f);
    return a + (b - a) * u;
  };
}

// Point in polygon (even-odd). poly: flat array [x0,y0,x1,y1,...] or array of [x,y].
export function pointInPoly(px, py, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const xi = pts[i][0], yi = pts[i][1], xj = pts[j][0], yj = pts[j][1];
    if ((yi > py) !== (yj > py) && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

// Closest point on polygon boundary, returns [x, y, dist].
export function closestOnPoly(px, py, pts) {
  let best = [pts[0][0], pts[0][1], Infinity];
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const ax = pts[j][0], ay = pts[j][1], bx = pts[i][0], by = pts[i][1];
    const dx = bx - ax, dy = by - ay;
    const L2 = dx * dx + dy * dy || 1;
    const t = clamp(((px - ax) * dx + (py - ay) * dy) / L2, 0, 1);
    const cx = ax + dx * t, cy = ay + dy * t;
    const d = Math.hypot(px - cx, py - cy);
    if (d < best[2]) best = [cx, cy, d];
  }
  return best;
}

// Area, centroid and polar second moment (about centroid) of a simple polygon.
export function polyMassProps(pts) {
  let A = 0, cx = 0, cy = 0, Ixx = 0, Iyy = 0;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [x0, y0] = pts[j];
    const [x1, y1] = pts[i];
    const cr = x0 * y1 - x1 * y0;
    A += cr;
    cx += (x0 + x1) * cr;
    cy += (y0 + y1) * cr;
    Ixx += (y0 * y0 + y0 * y1 + y1 * y1) * cr;
    Iyy += (x0 * x0 + x0 * x1 + x1 * x1) * cr;
  }
  A *= 0.5;
  cx /= 6 * A;
  cy /= 6 * A;
  Ixx /= 12;
  Iyy /= 12;
  const Jorigin = Ixx + Iyy; // signed with A
  const J = Jorigin / A - (cx * cx + cy * cy); // per unit area, about centroid
  return { area: Math.abs(A), cx, cy, j: J };
}

export function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
export function rgba(hex, a) {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r},${g},${b},${a})`;
}
export function mixHex(a, b, t) {
  const A = hexToRgb(a), B = hexToRgb(b);
  const c = A.map((v, i) => Math.round(v + (B[i] - v) * t));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}
export function shadeHex(hex, amt) {
  // amt > 0 lightens towards white, < 0 darkens towards a warm near-black
  return amt >= 0 ? mixHex(hex, '#ffffff', amt) : mixHex(hex, '#2a1c14', -amt);
}
