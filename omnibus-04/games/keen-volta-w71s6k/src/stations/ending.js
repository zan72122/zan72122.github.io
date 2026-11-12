// The tilt as experienced (loose things, lanterns, the girl's posture, a
// camera that backs away to reveal the colossal 6|1 domino) and the ending:
// the girl slides down the great ring onto the fallen Stay and walks to the
// lamp on the far shore. One tiny domino waits there.
import * as THREE from 'three';
import { L, DOM } from '../layout.js';
import { Domino } from '../domino.js';
import { TipController } from '../physics.js';
import { MATS } from '../world.js';
import { V3, clamp, damp } from '../util.js';
import { sound } from '../audio.js';
import { pushTarget } from './common.js';

export function setupEnding(game) {
  const { S, girl, scene } = game;
  const town = game.town, grp = town.group, T = game.tilt;
  // lamp + tiny domino on the far shore
  const lampX = 69.2, sy = L.shoreY;
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 2.4, 8), MATS.iron); post.position.set(lampX, sy + 1.2, 1.9); post.castShadow = true; scene.add(post);
  const lampMat = new THREE.MeshStandardMaterial({ color: 0xffe2b0, emissive: 0xffb04a, emissiveIntensity: 1.2 });
  const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.34, 0.26), lampMat); lamp.position.set(lampX + 0.3, sy + 2.05, 1.9); scene.add(lamp);
  const lampLight = new THREE.PointLight(0xffb45a, 0, 9, 1.6); lampLight.position.copy(lamp.position); scene.add(lampLight);
  const tiny = new Domino({ id: 'TINY', T: 0.09, H: 0.52, W: 0.28, pips: [1, 1], band: '#c43a28', seed: 909, ring: false, round: 0.2 });
  scene.add(tiny.root); tiny.setRest(V3(lampX + 1.25, sy + 0.26, 1.35), new THREE.Quaternion());
  let tinyDown = false;
  const tipT = new TipController(game, tiny, { allowed: 1, pan: () => 0.6, land: () => Math.PI / 2,
    onLand: () => {
      sound.tick(0.6, 2200, 0.35, 0.04); tinyDown = true; game.fact('TINY.fallen'); girl.emote('cheer', 1.4);
      game.after(2.2, () => { sound.impact(3.0, 0.95, 'stone'); game.rig.shake(0.12); game.fact('far.echo'); });
      game.after(5.5, finish);
    } });
  game.onUpdate((dt) => { if (tipT.mode !== 'down') tipT.update(dt); if (game.phase === 'ending' && tipT.mode === 'stand' && Math.floor(game.time / 2.6) !== Math.floor((game.time - dt) / 2.6)) tipT.rock(0.05); });
  pushTarget(game, 'TINY', tiny, tipT, { locked: () => game.phase !== 'ending' || !seated, radius: 90 });
  game.tipTiny = tipT; game.D.TINY = tiny;

  // --- reactions while the town tilts -------------------------------------------
  const fallen = [];
  game.onUpdate((dt) => {
    const th = T.th;
    if (th <= 0.0005 && !T.committed) return;
    // lanterns stay plumb with a pendulum lag
    for (const ln of town.lanterns) { ln.v += (-14 * (ln.a - th) - 1.4 * ln.v) * dt; ln.a += ln.v * dt; ln.g.rotation.z = ln.a; }
    // loose barrels, balls and crates slide or roll downhill; off the end they fall
    for (const o of town.loose) {
      if (o.gone) continue;
      const mu = o.kind === 'crate' ? 0.3 : 0.025;
      const a = 9.8 * (Math.sin(th) - mu * Math.cos(th));
      if (a > 0 || o.v > 0) { o.v = Math.max(0, o.v + a * dt); o.x += o.v * dt; }
      o.m.position.x = o.x;
      if (o.kind !== 'crate') { o.m.rotation.y -= (o.v * dt) / o.r; }
      if (o.v > 0.5 && Math.random() < dt * 3) sound.tick(game.pan(o.m.getWorldPosition(V3())), o.kind === 'crate' ? 500 : 900, 0.12, 0.05);
      if (o.x > L.cd.x1 - L.seamX - 0.3) { // over the edge: now a free body in the world
        o.gone = true; const wpos = o.m.getWorldPosition(V3()); scene.attach(o.m);
        fallen.push({ m: o.m, v: V3(o.v * Math.cos(th), -o.v * Math.sin(th), 0), floor: L.shoreY + L.stay.T + o.r, spin: o.v });
      }
    }
    for (const f of fallen) {
      if (f.rest) continue;
      f.v.y -= 9.8 * dt; f.m.position.addScaledVector(f.v, dt); f.m.rotation.z -= f.spin * dt;
      if (f.m.position.y < f.floor) { f.m.position.y = f.floor; if (Math.abs(f.v.y) > 2) sound.impact(0.3, 0.7, 'wood'); f.v.y *= -0.3; f.v.x *= 0.6; if (Math.abs(f.v.y) < 0.4) f.rest = true; }
    }
    // the girl braces: crouches and leans uphill, staying close to world-vertical
    if (game.phase === 'tilt') { girl.setMode('crouch'); girl.lean = 0.1; girl.obj.rotation.z = th * 0.85; }
  });

  game.phases.tilt = {
    enter() { girl.emote('surprise', 1.0); girl.lookAt(V3(45, -2, 4), 3); game.fact('tilt.start'); },
    update(dt) {
      const k = clamp(T.th / T.thLand, 0, 1), e = k * k * (3 - 2 * k);
      const hx = game.house.group.getWorldPosition(V3());
      const c = hx.clone().lerp(V3(38, -1, 0), e);
      // back away until the whole body is in view: rounded corners, 6|1 plazas, centre line, band, ring
      game.shot({ center: c, w: 34 + 36 * e, h: 22 + 18 * e, az: -0.3 + 0.02 * e, el: 0.5 + 0.14 * e, azP: -0.62 - 0.1 * e, elP: 0.56 + 0.1 * e, wP: 24 + 18 * e, hP: 44 + 30 * e }, 0.8);
      if (Math.random() < dt * 4 * k) game.dust.puff(grp.localToWorld(V3(-22 + Math.random() * 44, 0.2, 11)), 2, 2, 0.6);
    },
  };
  let seated = false, endT = 0, finished = false;
  function finish() {
    if (finished) return; finished = true; S.done = true; game.fact('end');
    game.onFinished && game.onFinished(S.route);
  }
  game.phases.ending = {
    enter() {
      endT = 0;
      const W = (x, y, z) => grp.localToWorld(V3(x - L.seamX, y, z));
      girl.obj.rotation.z = 0; girl.setMode('idle'); girl.attachTo(scene); girl.obj.rotation.z = 0;
      const ringC = W(L.cd.x1 + 2.0, 2.5, 0), th = T.th, R = 2.15;
      const ringTop = ringC.clone().add(V3(Math.sin(th) * R, Math.cos(th) * R, 0.2));
      const ringRight = ringC.clone().add(V3(Math.cos(th) * R, -Math.sin(th) * R, 0.2));
      const stayTop = L.shoreY + L.stay.T;
      const path1 = [W(L.cd.x1 - 2.4, L.cd.y1, 1.2), W(L.cd.x1 - 1.8, L.cd.y1, 0.2)];
      const slide = [W(L.cd.x1 - 0.6, L.cd.y1 - 0.5, 0.2), W(L.cd.x1, L.cd.y1 - 1.9, 0.2), ringTop, ringRight, V3(ringRight.x + 0.6, stayTop, 0.3)];
      const walk2 = [V3(L.stay.x + L.stay.H + 0.2, stayTop, 0.9), V3(L.stay.x + L.stay.H + 1.0, sy, 1.2), V3(lampX - 0.6, sy, 1.5)];
      game.after(0.6, () => girl.walk(path1, () => {
        girl.setMode('sit'); girl.faceWorldX(1);
        game.after(0.5, () => {
          girl.setMode('slide'); sound.loop('slide').set(0.6, 0.5);
          girl.walk(slide, () => {
            sound.loop('slide').set(0); sound.impact(0.3, 0.6, 'domino'); girl.setMode('idle'); girl.emote('cheer', 1.2);
            girl.walk(walk2, () => {
              girl.faceWorldX(1); girl.lookAt(V3(160, 10, -60), 4);
              game.after(1.2, () => { girl.setMode('sit'); seated = true; game.fact('girl.arrived'); });
            }, 1.7);
          }, 4.2);
        });
      }, 1.6));
    },
    update(dt) {
      endT += dt;
      lampLight.intensity = damp(lampLight.intensity, seated ? 2.2 : 0.8, 1, dt);
      const gp = girl.obj.getWorldPosition(V3());
      if (endT < 5.5) game.shot({ center: V3(39, -1, 0), w: 80, h: 40, az: -0.22, el: 0.56, azP: -0.62, elP: 0.62, wP: 44, hP: 80, pOffset: V3(2, 0, 0) }, 0.7);
      else if (!seated) game.shot({ center: gp.clone().lerp(V3(56, -4, 0), 0.4), w: 34, h: 20, az: -0.3, el: 0.5, azP: 0.5, elP: 0.5, wP: 22, hP: 40 }, 0.8);
      else {
        // finally look where she looks: more colossal dominoes standing in the haze
        game.shot({ center: gp.clone().add(V3(10, 7, -9)), w: 30, h: 17, az: -0.86, el: 0.1, azP: -0.86, elP: 0.1, wP: 16, hP: 30, pOffset: V3(0, 2, 0) }, 0.35);
      }
      if (seated) { this.st = (this.st || 0) + dt; if (this.st > 12 && !tinyDown) finish(); }
    },
  };
}
