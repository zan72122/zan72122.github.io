// The continuous zoo road: sky, hills, ground, path and roadside decoration.
import { seeded, clamp, lerp, TAU } from './util.js';
import { C, rr, ell, circ, fillStroke, leafClump, shadow, plank, mixColor } from './draw.js';

export const ST = { gate: -3000, elephant: 0, aviary: 1000, aquarium: 2000, bees: 3000, plaza: 4000 };
export const ROAD = { x0: -700, x1: 4700 };

export function horizonY(portrait) { return portrait ? -490 : -292; }

const SKIES = {
  day: ['#9fd6ee', '#dff1f3', '#f8f0d6'],
  dawn: ['#b9c9ec', '#f3d9e0', '#fbe7c8'],
  gold: ['#a7cfe6', '#f2e7cf', '#fbe0b0'],
};

export class World {
  constructor(game) {
    this.g = game;
    this.sky = 'day'; this.skyMix = null;
    this.t = 0;
    this._build();
  }

  _build() {
    const r = seeded(11);
    this.clouds = [];
    for (let i = 0; i < 7; i++) this.clouds.push({ x: r() * 1.2, y: 0.05 + r() * 0.16, s: 0.7 + r() * 0.7, v: 0.004 + r() * 0.006 });
    this.hills = [];
    for (let x = -1500; x < 6000; x += 260 + r() * 200) this.hills.push({ x, w: 300 + r() * 280, h: 22 + r() * 34, c: r() });
    this.far = [];
    for (let x = -1200; x < 5800; x += 40 + r() * 50) this.far.push({ x, r: 9 + r() * 10, c: r() });
    // roadside decoration (between stations)
    this.decor = [];
    const stations = [ST.elephant, ST.aviary, ST.aquarium, ST.bees, ST.plaza];
    const icons = ['bird', 'otter', 'bee', 'heart'];
    for (let i = 0; i < stations.length - 1; i++) {
      const a = stations[i];
      this.decor.push({ k: 'lamp', x: a + 420, y: -34 });
      this.decor.push({ k: 'bench', x: a + 540, y: -40 });
      this.decor.push({ k: 'sign', x: a + 700, y: -32, icon: icons[i] });
      this.decor.push({ k: 'tree', x: a + 480 + r() * 60, y: -70, s: 0.9 + r() * 0.3, seed: r() });
      this.decor.push({ k: 'tree', x: a + 620 + r() * 60, y: -95, s: 0.8 + r() * 0.3, seed: r() });
      this.decor.push({ k: 'bush', x: a + 360 + r() * 40, y: -44, s: 1, seed: r() });
      this.decor.push({ k: 'bush', x: a + 760 + r() * 40, y: -50, s: 0.9, seed: r() });
      for (let j = 0; j < 7; j++) this.decor.push({ k: 'flower', x: a + 340 + r() * 420, y: 32 + r() * 18, c: (r() * 4) | 0, seed: r() });
      this.decor.push({ k: 'fence', x: a + 330, x2: a + 780, y: -30 });
      // portrait back-ground fill
      for (let j = 0; j < 5; j++) this.decor.push({ k: 'tree', x: a + 330 + r() * 440, y: -140 - r() * 330, s: 0.8 + r() * 0.5, seed: r(), portraitOnly: true });
    }
    this.decor.push({ k: 'lamp', x: ST.elephant - 380, y: -34 });
    this.decor.push({ k: 'bush', x: ST.elephant - 520, y: -44, s: 1.1, seed: 0.3 });
    this.tufts = [];
    for (let i = 0; i < 700; i++) this.tufts.push({ x: ROAD.x0 + r() * (ROAD.x1 - ROAD.x0), y: -560 + r() * 660, c: r() });
    this.pebbles = [];
    for (let i = 0; i < 380; i++) this.pebbles.push({ x: ROAD.x0 + r() * (ROAD.x1 - ROAD.x0), y: -20 + r() * 42, r: 0.8 + r() * 1.6, c: r() });
  }

  update(dt) { this.t += dt; }

  skyColors() {
    const s = SKIES[this.sky] || SKIES.day;
    if (this.skyMix) {
      const o = SKIES[this.skyMix.to];
      const k = this.skyMix.k;
      return s.map((c, i) => mixColor(c, o[i], k));
    }
    return s;
  }

  // screen-space sky (called with identity * dpr transform)
  drawSky(ctx) {
    const v = this.g.view;
    const cam = this.g.cam;
    const hy = cam.toScreen(0, horizonY(v.portrait)).y;
    const [a, b, c] = this.skyColors();
    const grd = ctx.createLinearGradient(0, 0, 0, Math.max(10, hy));
    grd.addColorStop(0, a); grd.addColorStop(0.7, b); grd.addColorStop(1, c);
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, v.W, Math.max(0, hy) + 2);
    // sun (upper left: light direction)
    const sx = v.W * 0.12, sy = Math.min(hy - 40, v.H * 0.1 + 20);
    const sg = ctx.createRadialGradient(sx, sy, 4, sx, sy, 120);
    sg.addColorStop(0, 'rgba(255,250,220,0.95)'); sg.addColorStop(0.2, 'rgba(255,244,200,0.6)'); sg.addColorStop(1, 'rgba(255,244,200,0)');
    ctx.fillStyle = sg; ctx.fillRect(sx - 120, sy - 120, 240, 240);
    // clouds with slight parallax
    for (const cl of this.clouds) {
      const x = (((cl.x + this.t * cl.v - cam.x * 0.00006) % 1.3) + 1.3) % 1.3 * v.W * 1.1 - v.W * 0.1;
      const y = cl.y * Math.max(hy, 200);
      if (y > hy - 20) continue;
      const s = cl.s * Math.min(1.6, Math.max(0.8, v.W / 700));
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      for (const [dx, dy, r] of [[0, 0, 18], [18, -8, 22], [40, 0, 18], [20, 6, 20]]) { circ(ctx, x + dx * s, y + dy * s, r * s); ctx.fill(); }
    }
  }

  // parallax hills and far treeline, drawn in world space
  drawFar(ctx) {
    const v = this.g.view, cam = this.g.cam;
    const hy = horizonY(v.portrait);
    const vb = this.g.viewBounds();
    // hills (parallax 0.3)
    ctx.save();
    ctx.translate(cam.x * 0.7, 0);
    for (const h of this.hills) {
      const x = h.x;
      if (x + h.w < vb.x0 - cam.x * 0.7 - 100 || x - h.w > vb.x1 - cam.x * 0.7 + 100) continue;
      ctx.fillStyle = h.c > 0.5 ? '#bfdcb4' : '#b3d6a8';
      ell(ctx, x, hy + 6, h.w, h.h); ctx.fill();
    }
    ctx.restore();
    // treeline (parallax 0.55)
    ctx.save();
    ctx.translate(cam.x * 0.45, 0);
    for (const t of this.far) {
      const x = t.x;
      if (x < vb.x0 - cam.x * 0.45 - 40 || x > vb.x1 - cam.x * 0.45 + 40) continue;
      ctx.fillStyle = t.c > 0.5 ? '#99c986' : '#a6d191';
      circ(ctx, x, hy - t.r * 0.4, t.r); ctx.fill();
    }
    ctx.restore();
  }

  drawGround(ctx) {
    const v = this.g.view;
    const vb = this.g.viewBounds();
    const hy = horizonY(v.portrait);
    // grass
    const grd = ctx.createLinearGradient(0, hy, 0, hy + 400);
    grd.addColorStop(0, '#b7dc92'); grd.addColorStop(1, C.grass);
    ctx.fillStyle = grd;
    ctx.fillRect(vb.x0 - 10, hy, vb.x1 - vb.x0 + 20, vb.y1 - hy + 20);
    // tufts
    ctx.strokeStyle = C.grassD; ctx.lineWidth = 1.2; ctx.lineCap = 'round';
    for (const t of this.tufts) {
      if (t.x < vb.x0 - 10 || t.x > vb.x1 + 10 || t.y < hy + 6 || t.y > vb.y1 + 10) continue;
      if (t.y > -26 && t.y < 26 && t.x > ROAD.x0 && t.x < ROAD.x1) continue;
      ctx.strokeStyle = t.c > 0.6 ? C.grassL : C.grassD;
      ctx.beginPath();
      ctx.moveTo(t.x - 3, t.y); ctx.lineTo(t.x - 4, t.y - 4);
      ctx.moveTo(t.x, t.y); ctx.lineTo(t.x, t.y - 5.5);
      ctx.moveTo(t.x + 3, t.y); ctx.lineTo(t.x + 4.5, t.y - 4);
      ctx.stroke();
    }
    // the road
    const x0 = Math.max(ROAD.x0, vb.x0 - 20), x1 = Math.min(ROAD.x1, vb.x1 + 20);
    if (x1 > x0) {
      ctx.fillStyle = C.pathD;
      ctx.fillRect(x0, -25, x1 - x0, 52);
      ctx.fillStyle = C.path;
      ctx.fillRect(x0, -22, x1 - x0, 46);
      ctx.fillStyle = 'rgba(255,255,255,0.25)';
      ctx.fillRect(x0, -22, x1 - x0, 5);
      for (const p of this.pebbles) {
        if (p.x < x0 || p.x > x1) continue;
        ctx.fillStyle = p.c > 0.5 ? '#d4bf93' : '#e2d2ae';
        circ(ctx, p.x, p.y, p.r); ctx.fill();
      }
      // edge stones
      ctx.fillStyle = '#d8cdb8';
      for (let x = Math.floor(x0 / 22) * 22; x < x1; x += 22) {
        rr(ctx, x + 1, 22, 19, 6, 3); ctx.fill();
      }
    }
  }

  collect(list) {
    const vb = this.g.viewBounds();
    const P = this.g.view.portrait;
    for (const d of this.decor) {
      const x2 = d.x2 || d.x;
      if (x2 < vb.x0 - 120 || d.x > vb.x1 + 120) continue;
      if (d.portraitOnly && !P) continue;
      if (d.y < horizonY(P) + 20) continue;
      list.push({ z: d.y, draw: (ctx) => this._decor(ctx, d) });
    }
  }

  _decor(ctx, d) {
    const t = this.t;
    if (d.k === 'tree') {
      const s = d.s;
      shadow(ctx, d.x + 10, d.y, 40 * s, 9 * s, 0.18);
      ctx.fillStyle = '#8b6243';
      ctx.beginPath(); ctx.moveTo(d.x - 7 * s, d.y); ctx.lineTo(d.x - 4 * s, d.y - 70 * s); ctx.lineTo(d.x + 4 * s, d.y - 70 * s); ctx.lineTo(d.x + 8 * s, d.y); ctx.closePath();
      fillStroke(ctx, '#8b6243', C.woodDD, 1.3);
      const sw = Math.sin(t * 0.8 + d.seed * 6) * 1.5;
      leafClump(ctx, d.x - 16 * s, d.y - 78 * s, 28 * s, d.seed, C.leafD, C.leaf, C.leafL, sw);
      leafClump(ctx, d.x + 18 * s, d.y - 84 * s, 26 * s, d.seed + 1, C.leafD, C.leaf, C.leafL, sw);
      leafClump(ctx, d.x, d.y - 108 * s, 30 * s, d.seed + 2, C.leafD, C.leaf, C.leafL, sw);
    } else if (d.k === 'bush') {
      shadow(ctx, d.x + 5, d.y, 28 * d.s, 6, 0.16);
      leafClump(ctx, d.x, d.y - 14 * d.s, 22 * d.s, d.seed);
    } else if (d.k === 'lamp') {
      shadow(ctx, d.x + 4, d.y, 10, 3, 0.2);
      ctx.fillStyle = '#48525b';
      rr(ctx, d.x - 2.5, d.y - 110, 5, 110, 2); fillStroke(ctx, '#4f5b64', C.line, 1.2);
      rr(ctx, d.x - 7, d.y - 6, 14, 6, 2); fillStroke(ctx, '#4f5b64', C.line, 1.2);
      ctx.beginPath(); ctx.moveTo(d.x - 10, d.y - 112); ctx.lineTo(d.x + 10, d.y - 112); ctx.lineTo(d.x + 6, d.y - 128); ctx.lineTo(d.x - 6, d.y - 128); ctx.closePath();
      fillStroke(ctx, '#fff7d8', C.line, 1.3);
      ctx.beginPath(); ctx.moveTo(d.x - 12, d.y - 128); ctx.lineTo(d.x + 12, d.y - 128); ctx.lineTo(d.x, d.y - 138); ctx.closePath(); fillStroke(ctx, '#4f5b64', C.line, 1.2);
    } else if (d.k === 'bench') {
      shadow(ctx, d.x + 4, d.y, 36, 5, 0.18);
      ctx.fillStyle = '#5b646c';
      rr(ctx, d.x - 30, d.y - 18, 4, 18, 1); ctx.fill(); rr(ctx, d.x + 26, d.y - 18, 4, 18, 1); ctx.fill();
      plank(ctx, d.x - 34, d.y - 22, 68, 6, C.wood, d.x);
      plank(ctx, d.x - 34, d.y - 40, 68, 6, C.wood, d.x + 1);
      plank(ctx, d.x - 34, d.y - 31, 68, 6, C.wood, d.x + 2);
    } else if (d.k === 'sign') {
      shadow(ctx, d.x + 4, d.y, 10, 3, 0.2);
      plank(ctx, d.x - 3, d.y - 64, 6, 64, C.woodD, 3);
      rr(ctx, d.x - 26, d.y - 90, 52, 34, 6); fillStroke(ctx, '#f6ecd4', C.woodDD, 2);
      drawIcon(ctx, d.icon, d.x, d.y - 73, 1);
      ctx.fillStyle = C.woodD; ctx.beginPath(); ctx.moveTo(d.x + 27, d.y - 80); ctx.lineTo(d.x + 36, d.y - 73); ctx.lineTo(d.x + 27, d.y - 66); ctx.closePath(); ctx.fill();
    } else if (d.k === 'flower') {
      const col = ['#f28ca0', '#ffffff', '#f7cf4f', '#b99ae8'][d.c];
      const sw = Math.sin(t * 1.6 + d.seed * 9) * 1.2;
      ctx.strokeStyle = C.leafD; ctx.lineWidth = 1.3;
      ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.quadraticCurveTo(d.x + sw * 0.5, d.y - 6, d.x + sw, d.y - 12); ctx.stroke();
      ctx.fillStyle = col;
      for (let i = 0; i < 5; i++) { const a = (i / 5) * TAU; circ(ctx, d.x + sw + Math.cos(a) * 3, d.y - 12 + Math.sin(a) * 3, 2.4); ctx.fill(); }
      ctx.fillStyle = '#f5b83d'; circ(ctx, d.x + sw, d.y - 12, 1.6); ctx.fill();
    } else if (d.k === 'fence') {
      const x0 = d.x, x1 = d.x2;
      for (let x = x0; x <= x1; x += 36) {
        rr(ctx, x - 3, d.y - 30, 6, 30, 2); fillStroke(ctx, C.wood, C.woodDD, 1.1);
      }
      plank(ctx, x0 - 4, d.y - 25, x1 - x0 + 8, 5, C.woodL, 5);
      plank(ctx, x0 - 4, d.y - 13, x1 - x0 + 8, 5, C.woodL, 6);
    }
  }
}

// pictograms used on signs (no text)
export function drawIcon(ctx, icon, x, y, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ctx.fillStyle = '#6d5645';
  if (icon === 'elephant') {
    ell(ctx, 2, 0, 11, 7); ctx.fill(); circ(ctx, -9, -3, 6); ctx.fill();
    ctx.lineWidth = 3; ctx.strokeStyle = '#6d5645'; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(-13, -1); ctx.quadraticCurveTo(-17, 6, -14, 10); ctx.stroke();
    for (const lx of [-5, 0, 6, 10]) ctx.fillRect(lx - 1.5, 4, 3, 7);
  } else if (icon === 'bird') {
    ell(ctx, 0, 0, 8, 6); ctx.fill(); circ(ctx, 7, -5, 4.5); ctx.fill();
    ctx.beginPath(); ctx.moveTo(11, -5); ctx.lineTo(15, -4); ctx.lineTo(11, -3); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-7, -1); ctx.lineTo(-14, -5); ctx.lineTo(-12, 2); ctx.fill();
  } else if (icon === 'otter') {
    ell(ctx, 0, 0, 12, 5); ctx.fill(); circ(ctx, 11, -3, 5); ctx.fill();
    ctx.strokeStyle = '#7fb8d6'; ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.moveTo(-15, 7); ctx.quadraticCurveTo(-8, 4, 0, 7); ctx.quadraticCurveTo(8, 10, 15, 7); ctx.stroke();
  } else if (icon === 'bee') {
    ctx.fillStyle = '#e3b23c'; ell(ctx, 0, 0, 9, 6); ctx.fill();
    ctx.fillStyle = '#4a3a2c'; ctx.fillRect(-3, -6, 2.5, 12); ctx.fillRect(3, -6, 2.5, 12);
    ctx.fillStyle = 'rgba(255,255,255,0.8)'; ell(ctx, -2, -8, 4, 3); ctx.fill(); ell(ctx, 4, -8, 4, 3); ctx.fill();
  } else if (icon === 'heart') {
    ctx.fillStyle = '#e98a9c';
    ctx.beginPath(); ctx.moveTo(0, 8); ctx.bezierCurveTo(-14, -2, -8, -12, 0, -5); ctx.bezierCurveTo(8, -12, 14, -2, 0, 8); ctx.fill();
  }
  ctx.restore();
}
