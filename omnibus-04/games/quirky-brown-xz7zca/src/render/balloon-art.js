import { PAL, withAlpha, mix, shade, softShadow } from './style.js';
import { clamp } from '../util.js';

// ---------------------------------------------------------------------------
// Rubber balloons (the only glossy, saturated things), cotton strings (the
// highest-contrast line on screen) and the cloth-covered snap buttons that tie
// them to a house. World pass: y is UP.
//
// Everything here is read off the simulation state:
//   bl.r / bl.inflating  -> size while filling at the roof (lift grows with r^3)
//   bl.tension           -> stretch along the string, wall string pulled straight
//   bl.snap              -> the string twangs when it snaps taut (and on a boing)
//   bl.boing             -> the rubber wobbles
//   bl.grab              -> a held balloon is drawn out towards the finger
//   bl.axis              -> the body leans with its string (lagging on a spring)
//   bl.L, anchor, knot   -> slack string hangs with its true length and drifts
//                           downwind; taut string is straight
// ---------------------------------------------------------------------------

// Balloon shape, in balloon radii (the physics radius r): an egg 1.12 tall : 1
// wide, as wide as the rubber the physics collides, with a short neck and a
// rolled knot below.
const EGG_TOP = 1.0;     // top of the rubber above the centre
const EGG_TIP = 1.06;    // bottom of the body (where it gathers into the neck)
const EGG_HW = 0.92;     // half width
const KNOT = 1.2;        // bottom of the knot: where the string is tied

const TAU = Math.PI * 2;

// Unit egg outline (y down, top first), computed once.
const EGG = (() => {
  const n = 72;
  const pts = [];
  for (let i = 0; i < n; i++) {
    const th = (i / n) * TAU;
    const s = Math.sin(th), c = Math.cos(th);
    const y = c > 0 ? -EGG_TOP * c : -EGG_TIP * c;
    const lower = Math.max(0, -c);
    // fuller shoulders, a body that narrows towards the neck
    const x = EGG_HW * s * (1 + 0.07 * c) * (1 - 0.3 * lower * lower * lower);
    pts.push([x, y]);
  }
  return pts;
})();

function eggPath(x) {
  x.beginPath();
  for (let i = 0; i < EGG.length; i++) {
    const p = EGG[i];
    if (i === 0) x.moveTo(p[0], p[1]); else x.lineTo(p[0], p[1]);
  }
  x.closePath();
}

// ---- colour helpers (sprite build time only) ------------------------------
function hexToHsl(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (mx + mn) / 2;
  if (mx !== mn) {
    const d = mx - mn;
    s = l > 0.5 ? d / (2 - mx - mn) : d / (mx + mn);
    if (mx === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (mx === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h /= 6;
  }
  return [h, s, l];
}
function hslToHex(h, s, l) {
  const f = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  let r, g, b;
  if (s === 0) r = g = b = l;
  else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = f(p, q, h + 1 / 3); g = f(p, q, h); b = f(p, q, h - 1 / 3);
  }
  const to = (v) => Math.round(clamp(v, 0, 1) * 255);
  return '#' + ((1 << 24) | (to(r) << 16) | (to(g) << 8) | to(b)).toString(16).slice(1);
}
// Light coming through stretched rubber: lighter and even more saturated.
function glowOf(hex) {
  const [h, s, l] = hexToHsl(hex);
  return hslToHex(h, Math.min(1, s * 1.08 + 0.05), Math.min(0.8, l + 0.16));
}
// The same rubber in the low evening sun.
function duskOf(hex) { return mix(mix(hex, '#ff8a4a', 0.14), '#3a2c50', 0.12); }

// ---- sprites ---------------------------------------------------------------
// One sprite per colour at a resolution chosen from the backing-store density.
// Sprites are rebuilt (and the old ones freed) only when that density changes.
let U = 0;                      // sprite px per balloon radius
const sprites = new Map();      // colour (+ ':d' for dusk) -> canvas
let highlight = null;           // shared specular highlight (never rotated)

function freeCanvas(c) { if (c) { c.width = 0; c.height = 0; } }

function ensureUnit(R) {
  const dpr = R.dpr || 1;
  const want = clamp(Math.round((64 * dpr) / 16) * 16, 48, 160);
  if (want === U) return;
  U = want;
  for (const c of sprites.values()) freeCanvas(c);
  sprites.clear();
  freeCanvas(highlight);
  highlight = null;
  for (const c of buttonSprites.values()) freeCanvas(c);
  buttonSprites.clear();
}

// Sprite origin (the balloon centre) inside its canvas, in px.
const SPR_OX = 1.05, SPR_OY = EGG_TOP + 0.06;

function balloonSprite(color, dusk) {
  const key = dusk ? color + ':d' : color;
  let c = sprites.get(key);
  if (c) return c;
  const base = dusk ? duskOf(color) : color;
  c = document.createElement('canvas');
  c.width = Math.ceil(2.1 * U);
  c.height = Math.ceil((SPR_OY + KNOT + 0.08) * U);
  const x = c.getContext('2d');
  x.translate(SPR_OX * U, SPR_OY * U);
  x.scale(U, U);
  const px = 1 / U;

  // neck: unstretched rubber, darker and opaque, gathered into a rolled knot
  const neck = shade(base, -0.18);
  x.fillStyle = neck;
  x.beginPath();
  x.moveTo(-0.085, EGG_TIP - 0.07);
  x.quadraticCurveTo(-0.035, 1.1, -0.05, 1.13);
  x.lineTo(0.05, 1.13);
  x.quadraticCurveTo(0.035, 1.1, 0.085, EGG_TIP - 0.07);
  x.closePath();
  x.fill();
  // rolled lip of the knot
  x.fillStyle = shade(base, -0.3);
  x.beginPath();
  x.ellipse(0, 1.155, 0.105, 0.05, 0, 0, TAU);
  x.fill();
  x.fillStyle = withAlpha(shade(base, 0.25), 0.7);
  x.beginPath();
  x.ellipse(-0.03, 1.14, 0.05, 0.018, -0.2, 0, TAU);
  x.fill();

  // body: lit from the upper left
  eggPath(x);
  const g = x.createRadialGradient(-0.36, -0.44, 0.02, -0.2, -0.22, 1.72);
  g.addColorStop(0, shade(base, 0.34));
  g.addColorStop(0.2, shade(base, 0.14));
  g.addColorStop(0.5, base);
  g.addColorStop(0.8, shade(base, -0.16));
  g.addColorStop(1, shade(base, -0.34));
  x.fillStyle = g;
  x.fill();

  x.save();
  eggPath(x);
  x.clip();
  // sunlight passing through the rubber glows on the far (lower right) side
  const glow = glowOf(base);
  const g2 = x.createRadialGradient(0.46, 0.58, 0, 0.46, 0.58, 0.78);
  g2.addColorStop(0, withAlpha(glow, 0.75));
  g2.addColorStop(0.55, withAlpha(glow, 0.3));
  g2.addColorStop(1, withAlpha(glow, 0));
  x.fillStyle = g2;
  x.fillRect(-1.2, -1.2, 2.4, 2.6);
  // near the rim we look through the rubber edge-on: a touch deeper colour
  x.strokeStyle = withAlpha(shade(base, -0.4), 0.22);
  x.lineWidth = 0.1;
  eggPath(x);
  x.stroke();
  // rubber gathers into the neck: fine pleats
  x.strokeStyle = withAlpha(shade(base, -0.45), 0.28);
  x.lineWidth = Math.max(px * 1.2, 0.012);
  x.lineCap = 'round';
  x.beginPath();
  for (const k of [-1, 0, 1]) {
    x.moveTo(k * 0.03, EGG_TIP - 0.02);
    x.quadraticCurveTo(k * 0.07, EGG_TIP - 0.14, k * 0.12, EGG_TIP - 0.26 + Math.abs(k) * 0.05);
  }
  x.stroke();
  x.restore();

  // thin rim where the rubber turns away from us
  eggPath(x);
  x.strokeStyle = withAlpha(shade(base, -0.5), 0.5);
  x.lineWidth = Math.max(px * 1.4, 0.018);
  x.stroke();

  sprites.set(key, c);
  return c;
}

// Specular highlight: a soft window reflection plus a tiny sharp glint, always
// at the upper left (the sun never moves), drawn without the body's rotation.
const HL_W = 0.62, HL_H = 0.72;
function highlightSprite() {
  if (highlight) return highlight;
  const c = document.createElement('canvas');
  c.width = Math.ceil(HL_W * U);
  c.height = Math.ceil(HL_H * U);
  const x = c.getContext('2d');
  x.translate(c.width * 0.42, c.height * 0.55);
  x.scale(U, U);
  // main soft oval, leaning along the shoulder
  x.save();
  x.rotate(0.55);
  x.scale(0.55, 1);
  const g = x.createRadialGradient(0, 0, 0, 0, 0, 0.26);
  g.addColorStop(0, 'rgba(255,255,255,0.95)');
  g.addColorStop(0.45, 'rgba(255,255,255,0.8)');
  g.addColorStop(0.75, 'rgba(255,255,255,0.28)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g;
  x.beginPath(); x.arc(0, 0, 0.26, 0, TAU); x.fill();
  x.restore();
  // small glint above it
  const g2 = x.createRadialGradient(0.15, -0.23, 0, 0.15, -0.23, 0.06);
  g2.addColorStop(0, 'rgba(255,255,255,0.85)');
  g2.addColorStop(0.5, 'rgba(255,255,255,0.55)');
  g2.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g2;
  x.beginPath(); x.arc(0.15, -0.23, 0.06, 0, TAU); x.fill();
  highlight = c;
  return c;
}

// ---- body transform --------------------------------------------------------
// Stretch along the string from its tension (physics-driven, unchanged formula).
function stretchOf(bl) {
  return clamp(1 + 0.1 * (bl.tension - 1), 1, 1.12);
}

// Scale of the body along its own axes (x across, y along the string), plus a
// pull towards a holding finger. Written into a shared scratch object.
const XF = { sx: 1, sy: 1, gc: 1, gs: 0, ge: 0 };
function bodyXform(bl) {
  const s = stretchOf(bl);
  // a boinged balloon wobbles (area kept), ~5.5 Hz, dying with bl.boing
  let wob = 0;
  if (bl.boing > 0.01) {
    const tb = -Math.log(bl.boing) / 4;
    wob = bl.boing * Math.sin(tb * TAU * 5.5) * 0.14;
  }
  XF.sx = (1 / Math.sqrt(s)) * (1 + wob);
  XF.sy = s * (1 - wob);
  // held by a finger: the rubber is drawn out towards it, as far as the
  // (capped) hand spring actually pulls
  XF.ge = 0;
  if (bl.grab) {
    const dx = bl.grab.x - bl.x, dy = bl.grab.y - bl.y;
    const d = Math.hypot(dx, dy);
    if (d > 0.5) {
      const f = clamp(d * 0.1, 0, 1);
      XF.ge = 0.09 * f;
      XF.gc = dx / d; XF.gs = dy / d;
    }
  }
  return XF;
}

// Map a point given in the balloon's own frame (y along the string, up) to world.
function bodyPoint(bl, X, lx, ly, out) {
  let x = lx * X.sx, y = ly * X.sy;
  const c = Math.cos(-bl.axis), s = Math.sin(-bl.axis);
  let wx = x * c - y * s, wy = x * s + y * c;
  if (X.ge) {
    // stretch along the pull direction
    const a = wx * X.gc + wy * X.gs, b = -wx * X.gs + wy * X.gc;
    const a2 = a * (1 + X.ge), b2 = b / (1 + X.ge);
    wx = a2 * X.gc - b2 * X.gs; wy = a2 * X.gs + b2 * X.gc;
  }
  out[0] = bl.x + wx; out[1] = bl.y + wy;
  return out;
}

// Knot position (where the string is tied), world coords.
const K = [0, 0];
function knotInto(bl, out) {
  return bodyPoint(bl, bodyXform(bl), 0, -KNOT * bl.r, out);
}

function anchorWorld(bl, t, out) {
  const a = bl.anchor;
  if (!a) return null;
  if (a.ent) return artPoint(a.ent, a.lx, a.ly, t, out);
  out[0] = a.x; out[1] = a.y;
  return out;
}

// A point on the house (COM-relative local coords) as the house art draws it:
// the toy squashes a little into the cloth when pressed (same as house-art).
function artPoint(ent, lx, ly, t, out) {
  const bp = ent.bp;
  const sq = (ent.squash || 0) * 0.03 + (ent.shuffle || 0) * Math.sin(t * 40) * 0.01;
  const dx = (lx + bp.com[0]) * (1 + sq) - bp.com[0];
  const dy = (ly + bp.com[1]) * (1 - sq) - bp.com[1];
  const b = ent.body;
  out[0] = b.wx(dx, dy); out[1] = b.wy(dx, dy);
  return out;
}

// ---- which balloons ----------------------------------------------------------
const listBuf = [];
function collect(R) {
  const { world } = R;
  listBuf.length = 0;
  const dep = world.depart ? world.depart.ent : null;
  for (const ent of world.houses) {
    if (ent === dep) continue;
    for (const b of ent.balloons) listBuf.push(b);
  }
  for (const b of world.sim.free) listBuf.push(b);
  return listBuf;
}

function onScreen(R, x, y, pad) {
  const c = R.cam;
  return x > c.left - pad && x < c.right + pad && y > c.bottom - pad && y < c.top + pad;
}

export function drawStrings(R) { drawStringsImpl(R, collect(R), true); }
export function drawBalloons(R) { drawBalloonsImpl(R, collect(R), true); }
export function drawStringsFor(R, list) { drawStringsImpl(R, list, false); }
export function drawBalloonsFor(R, list) { drawBalloonsImpl(R, list, false); }

// ---- strings ----------------------------------------------------------------
// Cotton thread: dark core with a thin lit edge on the sun side (upper left).
function threadStroke(ctx, px, build) {
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  build(0, 0);
  ctx.strokeStyle = PAL.thread;
  ctx.lineWidth = 2.5 * px;
  ctx.stroke();
  ctx.beginPath();
  build(-0.65 * px, 0.65 * px);
  ctx.strokeStyle = withAlpha(PAL.threadHi, 0.85);
  ctx.lineWidth = 1 * px;
  ctx.stroke();
}

// Render-side rope: the free part of the string, pinned at the knot and (if
// tied) at the wrap point, with its true length. Gravity and the same wind as
// everything else act on it; when the physics pulls it straight it is drawn
// straight. It never feeds back into the simulation.
const ropes = new WeakMap();
const ROPE_G = 900;       // cotton thread hangs
const ROPE_DRAG = 2.6;    // 1/s: and is carried by the air
const tmpW = { x: 0, y: 0 };

function ropeFor(bl, n, kx, ky, ax, ay, Ls) {
  let rp = ropes.get(bl);
  if (rp && rp.n === n) return rp;
  rp = { n, x: new Float32Array(n + 1), y: new Float32Array(n + 1), px: new Float32Array(n + 1), py: new Float32Array(n + 1), t: null };
  // a fresh string hangs from its tie in a loose loop (a loose balloon's
  // string simply hangs below it)
  // (points evenly spaced along the thread, so nothing jumps on the first step)
  const w = 7;                                   // half width of the loop
  const D = Math.max(0, (Ls - Math.PI * w) / 2); // depth of each strand
  const seg = Ls / n;
  for (let i = 0; i <= n; i++) {
    const s = i * seg;
    let x, y;
    if (ax === null) {
      x = kx; y = ky - s;
    } else if (s <= D) {
      // down from the knot, on the downwind side
      x = kx + w; y = ky - s;
    } else if (s <= D + Math.PI * w) {
      const a = (s - D) / w;
      x = kx + w * Math.cos(a); y = ky - D - w * Math.sin(a);
    } else {
      x = ax - w; y = ay - D + (s - D - Math.PI * w);
    }
    rp.x[i] = rp.px[i] = x;
    rp.y[i] = rp.py[i] = y;
  }
  ropes.set(bl, rp);
  return rp;
}

function stepRope(rp, wind, h, seg, kx, ky, ax, ay, free) {
  const n = rp.n;
  const X = rp.x, Y = rp.y, PX = rp.px, PY = rp.py;
  const last = free ? n : n - 1;
  const damp = Math.exp(-h * 3);   // cotton is limp: waves along it die quickly
  // one wind sample for the whole thread (it is short next to a gust)
  const m = n >> 1;
  wind.at(X[m], Y[m], tmpW);
  for (let i = 1; i <= last; i++) {
    const vx = (X[i] - PX[i]) / h, vy = (Y[i] - PY[i]) / h;
    const axx = ROPE_DRAG * (tmpW.x - vx);
    const ayy = ROPE_DRAG * (tmpW.y - vy) - ROPE_G;
    PX[i] = X[i]; PY[i] = Y[i];
    X[i] += vx * h * damp + axx * h * h;
    Y[i] += vy * h * damp + ayy * h * h;
  }
  X[0] = kx; Y[0] = ky;
  if (!free) { X[n] = ax; Y[n] = ay; }
  for (let it = 0; it < 10; it++) {
    for (let i = 0; i < n; i++) {
      const dx = X[i + 1] - X[i], dy = Y[i + 1] - Y[i];
      const d = Math.sqrt(dx * dx + dy * dy) || 1e-4;
      const diff = (d - seg) / d;
      const wa = i === 0 ? 0 : 1, wb = (i + 1 === n && !free) ? 0 : 1;
      const ws = wa + wb;
      if (!ws) continue;
      const k = diff / ws;
      X[i] += dx * k * wa; Y[i] += dy * k * wa;
      X[i + 1] -= dx * k * wb; Y[i + 1] -= dy * k * wb;
    }
    // a cotton thread resists folding back on itself a little
    for (let i = 0; i + 2 <= n; i++) {
      const dx = X[i + 2] - X[i], dy = Y[i + 2] - Y[i];
      const d = Math.sqrt(dx * dx + dy * dy) || 1e-4;
      const min = seg * 0.9;
      if (d >= min) continue;
      const k = ((min - d) / d) * 0.2;
      const wa = i === 0 ? 0 : 1, wb = (i + 2 === n && !free) ? 0 : 1;
      X[i] -= dx * k * wa; Y[i] -= dy * k * wa;
      X[i + 2] += dx * k * wb; Y[i + 2] += dy * k * wb;
    }
    // it lies on the quilt rather than going through it
    for (let i = 1; i <= last; i++) if (Y[i] < 1) Y[i] = 1;
  }
}

// The free string of one balloon, from the wrap point (or post) to the knot.
//   taut (the physics string is at full length): straight, and it twangs when
//     it has just snapped tight (~8 Hz, ~5 px, dying in ~0.25 s)
//   a little slack (a bounce after the snap, a bob): the spare length shows as
//     one smooth bow to the downwind side — exactly as much bow as spare length
//   very slack (rising from the roof, pulled down by a finger, loose): the rope
//     hangs and drifts; the two are blended so nothing pops
const A = [0, 0];
const BX = new Float32Array(40), BY = new Float32Array(40);
function drawFreeString(R, bl) {
  const { ctx, px, world } = R;
  const t = R.t;
  knotInto(bl, K);
  const kx = K[0], ky = K[1];
  const hasA = !!anchorWorld(bl, t, A);
  const ax = hasA ? A[0] : null, ay = hasA ? A[1] : null;
  // the physics ties the string to the balloon's centre; the drawn string
  // ends at the knot, so it is shorter by the knot's (stretched) offset
  const knotLen = Math.hypot(bl.x - kx, bl.y - ky);
  const Ls = Math.max(8, bl.L - knotLen);
  const n = clamp(Math.round(bl.L / 17), 6, 18);
  const rp = ropeFor(bl, n, kx, ky, ax, ay, Ls);
  const seg = Ls / n;
  const chord = hasA ? Math.hypot(kx - ax, ky - ay) : 0;
  const taut = hasA && (Math.hypot(bl.x - ax, bl.y - ay) >= bl.L - 0.8 || chord >= Ls - 0.3);
  const excess = taut ? 0 : hasA ? Math.max(0, Ls - chord) : Ls;
  const slackR = excess / Ls;
  const wSim = !hasA ? 1 : taut ? 0 : smooth01((slackR - 0.035) / 0.07);

  // twang from the snap (also after a boing)
  let tw = 0;
  if (bl.snap > 0.02 && hasA) {
    const ts = -Math.log(bl.snap) / 5;
    tw = bl.snap * 5 * px * Math.sin(ts * TAU * 8) * clamp(chord / 90, 0.3, 1);
  }
  // analytic shape: half-sine bow across the chord (knot -> anchor)
  if (hasA) {
    const dx = ax - kx, dy = ay - ky;
    const d = chord || 1;
    let nx = -dy / d, ny = dx / d;
    if (nx * 1 + ny * -0.3 < 0) { nx = -nx; ny = -ny; }   // bow to the downwind side
    const bow = Math.min(0.35 * d, (2 / Math.PI) * Math.sqrt(d * excess));
    const amp = bow + tw;
    for (let i = 0; i <= n; i++) {
      const u = i / n, f = Math.sin(Math.PI * u) * amp;
      BX[i] = kx + dx * u + nx * f;
      BY[i] = ky + dy * u + ny * f;
    }
  }

  // advance the rope by the time since it was last drawn
  let dt = rp.t === null ? 0.25 : t - rp.t;
  rp.t = t;
  if (wSim <= 0) {
    // it follows the drawn shape, ready to take over when the string goes limp
    for (let i = 0; i <= n; i++) {
      rp.x[i] = rp.px[i] = BX[i];
      rp.y[i] = rp.py[i] = BY[i];
    }
  } else if (dt > 0) {
    dt = Math.min(dt, 0.75);
    const steps = Math.ceil(dt / (1 / 60));
    const h = dt / steps;
    for (let s = 0; s < steps; s++) stepRope(rp, world.wind, h, seg, kx, ky, ax, ay, !hasA);
  }

  if (wSim <= 0 && Math.abs(BX[n >> 1] - (kx + ax) / 2) + Math.abs(BY[n >> 1] - (ky + ay) / 2) < 0.05 * px) {
    threadStroke(ctx, px, (ox, oy) => { ctx.moveTo(ax + ox, ay + oy); ctx.lineTo(kx + ox, ky + oy); });
    return;
  }
  const X = rp.x, Y = rp.y;
  const w = wSim;
  threadStroke(ctx, px, (ox, oy) => {
    const P = (i, o) => (o ? (w >= 1 ? Y[i] : BY[i] + (Y[i] - BY[i]) * w) : (w >= 1 ? X[i] : BX[i] + (X[i] - BX[i]) * w));
    ctx.moveTo(P(0, 0) + ox, P(0, 1) + oy);
    for (let i = 1; i < n; i++) {
      ctx.quadraticCurveTo(P(i, 0) + ox, P(i, 1) + oy, (P(i, 0) + P(i + 1, 0)) / 2 + ox, (P(i, 1) + P(i + 1, 1)) / 2 + oy);
    }
    ctx.lineTo(P(n, 0) + ox, P(n, 1) + oy);
  });
}

function smooth01(x) {
  const u = clamp(x, 0, 1);
  return u * u * (3 - 2 * u);
}

function drawStringsImpl(R, list, cull) {
  for (const bl of list) {
    if (cull && !onScreen(R, bl.x, bl.y, bl.L + 120)) continue;
    drawFreeString(R, bl);
  }
}

// ---- balloons ----------------------------------------------------------------
function drawBalloonsImpl(R, list, cull) {
  const { ctx, world } = R;
  ensureUnit(R);
  const hl = highlightSprite();
  const ga = ctx.globalAlpha;
  const dusk = world.dusk || 0;
  const ox = SPR_OX * U, oy = SPR_OY * U;
  for (const bl of list) {
    if (cull && !onScreen(R, bl.x, bl.y, bl.r * 2 + 20)) continue;
    const r = bl.r;
    if (r < 0.5) continue;
    const X = bodyXform(bl);
    const img = balloonSprite(bl.color, false);
    const k = r / U;
    ctx.save();
    ctx.translate(bl.x, bl.y);
    if (X.ge) {
      // drawn out towards the holding finger: stretch along the pull
      const e1 = 1 + X.ge, e2 = 1 / e1, c = X.gc, s = X.gs;
      const m12 = c * s * (e1 - e2);
      ctx.transform(c * c * e1 + s * s * e2, m12, m12, s * s * e1 + c * c * e2, 0, 0);
    }
    ctx.rotate(-bl.axis);
    ctx.scale(X.sx * k, -X.sy * k);
    ctx.drawImage(img, -ox, -oy);
    if (dusk > 0.01) {
      ctx.globalAlpha = ga * dusk;
      ctx.drawImage(balloonSprite(bl.color, true), -ox, -oy);
      ctx.globalAlpha = ga;
    }
    ctx.restore();
    // while it is still small, keep the knot readable at the roof
    if (bl.inflating && r < bl.rFull * 0.6) drawNozzle(R, bl);
    // the sun's reflection stays at the upper left however the balloon leans
    const hs = r * (0.85 + 0.15 * Math.min(1, X.sx));
    ctx.save();
    ctx.translate(bl.x - r * 0.4 * X.sx, bl.y + r * 0.42 * X.sy);
    ctx.scale(hs / U, -hs / U);
    ctx.globalAlpha = ga * (0.95 - dusk * 0.3) * clamp(r / 12, 0, 1);
    ctx.drawImage(hl, -hl.width * 0.42, -hl.height * 0.55);
    ctx.restore();
  }
  ctx.globalAlpha = ga;
}

// The rubber neck at the wrap point while a small balloon is filling.
function drawNozzle(R, bl) {
  const { ctx } = R;
  knotInto(bl, K);
  const s = Math.max(4, bl.r * 0.2);
  ctx.fillStyle = shade(bl.color, -0.3);
  ctx.beginPath();
  ctx.ellipse(K[0], K[1] + s * 0.25, s * 0.55, s * 0.28, 0, 0, TAU);
  ctx.fill();
  ctx.fillStyle = shade(bl.color, -0.15);
  ctx.beginPath();
  ctx.moveTo(K[0] - s * 0.3, K[1] + s * 0.4);
  ctx.lineTo(K[0] - s * 0.18, bl.y - bl.r * 0.8);
  ctx.lineTo(K[0] + s * 0.18, bl.y - bl.r * 0.8);
  ctx.lineTo(K[0] + s * 0.3, K[1] + s * 0.4);
  ctx.closePath();
  ctx.fill();
}

// ---- snap buttons -------------------------------------------------------------
// A cloth-covered snap button (スナップボタン) in its balloon's colour: matte
// cotton over a domed cap, gathered at the edge, a sewn ring and the stud in the
// middle. The string runs out from under it, up the wall to the roof line.
const BTN_R = 8.5;             // world units
const buttonSprites = new Map();
function buttonSprite(color) {
  let c = buttonSprites.get(color);
  if (c) return c;
  const S = Math.ceil(U * 0.5);           // px per button radius
  c = document.createElement('canvas');
  c.width = c.height = Math.ceil(S * 2.3);
  const x = c.getContext('2d');
  x.translate(c.width / 2, c.height / 2);
  x.scale(S, S);
  const px = 1 / S;
  // cotton dyed in the balloon's colour: a little muted, never glossy
  const cloth = mix(color, '#efe4cf', 0.2);
  const g = x.createRadialGradient(-0.35, -0.4, 0.05, -0.1, -0.1, 1.2);
  g.addColorStop(0, shade(cloth, 0.22));
  g.addColorStop(0.55, cloth);
  g.addColorStop(1, shade(cloth, -0.28));
  x.fillStyle = g;
  x.beginPath(); x.arc(0, 0, 1, 0, TAU); x.fill();
  x.save();
  x.beginPath(); x.arc(0, 0, 1, 0, TAU); x.clip();
  // plain weave
  x.lineWidth = px * 0.8;
  x.strokeStyle = withAlpha(shade(cloth, -0.4), 0.12);
  x.beginPath();
  for (let v = -1.2; v <= 1.2; v += 3.2 * px) { x.moveTo(-1.2, v); x.lineTo(1.2, v + 0.35); }
  x.stroke();
  x.strokeStyle = withAlpha('#ffffff', 0.1);
  x.beginPath();
  for (let v = -1.2; v <= 1.2; v += 3.2 * px) { x.moveTo(v, -1.2); x.lineTo(v - 0.3, 1.2); }
  x.stroke();
  // the cloth is gathered where it wraps under the cap
  x.strokeStyle = withAlpha(shade(cloth, -0.45), 0.2);
  x.lineWidth = 0.16;
  x.beginPath(); x.arc(0, 0, 0.94, 0, TAU); x.stroke();
  x.lineWidth = px * 1.1;
  x.beginPath();
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * TAU + 0.2;
    x.moveTo(Math.cos(a) * 0.98, Math.sin(a) * 0.98);
    x.lineTo(Math.cos(a + 0.05) * 0.8, Math.sin(a + 0.05) * 0.8);
  }
  x.stroke();
  x.restore();
  // sewn ring
  x.setLineDash([0.16, 0.13]);
  x.lineCap = 'round';
  x.strokeStyle = withAlpha(PAL.stitch, 0.9);
  x.lineWidth = Math.max(0.09, px * 1.3);
  x.beginPath(); x.arc(0, 0, 0.66, 0, TAU); x.stroke();
  x.setLineDash([]);
  // the snap's stud pushes the cloth up in the middle
  x.fillStyle = withAlpha(shade(cloth, -0.4), 0.35);
  x.beginPath(); x.arc(0.05, 0.07, 0.3, 0, TAU); x.fill();
  const g2 = x.createRadialGradient(-0.1, -0.1, 0.02, 0, 0, 0.3);
  g2.addColorStop(0, shade(cloth, 0.3));
  g2.addColorStop(1, shade(cloth, -0.08));
  x.fillStyle = g2;
  x.beginPath(); x.arc(0, 0, 0.26, 0, TAU); x.fill();
  // edge
  x.strokeStyle = withAlpha(shade(cloth, -0.55), 0.45);
  x.lineWidth = Math.max(px * 1.2, 0.05);
  x.beginPath(); x.arc(0, 0, 0.99, 0, TAU); x.stroke();
  c.S = S;
  buttonSprites.set(color, c);
  return c;
}

function easeOutBack(t) {
  const c1 = 2.2, c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

// Buttons and the part of each string that runs up the wall. Called right
// after the house is drawn, so the string lies on the wall and the button sits
// on top of the string's end.
const B = [0, 0], W = [0, 0];
export function drawButtons(R, ent) {
  const { ctx, px } = R;
  ensureUnit(R);
  const t = R.world.time;
  const b = ent.body;
  const ga = ctx.globalAlpha;
  for (const bl of ent.balloons) {
    const a = bl.anchor;
    if (!a || a.ent !== ent || a.bx === undefined) continue;
    artPoint(ent, a.bx, a.by, R.t, B);
    artPoint(ent, a.lx, a.ly, R.t, W);
    const age = t - (bl.born === undefined ? -9 : bl.born);
    // 1. the string zips from the button up the wall to the roof line
    const zip = clamp(age / 0.14, 0, 1);
    const ze = 1 - (1 - zip) * (1 - zip);
    const ex = B[0] + (W[0] - B[0]) * ze, ey = B[1] + (W[1] - B[1]) * ze;
    // until the balloon takes up the slack the wall string lies a little loose
    const tf = clamp(bl.tension * 2.5, 0, 1);
    const dx = ex - B[0], dy = ey - B[1];
    const d = Math.hypot(dx, dy) || 1;
    const bow = zip >= 1 ? (1 - tf) * 3 * px * (1 + 0.25 * Math.sin(t * 3 + bl.id)) * clamp(d / 60, 0, 1) : 0;
    const nx = -dy / d, ny = dx / d;
    const side = nx >= 0 ? 1 : -1;
    threadStroke(ctx, px, (ox, oy) => {
      ctx.moveTo(B[0] + ox, B[1] + oy);
      if (bow > 0.05 * px) ctx.quadraticCurveTo((B[0] + ex) / 2 + nx * side * bow * 2 + ox, (B[1] + ey) / 2 + ny * side * bow * 2 + oy, ex + ox, ey + oy);
      else ctx.lineTo(ex + ox, ey + oy);
    });

    // (a loop hooked right at the roof line — the chimney demo — has no button:
    // the string just comes out of the chimney)
    if (Math.hypot(W[0] - B[0], W[1] - B[1]) < 6) {
      ctx.fillStyle = PAL.thread;
      ctx.beginPath(); ctx.ellipse(W[0], W[1] - 1, 3.2, 2, b.a, 0, TAU); ctx.fill();
      continue;
    }
    // 2. the button pops on under the finger
    const pop = age < 0.26 ? easeOutBack(clamp(age / 0.26, 0, 1)) : 1;
    const r = BTN_R * Math.max(0.05, pop);
    // pulled by the string: its top edge lifts a little off the wall
    const pull = clamp(bl.tension, 0, 1.4) / 1.4;
    softShadow(ctx, B[0] + 1.6, B[1] - 2.2, r * 1.12, r * (1.02 + pull * 0.08), 0.32 * ga);
    const img = buttonSprite(bl.color);
    const S = img.S;
    ctx.save();
    ctx.translate(B[0], B[1]);
    ctx.rotate(b.a);
    ctx.scale(1, 1 - pull * 0.08);
    ctx.translate(0, pull * 0.6);
    ctx.rotate(-b.a);
    ctx.scale(r / S, -r / S);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();
  }
}

// For other layers that want to know where a balloon's knot is drawn.
export function balloonKnot(bl) {
  knotInto(bl, K);
  return [K[0], K[1]];
}

// The same rubber balloon, upright, for far-away houses (keepsakes, flotilla):
// centre (x, y) and radius r in the current transform, y up (or y down with
// opts.yDown). The knot's bottom is 1.2 r below the centre. opts.alpha lets the
// sky show through (haze); opts.dusk warms it for the evening.
export function drawBalloonSprite(ctx, x, y, r, color, opts = {}) {
  if (!U) ensureUnit({ dpr: (typeof window !== 'undefined' && window.devicePixelRatio) || 1 });
  const ga = ctx.globalAlpha;
  const a = opts.alpha === undefined ? 1 : opts.alpha;
  const dusk = opts.dusk || 0;
  const flip = opts.yDown ? 1 : -1;
  const k = r / U;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(k, flip * k);
  ctx.globalAlpha = ga * a;
  ctx.drawImage(balloonSprite(color, false), -SPR_OX * U, -SPR_OY * U);
  if (dusk > 0.01) {
    ctx.globalAlpha = ga * a * dusk;
    ctx.drawImage(balloonSprite(color, true), -SPR_OX * U, -SPR_OY * U);
  }
  const hl = highlightSprite();
  ctx.globalAlpha = ga * a * (0.95 - dusk * 0.3);
  ctx.drawImage(hl, -0.4 * U - hl.width * 0.42, -0.42 * U - hl.height * 0.55);
  ctx.restore();
  ctx.globalAlpha = ga;
}
