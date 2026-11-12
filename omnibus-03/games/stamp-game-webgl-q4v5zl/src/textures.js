// Procedural texture generation (canvas based) for hero materials:
// wood, paper, rubber, ink grain. Everything is generated at startup so the
// game ships with zero image assets.
import * as THREE from 'three';

// ---------- value noise ----------
const PERM = new Uint8Array(512);
{
  const p = [];
  for (let i = 0; i < 256; i++) p[i] = i;
  let seed = 1337;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let i = 255; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  for (let i = 0; i < 512; i++) PERM[i] = p[i & 255];
}
function hash(x, y) { return PERM[(PERM[x & 255] + y) & 255] / 255; }
function fade(t) { return t * t * (3 - 2 * t); }
export function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
  const u = fade(xf), v = fade(yf);
  return (a + (b - a) * u) * (1 - v) + (c + (d - c) * u) * v;
}
export function fbm(x, y, oct = 4) {
  let s = 0, a = 0.5, f = 1, n = 0;
  for (let i = 0; i < oct; i++) { s += a * vnoise(x * f, y * f); n += a; a *= 0.5; f *= 2.07; }
  return s / n;
}

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function toTexture(canvas, { srgb = true, repeat = [1, 1], aniso = 4 } = {}) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = aniso;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const lerp = (a, b, t) => a + (b - a) * t;

// ---------- wood ----------
// Returns { map, roughnessMap } with tileable-ish plank grain.
export function makeWood({ size = 512, light = [0.83, 0.62, 0.40], dark = [0.55, 0.34, 0.18], ringFreq = 0.055, seed = 0 } = {}) {
  const c = makeCanvas(size, size), r = makeCanvas(size, size);
  const cx = c.getContext('2d'), rx = r.getContext('2d');
  const img = cx.createImageData(size, size), rimg = rx.createImageData(size, size);
  const d = img.data, rd = rimg.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = x / size, ny = y / size;
      const warp = (fbm(nx * 2.5 + seed, ny * 0.8 + seed * 2, 3) - 0.5) * 7 + Math.sin(ny * 6.28) * 0.5;
      const ring = Math.sin(x * ringFreq + warp);
      let g = ring * 0.5 + 0.5;
      g = Math.pow(g, 2.2);
      const fine = fbm(nx * 40, ny * 400, 2) * 0.22 - 0.11; // fibre streaks along y
      const pore = vnoise(nx * 200, ny * 1600) > 0.82 ? 0.12 : 0;
      const t = clamp01(g * 0.75 + fine + pore + 0.1);
      const i = (y * size + x) * 4;
      d[i] = lerp(light[0], dark[0], t) * 255;
      d[i + 1] = lerp(light[1], dark[1], t) * 255;
      d[i + 2] = lerp(light[2], dark[2], t) * 255;
      d[i + 3] = 255;
      const rough = clamp01(0.42 + t * 0.25 + pore * 2);
      rd[i] = rd[i + 1] = rd[i + 2] = rough * 255; rd[i + 3] = 255;
    }
  }
  cx.putImageData(img, 0, 0);
  rx.putImageData(rimg, 0, 0);
  return { map: toTexture(c, { aniso: 8 }), roughnessMap: toTexture(r, { srgb: false, aniso: 8 }) };
}

// ---------- paper ----------
export function makePaper({ size = 512 } = {}) {
  const c = makeCanvas(size, size), b = makeCanvas(size, size);
  const cx = c.getContext('2d'), bx = b.getContext('2d');
  const img = cx.createImageData(size, size), bimg = bx.createImageData(size, size);
  const d = img.data, bd = bimg.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = x / size, ny = y / size;
      const fibre = fbm(nx * 60, ny * 60, 3);
      const fibreH = vnoise(nx * 500, ny * 30) * 0.5 + vnoise(nx * 30, ny * 500) * 0.5; // crossing fibres
      const v = 0.955 + (fibre - 0.5) * 0.05 + (fibreH - 0.5) * 0.06;
      const i = (y * size + x) * 4;
      d[i] = clamp01(v + 0.01) * 255; d[i + 1] = clamp01(v) * 255; d[i + 2] = clamp01(v - 0.03) * 255; d[i + 3] = 255;
      const bump = clamp01(0.5 + (fibreH - 0.5) * 1.2 + (fibre - 0.5) * 0.5);
      bd[i] = bd[i + 1] = bd[i + 2] = bump * 255; bd[i + 3] = 255;
    }
  }
  cx.putImageData(img, 0, 0);
  bx.putImageData(bimg, 0, 0);
  return { map: toTexture(c), bumpMap: toTexture(b, { srgb: false }) };
}

// ---------- ink grain (used by the imprint shader for かすれ) ----------
export function makeGrain({ size = 256 } = {}) {
  const c = makeCanvas(size, size);
  const cx = c.getContext('2d');
  const img = cx.createImageData(size, size);
  const d = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = x / size, ny = y / size;
      const g = fbm(nx * 24, ny * 24, 4) * 0.6 + vnoise(nx * 140, ny * 140) * 0.4;
      const i = (y * size + x) * 4;
      d[i] = d[i + 1] = d[i + 2] = clamp01(g) * 255; d[i + 3] = 255;
    }
  }
  cx.putImageData(img, 0, 0);
  return toTexture(c, { srgb: false });
}

// ---------- rubber bump ----------
export function makeRubberBump({ size = 256 } = {}) {
  const c = makeCanvas(size, size);
  const cx = c.getContext('2d');
  const img = cx.createImageData(size, size);
  const d = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = x / size, ny = y / size;
      const g = 0.5 + (vnoise(nx * 180, ny * 180) - 0.5) * 0.7 + (fbm(nx * 20, ny * 20, 2) - 0.5) * 0.3;
      const i = (y * size + x) * 4;
      d[i] = d[i + 1] = d[i + 2] = clamp01(g) * 255; d[i + 3] = 255;
    }
  }
  cx.putImageData(img, 0, 0);
  return toTexture(c, { srgb: false });
}

// ---------- felt / cork board ----------
export function makeFelt({ size = 256, base = [0.55, 0.68, 0.62] } = {}) {
  const c = makeCanvas(size, size);
  const cx = c.getContext('2d');
  const img = cx.createImageData(size, size);
  const d = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = x / size, ny = y / size;
      const g = (vnoise(nx * 220, ny * 220) - 0.5) * 0.10 + (fbm(nx * 12, ny * 12, 3) - 0.5) * 0.08;
      const i = (y * size + x) * 4;
      d[i] = clamp01(base[0] + g) * 255; d[i + 1] = clamp01(base[1] + g) * 255; d[i + 2] = clamp01(base[2] + g) * 255; d[i + 3] = 255;
    }
  }
  cx.putImageData(img, 0, 0);
  return toTexture(c);
}

export { makeCanvas, toTexture };
