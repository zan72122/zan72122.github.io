// The frozen lake: ice that cracks under her, a hole melted by boiling water,
// a heavy grate in the lake bed, and the cook's pot turned into an air bell.
(function () {
  'use strict';
  const C = K.C;
  const L = (K.lake = {
    X0: 2960, X1: 3800, HX: 3080, holeR: 0, cracks: [],
    HINGE: 3150, GW: 110, psi: 0, air: 0, potOn: false, potT: 0, potX: 0, potY: 0,
    oct: { x: 0, y: 0, held: false, emit: 0, glint: 0, auto: 0 }, fish: [], chunks: [], done: false,
  });

  L.reset = function () {
    Object.assign(L, { holeR: 0, psi: 0, air: 0, potOn: false, potT: 0, done: false });
    L.cracks = []; L.chunks = [];
    L.oct.held = false; L.oct.auto = 0;
    L.fish = [0, 1, 2].map((i) => ({ x: 3300 + i * 140, y: 180 + i * 70, vx: (i % 2 ? -1 : 1) * 30, face: i % 2 ? -1 : 1, scare: 0 }));
  };

  // ice floor with a hole; the hatch in the lake bed
  K.world.floorFns.push(function (x, under) {
    if (!under) {
      if (x >= L.X0 && x <= L.X1) {
        if (L.holeR > 4 && Math.abs(x - L.HX) < L.holeR) return undefined;
        return { y: 2, surf: 'ice', ref: L };
      }
      return undefined;
    }
    if (x >= L.HINGE && x <= L.HINGE + L.GW) {
      if (L.psi > 0.9) return undefined;
      return { y: 414 - Math.sin(L.psi) * (x - L.HINGE), surf: 'stone', ref: L };
    }
    return undefined;
  });

  L.addCrack = function (x, a) {
    if (L.cracks.length > 40) L.cracks.shift();
    const segs = [];
    let px = x, py = 2;
    const n = 2 + Math.floor(a * 4);
    for (let i = 0; i < n; i++) {
      const nx = px + K.rand(-14, 14), ny = py + K.rand(2, 5);
      segs.push(px, py, nx, ny); px = nx; py = ny;
    }
    L.cracks.push({ x, segs, w: 0.8 + a * 1.2 });
  };

  // boiling water melts the ice
  K.P.hitters.push({
    test(p) { return p.type === 'hot' && p.x > L.X0 && p.x < L.X1 && p.y > -2 && p.y < 16; },
    hit(p) {
      if (Math.abs(p.x - L.HX) < Math.max(60, L.holeR + 26)) {
        const was = L.holeR;
        L.holeR = Math.min(52, L.holeR + 0.42);
        if (Math.random() < 0.5) K.P.steam(p.x, -2, 1, 6, { alpha: 0.6 });
        if (Math.random() < 0.08) K.sfx.sizzle();
        if (was < 52 && L.holeR >= 52 && L.onHole) L.onHole();
        if (Math.random() < 0.15) K.P.spawn('chip', p.x, 0, K.rand(-60, 60), -K.rand(40, 120), { life: 0.8, r: 2.5, solid: false });
      } else if (Math.random() < 0.4) K.P.steam(p.x, -2, 1, 4);
    },
  });
  L.finishHole = function () {
    if (L.holeR >= 52) return;
    L.holeR = 52;
    K.P.steam(L.HX, -4, 14, 40);
    if (L.onHole) L.onHole();
  };

  // the pot tied to the grate: bubbles that enter its mouth fill it with air
  L.potMouth = function () { return { x: L.potX, y: L.potY + 24 }; };
  K.P.hitters.push({
    bubble: true,
    test(p) {
      if (!L.potOn || L.air >= 1) return false;
      const m = L.potMouth();
      return Math.abs(p.x - m.x) < 34 && p.y < m.y + 6 && p.y > m.y - 30;
    },
    hit() {
      L.air = Math.min(1, L.air + 0.028);
      if (Math.random() < 0.3) K.sfx.blip();
      if (L.air >= 1 && L.onFull) L.onFull();
    },
  });

  L.octRest = function () {
    const G = K.girl;
    return { x: G.x + G.face * 16, y: G.y - 78 - G.T * 0.4 };
  };
  L.hitOct = function (p) { return K.dist(p.x, p.y, L.oct.x, L.oct.y) < K.cam.touchR(30); };

  L.update = function (dt) {
    const G = K.girl;
    // octopus (spare regulator): follows the finger while held, bubbles pour out
    const o = L.oct;
    const rest = L.octRest();
    if (o.auto > 0) o.auto -= dt;
    if ((o.held && K.input.down) || o.auto > 0) {
      const p = o.auto > 0 && !(o.held && K.input.down) ? { x: L.potMouth().x, y: L.potMouth().y + 50 } : K.input.world();
      let dx = p.x - (G.x - G.face * 10), dy = p.y - (G.y - 90);
      const d = Math.hypot(dx, dy), max = 190;
      if (d > max) { dx *= max / d; dy *= max / d; }
      o.x = K.follow(o.x, G.x - G.face * 10 + dx, 20, dt);
      o.y = K.follow(o.y, G.y - 90 + dy, 20, dt);
      o.emit += dt * 30;
      while (o.emit > 1) { o.emit -= 1; K.P.bubbles(o.x, o.y - 4, 1, { r: K.rand(3, 6.5) }); }
      K.sfx.loop('air', 0.6);
    } else {
      o.x = K.follow(o.x || rest.x, rest.x, 8, dt); o.y = K.follow(o.y || rest.y, rest.y, 8, dt);
      K.sfx.loop('air', 0);
    }
    o.glint = Math.max(0, o.glint - dt);

    // grate follows the pot's lift
    const lift = K.sat((L.air - 0.45) / 0.5);
    const tug = L.air > 0.15 && L.air < 0.5 ? Math.sin(K.time * 18) * 0.02 * L.air : 0;
    const prev = L.psi;
    L.psi = K.follow(L.psi, lift * 1.42 + tug, 1.6, dt);
    if (L.psi - prev > 0.002 && Math.random() < 0.2) { K.sfx.creak(0.8); K.sfx.chain(1); }
    if (!L.done && L.psi > 1.3) { L.done = true; K.sfx.clang(0.6); if (L.onOpen) L.onOpen(); }
    const fx = L.HINGE + Math.cos(L.psi) * L.GW, fy = 414 - Math.sin(L.psi) * L.GW;
    if (L.potOn) {
      L.potT = Math.min(1, L.potT + dt / 1.2);
      L.potX = K.lerp(L.potFromX, fx, K.easeInOut(L.potT));
      L.potY = K.lerp(L.potFromY, fy - 62 - L.air * 6, K.easeInOut(L.potT));
      if (L.air >= 1 && Math.random() < dt * 8) K.P.bubbles(L.potX + (Math.random() < 0.5 ? -30 : 30), L.potY + 26, 1);
    }
    // fish keep away from the heavy newcomer
    for (const f of L.fish) {
      const d = Math.hypot(f.x - G.x, f.y - (G.y - 80));
      if (G.under && d < 160) { f.vx += Math.sign(f.x - G.x) * 140 * dt; f.face = Math.sign(f.vx) || 1; }
      f.vx = K.clamp(f.vx, -120, 120);
      f.x += f.vx * dt; f.y += Math.sin(K.time + f.x * 0.01) * 10 * dt;
      if (f.x < 3000) f.vx = Math.abs(f.vx); if (f.x > 3760) f.vx = -Math.abs(f.vx);
      f.face = f.vx >= 0 ? 1 : -1;
      if (Math.abs(f.vx) < 25) f.vx = f.face * 30;
      f.vx *= Math.pow(0.8, dt);
    }
    for (const c of L.chunks) { c.x += Math.sin(K.time * 1.3 + c.p) * 4 * dt; }
  };
  L.tiePot = function () {
    const G = K.girl;
    L.potOn = true; L.potT = 0;
    L.potFromX = G.x + G.face * (G.halfWidth() - 6); L.potFromY = G.y - 50;
    G.tools.pot = false;
    K.sfx.clink(); K.sfx.buckle();
  };

  // ---------- drawing ----------
  function drawUnderwater(ctx) {
    // lake body (cross-section) and the tunnel under the kitchen
    const g = ctx.createLinearGradient(0, 16, 0, 430);
    g.addColorStop(0, '#6fb4d2'); g.addColorStop(1, '#2d5f7e');
    ctx.fillStyle = g;
    ctx.fillRect(L.X0, 14, L.X1 - L.X0, 416);
    // light rays
    ctx.fillStyle = 'rgba(255,255,255,0.07)';
    for (let i = 0; i < 5; i++) {
      const x = L.X0 + 120 + i * 150 + Math.sin(K.time * 0.3 + i) * 20;
      ctx.beginPath(); ctx.moveTo(x, 16); ctx.lineTo(x + 40, 16); ctx.lineTo(x + 120, 420); ctx.lineTo(x + 60, 420); ctx.fill();
    }
    // bed
    K.paper(ctx, K.rr(L.X0, 418, L.HINGE - L.X0, 30, 2), '#5b4a36', { depth: 0 });
    K.paper(ctx, K.rr(L.HINGE + L.GW, 418, L.X1 - L.HINGE - L.GW, 30, 2), '#5b4a36', { depth: 0 });
    // opening under the hatch into the tunnel going home
    K.paper(ctx, K.rr(L.HINGE, 420, L.GW, 50, 0), '#223743', { depth: 0, line: false });
    // weeds and stones
    for (let i = 0; i < 9; i++) {
      const x = L.X0 + 30 + i * 90 + (i % 3) * 13;
      if (x > L.HINGE - 20 && x < L.HINGE + L.GW + 20) continue;
      const sway = Math.sin(K.time * 1.2 + i) * 6;
      K.limb(ctx, [x, 420, x + sway * 0.5, 390, x + sway, 360 - (i % 3) * 20], 4, '#5f8f4e', { depth: 0, curve: true });
      K.paper(ctx, K.ell(x + 20, 416, 12, 7), '#7c776d', { depth: 1 });
    }
    // fish
    for (const f of L.fish) {
      ctx.save(); ctx.translate(f.x, f.y); ctx.scale(f.face, 1);
      K.paper(ctx, K.ell(0, 0, 14, 7), '#f0a24b', { depth: 1 });
      K.paper(ctx, K.poly([-12, 0, -22, -7, -22, 7]), '#e08b35', { depth: 0 });
      K.dot(ctx, 8, -2, 1.8, C.ink);
      ctx.restore();
    }
  }
  // the hatch: a thick iron trapdoor in the lake bed, hinged on the left
  function drawGrate(ctx) {
    ctx.save();
    ctx.translate(L.HINGE, 414);
    ctx.rotate(-L.psi);
    K.paper(ctx, K.rr(0, -6, L.GW, 16, 3), '#4d535b', { depth: 3 });
    for (const x of [18, 55, 92]) K.paper(ctx, K.rr(x - 4, -8, 8, 20, 2), C.ironD, { depth: 0 });
    for (let x = 8; x < L.GW; x += 12) K.dot(ctx, x, 2, 1.6, C.ironL);
    ctx.lineWidth = 3; ctx.strokeStyle = C.ironL;
    ctx.beginPath(); ctx.arc(L.GW - 8, -12, 6, 0, K.TAU); ctx.stroke();
    ctx.restore();
    K.wheel(ctx, L.HINGE, 414, 8, -L.psi, { color: C.iron, spokes: 3, mark: false });
  }
  function drawAirPot(ctx) {
    if (!L.potOn) return;
    const x = L.potX, y = L.potY, w = 58, h = 48;
    const fx = L.HINGE + Math.cos(L.psi) * L.GW, fy = 414 - Math.sin(L.psi) * L.GW;
    if (L.potT >= 1) K.line(ctx, [x, y - h / 2 + 2, fx, fy - 10], 2.5, '#d9c9a3');
    // upside-down pot, cut away: the air pocket at the top grows, the water line drops
    ctx.save();
    ctx.translate(x, y);
    const tugY = L.air > 0.2 && L.psi < 0.1 ? Math.sin(K.time * 20) * 1.2 * L.air : 0;
    ctx.translate(0, tugY);
    const W2 = 70, H2 = 50;
    const body = new Path2D();
    body.moveTo(-W2 / 2, H2 / 2);
    body.lineTo(-W2 / 2, -H2 / 2 + 14);
    body.quadraticCurveTo(-W2 / 2, -H2 / 2, -W2 / 2 + 14, -H2 / 2);
    body.lineTo(W2 / 2 - 14, -H2 / 2);
    body.quadraticCurveTo(W2 / 2, -H2 / 2, W2 / 2, -H2 / 2 + 14);
    body.lineTo(W2 / 2, H2 / 2);
    body.closePath();
    K.paper(ctx, body, '#8e98a1', { depth: 3 });
    const inner = new Path2D();
    inner.moveTo(-W2 / 2 + 7, H2 / 2);
    inner.lineTo(-W2 / 2 + 7, -H2 / 2 + 15);
    inner.quadraticCurveTo(-W2 / 2 + 7, -H2 / 2 + 7, -W2 / 2 + 15, -H2 / 2 + 7);
    inner.lineTo(W2 / 2 - 15, -H2 / 2 + 7);
    inner.quadraticCurveTo(W2 / 2 - 7, -H2 / 2 + 7, W2 / 2 - 7, -H2 / 2 + 15);
    inner.lineTo(W2 / 2 - 7, H2 / 2);
    inner.closePath();
    ctx.fillStyle = '#2f6d91'; ctx.fill(inner);
    const airH = (H2 - 8) * L.air;
    if (airH > 0.5) {
      ctx.save(); ctx.clip(inner);
      const wl = -H2 / 2 + 7 + airH;
      ctx.fillStyle = '#f2fbff';
      ctx.beginPath(); ctx.moveTo(-W2, -H2); ctx.lineTo(W2, -H2); ctx.lineTo(W2, wl);
      for (let i = W2; i >= -W2; i -= 5) ctx.lineTo(i, wl + Math.sin(i * 0.35 + K.time * 9) * 1.6);
      ctx.closePath(); ctx.fill();
      ctx.restore();
    }
    K.paper(ctx, K.rr(-W2 / 2 - 5, H2 / 2 - 4, W2 + 10, 7, 3), '#b7c0c7', { depth: 0 });
    K.limb(ctx, [-W2 / 2 - 2, -4, -W2 / 2 - 14, -4], 6, '#3a3f45', { depth: 0 });
    K.limb(ctx, [W2 / 2 + 2, -4, W2 / 2 + 14, -4], 6, '#3a3f45', { depth: 0 });
    ctx.restore();
  }
  function drawOct(ctx) {
    const G = K.girl;
    if (!G.tools.tank || !G.under) return;
    const o = L.oct;
    const bx = G.x - G.face * 10, by = G.y - 90 - G.T * 0.4;
    K.limb(ctx, [bx, by, (bx + o.x) / 2, Math.max(by, o.y) + 30, o.x, o.y], 4, '#e6b42c', { depth: 1, curve: true });
    K.paper(ctx, K.ell(o.x, o.y, 10, 9), C.yellow, { depth: 2 });
    K.paper(ctx, K.rr(o.x - 5, o.y - 3, 10, 7, 2), '#2b2b30', { depth: 0 });
    if (o.glint > 0) K.sparkle(ctx, o.x + 10, o.y - 10, 11, Math.sin(o.glint * Math.PI));
  }
  function drawIce(ctx) {
    // slab with a hole; cracks on its face
    const x0 = L.X0, x1 = L.X1, hr = L.holeR;
    const parts = hr > 4 ? [[x0, L.HX - hr], [L.HX + hr, x1]] : [[x0, x1]];
    for (const [a, b] of parts) {
      K.paper(ctx, K.rr(a, 1, b - a, 15, 3), 'rgba(222,242,249,0.92)', { depth: 2, line: C.iceD });
      ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.fillRect(a + 3, 2, b - a - 6, 2);
    }
    ctx.lineCap = 'round';
    for (const c of L.cracks) {
      ctx.strokeStyle = 'rgba(120,170,195,0.9)'; ctx.lineWidth = c.w;
      ctx.beginPath();
      for (let i = 0; i < c.segs.length; i += 4) { ctx.moveTo(c.segs[i], c.segs[i + 1]); ctx.lineTo(c.segs[i + 2], c.segs[i + 3]); }
      ctx.stroke();
    }
    if (hr > 4) {
      ctx.fillStyle = 'rgba(80,150,190,0.8)';
      ctx.fillRect(L.HX - hr, 6 + Math.sin(K.time * 3) * 1.5, hr * 2, 10);
    }
  }

  L.drawBack = function (ctx) {
    const v = K.cam.view();
    if (v[2] < 2800 || v[0] > 4000) return;
    drawUnderwater(ctx);
    drawGrate(ctx);
    // far bank
    K.paper(ctx, K.poly([3780, 0, 3830, -90, 3900, -150, 4400, -170, 4400, 600, 3780, 600]), '#8a8f94', { depth: 4 });
    K.paper(ctx, K.poly([3800, -10, 3860, -96, 3930, -156, 4400, -176, 4400, -150, 3930, -130, 3868, -80]), C.snow, { depth: 0, line: C.snowD });
  };
  L.drawMid = function (ctx) {
    const v = K.cam.view();
    if (v[2] < 2800 || v[0] > 4000) return;
    drawAirPot(ctx);
    drawIce(ctx);
  };
  L.drawFront = function (ctx) {
    const v = K.cam.view();
    if (v[2] < 2800 || v[0] > 4000) return;
    // water tint over anything underwater (including the girl)
    ctx.fillStyle = 'rgba(40,110,160,0.18)';
    ctx.fillRect(L.X0, 16, L.X1 - L.X0, 406);
    drawOct(ctx);
  };
})();
