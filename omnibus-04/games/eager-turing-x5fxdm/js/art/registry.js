// Lazily baked design cache (catalogue stickers + handmade stickers + props).
import { bakeDesign } from './bake.js';
import { DESIGNS, resolveDesign } from './designs.js';
import { heart } from './shapes.js';
import { gl, FBO, PointMesh, blend } from '../core/gl.js';
import { Glitter } from '../sim/glitter.js';

const cache = new Map();
const extra = {};

export function registerDesign(key, def) {
  extra[key] = def;
}

export function getDesign(id, custom = null) {
  const key = custom ? 'hm:' + custom.id : id;
  let d = cache.get(key);
  if (d) return d;
  if (custom) {
    d = bakeHandmade(custom);
  } else if (extra[id]) {
    d = bakeDesign(extra[id], extra[id].variant || {});
  } else {
    const r = resolveDesign(id);
    const def = DESIGNS[r.key];
    if (!def) throw new Error('unknown design ' + id);
    d = bakeDesign(def, r.variant);
  }
  d.id = id;
  cache.set(key, d);
  return d;
}

export function hasDesign(id) {
  return cache.has(id);
}

export function allCatalogIds() {
  return Object.keys(DESIGNS);
}

// ---- handmade resin hearts ----
export const HANDMADE_TINTS = {
  clear: { art: '#f4fbff', tint: [0.96, 0.99, 1.0] },
  pink: { art: '#ffc2d8', tint: [1.0, 0.76, 0.86] },
  blue: { art: '#bfe6ff', tint: [0.78, 0.92, 1.0] },
  lemon: { art: '#fff0b0', tint: [1.0, 0.96, 0.75] },
};

export const HANDMADE_SHAPE = (ctx, S) => heart(ctx, S * 0.5, S * 0.53, S * 0.82, S * 0.74);

function bakeHandmade(c) {
  const t = HANDMADE_TINTS[c.tint] || HANDMADE_TINTS.clear;
  const def = {
    mat: 'clear', dome: 0.17, rim: 0.24, size: 1.05, param: [0.32, 0.07, 1.25, 0.55],
    shape(ctx, S) { HANDMADE_SHAPE(ctx, S); ctx.fill(); },
    art(ctx, S) { HANDMADE_SHAPE(ctx, S); ctx.fillStyle = t.art; ctx.fill(); },
  };
  const d = bakeDesign(def, {});
  d.inclFbo = renderInclusions(c.inc || []);
  return d;
}

let inclMesh = null;
// inc entries: {k:'glitter'|'pearl'|'star'|'heart', u, v, s(size px @160), r(rot), h(hue 0..1), ax, ay}
export function renderInclusions(inc, fbo = null) {
  const RES = 160;
  if (!fbo) fbo = new FBO(RES, RES, {});
  if (!inclMesh) inclMesh = new PointMesh(600, 8);
  const D = inclMesh.data;
  let k = 0;
  const order = [...inc].sort((a, b) => (KORD[a.k] || 0) - (KORD[b.k] || 0));
  let n = 0;
  for (const e of order) {
    if (n >= 600) break;
    const shape = e.k === 'pearl' ? 1 : e.k === 'star' ? 2 : e.k === 'heart' ? 3 : 0;
    const mat = e.k === 'pearl' ? 1 : e.k === 'star' ? 2 : e.k === 'heart' ? 3 : 0;
    D[k++] = e.u;
    D[k++] = e.v;
    D[k++] = e.s;
    D[k++] = e.r || 0;
    D[k++] = e.ax || 0;
    D[k++] = e.ay || 0;
    D[k++] = mat * 64 + Math.floor((e.h || 0) * 63);
    D[k++] = shape;
    n++;
  }
  inclMesh.upload(n);
  const prevFb = gl.getParameter(gl.FRAMEBUFFER_BINDING);
  const vp = gl.getParameter(gl.VIEWPORT);
  fbo.bind();
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  blend('none');
  Glitter.prog.use();
  inclMesh.draw();
  blend('alpha');
  gl.bindFramebuffer(gl.FRAMEBUFFER, prevFb);
  gl.viewport(vp[0], vp[1], vp[2], vp[3]);
  return fbo;
}
const KORD = { glitter: 0, star: 1, heart: 2, pearl: 3 };
