import { PAL, withAlpha, mix, shade, softShadow, seeded } from './style.js';
import { TUB, LOG, WORLD } from '../config.js';
import { BLUEPRINTS } from '../houses.js';
import { clamp } from '../util.js';

// ---------------------------------------------------------------------------
// The quilt world. A patchwork quilt lies on a futon; stuffed felt hills stand
// behind it; felt pompom trees, a wooden peg, a wooden log and a tin washtub
// stand on it. The quilt is the weight meter: its front contour dips under a
// heavy house, the patch seams and stitch rows bend with it, the channels of
// its front face flatten and spread, and a darker pressed mark fades slowly.
// Everything here draws what the simulation says (entity.dentAt / markAt,
// wind gusts, balloon heights); nothing is animated for its own sake.
// ---------------------------------------------------------------------------

const DEPTH = WORLD.groundBack;                 // the quilt's far edge (world y of the top band)
const ROWS = [0, 0.3, 0.56, 0.79, 1].map((f) => f * DEPTH); // patch rows, front -> back (perspective)
const ROW_SQUASH = [1, 0.84, 0.71, 0.6];        // fabric prints flatten with depth
const COLW = 96;                                // patch width at the front edge
const STEP = 12;                                // contour sampling (COLW / 8)
const PER = COLW / STEP;
const CONVERGE = 0.1;                           // the back edge is 10% narrower (gentle perspective)
const DENT_FALL = 46;                           // how far back a dent reaches into the quilt
const DUSK_TINT = '#3b4870';                    // evening cools and darkens the cloth (never purple)

// ---------------------------------------------------------------- helpers
function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.ceil(w));
  c.height = Math.max(1, Math.ceil(h));
  return c;
}

// Seamless felt / cotton fibres over whatever is already on a tile.
function fibres(x, N, seed, amount = 1, blot = 1) {
  const r = seeded(seed);
  const wrap = (fn) => {
    for (const ox of [-N, 0, N]) for (const oy of [-N, 0, N]) fn(ox, oy);
  };
  for (let i = 0; i < 12 * blot; i++) {
    const cx = r() * N, cy = r() * N, rr = N * (0.12 + r() * 0.2);
    x.fillStyle = r() < 0.5 ? 'rgba(255,255,255,0.03)' : 'rgba(40,30,20,0.025)';
    wrap((ox, oy) => { x.beginPath(); x.arc(cx + ox, cy + oy, rr, 0, Math.PI * 2); x.fill(); });
  }
  x.lineCap = 'round';
  const n = Math.round(N * N * 0.035 * amount);
  for (let i = 0; i < n; i++) {
    const px = r() * N, py = r() * N, a = r() * Math.PI * 2, l = 1.4 + r() * 3.2;
    x.lineWidth = 0.55 + r() * 0.5;
    x.strokeStyle = r() < 0.5 ? 'rgba(255,255,255,0.2)' : 'rgba(40,30,20,0.13)';
    const ex = Math.cos(a) * l, ey = Math.sin(a) * l;
    const near = px < 6 || py < 6 || px > N - 6 || py > N - 6;
    const draw = (ox, oy) => { x.beginPath(); x.moveTo(px + ox, py + oy); x.lineTo(px + ox + ex, py + oy + ey); x.stroke(); };
    if (near) wrap(draw); else draw(0, 0);
  }
}

// Fabric tiles. k = tile pixels per world unit; drawn with ctx.scale(1/k).
const FABRIC = {
  sage: { kind: 'felt', base: '#afcb8e', S: 96, k: 2, seed: 11 },
  olive: { kind: 'felt', base: '#a0bf80', S: 96, k: 2, seed: 12 },
  pale: { kind: 'felt', base: '#bdd59f', S: 96, k: 2, seed: 13 },
  gingham: { kind: 'gingham', base: '#d6e2bb', ink: '#8db372', S: 13, k: 4, seed: 14 },
  dots: { kind: 'dots', base: '#d3dfb4', ink: '#8fb574', S: 15, k: 4, seed: 15 },
  check: { kind: 'gingham', base: '#b4cf95', ink: '#7aa464', S: 8, k: 4, seed: 16 },
  front: { kind: 'felt', base: '#92b777', S: 96, k: 2, seed: 17 },
  futon: { kind: 'futon', base: '#6f9784', ink: '#5b8271', S: 60, k: 2, seed: 18 },
};
const PLAIN = ['sage', 'olive', 'pale'];
const PRINT = ['gingham', 'dots', 'check'];

const tileCache = new Map();
function fabricTile(id) {
  let c = tileCache.get(id);
  if (c) return c;
  const f = FABRIC[id];
  const N = Math.round(f.S * f.k);
  c = makeCanvas(N, N);
  const x = c.getContext('2d');
  x.fillStyle = f.base;
  x.fillRect(0, 0, N, N);
  if (f.kind === 'felt') {
    fibres(x, N, f.seed, 1, 1);
  } else if (f.kind === 'gingham') {
    // woven check: a band each way, darker where they cross
    x.fillStyle = withAlpha(f.ink, 0.34);
    x.fillRect(0, 0, N / 2, N);
    x.fillRect(0, 0, N, N / 2);
    x.strokeStyle = 'rgba(255,255,255,0.08)';
    x.lineWidth = 1;
    for (let i = 0; i < N; i += 2) { x.beginPath(); x.moveTo(i + 0.5, 0); x.lineTo(i + 0.5, N); x.stroke(); }
    fibres(x, N, f.seed, 0.25, 0);
  } else if (f.kind === 'dots') {
    x.fillStyle = f.ink;
    const r = N * 0.11;
    for (const [px, py] of [[0.25, 0.25], [0.75, 0.75]]) {
      x.beginPath(); x.arc(px * N, py * N, r, 0, Math.PI * 2); x.fill();
    }
    fibres(x, N, f.seed, 0.25, 0);
  } else if (f.kind === 'futon') {
    // cotton futon cover: soft wide stripes
    x.fillStyle = withAlpha(f.ink, 0.22);
    x.fillRect(0, 0, N * 0.18, N);
    x.fillRect(N * 0.5, 0, N * 0.05, N);
    fibres(x, N, f.seed, 0.7, 1);
  }
  tileCache.set(id, c);
  return c;
}

const patCache = new Map();
function fabricPattern(ctx, id) {
  let p = patCache.get(id);
  if (!p) {
    p = ctx.createPattern(fabricTile(id), 'repeat');
    patCache.set(id, p);
  }
  return p;
}

// Fill the current path with a fabric, the print anchored to the world and
// optionally squashed vertically (receding rows).
function fillFabric(ctx, id, squash = 1) {
  const f = FABRIC[id];
  ctx.save();
  ctx.scale(1 / f.k, squash / f.k);
  ctx.fillStyle = fabricPattern(ctx, id);
  ctx.fill();
  ctx.restore();
}

// Hand-sewn running stitch along the current path (world units via px).
function runStitch(ctx, px, scale = 1, alpha = 0.9, groove = 0.28) {
  ctx.lineCap = 'round';
  ctx.setLineDash([]);
  ctx.strokeStyle = withAlpha(PAL.seam, groove);
  ctx.lineWidth = 3 * px * scale;
  ctx.stroke();
  ctx.setLineDash([5.5 * px * scale, 4.5 * px * scale]);
  ctx.strokeStyle = withAlpha(PAL.stitch, alpha);
  ctx.lineWidth = 1.5 * px * scale;
  ctx.stroke();
  ctx.setLineDash([]);
}

// ---------------------------------------------------------------- quilt maths
function dentAt(world, x) {
  let d = 0;
  for (const ent of world.houses) {
    if (ent.ground.kind === 'tub') continue;
    const dn = ent.dent;
    if (x < dn.x0 || x > dn.x0 + dn.n * dn.dx) continue;
    d += ent.dentAt(x);
  }
  return d;
}
function markAt(world, x) {
  let d = 0;
  for (const ent of world.houses) {
    if (ent.ground.kind === 'tub') continue;
    const dn = ent.dent;
    if (x < dn.x0 || x > dn.x0 + dn.n * dn.dx) continue;
    d += ent.markAt(x);
  }
  return d;
}

function quiltThickness(R) {
  return (R.H * 0.09) / R.zoom;
}

// Screen y (CSS px) of the quilt's far edge: everything below it is covered by
// the quilt, its front face and the futon, so backdrops need not paint there.
export function quiltBackScreenY(R) {
  return R.cam.sy(DEPTH + 5);
}

// Where a point at the front edge (x) appears at depth `dep` (gentle perspective).
function xAtDepth(camX, x, dep) {
  return camX + (x - camX) * (1 - (CONVERGE * dep) / DEPTH);
}

// Per-frame samples of the quilt surface: for each row boundary, the drawn
// position of a regular grid of front-edge x's, bent by the dent.
const Q = { x0: 0, n: 0, cap: 0, PX: [], PY: [], D0: null, M0: null };
function quiltSamples(R) {
  if (R._quilt) return R._quilt;
  const { cam, world } = R;
  const cx = cam.x;
  const inv = 1 / (1 - CONVERGE);
  const left = cx + (cam.left - 90 - cx) * inv;
  const right = cx + (cam.right + 90 - cx) * inv;
  const x0 = Math.floor(left / COLW) * COLW;
  const x1 = Math.ceil(right / COLW) * COLW;
  const n = Math.round((x1 - x0) / STEP) + 1;
  if (n > Q.cap) {
    Q.cap = n + 32;
    Q.PX = ROWS.map(() => new Float32Array(Q.cap));
    Q.PY = ROWS.map(() => new Float32Array(Q.cap));
    Q.D0 = new Float32Array(Q.cap);
    Q.M0 = new Float32Array(Q.cap);
  }
  Q.x0 = x0;
  Q.n = n;
  for (let j = 0; j < n; j++) {
    const x = x0 + j * STEP;
    const d = dentAt(world, x);
    Q.D0[j] = d;
    Q.M0[j] = markAt(world, x);
  }
  for (let b = 0; b < ROWS.length; b++) {
    const dep = ROWS[b];
    const f = Math.exp(-(dep * dep) / (DENT_FALL * DENT_FALL));
    const PX = Q.PX[b], PY = Q.PY[b];
    const wob = b > 0 && b < ROWS.length - 1 ? 0.9 : 0;
    for (let j = 0; j < n; j++) {
      const x = x0 + j * STEP;
      const X = xAtDepth(cx, x, dep);
      PX[j] = X;
      let y = dep;
      if (b === 0) y -= Q.D0[j];
      else if (f > 0.004) y -= dentAt(world, X) * f;
      if (wob) y += Math.sin(X * 0.013 + b * 1.7) * wob;
      PY[j] = y;
    }
  }
  R._quilt = Q;
  return Q;
}

function hash2(a, b) {
  let h = (Math.imul(a | 0, 73856093) ^ Math.imul(b | 0, 19349663)) >>> 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0;
  return h;
}

// Alternating plain / print blocks, like a hand-pieced quilt.
function fabricFor(col, row) {
  const h = hash2(col, row);
  return ((col + row) & 1) ? PRINT[h % 3] : PLAIN[h % 3];
}

// ---------------------------------------------------------------- back props
// Everything that stands on the quilt is drawn right after the quilt surface
// (see drawQuiltTop), so nothing is painted behind the cloth by mistake.
export function drawBackProps(R) { quiltSamples(R); }

// ---------------------------------------------------------------- quilt top
export function drawQuiltTop(R) {
  const { ctx, world, cam, px } = R;
  const q = quiltSamples(R);
  const n = q.n;
  const cols = Math.round((n - 1) / PER);
  const col0 = Math.round(q.x0 / COLW);

  // 1. fabric patches, grouped by fabric (and by row for prints: they recede)
  const groups = [];
  for (const id of PLAIN) groups.push({ id, row: -1 });
  for (const id of PRINT) for (let r = 0; r < 4; r++) groups.push({ id, row: r });
  for (const g of groups) {
    let any = false;
    ctx.beginPath();
    for (let r = 0; r < 4; r++) {
      if (g.row >= 0 && g.row !== r) continue;
      const A = r, B = r + 1;
      for (let c = 0; c < cols; c++) {
        if (fabricFor(col0 + c, r) !== g.id) continue;
        any = true;
        const ja = c * PER, jb = ja + PER;
        ctx.moveTo(q.PX[A][ja], q.PY[A][ja]);
        for (let j = ja + 1; j <= jb; j++) ctx.lineTo(q.PX[A][j], q.PY[A][j]);
        for (let j = jb; j >= ja; j--) ctx.lineTo(q.PX[B][j], q.PY[B][j] + (B === 4 ? 1 : 0));
        ctx.closePath();
      }
    }
    if (any) fillFabric(ctx, g.id, g.row >= 0 ? ROW_SQUASH[g.row] : 1);
  }

  // 2. light on the dent: slopes facing the sun (left) catch light, slopes
  //    facing away darken; the pressed mark darkens the nap and fades slowly.
  shadeDent(R, q);

  // 3. pieced seams between patch columns (they bend with the dent)
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  for (let c = 0; c <= cols; c++) {
    const j = c * PER;
    ctx.moveTo(q.PX[0][j], q.PY[0][j]);
    for (let b = 1; b < ROWS.length; b++) ctx.lineTo(q.PX[b][j], q.PY[b][j]);
  }
  ctx.strokeStyle = withAlpha(PAL.seam, 0.5);
  ctx.lineWidth = 1.8 * px;
  ctx.stroke();
  ctx.save();
  ctx.translate(-1.3 * px, 0);
  ctx.strokeStyle = withAlpha('#ffffff', 0.22);
  ctx.lineWidth = 1.1 * px;
  ctx.stroke();
  ctx.restore();

  // 4. three receding rows of quilting stitches
  for (let b = 1; b <= 3; b++) {
    const s = 1 - 0.35 * (ROWS[b] / DEPTH);
    ctx.beginPath();
    ctx.moveTo(q.PX[b][0], q.PY[b][0]);
    for (let j = 1; j < n; j++) ctx.lineTo(q.PX[b][j], q.PY[b][j]);
    runStitch(ctx, px, s, 0.85 - b * 0.08, 0.3);
  }

  // 5. the far edge: a rolled green binding against the hills
  const bx0 = q.PX[4][0], bx1 = q.PX[4][n - 1];
  ctx.fillStyle = withAlpha(PAL.shadow, 0.14);
  ctx.fillRect(bx0, DEPTH - 3, bx1 - bx0, 3);
  ctx.fillStyle = '#86a96c';
  ctx.fillRect(bx0, DEPTH - 0.5, bx1 - bx0, 4);
  ctx.fillStyle = withAlpha('#f4f6e2', 0.4);
  ctx.fillRect(bx0, DEPTH + 2, bx1 - bx0, 1.2);

  // 6. evening
  if (world.dusk > 0.01) {
    ctx.beginPath();
    ctx.moveTo(q.PX[0][0], q.PY[0][0]);
    for (let j = 1; j < n; j++) ctx.lineTo(q.PX[0][j], q.PY[0][j]);
    ctx.lineTo(bx1, DEPTH + 5);
    ctx.lineTo(bx0, DEPTH + 5);
    ctx.closePath();
    ctx.fillStyle = withAlpha(DUSK_TINT, world.dusk * 0.3);
    ctx.fill();
  }

  // 7. what stands on the quilt, back to front
  drawTrees(R);
  for (const ent of world.houses) {
    if (ent.ground.kind === 'tub') drawTubBack(R, ent);
    if (ent.ground.kind === 'log') drawLog(R, ent);
  }
  const post = world.post;
  if (post && post.x > cam.left - 100 && post.x < cam.right + 100) drawPost(R, post);
}

// Dent lighting. Where the quilt slopes into a dent, the side facing the sun
// (upper left) catches light and the side facing away darkens; the pressed
// mark darkens the nap and fades slowly (entity.markAt). Each stretch of
// slope becomes one polygon per depth band, filled with a horizontal gradient
// that follows the samples, so the light changes smoothly (no steps).
const SHADE_BANDS = [[0, 0, 0.4, 1], [0, 0.4, 0.8, 0.72], [0, 0.8, 1, 0.48], [1, 0, 0.5, 0.26], [1, 0.5, 1, 0.1]];
const LIGHT = [255, 246, 220];
function shadeValue(q, pass, j) {
  if (pass === 0) {
    // surface height is -dent: rising to the right faces the sun
    const s = (q.D0[j] - q.D0[j + 1]) / STEP;
    return Math.abs(s) < 0.03 ? 0 : s;
  }
  const m = (q.M0[j] + q.M0[j + 1]) * 0.5;
  return m < 1.5 ? 0 : m;
}
function shadeColor(pass, v) {
  if (pass === 1) return withAlpha(PAL.dent, Math.min(0.22, v / 70));
  if (v > 0) return `rgba(${LIGHT[0]},${LIGHT[1]},${LIGHT[2]},${Math.min(0.24, v * 0.6).toFixed(2)})`;
  return withAlpha(PAL.shadow, Math.min(0.3, -v * 0.7));
}
function shadeDent(R, q) {
  const { ctx } = R;
  const n = q.n;
  const P = (b, t, j) => {
    const b1 = Math.min(ROWS.length - 1, b + 1);
    return [q.PX[b][j] + (q.PX[b1][j] - q.PX[b][j]) * t, q.PY[b][j] + (q.PY[b1][j] - q.PY[b][j]) * t];
  };
  for (let pass = 0; pass < 2; pass++) {
    let j = 0;
    while (j < n - 1) {
      while (j < n - 1 && shadeValue(q, pass, j) === 0) j++;
      if (j >= n - 1) break;
      const j0 = Math.max(0, j - 1);
      let sign = Math.sign(shadeValue(q, pass, j));
      while (j < n - 1 && shadeValue(q, pass, j) !== 0 && Math.sign(shadeValue(q, pass, j)) === sign) j++;
      const j1 = Math.min(n - 1, j + 1);
      const xa = q.PX[0][j0], xb = q.PX[0][j1];
      if (xb - xa < 1) continue;
      const g = ctx.createLinearGradient(xa, 0, xb, 0);
      g.addColorStop(0, shadeColor(pass, 0));
      for (let k = j0; k < j1; k++) {
        const v = k >= j0 + 1 && k <= j1 - 2 ? shadeValue(q, pass, k) : 0;
        const xm = (q.PX[0][k] + q.PX[0][k + 1]) * 0.5;
        g.addColorStop(clamp((xm - xa) / (xb - xa), 0, 1), shadeColor(pass, v));
      }
      g.addColorStop(1, shadeColor(pass, 0));
      ctx.fillStyle = g;
      for (const [b, t0, t1, w] of SHADE_BANDS) {
        ctx.beginPath();
        let p = P(b, t0, j0); ctx.moveTo(p[0], p[1]);
        for (let k = j0 + 1; k <= j1; k++) { p = P(b, t0, k); ctx.lineTo(p[0], p[1]); }
        for (let k = j1; k >= j0; k--) { p = P(b, t1, k); ctx.lineTo(p[0], p[1]); }
        ctx.closePath();
        ctx.globalAlpha = w;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  }
}

// ---------------------------------------------------------------- trees
// Felt pompom trees on stuffed felt trunks: at most three on a screen, at the
// back of the quilt, swaying in the same gusts that push the balloons.
const TREE_GREENS = ['#79a866', '#6c9b5c', '#86b16c'];
const TREE_OCHRE = '#d3a24b';
const treeCache = new Map();

// Trees stand on a fixed lattice along the road (so neighbouring houses never
// plant two in the same spot), with gaps, and never where they would confuse
// a cause: not behind a house, not in the path a floating house drifts along
// (the wind always blows right), not behind the first house's peg balloon.
const TREE_STEP = 330;
const treeSpecCache = new Map();
function treeSpec(k) {
  if (treeSpecCache.has(k)) return treeSpecCache.get(k);
  const seed = Math.abs((k * 7919 + 104723) % 99991) + 7;
  const rnd = seeded(seed);
  let spec = null;
  if (rnd() > 0.3) {
    const x = k * TREE_STEP + (rnd() - 0.5) * 130;
    const hi = Math.round(x / WORLD.spacing);
    const nb = BLUEPRINTS.length;
    const bp = BLUEPRINTS[((hi % nb) + nb) % nb];
    const bodyW = bp.env === 'tub' ? TUB.halfW * 2 + 40 : bp.bounds.w;
    const dx = x - hi * WORLD.spacing;
    const blocked = (dx > -(bodyW / 2 + 72) && dx < bodyW / 2 + 240)
      || (bp.id === 'cottage' && dx > -(bodyW / 2 + 215) && dx < 0);
    if (!blocked) {
      const ochre = rnd() < 0.24;
      spec = {
        x, dep: DEPTH - 22 + rnd() * 10, R: 42 + rnd() * 16, th: 58 + rnd() * 26,
        color: ochre ? TREE_OCHRE : TREE_GREENS[Math.floor(rnd() * 3)], seed,
      };
    }
  }
  if (treeSpecCache.size > 200) treeSpecCache.clear();
  treeSpecCache.set(k, spec);
  return spec;
}

function treeSprites(spec, dusk) {
  const dq = Math.round(dusk * 3) / 3;
  const key = spec.seed + ':' + dq;
  let s = treeCache.get(key);
  if (s) return s;
  if (treeCache.size > 40) {
    for (const v of treeCache.values()) { v.crown.width = v.crown.height = 0; v.trunk.width = v.trunk.height = 0; }
    treeCache.clear();
  }
  const k = 3;                     // sprite pixels per world unit
  const { R, th } = spec;
  const rnd = seeded(spec.seed * 3 + 1);
  const tint = (c, a = 1) => mix(c, '#44557c', dq * 0.42 * a);
  // crown: a cluster of stuffed felt balls, authored y-up (the world is y-up)
  const cw = R * 2.6, ch = R * 2.5;
  const crown = makeCanvas(cw * k, ch * k);
  const x = crown.getContext('2d');
  x.scale(k, k);
  x.translate(cw / 2, ch / 2);
  const lumps = [];
  const nl = 6 + Math.floor(rnd() * 2);
  for (let i = 0; i < nl; i++) {
    const a = Math.PI / 2 + (i / nl) * Math.PI * 2 + (rnd() - 0.5) * 0.4;
    const dist = R * (0.44 + rnd() * 0.1);
    lumps.push({ x: Math.cos(a) * dist, y: Math.sin(a) * dist * 0.86 + R * 0.04, r: R * (0.4 + rnd() * 0.11) });
  }
  lumps.push({ x: -R * 0.05, y: R * 0.05, r: R * 0.6 });
  // top lumps first: the lower ones sit in front, like a pile of pompoms
  lumps.sort((a, b) => b.y - a.y);
  const base = tint(spec.color);
  const light = tint(shade(spec.color, 0.2));
  const dark = tint(shade(spec.color, -0.2));
  const union = () => {
    x.beginPath();
    for (const l of lumps) { x.moveTo(l.x + l.r, l.y); x.arc(l.x, l.y, l.r, 0, Math.PI * 2); }
  };
  // a soft darker rim first so the silhouette reads against the hills
  union();
  x.fillStyle = dark;
  x.fill();
  for (const l of lumps) {
    const g = x.createRadialGradient(l.x - l.r * 0.35, l.y + l.r * 0.4, l.r * 0.1, l.x, l.y, l.r * 1.02);
    g.addColorStop(0, light);
    g.addColorStop(0.55, base);
    g.addColorStop(1, dark);
    x.fillStyle = g;
    x.beginPath();
    x.arc(l.x, l.y, l.r * 0.97, 0, Math.PI * 2);
    x.fill();
  }
  // felt fibres over the whole crown, and the crown's own shadow side
  x.save();
  union();
  x.clip();
  x.globalAlpha = 0.55;
  const tile = makeCanvas(96, 96);
  const tx = tile.getContext('2d');
  fibres(tx, 96, spec.seed, 1.2, 0);
  x.fillStyle = x.createPattern(tile, 'repeat');
  x.fillRect(-cw / 2, -ch / 2, cw, ch);
  x.globalAlpha = 1;
  const g2 = x.createLinearGradient(-R, R, R, -R);
  g2.addColorStop(0, 'rgba(255,248,225,0.10)');
  g2.addColorStop(0.5, 'rgba(255,248,225,0)');
  g2.addColorStop(1, withAlpha(PAL.shadow, 0.2));
  x.fillStyle = g2;
  x.fillRect(-cw / 2, -ch / 2, cw, ch);
  x.restore();
  tile.width = tile.height = 0;

  // trunk: a stuffed felt tube with a seam, flaring at the foot
  const tw = 22, tH = th + R * 0.4;
  const trunk = makeCanvas((tw + 12) * k, (tH + 4) * k);
  const y = trunk.getContext('2d');
  y.scale(k, k);
  y.translate((tw + 12) / 2, 2);
  const tb = tint(PAL.trunk);
  y.beginPath();
  y.moveTo(-tw / 2 - 4, 0);
  y.quadraticCurveTo(-tw / 2 + 2, 4, -tw * 0.3, 16);
  y.lineTo(-tw * 0.26, tH);
  y.lineTo(tw * 0.26, tH);
  y.lineTo(tw * 0.3, 16);
  y.quadraticCurveTo(tw / 2 - 2, 4, tw / 2 + 4, 0);
  y.quadraticCurveTo(0, -2, -tw / 2 - 4, 0);
  y.closePath();
  const tg = y.createLinearGradient(-tw / 2, 0, tw / 2, 0);
  tg.addColorStop(0, tint(shade(PAL.trunk, 0.18)));
  tg.addColorStop(0.45, tb);
  tg.addColorStop(1, tint(shade(PAL.trunk, -0.25)));
  y.fillStyle = tg;
  y.fill();
  y.beginPath();
  y.moveTo(tw * 0.1, 2);
  y.lineTo(tw * 0.08, tH - 2);
  y.setLineDash([2.2, 2]);
  y.strokeStyle = withAlpha('#f0e0c8', 0.55);
  y.lineWidth = 0.9;
  y.stroke();
  s = { crown, trunk, k, cw, ch, tw: tw + 12, tH: tH + 4, crownY: th + R * 0.72 };
  treeCache.set(key, s);
  return s;
}

function drawTrees(R) {
  const { ctx, world, cam } = R;
  const k0 = Math.floor((cam.left - 200) / TREE_STEP), k1 = Math.ceil((cam.right + 200) / TREE_STEP);
  for (let k = k0; k <= k1; k++) {
    const sp = treeSpec(k);
    if (!sp) continue;
    const X = xAtDepth(cam.x, sp.x, sp.dep);
    if (X < cam.left - 120 || X > cam.right + 120) continue;
    const Y = sp.dep - 4;
    const g = world.wind.gustAt(sp.x);
    const sway = (g * 11 + Math.sin(R.t * 1.25 + sp.seed) * 1.6) * world.wind.profile(sp.th + sp.R);
    const s = treeSprites(sp, world.dusk);
    // contact shadow on the quilt (sun upper left: a little to the right)
    softShadow(ctx, X + 7, Y + 1, 20, 5, 0.34);
    // trunk bends (shear), crown rides on top and tips a hair
    ctx.save();
    ctx.transform(1, 0, sway / (sp.th + sp.R * 0.4), 1, X, Y - 1);
    ctx.drawImage(s.trunk, -s.tw / 2, -2, s.tw, s.tH);
    ctx.restore();
    ctx.save();
    ctx.translate(X + sway, Y + s.crownY);
    ctx.rotate(-sway * 0.004);
    ctx.drawImage(s.crown, -s.cw / 2, -s.ch / 2, s.cw, s.ch);
    ctx.restore();
  }
}

// ---------------------------------------------------------------- wooden peg
// A turned wooden peg pressed into the quilt beside the first house. Its knob
// is where the demo balloon's string is tied; the string's pull tips it.
function drawPost(R, post) {
  const { ctx, px } = R;
  const x = post.x, top = post.y;
  const lean = post.lean;
  const bx = x - Math.sin(lean) * top, by = -3;
  const ax = x - bx, ay = top - by;
  const L = Math.hypot(ax, ay);
  const ux = ax / L, uy = ay / L;       // along the peg
  const nx = -uy, ny = ux;              // across (to the left)
  softShadow(ctx, bx + 8, 2, 14, 4, 0.4);
  // quilt fabric dimples around the peg
  ctx.fillStyle = withAlpha(PAL.dent, 0.25);
  ctx.beginPath(); ctx.ellipse(bx, 0.5, 9, 2.4, 0, 0, Math.PI * 2); ctx.fill();
  const w0 = 5, w1 = 3.6;
  const P = (t, s) => [bx + ux * t * L + nx * s, by + uy * t * L + ny * s];
  ctx.beginPath();
  let p = P(0, w0); ctx.moveTo(p[0], p[1]);
  p = P(0.93, w1); ctx.lineTo(p[0], p[1]);
  p = P(0.93, -w1); ctx.lineTo(p[0], p[1]);
  p = P(0, -w0); ctx.lineTo(p[0], p[1]);
  ctx.closePath();
  ctx.fillStyle = PAL.wood;
  ctx.fill();
  // rounded shading: light edge left, dark edge right
  ctx.beginPath();
  p = P(0.02, w0 * 0.75); ctx.moveTo(p[0], p[1]);
  p = P(0.9, w1 * 0.7); ctx.lineTo(p[0], p[1]);
  ctx.strokeStyle = withAlpha('#ffffff', 0.45);
  ctx.lineWidth = 1.8;
  ctx.stroke();
  ctx.beginPath();
  p = P(0.02, -w0 * 0.8); ctx.moveTo(p[0], p[1]);
  p = P(0.92, -w1 * 0.8); ctx.lineTo(p[0], p[1]);
  ctx.strokeStyle = withAlpha(PAL.grain, 0.8);
  ctx.lineWidth = 2;
  ctx.stroke();
  // the knob, with the groove the string is tied in
  const kx = x + ux * 6, ky = top + uy * 6;
  ctx.fillStyle = shade(PAL.wood, 0.05);
  ctx.beginPath(); ctx.arc(kx, ky, 6.5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = withAlpha('#ffffff', 0.4);
  ctx.beginPath(); ctx.arc(kx - 2.2, ky + 2.2, 2.3, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = withAlpha(PAL.grain, 0.9);
  ctx.lineWidth = 1.6;
  ctx.beginPath(); p = P(1, w1 + 0.5); ctx.moveTo(p[0], p[1]); p = P(1, -w1 - 0.5); ctx.lineTo(p[0], p[1]); ctx.stroke();
  void px;
}

// ---------------------------------------------------------------- wooden log
// Seen end-on: the long house seesaws on it. It lies across the quilt, so its
// body recedes into the depth behind its end grain; it has sunk a little.
function drawLog(R, ent) {
  const { ctx, cam, px } = R;
  const x = ent.ground.cx, y = LOG.y, r = LOG.r;
  if (x < cam.left - 100 || x > cam.right + 100) return;
  const back = 34;
  softShadow(ctx, x + 12, 5, r * 1.7, 8, 0.42);
  // bark body receding into the quilt
  const bark = '#8a6446';
  ctx.fillStyle = bark;
  ctx.beginPath();
  ctx.moveTo(x - r, y);
  ctx.lineTo(x - r + 2, y + back);
  ctx.arc(x + 2, y + back, r, Math.PI, 0, true);
  ctx.lineTo(x + r, y);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = withAlpha('#3d2a1c', 0.25);
  ctx.lineWidth = 1.3 * px;
  ctx.beginPath();
  for (const f of [-0.55, -0.1, 0.35, 0.75]) {
    ctx.moveTo(x + f * r, y + r * Math.sqrt(1 - f * f) * 0.9);
    ctx.lineTo(x + f * r + 2, y + back + r * Math.sqrt(1 - f * f) * 0.9);
  }
  ctx.stroke();
  ctx.fillStyle = withAlpha('#ffffff', 0.12);
  ctx.beginPath();
  ctx.moveTo(x - r * 0.8, y + r * 0.55);
  ctx.lineTo(x - r * 0.8 + 2, y + back + r * 0.55);
  ctx.lineTo(x - r * 0.35 + 2, y + back + r * 0.92);
  ctx.lineTo(x - r * 0.35, y + r * 0.92);
  ctx.closePath();
  ctx.fill();
  // end grain
  ctx.fillStyle = '#6f4f37';
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#e1c08f';
  ctx.beginPath(); ctx.arc(x, y, r - 4, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = withAlpha('#b48a5b', 0.85);
  ctx.lineWidth = 1.2 * px;
  for (let k = 1; k <= 3; k++) {
    ctx.beginPath();
    ctx.ellipse(x + 1.2, y - 0.8, (r - 4) * (k / 4) * 1.04, (r - 4) * (k / 4), 0.3, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(x + 1, y - 1);
  ctx.lineTo(x + r * 0.62, y - r * 0.3);
  ctx.stroke();
  ctx.fillStyle = withAlpha('#ffffff', 0.22);
  ctx.beginPath(); ctx.arc(x - 6, y + 6, r * 0.42, 0, Math.PI * 2); ctx.fill();
}

// ---------------------------------------------------------------- the washtub
// A toy tin washtub (たらい): rolled rim, two pressed ridges, loop handles.
// The boat floats in its middle plane (physics waterline TUB.level); the back
// half of the water is drawn behind the boat, the front half over the hull,
// see-through, so the waterline on the hull is plain to see.
const TUB_RX = TUB.halfW + 14;     // outer rim half width
const TUB_RY = 38;                 // rim ellipse (how much of the top we see)
const TUB_BOT = { y: 11, rx: TUB.halfW - 12, ry: 15 };
const WATER_RX = TUB.halfW;
const WATER_RY = TUB_RY * (TUB.halfW / TUB_RX);
export const TUB_WATER = { rx: WATER_RX, ry: WATER_RY, level: TUB.level };

const tinGrad = new Map();
function tinGradient(ctx, cx, dusk) {
  const key = cx + ':' + Math.round(dusk * 10);
  let g = tinGrad.get(key);
  if (g) return g;
  if (tinGrad.size > 8) tinGrad.clear();
  const t = (c) => mix(c, '#4a5876', dusk * 0.35);
  g = ctx.createLinearGradient(cx - TUB_RX, 0, cx + TUB_RX, 0);
  g.addColorStop(0, t('#8f9ba3'));
  g.addColorStop(0.12, t('#b9c3c9'));
  g.addColorStop(0.3, t('#dfe6e9'));
  g.addColorStop(0.42, t('#b3bec5'));
  g.addColorStop(0.75, t('#a4afb6'));
  g.addColorStop(0.93, t('#7f8b93'));
  g.addColorStop(1, t('#8a959c'));
  tinGrad.set(key, g);
  return g;
}

function tubVisible(R, ent) {
  const cx = ent.ground.cx;
  return cx + TUB_RX + 40 > R.cam.left && cx - TUB_RX - 40 < R.cam.right;
}

function waterColor(dusk) { return mix(PAL.water, '#4f6a8f', dusk * 0.45); }

function drawTubBack(R, ent) {
  const { ctx, px, world } = R;
  if (!tubVisible(R, ent)) return;
  const cx = ent.ground.cx, rim = TUB.rim, L = TUB.level;
  const dusk = world.dusk;
  // the tub presses a soft shadow into the quilt
  softShadow(ctx, cx + 14, 6, TUB_BOT.rx * 1.12, 16, 0.45);
  // inner back wall, above the water
  ctx.beginPath();
  ctx.ellipse(cx, rim, TUB_RX - 4, TUB_RY - 3, 0, 0, Math.PI);
  ctx.ellipse(cx, L, WATER_RX, WATER_RY, 0, Math.PI, 0, true);
  ctx.closePath();
  ctx.fillStyle = mix('#8e999f', '#44506a', dusk * 0.35);
  ctx.fill();
  // light reflected off the water onto the inner wall
  ctx.strokeStyle = withAlpha('#e8f4f6', 0.25);
  ctx.lineWidth = 3 * px;
  ctx.beginPath();
  ctx.ellipse(cx, L + 5, WATER_RX - 6, WATER_RY - 1, 0, 0.35, Math.PI - 0.35);
  ctx.stroke();
  // the water surface: lighter far away (sky), deeper near us
  const wc = waterColor(dusk);
  ctx.beginPath();
  ctx.ellipse(cx, L, WATER_RX, WATER_RY, 0, 0, Math.PI * 2);
  ctx.fillStyle = wc;
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(cx, L + WATER_RY * 0.45, WATER_RX * 0.82, WATER_RY * 0.5, 0, 0, Math.PI * 2);
  ctx.fillStyle = withAlpha('#ffffff', 0.14);
  ctx.fill();
  // meniscus against the tin
  ctx.strokeStyle = withAlpha(PAL.waterLine, 0.75);
  ctx.lineWidth = 1.6 * px;
  ctx.beginPath();
  ctx.ellipse(cx, L, WATER_RX, WATER_RY, 0, 0.02, Math.PI - 0.02);
  ctx.stroke();
  // back half of the rolled rim
  rimTube(ctx, cx, 0, Math.PI, dusk, px);
}

function rimTube(ctx, cx, a0, a1, dusk, px) {
  const rim = TUB.rim;
  const t = (c) => mix(c, '#4a5876', dusk * 0.35);
  ctx.lineCap = 'round';
  ctx.strokeStyle = t('#8c979e');
  ctx.lineWidth = 10;
  ctx.beginPath(); ctx.ellipse(cx, rim - 1, TUB_RX, TUB_RY, 0, a0, a1); ctx.stroke();
  ctx.strokeStyle = t('#d4dde1');
  ctx.lineWidth = 7;
  ctx.beginPath(); ctx.ellipse(cx, rim, TUB_RX, TUB_RY, 0, a0, a1); ctx.stroke();
  ctx.strokeStyle = withAlpha('#ffffff', 0.7);
  ctx.lineWidth = 2 * px;
  ctx.beginPath(); ctx.ellipse(cx, rim + 2, TUB_RX, TUB_RY, 0, a0, a1); ctx.stroke();
}

// The boat's hull crosses the water plane between these x (world).
function hullWaterSpan(ent, level) {
  const b = ent.body;
  const pts = ent.bp.local;
  let lo = Infinity, hi = -Infinity;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const ax = b.wx(pts[j][0], pts[j][1]), ay = b.wy(pts[j][0], pts[j][1]);
    const bx = b.wx(pts[i][0], pts[i][1]), by = b.wy(pts[i][0], pts[i][1]);
    if ((ay - level) * (by - level) > 0 || ay === by) continue;
    const x = ax + ((level - ay) / (by - ay)) * (bx - ax);
    lo = Math.min(lo, x); hi = Math.max(hi, x);
  }
  return lo < hi ? [lo, hi] : null;
}

function drawTubFront(R, ent) {
  const { ctx, px, world } = R;
  if (!tubVisible(R, ent)) return;
  const g = ent.ground;
  const cx = g.cx, rim = TUB.rim, L = TUB.level;
  const t = world.sim.t;
  const dusk = world.dusk;
  const wc = waterColor(dusk);
  // front half of the water, over the hull: see-through, deeper = denser
  ctx.beginPath();
  ctx.moveTo(cx - WATER_RX, L);
  for (let x = -WATER_RX + 8; x <= WATER_RX - 8; x += 8) ctx.lineTo(cx + x, g.waterAt(cx + x, t));
  ctx.lineTo(cx + WATER_RX, L);
  ctx.ellipse(cx, L, WATER_RX, WATER_RY, 0, 0, -Math.PI, true);
  ctx.closePath();
  ctx.fillStyle = withAlpha(wc, 0.58);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(cx, L - 9, WATER_RX * 0.97, WATER_RY - 7, 0, Math.PI, Math.PI * 2);
  ctx.fillStyle = withAlpha(mix(wc, '#2c5a66', 0.35), 0.35);
  ctx.fill();
  // the waterline: bright where the hull cuts the surface, faint elsewhere
  ctx.lineCap = 'round';
  ctx.strokeStyle = withAlpha(PAL.waterLine, 0.45);
  ctx.lineWidth = 1.5 * px;
  ctx.beginPath();
  for (let x = -WATER_RX + 10; x <= WATER_RX - 10; x += 8) {
    const y = g.waterAt(cx + x, t);
    if (x === -WATER_RX + 10) ctx.moveTo(cx + x, y); else ctx.lineTo(cx + x, y);
  }
  ctx.stroke();
  const span = ent.state !== 'gone' ? hullWaterSpan(ent, L) : null;
  if (span) {
    const x0 = Math.max(cx - WATER_RX + 6, span[0] - 3), x1 = Math.min(cx + WATER_RX - 6, span[1] + 3);
    if (x1 > x0) {
      ctx.beginPath();
      for (let x = x0; x <= x1 + 0.1; x += Math.max(4, (x1 - x0) / 24)) {
        const y = g.waterAt(x, t) - 2.2;
        if (x === x0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = withAlpha('#1d4650', 0.28);
      ctx.lineWidth = 3 * px;
      ctx.stroke();
      ctx.beginPath();
      for (let x = x0; x <= x1 + 0.1; x += Math.max(4, (x1 - x0) / 24)) {
        const y = g.waterAt(x, t) + 0.6;
        if (x === x0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = withAlpha('#ffffff', 0.92);
      ctx.lineWidth = 2.4 * px;
      ctx.stroke();
    }
  }

  // tin body, front: from the rim's front arc down to the base, tapering
  ctx.beginPath();
  ctx.ellipse(cx, rim, TUB_RX, TUB_RY, 0, Math.PI, Math.PI * 2);
  ctx.lineTo(cx + TUB_BOT.rx, TUB_BOT.y);
  ctx.ellipse(cx, TUB_BOT.y, TUB_BOT.rx, TUB_BOT.ry, 0, 0, -Math.PI, true);
  ctx.closePath();
  ctx.fillStyle = tinGradient(ctx, cx, dusk);
  ctx.fill();
  // darker toward the base, where the quilt shades it
  ctx.save();
  ctx.clip();
  ctx.fillStyle = withAlpha(PAL.shadow, 0.16);
  ctx.beginPath();
  ctx.ellipse(cx, TUB_BOT.y + 2, TUB_BOT.rx + 4, TUB_BOT.ry + 8, 0, Math.PI, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  // two pressed ridges (embossed: light above, dark below)
  for (const f of [0.66, 0.32]) {
    const yy = TUB_BOT.y + (rim - TUB_BOT.y) * f;
    const rx = TUB_BOT.rx + (TUB_RX - TUB_BOT.rx) * f - 2;
    const ry = TUB_BOT.ry + (TUB_RY - TUB_BOT.ry) * f;
    ctx.lineWidth = 2.4 * px;
    ctx.strokeStyle = withAlpha('#ffffff', 0.5);
    ctx.beginPath(); ctx.ellipse(cx, yy + 1.8, rx, ry, 0, Math.PI * 1.03, Math.PI * 1.97); ctx.stroke();
    ctx.strokeStyle = withAlpha('#3e4a52', 0.3);
    ctx.beginPath(); ctx.ellipse(cx, yy - 0.6, rx, ry, 0, Math.PI * 1.03, Math.PI * 1.97); ctx.stroke();
  }
  // loop handles riveted under the rim at both ends
  for (const s of [-1, 1]) {
    const hx = cx + s * (TUB_RX - 3), hy = rim - 14;
    ctx.lineCap = 'round';
    ctx.strokeStyle = mix('#7d8990', '#4a5876', dusk * 0.35);
    ctx.lineWidth = 5.5;
    ctx.beginPath();
    ctx.moveTo(hx, hy + 9);
    ctx.bezierCurveTo(hx + s * 20, hy + 12, hx + s * 22, hy - 10, hx, hy - 7);
    ctx.stroke();
    ctx.strokeStyle = withAlpha('#ffffff', 0.5);
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(hx + s * 2, hy + 10);
    ctx.bezierCurveTo(hx + s * 18, hy + 12, hx + s * 19, hy + 2, hx + s * 17, hy - 2);
    ctx.stroke();
    ctx.fillStyle = '#8a959c';
    ctx.beginPath(); ctx.arc(hx - s * 1, hy + 9, 2.4, 0, Math.PI * 2); ctx.arc(hx - s * 1, hy - 7, 2.4, 0, Math.PI * 2); ctx.fill();
  }
  // front half of the rolled rim, with its shadow on the body
  ctx.strokeStyle = withAlpha('#3e4a52', 0.22);
  ctx.lineWidth = 6;
  ctx.beginPath(); ctx.ellipse(cx, rim - 6, TUB_RX - 2, TUB_RY, 0, Math.PI * 1.02, Math.PI * 1.98); ctx.stroke();
  rimTube(ctx, cx, Math.PI, Math.PI * 2, dusk, px);
}

// ---------------------------------------------------------------- shadows
export function drawShadows(R) {
  const { ctx, world } = R;
  for (const ent of world.houses) {
    if (ent.state === 'gone' || (world.depart && world.depart.ent === ent)) continue;
    const b = ent.body;
    const bp = ent.bp;
    // lowest point of the hull above the ground
    let low = Infinity, lx = b.x;
    for (const [x, y] of bp.local) {
      const wy = b.wy(x, y);
      if (wy < low) { low = wy; lx = b.wx(x, y); }
    }
    const tub = ent.ground.kind === 'tub';
    const floor = tub ? TUB.level : 0;
    const h = Math.max(0, low - floor);
    const k = Math.max(0, 1 - h / 800);
    const w = bp.bounds.w * 0.52;
    const sx = b.x + 0.4 * h + 8;
    const sy = floor + (tub ? 12 : 10) - (tub ? 0 : dentAt(world, sx) * 0.6);
    const water = tub ? 0.7 : 1;
    // a tight core that fades fast, and a wide soft penumbra that grows
    softShadow(ctx, sx, sy, w * (1 + h * 0.0008), 8 + h * 0.01, 0.42 * k * k * k * water);
    softShadow(ctx, sx + h * 0.03, sy + 1, w * (1.1 + h * 0.0022), 12 + h * 0.025, 0.24 * k * k * water);
    // tight contact shadow right under the base while it presses the cloth
    const gap = h * R.zoom;
    const ca = Math.max(0, 1 - gap / 4);
    if (ca > 0.01 && !tub) {
      softShadow(ctx, lx * 0.3 + b.x * 0.7, low + 1, bp.bounds.w * 0.42, 6, 0.55 * ca * Math.min(1, ent.loadFrac + 0.3));
    }
  }
  // balloons cast faint dots, far to the right of them when high
  for (const bl of world.sim.allBalloons()) {
    if (bl.inflating) continue;
    const h = bl.y;
    const a = 0.12 * Math.max(0, 1 - h / 900);
    if (a < 0.01) continue;
    const sx = bl.x + 0.4 * h;
    softShadow(ctx, sx, 12 - dentAt(world, sx) * 0.5, bl.r * (0.7 + h * 0.0005), 4 + h * 0.004, a);
  }
}

// ---------------------------------------------------------------- quilt front
// A cached shading overlay for one quilted channel of the front face
// (authored y-up: row 0 is the bottom of the channel).
let puffSprite = null;
function puffOverlay() {
  if (puffSprite) return puffSprite;
  const w = 64, h = 96;
  const c = makeCanvas(w, h);
  const x = c.getContext('2d');
  // vertical: bottom in shadow, a soft lit band below the top
  let g = x.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, 'rgba(47,64,48,0.36)');
  g.addColorStop(0.25, 'rgba(47,64,48,0.08)');
  g.addColorStop(0.55, 'rgba(255,250,232,0.12)');
  g.addColorStop(0.8, 'rgba(255,250,232,0.28)');
  g.addColorStop(0.94, 'rgba(255,250,232,0.1)');
  g.addColorStop(1, 'rgba(47,64,48,0.08)');
  x.fillStyle = g;
  x.fillRect(0, 0, w, h);
  // across: the channel bulges; lit from the left, pinched at both seams
  g = x.createLinearGradient(0, 0, w, 0);
  g.addColorStop(0, 'rgba(47,64,48,0.3)');
  g.addColorStop(0.12, 'rgba(255,250,232,0.08)');
  g.addColorStop(0.32, 'rgba(255,250,232,0.14)');
  g.addColorStop(0.68, 'rgba(47,64,48,0.03)');
  g.addColorStop(0.9, 'rgba(47,64,48,0.2)');
  g.addColorStop(1, 'rgba(47,64,48,0.38)');
  x.fillStyle = g;
  x.fillRect(0, 0, w, h);
  puffSprite = c;
  return c;
}

let overhang = null;
function overhangSprite() {
  if (overhang) return overhang;
  const c = makeCanvas(4, 64);
  const x = c.getContext('2d');
  // y-up: the top rows (high y) sit right under the upper quilt
  const g = x.createLinearGradient(0, 64, 0, 0);
  g.addColorStop(0, 'rgba(47,64,48,0.42)');
  g.addColorStop(0.22, 'rgba(47,64,48,0.16)');
  g.addColorStop(0.42, 'rgba(255,250,232,0.12)');
  g.addColorStop(0.62, 'rgba(255,250,232,0.0)');
  g.addColorStop(1, 'rgba(47,64,48,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 4, 64);
  overhang = c;
  return c;
}

const PUFF_W = 64;
const lip = (d) => 1.5 + Math.max(0, d) * 0.12;

export function drawQuiltFront(R) {
  const { ctx, world, cam, px } = R;
  const q = quiltSamples(R);
  const n = q.n;
  const T = quiltThickness(R);
  const xa = q.x0, xb = q.x0 + (n - 1) * STEP;

  drawFuton(R, T, xa, xb);

  // front face of the top quilt: from the dented contour (plus a soft lip that
  // bulges over the base of whatever presses into it) down to its thickness
  const face = () => {
    ctx.beginPath();
    ctx.moveTo(xa, -q.D0[0] + lip(q.D0[0]));
    for (let j = 1; j < n; j++) ctx.lineTo(xa + j * STEP, -q.D0[j] + lip(q.D0[j]));
    ctx.lineTo(xb, -T);
    ctx.lineTo(xa, -T);
    ctx.closePath();
  };
  face();
  fillFabric(ctx, 'front');
  ctx.save();
  ctx.clip();
  // quilted channels: each bulges; under load it flattens and spreads
  const sprite = puffOverlay();
  const k0 = Math.floor((cam.left - 80) / PUFF_W), k1 = Math.ceil((cam.right + 80) / PUFF_W);
  const sq = [];
  for (let k = k0; k <= k1; k++) {
    const x0 = k * PUFF_W;
    const d = (Math.max(0, dentAt(world, x0 + 12)) + Math.max(0, dentAt(world, x0 + 32)) + Math.max(0, dentAt(world, x0 + 52))) / 3;
    const s = clamp(d / (T * 0.5), 0, 1);
    sq.push(s);
    const top = -d + 1.5;
    const hh = Math.max(3, top + T);
    const spread = PUFF_W * 0.22 * s;
    ctx.globalAlpha = 1 - 0.35 * s;
    ctx.drawImage(sprite, x0 - spread / 2, -T, PUFF_W + spread, hh);
  }
  ctx.globalAlpha = 1;
  if (world.dusk > 0.01) {
    ctx.fillStyle = withAlpha(DUSK_TINT, world.dusk * 0.3);
    ctx.fillRect(xa, -T - 2, xb - xa, T + 40);
  }
  ctx.restore();

  // pinched seams between channels; a squashed channel pushes them aside
  ctx.lineCap = 'round';
  ctx.beginPath();
  for (let k = k0 + 1; k <= k1; k++) {
    const x = k * PUFF_W;
    const d = Math.max(0, dentAt(world, x));
    const bow = (sq[k - k0 - 1] - sq[k - k0]) * PUFF_W * 0.16;
    const yt = -d + lip(d) - 1;
    ctx.moveTo(x + bow * 0.4, yt);
    ctx.quadraticCurveTo(x + bow * 1.5, (yt - T) / 2, x, -T + 1);
  }
  ctx.strokeStyle = withAlpha(PAL.seam, 0.62);
  ctx.lineWidth = 2.6 * px;
  ctx.stroke();
  ctx.setLineDash([4 * px, 3.5 * px]);
  ctx.strokeStyle = withAlpha(PAL.stitch, 0.45);
  ctx.lineWidth = 1.1 * px;
  ctx.stroke();
  ctx.setLineDash([]);

  // bound front edge: a rolled lip that follows the dent, with its hem stitch
  ctx.beginPath();
  for (let j = 0; j < n; j++) {
    const d = q.D0[j];
    const y = -d + lip(d) - 0.8;
    if (j === 0) ctx.moveTo(xa, y); else ctx.lineTo(xa + j * STEP, y);
  }
  ctx.strokeStyle = withAlpha('#ffffff', 0.32);
  ctx.lineWidth = 2.2 * px;
  ctx.stroke();
  ctx.beginPath();
  for (let j = 0; j < n; j++) {
    const y = -q.D0[j] - 6 - Math.min(3, T * 0.04);
    if (j === 0) ctx.moveTo(xa, y); else ctx.lineTo(xa + j * STEP, y);
  }
  runStitch(ctx, px, 1, 0.9, 0.3);
  // underside of the top quilt where it lies on the futon
  ctx.fillStyle = withAlpha(PAL.shadow, 0.18);
  ctx.fillRect(xa, -T - 0.5, xb - xa, 2.5 * px);
}

// The futon underneath: its own cover, panel seams and tufted ties.
function drawFuton(R, T, xa, xb) {
  const { ctx, cam, world, px } = R;
  const top = -T, bot = cam.bottom - 30;
  if (bot >= top) return;
  ctx.beginPath();
  ctx.rect(xa, bot, xb - xa, top - bot);
  fillFabric(ctx, 'futon');
  // the upper quilt overhangs: a crease of shadow, then the futon's rounded shoulder
  const oh = Math.min(26, T * 0.45);
  ctx.drawImage(overhangSprite(), xa, top - oh, xb - xa, oh);
  // panel seams
  const PW = 330;
  const p0 = Math.floor(cam.left / PW) - 1, p1 = Math.ceil(cam.right / PW) + 1;
  ctx.lineCap = 'round';
  ctx.beginPath();
  for (let k = p0; k <= p1; k++) {
    const x = k * PW + 40;
    ctx.moveTo(x, top - 2);
    ctx.quadraticCurveTo(x + 3, (top + bot) / 2, x, bot);
  }
  ctx.strokeStyle = withAlpha('#4f7349', 0.5);
  ctx.lineWidth = 2.6 * px;
  ctx.stroke();
  ctx.setLineDash([4.5 * px, 4 * px]);
  ctx.strokeStyle = withAlpha(PAL.stitch, 0.55);
  ctx.lineWidth = 1.2 * px;
  ctx.stroke();
  ctx.setLineDash([]);
  // tufts (futon ties): a soft dimple pulled in by a tied cream thread, in rows
  const rowGap = Math.max(46, T * 0.95);
  const TW = 110;
  const t0 = Math.floor((cam.left - 40) / TW), t1 = Math.ceil((cam.right + 40) / TW);
  const knots = [];
  let row = 0;
  for (let y = top - T * 0.55; y > bot + 10; y -= rowGap, row++) {
    for (let k = t0; k <= t1; k++) {
      const x = k * TW + (row % 2 ? TW / 2 : 0) + 20;
      const m = ((x - 40) % PW + PW) % PW;
      if (m < 22 || m > PW - 22) continue;
      knots.push(x, y);
    }
  }
  if (knots.length) {
    // the dimple: in shade below right, catching light above left
    ctx.beginPath();
    for (let i = 0; i < knots.length; i += 2) {
      ctx.moveTo(knots[i] + 9, knots[i + 1] - 1.5);
      ctx.ellipse(knots[i] + 1, knots[i + 1] - 1.5, 8, 5, 0, 0, Math.PI * 2);
    }
    ctx.fillStyle = withAlpha('#2f4a3a', 0.16);
    ctx.fill();
    ctx.beginPath();
    for (let i = 0; i < knots.length; i += 2) {
      ctx.moveTo(knots[i] - 7.5, knots[i + 1] + 1);
      ctx.ellipse(knots[i], knots[i + 1] + 1, 7.5, 4.6, 0, Math.PI, Math.PI * 0.45, true);
    }
    ctx.strokeStyle = withAlpha('#f4f0dc', 0.22);
    ctx.lineWidth = 1.6 * px;
    ctx.stroke();
    // the tied thread: a little knot, its two cut ends hanging to one side
    ctx.beginPath();
    for (let i = 0; i < knots.length; i += 2) {
      const x = knots[i], y = knots[i + 1];
      ctx.moveTo(x + 0.8, y - 0.8); ctx.quadraticCurveTo(x + 2.6, y - 2.4, x + 3.2, y - 5);
      ctx.moveTo(x + 1.4, y - 0.2); ctx.quadraticCurveTo(x + 4, y - 1.2, x + 5.4, y - 3.4);
    }
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#efe4c6';
    ctx.lineWidth = 1.3 * px;
    ctx.stroke();
    ctx.fillStyle = '#efe4c6';
    ctx.beginPath();
    for (let i = 0; i < knots.length; i += 2) {
      ctx.moveTo(knots[i] + 2.1, knots[i + 1]);
      ctx.arc(knots[i], knots[i + 1], 2.1, 0, Math.PI * 2);
    }
    ctx.fill();
  }
  if (world.dusk > 0.01) {
    ctx.fillStyle = withAlpha(DUSK_TINT, world.dusk * 0.32);
    ctx.fillRect(xa, bot, xb - xa, top - bot);
  }
}

// ---------------------------------------------------------------- front props
export function drawFrontProps(R) {
  const { world } = R;
  for (const ent of world.houses) {
    if (ent.ground.kind === 'tub') drawTubFront(R, ent);
  }
  drawGrass(R);
}

// Felt grass tufts along the front edge: they flatten into a dent and lean
// with its slope and with the gusts.
function drawGrass(R) {
  const { ctx, world, cam } = R;
  const step = 34;
  const k0 = Math.floor((cam.left - 40) / step), k1 = Math.ceil((cam.right + 40) / step);
  const back = mix('#6d9c58', DUSK_TINT, world.dusk * 0.3);
  const front = mix('#8dba6c', DUSK_TINT, world.dusk * 0.3);
  for (let pass = 0; pass < 2; pass++) {
    ctx.fillStyle = pass ? front : back;
    ctx.beginPath();
    for (let k = k0; k <= k1; k++) {
      const r = seeded(k * 31 + 7);
      if (r() < 0.55) continue;
      const x = k * step + r() * step;
      // no grass inside the washtub or right in front of the log
      let skip = false;
      for (const ent of world.houses) {
        if (ent.ground.kind === 'tub' && Math.abs(x - ent.ground.cx) < TUB_RX + 24) skip = true;
        if (ent.ground.kind === 'log' && Math.abs(x - ent.ground.cx) < LOG.r + 10) skip = true;
      }
      if (skip) continue;
      const d = dentAt(world, x);
      const slope = dentAt(world, x + 6) - dentAt(world, x - 6);
      const base = -d + 1;
      const g = world.wind.gustAt(x);
      const blades = 3 + Math.floor(r() * 3);
      const flat = 1 - Math.min(0.7, Math.max(0, d) / 30);
      for (let j = 0; j < blades; j++) {
        const hr = r();
        if ((j % 2) !== pass) continue;
        const bx = x + (j - blades / 2) * 3.4;
        const h = (8 + hr * 10) * flat * (pass ? 0.85 : 1);
        const lean = (g * 7 + Math.sin(R.t * 2.1 + x * 0.05) * 1.5) * world.wind.profile(10) + slope * 2.5 + (j - blades / 2) * 1.6;
        ctx.moveTo(bx - 2, base);
        ctx.quadraticCurveTo(bx + lean * 0.3 - 0.5, base + h * 0.6, bx + lean, base + h);
        ctx.quadraticCurveTo(bx + lean * 0.3 + 1.2, base + h * 0.45, bx + 2, base);
      }
    }
    ctx.fill();
  }
}

// ---------------------------------------------------------------- felt hills
// Three stuffed felt hills, a diorama backdrop just behind the quilt: they
// slide past slower than the quilt (parallax) and sink away as we rise.
const HILLS = [
  { p: 0.42, color: '#c4dcc6', amp: 50, base: 98, f: [0.0019, 0.0047], seed: 1, lip: 0.18 },
  { p: 0.58, color: '#b3cf99', amp: 40, base: 58, f: [0.0026, 0.0063], seed: 2, lip: 0.26 },
  { p: 0.74, color: '#9dc083', amp: 30, base: 24, f: [0.0033, 0.0081], seed: 3, lip: 0.32, stitch: true },
];
const ref = { y: null, zoom: null };
const HILL_TILE = 256;
const hillPat = new Map();

function hillY(h, X) {
  return h.base + h.amp * (0.55 * Math.sin(X * h.f[0] + h.seed * 1.7) + 0.3 * Math.sin(X * h.f[1] + h.seed * 4.1) + 0.15 * Math.sin(X * h.f[1] * 2.3 + h.seed))
    + 0.8 * Math.sin(X * 0.09 + h.seed);
}

function hillPattern(ctx, h) {
  let p = hillPat.get(h.seed);
  if (p) return p;
  const c = makeCanvas(HILL_TILE, HILL_TILE);
  const x = c.getContext('2d');
  x.fillStyle = h.color;
  x.fillRect(0, 0, HILL_TILE, HILL_TILE);
  fibres(x, HILL_TILE, 40 + h.seed, 0.9, 0);
  p = ctx.createPattern(c, 'repeat');
  hillPat.set(h.seed, p);
  return p;
}

const hillPts = [];
export function drawHills(R) {
  const { ctx, W, H, cam, world } = R;
  const cur = world.current;
  if (cur) {
    const f = world.frameFor(cur);
    const k = ref.y === null ? 1 : 0.08;
    ref.y = ref.y === null ? f.y : ref.y + (f.y - ref.y) * k;
    ref.zoom = ref.zoom === null ? f.zoom : ref.zoom + (f.zoom - ref.zoom) * k;
  }
  if (ref.y === null) return;
  const z = cam.zoom;
  // portrait screens keep the hills low, so the tall sky stays open
  const aspect = clamp((W / H - 0.46) / 0.9, 0, 1);
  const hs = 0.72 + 0.28 * aspect;
  const backRest = H / 2 - (WORLD.groundBack - ref.y) * z + cam.oy;
  const lift = (cam.y - ref.y) * z;
  const dusk = world.dusk;
  const floorY = Math.min(H + 10, quiltBackScreenY(R) + 6);
  for (let li = 0; li < HILLS.length; li++) {
    const h = HILLS[li];
    const zh = z * 0.9;
    const ox = W / 2 - cam.x * h.p * zh + cam.ox;
    const off = backRest + lift * h.p + 6;
    if (off - (h.base + h.amp) * zh * hs > floorY) continue;
    const X0 = (0 - ox) / zh - 30, X1 = (W - ox) / zh + 30;
    const step = Math.max(5, (X1 - X0) / 110);
    hillPts.length = 0;
    for (let X = X0; X <= X1 + step; X += step) hillPts.push(ox + X * zh, off - hillY(h, X) * zh * hs);
    const n = hillPts.length;
    const path = () => {
      ctx.beginPath();
      ctx.moveTo(hillPts[0], floorY);
      for (let i = 0; i < n; i += 2) ctx.lineTo(hillPts[i], Math.min(floorY, hillPts[i + 1]));
      ctx.lineTo(hillPts[n - 2], floorY);
      ctx.closePath();
    };
    const edge = () => {
      ctx.beginPath();
      ctx.moveTo(hillPts[0], hillPts[1]);
      for (let i = 2; i < n; i += 2) ctx.lineTo(hillPts[i], hillPts[i + 1]);
    };
    // where two felt layers overlap, the back one sits in a little shade
    if (li > 0) {
      edge();
      ctx.lineJoin = 'round';
      ctx.strokeStyle = withAlpha(PAL.shadow, 0.07);
      ctx.lineWidth = 12;
      ctx.stroke();
    }
    path();
    ctx.save();
    ctx.translate(ox, off);
    ctx.scale(0.5, 0.5);
    ctx.fillStyle = hillPattern(ctx, h);
    ctx.fill();
    ctx.restore();
    if (dusk > 0.01) {
      ctx.fillStyle = withAlpha(DUSK_TINT, dusk * (0.32 + li * 0.04));
      ctx.fill();
    }
    // the cut felt edge catches the light
    edge();
    ctx.strokeStyle = withAlpha('#f6f8e8', h.lip * (1 - dusk * 0.6));
    ctx.lineWidth = 1.6;
    ctx.stroke();
    if (h.stitch) {
      ctx.save();
      ctx.translate(0, 7);
      edge();
      ctx.restore();
      ctx.lineCap = 'round';
      ctx.setLineDash([5, 6]);
      ctx.strokeStyle = withAlpha(PAL.stitch, 0.32);
      ctx.lineWidth = 1.3;
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }
}

export { dentAt, markAt, quiltThickness };
