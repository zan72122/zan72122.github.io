// Particles: water, steam, smoke, dust, bubbles, drips, embers, chips.
// Water drops report collisions through K.P.hitters so rooms can react
// (fire loses heat, pots fill, ice melts).
(function () {
  'use strict';
  const P = (K.P = { list: [], hitters: [] });
  const MAX = 900;

  P.spawn = function (type, x, y, vx, vy, o) {
    if (P.list.length >= MAX) P.list.shift();
    const p = Object.assign({ type, x, y, vx, vy, age: 0, life: 1, r: 3, g: 900, layer: 'front' }, o || {});
    P.list.push(p);
    return p;
  };

  // convenience emitters
  P.dust = function (x, y, n, power) {
    for (let i = 0; i < n; i++) {
      const s = (Math.random() < 0.5 ? -1 : 1);
      P.spawn('dust', x + K.rand(-6, 6), y - 2, s * K.rand(20, 90) * power, -K.rand(10, 60) * power,
        { life: K.rand(0.5, 1.0), r: K.rand(3, 7) * (0.6 + power * 0.5), g: -20, color: 'rgba(170,140,105,', layer: 'front' });
    }
  };
  P.steam = function (x, y, n, spread, o) {
    for (let i = 0; i < n; i++) {
      P.spawn('steam', x + K.rand(-spread, spread), y, K.rand(-20, 20), -K.rand(40, 110),
        Object.assign({ life: K.rand(1.0, 2.0), r: K.rand(6, 12), g: -30, layer: 'front' }, o || {}));
    }
  };
  P.splash = function (x, y, n, power, o) {
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + K.rand(-1.1, 1.1);
      const sp = K.rand(120, 380) * power;
      P.spawn('drop', x + K.rand(-10, 10), y, Math.cos(a) * sp, Math.sin(a) * sp,
        Object.assign({ life: 1.4, r: K.rand(2, 4.5), solid: false }, o || {}));
    }
  };
  P.bubbles = function (x, y, n, o) {
    for (let i = 0; i < n; i++) {
      P.spawn('bubble', x + K.rand(-4, 4), y + K.rand(-4, 4), K.rand(-15, 15), -K.rand(40, 90),
        Object.assign({ life: 6, r: K.rand(2.5, 6), g: -140, layer: 'front', wob: Math.random() * 6 }, o || {}));
    }
  };

  P.update = function (dt) {
    const L = P.list;
    for (let i = L.length - 1; i >= 0; i--) {
      const p = L[i];
      p.age += dt;
      if (p.age >= p.life) { L.splice(i, 1); continue; }
      switch (p.type) {
        case 'drop': case 'water': case 'hot': case 'chip': case 'ember': {
          p.vy += p.g * dt;
          p.x += p.vx * dt; p.y += p.vy * dt;
          if (p.type === 'ember') { p.vx *= 0.98; }
          // let rooms react (fire, pots, ice, floor)
          if (p.solid !== false) {
            for (const h of P.hitters) {
              if (h.test(p)) { if (h.hit(p) !== false) { L.splice(i, 1); break; } }
            }
            if (L[i] !== p) break;
          }
          const fy = K.world.floorY(p.x);
          if (p.y > fy && p.type !== 'ember' && fy !== null) {
            if (p.type === 'water' || p.type === 'hot') {
              if (Math.random() < 0.3) P.spawn('drop', p.x, fy - 1, p.vx * 0.2 + K.rand(-40, 40), -K.rand(40, 120), { life: 0.5, r: 2, solid: false });
              if (Math.random() < 0.12) K.world.puddle(p.x, p.type === 'hot');
              if (p.type === 'hot' && Math.random() < 0.4) P.steam(p.x, fy - 4, 1, 4);
            }
            L.splice(i, 1);
          }
          break;
        }
        case 'steam': case 'smoke': {
          p.vx *= 0.99; p.vy += p.g * dt * 0.2;
          p.vx += Math.sin(p.age * 2 + p.x * 0.01) * 6 * dt;
          p.x += p.vx * dt; p.y += p.vy * dt;
          p.r += dt * (p.type === 'smoke' ? 14 : 10);
          break;
        }
        case 'dust': {
          p.vx *= 0.94; p.vy *= 0.94; p.vy += p.g * dt;
          p.x += p.vx * dt; p.y += p.vy * dt; p.r += dt * 6;
          break;
        }
        case 'bubble': {
          p.wob += dt * 7;
          p.vy = K.follow(p.vy, -110 - p.r * 12, 3, dt);
          p.x += (p.vx + Math.sin(p.wob) * 22) * dt;
          p.y += p.vy * dt;
          p.vx *= 0.97;
          for (const h of P.hitters) {
            if (h.bubble && h.test(p)) { if (h.hit(p) !== false) { L.splice(i, 1); break; } }
          }
          if (L[i] !== p) break;
          const top = K.world.waterTop(p.x, p.y);
          if (top !== null && p.y < top) {
            if (Math.random() < 0.3) K.sfx.blip();
            L.splice(i, 1);
          }
          break;
        }
        case 'spark': {
          p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.9; p.vy *= 0.9;
          break;
        }
        case 'crack': break;
      }
    }
  };

  P.draw = function (ctx, layer) {
    for (const p of P.list) {
      if (p.layer !== layer) continue;
      const t = p.age / p.life;
      switch (p.type) {
        case 'drop': case 'water': {
          ctx.fillStyle = p.color || 'rgba(120,190,225,0.9)';
          const sp = Math.hypot(p.vx, p.vy);
          if (sp > 150) {
            const k = Math.min(0.035, 6 / sp);
            ctx.lineCap = 'round'; ctx.strokeStyle = ctx.fillStyle; ctx.lineWidth = p.r * 2;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * k, p.y - p.vy * k); ctx.stroke();
          } else {
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, K.TAU); ctx.fill();
          }
          break;
        }
        case 'hot': {
          ctx.fillStyle = 'rgba(190,225,240,0.95)';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, K.TAU); ctx.fill();
          break;
        }
        case 'steam': {
          const a = (1 - t) * (p.alpha || 0.5) * K.sat(t * 6);
          ctx.fillStyle = 'rgba(255,255,255,' + a.toFixed(3) + ')';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, K.TAU); ctx.fill();
          break;
        }
        case 'smoke': {
          const a = (1 - t) * 0.35 * K.sat(t * 5);
          ctx.fillStyle = 'rgba(90,80,76,' + a.toFixed(3) + ')';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, K.TAU); ctx.fill();
          break;
        }
        case 'dust': {
          ctx.fillStyle = p.color + ((1 - t) * 0.55).toFixed(3) + ')';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, K.TAU); ctx.fill();
          break;
        }
        case 'bubble': {
          ctx.strokeStyle = 'rgba(235,250,255,0.85)'; ctx.lineWidth = 1.3;
          ctx.fillStyle = 'rgba(210,240,255,0.22)';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, K.TAU); ctx.fill(); ctx.stroke();
          K.dot(ctx, p.x - p.r * 0.35, p.y - p.r * 0.35, p.r * 0.25, 'rgba(255,255,255,0.9)');
          break;
        }
        case 'ember': {
          ctx.fillStyle = 'rgba(255,' + Math.floor(160 + 80 * (1 - t)) + ',60,' + (1 - t).toFixed(3) + ')';
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r * (1 - t * 0.5), 0, K.TAU); ctx.fill();
          break;
        }
        case 'chip': {
          ctx.fillStyle = p.color || K.C.ice;
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.age * 8);
          ctx.fillRect(-p.r, -p.r * 0.6, p.r * 2, p.r * 1.2); ctx.restore();
          break;
        }
        case 'spark': {
          K.sparkle(ctx, p.x, p.y, p.r * (1 - t * 0.6), 1 - t);
          break;
        }
      }
    }
  };
})();
