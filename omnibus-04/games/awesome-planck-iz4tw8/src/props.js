// Street furniture: utility poles & wires, the crashed delivery van, vending machine,
// block walls, AC units, bicycle, curve mirror, street lamp.
import * as THREE from 'three';
import { Batcher, mergeStatic } from './geo.js';
import { M, texMat, color } from './materials.js';
import { T } from './textures.js';
import { LEVEL } from './level.js';
import { staticBox, staticCylinder } from './physics.js';

const up = new THREE.Vector3(0, 1, 0);

// wire between two points that sags sideways (gravity = +x)
export function sagWire(a, b, sag = 0.5, radius = 0.012, mat = M.wire) {
  const pts = [];
  const L = a.distanceTo(b);
  const dir = b.clone().sub(a).normalize();
  const g = new THREE.Vector3(1, 0, 0);
  const perp = g.clone().addScaledVector(dir, -g.dot(dir)); // gravity component perpendicular to the wire
  const k = perp.length();
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    const p = a.clone().lerp(b, t);
    p.addScaledVector(perp.clone().normalize(), 4 * sag * k * t * (1 - t) * (L / 20));
    pts.push(p);
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  const m = new THREE.Mesh(new THREE.TubeGeometry(curve, 32, radius, 5, false), mat);
  m.castShadow = true;
  return m;
}

export function buildProps(ctx) {
  const { scene, w2d } = ctx;
  const out = { poles: {}, holds: {}, anchors: {}, lamps: [], futon: null };
  const B = new Batcher();
  const group = new THREE.Group();
  scene.add(group);
  for (const p of LEVEL.props) {
    switch (p.type) {
      case 'pole': out.poles[p.id] = pole(p, B, group, w2d); break;
      case 'truck': truck(p, group); break;
      case 'vending': vending(p, B, group); break;
      case 'blockwall': {
        const m = texMat('bw', T.block, [1, 1], { color: 0xd6d1c7, roughness: 0.92 });
        B.aabb(m, p.x0, 0, p.z - 0.075, p.x1, p.h, p.z + 0.075, 0.8);
        B.aabb(M.concrete, p.x0 - 0.02, p.h, p.z - 0.09, p.x1 + 0.02, p.h + 0.06, p.z + 0.09, 1);
        staticBox(p.x0, 0, p.z - 0.075, p.x1, p.h, p.z + 0.075);
        break;
      }
      case 'ac': {
        const s = p.side === 'east' ? 1 : -1;
        const x0 = p.x + (s > 0 ? 0.25 : -0.85), x1 = x0 + 0.6;
        B.aabb(color(0xe9e8e2, 0.5), x0, p.y, p.z - 0.4, x1, p.y + 0.62, p.z + 0.4, 1);
        B.aabb(color(0x55575a, 0.6, 0.4), x0 - 0.01, p.y + 0.12, p.z - 0.3, x0, p.y + 0.52, p.z + 0.25, 1);
        B.aabb(M.aluminum, p.x, p.y - 0.05, p.z - 0.35, x0, p.y, p.z + 0.35, 1);
        staticBox(x0, p.y, p.z - 0.4, x1, p.y + 0.62, p.z + 0.4);
        break;
      }
      case 'bike': bike(p, group); break;
      case 'mirror': mirror(p, B, group); break;
      case 'lamp': out.lamps.push(streetLamp(p, B, group)); break;
    }
  }
  B.build(group);
  wires(out, group);
  mergeStatic(group);
  return out;
}

function pole(p, B, group, w2d) {
  const g = new THREE.CylinderGeometry(0.13, 0.19, p.h, 16);
  const m = new THREE.Mesh(g, M.pole); m.position.set(p.x, p.h / 2, p.z); m.castShadow = m.receiveShadow = true;
  group.add(m);
  // crossarm with insulators
  const top = p.h - 0.6;
  B.aabb(color(0x6d6e70, 0.5, 0.6), p.x - 0.07, top - 0.08, p.z - 1.1, p.x + 0.07, top + 0.04, p.z + 1.1, 1);
  B.aabb(color(0x6d6e70, 0.5, 0.6), p.x - 0.07, top - 1.08, p.z - 0.8, p.x + 0.07, top - 0.96, p.z + 0.8, 1);
  const ins = color(0x7a5a3a, 0.35);
  for (const dz of [-0.95, 0, 0.95]) B.aabb(ins, p.x - 0.05, top + 0.04, p.z + dz - 0.05, p.x + 0.05, top + 0.22, p.z + dz + 0.05, 1);
  // pole tag plate & yellow-black guard sleeve at the base
  B.aabb(color(0xd8d8d2, 0.5), p.x - 0.2, 1.6, p.z + 0.1, p.x - 0.19, 2.0, p.z + 0.3, 1);
  const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.8, 16, 1, true), color(0xd9b21e, 0.6));
  sleeve.position.set(p.x, 0.9, p.z); group.add(sleeve);
  const rec = { x: p.x, z: p.z, top, h: p.h, mesh: m };
  // step bolts: ladder rungs. In the gameplay plane they become the courier's hand-hold.
  if (p.bolts) {
    const boltM = color(0x55524d, 0.5, 0.8);
    for (let y = p.bolts[0], i = 0; y < p.bolts[1]; y += 0.45, i++) {
      const a = (i % 2 ? 1 : -1) * 0.55 + Math.PI * 0.5;
      const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.34, 6), boltM);
      bolt.rotation.z = Math.PI / 2; bolt.rotation.y = a;
      bolt.position.set(p.x + Math.cos(-a) * 0.3, y, p.z + Math.sin(-a) * 0.3 * -1);
      group.add(bolt);
    }
    rec.hold = w2d.hold('pole', p.x + 0.22, p.bolts[0], p.x + 0.22, p.bolts[1], { id: p.id });
  }
  if (Math.abs(p.z) < 0.5) w2d.solid(p.x - 0.18, 0, p.x + 0.18, p.h, 'pole');
  staticCylinder(p.x, 0, p.h, p.z, 0.17);
  return rec;
}

function wires(out, group) {
  const P0 = out.poles.P0, P1 = out.poles.P1, P2 = out.poles.P2;
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  // service drops to houses and lines between poles (they all sag towards +x)
  const lines = [
    [V(P0.x, P0.top + 0.2, P0.z - 0.95), V(-3.2, 9.0, -30), 0.9],
    [V(P0.x, P0.top + 0.2, P0.z + 0.95), V(-3.4, 9.2, 30), 0.9],
    [V(P0.x, P0.top - 1.0, P0.z), V(0.05, 5.4, -1.8), 1.1],
    [V(P0.x, P0.top - 1.0, P0.z + 0.5), V(P1.x, P1.top - 1.0, P1.z), 0.2],
    [V(P1.x, P1.top + 0.2, P1.z - 0.95), V(26.5, 9.2, -40), 0.9],
    [V(P1.x, P1.top + 0.2, P1.z + 0.95), V(27.2, 9.0, 30), 0.9],
    [V(P1.x, P1.top - 1.0, P1.z), V(20.35, 5.4, -2.0), 1.0],
    [V(P1.x, P1.top - 1.0, P1.z), V(28.45, 5.9, -1.5), 0.6],
    [V(P1.x, P1.top + 0.2, P1.z), V(P2.x, P2.top + 0.2, P2.z), 0.3],
    [V(P2.x, P2.top + 0.2, P2.z - 0.9), V(44.5, 8.5, -40), 0.9],
  ];
  for (const [a, b, s] of lines) group.add(sagWire(a, b, s));
  // transformer on P1
  const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.8, 16), color(0x8e9294, 0.45, 0.6));
  tr.position.set(P1.x + 0.42, P1.top - 2.2, P1.z); tr.castShadow = true; group.add(tr);
}

function truck(p, group) {
  // a small delivery van that slid nose-first into the pole: it is resting on its bumper.
  const g = new THREE.Group();
  const body = color(0xf2f2ee, 0.35, 0.1), trim = color(0x2e3134, 0.5), glass = color(0x223038, 0.08, 0.6);
  const L = 4.3, W = 1.72, H = 1.95;
  const add = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; g.add(m); return m; };
  add(new THREE.BoxGeometry(L - 1.3, H - 0.25, W), body, -1.3 / 2 - 0.05, 0.25 + (H - 0.25) / 2, 0);
  add(new THREE.BoxGeometry(1.3, 1.25, W - 0.04), body, (L - 1.3) / 2, 0.25 + 0.62, 0);
  add(new THREE.BoxGeometry(0.62, 0.52, W - 0.1), glass, L / 2 - 0.62, 1.2, 0).rotation.z = -0.55;
  add(new THREE.BoxGeometry(0.9, 0.5, 0.02), glass, 1.3, 1.25, W / 2 + 0.001);
  add(new THREE.BoxGeometry(0.1, 0.25, W + 0.04), trim, L / 2 + 0.02, 0.45, 0);
  add(new THREE.BoxGeometry(L, 0.08, 0.02), color(0x2d6a4f, 0.5), 0, 1.0, W / 2 + 0.002);
  for (const [x, z] of [[1.35, 0.78], [1.35, -0.78], [-1.4, 0.78], [-1.4, -0.78]]) {
    const w = add(new THREE.CylinderGeometry(0.3, 0.3, 0.18, 18), M.rubber, x, 0.3, z); w.rotation.x = Math.PI / 2;
    const h = add(new THREE.CylinderGeometry(0.17, 0.17, 0.19, 12), M.aluminum, x, 0.3, z); h.rotation.x = Math.PI / 2;
  }
  // rear hatch: hinged at the roof, it hangs sideways (towards +x) over the cargo opening
  const hatch = new THREE.Group();
  hatch.position.set(-L / 2 - 0.02, H, 0);
  const hm = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.5, W - 0.06), body); hm.position.set(0, -0.75, 0); hm.castShadow = true;
  hatch.add(hm); hatch.rotation.z = -0.25; g.add(hatch);
  add(new THREE.BoxGeometry(0.02, 1.4, W - 0.2), color(0x3a3530, 0.9), -L / 2 + 0.01, 1.05, 0);
  g.position.set(p.x - L / 2 - 0.2, 0.02, p.z);
  g.rotation.y = 0.04;
  group.add(g);
  staticBox(p.x - L - 0.2, 0, p.z - W / 2, p.x - 0.2, H, p.z + W / 2);
}

function vending(p, B, group) {
  const x0 = p.x - 0.5, x1 = p.x + 0.5, z0 = p.z - 0.4, z1 = p.z + 0.4;
  B.aabb(color(0xd8dde0, 0.4, 0.3), x0, 0.05, z0, x1, 1.83, z1, 1);
  const panel = new THREE.Mesh(new THREE.PlaneGeometry(0.86, 0.9), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xdfeaf2, emissiveIntensity: 0.9, roughness: 0.2 }));
  panel.position.set(p.x, 1.25, z1 + 0.005); group.add(panel);
  // rows of drinks behind glass (tiny coloured cylinders), leaning towards +x
  const cols = [0xc0392b, 0x2e86c1, 0xf1c40f, 0x27ae60, 0xecf0f1, 0x8e5a2b];
  for (let r = 0; r < 3; r++) for (let i = 0; i < 7; i++) {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.14, 8), color(cols[(i + r * 2) % cols.length], 0.4, 0.2));
    c.position.set(x0 + 0.13 + i * 0.12, 0.95 + r * 0.28, z1 + 0.03); c.rotation.z = -0.08; group.add(c);
  }
  B.aabb(color(0x1d2226, 0.4), x0 + 0.1, 0.25, z1, x1 - 0.1, 0.45, z1 + 0.02, 1);
  staticBox(x0, 0, z0, x1, 1.83, z1);
}

function bike(p, group) {
  // a bicycle that fell sideways and is leaning on the block wall's end
  const g = new THREE.Group();
  const frameM = color(0x9b2d2d, 0.35, 0.5);
  const tube = (a, b, r = 0.018) => {
    const d = b.clone().sub(a), L = d.length();
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, L, 6), frameM);
    m.position.copy(a).add(b).multiplyScalar(0.5);
    m.quaternion.setFromUnitVectors(up, d.normalize());
    m.castShadow = true; g.add(m);
  };
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  for (const x of [-0.52, 0.52]) {
    const w = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.022, 6, 24), M.rubber); w.position.set(x, 0.33, 0); w.castShadow = true; g.add(w);
  }
  tube(V(-0.52, 0.33, 0), V(-0.05, 0.33, 0)); tube(V(-0.05, 0.33, 0), V(0.38, 0.8, 0)); tube(V(-0.52, 0.33, 0), V(-0.2, 0.78, 0));
  tube(V(-0.2, 0.78, 0), V(0.38, 0.8, 0)); tube(V(-0.05, 0.33, 0), V(-0.2, 0.78, 0)); tube(V(0.52, 0.33, 0), V(0.38, 0.95, 0));
  tube(V(0.33, 0.98, -0.25), V(0.33, 0.98, 0.25));
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.05, 0.1), M.black); seat.position.set(-0.22, 0.84, 0); g.add(seat);
  const basket = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.22, 0.34), color(0x9aa0a4, 0.5, 0.6)); basket.position.set(0.52, 0.95, 0); g.add(basket);
  g.position.set(p.x, 0, p.z);
  g.rotation.set(0, 0.2, -0.12);
  group.add(g);
}

function mirror(p, B, group) {
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 3.2, 8), color(0xe8e8e2, 0.4, 0.3));
  post.position.set(p.x, 1.6, p.z); post.castShadow = true; group.add(post);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.04, 8, 28), color(0xe86d1f, 0.45));
  ring.position.set(p.x, 3.0, p.z + 0.1); ring.rotation.y = 0.5; group.add(ring);
  const glass = new THREE.Mesh(new THREE.CircleGeometry(0.39, 28), new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0.05 }));
  glass.position.set(p.x, 3.0, p.z + 0.1); glass.rotation.y = 0.5; group.add(glass);
}

function streetLamp(p, B, group) {
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 5.2, 10), color(0x8c8f91, 0.4, 0.6));
  post.position.set(p.x, 2.6, p.z); post.castShadow = true; group.add(post);
  B.aabb(color(0x8c8f91, 0.4, 0.6), p.x - 0.04, 5.1, p.z - 1.0, p.x + 0.04, 5.18, p.z, 1);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.5), color(0x5a5d60, 0.4, 0.5));
  head.position.set(p.x, 5.1, p.z - 1.0); group.add(head);
  const bulbM = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff1d8, emissiveIntensity: 0 });
  const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.02, 0.4), bulbM);
  bulb.position.set(p.x, 5.04, p.z - 1.0); group.add(bulb);
  return { mat: bulbM, pos: new THREE.Vector3(p.x, 5.0, p.z - 1.0) };
}
