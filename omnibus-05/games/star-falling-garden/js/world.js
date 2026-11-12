'use strict';
/* ============================================================
   world.js — the garden: terrain, water, rock, hut, background
   ============================================================ */

const PLANET = { x: 10, y: -46, r: 46 };
const CREEKS = [
  { x0: 2.9, x1: 5.5, hl: 0, hr: 0, depth: 1.2, water: -0.62 },
  { x0: 11.55, x1: 14.85, hl: 0, hr: 1.4, depth: 1.25, water: -0.46 },
];
const WALL = { x0: 19.5, x1: 19.95, lo: 1.4, hi: 4.4 };
const CLIFF = { x0: 28.4, x1: 29.6 };
const PLATEAU_H = 4.4, ISLAND_C_H = 1.4;
const HUT = { x: -5.5 };
const BENCH = { x: -2.7, seat: 0.46 };

/* planting beds — the gardener's prepared soil */
const SPOTS = [
  { x: 2.3, kind: 'bridge' },
  { x: 10.9, kind: 'arch' },
  { x: 18.75, kind: 'stairs' },
  { x: 25.0, kind: 'tower' },
];

function planetY(x) {
  const d = x - PLANET.x, q = PLANET.r * PLANET.r - d * d;
  return q > 0 ? PLANET.y + Math.sqrt(q) : PLANET.y;
}
function micro(x) { return 0.045 * Math.sin(1.7 * x + 0.3) + 0.025 * Math.sin(3.3 * x + 1.1); }

function terrainRaw(x) {
  const c0 = CREEKS[0], c1 = CREEKS[1];
  if (x < c0.x0) {
    let h = micro(x) * sstep(c0.x0, c0.x0 - 0.8, x);
    if (x < -6.5) h = lerp(h, planetY(x), sstep(-6.5, -10.5, x));
    return h;
  }
  for (let i = 0; i < 2; i++) {
    const c = CREEKS[i];
    if (x >= c.x0 && x <= c.x1) {
      const half = (c.x1 - c.x0) / 2;
      const u = Math.abs(x - (c.x0 + half)) / half;
      const base = lerp(c.hl, c.hr, smooth((x - c.x0) / (c.x1 - c.x0)));
      return base - c.depth * (1 - Math.pow(u, 4));
    }
  }
  if (x < c1.x0) {
    const e = Math.min(sstep(c0.x1, c0.x1 + 0.8, x), sstep(c1.x0, c1.x0 - 0.8, x));
    return (micro(x) + 0.13 * Math.sin(PI * (x - c0.x1) / (c1.x0 - c0.x1))) * e;
  }
  if (x < WALL.x0) {
    const e = Math.min(sstep(c1.x1, c1.x1 + 0.8, x), sstep(WALL.x0, WALL.x0 - 0.6, x));
    return ISLAND_C_H + micro(x) * e;
  }
  if (x <= WALL.x1) return lerp(WALL.lo, WALL.hi, smooth((x - WALL.x0) / (WALL.x1 - WALL.x0)));
  if (x < CLIFF.x0) {
    const e = Math.min(sstep(WALL.x1, WALL.x1 + 0.7, x), sstep(CLIFF.x0, CLIFF.x0 - 0.7, x));
    return PLATEAU_H + (micro(x) * 0.8 + 0.05 * Math.sin(x * 0.9)) * e;
  }
  if (x < CLIFF.x1) return lerp(PLATEAU_H, planetY(CLIFF.x1), Math.pow(smooth((x - CLIFF.x0) / (CLIFF.x1 - CLIFF.x0)), 0.8));
  return planetY(x);
}

/* dynamic ground deformation (heaving soil) */
const Bumps = [];
function addBump(x, w) { const b = { x, w, s: new Spring(0, 60, 9) }; Bumps.push(b); return b; }
function terrainY(x) {
  let h = terrainRaw(x);
  for (let i = 0; i < Bumps.length; i++) {
    const b = Bumps[i]; const u = (x - b.x) / b.w;
    if (u > -3 && u < 3) h += b.s.v * Math.exp(-u * u);
  }
  return h;
}
function terrainSlope(x) { return (terrainY(x + 0.03) - terrainY(x - 0.03)) / 0.06; }

/* ---------- light registry (filled every frame) ---------- */
const Lights = {
  list: [],
  clear() { this.list.length = 0; },
  add(x, y, i, r, kind = 'warm') { if (i > 0.01) this.list.push({ x, y, i, r, kind }); },
  /* scalar light level at a point */
  at(x, y) {
    let v = 0;
    for (const L of this.list) {
      const dx = x - L.x, dy = y - L.y, d2 = (dx * dx + dy * dy) / (L.r * L.r);
      if (d2 < 4) v += L.i / (1 + d2 * 3);
    }
    return v;
  },
  /* dominant direction & colour for shading characters */
  field(x, y) {
    let wx = 0, wy = 0, warm = 0, green = 0;
    for (const L of this.list) {
      const dx = L.x - x, dy = L.y - y, d = Math.hypot(dx, dy) + 0.05;
      const f = L.i / (1 + (d * d) / (L.r * L.r) * 2.5);
      if (f < 0.01) continue;
      wx += (dx / d) * f; wy += (dy / d) * f;
      if (L.kind === 'plant') green += f; else warm += f;
    }
    return { dx: wx, dy: wy, warm, green, total: warm + green };
  },
};

/* ---------- world decorations (generated once) ---------- */
const World = {
  blades: [], pebbles: [], stones: [], bankStones: [], clouds: [], tufts: [],
  grassRanges: [[-14, CREEKS[0].x0 + 0.05], [CREEKS[0].x1 - 0.05, CREEKS[1].x0 + 0.05], [CREEKS[1].x1 - 0.05, WALL.x0 + 0.03], [WALL.x1 - 0.03, CLIFF.x0 + 0.1]],
  path: null, x0: 0, x1: 0,
  waterEdges: [],

  init() {
    for (const [a, b] of this.grassRanges) {
      for (let x = a; x < b; x += wrnd(0.035, 0.07)) {
        this.blades.push({ x, h: wrnd(0.07, 0.2) * (WR() < 0.08 ? 1.6 : 1), lean: wrnd(-0.05, 0.05), ph: wrnd(0, TAU), bend: 0 });
      }
    }
    for (let x = -13; x < 34; x += wrnd(0.25, 0.7)) {
      if (x > CREEKS[0].x0 && x < CREEKS[0].x1) continue;
      if (x > CREEKS[1].x0 && x < CREEKS[1].x1) continue;
      this.pebbles.push({ x, d: wrnd(0.2, 2.2), rx: wrnd(0.04, 0.12), ry: wrnd(0.03, 0.07), rot: wrnd(0, PI), sh: wrnd(0, 1) });
    }
    // rock faces: wall and cliff
    const face = (xa, xb, ya, yb, n, sz) => {
      for (let k = 0; k < n; k++) {
        const y = lerp(ya, yb, (k + wrnd(0.1, 0.9)) / n);
        let lo = xa, hi = xb;
        const up = yb > ya ? 1 : -1;
        for (let it = 0; it < 30; it++) {
          const m = (lo + hi) / 2;
          const above = terrainRaw(m) > y;
          if ((above && up > 0) || (!above && up < 0)) hi = m; else lo = m;
        }
        const x = (lo + hi) / 2;
        this.stones.push({ x: x + wrnd(-0.08, 0.02) * up, y, w: sz * wrnd(0.8, 1.3), h: sz * wrnd(0.55, 0.85), rot: wrnd(-0.3, 0.3), sh: wrnd(0, 1), v: this.stoneVerts() });
      }
    };
    face(WALL.x0 - 0.05, WALL.x1 + 0.05, WALL.lo + 0.15, WALL.hi - 0.1, 11, 0.34);
    face(CLIFF.x0 - 0.1, CLIFF.x1 + 0.3, PLATEAU_H - 0.15, planetY(CLIFF.x1) + 0.3, 16, 0.5);
    // stones on the creek lips: they stop stars rolling into the water
    for (const c of CREEKS) {
      this.bankStones.push({ x: c.x0 - 0.1, s: 0.13, v: this.stoneVerts() }, { x: c.x0 - 0.28, s: 0.08, v: this.stoneVerts() });
      this.bankStones.push({ x: c.x1 + 0.12, s: 0.12, v: this.stoneVerts() }, { x: c.x1 + 0.3, s: 0.07, v: this.stoneVerts() });
      // where the water surface meets the banks
      const find = (a, b) => { let lo = a, hi = b; const fa = terrainRaw(a) - c.water; for (let it = 0; it < 40; it++) { const m = (lo + hi) / 2; if ((terrainRaw(m) - c.water) * fa > 0) lo = m; else hi = m; } return (lo + hi) / 2; };
      const mid = (c.x0 + c.x1) / 2;
      this.waterEdges.push({ c, xl: find(c.x0, mid), xr: find(c.x1, mid) });
    }
    // grass tufts drawn in front of characters for depth
    for (const [a, b] of this.grassRanges) for (let x = a + 0.3; x < b - 0.2; x += wrnd(0.8, 2.2)) this.tufts.push({ x, s: wrnd(0.7, 1.2), ph: wrnd(0, TAU) });
    // clouds in the high sky (world space)
    for (let k = 0; k < 26; k++) {
      const y = wrnd(34, 50), x = wrnd(-25, 75);
      const puffs = [];
      const n = 5 + ((WR() * 5) | 0), w = wrnd(4, 9);
      for (let j = 0; j < n; j++) puffs.push({ dx: (j / (n - 1) - 0.5) * w + wrnd(-0.4, 0.4), dy: wrnd(-0.3, 0.8) * (1 - Math.abs(j / (n - 1) - 0.5)), r: wrnd(0.9, 2.0) });
      this.clouds.push({ x, y, puffs, push: 0, pv: 0, a: wrnd(0.12, 0.28), front: WR() < 0.35 });
    }
    // a few low wisps for a sense of height during the catch stage
    for (let k = 0; k < 10; k++) {
      const y = wrnd(15, 28), x = wrnd(12, 40);
      const puffs = [];
      for (let j = 0; j < 4; j++) puffs.push({ dx: (j - 1.5) * wrnd(0.8, 1.4), dy: wrnd(-0.1, 0.3), r: wrnd(0.5, 1.0) });
      this.clouds.push({ x, y, puffs, push: 0, pv: 0, a: wrnd(0.05, 0.1), front: false, drift: wrnd(0.05, 0.15) });
    }
  },
  stoneVerts() {
    const v = []; const n = 6 + ((WR() * 3) | 0);
    for (let i = 0; i < n; i++) v.push(wrnd(0.8, 1.1));
    return v;
  },

  buildPath() {
    const x0 = Math.max(-14, Cam.left - 1), x1 = Math.min(36, Cam.right + 1);
    this.x0 = x0; this.x1 = x1;
    if (x1 <= x0) { this.path = null; return; }
    const step = Math.max(0.045, 1.8 / Cam.ppu);
    const p = new Path2D();
    p.moveTo(x0, -34);
    for (let x = x0; x < x1; x += step) p.lineTo(x, terrainY(x));
    p.lineTo(x1, terrainY(x1)); p.lineTo(x1, -34); p.closePath();
    this.path = p;
  },

  soilFill(ctx) {
    if (!this._soil) {
      const g = ctx.createRadialGradient(PLANET.x, PLANET.y, 8, PLANET.x, PLANET.y, PLANET.r + 4.6);
      g.addColorStop(0, '#07050a');
      g.addColorStop(0.6, '#150f0d');
      g.addColorStop(0.86, '#231913');
      g.addColorStop(0.9, '#2c2018');
      g.addColorStop(0.915, '#3a2a1f');
      g.addColorStop(1, '#433124');
      this._soil = g;
    }
    return this._soil;
  },

  drawPlanet(ctx, far) {
    // only matters when zoomed out or high up — the disc under the garden
    ctx.fillStyle = this.soilFill(ctx);
    ctx.beginPath(); ctx.arc(PLANET.x, PLANET.y, PLANET.r, 0, TAU); ctx.fill();
    if (far > 0.01) {
      // grass rim + little silhouette trees along the curve
      ctx.globalAlpha = far;
      ctx.strokeStyle = '#1f3a2b'; ctx.lineWidth = 0.35;
      ctx.beginPath(); ctx.arc(PLANET.x, PLANET.y, PLANET.r - 0.1, 0, TAU); ctx.stroke();
      ctx.fillStyle = '#0d1d1a';
      for (let k = 0; k < 70; k++) {
        const a = PI / 2 + (k / 70) * TAU;
        const dx = Math.cos(a), dy = Math.sin(a);
        const px = PLANET.x + dx * PLANET.r, py = PLANET.y + dy * PLANET.r;
        if (px > -14 && px < 36 && py > -6) continue;
        const h = 0.8 + ((k * 37) % 7) * 0.25;
        ctx.save(); ctx.translate(px, py); ctx.rotate(a - PI / 2);
        ctx.beginPath(); ctx.ellipse(0, h * 0.7, h * 0.35, h * 0.5, 0, 0, TAU); ctx.fill();
        ctx.fillRect(-0.06, 0, 0.12, h * 0.4);
        ctx.restore();
      }
      ctx.globalAlpha = 1;
    }
  },

  /* drawn after the terrain so the whole round world shares the same light */
  drawPlanetLight(ctx, far) {
    if (far > 0.01) {
      // moonlight on the planet's shoulder
      const mp = Backdrop.moonPos();
      const side = mp.x > View.W / 2 ? 1 : -1;
      const lg = ctx.createRadialGradient(PLANET.x + side * PLANET.r * 0.55, PLANET.y + PLANET.r * 0.55, PLANET.r * 0.1, PLANET.x + side * PLANET.r * 0.3, PLANET.y + PLANET.r * 0.3, PLANET.r * 1.1);
      lg.addColorStop(0, 'rgba(120,130,150,' + (0.28 * far).toFixed(3) + ')');
      lg.addColorStop(1, 'rgba(120,130,150,0)');
      ctx.fillStyle = lg;
      ctx.beginPath(); ctx.arc(PLANET.x, PLANET.y, PLANET.r, 0, TAU); ctx.fill();
      ctx.globalCompositeOperation = 'lighter';
      for (let k = 0; k < 60; k++) {
        const a = PI / 2 + ((k * 0.618) % 1) * TAU;
        const px = PLANET.x + Math.cos(a) * (PLANET.r - 0.3), py = PLANET.y + Math.sin(a) * (PLANET.r - 0.3);
        if (px > -14 && px < 36 && py > -6) continue;
        const tw = 0.5 + 0.5 * Math.sin(G.time * 2 + k * 1.7);
        drawGlow(ctx, k % 3 ? 'plant' : 'warm', px, py, 1.6, far * (0.35 + 0.35 * tw));
      }
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
    }
  },

  drawAtmosphere(ctx, far) {
    if (far < 0.01) return;
    const g = ctx.createRadialGradient(PLANET.x, PLANET.y, PLANET.r * 0.98, PLANET.x, PLANET.y, PLANET.r * 1.22);
    g.addColorStop(0, 'rgba(120,190,220,' + (0.42 * far).toFixed(3) + ')');
    g.addColorStop(0.35, 'rgba(70,130,180,' + (0.16 * far).toFixed(3) + ')');
    g.addColorStop(1, 'rgba(40,80,140,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(PLANET.x, PLANET.y, PLANET.r * 1.22, 0, TAU); ctx.fill();
  },

  drawWaterBack(ctx) {
    for (const e of this.waterEdges) {
      const c = e.c;
      ctx.fillStyle = '#081a28';
      ctx.fillRect(e.xl - 0.2, c.water - 3, e.xr - e.xl + 0.4, 3);
    }
  },

  drawTerrain(ctx, t) {
    if (!this.path) return;
    const x0 = this.x0, x1 = this.x1;
    ctx.fillStyle = this.soilFill(ctx);
    ctx.fill(this.path);
    // soil texture, clipped to the ground
    ctx.save();
    ctx.clip(this.path);
    ctx.lineWidth = 0.035;
    for (let k = 0; k < 3; k++) {
      const depth = 0.45 + k * 0.55;
      ctx.strokeStyle = k % 2 ? 'rgba(20,12,9,0.18)' : 'rgba(80,58,42,0.12)';
      ctx.beginPath();
      for (let x = x0; x <= x1; x += 0.25) {
        const y = terrainY(x) - depth - 0.07 * Math.sin(x * 1.3 + k * 2);
        if (x === x0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    for (const p of this.pebbles) {
      if (p.x < x0 - 0.3 || p.x > x1 + 0.3) continue;
      const y = terrainY(p.x) - p.d;
      ctx.fillStyle = p.sh > 0.5 ? 'rgba(92,70,54,0.5)' : 'rgba(18,12,10,0.45)';
      ctx.beginPath(); ctx.ellipse(p.x, y, p.rx, p.ry, p.rot, 0, TAU); ctx.fill();
    }
    ctx.restore();
    // grass band along the walkable top
    for (const [a, b] of this.grassRanges) {
      const aa = Math.max(a, x0), bb = Math.min(b, x1);
      if (bb <= aa) continue;
      ctx.beginPath();
      for (let x = aa; x <= bb; x += 0.08) { const y = terrainY(x) - 0.04; if (x === aa) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
      ctx.lineTo(bb, terrainY(bb) - 0.04);
      ctx.strokeStyle = '#1d3526'; ctx.lineWidth = 0.13; ctx.stroke();
      ctx.strokeStyle = 'rgba(92,130,80,0.35)'; ctx.lineWidth = 0.025; ctx.stroke();
    }
  },

  drawRocks(ctx) {
    const x0 = this.x0 - 1, x1 = this.x1 + 1;
    for (const s of this.stones) {
      if (s.x < x0 || s.x > x1) continue;
      const L = clamp(Lights.at(s.x, s.y) * 0.6, 0, 0.9);
      const base = mixc([46, 49, 58], [150, 128, 96], L);
      ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(s.rot);
      ctx.beginPath();
      const n = s.v.length;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * TAU;
        const x = Math.cos(a) * s.w * 0.5 * s.v[i], y = Math.sin(a) * s.h * 0.5 * s.v[i];
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = css(mixc(base, [30, 32, 38], s.sh * 0.4));
      ctx.fill();
      ctx.strokeStyle = 'rgba(16,16,20,0.6)'; ctx.lineWidth = 0.025; ctx.stroke();
      ctx.beginPath(); ctx.ellipse(-s.w * 0.08, s.h * 0.18, s.w * 0.28, s.h * 0.12, 0, 0, TAU);
      ctx.fillStyle = css(lighten(base, 0.12), 0.35); ctx.fill();
      ctx.restore();
    }
    // moss on the wall lip & cliff lip
    ctx.fillStyle = '#23402c';
    for (const x of [WALL.x1 - 0.05, WALL.x1 + 0.12, CLIFF.x0 + 0.05, CLIFF.x0 + 0.25]) {
      if (x < x0 || x > x1) continue;
      ctx.beginPath(); ctx.ellipse(x, terrainY(x) - 0.05, 0.16, 0.08, 0, 0, TAU); ctx.fill();
    }
    // bank stones
    for (const b of this.bankStones) {
      if (b.x < x0 || b.x > x1) continue;
      const y = terrainY(b.x) + b.s * 0.45;
      const L = clamp(Lights.at(b.x, y) * 0.6, 0, 0.9);
      ctx.fillStyle = css(mixc([58, 60, 66], [170, 146, 110], L));
      ctx.beginPath();
      const n = b.v.length;
      for (let i = 0; i < n; i++) { const a = (i / n) * TAU; const x = b.x + Math.cos(a) * b.s * b.v[i], yy = y + Math.sin(a) * b.s * 0.7 * b.v[i]; if (i) ctx.lineTo(x, yy); else ctx.moveTo(x, yy); }
      ctx.closePath(); ctx.fill();
    }
  },

  drawWaterFront(ctx, t) {
    for (const e of this.waterEdges) {
      const c = e.c;
      if (e.xr < this.x0 || e.xl > this.x1) continue;
      // body between bed and surface
      ctx.beginPath();
      ctx.moveTo(e.xl, c.water);
      for (let x = e.xl; x <= e.xr; x += 0.08) ctx.lineTo(x, Math.min(c.water, terrainY(x)));
      ctx.lineTo(e.xr, c.water);
      ctx.closePath();
      const g = ctx.createLinearGradient(0, c.water, 0, c.water - 0.8);
      g.addColorStop(0, 'rgba(22,60,84,0.92)'); g.addColorStop(1, 'rgba(8,24,38,0.95)');
      ctx.fillStyle = g; ctx.fill();
      // reflections of lights above the water
      ctx.save();
      ctx.beginPath(); ctx.rect(e.xl, c.water - 0.9, e.xr - e.xl, 0.9); ctx.clip();
      ctx.globalCompositeOperation = 'lighter';
      for (const L of Lights.list) {
        if (L.x < e.xl - 1 || L.x > e.xr + 1) continue;
        const h = L.y - c.water;
        if (h < 0 || h > 8) continue;
        const a = L.i * 0.35 * (1 - h / 8);
        for (let k = 0; k < 5; k++) {
          const yy = c.water - 0.08 - k * 0.14;
          const wob = Math.sin(t * 2.2 + k * 1.7 + L.x) * 0.06;
          drawGlow(ctx, L.kind === 'plant' ? 'plant' : 'warm', L.x + wob, yy, 0.35 + k * 0.05, a * (1 - k / 6));
        }
      }
      ctx.restore();
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      // surface shimmer
      ctx.strokeStyle = 'rgba(140,190,215,0.35)'; ctx.lineWidth = 0.02;
      ctx.beginPath();
      for (let x = e.xl; x <= e.xr; x += 0.1) { const y = c.water + Math.sin(x * 6 + t * 1.8) * 0.012; if (x === e.xl) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
      ctx.stroke();
      for (let k = 0; k < 3; k++) {
        const x = e.xl + ((t * 0.25 + k * 0.37) % 1) * (e.xr - e.xl);
        ctx.strokeStyle = 'rgba(160,210,230,0.2)';
        ctx.beginPath(); ctx.moveTo(x - 0.15, c.water - 0.04); ctx.lineTo(x + 0.15, c.water - 0.04); ctx.stroke();
      }
    }
  },

  drawGrass(ctx, t, movers) {
    const x0 = this.x0, x1 = this.x1;
    const buckets = [[], [], []];
    const wind = Math.sin(t * 0.9) * 0.03;
    for (const b of this.blades) {
      if (b.x < x0 || b.x > x1) continue;
      let push = 0;
      for (const m of movers) {
        const dx = b.x - m.x;
        if (Math.abs(dx) < m.r && Math.abs(terrainY(b.x) - m.y) < 0.5) push += Math.sign(dx) * (1 - Math.abs(dx) / m.r) * m.f;
      }
      b.bend = damp(b.bend, clamp(push, -1.2, 1.2), 10, 1 / 60);
      const L = Lights.at(b.x, terrainY(b.x) + 0.1);
      buckets[L > 0.55 ? 2 : L > 0.18 ? 1 : 0].push(b);
    }
    const cols = ['#23412d', '#4c6b3a', '#a2b765'];
    for (let k = 0; k < 3; k++) {
      if (!buckets[k].length) continue;
      ctx.strokeStyle = cols[k]; ctx.lineWidth = 0.022; ctx.lineCap = 'round';
      ctx.beginPath();
      for (const b of buckets[k]) {
        const y = terrainY(b.x) - 0.03;
        const sway = wind + Math.sin(t * 1.7 + b.ph) * 0.015;
        const tipx = b.x + b.lean + sway + b.bend * b.h * 0.8;
        const tipy = y + b.h * (1 - Math.abs(b.bend) * 0.35);
        ctx.moveTo(b.x, y);
        ctx.quadraticCurveTo(b.x + (tipx - b.x) * 0.3, y + b.h * 0.6, tipx, tipy);
      }
      ctx.stroke();
    }
  },

  drawTufts(ctx, t) {
    ctx.lineCap = 'round';
    for (const f of this.tufts) {
      if (f.x < this.x0 || f.x > this.x1) continue;
      const y = terrainY(f.x) - 0.02;
      const L = Lights.at(f.x, y + 0.1);
      ctx.strokeStyle = css(mixc([24, 44, 32], [150, 170, 90], clamp01(L * 0.8)));
      ctx.lineWidth = 0.03;
      ctx.beginPath();
      for (let k = -2; k <= 2; k++) {
        const h = (0.22 - Math.abs(k) * 0.035) * f.s;
        const sw = Math.sin(t * 1.3 + f.ph + k) * 0.03;
        ctx.moveTo(f.x + k * 0.03, y);
        ctx.quadraticCurveTo(f.x + k * 0.06, y + h * 0.6, f.x + k * 0.1 + sw, y + h);
      }
      ctx.stroke();
    }
  },

  drawHut(ctx, t) {
    const x = HUT.x, y = terrainRaw(x);
    if (x + 2 < this.x0 || x - 2 > this.x1) return;
    const warm = 0.5 + 0.05 * Math.sin(t * 3.1) + 0.03 * Math.sin(t * 7.3);
    // chimney
    ctx.fillStyle = '#2a211e';
    ctx.fillRect(x + 0.35, y + 1.95, 0.22, 0.6);
    // walls
    ctx.fillStyle = '#3a2a22';
    ctx.beginPath(); ctx.moveTo(x - 0.95, y - 0.05); ctx.lineTo(x - 0.95, y + 1.35); ctx.lineTo(x + 0.95, y + 1.35); ctx.lineTo(x + 0.95, y - 0.05); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(20,12,10,0.6)'; ctx.lineWidth = 0.02;
    for (let k = 1; k < 7; k++) { ctx.beginPath(); ctx.moveTo(x - 0.95, y + k * 0.2); ctx.lineTo(x + 0.95, y + k * 0.2); ctx.stroke(); }
    // roof
    ctx.fillStyle = '#23191a';
    ctx.beginPath(); ctx.moveTo(x - 1.25, y + 1.3); ctx.quadraticCurveTo(x - 0.4, y + 2.1, x, y + 2.45); ctx.quadraticCurveTo(x + 0.4, y + 2.1, x + 1.25, y + 1.3); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(80,60,50,0.4)'; ctx.lineWidth = 0.03;
    for (let k = 0; k < 4; k++) { const yy = y + 1.45 + k * 0.23; const w = 1.1 - k * 0.24; ctx.beginPath(); ctx.moveTo(x - w, yy); ctx.quadraticCurveTo(x, yy + 0.08, x + w, yy); ctx.stroke(); }
    // door
    ctx.fillStyle = '#1f150f';
    ctx.beginPath(); ctx.moveTo(x - 0.62, y); ctx.lineTo(x - 0.62, y + 0.85); ctx.quadraticCurveTo(x - 0.4, y + 1.05, x - 0.18, y + 0.85); ctx.lineTo(x - 0.18, y); ctx.fill();
    ctx.fillStyle = css([255, 200, 120], 0.25 * warm);
    ctx.fillRect(x - 0.6, y, 0.06, 0.8);
    // round window with warm light
    const wx = x + 0.4, wy = y + 0.85;
    ctx.fillStyle = '#1a1210'; ctx.beginPath(); ctx.arc(wx, wy, 0.3, 0, TAU); ctx.fill();
    ctx.fillStyle = css([255, 196, 110], 0.85 * warm + 0.3); ctx.beginPath(); ctx.arc(wx, wy, 0.24, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#1a1210'; ctx.lineWidth = 0.04;
    ctx.beginPath(); ctx.moveTo(wx - 0.24, wy); ctx.lineTo(wx + 0.24, wy); ctx.moveTo(wx, wy - 0.24); ctx.lineTo(wx, wy + 0.24); ctx.stroke();
    // a little potted star-plant on the sill (the gardener has done this before)
    ctx.fillStyle = '#5a3526'; ctx.fillRect(wx - 0.12, wy - 0.36, 0.24, 0.12);
    ctx.strokeStyle = '#3f7a46'; ctx.lineWidth = 0.03;
    ctx.beginPath(); ctx.moveTo(wx, wy - 0.24); ctx.quadraticCurveTo(wx + 0.05, wy - 0.1, wx - 0.02, wy + 0.02); ctx.stroke();
    // watering can & shovel leaning on the wall
    ctx.fillStyle = '#4b5a63';
    ctx.beginPath(); ctx.ellipse(x + 1.12, y + 0.14, 0.14, 0.14, 0, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#4b5a63'; ctx.lineWidth = 0.035; ctx.beginPath(); ctx.moveTo(x + 1.22, y + 0.18); ctx.lineTo(x + 1.42, y + 0.34); ctx.stroke();
    ctx.strokeStyle = '#6b4a30'; ctx.lineWidth = 0.035; ctx.beginPath(); ctx.moveTo(x - 1.05, y); ctx.lineTo(x - 1.2, y + 0.95); ctx.stroke();
    // smoke
    for (let k = 0; k < 5; k++) {
      const u = ((t * 0.12 + k / 5) % 1);
      ctx.fillStyle = 'rgba(150,160,175,' + (0.1 * (1 - u)).toFixed(3) + ')';
      ctx.beginPath(); ctx.arc(x + 0.46 + Math.sin(u * 5 + k) * 0.15 + u * 0.5, y + 2.6 + u * 1.6, 0.12 + u * 0.3, 0, TAU); ctx.fill();
    }
    Lights.add(wx, wy, 0.55 * warm + 0.1, 2.3, 'window');
    // raised bed with tiny glowing sprouts
    const bx = x + 1.8, by = terrainRaw(bx);
    ctx.fillStyle = '#3b271c'; ctx.fillRect(bx - 0.45, by - 0.02, 0.9, 0.2);
    ctx.fillStyle = '#2a1d16'; ctx.fillRect(bx - 0.4, by + 0.16, 0.8, 0.05);
    for (let k = 0; k < 3; k++) {
      const sx = bx - 0.25 + k * 0.25, sy = by + 0.2;
      const h = 0.18 + k * 0.05, sw = Math.sin(t * 1.4 + k) * 0.02;
      ctx.strokeStyle = '#3c7746'; ctx.lineWidth = 0.025;
      ctx.beginPath(); ctx.moveTo(sx, sy); ctx.quadraticCurveTo(sx - 0.02, sy + h * 0.6, sx + sw, sy + h); ctx.stroke();
      ctx.fillStyle = '#5c9a55';
      ctx.beginPath(); ctx.ellipse(sx + sw - 0.05, sy + h * 0.7, 0.05, 0.022, 0.5, 0, TAU); ctx.ellipse(sx + sw + 0.05, sy + h * 0.75, 0.05, 0.022, -0.5, 0, TAU); ctx.fill();
      ctx.fillStyle = '#f6f0b8'; ctx.beginPath(); ctx.arc(sx + sw, sy + h + 0.02, 0.028, 0, TAU); ctx.fill();
      Lights.add(sx + sw, sy + h, 0.12, 0.7, 'plant');
    }
    // bench
    const bnx = BENCH.x, bny = terrainRaw(bnx);
    ctx.fillStyle = '#4a3326';
    ctx.fillRect(bnx - 0.45, bny + BENCH.seat - 0.06, 0.9, 0.08);
    ctx.fillRect(bnx - 0.38, bny, 0.06, BENCH.seat - 0.05);
    ctx.fillRect(bnx + 0.32, bny, 0.06, BENCH.seat - 0.05);
    ctx.fillRect(bnx - 0.45, bny + BENCH.seat + 0.18, 0.9, 0.06);
    ctx.fillRect(bnx - 0.4, bny + BENCH.seat, 0.05, 0.22);
    ctx.fillRect(bnx + 0.35, bny + BENCH.seat, 0.05, 0.22);
  },

  drawSpots(ctx, t, active) {
    for (let i = 0; i < SPOTS.length; i++) {
      const sp = SPOTS[i];
      if (sp.x < this.x0 - 1 || sp.x > this.x1 + 1) continue;
      const y = terrainY(sp.x);
      if (sp.used && sp.healed >= 1) continue;
      const fade = sp.used ? 1 - (sp.healed || 0) : 1;
      // a soft, freshly turned mound of soil with a little marker stick
      const lit = clamp01(Lights.at(sp.x, y + 0.2) * 0.5);
      const breath = sp.act > 0.02 ? Math.sin(t * 3) * 0.012 * sp.act : 0;
      ctx.globalAlpha = fade;
      ctx.fillStyle = css(mixc([92, 64, 44], [170, 120, 80], lit));
      ctx.beginPath();
      ctx.moveTo(sp.x - 0.5, y - 0.02);
      ctx.bezierCurveTo(sp.x - 0.35, y + 0.13 + breath, sp.x + 0.35, y + 0.13 + breath, sp.x + 0.5, y - 0.02);
      ctx.closePath(); ctx.fill();
      ctx.strokeStyle = 'rgba(40,24,16,0.65)'; ctx.lineWidth = 0.02;
      for (let k = -1; k <= 1; k++) {
        ctx.beginPath(); ctx.moveTo(sp.x - 0.3 + k * 0.12, y + 0.02); ctx.quadraticCurveTo(sp.x + k * 0.12, y + 0.1 + breath, sp.x + 0.3 + k * 0.12, y + 0.02); ctx.stroke();
      }
      ctx.fillStyle = '#6f6b66';
      for (const dx of [-0.58, -0.5, 0.52, 0.6]) { ctx.beginPath(); ctx.ellipse(sp.x + dx, y + 0.015, 0.05, 0.035, 0, 0, TAU); ctx.fill(); }
      // marker stick with a tied leaf
      ctx.strokeStyle = '#8a6440'; ctx.lineWidth = 0.035; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(sp.x - 0.42, y); ctx.lineTo(sp.x - 0.45, y + 0.42); ctx.stroke();
      ctx.fillStyle = '#5e9a58';
      ctx.beginPath(); ctx.ellipse(sp.x - 0.38, y + 0.37 + Math.sin(t * 2 + i) * 0.01, 0.07, 0.03, -0.5 + Math.sin(t * 1.7 + i) * 0.1, 0, TAU); ctx.fill();
      ctx.globalAlpha = 1;
      if (sp.hole > 0) {
        ctx.fillStyle = '#140d0a';
        ctx.beginPath(); ctx.ellipse(sp.x, y + 0.005, 0.2 * sp.hole, 0.06 * sp.hole, 0, 0, TAU); ctx.fill();
        ctx.fillStyle = '#4a3527';
        ctx.beginPath(); ctx.ellipse(sp.x + 0.38, y + 0.04, 0.16 * sp.hole, 0.08 * sp.hole, 0, 0, TAU); ctx.fill();
      }
      // the bed quietly "breathes" when the gardener carries a star
      const act = active === i ? 1 : 0;
      sp.act = damp(sp.act || 0, act, 3, 1 / 60);
      if (sp.act > 0.02) {
        // the soil is waiting: a soft warm glow breathes out of it
        const breathe = 0.5 + 0.5 * Math.sin(t * 3);
        ctx.globalCompositeOperation = 'lighter';
        drawGlow(ctx, 'warm', sp.x, y + 0.05, 0.7 + 0.15 * breathe, 0.22 * sp.act * (0.6 + 0.4 * breathe));
        ctx.globalCompositeOperation = 'source-over';
        if (Math.random() < 0.06 * sp.act) FX.add({ x: sp.x + rnd(-0.3, 0.3), y: y + 0.08, vx: 0, vy: rnd(0.2, 0.5), life: 1.2, size: 0.03, type: 'spark', drag: 1, g: 0 });
      }
    }
  },
};

/* ---------- screen-space backdrop: sky, stars, moon, far hills ---------- */
const Backdrop = {
  stars: [], mw: null, moonC: null, vign: null, grain: null, falls: [], fallT: 1,
  rebuild() {
    const W = View.W, H = View.H;
    const r = mulberry32(99);
    this.stars = [];
    const n = Math.round(420 * Math.sqrt((W * H) / (390 * 844)));
    for (let i = 0; i < n; i++) {
      this.stars.push({ x: r() * 1.4 - 0.2, y: r() * 1.4 - 0.2, s: Math.pow(r(), 3.2) * 2.0 + 0.45, tw: r() * TAU, sp: 0.5 + r() * 2, hue: r() });
    }
    // milky way band
    const mw = document.createElement('canvas');
    mw.width = Math.max(2, Math.round(W / 2)); mw.height = Math.max(2, Math.round(H / 2));
    const g = mw.getContext('2d');
    const ang = View.layout === 'portrait' ? -1.15 : -0.35;
    g.translate(mw.width / 2, mw.height / 2); g.rotate(ang);
    const L = Math.hypot(mw.width, mw.height);
    for (let i = 0; i < 90; i++) {
      const x = (r() - 0.5) * L, y = (r() - 0.5) * (40 + r() * 60) * (mw.height / 420);
      const rad = (20 + r() * 60) * (mw.height / 420);
      const gr = g.createRadialGradient(x, y, 0, x, y, rad);
      gr.addColorStop(0, 'rgba(150,170,210,0.05)'); gr.addColorStop(1, 'rgba(150,170,210,0)');
      g.fillStyle = gr; g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
    }
    for (let i = 0; i < 700; i++) {
      const x = (r() - 0.5) * L, y = (r() + r() + r() - 1.5) * 34 * (mw.height / 420);
      g.fillStyle = 'rgba(220,230,255,' + (0.15 + r() * 0.4).toFixed(2) + ')';
      g.fillRect(x, y, 0.8, 0.8);
    }
    this.mw = mw;
    // moon: crescent
    const mr = Math.round(Math.min(W, H) * View.L.moonR);
    const mc = document.createElement('canvas');
    mc.width = mc.height = mr * 2 + 4;
    const m = mc.getContext('2d');
    m.fillStyle = '#f4ecd2'; m.beginPath(); m.arc(mr + 2, mr + 2, mr, 0, TAU); m.fill();
    m.globalCompositeOperation = 'destination-out';
    m.beginPath(); m.arc(mr + 2 + mr * 0.45, mr + 2 - mr * 0.25, mr * 0.92, 0, TAU); m.fill();
    this.moonC = mc; this.moonR = mr;
    // vignette
    const v = document.createElement('canvas');
    v.width = Math.max(2, Math.round(W / 2)); v.height = Math.max(2, Math.round(H / 2));
    const vg = v.getContext('2d');
    const gr = vg.createRadialGradient(v.width / 2, v.height * 0.55, Math.min(v.width, v.height) * 0.35, v.width / 2, v.height * 0.55, Math.hypot(v.width, v.height) * 0.62);
    gr.addColorStop(0, 'rgba(3,6,12,0)'); gr.addColorStop(1, 'rgba(3,6,12,0.55)');
    vg.fillStyle = gr; vg.fillRect(0, 0, v.width, v.height);
    this.vign = v;
    // paper grain
    const gc = document.createElement('canvas');
    gc.width = gc.height = 160;
    const gg = gc.getContext('2d');
    const id = gg.createImageData(160, 160);
    for (let i = 0; i < id.data.length; i += 4) {
      const val = 128 + (r() - 0.5) * 90;
      id.data[i] = id.data[i + 1] = id.data[i + 2] = val; id.data[i + 3] = 255;
    }
    gg.putImageData(id, 0, 0);
    this.grain = gc;
    this.grainPat = View.ctx.createPattern(gc, 'repeat');
  },
  moonPos() {
    const [fx, fy] = View.L.moon;
    return { x: View.W * fx - Cam.x * 0.4, y: View.H * fy };
  },
  altitude() { return Cam.y; },

  drawSky(ctx, t) {
    const W = View.W, H = View.H, alt = Cam.y;
    const hi = clamp01((alt - 8) / 55);
    const top = mixc(PAL.skyTop, PAL.skyHigh, hi);
    const hor = mixc(PAL.skyHor, [10, 22, 44], hi);
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, css(top));
    g.addColorStop(0.62, css(mixc(top, hor, 0.55)));
    g.addColorStop(1, css(hor));
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    // faint teal glow along the horizon line of the world
    const hy = Cam.toScreen(0, 0).y;
    const hz = clamp01((Cam.ppu - 12) / 18);
    if (hy > -H && hi < 1 && hz > 0) {
      const gg = ctx.createLinearGradient(0, hy - H * 0.5, 0, hy + 20);
      gg.addColorStop(0, 'rgba(40,110,120,0)');
      gg.addColorStop(1, 'rgba(40,110,120,' + (0.18 * (1 - hi) * hz).toFixed(3) + ')');
      ctx.fillStyle = gg; ctx.fillRect(0, hy - H * 0.5, W, H * 0.5 + 20);
    }
    // milky way
    const mwA = 0.55 + hi * 0.45;
    ctx.globalAlpha = mwA;
    const par = -Cam.x * 0.8;
    ctx.drawImage(this.mw, par % 40 - 20, 0, W + 40, H);
    ctx.globalAlpha = 1;
  },

  drawStars(ctx, t, extra) {
    const W = View.W, H = View.H, alt = Cam.y;
    const near = clamp01((alt - 20) / 50);
    const zoom = 1 + near * 0.9;
    const px = -Cam.x * 0.9, py = Cam.y * 0.6;
    const cx = W / 2, cy = H / 2;
    for (const s of this.stars) {
      let x = s.x * W + px, y = s.y * H + py;
      x = ((x % (W * 1.4)) + W * 1.4) % (W * 1.4) - W * 0.2;
      y = ((y % (H * 1.4)) + H * 1.4) % (H * 1.4) - H * 0.2;
      x = cx + (x - cx) * zoom; y = cy + (y - cy) * zoom;
      if (x < -4 || x > W + 4 || y < -4 || y > H + 4) continue;
      let tw = 0.65 + 0.35 * Math.sin(t * s.sp + s.tw);
      if (extra && extra.wave) {
        const d = Math.hypot(x - extra.wave.x, y - extra.wave.y);
        tw += Math.max(0, 1 - Math.abs(d - extra.wave.r) / 60) * 1.5;
      }
      const sz = s.s * (1 + near * 1.4) * (extra ? extra.boost || 1 : 1);
      const a = clamp01(tw * (0.55 + s.s * 0.3));
      const col = s.hue > 0.8 ? '255,226,190' : s.hue < 0.2 ? '200,220,255' : '240,244,255';
      ctx.fillStyle = 'rgba(' + col + ',' + a.toFixed(3) + ')';
      if (sz > 1.2) {
        ctx.globalAlpha = a * 0.5;
        ctx.drawImage(Glow.get('dot'), x - sz * 2.5, y - sz * 2.5, sz * 5, sz * 5);
        ctx.globalAlpha = 1;
      }
      ctx.fillRect(x - sz / 2, y - sz / 2, sz, sz);
    }
  },

  drawMoon(ctx) {
    const p = this.moonPos();
    const r = this.moonR;
    const fade = 1 - clamp01((Cam.y - 40) / 40) * 0.5;
    ctx.globalAlpha = 0.5 * fade;
    ctx.drawImage(Glow.get('cool'), p.x - r * 4, p.y - r * 4, r * 8, r * 8);
    ctx.globalAlpha = fade;
    ctx.drawImage(this.moonC, p.x - r - 2, p.y - r - 2);
    ctx.globalAlpha = 1;
  },

  hillH(lx, layer) {
    if (layer === 0) return 4.2 + 2.1 * Math.sin(0.19 * lx) + 1.2 * Math.sin(0.43 * lx + 1) + 0.5 * Math.sin(1.1 * lx + 2);
    return 1.4 + 0.9 * Math.sin(0.31 * lx + 2) + 0.45 * Math.sin(0.87 * lx) + 0.2 * Math.sin(2.3 * lx + 1);
  },

  drawHills(ctx, t) {
    const W = View.W, H = View.H;
    const fadeAlt = 1 - clamp01((Cam.y - 14) / 16);
    const fadeZoom = clamp01((Cam.ppu - 14) / 16);
    const vis = fadeAlt * fadeZoom;
    if (vis <= 0.01) return;
    const layers = [{ p: 0.16, col: [16, 36, 54], k: 0 }, { p: 0.34, col: [11, 27, 38], k: 1 }];
    for (const Ly of layers) {
      const s = Cam.ppu * Ly.p;
      const sy0 = H / 2 + Cam.y * s;
      ctx.globalAlpha = vis;
      ctx.fillStyle = css(Ly.col);
      ctx.beginPath();
      ctx.moveTo(0, H);
      for (let sx = 0; sx <= W + 8; sx += 8) {
        const lx = Cam.x + (sx - W / 2) / s;
        const h = this.hillH(lx, Ly.k);
        ctx.lineTo(sx, sy0 - h * s);
      }
      ctx.lineTo(W, H); ctx.closePath(); ctx.fill();
      if (Ly.k === 1) {
        // silhouette trees and tiny glowing star-plants on the near hills
        for (let lx = Math.floor((Cam.x - W / 2 / s) / 1.7) * 1.7; lx < Cam.x + W / 2 / s; lx += 1.7) {
          const sx = W / 2 + (lx - Cam.x) * s;
          const h = this.hillH(lx, 1);
          const k = Math.abs(Math.sin(lx * 12.9898) * 43758.5453) % 1;
          if (k < 0.45) {
            const th = (0.6 + k) * s;
            ctx.fillStyle = css([9, 22, 30]);
            ctx.beginPath(); ctx.ellipse(sx, sy0 - h * s - th * 0.9, th * 0.35, th * 0.55, 0, 0, TAU); ctx.fill();
            ctx.fillRect(sx - th * 0.05, sy0 - h * s - th * 0.5, th * 0.1, th * 0.5);
          } else if (k > 0.8) {
            const a = 0.35 + 0.25 * Math.sin(t * 2 + lx);
            ctx.globalAlpha = vis * a;
            ctx.drawImage(Glow.get('plant'), sx - 6, sy0 - h * s - 10, 12, 12);
            ctx.globalAlpha = vis;
          }
        }
      }
      // distant falling stars land on the far hills
      if (Ly.k === 0) this.drawFalls(ctx, t, s, sy0, vis);
    }
    ctx.globalAlpha = 1;
  },

  updateFalls(dt) {
    this.fallT -= dt;
    if (this.fallT < 0) {
      this.fallT = rnd(0.9, 2.2);
      const s = Cam.ppu * 0.16;
      const lx = Cam.x + rnd(-0.45, 0.45) * View.W / s;
      this.falls.push({ lx, ly: 22 + rnd(0, 6), vx: rnd(-0.6, 0.6), vy: -rnd(3.5, 5), life: 0, land: -1 });
    }
    for (const f of this.falls) {
      if (f.land < 0) {
        f.lx += f.vx * dt; f.ly += f.vy * dt; f.vy -= 4 * dt;
        const h = this.hillH(f.lx, 0);
        if (f.ly <= h) { f.ly = h; f.land = 0; }
      } else f.land += dt;
      f.life += dt;
    }
    this.falls = this.falls.filter(f => f.land < 2.5 && f.life < 12);
  },

  drawFalls(ctx, t, s, sy0, vis) {
    for (const f of this.falls) {
      const sx = View.W / 2 + (f.lx - Cam.x) * s, sy = sy0 - f.ly * s;
      if (f.land < 0) {
        const len = 5;
        ctx.globalAlpha = vis * 0.8;
        ctx.strokeStyle = 'rgba(255,230,170,0.6)'; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx - f.vx * len, sy + (-f.vy) * -len * 0.1 - len * 2); ctx.stroke();
        ctx.drawImage(Glow.get('warm'), sx - 7, sy - 7, 14, 14);
      } else {
        const a = (1 - f.land / 2.5);
        ctx.globalAlpha = vis * a * 0.9;
        ctx.drawImage(Glow.get('warm'), sx - 10 - f.land * 4, sy - 10 - f.land * 4, 20 + f.land * 8, 20 + f.land * 8);
      }
    }
    ctx.globalAlpha = vis;
  },

  drawOverlay(ctx) {
    const W = View.W, H = View.H;
    ctx.drawImage(this.vign, 0, 0, W, H);
    ctx.globalAlpha = 0.045;
    ctx.fillStyle = this.grainPat;
    ctx.fillRect(0, 0, W, H);
    ctx.globalAlpha = 1;
  },
};
