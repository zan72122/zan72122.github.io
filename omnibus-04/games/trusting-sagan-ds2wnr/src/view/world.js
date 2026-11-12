// 見た目の組み立て。ゲーム状態(固定刻み)を補間して描画し、入力のための画面上の位置も提供する。
import * as THREE from 'three';
import { PIECE_COUNT, SLOT_COUNT, globalToPiece } from '../core/route.js';
import { TAG_HOMES, TAG_COUNT, TAG_SIZE, POD_FLOOR } from '../core/layout.js';
import { slotSideSign } from '../core/keypoints.js';
import { createEnvironment, createLights } from './environment.js';
import { createTerminal } from './terminal.js';
import { createSnail } from './snail.js';
import { createSlime } from './slime.js';
import { createTags } from './tags.js';
import { createGirl } from './girl.js';
import { createBalls } from './balls.js';
import { createCameraRig } from './camera.js';
import { shared } from './materials.js';

// 補間に使う値を取り出す
export function capture(st, route, out) {
  const o = out || { balls: [], sideProg: [], carryT: new Float32Array(TAG_COUNT), tilt: new Float32Array(PIECE_COUNT + 1), rootPull: new Float32Array(3), sideGrow: new Float32Array(st.sidePaths.length) };
  o.t = st.t;
  const g = st.girl;
  o.gx = g.x; o.gz = g.z; o.grot = g.rot; o.gwalk = g.walkPhase; o.glook = g.lookUp; o.gslide = g.slideS;
  for (let i = 0; i < st.balls.length; i++) {
    const b = st.balls[i];
    const S = route.pieces[b.piece].s0 + b.u * route.pieces[b.piece].len;
    o.balls[i] = o.balls[i] || {};
    o.balls[i].S = S; o.balls[i].scale = b.scale; o.balls[i].mode = b.mode;
  }
  for (let i = 0; i < PIECE_COUNT; i++) {
    o.sideProg[i] = o.sideProg[i] || [0, 0];
    o.sideProg[i][0] = st.pieces[i].sideProg[0];
    o.sideProg[i][1] = st.pieces[i].sideProg[1];
  }
  for (let i = 0; i < TAG_COUNT; i++) o.carryT[i] = st.tags[i].carryT;
  for (let k = 0; k <= PIECE_COUNT; k++) o.tilt[k] = st.tilt[k];
  for (let r = 0; r < 3; r++) o.rootPull[r] = st.rootPull[r];
  for (let i = 0; i < st.sidePaths.length; i++) o.sideGrow[i] = st.sidePaths[i].grow;
  o.podDrop = st.pod.drop;
  o.snailD = st.snail.d; o.snailTurn = st.snail.turnT; o.snailAfter = st.snail.after; o.snailMode = st.snail.mode;
  return o;
}

const lerpN = (a, b, t) => a + (b - a) * t;
function lerpAngle(a, b, t) {
  let d = b - a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}

export function createWorld(renderer, route, opts = {}) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xb8c4cc);
  const envRT = createEnvironment(renderer);
  scene.environment = envRT.texture;
  const lights = createLights(scene);
  const terminal = createTerminal(scene);
  const snail = createSnail(scene);
  const slime = createSlime(scene, route);
  const tags = createTags(scene, renderer);
  tags.setEnvironment(envRT.texture);
  const girl = createGirl(scene);
  const balls = createBalls(scene, PIECE_COUNT);
  const rig = createCameraRig(route);
  const camera = rig.camera;

  // くぼみはカメラ側へ向ける(横長の基準カメラで一度決める)
  rig.resize(1180, 820);
  const signs = [];
  for (let s = 0; s < SLOT_COUNT; s++) signs.push(slotSideSign(route, s, camera.position.toArray()));
  slime.setSideSigns(signs);

  const view = {
    tilt: new Float32Array(PIECE_COUNT + 1), rootPull: new Float32Array(3), podDrop: 0,
    sideProg: [], carryT: new Float32Array(TAG_COUNT), sideGrow: new Float32Array(3),
    hintTag: -1, hintSlot: -1, hintPhase: 0, snapSlot: -1, dragging: false,
  };
  for (let i = 0; i < PIECE_COUNT; i++) view.sideProg.push([0, 0]);
  const gi = { x: 0, z: 0, rot: 0, walkPhase: 0, lookUp: 0, slideS: -1, slideV: 0 };
  const snailI = { d: 0, turnT: 0, after: 0, mode: 'walk' };
  const tmpV = new THREE.Vector3(), tmpV2 = new THREE.Vector3();
  const ride = { p: new THREE.Vector3(), q: new THREE.Quaternion() };
  const rp = { p: new THREE.Vector3(), t: new THREE.Vector3(), u: new THREE.Vector3(), s: new THREE.Vector3() };
  const basis = new THREE.Matrix4();
  let shadowFrame = 0;
  let shadowEvery = 1;
  let snailEvery = 1, frameNo = 0, sizeH = 820;

  function slotPose(s) {
    return slime.slotWorld[s];
  }
  const tagCtx = { handPos: girl.handPos, handQuat: girl.handQuat, slotPose };

  function ridePoseAtS(st, S, out) {
    const { i, u } = globalToPiece(route, S);
    slime.ridePose(st, i, u, view.tilt, rp);
    const Z = rp.t.clone().normalize();
    const Y = rp.u.clone().normalize();
    const X = new THREE.Vector3().crossVectors(Y, Z).normalize();
    basis.makeBasis(X, Y, Z);
    out.q.setFromRotationMatrix(basis);
    out.p.copy(rp.p).addScaledVector(Y, -0.43);
    return out;
  }
  function podSeat(st, out) {
    const c = slime.podCenter(st, view.tilt, view.podDrop, tmpV);
    const f = route.connPoint(0, view.tilt);
    out.p.set(c.x, c.y - 0.2 - 0.47, c.z);
    out.q.setFromAxisAngle(tmpV2.set(0, 1, 0), Math.atan2(f.tx, f.tz));
    return out;
  }

  function update(st, prev, cur, alpha, dt, time) {
    shared.uTime.value = time;
    // 補間
    for (let k = 0; k <= PIECE_COUNT; k++) view.tilt[k] = lerpN(prev.tilt[k], cur.tilt[k], alpha);
    for (let r = 0; r < 3; r++) view.rootPull[r] = lerpN(prev.rootPull[r], cur.rootPull[r], alpha);
    view.podDrop = lerpN(prev.podDrop, cur.podDrop, alpha);
    for (let i = 0; i < PIECE_COUNT; i++) {
      view.sideProg[i][0] = lerpN(prev.sideProg[i][0], cur.sideProg[i][0], alpha);
      view.sideProg[i][1] = lerpN(prev.sideProg[i][1], cur.sideProg[i][1], alpha);
    }
    for (let i = 0; i < TAG_COUNT; i++) view.carryT[i] = cur.carryT[i] < prev.carryT[i] ? cur.carryT[i] : lerpN(prev.carryT[i], cur.carryT[i], alpha);
    for (let i = 0; i < view.sideGrow.length; i++) view.sideGrow[i] = lerpN(prev.sideGrow[i], cur.sideGrow[i], alpha);
    gi.x = lerpN(prev.gx, cur.gx, alpha); gi.z = lerpN(prev.gz, cur.gz, alpha);
    gi.rot = lerpAngle(prev.grot, cur.grot, alpha);
    gi.walkPhase = lerpN(prev.gwalk, cur.gwalk, alpha);
    gi.lookUp = lerpN(prev.glook, cur.glook, alpha);
    gi.slideS = prev.gslide >= 0 && cur.gslide >= 0 ? lerpN(prev.gslide, cur.gslide, alpha) : cur.gslide;
    gi.slideV = st.girl.slideV || 0;
    snailI.d = lerpN(prev.snailD, cur.snailD, alpha);
    snailI.turnT = lerpN(prev.snailTurn, cur.snailTurn, alpha);
    snailI.after = lerpN(prev.snailAfter, cur.snailAfter, alpha);
    snailI.mode = cur.snailMode;

    // 誘導: 床のタグ一枚と近くのくぼみが同じリズムで呼応
    if (st.hint.active) {
      const ht = time - (opts.hintTimeBase ? opts.hintTimeBase() : 0);
      const ph = 0.5 - 0.5 * Math.cos(((st.t - st.hint.t0) / 1.5) * Math.PI * 2);
      view.hintTag = st.hint.tag; view.hintSlot = st.hint.slot; view.hintPhase = ph;
      void ht;
    } else { view.hintTag = -1; view.hintSlot = -1; view.hintPhase = 0; }

    frameNo++;
    if (frameNo % snailEvery === 0 || dt === 0) snail.update(snailI, time, dt * snailEvery);
    view.camPos = camera.position;
    view.pxPerM = (d) => pxPerMeter(d, sizeH);
    slime.update(st, view, time);

    // 少女
    let rideP = null;
    const fs = st.finale ? st.finale.stage : null;
    if (gi.slideS >= 0) {
      ridePoseAtS(st, Math.max(0, gi.slideS), ride);
      if (gi.slideS < 0.7) {
        const seat = podSeat(st, { p: new THREE.Vector3(), q: new THREE.Quaternion() });
        const k = gi.slideS / 0.7;
        const e = k * k * (3 - 2 * k);
        ride.p.lerpVectors(seat.p, ride.p, e);
        ride.q.slerpQuaternions(seat.q, ride.q, e);
      }
      rideP = ride;
    } else if (fs === 'turn' || fs === 'lift' || (fs === 'board' && st.girl.ride)) {
      podSeat(st, ride);
      if (fs === 'board') {
        const k = st.girl.ride.k;
        const stand = { p: new THREE.Vector3(gi.x, 0, gi.z), q: new THREE.Quaternion().setFromAxisAngle(tmpV2.set(0, 1, 0), gi.rot) };
        const p = new THREE.Vector3().lerpVectors(stand.p, ride.p, k);
        p.y += Math.sin(k * Math.PI) * 0.35;
        ride.p.copy(p);
        ride.q.slerpQuaternions(stand.q, ride.q, k);
      }
      rideP = ride;
    }
    girl.update(st.girl, gi, dt, time, rideP);

    // タグ
    tags.update(st, view, tagCtx, time);

    // 玉
    const pb = prev.balls, cb = cur.balls;
    balls.update(st.balls, (b, out) => {
      const i = b.id;
      let S = cb[i].S;
      if (pb[i] && pb[i].mode !== 'pop' && cb[i].mode !== 'spawn' && Math.abs(cb[i].S - pb[i].S) < 1) S = lerpN(pb[i].S, cb[i].S, alpha);
      const { i: pi, u } = globalToPiece(route, S);
      slime.ballPosition(st, pi, u, view.tilt, out);
      return out;
    }, time);

    // カメラ(滑走中だけ緩く追う)
    let followPoint = null;
    if (fs === 'slide' && gi.slideS >= 0) followPoint = girl.root.position.clone().add(tmpV.set(0, 0.6, 0));
    rig.update(dt, followPoint);
    slime.updateFade(camera);
  }

  function render(r) {
    shadowFrame++;
    r.shadowMap.needsUpdate = shadowFrame % shadowEvery === 0;
    r.render(scene, camera);
  }

  // ---------- 入力用: 画面上の位置(CSS px) ----------
  const proj = new THREE.Vector3();
  function toScreen(p, w, h, out) {
    proj.copy(p).project(camera);
    out.x = (proj.x + 1) * 0.5 * w;
    out.y = (1 - proj.y) * 0.5 * h;
    out.depth = proj.z;
    out.dist = p.distanceTo(camera.position);
    return out;
  }
  function pxPerMeter(dist, h) {
    return h / (2 * Math.tan((camera.fov * Math.PI) / 360) * dist);
  }
  function screenSlots(w, h) {
    const out = [];
    for (let s = 0; s < SLOT_COUNT; s++) {
      const W = slime.slotWorld[s];
      const o = toScreen(W.p, w, h, {});
      o.id = s;
      o.visR = 0.11 * pxPerMeter(o.dist, h);
      out.push(o);
    }
    return out;
  }
  const tagWorld = new THREE.Vector3();
  function screenTags(w, h) {
    const out = [];
    for (let id = 0; id < TAG_COUNT; id++) {
      const hm = TAG_HOMES[id];
      tagWorld.set(hm.x, 0.02, hm.z);
      const o = toScreen(tagWorld, w, h, {});
      o.id = id;
      o.visR = (TAG_SIZE.w / 2) * pxPerMeter(o.dist, h);
      out.push(o);
    }
    return out;
  }
  function setShadowEvery(n) { shadowEvery = n; }
  function setSnailEvery(n) { snailEvery = Math.max(1, n | 0); }
  function rebuildEnvironment() {
    const rt = createEnvironment(renderer);
    scene.environment = rt.texture;
    tags.setEnvironment(rt.texture);
  }

  return {
    scene, camera, rig, renderer, slime, snail, tags, girl, balls, view, lights,
    update, render, screenSlots, screenTags, toScreen, setShadowEvery, setSnailEvery, rebuildEnvironment,
    resize(w, h) { rig.resize(w, h); sizeH = h; },
  };
}
