// Route B (low road): D3 falls off the cliff with its top end on a rail cart
// and becomes a slide. Rolling the cart drags D3 off the cliff onto the deck;
// a counterweight lift raises cart + domino to the town; there D3 is tipped up
// into the cart's wall slot, so this house is built on wheels.
import * as THREE from 'three';
import { L, DOM } from '../layout.js';
import { House, RoofPortal, CARRIERS } from '../house.js';
import { MATS } from '../world.js';
import { Rope } from '../rope.js';
import { V3, AXIS_Z, clamp, damp } from '../util.js';
import { sound } from '../audio.js';
import { surfaceY } from './common.js';

export function setupRouteB(game) {
  const { S, girl, scene } = game;
  const d3 = game.D.D3;
  const api = (game.routeB = {});
  const cart = (api.cart = new House(game, 'cart', scene, L.cartX0, L.valleyY, L.pathZ));
  // valley rails + sleepers
  const railY = L.valleyY;
  for (const dz of [-0.42, 0.42]) { const r = new THREE.Mesh(new THREE.BoxGeometry(L.railX1 - L.railX0, 0.08, 0.07), MATS.iron); r.position.set((L.railX0 + L.railX1) / 2, railY + 0.13, L.pathZ + dz); r.receiveShadow = true; scene.add(r); }
  for (let x = L.railX0 + 0.2; x < L.railX1; x += 0.62) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.09, 1.25), MATS.darkWood); s.position.set(x, railY + 0.05, L.pathZ); s.receiveShadow = true; scene.add(s); }
  const stop = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.5, 1.3), MATS.darkWood); stop.position.set(L.railX0 - 0.1, railY + 0.25, L.pathZ); scene.add(stop);

  // --- lift: a davit on the town's edge lowers a platform into the valley -------
  const lift = (api.lift = { y: 0, top: L.cd.y1 - L.valleyY, x0: 9.75, x1: 13.95, locked: false });
  const TG = game.town.group, tlx = (x) => x - L.seamX;
  const plat = new THREE.Group(); scene.add(plat);
  const deck = new THREE.Mesh(new THREE.BoxGeometry(lift.x1 - lift.x0, 0.14, 2.2), MATS.darkWood); deck.position.set((lift.x0 + lift.x1) / 2, 0.06, L.pathZ); deck.receiveShadow = true; deck.castShadow = true; plat.add(deck);
  for (const dz of [-0.42, 0.42]) { const r = new THREE.Mesh(new THREE.BoxGeometry(lift.x1 - lift.x0, 0.08, 0.07), MATS.iron); r.position.set((lift.x0 + lift.x1) / 2, 0.17, L.pathZ + dz); plat.add(r); }
  const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, lift.x1 - lift.x0, 6), MATS.iron); rail.rotation.z = Math.PI / 2; rail.position.set((lift.x0 + lift.x1) / 2, 0.65, L.pathZ - 1.08); plat.add(rail);
  plat.position.y = railY;
  const topY = L.cd.y1 + 3.3, ropeZ = L.pathZ - 1.1;
  // davit: a post on the town with an arm reaching out over the valley
  const dpost = new THREE.Mesh(new THREE.BoxGeometry(0.26, topY - L.cd.y1 + 0.3, 0.26), MATS.wood); dpost.position.set(tlx(16.2), (topY + L.cd.y1) / 2 + 0.15, ropeZ); dpost.castShadow = true; TG.add(dpost);
  const darm = new THREE.Mesh(new THREE.BoxGeometry(16.4 - 9.3, 0.22, 0.22), MATS.wood); darm.position.set(tlx((16.4 + 9.3) / 2), topY + 0.2, ropeZ); darm.castShadow = true; TG.add(darm);
  const brace = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 5.6, 5), MATS.iron); brace.position.set(tlx(13.4), topY + 1.2, ropeZ); brace.rotation.z = 1.2; TG.add(brace);
  const wheelLocal = V3(tlx(14.45), topY + 0.3, L.pathZ + 1.35);
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.07, 8, 20), MATS.iron); wheel.position.copy(wheelLocal); TG.add(wheel);
  wheel.add(new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.06, 0.06), MATS.iron));
  const wheelPos = V3(14.45, topY + 0.3, L.pathZ + 1.35);
  const liftRopes = [new Rope(scene, { width: 0.04, color: 0x6b5a42 }), new Rope(scene, { width: 0.04, color: 0x6b5a42 })];
  const pullRope = new Rope(scene, { width: 0.07, color: 0xc9ad7c, segments: 10 });
  const knots = []; for (let i = 0; i < 6; i++) { const k = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 6), MATS.darkWood); scene.add(k); knots.push(k); }
  let ropeShift = 0;
  const plate = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.08, 1.3), MATS.wood); plate.castShadow = true; scene.add(plate);
  const plateHinge = V3(lift.x1, 0.13, L.pathZ); let plateA = 1.45;
  // --- cart kinematics ----------------------------------------------------
  const C = (api.C = { x: L.cartX0, v: 0, held: false, target: 0, min: L.railX0 + 1.85, max: (lift.x0 + lift.x1) / 2, onLift: false, inTown: false });
  let d3Mode = 'standing'; // standing | ramp | drop | lying | tipping | wall
  const E0 = V3(0, 0, 0); // ramp contact on the deck, cart-local
  let dropT = 0; const dropFrom = { p: new THREE.Vector3(), q: new THREE.Quaternion() };
  // lying on the deck: bottom end at the W1 slot's right edge (so it can be tipped up into it)
  const pivotX = CARRIERS.cart.W1 + DOM.T / 2;
  const lyingLocal = () => ({ p: V3(pivotX + DOM.H / 2, cart.deckTop + DOM.T / 2, 0), q: new THREE.Quaternion().setFromAxisAngle(AXIS_Z, -Math.PI / 2) });
  const siteX = L.houseX - CARRIERS.cart.center;

  // D3 landing angle: its top edge meets the cart deck below the cliff
  const pivot = V3(L.forkX1, 0, L.pathZ), deckY = L.valleyY + L.cartDeck;
  api.d3LandAngle = Math.acos((deckY - pivot.y) / DOM.H);
  api.d3Land = (v) => {
    const hit = V3(pivot.x + DOM.H * Math.sin(api.d3LandAngle), deckY, L.pathZ);
    sound.impact(1.0, game.pan(hit), 'domino'); sound.impact(0.5, game.pan(hit), 'wood');
    game.rig.shake(0.4); game.dust.puff(hit, 10, 1.2, 1); cartBounce = 0.12;
    E0.copy(cart.group.worldToLocal(hit.clone()));
    if (S.route === 'B') { S.d3.state = 'ramp'; game.fact('D3.fallen', { as: 'slide' }); }
    d3.fact('fell', { dir: 1, as: 'slide', onto: 'cart' });
  };
  api.d3Rest = () => { d3Mode = 'ramp'; if (S.route === 'B') { api.makeHouse(); game.go('b_slide'); } };
  let cartBounce = 0, clackAcc = 0;

  function placeRamp() {
    // lower end rides the cart; the upper end slides down the rock lip's face
    cart.group.updateWorldMatrix(true, false);
    const E = cart.group.localToWorld(E0.clone());
    const dx = E.x - pivot.x;
    const U = V3(pivot.x, E.y + Math.sqrt(Math.max(0, DOM.H * DOM.H - dx * dx)), L.pathZ);
    if (U.y <= L.lipY + 0.02) { beginDrop(); return; }   // past the lip: it flops onto the deck
    if (U.y > pivot.y) U.y = pivot.y;
    const dir = E.clone().sub(U).normalize();
    const ang = Math.atan2(dir.x, dir.y); // from vertical
    const q = new THREE.Quaternion().setFromAxisAngle(AXIS_Z, -ang);
    const n = V3(-dir.y, dir.x, 0); if (n.y < 0) n.negate();
    const c = U.clone().addScaledVector(dir, DOM.H / 2).addScaledVector(n, DOM.T / 2);
    d3.setPose(c, q);
    sound.loop('slide').set(Math.min(1, Math.abs(C.v) * 1.2), game.pan(U));
  }
  function beginDrop() {
    d3Mode = 'drop'; dropT = 0; cart.group.attach(d3.root); dropFrom.p.copy(d3.root.position); dropFrom.q.copy(d3.root.quaternion);
    sound.loop('slide').set(0);
  }

  // --- targets -------------------------------------------------------------
  let grabX = 0, grabCart = 0, lastFx = 0;
  game.target({
    id: 'cart', radius: 80,
    enabled: () => S.route === 'B' && ['b_cart', 'b_roll'].includes(game.phase),
    anchor: () => cart.group.localToWorld(V3(0.4, cart.deckTop + 0.4, 0)),
    pick: (sx, sy) => {
      const a = cart.group.localToWorld(V3(-1.7, cart.deckTop, 0)), b = cart.group.localToWorld(V3(1.7, cart.deckTop, 0));
      return Math.min(game.input.distToSegment(sx, sy, a, b) - 18, game.distToDomino(d3, sx, sy));
    },
    down: (g) => { const w = game.input.onPlaneZ(g.x, g.y, L.pathZ); grabX = w.x; grabCart = C.x; C.held = true; C.target = C.x; lastFx = w.x; game.touch(); },
    move: (g) => { const w = game.input.onPlaneZ(g.x, g.y, L.pathZ); C.target = grabCart + (w.x - grabX); game.touch(); },
    up: (g) => { C.held = false; if (g.cancelled) return; if (g.tap || (Math.abs(g.dy) > 40 && Math.abs(g.dx) < 30)) C.v += 0.9; },
  });
  // lift rope: pull down, the ratchet holds
  let ropeGrabY = 0, ropeLast = 0;
  const ropeTop = () => wheelPos.clone().add(V3(0, 0, 0.05));
  const ropeBottom = () => V3(wheelPos.x - 0.05, railY + 0.5, wheelPos.z + 0.02);
  game.target({
    id: 'liftRope', radius: 70,
    enabled: () => S.route === 'B' && game.phase === 'b_lift' && lift.y < lift.top,
    anchor: () => V3(wheelPos.x, clamp(plat.position.y + 1.2, railY + 1, topY - 1.5), wheelPos.z),
    pick: (sx, sy) => game.input.distToSegment(sx, sy, ropeTop(), ropeBottom()),
    down: (g) => { ropeLast = game.input.onPlaneZ(g.x, g.y, wheelPos.z).y; girl.setMode('pull'); game.touch(); },
    move: (g) => {
      const y = game.input.onPlaneZ(g.x, g.y, wheelPos.z).y; let d = ropeLast - y; ropeLast = y;
      if (d < 0) d = -d * 0.5;                       // hand-over-hand either way; the ratchet keeps it up
      if (d > 0) { liftBy(d * 1.5); game.touch(); }
    },
    up: () => { if (girl.mode === 'pull') girl.setMode('ride'); },
  });
  // direct manipulation too: dragging the platform (or cart) upward winds the same wheel
  let platLast = 0, platPpm = 60;
  game.target({
    id: 'liftPlat', radius: 60,
    enabled: () => S.route === 'B' && game.phase === 'b_lift' && lift.y < lift.top,
    anchor: () => cart.group.localToWorld(V3(0, cart.deckTop + 0.3, 0)),
    pick: (sx, sy) => { const a = cart.group.localToWorld(V3(-2, cart.deckTop, 0)), b = cart.group.localToWorld(V3(2, cart.deckTop, 0)); return Math.min(game.input.distToSegment(sx, sy, a, b) + 10, game.distToDomino(d3, sx, sy) + 10); },
    down: (g) => { platLast = g.y; platPpm = game.input.pxPerMetre(plat.position.clone().setX(12)); game.touch(); },
    move: (g) => { const d = (platLast - g.y) / platPpm; platLast = g.y; if (d > 0) { liftBy(d * 1.2); game.touch(); } },
    up: () => {},
  });
  let tick = 0;
  function liftBy(d) {
    const before = lift.y; lift.y = Math.min(lift.top, lift.y + d); ropeShift += d / 1.5;
    wheel.rotation.z -= d * 1.2;
    tick += lift.y - before;
    while (tick > 0.3) { tick -= 0.3; sound.tick(game.pan(wheelPos), 1900, 0.35, 0.04); }
    if (lift.y >= lift.top && !lift.locked) {
      lift.locked = true; sound.latch(game.pan(wheelPos)); sound.impact(0.5, game.pan(wheelPos), 'metal');
      game.fact('lift.top'); plateDrop = true;
    }
  }
  let plateDrop = false, plateV = 0;
  // D3 tip-up target (on the cart in town)
  let tipA = 0, tipV = 0, tipHeld = false, tipTarget = 0;
  game.target({
    id: 'D3up', radius: 80,
    enabled: () => S.route === 'B' && game.phase === 'b_tipup' && (d3Mode === 'lying' || d3Mode === 'tipping'),
    anchor: () => d3.worldPoint(V3(0, DOM.H * 0.4, 0)),
    pick: (sx, sy) => game.distToDomino(d3, sx, sy),
    down: () => { tipHeld = true; d3Mode = 'tipping'; game.touch(); girl.lookAt(() => d3.worldRing(), 2); },
    move: (g) => {
      const pv = cart.group.localToWorld(V3(pivotX, cart.deckTop, 0));
      const w = game.input.onPlaneZ(g.x, g.y, L.pathZ);
      tipTarget = clamp(Math.atan2(w.y - pv.y, w.x - pv.x), 0, Math.PI / 2 + 0.05); game.touch();
    },
    up: (g) => { tipHeld = false; if (g.cancelled) return; if (g.tap) tipV += 2.4; else if (tipA > 0.6 || (g.vy < -0.3 && tipA > 0.3)) tipV = Math.max(tipV, 1.6); },
  });

  // --- phases --------------------------------------------------------------
  game.phases.b_slide = {
    enter() {
      game.shot({ center: V3(5.0, -0.6, 2.4), w: 11, h: 7.5, az: -0.2, el: 0.26, wP: 8, hP: 13, pOffset: V3(0.6, 0.3, 0) });
      girl.walk([V3(2.9, 0, 1.6), V3(3.45, 0.55, L.pathZ)], () => {
        girl.setMode('sit'); girl.faceWorldX(1);
        game.after(0.6, () => {
          girl.setMode('slide');
          girl.heightFn = (x) => (x > 3.6 && x < 6.3 ? (surfaceY(d3, x) ?? null) : null);
          sound.loop('slide').set(0.5, game.pan(girl.position));
          girl.walk([V3(6.0, -2, L.pathZ)], () => {
            sound.loop('slide').set(0); girl.heightFn = null; sound.impact(0.25, game.pan(girl.position), 'wood');
            girl.attachTo(cart.group); girl.position.set(1.88, cart.deckTop, 0.1); girl.setMode('ride'); girl.emote('cheer', 1.2);
            game.fact('girl.slid'); game.go('b_cart');
          }, 3.2);
        });
      }, 1.4);
    },
  };
  let hintT = 0;
  game.phases.b_cart = {
    enter() { hintT = 0; },
    update(dt) {
      game.shot({ center: V3(C.x + 1.2, -0.9, 2.4), w: 12, h: 7.5, az: -0.2, el: 0.26, wP: 8.5, hP: 13, pOffset: V3(0.5, 0.5, 0) }, 2);
      if (C.x >= C.max - 0.02 && !C.onLift) {
        C.onLift = true; C.v = 0; sound.impact(0.6, game.pan(cart.group.position), 'wood'); sound.latch(game.pan(cart.group.position));
        game.fact('cart.onLift'); game.go('b_lift');
      }
      hint(dt, () => { girl.lookAt(V3(12, -1, 3), 2); girl.emote('point', 1.3); C.v += 0.25; sound.tick(game.pan(cart.group.position), 900, 0.2, 0.08); });
    },
  };
  game.phases.b_lift = {
    enter() { hintT = 0; girl.lookAt(() => wheelPos, 2); },
    update(dt) {
      game.shot({ center: V3(11.4, plat.position.y + 2.6, 2.6), w: 11, h: 10.5, az: -0.2, el: 0.2, wP: 8.5, hP: 14.5 }, 2);
      if (plateDrop && plateA <= 0) game.go('b_roll');
      hint(dt, () => { girl.setMode('pull'); girl.lookAt(() => wheelPos, 2); game.after(1.4, () => girl.setMode('ride')); });
    },
  };
  game.phases.b_roll = {
    enter() { hintT = 0; C.max = siteX + 0.9; girl.lookAt(V3(20, 6, 3), 2); },
    update(dt) {
      game.shot({ center: V3(Math.max(C.x, 13) + 2.2, 6.8, 2.2), w: 13, h: 8, az: -0.22, el: 0.28, wP: 9, hP: 14 }, 2);
      if (!C.inTown && C.x > lift.x1 + 0.4) { C.inTown = true; game.town.group.attach(cart.group); }
      if (Math.abs(C.x - siteX) < 0.08 && Math.abs(C.v) < 0.06 && !C.held) {
        C.v = 0; C.x = siteX; game.fact('cart.atSite');
        girl.attachTo(game.town.group);
        girl.walk([girl.position.clone().setY(L.cd.y1).setZ(1.4), V3(L.houseX + 3.0 - L.seamX, L.cd.y1, 1.2)], () => { girl.faceCamera(); girl.lookAt(() => d3.worldRing(), 3); }, 1.3);
        game.go('b_tipup');
      }
      hint(dt, () => { girl.emote('point', 1.3); girl.lookAt(V3(19.5, 6, 3), 2); });
    },
  };
  game.phases.b_tipup = {
    enter() { hintT = 0; game.shot({ center: V3(L.houseX, 7.4, 2.4), w: 11, h: 8, az: -0.2, el: 0.26, wP: 8.5, hP: 13 }); },
    update(dt) {
      hint(dt, () => { girl.lookAt(() => d3.worldRing(), 2); girl.emote('beckon', 1.4); if (d3Mode === 'lying') { tipV += 0.6; } });
    },
  };
  function hint(dt, fn) { hintT += dt; if (game.input.active) hintT = 0; if (hintT > 5.5) { hintT = 0; fn(); } }

  // --- per-frame physics -----------------------------------------------------
  game.onUpdate((dt) => {
    // cart: follows the finger through a soft coupling, rolls with friction
    if (C.held) { const a = 26 * (C.target - C.x) - 7 * C.v; C.v += a * dt; }
    else { C.v = damp(C.v, 0, C.inTown ? 0.9 : 0.6, dt); if (game.phase === 'b_roll' && Math.abs(siteX - C.x) < 2) C.v += (siteX - C.x) * 2.2 * dt - C.v * 1.5 * dt; }
    const vmax = game.phase === 'b_roll' ? 1.4 : 2.4; C.v = clamp(C.v, -vmax, vmax);
    const locked = game.phase === 'b_lift' || game.phase === 'b_tipup' || game.phase === 'yard';
    if (!locked && S.route === 'B' && (game.phase === 'b_cart' || game.phase === 'b_roll')) {
      if (d3Mode === 'ramp' && C.v > 0) C.v *= 1 - Math.min(0.6, dt * 3);   // dragging the slide scrapes
      C.x += C.v * dt;
      const min = C.inTown ? lift.x1 + 1.5 : C.min;
      if (C.x < min) { C.x = min; if (Math.abs(C.v) > 0.4) sound.impact(0.3, game.pan(cart.group.position), 'wood'); C.v = Math.abs(C.v) * 0.25; }
      if (C.x > C.max) { C.x = C.max; if (Math.abs(C.v) > 0.3) sound.impact(0.35, game.pan(cart.group.position), 'wood'); C.v = -Math.abs(C.v) * 0.2; }
      clackAcc += Math.abs(C.v) * dt; if (clackAcc > 1.24) { clackAcc = 0; sound.tick(game.pan(cart.group.position), 700, 0.25, 0.05); }
      if (cart.wheels) cart.wheels.forEach((w) => (w.rotation.y += (C.v * dt) / 0.3));
    }
    sound.loop('roll').set(game.phase === 'b_cart' || game.phase === 'b_roll' ? Math.min(1, Math.abs(C.v) * 0.7) : 0, game.pan(cart.group.position));
    // carrier transform (world while in the valley/lift, town-local after)
    cartBounce = damp(cartBounce, 0, 6, dt);
    const by = Math.sin(game.time * 30) * cartBounce * 0.2;
    if (!C.inTown) { cart.group.position.set(C.x, (C.onLift ? plat.position.y : railY) + by, L.pathZ); }
    else if (game.phase === 'b_roll' || game.phase === 'b_tipup') cart.group.position.set(C.x - L.seamX, L.cd.y1, L.pathZ);
    // lift platform & plate
    plat.position.y = railY + lift.y;
    const pA = V3(lift.x0 + 0.3, plat.position.y + 0.65, ropeZ), pB = V3(lift.x1 - 0.3, plat.position.y + 0.65, ropeZ);
    const armA = TG.localToWorld(V3(tlx(lift.x0 + 0.3), topY, ropeZ)), armB = TG.localToWorld(V3(tlx(lift.x1 - 0.3), topY, ropeZ));
    liftRopes[0].set(armA, pA, 0); liftRopes[1].set(armB, pB, 0);
    wheelPos.copy(TG.localToWorld(wheelLocal.clone()));
    pullRope.set(ropeTop(), ropeBottom(), 0);
    knots.forEach((k, i) => { const u = (((i / knots.length + ropeShift * 0.12) % 1) + 1) % 1; k.position.lerpVectors(ropeTop(), ropeBottom(), u); });
    // bridge plate: stands folded up on the platform, drops onto the town at the top
    if (plateDrop && plateA > 0) { plateV += 6 * dt; plateA = Math.max(0, plateA - plateV * dt); if (plateA <= 0) { sound.impact(0.45, game.pan(plat.position), 'metal'); game.dust.puff(V3(lift.x1 + 1.6, L.cd.y1, L.pathZ), 5, 0.6, 0.5); } }
    const ph = V3(plateHinge.x, plat.position.y + plateHinge.y, L.pathZ);
    plate.position.set(ph.x + Math.cos(plateA) * 0.95, ph.y + Math.sin(plateA) * 0.95, L.pathZ); plate.rotation.z = plateA;
    // D3 states
    if (S.route === 'B') {
      if (d3Mode === 'ramp' && game.phase === 'b_cart') placeRamp();
      if (d3Mode === 'drop') {
        dropT += dt; const k = clamp(dropT / 0.4, 0, 1), e = k * k;
        const L0 = lyingLocal(); d3.setPose(dropFrom.p.clone().lerp(L0.p, e), dropFrom.q.clone().slerp(L0.q, e));
        if (k >= 1) {
          d3Mode = 'lying'; cartBounce = 0.15; const w = cart.group.localToWorld(V3(0, cart.deckTop, 0));
          sound.impact(0.9, game.pan(w), 'domino'); game.rig.shake(0.3); game.dust.puff(w, 10, 1.3, 0.9);
          S.d3.state = 'cargo'; d3.fact('slid', { as: 'cargo' }); game.fact('D3.cargo');
          if (girl.obj.parent === cart.group) { girl.emote('surprise', 0.9); }
        }
      }
      if (d3Mode === 'tipping') {
        if (tipHeld) { tipV += (40 * (tipTarget - tipA) - 9 * tipV) * dt; }
        else { const g = tipA > 1.2 ? 4 : -5 * Math.cos(tipA); tipV += g * dt; }
        tipA += tipV * dt;
        if (tipA <= 0) { tipA = 0; if (tipV < -0.8) { const w = d3.worldPoint(V3(0, 0, 0)); sound.impact(0.5, game.pan(w), 'domino'); } tipV = 0; if (!tipHeld) d3Mode = 'lying'; }
        if (tipA >= Math.PI / 2) { tipA = Math.PI / 2; d3Mode = 'wall'; cart.seat('W1', d3); S.d3.state = 'wall'; S.house.walls.push('D3'); game.fact('D3.wall'); girl.emote('clap', 1.2); game.after(0.9, () => game.go('yard')); }
        if (d3Mode === 'tipping') {
          const L0 = lyingLocal(), pv = V3(pivotX, cart.deckTop, 0);
          const p = new THREE.Vector3(), q = new THREE.Quaternion();
          const rq = new THREE.Quaternion().setFromAxisAngle(AXIS_Z, tipA);
          p.copy(L0.p).sub(pv).applyQuaternion(rq).add(pv); q.copy(rq).multiply(L0.q);
          d3.setPose(p, q);
          sound.loop('creak').set(tipHeld ? 0.35 : 0, game.pan(d3.worldPoint(V3())));
        }
      }
    }
  });
  api.house = () => cart;
  api.makeHouse = () => {
    if (game.portal) return cart;
    game.house = cart; S.house.carrier = 'cart';
    game.portal = new RoofPortal(game, game.town.group, L.houseX - L.seamX, L.cd.y1 + cart.wallTop);
    game.onUpdate((dt) => game.portal.update(dt));
    return cart;
  };
}
