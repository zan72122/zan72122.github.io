// Opening scene: a little sticker shop on a shopping street right after the rain.
// Puddles mirror the shop and ripple under the finger, drops fall from the awning, the
// puffy stickers on the display window squish, and the pink door swings open to go in.
import { Texture, gl } from '../core/gl.js';
import { canvas, rrect, heart, star, circle, ellipse, radial, linear, cloud } from '../art/paint.js';
import { Sticker } from './sticker.js';
import { StickerGesture } from './hand.js';
import { audio } from '../core/audio.js';
import { clamp, lerp, rand, rng, PI } from '../core/math.js';
import * as M from '../core/mat4.js';

function paintScene(W, H) {
  const c = canvas(W, H);
  const g = c.getContext('2d');
  const L = {};
  const portrait = H > W;
  const fw = Math.min(W * (portrait ? 0.9 : 0.5), H * 0.66);
  const fh = fw * (portrait ? 1.12 : 1.0);
  const gy = H * (portrait ? 0.72 : 0.76);
  const x0 = (W - fw) / 2, top = gy - fh;
  L.gy = gy;
  // sky after rain
  g.fillStyle = linear(g, 0, 0, 0, gy, [[0, '#9fd2ff'], [0.6, '#d9eeff'], [1, '#fff4f0']]);
  g.fillRect(0, 0, W, gy);
  // rainbow
  const cols = ['#ff9aae', '#ffc68a', '#fff0a0', '#a8ecb0', '#9cd6ff', '#c3adff'];
  g.globalAlpha = 0.55;
  g.lineWidth = Math.max(6, W * 0.018);
  cols.forEach((col, i) => {
    g.strokeStyle = col;
    g.beginPath();
    g.arc(W * 0.62, gy * 0.95, Math.max(W, H) * (0.5 - i * 0.017), PI * 1.08, PI * 1.92);
    g.stroke();
  });
  g.globalAlpha = 1;
  g.fillStyle = 'rgba(255,255,255,0.92)';
  cloud(g, W * 0.18, top * 0.45 + 20, W * 0.32, H * 0.08); g.fill();
  cloud(g, W * 0.82, top * 0.3 + 20, W * 0.26, H * 0.06); g.fill();
  // distant rooftops
  g.fillStyle = '#d7d2ec';
  g.beginPath();
  g.moveTo(0, gy);
  let x = 0;
  const r = rng(5);
  while (x < W) {
    const bw = 40 + r() * 80, bh = gy - top * 0.7 - r() * H * 0.1;
    g.lineTo(x, bh);
    g.lineTo(x + bw * 0.5, bh - 20 - r() * 20);
    g.lineTo(x + bw, bh);
    x += bw;
  }
  g.lineTo(W, gy);
  g.closePath();
  g.fill();
  // neighbouring shops
  const neighbour = (nx, nw, col, awn) => {
    g.fillStyle = col;
    g.fillRect(nx, top + fh * 0.12, nw, fh * 0.88);
    for (let i = 0; i < 8; i++) {
      g.fillStyle = i % 2 ? '#ffffff' : awn;
      g.fillRect(nx + (i * nw) / 8, top + fh * 0.4, nw / 8 + 1, fh * 0.07);
    }
    g.fillStyle = 'rgba(210,235,255,0.9)';
    rrect(g, nx + nw * 0.15, top + fh * 0.55, nw * 0.7, fh * 0.28, 10);
    g.fill();
  };
  neighbour(x0 - fw * 0.75, fw * 0.7, '#d9f3e8', '#8fdcc0');
  neighbour(x0 + fw * 1.05, fw * 0.7, '#fff3c4', '#ffd36b');
  // facade
  g.fillStyle = '#fff3e3';
  rrect(g, x0, top, fw, fh + 2, fw * 0.03);
  g.fill();
  g.strokeStyle = 'rgba(220,190,170,0.35)';
  g.lineWidth = 1;
  for (let yy = top + 14; yy < gy; yy += 16) {
    g.beginPath();
    g.moveTo(x0 + 4, yy);
    g.lineTo(x0 + fw - 4, yy);
    g.stroke();
  }
  // pink scalloped cornice
  g.fillStyle = '#ffb7cb';
  g.fillRect(x0 - 6, top - 6, fw + 12, fh * 0.05);
  for (let i = 0; i < 14; i++) { circle(g, x0 + ((i + 0.5) * fw) / 14, top + fh * 0.05 - 6, fw / 28); g.fill(); }
  // round sign with a heart sticker (no letters)
  const sx = W / 2, sy = top + fh * 0.16, sr = fw * 0.1;
  g.fillStyle = '#ffffff';
  circle(g, sx, sy, sr * 1.12); g.fill();
  g.fillStyle = '#ffc2d4';
  circle(g, sx, sy, sr); g.fill();
  g.fillStyle = '#ff7fa8';
  heart(g, sx, sy + sr * 0.05, sr * 1.1, sr);
  g.fill();
  g.fillStyle = 'rgba(255,255,255,0.75)';
  ellipse(g, sx - sr * 0.28, sy - sr * 0.22, sr * 0.18, sr * 0.1, -0.5); g.fill();
  g.fillStyle = '#ffe08a';
  for (const [dx, dy] of [[-1.45, -0.6], [1.45, -0.4], [1.3, 0.75]]) { star(g, sx + dx * sr, sy + dy * sr, sr * 0.22, sr * 0.1, 5, 0.2); g.fill(); }
  L.sign = [sx, sy, sr];
  // awning
  const ay = top + fh * 0.3, ah = fh * 0.1;
  L.awning = { y: ay + ah, x0: x0 - 8, x1: x0 + fw + 8 };
  for (let i = 0; i < 12; i++) {
    g.fillStyle = i % 2 ? '#ffffff' : '#ff9fbe';
    g.fillRect(x0 - 8 + (i * (fw + 16)) / 12, ay, (fw + 16) / 12 + 1, ah);
  }
  for (let i = 0; i < 12; i++) {
    g.fillStyle = i % 2 ? '#ffffff' : '#ff9fbe';
    circle(g, x0 - 8 + ((i + 0.5) * (fw + 16)) / 12, ay + ah, (fw + 16) / 24);
    g.fill();
  }
  g.fillStyle = 'rgba(0,0,0,0.06)';
  g.fillRect(x0 - 8, ay + ah * 0.75, fw + 16, ah * 0.25);
  // display windows
  const wy0 = top + fh * 0.47, wy1 = gy - fh * 0.12;
  const winL = { x: x0 + fw * 0.05, y: wy0, w: fw * 0.29, h: wy1 - wy0 };
  const winR = { x: x0 + fw * 0.66, y: wy0, w: fw * 0.29, h: wy1 - wy0 };
  L.windows = [winL, winR];
  for (const w of [winL, winR]) {
    g.fillStyle = '#ffd1de';
    rrect(g, w.x - 7, w.y - 7, w.w + 14, w.h + 14, 14);
    g.fill();
    g.fillStyle = linear(g, w.x, w.y, w.x + w.w, w.y + w.h, [[0, '#fff8fb'], [1, '#f1e6f6']]);
    rrect(g, w.x, w.y, w.w, w.h, 10);
    g.fill();
    // little shelves inside with sticker sheets
    g.fillStyle = 'rgba(230,200,170,0.8)';
    g.fillRect(w.x + 6, w.y + w.h * 0.62, w.w - 12, 5);
    for (let i = 0; i < 3; i++) {
      g.fillStyle = ['#ffe3ec', '#e3f2ff', '#fff3cf'][i];
      rrect(g, w.x + 8 + i * (w.w - 16) / 3, w.y + w.h * 0.66, (w.w - 22) / 3, w.h * 0.28, 4);
      g.fill();
    }
    // glass sheen
    g.fillStyle = 'rgba(255,255,255,0.5)';
    g.beginPath();
    g.moveTo(w.x + w.w * 0.15, w.y);
    g.lineTo(w.x + w.w * 0.32, w.y);
    g.lineTo(w.x + w.w * 0.05, w.y + w.h * 0.5);
    g.lineTo(w.x, w.y + w.h * 0.5);
    g.closePath();
    g.fill();
  }
  // doorway (interior glow behind the door)
  const dw = fw * 0.25, dh = fh * 0.46;
  const dx = W / 2 - dw / 2, dy = gy - dh;
  L.door = { x: dx, y: dy, w: dw, h: dh };
  g.fillStyle = '#ffd1de';
  rrect(g, dx - 8, dy - 8, dw + 16, dh + 8, dw * 0.5);
  g.fill();
  g.fillStyle = radial(g, W / 2, dy + dh * 0.5, 4, dh * 0.7, [[0, '#fff1d6'], [1, '#ffc9a6']]);
  rrect(g, dx, dy, dw, dh, dw * 0.45);
  g.fill();
  g.fillStyle = 'rgba(255,170,190,0.6)';
  for (let i = 0; i < 3; i++) g.fillRect(dx + dw * 0.12, dy + dh * (0.35 + i * 0.18), dw * 0.76, 4);
  // step + flower pots
  g.fillStyle = '#efe3ea';
  rrect(g, dx - dw * 0.15, gy - 6, dw * 1.3, 12, 5);
  g.fill();
  for (const px of [dx - dw * 0.35, dx + dw * 1.35]) {
    g.fillStyle = '#ffb9a0';
    rrect(g, px - 14, gy - 30, 28, 30, 6);
    g.fill();
    for (let i = 0; i < 5; i++) {
      g.fillStyle = ['#ff8fb5', '#ffd36b', '#ffffff', '#c9b2ff', '#ff8fb5'][i];
      circle(g, px - 12 + i * 6, gy - 36 - (i % 2) * 7, 6);
      g.fill();
    }
    g.fillStyle = '#7fd38f';
    ellipse(g, px, gy - 30, 16, 6);
    g.fill();
  }
  // wet cobblestone street
  g.fillStyle = linear(g, 0, gy, 0, H, [[0, '#cfc6dc'], [1, '#b7aecb']]);
  g.fillRect(0, gy, W, H - gy);
  const r2 = rng(9);
  for (let row = 0; row < 14; row++) {
    const yy = gy + Math.pow(row / 14, 1.4) * (H - gy);
    const sh = 4 + row * 2.6;
    for (let xx = -20 + (row % 2) * 18; xx < W + 20; xx += 22 + row * 5) {
      g.fillStyle = `rgba(255,255,255,${0.08 + r2() * 0.12})`;
      ellipse(g, xx, yy, 9 + row * 2.2, sh * 0.35);
      g.fill();
    }
  }
  // curb
  g.fillStyle = '#e9e1ee';
  g.fillRect(0, gy, W, 6);
  // puddles
  L.puddles = portrait
    ? [{ x: W * 0.32, y: gy + (H - gy) * 0.38, rx: W * 0.3, ry: (H - gy) * 0.12 }, { x: W * 0.74, y: gy + (H - gy) * 0.7, rx: W * 0.24, ry: (H - gy) * 0.1 }]
    : [{ x: W * 0.38, y: gy + (H - gy) * 0.4, rx: W * 0.16, ry: (H - gy) * 0.16 }, { x: W * 0.64, y: gy + (H - gy) * 0.7, rx: W * 0.14, ry: (H - gy) * 0.13 }];
  return { c, L };
}

function paintMask(W, H, puddles) {
  const c = canvas(W, H);
  const g = c.getContext('2d');
  g.filter = 'blur(3px)';
  g.fillStyle = '#fff';
  for (const p of puddles) {
    g.beginPath();
    for (let i = 0; i <= 24; i++) {
      const a = (i / 24) * PI * 2;
      const k = 1 + Math.sin(a * 3 + p.x) * 0.1 + Math.cos(a * 5 + p.y) * 0.06;
      const x = p.x + Math.cos(a) * p.rx * k, y = p.y + Math.sin(a) * p.ry * k;
      if (i === 0) g.moveTo(x, y);
      else g.lineTo(x, y);
    }
    g.fill();
  }
  return c;
}

function paintDoor(w, h) {
  const c = canvas(w, h);
  const g = c.getContext('2d');
  g.fillStyle = linear(g, 0, 0, w, 0, [[0, '#ff9fbe'], [1, '#ffb8cf']]);
  rrect(g, 0, 0, w, h, w * 0.45);
  g.fill();
  g.fillStyle = 'rgba(220,245,255,0.95)';
  circle(g, w * 0.5, h * 0.27, w * 0.24);
  g.fill();
  g.strokeStyle = '#ffffff';
  g.lineWidth = w * 0.04;
  circle(g, w * 0.5, h * 0.27, w * 0.24);
  g.stroke();
  g.fillStyle = 'rgba(255,255,255,0.35)';
  rrect(g, w * 0.15, h * 0.52, w * 0.7, h * 0.36, 10);
  g.fill();
  g.fillStyle = '#ffe08a';
  circle(g, w * 0.82, h * 0.6, w * 0.06);
  g.fill();
  heart(g, w * 0.5, h * 0.7, w * 0.3, w * 0.27);
  g.fillStyle = '#ffffff';
  g.fill();
  return c;
}

export class Intro {
  constructor(game) {
    this.game = game;
    this.door = 0;
    this.doorV = 0;
    this.doorT = 0;
    this.ripples = [];
    this.drops = [];
    this.dropT = 1;
    this.zoom = 0;
    this.done = false;
    this.stickers = [];
    this.W = 0;
  }

  layout(W, H) {
    if (W === this.W && H === this.H) return;
    this.W = W;
    this.H = H;
    const { c, L } = paintScene(W, H);
    this.L = L;
    if (this.tex) { this.tex.dispose(); this.mask.dispose(); this.doorTex.dispose(); }
    this.tex = Texture.fromCanvas(c, { mip: false });
    this.mask = Texture.fromCanvas(paintMask(W, H, L.puddles), {});
    this.doorTex = Texture.fromCanvas(paintDoor(256, 256 * (L.door.h / L.door.w)), { mip: true });
    // puffy stickers stuck on the shop windows (from the inside)
    for (const s of this.stickers) s.dispose();
    const [wl, wr] = L.windows;
    const u = Math.min(wl.w * 0.55, 90);
    this.stickers = [
      new Sticker('heartPink', { x: wl.x + wl.w * 0.5, y: wl.y + wl.h * 0.3, unit: u, rot: -0.15 }),
      new Sticker('strawberry', { x: wr.x + wr.w * 0.36, y: wr.y + wr.h * 0.28, unit: u * 0.8, rot: 0.1 }),
      new Sticker('heartGlitter', { x: wr.x + wr.w * 0.7, y: wr.y + wr.h * 0.42, unit: u * 0.7, rot: 0.25 }),
    ];
    for (const s of this.stickers) s.gravity = [0, 0.6];
  }

  get model() {
    if (this.zoom <= 0) return null;
    const d = this.L.door;
    const cx = d.x + d.w / 2, cy = d.y + d.h * 0.5;
    const z = 1 + Math.pow(this.zoom, 2) * 5;
    return M.chain(M.translate(cx, cy, 0), M.scale(z, z, 1), M.translate(-cx, -cy, 0));
  }

  toLocal(x, y) {
    return [x, y];
  }

  toWorld(x, y) {
    return [x, y];
  }

  get unitPx() {
    return 1;
  }

  hitTest(x, y) {
    if (this.zoom > 0) return null;
    for (let i = this.stickers.length - 1; i >= 0; i--) {
      const s = this.stickers[i];
      const h = s.hit(x, y, 6);
      if (h) {
        s.locked = true;
        return new StickerGesture(this.game, s, this, x, y, { ...h, edge: false });
      }
    }
    const d = this.L.door;
    if (x > d.x - 10 && x < d.x + d.w + 10 && y > d.y - 10 && y < d.y + d.h + 10) return new DoorGesture(this, x, y);
    const aw = this.L.awning;
    if (y < aw.y + 10 && y > aw.y - this.H * 0.08 && x > aw.x0 && x < aw.x1) {
      for (let i = 0; i < 4; i++) this.spawnDrop(x + rand(-30, 30), aw.y + 4, i * 0.06);
      audio.drip();
      return { move() {}, up() {} };
    }
    const m = this.inPuddle(x, y);
    if (m) {
      this.addRipple(x, y, 1);
      audio.ripple({ intensity: 0.6 });
      return new PuddleGesture(this);
    }
    return null;
  }

  lockedPull() {}

  inPuddle(x, y) {
    return this.L.puddles.some((p) => ((x - p.x) / p.rx) ** 2 + ((y - p.y) / p.ry) ** 2 < 1.1);
  }

  addRipple(x, y, amp) {
    this.ripples.push({ x: x / this.W, y: y / this.H, t: 0, a: amp });
    if (this.ripples.length > 10) this.ripples.shift();
  }

  spawnDrop(x, y, delay = 0) {
    this.drops.push({ x, y, vy: 0, t: -delay });
  }

  update(dt) {
    // door spring (it stays open once pushed far enough)
    const target = this.doorHeld ? this.doorTarget : this.door > 0.85 || this.tapOpen ? 1.35 : 0;
    this.doorV += ((target - this.door) * 40 - this.doorV * 7) * dt;
    this.door = clamp(this.door + this.doorV * dt, 0, 1.4);
    if (!this.doorHeld && this.door > 1.0 && this.zoom === 0) {
      this.zoom = 0.0001;
      audio.whoosh({ intensity: 0.5 });
    }
    if (this.zoom > 0) {
      this.zoom = Math.min(1, this.zoom + dt / 1.3);
      if (this.zoom >= 1) this.done = true;
    }
    // drips from the awning edge
    this.dropT -= dt;
    if (this.dropT < 0) {
      this.dropT = rand(0.5, 1.6);
      const aw = this.L.awning;
      this.spawnDrop(rand(aw.x0 + 10, aw.x1 - 10), aw.y + 4);
    }
    const gy = this.L.gy;
    for (const d of this.drops) {
      d.t += dt;
      if (d.t < 0) continue;
      d.vy += 1600 * dt;
      d.y += d.vy * dt;
      if (!d.hit) {
        // landing spot: on the street below the awning, a bit forward
        const land = d.land ?? (d.land = gy + rand(10, (this.H - gy) * 0.8));
        if (d.y >= land) {
          d.hit = true;
          if (this.inPuddle(d.x, d.y)) {
            this.addRipple(d.x, d.y, 0.5);
            audio.drip();
          }
        }
      }
    }
    this.drops = this.drops.filter((d) => !d.hit);
    for (const r of this.ripples) r.t += dt;
    this.ripples = this.ripples.filter((r) => r.t < 3);
    for (const s of this.stickers) s.update(dt);
    audio.setRain(0.55);
  }

  render(R, time) {
    const W = this.W, H = this.H;
    const model = this.model;
    R.drawPaint({ art: this.tex, model, x: W / 2, y: H / 2, size: [W, H], lit: -1, mul: [1, 1, 1] });
    const rip = new Float32Array(40);
    this.ripples.forEach((r, i) => rip.set([r.x, r.y, r.t, r.a], i * 4));
    R.drawPuddles({ art: this.tex, mask: this.mask, model, x: W / 2, y: H / 2, size: [W, H], ripples: rip, ground: this.L.gy / H, aspect: [W, H] });
    // door swings on its left hinge (foreshortened) with the warm doorway behind
    const d = this.L.door;
    const open = this.door;
    const vis = Math.cos(Math.min(open, 1.45));
    const dwv = d.w * Math.max(0.04, vis);
    R.drawPaint({ art: this.doorTex, model, x: d.x + dwv / 2, y: d.y + d.h / 2, size: [dwv, d.h], lit: -1, mul: [1 - open * 0.25, 1 - open * 0.3, 1 - open * 0.25] });
    // stickers on the glass
    const surf = { model, unitPx: 1 };
    const items = this.stickers.map((s) => s.item(surf, time));
    for (const it of items) R.drawShadow(it, 0.35, [0.6, 0.55, 0.7], 0.8, 0.05);
    R.captureBackdrop();
    for (const it of items) R.drawSticker(it);
    // falling drops
    for (const dr of this.drops) {
      if (dr.t < 0) continue;
      R.drawPaint({ art: this.game.tex.spot, model, x: dr.x, y: dr.y, size: [5, 9], lit: -1, mul: [0.85, 0.92, 1.0] });
    }
  }
}

class DoorGesture {
  constructor(intro, x, y) {
    this.intro = intro;
    this.x0 = x;
    this.start = intro.door;
    intro.doorHeld = true;
    intro.doorTarget = Math.max(intro.door, 0.3);
    this.moved = 0;
    audio.doorBell();
    intro.game.touchedSomething();
  }
  move(x) {
    const it = this.intro;
    const dx = x - this.x0;
    this.moved = Math.max(this.moved, Math.abs(dx));
    it.doorTarget = clamp(this.start + 0.3 + Math.abs(dx) / (it.L.door.w * 0.9), 0, 1.4);
  }
  up() {
    const it = this.intro;
    it.doorHeld = false;
    // a tap (or a decent push) swings it open
    if (this.moved < 12 || it.doorTarget > 0.7) {
      it.tapOpen = true;
      it.doorV += 3;
    }
  }
  cancel() {
    this.up();
  }
}

class PuddleGesture {
  constructor(intro) {
    this.intro = intro;
    this.acc = 0;
  }
  move(x, y, dt) {
    const it = this.intro;
    this.acc += dt;
    if (this.acc > 0.12 && it.inPuddle(x, y)) {
      this.acc = 0;
      it.addRipple(x, y, 0.7);
      audio.ripple({ intensity: 0.35 });
    }
  }
  up() {}
}

export { gl };
