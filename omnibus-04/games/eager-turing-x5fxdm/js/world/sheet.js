// A sticker sheet on the shop counter. Slots refill after a sticker has been taken away,
// so the supply never runs out. Stickers dropped back onto the sheet stay where they land.
import { Texture } from '../core/gl.js';
import * as M from '../core/mat4.js';
import { sheetCard, ghostFromArt } from '../art/paint.js';
import { Sticker, TRANSPARENT, shadowTintOf } from './sticker.js';
import { rng, clamp } from '../core/math.js';
import { audio } from '../core/audio.js';

export const SHEETS = [
  { name: 'favorites', theme: { bg: '#fff6f9', band: '#ffb8cf', dot: '#ff9fbf', motif: 'heart', seed: 1 },
    ids: ['strawberry', 'heartGlitter', 'bunnyWhite', 'heartPink', 'ribbonPink', 'pearlCream', 'starBlue', 'gemPink', 'pudding'], curl: [0] },
  { name: 'sweets', theme: { bg: '#fffaf0', band: '#ffd08a', dot: '#ffb36b', motif: 'dot', seed: 2 },
    ids: ['donutPink', 'cherry', 'macaronLilac', 'iceCream', 'candy', 'strawberry', 'pudding', 'donutChoco', 'macaronMint'], curl: [1] },
  { name: 'animals', theme: { bg: '#f7fbff', band: '#b9dcff', dot: '#9cc8f5', motif: 'star', seed: 3 },
    ids: ['bunnyPink', 'bearBrown', 'kitty', 'bearCream', 'bunnyWhite', 'cloud', 'kitty'], curl: [2] },
  { name: 'sky', theme: { bg: '#f6f4ff', band: '#c9b8ff', dot: '#b49cff', motif: 'star', seed: 4 },
    ids: ['moon', 'starBlue', 'rainbow', 'drop', 'glitterStar', 'cloud', 'heartClear', 'drop'], curl: [0] },
  { name: 'jewels', theme: { bg: '#fffaf8', band: '#f5c6e6', dot: '#e6a8d6', motif: 'heart', seed: 5 },
    ids: ['gemLilac', 'pearlPink', 'crown', 'gemAqua', 'shell', 'butterfly', 'gemPink', 'pearlCream', 'heartGlitter'], curl: [3] },
  { name: 'ribbons', theme: { bg: '#f8fff9', band: '#a8e6c9', dot: '#86d6b0', motif: 'dot', seed: 6 },
    ids: ['ribbonLilac', 'sakura', 'ribbonMint', 'clover', 'ribbonRed', 'sakura', 'ribbonPink', 'clover'], curl: [2] },
];

// Shared behaviour of containers whose stickers sit in refillable slots (sheets, the
// turntable). The container may rotate (theta) - stickers then turn with it.
export class SlotBox {
  constructor(game) {
    this.game = game;
    this.slots = [];
    this.free = [];
    this.cx = 0;
    this.cy = 0;
    this.theta = 0;
    this.unit = 90;
    this.ghosts = new Map();
    this.built = false;
    this.gravity = [0, 0.35];
  }

  get model() {
    return M.chain(M.translate(this.cx, this.cy, 0), M.rotZ(this.theta));
  }

  get worldRot() {
    return this.theta;
  }

  get unitPx() {
    return 1;
  }

  toLocal(sx, sy) {
    const dx = sx - this.cx, dy = sy - this.cy;
    const c = Math.cos(-this.theta), s = Math.sin(-this.theta);
    return [c * dx - s * dy, s * dx + c * dy];
  }

  toWorld(lx, ly) {
    const c = Math.cos(this.theta), s = Math.sin(this.theta);
    return [this.cx + c * lx - s * ly, this.cy + s * lx + c * ly];
  }

  build() {
    if (this.built) return;
    this.built = true;
    for (const s of this.slots) if (!s.sticker) this.fill(s, 1);
  }

  fill(slot, appear = 0) {
    const st = new Sticker(slot.id, { x: slot.x, y: slot.y, rot: slot.rot, scale: slot.scale, unit: this.unit, curl: slot.curl ? -0.75 : null });
    st.gravity = this.gravity;
    slot.sticker = st;
    slot.appear = appear;
    return st;
  }

  stickers() {
    const a = [];
    for (const s of this.slots) if (s.sticker) a.push(s.sticker);
    return a.concat(this.free);
  }

  pick(sx, sy) {
    if (!this.built) return null;
    const [lx, ly] = this.toLocal(sx, sy);
    const list = this.stickers();
    for (let i = list.length - 1; i >= 0; i--) {
      if (list[i].fixed) continue;
      const h = list[i].hit(lx, ly, 14);
      if (h) return { sticker: list[i], hit: h };
    }
    return null;
  }

  hitTest(sx, sy) {
    const p = this.pick(sx, sy);
    return p ? { kind: 'sticker', box: this, ...p } : null;
  }

  detach(st) {
    for (const s of this.slots) {
      if (s.sticker === st) {
        s.sticker = null;
        s.refill = -1; // waits until the sticker lands somewhere
        s.ghost = st.design;
        return { box: this, slot: s, x: st.x, y: st.y, rot: st.rot, unit: st.unit };
      }
    }
    const i = this.free.indexOf(st);
    if (i >= 0) this.free.splice(i, 1);
    return { box: this, slot: null, x: st.x, y: st.y, rot: st.rot, unit: st.unit };
  }

  // the taken sticker has been placed elsewhere -> start the refill timer
  released(origin) {
    if (origin.slot) origin.slot.refill = 1.4;
  }

  restore(st, origin) {
    st.unit = this.unit;
    st.x = origin.x;
    st.y = origin.y;
    st.rot = origin.rot;
    if (origin.slot && !origin.slot.sticker) {
      origin.slot.sticker = st;
      origin.slot.refill = 0;
    } else this.free.push(st);
  }

  acceptLocal(st, lx, ly, rotWorld) {
    st.x = lx;
    st.y = ly;
    st.rot = rotWorld - this.theta;
    st.unit = this.unit;
    st.gravity = this.gravity;
    this.free.push(st);
    if (this.free.length > 8) {
      const old = this.free.shift();
      old.dispose();
    }
  }

  updateSlots(dt, visible) {
    for (const s of this.slots) {
      if (!s.sticker && s.refill > 0) {
        s.refill -= dt;
        if (s.refill <= 0 && this.built) {
          this.fill(s, 0);
          if (visible) audio.plop({ intensity: 0.25, pitch: 1.4 });
        }
      }
      if (s.sticker && s.appear < 1) s.appear = Math.min(1, s.appear + dt * 2.2);
    }
    if (!visible) return;
    for (const st of this.stickers()) st.update(dt);
  }

  renderGhosts(R) {
    const model = this.model;
    for (const s of this.slots) {
      if (s.sticker || !s.ghost) continue;
      R.drawPaint({ art: this.ghostTex(s.ghost), model, x: s.x, y: s.y, rot: s.rot, size: this.unit * (s.ghost.def.size || 1) * s.scale, lit: 1, alpha: 0.5 });
    }
  }

  renderStickers(R, time, extraList = []) {
    const model = this.model;
    const surf = { model, unitPx: 1 };
    // skip stickers that are completely off screen (peeking neighbours)
    const W = this.game.W;
    const list = this.stickers().concat(extraList).filter((st) => {
      const [wx] = this.toWorld(st.x, st.y);
      const r = st.size * 0.8;
      return wx + r > -20 && wx - r < W + 20;
    });
    const items = list.map((st) => {
      const it = st.item(surf, time);
      const slot = this.slots.find((s) => s.sticker === st);
      if (slot && slot.appear < 1) {
        const a = slot.appear;
        it.alpha = a;
        it.size *= 0.75 + 0.25 * (1 - (1 - a) * (1 - a)) + Math.sin(a * Math.PI) * 0.08;
        it.dome = st.design.dome * it.size;
      }
      return it;
    });
    items.forEach((it, i) => {
      const [tint, amt] = shadowTintOf(list[i]);
      R.drawShadow(it, amt, tint, 0.9, 0.05);
    });
    const L = this.game.light;
    const graze = 1 - Math.min(1, Math.max(0, L.dir[2]));
    const c = Math.cos(-this.theta), sn = Math.sin(-this.theta);
    const Ls = [c * L.dir[0] - sn * L.dir[1], sn * L.dir[0] + c * L.dir[1], L.dir[2]];
    for (let i = 0; i < items.length; i++) {
      const m = list[i].mat;
      if (TRANSPARENT.has(m)) R.drawCaustic(items[i], (0.3 + graze * 0.7) * (m === 'clear' ? 1 : 0.6), items[i].size * (0.15 + graze * 0.55), 1);
      if (TRANSPARENT.has(m) || m === 'holo') R.drawRainbow(items[i], Ls, (m === 'clear' ? 0.9 : m === 'holo' ? 0.7 : 0.5) * (items[i].alpha ?? 1), this.game.tex.rainbow);
    }
    R.captureBackdrop();
    for (const it of items) R.drawSticker(it);
  }

  ghostTex(design) {
    let t = this.ghosts.get(design);
    if (!t) {
      t = Texture.fromCanvas(ghostFromArt(design.artCanvas), { mip: true });
      this.ghosts.set(design, t);
    }
    return t;
  }
}

export class SheetStation extends SlotBox {
  constructor(game, def, index) {
    super(game);
    this.def = def;
    this.index = index;
    this.kind = 'sheet';
    this.w = 300;
    this.h = 360;
    this.tex = null;
  }

  layout(cx, cy, w, h) {
    const changed = Math.abs(w - this.w) > 1 || Math.abs(h - this.h) > 1 || !this.tex;
    this.cx = cx;
    this.cy = cy;
    this.w = w;
    this.h = h;
    if (changed) {
      if (this.tex) this.tex.dispose();
      this.tex = Texture.fromCanvas(sheetCard(this.def.theme, Math.min(512, w * 1.5), Math.min(640, h * 1.5)), { mip: true });
      this.unit = Math.min(w / 3.25, (h * 0.86) / 3.35, 150);
      this.arrange();
    }
  }

  arrange() {
    const ids = this.def.ids;
    const n = ids.length;
    const cols = n > 6 ? 3 : 2 + (n > 4 ? 1 : 0);
    const rows = Math.ceil(n / cols);
    const r = rng(this.def.theme.seed * 77);
    const top = -this.h / 2 + this.h * 0.14;
    const cellW = this.w / cols, cellH = (this.h * 0.84) / rows;
    const old = this.slots;
    this.slots = ids.map((id, i) => {
      const c = i % cols, rr = Math.floor(i / cols);
      const x = -this.w / 2 + (c + 0.5) * cellW + (r() - 0.5) * cellW * 0.12;
      const y = top + (rr + 0.5) * cellH + (r() - 0.5) * cellH * 0.1;
      const slot = { id, x, y, rot: (r() - 0.5) * 0.35, scale: 0.86 + r() * 0.16, sticker: null, refill: 0, appear: 1, curl: this.def.curl.includes(i) };
      const prev = old[i];
      if (prev && prev.sticker) {
        slot.sticker = prev.sticker;
        slot.sticker.x = x;
        slot.sticker.y = y;
        slot.sticker.unit = this.unit;
      }
      return slot;
    });
    for (const f of this.free) f.unit = this.unit;
  }

  contains(sx, sy, margin = 0) {
    const [lx, ly] = this.toLocal(sx, sy);
    return Math.abs(lx) < this.w / 2 + margin && Math.abs(ly) < this.h / 2 + margin;
  }

  canAccept(sx, sy) {
    return this.contains(sx, sy, -10);
  }

  accept(st, sx, sy) {
    const [lx, ly] = this.toLocal(sx, sy);
    this.acceptLocal(st, clamp(lx, -this.w / 2 + 20, this.w / 2 - 20), clamp(ly, -this.h / 2 + 20, this.h / 2 - 20), st.rot);
  }

  update(dt, visible) {
    this.updateSlots(dt, visible);
  }

  render(R, time) {
    const model = this.model;
    R.drawShadow({ design: { tex: { art: this.game.tex.blob } }, art: this.game.tex.blob, model, x: -6, y: 8, size: [this.w * 1.28, this.h * 1.24], dome: 0 }, 0.45, [0.6, 0.48, 0.5], 0.5, 0, 1.0);
    R.drawPaint({ art: this.tex, model, x: 0, y: 0, size: [this.w, this.h], lit: 1 });
    this.renderGhosts(R);
    this.renderStickers(R, time);
  }
}
