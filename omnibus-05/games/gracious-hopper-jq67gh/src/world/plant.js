// 植物の体: 芽 (胚軸のフック・子葉)、茎 (節の伸長・しなり)、葉 (展開)
import * as THREE from '../vendor/three.module.min.js';
import { makeLeafMaterial, makeStemMaterial } from './plantmat.js';
import { clamp, lerp, smooth, smoothstep, mulberry32, Spring } from '../core/util.js';

const DEG = Math.PI / 180;
export const STEM_TOP = 80;           // 最終的な茎の長さ (m)
export const BUD_STEM = 0.4;          // 地上でつぼみが付く時の茎の長さ
const UP = new THREE.Vector3(0, 1, 0);

// ---- 葉のつらなり (らせん滑り台) の設計 ----
export const HELIX = (() => {
  const n = 18;
  const leaves = [];
  const dphi = 75 * DEG;
  const top = 77.2, spacing = 4.25;
  for (let k = 0; k < n; k++) {
    // k=0 が一番上
    const y = top - k * spacing;
    leaves.push({ y, phi: -90 * DEG + 20 * DEG + k * dphi });
  }
  return { n, leaves, spacing, dphi };
})();

// 葉の中心線 (ローカル: X=外向き, Y=茎方向, Z=周方向)
function midrib(L, t, out) {
  const u = L.unfurl;
  const len = L.len * lerp(0.12, 1, smooth(u));
  if (L.kind === 'helix') {
    const tt = t;
    const R = lerp(0.3, L.R, smooth(u));
    const r = 0.32 + (R - 0.32) * smoothstep(0, 0.32, tt);
    const sweep = L.sweep * smooth(u);
    const a = sweep * smoothstep(0.08, 1.0, tt) * (len / L.len);
    const lift = lerp(1.0, 0.0, smooth(u));
    const h = L.rise * Math.sin(Math.PI * Math.min(tt, 0.5)) * (1 - tt * 0.3) - (L.drop + L.extra) * Math.pow(tt, 1.7) * smooth(u) + lift * tt * 0.9;
    out.set(r * Math.cos(a), h, r * Math.sin(a));
    return out;
  }
  // 放射状に伸びて垂れる葉 (子葉・根生葉)
  const elev = lerp(80 * DEG, L.elev, smooth(u));
  const s = t * len;
  // 弧長に沿って角度が下がっていく (重力でしなる)
  const droop = (L.droop + L.extra) * smooth(u);
  const ang = elev - droop * t * t;
  // 解析的な近似積分
  const k = 12;
  let x = 0, y = 0;
  for (let i = 0; i < k; i++) {
    const tm = (i + 0.5) / k * t;
    const am = elev - droop * tm * tm;
    x += Math.cos(am) * s / k; y += Math.sin(am) * s / k;
  }
  out.set(x + L.r0, y, 0);
  return out;
}

function leafOutline(L, t) {
  if (L.kind === 'coty') return Math.pow(Math.max(0, Math.sin(Math.PI * Math.pow(t, 0.8))), 0.6);
  return Math.pow(Math.max(0, Math.sin(Math.PI * Math.pow(t, 0.62))), 0.85) * (1 - 0.25 * t);
}

const NXL = 8, NVL = 20;
function buildLeafGeo() {
  const n = (NXL + 1) * (NVL + 1);
  const geo = new THREE.BufferGeometry();
  const uv = new Float32Array(n * 2);
  for (let j = 0; j <= NVL; j++) for (let i = 0; i <= NXL; i++) { const k = j * (NXL + 1) + i; uv[k * 2] = i / NXL; uv[k * 2 + 1] = j / NVL; }
  const idx = [];
  for (let j = 0; j < NVL; j++) for (let i = 0; i < NXL; i++) {
    const a = j * (NXL + 1) + i, b = a + 1, c = a + NXL + 1, d = c + 1;
    idx.push(a, b, c, b, d, c);
  }
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  geo.setAttribute('aTan', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  geo.setAttribute('aMeta', new THREE.BufferAttribute(new Float32Array(n * 4), 4));
  geo.setIndex(idx);
  return geo;
}

const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _t = new THREE.Vector3(), _s = new THREE.Vector3(), _n = new THREE.Vector3();
function writeLeaf(L) {
  const geo = L.geo;
  const pos = geo.attributes.position.array, tan = geo.attributes.aTan.array, meta = geo.attributes.aMeta.array;
  const u = L.unfurl;
  const roll = lerp(7.0, 0.0, smooth(clamp(u * 1.3)));
  for (let j = 0; j <= NVL; j++) {
    const t = j / NVL;
    midrib(L, t, _a);
    midrib(L, Math.min(1, t + 0.02), _b);
    _t.subVectors(_b, _a);
    if (_t.lengthSq() < 1e-10) _t.set(1, 0, 0);
    _t.normalize();
    // 横方向: 中心線と「上」に直交
    _s.crossVectors(UP, _t);
    if (_s.lengthSq() < 1e-6) _s.set(0, 0, 1);
    _s.normalize();
    _n.crossVectors(_t, _s).normalize();
    const w = L.width * leafOutline(L, t) * lerp(0.35, 1, smooth(u));
    for (let i = 0; i <= NXL; i++) {
      const x = i / NXL * 2 - 1;
      const l = x * w;
      // 樋のような断面 (縁が上がる) と、展開前の巻き
      let lat = l, up = L.cup * Math.pow(Math.abs(l), 1.6);
      if (roll > 0.05) { const a = l * roll; lat = Math.sin(a) / roll; up = (1 - Math.cos(a)) / roll; }
      up += Math.sin(t * 9 + x * 2) * 0.012 * Math.abs(x) * L.len * 0.1;
      const k = j * (NXL + 1) + i;
      pos[k * 3] = _a.x + _s.x * lat + _n.x * up;
      pos[k * 3 + 1] = _a.y + _s.y * lat + _n.y * up;
      pos[k * 3 + 2] = _a.z + _s.z * lat + _n.z * up;
      tan[k * 3] = _t.x; tan[k * 3 + 1] = _t.y; tan[k * 3 + 2] = _t.z;
      meta[k * 4] = u; meta[k * 4 + 1] = 1 - smooth(u); meta[k * 4 + 2] = x; meta[k * 4 + 3] = t;
    }
  }
  geo.attributes.position.needsUpdate = true;
  geo.attributes.aTan.needsUpdate = true;
  geo.attributes.aMeta.needsUpdate = true;
  geo.computeVertexNormals();
  geo.computeBoundingSphere();
}

// ------------------------------------------------------------
export function createPlant(G, flower) {
  const group = new THREE.Group();
  G.scene.add(group);
  const stemMat = makeStemMaterial(G);
  const leafMat = makeLeafMaterial(G, G.leafTex, { top: 0x3f7d22, bottom: 0x78ad48, trans: 0xa6d84a });
  const youngMat = makeLeafMaterial(G, G.leafTex, { top: 0x7cbf3a, bottom: 0xa8d468, trans: 0xc8f070 });

  // ---- 茎 ----
  const RAD = 14;
  const MAXSEG = 184;
  const stemGeo = new THREE.BufferGeometry();
  const nv = (MAXSEG + 1) * (RAD + 1);
  stemGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nv * 3), 3));
  stemGeo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(nv * 3), 3));
  stemGeo.setAttribute('aSV', new THREE.BufferAttribute(new Float32Array(nv * 2), 2));
  const sidx = [];
  for (let j = 0; j < MAXSEG; j++) for (let i = 0; i < RAD; i++) {
    const a = j * (RAD + 1) + i, b = a + 1, c = a + RAD + 1, d = c + 1;
    sidx.push(a, c, b, b, c, d);
  }
  stemGeo.setIndex(sidx);
  const stem = new THREE.Mesh(stemGeo, stemMat);
  stem.frustumCulled = false;
  group.add(stem);

  const rnd = mulberry32(777);
  const leaves = [];
  const addLeaf = (o) => {
    const L = Object.assign({ unfurl: 0, extra: 0, cup: 0.25, r0: 0.0, rise: 0, drop: 0, R: 2.6, sweep: 1.4, elev: 30 * DEG, droop: 0.9, dirty: true, born: false, visible: true }, o);
    L.geo = buildLeafGeo();
    L.mesh = new THREE.Mesh(L.geo, o.mat || leafMat);
    L.mesh.frustumCulled = false;
    L.mesh.visible = false;
    group.add(L.mesh);
    L.bend = new Spring(0, 30, 4);
    leaves.push(L);
    return L;
  };
  // 子葉
  const coty = [0, 1].map((k) => addLeaf({ kind: 'coty', node: 'tip', phi: (k ? 180 : 0) * DEG + 30 * DEG, len: 0.07, width: 0.035, elev: 20 * DEG, droop: 0.2, cup: 0.6, mat: youngMat }));
  // 根生葉 (地面に広がる大きな葉)。正面 (+Z) の1枚はつぼみの入口への踏み台
  const basalDefs = [[90, 0.10, 1.9, 0.7, 12], [205, 0.16, 2.3, 0.8, 18], [330, 0.22, 2.2, 0.75, 16], [25, 0.28, 1.7, 0.6, 22], [150, 0.33, 1.6, 0.6, 24], [265, 0.37, 1.8, 0.65, 26]];
  const basal = basalDefs.map(([phi, s, len, w, elev], k) => addLeaf({ kind: 'basal', s, phi: phi * DEG, len, width: w * 0.5, elev: elev * DEG, droop: 0.75, cup: 0.18, order: k, mat: leafMat }));
  // らせんの葉 (上昇中に生まれる)
  const helix = HELIX.leaves.map((h, k) => addLeaf({ kind: 'helix', s: h.y, phi: h.phi, len: 5.2, width: 0.95, R: 2.7, sweep: 72 * DEG, rise: 0.5, drop: 3.4, cup: 0.32, k, mat: leafMat }));

  const plant = {
    group, stem, leaves, coty, basal, helix,
    // 成長パラメータ
    sprout: 0,     // 0..1 芽が出る
    young: 0,      // 0..1 苗が育つ
    bud: 0,        // 0..1 つぼみが膨らむ
    length: 0,     // 茎の長さ (m)
    baseY: 0.05,   // くぼみの底
    radius: 0.01,
    bendAngle: 0, bendAz: 0, // おじぎ
    sway: new THREE.Vector2(), swayV: new THREE.Vector2(),
    windAmp: 0,
    spine: [], frames: [],
    headPos: new THREE.Vector3(), headQuat: new THREE.Quaternion(),
    headScale: 0.02,
    stemSig: '',

    // 茎の中心線を計算
    computeSpine() {
      const L = Math.max(0.001, this.length);
      const seg = Math.min(MAXSEG - 3, Math.max(8, Math.ceil(L / 0.45)));
      this.seg = seg;
      const pts = this.spine; pts.length = 0;
      const tans = this.frames; tans.length = 0;
      let x = 0, y = this.baseY, z = 0;
      const hook = this.hook || 0;
      const hookAz = 20 * DEG;
      for (let j = 0; j <= seg; j++) {
        const f = j / seg;
        // しなり (根元ほど曲がりが小さく、先へ行くほど角度がつく)
        const prof = 1 - Math.pow(1 - f, 2);
        let ax = Math.cos(this.bendAz) * this.bendAngle * prof + this.sway.x * (prof + 0.6 * Math.sin(f * Math.PI) * 0.3);
        let az = Math.sin(this.bendAz) * this.bendAngle * prof + this.sway.y * (prof + 0.6 * Math.sin(f * Math.PI) * 0.3);
        // 芽のフック
        const hk = hook * smoothstep(0.4, 1.0, f);
        ax += Math.cos(hookAz) * hk; az += Math.sin(hookAz) * hk;
        // 自然なゆらぎ
        ax += Math.sin(f * 5.0 + 1.0) * 0.012 * Math.min(1, L / 4);
        az += Math.sin(f * 3.7 + 2.0) * 0.012 * Math.min(1, L / 4);
        const th = Math.hypot(ax, az);
        const tx = th > 1e-6 ? Math.sin(th) * ax / th : 0, tz = th > 1e-6 ? Math.sin(th) * az / th : 0, ty = Math.cos(th);
        pts.push(new THREE.Vector3(x, y, z));
        tans.push(new THREE.Vector3(tx, ty, tz));
        const ds = L / seg;
        x += tx * ds; y += ty * ds; z += tz * ds;
      }
    },
    // 茎上の位置 s (m) のフレーム
    frameAt(s, outP, outT) {
      const L = Math.max(0.001, this.length);
      const f = clamp(s / L) * this.seg;
      const j = Math.min(this.seg - 1, Math.floor(f));
      const t = f - j;
      outP.copy(this.spine[j]).lerp(this.spine[j + 1], t);
      if (outT) outT.copy(this.frames[j]).lerp(this.frames[j + 1], t).normalize();
      return outP;
    },
    radiusAt(s) {
      const L = Math.max(0.001, this.length);
      const f = clamp(s / L);
      let r = this.radius * (1 - 0.28 * f) * (1 + 0.5 * Math.exp(-s / Math.max(0.05, this.radius * 1.5)));
      // 節のふくらみ
      for (const Lf of helix) if (Lf.born) r *= 1 + 0.07 * Math.exp(-Math.pow((s - Lf.s) / 0.35, 2));
      return r;
    },
    writeStem() {
      const pos = stemGeo.attributes.position.array, nrm = stemGeo.attributes.normal.array, sv = stemGeo.attributes.aSV.array;
      const seg = this.seg;
      const T = new THREE.Vector3(), N = new THREE.Vector3(1, 0, 0), B = new THREE.Vector3();
      for (let j = 0; j <= MAXSEG; j++) {
        const jj = Math.min(j, seg);
        const p = this.spine[jj];
        T.copy(this.frames[jj]);
        // 平行移動フレーム
        B.crossVectors(T, N).normalize(); N.crossVectors(B, T).normalize();
        const s = jj / seg * this.length;
        let r = this.radiusAt(s);
        // 先端を丸く閉じる
        let px = p.x, py = p.y, pz = p.z;
        if (j >= seg) {
          const k = Math.min(j - seg + 1, 3);
          const ang = [0.55, 0.85, 1.0][k - 1] * Math.PI / 2;
          const r0 = r;
          r = r0 * Math.cos(ang);
          px += T.x * r0 * Math.sin(ang) * 0.9; py += T.y * r0 * Math.sin(ang) * 0.9; pz += T.z * r0 * Math.sin(ang) * 0.9;
        }
        for (let i = 0; i <= RAD; i++) {
          const a = i / RAD * Math.PI * 2;
          const c = Math.cos(a), si = Math.sin(a);
          const nx = N.x * c + B.x * si, ny = N.y * c + B.y * si, nz = N.z * c + B.z * si;
          const k = j * (RAD + 1) + i;
          pos[k * 3] = px + nx * r; pos[k * 3 + 1] = py + ny * r; pos[k * 3 + 2] = pz + nz * r;
          nrm[k * 3] = nx; nrm[k * 3 + 1] = ny; nrm[k * 3 + 2] = nz;
          sv[k * 2] = i / RAD; sv[k * 2 + 1] = s;
        }
      }
      stemGeo.attributes.position.needsUpdate = true;
      stemGeo.attributes.normal.needsUpdate = true;
      stemGeo.attributes.aSV.needsUpdate = true;
      stemGeo.setDrawRange(0, Math.min(MAXSEG, seg + 3) * RAD * 6);
    },

    update(dt) {
      // --- 成長段階から形を決める ---
      const sp = this.sprout, yg = this.young, bd = this.bud;
      // 芽: 伸びる → フックがほどける
      const sproutLen = 0.16 * smoothstep(0.0, 0.45, sp);
      this.hook = Math.PI * 0.95 * (1 - smoothstep(0.45, 0.85, sp));
      if (this.length < STEM_TOP * 0.999 && !this.lengthDriven) {
        this.length = sproutLen + (BUD_STEM - 0.16) * smooth(yg);
      }
      this.radius = lerp(0.016, 0.03, smooth(yg)) + 0.38 * smooth(bd);
      // 風の揺れ (高いほど大きい)
      const hNorm = clamp(this.length / STEM_TOP);
      const k = 1.2, c = 0.5;
      const windF = this.windAmp * (Math.sin(G.time * 0.7) * 0.6 + Math.sin(G.time * 1.37 + 1) * 0.4) * 0.02;
      this.swayV.x += (-k * this.sway.x - c * this.swayV.x + windF) * dt;
      this.swayV.y += (-k * this.sway.y - c * this.swayV.y + windF * 0.5) * dt;
      this.sway.x += this.swayV.x * dt; this.sway.y += this.swayV.y * dt;

      const sig = `${this.length.toFixed(4)}|${this.radius.toFixed(4)}|${this.hook.toFixed(3)}|${this.bendAngle.toFixed(4)}|${this.bendAz.toFixed(3)}|${this.sway.x.toFixed(4)}|${this.sway.y.toFixed(4)}`;
      const stemChanged = sig !== this.stemSig;
      if (stemChanged) {
        this.stemSig = sig;
        this.computeSpine();
        this.writeStem();
      }
      stem.visible = sp > 0.01;
      // --- 花の頭 ---
      const tipP = this.spine[this.seg], tipT = this.frames[this.seg];
      this.headPos.copy(tipP);
      this.headQuat.setFromUnitVectors(UP, tipT);
      this.headScale = lerp(0.015, 1, Math.pow(smooth(bd), 1.6));
      flower.head.position.copy(tipP);
      flower.head.quaternion.copy(this.headQuat);
      flower.head.scale.setScalar(this.headScale);
      flower.head.visible = bd > 0.001;

      // --- 葉 ---
      const p = new THREE.Vector3(), tg = new THREE.Vector3();
      for (const L of leaves) {
        let s, target = 0, show = true;
        if (L.kind === 'coty') {
          s = Math.min(this.length, sproutLen);
          target = smoothstep(0.6, 1.0, sp);
          // つぼみの段階で子葉は小さく枯れていく
          show = sp > 0.3 && bd < 0.6;
          L.len = 0.07 + 0.05 * smooth(yg);
          L.width = 0.035 + 0.025 * smooth(yg);
        } else if (L.kind === 'basal') {
          s = Math.min(this.length, L.s * (BUD_STEM / 0.4));
          const born = smoothstep(L.order * 0.12, L.order * 0.12 + 0.45, yg);
          target = born;
          show = yg > L.order * 0.12;
          const big = smooth(bd);
          L.len = lerp([0.18, 0.2, 0.22, 0.22, 0.24, 0.24][L.order], basalDefs[L.order][2], big);
          L.width = lerp(0.07, basalDefs[L.order][3] * 0.5, big);
          // つぼみが育つと、根元の葉はつぼみの下に寝そべる (つぼみの中に入り込まない)
          L.droop = lerp(0.5, 0.45, big);
          L.elev = lerp(basalDefs[L.order][4] * DEG, -2 * DEG, big);
          if (big > 0 && Math.abs(L.elev - (L._lastElev ?? 99)) > 1e-4) { L._lastElev = L.elev; L.dirty = true; }
        } else {
          // らせんの葉: つぼみの下で生まれ、離れながら開く
          const birthLen = L.s + 1.2;
          show = this.length > birthLen - 0.6 && this.length > 3;
          s = L.s;
          target = smoothstep(birthLen - 0.6, birthLen + 3.2, this.length);
          L.born = show;
        }
        L.mesh.visible = show;
        if (!show) continue;
        if (Math.abs(L.unfurl - target) > 1e-4) { L.unfurl = target; L.dirty = true; }
        L.bend.update(dt);
        const ex = L.bend.x;
        if (Math.abs(ex - L.extra) > 1e-4) { L.extra = ex; L.dirty = true; }
        if (L.dirty) { writeLeaf(L); L.dirty = false; }
        // 茎のフレームに取り付け
        this.frameAt(s, p, tg);
        const r = this.radiusAt(s) * 0.85;
        L.mesh.position.copy(p);
        // ローカル X=外向き(phi), Y=茎方向
        const q = new THREE.Quaternion().setFromUnitVectors(UP, tg);
        const qy = new THREE.Quaternion().setFromAxisAngle(UP, -L.phi);
        L.mesh.quaternion.copy(q).multiply(qy);
        L.mesh.updateMatrix();
        L.r0x = r;
        L.mesh.position.add(new THREE.Vector3(Math.cos(L.phi) * r, 0, Math.sin(L.phi) * r).applyQuaternion(q));
      }
    },
    // 葉の上の点 (ワールド)
    leafPoint(L, t, out) {
      midrib(L, t, out);
      L.mesh.updateMatrixWorld();
      return out.applyMatrix4(L.mesh.matrixWorld);
    },
  };
  plant.computeSpine();
  return plant;
}
