// 一本指の不正確な操作を受け止める入力系
import * as THREE from '../vendor/three.module.min.js';

const _v = new THREE.Vector3();

export class Input {
  constructor(G, el) {
    this.G = G; this.el = el;
    this.items = [];
    this.active = null;
    this.raycaster = new THREE.Raycaster();
    this.lastInteraction = 0;
    this.onFirstTouch = null;
    this._first = true;
    const opt = { passive: false };
    el.addEventListener('pointerdown', (e) => this.down(e), opt);
    window.addEventListener('pointermove', (e) => this.move(e), opt);
    window.addEventListener('pointerup', (e) => this.up(e, false), opt);
    window.addEventListener('pointercancel', (e) => this.up(e, true), opt);
    el.addEventListener('touchstart', (e) => e.preventDefault(), opt);
    el.addEventListener('touchmove', (e) => e.preventDefault(), opt);
    document.addEventListener('gesturestart', (e) => e.preventDefault(), opt);
    document.addEventListener('dblclick', (e) => e.preventDefault(), opt);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    // 古い iOS は touchend でないと音を開けない
    const unlock = () => this.G.audio && this.G.audio.unlock();
    window.addEventListener('touchend', unlock, { passive: true });
    window.addEventListener('pointerup', unlock, { passive: true });
    window.addEventListener('click', unlock, { passive: true });
  }

  add(item) { this.items.push(item); return item; }
  remove(item) { const i = this.items.indexOf(item); if (i >= 0) this.items.splice(i, 1); }

  makePointer(e) {
    const r = this.el.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const ndc = new THREE.Vector2((x / r.width) * 2 - 1, -(y / r.height) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.G.camera);
    return { id: e.pointerId, x, y, ndc, ray: this.raycaster.ray.clone(), t: performance.now() / 1000 };
  }

  // ワールド座標を画面 px に
  project(p) {
    _v.copy(p).project(this.G.camera);
    return { x: (_v.x * 0.5 + 0.5) * this.G.viewW, y: (-_v.y * 0.5 + 0.5) * this.G.viewH, behind: _v.z > 1 };
  }
  screenDist(p, ptr) {
    const s = this.project(p);
    if (s.behind) return 1e9;
    return Math.hypot(s.x - ptr.x, s.y - ptr.y);
  }
  // 指の大きさを考えた許容半径 (px)
  get fingerR() { return Math.max(44, Math.min(this.G.viewW, this.G.viewH) * 0.09); }

  down(e) {
    e.preventDefault();
    if (this._first) { this._first = false; this.onFirstTouch && this.onFirstTouch(); }
    this.G.audio && this.G.audio.unlock();
    const p = this.makePointer(e);
    this.lastInteraction = this.G.time;
    if (this.active) {
      // 二本目以降の指はその場の小さな反応だけ
      this.G.director && this.G.director.ambientTap(p, true);
      return;
    }
    let best = null, bestScore = Infinity;
    for (const it of this.items) {
      if (it.enabled && !it.enabled()) continue;
      const s = it.pick(p);
      if (s !== null && s !== undefined && s < bestScore) { bestScore = s; best = it; }
    }
    this.active = { id: p.id, start: p, last: p, item: best, moved: 0, maxMove: 0, look: !best };
    try { this.el.setPointerCapture && this.el.setPointerCapture(e.pointerId); } catch (_) { /* noop */ }
    if (best && best.down) best.down(p);
  }

  move(e) {
    const a = this.active;
    if (!a || e.pointerId !== a.id) return;
    e.preventDefault();
    const p = this.makePointer(e);
    p.dx = p.x - a.last.x; p.dy = p.y - a.last.y;
    p.sx = a.start.x; p.sy = a.start.y;
    a.moved = Math.hypot(p.x - a.start.x, p.y - a.start.y);
    a.maxMove = Math.max(a.maxMove, a.moved);
    a.last = p;
    this.lastInteraction = this.G.time;
    if (a.item) { a.item.move && a.item.move(p); }
    else if (a.maxMove > 12) {
      this.G.rig.look.held = true;
      this.G.rig.dragLook(p.dx, p.dy);
      this.G.director && this.G.director.ambientDrag && this.G.director.ambientDrag(p);
    }
  }

  up(e, cancel) {
    const a = this.active;
    if (!a || e.pointerId !== a.id) return;
    const p = this.makePointer(e);
    const dur = p.t - a.start.t;
    const tap = !cancel && a.maxMove < 16 && dur < 0.6;
    this.active = null;
    this.G.rig.look.held = false;
    if (a.item) { a.item.up && a.item.up(p, { tap, dur, moved: a.maxMove }); }
    else if (tap) { this.G.director && this.G.director.ambientTap(p, false); }
  }
}
