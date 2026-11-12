// The girl: clothes pile up, mass accumulates, and every movement shows it.
(function () {
  'use strict';
  K.TOOLS = { hose: 8, belt: 6, pan: 3, pot: 6, tank: 12, weights: 10 };
  const GRAV = 1300;

  const G = (K.girl = {
    x: 40, y: 0, vy: 0, face: -1, mode: 'stand',
    layers: ['base'], zip: {}, tools: {}, wet: 0,
    floorRef: null, onGround: true, walkPh: 0, stepSign: 1, target: null, onArrive: null,
    armsUp: 0, handF: null, handB: null, lean: 0, look: null, expr: 'happy',
    blinkT: 2, blink: 0, squish: K.spring(0), bob: 0, idleT: 0, back: false,
    hidden: false, under: false, jumpLock: false, speedMul: 1, clipBelow: null, wobble: 0,
  });

  G.reset = function () {
    Object.assign(G, {
      x: 40, y: 0, vy: 0, face: -1, mode: 'stand', layers: ['base'], zip: {}, tools: {}, wet: 0,
      floorRef: null, onGround: true, walkPh: 0, target: null, onArrive: null, armsUp: 0,
      handF: null, handB: null, lean: 0, look: null, expr: 'happy', back: false, hidden: false,
      under: false, jumpLock: false, speedMul: 1, clipBelow: null,
      maskUp: false, inWell: false, usingWrench: false, vxAir: 0,
    });
    G.squish = K.spring(0);
    G.recalc();
  };

  // ---- mass & bulk ----
  G.recalc = function () {
    let m = 0;
    const cum = [];
    let t = 0, a = 0, l = 0;
    for (const id of G.layers) {
      const g = K.GAR[id];
      m += g.mass;
      const st = g.stretch || 1;
      t = t * st + g.thick.t; a = a * st + g.thick.a; l = l * st + g.thick.l;
      cum.push({ id, t, a, l });
    }
    for (const k in G.tools) if (G.tools[k]) m += K.TOOLS[k] || 0;
    m += G.wet * 26;
    G.mass = m;
    G.cum = cum;
    G.T = t; G.Ta = a; G.Tl = l;
    G.heavy = K.sat((m - 18) / 120);
  };
  G.wear = function (id) {
    if (G.layers.indexOf(id) < 0) G.layers.push(id);
    G.zip[id] = 0;
    G.recalc();
    G.squish.v -= 3.2;
    K.sfx.rustle(1.2);
    K.sfx.squeeze(0.8 + G.heavy);
    K.cam.bump(1.5 + G.heavy * 3);
  };
  G.outer = () => G.layers[G.layers.length - 1];

  // ---- geometry helpers (shared with the renderer) ----
  G.headTopLocal = function () {
    // top of the hat stack, relative to the feet (negative = up)
    const hats = G.hats();
    let top = -118 - G.T * 0.35;
    for (const h of hats) top -= h === 'helmet' ? 17 : h === 'cap' ? 10 : h === 'toque' ? 34 : 0;
    return top;
  };
  G.hats = function () {
    const out = [];
    for (const id of G.layers) {
      const h = K.GAR[id].hat;
      if (h && h !== 'mask' && G.zip[id] >= 1) out.push(h);
    }
    return out;
  };
  G.halfWidth = function () { return 17 + G.T + 12 + G.Ta * 0.9 + G.T * 0.35; };
  G.bounds = function () {
    const hw = G.halfWidth();
    return [G.x - hw, G.y + G.headTopLocal() - 6, G.x + hw, G.y + 2];
  };
  G.center = function () { const b = G.bounds(); return { x: (b[0] + b[2]) / 2, y: (b[1] + b[3]) / 2 }; };
  G.hit = function (p) {
    const b = G.bounds();
    const pad = K.cam.touchR(0, 18);
    return p.x > b[0] - pad && p.x < b[2] + pad && p.y > b[1] - pad && p.y < b[3] + pad;
  };
  // torso numbers used for zippers and belts (world coords)
  G.torso = function () {
    const T = G.T;
    const hipY = -34 - G.Tl * 0.3;
    const top = hipY - 34 - T * 0.55;
    const bot = hipY + 6 + T * 0.15;
    return { x: G.x, top: G.y + top, bot: G.y + bot, w: 32 + 2 * T };
  };

  // ---- locomotion ----
  G.walkTo = function (x, cb, speedMul) {
    G.target = x; G.onArrive = cb || null; G.speedMul = speedMul || 1;
    G.mode = 'walk';
    G.face = x >= G.x ? 1 : -1;
  };
  G.speed = function () {
    let v = 110 * (1 - 0.62 * G.heavy);
    if (G.under) v *= 0.7;
    return v * G.speedMul;
  };
  G.jump = function (scale) {
    if (!G.onGround || G.jumpLock || G.mode === 'climb' || G.mode === 'script') return false;
    const h = (46 - 34 * G.heavy) * (scale || 1);
    const g = G.under ? GRAV * 0.22 : GRAV;
    G.vy = -Math.sqrt(2 * g * h);
    G.onGround = false;
    G.prevMode = G.mode === 'walk' ? 'walk' : 'stand';
    G.mode = 'air';
    G.squish.v += 2.5;
    K.sfx.jump(G.mass);
    if (G.under) K.P.bubbles(G.x, G.y - 60, 6);
    return true;
  };

  function step(foot) {
    const fx = G.x + foot * (7 + G.Tl * 0.55);
    const fl = K.world.floorAt(fx, undefined, G.y);
    const surf = fl ? fl.surf : 'stone';
    const tools = (G.tools.belt ? 2 : 0) + (G.tools.pan ? 1 : 0) + (G.tools.pot ? 1 : 0) + (G.tools.weights ? 1 : 0);
    K.sfx.step(G.mass, surf, { wet: G.wet, fins: G.zip.diver >= 1, tools: Math.min(tools, 3) });
    K.world.footprint(fx, G.mass, surf, G.wet);
    const pw = 0.25 + G.heavy * 1.3;
    if (surf !== 'mud' || G.under) K.P.dust(fx, G.y, 1 + Math.floor(G.heavy * 4), pw);
    if (G.under) K.P.spawn('dust', fx, G.y - 2, K.rand(-30, 30), -K.rand(5, 25), { life: 1.6, r: 6 + G.heavy * 6, g: -5, color: 'rgba(120,110,80,' });
    if (G.wet > 0.05 && !G.under) K.P.splash(fx, G.y - 2, 2 + Math.floor(G.wet * 3), 0.35);
    K.world.impact(fx, G.y, G.mass, 0.35);
    if (G.heavy > 0.25) K.cam.bump((G.heavy - 0.2) * 5);
    G.squish.v -= 0.4 + G.heavy * 0.8;
    if (K.onGirlStep) K.onGirlStep(fx, surf);
  }

  G.update = function (dt) {
    G.recalc();
    const sp = G.squish; sp.t = 0; K.stepSpring(sp, 160, 11, dt);
    G.armsUp = Math.max(0, G.armsUp - dt * 1.4);
    G.blinkT -= dt;
    if (G.blinkT < 0) { G.blink = 0.14; G.blinkT = K.rand(2, 4.5); }
    G.blink = Math.max(0, G.blink - dt);
    G.wobble += dt;
    // her eyes follow whatever is being touched
    if (G.look && G.look.state !== 'drag' && G.look.state !== 'hang') G.look = null;
    G.lookPt = G.look ? { x: G.look.x, y: G.look.y + 50 } : (K.input.down ? K.input.world() : null);

    if (G.mode === 'walk') {
      const dx = G.target - G.x;
      const v = G.speed();
      if (Math.abs(dx) < 2) {
        G.x = G.target; G.mode = 'stand'; G.walkPh = 0;
        const cb = G.onArrive; G.onArrive = null;
        if (cb) cb();
      } else {
        G.face = dx > 0 ? 1 : -1;
        const mv = Math.min(Math.abs(dx), v * dt) * G.face;
        G.x += mv;
        const stride = 26 * (1 - 0.3 * G.heavy);
        const prev = Math.sin(G.walkPh);
        G.walkPh += (Math.abs(mv) / stride) * Math.PI;
        const now = Math.sin(G.walkPh);
        if ((prev <= 0 && now > 0) || (prev >= 0 && now < 0)) step(now > 0 ? -1 : 1);
      }
    } else if (G.mode === 'stand') {
      G.walkPh = K.follow(G.walkPh, Math.round(G.walkPh / Math.PI) * Math.PI, 8, dt);
    }

    if (G.mode === 'air') {
      const g = G.under ? GRAV * 0.22 : GRAV;
      G.vy += g * dt;
      if (G.under) G.vy *= Math.pow(0.4, dt);
      G.y += G.vy * dt;
      G.x += (G.vxAir || 0) * dt;
      const fl = K.world.floorAt(G.x, undefined, G.y - Math.max(0, G.vy) * dt - 4, 0);
      if (fl && G.vy > 0 && G.y >= fl.y) {
        G.y = fl.y; G.floorRef = fl.ref;
        const s = Math.min(G.vy / 500, 1.6);
        G.vy = 0; G.onGround = true; G.vxAir = 0;
        G.mode = G.prevMode === 'walk' && G.target !== null && Math.abs(G.target - G.x) > 2 ? 'walk' : 'stand';
        K.sfx.land(G.mass, fl.surf);
        K.P.dust(G.x, G.y, 3 + Math.floor(G.heavy * 8), 0.5 + G.heavy * 1.4);
        K.world.impact(G.x, G.y, G.mass, s * 1.2);
        K.cam.bump(1 + G.heavy * 9 * s);
        G.squish.v -= 2 + G.heavy * 3;
        if (K.onGirlLand) K.onGirlLand(fl, s);
      }
    } else if (G.mode === 'walk' || G.mode === 'stand') {
      const fl = K.world.floorAt(G.x, undefined, G.y);
      if (!fl || fl.y > G.y + 10) {
        // nothing under her feet: she drops
        G.prevMode = 'stand'; G.target = null; G.mode = 'air'; G.onGround = false; G.vy = 0; G.vxAir = 0;
      } else {
        if (fl.y < G.y - 12 && G.onGround) { G.squish.v -= 2.5; K.sfx.step(G.mass * 1.1, fl.surf); K.cam.bump(2 + G.heavy * 4); }
        G.y = K.follow(G.y, fl.y, 30, dt); G.floorRef = fl.ref; G.onGround = true;
      }
    }
    // soaked clothes drip
    if (G.wet > 0.02 && !G.under && Math.random() < dt * 30 * G.wet) {
      const b = G.bounds();
      K.P.spawn('drop', K.rand(b[0] + 10, b[2] - 10), K.rand(b[1] + 60, b[3] - 20), K.rand(-10, 10), 0, { life: 1.2, r: K.rand(1.5, 2.8), solid: false });
      if (Math.random() < 0.1) K.sfx.drip();
    }
  };
})();
