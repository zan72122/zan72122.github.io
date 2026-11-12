import { PAL, withAlpha, mix, shade, seeded } from './style.js';
import { drawMini } from './house-art.js';
import { clamp, easeInOut } from '../util.js';
import { quiltBackScreenY } from './land.js';

// ---------------------------------------------------------------------------
// The sky: a dyed cotton backdrop whose colour tells the altitude (pale near
// the quilt, deeper blue high up), a felt appliqué sun at the upper left (the
// light for every shadow), cotton-wool clouds, the far sky where floated
// houses keep drifting, and the evening + cloth page-turn at the end of a lap.
// ---------------------------------------------------------------------------

// Evening by altitude: apricot low, pale gold, a clear pale blue, then a
// deep evening blue overhead (never purple-pink).
const DUSK = [[0, '#f2b27c'], [0.2, '#f5cf98'], [0.46, '#b2c3d6'], [0.75, '#6f89b4'], [1, '#4b639a']];
function duskAt(u) {
  for (let i = 1; i < DUSK.length; i++) {
    if (u <= DUSK[i][0]) {
      const [a, ca] = DUSK[i - 1], [b, cb] = DUSK[i];
      return mix(ca, cb, (u - a) / (b - a));
    }
  }
  return DUSK[DUSK.length - 1][1];
}

function skyColorAt(y, dusk) {
  // altitude -> colour
  const t = clamp(y / 1300, 0, 1);
  const t2 = clamp((y - 1300) / 2500, 0, 1);
  let c = mix(PAL.skyLow, PAL.skyTop, Math.pow(t, 0.8));
  c = mix(c, PAL.skyHigh, t2);
  if (dusk > 0) {
    c = mix(c, duskAt(clamp(y / 1900, 0, 1)), dusk);
  }
  return c;
}

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.ceil(w));
  c.height = Math.max(1, Math.ceil(h));
  return c;
}

export function drawSky(R) {
  const { ctx, W, H, cam, world } = R;
  const g = ctx.createLinearGradient(0, 0, 0, H);
  const yTop = cam.top, yBot = cam.bottom;
  for (let i = 0; i <= 4; i++) {
    const f = i / 4;
    g.addColorStop(f, skyColorAt(yTop + (yBot - yTop) * f, world.dusk));
  }
  ctx.fillStyle = g;
  // the quilt covers everything below its far edge
  ctx.fillRect(0, 0, W, clamp(Math.ceil(quiltBackScreenY(R)) + 2, 0, H));
  drawSun(R);
}

// Colour-free felt fibres (transparent tile), laid over any felt colour.
let fibreOverlay = null;
function feltFibres() {
  if (fibreOverlay) return fibreOverlay;
  const N = 128;
  fibreOverlay = makeCanvas(N, N);
  const x = fibreOverlay.getContext('2d');
  const r = seeded(23);
  x.lineCap = 'round';
  for (let i = 0; i < 700; i++) {
    const px = r() * N, py = r() * N, a = r() * Math.PI * 2, l = 1.5 + r() * 3;
    x.strokeStyle = r() < 0.5 ? 'rgba(255,255,255,0.35)' : 'rgba(90,60,20,0.18)';
    x.lineWidth = 0.7;
    for (const ox of [-N, 0, N]) for (const oy of [-N, 0, N]) {
      if (ox && (px > 6 && px < N - 6)) continue;
      if (oy && (py > 6 && py < N - 6)) continue;
      x.beginPath(); x.moveTo(px + ox, py + oy); x.lineTo(px + ox + Math.cos(a) * l, py + oy + Math.sin(a) * l); x.stroke();
    }
  }
  return fibreOverlay;
}

// ---------------------------------------------------------------- the sun
// Two layers of felt: a warm back piece cut with a wavy edge (it reads as
// rays without drawing any), and a pale disc sewn on top, slightly up-left.
// It sits below the row of far keepsakes, and sinks behind the hills at dusk.
const sunCache = { key: '', c: null };
function sunSprite(r, dpr, dq) {
  const key = r + ':' + dpr + ':' + dq;
  if (sunCache.key === key) return sunCache.c;
  if (sunCache.c) sunCache.c.width = sunCache.c.height = 0;
  const pad = r * 1.35;
  const c = makeCanvas(pad * 2 * dpr, pad * 2 * dpr);
  const x = c.getContext('2d');
  x.scale(dpr, dpr);
  x.translate(pad, pad);
  const back = mix('#fbd77a', '#ee9a55', dq);
  const front = mix('#fff4d4', '#ffcf94', dq);
  // back piece, wavy edge
  const waves = 11;
  x.beginPath();
  for (let i = 0; i <= 120; i++) {
    const a = (i / 120) * Math.PI * 2;
    const rr = r * (1.21 + 0.075 * Math.cos(a * waves));
    const px = Math.cos(a) * rr, py = Math.sin(a) * rr;
    if (i === 0) x.moveTo(px, py); else x.lineTo(px, py);
  }
  x.closePath();
  x.fillStyle = back;
  x.fill();
  x.save();
  x.clip();
  x.globalAlpha = 0.45;
  x.fillStyle = x.createPattern(feltFibres(), 'repeat');
  x.fillRect(-pad, -pad, pad * 2, pad * 2);
  x.restore();
  // the front disc's felt thickness casts a little shade on the back piece
  x.fillStyle = withAlpha('#b5813b', 0.22);
  x.beginPath(); x.arc(r * 0.05, r * 0.07, r * 0.9, 0, Math.PI * 2); x.fill();
  x.beginPath(); x.arc(-r * 0.03, -r * 0.03, r * 0.88, 0, Math.PI * 2);
  x.fillStyle = front;
  x.fill();
  x.save();
  x.clip();
  x.globalAlpha = 0.4;
  x.fillStyle = x.createPattern(feltFibres(), 'repeat');
  x.fillRect(-pad, -pad, pad * 2, pad * 2);
  x.globalAlpha = 1;
  // stuffed: a touch lighter up-left, a touch deeper down-right
  const g = x.createRadialGradient(-r * 0.35, -r * 0.4, r * 0.1, 0, 0, r * 0.95);
  g.addColorStop(0, 'rgba(255,255,255,0.35)');
  g.addColorStop(0.6, 'rgba(255,255,255,0)');
  g.addColorStop(1, withAlpha('#c98f45', 0.18));
  x.fillStyle = g;
  x.fillRect(-pad, -pad, pad * 2, pad * 2);
  x.restore();
  sunCache.key = key;
  sunCache.c = c;
  return c;
}

export function sunPosition(R) {
  const { W, H, world } = R;
  const land = W > H;
  const s = Math.min(W, H);
  const safe = world.safe || { top: 0, left: 0 };
  const r = Math.round(s * (land ? 0.062 : 0.07));
  // under the far keepsake row (see World.slotFor), still up and to the left
  const rowBottom = safe.top + s * (land ? 0.13 : 0.17);
  const x = safe.left + s * (land ? 0.11 : 0.17);
  const y = rowBottom + r * 1.45 + world.dusk * H * 0.36;
  return { x, y, r };
}

function drawSun(R) {
  const { ctx, dpr, world } = R;
  const { x, y, r } = sunPosition(R);
  const dq = Math.round(world.dusk * 10) / 10;
  const img = sunSprite(r, dpr, dq);
  const w = img.width / dpr;
  ctx.drawImage(img, x - w / 2, y - w / 2, w, w);
}

// ---------------------------------------------------------------- clouds
// Cotton-wool clouds: a pile of fluffed cotton balls with a fibrous fringe,
// cool in their shade. At dusk a warm-lit copy is laid over the day one.
const cloudCache = new Map();
function cloudSprite(seed, dpr, dusk) {
  const key = seed + '@' + dpr + (dusk ? 'd' : '');
  if (cloudCache.has(key)) return cloudCache.get(key);
  const w = 320, h = 150;
  const c = makeCanvas(w * dpr, h * dpr);
  const x = c.getContext('2d');
  x.scale(dpr, dpr);
  const rnd = seeded(seed);
  const puffs = [];
  const n = 8 + Math.floor(rnd() * 4);
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const px = 42 + t * 236 + (rnd() - 0.5) * 22;
    const pr = 24 + Math.sin(t * Math.PI) * 30 + rnd() * 12;
    const py = 106 - Math.sin(t * Math.PI) * 26 - rnd() * 12;
    puffs.push([px, py, pr]);
  }
  // a few small tufts on top
  for (let i = 0; i < 3; i++) {
    const t = 0.25 + rnd() * 0.5;
    puffs.push([42 + t * 236, 72 - Math.sin(t * Math.PI) * 26 - rnd() * 8, 14 + rnd() * 10]);
  }
  const lit = dusk ? '#ffe7c7' : PAL.cloud;
  const shadeTop = dusk ? 'rgba(242,190,150,0)' : 'rgba(214,222,232,0)';
  const shadeBot = dusk ? 'rgba(150,152,172,0.95)' : 'rgba(198,208,222,0.95)';
  const outline = () => {
    x.beginPath();
    for (const [px, py, pr] of puffs) { x.moveTo(px + pr, py); x.arc(px, py, pr, 0, Math.PI * 2); }
    x.rect(42, 98, 236, 26);
  };
  // fibre fringe (cotton wool is never a clean edge)
  x.strokeStyle = dusk ? 'rgba(255,231,199,0.5)' : 'rgba(255,253,248,0.55)';
  x.lineWidth = 0.8;
  for (const [px, py, pr] of puffs) {
    for (let k = 0; k < 34; k++) {
      const a = rnd() * Math.PI * 2;
      const r0 = pr - 2, r1 = pr + 2 + rnd() * 5;
      x.beginPath();
      x.moveTo(px + Math.cos(a) * r0, py + Math.sin(a) * r0);
      x.lineTo(px + Math.cos(a + 0.12) * r1, py + Math.sin(a + 0.12) * r1);
      x.stroke();
    }
  }
  outline();
  x.fillStyle = lit;
  x.fill();
  x.save();
  outline();
  x.clip();
  // each ball is a little rounder: lit up-left
  for (const [px, py, pr] of puffs) {
    const g = x.createRadialGradient(px - pr * 0.35, py - pr * 0.4, pr * 0.1, px, py, pr);
    g.addColorStop(0, 'rgba(255,255,255,0.5)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g;
    x.beginPath(); x.arc(px, py, pr, 0, Math.PI * 2); x.fill();
  }
  const g = x.createLinearGradient(0, 62, 0, 128);
  g.addColorStop(0, shadeTop);
  g.addColorStop(1, shadeBot);
  x.fillStyle = g;
  x.fillRect(0, 0, w, h);
  x.globalAlpha = 0.35;
  x.fillStyle = x.createPattern(fibreTile(), 'repeat');
  x.fillRect(0, 0, w, h);
  x.restore();
  cloudCache.set(key, c);
  return c;
}
let tile = null;
function fibreTile() {
  if (tile) return tile;
  tile = makeCanvas(64, 64);
  const x = tile.getContext('2d');
  const rnd = seeded(99);
  x.strokeStyle = 'rgba(150,160,170,0.35)';
  x.lineWidth = 0.6;
  for (let i = 0; i < 200; i++) {
    const a = rnd() * 6.28, px = rnd() * 64, py = rnd() * 64;
    x.beginPath(); x.moveTo(px, py); x.lineTo(px + Math.cos(a) * 3, py + Math.sin(a) * 3); x.stroke();
  }
  return tile;
}

export function drawClouds(R) {
  const { ctx, world, dpr, W, H } = R;
  const dusk = world.dusk;
  for (const c of world.clouds) {
    const q = world.cloudScreen(c);
    const puff = c.puff;
    const sq = 1 + Math.sin(puff * Math.PI * 3) * puff * 0.08;
    const w = 320 * q.s * sq, h = (150 * q.s) / sq;
    const x0 = q.x - w / 2, y0 = q.y - h * 0.72;
    if (x0 > W || x0 + w < 0 || y0 > H || y0 + h < 0) continue;
    ctx.globalAlpha = 0.96 - dusk * 0.1;
    ctx.drawImage(cloudSprite(c.seed, dpr, false), x0, y0, w, h);
    if (dusk > 0.01) {
      ctx.globalAlpha = dusk * 0.9;
      ctx.drawImage(cloudSprite(c.seed, dpr, true), x0, y0, w, h);
    }
    ctx.globalAlpha = 1;
  }
}

// ---------------------------------------------------------------- far sky
// Floated houses keep drifting in the far sky (upper left, see World.slotFor).
// At the end of a lap they drift in around the last house — still far behind
// it, so they are drawn here, behind the clouds, the hills and the house.
export function drawKeepsakes(R) {
  const { ctx, world } = R;
  if (world.finale) { drawFlotillaBehind(R); return; }
  const sky = skyColorAt(900, world.dusk);
  for (const k of world.keepsakes) {
    const s = world.slotFor(k.slot);
    const bob = Math.sin(R.t * 0.8 + k.slot * 1.9) * 4;
    drawMini(ctx, k, s.x, s.y + bob, s.scale, { haze: 0.38 + world.dusk * 0.2, t: R.t, sky });
  }
}

// Where the flotilla gathers around the last house. Landscape: offsets from
// the house (fractions of W, H). Portrait: along both edges (x as a fraction
// of W), beside the house and its balloons rather than behind them.
const RING_LAND = [[-0.3, 0.02], [-0.2, -0.28], [0.21, -0.31], [0.31, -0.03], [-0.38, -0.2], [0.4, -0.2]];
const RING_PORTRAIT = [[0.13, 0.03], [0.87, -0.07], [0.15, -0.21], [0.85, -0.3], [0.13, -0.4], [0.87, -0.5]];

function drawFlotillaBehind(R) {
  const { ctx, world, W, H, cam } = R;
  const f = world.finale;
  const e = f.ent;
  const cx = cam.sx(e.body.x), cy = cam.sy(e.body.y);
  const k = easeInOut(clamp((f.t - 0.5) / 3.5, 0, 1));
  const land = W > H;
  const ring = land ? RING_LAND : RING_PORTRAIT;
  const sky = skyColorAt(900, world.dusk);
  world.keepsakes.forEach((ks, i) => {
    const slot = world.slotFor(ks.slot);
    const [fx, fy] = ring[i % ring.length];
    const tx = land ? clamp(cx + fx * W, W * 0.08, W * 0.92) : fx * W;
    const ty = clamp(cy + fy * H, H * 0.15, H * 0.62);
    const x = slot.x + (tx - slot.x) * k, y = slot.y + (ty - slot.y) * k;
    const sc = slot.scale + (cam.zoom * (land ? 0.3 : 0.25) - slot.scale) * k;
    const bob = Math.sin(R.t * 0.9 + i * 1.7) * 5;
    drawMini(ctx, ks, x, y + bob, sc, { haze: 0.38 * (1 - k) + 0.12 + world.dusk * 0.1, t: R.t, sky, wave: k > 0.9, glow: world.dusk });
  });
}

// Kept for the renderer's call order; the flotilla is drawn behind the scene.
export function drawFlotilla(R) { void R; }

// ---------------------------------------------------------------- page turn
// The next lap is the next page of a cloth book: a linen leaf, hemmed with a
// running stitch, sweeps across from the right edge, curling at its leading
// edge and casting a soft shadow on the page underneath.
let linen = null;
function linenTile() {
  if (linen) return linen;
  const N = 96;
  linen = makeCanvas(N, N);
  const x = linen.getContext('2d');
  x.fillStyle = '#f2e8d2';
  x.fillRect(0, 0, N, N);
  const rnd = seeded(77);
  // woven threads, slightly uneven
  for (let i = 0; i < N; i += 2) {
    x.fillStyle = `rgba(150,120,80,${0.03 + rnd() * 0.04})`;
    x.fillRect(0, i, N, 1);
    x.fillStyle = `rgba(255,255,255,${0.04 + rnd() * 0.05})`;
    x.fillRect(i, 0, 1, N);
  }
  for (let i = 0; i < 60; i++) {
    x.fillStyle = 'rgba(140,110,70,0.08)';
    x.fillRect(rnd() * N, rnd() * N, 2 + rnd() * 6, 1);
  }
  return linen;
}
let linenPat = null;

export function drawPageTurn(R) {
  const { ctx, W, H, world } = R;
  const pg = world.page;
  const u = clamp(pg.t / pg.dur, 0, 1);
  // 0..0.5: the leaf sweeps in from the right; 0.5..1: on out to the left
  const lead = u < 0.5 ? W * (1 - easeInOut(u * 2)) : -W * easeInOut((u - 0.5) * 2);
  const curl = Math.sin(u * Math.PI) * Math.min(W, H) * 0.09;
  const x = lead;
  ctx.save();
  // shadow on the page underneath, just ahead of the leaf's edge
  const sw = 26 + curl * 0.6;
  const sg = ctx.createLinearGradient(x - sw, 0, x, 0);
  sg.addColorStop(0, withAlpha(PAL.shadow, 0));
  sg.addColorStop(1, withAlpha(PAL.shadow, 0.3));
  ctx.fillStyle = sg;
  ctx.beginPath();
  ctx.moveTo(x - sw, 0);
  ctx.quadraticCurveTo(x - curl - sw, H / 2, x - sw, H);
  ctx.lineTo(x, H);
  ctx.quadraticCurveTo(x - curl, H / 2, x, 0);
  ctx.closePath();
  ctx.fill();
  // the leaf
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.quadraticCurveTo(x - curl, H / 2, x, H);
  ctx.lineTo(x + W + 60, H);
  ctx.lineTo(x + W + 60, 0);
  ctx.closePath();
  if (!linenPat) linenPat = ctx.createPattern(linenTile(), 'repeat');
  ctx.fillStyle = linenPat;
  ctx.fill();
  // the rolled leading edge: a curl of cloth catching the light
  const cg = ctx.createLinearGradient(x - curl * 0.5, 0, x + 34, 0);
  cg.addColorStop(0, 'rgba(255,255,255,0.55)');
  cg.addColorStop(0.35, 'rgba(255,255,255,0.12)');
  cg.addColorStop(1, withAlpha('#8f7650', 0));
  ctx.fillStyle = cg;
  ctx.beginPath();
  ctx.moveTo(x, 0);
  ctx.quadraticCurveTo(x - curl, H / 2, x, H);
  ctx.lineTo(x + 34, H);
  ctx.quadraticCurveTo(x + 34 - curl * 0.8, H / 2, x + 34, 0);
  ctx.closePath();
  ctx.fill();
  // hem: a turned edge and a running stitch along it
  ctx.strokeStyle = withAlpha('#b99a6c', 0.5);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 8, 0);
  ctx.quadraticCurveTo(x + 8 - curl, H / 2, x + 8, H);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x + 22, 14);
  ctx.quadraticCurveTo(x + 22 - curl, H / 2, x + 22, H - 14);
  ctx.lineCap = 'round';
  ctx.setLineDash([8, 7]);
  ctx.strokeStyle = shade('#c49a63', -0.1);
  ctx.lineWidth = 2.2;
  ctx.stroke();
  ctx.setLineDash([]);
  // soft folds in the cloth
  ctx.fillStyle = withAlpha('#8f7650', 0.035);
  for (let i = 0; i < 3; i++) {
    const fx = x + W * (0.25 + i * 0.28);
    ctx.beginPath();
    ctx.moveTo(fx, 0);
    ctx.quadraticCurveTo(fx - curl * 0.6 + 20, H / 2, fx + 10, H);
    ctx.lineTo(fx + 40, H);
    ctx.quadraticCurveTo(fx - curl * 0.6 + 44, H / 2, fx + 26, 0);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}
