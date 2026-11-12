import * as THREE from 'three';
import { clamp, damp, dampAngle, smoothstep, wrapAngle, lerp } from './util.js';
import { boxes, insideBox } from './layout.js';

// A patient follow camera: behind and a little above the child, lazily
// turning to match where they walk. When the first rainbow lifts it eases
// back so child, ground and rising ribbon share one frame. Higher up it
// backs off so the ground falls away naturally.
export class CameraRig {
  constructor(camera) {
    this.camera = camera;
    this.yaw = Math.PI;      // direction the camera looks (same convention as heading)
    this.pitch = 0.42;
    this.dist = 5.2;
    this.focus = new THREE.Vector3(0, 0.6, 7);
    this.poi = null;
    this.poiT = 0;
    this.poiWeight = 0;
    this.revealT = 0;
    this.walkT = 0;
    this.portrait = false;
    this.safe = { top: 0, bottom: 0, left: 0, right: 0 };
    this._p = new THREE.Vector3();
    this._look = new THREE.Vector3();
    this.shake = 0;
    this.firstPeelFrame = false;
  }

  resize(w, h, safe) {
    const aspect = w / h;
    this.portrait = aspect < 0.9;
    this.safe = safe;
    // natural lens: ~35mm equivalent in landscape; a bit wider in portrait
    // so the child and the path behind both fit on a tall screen.
    const vfov = aspect >= 1.2 ? 44 : lerp(58, 48, smoothstep(0.45, 1.2, aspect));
    this.camera.fov = vfov;
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  // Frame the child and something worth seeing (e.g. a peeling rainbow).
  showPoi(p, seconds, weight = 1) {
    if (!this.poi) this.poi = new THREE.Vector3();
    this.poi.copy(p);
    this.poiT = seconds;
    this.poiWeight = weight;
  }

  update(dt, player, bubbleActive) {
    const kid = player.pos;
    const moving = player.mode === 'walk' && player.speed > 0.4;
    const air = player.mode === 'fall' || player.mode === 'bubble';
    this.walkT = moving ? this.walkT + dt : 0;

    const height = Math.max(0, kid.y);
    let dist = (this.portrait ? 5.0 : 4.5) + Math.min(height * 0.22, 9);
    let pitch = (this.portrait ? 0.4 : 0.3) + smoothstep(1, 25, height) * 0.18;
    let yawTarget = this.yaw;
    let yawRate = 0;

    if (moving && this.walkT > 0.35) {
      yawTarget = player.heading;
      yawRate = 0.75;
    }
    if (air) {
      dist += 1.6;
      pitch += 0.12;
      yawRate = 0.3;
    }

    // point of interest framing (only while the child is not being steered)
    this.poiT -= dt;
    this.rescue = Math.max(0, (this.rescue || 0) - dt * 0.5);
    let bx = 0, by = 0, bz = 0;
    if (this.poi && this.poiT > 0) {
      const dx = this.poi.x - kid.x, dz = this.poi.z - kid.z;
      const d = Math.hypot(dx, dz);
      const w = this.poiWeight * (player.held ? 0 : moving ? 0.25 : 1) * (1 - this.rescue);
      if (d > 0.5 && w > 0.01) {
        const toPoi = Math.atan2(dx, dz);
        const off = this.portrait ? 0.16 : 0.32;
        const a = toPoi + off, b = toPoi - off;
        const best = Math.abs(wrapAngle(b - this.yaw)) < Math.abs(wrapAngle(a - this.yaw)) ? b : a;
        yawTarget = this.yaw + wrapAngle(best - this.yaw) * w + wrapAngle(yawTarget - this.yaw) * (1 - w);
        yawRate = Math.max(yawRate, 0.9 * w);
        const h = Math.max(0, this.poi.y - kid.y);
        dist += Math.min(Math.hypot(d, h) * 0.35, 6) * w;
        // look up a little towards something high
        pitch -= w * clamp(Math.atan2(h, d + 3) * 0.6, 0.03, 0.34);
        const k = Math.min(1, 3 / Math.max(d * 0.3, 1e-3));
        bx = dx * 0.3 * k * w;
        bz = dz * 0.3 * k * w;
        by = Math.min(h * 0.35, 4) * w;
      }
    }

    this.yaw = dampAngle(this.yaw, yawTarget, yawRate, dt);
    this.dist = damp(this.dist, dist, 1.4, dt);
    this.pitch = damp(this.pitch, pitch, 1.4, dt);

    // focus: the child (slightly ahead of them), optionally biased to the POI
    const fx = Math.sin(player.heading), fz = Math.cos(player.heading);
    const lead = Math.min(player.speed, 3) * 0.25;
    const tx = kid.x + fx * lead + bx;
    const tz = kid.z + fz * lead + bz;
    const ty = kid.y + 0.55 + by;
    const kf = air ? 6 : 4.5 + this.rescue * 6;
    this.focus.x = damp(this.focus.x, tx, kf, dt);
    this.focus.z = damp(this.focus.z, tz, kf, dt);
    this.focus.y = damp(this.focus.y, ty, air ? 6 : 4, dt);

    // place camera
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    let d = this.dist;
    const cam = this._p;
    const place = (dd) => cam.set(
      this.focus.x - Math.sin(this.yaw) * cp * dd,
      this.focus.y + sp * dd,
      this.focus.z - Math.cos(this.yaw) * cp * dd,
    );
    place(d);
    // don't end up inside buildings
    for (let k = 0; k < 8; k++) {
      let blocked = false;
      for (const b of boxes) {
        if (b.top > cam.y - 0.3 && insideBox(b, cam.x, cam.z, 0.4)) { blocked = true; break; }
      }
      if (!blocked) break;
      d *= 0.8;
      place(d);
    }
    if (cam.y < 0.6) cam.y = 0.6;
    this.camera.position.copy(cam);

    // Put the child a little below centre so the path ahead has room,
    // respecting safe-area insets (notch / home indicator).
    const look = this._look.copy(this.focus);
    const s = this.safe;
    const lower = this.portrait ? 0.13 : 0.11;
    const safeShift = ((s.bottom - s.top) / Math.max(1, window.innerHeight)) * 0.5;
    const up = (lower + safeShift) * this.dist * Math.tan((this.camera.fov * Math.PI) / 360) * 2;
    look.y += up * cp;
    look.x += Math.sin(this.yaw) * up * sp;
    look.z += Math.cos(this.yaw) * up * sp;
    this.camera.lookAt(look);

    // never lose the child: if they drift out of frame, pull the focus back
    this.camera.updateMatrixWorld();
    this._look.set(kid.x, kid.y + 0.5, kid.z).project(this.camera);
    const n = this._look;
    if (Math.abs(n.x) > 0.78 || n.y < -0.86 || n.y > 0.7 || n.z > 1) this.rescue = 1;
  }
}
