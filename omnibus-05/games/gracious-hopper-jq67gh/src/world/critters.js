// 小さな生きもの: 鳥の群れ・ちょうちょ・屋根の猫
import * as THREE from '../vendor/three.module.min.js';
import { makeMaterial } from '../core/shared.js';
import { makeLit } from '../core/materials.js';
import { colorize, merge } from '../core/geom.js';
import { clamp, damp, lerp, mulberry32 } from '../core/util.js';

export function createBirds(G) {
  // 翼2枚 + 胴
  const g = new THREE.BufferGeometry();
  const v = [
    // 左翼 (x<0), 右翼
    0, 0, 0.08, -0.32, 0, -0.02, 0, 0, -0.08,
    0, 0, 0.08, 0, 0, -0.08, 0.32, 0, -0.02,
    // 胴
    0, 0.02, 0.14, -0.04, 0, -0.1, 0.04, 0, -0.1,
  ];
  g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  const N = 36;
  const ig = new THREE.InstancedBufferGeometry();
  ig.setAttribute('position', g.getAttribute('position'));
  const off = new Float32Array(N * 4), prm = new Float32Array(N * 4);
  ig.setAttribute('aOff', new THREE.InstancedBufferAttribute(off, 4).setUsage(THREE.DynamicDrawUsage));
  ig.setAttribute('aPrm', new THREE.InstancedBufferAttribute(prm, 4).setUsage(THREE.DynamicDrawUsage));
  ig.instanceCount = N;
  const mat = makeMaterial(G, {
    side: THREE.DoubleSide,
    vertexShader: /* glsl */`
      attribute vec4 aOff; attribute vec4 aPrm;
      uniform float uTime;
      varying vec3 vW; varying float vS;
      void main(){
        vec3 p = position;
        float flap = sin(uTime * aPrm.y + aPrm.z) ;
        float ax = abs(p.x);
        p.y += flap * ax * 0.9 * aPrm.w;
        p.x *= 1.0 - abs(flap) * 0.15;
        p *= aOff.w;
        float c = cos(aPrm.x), s = sin(aPrm.x);
        p = vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
        vec3 w = aOff.xyz + p;
        vW = w; vS = ax;
        gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
      }`,
    fragmentShader: /* glsl */`
      varying vec3 vW; varying float vS;
      void main(){
        vec3 alb = mix(vec3(0.18, 0.16, 0.16), vec3(0.42, 0.36, 0.3), vS * 2.5);
        vec3 col = shadeLambert(alb, vec3(0.0, 1.0, 0.0), vW, 0.6, 1.0);
        gl_FragColor = finish(applyFog(col, vW), 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(ig, mat);
  mesh.frustumCulled = false;
  G.scene.add(mesh);
  const r = mulberry32(31);
  const birds = [];
  const flocks = [
    { c: new THREE.Vector3(-6, 9, -10), R: 9, h: 1.5, n: 7, sp: 0.35, size: 1.0 },
    { c: new THREE.Vector3(10, 32, -6), R: 22, h: 3, n: 9, sp: 0.18, size: 1.5 },
    { c: new THREE.Vector3(-4, 74, 6), R: 16, h: 3, n: 8, sp: 0.22, size: 1.4 },
    { c: new THREE.Vector3(30, 50, 30), R: 30, h: 4, n: 8, sp: 0.12, size: 1.6 },
  ];
  for (const f of flocks) {
    for (let i = 0; i < f.n; i++) {
      birds.push({ f, a: r() * 6.28, rr: f.R * (0.8 + r() * 0.4), y: (r() - 0.5) * f.h, sp: f.sp * (0.85 + r() * 0.3), freq: 9 + r() * 4, ph: r() * 6, scatter: 0, sv: new THREE.Vector3(), pos: new THREE.Vector3(), size: f.size });
    }
  }
  const sys = {
    mesh, birds,
    update(dt) {
      for (let i = 0; i < birds.length && i < N; i++) {
        const b = birds[i];
        b.a += b.sp * dt * (1 + b.scatter * 2);
        const x = b.f.c.x + Math.cos(b.a) * b.rr, z = b.f.c.z + Math.sin(b.a) * b.rr;
        const y = b.f.c.y + b.y + Math.sin(G.time * 0.7 + b.ph) * 0.6;
        b.pos.set(x, y, z).add(b.sv);
        b.sv.multiplyScalar(Math.exp(-0.25 * dt));
        b.scatter = Math.max(0, b.scatter - dt * 0.5);
        const yaw = -b.a; // 円周に沿う向き
        off[i * 4] = b.pos.x; off[i * 4 + 1] = b.pos.y; off[i * 4 + 2] = b.pos.z; off[i * 4 + 3] = b.size;
        prm[i * 4] = yaw; prm[i * 4 + 1] = b.freq * (1 + b.scatter); prm[i * 4 + 2] = b.ph; prm[i * 4 + 3] = 0.5 + 0.5 * Math.max(0, Math.sin(G.time * 0.5 + b.ph)) + b.scatter;
      }
      ig.attributes.aOff.needsUpdate = true;
      ig.attributes.aPrm.needsUpdate = true;
    },
    // 指で触れた近くの群れが散る
    scatterNear(p, radius) {
      let hit = false;
      for (const b of birds) {
        if (b.pos.distanceTo(p) < radius) {
          b.scatter = 1;
          b.sv.add(new THREE.Vector3((Math.random() - 0.5) * 6, 2 + Math.random() * 3, (Math.random() - 0.5) * 6));
          hit = true;
        }
      }
      return hit;
    },
    nearestScreen(ptr) {
      let best = null, bd = Infinity;
      for (const b of birds) { const d = G.input.screenDist(b.pos, ptr); if (d < bd) { bd = d; best = b; } }
      return { b: best, d: bd };
    },
  };
  return sys;
}

// ちょうちょ (気づきの手がかりとして、目当ての物にとまる)
export function createButterfly(G) {
  const wing = new THREE.Shape();
  wing.moveTo(0, 0);
  wing.bezierCurveTo(0.03, 0.06, 0.1, 0.07, 0.09, 0.02);
  wing.bezierCurveTo(0.1, -0.02, 0.06, -0.06, 0, -0.01);
  const wg = new THREE.ShapeGeometry(wing, 6);
  wg.rotateX(-Math.PI / 2);
  colorize(wg, 0xffd14a);
  const mat = makeLit(G, { wrap: 0.7, side: THREE.DoubleSide });
  const root = new THREE.Group();
  const wl = new THREE.Mesh(wg, mat), wr = new THREE.Mesh(wg.clone().scale(-1, 1, 1), mat);
  const body = new THREE.Mesh(colorize(new THREE.CapsuleGeometry(0.008, 0.05, 3, 6).rotateX(Math.PI / 2), 0x3a2a20), mat);
  root.add(wl); root.add(wr); root.add(body);
  root.scale.setScalar(1.4);
  G.scene.add(root);
  const bf = {
    root, pos: new THREE.Vector3(-2, 1.2, 1), target: null, landed: false, t: Math.random() * 10, home: new THREE.Vector3(-2.5, 1.0, 1.2),
    update(dt) {
      this.t += dt;
      const goal = this.target ? this.target.clone().add(new THREE.Vector3(0, 0.05, 0)) : this.home.clone().add(new THREE.Vector3(Math.sin(this.t * 0.4) * 1.5, Math.sin(this.t * 0.9) * 0.4, Math.cos(this.t * 0.3) * 1.2));
      const d = goal.distanceTo(this.pos);
      this.landed = !!this.target && d < 0.06;
      if (!this.landed) {
        const wob = new THREE.Vector3(Math.sin(this.t * 7.1) * 0.25, Math.sin(this.t * 9.3) * 0.3, Math.cos(this.t * 6.3) * 0.25);
        const dir = goal.clone().sub(this.pos).normalize().multiplyScalar(Math.min(1.0, d * 2 + 0.2)).add(wob);
        this.pos.addScaledVector(dir, dt);
        root.rotation.y = Math.atan2(dir.x, dir.z);
      } else this.pos.lerp(goal, 1 - Math.exp(-6 * dt));
      root.position.copy(this.pos);
      const flap = this.landed ? 0.3 + Math.sin(this.t * 2) * 0.3 : Math.sin(this.t * 24) * 1.1;
      wl.rotation.z = flap; wr.rotation.z = -flap;
    },
  };
  return bf;
}

// 屋根の上で眠る猫
export function createCat(G, at) {
  const C = 0xf0a050;
  const parts = [
    colorize(new THREE.CapsuleGeometry(0.16, 0.3, 4, 10).rotateZ(Math.PI / 2).translate(0, 0.16, 0), C),
    colorize(new THREE.SphereGeometry(0.14, 12, 10).translate(0.3, 0.24, 0), C),
    colorize(new THREE.ConeGeometry(0.05, 0.09, 4).translate(0.33, 0.38, 0.06), C),
    colorize(new THREE.ConeGeometry(0.05, 0.09, 4).translate(0.33, 0.38, -0.06), C),
    colorize(new THREE.CapsuleGeometry(0.04, 0.3, 4, 8).rotateZ(1.2).translate(-0.32, 0.2, 0.05), 0xe08a3a),
  ];
  const mesh = new THREE.Mesh(merge(parts), makeLit(G, { mode: 5 }));
  mesh.position.copy(at);
  mesh.scale.setScalar(1.6);
  G.scene.add(mesh);
  const cat = { mesh, t: 0, wake: 0, update(dt) { this.t += dt; this.wake = Math.max(0, this.wake - dt * 0.3); const k = 1 + Math.sin(this.t * 1.5) * 0.02; mesh.scale.set(1.6 * k, 1.6 * (k + this.wake * 0.3), 1.6 * k); } };
  return cat;
}
