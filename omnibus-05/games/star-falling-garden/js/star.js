'use strict';
/* ============================================================
   star.js — falling / bouncing / rolling / carried stars
   ============================================================ */

let STAR_ID = 0;
class Star {
  constructor(o) {
    this.id = STAR_ID++;
    this.x = o.x; this.y = o.y;
    this.vx = o.vx || 0; this.vy = o.vy || 0;
    this.R = o.R || 0.3;
    this.big = !!o.big;
    this.small = !!o.small;
    this.ang = o.ang ?? rnd(0, TAU); this.av = o.av ?? rnd(-3, 3);
    this.state = o.state || 'falling';
    this.drag = o.drag ?? (this.big ? 2.2 : this.small ? 1.1 : 1.5);
    this.g = 9;
    this.onGround = false; this.slowT = 0; this.bounces = 0;
    this.trailT = 0; this.age = 0;
    this.hint = 0; this.glowK = 1;
    this.sink = 0; this.sinkY = 0; this.clipY = null;
    this.restOn = null; this.contactT = 0;
    this.useLeaves = !!o.useLeaves;
    this.scale = 1; this.squash = new Spring(1, 260, 14);
    this.lastBounceT = -1;
    this.fallSound = false;
    this.popped = false;
  }

  /* distance from centre to lowest point for the current rotation */
  support(ang) {
    let m = 0;
    for (let k = 0; k < 5; k++) {
      const a = ang + PI / 2 + (k * TAU) / 5;
      m = Math.min(m, Math.sin(a));
    }
    return -m * this.R * 0.9;
  }

  update(dt) {
    this.age += dt;
    this.squash.update(dt);
    if (this.state === 'falling' || this.state === 'ground') this.physics(dt);
    else if (this.state === 'rest') {
      if (this.restOn) {
        const p = this.restOn.plant.leafPoint(this.restOn.leaf, this.restOn.off);
        const la = this.restOn.plant.leafAngle(this.restOn.leaf);
        this.x = p.x - Math.sin(la) * this.R * 0.75;
        this.y = p.y + Math.cos(la) * this.R * 0.75;
      } else {
        // settle onto two points
        const target = Math.round((this.ang) / (TAU / 5)) * (TAU / 5);
        const da = angNorm(target - this.ang);
        this.ang += da * Math.min(1, dt * 6);
        this.x -= da * Math.min(1, dt * 6) * this.R * 0.8;
        this.y = terrainY(this.x) + this.support(this.ang);
      }
    }
    // sparkle trail while flying
    if (this.state === 'falling' && !this.onGround) {
      this.trailT -= dt;
      if (this.trailT < 0) {
        this.trailT = 0.025;
        FX.add({ x: this.x + rnd(-0.08, 0.08) * this.R * 3, y: this.y + rnd(-0.08, 0.08), vx: -this.vx * 0.1 + rnd(-0.2, 0.2), vy: -this.vy * 0.1 + rnd(-0.1, 0.2), life: rnd(0.4, 0.9), size: rnd(0.025, 0.06) * (this.small ? 0.7 : 1), type: 'spark', drag: 2, g: -0.2, col: this.big ? 'rose' : 'warm' });
      }
    }
  }

  physics(dt) {
    const steps = 3, h = dt / steps;
    for (let s = 0; s < steps; s++) {
      this.vy -= this.g * h;
      const f = Math.exp(-this.drag * h * (this.onGround ? 0 : 1));
      this.vx *= f; this.vy *= f;
      this.x += this.vx * h; this.y += this.vy * h;
      this.ang += this.av * h;
      this.onGround = false;
      if (this.useLeaves) this.collideLeaves(h);
      this.collideGround(h);
    }
    // rest detection
    const sp = Math.hypot(this.vx, this.vy);
    if (this.state === 'ground') {
      if (sp < 0.28 && this.onGround) this.slowT += dt; else this.slowT = 0;
      if (this.slowT > 0.22) { this.state = 'rest'; this.vx = this.vy = 0; this.av = 0; }
    }
    if (this.restOn === null && this.useLeaves && this.contactT > 0.45 && sp < 0.5 && this.leafContact) {
      const c = this.leafContact;
      this.state = 'rest';
      this.restOn = { plant: c.plant, leaf: c.leaf, off: c.off };
      this.vx = this.vy = 0; this.av = 0;
    }
  }

  collideGround(h) {
    const gy = terrainY(this.x);
    const sup = this.support(this.ang);
    if (this.y - sup < gy) {
      this.y = gy + sup;
      this.onGround = true;
      if (this.vy < 0) {
        const impact = -this.vy;
        if (impact > 1.1) {
          this.vy = impact * (this.big ? 0.28 : this.bounces === 0 ? 0.38 : 0.22);
          this.bounces++;
          this.impact(impact);
        } else this.vy = 0;
      }
      if (this.state === 'falling') this.state = 'ground';
      // roll down slopes, rolling friction
      // a pointed star only tumbles on real slopes
      const sl = terrainSlope(this.x);
      if (Math.abs(sl) > 0.12) this.vx += -9 * Math.sin(Math.atan(sl)) * 0.55 * h;
      this.vx *= Math.exp(-(Math.abs(this.vx) < 0.5 ? 5 : 2.6) * h);
      this.av = -this.vx / (this.R * 0.83);
      // pebbles at the creek lips / rock wall bump the star back
      const isl = walkIslandOf(this.x);
      if (isl) {
        if (this.x < isl[0] + 0.1 && this.vx < 0) { this.vx = Math.abs(this.vx) * 0.35; Sound.roll(Cam.panOf(this.x)); }
        if (this.x > isl[1] - 0.1 && this.vx > 0) { this.vx = -Math.abs(this.vx) * 0.35; Sound.roll(Cam.panOf(this.x)); }
      }
    }
  }

  collideLeaves(h) {
    this.leafContact = null;
    let touching = false;
    for (const p of G.plants) {
      if (!p || !p.visible) continue;
      for (const L of p.leaves) {
        if (!L.platform || L.unfold < 0.85) continue;
        const b = p.leafBase(L), a = p.leafAngle(L), len = L.len * L.scaleNow;
        const dx = Math.cos(a), dy = Math.sin(a);
        const rx = this.x - b.x, ry = this.y - b.y;
        const along = rx * dx + ry * dy;
        if (along < -0.05 || along > len + 0.05) continue;
        // normal pointing "up" relative to leaf
        let nx = -dy, ny = dx;
        if (ny < 0) { nx = -nx; ny = -ny; }
        const dist = rx * nx + ry * ny;
        const rr = this.R * 0.75;
        if (dist < rr && dist > -rr * 0.8) {
          touching = true;
          this.leafContact = { plant: p, leaf: L, off: clamp(along, 0.1, len - 0.05) };
          this.x += nx * (rr - dist); this.y += ny * (rr - dist);
          const vn = this.vx * nx + this.vy * ny;
          if (vn < 0) {
            const e = this.big ? 0.22 : this.small ? 0.7 : 0.72;
            const impact = -vn;
            this.vx -= (1 + e) * vn * nx; this.vy -= (1 + e) * vn * ny;
            // tangential friction
            const vt = this.vx * dx + this.vy * dy;
            this.vx -= vt * dx * 0.15; this.vy -= vt * dy * 0.15;
            // the leaf dips and the whole plant takes the hit
            L.av -= impact * Math.cos(a) * (this.big ? 0.5 : 0.25) / Math.max(0.5, len);
            p.impulse(L.s, 0, -impact * (this.big ? 1.6 : 0.5), b.x + dx * along);
            if (impact > 0.9 && G.time - this.lastBounceT > 0.12) {
              this.lastBounceT = G.time;
              this.bounces++;
              this.squash.kick(-impact * 1.2);
              if (this.small) { this.popOnLeaf(true); return; }
              Sound.bounce(Cam.panOf(this.x), this.bounces);
              FX.sparks(this.x, this.y - rr, 5, 1.2);
            }
          }
          this.av = -(this.vx * dx + this.vy * dy) / (this.R * 0.83);
        }
      }
    }
    // the lump of soil held in the crown is round and solid
    for (const p of G.plants) {
      if (!p || !p.visible || !p.soil || !p.soil.show) continue;
      const q = p.soilPos(), rr = p.soil.r * 0.95 + this.R * 0.7;
      const dx = this.x - q.x, dy = this.y - q.y, d = Math.hypot(dx, dy);
      if (d < rr && d > 1e-4) {
        const nx = dx / d, ny = dy / d;
        this.x = q.x + nx * rr; this.y = q.y + ny * rr;
        const vn = this.vx * nx + this.vy * ny;
        if (vn < 0) {
          if (this.small) { this.popOnLeaf(true); return; }
          const e = this.big ? 1.2 : 1.6;
          this.vx -= e * vn * nx; this.vy -= e * vn * ny;
          if (-vn > 1) Sound.roll(Cam.panOf(this.x));
        }
        touching = true;
      }
    }
    if (touching) this.contactT += h; else this.contactT = 0;
  }

  popOnLeaf(drink) {
    // tiny stars burst into glitter that the leaves soak up
    this.popped = true; this.state = 'gone';
    FX.sparks(this.x, this.y, 14, 1.6, { col: drink ? 'plant' : 'warm' });
    if (drink) { Sound.pop(this.id, Cam.panOf(this.x)); if (G.onLeafDrink) G.onLeafDrink(this); }
  }

  impact(v) {
    const pan = Cam.panOf(this.x);
    const big = this.big ? 1.6 : 1;
    this.squash.kick(-v * 0.9);
    if (this.bounces === 1) {
      Sound.land(pan, big);
      Cam.shake(0.03 * big);
      FX.dust(this.x, terrainY(this.x), 10, 1.4);
      FX.ring(this.x, terrainY(this.x) + 0.02, 1.4 * big);
      FX.sparks(this.x, this.y, 10, 2.2);
      if (G.onStarImpact) G.onStarImpact(this);
    } else {
      Sound.bounce(pan, this.bounces);
      FX.dust(this.x, terrainY(this.x), 4, 0.8);
    }
  }

  lightInfo() {
    const pulse = 1 + 0.08 * Math.sin(G.time * 3 + this.id) + this.hint * 0.5 * (0.5 + 0.5 * Math.sin(G.time * 5));
    let i = (this.big ? 1.5 : this.small ? 0.35 : 1.0) * pulse * this.glowK;
    let y = this.y;
    if (this.state === 'sinking') { i *= 1 - this.sink * 0.7; }
    return { i, r: this.big ? 3.4 : this.small ? 1.2 : 2.4 };
  }

  registerLight() {
    if (this.state === 'gone') return;
    const L = this.lightInfo();
    Lights.add(this.x, this.y, L.i, L.r, this.big ? 'rose' : 'warm');
  }

  path(ctx, R) {
    ctx.beginPath();
    for (let k = 0; k < 10; k++) {
      const a = PI / 2 + (k * PI) / 5;
      const r = k % 2 === 0 ? R : R * 0.5;
      const x = Math.cos(a) * r, y = Math.sin(a) * r;
      if (k === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
  }

  draw(ctx) {
    if (this.state === 'gone' || this.hidden) return;
    const sq = clamp(this.squash.v, 0.6, 1.4);
    ctx.save();
    if (this.clipY !== null) {
      ctx.beginPath(); ctx.rect(this.x - 2, this.clipY, 4, 4); ctx.clip();
    }
    ctx.translate(this.x, this.y);
    ctx.scale((2 - sq) * this.scale, sq * this.scale);
    ctx.rotate(this.ang);
    const R = this.R;
    ctx.lineJoin = 'round';
    this.path(ctx, R);
    const g = ctx.createRadialGradient(-R * 0.15, R * 0.2, 0, 0, 0, R);
    if (this.big) {
      g.addColorStop(0, '#fffaf2'); g.addColorStop(0.45, '#ffe0c8'); g.addColorStop(1, '#ff9f86');
    } else {
      g.addColorStop(0, '#fffdf0'); g.addColorStop(0.5, '#ffe7a6'); g.addColorStop(1, '#ffb858');
    }
    ctx.fillStyle = g;
    ctx.lineWidth = R * 0.28;
    ctx.strokeStyle = this.big ? '#ffc2a8' : '#ffd68a';
    ctx.stroke();
    ctx.fill();
    // soft inner facet
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.beginPath(); ctx.ellipse(-R * 0.12, R * 0.18, R * 0.22, R * 0.14, -0.5, 0, TAU); ctx.fill();
    ctx.restore();
  }

  drawGlow(ctx) {
    if (this.state === 'gone' || this.hidden) return;
    const L = this.lightInfo();
    const name = this.big ? 'rose' : 'warm';
    const sc = this.scale;
    if (this.clipY !== null && this.y < this.clipY + this.R) {
      // under the soil: light shows through the ground as a dimming glow
      drawGlow(ctx, name, this.x, this.y, this.R * 4 * sc, 0.6 * L.i);
      return;
    }
    const held = this.state === 'carried' || this.state === 'lifted' ? 0.3 : 1;
    drawGlow(ctx, name, this.x, this.y, this.R * 6 * sc, 0.55 * L.i * held);
    drawGlow(ctx, name, this.x, this.y, this.R * 2.2 * sc, 0.6 * L.i * (0.5 + held * 0.5));
    if (this.big) {
      // slow rotating halo
      ctx.globalAlpha = 0.25;
      ctx.strokeStyle = 'rgb(255,210,190)'; ctx.lineWidth = 0.03;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.R * 1.9 + Math.sin(G.time * 2) * 0.05, 0, TAU); ctx.stroke();
      ctx.globalAlpha = 1;
    }
  }
}

/* which walkable island contains x (stars are kept on islands) */
const ISLANDS = [[-3.6, 2.78], [5.62, 11.45], [14.95, 19.42], [20.1, 28.1]];
function walkIslandOf(x) {
  for (const r of ISLANDS) if (x >= r[0] - 0.2 && x <= r[1] + 0.2) return r;
  return null;
}
