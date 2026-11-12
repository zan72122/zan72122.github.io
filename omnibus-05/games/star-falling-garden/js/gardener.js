'use strict';
/* ============================================================
   gardener.js — the little gardener: movement, actions, drawing
   Local drawing space: origin at the support point, +x = facing, y up.
   ============================================================ */

function ik2(sx, sy, tx, ty, l1, l2, bendDown = 1) {
  let dx = tx - sx, dy = ty - sy;
  let d = Math.hypot(dx, dy);
  const maxd = l1 + l2 - 1e-3;
  if (d > maxd) { dx *= maxd / d; dy *= maxd / d; d = maxd; }
  if (d < 0.02) d = 0.02;
  const base = Math.atan2(dy, dx);
  const c = clamp((l1 * l1 + d * d - l2 * l2) / (2 * l1 * d), -1, 1);
  const off = Math.acos(c);
  const a1 = base + off, a2 = base - off;
  const e1 = { x: sx + Math.cos(a1) * l1, y: sy + Math.sin(a1) * l1 };
  const e2 = { x: sx + Math.cos(a2) * l1, y: sy + Math.sin(a2) * l1 };
  const score = e => e.y * bendDown + e.x * 0.35;
  const e = score(e1) < score(e2) ? e1 : e2;
  return { ex: e.x, ey: e.y, hx: sx + dx, hy: sy + dy };
}

class Gardener {
  constructor() { this.reset(); }

  reset() {
    this.mode = 'sleep';
    this.seat = { x: BENCH.x, y: terrainRaw(BENCH.x) + BENCH.seat };
    this.x = this.seat.x; this.y = this.seat.y;
    this.link = 0; this.t = BENCH.x + 0.55;
    this.goal = null; this.hop = null; this.air = null;
    this.dir = 1; this.dirS = new Spring(1, 90, 14);
    this.faceS = new Spring(0.7, 40, 10);
    this.walkPh = 0; this.speed = 0; this.vx = 0; this.lastX = this.x;
    this.carry = null; this.carryPose = 'front';
    this.act = null; this.actInt = true; this.queue = null; this.busy = false;
    this.overlay = null;
    const S = (v, k = 140, c = 18) => new Spring(v, k, c);
    this.p = {
      crouch: S(0), lean: S(0, 90, 14), tilt: S(0, 80, 12), sit: S(1, 60, 12), sleep: S(1, 40, 10),
      mouth: S(0), happy: S(0, 60, 12),
      hfx: S(0.12, 200, 20), hfy: S(0.3, 200, 20), hbx: S(-0.1, 200, 20), hby: S(0.3, 200, 20),
      hop: S(0, 200, 16),
    };
    this.pt = {};
    this.look = { x: this.x + 3, y: this.y + 3 }; this.lookAt = null; this.lookCam = 0;
    this.blinkT = 2; this.blink = 0;
    this.squash = new Spring(1, 320, 16);
    this.hat = new Spring(0, 110, 7);
    this.scarf = new Spring(0, 30, 3);
    this.stepAcc = 0;
    this.onPlant = null; this.onLeaf = null;
    this.armed = null;
    this.zzT = 0;
    this.W = 1;
    this.ride = null;
    this.hidden = false;
  }

  /* ---------- commands ---------- */
  command(gen, interruptible = true) {
    if (!this.act || (this.actInt && !this.busy)) {
      this.act = gen; this.actInt = interruptible; this.queue = null;
    } else this.queue = { gen, interruptible };
  }
  get idle() { return !this.act && !this.goal && !this.hop && this.mode === 'route'; }

  /* ---------- route movement ---------- */
  *aWalkTo(x) {
    const g = Route.locate(x, this.link);
    this.goal = g;
    while (this.goal === g) yield;
  }
  *aGoal(goal) {
    this.goal = goal;
    while (this.goal === goal) yield;
  }

  moveRoute(dt) {
    if (this.mode !== 'route') return;
    if (this.hop) {
      this.hop.u += dt / this.hop.dur;
      if (this.hop.u >= 1) this.finishHop();
      return;
    }
    const g = this.goal;
    if (!g) { this.speed = damp(this.speed, 0, 10, dt); return; }
    if (g.link === this.link && Math.abs(g.t - this.t) < 1e-3) { this.goal = null; return; }
    const forward = g.link > this.link || (g.link === this.link && g.t > this.t);
    const L = Route.links[this.link];
    if (L.kind !== 'steps') {
      const target = g.link === this.link ? g.t : (forward ? L.x1 : L.x0);
      const sp = (this.carry ? 2.3 : 2.6) * (this.goalSlow || 1);
      const d = target - this.t;
      const mv = Math.sign(d) * Math.min(Math.abs(d), sp * dt);
      this.t += mv;
      if (Math.abs(d) > 1e-4) this.dir = Math.sign(d);
      if (Math.abs(target - this.t) < 1e-4 && g.link !== this.link) {
        const nl = this.link + (forward ? 1 : -1);
        if (Route.enabled(nl)) this.enterLink(nl, forward);
        else this.goal = null;
      }
    } else {
      const n = Route.stepCount(this.link);
      const target = g.link === this.link ? g.t : (forward ? n - 1 : 0);
      if (Math.round(this.t) === target) {
        if (g.link === this.link) { this.goal = null; return; }
        const nl = this.link + (forward ? 1 : -1);
        if (Route.enabled(nl)) this.enterLink(nl, forward); else this.goal = null;
      } else {
        const next = Math.round(this.t) + (target > this.t ? 1 : -1);
        if (!Route.stepReady(this.link, next)) { this.goal = null; return; }
        this.startHop(Math.round(this.t), next);
      }
    }
  }

  enterLink(nl, forward) {
    const L = Route.links[nl];
    this.link = nl;
    if (L.kind === 'steps') this.t = forward ? 0 : Route.stepCount(nl) - 1;
    else this.t = forward ? L.x0 : L.x1;
  }

  startHop(from, to) {
    const L = Route.links[this.link];
    const climb = L.climb;
    const A = Route.stepPoint(this.link, from), B = Route.stepPoint(this.link, to);
    this.hop = { from, to, u: 0, dur: climb ? 0.54 : 0.42, climb, A: { x: A.x, y: A.y }, B, up: to > from };
    // take-off pushes the leaf down
    const la = Route.stepLeaf(this.link, from);
    if (la) { la.leaf.av -= 1.2 * Math.cos(la.plant.leafAngle(la.leaf)); la.plant.impulse(la.plant.leafS(la.leaf), 0, -2, this.x); }
    if (climb) {
      const stemX = Route.stemX(this.link, (A.y + B.y) / 2);
      this.dir = Math.sign(stemX - A.x) || this.dir;
      Sound.climb(Math.round(to), Cam.panOf(this.x));
    } else {
      this.dir = Math.sign(B.x - A.x) || this.dir;
      Sound.jump(Cam.panOf(this.x));
    }
  }

  finishHop() {
    const h = this.hop;
    this.t = h.to; this.hop = null;
    this.squash.kick(-2.2);
    const la = Route.stepLeaf(this.link, h.to);
    if (la) {
      la.leaf.av -= 2.2 * Math.cos(la.plant.leafAngle(la.leaf));
      la.plant.impulse(la.plant.leafS(la.leaf), 0, -3, this.x);
      Sound.plantStep(Cam.panOf(this.x));
      FX.sparks(this.x, this.y + 0.05, 3, 0.8, { col: 'plant' });
    } else Sound.step(Cam.panOf(this.x));
    if (h.climb && !h.up) {} // nothing
    if (Route.links[this.link].climb) {
      const p = Route.stepPoint(this.link, h.to);
      const stemX = Route.stemX(this.link, p.y);
      this.dir = Math.sign(stemX - p.x) || this.dir;
    }
  }

  hopPos() {
    const h = this.hop;
    const B = Route.stepPoint(this.link, h.to);
    const u = h.climb ? Ease.inOut(h.u) : h.u;
    if (h.climb) {
      const stemX = Route.stemX(this.link, (h.A.y + B.y) / 2);
      const cx = lerp(h.A.x, B.x, 0.5) * 0.35 + stemX * 0.65, cy = Math.max(h.A.y, B.y) + 0.15;
      const x = (1 - u) * (1 - u) * h.A.x + 2 * (1 - u) * u * cx + u * u * B.x;
      const y = (1 - u) * (1 - u) * h.A.y + 2 * (1 - u) * u * cy + u * u * B.y;
      return { x, y };
    }
    const peak = Math.max(h.A.y, B.y) + 0.38;
    const x = lerp(h.A.x, B.x, u);
    // parabola through A, peak, B
    const y0 = h.A.y, y1 = B.y;
    const y = lerp(y0, y1, u) + (peak - lerp(y0, y1, 0.5)) * 4 * u * (1 - u);
    return { x, y };
  }

  /* ---------- per-frame ---------- */
  update(dt) {
    // run current action
    if (this.act) {
      const r = this.act.next(dt);
      if (r.done) {
        this.act = null;
        if (this.queue) { this.act = this.queue.gen; this.actInt = this.queue.interruptible; this.queue = null; }
      }
    } else if (this.queue) { this.act = this.queue.gen; this.actInt = this.queue.interruptible; this.queue = null; }

    this.moveRoute(dt);
    this.updatePos(dt);
    this.applyLoads(dt);
    this.animate(dt);
  }

  updatePos(dt) {
    const px = this.x;
    this.onPlant = null; this.onLeaf = null;
    if (this.mode === 'route') {
      if (this.hop) { const p = this.hopPos(); this.x = p.x; this.y = p.y; }
      else {
        const p = Route.pos(this.link, this.t);
        this.x = p.x; this.y = p.y;
        this.onPlant = p.plant || null; this.onLeaf = p.leaf || null; this.surfS = p.s;
      }
    } else if (this.mode === 'air') {
      const a = this.air;
      a.u = Math.min(1, a.u + dt / a.dur);
      const u = a.ease ? a.ease(a.u) : a.u;
      const B = a.to();
      this.x = lerp(a.x0, B.x, u);
      this.y = lerp(a.y0, B.y, u) + a.h * 4 * u * (1 - u);
    } else if (this.mode === 'ride') {
      const r = this.ride;
      const p = r.plant.leafPoint(r.leaf, r.off);
      this.x = p.x; this.y = p.y + 0.03;
      this.onPlant = r.plant; this.onLeaf = r.leaf;
    } else if (this.mode === 'sleep' || this.mode === 'seat') {
      if (this.seatFn) { const s = this.seatFn(); this.seat.x = s.x; this.seat.y = s.y; }
      this.x = this.seat.x; this.y = this.seat.y;
    }
    this.vx = (this.x - px) / Math.max(dt, 1e-4);
    const moving = Math.abs(this.vx) > 0.2 && this.mode === 'route' && !this.hop;
    this.speed = damp(this.speed, moving ? Math.abs(this.vx) : 0, 12, dt);
    if (moving) {
      const before = Math.floor(this.walkPh / PI);
      this.walkPh += Math.abs(this.x - px) / 0.34 * PI;
      if (Math.floor(this.walkPh / PI) !== before) {
        const pan = Cam.panOf(this.x);
        if (this.onPlant) { Sound.plantStep(pan); this.onPlant.impulse(this.surfS || 0, 0, -1.5, this.x); }
        else Sound.step(pan);
      }
    }
  }

  applyLoads() {
    if (this.onLeaf && this.onPlant) {
      const L = this.onLeaf, P = this.onPlant;
      const off = this.ride ? this.ride.off : (L.stand || 0.45);
      L.tau += -4 * this.W * off * Math.cos(P.leafAngle(L));
      P.load(this.x, this.y, this.W, P.leafS(L));
    } else if (this.onPlant) {
      this.onPlant.load(this.x, this.y, this.W, this.surfS || 0);
    }
  }

  /* hands in local facing space → world */
  toWorld(lx, ly) { return { x: this.x + lx * this.dirS.v, y: this.y + ly }; }
  toLocal(wx, wy) { return { x: (wx - this.x) * this.dir, y: wy - this.y }; }

  animate(dt) {
    const P = this.p, t = G.time;
    // default pose targets
    const T = this.pt = { crouch: 0, lean: 0, tilt: 0, sit: this.mode === 'sleep' || this.mode === 'seat' ? 1 : 0, sleep: this.mode === 'sleep' ? 1 : 0, mouth: 0, happy: 0,
      hfx: 0.13, hfy: 0.3, hbx: -0.1, hby: 0.3, hop: 0 };
    const sw = Math.sin(this.walkPh) * clamp01(this.speed / 1.5);
    T.hfx += sw * 0.1; T.hbx -= sw * 0.1;
    T.lean = clamp01(this.speed / 2) * 0.12;
    if (this.carry && this.carry.state === 'carried') {
      if (this.carryPose === 'over') { T.hfx = 0.14; T.hfy = 1.2; T.hbx = -0.1; T.hby = 1.2; T.happy = 1; }
      else { T.hfx = 0.46; T.hfy = 0.4; T.hbx = 0.16; T.hby = 0.42; T.lean = -0.05; }
      T.mouth = 0.3;
    }
    if (this.hop) {
      const h = this.hop;
      if (h.climb) {
        const u = h.u;
        T.hfx = 0.18; T.hfy = lerp(1.25, 0.9, u); T.hbx = 0.12; T.hby = lerp(0.95, 1.25, u);
        T.crouch = 0.25 * Math.sin(u * PI);
        T.lean = 0.15;
      } else {
        T.crouch = h.u < 0.15 ? 0.4 : 0.15; T.hfx = 0.25; T.hfy = 0.7; T.hbx = -0.25; T.hby = 0.7;
      }
    } else if (this.mode === 'route' && Route.links[this.link] && Route.links[this.link].climb && Math.round(this.t) > 0 && !this.carry) {
      // resting on a leaf of the tower: one hand on the stem
      const p = Route.stepPoint(this.link, Math.round(this.t));
      const sx = Route.stemX(this.link, p.y + 0.8);
      const lx = Math.abs(sx - this.x) * 0.85;
      T.hfx = clamp(lx, 0.12, 0.45); T.hfy = 0.85;
    }
    if (this.mode === 'air') { T.hfx = 0.2; T.hfy = 1.25; T.hbx = 0.05; T.hby = 1.2; T.crouch = 0; T.mouth = 1; }
    if (this.mode === 'ride') { T.crouch = 0.2; T.hfx = 0.3; T.hfy = 0.9; T.mouth = 0.6; T.happy = 0.6; }
    if (this.mode === 'sleep') { T.hfx = 0.16; T.hfy = 0.08; T.hbx = 0.08; T.hby = 0.1; T.tilt = 0.25 + 0.03 * Math.sin(t * 1.2); T.lean = 0.12; }
    if (this.mode === 'seat') { T.hfx = 0.25; T.hfy = 0.25; T.hbx = 0.05; T.hby = 0.2; T.happy = 1; T.mouth = 0.2; }
    // action-driven overrides
    if (this.poseFn) this.poseFn(T);
    // overlays: startle / cheer
    if (this.overlay) {
      const o = this.overlay; o.t += dt;
      const u = o.t / o.dur;
      if (o.kind === 'startle') { T.crouch = Math.max(T.crouch, 0.35 * Math.sin(u * PI)); T.mouth = 1; T.hop = 0.12 * Math.sin(u * PI); if (!this.carry) { T.hfx = -0.05; T.hfy = 0.62; T.hbx = -0.2; T.hby = 0.55; } T.lean = -0.18 * Math.sin(u * PI); }
      if (o.kind === 'cheer') { const k = Math.sin(u * PI); T.hop = 0.28 * Math.max(0, Math.sin(u * TAU * 1)) ; if (!this.carry) { T.hfx = 0.12; T.hfy = 1.25; T.hbx = -0.1; T.hby = 1.22; } T.happy = 1; T.mouth = 0.8 * k; }
      if (o.kind === 'nod') { T.tilt = 0.18 * Math.sin(u * TAU * 2); T.happy = 0.5; }
      if (o.t >= o.dur) this.overlay = null;
    }
    for (const k in P) { P[k].target = T[k]; P[k].update(dt); }
    this.dirS.target = this.dir; this.dirS.update(dt);
    this.squash.update(dt);
    this.hat.target = -this.vx * 0.04; this.hat.update(dt);
    this.scarf.target = -this.vx * 0.3 - 0.1; this.scarf.update(dt);
    // gaze
    let lt = this.lookAt;
    if (lt) { this.look.x = damp(this.look.x, lt.x, 8, dt); this.look.y = damp(this.look.y, lt.y, 8, dt); }
    const wantFace = this.lookCam > 0.5 ? 0 : (this.mode === 'sleep' ? 0.35 : 0.8);
    this.faceS.target = wantFace; this.faceS.update(dt);
    // turn toward what we look at when standing still
    if (lt && !this.goal && !this.hop && !this.busy && this.mode === 'route' && !(Route.links[this.link] && Route.links[this.link].climb && Math.round(this.t) > 0)) {
      const dx = lt.x - this.x;
      if (Math.abs(dx) > 0.35) this.dir = Math.sign(dx);
    }
    // blink
    this.blinkT -= dt;
    if (this.blinkT < 0) { this.blink = 0.14; this.blinkT = rnd(2, 4.5); }
    this.blink = Math.max(0, this.blink - dt);
    // sleepy breath bubbles
    if (this.mode === 'sleep') {
      this.zzT -= dt;
      if (this.zzT < 0) {
        this.zzT = 1.8;
        const hp = this.headWorld();
        FX.add({ x: hp.x + 0.2 * this.dir, y: hp.y + 0.1, vx: 0.15 * this.dir, vy: 0.35, life: 2.2, size: 0.07 + (G.hint || 0) * 0.05, type: 'bubble', drag: 0.3 });
        Sound.snore();
      }
    }
    // carried star follows the hands
    if (this.carry && this.carry.state === 'carried') {
      const s = this.carry;
      let lx, ly;
      if (this.carryPose === 'over') { lx = 0.02; ly = 1.42 + this.p.hop.v; }
      else { lx = 0.28; ly = 0.52 - this.p.crouch.v * 0.12 + this.p.hop.v; }
      const w = this.toWorld(lx, ly);
      s.x = w.x; s.y = w.y + (this.hop ? 0 : 0);
      s.ang = damp(s.ang, Math.round(s.ang / (TAU / 5)) * (TAU / 5), 8, dt);
    }
  }

  headWorld() {
    const hipY = this.hipY();
    return this.toWorld(0.02, hipY + 0.52);
  }
  hipY() {
    const sit = this.p.sit.v;
    return lerp(0.3 - this.p.crouch.v * 0.14, 0.05, sit) + this.p.hop.v;
  }

  /* overlay reactions */
  startle() { if (!this.overlay) this.overlay = { kind: 'startle', t: 0, dur: 0.5 }; }
  cheer() { if (!this.hop && this.mode === 'route') this.overlay = { kind: 'cheer', t: 0, dur: 0.75 }; }
  nod() { if (!this.overlay) this.overlay = { kind: 'nod', t: 0, dur: 0.6 }; }

  /* ---------- actions ---------- */
  *aWake() {
    this.busy = true;
    Sound.wake();
    yield* tween(0.5, u => { this.poseFn = T => { T.sleep = 1 - u; T.sit = 1; T.hfx = lerp(0.16, 0.1, u); T.hfy = lerp(0.08, 1.2, u); T.hbx = lerp(0.08, -0.12, u); T.hby = lerp(0.1, 1.2, u); T.mouth = u; }; });
    yield* tween(0.5, u => { this.poseFn = T => { T.sleep = 0; T.sit = 1; T.hfx = 0.12; T.hfy = 1.2 + 0.05 * Math.sin(u * 12); T.hbx = -0.12; T.hby = 1.2; T.mouth = 1 - u; T.happy = u; }; });
    this.poseFn = null;
    // hop down from the bench
    const gx = BENCH.x + 0.55;
    this.mode = 'air';
    this.air = { x0: this.x, y0: this.y, u: 0, dur: 0.4, h: 0.25, to: () => ({ x: gx, y: terrainY(gx) }) };
    while (this.air.u < 1) yield;
    this.mode = 'route'; this.link = 0; this.t = gx; this.air = null;
    this.squash.kick(-2); Sound.step(Cam.panOf(this.x));
    this.busy = false;
  }

  *aFetch(star, after) {
    while (star.state !== 'rest') yield;
    const side = this.x <= star.x ? 1 : -1;
    const standX = star.x - side * 0.5;
    yield* this.aGoal(Route.locateAny(standX, star.y, this.link));
    if (Math.abs(this.x - standX) > 0.3) return;   // couldn't reach
    this.dir = side;
    this.busy = true;
    const sx0 = star.x, sy0 = star.y;
    yield* tween(0.24, u => { this.poseFn = T => { T.crouch = 0.9 * u; T.lean = 0.35 * u; T.hfx = lerp(0.2, 0.46, u); T.hfy = lerp(0.35, 0.22, u); T.hbx = lerp(0, 0.3, u); T.hby = lerp(0.35, 0.3, u); }; });
    star.state = 'lifted';
    Sound.pickup(Cam.panOf(this.x));
    FX.sparks(star.x, star.y, 10, 1.4);
    this.carry = star;
    this.carryPose = 'front';
    yield* tween(0.28, u => {
      this.poseFn = T => { T.crouch = 0.9 * (1 - u); T.lean = 0.35 * (1 - u); T.hfx = 0.46; T.hfy = 0.4; T.hbx = 0.16; T.hby = 0.42; };
      const w = this.toWorld(0.28, 0.52 - (0.9 * (1 - u)) * 0.12);
      star.x = lerp(sx0, w.x, Ease.outCubic(u)); star.y = lerp(sy0, w.y, Ease.outCubic(u));
    });
    star.state = 'carried';
    this.poseFn = null;
    // show it off
    this.carryPose = 'over';
    this.overlay = { kind: 'cheer', t: 0, dur: 0.5 };
    yield* wait(0.42);
    this.carryPose = 'front';
    this.busy = false;
    if (after) yield* after();
  }

  *aPlant(spot) {
    const standX = spot.x - 0.62;
    yield* this.aWalkTo(standX);
    if (Math.abs(this.x - standX) > 0.3) return;
    this.dir = 1;
    this.busy = true;
    const star = this.carry;
    const sy = terrainY(spot.x);
    yield* tween(0.28, u => { this.poseFn = T => { T.crouch = u; T.lean = 0.25 * u; T.hfx = 0.42; T.hfy = lerp(0.5, 0.42, u); T.hbx = 0.12; T.hby = 0.45; }; });
    // set the star aside on the soil while digging
    this.carry = null;
    star.state = 'held';
    const hold = { x: spot.x + 0.55, y: terrainY(spot.x + 0.55) + star.support(0) };
    const s0 = { x: star.x, y: star.y };
    yield* tween(0.22, u => { star.x = lerp(s0.x, hold.x, u); star.y = lerp(s0.y, hold.y, u) + Math.sin(u * PI) * 0.15; });
    for (let k = 0; k < 1; k++) {
      yield* tween(0.3, u => {
        this.poseFn = T => { T.crouch = 1; T.lean = 0.3; T.hfx = 0.62 - Math.sin(u * PI) * 0.1; T.hfy = 0.08 + Math.sin(u * PI) * 0.22; T.hbx = 0.25; T.hby = 0.25; };
      });
      Sound.dig(Cam.panOf(spot.x));
      FX.crumbs(spot.x, sy, 7, 1.8, -0.5);
      spot.hole = 1;
    }
    // place the star into the hole
    const s1 = { x: star.x, y: star.y };
    const into = { x: spot.x, y: sy + star.R * 0.45 };
    yield* tween(0.36, u => {
      this.poseFn = T => { T.crouch = 1; T.lean = 0.3; T.hfx = lerp(0.9, 0.62, u); T.hfy = 0.2; T.hbx = lerp(0.7, 0.45, u); T.hby = 0.24; };
      star.x = lerp(s1.x, into.x, Ease.inOut(u)); star.y = lerp(s1.y, into.y, Ease.inOut(u)) + Math.sin(u * PI) * 0.25;
      star.ang = angDamp(star.ang, 0, 6, 1 / 60);
    });
    star.state = 'planted'; star.clipY = sy - 0.01;
    spot.star = star; spot.planted = true;
    // pat the soil
    for (let k = 0; k < 2; k++) {
      yield* tween(0.16, u => { this.poseFn = T => { T.crouch = 1; T.lean = 0.3; T.hfx = 0.58; T.hfy = 0.12 + Math.sin(u * PI) * 0.14; T.hbx = 0.4; T.hby = 0.14 + Math.sin(u * PI) * 0.1; }; });
      Sound.pat(Cam.panOf(spot.x));
      FX.dust(spot.x + 0.3, sy, 2, 0.4);
    }
    yield* tween(0.28, u => { this.poseFn = T => { T.crouch = 1 - u; T.lean = 0.3 * (1 - u); }; });
    this.poseFn = null;
    this.busy = false;
    // step back to watch
    this.goalSlow = 0.55;
    yield* this.aWalkTo(spot.x - 1.25);
    this.goalSlow = 1;
    this.dir = 1;
  }

  canReach(star) {
    const pad = Route.stepPoint(this.link, Math.round(this.t));
    const dx = star.x - pad.x, dy = star.y - pad.y;
    return Math.abs(dx) < 1.9 && dy > 0.15 && dy < 2.6;
  }

  *aCatch(star) {
    if (this.carry) return;
    this.armed = star;
    let waited = 0;
    while (true) {
      if (star.state === 'carried' || star.state === 'gone') { this.armed = null; return; }
      if (star.state === 'rest') { this.armed = null; yield* this.aTakeFromLeaf(star); return; }
      if (star.missed) { this.armed = null; return; }
      if ((star.state === 'falling' || star.state === 'ground') && this.canReach(star) && !this.hop) break;
      waited += yield;
      if (waited > 4.5) { this.armed = null; return; }
    }
    this.armed = null;
    this.busy = true;
    const pad = { link: this.link, t: Math.round(this.t) };
    // predict where the star will be
    const tt = 0.26;
    let px = star.x + star.vx * tt, py = star.y + star.vy * tt - 4.5 * tt * tt;
    const home = Route.stepPoint(pad.link, pad.t);
    px = clamp(px, home.x - 1.7, home.x + 1.7);
    const fy = Math.max(home.y + 0.05, py - 1.25);
    this.dir = Math.sign(px - this.x) || this.dir;
    Sound.jump(Cam.panOf(this.x));
    const la = Route.stepLeaf(pad.link, pad.t);
    if (la) { la.leaf.av -= 2.5 * Math.cos(la.plant.leafAngle(la.leaf)); la.plant.impulse(la.plant.leafS(la.leaf), 0, -4, this.x); }
    this.mode = 'air';
    this.air = { x0: this.x, y0: this.y, u: 0, dur: tt, h: 0.15, ease: Ease.outQuad, to: () => ({ x: px - this.dir * 0.12, y: fy }) };
    while (this.air.u < 1) yield;
    // got it!
    star.state = 'carried'; star.vx = star.vy = 0; star.useLeaves = false;
    this.carry = star; this.carryPose = 'over';
    Sound.catch(Cam.panOf(this.x));
    FX.sparks(star.x, star.y, 18, 2.4, { col: star.big ? 'rose' : 'warm' });
    FX.ring(star.x, star.y, 1.2);
    // fall back to the pad
    this.air = { x0: this.x, y0: this.y, u: 0, dur: 0.42, h: 0.25, ease: Ease.inQuad, to: () => Route.stepPoint(pad.link, pad.t) };
    while (this.air.u < 1) yield;
    this.mode = 'route'; this.air = null; this.link = pad.link; this.t = pad.t;
    this.squash.kick(-3);
    if (la) { la.leaf.av -= 3.5 * Math.cos(la.plant.leafAngle(la.leaf)); la.plant.impulse(la.plant.leafS(la.leaf), 0, star.big ? -14 : -7, this.x); }
    Sound.plantStep(Cam.panOf(this.x));
    Cam.shake(star.big ? 0.05 : 0.02);
    yield* wait(0.4);
    this.carryPose = 'front';
    this.busy = false;
  }

  *aTakeFromLeaf(star) {
    if (this.carry || star.state !== 'rest') return;
    this.busy = true;
    this.dir = Math.sign(star.x - this.x) || 1;
    const s0 = { x: star.x, y: star.y };
    yield* tween(0.3, u => { this.poseFn = T => { T.crouch = 0.5 * u; T.lean = 0.35 * u; T.hfx = lerp(0.2, 0.7, u); T.hfy = 0.45; T.hbx = lerp(0, 0.5, u); T.hby = 0.5; }; });
    star.state = 'lifted'; star.restOn = null; star.useLeaves = false;
    Sound.pickup(Cam.panOf(this.x));
    yield* tween(0.35, u => {
      this.poseFn = T => { T.crouch = 0.5 * (1 - u); T.lean = 0.35 * (1 - u); T.hfx = 0.42; T.hfy = 0.5; T.hbx = 0.12; T.hby = 0.52; };
      const w = this.toWorld(0.28, 0.52);
      star.x = lerp(s0.x, w.x, Ease.outCubic(u)); star.y = lerp(s0.y, w.y, Ease.outCubic(u)) + Math.sin(u * PI) * 0.2;
    });
    this.poseFn = null;
    star.state = 'carried'; this.carry = star; this.carryPose = 'over';
    this.overlay = { kind: 'cheer', t: 0, dur: 0.6 };
    yield* wait(0.5);
    this.carryPose = 'front';
    this.busy = false;
  }

  *aPlantCrown(plant) {
    this.busy = true;
    this.dir = 1;
    const star = this.carry;
    const q0 = plant.soilPos();
    yield* tween(0.3, u => { this.poseFn = T => { T.crouch = 0.8 * u; T.lean = 0.25 * u; T.hfx = 0.42; T.hfy = 0.5; T.hbx = 0.12; T.hby = 0.5; }; });
    Sound.dig(Cam.panOf(this.x));
    FX.crumbs(q0.x, q0.y + 0.2, 6, 1.4);
    this.carry = null; star.state = 'held';
    const s0 = { x: star.x, y: star.y };
    yield* tween(0.4, u => {
      const q = plant.soilPos();
      this.poseFn = T => { T.crouch = 0.8; T.lean = 0.25; T.hfx = lerp(0.42, 0.6, u); T.hfy = lerp(0.5, 0.45, u); T.hbx = 0.3; T.hby = 0.45; };
      star.x = lerp(s0.x, q.x, Ease.inOut(u)); star.y = lerp(s0.y, q.y + star.R * 0.6, Ease.inOut(u)) + Math.sin(u * PI) * 0.3;
    });
    star.state = 'planted';
    plant.soil.star = star;
    G.crownPlanted = true;
    for (let k = 0; k < 2; k++) {
      yield* tween(0.16, u => { this.poseFn = T => { T.crouch = 0.8; T.lean = 0.25; T.hfx = 0.55; T.hfy = 0.45 + Math.sin(u * PI) * 0.12; T.hbx = 0.35; T.hby = 0.45; }; });
      Sound.pat(Cam.panOf(this.x));
    }
    yield* tween(0.3, u => { this.poseFn = T => { T.crouch = 0.8 * (1 - u); T.lean = 0.25 * (1 - u); }; });
    this.poseFn = null;
    this.busy = false;
  }

  /* ---------- drawing ---------- */
  drawBody(g, part) {
    // part: 'all' | 'noFront' | 'front'
    const P = this.p;
    const crouch = P.crouch.v, sit = P.sit.v, lean = P.lean.v, tilt = P.tilt.v;
    const hipY = this.hipY();
    const sq = clamp(this.squash.v, 0.75, 1.25);
    const face = this.faceS.v;
    const t = G.time;
    const breathe = 1 + 0.012 * Math.sin(t * 2.2);
    const drawFront = part !== 'noFront', drawRest = part !== 'front';

    g.save();
    g.scale(2 - sq, sq);

    const shoulder = { x: 0.02 + Math.sin(lean) * 0.3, y: hipY + 0.3 * Math.cos(lean) };
    const legLen = 0.155;

    if (drawRest) {
      // ---- legs ----
      const legs = (sideSign, col) => {
        const hx = sideSign * 0.055 * (1 - sit * 0.5), hy = hipY;
        let fx, fy;
        if (sit > 0.5) { fx = 0.2 + sideSign * 0.03 + Math.sin(t * 2 + sideSign) * 0.03 * (this.mode === 'seat' ? 1 : 0); fy = hipY - 0.26; }
        else {
          const ph = this.walkPh + (sideSign > 0 ? 0 : PI);
          const amt = clamp01(this.speed / 1.6);
          fx = hx + Math.sin(ph) * 0.13 * amt;
          fy = Math.max(0, Math.cos(ph)) * 0.07 * amt;
          if (this.hop && !this.hop.climb) { fx = hx + sideSign * 0.03; fy = Math.max(0, hipY - 0.2); }
          if (this.hop && this.hop.climb) { fx = hx + 0.1 + sideSign * 0.05 * Math.sin(this.hop.u * TAU); fy = Math.max(0, hipY - 0.26 + 0.08 * Math.sin(this.hop.u * PI + sideSign)); }
          if (this.mode === 'air') { fx = hx + sideSign * 0.06; fy = hipY - 0.24; }
        }
        const k = ik2(hx, hy, fx, fy, legLen, legLen, -1);
        g.strokeStyle = css(col); g.lineWidth = 0.1; g.lineCap = 'round'; g.lineJoin = 'round';
        g.beginPath(); g.moveTo(hx, hy); g.lineTo(k.ex, k.ey); g.lineTo(k.hx, k.hy); g.stroke();
        g.fillStyle = css(sideSign > 0 ? PAL.boot : mixc(PAL.boot, [0, 0, 0], 0.3));
        g.beginPath(); g.ellipse(k.hx + 0.04, k.hy + 0.035, 0.085, 0.05, 0, 0, TAU); g.fill();
      };
      legs(-1, mixc(PAL.trousers, [0, 0, 0], 0.3));
      // back arm
      this.drawArm(g, shoulder, P.hbx.v, P.hby.v, -1);
      legs(1, PAL.trousers);

      // ---- body (smock) ----
      g.save();
      g.translate(0, hipY);
      g.rotate(-lean);
      g.scale(breathe, 1 / breathe);
      g.fillStyle = css(PAL.smock);
      g.beginPath();
      g.moveTo(-0.2, -0.05);
      g.bezierCurveTo(-0.24, 0.12, -0.17, 0.3, -0.1, 0.36);
      g.lineTo(0.12, 0.36);
      g.bezierCurveTo(0.2, 0.3, 0.26, 0.12, 0.23, -0.05);
      g.quadraticCurveTo(0.02, -0.1, -0.2, -0.05);
      g.fill();
      g.strokeStyle = 'rgba(40,16,10,0.5)'; g.lineWidth = 0.018; g.stroke();
      // apron pocket with a trowel
      g.fillStyle = css(mixc(PAL.smock, [240, 210, 170], 0.35));
      g.beginPath(); g.moveTo(0.02, 0.02); g.lineTo(0.2, 0.02); g.lineTo(0.19, 0.16); g.lineTo(0.03, 0.16); g.closePath(); g.fill();
      g.strokeStyle = '#6b4a30'; g.lineWidth = 0.025; g.beginPath(); g.moveTo(0.08, 0.14); g.lineTo(0.06, 0.24); g.stroke();
      // scarf
      g.fillStyle = css(PAL.scarf);
      g.beginPath(); g.ellipse(0.01, 0.35, 0.16, 0.055, 0, 0, TAU); g.fill();
      g.save(); g.translate(-0.1, 0.33); g.rotate(-0.4 + this.scarf.v + Math.sin(t * 3) * 0.05);
      g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(-0.12, -0.02, -0.2, -0.1); g.lineTo(-0.16, -0.14); g.quadraticCurveTo(-0.08, -0.07, 0.02, -0.05); g.fill();
      g.restore();
      g.restore();

      // ---- head ----
      const hx = shoulder.x + Math.sin(lean) * 0.06, hy = shoulder.y + 0.2;
      g.save();
      g.translate(hx, hy);
      g.rotate(-tilt * 0.8 - lean * 0.3);
      const fo = face * 0.07;
      // hair tuft behind
      g.fillStyle = '#5a3a26';
      g.beginPath(); g.ellipse(-0.1, 0.02, 0.12, 0.13, 0, 0, TAU); g.fill();
      g.fillStyle = css(PAL.skin);
      g.beginPath(); g.arc(0, 0, 0.2, 0, TAU); g.fill();
      g.strokeStyle = 'rgba(90,50,30,0.35)'; g.lineWidth = 0.014; g.stroke();
      // ear
      g.fillStyle = css(mixc(PAL.skin, PAL.cheek, 0.3));
      g.beginPath(); g.ellipse(-0.1 + fo * -0.8, -0.01, 0.04, 0.055, 0, 0, TAU); g.fill();
      // cheeks
      g.fillStyle = css(PAL.cheek, 0.55);
      g.beginPath(); g.ellipse(fo + 0.1 - face * 0.02, -0.07, 0.045, 0.03, 0, 0, TAU); g.fill();
      if (face < 0.6) { g.beginPath(); g.ellipse(fo - 0.1, -0.07, 0.045, 0.03, 0, 0, TAU); g.fill(); }
      // eyes
      const sl = Math.max(P.sleep.v, this.blink > 0 ? 1 : 0);
      const happy = P.happy.v;
      const lk = this.toLocal(this.look.x, this.look.y);
      const hw = this.toLocal(this.headWorld().x, this.headWorld().y);
      let gx = lk.x - hw.x, gy = lk.y - hw.y;
      const gl = Math.hypot(gx, gy) || 1;
      const cam = this.lookCam;
      gx = (gx / gl) * 0.018 * (1 - cam); gy = (gy / gl) * 0.016 * (1 - cam);
      const eyes = [fo + 0.075 - face * 0.012, fo - 0.06 + face * 0.02];
      for (let e = 0; e < 2; e++) {
        const ex = eyes[e], ey = 0.02;
        const far = e === 1 ? 1 - face * 0.3 : 1;
        if (sl > 0.5 || happy > 0.6) {
          g.strokeStyle = css(PAL.eye); g.lineWidth = 0.02; g.lineCap = 'round';
          g.beginPath();
          if (happy > 0.6 && sl <= 0.5) g.arc(ex, ey - 0.015, 0.028 * far, PI * 0.15, PI * 0.85);
          else g.arc(ex, ey + 0.012, 0.028 * far, PI * 1.15, PI * 1.85);
          g.stroke();
        } else {
          g.fillStyle = css(PAL.eye);
          g.beginPath(); g.ellipse(ex + gx, ey + gy, 0.028 * far, 0.036, 0, 0, TAU); g.fill();
          g.fillStyle = 'rgba(255,255,255,0.9)';
          g.beginPath(); g.arc(ex + gx + 0.01, ey + gy + 0.013, 0.009, 0, TAU); g.fill();
        }
      }
      // nose
      g.fillStyle = css(mixc(PAL.skin, PAL.cheek, 0.45));
      g.beginPath(); g.ellipse(fo + 0.05 + face * 0.1, -0.035, 0.03, 0.025, 0, 0, TAU); g.fill();
      // mouth
      const mo = P.mouth.v;
      g.strokeStyle = 'rgba(90,40,30,0.9)'; g.lineWidth = 0.014;
      if (mo > 0.5) { g.fillStyle = '#6d2e26'; g.beginPath(); g.ellipse(fo + 0.035, -0.1, 0.022, 0.028 * mo, 0, 0, TAU); g.fill(); }
      else { g.beginPath(); g.arc(fo + 0.03, -0.085, 0.03, PI * 1.2, PI * 1.8); g.stroke(); }
      // hat
      g.save();
      g.rotate(this.hat.v * 0.5);
      g.translate(0, 0.1);
      g.fillStyle = css(PAL.hatDark);
      g.beginPath(); g.ellipse(0.02, 0.0, 0.36, 0.08, 0.04, 0, TAU); g.fill();
      g.fillStyle = css(PAL.hat);
      g.beginPath(); g.ellipse(0.02, 0.02, 0.34, 0.06, 0.04, 0, TAU); g.fill();
      g.beginPath(); g.moveTo(-0.17, 0.03); g.bezierCurveTo(-0.17, 0.24, 0.2, 0.24, 0.2, 0.03); g.closePath(); g.fill();
      g.fillStyle = css(PAL.band);
      g.beginPath(); g.moveTo(-0.17, 0.04); g.lineTo(0.2, 0.04); g.lineTo(0.195, 0.09); g.lineTo(-0.165, 0.09); g.closePath(); g.fill();
      g.strokeStyle = 'rgba(120,90,40,0.5)'; g.lineWidth = 0.01;
      for (let k = -2; k <= 2; k++) { g.beginPath(); g.moveTo(0.015 + k * 0.06, 0.1); g.lineTo(0.015 + k * 0.05, 0.19); g.stroke(); }
      g.restore();
      g.restore();
    }
    if (drawFront) this.drawArm(g, shoulder, P.hfx.v, P.hfy.v, 1);
    g.restore();
  }

  drawArm(g, sh, hx, hy, side) {
    const sx = sh.x + (side > 0 ? 0.06 : -0.08), sy = sh.y - 0.04;
    const k = ik2(sx, sy, hx, hy, 0.17, 0.16, 1);
    const col = side > 0 ? PAL.smock : mixc(PAL.smock, [0, 0, 0], 0.3);
    g.strokeStyle = css(col); g.lineWidth = 0.085; g.lineCap = 'round'; g.lineJoin = 'round';
    g.beginPath(); g.moveTo(sx, sy); g.lineTo(k.ex, k.ey); g.lineTo(k.hx, k.hy); g.stroke();
    g.fillStyle = css(side > 0 ? PAL.skin : mixc(PAL.skin, [0, 0, 0], 0.25));
    g.beginPath(); g.arc(k.hx, k.hy, 0.05, 0, TAU); g.fill();
  }

  draw(ctx) {
    if (this.hidden) return;
    const s = Cam.ppu * View.dpr;
    const carrying = this.carry && this.carry.state === 'carried';
    // ground contact shadow
    if (this.mode === 'route' && !this.hop && !this.onLeaf) {
      const F = Lights.field(this.x, this.y + 0.5);
      const off = clamp(-F.dx * 0.25, -0.35, 0.35);
      ctx.globalAlpha = 0.5;
      ctx.drawImage(Glow.get('shadow'), this.x - 0.35 + off, this.y - 0.07, 0.7, 0.14);
      ctx.globalAlpha = 1;
    }
    if (s < 30) {
      ctx.save(); ctx.translate(this.x, this.y); ctx.scale(this.dirS.v, 1); this.drawBody(ctx, 'all'); ctx.restore();
      return;
    }
    const size = Math.ceil(2.4 * s);
    if (!this.oc || this.oc.width !== size) {
      this.oc = document.createElement('canvas'); this.oc.width = this.oc.height = size;
      this.og = this.oc.getContext('2d');
    }
    const g = this.og;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.globalCompositeOperation = 'source-over';
    g.globalAlpha = 1;
    g.clearRect(0, 0, size, size);
    const ox = size / 2, oy = size * 0.8;
    g.setTransform(s, 0, 0, -s, ox, oy);
    g.save(); g.scale(this.dirS.v, 1); this.drawBody(g, 'all'); g.restore();
    this.shade(g);
    Cam.screen(ctx);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const sp = Cam.toScreen(this.x, this.y);
    ctx.drawImage(this.oc, Math.round(sp.x * View.dpr - ox), Math.round(sp.y * View.dpr - oy));
    Cam.world(ctx);
    if (carrying) {
      this.carry.draw(ctx);
      // the little hand holding the star from the front, lit by it
      ctx.save(); ctx.translate(this.x, this.y); ctx.scale(this.dirS.v, 1);
      const sq = clamp(this.squash.v, 0.75, 1.25);
      ctx.scale(2 - sq, sq);
      const P = this.p, lean = P.lean.v, hipY = this.hipY();
      const sh = { x: 0.02 + Math.sin(lean) * 0.3, y: hipY + 0.3 * Math.cos(lean) };
      const k = ik2(sh.x + 0.06, sh.y - 0.04, P.hfx.v, P.hfy.v, 0.17, 0.16, 1);
      ctx.fillStyle = css(lighten(PAL.skin, 0.25));
      ctx.beginPath(); ctx.arc(k.hx, k.hy, 0.052, 0, TAU); ctx.fill();
      ctx.strokeStyle = 'rgba(120,60,40,0.5)'; ctx.lineWidth = 0.012; ctx.stroke();
      ctx.restore();
    }
  }

  shade(g) {
    const F = Lights.field(this.x, this.y + 0.6);
    const len = Math.hypot(F.dx, F.dy);
    const lx = len > 1e-3 ? F.dx / len : -0.3, ly = len > 1e-3 ? F.dy / len : 0.9;
    const k = clamp01(F.total * 0.7);
    g.globalCompositeOperation = 'source-atop';
    const cx = 0, cy = 0.62;
    // shadow side (night ambient)
    const gr = g.createLinearGradient(cx + lx * 0.55, cy + ly * 0.55, cx - lx * 0.55, cy - ly * 0.55);
    gr.addColorStop(0, 'rgba(18,26,48,' + (0.12 + (1 - k) * 0.3).toFixed(3) + ')');
    gr.addColorStop(0.55, 'rgba(12,20,40,' + (0.3 + (1 - k) * 0.18).toFixed(3) + ')');
    gr.addColorStop(1, 'rgba(8,12,30,' + (0.52 + (1 - k) * 0.1).toFixed(3) + ')');
    g.fillStyle = gr; g.fillRect(-1.2, -0.4, 2.4, 2.4);
    // warm / green key light from the strongest nearby sources
    const srcs = Lights.list.map(L => ({ L, f: L.i / (1 + ((L.x - this.x) ** 2 + (L.y - this.y - 0.6) ** 2) / (L.r * L.r) * 2.5) }))
      .filter(o => o.f > 0.04).sort((a, b) => b.f - a.f).slice(0, 2);
    for (const o of srcs) {
      const L = o.L;
      const px = L.x - this.x, py = L.y - this.y;
      const rg = g.createRadialGradient(px, py, 0, px, py, Math.max(0.9, L.r * 0.8));
      const col = L.kind === 'plant' ? '170,240,140' : L.kind === 'rose' ? '255,180,150' : L.kind === 'window' ? '255,170,100' : '255,190,110';
      const a = Math.min(0.42, o.f * 0.5);
      rg.addColorStop(0, 'rgba(' + col + ',' + a.toFixed(3) + ')');
      rg.addColorStop(0.5, 'rgba(' + col + ',' + (a * 0.45).toFixed(3) + ')');
      rg.addColorStop(1, 'rgba(' + col + ',0)');
      g.fillStyle = rg; g.fillRect(-1.2, -0.4, 2.4, 2.4);
    }
    // cool moon rim from the moon side
    const mp = Backdrop.moonPos();
    const mdx = mp.x / View.W - 0.5;
    const rimX = mdx > 0 ? 1 : -1;
    const rg2 = g.createLinearGradient(rimX * 0.35, 0, rimX * 0.05, 0);
    rg2.addColorStop(0, 'rgba(170,200,255,0.28)'); rg2.addColorStop(1, 'rgba(170,200,255,0)');
    g.fillStyle = rg2; g.fillRect(-1.2, 0.3, 2.4, 1.6);
    g.globalCompositeOperation = 'source-over';
  }
}
