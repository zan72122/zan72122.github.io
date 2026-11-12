// 透視投影の斜め前カメラ。操作中は固定し、滑走中だけ少女を緩く追う(急回転しない)
import * as THREE from 'three';
import { fitCamera, cameraOptions } from '../core/camfit.js';
import { framingPoints } from '../core/keypoints.js';

export function createCameraRig(route) {
  const camera = new THREE.PerspectiveCamera(38, 1, 0.5, 120);
  const keys = framingPoints(route);
  const base = { pos: new THREE.Vector3(), target: new THREE.Vector3(), fov: 38 };
  const follow = { k: 0, target: new THREE.Vector3(), smoothT: new THREE.Vector3(), vel: new THREE.Vector3(), init: false };
  const curTarget = new THREE.Vector3();
  function resize(w, h) {
    const aspect = w / h;
    const fit = fitCamera(aspect, keys, cameraOptions(aspect));
    base.pos.fromArray(fit.pos);
    base.target.fromArray(fit.target);
    base.fov = fit.fov;
    camera.aspect = aspect;
    camera.fov = fit.fov;
    camera.position.copy(base.pos);
    camera.lookAt(base.target);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld(); // 描画前でも判定用の投影が最新になるように
    curTarget.copy(base.target);
    follow.init = false;
  }
  // followPoint: 追う点(無ければ基準へ戻る)
  let override = null;
  function setOverride(o) { override = o; }
  function update(dt, followPoint) {
    if (override) {
      camera.position.set(override[0], override[1], override[2]);
      camera.lookAt(override[3], override[4], override[5]);
      if (override[6] && camera.fov !== override[6]) { camera.fov = override[6]; camera.updateProjectionMatrix(); }
      camera.updateMatrixWorld();
      return;
    }
    if (camera.fov !== base.fov) { camera.fov = base.fov; camera.updateProjectionMatrix(); }
    const want = followPoint ? 1 : 0;
    follow.k += (want - follow.k) * Math.min(1, dt * 0.8);
    if (followPoint) {
      if (!follow.init) { follow.smoothT.copy(followPoint); follow.init = true; }
      // 臨界減衰に近い追従(時定数 約1秒)
      const w = 2.2;
      const a = new THREE.Vector3().subVectors(followPoint, follow.smoothT).multiplyScalar(w * w).addScaledVector(follow.vel, -2 * w);
      follow.vel.addScaledVector(a, Math.min(dt, 0.05));
      follow.smoothT.addScaledVector(follow.vel, Math.min(dt, 0.05));
    }
    const k = follow.k * follow.k * (3 - 2 * follow.k);
    // 注視点は基準と少女の間(少女寄り 45%)、位置は平行移動を弱めて回転を小さく保つ
    const tgt = new THREE.Vector3().lerpVectors(base.target, follow.smoothT, 0.45 * k);
    const shift = new THREE.Vector3().subVectors(tgt, base.target);
    const pos = base.pos.clone().addScaledVector(shift, 0.7);
    // 少し寄る
    const dir = new THREE.Vector3().subVectors(tgt, pos);
    pos.addScaledVector(dir, 0.18 * k);
    camera.position.copy(pos);
    curTarget.copy(tgt);
    camera.lookAt(curTarget);
    camera.updateMatrixWorld();
  }
  return { camera, resize, update, base, follow, setOverride };
}
