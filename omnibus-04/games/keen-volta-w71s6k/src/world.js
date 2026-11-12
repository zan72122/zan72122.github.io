// Static landscape: meadow, ditch, fork, terraces, valley, mesa, chasm, far
// shore and distant scenery. Everything the player can move lives elsewhere.
import * as THREE from 'three';
import { L, DOM } from './layout.js';
import { noiseTex, woodTex, skyTex } from './textures.js';
import { makeRng } from './util.js';

export const MATS = {};
// Cliffs sink into the haze: below the plateaus, surfaces blend toward the haze colour with depth.
export function heightHaze(mat, top = -7, bottom = -48) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.hazeColor = { value: new THREE.Color(0xe4dccb) };
    sh.vertexShader = 'varying float vHazeY;\n' + sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\n  vHazeY = (modelMatrix * vec4(transformed, 1.0)).y;');
    sh.fragmentShader = 'uniform vec3 hazeColor;\nvarying float vHazeY;\n' + sh.fragmentShader.replace('#include <fog_fragment>',
      `gl_FragColor.rgb = mix(gl_FragColor.rgb, hazeColor, smoothstep(${top.toFixed(1)}, ${bottom.toFixed(1)}, vHazeY) * 0.88);\n#include <fog_fragment>`);
  };
  mat.customProgramCacheKey = () => 'haze' + top + bottom;
  return mat;
}
function mats() {
  if (MATS.grass) return MATS;
  const std = (map, color = 0xffffff, rough = 0.95) => heightHaze(new THREE.MeshStandardMaterial({ map, color, roughness: rough }));
  MATS.grass = std(noiseTex({ base: '#a8a862', seed: 3, spots: [{ n: 26, r: [18, 40], c: 'rgba(130,138,70,0.28)' }, { n: 700, r: [1, 2.5], c: 'rgba(95,110,50,0.5)' }, { n: 500, r: [1, 2], c: 'rgba(220,210,140,0.45)' }] }));
  MATS.earth = std(noiseTex({ base: '#b39a7c', seed: 5, streaks: 40, spots: [{ n: 20, r: [16, 40], c: 'rgba(150,120,90,0.25)' }, { n: 600, r: [1, 2.5], c: 'rgba(90,70,50,0.35)' }] }));
  MATS.stone = std(noiseTex({ base: '#bfae94', seed: 7, cracks: 8, spots: [{ n: 24, r: [14, 36], c: 'rgba(150,130,105,0.3)' }, { n: 500, r: [1, 2.5], c: 'rgba(110,95,75,0.35)' }, { n: 300, r: [1, 2], c: 'rgba(235,225,205,0.4)' }] }));
  MATS.stoneTop = std(noiseTex({ base: '#cbbda3', seed: 8, spots: [{ n: 24, r: [14, 36], c: 'rgba(170,150,120,0.28)' }, { n: 500, r: [1, 2.5], c: 'rgba(120,105,85,0.3)' }] }));
  MATS.rock = std(noiseTex({ base: '#a08d77', seed: 9, cracks: 12, streaks: 30, spots: [{ n: 24, r: [16, 40], c: 'rgba(120,100,80,0.3)' }, { n: 500, r: [1, 2.5], c: 'rgba(80,65,50,0.3)' }] }));
  MATS.pebbles = std(noiseTex({ base: '#a8987e', seed: 11, spots: [{ n: 260, r: [1, 4], c: 'rgba(80,70,60,0.55)' }, { n: 200, r: [1, 3], c: 'rgba(235,225,205,0.6)' }] }));
  MATS.stoneSolid = new THREE.MeshStandardMaterial({ map: MATS.stone.map, roughness: 0.95 });
  MATS.rockSolid = new THREE.MeshStandardMaterial({ map: MATS.rock.map, roughness: 0.95 });
  MATS.wood = new THREE.MeshStandardMaterial({ map: woodTex(3), roughness: 0.85 });
  MATS.darkWood = new THREE.MeshStandardMaterial({ color: 0x5b3b22, roughness: 0.9 });
  MATS.iron = new THREE.MeshStandardMaterial({ color: 0x4a4744, roughness: 0.55, metalness: 0.6 });
  MATS.rope = new THREE.MeshStandardMaterial({ color: 0xcdb58a, roughness: 1 });
  MATS.ivory = new THREE.MeshStandardMaterial({ color: 0xefe5ce, roughness: 0.5 });
  MATS.leaf = new THREE.MeshStandardMaterial({ color: 0x7e8f47, roughness: 0.95, flatShading: true });
  MATS.tuft = new THREE.MeshStandardMaterial({ color: 0x7d8745, roughness: 1, flatShading: true });
  MATS.leafWarm = new THREE.MeshStandardMaterial({ color: 0xb49a4a, roughness: 0.95, flatShading: true });
  MATS.far = new THREE.MeshStandardMaterial({ color: 0xb9b3a3, roughness: 1, flatShading: true });
  return MATS;
}

// Axis-aligned block with world-scaled UVs so textures keep a constant scale.
export function block(x0, x1, y0, y1, z0, z1, top, side, tile = 4) {
  const w = x1 - x0, h = y1 - y0, d = z1 - z0;
  const g = new THREE.BoxGeometry(w, h, d);
  const pos = g.attributes.position, nor = g.attributes.normal, uv = g.attributes.uv;
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, cz = (z0 + z1) / 2;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i) + cx, y = pos.getY(i) + cy, z = pos.getZ(i) + cz;
    const nx = Math.abs(nor.getX(i)), ny = Math.abs(nor.getY(i));
    if (nx > 0.5) uv.setXY(i, z / tile, y / tile); else if (ny > 0.5) uv.setXY(i, x / tile, z / tile); else uv.setXY(i, x / tile, y / tile);
  }
  const m = new THREE.Mesh(g, [side, side, top, side, side, side]);
  m.position.set(cx, cy, cz); m.castShadow = true; m.receiveShadow = true;
  return m;
}

export function buildWorld(scene, rng = makeRng(1)) {
  const M = mats();
  const g = new THREE.Group(); g.name = 'world'; scene.add(g);
  scene.background = skyTex();
  scene.fog = new THREE.FogExp2(0xe4dccb, 0.0062);

  const add = (m) => { g.add(m); return m; };
  // Area 1: meadow + ditch
  add(block(L.meadowX0, L.ditchX0, -12, 0, -10, 11, M.grass, M.earth));
  add(block(L.ditchX0, L.ditchX1, -12, L.ditchFloor, -10, 11, M.pebbles, M.earth));
  // Area 2: fork ground (front part runs to the valley cliff)
  add(block(L.ditchX1, L.forkX1, L.lipY, 0, -1.0, 11, M.grass, M.earth));          // rock lip over the valley
  add(block(L.ditchX1, L.undercutX, -12, L.lipY, -1.0, 11, M.rock, M.rock));         // undercut behind the lip
  add(block(L.ditchX1, L.stairX0, -10, 0, -10, -1.0, M.grass, M.earth));
  add(block(L.stairX0, L.forkX1, -10, 0, -10, L.upZ0, M.grass, M.earth));
  // stairs up to the upper terrace
  const nSteps = 6;
  for (let i = 0; i < nSteps; i++) {
    const x0 = L.stairX0 + (i * (L.stairX1 - L.stairX0)) / nSteps;
    add(block(x0, L.stairX1, 0, ((i + 1) * L.upY) / nSteps, L.upZ0, L.upZ1, M.stoneTop, M.stone, 2));
  }
  // valley floor (route B), upper terraces stand on it (route A)
  add(block(L.undercutX, L.cd.x0, -12, L.valleyY, -1.0, 11, M.pebbles, M.rock));
  add(block(L.forkX1, L.cd.x0, -10, L.valleyY, -10, -1.0, M.pebbles, M.rock));
  add(block(L.upperA[0], L.upperA[1], L.valleyY, L.upY, L.upZ0, L.upZ1, M.stoneTop, M.stone));
  add(block(L.upperB[0], L.upperB[1], L.valleyY, L.upY, L.upZ0, L.upZ1, M.stoneTop, M.stone));
  add(block(L.forkX1, L.cd.x0, L.valleyY, L.upY - 0.6, -10, L.upZ0, M.stone, M.rock));
  // rock spire + round boulder in the upper gap (the seesaw fulcrum)
  const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.6, L.boulder.y - L.valleyY, 9), M.rockSolid);
  sp.position.set(L.boulder.x, (L.boulder.y + L.valleyY) / 2 - 0.3, L.upZ); sp.castShadow = sp.receiveShadow = true; add(sp);
  const bo = new THREE.Mesh(new THREE.SphereGeometry(L.boulder.r, 20, 14), M.stoneSolid);
  bo.position.set(L.boulder.x, L.boulder.y, L.upZ); bo.castShadow = bo.receiveShadow = true; bo.scale.set(1, 1, 1.5); add(bo);
  // the mesa under the colossal domino, with its stone roller at the seam
  add(block(L.cd.x0 - 0.01, L.seamX, -60, 0, -12.5, 26, M.stoneTop, M.rock, 6));
  const roller = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 23, 20), M.iron);
  roller.rotation.x = Math.PI / 2; roller.position.set(L.seamX, -0.62, 0); roller.castShadow = true; add(roller);
  // far shore (lower) + distant cliff
  // The far plain: a grassy shelf beyond the chasm where the town will come to rest.
  // Everything below the plateaus is haze; the plain's cliffs dissolve into it.
  const PX0 = L.shoreX0, PX1 = L.shoreX0 + 190, PZ0 = -110, PZ1 = 40;
  const plainGeo = new THREE.PlaneGeometry(PX1 - PX0, PZ1 - PZ0, 40, 40);
  const puv = plainGeo.attributes.uv; for (let i = 0; i < puv.count; i++) puv.setXY(i, (puv.getX(i) * (PX1 - PX0)) / 6, (puv.getY(i) * (PZ1 - PZ0)) / 6);
  const pp = plainGeo.attributes.position, pcol = [], cA = new THREE.Color(0xe9ecd2), cB = new THREE.Color(0xc9c79a), cC = new THREE.Color(0xf2dcb4), tmpc = new THREE.Color();
  for (let i = 0; i < pp.count; i++) {
    const x = pp.getX(i), y = pp.getY(i);
    const n1 = Math.sin(x * 0.021 + Math.sin(y * 0.013) * 2) * Math.cos(y * 0.017 - x * 0.006), n2 = Math.sin(x * 0.047 + y * 0.039 + 1.7);
    tmpc.copy(cA).lerp(cB, 0.5 + 0.5 * n1).lerp(cC, Math.max(0, n2) * 0.45); pcol.push(tmpc.r, tmpc.g, tmpc.b);
  }
  plainGeo.setAttribute('color', new THREE.Float32BufferAttribute(pcol, 3));
  const lowMat = new THREE.MeshStandardMaterial({ map: M.grass.map, vertexColors: true, roughness: 1 });
  const plain = new THREE.Mesh(plainGeo, lowMat); plain.rotation.x = -Math.PI / 2; plain.position.set((PX0 + PX1) / 2, L.shoreY, (PZ0 + PZ1) / 2); plain.receiveShadow = true; add(plain);
  add(block(PX0, PX1, -80, L.shoreY - 0.05, PZ0, PZ1, M.grass, M.rock, 8));   // its cliffs sink into the haze
  // copses on the lowland give the scale away (instanced, cheap)
  {
    const trunkG = new THREE.CylinderGeometry(0.12, 0.18, 1.8, 5), crownG = new THREE.IcosahedronGeometry(1.3, 0);
    const N = 260, trunks = new THREE.InstancedMesh(trunkG, M.darkWood, N), crowns = new THREE.InstancedMesh(crownG, M.leaf, N);
    const crownsWarm = new THREE.InstancedMesh(crownG, M.leafWarm, N);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), pos = new THREE.Vector3();
    let n = 0, nw = 0; const r2 = makeRng(31);
    const clusters = [[64, 30], [95, 14], [120, -40], [72, -62], [150, 22], [200, -80], [215, -10], [110, -95], [170, -60], [62, -96]];
    for (const [cx, cz] of clusters) {
      const k = 14 + Math.floor(r2() * 14);
      for (let j = 0; j < k && n < N; j++) {
        const x = cx + (r2() - 0.5) * 30, z = cz + (r2() - 0.5) * 26;
        if (x > 12 && x < 38 && z > -14 && z < 28) continue;                 // not under the mesa
        if (x > 44 && x < 78 && z > -16 && z < 8) continue;                   // keep the landing field clear
        if (x < PX0 + 1 || x > PX1 - 1 || z < PZ0 + 1 || z > PZ1 - 2) continue;
        const s0 = 0.8 + r2() * 0.9, gy = L.shoreY;
        sc.set(s0, s0 * (0.9 + r2() * 0.4), s0); q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), r2() * 6);
        pos.set(x, gy + 0.9 * s0, z); m4.compose(pos, q, sc); trunks.setMatrixAt(n, m4);
        pos.set(x, gy + 2.4 * s0, z); m4.compose(pos, q, sc);
        if (r2() < 0.3) crownsWarm.setMatrixAt(nw++, m4); else crowns.setMatrixAt(n - nw, m4);
        n++;
      }
    }
    trunks.count = n; crowns.count = n - nw; crownsWarm.count = nw;
    for (const im of [trunks, crowns, crownsWarm]) { im.castShadow = false; im.receiveShadow = true; add(im); }
  }
  // chasm mist
  // Distant row of colossal dominoes standing in the haze (the larger fiction):
  // aerial perspective is painted in (cool, pale), so they read as very far away.
  const far = new THREE.Group(); add(far);
  const farRng = makeRng(77);
  const farMat = (k) => new THREE.MeshBasicMaterial({ color: new THREE.Color(0xc9d0cf).lerp(new THREE.Color(0xe4dccb), k), fog: false });
  const pipMat = (k) => new THREE.MeshBasicMaterial({ color: new THREE.Color(0x9aa6ab).lerp(new THREE.Color(0xe4dccb), k), fog: false });
  // a row standing across the view from the far shore (seen at the very end)
  const view = new THREE.Vector3(0.76, 0, -0.65).normalize(), side = new THREE.Vector3(0.65, 0, 0.76);
  const C = new THREE.Vector3(70, -70, 0).addScaledVector(view, 640);
  for (let i = 0; i < 7; i++) {
    const H = 150, W = 72, T = 16, k = 0.62 + Math.abs(i - 3) * 0.05;
    const d = new THREE.Group();
    // the lower part melts into the haze (vertex alpha), so they rise out of mist from any viewpoint
    const bg = new THREE.BoxGeometry(T, H, W, 1, 10, 1), bp = bg.attributes.position, bc = [], base = farMat(k).color;
    for (let j = 0; j < bp.count; j++) { const u = (bp.getY(j) + H / 2) / H; const a = Math.min(1, Math.max(0, (u - 0.08) / 0.42)); bc.push(base.r, base.g, base.b, a * a * (3 - 2 * a)); }
    bg.setAttribute('color', new THREE.Float32BufferAttribute(bc, 4));
    const body = new THREE.Mesh(bg, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, fog: false }));
    body.renderOrder = -2; d.add(body);
    const n = [6, 3, 5, 1, 4, 2, 6][i], lay = { 1: [[0.5, 0.5]], 2: [[0.28, 0.28], [0.72, 0.72]], 3: [[0.25, 0.25], [0.5, 0.5], [0.75, 0.75]], 4: [[0.28, 0.28], [0.72, 0.28], [0.28, 0.72], [0.72, 0.72]], 5: [[0.25, 0.25], [0.75, 0.25], [0.5, 0.5], [0.25, 0.75], [0.75, 0.75]], 6: [[0.28, 0.2], [0.72, 0.2], [0.28, 0.5], [0.72, 0.5], [0.28, 0.8], [0.72, 0.8]] }[n];
    for (const [u, v] of lay) { const p = new THREE.Mesh(new THREE.CircleGeometry(W * 0.065, 16), pipMat(k)); p.position.set(-T / 2 - 0.3, H / 2 - v * H * 0.5, (u - 0.5) * W * 0.8); p.rotation.y = -Math.PI / 2; d.add(p); }
    const bar = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.8, H * 0.012), pipMat(k)); bar.position.set(-T / 2 - 0.2, 0, 0); bar.rotation.y = -Math.PI / 2; d.add(bar);
    d.position.copy(C).addScaledVector(side, (i - 3) * 150).addScaledVector(view, Math.abs(i - 3) * 60).add(new THREE.Vector3(0, H / 2, 0));
    d.rotation.y = Math.atan2(-view.z, view.x) + (i - 3) * 0.05;   // broad pip faces toward the shore
    far.add(d);
  }
  // trees and tufts (scale cues)
  const tree = (x, y, z, s = 1, warm = false) => {
    const t = new THREE.Group();
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.07 * s, 0.11 * s, 1.1 * s, 6), M.darkWood); trunk.position.y = 0.55 * s; t.add(trunk);
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(0.75 * s, 0), warm ? M.leafWarm : M.leaf); crown.position.y = 1.45 * s; crown.scale.y = 1.15; t.add(crown);
    t.traverse((o) => { o.castShadow = true; o.receiveShadow = true; }); t.position.set(x, y, z); add(t); return t;
  };
  tree(-15.5, 0, -3.5, 1.3); tree(-19, 0, -5.5, 1.6, true); tree(-12.8, 0, -6.2, 1.1); tree(-23, 0, -2, 1.4);
  tree(0.6, 0, -6.2, 1.0, true); tree(66, L.shoreY, -6, 1.5); tree(71, L.shoreY, -9, 1.9, true); tree(80, L.shoreY, -4, 1.3);
  const tuft = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.075, 0), MATS.tuft, 160);
  const mtx = new THREE.Matrix4();
  for (let i = 0; i < 160; i++) {
    const zone = i % 3; let x, y = 0, z = -6 + rng() * 10.5;
    if (zone === 0) x = -25 + rng() * 19.5; else if (zone === 1) x = -2.5 + rng() * 4; else { x = 46 + rng() * 40; y = L.shoreY; }
    if (zone === 1 && z < -1) z = 0.5 + rng() * 4;
    mtx.makeRotationY(rng() * 3).scale(new THREE.Vector3(1 + rng(), 0.45 + rng() * 0.3, 1 + rng())).setPosition(x, y + 0.03, z); tuft.setMatrixAt(i, mtx);
  }
  tuft.receiveShadow = true; add(tuft);
  // pebbles in the ditch
  for (let i = 0; i < 16; i++) {
    const p = new THREE.Mesh(new THREE.DodecahedronGeometry(0.12 + rng() * 0.18, 0), M.stoneSolid);
    p.position.set(L.ditchX0 + 0.2 + rng() * 1.9, L.ditchFloor + 0.08, -3 + rng() * 6); p.castShadow = true; add(p);
  }
  return { group: g };
}

export function makeSun(scene) {
  const hemi = new THREE.HemisphereLight(0xdfe8ef, 0xa08662, 1.25); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff1dc, 2.4);
  sun.castShadow = true;
  const small = Math.max(window.screen?.width || 1024, window.screen?.height || 1024) < 1000;
  sun.shadow.mapSize.set(small ? 1024 : 2048, small ? 1024 : 2048);
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
  scene.add(sun); scene.add(sun.target);
  const dir = new THREE.Vector3(-0.55, 1.0, 0.62).normalize();
  // keep the shadow frustum wrapped around the current shot
  sun.follow = (focus, size) => {
    const s = Math.max(12, size * 0.75);
    const c = sun.shadow.camera; c.left = -s; c.right = s; c.top = s; c.bottom = -s; c.near = 1; c.far = 260; c.updateProjectionMatrix();
    sun.target.position.copy(focus); sun.position.copy(focus).addScaledVector(dir, 120);
  };
  return { sun, hemi };
}

// Static ground height at (x, z) in world space (town surface pre-tilt).
export function terrainHeight(x, z) {
  if (x < L.ditchX0) return 0;
  if (x < L.ditchX1) return L.ditchFloor;
  const inUpper = z >= L.upZ0 - 0.2 && z <= L.upZ1 + 0.2;
  if (x < L.stairX0) return 0;
  if (x < L.forkX1) {
    if (inUpper) return Math.min(6, Math.ceil(((x - L.stairX0) / (L.stairX1 - L.stairX0)) * 6)) * (L.upY / 6);
    return 0;
  }
  if (x < L.cd.x0) {
    if (inUpper) {
      if (x < L.upperGap[0] || x > L.upperGap[1]) return L.upY;
      const dx = x - L.boulder.x;
      if (Math.abs(dx) < L.boulder.r) return L.boulder.y + Math.sqrt(L.boulder.r * L.boulder.r - dx * dx);
      if (Math.abs(dx) < 0.6) return L.boulder.y - 0.4;
      return L.valleyY;
    }
    if (z < L.upZ0) return L.upY - 0.6;
    return L.valleyY;
  }
  if (x <= L.cd.x1 && z >= L.cd.z0 && z <= L.cd.z1) {
    const r = 0.6; // bevel of the colossal slab's edge
    if (x < L.cd.x0 + r) { const d = L.cd.x0 + r - x; return L.cd.y1 - r + Math.sqrt(Math.max(0, r * r - d * d)); }
    return L.cd.y1;
  }
  if (x < L.seamX) return 0;
  if (x < L.shoreX0) return -40;
  return L.shoreY;
}
