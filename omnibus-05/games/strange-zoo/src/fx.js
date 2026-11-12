// Lightweight particle system (world coordinates).
import { TAU } from './util.js';
import { ell, circ } from './draw.js';

export class FX {
  constructor() { this.p = []; this.floor = []; }
  clear() { this.p.length = 0; this.floor.length = 0; }

  add(o) {
    const p = Object.assign({ x: 0, y: 0, vx: 0, vy: 0, g: 0, drag: 0, life: 1, t: 0, size: 3, type: 'dot', color: '#fff', ground: null, rot: 0, vr: 0, alpha: 1 }, o);
    if (p.floorLayer) this.floor.push(p); else this.p.push(p);
    if (this.p.length > 500) this.p.splice(0, this.p.length - 500);
    return p;
  }

  update(dt) {
    for (const list of [this.p, this.floor]) {
      for (const p of list) {
        p.t += dt;
        if (p.drag) { const k = Math.exp(-p.drag * dt); p.vx *= k; p.vy *= k; }
        p.vy += p.g * dt;
        if (p.wind) p.vx += p.wind * dt;
        p.x += p.vx * dt; p.y += p.vy * dt;
        p.rot += p.vr * dt;
        if (p.ground != null && p.y >= p.ground && !p.landed) {
          p.landed = true;
          if (p.onGround) p.onGround(p);
          if (p.dieOnGround !== false) p.t = p.life + 1;
        }
        if (p.update) p.update(p, dt);
      }
      for (let i = list.length - 1; i >= 0; i--) if (list[i].t > list[i].life) list.splice(i, 1);
    }
  }

  drawFloor(ctx) { for (const p of this.floor) this._draw(ctx, p); }
  draw(ctx) { for (const p of this.p) this._draw(ctx, p); }

  _draw(ctx, p) {
    const k = p.t / p.life;
    ctx.save();
    switch (p.type) {
      case 'drop': {
        ctx.globalAlpha = p.alpha * (1 - k * 0.3);
        ctx.fillStyle = p.color || 'rgba(170,220,245,0.95)';
        const s = p.size;
        const a = Math.atan2(p.vy, p.vx) - Math.PI / 2;
        ctx.translate(p.x, p.y); ctx.rotate(a);
        ctx.beginPath();
        ctx.moveTo(0, -s * 1.8);
        ctx.quadraticCurveTo(s, 0, 0, s);
        ctx.quadraticCurveTo(-s, 0, 0, -s * 1.8);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        circ(ctx, -s * 0.3, -s * 0.1, s * 0.3); ctx.fill();
        break;
      }
      case 'dot': {
        ctx.globalAlpha = p.alpha * (1 - k);
        ctx.fillStyle = p.color;
        circ(ctx, p.x, p.y, p.size); ctx.fill();
        break;
      }
      case 'dust': {
        ctx.globalAlpha = p.alpha * (1 - k) * 0.6;
        ctx.fillStyle = p.color || '#e6d6b4';
        circ(ctx, p.x, p.y, p.size * (0.6 + k * 0.9)); ctx.fill();
        break;
      }
      case 'smoke': {
        const a = p.alpha * Math.min(1, p.t * 4) * (1 - k);
        const r = p.size * (0.5 + k * 1.6);
        ctx.globalAlpha = a * 0.45;
        ctx.fillStyle = '#b9bdb8';
        circ(ctx, p.x + r * 0.12, p.y + r * 0.12, r); ctx.fill();
        ctx.globalAlpha = a * 0.75;
        ctx.fillStyle = p.color || '#eef0f0';
        circ(ctx, p.x, p.y, r * 0.92); ctx.fill();
        ctx.globalAlpha = a * 0.5;
        ctx.fillStyle = '#ffffff';
        circ(ctx, p.x - r * 0.3, p.y - r * 0.3, r * 0.45); ctx.fill();
        break;
      }
      case 'leaf': {
        ctx.globalAlpha = p.alpha * Math.min(1, (1 - k) * 3);
        ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.scale(1, 0.4 + 0.6 * Math.abs(Math.sin(p.t * 5 + p.size)));
        ctx.fillStyle = p.color || '#8cc063';
        ell(ctx, 0, 0, p.size * 1.6, p.size * 0.8); ctx.fill();
        ctx.strokeStyle = 'rgba(60,90,40,0.5)'; ctx.lineWidth = 0.6;
        ctx.beginPath(); ctx.moveTo(-p.size * 1.5, 0); ctx.lineTo(p.size * 1.5, 0); ctx.stroke();
        break;
      }
      case 'sparkle': {
        const a = p.alpha * Math.sin(Math.PI * k);
        ctx.globalAlpha = a;
        ctx.fillStyle = p.color || '#fff';
        const s = p.size * (0.6 + 0.4 * Math.sin(Math.PI * k));
        ctx.translate(p.x, p.y);
        ctx.beginPath();
        ctx.moveTo(0, -s); ctx.quadraticCurveTo(0, 0, s, 0); ctx.quadraticCurveTo(0, 0, 0, s);
        ctx.quadraticCurveTo(0, 0, -s, 0); ctx.quadraticCurveTo(0, 0, 0, -s); ctx.fill();
        break;
      }
      case 'ring': {
        ctx.globalAlpha = p.alpha * (1 - k);
        ctx.strokeStyle = p.color || 'rgba(255,255,255,0.8)';
        ctx.lineWidth = p.lw || 1.2;
        ell(ctx, p.x, p.y, p.size * (0.3 + k), p.size * (0.3 + k) * (p.flat || 0.35)); ctx.stroke();
        break;
      }
      case 'print': {
        ctx.globalAlpha = p.alpha * (1 - k);
        ctx.fillStyle = p.color || 'rgba(90,110,120,0.35)';
        ell(ctx, p.x, p.y, p.size * 1.3, p.size * 0.55, p.rot); ctx.fill();
        break;
      }
      case 'puddle': {
        ctx.globalAlpha = p.alpha * Math.min(1, (1 - k) * 2);
        ctx.fillStyle = 'rgba(120,170,200,0.35)';
        ell(ctx, p.x, p.y, p.size, p.size * 0.32); ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ell(ctx, p.x - p.size * 0.3, p.y - p.size * 0.06, p.size * 0.35, p.size * 0.07); ctx.fill();
        break;
      }
      case 'custom':
        if (p.draw) p.draw(ctx, p, k);
        break;
    }
    ctx.restore();
  }
}

// helpers
export function splashDrops(fx, x, y, n, speed = 60, ground = null, color) {
  for (let i = 0; i < n; i++) {
    const a = -Math.PI / 2 + (Math.random() - 0.5) * 2.2;
    const v = speed * (0.4 + Math.random() * 0.8);
    fx.add({ type: 'drop', x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, g: 420, life: 1.2, size: 1.2 + Math.random() * 1.3, ground, color });
  }
}

export function dustPuff(fx, x, y, n = 6, color = '#e3d2ad', spread = 14) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * TAU;
    fx.add({ type: 'dust', x: x + Math.cos(a) * spread * 0.3, y: y + Math.sin(a) * 3, vx: Math.cos(a) * spread * 1.6, vy: -Math.abs(Math.sin(a)) * spread * 0.9, drag: 3, life: 0.7 + Math.random() * 0.4, size: 3 + Math.random() * 3, color });
  }
}
