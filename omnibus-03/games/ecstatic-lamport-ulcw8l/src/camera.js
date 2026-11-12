/**
 * camera.js — カメラ演出。
 * 「高さの恐怖」「落下の加速」「入水の一点」をカメラの仕事で伝える。
 */

import * as THREE from 'three';
import { STATE } from './player.js';

export class CameraRig {
  constructor(camera) {
    this.cam = camera;
    this.pos = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.shakeAmt = 0;
    this.fov = 58;
    this.side = 1;
    this._tmp = new THREE.Vector3();
    this._tmp2 = new THREE.Vector3();
    this.orbit = 0;
    this.initialized = false;
    this.frameScale = 1;   // 縦持ちで横視野が狭くなる分、引いて構図を保つ
  }

  /** 画面比に応じて引きの量を決める。縦長ほど遠ざける。 */
  setAspect(aspect) {
    this.frameScale = Math.min(1.75, Math.max(1, 1.3 / Math.max(0.35, aspect)));
  }

  shake(a) { this.shakeAmt = Math.min(2.4, this.shakeAmt + a); }

  reset(player) {
    const d = player.pos;
    this.pos.set(d.x + 7 * this.side, d.y + 2.2, d.z + 6.5);
    this.look.copy(d);
    this.initialized = true;
    this.orbit = 0;
  }

  /** dtReal はスローモーションの影響を受けない実時間。カメラは実時間で動かす。 */
  update(dtReal, player, world) {
    if (!this.initialized) this.reset(player);
    const d = player.pos;
    const wp = world.takeoff;
    let want = this._tmp, look = this._tmp2;
    let posK = 6, lookK = 7, fovT = 58;

    if (player.state === STATE.READY || player.state === STATE.CHARGE) {
      // ほぼ真横から。足元の水面まで入れて「高さ」を体で感じさせる。
      this.orbit += dtReal * 0.14;
      const sw = Math.sin(this.orbit * 0.7);
      want.set(d.x + (8.4 + sw * 0.8) * this.side, d.y + 1.6 + Math.min(3.5, d.y * 0.06), d.z + 1.4 + sw * 1.8);
      look.set(d.x, d.y - Math.min(6.5, 1.2 + d.y * 0.16), d.z + 2.2);
      posK = 2.4; lookK = 2.4;
      fovT = 58 + Math.min(14, wp.y * 0.2);
    } else if (player.state === STATE.AIR) {
      const slow = player.slowMo;
      const speed = Math.min(1, Math.abs(player.vel.y) / 34);
      const dist = 6.4 + speed * 2.2 - slow * 2.4;
      const hgt = 1.0 - speed * 0.5;
      want.set(d.x + dist * this.side, d.y + hgt, d.z + 3.0 + speed * 1.2 - slow * 0.4);
      // 水面が近づくほど、視線を着水点へ寄せていく
      const gap = Math.max(0, player.heightAboveWater);
      const t = THREE.MathUtils.clamp(1 - gap / 18, 0, 1);
      look.set(d.x, d.y - t * 1.2, d.z + 0.4 + t * 0.8);
      posK = 9 - slow * 4; lookK = 10 - slow * 4;
      fovT = 58 + speed * 12 - slow * 22;
    } else if (player.state === STATE.SPLASH) {
      // 着水点を中心に構える。波紋と浮き上がりが両方入る高さ。
      const e = player.entryPoint || d;
      want.set(e.x + 6.2 * this.side, 3.6, e.z + 4.8);
      look.set(e.x, 0.25, e.z + 0.3);
      posK = 3.0; lookK = 3.4;
      fovT = 52;
    } else {
      this.orbit += dtReal * 0.3;
      const e = player.entryPoint || d;
      want.set(e.x + Math.cos(this.orbit) * 7.5 * this.side, 3.8, e.z + Math.sin(this.orbit) * 7.5 + 1.5);
      look.set(e.x, 0.3, e.z);
      posK = 1.8; lookK = 2.2;
      fovT = 55;
    }

    // 縦長画面では被写体が枠から外れやすいので、横オフセットと距離を広げる
    const fs = this.frameScale;
    if (fs > 1.001) {
      want.x = look.x + (want.x - look.x) * fs;
      want.z = look.z + (want.z - look.z) * fs;
      want.y = look.y + (want.y - look.y) * (1 + (fs - 1) * 0.6);
    }
    const a = 1 - Math.exp(-posK * dtReal);
    const b = 1 - Math.exp(-lookK * dtReal);
    this.pos.lerp(want, a);
    this.look.lerp(look, b);
    this.fov += (fovT - this.fov) * (1 - Math.exp(-5 * dtReal));

    this.shakeAmt *= Math.exp(-7 * dtReal);
    const s = this.shakeAmt;
    this.cam.position.set(
      this.pos.x + (Math.random() - 0.5) * s,
      this.pos.y + (Math.random() - 0.5) * s,
      this.pos.z + (Math.random() - 0.5) * s);
    this.cam.lookAt(this.look);
    if (Math.abs(this.cam.fov - this.fov) > 0.01) {
      this.cam.fov = this.fov;
      this.cam.updateProjectionMatrix();
    }
  }
}
