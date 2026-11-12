// ジオメトリ結合・色付けの小道具
import * as THREE from '../vendor/three.module.min.js';

export function colorize(geo, color, jitter = 0, rnd = Math.random) {
  const n = geo.getAttribute('position').count;
  const c = new Float32Array(n * 3);
  const col = new THREE.Color(color);
  for (let i = 0; i < n; i++) {
    const j = jitter ? 1 + (rnd() - 0.5) * jitter : 1;
    c[i * 3] = col.r * j; c[i * 3 + 1] = col.g * j; c[i * 3 + 2] = col.b * j;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(c, 3));
  return geo;
}

// 縦方向グラデーション色
export function colorizeGradient(geo, colBottom, colTop, y0, y1) {
  const pos = geo.getAttribute('position');
  const n = pos.count;
  const c = new Float32Array(n * 3);
  const a = new THREE.Color(colBottom), b = new THREE.Color(colTop);
  const t = new THREE.Color();
  for (let i = 0; i < n; i++) {
    const k = Math.min(1, Math.max(0, (pos.getY(i) - y0) / (y1 - y0)));
    t.copy(a).lerp(b, k);
    c[i * 3] = t.r; c[i * 3 + 1] = t.g; c[i * 3 + 2] = t.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(c, 3));
  return geo;
}

export function merge(geos) {
  const parts = geos.map((g) => (g.index ? g.toNonIndexed() : g));
  let total = 0;
  for (const g of parts) total += g.getAttribute('position').count;
  const names = ['position', 'normal', 'color', 'uv'];
  const out = new THREE.BufferGeometry();
  for (const name of names) {
    const has = parts.every((g) => g.getAttribute(name));
    if (!has) continue;
    const size = parts[0].getAttribute(name).itemSize;
    const arr = new Float32Array(total * size);
    let off = 0;
    for (const g of parts) {
      const a = g.getAttribute(name);
      for (let i = 0; i < a.count; i++) {
        for (let k = 0; k < size; k++) arr[(off + i) * size + k] = a.array[i * size + k];
      }
      off += a.count;
    }
    out.setAttribute(name, new THREE.BufferAttribute(arr, size));
  }
  out.computeBoundingSphere();
  return out;
}

// 同じ位置の頂点を統合してインデックス化 (滑らかな法線用)
export function weld(geo, eps = 1e-4) {
  const pos = geo.getAttribute('position');
  const map = new Map();
  const verts = [];
  const index = [];
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const key = `${Math.round(x / eps)},${Math.round(y / eps)},${Math.round(z / eps)}`;
    let id = map.get(key);
    if (id === undefined) { id = verts.length / 3; verts.push(x, y, z); map.set(key, id); }
    index.push(id);
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  out.setIndex(index);
  return out;
}

// 頂点をノイズで膨らませた丸い塊 (樹冠・植え込み)
export function blob(radius, detail, noiseFn, squashY = 1) {
  const g = weld(new THREE.IcosahedronGeometry(radius, detail));
  const p = g.getAttribute('position');
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const d = v.clone().normalize();
    const k = 1 + noiseFn(d) ;
    v.copy(d).multiplyScalar(radius * k);
    v.y *= squashY;
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}
