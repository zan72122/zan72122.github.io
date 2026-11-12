// The journey as one continuous path parameterised by arc length s:
// meadow run (straight, +Z) -> rainbow loop (circle turning right, rising and
// falling) -> back onto the meadow.
import * as THREE from '../../lib/three.module.js';
import { RUN_X, RUN_START_Z, JUMP_Z, LOOP_R, LOOP_CENTER, LOOP_LAND_THETA, LOOP_END_THETA, RAINBOW_H, RAINBOW_START_H, terrainHeight, bowProfile } from './layout.js';
import { clamp, smoothstep } from '../core/math.js';

export class Track {
  constructor() {
    this.z0 = RUN_START_Z - 4;
    this.sA = JUMP_Z - this.z0; // first contact on the rainbow
    this.sLand = this.sA + LOOP_LAND_THETA * LOOP_R;
    this.sEnd = this.sA + LOOP_END_THETA * LOOP_R;
    this.R = LOOP_R;
    this.C = LOOP_CENTER;
  }

  // rainbow progress 0..1 (0 at first contact, 1 at landing)
  u(s) {
    return (s - this.sA) / (this.sLand - this.sA);
  }
  sOfU(u) {
    return this.sA + u * (this.sLand - this.sA);
  }

  bowHeight(s) {
    const u = this.u(s);
    if (u <= 0 || u >= 1) return null;
    return bowProfile(u);
  }

  isBow(s) {
    const u = this.u(s);
    return u > 0 && u < 1;
  }

  xz(s, out) {
    if (s <= this.sA) {
      out.x = RUN_X;
      out.z = this.z0 + s;
    } else {
      const th = (s - this.sA) / this.R;
      out.x = this.C.x + Math.cos(th) * this.R;
      out.z = this.C.z + Math.sin(th) * this.R;
    }
    return out;
  }

  pos(s, out) {
    this.xz(s, out);
    const h = this.bowHeight(s);
    out.y = h !== null ? h : terrainHeight(out.x, out.z);
    return out;
  }

  tangent(s, out) {
    if (s <= this.sA) return out.set(0, 0, 1);
    const th = (s - this.sA) / this.R;
    return out.set(-Math.sin(th), 0, Math.cos(th));
  }

  // outward (left of travel for the right-turning loop) horizontal unit vector
  lateral(s, out) {
    if (s <= this.sA) return out.set(1, 0, 0);
    const th = (s - this.sA) / this.R;
    return out.set(Math.cos(th), 0, Math.sin(th));
  }

  // 3D slope angle of the bow at s
  slope(s) {
    const h1 = this.bowHeight(s - 0.5), h2 = this.bowHeight(s + 0.5);
    if (h1 === null || h2 === null) return 0;
    return Math.atan2(h2 - h1, 1);
  }

  // project a world xz to (s, lateral offset) near a hint
  project(x, z, hintS) {
    if (hintS !== undefined && hintS <= this.sA + 0.5 && z <= JUMP_Z + 0.2) {
      return { s: z - this.z0, lat: x - RUN_X };
    }
    const dx = x - this.C.x, dz = z - this.C.z;
    let th = Math.atan2(dz, dx);
    // choose the branch nearest to the hint
    const hintTh = hintS !== undefined ? (hintS - this.sA) / this.R : 0;
    while (th < hintTh - Math.PI) th += Math.PI * 2;
    while (th > hintTh + Math.PI) th -= Math.PI * 2;
    return { s: this.sA + th * this.R, lat: Math.hypot(dx, dz) - this.R };
  }
}
