// ぷにぷにシールの宝物店 — main game: layout, loop, input routing, holding / dropping
// stickers, time of day and persistence.
import { Renderer } from './render/renderer.js';
import { lightingFor } from './render/lighting.js';
import { Texture, blend } from './core/gl.js';
import { Glitter } from './sim/glitter.js';
import { audio } from './core/audio.js';
import { Book, BOOK_UNIT } from './world/book.js';
import { Shop } from './world/shop.js';
import { Room } from './world/room.js';
import { TurntableStation } from './world/turntable.js';
import { WorkshopStation } from './world/workshop.js';
import { FriendStation } from './world/friend.js';
import { Intro } from './world/intro.js';
import { registerProps } from './art/props.js';
import { StickerGesture, updateHeld, buzz } from './world/hand.js';
import { softBlob, rainbowStreak } from './art/paint.js';
import { getDesign, hasDesign } from './art/registry.js';
import { SHEETS } from './world/sheet.js';
import { clamp, lerp } from './core/math.js';
import { loadState, saveState } from './core/save.js';

function holoCol(t) {
  const H = [[1.0, 0.52, 0.8], [0.45, 0.88, 1.0], [0.68, 0.52, 1.0], [1.0, 0.84, 0.42]];
  t = ((t % 1) + 1) % 1 * 4;
  const i = Math.floor(t), f = t - i;
  const a = H[i % 4], b = H[(i + 1) % 4];
  return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
}

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.R = new Renderer(canvas);
    Glitter.prog = this.R.progs.incl;
    this.tex = {
      blob: Texture.fromCanvas(softBlob(128), { mip: true }),
      spot: Texture.fromCanvas(softBlob(64), { mip: true }),
      rainbow: Texture.fromCanvas(rainbowStreak(), { mip: true }),
      white: this.R.tex.white,
    };
    this.time = 0;
    this.tod = 0.05;
    this.light = lightingFor(this.tod);
    this.R.light = this.light;
    this.cam = [0, 0, 1500];
    this.gesture = null;
    this.pointerId = null;
    this.held = null;
    this.flying = [];
    this.lastTouch = 0;
    this.playTime = 0;
    this.state = loadState();
    this.carry = [];
    this.pinch = null;
    this.room = new Room(this);
    this.book = new Book(this, { theme: 'pink', pages: 10 });
    this.book.onChange = () => this.requestSave();
    registerProps();
    this.shop = new Shop(this);
    this.shop.add(new TurntableStation(this));
    this.workshop = new WorkshopStation(this, this.state.mold || null);
    this.shop.add(this.workshop);
    this.friend = new FriendStation(this, this.state.friend || null);
    this.shop.add(this.friend);
    if (this.state.book) this.book.load(this.state.book);
    this.day = (this.state.day || 0) + 1;
    this.intro = new Intro(this);
    this.scene = new URLSearchParams(location.search).has('skip') ? 'shop' : 'intro';
    this.fadeIn = 0;
    this.bindInput();
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 200));
    this.last = performance.now();
    this.manual = new URLSearchParams(location.search).has('manual');
    if (!this.manual) requestAnimationFrame((t) => this.frame(t));
    else this.step(1, 1 / 60);
    this.requestSave();
  }

  resize() {
    const W = window.innerWidth, H = window.innerHeight;
    const cap = Math.min(window.devicePixelRatio || 1, 2);
    const dpr = Math.max(1, cap * (this.quality ?? 1));
    this.W = W;
    this.H = H;
    this.R.resize(W, H, dpr);
    this.cam = [W / 2, H / 2, Math.max(W, H) * 1.2];
    const portrait = H >= W * 1.05;
    this.portrait = portrait;
    if (portrait) {
      const wallH = H * 0.13;
      this.wallRect = { x: 0, y: 0, w: W, h: wallH };
      this.stationRect = { x: 0, y: wallH, w: W, h: H * 0.43 };
      const by = wallH + this.stationRect.h;
      this.bookRect = { x: 0, y: by, w: W, h: H - by };
    } else {
      const wallH = H * 0.17;
      this.wallRect = { x: 0, y: 0, w: W, h: wallH };
      const sw = W * 0.56;
      this.stationRect = { x: 0, y: wallH, w: sw, h: H - wallH };
      this.bookRect = { x: sw, y: wallH, w: W - sw, h: H - wallH };
    }
    this.intro.layout(W, H);
    this.shop.layout(this.stationRect);
    const br = this.bookRect;
    this.book.layout({ x: br.x + br.w * 0.03, y: br.y + br.h * 0.02, w: br.w * 0.94, h: br.h * 0.95 });
  }

  // ---------------- input ----------------
  bindInput() {
    const c = this.canvas;
    const pos = (e) => {
      const r = c.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top];
    };
    c.addEventListener('pointerdown', (e) => {
      audio.unlock();
      if (this.pointerId !== null) return;
      this.pointerId = e.pointerId;
      try { c.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      const [x, y] = pos(e);
      this.down(x, y);
      e.preventDefault();
    });
    c.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.pointerId) return;
      const [x, y] = pos(e);
      this.pointer = [x, y];
      e.preventDefault();
    });
    const end = (e) => {
      if (e.pointerId !== this.pointerId) return;
      const [x, y] = pos(e);
      this.pointer = [x, y];
      this.flushMove(1 / 60);
      this.up(x, y);
      this.pointerId = null;
      audio.unlock();
    };
    c.addEventListener('pointerup', end);
    c.addEventListener('pointercancel', (e) => {
      if (e.pointerId !== this.pointerId) return;
      if (this.gesture && this.gesture.cancel) this.gesture.cancel();
      this.gesture = null;
      this.pointerId = null;
    });
    c.addEventListener('contextmenu', (e) => e.preventDefault());
    // physical tilt where it is available without a permission prompt (high-passed, gentle)
    this.devTilt = null;
    window.addEventListener('deviceorientation', (e) => {
      if (e.beta == null || e.gamma == null) return;
      const d = this.devTilt || (this.devTilt = { b0: e.beta, g0: e.gamma, b: e.beta, g: e.gamma });
      d.b = e.beta;
      d.g = e.gamma;
    });
    document.addEventListener('gesturestart', (e) => e.preventDefault());
    document.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
  }

  touchedSomething() {
    this.lastTouch = this.time;
  }

  down(x, y) {
    this.pointer = [x, y];
    this.lastPointer = [x, y];
    this.touchedSomething();
    this.gesture = this.hitTest(x, y);
  }

  flushMove(dt) {
    if (!this.gesture || !this.pointer) return;
    const [x, y] = this.pointer;
    if (this.lastPointer && x === this.lastPointer[0] && y === this.lastPointer[1] && !this.gesture.always) return;
    this.lastPointer = [x, y];
    this.gesture.move(x, y, dt);
  }

  up(x, y) {
    if (this.gesture) this.gesture.up(x, y);
    this.gesture = null;
  }

  hitTest(x, y) {
    if (this.scene === 'intro') return this.intro.hitTest(x, y);
    // book first (it lies on top of the counter)
    const b = this.book;
    if (y > this.bookRect.y - 10 && x > this.bookRect.x - 10) {
      const p = b.pick(x, y);
      if (p) return new StickerGesture(this, p.sticker, new BookBox(this, b), x, y, p.hit);
      const z = b.zoneAt(x, y);
      if (z) {
        if (z.kind === 'flip' || z.kind === 'flipBack') return new FlipGesture(this, b, z.kind, x, y);
        return new TiltGesture(this, b, x, y);
      }
    }
    const h = this.shop.hitTest(x, y);
    if (h) {
      if (h.kind === 'sticker') return new StickerGesture(this, h.sticker, h.box, x, y, h.hit);
      if (h.gesture) return h.gesture;
    }
    return null;
  }

  // ---------------- holding / dropping ----------------
  onPeeled(st, origin) {
    this.touchedSomething();
  }

  dropTarget(x, y) {
    if (this.book.containsScreen(x, y, 6) && !this.book.flip) return new BookBox(this, this.book);
    for (const s of this.shop.stations) {
      if (s.canAccept && this.shop.visible(s.index) && s.canAccept(x, y, this.held && this.held.st)) return s;
    }
    return null;
  }

  dropHeld(x, y) {
    const h = this.held;
    if (!h) return;
    this.held = null;
    const st = h.st;
    st.lift = 0;
    st.sway = [0, 0];
    st.peel = null;
    const target = this.dropTarget(st.x, st.y);
    if (target) {
      target.accept(st, st.x, st.y, h);
      st.impact(0.7);
      audio.stick({ intensity: 0.75 });
      buzz(8);
      if (h.origin && h.origin.box && h.origin.box.released) h.origin.box.released(h.origin);
      if (target.onAccepted) target.onAccepted(st, h);
      if (target instanceof BookBox) this.playTime += 7;
      this.requestSave();
    } else {
      // fly home
      this.flying.push({ st, from: [st.x, st.y], rot0: st.rot, t: 0, origin: h.origin, unit0: st.unit });
      audio.whoosh({ intensity: 0.25 });
    }
  }

  updateFlying(dt) {
    for (let i = this.flying.length - 1; i >= 0; i--) {
      const f = this.flying[i];
      f.t += dt * 2.6;
      const o = f.origin;
      const box = o.box;
      const [tx, ty] = box.toWorld(o.x, o.y);
      const t = Math.min(1, f.t);
      const e = t * t * (3 - 2 * t);
      f.st.x = lerp(f.from[0], tx, e);
      f.st.y = lerp(f.from[1], ty, e) - Math.sin(t * Math.PI) * 40;
      f.st.rot = lerp(f.rot0, o.rot + (box.worldRot || 0), e);
      f.st.unit = lerp(f.unit0, o.unit * box.unitPx, e);
      f.st.lift = Math.sin(t * Math.PI) * 30;
      if (t >= 1) {
        f.st.lift = 0;
        box.restore(f.st, o);
        f.st.impact(0.4);
        audio.restick({ intensity: 0.4 });
        this.flying.splice(i, 1);
      }
    }
  }

  // ---------------- time ----------------
  updateTime(dt) {
    const active = this.time - this.lastTouch < 6;
    if (active) this.playTime += dt;
    const target = clamp(this.playTime / 300, 0, 1);
    this.tod = lerp(this.tod, Math.max(0.05, target), 1 - Math.exp(-dt * 0.5));
    this.light = lightingFor(this.tod);
    this.R.light = this.light;
  }

  requestSave() {
    clearTimeout(this.saveT);
    this.saveT = setTimeout(() => this.save(), 500);
  }

  save() {
    const st = { v: 1, day: this.day, book: this.book.serialize(), mold: this.workshop.serialize(), friend: this.friend.serialize(), t: Date.now() };
    saveState(st);
  }

  // ---------------- loop ----------------
  adaptResolution(dt) {
    this.ftAcc = (this.ftAcc || 0) + dt;
    this.ftN = (this.ftN || 0) + 1;
    if (this.ftAcc < 1.5) return;
    const avg = this.ftAcc / this.ftN;
    this.ftAcc = 0;
    this.ftN = 0;
    const cap = Math.min(window.devicePixelRatio || 1, 2);
    let q = this.quality ?? 1;
    if (avg > 1 / 40 && q > 0.5) q = Math.max(0.5, q - 0.15);
    else if (avg < 1 / 57 && q < 1) q = Math.min(1, q + 0.1);
    if (q !== this.quality) {
      this.quality = q;
      const dpr = Math.max(1, cap * q);
      if (Math.abs(dpr - this.R.dpr) > 0.05) this.R.resize(this.W, this.H, dpr);
    }
  }

  // bake upcoming sticker designs one at a time while nothing is being touched
  prebakeStep() {
    if (!this.prebake) {
      const ids = new Set();
      for (const sh of SHEETS) for (const id of sh.ids) ids.add(id);
      ['gemPink', 'gemAqua', 'gemLilac', 'pearlPink', 'butterfly', 'pearlCream', 'starGold', 'heartCharm', 'glitterPot',
        'turntable', 'crankArm', 'crankKnob', 'gearBox', 'mold', 'dish', 'bottle:pink', 'bottle:blue', 'bottle:clear',
        'glitterStar', 'drop', 'cloud', 'moon', 'ribbonMint'].forEach((i) => ids.add(i));
      this.prebake = [...ids];
    }
    if (this.gesture || !this.prebake.length) return;
    const id = this.prebake.shift();
    if (!hasDesign(id)) {
      try { getDesign(id); } catch (e) { /* ignore */ }
    }
  }

  frame(t) {
    let dt = (t - this.last) / 1000;
    this.last = t;
    this.adaptResolution(Math.min(dt, 0.25));
    if (this.time > 0.5) this.prebakeStep();
    dt = clamp(dt, 0.001, 1 / 20);
    this.time += dt;
    this.R.time = this.time;
    this.flushMove(dt);
    this.update(dt);
    this.render();
    if (!this.readyFlag) {
      this.readyFlag = true;
      document.body.classList.add('ready');
    }
    requestAnimationFrame((tt) => this.frame(tt));
  }

  // deterministic stepping (testing / debugging)
  step(n = 1, dt = 1 / 60) {
    for (let i = 0; i < n; i++) {
      this.time += dt;
      this.R.time = this.time;
      this.flushMove(dt);
      this.update(dt);
    }
    this.render();
    if (!this.readyFlag) {
      this.readyFlag = true;
      document.body.classList.add('ready');
    }
  }

  update(dt) {
    if (this.scene === 'intro') {
      this.intro.update(dt);
      audio.setMusic(0.35, 0);
      if (this.intro.done) {
        this.scene = 'shop';
        this.fadeIn = 1;
        this.gesture = null;
        audio.doorBell();
        audio.setRain(0.15);
      }
      return;
    }
    this.fadeIn = Math.max(0, this.fadeIn - dt * 1.6);
    if (this.devTilt) {
      const d = this.devTilt;
      const k = 1 - Math.exp(-dt / 3);
      d.b0 += (d.b - d.b0) * k;
      d.g0 += (d.g - d.g0) * k;
      const land = !this.portrait;
      const db = (land ? d.g - d.g0 : d.b - d.b0) * (Math.PI / 180);
      const dg = (land ? -(d.b - d.b0) : d.g - d.g0) * (Math.PI / 180);
      this.book.tilt.ex = clamp(-db * 0.8, -0.3, 0.3);
      this.book.tilt.ey = clamp(dg * 0.8, -0.3, 0.3);
    }
    this.updateTime(dt);
    this.shop.update(dt);
    this.book.update(dt, this.time);
    if (this.held) {
      const unitT = this.book.containsScreen(this.held.pos[0], this.held.pos[1], 30) ? BOOK_UNIT * this.book.scale : this.shopUnit();
      updateHeld(this.held, dt, unitT);
      const st = this.held.st;
      const r = st.update(dt);
      void r;
    }
    for (const f of this.flying) f.st.update(dt);
    for (const c of this.carry) c.update(dt);
    this.updateFlying(dt);
    this.room.updateWindow(this.tod, clamp(1 - this.tod * 5, 0, 1));
    audio.setMusic(0.6, this.tod);
    audio.setRain(clamp(0.5 - this.playTime / 60, 0, 0.5));
  }

  renderPinch(R) {
    const p = this.pinch;
    const n = Math.min(26, Math.ceil(p.n / 2));
    blend('add');
    for (let i = 0; i < n; i++) {
      const a = i * 2.39996 + this.time * 0.6;
      const r = 4 + (i % 7) * 2.2;
      const tw = 0.5 + 0.5 * Math.sin(this.time * 9 + i * 1.7);
      const c = holoCol(i * 0.137 + this.time * 0.2);
      R.drawPaint({ art: this.tex.spot, x: p.x + Math.cos(a) * r, y: p.y - 14 + Math.sin(a) * r * 0.7, size: 5 + tw * 6, lit: -1, mul: c.map((v) => v * (0.5 + tw)) });
    }
    blend('alpha');
  }

  shopUnit() {
    const s = this.shop.current;
    return s && s.unit ? s.unit : 90;
  }

  render() {
    const R = this.R;
    R.setCamera(this.cam[0], this.cam[1], this.cam[2]);
    R.begin([0.95, 0.88, 0.86]);
    if (this.scene === 'intro') {
      this.light = lightingFor(0.05);
      R.light = this.light;
      this.intro.render(R, this.time);
      const z = this.intro.zoom;
      R.end(this.light.grade, z * z, [1.0, 0.95, 0.9], 0.2);
      return;
    }
    const L = this.light;
    // counter everywhere below the wall
    this.room.renderCounter(R, 0, this.wallRect.h, this.W, this.H);
    const xs = this.shop.stations.map((s, i) => this.shop.stationX(i));
    const kinds = this.shop.stations.map((s) => (s.kind === 'friend' ? 'window' : 'shelf'));
    xs.unshift(this.shop.stationX(-1));
    kinds.unshift('door');
    this.room.renderWall(R, L, 0, this.W, 0, this.wallRect.h, xs, kinds);
    this.room.renderSunPatches(R, L, 0, this.wallRect.h, this.W, this.H - this.wallRect.h, 0.6 + this.tod);
    const gl = R.gl;
    if (!this.portrait) {
      gl.enable(gl.SCISSOR_TEST);
      gl.scissor(0, 0, Math.round(this.stationRect.w * R.dpr), R.ph);
    }
    this.shop.render(R, this.time);
    gl.disable(gl.SCISSOR_TEST);
    // the child's book on a lace mat
    const b = this.book;
    const br = this.bookRect;
    const mw = Math.min(b.pagePx * 1.45, br.w * 1.04), mh = Math.min(b.pagePx * 1.4, br.h * 1.02);
    R.drawPaint({ art: this.room.tex.lace, x: b.cx - b.pagePx * 0.02, y: b.cy, size: [mw, mh], lit: 1, alpha: 0.95 });
    b.render(R, this.time);
    // flying + held stickers on top
    const world = { model: null, unitPx: 1 };
    const tops = [...this.flying.map((f) => f.st), ...this.carry];
    if (this.held) tops.push(this.held.st);
    for (const st of tops) {
      const it = st.item(world, this.time);
      R.drawShadow({ ...it, lightS: L.dir, shadowZ: 0 }, 0.5, [0.42, 0.34, 0.46], 1.0, 0.045);
    }
    if (tops.length) R.captureBackdrop();
    for (const st of tops) R.drawSticker(st.item(world, this.time));
    if (this.pinch) this.renderPinch(R);
    R.end(L.grade, this.fadeIn * this.fadeIn, [1.0, 0.95, 0.9], 0.28);
  }
}

// Adapter so a book page behaves like any other sticker container.
class BookBox {
  constructor(game, book) {
    this.game = game;
    this.book = book;
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
    const pageIdx = this.book.pages.findIndex((p) => p.stickers.includes(st));
    this.book.removeSticker(st);
    return { box: this, page: pageIdx, x: st.x, y: st.y, rot: st.rot, unit: st.unit };
  }
  accept(st, sx, sy) {
    const [px, py] = this.book.toPage(sx, sy);
    const m = 30;
    st.x = clamp(px, m, 600 - m);
    st.y = clamp(py, m, 600 - m);
    st.unit = BOOK_UNIT;
    this.book.addSticker(st);
    this.book.idle = 0;
  }
  restore(st, origin) {
    st.x = origin.x;
    st.y = origin.y;
    st.rot = origin.rot;
    st.unit = BOOK_UNIT;
    this.book.addSticker(st, origin.page >= 0 ? origin.page : this.book.cur);
  }
}

class FlipGesture {
  constructor(game, book, kind, x, y) {
    this.game = game;
    this.book = book;
    this.f = book.beginFlip(kind, x, y);
    this.book.dragFlip(x, y, 1 / 60);
  }
  move(x, y, dt) {
    this.book.dragFlip(x, y, dt);
  }
  up() {
    this.book.releaseFlip();
  }
  cancel() {
    this.up();
  }
}

class TiltGesture {
  constructor(game, book, x, y) {
    this.game = game;
    this.book = book;
    book.tiltTo(x, y, true);
    book.idle = 0;
    this.acc = 0;
  }
  move(x, y, dt) {
    const b = this.book;
    const t0 = [b.tilt.tx, b.tilt.ty];
    b.tiltTo(x, y, true);
    // rainbows sliding over the page shimmer softly
    const pg = b.page;
    const clear = pg ? pg.stickers.filter((s) => s.mat === 'clear' || s.mat === 'jelly' || s.mat === 'holo').length : 0;
    this.acc += Math.hypot(b.tilt.tx - t0[0], b.tilt.ty - t0[1]) * Math.min(4, clear) * 6;
    if (this.acc > 1) {
      this.acc = 0;
      audio.sparkle({ intensity: 0.25 + this.game.tod * 0.25 });
    }
  }
  up() {
    this.book.tiltTo(0, 0, false);
  }
  cancel() {
    this.up();
  }
}

window.addEventListener('load', () => {
  const canvas = document.getElementById('c');
  try {
    window.game = new Game(canvas);
  } catch (e) {
    console.error(e);
    document.body.classList.add('nogl');
  }
});
