import { Runner } from '../util.js';

// Shared plumbing for the stations along the road.
export class Scene {
  constructor(game, name, X) {
    this.g = game; this.name = name; this.X = X;
    this.range = [-460, 460];
    this.camKey = 'overview';
    this.reset();
    this.layout();
  }
  reset() { this.run = new Runner(); this.step = 'pre'; this.t = 0; this.camKey = 'overview'; }
  layout() { this.prevL = this.L; this.P = this.g.view.portrait; this.L = this.P ? this.layoutP() : this.layoutL(); }
  layoutP() { return {}; }
  layoutL() { return {}; }
  w(p) { return { x: this.X + p.x, y: p.y }; }
  wx(x) { return this.X + x; }
  anchor() { return { girl: this.w(this.L.girl), rack: this.w(this.L.rack) }; }
  frame(key) { const r = this.L.frames[key || this.camKey] || this.L.frames.overview; return { x: this.X + r.x, y: r.y, w: r.w, h: r.h }; }
  setCam(key, rate = 3) { this.camKey = key; this.g.cam.rate = rate; this.g.cam.fit(this.frame()); }
  // orientation changed: put parked things where the new arrangement expects them
  relayout() {
    const g = this.g;
    if (this.prevL && this.onRelayout) this.onRelayout();
    if (g.current !== this) return;
    g.wardrobe.cancel();
    if (!g.rack.attached) { const a = this.anchor(); g.rack.x = a.rack.x; g.rack.y = a.rack.y; g.rack._px = g.rack.x; }
    const gp = g.mode === 'play' ? this.girlSpot() : null;
    if (gp) { g.girl.x = gp.x; g.girl.y = gp.y; g.girl.target = null; }
    g.girl.reachL = g.girl.reachR = null;
    if (g.mode === 'play') g.cam.fit(this.frame(), true);
  }
  // where the girl stands during the current step (null while a script moves her)
  girlSpot() { return ['pre', 'dress', 'closed'].includes(this.step) ? this.anchor().girl : null; }
  visible() { const vb = this.g.viewBounds(); return this.X + this.range[1] > vb.x0 && this.X + this.range[0] < vb.x1; }
  prepare() {}
  enter() {}
  update(dt) { this.t += dt; this.run.update(dt); }
  idle(dt) { this.t += dt; }
  busy() { return false; }
  down() {} move() {} up() {}
  drawFloor() {} collect() {}
  pan(x) { return this.g.panOf(x); }
  // helper: is the girl's current station work finished
  finish() { this.step = 'done'; this.g.hints.clear(); this.g.next(); }
}
