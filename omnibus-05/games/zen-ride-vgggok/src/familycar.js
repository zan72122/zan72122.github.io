// パパがいつも運転する白い家族用自動車（大きくて、子供の手が届かない）
import * as THREE from '../vendor/three.module.min.js';
import { RoundedBoxGeometry } from '../vendor/addons/RoundedBoxGeometry.js';

const RB = (w, h, d, r, seg = 4) => new RoundedBoxGeometry(w, h, d, seg, r);

export class FamilyCar {
  constructor(carMats) {
    const m = carMats;
    this.root = new THREE.Group();
    const white = new THREE.MeshPhysicalMaterial({ color: 0xf3f4f6, metalness: 0.2, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1 });
    const darkGlass = new THREE.MeshPhysicalMaterial({ color: 0x1d2633, metalness: 0.2, roughness: 0.05, envMapIntensity: 1.6 });
    this.hazard = new THREE.MeshStandardMaterial({ color: 0xffa21f, emissive: 0xff8a00, emissiveIntensity: 0.05 });
    const add = (g, mat, x, y, z, p = this.root) => {
      const me = new THREE.Mesh(g, mat);
      me.position.set(x, y, z);
      me.castShadow = true; me.receiveShadow = true;
      p.add(me);
      return me;
    };
    add(RB(1.86, 0.85, 4.7, 0.28), white, 0, 0.8, 0);
    add(RB(1.76, 0.78, 3.3, 0.3), white, 0, 1.5, -0.35);
    // 窓（濃い色）
    add(RB(1.78, 0.5, 3.0, 0.2), darkGlass, 0, 1.55, -0.35);
    const ws = add(new THREE.BoxGeometry(1.6, 0.62, 0.05), darkGlass, 0, 1.45, 1.33);
    ws.rotation.x = -0.6;
    // 角ばったヘッドライト
    for (const sx of [-1, 1]) {
      add(RB(0.42, 0.14, 0.06, 0.03), m.lens, sx * 0.6, 0.98, 2.34);
      add(RB(0.3, 0.12, 0.05, 0.03), m.tail, sx * 0.68, 1.0, -2.34);
      add(new THREE.SphereGeometry(0.05, 10, 8), this.hazard, sx * 0.9, 0.95, 2.26);
      add(new THREE.SphereGeometry(0.05, 10, 8), this.hazard, sx * 0.9, 1.0, -2.3);
    }
    add(RB(1.4, 0.18, 0.08, 0.04), m.dark, 0, 0.72, 2.36);
    add(RB(1.9, 0.18, 0.2, 0.06), m.dark, 0, 0.42, 2.3);
    add(RB(1.9, 0.18, 0.2, 0.06), m.dark, 0, 0.42, -2.3);
    // 高い位置のドアノブ（子供には届かない）
    this.handles = [];
    for (const sz of [0.55, -0.75]) {
      for (const sx of [-1, 1]) {
        const h = add(RB(0.04, 0.05, 0.22, 0.02), m.chrome, sx * 0.94, 1.12, sz);
        this.handles.push(h);
        h.userData.kind = 'whiteHandle';
      }
    }
    // ドアの継ぎ目
    const seam = new THREE.MeshStandardMaterial({ color: 0x9aa0a8, roughness: 0.6 });
    for (const sx of [-1, 1]) for (const sz of [1.0, -0.15, -1.45]) {
      add(new THREE.BoxGeometry(0.01, 0.75, 0.012), seam, sx * 0.935, 1.05, sz);
    }
    // ミラー
    this.mirrors = [];
    for (const sx of [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(sx * 0.9, 1.3, 1.05);
      this.root.add(g);
      add(RB(0.22, 0.14, 0.1, 0.04), white, sx * 0.12, 0, 0, g);
      this.mirrors.push({ g, sx });
    }
    // 車輪
    for (const sx of [-1, 1]) for (const sz of [1.5, -1.5]) {
      const w = add(new THREE.CylinderGeometry(0.36, 0.36, 0.26, 28), m.tireMat, sx * 0.84, 0.36, sz);
      w.rotation.z = Math.PI / 2;
      const r = add(new THREE.CylinderGeometry(0.22, 0.22, 0.27, 20), m.chrome, sx * 0.84, 0.36, sz);
      r.rotation.z = Math.PI / 2;
    }
    this.body = this.root.children[0];
    this.body.userData.kind = 'whiteCar';
    this.blinkT = 0;
    this.blinkN = 0;
    this.fold = 0;
    this.foldTarget = 0;
    this.shake = 0;
  }

  lockBlink(n = 2) { this.blinkN = n * 2; this.blinkT = 0; }

  update(dt) {
    if (this.blinkN > 0) {
      this.blinkT += dt;
      if (this.blinkT > 0.18) { this.blinkT = 0; this.blinkN--; }
      this.hazard.emissiveIntensity = this.blinkN % 2 ? 2.5 : 0.05;
    } else this.hazard.emissiveIntensity = 0.05;
    this.fold += (this.foldTarget - this.fold) * Math.min(1, dt * 3);
    for (const mi of this.mirrors) mi.g.rotation.y = mi.sx * this.fold * 1.2;
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt);
      for (const h of this.handles) h.position.y = 1.12 + Math.sin(this.shake * 80) * 0.004;
    }
  }
}
