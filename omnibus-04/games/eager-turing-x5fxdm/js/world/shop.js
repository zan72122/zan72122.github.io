// The shop counter strip: stations side by side; the view slides between them. Neighbours
// peek in at the edges, so there is always something to reach for.
import { SheetStation, SHEETS } from './sheet.js';
import { clamp, lerp } from '../core/math.js';
import { audio } from '../core/audio.js';

export class Shop {
  constructor(game) {
    this.game = game;
    this.stations = SHEETS.map((d, i) => new SheetStation(game, d, i));
    this.cam = 0;
    this.camV = 0;
    this.target = 0;
    this.drag = null;
    this.rect = { x: 0, y: 0, w: 100, h: 100 };
    this.pitch = 100;
  }

  add(station) {
    station.index = this.stations.length;
    this.stations.push(station);
  }

  indexOfKind(kind) {
    return this.stations.findIndex((s) => s.kind === kind);
  }

  layout(rect) {
    const prevPitch = this.pitch;
    this.rect = rect;
    this.pitch = rect.w * 0.84;
    this.cam = (this.cam / prevPitch) * this.pitch;
    const w = rect.w * 0.8;
    const h = Math.min(rect.h * 0.9, w * 1.3);
    this.contentW = w;
    this.contentH = h;
    this.place();
    for (const s of this.stations) s.layout(s.sx, s.sy, w, h);
  }

  stationX(i) {
    return this.rect.x + this.rect.w / 2 + i * this.pitch - this.cam;
  }

  place() {
    const cy = this.rect.y + this.rect.h / 2 + this.rect.h * 0.01;
    this.stations.forEach((s, i) => {
      s.sx = this.stationX(i);
      s.sy = cy;
      if (s.setCenter) s.setCenter(s.sx, s.sy);
      else {
        s.cx = s.sx;
        s.cy = s.sy;
      }
    });
  }

  visible(i) {
    const x = this.stationX(i);
    return x + this.contentW * 0.6 > this.rect.x - 40 && x - this.contentW * 0.6 < this.rect.x + this.rect.w + 40;
  }

  goTo(i, sound = true) {
    i = clamp(i, 0, this.stations.length - 1);
    if (i !== this.target && sound) audio.whoosh({ intensity: 0.35 });
    this.target = i;
  }

  get current() {
    return this.stations[this.target];
  }

  update(dt) {
    if (!this.drag) {
      const goal = this.target * this.pitch;
      this.camV += ((goal - this.cam) * 60 - this.camV * 14) * dt;
      this.cam += this.camV * dt;
    }
    this.place();
    this.stations.forEach((s, i) => {
      const vis = this.visible(i);
      if (vis && s.build) s.build();
      s.update(dt, vis);
    });
  }

  render(R, time) {
    this.stations.forEach((s, i) => {
      if (this.visible(i)) s.render(R, time);
    });
  }

  // gestures inside the station area
  hitTest(x, y) {
    const r = this.rect;
    if (x < r.x || x > r.x + r.w || y < r.y - 10 || y > r.y + r.h) return null;
    for (let i = 0; i < this.stations.length; i++) {
      if (!this.visible(i)) continue;
      const s = this.stations[i];
      const g = s.hitTest ? s.hitTest(x, y) : null;
      if (g) return g;
    }
    return { kind: 'pan', gesture: new PanGesture(this, x, y) };
  }
}

class PanGesture {
  constructor(shop, x, y) {
    this.shop = shop;
    this.x0 = x;
    this.cam0 = shop.cam;
    this.v = 0;
    this.lastX = x;
    this.moved = 0;
    shop.drag = this;
  }

  move(x, y, dt) {
    const s = this.shop;
    const dx = x - this.lastX;
    this.lastX = x;
    this.moved = Math.max(this.moved, Math.abs(x - this.x0));
    this.v = lerp(this.v, -dx / Math.max(dt, 1e-3), 0.35);
    let c = this.cam0 - (x - this.x0);
    const max = (s.stations.length - 1) * s.pitch;
    if (c < 0) c = -Math.pow(-c, 0.8);
    if (c > max) c = max + Math.pow(c - max, 0.8);
    s.cam = c;
    s.camV = this.v;
  }

  up(x) {
    const s = this.shop;
    s.drag = null;
    if (this.moved < 10) {
      // tap on a peeking neighbour slides to it
      const cx = s.rect.x + s.rect.w / 2;
      if (x > cx + s.contentW / 2) s.goTo(s.target + 1);
      else if (x < cx - s.contentW / 2) s.goTo(s.target - 1);
      return;
    }
    const proj = (s.cam + this.v * 0.18) / s.pitch;
    let t = Math.round(proj);
    t = clamp(t, s.target - 1, s.target + 1);
    s.goTo(t);
    if (t === s.target) s.camV = this.v;
  }

  cancel() {
    this.up(this.lastX);
  }
}
