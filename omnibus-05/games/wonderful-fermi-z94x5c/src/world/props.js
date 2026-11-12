// Village houses, trees and distant hills. Static geometry merged per material.
import * as THREE from '../../lib/three.module.js';
import { terrainHeight, VILLAGE, MEADOW_C, RUN_X, LOOP_CENTER } from './layout.js';
import { makeRoads, makeRiver } from './terrain.js';
import { rng, fbm2 } from '../core/math.js';
import { GLSL_NOISE, LAYER_REFLECT } from '../core/env.js';

function pushBox(P, C, cx, cy, cz, w, h, d, rotY, col, skipBottom = true) {
  const hw = w / 2, hd = d / 2;
  const cs = Math.cos(rotY), sn = Math.sin(rotY);
  const tr = (x, y, z) => [cx + x * cs + z * sn, cy + y, cz - x * sn + z * cs];
  const faces = [
    [[-hw, 0, hd], [hw, 0, hd], [hw, h, hd], [-hw, h, hd]],
    [[hw, 0, -hd], [-hw, 0, -hd], [-hw, h, -hd], [hw, h, -hd]],
    [[hw, 0, hd], [hw, 0, -hd], [hw, h, -hd], [hw, h, hd]],
    [[-hw, 0, -hd], [-hw, 0, hd], [-hw, h, hd], [-hw, h, -hd]],
    [[-hw, h, hd], [hw, h, hd], [hw, h, -hd], [-hw, h, -hd]],
  ];
  for (const f of faces) {
    const v = f.map((p) => tr(...p));
    P.push(...v[0], ...v[1], ...v[2], ...v[0], ...v[2], ...v[3]);
    for (let i = 0; i < 6; i++) C.push(...col);
  }
}

function pushRoof(P, C, cx, cy, cz, w, d, h, over, rotY, col, gableCol) {
  const hw = w / 2 + over, hd = d / 2 + over;
  const cs = Math.cos(rotY), sn = Math.sin(rotY);
  const tr = (x, y, z) => [cx + x * cs + z * sn, cy + y, cz - x * sn + z * cs];
  // ridge along x
  const A = tr(-hw, 0, hd), B = tr(hw, 0, hd), Cc = tr(hw, 0, -hd), D = tr(-hw, 0, -hd);
  const R1 = tr(-hw, h, 0), R2 = tr(hw, h, 0);
  const tri = (a, b, c, cl) => {
    P.push(...a, ...b, ...c);
    for (let i = 0; i < 3; i++) C.push(...cl);
  };
  tri(A, B, R2, col);
  tri(A, R2, R1, col);
  tri(Cc, D, R1, col);
  tri(Cc, R1, R2, col);
  const g1 = tr(-w / 2, 0, d / 2), g2 = tr(-w / 2, 0, -d / 2), g3 = tr(-w / 2, h * 0.95, 0);
  const g4 = tr(w / 2, 0, -d / 2), g5 = tr(w / 2, 0, d / 2), g6 = tr(w / 2, h * 0.95, 0);
  tri(g2, g1, g3, gableCol);
  tri(g4, g6, g5, gableCol);
}

export function buildVillage() {
  const r = rng(31);
  const P = [], C = [];
  const wallCols = [[0.95, 0.92, 0.86], [0.97, 0.94, 0.88], [0.93, 0.88, 0.78], [0.9, 0.86, 0.8], [0.96, 0.9, 0.86]];
  const roofCols = [[0.72, 0.33, 0.24], [0.62, 0.28, 0.22], [0.36, 0.42, 0.52], [0.45, 0.3, 0.28], [0.8, 0.45, 0.3], [0.33, 0.45, 0.38]];
  const win = [0.22, 0.28, 0.36];
  const houses = [];
  const roads = makeRoads();
  const place = (x, z, rotY, big = 1) => {
    for (const h of houses) if (Math.hypot(h[0] - x, h[1] - z) < 13 * big) return;
    houses.push([x, z]);
    const y = terrainHeight(x, z) - 0.2;
    const w = (6 + r() * 4) * big, d = (5 + r() * 3) * big, hgt = (3 + r() * 2.2) * big;
    const wc = wallCols[Math.floor(r() * wallCols.length)];
    const rc = roofCols[Math.floor(r() * roofCols.length)];
    pushBox(P, C, x, y, z, w, hgt, d, rotY, wc);
    pushRoof(P, C, x, y + hgt, z, w, d, 2 + r() * 1.6, 0.45, rotY, rc, wc);
    // windows and door as thin dark boxes on the long faces
    const cs = Math.cos(rotY), sn = Math.sin(rotY);
    const nwin = Math.max(2, Math.floor(w / 2.4));
    for (let i = 0; i < nwin; i++) {
      const lx = -w / 2 + (i + 0.5) * (w / nwin);
      for (const side of [1, -1]) {
        const lz = (d / 2 + 0.03) * side;
        pushBox(P, C, x + lx * cs + lz * sn, y + hgt * 0.45, z - lx * sn + lz * cs, 0.9, 1.0, 0.06, rotY, win);
      }
    }
    if (r() < 0.6) {
      const lx = w * 0.25, lz = -d * 0.15;
      pushBox(P, C, x + lx * cs + lz * sn, y + hgt + 0.6, z - lx * sn + lz * cs, 0.6, 2.2, 0.6, rotY, [0.55, 0.38, 0.32]);
    }
  };
  // houses along the main road near the village
  for (const rd of roads.slice(0, 3)) {
    for (let i = 0; i < rd.pts.length - 1; i++) {
      const [x0, z0] = rd.pts[i], [x1, z1] = rd.pts[i + 1];
      const L = Math.hypot(x1 - x0, z1 - z0);
      const tx = (x1 - x0) / L, tz = (z1 - z0) / L;
      for (let s = 0; s < L; s += 15 + r() * 8) {
        const x = x0 + tx * s, z = z0 + tz * s;
        if (Math.hypot(x - VILLAGE.x, z - VILLAGE.y) > 140) continue;
        const side = r() < 0.5 ? 1 : -1;
        const off = 10 + r() * 6;
        const hx = x - tz * off * side, hz = z + tx * off * side;
        if (Math.hypot(hx - MEADOW_C.x, hz - MEADOW_C.y) < 70) continue;
        place(hx, hz, Math.atan2(tx, tz) + (r() - 0.5) * 0.15);
      }
    }
  }
  // farmhouses
  for (let i = 0; i < 26; i++) {
    const a = r() * Math.PI * 2, d = 160 + r() * 520;
    const x = LOOP_CENTER.x + Math.cos(a) * d, z = LOOP_CENTER.z + Math.sin(a) * d;
    if (Math.hypot(x - MEADOW_C.x, z - MEADOW_C.y) < 90) continue;
    place(x, z, r() * Math.PI, 1.1);
    if (r() < 0.6) place(x + 14, z + 6, r() * Math.PI, 1.3); // barn
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(C, 3));
  g.computeVertexNormals();
  const m = new THREE.MeshLambertMaterial({ vertexColors: true });
  const mesh = new THREE.Mesh(g, m);
  mesh.name = 'village';
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  mesh.layers.enable(LAYER_REFLECT);
  return { mesh, houses };
}

function treeGeometry(r, detail = 3) {
  // a few noisy blobs for the canopy and a trunk
  const parts = [];
  const trunk = new THREE.CylinderGeometry(0.18, 0.28, 2.4, detail > 1 ? 7 : 5, 1, true).translate(0, 1.2, 0);
  const tc = new Float32Array(trunk.attributes.position.count * 3);
  for (let i = 0; i < tc.length; i += 3) tc.set([0.32, 0.24, 0.17], i);
  trunk.setAttribute('color', new THREE.BufferAttribute(tc, 3));
  parts.push(trunk);
  const nb = 5;
  for (let b = 0; b < nb; b++) {
    const s = 1.3 + r() * 0.9;
    const geo = new THREE.IcosahedronGeometry(s, detail);
    const ox = (r() - 0.5) * 1.8, oy = 2.8 + r() * 1.6, oz = (r() - 0.5) * 1.8;
    const pos = geo.attributes.position;
    const col = new Float32Array(pos.count * 3);
    const nrm = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      const n = fbm2(x * 1.1 + b * 7, z * 1.1 + y * 0.7, 3);
      const k = 0.88 + n * 0.28;
      pos.setXYZ(i, x * k + ox, y * k * 0.9 + oy, z * k + oz);
      // soft round normals from the whole crown centre (reads as foliage mass)
      const nx = x * k + ox, ny = (y * k * 0.9 + oy) - 3.6, nz = z * k + oz;
      const l = Math.hypot(nx, ny, nz) || 1;
      nrm.set([nx / l, ny / l + 0.15, nz / l], i * 3);
      const shade = 0.75 + 0.25 * (y / s);
      col.set([0.2 * shade, 0.36 * shade, 0.12 * shade], i * 3);
    }
    geo.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.deleteAttribute('uv');
    parts.push(geo.toNonIndexed());
  }
  // merge
  const flat = parts.map((p) => (p.index ? p.toNonIndexed() : p));
  let n = 0;
  for (const p of flat) n += p.attributes.position.count;
  const P = new Float32Array(n * 3), C = new Float32Array(n * 3), N = new Float32Array(n * 3);
  let o = 0;
  for (const p of flat) {
    P.set(p.attributes.position.array, o * 3);
    C.set(p.attributes.color.array, o * 3);
    N.set(p.attributes.normal.array, o * 3);
    o += p.attributes.position.count;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(P, 3));
  g.setAttribute('color', new THREE.BufferAttribute(C, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(N, 3));
  return g;
}

export function buildTrees() {
  const r = rng(53);
  // near trees (around the meadow) get round crowns; far ones are simpler
  const seeds = [r(), r(), r()].map((x) => Math.floor(x * 1e6));
  const lods = [2, 1, 0].map((det) => seeds.map((sd) => treeGeometry(rng(sd), det)));
  const spots = [];
  const ok = (x, z) => {
    if (Math.abs(x - RUN_X) < 14 && z > -70 && z < 70) return false;
    const dm = Math.hypot(x - MEADOW_C.x, (z - MEADOW_C.y) * 0.8);
    if (dm < 38) return false;
    // keep the landing approach open
    if (Math.hypot(x + 20, z + 30) < 26) return false;
    return true;
  };
  // woods
  const woods = [[-60, 80, 40], [70, -40, 35], [-230, -40, 60], [-120, 200, 50], [40, 170, 45], [-320, 240, 70], [150, 60, 60], [-60, -140, 50], [-420, 20, 80], [260, -150, 70]];
  for (const [cx, cz, rad] of woods)
    for (let i = 0; i < rad * 1.4; i++) {
      const a = r() * Math.PI * 2, d = Math.sqrt(r()) * rad;
      const x = cx + Math.cos(a) * d, z = cz + Math.sin(a) * d;
      if (ok(x, z)) spots.push([x, z, 0.8 + r() * 0.7]);
    }
  // along the river
  const riv = makeRiver().pts;
  for (let i = 0; i < riv.length - 1; i++)
    for (let s = 0; s < 1; s += 0.12) {
      const x = riv[i][0] + (riv[i + 1][0] - riv[i][0]) * s + (r() - 0.5) * 30;
      const z = riv[i][1] + (riv[i + 1][1] - riv[i][1]) * s + (r() - 0.5) * 30;
      if (ok(x, z)) spots.push([x, z, 0.9 + r() * 0.6]);
    }
  // meadow edge companions
  const lone = [[-24, 14, 1.6], [18, 34, 1.3], [-30, 46, 1.2], [22, -22, 1.4], [-36, -12, 1.5], [26, 62, 1.2], [-40, 70, 1.3], [-48, -40, 1.4]];
  for (const t of lone) spots.push(t);
  // scattered
  for (let i = 0; i < 260; i++) {
    const a = r() * Math.PI * 2, d = 60 + r() * 700;
    const x = LOOP_CENTER.x + Math.cos(a) * d, z = LOOP_CENTER.z + Math.sin(a) * d;
    if (ok(x, z)) spots.push([x, z, 0.7 + r() * 0.8]);
  }
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vLP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvLP = position;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vLP;\n' + GLSL_NOISE)
      .replace('#include <color_fragment>', '#include <color_fragment>\n diffuseColor.rgb *= 0.75 + 0.5 * vnoise3(vLP * 3.0);');
  };
  const group = new THREE.Group();
  group.name = 'trees';
  const per = [[], [], [], [], [], [], [], [], []];
  spots.forEach((s, i) => {
    const d = Math.hypot(s[0] - MEADOW_C.x, s[1] - MEADOW_C.y);
    const lod = d < 70 ? 0 : d < 160 ? 1 : 2;
    per[(i % 3) + lod * 3].push(s);
  });
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), p = new THREE.Vector3();
  per.forEach((list, k) => {
    if (!list.length) return;
    const im = new THREE.InstancedMesh(lods[Math.floor(k / 3)][k % 3], mat, list.length);
    list.forEach(([x, z, s], i) => {
      p.set(x, terrainHeight(x, z) - 0.1, z);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), r() * Math.PI * 2);
      sc.set(s, s * (0.9 + r() * 0.3), s);
      m4.compose(p, q, sc);
      im.setMatrixAt(i, m4);
      im.setColorAt(i, new THREE.Color().setHSL(0.24 + (r() - 0.5) * 0.06, 0.45, 0.55 + r() * 0.2));
    });
    im.castShadow = false;
    im.receiveShadow = true;
    if (k < 3) im.layers.enable(LAYER_REFLECT);
    group.add(im);
  });
  return group;
}
