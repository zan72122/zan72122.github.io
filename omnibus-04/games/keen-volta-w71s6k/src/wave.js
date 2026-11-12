// The town wave: paving dominoes lying face-up on the colossal domino, tied
// ring-to-ring with ropes. Pulling the master rope raises the first; each one
// that rises tensions the rope to the next, and the street stands up into a
// town of tall domino houses (the reverse of a falling chain).
import * as THREE from 'three';
import { L, DOM, TOWN_Y } from './layout.js';
import { Domino } from './domino.js';
import { Rope } from './rope.js';
import { MATS } from './world.js';
import { AXIS_X, clamp, makeRng } from './util.js';
import { sound } from './audio.js';

const ROW1 = [16.7, 22.6, 25.2, 27.8, 33.9], ROW2 = [33.9, 26.4, 23.4, 16.9];
export class WaveTown {
  constructor(game) {
    this.g = game; const grp = game.town.group; const rng = makeRng(99);
    this.items = [];
    const pipChoices = [[5, 2], [3, 4], [6, 0], [1, 6], [4, 2], [2, 4], [6, 6], [3, 0], [5, 4]];
    const faceQ = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2); // pip face -> +z
    const lieQ = new THREE.Quaternion().setFromAxisAngle(AXIS_X, -Math.PI / 2).multiply(faceQ);   // lying back, face up
    const awnMat = new THREE.MeshStandardMaterial({ color: 0xb8553a, roughness: 0.85 });
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x4a3322, roughness: 0.9 });
    const lampMat = new THREE.MeshStandardMaterial({ color: 0xffdca0, emissive: 0xffb04a, emissiveIntensity: 0.7 });
    const all = [...ROW1.map((x) => [x, -2.6]), ...ROW2.map((x) => [x, -7.4])];
    all.forEach(([x, hz], i) => {
      const d = new Domino({ id: 'T' + i, pips: pipChoices[i % pipChoices.length], seed: 500 + i, band: null, tint: rng() * 0.06,
        marks: { scratches: rng() < 0.6 ? [{ pts: [[0.2 + rng() * 0.3, 0.2 + rng() * 0.5], [0.5 + rng() * 0.3, 0.3 + rng() * 0.5]], w: 2 }] : [] } });
      grp.add(d.root);
      const hinge = new THREE.Vector3(x - L.seamX, TOWN_Y, hz);
      const rest = new THREE.Vector3(x - L.seamX, TOWN_Y + DOM.T / 2, hz - DOM.H / 2);
      d.setRest(rest, lieQ);
      // door + awning + lantern on the pip face (face is local -x)
      const door = new THREE.Mesh(new THREE.BoxGeometry(0.03, 1.05, 0.62), doorMat); door.position.set(-DOM.T / 2 - 0.012, -DOM.H / 2 + 0.55, 0); d.root.add(door);
      const aw = new THREE.Group(); aw.position.set(-DOM.T / 2 - 0.02, -DOM.H / 2 + 1.25, 0); d.root.add(aw);
      const awMesh = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.05, 0.95), awnMat); awMesh.position.x = -0.31; awMesh.castShadow = true; aw.add(awMesh);
      const lamp = new THREE.Group(); lamp.position.set(-0.6, 0, 0.36); aw.add(lamp);
      const lm = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.2, 0.14), lampMat); lm.position.y = -0.22; lamp.add(lm);
      this.items.push({ d, hinge, a: 0, v: 0, aw, awA: 0, awV: 0, lamp, up: false });
    });
    // ropes ring-to-ring, plus a master rope over a pulley post to the first ring
    this.ropes = [];
    for (let i = 0; i < this.items.length - 1; i++) this.ropes.push(new Rope(grp, { width: 0.045, color: 0xc4a878, segments: 12 }));
    this.pulley = new THREE.Vector3(17.5 - L.seamX, TOWN_Y + 7.4, -1.2);
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.24, 7.6, 0.24), MATS.wood); post.position.set(this.pulley.x + 0.2, TOWN_Y + 3.8, this.pulley.z); post.castShadow = true; grp.add(post);
    const pw = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.06, 6, 14), MATS.iron); pw.position.copy(this.pulley); grp.add(pw);
    this.master = new Rope(grp, { width: 0.06, color: 0xc9ad7c, segments: 10 });
    this.handleTop = this.pulley.clone(); this.handleLen = 5.6;
    this.handle = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.45, 8), MATS.darkWood); this.handle.rotation.z = Math.PI / 2; grp.add(this.handle);
    this.P = 0; this.done = false; this.onDone = null; this.lastUp = -1;
  }
  get N() { return this.items.length; }
  handleLocal() { return new THREE.Vector3(this.pulley.x - 0.35, this.pulley.y - this.handleLen, this.pulley.z + 0.2); }
  pull(d) { if (!this.done) this.P = Math.min(1, this.P + d); }
  update(dt) {
    const N = this.N;
    this.items.forEach((it, k) => {
      const want = clamp((this.P * (N + 0.8) - k) / 1.25, 0, 1) * (Math.PI / 2);
      if (it.up) return this._decor(it, dt);
      // rope tension drives the angle; past the balance point it settles upright
      it.v += (30 * (want - it.a) - 7 * it.v) * dt; it.a += it.v * dt; it.a = clamp(it.a, 0, Math.PI / 2);
      if (it.a >= Math.PI / 2 - 0.004) {
        it.a = Math.PI / 2; it.up = true; it.d.fact('stood', { as: 'house' });
        const w = this.g.town.group.localToWorld(it.hinge.clone());
        sound.impact(0.55, this.g.pan(w), 'domino'); sound.latch(this.g.pan(w)); this.g.dust.puff(w, 6, 1, 0.6);
        this.lastUp = k;
      }
      it.d.pivotFromRest(it.hinge, AXIS_X, it.a);
      this._decor(it, dt);
    });
    // ropes between rings; slack sags, tension straightens
    for (let i = 0; i < this.ropes.length; i++) {
      const a = this.items[i].d.toParent(this.items[i].d.ringLocal), b = this.items[i + 1].d.toParent(this.items[i + 1].d.ringLocal);
      const slack = Math.max(0, 1.2 - (this.items[i].a - this.items[i + 1].a) * 1.5) * (this.items[i + 1].up ? 0.2 : 1);
      this.ropes[i].set(a, b, slack);
    }
    this.handleLen = 5.6 - this.P * 1.5;
    const h = this.handleLocal(); this.handle.position.copy(h);
    const r1 = this.items[0].d.toParent(this.items[0].d.ringLocal);
    this.master.setPoints([h, this.pulley.clone(), r1]);
    if (!this.done && this.items.every((i) => i.up)) { this.done = true; this.onDone && this.onDone(); }
  }
  _decor(it, dt) {
    // awning falls open by gravity once the face is vertical; lantern swings
    const openTo = it.a > 1.25 ? 1 : 0;
    it.awV += ((openTo ? 9 : 30) * (openTo - it.awA) - 2.2 * it.awV) * dt; it.awA += it.awV * dt;
    if (it.awA > 1) { it.awA = 1; if (it.awV > 0.6) sound.tick(0, 700, 0.12, 0.05); it.awV *= -0.35; }
    it.aw.rotation.z = -Math.PI / 2 + it.awA * 1.92;           // folded up against the face -> open, chains stop it
    it.lamp.rotation.z = -it.aw.rotation.z + Math.sin(this.g.time * 1.3 + it.hinge.x) * 0.05;
  }
}
