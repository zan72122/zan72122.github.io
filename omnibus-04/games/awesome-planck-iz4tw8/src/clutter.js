// Street clutter that makes the town feel lived-in. Anchored things stand as usual;
// loose things have already slid east and lie piled against west-facing surfaces.
import * as THREE from 'three';
import { Batcher, mergeStatic } from './geo.js';
import { M, color, texMat, fabric } from './materials.js';
import { T, rand, setSeed } from './textures.js';
import { LEVEL, FOUND } from './level.js';
import { staticBox } from './physics.js';

const up = new THREE.Vector3(0, 1, 0);

export function buildClutter(ctx) {
  const { scene } = ctx;
  setSeed(2024);
  const group = new THREE.Group(); scene.add(group);
  const B = new Batcher();
  const mtx = (x, y, z, rx = 0, ry = 0, rz = 0, s = 1) => new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(s, s, s));

  // ---- red post box on the corner (anchored)
  {
    const red = color(0xc8201e, 0.4, 0.1), dark = color(0x1b1b1b, 0.5);
    const x = 21.6, z = 2.5;
    B.add(red, new THREE.CylinderGeometry(0.28, 0.28, 1.05, 24), mtx(x, 0.85, z));
    B.add(red, new THREE.SphereGeometry(0.28, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), mtx(x, 1.37, z));
    B.add(dark, new THREE.BoxGeometry(0.3, 0.05, 0.05), mtx(x, 1.1, z + 0.27));
    B.add(color(0x444444, 0.5, 0.6), new THREE.CylinderGeometry(0.08, 0.1, 0.34, 12), mtx(x, 0.17, z));
    staticBox(x - 0.28, 0, z - 0.28, x + 0.28, 1.6, z + 0.28);
  }
  // ---- garbage station: green net cage; the bags are all pressed against its east side
  {
    const x0 = -8.2, x1 = -5.8, z0 = 2.3, z1 = 3.5, h = 1.0;
    const frame = color(0x2f6b3e, 0.5, 0.3);
    for (const [a, b, c, d] of [[x0, z0, x0, z1], [x1, z0, x1, z1], [x0, z0, x1, z0], [x0, z1, x1, z1]]) {
      const L = Math.hypot(c - a, d - b);
      B.add(frame, new THREE.BoxGeometry(c - a || 0.03, 0.03, d - b || 0.03), mtx((a + c) / 2, h, (b + d) / 2));
    }
    for (const [px, pz] of [[x0, z0], [x1, z0], [x0, z1], [x1, z1]]) B.add(frame, new THREE.BoxGeometry(0.03, h, 0.03), mtx(px, h / 2, pz));
    const net = new THREE.MeshStandardMaterial({ color: 0x3f7f4c, roughness: 0.8, transparent: true, opacity: 0.45, side: THREE.DoubleSide, depthWrite: false });
    const cage = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, h, z1 - z0), net); cage.position.set((x0 + x1) / 2, h / 2, (z0 + z1) / 2); group.add(cage);
    const bagM = new THREE.MeshStandardMaterial({ color: 0xe9ecea, roughness: 0.35, transparent: true, opacity: 0.92 });
    for (let i = 0; i < 7; i++) {
      const s = 0.26 + rand() * 0.1;
      const m = new THREE.Mesh(new THREE.SphereGeometry(s, 12, 10), bagM);
      m.scale.set(0.8, 1.1, 0.9);
      m.position.set(x1 - s * 0.8 - Math.floor(i / 3) * 0.42, 0.3 + (i % 3) * 0.3, z0 + 0.3 + rand() * 0.6);
      m.castShadow = true; group.add(m);
    }
    staticBox(x0, 0, z0, x1, h, z1);
  }
  // ---- gate posts, intercoms, nameplates, meters, water heaters by each house
  for (const b of LEVEL.buildings) {
    if (b.type !== 'house') continue;
    const gx = b.front.door.x;
    const post = texMat('gatepost', T.block, [1, 1], { color: 0xbdb6a8, roughness: 0.9 });
    B.aabb(post, gx - 1.05, 0, 3.05, gx - 0.75, 1.25, 3.35, 0.8);
    B.aabb(post, gx + 0.75, 0, 3.05, gx + 1.05, 1.25, 3.35, 0.8);
    B.aabb(color(0x2a2a2c, 0.4, 0.5), gx - 0.92, 0.95, 3.35, gx - 0.82, 1.1, 3.38, 1);   // intercom
    B.aabb(color(0xe8e3d4, 0.6), gx - 1.02, 0.65, 3.35, gx - 0.78, 0.8, 3.37, 1);        // nameplate (blank)
    B.aabb(color(0x5a5c5e, 0.4, 0.6), gx + 0.78, 0.6, 3.35, gx + 1.02, 0.9, 3.55, 1);  // mailbox
    // water heater tank against the west wall (anchored)
    B.add(color(0xf0efea, 0.4, 0.05), new THREE.BoxGeometry(0.6, 1.8, 0.6), mtx(b.x0 + 0.35, 0.9, -3.8));
    B.add(color(0xe9e8e2, 0.5), new THREE.BoxGeometry(0.75, 0.6, 0.3), mtx(b.x0 + 0.2, 0.3, -2.9));
    // gas & electricity meters on the front
    B.aabb(color(0xd8d6cf, 0.5), b.x0 + 0.3, 1.4, b.zf, b.x0 + 0.55, 1.75, b.zf + 0.12, 1);
    // TV antenna on the ridge
    const ant = color(0x9a9ea2, 0.4, 0.8);
    const ridgeY = b.roof.ridge === 'z' ? 7.7 : 7.3;
    const ax = (b.x0 + b.x1) / 2 + 1.0, az = b.roof.ridge === 'z' ? -2.5 : (b.zf + b.zb) / 2;
    B.add(ant, new THREE.CylinderGeometry(0.02, 0.02, 1.6, 6), mtx(ax, ridgeY + 0.8, az));
    for (let k = 0; k < 6; k++) B.add(ant, new THREE.CylinderGeometry(0.008, 0.008, 0.5 - k * 0.04, 4), mtx(ax, ridgeY + 1.2, az - 0.35 + k * 0.14, 0, 0, Math.PI / 2));
    B.add(ant, new THREE.CylinderGeometry(0.01, 0.01, 0.9, 4), mtx(ax, ridgeY + 1.2, az, Math.PI / 2, 0, 0));
    // exterior porch light
    B.aabb(color(0xf6f2e6, 0.3), gx + 0.55, 2.2, b.zf, gx + 0.7, 2.4, b.zf + 0.1, 1);
  }
  // ---- loose things piled against west faces (they slid east and stopped)
  const pot = (x, y, z, c) => {
    const pm = color(c, 0.75);
    // lying on its side, mouth facing +x... no: the pot rests with its base against the wall (+x)
    B.add(pm, new THREE.CylinderGeometry(0.16, 0.12, 0.28, 16), mtx(x - 0.14, y, z, 0, 0, Math.PI / 2));
    const soil = texMat('soilpile', T.soil, [1, 1], { color: 0x7a5f45, roughness: 1 });
    B.add(soil, new THREE.SphereGeometry(0.15, 10, 8), mtx(x - 0.3, y, z, 0, 0, 0, 1).multiply(new THREE.Matrix4().makeScale(0.5, 1, 1)));
    const lm = M.leaves;
    for (let k = 0; k < 3; k++) B.add(lm, new THREE.PlaneGeometry(0.45, 0.45), mtx(x - 0.45, y + (rand() - 0.5) * 0.2, z + (rand() - 0.5) * 0.2, rand() * 3, rand() * 3, rand() * 3), 0, { noShadow: false });
  };
  // alley: against house B's west wall near the street
  pot(12.4, 0.35, 2.2, 0xb86b45); pot(12.4, 0.75, 2.0, 0x444444); pot(12.4, 0.35, 1.7, 0xe0dcd2);
  // against the gate posts' west faces
  for (const b of LEVEL.buildings) if (b.type === 'house') { const gx = b.front.door.x; pot(gx + 0.75, 0.3, 3.2, 0xa65f3c); }
  // a tricycle lying against the tree trunk
  {
    const red = color(0xd23a2a, 0.4, 0.3);
    const t = new THREE.Group();
    const w1 = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.03, 6, 16), M.rubber); w1.position.set(0, 0, 0); t.add(w1);
    const w2 = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.025, 6, 14), M.rubber); w2.position.set(-0.45, -0.05, 0.18); t.add(w2);
    const w3 = w2.clone(); w3.position.z = -0.18; t.add(w3);
    const fr = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 6), red); fr.rotation.z = Math.PI / 2; fr.position.set(-0.22, 0.05, 0); t.add(fr);
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.04, 0.12), M.black); seat.position.set(-0.3, 0.2, 0); t.add(seat);
    t.position.set(23.8, 0.6, 1.2); t.rotation.set(0.3, 0.2, -Math.PI / 2 + 0.2);
    group.add(t);
  }
  // a bicycle wrapped around the pole P1 (it fell into it)
  // ---- road: manholes, stop line, yield triangle
  const iron = color(0x3a3937, 0.55, 0.6);
  for (const x of [-4, 16, 38]) B.add(iron, new THREE.CylinderGeometry(0.32, 0.32, 0.02, 24), mtx(x, 0.005, 6.2), 0, { noShadow: true });
  const paint = color(0xe8e6de, 0.65);
  B.aabb(paint, 20.7, 0.004, 1.9, 21.0, 0.008, 5.8, 1, { noShadow: true });
  for (const [x, z] of [[18.6, 4.2], [-6.5, 4.2]]) {
    const tri = new THREE.Shape(); tri.moveTo(-0.5, 0); tri.lineTo(0.5, 0); tri.lineTo(0, -1.4); tri.closePath();
    const g = new THREE.ShapeGeometry(tri); g.rotateX(-Math.PI / 2);
    B.add(paint, g, mtx(x, 0.006, z), 0, { noShadow: true });
  }
  // ---- no-parking sign (pictogram only)
  {
    const x = 7.2, z = 2.0;
    B.add(color(0x9a9ea2, 0.4, 0.6), new THREE.CylinderGeometry(0.03, 0.03, 2.6, 8), mtx(x, 1.3, z));
    const disc = new THREE.Mesh(new THREE.CircleGeometry(0.3, 24), color(0x1f5aa8, 0.5)); disc.position.set(x, 2.45, z + 0.04); group.add(disc);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.26, 0.31, 24), color(0xc8201e, 0.5)); ring.position.set(x, 2.45, z + 0.045); group.add(ring);
    const slash = new THREE.Mesh(new THREE.PlaneGeometry(0.52, 0.05), color(0xc8201e, 0.5)); slash.position.set(x, 2.45, z + 0.05); slash.rotation.z = -0.78; group.add(slash);
  }
  // ---- foreground: guard rail along the near sidewalk (frames the shot like a street photo)
  {
    const rail = color(0xe9e9e4, 0.35, 0.2);
    const z = 12.2;
    for (let x = -30; x < LEVEL.edgeX; x += 2.0) B.add(rail, new THREE.CylinderGeometry(0.03, 0.03, 0.8, 8), mtx(x, 0.54, z));
    B.add(rail, new THREE.CylinderGeometry(0.035, 0.035, LEVEL.edgeX + 30, 8), mtx((LEVEL.edgeX - 30) / 2, 0.92, z, 0, 0, Math.PI / 2));
    B.add(rail, new THREE.CylinderGeometry(0.03, 0.03, LEVEL.edgeX + 30, 8), mtx((LEVEL.edgeX - 30) / 2, 0.6, z, 0, 0, Math.PI / 2));
    // hedge & lots across the street toward the camera
    const hedgeM = M.leaves.clone(); hedgeM.color = new THREE.Color(0x8aa870);
    for (let x = -28; x < LEVEL.edgeX; x += 0.7) {
      for (let k = 0; k < 2; k++) B.add(hedgeM, new THREE.PlaneGeometry(0.9, 0.9), mtx(x + rand() * 0.4, 0.5 + rand() * 0.4, 13.2 + rand() * 0.5, rand() * 3, rand() * 3, rand() * 3), 0);
    }
  }
  // ---- greengrocer: striped awning and a picture signboard (no words, just fruit)
  {
    const shop = LEVEL.buildings.find(b => b.type === 'shop');
    const x0 = shop.x0 + 0.3, x1 = shop.x1 - 0.3, zf = shop.zf;
    const awn = fabric('stripe', [40, 110, 70], [240, 240, 232], 14);
    const ang = 0.28, L = 0.95;
    const m = new THREE.Matrix4().makeRotationX(ang); m.setPosition((x0 + x1) / 2, 3.02 - Math.sin(ang) * L / 2, zf + Math.cos(ang) * L / 2);
    const aw = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, 0.02, L), awn); aw.applyMatrix4(m); aw.castShadow = true; aw.receiveShadow = true; group.add(aw);
    // valance
    const val = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, 0.22, 0.02), awn); val.position.set((x0 + x1) / 2, 3.02 - Math.sin(ang) * L - 0.1, zf + Math.cos(ang) * L); group.add(val);
    const c = document.createElement('canvas'); c.width = 512; c.height = 80;
    const g = c.getContext('2d');
    g.fillStyle = '#f3efe4'; g.fillRect(0, 0, 512, 80);
    g.fillStyle = '#2f6b4f'; g.fillRect(0, 0, 512, 8); g.fillRect(0, 72, 512, 8);
    const fruit = (x, col, r, leaf) => { g.fillStyle = col; g.beginPath(); g.arc(x, 42, r, 0, Math.PI * 2); g.fill(); if (leaf) { g.fillStyle = '#4f8a3a'; g.beginPath(); g.ellipse(x + 6, 42 - r - 2, 9, 4, -0.5, 0, Math.PI * 2); g.fill(); } };
    fruit(60, '#c8352a', 20, true); fruit(120, '#f08a1c', 18, true); fruit(185, '#9fc27a', 22, false);
    g.fillStyle = '#e9e2c8'; g.fillRect(230, 36, 70, 12); g.fillStyle = '#5f9a45'; g.fillRect(290, 30, 22, 24);
    fruit(360, '#2f6b3e', 24, false); g.strokeStyle = '#7fb069'; g.lineWidth = 3; for (let k = -2; k <= 2; k++) { g.beginPath(); g.moveTo(360 + k * 8, 20); g.lineTo(360 + k * 8, 64); g.stroke(); }
    fruit(430, '#c8352a', 20, true); fruit(480, '#f2c230', 16, false);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0 - 0.6, 0.62), new THREE.MeshStandardMaterial({ map: t, roughness: 0.6 }));
    sign.position.set((x0 + x1) / 2, 3.35, zf + 0.03); group.add(sign);
  }
  B.build(group);
  mergeStatic(group);
  return group;
}
