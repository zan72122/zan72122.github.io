import { PAL, withAlpha, mix, shade, roundPoly, rrect, seeded, feltPattern } from './style.js';
import { clamp, lerp, easeInOut, smoothstep } from '../util.js';
import { drawStringsFor, drawBalloonsFor, drawButtons, drawBalloonSprite } from './balloon-art.js';

// ---------------------------------------------------------------------------
// Painted wooden toy houses and their felt finger-puppet residents.
//
// A house is a stack of small painted wooden blocks: flat matte paint, a
// chamfer on every edge (lit from the sun at the upper left), a few worn
// corners where the paint has chipped back to bare beech, and grain ONLY on
// bare wood (window frames, sills, base boards, caps, the stone house door).
//
// The rigid wooden body is rendered once into an offscreen sprite (cached per
// house, paint and pixel scale) with its windows cut out as real holes. Every
// frame the room behind the windows is drawn first — the resident, the
// giraffe's neck, the long dog — and the sprite goes on top, so the wall
// itself hides whatever is between the windows. Then the few moving things on
// the outside: flags in the wind and the boat's wet hull.
//
// All drawing here is in the house's DESIGN coordinates (origin at the base
// centre, y UP) unless noted.
// ---------------------------------------------------------------------------

const TAU = Math.PI * 2;
const LX = -0.55, LY = 0.835;       // unit vector towards the sun (upper left), y up
const WOOD = '#e3c496';             // bare beech
const WOOD_GRAIN = '#a97f52';
const WORN = '#e8d0a8';             // where the paint has chipped off
const DARK = '#2a1c14';
const ROOM = '#4c3b33';             // inside the house by day
const LAMP = '#f6c46b';             // inside the house at dusk
const INK = PAL.ink;
const DASH = [2.2, 1.8];
const NODASH = [];

// Paint sets per lap (variant). House paints avoid the balloon colours and
// stay matte and a little dusty so that the rubber is the only saturated thing.
const PAINTS = [
  { wall: '#f1ddb5', roof: '#c4623f', trim: '#d9a441', door: '#56708f', accent: '#4e958f', slate: '#6d7b88' },
  { wall: '#e8e4d6', roof: '#56708f', trim: '#c4623f', door: '#4e958f', accent: '#d9a441', slate: '#86685a' },
  { wall: '#f2d9c3', roof: '#4e958f', trim: '#56708f', door: '#c4623f', accent: '#d9a441', slate: '#5d7474' },
];
export function paintFor(variant) { return PAINTS[((variant % PAINTS.length) + PAINTS.length) % PAINTS.length]; }

// Felt for the finger puppets and birds.
const FELT = {
  chick: { body: '#f4cd4f', rim: '#d6a633', beak: '#ec8a2c', wing: '#eab93a' },
  duck: { body: '#fbf6ea', rim: '#d9d0bd', beak: '#ec8a2c', wing: '#efe7d5' },
  giraffe: { body: '#ecbd55', rim: '#c99433', spot: '#b0733f', muzzle: '#f5e2b9', mane: '#8f5832' },
  dachshund: { body: '#a86f4a', rim: '#83522f', ear: '#74482e', snout: '#bd8a62', nose: '#3a2c24' },
  bear: { body: '#9a6b4c', rim: '#7a5137', muzzle: '#dcba95', ear: '#c79b76' },
};

// ============================================================ geometry helpers
function rectPts(x0, y0, x1, y1) { return [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]; }

function areaOf(pts) {
  let a = 0;
  for (let i = 0, n = pts.length; i < n; i++) {
    const p = pts[i], q = pts[(i + 1) % n];
    a += p[0] * q[1] - q[0] * p[1];
  }
  return a / 2;
}

// Convex polygon shrunk by d (works for either winding).
function insetPoly(pts, d) {
  const n = pts.length, s = areaOf(pts) > 0 ? 1 : -1, out = [];
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n];
    const ax = p1[0] - p0[0], ay = p1[1] - p0[1], la = Math.hypot(ax, ay) || 1;
    const bx = p2[0] - p1[0], by = p2[1] - p1[1], lb = Math.hypot(bx, by) || 1;
    const n1x = (-ay / la) * s, n1y = (ax / la) * s, n2x = (-by / lb) * s, n2y = (bx / lb) * s;
    const k = d / Math.max(0.2, 1 + n1x * n2x + n1y * n2y);
    out.push([p1[0] + (n1x + n2x) * k, p1[1] + (n1y + n2y) * k]);
  }
  return out;
}

// ============================================================ wood & paint
// Chamfer band along every edge of a convex block: each facet is lit by how
// much it faces the sun. (Called inside the block's clip.)
function chamfer(c, pts, d, hi = 0.36, lo = 0.3) {
  const n = pts.length, s = areaOf(pts) > 0 ? 1 : -1;
  const q = insetPoly(pts, d);
  for (let i = 0; i < n; i++) {
    const a = pts[i], b = pts[(i + 1) % n], qa = q[i], qb = q[(i + 1) % n];
    const ex = b[0] - a[0], ey = b[1] - a[1], l = Math.hypot(ex, ey) || 1;
    const nx = (ey / l) * s, ny = (-ex / l) * s;
    const lum = nx * LX + ny * LY;
    c.fillStyle = lum > 0 ? withAlpha('#fff8e8', hi * lum) : withAlpha(DARK, lo * -lum);
    c.beginPath();
    c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.lineTo(qb[0], qb[1]); c.lineTo(qa[0], qa[1]);
    c.closePath();
    c.fill();
  }
}

// Paint chipped back to bare wood on a few exposed corners and edges.
function wear(c, pts, seed, amount = 1) {
  const rnd = seeded(seed);
  let cx = 0, cy = 0;
  for (const p of pts) { cx += p[0]; cy += p[1]; }
  cx /= pts.length; cy /= pts.length;
  c.fillStyle = withAlpha(WORN, 0.8);
  for (let i = 0; i < pts.length; i++) {
    const [x, y] = pts[i];
    if (rnd() > 0.5 * amount) continue;
    const dx = cx - x, dy = cy - y, l = Math.hypot(dx, dy) || 1;
    chip(c, x + (dx / l) * 1.2, y + (dy / l) * 1.2, 1.8 + rnd() * 2.6, rnd);
  }
  // a few small nicks along the longer edges, mostly low down where hands and
  // other toys bump it
  const k = Math.floor((0.6 + rnd() * 2) * amount);
  for (let j = 0; j < k; j++) {
    let i = Math.floor(rnd() * pts.length);
    for (let tries = 0; tries < 4; tries++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      if (Math.hypot(b[0] - a[0], b[1] - a[1]) > 40) break;
      i = (i + 1) % pts.length;
    }
    const a = pts[i], b = pts[(i + 1) % pts.length];
    const lowFirst = a[1] < b[1];
    const u0 = rnd() * rnd() * 0.7 + 0.08;
    const u = lowFirst ? u0 : 1 - u0;
    const x = a[0] + (b[0] - a[0]) * u, y = a[1] + (b[1] - a[1]) * u;
    const dx = cx - x, dy = cy - y, l = Math.hypot(dx, dy) || 1;
    chip(c, x + (dx / l) * 0.9, y + (dy / l) * 0.9, 1.1 + rnd() * 1.2, rnd);
  }
}

function chip(c, x, y, r, rnd) {
  c.beginPath();
  for (let j = 0; j < 7; j++) {
    const a = (j / 7) * TAU + rnd() * 0.5;
    const rr = r * (0.55 + rnd() * 0.6);
    if (j === 0) c.moveTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
    else c.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
  }
  c.closePath();
  c.fill();
}

// Fine grain lines — only ever on bare wood.
function grain(c, x0, y0, x1, y1, seed, vertical = false, a = 0.32) {
  const rnd = seeded(seed);
  c.lineWidth = 0.55;
  c.strokeStyle = withAlpha(WOOD_GRAIN, a);
  c.beginPath();
  if (!vertical) {
    for (let y = y0 + 1 + rnd() * 2; y < y1; y += 1.7 + rnd() * 2.8) {
      const w = (rnd() - 0.5) * 1.6;
      c.moveTo(x0, y);
      c.bezierCurveTo(x0 + (x1 - x0) * 0.33, y + w, x0 + (x1 - x0) * 0.66, y - w, x1, y + w * 0.4);
    }
  } else {
    for (let x = x0 + 1 + rnd() * 2; x < x1; x += 1.7 + rnd() * 2.8) {
      const w = (rnd() - 0.5) * 1.6;
      c.moveTo(x, y0);
      c.bezierCurveTo(x + w, y0 + (y1 - y0) * 0.33, x - w, y0 + (y1 - y0) * 0.66, x + w * 0.4, y1);
    }
  }
  c.stroke();
  // a knot now and then, on pieces big enough to have one
  if (rnd() < 0.5 && x1 - x0 > 14 && y1 - y0 > 14) {
    c.strokeStyle = withAlpha(WOOD_GRAIN, a * 1.3);
    c.beginPath();
    c.ellipse(x0 + (x1 - x0) * (0.2 + rnd() * 0.6), y0 + (y1 - y0) * (0.2 + rnd() * 0.6), vertical ? 0.9 : 2.2, vertical ? 2.2 : 0.9, 0, 0, TAU);
    c.stroke();
  }
}

// A carved groove in painted wood: a shadowed cut with a lit lip below/right.
function groove(c, x0, y0, x1, y1, a = 0.28) {
  const vertical = Math.abs(x1 - x0) < Math.abs(y1 - y0);
  c.lineWidth = 1.2;
  c.strokeStyle = withAlpha(DARK, a);
  c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke();
  c.lineWidth = 0.9;
  c.strokeStyle = withAlpha('#fff8e8', a * 0.9);
  const ox = vertical ? 1 : 0, oy = vertical ? 0 : -1;
  c.beginPath(); c.moveTo(x0 + ox, y0 + oy); c.lineTo(x1 + ox, y1 + oy); c.stroke();
}

// One painted (or bare) wooden block: fill, extra carving, chamfer, wear, edge.
function block(c, pts, color, o = {}) {
  const r = o.r === undefined ? 2.5 : o.r;
  c.save();
  c.beginPath();
  roundPoly(c, pts, r);
  c.fillStyle = color;
  c.fill();
  c.clip();
  if (o.bare) {
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (const [x, y] of pts) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
    grain(c, x0, y0, x1, y1, o.seed || 1, o.vertical);
  }
  if (!o.bare && o.tone !== 0) {
    // the paint catches a touch more light towards the sun
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (const [x, y] of pts) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
    if ((x1 - x0) * (y1 - y0) > 1500) {
      const g = c.createLinearGradient(x0, y1, x1, y0);
      g.addColorStop(0, withAlpha('#fff8e8', 0.09));
      g.addColorStop(0.55, withAlpha('#fff8e8', 0));
      g.addColorStop(1, withAlpha(DARK, 0.08));
      c.fillStyle = g;
      c.fillRect(x0, y0, x1 - x0, y1 - y0);
    }
  }
  if (o.fn) o.fn();
  chamfer(c, pts, o.bevel === undefined ? 3.2 : o.bevel, o.hi, o.lo);
  if (!o.bare && o.wear !== 0) wear(c, pts, (o.seed || 1) * 31 + 7, o.wear === undefined ? 1 : o.wear);
  c.restore();
  c.beginPath();
  roundPoly(c, pts, r);
  c.strokeStyle = withAlpha(DARK, o.edge === undefined ? 0.3 : o.edge);
  c.lineWidth = 0.8;
  c.stroke();
}

function slab(c, x0, y0, x1, y1, seed, color = WOOD) {
  block(c, rectPts(x0, y0, x1, y1), color, { bare: color === WOOD, seed, bevel: Math.min(2.4, (y1 - y0) * 0.3), r: 1.6 });
}

// Soft light/dark rims for rounded shapes (inside a clip): the outline shifted
// towards the lower right shows along the lit upper-left edges, and vice versa.
function emboss(c, addPath, d, hi = 0.4, lo = 0.3) {
  c.lineWidth = d * 2;
  c.save();
  c.translate(d * 0.7, -d * 0.7);
  c.beginPath(); addPath(); c.strokeStyle = withAlpha('#fff8e8', hi); c.stroke();
  c.restore();
  c.save();
  c.translate(-d * 0.7, d * 0.7);
  c.beginPath(); addPath(); c.strokeStyle = withAlpha(DARK, lo); c.stroke();
  c.restore();
}

// Fish-scale shingles carved into a roof block.
function scallops(c, pts, dy = 13, dx = 16) {
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (const [x, y] of pts) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  let row = 0;
  for (let y = y0 + dy * 0.95; y < y1 - dy * 0.4; y += dy, row++) {
    const off = (row % 2) * dx * 0.5;
    c.beginPath();
    for (let x = x0 - dx + off; x < x1 + dx; x += dx) {
      c.moveTo(x, y);
      c.quadraticCurveTo(x + dx / 2, y - dy * 0.8, x + dx, y);
    }
    c.lineWidth = 1.3;
    c.strokeStyle = withAlpha(DARK, 0.26);
    c.stroke();
    c.save();
    c.translate(0.4, -1.1);
    c.lineWidth = 0.9;
    c.strokeStyle = withAlpha('#fff8e8', 0.2);
    c.stroke();
    c.restore();
  }
}

// ============================================================ windows (holes)
function holePath(c, h, g = 0) {
  if (h.shape === 'round') {
    c.moveTo(h.x + h.r + g, h.y);
    c.arc(h.x, h.y, h.r + g, 0, TAU);
  } else if (h.shape === 'arch') {
    const w = h.w / 2 + g, y0 = h.y - h.h / 2 - g, yc = h.y + h.h / 2 + g - w;
    c.moveTo(h.x - w, y0);
    c.lineTo(h.x + w, y0);
    c.lineTo(h.x + w, yc);
    c.arc(h.x, yc, w, 0, Math.PI);
    c.closePath();
  } else {
    rrect(c, h.x - h.w / 2 - g, h.y - h.h / 2 - g, h.w + 2 * g, h.h + 2 * g, (h.rad || 4) + g);
  }
}

// Top of a hole's opening (design y).
function holeTop(h) { return h.shape === 'round' ? h.y + h.r : h.y + h.h / 2; }
function holeBottom(h) { return h.shape === 'round' ? h.y - h.r : h.y - h.h / 2; }
function holeHalfW(h) { return h.shape === 'round' ? h.r : h.w / 2; }

// Cut the window out of the painted wall, shade the wall's thickness inside
// it (the upper-left reveal is in shadow), a faint pane of glass, then the
// bare-wood frame and sill.
function windowHole(c, h, seed) {
  c.save();
  c.globalCompositeOperation = 'destination-out';
  c.beginPath(); holePath(c, h); c.fillStyle = '#000'; c.fill();
  c.restore();
  // reveal shadow: the opening minus itself shifted towards the lower right
  c.save();
  c.beginPath(); holePath(c, h); c.clip();
  c.beginPath();
  holePath(c, h, 2);
  c.save(); c.translate(4.2, -4.2); holePath(c, h, 0); c.restore();
  c.fillStyle = withAlpha('#160e09', 0.42);
  c.fill('evenodd');
  c.beginPath();
  holePath(c, h, 2);
  c.save(); c.translate(8, -8); holePath(c, h, 0); c.restore();
  c.fillStyle = withAlpha('#160e09', 0.16);
  c.fill('evenodd');
  // glass: two soft diagonal sheen strips at the upper left
  const r = holeHalfW(h), top = holeTop(h), bot = holeBottom(h);
  const hh = top - bot;
  c.fillStyle = withAlpha('#ffffff', 0.13);
  c.beginPath();
  c.moveTo(h.x - r * 1.1, bot + hh * 0.52);
  c.lineTo(h.x - r * 0.25, top + 2);
  c.lineTo(h.x + r * 0.05, top + 2);
  c.lineTo(h.x - r * 1.1, bot + hh * 0.2);
  c.closePath();
  c.fill();
  c.fillStyle = withAlpha('#ffffff', 0.08);
  c.beginPath();
  c.moveTo(h.x - r * 1.1, bot + hh * 0.08);
  c.lineTo(h.x + r * 0.2, top + 2);
  c.lineTo(h.x + r * 0.3, top + 2);
  c.lineTo(h.x - r * 1.1, bot - 2);
  c.closePath();
  c.fill();
  c.restore();
  // sill under rectangular and arched windows
  const f = h.frame || 4.5;
  if (h.sill) {
    const w = holeHalfW(h) + f + 3.5;
    slab(c, h.x - w, bot - f - 4.5, h.x + w, bot - f + 1.5, seed + 3);
  }
  // frame: a bare-wood ring around the opening
  c.save();
  c.beginPath();
  holePath(c, h, f);
  holePath(c, h, 0);
  c.clip('evenodd');
  c.fillStyle = WOOD;
  c.fillRect(h.x - r - f - 2, bot - f - 2, (r + f + 2) * 2, hh + f * 2 + 4);
  grain(c, h.x - r - f - 2, bot - f - 2, h.x + r + f + 2, top + f + 2, seed, h.shape !== 'round' && hh > r * 2.2);
  emboss(c, () => { holePath(c, h, f); holePath(c, h, 0); }, 1.4, 0.5, 0.34);
  c.restore();
  c.beginPath();
  holePath(c, h, f);
  c.strokeStyle = withAlpha(DARK, 0.3);
  c.lineWidth = 0.8;
  c.stroke();
}

// A door: bare-wood frame (no sill), painted slab with plank grooves, a knob.
function door(c, d, color, seed, o = {}) {
  const w = d.x1 - d.x0, cx = (d.x0 + d.x1) / 2;
  const sh = { shape: 'arch', x: cx, y: (d.y0 + d.y1) / 2, w, h: d.y1 - d.y0 };
  const f = o.frame || 4;
  c.save();
  c.beginPath(); c.rect(d.x0 - 20, d.y0, w + 40, d.y1 - d.y0 + 20); c.clip();
  c.save();
  c.beginPath(); holePath(c, sh, f); holePath(c, sh, 0); c.clip('evenodd');
  c.fillStyle = WOOD;
  c.fillRect(d.x0 - f - 2, d.y0 - 2, w + f * 2 + 4, d.y1 - d.y0 + f + 4);
  grain(c, d.x0 - f - 2, d.y0, d.x1 + f + 2, d.y1 + f + 2, seed, true);
  emboss(c, () => { holePath(c, sh, f); holePath(c, sh, 0); }, 1.3, 0.5, 0.3);
  c.restore();
  c.beginPath(); holePath(c, sh, f); c.strokeStyle = withAlpha(DARK, 0.3); c.lineWidth = 0.8; c.stroke();
  // slab
  c.beginPath(); holePath(c, sh, 0);
  c.fillStyle = color;
  c.fill();
  c.save();
  c.clip();
  if (o.bare) grain(c, d.x0, d.y0, d.x1, d.y1 + 4, seed + 5, true, 0.4);
  const n = o.planks || 3;
  for (let k = 1; k < n; k++) groove(c, d.x0 + (w * k) / n, d.y0, d.x0 + (w * k) / n, d.y1 + 2, 0.26);
  // it sits a little behind the frame: shadow under the upper-left of the frame
  c.beginPath();
  holePath(c, sh, 2);
  c.save(); c.translate(3.2, -3.2); holePath(c, sh, 0); c.restore();
  c.fillStyle = withAlpha(DARK, 0.28);
  c.fill('evenodd');
  c.restore();
  c.restore();
  // knob: a small turned wooden ball
  const kx = o.knobLeft ? d.x0 + 6 : d.x1 - 6.5, ky = d.y0 + (d.y1 - d.y0) * 0.45;
  c.fillStyle = withAlpha(DARK, 0.25);
  c.beginPath(); c.arc(kx + 1, ky - 1, 3.2, 0, TAU); c.fill();
  c.fillStyle = WOOD;
  c.beginPath(); c.arc(kx, ky, 3.2, 0, TAU); c.fill();
  c.fillStyle = withAlpha('#fff8e8', 0.6);
  c.beginPath(); c.arc(kx - 1, ky + 1, 1.2, 0, TAU); c.fill();
}

// Shadow of the eave on the wall below it, and the cloth darkening the foot of
// the wall (both inside the wall's clip).
function eaveShadow(c, x0, x1, y, depth = 12, a = 0.2) {
  const g = c.createLinearGradient(0, y, 0, y - depth);
  g.addColorStop(0, withAlpha(DARK, a));
  g.addColorStop(1, withAlpha(DARK, 0));
  c.fillStyle = g;
  c.fillRect(x0, y - depth, x1 - x0, depth);
}
function footShade(c, x0, x1, y0, h = 14, a = 0.13) {
  const g = c.createLinearGradient(0, y0, 0, y0 + h);
  g.addColorStop(0, withAlpha(DARK, a));
  g.addColorStop(1, withAlpha(DARK, 0));
  c.fillStyle = g;
  c.fillRect(x0, y0, x1 - x0, h);
}

// ============================================================ layouts
// Where the windows are in the art (the blueprint only knows the resident's
// window for touch; art windows are free as long as they sit on the walls).
const LAYOUTS = {
  cottage: (p) => ({ holes: [{ shape: 'round', x: p.window.x, y: p.window.y, r: 24, frame: 5.5 }], who: 0 }),
  tower: () => ({
    holes: [
      { shape: 'arch', x: 0, y: 97, w: 30, h: 40, frame: 4.5 },
      { shape: 'arch', x: 0, y: 147, w: 30, h: 40, frame: 4.5 },
      { shape: 'arch', x: 0, y: 206, w: 44, h: 46, frame: 5, sill: true },
    ],
    who: 2,
  }),
  boat: (p) => ({ holes: [{ shape: 'round', x: p.window.x, y: 76, r: 22, frame: 4.5 }], who: 0 }),
  long: () => ({
    holes: [-150, -58, 58, 150].map((x) => ({ shape: 'rect', x, y: 51, w: 48, h: 46, rad: 5, frame: 4.5, sill: true })),
    who: 3,
  }),
  stone: (p) => ({ holes: [{ shape: 'rect', x: p.window.x, y: p.window.y, w: 58, h: 50, rad: 3, frame: 4.5 }], who: 0 }),
};
const layoutCache = new Map();
function layoutFor(bp) {
  let L = layoutCache.get(bp.id);
  if (!L) { L = LAYOUTS[bp.id](bp.parts); layoutCache.set(bp.id, L); }
  return L;
}

// ============================================================ the five houses
// --- static (sprite) painting, design coords y up
function paintCottage(c, bp, P, L) {
  const p = bp.parts, w = p.walls, ch = p.chimney;
  block(c, rectPts(ch.x0, ch.y0, ch.x1, ch.y1 - 5), shade(P.roof, -0.12), { seed: 11 });
  slab(c, ch.x0 - 3.5, ch.y1 - 7, ch.x1 + 3.5, ch.y1 + 0.5, 12);
  block(c, rectPts(w.x0, 5, w.x1, w.y1), P.wall, {
    seed: 3, bevel: 3.6,
    fn: () => { eaveShadow(c, w.x0, w.x1, w.y1 - 3, 13, 0.22); footShade(c, w.x0, w.x1, 5); },
  });
  slab(c, w.x0 - 4, 0, w.x1 + 4, 7, 5);
  windowHole(c, L.holes[0], 21);
  door(c, p.door, P.door, 8);
  block(c, p.roof, P.roof, { seed: 7, r: 5, bevel: 4.2, fn: () => scallops(c, p.roof) });
  // the lantern's little hook under the eave
  const ln = p.lantern;
  c.fillStyle = WOOD;
  c.fillRect(ln.x - 1.4, ln.y - 1, 2.8, 5);
}

function towerFootPath(c, bp) {
  const arc = bp.hull;
  c.moveTo(-54, 64);
  c.bezierCurveTo(-80, 64, -93, 44, arc[0][0], arc[0][1]);
  for (let i = 1; i <= 12; i++) c.lineTo(arc[i][0], arc[i][1]);
  c.bezierCurveTo(93, 44, 80, 64, 54, 64);
  c.closePath();
}

function paintTower(c, bp, P, L) {
  const p = bp.parts, w = p.walls;
  // the round, weighted rocking foot (起き上がりこぼし): a heavy, dark painted
  // bowl with a painted band, rubbed pale where it rolls on the cloth
  const foot = shade(P.door, -0.18);
  c.save();
  c.beginPath(); towerFootPath(c, bp);
  c.fillStyle = foot;
  c.fill();
  c.clip();
  c.fillStyle = P.trim;
  c.fillRect(-100, 37, 200, 9);
  c.fillStyle = withAlpha(DARK, 0.25);
  c.fillRect(-100, 36, 200, 1.2);
  c.fillStyle = withAlpha('#fff8e8', 0.25);
  c.fillRect(-100, 45, 200, 1);
  const g = c.createRadialGradient(-38, 50, 4, -10, 30, 118);
  g.addColorStop(0, withAlpha('#fff8e8', 0.34));
  g.addColorStop(0.3, withAlpha('#fff8e8', 0.08));
  g.addColorStop(0.62, withAlpha(DARK, 0));
  g.addColorStop(1, withAlpha(DARK, 0.42));
  c.fillStyle = g;
  c.fillRect(-100, -4, 200, 72);
  // rubbed paint along the rolling bottom
  const rnd = seeded(77);
  c.fillStyle = withAlpha(WORN, 0.55);
  for (let i = 0; i < 9; i++) {
    const x = (rnd() - 0.5) * 70;
    const y = 200 - Math.sqrt(200 * 200 - x * x) + 1.5 + rnd() * 1.5;
    c.beginPath(); c.ellipse(x, y, 3 + rnd() * 6, 0.9 + rnd() * 0.7, 0, 0, TAU); c.fill();
  }
  emboss(c, () => towerFootPath(c, bp), 1.6, 0.3, 0.25);
  c.restore();
  c.beginPath(); towerFootPath(c, bp);
  c.strokeStyle = withAlpha(DARK, 0.35); c.lineWidth = 0.9; c.stroke();
  // the tower
  const pts = [[-w.bx, w.y0], [w.bx, w.y0], [w.tx, w.y1], [-w.tx, w.y1]];
  block(c, pts, P.wall, {
    seed: 17, bevel: 3.4,
    fn: () => { eaveShadow(c, -60, 60, w.y1 - 1, 14, 0.22); footShade(c, -60, 60, w.y0, 12, 0.16); },
  });
  // wooden collar where the tower is glued into the foot
  slab(c, -58, 57, 58, 67, 19);
  for (let i = 0; i < L.holes.length; i++) windowHole(c, L.holes[i], 23 + i * 5);
  block(c, p.roof, P.roof, { seed: 13, r: 4, bevel: 3.6, fn: () => scallops(c, p.roof, 11, 13) });
}

function paintBoat(c, bp, P, L) {
  const p = bp.parts, cab = p.cabin, fp = p.flagPole;
  // flag pole (bare wood) with a turned knob
  block(c, rectPts(fp.x - 1.8, fp.y0, fp.x + 1.8, fp.y1 + 2), WOOD, { bare: true, seed: 41, vertical: true, bevel: 1, r: 1 });
  c.fillStyle = WOOD;
  c.beginPath(); c.arc(fp.x, fp.y1 + 4, 3.4, 0, TAU); c.fill();
  c.fillStyle = withAlpha('#fff8e8', 0.55);
  c.beginPath(); c.arc(fp.x - 1, fp.y1 + 5, 1.3, 0, TAU); c.fill();
  // cabin
  block(c, rectPts(cab.x0, cab.y0, cab.x1, cab.y1 - 2), P.wall, {
    seed: 43, bevel: 3.2,
    fn: () => { eaveShadow(c, cab.x0, cab.x1, cab.y1 - 5, 11, 0.22); footShade(c, cab.x0, cab.x1, cab.y0, 10, 0.12); },
  });
  windowHole(c, L.holes[0], 45);
  // a life ring on the cabin wall
  const lx = 35, ly = 79, ro = 10.5, ri = 5.6;
  c.save();
  c.beginPath(); c.arc(lx, ly, ro, 0, TAU); c.arc(lx, ly, ri, 0, TAU, true);
  c.fillStyle = '#f4ecdc';
  c.fill();
  c.clip();
  c.fillStyle = P.roof;
  for (let k = 0; k < 4; k++) {
    const a = (k / 4) * TAU + 0.4;
    c.beginPath(); c.moveTo(lx, ly); c.arc(lx, ly, ro + 1, a, a + 0.55); c.closePath(); c.fill();
  }
  emboss(c, () => { c.arc(lx, ly, ro, 0, TAU); c.moveTo(lx + ri, ly); c.arc(lx, ly, ri, 0, TAU); }, 1.2, 0.45, 0.3);
  c.restore();
  // roof: two planks with a ridge
  block(c, p.roof, P.roof, {
    seed: 47, r: 4, bevel: 3.4,
    fn: () => { groove(c, -70, 118, 60, 118, 0.22); groove(c, -60, 131, 50, 131, 0.22); },
  });
  // hull: painted, a cream stripe, the gunwale of bare wood on top
  const hull = [[-96, 0], [96, 0], [114, 46], [-114, 46]];
  block(c, hull, P.accent, {
    seed: 49, r: 6, bevel: 3.6,
    fn: () => {
      c.fillStyle = '#f2ead8';
      c.beginPath(); c.moveTo(-130, 24); c.lineTo(130, 24); c.lineTo(130, 31); c.lineTo(-130, 31); c.fill();
      footShade(c, -120, 120, 0, 10, 0.2);
    },
  });
  slab(c, -118, 40, 118, 48, 51);
}

function paintLong(c, bp, P, L) {
  const p = bp.parts, w = p.walls;
  block(c, rectPts(w.x0, 6, w.x1, w.y1), P.trim, {
    seed: 61, bevel: 3.6,
    fn: () => {
      // board-and-batten: carved vertical boards along the whole length
      for (let x = w.x0 + 19; x < w.x1 - 4; x += 19) groove(c, x, 7, x, w.y1, 0.2);
      eaveShadow(c, w.x0, w.x1, w.y1 - 3, 12, 0.22);
      footShade(c, w.x0, w.x1, 6, 12, 0.14);
    },
  });
  slab(c, w.x0 - 4, 0, w.x1 + 4, 8, 63);
  for (let i = 0; i < L.holes.length; i++) windowHole(c, L.holes[i], 65 + i * 7);
  door(c, { x0: -15, x1: 15, y0: 8, y1: 58 }, P.roof, 69, { planks: 2 });
  const roof = p.roof;
  block(c, roof, P.door, {
    seed: 67, r: 4, bevel: 3.6,
    fn: () => {
      for (const y of [102, 116]) groove(c, -210, y, 210, y, 0.24);
      const rnd = seeded(5);
      for (let row = 0; row < 3; row++) {
        const y0 = row === 0 ? 88 : row === 1 ? 102 : 116, y1 = y0 + 14;
        for (let x = -200 + rnd() * 30 + row * 11; x < 200; x += 34 + rnd() * 14) groove(c, x, y0 + 1, x, y1 - 1, 0.16);
      }
    },
  });
}

function stoneBlock(c, x, y, w, h, color, rnd) {
  c.beginPath(); rrect(c, x, y, w, h, 2.6);
  c.fillStyle = color;
  c.fill();
  c.save();
  c.clip();
  // matte stone: a soft lit rim on top/left, shade on bottom/right
  c.fillStyle = withAlpha('#fff8ee', 0.2);
  c.fillRect(x, y + h - 2.2, w, 2.2);
  c.fillRect(x, y, 1.8, h);
  c.fillStyle = withAlpha(DARK, 0.16);
  c.fillRect(x, y, w, 2);
  c.fillRect(x + w - 1.8, y, 1.8, h);
  // speckles (the toy stone is pressed from speckled clay)
  const n = Math.round((w * h) / 34);
  for (let i = 0; i < n; i++) {
    const d = rnd() < 0.6;
    c.fillStyle = d ? withAlpha(PAL.speck, 0.55) : withAlpha('#fffaf0', 0.5);
    const s = 0.6 + rnd() * 0.8;
    c.fillRect(x + 1 + rnd() * (w - 2), y + 1 + rnd() * (h - 2), s, s);
  }
  if (rnd() < 0.3) { c.fillStyle = withAlpha('#fffaf0', 0.35); chip(c, x + (rnd() < 0.5 ? 2 : w - 2), y + h - 2, 1.5 + rnd(), rnd); }
  c.restore();
}

function paintStone(c, bp, P, L) {
  const p = bp.parts, w = p.walls, ch = p.chimney;
  const rnd = seeded(91);
  const stoneCol = () => mix(PAL.stone, rnd() < 0.5 ? '#cdbfaa' : '#b09e8e', rnd() * 0.7);
  // chimney of stacked stones with a slab on top
  const chh = (ch.y1 - 6 - ch.y0) / 3;
  c.fillStyle = shade(PAL.stone2, -0.35);
  c.fillRect(ch.x0 + 1, ch.y0, ch.x1 - ch.x0 - 2, ch.y1 - ch.y0 - 6);
  for (let i = 0; i < 3; i++) stoneBlock(c, ch.x0, ch.y0 + i * chh + 0.8, ch.x1 - ch.x0, chh - 1.6, stoneCol(), rnd);
  slab(c, ch.x0 - 4, ch.y1 - 7, ch.x1 + 4, ch.y1 + 0.5, 93, mix(PAL.stone, PAL.stone2, 0.35));
  // walls: toy stone blocks with dark joints; a heavier base course
  c.save();
  c.beginPath(); rrect(c, w.x0, 0, w.x1 - w.x0, w.y1, 3);
  c.fillStyle = shade(PAL.stone2, -0.35);
  c.fill();
  c.clip();
  const rows = [[0, 25], [25, 47], [47, 69], [69, 91], [91, 113]];
  rows.forEach(([y0, y1], ri) => {
    let x = w.x0 - (ri % 2 ? 22 : 0) - rnd() * 8;
    while (x < w.x1) {
      const bw = ri === 0 ? 50 + rnd() * 14 : 32 + rnd() * 26;
      const col = ri === 0 ? mix(stoneCol(), PAL.stone2, 0.3) : stoneCol();
      stoneBlock(c, x + 0.9, y0 + 0.9, bw - 1.8, y1 - y0 - 1.8, col, rnd);
      x += bw;
    }
  });
  eaveShadow(c, w.x0, w.x1, w.y1 - 3, 13, 0.24);
  footShade(c, w.x0, w.x1, 0, 10, 0.16);
  c.restore();
  // lintels (big dark stones) over the door and the window
  const d = p.door, h = L.holes[0];
  // an arch of wedge stones around the door
  {
    const w = d.x1 - d.x0, cx = (d.x0 + d.x1) / 2;
    const sh = { shape: 'arch', x: cx, y: (d.y0 + d.y1 + 1) / 2, w, h: d.y1 + 1 - d.y0 };
    const yc = d.y1 + 1 - w / 2, r0 = w / 2 + 3, r1 = w / 2 + 13;
    c.save();
    c.beginPath(); c.rect(d.x0 - 20, yc, w + 40, 60); c.clip();
    c.beginPath(); holePath(c, sh, 13); holePath(c, sh, 3);
    c.fillStyle = shade(PAL.stone2, -0.35);
    c.fill('evenodd');
    const n = 5;
    for (let k = 0; k < n; k++) {
      const a0 = Math.PI - (k / n) * Math.PI - 0.012, a1 = Math.PI - ((k + 1) / n) * Math.PI + 0.012;
      c.beginPath();
      c.arc(cx, yc, r1 - 0.8, a0 - 0.03, a1 + 0.03, true);
      c.arc(cx, yc, r0 + 0.8, a1 + 0.03, a0 - 0.03, false);
      c.closePath();
      c.fillStyle = mix(PAL.stone2, PAL.stone, 0.4 + rnd() * 0.25);
      c.fill();
      c.save(); c.clip();
      c.fillStyle = withAlpha('#fff8ee', 0.18);
      c.beginPath(); c.arc(cx, yc, r1 - 0.8, a0, a1, true); c.arc(cx, yc, r1 - 3, a1, a0, false); c.closePath(); c.fill();
      for (let i = 0; i < 10; i++) {
        const a = a1 + (a0 - a1) * rnd(), rr = r0 + 1 + (r1 - r0 - 2) * rnd();
        c.fillStyle = rnd() < 0.6 ? withAlpha(PAL.speck, 0.55) : withAlpha('#fffaf0', 0.5);
        c.fillRect(cx + Math.cos(a) * rr, yc + Math.sin(a) * rr, 0.9, 0.9);
      }
      c.restore();
    }
    c.restore();
  }
  stoneBlock(c, h.x - h.w / 2 - 12, h.y + h.h / 2 + 5, h.w + 24, 11, mix(PAL.stone2, PAL.stone, 0.45), rnd);
  windowHole(c, h, 95);
  stoneBlock(c, h.x - h.w / 2 - 10, h.y - h.h / 2 - 13, h.w + 20, 9, mix(PAL.stone2, PAL.stone, 0.55), rnd);
  // the only bare wood: a heavy plank door
  door(c, { x0: d.x0, x1: d.x1, y0: d.y0, y1: d.y1 + 1 }, WOOD, 97, { bare: true, planks: 3, frame: 3.5, knobLeft: false });
  // roof: thick slate tiles
  block(c, p.roof, P.slate, {
    seed: 99, r: 5, bevel: 4.4, wear: 0.6,
    fn: () => {
      const r2 = seeded(7);
      for (let y = 122, row = 0; y < 190; y += 14, row++) {
        groove(c, -130, y, 130, y, 0.28);
        for (let x = -130 + (row % 2) * 13 + r2() * 6; x < 130; x += 26) groove(c, x, y - 13, x, y - 1, 0.2);
      }
    },
  });
}

const PAINT = { cottage: paintCottage, tower: paintTower, boat: paintBoat, long: paintLong, stone: paintStone };

// ============================================================ sprite cache
const sprites = new Map();
let tick = 0;

function spriteFor(ent, P, scale, dusk, loose = 1) {
  const bp = ent.bp;
  const key = bp.id + '|' + ent.variant;
  const dq = Math.round(clamp(dusk, 0, 1) * 5) / 5;
  let sp = sprites.get(key);
  tick++;
  if (sp && sp.dusk === dq && sp.s >= scale * 0.97 && sp.s <= scale * 2.3 * loose) { sp.used = tick; return sp; }
  // buckets of 2^(1/3) so a zooming camera re-renders only now and then
  const s = clamp(Math.pow(2, Math.ceil(Math.log2(Math.max(0.05, scale)) * 3 - 0.02) / 3), 0.2, 5);
  const m = 16;
  const x0 = bp.bounds.x0 - m, x1 = bp.bounds.x1 + m, y0 = -m, y1 = bp.bounds.h + m;
  const cv = sp ? sp.cv : document.createElement('canvas');
  cv.width = Math.ceil((x1 - x0) * s);
  cv.height = Math.ceil((y1 - y0) * s);
  const c = cv.getContext('2d');
  c.setTransform(s, 0, 0, -s, -x0 * s, y1 * s);
  c.lineCap = 'round';
  c.lineJoin = 'round';
  PAINT[bp.id](c, bp, P, layoutFor(bp));
  if (dq > 0) {
    // evening light on the paint
    c.globalCompositeOperation = 'source-atop';
    c.fillStyle = withAlpha(PAL.duskTop, dq * 0.3);
    c.fillRect(x0, y0, x1 - x0, y1 - y0);
    c.fillStyle = withAlpha('#f3a36b', dq * 0.1);
    c.fillRect(x0, y0, x1 - x0, y1 - y0);
    c.globalCompositeOperation = 'source-over';
  }
  sp = { cv, s, dusk: dq, x0, y1, w: cv.width / s, h: cv.height / s, used: tick };
  sprites.set(key, sp);
  for (const [k, v] of sprites) {
    if (k !== key && tick - v.used > 1200) { v.cv.width = v.cv.height = 0; sprites.delete(k); }
  }
  return sp;
}

// ============================================================ felt puppets
// (the fibre pattern is keyed by patColor so evening tints never mint new tiles)
function feltFill(ctx, color, seed, rim, patColor = color) {
  ctx.fillStyle = color;
  ctx.fill();
  ctx.globalAlpha = patColor === color ? 0.5 : 0.3;
  ctx.fillStyle = feltPattern(ctx, patColor, seed);
  ctx.fill();
  ctx.globalAlpha = 1;
  if (rim) {
    ctx.strokeStyle = withAlpha(rim, 0.55);
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

function circlePath(ctx, x, y, r) { ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); }
function ellPath(ctx, x, y, rx, ry, a = 0) { ctx.beginPath(); ctx.ellipse(x, y, rx, ry, a, 0, TAU); }

// Running stitch just inside a round felt shape.
function stitchRing(ctx, x, y, rx, ry, color) {
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, 0, 0, TAU);
  ctx.setLineDash(DASH);
  ctx.strokeStyle = withAlpha(color, 0.5);
  ctx.lineWidth = 0.7;
  ctx.stroke();
  ctx.setLineDash(NODASH);
}

const HAPPY = { joy: 1, happy: 1, giggle: 1 };

// Felt eyes: white felt with a black button pupil that looks where the
// resident looks. Happy eyes are closed arcs; a blink is a lid line.
function eyes(ctx, x, y, gap, er, st, far = 0, farK = 0.85) {
  const m = st.mood;
  const happy = HAPPY[m];
  for (let s = -1; s <= 1; s += 2) {
    const k = s === far ? farK : 1;
    const ex = x + s * gap;
    if (happy || st.blink) {
      ctx.strokeStyle = INK;
      ctx.lineWidth = er * 0.42 * k;
      ctx.lineCap = 'round';
      ctx.beginPath();
      if (happy) {
        ctx.moveTo(ex - er * 0.9 * k, y - er * 0.25);
        ctx.quadraticCurveTo(ex, y + er * 0.95 * k, ex + er * 0.9 * k, y - er * 0.25);
      } else {
        ctx.moveTo(ex - er * 0.85 * k, y + er * 0.05);
        ctx.quadraticCurveTo(ex, y - er * 0.5 * k, ex + er * 0.85 * k, y + er * 0.05);
      }
      ctx.stroke();
      continue;
    }
    const big = m === 'surprised' ? 1.28 : m === 'eager' ? 1.12 : 1;
    const rx = er * big * k, ry = er * big * 1.12 * k;
    ctx.fillStyle = '#fbf8ef';
    ellPath(ctx, ex, y, rx, ry);
    ctx.fill();
    ctx.strokeStyle = withAlpha(INK, 0.3);
    ctx.lineWidth = er * 0.12;
    ctx.stroke();
    const pr = er * (m === 'surprised' ? 0.46 : 0.6) * k;
    const px = ex + st.lx * (rx - pr) * 0.8, py = y + st.ly * (ry - pr) * 0.8;
    ctx.fillStyle = INK;
    circlePath(ctx, px, py, pr);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    circlePath(ctx, px - pr * 0.32, py + pr * 0.36, pr * 0.3);
    ctx.fill();
  }
}

// Embroidered mouth for the mammals.
function mouth(ctx, x, y, w, m) {
  ctx.lineCap = 'round';
  if (m === 'surprised') {
    ctx.fillStyle = '#5b2a24';
    ellPath(ctx, x, y - w * 0.1, w * 0.2, w * 0.27);
    ctx.fill();
  } else if (m === 'joy' || m === 'giggle' || m === 'eager') {
    const d = m === 'joy' ? 0.62 : m === 'giggle' ? 0.5 : 0.36;
    ctx.fillStyle = '#5b2a24';
    ctx.beginPath();
    ctx.moveTo(x - w * 0.5, y);
    ctx.quadraticCurveTo(x, y - w * d * 2, x + w * 0.5, y);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#d97a6b';
    ellPath(ctx, x, y - w * d * 0.72, w * 0.2, w * d * 0.28);
    ctx.fill();
  } else {
    ctx.strokeStyle = INK;
    ctx.lineWidth = Math.max(0.9, w * 0.13);
    ctx.beginPath();
    ctx.moveTo(x - w * 0.42, y + w * 0.06);
    ctx.quadraticCurveTo(x, y - w * (m === 'happy' ? 0.5 : 0.36), x + w * 0.42, y + w * 0.06);
    ctx.stroke();
  }
}

function beakOpen(m) { return m === 'surprised' || m === 'joy' || m === 'giggle' || m === 'eager'; }

// Wings, paws and hooves: knocking on the glass (the paw squashes flat against
// it), waving when the window is touched, both arms up at lift-off.
function limbs(ctx, x, y, R, st, color, rim, wing) {
  const draw = (hx, hy, rx, ry, rot) => {
    ellPath(ctx, hx, hy, rx, ry, rot);
    feltFill(ctx, color, 5, rim);
    if (!wing) {
      // the palm faces us: a pale pad and two toe stitches
      ellPath(ctx, hx, hy - ry * 0.12, rx * 0.5, ry * 0.42, rot);
      ctx.fillStyle = withAlpha('#fff4e0', 0.35);
      ctx.fill();
      ctx.strokeStyle = withAlpha(rim, 0.8);
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(hx - rx * 0.28, hy + ry * 0.62); ctx.lineTo(hx - rx * 0.22, hy + ry * 0.3);
      ctx.moveTo(hx + rx * 0.28, hy + ry * 0.62); ctx.lineTo(hx + rx * 0.22, hy + ry * 0.3);
      ctx.stroke();
    }
  };
  if (st.cheer > 0.2) {
    const up = clamp((st.cheer - 0.2) / 0.5, 0, 1);
    for (let s = -1; s <= 1; s += 2) {
      const sw = Math.sin(st.t * 11 + s) * 0.18 * up;
      draw(x + s * R * (0.92 + 0.1 * up), y + R * (-0.2 + 0.75 * up), R * 0.24, R * 0.34, s * (-0.5 + sw));
    }
    return;
  }
  if (st.knock > 0) {
    // tap-tap on the glass beside the face: each tap comes towards us and
    // flattens against the pane
    const k = Math.abs(Math.sin(st.knock * Math.PI * 4));
    const s = 1 + 0.4 * k;
    draw(x + R * 0.95, y - R * 0.1 + k * R * 0.08, R * 0.25 * s * (1 + 0.18 * k), R * 0.31 * s * (1 - 0.16 * k), 0.15);
    return;
  }
  if (st.wave > 0) {
    const a = Math.sin(st.t * 15) * 0.5;
    draw(x + R * 1.02 + a * R * 0.22, y + R * 0.3 + Math.abs(a) * R * 0.1, R * 0.23, R * 0.33, -0.3 + a);
  }
}

function drawChick(ctx, x, y, R, st) {
  const f = FELT.chick;
  // tuft of three felt feathers
  for (let i = -1; i <= 1; i++) {
    ellPath(ctx, x + i * R * 0.18, y + R * 1.0, R * 0.09, R * 0.24, -i * 0.5);
    feltFill(ctx, f.body, 3, f.rim);
  }
  circlePath(ctx, x, y, R);
  feltFill(ctx, f.body, 3, f.rim);
  stitchRing(ctx, x, y, R - 2.2, R - 2.2, f.rim);
  // belly patch
  ellPath(ctx, x, y - R * 0.55, R * 0.55, R * 0.32);
  ctx.fillStyle = withAlpha('#fff6d8', 0.35);
  ctx.fill();
  const fx = x + st.lx * R * 0.1, fy = y + st.ly * R * 0.06;
  eyes(ctx, fx, fy + R * 0.2, R * 0.37, R * 0.2, st);
  // beak
  const by = fy - R * 0.1, b = R * 0.2;
  ctx.fillStyle = f.beak;
  if (beakOpen(st.mood)) {
    const o = st.mood === 'joy' ? 0.55 : st.mood === 'surprised' ? 0.45 : 0.3;
    ctx.fillStyle = '#5b2a24';
    ctx.beginPath(); ctx.moveTo(fx - b * 0.8, by); ctx.lineTo(fx + b * 0.8, by); ctx.lineTo(fx, by - b * (0.8 + o)); ctx.closePath(); ctx.fill();
    ctx.fillStyle = f.beak;
    ctx.beginPath(); ctx.moveTo(fx - b, by + b * 0.1); ctx.lineTo(fx + b, by + b * 0.1); ctx.lineTo(fx, by - b * 0.55); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(fx - b * 0.6, by - b * (0.55 + o)); ctx.lineTo(fx + b * 0.6, by - b * (0.55 + o)); ctx.lineTo(fx, by - b * (1.05 + o)); ctx.closePath(); ctx.fill();
  } else {
    ctx.beginPath(); ctx.moveTo(fx - b, by + b * 0.1); ctx.lineTo(fx + b, by + b * 0.1); ctx.lineTo(fx, by - b * 0.95); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = withAlpha('#9a4f14', 0.6); ctx.lineWidth = 0.7;
    ctx.beginPath(); ctx.moveTo(fx - b * 0.55, by - b * 0.25); ctx.lineTo(fx + b * 0.55, by - b * 0.25); ctx.stroke();
  }
  limbs(ctx, x, y, R, st, f.wing, f.rim, true);
}

function drawDuck(ctx, x, y, R, st) {
  const f = FELT.duck;
  // a little curl of felt on top
  ctx.beginPath();
  ctx.moveTo(x - R * 0.08, y + R * 0.9);
  ctx.quadraticCurveTo(x - R * 0.05, y + R * 1.35, x + R * 0.28, y + R * 1.22);
  ctx.quadraticCurveTo(x + R * 0.05, y + R * 1.12, x + R * 0.12, y + R * 0.9);
  ctx.closePath();
  feltFill(ctx, f.body, 4, f.rim);
  circlePath(ctx, x, y, R);
  feltFill(ctx, f.body, 4, f.rim);
  stitchRing(ctx, x, y, R - 2.2, R - 2.2, f.rim);
  const fx = x + st.lx * R * 0.1, fy = y + st.ly * R * 0.06;
  eyes(ctx, fx, fy + R * 0.24, R * 0.36, R * 0.215, st);
  // the bill: a flat felt paddle
  const by = fy - R * 0.26, bw = R * 0.52, bh = R * 0.22;
  if (beakOpen(st.mood)) {
    const o = st.mood === 'joy' ? 0.5 : st.mood === 'surprised' ? 0.4 : 0.25;
    ctx.fillStyle = '#5b2a24';
    ellPath(ctx, fx, by - bh * 0.3, bw * 0.8, bh * (0.6 + o));
    ctx.fill();
    ctx.fillStyle = f.beak;
    ctx.beginPath(); ctx.ellipse(fx, by + bh * 0.15, bw, bh * 0.8, 0, Math.PI, TAU); ctx.fill();
    ctx.beginPath(); ctx.ellipse(fx, by + bh * 0.1, bw, bh * 0.35, 0, 0, Math.PI); ctx.fill();
    ctx.beginPath(); ctx.ellipse(fx, by - bh * (0.9 + o * 1.6), bw * 0.82, bh * 0.55, 0, 0, TAU); ctx.fill();
  } else {
    ellPath(ctx, fx, by, bw, bh);
    ctx.fillStyle = f.beak;
    ctx.fill();
    ctx.strokeStyle = withAlpha('#9a4f14', 0.6); ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.moveTo(fx - bw * 0.75, by - bh * 0.05); ctx.quadraticCurveTo(fx, by - bh * 0.35, fx + bw * 0.75, by - bh * 0.05); ctx.stroke();
    ctx.fillStyle = withAlpha('#9a4f14', 0.55);
    ctx.fillRect(fx - bw * 0.28, by + bh * 0.3, 1.2, 1.2);
    ctx.fillRect(fx + bw * 0.22, by + bh * 0.3, 1.2, 1.2);
  }
  limbs(ctx, x, y, R, st, f.wing, f.rim, true);
}

function drawBear(ctx, x, y, R, st) {
  const f = FELT.bear;
  for (let s = -1; s <= 1; s += 2) {
    circlePath(ctx, x + s * R * 0.72, y + R * 0.72, R * 0.32);
    feltFill(ctx, f.body, 6, f.rim);
    circlePath(ctx, x + s * R * 0.72, y + R * 0.72, R * 0.17);
    ctx.fillStyle = f.ear;
    ctx.fill();
  }
  circlePath(ctx, x, y, R);
  feltFill(ctx, f.body, 6, f.rim);
  stitchRing(ctx, x, y, R - 2.2, R - 2.2, f.rim);
  const fx = x + st.lx * R * 0.1, fy = y + st.ly * R * 0.06;
  ellPath(ctx, fx, fy - R * 0.33, R * 0.47, R * 0.35);
  feltFill(ctx, f.muzzle, 7, '#b99470');
  eyes(ctx, fx, fy + R * 0.16, R * 0.37, R * 0.17, st);
  ctx.fillStyle = INK;
  ellPath(ctx, fx, fy - R * 0.2, R * 0.15, R * 0.1);
  ctx.fill();
  ctx.strokeStyle = INK; ctx.lineWidth = 0.9;
  ctx.beginPath(); ctx.moveTo(fx, fy - R * 0.28); ctx.lineTo(fx, fy - R * 0.4); ctx.stroke();
  mouth(ctx, fx, fy - R * 0.43, R * 0.38, st.mood);
  limbs(ctx, x, y, R, st, f.body, f.rim, false);
}

function drawGiraffeHead(ctx, x, y, R, st) {
  const f = FELT.giraffe;
  // ears
  for (let s = -1; s <= 1; s += 2) {
    ellPath(ctx, x + s * R * 0.86, y + R * 0.45, R * 0.3, R * 0.13, s * 0.45);
    feltFill(ctx, f.body, 8, f.rim);
  }
  // ossicones with dark knobs
  ctx.lineCap = 'round';
  for (let s = -1; s <= 1; s += 2) {
    ctx.strokeStyle = f.body;
    ctx.lineWidth = R * 0.17;
    ctx.beginPath(); ctx.moveTo(x + s * R * 0.26, y + R * 0.7); ctx.lineTo(x + s * R * 0.34, y + R * 1.18); ctx.stroke();
    circlePath(ctx, x + s * R * 0.34, y + R * 1.2, R * 0.13);
    ctx.fillStyle = f.mane;
    ctx.fill();
  }
  ellPath(ctx, x, y, R * 0.76, R);
  feltFill(ctx, f.body, 8, f.rim);
  // patches on the head
  ctx.fillStyle = f.spot;
  ellPath(ctx, x - R * 0.5, y + R * 0.52, R * 0.12, R * 0.15, 0.4); ctx.fill();
  ellPath(ctx, x + R * 0.52, y + R * 0.05, R * 0.1, R * 0.14, -0.3); ctx.fill();
  ellPath(ctx, x + R * 0.36, y + R * 0.7, R * 0.08, R * 0.1, 0.2); ctx.fill();
  const fx = x + st.lx * R * 0.08, fy = y + st.ly * R * 0.05;
  ellPath(ctx, fx, fy - R * 0.52, R * 0.6, R * 0.42);
  feltFill(ctx, f.muzzle, 9, '#d8b988');
  ctx.fillStyle = withAlpha(INK, 0.75);
  ellPath(ctx, fx - R * 0.22, fy - R * 0.38, R * 0.07, R * 0.05, 0.4); ctx.fill();
  ellPath(ctx, fx + R * 0.22, fy - R * 0.38, R * 0.07, R * 0.05, -0.4); ctx.fill();
  eyes(ctx, fx, fy + R * 0.2, R * 0.36, R * 0.19, st);
  mouth(ctx, fx, fy - R * 0.62, R * 0.44, st.mood);
  limbs(ctx, x, y - R * 0.3, R, st, f.body, f.rim, false);
}

// The dachshund's head in three-quarter view, facing dir.
function drawDogHead(ctx, x, y, R, st, dir) {
  const f = FELT.dachshund;
  ellPath(ctx, x + dir * R * 0.45, y + R * 0.05, R * 0.28, R * 0.55, dir * 0.35);
  feltFill(ctx, f.ear, 10, f.rim);
  circlePath(ctx, x, y, R);
  feltFill(ctx, f.body, 10, f.rim);
  const fx = x + st.lx * R * 0.06, fy = y + st.ly * R * 0.05;
  ellPath(ctx, fx + dir * R * 0.58, fy - R * 0.3, R * 0.64, R * 0.42, dir * -0.08);
  feltFill(ctx, f.snout, 11, f.rim);
  ctx.fillStyle = f.nose;
  ellPath(ctx, fx + dir * R * 1.12, fy - R * 0.2, R * 0.17, R * 0.13);
  ctx.fill();
  eyes(ctx, fx + dir * R * 0.12, fy + R * 0.2, R * 0.3, R * 0.19, st, dir, 0.85);
  mouth(ctx, fx + dir * R * 0.66, fy - R * 0.58, R * 0.4, st.mood);
  // the near ear hangs over the side of the head
  ellPath(ctx, x - dir * R * 0.66, y - R * 0.18, R * 0.3, R * 0.68, dir * 0.28);
  feltFill(ctx, f.ear, 12, f.rim);
}

// ============================================================ residents
const tmpW = { x: 0, y: 0 };

// Look direction in the house frame (from the resident's window to what it
// looks at), and the shared puppet state.
function puppetState(ent, L, t) {
  const r = ent.resident;
  const b = ent.body;
  const h = L.holes[L.who];
  const ox = h.x - ent.bp.com[0], oy = h.y - ent.bp.com[1];
  const dx = r.lookX - b.wx(ox, oy), dy = r.lookY - b.wy(ox, oy);
  const c = Math.cos(-b.a), s = Math.sin(-b.a);
  const ux = c * dx - s * dy, uy = s * dx + c * dy;
  const d = Math.hypot(ux, uy) || 1;
  const k = clamp(d / 90, 0, 1);
  return {
    mood: r.mood, blink: r.blinkT < 0.12, lx: (ux / d) * k, ly: (uy / d) * k,
    knock: r.knock, wave: r.wave, cheer: r.cheer, giggle: r.giggle, t,
  };
}

// Where the head sits in its window: the puppet leans with the house's
// motion (ox, oy from the entity), bobs, pops up when surprised or cheering.
function headPos(ent, h, R, st) {
  const r = ent.resident;
  let y = holeBottom(h) + R * 0.95 + r.oy + Math.sin(st.t * 2 + ent.index) * 0.8 + r.cheer * R * 0.18;
  if (st.mood === 'surprised') y += R * 0.1;
  if (st.mood === 'look' || st.mood === 'eager') y += R * 0.05;
  const x = h.x + r.ox + (st.giggle ? Math.sin(st.t * 30) * st.giggle * R * 0.07 : 0);
  return [x, y];
}

function interiorCottage(ctx, ent, L, st) {
  const h = L.holes[0];
  const R = h.r * 0.8;
  const [x, y] = headPos(ent, h, R, st);
  drawChick(ctx, x, y - R * 0.15, R, st);
}

function interiorBoat(ctx, ent, L, st) {
  const h = L.holes[0];
  const R = h.r * 0.92;
  const [x, y] = headPos(ent, h, R, st);
  drawDuck(ctx, x, y - R * 0.2, R, st);
}

function interiorStone(ctx, ent, L, st) {
  const h = L.holes[0];
  const R = h.h * 0.4;
  const [x, y] = headPos(ent, h, R, st);
  // shoulders of the puppet sleeve
  ellPath(ctx, x, holeBottom(h) - 2, R * 1.05, R * 0.55);
  feltFill(ctx, FELT.bear.body, 6, FELT.bear.rim);
  drawBear(ctx, x, y - R * 0.05, R, st);
}

// The giraffe: its head in the top window and ONE long spotted neck, seen
// through the two windows below, swaying after the head.
function interiorTower(ctx, ent, L, st) {
  const f = FELT.giraffe;
  const top = L.holes[2];
  const R = top.w * 0.44;
  const [hx, hy0] = headPos(ent, top, R, st);
  const hy = hy0 - R * 0.28;
  const r = ent.resident;
  const x0 = -r.ox * 0.25 + 4, y0 = 60;
  const x1 = hx, y1 = hy - R * 0.55;
  const cx = x0 - 13 + r.ox * 0.3, cy = (y0 + y1) / 2;
  const N = 18;
  const ptL = [], ptR = [], mid = [];
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const px = (1 - u) * (1 - u) * x0 + 2 * u * (1 - u) * cx + u * u * x1;
    const py = (1 - u) * (1 - u) * y0 + 2 * u * (1 - u) * cy + u * u * y1;
    const tx = 2 * (1 - u) * (cx - x0) + 2 * u * (x1 - cx), ty = 2 * (1 - u) * (cy - y0) + 2 * u * (y1 - cy);
    const tl = Math.hypot(tx, ty) || 1;
    const nx = -ty / tl, ny = tx / tl;
    const w = lerp(7, 6, u);
    ptL.push([px + nx * w, py + ny * w]);
    ptR.push([px - nx * w, py - ny * w]);
    mid.push([px, py, nx, ny, w]);
  }
  // mane: a fringe of dark felt tufts along the back of the neck
  ctx.fillStyle = f.mane;
  for (let i = 1; i < N; i++) {
    const [px, py, nx, ny, w] = mid[i];
    ellPath(ctx, px + nx * (w + 1.6), py + ny * (w + 1.6), 3, 3.4, Math.atan2(ny, nx));
    ctx.fill();
  }
  ctx.beginPath();
  ctx.moveTo(ptL[0][0], ptL[0][1]);
  for (let i = 1; i <= N; i++) ctx.lineTo(ptL[i][0], ptL[i][1]);
  for (let i = N; i >= 0; i--) ctx.lineTo(ptR[i][0], ptR[i][1]);
  ctx.closePath();
  feltFill(ctx, f.body, 8, f.rim);
  // shade on the side away from the sun
  ctx.beginPath();
  for (let i = 0; i <= N; i++) {
    const [px, py, nx, ny, w] = mid[i];
    if (i === 0) ctx.moveTo(px - nx * w * 0.35, py - ny * w * 0.35); else ctx.lineTo(px - nx * w * 0.35, py - ny * w * 0.35);
  }
  for (let i = N; i >= 0; i--) ctx.lineTo(ptR[i][0], ptR[i][1]);
  ctx.closePath();
  ctx.fillStyle = withAlpha(DARK, 0.12);
  ctx.fill();
  // patches, two abreast, all the way up
  ctx.fillStyle = f.spot;
  const rnd = seeded(5);
  for (let i = 1; i < N - 1; i += 1) {
    const [px, py, nx, ny, w] = mid[i];
    const side = i % 2 ? 1 : -1;
    const ox = nx * side * w * 0.42, oy = ny * side * w * 0.42;
    ctx.beginPath();
    const rr = w * 0.36;
    for (let j = 0; j < 6; j++) {
      const a = (j / 6) * TAU + rnd() * 0.4;
      const q = rr * (0.75 + rnd() * 0.4);
      const X = px + ox + Math.cos(a) * q, Y = py + oy + Math.sin(a) * q * 1.2;
      if (j === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.closePath();
    ctx.fill();
  }
  drawGiraffeHead(ctx, hx, hy, R, st);
}

// The dachshund: one long dog behind all four windows, trotting to the low end.
function interiorLong(ctx, ent, L, st) {
  const f = FELT.dachshund;
  const dog = ent.loads[0];
  const dir = dog ? dog.dir : -1;
  const xd = dog ? dog.x : 0;
  const moving = dog ? Math.abs(dog.v) > 5 : false;
  const ph = dog ? dog.step * 0.26 : 0;
  const bob = moving ? Math.abs(Math.sin(ph)) * 1.6 : 0;
  const floor = 30;
  const by = floor + 16 + bob;
  const chest = xd + dir * 4, rump = xd - dir * 80;
  const x0 = Math.min(chest, rump) - 9, x1 = Math.max(chest, rump) + 9;
  // head: at rest it pokes its long neck to the nearest window
  const R = 18;
  let hx = xd + dir * 22;
  const rest = dog ? smoothstep(0.2, 1.1, dog.rest) : 1;
  let best = null;
  for (const h of L.holes) if (!best || Math.abs(h.x - hx) < Math.abs(best.x - hx)) best = h;
  hx += clamp(best.x - hx, -24, 24) * rest;
  const r = ent.resident;
  const hy = by + 10 + r.oy * 0.6 + (st.mood === 'surprised' ? 3 : 0) + r.cheer * 4;
  hx += r.ox * 0.6 + (st.giggle ? Math.sin(st.t * 30) * st.giggle * 1.2 : 0);
  const legs = (near) => {
    const col = near ? f.body : shade(f.body, -0.18);
    ctx.fillStyle = col;
    for (const [lx, p0] of [[chest - dir * 5, 0], [rump + dir * 9, Math.PI]]) {
      const sw = moving ? Math.sin(ph + p0 + (near ? 0 : Math.PI)) * 3.2 : 0;
      const x = lx + (near ? 0 : dir * 3) + sw;
      ctx.beginPath(); rrect(ctx, x - 3, floor, 6, by - floor, 2.6); ctx.fill();
      ctx.fillStyle = shade(col, -0.15);
      ctx.beginPath(); ctx.ellipse(x + dir * 1.5, floor + 1.5, 4.2, 2.2, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = col;
    }
  };
  legs(false);
  // tail: wags harder when happy
  const wag = Math.sin(st.t * (HAPPY[st.mood] || st.mood === 'eager' ? 18 : 6)) * (HAPPY[st.mood] || st.mood === 'eager' ? 7 : 3);
  ctx.strokeStyle = f.body;
  ctx.lineWidth = 4.2;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(rump - dir * 4, by + 3);
  ctx.quadraticCurveTo(rump - dir * 14, by + 6, rump - dir * 18 + wag * 0.3, by + 15 + wag);
  ctx.stroke();
  // the long body
  ctx.beginPath(); rrect(ctx, x0, by - 8, x1 - x0, 17, 8.5);
  feltFill(ctx, f.body, 10, f.rim);
  ctx.beginPath(); rrect(ctx, x0 + 6, by - 8, x1 - x0 - 12, 5, 2.5);
  ctx.fillStyle = withAlpha('#e6b98f', 0.4);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x0 + 8, by + 5.5); ctx.lineTo(x1 - 8, by + 5.5);
  ctx.setLineDash(DASH);
  ctx.strokeStyle = withAlpha(f.rim, 0.6);
  ctx.lineWidth = 0.7;
  ctx.stroke();
  ctx.setLineDash(NODASH);
  legs(true);
  // neck up to the head
  ctx.strokeStyle = f.body;
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.moveTo(chest, by + 1);
  ctx.quadraticCurveTo(chest + dir * 6, by + 10, hx - dir * 3, hy - 4);
  ctx.stroke();
  drawDogHead(ctx, hx, hy, R, st, dir);
  // a paw raised for knocking or waving
  if (st.knock > 0 || st.wave > 0 || st.cheer > 0.3) {
    const k = st.knock > 0 ? Math.abs(Math.sin(st.knock * Math.PI * 4)) : 0;
    const a = st.wave > 0 ? Math.sin(st.t * 15) * 3 : 0;
    ellPath(ctx, hx + dir * R * 0.2 + a, hy - R * 0.95 + k * 3 + st.cheer * 8, 4.2 * (1 + k * 0.4), 5 * (1 - k * 0.15));
    feltFill(ctx, f.body, 10, f.rim);
  }
}

const INTERIOR = { cottage: interiorCottage, tower: interiorTower, boat: interiorBoat, long: interiorLong, stone: interiorStone };

function drawInterior(ctx, ent, L, t, dusk) {
  const st = puppetState(ent, L, t);
  ctx.save();
  ctx.beginPath();
  for (const h of L.holes) holePath(ctx, h, 1.2);
  ctx.clip();
  const b = ent.bp.bounds;
  ctx.fillStyle = dusk > 0 ? mix(ROOM, LAMP, dusk * 0.85) : ROOM;
  ctx.fillRect(b.x0, 0, b.w, b.h);
  // a little light falls in through the upper part of each window
  for (const h of L.holes) {
    ctx.fillStyle = withAlpha(dusk > 0.3 ? '#fff0c8' : '#8d7466', 0.22);
    ctx.fillRect(h.x - holeHalfW(h) - 2, holeTop(h) - (holeTop(h) - holeBottom(h)) * 0.45, holeHalfW(h) * 2 + 4, (holeTop(h) - holeBottom(h)) * 0.5);
  }
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  INTERIOR[ent.bp.id](ctx, ent, L, st);
  ctx.restore();
}

// ============================================================ the outside, per frame
// A cloth pennant hinged on a pole. It is blown by the air moving PAST the
// house (the same wind as everything, minus the house's own motion), and it
// hangs limp when the house drifts along with the wind.
function pennant(ctx, ent, world, px, y0, y1, len, base, t) {
  const color = duskTint(base, world.dusk);
  const b = ent.body;
  world.wind.at(b.wx(px - ent.bp.com[0], y1 - ent.bp.com[1]), b.wy(px - ent.bp.com[0], y1 - ent.bp.com[1]), tmpW);
  const ax = tmpW.x - b.vx, ay = tmpW.y - b.vy;
  const c = Math.cos(-b.a), s = Math.sin(-b.a);
  const rx = c * ax - s * ay, ry = s * ax + c * ay;
  const v = Math.hypot(rx, ry);
  const k = clamp(v / 42, 0, 1);
  const gx = -s, gy = -c;   // gravity in the house frame
  let dx = lerp(gx, rx / (v || 1), k), dy = lerp(gy, ry / (v || 1), k);
  const dl = Math.hypot(dx, dy) || 1;
  dx /= dl; dy /= dl;
  const nx = -dy, ny = dx;
  const amp = 1 + clamp(v / 30, 0, 3);
  const om = 6 + clamp(v / 6, 0, 10);
  const ym = (y0 + y1) / 2, hh = (y1 - y0) / 2;
  const pts = [];
  const n = 7;
  for (let i = 0; i <= n; i++) {
    const u = i / n;
    const wv = Math.sin(t * om - u * 5.5) * amp * u;
    pts.push([px + dx * len * u + nx * wv, ym + dy * len * u + ny * wv, hh * (1 - u * 0.92)]);
  }
  // upper edge from the top of the hinge out to the tip, lower edge back
  const sn = ny < 0 ? -1 : 1;
  ctx.beginPath();
  ctx.moveTo(px, y1);
  for (let i = 1; i <= n; i++) { const [x, y, h] = pts[i]; ctx.lineTo(x + nx * h * sn, y + ny * h * sn); }
  for (let i = n; i >= 1; i--) { const [x, y, h] = pts[i]; ctx.lineTo(x - nx * h * sn, y - ny * h * sn); }
  ctx.lineTo(px, y0);
  ctx.closePath();
  feltFill(ctx, color, 13, shade(color, -0.3), base);
  // a crease that moves with the flutter
  ctx.strokeStyle = withAlpha(DARK, 0.18);
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.moveTo(pts[2][0], pts[2][1]);
  ctx.lineTo(pts[5][0], pts[5][1]);
  ctx.stroke();
}

function duskTint(c, dusk) { return dusk > 0 ? tintOf(c, PAL.duskTop, dusk * 0.3) : c; }

function frontBoat(ctx, ent, P, world, t) {
  const fp = ent.bp.parts.flagPole;
  pennant(ctx, ent, world, fp.x, fp.y1 - 16, fp.y1, 30, P.trim, t);
  // the wet band: paint darkened as high as the water has reached, with a
  // glossy line along its top; it dries slowly after the boat leaves the water
  if (ent.wet > 0.5) {
    const hull = [[-96, 0], [96, 0], [114, 46], [-114, 46]];
    const wet = Math.min(ent.wet, 40);
    ctx.save();
    ctx.beginPath(); roundPoly(ctx, hull, 6); ctx.clip();
    ctx.beginPath();
    ctx.moveTo(-120, -2);
    for (let x = -120; x <= 120; x += 12) ctx.lineTo(x, wet + Math.sin(x * 0.09 + 1.3) * 0.9);
    ctx.lineTo(120, -2);
    ctx.closePath();
    ctx.fillStyle = withAlpha('#0f2c33', 0.34);
    ctx.fill();
    ctx.beginPath();
    for (let x = -120; x <= 120; x += 12) {
      const y = wet + Math.sin(x * 0.09 + 1.3) * 0.9;
      if (x === -120) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = withAlpha('#e9fbff', 0.45);
    ctx.lineWidth = 1.1;
    ctx.stroke();
    ctx.restore();
  }
}

function frontTower(ctx, ent, P, world, t) {
  const v = ent.bp.parts.vane;
  // a thin pole on the finial with a little pennant: the wind at the top
  ctx.strokeStyle = WOOD;
  ctx.lineWidth = 2.6;
  ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(v.x, v.y - 2); ctx.lineTo(v.x, v.y + v.len); ctx.stroke();
  ctx.strokeStyle = withAlpha(DARK, 0.25);
  ctx.lineWidth = 0.8;
  ctx.beginPath(); ctx.moveTo(v.x + 0.9, v.y); ctx.lineTo(v.x + 0.9, v.y + v.len); ctx.stroke();
  pennant(ctx, ent, world, v.x, v.y + v.len - 11, v.y + v.len - 1, 20, P.accent, t);
  ctx.fillStyle = WOOD;
  ctx.beginPath(); ctx.arc(v.x, v.y + 1, 4.4, 0, TAU); ctx.fill();
  ctx.fillStyle = withAlpha('#fff8e8', 0.55);
  ctx.beginPath(); ctx.arc(v.x - 1.4, v.y + 2.4, 1.5, 0, TAU); ctx.fill();
  ctx.fillStyle = WOOD;
  ctx.beginPath(); ctx.arc(v.x, v.y + v.len + 1.5, 2.2, 0, TAU); ctx.fill();
}

// Lit windows at dusk throw a little warm light onto their sills.
function duskSills(ctx, L, dusk) {
  if (dusk < 0.05) return;
  ctx.fillStyle = withAlpha(LAMP, 0.28 * dusk);
  for (const h of L.holes) {
    const w = holeHalfW(h) + 3;
    const y = holeBottom(h) - (h.frame || 4.5);
    ctx.beginPath();
    ctx.moveTo(h.x - w, y + 1);
    ctx.lineTo(h.x + w, y + 1);
    ctx.lineTo(h.x + w * 1.25, y - 6);
    ctx.lineTo(h.x - w * 1.25, y - 6);
    ctx.closePath();
    ctx.fill();
  }
}

const FRONT = { boat: frontBoat, tower: frontTower };

// The whole toy in its own frame (origin at the design origin, y up).
function drawBody(ctx, ent, P, t, world, pxScale, loose = 1) {
  const bp = ent.bp;
  const L = layoutFor(bp);
  const dusk = world.dusk || 0;
  drawInterior(ctx, ent, L, t, dusk);
  const sp = spriteFor(ent, P, pxScale, dusk, loose);
  ctx.save();
  ctx.scale(1, -1);
  ctx.drawImage(sp.cv, sp.x0, -sp.y1, sp.w, sp.h);
  ctx.restore();
  const fr = FRONT[bp.id];
  if (fr) fr(ctx, ent, P, world, t);
  duskSills(ctx, L, dusk);
}

// ============================================================ lantern & birds
function drawSwingers(ctx, ent, px, dusk) {
  const P = paintFor(ent.variant);
  for (const s of ent.swingers) {
    if (s.px === null) continue;
    const bx = s.px + Math.sin(s.phi) * s.len, by = s.py - Math.cos(s.phi) * s.len;
    ctx.strokeStyle = PAL.thread;
    ctx.lineWidth = Math.max(1.2 * px, 1);
    ctx.beginPath(); ctx.moveTo(s.px, s.py); ctx.lineTo(bx, by); ctx.stroke();
    ctx.save();
    ctx.translate(bx, by);
    ctx.rotate(s.phi);
    // a turned wooden lantern: bare-wood caps, painted body with ribs
    ctx.fillStyle = dusk > 0 ? mix(P.trim, LAMP, dusk * 0.8) : P.trim;
    ctx.beginPath(); rrect(ctx, -6.5, -16, 13, 13, 5); ctx.fill();
    ctx.fillStyle = withAlpha('#fff8e8', 0.3);
    ctx.beginPath(); rrect(ctx, -5, -13, 3, 8, 1.5); ctx.fill();
    ctx.strokeStyle = withAlpha(DARK, 0.25);
    ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.moveTo(0, -15); ctx.lineTo(0, -4); ctx.moveTo(3.5, -15); ctx.lineTo(3.5, -4); ctx.stroke();
    ctx.fillStyle = WOOD;
    ctx.beginPath(); rrect(ctx, -7.5, -3.5, 15, 4, 1.8); ctx.fill();
    ctx.beginPath(); rrect(ctx, -7, -18.5, 14, 3.5, 1.6); ctx.fill();
    ctx.fillStyle = withAlpha(DARK, 0.2);
    ctx.fillRect(-7, -18.5, 14, 1);
    ctx.fillRect(-7.5, -3.5, 15, 1);
    ctx.restore();
  }
}

// Felt birds: perched on the roof (hopping, turning) or flying off at lift-off.
function drawBirds(ctx, ent, t, dusk) {
  const felt = duskTint('#6d8fb3', dusk), dark = duskTint('#56799c', dusk), deep = duskTint('#4f7195', dusk);
  for (const b of ent.birds) {
    if (b.state === 'none') continue;
    const fly = b.state === 'fly' && b.t >= 0;
    const x = b.x, y = b.y + (b.state === 'perch' ? b.hop * 4 + 6 : 0);
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(b.dir, 1);
    const flap = fly ? Math.sin(t * 22 + x * 0.1) : 0;
    // far wing (behind)
    if (fly) {
      ctx.fillStyle = deep;
      ellPath(ctx, -1, 4 + flap * 4, 3.4, 8, -0.3 + flap * 0.5);
      ctx.fill();
    }
    // tail
    ctx.fillStyle = dark;
    ctx.beginPath(); ctx.moveTo(-6, 1); ctx.lineTo(-14, 5.5); ctx.lineTo(-13, 1.5); ctx.lineTo(-7, -2); ctx.closePath(); ctx.fill();
    // body and head (felt)
    ellPath(ctx, 0, 0, 9, 6.8, 0.1);
    feltFill(ctx, felt, 14, deep, '#6d8fb3');
    ellPath(ctx, 1.5, -2.6, 6, 3.4, 0.1);
    ctx.fillStyle = withAlpha('#dfe7ee', 0.55);
    ctx.fill();
    circlePath(ctx, 7, 4.2, 5);
    feltFill(ctx, felt, 14, deep, '#6d8fb3');
    ctx.fillStyle = '#e8a33b';
    ctx.beginPath(); ctx.moveTo(11.2, 5.2); ctx.lineTo(15.5, 3.8); ctx.lineTo(11.2, 2.3); ctx.closePath(); ctx.fill();
    ctx.fillStyle = INK;
    circlePath(ctx, 8.6, 5.2, 1.25); ctx.fill();
    ctx.fillStyle = '#ffffff';
    circlePath(ctx, 8.3, 5.6, 0.4); ctx.fill();
    // near wing: folded, or beating
    ctx.fillStyle = dark;
    if (fly) ellPath(ctx, -1, 3 + flap * 5, 4, 9, 0.2 + flap * 0.6);
    else ellPath(ctx, -2, 0.5, 6.5, 3.6, -0.25);
    ctx.fill();
    ctx.strokeStyle = withAlpha('#e8eef4', 0.5);
    ctx.lineWidth = 0.6;
    ctx.setLineDash(DASH);
    ctx.stroke();
    ctx.setLineDash(NODASH);
    if (!fly) {
      ctx.strokeStyle = '#8a6a4a';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(-1, -6); ctx.lineTo(-1, -8.5); ctx.moveTo(2.5, -6); ctx.lineTo(2.5, -8.5); ctx.stroke();
    }
    ctx.restore();
  }
}

// ============================================================ public API
// Draw one house entity in the world pass.
export function drawHouse(R, ent) {
  const { ctx, world, px } = R;
  const b = ent.body;
  const bp = ent.bp;
  const P = paintFor(ent.variant);
  ctx.save();
  ctx.translate(b.x, b.y);
  ctx.rotate(b.a);
  ctx.translate(-bp.com[0], -bp.com[1]);
  // a touch squashes the toy a little into the cloth
  const sq = ent.squash * 0.03 + ent.shuffle * Math.sin(R.t * 40) * 0.01;
  ctx.scale(1 + sq, 1 - sq);
  drawBody(ctx, ent, P, R.t, world, R.zoom * (R.dpr || 1));
  ctx.restore();
  drawSwingers(ctx, ent, px, world.dusk);
  drawBirds(ctx, ent, R.t, world.dusk);
}

// A floated house leaving the frame: it shrinks and hazes into its place in
// the far sky (upper left), keeping its balloon colours and its resident.
export function drawDepartingHouse(R, dep) {
  const { ctx, cam, world, W, H } = R;
  const ent = dep.ent;
  const k = easeInOut(clamp(dep.t / dep.dur, 0, 1));
  const slot = world.slotFor(dep.slot);
  const hx = cam.sx(ent.body.x), hy = cam.sy(ent.body.y);
  const x = lerp(hx, slot.x, k), y = lerp(hy, slot.y, k);
  const s = lerp(1, slot.scale / cam.zoom, k);
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.translate(-hx, -hy);
  ctx.transform(cam.zoom, 0, 0, -cam.zoom, W / 2 - cam.x * cam.zoom, H / 2 + cam.y * cam.zoom);
  ctx.globalAlpha = 1 - k * 0.25;
  const P = paintFor(ent.variant);
  ctx.save();
  const b = ent.body;
  ctx.translate(b.x, b.y);
  ctx.rotate(b.a);
  ctx.translate(-ent.bp.com[0], -ent.bp.com[1]);
  // shrinking into the haze: a larger sprite drawn smaller is fine, so it is
  // not re-rendered at every step of the way
  drawBody(ctx, ent, P, R.t, world, s * cam.zoom * (R.dpr || 1), 3);
  ctx.restore();
  const Rp = { ...R, px: R.px / s };
  drawButtons(Rp, ent);
  drawStringsFor(Rp, ent.balloons);
  drawBalloonsFor(Rp, ent.balloons);
  ctx.restore();
}

// ============================================================ far-sky minis
// Small far-away house with its balloons (keepsakes, flotilla). Flat shapes
// only — silhouette, paint, balloon colours and the resident's face — so it
// still reads at 20-40 px; hazed towards the sky colour.
const tintCache = new Map();
function tintOf(c, sky, haze) {
  const q = Math.round(haze * 40) / 40;
  const key = c + sky + q;
  let v = tintCache.get(key);
  if (!v) {
    v = q > 0 ? mix(c, sky, q) : c;
    if (tintCache.size > 800) tintCache.clear();
    tintCache.set(key, v);
  }
  return v;
}

let miniEdge = 0;
function polyFill(ctx, pts, color, r = 3) {
  ctx.beginPath(); roundPoly(ctx, pts, r); ctx.fillStyle = color; ctx.fill();
  if (miniEdge) { ctx.strokeStyle = withAlpha(DARK, miniEdge); ctx.stroke(); }
}

// face of the resident in a small window
function miniFace(ctx, kind, x, y, r, T, dir = 1) {
  const f = FELT[kind];
  if (kind === 'bear') {
    ctx.fillStyle = T(f.body);
    circlePath(ctx, x - r * 0.62, y + r * 0.62, r * 0.3); ctx.fill();
    circlePath(ctx, x + r * 0.62, y + r * 0.62, r * 0.3); ctx.fill();
  }
  if (kind === 'giraffe') {
    ctx.fillStyle = T(f.mane);
    circlePath(ctx, x - r * 0.3, y + r * 1.0, r * 0.14); ctx.fill();
    circlePath(ctx, x + r * 0.3, y + r * 1.0, r * 0.14); ctx.fill();
  }
  ctx.fillStyle = T(f.body);
  if (kind === 'giraffe') ellPath(ctx, x, y, r * 0.66, r * 0.9);
  else circlePath(ctx, x, y, r * 0.8);
  ctx.fill();
  if (kind === 'dachshund') {
    ctx.fillStyle = T(f.snout);
    ellPath(ctx, x + dir * r * 0.5, y - r * 0.25, r * 0.5, r * 0.32); ctx.fill();
    ctx.fillStyle = T(f.ear);
    ellPath(ctx, x - dir * r * 0.55, y - r * 0.15, r * 0.24, r * 0.55, dir * 0.3); ctx.fill();
  }
  if (kind === 'bear' || kind === 'giraffe') {
    ctx.fillStyle = T(f.muzzle);
    ellPath(ctx, x, y - r * 0.38, r * 0.42, r * 0.28); ctx.fill();
  }
  ctx.fillStyle = T(INK);
  const ex = kind === 'dachshund' ? x + dir * r * 0.05 : x;
  circlePath(ctx, ex - r * 0.3, y + r * 0.18, r * 0.14); ctx.fill();
  circlePath(ctx, ex + r * 0.3, y + r * 0.18, r * 0.14); ctx.fill();
  if (kind === 'chick' || kind === 'duck') {
    ctx.fillStyle = T(f.beak);
    if (kind === 'duck') ellPath(ctx, x, y - r * 0.22, r * 0.4, r * 0.17);
    else { ctx.beginPath(); ctx.moveTo(x - r * 0.18, y - r * 0.05); ctx.lineTo(x + r * 0.18, y - r * 0.05); ctx.lineTo(x, y - r * 0.4); ctx.closePath(); }
    ctx.fill();
  } else if (kind === 'bear') {
    ctx.fillStyle = T(INK);
    ellPath(ctx, x, y - r * 0.28, r * 0.13, r * 0.09); ctx.fill();
  }
}

// The resident's window grows a little when the mini is tiny, so the face is
// still a face (picture-book licence).
let miniBoost = 1;
function miniWindow(ctx, h0, T, glass, kind, faceR, dir) {
  const b = kind ? miniBoost : 1;
  const h = b === 1 ? h0 : { ...h0, r: h0.r * b, w: h0.w * b, h: h0.h * b };
  ctx.fillStyle = T(WOOD);
  ctx.beginPath(); holePath(ctx, h, (h.frame || 4.5) + 1); ctx.fill();
  ctx.fillStyle = glass;
  ctx.beginPath(); holePath(ctx, h); ctx.fill();
  if (kind) {
    ctx.save();
    ctx.beginPath(); holePath(ctx, h); ctx.clip();
    miniFace(ctx, kind, h.x, holeBottom(h) + faceR * b * 0.95, faceR * b, T, dir);
    ctx.restore();
  }
}

function miniHouse(ctx, bp, P, T, glass, opts) {
  const p = bp.parts;
  const L = layoutFor(bp);
  const kind = bp.resident;
  const dark = T(shade(P.wall, -0.25));
  switch (bp.id) {
    case 'cottage': {
      const w = p.walls, ch = p.chimney;
      polyFill(ctx, rectPts(ch.x0, ch.y0, ch.x1, ch.y1), T(shade(P.roof, -0.12)), 2);
      polyFill(ctx, rectPts(w.x0, 0, w.x1, w.y1), T(P.wall), 3);
      polyFill(ctx, p.roof, T(P.roof), 5);
      const d = p.door;
      ctx.fillStyle = T(P.door);
      ctx.beginPath(); holePath(ctx, { shape: 'arch', x: (d.x0 + d.x1) / 2, y: d.y1 / 2, w: d.x1 - d.x0, h: d.y1 }); ctx.fill();
      miniWindow(ctx, L.holes[0], T, glass, kind, L.holes[0].r * 0.85);
      break;
    }
    case 'tower': {
      ctx.beginPath(); towerFootPath(ctx, bp); ctx.fillStyle = T(shade(P.door, -0.18)); ctx.fill();
      ctx.fillStyle = T(P.trim); ctx.fillRect(-86, 37, 172, 9);
      const w = p.walls;
      polyFill(ctx, [[-w.bx, w.y0], [w.bx, w.y0], [w.tx, w.y1], [-w.tx, w.y1]], T(P.wall), 3);
      polyFill(ctx, p.roof, T(P.roof), 4);
      for (let i = 0; i < 2; i++) {
        const h = L.holes[i];
        miniWindow(ctx, h, T, glass, null);
        // the neck: a spotted strip with its dark mane, off to one side
        ctx.save();
        ctx.beginPath(); holePath(ctx, h); ctx.clip();
        ctx.fillStyle = T(FELT.giraffe.mane);
        ctx.fillRect(h.x - 9, holeBottom(h), 3.5, h.h);
        ctx.fillStyle = T(FELT.giraffe.body);
        ctx.fillRect(h.x - 6, holeBottom(h), 11, h.h);
        ctx.fillStyle = T(FELT.giraffe.spot);
        ellPath(ctx, h.x - 2, h.y - 8, 3, 4); ctx.fill();
        ellPath(ctx, h.x + 1.5, h.y + 6, 3, 4); ctx.fill();
        ctx.restore();
      }
      miniWindow(ctx, L.holes[2], T, glass, kind, L.holes[2].w * 0.44);
      ctx.strokeStyle = T(WOOD); ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(0, p.vane.y); ctx.lineTo(0, p.vane.y + p.vane.len); ctx.stroke();
      polyFill(ctx, [[0, p.vane.y + p.vane.len], [18, p.vane.y + p.vane.len - 5], [0, p.vane.y + p.vane.len - 10]], T(P.accent), 1);
      break;
    }
    case 'boat': {
      const cab = p.cabin, fp = p.flagPole;
      ctx.strokeStyle = T(WOOD); ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(fp.x, fp.y0); ctx.lineTo(fp.x, fp.y1 + 4); ctx.stroke();
      polyFill(ctx, [[fp.x, fp.y1], [fp.x + 28, fp.y1 - 8], [fp.x, fp.y1 - 16]], T(P.trim), 1);
      polyFill(ctx, rectPts(cab.x0, cab.y0, cab.x1, cab.y1 - 2), T(P.wall), 3);
      polyFill(ctx, p.roof, T(P.roof), 4);
      polyFill(ctx, [[-96, 0], [96, 0], [114, 46], [-114, 46]], T(P.accent), 6);
      ctx.fillStyle = T('#f2ead8'); ctx.fillRect(-104, 24, 208, 7);
      ctx.fillStyle = T(WOOD); ctx.fillRect(-118, 40, 236, 8);
      miniWindow(ctx, L.holes[0], T, glass, kind, L.holes[0].r * 0.9);
      break;
    }
    case 'long': {
      const w = p.walls;
      polyFill(ctx, rectPts(w.x0, 0, w.x1, w.y1), T(P.trim), 3);
      polyFill(ctx, p.roof, T(P.door), 4);
      ctx.fillStyle = T(P.roof);
      ctx.beginPath(); holePath(ctx, { shape: 'arch', x: 0, y: 33, w: 30, h: 50 }); ctx.fill();
      // the long dog, one body across the windows
      for (let i = 0; i < 4; i++) {
        const h = L.holes[i];
        miniWindow(ctx, h, T, glass, null);
        ctx.save();
        ctx.beginPath(); holePath(ctx, h); ctx.clip();
        ctx.fillStyle = T(FELT.dachshund.body);
        ctx.beginPath(); rrect(ctx, -140, 34, 250, 17, 8); ctx.fill();
        if (i === 3) miniFace(ctx, kind, h.x - 4, 56, 17, T, 1);
        ctx.restore();
      }
      break;
    }
    case 'stone': {
      const w = p.walls, ch = p.chimney;
      polyFill(ctx, rectPts(ch.x0, ch.y0, ch.x1, ch.y1), T(PAL.stone), 2);
      polyFill(ctx, rectPts(w.x0, 0, w.x1, w.y1), T(PAL.stone), 3);
      ctx.fillStyle = dark;
      for (const y of [25, 47, 69, 91]) ctx.fillRect(w.x0 + 2, y - 1, w.x1 - w.x0 - 4, 2.2);
      ctx.fillStyle = T(mix(PAL.stone2, PAL.stone, 0.4));
      ctx.fillRect(w.x0, 0, w.x1 - w.x0, 24);
      polyFill(ctx, p.roof, T(P.slate), 5);
      const d = p.door;
      ctx.fillStyle = T(WOOD);
      ctx.beginPath(); holePath(ctx, { shape: 'arch', x: (d.x0 + d.x1) / 2, y: (d.y1 + 1) / 2, w: d.x1 - d.x0, h: d.y1 + 1 }); ctx.fill();
      const h = L.holes[0];
      miniWindow(ctx, h, T, glass, kind, h.h * 0.42);
      break;
    }
    default:
  }
  // the resident waves from the window when the flotilla gathers
  if (opts.wave && bp.id !== 'long') {
    const h = L.holes[L.who];
    const a = Math.sin((opts.t || 0) * 12) * 5;
    ctx.fillStyle = T(FELT[kind].body);
    ellPath(ctx, h.x + holeHalfW(h) + 4 + a, holeTop(h) - 2, 6, 8, a * 0.05);
    ctx.fill();
  }
}

export function drawMini(ctx, ks, x, y, scale, opts = {}) {
  const bp = ks.bp;
  if (!bp) return;
  const P = paintFor(ks.variant || 0);
  const haze = clamp(opts.haze || 0, 0, 1);
  const sky = opts.sky || PAL.skyTop;
  const T = (c) => tintOf(c, sky, haze);
  const t = opts.t || 0;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, -scale);
  ctx.rotate(-(ks.tilt || 0) * 0.5);
  // balloons above the roof on their strings (fanned so each colour shows)
  const n = ks.colors.length;
  const top = bp.bounds.h;
  const spread = Math.min(bp.bounds.w * 1.25, 62 * n);
  const tie0 = bp.tieX[0], tie1 = bp.tieX[1];
  ctx.strokeStyle = T(PAL.thread);
  ctx.lineWidth = Math.max(2.5, 0.9 / scale);
  ctx.lineCap = 'round';
  const pos = [];
  for (let i = 0; i < n; i++) {
    const u = n === 1 ? 0.5 : i / (n - 1);
    const bx = (u - 0.5) * spread + Math.sin(t * 0.9 + i) * 6;
    const by = top + 160 + (i % 3) * 38 + Math.sin(i * 2.1) * 18;
    const tx = lerp(tie0, tie1, 0.2 + u * 0.6);
    const ty = bp.topAt(clamp(tx, tie0, tie1));
    pos.push([bx, by]);
    ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(bx, by - 44); ctx.stroke();
  }
  const glass = opts.glow ? mix(ROOM, LAMP, clamp(opts.glow, 0, 1) * 0.85) : T(ROOM);
  // a hairline edge once the mini is big enough to show it
  miniEdge = scale > 0.25 ? 0.28 * (1 - haze) : 0;
  miniBoost = clamp(0.2 / scale, 1, bp.id === 'boat' ? 1.18 : 1.3);
  ctx.lineWidth = 1.2 / scale;
  miniHouse(ctx, bp, P, T, glass, opts);
  miniEdge = 0;
  miniBoost = 1;
  for (let i = 0; i < n; i++) {
    const [bx, by] = pos[i];
    // the same rubber as the big balloons; haze lets the sky show through
    drawBalloonSprite(ctx, bx, by, 38, ks.colors[i], { alpha: 1 - haze * 0.55, dusk: opts.glow || 0 });
  }
  ctx.restore();
}
