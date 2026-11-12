// Bakes a sticker/prop design into GPU textures:
//  art  : RGBA  print colour (rgb) + die-cut mask (a)
//  norm : RGBA  surface normal (rg), dome height (b), spare (a)
//  mat  : RGBA  region code*16 (r), fibre angle / facet id (g), param (b), ambient occlusion (a)
// plus CPU-side data for hit-testing, peeling (support function) and particles.
import { Texture } from '../core/gl.js';

export const MAT = {
  resin: 0, jelly: 1, liquid: 2, fur: 3, satin: 4, pearl: 5, holo: 6, clear: 7,
  matte: 8, gloss: 9, metal: 10, glass: 11,
};

export const REGION = { base: 0, foil: 1, border: 2, bead: 3, felt: 4, opaque: 5, holofoil: 6, pearl: 7, gem: 8 };

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

// 1D squared distance transform (Felzenszwalb & Huttenlocher)
function dt1d(f, n, d, v, z) {
  let k = 0;
  v[0] = 0;
  z[0] = -1e20;
  z[1] = 1e20;
  for (let q = 1; q < n; q++) {
    let s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
    while (s <= z[k]) {
      k--;
      s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
    }
    k++;
    v[k] = q;
    z[k] = s;
    z[k + 1] = 1e20;
  }
  k = 0;
  for (let q = 0; q < n; q++) {
    while (z[k + 1] < q) k++;
    const dq = q - v[k];
    d[q] = dq * dq + f[v[k]];
  }
}

// Euclidean distance (px) from each inside pixel to the nearest outside pixel.
export function edt(inside, w, h) {
  const INF = 1e20;
  const grid = new Float64Array(w * h);
  for (let i = 0; i < w * h; i++) grid[i] = inside[i] ? INF : 0;
  const n = Math.max(w, h);
  const f = new Float64Array(n), d = new Float64Array(n), v = new Int32Array(n), z = new Float64Array(n + 1);
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) f[y] = grid[y * w + x];
    dt1d(f, h, d, v, z);
    for (let y = 0; y < h; y++) grid[y * w + x] = d[y];
  }
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) f[x] = grid[y * w + x];
    dt1d(f, w, d, v, z);
    for (let x = 0; x < w; x++) grid[y * w + x] = d[x];
  }
  const out = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) out[i] = Math.sqrt(grid[i]);
  return out;
}

function blur(src, w, h, r, passes = 2) {
  let a = src;
  let b = new Float32Array(w * h);
  for (let p = 0; p < passes; p++) {
    for (let y = 0; y < h; y++) {
      let acc = 0;
      const row = y * w;
      for (let x = -r; x <= r; x++) acc += a[row + Math.min(w - 1, Math.max(0, x))];
      for (let x = 0; x < w; x++) {
        b[row + x] = acc / (2 * r + 1);
        acc += a[row + Math.min(w - 1, x + r + 1)] - a[row + Math.max(0, x - r)];
      }
    }
    const t = new Float32Array(w * h);
    for (let x = 0; x < w; x++) {
      let acc = 0;
      for (let y = -r; y <= r; y++) acc += b[Math.min(h - 1, Math.max(0, y)) * w + x];
      for (let y = 0; y < h; y++) {
        t[y * w + x] = acc / (2 * r + 1);
        acc += b[Math.min(h - 1, y + r + 1) * w + x] - b[Math.max(0, y - r) * w + x];
      }
    }
    a = t;
  }
  return a;
}

function alphaOf(canvas) {
  const S = canvas.width;
  const d = canvas.getContext('2d').getImageData(0, 0, S, S).data;
  const a = new Float32Array(S * S);
  for (let i = 0; i < S * S; i++) a[i] = d[i * 4 + 3] / 255;
  return a;
}

function grayOf(canvas) {
  const S = canvas.width;
  const d = canvas.getContext('2d').getImageData(0, 0, S, S).data;
  const a = new Float32Array(S * S);
  for (let i = 0; i < S * S; i++) a[i] = (d[i * 4] / 255) * (d[i * 4 + 3] / 255);
  return a;
}

// Gem facet generator: outline polygon (uv coords), table scale, heights.
export function gemFacets(outline, S, tableScale, tableH) {
  const K = outline.length;
  let cx = 0, cy = 0;
  for (const p of outline) { cx += p[0]; cy += p[1]; }
  cx /= K; cy /= K;
  const P = outline.map((p) => [p[0] * S, p[1] * S, 0]);
  const T = outline.map((p) => [(cx + (p[0] - cx) * tableScale) * S, (cy + (p[1] - cy) * tableScale) * S, tableH]);
  const tris = [];
  for (let i = 0; i < K; i++) {
    const j = (i + 1) % K;
    const Q = [(P[i][0] + P[j][0]) / 2, (P[i][1] + P[j][1]) / 2, tableH * 0.18];
    tris.push([P[i], Q, T[i]], [Q, P[j], T[j]], [Q, T[j], T[i]]);
  }
  // table split into a fan of very slightly different facets
  const C = [cx * S, cy * S, tableH * 1.04];
  for (let i = 0; i < K; i++) {
    const j = (i + 1) % K;
    tris.push([T[i], T[j], C]);
  }
  return tris;
}

function pointInTri(px, py, a, b, c) {
  const d1 = (px - b[0]) * (a[1] - b[1]) - (a[0] - b[0]) * (py - b[1]);
  const d2 = (px - c[0]) * (b[1] - c[1]) - (b[0] - c[0]) * (py - c[1]);
  const d3 = (px - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (py - a[1]);
  const neg = d1 < 0 || d2 < 0 || d3 < 0;
  const pos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(neg && pos);
}

/**
 * def: {
 *   mat: 'resin'|..., dome: 0.12, rim: 0.14, crown: 0.25, border: 0.035 (fraction of S),
 *   shape(ctx,S,v), dome?(ctx,S,v), art(ctx,S,v), relief?(ctx,S,v), reliefScale,
 *   regions?(ctx,S,v), fiber?(u,v,vr) -> angle, gem?: {outline, table, height}, ao?(ctx,S,v)
 *   borderColor, tint, param
 * }
 */
export function bakeDesign(def, variant = {}, S = 256) {
  const v = variant;
  // ---- shape mask ----
  const shapeC = makeCanvas(S, S);
  const sctx = shapeC.getContext('2d');
  sctx.fillStyle = '#fff';
  sctx.strokeStyle = '#fff';
  def.shape(sctx, S, v);
  const shapeA = alphaOf(shapeC);

  // ---- dome mask ----
  let domeA;
  const borderPx = (def.border ?? 0.03) * S;
  if (def.dome && typeof def.domeShape === 'function') {
    const dc = makeCanvas(S, S);
    const dctx = dc.getContext('2d');
    dctx.fillStyle = '#fff';
    def.domeShape(dctx, S, v);
    domeA = alphaOf(dc);
  } else if (borderPx > 0.5) {
    const ins = new Uint8Array(S * S);
    for (let i = 0; i < S * S; i++) ins[i] = shapeA[i] > 0.5 ? 1 : 0;
    const dd = edt(ins, S, S);
    domeA = new Float32Array(S * S);
    for (let i = 0; i < S * S; i++) domeA[i] = Math.min(1, Math.max(0, dd[i] - borderPx + 0.5));
  } else {
    domeA = shapeA;
  }

  // ---- height ----
  const H = new Float32Array(S * S);
  let facetId = null;
  if (def.gem) {
    const tris = gemFacets(def.gem.outline, S, def.gem.table ?? 0.5, (def.gem.height ?? 0.14) * S);
    facetId = new Uint8Array(S * S);
    const nrm = tris.map((t) => {
      const ux = t[1][0] - t[0][0], uy = t[1][1] - t[0][1], uz = t[1][2] - t[0][2];
      const vx = t[2][0] - t[0][0], vy = t[2][1] - t[0][1], vz = t[2][2] - t[0][2];
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      if (nz < 0) { nx = -nx; ny = -ny; nz = -nz; }
      return [nx, ny, nz];
    });
    // rasterise each facet over its bounding box
    for (let t = 0; t < tris.length; t++) {
      const tr = tris[t];
      const n = nrm[t];
      const x0 = Math.max(0, Math.floor(Math.min(tr[0][0], tr[1][0], tr[2][0])));
      const x1 = Math.min(S - 1, Math.ceil(Math.max(tr[0][0], tr[1][0], tr[2][0])));
      const y0 = Math.max(0, Math.floor(Math.min(tr[0][1], tr[1][1], tr[2][1])));
      const y1 = Math.min(S - 1, Math.ceil(Math.max(tr[0][1], tr[1][1], tr[2][1])));
      for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) {
          const i = y * S + x;
          if (facetId[i] || shapeA[i] <= 0.0) continue;
          const px = x + 0.5, py = y + 0.5;
          if (!pointInTri(px, py, tr[0], tr[1], tr[2])) continue;
          const z = tr[0][2] - (n[0] * (px - tr[0][0]) + n[1] * (py - tr[0][1])) / n[2];
          H[i] = Math.max(0, z);
          facetId[i] = t + 1;
        }
      }
    }
    let mx = 1e-6;
    for (let i = 0; i < S * S; i++) mx = Math.max(mx, H[i]);
    for (let i = 0; i < S * S; i++) H[i] /= mx;
  } else {
    const ins = new Uint8Array(S * S);
    for (let i = 0; i < S * S; i++) ins[i] = domeA[i] > 0.5 ? 1 : 0;
    const dist = edt(ins, S, S);
    let dmax = 1e-6;
    for (let i = 0; i < S * S; i++) dmax = Math.max(dmax, dist[i]);
    const rim = Math.min((def.rim ?? 0.13) * S, dmax);
    const crown = def.crown ?? 0.25;
    for (let i = 0; i < S * S; i++) {
      const d = dist[i];
      if (d <= 0) continue;
      const t = Math.min(1, d / rim);
      const prof = Math.sqrt(Math.max(0, 1 - (1 - t) * (1 - t)));
      H[i] = prof * (1 - crown) + crown * Math.pow(d / dmax, 0.8);
    }
    if (def.relief) {
      const rc = makeCanvas(S, S);
      const rctx = rc.getContext('2d');
      def.relief(rctx, S, v);
      const R = blur(grayOf(rc), S, S, 2, 2);
      const k = def.reliefScale ?? 0.3;
      if (def.reliefSigned) {
        for (let i = 0; i < S * S; i++) if (domeA[i] > 0.01) H[i] = Math.max(0.02, H[i] + (R[i] - 0.5) * 2 * k);
      } else {
        for (let i = 0; i < S * S; i++) if (domeA[i] > 0.01) H[i] += R[i] * k;
      }
    }
    const Hb = blur(H, S, S, 1, 2);
    let mx = 1e-6;
    for (let i = 0; i < S * S; i++) {
      Hb[i] *= Math.min(1, domeA[i] * 1.2);
      mx = Math.max(mx, Hb[i]);
    }
    for (let i = 0; i < S * S; i++) H[i] = Hb[i] / mx;
  }

  // ---- normals ----
  const domeTex = (def.dome ?? 0.12) * S;
  const normD = new Uint8ClampedArray(S * S * 4);
  const hAt = (x, y) => H[Math.min(S - 1, Math.max(0, y)) * S + Math.min(S - 1, Math.max(0, x))];
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const i = y * S + x;
      let nx, ny, nz;
      if (facetId && facetId[i]) {
        // flat facet normals via local plane slope of exact neighbours of same facet
        const f = facetId[i];
        const sx = (x + 1 < S && facetId[i + 1] === f) ? hAt(x + 1, y) - H[i] : (x > 0 && facetId[i - 1] === f ? H[i] - hAt(x - 1, y) : 0);
        const sy = (y + 1 < S && facetId[i + S] === f) ? hAt(x, y + 1) - H[i] : (y > 0 && facetId[i - S] === f ? H[i] - hAt(x, y - 1) : 0);
        nx = -sx * domeTex; ny = -sy * domeTex; nz = 1;
      } else {
        nx = -(hAt(x + 1, y) - hAt(x - 1, y)) * 0.5 * domeTex;
        ny = -(hAt(x, y + 1) - hAt(x, y - 1)) * 0.5 * domeTex;
        nz = 1;
      }
      const l = Math.hypot(nx, ny, nz);
      normD[i * 4] = (nx / l * 0.5 + 0.5) * 255;
      normD[i * 4 + 1] = (ny / l * 0.5 + 0.5) * 255;
      normD[i * 4 + 2] = H[i] * 255;
      normD[i * 4 + 3] = 255;
    }
  }

  // ---- art ----
  const artC = makeCanvas(S, S);
  const actx = artC.getContext('2d');
  actx.fillStyle = def.borderColor || '#fbf8fb';
  def.shape(actx, S, v);
  actx.save();
  // clip art to the shape by drawing then masking
  def.art(actx, S, v);
  actx.restore();
  actx.globalCompositeOperation = 'destination-in';
  actx.drawImage(shapeC, 0, 0);
  actx.globalCompositeOperation = 'source-over';
  if (def.postArt) def.postArt(actx, S, v);

  // ---- material / regions ----
  const regC = makeCanvas(S, S);
  const regCtx = regC.getContext('2d');
  if (def.regions) def.regions(regCtx, S, v);
  const regData = regCtx.getImageData(0, 0, S, S).data;
  let aoC = null;
  if (def.ao) {
    aoC = makeCanvas(S, S);
    const ac = aoC.getContext('2d');
    ac.fillStyle = '#fff';
    ac.fillRect(0, 0, S, S);
    def.ao(ac, S, v);
  }
  const aoData = aoC ? aoC.getContext('2d').getImageData(0, 0, S, S).data : null;
  const Hbl = blur(H, S, S, 6, 2);
  const matD = new Uint8ClampedArray(S * S * 4);
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const i = y * S + x;
      let region = 0;
      if (regData[i * 4 + 3] > 127) region = Math.round(regData[i * 4] / 16);
      if (domeA[i] < 0.5 && shapeA[i] > 0.02 && !def.noBorderRegion) region = REGION.border;
      let g = 0;
      if (def.fiber) {
        let a = def.fiber((x + 0.5) / S, (y + 0.5) / S, v) % Math.PI;
        if (a < 0) a += Math.PI;
        g = (a / Math.PI) * 255;
      } else if (facetId) {
        g = facetId[i];
      } else if (def.gemRegion) {
        g = def.gemRegion((x + 0.5) / S, (y + 0.5) / S);
      }
      let ao = 1 - Math.max(0, Hbl[i] - H[i]) * (def.cavityAO ?? 2.2);
      if (aoData) ao *= aoData[i * 4] / 255;
      matD[i * 4] = region * 16;
      matD[i * 4 + 1] = g;
      matD[i * 4 + 2] = regData[i * 4 + 1];
      matD[i * 4 + 3] = Math.max(0, Math.min(1, ao)) * 255;
    }
  }

  // ---- CPU-side data ----
  const M = 64;
  const mask64 = new Float32Array(M * M);
  const dome64 = new Float32Array(M * M);
  const step = S / M;
  for (let y = 0; y < M; y++) {
    for (let x = 0; x < M; x++) {
      let a = 0, b = 0;
      for (let j = 0; j < step; j += 2) {
        for (let i = 0; i < step; i += 2) {
          const k = (Math.floor(y * step + j)) * S + Math.floor(x * step + i);
          a += shapeA[k];
          b += domeA[k];
        }
      }
      const n = (step / 2) * (step / 2);
      mask64[y * M + x] = a / n;
      dome64[y * M + x] = b / n;
    }
  }
  // centroid + boundary (radial march)
  let cx = 0, cy = 0, cw = 0;
  for (let y = 0; y < M; y++) for (let x = 0; x < M; x++) {
    const w = mask64[y * M + x];
    cx += (x + 0.5) * w; cy += (y + 0.5) * w; cw += w;
  }
  cx /= cw * M; cy /= cw * M;
  const NB = 72;
  const boundary = new Float32Array(NB * 2);
  for (let k = 0; k < NB; k++) {
    const a = (k / NB) * Math.PI * 2;
    const dx = Math.cos(a), dy = Math.sin(a);
    let r = 0;
    for (let t = 0; t < 0.75; t += 0.004) {
      const u = cx + dx * t, w = cy + dy * t;
      if (u < 0 || u > 1 || w < 0 || w > 1) break;
      if (sampleGrid(mask64, M, u, w) > 0.5) r = t;
    }
    boundary[k * 2] = cx + dx * r;
    boundary[k * 2 + 1] = cy + dy * r;
  }
  // distance-to-wall field (uv units) for particles
  const ins64 = new Uint8Array(M * M);
  for (let i = 0; i < M * M; i++) ins64[i] = dome64[i] > 0.5 ? 1 : 0;
  const dist64 = edt(ins64, M, M);
  for (let i = 0; i < M * M; i++) dist64[i] /= M;

  // average print colour (tints the light passing through transparent stickers)
  const ad = actx.getImageData(0, 0, S, S).data;
  let ar = 0, ag = 0, ab = 0, aw = 0;
  for (let i = 0; i < S * S; i += 7) {
    const w = ad[i * 4 + 3];
    ar += ad[i * 4] * w; ag += ad[i * 4 + 1] * w; ab += ad[i * 4 + 2] * w; aw += w;
  }
  const avg = aw > 0 ? [ar / aw / 255, ag / aw / 255, ab / aw / 255] : [1, 1, 1];
  const tex = {
    art: Texture.fromCanvas(artC, { mip: true }),
    norm: new Texture(S, S, { data: new Uint8Array(normD.buffer) }),
    mat: new Texture(S, S, { data: new Uint8Array(matD.buffer), nearest: !!facetId }),
  };
  return {
    def,
    variant: v,
    mat: MAT[def.mat] ?? 0,
    matName: def.mat,
    dome: def.dome ?? 0.12,
    tex,
    mask64,
    dome64,
    dist64,
    boundary,
    centroid: [cx, cy],
    artCanvas: artC,
    avg,
  };
}

export function sampleGrid(g, M, u, v) {
  const x = Math.min(M - 1.001, Math.max(0, u * M - 0.5));
  const y = Math.min(M - 1.001, Math.max(0, v * M - 0.5));
  const x0 = Math.floor(x), y0 = Math.floor(y);
  const fx = x - x0, fy = y - y0;
  const a = g[y0 * M + x0], b = g[y0 * M + x0 + 1], c = g[(y0 + 1) * M + x0], d = g[(y0 + 1) * M + x0 + 1];
  return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy;
}
