// Plaza: the heavy gate and the machine that can lift it.
//   girl's weight -> pressure plate -> spring + rod -> yoke -> cable -> pulley A
//   -> cable under the floor -> pulley B -> riser -> small drum / big wheel -> chain -> gate
// The small drum (r=12) and the big wheel (R=66) share an axle: a short pull on the
// cable becomes a long lift of the gate, which is why only a very heavy load moves it.
(function () {
  'use strict';
  const C = K.C;
  const P = (K.plaza = {
    PX: -355, X0: -430, X1: -280,        // plate (center, edges)
    d: 0, v: 0, rise: 0, latched: false, jitter: 0, wheelAng: 0, travel: 0, hitBottom: false,
    D_PRE: 14, D_MAX: 50, RATIO: 5.5, F0: 95, K: 0.95,
    GATE_X0: -684, GATE_X1: -534, GATE_H: 262, LATCH: 195,
    WX: -543, WY: -560, R: 66, r: 12,
    AX: -461, AY: 40, BX: -515, BY: 8,
    loadOn: false, lastD: 0, rattle: 0,
  });

  P.reset = function () {
    Object.assign(P, { d: 0, v: 0, rise: 0, latched: false, jitter: 0, wheelAng: 0, travel: 0, hitBottom: false, loadOn: false, wasLoaded: false });
    // birds and pebbles that do not mind a small girl, but will mind a heavy one
    K.world.addProp('bird', -40, { need: 14, dir: 1, color: '#7d8da1' });
    K.world.addProp('bird', 8, { need: 14, dir: -1, color: '#8a7b6e' });
    K.world.addProp('bird', -170, { need: 14, dir: -1, color: '#6d7f96' });
    K.world.addProp('pebble', -120, { need: 10 });
    K.world.addProp('pebble', -240, { need: 10, color: '#a79c8a' });
    K.world.addProp('flower', 290, { need: 30, color: '#f5b8c4' });
    K.world.addProp('flower', -900, { need: 60, color: '#f7d36a' });
    K.world.addProp('flower', -940, { need: 60, color: '#f5b8c4' });
    P.pup.reset();
  };

  // floor provider: the plate is a floor that moves
  K.world.floorFns.push(function (x, under) {
    if (under) return undefined;
    if (x >= P.X0 && x <= P.X1) return { y: P.d, surf: 'plate', ref: P };
    return undefined;
  });

  function resist(d) {
    return d < P.D_PRE ? (P.F0 * d) / P.D_PRE : P.F0 + P.K * (d - P.D_PRE);
  }

  P.impulse = function (s) { P.v += s; };
  // poking the gate: it rattles in its grooves but stays shut
  P.hitGate = function (p) {
    if (P.latched) return false;
    if (p.x > P.GATE_X0 && p.x < P.GATE_X1 && p.y > -P.GATE_H - P.rise && p.y < -P.rise) {
      P.jitter = 1; K.sfx.clang(0.45); K.sfx.chain(3);
      return true;
    }
    return false;
  };

  P.update = function (dt) {
    const G = K.girl;
    P.loadOn = G.floorRef === P && G.onGround && G.x > P.X0 && G.x < P.X1;
    const W = P.loadOn ? G.mass : 0;
    const acc = (W - resist(P.d)) * 7 - P.v * 7.5;
    P.v += acc * dt;
    P.v = K.clamp(P.v, -60, P.slow ? 7 : 60);
    P.d += P.v * dt;
    if (P.d < 0) { P.d = 0; P.v = Math.max(0, P.v); }
    if (P.d > P.D_MAX) {
      if (P.v > 6 && !P.hitBottom) { K.sfx.thunk(1.2); K.cam.bump(6); K.P.dust(P.PX, 40, 8, 1); }
      P.hitBottom = true;
      P.d = P.D_MAX; P.v = 0;
    } else if (P.d < P.D_MAX - 3) P.hitBottom = false;

    // the rest of the chain follows the plate
    const pre = Math.min(P.d, P.D_PRE);
    const pull = Math.max(0, P.d - P.D_PRE);
    // before the real pull, the cable only stretches: the gate twitches up a hair and drops back
    let rise = P.RATIO * pull + 0.5 * pre;
    if (P.rise > 1.2 && rise < 0.6 && !P.latched) { K.sfx.clang(0.5); K.sfx.chain(3); P.jitter = 1; }
    if (P.latched) rise = Math.max(rise, P.LATCH);
    if (!P.latched && rise >= P.LATCH) {
      P.latched = true;
      K.sfx.latch(); K.sfx.clang(0.8); K.cam.bump(3);
      if (P.onLatch) P.onLatch();
    }
    const dRise = rise - P.rise;
    P.rise = rise;
    P.travel = pre * 0.5 + pull;
    P.wheelAng = (pre * 0.15 + pull) / P.r;
    // sounds of the machine working
    if (Math.abs(dRise) > 0.01) {
      P.rattle += Math.abs(dRise);
      if (P.rattle > 9) { P.rattle = 0; K.sfx.chain(2); K.sfx.ratchet(); }
    }
    // she stepped off: the spring throws the plate back up
    if (P.wasLoaded && !P.loadOn && P.d > 20) { K.sfx.spring(1.6); K.after(0.15, () => K.sfx.thunk(0.5)); }
    P.wasLoaded = P.loadOn;
    const dd = P.d - P.lastD;
    if (dd > 0.6 && P.d < P.D_PRE + 1) P.jitter = Math.min(1, P.jitter + dd * 0.25);
    P.lastD = P.d;
    P.jitter = Math.max(0, P.jitter - dt * 1.5);
    P.pup.update(dt);
  };

  // ---------- drawing ----------
  function drawHome(ctx) {
    // beyond the gate: home, a tree, a warm window
    K.paper(ctx, K.rr(-1400, -2, 660, 20, 3), C.grass, { depth: 2, line: C.grassD });
    const hx = -1060;
    K.paper(ctx, K.rr(hx - 90, -170, 180, 170, 6), '#f2d7a8', { depth: 5 });
    K.paper(ctx, K.poly([hx - 112, -165, hx, -250, hx + 112, -165]), '#c4553f', { depth: 5 });
    const lit = 0.5 + 0.5 * K.sat(K.world.sky - 2);
    K.paper(ctx, K.rr(hx - 60, -130, 44, 40, 4), K.mix('#9fc3d4', '#ffd67a', lit), { depth: 2 });
    K.paper(ctx, K.rr(hx + 20, -110, 42, 110, 5), '#8e5d33', { depth: 2 });
    K.dot(ctx, hx + 54, -54, 3, C.brass);
    // tree
    K.paper(ctx, K.rr(-880, -150, 20, 150, 4), '#8a5b36', { depth: 3 });
    const crown = new Path2D();
    crown.ellipse(-870, -190, 60, 48, 0, 0, K.TAU); crown.ellipse(-910, -160, 40, 34, 0, 0, K.TAU); crown.ellipse(-830, -160, 42, 34, 0, 0, K.TAU);
    K.paper(ctx, crown, '#7fa653', { depth: 4, line: C.grassD });
  }

  function drawBackdrop(ctx) {
    // paper houses behind the plaza
    const hs = [[-330, 150, 190, '#e8c9a0', '#b85a45'], [-120, 120, 230, '#d9b38b', '#8a6a55'], [330, 170, 170, '#efd9b8', '#c46a4b']];
    for (const [x, w, h, wall, roof] of hs) {
      K.paper(ctx, K.rr(x - w / 2, -h, w, h, 4), K.shade(wall, -0.08), { depth: 4, line: K.shade(wall, -0.3) });
      K.paper(ctx, K.poly([x - w / 2 - 12, -h + 4, x, -h - 60, x + w / 2 + 12, -h + 4]), K.shade(roof, -0.05), { depth: 4 });
      for (let i = 0; i < 2; i++) K.paper(ctx, K.rr(x - w / 3 + i * (w / 3), -h + 30, 26, 30, 3), '#a9c6cf', { depth: 1 });
    }
  }

  function drawPit(ctx) {
    const G = P;
    // pit cavity under the plate, and a groove for the cable under the floor
    const X = G.PX;
    const pit = K.rr(X - 130, 14, 240, 222, 6);
    K.paper(ctx, pit, '#3a2518', { depth: 0, line: '#2a1a10' });
    ctx.save(); ctx.clip(pit);
    ctx.fillStyle = '#4a3020';
    for (let y = 16; y < 236; y += 26) for (let x = X - 130 + (Math.round(y / 26) % 2) * 20; x < X + 110; x += 40) ctx.fillRect(x + 2, y + 2, 36, 22);
    ctx.restore();
    K.paper(ctx, K.rr(G.BX - 25, 13, G.AX - G.BX + 30, 22, 4), '#3a2518', { depth: 0, line: '#2a1a10' });
    // spring seat bracket
    K.paper(ctx, K.rr(X - 66, 110, 132, 12, 3), C.ironD, { depth: 2 });
    // spring from plate bottom to seat
    K.coil(ctx, X, 14 + G.d, 110, 58, 6, '#c9cfd6');
    // rod and yoke
    const yokeY = 160 + G.d;
    const yx = G.AX + 16;
    K.limb(ctx, [X, 14 + G.d, X, yokeY], 8, C.ironL, { depth: 1.5 });
    K.limb(ctx, [yx - 2, yokeY, X + 6, yokeY], 9, C.iron, { depth: 2 });
    K.dot(ctx, yx, yokeY, 3.5, C.brass);
    // cable: yoke -> up to pulley A -> left under the floor -> pulley B -> up the pillar
    const tr = G.travel;
    K.cable(ctx, [yx, yokeY, yx, G.AY], -tr, { w: 4.5 });
    K.cable(ctx, [G.AX, G.AY - 16, G.BX, G.BY + 16], -tr - (yokeY - G.AY), { w: 4.5 });
    K.wheel(ctx, G.AX, G.AY, 16, tr / 16, { color: C.ironL, spokes: 4 });
  }

  function drawGateFrame(ctx) {
    const G = P;
    // pillars with a cutaway groove on the right one so the riser cable shows
    K.paper(ctx, K.rr(-738, -490, 54, 490, 4), C.stone, { depth: 5 });
    K.paper(ctx, K.rr(-534, -490, 54, 490, 4), C.stone, { depth: 5 });
    ctx.strokeStyle = C.stoneD; ctx.lineWidth = 1.2;
    for (let y = -460; y < 0; y += 34) {
      for (const x0 of [-738, -534]) { ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x0 + 54, y); ctx.stroke(); }
    }
    K.paper(ctx, K.rr(-536, -494, 12, 520, 3), '#3a2a20', { depth: 0 });
    // crossbeam and the axle bracket
    K.paper(ctx, K.rr(-752, -510, 286, 26, 5), C.stoneD, { depth: 5 });
    K.paper(ctx, K.poly([G.WX - 30, -510, G.WX, G.WY, G.WX + 30, -510]), C.ironD, { depth: 3 });
    // riser cable up to the small drum
    const tr = G.travel;
    K.cable(ctx, [G.BX - 16, G.BY, G.BX - 16, G.WY], tr + 300, { w: 4.5 });
    K.wheel(ctx, G.BX, G.BY, 16, -tr / 16, { color: C.ironL, spokes: 4 });
  }

  function drawWheel(ctx) {
    const G = P;
    const a = G.wheelAng;
    // big wheel (gate chain) and small drum (cable) on one axle
    K.wheel(ctx, G.WX, G.WY, G.R, a, { color: C.iron, spokes: 6 });
    K.wheel(ctx, G.WX, G.WY, G.r + 3, a, { color: C.brass, spokes: 3, depth: 1, markColor: '#fff' });
    // chain from big wheel down to the gate
    const gx = G.WX - G.R;
    const gateTop = -G.GATE_H - G.rise;
    const links = [];
    for (let y = G.WY; y < gateTop; y += 9) links.push(y);
    const off = (G.rise % 9);
    ctx.lineWidth = 2.4; ctx.strokeStyle = '#4b4f55';
    for (let y = G.WY + off; y < gateTop - 2; y += 9) {
      ctx.beginPath(); ctx.ellipse(gx, y, 2.8, 5, 0, 0, K.TAU); ctx.stroke();
    }
  }

  function drawGate(ctx) {
    const G = P;
    const j = G.jitter * Math.sin(K.time * 70) * 1.4;
    const x0 = G.GATE_X0 + j, x1 = G.GATE_X1 + j;
    const bot = -G.rise, top = bot - G.GATE_H;
    ctx.save();
    // vertical bars with spikes, horizontal straps, rivets
    for (let x = x0 + 8; x <= x1 - 6; x += 18) {
      K.paper(ctx, K.rr(x - 4, top, 8, G.GATE_H - 4, 2), C.iron, { depth: 3 });
      K.paper(ctx, K.poly([x - 5, bot - 8, x + 5, bot - 8, x, bot + 4]), C.ironD, { depth: 1 });
    }
    for (let y = top + 10; y < bot - 20; y += 58) {
      K.paper(ctx, K.rr(x0, y, x1 - x0, 12, 2), C.ironD, { depth: 3 });
      for (let x = x0 + 8; x <= x1 - 6; x += 18) K.dot(ctx, x, y + 6, 2, C.ironL);
    }
    K.paper(ctx, K.rr(x0 - 2, top - 6, x1 - x0 + 4, 14, 3), C.ironD, { depth: 3 });
    K.paper(ctx, K.rr((x0 + x1) / 2 - 7, top - 16, 14, 14, 4), C.ironL, { depth: 1 });
    ctx.restore();
    // latch hook on the right pillar
    const hookY = -G.GATE_H - G.LATCH - 4;
    const engaged = G.latched;
    K.paper(ctx, K.poly([-534, hookY - 10, -548 + (engaged ? 0 : 8), hookY, -534, hookY + 6]), C.brass, { depth: 2 });
  }

  function drawPlate(ctx) {
    const G = P;
    const y = G.d;
    K.paper(ctx, K.rr(G.X0, y - 2, G.X1 - G.X0, 16, 3), '#7d848d', { depth: 2 });
    ctx.fillStyle = '#9aa1a9';
    for (let x = G.X0 + 10; x < G.X1 - 6; x += 16) {
      ctx.beginPath(); ctx.moveTo(x, y + 1); ctx.lineTo(x + 8, y + 1); ctx.lineTo(x + 4, y + 7); ctx.fill();
    }
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    if (y > 0.5) { ctx.fillRect(G.X0, -2, 3, y); ctx.fillRect(G.X1 - 3, -2, 3, y); }
  }

  // the well is wide: when she comes back she is very big
  P.WELL = { x0: 108, x1: 252, cx: 180 };
  function drawWell(ctx) {
    // shaft (cutaway), water, ladder; the tunnel from the lake arrives at its foot
    K.paper(ctx, K.rr(106, 14, 148, 300, 4), '#2a3b45', { depth: 0, line: '#1c262d' });
    ctx.fillStyle = 'rgba(80,150,190,0.55)';
    ctx.fillRect(108, 12 + Math.sin(K.time * 2) * 1.5, 144, 300);
    for (let y = 290; y > -40; y -= 22) K.limb(ctx, [166, y, 194, y], 3, C.woodD, { depth: 0 });
    K.limb(ctx, [166, 300, 166, -40], 4, C.wood, { depth: 1 });
    K.limb(ctx, [194, 300, 194, -40], 4, C.wood, { depth: 1 });
  }
  function drawWellRim(ctx) {
    const p = K.rr(96, -44, 168, 46, 8);
    K.paper(ctx, p, C.stone, { depth: 4 });
    ctx.strokeStyle = C.stoneD; ctx.lineWidth = 1.2;
    for (let x = 122; x < 264; x += 28) { ctx.beginPath(); ctx.moveTo(x, -44); ctx.lineTo(x, 0); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(96, -22); ctx.lineTo(264, -22); ctx.stroke();
    // little roof with its own pulley
    K.limb(ctx, [102, -44, 102, -150], 6, C.woodD);
    K.limb(ctx, [258, -44, 258, -150], 6, C.woodD);
    K.paper(ctx, K.poly([80, -142, 180, -192, 280, -142]), '#b85a45', { depth: 3 });
    K.wheel(ctx, 180, -136, 10, K.time * 0.2, { color: C.woodD, spokes: 4, mark: false });
    K.line(ctx, [190, -136, 190, -80], 1.5, '#6b4a2e');
    K.paper(ctx, K.poly([181, -80, 199, -80, 196, -64, 184, -64]), C.wood, { depth: 1.5 });
  }

  P.drawBack = function (ctx) {
    const v = K.cam.view();
    if (v[0] > 700 || v[2] < -1500) return;
    drawHome(ctx);
    drawBackdrop(ctx);
    drawWell(ctx);
    if (!K.girl.inWell) drawWellRim(ctx);
    drawPit(ctx);
    drawGateFrame(ctx);
    P.pup.draw(ctx, 'back');
    drawGate(ctx);
    drawWheel(ctx);
    drawPlate(ctx);
    // a lamp post and birds that fly off when the ground thumps
    K.limb(ctx, [40, 0, 40, -150], 5, C.ironD);
    K.paper(ctx, K.rr(28, -176, 24, 26, 5), '#f7e3a0', { depth: 2, line: C.ironD });
  };
  P.drawFront = function (ctx) {
    const v = K.cam.view();
    if (v[0] > 700 || v[2] < -1500) return;
    if (K.girl.inWell) {
      drawWellRim(ctx);
      ctx.fillStyle = 'rgba(70,140,185,0.35)';
      ctx.fillRect(108, 12 + Math.sin(K.time * 2) * 1.5, 144, 300);
    }
    P.pup.draw(ctx, 'front');
    K.world.drawTufts(ctx, -1390, -760, 0, C.grassD);
  };

  // ---------- the puppy ----------
  const pup = (P.pup = {
    x: -610, y: 0, vx: 0, face: 1, state: 'wait', t: 0, wag: 0, hop: 0, vy: 0, barkT: 1.5, layer: 'back', target: null,
    reset() { Object.assign(this, { x: -610, y: 0, vx: 0, face: 1, state: 'wait', t: 0, hop: 0, vy: 0, barkT: 1.5, layer: 'back', target: null }); },
    bark() { K.sfx.bark(2); this.hop = 1; this.vy = -180; },
    hit(p) { return Math.abs(p.x - this.x) < K.cam.touchR(30) && p.y < this.y + 10 && p.y > this.y - 60; },
    update(dt) {
      this.t += dt;
      this.wag += dt * (this.state === 'wait' ? 12 : 22);
      if (this.vy || this.y < 0) { this.vy += 1200 * dt; this.y += this.vy * dt; if (this.y > 0) { this.y = 0; this.vy = 0; } }
      const G = K.girl;
      if (this.state === 'wait') {
        this.face = G.x > this.x ? 1 : -1;
        this.barkT -= dt;
        const near = Math.abs(G.x - this.x) < 520;
        if (this.barkT < 0 && near) { this.bark(); this.barkT = K.rand(2.5, 5); }
      } else if (this.state === 'run' || this.state === 'follow') {
        const tx = this.state === 'follow' ? G.x + (this.side || 1) * (G.halfWidth() + 20) : this.target;
        const dx = tx - this.x;
        if (Math.abs(dx) > 4) { this.face = Math.sign(dx); this.x += Math.sign(dx) * Math.min(Math.abs(dx), 230 * dt); if (this.y === 0 && Math.random() < dt * 4) this.vy = -120; }
        else if (this.state === 'run') { this.state = 'happy'; this.t = 0; }
      } else if (this.state === 'happy') {
        this.face = G.x > this.x ? 1 : -1;
        if (this.y === 0 && Math.random() < dt * 2.2) { this.vy = -K.rand(150, 260); if (Math.random() < 0.5) K.sfx.bark(1); }
      }
    },
    draw(ctx, layer) {
      if (layer !== this.layer) return;
      const x = this.x, y = this.y + (K.world.floorAt(this.x) ? K.world.floorAt(this.x).y : 0);
      const f = this.face;
      ctx.save(); ctx.translate(x, y); ctx.scale(f, 1);
      const w = Math.sin(this.wag) * 0.6;
      K.limb(ctx, [-16, -20, -26, -32 - Math.cos(this.wag) * 2 + w * 4], 5, C.pupD, { depth: 1 });
      for (const lx of [-12, -5, 6, 12]) K.limb(ctx, [lx, -14, lx, -1], 5, lx % 2 ? C.pupD : C.pup, { depth: 1 });
      K.paper(ctx, K.ell(0, -18, 19, 10), C.pup, { depth: 2 });
      K.paper(ctx, K.ell(16, -30, 11, 10), C.pup, { depth: 2 });
      K.paper(ctx, K.ell(24, -28, 6, 4.5), '#f1d2a8', { depth: 0 });
      K.dot(ctx, 29, -29, 2.4, C.ink);
      K.dot(ctx, 18, -33, 1.8, C.ink);
      K.paper(ctx, K.ell(10, -30, 4.5, 9, 0.35 + Math.sin(this.t * 6) * 0.1), C.pupD, { depth: 1 });
      ctx.restore();
    },
  });
})();
