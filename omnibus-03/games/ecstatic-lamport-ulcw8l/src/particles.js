/**
 * particles.js — 使い回し前提のパーティクルプール。
 * 水しぶき、火の粉、紙吹雪、泡をすべて 1 つの InstancedMesh で描く。
 */

import * as THREE from 'three';

const MAX = 900;

export class Particles {
  constructor(scene) {
    const geo = new THREE.IcosahedronGeometry(0.5, 0);
    const mat = new THREE.MeshLambertMaterial({ transparent: true, opacity: 0.95 });
    this.mesh = new THREE.InstancedMesh(geo, mat, MAX);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    const colors = new Float32Array(MAX * 3);
    this.mesh.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
    scene.add(this.mesh);

    this.pool = [];
    for (let i = 0; i < MAX; i++) {
      this.pool.push({
        alive: false, p: new THREE.Vector3(), v: new THREE.Vector3(),
        life: 0, maxLife: 1, size: 0.1, grav: -18, drag: 0.02,
        color: new THREE.Color(), spin: 0, buoy: false, waterY: -999,
      });
    }
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._s = new THREE.Vector3();
    this._e = new THREE.Euler();
  }

  spawn(opts) {
    for (let i = 0; i < MAX; i++) {
      const p = this.pool[i];
      if (p.alive) continue;
      p.alive = true;
      p.p.copy(opts.p);
      p.v.copy(opts.v || new THREE.Vector3());
      p.life = 0;
      p.maxLife = opts.life || 1;
      p.size = opts.size || 0.1;
      p.grav = opts.grav !== undefined ? opts.grav : -18;
      p.drag = opts.drag !== undefined ? opts.drag : 0.02;
      p.color.set(opts.color || 0xffffff);
      p.spin = opts.spin || 0;
      p.rot = Math.random() * 6.28;
      p.buoy = !!opts.buoy;
      p.waterY = opts.waterY !== undefined ? opts.waterY : -999;
      p.fade = opts.fade !== undefined ? opts.fade : 1;
      return p;
    }
    return null;
  }

  /** 水しぶき: 入水の質でまったく違う形にする。 */
  splash(pos, power, waterY, tint = 0x9fe8ff, style = 'normal') {
    const n = style === 'rip' ? 26 : style === 'flop' ? 110 : 60;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      // RIP は真上に細く、腹打ちは横に大きく散る
      const spread = style === 'rip' ? 0.22 : style === 'flop' ? 1.5 : 0.75;
      const up = style === 'rip' ? 1.35 : style === 'flop' ? 0.65 : 1.0;
      const r = Math.pow(Math.random(), style === 'rip' ? 2.2 : 0.6);
      this.spawn({
        p: new THREE.Vector3(pos.x + Math.cos(a) * r * 0.5, waterY + 0.1, pos.z + Math.sin(a) * r * 0.5),
        v: new THREE.Vector3(
          Math.cos(a) * r * spread * power * 0.55,
          (0.55 + Math.random() * 0.75) * power * up,
          Math.sin(a) * r * spread * power * 0.55),
        life: 0.6 + Math.random() * 0.9,
        size: (style === 'flop' ? 0.13 : 0.085) * (0.5 + Math.random()),
        grav: -20, drag: 0.5,
        color: Math.random() < 0.55 ? 0xffffff : tint,
      });
    }
  }

  burst(pos, count, opts) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const b = (Math.random() - 0.5) * Math.PI;
      const sp = (opts.speed || 4) * (0.4 + Math.random() * 0.8);
      this.spawn({
        p: pos.clone(),
        v: new THREE.Vector3(Math.cos(a) * Math.cos(b), Math.sin(b) + 0.5, Math.sin(a) * Math.cos(b)).multiplyScalar(sp),
        life: opts.life || 0.9,
        size: opts.size || 0.09,
        grav: opts.grav !== undefined ? opts.grav : -14,
        drag: 0.25,
        color: Array.isArray(opts.color) ? opts.color[(Math.random() * opts.color.length) | 0] : opts.color,
        spin: 8,
      });
    }
  }

  update(dt) {
    let n = 0;
    const col = this.mesh.instanceColor.array;
    for (let i = 0; i < MAX; i++) {
      const p = this.pool[i];
      if (!p.alive) continue;
      p.life += dt;
      if (p.life >= p.maxLife) { p.alive = false; continue; }
      p.v.y += p.grav * dt;
      const d = Math.max(0, 1 - p.drag * dt * 12);
      p.v.multiplyScalar(d);
      p.p.addScaledVector(p.v, dt);
      if (p.p.y < p.waterY) { p.alive = false; continue; }
      p.rot += p.spin * dt;

      const t = p.life / p.maxLife;
      const s = p.size * (1 - t * 0.65 * p.fade);
      this._e.set(p.rot, p.rot * 0.7, 0);
      this._q.setFromEuler(this._e);
      this._s.setScalar(Math.max(0.001, s));
      this._m.compose(p.p, this._q, this._s);
      this.mesh.setMatrixAt(n, this._m);
      col[n * 3] = p.color.r; col[n * 3 + 1] = p.color.g; col[n * 3 + 2] = p.color.b;
      n++;
    }
    this.mesh.count = n;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.mesh.instanceColor.needsUpdate = true;
  }

  clear() { for (const p of this.pool) p.alive = false; this.mesh.count = 0; }
}
