// Glitter suspended in liquid inside a sticker. Particles live in sticker uv space, are
// pushed by the flow produced by the soft-body deformation, carry momentum after the
// finger stops and slowly sink (toward the bottom of the dome or "downhill" when tilted).
// They are rasterised as tiny oriented flakes into an inclusion texture.
import { gl, FBO, PointMesh, blend } from '../core/gl.js';
import { sampleGrid } from '../art/bake.js';
import { rng } from '../core/math.js';

const RES = 160;

export class Glitter {
  constructor(design, seed = 1) {
    const g = design.def.glitter || { count: 120, hues: [0, 0.1, 0.5, 0.8] };
    this.design = design;
    const r = rng(seed * 9301 + 17);
    const n = g.count;
    const nSeq = g.sequins ? 9 : 0;
    this.n = n + nSeq;
    this.x = new Float32Array(this.n);
    this.y = new Float32Array(this.n);
    this.vx = new Float32Array(this.n);
    this.vy = new Float32Array(this.n);
    this.lift = new Float32Array(this.n); // 0 resting on bottom .. 1 swirling
    this.ax = new Float32Array(this.n);
    this.ay = new Float32Array(this.n);
    this.spin = new Float32Array(this.n);
    this.size = new Float32Array(this.n);
    this.code = new Float32Array(this.n);
    this.shape = new Float32Array(this.n);
    this.rot = new Float32Array(this.n);
    for (let i = 0; i < this.n; i++) {
      let u = 0.5, v = 0.5;
      for (let t = 0; t < 40; t++) {
        u = 0.1 + r() * 0.8;
        v = 0.1 + r() * 0.8;
        if (sampleGrid(design.dist64, 64, u, v) > 0.035) break;
      }
      this.x[i] = u;
      this.y[i] = v;
      this.ax[i] = (r() - 0.5) * 0.9;
      this.ay[i] = (r() - 0.5) * 0.9;
      this.rot[i] = r() * 6.28;
      if (i < n) {
        const hue = g.hues[Math.floor(r() * g.hues.length)] + (r() - 0.5) * 0.06;
        this.code[i] = 0 * 64 + Math.floor((((hue % 1) + 1) % 1) * 63);
        this.size[i] = 2.2 + r() * 2.8;
        this.shape[i] = 0;
      } else {
        const heart = g.sequins === 'heart';
        this.shape[i] = heart ? 3 : 2;
        this.code[i] = heart ? 3 * 64 + Math.floor(r() * 63) : 2 * 64 + Math.floor(r() * 20);
        this.size[i] = 9 + r() * 4;
      }
    }
    this.fbo = new FBO(RES, RES, {});
    this.mesh = new PointMesh(this.n, 8);
    this.dirty = true;
    this.awake = 1;
    this.gravity = [0, 0];
  }

  get tex() {
    return this.fbo.tex;
  }

  wake(t = 1.5) {
    this.awake = Math.max(this.awake, t);
  }

  step(dt, soft, press, gravity) {
    if (gravity) {
      const dg = Math.abs(gravity[0] - this.gravity[0]) + Math.abs(gravity[1] - this.gravity[1]);
      if (dg > 0.02) this.wake(1.0);
      this.gravity = gravity;
    }
    if (this.awake <= 0 && !this.dirty) return;
    dt = Math.min(dt, 1 / 30);
    const d = this.design;
    let maxv = 0;
    const gx = this.gravity[0], gy = this.gravity[1];
    for (let i = 0; i < this.n; i++) {
      let fx = 0, fy = 0;
      if (soft && soft.active) {
        const f = soft.flowAt(this.x[i], this.y[i]);
        fx = f[0] * 0.016;
        fy = f[1] * 0.016;
      }
      if (press) {
        // stirring: the moving finger drags nearby fluid along
        const du = this.x[i] - press.u, dv = this.y[i] - press.v;
        const dd = du * du + dv * dv;
        const w = Math.exp(-dd / 0.02);
        fx += press.vu * w * 1.6;
        fy += press.vv * w * 1.6;
        // pushed outward by the dent
        const l = Math.sqrt(dd) + 1e-4;
        const push = Math.exp(-dd / 0.012) * press.push;
        fx += (du / l) * push * 0.5;
        fy += (dv / l) * push * 0.5;
      }
      const sp = Math.hypot(fx, fy);
      this.lift[i] = Math.min(1, this.lift[i] + sp * dt * 6);
      this.lift[i] *= Math.exp(-dt * 0.55); // slow sinking
      const drag = 3.2 + (1 - this.lift[i]) * 4;
      const sink = this.shape[i] > 0 ? 1.6 : 1.0;
      this.vx[i] += ((fx - this.vx[i]) * drag + gx * 0.09 * sink) * dt;
      this.vy[i] += ((fy - this.vy[i]) * drag + gy * 0.09 * sink) * dt;
      // resting particles stick to the bottom (friction) unless gravity is strong
      if (this.lift[i] < 0.05 && Math.hypot(gx, gy) < 0.25) {
        this.vx[i] *= Math.exp(-dt * 8);
        this.vy[i] *= Math.exp(-dt * 8);
      }
      let nx = this.x[i] + this.vx[i] * dt;
      let ny = this.y[i] + this.vy[i] * dt;
      // walls: keep particles inside the dome
      const wall = sampleGrid(d.dist64, 64, nx, ny);
      const minD = 0.02 + this.size[i] / RES * 0.5;
      if (wall < minD) {
        const e = 0.01;
        const gxw = sampleGrid(d.dist64, 64, nx + e, ny) - sampleGrid(d.dist64, 64, nx - e, ny);
        const gyw = sampleGrid(d.dist64, 64, nx, ny + e) - sampleGrid(d.dist64, 64, nx, ny - e);
        const l = Math.hypot(gxw, gyw) + 1e-6;
        const ix = gxw / l, iy = gyw / l;
        const pen = minD - wall;
        nx += ix * pen;
        ny += iy * pen;
        const vn = this.vx[i] * ix + this.vy[i] * iy;
        if (vn < 0) {
          this.vx[i] -= vn * ix * 1.5;
          this.vy[i] -= vn * iy * 1.5;
        }
      }
      this.x[i] = nx;
      this.y[i] = ny;
      const speed = Math.hypot(this.vx[i], this.vy[i]);
      // tumbling flakes; settle flat when at rest
      this.spin[i] += (speed * 40 * (i % 2 ? 1 : -1) - this.spin[i]) * dt * 3;
      this.ax[i] += this.spin[i] * dt;
      this.ay[i] += this.spin[i] * dt * 0.7;
      const settle = Math.exp(-dt * (0.6 + (1 - this.lift[i]) * 1.5));
      this.ax[i] = Math.max(-1.2, Math.min(1.2, this.ax[i])) * (speed < 0.02 ? settle : 1);
      this.ay[i] = Math.max(-1.2, Math.min(1.2, this.ay[i])) * (speed < 0.02 ? settle : 1);
      this.rot[i] += this.spin[i] * dt * 0.5;
      maxv = Math.max(maxv, speed + Math.abs(this.spin[i]) * 0.002);
    }
    if (!press && maxv < 0.004) this.awake -= dt;
    else this.awake = Math.max(this.awake, 0.4);
    this.dirty = true;
  }

  render() {
    if (!this.dirty) return;
    this.dirty = false;
    const D = this.mesh.data;
    let k = 0;
    for (let i = 0; i < this.n; i++) {
      const ax = Math.sin(this.ax[i]) * 0.75, ay = Math.sin(this.ay[i]) * 0.75;
      // keep the 0.8 floor so most flakes face up at rest (and twinkle when tilted)
      D[k++] = this.x[i];
      D[k++] = this.y[i];
      D[k++] = this.size[i] * (1 + this.lift[i] * 0.25);
      D[k++] = this.rot[i];
      D[k++] = ax;
      D[k++] = ay;
      D[k++] = this.code[i];
      D[k++] = this.shape[i];
    }
    this.mesh.upload(this.n);
    const prevFb = gl.getParameter(gl.FRAMEBUFFER_BINDING);
    const vp = gl.getParameter(gl.VIEWPORT);
    this.fbo.bind();
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    blend('none');
    Glitter.prog.use();
    this.mesh.draw();
    blend('alpha');
    gl.bindFramebuffer(gl.FRAMEBUFFER, prevFb);
    gl.viewport(vp[0], vp[1], vp[2], vp[3]);
  }

  dispose() {
    this.fbo.dispose();
  }
}
Glitter.prog = null;
