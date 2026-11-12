// Scene 4: a hive box slipped, the colony clustered on a low branch.
// Beekeeper outfit (veil, gloves) -> push the box back in line, calm the
// cluster with a little smoke, carry the whole living cluster to the hive.
import { Scene } from './base.js';
import { ST } from '../world.js';
import { clamp, lerp, damp, E, anim, inv, rand, TAU, angDiff, seeded, qbez } from '../util.js';
import { C, rr, ell, circ, fillStroke, plank, shadow, leafClump, limb, glint } from '../draw.js';
import { audio } from '../audio.js';
import { dustPuff } from '../fx.js';

export function drawBee(ctx, x, y, a = 0, s = 1, flap = 0, alpha = 1) {
  ctx.save();
  ctx.globalAlpha *= alpha;
  ctx.translate(x, y); ctx.rotate(a); ctx.scale(s, s);
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  const w = 0.6 + 0.4 * Math.abs(Math.sin(flap));
  ell(ctx, -0.5, -2.4, 2.4, 1.6 * w, -0.5); ctx.fill();
  ell(ctx, 1, -2.4, 2.4, 1.6 * w, 0.5); ctx.fill();
  ctx.fillStyle = '#f2c14e'; ell(ctx, 0, 0, 3.8, 2.5); ctx.fill();
  ctx.fillStyle = '#4a3a2c'; ctx.fillRect(-1.6, -2.3, 1.1, 4.6); ctx.fillRect(0.8, -2.3, 1.1, 4.6);
  circ(ctx, 3.4, 0, 1.3); ctx.fill();
  ctx.restore();
}

export class BeesScene extends Scene {
  constructor(g) { super(g, 'bees', ST.bees); this.range = [-520, 520]; }

  reset() {
    super.reset();
    if (this.buzz) this.buzz.stop();
    if (this.scrape) { this.scrape.stop(); this.scrape = null; }
    this.box = { off: 26, drag: null, locked: false, v: 0 };
    this.sw = { x: 0, y: 0, state: 'branch', ag: 0.8, n: 46, vx: 0, vy: 0, sx: 1, sy: 1 };
    this.branchBend = 1; this.branchV = 0;
    this.flyers = [];
    this.stream = [];
    this.loopers = [];
    this.scouts = [];
    this.onGirl = [];
    this.puffHold = null;
    this.buzz = null;
    this.flowers = null;
    this.flinchT = 0;
    this.clusterPts = null;
    this.drag = null;
    this.glintT = 0;
    this.boxWig = 0;
    this.smokeHits = 0;
  }

  layoutL() {
    const H = { x: 232, y: -46 };
    const tree = { x: 34, y: -52 };
    const br = { a: { x: tree.x + 4, y: tree.y - 76 }, b: { x: tree.x + 128, y: tree.y - 92 } };
    const swarm = { x: tree.x + 90, y: tree.y - 62 };
    return {
      H, H2: { x: 318, y: -58 }, tree, br, swarm,
      girl: { x: -125, y: 0 }, rack: { x: -262, y: 0 },
      girlHive: { x: H.x + 62, y: H.y + 22 }, girlSmoke: { x: swarm.x - 62, y: -6 },
      bed: { x0: 140, x1: 350, y: 18 },
      frames: { overview: { x: -350, y: -350, w: 690, h: 395 }, work: { x: -22, y: -215, w: 380, h: 262 } },
    };
  }
  layoutP() {
    const H = { x: 62, y: -236 };
    const tree = { x: -100, y: -262 };
    const br = { a: { x: tree.x + 4, y: tree.y - 76 }, b: { x: tree.x + 116, y: tree.y - 90 } };
    const swarm = { x: tree.x + 82, y: tree.y - 60 };
    return {
      H, H2: { x: 128, y: -318 }, tree, br, swarm,
      girl: { x: 60, y: 0 }, rack: { x: -77, y: 0 },
      girlHive: { x: H.x + 56, y: H.y + 18 }, girlSmoke: { x: swarm.x - 60, y: tree.y + 48 },
      bed: { x0: -150, x1: 150, y: -168 },
      frames: { overview: { x: -160, y: -565, w: 320, h: 617 }, work: { x: -150, y: -455, w: 300, h: 320 } },
    };
  }

  W(p) { return { x: this.wx(p.x), y: p.y }; }
  entrance() { const H = this.W(this.L.H); return { x: H.x, y: H.y - 25 }; }
  branchPt() {
    const L = this.L; const s = this.W(L.swarm);
    return { x: s.x, y: s.y - 24 - this.branchBend * 6 };
  }

  prepare() { this.reset(); this.layout(); this.initLife(); }
  girlSpot() {
    if (['hive', 'boxed'].includes(this.step)) return this.W(this.L.girlHive);
    if (['smoke', 'calmed', 'scoop'].includes(this.step)) return this.W(this.L.girlSmoke);
    if (this.step === 'arrive') return this.anchor().girl;
    return super.girlSpot();
  }
  onRelayout() {
    this.drag = null; this.puffHold = null;
    if (this.scrape) this.scrape.set(0);
    const sw = this.sw;
    if (sw.state === 'held') sw.state = 'back';
    if (sw.state === 'pour') { const e = this.entrance(); sw.px = e.x + 26; sw.py = e.y - 20; sw.x = sw.px; sw.y = sw.py; }
    const old = this.flowers || [];
    const n = sw.n;
    this.initLife();
    sw.n = n;
    this.scouts = []; this.stream = [];
    for (const b of this.loopers) { const i = old.indexOf(b.f); b.f = this.flowers[Math.max(0, i) % this.flowers.length]; b.state = 'out'; b.k = 0; }
  }
  initLife() {
    const L = this.L;
    const r = seeded(21);
    this.clusterPts = [];
    for (let i = 0; i < 60; i++) {
      const v = Math.sqrt(r());
      const w = Math.sin(0.25 + v * 2.6) * 1.0;
      this.clusterPts.push({ u: (r() - 0.5) * 2 * w, v, a: r() * TAU, ph: r() * 6 });
    }
    const s = this.W(L.swarm);
    if (this.sw.state === 'branch' || this.sw.state === 'back') { this.sw.x = s.x; this.sw.y = s.y; }
    this.flyers = [];
    for (let i = 0; i < 14; i++) this.flyers.push({ a: rand(0, TAU), r: rand(20, 42), sp: rand(1.6, 3) * (Math.random() < 0.5 ? -1 : 1), ph: rand(0, 6), y: rand(-10, 10), x: s.x, yy: s.y });
    this.flowers = [];
    const b = L.bed;
    const n = this.P ? 9 : 10;
    for (let i = 0; i < n; i++) this.flowers.push({ x: this.wx(lerp(b.x0, b.x1, (i + 0.5) / n) + rand(-8, 8)), y: b.y + rand(-6, 8), c: i % 4, dip: 0, ph: rand(0, 6) });
    if (!this.P) for (let i = 0; i < 4; i++) this.flowers.push({ x: this.wx(rand(260, 350)), y: -84 + rand(-6, 6), c: (i + 1) % 4, dip: 0, ph: rand(0, 6) });
  }

  enter() {
    const g = this.g;
    if (!this.clusterPts) this.initLife();
    this.step = 'arrive';
    this.buzzOn();
    this.run.run(this.arrive());
  }

  buzzOn() { if (!this.buzz) this.buzz = audio.loop('bees'); }

  *arrive() {
    const g = this.g, girl = g.girl;
    girl.lookAt(this.sw.x, this.sw.y);
    yield 0.5;
    // a few curious bees come over; without protection she backs off
    this.sendScouts();
    yield 0.9;
    this.flinch();
    yield 1.0;
    this.step = 'dress';
    g.wardrobe.enable('bee', {
      onDressed: () => this.run.run(this.suitedUp()),
      onWrong: () => { this.sendScouts(); setTimeout(() => this.flinch(), 600); setTimeout(() => g.rack.hint('bee'), 1200); },
    });
    g.hints.set('dress', [
      { t: 3, fn: () => { this.sendScouts(); setTimeout(() => this.flinch(), 700); } },
      { t: 7, fn: () => { g.girl.lookAt(g.rack.x, -110); g.rack.hint('bee'); } },
      { t: 11, fn: () => { const b = g.rack.bundle('bee'); if (b && b.state === 'hang') g.ghost.drag(b.x, b.y + 40, g.girl.x, g.girl.y - 70); } },
      { t: 15, fn: () => { g.rack.hint('bee'); } },
    ], 20);
  }

  sendScouts() {
    const girl = this.g.girl;
    this.scouts = [];
    for (let i = 0; i < 3; i++) this.scouts.push({ x: this.sw.x + rand(-10, 10), y: this.sw.y + rand(-10, 10), t: 0, life: 3.2, a: rand(0, TAU), r: rand(18, 30), ph: rand(0, 6) });
    audio.tone({ type: 'sawtooth', f: 240, f2: 260, dur: 0.6, gain: 0.02, pan: this.pan(girl.x), filter: { type: 'bandpass', freq: 700, q: 2 } });
  }
  flinch() {
    const girl = this.g.girl;
    if (girl.outfit === 'bee' || girl.change) return;
    girl.setPose('flinch'); girl.say('worry', 1.2);
    const x0 = girl.x;
    girl.walkTo(x0 - 14, girl.y);
    setTimeout(() => { if (girl.poseOverride === 'flinch') girl.setPose(null); }, 900);
    this.flinchT = 1;
  }

  *suitedUp() {
    const g = this.g, girl = g.girl, L = this.L;
    this.step = 'approach';
    g.hints.clear();
    girl.held = 'smoker';
    yield 0.3;
    // calm, protected: bees may land on the suit
    const gh = this.W(L.girlHive);
    girl.walkTo(gh.x, gh.y);
    for (let i = 0; i < 3; i++) this.onGirl.push({ ox: rand(-14, 14), oy: rand(-100, -40), t: -i * 0.4, a: rand(0, TAU) });
    yield () => !girl.target;
    girl.facing = -1;
    this.setCam('work', 2.2);
    girl.lookAt(this.W(L.H).x, L.H.y - 60);
    girl.say('happy', 1);
    yield 0.4;
    yield () => g.cam.settled();
    this.step = 'hive';
    this.setWorkHints();
  }

  setWorkHints() {
    const g = this.g, L = this.L;
    const H = this.W(L.H);
    const st = {
      hive: [
        { t: 3, fn: () => { this.boxWig = 1; audio.wood(this.pan(H.x), 1.2, 0.08); this.glintT = 1.3; } },
        { t: 6.5, fn: () => { g.girl.reachL = { x: H.x + 24 + this.box.off, y: H.y - 64 }; setTimeout(() => { g.girl.reachL = null; }, 900); } },
        { t: 10, fn: () => { g.ghost.drag(H.x + this.box.off + 10, H.y - 64, H.x - 10, H.y - 64, 1.8); } },
      ],
      smoke: [
        { t: 3, fn: () => { this.sw.ag = Math.min(1, this.sw.ag + 0.1); g.girl.lookAt(this.sw.x, this.sw.y); } },
        { t: 6.5, fn: () => { g.girl.setPose('squeeze'); setTimeout(() => g.girl.setPose(null), 250); this.puff(0.35); } },
        { t: 10, fn: () => { const h = g.girl.handWorld('R'); g.ghost.tap(h.x, h.y); } },
      ],
      scoop: [
        { t: 3, fn: () => { g.girl.lookAt(this.sw.x, this.sw.y); g.girl.reachR = { x: this.sw.x, y: this.sw.y }; setTimeout(() => { g.girl.reachR = null; }, 900); } },
        { t: 6.5, fn: () => { this.glintHive = 1.3; audio.chime(this.pan(H.x), 0.03); } },
        { t: 10, fn: () => { const e = this.entrance(); g.ghost.drag(this.sw.x, this.sw.y, e.x, e.y - 20, 2.2); } },
      ],
    }[this.step] || [];
    g.hints.set(this.step, st, 18);
  }

  busy() { return !!this.drag || !!this.puffHold || this.g.wardrobe.dragging; }

  // ---------------------------------------------------------------- input
  down(p) {
    const g = this.g, L = this.L;
    if (this.step === 'dress') {
      if (g.wardrobe.down(p)) return;
      if (Math.hypot(p.x - this.sw.x, p.y - this.sw.y) < 50) { this.sw.ag = 1; this.sendScouts(); this.flinch(); }
      return;
    }
    const R = Math.max(34, g.px(40));
    if (this.step === 'hive' && !this.box.locked) {
      const H = this.W(L.H);
      const bx = H.x + this.box.off;
      if (p.x > bx - 34 && p.x < bx + 40 && p.y > H.y - 96 && p.y < H.y - 40) {
        this.drag = { what: 'box', gx: p.x, off0: this.box.off, tx: this.box.off };
        this.scrape = this.scrape || audio.loop('scrape');
        if (!this.scrape) this.scrape = null;
        return;
      }
    }
    if (this.step === 'smoke') {
      const h = g.girl.handWorld('R');
      const bb = g.girl.bodyBox();
      if (Math.hypot(p.x - h.x, p.y - h.y) < R + 30 || (p.x > bb.x0 && p.x < bb.x1 && p.y > bb.y0 && p.y < bb.y1)) {
        this.squeeze();
        this.puffHold = { t: 0 };
        return;
      }
    }
    if (this.step === 'scoop' && this.sw.state === 'branch') {
      if (Math.hypot(p.x - this.sw.x, p.y - this.sw.y) < R + 16) {
        this.drag = { what: 'swarm', tx: this.sw.x, ty: this.sw.y };
        this.sw.state = 'held';
        this.branchV = -6;
        audio.cloth(this.pan(p.x), 0.5); audio.wood(this.pan(p.x), 1.4, 0.06);
        return;
      }
    }
    // taps on flowers make them nod
    for (const f of this.flowers || []) if (Math.hypot(p.x - f.x, p.y - (f.y - 12)) < 16) { f.dip = 1; audio.cloth(this.pan(f.x), 0.2); }
  }
  move(p) {
    if (this.step === 'dress') { this.g.wardrobe.move(p); return; }
    const d = this.drag;
    if (!d) return;
    if (d.what === 'box') d.tx = clamp(d.off0 + (p.x - d.gx), -4, 30);
    if (d.what === 'swarm') { d.tx = p.x; d.ty = p.y; }
  }
  up(p) {
    if (this.step === 'dress') { this.g.wardrobe.up(p); return; }
    this.puffHold = null;
    const d = this.drag; this.drag = null;
    if (!d) return;
    if (d.what === 'box' && this.scrape) this.scrape.set(0);
    if (d.what === 'swarm' && this.sw.state === 'held') {
      const e = this.entrance();
      if (Math.hypot(this.sw.x - e.x, this.sw.y - e.y) < 95) this.startPour();
      else { this.sw.state = 'back'; this.g.girl.reachR = this.g.girl.reachL = null; audio.whoosh(this.pan(this.sw.x), 0.05); }
    }
  }

  squeeze() {
    const girl = this.g.girl;
    girl.setPose('squeeze');
    setTimeout(() => { if (girl.poseOverride === 'squeeze') girl.setPose(null); }, 220);
    this.puff(1);
  }
  smokerNozzle() { const h = this.g.girl.handWorld('R'); return { x: h.x + 2 * this.g.girl.facing, y: h.y - 4 }; }
  puff(k = 1) {
    const g = this.g;
    const n = this.smokerNozzle();
    audio.puff(this.pan(n.x));
    const tx = this.sw.x, ty = this.sw.y;
    const dx = tx - n.x, dy = ty - n.y, d = Math.hypot(dx, dy) || 1;
    for (let i = 0; i < Math.round(6 * k); i++) {
      const hitSw = this;
      g.fx.add({ type: 'smoke', x: n.x + rand(-2, 2), y: n.y + rand(-2, 2), vx: (dx / d) * rand(40, 70), vy: (dy / d) * rand(40, 70) - 8, drag: 0.4, life: 2.8, size: rand(7, 11), color: '#f3f4f1', alpha: 0.95,
        update: (p, dt) => {
          // gentle breeze carries it toward the cluster
          p.vx += ((hitSw.sw.x - p.x) * 0.5) * dt; p.vy += ((hitSw.sw.y - p.y) * 0.5 - 6) * dt;
          if (!p.hit && Math.hypot(p.x - hitSw.sw.x, p.y - hitSw.sw.y) < 34) { p.hit = true; hitSw.smoke(); }
        } });
    }
  }
  smoke() {
    if (this.step !== 'smoke') return;
    this.sw.ag = Math.max(0.15, this.sw.ag - 0.06);
    this.smokeHits++;
    if (this.sw.ag <= 0.32) {
      this.step = 'calmed';
      this.g.hints.clear();
      this.run.run((function* (self) {
        self.g.girl.say('happy', 1);
        yield 1.0;
        self.step = 'scoop';
        self.setWorkHints();
      })(this));
    }
  }

  startPour() {
    this.sw.state = 'pour';
    this.step = 'pour';
    this.g.hints.clear();
    const e = this.entrance();
    this.sw.px = e.x + 26 * (this.sw.x > e.x ? 1 : -1); this.sw.py = e.y - 20;
    this.g.girl.reachR = this.g.girl.reachL = null;
    this.g.girl.target = null;
    this.run.run(this.pour());
  }

  *pour() {
    const g = this.g, girl = g.girl, e = this.entrance();
    girl.lookAt(e.x, e.y);
    // the cluster is set on the landing board and walks in as a stream
    let acc = 0;
    while (this.sw.n > 0) {
      const dt = yield; acc += (dt || 0) * 24;
      while (acc > 1 && this.sw.n > 0) {
        acc--; this.sw.n--;
        this.stream.push({ x: this.sw.x + rand(-8, 8), y: this.sw.y + rand(-4, 10), t: 0, dur: rand(0.6, 1.1), ph: rand(0, 6) });
      }
    }
    yield () => this.stream.length === 0;
    this.sw.state = 'home';
    this.step = 'home';
    audio.chime(this.pan(e.x), 0.04);
    yield 0.4;
    // orderly flights between hive and flowers begin
    for (let i = 0; i < 10; i++) this.loopers.push({ state: 'out', t: -i * 0.45, f: this.flowers[i % this.flowers.length], x: e.x, y: e.y, ph: rand(0, 6), k: 0 });
    girl.say('open', 1.5); girl.setPose('cheer'); girl.jump(60);
    audio.cloth(this.pan(girl.x), 0.4);
    yield 0.25; audio.cloth(this.pan(girl.x), 0.4);
    yield 1.4;
    girl.setPose(null);
    yield 2.2;
    this.onGirl = [];
    girl.held = null;
    this.step = 'done';
    this.finish();
  }

  // ---------------------------------------------------------------- update
  update(dt) {
    super.update(dt);
    this.tick(dt);
    const g = this.g, girl = g.girl, L = this.L, H = this.W(L.H);
    const d = this.drag;
    // heavy box: follows with friction
    if (d && d.what === 'box') {
      const prev = this.box.off;
      this.box.off = damp(this.box.off, d.tx, 5, dt);
      const v = Math.abs(this.box.off - prev) / dt;
      if (this.scrape) this.scrape.set(clamp(v / 60, 0, 0.35), this.pan(H.x));
      girl.reachL = { x: H.x + 24 + this.box.off, y: H.y - 64 };
      if (this.box.off < 2.5) this.lockBox();
    }
    if (this.puffHold) { this.puffHold.t += dt; if (this.puffHold.t > 0.5) { this.puffHold.t = 0; this.squeeze(); } }
    // carrying the living cluster
    const sw = this.sw;
    if (sw.state === 'held' && d && d.what === 'swarm') {
      const px = sw.x, py = sw.y;
      sw.x = damp(sw.x, d.tx, 7, dt); sw.y = damp(sw.y, d.ty, 7, dt);
      sw.vx = (sw.x - px) / dt; sw.vy = (sw.y - py) / dt;
      // she walks along underneath so her gloves can hold it
      const side = girl.x < sw.x ? -1 : 1;
      const gy = this.P ? clamp(sw.y + 105, L.H.y - 30, L.H.y + 40) : clamp(sw.y + 105, -40, 10);
      girl.target = { x: sw.x + side * 34, y: gy };
      girl.speed = 230;
      girl.facing = -side;
      girl.reachR = { x: sw.x, y: sw.y + 10 }; girl.reachL = { x: sw.x, y: sw.y + 12 };
      girl.lookAt(sw.x, sw.y);
      const e = this.entrance();
      this.glintHive = Math.hypot(sw.x - e.x, sw.y - e.y) < 95 ? 0.6 : this.glintHive;
    }
  }

  lockBox() {
    const g = this.g, H = this.W(this.L.H);
    this.box.off = 0; this.box.locked = true; this.drag = null;
    if (this.scrape) { this.scrape.stop(); this.scrape = null; }
    audio.wood(this.pan(H.x), 0.8, 0.35); audio.thud(this.pan(H.x), 0.12);
    dustPuff(g.fx, H.x, H.y - 52, 4, '#e8d9b8', 8);
    g.girl.reachL = null;
    this.step = 'boxed';
    g.hints.clear();
    this.run.run((function* (self) {
      g.girl.say('happy', 1);
      yield 0.5;
      const gs = self.W(self.L.girlSmoke);
      yield* g.girl.walkTo(gs.x, gs.y);
      g.girl.facing = 1;
      g.girl.lookAt(self.sw.x, self.sw.y);
      self.step = 'smoke';
      self.setWorkHints();
    })(this));
  }

  tick(dt) {
    if (!this.clusterPts) this.initLife();
    const L = this.L, sw = this.sw, g = this.g, girl = g.girl;
    this.flinchT = Math.max(0, this.flinchT - dt);
    this.glintT = Math.max(0, this.glintT - dt);
    this.glintHive = Math.max(0, (this.glintHive || 0) - dt);
    this.boxWig = Math.max(0, this.boxWig - dt * 2);
    // branch springs up when relieved of the weight
    const loaded = sw.state === 'branch' ? 1 : 0;
    this.branchV += ((loaded - this.branchBend) * 60 - this.branchV * 5) * dt;
    this.branchBend += this.branchV * dt;
    if (sw.state === 'branch') {
      const bp = this.branchPt();
      sw.x = bp.x + Math.sin(this.t * 1.3) * 1.5; sw.y = bp.y + 24;
    } else if (sw.state === 'back') {
      const bp = this.branchPt();
      sw.x = damp(sw.x, bp.x, 3.5, dt); sw.y = damp(sw.y, bp.y + 24, 3.5, dt);
      if (Math.hypot(sw.x - bp.x, sw.y - bp.y - 24) < 3) { sw.state = 'branch'; audio.wood(this.pan(sw.x), 1.6, 0.05); }
      girl.target = null; girl.reachR = girl.reachL = null;
    } else if (sw.state === 'pour') {
      sw.x = damp(sw.x, sw.px, 4, dt); sw.y = damp(sw.y, sw.py, 4, dt);
    }
    // cluster shape follows motion (inertia of a soft mass)
    sw.sx = damp(sw.sx, 1 + clamp(Math.abs(sw.vx || 0) / 400, 0, 0.3), 6, dt);
    sw.sy = damp(sw.sy, 1 + clamp((sw.vy || 0) / 500, -0.2, 0.3), 6, dt);
    if (sw.state !== 'held') { sw.vx = damp(sw.vx || 0, 0, 5, dt); sw.vy = damp(sw.vy || 0, 0, 5, dt); }
    // bees orbiting the cluster (more when agitated)
    const nFly = sw.state === 'home' ? 0 : Math.round(lerp(3, 14, sw.ag));
    this.flyers.forEach((f, i) => {
      f.a += f.sp * dt * (0.6 + sw.ag);
      f.ph += dt * 40;
      const r = f.r * (0.7 + sw.ag * 0.6);
      const tx = sw.x + Math.cos(f.a) * r, ty = sw.y + Math.sin(f.a) * r * 0.6 + f.y;
      f.x = damp(f.x, tx, 6, dt); f.yy = damp(f.yy, ty, 6, dt);
      f.on = i < nFly;
    });
    for (const s of this.scouts) {
      s.t += dt; s.a += dt * 3; s.ph += dt * 40;
      const k = Math.sin(Math.min(1, s.t / s.life) * Math.PI);
      const tx = lerp(sw.x, girl.x, k) + Math.cos(s.a) * s.r, ty = lerp(sw.y, girl.y - 90, k) + Math.sin(s.a) * s.r * 0.6;
      s.x = damp(s.x, tx, 5, dt); s.y = damp(s.y, ty, 5, dt);
    }
    this.scouts = this.scouts.filter((s) => s.t < s.life);
    for (const b of this.onGirl) { b.t += dt; if (Math.random() < dt) b.a += rand(-1, 1); b.ox = clamp(b.ox + Math.cos(b.a) * dt * 6, -16, 16); b.oy = clamp(b.oy + Math.sin(b.a) * dt * 6, -110, -30); }
    // stream into the hive
    const e = this.entrance();
    for (const s of this.stream) {
      s.t += dt; s.ph += dt * 30;
      const k = Math.min(1, s.t / s.dur);
      const p = qbez(s.x, s.y, lerp(s.x, e.x, 0.5), Math.max(s.y, e.y) + 6, e.x + rand(-2, 2), e.y + 1, E.inOut(k));
      s.cx = p.x; s.cy = p.y;
      if (k >= 1) s.dead = true;
    }
    this.stream = this.stream.filter((s) => !s.dead);
    // orderly foraging loops
    for (const b of this.loopers) {
      b.t += dt; b.ph += dt * 40;
      if (b.t < 0) continue;
      const f = b.f;
      if (b.state === 'out') {
        b.k = Math.min(1, b.k + dt / 1.6);
        const p = qbez(e.x, e.y, (e.x + f.x) / 2, Math.min(e.y, f.y) - 60, f.x, f.y - 14, E.inOut(b.k));
        b.x = p.x; b.y = p.y; b.dir = f.x > e.x ? 1 : -1;
        if (b.k >= 1) { b.state = 'sip'; b.k = 0; f.dip = 1; }
      } else if (b.state === 'sip') {
        b.k += dt; b.x = f.x; b.y = f.y - 14 + f.dip * 2;
        if (b.k > 1.1) { b.state = 'in'; b.k = 0; }
      } else {
        b.k = Math.min(1, b.k + dt / 1.6);
        const p = qbez(f.x, f.y - 14, (e.x + f.x) / 2, Math.min(e.y, f.y) - 40, e.x, e.y, E.inOut(b.k));
        b.x = p.x; b.y = p.y; b.dir = f.x > e.x ? -1 : 1;
        if (b.k >= 1) { b.state = 'out'; b.k = 0; b.f = this.flowers[(Math.random() * this.flowers.length) | 0]; }
      }
    }
    for (const f of this.flowers || []) f.dip = Math.max(0, f.dip - dt * 1.5);
    // buzz: proximity and mood
    if (this.buzz) {
      const cam = g.cam;
      const dx = (sw.x - cam.x) * cam.s / (g.view.W * 0.5);
      const near = clamp(1.3 - Math.abs(dx) * 0.8, 0, 1);
      const vol = (sw.state === 'home' ? 0.05 + this.loopers.length * 0.004 : 0.05 + sw.ag * 0.08 + (sw.state === 'held' ? 0.05 : 0)) * near;
      this.buzz.set(this.g.current === this || this.visible() ? vol : 0, clamp(dx, -1, 1) * 0.8);
      this.buzz.pitch(sw.state === 'home' ? 0.96 : 0.95 + sw.ag * 0.18);
      if (!this.visible() && this.g.current !== this) { this.buzz.stop(); this.buzz = null; }
    }
    if ((this.g.current === this || (this.visible() && this.g.mode === 'travel')) && !this.buzz && audio.ctx) this.buzzOn();
  }
  idle(dt) { super.idle(dt); this.tick(dt); }

  // ---------------------------------------------------------------- drawing
  drawFloor(ctx) {
    const L = this.L, H = this.W(L.H);
    ctx.fillStyle = 'rgba(150,195,110,0.55)';
    ell(ctx, H.x - 60, H.y + 14, 190, this.P ? 70 : 46); ctx.fill();
  }

  collect(list) {
    const L = this.L;
    if (!this.clusterPts) this.initLife();
    const T = this.W(L.tree);
    list.push({ z: T.y, draw: (c) => this.drawTree(c) });
    const H = this.W(L.H), H2 = this.W(L.H2);
    list.push({ z: H2.y, draw: (c) => this.drawHive(c, H2.x, H2.y, 0, 0.9) });
    list.push({ z: H.y, draw: (c) => this.drawHive(c, H.x, H.y, this.box.off, 1) });
    for (const f of this.flowers) list.push({ z: f.y, draw: (c) => this.drawFlower(c, f) });
  }

  drawOver(ctx) {
    const sw = this.sw;
    // the living cluster
    if (sw.state !== 'home' && sw.n > 0) this.drawCluster(ctx);
    for (const f of this.flyers) if (f.on) drawBee(ctx, f.x, f.yy, Math.cos(f.a) > 0 ? 0.2 : Math.PI - 0.2, 1.2, f.ph);
    for (const s of this.scouts) drawBee(ctx, s.x, s.y, Math.cos(s.a) > 0 ? 0 : Math.PI, 1.2, s.ph);
    for (const s of this.stream) drawBee(ctx, s.cx, s.cy, Math.atan2(this.entrance().y - s.cy, this.entrance().x - s.cx), 1.1, s.ph);
    for (const b of this.loopers) if (b.t >= 0) drawBee(ctx, b.x, b.y, b.state === 'sip' ? -0.3 : (b.dir > 0 ? 0 : Math.PI), 1.2, b.ph);
    const girl = this.g.girl;
    for (const b of this.onGirl) if (b.t > 0 && girl.outfit === 'bee') drawBee(ctx, girl.x + b.ox, girl.y + b.oy, b.a, 1.1, 0);
    if (this.glintHive > 0) { const e = this.entrance(); glint(ctx, e.x + 10, e.y - 6, 6, Math.sin(this.glintHive * 6) * 0.9); }
  }

  drawCluster(ctx) {
    const sw = this.sw, t = this.t;
    const k = sw.n / 46;
    const s = 0.5 + 0.5 * k;
    ctx.save();
    ctx.translate(sw.x, sw.y);
    ctx.scale(sw.sx * s, sw.sy * s);
    const wob = Math.sin(t * 3) * 0.04 * (0.3 + sw.ag);
    ctx.rotate(wob - clamp((sw.vx || 0) / 900, -0.4, 0.4));
    // gloves cupping it while carried
    if (sw.state === 'held' || sw.state === 'pour') {
      ctx.save();
      for (const side of [-1, 1]) {
        ell(ctx, side * 12, 22, 12, 8, side * 0.4); fillStroke(ctx, '#eedfb4', C.line, 1.3);
      }
      ctx.restore();
    }
    // mass
    ctx.fillStyle = '#b8862e';
    ctx.beginPath();
    ctx.moveTo(0, -24);
    ctx.bezierCurveTo(16, -22, 21, 4, 12, 18);
    ctx.quadraticCurveTo(0, 28, -12, 18);
    ctx.bezierCurveTo(-21, 4, -16, -22, 0, -24);
    ctx.fill();
    // individual bees crawling over it
    const n = Math.min(this.clusterPts.length, Math.round(10 + 50 * k));
    for (let i = 0; i < n; i++) {
      const p = this.clusterPts[i];
      const y = -22 + p.v * 44;
      const w = 16 * Math.sin(0.25 + p.v * 2.6);
      const x = p.u * w * 0.9 + Math.sin(t * (1 + sw.ag * 3) + p.ph) * (0.8 + sw.ag * 1.5);
      drawBee(ctx, x, y + Math.cos(t * 1.3 + p.ph) * 0.8, p.a + Math.sin(t + p.ph) * 0.3, 1.25, t * 10 + p.ph);
    }
    ctx.restore();
  }

  drawTree(ctx) {
    const L = this.L;
    const T = this.W(L.tree);
    shadow(ctx, T.x + 10, T.y, 55, 11, 0.18);
    ctx.beginPath(); ctx.moveTo(T.x - 13, T.y); ctx.lineTo(T.x - 8, T.y - 150); ctx.lineTo(T.x + 8, T.y - 150); ctx.lineTo(T.x + 14, T.y); ctx.closePath();
    fillStroke(ctx, '#8b6243', C.woodDD, 1.5);
    const a = this.W(L.br.a), b = this.W(L.br.b);
    const bend = this.branchBend * 7;
    const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 + bend * 0.8 };
    ctx.strokeStyle = C.woodDD; ctx.lineWidth = 9.5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.quadraticCurveTo(mid.x, mid.y, b.x, b.y + bend); ctx.stroke();
    ctx.strokeStyle = '#8b6243'; ctx.lineWidth = 7;
    ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.quadraticCurveTo(mid.x, mid.y, b.x, b.y + bend); ctx.stroke();
    leafClump(ctx, b.x + 6, b.y + bend - 6, 16, 0.4, C.leafD, C.leaf, C.leafL);
    // the twig the cluster hangs from
    const bp = this.branchPt();
    limb(ctx, bp.x - 4, bp.y - 6 + bend * 0.2, bp.x, bp.y, 3, '#8b6243', C.woodDD, 1);
    leafClump(ctx, T.x - 20, T.y - 162, 38, 0.2);
    leafClump(ctx, T.x + 28, T.y - 176, 34, 0.7);
    leafClump(ctx, T.x, T.y - 204, 38, 0.5);
  }

  drawHive(ctx, x, y, off, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
    shadow(ctx, 4, 0, 34, 5, 0.2);
    // stand
    rr(ctx, -22, -20, 5, 20, 1.5); fillStroke(ctx, C.woodD, C.line, 1.1);
    rr(ctx, 17, -20, 5, 20, 1.5); fillStroke(ctx, C.woodD, C.line, 1.1);
    plank(ctx, -28, -24, 56, 5, C.wood, 2);
    // bottom box
    rr(ctx, -24, -54, 48, 30, 2); fillStroke(ctx, '#f1d58a', C.line, 1.5);
    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.fillRect(-22, -52, 5, 26);
    // entrance + landing board
    rr(ctx, -13, -29, 26, 4, 1.5); ctx.fillStyle = '#3a2c22'; ctx.fill();
    plank(ctx, -17, -26, 34, 3, C.woodL, 3);
    const wig = this.boxWig > 0 && off > 0 ? Math.sin(this.t * 30) * this.boxWig * 1.5 : 0;
    // gap left when the top box slid: frames and honeycomb show
    if (off > 0.5) {
      ctx.fillStyle = '#4a3522'; ctx.fillRect(-24, -57, Math.min(48, off), 4);
      ctx.fillStyle = '#e9b949';
      for (let i = 0; i < Math.min(48, off) - 2; i += 4) { ctx.fillRect(-23 + i, -57, 2.4, 3); }
      if (this.glintT > 0) glint(ctx, -24 + off / 2, -58, 5, Math.sin(this.glintT * 6));
    }
    // top box
    ctx.save(); ctx.translate(off + wig, 0);
    if (off > 0.5) { ctx.fillStyle = 'rgba(0,0,0,0.12)'; ctx.fillRect(-24, -54, 48, 3); }
    rr(ctx, -24, -80, 48, 26, 2); fillStroke(ctx, '#ecce7e', C.line, 1.5);
    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.fillRect(-22, -78, 5, 22);
    rr(ctx, -9, -70, 18, 5, 2); fillStroke(ctx, '#caa860', C.line, 1);
    // lid
    rr(ctx, -28, -89, 56, 10, 2); fillStroke(ctx, '#a3adb4', C.line, 1.5);
    ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.fillRect(-26, -88, 52, 2);
    ctx.restore();
    ctx.restore();
  }

  drawFlower(ctx, f) {
    const col = ['#f28ca0', '#ffffff', '#f7cf4f', '#b99ae8'][f.c];
    const sw = Math.sin(this.t * 1.5 + f.ph) * 1.2;
    const dip = f.dip * 3;
    ctx.strokeStyle = C.leafD; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(f.x, f.y); ctx.quadraticCurveTo(f.x + sw * 0.5, f.y - 8, f.x + sw, f.y - 14 + dip); ctx.stroke();
    ctx.fillStyle = C.leaf; ell(ctx, f.x - 4, f.y - 5, 4, 1.8, -0.5); ctx.fill();
    ctx.fillStyle = col;
    for (let i = 0; i < 6; i++) { const a = (i / 6) * TAU; circ(ctx, f.x + sw + Math.cos(a) * 3.6, f.y - 14 + dip + Math.sin(a) * 3.2, 2.8); ctx.fill(); }
    ctx.fillStyle = '#f5b83d'; circ(ctx, f.x + sw, f.y - 14 + dip, 2); ctx.fill();
  }

  debugTargets() {
    const H = this.W(this.L.H);
    return { box: { x: H.x + this.box.off + 10, y: H.y - 66 }, hiveHome: { x: H.x - 8, y: H.y - 66 }, smoker: this.g.girl.handWorld('R'), swarm: { x: this.sw.x, y: this.sw.y }, entrance: this.entrance() };
  }
}
