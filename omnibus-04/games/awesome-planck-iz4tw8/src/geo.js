// Geometry helpers: world-space UVs and per-material batching into merged meshes.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/BufferGeometryUtils.js';

const _v = new THREE.Vector3(), _n = new THREE.Vector3(), _m3 = new THREE.Matrix3();

// Assigns planar UVs from world position (meters / scale), picking the plane by normal.
export function worldUV(geom, scale = 1, offset = [0, 0]) {
  const pos = geom.attributes.position, nor = geom.attributes.normal;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    _v.fromBufferAttribute(pos, i); _n.fromBufferAttribute(nor, i);
    const ax = Math.abs(_n.x), ay = Math.abs(_n.y), az = Math.abs(_n.z);
    let u, v;
    if (ax >= ay && ax >= az) { u = _v.z * Math.sign(_n.x || 1); v = _v.y; }
    else if (ay >= az) { u = _v.x; v = _v.z; }
    else { u = _v.x * Math.sign(_n.z || 1) * -1; v = _v.y; u = -u; }
    uv[i * 2] = u / scale + offset[0]; uv[i * 2 + 1] = v / scale + offset[1];
  }
  geom.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geom;
}

export class Batcher {
  constructor() { this.groups = new Map(); }
  // geometry is cloned & transformed; uvScale: if set, world-space UVs are applied
  add(material, geometry, matrix, uvScale = 0, opts = {}) {
    let g = geometry.index ? geometry.toNonIndexed() : geometry.clone();
    if (matrix) g.applyMatrix4(matrix);
    if (!g.attributes.normal) g.computeVertexNormals();
    if (uvScale) worldUV(g, uvScale, opts.uvOffset);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    const key = material.uuid + (opts.noShadow ? ':ns' : '');
    if (!this.groups.has(key)) this.groups.set(key, { material, list: [], noShadow: !!opts.noShadow });
    this.groups.get(key).list.push(g);
    return this;
  }
  box(material, w, h, d, x, y, z, uvScale = 1, rot = null, opts) {
    const m = new THREE.Matrix4();
    if (rot) m.makeRotationFromEuler(rot);
    m.setPosition(x, y, z);
    return this.add(material, new THREE.BoxGeometry(w, h, d), m, uvScale, opts);
  }
  // axis-aligned box from min/max corners
  aabb(material, x0, y0, z0, x1, y1, z1, uvScale = 1, opts) {
    if (x1 - x0 < 1e-4 || y1 - y0 < 1e-4 || z1 - z0 < 1e-4) return this;
    return this.box(material, x1 - x0, y1 - y0, z1 - z0, (x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, uvScale, null, opts);
  }
  build(parent, { cast = true, receive = true } = {}) {
    const meshes = [];
    for (const { material, list, noShadow } of this.groups.values()) {
      const merged = mergeGeometries(list, false);
      merged.computeBoundingSphere();
      const mesh = new THREE.Mesh(merged, material);
      mesh.castShadow = cast && !noShadow && !material.transparent;
      mesh.receiveShadow = receive;
      mesh.matrixAutoUpdate = false;
      parent.add(mesh);
      meshes.push(mesh);
      list.forEach(g => g.dispose());
    }
    this.groups.clear();
    return meshes;
  }
}

// Wall with rectangular openings, in a local 2D frame (u along wall, v up),
// emitted as axis-aligned boxes. openings: [{u0,u1,v0,v1}]
export function wallPieces(u0, u1, v0, v1, openings) {
  // split u-axis into intervals by opening edges
  const us = [u0, u1];
  for (const o of openings) { us.push(Math.max(u0, o.u0), Math.min(u1, o.u1)); }
  us.sort((a, b) => a - b);
  const pieces = [];
  for (let i = 0; i < us.length - 1; i++) {
    const a = us[i], b = us[i + 1];
    if (b - a < 1e-4) continue;
    const mid = (a + b) / 2;
    const cuts = openings.filter(o => o.u0 <= mid && o.u1 >= mid).map(o => [Math.max(v0, o.v0), Math.min(v1, o.v1)]).sort((p, q) => p[0] - q[0]);
    let cur = v0;
    for (const [c0, c1] of cuts) {
      if (c0 > cur + 1e-4) pieces.push({ u0: a, u1: b, v0: cur, v1: c0 });
      cur = Math.max(cur, c1);
    }
    if (v1 > cur + 1e-4) pieces.push({ u0: a, u1: b, v0: cur, v1 });
  }
  return pieces;
}

export function rotY(a) { return new THREE.Euler(0, a, 0); }
export const V3 = (x, y, z) => new THREE.Vector3(x, y, z);

// Merge all static meshes under `group` by material (skips subtrees flagged userData.dynamic,
// instanced meshes and skinned meshes). Cuts draw calls for prop clusters.
export function mergeStatic(group) {
  group.updateMatrixWorld(true);
  const inv = group.matrixWorld.clone().invert();
  const by = new Map();
  const victims = [];
  const walk = (o) => {
    for (const ch of [...o.children]) {
      if (ch.userData.dynamic) continue;
      if (ch.isMesh && !ch.isInstancedMesh && !ch.isSkinnedMesh && ch.geometry) {
        let g = ch.geometry.index ? ch.geometry.toNonIndexed() : ch.geometry.clone();
        for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
        if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
        if (!g.attributes.normal) g.computeVertexNormals();
        g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, ch.matrixWorld));
        const key = ch.material.uuid + (ch.castShadow ? 's' : 'n');
        if (!by.has(key)) by.set(key, { mat: ch.material, cast: ch.castShadow, list: [] });
        by.get(key).list.push(g);
        victims.push(ch);
      }
      if (!ch.isMesh || ch.children.length) walk(ch);
    }
  };
  walk(group);
  for (const v of victims) v.parent.remove(v);
  for (const { mat, cast, list } of by.values()) {
    const m = new THREE.Mesh(list.length > 1 ? mergeGeometries(list, false) : list[0], mat);
    m.castShadow = cast; m.receiveShadow = true;
    group.add(m);
  }
}
