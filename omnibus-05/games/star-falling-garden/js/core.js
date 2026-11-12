'use strict';
/* ============================================================
   core.js — math, easing, springs, polylines, colours, glow sprites
   ============================================================ */

const TAU = Math.PI * 2;
const PI = Math.PI;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const clamp01 = v => (v < 0 ? 0 : v > 1 ? 1 : v);
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = t => { t = clamp01(t); return t * t * (3 - 2 * t); };
const sstep = (a, b, v) => smooth((v - a) / (b - a));

const Ease = {
  outCubic: t => 1 - Math.pow(1 - clamp01(t), 3),
  inCubic: t => Math.pow(clamp01(t), 3),
  outQuad: t => { t = clamp01(t); return 1 - (1 - t) * (1 - t); },
  inQuad: t => { t = clamp01(t); return t * t; },
  inOut: t => { t = clamp01(t); return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; },
  outBack: (t, s = 1.7) => { t = clamp01(t) - 1; return 1 + (s + 1) * t * t * t + s * t * t; },
  outElastic: t => {
    t = clamp01(t);
    if (t === 0 || t === 1) return t;
    return Math.pow(2, -9 * t) * Math.sin((t * 9 - 0.75) * (TAU / 3)) + 1;
  },
};

/* frame-rate independent exponential approach */
function damp(cur, target, lambda, dt) { return cur + (target - cur) * (1 - Math.exp(-lambda * dt)); }
function angNorm(a) { a = (a + PI) % TAU; if (a < 0) a += TAU; return a - PI; }
function angLerp(a, b, t) { return a + angNorm(b - a) * t; }
function angDamp(a, b, lambda, dt) { return a + angNorm(b - a) * (1 - Math.exp(-lambda * dt)); }

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const WR = mulberry32(250925);           // deterministic world generation
const rnd = (a = 0, b = 1) => a + (b - a) * Math.random();
const wrnd = (a = 0, b = 1) => a + (b - a) * WR();

/* second-order spring */
class Spring {
  constructor(v = 0, k = 80, c = 12) { this.v = v; this.vel = 0; this.k = k; this.c = c; this.target = v; }
  update(dt) {
    const a = (this.target - this.v) * this.k - this.vel * this.c;
    this.vel += a * dt; this.v += this.vel * dt; return this.v;
  }
  snap(v) { this.v = this.target = v; this.vel = 0; }
  kick(dv) { this.vel += dv; }
}

/* ---------- polylines ---------- */
function catmull(ctrl, seg = 10) {
  const out = [];
  const n = ctrl.length;
  for (let i = 0; i < n - 1; i++) {
    const p0 = ctrl[Math.max(0, i - 1)], p1 = ctrl[i], p2 = ctrl[i + 1], p3 = ctrl[Math.min(n - 1, i + 2)];
    for (let k = 0; k < seg; k++) {
      const t = k / seg, t2 = t * t, t3 = t2 * t;
      out.push({
        x: 0.5 * (2 * p1.x + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
        y: 0.5 * (2 * p1.y + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
      });
    }
  }
  out.push({ x: ctrl[n - 1].x, y: ctrl[n - 1].y });
  return out;
}

/* evenly spaced samples with tangent / normal / segment angle */
function resample(pts, spacing) {
  const cum = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
  const L = cum[cum.length - 1];
  const n = Math.max(3, Math.round(L / spacing) + 1);
  const out = [];
  let j = 0;
  for (let k = 0; k < n; k++) {
    const s = (k / (n - 1)) * L;
    while (j < cum.length - 2 && cum[j + 1] < s) j++;
    const seg = cum[j + 1] - cum[j] || 1e-6;
    const t = clamp01((s - cum[j]) / seg);
    out.push({ x: lerp(pts[j].x, pts[j + 1].x, t), y: lerp(pts[j].y, pts[j + 1].y, t), s });
  }
  for (let k = 0; k < n; k++) {
    const a = out[Math.max(0, k - 1)], b = out[Math.min(n - 1, k + 1)];
    let tx = b.x - a.x, ty = b.y - a.y;
    const l = Math.hypot(tx, ty) || 1;
    tx /= l; ty /= l;
    const p = out[k];
    p.tx = tx; p.ty = ty; p.nx = -ty; p.ny = tx; p.ang = Math.atan2(ty, tx);
    const q = out[Math.min(n - 1, k + 1)];
    p.seg = k < n - 1 ? Math.atan2(q.y - p.y, q.x - p.x) : p.ang;
  }
  return out;
}

/* ---------- colour ---------- */
function rgba(r, g, b, a = 1) { return 'rgba(' + (r | 0) + ',' + (g | 0) + ',' + (b | 0) + ',' + a.toFixed(3) + ')'; }
function mixc(c1, c2, t) { return [lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t)]; }
function css(c, a = 1) { return rgba(c[0], c[1], c[2], a); }
function lighten(c, t) { return mixc(c, [255, 236, 190], t); }

const PAL = {
  skyTop: [7, 17, 30], skyHor: [22, 50, 72], skyHigh: [3, 6, 14],
  soil: [58, 41, 31], soilDeep: [22, 15, 12],
  grass: [36, 64, 45], grassLit: [150, 170, 84],
  rock: [52, 56, 64], rockLit: [120, 110, 92],
  water: [10, 32, 48],
  star: [255, 234, 170], starCore: [255, 252, 232], starEdge: [255, 196, 92],
  stem: [44, 92, 58], stemDark: [22, 52, 36], stemLit: [120, 190, 96],
  leaf: [58, 122, 70], leafDark: [30, 70, 44], vein: [226, 255, 170],
  glowPlant: [196, 255, 150], glowWarm: [255, 208, 128],
  bark: [66, 46, 34], barkDark: [36, 24, 18],
  smock: [198, 90, 58], smockDark: [128, 54, 36], trousers: [58, 51, 70], boot: [74, 48, 36],
  skin: [241, 196, 156], cheek: [232, 138, 116], hat: [216, 181, 106], hatDark: [160, 124, 60], band: [109, 58, 42],
  scarf: [47, 138, 140], eye: [35, 26, 23],
  petal: [255, 236, 214], petalEdge: [255, 190, 150],
};

/* ---------- glow sprites (additive light) ---------- */
const Glow = {
  map: new Map(),
  make(name, stops, size = 128) {
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const g = c.getContext('2d');
    const gr = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    for (const [o, col] of stops) gr.addColorStop(o, col);
    g.fillStyle = gr;
    g.fillRect(0, 0, size, size);
    this.map.set(name, c);
    return c;
  },
  init() {
    this.make('warm', [[0, 'rgba(255,246,214,1)'], [0.12, 'rgba(255,222,150,0.62)'], [0.4, 'rgba(255,176,86,0.2)'], [0.7, 'rgba(255,150,70,0.06)'], [1, 'rgba(255,140,60,0)']]);
    this.make('plant', [[0, 'rgba(228,255,196,0.95)'], [0.18, 'rgba(176,244,150,0.42)'], [0.5, 'rgba(110,214,140,0.12)'], [1, 'rgba(80,200,140,0)']]);
    this.make('cool', [[0, 'rgba(220,235,255,0.9)'], [0.25, 'rgba(150,190,255,0.3)'], [1, 'rgba(120,160,255,0)']]);
    this.make('window', [[0, 'rgba(255,214,140,0.9)'], [0.3, 'rgba(255,170,80,0.3)'], [1, 'rgba(255,140,60,0)']]);
    this.make('rose', [[0, 'rgba(255,248,236,1)'], [0.14, 'rgba(255,214,186,0.6)'], [0.45, 'rgba(255,160,130,0.18)'], [1, 'rgba(255,130,120,0)']]);
    this.make('dot', [[0, 'rgba(255,255,255,1)'], [0.3, 'rgba(255,255,255,0.5)'], [1, 'rgba(255,255,255,0)']], 32);
    this.make('shadow', [[0, 'rgba(0,0,0,0.55)'], [0.6, 'rgba(0,0,0,0.25)'], [1, 'rgba(0,0,0,0)']], 64);
  },
  get(name) { return this.map.get(name); },
};

function drawGlow(ctx, name, x, y, r, a) {
  if (a <= 0.003 || r <= 0) return;
  const a0 = ctx.globalAlpha;
  ctx.globalAlpha = Math.min(1, a);
  ctx.drawImage(Glow.get(name), x - r, y - r, r * 2, r * 2);
  ctx.globalAlpha = a0;
}

/* coroutine helpers — generators receive dt through next(dt) */
function* wait(t) { let e = 0; while (e < t) e += yield; }
function* until(fn) { while (!fn()) yield; }
function* tween(dur, fn) {
  let e = 0;
  fn(0);
  while (e < dur) { e += yield; fn(clamp01(e / dur)); }
}
function* all(...gens) {
  let alive = gens.slice();
  let dt = 0;
  while (alive.length) {
    alive = alive.filter(g => !g.next(dt).done);
    if (!alive.length) break;
    dt = yield;
  }
}
