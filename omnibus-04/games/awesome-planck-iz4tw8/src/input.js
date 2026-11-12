// One finger. Extra touches are ignored; no gestures, no zoom.
export class Input {
  constructor(el) {
    this.el = el;
    this.down = false; this.pressed = false; this.released = false;
    this.sx = 0; this.sy = 0;   // normalized device coords
    this.id = null;
    this.idle = 0;
    this.any = false;
    this.listeners = [];
    const opt = { passive: false };
    el.addEventListener('pointerdown', e => this.onDown(e), opt);
    window.addEventListener('pointermove', e => this.onMove(e), opt);
    window.addEventListener('pointerup', e => this.onUp(e), opt);
    window.addEventListener('pointercancel', e => this.onUp(e), opt);
    for (const t of ['touchstart', 'touchmove', 'gesturestart', 'gesturechange', 'dblclick', 'contextmenu'])
      el.addEventListener(t, e => e.preventDefault(), opt);
    // iOS only unlocks audio inside certain gesture events
    el.addEventListener('touchend', e => { e.preventDefault(); for (const f of this.listeners) f('touchend'); }, opt);
    document.addEventListener('gesturestart', e => e.preventDefault(), opt);
  }
  setXY(e) {
    const r = this.el.getBoundingClientRect();
    this.px = e.clientX - r.left; this.py = e.clientY - r.top;
    this.sx = (this.px / r.width) * 2 - 1;
    this.sy = -((this.py / r.height) * 2 - 1);
  }
  onDown(e) {
    e.preventDefault();
    if (this.id !== null) return;
    this.id = e.pointerId;
    try { this.el.setPointerCapture(e.pointerId); } catch (_) {}
    this.setXY(e);
    this.down = true; this.pressed = true; this.idle = 0; this.any = true;
    for (const f of this.listeners) f('down');
  }
  onMove(e) {
    if (e.pointerId !== this.id) return;
    e.preventDefault();
    this.setXY(e);
    this.idle = 0;
    this.moved = true;
  }
  onUp(e) {
    if (e.pointerId !== this.id) return;
    this.setXY(e);
    this.id = null;
    this.down = false; this.released = true; this.idle = 0;
    for (const f of this.listeners) f('up');
  }
  endFrame(dt) {
    this.pressed = false; this.released = false; this.moved = false;
    if (!this.down) this.idle += dt;
  }
}
