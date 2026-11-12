'use strict';
/* ============================================================
   fx.js — particles, underground light veins, soil cracks
   ============================================================ */

const FX = {
  parts: [], veins: [], cracks: [],

  reset() { this.parts.length = 0; this.veins.length = 0; this.cracks.length = 0; },

  add(o) {
    if (this.parts.length > 650) return null;
    const p = Object.assign({ x: 0, y: 0, vx: 0, vy: 0, age: 0, life: 1, size: 0.05, type: 'spark', g: 0, drag: 0, bounce: false, rot: 0, vr: 0, col: null }, o);
    this.parts.push(p);
    return p;
  },

  sparks(x, y, n, spd = 1.5, o = {}) {
    for (let i = 0; i < n; i++) {
      const a = rnd(0, TAU), v = rnd(0.2, 1) * spd;
      this.add(Object.assign({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: rnd(0.5, 1.2), size: rnd(0.03, 0.08), type: 'spark', drag: 2.5, g: 0.3 }, o));
    }
  },
  dust(x, y, n, spd = 1, o = {}) {
    for (let i = 0; i < n; i++) {
      const a = rnd(0.15, PI - 0.15), v = rnd(0.3, 1) * spd;
      this.add(Object.assign({ x: x + rnd(-0.1, 0.1), y: y + 0.03, vx: Math.cos(a) * v * 1.4, vy: Math.sin(a) * v * 0.5, life: rnd(0.6, 1.3), size: rnd(0.08, 0.18), type: 'dust', drag: 3, g: -0.1 }, o));
    }
  },
  crumbs(x, y, n, spd = 2, dirBias = 0) {
    for (let i = 0; i < n; i++) {
      const a = PI / 2 + rnd(-0.9, 0.9) + dirBias, v = rnd(0.4, 1) * spd;
      this.add({ x: x + rnd(-0.12, 0.12), y: y + 0.02, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: rnd(1.2, 2.2), size: rnd(0.025, 0.06), type: 'crumb', g: 9, drag: 0.3, bounce: true, rot: rnd(0, TAU), vr: rnd(-8, 8) });
    }
  },
  ring(x, y, r = 1, col = 'warm') { this.add({ x, y, life: 0.7, size: r, type: 'ring', col }); },
  motes(fromX, fromY, toX, toY, n = 1) {
    for (let i = 0; i < n; i++) {
      this.add({ x: fromX + rnd(-0.2, 0.2), y: fromY + rnd(0.2, 0.8), tx: toX, ty: toY, life: 2.4, size: rnd(0.04, 0.07), type: 'mote', ph: rnd(0, TAU), vx: rnd(-0.3, 0.3), vy: rnd(0.2, 0.6) });
    }
  },
  petals(x, y, n, spd = 1.2) {
    for (let i = 0; i < n; i++) {
      const a = rnd(0, TAU), v = rnd(0.2, 1) * spd;
      this.add({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v + 0.4, life: rnd(2, 3.5), size: rnd(0.06, 0.12), type: 'petal', drag: 1.4, g: 0.35, rot: rnd(0, TAU), vr: rnd(-3, 3) });
    }
  },

  update(dt) {
    for (const p of this.parts) {
      p.age += dt;
      if (p.type === 'mote') {
        const u = p.age / p.life;
        const ax = (p.tx - p.x) * 2.2 - p.vx * 1.4 + Math.sin(p.age * 5 + p.ph) * 1.2;
        const ay = (p.ty - p.y) * 2.2 - p.vy * 1.4 + Math.cos(p.age * 4 + p.ph) * 1.2;
        p.vx += ax * dt * (0.4 + u); p.vy += ay * dt * (0.4 + u);
      } else {
        p.vy -= p.g * dt;
        const f = Math.exp(-p.drag * dt);
        p.vx *= f; p.vy *= f;
      }
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.rot += p.vr * dt;
      if (p.bounce) {
        const gy = terrainY(p.x);
        if (p.y < gy + p.size * 0.5) {
          p.y = gy + p.size * 0.5;
          if (p.vy < 0) { p.vy = -p.vy * 0.3; p.vx *= 0.55; p.vr *= 0.5; }
        }
      }
    }
    this.parts = this.parts.filter(p => p.age < p.life);
    for (const v of this.veins) v.age += dt;
    this.veins = this.veins.filter(v => v.age < v.life);
    for (const c of this.cracks) c.age += dt;
    this.cracks = this.cracks.filter(c => c.age < c.life);
  },

  drawSolid(ctx) {
    for (const p of this.parts) {
      const u = p.age / p.life;
      if (p.type === 'dust') {
        ctx.fillStyle = 'rgba(120,96,74,' + (0.28 * (1 - u)).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size * (0.6 + u), 0, TAU); ctx.fill();
      } else if (p.type === 'crumb') {
        ctx.fillStyle = 'rgba(78,56,40,' + Math.min(1, (1 - u) * 3).toFixed(3) + ')';
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.8);
        ctx.restore();
      } else if (p.type === 'bubble') {
        // sleepy breath bubbles, wobbling up
        ctx.strokeStyle = 'rgba(200,225,255,' + (0.6 * Math.sin(u * PI)).toFixed(3) + ')';
        ctx.lineWidth = 0.018;
        ctx.beginPath(); ctx.arc(p.x + Math.sin(p.age * 3) * 0.05, p.y, p.size * (0.6 + u * 0.8), 0, TAU); ctx.stroke();
      } else if (p.type === 'petal') {
        ctx.fillStyle = 'rgba(255,226,200,' + (0.9 * (1 - u)).toFixed(3) + ')';
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.beginPath(); ctx.ellipse(0, 0, p.size, p.size * 0.45, 0, 0, TAU); ctx.fill();
        ctx.restore();
      }
    }
  },

  drawAdd(ctx) {
    for (const p of this.parts) {
      const u = p.age / p.life;
      if (p.type === 'spark') {
        const a = (1 - u) * (0.7 + 0.3 * Math.sin(p.age * 30));
        drawGlow(ctx, p.col || 'warm', p.x, p.y, p.size * 4, a);
      } else if (p.type === 'mote') {
        const a = Math.sin(Math.min(1, u) * PI) * 0.9;
        drawGlow(ctx, 'plant', p.x, p.y, p.size * 5, a);
      } else if (p.type === 'ring') {
        ctx.globalAlpha = (1 - u) * 0.5;
        ctx.strokeStyle = p.col === 'plant' ? 'rgb(200,255,170)' : 'rgb(255,220,150)';
        ctx.lineWidth = 0.05 * (1 - u) + 0.01;
        ctx.beginPath(); ctx.ellipse(p.x, p.y, p.size * (0.2 + u * 1.3), p.size * (0.06 + u * 0.3), 0, 0, TAU); ctx.stroke();
      } else if (p.type === 'petal') {
        drawGlow(ctx, 'rose', p.x, p.y, p.size * 3, (1 - u) * 0.3);
      }
    }
    ctx.globalAlpha = 1;
  },

  /* ---------- underground light veins ---------- */
  vein(x, y, dir, len, o = {}) {
    const branches = [];
    const grow = (x, y, a, L, w, d0, level) => {
      const pts = [{ x, y, d: d0 }];
      let d = d0;
      const n = Math.max(3, Math.round(L / 0.1));
      const st = L / n;
      for (let i = 0; i < n; i++) {
        a += rnd(-0.32, 0.32);
        x += Math.cos(a) * st; y += Math.sin(a) * st; d += st;
        const gy = terrainY(x) - 0.12;
        if (y > gy) { y = gy; a = a > PI / 2 || a < -PI / 2 ? PI + 0.25 : -0.25; }
        pts.push({ x, y, d });
        if (level < 2 && Math.random() < 0.2) {
          const side = Math.random() < 0.5 ? -1 : 1;
          grow(x, y, a + side * rnd(0.5, 1.1), L * rnd(0.3, 0.5), w * 0.6, d, level + 1);
        }
      }
      branches.push({ pts, w });
    };
    const main = o.branches || 3;
    for (let k = 0; k < main; k++) {
      const a = (o.angles ? o.angles[k] : dir + (k - (main - 1) / 2) * 0.6) + rnd(-0.15, 0.15);
      grow(x, y, a, len * (k === 0 ? 1 : rnd(0.55, 0.85)), 0.055, 0, 0);
    }
    const v = { branches, age: 0, life: o.life || 5, speed: o.speed || 2.2, fadeAt: o.fadeAt || 2.6, col: o.col || 'warm', maxD: 0 };
    for (const b of branches) for (const p of b.pts) v.maxD = Math.max(v.maxD, p.d);
    this.veins.push(v);
    return v;
  },

  drawVeins(ctx) {
    if (!this.veins.length) return;
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (const v of this.veins) {
      const D = v.age * v.speed;
      const fade = v.age < v.fadeAt ? 1 : Math.max(0, 1 - (v.age - v.fadeAt) / (v.life - v.fadeAt));
      if (fade <= 0) continue;
      for (const b of v.branches) {
        ctx.beginPath();
        let started = false, head = null;
        for (const p of b.pts) {
          if (p.d > D) break;
          if (!started) { ctx.moveTo(p.x, p.y); started = true; } else ctx.lineTo(p.x, p.y);
          head = p;
        }
        if (!started) continue;
        ctx.globalAlpha = 0.55 * fade;
        ctx.strokeStyle = v.col === 'plant' ? 'rgb(170,240,140)' : 'rgb(255,196,96)';
        ctx.lineWidth = b.w * 1.9;
        ctx.stroke();
        ctx.globalAlpha = 0.9 * fade;
        ctx.strokeStyle = v.col === 'plant' ? 'rgb(236,255,210)' : 'rgb(255,240,190)';
        ctx.lineWidth = b.w * 0.6;
        ctx.stroke();
        if (head && head.d > D - 0.3 && D < v.maxD + 0.2) drawGlow(ctx, v.col === 'plant' ? 'plant' : 'warm', head.x, head.y, 0.45, 0.8 * fade);
      }
    }
    ctx.globalAlpha = 1;
  },

  veinLights() {
    for (const v of this.veins) {
      const D = v.age * v.speed;
      if (D > v.maxD + 0.5 || v.age > v.fadeAt) continue;
      const b = v.branches[v.branches.length - 1];
      let head = b.pts[0];
      for (const p of b.pts) { if (p.d > D) break; head = p; }
      Lights.add(head.x, head.y, 0.35, 1.4, v.col === 'plant' ? 'plant' : 'warm');
    }
  },

  /* ---------- cracks in the soil surface ---------- */
  crack(x, spread = 0.5, n = 4, life = 3) {
    const lines = [];
    for (let k = 0; k < n; k++) {
      const pts = [];
      let cx = x + rnd(-0.06, 0.06), cy = 0;
      const dir = k % 2 ? 1 : -1;
      const len = rnd(0.3, 1) * spread;
      const m = 5;
      for (let i = 0; i <= m; i++) {
        pts.push({ dx: cx - x, dd: cy });
        cx += dir * (len / m) * rnd(0.6, 1.3);
        cy = -rnd(0, 0.06) * (i / m) - 0.01;
      }
      lines.push(pts);
    }
    const c = { x, lines, age: 0, life };
    this.cracks.push(c);
    return c;
  },
  drawCracks(ctx) {
    for (const c of this.cracks) {
      const u = c.age / c.life;
      const grow = clamp01(c.age / 0.3);
      const a = u < 0.7 ? 1 : 1 - (u - 0.7) / 0.3;
      for (const pts of c.lines) {
        ctx.beginPath();
        const n = Math.max(2, Math.ceil(pts.length * grow));
        for (let i = 0; i < n; i++) {
          const p = pts[i];
          const x = c.x + p.dx, y = terrainY(x) + p.dd;
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.globalAlpha = a;
        ctx.strokeStyle = '#120a08'; ctx.lineWidth = 0.035; ctx.stroke();
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = 'rgba(255,200,110,0.55)'; ctx.lineWidth = 0.014; ctx.stroke();
        ctx.globalCompositeOperation = 'source-over';
      }
    }
    ctx.globalAlpha = 1;
  },
};
