// 形状の小道具
import * as THREE from 'three';

// 非インデックス化して位置・法線・UV・色を結合する
export function merge(list) {
  const geos = list.map((g) => (g.index ? g.toNonIndexed() : g));
  let n = 0;
  for (const g of geos) n += g.attributes.position.count;
  const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), uv = new Float32Array(n * 2), col = new Float32Array(n * 3);
  let o = 0;
  for (const g of geos) {
    const c = g.attributes.position.count;
    pos.set(g.attributes.position.array, o * 3);
    if (g.attributes.normal) nor.set(g.attributes.normal.array, o * 3);
    if (g.attributes.uv) uv.set(g.attributes.uv.array, o * 2);
    if (g.attributes.color) col.set(g.attributes.color.array, o * 3);
    else col.fill(1, o * 3, (o + c) * 3);
    o += c;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  out.setAttribute('color', new THREE.BufferAttribute(col, 3));
  out.computeBoundingSphere();
  return out;
}

export function colorize(g, color, ao) {
  const c = new THREE.Color(color);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    let k = 1;
    if (ao) k = ao(g.attributes.position.getX(i), g.attributes.position.getY(i), g.attributes.position.getZ(i));
    arr[i * 3] = c.r * k; arr[i * 3 + 1] = c.g * k; arr[i * 3 + 2] = c.b * k;
  }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}

export function box(w, h, d, x, y, z, color, rotY = 0, ao) {
  let g = new THREE.BoxGeometry(w, h, d).toNonIndexed();
  if (rotY) g.rotateY(rotY);
  g.translate(x, y, z);
  return colorize(g, color, ao);
}

// 部屋の隅ほど暗くする事前計算の陰影
export function roomAO(x, y, z) {
  const dx = Math.min(x + 9, 9 - x), dz = Math.min(z + 6, 99), dyF = y, dyC = 8 - y;
  const corner = (d, r) => 0.72 + 0.28 * Math.min(1, d / r);
  return corner(dx, 1.6) * corner(dz, 1.6) * corner(dyF, 0.9) * corner(dyC, 1.2);
}
