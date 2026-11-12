// A four-year-old in a yellow raincoat and rain boots. Built from SDF primitives
// (separate meshes per material), with finger bones for close-up hand moments.
import * as THREE from '../../lib/three.module.js';
import { buildSdfGeometry, buildSkeleton } from './sdfmesh.js';
import { makeCoatMaterial } from './materials.js';

// ------------------------------------------------------------------ skeleton
const FINGERS = [
  // name, knuckle z, lengths, radius
  ['f1', 0.021, [0.022, 0.019], 0.0068],
  ['f2', 0.007, [0.025, 0.021], 0.007],
  ['f3', -0.007, [0.023, 0.02], 0.0067],
  ['f4', -0.02, [0.018, 0.016], 0.006],
];

function armSpecs(side) {
  const s = side === 'L' ? 1 : -1;
  const X = (p) => [p[0] * s, p[1], p[2]];
  const out = [
    { name: 'clav' + side, parent: 'chest', head: X([0.025, 0.775, -0.005]), tail: X([0.105, 0.775, -0.005]) },
    { name: 'uarm' + side, parent: 'clav' + side, head: X([0.105, 0.775, -0.005]), tail: X([0.155, 0.63, 0.0]) },
    { name: 'farm' + side, parent: 'uarm' + side, head: X([0.155, 0.63, 0.0]), tail: X([0.185, 0.5, 0.012]) },
    { name: 'hand' + side, parent: 'farm' + side, head: X([0.185, 0.5, 0.012]), tail: X([0.19, 0.44, 0.012]) },
  ];
  for (const [f, z, L] of FINGERS) {
    const k = [0.19, 0.432, z];
    const m = [0.19, 0.432 - L[0], z];
    const t = [0.19, 0.432 - L[0] - L[1], z];
    out.push({ name: f + 'a' + side, parent: 'hand' + side, head: X(k), tail: X(m) });
    out.push({ name: f + 'b' + side, parent: f + 'a' + side, head: X(m), tail: X(t) });
  }
  out.push({ name: 'th' + 'a' + side, parent: 'hand' + side, head: X([0.182, 0.475, 0.03]), tail: X([0.177, 0.452, 0.047]) });
  out.push({ name: 'th' + 'b' + side, parent: 'tha' + side, head: X([0.177, 0.452, 0.047]), tail: X([0.174, 0.432, 0.057]) });
  out.push({ name: 'thigh' + side, parent: 'hips', head: X([0.058, 0.5, 0.0]), tail: X([0.068, 0.285, 0.012]) });
  out.push({ name: 'shin' + side, parent: 'thigh' + side, head: X([0.068, 0.285, 0.012]), tail: X([0.07, 0.07, -0.005]) });
  out.push({ name: 'foot' + side, parent: 'shin' + side, head: X([0.07, 0.07, -0.005]), tail: X([0.07, 0.02, 0.09]) });
  return out;
}

export const CHILD_BONES = [
  { name: 'root', head: [0, 0, 0], tail: [0, 0.1, 0] },
  { name: 'hips', parent: 'root', head: [0, 0.52, 0], tail: [0, 0.6, 0] },
  { name: 'spine', parent: 'hips', head: [0, 0.58, 0], tail: [0, 0.7, 0] },
  { name: 'chest', parent: 'spine', head: [0, 0.69, 0], tail: [0, 0.8, 0] },
  { name: 'neck', parent: 'chest', head: [0, 0.8, 0], tail: [0, 0.845, 0.005] },
  { name: 'head', parent: 'neck', head: [0, 0.845, 0.005], tail: [0, 1.02, 0.005] },
  ...armSpecs('L'),
  ...armSpecs('R'),
];

// ------------------------------------------------------------------ shapes
const SKIN_TINT = [1, 1, 1];
const CHEEK = [1.0, 0.82, 0.8];

function mirror(list) {
  const out = [];
  for (const p of list) {
    out.push(p);
    const q = { ...p };
    for (const k of ['a', 'b', 'c']) if (q[k]) q[k] = [-q[k][0], q[k][1], q[k][2]];
    if (q.rot) q.rot = [q.rot[0], -q.rot[1], -q.rot[2]];
    if (typeof q.bone === 'string') q.bone = q.bone.replace(/L$/, 'R');
    else if (Array.isArray(q.bone)) q.bone = q.bone.map((b) => b.replace(/L$/, 'R'));
    if (q.split) q.split = { ...q.split, a: q.split.a ? [-q.split.a[0], q.split.a[1], q.split.a[2]] : undefined, b: q.split.b ? [-q.split.b[0], q.split.b[1], q.split.b[2]] : undefined };
    out.push(q);
  }
  return out;
}

function skinPrims() {
  return [
    { type: 'el', c: [0, 0.932, -0.004], r: [0.087, 0.094, 0.094], bone: 'head', k: 0.04 },
    { type: 'el', c: [0, 0.887, 0.024], r: [0.073, 0.064, 0.07], bone: 'head', k: 0.04 },
    { type: 'el', c: [0, 0.86, 0.04], r: [0.038, 0.028, 0.034], bone: 'head', k: 0.03 },
    { type: 'el', c: [0, 0.902, 0.093], r: [0.012, 0.011, 0.011], bone: 'head', k: 0.012 },
    ...mirror([
      { type: 'el', c: [0.043, 0.889, 0.066], r: [0.028, 0.024, 0.02], bone: 'head', k: 0.025, tint: CHEEK },
      { type: 'el', c: [0.087, 0.912, 0.0], r: [0.011, 0.024, 0.017], bone: 'head', k: 0.012 },
    ]),
    { type: 'rc', a: [0, 0.79, -0.005], b: [0, 0.865, 0.0], ra: 0.034, rb: 0.036, bone: ['neck', 'head'], t0: 0.3, t1: 0.9, k: 0.02 },
  ];
}

function hairPrims() {
  return [
    { type: 'el', c: [0, 0.94, -0.012], r: [0.093, 0.097, 0.098], bone: 'head', k: 0.025, flow: [0, -1, 0.2] },
    { type: 'el', c: [0, 0.968, 0.058], r: [0.074, 0.03, 0.036], bone: 'head', k: 0.025, flow: [0, -0.6, 1] },
    ...mirror([{ type: 'el', c: [0.07, 0.89, -0.014], r: [0.03, 0.06, 0.068], bone: 'head', k: 0.03, flow: [0, -1, 0] }]),
    { type: 'el', c: [0, 0.888, -0.058], r: [0.078, 0.066, 0.05], bone: 'head', k: 0.03, flow: [0, -1, -0.2] },
    // face opening
    { type: 'el', c: [0, 0.872, 0.085], r: [0.07, 0.072, 0.075], bone: 'head', sub: true, k: 0.018 },
  ];
}

function coatPrims() {
  return [
    { type: 'el', c: [0, 0.655, 0.0], r: [0.112, 0.15, 0.084], bone: ['spine', 'chest'], split: { a: [0, 0.56, 0], b: [0, 0.76, 0] }, k: 0.05 },
    { type: 'el', c: [0, 0.725, 0.006], r: [0.118, 0.075, 0.086], bone: 'chest', k: 0.05 },
    ...mirror([{ type: 'el', c: [0.085, 0.762, -0.004], r: [0.055, 0.042, 0.055], bone: 'chest', k: 0.04 }]),
    { type: 'rc', a: [0, 0.6, 0], b: [0, 0.4, 0.004], ra: 0.118, rb: 0.135, bone: ['spine', 'hips'], t0: 0.0, t1: 0.5, k: 0.05 },
    { type: 'el', c: [0, 0.796, -0.002], r: [0.066, 0.024, 0.062], bone: 'chest', k: 0.02 },
    { type: 'el', c: [0, 0.79, -0.074], r: [0.085, 0.05, 0.042], bone: 'chest', k: 0.03 },
    ...mirror([
      { type: 'rc', a: [0.105, 0.772, -0.005], b: [0.155, 0.63, 0.0], ra: 0.043, rb: 0.037, bone: 'uarmL', k: 0.03 },
      { type: 'rc', a: [0.155, 0.63, 0.0], b: [0.183, 0.507, 0.012], ra: 0.037, rb: 0.035, bone: 'farmL', k: 0.025 },
      { type: 'el', c: [0.155, 0.63, 0.0], r: [0.039, 0.04, 0.039], bone: ['uarmL', 'farmL'], split: { a: [0.15, 0.66, 0], b: [0.16, 0.6, 0] }, k: 0.02 },
      { type: 'el', c: [0.184, 0.508, 0.012], r: [0.037, 0.016, 0.037], bone: 'farmL', k: 0.015 },
    ]),
  ];
}

function legPrims() {
  return mirror([
    { type: 'rc', a: [0.058, 0.5, 0.0], b: [0.068, 0.285, 0.012], ra: 0.058, rb: 0.045, bone: 'thighL', k: 0.03 },
    { type: 'rc', a: [0.068, 0.285, 0.012], b: [0.07, 0.17, 0.0], ra: 0.044, rb: 0.04, bone: 'shinL', k: 0.025 },
    { type: 'el', c: [0.068, 0.285, 0.014], r: [0.045, 0.046, 0.046], bone: ['thighL', 'shinL'], split: { a: [0.068, 0.32, 0.01], b: [0.068, 0.25, 0.01] }, k: 0.02 },
    { type: 'rc', a: [0.0, 0.5, 0.0], b: [0.0, 0.47, 0.0], ra: 0.075, rb: 0.07, bone: 'hips', k: 0.04 },
  ]);
}

function bootPrims() {
  return mirror([
    { type: 'rc', a: [0.07, 0.215, -0.002], b: [0.07, 0.075, -0.004], ra: 0.05, rb: 0.047, bone: 'shinL', k: 0.02 },
    { type: 'rc', a: [0.07, 0.215, -0.002], b: [0.07, 0.24, -0.002], ra: 0.042, rb: 0.042, bone: 'shinL', sub: true, k: 0.01 },
    { type: 'el', c: [0.07, 0.045, 0.03], r: [0.046, 0.042, 0.085], bone: 'footL', k: 0.03 },
    { type: 'el', c: [0.07, 0.016, 0.03], r: [0.05, 0.016, 0.092], bone: 'footL', k: 0.015 },
  ]);
}

function handPrims(side) {
  const s = side === 'L' ? 1 : -1;
  const X = (p) => [p[0] * s, p[1], p[2]];
  const P = [
    { type: 'el', c: X([0.19, 0.458, 0.012]), r: [0.0125, 0.032, 0.029], bone: 'hand' + side, k: 0.012 },
    { type: 'rc', a: X([0.187, 0.505, 0.012]), b: X([0.19, 0.47, 0.012]), ra: 0.02, rb: 0.022, bone: 'hand' + side, k: 0.012 },
  ];
  for (const [f, z, L, r] of FINGERS) {
    P.push({ type: 'rc', a: X([0.19, 0.44, z]), b: X([0.19, 0.432 - L[0], z]), ra: r * 1.08, rb: r, bone: [f + 'a' + side, f + 'b' + side], t0: 0.85, t1: 1.0, k: 0.006 });
    P.push({ type: 'rc', a: X([0.19, 0.432 - L[0], z]), b: X([0.19, 0.432 - L[0] - L[1] + r * 0.8, z]), ra: r, rb: r * 0.92, bone: f + 'b' + side, k: 0.005 });
  }
  P.push({ type: 'rc', a: X([0.186, 0.485, 0.022]), b: X([0.177, 0.452, 0.047]), ra: 0.0095, rb: 0.0078, bone: ['tha' + side, 'thb' + side], t0: 0.8, t1: 1.0, k: 0.008 });
  P.push({ type: 'rc', a: X([0.177, 0.452, 0.047]), b: X([0.174, 0.436, 0.056]), ra: 0.0078, rb: 0.0072, bone: 'thb' + side, k: 0.005 });
  return P;
}

// ------------------------------------------------------------------ assembly
export class Child {
  constructor({ cell = 0.0062, handCell = 0.0028 } = {}) {
    this.group = new THREE.Group();
    this.group.name = 'child';
    const sk = buildSkeleton(CHILD_BONES);
    this.sk = sk;
    this.bones = sk.byName;
    const bounds = { min: [-0.3, -0.01, -0.16], max: [0.3, 1.06, 0.16] };
    const t0 = performance.now();
    const mk = (prims, opts = {}) =>
      buildSdfGeometry({ prims, bones: sk.names, cell, bounds, sigmaSkin: 0.012, sigmaTint: 0.006, ao: { dist: 0.008, strength: 0.6 }, relax: 1, ...opts });
    const skinMat = makeCoatMaterial({ color: '#f6cdb2', roughness: 0.55, sheen: 0.35, sheenColor: '#ffe2d6', sheenRoughness: 0.5, furStrength: 0.0, rim: 0.4, wrap: 0.55, scatter: new THREE.Color('#ff9a80') });
    const hairMat = makeCoatMaterial({ color: '#4e3021', roughness: 0.4, sheen: 0.7, sheenColor: '#b8835a', sheenRoughness: 0.32, furStrength: 0.9, furScale: 900, rim: 0.25, wrap: 0.25, scatter: new THREE.Color('#e0a070') });
    const coatMat = new THREE.MeshPhysicalMaterial({ color: '#f7d65a', roughness: 0.38, clearcoat: 0.7, clearcoatRoughness: 0.25, sheen: 0.2, sheenColor: new THREE.Color('#fff2b0') });
    const pantsMat = makeCoatMaterial({ color: '#8fb0d6', roughness: 0.8, sheen: 0.6, sheenColor: '#cfe0f5', furStrength: 0.12, furScale: 2200, rim: 0.2, wrap: 0.3, scatter: new THREE.Color('#b0c8ff') });
    const bootMat = new THREE.MeshPhysicalMaterial({ color: '#e9726c', roughness: 0.3, clearcoat: 1.0, clearcoatRoughness: 0.15 });
    this.materials = { skinMat, hairMat, coatMat, pantsMat, bootMat };
    const parts = [
      [mk(skinPrims()), skinMat],
      [mk(hairPrims(), { sigmaTint: 0.01 }), hairMat],
      [mk(coatPrims()), coatMat],
      [mk(legPrims()), pantsMat],
      [mk(bootPrims()), bootMat],
      [buildSdfGeometry({ prims: handPrims('L'), bones: sk.names, cell: handCell, bounds: { min: [0.14, 0.4, -0.045], max: [0.23, 0.53, 0.08] }, sigmaSkin: 0.006, sigmaTint: 0.003, ao: { dist: 0.004, strength: 0.5 } }), skinMat],
      [buildSdfGeometry({ prims: handPrims('R'), bones: sk.names, cell: handCell, bounds: { min: [-0.23, 0.4, -0.045], max: [-0.14, 0.53, 0.08] }, sigmaSkin: 0.006, sigmaTint: 0.003, ao: { dist: 0.004, strength: 0.5 } }), skinMat],
    ];
    this.buildMs = performance.now() - t0;
    const skeleton = new THREE.Skeleton(sk.bones);
    const rootHolder = new THREE.Group();
    rootHolder.add(sk.bones[0]);
    this.group.add(rootHolder);
    this.meshes = [];
    let tris = 0;
    for (const [geo, mat] of parts) {
      if (!geo.attributes.skinIndex) continue;
      const m = new THREE.SkinnedMesh(geo, mat);
      m.castShadow = true;
      m.receiveShadow = true;
      m.frustumCulled = false;
      this.group.add(m);
      this.meshes.push(m);
      tris += geo.index.count / 3;
    }
    this.group.updateMatrixWorld(true);
    for (const m of this.meshes) m.bind(skeleton);
    this.skeleton = skeleton;
    this.tris = tris;
    this._face();
  }

  _face() {
    const skinGeo = this.meshes[0].geometry;
    const field = skinGeo.userData.field;
    // find the face surface along +z at (x, y)
    const surfZ = (x, y) => {
      let a = 0.0, b = 0.2;
      for (let i = 0; i < 30; i++) {
        const m = (a + b) / 2;
        if (field(x, y, m) < 0) a = m;
        else b = m;
      }
      return a;
    };
    const eyeMat = new THREE.MeshPhysicalMaterial({ color: '#21150f', roughness: 0.08, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 1.5 });
    const eyeGeo = new THREE.SphereGeometry(0.0118, 24, 16).scale(1, 1.22, 0.55);
    const hiMat = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    const hiGeo = new THREE.SphereGeometry(0.0028, 10, 8);
    const head = this.bones.head;
    const toHead = (p) => {
      const q = this.sk.restObjQuat.head.clone().invert();
      return new THREE.Vector3(...p).sub(this.sk.restObjPos.head).applyQuaternion(q);
    };
    const holder = new THREE.Object3D();
    holder.position.copy(toHead([0, 0, 0]));
    holder.quaternion.copy(this.sk.restObjQuat.head.clone().invert());
    head.add(holder);
    this.eyes = [];
    for (const s of [1, -1]) {
      const x = s * 0.03, y = 0.912;
      const z = surfZ(x, y);
      const e = new THREE.Mesh(eyeGeo, eyeMat);
      e.position.set(x, y, z - 0.0015);
      e.rotation.y = s * 0.28;
      holder.add(e);
      const hi = new THREE.Mesh(hiGeo, hiMat);
      hi.position.set(s * 0.003 + 0.002, 0.005, 0.006);
      e.add(hi);
      this.eyes.push(e);
    }
    const lineMat = new THREE.MeshBasicMaterial({ color: '#7a3f30' });
    const mz = surfZ(0, 0.868);
    const mouthCurve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(-0.012, 0.869, mz - 0.002), new THREE.Vector3(0, 0.863, mz + 0.0005), new THREE.Vector3(0.012, 0.869, mz - 0.002));
    const mouth = new THREE.Mesh(new THREE.TubeGeometry(mouthCurve, 8, 0.0017, 5, false), lineMat);
    holder.add(mouth);
    const browMat = new THREE.MeshBasicMaterial({ color: '#4e3021' });
    for (const s of [1, -1]) {
      const z1 = surfZ(s * 0.019, 0.935), z2 = surfZ(s * 0.031, 0.94), z3 = surfZ(s * 0.043, 0.936);
      const c = new THREE.QuadraticBezierCurve3(new THREE.Vector3(s * 0.019, 0.935, z1), new THREE.Vector3(s * 0.031, 0.941, z2 + 0.001), new THREE.Vector3(s * 0.043, 0.936, z3));
      holder.add(new THREE.Mesh(new THREE.TubeGeometry(c, 6, 0.0016, 4, false), browMat));
    }
    this.mouth = mouth;
    // coat buttons
    const btnMat = new THREE.MeshPhysicalMaterial({ color: '#fff6e0', roughness: 0.3, clearcoat: 1 });
    const btnGeo = new THREE.CylinderGeometry(0.0085, 0.0085, 0.005, 14).rotateX(Math.PI / 2);
    const coatField = this.meshes[2].geometry.userData.field;
    const coatZ = (x, y) => {
      let a = 0.0, b = 0.25;
      for (let i = 0; i < 30; i++) {
        const m = (a + b) / 2;
        if (coatField(x, y, m) < 0) a = m;
        else b = m;
      }
      return a;
    };
    for (const [y, bone] of [[0.74, 'chest'], [0.665, 'spine'], [0.59, 'spine']]) {
      const z = coatZ(0.0, y);
      const b = new THREE.Mesh(btnGeo, btnMat);
      const q = this.sk.restObjQuat[bone].clone().invert();
      b.position.copy(new THREE.Vector3(0, y, z + 0.002).sub(this.sk.restObjPos[bone]).applyQuaternion(q));
      b.quaternion.copy(q);
      this.bones[bone].add(b);
    }
  }

  setBlink(t) {
    for (const e of this.eyes) e.scale.y = Math.max(0.08, 1 - t);
  }
}
