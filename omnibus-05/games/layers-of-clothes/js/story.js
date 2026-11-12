// Story: a chain of beats. Nothing is explained; each beat only makes the next
// touchable thing wiggle or glint when the child hesitates, and quietly helps
// itself along if nobody touches anything for a long time.
(function () {
  'use strict';
  const S = (K.story = { name: '', beat: null, t: 0, idle: 0, hintT: 0, cap: false, beats: {}, skyT: 0, breathT: 0 });
  const G = K.girl;
  K.fade = 0; K.fadeT = 0;

  S.def = (name, b) => { S.beats[name] = b; };
  S.go = function (name) {
    if (S.beat && S.beat.exit) S.beat.exit();
    S.name = name; S.beat = S.beats[name]; S.t = 0; S.idle = 0; S.hintT = 0; S.autoDone = false; S.cap = false;
    S.ready = false; S.demos = 0;
    if (K.debug) console.log('beat', name);
    if (S.beat.enter) S.beat.enter();
  };
  S.frame = (x0, y0, x1, y1, now, pw) => K.cam.frame(x0, y0, x1, y1, now, pw);
  S.trackGirl = (w, above, below, now) => K.cam.track(() => [G.x - w / 2, G.y - above, G.x + w / 2, G.y + below], now);

  S.update = function (dt) {
    S.t += dt;
    if (!K.input.down) S.idle += dt;
    const b = S.beat;
    if (b) {
      if (b.update) b.update(dt);
      if (b.hint && S.idle > (b.hintAfter || 3)) {
        S.hintT -= dt;
        if (S.hintT <= 0) { S.hintT = b.hintEvery || 3.2; b.hint(); }
      }
      if (b.auto && !S.autoDone && S.idle > (b.autoAfter || 24)) { S.autoDone = true; b.auto(); }
    }
    K.world.sky = K.follow(K.world.sky, S.skyT, 0.6, dt);
    K.fade = K.follow(K.fade, K.fadeT, 3, dt);
    // breathing through the regulator underwater
    if (G.under && G.zip.diver >= 1) {
      S.breathT -= dt;
      if (S.breathT < 0) { S.breathT = K.rand(1.4, 2.2); K.P.bubbles(G.x + G.face * 8, G.y + G.headTopLocal() + 60, 5); }
    }
    for (const o of [K.mech, K.cook, K.cook]) void o;
    K.mech.glint = Math.max(0, (K.mech.glint || 0) - dt);
    K.cook.glintKnob = Math.max(0, (K.cook.glintKnob || 0) - dt);
    K.cook.glintPot = Math.max(0, (K.cook.glintPot || 0) - dt);
    G.zipGlint = Math.max(0, (G.zipGlint || 0) - dt);
    if (S.reachUntil && K.time > S.reachUntil) { S.reachUntil = 0; if (!S.holdHand) G.handF = null; }
  };

  // ---------- input routing ----------
  K.onDown = function (p) {
    S.idle = 0; S.hintT = 0;
    const b = S.beat;
    S.cap = false;
    if (b && b.down && b.down(p)) { S.cap = true; return; }
    if (K.plaza.pup.hit(p) && Math.abs(K.plaza.pup.x - G.x) > 20 && !G.hit(p)) { K.plaza.pup.bark(); return; }
    if (!G.hit(p) && K.world.poke(p)) return;
    if (!G.hit(p) && K.plaza.hitGate(p)) return;
    if (G.hit(p) && !(b && b.noJump)) {
      if (G.jump() && b && b.jumped) b.jumped();
    }
  };
  K.onMove = function (p) { if (S.cap && S.beat && S.beat.move) S.beat.move(p); };
  K.onUp = function (p, tap) {
    const b = S.beat;
    if (S.cap) { S.cap = false; if (b && b.up) b.up(p, tap); return; }
    if (tap && b && b.tap) b.tap(p);
  };

  // ---------- world reactions to her weight ----------
  K.onGirlLand = function (fl, s) {
    if (fl.ref === K.plaza) K.plaza.impulse(s * G.mass * 0.6);
    if (fl.surf === 'ice') { K.lake.addCrack(G.x, G.heavy + 0.3); K.sfx.iceCrack(1); }
  };
  K.onGirlStep = function (fx, surf) {
    if (surf === 'ice') K.lake.addCrack(fx, G.heavy);
    if (surf === 'plate') K.plaza.impulse(G.mass * 0.06);
  };

  // a small music-box phrase when something works (no words, no score)
  S.joy = function (n) {
    const phrases = [[0, 4, 7], [2, 5, 9], [4, 7, 11], [5, 9, 12], [7, 11, 14]];
    K.sfx.chime(phrases[Math.min(n, phrases.length - 1)].map((x) => x + 12), 0.11, 0.05);
  };

  // ---------- reusable beats ----------
  // Drag the hanging clothes onto her (a tap also works).
  S.dress = function (job, getItem, frame, next) {
    return {
      enter() {
        G.expr = 'happy';
        S.frame.apply(null, frame);
        const it = getItem();
        it.onWorn = () => { G.wear(job); S.go(next); };
      },
      down(p) {
        const it = getItem();
        if (it.hit(p)) { it.grab(p); S.held = it; G.handF = null; return true; }
        return false;
      },
      move(p) { if (S.held) S.held.dragTo(p); },
      up(p, tap) {
        const it = S.held; S.held = null;
        if (!it) return;
        if (tap) it.putOn(); else it.release();
      },
      update() { const it = getItem(); if (it.state === 'drag' || it.state === 'hang') G.look = it; },
      hint() {
        const it = getItem();
        if (it.state !== 'hang') return;
        it.hint();
        G.handF = { x: it.x - G.face * 10, y: it.y + 60 };
        S.reachUntil = K.time + 1.1;
      },
      hintAfter: 2.2,
      auto() { const it = getItem(); if (it.state === 'hang') it.putOn(); },
      noJump: false,
    };
  };

  // Pull the zipper up (front zip, or the long cord of a back zip).
  S.zip = function (job, after) {
    return {
      enter() {
        S.z = 0; S.autoZip = false; S.zipping = false; S.lastZ = 0;
        G.back = K.GAR[job].zip === 'back';
        G.expr = 'o';
        // lean in close: the zipper, the squeeze and the layers inside are the show here
        S.prevRect = K.cam.rect.slice();
        K.cam.closeUp = 360;
        K.cam.frame(G.x - 175, G.y + G.headTopLocal() - 20, G.x + 175, G.y + 50);
        if (G.back) G.squish.v -= 1.5;
        G.zipGlint = 1;
      },
      down(p) {
        const zp = G.zipPt;
        if (!zp) return false;
        const near = K.dist(p.x, p.y, zp.x, zp.y) < K.cam.touchR(40, 40);
        const onLine = Math.abs(p.x - zp.x) < K.cam.touchR(24) && p.y > zp.top - 10 && p.y < zp.bottom + 60;
        if (near || onLine) { S.zipping = true; S.y0 = p.y; S.z0 = S.z; return true; }
        return false;
      },
      move(p) {
        if (!S.zipping) return;
        const zp = G.zipPt;
        const range = Math.max(30, zp.bottom - zp.top);
        S.z = Math.max(S.z, K.sat(S.z0 + (S.y0 - p.y) / range));
      },
      up(p, tap) { S.zipping = false; if (tap) S.autoZip = true; },
      update(dt) {
        if (S.autoZip) S.z = Math.min(1, S.z + dt * 1.2);
        if (S.z > G.zip[job]) {
          G.zip[job] = Math.min(S.z, 0.999);
          G.expr = 'strain';
          if (S.z - S.lastZ > 0.045) { S.lastZ = S.z; K.sfx.zip(); G.squish.v -= 0.25; }
        }
        if (S.z >= 1 && G.zip[job] < 1) {
          G.zip[job] = 1;
          K.sfx.zipDone(); K.sfx.squeeze(1); K.after(0.12, K.sfx.plop);
          G.squish.v -= 3; G.expr = 'joy'; K.cam.bump(2 + G.heavy * 4);
          S.joy(G.layers.length - 2);
          K.after(0.35, () => { if (G.back) { G.back = false; G.squish.v -= 1.5; } });
          K.after(0.8, after);
        }
      },
      hint() { G.zipGlint = 1; G.squish.v += 0.8; if (S.z < 0.5) S.z = Math.min(0.5, S.z + 0.06); },
      exit() { K.cam.closeUp = 0; if (S.prevRect) K.cam.frame.apply(K.cam, S.prevRect); },
      hintAfter: 2,
      auto() { S.autoZip = true; },
      noJump: true,
    };
  };

  // ---------- plaza: the gate that will not open ----------
  S.def('intro', {
    enter() {
      K.restartWorld();
      S.skyT = 0; K.world.sky = 0;
      G.x = 70; G.face = -1; G.expr = 'happy';
      S.frame(-330, -290, 180, 220, true);
      S.phase = 0; S.jumps = 0;
      K.after(0.9, () => {
        S.frame(-720, -420, 100, 250, false, 660);
        G.walkTo(K.plaza.PX, () => {
          S.phase = 1; G.expr = 'o';
          K.after(0.9, () => { G.expr = 'determined'; G.jump(); });
          K.after(2.2, () => { S.phase = 2; S.idle = 0; });
        });
      });
    },
    jumped() { if (S.phase >= 1) S.jumps++; },
    update() {
      if (S.phase === 2 && (S.jumps >= 3 || S.idle > 4.5 || S.t > 20) && G.onGround) {
        S.phase = 3; G.expr = 'sad'; K.sfx.whine();
        K.after(1.3, () => { G.expr = 'determined'; K.plaza.pup.bark(); S.go('toFire'); });
      }
    },
    hint() { if (S.phase === 2 && G.onGround) G.squish.v += 2.2; },
    hintAfter: 1.8, hintEvery: 1.6,
  });

  S.def('toFire', {
    enter() { S.skyT = 1; S.trackGirl(640, 380, 170); G.walkTo(K.fire.standX, () => S.go('fireDress'), 1.6); },
  });

  // ---------- fire ----------
  S.def('fireDress', S.dress('fire', () => K.fire.coat, [600, -350, 1210, 110], 'fireZip'));
  S.def('fireZip', S.zip('fire', () => S.go('fireHose')));
  S.def('fireHose', {
    enter() {
      S.frame(690, -350, 1250, 110);
      G.walkTo(832, () => {
        G.face = 1;
        K.fire.hoseOnHydrant = false;
        const Sp = K.Spray;
        Sp.speed = 520; Sp.lob = false; Sp.hot = false;
        Sp.start(() => ({ x: K.fire.hydrantX - 22, y: -33 }));
        Sp.aimAt({ x: K.fire.fireX, y: -60 });
        K.sfx.clink();
        S.ready = true;
      });
      K.fire.onOut = () => {
        K.after(0.6, () => {
          K.Spray.detach();
          G.tools.hose = true; G.expr = 'joy'; S.joy(1);
          K.sfx.rustle(); K.sfx.buckle(); G.squish.v -= 2;
          K.after(1.0, () => S.go('toMech'));
        });
      };
    },
    down(p) { if (!S.ready || K.fire.out) return false; K.Spray.on = true; K.Spray.target = null; return true; },
    up() { K.Spray.on = false; },
    update() { if (S.autoSpray && !K.fire.out) { K.Spray.target = { x: K.fire.fireX, y: -50 }; K.Spray.on = true; } },
    hint() {
      if (!S.ready || K.fire.out || K.input.down || S.demos++ >= 2) return;
      K.Spray.target = { x: K.fire.fireX, y: -50 }; K.Spray.on = true;
      K.after(0.35, () => { if (!K.input.down && !S.autoSpray) { K.Spray.on = false; K.Spray.target = null; } });
    },
    hintAfter: 2.2,
    auto() { S.autoSpray = true; },
    exit() { S.autoSpray = false; },
    noJump: true,
  });

  S.def('toMech', {
    enter() { S.trackGirl(640, 380, 170); G.walkTo(K.mech.standX, () => S.go('mechDress'), 1.6); },
    update() { if (G.x > K.fire.fireX - 90) K.fire.knockDown(); },
  });

  // ---------- mechanic ----------
  S.def('mechDress', S.dress('mech', () => K.mech.suit, [1570, -370, 2110, 110], 'mechZip'));
  S.def('mechZip', S.zip('mech', () => { G.tools.belt = true; K.sfx.buckle(); G.squish.v -= 2; K.after(0.4, () => S.go('mechCrank')); }));
  S.def('mechCrank', {
    enter() {
      const M = K.mech;
      S.frame(1820, -370, 2400, 120);
      G.walkTo(K.mech.crankX, () => { G.face = -1; G.usingWrench = true; S.holdHand = true; K.sfx.clink(); S.ready = true; });
      M.onDown = () => {
        G.usingWrench = false; S.holdHand = false; G.handF = null; G.expr = 'joy'; S.joy(2);
        K.after(0.9, () => S.go('crossBridge'));
      };
    },
    update() { if (G.usingWrench) G.handF = K.mech.handle(); if (S.autoCrank && K.mech.auto <= 0 && !K.mech.done()) K.mech.auto = 0.9; },
    down(p) { if (!S.ready || K.mech.done()) return false; if (K.mech.hitHandle(p)) { K.mech.dragging = true; return true; } return false; },
    move(p) { K.mech.setAlpha(Math.atan2(p.y - K.mech.winchY, p.x - K.mech.winchX)); },
    up(p, tap) { K.mech.dragging = false; if (tap && K.mech.auto <= 0) K.mech.auto = 0.9; },
    hint() {
      if (!S.ready) return;
      K.mech.glint = 1; G.expr = 'determined';
      if (!S.demoDone && K.mech.auto <= 0) { S.demoDone = true; K.mech.auto = 0.9; }
    },
    hintAfter: 2.2,
    auto() { S.autoCrank = true; },
    exit() { S.autoCrank = false; S.demoDone = false; },
    noJump: true,
  });
  S.def('crossBridge', {
    enter() { S.frame(1960, -330, 2470, 230); G.walkTo(2440, () => S.go('toCook'), 0.9); },
  });
})();
