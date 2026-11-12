// camera.js — 三人称追従カメラ
// ヨー回転(Q/E・ドラッグ)、exp補間のスムース追従、遮蔽時の距離短縮、地面クランプ
import * as THREE from 'three';

const _look = new THREE.Vector3();
const _ideal = new THREE.Vector3();
const _dir = new THREE.Vector3();
const _ray = new THREE.Raycaster();

const DIST = 7.5;
const HEIGHT = 3.0;
const TURN_SPEED = 2.4;
const DRAG_SPEED = 0.0045;

export class FollowCam {
  constructor(camera, groundHeightFn) {
    this.camera = camera;
    this.yaw = Math.PI; // プレイヤーの初期向き(-Z)の後ろから
    this.curDist = DIST;
    this.pos = new THREE.Vector3();
    this.target = new THREE.Vector3();
    this.groundHeight = groundHeightFn;
    this.initialized = false;
  }

  // orbit=true のときは入力を無視してゆっくり回る(タイトル画面用)
  update(dt, focus, input, occluders, orbit = false) {
    if (orbit) {
      this.yaw += 0.15 * dt;
    } else {
      this.yaw -= input.camTurn * TURN_SPEED * dt;
      this.yaw -= input.camDragX * DRAG_SPEED;
      input.camDragX = 0; // 消費(サブステップでの二重適用を防ぐ)
    }

    if (!this.initialized) this.target.copy(focus);
    this.target.lerp(focus, 1 - Math.exp(-10 * dt));
    _look.set(this.target.x, this.target.y + 1.2, this.target.z);

    const sx = Math.sin(this.yaw);
    const cz = Math.cos(this.yaw);

    // 遮蔽チェック: 注視点 → 理想カメラ位置
    _ideal.set(_look.x - sx * DIST, _look.y + HEIGHT, _look.z - cz * DIST);
    _dir.subVectors(_ideal, _look);
    const len = _dir.length();
    _dir.divideScalar(len);
    let want = DIST;
    if (occluders && occluders.length) {
      _ray.set(_look, _dir);
      _ray.far = len;
      const hits = _ray.intersectObjects(occluders, false);
      if (hits.length) want = Math.max(2, DIST * (hits[0].distance / len) * 0.9);
    }
    this.curDist += (want - this.curDist) * (1 - Math.exp(-8 * dt));

    const k = this.curDist / DIST;
    _ideal.set(
      _look.x - sx * this.curDist,
      _look.y + HEIGHT * (0.4 + 0.6 * k),
      _look.z - cz * this.curDist
    );
    // 地面より下に潜らない
    const gy = this.groundHeight(_ideal.x, _ideal.z) + 0.5;
    if (_ideal.y < gy) _ideal.y = gy;

    if (!this.initialized) {
      this.pos.copy(_ideal);
      this.initialized = true;
    }
    this.pos.lerp(_ideal, 1 - Math.exp(-6 * dt));
    this.camera.position.copy(this.pos);
    this.camera.lookAt(_look);
  }
}
