// 動かない部品を材質ごとに 1 つのメッシュへまとめ、描画回数を減らす（iPhone の負荷対策）
import * as THREE from '../vendor/three.module.min.js';
import { mergeGeometries } from '../vendor/addons/BufferGeometryUtils.js';

export function mergeStatic(root, keep = new Set()) {
  root.updateMatrixWorld(true);
  const inv = root.matrixWorld.clone().invert();
  const buckets = new Map();
  const remove = [];
  const isKept = (o) => {
    for (let p = o; p && p !== root; p = p.parent) if (keep.has(p)) return true;
    return false;
  };
  root.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || o.isSkinnedMesh || !o.visible) return;
    if (Array.isArray(o.material) || isKept(o)) return;
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
    if (!g.attributes.normal) g.computeVertexNormals();
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    g.morphAttributes = {};
    const m = new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld);
    g.applyMatrix4(m);
    if (m.determinant() < 0) {
      // 鏡像の部品は面の向きを戻す
      const p = g.attributes.position, n = g.attributes.normal, uv = g.attributes.uv;
      for (let i = 0; i < p.count; i += 3) {
        for (const a of [p, n, uv]) {
          const s = a.itemSize;
          for (let k = 0; k < s; k++) {
            const t = a.array[(i + 1) * s + k];
            a.array[(i + 1) * s + k] = a.array[(i + 2) * s + k];
            a.array[(i + 2) * s + k] = t;
          }
        }
      }
    }
    const key = o.material.uuid + (o.castShadow ? 'c' : '') + (o.receiveShadow ? 'r' : '') + (o.renderOrder || 0);
    if (!buckets.has(key)) buckets.set(key, { mat: o.material, cast: o.castShadow, recv: o.receiveShadow, ro: o.renderOrder, geos: [] });
    buckets.get(key).geos.push(g);
    remove.push(o);
  });
  for (const o of remove) o.parent.remove(o);
  let n = 0;
  for (const b of buckets.values()) {
    const merged = mergeGeometries(b.geos, false);
    if (!merged) continue;
    merged.computeBoundingSphere();
    const mesh = new THREE.Mesh(merged, b.mat);
    mesh.castShadow = b.cast;
    mesh.receiveShadow = b.recv;
    mesh.renderOrder = b.ro;
    root.add(mesh);
    n++;
  }
  return { removed: remove.length, added: n };
}
