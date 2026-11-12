// Wordless hint scheduler + one-shot "ghost hand" demonstration.
import { clamp, lerp, E, inv } from './util.js';

export class Hints {
  constructor(game) {
    this.g = game;
    this.idle = 0;
    this.stages = [];
    this.key = null;
    this.fired = new Set();
    this.cycle = 22;
  }
  // stages: [{t: seconds idle, fn}]
  set(key, stages, cycle = 22) {
    this.key = key; this.stages = stages || []; this.idle = 0; this.fired.clear(); this.cycle = cycle;
  }
  clear() { this.set(null, []); }
  poke() { this.idle = 0; this.fired.clear(); }
  update(dt, busy) {
    if (!this.stages.length) return;
    if (busy) { this.idle = 0; return; }
    this.idle += dt;
    this.stages.forEach((s, i) => {
      if (!this.fired.has(i) && this.idle >= s.t) { this.fired.add(i); try { s.fn(); } catch (e) { console.error(e); } }
    });
    if (this.idle > this.cycle) { this.idle = this.stages[0] ? this.stages[0].t - 0.5 : 0; this.fired.clear(); }
  }
}

// A soft translucent hand performing one gesture, then disappearing.
export class Ghost {
  constructor(game) { this.g = game; this.path = null; this.t = 0; }
  // points: [{x,y,d}] world coords; d = pressed
  play(points, dur = 1.8) {
    this.path = points; this.t = 0; this.dur = dur;
  }
  drag(ax, ay, bx, by, dur = 1.8) {
    this.play([{ x: ax, y: ay, d: 0 }, { x: ax, y: ay, d: 1 }, { x: bx, y: by, d: 1 }, { x: bx, y: by, d: 0 }], dur);
  }
  tap(x, y) { this.play([{ x, y: y + 10, d: 0 }, { x, y, d: 1 }, { x, y, d: 0 }, { x, y: y + 6, d: 0 }], 1.2); }
  circle(cx, cy, r, dur = 2.2) {
    const pts = [{ x: cx + r, y: cy, d: 0 }];
    for (let i = 0; i <= 16; i++) { const a = (i / 16) * Math.PI * 2; pts.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, d: 1 }); }
    pts.push({ x: cx + r, y: cy, d: 0 });
    this.play(pts, dur);
  }
  stop() { this.path = null; }
  update(dt) { if (this.path) { this.t += dt; if (this.t > this.dur + 0.4) this.path = null; } }
  draw(ctx) {
    if (!this.path) return;
    const g = this.g;
    const n = this.path.length - 1;
    const k = clamp(this.t / this.dur, 0, 1);
    const f = k * n; const i = Math.min(n - 1, Math.floor(f)); const u = E.inOut(f - i);
    const a = this.path[i], b = this.path[i + 1];
    const wx = lerp(a.x, b.x, u), wy = lerp(a.y, b.y, u);
    const pressed = a.d && b.d ? 1 : a.d ? 1 - u : b.d ? u : 0;
    const s = g.cam.toScreen(wx, wy);
    const alpha = Math.min(1, this.t * 4) * (1 - inv(this.dur, this.dur + 0.4, this.t)) * 0.75;
    const dpr = g.view.dpr;
    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalAlpha = alpha;
    if (pressed > 0.2) {
      ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.arc(s.x, s.y, 16 + (1 - pressed) * 10, 0, Math.PI * 2); ctx.stroke();
    }
    const sc = 1 - pressed * 0.08;
    ctx.translate(s.x, s.y); ctx.scale(sc, sc);
    ctx.fillStyle = 'rgba(255,255,255,0.92)'; ctx.strokeStyle = 'rgba(80,70,60,0.55)'; ctx.lineWidth = 2;
    // index finger tip at (0,0)
    ctx.beginPath();
    ctx.moveTo(-6, 4);
    ctx.quadraticCurveTo(-6, -6, 0, -6);
    ctx.quadraticCurveTo(6, -6, 6, 4);
    ctx.lineTo(6, 26);
    ctx.quadraticCurveTo(12, 20, 18, 26);
    ctx.quadraticCurveTo(24, 22, 28, 30);
    ctx.quadraticCurveTo(34, 28, 36, 36);
    ctx.lineTo(36, 52);
    ctx.quadraticCurveTo(34, 70, 16, 70);
    ctx.lineTo(4, 70);
    ctx.quadraticCurveTo(-12, 66, -16, 50);
    ctx.lineTo(-20, 36);
    ctx.quadraticCurveTo(-20, 30, -12, 34);
    ctx.lineTo(-6, 40);
    ctx.closePath();
    ctx.fill(); ctx.stroke();
    ctx.restore();
  }
}
