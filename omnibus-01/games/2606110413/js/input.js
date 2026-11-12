import * as THREE from 'three';
import { CONFIG } from './config.js';

// タップ → エイムアシスト → 発射指示
// 4歳児が「だいたい近くを押せば当たる」ことが最重要
export class Input {
  constructor(dom, camera, targetManager) {
    this.dom = dom;
    this.camera = camera;
    this.targets = targetManager;
    this.enabled = false;
    this.onFire = null; // (point, assistTarget) => void

    this.raycaster = new THREE.Raycaster();
    this.ndc = new THREE.Vector2();
    this.backPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 3.0); // z = -3 の見えない壁
    this.lastFireByPointer = new Map();
    this._predicted = new THREE.Vector3();
    this._screen = new THREE.Vector3();
    this._point = new THREE.Vector3();

    dom.addEventListener('pointerdown', (e) => this.handle(e));
  }

  handle(e) {
    if (!this.enabled || !this.onFire) return;
    e.preventDefault();

    // 1本の指ごとの連射クールダウン(両手連打はOK)
    const now = performance.now() / 1000;
    const last = this.lastFireByPointer.get(e.pointerId) || -1;
    if (now - last < CONFIG.shotCooldown) return;
    this.lastFireByPointer.set(e.pointerId, now);
    if (this.lastFireByPointer.size > 12) {
      // 古いポインタIDを掃除
      const oldest = this.lastFireByPointer.keys().next().value;
      this.lastFireByPointer.delete(oldest);
    }

    const rect = this.dom.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    this.ndc.set((px / rect.width) * 2 - 1, -(py / rect.height) * 2 + 1);

    // --- エイムアシスト ---
    // 飛行時間ぶん先の的の位置をスクリーンに投影し、タップに最も近い的へスナップ
    const diag = Math.hypot(rect.width, rect.height);
    const snapDist = diag * CONFIG.assistRadiusRatio;
    let best = null;
    let bestDist = snapDist;
    let bestPoint = null;
    for (const t of this.targets.aliveTargets()) {
      this._predicted.copy(t.position).addScaledVector(t.vel, CONFIG.flightTime);
      this._screen.copy(this._predicted).project(this.camera);
      if (this._screen.z > 1) continue; // カメラの後ろ
      const sx = (this._screen.x + 1) / 2 * rect.width;
      const sy = (1 - this._screen.y) / 2 * rect.height;
      const dScreen = Math.hypot(sx - px, sy - py);
      if (dScreen < bestDist) {
        bestDist = dScreen;
        best = t;
        bestPoint = this._predicted.clone();
      }
    }

    if (best) {
      this.onFire(bestPoint, best);
      return;
    }

    // アシスト対象なし: 奥の見えない壁との交点へ撃つ
    this.raycaster.setFromCamera(this.ndc, this.camera);
    const hit = this.raycaster.ray.intersectPlane(this.backPlane, this._point);
    if (hit) {
      hit.y = Math.max(hit.y, 0.8); // 地面を撃たないように
      this.onFire(hit.clone(), null);
    }
  }
}
