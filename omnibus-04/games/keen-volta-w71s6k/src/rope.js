// Ropes and cables as camera-facing ribbons (one draw call each, cheap to
// update every frame). Sag is computed from slack so tension is visible.
import * as THREE from 'three';

let _camera = null;
export function setRopeCamera(c) { _camera = c; }
const _tmp = new THREE.Vector3(), _t = new THREE.Vector3(), _side = new THREE.Vector3(), _view = new THREE.Vector3(), _cam = new THREE.Vector3();

export class Rope {
  constructor(parent, { width = 0.05, color = 0xcdb58a, segments = 14, metal = false } = {}) {
    this.n = segments; this.width = width; this.parent = parent;
    this.pts = Array.from({ length: segments + 1 }, () => new THREE.Vector3());
    const g = new THREE.BufferGeometry();
    this.pos = new Float32Array((segments + 1) * 2 * 3);
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    const idx = [];
    for (let i = 0; i < segments; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    g.setIndex(idx);
    const nor = new Float32Array((segments + 1) * 2 * 3); for (let i = 1; i < nor.length; i += 3) nor[i] = 1;
    g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    this.mesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ color, roughness: metal ? 0.5 : 1, metalness: metal ? 0.6 : 0, side: THREE.DoubleSide }));
    this.mesh.frustumCulled = false; this.mesh.castShadow = false;
    parent.add(this.mesh);
  }
  // a, b in parent space. slack >= 0 metres of extra rope -> sag.
  set(a, b, slack = 0, sagDir = null) {
    const d = a.distanceTo(b);
    const sag = slack > 0 ? Math.sqrt(Math.max(0, (3 * d * slack) / 8)) : 0.0;
    for (let i = 0; i <= this.n; i++) {
      const u = i / this.n;
      this.pts[i].lerpVectors(a, b, u);
      const s = 4 * u * (1 - u) * sag;
      if (sagDir) this.pts[i].addScaledVector(sagDir, s); else this.pts[i].y -= s;
    }
    this._build();
  }
  setPoints(list) {
    // resample a polyline into n segments
    const lens = [0]; for (let i = 1; i < list.length; i++) lens.push(lens[i - 1] + list[i].distanceTo(list[i - 1]));
    const tot = lens[lens.length - 1] || 1;
    let k = 0;
    for (let i = 0; i <= this.n; i++) {
      const s = (i / this.n) * tot;
      while (k < list.length - 2 && lens[k + 1] < s) k++;
      const seg = lens[k + 1] - lens[k] || 1;
      this.pts[i].lerpVectors(list[k], list[k + 1], (s - lens[k]) / seg);
    }
    this._build();
  }
  _build() {
    this.parent.updateWorldMatrix(true, false);
    _cam.copy(_camera ? _camera.position : new THREE.Vector3(0, 0, 50));
    this.parent.worldToLocal(_cam);
    for (let i = 0; i <= this.n; i++) {
      const p = this.pts[i];
      const a = this.pts[Math.max(0, i - 1)], b = this.pts[Math.min(this.n, i + 1)];
      _t.subVectors(b, a).normalize();
      _view.subVectors(_cam, p).normalize();
      _side.crossVectors(_t, _view).normalize().multiplyScalar(this.width / 2);
      const o = i * 6;
      this.pos[o] = p.x - _side.x; this.pos[o + 1] = p.y - _side.y; this.pos[o + 2] = p.z - _side.z;
      this.pos[o + 3] = p.x + _side.x; this.pos[o + 4] = p.y + _side.y; this.pos[o + 5] = p.z + _side.z;
    }
    this.mesh.geometry.attributes.position.needsUpdate = true;
    this.mesh.geometry.computeBoundingSphere();
  }
  point(u, out = new THREE.Vector3()) { const f = u * this.n, i = Math.min(this.n - 1, Math.floor(f)); return out.lerpVectors(this.pts[i], this.pts[i + 1], f - i); }
  dispose() { this.parent.remove(this.mesh); this.mesh.geometry.dispose(); this.mesh.material.dispose(); }
}

// A simple iron hook mesh (open hook shape), origin at the eye.
export function makeHook(mat, s = 1) {
  const g = new THREE.Group();
  const eye = new THREE.Mesh(new THREE.TorusGeometry(0.08 * s, 0.025 * s, 6, 12), mat); g.add(eye);
  const shank = new THREE.Mesh(new THREE.CylinderGeometry(0.03 * s, 0.03 * s, 0.28 * s, 6), mat); shank.position.y = -0.2 * s; g.add(shank);
  const curve = new THREE.Mesh(new THREE.TorusGeometry(0.12 * s, 0.03 * s, 6, 14, Math.PI * 1.3), mat);
  curve.position.set(0.12 * s, -0.34 * s, 0); curve.rotation.z = Math.PI * 0.95; g.add(curve);
  const block = new THREE.Mesh(new THREE.BoxGeometry(0.16 * s, 0.14 * s, 0.1 * s), mat); block.position.y = 0.12 * s; g.add(block);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}
