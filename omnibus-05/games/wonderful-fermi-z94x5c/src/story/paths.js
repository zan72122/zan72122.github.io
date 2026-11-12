// Smooth walking paths on the ground (arc-length parameterised Catmull-Rom).
import * as THREE from '../../lib/three.module.js';

export class PolyTrack {
  constructor(points, samples = 120) {
    const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal', 0.5);
    this.pts = curve.getSpacedPoints(samples);
    this.cum = [0];
    for (let i = 1; i < this.pts.length; i++) this.cum.push(this.cum[i - 1] + this.pts[i].distanceTo(this.pts[i - 1]));
    this.length = this.cum[this.cum.length - 1];
  }
  _seg(s) {
    s = Math.max(0, Math.min(this.length, s));
    let lo = 0, hi = this.cum.length - 1;
    while (hi - lo > 1) {
      const m = (lo + hi) >> 1;
      if (this.cum[m] <= s) lo = m;
      else hi = m;
    }
    const f = (s - this.cum[lo]) / Math.max(1e-6, this.cum[hi] - this.cum[lo]);
    return [lo, hi, f];
  }
  pos(s, out) {
    const [a, b, f] = this._seg(s);
    return out.lerpVectors(this.pts[a], this.pts[b], f);
  }
  tangent(s, out) {
    const [a, b] = this._seg(s);
    return out.subVectors(this.pts[b], this.pts[a]).setY(0).normalize();
  }
}
