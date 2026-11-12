// Shared look of the cloth picture-book world.
//
// Materials (one job each):
//   felt / quilt — the ground and living things (hills, trees, residents, birds)
//   wood         — the toy houses (painted, bevelled, rigid)
//   rubber       — balloons: the ONLY glossy, saturated things, the only things that lift
//   cotton       — anything in the air: clouds, chimney smoke, lint
//   water        — only in the washtub
// Light: sun at the upper left. Shadows are tinted, never black.
// Banned: sparkles, stars, confetti, glow, bokeh, vignettes, hearts, rainbows, UI panels.

export const PAL = {
  skyTop: '#a9d8ee',
  skyLow: '#eef3ea',
  skyHigh: '#7fb7d6',
  duskLow: '#f3b487',
  duskTop: '#6f6aa0',
  sun: '#fff3d2',
  cloud: '#fffdf8',
  cloudShade: '#dce2e8',
  hillFar: '#cfe0b8',
  hillMid: '#bfd6a3',
  hillNear: '#a9c98f',
  quiltTop: '#b3cf93',
  quiltFront: '#93b878',
  quiltLower: '#86ad73',
  seam: '#6f9a5e',
  dent: '#587f4c',
  stitch: '#f4ecd6',
  treeCrown: '#79a865',
  trunk: '#9a7152',
  wall: '#f1ddb5',
  roof: '#c4623f',
  ochre: '#d9a441',
  teal: '#4e958f',
  door: '#56708f',
  wood: '#d8b383',
  grain: '#b48a5b',
  stone: '#bbae9e',
  stone2: '#a07a68',
  speck: '#857667',
  water: '#86c6d6',
  waterLine: '#e4f5f8',
  tin: '#a9b4ba',
  shadow: '#2f4030',
  thread: '#5b4636',
  threadHi: '#a88b73',
  ink: '#3a2c24',
};

// Colour helpers (cached so the frame loop does not allocate strings).
const alphaCache = new Map();
export function withAlpha(hex, a) {
  const q = Math.round(a * 100) / 100;
  const key = hex + q;
  let v = alphaCache.get(key);
  if (v) return v;
  const h = hex.replace('#', '');
  const n = parseInt(h, 16);
  v = `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${q})`;
  alphaCache.set(key, v);
  return v;
}

export function mix(a, b, t) {
  const A = parseInt(a.slice(1), 16), B = parseInt(b.slice(1), 16);
  const r = Math.round(((A >> 16) & 255) * (1 - t) + ((B >> 16) & 255) * t);
  const g = Math.round(((A >> 8) & 255) * (1 - t) + ((B >> 8) & 255) * t);
  const bl = Math.round((A & 255) * (1 - t) + (B & 255) * t);
  return '#' + ((1 << 24) | (r << 16) | (g << 8) | bl).toString(16).slice(1);
}

export function shade(hex, amt) {
  return amt >= 0 ? mix(hex, '#ffffff', amt) : mix(hex, '#2a1c14', -amt);
}

// Felt texture tile: fibres + soft blotches, used as a repeating pattern.
const feltCache = new Map();
export function feltTile(base, size = 256, seed = 1) {
  const key = base + size + seed;
  if (feltCache.has(key)) return feltCache.get(key);
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const x = c.getContext('2d');
  x.fillStyle = base;
  x.fillRect(0, 0, size, size);
  let s = seed * 7919 + 17;
  const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 30; i++) {
    x.fillStyle = r() < 0.5 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)';
    x.beginPath();
    x.arc(r() * size, r() * size, 10 + r() * 40, 0, Math.PI * 2);
    x.fill();
  }
  x.lineWidth = 0.7;
  x.lineCap = 'round';
  for (let i = 0; i < 2600; i++) {
    const px = r() * size, py = r() * size, a = r() * Math.PI * 2, l = 2 + r() * 3.5;
    x.strokeStyle = r() < 0.5 ? 'rgba(255,255,255,0.22)' : 'rgba(40,30,20,0.16)';
    x.beginPath();
    x.moveTo(px, py);
    x.lineTo(px + Math.cos(a) * l, py + Math.sin(a) * l);
    x.stroke();
    // wrap fibres across the tile edge so the pattern is seamless
    if (px < 6 || py < 6) {
      x.beginPath();
      x.moveTo(px + size, py + size);
      x.lineTo(px + size + Math.cos(a) * l, py + size + Math.sin(a) * l);
      x.stroke();
    }
  }
  feltCache.set(key, c);
  return c;
}

const patternCache = new Map();
export function feltPattern(ctx, base, seed = 1) {
  const key = base + seed;
  let p = patternCache.get(key);
  if (!p) {
    p = ctx.createPattern(feltTile(base, 256, seed), 'repeat');
    patternCache.set(key, p);
  }
  return p;
}

// Soft elliptical shadow from one cached radial-gradient sprite.
let blob = null;
function blobSprite() {
  if (blob) return blob;
  blob = document.createElement('canvas');
  blob.width = blob.height = 128;
  const x = blob.getContext('2d');
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(47,64,48,1)');
  g.addColorStop(0.45, 'rgba(47,64,48,0.75)');
  g.addColorStop(1, 'rgba(47,64,48,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 128, 128);
  return blob;
}
export function softShadow(ctx, x, y, rx, ry, alpha) {
  if (alpha <= 0.004 || rx <= 0.5 || ry <= 0.2) return;
  const a = ctx.globalAlpha;
  ctx.globalAlpha = a * Math.min(1, alpha);
  ctx.drawImage(blobSprite(), x - rx, y - ry, rx * 2, ry * 2);
  ctx.globalAlpha = a;
}

// Running stitch along the current path (three passes: groove, shadow, thread).
export function stitchPath(ctx, px, color = PAL.stitch, groove = PAL.seam) {
  ctx.save();
  ctx.lineCap = 'round';
  ctx.strokeStyle = withAlpha(groove, 0.35);
  ctx.lineWidth = 3.2 * px;
  ctx.setLineDash([]);
  ctx.stroke();
  ctx.setLineDash([6 * px, 5 * px]);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.6 * px;
  ctx.stroke();
  ctx.restore();
}

// Rounded rectangle path.
export function rrect(ctx, x, y, w, h, r) {
  r = Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2);
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
}

// Polygon path with softly rounded corners.
export function roundPoly(ctx, pts, r) {
  const n = pts.length;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n];
    const d1 = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]) || 1;
    const d2 = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) || 1;
    const rr = Math.min(r, d1 / 2, d2 / 2);
    const ax = p1[0] + ((p0[0] - p1[0]) / d1) * rr, ay = p1[1] + ((p0[1] - p1[1]) / d1) * rr;
    const bx = p1[0] + ((p2[0] - p1[0]) / d2) * rr, by = p1[1] + ((p2[1] - p1[1]) / d2) * rr;
    if (i === 0) ctx.moveTo(ax, ay); else ctx.lineTo(ax, ay);
    ctx.quadraticCurveTo(p1[0], p1[1], bx, by);
  }
  ctx.closePath();
}

// Deterministic PRNG for art (fixed-seed irregularity).
export function seeded(seed) {
  let s = (seed * 7919 + 104729) % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646;
}
