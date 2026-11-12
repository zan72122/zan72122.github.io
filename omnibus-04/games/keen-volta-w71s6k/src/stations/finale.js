// Finale: the town is balanced on the stone roller under its seam and propped
// at its far end by a colossal standing domino (the Stay). Moving house #1 to
// the far half and knocking the Stay (either order) tips the whole town - the
// colossal 6|1 domino - until its brass ring touches down on the fallen Stay.
import * as THREE from 'three';
import { L, DOM } from '../layout.js';
import { Domino } from '../domino.js';
import { TipController } from '../physics.js';
import { Rope } from '../rope.js';
import { MATS } from '../world.js';
import { V3, clamp, damp, AXIS_Z } from '../util.js';
import { sound } from '../audio.js';
import { pushTarget } from './common.js';
import { setupEnding } from './ending.js';

export function setupFinale(game) {
  const { S, girl, scene } = game;
  const town = game.town, grp = town.group;
  // --- the Stay ----------------------------------------------------------------
  const st = L.stay;
  const stay = new Domino({ id: 'STAY', T: st.T, H: st.H, W: st.W, pips: [6, 6], band: '#b8862e', seed: 808, big: true, ringScale: 3.2, round: 0.12,
    marks: { scratches: [{ pts: [[0.2, 0.3], [0.7, 0.34]], w: 5 }] } });
  scene.add(stay.root); stay.setRest(V3(st.x, L.shoreY + st.H / 2, 0), new THREE.Quaternion()); game.D.STAY = stay;
  const T = (game.tilt = { th: 0, w: 0, committed: false, landed: false, thLand: 0, sag: 0 });
  const tipS = new TipController(game, stay, {
    allowed: 1, pan: () => game.pan(stay.pos), land: () => Math.PI / 2,
    onStart: () => { game.fact('STAY.push'); sound.loop('creak').set(0.8, game.pan(stay.pos)); girl.lookAt(() => stay.worldPoint(V3(0, 2, 0)), 4); },
    onLand: () => {
      sound.loop('creak').set(0);
      const hit = V3(st.x + st.H * 0.6, L.shoreY, 0);
      game.after(0.12, () => { sound.impact(2.4, game.pan(hit), 'stone'); sound.impact(1.6, game.pan(hit), 'domino'); });
      game.rig.shake(0.7); game.dust.puff(hit, 22, 4, 2); game.dust.puff(V3(st.x + st.H, L.shoreY, 0), 12, 3, 1.5);
      S.stay = 'fallen'; stay.fact('fell', { as: 'landing' }); game.fact('STAY.fallen');
    },
  });
  game.onUpdate((dt) => { if (tipS.mode !== 'down') tipS.update(dt); });
  pushTarget(game, 'STAY', stay, tipS, { locked: () => !['finale'].includes(game.phase), radius: 70 });
  // landing angle: the colossal ring meets the fallen Stay's top face
  {
    const ringC = V3(L.cd.x1 - L.seamX + 2.0, 2.5, 0), ringR = 1.75 + 0.36, top = L.shoreY + st.T;
    let a = 0; while (a < 0.6 && -ringC.x * Math.sin(a) + ringC.y * Math.cos(a) - ringR > top) a += 0.0005;
    T.thLand = a;
  }

  // --- house position along the street (town-local x) ------------------------
  const H = (game.finaleHouse = { x: 0, v: 0, held: false, target: 0, grab: 0, gx: 0 });
  const houseX = () => game.house.group.position.x + L.seamX + game.house.spec.center; // world-ish x of the house centre (pre-tilt)
  // route B: push the cart along the rails
  game.target({
    id: 'houseCart', radius: 80,
    enabled: () => game.phase === 'finale' && S.route === 'B' && !T.committed,
    anchor: () => game.house.group.localToWorld(V3(0.2, game.house.deckTop + 0.4, 0)),
    pick: (sx, sy) => { const h = game.house; const a = h.group.localToWorld(V3(-2, h.deckTop, 0)), b = h.group.localToWorld(V3(2, h.deckTop, 0)); return Math.min(game.input.distToSegment(sx, sy, a, b) - 20, h.walls.W2 ? game.distToDomino(h.walls.W2, sx, sy) : 999, h.walls.W1 ? game.distToDomino(h.walls.W1, sx, sy) : 999); },
    down: (g) => { H.held = true; H.gx = grp.worldToLocal(game.input.onPlaneZ(g.x, g.y, L.pathZ)).x; H.grab = game.house.group.position.x; H.target = H.grab; game.touch(); },
    move: (g) => { H.target = H.grab + (grp.worldToLocal(game.input.onPlaneZ(g.x, g.y, L.pathZ)).x - H.gx); game.touch(); },
    up: (g) => { H.held = false; if (!g.cancelled && g.tap) H.v += 0.8; },
  });
  // route A: the crane hooks the sled's front ring and drags the sled (stick-slip friction)
  let sledHooked = false;
  if (game.crane) {
    game.crane.catchables.push({
      ringWorld: () => game.house.group.localToWorld(game.house.frontRing.position.clone()),
      enabled: () => game.phase === 'finale' && S.route === 'A',
      radius: 0.9,
      onCatch: (cr) => { sledHooked = true; game.fact('sled.hooked'); cr.hookOverride = () => grp.worldToLocal(game.house.group.localToWorld(game.house.frontRing.position.clone().add(V3(0, 0.4, 0)))); },
      update: (dt, cr) => {
        const ring = game.house.group.localToWorld(game.house.frontRing.position.clone());
        const trolley = cr.localToWorld(cr.trackAt(cr.tx));
        const pull = trolley.x - ring.x;                    // rope leans forward -> tension
        if (T.committed) cr.targetTx = cr.worldToLocal(ring).x + 0.6;   // the trolley rolls downhill with its load
        if (!T.committed) {
          const f = pull > 0.7 ? (pull - 0.7) * 1.4 : 0;
          H.v = f > 0.25 ? damp(H.v, f, 3, dt) : damp(H.v, 0, 6, dt);
          sound.loop('slide').set(Math.min(1, H.v * 1.2), game.pan(ring));
        }
      },
    });
  }
  let craneOff = V3();
  game.target({
    id: 'crane2', radius: 85,
    enabled: () => game.phase === 'finale' && S.route === 'A' && !T.committed && !!game.crane,
    anchor: () => game.crane.hookWorld,
    pick: (sx, sy) => Math.min(game.input.distToPoint(sx, sy, game.crane.hookWorld), game.house.walls.W1 ? game.distToDomino(game.house.walls.W1, sx, sy) + 20 : 999, game.house.walls.W2 ? game.distToDomino(game.house.walls.W2, sx, sy) + 20 : 999),
    down: (g) => {
      const cr = game.crane;
      if (!cr.load) { const r = cr.worldToLocal(game.house.group.localToWorld(game.house.frontRing.position.clone().add(V3(0, 0.45, 0)))); cr.aim(r); }
      craneOff = cr.worldToLocal(cr.hookWorld).sub(cr.worldToLocal(game.input.onPlaneZ(g.x, g.y, cr.hookWorld.z))); game.touch();
    },
    move: (g) => { const cr = game.crane; if (!cr.load) return; const w = cr.worldToLocal(game.input.onPlaneZ(g.x, g.y, cr.hookWorld.z)).add(craneOff); w.y = Math.max(w.y, L.cd.y1 + 0.9); cr.aim(w); game.touch(); },
    up: () => {},
  });

  // --- phases ---------------------------------------------------------------
  let hintT = 0, hintN = 0;
  game.phases.finale = {
    enter() {
      hintT = 0; hintN = 0; H.x = game.house.group.position.x;
      if (game.crane) { game.crane.minX = 12.0 - L.seamX; game.crane.targetLen = 3.0; }
      girl.lookAt(() => V3(47, 4, 0), 2.5);
      game.fact('finale');
    },
    update(dt) {
      const hx = houseX();
      const far = clamp((hx - 24) / 20, 0, 1);
      // frame the house and, beyond the seam, the colossal domino propping the far end
      const cx = hx + (54 - hx) * (0.42 + far * 0.1);
      if (!T.committed) game.shot({ center: V3(cx, 1.0 - far * 1.5, 0.5), w: (56 - hx) + 14 + far * 6, h: 22 + far * 4, az: -0.3, el: 0.46 + far * 0.04,
        azP: -0.72, elP: 0.62, wP: 22 + far * 8, hP: 40 + far * 8, pOffset: V3(-4 + far * 8, 2, 0) }, 0.9);
      hintT += dt; if (game.input.active) hintT = 0;
      if (hintT > 6) {
        hintT = 0; hintN++;
        if (hx < 40 && (hintN % 2 === 1 || S.stay === 'fallen')) { girl.lookAt(V3(48, 5, 0), 2); girl.emote('point', 1.3); if (S.route === 'A' && game.crane && !game.crane.load) game.crane.swayV += 0.8; else H.v += 0.25; }
        else if (S.stay === 'standing') { tipS.rock(0.05); sound.loop('creak').set(0.4, game.pan(stay.pos)); game.after(0.8, () => sound.loop('creak').set(0)); girl.lookAt(() => stay.worldPoint(V3(0, 3, 0)), 2); girl.emote('peer', 1.4); }
      }
    },
  };

  // --- per-frame: house motion, balance, tilt ---------------------------------
  const stayUp = () => S.stay === 'standing' && tipS.mode !== 'fall';
  game.onUpdate((dt) => {
    if (game.phase !== 'finale' && game.phase !== 'tilt' && game.phase !== 'ending') return;
    const h = game.house;
    // house dynamics along the street (town-local x)
    if (S.route === 'B' && !T.committed) {
      if (H.held) { H.v += (24 * (H.target - h.group.position.x) - 7 * H.v) * dt; }
      else H.v = damp(H.v, 0, 0.8, dt);
    }
    if (T.committed) {
      // everything loose on the slope goes downhill: the house to its end stop
      const g = 9.8 * Math.sin(T.th) - (S.route === 'A' ? 9.8 * 0.22 * Math.cos(T.th) : 0.1);
      if (g > 0) H.v += g * 0.35 * dt;
    }
    H.v = clamp(H.v, -1.6, 3);
    let nx = h.group.position.x + H.v * dt;
    const maxX = L.cd.x1 - L.seamX - (S.route === 'B' ? 2.95 : 2.3), minX = L.houseX - L.seamX - h.spec.center - 0.01;
    if (nx > maxX) { nx = maxX; if (H.v > 0.5) { sound.impact(0.7, game.pan(h.group.getWorldPosition(V3())), 'wood'); game.rig.shake(0.2); } H.v = -H.v * 0.15; }
    if (nx < minX) { nx = minX; H.v = 0; }
    h.group.position.x = nx;
    if (h.wheels) h.wheels.forEach((w) => (w.rotation.y += (H.v * dt) / 0.3));
    if (S.route === 'B') sound.loop('roll').set(Math.min(1, Math.abs(H.v) * 0.6), game.pan(h.group.getWorldPosition(V3())));
    S.houseX = +houseX().toFixed(2);
    // balance: the far half must outweigh the heavy "6" half
    const lever = (houseX() - 40.5) / 7;
    if (stayUp()) {
      const sag = lever > 0 ? 0.0035 * Math.min(1, lever) : 0;
      T.th = damp(T.th, sag, 3, dt); T.w = 0;
      if (lever > 0 && Math.random() < dt * 1.5) game.dust.puff(V3(st.x, -0.2, 0), 1, 0.8, 0.3);
      sound.loop('creak').set(lever > 0 ? 0.25 : 0, game.pan(stay.pos));
    } else {
      // enormous inertia: it starts imperceptibly, then keeps going
      const torque = lever + T.th * 5;
      T.w += ((torque > 0 || T.th > 0.001 ? torque : 0) * 0.016 - 1.1 * T.w) * dt;
      T.th += T.w * dt;
      if (T.th < 0) { T.th = 0; T.w = Math.max(0, T.w); }
      if (!T.committed && T.th > 0.03) { T.committed = true; game.fact('tilt.committed', { houseX: S.houseX }); game.go('tilt'); }
      if (T.th >= T.thLand && !T.landed) land();
      if (T.landed) T.th = T.thLand;
    }
    S.tilt = +T.th.toFixed(4);
    grp.rotation.z = -T.th;
    const rv = Math.abs(T.w);
    sound.loop('rumble').set(T.landed ? 0 : Math.min(1, rv * 9), 0.2);
    if (!stayUp() && T.th > 0.001) sound.loop('creak').set(T.landed ? 0 : Math.min(0.9, rv * 14), 0.1);
  });
  function land() {
    T.landed = true; T.w = 0; T.th = T.thLand;
    const p = grp.localToWorld(V3(L.cd.x1 - L.seamX + 2.0, 0.4, 0));
    sound.impact(3.6, game.pan(p), 'stone'); sound.impact(2.2, game.pan(p), 'metal'); sound.clink(game.pan(p), 0.5, 0.5);
    game.rig.shake(1.0); game.dust.puff(p, 30, 6, 2.5); game.dust.puff(V3(L.seamX, 0, 6), 12, 5, 1.4);
    game.debris.burst(p.clone().add(V3(0, 1, 2)), 10, L.shoreY + L.stay.T, 1, game.pan(p));
    game.fact('tilt.landed', { angle: +(T.thLand * 180 / Math.PI).toFixed(1) });
    game.after(1.3, () => game.go('ending'));
  }
  setupEnding(game);
  // test hook: jump to the finale with a finished house (for iterating on the climax)
  game.debugFinale = (route = 'B', houseAt = null) => {
    S.route = route; const api = route === 'B' ? game.routeB : game.routeA; api.makeHouse();
    const h = game.house; if (route === 'B') { game.routeB.C.inTown = true; game.routeB.C.onLift = true; }
    if (h.group.parent !== grp) grp.attach(h.group);
    h.group.position.set((houseAt ?? L.houseX) - L.seamX - h.spec.center, L.cd.y1, L.pathZ); h.group.rotation.set(0, 0, 0);
    game.ropeway.load = null; game.ropeway.stage = 'seated';
    h.seat('W1', route === 'B' ? game.D.D3 : game.D.D2); h.seat('W2', game.D.D1);
    const roof = game.portal.roof; game.portal.flap = Math.PI / 2; game.portal.mode = 'roof'; roof.pivotFromRest(game.portal.hinge, new THREE.Vector3(1, 0, 0), Math.PI / 2);
    h.group.attach(roof.root); roof.setRest(roof.root.position.clone(), roof.root.quaternion.clone());
    game.wave.P = 1; S.d1.state = 'wall';
    girl.attachTo(h.group); girl.position.set(h.spec.center, h.deckTop, 0.1); girl.path = null; girl.setMode('idle');
    game.go('finale');
  };
  // test hook: jump straight to the landed town (route B carrier) to iterate on the ending
  game.debugLanded = () => {
    S.route = S.route || 'B'; const api = game.routeB; api.makeHouse();
    const h = game.house; game.routeB.C.inTown = true; if (h.group.parent !== grp) grp.attach(h.group);
    h.group.position.set(L.cd.x1 - L.seamX - 2.95, L.cd.y1, L.pathZ); h.group.rotation.set(0, 0, 0);
    girl.attachTo(h.group); girl.position.set(0, h.deckTop, 0.1);
    stay.setPose(V3(st.x + st.H / 2 + st.T / 2, L.shoreY + st.T / 2, 0), new THREE.Quaternion().setFromAxisAngle(AXIS_Z, -Math.PI / 2)); tipS.mode = 'down'; S.stay = 'fallen';
    T.committed = true; T.th = T.thLand; grp.rotation.z = -T.th; land();
  };
}
