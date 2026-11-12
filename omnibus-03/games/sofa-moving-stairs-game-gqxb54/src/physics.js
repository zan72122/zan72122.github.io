// 分離軸判定(SAT)による OBB 同士の衝突と、床の高さ場(階段ランプ)
import * as THREE from 'three';

const _m = new THREE.Matrix4();
const _ax = new THREE.Vector3();
const _d = new THREE.Vector3();

export class OBB {
  constructor() {
    this.c = new THREE.Vector3();   // 中心
    this.h = new THREE.Vector3();   // 半径(半サイズ)
    this.q = new THREE.Quaternion();
    this.ax = [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1)];
    this.tag = '';
  }
  set(c, h, q) {
    this.c.copy(c); this.h.copy(h); this.q.copy(q);
    return this.update();
  }
  update() {
    _m.makeRotationFromQuaternion(this.q);
    this.ax[0].setFromMatrixColumn(_m, 0);
    this.ax[1].setFromMatrixColumn(_m, 1);
    this.ax[2].setFromMatrixColumn(_m, 2);
    return this;
  }
  // 回転後の鉛直方向の半径
  verticalHalf() {
    return Math.abs(this.ax[0].y) * this.h.x + Math.abs(this.ax[1].y) * this.h.y + Math.abs(this.ax[2].y) * this.h.z;
  }
  // 方向 dir に最も遠い頂点
  support(dir, out) {
    out.copy(this.c);
    for (let i = 0; i < 3; i++) {
      const s = this.ax[i].dot(dir) >= 0 ? 1 : -1;
      const hv = i === 0 ? this.h.x : i === 1 ? this.h.y : this.h.z;
      out.addScaledVector(this.ax[i], s * hv);
    }
    return out;
  }
}

function radius(o, axis) {
  return Math.abs(axis.dot(o.ax[0])) * o.h.x + Math.abs(axis.dot(o.ax[1])) * o.h.y + Math.abs(axis.dot(o.ax[2])) * o.h.z;
}

// a と b が重なっていれば out.depth / out.axis (a を押し出す方向) を埋めて true
export function satOverlap(a, b, out) {
  let minDepth = Infinity;
  _d.subVectors(b.c, a.c);
  const test = (axis) => {
    const len = axis.length();
    if (len < 1e-6) return true;
    axis.multiplyScalar(1 / len);
    const ov = radius(a, axis) + radius(b, axis) - Math.abs(_d.dot(axis));
    if (ov <= 0) return false;
    if (ov < minDepth) {
      minDepth = ov;
      out.axis.copy(axis);
      if (_d.dot(axis) > 0) out.axis.negate();
    }
    return true;
  };
  for (let i = 0; i < 3; i++) if (!test(_ax.copy(a.ax[i]))) return false;
  for (let i = 0; i < 3; i++) if (!test(_ax.copy(b.ax[i]))) return false;
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (!test(_ax.crossVectors(a.ax[i], b.ax[j]))) return false;
  out.depth = minDepth;
  return true;
}

// 床の高さ場: 平らな領域と階段(踏み面の鼻先を結ぶランプ)の集合
export const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // +z, +x, -z, -x

export class Ground {
  constructor() { this.regions = []; }
  add(r) { this.regions.push(r); return r; }
  // 平面上で重なる領域(上下階)は、基準高さ ref に最も近いものを選ぶ
  regionAt(x, z, ref = null) {
    let best = null, bd = Infinity;
    for (const r of this.regions) {
      const m = 0.1; // 壁厚ぶんの隙間を埋める余白
      if (x < r.x0 - m || x > r.x1 + m || z < r.z0 - m || z > r.z1 + m) continue;
      if (ref === null) return r;
      const d = Math.abs(this._h(r, x, z) - ref);
      if (d < bd) { bd = d; best = r; }
    }
    return best;
  }
  heightAt(x, z, ref = null) {
    const r = this.regionAt(x, z, ref);
    return r ? this._h(r, x, z) : null;
  }
  _h(r, x, z) {
    if (r.kind !== 'stairs') return r.y0;
    let t;
    switch (r.dir) {
      case 0: t = z - r.z0; break;
      case 1: t = x - r.x0; break;
      case 2: t = r.z1 - z; break;
      default: t = r.x1 - x;
    }
    const top = r.y0 + r.n * r.rise;
    if (t <= 0) return r.y0;
    return Math.min(top, r.y0 + r.rise + t * (r.rise / r.run));
  }
}
