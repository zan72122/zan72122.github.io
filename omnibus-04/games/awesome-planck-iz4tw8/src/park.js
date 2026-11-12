// Trees, the futon on the alley wall, laundry line, park equipment and the tall ball-stop net.
import * as THREE from 'three';
import { Batcher, mergeStatic } from './geo.js';
import { M, texMat, color, fabric } from './materials.js';
import { T, rand, setSeed } from './textures.js';
import { LEVEL } from './level.js';
import { staticBox, staticCylinder } from './physics.js';

const up = new THREE.Vector3(0, 1, 0);

function limb(group, a, b, r0, r1, mat) {
  const d = b.clone().sub(a), L = d.length();
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r1, r0, L, 8), mat);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(up, d.normalize());
  m.castShadow = true; m.receiveShadow = true;
  group.add(m);
  return m;
}

export function buildPark(ctx) {
  const { scene, w2d } = ctx;
  const out = { trees: [], swing: null, jungle: null, futon: null, laundry: [], fence: null, leafEmitters: [] };
  const group = new THREE.Group(); scene.add(group);
  const B = new Batcher();
  setSeed(4242);
  for (const p of LEVEL.props) {
    if (p.type === 'tree') out.trees.push(tree(p, group, w2d));
    else if (p.type === 'swing') out.swing = swing(p, B, group, w2d);
    else if (p.type === 'jungle') out.jungle = jungle(p, B, group, w2d);
    else if (p.type === 'fence') out.fence = fence(p, group, w2d);
    else if (p.type === 'bench') bench(p, B);
    else if (p.type === 'sandbox') out.sandbox = sandbox(p, B, group);
    else if (p.type === 'futon') out.futon = futon(p, group, w2d);
    else if (p.type === 'laundryLine') out.laundry.push(laundryLine(p, B, group, w2d));
  }
  B.build(group);
  mergeStatic(group);
  return out;
}

function tree(p, group, w2d) {
  const g = new THREE.Group();
  const bark = M.bark;
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const base = V(p.x, 0, p.z);
  const top = V(p.x + 0.05, p.trunkH + p.crown * 1.1, p.z);
  limb(g, base, V(p.x, p.trunkH, p.z), 0.24, 0.18, bark);
  limb(g, V(p.x, p.trunkH - 0.05, p.z), top, 0.18, 0.06, bark);
  const branches = [];
  const tips = [];
  for (let i = 0; i < 7; i++) {
    const y = p.trunkH + 0.2 + i * (p.crown * 0.8 / 7);
    const a = rand() * Math.PI * 2;
    const len = p.crown * (0.75 - i * 0.06) * (0.8 + rand() * 0.4);
    const s = V(p.x, y, p.z);
    const e = V(p.x + Math.cos(a) * len, y + len * 0.45, p.z + Math.sin(a) * len * 0.8);
    limb(g, s, e, 0.09 - i * 0.008, 0.03, bark);
    branches.push({ s, e });
    tips.push(e);
  }
  // foliage: clusters of leaf cards
  const card = new THREE.PlaneGeometry(1.4, 1.4);
  const leafM = M.leaves.clone();
  leafM.color = new THREE.Color(p.persimmon ? 0xc9c17a : 0xa9c08a);
  const n = p.persimmon ? 150 : 110;
  const inst = new THREE.InstancedMesh(card, leafM, n);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3();
  const cy = p.trunkH + p.crown * 0.75;
  for (let i = 0; i < n; i++) {
    const t = tips[i % tips.length];
    const c = V(p.x, cy, p.z).lerp(t, 0.3 + rand() * 0.8);
    c.x += (rand() - 0.5) * 1.6; c.y += (rand() - 0.4) * 1.3; c.z += (rand() - 0.5) * 1.6;
    e.set(rand() * 3, rand() * 3, rand() * 3); q.setFromEuler(e);
    const s = 0.8 + rand() * 0.7; sc.set(s, s, s);
    m4.compose(c, q, sc); inst.setMatrixAt(i, m4);
    const shade = 0.7 + rand() * 0.35;
    inst.setColorAt(i, new THREE.Color(shade, shade, shade * 0.95));
  }
  inst.castShadow = true; inst.receiveShadow = true;
  g.add(inst);
  const fruits = [];
  if (p.persimmon) {
    const fm = color(0xe8751a, 0.45);
    for (let i = 0; i < 22; i++) {
      const t = tips[i % tips.length];
      const c = V(p.x, cy, p.z).lerp(t, 0.5 + rand() * 0.5);
      c.x += (rand() - 0.5) * 1.2; c.y += (rand() - 0.5) * 1.0; c.z += (rand() - 0.5) * 1.2;
      const f = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 8), fm);
      f.scale.y = 0.8;
      // hangs from its stem towards +x
      f.position.copy(c).add(V(0.07, 0, 0));
      f.castShadow = true;
      g.add(f); fruits.push(f);
    }
  }
  group.add(g);
  staticCylinder(p.x, 0, p.trunkH + p.crown * 0.8, p.z, 0.2);
  const rec = { p, group: g, leaves: inst, fruits, crownCenter: V(p.x, cy, p.z), crownR: p.crown };
  if (Math.abs(p.z) < 0.5) {
    // the trunk's west side is a floor you can run along; branches are hand-holds
    w2d.solid(p.x - 0.2, 0, p.x + 0.2, p.trunkH + p.crown * 0.85, 'trunk');
    rec.top = p.trunkH + p.crown * 0.85;
    for (const b of branches) if (Math.abs(b.e.z - p.z) < 1.2 && b.e.x > p.x) w2d.hold('branch', b.s.x + 0.25, b.s.y + 0.1, b.e.x, b.e.y, { tree: rec });
  }
  return rec;
}

function swing(p, B, group, w2d) {
  const frameM = color(0x3f7fbf, 0.45, 0.4);
  const h = p.h, L = 1.9;
  // A-frames at z = ±1.3 and the top bar along z
  for (const z of [-1.3, 1.3]) {
    for (const dx of [-0.9, 0.9]) limb(group, new THREE.Vector3(p.x + dx, 0, z), new THREE.Vector3(p.x, h, z), 0.05, 0.05, frameM);
  }
  limb(group, new THREE.Vector3(p.x, h, -1.4), new THREE.Vector3(p.x, h, 1.4), 0.055, 0.055, frameM);
  staticCylinder(p.x, h - 0.06, h + 0.06, 0, 0.06);
  // two seats; chains hang sideways towards +x
  const seats = [];
  for (const z of [-0.55, 0.55]) {
    const sg = new THREE.Group();
    sg.position.set(p.x, h, z);
    const chainM = color(0x9a9ea2, 0.35, 0.9);
    for (const dz of [-0.2, 0.2]) {
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, L, 5), chainM);
      c.position.set(0, -L / 2, dz); sg.add(c);
    }
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.04, 0.46), color(0x2b2b2b, 0.8));
    seat.position.set(0, -L, 0); seat.castShadow = true; sg.add(seat);
    sg.rotation.z = Math.PI / 2 + 0.03; // hangs to +x
    sg.userData.dynamic = true;
    group.add(sg);
    seats.push({ g: sg, angle: Math.PI / 2, vel: 0, z });
  }
  const rec = { pivot: new THREE.Vector2(p.x, h), L, seats };
  rec.hold = w2d.hold('swing', p.x + L, h, p.x + L, h, { swing: rec });
  return rec;
}

function jungle(p, B, group, w2d) {
  const m = color(0xd9483b, 0.45, 0.4);
  const n = 4, s = 0.6;
  const x0 = p.x0, z0 = -((n - 1) * s) / 2;
  const nodes = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    // vertical bars
    limb(group, new THREE.Vector3(x0 + i * s, 0, z0 + j * s), new THREE.Vector3(x0 + i * s, (n - 1) * s + 0.2, z0 + j * s), 0.022, 0.022, m);
  }
  for (let k = 1; k < n + 0; k++) {
    const y = k * s + 0.2 - 0.6 + 0.6 * 0 + (k - 1) * 0 ;
    for (let i = 0; i < n; i++) {
      limb(group, new THREE.Vector3(x0 + i * s, k * s, z0), new THREE.Vector3(x0 + i * s, k * s, z0 + (n - 1) * s), 0.02, 0.02, m);
      limb(group, new THREE.Vector3(x0, k * s, z0 + i * s), new THREE.Vector3(x0 + (n - 1) * s, k * s, z0 + i * s), 0.02, 0.02, m);
      nodes.push([x0 + i * s, k * s]);
    }
  }
  for (const [x, y] of nodes) w2d.hold('bar', x + 0.03, y, x + 0.03, y, { jungle: true });
  staticBox(x0 - 0.03, 0, z0 - 0.03, x0 + (n - 1) * s + 0.03, (n - 1) * s + 0.2, z0 + (n - 1) * s + 0.03, { friction: 0.8 });
  return { x0, x1: x0 + (n - 1) * s };
}

function fence(p, group, w2d) {
  // tall green ball-stop net along the embankment
  const postM = color(0x5d6b5f, 0.5, 0.5);
  // the net covers the park only; the street beside it stays open to the sky
  const zA = -22, zB = 1.6, L = zB - zA, zc = (zA + zB) / 2;
  for (let z = zA; z <= zB + 0.01; z += (zB - zA) / 6) limb(group, new THREE.Vector3(p.x + 0.05, 0, z), new THREE.Vector3(p.x + 0.05, p.h, z), 0.05, 0.045, postM);
  limb(group, new THREE.Vector3(p.x + 0.05, p.h, zA), new THREE.Vector3(p.x + 0.05, p.h, zB), 0.03, 0.03, postM);
  limb(group, new THREE.Vector3(p.x + 0.05, 1.8, zA), new THREE.Vector3(p.x + 0.05, 1.8, zB), 0.03, 0.03, postM);
  // net texture (alpha grid)
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 64, 64); g.strokeStyle = 'rgba(52,86,60,1)'; g.lineWidth = 3;
  g.beginPath(); g.moveTo(0, 32); g.lineTo(64, 32); g.moveTo(32, 0); g.lineTo(32, 64); g.stroke();
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(L / 0.12, p.h / 0.12);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  const net = new THREE.Mesh(new THREE.PlaneGeometry(L, p.h), new THREE.MeshStandardMaterial({ map: t, transparent: true, alphaTest: 0.2, side: THREE.DoubleSide, roughness: 0.9, depthWrite: true }));
  net.rotation.y = Math.PI / 2; net.position.set(p.x + 0.04, p.h / 2, zc);
  group.add(net);
  // chain-link lower part
  const low = new THREE.Mesh(new THREE.PlaneGeometry(L, 1.8), new THREE.MeshStandardMaterial({ color: 0x6f7a72, transparent: true, opacity: 0.35, side: THREE.DoubleSide, roughness: 0.6, metalness: 0.5, depthWrite: false }));
  low.rotation.y = Math.PI / 2; low.position.set(p.x + 0.03, 0.9, zc);
  group.add(low);
  w2d.solid(p.x, 0, p.x + 0.08, p.h, 'net');
  w2d.solid(p.x - 0.3, p.h, p.x + 0.1, p.h + 0.12, 'rail'); // top rail: the end of this floor
  staticBox(p.x, 0, zA, p.x + 0.08, p.h, zB, { friction: 0.9, restitution: 0.05 });
  return { x: p.x, h: p.h, mesh: net };
}

function bench(p, B) {
  const wood = color(0x8a6a4a, 0.7);
  const metal = color(0x444648, 0.45, 0.6);
  B.aabb(wood, p.x - 0.9, 0.42, p.z - 0.22, p.x + 0.9, 0.46, p.z + 0.22, 1);
  B.aabb(wood, p.x - 0.9, 0.5, p.z - 0.26, p.x + 0.9, 0.86, p.z - 0.22, 1);
  for (const dx of [-0.75, 0.75]) B.aabb(metal, p.x + dx - 0.03, 0, p.z - 0.24, p.x + dx + 0.03, 0.44, p.z + 0.2, 1);
  staticBox(p.x - 0.9, 0, p.z - 0.26, p.x + 0.9, 0.86, p.z + 0.22);
}

function sandbox(p, B, group) {
  const wood = color(0x9a7a56, 0.8);
  const z0 = p.z - 1.0, z1 = p.z + 1.0;
  B.aabb(wood, p.x0, 0, z0, p.x0 + 0.12, 0.35, z1, 1);
  B.aabb(wood, p.x1 - 0.12, 0, z0, p.x1, 0.35, z1, 1);
  B.aabb(wood, p.x0, 0, z0, p.x1, 0.35, z0 + 0.12, 1);
  B.aabb(wood, p.x0, 0, z1 - 0.12, p.x1, 0.35, z1, 1);
  // the sand has slumped against the east board: a sideways "heap"
  const sandM = texMat('sand', T.soil, [1, 1], { color: 0xe8dcc0, roughness: 1 });
  const shape = new THREE.Shape();
  shape.moveTo(p.x1 - 0.12, 0.0); shape.lineTo(p.x1 - 0.12, 0.34); shape.lineTo(p.x1 - 0.55, 0.34);
  shape.quadraticCurveTo(p.x1 - 0.8, 0.16, p.x1 - 0.95, 0.0); shape.closePath();
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0 - 0.24, bevelEnabled: false });
  g.translate(0, 0, z0 + 0.12);
  B.add(sandM, g, null, 1);
  staticBox(p.x0, 0, z0, p.x1, 0.35, z1);
  return { x0: p.x0, x1: p.x1, z: p.z, lip: new THREE.Vector3(p.x1 - 0.5, 0.36, p.z) };
}

function futon(p, group, w2d) {
  // a futon lying on the alley wall: in sideways gravity it's a mattress on the floor
  const g = new THREE.Group();
  const th = 0.13;
  const mat = fabric('flower', [214, 120, 128], [243, 236, 226], [240, 200, 90]);
  const geo = new THREE.BoxGeometry(th, p.y1 - p.y0, 1.95, 1, 6, 12);
  // puff the mattress: bulge along -x
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i) / ((p.y1 - p.y0) / 2), z = pos.getZ(i) / 0.975;
    if (pos.getX(i) < 0) pos.setX(i, pos.getX(i) - 0.05 * (1 - y * y) * (1 - z * z));
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, mat); m.castShadow = m.receiveShadow = true;
  const pivot = new THREE.Group(); pivot.position.set(p.x, (p.y0 + p.y1) / 2, -0.2);
  m.position.set(-th / 2, 0, 0);
  pivot.add(m);
  // pillow
  const pil = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.5, 0.36, 1, 3, 3), fabric('plain', [236, 232, 222]));
  pil.position.set(-th - 0.07, 0.1, 0.72); pil.castShadow = true; pivot.add(pil);
  pivot.userData.dynamic = true;
  g.add(pivot);
  group.add(g);
  const surface = p.x - th;
  w2d.solid(surface, p.y0, p.x, p.y1, 'futon');
  w2d.bouncy.push({ x: surface, y0: p.y0, y1: p.y1, k: 0.82, id: p.id });
  staticBox(surface, p.y0, -1.2, p.x, p.y1, 0.8, { restitution: 0.6, friction: 0.8 });
  return { pivot, mesh: m, surface, y0: p.y0, y1: p.y1, squash: 0 };
}

function laundryLine(p, B, group, w2d) {
  // wall-mounted drying arms (物干し金物) on the east wall; the pole runs north-south.
  // The clothes are cloth simulations attached later: they stream sideways across the alley.
  const armM = color(0xc9ccce, 0.35, 0.7);
  const px = p.x + 0.85;
  for (const z of [p.z0, p.z1]) {
    B.aabb(armM, p.x, p.y - 0.03, z - 0.03, px + 0.05, p.y + 0.03, z + 0.03, 1);
    B.aabb(armM, p.x, p.y - 0.45, z - 0.025, p.x + 0.04, p.y, z + 0.025, 1);
  }
  const L = p.z1 - p.z0 + 0.4;
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, L, 8), M.aluminum);
  pole.rotation.x = Math.PI / 2; pole.position.set(px, p.y + 0.03, (p.z0 + p.z1) / 2); pole.castShadow = true;
  group.add(pole);
  return { x: px, y: p.y + 0.03, z0: p.z0 - 0.1, z1: p.z1 + 0.1 };
}
