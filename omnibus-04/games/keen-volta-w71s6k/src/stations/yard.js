// Building yard on the colossal domino: the ropeway hauls D1 - the very first
// domino, chip and all - out of the ditch and up the cable into the second
// wall slot; the roof domino tips onto the walls; then the town wave.
import * as THREE from 'three';
import { L, DOM } from '../layout.js';
import { Rope } from '../rope.js';
import { MATS } from '../world.js';
import { WaveTown } from '../wave.js';
import { V3, clamp } from '../util.js';
import { sound } from '../audio.js';

export function setupYard(game) {
  const { S, girl } = game;
  const rw = game.ropeway, d1 = game.D.D1, grp = game.town.group;
  const wave = (game.wave = new WaveTown(game));
  game.onUpdate((dt) => wave.update(dt));
  // hand rope on the station mast (behind the street): pulling it drives the haul rope
  const top = V3(L.ropeB.x - L.seamX - 0.35, L.ropeB.y - 1.2, 0.95), bot = V3(L.ropeB.x - L.seamX - 0.35, L.cd.y1 + 0.35, 0.95);
  const hand = new Rope(grp, { width: 0.07, color: 0xc9ad7c, segments: 8 }); hand.set(top, bot, 0);
  const hw = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.06, 6, 16), MATS.iron); hw.position.copy(top).add(V3(0.1, 0.25, 0)); grp.add(hw);
  const knots = []; for (let i = 0; i < 5; i++) { const k = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 6), MATS.darkWood); grp.add(k); knots.push(k); }
  let shift = 0;
  const W = (v) => grp.localToWorld(v.clone());
  let ppm = 60, lastY = 0, pulledAny = false;
  game.target({
    id: 'ropeway', radius: 75,
    enabled: () => game.phase === 'yard' && rw.stage !== 'seated' && !!rw.load,
    anchor: () => W(V3(top.x, (top.y + bot.y) / 2, top.z)),
    pick: (sx, sy) => game.input.distToSegment(sx, sy, W(top), W(bot)),
    down: (g) => { ppm = game.input.pxPerMetre(W(bot)); lastY = g.y; girl.setMode('pull'); game.touch(); },
    move: (g) => {
      let d = (g.y - lastY) / ppm; lastY = g.y; if (d < 0) d = -d * 0.5;
      if (d > 0) { rw.pull(d); shift += d; hw.rotation.z -= d * 2; pulledAny = true; game.touch(); if (!S.d1.lifted) { S.d1.lifted = true; d1.fact('hauled', { by: 'ropeway' }); game.fact('D1.hauled'); } }
    },
    up: () => { if (girl.mode === 'pull') girl.setMode('idle'); },
  });
  // D1 seats into the free slot of house #1
  rw.seatTarget = { y: () => game.house.slotWorld('W2').y };
  rw.onSeat = () => {
    game.house.seat('W2', d1); rw.load = null; S.d1.state = 'wall'; S.house.walls.push('D1'); game.fact('D1.wall');
    girl.setMode('idle'); girl.emote('cheer', 1.4); girl.lookAt(() => d1.worldPoint(V3(0, 0.8, 0)), 2.5);
  };
  // roof flap: push it forward (down on screen / toward you) onto the walls
  let fy = 0, fppm = 60;
  game.target({
    id: 'roof', radius: 75,
    enabled: () => game.phase === 'yard' && game.portal && (game.portal.mode === 'free' || game.portal.mode === 'held'),
    anchor: () => game.portal.roof.worldPoint(V3(0, 0, 0)),
    pick: (sx, sy) => game.distToDomino(game.portal.roof, sx, sy),
    down: (g) => { fy = g.y; fppm = game.input.pxPerMetre(game.portal.worldHinge()); game.portal.hold(game.portal.flap); game.touch(); },
    move: (g) => { const d = (g.y - fy) / fppm; game.portal.hold(Math.atan2(Math.max(-0.1, d), DOM.W) * 1.3); game.touch(); },
    up: (g) => { if (g.cancelled) game.portal.release(0); else if (g.tap || g.moved > 45) game.portal.nudge(); else game.portal.release((g.vy * 1000) / fppm); },
  });
  // master rope of the wave
  let mY = 0, mppm = 60;
  game.target({
    id: 'master', radius: 75,
    enabled: () => game.phase === 'wave' && !wave.done,
    anchor: () => W(wave.handleLocal()),
    pick: (sx, sy) => Math.min(game.input.distToPoint(sx, sy, W(wave.handleLocal())), game.input.distToSegment(sx, sy, W(wave.handleLocal()), W(wave.pulley)) + 8),
    down: (g) => { mY = g.y; mppm = game.input.pxPerMetre(W(wave.handleLocal())); girl.setMode('pull'); game.touch(); },
    move: (g) => { let d = (g.y - mY) / mppm; mY = g.y; if (d < 0) d = -d * 0.5; if (d > 0) { wave.pull(d * 0.16); game.touch(); if (Math.random() < 0.3) sound.squeak(game.pan(W(wave.pulley)), 0.07); } },
    up: () => { if (girl.mode === 'pull') girl.setMode('idle'); },
  });

  // lifting any paving domino by hand also tightens the chain
  let wY = 0, wppm = 60;
  game.target({
    id: 'waveDom', radius: 40,
    enabled: () => game.phase === 'wave' && !wave.done,
    anchor: () => W(wave.items[0].hinge),
    pick: (sx, sy) => Math.min(...wave.items.filter((it) => !it.up).map((it) => game.distToDomino(it.d, sx, sy))) + 14,
    down: (g) => { wY = g.y; wppm = game.input.pxPerMetre(W(wave.items[0].hinge)); game.touch(); },
    move: (g) => { const d = (wY - g.y) / wppm; wY = g.y; if (d > 0) { wave.pull(d * 0.14); game.touch(); } },
    up: () => {},
  });
  let hintT = 0, arrived = false;
  const hint = (dt, fn) => { hintT += dt; if (game.input.active) hintT = 0; if (hintT > 5.5) { hintT = 0; fn(); } };
  game.phases.yard = {
    enter() {
      hintT = 0; arrived = false;
      const house = game.house;
      house.onFull = () => { game.portal.unlatch(); game.fact('house.walls'); };
      game.portal.onRoof = (roof) => {
        house.group.attach(roof.root); roof.setRest(roof.root.position.clone(), roof.root.quaternion.clone());
        S.house.roof = true; game.fact('house.roof'); house.roofDom = roof;
        girl.emote('cheer', 1.3);
        game.after(1.2, () => {
          // she walks in under her roof
          girl.attachTo(grp);
          girl.walk([V3(L.houseX + 1.9 - L.seamX, L.cd.y1, 4.3), V3(L.houseX - L.seamX, L.cd.y1 + house.deckTop, L.pathZ + 0.1)], () => {
            girl.attachTo(house.group); girl.faceCamera(); girl.emote('clap', 1.3); game.go('wave');
          }, 1.2);
        });
      };
      girl.attachTo(grp);
      girl.walk([V3(L.ropeB.x - L.seamX + 0.6, L.cd.y1, 1.35)], () => { arrived = true; girl.faceWorldX(-1); girl.lookAt(() => rw.carriage.position, 2.5); }, 1.3);
    },
    update(dt) {
      const car = rw.carriage.position, st = W(top);
      if (rw.stage !== 'seated') {
        // frame the haul: the cable, the carriage far down the line, and the hand rope
        const span = Math.abs(st.x - car.x);
        game.shot({ center: V3((st.x + car.x) / 2 + 1, Math.max(4, (st.y + car.y) / 2 - 1), 1.0), w: Math.max(13, span + 8), h: Math.max(9, span * 0.55 + 5), az: -0.25, el: 0.24, wP: Math.max(9, span * 0.8 + 6), hP: Math.max(15, span * 0.9 + 8) }, 1.2);
      } else game.shot({ center: V3(L.houseX, 7.4, 2.2), w: 12, h: 8, az: -0.22, el: 0.28, wP: 8.6, hP: 13 }, 1.4);
      if (arrived && rw.stage !== 'seated') {
        if (car.distanceTo(d1.pos) < 8 && rw.stage === 'lower' && !this.seen) { this.seen = true; girl.emote('surprise', 1.2); girl.lookAt(() => d1.worldPoint(V3(0.3, 0.8, 0.8)), 3); game.fact('girl.recognises', { id: 'D1' }); }
        hint(dt, () => { girl.setMode('pull'); game.after(1.2, () => girl.setMode('idle')); girl.lookAt(() => W(bot), 1.2); rw.swayV += 0.5; });
      } else if (game.portal.mode === 'free') hint(dt, () => { girl.lookAt(() => game.portal.roof.worldPoint(V3()), 2); girl.emote('point', 1.3); game.portal.flapV += 0.5; });
      knots.forEach((k, i) => { const u = (((i / knots.length + shift * 0.2) % 1) + 1) % 1; k.position.lerpVectors(top, bot, u); });
    },
  };
  game.phases.wave = {
    enter() {
      hintT = 0;
      wave.onDone = () => { game.fact('town.built'); girl.emote('cheer', 1.6); game.after(2.2, () => game.go('finale')); };
    },
    update(dt) {
      const k = wave.lastUp;
      const c = k >= 0 ? W(wave.items[Math.min(wave.N - 1, k + 1)].hinge) : V3(20, 6, 0);
      const cx = 16 + wave.P * 9;
      game.shot({ center: V3(cx + 1, 6.2, -1.8), w: 20 + wave.P * 6, h: 12 + wave.P * 4, az: -0.24, el: 0.34 + wave.P * 0.06, wP: 13 + wave.P * 5, hP: 20 + wave.P * 6 }, 1.0);
      if (wave.P < 0.02) hint(dt, () => { girl.lookAt(() => W(wave.handleLocal()), 2); girl.emote('point', 1.3); });
      else if (!wave.done) hint(dt, () => { girl.lookAt(c, 2); girl.emote('beckon', 1.3); });
    },
  };
}
