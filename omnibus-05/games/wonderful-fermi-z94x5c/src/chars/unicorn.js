// Procedural unicorn: skeleton, organic SDF body, horn, hooves, eyes, ears.
// Units are metres. Horse space: +Z forward, +Y up, +X = horse's left.
import * as THREE from '../../lib/three.module.js';
import { buildSdfGeometry, buildSkeleton } from './sdfmesh.js';
import { makeCoatMaterial, addCoatAttributes } from './materials.js';
import { HairSystem } from './hair.js';
import { rng } from '../core/math.js';

const M = (p) => [-p[0], p[1], p[2]];

// Head built in a face-aligned frame: origin at the poll, F along the nasal line,
// U toward the forehead, X lateral.
const POLL = new THREE.Vector3(0, 1.855, 0.925);
const HF = new THREE.Vector3(0, -0.4, 0.33).normalize();
const HU = new THREE.Vector3(0, 0.33, 0.4).normalize();
const HROT = Math.atan2(HU.z, HU.y); // rotation about X taking +Y to HU
export function headPt(a, b, x = 0) {
  const p = POLL.clone().addScaledVector(HF, a).addScaledVector(HU, b);
  p.x += x;
  return [p.x, p.y, p.z];
}

// ---------------------------------------------------------------- skeleton
function legSpecs(side) {
  const s = side === 'L' ? 1 : -1;
  const X = (p) => [p[0] * s, p[1], p[2]];
  return [
    { name: 'scap' + side, parent: 'chest', head: X([0.1, 1.32, 0.4]), tail: X([0.15, 1.02, 0.64]) },
    { name: 'hum' + side, parent: 'scap' + side, head: X([0.15, 1.02, 0.64]), tail: X([0.145, 0.78, 0.47]) },
    { name: 'fore' + side, parent: 'hum' + side, head: X([0.145, 0.78, 0.47]), tail: X([0.13, 0.43, 0.5]) },
    { name: 'fcan' + side, parent: 'fore' + side, head: X([0.13, 0.43, 0.5]), tail: X([0.13, 0.15, 0.5]) },
    { name: 'fpas' + side, parent: 'fcan' + side, head: X([0.13, 0.15, 0.5]), tail: X([0.13, 0.068, 0.555]) },
    { name: 'fhoof' + side, parent: 'fpas' + side, head: X([0.13, 0.068, 0.555]), tail: X([0.13, 0.0, 0.575]) },
    { name: 'fem' + side, parent: 'hips', head: X([0.13, 1.14, -0.56]), tail: X([0.16, 0.84, -0.38]) },
    { name: 'tib' + side, parent: 'fem' + side, head: X([0.16, 0.84, -0.38]), tail: X([0.13, 0.49, -0.68]) },
    { name: 'hcan' + side, parent: 'tib' + side, head: X([0.13, 0.49, -0.68]), tail: X([0.13, 0.15, -0.645]) },
    { name: 'hpas' + side, parent: 'hcan' + side, head: X([0.13, 0.15, -0.645]), tail: X([0.13, 0.068, -0.595]) },
    { name: 'hhoof' + side, parent: 'hpas' + side, head: X([0.13, 0.068, -0.595]), tail: X([0.13, 0.0, -0.575]) },
    { name: 'ear' + side, parent: 'head', head: headPt(0.015, 0.05, 0.046 * s), tail: [0.08 * s, headPt(0.015, 0.05)[1] + 0.13, headPt(0.015, 0.05)[2] - 0.03], side: [s, 0, 0] },
  ];
}

export const HORSE_BONES = [
  { name: 'root', head: [0, 0, 0], tail: [0, 0.1, 0] },
  { name: 'body', parent: 'root', head: [0, 1.05, 0], tail: [0, 1.05, 0.3] },
  { name: 'hips', parent: 'body', head: [0, 1.15, -0.22], tail: [0, 1.22, -0.7] },
  { name: 'chest', parent: 'body', head: [0, 1.15, 0.05], tail: [0, 1.22, 0.45] },
  { name: 'neck1', parent: 'chest', head: [0, 1.2, 0.55], tail: [0, 1.42, 0.71] },
  { name: 'neck2', parent: 'neck1', head: [0, 1.42, 0.71], tail: [0, 1.63, 0.82] },
  { name: 'neck3', parent: 'neck2', head: [0, 1.63, 0.82], tail: [0, 1.82, 0.905] },
  { name: 'head', parent: 'neck3', head: [0, 1.82, 0.905], tail: [0, 1.49, 1.235] },
  { name: 'tail1', parent: 'hips', head: [0, 1.3, -0.8], tail: [0, 1.17, -0.885] },
  { name: 'tail2', parent: 'tail1', head: [0, 1.17, -0.885], tail: [0, 1.0, -0.925] },
  ...legSpecs('L'),
  ...legSpecs('R'),
];

// ---------------------------------------------------------------- body shape
const MUZZLE = [0.9, 0.82, 0.8];
const SKIN = [0.93, 0.89, 0.87];

function legPrims(side) {
  const s = side === 'L' ? 1 : -1;
  const X = (p) => [p[0] * s, p[1], p[2]];
  const b = (n) => n + side;
  const rot = (r) => (r ? [r[0], r[1] * s, r[2] * s] : undefined);
  const down = [0, -1, 0];
  return [
    // shoulder & arm
    { type: 'el', c: X([0.12, 1.12, 0.52]), r: [0.085, 0.22, 0.12], rot: rot([-0.6, 0, -0.08]), bone: b('scap'), k: 0.09, flow: [0, -0.6, -0.8] },
    { type: 'rc', a: X([0.15, 1.02, 0.62]), b: X([0.145, 0.8, 0.465]), ra: 0.092, rb: 0.07, bone: b('hum'), k: 0.08, flow: [0, -0.8, -0.3] },
    { type: 'el', c: X([0.135, 0.93, 0.455]), r: [0.075, 0.12, 0.085], bone: b('hum'), k: 0.06, flow: down },
    // forearm
    { type: 'rc', a: X([0.145, 0.77, 0.47]), b: X([0.13, 0.445, 0.5]), ra: 0.064, rb: 0.04, bone: b('fore'), k: 0.045, flow: down },
    { type: 'el', c: X([0.15, 0.665, 0.488]), r: [0.054, 0.1, 0.06], bone: b('fore'), k: 0.04, flow: down },
    // knee (carpus)
    { type: 'el', c: X([0.13, 0.43, 0.504]), r: [0.039, 0.047, 0.043], bone: [b('fore'), b('fcan')], split: { a: X([0.13, 0.47, 0.5]), b: X([0.13, 0.39, 0.5]) }, t0: 0.35, t1: 0.65, k: 0.02, flow: down },
    // cannon + tendons
    { type: 'rc', a: X([0.13, 0.41, 0.502]), b: X([0.13, 0.16, 0.5]), ra: 0.03, rb: 0.027, bone: b('fcan'), k: 0.02, flow: down },
    { type: 'el', c: X([0.13, 0.285, 0.488]), r: [0.024, 0.12, 0.034], bone: b('fcan'), k: 0.02, flow: down },
    // fetlock
    { type: 'el', c: X([0.13, 0.142, 0.493]), r: [0.036, 0.043, 0.046], bone: [b('fcan'), b('fpas')], split: { a: X([0.13, 0.19, 0.495]), b: X([0.13, 0.1, 0.5]) }, t0: 0.35, t1: 0.65, k: 0.02, flow: down },
    // pastern
    { type: 'rc', a: X([0.13, 0.14, 0.5]), b: X([0.13, 0.072, 0.549]), ra: 0.031, rb: 0.035, bone: b('fpas'), k: 0.02, flow: [0, -0.7, 0.7] },
    // ---- hind leg
    { type: 'rc', a: X([0.12, 1.1, -0.56]), b: X([0.155, 0.85, -0.4]), ra: 0.125, rb: 0.085, bone: b('fem'), k: 0.09, flow: [0, -0.7, -0.4] },
    { type: 'el', c: X([0.145, 0.88, -0.39]), r: [0.06, 0.08, 0.065], bone: b('fem'), k: 0.08, flow: down },
    { type: 'el', c: X([0.105, 0.96, -0.7]), r: [0.085, 0.18, 0.1], rot: rot([0.25, 0, 0]), bone: [b('fem'), b('tib')], split: { a: X([0.1, 1.12, -0.7]), b: X([0.12, 0.8, -0.66]) }, t0: 0.4, t1: 0.9, k: 0.07, flow: down },
    // gaskin
    { type: 'rc', a: X([0.15, 0.82, -0.41]), b: X([0.13, 0.5, -0.675]), ra: 0.09, rb: 0.043, bone: b('tib'), k: 0.06, flow: down },
    { type: 'rc', a: X([0.11, 0.98, -0.77]), b: X([0.13, 0.56, -0.72]), ra: 0.07, rb: 0.03, bone: [b('fem'), b('tib')], t0: 0.0, t1: 0.45, k: 0.07, flow: down },
    { type: 'el', c: X([0.14, 0.69, -0.535]), r: [0.06, 0.12, 0.08], rot: rot([0.72, 0, 0]), bone: b('tib'), k: 0.05, flow: down },
    // hock
    { type: 'el', c: X([0.13, 0.485, -0.69]), r: [0.038, 0.055, 0.058], bone: [b('tib'), b('hcan')], split: { a: X([0.13, 0.53, -0.69]), b: X([0.13, 0.44, -0.68]) }, t0: 0.35, t1: 0.65, k: 0.025, flow: down },
    { type: 'el', c: X([0.13, 0.535, -0.735]), r: [0.021, 0.04, 0.026], bone: b('tib'), k: 0.02, flow: down },
    // hind cannon
    { type: 'rc', a: X([0.13, 0.47, -0.676]), b: X([0.13, 0.16, -0.645]), ra: 0.032, rb: 0.028, bone: b('hcan'), k: 0.02, flow: down },
    { type: 'el', c: X([0.13, 0.305, -0.668]), r: [0.025, 0.13, 0.036], bone: b('hcan'), k: 0.02, flow: down },
    { type: 'el', c: X([0.13, 0.142, -0.64]), r: [0.036, 0.043, 0.046], bone: [b('hcan'), b('hpas')], split: { a: X([0.13, 0.19, -0.643]), b: X([0.13, 0.1, -0.62]) }, t0: 0.35, t1: 0.65, k: 0.02, flow: down },
    { type: 'rc', a: X([0.13, 0.14, -0.64]), b: X([0.13, 0.072, -0.598]), ra: 0.031, rb: 0.035, bone: b('hpas'), k: 0.02, flow: [0, -0.7, 0.7] },
  ];
}

function headPrims() {
  const P = [];
  const LR = (p) => {
    P.push({ ...p });
    const q = { ...p };
    if (q.c) q.c = M(q.c);
    if (q.a) q.a = M(q.a);
    if (q.b) q.b = M(q.b);
    if (q.rot) q.rot = [q.rot[0], -q.rot[1], -q.rot[2]];
    P.push(q);
  };
  const ff = [HF.x, HF.y, HF.z];
  // ellipsoid in head frame: radii (side, up, along)
  const E = (a, b, x, rs, ru, ra, extra = {}) => ({ type: 'el', c: headPt(a, b, x), r: [rs, ru, ra], rot: [HROT + (extra.tilt || 0), extra.yaw || 0, 0], bone: 'head', flow: ff, ...extra });
  // cranium / forehead (flat on top)
  P.push(E(0.1, 0.0, 0, 0.083, 0.075, 0.115, { k: 0.06 }));
  // poll / top of head
  P.push(E(0.04, 0.02, 0, 0.06, 0.06, 0.07, { k: 0.05 }));
  // cheek plates (big flat round jaw)
  LR(E(0.15, -0.105, 0.042, 0.042, 0.095, 0.095, { k: 0.05, tilt: 0.25 }));
  // face / nasal bones
  P.push(E(0.26, -0.005, 0, 0.068, 0.058, 0.15, { k: 0.06 }));
  P.push(E(0.37, -0.012, 0, 0.056, 0.056, 0.11, { k: 0.05 }));
  // muzzle
  P.push(E(0.475, -0.03, 0, 0.06, 0.066, 0.07, { k: 0.04, tint: MUZZLE, region: 1 }));
  // upper lip
  P.push(E(0.515, -0.065, 0, 0.05, 0.04, 0.045, { k: 0.025, tint: MUZZLE, region: 1 }));
  // lower lip & chin
  P.push(E(0.47, -0.105, 0, 0.04, 0.03, 0.05, { k: 0.025, tint: MUZZLE, region: 1 }));
  // underside of jaw toward the chin
  P.push({ type: 'rc', a: headPt(0.2, -0.17), b: headPt(0.43, -0.095), ra: 0.032, rb: 0.026, bone: 'head', k: 0.05, flow: ff });
  // eye sockets / brow ridge
  LR(E(0.16, 0.052, 0.062, 0.026, 0.02, 0.042, { k: 0.03, tint: SKIN }));
  // nostrils
  LR({ type: 'el', c: headPt(0.515, -0.012, 0.038), r: [0.011, 0.02, 0.013], rot: [HROT - 0.3, 0, 0.4], bone: 'head', sub: true, k: 0.014 });
  // mouth line
  P.push({ type: 'rc', a: headPt(0.47, -0.085, 0.05), b: headPt(0.47, -0.085, -0.05), ra: 0.004, rb: 0.004, bone: 'head', sub: true, k: 0.01 });
  return P;
}

export function horsePrims() {
  const body = [
    // barrel
    { type: 'el', c: [0, 1.04, -0.04], r: [0.235, 0.29, 0.5], bone: ['hips', 'chest'], split: { a: [0, 1.04, -0.5], b: [0, 1.04, 0.4] }, t0: 0.3, t1: 0.7, k: 0.1, flow: [0, -0.4, -1] },
    { type: 'el', c: [0, 1.05, 0.27], r: [0.215, 0.31, 0.27], bone: 'chest', k: 0.12, flow: [0, -0.5, -1] },
    { type: 'el', c: [0, 0.995, 0.555], r: [0.165, 0.21, 0.15], bone: 'chest', k: 0.1, flow: [0, -1, -0.2] },
    { type: 'el', c: [0, 1.27, 0.36], r: [0.07, 0.11, 0.16], rot: [0.3, 0, 0], bone: 'chest', k: 0.1, flow: [0, -0.5, -1] },
    { type: 'rc', a: [0, 1.2, 0.24], b: [0, 1.235, -0.42], ra: 0.12, rb: 0.13, bone: ['chest', 'hips'], t0: 0.35, t1: 0.65, k: 0.12, flow: [0, -0.3, -1] },
    { type: 'el', c: [0, 0.93, -0.06], r: [0.21, 0.2, 0.36], bone: ['hips', 'chest'], split: { a: [0, 0.93, -0.4], b: [0, 0.93, 0.3] }, t0: 0.3, t1: 0.7, k: 0.12, flow: [0, -0.4, -1] },
    { type: 'el', c: [0.085, 1.12, -0.56], r: [0.15, 0.24, 0.27], bone: 'hips', k: 0.1, flow: [0, -0.6, -0.8] },
    { type: 'el', c: [-0.085, 1.12, -0.56], r: [0.15, 0.24, 0.27], bone: 'hips', k: 0.1, flow: [0, -0.6, -0.8] },
    { type: 'el', c: [0, 1.25, -0.52], r: [0.16, 0.12, 0.26], bone: 'hips', k: 0.1, flow: [0, -0.3, -1] },
    { type: 'el', c: [0, 1.07, -0.73], r: [0.155, 0.2, 0.12], bone: 'hips', k: 0.08, flow: [0, -1, -0.2] },
    // neck
    { type: 'el', c: [0, 1.2, 0.6], r: [0.13, 0.22, 0.17], rot: [-0.75, 0, 0], bone: ['chest', 'neck1'], split: { a: [0, 1.05, 0.48], b: [0, 1.4, 0.7] }, t0: 0.3, t1: 0.7, k: 0.12, flow: [0, -0.7, -0.5] },
    { type: 'el', c: [0, 1.42, 0.72], r: [0.102, 0.18, 0.13], rot: [-0.6, 0, 0], bone: ['neck1', 'neck2'], split: { a: [0, 1.26, 0.63], b: [0, 1.58, 0.8] }, t0: 0.3, t1: 0.7, k: 0.1, flow: [0, -0.7, -0.4] },
    { type: 'el', c: [0, 1.64, 0.835], r: [0.076, 0.14, 0.1], rot: [-0.45, 0, 0], bone: ['neck2', 'neck3'], split: { a: [0, 1.49, 0.76], b: [0, 1.79, 0.89] }, t0: 0.3, t1: 0.7, k: 0.09, flow: [0, -0.7, -0.3] },
    { type: 'rc', a: [0, 1.37, 0.46], b: [0, 1.86, 0.885], ra: 0.072, rb: 0.046, bone: ['neck1', 'neck3'], t0: 0.2, t1: 0.9, k: 0.1, flow: [0, -1, 0] },
    { type: 'el', c: [0, 1.66, 0.68], r: [0.052, 0.07, 0.15], rot: [-0.85, 0, 0], bone: ['neck1', 'neck3'], split: { a: [0, 1.45, 0.55], b: [0, 1.83, 0.86] }, t0: 0.2, t1: 0.9, k: 0.09, flow: [0, -1, 0] },
    { type: 'rc', a: [0, 1.1, 0.7], b: [0, 1.6, 0.975], ra: 0.08, rb: 0.055, bone: ['neck1', 'neck3'], t0: 0.2, t1: 0.9, k: 0.09, flow: [0, -0.6, -0.6] },
    // tail dock
    { type: 'rc', a: [0, 1.3, -0.79], b: [0, 1.06, -0.91], ra: 0.055, rb: 0.033, bone: ['tail1', 'tail2'], t0: 0.3, t1: 0.8, k: 0.05, flow: [0, -1, -0.3] },
  ];
  return [...body, ...headPrims(), ...legPrims('L'), ...legPrims('R')];
}

// ---------------------------------------------------------------- parts
function hoofGeometry() {
  // Lathe-like hoof: wider at the ground, toe sloping forward.
  const rings = 10, segs = 28;
  const pos = [], idx = [];
  for (let i = 0; i <= rings; i++) {
    const t = i / rings; // 0 = ground, 1 = coronet
    const y = t * 0.07;
    const r = 0.05 - 0.014 * t + 0.004 * Math.sin(t * Math.PI);
    for (let j = 0; j <= segs; j++) {
      const a = (j / segs) * Math.PI * 2;
      let x = Math.sin(a) * r * 0.92;
      let z = Math.cos(a) * r;
      const front = Math.max(0, Math.cos(a));
      z += front * (1 - t) * 0.022; // toe forward at the ground
      const heel = Math.max(0, -Math.cos(a));
      const yy = y * (1 - heel * 0.35) + (i === rings ? heel * 0.006 : 0);
      pos.push(x, yy, z);
    }
  }
  for (let i = 0; i < rings; i++)
    for (let j = 0; j < segs; j++) {
      const a = i * (segs + 1) + j, b = a + segs + 1;
      idx.push(a, a + 1, b, b, a + 1, b + 1);
    }
  // sole
  const c = pos.length / 3;
  pos.push(0, 0.002, 0.012);
  for (let j = 0; j < segs; j++) idx.push(c, j + 1, j);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function hornGeometry() {
  // Pearl horn with a shallow spiral groove.
  const rings = 64, segs = 36, L = 0.3, R0 = 0.033, turns = 3.6;
  const pos = [], idx = [];
  for (let i = 0; i <= rings; i++) {
    const t = i / rings;
    const base = R0 * Math.pow(1 - t, 0.82) * (1 - 0.15 * Math.exp(-t * 30));
    const tipRound = t > 0.97 ? Math.sqrt(Math.max(0, 1 - ((t - 0.97) / 0.03) ** 2)) : 1;
    for (let j = 0; j <= segs; j++) {
      const a = (j / segs) * Math.PI * 2;
      const ph = a / (Math.PI * 2) - t * turns;
      const g = Math.pow(0.5 + 0.5 * Math.cos(ph * Math.PI * 2), 5);
      const r = base * (1 - 0.13 * g * (1 - t * 0.6)) * Math.max(tipRound, 0.0);
      pos.push(Math.cos(a) * r, t * L, Math.sin(a) * r);
    }
  }
  for (let i = 0; i < rings; i++)
    for (let j = 0; j < segs; j++) {
      const a = i * (segs + 1) + j, b = a + segs + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function earGeometry() {
  // Closed cupped leaf: a concave front shell and a convex back shell meeting at the rim.
  const nu = 16, nv = 14, Lh = 0.13, W = 0.046;
  const pos = [], col = [], idx = [];
  const width = (u) => W * Math.pow(Math.max(0, 1 - u), 0.55) * (0.78 + 0.32 * Math.sin(u * Math.PI));
  const shell = (front) => {
    const start = pos.length / 3;
    for (let i = 0; i <= nu; i++) {
      const u = i / nu;
      const w = width(u);
      for (let j = 0; j <= nv; j++) {
        const v = (j / nv) * 2 - 1;
        const bulge = (1 - v * v) * Math.pow(1 - u, 0.6);
        const z = front ? 0.018 * bulge : 0.03 * bulge; // +z = back of ear
        const x = v * w;
        const tipCurl = u * u * 0.012;
        pos.push(x, u * Lh, z + tipCurl);
        const inner = front ? 1 - (1 - v * v) * 0.0 : 0;
        if (front) col.push(0.86, 0.78, 0.78);
        else col.push(1, 1, 1);
      }
    }
    for (let i = 0; i < nu; i++)
      for (let j = 0; j < nv; j++) {
        const a = start + i * (nv + 1) + j, b = a + nv + 1;
        if (front) idx.push(a, b, a + 1, b, b + 1, a + 1);
        else idx.push(a, a + 1, b, b, a + 1, b + 1);
      }
  };
  shell(true);
  shell(false);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function eyeTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 128;
  const g = c.getContext('2d');
  // v (canvas y) 0 = north pole (front of eye)
  const grd = g.createLinearGradient(0, 0, 0, 128);
  grd.addColorStop(0.0, '#050302');
  grd.addColorStop(0.12, '#0b0605');
  grd.addColorStop(0.2, '#2a170d');
  grd.addColorStop(0.3, '#4a2c18');
  grd.addColorStop(0.36, '#24150c');
  grd.addColorStop(0.42, '#3a2a24');
  grd.addColorStop(1.0, '#3a2a24');
  g.fillStyle = grd;
  g.fillRect(0, 0, 256, 128);
  // radial iris fibres
  g.globalAlpha = 0.25;
  for (let i = 0; i < 160; i++) {
    const x = Math.random() * 256;
    g.strokeStyle = Math.random() < 0.5 ? '#7a4a28' : '#140a05';
    g.beginPath();
    g.moveTo(x, 18 + Math.random() * 6);
    g.lineTo(x + (Math.random() - 0.5) * 4, 36 + Math.random() * 8);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// ---------------------------------------------------------------- assembly
export class Unicorn {
  constructor({ cell = 0.0115 } = {}) {
    this.group = new THREE.Group();
    this.group.name = 'unicorn';
    const sk = buildSkeleton(HORSE_BONES);
    this.sk = sk;
    this.bones = sk.byName;
    const t0 = performance.now();
    const geo = buildSdfGeometry({
      prims: horsePrims(),
      bones: sk.names,
      cell,
      bounds: { min: [-0.36, 0.02, -1.02], max: [0.36, 2.02, 1.3] },
      sigmaSkin: 0.028,
      sigmaTint: 0.01,
      ao: { dist: 0.02, strength: 0.75 },
      relax: 1,
    });
    this.buildMs = performance.now() - t0;
    this.coatMat = makeCoatMaterial({});
    const mesh = new THREE.SkinnedMesh(geo, this.coatMat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mesh.add(sk.bones[0]);
    mesh.updateMatrixWorld(true);
    const skeleton = new THREE.Skeleton(sk.bones);
    mesh.bind(skeleton);
    this.mesh = mesh;
    this.skeleton = skeleton;
    this.group.add(mesh);
    this.tris = geo.index.count / 3;

    this._buildParts();
  }

  _attach(boneName, obj, objPos, objQuat) {
    // place obj (given in horse rest space) under bone
    const b = this.bones[boneName];
    const bq = this.sk.restObjQuat[boneName];
    const bp = this.sk.restObjPos[boneName];
    const inv = bq.clone().invert();
    obj.position.copy(objPos).sub(bp).applyQuaternion(inv);
    obj.quaternion.copy(inv).multiply(objQuat || new THREE.Quaternion());
    b.add(obj);
    return obj;
  }

  _buildParts() {
    // hooves
    const hoofMat = new THREE.MeshPhysicalMaterial({
      color: '#d8cdc2',
      roughness: 0.32,
      clearcoat: 0.6,
      clearcoatRoughness: 0.3,
      iridescence: 0.35,
      iridescenceIOR: 1.35,
      sheen: 0.4,
      sheenColor: new THREE.Color('#ffffff'),
    });
    const hg = hoofGeometry();
    this.hooves = {};
    for (const n of ['fhoofL', 'fhoofR', 'hhoofL', 'hhoofR']) {
      const h = new THREE.Mesh(hg, hoofMat);
      h.castShadow = true;
      const head = this.sk.restObjPos[n];
      this._attach(n, h, new THREE.Vector3(head.x, 0, head.z - 0.004));
      this.hooves[n] = h;
    }
    // horn
    const hornMat = new THREE.MeshPhysicalMaterial({
      color: '#fbf4ec',
      roughness: 0.22,
      clearcoat: 1.0,
      clearcoatRoughness: 0.12,
      iridescence: 1.0,
      iridescenceIOR: 1.32,
      iridescenceThicknessRange: [180, 520],
      sheen: 0.5,
      sheenColor: new THREE.Color('#fff4fb'),
      sheenRoughness: 0.3,
      emissive: new THREE.Color('#2a2420'),
    });
    const horn = new THREE.Mesh(hornGeometry(), hornMat);
    horn.castShadow = true;
    const hq = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.56, 0, 0));
    const hp = headPt(0.125, 0.066);
    this._attach('head', horn, new THREE.Vector3(hp[0], hp[1], hp[2]), hq);
    this.horn = horn;
    this.hornTipLocal = new THREE.Vector3(0, 0.3, 0);

    // eyes
    const eyeMat = new THREE.MeshPhysicalMaterial({
      map: eyeTexture(),
      roughness: 0.08,
      clearcoat: 1,
      clearcoatRoughness: 0.03,
      envMapIntensity: 1.4,
    });
    const eyeGeo = new THREE.SphereGeometry(0.025, 32, 20);
    const lidGeo = new THREE.SphereGeometry(0.0262, 28, 12, 0, Math.PI * 2, 0, Math.PI * 0.5);
    addCoatAttributes(lidGeo, [0.96, 0.93, 0.9], 0.75);
    this.lidMat = makeCoatMaterial({ skinned: false });
    this.eyes = [];
    this.lids = [];
    for (const s of [1, -1]) {
      const pivot = new THREE.Object3D();
      // eye looks outward and a little forward / down; local +Z = up for the lids
      const look = new THREE.Vector3(s * 0.84, -0.06, 0.54).normalize();
      const up = new THREE.Vector3(0, 1, 0).addScaledVector(look, -look.y).normalize();
      const xx = new THREE.Vector3().crossVectors(look, up);
      const q = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(xx, look, up));
      const ep = headPt(0.172, 0.02, s * 0.066);
      this._attach('head', pivot, new THREE.Vector3(ep[0], ep[1], ep[2]), q);
      const eye = new THREE.Mesh(eyeGeo, eyeMat);
      pivot.add(eye);
      const lidPivot = new THREE.Object3D();
      pivot.add(lidPivot);
      const lid = new THREE.Mesh(lidGeo, this.lidMat);
      lidPivot.add(lid);
      lidPivot.userData.side = s;
      this.eyes.push(eye);
      this.lids.push(lidPivot);
    }
    this.setBlink(0);

    // ears
    const eg = addCoatAttributes(earGeometry(), [1, 1, 1], 0.9);
    this.earMat = makeCoatMaterial({ skinned: false, furScale: 1400 });
    for (const s of ['L', 'R']) {
      const ear = new THREE.Mesh(eg, this.earMat);
      ear.castShadow = true;
      // ear geometry: +Y along ear, front (concave) faces -Z; turn it to face forward/out
      const b = this.bones['ear' + s];
      ear.rotation.set(0, Math.PI + (s === 'L' ? -0.35 : 0.35), 0);
      ear.position.set(0, -0.015, 0);
      b.add(ear);
    }
  }

  // 0 open .. 1 closed
  setBlink(t) {
    for (const lp of this.lids) lp.rotation.x = THREE.MathUtils.lerp(1.95, 0.08, t);
  }


  // ------------------------------------------------------------ hair
  _surfacePoint(from, toward) {
    // march from an outside point toward an inside point and bisect the surface
    const f = this.mesh.geometry.userData.field;
    let a = from.clone(), b = toward.clone();
    for (let i = 0; i < 30; i++) {
      const m = a.clone().add(b).multiplyScalar(0.5);
      if (f(m.x, m.y, m.z) > 0) a = m;
      else b = m;
    }
    return a;
  }

  _local(boneName, objPoint) {
    const q = this.sk.restObjQuat[boneName].clone().invert();
    return objPoint.clone().sub(this.sk.restObjPos[boneName]).applyQuaternion(q);
  }

  _localDir(boneName, objDir) {
    const q = this.sk.restObjQuat[boneName].clone().invert();
    return objDir.clone().normalize().applyQuaternion(q);
  }

  buildHair(droplets) {
    const R = rng(11);
    const C = (h) => new THREE.Color(h);
    const pinkDeep = C('#f2a7c3'), pink = C('#f8c8d8'), blush = C('#fbdde4'), gold = C('#f2cf86'), champagne = C('#f9e7bf'), peach = C('#f7d2b0');
    const palettes = [
      [pinkDeep, blush],
      [pink, champagne],
      [gold, champagne],
      [peach, gold],
      [pink, gold],
    ];
    const locks = [];
    const mk = (boneName, anchorObj, dirsObj, outwardObj, o) => {
      const b = this.bones[boneName];
      locks.push({
        bone: b,
        anchor: this._local(boneName, anchorObj),
        dirs: dirsObj.map((d) => this._localDir(boneName, d)),
        outward: this._localDir(boneName, outwardObj),
        length: o.length,
        segs: o.segs,
        width: o.width,
        palette: o.palette,
        stiff: o.stiff,
        drag: o.drag,
        thick: o.thick ?? 0.012,
        drops: o.drops ?? 3,
        wetStart: o.wet ?? 0.5,
        kind: o.kind,
      });
    };
    // --- mane along the crest
    const A = new THREE.Vector3(0, 1.41, 0.42); // withers
    const B = new THREE.Vector3(0, 1.865, 0.89); // poll (behind ears)
    const d = B.clone().sub(A).normalize();
    const dorsal = new THREE.Vector3(0, d.z, -d.y).normalize();
    const N = 22;
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1);
      for (let row = 0; row < 4; row++) {
        const xo = [0.02, 0.007, -0.007, -0.02][row] + (R() - 0.5) * 0.006;
        const tt = Math.min(1, Math.max(0, t + (R() - 0.5) * 0.02 + row * 0.01));
        const c = A.clone().lerp(B, tt);
        c.x += xo;
        const out = c.clone().addScaledVector(dorsal, 0.3);
        const anchor = this._surfacePoint(out, c).addScaledVector(dorsal, -0.004);
        const boneName = tt > 0.7 ? 'neck3' : tt > 0.38 ? 'neck2' : 'neck1';
        const segs = 8;
        const len = (0.42 + 0.16 * Math.sin(Math.min(1, tt * 1.2) * Math.PI) - tt * 0.12) * (0.88 + R() * 0.24) * (row === 3 ? 0.8 : 1);
        const dirs = [];
        const side = new THREE.Vector3(-1, 0, 0);
        const d0 = dorsal.clone().multiplyScalar(0.5 - row * 0.08).addScaledVector(side, 0.8).add(new THREE.Vector3(0, 0, -0.1)).normalize();
        const fall = new THREE.Vector3(-0.42 + row * 0.04, -0.9, -0.12 + (R() - 0.5) * 0.12).normalize();
        for (let j = 0; j < segs; j++) {
          const f = Math.min(1, (j / (segs - 1)) / 0.4);
          dirs.push(d0.clone().lerp(fall, f * f * (3 - 2 * f)).normalize());
        }
        const pal = row === 0 ? palettes[[2, 3, 2, 4][i % 4]] : row === 1 ? palettes[[1, 4, 2, 1][i % 4]] : row === 2 ? palettes[[0, 1, 4][i % 3]] : palettes[[0, 0, 1][i % 3]];
        mk(boneName, anchor, dirs, dorsal.clone().addScaledVector(side, 0.3), {
          length: len,
          segs,
          width: 0.062 + R() * 0.02,
          palette: pal,
          stiff: 0.05 + R() * 0.07,
          drag: 2.6 + R() * 2.2,
          thick: 0.008 + (3 - row) * 0.006,
          kind: 'mane',
        });
      }
    }
    // --- forelock: falls forward over the forehead, parted around the horn
    for (let i = 0; i < 6; i++) {
      const x = (i - 2.5) * 0.013;
      const a = headPt(0.035 + Math.abs(x) * 0.3, 0.07, x);
      const anchorC = new THREE.Vector3(...a);
      const inside = new THREE.Vector3(...headPt(0.08, -0.02, x * 0.5));
      const anchor = this._surfacePoint(anchorC.clone().add(HU.clone().multiplyScalar(0.1)), inside);
      const lat = new THREE.Vector3(Math.sign(x) || 1, 0, 0);
      const dirs = [];
      for (let j = 0; j < 6; j++) {
        const f = j / 5;
        dirs.push(HF.clone().multiplyScalar(0.8).addScaledVector(HU, 0.35 - f * 0.4).addScaledVector(lat, 0.35 + f * 0.25).normalize());
      }
      mk('head', anchor, dirs, HU.clone(), {
        length: 0.15 + R() * 0.06,
        segs: 6,
        width: 0.038 + R() * 0.01,
        palette: palettes[[2, 0, 4, 1, 2, 3][i]],
        stiff: 0.09 + R() * 0.05,
        drag: 3 + R() * 2,
        thick: 0.01,
        kind: 'forelock',
      });
    }
    // --- tail
    const dock = new THREE.Vector3(0, 1.2, -0.875);
    const dockDir = new THREE.Vector3(0, -0.88, -0.47).normalize();
    for (let i = 0; i < 30; i++) {
      const ang = (i / 30) * Math.PI * 2 + i * 0.4;
      const rad = new THREE.Vector3(Math.cos(ang), 0, Math.sin(ang));
      rad.addScaledVector(dockDir, -rad.dot(dockDir)).normalize();
      const along = 0.02 + (i % 3) * 0.05;
      const anchor = dock.clone().addScaledVector(dockDir, along).addScaledVector(rad, 0.022);
      const dirs = [];
      const segs = 10;
      for (let j = 0; j < segs; j++) {
        const f = j / (segs - 1);
        dirs.push(dockDir.clone().multiplyScalar(1 - f * 0.7).add(new THREE.Vector3(0, -f * 1.0, -0.04)).addScaledVector(rad, 0.08 * (1 - f)).normalize());
      }
      mk('tail2', anchor, dirs, rad, {
        length: 0.68 + R() * 0.16,
        segs,
        width: 0.065 + R() * 0.02,
        palette: palettes[[0, 2, 1, 3, 4, 2, 1][i % 7]],
        stiff: 0.03 + R() * 0.04,
        drag: 2.2 + R() * 1.6,
        thick: 0.012,
        kind: 'tail',
        drops: 2,
        wet: 0.3,
      });
      locks[locks.length - 1].billboard = true;
    }
    this.hair = new HairSystem(locks, { name: 'mane', droplets });
    this.hair.mesh.castShadow = true;
    // colliders in bone space
    this.colliderDefs = [
      ['neck1', [0, 1.2, 0.56], [0, 1.43, 0.72], 0.125],
      ['neck2', [0, 1.43, 0.72], [0, 1.64, 0.835], 0.095],
      ['neck3', [0, 1.64, 0.835], [0, 1.81, 0.9], 0.075],
      ['head', headPt(0.08, -0.02), headPt(0.45, -0.03), 0.07],
      ['chest', [0, 1.08, 0.45], [0, 1.08, 0.0], 0.25],
      ['hips', [0, 1.1, -0.1], [0, 1.1, -0.55], 0.25],
      ['hips', [0.085, 1.1, -0.58], [0.1, 0.8, -0.7], 0.15],
      ['hips', [-0.085, 1.1, -0.58], [-0.1, 0.8, -0.7], 0.15],
    ].map(([bn, a, b, r]) => ({ bone: this.bones[bn], la: this._local(bn, new THREE.Vector3(...a)), lb: this._local(bn, new THREE.Vector3(...b)), r, a: new THREE.Vector3(), b: new THREE.Vector3() }));
    // horn collider
    this.hornCol = { a: new THREE.Vector3(), b: new THREE.Vector3(), r: 0.02 };
    this.hair.colliders = [...this.colliderDefs, this.hornCol];
    return this.hair;
  }

  updateColliders() {
    for (const c of this.colliderDefs) {
      c.a.copy(c.la).applyMatrix4(c.bone.matrixWorld);
      c.b.copy(c.lb).applyMatrix4(c.bone.matrixWorld);
    }
    this.horn.localToWorld(this.hornCol.a.set(0, 0.01, 0));
    this.horn.localToWorld(this.hornCol.b.set(0, 0.29, 0));
  }

  hornTipWorld(target) {
    return this.horn.localToWorld(target.copy(this.hornTipLocal));
  }
}
