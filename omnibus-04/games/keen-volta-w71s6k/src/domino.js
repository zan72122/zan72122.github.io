// A giant domino with a persistent physical identity: pips, painted band,
// scratches, chips and a brass lifting ring. Pose is the centre transform;
// all motion (tipping, hanging, sliding) is expressed as pivot rotations.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';
import { dominoFace, dominoSide, plainIvory } from './textures.js';
import { DOM } from './layout.js';
import { pivotPose } from './util.js';

let _ivoryEnd = null, _brass = null;
export function brassMat() {
  if (!_brass) _brass = new THREE.MeshStandardMaterial({ color: 0xc79a3e, metalness: 0.85, roughness: 0.32 });
  return _brass;
}

export class Domino {
  constructor(spec) {
    this.spec = spec; this.id = spec.id;
    const T = (this.T = spec.T ?? DOM.T), H = (this.H = spec.H ?? DOM.H), W = (this.W = spec.W ?? DOM.W);
    this.facts = [];                       // persistent history (fell, hooked, stood, ...)
    this.root = new THREE.Group(); this.root.name = spec.id;
    const geo = new RoundedBoxGeometry(T, H, W, spec.big ? 3 : 2, Math.min(T, W) * (spec.round ?? 0.16));
    const big = !!spec.big;
    this.faceTex = dominoFace(spec.id, { w: W, h: H, pips: spec.pips || [0, 0], marks: spec.marks, seed: spec.seed, big, pipR: spec.pipR, tint: spec.tint });
    this.sideTex = dominoSide({ band: spec.band, bandV: spec.bandV, marks: spec.marks, seed: spec.seed, big, tint: spec.tint });
    if (!_ivoryEnd) _ivoryEnd = plainIvory(9);
    const mk = (map, rough = 0.5) => new THREE.MeshStandardMaterial({ map, roughness: rough, metalness: 0.0 });
    const backTex = spec.backTex || _ivoryEnd;
    this.mats = [mk(backTex, 0.55), mk(this.faceTex, 0.42), mk(_ivoryEnd, 0.55), mk(_ivoryEnd, 0.6), mk(this.sideTex, 0.48), mk(this.sideTex, 0.48)];
    this.mesh = new THREE.Mesh(geo, this.mats);
    this.mesh.castShadow = true; this.mesh.receiveShadow = true;
    this.root.add(this.mesh);
    if (spec.ring !== false) this._addRing(spec.ringScale || 1);
    this.pos = new THREE.Vector3(); this.quat = new THREE.Quaternion();
    this.restPos = new THREE.Vector3(); this.restQuat = new THREE.Quaternion();
  }

  _addRing(s) {
    const g = new THREE.Group();
    const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.13 * s, 0.15 * s, 0.05 * s, 12), brassMat());
    plate.position.y = this.H / 2 + 0.02 * s; g.add(plate);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.17 * s, 0.045 * s, 8, 20), brassMat());
    ring.position.y = this.H / 2 + 0.2 * s; ring.castShadow = true; g.add(ring);
    this.ring = ring; this.ringGroup = g; this.root.add(g);
  }

  // Ring centre in the domino's local frame.
  get ringLocal() { return new THREE.Vector3(0, this.H / 2 + 0.2 * (this.spec.ringScale || 1), 0); }

  setPose(p, q) {
    this.pos.copy(p); this.quat.copy(q);
    this.root.position.copy(p); this.root.quaternion.copy(q);
  }
  setRest(p, q) { this.restPos.copy(p); this.restQuat.copy(q); this.setPose(p, q); }
  // Rotate the rest pose about a pivot (world space of the parent).
  pivotFromRest(pivot, axis, angle) {
    pivotPose(this.restPos, this.restQuat, pivot, axis, angle, this.pos, this.quat);
    this.root.position.copy(this.pos); this.root.quaternion.copy(this.quat);
  }
  // Point on/in the domino (local coords) to parent space.
  toParent(local, out = new THREE.Vector3()) {
    return out.copy(local).applyQuaternion(this.quat).add(this.pos);
  }
  worldRing(out = new THREE.Vector3()) {
    this.root.updateWorldMatrix(true, false);
    return out.copy(this.ringLocal).applyMatrix4(this.root.matrixWorld);
  }
  worldPoint(local, out = new THREE.Vector3()) {
    this.root.updateWorldMatrix(true, false);
    return out.copy(local).applyMatrix4(this.root.matrixWorld);
  }

  // A new permanent mark. kind: 'chip' | 'scratch' | 'smudge'
  addMark(kind, m) {
    const marks = (this.spec.marks = this.spec.marks || {});
    const key = kind === 'chip' ? 'sideChips' : kind === 'scratch' ? 'scratches' : 'smudges';
    (marks[key] = marks[key] || []).push(m);
    if (kind === 'chip' && m.face) (marks.chips = marks.chips || []).push(m.face);
    this.faceTex.userData.draw(); this.sideTex.userData.draw();
    this.facts.push({ t: 'mark', kind });
  }
  fact(t, data = {}) { this.facts.push({ t, ...data }); }
}

// Identity catalogue. Pips/band/scratches never change except by physical events.
export const IDENTITIES = {
  D1: { pips: [1, 6], band: '#c43a28', seed: 101,
        marks: { scratches: [{ pts: [[0.18, 0.62], [0.52, 0.7], [0.86, 0.83]], w: 3 }],
                 sideScratches: [{ pts: [[0.2, 0.5], [0.7, 0.56]], w: 2 }] } },
  D2: { pips: [3, 5], band: '#3a6db3', seed: 202,
        marks: { scratches: [{ pts: [[0.3, 0.2], [0.5, 0.3]], w: 3 }, { pts: [[0.55, 0.18], [0.35, 0.32]], w: 3 }],
                 smudges: [{ u: 0.8, v: 0.9, r: 0.25, color: 'rgba(90,110,140,0.25)' }] } },
  D3: { pips: [2, 4], band: '#4f8a45', seed: 303,
        marks: { scratches: [{ pts: [[0.1, 0.35], [0.3, 0.4], [0.45, 0.37], [0.62, 0.45]], w: 2.5 }],
                 smudges: [{ u: 0.2, v: 0.96, r: 0.3, color: 'rgba(80,110,50,0.35)' }] } },
  ROOF: { pips: [4, 4], band: '#b8862e', seed: 404, marks: {} },
};
