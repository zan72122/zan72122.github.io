// Height-field soft body for a sticker dome. dz is stored in "dome units" (1 = full dome
// height). A finger acts as a spherical indenter; the displaced volume reappears as a rim
// bulge around it. Each material has its own spring/damping/coupling so resin recovers
// slowly, jelly wobbles and liquid ripples.
import { gl, Texture } from '../core/gl.js';
import { sampleGrid } from '../art/bake.js';

export const SOFT = {
  resin: { k: 24, c: 11, lap: 1.4, depth: 0.85, bulge: 0.55, r: 0.27, sub: 3 },
  clear: { k: 30, c: 12, lap: 1.4, depth: 0.8, bulge: 0.55, r: 0.27, sub: 3 },
  jelly: { k: 150, c: 3.2, lap: 3.2, depth: 0.9, bulge: 0.65, r: 0.3, sub: 4 },
  liquid: { k: 36, c: 2.0, lap: 5.0, depth: 0.75, bulge: 0.5, r: 0.28, sub: 4 },
  fur: { k: 220, c: 28, lap: 0.6, depth: 0.38, bulge: 0.0, r: 0.2, sub: 2 },
  satin: { k: 170, c: 20, lap: 0.8, depth: 0.42, bulge: 0.12, r: 0.22, sub: 2 },
  matte: { k: 120, c: 16, lap: 1.0, depth: 0.3, bulge: 0.2, r: 0.25, sub: 2 },
};

const G = 24;

export class SoftGrid {
  constructor(design, matName) {
    this.p = SOFT[matName] || SOFT.resin;
    this.n = G;
    this.z = new Float32Array(G * G);
    this.v = new Float32Array(G * G);
    this.zPrev = new Float32Array(G * G);
    this.rate = new Float32Array(G * G); // dz/dt for fluid flow
    this.m = new Float32Array(G * G);
    this.h0 = new Float32Array(G * G);
    for (let j = 0; j < G; j++) {
      for (let i = 0; i < G; i++) {
        const u = (i + 0.5) / G, w = (j + 0.5) / G;
        const m = sampleGrid(design.dome64, 64, u, w);
        this.m[j * G + i] = m > 0.5 ? 1 : 0;
        // thickness proxy: distance to wall
        const d = sampleGrid(design.dist64, 64, u, w);
        this.h0[j * G + i] = Math.min(1, d * 7);
      }
    }
    this.press = null; // {u, v, depth, t}
    this.tex = new Texture(G, G, { internal: gl.R16F, format: gl.RED, type: gl.FLOAT, data: this.z });
    this.awake = 0;
    this.energy = 0;
  }

  setPress(u, v, strength = 1) {
    if (!this.press) this.press = { u, v, d: 0, s: strength, vu: 0, vv: 0 };
    const pr = this.press;
    pr.vu = (u - pr.u);
    pr.vv = (v - pr.v);
    pr.u = u;
    pr.v = v;
    pr.s = strength;
    this.awake = 1.2;
  }

  release() {
    this.press = null;
    this.awake = 1.5;
  }

  // Inject an impulse (e.g. a drop impact) at uv
  poke(u, v, amount) {
    const G2 = this.n;
    for (let j = 0; j < G2; j++) for (let i = 0; i < G2; i++) {
      const du = (i + 0.5) / G2 - u, dv = (j + 0.5) / G2 - v;
      const d2 = (du * du + dv * dv) / (0.09);
      const k = j * G2 + i;
      if (this.m[k]) this.v[k] -= amount * Math.exp(-d2 * 2);
    }
    this.awake = 1.5;
  }

  get active() {
    return this.awake > 0;
  }

  step(dt) {
    if (this.awake <= 0) return false;
    const p = this.p, z = this.z, v = this.v, m = this.m;
    const N = this.n;
    this.zPrev.set(z);
    const sub = p.sub;
    const h = Math.min(dt, 1 / 30) / sub;
    const inv = N * N;
    for (let s = 0; s < sub; s++) {
      for (let j = 0; j < N; j++) {
        for (let i = 0; i < N; i++) {
          const k = j * N + i;
          if (!m[k]) { z[k] = 0; v[k] = 0; continue; }
          const zl = i > 0 && m[k - 1] ? z[k - 1] : 0;
          const zr = i < N - 1 && m[k + 1] ? z[k + 1] : 0;
          const zu = j > 0 && m[k - N] ? z[k - N] : 0;
          const zd = j < N - 1 && m[k + N] ? z[k + N] : 0;
          const lap = (zl + zr + zu + zd - 4 * z[k]) * inv / 576;
          const a = -p.k * z[k] - p.c * v[k] + p.lap * 60 * lap;
          v[k] += a * h;
        }
      }
      for (let k = 0; k < N * N; k++) z[k] += v[k] * h;
      const pr = this.press;
      if (pr) {
        pr.d += (p.depth * pr.s - pr.d) * Math.min(1, h * 22);
        const r = p.r;
        let vol = 0, wsum = 0;
        for (let j = 0; j < N; j++) {
          for (let i = 0; i < N; i++) {
            const k = j * N + i;
            if (!m[k]) continue;
            const du = (i + 0.5) / N - pr.u, dv = (j + 0.5) / N - pr.v;
            const d = Math.sqrt(du * du + dv * dv);
            if (d < r) {
              const q = d / r;
              const target = -pr.d * Math.sqrt(1 - q * q) * (0.45 + 0.55 * this.h0[k]);
              if (z[k] > target) {
                const nz = z[k] + (target - z[k]) * 0.55;
                v[k] = Math.min(v[k], (nz - z[k]) / h * 0.5);
                z[k] = nz;
              }
            }
            vol += z[k];
          }
        }
        if (p.bulge > 0) {
          const ring = [];
          for (let j = 0; j < N; j++) {
            for (let i = 0; i < N; i++) {
              const k = j * N + i;
              if (!m[k]) continue;
              const du = (i + 0.5) / N - pr.u, dv = (j + 0.5) / N - pr.v;
              const d = Math.sqrt(du * du + dv * dv);
              if (d < r * 1.02) continue;
              const x = (d - r * 1.45) / (r * 0.55);
              const w = Math.exp(-x * x) * (0.3 + 0.7 * this.h0[k]);
              ring.push(k, w);
              wsum += w;
            }
          }
          if (wsum > 0) {
            const corr = (-vol * p.bulge * 0.35) / wsum;
            for (let q = 0; q < ring.length; q += 2) z[ring[q]] += corr * ring[q + 1];
          }
        }
      }
    }
    let e = 0;
    for (let k = 0; k < N * N; k++) {
      this.rate[k] = (z[k] - this.zPrev[k]) / Math.max(dt, 1e-3);
      e = Math.max(e, Math.abs(z[k]) + Math.abs(v[k]) * 0.05);
    }
    this.energy = e;
    if (!this.press) {
      if (e < 0.002) this.awake -= dt;
      else this.awake = Math.max(this.awake, 0.3);
      if (this.awake <= 0) {
        z.fill(0);
        v.fill(0);
        this.rate.fill(0);
      }
    }
    this.tex.update(z);
    return true;
  }

  // fluid velocity (uv/s) at uv from the rate of surface change: liquid flows away from
  // regions being pushed down
  flowAt(u, w) {
    const N = this.n;
    const x = Math.min(N - 2, Math.max(1, Math.floor(u * N)));
    const y = Math.min(N - 2, Math.max(1, Math.floor(w * N)));
    const k = y * N + x;
    const r = this.rate;
    return [(r[k + 1] - r[k - 1]) * 0.5, (r[k + N] - r[k - N]) * 0.5];
  }

  heightAt(u, w) {
    const N = this.n;
    const x = Math.min(N - 1, Math.max(0, Math.floor(u * N)));
    const y = Math.min(N - 1, Math.max(0, Math.floor(w * N)));
    return this.z[y * N + x];
  }

  dispose() {
    this.tex.dispose();
  }
}
