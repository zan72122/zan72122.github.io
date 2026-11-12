import { WIND } from './config.js';
import { noise1, clamp } from './util.js';

// One wind for the whole world. It always blows to the right (towards the next
// house); gusts travel across the scene so grass, trees, balloons and the house
// feel the same gust one after another. Near the quilt the air is slower
// (boundary layer), so strings lean more than grass bends.
export class Wind {
  constructor(seed = 7) {
    this.nG = noise1(seed);
    this.nT = noise1(seed + 11);
    this.nV = noise1(seed + 23);
    this.t = 0;
    this.extra = 0;   // extra breeze while the camera travels with the wind
    this.calm = 0;    // 0..1, evening calm
  }

  update(dt) { this.t += dt; }

  // Gust strength 0..1 at a given x (gusts arrive from the left).
  gustAt(x) {
    const s = this.t - x / WIND.gustSpeed;
    const g = this.nG(s * 0.2) * 0.7 + this.nG(s * 0.53 + 40) * 0.3;
    return clamp((g - 0.5) * 2.8, 0, 1) ** 1.4 * (1 - this.calm);
  }

  // Boundary-layer profile 0.45..1.
  profile(y) { return Math.sqrt(clamp(y / WIND.layer, 0.2, 1)); }

  // Wind velocity at a point, written into out = {x, y}.
  at(x, y, out) {
    const g = this.gustAt(x);
    const flutter = (this.nT(this.t * 0.9 + x * 0.004) - 0.5) * 14;
    out.x = ((WIND.base + g * WIND.gust) * (1 - this.calm * 0.8) + flutter) * this.profile(y) + this.extra;
    out.y = (this.nV(this.t * 0.7 + x * 0.003 + y * 0.002) - 0.5) * 22 * (0.6 + g);
    return out;
  }
}
