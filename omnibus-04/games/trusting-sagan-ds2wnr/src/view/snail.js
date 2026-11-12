// 天井を逆さに歩く全長4mのカタツムリ。体は背骨に沿って毎フレーム変形し、殻は重みで下へ垂れる。
import * as THREE from 'three';
import { SNAIL, ROOTS } from '../core/layout.js';
import { snailSpine, loopPoint, LOOP_PERIMETER } from '../core/snailpath.js';
import { skinMaps, shellMaps, stripTexture } from './textures.js';
import { createSkinMaterial, createShellMaterial } from './materials.js';

const CEIL = 8.0;
const LEN = SNAIL.length;
const NS = 96; // 体の長さ方向
const EXT = 0.75; // 触角のため頭の先へ背骨を延長
const SPINE_N = 160;

const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const bump = (x, c, w) => Math.exp(-((x - c) / w) * ((x - c) / w));
export const MANTLE_S = 1.95;

function headRound(s) {
  return s > 3.55 ? Math.sqrt(Math.max(0, 1 - Math.pow((s - 3.55) / 0.47, 2))) : 1;
}
function tailRound(s) {
  return Math.pow(smooth(0, 1.05, s), 0.75);
}
export function soleHalfWidth(s) {
  let w = 0.37 * tailRound(s) + 0.09 * bump(s, 2.0, 0.75); // 殻の重みで接触面が広がる
  return Math.max(0.006, w * (0.25 + 0.75 * headRound(s)));
}
export function bodyHeight(s) {
  let h = 0.5 * tailRound(s) + 0.36 * bump(s, MANTLE_S, 0.42); // 殻に引かれて伸びた胴
  h *= 0.15 + 0.85 * headRound(s);
  return Math.max(0.006, h);
}

// 断面の型(閉じた輪): [横 w, 下向き h, 薄さ, 色調]
const RING = (() => {
  const r = [];
  r.push([0.88, 0.0, 0.5, 0]);
  r.push([1.05, 0.018, 1.0, 1]);
  r.push([1.03, 0.085, 0.85, 1]);
  for (let k = 1; k <= 11; k++) {
    const a = (k / 12) * Math.PI;
    const c = Math.cos(a);
    r.push([0.97 * Math.sign(c) * Math.pow(Math.abs(c), 0.8), 0.1 + 0.9 * Math.sin(a), 0.12, 2]);
  }
  r.push([-1.03, 0.085, 0.85, 1]);
  r.push([-1.05, 0.018, 1.0, 1]);
  r.push([-0.88, 0.0, 0.5, 0]);
  r.push([-0.44, 0.0, 0.3, 0]);
  r.push([0.0, 0.0, 0.3, 0]);
  r.push([0.44, 0.0, 0.3, 0]);
  return r;
})();
const NR = RING.length;

// 触角: 基部(s,w,h), 方向, 長さ, 太さ, 目の有無
const TENTACLES = [
  { base: [3.78, 0.12, 0.2], dir: [0.75, 0.32, 0.58], len: 0.5, r0: 0.042, r1: 0.022, eye: true, ph: 0 },
  { base: [3.78, -0.12, 0.2], dir: [0.75, -0.32, 0.58], len: 0.5, r0: 0.042, r1: 0.022, eye: true, ph: 1.7 },
  { base: [3.96, 0.08, 0.07], dir: [0.9, 0.35, 0.25], len: 0.16, r0: 0.03, r1: 0.016, eye: false, ph: 0.6 },
  { base: [3.96, -0.08, 0.07], dir: [0.9, -0.35, 0.25], len: 0.16, r0: 0.03, r1: 0.016, eye: false, ph: 2.4 },
];
const TN = 12, TR = 8;

function buildBodyGeometry() {
  const tentVerts = TENTACLES.length * (TN + 1) * (TR + 1);
  const bodyVerts = (NS + 1) * (NR + 1);
  const n = bodyVerts + tentVerts;
  const g = new THREE.BufferGeometry();
  const pos = new Float32Array(n * 3);
  const col = new Float32Array(n * 3);
  const uv = new Float32Array(n * 2);
  const thin = new Float32Array(n);
  const idx = [];
  // 体
  const cSole = new THREE.Color(0xc9b99c), cFringe = new THREE.Color(0xd9caa6), cBody = new THREE.Color(0x8f7f6c), cBack = new THREE.Color(0x6a5d50);
  for (let i = 0; i <= NS; i++) {
    const s = (i / NS) * LEN;
    for (let j = 0; j <= NR; j++) {
      const R = RING[j % NR];
      const v = i * (NR + 1) + j;
      uv[v * 2] = s * 1.7;
      uv[v * 2 + 1] = (j / NR) * 2.2;
      thin[v] = R[2] * (s > 3.6 ? 1.4 : 1) * (s < 0.5 ? 1.5 : 1);
      let c;
      if (R[3] === 0) c = cSole.clone();
      else if (R[3] === 1) c = cFringe.clone();
      else {
        const dors = R[1];
        c = cBody.clone().lerp(cBack, Math.pow(dors, 2.5));
        // 頭は少し濃く、殻の付け根は淡く伸びた皮膚
        if (s > 3.4) c.lerp(new THREE.Color(0x5e5348), smooth(3.4, 3.9, s) * 0.6);
        c.lerp(new THREE.Color(0xb7a58a), bump(s, MANTLE_S, 0.35) * Math.pow(dors, 3) * 0.6);
      }
      // 事前計算の陰影: 体の下側(殻の陰)を暗く
      const ao = 0.8 + 0.2 * (1 - bump(s, MANTLE_S, 0.6) * Math.pow(R[1], 2));
      col[v * 3] = c.r * ao; col[v * 3 + 1] = c.g * ao; col[v * 3 + 2] = c.b * ao;
    }
  }
  for (let i = 0; i < NS; i++) {
    for (let j = 0; j < NR; j++) {
      const a = i * (NR + 1) + j, b = a + NR + 1;
      idx.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  // 触角
  let base = bodyVerts;
  const cT = new THREE.Color(0x6f6254), cEye = new THREE.Color(0x1a1612);
  for (const t of TENTACLES) {
    for (let i = 0; i <= TN; i++) {
      for (let j = 0; j <= TR; j++) {
        const v = base + i * (TR + 1) + j;
        const f = i / TN;
        const c = t.eye && f > 0.8 ? cEye : cT;
        col[v * 3] = c.r; col[v * 3 + 1] = c.g; col[v * 3 + 2] = c.b;
        uv[v * 2] = f * 0.6; uv[v * 2 + 1] = j / TR;
        thin[v] = t.eye && f > 0.8 ? 0.2 : 0.9;
      }
    }
    for (let i = 0; i < TN; i++) {
      for (let j = 0; j < TR; j++) {
        const a = base + i * (TR + 1) + j, b = a + TR + 1;
        idx.push(a, a + 1, b, a + 1, b + 1, b);
      }
    }
    base += (TN + 1) * (TR + 1);
  }
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(n * 3), 3).setUsage(THREE.DynamicDrawUsage));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setAttribute('aThin', new THREE.BufferAttribute(thin, 1));
  g.setIndex(idx);
  return g;
}

// 殻: 対数螺旋の管(低い螺塔、約4.3巻)
const SH = { turns: 4.3, W: 2.05, c: 0.6, spire: 0.42, R1: 0.6 };
function buildShellGeometry() {
  const NT = 150, NP = 22;
  const TH = SH.turns * Math.PI * 2;
  const k = Math.log(SH.W) / (Math.PI * 2);
  const pos = [], uv = [], col = [], idx = [];
  for (let i = 0; i <= NT; i++) {
    const f = i / NT;
    const th = TH * Math.pow(f, 0.8);
    const R = SH.R1 * Math.exp(k * (th - TH));
    const lip = smooth(TH - 0.35, TH, th);
    const r = SH.c * R * (1 + 0.1 * lip);
    const cx = -SH.spire * R, cy = R * Math.cos(th), cz = R * Math.sin(th);
    for (let j = 0; j <= NP; j++) {
      const ph = (j / NP) * Math.PI * 2;
      const er = [0, Math.cos(th), Math.sin(th)];
      pos.push(cx + r * Math.sin(ph), cy + r * Math.cos(ph) * er[1], cz + r * Math.cos(ph) * er[2]);
      uv.push(th / TH, j / NP);
      const l = 1 + 0.35 * lip;
      col.push(Math.min(1.3, l), Math.min(1.3, l * 0.98), Math.min(1.3, l * 0.92));
    }
  }
  for (let i = 0; i < NT; i++) for (let j = 0; j < NP; j++) {
    const a = i * (NP + 1) + j, b = a + NP + 1;
    idx.push(a, b, a + 1, a + 1, b, b + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  // 開口の中心と、そこから殻の軸へ向かう向き
  const A = new THREE.Vector3(-SH.spire * SH.R1, SH.R1 * Math.cos(TH), SH.R1 * Math.sin(TH));
  const toAxis = new THREE.Vector3(0, -Math.cos(TH), -Math.sin(TH)).normalize();
  const grow = new THREE.Vector3(-SH.spire * k, -Math.sin(TH) + k * Math.cos(TH), Math.cos(TH) + k * Math.sin(TH)).normalize();
  return { g, A, toAxis, grow };
}

// 天井の粘液の跡(ループと、三か所の付け根へ伸びる古い跡)
function ribbon(points, width, y) {
  const pos = [], uv = [], nor = [], idx = [];
  let acc = 0;
  for (let i = 0; i < points.length; i++) {
    const p = points[i], q = points[Math.min(points.length - 1, i + 1)], o = points[Math.max(0, i - 1)];
    let tx = q.x - o.x, tz = q.z - o.z;
    const l = Math.hypot(tx, tz) || 1;
    tx /= l; tz /= l;
    if (i > 0) acc += Math.hypot(p.x - points[i - 1].x, p.z - points[i - 1].z);
    const w = (typeof width === 'function' ? width(i / (points.length - 1)) : width) / 2;
    pos.push(p.x - tz * w, y, p.z + tx * w, p.x + tz * w, y, p.z - tx * w);
    nor.push(0, -1, 0, 0, -1, 0);
    uv.push(0, acc, 1, acc);
  }
  for (let i = 0; i < points.length - 1; i++) {
    const a = i * 2;
    idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  return g;
}

export function createSnail(scene) {
  const group = new THREE.Group();
  group.name = 'snail';
  const skin = createSkinMaterial(skinMaps());
  const bodyGeo = buildBodyGeometry();
  const body = new THREE.Mesh(bodyGeo, skin);
  body.castShadow = true;
  body.frustumCulled = false;
  group.add(body);

  const shellMat = createShellMaterial(shellMaps());
  shellMat.vertexColors = true;
  const sh = buildShellGeometry();
  const shell = new THREE.Mesh(sh.g, shellMat);
  shell.castShadow = true;
  shell.matrixAutoUpdate = false;
  group.add(shell);

  // 天井の跡
  const strip = stripTexture();
  const trailPts = [];
  for (let k = 0; k <= 220; k++) trailPts.push(loopPoint((k / 220) * LOOP_PERIMETER, {}));
  const branchGeos = [];
  const branches = [];
  for (const r of ROOTS) {
    // 楕円上で最も近い点から付け根へ、緩く曲がる古い跡
    let best = null, bd = Infinity;
    for (let k = 0; k < 200; k++) {
      const p = loopPoint((k / 200) * LOOP_PERIMETER, {});
      const d = Math.hypot(p.x - r.x, p.z - r.z);
      if (d < bd) { bd = d; best = p; }
    }
    const pts = [];
    const mx = (best.x + r.x) / 2 + (r.z - best.z) * 0.18, mz = (best.z + r.z) / 2 - (r.x - best.x) * 0.18;
    for (let k = 0; k <= 30; k++) {
      const t = k / 30;
      pts.push({ x: (1 - t) * (1 - t) * best.x + 2 * (1 - t) * t * mx + t * t * r.x, z: (1 - t) * (1 - t) * best.z + 2 * (1 - t) * t * mz + t * t * r.z });
    }
    branches.push(pts);
    branchGeos.push(ribbon(pts, (t) => 0.5 - 0.15 * t, 7.991));
  }
  const loopGeo = ribbon(trailPts, 0.82, 7.991);
  const trailMat = new THREE.MeshPhysicalMaterial({
    color: 0xd6d3bf, roughness: 0.06, clearcoat: 1, clearcoatRoughness: 0.05, transparent: true, opacity: 0.6,
    alphaMap: strip, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4, envMapIntensity: 1.4,
  });
  const trailGeoAll = [loopGeo, ...branchGeos];
  const trails = new THREE.Group();
  for (const g of trailGeoAll) {
    const m = new THREE.Mesh(g, trailMat);
    m.renderOrder = 1;
    trails.add(m);
  }
  group.add(trails);

  // 天井への接触影(背骨に沿う帯)
  const SHADOW_N = 60;
  const shadowGeo = new THREE.BufferGeometry();
  shadowGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array((SHADOW_N + 1) * 2 * 3), 3).setUsage(THREE.DynamicDrawUsage));
  {
    const uvA = new Float32Array((SHADOW_N + 1) * 4), idx = [];
    for (let i = 0; i <= SHADOW_N; i++) { uvA.set([0, i / SHADOW_N, 1, i / SHADOW_N], i * 4); }
    for (let i = 0; i < SHADOW_N; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    shadowGeo.setAttribute('uv', new THREE.BufferAttribute(uvA, 2));
    shadowGeo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array((SHADOW_N + 1) * 6).map((_, i) => (i % 3 === 1 ? -1 : 0)), 3));
    shadowGeo.setIndex(idx);
  }
  const contact = new THREE.Mesh(shadowGeo, new THREE.MeshBasicMaterial({
    color: 0x1f1b16, transparent: true, opacity: 0.62, alphaMap: strip, depthWrite: false,
    polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2,
  }));
  contact.frustumCulled = false;
  contact.renderOrder = 0;
  group.add(contact);

  scene.add(group);

  const spine = [];
  const tmpM = new THREE.Matrix4(), tmpR = new THREE.Matrix4(), tmpT = new THREE.Matrix4();
  const shellTilt = { a: 0, v: 0 };
  let lastHeadX = null, lastHeadZ = null;

  // 背骨上の任意の s を補間
  const sp = { x: 0, z: 0, tx: 0, tz: 0 };
  function spineAt(s) {
    const f = Math.max(0, Math.min(SPINE_N - 1 - 1e-6, (s / (LEN + EXT)) * (SPINE_N - 1)));
    const i = Math.floor(f), w = f - i;
    const a = spine[i], b = spine[i + 1];
    sp.x = a.x + (b.x - a.x) * w; sp.z = a.z + (b.z - a.z) * w;
    let tx = a.tx + (b.tx - a.tx) * w, tz = a.tz + (b.tz - a.tz) * w;
    const l = Math.hypot(tx, tz) || 1;
    sp.tx = tx / l; sp.tz = tz / l;
    return sp;
  }

  function update(sn, time, dt) {
    snailSpine(sn, SPINE_N, EXT, spine);
    const posA = bodyGeo.attributes.position.array;
    const moving = sn.mode === 'walk' || sn.mode === 'stopping' || sn.mode === 'after' ? 1 : 0.25;
    const turning = sn.mode === 'turn' ? 1 : 0;
    // 体
    for (let i = 0; i <= NS; i++) {
      const s = (i / NS) * LEN;
      const p = spineAt(s);
      const rx = -p.tz, rz = p.tx;
      const ws = soleHalfWidth(s), hb = bodyHeight(s);
      // 足の縁を進む波(尾から頭へ)
      const wave = Math.sin(s * 9.0 - time * (2.2 + 2.5 * turning)) * (0.5 + 0.5 * moving);
      const breathe = 1 + 0.015 * Math.sin(time * 1.3 + s * 0.7);
      for (let j = 0; j <= NR; j++) {
        const R = RING[j % NR];
        let w = R[0] * ws;
        let h = R[1] * hb * breathe;
        if (R[3] === 1) { w *= 1 + 0.035 * wave; h += 0.006 * wave; }
        const v = (i * (NR + 1) + j) * 3;
        posA[v] = p.x + rx * w;
        posA[v + 1] = CEIL - 0.004 - h;
        posA[v + 2] = p.z + rz * w;
      }
    }
    // 触角(ゆっくり揺れる。方向転換中は前を探るように)
    let base = (NS + 1) * (NR + 1);
    for (const t of TENTACLES) {
      const sw = Math.sin(time * 0.8 + t.ph) * 0.12 + turning * Math.sin(time * 1.6 + t.ph) * 0.1;
      const dir = [t.dir[0], t.dir[1] + sw * 0.6, t.dir[2] + Math.cos(time * 0.6 + t.ph) * 0.08];
      const dl = Math.hypot(dir[0], dir[1], dir[2]);
      for (let i = 0; i <= TN; i++) {
        const f = i / TN;
        const bend = f * f * 0.12;
        const ls = t.base[0] + (dir[0] / dl) * t.len * f;
        const lw = t.base[1] + (dir[1] / dl) * t.len * f;
        const lh = t.base[2] + (dir[2] / dl) * t.len * f - bend * (t.eye ? 0.6 : 0.2);
        let r = t.r0 + (t.r1 - t.r0) * f;
        if (t.eye) {
          if (f > 0.78) r = 0.046 * Math.sqrt(Math.max(0, 1 - Math.pow((f - 0.89) / 0.115, 2))) + 0.004;
        } else if (f > 0.85) r *= Math.sqrt(Math.max(0, 1 - Math.pow((f - 0.85) / 0.15, 2)));
        const p = spineAt(ls);
        const rx = -p.tz, rz = p.tx;
        const cx = p.x + rx * lw, cz = p.z + rz * lw, cy = CEIL - lh;
        // 管の断面: 進行方向に垂直な二軸(近似)
        const ax = [p.tx, 0, p.tz];
        const bx = [rx, 0, rz];
        const by = [0, 1, 0];
        for (let j = 0; j <= TR; j++) {
          const a = (j / TR) * Math.PI * 2;
          const ca = Math.cos(a), sa = Math.sin(a);
          const v = (base + i * (TR + 1) + j) * 3;
          posA[v] = cx + r * (bx[0] * ca + by[0] * sa) + ax[0] * 0;
          posA[v + 1] = cy + r * (bx[1] * ca + by[1] * sa);
          posA[v + 2] = cz + r * (bx[2] * ca + by[2] * sa);
        }
      }
      base += (TN + 1) * (TR + 1);
    }
    bodyGeo.attributes.position.needsUpdate = true;
    bodyGeo.computeVertexNormals();
    bodyGeo.computeBoundingSphere();

    // 殻: 付け根の位置から下へ垂れる。動きで少し揺れる(減衰する振り子)
    const m = spineAt(MANTLE_S);
    const head = spine[Math.round(((LEN) / (LEN + EXT)) * (SPINE_N - 1))];
    let accel = 0;
    if (lastHeadX !== null && dt > 0) accel = Math.hypot(head.x - lastHeadX, head.z - lastHeadZ) / dt;
    lastHeadX = head.x; lastHeadZ = head.z;
    const target = -0.05 * Math.min(1, accel * 4) - 0.3 * turning;
    shellTilt.v += ((target - shellTilt.a) * 6 - shellTilt.v * 2.2) * Math.min(dt, 0.05);
    shellTilt.a += shellTilt.v * Math.min(dt, 0.05);
    const T = new THREE.Vector3(m.tx, 0, m.tz);
    const Rw = new THREE.Vector3(-m.tz, 0, m.tx);
    const down = new THREE.Vector3(0, -1, 0);
    // 局所基底(軸へ向かう向き, 巻軸, 外積) → 世界(下, ±右, 外積)。開口は頭側へ
    const ex = new THREE.Vector3(1, 0, 0);
    const lw3 = new THREE.Vector3().crossVectors(ex, sh.toAxis);
    const L = new THREE.Matrix4().makeBasis(sh.toAxis, ex, lw3);
    let best = null;
    for (const sgn of [1, -1]) {
      const EX = Rw.clone().multiplyScalar(sgn);
      const W3 = new THREE.Vector3().crossVectors(EX, down);
      const Wm = new THREE.Matrix4().makeBasis(down, EX, W3);
      const rot = Wm.clone().multiply(L.clone().transpose());
      const g = sh.grow.clone().applyMatrix4(rot);
      if (!best || g.dot(T) > best.d) best = { d: g.dot(T), rot, EX };
    }
    // 開口を少し上(体の方)へ傾け、重みで尾側へ垂れる
    const tilt = -0.62 + shellTilt.a + 0.03 * Math.sin(time * 0.9);
    tmpR.makeRotationAxis(best.EX.clone().normalize(), tilt);
    const apertureY = CEIL - bodyHeight(MANTLE_S) * 0.82;
    tmpT.makeTranslation(m.x - T.x * 0.05, apertureY, m.z - T.z * 0.05);
    tmpM.makeTranslation(-sh.A.x, -sh.A.y, -sh.A.z);
    shell.matrix.copy(tmpT).multiply(tmpR).multiply(best.rot).multiply(tmpM);
    shell.matrixWorldNeedsUpdate = true;

    // 接触影
    const sp2 = shadowGeo.attributes.position.array;
    for (let i = 0; i <= SHADOW_N; i++) {
      const s = -0.15 + (i / SHADOW_N) * (LEN + 0.3);
      const p = spineAt(Math.max(0, Math.min(LEN + EXT, s)));
      const w = (soleHalfWidth(Math.max(0.05, Math.min(LEN - 0.02, s))) * 1.9 + 0.12);
      const rx = -p.tz, rz = p.tx;
      sp2.set([p.x - rx * w, CEIL - 0.0025, p.z - rz * w, p.x + rx * w, CEIL - 0.0025, p.z + rz * w], i * 6);
    }
    shadowGeo.attributes.position.needsUpdate = true;
  }

  return {
    group, body, shell, update,
    headPosition() { const h = spine[Math.round((LEN / (LEN + EXT)) * (SPINE_N - 1))]; return h ? new THREE.Vector3(h.x, CEIL - 0.3, h.z) : new THREE.Vector3(); },
    branches,
  };
}
