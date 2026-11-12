// A domino hanging by its brass ring from a hook: a rigid pendulum whose
// bottom end drags over / rests against the terrain. Used by the ropeway and
// the crane, so every lifted domino obeys the same physics.
import * as THREE from 'three';
import { clamp, AXIS_Z } from './util.js';
import { sound } from './audio.js';

const G = 9.0;
export class Hanger {
  // heightAt(x, z) -> ground height (parent space); base: extra quaternion (e.g. facing)
  constructor(dom, heightAt, { phi = 0, margin = null, onThud = null, base = null } = {}) {
    this.d = dom; this.heightAt = heightAt; this.phi = phi; this.w = 0; this.onThud = onThud;
    this.margin = margin ?? dom.T * 0.45;
    this.len = dom.H + 0.2 * (dom.spec.ringScale || 1); // ring centre to bottom face
    this.lc = dom.H / 2 + 0.2;                            // ring to centre
    this.leff = (dom.H * dom.H / 12 + this.lc * this.lc) / this.lc;
    this.ring = new THREE.Vector3(); this.prevRing = null; this.prevV = new THREE.Vector3(); this.acc = new THREE.Vector3();
    this.base = base || new THREE.Quaternion();
    this._q = new THREE.Quaternion(); this._p = new THREE.Vector3(); this.resting = false; this.contact = false;
  }
  blocked(phi, ring) {
    const s = Math.sin(phi), c = Math.cos(phi);
    for (let i = 1; i <= 10; i++) {
      const u = (i / 10) * this.len;
      const x = ring.x - u * s, y = ring.y - u * c;
      if (y < this.heightAt(x, ring.z) + this.margin) return true;
    }
    return false;
  }
  // ring: current hook position (parent space). dt > 0.
  update(dt, ring) {
    if (!this.prevRing) { this.prevRing = ring.clone(); }
    const v = this._p.copy(ring).sub(this.prevRing).divideScalar(Math.max(dt, 1e-4));
    this.acc.copy(v).sub(this.prevV).divideScalar(Math.max(dt, 1e-4));
    this.acc.x = clamp(this.acc.x, -30, 30);
    this.prevV.copy(v); this.prevRing.copy(ring); this.ring.copy(ring);
    const steps = 3, h = dt / steps;
    this.contact = false;
    for (let k = 0; k < steps; k++) {
      const a = -(G / this.leff) * Math.sin(this.phi) + (this.acc.x / this.leff) * Math.cos(this.phi) - 1.6 * this.w;
      let w = this.w + a * h, phi = this.phi + w * h;
      phi = clamp(phi, -1.75, 1.75);
      if (this.blocked(phi, ring)) {
        // resolve: search the nearest free angle, starting from the side we came from
        let found = null;
        for (let d = 0.01; d < 1.7; d += 0.02) {
          if (!this.blocked(phi + d, ring)) { found = phi + d; break; }
          if (!this.blocked(phi - d, ring)) { found = phi - d; break; }
        }
        if (found !== null) phi = found;
        if (Math.abs(w) > 1.2 && this.onThud) this.onThud(Math.abs(w));
        w = 0; this.contact = true;
      }
      this.phi = phi; this.w = w;
    }
    this.apply();
  }
  apply() {
    const s = Math.sin(this.phi), c = Math.cos(this.phi);
    this._p.set(this.ring.x - this.lc * s, this.ring.y - this.lc * c, this.ring.z);
    this._q.setFromAxisAngle(AXIS_Z, -this.phi).multiply(this.base);
    this.d.setPose(this._p, this._q);
  }
  bottom(out = new THREE.Vector3()) {
    return out.set(this.ring.x - this.len * Math.sin(this.phi), this.ring.y - this.len * Math.cos(this.phi), this.ring.z);
  }
}

// Terrain height helpers ---------------------------------------------------
export const flat = (y) => () => y;
