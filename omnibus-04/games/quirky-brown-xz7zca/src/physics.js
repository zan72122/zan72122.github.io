import { G, SIM, BALLOON, QUILT, WATER, AIR, TUB, LOG, FINGER } from './config.js';
import { clamp, pointInPoly } from './util.js';

// ---------------------------------------------------------------------------
// Rigid body (the toy house). Position is the centre of mass.
// ---------------------------------------------------------------------------
export class Body {
  constructor(mass, inertia, x, y, a = 0) {
    this.m = mass;
    this.I = inertia;
    this.invM = 1 / mass;
    this.invI = 1 / inertia;
    this.x = x; this.y = y; this.a = a;
    this.vx = 0; this.vy = 0; this.w = 0;
    this.px = x; this.py = y; this.pa = a;
    this.fx = 0; this.fy = 0; this.tq = 0;
    this.c = Math.cos(a); this.s = Math.sin(a);
  }
  sync() { this.c = Math.cos(this.a); this.s = Math.sin(this.a); }
  wx(lx, ly) { return this.x + this.c * lx - this.s * ly; }
  wy(lx, ly) { return this.y + this.s * lx + this.c * ly; }
  toLocal(wx, wy) {
    const dx = wx - this.x, dy = wy - this.y;
    return [this.c * dx + this.s * dy, -this.s * dx + this.c * dy];
  }
  force(fx, fy, px, py) {
    this.fx += fx; this.fy += fy;
    this.tq += (px - this.x) * fy - (py - this.y) * fx;
  }
}

// ---------------------------------------------------------------------------
// Balloon: a light particle with buoyancy, drag and a string (inequality
// distance constraint, XPBD) tied to a house (wrap point on the roof line) or
// to a fixed point.
// ---------------------------------------------------------------------------
let balloonSerial = 0;
export class Balloon {
  constructor(x, y, color, L) {
    this.id = ++balloonSerial;
    this.x = x; this.y = y; this.px = x; this.py = y;
    this.vx = 0; this.vy = 0;
    this.fx = 0; this.fy = 0;
    this.m = BALLOON.mass;
    this.rFull = BALLOON.radius * (0.92 + Math.random() * 0.16);
    this.r = 2;
    this.color = color;
    this.L = L;              // free string length (from the wrap point)
    this.age = 0;
    this.inflating = true;
    this.inflateRate = 1;
    this.anchor = null;      // { ent, lx, ly, bx, by } | { x, y } (fixed) | null (free)
    this.taut = false;
    this.tension = 0;        // smoothed tension / (lift*G)
    this.tAcc = 0;
    this.snap = 0;           // 1 on snapping taut, decays (string twang)
    this.grab = null;        // { x, y } finger target while held
    this.axis = 0;           // drawn axis angle (lags the string on a spring)
    this.axisV = 0;
    this.boing = 0;
    this.dead = false;
  }
}

// ---------------------------------------------------------------------------
// What a house stands on: the quilt, a quilt over a felt roll, or a washtub.
// ---------------------------------------------------------------------------
export class Ground {
  constructor(kind, cx) {
    this.kind = kind;
    this.cx = cx;
    if (kind === 'tub') {
      this.x0 = cx - TUB.halfW;
      this.x1 = cx + TUB.halfW;
    }
  }
  heightAt(x) {
    if (this.kind === 'log') {
      const dx = x - this.cx;
      if (dx > -LOG.r && dx < LOG.r) return LOG.y + Math.sqrt(LOG.r * LOG.r - dx * dx);
      return 0;
    }
    // inside the tub: its floor (the padded inner walls are handled separately)
    if (this.kind === 'tub' && x > this.x0 && x < this.x1) return TUB.floor;
    return 0;
  }
  // Wood is hard, cloth is soft: the same contact law, a much stiffer spring.
  stiffAt(x) {
    if (this.kind === 'log' && Math.abs(x - this.cx) < LOG.r) return LOG.stiff;
    return 1;
  }
  waterAt(x, t) {
    if (this.kind !== 'tub' || x <= this.x0 || x >= this.x1) return -Infinity;
    return TUB.level + Math.sin(x * 0.021 - t * 1.7) * WATER.waveAmp + Math.sin(x * 0.047 + t * 2.3) * WATER.waveAmp * 0.45;
  }
}

// ---------------------------------------------------------------------------
// Simulation: houses (entities), their balloons, free balloons.
// ---------------------------------------------------------------------------
const tmpW = { x: 0, y: 0 };
const tmpC = { x: 0, y: 0, nx: 0, ny: 0, d: 0 };

// Closest point on a polygon boundary (no allocation), result in tmpC.
function closestOnPolyInto(px, py, pts, out) {
  let best = Infinity;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const ax = pts[j][0], ay = pts[j][1], bx = pts[i][0], by = pts[i][1];
    const dx = bx - ax, dy = by - ay;
    const L2 = dx * dx + dy * dy || 1;
    let t = ((px - ax) * dx + (py - ay) * dy) / L2;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    const cx = ax + dx * t, cy = ay + dy * t;
    const d = Math.hypot(px - cx, py - cy);
    if (d < best) {
      best = d; out.x = cx; out.y = cy;
      // outward normal of a CCW polygon edge
      const L = Math.sqrt(L2);
      out.nx = dy / L; out.ny = -dx / L;
    }
  }
  out.d = best;
  return out;
}

export class Sim {
  constructor(wind) {
    this.wind = wind;
    this.entities = [];
    this.free = [];      // balloons not tied to a house (tied to a post, or loose)
    this.t = 0;
    this.acc = 0;
    this.events = [];
  }

  emit(e) { this.events.push(e); }

  // Fixed substeps; returns the simulated time.
  step(dt) {
    this.acc += Math.min(dt, 0.1);
    const h = SIM.h;
    let n = Math.floor(this.acc / h);
    if (n > SIM.maxSub) n = SIM.maxSub;
    this.acc -= n * h;
    if (this.acc > h * 4) this.acc = h * 4;
    if (n === 0) return 0;
    for (const e of this.entities) e.beginFrame(n);
    for (const b of this.allBalloons()) b.tAcc = 0;
    for (let s = 0; s < n; s++) this.substep(h);
    const sdt = n * h;
    for (const e of this.entities) e.endFrame(sdt, this);
    for (const b of this.allBalloons()) {
      const T = b.tAcc / n / (BALLOON.lift * G);
      b.tension += (T - b.tension) * (1 - Math.exp(-sdt * 14));
      b.snap *= Math.exp(-sdt * 5);
      b.boing *= Math.exp(-sdt * 4);
      b.age += sdt;
      // the drawn axis follows the string on a ~3 Hz spring
      let target = 0;
      const a = this.anchorPos(b);
      if (a && !b.inflating) target = Math.atan2(b.x - a[0], b.y - a[1]);
      // (integrated in short steps: a long frame must never make it diverge)
      const w = 2 * Math.PI * 3;
      const k = Math.ceil(sdt / (1 / 240));
      const dh = sdt / k;
      for (let j = 0; j < k; j++) {
        b.axisV += (w * w * (target - b.axis) - 2 * 0.5 * w * b.axisV) * dh;
        b.axis += b.axisV * dh;
      }
    }
    return sdt;
  }

  *allBalloons() {
    for (const e of this.entities) yield* e.balloons;
    yield* this.free;
  }

  substep(h) {
    this.t += h;
    const wind = this.wind;
    const t = this.t;

    // ---- forces & integration: houses
    for (const e of this.entities) {
      const b = e.body;
      if (e.frozen) continue;
      b.sync();
      b.fx = 0; b.fy = -b.m * G; b.tq = 0;
      wind.at(b.x, b.y, tmpW);
      const ch = AIR.houseLin * e.bp.bounds.h / 100;
      b.fx += ch * (tmpW.x - b.vx);
      b.fy += ch * (tmpW.y * 0.3 - b.vy);
      b.tq -= AIR.houseRot * b.I * b.w;
      // moving loads inside (a dog trotting to the low end)
      for (const L of e.loads) b.force(0, -L.m * G, b.wx(L.lx, L.ly), b.wy(L.lx, L.ly));
      // fingers press into what they touch
      for (const p of e.pokes) {
        if (p.t <= 0) continue;
        p.t -= h;
        b.force(p.fx, p.fy, b.wx(p.lx, p.ly), b.wy(p.lx, p.ly));
      }
      // a balloon still filling pulls through its knot
      for (const bl of e.balloons) {
        if (!bl.inflating) continue;
        const vol = Math.pow(bl.r / bl.rFull, 3);
        const ax = b.wx(bl.anchor.lx, bl.anchor.ly), ay = b.wy(bl.anchor.lx, bl.anchor.ly);
        b.force(0, BALLOON.lift * G * vol, ax, ay);
      }
      this.contactForces(e);
      if (e.ground.kind === 'tub') this.tubForces(e, t);
      b.px = b.x; b.py = b.y; b.pa = b.a;
      b.vx += b.fx * b.invM * h;
      b.vy += b.fy * b.invM * h;
      b.w += b.tq * b.invI * h;
      b.x += b.vx * h; b.y += b.vy * h; b.a += b.w * h;
      b.sync();
    }

    // ---- forces & integration: balloons
    for (const bl of this.allBalloons()) {
      if (bl.inflating) {
        // held at the knot while it fills
        const a = bl.anchor;
        bl.px = bl.x; bl.py = bl.y;
        if (a && a.ent) {
          // it fills just above the roof line, clear of chimneys and eaves
          const b = a.ent.body;
          const up = Math.max(bl.r + 5, (a.clear || 0) + bl.r * 0.95);
          bl.x = b.wx(a.lx, a.ly);
          bl.y = b.wy(a.lx, a.ly) + up;
        }
        continue;
      }
      const vol = Math.pow(bl.r / bl.rFull, 3);
      bl.fx = 0;
      bl.fy = (BALLOON.lift + bl.m) * G * vol - bl.m * G;
      wind.at(bl.x, bl.y, tmpW);
      const rx = bl.vx - tmpW.x, ry = bl.vy - tmpW.y;
      const sp = Math.hypot(rx, ry);
      const area = (bl.r / bl.rFull) ** 2;
      const c = (BALLOON.c1 + BALLOON.c2 * sp) * area;
      bl.fx -= c * rx;
      bl.fy -= c * ry;
      if (bl.grab) {
        // a finger holds it through a soft spring, never stronger than one balloon
        const w = 10;
        let gx = bl.m * (w * w * (bl.grab.x - bl.x) - 2 * 0.8 * w * bl.vx);
        let gy = bl.m * (w * w * (bl.grab.y - bl.y) - 2 * 0.8 * w * bl.vy);
        const gm = Math.hypot(gx, gy), cap = BALLOON.grabMax * G;
        if (gm > cap) { gx *= cap / gm; gy *= cap / gm; }
        bl.fx += gx; bl.fy += gy;
      }
      bl.px = bl.x; bl.py = bl.y;
      bl.vx += (bl.fx / bl.m) * h;
      bl.vy += (bl.fy / bl.m) * h;
      bl.x += bl.vx * h;
      bl.y += bl.vy * h;
    }

    // ---- constraints
    for (const e of this.entities) {
      for (const bl of e.balloons) {
        if (bl.inflating) continue;
        this.solveString(bl, h);
        this.pushOutOfHouse(bl, e);
      }
      this.separate(e.balloons);
    }
    for (const bl of this.free) if (!bl.inflating && bl.anchor) this.solveString(bl, h);
    this.separate(this.free);

    // ---- velocities from positions
    for (const e of this.entities) {
      const b = e.body;
      if (e.frozen) continue;
      b.vx = (b.x - b.px) / h;
      b.vy = (b.y - b.py) / h;
      b.w = (b.a - b.pa) / h;
      b.sync();
    }
    for (const bl of this.allBalloons()) {
      if (bl.inflating) {
        const a = bl.anchor;
        const b = a && a.ent ? a.ent.body : null;
        bl.vx = b ? b.vx : 0;
        bl.vy = b ? b.vy : 0;
        continue;
      }
      bl.vx = (bl.x - bl.px) / h;
      bl.vy = (bl.y - bl.py) / h;
      if (bl.y < bl.r) { bl.y = bl.r; if (bl.vy < 0) bl.vy *= -0.3; }
    }
  }

  anchorPos(bl) {
    const a = bl.anchor;
    if (!a) return null;
    if (a.ent) {
      const b = a.ent.body;
      return [b.wx(a.lx, a.ly), b.wy(a.lx, a.ly)];
    }
    return [a.x, a.y];
  }

  // Soft quilt contact at every hull sample, with fibre adhesion that peels.
  contactForces(e) {
    const b = e.body;
    const g = e.ground;
    const pts = e.bp.contacts;
    const k = QUILT.k, beta = QUILT.beta, mu = QUILT.mu, ex = QUILT.exp;
    const range = QUILT.stickRange;
    for (let i = 0; i < pts.length; i++) {
      const cp = pts[i];
      const px = b.wx(cp.x, cp.y), py = b.wy(cp.x, cp.y);
      const gh = g.heightAt(px);
      const d = gh - py;
      if (d <= 0) {
        e.anchor[i] = NaN;
        // the cloth clings a little, then lets go point by point
        if (e.stuck[i] && g.kind !== 'tub') {
          if (-d < range) {
            const F = -QUILT.stick * cp.w * Math.min(1, -d / 1.2);
            b.force(0, F, px, py);
            e.cA[i] = d;
            e.cX[i] = px;
            continue;
          }
          e.stuck[i] = 0;
          e.peeled++;
        }
        continue;
      }
      const rx = px - b.x, ry = py - b.y;
      const vx = b.vx - b.w * ry, vy = b.vy + b.w * rx;
      const hard = g.stiffAt(px);
      let F = k * hard * cp.w * Math.pow(d, ex) * (1 - beta * vy);
      if (F < 0) F = 0;
      // stick-slip friction: the cloth holds the base on a stiff little spring
      // until the sideways pull exceeds mu*N, then it slides (no endless creep)
      if (e.anchor[i] !== e.anchor[i]) e.anchor[i] = px;
      let ft = -QUILT.stickK * cp.w * (px - e.anchor[i]) - QUILT.stickC * cp.w * vx;
      const cap = mu * F;
      if (ft > cap || ft < -cap) {
        ft = ft > 0 ? cap : -cap;
        e.anchor[i] = px + ft / (QUILT.stickK * cp.w);
        e.slipping++;
      }
      b.force(ft, F, px, py);
      e.cF[i] += F;
      e.touch++;
      if (hard === 1) {
        if (d > e.cD[i]) e.cD[i] = d;
        e.cX[i] = px;
        if (d > 0.3) e.stuck[i] = 1;
      } else if (d > 0.5 && !e.onLog) e.onLog = 1;
    }
  }

  // Buoyancy of the hull, column by column, and the tub's padded walls.
  tubForces(e, t) {
    const b = e.body;
    const g = e.ground;
    let sub = 0;
    for (const col of e.bp.columns) {
      const px = b.wx(col.x, col.y), py = b.wy(col.x, col.y);
      const wl = g.waterAt(px, t);
      if (wl === -Infinity) continue;
      const hmax = col.top - col.y;
      const s = clamp(wl - py, 0, hmax);
      if (s <= 0) continue;
      const area = s * col.w;
      const cx = px - b.s * (s * 0.5), cy = py + b.c * (s * 0.5);
      const rx = cx - b.x, ry = cy - b.y;
      const vx = b.vx - b.w * ry, vy = b.vy + b.w * rx;
      const F = WATER.rho * G * area - WATER.dragV * area * vy;
      b.force(-WATER.dragH * area * vx, F, cx, cy);
      sub += area;
    }
    e.submerged = sub;
    // inner walls (only while the hull is below the rim and inside the tub)
    if (Math.abs(b.x - g.cx) < TUB.halfW) {
      const pts = e.bp.contacts;
      for (let i = 0; i < pts.length; i++) {
        const cp = pts[i];
        const px = b.wx(cp.x, cp.y), py = b.wy(cp.x, cp.y);
        if (py > TUB.rim) continue;
        let pen = 0, dir = 0;
        if (px < g.x0 + 4) { pen = g.x0 + 4 - px; dir = 1; }
        else if (px > g.x1 - 4) { pen = px - (g.x1 - 4); dir = -1; }
        if (!pen) continue;
        const rx = px - b.x, ry = py - b.y;
        const vx = b.vx - b.w * ry;
        const F = Math.max(0, TUB.wallK * cp.w * pen - 6 * cp.w * vx * dir) * dir;
        b.force(F, 0, px, py);
        if (pen > 2 && Math.abs(vx) > 25) e.bump = Math.max(e.bump, Math.abs(vx));
      }
    }
  }

  // Inequality distance constraint balloon <-> wrap point (XPBD, one iteration/substep).
  solveString(bl, h) {
    const a = bl.anchor;
    let ax, ay, body = null;
    if (a.ent) {
      const bb = a.ent.body;
      if (!a.ent.frozen) body = bb;
      ax = bb.wx(a.lx, a.ly); ay = bb.wy(a.lx, a.ly);
    } else { ax = a.x; ay = a.y; }
    const dx = bl.x - ax, dy = bl.y - ay;
    const dist = Math.hypot(dx, dy);
    const C = dist - bl.L;
    if (C <= 0) {
      if (C < -6) bl.taut = false;
      return;
    }
    const nx = dx / dist, ny = dy / dist;
    const wB = 1 / bl.m;
    let wH = 0, rxn = 0;
    if (body) {
      const rx = ax - body.x, ry = ay - body.y;
      rxn = rx * ny - ry * nx;
      wH = body.invM + body.invI * rxn * rxn;
    }
    const alpha = BALLOON.compliance / (h * h);
    const dl = -C / (wB + wH + alpha);
    bl.x += wB * dl * nx;
    bl.y += wB * dl * ny;
    if (body) {
      body.x -= body.invM * dl * nx;
      body.y -= body.invM * dl * ny;
      body.a -= body.invI * dl * rxn;
      body.sync();
    }
    bl.tAcc += -dl / (h * h);
    if (!bl.taut) {
      bl.taut = true;
      const vrel = bl.vx * nx + bl.vy * ny;
      bl.snap = 1;
      this.emit({ type: 'taut', balloon: bl, ent: a.ent || null, speed: vrel, x: ax, y: ay });
    }
  }

  // Rubber against wood: a balloon slides up and around the eaves instead of
  // passing through its own house.
  pushOutOfHouse(bl, e) {
    const b = e.body;
    const dx = bl.x - b.x, dy = bl.y - b.y;
    const lx = b.c * dx + b.s * dy, ly = -b.s * dx + b.c * dy;
    const bp = e.bp;
    const R = bl.r * 0.7;
    if (lx < bp.bounds.x0 - bp.com[0] - R || lx > bp.bounds.x1 - bp.com[0] + R) return;
    if (ly < -bp.com[1] - R || ly > bp.bounds.h - bp.com[1] + R) return;
    const inside = pointInPoly(lx, ly, bp.local);
    const c = closestOnPolyInto(lx, ly, bp.local, tmpC);
    let pen;
    let nx = c.nx, ny = c.ny;
    if (inside) pen = c.d + R;
    else if (c.d < R) {
      pen = R - c.d;
      nx = (lx - c.x) / (c.d || 1); ny = (ly - c.y) / (c.d || 1);
    } else return;
    // world normal
    const wnx = b.c * nx - b.s * ny, wny = b.s * nx + b.c * ny;
    const px = b.x + b.c * c.x - b.s * c.y, py = b.y + b.s * c.x + b.c * c.y;
    const rx = px - b.x, ry = py - b.y;
    const rxn = rx * wny - ry * wnx;
    const wB = 1 / bl.m;
    const wH = e.frozen ? 0 : b.invM + b.invI * rxn * rxn;
    // soft: the rubber squeaks out over a few frames instead of being shot out
    const dl = Math.min(pen * 0.5, 0.06) / (wB + wH);
    bl.x += wB * dl * wnx;
    bl.y += wB * dl * wny;
    if (wH) {
      b.x -= b.invM * dl * wnx;
      b.y -= b.invM * dl * wny;
      b.a -= b.invI * dl * rxn;
      b.sync();
    }
    bl.rub = 1;
  }

  // Balloons squeeze past each other (soft).
  separate(list) {
    const n = list.length;
    for (let i = 0; i < n; i++) {
      const a = list[i];
      if (a.inflating) continue;
      for (let j = i + 1; j < n; j++) {
        const c = list[j];
        if (c.inflating) continue;
        const dx = c.x - a.x, dy = c.y - a.y;
        const min = (a.r + c.r) * 0.9;
        const d2 = dx * dx + dy * dy;
        if (d2 >= min * min || d2 < 1e-6) continue;
        const d = Math.sqrt(d2);
        // soft: overlapping rubber squeezes apart gently (a hard push would
        // turn into a violent velocity, since velocity comes from position)
        const push = Math.min((min - d) * 0.25, 0.05);
        const nx = dx / d, ny = dy / d;
        a.x -= nx * push; a.y -= ny * push;
        c.x += nx * push; c.y += ny * push;
      }
    }
  }
}

export { FINGER };
