'use strict';
/* ============================================================
   view.js — canvas, layout profiles (composition), camera
   ============================================================ */

/* Composition profiles. Portrait is a tall vertical frame that keeps lots of
   sky above the gardener; landscape shows more of the garden side by side and
   parks the subject on the left third so the open sky sits on the right. */
const LAYOUT = {
  portrait: {
    name: 'portrait', viewW: 5.2,
    groundFy: 0.72, subjFx: 0.36, look: 0.42,
    sleepZoom: 1.08, towerZoom: 0.74,
    climbFx: 0.5, climbFy: 0.6, crownFx: 0.5, crownFy: 0.66, catchZoom: 0.9,
    moon: [0.25, 0.1], moonR: 0.085,
    giantLean: 0.12, finalFit: [0.1, 0.1, 0.12, 0.2],
  },
  landscape: {
    name: 'landscape', viewH: 7.7,
    groundFy: 0.76, subjFx: 0.3, look: 0.55,
    sleepZoom: 1.05, towerZoom: 0.6,
    climbFx: 0.36, climbFy: 0.58, crownFx: 0.36, crownFy: 0.64, catchZoom: 0.82,
    moon: [0.8, 0.16], moonR: 0.07,
    giantLean: 0.62, finalFit: [0.08, 0.12, 0.1, 0.1],
  },
  square: {
    name: 'square', viewMin: 7.4,
    groundFy: 0.74, subjFx: 0.33, look: 0.5,
    sleepZoom: 1.05, towerZoom: 0.66,
    climbFx: 0.42, climbFy: 0.6, crownFx: 0.42, crownFy: 0.65, catchZoom: 0.86,
    moon: [0.76, 0.13], moonR: 0.075,
    giantLean: 0.35, finalFit: [0.1, 0.1, 0.1, 0.14],
  },
};

const View = {
  cv: null, ctx: null, W: 1, H: 1, dpr: 1, aspect: 1, layout: 'portrait', L: LAYOUT.portrait, basePPU: 60,
  onResize: [],
  init() {
    this.cv = document.getElementById('c');
    this.ctx = this.cv.getContext('2d', { alpha: false });
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 150));
    if (window.visualViewport) window.visualViewport.addEventListener('resize', () => this.resize());
  },
  resize() {
    const W = Math.max(1, Math.round(window.innerWidth)), H = Math.max(1, Math.round(window.innerHeight));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (W === this.W && H === this.H && dpr === this.dpr && this.cv.width) return;
    this.W = W; this.H = H; this.dpr = dpr;
    this.cv.width = Math.round(W * dpr); this.cv.height = Math.round(H * dpr);
    this.cv.style.width = W + 'px'; this.cv.style.height = H + 'px';
    this.aspect = W / H;
    this.layout = this.aspect < 0.8 ? 'portrait' : this.aspect > 1.22 ? 'landscape' : 'square';
    this.L = LAYOUT[this.layout];
    if (this.layout === 'portrait') this.basePPU = W / this.L.viewW;
    else if (this.layout === 'landscape') this.basePPU = H / this.L.viewH;
    else this.basePPU = Math.min(W, H) / this.L.viewMin;
    for (const f of this.onResize) f();
  },
};

const Cam = {
  x: -2, y: 2, ppu: 60, tx: -2, ty: 2, tppu: 60,
  lamX: 2.2, lamY: 2.2, lamZ: 1.6,
  shakeAmp: 0, shakeT: 0, ox: 0, oy: 0,
  update(dt) {
    this.x = damp(this.x, this.tx, this.lamX, dt);
    this.y = damp(this.y, this.ty, this.lamY, dt);
    this.ppu = Math.exp(damp(Math.log(this.ppu), Math.log(this.tppu), this.lamZ, dt));
    this.shakeAmp = damp(this.shakeAmp, 0, 4, dt);
    this.shakeT += dt;
    const a = this.shakeAmp;
    this.ox = (Math.sin(this.shakeT * 53.1) + Math.sin(this.shakeT * 31.7)) * 0.5 * a;
    this.oy = (Math.sin(this.shakeT * 47.3 + 1) + Math.sin(this.shakeT * 29.1 + 2)) * 0.5 * a;
  },
  shake(a) { this.shakeAmp = Math.max(this.shakeAmp, a); },
  get vw() { return View.W / this.ppu; },
  get vh() { return View.H / this.ppu; },
  /* place world point (fx,fy) at screen fraction (sx,sy) with zoom ppu */
  frame(fx, fy, sx, sy, ppu) {
    this.tppu = ppu;
    this.tx = fx - (sx - 0.5) * (View.W / ppu);
    this.ty = fy + (sy - 0.5) * (View.H / ppu);
  },
  /* fit a world box [x0,y0,x1,y1] with margins (fractions l,t,r,b) */
  fit(x0, y0, x1, y1, m = [0.1, 0.1, 0.1, 0.1]) {
    const aw = View.W * (1 - m[0] - m[2]), ah = View.H * (1 - m[1] - m[3]);
    const ppu = Math.min(aw / Math.max(0.1, x1 - x0), ah / Math.max(0.1, y1 - y0));
    this.tppu = ppu;
    const cxs = View.W * (m[0] + (1 - m[0] - m[2]) / 2), cys = View.H * (m[1] + (1 - m[1] - m[3]) / 2);
    this.tx = (x0 + x1) / 2 - (cxs - View.W / 2) / ppu;
    this.ty = (y0 + y1) / 2 + (cys - View.H / 2) / ppu;
  },
  world(ctx) {
    const s = this.ppu * View.dpr;
    const cx = this.x + this.ox, cy = this.y + this.oy;
    ctx.setTransform(s, 0, 0, -s, View.dpr * View.W / 2 - cx * s, View.dpr * View.H / 2 + cy * s);
  },
  screen(ctx) { ctx.setTransform(View.dpr, 0, 0, View.dpr, 0, 0); },
  toScreen(x, y) { return { x: View.W / 2 + (x - this.x - this.ox) * this.ppu, y: View.H / 2 - (y - this.y - this.oy) * this.ppu }; },
  toWorld(sx, sy) { return { x: this.x + this.ox + (sx - View.W / 2) / this.ppu, y: this.y + this.oy - (sy - View.H / 2) / this.ppu }; },
  snap() { this.x = this.tx; this.y = this.ty; this.ppu = this.tppu; },
  get left() { return this.x - this.vw / 2; },
  get right() { return this.x + this.vw / 2; },
  get top() { return this.y + this.vh / 2; },
  get bottom() { return this.y - this.vh / 2; },
  panOf(x) { return clamp((x - this.x) / (this.vw * 0.6), -0.9, 0.9); },
};
