// Verlet cloth: laundry, curtains, shop noren. They all hang towards +x.
import * as THREE from 'three';
import { fabric } from './materials.js';
import { rand } from './textures.js';

const G = new THREE.Vector3(9.8, 0, 0);

export class Cloth {
  // origin: top-left; u: direction along the pinned edge (length w); v: initial hang direction (length h)
  constructor({ origin, u, v, w, h, nx = 8, ny = 10, material, pin = (i, j) => j === 0, stiff = 1, wind = 1 }) {
    this.nx = nx; this.ny = ny; this.wind = wind;
    this.geo = new THREE.PlaneGeometry(w, h, nx, ny);
    this.mesh = new THREE.Mesh(this.geo, material);
    this.mesh.castShadow = true; this.mesh.receiveShadow = true;
    this.mesh.frustumCulled = false;
    const N = (nx + 1) * (ny + 1);
    this.p = new Float32Array(N * 3); this.q = new Float32Array(N * 3); this.pin = new Uint8Array(N);
    this.rest = [];
    const U = u.clone().normalize(), Vd = v.clone().normalize();
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
      const k = j * (nx + 1) + i;
      const pos = origin.clone().addScaledVector(U, w * i / nx).addScaledVector(Vd, h * j / ny);
      this.p.set([pos.x, pos.y, pos.z], k * 3); this.q.set([pos.x, pos.y, pos.z], k * 3);
      this.pin[k] = pin(i, j) ? 1 : 0;
    }
    const L = (a, b) => { const dx = this.p[a * 3] - this.p[b * 3], dy = this.p[a * 3 + 1] - this.p[b * 3 + 1], dz = this.p[a * 3 + 2] - this.p[b * 3 + 2]; return Math.hypot(dx, dy, dz); };
    const add = (a, b, s = 1) => this.rest.push([a, b, L(a, b), s]);
    for (let j = 0; j <= ny; j++) for (let i = 0; i <= nx; i++) {
      const k = j * (nx + 1) + i;
      if (i < nx) add(k, k + 1);
      if (j < ny) add(k, k + nx + 1);
      if (i < nx && j < ny) { add(k, k + nx + 2, 0.5 * stiff); add(k + 1, k + nx + 1, 0.5 * stiff); }
      if (i < nx - 1) add(k, k + 2, 0.3 * stiff);
      if (j < ny - 1) add(k, k + 2 * (nx + 1), 0.3 * stiff);
    }
    this.phase = rand() * 100;
    this.pos = this.geo.attributes.position;
    this.writeGeo();
  }
  step(dt, t, windVec) {
    const p = this.p, q = this.q, N = this.pin.length;
    const dt2 = dt * dt;
    const damp = 0.985;
    for (let k = 0; k < N; k++) {
      if (this.pin[k]) continue;
      const i = k * 3;
      const x = p[i], y = p[i + 1], z = p[i + 2];
      // gusty wind + flutter
      const f = Math.sin(t * 7 + k * 0.37 + this.phase) * 0.6 + Math.sin(t * 3.1 + k * 0.11) * 0.4;
      const ax = G.x + windVec.x * this.wind, ay = windVec.y * this.wind + f * 1.4 * this.wind, az = windVec.z * this.wind + f * 2.2 * this.wind;
      p[i] += (x - q[i]) * damp + ax * dt2;
      p[i + 1] += (y - q[i + 1]) * damp + ay * dt2;
      p[i + 2] += (z - q[i + 2]) * damp + az * dt2;
      q[i] = x; q[i + 1] = y; q[i + 2] = z;
    }
    for (let it = 0; it < 4; it++) {
      for (const [a, b, r, s] of this.rest) {
        const ia = a * 3, ib = b * 3;
        const dx = p[ib] - p[ia], dy = p[ib + 1] - p[ia + 1], dz = p[ib + 2] - p[ia + 2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
        const diff = (d - r) / d * 0.5 * s;
        const pa = this.pin[a], pb = this.pin[b];
        if (pa && pb) continue;
        const ka = pa ? 0 : pb ? 2 : 1, kb = pb ? 0 : pa ? 2 : 1;
        p[ia] += dx * diff * ka; p[ia + 1] += dy * diff * ka; p[ia + 2] += dz * diff * ka;
        p[ib] -= dx * diff * kb; p[ib + 1] -= dy * diff * kb; p[ib + 2] -= dz * diff * kb;
      }
      if (this.collide) this.collide(p);
    }
  }
  writeGeo() {
    const pos = this.pos, p = this.p;
    for (let k = 0; k < pos.count; k++) pos.setXYZ(k, p[k * 3], p[k * 3 + 1], p[k * 3 + 2]);
    pos.needsUpdate = true;
    this.geo.computeVertexNormals();
    this.geo.computeBoundingSphere();
  }
}

const LAUNDRY = [
  () => fabric('stripe', [70, 110, 170], [240, 240, 236], 8),
  () => fabric('plain', [245, 244, 238]),
  () => fabric('check', [200, 80, 70], [245, 240, 230], 6),
  () => fabric('dots', [255, 255, 250], [240, 170, 190], 6),
  () => fabric('plain', [120, 170, 120]),
  () => fabric('plain', [60, 64, 80]),
  () => fabric('stripe', [240, 200, 80], [250, 250, 245], 6),
];

export class ClothSystem {
  constructor(scene) { this.scene = scene; this.list = []; this.t = 0; this.acc = 0; }
  add(opts) { const c = new Cloth(opts); this.scene.add(c.mesh); this.list.push(c); return c; }
  update(dt, focusX) {
    this.t += dt;
    const wind = new THREE.Vector3(0, Math.sin(this.t * 0.3) * 1.5, Math.sin(this.t * 0.23 + 1) * 3 + 1);
    this.acc += Math.min(dt, 0.05);
    const h = 1 / 60;
    let n = 0;
    while (this.acc >= h && n < 2) {
      for (const c of this.list) if (Math.abs(c.cx - focusX) < 45) c.step(h, this.t, wind);
      this.acc -= h; n++;
    }
    if (n === 2) this.acc = 0;
    for (const c of this.list) if (Math.abs(c.cx - focusX) < 45) c.writeGeo();
  }

  // populate the town with laundry, curtains and the shop's noren
  build(town, park) {
    const V = (x, y, z) => new THREE.Vector3(x, y, z);
    let li = 0;
    const next = () => LAUNDRY[(li++) % LAUNDRY.length]();
    // alley: clothes on the wall-mounted drying pole stream across the alley
    const lp = park.laundry[0];
    if (lp) {
      const items = [[0.7, 0.55], [0.45, 0.8], [0.5, 0.5], [0.3, 0.3], [0.75, 0.6]];
      let z = lp.z0 + 0.15;
      for (const [w, hgt] of items) {
        if (z + w > lp.z1) break;
        const c = this.add({ origin: V(lp.x, lp.y - 0.02, z), u: V(0, 0, 1), v: V(1, -0.1, 0), w, h: hgt, nx: 6, ny: 7, material: next(), pin: (i, j) => j === 0 && (i === 0 || i === 6 || i === 3) });
        c.cx = lp.x;
        z += w + 0.12;
      }
    }
    // house A balcony laundry pole (runs along x): the washing gathers sideways on its pins
    const A = town.houses.A;
    if (A?.laundryPole) {
      const lp2 = A.laundryPole;
      for (let x = lp2.x0 + 0.4, k = 0; x < lp2.x1 - 0.8 && k < 5; x += 1.3, k++) {
        const w = 0.5 + rand() * 0.3, h = 0.55 + rand() * 0.3;
        const c = this.add({ origin: V(x, lp2.y - 0.02, lp2.z), u: V(1, 0, 0), v: V(0.2, -1, 0), w, h, nx: 6, ny: 7, material: next(), pin: (i, j) => j === 0 && (i === 0 || i === 6) });
        c.cx = x;
      }
      // a futon draped over the balcony rail: it flaps out sideways
      const bal = A.spec.front.balcony;
      const fz = A.spec.zf + 1.04, fy = 3.15 + 1.1;
      const c = this.add({ origin: V(bal.x0 + 1.2, fy, fz), u: V(1.6, 0, 0), v: V(0, -1, 0.02), w: 1.6, h: 1.1, nx: 8, ny: 7, material: fabric('flower', [200, 120, 140], [245, 240, 232], [250, 210, 110]), pin: (i, j) => j === 0, wind: 0.5 });
      c.cx = bal.x0 + 2;
    }
    // curtains in open windows: rail inside the top of the window, fabric pulled by +x gravity
    for (const [id, o] of town.openings) {
      if (o.kind === 'door' || o.interior) continue;
      const rail = o.face + (o.out < 0 ? 0.12 : -0.12);
      const zA = o.z0 + 0.05, w = Math.min(1.2, (o.z1 - o.z0) * 0.55);
      const c = this.add({ origin: V(rail, o.y1 + 0.05, zA), u: V(0, 0, 1), v: V(0.1, -1, 0), w, h: (o.y1 - o.y0) + 0.25, nx: 7, ny: 8,
        material: fabric(o.out < 0 ? 'plain' : 'stripe', [236, 226, 206], [200, 214, 222], 10), pin: (i, j) => j === 0, wind: 0.35 });
      c.cx = rail;
    }
    // shop noren over the shop front (hangs from a rod along x)
    const C = town.houses.C;
    if (C) {
      const x0 = C.spec.x0 + 1.4, y = 2.55, z = C.spec.zf + 0.12;
      for (let k = 0; k < 3; k++) {
        const c = this.add({ origin: V(x0 + k * 0.62, y, z), u: V(1, 0, 0), v: V(0, -1, 0), w: 0.58, h: 0.75, nx: 5, ny: 7, material: fabric('plain', [40, 90, 140]), pin: (i, j) => j === 0, wind: 0.6 });
        c.cx = x0;
      }
    }
    // mansion balconies
    const M = town.mansion;
    if (M) {
      for (const s of M.laundrySpots.filter((_, i) => i % 3 === 0).slice(0, 8)) {
        const c = this.add({ origin: V(s.x0 + 0.5, s.y, s.z), u: V(1, 0, 0), v: V(0, -1, 0), w: 0.6, h: 0.7, nx: 5, ny: 6, material: next(), pin: (i, j) => j === 0 && (i === 0 || i === 5), wind: 0.8 });
        c.cx = s.x0;
      }
    }
  }
}
