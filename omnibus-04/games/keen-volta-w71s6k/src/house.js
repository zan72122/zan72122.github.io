// House #1: a carrier (timber sled for the high road, rail cart for the low
// road) with two wall slots. A fixed timber portal in the building yard holds
// the roof domino on its side on a hinge; once both walls stand, it can be
// pushed over onto them and then belongs to the house.
import * as THREE from 'three';
import { DOM, L } from './layout.js';
import { Domino, IDENTITIES, brassMat } from './domino.js';
import { MATS } from './world.js';
import { AXIS_X, clamp } from './util.js';
import { sound } from './audio.js';

export const CARRIERS = {
  sled: { len: 3.6, deckTop: 0.3, W1: -L.wallDX, W2: L.wallDX, center: 0 },
  cart: { len: 4.0, deckTop: L.cartDeck, W1: -1.725, W2: 0.375, center: -0.675 },
};

export class House {
  constructor(game, kind, parent, x, baseY, z = L.pathZ) {
    this.g = game; this.kind = kind; const C = (this.spec = CARRIERS[kind]);
    this.group = new THREE.Group(); this.group.position.set(x, baseY, z); parent.add(this.group);
    const G = this.group, add = (m) => { m.castShadow = true; m.receiveShadow = true; G.add(m); return m; };
    this.deckTop = C.deckTop;
    if (kind === 'sled') {
      add(new THREE.Mesh(new THREE.BoxGeometry(C.len, 0.22, 1.95), MATS.wood)).position.y = 0.19;
      for (const dz of [-0.7, 0.7]) { const r = add(new THREE.Mesh(new THREE.BoxGeometry(C.len + 0.3, 0.1, 0.18), MATS.darkWood)); r.position.set(0, 0.05, dz); }
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.05, 8, 18), brassMat()); ring.position.set(C.len / 2 + 0.15, 0.36, 0); ring.castShadow = true; G.add(ring); this.frontRing = ring;
      const eye = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.18, 0.3), MATS.iron); eye.position.set(C.len / 2 + 0.02, 0.22, 0); G.add(eye);
    } else {
      add(new THREE.Mesh(new THREE.BoxGeometry(C.len, 0.2, 1.9), MATS.wood)).position.y = this.deckTop - 0.1;
      const fr = add(new THREE.Mesh(new THREE.BoxGeometry(C.len - 0.3, 0.16, 1.2), MATS.iron)); fr.position.y = this.deckTop - 0.28;
      this.wheels = [];
      for (const dx of [-1.35, 1.35]) for (const dz of [-0.62, 0.62]) {
        const w = add(new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.12, 14), MATS.iron)); w.rotation.x = Math.PI / 2; w.position.set(dx, 0.43, dz); this.wheels.push(w);
        w.add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.13), MATS.darkWood));
      }
      for (const dx of [-C.len / 2 - 0.02, C.len / 2 + 0.02]) { const b = add(new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.34, 1.3), MATS.darkWood)); b.position.set(dx, this.deckTop - 0.12, 0); }
    }
    this.slotDepth = 0.2;
    this.wallTop = this.deckTop - this.slotDepth + DOM.H;
    const slotMat = new THREE.MeshStandardMaterial({ color: 0x3a2a1c, roughness: 1 });
    this.slots = { W1: new THREE.Vector3(C.W1, this.deckTop - this.slotDepth, 0), W2: new THREE.Vector3(C.W2, this.deckTop - this.slotDepth, 0) };
    for (const k of ['W1', 'W2']) { const s = new THREE.Mesh(new THREE.BoxGeometry(DOM.T + 0.08, 0.02, DOM.W + 0.08), slotMat); s.position.set(this.slots[k].x, this.deckTop + 0.005, 0); G.add(s); }
    this.walls = { W1: null, W2: null }; this.roof = null; this.onFull = null;
  }
  get full() { return !!(this.walls.W1 && this.walls.W2); }
  slotWorld(slot) { return this.group.localToWorld(this.slots[slot].clone()); }
  seat(slot, dom) {
    this.group.attach(dom.root);
    const p = this.slots[slot].clone().add(new THREE.Vector3(0, DOM.H / 2, 0));
    dom.setRest(p, new THREE.Quaternion());
    this.walls[slot] = dom; dom.fact('stood', { as: 'wall', slot, carrier: this.kind });
    const w = this.group.localToWorld(p.clone());
    sound.impact(0.7, this.g.pan(w), 'domino'); sound.latch(this.g.pan(w)); this.g.dust.puff(w.setY(w.y - DOM.H / 2 + 0.1), 6, 0.8, 0.6);
    this.g.rig.shake(0.18);
    if (this.full && this.onFull) this.onFull();
  }
}

// Timber portal in the yard with the roof domino standing on its side on a hinge.
export class RoofPortal {
  constructor(game, parent, x, wallTop, z = L.pathZ) {
    this.g = game; this.wallTop = wallTop;
    this.group = new THREE.Group(); this.group.position.set(x, 0, z); parent.add(this.group);
    const G = this.group, add = (m) => { m.castShadow = true; m.receiveShadow = true; G.add(m); return m; };
    const y0 = L.cd.y1;
    for (const dx of [-1.62, 1.62]) { const p = add(new THREE.Mesh(new THREE.BoxGeometry(0.16, wallTop - y0, 0.16), MATS.darkWood)); p.position.set(dx, (wallTop + y0) / 2, -1.55); }
    const cb = add(new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.16, 0.16), MATS.darkWood)); cb.position.set(0, wallTop - 0.08, -1.55);
    for (const dx of [-1.2, 1.2]) { const br = add(new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.72), MATS.iron)); br.position.set(dx, wallTop - 0.05, -1.2); }
    this.roof = new Domino({ id: 'ROOF', ...structuredClone(IDENTITIES.ROOF) });
    G.add(this.roof.root);
    const m = new THREE.Matrix4().makeBasis(new THREE.Vector3(0, 0, -1), new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, -1, 0));
    this.roof.setRest(new THREE.Vector3(0, wallTop + DOM.W / 2, -DOM.W / 2 - DOM.T / 2), new THREE.Quaternion().setFromRotationMatrix(m));
    this.hinge = new THREE.Vector3(0, wallTop, -DOM.W / 2);
    this.flap = 0; this.flapV = 0; this.mode = 'latched'; this.target = 0; this.onRoof = null;
  }
  unlatch() { if (this.mode === 'latched') { this.mode = 'free'; this.flapV = 0.4; sound.latch(this.g.pan(this.worldHinge())); } }
  worldHinge() { return this.group.localToWorld(this.hinge.clone()); }
  hold(target) { if (this.mode === 'free' || this.mode === 'held') { this.mode = 'held'; this.target = clamp(target, -0.05, 1.3); } }
  release(fingerVel) {
    if (this.mode !== 'held') return;
    if (this.flap > 0.2 || fingerVel > 0.25) { this.mode = 'falling'; this.flapV = Math.max(this.flapV, 0.8); } else this.mode = 'free';
  }
  nudge() { if (this.mode === 'free' || this.mode === 'held') { this.mode = 'falling'; this.flap = Math.max(this.flap, 0.36); this.flapV = 1; } }
  update(dt) {
    if (this.mode === 'roof') return;
    const tipA = Math.atan(DOM.T / DOM.W), K = (7.2 * 3) / (4 * 0.5 * Math.hypot(DOM.T, DOM.W));
    const grav = K * Math.sin(this.flap - tipA);
    if (this.mode === 'latched') this.flap = 0;
    else if (this.mode === 'free') {
      this.flapV += (grav - 5 * this.flapV) * dt; this.flap += this.flapV * dt;
      if (this.flap < 0) { this.flap = 0; this.flapV *= -0.3; } if (this.flap > tipA * 0.9) { this.flap = tipA * 0.9; this.flapV = -Math.abs(this.flapV) * 0.3; }
    } else if (this.mode === 'held') {
      this.flapV += (60 * (this.target - this.flap) - 12 * this.flapV) * dt; this.flap += this.flapV * dt;
      if (this.flap > tipA * 1.8) this.mode = 'falling';
    } else if (this.mode === 'falling') {
      this.flapV += grav * dt; this.flap += this.flapV * dt;
      if (this.flap >= Math.PI / 2) {
        this.flap = Math.PI / 2; this.mode = 'roof';
        this.roof.pivotFromRest(this.hinge, AXIS_X, this.flap);
        const w = this.worldHinge().add(new THREE.Vector3(0, 0, DOM.W / 2));
        sound.impact(0.9, this.g.pan(w), 'domino'); this.g.rig.shake(0.3); this.g.dust.puff(w, 10, 1.4, 0.8);
        this.roof.fact('fell', { as: 'roof' }); this.onRoof && this.onRoof(this.roof);
        return;
      }
    }
    this.roof.pivotFromRest(this.hinge, AXIS_X, this.flap);
  }
}
