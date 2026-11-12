// Flocked fibre direction field. Stroking the fur lays the fibres in the stroke direction
// (and they stay that way, so you can "draw" on the bunny); pressing flattens them and
// they slowly stand back up.
import { Texture } from '../core/gl.js';
import { rng } from '../core/math.js';

const N = 48;

export class Nap {
  constructor(seed = 3, saved = null) {
    this.n = N;
    this.dx = new Float32Array(N * N);
    this.dy = new Float32Array(N * N);
    this.flat = new Float32Array(N * N);
    this.lay = new Float32Array(N * N).fill(0.55);
    const r = rng(seed);
    const p1 = r() * 6, p2 = r() * 6;
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < N; i++) {
        const k = j * N + i;
        const a = Math.PI / 2 + Math.sin(i * 0.13 + p1) * 0.35 + Math.cos(j * 0.11 + p2) * 0.3 + (i / N - 0.5) * 0.6;
        this.dx[k] = Math.cos(a);
        this.dy[k] = Math.sin(a);
      }
    }
    if (saved) this.load(saved);
    this.data = new Uint8Array(N * N * 4);
    this.tex = new Texture(N, N, { data: this.pack() });
    this.dirty = false;
    this.changed = false;
  }

  pack() {
    const d = this.data || new Uint8Array(N * N * 4);
    for (let k = 0; k < N * N; k++) {
      d[k * 4] = (this.dx[k] * 0.5 + 0.5) * 255;
      d[k * 4 + 1] = (this.dy[k] * 0.5 + 0.5) * 255;
      d[k * 4 + 2] = Math.min(1, this.flat[k]) * 255;
      d[k * 4 + 3] = this.lay[k] * 255;
    }
    return d;
  }

  // brush in uv; (du,dv) stroke direction in uv units
  brush(u, v, du, dv, radius = 0.09, pressure = 1) {
    const l = Math.hypot(du, dv);
    if (l < 1e-5) return;
    const tx = du / l, ty = dv / l;
    const r = radius * N;
    const cx = u * N - 0.5, cy = v * N - 0.5;
    const x0 = Math.max(0, Math.floor(cx - r)), x1 = Math.min(N - 1, Math.ceil(cx + r));
    const y0 = Math.max(0, Math.floor(cy - r)), y1 = Math.min(N - 1, Math.ceil(cy + r));
    const str = Math.min(1, l * N * 0.9);
    for (let j = y0; j <= y1; j++) {
      for (let i = x0; i <= x1; i++) {
        const d = Math.hypot(i - cx, j - cy) / r;
        if (d >= 1) continue;
        const w = (1 - d) * (1 - d) * str;
        const k = j * N + i;
        // with the nap: fibres lie down (light); against it: they stand up (dark)
        const along = this.dx[k] * tx + this.dy[k] * ty;
        this.lay[k] = Math.max(0, Math.min(1, this.lay[k] + w * (along > -0.3 ? 0.5 : -0.9)));
        let nx = this.dx[k] + tx * w * 2.2, ny = this.dy[k] + ty * w * 2.2;
        const nl = Math.hypot(nx, ny) + 1e-6;
        this.dx[k] = nx / nl;
        this.dy[k] = ny / nl;
        this.flat[k] = Math.min(1, this.flat[k] + w * 0.25 * pressure);
      }
    }
    this.dirty = true;
    this.changed = true;
  }

  pressAt(u, v, radius = 0.12) {
    const r = radius * N;
    const cx = u * N - 0.5, cy = v * N - 0.5;
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
      const d = Math.hypot(i - cx, j - cy) / r;
      if (d < 1) {
        const k = j * N + i;
        this.flat[k] = Math.min(1, this.flat[k] + (1 - d) * 0.15);
      }
    }
    this.dirty = true;
  }

  step(dt) {
    let any = false;
    for (let k = 0; k < N * N; k++) {
      if (this.flat[k] > 0.002) {
        this.flat[k] *= Math.exp(-dt * 1.1);
        any = true;
      } else this.flat[k] = 0;
    }
    if (any) this.dirty = true;
    if (this.dirty) {
      this.tex.update(this.pack());
      this.dirty = false;
    }
  }

  // compact save: one byte angle per cell, base64
  save() {
    const b = new Uint8Array(N * N);
    for (let k = 0; k < N * N; k++) b[k] = Math.round(((Math.atan2(this.dy[k], this.dx[k]) / (Math.PI * 2)) + 1) % 1 * 255);
    let s = '';
    for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
    return btoa(s);
  }

  load(str) {
    try {
      const s = atob(str);
      if (s.length !== N * N) return;
      for (let k = 0; k < N * N; k++) {
        const a = (s.charCodeAt(k) / 255) * Math.PI * 2;
        this.dx[k] = Math.cos(a);
        this.dy[k] = Math.sin(a);
      }
    } catch (e) {
      /* ignore corrupt data */
    }
  }

  dispose() {
    this.tex.dispose();
  }
}
