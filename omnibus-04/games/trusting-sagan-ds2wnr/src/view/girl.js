// 少女(約1.1m)。部位ごとの簡素な立体を関節で動かす。頂点色の単一材質。
import * as THREE from 'three';
import { colorize, merge } from './geo.js';
import { blobTexture } from './textures.js';

const SKIN = 0xf1c7a6, DRESS = 0xc7342f, BLOUSE = 0xf5f1ea, HAIR = 0x3a2618, SOCK = 0xf2f0ea, SHOE = 0x6b1f1c, EYE = 0x1d1714, CHEEK = 0xe9a08e;

function sphere(r, x, y, z, color, sx = 1, sy = 1, sz = 1, ws = 16, hs = 12) {
  const g = new THREE.SphereGeometry(r, ws, hs);
  g.scale(sx, sy, sz);
  g.translate(x, y, z);
  return colorize(g.toNonIndexed(), color);
}
function capsule(r, len, x, y, z, color) {
  const g = new THREE.CapsuleGeometry(r, len, 6, 12);
  g.translate(x, y, z);
  return colorize(g.toNonIndexed(), color);
}

function buildParts() {
  // 頭(首の付け根を原点)
  const head = [];
  head.push(sphere(0.108, 0, 0.13, 0, SKIN, 1, 1.04, 1));
  head.push(sphere(0.012, 0.036, 0.145, 0.098, EYE));
  head.push(sphere(0.012, -0.036, 0.145, 0.098, EYE));
  head.push(sphere(0.02, 0.06, 0.11, 0.085, CHEEK, 1, 0.6, 0.4));
  head.push(sphere(0.02, -0.06, 0.11, 0.085, CHEEK, 1, 0.6, 0.4));
  head.push(sphere(0.016, 0, 0.12, 0.105, SKIN, 1, 0.8, 0.8));
  // 髪: おかっぱ(顔の前を空けた半球)+前髪+後ろの結び
  {
    const g = new THREE.SphereGeometry(0.119, 24, 14, Math.PI * 0.62, Math.PI * 1.76, 0, Math.PI * 0.64);
    g.translate(0, 0.14, -0.004);
    head.push(colorize(g.toNonIndexed(), HAIR));
    const bang = new THREE.SphereGeometry(0.118, 18, 8, -Math.PI * 0.42, Math.PI * 0.84, 0, Math.PI * 0.27);
    bang.translate(0, 0.142, 0.004);
    head.push(colorize(bang.toNonIndexed(), HAIR));
    head.push(sphere(0.045, 0.085, 0.13, -0.075, HAIR, 0.8, 1.2, 0.8));
    head.push(sphere(0.045, -0.085, 0.13, -0.075, HAIR, 0.8, 1.2, 0.8));
    head.push(sphere(0.018, 0.07, 0.16, -0.06, 0xf0c22e));
    head.push(sphere(0.018, -0.07, 0.16, -0.06, 0xf0c22e));
  }
  head.push(capsule(0.03, 0.04, 0, 0.02, 0, SKIN));
  // 胴(腰を原点)
  const torso = [];
  {
    const pts = [];
    const prof = [[0.001, 0.42], [0.08, 0.415], [0.095, 0.38], [0.085, 0.3], [0.078, 0.25], [0.1, 0.18], [0.14, 0.08], [0.19, -0.04], [0.2, -0.06], [0.001, -0.06]];
    for (const [r, y] of prof) pts.push(new THREE.Vector2(r, y));
    const g = new THREE.LatheGeometry(pts, 24);
    torso.push(colorize(g.toNonIndexed(), DRESS));
    // 襟
    const collar = new THREE.TorusGeometry(0.06, 0.018, 8, 20);
    collar.rotateX(Math.PI / 2);
    collar.translate(0, 0.405, 0.008);
    torso.push(colorize(collar.toNonIndexed(), BLOUSE));
    // ポケット
    torso.push(sphere(0.035, 0.07, 0.04, 0.15, 0xa82a26, 1, 0.8, 0.25));
  }
  // 腕(肩を原点、下へ垂れる)
  const arm = () => {
    const a = [];
    a.push(sphere(0.045, 0, -0.01, 0, BLOUSE, 1, 1, 1));
    a.push(capsule(0.028, 0.27, 0, -0.17, 0, SKIN));
    a.push(sphere(0.034, 0, -0.33, 0.005, SKIN, 0.9, 1.1, 0.8));
    return a;
  };
  // 脚(股関節を原点)
  const leg = () => {
    const a = [];
    a.push(capsule(0.036, 0.2, 0, -0.14, 0, SKIN));
    a.push(capsule(0.038, 0.1, 0, -0.33, 0, SOCK));
    a.push(sphere(0.05, 0, -0.42, 0.03, SHOE, 0.9, 0.6, 1.5));
    return a;
  };
  return { head: merge(head), torso: merge(torso), armL: merge(arm()), armR: merge(arm()), legL: merge(leg()), legR: merge(leg()) };
}

export function createGirl(scene) {
  const P = buildParts();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.72, metalness: 0, envMapIntensity: 0.7 });
  const root = new THREE.Group();
  root.name = 'girl';
  const hips = new THREE.Group();
  hips.position.set(0, 0.47, 0);
  root.add(hips);
  const upper = new THREE.Group();
  hips.add(upper);
  const torso = new THREE.Mesh(P.torso, mat);
  upper.add(torso);
  const neck = new THREE.Group();
  neck.position.set(0, 0.42, 0);
  upper.add(neck);
  const head = new THREE.Mesh(P.head, mat);
  neck.add(head);
  const shoulderL = new THREE.Group(), shoulderR = new THREE.Group();
  shoulderL.position.set(0.105, 0.37, 0);
  shoulderR.position.set(-0.105, 0.37, 0);
  upper.add(shoulderL, shoulderR);
  shoulderL.add(new THREE.Mesh(P.armL, mat));
  shoulderR.add(new THREE.Mesh(P.armR, mat));
  const hipL = new THREE.Group(), hipR = new THREE.Group();
  hipL.position.set(0.055, 0, 0);
  hipR.position.set(-0.055, 0, 0);
  hips.add(hipL, hipR);
  hipL.add(new THREE.Mesh(P.legL, mat));
  hipR.add(new THREE.Mesh(P.legR, mat));
  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  scene.add(root);

  const blob = new THREE.Mesh(
    new THREE.PlaneGeometry(0.75, 0.75).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.38, alphaMap: blobTexture(), depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 })
  );
  blob.renderOrder = 1;
  scene.add(blob);

  const handPos = new THREE.Vector3();
  const handQuat = new THREE.Quaternion();
  const tmpV = new THREE.Vector3();
  const pose = { sit: 0, look: 0, throwK: -1, pick: 0, walk: 0, armsUp: 0 };

  // st.girl と補間済みの値 g、乗り物の姿勢 ride を受け取る
  function update(gs, g, dt, time, ride) {
    // 目標の姿勢係数
    const want = { sit: 0, look: g.lookUp, pick: 0, walk: 0, armsUp: 0 };
    if (gs.pose === 'walk') want.walk = Math.min(1, gs.speed / 1.2);
    if (gs.pose === 'pick') want.pick = Math.sin(Math.min(1, gs.poseT / 0.38) * Math.PI);
    if (gs.pose === 'sit' || gs.pose === 'slide' || gs.pose === 'board') want.sit = gs.pose === 'board' ? Math.min(1, gs.poseT / 0.8) : 1;
    if (gs.pose === 'slide') want.armsUp = 0.6 + 0.4 * Math.min(1, (g.slideV || 0) / 3);
    if (gs.pose === 'look') { want.look = 1; want.armsUp = 0.25; }
    const k = Math.min(1, dt * 8);
    for (const key of ['sit', 'look', 'pick', 'walk', 'armsUp']) pose[key] += (want[key] - pose[key]) * (key === 'pick' ? 1 : k);
    pose.throwK = gs.pose === 'throw' ? Math.min(1, gs.poseT / 0.55) : -1;

    // 位置
    if (ride) {
      root.position.copy(ride.p);
      root.quaternion.copy(ride.q);
    } else {
      root.position.set(g.x, 0, g.z);
      root.quaternion.setFromAxisAngle(tmpV.set(0, 1, 0), g.rot);
    }
    const walkPh = g.walkPhase;
    const sw = Math.sin(walkPh) * pose.walk;
    // 体の上下動と呼吸
    hips.position.y = 0.47 + Math.abs(Math.cos(walkPh)) * 0.025 * pose.walk - pose.pick * 0.12 - pose.sit * 0.0;
    upper.rotation.x = pose.pick * 0.75 - pose.sit * 0.08 + 0.05 * pose.walk;
    upper.scale.y = 1 + 0.012 * Math.sin(time * 2.2);
    // 脚
    hipL.rotation.x = sw * 0.6 - pose.sit * 1.45 - pose.pick * 0.5;
    hipR.rotation.x = -sw * 0.6 - pose.sit * 1.45 - pose.pick * 0.5;
    hipL.rotation.z = pose.sit * 0.08; hipR.rotation.z = -pose.sit * 0.08;
    // 腕
    let aL = -sw * 0.5, aR = sw * 0.5;
    aL -= pose.pick * 0.9; aR -= pose.pick * 1.1;
    aL -= pose.armsUp * 2.3; aR -= pose.armsUp * 2.3;
    let zL = 0.12 + pose.armsUp * 0.35, zR = -0.12 - pose.armsUp * 0.35;
    if (pose.throwK >= 0) {
      // 右腕を後ろへ引いて、前上へふわりと振る
      const t = pose.throwK;
      aR = t < 0.45 ? (t / 0.45) * 0.9 : 0.9 - ((t - 0.45) / 0.55) * 3.3;
      upper.rotation.y = (t < 0.45 ? 1 : 1 - (t - 0.45) / 0.55) * 0.25;
    } else upper.rotation.y *= 0.8;
    if (gs.holding >= 0 && pose.throwK < 0) { aR = Math.min(aR, -0.9); zR = -0.25; aL = Math.min(aL, -0.6); }
    shoulderL.rotation.set(aL, 0, zL);
    shoulderR.rotation.set(aR, 0, zR);
    // 頭(見上げる)
    neck.rotation.x = -pose.look * 0.75 + pose.pick * 0.2;
    neck.rotation.y = Math.sin(time * 0.5) * 0.08 * (1 - pose.walk);

    root.updateMatrixWorld(true);
    // 手に持つタグの位置(右手の少し先)
    tmpV.set(0, -0.36, 0.06);
    shoulderR.localToWorld(handPos.copy(tmpV));
    handQuat.setFromRotationMatrix(shoulderR.matrixWorld);
    handQuat.multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, 0)));

    // 接地影
    blob.visible = !ride;
    blob.position.set(g.x, 0.004, g.z);
    blob.scale.setScalar(1 - pose.pick * 0.1);
  }

  return { root, update, handPos, handQuat };
}
