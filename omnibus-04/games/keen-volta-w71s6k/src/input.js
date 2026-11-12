// One-finger input. Targets register a screen-space pick function so hit areas
// can be generous (distance to the object's projected shape, not exact hits).
import * as THREE from 'three';

export class Input {
  constructor(canvas, camera) {
    this.canvas = canvas; this.camera = camera; this.targets = [];
    this.active = null; this.pointerId = null; this.lastActivity = performance.now();
    this.ray = new THREE.Ray(); this._v = new THREE.Vector3(); this._ndc = new THREE.Vector2();
    this.enabled = true; this.onAnyDown = null;
    this.abort = new AbortController();
    const opt = { passive: false, signal: this.abort.signal }, sig = { signal: this.abort.signal };
    canvas.addEventListener('pointerdown', (e) => this._down(e), opt);
    canvas.addEventListener('pointermove', (e) => this._move(e), opt);
    canvas.addEventListener('pointerup', (e) => this._up(e, false), opt);
    canvas.addEventListener('pointercancel', (e) => this._up(e, true), opt);
    canvas.addEventListener('lostpointercapture', (e) => { if (this.active && e.pointerId === this.pointerId) this._up(e, true); }, sig);
    canvas.addEventListener('contextmenu', (e) => e.preventDefault(), sig);
    ['gesturestart', 'gesturechange', 'dblclick'].forEach((n) => document.addEventListener(n, (e) => e.preventDefault(), opt));
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.cancel(); }, sig);
    window.addEventListener('blur', () => this.cancel(), sig);
  }
  register(t) { this.targets.push(t); return t; }
  unregister(t) { this.targets = this.targets.filter((x) => x !== t); }
  clear() { this.cancel(); this.targets = []; }
  destroy() { this.clear(); this.abort.abort(); }

  size() { const r = this.canvas.getBoundingClientRect(); return { w: r.width, h: r.height, x: r.left, y: r.top }; }
  // World point -> CSS pixel coordinates.
  project(p, out = { x: 0, y: 0, behind: false }) {
    const s = this.size(); this._v.copy(p).project(this.camera);
    out.x = (this._v.x * 0.5 + 0.5) * s.w; out.y = (-this._v.y * 0.5 + 0.5) * s.h; out.behind = this._v.z > 1;
    return out;
  }
  // Pixels per world metre at a given world point (for drag scaling).
  pxPerMetre(p) {
    const a = this.project(p, {}), b = this.project(this._v.copy(p).add(new THREE.Vector3(0, 1, 0)), {});
    return Math.max(1, Math.hypot(a.x - b.x, a.y - b.y));
  }
  rayFrom(sx, sy) {
    const s = this.size(); this._ndc.set((sx / s.w) * 2 - 1, -(sy / s.h) * 2 + 1);
    this.ray.origin.setFromMatrixPosition(this.camera.matrixWorld);
    this.ray.direction.set(this._ndc.x, this._ndc.y, 0.5).unproject(this.camera).sub(this.ray.origin).normalize();
    return this.ray;
  }
  // Intersect the pointer ray with the plane z = const (the "working plane" of a mechanism).
  onPlaneZ(sx, sy, z, out = new THREE.Vector3()) {
    const r = this.rayFrom(sx, sy); const t = (z - r.origin.z) / r.direction.z;
    return out.copy(r.direction).multiplyScalar(t).add(r.origin);
  }
  distToPoint(sx, sy, p) { const q = this.project(p, {}); return Math.hypot(q.x - sx, q.y - sy); }
  distToSegment(sx, sy, a, b) {
    const p = this.project(a, {}), q = this.project(b, {});
    const dx = q.x - p.x, dy = q.y - p.y, l2 = dx * dx + dy * dy || 1;
    let t = ((sx - p.x) * dx + (sy - p.y) * dy) / l2; t = Math.max(0, Math.min(1, t));
    return Math.hypot(p.x + dx * t - sx, p.y + dy * t - sy);
  }

  _pos(e) { const s = this.size(); return { x: e.clientX - s.x, y: e.clientY - s.y }; }
  _down(e) {
    e.preventDefault();
    this.lastActivity = performance.now();
    this.onAnyDown && this.onAnyDown(e);
    if (this.active || !this.enabled) return;             // ignore extra fingers
    const p = this._pos(e);
    let best = null, bestScore = Infinity;
    for (const t of this.targets) {
      if (t.enabled && !t.enabled()) continue;
      const sc = t.pick(p.x, p.y);
      const lim = t.radius ?? 80;
      if (sc != null && sc <= lim && sc < bestScore) { best = t; bestScore = sc; }
    }
    if (!best) { this.onMiss && this.onMiss(p); return; }
    this.active = best; this.pointerId = e.pointerId;
    try { this.canvas.setPointerCapture(e.pointerId); } catch (_) {}
    this.g = { sx: p.x, sy: p.y, x: p.x, y: p.y, dx: 0, dy: 0, t0: performance.now(), moved: 0, lastX: p.x, lastY: p.y, vx: 0, vy: 0, lastT: performance.now() };
    best.down && best.down(this.g);
  }
  _move(e) {
    if (!this.active || e.pointerId !== this.pointerId) return;
    e.preventDefault(); this.lastActivity = performance.now();
    const p = this._pos(e), g = this.g, now = performance.now(), dt = Math.max(1, now - g.lastT);
    g.vx = g.vx * 0.6 + ((p.x - g.lastX) / dt) * 0.4; g.vy = g.vy * 0.6 + ((p.y - g.lastY) / dt) * 0.4;
    g.lastX = p.x; g.lastY = p.y; g.lastT = now;
    g.x = p.x; g.y = p.y; g.dx = p.x - g.sx; g.dy = p.y - g.sy; g.moved = Math.max(g.moved, Math.hypot(g.dx, g.dy));
    this.active.move && this.active.move(g);
  }
  _up(e, cancelled) {
    if (!this.active || (e && e.pointerId !== this.pointerId)) return;
    const t = this.active, g = this.g; this.active = null;
    try { this.canvas.releasePointerCapture(this.pointerId); } catch (_) {}
    this.pointerId = null; this.lastActivity = performance.now();
    g.tap = !cancelled && g.moved < 14 && performance.now() - g.t0 < 450;
    g.cancelled = cancelled;
    t.up && t.up(g);
  }
  cancel() { if (this.active) this._up(null, true); }
}
