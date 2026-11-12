// Scene 3: a sea-otter pup is too buoyant to dive for its favourite stone.
// Diver outfit -> climb the ladder, jump in, swim (drag) with water drag,
// pick up the heavy stone and bring it up.  Drips and a puddle afterwards.
import { Scene } from './base.js';
import { ST } from '../world.js';
import { clamp, lerp, damp, E, anim, inv, rand, TAU, angDiff } from '../util.js';
import { C, rr, ell, circ, fillStroke, plank, shadow, leafClump, limb, glint } from '../draw.js';
import { audio } from '../audio.js';
import { splashDrops } from '../fx.js';

export function drawOtter(ctx, o, t) {
  // o: {x,y,roll(0 back..1 belly), look, hold:'clam'|'stone'|'both'|null, clamOpen, happy}
  ctx.save();
  ctx.translate(o.x, o.y);
  ctx.scale(o.dir || 1, 1);
  const roll = o.roll || 0;
  const sq = Math.cos(roll * Math.PI);
  ctx.save();
  ctx.scale(1, Math.max(0.25, Math.abs(sq)) * (sq < 0 ? -1 : 1));
  // tail
  ctx.fillStyle = '#7a5236'; ctx.strokeStyle = C.line; ctx.lineWidth = 1.2;
  ell(ctx, 26, 1, 10, 3.5, 0.15); ctx.fill(); ctx.stroke();
  // back feet
  if (roll < 0.5) {
    ell(ctx, 19, -8 + Math.sin(t * 3) * 1, 3.2, 5, -0.4); fillStroke(ctx, '#6f4a30', C.line, 1);
    ell(ctx, 13, -9 + Math.cos(t * 3) * 1, 3.2, 5, -0.2); fillStroke(ctx, '#6f4a30', C.line, 1);
  }
  // body
  ell(ctx, 3, 0, 21, 9); fillStroke(ctx, '#8b6041', C.line, 1.4);
  ctx.fillStyle = '#b48762'; ell(ctx, 3, -3, 16, 5); ctx.fill();
  // head
  circ(ctx, -18, -3, 9.5); fillStroke(ctx, '#8b6041', C.line, 1.4);
  ctx.fillStyle = '#e7d5bd'; ell(ctx, -20, -3, 7, 6.5); ctx.fill();
  ell(ctx, -13, -11, 2.4, 2); fillStroke(ctx, '#8b6041', C.line, 1);
  ell(ctx, -23, -11, 2.4, 2); fillStroke(ctx, '#8b6041', C.line, 1);
  ctx.restore();
  if (roll < 0.5) {
    const lk = o.look || 0; // -1 looks down into the water
    ctx.fillStyle = '#2b211c';
    if (o.happy) {
      ctx.strokeStyle = '#2b211c'; ctx.lineWidth = 1.3;
      ctx.beginPath(); ctx.arc(-22, -5, 1.8, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke();
      ctx.beginPath(); ctx.arc(-16, -5, 1.8, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke();
    } else {
      circ(ctx, -22, -5 - lk * 1.2, 1.5); ctx.fill(); circ(ctx, -16, -5 - lk * 1.2, 1.5); ctx.fill();
    }
    ctx.fillStyle = '#2b211c'; ell(ctx, -19.5, -1, 2, 1.4); ctx.fill();
    ctx.strokeStyle = 'rgba(60,40,30,0.6)'; ctx.lineWidth = 0.6;
    ctx.beginPath(); ctx.moveTo(-23, 0); ctx.lineTo(-29, -1); ctx.moveTo(-23, 1); ctx.lineTo(-29, 2.5); ctx.moveTo(-16, 0); ctx.lineTo(-11, -1); ctx.stroke();
    // paws on the chest with what it holds
    const hx = -5, hy = -8;
    if (o.hold === 'clam' || o.hold === 'both') drawClam(ctx, hx + 3, hy - 1, o.clamOpen || 0);
    if (o.hold === 'stone' || o.hold === 'both') drawStone(ctx, hx - 3 + (o.knock || 0) * 2, hy - 7 - (o.knock || 0) * 5, 0.8);
    ell(ctx, hx - 2, hy + 1, 3, 2.4); fillStroke(ctx, '#6f4a30', C.line, 1);
    ell(ctx, hx + 5, hy + 1, 3, 2.4); fillStroke(ctx, '#6f4a30', C.line, 1);
  } else {
    // belly down: a nose pointing forward/down
    ctx.fillStyle = '#2b211c'; circ(ctx, -26, 2, 1.6); ctx.fill();
  }
  ctx.restore();
}

export function drawStone(ctx, x, y, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  ell(ctx, 0, 0, 10, 8); fillStroke(ctx, '#e6a3a6', C.line, 1.3);
  ctx.strokeStyle = '#fff3ee'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(-8, -3); ctx.quadraticCurveTo(0, -6, 8, -2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-9, 2); ctx.quadraticCurveTo(0, -1, 9, 3); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.5)'; ell(ctx, -4, -4, 3, 1.5, -0.3); ctx.fill();
  ctx.restore();
}

function drawClam(ctx, x, y, open) {
  ctx.save(); ctx.translate(x, y);
  ctx.fillStyle = '#d7c7e6'; ctx.strokeStyle = C.line; ctx.lineWidth = 1;
  ctx.save(); ctx.rotate(-open * 0.8);
  ctx.beginPath(); ctx.moveTo(-6, 0); ctx.quadraticCurveTo(0, -8, 6, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.restore();
  ctx.beginPath(); ctx.moveTo(-6, 0); ctx.quadraticCurveTo(0, 6, 6, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
  if (open > 0.3) { ctx.fillStyle = '#f4d9a8'; ell(ctx, 0, 0.5, 3.5, 1.5); ctx.fill(); }
  ctx.restore();
}

export class AquariumScene extends Scene {
  constructor(g) { super(g, 'aquarium', ST.aquarium); this.range = [-520, 520]; }

  reset() {
    super.reset();
    this.otter = { x: 0, y: 0, roll: 0, look: 0, hold: 'clam', dip: 0, dir: 1, happy: false, clamOpen: 0, knock: 0, spin: 0, tx: null };
    this.stone = { state: 'bottom', x: 0, y: 0, vy: 0, glint: 0 };
    this.diver = { x: 0, y: 0, vx: 0, vy: 0, active: false };
    this.bubbles = [];
    this.fish = null;
    this.bubT = 0; this.aerT = 0;
    this.touch = null;
    this.ripples = [];
    this.puddle = null;
    this.ball = { x: 0, ph: 0 };
    this.sand = [];
    this.knockGlass = 0;
    this.diveT = 3;
    this.surfaced = false;
  }

  layoutL() {
    const tank = { x0: -30, x1: 330, yb: -52, yt: -266, ys: -244 };
    return {
      tank, girl: { x: -125, y: 0 }, rack: { x: -262, y: 0 },
      ladder: { x: -52, y0: -2, y1: tank.yt }, deck: { x0: -100, x1: tank.x0, y: tank.yt },
      stone: { x: 262, y: tank.yb - 9 }, otter: { x: 150 }, aer: { x: 8 },
      rocks: [{ x: 60, r: 22 }, { x: 205, r: 16 }, { x: 300, r: 26 }],
      weeds: [18, 44, 118, 178, 232, 290, 312],
      frames: { overview: { x: -350, y: -350, w: 690, h: 395 }, rim: { x: -112, y: -398, w: 460, h: 385 }, swim: { x: -112, y: -290, w: 460, h: 270 } },
    };
  }
  layoutP() {
    const tank = { x0: -110, x1: 132, yb: -118, yt: -466, ys: -442 };
    return {
      tank, girl: { x: 60, y: 0 }, rack: { x: -77, y: 0 },
      ladder: { x: -128, y0: -62, y1: tank.yt }, deck: { x0: -158, x1: tank.x0, y: tank.yt },
      stone: { x: 84, y: tank.yb - 9 }, otter: { x: 20 }, aer: { x: -92 },
      rocks: [{ x: -60, r: 20 }, { x: 40, r: 14 }, { x: 118, r: 20 }],
      weeds: [-96, -76, -18, 12, 60, 104],
      frames: { overview: { x: -160, y: -565, w: 320, h: 617 }, rim: { x: -165, y: -610, w: 318, h: 560 }, swim: { x: -165, y: -505, w: 318, h: 440 } },
    };
  }

  T() { const t = this.L.tank; return { x0: this.wx(t.x0), x1: this.wx(t.x1), yb: t.yb, yt: t.yt, ys: t.ys }; }

  prepare() { this.reset(); this.layout(); this.initLife(); }
  girlSpot() {
    if (this.step === 'enter') { const L = this.L; return { x: this.wx(L.deck.x1) - 14, y: L.ladder.y1 - 2 }; }
    return super.girlSpot();
  }
  onRelayout() {
    const O = this.prevL.tank, N = this.L.tank;
    const mx = (x) => this.wx(N.x0 + ((x - this.wx(O.x0)) / (O.x1 - O.x0)) * (N.x1 - N.x0));
    const my = (y) => N.ys + ((y - O.ys) / (O.yb - O.ys)) * (N.yb - N.ys);
    this.touch = null;
    const d = this.diver;
    if (d.active) { d.x = mx(d.x); d.y = my(d.y); this.g.girl.x = d.x; this.g.girl.y = d.y + 60; }
    if (this.stone.state === 'bottom') { this.stone.x = this.wx(this.L.stone.x); this.stone.y = this.L.stone.y; }
    else if (this.stone.state === 'held') { /* follows her hands */ }
    this.otter.x = mx(this.otter.x); if (this.otter.tx != null) this.otter.tx = mx(this.otter.tx);
    this.ball.x = mx(this.ball.x);
    this.bubbles = []; this.sand = []; this.ripples = []; this.puddle = null;
    this.initFishWeeds();
  }
  initLife() {
    const T = this.T(), L = this.L;
    this.initFishWeeds();
    this.stone.x = this.wx(L.stone.x); this.stone.y = L.stone.y;
    this.otter.x = this.wx(L.otter.x); this.otter.y = T.ys;
    this.ball.x = this.wx(L.otter.x + 60);
  }
  initFishWeeds() {
    const T = this.T(), L = this.L;
    this.fish = [];
    for (let i = 0; i < 4; i++) this.fish.push({ x: lerp(T.x0 + 30, T.x1 - 30, Math.random()), y: lerp(T.ys + 40, T.yb - 40, Math.random()), vx: (Math.random() < 0.5 ? -1 : 1) * rand(18, 30), col: ['#f39a4a', '#f6cf4f', '#e9725e', '#7cc6e0'][i], s: rand(0.8, 1.1), ph: rand(0, 6) });
    this.weeds = L.weeds.map((x, i) => ({ x: this.wx(x), h: 40 + ((i * 37) % 30), bend: 0, ph: i * 1.3 }));
  }

  enter() {
    const g = this.g;
    if (!this.fish) this.initLife();
    this.step = 'dress';
    g.girl.lookAt(this.otter.x, this.otter.y);
    this.run.run(this.intro());
    g.wardrobe.enable('diver', {
      onDressed: () => this.run.run(this.climb()),
      onWrong: () => { this.otterTry(); setTimeout(() => g.rack.hint('diver'), 800); },
    });
    g.hints.set('dress', [
      { t: 3, fn: () => this.otterTry() },
      { t: 7, fn: () => { g.girl.lookAt(g.rack.x, -110); g.rack.hint('diver'); } },
      { t: 11, fn: () => { const b = g.rack.bundle('diver'); if (b && b.state === 'hang') g.ghost.drag(b.x, b.y + 40, g.girl.x, g.girl.y - 70); } },
      { t: 15, fn: () => { this.otterTry(); g.rack.hint('diver'); } },
    ], 20);
  }

  *intro() {
    yield 0.8;
    this.otterTry();
  }

  // the pup tries to dive but bobs straight back up: it is too buoyant
  otterTry() {
    if (this.otterBusy) return;
    this.otterBusy = true;
    const o = this.otter, self = this, T = this.T();
    this.run.run((function* () {
      o.look = -1;
      audio.squeak(self.pan(o.x));
      yield 0.5;
      yield* anim(0.35, (k) => { o.roll = k; });
      audio.splash(self.pan(o.x), 0.25);
      yield* anim(0.35, (k) => { o.dip = k * 16; });
      // cork: pops up
      yield* anim(0.3, (k) => { o.dip = lerp(16, -6, k); }, E.out);
      audio.bubble(self.pan(o.x), 0.1); audio.splash(self.pan(o.x), 0.2);
      self.ripple(o.x, T.ys, 30);
      splashDrops(self.g.fx, o.x, T.ys - 4, 5, 60, T.ys + 2);
      yield* anim(0.3, (k) => { o.dip = lerp(-6, 0, k); });
      yield* anim(0.35, (k) => { o.roll = 1 - k; });
      o.look = -1;
      yield 0.3;
      audio.squeak(self.pan(o.x));
      self.otterBusy = false;
    })());
  }

  ripple(x, y, s = 24) { this.ripples.push({ x, y, t: 0, s }); }

  *climb() {
    const g = this.g, girl = g.girl, L = this.L, T = this.T();
    this.step = 'climb';
    g.hints.clear();
    girl.lookAt(this.wx(L.ladder.x), L.ladder.y1);
    yield 0.2;
    yield* girl.walkTo(this.wx(L.ladder.x) - 4, L.ladder.y0);
    this.setCam('rim', 1.6);
    girl.facing = 1; girl.climbing = true; girl.zBias = 600; girl.noShadow = true;
    const y0 = girl.y, y1 = L.ladder.y1 - 2;
    const dur = Math.abs(y0 - y1) / 120;
    let lastRung = 0;
    yield* anim(dur, (k) => {
      girl.y = lerp(y0, y1, k); girl.climb = k * dur * 2;
      girl.setPose(Math.floor(k * dur * 4) % 2 ? 'climbA' : 'climbB');
      const rung = Math.floor(k * dur * 4);
      if (rung !== lastRung) { lastRung = rung; audio.metal(this.pan(girl.x), 2.2); }
    }, E.lin);
    girl.climbing = false; girl.setPose(null);
    yield* girl.walkTo(this.wx(L.deck.x1) - 14, y1);
    girl.facing = 1;
    girl.lookAt(this.wx(L.tank.x0 + 60), T.ys + 40);
    this.step = 'enter';
    g.hints.set('enter', [
      { t: 2.5, fn: () => { girl.jump(30); girl.lookAt(this.wx(L.tank.x0 + 60), T.ys + 40); this.ripple(this.wx(L.tank.x0 + 50), T.ys, 20); } },
      { t: 5.5, fn: () => { girl.setPose('point'); setTimeout(() => girl.setPose(null), 900); } },
      { t: 8.5, fn: () => g.ghost.tap(girl.x, girl.y - 60) },
    ], 16);
  }

  jumpIn() {
    if (this.step !== 'enter') return;
    this.step = 'jumping';
    this.g.hints.clear();
    this.run.run(this.jump());
  }

  *jump() {
    const g = this.g, girl = g.girl, T = this.T();
    const sx = girl.x, sy = girl.y;
    const ex = T.x0 + 70, ey = T.ys + 70;
    girl.say('open', 1); girl.setPose('cheer');
    audio.whoosh(this.pan(sx), 0.1);
    let splashed = false;
    yield* anim(0.75, (k) => {
      girl.x = lerp(sx, ex, k);
      girl.y = lerp(sy, ey, k) - Math.sin(k * Math.PI) * 50;
      if (!splashed && girl.y > T.ys) {
        splashed = true;
        audio.splash(this.pan(girl.x), 1.2);
        splashDrops(g.fx, girl.x, T.ys - 2, 22, 170, T.ys + 2);
        this.ripple(girl.x, T.ys, 60); this.ripple(girl.x, T.ys, 36);
        for (let i = 0; i < 14; i++) this.bubbles.push({ x: girl.x + rand(-20, 20), y: T.ys + rand(10, 60), vy: rand(-60, -20), r: rand(1.5, 4), ph: rand(0, 6) });
        audio.setUnderwater(true);
        girl.drawnByScene = true;
      }
    }, E.lin);
    girl.setPose(null);
    // settle into swimming
    const d = this.diver;
    d.x = girl.x; d.y = girl.y - 60; d.vx = 20; d.vy = 40; d.active = true;
    girl.swim = 1; girl.pivot = 60; girl.zBias = 0;
    this.setCam('swim', 1.4);
    yield () => this.g.cam.settled();
    this.step = 'swim';
    this.setSwimHints();
  }

  setSwimHints() {
    const g = this.g;
    const st = this.step === 'swim' ? [
      { t: 3, fn: () => { this.stone.glint = 1.3; audio.chime(this.pan(this.stone.x), 0.03); this.otter.look = -1; } },
      { t: 6.5, fn: () => { const f = this.fish[0]; if (f) { f.circle = 3; } } },
      { t: 10, fn: () => { g.ghost.drag(this.diver.x, this.diver.y, this.stone.x, this.stone.y - 10, 2.2); } },
    ] : [
      { t: 3, fn: () => { this.otterCall(); } },
      { t: 6.5, fn: () => { this.otterCall(); } },
      { t: 10, fn: () => { g.ghost.drag(this.diver.x, this.diver.y, this.otter.x, this.T().ys + 20, 2.2); } },
    ];
    g.hints.set(this.step, st, 18);
  }

  otterCall() {
    const o = this.otter, T = this.T();
    audio.squeak(this.pan(o.x));
    this.ripple(o.x - 14, T.ys, 18);
    splashDrops(this.g.fx, o.x - 12, T.ys - 3, 4, 50, T.ys + 2);
    audio.drip(this.pan(o.x), 0.06);
  }

  busy() { return !!this.touch || this.g.wardrobe.dragging; }

  // ---------------------------------------------------------------- input
  down(p) {
    const g = this.g;
    if (this.step === 'dress') {
      if (g.wardrobe.down(p)) return;
      const T = this.T();
      if (p.x > T.x0 && p.x < T.x1 && p.y > T.yt && p.y < T.yb + 30) {
        // knock on the glass: fish dart, the pup looks at its stone
        this.knockGlass = 0.3; audio.tone({ type: 'sine', f: 1900, dur: 0.12, gain: 0.05, pan: this.pan(p.x) }); audio.tone({ type: 'sine', f: 2850, dur: 0.08, gain: 0.03, pan: this.pan(p.x) });
        for (const f of this.fish) { f.vx = (f.x > p.x ? 1 : -1) * 80; }
        this.otter.look = -1;
        if (Math.hypot(p.x - this.otter.x, p.y - this.otter.y) < 50) this.otterTry();
      }
      return;
    }
    if (this.step === 'enter') {
      const bb = g.girl.bodyBox();
      const T = this.T();
      if ((p.x > bb.x0 - 30 && p.x < bb.x1 + 30 && p.y > bb.y0 - 20 && p.y < bb.y1 + 20) || (p.x > T.x0 && p.x < T.x1 && p.y > T.ys - 20 && p.y < T.yb)) this.jumpIn();
      return;
    }
    if (this.step === 'swim' || this.step === 'carry') { this.touch = { x: p.x, y: p.y }; return; }
    // after: tapping the otter makes it squeak
    if (Math.hypot(p.x - this.otter.x, p.y - this.otter.y) < 40) { audio.squeak(this.pan(p.x)); this.otter.spin = 1; }
  }
  move(p) {
    if (this.step === 'dress') { this.g.wardrobe.move(p); return; }
    if (this.touch) { this.touch.x = p.x; this.touch.y = p.y; }
  }
  up(p) {
    if (this.step === 'dress') { this.g.wardrobe.up(p); return; }
    this.touch = null;
  }

  // ---------------------------------------------------------------- update
  update(dt) {
    super.update(dt);
    this.tick(dt);
    const g = this.g, girl = g.girl, T = this.T(), d = this.diver;
    if (d.active) {
      // --- simplified, consistent water physics
      const carrying = this.stone.state === 'held';
      if (this.touch) {
        const ax = clamp((this.touch.x - d.x) * 7, -520, 520);
        const ay = clamp((this.touch.y - d.y) * 7, -520, 520) * (carrying && this.touch.y < d.y ? 0.72 : 1);
        d.vx += ax * dt; d.vy += ay * dt;
        d.vx *= Math.exp(-2.4 * dt); d.vy *= Math.exp(-2.4 * dt);
      } else {
        d.vx *= Math.exp(-1.1 * dt); d.vy *= Math.exp(-1.1 * dt);
        d.vy += (carrying ? 34 : -5) * dt; // the stone is heavy; she is almost neutral
      }
      const sp = Math.hypot(d.vx, d.vy), max = carrying ? 130 : 165;
      if (sp > max) { d.vx *= max / sp; d.vy *= max / sp; }
      d.x += d.vx * dt; d.y += d.vy * dt;
      const minY = T.ys + (this.step === 'carry' || this.step === 'exit' ? 14 : 34);
      if (d.x < T.x0 + 26) { d.x = T.x0 + 26; d.vx = Math.abs(d.vx) * 0.3; }
      if (d.x > T.x1 - 26) { d.x = T.x1 - 26; d.vx = -Math.abs(d.vx) * 0.3; }
      if (d.y < minY) { d.y = minY; d.vy = Math.abs(d.vy) * 0.2; }
      if (d.y > T.yb - 34) { d.y = T.yb - 34; d.vy = -Math.abs(d.vy) * 0.2; }
      // body orientation follows motion (swimmer), upright when slow
      const spd = Math.hypot(d.vx, d.vy);
      if (Math.abs(d.vx) > 12) girl.facing = d.vx > 0 ? 1 : -1;
      const want = spd > 35 ? Math.atan2(d.vx, -d.vy) : 0.25 * girl.facing;
      girl.rot += angDiff(girl.rot, clamp(want, -2.4, 2.4)) * Math.min(1, dt * 3);
      girl.kick = clamp(spd / 120, 0, 1);
      girl.hairFlow = { x: -d.vx / (spd + 20), y: -d.vy / (spd + 20) - 0.25 };
      girl.x = d.x; girl.y = d.y + 60;
      girl.setPose(carrying ? 'hold' : spd > 40 ? 'swim' : null);
      // exhaled bubbles rise from the regulator
      this.bubT -= dt * (1 + spd / 80);
      if (this.bubT < 0) {
        this.bubT = rand(1.1, 1.8);
        const hp = this.headWorld();
        const n = 2 + ((Math.random() * 3) | 0);
        for (let i = 0; i < n; i++) this.bubbles.push({ x: hp.x + rand(-3, 3), y: hp.y + rand(-2, 2), vy: rand(-30, -15), r: rand(1.5, 3.5), ph: rand(0, 6) });
        audio.bubble(this.pan(hp.x), 0.06);
      }
      // reach the stone
      if (this.step === 'swim') {
        const h = girl.handWorld('R');
        if (Math.hypot(h.x - this.stone.x, h.y - this.stone.y) < 38 || Math.hypot(d.x - this.stone.x, d.y - this.stone.y) < 48) this.grabStone();
      }
      if (this.step === 'carry' && d.y <= T.ys + 36) this.surface();
      if (this.stone.state === 'held') {
        const hr = girl.handWorld('R'), hl = girl.handWorld('L');
        this.stone.x = (hr.x + hl.x) / 2; this.stone.y = (hr.y + hl.y) / 2 + 4;
      }
      // seaweed bends away from her
      for (const w of this.weeds) {
        const dx = w.x - d.x;
        const near = Math.abs(dx) < 60 && d.y > T.yb - w.h - 60;
        w.bend = damp(w.bend, near ? clamp(d.vx * 0.006 + Math.sign(dx) * 0.25, -0.7, 0.7) : 0, 3, dt);
      }
    }
  }

  headWorld() {
    const girl = this.g.girl;
    const c = Math.cos(girl.rot), s = Math.sin(girl.rot);
    const lx = 6 * girl.facing, ly = -33 + 8;
    return { x: this.diver.x + lx * c - ly * s, y: this.diver.y + lx * s + ly * c };
  }

  grabStone() {
    const g = this.g, T = this.T();
    this.step = 'carry';
    g.hints.clear();
    this.stone.state = 'held';
    audio.shellKnock(this.pan(this.stone.x));
    audio.thud(this.pan(this.stone.x), 0.08);
    // sand lifts and settles slowly; a trapped air bubble escapes upward
    for (let i = 0; i < 14; i++) this.sand.push({ x: this.stone.x + rand(-14, 14), y: T.yb - rand(2, 8), vx: rand(-25, 25), vy: rand(-40, -10), t: 0, life: rand(1.8, 3), r: rand(1, 2.4) });
    this.bubbles.push({ x: this.stone.x, y: this.stone.y, vy: -20, r: 6.5, ph: 0, big: true });
    audio.bubble(this.pan(this.stone.x), 0.1);
    this.otter.look = -1;
    g.girl.say('happy', 1);
    this.setSwimHints();
  }

  surface() {
    if (this.surfaced) return;
    this.surfaced = true;
    this.step = 'give';
    this.g.hints.clear();
    this.touch = null;
    this.run.run(this.give());
  }

  *give() {
    const g = this.g, girl = g.girl, T = this.T(), o = this.otter, d = this.diver;
    audio.setUnderwater(false);
    audio.splash(this.pan(d.x), 0.4);
    this.ripple(d.x, T.ys, 40);
    splashDrops(g.fx, d.x, T.ys - 4, 10, 90, T.ys + 2);
    // she floats upright at the surface, head out of the water
    const d0 = { x: d.x, y: d.y };
    d.active = false;
    yield* anim(0.5, (k) => { d.y = lerp(d0.y, T.ys + 20, k); girl.rot = lerp(girl.rot, 0, k); girl.y = d.y + 60; girl.x = d.x; });
    girl.setPose('hold');
    // the pup paddles over
    o.tx = d.x + (d.x > this.wx((this.L.tank.x0 + this.L.tank.x1) / 2) ? -48 : 48);
    o.dir = o.tx < d.x ? -1 : 1;
    yield () => Math.abs(o.x - o.tx) < 3;
    // hand over the stone (it is heavy: it dips first)
    const s0 = { x: this.stone.x, y: this.stone.y };
    this.stone.state = 'transfer';
    yield* anim(0.6, (k) => { this.stone.x = lerp(s0.x, o.x - 5 * o.dir, k); this.stone.y = lerp(s0.y, o.y - 14, k) - Math.sin(k * Math.PI) * 10; });
    this.stone.state = 'otter';
    o.hold = 'both';
    audio.squeak(this.pan(o.x));
    girl.setPose(null); girl.say('open', 1.5);
    // she climbs out; the pup cracks its clam on its belly
    this.run.run(this.otterFeast());
    yield 0.5;
    yield* this.exit();
  }

  *otterFeast() {
    const o = this.otter;
    yield 0.8;
    for (let i = 0; i < 4; i++) {
      yield* anim(0.12, (k) => { o.knock = k; });
      audio.shellKnock(this.pan(o.x));
      yield* anim(0.12, (k) => { o.knock = 1 - k; });
      yield 0.12;
    }
    yield* anim(0.3, (k) => { o.clamOpen = k; });
    o.happy = true;
    audio.squeak(this.pan(o.x));
    yield 0.6;
    o.spin = 1;
    audio.splash(this.pan(o.x), 0.3);
  }

  *exit() {
    const g = this.g, girl = g.girl, T = this.T(), L = this.L, d = this.diver;
    this.step = 'exit';
    // swim to the deck edge
    const tx = T.x0 + 30;
    const x0 = d.x;
    girl.facing = tx < x0 ? -1 : 1;
    yield* anim(Math.abs(tx - x0) / 110 + 0.2, (k) => { d.x = lerp(x0, tx, k); girl.x = d.x; girl.y = T.ys + 80 + Math.sin(k * 20) * 1.5; girl.rot = 0; });
    // pull up onto the deck, water pouring off
    const deckY = L.deck.y - 2;
    this.setCam('rim', 1.6);
    girl.zBias = 600; girl.drawnByScene = false;
    audio.splash(this.pan(girl.x), 0.5);
    yield* anim(0.6, (k) => { girl.y = lerp(T.ys + 80, deckY, E.inOut(k)); girl.x = lerp(tx, this.wx(L.deck.x1) - 16, k); });
    girl.drawnByScene = false; girl.swim = 0; girl.pivot = 0; girl.rot = 0; girl.kick = 0; girl.hairFlow = null;
    girl.wet = 1;
    splashDrops(g.fx, girl.x, girl.y - 40, 16, 60, deckY + 1);
    audio.drip(this.pan(girl.x), 0.08);
    girl.facing = -1;
    yield 0.3;
    // down the ladder
    yield* girl.walkTo(this.wx(L.ladder.x) - 4, deckY);
    girl.climbing = true; girl.facing = 1;
    const y0 = girl.y, y1 = L.ladder.y0;
    const dur = Math.abs(y1 - y0) / 140;
    let last = 0;
    yield* anim(dur, (k) => { girl.y = lerp(y0, y1, k); girl.climb = k * dur * 2; girl.setPose(Math.floor(k * dur * 4) % 2 ? 'climbA' : 'climbB'); const r = Math.floor(k * dur * 4); if (r !== last) { last = r; audio.metal(this.pan(girl.x), 2.2); } }, E.lin);
    girl.climbing = false; girl.setPose(null); girl.zBias = 0; girl.noShadow = false;
    this.setCam('overview', 2);
    yield* girl.walkTo(this.wx(L.ladder.x) - 34, L.ladder.y0 + 30);
    girl.facing = 1;
    this.puddle = { x: girl.x, y: girl.y + 2, r: 4 };
    girl.lookAt(this.otter.x, this.otter.y);
    yield 2.2;
    girl.say('happy', 1.5); girl.jump(40);
    yield 0.8;
    this.step = 'done';
    this.finish();
  }

  tick(dt) {
    const T = this.T();
    if (!this.fish) this.initLife();
    const o = this.otter;
    // otter bobbing on the surface
    if (o.tx != null) { o.x = damp(o.x, o.tx, 2.2, dt); if (Math.random() < dt * 4) this.ripple(o.x + 20, T.ys, 12); }
    o.y = T.ys - 2 + Math.sin(this.t * 2) * 1.5 + (o.dip || 0);
    if (o.spin > 0) { o.spin = Math.max(0, o.spin - dt * 0.8); o.roll = Math.abs(Math.sin(o.spin * Math.PI * 2)) * 0.9; }
    this.ball.ph += dt;
    // aerator bubbles
    this.aerT -= dt;
    if (this.aerT < 0) { this.aerT = 0.18; this.bubbles.push({ x: this.wx(this.L.aer.x) + rand(-2, 2), y: T.yb - 8, vy: -20, r: rand(1, 2.4), ph: rand(0, 6), quiet: true }); }
    for (const b of this.bubbles) {
      b.ph += dt * 6; b.vy = Math.max(-110, b.vy - 70 * dt); b.y += b.vy * dt; b.x += Math.sin(b.ph) * (b.big ? 12 : 6) * dt;
      if (b.y < T.ys + 2) {
        b.dead = true;
        if (!b.quiet || Math.random() < 0.1) this.ripple(b.x, T.ys, b.big ? 26 : 8);
        if (b.big) { audio.bubble(this.pan(b.x), 0.1); splashDrops(this.g.fx, b.x, T.ys - 2, 4, 40, T.ys + 2); }
      }
    }
    this.bubbles = this.bubbles.filter((b) => !b.dead);
    for (const r of this.ripples) r.t += dt;
    this.ripples = this.ripples.filter((r) => r.t < 1.2);
    for (const s of this.sand) { s.t += dt; s.vx *= Math.exp(-2 * dt); s.vy = s.vy * Math.exp(-2.5 * dt) + 14 * dt; s.x += s.vx * dt; s.y = Math.min(T.yb - 1, s.y + s.vy * dt); }
    this.sand = this.sand.filter((s) => s.t < s.life);
    // fish
    const d = this.diver;
    for (const f of this.fish) {
      f.ph += dt * 8;
      if (f.circle > 0) {
        f.circle -= dt;
        const a = this.t * 2;
        f.x = damp(f.x, this.stone.x + Math.cos(a) * 30, 3, dt); f.y = damp(f.y, this.stone.y - 20 + Math.sin(a) * 12, 3, dt);
        f.vx = -Math.sin(a) * 30;
        continue;
      }
      if (d.active) {
        const dx = f.x - d.x, dy = f.y - d.y, dd = Math.hypot(dx, dy);
        if (dd < 70) { f.vx += (dx / dd) * 200 * dt; f.y += (dy / dd) * 40 * dt; }
      }
      f.vx = clamp(f.vx, -90, 90);
      if (Math.abs(f.vx) < 16) f.vx = (f.vx < 0 ? -1 : 1) * 16;
      f.vx *= Math.exp(-0.4 * dt) * 1 + 0;
      f.x += f.vx * dt; f.y += Math.sin(f.ph * 0.2) * 6 * dt;
      if (f.x < T.x0 + 16) { f.x = T.x0 + 16; f.vx = Math.abs(f.vx); }
      if (f.x > T.x1 - 16) { f.x = T.x1 - 16; f.vx = -Math.abs(f.vx); }
      f.y = clamp(f.y, T.ys + 24, T.yb - 20);
    }
    this.stone.glint = Math.max(0, this.stone.glint - dt);
    this.knockGlass = Math.max(0, this.knockGlass - dt);
    if (this.puddle) { this.puddle.r = Math.min(20, this.puddle.r + dt * 5 * (this.g.girl.wet + 0.2)); }
    // idle dive attempts before help arrives
    if (this.step === 'dress' || this.step === 'pre') {
      this.diveT -= dt;
      if (this.diveT < 0) { this.diveT = rand(5, 7); if (this.g.current === this) this.otterTry(); }
    }
  }
  idle(dt) { super.idle(dt); this.tick(dt); }

  // ---------------------------------------------------------------- drawing
  drawFloor(ctx) {
    const T = this.T();
    ctx.fillStyle = 'rgba(200,205,210,0.6)';
    rr(ctx, T.x0 - 90, T.yb + 30, T.x1 - T.x0 + 120, 26, 6);
    if (this.puddle) {
      const p = this.puddle;
      ctx.fillStyle = 'rgba(110,160,190,0.35)'; ell(ctx, p.x, p.y, p.r * 1.6, p.r * 0.45); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.45)'; ell(ctx, p.x - p.r * 0.5, p.y - p.r * 0.1, p.r * 0.5, p.r * 0.1); ctx.fill();
    }
  }

  collect(list) {
    const T = this.T();
    list.push({ z: T.yb + 40, draw: (c) => this.drawTank(c) });
  }

  drawTank(ctx) {
    const T = this.T(), L = this.L, t = this.t;
    const girl = this.g.girl;
    const plinthTop = T.yb, plinthBot = T.yb + (this.P ? 40 : 44);
    // plinth
    shadow(ctx, (T.x0 + T.x1) / 2, plinthBot, (T.x1 - T.x0) / 2 + 30, 10, 0.2);
    rr(ctx, T.x0 - 14, plinthTop - 4, T.x1 - T.x0 + 28, plinthBot - plinthTop + 4, 4); fillStroke(ctx, C.stone, C.line, 1.5);
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillRect(T.x0 - 12, plinthTop - 2, T.x1 - T.x0 + 24, 4);
    ctx.strokeStyle = 'rgba(100,90,80,0.3)'; ctx.lineWidth = 1;
    for (let x = T.x0 + 20; x < T.x1; x += 44) { ctx.beginPath(); ctx.moveTo(x, plinthTop + 4); ctx.lineTo(x, plinthBot); ctx.stroke(); }
    // back wall + water
    ctx.save();
    rr(ctx, T.x0, T.yt, T.x1 - T.x0, T.yb - T.yt, 3); ctx.clip();
    ctx.fillStyle = '#e9f5f7'; ctx.fillRect(T.x0, T.yt, T.x1 - T.x0, T.ys - T.yt + 4);
    const wg = ctx.createLinearGradient(0, T.ys, 0, T.yb);
    wg.addColorStop(0, '#8fd6e6'); wg.addColorStop(1, '#3d9fc2');
    ctx.fillStyle = wg;
    ctx.beginPath();
    ctx.moveTo(T.x0, T.yb);
    for (let x = T.x0; x <= T.x1 + 1; x += 10) ctx.lineTo(x, T.ys + Math.sin(x * 0.05 + t * 2) * 1.6);
    ctx.lineTo(T.x1, T.yb); ctx.closePath(); ctx.fill();
    // caustic light
    ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 2;
    for (let i = 0; i < 9; i++) {
      const x = T.x0 + ((i * 53 + t * 12) % (T.x1 - T.x0));
      ctx.beginPath(); ctx.moveTo(x, T.ys + 8); ctx.quadraticCurveTo(x + 18 + Math.sin(t + i) * 10, (T.ys + T.yb) / 2, x - 10, T.yb); ctx.stroke();
    }
    // sand
    ctx.fillStyle = '#e6d3a3';
    ctx.beginPath(); ctx.moveTo(T.x0, T.yb);
    for (let x = T.x0; x <= T.x1 + 1; x += 12) ctx.lineTo(x, T.yb - 16 - Math.sin(x * 0.04) * 4);
    ctx.lineTo(T.x1, T.yb); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(180,150,100,0.4)'; ctx.lineWidth = 1;
    for (let x = T.x0 + 10; x < T.x1; x += 26) { ctx.beginPath(); ctx.moveTo(x, T.yb - 8); ctx.quadraticCurveTo(x + 8, T.yb - 11, x + 16, T.yb - 8); ctx.stroke(); }
    // rocks
    for (const r of L.rocks) {
      const x = this.wx(r.x);
      ell(ctx, x, T.yb - 12, r.r, r.r * 0.7); fillStroke(ctx, '#9aa0a3', C.line, 1.3);
      ctx.fillStyle = 'rgba(255,255,255,0.25)'; ell(ctx, x - r.r * 0.3, T.yb - 12 - r.r * 0.35, r.r * 0.4, r.r * 0.15); ctx.fill();
    }
    // aerator
    const ax = this.wx(L.aer.x);
    rr(ctx, ax - 6, T.yb - 12, 12, 6, 3); fillStroke(ctx, '#8d969d', C.line, 1);
    // seaweed
    for (const w of this.weeds) this.drawWeed(ctx, w, T);
    // stone on the sand
    if (this.stone.state === 'bottom') {
      ctx.fillStyle = 'rgba(40,60,70,0.25)'; ell(ctx, this.stone.x + 2, this.stone.y + 8, 11, 3); ctx.fill();
      drawStone(ctx, this.stone.x, this.stone.y);
      if (this.stone.glint > 0) glint(ctx, this.stone.x - 3, this.stone.y - 6, 7, Math.sin(this.stone.glint * 5));
    }
    // fish
    for (const f of this.fish) this.drawFish(ctx, f);
    // sand cloud
    for (const s of this.sand) { ctx.fillStyle = `rgba(230,210,160,${0.8 * (1 - s.t / s.life)})`; circ(ctx, s.x, s.y, s.r); ctx.fill(); }
    // the diver
    if (girl.drawnByScene) {
      girl.draw(ctx);
      if (this.stone.state === 'held' || this.stone.state === 'transfer') drawStone(ctx, this.stone.x, this.stone.y);
    }
    // bubbles
    for (const b of this.bubbles) {
      ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.lineWidth = 1;
      circ(ctx, b.x, b.y, b.r); ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.35)'; circ(ctx, b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.35); ctx.fill();
    }
    // water tint over everything submerged
    ctx.fillStyle = 'rgba(40,130,170,0.12)';
    ctx.fillRect(T.x0, T.ys, T.x1 - T.x0, T.yb - T.ys);
    ctx.restore();
    // surface line + ripples (drawn unclipped a bit above)
    ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.lineWidth = 1.6;
    ctx.beginPath();
    for (let x = T.x0; x <= T.x1 + 1; x += 10) { const y = T.ys + Math.sin(x * 0.05 + t * 2) * 1.6; if (x === T.x0) ctx.moveTo(x, y); else ctx.lineTo(x, y); }
    ctx.stroke();
    for (const r of this.ripples) {
      const k = r.t / 1.2;
      ctx.strokeStyle = `rgba(255,255,255,${0.8 * (1 - k)})`; ctx.lineWidth = 1.2;
      ell(ctx, r.x, r.y, r.s * (0.3 + k), r.s * (0.3 + k) * 0.18); ctx.stroke();
    }
    // floating ball (light, full of air: it rides the surface)
    const bx = this.ball.x + Math.sin(this.ball.ph * 0.5) * 20;
    const by = T.ys - 4 + Math.sin(this.ball.ph * 2 + 1) * 1.5;
    circ(ctx, bx, by, 7); fillStroke(ctx, '#ffffff', C.line, 1.2);
    ctx.fillStyle = '#e9725e'; ctx.beginPath(); ctx.arc(bx, by, 7, -0.6, 0.9); ctx.lineTo(bx, by); ctx.fill();
    ctx.fillStyle = '#5b8fd6'; ctx.beginPath(); ctx.arc(bx, by, 7, 1.9, 3.3); ctx.lineTo(bx, by); ctx.fill();
    circ(ctx, bx, by, 7); ctx.strokeStyle = C.line; ctx.lineWidth = 1.2; ctx.stroke();
    // otter
    drawOtter(ctx, this.otter, t);
    // she floats at the surface when giving the stone
    if (girl.drawnByScene && (this.step === 'give' || this.step === 'exit')) {
      ctx.save(); rr(ctx, T.x0, T.yt, T.x1 - T.x0, T.ys - T.yt + 2, 0); ctx.clip();
      girl.draw(ctx);
      ctx.restore();
    }
    // glass: frame + reflections
    ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 10;
    ctx.beginPath(); ctx.moveTo(T.x0 + 40, T.yt + 10); ctx.lineTo(T.x0 + 110, T.yb - 10); ctx.stroke();
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(T.x0 + 70, T.yt + 10); ctx.lineTo(T.x0 + 140, T.yb - 10); ctx.stroke();
    if (this.knockGlass > 0) { ctx.strokeStyle = `rgba(255,255,255,${this.knockGlass * 2})`; ctx.lineWidth = 2; rr(ctx, T.x0 + 2, T.yt + 2, T.x1 - T.x0 - 4, T.yb - T.yt - 4, 3); ctx.stroke(); }
    ctx.strokeStyle = '#5d6d75'; ctx.lineWidth = 5;
    rr(ctx, T.x0, T.yt, T.x1 - T.x0, T.yb - T.yt, 3); ctx.stroke();
    ctx.strokeStyle = C.line; ctx.lineWidth = 1.2; rr(ctx, T.x0 - 2.5, T.yt - 2.5, T.x1 - T.x0 + 5, T.yb - T.yt + 5, 4); ctx.stroke();
    rr(ctx, T.x0 - 6, T.yt - 6, T.x1 - T.x0 + 12, 8, 3); fillStroke(ctx, '#7c8c94', C.line, 1.2);
    // deck + ladder
    this.drawDeck(ctx);
  }

  drawDeck(ctx) {
    const L = this.L, T = this.T();
    const lx = this.wx(L.ladder.x);
    const d0 = this.wx(L.deck.x0), d1 = this.wx(L.deck.x1);
    // posts under the deck
    rr(ctx, d0 + 4, L.deck.y, 6, L.ladder.y0 - L.deck.y, 2); fillStroke(ctx, '#8d969d', C.line, 1.1);
    // ladder
    for (const s of [-12, 12]) limb(ctx, lx + s, L.ladder.y0, lx + s, L.ladder.y1 - 20, 3.5, '#c3cbd1', C.line, 1.1);
    for (let y = L.ladder.y0 - 16; y > L.ladder.y1; y -= 22) limb(ctx, lx - 12, y, lx + 12, y, 3, '#c3cbd1', C.line, 1);
    // deck planks
    plank(ctx, d0, L.deck.y, d1 - d0, 7, C.wood, 4);
    // railing
    limb(ctx, d0 + 4, L.deck.y, d0 + 4, L.deck.y - 34, 3, '#c3cbd1', C.line, 1);
    limb(ctx, d0 + 4, L.deck.y - 34, lx - 14, L.deck.y - 34, 3, '#c3cbd1', C.line, 1);
  }

  drawWeed(ctx, w, T) {
    const segs = 6;
    let x = w.x, y = T.yb - 12;
    let a = 0;
    ctx.strokeStyle = '#4f9a58'; ctx.lineCap = 'round';
    for (let i = 0; i < segs; i++) {
      a += Math.sin(this.t * 1.3 + w.ph + i * 0.6) * 0.12 + w.bend * 0.25;
      const nx = x + Math.sin(a) * (w.h / segs), ny = y - Math.cos(a) * (w.h / segs);
      ctx.lineWidth = 5 - i * 0.6;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(nx, ny); ctx.stroke();
      x = nx; y = ny;
    }
  }

  drawFish(ctx, f) {
    ctx.save(); ctx.translate(f.x, f.y); ctx.scale((f.vx < 0 ? -1 : 1) * f.s, f.s);
    const wag = Math.sin(f.ph) * 3;
    ctx.fillStyle = f.col; ctx.strokeStyle = C.line; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(-8, 0); ctx.lineTo(-15, -5 + wag); ctx.lineTo(-15, 5 + wag); ctx.closePath(); ctx.fill(); ctx.stroke();
    ell(ctx, 0, 0, 9, 5.5); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff'; circ(ctx, 4.5, -1.5, 1.6); ctx.fill();
    ctx.fillStyle = '#222'; circ(ctx, 5, -1.5, 0.8); ctx.fill();
    ctx.restore();
  }

  debugTargets() {
    return { stone: { x: this.stone.x, y: this.stone.y }, otter: { x: this.otter.x, y: this.otter.y + 30 }, diver: { x: this.diver.x, y: this.diver.y }, surface: { x: this.otter.x, y: this.T().ys + 24 } };
  }
}
