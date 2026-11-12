// 手荷物タグ18枚(インスタンス描画)と、画面下中央に大きく持ち上げる選択タグの立体模型
import * as THREE from 'three';
import { TAG_HOMES, TAG_COUNT, TAG_SIZE } from '../core/layout.js';
import { T as TIMING } from '../core/sim.js';
import { tagPrint, blobTexture } from './textures.js';

const W = TAG_SIZE.w, H = TAG_SIZE.h, TH = TAG_SIZE.t;
// 印字上の位置(タグの横幅 512px 基準)
const MARK_X = -W / 2 + (W * 250) / 512; // 大きな丸印の中心
const HOLE_X = -W / 2 + (W * 58) / 512; // 丸穴の中心
export const TAG_HOLE_OFFSET = HOLE_X - MARK_X; // ≈ -0.24
export const TAG_MARK_R = (W * 74) / 512;
export const TAG_HOLE_R = 0.026;

function tagGeometry() {
  const s = new THREE.Shape();
  const x0 = -W / 2, x1 = W / 2, y0 = -H / 2, y1 = H / 2, r = 0.035, ch = 0.075;
  // 穴側(左)は角を落とした形
  s.moveTo(x0 + ch, y0);
  s.lineTo(x1 - r, y0);
  s.quadraticCurveTo(x1, y0, x1, y0 + r);
  s.lineTo(x1, y1 - r);
  s.quadraticCurveTo(x1, y1, x1 - r, y1);
  s.lineTo(x0 + ch, y1);
  s.quadraticCurveTo(x0 + ch * 0.25, y1 - ch * 0.2, x0, y1 - ch);
  s.lineTo(x0, y0 + ch);
  s.quadraticCurveTo(x0 + ch * 0.25, y0 + ch * 0.2, x0 + ch, y0);
  const hole = new THREE.Path();
  hole.absarc(HOLE_X, 0, TAG_HOLE_R, 0, Math.PI * 2, true);
  s.holes.push(hole);
  const g = new THREE.ExtrudeGeometry(s, { depth: TH, bevelEnabled: true, bevelThickness: 0.003, bevelSize: 0.003, bevelSegments: 1, curveSegments: 8 });
  g.translate(-MARK_X, 0, -TH / 2);
  // UV: 表は印字、裏は無地、側面は縁の色
  const pos = g.attributes.position, nor = g.attributes.normal, uv = g.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    const nz = nor.getZ(i);
    if (nz > 0.6) uv.setXY(i, (pos.getX(i) + MARK_X + W / 2) / W, (pos.getY(i) + H / 2) / H);
    else if (nz < -0.6) uv.setXY(i, 0.66, 0.07);
    else uv.setXY(i, 0.995, 0.5);
  }
  g.clearGroups();
  g.computeBoundingSphere();
  return g;
}

export function createTags(scene, renderer) {
  const geo = tagGeometry();
  const print = tagPrint();
  const mat = new THREE.MeshStandardMaterial({ map: print, roughness: 0.55, metalness: 0, envMapIntensity: 0.8 });
  const mesh = new THREE.InstancedMesh(geo, mat, TAG_COUNT);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  mesh.name = 'tags';
  scene.add(mesh);

  // 床の接地影
  const blob = blobTexture();
  const shadowGeo = new THREE.PlaneGeometry(W * 1.25, H * 1.6).rotateX(-Math.PI / 2);
  const shadows = new THREE.InstancedMesh(shadowGeo, new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32, alphaMap: blob, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 }), TAG_COUNT);
  shadows.frustumCulled = false;
  shadows.renderOrder = 1;
  scene.add(shadows);

  // 選択・誘導の光る輪(床)
  const ringGeo = new THREE.RingGeometry(0.36, 0.44, 40).rotateX(-Math.PI / 2);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xfff1c0, transparent: true, opacity: 0.0, depthWrite: false });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.renderOrder = 1;
  scene.add(ring);

  // ---------- 画面下中央の立体模型 ----------
  const ovScene = new THREE.Scene();
  const ovCam = new THREE.PerspectiveCamera(28, 1, 0.1, 20);
  ovCam.position.set(0, 0, 5);
  const ovMesh = new THREE.Mesh(geo, mat);
  ovMesh.visible = false;
  ovScene.add(ovMesh);
  const ovLight = new THREE.DirectionalLight(0xffffff, 2.2);
  ovLight.position.set(-1.5, 2.5, 3);
  ovScene.add(ovLight, new THREE.AmbientLight(0xffffff, 0.6));
  const overlay = {
    visible: false, k: 0, cx: 0, cy: 0, sizePx: 150, drag: null, ret: 0, tag: -1,
  };

  const tmpM = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), p = new THREE.Vector3(), sc = new THREE.Vector3(1, 1, 1);
  const flat = new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0));
  const yq = new THREE.Quaternion();
  const ax = new THREE.Vector3(0, 1, 0);

  const tiltAxis = new THREE.Vector3(), tq = new THREE.Quaternion();
  function homePose(id, lift, tiltAmt, out) {
    const h = TAG_HOMES[id];
    yq.setFromAxisAngle(ax, h.rot);
    out.q.copy(yq).multiply(flat);
    const ca = Math.cos(h.rot), sa = -Math.sin(h.rot); // タグの長手方向(穴 → 反対端)
    if (tiltAmt) {
      // 穴側の端を支点に、反対端が軽く起き上がる
      tiltAxis.set(Math.sin(h.rot), 0, Math.cos(h.rot));
      tq.setFromAxisAngle(tiltAxis, tiltAmt);
      out.q.premultiply(tq);
      const r = W / 2;
      out.p.set(h.x - ca * r + ca * r * Math.cos(tiltAmt), TH / 2 + 0.004 + lift + r * Math.sin(tiltAmt), h.z - sa * r + sa * r * Math.cos(tiltAmt));
      return out;
    }
    out.p.set(h.x, TH / 2 + 0.004 + lift, h.z);
    return out;
  }
  const poseA = { p: new THREE.Vector3(), q: new THREE.Quaternion() };
  const poseB = { p: new THREE.Vector3(), q: new THREE.Quaternion() };

  // view = 補間済みの見た目情報、ctx = 少女の手やくぼみの位置
  function update(st, view, ctx, time) {
    let ringTarget = -1, ringK = 0;
    for (let id = 0; id < TAG_COUNT; id++) {
      const tag = st.tags[id];
      const carry = tag.carry;
      let shadowK = 0;
      if (carry === 'home') {
        let lift = 0, tilt = 0;
        if (view.hintTag === id) { lift = 0.03 * view.hintPhase; tilt = 0.6 * view.hintPhase; }
        if (tag.state === 'selected') { lift = 0.03 + 0.02 * Math.sin(time * 4); ringTarget = id; ringK = 1; }
        homePose(id, lift, tilt, poseA);
        shadowK = 1 - lift * 4;
        if (view.hintTag === id) { ringTarget = id; ringK = Math.max(ringK, view.hintPhase); }
      } else if (carry === 'hands') {
        poseA.p.copy(ctx.handPos);
        poseA.q.copy(ctx.handQuat);
      } else if (carry === 'hopback') {
        homePose(id, 0, 0, poseB);
        const k = view.carryT[id];
        const from = tag.hop ? tag.hop.from : poseB.p;
        poseA.p.set(from.x + (poseB.p.x - from.x) * k, from.y + (poseB.p.y - from.y) * k + Math.sin(k * Math.PI) * 0.45, from.z + (poseB.p.z - from.z) * k);
        poseA.q.copy(ctx.handQuat).slerp(poseB.q, k);
      } else if (carry === 'flight') {
        const f = st.flights.find((fl) => fl.tag === id);
        const slotPose = ctx.slotPose(tag.slot);
        const k = view.carryT[id];
        const from = f ? f.from : slotPose.p;
        const to = slotPose.p;
        // ふわりと弧を描いて飛ぶ(終盤はゆっくり)
        const ke = 1 - Math.pow(1 - k, 1.6);
        const peak = Math.max(from.y, to.y) + 0.9;
        const y = (1 - ke) * (1 - ke) * from.y + 2 * (1 - ke) * ke * peak + ke * ke * to.y;
        poseA.p.set(from.x + (to.x - from.x) * ke, y, from.z + (to.z - from.z) * ke);
        e.set(k * 5.5, k * 2.1, Math.sin(k * 9) * 0.4);
        poseB.q.setFromEuler(e);
        poseA.q.copy(poseB.q).slerp(slotPose.q, Math.pow(k, 2.5));
      } else if (carry === 'stuck') {
        const sp = ctx.slotPose(tag.slot);
        poseA.p.copy(sp.p).addScaledVector(sp.n, 0.014);
        poseA.q.copy(sp.q);
        // 貼った瞬間に少しめり込んで止まる
        const age = st.t - st.slots[tag.slot].stuckAt;
        const squash = age < 0.3 ? 1 + 0.12 * Math.sin((age / 0.3) * Math.PI) : 1;
        sc.set(squash, squash, 1);
      }
      tmpM.compose(poseA.p, poseA.q, carry === 'stuck' ? sc : sc.set(1, 1, 1));
      sc.set(1, 1, 1);
      mesh.setMatrixAt(id, tmpM);
      // 接地影
      const hz = TAG_HOMES[id];
      tmpM.compose(p.set(carry === 'home' ? hz.x : 0, 0.003, carry === 'home' ? hz.z : -100), yq.setFromAxisAngle(ax, hz.rot), sc.set(Math.max(0.0001, shadowK), 1, Math.max(0.0001, shadowK)));
      sc.set(1, 1, 1);
      shadows.setMatrixAt(id, tmpM);
    }
    mesh.instanceMatrix.needsUpdate = true;
    shadows.instanceMatrix.needsUpdate = true;
    if (ringTarget >= 0) {
      const h = TAG_HOMES[ringTarget];
      ring.position.set(h.x, 0.006, h.z);
      ring.scale.setScalar(1 + 0.08 * Math.sin(time * 3));
      ringMat.opacity = 0.5 * ringK;
      ring.visible = true;
    } else ring.visible = false;
  }

  // 模型: 選択された時に下から持ち上がる。ドラッグ中は指に付いてくる
  function updateOverlay(st, dt, time, screen) {
    const sel = st.selected;
    const want = sel >= 0 || overlay.drag;
    overlay.k += ((want ? 1 : 0) - overlay.k) * Math.min(1, dt * 9);
    if (sel >= 0) overlay.tag = sel;
    overlay.visible = overlay.k > 0.01 && overlay.tag >= 0;
    ovMesh.visible = overlay.visible;
    const base = overlayAnchor(screen);
    overlay.cx = base.x; overlay.cy = base.y; overlay.sizePx = base.size;
    let tx = base.x, ty = base.y + (1 - overlay.k) * base.size * 0.9;
    if (overlay.drag) { tx = overlay.drag.x; ty = overlay.drag.y; overlay.ret = 1; }
    else if (overlay.ret > 0) {
      overlay.ret = Math.max(0, overlay.ret - dt * 4);
    }
    overlay.sx = overlay.sx === undefined ? tx : overlay.sx + (tx - overlay.sx) * Math.min(1, dt * (overlay.drag ? 30 : 10));
    overlay.sy = overlay.sy === undefined ? ty : overlay.sy + (ty - overlay.sy) * Math.min(1, dt * (overlay.drag ? 30 : 10));
    // 画面座標 → 模型カメラの空間
    ovCam.aspect = screen.w / screen.h;
    ovCam.updateProjectionMatrix();
    const ndcX = (overlay.sx / screen.w) * 2 - 1, ndcY = -(overlay.sy / screen.h) * 2 + 1;
    const dist = 5;
    const hh = Math.tan((ovCam.fov * Math.PI) / 360) * dist;
    ovMesh.position.set(ndcX * hh * ovCam.aspect, ndcY * hh, 0);
    const worldPerPx = (2 * hh) / screen.h;
    const scale = (base.size * worldPerPx) / W * (overlay.drag ? 0.75 : 1) * (0.6 + 0.4 * overlay.k);
    ovMesh.scale.setScalar(scale);
    ovMesh.rotation.set(-0.35 + Math.sin(time * 1.1) * 0.12, Math.sin(time * 0.8) * 0.45, Math.sin(time * 0.6) * 0.06);
  }
  function overlayAnchor(screen) {
    const size = Math.min(230, Math.max(150, Math.min(screen.w, screen.h) * 0.24));
    return { x: screen.w / 2, y: screen.h - Math.min(120, screen.h * 0.12), size };
  }
  function renderOverlay(r) {
    if (!overlay.visible) return;
    r.autoClear = false;
    r.clearDepth();
    r.render(ovScene, ovCam);
    r.autoClear = true;
  }

  return {
    mesh, update, updateOverlay, renderOverlay, overlay, overlayAnchor, ovScene,
    setEnvironment(env) { ovScene.environment = env; },
  };
}

export { TIMING };
