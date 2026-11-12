// Small math / noise helpers shared by every module.

export const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
// Frame-rate independent exponential approach.
export const damp = (current, target, lambda, dt) =>
  lerp(current, target, 1 - Math.exp(-lambda * dt));
export const wrapAngle = (a) => {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
};
export const dampAngle = (current, target, lambda, dt) =>
  current + wrapAngle(target - current) * (1 - Math.exp(-lambda * dt));

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash2(ix, iy) {
  let h = Math.imul(ix, 374761393) + Math.imul(iy, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

export function vnoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix, fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  const a = hash2(ix, iy), b = hash2(ix + 1, iy);
  const c = hash2(ix, iy + 1), d = hash2(ix + 1, iy + 1);
  return lerp(lerp(a, b, ux), lerp(c, d, ux), uy);
}

export function fbm(x, y, oct = 4) {
  let s = 0, a = 0.5, f = 1, n = 0;
  for (let i = 0; i < oct; i++) {
    s += a * vnoise(x * f, y * f);
    n += a;
    a *= 0.5;
    f *= 2.03;
  }
  return s / n;
}

// Visible spectrum approximation (Zucconi 6-bump fit). t: 0 = red, 1 = violet.
// Output is linear RGB, roughly normalised.
function bump(x, yo) {
  const y = 1 - x * x - yo;
  return y > 0 ? y : 0;
}
export function spectral(t, out) {
  const w = 700 - 300 * clamp(t, 0, 1);
  const x = clamp((w - 400) / 300, 0, 1);
  const r = bump(3.54585104 * (x - 0.69549072), 0.02312639) + bump(3.9030714 * (x - 0.11748627), 0.8489713);
  const g = bump(2.93225262 * (x - 0.49228336), 0.15225084) + bump(3.21182957 * (x - 0.86755042), 0.88445281);
  const b = bump(2.41593945 * (x - 0.2769988), 0.52607955) + bump(3.96587128 * (x - 0.6607786), 0.73949448);
  out.r = r; out.g = g; out.b = b;
  return out;
}

// ---------------------------------------------------------------------------
// GLSL snippets
// ---------------------------------------------------------------------------

export const GLSL_NOISE = /* glsl */ `
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash12(i), b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0)), d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm3(vec2 p) {
  float s = 0.5 * vnoise(p);
  p = mat2(1.6, 1.2, -1.2, 1.6) * p;
  s += 0.25 * vnoise(p);
  p = mat2(1.6, 1.2, -1.2, 1.6) * p;
  s += 0.125 * vnoise(p);
  return s / 0.875;
}
`;

export const GLSL_SPECTRAL = /* glsl */ `
vec3 bump3y(vec3 x, vec3 yoffset) {
  vec3 y = vec3(1.0) - x * x;
  return clamp(y - yoffset, 0.0, 1.0);
}
// t: 0 = red ... 1 = violet
vec3 spectralColor(float t) {
  float x = 1.0 - clamp(t, 0.0, 1.0);
  const vec3 c1 = vec3(3.54585104, 2.93225262, 2.41593945);
  const vec3 x1 = vec3(0.69549072, 0.49228336, 0.27699880);
  const vec3 y1 = vec3(0.02312639, 0.15225084, 0.52607955);
  const vec3 c2 = vec3(3.90307140, 3.21182957, 3.96587128);
  const vec3 x2 = vec3(0.11748627, 0.86755042, 0.66077860);
  const vec3 y2 = vec3(0.84897130, 0.88445281, 0.73949448);
  return bump3y(c1 * (x - x1), y1) + bump3y(c2 * (x - x2), y2);
}
// Thin film interference reflectance (soap film / oil on water).
vec3 thinFilm(float thicknessNm, float cosTheta) {
  float n = 1.33;
  float sinT2 = (1.0 - cosTheta * cosTheta) / (n * n);
  float cosT = sqrt(max(1.0 - sinT2, 0.0));
  float opd = 2.0 * n * thicknessNm * cosT;
  vec3 lambda = vec3(650.0, 532.0, 450.0);
  vec3 ph = 6.2831853 * opd / lambda + 3.14159265;
  return 0.5 - 0.5 * cos(ph);
}
`;
