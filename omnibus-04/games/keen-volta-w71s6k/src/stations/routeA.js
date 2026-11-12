// Route A (high road): D2 falls onto a round boulder and becomes a seesaw that
// tips under the girl's weight; the overhead crane then hooks D2's ring, leans
// it against the colossal wall as a ramp, and later sets it as a wall of the
// house on a timber sled.
import * as THREE from 'three';
import { L, DOM } from '../layout.js';
import { Crane } from '../crane.js';
import { House, RoofPortal } from '../house.js';
import { Hanger } from '../hang.js';
import { terrainHeight } from '../world.js';
import { V3, AXIS_Z, clamp, pivotPose } from '../util.js';
import { sound } from '../audio.js';
import { surfaceY } from './common.js';

export function setupRouteA(game) {
  const { S, girl } = game;
  const d2 = game.D.D2;
  const crane = (game.crane = new Crane(game));
  crane.floorUnder = (lx) => { const p = crane.trackAt(lx); return heightAt(p.x + L.seamX, p.z); };
  game.onUpdate((dt) => crane.update(dt));
  // parked above the far upper terrace, hook dangling above head height
  crane.tx = crane.targetTx = 10.6 - L.seamX; crane.len = crane.targetLen = crane.y - 0.55 - 4.6;

  const api = (game.routeA = {});
  // landing angle of D2 on the boulder (its underside meets the round stone)
  const P = V3(L.upperA[1], L.upY, L.upZ), C = V3(L.boulder.x, L.boulder.y, L.upZ), r = L.boulder.r;
  let a = 0.1; while (a < 1.55 && (C.x - P.x) * Math.cos(a) - (C.y - P.y) * Math.sin(a) > r + 0.02) a += 0.002;
  api.d2LandAngle = a;
  const landed = { p: new THREE.Vector3(), q: new THREE.Quaternion() };
  let beta = 0, betaV = 0, betaMax = 0, seesaw = 'none';
  api.d2Land = (v) => {
    const hit = V3(L.boulder.x - 0.2, L.boulder.y + r, L.upZ);
    sound.impact(0.9, game.pan(hit), 'domino'); sound.impact(0.5, game.pan(hit), 'stone');
    game.rig.shake(0.35); game.dust.puff(hit, 10, 1.1, 0.9);
    if (S.route === 'A') { S.d2.state = 'seesaw'; game.fact('D2.fallen', { as: 'seesaw' }); }
    d2.fact('fell', { dir: 1, as: 'bridge-on-boulder' });
  };
  api.d2Rest = () => {
    landed.p.copy(d2.pos); landed.q.copy(d2.quat);
    // find how far D2 can rock about the boulder before its far end meets the terrace
    const pp = new THREE.Vector3(), qq = new THREE.Quaternion(), corner = new THREE.Vector3();
    for (let b = 0; b < 0.8; b += 0.004) {
      pivotPose(landed.p, landed.q, C, AXIS_Z, -b, pp, qq);
      corner.set(DOM.T / 2, DOM.H / 2, 0).applyQuaternion(qq).add(pp);
      if (corner.y <= L.upY + 0.01) { betaMax = b; break; }
      betaMax = b;
    }
    seesaw = 'waiting';
    if (S.route === 'A') girlToSeesaw();
  };
  const seesawPose = () => { pivotPose(landed.p, landed.q, C, AXIS_Z, -beta, d2.pos, d2.quat); d2.setPose(d2.pos, d2.quat); };

  // --- the house carrier for this route: a timber sled in the building yard
  let house = null;
  const heightAt = (x, z) => {
    let h = terrainHeight(x, z);
    if (house && S.route === 'A' && Math.abs(x - L.houseX) < 1.9 && Math.abs(z - L.pathZ) < 1.0 && S.tilt === 0) h = Math.max(h, L.cd.y1 + house.deckTop);
    return h;
  };
  api.makeHouse = () => {
    if (house) return house;
    house = new House(game, 'sled', game.town.group, L.houseX - L.seamX, L.cd.y1, L.pathZ);
    game.house = house; S.house.carrier = 'sled';
    game.portal = new RoofPortal(game, game.town.group, L.houseX - L.seamX, L.cd.y1 + house.wallTop);
    game.onUpdate((dt) => game.portal.update(dt));
    return house;
  };

  // --- girl over the seesaw ------------------------------------------------
  function girlToSeesaw() {
    game.go('a_seesaw');
    girl.walk([V3(1.3, 0, -0.7), V3(1.75, 0, L.upZ), V3(L.stairX1 + 0.15, L.upY, L.upZ), V3(P.x - 0.4, L.upY, L.upZ)], () => {
      girl.heightFn = (x) => (x > P.x - 0.3 && x < 10.5 ? Math.max(surfaceY(d2, x) ?? L.upY, x > L.upperGap[1] ? L.upY : -9) : null);
      girl.lookAt(() => C.clone().setY(C.y + 0.4), 1.5);
      girl.walk([V3(C.x - 0.35, 3, L.upZ)], () => {
        // hesitate at the balance point, then commit
        girl.emote('peer', 1.2); girl.lookAt(() => C.clone(), 1.2);
        game.after(0.9, () => girl.walk([V3(C.x + 0.4, 3, L.upZ)], () => {
          seesaw = 'tipping'; sound.loop('creak').set(0.6, game.pan(C)); girl.setMode('balance'); girl.lean = 0.1;
        }, 0.9));
      }, 1.3);
    }, 1.75);
  }

  // --- crane targets ---------------------------------------------------------
  let hanger = null, grabOff = new THREE.Vector3(), pendingSeat = 0;
  const ringFromHook = () => crane.hookWorld.clone().add(V3(0, -0.45, 0));
  crane.catchables.push({
    ringWorld: () => d2.worldRing(),
    enabled: () => S.route === 'A' && (S.d2.state === 'seesaw' || S.d2.state === 'loose') && seesaw === 'done',
    onCatch: () => {
      const dir = new THREE.Vector3(0, 1, 0).applyQuaternion(d2.quat);
      hanger = new Hanger(d2, heightAt, { phi: Math.atan2(dir.x, dir.y), onThud: (w) => { const b = hanger.bottom(); sound.impact(clamp(w * 0.3, 0.2, 0.8), game.pan(b), 'domino'); game.dust.puff(b, 5, 0.6, 0.6); } });
      hanger.ring.copy(d2.worldRing()); hanger.prevRing = hanger.ring.clone();
      S.d2.state = 'hooked'; d2.fact('hooked', { by: 'crane' }); game.fact('D2.hooked');
      girl.emote('clap', 1.2);
    },
    update: (dt) => { if (hanger && !api.snapping && S.d2.state !== 'ramp') hanger.update(dt, ringFromHook()); },
  });
  const craneTarget = game.target({
    id: 'crane', radius: 85,
    enabled: () => S.route === 'A' && ['a_ramp', 'a_wall'].includes(game.phase) && !api.snapping,
    anchor: () => (crane.load ? d2.worldPoint(V3(0, DOM.H * 0.25, 0)) : crane.hookWorld),
    pick: (sx, sy) => Math.min(game.input.distToPoint(sx, sy, crane.hookWorld) - 10, crane.load ? game.distToDomino(d2, sx, sy) : game.distToDomino(d2, sx, sy) + 25),
    down: (g) => {
      const z = crane.hookWorld.z; const w = game.input.onPlaneZ(g.x, g.y, z);
      if (!crane.load && game.distToDomino(d2, g.x, g.y) < game.input.distToPoint(g.x, g.y, crane.hookWorld)) {
        // grabbing the domino itself: the hook comes down to its ring first
        const rl = crane.worldToLocal(d2.worldRing().add(V3(0, 0.45, 0))); crane.aim(rl); grabOff.set(0, 0, 0); api.autoHook = true;
      } else { grabOff.copy(crane.worldToLocal(crane.hookWorld)).sub(crane.worldToLocal(w)); api.autoHook = false; }
      if (S.d2.state === 'ramp' && game.phase === 'a_wall') { S.d2.state = 'hooked'; hanger.ring.copy(d2.worldRing()); hanger.prevRing = hanger.ring.clone(); crane.aim(crane.worldToLocal(d2.worldRing().add(V3(0, 0.45, 0)))); }
      game.touch();
    },
    move: (g) => {
      if (api.autoHook && !crane.load) return;
      const w = game.input.onPlaneZ(g.x, g.y, crane.hookWorld.z);
      crane.aim(crane.worldToLocal(w).add(grabOff)); game.touch();
    },
    up: () => { api.autoHook = false; api.release && api.release(); },
  });

  // Ramp: released with the domino's foot on the far terrace, near the wall.
  const rampPose = () => {
    const ang = 52 * Math.PI / 180, u = V3(Math.cos(ang), Math.sin(ang), 0), n = V3(-Math.sin(ang), Math.cos(ang), 0);
    const corner = V3(12.43, L.upY, L.upZ);
    const c = corner.clone().addScaledVector(u, DOM.H / 2).addScaledVector(n, DOM.T / 2);
    return { p: c, q: new THREE.Quaternion().setFromAxisAngle(AXIS_Z, -(Math.PI / 2 - ang)) };
  };
  const snapTo = (pose, dur, done) => {
    api.snapping = true;
    const p0 = d2.pos.clone(), q0 = d2.quat.clone(), t0 = game.time;
    const f = game.onUpdate(() => {
      const k = clamp((game.time - t0) / dur, 0, 1), e = k * k * (3 - 2 * k);
      d2.setPose(p0.clone().lerp(pose.p, e), q0.clone().slerp(pose.q, e));
      crane.aim(crane.worldToLocal(d2.worldRing().add(V3(0, 0.45, 0))));
      if (k >= 1) { game.updaters = game.updaters.filter((x) => x !== f); api.snapping = false; done && done(); }
    });
  };

  // --- phases ------------------------------------------------------------
  game.phases.a_seesaw = {
    enter() { api.makeHouse(); game.shot({ center: V3(7.6, 3.4, -2.2), w: 13, h: 8, az: -0.12, el: 0.36, wP: 9, hP: 15, pOffset: V3(0.8, 0.3, 0) }); },
    update(dt) {
      if (seesaw === 'tipping') {
        betaV += 1.5 * dt; beta += betaV * dt;
        if (beta >= betaMax) {
          beta = betaMax; seesaw = 'done'; sound.loop('creak').set(0);
          const hit = V3(10.2, L.upY, L.upZ); sound.impact(0.8, game.pan(hit), 'domino'); game.rig.shake(0.25); game.dust.puff(hit, 8, 1, 0.8);
          d2.fact('rocked', { as: 'seesaw' }); game.fact('D2.seesaw');
          girl.setMode('idle'); girl.emote('surprise', 0.9);
          game.after(0.8, () => girl.walk([V3(10.7, L.upY, L.upZ), V3(12.35, L.upY, L.upZ)], () => {
            girl.heightFn = null; girl.lookAt(V3(14, 5.4, L.upZ), 1.8); girl.emote('beckon', 1.4);
            game.go('a_ramp');
          }, 1.4));
        }
        seesawPose();
      }
    },
  };
  let hintT = 0;
  game.phases.a_ramp = {
    enter() { game.shot({ center: V3(11.6, 3.9, -1.2), w: 12.5, h: 8.5, az: -0.22, el: 0.24, wP: 8.6, hP: 15, pOffset: V3(0.3, 0.6, 0) }); hintT = 0; },
    update(dt) {
      hintT += dt; if (game.input.active) hintT = 0;
      if (hintT > 5) {
        hintT = 0;
        if (!crane.load) { girl.lookAt(() => crane.hookWorld, 2); girl.emote('point', 1.4); crane.swayV += 0.8; sound.clink(game.pan(crane.hookWorld), 0.6, 0.12); }
        else { girl.lookAt(V3(14, 5.2, L.upZ), 2); girl.emote('beckon', 1.4); }
      }
    },
  };
  api.release = () => {
    if (game.phase === 'a_ramp' && hanger && crane.load) {
      const b = hanger.bottom(), ring = hanger.ring;
      if (b.x > 10.0 && b.x < 13.9 && ring.x > 11.4 && ring.y > 3.0 && b.y < L.upY + 1.2) {
        snapTo(rampPose(), 0.7, () => {
          sound.impact(0.7, game.pan(ring), 'domino'); game.rig.shake(0.2); game.dust.puff(V3(12.9, L.upY, L.upZ), 6, 0.8, 0.6);
          S.d2.state = 'ramp'; d2.fact('leaned', { as: 'ramp' }); game.fact('D2.ramp');
          hanger.phi = 38 * Math.PI / 180; hanger.w = 0; hanger.ring.copy(d2.worldRing()); hanger.prevRing = hanger.ring.clone();
          game.go('a_climb');
        });
      }
    } else if (game.phase === 'a_wall' && hanger && crane.load) {
      pendingSeat = game.time + 2.0;               // kind: let a nearly-placed domino finish settling
    }
  };
  game.phases.a_climb = {
    enter() {
      game.shot({ center: V3(14.2, 4.6, -1.0), w: 12, h: 8.5, az: -0.26, el: 0.26, wP: 8.6, hP: 15 });
      girl.walk([V3(12.1, L.upY, L.upZ)], () => {
        girl.heightFn = (x) => (x > 12.3 && x < 15.2 ? (surfaceY(d2, x) ?? null) : null);
        girl.setMode('climb');
        girl.walk([V3(15.0, 5, L.upZ)], () => {
          girl.heightFn = null; girl.setMode('idle');
          girl.walk([V3(15.9, L.cd.y1, L.upZ), V3(16.4, L.cd.y1, 1.0), V3(17.1, L.cd.y1, 4.5)], () => {
            girl.lookAt(() => d2.worldPoint(V3(0, 0, 0)), 2); girl.emote('cheer', 1.2); game.go('a_wall');
          }, 1.4);
        }, 0.65);
        girl.mode = 'climb';
      }, 1.3);
    },
    update() { if (girl.path && girl.heightFn) girl.setMode('climb'); },
  };
  function seatD2() {
    const slotL = house.slots.W1.clone(); const slot = house.group.localToWorld(slotL.clone());
    const pose = { p: slot.clone().add(V3(0, DOM.H / 2, 0)), q: new THREE.Quaternion() };
    snapTo(pose, 0.6, () => {
      crane.detach(); hanger = null; house.seat('W1', d2); S.d2.state = 'wall'; S.house.walls.push('D2');
      crane.targetTx = 27.5 - L.seamX; crane.targetLen = 1.0;   // the trolley rolls clear of the ropeway's path
      game.fact('D2.wall'); girl.emote('clap', 1.2);
      game.after(0.8, () => game.go('yard'));
    });
  }
  game.phases.a_wall = {
    enter() { game.shot({ center: V3(16.6, 6.6, 1.2), w: 14, h: 9.5, az: -0.2, el: 0.42, wP: 10, hP: 16 }); hintT = 0; },
    update(dt) {
      hintT += dt; if (game.input.active) hintT = 0;
      if (hanger && crane.load && !api.snapping) {
        const b = hanger.bottom(), ring = hanger.ring; const slot = house.slotWorld('W1');
        const over = Math.abs(ring.x - slot.x) < 0.7 && Math.abs(ring.z - slot.z) < 0.5;
        const low = b.y < slot.y + 0.75;
        const near = Math.abs(b.x - slot.x) < 1.5 && Math.abs(ring.x - slot.x) < 1.6 && Math.abs(ring.z - slot.z) < 0.6;
        if ((over && low) || (game.time < pendingSeat && near && b.y < slot.y + 2.2)) seatD2();
      }
      if (hintT > 5) { hintT = 0; girl.lookAt(() => house.group.localToWorld(house.slots.W1.clone()), 2); girl.emote('point', 1.3); }
    },
  };
  api.house = () => house;
}
