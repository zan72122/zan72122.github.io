// Scene 2: a gust tears a roof board and a perch off the birdhouse.
// Carpenter outfit -> seat the board, turn the big wing screw, push the perch
// into its hole and knock it home with the mallet.  One bird tests it first.
import { Scene } from './base.js';
import { ST } from '../world.js';
import { clamp, lerp, damp, E, anim, inv, rand, TAU, angDiff, qbez } from '../util.js';
import { C, rr, ell, circ, fillStroke, plank, shadow, leafClump, limb, glint } from '../draw.js';
import { audio } from '../audio.js';
import { dustPuff } from '../fx.js';

// ------------------------------------------------------------------ birds
const BIRD_COLS = [
  { body: '#b9754a', belly: '#f08a4b', head: '#b9754a' }, // robin
  { body: '#5b8fd6', belly: '#f6d55c', head: '#5b8fd6' }, // blue tit
  { body: '#f4c542', belly: '#fbe38a', head: '#f4c542' }, // canary
  { body: '#6fb88a', belly: '#d8efc0', head: '#6fb88a' }, // green
];

export class Bird {
  constructor(i, x, y) {
    this.c = BIRD_COLS[i % BIRD_COLS.length]; this.i = i;
    this.x = x; this.y = y; this.state = 'perch'; this.facing = -1; this.t = rand(0, 5);
    this.hop = 0; this.tilt = 0; this.flap = 0; this.look = 0; this.peckT = 0; this.scale = 1; this.alpha = 1;
    this.fly = null; this.carry = null;
  }
  flyTo(x, y, dur = 1, arc = 40, onLand) {
    this.fly = { sx: this.x, sy: this.y, x, y, t: 0, dur, arc, onLand };
    this.state = 'fly';
    this.facing = x > this.x ? 1 : -1;
  }
  update(dt, game) {
    this.t += dt;
    if (this.state === 'fly' && this.fly) {
      const f = this.fly;
      f.t += dt;
      const k = E.inOut(Math.min(1, f.t / f.dur));
      const cx = (f.sx + f.x) / 2, cy = Math.min(f.sy, f.y) - f.arc;
      const p = qbez(f.sx, f.sy, cx, cy, f.x, f.y, k);
      this.x = p.x; this.y = p.y + Math.sin(this.t * 22) * 1.2;
      this.flap += dt * 30;
      if (f.t >= f.dur) {
        this.x = f.x; this.y = f.y; this.state = 'perch'; this.fly = null;
        if (f.onLand) f.onLand(this);
      }
    } else if (this.state === 'hover') {
      this.flap += dt * 34;
      this.y += Math.sin(this.t * 6) * 0.25;
    } else {
      this.hop = Math.max(0, this.hop - dt * 4);
      this.peckT = Math.max(0, this.peckT - dt);
      if (Math.random() < dt * 0.35) this.tilt = rand(-0.35, 0.35);
    }
  }
  draw(ctx) {
    ctx.save();
    ctx.globalAlpha *= this.alpha;
    const hopY = -Math.sin(this.hop * Math.PI) * 5;
    ctx.translate(this.x, this.y + hopY);
    ctx.scale(this.facing * this.scale, this.scale);
    const c = this.c;
    const flying = this.state === 'fly' || this.state === 'hover';
    if (!flying) {
      ctx.strokeStyle = '#8a5a3a'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(-1, -2); ctx.lineTo(-2, 0); ctx.moveTo(2, -2); ctx.lineTo(2, 0); ctx.stroke();
    }
    // tail
    ctx.fillStyle = c.body; ctx.strokeStyle = C.line; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(-6, -7); ctx.lineTo(-15, -11 + (flying ? 3 : 0)); ctx.lineTo(-14, -5); ctx.closePath(); ctx.fill(); ctx.stroke();
    // body
    ell(ctx, 0, -8, 8.5, 7); fillStroke(ctx, c.body, C.line, 1.1);
    ctx.fillStyle = c.belly; ell(ctx, 2.5, -6, 5.5, 4.5); ctx.fill();
    // head
    const peck = this.peckT > 0 ? Math.sin(this.peckT * 30) * 0.4 + 0.3 : 0;
    ctx.save(); ctx.translate(5, -14); ctx.rotate(this.tilt * 0.6 + peck);
    circ(ctx, 0, 0, 5.8); fillStroke(ctx, c.head, C.line, 1.1);
    ctx.fillStyle = '#f2a93b'; ctx.beginPath(); ctx.moveTo(5, -1.5); ctx.lineTo(9.5, 0.5); ctx.lineTo(5, 2); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#2a2320'; circ(ctx, 2.5, -1, 1.3); ctx.fill();
    ctx.fillStyle = '#fff'; circ(ctx, 2.1, -1.5, 0.45); ctx.fill();
    ctx.restore();
    // wing
    ctx.save(); ctx.translate(-1, -9);
    if (flying) ctx.rotate(-0.9 + Math.sin(this.flap) * 0.9);
    ell(ctx, -1, 0, 7, 4, 0.2); fillStroke(ctx, c.body, C.line, 1);
    ctx.restore();
    if (this.carry) this.carry(ctx);
    ctx.restore();
  }
}

// ------------------------------------------------------------------ scene
export class AviaryScene extends Scene {
  constructor(g) { super(g, 'aviary', ST.aviary); this.range = [-520, 520]; }

  reset() {
    super.reset();
    this.wind = 0; this.sway = 0;
    this.board = { state: 'attached', lift: 0, x: 0, y: 0, ang: 0, vx: 0, vy: 0, seat: 1, flat: 0, wig: 0 };
    this.perch = { state: 'attached', x: 0, y: 0, ang: 0, depth: 14, wig: 0 };
    this.screw = { state: 'none', turns: 0, ang: 0, acc: 0, x: 0, y: 0 };
    this.shake = 0;
    this.swing = null; this.hits = 0;
    this.slotPulse = 0; this.glintT = 0;
    this.birds = null;
    this.drag = null;
  }

  layoutL() {
    const P0 = { x: 90, y: -40 };
    const tree = { x: 262, y: -58 };
    return this._mk(P0, tree, { girl: { x: -125, y: 0 }, rack: { x: -262, y: 0 } }, {
      overview: { x: -350, y: -350, w: 690, h: 395 },
      work: { x: -45, y: -222, w: 330, h: 262 },
    }, { boardRest: { x: P0.x + 92, y: P0.y + 28 }, perchRest: { x: P0.x + 30, y: P0.y + 40 } });
  }
  layoutP() {
    const P0 = { x: -18, y: -250 };
    const tree = { x: 128, y: -268 };
    return this._mk(P0, tree, { girl: { x: 60, y: 0 }, rack: { x: -77, y: 0 } }, {
      overview: { x: -160, y: -560, w: 320, h: 612 },
      work: { x: -130, y: -470, w: 262, h: 330 },
    }, { boardRest: { x: P0.x + 80, y: P0.y + 30 }, perchRest: { x: P0.x + 26, y: P0.y + 44 } });
  }
  _mk(P0, tree, base, frames, rest) {
    const d = { x: 18, y: -12 };
    const A = { x: P0.x, y: P0.y - 150 }, Er = { x: P0.x + 56, y: P0.y - 108 }, El = { x: P0.x - 56, y: P0.y - 108 };
    const holeR = { x: P0.x + 22, y: P0.y - 72 };
    const pdir = { x: -0.8, y: 0.55 };
    const PE = { x: holeR.x + pdir.x * 14, y: holeR.y + pdir.y * 14 };
    const girlWork = { x: PE.x - 57, y: PE.y + 96 };
    const branches = [
      { a: { x: tree.x, y: tree.y - 95 }, b: { x: tree.x - 78, y: tree.y - 128 } },
      { a: { x: tree.x, y: tree.y - 132 }, b: { x: tree.x + 60, y: tree.y - 170 } },
      { a: { x: tree.x, y: tree.y - 150 }, b: { x: tree.x - 50, y: tree.y - 196 } },
    ];
    const spots = [
      { x: tree.x - 66, y: tree.y - 124 }, { x: tree.x - 44, y: tree.y - 115 },
      { x: tree.x - 42, y: tree.y - 189 }, { x: tree.x - 22, y: tree.y - 172 },
    ];
    const homes = [
      { x: P0.x + 22 - 10, y: P0.y - 74, enter: false }, // right perch (tester)
      { x: P0.x - 22 - 10, y: P0.y - 74 },
      { x: P0.x + 9, y: P0.y - 150 },
      { x: P0.x + 40, y: P0.y - 122 },
    ];
    return { ...base, P0, tree, d, A, Er, El, holeR, pdir, PE, girlWork, branches, spots, homes, frames, ...rest };
  }

  prepare() { this.reset(); this.layout(); this.initBirds(); }
  girlSpot() {
    if (['board', 'placed', 'screw', 'screwed', 'perch', 'hammer'].includes(this.step)) return this.W(this.L.girlWork);
    return super.girlSpot();
  }
  onRelayout() {
    const L = this.L, O = this.prevL;
    this.drag = null; this.swing = null;
    const b = this.board, pr = this.perch;
    if (['ground', 'fall', 'drag'].includes(b.state)) { const r = this.W(L.boardRest); b.x = r.x; b.y = r.y; b.state = 'ground'; b.ang = 0.12; b.flat = 1; }
    if (['ground', 'fall', 'drag'].includes(pr.state)) { const r = this.W(L.perchRest); pr.x = r.x; pr.y = r.y; pr.state = 'ground'; pr.ang = 0.1; }
    for (const bd of this.birds || []) {
      if (bd.state !== 'perch') continue;
      let best = null, bdist = 1e9;
      [['spots', O.spots, L.spots], ['homes', O.homes, L.homes]].forEach(([, os, ns]) => os.forEach((p, i) => {
        const d = Math.hypot(bd.x - this.wx(p.x), bd.y - p.y);
        if (d < bdist) { bdist = d; best = ns[i]; }
      }));
      if (best && bdist < 40) { bd.x = this.wx(best.x); bd.y = best.y; }
    }
  }
  initBirds() {
    const L = this.L;
    this.birds = L.homes.map((h, i) => { const b = new Bird(i, this.wx(h.x), h.y); b.facing = i % 2 ? 1 : -1; return b; });
  }

  enter() {
    const g = this.g;
    if (!this.birds) this.initBirds();
    this.step = 'gust';
    g.girl.lookAt(this.wx(this.L.P0.x), this.L.P0.y - 110);
    this.run.run(this.gust());
  }

  // world helpers
  W(p) { return { x: this.wx(p.x), y: p.y }; }
  seatCorners() {
    const L = this.L;
    const A = this.W(L.A), E_ = this.W(L.Er), d = L.d;
    return [A, E_, { x: E_.x + d.x, y: E_.y + d.y }, { x: A.x + d.x, y: A.y + d.y }];
  }
  seatCenter() { const c = this.seatCorners(); return { x: (c[0].x + c[2].x) / 2, y: (c[0].y + c[2].y) / 2 }; }
  seatAng() { const L = this.L; return Math.atan2(L.Er.y - L.A.y, L.Er.x - L.A.x); }
  screwPos() { const c = this.seatCorners(); return { x: lerp(c[0].x, c[1].x, 0.72) + this.L.d.x * 0.5, y: lerp(c[0].y, c[1].y, 0.72) + this.L.d.y * 0.5 }; }
  holeW() { return this.W(this.L.holeR); }

  *gust() {
    const g = this.g, L = this.L;
    const b = this.board, pr = this.perch;
    yield 0.4;
    audio.wind(-0.6);
    // leaves blow across: the cause is visible
    let spawn = 0;
    const self = this;
    this.run.run((function* () {
      yield* anim(2.6, (k) => { self.wind = Math.sin(k * Math.PI); }, E.lin);
      self.wind = 0;
    })());
    this.run.run((function* () {
      let t = 0;
      while (t < 2.4) {
        const dt = yield; t += dt || 0;
        spawn += (dt || 0) * 16;
        while (spawn > 1) {
          spawn--;
          const vb = g.viewBounds();
          g.fx.add({ type: 'leaf', x: vb.x0 - 10, y: lerp(vb.y0, vb.y1, rand(0.15, 0.75)), vx: rand(260, 380), vy: rand(-30, 30), vr: rand(-6, 6), life: 3, size: rand(3.8, 5.8), color: ['#e2b64a', '#c98a4a', '#7fb24e', '#d9c35a'][(Math.random() * 4) | 0], update: (p, d) => { p.vy += Math.sin(p.t * 5 + p.size) * 60 * d; } });
          if (Math.random() < 0.35) {
            // picture-book wind streaks
            const y0 = lerp(vb.y0, vb.y1, rand(0.1, 0.7));
            g.fx.add({ type: 'custom', x: vb.x0 - 60, y: y0, vx: rand(420, 520), life: 1.6, len: rand(50, 90), draw: (c, p, k) => {
              c.globalAlpha = 0.55 * Math.sin(k * Math.PI);
              c.strokeStyle = '#ffffff'; c.lineWidth = 2; c.lineCap = 'round';
              c.beginPath(); c.moveTo(p.x - p.len, p.y); c.quadraticCurveTo(p.x - p.len * 0.4, p.y - 8, p.x, p.y - 2); c.stroke();
            } });
          }
        }
      }
    })());
    // birds startle and flee to the tree
    yield 0.5;
    this.birds.forEach((bd, i) => {
      setTimeout(() => {
        const s = L.spots[i];
        audio.chirp(this.pan(bd.x), 0.9, i);
        bd.flyTo(this.wx(s.x), s.y, 0.9 + i * 0.1, 30);
      }, i * 110);
    });
    // the loose board flaps and tears off
    for (let i = 0; i < 3; i++) {
      yield* anim(0.22, (k) => { b.lift = Math.sin(k * Math.PI) * (0.18 + i * 0.12); }, E.lin);
      audio.wood(this.pan(this.wx(L.A.x)), 1.3, 0.12 + i * 0.05);
    }
    audio.creak(this.pan(this.wx(L.A.x)), 1.4);
    yield* anim(0.2, (k) => { b.lift = 0.55 * k; });
    // flying off with gravity to its resting place
    b.state = 'flying';
    const c0 = this.seatCenter();
    const rest = this.W(L.boardRest);
    const a0 = this.seatAng() - 0.55;
    audio.whoosh(this.pan(c0.x), 0.14);
    this.shake = 0.4;
    yield* anim(0.85, (k) => {
      b.x = lerp(c0.x, rest.x, k); b.y = lerp(c0.y, rest.y, k * k) - Math.sin(k * Math.PI) * 26;
      b.ang = a0 + k * 2.2 * Math.PI * 0.5; b.seat = 1 - Math.min(1, k * 3); b.flat = k;
    }, E.lin);
    b.state = 'ground'; b.ang = 0.12; b.flat = 1; b.seat = 0;
    audio.wood(this.pan(rest.x), 0.9, 0.35); dustPuff(g.fx, rest.x, rest.y + 4, 6);
    yield* anim(0.25, (k) => { b.y = rest.y - Math.sin(k * Math.PI) * 7; b.ang = 0.12 - Math.sin(k * Math.PI) * 0.15; }, E.lin);
    audio.wood(this.pan(rest.x), 1.1, 0.15);
    // the shaken perch drops out
    yield 0.15;
    pr.state = 'falling';
    const h = this.holeW();
    const pRest = this.W(L.perchRest);
    audio.wood(this.pan(h.x), 1.6, 0.1);
    yield* anim(0.5, (k) => { pr.x = lerp(h.x, pRest.x, k); pr.y = lerp(h.y, pRest.y, k * k); pr.ang = k * 2.5; });
    pr.state = 'ground'; pr.ang = 0.1;
    audio.wood(this.pan(pRest.x), 1.5, 0.2); dustPuff(g.fx, pRest.x, pRest.y + 3, 4);
    yield 0.6;
    // birds wait on the branch, looking at their broken home
    this.birds.forEach((bd) => { bd.facing = bd.x > this.wx(L.P0.x) ? -1 : 1; });
    g.girl.say('o', 1.4);
    this.step = 'dress';
    g.wardrobe.enable('carp', {
      onDressed: () => this.run.run(this.workStart()),
      onWrong: () => { this.birdsLookHome(); setTimeout(() => g.rack.hint('carp'), 700); },
    });
    g.hints.set('dress', [
      { t: 3, fn: () => this.birdsLookHome() },
      { t: 7, fn: () => { g.girl.lookAt(g.rack.x, -110); g.rack.hint('carp'); audio.wood(this.pan(g.rack.x), 1.2, 0.08); } },
      { t: 11, fn: () => { const bb = g.rack.bundle('carp'); if (bb && bb.state === 'hang') g.ghost.drag(bb.x, bb.y + 40, g.girl.x, g.girl.y - 70); } },
      { t: 15, fn: () => { this.birdsLookHome(); g.rack.hint('carp'); } },
    ], 20);
  }

  birdsLookHome() {
    const L = this.L;
    const b = this.birds[0];
    if (!b || b.state !== 'perch') return;
    // one bird flutters toward the house and comes back: "we can't go in"
    const home = this.W(L.homes[0]);
    const s = this.W(L.spots[0]);
    audio.chirp(this.pan(b.x), 0.5, 0);
    b.flyTo(lerp(s.x, home.x, 0.55), lerp(s.y, home.y, 0.55) - 20, 0.55, 12, () => {
      b.flyTo(s.x, s.y, 0.55, 12, () => { b.facing = -1; });
    });
    this.slotPulse = 1.5;
  }

  *workStart() {
    const g = this.g, girl = g.girl, L = this.L;
    this.step = 'approach';
    g.hints.clear();
    girl.held = 'mallet';
    yield 0.2;
    const gw = this.W(L.girlWork);
    yield* girl.walkTo(gw.x, gw.y);
    girl.facing = 1;
    this.setCam('work', 2.4);
    girl.lookAt(this.board.x, this.board.y);
    yield 0.5;
    yield () => g.cam.settled();
    this.step = 'board';
    this.setWorkHints();
  }

  setWorkHints() {
    const g = this.g;
    const st = {
      board: [
        { t: 3, fn: () => { this.slotPulse = 1.6; this.board.wig = 1; audio.wood(this.pan(this.board.x), 1.4, 0.08); g.girl.lookAt(this.board.x, this.board.y); } },
        { t: 6.5, fn: () => { this.birdsLookHome(); } },
        { t: 10, fn: () => { const c = this.seatCenter(); g.ghost.drag(this.board.x, this.board.y, c.x, c.y, 2); } },
      ],
      screw: [
        { t: 3, fn: () => { this.glintT = 1.2; audio.chime(this.pan(this.screwPos().x)); } },
        { t: 6.5, fn: () => { this.screw.wig = 1; g.girl.reachL = this.screwPos(); setTimeout(() => { g.girl.reachL = null; }, 900); audio.screw(this.pan(this.screwPos().x)); } },
        { t: 10, fn: () => { const p = this.screwPos(); g.ghost.circle(p.x, p.y, 26, 2.2); } },
      ],
      perch: [
        { t: 3, fn: () => { this.perch.wig = 1; audio.wood(this.pan(this.perch.x), 1.6, 0.08); this.glintHole = 1.4; } },
        { t: 6.5, fn: () => { this.birdsLookHome(); } },
        { t: 10, fn: () => { const h = this.holeW(); g.ghost.drag(this.perch.x, this.perch.y, h.x, h.y, 2); } },
      ],
      hammer: [
        { t: 2.5, fn: () => { g.girl.setPose('hammerUp'); setTimeout(() => { if (g.girl.poseOverride === 'hammerUp') g.girl.setPose(null); }, 700); } },
        { t: 5.5, fn: () => { this.glintT = 1.2; audio.chime(this.pan(this.perchEnd().x)); } },
        { t: 9, fn: () => { const p = this.perchEnd(); g.ghost.tap(p.x, p.y); } },
      ],
    }[this.step] || [];
    g.hints.set(this.step, st, 18);
  }

  perchEnd() {
    const h = this.holeW(), L = this.L;
    const dep = this.perch.state === 'seated' || this.perch.state === 'attached' || this.perch.state === 'fixed' ? this.perch.depth : 14;
    return { x: h.x + L.pdir.x * dep, y: h.y + L.pdir.y * dep };
  }

  busy() { return !!this.drag || this.g.wardrobe.dragging; }

  // ---------------------------------------------------------------- input
  down(p) {
    const g = this.g;
    if (this.step === 'dress') {
      if (g.wardrobe.down(p)) return;
      this.tapBirds(p);
      return;
    }
    const R = Math.max(30, g.px(38));
    if (this.step === 'board' && (this.board.state === 'ground' || this.board.state === 'fall')) {
      if (Math.hypot(p.x - this.board.x, p.y - this.board.y) < R + 20) {
        this.drag = { what: 'board', ox: this.board.x - p.x, oy: this.board.y - p.y, tx: this.board.x, ty: this.board.y };
        this.board.state = 'drag';
        audio.wood(this.pan(p.x), 1.3, 0.12);
        return;
      }
    }
    if (this.step === 'screw') {
      const s = this.screwPos();
      if (Math.hypot(p.x - s.x, p.y - s.y) < R + 30) {
        this.drag = { what: 'screw', last: Math.atan2(p.y - s.y, p.x - s.x) };
        g.girl.reachL = s;
        return;
      }
    }
    if (this.step === 'perch' && (this.perch.state === 'ground' || this.perch.state === 'fall')) {
      if (Math.hypot(p.x - this.perch.x, p.y - this.perch.y) < R + 10) {
        this.drag = { what: 'perch', ox: this.perch.x - p.x, oy: this.perch.y - p.y, tx: this.perch.x, ty: this.perch.y };
        this.perch.state = 'drag';
        audio.wood(this.pan(p.x), 1.6, 0.1);
        return;
      }
    }
    if (this.step === 'hammer') {
      const pe = this.perchEnd();
      if (Math.hypot(p.x - pe.x, p.y - pe.y) < R + 60 || this.hitHouse(p)) { this.strike(); return; }
    }
    if (this.hitHouse(p)) this.pressHouse(p);
    else this.tapBirds(p);
  }
  move(p) {
    const g = this.g;
    if (this.step === 'dress') { g.wardrobe.move(p); return; }
    const d = this.drag;
    if (!d) return;
    if (d.what === 'board' || d.what === 'perch') { d.tx = p.x + d.ox * 0.6; d.ty = p.y + d.oy * 0.6; }
    if (d.what === 'screw') {
      const s = this.screwPos();
      const a = Math.atan2(p.y - s.y, p.x - s.x);
      if (Math.hypot(p.x - s.x, p.y - s.y) > 6) {
        const da = angDiff(d.last, a);
        const add = Math.min(Math.abs(da), 0.6);
        const sc = this.screw;
        const before = sc.acc;
        sc.acc += add; sc.ang += da;
        if (Math.floor(before / 0.55) !== Math.floor(sc.acc / 0.55)) audio.screw(this.pan(s.x));
        sc.turns = clamp(sc.acc / (TAU * 1.6), 0, 1);
        d.last = a;
        if (sc.turns >= 1 && sc.state !== 'tight') this.screwDone();
      }
    }
  }
  up(p) {
    const g = this.g;
    if (this.step === 'dress') { g.wardrobe.up(p); return; }
    const d = this.drag;
    this.drag = null;
    if (!d) return;
    if (d.what === 'board' && this.board.state === 'drag') { this.board.state = 'fall'; this.board.vy = 0; }
    if (d.what === 'perch' && this.perch.state === 'drag') { this.perch.state = 'fall'; this.perch.vy = 0; }
    if (d.what === 'screw') g.girl.reachL = null;
  }

  hitHouse(p) {
    const P0 = this.W(this.L.P0);
    return p.x > P0.x - 60 && p.x < P0.x + 80 && p.y > P0.y - 165 && p.y < P0.y - 40;
  }
  pressHouse(p) {
    // pressing the house: loose parts rattle, fixed parts feel solid
    if (this.board.state === 'seated' && this.screw.state !== 'tight') { this.board.wig = 1; audio.wood(this.pan(p.x), 1.5, 0.1); }
    else { this.shake = 0.15; audio.wood(this.pan(p.x), 0.7, 0.2); }
  }
  tapBirds(p) {
    for (const b of this.birds || []) {
      if (b.state === 'perch' && Math.hypot(p.x - b.x, p.y - (b.y - 8)) < 26) { b.hop = 1; audio.chirp(this.pan(b.x), 0.6, b.i); b.tilt = rand(-0.4, 0.4); return true; }
    }
    return false;
  }

  strike() {
    if (this.swing || this.step !== 'hammer') return;
    this.swing = { t: 0, hit: false };
    this.g.hints.poke();
  }

  screwDone() {
    const sc = this.screw;
    sc.state = 'tight';
    this.drag = null;
    this.g.girl.reachL = null;
    audio.metal(this.pan(this.screwPos().x), 1.6); audio.wood(this.pan(this.screwPos().x), 0.8, 0.2);
    this.g.hints.clear();
    this.step = 'screwed';
    this.run.run((function* (self) {
      self.g.girl.say('happy', 1);
      yield 0.6;
      // she presses the board: no longer moves
      self.g.girl.reachL = self.seatCenter();
      yield 0.25;
      audio.wood(self.pan(self.seatCenter().x), 0.7, 0.25);
      yield 0.35;
      self.g.girl.reachL = null;
      self.step = 'perch';
      self.g.girl.lookAt(self.perch.x, self.perch.y);
      self.setWorkHints();
    })(this));
  }

  // ---------------------------------------------------------------- update
  update(dt) {
    super.update(dt);
    this.tick(dt);
    const g = this.g, girl = g.girl;
    const b = this.board, pr = this.perch;
    const d = this.drag;
    // board physics
    if (b.state === 'drag' && d) {
      const px = b.x;
      b.x = damp(b.x, d.tx, 16, dt); b.y = damp(b.y, d.ty, 16, dt);
      const c = this.seatCenter();
      const near = Math.hypot(b.x - c.x, b.y - c.y);
      const tgtAng = near < 110 ? this.seatAng() : 0.15 + clamp((b.x - px) / dt * 0.0015, -0.4, 0.4);
      b.ang += angDiff(b.ang, tgtAng) * Math.min(1, dt * 8);
      b.flat = damp(b.flat, near < 110 ? 0.2 : 0.8, 6, dt);
      if (near < 40) this.seatBoard();
      girl.lookAt(b.x, b.y);
      if (Math.hypot(b.x - girl.x, b.y - (girl.y - 70)) < 80) girl.reachL = { x: b.x, y: b.y }; else girl.reachL = null;
    } else if (b.state === 'fall') {
      const gy = this.W(this.L.boardRest).y;
      b.vy += 900 * dt; b.y += b.vy * dt;
      b.ang += angDiff(b.ang, 0.1) * Math.min(1, dt * 6);
      b.flat = damp(b.flat, 1, 6, dt);
      if (b.y >= gy) {
        b.y = gy; const v = b.vy; b.vy = 0; b.state = 'ground';
        if (v > 120) { audio.wood(this.pan(b.x), 0.9, clamp(v / 1500, 0.1, 0.35)); dustPuff(g.fx, b.x, b.y + 4, 4); }
        girl.reachL = null;
      }
    } else if (b.state === 'seating') {
      b.st += dt;
      const k = E.out(Math.min(1, b.st / 0.28));
      b.seat = k;
      b.x = lerp(b.sx, b.cx, k); b.y = lerp(b.sy, b.cy, k); b.ang = lerp(b.sa, this.seatAng(), k);
      if (b.st >= 0.28) {
        b.state = 'seated'; b.seat = 1;
        audio.wood(this.pan(b.x), 1.0, 0.35);
        dustPuff(g.fx, b.x, b.y, 4, '#e8d9b8', 8);
        this.shake = 0.25;
        this.afterSeat();
      }
    }
    // perch
    if (pr.state === 'drag' && d) {
      pr.x = damp(pr.x, d.tx, 18, dt); pr.y = damp(pr.y, d.ty, 18, dt);
      pr.ang += angDiff(pr.ang, Math.atan2(this.L.pdir.y, this.L.pdir.x)) * Math.min(1, dt * 6);
      const h = this.holeW();
      if (Math.hypot(pr.x - h.x, pr.y - h.y) < 34) this.seatPerch();
      girl.lookAt(pr.x, pr.y);
    } else if (pr.state === 'fall') {
      const gy = this.W(this.L.perchRest).y;
      pr.vy += 900 * dt; pr.y += pr.vy * dt;
      pr.ang += angDiff(pr.ang, 0.1) * Math.min(1, dt * 6);
      if (pr.y >= gy) { pr.y = gy; const v = pr.vy; pr.vy = 0; pr.state = 'ground'; if (v > 120) audio.wood(this.pan(pr.x), 1.5, 0.15); }
    } else if (pr.state === 'seating') {
      pr.st += dt;
      const k = E.out(Math.min(1, pr.st / 0.25));
      const h = this.holeW();
      pr.x = lerp(pr.sx, h.x, k); pr.y = lerp(pr.sy, h.y, k);
      if (pr.st >= 0.25) { pr.state = 'seated'; pr.depth = 28; audio.wood(this.pan(h.x), 1.4, 0.25); this.afterPerchSeat(); }
    }
    // mallet swing
    if (this.swing) {
      const s = this.swing;
      s.t += dt;
      const pe = this.perchEnd();
      if (s.t < 0.14) { girl.reachR = { x: pe.x - 20, y: pe.y - 60 }; }
      else if (s.t < 0.22) {
        girl.reachR = { x: pe.x + 4, y: pe.y + 2 };
        if (!s.hit) {
          s.hit = true;
          this.hits++;
          pr.depth = lerp(28, 14, this.hits / 3);
          audio.mallet(this.pan(pe.x)); this.shake = 0.2;
          dustPuff(g.fx, pe.x, pe.y, 3, '#e8d9b8', 6);
          if (this.hits >= 3) this.perchDone();
        }
      } else if (s.t < 0.45) { girl.reachR = null; }
      else { this.swing = null; girl.reachR = null; }
    }
    if (this.drag && this.drag.what === 'screw') girl.lookAt(this.screwPos().x, this.screwPos().y);
  }

  tick(dt) {
    this.shake = Math.max(0, this.shake - dt);
    this.slotPulse = Math.max(0, this.slotPulse - dt);
    this.glintT = Math.max(0, this.glintT - dt);
    this.glintHole = Math.max(0, (this.glintHole || 0) - dt);
    this.board.wig = Math.max(0, this.board.wig - dt * 2);
    this.perch.wig = Math.max(0, this.perch.wig - dt * 2);
    if (this.screw.wig) this.screw.wig = Math.max(0, this.screw.wig - dt * 2);
    this.sway = Math.sin(this.t * 0.8) * 1.5 + this.wind * Math.sin(this.t * 7) * 6 + this.wind * 8;
    if (this.birds) {
      for (const b of this.birds) b.update(dt, this.g);
      // idle chirps: more when home
      const home = this.step === 'done' || this.step === 'pre' || this.step === 'return';
      if (Math.random() < dt * (home ? 1.4 : 0.25)) {
        const b = this.birds[(Math.random() * this.birds.length) | 0];
        if (b.state === 'perch' && b.alpha > 0.5) { audio.chirp(this.pan(b.x), home ? 0.55 : 0.3, b.i); if (home) b.hop = 1; }
      }
    }
  }
  idle(dt) { super.idle(dt); if (!this.birds) this.initBirds(); this.tick(dt); }

  seatBoard() {
    const b = this.board;
    if (this.drag && this.drag.what === 'board') this.drag = null;
    const c = this.seatCenter();
    b.state = 'seating'; b.st = 0; b.sx = b.x; b.sy = b.y; b.cx = c.x; b.cy = c.y; b.sa = b.ang;
    this.g.girl.reachL = null;
  }
  afterSeat() {
    this.step = 'placed';
    this.g.hints.clear();
    const self = this;
    this.run.run((function* () {
      self.g.girl.say('happy', 0.8);
      yield 0.35;
      // screw comes out of the tool belt pouch
      const s = self.screwPos();
      const from = { x: self.g.girl.x - 14, y: self.g.girl.y - 44 };
      self.screw.state = 'fly'; self.screw.t = 0;
      audio.screw(self.pan(from.x));
      yield* anim(0.5, (k) => { self.screw.x = lerp(from.x, s.x, k); self.screw.y = lerp(from.y, s.y, k) - Math.sin(k * Math.PI) * 40; });
      self.screw.state = 'in';
      audio.metal(self.pan(s.x), 2);
      self.step = 'screw';
      self.g.girl.lookAt(s.x, s.y);
      self.setWorkHints();
    })());
  }
  seatPerch() {
    const pr = this.perch;
    if (this.drag && this.drag.what === 'perch') this.drag = null;
    pr.state = 'seating'; pr.st = 0; pr.sx = pr.x; pr.sy = pr.y;
  }
  afterPerchSeat() {
    this.step = 'hammer';
    this.g.girl.lookAt(this.perchEnd().x, this.perchEnd().y);
    this.setWorkHints();
  }
  perchDone() {
    this.perch.state = 'fixed';
    this.step = 'return';
    this.g.hints.clear();
    this.run.run(this.birdsReturn());
  }

  *birdsReturn() {
    const g = this.g, girl = g.girl, L = this.L;
    yield 0.5;
    girl.reachR = null; girl.say('happy', 1.5);
    // step back to give the birds room
    const gw = this.W(L.girlWork);
    yield* girl.walkTo(gw.x - 46, gw.y + 6);
    girl.facing = 1;
    this.setCam('work', 2);
    yield 0.4;
    const [b0, ...rest] = this.birds;
    const home0 = this.W(L.homes[0]);
    girl.lookAt(b0.x, b0.y);
    // the bravest bird comes first
    audio.chirp(this.pan(b0.x), 0.7, 0);
    b0.flyTo(home0.x, home0.y, 1.3, 50);
    yield () => b0.state === 'perch';
    girl.lookAt(home0.x, home0.y);
    audio.wood(this.pan(home0.x), 2, 0.05);
    yield 0.4;
    // tests the perch: bounces on it... it holds
    for (let i = 0; i < 2; i++) { b0.hop = 1; yield 0.3; audio.wood(this.pan(home0.x), 2.2, 0.05); }
    b0.tilt = -0.3; yield 0.4; b0.tilt = 0.3; yield 0.4;
    // hops onto the roof board and pecks: solid
    const roof = this.W(L.homes[3]);
    b0.flyTo(roof.x, roof.y, 0.45, 18);
    yield () => b0.state === 'perch';
    for (let i = 0; i < 2; i++) { b0.peckT = 0.18; audio.wood(this.pan(roof.x), 2.4, 0.07); yield 0.28; }
    yield 0.2;
    audio.chirp(this.pan(roof.x), 1, 0); b0.hop = 1;
    yield 0.5;
    // the others follow one by one
    const targets = [L.homes[1], L.homes[2], L.homes[0]];
    for (let i = 0; i < rest.length; i++) {
      const b = rest[i]; const h = this.W(targets[i]);
      audio.chirp(this.pan(b.x), 0.6, b.i);
      b.flyTo(h.x, h.y, 1.0 + i * 0.15, 40 + i * 10);
      yield 0.55;
    }
    yield () => rest.every((b) => b.state === 'perch');
    // one goes inside through the round hole
    const inb = rest[2];
    yield 0.3;
    const hl = this.W({ x: L.holeR.x, y: L.holeR.y - 16 });
    inb.flyTo(hl.x, hl.y, 0.4, 8);
    yield () => inb.state === 'perch';
    yield* anim(0.35, (k) => { inb.scale = 1 - k * 0.5; inb.alpha = 1 - k; });
    this.step = 'done';
    girl.say('open', 1.5); girl.setPose('cheer'); girl.jump(70);
    for (const b of this.birds) { b.hop = 1; audio.chirp(this.pan(b.x), 0.8, b.i); }
    yield 1.4;
    girl.setPose(null);
    girl.held = null;
    this.finish();
  }

  // ---------------------------------------------------------------- drawing
  drawFloor(ctx) {
    const L = this.L;
    const P0 = this.W(L.P0);
    ctx.fillStyle = 'rgba(160,200,120,0.5)';
    ell(ctx, P0.x + 40, P0.y + 20, 170, this.P ? 60 : 44); ctx.fill();
    // chipped wood on the ground where they work
    ctx.fillStyle = '#e9d8b4';
    ell(ctx, P0.x + 20, P0.y + 26, 110, 22); ctx.fill();
  }

  collect(list) {
    const L = this.L;
    if (!this.birds) this.initBirds();
    const P0 = this.W(L.P0), T = this.W(L.tree);
    list.push({ z: T.y, draw: (c) => this.drawTree(c, T) });
    list.push({ z: P0.y, draw: (c) => this.drawHouse(c) });
    const b = this.board, pr = this.perch;
    if (b.state === 'ground' || b.state === 'fall') list.push({ z: b.y, draw: (c) => this.drawBoardLoose(c) });
    if (pr.state === 'ground' || pr.state === 'fall') list.push({ z: pr.y, draw: (c) => this.drawPerchLoose(c, pr.x, pr.y, pr.ang) });
  }

  drawOver(ctx) {
    const b = this.board, pr = this.perch;
    if (b.state === 'drag' || b.state === 'flying' || b.state === 'seating') this.drawBoardLoose(ctx);
    if (pr.state === 'drag' || pr.state === 'falling') this.drawPerchLoose(ctx, pr.x, pr.y, pr.ang);
    if (this.screw.state === 'fly') this.drawScrew(ctx, this.screw.x, this.screw.y, 0, 0);
    for (const bd of this.birds || []) bd.draw(ctx);
  }

  drawTree(ctx, T) {
    const sw = this.sway;
    shadow(ctx, T.x + 10, T.y, 60, 12, 0.18);
    ctx.beginPath(); ctx.moveTo(T.x - 14, T.y); ctx.lineTo(T.x - 8 + sw * 0.2, T.y - 170); ctx.lineTo(T.x + 8 + sw * 0.2, T.y - 170); ctx.lineTo(T.x + 15, T.y); ctx.closePath();
    fillStroke(ctx, '#8b6243', C.woodDD, 1.5);
    for (const br of this.L.branches) {
      const a = this.W(br.a), b = this.W(br.b);
      limb(ctx, a.x + sw * 0.3, a.y, b.x + sw, b.y, 7, '#8b6243', C.woodDD, 1.3);
    }
    leafClump(ctx, T.x + 56 + sw, T.y - 186, 36, 0.1, C.leafD, C.leaf, C.leafL, sw * 0.5);
    leafClump(ctx, T.x + 6 + sw, T.y - 214, 44, 0.5, C.leafD, C.leaf, C.leafL, sw * 0.5);
    leafClump(ctx, T.x - 88 + sw, T.y - 140, 22, 0.8, C.leafD, C.leaf, C.leafL, sw);
    leafClump(ctx, T.x - 58 + sw, T.y - 208, 22, 0.3, C.leafD, C.leaf, C.leafL, sw);
  }

  quad(ctx, c) { ctx.beginPath(); ctx.moveTo(c[0].x, c[0].y); for (let i = 1; i < 4; i++) ctx.lineTo(c[i].x, c[i].y); ctx.closePath(); }

  drawHouse(ctx) {
    const L = this.L;
    const P0 = this.W(L.P0), d = L.d;
    const sh = this.shake > 0 ? Math.sin(this.t * 60) * this.shake * 2 : 0;
    ctx.save();
    ctx.translate(sh, 0);
    shadow(ctx, P0.x + 8, P0.y, 34, 6, 0.2);
    // post
    rr(ctx, P0.x - 7, P0.y - 50, 14, 50, 2); fillStroke(ctx, '#9c6d44', C.woodDD, 1.4);
    ctx.fillStyle = 'rgba(255,230,190,0.25)'; ctx.fillRect(P0.x - 5, P0.y - 48, 3, 46);
    rr(ctx, P0.x - 20, P0.y - 50, 40, 7, 2); fillStroke(ctx, '#9c6d44', C.woodDD, 1.2);
    const x0 = P0.x - 48, x1 = P0.x + 48, yb = P0.y - 45, yt = P0.y - 112;
    // side face
    this.quad(ctx, [{ x: x1, y: yb }, { x: x1 + d.x, y: yb + d.y }, { x: x1 + d.x, y: yt + d.y }, { x: x1, y: yt }]);
    fillStroke(ctx, '#83b7ae', C.line, 1.4);
    // front box + gable
    const A = this.W(L.A), Er = this.W(L.Er), El = this.W(L.El);
    ctx.beginPath();
    ctx.moveTo(x0, yb); ctx.lineTo(x1, yb); ctx.lineTo(x1, yt); ctx.lineTo(Er.x - 8, Er.y + 5); ctx.lineTo(A.x, A.y + 8); ctx.lineTo(El.x + 8, El.y + 5); ctx.lineTo(x0, yt); ctx.closePath();
    fillStroke(ctx, '#a9d9cf', C.line, 1.6);
    ctx.strokeStyle = 'rgba(60,110,100,0.25)'; ctx.lineWidth = 1;
    for (let y = yb - 12; y > yt; y -= 12) { ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke(); }
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillRect(x0 + 2, yt + 2, 6, yb - yt - 4);
    // holes
    for (const hx of [-22, 22]) {
      const h = { x: P0.x + hx, y: P0.y - 88 };
      circ(ctx, h.x, h.y, 10.5); fillStroke(ctx, '#2d2622', C.line, 1.6);
      ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.beginPath(); ctx.arc(h.x, h.y, 10.5, Math.PI * 1.1, Math.PI * 1.6); ctx.lineTo(h.x, h.y); ctx.fill();
    }
    // perch holes & perches
    const lh = { x: P0.x - 22, y: P0.y - 72 };
    this.drawPerchPeg(ctx, lh, 14);
    const pr = this.perch;
    const rh = this.holeW();
    circ(ctx, rh.x, rh.y, 3.8); fillStroke(ctx, '#3a2c22', C.line, 1);
    if (this.glintHole > 0) glint(ctx, rh.x + 4, rh.y - 5, 5, Math.sin(this.glintHole * 5));
    if (pr.state === 'attached' || pr.state === 'seated' || pr.state === 'fixed') {
      const wig = pr.wig > 0 ? Math.sin(this.t * 40) * pr.wig : 0;
      this.drawPerchPeg(ctx, { x: rh.x + wig, y: rh.y }, pr.depth);
    }
    // roof: left slope always intact
    const left = [A, El, { x: El.x + d.x, y: El.y + d.y }, { x: A.x + d.x, y: A.y + d.y }];
    this.drawRoofBoard(ctx, left, '#bf7d4b', 1);
    // right slope: missing -> rafters and dark gap; seated -> board
    const b = this.board;
    const seat = this.seatCorners();
    if (b.state !== 'attached' && b.state !== 'seated') {
      this.quad(ctx, seat); ctx.fillStyle = '#3a2d26'; ctx.fill();
      ctx.save(); this.quad(ctx, seat); ctx.clip();
      // nest straw visible inside
      ctx.strokeStyle = '#d9b66a'; ctx.lineWidth = 1.2;
      for (let i = 0; i < 8; i++) { const k = i / 8; ctx.beginPath(); ctx.moveTo(lerp(seat[0].x, seat[1].x, k) + 4, lerp(seat[0].y, seat[1].y, k) + 12); ctx.quadraticCurveTo(lerp(seat[0].x, seat[1].x, k) + 12, lerp(seat[0].y, seat[1].y, k) + 4, lerp(seat[0].x, seat[1].x, k + 0.15) + 8, lerp(seat[0].y, seat[1].y, k + 0.15) + 10); ctx.stroke(); }
      ctx.restore();
      // rafters
      for (const k of [0.15, 0.85]) {
        const a = { x: lerp(seat[0].x, seat[3].x, k), y: lerp(seat[0].y, seat[3].y, k) };
        const c = { x: lerp(seat[1].x, seat[2].x, k), y: lerp(seat[1].y, seat[2].y, k) };
        limb(ctx, a.x, a.y, c.x, c.y, 3, '#b58a5a', C.line, 1);
      }
      // the empty shape: lighter unweathered outline + nail holes
      const pulse = this.slotPulse > 0 ? 0.35 + 0.35 * Math.sin(this.slotPulse * 8) : 0.2;
      this.quad(ctx, seat); ctx.strokeStyle = `rgba(255,236,200,${pulse})`; ctx.lineWidth = 2.2; ctx.stroke();
      ctx.fillStyle = '#2a1f1a';
      for (const k of [0.2, 0.72]) { const q = { x: lerp(seat[0].x, seat[1].x, k) + d.x * 0.5, y: lerp(seat[0].y, seat[1].y, k) + d.y * 0.5 }; circ(ctx, q.x, q.y, 1.4); ctx.fill(); }
    }
    if (b.state === 'attached') {
      // rotate about the ridge when the gust lifts it
      const rot = (p) => { const dx = p.x - A.x, dy = p.y - A.y, c = Math.cos(-b.lift), s = Math.sin(-b.lift); return { x: A.x + dx * c - dy * s, y: A.y + dx * s + dy * c }; };
      const cs = seat.map((p, i) => (i === 0 || i === 3 ? p : rot(p)));
      cs[3] = seat[3];
      if (b.lift > 0.01) { this.quad(ctx, seat); ctx.fillStyle = '#3a2d26'; ctx.fill(); }
      this.drawRoofBoard(ctx, cs, '#bf7d4b', 2);
    } else if (b.state === 'seated') {
      const wig = b.wig > 0 ? Math.sin(this.t * 40) * b.wig * 0.03 : 0;
      const rot = (p) => { const dx = p.x - A.x, dy = p.y - A.y, c = Math.cos(-wig), s = Math.sin(-wig); return { x: A.x + dx * c - dy * s, y: A.y + dx * s + dy * c }; };
      this.drawRoofBoard(ctx, seat.map(rot), '#d49a62', 2);
      if (this.screw.state === 'in' || this.screw.state === 'tight') {
        const sp = this.screwPos();
        this.drawScrew(ctx, sp.x, sp.y, this.screw.ang, this.screw.turns, this.screw.wig);
        if (this.glintT > 0 && this.step === 'screw') glint(ctx, sp.x + 5, sp.y - 6, 6, Math.sin(this.glintT * 6));
      }
      // original nail on the upper end
      const q = { x: lerp(seat[0].x, seat[1].x, 0.2) + d.x * 0.5, y: lerp(seat[0].y, seat[1].y, 0.2) + d.y * 0.5 };
      circ(ctx, q.x, q.y, 1.8); fillStroke(ctx, '#9aa3aa', C.line, 0.8);
    }
    // fascia boards along the gable edges so both roof sides read clearly
    limb(ctx, A.x, A.y - 2, El.x - 5, El.y + 2, 7, '#b5733f', C.line, 1.3);
    if (b.state === 'seated' || (b.state === 'attached' && b.lift < 0.02)) limb(ctx, A.x, A.y - 2, Er.x + 5, Er.y + 2, 7, b.state === 'seated' ? '#c98a55' : '#b5733f', C.line, 1.3);
    // ridge cap
    limb(ctx, A.x, A.y, A.x + d.x, A.y + d.y, 4, '#a0623a', C.line, 1.2);
    if (this.glintT > 0 && this.step === 'hammer') { const pe = this.perchEnd(); glint(ctx, pe.x, pe.y - 3, 6, Math.sin(this.glintT * 6)); }
    ctx.restore();
  }

  drawRoofBoard(ctx, c, col, seed) {
    this.quad(ctx, c); ctx.fillStyle = col; ctx.fill();
    ctx.save(); this.quad(ctx, c); ctx.clip();
    ctx.strokeStyle = 'rgba(90,50,20,0.3)'; ctx.lineWidth = 0.9;
    for (let i = 1; i < 5; i++) {
      const k = i / 5;
      const a = { x: lerp(c[0].x, c[3].x, k), y: lerp(c[0].y, c[3].y, k) };
      const b = { x: lerp(c[1].x, c[2].x, k), y: lerp(c[1].y, c[2].y, k) };
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.quadraticCurveTo((a.x + b.x) / 2 + Math.sin(seed + i) * 3, (a.y + b.y) / 2 + Math.cos(seed * 2 + i) * 2, b.x, b.y); ctx.stroke();
    }
    ctx.fillStyle = 'rgba(255,235,200,0.22)';
    ctx.beginPath(); ctx.moveTo(c[0].x, c[0].y); ctx.lineTo(c[1].x, c[1].y); ctx.lineTo(lerp(c[1].x, c[2].x, 0.25), lerp(c[1].y, c[2].y, 0.25)); ctx.lineTo(lerp(c[0].x, c[3].x, 0.25), lerp(c[0].y, c[3].y, 0.25)); ctx.fill();
    ctx.restore();
    this.quad(ctx, c); ctx.strokeStyle = C.woodDD; ctx.lineWidth = 1.5; ctx.stroke();
  }

  boardLooseCorners() {
    const b = this.board;
    const u = { x: Math.cos(b.ang), y: Math.sin(b.ang) };
    const n = { x: -u.y, y: u.x };
    const half = 34;
    const dep = { x: lerp(this.L.d.x, 0, b.flat), y: lerp(this.L.d.y, -9, b.flat) };
    return [
      { x: b.x - u.x * half - dep.x / 2, y: b.y - u.y * half - dep.y / 2 },
      { x: b.x + u.x * half - dep.x / 2, y: b.y + u.y * half - dep.y / 2 },
      { x: b.x + u.x * half + dep.x / 2, y: b.y + u.y * half + dep.y / 2 },
      { x: b.x - u.x * half + dep.x / 2, y: b.y - u.y * half + dep.y / 2 },
    ];
  }

  drawBoardLoose(ctx) {
    const b = this.board;
    let cs = this.boardLooseCorners();
    if (b.state === 'seating') { const s = this.seatCorners(); cs = cs.map((p, i) => ({ x: lerp(p.x, s[i].x, b.seat), y: lerp(p.y, s[i].y, b.seat) })); }
    const wig = b.wig > 0 && b.state === 'ground' ? -Math.abs(Math.sin(this.t * 20)) * b.wig * 4 : 0;
    cs = cs.map((p) => ({ x: p.x, y: p.y + wig }));
    if (b.state === 'ground') { ctx.save(); ctx.fillStyle = 'rgba(70,55,35,0.2)'; ell(ctx, b.x + 4, b.y + 6, 36, 5); ctx.fill(); ctx.restore(); }
    if (b.state === 'drag') { ctx.save(); ctx.fillStyle = 'rgba(70,55,35,0.12)'; ell(ctx, b.x + 10, this.W(this.L.boardRest).y + 6, 30, 4); ctx.fill(); ctx.restore(); }
    // thickness edge
    const edge = cs.map((p) => ({ x: p.x, y: p.y + 3.5 }));
    this.quad(ctx, [cs[3], cs[2], edge[2], edge[3]]); ctx.fillStyle = '#8d5a34'; ctx.fill();
    this.drawRoofBoard(ctx, cs, '#d49a62', 3);
    // the empty screw hole
    const h = { x: lerp(cs[0].x, cs[1].x, 0.72) + (cs[3].x - cs[0].x) * 0.5, y: lerp(cs[0].y, cs[1].y, 0.72) + (cs[3].y - cs[0].y) * 0.5 };
    circ(ctx, h.x, h.y, 1.6); ctx.fillStyle = '#3a2d26'; ctx.fill();
  }

  drawPerchPeg(ctx, h, depth) {
    const L = this.L;
    const e = { x: h.x + L.pdir.x * depth, y: h.y + L.pdir.y * depth };
    limb(ctx, h.x, h.y, e.x, e.y, 6.5, '#c9975f', C.line, 1.2);
    ell(ctx, e.x, e.y, 3.3, 3.3); fillStroke(ctx, '#e6c08a', C.line, 1.1);
  }

  drawPerchLoose(ctx, x, y, ang) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
    if (this.perch.state === 'ground') { ctx.fillStyle = 'rgba(70,55,35,0.2)'; ell(ctx, 3, 5, 16, 3); ctx.fill(); }
    const wig = this.perch.wig > 0 ? Math.sin(this.t * 30) * this.perch.wig * 3 : 0;
    ctx.translate(wig, 0);
    limb(ctx, -13, 0, 13, 0, 6.5, '#c9975f', C.line, 1.2);
    ell(ctx, 13, 0, 2.2, 3.3); fillStroke(ctx, '#e6c08a', C.line, 1);
    ctx.restore();
  }

  drawScrew(ctx, x, y, ang, turns, wig = 0) {
    ctx.save();
    ctx.translate(x + (wig ? Math.sin(this.t * 40) * wig * 1.5 : 0), y);
    const out = (1 - turns) * 12;
    // shaft sticking out of the board (toward the viewer, up-left)
    const ox = -0.45 * out, oy = -0.9 * out;
    if (out > 0.5) {
      limb(ctx, 0, 0, ox, oy, 4, '#b7c0c7', C.line, 1);
      ctx.strokeStyle = 'rgba(0,0,0,0.3)'; ctx.lineWidth = 0.8;
      for (let i = 1; i < out / 3; i++) { const k = i / (out / 3); ctx.beginPath(); ctx.moveTo(ox * k - 2, oy * k); ctx.lineTo(ox * k + 2, oy * k - 1.5); ctx.stroke(); }
    }
    ctx.translate(ox, oy);
    // wing head, seen at an angle
    ctx.scale(1, 0.7);
    ctx.rotate(ang);
    ctx.fillStyle = '#cfd7dd'; ctx.strokeStyle = C.line; ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(-13, -3); ctx.quadraticCurveTo(-15, 0, -13, 3); ctx.lineTo(-4, 4); ctx.lineTo(4, 4); ctx.lineTo(13, 3); ctx.quadraticCurveTo(15, 0, 13, -3); ctx.lineTo(4, -4); ctx.lineTo(-4, -4); ctx.closePath();
    ctx.fill(); ctx.stroke();
    circ(ctx, 0, 0, 5); fillStroke(ctx, '#e3e9ed', C.line, 1.1);
    ctx.fillStyle = 'rgba(255,255,255,0.8)'; ell(ctx, -6, -1.5, 4, 1); ctx.fill();
    ctx.restore();
  }

  debugTargets() {
    const out = {};
    const b = this.board;
    out.board = { x: b.x, y: b.y };
    out.seat = this.seatCenter();
    out.screw = this.screwPos();
    out.perch = { x: this.perch.x, y: this.perch.y };
    out.hole = this.holeW();
    out.perchEnd = this.perchEnd();
    return out;
  }
}
