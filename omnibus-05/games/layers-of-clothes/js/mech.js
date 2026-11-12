// Mechanic room: coveralls in a locker, a raised drawbridge held by a chain,
// and a winch that pays out the chain when you work the ratchet wrench.
(function () {
  'use strict';
  const C = K.C;
  const M = (K.mech = {
    hookX: 1740, hookY: -168, standX: 1668, winchX: 1885, winchY: -46, drumR: 16, crankX: 1966,
    hingeX: 2050, spanL: 292, theta: Math.PI / 2, phi: 0, alpha: -0.9, dragging: false,
    lastA: -0.9, acc: 0, down: false, stroke: 0, auto: 0, suit: null,
  });

  M.reset = function () {
    Object.assign(M, { theta: Math.PI / 2, phi: 0, alpha: -0.9, dragging: false, lastA: -0.9, acc: 0, down: false, stroke: 0, auto: 0 });
    M.suit = K.makeGarment('mech', M.hookX, M.hookY);
    M.span = { x0: M.hingeX, x1: M.hingeX + M.spanL, posts: [M.hingeX, M.hingeX + M.spanL], sagK: 0.3, bounce: K.spring(0), surf: 'bridge' };
    K.world.addProp('can', 1560, { need: 16 });
    K.world.addProp('can', 1585, { need: 16 });
    K.world.addProp('pebble', 1880, { need: 14 });
  };

  function drumTop() { return { x: M.winchX, y: M.winchY - M.drumR }; }
  function tipAt(th) { return { x: M.hingeX + Math.cos(th) * M.spanL, y: -Math.sin(th) * M.spanL }; }
  function chainLen(th) { const d = drumTop(), t = tipAt(th); return Math.hypot(t.x - d.x, t.y - d.y); }
  const L0 = chainLen(Math.PI / 2);
  // how much the drum must turn to let the bridge all the way down
  const PHI_MAX = (chainLen(0) - L0) / M.drumR + 0.02;

  // floor on the lowered bridge, bending under her
  K.world.floorFns.push(function (x, under) {
    if (under || !M.span) return undefined;
    if (x > M.hingeX && x < M.hingeX + M.spanL) {
      if (M.theta > 0.03) return undefined;
      return { y: K.world.sagOf(M.span, x) - 1, surf: 'bridge', ref: M.span };
    }
    return undefined;
  });

  M.handle = function () {
    const L = 62;
    return { x: M.winchX + Math.cos(M.alpha) * L, y: M.winchY + Math.sin(M.alpha) * L };
  };
  M.hitHandle = function (p) {
    const h = M.handle();
    return K.dist(p.x, p.y, h.x, h.y) < K.cam.touchR(38) || K.dist(p.x, p.y, M.winchX, M.winchY) < K.cam.touchR(40);
  };
  M.done = () => M.theta <= 0.001;

  M.setAlpha = function (a) {
    a = K.clamp(a, -1.25, 0.95);
    const da = a - M.alpha;
    if (da > 0) {
      // working stroke: turns the drum, pays out chain
      if (M.phi < PHI_MAX) {
        M.phi = Math.min(PHI_MAX, M.phi + da * 1.7);
        M.acc += da;
        if (M.acc > 0.3) { M.acc = 0; K.sfx.gear(); K.sfx.chain(3); K.sfx.creak(0.6); }
      }
    } else if (da < 0) {
      M.stroke += -da;
      if (M.stroke > 0.16) { M.stroke = 0; K.sfx.ratchet(); }
    }
    M.alpha = a;
  };

  M.update = function (dt) {
    M.suit.update(dt);
    if (M.auto > 0) {
      // tap fallback: one full stroke down and back up
      M.auto -= dt;
      const t = 1 - M.auto / 0.9;
      const a = t < 0.5 ? K.lerp(-1.1, 0.9, K.easeInOut(t * 2)) : K.lerp(0.9, -1.1, K.easeInOut((t - 0.5) * 2));
      M.setAlpha(a);
    }
    // solve bridge angle from the chain length
    const L = L0 + M.phi * M.drumR;
    let lo = 0, hi = Math.PI / 2;
    for (let i = 0; i < 24; i++) { const mid = (lo + hi) / 2; if (chainLen(mid) > L) lo = mid; else hi = mid; }
    const prev = M.theta;
    const target = (lo + hi) / 2;
    M.theta = K.follow(M.theta, target, 6, dt);
    if (M.phi >= PHI_MAX && M.theta < 0.02 && prev >= 0.02) {
      M.theta = 0;
      K.sfx.thunk(1.3); K.sfx.clang(0.5); K.cam.bump(6);
      K.P.dust(M.hingeX + M.spanL, 0, 10, 1.2);
      if (M.onDown) M.onDown();
    }
    if (M.theta < 0.02 && M.phi >= PHI_MAX) M.theta = 0;
    if (M.span) { M.span.bounce.t = 0; K.stepSpring(M.span.bounce, 70, 6, dt); }
  };

  function drawWinch(ctx) {
    const x = M.winchX, y = M.winchY;
    K.paper(ctx, K.poly([x - 30, 0, x - 8, y - 6, x + 8, y - 6, x + 30, 0]), C.ironD, { depth: 3 });
    K.wheel(ctx, x, y, M.drumR + 8, M.phi, { color: '#6f7780', spokes: 6 });
    K.paper(ctx, K.ell(x, y, M.drumR, M.drumR), '#4a4f56', { depth: 0 });
    // wound chain on the drum (less as it pays out)
    const wound = K.sat(1 - M.phi / PHI_MAX);
    ctx.strokeStyle = '#8b9199'; ctx.lineWidth = 2;
    for (let i = 0; i < 1 + wound * 4; i++) { ctx.beginPath(); ctx.arc(x, y, M.drumR - 2 - i * 2.2, 0, K.TAU); ctx.stroke(); }
    // pawl
    K.paper(ctx, K.poly([x - 26, y - 22, x - 14, y - 16, x - 22, y - 12]), C.brass, { depth: 1 });
  }
  function drawWrenchTool(ctx) {
    const x = M.winchX, y = M.winchY;
    const h = M.handle();
    K.limb(ctx, [x, y, h.x, h.y], 8, '#b9c0c8', { depth: 2 });
    K.paper(ctx, K.ell(x, y, 12, 12), '#9aa2ab', { depth: 1.5 });
    const hex = [];
    for (let i = 0; i < 6; i++) { const a = M.phi + (i / 6) * K.TAU; hex.push(x + Math.cos(a) * 6.5, y + Math.sin(a) * 6.5); }
    K.paper(ctx, K.poly(hex), '#5b6068', { depth: 0 });
    K.paper(ctx, K.rr(h.x - 9, h.y - 9, 18, 18, 7), '#d5463a', { depth: 1.5 });
    if (M.glint > 0) K.sparkle(ctx, h.x + 10, h.y - 12, 12, Math.sin(M.glint * Math.PI));
  }
  function drawSpan(ctx) {
    const th = M.theta;
    ctx.save();
    ctx.translate(M.hingeX, 0);
    ctx.rotate(-th);
    // deck (bends with the load when down)
    const pts = [], bot = [];
    for (let s = 0; s <= M.spanL; s += 8) {
      const y = th < 0.03 ? K.world.sagOf(M.span, M.hingeX + s) : 0;
      pts.push(s, y - 2); bot.push(s, y + 12);
    }
    const p = new Path2D();
    p.moveTo(pts[0], pts[1]);
    for (let i = 2; i < pts.length; i += 2) p.lineTo(pts[i], pts[i + 1]);
    for (let i = bot.length - 2; i >= 0; i -= 2) p.lineTo(bot[i], bot[i + 1]);
    p.closePath();
    K.paper(ctx, p, '#8f7a5f', { depth: 3 });
    ctx.strokeStyle = '#5d4b36'; ctx.lineWidth = 1.2;
    for (let s = 24; s < M.spanL; s += 24) {
      const y = th < 0.03 ? K.world.sagOf(M.span, M.hingeX + s) : 0;
      ctx.beginPath(); ctx.moveTo(s, y - 1); ctx.lineTo(s, y + 11); ctx.stroke();
    }
    // railing truss (so it still reads as a bridge while it stands upright)
    const sagAt = (s) => (th < 0.03 ? K.world.sagOf(M.span, M.hingeX + s) : 0);
    const rail = [];
    for (let s = 0; s <= M.spanL; s += 8) rail.push(s, sagAt(s) - 30);
    K.line(ctx, rail, 5, '#4a3b2a');
    K.line(ctx, rail, 3, '#b0875a');
    for (let s = 6; s <= M.spanL; s += 36) {
      K.line(ctx, [s, sagAt(s) - 2, s, sagAt(s) - 30], 3.5, '#6b5237');
      if (s + 36 <= M.spanL) K.line(ctx, [s, sagAt(s) - 2, s + 36, sagAt(s + 36) - 30], 2, '#6b5237');
    }
    K.limb(ctx, [0, 12, M.spanL, 12 + sagAt(M.spanL / 2) * 0], 4, C.ironD, { depth: 0 });
    K.dot(ctx, M.spanL - 6, 4, 4, C.ironD);
    ctx.restore();
    K.wheel(ctx, M.hingeX, 4, 10, -th, { color: C.iron, spokes: 3, mark: false });
    // chain from drum to tip
    const d = drumTop(), t = tipAt(th);
    const sag = th < 0.03 ? K.world.sagOf(M.span, M.hingeX + M.spanL * 0.99) : 0;
    const links = Math.floor(Math.hypot(t.x - d.x, t.y - d.y) / 9);
    ctx.strokeStyle = '#4b4f55'; ctx.lineWidth = 2.2;
    for (let i = 0; i < links; i++) {
      const u = i / links;
      const cx = K.lerp(d.x, t.x, u), cy = K.lerp(d.y, t.y + sag, u) + Math.sin(u * Math.PI) * (th < 0.1 ? 10 : 2);
      ctx.beginPath(); ctx.ellipse(cx, cy, 4.5, 2.6, Math.atan2(t.y - d.y, t.x - d.x), 0, K.TAU); ctx.stroke();
    }
  }

  M.drawBack = function (ctx) {
    const v = K.cam.view();
    if (v[2] < 1400 || v[0] > 2700) return;
    // workshop wall with a pegboard
    K.paper(ctx, K.rr(1530, -320, 420, 320, 6), '#9fb3c4', { depth: 5 });
    K.paper(ctx, K.rr(1560, -290, 150, 110, 3), '#d9c29a', { depth: 2 });
    ctx.fillStyle = '#b8a07a';
    for (let y = -282; y < -184; y += 12) for (let x = 1568; x < 1706; x += 12) ctx.fillRect(x, y, 2, 2);
    ctx.globalAlpha = 0.6;
    K.drawWrench(ctx, 1590, -270, 2, 0.2);
    K.paper(ctx, K.rr(1625, -272, 8, 60, 3), C.iron, { depth: 0 });
    K.paper(ctx, K.rr(1650, -262, 34, 10, 3), C.woodD, { depth: 0 });
    ctx.globalAlpha = 1;
    K.limb(ctx, [1850, -320, 1850, -250], 2, C.ink, { depth: 0 });
    K.paper(ctx, K.poly([1830, -250, 1870, -250, 1860, -236, 1840, -236]), '#e0b14a', { depth: 2 });
    // locker
    K.paper(ctx, K.rr(M.hookX - 60, -230, 120, 230, 5), '#6f8ba3', { depth: 4 });
    K.paper(ctx, K.rr(M.hookX - 54, -224, 108, 218, 4), '#40576b', { depth: 0 });
    K.paper(ctx, K.poly([M.hookX + 60, -228, M.hookX + 100, -216, M.hookX + 100, -14, M.hookX + 60, -2]), '#7f9bb3', { depth: 3 });
    K.limb(ctx, [M.hookX - 50, M.hookY - 16, M.hookX + 50, M.hookY - 16], 4, C.ironL, { depth: 1 });
    if (M.suit.state === 'hang' || M.suit.state === 'return') M.suit.draw(ctx);
    // canal cutaway
    K.paper(ctx, K.rr(2050, 0, 290, 245, 3), '#3d4a52', { depth: 0 });
    ctx.fillStyle = K.C.water;
    const G = K.girl;
    const onBridge = G.floorRef === M.span;
    const ripple = onBridge ? 2 + G.heavy * 3 : 1;
    const wp = new Path2D();
    wp.moveTo(2050, 245);
    for (let x = 2050; x <= 2340; x += 10) wp.lineTo(x, 150 + Math.sin(x * 0.05 + K.time * 2) * ripple);
    wp.lineTo(2340, 245); wp.closePath();
    ctx.fillStyle = 'rgba(80,150,190,0.85)'; ctx.fill(wp);
    K.paper(ctx, K.rr(2036, 0, 16, 245, 2), '#a6a39c', { depth: 0 });
    K.paper(ctx, K.rr(2338, 0, 16, 245, 2), '#a6a39c', { depth: 0 });
    drawWinch(ctx);
  };
  M.drawMid = function (ctx) {
    const v = K.cam.view();
    if (v[2] < 1400 || v[0] > 2700) return;
    drawSpan(ctx);
  };
  M.drawFront = function (ctx) {
    const v = K.cam.view();
    if (v[2] < 1400 || v[0] > 2700) return;
    if (K.girl.usingWrench || M.theta > 0.001) {
      if (K.girl.tools.belt) drawWrenchTool(ctx);
    }
  };
})();
