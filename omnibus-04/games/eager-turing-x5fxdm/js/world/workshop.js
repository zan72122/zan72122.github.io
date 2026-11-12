// The little workshop: a clear silicone mould with an empty heart window. Pinch glitter
// from the pot and sprinkle it in, drop pearls / stars / hearts from the dishes, then tip a
// resin bottle over the mould: the level rises with ripples, cures with a shine, and the
// finished heart can be peeled out like any other sticker.
import { SlotBox } from './sheet.js';
import { Sticker } from './sticker.js';
import { getDesign, renderInclusions } from '../art/registry.js';
import { sampleGrid } from '../art/bake.js';
import { BOTTLE_TINTS } from '../art/props.js';
import { audio } from '../core/audio.js';
import { clamp, lerp, rand, PI } from '../core/math.js';
import { blend } from '../core/gl.js';

const TINT_OF = { pink: 'pink', blue: 'blue', clear: 'clear' };
const GLITTER_HUES = [0.0, 0.07, 0.5, 0.72, 0.15];

export class WorkshopStation extends SlotBox {
  constructor(game, saved = null) {
    super(game);
    this.kind = 'workshop';
    this.gravity = [0, 0];
    this.inc = saved && Array.isArray(saved.inc) ? saved.inc.slice(0, 500) : [];
    this.level = saved ? clamp(saved.fill || 0, 0, 1) : 0;
    this.tint = saved && saved.tint ? saved.tint : 'clear';
    this.cure = -1;
    this.preview = null;
    this.inclDirty = true;
    this.bottles = BOTTLE_TINTS.map((b, i) => ({ ...b, i, x: 0, y: 0, hx: 0, hy: 0, rot: PI, pour: 0, held: false, sticker: null }));
    this.pendingReady = saved && saved.ready ? saved.ready : null;
    this.items = {};
  }

  layout(cx, cy, w, h) {
    this.w = w;
    this.h = h;
    this.cx = cx;
    this.cy = cy;
    this.ms = Math.min(w * 0.54, h * 0.5);
    this.mold = [-w * 0.14, -h * 0.15];
    this.hs = (this.ms * 0.7) / 0.82;
    this.unit = this.hs / 1.05;
    const ds = Math.min(w * 0.22, h * 0.22);
    this.ds = ds;
    this.dishes = [
      { kind: 'glitter', x: -w * 0.36, y: h * 0.3 },
      { kind: 'pearl', x: -w * 0.12, y: h * 0.3, rim: '#ffd6e4' },
      { kind: 'star', x: w * 0.12, y: h * 0.3, rim: '#ffe7a6' },
      { kind: 'heart', x: w * 0.36, y: h * 0.3, rim: '#d9c8ff' },
    ];
    this.bs = Math.min(w * 0.32, h * 0.3);
    this.bottles.forEach((b, i) => {
      b.hx = w * 0.32;
      b.hy = -h * 0.36 + i * h * 0.15;
      if (!b.held) { b.x = b.hx; b.y = b.hy; }
    });
    if (!this.dishItems) this.makeDishItems();
    for (const d of this.dishes) d.items = this.dishItems[d.kind];
    this.layoutDishItems();
    for (const s of this.slots) {
      s.x = this.mold[0];
      s.y = this.mold[1];
      if (s.sticker) s.sticker.unit = this.unit;
    }
  }

  setCenter(cx, cy) {
    this.cx = cx;
    this.cy = cy;
  }

  build() {
    if (this.built) return;
    this.built = true;
    if (this.pendingReady) {
      this.makeReady(this.pendingReady);
      this.pendingReady = null;
    }
    for (const s of this.slots) if (!s.sticker) this.fill(s, 1);
  }

  fill(slot, appear = 0) {
    const st = new Sticker('handmade', { x: slot.x, y: slot.y, rot: 0, unit: this.unit, custom: slot.custom, curl: -0.6 });
    st.gravity = [0, 0];
    slot.sticker = st;
    slot.appear = appear;
    return st;
  }

  makeDishItems() {
    const mk = (id, n) => Array.from({ length: n }, (_, i) => {
      const s = new Sticker(id, { unit: 30, rot: rand(-0.6, 0.6), seed: 900 + i });
      s.fixed = true;
      s.gravity = [0, 0];
      return s;
    });
    this.dishItems = {
      glitter: [],
      pearl: mk('pearlCream', 5).concat(mk('pearlPink', 2)),
      star: mk('starGold', 6),
      heart: mk('heartCharm', 5),
    };
    this.pot = new Sticker('glitterPot', { unit: 60, seed: 77 });
    this.pot.fixed = true;
    this.pot.gravity = [0, 0];
  }

  layoutDishItems() {
    for (const d of this.dishes) {
      const n = d.items.length;
      d.items.forEach((s, i) => {
        const a = (i / Math.max(1, n - 1)) * PI * 2 + d.x * 0.01;
        const r = i === n - 1 ? 0 : this.ds * 0.17;
        s.x = d.x + Math.cos(a) * r;
        s.y = d.y + Math.sin(a) * r * 0.9;
        s.unit = this.ds * (d.kind === 'pearl' ? 0.38 : 0.36);
      });
    }
    this.pot.x = this.dishes[0].x;
    this.pot.y = this.dishes[0].y;
    this.pot.unit = this.ds;
  }

  // ---- preview of the work in progress ----
  ensurePreview() {
    if (!this.preview || this.preview.custom.tint !== this.tint) {
      if (this.preview) this.preview.dispose();
      this.preview = new Sticker('handmade', { unit: this.unit, custom: { id: 'wip-' + this.tint, tint: this.tint, inc: [] } });
      this.preview.gravity = [0, 0];
      this.preview.fixed = true;
      this.inclDirty = true;
    }
    if (this.inclDirty) {
      this.inclFbo = renderInclusions(this.inc, this.inclFbo || null);
      this.inclDirty = false;
    }
    const p = this.preview;
    p.x = this.mold[0];
    p.y = this.mold[1];
    p.unit = this.unit;
    return p;
  }

  heartUV(lx, ly) {
    const p = this.ensurePreview();
    return p.localToUV(lx - p.x, ly - p.y);
  }

  insideHeart(u, v, margin = 0.02) {
    const d = this.ensurePreview().design;
    return sampleGrid(d.dist64, 64, u, v) > margin;
  }

  clampInside(u, v, margin) {
    const d = this.ensurePreview().design;
    for (let i = 0; i < 12 && sampleGrid(d.dist64, 64, u, v) < margin; i++) {
      u += (0.5 - u) * 0.15;
      v += (0.52 - v) * 0.15;
    }
    return [u, v];
  }

  addInclusion(e) {
    this.inc.push(e);
    if (this.inc.length > 500) this.inc.shift();
    this.inclDirty = true;
    this.game.requestSave();
  }

  get busy() {
    return this.cure >= 0 || this.slots.some((s) => s.sticker);
  }

  // ---- gestures ----
  hitTest(x, y) {
    const [lx, ly] = [x - this.cx, y - this.cy];
    // finished sticker in the mould
    const pk = this.pick(x, y);
    if (pk) return { kind: 'sticker', box: this, ...pk };
    // bottles
    for (let i = this.bottles.length - 1; i >= 0; i--) {
      const b = this.bottles[i];
      const dx = lx - b.x, dy = ly - b.y;
      if (Math.abs(dx) < this.bs * 0.45 && Math.abs(dy) < this.bs * 0.22) {
        return { kind: 'bottle', gesture: new BottleGesture(this, b, x, y) };
      }
    }
    // dishes
    for (const d of this.dishes) {
      if (Math.hypot(lx - d.x, ly - d.y) < this.ds * 0.52) {
        if (d.kind === 'glitter') return { kind: 'glitter', gesture: new GlitterGesture(this, x, y) };
        return { kind: 'item', gesture: new ItemGesture(this, d.kind, x, y) };
      }
    }
    // inclusions back out of the empty mould / ripple the liquid
    const dm = Math.hypot(lx - this.mold[0], ly - this.mold[1]);
    if (dm < this.ms * 0.5) {
      const [u, v] = this.heartUV(lx, ly);
      if (this.level < 0.04 && !this.busy) {
        for (let i = this.inc.length - 1; i >= 0; i--) {
          const e = this.inc[i];
          if (e.k === 'glitter') continue;
          if (Math.hypot(u - e.u, v - e.v) < (e.s / 160) * 0.7 + 0.03) {
            this.inc.splice(i, 1);
            this.inclDirty = true;
            return { kind: 'item', gesture: new ItemGesture(this, e.k, x, y, e) };
          }
        }
      }
      if (this.level > 0.04 && this.insideHeart(u, v, 0.0)) {
        return { kind: 'resin', gesture: new ResinTouch(this, u, v) };
      }
      return { kind: 'mold', gesture: new NullGesture() };
    }
    return null;
  }

  makeReady(custom) {
    const slot = { id: 'handmade', custom, x: this.mold[0], y: this.mold[1], rot: 0, scale: 1, sticker: null, refill: 0, appear: 1, once: true };
    this.slots = [slot];
    if (this.built) this.fill(slot, 0.2);
  }

  released(origin) {
    if (origin.slot && origin.slot.once) {
      this.slots = this.slots.filter((s) => s !== origin.slot);
      this.game.requestSave();
    }
  }

  restore(st, origin) {
    super.restore(st, origin);
    if (origin.slot && !this.slots.includes(origin.slot)) {
      this.slots.push(origin.slot);
      origin.slot.sticker = st;
    }
  }

  detach(st) {
    const o = super.detach(st);
    if (o.slot) o.slot.refill = -1;
    this.game.requestSave();
    return o;
  }

  update(dt, visible) {
    // bottles return home when let go (and fidget a little when nobody plays)
    this.idle = this.bottles.some((b) => b.held) ? 0 : (this.idle || 0) + dt;
    for (const b of this.bottles) {
      if (!b.held) {
        if (this.idle > 7 && this.level < 0.02 && !this.busy) {
          const ph = this.idle * 3 - b.i * 0.7;
          b.hx = this.w * 0.32 - Math.max(0, Math.sin(ph)) * this.w * 0.025 * (Math.floor(this.idle / 2.1) % 3 === b.i ? 1 : 0);
        } else b.hx = this.w * 0.32;
        b.x = lerp(b.x, b.hx, 1 - Math.exp(-dt * 9));
        b.y = lerp(b.y, b.hy, 1 - Math.exp(-dt * 9));
        b.pour = Math.max(0, b.pour - dt * 3);
        b.rot = lerp(b.rot, PI, 1 - Math.exp(-dt * 8));
      }
    }
    // curing
    if (this.cure >= 0) {
      this.cure += dt;
      if (this.cure > 1.7) {
        const custom = { id: 'hm' + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36), tint: this.tint, inc: this.inc.map((e) => ({ ...e })) };
        this.cure = -1;
        this.level = 0;
        this.inc = [];
        this.inclDirty = true;
        this.makeReady(custom);
        audio.success({ intensity: 0.7 });
        this.game.requestSave();
      }
    }
    if (this.preview) this.preview.update(dt);
    if (visible && this.pot) {
      this.pot.update(dt);
      for (const d of this.dishes) for (const s of d.items) s.update(dt);
    }
    this.updateSlots(dt, visible);
  }

  pourInto(b, dt, nozzle) {
    if (this.busy) return 0;
    const [u, v] = this.heartUV(nozzle[0], nozzle[1]);
    if (!this.insideHeart(u, v, -0.02)) return 0;
    if (this.level < 0.02) this.tint = TINT_OF[b.key] || 'clear';
    else if (TINT_OF[b.key] !== this.tint && this.level < 0.5) this.tint = TINT_OF[b.key];
    const p = this.ensurePreview();
    p.softMat = 'liquid';
    this.level = Math.min(1, this.level + dt * 0.3);
    if (Math.random() < dt * 12) {
      const s = p.ensureSoft();
      s.poke(u, v, 0.5);
    }
    if (this.level >= 1 && this.cure < 0) {
      this.cure = 0;
      audio.sparkle({ intensity: 0.8 });
    }
    this.game.requestSave();
    return 1;
  }

  canAccept() {
    return false;
  }

  serialize() {
    const ready = this.slots.find((s) => s.custom && s.sticker);
    return { inc: this.inc, fill: +this.level.toFixed(3), tint: this.tint, ready: ready ? ready.custom : this.pendingReady };
  }

  // ---- rendering ----
  render(R, time) {
    const T = this.game.tex;
    const base = [this.cx, this.cy];
    const W = (lx, ly) => [base[0] + lx, base[1] + ly];
    // work mat
    R.drawShadow({ design: { tex: { art: T.blob } }, art: T.blob, x: this.cx - 5, y: this.cy + 8, size: [this.w * 1.15, this.h * 1.1], dome: 0 }, 0.35, [0.6, 0.5, 0.55], 0.5, 0, 1.0);
    R.drawPaint({ art: this.game.room.tex.lace, x: this.cx, y: this.cy, size: [this.w * 1.02, this.h * 0.98], lit: 1, mul: [0.97, 1.0, 0.98] });
    // dishes
    const dish = getDesign('dish');
    for (const d of this.dishes) {
      const [x, y] = W(d.x, d.y);
      if (d.kind === 'glitter') {
        R.drawShadow(this.pot.item({ model: null }, time, { x, y }), 0.45, [0.5, 0.4, 0.55], 1, 0.05);
        continue;
      }
      const it = { design: dish, x, y, size: this.ds, dome: dish.dome * this.ds };
      R.drawShadow(it, 0.4, [0.5, 0.4, 0.55], 1, 0.05);
      R.drawSticker(it);
    }
    // mould
    const mold = getDesign('mold');
    const [mx, my] = W(this.mold[0], this.mold[1]);
    const moldItem = { design: mold, x: mx, y: my, size: this.ms, dome: mold.dome * this.ms, unitPx: 1 };
    R.drawShadow(moldItem, 0.35, [0.55, 0.5, 0.65], 1, 0.05);
    R.captureBackdrop();
    R.drawSticker(moldItem);
    // bottles (shadows)
    const bottle = getDesign('bottle');
    const bItems = this.bottles.map((b) => {
      const [x, y] = W(b.x, b.y);
      const lift = b.held ? this.bs * 0.35 : 0;
      return { design: getDesign('bottle:' + b.key), x, y, rot: b.rot, size: this.bs, dome: bottle.dome * this.bs, lift, sway: [0, b.pour * 0.5] };
    });
    for (const it of bItems) R.drawShadow(it, 0.42, [0.5, 0.42, 0.55], 1, 0.05);
    // work in progress inside the mould
    const surf = { model: null, unitPx: 1 };
    const p = this.ensurePreview();
    const pit = p.item(surf, time, { x: mx, y: my });
    pit.incl = this.inclFbo.tex;
    const f = this.level;
    pit.dome = p.design.dome * pit.size * (0.12 + 0.88 * f) * (f > 0 ? 1 : 0.02);
    pit.alpha = 1;
    if (this.cure >= 0) {
      const c = this.cure / 1.7;
      pit.bright = Math.max(0, Math.sin(c * PI * 3)) * 0.25;
    }
    if (!this.slots.some((s) => s.sticker)) {
      R.captureBackdrop();
      R.drawSticker(pit);
    }
    // dish contents + glitter pot
    const dItems = [];
    for (const d of this.dishes) for (const s of d.items) dItems.push(s.item(surf, time, { x: s.x + base[0], y: s.y + base[1] }));
    dItems.push(this.pot.item(surf, time, { x: this.pot.x + base[0], y: this.pot.y + base[1] }));
    for (const it of dItems) R.drawShadow(it, 0.35, [0.5, 0.42, 0.55], 0.8, 0.05);
    R.captureBackdrop();
    for (const it of dItems) R.drawSticker(it);
    // finished sticker in the mould
    this.renderStickers(R, time);
    // bottles on top
    R.captureBackdrop();
    for (const it of bItems) R.drawSticker(it);
    // pouring drip
    for (const b of this.bottles) {
      if (b.pour > 0.05) {
        const nz = this.nozzle(b);
        const [x, y] = W(nz[0], nz[1]);
        blend('add');
        R.drawPaint({ art: T.spot, x, y: y + 4, size: [this.bs * 0.12 * b.pour, this.bs * 0.18 * b.pour], lit: -1, mul: [0.6, 0.6, 0.65] });
        blend('alpha');
      }
    }
  }

  nozzle(b) {
    const c = Math.cos(b.rot), s = Math.sin(b.rot);
    const d = this.bs * 0.44;
    return [b.x + c * d, b.y + s * d];
  }
}

class NullGesture {
  move() {}
  up() {}
}

class ResinTouch {
  constructor(ws, u, v) {
    this.ws = ws;
    const p = ws.ensurePreview();
    p.softMat = 'liquid';
    p.pressAt(u, v, 0.8);
    audio.liquid({ intensity: 0.5 });
  }
  move(x, y) {
    const ws = this.ws;
    const [u, v] = ws.heartUV(x - ws.cx, y - ws.cy);
    if (ws.insideHeart(u, v, 0)) ws.preview.pressAt(u, v, 0.8);
  }
  up() {
    this.ws.preview.releasePress();
  }
  cancel() {
    this.up();
  }
}

// carry one pearl / star / heart and drop it into the mould
class ItemGesture {
  constructor(ws, kind, x, y, existing = null) {
    this.ws = ws;
    this.kind = kind;
    const id = kind === 'pearl' ? (existing && existing.h > 0.5 ? 'pearlPink' : Math.random() < 0.3 ? 'pearlPink' : 'pearlCream') : kind === 'star' ? 'starGold' : 'heartCharm';
    this.st = new Sticker(id, { x, y, unit: ws.ds * 0.42, rot: rand(-0.5, 0.5) });
    this.st.lift = 18;
    ws.game.carry.push(this.st);
    this.target = [x, y - 6];
    audio.plop({ intensity: 0.3, pitch: 1.6 });
    ws.game.touchedSomething();
  }
  move(x, y) {
    this.target = [x, y - 6];
    this.st.x = lerp(this.st.x, x, 0.6);
    this.st.y = lerp(this.st.y, y - 6, 0.6);
  }
  up() {
    const ws = this.ws;
    const g = ws.game;
    g.carry = g.carry.filter((s) => s !== this.st);
    const lx = this.st.x - ws.cx, ly = this.st.y - ws.cy;
    let [u, v] = ws.heartUV(lx, ly);
    if (!ws.busy && ws.level < 0.6 && ws.insideHeart(u, v, -0.03)) {
      const s = (this.st.size / ws.hs) * 160 * (this.kind === 'pearl' ? 0.8 : 0.75);
      [u, v] = ws.clampInside(u, v, (s / 160) * 0.4);
      const hue = this.kind === 'pearl' ? (this.st.id === 'pearlPink' ? 0.9 : 0.1) : this.kind === 'star' ? rand(0, 0.3) : rand(0, 0.03);
      ws.addInclusion({ k: this.kind, u, v, s, r: this.st.rot, h: hue, ax: rand(-0.2, 0.2), ay: rand(-0.2, 0.2) });
      audio.plop({ intensity: 0.5, pitch: this.kind === 'pearl' ? 1.3 : 1.0 });
      if (ws.level > 0.02) ws.ensurePreview().ensureSoft().poke(u, v, 0.6);
    } else {
      audio.plop({ intensity: 0.2, pitch: 0.8 });
    }
    this.st.dispose();
  }
  cancel() {
    this.up();
  }
}

// a pinch of glitter: stirs the pot, then sprinkles where the finger goes
class GlitterGesture {
  constructor(ws, x, y) {
    this.ws = ws;
    this.left = 0;
    this.mode = 'stir';
    const pot = ws.pot;
    const [u, v] = pot.localToUV(x - ws.cx - pot.x, y - ws.cy - pot.y);
    this.pu = [u, v];
    pot.pressAt(u, v, 1);
    audio.sparkle({ intensity: 0.5 });
    this.acc = 0;
    this.last = [x, y];
    ws.game.touchedSomething();
  }
  move(x, y, dt) {
    const ws = this.ws;
    const pot = ws.pot;
    const lx = x - ws.cx, ly = y - ws.cy;
    if (this.mode === 'stir') {
      const [u, v] = pot.localToUV(lx - pot.x, ly - pot.y);
      if (u > 0.02 && u < 0.98 && v > 0.02 && v < 0.98 && Math.hypot(u - 0.5, v - 0.5) < 0.45) {
        pot.pressAt(u, v, 1);
        if (Math.random() < dt * 6) audio.sparkle({ intensity: 0.3 });
      } else {
        pot.releasePress();
        this.mode = 'pinch';
        this.left = 60;
        ws.game.pinch = { x, y, n: this.left, t: 0 };
        audio.sparkle({ intensity: 0.6 });
      }
    } else {
      const g = ws.game;
      if (g.pinch) { g.pinch.x = x; g.pinch.y = y; g.pinch.n = this.left; }
      const moved = Math.hypot(x - this.last[0], y - this.last[1]);
      const [u, v] = ws.heartUV(lx, ly);
      if (this.left > 0 && !ws.busy && ws.level < 0.85 && ws.insideHeart(u, v, -0.02)) {
        this.acc += moved * 0.35 + dt * 25;
        while (this.acc > 1 && this.left > 0) {
          this.acc -= 1;
          this.left--;
          const [uu, vv] = ws.clampInside(u + rand(-0.06, 0.06), v + rand(-0.06, 0.06), 0.02);
          ws.addInclusion({ k: 'glitter', u: uu, v: vv, s: rand(3, 6.5), r: rand(0, 6.28), h: GLITTER_HUES[Math.floor(Math.random() * GLITTER_HUES.length)] + rand(-0.03, 0.03), ax: rand(-0.6, 0.6), ay: rand(-0.6, 0.6) });
          if (Math.random() < 0.25) audio.sparkle({ intensity: 0.35 });
        }
      }
    }
    this.last = [x, y];
  }
  up() {
    const ws = this.ws;
    ws.pot.releasePress();
    if (this.mode === 'pinch') {
      // whatever is left falls where the finger is (if over the mould)
      const [x, y] = this.last;
      const [u, v] = ws.heartUV(x - ws.cx, y - ws.cy);
      if (!ws.busy && ws.level < 0.85 && ws.insideHeart(u, v, -0.02)) {
        const n = Math.min(this.left, 25);
        for (let i = 0; i < n; i++) {
          const [uu, vv] = ws.clampInside(u + rand(-0.09, 0.09), v + rand(-0.09, 0.09), 0.02);
          ws.addInclusion({ k: 'glitter', u: uu, v: vv, s: rand(3, 6.5), r: rand(0, 6.28), h: GLITTER_HUES[Math.floor(Math.random() * GLITTER_HUES.length)], ax: rand(-0.6, 0.6), ay: rand(-0.6, 0.6) });
        }
        audio.sparkle({ intensity: 0.6 });
      }
      ws.game.pinch = null;
    }
  }
  cancel() {
    this.up();
  }
}

class BottleGesture {
  constructor(ws, b, x, y) {
    this.ws = ws;
    this.b = b;
    b.held = true;
    this.off = [b.x - (x - ws.cx), b.y - (y - ws.cy)];
    audio.plop({ intensity: 0.2, pitch: 0.7 });
    ws.game.touchedSomething();
    this.pouring = 0;
  }
  move(x, y, dt) {
    const ws = this.ws, b = this.b;
    b.x = lerp(b.x, x - ws.cx + this.off[0] * 0.6, 0.5);
    b.y = lerp(b.y, y - ws.cy + this.off[1] * 0.6, 0.5);
    this.step(dt);
  }
  step(dt) {
    const ws = this.ws, b = this.b;
    const nz = ws.nozzle(b);
    const over = Math.hypot(nz[0] - ws.mold[0], nz[1] - ws.mold[1]) < ws.ms * 0.42;
    b.pour = clamp(b.pour + (over ? dt * 3 : -dt * 4), 0, 1);
    b.rot = lerp(b.rot, PI - 0.35 * b.pour, 0.2);
    let p = 0;
    if (b.pour > 0.6) p = ws.pourInto(b, dt, nz);
    audio.setPour(p * 0.8);
  }
  get always() {
    return true;
  }
  up() {
    this.b.held = false;
    audio.setPour(0);
  }
  cancel() {
    this.up();
  }
}
