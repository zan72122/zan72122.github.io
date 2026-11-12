import * as THREE from 'three';
import { CONFIG } from './config.js';

const CC = CONFIG.camera;

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// カメラ演出の合成。毎フレーム
//   位置 = ショット補間 + 呼吸揺れ + シェイク
//   注視 = ショット補間 + シェイク*0.5
//   FOV  = 基本FOV + フィーバーズーム
// を組み立てる。すべて4歳児が酔わない控えめな量に調整済み(config)。
export class CameraDirector {
  constructor(camera) {
    this.camera = camera;
    this.baseFov = CC.fov;

    const v = (a) => new THREE.Vector3(...a);
    this.shots = {
      play: { pos: v(CC.pos), look: v(CC.look) },
      sweep: { pos: v(CC.sweepFrom.pos), look: v(CC.sweepFrom.look) },
      finale: { pos: v(CC.finale.pos), look: v(CC.finale.look) },
    };

    // 現在値(補間の出発点は常に現在値 → 途中で切り替えてもジャンプしない)
    this.pos = v(CC.pos);
    this.look = v(CC.look);
    this.fromPos = this.pos.clone();
    this.fromLook = this.look.clone();
    this.toPos = this.pos.clone();
    this.toLook = this.look.clone();
    this.transT = 1;
    this.transDur = 1;
    this.ease = easeInOutCubic;

    // フィーバーズーム(FOV)
    this.fovOffset = 0;
    this.fovTarget = 0;

    // trauma式シェイク(連打しても発散しない)
    this.trauma = 0;

    this._finalPos = new THREE.Vector3();
    this._finalLook = new THREE.Vector3();
  }

  // 'sweep' はスイープ開始位置へジャンプしてから定位置へ、他は現在値から補間
  setShot(name) {
    if (name === 'sweep') {
      this.pos.copy(this.shots.sweep.pos);
      this.look.copy(this.shots.sweep.look);
      this.fromPos.copy(this.pos);
      this.fromLook.copy(this.look);
      this.toPos.copy(this.shots.play.pos);
      this.toLook.copy(this.shots.play.look);
      this.transDur = CC.sweepDuration;
      this.ease = easeInOutCubic;
    } else {
      const shot = this.shots[name] || this.shots.play;
      this.fromPos.copy(this.pos);
      this.fromLook.copy(this.look);
      this.toPos.copy(shot.pos);
      this.toLook.copy(shot.look);
      this.transDur = name === 'finale' ? CC.finaleDuration : 0.8;
      this.ease = easeInOutCubic;
    }
    this.transT = 0;
  }

  setFever(on) {
    this.fovTarget = on ? CC.feverFovDelta : 0;
  }

  shake(strength) {
    this.trauma = Math.min(1, this.trauma + strength);
  }

  setBaseFov(fov) {
    this.baseFov = fov;
  }

  update(t, dt) {
    // ショット補間
    if (this.transT < 1) {
      this.transT = Math.min(1, this.transT + dt / this.transDur);
      const k = this.ease(this.transT);
      this.pos.lerpVectors(this.fromPos, this.toPos, k);
      this.look.lerpVectors(this.fromLook, this.toLook, k);
    }

    // フィーバーズーム(0.9秒で滑らかに)
    const fovSpeed = Math.abs(CC.feverFovDelta) / CC.feverZoomDuration;
    if (this.fovOffset < this.fovTarget) {
      this.fovOffset = Math.min(this.fovTarget, this.fovOffset + fovSpeed * dt);
    } else if (this.fovOffset > this.fovTarget) {
      this.fovOffset = Math.max(this.fovTarget, this.fovOffset - fovSpeed * dt);
    }

    // シェイク減衰
    this.trauma = Math.max(0, this.trauma - CC.shakeDecay * dt);
    const sh = this.trauma * this.trauma * CC.shakeAmp;
    const shX = Math.sin(t * 37) * sh;
    const shY = Math.sin(t * 43 + 1.7) * sh;

    // 合成(呼吸揺れは従来のまま)
    this._finalPos.copy(this.pos);
    this._finalPos.x += Math.sin(t * 0.4) * 0.12 + shX;
    this._finalPos.y += Math.sin(t * 0.7) * 0.07 + shY;
    this._finalLook.copy(this.look);
    this._finalLook.x += shX * 0.5;
    this._finalLook.y += shY * 0.5;

    this.camera.position.copy(this._finalPos);
    this.camera.lookAt(this._finalLook);

    const fov = this.baseFov + this.fovOffset;
    if (Math.abs(this.camera.fov - fov) > 0.01) {
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
    }
  }
}
