// The ropeway: a long cable from the ditch to the town station. Its hook
// catches D1's ring when D1 falls (opening) and later, pulled from the town,
// it hoists that very domino out of the ditch and carries it up the cable.
import * as THREE from 'three';
import { L, TOWN_Y } from './layout.js';
import { Rope, makeHook } from './rope.js';
import { Hanger } from './hang.js';
import { MATS, terrainHeight } from './world.js';
import { tl } from './town.js';
import { sound } from './audio.js';
import { clamp, damp } from './util.js';

export class Ropeway {
  constructor(game) {
    this.g = game; const scene = game.scene;
    this.A = new THREE.Vector3(L.ropeA.x, L.ropeA.y, L.ropeA.z);
    this.Blocal = tl(L.ropeB.x, L.ropeB.y, L.ropeB.z);
    this.B = new THREE.Vector3();
    // anchor pole with an arm reaching over the path
    const pole = new THREE.Mesh(new THREE.BoxGeometry(0.18, L.ropeA.y + 0.5, 0.18), MATS.darkWood);
    pole.position.set(L.ropeA.x + 0.25, (L.ropeA.y + 0.5) / 2, -1.25); pole.castShadow = true; scene.add(pole);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 1.5), MATS.darkWood); arm.position.set(L.ropeA.x + 0.25, L.ropeA.y + 0.35, -0.55); scene.add(arm);
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.06, 6, 16), MATS.iron); wheel.position.copy(this.A).add(new THREE.Vector3(-0.2, 0.1, 0)); scene.add(wheel);
    this.cable = new Rope(scene, { width: 0.055, color: 0x55504a, metal: true, segments: 30 });
    this.carriage = new THREE.Group(); scene.add(this.carriage);
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.3, 0.22), MATS.iron); body.position.y = -0.2; this.carriage.add(body);
    for (const dx of [-0.2, 0.2]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.08, 10), MATS.iron); w.rotation.x = Math.PI / 2; w.position.set(dx, 0, 0); this.carriage.add(w); }
    this.carriage.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.hookRope = new Rope(scene, { width: 0.035, color: 0x4d4843, metal: true, segments: 6 });
    this.hook = makeHook(MATS.iron, 1.3); scene.add(this.hook);
    this.s = 0; this.hookLen = L.hookRestLen; this.stage = 'idle'; this.load = null; this.sway = 0; this.swayV = 0;
    this.hookPos = new THREE.Vector3(); this.pulled = 0; this.seatTarget = null; this.onSeat = null;
    this.pullRope = null; this.knots = [];
  }
  cableAt(s, out = new THREE.Vector3()) {
    out.lerpVectors(this.A, this.B, s); out.y -= 4 * s * (1 - s) * 0.45; return out;
  }
  // D1 has landed with its ring right under the dangling hook.
  catch(dom) {
    const ring = dom.worldRing(new THREE.Vector3());
    this.load = new Hanger(dom, terrainHeight, { phi: Math.PI / 2, onThud: (w) => this._thud(w) });
    this.load.ring.copy(ring); this.load.prevRing = ring.clone();
    const c = this.cableAt(0); this.hookLen = c.y - ring.y - 0.12; this.hookX = ring.x;
    this.stage = 'loaded'; sound.clink(this.g.pan(ring), 1, 0.4);
  }
  _thud(w) {
    const p = this.load.bottom(new THREE.Vector3());
    sound.impact(clamp(w * 0.35, 0.3, 1), this.g.pan(p), 'domino'); this.g.dust.puff(p, 8, 0.9, 0.8); this.g.rig.shake(0.1 * w);
  }
  // Consume pulled rope (metres). Returns true while there is more to do.
  pull(dm) {
    if (dm <= 0 || this.stage === 'seated' || !this.load) return;
    this.pulled += dm;
    if (this.stage === 'loaded') this.stage = 'hoist';
    if (this.stage === 'hoist') {
      this.hookLen -= dm * 1.7;
      if (this.hookLen <= 1.25) { this.hookLen = 1.25; this.stage = 'travel'; }
    } else if (this.stage === 'travel') {
      this.s += (dm * 2.6) / this.A.distanceTo(this.B);
      if (this.s >= 1) { this.s = 1; this.stage = 'lower'; sound.impact(0.3, this.g.pan(this.B), 'metal'); }
    } else if (this.stage === 'lower') {
      this.hookLen += dm * 1.4;
    }
    if (Math.random() < 0.35) sound.squeak(this.g.pan(this.hookPos), 0.06);
  }
  update(dt) {
    this.g.town.group.updateWorldMatrix(true, false);
    this.B.copy(this.Blocal).applyMatrix4(this.g.town.group.matrixWorld);
    const c = this.cableAt(this.s);
    // cable drawn with a slight sag, carriage sits on it
    this.cable.set(this.A, this.B, 0.35);
    this.carriage.position.copy(c);
    const dir = new THREE.Vector3().subVectors(this.B, this.A).normalize();
    this.carriage.rotation.z = Math.atan2(dir.y, Math.hypot(dir.x, dir.z)); this.carriage.rotation.y = -Math.atan2(dir.z, dir.x);
    if (!this.load) {
      // free hook sways gently in the wind
      this.swayV += (-4 * this.sway - 0.6 * this.swayV + Math.sin(this.g.time * 0.9) * 0.06) * dt; this.sway += this.swayV * dt;
      this.hookPos.set(c.x + Math.sin(this.sway) * this.hookLen * 0.15, c.y - this.hookLen, c.z);
    } else if (this.stage === 'seated') {
      this.hookLen = damp(this.hookLen, 1.0, 2, dt);
      this.hookPos.set(c.x, c.y - this.hookLen, c.z);
    } else {
      const ring = new THREE.Vector3(c.x, c.y - this.hookLen - 0.12, c.z);
      if (this.stage === 'loaded') ring.copy(this.load.ring);          // still a bridge: rests on both rims
      else {
        if (this.stage === 'hoist' && this.load.phi > 0.2) ring.x = damp(this.load.ring.x, c.x, 3, dt);
        this.load.update(dt, ring);
      }
      this.hookPos.copy(this.load.ring).add(new THREE.Vector3(0, 0.12, 0));
      if (this.stage === 'lower' && this.seatTarget) {
        const b = this.load.bottom(new THREE.Vector3());
        const seatY = this.seatTarget.y();
        if (b.y <= seatY + 0.35) { this.stage = 'seated'; this.onSeat && this.onSeat(); }
      }
    }
    this.hook.position.copy(this.hookPos).add(new THREE.Vector3(0, 0.02, 0));
    this.hookRope.set(c.clone().add(new THREE.Vector3(0, -0.3, 0)), this.hookPos.clone().add(new THREE.Vector3(0, 0.12, 0)), 0);
    const sp = this.g.rig ? this.g.pan(c) : 0;
    sound.loop('rope').set(this.stage === 'travel' || this.stage === 'hoist' ? 0.5 : 0, sp);
  }
}
