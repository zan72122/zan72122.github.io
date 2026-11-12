// Kitchen by the frozen lake: fill the pot with the (firefighter's) hose,
// light the stove, wait for the boil, tip the pot and melt a hole in the ice.
(function () {
  'use strict';
  const C = K.C;
  const Ck = (K.cook = {
    hookX: 2772, hookY: -170, standX: 2700, tapX: 2826, tapY: -78, fillX: 2790,
    stoveX: 2900, potW: 58, potH: 48, level: 0, temp: 0, lit: false, knobA: 0, tilt: 0,
    boiling: false, pouring: false, poured: false, taken: false, jacket: null, knobT: 0,
    diverHookX: 2640, diverHookY: -186, diverStandX: 2708,
  });

  Ck.reset = function () {
    Object.assign(Ck, { level: 0, temp: 0, lit: false, knobA: 0, tilt: 0, boiling: false, pouring: false, poured: false, taken: false, knobT: 0 });
    Ck.jacket = K.makeGarment('cook', Ck.hookX, Ck.hookY);
    Ck.wetsuit = K.makeGarment('diver', Ck.diverHookX, Ck.diverHookY);
    K.world.addProp('can', 2625, { need: 20 });
  };

  // pot geometry (pivot = right bottom corner so it tips toward the lake)
  Ck.pivot = () => ({ x: Ck.stoveX + Ck.potW / 2, y: -58 });
  Ck.potPt = function (lx, ly) {
    // local point relative to pivot, rotated by tilt
    const p = Ck.pivot();
    const c = Math.cos(Ck.tilt), s = Math.sin(Ck.tilt);
    return { x: p.x + lx * c - ly * s, y: p.y + lx * s + ly * c };
  };
  Ck.handle = () => Ck.potPt(-Ck.potW - 9, -Ck.potH + 12);
  Ck.lip = () => Ck.potPt(4, -Ck.potH);
  Ck.knob = () => ({ x: Ck.stoveX - 18, y: -26 });
  Ck.hitKnob = (p) => { const k = Ck.knob(); return K.dist(p.x, p.y, k.x, k.y) < K.cam.touchR(26); };
  Ck.hitHandle = (p) => { const h = Ck.handle(); return K.dist(p.x, p.y, h.x, h.y) < K.cam.touchR(34) || (Math.abs(p.x - Ck.stoveX) < 40 && p.y > -120 && p.y < -50); };

  // hose water landing in the pot
  K.P.hitters.push({
    test(p) {
      if (p.type !== 'water' || Ck.tilt > 0.05 || p.vy < 0) return false;
      const x0 = Ck.stoveX - Ck.potW / 2 + 4, x1 = Ck.stoveX + Ck.potW / 2 - 4;
      const top = -58 - Ck.potH;
      return p.x > x0 && p.x < x1 && p.y > top - 4 && p.y < top + 14;
    },
    hit() {
      if (Ck.level < 1) Ck.level = Math.min(1, Ck.level + 0.016);
      else if (Math.random() < 0.3) K.P.spawn('drop', Ck.stoveX + K.rand(-30, 30), -106, K.rand(-60, 60), -K.rand(20, 80), { life: 0.6, r: 2, solid: false });
      if (Math.random() < 0.2) K.sfx.drip();
    },
  });

  Ck.light = function () {
    if (Ck.lit) return;
    Ck.lit = true; Ck.knobT = 0.4;
    K.sfx.ignite();
  };

  Ck.setTilt = function (t) { Ck.tilt = K.clamp(t, 0, 1.25); };

  Ck.update = function (dt) {
    Ck.jacket.update(dt);
    Ck.wetsuit.update(dt);
    Ck.knobA = K.follow(Ck.knobA, Ck.lit ? -1.6 : 0, 10, dt);
    if (Ck.lit && Ck.level > 0.1) Ck.temp = Math.min(1.2, Ck.temp + dt / 4.2);
    if (!Ck.lit) Ck.temp = Math.max(0, Ck.temp - dt * 0.05);
    const was = Ck.boiling;
    Ck.boiling = Ck.temp >= 1 && Ck.level > 0.05;
    if (Ck.boiling && !was && Ck.onBoil) Ck.onBoil();
    const top = -58 - Ck.potH;
    if (Ck.temp > 0.35 && Ck.level > 0.05 && Ck.tilt < 0.3) {
      if (Math.random() < dt * 30 * Ck.temp) K.P.steam(Ck.stoveX + K.rand(-20, 20), top - 2, 1, 4, { alpha: 0.3 + 0.35 * Ck.temp });
    }
    const near = Math.abs(K.girl.x - Ck.stoveX) < 700 && !K.girl.under;
    K.sfx.loop('boil', near ? K.sat(Ck.temp - 0.3) * Ck.level * 0.9 : 0);
    K.sfx.loop('hiss', near && Ck.lit ? 0.12 : 0);
    // pouring: water leaves over the lip once the pot tips far enough
    if (Ck.tilt > 0.45 && Ck.level > 0) {
      const rate = (Ck.tilt - 0.45) * 1.1;
      Ck.level = Math.max(0, Ck.level - rate * dt * 0.55);
      Ck.pouring = true;
      const lip = Ck.lip();
      const n = Math.ceil(rate * dt * 110);
      for (let i = 0; i < n; i++) {
        K.P.spawn('hot', lip.x + K.rand(-2, 2), lip.y + K.rand(-2, 2), K.rand(230, 280) * Math.min(1.2, Ck.tilt), K.rand(-40, 10), { life: 2, r: K.rand(2.6, 4) });
      }
      if (Math.random() < dt * 8) K.P.steam(lip.x, lip.y, 1, 4);
      K.sfx.loop('spray', 0.5);
      if (Ck.level <= 0 && !Ck.poured) { Ck.poured = true; if (Ck.onEmpty) Ck.onEmpty(); }
    } else if (Ck.pouring) { Ck.pouring = false; K.sfx.loop('spray', 0); }
    if (Ck.poured && !K.input.down) Ck.tilt = K.follow(Ck.tilt, 0, 4, dt);
  };

  function drawStove(ctx) {
    const x = Ck.stoveX;
    K.paper(ctx, K.rr(x - 38, -58, 76, 58, 5), '#3d3a3a', { depth: 4 });
    K.paper(ctx, K.rr(x - 30, -50, 26, 18, 3), '#2a2828', { depth: 0 });
    for (let i = 0; i < 3; i++) K.line(ctx, [x + 4, -48 + i * 7, x + 30, -48 + i * 7], 2, '#57524f');
    K.limb(ctx, [x - 34, 0, x - 34, 8], 5, '#2a2828', { depth: 0 });
    K.limb(ctx, [x + 34, 0, x + 34, 8], 5, '#2a2828', { depth: 0 });
    // gas knob (turns when lit)
    const k = Ck.knob();
    K.paper(ctx, K.ell(k.x, k.y, 9, 9), '#c9c2b0', { depth: 2 });
    K.line(ctx, [k.x, k.y, k.x + Math.cos(Ck.knobA - Math.PI / 2) * 7, k.y + Math.sin(Ck.knobA - Math.PI / 2) * 7], 3, '#6b3a2c');
    if (Ck.glintKnob > 0) K.sparkle(ctx, k.x + 10, k.y - 8, 10, Math.sin(Ck.glintKnob * Math.PI));
    // gas pipe to a bottle
    K.limb(ctx, [x - 38, -12, x - 60, -6, x - 66, -20], 3, '#555', { depth: 0 });
    K.paper(ctx, K.rr(x - 78, -46, 24, 46, 10), '#c9463a', { depth: 3 });
    // flame
    if (Ck.lit && Ck.tilt < 0.2) {
      for (let i = -2; i <= 2; i++) {
        const h = 9 + Math.sin(K.time * 20 + i) * 2.5;
        ctx.fillStyle = 'rgba(90,140,255,0.85)';
        ctx.beginPath(); ctx.moveTo(x + i * 9 - 4, -58); ctx.quadraticCurveTo(x + i * 9, -58 - h * 1.6, x + i * 9 + 4, -58); ctx.fill();
        ctx.fillStyle = 'rgba(200,230,255,0.9)';
        ctx.beginPath(); ctx.moveTo(x + i * 9 - 2, -58); ctx.quadraticCurveTo(x + i * 9, -58 - h * 0.8, x + i * 9 + 2, -58); ctx.fill();
      }
    }
  }
  function drawPot(ctx) {
    if (Ck.taken) return;
    const p = Ck.pivot();
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(Ck.tilt);
    const w = Ck.potW, h = Ck.potH;
    // handle (left) and ear (right)
    K.limb(ctx, [-w - 2, -h + 12, -w - 16, -h + 12], 5, '#3a3f45', { depth: 1 });
    K.paper(ctx, K.rr(-w - 22, -h + 7, 12, 10, 4), '#d9463b', { depth: 1 });
    K.paper(ctx, K.rr(-w, -h, w, h, 6), '#a3acb4', { depth: 3 });
    // water inside (stays level while the pot tips)
    if (Ck.level > 0.01) {
      ctx.save();
      ctx.clip(K.rr(-w + 3, -h + 2, w - 6, h - 5, 4));
      ctx.rotate(-Ck.tilt);
      const surf = -4 - (h - 8) * Ck.level * (1 - Ck.tilt * 0.15);
      const hot = K.sat(Ck.temp);
      ctx.fillStyle = K.mix('#5ea9cc', '#a7d3e3', hot * 0.6);
      ctx.fillRect(-w * 2, surf, w * 4, h * 2);
      if (Ck.temp > 0.6) {
        for (let i = 0; i < 6; i++) {
          const bx = -w + ((i * 37 + K.time * 60 * (1 + i % 3)) % w);
          const by = surf + 4 + ((i * 13 + K.time * 50) % (h * Ck.level));
          ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(bx, by, 2 + (i % 2), 0, K.TAU); ctx.stroke();
        }
      }
      ctx.restore();
    }
    // front band so the water sits "inside"
    ctx.fillStyle = 'rgba(150,160,170,0.75)';
    ctx.fillRect(-w, -h * 0.35, w, h * 0.35 - 1);
    ctx.strokeStyle = '#6d7680'; ctx.lineWidth = 1.5; ctx.strokeRect(-w, -h, w, h);
    K.paper(ctx, K.rr(-w - 3, -h - 3, w + 6, 6, 3), '#c3cad0', { depth: 0 });
    ctx.restore();
    if (Ck.glintPot > 0) { const hd = Ck.handle(); K.sparkle(ctx, hd.x - 6, hd.y - 10, 11, Math.sin(Ck.glintPot * Math.PI)); }
  }

  Ck.drawBack = function (ctx) {
    const v = K.cam.view();
    if (v[2] < 2500 || v[0] > 3300) return;
    // awning over the field kitchen
    K.limb(ctx, [2600, 0, 2600, -250], 6, C.woodD);
    K.limb(ctx, [2980, 0, 2980, -250], 6, C.woodD);
    const aw = new Path2D();
    aw.moveTo(2580, -250); aw.lineTo(3000, -250); aw.lineTo(3000, -226);
    for (let x = 3000; x >= 2580; x -= 30) aw.quadraticCurveTo(x - 15, -206, x - 30, -226);
    aw.closePath();
    K.paper(ctx, aw, '#f3ede0', { depth: 4 });
    ctx.save(); ctx.clip(aw);
    ctx.fillStyle = '#d9463b';
    for (let x = 2580; x < 3000; x += 60) ctx.fillRect(x, -260, 30, 60);
    ctx.restore();
    // shelves with jars
    K.limb(ctx, [2860, -170, 2960, -170], 5, C.wood);
    for (let i = 0; i < 4; i++) K.paper(ctx, K.rr(2866 + i * 24, -196, 16, 24, 4), ['#e7b75d', '#9fc27b', '#e58b6d', '#c4b0d8'][i], { depth: 1.5 });
    // diving rack
    K.limb(ctx, [Ck.diverHookX + 44, 0, Ck.diverHookX + 44, -212], 7, C.woodD);
    K.limb(ctx, [Ck.diverHookX + 46, -206, Ck.diverHookX, -206, Ck.diverHookX, -196], 5, C.ironD, { depth: 1 });
    // coat rack for the chef's jacket
    K.limb(ctx, [Ck.hookX + 30, 0, Ck.hookX + 30, -190], 7, C.woodD);
    K.limb(ctx, [Ck.hookX + 32, -186, Ck.hookX, -186, Ck.hookX, -176], 5, C.ironD, { depth: 1 });
    // water tap on a standpipe
    K.limb(ctx, [Ck.tapX, 0, Ck.tapX, -80], 9, '#7b8791');
    K.paper(ctx, K.rr(Ck.tapX - 4, Ck.tapY - 6, 22, 10, 3), C.brass, { depth: 1.5 });
    K.paper(ctx, K.rr(Ck.tapX - 4, Ck.tapY - 18, 8, 12, 2), '#d9463b', { depth: 1 });
    if (Ck.wetsuit.state === 'hang' || Ck.wetsuit.state === 'return') Ck.wetsuit.draw(ctx);
    if (Ck.jacket.state === 'hang' || Ck.jacket.state === 'return') Ck.jacket.draw(ctx);
    drawStove(ctx);
  };
  Ck.drawMid = function (ctx) {
    const v = K.cam.view();
    if (v[2] < 2500 || v[0] > 3300) return;
    drawPot(ctx);
  };
})();
