// Core: namespace, math helpers, canvas sizing, camera, pointer input.
(function () {
  'use strict';
  const K = (window.K = {});
  const Q = new URLSearchParams(location.search);
  K.debug = Q.has('debug');
  K.timeScale = parseFloat(Q.get('speed') || '1') || 1;

  // ---------- math ----------
  K.TAU = Math.PI * 2;
  K.clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  K.lerp = (a, b, t) => a + (b - a) * t;
  K.inv = (a, b, v) => (v - a) / (b - a);
  K.sat = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
  K.smooth = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));
  K.easeOut = (t) => 1 - (1 - K.sat(t)) * (1 - K.sat(t));
  K.easeIn = (t) => K.sat(t) * K.sat(t);
  K.easeInOut = (t) => { t = K.sat(t); return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; };
  K.backOut = (t) => { t = K.sat(t); const c = 1.9; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
  K.rand = (a = 0, b = 1) => a + Math.random() * (b - a);
  K.pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  K.dist = (ax, ay, bx, by) => Math.hypot(bx - ax, by - ay);
  K.follow = (v, target, rate, dt) => v + (target - v) * (1 - Math.exp(-rate * dt));
  K.angDiff = (a, b) => { let d = b - a; while (d > Math.PI) d -= K.TAU; while (d < -Math.PI) d += K.TAU; return d; };
  K.srand = function (seed) {
    let s = (seed >>> 0) || 1;
    return function () { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
  };
  // damped spring: sp = {x, v, t}
  K.spring = (x = 0) => ({ x, v: 0, t: x });
  K.stepSpring = (sp, k, c, dt) => { sp.v += (k * (sp.t - sp.x) - c * sp.v) * dt; sp.x += sp.v * dt; };

  // ---------- canvas ----------
  K.cv = document.getElementById('c');
  K.ctx = K.cv.getContext('2d');
  K.resize = function () {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    K.dpr = dpr;
    K.W = K.cv.clientWidth || window.innerWidth;
    K.H = K.cv.clientHeight || window.innerHeight;
    K.cv.width = Math.round(K.W * dpr);
    K.cv.height = Math.round(K.H * dpr);
  };
  window.addEventListener('resize', K.resize);
  window.addEventListener('orientationchange', () => setTimeout(K.resize, 120));
  K.resize();

  // ---------- camera ----------
  // The story frames a world rectangle; the camera fits it into any screen shape.
  K.cam = {
    x: 0, y: -120, s: 1, tx: 0, ty: -120, ts: 1,
    rect: [-300, -400, 300, 200], rectFn: null, rate: 2.2,
    shake: 0, sx: 0, sy: 0, minW: 560, minH: 560,
    // pw: widest world span allowed on an upright phone (default keeps the girl big)
    frame(x0, y0, x1, y1, now, pw) {
      this.rectFn = null;
      this.pw = pw || 0;
      this.rect = [x0, y0, x1, y1];
      this.calc();
      if (now) this.snap();
    },
    track(fn, now, pw) { this.rectFn = fn; this.pw = pw || 0; this.calc(); if (now) this.snap(); },
    snap() { this.x = this.tx; this.y = this.ty; this.s = this.ts; },
    calc() {
      const r = this.rectFn ? this.rectFn() : this.rect;
      let [x0, y0, x1, y1] = r;
      let w = x1 - x0, h = y1 - y0;
      let cx = (x0 + x1) / 2;
      // phones held upright: keep the width modest so the girl stays big;
      // the tall screen then shows more sky and more of the cut-away ground.
      const portrait = K.W / K.H < 0.8;
      const maxW = this.pw || 460;
      if (portrait && w > maxW) {
        const g = K.girl;
        const half = maxW / 2;
        if (g && g.x > x0 - 600 && g.x < x1 + 600) cx = K.clamp(cx, g.x - half + 110, g.x + half - 110);
        w = maxW;
      }
      const mw = Math.max(w, this.closeUp || (portrait ? 420 : this.minW)), mh = Math.max(h, this.closeUp || this.minH);
      this.tx = cx; this.ty = (y0 + y1) / 2;
      this.ts = Math.min(K.W / mw, K.H / mh);
    },
    update(dt) {
      this.calc();
      const r = 1 - Math.exp(-this.rate * dt);
      this.x += (this.tx - this.x) * r;
      this.y += (this.ty - this.y) * r;
      this.s = Math.exp(Math.log(this.s) + (Math.log(this.ts) - Math.log(this.s)) * r);
      this.shake = Math.max(0, this.shake - dt * (this.shake * 5 + 0.6));
      const sh = Math.min(this.shake, 14);
      this.sx = (Math.random() * 2 - 1) * sh;
      this.sy = (Math.random() * 2 - 1) * sh;
    },
    bump(a) { this.shake = Math.max(this.shake, a); },
    apply(ctx) {
      const s = this.s * K.dpr;
      ctx.setTransform(s, 0, 0, s, K.dpr * K.W / 2 - (this.x + this.sx) * s, K.dpr * K.H / 2 - (this.y + this.sy) * s);
    },
    toWorld(sx, sy) { return { x: (sx - K.W / 2) / this.s + this.x, y: (sy - K.H / 2) / this.s + this.y }; },
    toScreen(wx, wy) { return { x: (wx - this.x) * this.s + K.W / 2, y: (wy - this.y) * this.s + K.H / 2 }; },
    // world radius that is at least `px` screen pixels (for friendly touch targets)
    touchR(r, px = 34) { return Math.max(r, px / this.s); },
    view() {
      const a = this.toWorld(0, 0), b = this.toWorld(K.W, K.H);
      return [a.x, a.y, b.x, b.y];
    },
  };

  // ---------- input (single finger) ----------
  const I = (K.input = {
    down: false, id: null, sx: 0, sy: 0, sx0: 0, sy0: 0, t0: 0, travel: 0, lastT: 0,
    get x() { return K.cam.toWorld(this.sx, this.sy).x; },
    get y() { return K.cam.toWorld(this.sx, this.sy).y; },
    world() { return K.cam.toWorld(this.sx, this.sy); },
  });
  function pos(e) {
    const r = K.cv.getBoundingClientRect();
    return { sx: e.clientX - r.left, sy: e.clientY - r.top };
  }
  K.cv.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    if (K.audioUnlock) K.audioUnlock();
    if (I.down) return;
    const p = pos(e);
    I.down = true; I.id = e.pointerId;
    I.sx = I.sx0 = p.sx; I.sy = I.sy0 = p.sy; I.t0 = K.time; I.travel = 0; I.lastT = K.time;
    try { K.cv.setPointerCapture(e.pointerId); } catch (_) {}
    if (K.onDown) K.onDown(I.world());
  });
  K.cv.addEventListener('pointermove', (e) => {
    if (!I.down || e.pointerId !== I.id) return;
    e.preventDefault();
    const p = pos(e);
    I.travel += Math.hypot(p.sx - I.sx, p.sy - I.sy);
    I.sx = p.sx; I.sy = p.sy; I.lastT = K.time;
    if (K.onMove) K.onMove(I.world());
  });
  function up(e) {
    if (K.audioUnlock) K.audioUnlock();
    if (!I.down || e.pointerId !== I.id) return;
    const p = pos(e);
    I.sx = p.sx; I.sy = p.sy;
    I.down = false; I.id = null; I.lastT = K.time;
    const tap = I.travel < 14 && K.time - I.t0 < 0.45;
    if (K.onUp) K.onUp(I.world(), tap);
  }
  K.cv.addEventListener('pointerup', up);
  K.cv.addEventListener('pointercancel', up);
  // leaving the app mid-touch must not leave a finger "stuck" on the screen
  function release() {
    if (!I.down) return;
    I.down = false; I.id = null;
    if (K.onUp) K.onUp(I.world(), false);
  }
  window.addEventListener('blur', release);
  document.addEventListener('visibilitychange', () => { if (document.hidden) release(); });
  // keep iOS from scrolling, zooming or showing callouts
  const stop = (e) => e.preventDefault();
  // iOS unlocks WebAudio most reliably on touchend
  document.addEventListener('touchend', () => { if (K.audioUnlock) K.audioUnlock(); }, { passive: true });
  document.addEventListener('touchmove', stop, { passive: false });
  document.addEventListener('gesturestart', stop);
  document.addEventListener('dblclick', stop);
  document.addEventListener('contextmenu', stop);

  // ---------- tiny timeline helper ----------
  // K.after(sec, fn) schedules fn in game time; cleared on K.clearTimers().
  K.timers = [];
  K.after = (sec, fn) => { const t = { at: K.time + sec, fn }; K.timers.push(t); return t; };
  K.clearTimers = () => { K.timers.length = 0; };
  K.runTimers = () => {
    for (let i = K.timers.length - 1; i >= 0; i--) {
      const t = K.timers[i];
      if (K.time >= t.at) { K.timers.splice(i, 1); t.fn(); }
    }
  };
  K.time = 0;
})();
