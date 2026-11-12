// Fire room: firefighter coat on a hook, a hydrant with its hose, and burning crates.
// Also the shared hose-spraying tool (used again later in the kitchen).
(function () {
  'use strict';
  const C = K.C;

  // ---------- the hose: touch anywhere, the water lands where your finger is ----------
  // She aims like a real nozzle user: the launch angle is solved for a ballistic arc.
  const S = (K.Spray = {
    on: false, src: null, ang: -0.2, flow: 0, emit: 0, attached: false, hot: false,
    speed: 520, lob: false, target: null,
    start(srcFn) { this.src = srcFn; this.attached = true; this.flow = 0; },
    stop() { this.on = false; },
    detach() { this.attached = false; this.on = false; this.target = null; K.girl.handF = null; K.girl.lean = 0; },
    shoulder() { const G = K.girl; return { x: G.x + G.face * (G.halfWidth() * 0.45), y: G.y - 62 - G.T * 0.4 }; },
    nozzle() {
      const G = K.girl, sh = this.shoulder();
      const reach = 30 + G.Ta * 0.4;
      return { x: sh.x + Math.cos(this.ang) * reach, y: sh.y + Math.sin(this.ang) * reach, sh };
    },
    // launch angle that makes the arc pass through (tx, ty)
    solve(tx, ty) {
      const n = this.nozzle();
      const G = K.girl;
      let dx = (tx - n.x) * G.face;
      const up = -(ty - n.y);
      const v = this.speed, g = 900;
      dx = Math.max(dx, 12);
      const disc = v * v * v * v - g * (g * dx * dx + 2 * up * v * v);
      let th;
      if (disc < 0) th = Math.PI / 4;
      else th = Math.atan((v * v + (this.lob ? 1 : -1) * Math.sqrt(disc)) / (g * dx));
      th = K.clamp(th, -0.9, 1.35);
      return G.face > 0 ? -th : Math.PI + th;
    },
    aimAt(p) { this.ang = this.solve(p.x, p.y); },
    update(dt) {
      if (!this.attached) { K.sfx.loop('spray', 0); return; }
      const G = K.girl;
      const I = K.input;
      const aimP = this.target || (this.on && I.down ? I.world() : null);
      if (aimP) this.ang = K.follow(this.ang, this.solve(aimP.x, aimP.y), 14, dt);
      this.flow = K.follow(this.flow, this.on ? 1 : 0, 10, dt);
      const n = this.nozzle();
      const tip = { x: n.x + Math.cos(this.ang) * 16, y: n.y + Math.sin(this.ang) * 16 };
      G.handF = { x: n.x, y: n.y };
      G.lean = -Math.cos(this.ang) * 0.07 * this.flow;
      if (this.flow > 0.2) {
        this.emit += dt * 75 * this.flow;
        while (this.emit > 1) {
          this.emit -= 1;
          const a = this.ang + K.rand(-0.025, 0.025);
          const sp = this.speed * K.rand(0.97, 1.03);
          K.P.spawn(this.hot ? 'hot' : 'water', tip.x, tip.y, Math.cos(a) * sp, Math.sin(a) * sp, { life: 2.4, r: K.rand(2.6, 4), g: 900 });
        }
        K.cam.bump(0.5);
      }
      this.tip = tip;
      K.sfx.loop('spray', this.flow * 0.9);
    },
    draw(ctx) {
      if (!this.attached || !this.src) return;
      const n = this.nozzle();
      const s = this.src();
      // hose lies on the floor between the source and her hands
      const midx = (s.x + n.x) / 2;
      const floor = K.world.floorY(midx);
      const pts = [s.x, s.y, midx, floor + 6, n.x, n.y];
      K.limb(ctx, pts, 7, '#d8443a', { curve: true, depth: 2 });
      ctx.save();
      ctx.translate(n.x, n.y); ctx.rotate(this.ang);
      K.paper(ctx, K.rr(-6, -5, 22, 10, 3), C.brass, { depth: 1.5 });
      K.paper(ctx, K.rr(12, -3.5, 8, 7, 2), K.shade(C.brass, -0.2), { depth: 0 });
      ctx.restore();
    },
  });

  // ---------- room ----------
  const F = (K.fire = {
    hookX: 790, hookY: -150, standX: 718, hydrantX: 868, fireX: 1120,
    heat: 1, out: false, crumble: 0, fallen: false, coat: null,
  });

  F.reset = function () {
    F.heat = 1; F.out = false; F.crumble = 0; F.fallen = false;
    F.coat = K.makeGarment('fire', F.hookX, F.hookY);
    F.hoseOnHydrant = true;
    K.world.addProp('bird', 610, { need: 11, dir: 1, color: '#7d8da1' });
    K.world.addProp('bird', 1330, { need: 11, dir: 1, color: '#8a7b6e' });
    K.world.addProp('bird', 1360, { need: 11, dir: -1, color: '#7d8da1' });
    K.world.addProp('bucket', 950, { need: 12 });
    K.world.addProp('pebble', 1290, { need: 9 });
    K.world.addProp('pebble', 1330, { need: 9, color: '#a79c8a' });
  };

  // water hitting the flames
  K.P.hitters.push({
    test(p) { return !F.out && (p.type === 'water') && p.x > F.fireX - 70 && p.x < F.fireX + 80 && p.y > -150 + (1 - F.heat) * 90 && p.y < 5; },
    hit(p) {
      F.heat -= 0.0052;
      if (Math.random() < 0.25) K.P.steam(p.x, p.y, 1, 6, { alpha: 0.6 });
      if (Math.random() < 0.05) K.sfx.sizzle();
      if (F.heat <= 0 && !F.out) {
        F.out = true; F.heat = 0;
        K.sfx.sizzle(); K.sfx.sizzle();
        K.P.steam(F.fireX, -40, 30, 50, { alpha: 0.7 });
        if (F.onOut) F.onOut();
      }
    },
  });

  F.update = function (dt) {
    F.coat.update(dt);
    const h = F.out ? 0 : F.heat;
    if (h > 0) {
      if (Math.random() < dt * 14 * h) K.P.spawn('smoke', F.fireX + K.rand(-40, 40), -130 * h - 40, K.rand(-10, 10), -K.rand(30, 70), { life: 3, r: 10, g: -20, layer: 'back' });
      if (Math.random() < dt * 8 * h) K.P.spawn('ember', F.fireX + K.rand(-50, 50), -60, K.rand(-40, 40), -K.rand(80, 200), { life: 1.4, r: 2.5, g: -40 });
      if (Math.random() < dt * 5 * h) K.sfx.pop();
    }
    const near = Math.abs(K.girl.x - F.fireX) < 900;
    K.sfx.loop('fire', near ? h * 0.8 : 0);
    if (F.fallen) F.crumble = Math.min(1, F.crumble + dt * 2.5);
  };

  F.knockDown = function () {
    if (F.fallen) return;
    F.fallen = true;
    K.sfx.crumble(); K.sfx.thunk(0.6);
    for (let i = 0; i < 18; i++) K.P.spawn('chip', F.fireX + K.rand(-60, 60), K.rand(-100, -20), K.rand(-120, 160), -K.rand(60, 260), { life: 1.2, r: K.rand(3, 6), color: K.pick(['#2d2420', '#3e3029', '#55463a']), solid: false });
    K.P.dust(F.fireX, 0, 10, 1.4);
  };
  function crate(ctx, x, y, w, h, burnt) {
    const col = K.mix(C.wood, '#2f2622', burnt);
    K.paper(ctx, K.rr(x, y, w, h, 3), col, { depth: 3 });
    ctx.strokeStyle = K.shade(col, -0.35); ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x + 4, y + 4); ctx.lineTo(x + w - 4, y + h - 4); ctx.moveTo(x + w - 4, y + 4); ctx.lineTo(x + 4, y + h - 4); ctx.stroke();
    ctx.strokeRect(x + 3, y + 3, w - 6, h - 6);
  }
  function flame(ctx, x, y, s, ph) {
    const fl = 1 + Math.sin(K.time * 13 + ph) * 0.12 + Math.sin(K.time * 7.3 + ph * 2) * 0.08;
    const layers = [[C.flameR, 1], [C.flame, 0.72], [C.flameY, 0.44]];
    for (const [col, k] of layers) {
      const h = 70 * s * k * fl, w = 26 * s * k;
      const p = new Path2D();
      p.moveTo(x - w, y);
      p.bezierCurveTo(x - w, y - h * 0.5, x - w * 0.2 + Math.sin(K.time * 5 + ph) * 5, y - h * 0.8, x + Math.sin(K.time * 6 + ph) * 6 * s, y - h);
      p.bezierCurveTo(x + w * 0.3, y - h * 0.7, x + w, y - h * 0.45, x + w, y);
      p.closePath();
      ctx.fillStyle = col; ctx.fill(p);
    }
  }

  F.drawBack = function (ctx) {
    const v = K.cam.view();
    if (v[2] < 450 || v[0] > 1600) return;
    // fire station behind
    K.paper(ctx, K.rr(560, -300, 330, 300, 6), C.brick, { depth: 5 });
    ctx.strokeStyle = C.brickD; ctx.lineWidth = 1;
    for (let y = -290; y < 0; y += 16) { ctx.beginPath(); ctx.moveTo(562, y); ctx.lineTo(888, y); ctx.stroke(); }
    K.paper(ctx, K.rr(600, -190, 150, 190, 4), '#e3d6bd', { depth: 2 });
    for (let y = -176; y < 0; y += 24) K.line(ctx, [606, y, 744, y], 1.4, '#c3b597');
    K.paper(ctx, K.poly([545, -296, 725, -370, 905, -296]), '#8f3a2c', { depth: 4 });
    K.paper(ctx, K.ell(725, -318, 18, 18), '#f3d98a', { depth: 2 });
    // coat post
    K.limb(ctx, [F.hookX - 28, 0, F.hookX - 28, -170], 8, C.woodD);
    K.limb(ctx, [F.hookX - 30, -164, F.hookX + 2, -164, F.hookX + 2, -154], 5, C.ironD, { depth: 1 });
    // hydrant
    const hx = F.hydrantX;
    K.paper(ctx, K.rr(hx - 16, -58, 32, 58, 6), '#d63b30', { depth: 3 });
    K.paper(ctx, K.ell(hx, -60, 19, 8), '#b82f26', { depth: 1 });
    K.paper(ctx, K.rr(hx - 8, -76, 16, 16, 5), '#b82f26', { depth: 1 });
    K.paper(ctx, K.rr(hx - 26, -40, 12, 14, 3), C.brass, { depth: 1 });
    if (F.hoseOnHydrant && !K.Spray.attached) {
      // the hose coiled beside the hydrant, nozzle hung on it
      for (let i = 0; i < 3; i++) {
        ctx.beginPath(); ctx.ellipse(hx + 34, -18, 20 - i * 5, 16 - i * 4, 0, 0, K.TAU);
        ctx.lineWidth = 7; ctx.strokeStyle = '#8e2a22'; ctx.stroke();
        ctx.lineWidth = 5; ctx.strokeStyle = '#d8443a'; ctx.stroke();
      }
      K.limb(ctx, [hx - 20, -33, hx + 14, -24], 6, '#d8443a', { depth: 1 });
      K.paper(ctx, K.rr(hx + 44, -52, 10, 22, 3), C.brass, { depth: 1 });
    }
    if (F.coat.state === 'hang' || F.coat.state === 'return') F.coat.draw(ctx);
  };
  F.drawMid = function (ctx) {
    const v = K.cam.view();
    if (v[2] < 450 || v[0] > 1600) return;
    // crates (burning or burnt)
    const x = F.fireX;
    const burnt = F.out ? 1 : 0.35 * (1 - F.heat) + 0.1;
    if (!F.fallen) {
      crate(ctx, x - 64, -56, 60, 56, burnt);
      crate(ctx, x + 2, -64, 62, 64, burnt);
      crate(ctx, x - 34, -118, 58, 56, burnt);
      K.paper(ctx, K.rr(x - 80, -8, 160, 8, 2), '#5a4030', { depth: 0 });
    } else {
      const c = F.crumble;
      const heap = new Path2D();
      heap.moveTo(x - 90, 0);
      heap.quadraticCurveTo(x - 40, -28 * (1 - c * 0.4), x, -22 * (1 - c * 0.4));
      heap.quadraticCurveTo(x + 50, -26 * (1 - c * 0.4), x + 90, 0);
      heap.closePath();
      K.paper(ctx, heap, '#2f2622', { depth: 2 });
      for (let i = 0; i < 7; i++) K.paper(ctx, K.rr(x - 80 + i * 24, -10 - (i % 3) * 4, 20, 6, 2), '#3e3029', { depth: 0, line: false });
    }
    if (!F.out) {
      const h = F.heat;
      flame(ctx, x - 40, -40, 0.9 * h + 0.1, 0);
      flame(ctx, x + 30, -50, 1.1 * h + 0.1, 2);
      flame(ctx, x - 6, -100, 1.3 * h, 4);
      flame(ctx, x + 50, -10, 0.7 * h, 5);
    }
  };
  F.drawFront = function (ctx) {
    const v = K.cam.view();
    if (v[2] < 450 || v[0] > 1600) return;
    K.world.drawTufts(ctx, 1000, 1270, 0, '#7f9a52');
  };
})();
