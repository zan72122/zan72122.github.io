// やわらかそざいあそび - overlay effects on the fx-canvas:
// confetti bursts, star rewards, touch ripples, sparkle dust and the
// sprinkle toppings that ride the material (tracer particles from the sim).
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const FX = {
    parts: [],   // {kind, x, y, vx, vy, rot, vr, size, color, life, maxLife}
    max: 420,
  };

  const CONFETTI_COLORS = ['#ff6f9c', '#ffd24d', '#6fd3ff', '#8ce88a', '#c99cff', '#ffb46f'];

  function push(p) {
    if (FX.parts.length >= FX.max) FX.parts.shift();
    FX.parts.push(p);
  }

  // css-px based effects ------------------------------------------------------
  FX.confetti = function (x, y, count) {
    for (let i = 0; i < (count || 70); i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 140 + Math.random() * 420;
      push({
        kind: 'confetti',
        x, y,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp - 260,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 14,
        size: 5 + Math.random() * 7,
        color: U.pick(Math.random, CONFETTI_COLORS),
        life: 0,
        maxLife: 1.6 + Math.random() * 1.2,
      });
    }
  };

  FX.stars = function (x, y, count) {
    for (let i = 0; i < (count || 10); i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 60 + Math.random() * 260;
      push({
        kind: 'star', x, y,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 120,
        rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 8,
        size: 9 + Math.random() * 10,
        color: '#ffd24d',
        life: 0, maxLife: 1.1 + Math.random() * 0.7,
      });
    }
  };

  FX.ripple = function (x, y) {
    push({ kind: 'ripple', x, y, vx: 0, vy: 0, rot: 0, vr: 0,
           size: 12, color: 'rgba(255,255,255,0.8)', life: 0, maxLife: 0.5 });
  };

  FX.sparkle = function (x, y) {
    push({ kind: 'spark', x, y,
           vx: (Math.random() - 0.5) * 60, vy: -30 - Math.random() * 60,
           rot: 0, vr: 6, size: 3 + Math.random() * 4,
           color: 'rgba(255,255,255,0.95)', life: 0, maxLife: 0.6 });
  };

  FX.update = function (dt) {
    const H = (GAME.Renderer.cssH || 800) + 40;
    for (let i = FX.parts.length - 1; i >= 0; i--) {
      const p = FX.parts[i];
      p.life += dt;
      if (p.life >= p.maxLife || p.y > H) { FX.parts.splice(i, 1); continue; }
      if (p.kind === 'confetti' || p.kind === 'star') {
        p.vy += 620 * dt;
        p.vx *= 1 - 1.4 * dt;
      }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.vr * dt;
    }
  };

  function drawStar(ctx, r) {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const rad = i % 2 === 0 ? r : r * 0.45;
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      if (i === 0) ctx.moveTo(Math.cos(a) * rad, Math.sin(a) * rad);
      else ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad);
    }
    ctx.closePath();
  }

  FX.render = function (ctx) {
    // sprinkle toppings riding the sim (tracer particles)
    const Sim = GAME.Sim;
    const s = GAME.Renderer.scaleCss;
    for (let i = 0; i < Sim.n; i++) {
      if (!Sim.pKind[i]) continue;
      const x = Sim.px[i] * s, y = Sim.py[i] * s;
      ctx.fillStyle = U.rgbToCss(Sim.pr[i], Sim.pg[i], Sim.pb[i]);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((i * 37) % 6.28);
      ctx.beginPath();
      const w = s * 0.012;
      ctx.roundRect(-w * 1.4, -w * 0.55, w * 2.8, w * 1.1, w * 0.5);
      ctx.fill();
      ctx.restore();
    }

    // transient particles
    for (const p of FX.parts) {
      const t = p.life / p.maxLife;
      ctx.save();
      ctx.translate(p.x, p.y);
      if (p.kind === 'confetti') {
        ctx.rotate(p.rot);
        ctx.globalAlpha = 1 - t * t;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else if (p.kind === 'star') {
        ctx.rotate(p.rot);
        ctx.globalAlpha = 1 - t * t;
        ctx.fillStyle = p.color;
        drawStar(ctx, p.size);
        ctx.fill();
      } else if (p.kind === 'ripple') {
        ctx.globalAlpha = (1 - t) * 0.7;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 3 * (1 - t) + 1;
        ctx.beginPath();
        ctx.arc(0, 0, p.size + t * 70, 0, Math.PI * 2);
        ctx.stroke();
      } else if (p.kind === 'spark') {
        ctx.globalAlpha = 1 - t;
        ctx.fillStyle = p.color;
        drawStar(ctx, p.size * (1 - t * 0.5));
        ctx.fill();
      }
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  };

  GAME.FX = FX;
})();
