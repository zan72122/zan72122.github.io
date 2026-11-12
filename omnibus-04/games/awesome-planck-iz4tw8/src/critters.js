// Small living things: cats that nap on walls (sideways, of course), a goldfish
// tank whose water has settled against its east side, and birds overhead.
import * as THREE from 'three';
import { color } from './materials.js';
import { rand } from './textures.js';
import { mergeGeometries } from 'three/addons/BufferGeometryUtils.js';

const up = new THREE.Vector3(0, 1, 0);

function catMesh(fur = 0xd98f4a, belly = 0xf2e6d6) {
  // built with +y as the cat's "up" and +z forward, like the people
  const g = new THREE.Group();
  const fm = color(fur, 0.95), bm = color(belly, 0.95), dk = color(0x2a2522, 0.6);
  const add = (geo, mat, x, y, z, sx = 1, sy = 1, sz = 1) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = true; g.add(m); return m; };
  add(new THREE.SphereGeometry(0.13, 14, 10), fm, 0, 0.16, 0, 0.85, 0.8, 1.55);          // body
  add(new THREE.SphereGeometry(0.1, 12, 8), bm, 0, 0.12, 0.05, 0.7, 0.6, 1.3);           // belly
  const head = new THREE.Group(); head.position.set(0, 0.27, 0.2); g.add(head);
  const hm = new THREE.Mesh(new THREE.SphereGeometry(0.085, 14, 10), fm); hm.scale.set(1.05, 0.92, 0.95); hm.castShadow = true; head.add(hm);
  for (const s of [-1, 1]) {
    const e = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.06, 6), fm); e.position.set(s * 0.05, 0.075, -0.005); e.rotation.z = -s * 0.25; head.add(e);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.011, 8, 6), color(0xb7c23a, 0.2)); eye.position.set(s * 0.033, 0.012, 0.075); head.add(eye);
  }
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.008, 6, 4), color(0xc77a78, 0.5)); nose.position.set(0, -0.012, 0.085); head.add(nose);
  for (const [x, z] of [[-0.06, 0.12], [0.06, 0.12], [-0.06, -0.13], [0.06, -0.13]]) add(new THREE.CylinderGeometry(0.022, 0.018, 0.12, 6), fm, x, 0.05, z);
  // tail: a chain that trails along gravity
  const tail = new THREE.Group(); tail.position.set(0, 0.2, -0.2); g.add(tail);
  const segs = [];
  let parent = tail;
  for (let i = 0; i < 5; i++) {
    const s = new THREE.Group(); s.position.set(0, i ? -0.06 : 0, 0); parent.add(s);
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.018 - i * 0.002, 0.02 - i * 0.002, 0.065, 6), i === 4 ? dk : fm); m.position.y = -0.03; m.castShadow = true; s.add(m);
    segs.push(s); parent = s;
  }
  return { g, head, segs };
}

export class Critters {
  constructor(scene, town) {
    this.scene = scene;
    this.t = 0;
    this.cats = [];
    // a cat napping on the alley wall of house B (its "floor"), and one in the tatami room
    this.addCat(12.4, 2.9, -1.6, 0xd98f4a);
    this.addCat(16.325, 3.7, -2.4, 0x3a3533, 0xe8e2da);
    this.addCat(0, 1.05, -1.2, 0xe8e2da, 0xf6f2ea);
    this.fishTank(town);
    this.birds();
  }
  addCat(face, y, z, fur, belly) {
    const c = catMesh(fur, belly);
    const root = new THREE.Group();
    root.add(c.g);
    // standing on a west-facing surface: feet towards +x
    root.position.set(face - 0.02, y, z);
    root.rotation.z = Math.PI / 2;
    c.g.rotation.y = rand() < 0.5 ? Math.PI / 2 : -Math.PI / 2; // facing along the wall
    this.scene.add(root);
    this.cats.push({ root, ...c, face, y0: y, y, vy: 0, ph: rand() * 6, flee: 0 });
  }
  fishTank(town) {
    // a goldfish tank that fell over against the living-room wall: the water now
    // lies against the east glass, with an upright (vertical) water surface
    const x1 = 8.25, y = 1.3, z = -2.2;
    const g = new THREE.Group();
    const glass = new THREE.MeshStandardMaterial({ color: 0xcfe3e8, roughness: 0.02, transparent: true, opacity: 0.22, depthWrite: false, side: THREE.DoubleSide });
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.3, 0.55), glass); box.position.set(x1 - 0.17, y, z); g.add(box);
    const water = new THREE.MeshStandardMaterial({ color: 0x6fa9b8, roughness: 0.05, transparent: true, opacity: 0.45, depthWrite: false });
    const w = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.28, 0.52), water); w.position.set(x1 - 0.11, y, z); g.add(w);
    this.fish = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), color(0xf06a1c, 0.4));
    this.fish.scale.set(1, 0.7, 1.8); g.add(this.fish);
    this.fishC = new THREE.Vector3(x1 - 0.1, y, z);
    this.scene.add(g);
  }
  birds() {
    const wing = new THREE.PlaneGeometry(0.34, 0.12); wing.translate(0.17, 0, 0);
    const body = new THREE.SphereGeometry(0.06, 8, 6); body.scale(1, 0.8, 2.2);
    const m = color(0x1d1c1e, 0.7, 0, { side: THREE.DoubleSide });
    this.flock = [];
    for (let i = 0; i < 5; i++) {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(body, m));
      const L = new THREE.Mesh(wing, m), R = new THREE.Mesh(wing, m); R.scale.x = -1;
      g.add(L, R);
      g.position.set(-40 + rand() * 60, 14 + rand() * 6, -10 - rand() * 30);
      this.scene.add(g);
      this.flock.push({ g, L, R, ph: rand() * 6, v: 5 + rand() * 3, dir: rand() < 0.5 ? 1 : -1 });
    }
  }
  update(dt, courier, focus) {
    this.t += dt;
    for (const c of this.cats) {
      // breathe, twitch the tail (which hangs sideways), flee when the courier lands close by
      const d = Math.abs(courier.pos.y - c.y) + Math.abs((courier.face ?? 999) - c.face) * 3;
      if (d < 1.2 && c.flee <= 0) { c.flee = 1.2; c.vy = (c.y > courier.pos.y ? 1 : -1) * 2.2; c.g.rotation.y = c.vy > 0 ? Math.PI / 2 : -Math.PI / 2; }
      if (c.flee > 0) { c.flee -= dt; c.y += c.vy * dt; c.vy *= 0.97; }
      c.root.position.y = c.y;
      c.g.scale.y = 1 + Math.sin(this.t * 2 + c.ph) * 0.02;
      c.head.rotation.x = Math.sin(this.t * 0.7 + c.ph) * 0.15;
      // tail: each segment bends so the tail trails along world +x (down)
      for (let i = 0; i < c.segs.length; i++) c.segs[i].rotation.x = (i === 0 ? 0.9 : 0.25) + Math.sin(this.t * 3 + c.ph + i) * 0.15;
    }
    if (this.fish) {
      const a = this.t * 1.3;
      this.fish.position.set(this.fishC.x + Math.sin(a * 1.7) * 0.03, this.fishC.y + Math.sin(a) * 0.09, this.fishC.z + Math.cos(a) * 0.2);
      this.fish.rotation.y = -a + Math.PI / 2;
    }
    for (const b of this.flock) {
      // birds fly as usual: they are the only ones who don't care about the sideways world
      b.ph += dt * 11;
      const f = Math.sin(b.ph) * 0.7;
      b.L.rotation.z = f; b.R.rotation.z = -f;
      b.g.position.x += b.v * b.dir * dt;
      b.g.position.y += Math.sin(b.ph * 0.1) * 0.3 * dt;
      b.g.rotation.y = b.dir > 0 ? Math.PI / 2 : -Math.PI / 2;
      if (Math.abs(b.g.position.x - focus.x) > 70) { b.dir *= -1; b.g.position.x = focus.x - 60 * b.dir; b.g.position.y = 12 + rand() * 8; }
    }
  }
}
