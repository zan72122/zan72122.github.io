// The gameplay cross-section (plane z = 0). Axis-aligned solids, handholds,
// bouncy floors and water. Gravity is +x, so every solid's west face is a floor.

export class World2D {
  constructor() {
    this.solids = [];      // {x0,y0,x1,y1, on:true, id, kind}
    this.holds = [];       // {id, kind, ax,ay,bx,by, side:+1/-1, obj}
    this.bouncy = [];      // {x, y0, y1, k, id}
    this.water = [];       // {x0,x1,y0,y1}
    this.openings = new Map(); // id -> solid
  }
  solid(x0, y0, x1, y1, kind = 'wall', id = null) {
    const s = { x0: Math.min(x0, x1), y0: Math.min(y0, y1), x1: Math.max(x0, x1), y1: Math.max(y0, y1), on: true, kind, id };
    this.solids.push(s);
    if (id) this.openings.set(id, s);
    return s;
  }
  hold(kind, ax, ay, bx = ax, by = ay, extra = {}) {
    const h = { kind, ax, ay, bx, by, ...extra };
    this.holds.push(h);
    return h;
  }
  setOpen(id, open) { const s = this.openings.get(id); if (s) s.on = !open; }

  // first west face hit when the span [ya,yb] moves from x=xa to x=xb (xb > xa)
  castEast(xa, xb, ya, yb) {
    let best = null;
    for (const s of this.solids) {
      if (!s.on || s.y1 <= ya || s.y0 >= yb) continue;
      if (s.x0 >= xa - 1e-6 && s.x0 <= xb) { if (!best || s.x0 < best.x0) best = s; }
    }
    return best;
  }
  // first east face hit moving west (xb < xa)
  castWest(xa, xb, ya, yb) {
    let best = null;
    for (const s of this.solids) {
      if (!s.on || s.y1 <= ya || s.y0 >= yb) continue;
      if (s.x1 <= xa + 1e-6 && s.x1 >= xb) { if (!best || s.x1 > best.x1) best = s; }
    }
    return best;
  }
  // vertical moves of a horizontal body spanning [xa,xb]
  castUp(ya, yb, xa, xb) {
    let best = null;
    for (const s of this.solids) {
      if (!s.on || s.x1 <= xa || s.x0 >= xb) continue;
      if (s.y0 >= ya - 1e-6 && s.y0 <= yb) { if (!best || s.y0 < best.y0) best = s; }
    }
    return best;
  }
  castDown(ya, yb, xa, xb) {
    let best = null;
    for (const s of this.solids) {
      if (!s.on || s.x1 <= xa || s.x0 >= xb) continue;
      if (s.y1 <= ya + 1e-6 && s.y1 >= yb) { if (!best || s.y1 > best.y1) best = s; }
    }
    return best;
  }
  // is there a floor (west face at x) supporting a body of half width hw at height y?
  // Small gaps (< bridge) are ignored so the courier can run over them.
  floorAt(x, y, hw = 0.12, eps = 0.03) {
    for (const s of this.solids) {
      if (!s.on) continue;
      if (Math.abs(s.x0 - x) < eps && s.y0 < y + hw && s.y1 > y - hw) return s;
    }
    return null;
  }
  // continuous stretch of floor at face x that contains y (merges touching solids)
  floorSpan(x, y, eps = 0.03) {
    const faces = this.solids.filter(s => s.on && Math.abs(s.x0 - x) < eps).map(s => [s.y0, s.y1]).sort((a, b) => a[0] - b[0]);
    let cur = null; const spans = [];
    for (const [a, b] of faces) {
      if (cur && a <= cur[1] + 0.02) cur[1] = Math.max(cur[1], b);
      else { cur = [a, b]; spans.push(cur); }
    }
    for (const sp of spans) if (y >= sp[0] - 0.05 && y <= sp[1] + 0.05) return { y0: sp[0], y1: sp[1], spans };
    return { y0: y, y1: y, spans };
  }
  inside(x, y) {
    for (const s of this.solids) if (s.on && x > s.x0 && x < s.x1 && y > s.y0 && y < s.y1) return s;
    return null;
  }
  bouncyAt(x, y) {
    for (const b of this.bouncy) if (Math.abs(b.x - x) < 0.05 && y >= b.y0 - 0.1 && y <= b.y1 + 0.1) return b;
    return null;
  }
  waterAt(x, y) {
    for (const w of this.water) if (x >= w.x0 && x <= w.x1 && y >= w.y0 && y <= w.y1) return w;
    return null;
  }
  // nearest handhold point to (x,y) within r
  nearestHold(x, y, r) {
    let best = null, bd = r;
    for (const h of this.holds) {
      if (h.disabled) continue;
      const p = closestOnSeg(h, x, y);
      const d = Math.hypot(p.x - x, p.y - y);
      if (d < bd) { bd = d; best = { hold: h, x: p.x, y: p.y, t: p.t, d }; }
    }
    return best;
  }
}

export function closestOnSeg(h, x, y) {
  const dx = h.bx - h.ax, dy = h.by - h.ay;
  const L2 = dx * dx + dy * dy;
  let t = L2 > 1e-9 ? ((x - h.ax) * dx + (y - h.ay) * dy) / L2 : 0;
  t = Math.max(0, Math.min(1, t));
  return { x: h.ax + dx * t, y: h.ay + dy * t, t };
}
