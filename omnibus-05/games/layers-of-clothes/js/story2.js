// Story, part 2: kitchen, lake, the way home, and the gate.
(function () {
  'use strict';
  const S = K.story, G = K.girl;

  S.def('toCook', {
    enter() { S.skyT = 2; S.trackGirl(640, 380, 170); G.walkTo(K.cook.standX, () => S.go('cookDress'), 1.2); },
  });

  // ---------- kitchen ----------
  S.def('cookDress', S.dress('cook', () => K.cook.jacket, [2590, -370, 3070, 110], 'cookZip'));
  S.def('cookZip', S.zip('cook', () => { G.tools.pan = true; K.sfx.clink(); G.squish.v -= 1.5; K.after(0.4, () => S.go('cookFill')); }));
  S.def('cookFill', {
    enter() {
      const Ck = K.cook;
      S.frame(2690, -340, 3170, 110);
      G.walkTo(Ck.fillX, () => {
        G.face = 1;
        const Sp = K.Spray;
        Sp.speed = 330; Sp.lob = true; Sp.hot = false;
        Sp.start(() => ({ x: Ck.tapX + 16, y: Ck.tapY }));
        Sp.aimAt({ x: Ck.stoveX, y: -104 });
        K.sfx.clink(); K.sfx.buckle();
        S.ready = true;
      });
    },
    down(p) { if (!S.ready) return false; K.Spray.on = true; K.Spray.target = null; return true; },
    up() { K.Spray.on = false; },
    update() {
      if (S.autoFill) { K.Spray.target = { x: K.cook.stoveX, y: -104 }; K.Spray.on = true; }
      if (S.ready && K.cook.level >= 1 && !S.full) {
        S.full = true;
        K.after(0.5, () => { K.Spray.detach(); K.sfx.clink(); S.go('cookLight'); });
      }
    },
    hint() {
      if (!S.ready || K.input.down || S.demos++ >= 1) return;
      K.Spray.target = { x: K.cook.stoveX, y: -104 }; K.Spray.on = true;
      K.after(0.3, () => { if (!K.input.down && !S.autoFill) { K.Spray.on = false; K.Spray.target = null; } });
    },
    hintAfter: 2.2,
    auto() { S.autoFill = true; },
    exit() { S.autoFill = false; S.full = false; },
    noJump: true,
  });
  S.def('cookLight', {
    enter() { K.cook.glintKnob = 1; G.expr = 'happy'; },
    down(p) {
      const Ck = K.cook;
      if (Ck.hitKnob(p) || (Math.abs(p.x - Ck.stoveX) < 50 && p.y > -64 && p.y < 10)) { this.light(); return true; }
      return false;
    },
    light() {
      const Ck = K.cook;
      G.handF = Ck.knob(); S.reachUntil = K.time + 0.6;
      Ck.light();
      S.go('cookBoil');
    },
    hint() { K.cook.glintKnob = 1; G.handF = K.cook.knob(); S.reachUntil = K.time + 0.8; },
    hintAfter: 2,
    auto() { this.light(); },
  });
  S.def('cookBoil', {
    enter() { K.cook.onBoil = () => { G.expr = 'o'; K.after(0.6, () => S.go('cookPour')); }; if (K.cook.boiling) K.cook.onBoil(); },
  });
  S.def('cookPour', {
    enter() {
      const Ck = K.cook;
      S.frame(2700, -320, 3220, 150);
      Ck.glintPot = 1; G.expr = 'determined'; S.autoPour = false;
      Ck.onEmpty = () => {
        S.joy(3);
        K.after(0.7, () => K.lake.finishHole());
        K.after(1.2, () => {
          Ck.lit = false; K.sfx.click();
          Ck.taken = true; G.tools.pot = true; K.sfx.clink(); G.squish.v -= 1.5; G.handF = null; S.holdHand = false;
          K.after(0.6, () => S.go('diverWalk'));
        });
      };
    },
    down(p) {
      const Ck = K.cook;
      if (Ck.poured) return false;
      if (Ck.hitHandle(p)) {
        const pv = Ck.pivot();
        S.a0 = Math.atan2(p.y - pv.y, p.x - pv.x) - Ck.tilt;
        S.holdHand = true;
        return true;
      }
      return false;
    },
    move(p) {
      const Ck = K.cook, pv = Ck.pivot();
      const a = Math.atan2(p.y - pv.y, p.x - pv.x);
      Ck.setTilt(K.angDiff(S.a0, a));
    },
    up(p, tap) { if (tap) S.autoPour = true; },
    update(dt) {
      const Ck = K.cook;
      if (S.autoPour && !Ck.poured) Ck.setTilt(K.follow(Ck.tilt, 1.0, 2.5, dt));
      if (!Ck.taken) { if (Ck.tilt > 0.03 || K.input.down) G.handF = Ck.handle(); }
    },
    hint() {
      const Ck = K.cook;
      Ck.glintPot = 1; G.handF = Ck.handle(); S.reachUntil = K.time + 0.9;
      // she lifts the handle a little by herself: this is how it moves
      if (!K.input.down && !S.autoPour && Ck.tilt < 0.1) { Ck.setTilt(0.22); K.after(0.5, () => { if (!K.input.down && !S.autoPour) Ck.setTilt(0); }); }
    },
    hintAfter: 2,
    auto() { S.autoPour = true; },
    noJump: true,
  });

  // ---------- diving gear ----------
  S.def('diverWalk', {
    enter() { S.frame(2560, -370, 3040, 110); G.walkTo(K.cook.diverStandX, () => { G.face = -1; S.go('diverDress'); }); },
  });
  S.def('diverDress', S.dress('diver', () => K.cook.wetsuit, [2560, -370, 3040, 110], 'diverZip'));
  S.def('diverZip', S.zip('diver', () => {
    G.tools.tank = true; K.sfx.buckle(); G.squish.v -= 2;
    K.after(0.35, () => { G.tools.weights = true; K.sfx.buckle(); K.sfx.thunk(0.5); G.squish.v -= 2.5; K.cam.bump(4); });
    K.after(1.0, () => S.go('toHole'));
  }));
  S.def('toHole', {
    enter() { S.frame(2660, -340, 3240, 170); G.walkTo(3018, () => { G.face = 1; S.go('jumpIn'); }, 0.9); },
  });
  S.def('jumpIn', {
    enter() { G.expr = 'determined'; S.frame(2860, -320, 3300, 260); },
    down(p) {
      if (G.hit(p) || (Math.abs(p.x - K.lake.HX) < 90 && p.y > -80 && p.y < 120)) { this.go(); return true; }
      return false;
    },
    go() { if (G.jump(1.1)) { G.vxAir = 75; S.go('sink'); } },
    hint() { if (G.onGround) G.squish.v += 2.4; },
    hintAfter: 1.5, hintEvery: 1.5,
    auto() { this.go(); }, autoAfter: 7,
    noJump: true,
  });
  S.def('sink', {
    enter() { S.landed = false; },
    update() {
      if (!G.under && G.y > 12) {
        G.under = true; K.world.under = true;
        G.vy *= 0.3; G.vxAir *= 0.3; G.wet = 1;
        K.sfx.splash(1.4); K.P.splash(K.lake.HX, 0, 34, 1.4); K.cam.bump(9);
        for (let i = 0; i < 5; i++) K.P.spawn('chip', K.lake.HX + K.rand(-40, 40), 0, K.rand(-160, 160), -K.rand(80, 220), { life: 1.2, r: K.rand(3, 6), solid: false });
        K.P.bubbles(G.x, G.y - 80, 30);
        S.frame(2950, -130, 3320, 470);
        K.sfx.loop('under', 0.5);
      }
      if (G.under && G.onGround && !S.landed) { S.landed = true; K.P.dust(G.x, G.y, 14, 1.2); K.after(0.9, () => S.go('underWalk')); }
    },
    noJump: true,
  });
  S.def('underWalk', {
    enter() {
      G.walkTo(3086, () => {
        G.face = 1;
        K.lake.tiePot();
        K.after(1.4, () => S.go('potFill'));
      });
    },
  });
  S.def('potFill', {
    enter() {
      S.frame(2980, 120, 3340, 470);
      K.lake.oct.glint = 1;
      K.lake.onOpen = () => { G.expr = 'joy'; S.joy(4); K.after(0.9, () => S.go('dropDown')); };
    },
    down(p) { if (K.lake.psi > 1.2) return false; K.lake.oct.held = true; K.lake.oct.auto = 0; return true; },
    up(p, tap) { K.lake.oct.held = false; if (tap) K.lake.oct.auto = 2.5; },
    hint() { K.lake.oct.glint = 1; if (!K.input.down && K.lake.oct.auto <= 0 && S.demos++ < 1) K.lake.oct.auto = 0.8; },
    hintAfter: 2,
    auto() { K.lake.oct.auto = 8; },
    noJump: false,
  });
  S.def('dropDown', {
    enter() { S.fell = false; S.frame(2980, 220, 3340, 640); G.walkTo(3212, null, 0.8); },
    update() {
      if (!S.fell && G.mode === 'air') S.fell = true;
      if (S.fell && G.onGround && G.y > 540) { S.fell = false; K.after(0.5, () => S.go('tunnel')); }
    },
    noJump: true,
  });
  S.def('tunnel', {
    enter() {
      S.trackGirl(560, 280, 120);
      G.walkTo(2700);
      K.after(1.6, () => { K.fadeT = 1; });
      K.after(2.8, () => S.go('wellClimb'));
    },
    noJump: true,
  });

  // ---------- home again: up the well ----------
  S.def('wellClimb', {
    enter() {
      S.skyT = 3; K.world.sky = 2.9;
      G.x = 290; G.y = K.world.tunnelFloor(290); G.under = true; K.world.under = true; G.mode = 'stand';
      K.cam.frame(-20, -280, 700, 360, true);
      K.fadeT = 0;
      S.climb = false; S.rung = 0;
      G.walkTo(180, () => { G.face = 1; G.mode = 'climb'; G.inWell = true; S.climb = true; S.rungT = 0; S.fromY = G.y; });
    },
    update(dt) {
      if (!S.climb) return;
      S.rungT += dt;
      const per = 0.36;
      const k = Math.min(1, S.rungT / per);
      G.y = S.fromY - 22 * K.easeInOut(k);
      G.walkPh += dt * 6;
      G.armsUp = 0.55 + 0.25 * Math.sin(K.time * 8);
      if (k >= 1) {
        S.fromY = G.y; S.rungT = 0;
        K.sfx.creak(0.9); G.squish.v -= 1.2;
        if (G.under) K.P.bubbles(G.x, G.y - 120, 3);
      }
      if (G.under && G.y < 10) {
        G.under = false; K.world.under = false;
        K.sfx.splash(1.1); K.sfx.loop('under', 0);
        K.P.splash(K.plaza.WELL.cx, 8, 26, 1.1);
        S.frame(-120, -330, 440, 200);
      }
      if (G.y <= -44) {
        S.climb = false; G.mode = 'script';
        const x0 = G.x;
        S.hop = { t: 0, x0, y0: G.y };
      }
    },
    exit() { S.hop = null; },
  });
  // the hop over the rim runs outside the beat's update so it can finish on its own
  const hopTick = S.update;
  S.update = function (dt) {
    hopTick(dt);
    if (S.hop) {
      const h = S.hop;
      h.t += dt / 0.8;
      const t = K.sat(h.t);
      G.x = K.lerp(h.x0, 40, t);
      G.y = K.lerp(h.y0, 0, t) - Math.sin(t * Math.PI) * 26;
      G.face = -1;
      if (t >= 1) {
        S.hop = null; G.y = 0; G.mode = 'stand'; G.inWell = false; G.onGround = true;
        G.armsUp = 0;
        K.sfx.land(G.mass, 'stone'); K.cam.bump(10); G.squish.v -= 4;
        K.P.splash(40, 0, 20, 0.9); K.P.dust(40, 0, 12, 1.6);
        K.world.impact(40, 0, G.mass, 1.2);
        K.after(0.3, () => { G.maskUp = true; K.sfx.plop(); G.expr = 'happy'; });
        K.after(0.8, () => S.go('finalApproach'));
      }
    }
  };

  // ---------- the gate, again ----------
  S.def('finalApproach', {
    enter() {
      S.frame(-780, -690, -100, 270, false, 640);
      G.walkTo(K.plaza.X1 + 44, () => { G.face = -1; G.expr = 'determined'; S.ready = true; K.plaza.pup.bark(); });
    },
    down(p) {
      if (!S.ready) return false;
      const P = K.plaza;
      if (G.hit(p) || (p.x > P.X0 - 20 && p.x < P.X1 + 20 && p.y > -120 && p.y < 60)) { this.go(); return true; }
      return false;
    },
    go() {
      if (!S.ready) return;
      S.ready = false;
      K.plaza.slow = true;
      G.walkTo(K.plaza.PX, () => { G.face = -1; }, 1.7);
      S.go('finalChain');
    },
    hint() { if (S.ready) { G.squish.v += 2.2; K.P.spawn('spark', K.plaza.PX, -8, 0, 0, { life: 0.9, r: 14 }); } },
    hintAfter: 1.6, hintEvery: 1.8,
    auto() { this.go(); }, autoAfter: 6,
    noJump: true,
  });
  S.def('finalChain', {
    enter() {
      S.stage = 0; G.expr = 'o';
      K.cam.rate = 2.4;
      S.frame(-530, -260, -170, 250);
      K.plaza.onLatch = () => S.go('reunion');
    },
    update() {
      const P = K.plaza;
      // the camera follows the push along the machine: plate -> pulleys -> wheel -> gate
      if (S.stage === 0 && P.d > P.D_PRE + 4) { S.stage = 1; S.frame(-620, -200, -280, 250); }
      if (S.stage === 1 && P.d > P.D_PRE + 12) { S.stage = 2; S.frame(-730, -690, -360, -130); }
      if (S.stage === 2 && P.d > P.D_PRE + 26) { S.stage = 3; S.frame(-790, -690, -110, 270, false, 640); }
    },
    noJump: true,
  });
  S.def('reunion', {
    enter() {
      const pup = K.plaza.pup;
      K.cam.rate = 2.2;
      S.frame(-790, -690, -110, 270, false, 640);
      K.sfx.chime([12, 16, 19, 24]);
      G.expr = 'joy';
      K.after(0.5, () => { pup.state = 'run'; pup.target = K.plaza.X0 - 30; pup.layer = 'front'; K.sfx.bark(3); });
      K.after(1.6, () => G.jump());
      K.after(4.8, () => S.go('stepOff'));
    },
  });
  S.def('stepOff', {
    enter() {
      const pup = K.plaza.pup;
      K.plaza.slow = false;
      pup.state = 'follow'; pup.side = -1;
      S.trackGirl(760, 460, 220);
      G.walkTo(-960, null, 1.7);
    },
    update() { if (G.x < -770) S.go('end'); },
  });
  S.def('end', {
    enter() {
      const pup = K.plaza.pup;
      G.expr = 'joy';
      pup.state = 'happy';
      S.frame(-1260, -440, -760, 120);
      G.walkTo(-960, () => { G.face = 1; }, 1.5);
      K.sfx.chime([7, 12, 16, 19, 24, 28], 0.16);
      K.after(3.2, () => G.jump());
    },
    update() {
      if (S.t > 18 && S.idle > 8 && !S.leaving) {
        S.leaving = true; K.fadeT = 1;
        K.after(1.6, () => { S.leaving = false; S.go('intro'); K.fadeT = 0; });
      }
    },
  });
})();

// Debug only: ?beat=<name> starts at a later beat with the right clothes on.
(function () {
  'use strict';
  const q = new URLSearchParams(location.search).get('beat');
  if (!q) return;
  const S = K.story, G = K.girl;
  const plan = {
    fireDress: [718, [], {}, 1], fireHose: [718, ['fire'], {}, 1],
    mechDress: [1668, ['fire'], { hose: 1 }, 1], mechCrank: [1668, ['fire', 'mech'], { hose: 1, belt: 1 }, 1],
    cookDress: [2700, ['fire', 'mech'], { hose: 1, belt: 1 }, 2], cookFill: [2700, ['fire', 'mech', 'cook'], { hose: 1, belt: 1, pan: 1 }, 2],
    diverDress: [2708, ['fire', 'mech', 'cook'], { hose: 1, belt: 1, pan: 1, pot: 1 }, 2],
    toHole: [2708, ['fire', 'mech', 'cook', 'diver'], { hose: 1, belt: 1, pan: 1, pot: 1, tank: 1, weights: 1 }, 2],
    finalApproach: [40, ['fire', 'mech', 'cook', 'diver'], { hose: 1, belt: 1, pan: 1, tank: 1, weights: 1 }, 3],
  };
  const p = plan[q];
  if (!p) return;
  const start = S.beats.intro.enter;
  S.beats.intro.enter = function () {
    start();
    K.clearTimers();
    G.x = p[0]; G.layers = ['base'].concat(p[1]); G.tools = Object.assign({}, p[2]);
    for (const l of p[1]) G.zip[l] = 1;
    for (const it of [K.fire.coat, K.mech.suit, K.cook.jacket, K.cook.wetsuit]) if (p[1].indexOf(it.id) >= 0) it.state = 'worn';
    if (p[2].hose) { K.fire.heat = 0; K.fire.out = true; K.fire.fallen = true; K.fire.hoseOnHydrant = false; }
    if (p[1].indexOf('mech') >= 0) { K.mech.phi = 99; K.mech.theta = 0; }
    if (p[2].pot || q === 'finalApproach') { K.cook.taken = true; K.cook.poured = true; K.lake.holeR = 52; }
    if (q === 'finalApproach') { G.wet = 1; G.maskUp = true; }
    G.recalc();
    S.skyT = p[3]; K.world.sky = p[3];
    S.go(q);
  };
})();
