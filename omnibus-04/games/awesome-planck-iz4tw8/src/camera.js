// Long-lens "street photographer" camera. Frames a region of the gameplay plane,
// adapting yaw/fov to portrait (iPhone) or landscape (iPad).
import * as THREE from 'three';

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export class CameraRig {
  constructor() {
    this.cam = new THREE.PerspectiveCamera(26, 1, 0.3, 2500);
    this.focus = new THREE.Vector3(0, 3, 0);
    this.goal = new THREE.Vector3(0, 3, 0);
    this.size = new THREE.Vector2(20, 10);      // region to fit (w along x, h along y)
    this.goalSize = new THREE.Vector2(20, 10);
    this.vel = new THREE.Vector3();
    this.t = 0;
    this.shake = 0;
    this.aspect = 1;
    this.extraDist = 0;
    this.yawBias = 0;
  }
  setAspect(a) {
    this.aspect = a;
    const k = clamp((a - 0.6) / (1.4 - 0.6), 0, 1); // 0 = portrait, 1 = landscape
    this.k = k;
    this.cam.fov = lerp(44, 27, k);
    this.yaw = THREE.MathUtils.degToRad(lerp(36, 24, k));
    this.pitch = THREE.MathUtils.degToRad(lerp(8.5, 10, k));
    this.cam.aspect = a;
    this.cam.updateProjectionMatrix();
  }
  // region: center + size (world meters in the gameplay plane)
  frame(cx, cy, w, h) {
    this.goal.set(cx, cy, 0);
    this.goalSize.set(w, h);
  }
  snap() { this.focus.copy(this.goal); this.size.copy(this.goalSize); }
  update(dt) {
    this.t += dt;
    const s = 1 - Math.exp(-dt * 2.2);
    this.focus.lerp(this.goal, s);
    this.size.lerp(this.goalSize, 1 - Math.exp(-dt * 1.4));
    const yaw = this.yaw + this.yawBias, pitch = this.pitch;
    const fovV = THREE.MathUtils.degToRad(this.cam.fov);
    const fovH = 2 * Math.atan(Math.tan(fovV / 2) * this.aspect);
    const dW = (this.size.x * Math.cos(yaw) * 0.5 + 1.5 * Math.sin(yaw)) / Math.tan(fovH / 2);
    const dH = (this.size.y * 0.5) / Math.tan(fovV / 2);
    const dist = Math.max(dW, dH, 14) + this.extraDist;
    const back = new THREE.Vector3(-Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch));
    const pos = this.focus.clone().addScaledVector(back, dist);
    pos.y = Math.max(pos.y, 1.2);
    // hand-held micro sway
    const sw = 0.0022 + this.shake * 0.02;
    const tx = Math.sin(this.t * 0.61) * 0.6 + Math.sin(this.t * 1.37) * 0.4;
    const ty = Math.sin(this.t * 0.47 + 1.0) * 0.6 + Math.sin(this.t * 1.13 + 2.0) * 0.4;
    this.cam.position.copy(pos);
    this.cam.lookAt(this.focus);
    this.cam.rotateY(tx * sw); this.cam.rotateX(ty * sw);
    if (this.shake > 0) {
      this.cam.rotateZ((Math.random() - 0.5) * this.shake * 0.01);
      this.shake = Math.max(0, this.shake - dt * 2.5);
    }
    this.dist = dist;
  }
  // world point -> gameplay plane via screen ray (ndc x,y)
  pickPlane(nx, ny) {
    const ray = new THREE.Raycaster();
    ray.setFromCamera(new THREE.Vector2(nx, ny), this.cam);
    const o = ray.ray.origin, d = ray.ray.direction;
    const t = (0 - o.z) / d.z;
    return new THREE.Vector3(o.x + d.x * t, o.y + d.y * t, 0);
  }
}
