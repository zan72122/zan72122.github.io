// Evening visitor: a bunny friend arrives with a light-blue sticker book. Her book has an
// empty heart window; give her a sticker and she happily lifts the edge of one of hers
// (the light-blue star first) for you to peel off and keep.
import { Book, BOOK_UNIT } from './book.js';
import { Sticker } from './sticker.js';
import { Texture, blend } from '../core/gl.js';
import { friendParts } from '../art/friend.js';
import { audio } from '../core/audio.js';
import { clamp, lerp, rand, PI } from '../core/math.js';

const START = [
  { id: 'starBlue', x: 420, y: 250, r: 0.15, k: 1.15 },
  { id: 'glitterStar', x: 250, y: 140, r: -0.2, k: 0.9 },
  { id: 'drop', x: 470, y: 470, r: 0.1, k: 0.9 },
  { id: 'cloud', x: 300, y: 330, r: 0.05, k: 0.95 },
  { id: 'moon', x: 470, y: 90, r: 0.3, k: 0.85 },
  { id: 'gemAqua', x: 110, y: 120, r: -0.1, k: 0.85 },
  { id: 'ribbonMint', x: 330, y: 520, r: 0.1, k: 0.9 },
];
const HEART_WIN = { x: 150, y: 420, s: 210 };
const HEARTY = new Set(['heartPink', 'heartGlitter', 'heartClear', 'gemPink', 'heartCharm', 'handmade']);

let PARTS = null;

export class FriendStation {
  constructor(game, saved = null) {
    this.game = game;
    this.kind = 'friend';
    this.book = new Book(game, { theme: 'blue', pages: 1, flippable: false });
    this.book.gap = 4;
    this.gifts = saved ? saved.gifts || 0 : 0;
    this.taken = saved ? saved.taken || 0 : 0;
    this.heartFilled = saved ? !!saved.heartFilled : false;
    if (saved && saved.book) this.book.load(saved.book);
    else this.seed();
    for (const s of this.book.pages[0].stickers) {
      if (s.fromFriend === undefined) s.fromFriend = true;
    }
    if (saved && saved.own) {
      const own = new Set(saved.own);
      this.book.pages[0].stickers.forEach((s, i) => (s.fromFriend = own.has(i)));
    }
    this.present = false;
    this.arrive = 0;
    this.bob = 0;
    this.blink = 0;
    this.nextBlink = 2;
    this.happy = 0;
    this.shake = 0;
    this.look = [0, 0];
    this.hearts = [];
    this.autoPanned = false;
    this.cx = 0;
    this.cy = 0;
    this.refreshLocks();
  }

  seed() {
    const pg = this.book.pages[0];
    for (const d of START) {
      const s = new Sticker(d.id, { x: d.x, y: d.y, rot: d.r, scale: d.k, unit: BOOK_UNIT });
      s.fromFriend = true;
      pg.stickers.push(s);
    }
  }

  textures() {
    if (!PARTS) {
      const p = friendParts(512);
      PARTS = {};
      for (const k in p) PARTS[k] = Texture.fromCanvas(p[k], { mip: true });
    }
    return PARTS;
  }

  // which of the friend's own stickers may be peeled right now
  refreshLocks() {
    const own = this.book.pages[0].stickers.filter((s) => s.fromFriend);
    const credit = this.gifts - this.taken;
    own.forEach((s) => {
      s.locked = true;
      s.restCurl = null;
    });
    if (credit > 0 && own.length) {
      // prefer the light-blue star
      const offer = own.find((s) => s.id === 'starBlue') || own[0];
      offer.locked = false;
      offer.restCurl = -0.4;
      this.offer = offer;
    } else this.offer = null;
  }

  layout(cx, cy, w, h) {
    this.w = w;
    this.h = h;
    this.setCenter(cx, cy);
  }

  setCenter(cx, cy) {
    this.cx = cx;
    this.cy = cy;
    if (!this.w) return;
    const w = this.w, h = this.h;
    const bh = h * 0.7;
    this.book.layout({ x: cx - w * 0.46, y: cy - h * 0.16, w: w * 0.92, h: bh }, w * 0.78);
    this.book.cy = cy - h * 0.16 + bh * 0.55;
    this.fx = cx;
    this.fy = cy - h * 0.43;
    this.fs = Math.min(w * 0.36, h * 0.42);
  }

  build() {}

  get visibleNow() {
    return this.present;
  }

  // ---- interactions ----
  hitTest(x, y) {
    if (!this.present || this.arrive < 1) return null;
    const b = this.book;
    const p = b.pick(x, y);
    if (p) return { kind: 'sticker', box: new FriendBox(this), sticker: p.sticker, hit: p.hit };
    // patting the friend
    if (Math.hypot(x - this.fx, y - (this.fy + this.fs * 0.1)) < this.fs * 0.55) {
      this.happy = Math.max(this.happy, 0.6);
      audio.friendHappy();
      return { kind: 'friend', gesture: { move() {}, up() {}, cancel() {} } };
    }
    if (b.containsScreen(x, y)) return { kind: 'tilt', gesture: new FriendTilt(b, x, y) };
    return null;
  }

  canAccept(x, y) {
    return this.present && this.arrive >= 1 && this.book.containsScreen(x, y, 4);
  }

  accept(st, x, y) {
    const [px, py] = this.book.toPage(x, y);
    st.unit = BOOK_UNIT;
    st.x = clamp(px, 40, 560);
    st.y = clamp(py, 40, 560);
    const hearty = HEARTY.has(st.id) || st.id.startsWith('heart');
    if (!this.heartFilled && Math.hypot(st.x - HEART_WIN.x, st.y - HEART_WIN.y) < HEART_WIN.s * 0.75) {
      // snaps into the empty heart window
      st.x = HEART_WIN.x;
      st.y = HEART_WIN.y + 6;
      st.rot = 0;
      this.heartFilled = true;
    }
    st.fromFriend = false;
    st.locked = false;
    this.book.pages[0].stickers.push(st);
    this.gifts++;
    this.happy = hearty ? 1.6 : 1.0;
    for (let i = 0; i < (hearty ? 9 : 5); i++) this.hearts.push({ x: this.fx + rand(-this.fs * 0.5, this.fs * 0.5), y: this.fy - this.fs * rand(0.3, 0.6), vx: rand(-50, 50), vy: rand(-170, -90), t: -i * 0.08, s: rand(14, 26) });
    audio.friendHappy();
    setTimeout(() => audio.chime({ note: 5, intensity: 0.4 }), 350);
    this.refreshLocks();
    this.game.requestSave();
  }

  onTaken(st) {
    if (st.fromFriend) {
      this.taken++;
      audio.friendHappy();
      this.happy = 0.8;
      this.refreshLocks();
      this.game.requestSave();
    }
  }

  onLockedPull() {
    // gentle "not yet": she shakes her head and looks at her empty heart window
    if (this.shake <= 0) {
      this.shake = 1;
      audio.jelly({ intensity: 0.35, pitch: 0.7 });
    }
  }

  update(dt, visible) {
    const tod = this.game.tod;
    if (!this.present && tod >= 0.72) {
      this.present = true;
      this.arrive = 0;
      audio.doorBell();
    }
    if (this.present && this.arrive < 1) {
      this.arrive = Math.min(1, this.arrive + dt / 1.8);
      if (this.arrive >= 1) audio.friendHappy();
    }
    // slide the view to her once, when the child is not busy
    if (this.present && !this.autoPanned && this.arrive > 0.2) {
      const g = this.game;
      if (!g.gesture && !g.held && g.time - g.lastTouch > 1.2) {
        this.autoPanned = true;
        g.shop.goTo(this.index);
      }
    }
    this.bob += dt;
    this.nextBlink -= dt;
    if (this.nextBlink < 0) {
      this.blink = 0.15;
      this.nextBlink = rand(2.5, 5);
    }
    this.blink = Math.max(0, this.blink - dt);
    this.happy = Math.max(0, this.happy - dt * 0.6);
    this.shake = Math.max(0, this.shake - dt * 1.4);
    // eyes follow the finger / held sticker
    const g = this.game;
    let tx = 0, ty = 0;
    const target = g.held ? g.held.pos : g.pointerId !== null && g.pointer ? g.pointer : this.shake > 0 ? this.book.pageToScreen(HEART_WIN.x, HEART_WIN.y) : null;
    if (target) {
      tx = clamp((target[0] - this.fx) / 200, -1, 1);
      ty = clamp((target[1] - this.fy) / 300, -1, 1);
    }
    this.look[0] = lerp(this.look[0], tx, 1 - Math.exp(-dt * 6));
    this.look[1] = lerp(this.look[1], ty, 1 - Math.exp(-dt * 6));
    for (const h of this.hearts) {
      h.t += dt;
      if (h.t < 0) continue;
      h.x += h.vx * dt;
      h.y += h.vy * dt;
      h.vy += 30 * dt;
    }
    this.hearts = this.hearts.filter((h) => h.t < 1.6);
    if (this.present) {
      this.book.update(dt, g.time);
    }
  }

  render(R, time) {
    const T = this.textures();
    const L = this.game.light;
    // chair cushion behind the table
    R.drawPaint({ art: T.cushion, x: this.fx, y: this.fy + this.fs * 0.55, size: [this.fs * 1.4, this.fs * 0.7], lit: 1 });
    if (!this.present) return;
    const a = this.arrive;
    const e = 1 - Math.pow(1 - a, 3);
    const hop = Math.abs(Math.sin(a * PI * 3)) * (1 - a) * this.fs * 0.25;
    const offX = (1 - e) * this.w * 0.9;
    const happyHop = Math.abs(Math.sin(time * 9)) * this.happy * this.fs * 0.08;
    const bob = Math.sin(this.bob * 2.2) * this.fs * 0.012;
    const shake = Math.sin(time * 18) * this.shake * this.fs * 0.05;
    const x = this.fx + offX + shake;
    const y = this.fy - hop - happyHop + bob;
    const fs = this.fs;
    const alpha = Math.min(1, a * 3);
    // ears (behind the head), wiggle when happy
    const wig = Math.sin(time * 12) * this.happy * 0.15;
    for (const sx of [-1, 1]) {
      R.drawPaint({ art: T.ear, x: x + sx * fs * 0.2, y: y - fs * 0.62, rot: sx * (0.18 + wig * sx), size: [fs * 0.3, fs * 0.6], lit: 0.7, alpha });
    }
    R.drawPaint({ art: T.ribbon, x: x + fs * 0.27, y: y - fs * 0.5, rot: 0.3, size: [fs * 0.3, fs * 0.2], lit: 0.7, alpha });
    R.drawPaint({ art: T.body, x, y: y + fs * 0.42, size: [fs * 1.0, fs * 0.7], lit: 0.7, alpha });
    R.drawPaint({ art: T.head, x, y: y - fs * 0.05, size: [fs * 1.0, fs * 0.8], lit: 0.7, alpha });
    // eyes
    const closed = this.blink > 0 || this.happy > 0.9;
    for (const sx of [-1, 1]) {
      const ex = x + sx * fs * 0.15 + this.look[0] * fs * 0.03;
      const ey = y - fs * 0.04 + this.look[1] * fs * 0.025;
      R.drawPaint({ art: closed ? T.eyeClosed : T.eye, x: ex, y: ey, size: [fs * 0.1, fs * 0.125], lit: 0.5, alpha });
    }
    // her book
    const b = this.book;
    const mw = b.pagePx * 1.3;
    R.drawShadow({ design: { tex: { art: this.game.tex.blob } }, art: this.game.tex.blob, x: b.cx - 4, y: b.cy + 8, size: [mw * 1.1, mw * 1.08], dome: 0 }, 0.4 * alpha, [0.5, 0.45, 0.55], 0.5, 0, 1.0);
    b.render(R, time, { noShadow: true });
    // empty heart window (printed on her page) until something fills it
    if (!this.heartFilled) {
      const pulse = 0.85 + 0.15 * Math.sin(time * 2.5);
      R.drawPaint({ art: T.heartWindow, model: b.model, x: HEART_WIN.x, y: HEART_WIN.y, size: HEART_WIN.s * pulse, lit: 1, lift: 2, alpha });
    }
    // floating hearts
    blend('alpha');
    for (const h of this.hearts) {
      if (h.t < 0) continue;
      const k = 1 - h.t / 1.6;
      R.drawPaint({ art: T.heart, x: h.x, y: h.y, size: h.s * (0.6 + 0.4 * Math.min(1, h.t * 4)), lit: -1, mul: [1.1, 1.05, 1.1], alpha: k });
    }
    void L;
  }

  serialize() {
    const stickers = this.book.pages[0].stickers;
    return {
      gifts: this.gifts,
      taken: this.taken,
      heartFilled: this.heartFilled,
      book: this.book.serialize(),
      own: stickers.map((s, i) => (s.fromFriend ? i : -1)).filter((i) => i >= 0),
    };
  }
}

// container adapter for the friend's page
class FriendBox {
  constructor(fr) {
    this.fr = fr;
    this.book = fr.book;
  }
  get unitPx() {
    return this.book.scale;
  }
  toLocal(sx, sy) {
    return this.book.toPage(sx, sy);
  }
  toWorld(lx, ly) {
    return this.book.pageToScreen(lx, ly, 0);
  }
  detach(st) {
    this.book.removeSticker(st);
    return { box: this, x: st.x, y: st.y, rot: st.rot, unit: st.unit, wasFriend: st.fromFriend };
  }
  released(origin) {
    const st = origin.st;
    void st;
  }
  restore(st, origin) {
    st.x = origin.x;
    st.y = origin.y;
    st.rot = origin.rot;
    st.unit = BOOK_UNIT;
    st.fromFriend = origin.wasFriend;
    this.book.pages[0].stickers.push(st);
    this.fr.refreshLocks();
  }
  lockedPull() {
    this.fr.onLockedPull();
  }
  taken(st) {
    this.fr.onTaken(st);
  }
}

class FriendTilt {
  constructor(book, x, y) {
    this.book = book;
    book.tiltTo(x, y, true);
  }
  move(x, y) {
    this.book.tiltTo(x, y, true);
  }
  up() {
    this.book.tiltTo(0, 0, false);
  }
  cancel() {
    this.up();
  }
}
