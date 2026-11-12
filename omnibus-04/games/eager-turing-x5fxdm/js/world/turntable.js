// The gem turntable: a crank handle sticks out of a little gear box; turning it (or
// spinning the disk itself) rotates a big holographic heart gem. Every facet's colour is
// computed from the light, the eye and the facet's orientation, so the same angle always
// gives the same colours. Reflected light spots orbit the gem, and a facet that flashes
// straight at the eye rings a chime.
import { SlotBox } from './sheet.js';
import { Sticker } from './sticker.js';
import { getDesign } from '../art/registry.js';
import { gemFacets } from '../art/bake.js';
import { audio } from '../core/audio.js';
import { clamp, angleWrap, PI, TAU } from '../core/math.js';
import { blend } from '../core/gl.js';

function hash12(x, y) {
  const fr = (v) => v - Math.floor(v);
  let p0 = fr(x * 0.1031), p1 = fr(y * 0.1031), p2 = fr(x * 0.1031);
  const d = p0 * (p1 + 33.33) + p1 * (p2 + 33.33) + p2 * (p0 + 33.33);
  p0 += d; p1 += d; p2 += d;
  return fr((p0 + p1) * p2);
}

const HOLO = [[1.0, 0.52, 0.8], [0.45, 0.88, 1.0], [0.68, 0.52, 1.0], [1.0, 0.84, 0.42]];
function holo4(t) {
  t = (t - Math.floor(t)) * 4;
  const i = Math.floor(t) % 4;
  let f = t - Math.floor(t);
  f = f * f * (3 - 2 * f);
  const a = HOLO[i], b = HOLO[(i + 1) % 4];
  return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
}

export class TurntableStation extends SlotBox {
  constructor(game) {
    super(game);
    this.kind = 'turntable';
    this.omega = 0;
    this.crank = 0.6;
    this.gravity = [0, 0];
    this.clickAcc = 0;
    this.drag = null;
    this.facets = null;
    this.glintCool = [];
    this.spinTime = 0;
  }

  layout(cx, cy, w, h) {
    this.w = w;
    this.h = h;
    this.R = Math.min(w * 0.4, h * 0.36);
    this.ox = -w * 0.06;
    this.oy = -h * 0.02;
    this.unit = Math.min(this.R * 0.52, 120);
    this.cx = cx + this.ox;
    this.cy = cy + this.oy;
    if (!this.slots.length) {
      const ids = ['gemPink', 'gemAqua', 'gemLilac', 'pearlPink', 'gemPink', 'butterfly'];
      this.slots = ids.map((id, i) => {
        const a = (i / ids.length) * TAU + 0.3;
        return { id, x: 0, y: 0, a, rot: a + PI / 2, scale: id.startsWith('pearl') ? 0.9 : 0.8, sticker: null, refill: 0, appear: 1 };
      });
    }
    for (const s of this.slots) {
      s.x = Math.cos(s.a) * this.R * 0.66;
      s.y = Math.sin(s.a) * this.R * 0.66;
      if (s.sticker) { s.sticker.x = s.x; s.sticker.y = s.y; s.sticker.unit = this.unit; }
    }
    if (!this.gem) {
      this.gem = new Sticker('gemPink', { x: 0, y: 0, unit: 100, scale: 1 });
      this.gem.fixed = true;
      this.gem.gravity = [0, 0];
      this.buildFacets();
    }
    this.gem.unit = this.R * 0.9;
  }

  // Shop.place() sets cx/cy to the station centre; keep our offset.
  setCenter(cx, cy) {
    this.cx = cx + this.ox;
    this.cy = cy + this.oy;
  }

  buildFacets() {
    const d = getDesign('gemPink');
    const g = d.def.gem;
    const S = 256;
    const tris = gemFacets(g.outline, S, g.table ?? 0.5, (g.height ?? 0.14) * S);
    const maxH = (g.height ?? 0.14) * S * 1.04;
    const domeTex = d.dome * S;
    const k = domeTex / maxH;
    this.facets = tris.map((t, i) => {
      const ux = t[1][0] - t[0][0], uy = t[1][1] - t[0][1], uz = t[1][2] - t[0][2];
      const vx = t[2][0] - t[0][0], vy = t[2][1] - t[0][1], vz = t[2][2] - t[0][2];
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      if (nz < 0) { nx = -nx; ny = -ny; nz = -nz; }
      nx *= k; ny *= k;
      const l = Math.hypot(nx, ny, nz);
      const area = Math.abs(ux * vy - uy * vx) / 2 / (S * S);
      const id = i + 1;
      return { n: [nx / l, ny / l, nz / l], area, id, ga: hash12(id, 3.7) * PI, ph: hash12(id, 9.1) * 0.8, c: [(t[0][0] + t[1][0] + t[2][0]) / 3 / S - 0.5, (t[0][1] + t[1][1] + t[2][1]) / 3 / S - 0.5] };
    });
    this.glintCool = this.facets.map(() => 0);
  }

  get knob() {
    const p = this.pivot;
    const a = this.R * 0.42;
    return [p[0] + Math.cos(this.crank) * a, p[1] + Math.sin(this.crank) * a];
  }

  get pivot() {
    return [this.cx + this.R * 1.05, this.cy + this.R * 0.62];
  }

  // ---- gestures ----
  hitTest(x, y) {
    const k = this.knob;
    const p = this.pivot;
    if (Math.hypot(x - k[0], y - k[1]) < Math.max(34, this.R * 0.2) || Math.hypot(x - p[0], y - p[1]) < this.R * 0.18) {
      return { kind: 'crank', gesture: new CrankGesture(this, x, y) };
    }
    const pk = this.pick(x, y);
    if (pk) return { kind: 'sticker', box: this, ...pk };
    const d = Math.hypot(x - this.cx, y - this.cy);
    if (d < this.R * 1.02) {
      const [lx, ly] = this.toLocal(x, y);
      const h = this.gem.hit(lx, ly, 0);
      if (h && h.inside) {
        this.gem.pressAt(h.uv[0], h.uv[1], 1);
        audio.gemTap({ pitch: 0.9 });
      }
      return { kind: 'disk', gesture: new DiskGesture(this, x, y) };
    }
    return null;
  }

  canAccept(x, y) {
    return Math.hypot(x - this.cx, y - this.cy) < this.R * 0.95;
  }

  accept(st, x, y) {
    const [lx, ly] = this.toLocal(x, y);
    this.acceptLocal(st, lx, ly, st.rot);
  }

  turnBy(dTheta) {
    this.theta += dTheta;
    this.clickAcc += dTheta;
    while (Math.abs(this.clickAcc) > 0.2) {
      this.clickAcc -= Math.sign(this.clickAcc) * 0.2;
      audio.ratchet({ intensity: 0.35 });
    }
  }

  update(dt, visible) {
    this.idle = this.drag ? 0 : (this.idle || 0) + dt;
    if (!this.drag) {
      // an idle crank gives a small "come turn me" wobble now and then
      if (this.idle > 6 && Math.abs(this.omega) < 0.05) {
        const w = Math.max(0, Math.sin((this.idle - 6) * 2.2)) * Math.exp(-((this.idle - 6) % 5) * 0.8);
        this.crank += Math.sin(this.idle * 14) * w * dt * 1.5;
        if (this.idle > 11) this.idle = 4;
      }
      this.omega *= Math.exp(-dt * 0.9);
      if (Math.abs(this.omega) < 0.02) this.omega = 0;
      const d = this.omega * dt;
      this.turnBy(d);
      this.crank += d / 0.45;
    }
    this.updateSlots(dt, visible);
    if (this.gem) {
      this.gem.update(dt);
      if (this.gem.pressInfo && !this.drag) this.gem.releasePress();
    }
    if (visible) this.updateGlints(dt);
  }

  facetWorld(f) {
    const a = this.theta + this.gem.rot;
    const c = Math.cos(a), s = Math.sin(a);
    return [c * f.n[0] - s * f.n[1], s * f.n[0] + c * f.n[1], f.n[2]];
  }

  facetColor(f, N, L, V) {
    const a = this.theta + this.gem.rot + f.ga;
    const g = [Math.cos(a), Math.sin(a), 0];
    const ph = (L[0] + V[0]) * g[0] + (L[1] + V[1]) * g[1] + (L[2] + V[2]) * g[2];
    const ndl = N[0] * L[0] + N[1] * L[1] + N[2] * L[2];
    return holo4(ph * 1.6 + f.ph + ndl * 0.5);
  }

  updateGlints(dt) {
    if (!this.facets) return;
    const L = this.game.light.dir;
    const cam = this.game.cam;
    const V0 = [cam[0] - this.cx, cam[1] - this.cy, cam[2]];
    const vl = Math.hypot(...V0);
    const V = V0.map((v) => v / vl);
    this.facets.forEach((f, i) => {
      this.glintCool[i] = Math.max(0, this.glintCool[i] - dt);
      const N = this.facetWorld(f);
      const nl = N[0] * L[0] + N[1] * L[1] + N[2] * L[2];
      const R = [2 * nl * N[0] - L[0], 2 * nl * N[1] - L[1], 2 * nl * N[2] - L[2]];
      const g = R[0] * V[0] + R[1] * V[1] + R[2] * V[2];
      const prev = f.g ?? g;
      f.g = g;
      if (g > 0.992 && prev <= 0.992 && this.glintCool[i] <= 0 && Math.abs(this.omega) + (this.drag ? 1 : 0) > 0.05) {
        this.glintCool[i] = 0.35;
        audio.chime({ note: (i * 3) % 8 - 1, intensity: 0.35 });
        f.flash = 1;
      }
      if (f.flash) f.flash = Math.max(0, f.flash - dt * 3);
    });
  }

  render(R, time) {
    const T = this.game.tex;
    const L = this.game.light;
    const diskD = getDesign('turntable');
    const base = { model: null, unitPx: 1 };
    // cabinet shadow + disk
    R.drawShadow({ design: { tex: { art: T.blob } }, art: T.blob, x: this.cx - 6, y: this.cy + 10, size: [this.R * 2.6, this.R * 2.5], dome: 0 }, 0.5, [0.55, 0.45, 0.5], 0.5, 0, 1.0);
    const diskItem = { design: diskD, model: this.model, x: 0, y: 0, rot: 0, size: this.R * 2.04, dome: diskD.dome * this.R * 2.04, unitPx: 1 };
    R.drawSticker(diskItem);
    // gear box + crank arm + knob
    const p = this.pivot;
    const box = getDesign('gearBox');
    const bs = this.R * 0.42;
    R.drawShadow({ design: box, x: p[0], y: p[1], size: bs, dome: box.dome * bs }, 0.45, [0.5, 0.4, 0.55], 1.0, 0.05);
    R.drawSticker({ design: box, x: p[0], y: p[1], size: bs, dome: box.dome * bs });
    const arm = getDesign('crankArm');
    const a = this.R * 0.42;
    const armItem = { design: arm, x: p[0] + Math.cos(this.crank) * a * 0.5, y: p[1] + Math.sin(this.crank) * a * 0.5, rot: this.crank, size: a * 1.15, dome: arm.dome * a * 1.15, lift: bs * 0.12 };
    R.drawShadow(armItem, 0.4, [0.5, 0.4, 0.55], 1.0, 0.06);
    R.drawSticker(armItem);
    const kn = getDesign('crankKnob');
    const k = this.knob;
    const ks = Math.max(30, this.R * 0.26);
    const knobItem = { design: kn, x: k[0], y: k[1], size: ks, dome: kn.dome * ks, lift: bs * 0.15 };
    R.drawShadow(knobItem, 0.45, [0.5, 0.4, 0.55], 1.0, 0.05);
    R.drawSticker(knobItem);
    // stickers on the disk (small gems) and the big gem
    this.renderGhosts(R);
    this.renderStickers(R, time, [this.gem]);
    this.renderSpots(R, L);
    void base;
  }

  // reflected light spots orbit the gem as it turns
  renderSpots(R, Lt) {
    if (!this.facets) return;
    const L = Lt.dir;
    const cam = this.game.cam;
    const V0 = [cam[0] - this.cx, cam[1] - this.cy, cam[2]];
    const vl = Math.hypot(...V0);
    const V = V0.map((v) => v / vl);
    const K = this.R * 1.25;
    const gl = R.gl;
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.DST_COLOR, gl.ZERO);
    for (const f of this.facets) {
      if (f.area < 0.002) continue;
      const N = this.facetWorld(f);
      const nl = N[0] * L[0] + N[1] * L[1] + N[2] * L[2];
      if (nl <= 0) continue;
      const Rv = [2 * nl * N[0] - L[0], 2 * nl * N[1] - L[1], 2 * nl * N[2] - L[2]];
      const tilt = Math.hypot(Rv[0], Rv[1]);
      if (tilt < 0.05) continue;
      const k = K * (0.6 + tilt / (Rv[2] + 0.4));
      const sx = this.cx + (Rv[0] / tilt) * Math.min(k, this.R * 3.2);
      const sy = this.cy + (Rv[1] / tilt) * Math.min(k, this.R * 3.2) * 0.85;
      const col = this.facetColor(f, N, L, V);
      const inten = clamp(f.area * 30, 0.25, 1) * (0.55 + 0.45 * Math.min(1, nl * 1.4)) * (1 + (f.flash || 0) * 1.5);
      const sz = this.R * (0.2 + f.area * 7);
      const avg = (col[0] + col[1] + col[2]) / 3;
      const tint = col.map((c, i) => Lt.col[i] * (0.55 + (c - avg) * 2.6) * inten);
      R.drawPaint({ art: this.game.tex.spot, x: sx, y: sy, rot: Math.atan2(Rv[1], Rv[0]), size: [sz * 1.7, sz], lit: -2, mul: tint });
    }
    blend('alpha');
  }
}

class CrankGesture {
  constructor(tt, x, y) {
    this.tt = tt;
    tt.drag = this;
    const p = tt.pivot;
    this.prev = Math.atan2(y - p[1], x - p[0]);
    this.vel = 0;
    tt.game.touchedSomething();
  }
  move(x, y, dt) {
    const tt = this.tt;
    const p = tt.pivot;
    const a = Math.atan2(y - p[1], x - p[0]);
    if (Math.hypot(x - p[0], y - p[1]) < 8) return;
    const d = angleWrap(a - this.prev);
    this.prev = a;
    tt.crank += d;
    const dTheta = d * 0.45;
    tt.turnBy(dTheta);
    this.vel = this.vel * 0.6 + (dTheta / Math.max(dt, 1e-3)) * 0.4;
    tt.omega = this.vel;
  }
  up() {
    this.tt.drag = null;
    this.tt.omega = clamp(this.vel, -6, 6);
  }
  cancel() {
    this.up();
  }
}

class DiskGesture {
  constructor(tt, x, y) {
    this.tt = tt;
    tt.drag = this;
    this.prev = Math.atan2(y - tt.cy, x - tt.cx);
    this.vel = 0;
    tt.game.touchedSomething();
  }
  move(x, y, dt) {
    const tt = this.tt;
    if (Math.hypot(x - tt.cx, y - tt.cy) < tt.R * 0.12) return;
    const a = Math.atan2(y - tt.cy, x - tt.cx);
    const d = angleWrap(a - this.prev);
    this.prev = a;
    tt.turnBy(d);
    tt.crank += d / 0.45;
    this.vel = this.vel * 0.6 + (d / Math.max(dt, 1e-3)) * 0.4;
    tt.omega = this.vel;
  }
  up() {
    this.tt.drag = null;
    this.tt.omega = clamp(this.vel, -6, 6);
    if (this.tt.gem.pressInfo) this.tt.gem.releasePress();
  }
  cancel() {
    this.up();
  }
}
