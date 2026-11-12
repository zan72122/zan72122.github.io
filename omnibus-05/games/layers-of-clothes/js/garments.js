// Garments: what each job adds (mass, thickness, coverage) and how the
// clothes look while hanging, being dragged and flying onto the girl.
(function () {
  'use strict';
  const C = K.C;

  // thick: how much each garment adds to the silhouette (torso / arm / leg)
  // sleeve & leg: how far down the limb it reaches (0..1). hem: coat skirt below the hip.
  K.GAR = {
    base: { mass: 18, thick: { t: 0, a: 0, l: 0 }, color: C.dress, sleeve: 0.35, leg: 0, hem: 12, collar: 0 },
    fire: {
      mass: 16, thick: { t: 8, a: 7, l: 7 }, color: C.fire, sleeve: 1.0, leg: 0.95, legColor: '#c8963b', hem: 18,
      collar: { h: 9, color: '#b98a31' }, zip: 'front', hat: 'helmet', feet: 'boots', stripes: true,
    },
    mech: {
      mass: 16, thick: { t: 7, a: 6, l: 6 }, color: C.mech, sleeve: 0.55, leg: 0.86, legColor: C.mech, hem: 4,
      collar: { h: 7, color: C.mechD }, zip: 'front', hat: 'cap', pockets: true,
    },
    cook: {
      mass: 8, thick: { t: 6, a: 5, l: 0 }, color: C.cook, sleeve: 0.8, leg: 0, hem: 9,
      collar: { h: 6, color: C.scarf }, zip: 'front', hat: 'toque', apron: true, buttons: true,
    },
    diver: {
      mass: 20, thick: { t: 5, a: 4, l: 5 }, color: C.diver, sleeve: 0.93, leg: 1.0, legColor: C.diver, hem: 12,
      collar: { h: 7, color: C.diverD }, zip: 'back', hat: 'mask', feet: 'fins', stretch: 0.9, sheen: true,
    },
  };
  K.JOBS = ['fire', 'mech', 'cook', 'diver'];

  // ---------- hats (shared by hanging bundles and the girl) ----------
  // x,y = point where the hat sits (top of whatever is under it). s = scale. f = facing.
  K.drawHat = function (ctx, kind, x, y, s, f) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(s, s);
    f = f || 1;
    if (kind === 'helmet') {
      // classic fire helmet: dome, front badge, long back brim
      const brim = new Path2D();
      brim.ellipse(-f * 4, 1, 36, 7, -0.06 * f, 0, K.TAU);
      K.paper(ctx, brim, '#b72f26', { depth: 2 });
      const dome = new Path2D();
      dome.moveTo(-26, 2);
      dome.bezierCurveTo(-26, -30, 26, -30, 26, 2);
      dome.closePath();
      K.paper(ctx, dome, C.helmet, { depth: 2 });
      ctx.strokeStyle = '#ee6a55'; ctx.lineWidth = 2.2;
      ctx.beginPath(); ctx.moveTo(0, -20); ctx.bezierCurveTo(-3, -12, -3, -5, 0, 1); ctx.stroke();
      K.paper(ctx, K.rr(f * 8 - 6, -17, 12, 14, 3), '#f2d060', { depth: 0 });
      K.dot(ctx, f * 8, -10, 2.4, '#b72f26');
    } else if (kind === 'cap') {
      const crown = new Path2D();
      crown.moveTo(-17, 2); crown.bezierCurveTo(-17, -18, 17, -18, 17, 2); crown.closePath();
      K.paper(ctx, crown, C.mech, { depth: 2 });
      K.paper(ctx, K.ell(f * 17, 1, 14, 4, 0.1 * f), C.mechD, { depth: 1.5 });
      K.dot(ctx, 0, -13, 2.4, C.mechD);
      ctx.fillStyle = '#f2c230'; ctx.fillRect(-7, -9, 14, 4);
    } else if (kind === 'toque') {
      K.paper(ctx, K.rr(-14, -26, 28, 28, 3), C.cook, { depth: 2 });
      const puff = new Path2D();
      puff.ellipse(-11, -32, 12, 12, 0, 0, K.TAU);
      puff.ellipse(0, -38, 14, 14, 0, 0, K.TAU);
      puff.ellipse(11, -32, 12, 12, 0, 0, K.TAU);
      K.paper(ctx, puff, C.cook, { depth: 2, line: C.cookD });
      ctx.strokeStyle = C.cookD; ctx.lineWidth = 1.2;
      for (let i = -8; i <= 8; i += 8) { ctx.beginPath(); ctx.moveTo(i, -2); ctx.lineTo(i, -24); ctx.stroke(); }
    }
    ctx.restore();
  };

  // ---------- flat garments on hangers ----------
  function hanger(ctx) {
    ctx.strokeStyle = C.woodD; ctx.lineWidth = 3; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(0, -4, 5, Math.PI * 1.1, Math.PI * 2.1); ctx.stroke();
    K.limb(ctx, [-30, 16, 0, 4, 30, 16], 5, C.wood, { depth: 1 });
  }
  function coatShape(w, len, sleeveLen, sleeveW) {
    const p = new Path2D();
    const sh = w / 2;
    p.moveTo(-sh + 4, 12);
    p.lineTo(-sh - 10, 18);
    p.lineTo(-sh - 16, 18 + sleeveLen);
    p.lineTo(-sh - 16 + sleeveW, 20 + sleeveLen);
    p.lineTo(-sh - 2, 38);
    p.lineTo(-sh - 4, len);
    p.lineTo(sh + 4, len);
    p.lineTo(sh + 2, 38);
    p.lineTo(sh + 16 - sleeveW, 20 + sleeveLen);
    p.lineTo(sh + 16, 18 + sleeveLen);
    p.lineTo(sh + 10, 18);
    p.lineTo(sh - 4, 12);
    p.lineTo(8, 14); p.lineTo(0, 24); p.lineTo(-8, 14);
    p.closePath();
    return p;
  }
  K.drawGarmentFlat = function (ctx, id, withHanger) {
    if (withHanger) hanger(ctx);
    if (id === 'fire') {
      const p = coatShape(52, 112, 58, 18);
      K.paper(ctx, p, C.fire, { depth: 4 });
      // reflective bands
      ctx.save(); ctx.clip(p);
      for (const y of [74, 96]) { ctx.fillStyle = C.reflect; ctx.fillRect(-60, y, 120, 6); ctx.fillStyle = C.silver; ctx.fillRect(-60, y + 2, 120, 2); }
      ctx.fillStyle = C.reflect; ctx.fillRect(-60, 62, 120, 0);
      ctx.fillStyle = C.reflect; ctx.fillRect(-60, 66, 18, 6); ctx.fillRect(42, 66, 18, 6);
      ctx.restore();
      K.line(ctx, [0, 24, 0, 112], 1.6, C.fireD);
      K.paper(ctx, K.rr(-12, 8, 24, 10, 4), '#b98a31', { depth: 0 });
      K.drawHat(ctx, 'helmet', 0, -12, 0.9, 1);
    } else if (id === 'mech') {
      // coverall: torso + legs
      const p = new Path2D();
      p.moveTo(-26, 12); p.lineTo(-40, 18); p.lineTo(-46, 44); p.lineTo(-32, 46); p.lineTo(-28, 36);
      p.lineTo(-30, 150); p.lineTo(-6, 150); p.lineTo(0, 86); p.lineTo(6, 150); p.lineTo(30, 150);
      p.lineTo(28, 36); p.lineTo(32, 46); p.lineTo(46, 44); p.lineTo(40, 18); p.lineTo(26, 12);
      p.lineTo(8, 14); p.lineTo(0, 24); p.lineTo(-8, 14); p.closePath();
      K.paper(ctx, p, C.mech, { depth: 4 });
      K.line(ctx, [0, 24, 0, 84], 1.6, C.mechD);
      K.paper(ctx, K.rr(-22, 40, 14, 12, 2), C.mechD, { depth: 0 });
      K.paper(ctx, K.rr(8, 40, 14, 12, 2), C.mechD, { depth: 0 });
      // tool belt
      K.paper(ctx, K.rr(-32, 72, 64, 9, 2), '#7a4a2a', { depth: 1 });
      K.paper(ctx, K.rr(-4, 71, 8, 11, 1), C.brass, { depth: 0 });
      drawWrench(ctx, 24, 80, 1.5, 0.9);
      K.paper(ctx, K.rr(-30, 80, 12, 16, 2), '#8c5a33', { depth: 1 });
      K.drawHat(ctx, 'cap', 0, -8, 0.95, 1);
    } else if (id === 'cook') {
      const p = coatShape(50, 100, 46, 18);
      K.paper(ctx, p, C.cook, { depth: 4, line: C.cookD });
      for (let i = 0; i < 3; i++) { K.dot(ctx, -8, 40 + i * 16, 2.6, C.cookD); K.dot(ctx, 8, 40 + i * 16, 2.6, C.cookD); }
      K.paper(ctx, K.poly([-16, 54, 16, 54, 20, 118, -20, 118]), '#efe7d4', { depth: 2, line: C.cookD });
      K.paper(ctx, K.poly([-10, 12, 10, 12, 0, 26]), C.scarf, { depth: 0 });
      K.drawHat(ctx, 'toque', 0, -10, 0.8, 1);
    } else if (id === 'diver') {
      // air tank behind
      K.paper(ctx, K.rr(-15, 8, 30, 92, 14), C.yellow, { depth: 3 });
      K.paper(ctx, K.rr(-5, 0, 10, 12, 2), C.ironL, { depth: 1 });
      const p = new Path2D();
      p.moveTo(-24, 14); p.lineTo(-36, 20); p.lineTo(-44, 72); p.lineTo(-33, 74); p.lineTo(-26, 40);
      p.lineTo(-28, 150); p.lineTo(-6, 150); p.lineTo(0, 92); p.lineTo(6, 150); p.lineTo(28, 150);
      p.lineTo(26, 40); p.lineTo(33, 74); p.lineTo(44, 72); p.lineTo(36, 20); p.lineTo(24, 14);
      p.lineTo(0, 18); p.closePath();
      K.paper(ctx, p, C.diver, { depth: 4 });
      ctx.save(); ctx.clip(p);
      ctx.fillStyle = C.yellow; ctx.fillRect(-40, 30, 6, 130); ctx.fillRect(34, 30, 6, 130);
      ctx.fillStyle = 'rgba(160,190,230,0.25)'; ctx.fillRect(-20, 20, 7, 130);
      ctx.restore();
      // fins clipped under the legs
      K.paper(ctx, K.poly([-26, 150, -8, 150, -4, 178, -30, 178]), C.yellow, { depth: 2 });
      K.paper(ctx, K.poly([8, 150, 26, 150, 30, 178, 4, 178]), C.yellow, { depth: 2 });
      // mask on the hook
      drawMask(ctx, 0, -2, 0.9);
    }
  };

  function drawWrench(ctx, x, y, s, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot || 0); ctx.scale(s, s);
    K.limb(ctx, [0, 0, 0, 22], 4, C.ironL, { depth: 1 });
    const head = new Path2D();
    head.arc(0, -2, 5.5, 0.35 * Math.PI, 2.65 * Math.PI);
    K.paper(ctx, head, C.ironL, { depth: 1 });
    ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(-2, -8, 4, 5);
    ctx.restore();
  }
  K.drawWrench = drawWrench;

  function drawMask(ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    K.line(ctx, [-22, 0, 22, 0], 3.5, '#222');
    K.paper(ctx, K.rr(-15, -9, 30, 18, 7), '#2b2b30', { depth: 1.5 });
    ctx.fillStyle = 'rgba(170,220,240,0.75)';
    ctx.fill(K.rr(-12, -6.5, 24, 13, 5));
    ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.fillRect(-8, -5, 5, 3);
    ctx.restore();
  }
  K.drawMask = drawMask;

  // ---------- hanging, draggable garment bundle ----------
  K.makeGarment = function (id, hx, hy) {
    const g = {
      id, hx, hy, x: hx, y: hy, ang: 0, av: 0, state: 'hang', wig: 0, gx: 0, gy: 0,
      lastX: hx, fly: 0, fromX: 0, fromY: 0, scale: 1, onWorn: null, glint: 0,
      bounds() { return [this.x - 55, this.y - 30, this.x + 55, this.y + (id === 'mech' || id === 'diver' ? 170 : 125)]; },
      hit(p) {
        const b = this.bounds();
        const pad = K.cam.touchR(0, 22);
        return this.state === 'hang' && p.x > b[0] - pad && p.x < b[2] + pad && p.y > b[1] - pad && p.y < b[3] + pad;
      },
      grab(p) { this.state = 'drag'; this.gx = this.x - p.x; this.gy = this.y - p.y; K.sfx.rustle(0.6); },
      dragTo(p) { this.x = p.x + this.gx; this.y = p.y + this.gy; },
      // true if released over the girl
      release() {
        const G = K.girl;
        const b = this.bounds();
        const cx = (b[0] + b[2]) / 2, cy = (b[1] + b[3]) / 2;
        const gb = G.bounds();
        const near = cx > gb[0] - 70 && cx < gb[2] + 70 && cy > gb[1] - 90 && cy < gb[3] + 60;
        if (near) { this.putOn(); return true; }
        this.state = 'return';
        K.sfx.whoosh();
        return false;
      },
      putOn() {
        this.state = 'fly'; this.fly = 0; this.fromX = this.x; this.fromY = this.y;
        K.girl.armsUp = 1;
        K.sfx.whoosh();
      },
      update(dt) {
        // pendulum: swings from how the hook moves
        const vx = (this.x - this.lastX) / Math.max(dt, 1e-4);
        this.lastX = this.x;
        this.av += (-this.ang * 38 - this.av * 4.5 - vx * 0.06) * dt;
        this.ang += this.av * dt;
        this.ang = K.clamp(this.ang, -1.1, 1.1);
        if (this.wig > 0) { this.wig -= dt; this.av += Math.sin(this.wig * 22) * 9 * dt * 4; }
        this.glint = Math.max(0, this.glint - dt);
        if (this.state === 'return') {
          this.x = K.follow(this.x, this.hx, 9, dt); this.y = K.follow(this.y, this.hy, 9, dt);
          if (K.dist(this.x, this.y, this.hx, this.hy) < 1) { this.x = this.hx; this.y = this.hy; this.state = 'hang'; }
        } else if (this.state === 'fly') {
          this.fly += dt / 0.75;
          const G = K.girl, gb = G.bounds();
          const topY = gb[1] - 150, cx = G.x;
          const t = K.sat(this.fly);
          if (t < 0.5) {
            const u = K.easeInOut(t / 0.5);
            this.x = K.lerp(this.fromX, cx, u);
            this.y = K.lerp(this.fromY, topY, u) - Math.sin(u * Math.PI) * 40;
            this.scale = 1;
          } else {
            const u = K.easeIn((t - 0.5) / 0.5);
            this.x = cx; this.y = K.lerp(topY, gb[1] + 10, u);
            this.scale = 1 - u * 0.15;
          }
          this.ang = K.follow(this.ang, 0, 10, dt);
          if (this.fly >= 1) {
            this.state = 'worn';
            if (this.onWorn) this.onWorn();
          }
        }
      },
      draw(ctx) {
        if (this.state === 'worn') return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.ang);
        ctx.scale(this.scale, this.scale);
        if (this.state === 'fly' && this.fly > 0.5) {
          // sliding down over her: clip to above her feet so it looks like it goes on
          ctx.globalAlpha = 1 - K.sat((this.fly - 0.8) / 0.2);
        }
        K.drawGarmentFlat(ctx, id, this.state !== 'fly');
        ctx.restore();
        if (this.state === 'hang' && this.glint > 0) K.sparkle(ctx, this.x + 26, this.y + 40, 14, Math.sin(this.glint * Math.PI));
      },
      hint() { this.wig = 0.8; this.glint = 1; },
    };
    return g;
  };
})();
