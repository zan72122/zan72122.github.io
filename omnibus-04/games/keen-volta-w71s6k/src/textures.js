// Canvas-generated textures. Domino faces are redrawn when a domino gains a
// new physical mark (e.g. the chip it gets when it slams into the far rim),
// so identity survives every later reuse.
import * as THREE from 'three';
import { makeRng } from './util.js';

const IVORY = ['#f4ecd9', '#ebe0c7'];
export const PIP_LAYOUT = {
  0: [], 1: [[0.5, 0.5]], 2: [[0.26, 0.26], [0.74, 0.74]],
  3: [[0.24, 0.24], [0.5, 0.5], [0.76, 0.76]],
  4: [[0.26, 0.26], [0.74, 0.26], [0.26, 0.74], [0.74, 0.74]],
  5: [[0.25, 0.25], [0.75, 0.25], [0.5, 0.5], [0.25, 0.75], [0.75, 0.75]],
  6: [[0.27, 0.22], [0.73, 0.22], [0.27, 0.5], [0.73, 0.5], [0.27, 0.78], [0.73, 0.78]],
};

function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function tex(c, repeat) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  return t;
}

function ivoryBase(g, w, h, rng, tint = 0) {
  const gr = g.createLinearGradient(0, 0, w, h);
  gr.addColorStop(0, IVORY[0]); gr.addColorStop(1, IVORY[1]);
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  if (tint) { g.fillStyle = `rgba(160,120,60,${tint})`; g.fillRect(0, 0, w, h); }
  // bone-like grain
  for (let i = 0; i < w * h / 180; i++) {
    g.fillStyle = `rgba(${rng() < 0.5 ? '120,100,70' : '255,255,245'},${0.03 + rng() * 0.05})`;
    g.fillRect(rng() * w, rng() * h, 1 + rng() * 2, 1 + rng() * 8);
  }
  // worn edges
  const e = g.createLinearGradient(0, 0, w, 0);
  e.addColorStop(0, 'rgba(110,90,60,0.18)'); e.addColorStop(0.06, 'rgba(0,0,0,0)');
  e.addColorStop(0.94, 'rgba(0,0,0,0)'); e.addColorStop(1, 'rgba(110,90,60,0.18)');
  g.fillStyle = e; g.fillRect(0, 0, w, h);
}

function drawScratch(g, s, w, h) {
  g.lineCap = 'round'; g.lineJoin = 'round';
  const path = () => { g.beginPath(); s.pts.forEach(([u, v], i) => (i ? g.lineTo(u * w, v * h) : g.moveTo(u * w, v * h))); };
  g.strokeStyle = `rgba(255,252,240,${0.55 * (s.a ?? 1)})`; g.lineWidth = (s.w || 2) + 1.5; g.save(); g.translate(1, 1.2); path(); g.stroke(); g.restore();
  g.strokeStyle = s.color || `rgba(70,55,40,${0.75 * (s.a ?? 1)})`; g.lineWidth = s.w || 2; path(); g.stroke();
}

function drawChip(g, c, w, h, rng) {
  // corner chip: raw, darker broken material with a crisp broken outline
  const cx = c.u * w, cy = c.v * h, r = (c.r || 0.14) * w;
  g.save(); g.beginPath();
  const n = 7;
  for (let i = 0; i <= n; i++) {
    const a = (c.a0 ?? 0) + (i / n) * Math.PI * 0.5;
    const rr = r * (0.7 + 0.3 * Math.sin(i * 2.7 + (c.seed || 1)));
    const x = cx + Math.cos(a) * rr * (c.sx || 1), y = cy + Math.sin(a) * rr * (c.sy || 1);
    i ? g.lineTo(x, y) : g.moveTo(x, y);
  }
  g.lineTo(cx, cy); g.closePath();
  g.fillStyle = '#b7a684'; g.fill();
  g.strokeStyle = 'rgba(60,45,30,0.8)'; g.lineWidth = 2; g.stroke();
  for (let i = 0; i < 18; i++) { g.fillStyle = `rgba(80,65,45,${0.2 + rng() * 0.3})`; g.fillRect(cx + (rng() - 0.5) * r * 1.4, cy + (rng() - 0.5) * r * 1.4, 2, 2); }
  g.restore();
}

// Pip face: top half = pips[0], bottom half = pips[1].
export function dominoFace(id, opts) {
  const w = opts.big ? 1024 : 256, h = Math.round(w * (opts.h / opts.w));
  const hh = Math.min(h, 1024);
  const c = canvas(w, hh);
  const t = tex(c); t.userData = { draw: null };
  const draw = () => {
    const rng = makeRng(opts.seed || 7);
    const g = c.getContext('2d');
    ivoryBase(g, w, hh, rng, opts.tint || 0);
    // centre bar (engraved)
    g.fillStyle = 'rgba(70,58,40,0.75)'; g.fillRect(w * 0.1, hh / 2 - 3, w * 0.8, 5);
    g.fillStyle = 'rgba(255,250,235,0.9)'; g.fillRect(w * 0.1, hh / 2 + 2, w * 0.8, 2);
    // pips (sunken)
    const drawHalf = (n, y0) => {
      for (const [pu, pv] of PIP_LAYOUT[n] || []) {
        const x = w * (0.1 + pu * 0.8), y = y0 + (hh / 2) * (0.08 + pv * 0.84), r = w * (opts.pipR || 0.085);
        g.fillStyle = 'rgba(255,250,235,0.9)'; g.beginPath(); g.arc(x + 1.5, y + 2, r * 1.05, 0, Math.PI * 2); g.fill();
        const pg = g.createRadialGradient(x - r * 0.3, y - r * 0.35, r * 0.1, x, y, r);
        pg.addColorStop(0, opts.pipColor || '#2a221a'); pg.addColorStop(1, '#0f0c09');
        g.fillStyle = pg; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
      }
    };
    drawHalf(opts.pips[0], 0); drawHalf(opts.pips[1], hh / 2);
    for (const s of opts.marks?.scratches || []) drawScratch(g, s, w, hh);
    for (const m of opts.marks?.smudges || []) {
      const sg = g.createRadialGradient(m.u * w, m.v * hh, 1, m.u * w, m.v * hh, m.r * w);
      sg.addColorStop(0, m.color); sg.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = sg; g.fillRect(0, 0, w, hh);
    }
    for (const ch of opts.marks?.chips || []) drawChip(g, ch, w, hh, rng);
    t.needsUpdate = true;
  };
  draw(); t.userData.draw = draw;
  return t;
}

// Narrow side (the one facing the camera): identity band + scratches.
export function dominoSide(opts) {
  const w = opts.big ? 128 : 48, h = opts.big ? 1024 : 384;
  const c = canvas(w, h); const t = tex(c);
  const draw = () => {
    const rng = makeRng((opts.seed || 3) + 11); const g = c.getContext('2d');
    ivoryBase(g, w, h, rng, opts.tint || 0);
    if (opts.band) {
      const [v0, v1] = opts.bandV || [0.14, 0.24];
      g.fillStyle = opts.band; g.fillRect(0, v0 * h, w, (v1 - v0) * h);
      for (let i = 0; i < 40; i++) { g.fillStyle = `rgba(255,240,220,${rng() * 0.25})`; g.fillRect(rng() * w, v0 * h + rng() * (v1 - v0) * h, 2, 1 + rng() * 3); }
    }
    for (const s of opts.marks?.sideScratches || []) drawScratch(g, s, w, h);
    for (const ch of opts.marks?.sideChips || []) drawChip(g, ch, w, h, rng);
    t.needsUpdate = true;
  };
  draw(); t.userData = { draw };
  return t;
}

export function plainIvory(seed = 5, w = 128, h = 256) {
  const c = canvas(w, h); ivoryBase(c.getContext('2d'), w, h, makeRng(seed)); return tex(c);
}

// Tileable noisy material (stone, grass, earth...)
export function noiseTex({ base, spots, size = 256, seed = 1, cracks = 0, streaks = 0 }) {
  const c = canvas(size, size), g = c.getContext('2d'), rng = makeRng(seed);
  g.fillStyle = base; g.fillRect(0, 0, size, size);
  const wrapDraw = (fn) => { for (const ox of [-size, 0, size]) for (const oy of [-size, 0, size]) { g.save(); g.translate(ox, oy); fn(); g.restore(); } };
  for (const sp of spots) {
    for (let i = 0; i < sp.n; i++) {
      const x = rng() * size, y = rng() * size, r = sp.r[0] + rng() * (sp.r[1] - sp.r[0]);
      wrapDraw(() => { const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, sp.c); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); });
    }
  }
  for (let i = 0; i < streaks; i++) {
    const y = rng() * size; g.fillStyle = `rgba(60,45,30,${0.05 + rng() * 0.07})`; g.fillRect(0, y, size, 1 + rng() * 2);
  }
  for (let i = 0; i < cracks; i++) {
    let x = rng() * size, y = rng() * size; g.strokeStyle = 'rgba(50,38,28,0.35)'; g.lineWidth = 1 + rng();
    g.beginPath(); g.moveTo(x, y);
    for (let k = 0; k < 6; k++) { x += (rng() - 0.5) * 30; y += rng() * 20; g.lineTo(x, y); }
    g.stroke();
  }
  return tex(c, true);
}

export function woodTex(seed = 2) {
  const s = 128, c = canvas(s, s), g = c.getContext('2d'), rng = makeRng(seed);
  g.fillStyle = '#8a5a34'; g.fillRect(0, 0, s, s);
  for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(${rng() < 0.5 ? '60,35,18' : '170,120,70'},${0.15 + rng() * 0.2})`; g.fillRect(0, rng() * s, s, 1 + rng() * 2); }
  for (let y = 0; y < s; y += 32) { g.fillStyle = 'rgba(40,24,12,0.55)'; g.fillRect(0, y, s, 2); }
  return tex(c, true);
}

export function slateTex(seed = 4) {
  const s = 256, c = canvas(s, s), g = c.getContext('2d'), rng = makeRng(seed);
  g.fillStyle = '#3f4247'; g.fillRect(0, 0, s, s);
  // concentric rings of pavers: reads as a round plaza (and, from far away, as a pip)
  const cx = s / 2, cy = s / 2;
  for (let r = 16; r < s / 2; r += 18) {
    g.strokeStyle = 'rgba(20,22,26,0.7)'; g.lineWidth = 2; g.beginPath(); g.arc(cx, cy, r, 0, 7); g.stroke();
    const n = Math.floor(r / 5);
    for (let k = 0; k < n; k++) { const a = (k / n) * Math.PI * 2 + r; g.beginPath(); g.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); g.lineTo(cx + Math.cos(a) * (r + 18), cy + Math.sin(a) * (r + 18)); g.stroke(); }
  }
  for (let i = 0; i < 500; i++) { g.fillStyle = `rgba(${rng() < 0.5 ? '90,95,100' : '25,27,30'},${rng() * 0.3})`; g.fillRect(rng() * s, rng() * s, 2, 2); }
  return tex(c);
}

export function skyTex() {
  const c = canvas(4, 512), g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 512);
  gr.addColorStop(0, '#6f9ec1'); gr.addColorStop(0.38, '#a7c3d0'); gr.addColorStop(0.62, '#e4dccb');
  gr.addColorStop(1, '#e4dccb');
  g.fillStyle = gr; g.fillRect(0, 0, 4, 512);
  const t = tex(c); return t;
}

export function softDot(color = '255,255,255') {
  const c = canvas(64, 64), g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, `rgba(${color},0.9)`); gr.addColorStop(0.5, `rgba(${color},0.35)`); gr.addColorStop(1, `rgba(${color},0)`);
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return tex(c);
}
