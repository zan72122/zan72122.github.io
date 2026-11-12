// Procedural textures painted on canvas at startup (no image assets).
// Most maps are near-neutral detail maps; tint comes from material.color.
import * as THREE from 'three';

let seed = 1337;
export function rand() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
export function setSeed(s) { seed = s; }

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

// tileable value noise
class Noise {
  constructor(n = 64) {
    this.n = n; this.g = new Float32Array(n * n);
    for (let i = 0; i < n * n; i++) this.g[i] = rand();
  }
  at(x, y) {
    const n = this.n;
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    const x0 = ((xi % n) + n) % n, y0 = ((yi % n) + n) % n;
    const x1 = (x0 + 1) % n, y1 = (y0 + 1) % n;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const g = this.g;
    const a = g[y0 * n + x0], b = g[y0 * n + x1], c = g[y1 * n + x0], d = g[y1 * n + x1];
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  }
  // fbm over [0,1) texture space with base frequency f (must divide n for tiling)
  fbm(u, v, f, oct = 4) {
    let s = 0, amp = 0.5, fr = f;
    for (let i = 0; i < oct; i++) { s += amp * this.at(u * fr, v * fr); amp *= 0.5; fr *= 2; }
    return s;
  }
}

function toTex(c, { repeat = [1, 1], srgb = true, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = aniso;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}

// build a normal map from a height field (Float32Array w*h, 0..1)
function normalFromHeight(h, w, hh, strength = 2) {
  const c = canvas(w, hh), ctx = c.getContext('2d');
  const img = ctx.createImageData(w, hh), d = img.data;
  for (let y = 0; y < hh; y++) {
    for (let x = 0; x < w; x++) {
      const l = h[y * w + ((x - 1 + w) % w)], r = h[y * w + ((x + 1) % w)];
      const u = h[((y - 1 + hh) % hh) * w + x], b = h[((y + 1) % hh) * w + x];
      let nx = (l - r) * strength, ny = (b - u) * strength, nz = 1;
      const len = Math.hypot(nx, ny, nz);
      const i = (y * w + x) * 4;
      d[i] = (nx / len * 0.5 + 0.5) * 255;
      d[i + 1] = (ny / len * 0.5 + 0.5) * 255;
      d[i + 2] = (nz / len * 0.5 + 0.5) * 255;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return toTex(c, { srgb: false });
}

// Generic painter: fn(u,v,x,y) -> [r,g,b,height]
function paint(w, h, fn, normalStrength = 0) {
  const c = canvas(w, h), ctx = c.getContext('2d');
  const img = ctx.createImageData(w, h), d = img.data;
  const hf = normalStrength ? new Float32Array(w * h) : null;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const o = fn(x / w, y / h, x, y);
      const i = (y * w + x) * 4;
      d[i] = o[0]; d[i + 1] = o[1]; d[i + 2] = o[2]; d[i + 3] = o.length > 4 ? o[4] : 255;
      if (hf) hf[y * w + x] = o[3];
    }
  }
  ctx.putImageData(img, 0, 0);
  return { map: toTex(c), normalMap: hf ? normalFromHeight(hf, w, h, normalStrength) : null, canvas: c };
}

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;

export const T = {};

export function buildTextures() {
  const N = new Noise(64);
  const N2 = new Noise(32);

  // ---- siding: horizontal boards (tinted by material)
  T.siding = paint(256, 256, (u, v) => {
    const boards = 8, p = (v * boards) % 1;
    const groove = p < 0.06 ? 0.0 : p < 0.12 ? (p - 0.06) / 0.06 : 1;
    const n = N.fbm(u, v, 8, 4);
    const grain = N.fbm(u * 0.5, v * 4, 16, 2);
    const base = 225 + (n - 0.5) * 30 + (grain - 0.5) * 12 - (1 - groove) * 90;
    const b = clamp(base, 0, 255);
    return [b, b, b, groove * 0.8 + n * 0.2];
  }, 3);

  // ---- mortar-lined stucco / tile siding for variety
  T.stucco = paint(256, 256, (u, v) => {
    const n = N.fbm(u, v, 16, 5);
    const b = clamp(215 + (n - 0.5) * 60, 0, 255);
    return [b, b, b, n];
  }, 2.5);

  // ---- slate roof (colored strips, grayscale)
  T.slate = paint(256, 256, (u, v) => {
    const rows = 10, r = Math.floor(v * rows), p = (v * rows) % 1;
    const off = (r % 2) * 0.5 / 6;
    const cu = ((u + off) * 6) % 1;
    const edge = cu < 0.03 ? 0.4 : 1;
    const lip = p > 0.9 ? 0.5 : 1;
    const n = N.fbm(u, v, 16, 3);
    const tone = 0.75 + N2.at(Math.floor((u + off) * 6) * 3.1, r * 7.3) * 0.35;
    const b = clamp(170 * tone * edge * lip + (n - 0.5) * 30, 0, 255);
    return [b, b, b, p * edge * lip];
  }, 4);

  // ---- kawara (Japanese wave tiles)
  T.kawara = paint(256, 256, (u, v) => {
    const cols = 8, rows = 8;
    const cu = (u * cols) % 1, rv = (v * rows) % 1;
    const wave = 0.5 + 0.5 * Math.cos(cu * Math.PI * 2);
    const lip = rv > 0.88 ? 0.55 : 1;
    const n = N.fbm(u, v, 16, 3);
    const b = clamp((110 + wave * 110) * lip + (n - 0.5) * 25, 0, 255);
    return [b, b, b, wave * 0.8 * lip + rv * 0.2];
  }, 5);

  // ---- asphalt
  T.asphalt = paint(512, 512, (u, v, x, y) => {
    const n = N.fbm(u, v, 16, 5);
    const s = N2.at(x * 0.9, y * 0.9);
    const speck = s > 0.83 ? 45 : s < 0.1 ? -25 : 0;
    const stain = N.fbm(u, v, 2, 3);
    const b = clamp(92 + (n - 0.5) * 40 + speck - (stain - 0.5) * 30, 0, 255);
    return [b, b * 0.99, b * 0.97, n + speck / 120];
  }, 2);

  // ---- concrete
  T.concrete = paint(256, 256, (u, v) => {
    const n = N.fbm(u, v, 8, 5);
    const pits = N2.at(u * 128, v * 128) > 0.9 ? -30 : 0;
    const b = clamp(190 + (n - 0.5) * 55 + pits, 0, 255);
    return [b, b, b * 0.98, n];
  }, 1.6);

  // ---- concrete block wall (390x190 blocks)
  T.block = paint(256, 256, (u, v) => {
    const bx = 2, by = 4;
    const r = Math.floor(v * by);
    const uu = (u * bx + (r % 2) * 0.5) % 1, vv = (v * by) % 1;
    const m = uu < 0.025 || vv < 0.05 ? 1 : 0;
    const n = N.fbm(u, v, 16, 4);
    const tone = 0.9 + N2.at(Math.floor(u * bx + (r % 2) * 0.5) * 5.1, r * 3.7) * 0.15;
    const b = clamp((m ? 150 : 200 * tone) + (n - 0.5) * 40, 0, 255);
    return [b, b, b * 0.97, m ? 0 : 0.6 + n * 0.4];
  }, 3);

  // ---- wood floor planks (colored)
  T.wood = paint(256, 256, (u, v) => {
    const planks = 6, p = Math.floor(u * planks), pu = (u * planks) % 1;
    const seam = pu < 0.02 ? 0.55 : 1;
    const g = N.fbm(u * 0.25 + p * 0.37, v * 1.0, 32, 3);
    const rings = 0.5 + 0.5 * Math.sin((v * 40 + g * 12 + p * 3) );
    const tone = 0.85 + N2.at(p * 7.7, 3.3) * 0.3;
    const r = 176 * tone * seam - rings * 18, gg = 124 * tone * seam - rings * 14, b = 78 * tone * seam - rings * 10;
    return [r, gg, b, seam * 0.7 + rings * 0.3];
  }, 1.5);

  // ---- wallpaper (fine weave)
  T.wallpaper = paint(256, 256, (u, v, x, y) => {
    const w = ((x % 4) < 2) ^ ((y % 4) < 2) ? 1 : 0;
    const n = N.fbm(u, v, 8, 3);
    const b = clamp(236 + w * 6 + (n - 0.5) * 14, 0, 255);
    return [b, b * 0.99, b * 0.965, w * 0.5 + n * 0.5];
  }, 1.2);

  // ---- tatami
  T.tatami = paint(256, 256, (u, v, x) => {
    const weave = 0.5 + 0.5 * Math.sin(v * 256 * Math.PI / 2.2);
    const n = N.fbm(u, v, 16, 3);
    const border = u < 0.05 || u > 0.95 ? 1 : 0;
    if (border) return [40, 52, 44, 0.8];
    const r = 186 + weave * 18 + (n - .5) * 24, g = 180 + weave * 16 + (n - .5) * 22, b = 118 + weave * 10;
    return [r, g, b, weave];
  }, 1.4);

  // ---- bathroom tile
  T.tile = paint(128, 128, (u, v) => {
    const t = 8, uu = (u * t) % 1, vv = (v * t) % 1;
    const g = uu < 0.06 || vv < 0.06 ? 1 : 0;
    const n = N.fbm(u, v, 8, 2);
    const b = g ? 185 : 238 + (n - 0.5) * 10;
    return [b, b, b * 0.99, g ? 0 : 1];
  }, 2);

  // ---- grass & soil
  T.grass = paint(256, 256, (u, v, x, y) => {
    const n = N.fbm(u, v, 8, 5), s = N2.at(x * 1.3, y * 1.3);
    const r = 70 + n * 40 + s * 20, g = 100 + n * 55 + s * 25, b = 45 + n * 20;
    return [r, g, b, n];
  }, 1.5);
  T.soil = paint(256, 256, (u, v, x, y) => {
    const n = N.fbm(u, v, 16, 5), s = N2.at(x * 1.7, y * 1.7) > 0.85 ? 25 : 0;
    const b = 150 + (n - 0.5) * 50 + s;
    return [b, b * 0.86, b * 0.68, n];
  }, 1.5);

  // ---- corrugated cardboard (colored) with tape and a blank label
  T.cardboard = paint(256, 256, (u, v) => {
    const n = N.fbm(u, v, 16, 3);
    const flute = 0.5 + 0.5 * Math.sin(u * 256 * 0.9);
    let r = 196 + (n - 0.5) * 22 + flute * 4, g = 154 + (n - 0.5) * 18 + flute * 3, b = 104 + (n - 0.5) * 14;
    // packing tape band
    if (v > 0.44 && v < 0.56) { r = r * 0.85 + 30; g = g * 0.85 + 25; b = b * 0.8 + 10; }
    // label (paper, printed barcode-ish bars, no words)
    if (u > 0.58 && u < 0.9 && v > 0.64 && v < 0.88) {
      r = g = b = 244;
      if (v > 0.8 && v < 0.85 && u > 0.61 && u < 0.87 && (Math.floor(u * 400) % 3 === 0 || Math.floor(u * 170) % 5 === 1)) r = g = b = 30;
      if (v > 0.68 && v < 0.7 && u > 0.61 && u < 0.8) r = g = b = 120;
      if (v > 0.72 && v < 0.74 && u > 0.61 && u < 0.75) r = g = b = 140;
    }
    return [r, g, b, flute * 0.3 + n * 0.7];
  }, 1.2);

  // ---- metal (brushed) detail
  T.metal = paint(128, 128, (u, v) => {
    const n = N.fbm(u * 0.1, v, 32, 3);
    const b = 200 + (n - 0.5) * 60;
    return [b, b, b, n];
  }, 0.8);

  // ---- fabrics (colored patterns)
  T.fabric = {};
  const weaveN = (x, y) => (((x % 2) ^ (y % 2)) ? 6 : -6);
  T.fabric.stripe = (c1, c2, n = 8) => paint(128, 128, (u, v, x, y) => {
    const s = Math.floor(v * n) % 2 ? c1 : c2; const w = weaveN(x, y);
    return [s[0] + w, s[1] + w, s[2] + w, 0.5 + w / 20];
  }, 0.8);
  T.fabric.check = (c1, c2, n = 6) => paint(128, 128, (u, v, x, y) => {
    const a = Math.floor(u * n) % 2, b = Math.floor(v * n) % 2; const w = weaveN(x, y);
    const k = a && b ? 0.75 : (a || b ? 0.88 : 1);
    const s = a || b ? c1 : c2;
    return [s[0] * k + w, s[1] * k + w, s[2] * k + w, 0.5 + w / 20];
  }, 0.8);
  T.fabric.dots = (c1, c2, n = 6) => paint(128, 128, (u, v, x, y) => {
    const cu = (u * n) % 1 - 0.5, cv = (v * n + (Math.floor(u * n) % 2) * 0.5) % 1 - 0.5;
    const s = cu * cu + cv * cv < 0.06 ? c1 : c2; const w = weaveN(x, y);
    return [s[0] + w, s[1] + w, s[2] + w, 0.5 + w / 20];
  }, 0.8);
  T.fabric.flower = (c1, c2, c3) => paint(256, 256, (u, v, x, y) => {
    const n = 5, cu = (u * n) % 1 - 0.5, cv = (v * n + (Math.floor(u * n) % 2) * 0.5) % 1 - 0.5;
    const a = Math.atan2(cv, cu), r = Math.hypot(cu, cv);
    const petal = r < 0.18 + 0.08 * Math.cos(a * 5);
    const center = r < 0.06;
    const s = center ? c3 : petal ? c1 : c2; const w = weaveN(x, y);
    return [s[0] + w, s[1] + w, s[2] + w, 0.5];
  }, 0.6);
  T.fabric.plain = (c1) => paint(64, 64, (u, v, x, y) => {
    const w = weaveN(x, y) + (N.at(x * 0.5, y * 0.5) - 0.5) * 10;
    return [c1[0] + w, c1[1] + w, c1[2] + w, 0.5 + w / 20];
  }, 0.8);

  // ---- foliage card (alpha) : a clump of leaves
  {
    const c = canvas(256, 256), ctx = c.getContext('2d');
    ctx.clearRect(0, 0, 256, 256);
    for (let i = 0; i < 160; i++) {
      const a = rand() * Math.PI * 2, r = Math.sqrt(rand()) * 100;
      const x = 128 + Math.cos(a) * r, y = 128 + Math.sin(a) * r;
      const L = 14 + rand() * 12, W = L * 0.45, rot = rand() * Math.PI * 2;
      const shade = 0.55 + rand() * 0.45;
      ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
      ctx.fillStyle = `rgb(${Math.round(70 * shade)},${Math.round(118 * shade)},${Math.round(48 * shade)})`;
      ctx.beginPath(); ctx.ellipse(0, 0, L / 2, W / 2, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = `rgba(20,40,10,0.35)`; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(-L / 2, 0); ctx.lineTo(L / 2, 0); ctx.stroke();
      ctx.restore();
    }
    const t = toTex(c); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    T.leaves = { map: t };
  }

  // ---- soft round particle (water drop / dust)
  {
    const c = canvas(64, 64), ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.5, 'rgba(255,255,255,0.5)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
    T.soft = toTex(c);
  }

  // ---- window glass reflections: subtle vertical gradient streaks
  T.glass = paint(128, 128, (u, v) => {
    const s = 0.5 + 0.5 * Math.sin(u * 9 + v * 3);
    const b = 180 + s * 50 + (N.fbm(u, v, 4, 2) - 0.5) * 30;
    return [b, b, b, 0];
  }, 0);

  return T;
}
