import * as THREE from 'three';

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Periodic 2D value noise on a lattice of size `period`.
function makeLattice(period, rnd) {
  const g = new Float32Array(period * period);
  for (let i = 0; i < g.length; i++) g[i] = rnd();
  return g;
}
function fade(t) { return t * t * (3 - 2 * t); }
function sampleLattice(g, period, x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const x0 = ((xi % period) + period) % period, y0 = ((yi % period) + period) % period;
  const x1 = (x0 + 1) % period, y1 = (y0 + 1) % period;
  const a = g[y0 * period + x0], b = g[y0 * period + x1];
  const c = g[y1 * period + x0], d = g[y1 * period + x1];
  const u = fade(xf), v = fade(yf);
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
}

export function makeNoiseTexture(size = 256, seed = 7) {
  const rnd = mulberry32(seed);
  const data = new Uint8Array(size * size * 4);
  const chans = [
    { base: 4, oct: 4 },
    { base: 8, oct: 4 },
    { base: 16, oct: 3 },
    { base: 64, oct: 1 },
  ];
  const lattices = chans.map(c => {
    const arr = [];
    for (let o = 0; o < c.oct; o++) arr.push(makeLattice(c.base << o, rnd));
    return arr;
  });
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      for (let c = 0; c < 4; c++) {
        const ch = chans[c];
        let v = 0, amp = 1, tot = 0;
        for (let o = 0; o < ch.oct; o++) {
          const p = ch.base << o;
          v += amp * sampleLattice(lattices[c][o], p, (x / size) * p, (y / size) * p);
          tot += amp; amp *= 0.5;
        }
        v /= tot;
        // stretch contrast a little
        v = Math.min(1, Math.max(0, (v - 0.5) * 1.6 + 0.5));
        data[(y * size + x) * 4 + c] = Math.round(v * 255);
      }
    }
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;
  return tex;
}

// Standalone fbm for CPU-side use (dirt initialisation)
export function makeFbm(seed) {
  const rnd = mulberry32(seed);
  const P = 64;
  const lat = [makeLattice(P, rnd), makeLattice(P, rnd), makeLattice(P, rnd)];
  return (x, y) => {
    let v = 0, amp = 1, tot = 0, f = 1;
    for (let o = 0; o < 3; o++) {
      v += amp * sampleLattice(lat[o], P, x * f, y * f);
      tot += amp; amp *= 0.5; f *= 2.03;
    }
    return v / tot;
  };
}
