// 映画的なカメラリグ: ショット関数 + 滑らかな追従 + 縦横比に合わせた構図
import * as THREE from '../vendor/three.module.min.js';
import { damp, dampV3, clamp } from './util.js';

const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler(0, 0, 0, 'YXZ');
const _w1 = new THREE.Vector3(), _w2 = new THREE.Vector3();

export class CameraRig {
  constructor(G) {
    this.G = G;
    this.cam = new THREE.PerspectiveCamera(55, 1, 0.03, 9000);
    this.pos = new THREE.Vector3(0, 1.4, 5);
    this.target = new THREE.Vector3(0, 0.6, 0);
    this.fov = 55;
    this.roll = 0;
    this.want = { pos: new THREE.Vector3(), target: new THREE.Vector3(), fov: 55, lp: 2.2, lt: 3.0, roll: 0, look: true };
    this.shotFn = null;
    this.look = { yaw: 0, pitch: 0, vy: 0, vp: 0, held: false, max: 0.5 };
    this.shake = 0;
    this.time = 0;
    this.aspect = 1;
    this.breath = 1;
  }
  setAspect(a) { this.aspect = a; this.cam.aspect = a; }

  // 被写体 (中心, 半幅, 半高) が画面に収まる距離
  fitDistance(halfW, halfH, fov = this.want.fov) {
    const v = THREE.MathUtils.degToRad(fov) / 2;
    const h = Math.atan(Math.tan(v) * this.aspect);
    return Math.max(halfH / Math.tan(v), halfW / Math.tan(h));
  }
  // 縦長かどうか (0=横長 1=縦長)
  get portrait() { return clamp((1.1 - this.aspect) / 0.55); }

  setShot(fn, cut = false) {
    this.shotFn = fn;
    if (cut) { this.evalShot(0); this.setFrame(this.want.frame || null); this.pos.copy(this.want.pos); this.target.copy(this.want.target); this.fov = this.want.fov; this.roll = this.want.roll; }
  }
  evalShot(dt) {
    if (!this.shotFn) return;
    const w = this.want;
    w.lp = 2.2; w.lt = 3.0; w.roll = 0; w.look = true; w.frame = null;
    this.shotFn(w, dt, this);
  }

  // 位置と注視点は「枠」(動く花など) のローカル座標で滑らかに追う
  setFrame(frame) {
    if (frame === this.frame) return;
    const wp = this.toWorld(this.pos.clone()), wt = this.toWorld(this.target.clone());
    this.frame = frame || null;
    this.pos.copy(this.toLocal(wp)); this.target.copy(this.toLocal(wt));
  }
  toWorld(v) { if (this.frame) { this.frame.updateMatrixWorld(); return this.frame.localToWorld(v); } return v; }
  toLocal(v) { if (this.frame) { this.frame.updateMatrixWorld(); return this.frame.worldToLocal(v); } return v; }

  update(dt) {
    this.time += dt;
    this.evalShot(dt);
    const w = this.want;
    this.setFrame(w.frame || null);
    if (w.cut) { this.pos.copy(w.pos); this.target.copy(w.target); this.fov = w.fov; w.cut = false; }
    dampV3(this.pos, w.pos, w.lp, dt);
    dampV3(this.target, w.target, w.lt, dt);
    this.fov = damp(this.fov, w.fov, 2.0, dt);
    this.roll = damp(this.roll, w.roll, 2.0, dt);
    // 自由な見回し (指を離すとゆっくり戻る)
    const L = this.look;
    if (!L.held || !w.look) {
      L.yaw = damp(L.yaw, 0, 1.4, dt); L.pitch = damp(L.pitch, 0, 1.4, dt);
    }
    const cam = this.cam;
    const wpos = this.toWorld(_w1.copy(this.pos));
    const wtar = this.toWorld(_w2.copy(this.target));
    cam.position.copy(wpos);
    // 手持ちの揺れ
    const t = this.time;
    const hand = 0.004 * this.breath;
    _v.set(Math.sin(t * 0.7) * hand + Math.sin(t * 1.9) * hand * 0.4, Math.sin(t * 0.9 + 1) * hand, 0);
    cam.lookAt(wtar);
    _e.setFromQuaternion(cam.quaternion);
    _e.y += L.yaw + _v.x; _e.x += L.pitch + _v.y;
    _e.x = clamp(_e.x, -1.55, 1.55);
    _e.z += this.roll;
    if (this.shake > 0) {
      _e.x += (Math.random() - 0.5) * this.shake * 0.02; _e.y += (Math.random() - 0.5) * this.shake * 0.02;
      this.shake = Math.max(0, this.shake - dt * 3);
    }
    cam.quaternion.setFromEuler(_e);
    if (Math.abs(cam.fov - this.fov) > 0.01) { cam.fov = this.fov; }
    cam.updateProjectionMatrix();
    cam.updateMatrixWorld();
  }

  dragLook(dx, dy) {
    const L = this.look;
    if (!this.want.look) return;
    const k = THREE.MathUtils.degToRad(this.fov) / Math.max(1, this.G.viewH);
    L.yaw = clamp(L.yaw + dx * k * 0.9, -L.max, L.max);
    L.pitch = clamp(L.pitch + dy * k * 0.9, -L.max * 0.7, L.max * 0.7);
  }
}
