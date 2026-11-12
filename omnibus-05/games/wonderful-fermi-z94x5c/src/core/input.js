// One-finger friendly pointer tracking. Taps and drags are not strictly separated:
// every pointer reports down / move / up with position and velocity.
export class Input {
  constructor(el) {
    this.el = el;
    this.pointers = new Map();
    this.handlers = { down: [], move: [], up: [], first: [], gesture: [] };
    this.firstDone = false;
    this.lastActivity = performance.now();
    const opts = { passive: false };
    el.addEventListener('pointerdown', (e) => this._down(e), opts);
    window.addEventListener('pointermove', (e) => this._move(e), opts);
    window.addEventListener('pointerup', (e) => this._up(e), opts);
    window.addEventListener('pointercancel', (e) => this._up(e), opts);
    // block browser gestures (scroll, zoom, callouts)
    const block = (e) => {
      if (e.cancelable) e.preventDefault();
    };
    el.addEventListener('touchstart', block, opts);
    el.addEventListener('touchmove', block, opts);
    el.addEventListener('touchend', (e) => {
      block(e);
      this._first();
      for (const f of this.handlers.gesture) f();
    }, opts);
    document.addEventListener('gesturestart', block, opts);
    document.addEventListener('gesturechange', block, opts);
    document.addEventListener('dblclick', block, opts);
    el.addEventListener('contextmenu', block, opts);
    window.addEventListener('keydown', () => this._first());
    el.addEventListener('click', () => this._first());
  }

  on(ev, fn) {
    this.handlers[ev].push(fn);
  }

  _first() {
    if (this.firstDone) return;
    this.firstDone = true;
    for (const f of this.handlers.first) f();
  }

  idle() {
    return (performance.now() - this.lastActivity) / 1000;
  }

  _down(e) {
    if (e.cancelable) e.preventDefault();
    this._first();
    try {
      this.el.setPointerCapture(e.pointerId);
    } catch (_) {}
    const now = performance.now();
    const p = { id: e.pointerId, x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t0: now, t: now, vx: 0, vy: 0, dist: 0, data: {} };
    this.pointers.set(e.pointerId, p);
    this.lastActivity = now;
    for (const f of this.handlers.down) f(p);
  }

  _move(e) {
    const p = this.pointers.get(e.pointerId);
    if (!p) return;
    if (e.cancelable) e.preventDefault();
    const now = performance.now();
    const dt = Math.max(1, now - p.t) / 1000;
    const dx = e.clientX - p.x, dy = e.clientY - p.y;
    const k = Math.min(1, dt * 25);
    p.vx += (dx / dt - p.vx) * k;
    p.vy += (dy / dt - p.vy) * k;
    p.dist += Math.hypot(dx, dy);
    p.x = e.clientX;
    p.y = e.clientY;
    p.t = now;
    this.lastActivity = now;
    for (const f of this.handlers.move) f(p);
  }

  _up(e) {
    for (const f of this.handlers.gesture) f();
    const p = this.pointers.get(e.pointerId);
    if (!p) return;
    this.pointers.delete(e.pointerId);
    p.up = true;
    for (const f of this.handlers.up) f(p);
  }

  // test helper: synthesize
  synth(type, x, y, id = 99) {
    const ev = { pointerId: id, clientX: x, clientY: y, cancelable: false, preventDefault() {} };
    if (type === 'down') this._down(ev);
    else if (type === 'move') this._move(ev);
    else this._up(ev);
  }
}
