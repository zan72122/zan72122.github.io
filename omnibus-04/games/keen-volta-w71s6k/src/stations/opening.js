// Opening: the girl, the first rocking domino (D1) at the ditch, the ropeway
// hook that catches D1's ring, and the fork with two standing dominoes.
import * as THREE from 'three';
import { L, DOM } from '../layout.js';
import { Domino, IDENTITIES } from '../domino.js';
import { TipController } from '../physics.js';
import { Ropeway } from '../ropeway.js';
import { V3 } from '../util.js';
import { sound } from '../audio.js';
import { pushTarget } from './common.js';

const Q0 = new THREE.Quaternion();

export function setupOpening(game) {
  const { scene, girl, S } = game;
  const mk = (id, pos) => { const d = new Domino({ id, ...structuredClone(IDENTITIES[id]) }); scene.add(d.root); d.setRest(pos, Q0); game.D[id] = d; return d; };
  const d1 = mk('D1', V3(L.d1X, DOM.H / 2, 0));
  const d2 = mk('D2', V3(L.d2X, L.upY + DOM.H / 2, L.upZ));
  const d3 = mk('D3', V3(L.d3X, DOM.H / 2, L.d3Z));
  game.ropeway = new Ropeway(game);
  game.onUpdate((dt) => game.ropeway.update(dt));

  // --- D1: the first knock -------------------------------------------------
  const farRim = V3(L.ditchX1, 0, 0);
  const tip1 = new TipController(game, d1, {
    allowed: 1, pan: () => game.pan(d1.pos),
    onStart: () => {
      game.fact('D1.push'); sound.loop('creak').set(0.5, game.pan(d1.pos));
      if (girl.mode === 'push' || girl.mode === 'brace' || girl.mode === 'strain') { girl.setMode('idle'); girl.emote('flinch', 0.8); }
      girl.lookAt(() => d1.worldPoint(V3(0, DOM.H / 2, 0)), 3);
    },
    onLand: (dir, v) => {
      sound.loop('creak').set(0);
      const hit = V3(L.ditchX1 + 0.35, 0.1, 0);
      sound.impact(1.0, game.pan(hit), 'domino'); sound.impact(0.6, game.pan(hit), 'stone');
      game.rig.shake(0.45); game.dust.puff(hit, 14, 1.4, 1.1); game.dust.puff(V3(L.ditchX0, 0.1, 0), 6, 1, 0.7);
      // the top corner chips against the far rim: a permanent mark
      d1.addMark('chip', { u: 1.0, v: 0.0, r: 0.5, a0: Math.PI / 2, seed: 3, face: { u: 0.9, v: 0.02, r: 0.12, a0: 0, seed: 2 } });
      game.debris.burst(V3(L.ditchX1 + 0.05, 0.25, 0.2), 6, L.ditchFloor, -0.6, game.pan(hit));
      S.d1.state = 'bridge'; S.d1.chip = true; d1.fact('fell', { dir: 1, as: 'bridge' });
      game.fact('D1.fallen', { dir: 1 });
      game.after(0.06, () => { game.ropeway.catch(d1); d1.fact('hooked'); game.fact('D1.hooked'); });
    },
  });
  game.onUpdate((dt) => { if (S.d1.state === 'standing' || tip1.mode !== 'down') tip1.update(dt); });
  pushTarget(game, 'D1', d1, tip1, {
    onGrab: () => { if (girl.position.distanceTo(V3(L.girlWaitX, 0, 0)) < 0.6) { girl.faceWorldX(1); girl.setMode('push', 0.3); } },
    onDrag: (a) => { if (girl.mode === 'push') girl.intensity = Math.min(1, Math.abs(a) * 6); },
    onRelease: (m) => { if (m === 'stand' && girl.mode === 'push') girl.setMode('idle'); },
  });
  game.tip1 = tip1;
  // the dangling ropeway hook swings when touched (nothing else yet: it is waiting for a ring)
  game.target({
    id: 'hookSwing', radius: 40,
    enabled: () => !game.ropeway.load && game.phase === 'start',
    anchor: () => game.ropeway.hookPos,
    pick: (sx, sy) => game.input.distToPoint(sx, sy, game.ropeway.hookPos) + 8,
    down: () => { game.ropeway.swayV += 1.6; sound.clink(game.pan(game.ropeway.hookPos), 0.8, 0.12); },
    up: () => {},
  });

  // --- fork dominoes (driven here, consequences owned by the route modules)
  const landD2 = () => game.routeA.d2Land();
  const tip2 = new TipController(game, d2, {
    allowed: 1, pan: () => game.pan(d2.pos), land: () => game.routeA.d2LandAngle,
    onStart: () => { game.chooseRoute('A'); sound.loop('creak').set(0.4, game.pan(d2.pos)); },
    onLand: (dir, v) => { sound.loop('creak').set(0); landD2(v); },
    onRest: () => game.routeA.d2Rest(),
  });
  const tip3 = new TipController(game, d3, {
    allowed: 1, pan: () => game.pan(d3.pos), land: () => game.routeB.d3LandAngle,
    onStart: () => { game.chooseRoute('B'); sound.loop('creak').set(0.4, game.pan(d3.pos)); },
    onLand: (dir, v) => { sound.loop('creak').set(0); game.routeB.d3Land(v); },
    onRest: () => game.routeB.d3Rest(),
  });
  game.tip2 = tip2; game.tip3 = tip3;
  const forkLocked = () => game.phase === 'start';
  game.onUpdate((dt) => { if (!tip2.fallen) tip2.update(dt); if (!tip3.fallen) tip3.update(dt); });
  pushTarget(game, 'D2', d2, tip2, { locked: forkLocked, radius: 60 });
  pushTarget(game, 'D3', d3, tip3, { locked: forkLocked, radius: 60 });

  // route choice: the first fork domino to fall decides; a second one is a spare
  game.chooseRoute = (r) => {
    if (!S.route) {
      S.route = r; game.fact('route', { route: r });
      if (r === 'B' && game.crane) { game.crane.targetTx = 30 - L.seamX; game.crane.targetLen = 1.2; } // the high-road crane rolls away
      girl.lookAt(() => (r === 'A' ? d2 : d3).worldPoint(V3(0, DOM.H / 2, 0)), 3);
    } else if (S.route !== r) { S.spare.push(r === 'A' ? 'D2' : 'D3'); game.fact('spare', { id: r === 'A' ? 'D2' : 'D3' }); }
  };

  // --- phases --------------------------------------------------------------
  let hintN = 0, hintT = 0, arrived = false;
  game.phases.start = {
    enter() {
      girl.place(V3(L.girlStartX, 0, 0)); girl.yaw = girl.targetYaw = Math.PI / 2;
      girl.walk([V3(L.girlWaitX, 0, 0)], () => { arrived = true; girl.lookAt(V3(L.ditchX0 + 1, -1.5, 0), 1.6); girl.emote('peer', 1.6); game.after(1.7, () => girl.lookAt(() => d1.worldPoint(V3(0, 1.2, 0)), 3)); }, 1.15);
      game.shot({ center: V3(-5.0, 1.2, 0), w: 13, h: 7.5, az: -0.2, el: 0.3, wP: 8.6, hP: 13, elP: 0.42, pOffset: V3(0.8, 0.2, 0) });
    },
    update(dt) {
      if (S.d1.state !== 'standing') {
        // follow her across the new bridge toward the fork
        if (this.crossing && girl.path) game.shot({ center: V3(girl.position.x + 2.2, 1.3, 0.2), w: 13, h: 7.8, az: -0.22, el: 0.28, wP: 8.8, hP: 14, elP: 0.4, pOffset: V3(1, 0.4, 0) }, 1.4);
        if (tip1.mode === 'down' && !this.crossing && game.phaseT > 0) {
          this.crossing = true;
          game.after(0.5, () => {
            girl.setMode('idle'); girl.emote('surprise', 1.0);
            girl.lookAt(() => game.ropeway.hookPos, 1.8);
            game.after(1.3, () => {
              girl.walk([V3(-5.55, 0, 0.3), V3(-4.85, 0.55, 0.3), V3(-2.1, 0.55, 0.3), V3(-1.4, 0, 0.35), V3(0.9, 0, 0.55)], () => game.go('fork'), 1.5);
            });
          });
        }
        return;
      }
      // the first domino is never quite still: a breath of wind rocks it on its edge
      if (tip1.mode === 'stand' && Math.floor(game.phaseT / 3.7) !== Math.floor((game.phaseT - dt) / 3.7)) {
        tip1.rock(0.07 + 0.04 * Math.sin(game.phaseT));
        sound.loop('creak').set(0.18, game.pan(d1.pos)); game.after(0.5, () => sound.loop('creak').set(0));
      }
      // wordless hints: brace and strain, look at the player, the wind rocks the domino
      if (!arrived || tip1.mode !== 'stand') { hintT = 0; return; }
      if (game.input.active) { hintT = 0; return; }
      hintT += dt;
      if (hintT > (hintN === 0 ? 2.6 : 6.5)) {
        hintT = 0; hintN++;
        if (hintN % 2 === 1) {
          girl.faceWorldX(1); girl.setMode('strain');
          tip1.rock(0.09); game.after(0.45, () => tip1.rock(0.05));
          game.after(1.7, () => { if (girl.mode === 'strain') { girl.setMode('idle'); girl.faceCamera(); girl.lookAt(() => game.camera.position, 1.6); } });
          game.after(3.3, () => { if (tip1.mode === 'stand') girl.faceWorldX(1); });
        } else {
          tip1.rock(0.16); sound.loop('creak').set(0.35, game.pan(d1.pos)); game.after(0.7, () => sound.loop('creak').set(0));
          girl.lookAt(() => d1.worldPoint(V3(0, 1.4, 0)), 2);
        }
      }
    },
  };
  game.phases.fork = {
    enter() {
      game.shot({ center: V3(3.4, 1.4, 0.2), w: 13.5, h: 8.5, az: -0.26, el: 0.22, wP: 9.2, hP: 15, pOffset: V3(0.8, 0.8, 0) });
      this.first = S.prevRoute === 'A' ? d3 : S.prevRoute === 'B' ? d2 : d3;
      this.second = this.first === d3 ? d2 : d3; this.t = 0; this.n = 0;
      girl.lookAt(() => this.first.worldPoint(V3(0, 1.2, 0)), 2);
      if (S.prevRoute) (this.first === d2 ? tip2 : tip3).rock(0.12); // replay: the other path stirs first
    },
    update(dt) {
      if (S.route) return;
      this.t += dt;
      if (game.input.active) { this.t = Math.min(this.t, 1.5); return; }
      const gaze = Math.floor(this.t / 1.9) % 2 === 0 ? this.first : this.second;
      if (girl.lookT <= 0) girl.lookAt(() => gaze.worldPoint(V3(0, 1.2, 0)), 1.9);
      if (this.t > 5 + this.n * 6) {
        this.n++;
        const d = this.n % 2 ? this.first : this.second;
        (d === d2 ? tip2 : tip3).rock(0.14); sound.loop('creak').set(0.3, game.pan(d.pos)); game.after(0.6, () => sound.loop('creak').set(0));
        girl.emote('point', 1.4); girl.lookAt(() => d.worldPoint(V3(0, 1.2, 0)), 2.2);
      }
    },
  };
}
