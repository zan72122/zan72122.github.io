// Geometry helpers: build primitives whose UVs point into a shared texture atlas,
// then merge parts into one geometry per object (one draw call per item).
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/BufferGeometryUtils.js';

// rect = { u0, v0, u1, v1 } in atlas UV space, or a swatch (u0==u1).
export function remapUV(geo, rect, filter = null) {
  const uv = geo.attributes.uv;
  const n = geo.attributes.normal;
  for (let i = 0; i < uv.count; i++) {
    if (filter && !filter(i, n)) continue;
    const u = uv.getX(i);
    const v = uv.getY(i);
    uv.setXY(i, rect.u0 + (rect.u1 - rect.u0) * u, rect.v0 + (rect.v1 - rect.v0) * v);
  }
  uv.needsUpdate = true;
  return geo;
}

export function toNonIndexed(geo) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  g.clearGroups();
  return g;
}

// faces: [px, nx, py, ny, pz, nz]; each a rect
export function box(w, h, d, faces, radius = 0, segs = 2) {
  let geo;
  if (radius > 0) {
    geo = new RoundedBoxGeometry(w, h, d, segs, radius);
  } else {
    geo = new THREE.BoxGeometry(w, h, d).toNonIndexed();
  }
  geo.clearGroups();
  const uv = geo.attributes.uv;
  const per = uv.count / 6;
  for (let i = 0; i < uv.count; i++) {
    const f = Math.min(5, Math.floor(i / per));
    const r = faces[f];
    const u = uv.getX(i);
    const v = uv.getY(i);
    uv.setXY(i, r.u0 + (r.u1 - r.u0) * u, r.v0 + (r.v1 - r.v0) * v);
  }
  uv.needsUpdate = true;
  return geo;
}

export function sphere(r, rect, ws = 20, hs = 14, squashY = 1) {
  const geo = new THREE.SphereGeometry(r, ws, hs).toNonIndexed();
  geo.scale(1, squashY, 1);
  remapUV(geo, rect);
  geo.clearGroups();
  return geo;
}

// Cylinder with separate rects for side and caps.
export function cylinder(rt, rb, h, side, cap, seg = 20) {
  const geo = new THREE.CylinderGeometry(rt, rb, h, seg, 1, false).toNonIndexed();
  const uv = geo.attributes.uv;
  const n = geo.attributes.normal;
  for (let i = 0; i < uv.count; i++) {
    const isCap = Math.abs(n.getY(i)) > 0.9;
    const r = isCap ? cap : side;
    const u = uv.getX(i);
    const v = uv.getY(i);
    uv.setXY(i, r.u0 + (r.u1 - r.u0) * u, r.v0 + (r.v1 - r.v0) * v);
  }
  geo.clearGroups();
  return geo;
}

export function lathe(points, rect, seg = 20) {
  const geo = new THREE.LatheGeometry(points.map((p) => new THREE.Vector2(p[0], p[1])), seg).toNonIndexed();
  remapUV(geo, rect);
  geo.clearGroups();
  return geo;
}

export function capsule(r, len, rect, cap = 4, rad = 10) {
  const geo = new THREE.CapsuleGeometry(r, len, cap, rad).toNonIndexed();
  remapUV(geo, rect);
  geo.clearGroups();
  return geo;
}

export function tube(curve, r, rect, segs = 20, rad = 8) {
  const geo = new THREE.TubeGeometry(curve, segs, r, rad, false).toNonIndexed();
  remapUV(geo, rect);
  geo.clearGroups();
  return geo;
}

export function cone(r, h, rect, seg = 12) {
  const geo = new THREE.ConeGeometry(r, h, seg, 1, false).toNonIndexed();
  remapUV(geo, rect);
  geo.clearGroups();
  return geo;
}

export function merge(parts) {
  const clean = parts.map((g) => {
    let geo = g.index ? g.toNonIndexed() : g;
    geo.clearGroups();
    // keep only the attributes we use everywhere
    for (const k of Object.keys(geo.attributes)) {
      if (k !== 'position' && k !== 'normal' && k !== 'uv') geo.deleteAttribute(k);
    }
    return geo;
  });
  const m = mergeGeometries(clean, false);
  m.computeBoundingBox();
  m.computeBoundingSphere();
  return m;
}

export function place(geo, { x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s = 1, sx, sy, sz } = {}) {
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz));
  m.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(sx ?? s, sy ?? s, sz ?? s));
  geo.applyMatrix4(m);
  return geo;
}

// Plain (non-atlas) helpers for the building.
export function solidBox(w, h, d, x, y, z) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(x, y, z);
  return g;
}
