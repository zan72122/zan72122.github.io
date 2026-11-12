// Camera rig: shots are described as a world-space box that must stay
// readable; distance is solved per aspect so phone portrait and tablet
// landscape each get a deliberate composition instead of a scaled one.
import * as THREE from 'three';
import { damp, clamp } from './util.js';

export class CameraRig {
  constructor(camera) {
    this.cam = camera; this.focus = new THREE.Vector3(-7, 1.5, 0); this.dist = 16; this.az = -0.28; this.el = 0.26;
    this.shot = { center: new THREE.Vector3(-7, 1.5, 0), w: 14, h: 9, az: -0.28, el: 0.26 };
    this.rate = 1.6; this.shakeAmp = 0; this.t = 0; this.aspect = 1; this.portrait = false;
    this._c = new THREE.Vector3(); this._off = new THREE.Vector3();
  }
  setShot(shot, rate = 1.6) { this.shot = { ...this.shot, ...shot }; this.rate = rate; }
  cut() { this.update(10, true); }
  shake(a) { this.shakeAmp = Math.min(0.6, this.shakeAmp + a); }
  resize(aspect) { this.aspect = aspect; this.portrait = aspect < 0.95; this.cam.aspect = aspect; this.cam.fov = this.portrait ? 46 : 38; this.cam.updateProjectionMatrix(); }

  update(dt, snap = false) {
    this.t += dt;
    const s = this.shot, P = this.portrait;
    const c = typeof s.center === 'function' ? s.center() : s.center;
    this._c.copy(c);
    if (P && s.pOffset) this._c.add(s.pOffset);
    const w = (P ? s.wP : s.w) ?? s.w, h = (P ? s.hP : s.h) ?? s.h;
    const tanH = Math.tan((this.cam.fov * Math.PI) / 360);
    const need = Math.max(h / (2 * tanH), w / (2 * tanH * this.aspect));
    const az = (P ? s.azP : s.az) ?? s.az, el = (P ? s.elP : s.el) ?? s.el;
    const r = snap ? 100 : this.rate;
    this.focus.x = damp(this.focus.x, this._c.x, r, dt); this.focus.y = damp(this.focus.y, this._c.y, r, dt); this.focus.z = damp(this.focus.z, this._c.z, r, dt);
    this.dist = damp(this.dist, need, r * 0.8, dt); this.az = damp(this.az, az, r * 0.8, dt); this.el = damp(this.el, el, r * 0.8, dt);
    const ce = Math.cos(this.el);
    this._off.set(Math.sin(this.az) * ce, Math.sin(this.el), Math.cos(this.az) * ce).multiplyScalar(this.dist);
    this.cam.position.copy(this.focus).add(this._off);
    this.shakeAmp = damp(this.shakeAmp, 0, 5, dt);
    if (this.shakeAmp > 0.002) {
      const a = this.shakeAmp;
      this.cam.position.x += Math.sin(this.t * 53.1) * a * 0.12; this.cam.position.y += Math.sin(this.t * 61.7 + 1) * a * 0.15;
    }
    this.cam.lookAt(this.focus);
    this.cam.near = clamp(this.dist * 0.05, 0.2, 5); this.cam.far = 1600; this.cam.updateProjectionMatrix();
  }
}
