// Organic mesh builder.
// A character is described as a list of signed-distance primitives (round cones and
// ellipsoids) blended with smooth-min. The implicit surface is polygonised with
// surface nets (narrow band, coarse-to-fine), vertices are projected onto the true
// surface, normals come from the analytic field, and per-vertex skin weights / tint /
// ambient occlusion / fur-flow are derived from the same primitives.

import * as THREE from '../../lib/three.module.js';

const T_RC = 0, T_EL = 1;

function compilePrims(prims, boneIndex) {
  const out = [];
  for (const p of prims) {
    const q = { src: p, sub: !!p.sub, k: p.k ?? 0.05, tint: p.tint || null, flow: p.flow || null };
    if (p.type === 'rc') {
      q.type = T_RC;
      q.a = new THREE.Vector3(...p.a);
      q.b = new THREE.Vector3(...p.b);
      q.r1 = p.ra;
      q.r2 = p.rb ?? p.ra;
      q.ba = q.b.clone().sub(q.a);
      q.l2 = q.ba.lengthSq();
      q.rr = q.r1 - q.r2;
      q.a2 = q.l2 - q.rr * q.rr;
      q.il2 = 1 / q.l2;
      q.center = q.a.clone().add(q.b).multiplyScalar(0.5);
      q.radius = Math.sqrt(q.l2) * 0.5 + Math.max(q.r1, q.r2);
      q.axisA = q.a;
      q.axisB = q.b;
    } else {
      q.type = T_EL;
      q.c = new THREE.Vector3(...p.c);
      q.r = new THREE.Vector3(...p.r);
      const e = p.rot ? new THREE.Euler(p.rot[0], p.rot[1], p.rot[2], 'XYZ') : new THREE.Euler();
      const m = new THREE.Matrix4().makeRotationFromEuler(e);
      q.inv = m.clone().invert().elements; // world->local rotation (column major)
      q.center = q.c;
      q.radius = Math.max(q.r.x, q.r.y, q.r.z);
      // principal axis (longest) used for two-bone splits
      const ax = new THREE.Vector3(q.r.x >= q.r.y && q.r.x >= q.r.z ? 1 : 0, q.r.y > q.r.x && q.r.y >= q.r.z ? 1 : 0, q.r.z > q.r.x && q.r.z > q.r.y ? 1 : 0);
      ax.applyMatrix4(m);
      const len = q.radius;
      q.axisA = q.c.clone().addScaledVector(ax, -len);
      q.axisB = q.c.clone().addScaledVector(ax, len);
      if (p.split && p.split.a) {
        q.axisA = new THREE.Vector3(...p.split.a);
        q.axisB = new THREE.Vector3(...p.split.b);
      }
    }
    // bone assignment
    if (Array.isArray(p.bone)) {
      q.boneA = boneIndex[p.bone[0]];
      q.boneB = boneIndex[p.bone[1]];
      q.t0 = p.t0 ?? 0.25;
      q.t1 = p.t1 ?? 0.75;
      if (q.boneA === undefined || q.boneB === undefined) throw new Error('bad bone ' + p.bone);
    } else {
      q.boneA = boneIndex[p.bone];
      q.boneB = -1;
      if (q.boneA === undefined) throw new Error('bad bone ' + p.bone);
    }
    if (p.split && !p.split.a && q.type === T_RC) {
      q.t0 = p.split.t0;
      q.t1 = p.split.t1;
    }
    q.wscale = p.wscale ?? 1; // skin influence multiplier
    out.push(q);
  }
  return out;
}

function primDist(q, x, y, z) {
  if (q.type === T_RC) {
    const bax = q.ba.x, bay = q.ba.y, baz = q.ba.z;
    const pax = x - q.a.x, pay = y - q.a.y, paz = z - q.a.z;
    const l2 = q.l2;
    const yy = pax * bax + pay * bay + paz * baz;
    const zz = yy - l2;
    const qx = pax * l2 - bax * yy, qy = pay * l2 - bay * yy, qz = paz * l2 - baz * yy;
    const x2 = qx * qx + qy * qy + qz * qz;
    const y2 = yy * yy * l2;
    const z2 = zz * zz * l2;
    const rr = q.rr, a2 = q.a2, il2 = q.il2;
    const k = Math.sign(rr) * rr * rr * x2;
    if (Math.sign(zz) * a2 * z2 > k) return Math.sqrt(x2 + z2) * il2 - q.r2;
    if (Math.sign(yy) * a2 * y2 < k) return Math.sqrt(x2 + y2) * il2 - q.r1;
    return (Math.sqrt(x2 * a2 * il2) + yy * rr) * il2 - q.r1;
  } else {
    const dx = x - q.c.x, dy = y - q.c.y, dz = z - q.c.z;
    const m = q.inv;
    const lx = m[0] * dx + m[4] * dy + m[8] * dz;
    const ly = m[1] * dx + m[5] * dy + m[9] * dz;
    const lz = m[2] * dx + m[6] * dy + m[10] * dz;
    const rx = q.r.x, ry = q.r.y, rz = q.r.z;
    const k0 = Math.sqrt((lx / rx) ** 2 + (ly / ry) ** 2 + (lz / rz) ** 2);
    const k1 = Math.sqrt((lx / (rx * rx)) ** 2 + (ly / (ry * ry)) ** 2 + (lz / (rz * rz)) ** 2);
    if (k1 < 1e-9) return -Math.min(rx, ry, rz);
    return (k0 * (k0 - 1)) / k1;
  }
}

function smin(a, b, k) {
  const h = Math.max(k - Math.abs(a - b), 0) / k;
  return Math.min(a, b) - h * h * k * 0.25;
}

function makeField(prims) {
  const n = prims.length;
  const cx = new Float32Array(n), cy = new Float32Array(n), cz = new Float32Array(n), cr = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    cx[i] = prims[i].center.x;
    cy[i] = prims[i].center.y;
    cz[i] = prims[i].center.z;
    cr[i] = prims[i].radius;
  }
  const all = new Int32Array(n);
  for (let i = 0; i < n; i++) all[i] = i;
  function evalList(x, y, z, list, start, end) {
    let d = 1e9;
    for (let li = start; li < end; li++) {
      const i = list[li];
      const q = prims[i];
      const ddx = x - cx[i], ddy = y - cy[i], ddz = z - cz[i];
      const lb = Math.sqrt(ddx * ddx + ddy * ddy + ddz * ddz) - cr[i];
      if (q.sub) {
        if (lb > q.k) continue;
        const di = primDist(q, x, y, z);
        d = -smin(-d, di, q.k);
      } else {
        if (lb > d + q.k) continue;
        const di = primDist(q, x, y, z);
        d = d > 1e8 ? di : smin(d, di, q.k);
      }
    }
    return d;
  }
  const full = (x, y, z) => evalList(x, y, z, all, 0, n);
  // Optional acceleration grid: per cell list of primitives that can matter.
  let grid = null;
  full.accelerate = (min, size, dims) => {
    const [gx, gy, gz] = dims;
    const R = size * 0.866;
    const offs = new Int32Array(gx * gy * gz + 1);
    const lists = [];
    let cnt = 0;
    for (let k = 0; k < gz; k++)
      for (let j = 0; j < gy; j++)
        for (let i = 0; i < gx; i++) {
          const x = min.x + (i + 0.5) * size, y = min.y + (j + 0.5) * size, z = min.z + (k + 0.5) * size;
          const dc = full(x, y, z);
          offs[i + gx * (j + gy * k)] = cnt;
          for (let p = 0; p < n; p++) {
            const q = prims[p];
            const ddx = x - cx[p], ddy = y - cy[p], ddz = z - cz[p];
            const lb = Math.sqrt(ddx * ddx + ddy * ddy + ddz * ddz) - cr[p] - R;
            if (q.sub ? lb <= q.k + 0.01 : lb <= dc + 1.6 * R + q.k + 0.01) {
              lists.push(p);
              cnt++;
            }
          }
        }
    offs[gx * gy * gz] = cnt;
    grid = { min: min.clone(), size, gx, gy, gz, offs, lists: Int32Array.from(lists) };
  };
  const field = (x, y, z) => {
    if (grid) {
      const i = Math.floor((x - grid.min.x) / grid.size);
      const j = Math.floor((y - grid.min.y) / grid.size);
      const k = Math.floor((z - grid.min.z) / grid.size);
      if (i >= 0 && j >= 0 && k >= 0 && i < grid.gx && j < grid.gy && k < grid.gz) {
        const c = i + grid.gx * (j + grid.gy * k);
        return evalList(x, y, z, grid.lists, grid.offs[c], grid.offs[c + 1]);
      }
    }
    return full(x, y, z);
  };
  field.full = full;
  return field;
}

/**
 * def = {
 *   prims: [...], bones: [names], cell, bounds: {min:[...], max:[...]},
 *   sigmaSkin, sigmaTint, ao: {dist, strength}, defaultFlow:[x,y,z]
 * }
 */
export function buildSdfGeometry(def) {
  const boneIndex = {};
  def.bones.forEach((b, i) => (boneIndex[b] = i));
  const prims = compilePrims(def.prims, boneIndex);
  const field = makeField(prims);
  const h = def.cell;
  const min = new THREE.Vector3(...def.bounds.min);
  const max = new THREE.Vector3(...def.bounds.max);
  const nx = Math.ceil((max.x - min.x) / h) + 1;
  const ny = Math.ceil((max.y - min.y) / h) + 1;
  const nz = Math.ceil((max.z - min.z) / h) + 1;
  const C = 4;
  const cnx = Math.ceil((nx - 1) / C) + 1, cny = Math.ceil((ny - 1) / C) + 1, cnz = Math.ceil((nz - 1) / C) + 1;
  const coarse = new Float32Array(cnx * cny * cnz);
  for (let k = 0; k < cnz; k++)
    for (let j = 0; j < cny; j++)
      for (let i = 0; i < cnx; i++)
        coarse[i + cnx * (j + cny * k)] = field(min.x + i * C * h, min.y + j * C * h, min.z + k * C * h);
  field.full.accelerate(min, C * h, [cnx, cny, cnz]);
  const band = C * h * 1.732 * 1.6;
  const near = new Uint8Array((cnx - 1) * (cny - 1) * (cnz - 1));
  for (let k = 0; k < cnz - 1; k++)
    for (let j = 0; j < cny - 1; j++)
      for (let i = 0; i < cnx - 1; i++) {
        let mn = 1e9;
        for (let c = 0; c < 8; c++) {
          const v = coarse[(i + (c & 1)) + cnx * ((j + ((c >> 1) & 1)) + cny * (k + ((c >> 2) & 1)))];
          const a = Math.abs(v);
          if (a < mn) mn = a;
        }
        near[i + (cnx - 1) * (j + (cny - 1) * k)] = mn < band ? 1 : 0;
      }
  const N = nx * ny * nz;
  const vals = new Float32Array(N);
  for (let k = 0; k < nz; k++) {
    const ck = Math.min(Math.floor(k / C), cnz - 2), fk = k / C - ck;
    for (let j = 0; j < ny; j++) {
      const cj = Math.min(Math.floor(j / C), cny - 2), fj = j / C - cj;
      for (let i = 0; i < nx; i++) {
        const ci = Math.min(Math.floor(i / C), cnx - 2), fi = i / C - ci;
        const idx = i + nx * (j + ny * k);
        if (near[ci + (cnx - 1) * (cj + (cny - 1) * ck)]) {
          vals[idx] = field(min.x + i * h, min.y + j * h, min.z + k * h);
        } else {
          const c000 = coarse[ci + cnx * (cj + cny * ck)];
          const c100 = coarse[ci + 1 + cnx * (cj + cny * ck)];
          const c010 = coarse[ci + cnx * (cj + 1 + cny * ck)];
          const c110 = coarse[ci + 1 + cnx * (cj + 1 + cny * ck)];
          const c001 = coarse[ci + cnx * (cj + cny * (ck + 1))];
          const c101 = coarse[ci + 1 + cnx * (cj + cny * (ck + 1))];
          const c011 = coarse[ci + cnx * (cj + 1 + cny * (ck + 1))];
          const c111 = coarse[ci + 1 + cnx * (cj + 1 + cny * (ck + 1))];
          const x00 = c000 + (c100 - c000) * fi, x10 = c010 + (c110 - c010) * fi;
          const x01 = c001 + (c101 - c001) * fi, x11 = c011 + (c111 - c011) * fi;
          const y0 = x00 + (x10 - x00) * fj, y1 = x01 + (x11 - x01) * fj;
          vals[idx] = y0 + (y1 - y0) * fk;
        }
      }
    }
  }
  // --- surface nets vertices ---
  const cellIdx = new Int32Array((nx - 1) * (ny - 1) * (nz - 1)).fill(-1);
  const pos = [];
  const corner = new Float32Array(8);
  const edges = [
    [0, 1], [2, 3], [4, 5], [6, 7],
    [0, 2], [1, 3], [4, 6], [5, 7],
    [0, 4], [1, 5], [2, 6], [3, 7],
  ];
  const coff = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0], [0, 0, 1], [1, 0, 1], [0, 1, 1], [1, 1, 1]];
  for (let k = 0; k < nz - 1; k++)
    for (let j = 0; j < ny - 1; j++)
      for (let i = 0; i < nx - 1; i++) {
        let mask = 0;
        for (let c = 0; c < 8; c++) {
          const v = vals[(i + coff[c][0]) + nx * ((j + coff[c][1]) + ny * (k + coff[c][2]))];
          corner[c] = v;
          if (v < 0) mask |= 1 << c;
        }
        if (mask === 0 || mask === 255) continue;
        let sx = 0, sy = 0, sz = 0, cnt = 0;
        for (const [a, b] of edges) {
          const va = corner[a], vb = corner[b];
          if ((va < 0) === (vb < 0)) continue;
          const t = va / (va - vb);
          sx += coff[a][0] + (coff[b][0] - coff[a][0]) * t;
          sy += coff[a][1] + (coff[b][1] - coff[a][1]) * t;
          sz += coff[a][2] + (coff[b][2] - coff[a][2]) * t;
          cnt++;
        }
        cellIdx[i + (nx - 1) * (j + (ny - 1) * k)] = pos.length / 3;
        pos.push(min.x + (i + sx / cnt) * h, min.y + (j + sy / cnt) * h, min.z + (k + sz / cnt) * h);
      }
  // --- quads ---
  const idx = [];
  const cid = (i, j, k) => cellIdx[i + (nx - 1) * (j + (ny - 1) * k)];
  const quad = (a, b, c, d, flip) => {
    if (a < 0 || b < 0 || c < 0 || d < 0) return;
    if (flip) {
      const t = b;
      b = d;
      d = t;
    }
    // choose shorter diagonal
    const dac = (pos[a * 3] - pos[c * 3]) ** 2 + (pos[a * 3 + 1] - pos[c * 3 + 1]) ** 2 + (pos[a * 3 + 2] - pos[c * 3 + 2]) ** 2;
    const dbd = (pos[b * 3] - pos[d * 3]) ** 2 + (pos[b * 3 + 1] - pos[d * 3 + 1]) ** 2 + (pos[b * 3 + 2] - pos[d * 3 + 2]) ** 2;
    if (dac <= dbd) idx.push(a, b, c, a, c, d);
    else idx.push(a, b, d, b, c, d);
  };
  for (let k = 0; k < nz; k++)
    for (let j = 0; j < ny; j++)
      for (let i = 0; i < nx; i++) {
        const v0 = vals[i + nx * (j + ny * k)];
        const in0 = v0 < 0;
        if (i < nx - 1 && j > 0 && k > 0 && j < ny - 1 && k < nz - 1) {
          const v1 = vals[i + 1 + nx * (j + ny * k)];
          if (in0 !== v1 < 0) quad(cid(i, j - 1, k - 1), cid(i, j, k - 1), cid(i, j, k), cid(i, j - 1, k), !in0);
        }
        if (j < ny - 1 && i > 0 && k > 0 && i < nx - 1 && k < nz - 1) {
          const v1 = vals[i + nx * (j + 1 + ny * k)];
          if (in0 !== v1 < 0) quad(cid(i - 1, j, k - 1), cid(i - 1, j, k), cid(i, j, k), cid(i, j, k - 1), !in0);
        }
        if (k < nz - 1 && i > 0 && j > 0 && i < nx - 1 && j < ny - 1) {
          const v1 = vals[i + nx * (j + ny * (k + 1))];
          if (in0 !== v1 < 0) quad(cid(i - 1, j - 1, k), cid(i, j - 1, k), cid(i, j, k), cid(i - 1, j, k), !in0);
        }
      }
  // --- project to surface & normals ---
  const nv = pos.length / 3;
  const P = new Float32Array(pos);
  const Nrm = new Float32Array(nv * 3);
  const e = h * 0.35;
  for (let v = 0; v < nv; v++) {
    let x = P[v * 3], y = P[v * 3 + 1], z = P[v * 3 + 2];
    let gx = 0, gy = 0, gz = 1;
    for (let it = 0; it < 3; it++) {
      const d = field(x, y, z);
      gx = field(x + e, y, z) - field(x - e, y, z);
      gy = field(x, y + e, z) - field(x, y - e, z);
      gz = field(x, y, z + e) - field(x, y, z - e);
      const gl = Math.sqrt(gx * gx + gy * gy + gz * gz) || 1;
      gx /= gl;
      gy /= gl;
      gz /= gl;
      if (it < 2) {
        const step = Math.max(-h * 0.6, Math.min(h * 0.6, d));
        x -= gx * step;
        y -= gy * step;
        z -= gz * step;
      }
    }
    P[v * 3] = x;
    P[v * 3 + 1] = y;
    P[v * 3 + 2] = z;
    Nrm[v * 3] = gx;
    Nrm[v * 3 + 1] = gy;
    Nrm[v * 3 + 2] = gz;
  }
  // --- tangential relaxation (evens out the triangle sizes, keeps it on the surface) ---
  if (def.relax) {
    const nb = new Array(nv);
    for (let v = 0; v < nv; v++) nb[v] = [];
    for (let t = 0; t < idx.length; t += 3) {
      const a = idx[t], b = idx[t + 1], c = idx[t + 2];
      nb[a].push(b, c);
      nb[b].push(a, c);
      nb[c].push(a, b);
    }
    const tmp = new Float32Array(P.length);
    for (let pass = 0; pass < def.relax; pass++) {
      for (let v = 0; v < nv; v++) {
        const L = nb[v];
        if (!L.length) {
          tmp[v * 3] = P[v * 3];
          tmp[v * 3 + 1] = P[v * 3 + 1];
          tmp[v * 3 + 2] = P[v * 3 + 2];
          continue;
        }
        let ax = 0, ay = 0, az = 0;
        for (const u of L) {
          ax += P[u * 3];
          ay += P[u * 3 + 1];
          az += P[u * 3 + 2];
        }
        ax /= L.length;
        ay /= L.length;
        az /= L.length;
        tmp[v * 3] = P[v * 3] + (ax - P[v * 3]) * 0.5;
        tmp[v * 3 + 1] = P[v * 3 + 1] + (ay - P[v * 3 + 1]) * 0.5;
        tmp[v * 3 + 2] = P[v * 3 + 2] + (az - P[v * 3 + 2]) * 0.5;
      }
      for (let v = 0; v < nv; v++) {
        let x = tmp[v * 3], y = tmp[v * 3 + 1], z = tmp[v * 3 + 2];
        const d = field(x, y, z);
        const gx = field(x + e, y, z) - field(x - e, y, z);
        const gy = field(x, y + e, z) - field(x, y - e, z);
        const gz = field(x, y, z + e) - field(x, y, z - e);
        const gl = Math.sqrt(gx * gx + gy * gy + gz * gz) || 1;
        x -= (gx / gl) * d;
        y -= (gy / gl) * d;
        z -= (gz / gl) * d;
        P[v * 3] = x;
        P[v * 3 + 1] = y;
        P[v * 3 + 2] = z;
        Nrm[v * 3] = gx / gl;
        Nrm[v * 3 + 1] = gy / gl;
        Nrm[v * 3 + 2] = gz / gl;
      }
    }
  }

  // --- per-vertex attributes from primitives ---
  const nb = def.bones.length;
  const skinIndex = new Uint16Array(nv * 4);
  const skinWeight = new Float32Array(nv * 4);
  const color = new Float32Array(nv * 3);
  const ao = new Float32Array(nv);
  const flow = new Float32Array(nv * 3);
  const region = new Float32Array(nv);
  const sigS = def.sigmaSkin ?? 0.03;
  const sigT = def.sigmaTint ?? 0.012;
  const bw = new Float32Array(nb);
  const pd = new Float32Array(prims.length);
  const aoDist = def.ao?.dist ?? 0.015;
  const aoStr = def.ao?.strength ?? 1.0;
  const defFlow = def.defaultFlow || [0, -1, 0];
  const tmpv = new THREE.Vector3();
  for (let v = 0; v < nv; v++) {
    const x = P[v * 3], y = P[v * 3 + 1], z = P[v * 3 + 2];
    let dmin = 1e9;
    for (let i = 0; i < prims.length; i++) {
      const q = prims[i];
      if (q.sub) {
        pd[i] = 1e9;
        continue;
      }
      const ddx = x - q.center.x, ddy = y - q.center.y, ddz = z - q.center.z;
      const lb = Math.sqrt(ddx * ddx + ddy * ddy + ddz * ddz) - q.radius;
      if (lb > 0.25) {
        pd[i] = 1e9;
        continue;
      }
      pd[i] = primDist(q, x, y, z);
      if (pd[i] < dmin) dmin = pd[i];
    }
    bw.fill(0);
    let tr = 0, tg = 0, tb = 0, tw = 0, fx = 0, fy = 0, fz = 0, rg = 0;
    for (let i = 0; i < prims.length; i++) {
      if (pd[i] > 1e8) continue;
      const q = prims[i];
      const dd = pd[i] - dmin;
      const w = Math.exp(-dd / sigS) * q.wscale;
      if (w > 1e-4) {
        if (q.boneB < 0) bw[q.boneA] += w;
        else {
          // projection along primitive axis
          const ax = q.axisB.x - q.axisA.x, ay = q.axisB.y - q.axisA.y, az = q.axisB.z - q.axisA.z;
          const l2 = ax * ax + ay * ay + az * az;
          let t = ((x - q.axisA.x) * ax + (y - q.axisA.y) * ay + (z - q.axisA.z) * az) / l2;
          const s = q.t1 > q.t0 ? Math.min(1, Math.max(0, (t - q.t0) / (q.t1 - q.t0))) : t > q.t0 ? 1 : 0;
          const ss = s * s * (3 - 2 * s);
          bw[q.boneA] += w * (1 - ss);
          bw[q.boneB] += w * ss;
        }
      }
      const wt = Math.exp(-dd / sigT);
      const tint = q.tint || [1, 1, 1];
      tr += tint[0] * wt;
      tg += tint[1] * wt;
      tb += tint[2] * wt;
      rg += (q.src.region ?? 0) * wt;
      tw += wt;
      const fl = q.flow || defFlow;
      const wf = Math.exp(-dd / (sigS * 1.5));
      fx += fl[0] * wf;
      fy += fl[1] * wf;
      fz += fl[2] * wf;
    }
    // top 4 bones
    const top = [-1, -1, -1, -1];
    const topw = [0, 0, 0, 0];
    for (let b = 0; b < nb; b++) {
      const w = bw[b];
      if (w <= topw[3]) continue;
      let s = 3;
      while (s > 0 && w > topw[s - 1]) {
        top[s] = top[s - 1];
        topw[s] = topw[s - 1];
        s--;
      }
      top[s] = b;
      topw[s] = w;
    }
    let sw = topw[0] + topw[1] + topw[2] + topw[3];
    if (sw <= 0) {
      top[0] = 0;
      topw[0] = 1;
      sw = 1;
    }
    for (let s = 0; s < 4; s++) {
      skinIndex[v * 4 + s] = Math.max(0, top[s]);
      skinWeight[v * 4 + s] = topw[s] / sw;
    }
    color[v * 3] = tr / tw;
    color[v * 3 + 1] = tg / tw;
    color[v * 3 + 2] = tb / tw;
    region[v] = rg / tw;
    // flow projected on tangent plane
    const nxv = Nrm[v * 3], nyv = Nrm[v * 3 + 1], nzv = Nrm[v * 3 + 2];
    const dn = fx * nxv + fy * nyv + fz * nzv;
    tmpv.set(fx - dn * nxv, fy - dn * nyv, fz - dn * nzv);
    if (tmpv.lengthSq() < 1e-8) tmpv.set(0, -1, 0);
    tmpv.normalize();
    flow[v * 3] = tmpv.x;
    flow[v * 3 + 1] = tmpv.y;
    flow[v * 3 + 2] = tmpv.z;
    // SDF ambient occlusion
    let occ = 0, sca = 1, norm = 0;
    for (let s = 1; s <= 4; s++) {
      const hh = aoDist * s;
      const d = field(x + nxv * hh, y + nyv * hh, z + nzv * hh);
      occ += Math.max(0, hh - d) / hh * sca;
      norm += sca;
      sca *= 0.75;
    }
    ao[v] = Math.max(0.25, 1 - aoStr * (occ / norm));
  }

  // smooth AO over the mesh to avoid blotches
  {
    const acc = new Float32Array(nv), cntA = new Float32Array(nv);
    for (let pass = 0; pass < 3; pass++) {
      acc.fill(0);
      cntA.fill(0);
      for (let t = 0; t < idx.length; t += 3) {
        const a = idx[t], b = idx[t + 1], c = idx[t + 2];
        const s3 = ao[a] + ao[b] + ao[c];
        acc[a] += s3; acc[b] += s3; acc[c] += s3;
        cntA[a] += 3; cntA[b] += 3; cntA[c] += 3;
      }
      for (let v = 0; v < nv; v++) if (cntA[v]) ao[v] = acc[v] / cntA[v];
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(P, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(Nrm, 3));
  g.setAttribute('color', new THREE.BufferAttribute(color, 3));
  g.setAttribute('ao', new THREE.BufferAttribute(ao, 1));
  g.setAttribute('flow', new THREE.BufferAttribute(flow, 3));
  g.setAttribute('region', new THREE.BufferAttribute(region, 1));
  g.setAttribute('skinIndex', new THREE.BufferAttribute(skinIndex, 4));
  g.setAttribute('skinWeight', new THREE.BufferAttribute(skinWeight, 4));
  g.setIndex(nv > 65535 ? new THREE.BufferAttribute(new Uint32Array(idx), 1) : new THREE.BufferAttribute(new Uint16Array(idx), 1));
  g.computeBoundingSphere();
  g.userData.field = field;
  return g;
}

// Build a static (non-skinned) geometry from primitives; all prims use bone 'root'.
export function buildStaticSdf(prims, opts) {
  const p2 = prims.map((p) => ({ ...p, bone: 'root' }));
  const g = buildSdfGeometry({ ...opts, prims: p2, bones: ['root'] });
  g.deleteAttribute('skinIndex');
  g.deleteAttribute('skinWeight');
  return g;
}

/**
 * Skeleton from bone specs: [{name, parent, head:[x,y,z], tail:[x,y,z], side:[x,y,z]?}]
 * Each bone's local +Y points head->tail, +X aligns with `side` (default world +X).
 */
export function buildSkeleton(specs) {
  const bones = [];
  const byName = {};
  const restObjQuat = {};
  const restObjPos = {};
  const m = new THREE.Matrix4();
  const X = new THREE.Vector3(), Y = new THREE.Vector3(), Z = new THREE.Vector3();
  for (const s of specs) {
    const b = new THREE.Bone();
    b.name = s.name;
    const head = new THREE.Vector3(...s.head);
    const tail = new THREE.Vector3(...(s.tail || [s.head[0], s.head[1] + 0.1, s.head[2]]));
    Y.subVectors(tail, head).normalize();
    X.set(...(s.side || [1, 0, 0]));
    X.addScaledVector(Y, -X.dot(Y));
    if (X.lengthSq() < 1e-6) X.set(0, 0, 1).addScaledVector(Y, -Y.z);
    X.normalize();
    Z.crossVectors(X, Y).normalize();
    m.makeBasis(X, Y, Z);
    const q = new THREE.Quaternion().setFromRotationMatrix(m);
    restObjQuat[s.name] = q;
    restObjPos[s.name] = head;
    if (s.parent) {
      const pq = restObjQuat[s.parent];
      const pp = restObjPos[s.parent];
      const inv = pq.clone().invert();
      b.position.copy(head).sub(pp).applyQuaternion(inv);
      b.quaternion.copy(inv).multiply(q);
      byName[s.parent].add(b);
    } else {
      b.position.copy(head);
      b.quaternion.copy(q);
    }
    b.userData.restLocalQuat = b.quaternion.clone();
    b.userData.restLocalPos = b.position.clone();
    b.userData.length = head.distanceTo(tail);
    b.userData.head = head.clone();
    b.userData.tail = tail.clone();
    bones.push(b);
    byName[s.name] = b;
  }
  return { bones, byName, restObjQuat, restObjPos, names: specs.map((s) => s.name) };
}
