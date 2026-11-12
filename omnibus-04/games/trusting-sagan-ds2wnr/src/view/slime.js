// 粘液の道: 未支持の垂れ → 支持された透明な滑り台を、同じ断面の連続変形で描く。
import * as THREE from 'three';
import { PIECE_COUNT, SLOT_COUNT, CONN_HEIGHTS, clamp, lerp, smoothstep } from '../core/route.js';
import { ROOTS, POD_FLOOR } from '../core/layout.js';
import { profileAt, surfacePoint, slotLocal, sideEase, rawCure, sagInfo, BALL_R } from '../core/shape.js';
import { SIDE_PATHS } from '../core/sim.js';
import { createSlimeMaterials, createGooMaterial } from './materials.js';
import { TAG_MARK_R, TAG_HOLE_R, TAG_HOLE_OFFSET } from './tags.js';

const NI = 9; // 内面・外面の点数
const NRIM = 6;
const RING_N = NI * 2 + NRIM * 2;

// 断面の局所 2D 点列(閉じた輪)と種類
function ringPoints(pr, out) {
  let k = 0;
  const put = (x, y, type) => { out[k * 3] = x; out[k * 3 + 1] = y; out[k * 3 + 2] = type; k++; };
  for (let i = 0; i < NI; i++) {
    const v = -1 + (2 * i) / (NI - 1);
    const p = surfacePoint(pr, v, false);
    put(p[0], p[1], 0);
  }
  // 縁: 内面の上端から外面の上端へ、壁より太い丸い玉で結ぶ(分厚い縁)
  const rim = (sign) => {
    const cx = sign * (pr.W / 2 + pr.wall / 2);
    const b = Math.max(0, pr.rim - pr.wall / 2);
    for (let i = 0; i < NRIM; i++) {
      const t = (i + 0.5) / NRIM;
      const th = sign > 0 ? Math.PI * (1 - t) : Math.PI * t;
      const r = pr.wall / 2 + b * Math.sin(th);
      put(cx + Math.cos(th) * r, pr.rim * 1.1 * Math.sin(th), 1);
    }
  };
  rim(1);
  for (let i = NI - 1; i >= 0; i--) {
    const v = -1 + (2 * i) / (NI - 1);
    const p = surfacePoint(pr, v, true);
    put(p[0], p[1], 2);
  }
  rim(-1);
  return out;
}

function makePieceGeometry(NU, capStart, capEnd) {
  const ringV = RING_N + 1;
  let n = (NU + 1) * ringV;
  const capVerts = RING_N; // 端面用に輪をもう一度
  if (capStart) n += capVerts;
  if (capEnd) n += capVerts;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3).setUsage(THREE.DynamicDrawUsage));
  g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(n * 3), 3).setUsage(THREE.DynamicDrawUsage));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2).setUsage(THREE.DynamicDrawUsage));
  g.setAttribute('aInfo', new THREE.BufferAttribute(new Float32Array(n * 4), 4).setUsage(THREE.DynamicDrawUsage));
  const idx = [];
  for (let i = 0; i < NU; i++) {
    for (let j = 0; j < RING_N; j++) {
      const a = i * ringV + j, b = a + ringV;
      idx.push(a, a + 1, b, a + 1, b + 1, b);
    }
  }
  // 端面: 内面[i] と 外面[NI-1-i] を結ぶ帯(U字の厚み)
  const cap = (base, flip) => {
    for (let i = 0; i < NI - 1; i++) {
      const a = base + i, b = base + i + 1;
      const c = base + NI + NRIM + (NI - 1 - i), d = base + NI + NRIM + (NI - 2 - i);
      if (flip) idx.push(a, c, b, b, c, d);
      else idx.push(a, b, c, b, d, c);
    }
  };
  let base = (NU + 1) * ringV;
  if (capStart) { cap(base, false); base += capVerts; }
  if (capEnd) cap(base, true);
  g.setIndex(idx);
  g.userData = { NU, ringV, capStart, capEnd };
  return g;
}

export function createSlime(scene, route, quality) {
  const group = new THREE.Group();
  group.name = 'slime';
  const mats = createSlimeMaterials();
  const goo = createGooMaterial();
  const pieces = [];
  const ring = new Float32Array(RING_N * 3);
  const fr = {};
  const prTmp = {};

  // 透明な面は奥行きの前処理で一番手前の一層だけを描く(多層の半透明に頼らない)
  function buildPiece(i, NU) {
    const g = makePieceGeometry(NU, i === 0, i === PIECE_COUNT - 1);
    const mesh = new THREE.Mesh(g, mats.transparent);
    mesh.castShadow = true;
    mesh.receiveShadow = false;
    mesh.name = 'piece' + i;
    mesh.renderOrder = 6;
    const pre = new THREE.Mesh(g, mats.depth);
    pre.renderOrder = 5;
    pre.frustumCulled = false;
    mesh.userData.pre = pre;
    return mesh;
  }
  const NU_HIGH = 36, NU_LOW = 24;
  for (let i = 0; i < PIECE_COUNT; i++) {
    const mesh = buildPiece(i, NU_HIGH);
    group.add(mesh, mesh.userData.pre);
    pieces.push({ mesh, sig: '', NU: NU_HIGH, opaque: false });
  }

  // 片ごとの局所状態(イージング済み)と接続点で共有する硬化値
  const ease = [];
  const J = new Array(PIECE_COUNT + 1).fill(0);
  function computeJoints(st, sideProgOverride) {
    for (let i = 0; i < PIECE_COUNT; i++) {
      const pc = st.pieces[i];
      const sp = sideProgOverride ? sideProgOverride[i] : pc.sideProg;
      ease[i] = sideEase({ sideProg: sp, sideKind: pc.sideKind });
    }
    for (let k = 0; k <= PIECE_COUNT; k++) {
      const a = k > 0 ? rawCure(ease[k - 1], 1, [st.slots[2 * (k - 1)].u, st.slots[2 * (k - 1) + 1].u]) : null;
      const b = k < PIECE_COUNT ? rawCure(ease[k], 0, [st.slots[2 * k].u, st.slots[2 * k + 1].u]) : null;
      J[k] = a === null ? b : b === null ? a : 0.5 * (a + b);
    }
  }
  function profile(st, i, u, out) {
    const su = [st.slots[2 * i].u, st.slots[2 * i + 1].u];
    return profileAt(ease[i], u, J[i], J[i + 1], route.clearanceAt(i, u), out, su);
  }

  function writePiece(st, i, tilt, flowOn) {
    const P = pieces[i];
    const g = P.mesh.geometry;
    const { NU, ringV, capStart, capEnd } = g.userData;
    const pos = g.attributes.position.array, uv = g.attributes.uv.array, info = g.attributes.aInfo.array;
    const pc = route.pieces[i];
    let v = 0;
    const writeRing = (u, asCap) => {
      route.frame(i, u, tilt, fr);
      const pr = profile(st, i, u, prTmp);
      ringPoints(pr, ring);
      const cnt = asCap ? RING_N : RING_N + 1;
      let acc = 0;
      for (let j = 0; j < cnt; j++) {
        const jj = j % RING_N;
        const x = ring[jj * 3], y = ring[jj * 3 + 1], type = ring[jj * 3 + 2];
        pos[v * 3] = fr.x + fr.sx * x + fr.ux * y;
        pos[v * 3 + 1] = fr.y + fr.sy * x + fr.uy * y;
        pos[v * 3 + 2] = fr.z + fr.sz * x + fr.uz * y;
        if (j > 0) acc += Math.hypot(x - ring[((j - 1) % RING_N) * 3], y - ring[((j - 1) % RING_N) * 3 + 1]);
        uv[v * 2] = pc.s0 + pc.len * u;
        uv[v * 2 + 1] = acc;
        info[v * 4] = pr.c;
        info[v * 4 + 1] = type;
        info[v * 4 + 2] = pc.s0 + pc.len * u;
        info[v * 4 + 3] = flowOn ? pr.c : 0;
        v++;
      }
    };
    for (let k = 0; k <= NU; k++) writeRing(k / NU, false);
    if (capStart) writeRing(0, true);
    if (capEnd) writeRing(1, true);
    g.attributes.position.needsUpdate = true;
    g.attributes.uv.needsUpdate = true;
    g.attributes.aInfo.needsUpdate = true;
    g.computeVertexNormals();
    g.computeBoundingSphere();
  }

  // ---------- 貼付くぼみ(丸いくぼみ+穴に対応する小さな粒) ----------
  const dimpleGeo = (() => {
    // タグの大きな丸印と同じ大きさの丸いくぼみ、丸穴と同じ位置・大きさの粒
    const ringG = new THREE.TorusGeometry(TAG_MARK_R, 0.02, 6, 20);
    const disc = new THREE.CircleGeometry(TAG_MARK_R - 0.012, 20);
    disc.translate(0, 0, -0.014);
    const bead = new THREE.SphereGeometry(TAG_HOLE_R * 0.95, 8, 6);
    bead.scale(1, 1, 0.9);
    bead.translate(TAG_HOLE_OFFSET, 0, 0.006);
    const beadRing = new THREE.TorusGeometry(TAG_HOLE_R + 0.012, 0.008, 4, 12);
    beadRing.translate(TAG_HOLE_OFFSET, 0, 0.0);
    const parts = [ringG, disc, bead, beadRing].map((p) => p.toNonIndexed());
    const cols = [[0.86, 0.9, 0.7], [0.55, 0.6, 0.42], [0.9, 0.93, 0.78], [0.8, 0.85, 0.66]];
    let n = 0;
    for (const p of parts) n += p.attributes.position.count;
    const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), col = new Float32Array(n * 3);
    let o = 0;
    parts.forEach((p, k) => {
      pos.set(p.attributes.position.array, o * 3);
      nor.set(p.attributes.normal.array, o * 3);
      for (let i = 0; i < p.attributes.position.count; i++) col.set(cols[k], (o + i) * 3);
      o += p.attributes.position.count;
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    return g;
  })();
  const dimpleMat = new THREE.MeshPhysicalMaterial({
    vertexColors: true, roughness: 0.05, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 1.4,
    emissive: new THREE.Color(0xfff4c8), emissiveIntensity: 0,
  });
  // 脈打ちの強さを個別に(インスタンス色で明るさを変える)
  const dimples = new THREE.InstancedMesh(dimpleGeo, dimpleMat, SLOT_COUNT);
  dimples.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  dimples.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(SLOT_COUNT * 3).fill(1), 3);
  dimples.frustumCulled = false;
  dimples.renderOrder = 3;
  group.add(dimples);

  // ---------- 垂れ(雫) ----------
  const dripGeo = (() => {
    const pts = [];
    for (let k = 0; k <= 12; k++) {
      const t = k / 12; // 0 上 → 1 下
      const r = t < 0.7 ? 0.32 + 0.1 * Math.sin(t * 4) - t * 0.25 : 0.42 * Math.sqrt(Math.max(0, 1 - Math.pow((t - 0.82) / 0.18, 2)));
      pts.push(new THREE.Vector2(Math.max(0.001, r), -t));
    }
    const g = new THREE.LatheGeometry(pts, 10);
    return g;
  })();
  const DRIPS = PIECE_COUNT * 2;
  const drips = new THREE.InstancedMesh(dripGeo, goo, DRIPS);
  drips.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  drips.frustumCulled = false;
  drips.castShadow = false;
  group.add(drips);

  // ---------- 天井の三か所の柔らかい垂れ(付け根) ----------
  const rootGeo = (() => {
    const pts = [];
    for (let k = 0; k <= 20; k++) {
      const t = k / 20;
      let r = 0.42 * Math.pow(1 - t, 1.6) + 0.07;
      if (t > 0.72) r = Math.max(0.001, 0.16 * Math.sqrt(Math.max(0, 1 - Math.pow((t - 0.84) / 0.16, 2))));
      pts.push(new THREE.Vector2(r, -t));
    }
    return new THREE.LatheGeometry(pts, 16);
  })();
  const roots = new THREE.InstancedMesh(rootGeo, goo, ROOTS.length);
  roots.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  roots.castShadow = true;
  roots.frustumCulled = false;
  group.add(roots);
  const ROOT_LEN = 0.85;

  // ---------- 糸(付け根から接続点へ、乗り場の吊り糸) ----------
  const threadList = [];
  ROOTS.forEach((r, ri) => r.conns.forEach((k) => threadList.push({ root: ri, conn: k })));
  threadList.push({ pod: true });
  const threadGeo = new THREE.CylinderGeometry(1, 1, 1, 8, 1, true);
  threadGeo.translate(0, 0.5, 0);
  const threads = new THREE.InstancedMesh(threadGeo, goo, threadList.length);
  threads.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  threads.frustumCulled = false;
  group.add(threads);

  // ---------- 接続点の結び目 ----------
  const knotGeo = new THREE.SphereGeometry(1, 10, 8);
  const knots = new THREE.InstancedMesh(knotGeo, goo, PIECE_COUNT + 1);
  knots.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  knots.frustumCulled = false;
  group.add(knots);

  // ---------- 始点の丸い乗り場 ----------
  const podGeo = (() => {
    const pts = [];
    pts.push(new THREE.Vector2(0.001, -0.3));
    for (let k = 0; k <= 12; k++) {
      const a = (k / 12) * Math.PI * 0.5;
      pts.push(new THREE.Vector2(0.58 * Math.sin(a), -0.3 * Math.cos(a)));
    }
    // 縁の玉
    for (let k = 0; k <= 8; k++) {
      const a = Math.PI * (1 - k / 8);
      pts.push(new THREE.Vector2(0.58 + 0.04 + 0.05 * Math.cos(a) * -1, 0.05 * Math.sin(a)));
    }
    for (let k = 0; k <= 12; k++) {
      const a = (1 - k / 12) * Math.PI * 0.5;
      pts.push(new THREE.Vector2(Math.max(0.001, 0.52 * Math.sin(a)), -0.24 * Math.cos(a)));
    }
    return new THREE.LatheGeometry(pts, 24);
  })();
  const podMat = new THREE.MeshPhysicalMaterial({
    color: 0xc8cc98, roughness: 0.05, clearcoat: 1, clearcoatRoughness: 0.03, transparent: true, opacity: 0.9, envMapIntensity: 1.3,
  });
  const pod = new THREE.Mesh(podGeo, podMat);
  pod.castShadow = true;
  pod.renderOrder = 6;
  group.add(pod);

  // ---------- 横道(細い溝) ----------
  const SP_NU = 14;
  const sideMeshes = SIDE_PATHS.map(() => {
    const m = new THREE.Mesh(makePieceGeometry(SP_NU, false, false), mats.transparent);
    m.renderOrder = 6;
    m.castShadow = false;
    m.visible = false;
    const pre = new THREE.Mesh(m.geometry, mats.depth);
    pre.renderOrder = 5;
    pre.frustumCulled = false;
    m.userData.pre = pre;
    group.add(m, pre);
    return m;
  });
  let sideSig = '';

  scene.add(group);

  // ---------- 状態の反映 ----------
  const slotWorld = [];
  for (let s = 0; s < SLOT_COUNT; s++) slotWorld.push({ p: new THREE.Vector3(), n: new THREE.Vector3(), t: new THREE.Vector3(), q: new THREE.Quaternion(), radius: 0.11 });
  const sideSign = new Array(SLOT_COUNT).fill(1);
  const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpS = new THREE.Vector3(), tmpP = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  const basis = new THREE.Matrix4();

  function setSideSigns(signs) { for (let s = 0; s < SLOT_COUNT; s++) sideSign[s] = signs[s]; }

  function slotPose(st, s, tilt, out) {
    const sl = st.slots[s];
    const i = sl.piece;
    route.frame(i, sl.u, tilt, fr);
    const pr = profile(st, i, sl.u, prTmp);
    const l = slotLocal(pr, sideSign[s]);
    out.p.set(fr.x + fr.sx * l.x + fr.ux * l.y, fr.y + fr.sy * l.x + fr.uy * l.y, fr.z + fr.sz * l.x + fr.uz * l.y);
    out.n.set(fr.sx * l.nx + fr.ux * l.ny, fr.sy * l.nx + fr.uy * l.ny, fr.sz * l.nx + fr.uz * l.ny).normalize();
    out.t.set(fr.tx, fr.ty, fr.tz);
    return out;
  }

  // 玉の位置(内側の底)
  function ballPosition(st, piece, u, tilt, out) {
    route.frame(piece, u, tilt, fr);
    const pr = profile(st, piece, u, prTmp);
    const y = -pr.D + BALL_R + 0.004;
    out.set(fr.x + fr.ux * y, fr.y + fr.uy * y, fr.z + fr.uz * y);
    return out;
  }
  // 滑走する少女の位置(溝の底)と向き
  function ridePose(st, piece, u, tilt, out) {
    route.frame(piece, u, tilt, fr);
    const pr = profile(st, piece, u, prTmp);
    const y = -pr.D + 0.02;
    out.p.set(fr.x + fr.ux * y, fr.y + fr.uy * y, fr.z + fr.uz * y);
    out.t.set(fr.tx, fr.ty, fr.tz);
    out.u.set(fr.ux, fr.uy, fr.uz);
    out.s.set(fr.sx, fr.sy, fr.sz);
    return out;
  }
  function connWorld(k, tilt) {
    const f = route.connPoint(k, tilt);
    return new THREE.Vector3(f.x, f.y, f.z);
  }
  function podCenter(st, tilt, drop, out) {
    const f = route.connPoint(0, tilt);
    const top = tmpP.set(f.x - f.tx * 0.62, f.y - 0.12, f.z - f.tz * 0.62);
    const floor = new THREE.Vector3(POD_FLOOR.x, 0.32, POD_FLOOR.z);
    const e = drop;
    out.lerpVectors(top, floor, e);
    out.x += Math.sin(e * Math.PI) * 0.35;
    return out;
  }

  let qualityLevel = 0;
  function setQuality(level) {
    if (level === qualityLevel) return;
    qualityLevel = level;
    // 低品質では遠い片から細分を減らす(形・操作対象は保つ)
    for (let i = 0; i < PIECE_COUNT; i++) {
      const P = pieces[i];
      const want = level >= 2 && P.far ? NU_LOW : NU_HIGH;
      if (want !== P.NU) {
        P.mesh.geometry.dispose();
        P.mesh.geometry = makePieceGeometry(want, i === 0, i === PIECE_COUNT - 1);
        P.mesh.userData.pre.geometry = P.mesh.geometry;
        P.NU = want;
        P.sig = '';
      }
    }
  }

  // カメラからの距離で、遠い片は淡い不透明材質へ
  function updateFade(camera) {
    const cp = camera.position;
    for (let i = 0; i < PIECE_COUNT; i++) {
      const P = pieces[i];
      let near = Infinity;
      for (let k = 0; k <= 8; k++) {
        const f = route.frame(i, k / 8, null);
        near = Math.min(near, Math.hypot(f.x - cp.x, f.y - cp.y, f.z - cp.z));
      }
      P.far = near > 26.5;
      const opaque = near > 27.2;
      if (opaque !== P.opaque) {
        P.opaque = opaque;
        P.mesh.material = opaque ? mats.opaque : mats.transparent;
        P.mesh.renderOrder = opaque ? 0 : 6;
        P.mesh.userData.pre.visible = !opaque;
      }
    }
  }

  const pulseCol = new THREE.Color();
  function update(st, view, time) {
    const tilt = view.tilt;
    computeJoints(st, view.sideProg);
    // 片の形(変化があった時だけ作り直す)
    for (let i = 0; i < PIECE_COUNT; i++) {
      const P = pieces[i];
      const pc = st.pieces[i];
      const flowOn = pc.support === 2 && (pc.linkPrev || pc.linkNext);
      const sig = [ease[i][0], ease[i][1], J[i], J[i + 1], tilt[i], tilt[i + 1], flowOn ? 1 : 0, P.NU].map((x) => (typeof x === 'number' ? x.toFixed(4) : x)).join(',');
      if (sig !== P.sig) {
        writePiece(st, i, tilt, flowOn);
        P.sig = sig;
      }
    }
    // くぼみ
    const sel = st.selected >= 0 || view.dragging;
    let nDim = 0; // 見える(空いている)くぼみだけを描画数に詰める
    for (let s = 0; s < SLOT_COUNT; s++) {
      const W = slotPose(st, s, tilt, slotWorld[s]);
      const sl = st.slots[s];
      const open = sl.tag < 0;
      let scale = open ? 1 : 0.0001;
      let glow = 0;
      if (open && sel) {
        // 貼れるくぼみがゆっくり脈打つ
        const ph = Math.sin(time * 2.4 - s * 0.35);
        scale *= 1 + 0.16 * (0.5 + 0.5 * ph);
        glow = 0.35 + 0.35 * (0.5 + 0.5 * ph);
      }
      if (open && view.hintSlot === s) {
        const ph = view.hintPhase;
        scale *= 1 + 0.35 * ph;
        glow = Math.max(glow, 0.8 * ph);
      }
      if (open && view.snapSlot === s) { scale *= 1.35; glow = 1; }
      // 遠いくぼみも画面上で小さくなりすぎないように(見た目の最小の大きさ)
      if (open && view.pxPerM) {
        const px = 0.11 * view.pxPerM(W.p.distanceTo(view.camPos));
        const minPx = sel ? 13 : 9;
        if (px > 0 && px < minPx) scale *= minPx / px;
      }
      tmpQ.setFromUnitVectors(new THREE.Vector3(0, 0, 1), W.n);
      // くぼみの小さな粒を道の上流側へ向ける
      const tq = W.t.clone().projectOnPlane(W.n).normalize();
      const xAxis = new THREE.Vector3(1, 0, 0).applyQuaternion(tmpQ);
      const ang = Math.atan2(new THREE.Vector3().crossVectors(xAxis, tq).dot(W.n), xAxis.dot(tq));
      const q2 = new THREE.Quaternion().setFromAxisAngle(W.n, ang + Math.PI);
      tmpQ.premultiply(q2);
      W.q.copy(tmpQ);
      if (!open) continue;
      tmpM.compose(tmpP.copy(W.p).addScaledVector(W.n, 0.004), tmpQ, tmpS.set(scale, scale, scale));
      dimples.setMatrixAt(nDim, tmpM);
      pulseCol.setRGB(1 + glow * 0.9, 1 + glow * 0.8, 1 + glow * 0.3);
      dimples.setColorAt(nDim, pulseCol);
      nDim++;
    }
    dimples.count = nDim;
    dimples.instanceMatrix.needsUpdate = true;
    dimples.instanceColor.needsUpdate = true;
    dimpleMat.emissiveIntensity = 0.0;

    // 垂れ: 柔らかい片の底からぶら下がる
    const v3 = new THREE.Vector3();
    let nDrip = 0;
    for (let i = 0; i < PIECE_COUNT; i++) {
      const sg = sagInfo(ease[i]);
      for (let k = 0; k < 2; k++) {
        const u = clamp(sg.peak + (k === 0 ? -0.07 : 0.09), 0.05, 0.95);
        const pr = profile(st, i, u, prTmp);
        const soft = 1 - pr.c;
        route.frame(i, u, tilt, fr);
        const y = -pr.D - pr.wall + 0.01;
        v3.set(fr.x + fr.ux * y + fr.sx * (k ? 0.02 : -0.02), fr.y + fr.uy * y, fr.z + fr.uz * y + fr.sz * (k ? 0.02 : -0.02));
        const len = soft * (k === 0 ? 0.3 : 0.2) * (1 + 0.12 * Math.sin(time * 0.9 + i * 1.3 + k));
        const w = soft * (k === 0 ? 0.075 : 0.06);
        if (soft < 0.02) continue; // 固まった所には垂れが無い
        tmpM.compose(v3, tmpQ.identity(), tmpS.set(w, len, w));
        drips.setMatrixAt(nDrip++, tmpM);
      }
    }
    drips.count = nDrip;
    drips.instanceMatrix.needsUpdate = true;

    // 付け根(終幕で順に縮んで持ち上がる)
    ROOTS.forEach((r, ri) => {
      const pull = view.rootPull[ri];
      const wob = 1 + 0.03 * Math.sin(time * 0.7 + ri);
      tmpM.compose(tmpP.set(r.x, 8.0, r.z), tmpQ.identity(), tmpS.set(1 + pull * 0.15, ROOT_LEN * (1 - 0.32 * pull) * wob, 1 + pull * 0.15));
      roots.setMatrixAt(ri, tmpM);
    });
    roots.instanceMatrix.needsUpdate = true;

    // 糸
    const podC = podCenter(st, tilt, view.podDrop, new THREE.Vector3());
    threadList.forEach((th, k) => {
      let A, B, rad;
      if (th.pod) {
        const f = route.connPoint(0, tilt);
        A = new THREE.Vector3(f.x - f.tx * 0.62, f.y + 0.02, f.z - f.tz * 0.62);
        B = podC.clone().add(new THREE.Vector3(0, 0.05, 0));
        rad = 0.02 + 0.03 * (1 - view.podDrop);
        if (A.distanceTo(B) < 0.05) rad = 0.0001;
      } else {
        const r = ROOTS[th.root];
        const pull = view.rootPull[th.root];
        A = new THREE.Vector3(r.x, 8.0 - ROOT_LEN * (1 - 0.32 * pull) * 0.86, r.z);
        B = connWorld(th.conn, tilt);
        B.y += 0.02;
        rad = 0.014 * (1 - 0.25 * pull);
      }
      const d = new THREE.Vector3().subVectors(B, A);
      const L = d.length();
      tmpQ.setFromUnitVectors(up, d.clone().normalize());
      tmpM.compose(A, tmpQ, tmpS.set(rad, Math.max(L, 1e-4), rad));
      threads.setMatrixAt(k, tmpM);
    });
    threads.instanceMatrix.needsUpdate = true;

    // 結び目: 柔らかい接続点だけ見える
    let nKnot = 0;
    for (let k = 0; k <= PIECE_COUNT; k++) {
      const soft = 1 - J[k];
      if (soft < 0.02) continue;
      const c = connWorld(k, tilt);
      const r = 0.085 * soft;
      tmpM.compose(c.add(new THREE.Vector3(0, -0.04, 0)), tmpQ.identity(), tmpS.set(r * 1.1, r, r * 1.1));
      knots.setMatrixAt(nKnot++, tmpM);
    }
    knots.count = nKnot;
    knots.instanceMatrix.needsUpdate = true;

    // 乗り場
    pod.position.copy(podC);
    const c0 = st.pieces[0].support === 2 ? 1 : ease[0] ? Math.max(ease[0][0], ease[0][1]) * 0.5 : 0;
    podMat.color.setHex(0xc8cc98).lerp(new THREE.Color(0xd7eef0), c0);
    podMat.opacity = lerp(0.9, 0.55, c0);
    const sq = 1 + 0.06 * Math.sin(time * 1.1) * (1 - c0);
    pod.scale.set(sq, 1 / sq, sq);

    // 横道
    const sideState = st.sidePaths.map((s, i) => (view.sideGrow ? view.sideGrow[i] : s.grow));
    const ssig = sideState.map((x) => x.toFixed(3)).join(',') + '|' + tilt.map((x) => x.toFixed(3)).join(',');
    if (ssig !== sideSig) {
      writeSidePaths(sideState, tilt);
      sideSig = ssig;
    }
  }

  function writeSidePaths(grow, tilt) {
    const pr = { W: 0.3, D: 0.11, wall: 0.03, rim: 0.032, n: 2.4, k: 1, c: 1 };
    const A = new THREE.Vector3(), B = new THREE.Vector3(), P = new THREE.Vector3(), T = new THREE.Vector3(), S = new THREE.Vector3(), U = new THREE.Vector3();
    SIDE_PATHS.forEach((sp, idx) => {
      const mesh = sideMeshes[idx];
      const gr = grow[idx];
      mesh.visible = gr > 0.001;
      mesh.userData.pre.visible = mesh.visible;
      if (!mesh.visible) return;
      const g = mesh.geometry;
      const pos = g.attributes.position.array, uv = g.attributes.uv.array, info = g.attributes.aInfo.array;
      const fa = route.frame(sp.a.piece, sp.a.u, tilt);
      const fb = route.frame(sp.b.piece, sp.b.u, tilt);
      A.set(fa.x, fa.y - 0.1, fa.z);
      B.set(fb.x, fb.y - 0.1, fb.z);
      T.subVectors(B, A).normalize();
      S.set(-T.z, 0, T.x).normalize();
      U.crossVectors(S, T).normalize();
      let v = 0;
      for (let k = 0; k <= SP_NU; k++) {
        const t = (k / SP_NU) * gr;
        P.lerpVectors(A, B, t);
        P.y += 0.12 * Math.sin(Math.PI * t);
        // 伸びる先端は細く丸める
        const tipK = Math.min(1, (gr - t) / 0.08 + (gr >= 1 ? 1 : 0));
        const sc = Math.max(0.05, Math.min(1, gr * 4)) * (0.35 + 0.65 * Math.min(1, tipK));
        const prr = { ...pr, W: pr.W * sc, D: pr.D * sc, wall: pr.wall * sc, rim: pr.rim * sc };
        ringPoints(prr, ring);
        for (let j = 0; j <= RING_N; j++) {
          const jj = j % RING_N;
          const x = ring[jj * 3], y = ring[jj * 3 + 1];
          pos[v * 3] = P.x + S.x * x + U.x * y;
          pos[v * 3 + 1] = P.y + S.y * x + U.y * y;
          pos[v * 3 + 2] = P.z + S.z * x + U.z * y;
          uv[v * 2] = t * 3; uv[v * 2 + 1] = j / RING_N;
          info[v * 4] = 1; info[v * 4 + 1] = ring[jj * 3 + 2]; info[v * 4 + 2] = t * 3 + idx * 7; info[v * 4 + 3] = 0;
          v++;
        }
      }
      g.attributes.position.needsUpdate = true;
      g.attributes.uv.needsUpdate = true;
      g.attributes.aInfo.needsUpdate = true;
      g.computeVertexNormals();
      g.computeBoundingSphere();
    });
  }

  return {
    group, pieces, slotWorld, dimples, update, setSideSigns, ballPosition, ridePose, podCenter, connWorld, updateFade, setQuality,
    materials: mats,
  };
}
