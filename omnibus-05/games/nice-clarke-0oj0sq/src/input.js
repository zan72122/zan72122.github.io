// Touch input for small, imprecise fingers.
// Targets register meshes (or a screen-space proximity test). A press becomes a "session"
// that receives move/up; short presses become taps. Several fingers can act at once.
import * as THREE from 'three';

const ray = new THREE.Raycaster();
const ndc = new THREE.Vector2();
const tmp = new THREE.Vector3();

export class Input {
  constructor(engine) {
    this.engine = engine;
    this.canvas = engine.canvas;
    this.targets = [];
    this.pointers = new Map();
    this.enabled = true;
    this.onAnyDown = null;
    this.lastInputTime = 0;
    this.time = 0;
    const c = this.canvas;
    c.addEventListener('pointerdown', (e) => this.down(e), { passive: false });
    window.addEventListener('pointermove', (e) => this.move(e), { passive: false });
    window.addEventListener('pointerup', (e) => this.up(e, false), { passive: false });
    window.addEventListener('pointercancel', (e) => this.up(e, true), { passive: false });
    c.addEventListener('contextmenu', (e) => e.preventDefault());
    // iOS: stop double-tap zoom / magnifier / scroll bounce
    document.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
    document.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
    document.addEventListener('gesturestart', (e) => e.preventDefault());
    document.addEventListener('dblclick', (e) => e.preventDefault());
  }

  // target: { name, priority, enabled(), objects() | test(x,y), down(ctx) -> session }
  add(t) {
    t.priority = t.priority ?? 0;
    this.targets.push(t);
    return t;
  }

  rayAt(x, y) {
    const { w, h } = this.engine.size;
    ndc.set((x / w) * 2 - 1, -(y / h) * 2 + 1);
    this.engine.camera.updateMatrixWorld();
    ray.setFromCamera(ndc, this.engine.camera);
    return ray;
  }

  // Screen position of a world point, in CSS pixels.
  project(v) {
    this.engine.camera.updateMatrixWorld();
    tmp.copy(v).project(this.engine.camera);
    const { w, h } = this.engine.size;
    return { x: (tmp.x * 0.5 + 0.5) * w, y: (-tmp.y * 0.5 + 0.5) * h, behind: tmp.z > 1 };
  }

  pick(x, y) {
    const r = this.rayAt(x, y);
    let best = null;
    for (const t of this.targets) {
      if (t.enabled && !t.enabled()) continue;
      if (t.objects) {
        const objs = t.objects();
        if (!objs || !objs.length) continue;
        const hits = r.intersectObjects(objs, true);
        if (hits.length) {
          const h = hits[0];
          const score = h.distance - t.priority * 10;
          if (!best || score < best.score) best = { t, hit: h, score, dist: h.distance };
        }
      }
    }
    if (best) return best;
    // forgiving fallback: nearest target centre within reach on screen
    const reach = Math.max(46, Math.min(this.engine.size.w, this.engine.size.h) * 0.09);
    let near = null;
    for (const t of this.targets) {
      if (t.enabled && !t.enabled()) continue;
      if (!t.near) continue;
      const res = t.near(x, y, reach);
      if (res && (!near || res.d - t.priority * 8 < near.d)) near = { t, hit: res.hit || null, d: res.d - t.priority * 8, score: 1e9 };
    }
    return near;
  }

  down(e) {
    e.preventDefault();
    this.lastInputTime = this.time;
    if (this.onAnyDown) this.onAnyDown(e);
    if (!this.enabled) return;
    const x = e.clientX;
    const y = e.clientY;
    const p = { id: e.pointerId, x, y, x0: x, y0: y, t0: this.time, session: null, moved: 0, vx: 0, vy: 0, lt: this.time };
    this.pointers.set(e.pointerId, p);
    // a beat can claim every touch for itself (e.g. pulling the receipt)
    const ex = this.exclusive ? this.exclusive({ x, y, ray: this.rayAt(x, y), input: this, pointer: p }) : null;
    if (ex) {
      p.session = ex;
      try {
        this.canvas.setPointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
      return;
    }
    const hit = this.pick(x, y);
    if (hit) {
      p.session = hit.t.down({ x, y, hit: hit.hit, ray: this.rayAt(x, y), input: this, pointer: p }) || null;
      p.target = hit.t;
    } else if (this.fallback) {
      p.session = this.fallback({ x, y, ray: this.rayAt(x, y), input: this, pointer: p }) || null;
    }
    try {
      this.canvas.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  }

  move(e) {
    const p = this.pointers.get(e.pointerId);
    if (!p) return;
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    const dt = Math.max(1 / 240, this.time - p.lt);
    p.vx = p.vx * 0.5 + ((x - p.x) / dt) * 0.5;
    p.vy = p.vy * 0.5 + ((y - p.y) / dt) * 0.5;
    p.moved += Math.hypot(x - p.x, y - p.y);
    p.x = x;
    p.y = y;
    p.lt = this.time;
    this.lastInputTime = this.time;
    if (p.session && p.session.move) p.session.move({ x, y, ray: this.rayAt(x, y), input: this, pointer: p });
  }

  up(e, cancelled) {
    const p = this.pointers.get(e.pointerId);
    if (!p) return;
    this.pointers.delete(e.pointerId);
    const dur = this.time - p.t0;
    const isTap = !cancelled && dur < 0.45 && p.moved < 22;
    // velocity decays if the finger stopped before lifting
    const idle = this.time - p.lt;
    const k = Math.max(0, 1 - idle * 8);
    const ctx = { x: p.x, y: p.y, ray: this.rayAt(p.x, p.y), input: this, pointer: p, tap: isTap, vx: p.vx * k, vy: p.vy * k, cancelled };
    if (p.session) {
      if (isTap && p.session.tap) p.session.tap(ctx);
      if (p.session.up) p.session.up(ctx);
    }
  }

  update(dt) {
    this.time += dt;
    for (const p of this.pointers.values()) {
      if (p.session && p.session.hold) p.session.hold(dt, p);
    }
  }

  get idleTime() {
    return this.time - this.lastInputTime;
  }
}

// Intersect a ray with a horizontal plane y = h.
export function rayToPlaneY(r, h, out = new THREE.Vector3()) {
  const o = r.ray.origin;
  const d = r.ray.direction;
  if (Math.abs(d.y) < 1e-4) return null;
  const t = (h - o.y) / d.y;
  if (t < 0) return null;
  return out.copy(d).multiplyScalar(t).add(o);
}

// Intersect a ray with a vertical plane z = c.
export function rayToPlaneZ(r, c, out = new THREE.Vector3()) {
  const o = r.ray.origin;
  const d = r.ray.direction;
  if (Math.abs(d.z) < 1e-4) return null;
  const t = (c - o.z) / d.z;
  if (t < 0) return null;
  return out.copy(d).multiplyScalar(t).add(o);
}
