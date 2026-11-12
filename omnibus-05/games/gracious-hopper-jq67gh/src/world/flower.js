// 巨大な花: 花びら (つぼみ⇄開花)、花床、がく、雄しべ、雌しべ、蜜
import * as THREE from '../vendor/three.module.min.js';
import { makePetalMaterial, makeLeafMaterial, makeOrganMaterial } from './plantmat.js';
import { makePetalTexture, makeLeafTexture } from './textures.js';
import { clamp, lerp, smooth, smoothstep, Spring, mulberry32 } from '../core/util.js';
import { colorize } from '../core/geom.js';

const DEG = Math.PI / 180;
export const PETAL_PHI = [54, 126, 198, 270, 342].map((d) => d * DEG);
export const VINE_PETAL = 3;      // 家の方を向く花びら (つるに巻かれている)
export const RIM = 1.2;           // 花びらの付け根の半径
export const Y0 = 0.1;            // 付け根の高さ
export const FLOOR_Y = 0.12;
const NX = 20, NV = 36;

// 閉じたつぼみの子午線 (卵形)
function buildMeridian() {
  const a = 1.9, bLow = 2.1, bTop = 2.45;
  const b0 = -Math.acos(RIM / a);
  const yc = Y0 - bLow * Math.sin(b0);
  const pts = [];
  const N = 600;
  for (let i = 0; i <= N; i++) {
    const b = b0 + (Math.PI / 2 - b0) * (i / N);
    const s = Math.sin(b);
    const bb = s < 0 ? bLow : bTop;
    const rho = a * Math.cos(b) * (1 - 0.18 * Math.pow(Math.max(s, 0), 2));
    pts.push([rho, yc + bb * s]);
  }
  const acc = [0];
  for (let i = 1; i <= N; i++) acc.push(acc[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const L = acc[N];
  const rows = [];
  let k = 0;
  for (let j = 0; j <= NV; j++) {
    const target = (j / NV) * L;
    while (k < N - 1 && acc[k + 1] < target) k++;
    const t = (target - acc[k]) / Math.max(1e-6, acc[k + 1] - acc[k]);
    const rho = lerp(pts[k][0], pts[k + 1][0], t), y = lerp(pts[k][1], pts[k + 1][1], t);
    const k2 = Math.min(N, k + 1);
    const th = Math.atan2(pts[k2][0] - pts[k][0], pts[k2][1] - pts[k][1]);
    rows.push({ rho, y, th });
  }
  return { rows, L };
}
export const MERIDIAN = buildMeridian();
export const PETAL_LEN = MERIDIAN.L;

// 開いた花びらの形の輪郭 (0..1)
function outline(v) {
  const s = Math.sin(Math.PI * Math.pow(v, 0.72));
  return Math.pow(Math.max(s, 0), 0.6) * (0.5 + 0.5 * Math.min(1, v * 1.6));
}
const W_OPEN = 1.6;

// 子午線を任意の位置で補間
function meridianAt(vm) {
  const M = MERIDIAN.rows;
  const jf = clamp(vm) * NV;
  const j = Math.min(NV - 1, Math.floor(jf));
  const t = jf - j;
  return { rho: lerp(M[j].rho, M[j + 1].rho, t), y: lerp(M[j].y, M[j + 1].y, t), th: lerp(M[j].th, M[j + 1].th, t) };
}
function sepalOutline(v) {
  return Math.pow(Math.max(0, Math.sin(Math.PI * Math.pow(v, 0.55))), 0.8) * (1 - 0.35 * v);
}

// 花びら1枚の状態から中心線と横断面のパラメータを計算する
// state: { phi, open, roll, sag, len, sepal }
export function petalFrame(state, out) {
  const len = state.len || 1;
  const ds = PETAL_LEN * len / NV;
  const phi = state.phi;
  const cd = Math.cos(phi), sd = Math.sin(phi);
  let rho = RIM, y = Y0;
  const open = state.open;
  const sepal = !!state.sepal;
  if (sepal) { rho = RIM + 0.02; y = Y0 - 0.12; }
  for (let j = 0; j <= NV; j++) {
    const v = j / NV;
    const M = meridianAt(v * len);
    // 根元から先へ伝わる開き
    const spread = 0.75;
    const ov = smooth(clamp(open * (1 + spread) - v * spread));
    const thC = M.th;
    const thO = sepal ? (100 + 55 * v) * DEG : (62 + 33 * Math.pow(v, 0.85)) * DEG;
    let th = lerp(thC, thO, ov);
    // つるに縛られて、閉じた傘のように立ったまま巻かれる
    const roll = state.roll || 0;
    if (roll > 0) th = lerp(th, (9 + 10 * v) * DEG, roll * smoothstep(0.0, 0.12, v));
    // 重みでしなる / 滑り台になる
    if (state.sag) th += state.sag * Math.pow(v, 1.3);
    const r = out.rows[j] || (out.rows[j] = {});
    r.v = v; r.ov = ov; r.rho = rho; r.y = y; r.th = th;
    const rhoC = Math.max(M.rho, 0.06);
    if (sepal) {
      r.hw = lerp(rhoC * 0.36, 0.5, ov) * sepalOutline(v);
      r.k = lerp(1 / Math.max(rhoC, 0.16), 1.2, ov);
    } else {
      const alpha = 0.80 * (0.88 + 0.12 * smoothstep(0, 0.2, v));
      const hwC = rhoC * alpha;
      const hwO = W_OPEN * outline(v) + 0.06 * (1 - v);
      r.hw = lerp(hwC, hwO, ov);
      r.k = lerp(1 / Math.max(rhoC, 0.16), 0.55 + 0.3 * (1 - v), ov);
      if (roll > 0) {
        const rr = roll * smoothstep(0.04, 0.3, v);
        r.hw = lerp(r.hw, hwO * 0.92 + 0.02, rr);
        r.k = lerp(r.k, Math.PI / Math.max(r.hw, 0.04) * 1.1, rr);
      }
    }
    rho += Math.sin(th) * ds; y += Math.cos(th) * ds;
  }
  out.cd = cd; out.sd = sd;
  return out;
}

function buildPetalGeometry() {
  const n = (NX + 1) * (NV + 1);
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(n * 3), uv = new Float32Array(n * 2), tan = new Float32Array(n * 3), meta = new Float32Array(n * 4);
  for (let j = 0; j <= NV; j++) for (let i = 0; i <= NX; i++) {
    const k = j * (NX + 1) + i;
    uv[k * 2] = i / NX; uv[k * 2 + 1] = j / NV;
  }
  const idx = [];
  for (let j = 0; j < NV; j++) for (let i = 0; i < NX; i++) {
    const a = j * (NX + 1) + i, b = a + 1, c = a + NX + 1, d = c + 1;
    idx.push(a, b, c, b, d, c);
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setAttribute('aTan', new THREE.BufferAttribute(tan, 3));
  geo.setAttribute('aMeta', new THREE.BufferAttribute(meta, 4));
  geo.setIndex(idx);
  return geo;
}

export function writePetal(geo, state, frame, idxPetal, time) {
  const pos = geo.attributes.position.array, tan = geo.attributes.aTan.array, meta = geo.attributes.aMeta.array;
  const cd = frame.cd, sd = frame.sd;
  // d = (cd, 0, sd), lat = (-sd, 0, cd)
  for (let j = 0; j <= NV; j++) {
    const r = frame.rows[j];
    const st = Math.sin(r.th), ct = Math.cos(r.th);
    // 中心線の接線 T と内向き法線 N (d, up 基底)
    const Td = st, Ty = ct;
    const Nd = -ct, Ny = st;
    const cx = cd * r.rho, cz = sd * r.rho, cy = r.y;
    for (let i = 0; i <= NX; i++) {
      const x = i / NX * 2 - 1;
      const l = x * r.hw;
      const k = r.k;
      const kl = k * l;
      const lat = Math.abs(kl) < 1e-4 ? l : Math.sin(kl) / k;
      let nrm = Math.abs(kl) < 1e-4 ? k * l * l * 0.5 : (1 - Math.cos(kl)) / k;
      // 開いた花びらの縁のうねりと風のはためき
      const ax = Math.abs(x);
      nrm += r.ov * (state.ruffle * 0.09 * Math.sin(x * 9 + r.v * 5 + idxPetal) * ax * ax * ax);
      nrm += r.ov * state.flutter * 0.07 * Math.sin(time * 5.5 + x * 2.5 + r.v * 6 + idxPetal * 1.7) * ax * ax * r.v;
      // 閉じた時の重なり順 (外側へずらす)
      nrm -= state.layer * 0.018 * (1 - r.ov) * smoothstep(0.02, 0.15, r.v);
      let latD = lat;
      if (state.door > 0) {
        // 裾の端を外へめくり上げる
        const sdx = x * state.doorDir;
        const a = state.door * smoothstep(0.15, 0.95, sdx) * (1 - smoothstep(0.18, 0.5, r.v));
        nrm -= a * 0.55 * r.hw * sdx;
        latD = lat - Math.sign(lat || 1) * a * 0.45 * Math.abs(lat);
      }
      if (state.win > 0) {
        const sdx = x * state.winDir;
        const vb = smoothstep(0.15, 0.25, r.v) * (1 - smoothstep(0.36, 0.5, r.v));
        const a = state.win * smoothstep(0.4, 0.98, sdx) * vb;
        latD -= Math.sign(lat || 1) * a * 0.34 * Math.abs(lat);
        nrm -= a * 0.06;
      }
      const px = cx + (-sd) * latD + cd * Nd * nrm;
      const py = cy + Ny * nrm;
      const pz = cz + cd * latD + sd * Nd * nrm;
      const kk = (j * (NX + 1) + i);
      pos[kk * 3] = px; pos[kk * 3 + 1] = py; pos[kk * 3 + 2] = pz;
      tan[kk * 3] = cd * Td; tan[kk * 3 + 1] = Ty; tan[kk * 3 + 2] = sd * Td;
      meta[kk * 4] = r.ov; meta[kk * 4 + 1] = x; meta[kk * 4 + 2] = idxPetal; meta[kk * 4 + 3] = r.v;
    }
  }
  geo.attributes.position.needsUpdate = true;
  geo.attributes.aTan.needsUpdate = true;
  geo.attributes.aMeta.needsUpdate = true;
  geo.computeVertexNormals();
  geo.computeBoundingSphere();
}

// 花びら上の (x, v) の点と内向き法線 (ローカル座標)
export function petalPoint(frame, x, v, outP, outN) {
  const jf = clamp(v) * NV;
  const j = Math.min(NV - 1, Math.floor(jf));
  const t = jf - j;
  const a = frame.rows[j], b = frame.rows[j + 1];
  const rho = lerp(a.rho, b.rho, t), y = lerp(a.y, b.y, t), th = lerp(a.th, b.th, t);
  const hw = lerp(a.hw, b.hw, t), k = lerp(a.k, b.k, t);
  const st = Math.sin(th), ct = Math.cos(th);
  const Nd = -ct, Ny = st;
  const l = x * hw, kl = k * l;
  const lat = Math.abs(kl) < 1e-4 ? l : Math.sin(kl) / k;
  const nrm = Math.abs(kl) < 1e-4 ? k * l * l * 0.5 : (1 - Math.cos(kl)) / k;
  const cd = frame.cd, sd = frame.sd;
  outP.set(cd * rho - sd * lat + cd * Nd * nrm, y + Ny * nrm, sd * rho + cd * lat + sd * Nd * nrm);
  if (outN) {
    // 横方向の回転を考慮した法線
    const ca = Math.cos(kl), sa = Math.sin(kl);
    // 横接線 = lat*ca + N*sa, 中心線接線 T; 法線 = 横接線 x T の向き調整
    const N0 = new THREE.Vector3(cd * Nd, Ny, sd * Nd);
    const L0 = new THREE.Vector3(-sd, 0, cd);
    outN.copy(N0).multiplyScalar(ca).addScaledVector(L0, -sa).normalize();
  }
  return outP;
}

// 花びらの横断面の曲率中心 (巻いた時の筒の軸) と半径、中心線の接線 (ローカル)
export function petalAxis(frame, v, outC, outT) {
  const jf = clamp(v) * NV;
  const j = Math.min(NV - 1, Math.floor(jf));
  const t = jf - j;
  const a = frame.rows[j], b = frame.rows[j + 1];
  const rho = lerp(a.rho, b.rho, t), y = lerp(a.y, b.y, t), th = lerp(a.th, b.th, t), k = Math.max(0.05, lerp(a.k, b.k, t));
  const cd = frame.cd, sd = frame.sd;
  const st = Math.sin(th), ct = Math.cos(th);
  const Nd = -ct, Ny = st;
  const R = 1 / k;
  outC.set(cd * rho + cd * Nd * R, y + Ny * R, sd * rho + sd * Nd * R);
  if (outT) outT.set(cd * st, ct, sd * st);
  return Math.min(R, 3);
}
// 閉じたつぼみの、高さ y での半径
export function budRadiusAt(y) {
  const M = MERIDIAN.rows;
  for (let j = 0; j < M.length - 1; j++) {
    if (M[j + 1].y >= y && M[j].y <= y) { const t = (y - M[j].y) / Math.max(1e-6, M[j + 1].y - M[j].y); return lerp(M[j].rho, M[j + 1].rho, t); }
  }
  return 0.05;
}

// ------------------------------------------------------------
export function createFlower(G) {
  const head = new THREE.Group();   // 茎の先端に置かれる花全体
  const veinTex = makePetalTexture();
  const leafTex = makeLeafTexture();
  G.leafTex = leafTex;
  const petalMat = makePetalMaterial(G, veinTex);
  const petals = [];
  for (let i = 0; i < 5; i++) {
    const geo = buildPetalGeometry();
    const mesh = new THREE.Mesh(geo, petalMat);
    mesh.frustumCulled = false;
    mesh.userData.petal = i;
    head.add(mesh);
    const layer = [0, 2, 4, 1, 3][i];
    petals.push({
      i, mesh, geo, frame: { rows: [] },
      phi0: PETAL_PHI[i], phi: PETAL_PHI[i],
      open: new Spring(0, 30, 7), roll: 0, layer,
      flutter: 0, ruffle: 1, dirty: true, lastSig: '',
      strain: 0,
    });
  }

  // --- 花床 (床: 上面は黄色いビロード、下面は緑のがくへ続く) ---
  const recPts = [];
  recPts.push(new THREE.Vector2(0.0001, FLOOR_Y - 0.03));
  for (let i = 1; i <= 14; i++) {
    const r = (i / 14) * (RIM + 0.06);
    recPts.push(new THREE.Vector2(r, FLOOR_Y - 0.03 + 0.06 * Math.pow(r / RIM, 2.5)));
  }
  const recGeo = new THREE.LatheGeometry(recPts, 48);
  const floorMat = makeOrganMaterial(G, 0, 0xd6c25a);
  floorMat.side = THREE.DoubleSide;
  const receptacle = new THREE.Mesh(recGeo, floorMat);
  head.add(receptacle);
  const underPts = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    const r = lerp(0.34, RIM + 0.07, Math.pow(t, 1.6));
    underPts.push(new THREE.Vector2(r, lerp(-0.75, FLOOR_Y + 0.04, Math.pow(t, 0.8))));
  }
  const underGeo = new THREE.LatheGeometry(underPts, 48);
  const under = new THREE.Mesh(underGeo, makeOrganMaterial(G, 1, 0x6ea83c));
  head.add(under);

  // --- 雌しべ: ふくらんだ子房、細い花柱、5つに分かれた柱頭 ---
  const pisPts = [];
  const prof = (t) => {
    // t: 0..1 (下→上)
    const y = t * 1.55;
    let r;
    if (y < 0.4) r = 0.04 + 0.15 * Math.sin(Math.PI * Math.min(1, (y + 0.04) / 0.48));
    else r = 0.042 + 0.006 * Math.sin(y * 6);
    if (y > 1.36) r = 0.042 + (y - 1.36) * 0.5;
    if (y > 1.5) r = Math.max(0.001, 0.112 - (y - 1.5) * 2.2);
    return [Math.max(0.001, r), y];
  };
  for (let i = 0; i <= 40; i++) { const [r, y] = prof(i / 40); pisPts.push(new THREE.Vector2(r, y + FLOOR_Y - 0.03)); }
  const pisGeo = new THREE.LatheGeometry(pisPts, 32);
  const pp = pisGeo.getAttribute('position');
  for (let i = 0; i < pp.count; i++) {
    const x = pp.getX(i), y = pp.getY(i) - FLOOR_Y, z = pp.getZ(i);
    const a = Math.atan2(z, x);
    // 子房の筋と柱頭の5裂
    let k = 1 + 0.06 * Math.cos(a * 5) * Math.max(0, 1 - y / 0.45);
    if (y > 1.33) k *= 1 + 0.45 * Math.pow(Math.max(0, Math.cos(a * 5 / 2)), 2) * smoothstep(1.33, 1.55, y);
    pp.setX(i, x * k); pp.setZ(i, z * k);
  }
  pisGeo.computeVertexNormals();
  const pistil = new THREE.Mesh(pisGeo, makeOrganMaterial(G, 3, 0xd4f78e));
  head.add(pistil);

  // --- 雄しべ (インスタンス) ---
  const NS = 13;
  const r = mulberry32(4242);
  const filGeo = new THREE.CylinderGeometry(0.009, 0.016, 1, 6, 4);
  filGeo.translate(0, 0.5, 0);
  const antGeo = new THREE.CapsuleGeometry(0.036, 0.1, 4, 10);
  antGeo.scale(1, 1, 0.7);
  antGeo.rotateZ(Math.PI / 2);
  const filMesh = new THREE.InstancedMesh(filGeo, makeOrganMaterial(G, 1, 0xf4ecc8), NS);
  const antMesh = new THREE.InstancedMesh(antGeo, makeOrganMaterial(G, 2, 0xffcf3a, { glint: 1 }), NS);
  filMesh.frustumCulled = false; antMesh.frustumCulled = false;
  head.add(filMesh); head.add(antMesh);
  const stamens = [];
  for (let i = 0; i < NS; i++) {
    const a = (i / NS) * Math.PI * 2 + (r() - 0.5) * 0.2;
    const rad = 0.36 + r() * 0.14;
    const h = 1.0 + r() * 0.45;
    stamens.push({ a, rad, h, lean: 0.12 + r() * 0.1, sx: new Spring(0, 40, 3.5), sz: new Spring(0, 40, 3.5), pollen: 1, phase: r() * 6 });
  }
  const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _s = new THREE.Vector3(), _p = new THREE.Vector3();
  const updateStamens = (dt, accel) => {
    for (let i = 0; i < NS; i++) {
      const s = stamens[i];
      // 加速度による慣性 (上昇時に下へしなる)
      s.sx.target = 0; s.sz.target = 0;
      s.sx.kick(-accel.x * dt * 0.6); s.sz.kick(-accel.z * dt * 0.6);
      s.sx.update(dt); s.sz.update(dt);
      const wob = Math.sin(G.time * 1.3 + s.phase) * 0.015;
      const bx = Math.cos(s.a) * s.lean + s.sx.x + wob, bz = Math.sin(s.a) * s.lean + s.sz.x;
      const sag = clamp(accel.y * 0.004, -0.3, 0.3);
      _e.set(bz + 0, 0, -bx);
      _q.setFromEuler(_e);
      const hh = s.h * (1 - Math.abs(sag) * 0.2);
      _s.set(1, hh, 1);
      _p.set(Math.cos(s.a) * s.rad, FLOOR_Y, Math.sin(s.a) * s.rad);
      _m.compose(_p, _q, _s);
      filMesh.setMatrixAt(i, _m);
      // 葯は花糸の先
      const tip = new THREE.Vector3(0, hh, 0).applyQuaternion(_q).add(_p);
      s.tip = s.tip || new THREE.Vector3();
      s.tip.copy(tip);
      _e.set(bz, s.a + Math.PI / 2, -bx + sag * 2);
      _q.setFromEuler(_e);
      _s.set(1, 1, 1);
      _m.compose(tip, _q, _s);
      antMesh.setMatrixAt(i, _m);
    }
    filMesh.instanceMatrix.needsUpdate = true;
    antMesh.instanceMatrix.needsUpdate = true;
  };

  // --- 蜜のしずく (花びらの根元) ---
  const nectarMat = makeOrganMaterial(G, 4, 0xffc040, { transparent: true });
  const nectarGeo = new THREE.SphereGeometry(1, 20, 14);
  const nectars = [];
  for (let i = 0; i < 5; i++) {
    const a = PETAL_PHI[i] + 36 * DEG;
    const m = new THREE.Mesh(nectarGeo, nectarMat);
    const rad = 1.06;
    m.position.set(Math.cos(a) * rad, FLOOR_Y + 0.05, Math.sin(a) * rad);
    m.scale.set(0.085, 0.06, 0.085);
    m.renderOrder = 3;
    head.add(m);
    nectars.push({ mesh: m, a, base: m.position.clone(), vol: 1, wob: new Spring(0, 80, 6) });
  }

  // --- がく (5枚、花びらの間) ---
  const sepalMat = makeLeafMaterial(G, leafTex, { top: 0x4c8a2e, bottom: 0x6aa043, trans: 0xa8d860 });
  const sepals = [];
  for (let i = 0; i < 5; i++) {
    const geo = buildPetalGeometry();
    const mesh = new THREE.Mesh(geo, sepalMat);
    mesh.frustumCulled = false;
    head.add(mesh);
    sepals.push({ mesh, geo, frame: { rows: [] }, phi: PETAL_PHI[i] + 54 * DEG, open: 0 });
  }

  // 光の柱 (上の隙間から差し込む)
  const shaftMat = new THREE.ShaderMaterial({
    uniforms: { uI: { value: 0 }, uTime: G.U.uTime },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: /* glsl */`
      uniform float uI; uniform float uTime; varying vec2 vUv;
      void main(){
        float edge = sin(vUv.x * 3.14159 * 2.0);
        float a = (1.0 - vUv.y) * 0.6 + 0.4;
        float mote = 0.85 + 0.15 * sin(vUv.y * 30.0 - uTime * 0.6 + vUv.x * 12.0);
        float fall = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y);
        gl_FragColor = vec4(vec3(1.0, 0.86, 0.62) * uI * a * mote * fall * 0.22, 1.0);
      }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  });
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.6, 3.8, 20, 1, true), shaftMat);
  shaft.position.set(0, 2.0, 0);
  shaft.renderOrder = 8;
  head.add(shaft);

  // ------------------------------------------------------------
  const flower = {
    head, petals, petalMat, receptacle, pistil, stamens, filMesh, antMesh, nectars, sepals, shaft, shaftMat,
    scale: 1,
    door: 0,       // 正面の扉 (つぼみの花びらの合わせ目) の開き
    slit: 0.45,    // 家の方の覗き窓
    sepalOpen: 0,
    accel: new THREE.Vector3(),
    wind: 0,
    update(dt) {
      const t = G.time;
      for (const p of petals) {
        p.open.update(dt);
        let phi = p.phi0;
        let o = clamp(p.open.x, -0.05, 1.12);
        // 扉: 正面 (90°) の両側の花びらが左右に分かれ、裾が持ち上がる
        // 扉: 正面 (90°) 側の裾だけがカーテンのようにめくれる
        const doorAmt = (p.i === 0 || p.i === 1) ? this.door : 0;
        // 覗き窓: 家の方 (306°) の合わせ目
        // 覗き窓: 家の方 (306°) の合わせ目が目の高さだけ少し離れる
        const winAmt = (p.i === 3 || p.i === 4) ? this.slit : 0;
        // つるに引かれて震える
        if (p.strain > 0) o += Math.sin(t * 23) * 0.006 * p.strain + Math.sin(t * 3.1) * 0.01 * p.strain;
        p.phi = phi;
        const flutter = this.wind * clamp(o);
        const sag = p.sag || 0;
        const sig = `${phi.toFixed(4)}|${o.toFixed(4)}|${p.roll.toFixed(3)}|${sag.toFixed(3)}|${doorAmt.toFixed(3)}|${winAmt.toFixed(3)}|${flutter > 0.001 ? (t * 30 | 0) : 0}`;
        if (sig !== p.lastSig) {
          p.lastSig = sig;
          petalFrame({ phi, open: o, roll: p.roll, sag }, p.frame);
          writePetal(p.geo, { ruffle: 1, flutter, layer: p.layer, door: doorAmt, doorDir: p.i === 0 ? 1 : -1, win: winAmt * (1 - clamp(o * 3)), winDir: p.i === 3 ? 1 : -1 }, p.frame, p.i, t);
        }
      }
      // がく: 花びらの外側に沿って閉じ、開くと反り返る
      for (const s of sepals) {
        const sig = `${this.sepalOpen.toFixed(3)}`;
        if (s.lastSig === sig) continue;
        s.lastSig = sig;
        petalFrame({ phi: s.phi, open: this.sepalOpen, len: 0.4, sepal: true }, s.frame);
        writePetal(s.geo, { ruffle: 0, flutter: 0, layer: 4.0 }, s.frame, 9, t);
      }
      updateStamens(dt, this.accel);
      for (const n of nectars) {
        n.wob.update(dt);
        const s = Math.cbrt(Math.max(0.05, n.vol));
        n.mesh.scale.set(0.085 * s * (1 + n.wob.x), 0.06 * s * (1 - n.wob.x), 0.085 * s * (1 + n.wob.x));
      }
    },
    // 花びらへのレイ判定
    raycastPetals(ray) {
      const rc = new THREE.Raycaster(ray.origin, ray.direction, 0, 200);
      const hits = rc.intersectObjects(petals.map((p) => p.mesh), false);
      return hits[0] || null;
    },
    // 花びら上の点 (ワールド座標)
    petalWorld(i, x, v, outP, outN) {
      petalPoint(petals[i].frame, x, v, outP, outN);
      outP.applyMatrix4(head.matrixWorld);
      if (outN) outN.transformDirection(head.matrixWorld);
      return outP;
    },
  };
  // 初期化
  flower.update(0.016);
  return flower;
}

