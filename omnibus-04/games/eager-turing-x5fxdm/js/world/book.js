// The transparent sticker book: a strawberry-milk ring binder whose pages are clear films.
// Pages are bent by a two-angle "floppy sheet" model (root angle driven by gravity and the
// finger, tip angle lagging behind), so lifting / turning a page shows bending and delay.
// The whole book can be tilted with a finger; light, glints and rainbow caustics respond.
import * as M from '../core/mat4.js';
import { Texture } from '../core/gl.js';
import { bookBoard, bookCover, filmPrint, softBlob, ringYs, canvas } from '../art/paint.js';
import { Sticker, TRANSPARENT, shadowTintOf } from './sticker.js';
import { clamp, lerp, PI, smooth } from '../core/math.js';
import { audio } from '../core/audio.js';

const P = 600; // page size in page units
const NS = 24;
export const BOOK_UNIT = 140; // sticker base size in page units

let TEX = null;
function textures() {
  if (TEX) return TEX;
  const ringC = canvas(64, 128);
  const g = ringC.getContext('2d');
  const grd = g.createLinearGradient(0, 0, 64, 0);
  grd.addColorStop(0, '#8a8f99');
  grd.addColorStop(0.35, '#ffffff');
  grd.addColorStop(0.6, '#c9ced8');
  grd.addColorStop(1, '#7d828c');
  g.strokeStyle = grd;
  g.lineWidth = 14;
  g.beginPath();
  g.ellipse(32, 64, 20, 52, 0, 0, Math.PI * 2);
  g.stroke();
  TEX = {
    board: { pink: Texture.fromCanvas(bookBoard('pink'), { mip: true }), blue: Texture.fromCanvas(bookBoard('blue'), { mip: true }) },
    cover: { pink: Texture.fromCanvas(bookCover('pink'), { mip: true }), blue: Texture.fromCanvas(bookCover('blue'), { mip: true }) },
    films: [0, 1, 2, 3].map((k) => Texture.fromCanvas(filmPrint(k), { mip: true })),
    blob: Texture.fromCanvas(softBlob(128, true), { mip: true }),
    ring: Texture.fromCanvas(ringC, { mip: true }),
  };
  return TEX;
}

export class Book {
  constructor(game, opts = {}) {
    this.game = game;
    this.theme = opts.theme || 'pink';
    this.flippable = opts.flippable ?? true;
    const n = opts.pages ?? 10;
    this.pages = Array.from({ length: n }, (_, i) => ({ stickers: [], print: i % 4 }));
    this.cur = 0;
    this.flip = null;
    this.tilt = { x: 0, y: 0, vx: 0, vy: 0, tx: 0, ty: 0, ex: 0, ey: 0 };
    this.rect = { x: 0, y: 0, w: 100, h: 100 };
    this.offsetX = 0; // horizontal pan (friend's book in the station strip)
    this.idle = 0;
    this.breeze = 0;
    this.hover = 0;
    this.chainBuf = new Float32Array(25 * 4);
    this.flatChain = new Float32Array(25 * 4);
    for (let i = 0; i <= NS; i++) {
      this.flatChain.set([(i / NS) * P, 0, 0, 1], i * 4);
    }
    this.gap = 5;
    this.tex = textures();
    this.onChange = null;
  }

  layout(rect, maxPage = Infinity) {
    this.rect = rect;
    const ringW = 0.07;
    const avW = rect.w / (1 + ringW + 0.05), avH = rect.h / 1.1;
    this.pagePx = Math.min(avW, avH, maxPage);
    this.scale = this.pagePx / P;
    this.cx = rect.x + rect.w / 2 + this.pagePx * 0.03;
    this.cy = rect.y + rect.h / 2;
    this.unitPx = this.scale;
  }

  get model() {
    return this._model;
  }

  computeModel() {
    const t = this.tilt;
    this._rot = M.chain(M.rotX(t.x), M.rotY(t.y));
    this._model = M.chain(
      M.translate(this.cx + this.offsetX, this.cy, 0),
      this._rot,
      M.scale(this.scale, this.scale, this.scale),
      M.translate(-P / 2, -P / 2, 0),
    );
    this._inv = M.invert(this._model);
    const L = this.game.light.dir;
    // light in page space (rotation only)
    const r = this._rot;
    const lx = r[0] * L[0] + r[1] * L[1] + r[2] * L[2];
    const ly = r[4] * L[0] + r[5] * L[1] + r[6] * L[2];
    const lz = r[8] * L[0] + r[9] * L[1] + r[10] * L[2];
    this.lightS = [lx, ly, lz];
    // in-plane gravity (page coords) for glitter: world down (0,0,-1) projected
    const gx = -r[8], gy = -r[9];
    this.gravity = [gx * -3, gy * -3 + 0.15];
  }

  // screen point -> page coords (ray / plane intersection)
  toPage(sx, sy) {
    const cam = this.game.cam;
    const inv = this._inv;
    const a = M.apply(inv, cam[0], cam[1], cam[2]);
    const b = M.apply(inv, sx, sy, 0);
    const dz = b[2] - a[2];
    const t = Math.abs(dz) < 1e-6 ? 0 : -a[2] / dz;
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  }

  pageToScreen(px, py, pz = 0) {
    const w = M.apply(this._model, px, py, pz);
    const cam = this.game.cam;
    const k = cam[2] / (cam[2] - w[2]);
    return [cam[0] + (w[0] - cam[0]) * k, cam[1] + (w[1] - cam[1]) * k];
  }

  containsScreen(sx, sy, margin = 0) {
    const [px, py] = this.toPage(sx, sy);
    const m = margin / this.scale;
    return px > -P * 0.08 - m && px < P + m && py > -m && py < P + m;
  }

  get page() {
    return this.pages[this.cur] || null;
  }

  surface(z = 0, chain = null, depthScale = 0) {
    return {
      model: this._model,
      unitPx: this.scale,
      chain,
      page: chain ? [P, P] : null,
      lightS: this.lightS,
      shadowZ: z - this.gap,
      depthScale,
    };
  }

  // ---------- interaction ----------
  pick(sx, sy, slopPx = 14) {
    if (this.flip || !this.page) return null;
    const [px, py] = this.toPage(sx, sy);
    const list = this.page.stickers;
    const slop = slopPx / this.scale;
    for (let i = list.length - 1; i >= 0; i--) {
      const h = list[i].hit(px, py, slop);
      if (h) return { sticker: list[i], hit: h, px, py };
    }
    return null;
  }

  zoneAt(sx, sy) {
    const [px, py] = this.toPage(sx, sy);
    if (py < -20 || py > P + 20) return null;
    if (this.flippable && px > P * 0.8 && px < P * 1.08 && this.cur < this.pages.length) return { kind: 'flip', px, py };
    if (this.flippable && px < P * 0.13 && px > -P * 0.12 && this.cur > 0) return { kind: 'flipBack', px, py };
    if (px > -P * 0.1 && px < P * 1.05) return { kind: 'tilt', px, py };
    return null;
  }

  beginFlip(kind, sx, sy) {
    const [px] = this.toPage(sx, sy);
    if (kind === 'flip') {
      if (this.cur >= this.pages.length - 1) {
        // last page: it lifts but cannot be turned
      }
      this.flip = { idx: this.cur, phiR: 0.0, vR: 0, phiT: 0.04, vT: 0, grab: true, gx: px, back: false, last: 0, vx: 0, lastX: sx, t: 0 };
      this.cur = this.cur + 1;
    } else {
      this.flip = { idx: this.cur - 1, phiR: PI, vR: 0, phiT: PI - 0.04, vT: 0, grab: true, gx: px, back: true, last: PI, vx: 0, lastX: sx, t: 0 };
    }
    audio.pageFlip({ intensity: 0.35 });
    return this.flip;
  }

  dragFlip(sx, sy, dt) {
    const f = this.flip;
    if (!f) return;
    const [px] = this.toPage(sx, sy);
    f.vx = lerp(f.vx, (sx - f.lastX) / Math.max(dt, 1e-3), 0.3);
    f.lastX = sx;
    // finger x -> desired edge x (exaggerated so a short swipe turns the page)
    let edge;
    if (!f.back) edge = P - (f.gx - px) * 1.7;
    else edge = -P + (px - f.gx) * 1.7;
    edge = clamp(edge, -P, P);
    let target = Math.acos(edge / P);
    if (!f.back) target = Math.max(target, 0.1);
    else target = Math.min(target, PI - 0.1);
    if (f.idx >= this.pages.length - 1 && !f.back) target = Math.min(target, 0.9); // can't turn the back cover
    f.target = target;
  }

  releaseFlip() {
    const f = this.flip;
    if (!f) return;
    f.grab = false;
    // a flick decides the direction; otherwise gravity does
    const flick = f.vx / Math.max(this.pagePx, 1);
    let kick = -flick * 4.0;
    if (f.idx >= this.pages.length - 1) kick = Math.min(kick, 0) - 3;
    f.vR += kick;
    f.vT += kick * 0.6;
    audio.pageFlip({ intensity: 0.5 });
  }

  tiltTo(sx, sy, active) {
    const t = this.tilt;
    if (!active) {
      t.tx = 0;
      t.ty = 0;
      return;
    }
    const half = this.pagePx / 2;
    const dx = clamp((sx - (this.cx + this.offsetX)) / half, -1.3, 1.3);
    const dy = clamp((sy - this.cy) / half, -1.3, 1.3);
    t.tx = -dy * 0.36;
    t.ty = dx * 0.36;
  }

  // ---------- sticker management ----------
  addSticker(st, pageIdx = this.cur) {
    const pg = this.pages[pageIdx];
    if (!pg) return false;
    st.unit = BOOK_UNIT;
    pg.stickers.push(st);
    this.changed();
    return true;
  }

  removeSticker(st) {
    for (const pg of this.pages) {
      const i = pg.stickers.indexOf(st);
      if (i >= 0) {
        pg.stickers.splice(i, 1);
        this.changed();
        return true;
      }
    }
    return false;
  }

  changed() {
    if (this.onChange) this.onChange();
  }

  stickerCount() {
    return this.pages.reduce((a, p) => a + p.stickers.length, 0);
  }

  // ---------- simulation ----------
  update(dt, time) {
    const t = this.tilt;
    const ex = this.tilt.ex || 0, ey = this.tilt.ey || 0;
    const k = 70, c = 9;
    t.vx += ((t.tx + ex - t.x) * k - t.vx * c) * dt;
    t.vy += ((t.ty + ey - t.y) * k - t.vy * c) * dt;
    t.x += t.vx * dt;
    t.y += t.vy * dt;
    t.x = clamp(t.x, -0.5, 0.5);
    t.y = clamp(t.y, -0.5, 0.5);
    this.idle += dt;
    // a little breeze lifts the free edge now and then (an invitation to turn the page)
    if (this.flippable && this.idle > 7) {
      this.breeze = Math.max(0, Math.sin((this.idle - 7) * 1.4)) * 0.09;
      if (this.idle > 9.3) this.idle = 4;
    } else this.breeze *= Math.exp(-dt * 4);
    this.computeModel();

    const f = this.flip;
    if (f) {
      f.t += dt;
      if (f.grab && f.target != null) {
        f.vT += ((f.target - f.phiT) * 520 - f.vT * 38) * dt;
        f.vR += ((f.phiT - f.phiR) * 55 - f.vR * 9 - Math.cos(f.phiR) * 6) * dt;
      } else {
        // gravity torque on the root, tip lags (air drag + bending)
        f.vR += (-Math.cos(f.phiR) * 16 - f.vR * 2.2) * dt;
        f.vT += ((f.phiR - f.phiT) * 85 - f.vT * 9) * dt;
      }
      f.phiR += f.vR * dt;
      f.phiT += f.vT * dt;
      for (const key of ['phiR', 'phiT']) {
        if (f[key] < 0) { f[key] = 0; const vk = key === 'phiR' ? 'vR' : 'vT'; f[vk] = Math.abs(f[vk]) * 0.15; }
        if (f[key] > PI) { f[key] = PI; const vk = key === 'phiR' ? 'vR' : 'vT'; f[vk] = -Math.abs(f[vk]) * 0.15; }
      }
      if (!f.grab) {
        const settledRight = f.phiR < 0.01 && f.phiT < 0.02 && Math.abs(f.vR) < 0.3;
        const settledLeft = f.phiR > PI - 0.01 && f.phiT > PI - 0.02 && Math.abs(f.vR) < 0.3;
        if (settledRight || settledLeft || f.t > 6) {
          const right = settledRight || (!settledLeft && f.phiR < PI / 2);
          this.cur = right ? f.idx : f.idx + 1;
          this.flip = null;
          audio.pageLand({ intensity: 0.4 });
          this.changed();
        }
      }
    }
    // stickers
    const g = this.gravity;
    for (let p = Math.max(0, this.cur - 1); p < Math.min(this.pages.length, this.cur + 3); p++) {
      for (const s of this.pages[p].stickers) {
        s.gravity = g;
        s.update(dt);
      }
    }
  }

  chainFor(phiR, phiT) {
    const buf = this.chainBuf;
    let x = 0, z = 0;
    const ds = P / NS;
    for (let i = 0; i <= NS; i++) {
      const s = i / NS;
      const phi = phiR + (phiT - phiR) * Math.pow(s, 1.6);
      buf[i * 4] = x;
      buf[i * 4 + 1] = z;
      buf[i * 4 + 2] = -Math.sin(phi);
      buf[i * 4 + 3] = Math.cos(phi);
      const phiMid = phiR + (phiT - phiR) * Math.pow((i + 0.5) / NS, 1.6);
      x += Math.cos(phiMid) * ds;
      z += Math.sin(phiMid) * ds;
    }
    return buf;
  }

  // ---------- rendering ----------
  render(R, time, opts = {}) {
    const T = this.tex;
    const theme = this.theme;
    const L = this.game.light;
    // book shadow on the table: offset away from the light, grows with tilt
    const sh = this.pagePx * 1.22;
    if (!opts.noShadow) {
    const off = [-L.dir[0] / Math.max(L.dir[2], 0.25) * 10, -L.dir[1] / Math.max(L.dir[2], 0.25) * 10];
    R.drawShadow({
      design: { tex: { art: T.blob } }, art: T.blob, x: this.cx + this.offsetX + off[0] - this.pagePx * 0.02, y: this.cy + off[1] + 4,
      size: [sh * 1.18, sh * 1.12], rot: 0, dome: 0,
    }, 0.55 + Math.abs(this.tilt.x + this.tilt.y) * 0.3, [0.55, 0.45, 0.5], 1.0, 0, 1.0);
    }
    // cover board (open back cover)
    const surf0 = this.surface(-this.gap * 4);
    const coverW = P * 1.16, coverH = P * 1.1;
    R.drawPaint({ art: T.cover[theme], model: this._model, x: P / 2 - P * 0.045, y: P / 2, size: [coverW, coverH], lit: 1, lift: -this.gap * 4.2 });
    R.drawPaint({ art: T.board[theme], model: this._model, x: P / 2, y: P / 2, size: [P * 1.02, P * 1.02], lit: 1, lift: -this.gap * 4 });

    const f = this.flip;
    const top = this.cur;
    const depth = 2;
    let captured = false;
    // pages on the right stack, deepest first
    for (let p = Math.min(this.pages.length - 1, top + depth); p >= top; p--) {
      const k = p - top;
      const z = -k * this.gap;
      const pg = this.pages[p];
      const fade = k === 0 ? 1 : k === 1 ? 0.85 : 0.7;
      // film first (milky haze over everything below)
      R.drawFilm({ model: this._model, x: P / 2, y: P / 2, size: [P, P], art: T.films[pg.print], lift: z, haze: 0.06, alpha: k === 0 ? 1 : 0.55, edgeBoost: k === 0 ? 1 : 0.4 });
      this.renderStickers(R, pg.stickers, this.surface(z), time, z, fade, p === top && this.breeze > 0 ? this.breeze : 0);
      void captured;
    }
    // the turning page
    if (f) {
      const pg = this.pages[f.idx];
      const chain = this.chainFor(f.phiR, f.phiT);
      const s = this.surface(0, chain, 1 / 3000);
      // shadows fall on the stack below
      for (const st of pg.stickers) R.drawShadow(st.item({ ...s, shadowZ: 0 }, time), 0.5, [0.45, 0.38, 0.5], 1.0, 0.05);
      R.drawFilm({ model: this._model, x: P / 2, y: P / 2, size: [P, P], art: T.films[pg.print], chain, page: [P, P], alpha: 0.5, haze: 0.0 });
      R.captureBackdrop();
      const gl = R.gl;
      R.clearDepth();
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.depthMask(true);
      for (const st of pg.stickers) R.drawSticker(st.item({ ...s, depthScale: 1 / 3000 }, time));
      gl.depthMask(false);
      R.drawFilm({ model: this._model, x: P / 2, y: P / 2, size: [P, P], art: T.films[pg.print], chain, page: [P, P], depthScale: 1 / 3000, haze: 0.02 });
      gl.depthMask(true);
      gl.disable(gl.DEPTH_TEST);
    }
    // binder rings
    for (const yy of ringYs()) {
      R.drawPaint({ art: T.ring, model: this._model, x: P * 0.035 - P * 0.01, y: yy * P, size: [P * 0.07, P * 0.13], lit: 1, lift: 14 });
    }
  }

  renderStickers(R, list, surf, time, z, fade = 1, breeze = 0) {
    if (!list.length) return;
    const items = list.map((s) => {
      const it = s.item(surf, time);
      it.lift = (it.lift || 0) + z;
      it.alpha = (it.alpha ?? 1) * fade;
      return it;
    });
    // contact shadows (transparent stickers cast tinted, lighter shadows)
    items.forEach((it, i) => {
      const [tint, amt] = shadowTintOf(list[i]);
      R.drawShadow(it, amt * fade, tint, 0.9, 0.05);
    });
    // light through clear stickers: focused caustics and rainbow streaks
    const L = this.lightS || [0, 0, 1];
    const graze = 1 - Math.min(1, Math.max(0, L[2]));
    for (let i = 0; i < items.length; i++) {
      const m = list[i].mat;
      if (TRANSPARENT.has(m)) {
        R.drawCaustic(items[i], (0.35 + graze * 0.8) * fade * (m === 'clear' ? 1 : 0.6), items[i].size * (0.15 + graze * 0.6), this.scale);
      }
      if (TRANSPARENT.has(m) || m === 'holo') {
        R.drawRainbow(items[i], L, fade * (m === 'clear' ? 1 : m === 'holo' ? 0.8 : 0.6), this.game.tex.rainbow);
      }
    }
    R.captureBackdrop();
    for (const it of items) R.drawSticker(it);
    void breeze;
  }

  // ---------- persistence ----------
  serialize() {
    return { cur: this.cur, pages: this.pages.map((p) => ({ s: p.stickers.map((s) => s.serialize()), pr: p.print })) };
  }

  load(data) {
    if (!data || !Array.isArray(data.pages)) return;
    data.pages.forEach((pd, i) => {
      if (!this.pages[i]) this.pages[i] = { stickers: [], print: i % 4 };
      const pg = this.pages[i];
      if (pd.pr != null) pg.print = pd.pr;
      for (const sd of pd.s || []) {
        try {
          const st = new Sticker(sd.id, { x: sd.x, y: sd.y, rot: sd.r, scale: sd.k, unit: BOOK_UNIT, seed: sd.sd, custom: sd.c || null, nap: sd.nap || null });
          pg.stickers.push(st);
        } catch (e) {
          /* unknown sticker: skip */
        }
      }
    });
    this.cur = clamp(data.cur | 0, 0, this.pages.length - 1);
  }
}

export const PAGE_UNITS = P;
