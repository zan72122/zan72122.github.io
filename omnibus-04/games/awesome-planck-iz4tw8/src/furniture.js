// Everyday objects: furniture, appliances, toys, produce. Each returns a mesh group
// plus simple physics parts (boxes/cylinders/balls) and a mass in kg.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';
import { M, color, fabric } from './materials.js';
import { rand } from './textures.js';
import { mergeGeometries } from 'three/addons/BufferGeometryUtils.js';

const pick = (a) => a[Math.floor(rand() * a.length)];

class Kit {
  constructor() { this.g = new THREE.Group(); this.parts = []; }
  mesh(geo, mat, x = 0, y = 0, z = 0, rot) {
    const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z);
    if (rot) m.rotation.set(rot[0], rot[1], rot[2]);
    m.castShadow = true; m.receiveShadow = true; this.g.add(m); return m;
  }
  box(w, h, d, mat, x = 0, y = 0, z = 0, { r = 0, phys = true, rot } = {}) {
    const geo = r > 0 ? new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2, h / 2, d / 2)) : new THREE.BoxGeometry(w, h, d);
    const m = this.mesh(geo, mat, x, y, z, rot);
    if (phys) this.parts.push({ shape: { kind: 'box', hx: w / 2, hy: h / 2, hz: d / 2 }, offset: [x, y, z] });
    return m;
  }
  cyl(r0, r1, h, mat, x = 0, y = 0, z = 0, { phys = true, seg = 16, rot } = {}) {
    const m = this.mesh(new THREE.CylinderGeometry(r0, r1, h, seg), mat, x, y, z, rot);
    if (phys && !rot) this.parts.push({ shape: { kind: 'cyl', hh: h / 2, r: Math.max(r0, r1) }, offset: [x, y, z] });
    return m;
  }
  ball(r, mat, x = 0, y = 0, z = 0, { phys = true, seg = 16 } = {}) {
    const m = this.mesh(new THREE.SphereGeometry(r, seg, Math.max(8, seg * 0.7 | 0)), mat, x, y, z);
    if (phys) this.parts.push({ shape: { kind: 'ball', r }, offset: [x, y, z] });
    return m;
  }
  // merge meshes that share a material: one draw call per material per object
  done(mass, extra = {}) {
    const by = new Map();
    for (const m of [...this.g.children]) {
      if (!m.isMesh) continue;
      m.updateMatrix();
      let g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
      for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
      if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
      g.applyMatrix4(m.matrix);
      if (!by.has(m.material)) by.set(m.material, []);
      by.get(m.material).push(g);
      this.g.remove(m);
    }
    for (const [mat, list] of by) {
      const mesh = new THREE.Mesh(list.length > 1 ? mergeGeometries(list, false) : list[0], mat);
      mesh.castShadow = true; mesh.receiveShadow = true;
      this.g.add(mesh);
    }
    return { group: this.g, parts: this.parts, mass, ...extra };
  }
}

const sofaFabrics = () => pick([[118, 128, 116], [150, 132, 110], [96, 110, 132], [168, 158, 142], [130, 84, 70]]);
const woodM = () => pick([color(0x9a7650, 0.55), color(0x6e5038, 0.6), color(0xc4a27a, 0.55)]);

export const ITEMS = {
  sofa() {
    const k = new Kit(); const f = fabric('plain', sofaFabrics());
    k.box(1.7, 0.4, 0.82, f, 0, 0.26, 0, { r: 0.05 });
    k.box(1.7, 0.46, 0.2, f, 0, 0.62, -0.31, { r: 0.07 });
    k.box(0.2, 0.26, 0.82, f, -0.85, 0.55, 0, { r: 0.07 });
    k.box(0.2, 0.26, 0.82, f, 0.85, 0.55, 0, { r: 0.07 });
    for (const x of [-0.4, 0.4]) k.box(0.78, 0.14, 0.6, f, x, 0.52, 0.08, { r: 0.06, phys: false });
    for (const x of [-0.75, 0.75]) for (const z of [-0.33, 0.33]) k.cyl(0.02, 0.02, 0.06, color(0x2a2520, 0.5), x, 0.03, z, { phys: false });
    return k.done(38);
  },
  armchair() {
    const k = new Kit(); const f = fabric('plain', sofaFabrics());
    k.box(0.8, 0.4, 0.78, f, 0, 0.25, 0, { r: 0.05 });
    k.box(0.8, 0.5, 0.18, f, 0, 0.66, -0.3, { r: 0.07 });
    k.box(0.16, 0.25, 0.78, f, -0.4, 0.55, 0, { r: 0.06 }); k.box(0.16, 0.25, 0.78, f, 0.4, 0.55, 0, { r: 0.06 });
    return k.done(16);
  },
  chair() {
    const k = new Kit(); const w = woodM();
    k.box(0.44, 0.04, 0.42, w, 0, 0.45, 0);
    for (const x of [-0.19, 0.19]) for (const z of [-0.18, 0.18]) k.box(0.035, 0.45, 0.035, w, x, 0.225, z, { phys: false });
    k.box(0.44, 0.34, 0.03, w, 0, 0.72, -0.2);
    k.parts.push({ shape: { kind: 'box', hx: 0.21, hy: 0.22, hz: 0.2 }, offset: [0, 0.22, 0] });
    return k.done(5);
  },
  table() {
    const k = new Kit(); const w = woodM();
    k.box(1.3, 0.04, 0.8, w, 0, 0.72, 0);
    for (const x of [-0.58, 0.58]) for (const z of [-0.34, 0.34]) k.box(0.05, 0.7, 0.05, w, x, 0.35, z, { phys: false });
    k.parts.push({ shape: { kind: 'box', hx: 0.6, hy: 0.35, hz: 0.36 }, offset: [0, 0.35, 0] });
    return k.done(20);
  },
  chabudai() {
    const k = new Kit(); const w = color(0x5a3a26, 0.4);
    k.cyl(0.42, 0.42, 0.035, w, 0, 0.32, 0, { seg: 28 });
    for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + 0.78; k.box(0.04, 0.3, 0.04, w, Math.cos(a) * 0.28, 0.15, Math.sin(a) * 0.28, { phys: false }); }
    const cup = k.cyl(0.035, 0.03, 0.07, color(0xe8e2d4, 0.3), 0.1, 0.375, 0.05, { phys: false });
    return k.done(7);
  },
  tv() {
    const k = new Kit();
    k.box(1.0, 0.6, 0.05, color(0x121315, 0.25, 0.3), 0, 0.42, 0, { r: 0.01 });
    k.mesh(new THREE.PlaneGeometry(0.96, 0.56), new THREE.MeshStandardMaterial({ color: 0x0a0c10, roughness: 0.08, metalness: 0.3 }), 0, 0.42, 0.027);
    k.box(0.3, 0.03, 0.2, color(0x1a1b1d, 0.4), 0, 0.015, 0);
    k.box(0.06, 0.12, 0.04, color(0x1a1b1d, 0.4), 0, 0.08, 0, { phys: false });
    return k.done(11, { cable: true });
  },
  fridge() {
    const k = new Kit(); const c = pick([0xeeeeea, 0xd9dcdc, 0xc7ccd0]);
    k.box(0.62, 1.72, 0.66, color(c, 0.3, 0.1), 0, 0.86, 0, { r: 0.03 });
    k.box(0.6, 0.008, 0.01, color(0x777777, 0.5), 0, 1.15, 0.335, { phys: false });
    k.box(0.02, 0.35, 0.03, M.aluminum, 0.24, 1.4, 0.345, { phys: false });
    k.box(0.02, 0.25, 0.03, M.aluminum, 0.24, 0.85, 0.345, { phys: false });
    // magnets & a child's drawing
    k.mesh(new THREE.PlaneGeometry(0.2, 0.15), fabric('dots', [250, 240, 200], [255, 255, 255], 3), -0.1, 1.45, 0.334);
    return k.done(62);
  },
  washer() {
    const k = new Kit();
    k.box(0.6, 0.9, 0.6, color(0xf1f1ee, 0.3, 0.05), 0, 0.45, 0, { r: 0.03 });
    k.mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.02, 24), new THREE.MeshStandardMaterial({ color: 0x5b6a75, roughness: 0.05, metalness: 0.5, transparent: true, opacity: 0.8 }), 0, 0.45, 0.305, [Math.PI / 2, 0, 0]);
    k.box(0.5, 0.08, 0.02, color(0xd6d8d8, 0.4), 0, 0.82, 0.3, { phys: false });
    return k.done(52);
  },
  microwave() {
    const k = new Kit();
    k.box(0.48, 0.28, 0.36, color(0xf0efe9, 0.35), 0, 0.14, 0, { r: 0.015 });
    k.box(0.32, 0.2, 0.01, color(0x1c1e21, 0.1, 0.4), -0.05, 0.14, 0.18, { phys: false });
    return k.done(12);
  },
  riceCooker() {
    const k = new Kit();
    k.cyl(0.14, 0.15, 0.2, color(0xf3f1ea, 0.3), 0, 0.1, 0, { seg: 20 });
    k.ball(0.14, color(0xf3f1ea, 0.3), 0, 0.2, 0, { phys: false }).scale.y = 0.4;
    k.box(0.08, 0.03, 0.03, color(0x777777, 0.4), 0, 0.27, 0.1, { phys: false });
    return k.done(4);
  },
  fan() {
    const k = new Kit(); const c = color(0xf4f4f2, 0.35);
    k.cyl(0.16, 0.18, 0.05, c, 0, 0.025, 0, { seg: 20 });
    k.cyl(0.02, 0.02, 0.7, c, 0, 0.4, 0, { phys: false });
    k.cyl(0.2, 0.2, 0.08, c, 0, 0.82, 0.03, { rot: [Math.PI / 2, 0, 0] });
    const blade = new THREE.MeshStandardMaterial({ color: 0x9fd0ea, roughness: 0.3, transparent: true, opacity: 0.8 });
    for (let i = 0; i < 3; i++) k.box(0.05, 0.16, 0.01, blade, Math.cos(i * 2.1) * 0.09, 0.82 + Math.sin(i * 2.1) * 0.09, 0.07, { phys: false, rot: [0, 0, i * 2.1] });
    k.parts.push({ shape: { kind: 'box', hx: 0.2, hy: 0.45, hz: 0.18 }, offset: [0, 0.45, 0] });
    return k.done(3.5);
  },
  bookshelf() {
    const k = new Kit(); const w = woodM();
    k.box(0.8, 1.8, 0.3, w, 0, 0.9, 0, { phys: true });
    const cols = [0xa83a32, 0x2f5f8a, 0xd9b44a, 0x3f7a4f, 0xe8e2d0, 0x333333, 0x8a5a9a];
    for (let s = 0; s < 4; s++) for (let i = 0; i < 9; i++) {
      const h = 0.22 + rand() * 0.08;
      k.box(0.06, h, 0.2, color(pick(cols), 0.8), -0.33 + i * 0.075, 0.08 + s * 0.44 + h / 2, 0.06, { phys: false });
    }
    return k.done(28);
  },
  books() {
    const k = new Kit();
    const cols = [0xa83a32, 0x2f5f8a, 0xd9b44a, 0x3f7a4f, 0xe8e2d0];
    k.box(0.16, 0.03, 0.23, color(pick(cols), 0.8), 0, 0.015, 0);
    k.box(0.15, 0.03, 0.22, color(pick(cols), 0.8), 0.01, 0.045, 0);
    return k.done(0.8);
  },
  cardboard() {
    const k = new Kit(); const s = 0.3 + rand() * 0.3;
    k.box(s * 1.3, s, s, M.cardboard, 0, s / 2, 0, { r: 0.01 });
    return k.done(2 + s * 4);
  },
  cushion() {
    const k = new Kit(); const c = pick([[210, 90, 80], [90, 130, 190], [230, 200, 90], [120, 160, 110], [200, 190, 180]]);
    k.box(0.5, 0.1, 0.5, fabric(rand() < 0.5 ? 'plain' : 'check', c, [240, 236, 226], 4), 0, 0.05, 0, { r: 0.045 });
    return k.done(0.6);
  },
  bear() {
    const k = new Kit(); const f = color(pick([0xb07a4a, 0xd9b48a, 0xe8dccb]), 0.95);
    k.ball(0.13, f, 0, 0.14, 0);
    k.ball(0.1, f, 0, 0.33, 0.02);
    k.ball(0.04, f, -0.07, 0.42, 0, { phys: false }); k.ball(0.04, f, 0.07, 0.42, 0, { phys: false });
    for (const x of [-0.12, 0.12]) k.ball(0.05, f, x, 0.18, 0.05, { phys: false });
    for (const x of [-0.07, 0.07]) k.ball(0.055, f, x, 0.04, 0.09, { phys: false });
    k.ball(0.03, color(0x3a2a20, 0.6), 0, 0.31, 0.1, { phys: false });
    return k.done(0.5);
  },
  plant() {
    const k = new Kit();
    k.cyl(0.16, 0.12, 0.3, color(pick([0xb86b45, 0xe8e2d8, 0x3b3b3b]), 0.7), 0, 0.15, 0);
    const lm = M.leaves.clone(); lm.color = new THREE.Color(0x9fbf80);
    for (let i = 0; i < 6; i++) { const p = k.mesh(new THREE.PlaneGeometry(0.5, 0.5), lm, (rand() - 0.5) * 0.15, 0.5 + rand() * 0.2, (rand() - 0.5) * 0.15, [rand() * 3, rand() * 3, rand() * 3]); }
    k.parts.push({ shape: { kind: 'ball', r: 0.22 }, offset: [0, 0.5, 0] });
    return k.done(6);
  },
  bucket() {
    const k = new Kit();
    k.cyl(0.15, 0.12, 0.26, color(pick([0x2f7fd0, 0xe25540, 0xf0c030]), 0.4), 0, 0.13, 0);
    return k.done(0.8);
  },
  ball() {
    const k = new Kit();
    const beach = rand() < 0.5;
    k.ball(beach ? 0.2 : 0.11, beach ? fabric('stripe', [240, 80, 80], [250, 250, 245], 6) : fabric('check', [30, 30, 30], [250, 250, 250], 5), 0, 0.12, 0, { seg: 20 });
    return k.done(0.35);
  },
  bin() {
    const k = new Kit(); const c = color(pick([0x2e6fb4, 0x3a8a4a, 0x8a8a8a]), 0.5);
    k.cyl(0.24, 0.2, 0.62, c, 0, 0.31, 0, { seg: 20 });
    k.cyl(0.26, 0.26, 0.05, c, 0, 0.64, 0, { seg: 20, phys: false });
    return k.done(3);
  },
  clock() {
    const k = new Kit();
    k.cyl(0.16, 0.16, 0.05, color(0xf2f0e8, 0.4), 0, 0.16, 0, { rot: [Math.PI / 2, 0, 0], seg: 24 });
    k.box(0.01, 0.1, 0.01, M.black, 0, 0.2, 0.03, { phys: false });
    k.box(0.07, 0.01, 0.01, M.black, 0.03, 0.16, 0.03, { phys: false });
    k.parts.push({ shape: { kind: 'box', hx: 0.16, hy: 0.16, hz: 0.03 }, offset: [0, 0.16, 0] });
    return k.done(1);
  },
  kettle() {
    const k = new Kit();
    k.ball(0.11, color(0xc9ccce, 0.25, 0.9), 0, 0.1, 0).scale.y = 0.85;
    k.cyl(0.015, 0.02, 0.12, color(0xc9ccce, 0.25, 0.9), 0.12, 0.13, 0, { phys: false, rot: [0, 0, -0.8] });
    return k.done(1.2);
  },
  toyCar() {
    const k = new Kit(); const c = color(pick([0xd83a2e, 0x2e7ad8, 0xf2c230]), 0.35, 0.2);
    k.box(0.26, 0.08, 0.13, c, 0, 0.07, 0, { r: 0.02 });
    k.box(0.14, 0.06, 0.12, c, -0.02, 0.13, 0, { r: 0.02, phys: false });
    for (const x of [-0.08, 0.08]) for (const z of [-0.07, 0.07]) k.cyl(0.03, 0.03, 0.02, M.rubber, x, 0.03, z, { rot: [Math.PI / 2, 0, 0], phys: false });
    return k.done(0.4);
  },
  blocks() {
    const k = new Kit();
    const cols = [0xe04a3a, 0x3a8ae0, 0xf0c33a, 0x4ab86a];
    for (let i = 0; i < 3; i++) k.box(0.08, 0.08, 0.08, color(cols[i], 0.5), (i - 1) * 0.09, 0.04, 0);
    return k.done(0.3);
  },
  futonRoll() {
    const k = new Kit();
    k.cyl(0.25, 0.25, 1.0, fabric('flower', [120, 150, 200], [240, 238, 230], [240, 200, 90]), 0, 0.25, 0, { rot: [0, 0, Math.PI / 2], seg: 18 });
    k.parts.push({ shape: { kind: 'box', hx: 0.5, hy: 0.24, hz: 0.24 }, offset: [0, 0.25, 0] });
    return k.done(6);
  },
  laundryBasket() {
    const k = new Kit();
    k.box(0.5, 0.3, 0.36, color(0xf2f2ee, 0.5), 0, 0.15, 0, { r: 0.03 });
    k.box(0.44, 0.08, 0.3, fabric('stripe', [80, 120, 180], [240, 240, 235], 5), 0, 0.3, 0, { phys: false, r: 0.03 });
    return k.done(2);
  },
  umbrella() {
    const k = new Kit();
    const c = pick([[40, 40, 44], [200, 60, 70], [60, 110, 190], [240, 240, 235]]);
    k.cyl(0.012, 0.012, 0.85, color(0x333333, 0.4, 0.5), 0, 0.42, 0);
    k.cyl(0.04, 0.02, 0.6, fabric('plain', c), 0, 0.55, 0, { phys: false });
    return k.done(0.5);
  },
  desk() {
    const k = new Kit(); const w = woodM();
    k.box(1.1, 0.04, 0.6, w, 0, 0.72, 0);
    k.box(0.4, 0.7, 0.58, w, 0.33, 0.35, 0);
    k.box(0.04, 0.7, 0.56, w, -0.52, 0.35, 0, { phys: false });
    k.parts.push({ shape: { kind: 'box', hx: 0.55, hy: 0.36, hz: 0.3 }, offset: [0, 0.36, 0] });
    const lamp = k.cyl(0.05, 0.07, 0.03, color(0x222222, 0.4), -0.35, 0.755, -0.1, { phys: false });
    return k.done(22);
  },
  bed() {
    const k = new Kit(); const w = woodM();
    k.box(1.0, 0.3, 2.0, w, 0, 0.18, 0);
    k.box(0.96, 0.18, 1.94, fabric('plain', [240, 238, 232]), 0, 0.42, 0, { r: 0.06 });
    k.box(0.95, 0.08, 1.4, fabric('check', [150, 180, 210], [240, 240, 235], 6), 0, 0.53, 0.25, { r: 0.04, phys: false });
    k.box(0.6, 0.12, 0.35, fabric('plain', [245, 245, 240]), 0, 0.56, -0.75, { r: 0.05, phys: false });
    return k.done(40);
  },
  // produce
  apple() { const k = new Kit(); k.ball(0.045, color(pick([0xb3261e, 0xc8352a, 0x9e1f1a]), 0.35), 0, 0.045, 0, { seg: 12 }); return k.done(0.25); },
  orange() { const k = new Kit(); k.ball(0.042, color(0xf08a1c, 0.5), 0, 0.042, 0, { seg: 12 }); return k.done(0.2); },
  watermelon() { const k = new Kit(); const m = k.ball(0.15, fabric('stripe', [40, 90, 40], [70, 140, 60], 8), 0, 0.15, 0, { seg: 18 }); m.scale.set(1, 1, 1.15); return k.done(5); },
  cabbage() { const k = new Kit(); k.ball(0.1, color(0x9fc27a, 0.8), 0, 0.1, 0, { seg: 14 }); return k.done(1.2); },
  daikon() { const k = new Kit(); k.cyl(0.035, 0.02, 0.4, color(0xf2f0e8, 0.6), 0, 0.2, 0, { seg: 10 }); k.cyl(0.03, 0.05, 0.12, color(0x5f9a45, 0.8), 0, 0.46, 0, { phys: false, seg: 8 }); return k.done(1.0); },
  crate() {
    const k = new Kit(); const w = color(0xb58e5c, 0.8);
    k.box(0.6, 0.02, 0.4, w, 0, 0.01, 0);
    for (const [x, z, sx, sz] of [[0, 0.19, 0.6, 0.02], [0, -0.19, 0.6, 0.02], [0.29, 0, 0.02, 0.4], [-0.29, 0, 0.02, 0.4]]) k.box(sx, 0.2, sz, w, x, 0.1, z);
    return k.done(2);
  },
};

// room contents (upright arrangement; they are settled by physics under sideways gravity)
export const ROOM_SETS = {
  ldk: ['sofa', 'table', 'chair', 'chair', 'tv', 'plant', 'cushion', 'cushion', 'bookshelf', 'toyCar', 'clock', 'fridge', 'riceCooker', 'microwave'],
  kids: ['bed', 'desk', 'chair', 'bear', 'ball', 'blocks', 'toyCar', 'books', 'cushion', 'laundryBasket'],
  bed: ['bed', 'laundryBasket', 'cushion', 'fan', 'clock', 'books', 'plant'],
  kitchen: ['fridge', 'table', 'chair', 'chair', 'chair', 'microwave', 'riceCooker', 'kettle', 'bin', 'plant', 'washer'],
  washitsu: ['chabudai', 'cushion', 'cushion', 'cushion', 'fan', 'clock', 'futonRoll', 'plant'],
  study: ['desk', 'chair', 'bookshelf', 'books', 'books', 'cardboard', 'fan'],
  shop: ['crate', 'crate', 'crate', 'crate', 'watermelon', 'watermelon', 'cabbage', 'cabbage', 'cabbage', 'daikon', 'daikon',
    'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'orange', 'bin', 'cardboard'],
  living: ['sofa', 'tv', 'chabudai', 'cushion', 'plant', 'clock', 'bookshelf'],
};

// things that tumble out of the apartment balconies into the sky
export const SKY_ITEMS = ['chair', 'cushion', 'bear', 'plant', 'bucket', 'ball', 'bin', 'clock', 'kettle', 'futonRoll', 'laundryBasket', 'umbrella',
  'armchair', 'fan', 'cardboard', 'books', 'toyCar', 'riceCooker', 'microwave', 'chair', 'cushion', 'ball', 'sofa', 'tv'];
export const STREET_ITEMS = ['apple', 'orange', 'apple', 'orange', 'cabbage', 'watermelon', 'daikon'];

export function makeItem(name) { return ITEMS[name](); }
