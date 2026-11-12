// A sticker instance: placement on a surface, material behaviour (soft body, glitter, fur
// nap, hard bounce), and the peel curl geometry.
import { getDesign } from '../art/registry.js';
import { sampleGrid } from '../art/bake.js';
import { SoftGrid } from '../sim/softgrid.js';
import { Glitter } from '../sim/glitter.js';
import { Nap } from '../sim/nap.js';
import { clamp, smooth, lerp, PI } from '../core/math.js';

let SEED = 1;
const HARD = new Set(['pearl', 'holo']);

export class Sticker {
  constructor(id, opts = {}) {
    this.id = id;
    this.custom = opts.custom || null;
    this.design = getDesign(id, this.custom);
    this.mat = this.design.matName;
    this.x = opts.x || 0;
    this.y = opts.y || 0;
    this.rot = opts.rot || 0;
    this.scale = opts.scale || 1;
    this.unit = opts.unit || 100;
    this.seed = opts.seed ?? SEED++;
    this.soft = null;
    this.glitter = this.mat === 'liquid' ? new Glitter(this.design, this.seed) : null;
    this.nap = this.mat === 'fur' ? new Nap(this.seed, opts.nap || null) : null;
    this.peel = null;
    this.restCurl = opts.curl ?? null; // boundary angle (radians) of a decorative lifted corner
    this.curlPhase = Math.random() * 6;
    this.lift = 0;
    this.sway = [0, 0];
    this.bounce = { x: 0, v: 0 };
    this.alpha = opts.alpha ?? 1;
    this.bright = 0;
    this.pressInfo = null;
    this.idle = 0;
    this.gravity = [0, 0.3];
  }

  get size() {
    return this.unit * (this.design.def.size || 1) * this.scale;
  }

  get hard() {
    return HARD.has(this.mat);
  }

  // ---- coordinates (surface units) ----
  toLocal(sx, sy) {
    const dx = sx - this.x, dy = sy - this.y;
    const c = Math.cos(-this.rot), s = Math.sin(-this.rot);
    return [c * dx - s * dy, s * dx + c * dy];
  }

  fromLocal(lx, ly) {
    const c = Math.cos(this.rot), s = Math.sin(this.rot);
    return [this.x + c * lx - s * ly, this.y + s * lx + c * ly];
  }

  localToUV(lx, ly) {
    const S = this.size;
    return [lx / S + 0.5, ly / S + 0.5];
  }

  // Returns null or {uv, inside, edge, local}
  hit(sx, sy, slop = 0) {
    const [lx, ly] = this.toLocal(sx, sy);
    const S = this.size;
    const u = lx / S + 0.5, v = ly / S + 0.5;
    const pad = slop / S;
    if (u < -pad || u > 1 + pad || v < -pad || v > 1 + pad) return null;
    const m = sampleGrid(this.design.mask64, 64, clamp(u, 0, 1), clamp(v, 0, 1));
    if (m > 0.45 && u >= 0 && u <= 1 && v >= 0 && v <= 1) {
      const dWall = sampleGrid(this.design.dist64, 64, u, v) * S;
      return { uv: [u, v], inside: true, edge: dWall < S * 0.15, wall: dWall, local: [lx, ly] };
    }
    if (slop > 0) {
      // near the outline?
      for (let k = 0; k < 12; k++) {
        const a = (k / 12) * PI * 2;
        for (const f of [0.5, 1]) {
          const uu = u + (Math.cos(a) * slop * f) / S, vv = v + (Math.sin(a) * slop * f) / S;
          if (uu < 0 || uu > 1 || vv < 0 || vv > 1) continue;
          if (sampleGrid(this.design.mask64, 64, uu, vv) > 0.5) {
            return { uv: [clamp(u, 0, 1), clamp(v, 0, 1)], inside: false, edge: true, wall: 0, local: [lx, ly] };
          }
        }
      }
    }
    return null;
  }

  boundaryLocal(k) {
    const b = this.design.boundary;
    const n = b.length / 2;
    k = ((k % n) + n) % n;
    const S = this.size;
    return [(b[k * 2] - 0.5) * S, (b[k * 2 + 1] - 0.5) * S];
  }

  nearestBoundary(lx, ly) {
    const n = this.design.boundary.length / 2;
    let best = 0, bd = 1e9;
    for (let k = 0; k < n; k++) {
      const p = this.boundaryLocal(k);
      const d = (p[0] - lx) ** 2 + (p[1] - ly) ** 2;
      if (d < bd) { bd = d; best = k; }
    }
    return best;
  }

  outwardNormal(k) {
    const a = this.boundaryLocal(k - 2), b = this.boundaryLocal(k + 2), p = this.boundaryLocal(k);
    let nx = b[1] - a[1], ny = -(b[0] - a[0]);
    const c = this.design.centroid, S = this.size;
    const cx = (c[0] - 0.5) * S, cy = (c[1] - 0.5) * S;
    if (nx * (p[0] - cx) + ny * (p[1] - cy) < 0) { nx = -nx; ny = -ny; }
    const l = Math.hypot(nx, ny) || 1;
    // blend with radial direction for robustness on concave outlines
    let rx = p[0] - cx, ry = p[1] - cy;
    const rl = Math.hypot(rx, ry) || 1;
    rx /= rl; ry /= rl;
    const ox = nx / l * 0.6 + rx * 0.4, oy = ny / l * 0.6 + ry * 0.4;
    const ol = Math.hypot(ox, oy) || 1;
    return [ox / ol, oy / ol];
  }

  extentAlong(G, n) {
    const cnt = this.design.boundary.length / 2;
    let e = 0;
    for (let k = 0; k < cnt; k++) {
      const p = this.boundaryLocal(k);
      e = Math.max(e, (G[0] - p[0]) * n[0] + (G[1] - p[1]) * n[1]);
    }
    return e;
  }

  // ---- material interaction ----
  ensureSoft() {
    if (!this.soft && !this.hard) this.soft = new SoftGrid(this.design, this.softMat || (this.mat === 'pearl' ? 'matte' : this.mat));
    return this.soft;
  }

  pressAt(u, v, strength = 1) {
    this.idle = 0;
    if (this.hard) {
      if (!this.pressInfo) this.bounce.v -= 2.2 * strength;
      this.pressInfo = { u, v, vu: 0, vv: 0, push: 1 };
      return;
    }
    const s = this.ensureSoft();
    const prev = this.pressInfo;
    this.pressInfo = { u, v, vu: prev ? (u - prev.u) * 60 : 0, vv: prev ? (v - prev.v) * 60 : 0, push: 1 };
    s.setPress(u, v, strength);
    if (this.nap) this.nap.pressAt(u, v, 0.1);
    if (this.glitter) this.glitter.wake(2);
  }

  stroke(u, v, du, dv, pressure = 1) {
    if (this.nap) this.nap.brush(u, v, du, dv, 0.1, pressure);
  }

  releasePress() {
    if (this.soft) this.soft.release();
    if (this.hard && this.pressInfo) this.bounce.v += 1.5;
    this.pressInfo = null;
  }

  // impact when dropped onto a surface
  impact(amount = 0.6) {
    if (this.hard) {
      this.bounce.v -= amount * 3;
      return;
    }
    const s = this.ensureSoft();
    s.poke(0.5, 0.5, amount * 4);
    if (this.glitter) this.glitter.wake(2);
  }

  // ---- peeling ----
  beginPeel(lx, ly) {
    const k = this.nearestBoundary(lx, ly);
    const G = this.boundaryLocal(k);
    const n = this.outwardNormal(k);
    const S = this.size;
    const R = S * 0.11;
    this.peel = {
      G, n, R, k,
      T: [lx, ly],
      d: this.restCurl != null && this.curlHit(k) ? R * 1.0 : R * 0.2,
      theta: this.restCurl != null && this.curlHit(k) ? PI * 0.5 : 0.2,
      dT: R * 1.2, thT: PI * 0.5,
      extent: this.extentAlong(G, n),
      releasing: false,
      lastD: 0,
    };
    this.restCurl = null;
    this.idle = 0;
    return this.peel;
  }

  curlHit(k) {
    if (this.restCurl == null) return false;
    const n = this.design.boundary.length / 2;
    const kc = Math.round((this.restCurl / (PI * 2)) * n);
    const dk = Math.abs(((k - kc + n / 2) % n + n) % n - n / 2);
    return dk < n * 0.12;
  }

  // finger position (local units) -> peel targets. returns progress 0..1
  dragPeel(lx, ly) {
    const pe = this.peel;
    if (!pe) return 0;
    const Px = lx - pe.T[0], Py = ly - pe.T[1];
    const Pl = Math.hypot(Px, Py);
    const out = Px * pe.n[0] + Py * pe.n[1];
    const din = Math.max(0, -out);
    const R = pe.R;
    const dBack = (din + PI * R) / 2;
    const dLift = R * 0.45 + 0.6 * Pl;
    pe.dT = Math.max(dBack, dLift, R * 1.1);
    const q = Pl > 1e-3 ? din / Pl : 0;
    let th = lerp(PI * 0.55, PI, smooth(0.25, 0.85, q));
    th = lerp(PI * 0.45, th, smooth(0, R * 1.5, Pl));
    pe.thT = th;
    return pe.dT / Math.max(1, pe.extent);
  }

  releasePeel() {
    if (this.peel) {
      this.peel.releasing = true;
      this.peel.dT = 0;
      this.peel.thT = 0;
    }
  }

  get peelProgress() {
    return this.peel ? this.peel.d / Math.max(1, this.peel.extent) : 0;
  }

  // ---- update ----
  update(dt) {
    this.idle += dt;
    // hard bounce spring
    const b = this.bounce;
    const target = this.pressInfo && this.hard ? -0.5 : 0;
    b.v += ((target - b.x) * 260 - b.v * 12) * dt;
    b.x += b.v * dt;
    if (this.soft) {
      this.soft.step(dt);
      if (!this.soft.active && this.idle > 4) {
        this.soft.dispose();
        this.soft = null;
      }
    }
    if (this.glitter) {
      const c = Math.cos(-this.rot), s = Math.sin(-this.rot);
      const g = [c * this.gravity[0] - s * this.gravity[1], s * this.gravity[0] + c * this.gravity[1]];
      let press = null;
      if (this.pressInfo) {
        press = { ...this.pressInfo };
        press.push = this.soft ? Math.min(1.5, Math.abs(this.soft.press ? this.soft.press.d : 0) * 2) : 0;
      }
      this.glitter.step(dt, this.soft, press, g);
      this.glitter.render();
    }
    if (this.nap) this.nap.step(dt);
    const pe = this.peel;
    if (pe) {
      const k = pe.releasing ? 14 : 22;
      pe.lastD = pe.d;
      pe.d += (pe.dT - pe.d) * Math.min(1, dt * k);
      pe.theta += (pe.thT - pe.theta) * Math.min(1, dt * k);
      if (pe.releasing && pe.d < pe.R * 0.15) {
        this.peel = null;
        return 'restuck';
      }
    }
    return null;
  }

  // peel state used for rendering (active peel or decorative rest curl)
  peelRender(time) {
    const pe = this.peel;
    if (pe) {
      const fold = [pe.G[0] - pe.n[0] * pe.d, pe.G[1] - pe.n[1] * pe.d];
      return { fx: fold[0], fy: fold[1], nx: pe.n[0], ny: pe.n[1], R: pe.R, theta: pe.theta };
    }
    if (this.restCurl != null) {
      const n = this.design.boundary.length / 2;
      const k = Math.round((this.restCurl / (PI * 2)) * n);
      const G = this.boundaryLocal(k);
      const nn = this.outwardNormal(k);
      const R = this.size * 0.1;
      const flutter = Math.sin(time * 1.7 + this.curlPhase) * 0.5 + 0.5;
      const breath = 0.85 + 0.25 * flutter * flutter;
      const d = R * 1.15 * breath;
      return { fx: G[0] - nn[0] * d, fy: G[1] - nn[1] * d, nx: nn[0], ny: nn[1], R, theta: PI * (0.42 + 0.08 * flutter) };
    }
    return null;
  }

  // Build a render item for the renderer.
  item(surface, time, extra = {}) {
    const S = this.size * (1 + this.bounce.x * 0.08);
    const it = {
      design: this.design,
      model: surface.model,
      x: this.x,
      y: this.y,
      rot: this.rot,
      size: S,
      dome: this.design.dome * S,
      deform: this.soft && this.soft.active ? this.soft.tex : null,
      peel: this.peelRender(time),
      lift: this.lift,
      sway: this.sway,
      chain: surface.chain || null,
      page: surface.page || null,
      incl: this.glitter ? this.glitter.tex : this.design.inclFbo ? this.design.inclFbo.tex : null,
      nap: this.nap ? this.nap.tex : null,
      alpha: this.alpha,
      bright: this.bright,
      unitPx: surface.unitPx || 1,
      depth: surface.depth || 0,
      depthScale: surface.depthScale || 0,
      lightS: surface.lightS || null,
      shadowZ: surface.shadowZ || 0,
      hi: !!surface.chain || this.lift > 0.5,
      ...extra,
    };
    return it;
  }

  serialize() {
    const o = { id: this.id, x: +this.x.toFixed(2), y: +this.y.toFixed(2), r: +this.rot.toFixed(3), k: +this.scale.toFixed(3), sd: this.seed };
    if (this.custom) o.c = this.custom;
    if (this.nap && this.nap.changed) o.nap = this.nap.save();
    return o;
  }

  dispose() {
    if (this.soft) this.soft.dispose();
    if (this.glitter) this.glitter.dispose();
    if (this.nap) this.nap.dispose();
  }
}

export const TRANSPARENT = new Set(['clear', 'jelly', 'liquid']);

// shadow colour of a sticker: transparent ones let tinted light through
export function shadowTintOf(st) {
  if (!TRANSPARENT.has(st.mat)) return [[0.5, 0.42, 0.55], 0.42];
  const a = st.design.avg || [1, 1, 1];
  const k = st.mat === 'jelly' ? 0.55 : 0.35;
  return [[0.55 + a[0] * 0.4, 0.5 + a[1] * 0.42, 0.6 + a[2] * 0.38].map((v) => Math.min(1, v)), k];
}
