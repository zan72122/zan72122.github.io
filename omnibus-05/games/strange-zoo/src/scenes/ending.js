// Ending: the roles flip.  In the little plaza each animal chooses something
// for the girl; she puts each piece on, sees herself in the mirror, twirls,
// and everyone gathers for a photo.  The photo is pinned at the gate, where
// pushing the doors starts a new day.
import { Scene } from './base.js';
import { ST } from '../world.js';
import { clamp, lerp, damp, E, anim, inv, rand, TAU, angDiff, qbez } from '../util.js';
import { C, rr, ell, circ, fillStroke, plank, shadow, leafClump, limb, glint } from '../draw.js';
import { audio } from '../audio.js';
import { splashDrops, dustPuff } from '../fx.js';
import { drawFinalItem } from '../girl.js';
import { newElephant, updateElephant, drawElephant, elephantFlap } from './elephant.js';
import { Bird } from './aviary.js';
import { drawOtter } from './aquarium.js';
import { drawBee } from './bees.js';

function drawDress(ctx, x, y, col, stripe, s = 1, rot = 0) {
  if (col === '#f7cf4f') { drawFinalItem(ctx, 'dress', x, y, s, rot); return; }
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
  ctx.strokeStyle = '#8d969d'; ctx.lineWidth = 1.6;
  ctx.beginPath(); ctx.arc(0, -4, 3.5, Math.PI, Math.PI * 2.2); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-11, 4); ctx.lineTo(11, 4); ctx.lineTo(10, 24); ctx.quadraticCurveTo(18, 40, 21, 56);
  ctx.quadraticCurveTo(0, 60, -21, 56); ctx.quadraticCurveTo(-18, 40, -10, 24); ctx.closePath();
  fillStroke(ctx, col, C.line, 1.5);
  if (stripe) {
    ctx.save(); ctx.clip();
    ctx.strokeStyle = stripe; ctx.lineWidth = 3;
    for (let yy = 10; yy < 60; yy += 8) { ctx.beginPath(); ctx.moveTo(-25, yy); ctx.lineTo(25, yy); ctx.stroke(); }
    ctx.restore();
  }
  ctx.strokeStyle = C.woodD; ctx.lineWidth = 2.6;
  ctx.beginPath(); ctx.moveTo(-17, 6); ctx.lineTo(0, 0); ctx.lineTo(17, 6); ctx.stroke();
  ctx.restore();
}

export class EndingScene extends Scene {
  constructor(g) { super(g, 'ending', ST.plaza); this.range = [-520, 520]; }

  reset() {
    super.reset();
    this.e = null;
    this.birds = null;
    this.otter = { x: 0, y: 0, roll: 0, look: 0, hold: null, dip: 0, dir: 1, happy: true, spin: 0 };
    this.items = null;
    this.mirror = { ang: 1.35, target: 1.35, v: 0, swiveled: false };
    this.cam = { timer: -1, blink: 0 };
    this.bees = [];
    this.photo = null;
    this.drag = null;
    this.lightSpot = 0;
    this.eOff = 0;
  }

  layoutL() {
    return {
      girl: { x: -125, y: 0 }, rack: { x: -262, y: 0 },
      stand: { x: -40, y: -8 },
      rail: { x: 44, y: -100 }, hats: { x: -128, y: -98 }, basket: { x: 104, y: -80 },
      ele: { x: 170, y: -118, s: 0.78 },
      pond: { x: 226, y: 8, rx: 84, ry: 22 },
      mirror: { x: -200, y: -56 },
      planter: { x: -60, y: -168 },
      tripod: { x: 60, y: 36 },
      photoSpot: { x: -20, y: -8 },
      frames: { overview: { x: -350, y: -350, w: 690, h: 395 }, photo: { x: -270, y: -300, w: 560, h: 340 } },
    };
  }
  layoutP() {
    return {
      girl: { x: 60, y: 0 }, rack: { x: -77, y: 0 },
      stand: { x: -14, y: -176 },
      rail: { x: -58, y: -268 }, hats: { x: -126, y: -212 }, basket: { x: 16, y: -250 },
      ele: { x: 76, y: -300, s: 0.62 },
      pond: { x: 76, y: -104, rx: 64, ry: 19 },
      mirror: { x: -112, y: -120 },
      planter: { x: -80, y: -420 },
      tripod: { x: 100, y: 12 },
      photoSpot: { x: -10, y: -176 },
      frames: { overview: { x: -160, y: -565, w: 320, h: 617 }, photo: { x: -160, y: -520, w: 320, h: 560 } },
    };
  }
  W(p) { return { x: this.wx(p.x), y: p.y }; }

  prepare() { this.reset(); this.layout(); this.initCast(); }
  girlSpot() {
    if (this.step.startsWith('offer-') || /choose|wearing|mirror|look/.test(this.step)) return this.W(this.L.stand);
    if (['photo', 'timer'].includes(this.step)) return this.W(this.L.photoSpot);
    return super.girlSpot();
  }
  onRelayout() {
    if (!this.items) return;
    const L = this.L;
    const rail = this.W(L.rail), hats = this.W(L.hats), bas = this.W(L.basket), P = this.W(L.pond);
    if (this.drag) { this.items[this.drag.name].state = 'return'; this.drag = null; }
    const it = this.items;
    if (it.dress.state === 'rail') { it.dress.x = rail.x; it.dress.y = rail.y - 122; }
    this.others[0].x = rail.x - 32; this.others[1].x = rail.x + 32;
    if (it.hat.state === 'rail') { it.hat.x = hats.x; it.hat.y = hats.y - 96; }
    if (it.bag.state === 'rail' || it.bag.state === 'offer') { it.bag.x = bas.x - 2; it.bag.y = bas.y - 20; }
    if (it.sandals.state === 'float') { it.sandals.x = P.x + L.pond.rx * 0.2; }
    if (it.sandals.state === 'offer') { it.sandals.x = P.x - L.pond.rx + 18; }
    this.otter.x = it.sandals.state === 'offer' ? P.x - L.pond.rx + 48 : P.x + L.pond.rx * 0.45;
    const per = this.birdPerches();
    this.birds.forEach((b, i) => { if (b.state === 'perch') { b.x = per[i].x; b.y = per[i].y; } });
    if (it.hat.state === 'offer') { const o = this.offerPoint('hat'); it.hat.x = o.x; it.hat.y = o.y; }
  }
  initCast() {
    const L = this.L;
    const e = newElephant();
    e.eye = 'happy'; e.hurtLift = 0; e.bandage = 1; e.shift = 0; e.trunkUp = 0.15;
    this.e = e;
    this.eOff = 420; // enters later from the right
    this.birds = [0, 1, 2, 3].map((i) => { const b = new Bird(i, this.wx(260 + i * 30), -420); b.state = 'fly'; b.alpha = 0; return b; });
    const P = this.W(L.pond);
    this.otter.x = P.x + L.pond.rx * 0.45; this.otter.y = P.y; this.otter.alpha = 0;
    const rail = this.W(L.rail), hats = this.W(L.hats), bas = this.W(L.basket);
    this.items = {
      dress: { x: rail.x, y: rail.y - 122, state: 'rail', ang: 0 },
      hat: { x: hats.x, y: hats.y - 96, state: 'rail', ang: 0 },
      sandals: { x: P.x + L.pond.rx * 0.2, y: P.y - 2, state: 'float', ang: 0 },
      bag: { x: bas.x - 2, y: bas.y - 20, state: 'rail', ang: 0 },
    };
    this.others = [
      { x: rail.x - 32, col: '#f4a6b8', stripe: '#ffffff', sw: 0, av: 0 },
      { x: rail.x + 32, col: '#a8dcc8', stripe: null, sw: 0, av: 0 },
    ];
  }

  enter() {
    const g = this.g;
    if (!this.e) this.initCast();
    this.step = 'arrive';
    audio.ambientBirds = true;
    this.run.run(this.arrive());
  }

  eWorld() {
    const L = this.L, e = this.e;
    e.x = this.wx(L.ele.x + this.eOff); e.y = L.ele.y; e.s = L.ele.s;
    return e;
  }
  trunkTipWorld() {
    const e = this.eWorld();
    const tip = e.trunkTip || { x: lerp(-128, -168, e.trunkUp), y: lerp(-26, -236, e.trunkUp) };
    return { x: e.x + (tip.x + e.shift) * e.s * e.dir, y: e.y + tip.y * e.s };
  }
  trunkToLocal(wx, wy) { const e = this.eWorld(); return { x: (wx - e.x) / (e.s * e.dir) - e.shift, y: (wy - e.y) / e.s }; }

  *moveTrunk(wx, wy, dur = 0.8) {
    const e = this.e;
    const from = e.trunkTip ? { ...e.trunkTip } : (() => { const t = this.trunkTipWorld(); return this.trunkToLocal(t.x, t.y); })();
    const to = this.trunkToLocal(wx, wy);
    yield* anim(dur, (k) => { e.trunkTip = { x: lerp(from.x, to.x, k), y: lerp(from.y, to.y, k) }; });
  }

  *arrive() {
    const g = this.g, girl = g.girl, L = this.L, e = this.e;
    // she steps into the middle of the plaza
    yield 0.2;
    const st = this.W(L.stand);
    yield* girl.walkTo(st.x, st.y);
    girl.facing = 1;
    // the friends arrive: elephant walks in, birds fly in, the pup pops up, bees come to the flowers
    e.walking = 1;
    let lastPh = 0;
    audio.elephant('happy', this.pan(this.wx(L.ele.x + 200)));
    yield* anim(2.4, (k) => {
      this.eOff = lerp(420, 0, k);
      if (Math.floor(e.walkPh / Math.PI) !== lastPh) { lastPh = Math.floor(e.walkPh / Math.PI); audio.thud(this.pan(this.eWorld().x), 0.1); }
      girl.lookAt(this.eWorld().x - 60, L.ele.y - 100);
    }, E.out);
    e.walking = 0; for (const l of e.legs) { l.dx = 0; l.lift = 0; }
    const perches = this.birdPerches();
    this.birds.forEach((b, i) => { b.alpha = 1; b.flyTo(perches[i].x, perches[i].y, 1.2 + i * 0.2, 60); setTimeout(() => audio.chirp(this.pan(b.x), 0.7, i), i * 200); });
    yield 0.6;
    this.otter.alpha = 1;
    audio.splash(this.pan(this.otter.x), 0.3);
    splashDrops(g.fx, this.otter.x, this.otter.y - 4, 8, 70, this.otter.y + 2);
    audio.squeak(this.pan(this.otter.x));
    for (let i = 0; i < 8; i++) this.bees.push(this.newBee('planter'));
    yield 1.2;
    girl.say('open', 1.2);
    yield 0.6;
    yield* this.elephantChooses();
  }

  birdPerches() {
    const L = this.L;
    const r = this.W(L.rail), h = this.W(L.hats);
    return [
      { x: r.x - 30, y: r.y - 136 }, { x: r.x + 10, y: r.y - 136 },
      { x: h.x + 2, y: h.y - 118 }, { x: r.x + 44, y: r.y - 136 },
    ];
  }

  newBee(home) {
    const p = this.W(this.L.planter);
    return { x: p.x + rand(-20, 20), y: p.y - 20 + rand(-10, 10), a: rand(0, TAU), r: rand(10, 26), sp: rand(1.5, 3) * (Math.random() < 0.5 ? -1 : 1), ph: rand(0, 6), home, cx: p.x, cy: p.y - 24 };
  }

  // ------------------------------------------------------------ the choices
  *elephantChooses() {
    const g = this.g, girl = g.girl, e = this.e, it = this.items.dress;
    this.step = 'e-choose';
    const rail = this.W(this.L.rail);
    girl.lookAt(rail.x, rail.y - 80);
    // the elephant considers each dress with its trunk
    yield* this.moveTrunk(this.others[0].x, rail.y - 100, 0.9);
    this.others[0].av += 2; audio.cloth(this.pan(rail.x), 0.4); audio.elephant('breath', this.pan(e.x));
    yield 0.5;
    yield* this.moveTrunk(this.others[1].x, rail.y - 100, 0.7);
    this.others[1].av -= 2; audio.cloth(this.pan(rail.x), 0.4);
    yield 0.4;
    yield* this.moveTrunk(it.x, it.y + 2, 0.6);
    // picks the yellow one and lifts it off the rail
    it.state = 'carried';
    audio.cloth(this.pan(it.x), 0.8); audio.metal(this.pan(it.x), 1.8);
    const girlP = this.offerPoint('dress');
    yield* this.moveTrunk(girlP.x, girlP.y, 1.1);
    elephantFlap(e, 0.6);
    audio.elephant('happy', this.pan(e.x));
    this.offer('dress');
  }

  offerPoint(name) {
    const girl = this.g.girl;
    const side = this.P ? 1 : 1;
    if (name === 'dress') return this.P ? { x: girl.x + 44, y: girl.y - 128 } : { x: girl.x + 56, y: girl.y - 124 };
    if (name === 'hat') return { x: girl.x + 20, y: girl.y - 178 };
    return { x: girl.x + 60, y: girl.y - 60 };
  }

  itemPos(name) {
    const it = this.items[name];
    if (name === 'dress' && (it.state === 'carried' || it.state === 'offer')) { const t = this.trunkTipWorld(); return { x: t.x, y: t.y + 2 }; }
    return { x: it.x, y: it.y };
  }

  offer(name) {
    const g = this.g, girl = g.girl;
    const it = this.items[name];
    it.state = 'offer';
    this.step = 'offer-' + name;
    girl.lookAt(this.itemPos(name).x, this.itemPos(name).y);
    const self = this;
    g.hints.set(this.step, [
      { t: 3, fn: () => { it.wig = 1; audio.cloth(this.pan(this.itemPos(name).x), 0.4); self.nudge(name); girl.lookAt(this.itemPos(name).x, this.itemPos(name).y); } },
      { t: 6.5, fn: () => { it.glint = 1.3; audio.chime(this.pan(this.itemPos(name).x), 0.035); self.nudge(name); } },
      { t: 10, fn: () => { const p = this.itemPos(name); const tgt = name === 'hat' ? { x: girl.x, y: girl.y - 110 } : name === 'sandals' ? { x: girl.x, y: girl.y - 20 } : { x: girl.x, y: girl.y - 70 }; g.ghost.drag(p.x, p.y + (name === 'dress' ? 30 : 0), tgt.x, tgt.y, 2); } },
    ], 18);
  }

  nudge(name) {
    // the chooser re-offers its pick
    if (name === 'dress') { elephantFlap(this.e, 0.5); audio.elephant('breath', this.pan(this.e.x)); }
    if (name === 'hat') for (const b of this.hatBirds || []) audio.chirp(this.pan(b.x), 0.5, b.i);
    if (name === 'sandals') { audio.squeak(this.pan(this.otter.x)); this.otter.spin = 0.4; }
    if (name === 'bag') for (const b of this.bees) b.r *= 1.3;
  }

  busy() { return !!this.drag; }

  down(p) {
    const g = this.g;
    if (this.step.startsWith('offer-')) {
      const name = this.step.slice(6);
      const ip = this.itemPos(name);
      const cy = name === 'dress' ? ip.y + 30 : ip.y;
      const R = Math.max(38, g.px(44)) + (name === 'dress' ? 16 : 0);
      if (Math.hypot(p.x - ip.x, p.y - cy) < R) {
        const it = this.items[name];
        this.drag = { name, tx: ip.x, ty: ip.y, dwell: 0 };
        it.state = 'drag'; it.x = ip.x; it.y = ip.y;
        audio.cloth(this.pan(p.x), 0.6);
        if (name === 'hat') for (const b of this.hatBirds) b.flyTo(b.x + (b.x < ip.x ? -40 : 40), b.y - 30, 0.6, 10, () => {});
        return;
      }
      // a tap on the girl: she reaches for it (then the drag is obvious)
      const bb = g.girl.bodyBox();
      if (p.x > bb.x0 && p.x < bb.x1 && p.y > bb.y0 && p.y < bb.y1) { g.girl.reachR = ip; setTimeout(() => { g.girl.reachR = null; }, 700); }
    }
    if (this.step === 'mirror' && this.hitMirror(p)) { this.swivel(); return; }
    if (this.step === 'photo' && this.hitTripod(p)) { this.shoot(); return; }
    // other dresses sway; the animals chose, not us
    for (const o of this.others || []) { if (Math.abs(p.x - o.x) < 18 && p.y > this.W(this.L.rail).y - 124 && p.y < this.W(this.L.rail).y - 60) { o.av += 3; audio.cloth(this.pan(p.x), 0.4); } }
    if (Math.hypot(p.x - this.otter.x, p.y - this.otter.y) < 30) { audio.squeak(this.pan(p.x)); this.otter.spin = 0.5; }
  }
  move(p) {
    if (this.drag) { this.drag.tx = p.x; this.drag.ty = p.y - (this.drag.name === 'dress' ? 30 : 0); }
  }
  up(p) {
    const d = this.drag;
    if (!d) return;
    this.drag = null;
    const it = this.items[d.name];
    if (this.onGirl(it.x, it.y + (d.name === 'dress' ? 30 : 0), p)) this.wear(d.name);
    else { it.state = 'return'; audio.cloth(this.pan(it.x), 0.4); }
  }
  onGirl(x, y, p) {
    const bb = this.g.girl.bodyBox();
    const pad = 16;
    const inB = (xx, yy) => xx > bb.x0 - pad && xx < bb.x1 + pad && yy > bb.y0 - 40 && yy < bb.y1 + 10;
    return inB(x, y) || (p && inB(p.x, p.y));
  }

  wear(name) {
    const g = this.g, girl = g.girl, it = this.items[name];
    it.state = 'worn';
    g.hints.clear();
    this.step = 'wearing';
    const from = { x: it.x, y: it.y };
    const next = () => this.run.run(this.afterWear(name));
    if (name === 'dress') girl.startChange('final', from, next);
    else girl.equipPiece(name, from, next);
  }

  *afterWear(name) {
    const g = this.g, girl = g.girl, e = this.e;
    girl.say('happy', 1.2);
    if (name === 'dress') {
      e.trunkTip = null; e.trunkUp = 0.9; audio.elephant('happy', this.pan(e.x)); elephantFlap(e, 1);
      yield 1.0; e.trunkUp = 0.15;
      yield* this.birdsChoose();
    } else if (name === 'hat') {
      for (const b of this.hatBirds) { const p = this.birdPerches()[b.i]; b.flyTo(p.x, p.y, 0.9, 30); audio.chirp(this.pan(b.x), 0.8, b.i); }
      yield 1.0;
      yield* this.otterChooses();
    } else if (name === 'sandals') {
      girl.jump(30);
      audio.drip(this.pan(girl.x), 0.05);
      g.fx.add({ type: 'drop', x: girl.x + 6, y: girl.y - 6, vx: 10, vy: -20, g: 500, life: 1, size: 1.2, ground: girl.y + 2 });
      this.otter.spin = 1; audio.squeak(this.pan(this.otter.x));
      yield 1.0;
      yield* this.beesChoose();
    } else if (name === 'bag') {
      for (const b of this.bees) b.home = 'planter';
      yield 0.8;
      this.toMirror();
    }
  }

  *birdsChoose() {
    const g = this.g, girl = g.girl;
    this.step = 'b-choose';
    const hat = this.items.hat;
    const b1 = this.birds[1], b2 = this.birds[2];
    this.hatBirds = [b1, b2];
    girl.lookAt(hat.x, hat.y);
    // two birds take the light straw hat by the brim
    b1.flyTo(hat.x - 22, hat.y - 4, 0.8, 20); b2.flyTo(hat.x + 22, hat.y - 4, 0.9, 20);
    audio.chirp(this.pan(hat.x), 0.7, 1);
    yield () => b1.state === 'perch' && b2.state === 'perch';
    b1.facing = 1; b2.facing = -1;
    yield 0.3;
    hat.state = 'carried';
    b1.state = 'hover'; b2.state = 'hover';
    const from = { x: hat.x, y: hat.y }, to = this.offerPoint('hat');
    yield* anim(1.6, (k) => {
      hat.x = lerp(from.x, to.x, k); hat.y = lerp(from.y, to.y, k) - Math.sin(k * Math.PI) * 30 + Math.sin(k * 20) * 1.5;
      b1.x = hat.x - 22; b1.y = hat.y - 6 + Math.sin(this.t * 12) * 1.5; b2.x = hat.x + 22; b2.y = hat.y - 6 + Math.cos(this.t * 12) * 1.5;
    });
    this.offer('hat');
  }

  *otterChooses() {
    const g = this.g, girl = g.girl, o = this.otter, s = this.items.sandals;
    this.step = 'o-choose';
    const L = this.L, P = this.W(L.pond);
    girl.lookAt(o.x, o.y);
    // the pup swims behind the floating blue sandals and nudges them to the edge
    audio.squeak(this.pan(o.x));
    yield* anim(0.4, (k) => { o.roll = k; });
    const sx = s.x, ox = o.x;
    const ex = P.x - L.pond.rx + 18;
    o.dir = -1;
    yield* anim(2.0, (k) => {
      s.x = lerp(sx, ex, k); o.x = lerp(ox, ex + 30, k);
      if (Math.random() < 0.2) this.ripple(o.x + 10, P.y);
    }, E.inOut);
    yield* anim(0.4, (k) => { o.roll = 1 - k; });
    o.dir = 1;
    audio.squeak(this.pan(o.x));
    this.offer('sandals');
  }

  *beesChoose() {
    const g = this.g, girl = g.girl, bag = this.items.bag;
    this.step = 'bee-choose';
    girl.lookAt(bag.x, bag.y);
    // bees gather on the flower-pattern pochette: that is their pick
    for (let i = 0; i < 6; i++) this.bees.push(this.newBee('bag'));
    for (const b of this.bees) b.home = 'bag';
    audio.tone({ type: 'sawtooth', f: 220, f2: 250, dur: 1.2, gain: 0.03, pan: this.pan(bag.x), filter: { type: 'bandpass', freq: 600, q: 2 } });
    yield 2.0;
    this.offer('bag');
  }

  toMirror() {
    const g = this.g, girl = g.girl;
    this.step = 'mirror';
    const M = this.W(this.L.mirror);
    girl.lookAt(M.x, M.y - 70);
    g.hints.set('mirror', [
      { t: 2.5, fn: () => { this.lightSpot = 1.5; audio.chime(this.pan(M.x), 0.03); girl.lookAt(M.x, M.y - 70); } },
      { t: 6, fn: () => { this.mirror.v += 2; audio.creak(this.pan(M.x), 1.6); } },
      { t: 9.5, fn: () => g.ghost.tap(M.x, M.y - 70) },
    ], 16);
  }
  hitMirror(p) { const M = this.W(this.L.mirror); return Math.abs(p.x - M.x) < 44 && p.y > M.y - 130 && p.y < M.y + 10; }
  swivel() {
    if (this.mirror.swiveled) return;
    this.mirror.swiveled = true; this.mirror.target = 0; this.mirror.v = -3;
    audio.creak(this.pan(this.W(this.L.mirror).x), 1.3);
    this.g.hints.clear();
    this.step = 'look';
    this.run.run(this.lookAndTwirl());
  }

  *lookAndTwirl() {
    const g = this.g, girl = g.girl, e = this.e, M = this.W(this.L.mirror);
    yield 0.8;
    girl.facing = M.x < girl.x ? -1 : 1;
    girl.lookAt(M.x, M.y - 60);
    // she is a little surprised at herself...
    girl.say('o', 1.4); girl.setPose('cheeks');
    audio.tone({ type: 'sine', f: 880, f2: 1320, dur: 0.25, gain: 0.05 });
    yield 1.3;
    // ...then twirls happily
    girl.setPose('cheer'); girl.say('open', 2.4);
    audio.jingle('final');
    girl.spinAmt = 1;
    yield* anim(1.7, (k) => { girl.spin = k * TAU * 2; }, E.inOut);
    girl.spin = 0; girl.spinAmt = 0;
    girl.setPose(null);
    girl.jump(60);
    // friends cheer
    e.trunkUp = 1; e.trunkTip = null; audio.elephant('happy', this.pan(e.x)); elephantFlap(e, 1);
    for (const b of this.birds) { b.hop = 1; audio.chirp(this.pan(b.x), 0.8, b.i); }
    this.otter.spin = 1;
    for (const b of this.bees) b.home = 'dance';
    yield 1.6;
    e.trunkUp = 0.3;
    yield* this.gather();
  }

  *gather() {
    const g = this.g, girl = g.girl, L = this.L, e = this.e;
    this.step = 'gather';
    const ps = this.W(L.photoSpot);
    yield* girl.walkTo(ps.x, ps.y);
    girl.facing = 1;
    this.setCam('photo', 1.6);
    // everyone comes close for a picture
    const off0 = this.eOff;
    e.walking = 1;
    const targetOff = this.P ? -80 : -120;
    yield* anim(1.4, (k) => { this.eOff = lerp(off0, targetOff, k); }, E.inOut);
    e.walking = 0; for (const l of e.legs) { l.dx = 0; l.lift = 0; }
    const ew = this.eWorld();
    const spots = [
      { x: ew.x + 10 * e.s, y: ew.y - 196 * e.s }, { x: ew.x + 50 * e.s, y: ew.y - 190 * e.s },
      { x: ew.x - 60 * e.s, y: ew.y - 205 * e.s }, { x: girl.x + 30, y: girl.y - 150 },
    ];
    this.birds.forEach((b, i) => b.flyTo(spots[i].x, spots[i].y, 1 + i * 0.15, 30));
    for (const b of this.bees) b.home = 'halo';
    this.otter.look = 0;
    const cam = this.W(L.tripod);
    girl.lookAt(cam.x, cam.y - 40);
    yield 1.4;
    this.step = 'photo';
    this.cam.blink = 1;
    g.hints.set('photo', [
      { t: 2.5, fn: () => { this.cam.glint = 1.3; audio.beep(); girl.lookAt(cam.x, cam.y - 40); } },
      { t: 6, fn: () => { girl.setPose('point'); setTimeout(() => girl.setPose(null), 900); } },
      { t: 9.5, fn: () => g.ghost.tap(cam.x, cam.y - 40) },
    ], 16);
  }

  hitTripod(p) { const T = this.W(this.L.tripod); return Math.abs(p.x - T.x) < 50 && p.y > T.y - 80 && p.y < T.y + 16; }

  shoot() {
    if (this.step !== 'photo') return;
    this.step = 'timer';
    this.g.hints.clear();
    this.run.run(this.timerShot());
  }

  *timerShot() {
    const g = this.g, girl = g.girl, e = this.e;
    for (let i = 0; i < 3; i++) { this.cam.timer = i; audio.beep(); yield 0.55; }
    girl.setPose('cheer'); girl.say('open', 3);
    e.trunkUp = 1; e.eye = 'happy';
    for (const b of this.birds) b.hop = 1;
    yield 0.25;
    this.hideTripod = true;
    this.capture = true;
    yield () => !this.capture;
    this.hideTripod = false;
    audio.shutter();
    g.flash();
    yield 0.5;
    this.photo = { t: 0 };
    audio.musicBox();
    yield 4.6;
    // a new day begins at the gate, with the photo pinned there
    const img = this.photoImg;
    g.runner.run((function* () {
      yield* anim(0.9, (k) => { g.overlay.fade = k; });
      g.pendingPhoto = img;
      g.restart();
      yield* anim(0.9, (k) => { g.overlay.fade = 1 - k; });
      g.overlay.fade = 0;
    })());
  }

  ripple(x, y) { this.g.fx.add({ type: 'ring', x, y, size: 16, life: 1, color: 'rgba(255,255,255,0.8)', lw: 1 }); }

  // ------------------------------------------------------------ update
  update(dt) {
    super.update(dt);
    this.tick(dt);
    const g = this.g, girl = g.girl;
    const d = this.drag;
    if (d) {
      const it = this.items[d.name];
      it.x = damp(it.x, d.tx, 18, dt); it.y = damp(it.y, d.ty, 18, dt);
      girl.lookAt(it.x, it.y);
      if (this.onGirl(it.x, it.y + (d.name === 'dress' ? 30 : 0))) { d.dwell += dt; if (d.dwell > 0.3) { this.drag = null; this.wear(d.name); } }
      else d.dwell = 0;
    }
    for (const name in this.items) {
      const it = this.items[name];
      if (it.state === 'return') {
        const tp = name === 'dress' ? (() => { const t = this.trunkTipWorld(); return { x: t.x, y: t.y + 2 }; })() : name === 'hat' ? this.offerPoint('hat') : name === 'sandals' ? { x: this.W(this.L.pond).x - this.L.pond.rx + 18, y: this.W(this.L.pond).y - 2 } : { x: this.W(this.L.basket).x - 2, y: this.W(this.L.basket).y - 20 };
        it.x = damp(it.x, tp.x, 8, dt); it.y = damp(it.y, tp.y, 8, dt);
        if (Math.hypot(it.x - tp.x, it.y - tp.y) < 2) {
          it.state = 'offer';
          if (name === 'hat') for (const b of this.hatBirds) { b.state = 'hover'; }
        }
      }
      if (name === 'hat' && (it.state === 'offer') && this.hatBirds) {
        this.hatBirds[0].x = it.x - 22; this.hatBirds[0].y = it.y - 6 + Math.sin(this.t * 12) * 1.5;
        this.hatBirds[1].x = it.x + 22; this.hatBirds[1].y = it.y - 6 + Math.cos(this.t * 12) * 1.5;
        this.hatBirds[0].state = 'hover'; this.hatBirds[1].state = 'hover';
      }
      it.wig = Math.max(0, (it.wig || 0) - dt * 1.5);
      it.glint = Math.max(0, (it.glint || 0) - dt);
    }
  }

  tick(dt) {
    if (!this.e) this.initCast();
    const e = this.eWorld();
    updateElephant(e, dt);
    for (const b of this.birds) b.update(dt, this.g);
    const o = this.otter, P = this.W(this.L.pond);
    o.y = P.y - 2 + Math.sin(this.t * 2) * 1.2;
    if (o.spin > 0) { o.spin = Math.max(0, o.spin - dt * 0.8); o.roll = Math.abs(Math.sin(o.spin * Math.PI * 2)) * 0.9; }
    const s = this.items.sandals;
    if (s.state === 'float' || s.state === 'offer') s.y = P.y - 2 + Math.sin(this.t * 2 + 1) * 1.2;
    for (const od of this.others) { od.av += (-od.sw * 30 - od.av * 3) * dt; od.sw += od.av * dt; }
    // mirror swivel physics
    const m = this.mirror;
    m.v += ((m.target - m.ang) * 25 - m.v * 5) * dt; m.ang += m.v * dt;
    this.lightSpot = Math.max(0, this.lightSpot - dt);
    // bees
    const bag = this.items.bag, gl = this.g.girl;
    for (const b of this.bees) {
      b.a += b.sp * dt; b.ph += dt * 40;
      let cx, cy, r = b.r;
      if (b.home === 'bag') { const bp = bag.state === 'worn' ? { x: gl.x - 10, y: gl.y - 44 } : { x: bag.x, y: bag.y }; cx = bp.x; cy = bp.y - 4; r = Math.min(b.r, 18); b.r = damp(b.r, 16, 2, dt); }
      else if (b.home === 'dance') { cx = gl.x; cy = gl.y - 140; r = 40; }
      else if (b.home === 'halo') { cx = gl.x; cy = gl.y - 150; r = 34; }
      else { const p = this.W(this.L.planter); cx = p.x; cy = p.y - 24; }
      b.cx = damp(b.cx, cx, 2.5, dt); b.cy = damp(b.cy, cy, 2.5, dt);
      b.x = b.cx + Math.cos(b.a) * r; b.y = b.cy + Math.sin(b.a) * r * 0.45;
    }
    if (this.cam.blink > 0) this.cam.blinkT = (this.cam.blinkT || 0) + dt;
    this.cam.glint = Math.max(0, (this.cam.glint || 0) - dt);
    if (this.photo) this.photo.t += dt;
  }
  idle(dt) { super.idle(dt); this.tick(dt); }

  // ------------------------------------------------------------ drawing
  drawFloor(ctx) {
    const L = this.L;
    const cx = this.wx(this.P ? 0 : 0), cy = this.P ? -230 : -56;
    // round tiled plaza
    ctx.fillStyle = '#e8dcc6';
    ell(ctx, cx, cy, this.P ? 190 : 380, this.P ? 250 : 92); ctx.fill();
    ctx.save(); ell(ctx, cx, cy, this.P ? 190 : 380, this.P ? 250 : 92); ctx.clip();
    ctx.strokeStyle = 'rgba(170,150,120,0.35)'; ctx.lineWidth = 1;
    for (let r = 40; r < 420; r += 40) { ell(ctx, cx, cy, r, r * (this.P ? 1.3 : 0.24)); ctx.stroke(); }
    for (let i = 0; i < 16; i++) { const a = (i / 16) * TAU; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(a) * 420, cy + Math.sin(a) * (this.P ? 540 : 100)); ctx.stroke(); }
    ctx.restore();
    // pond
    const P = this.W(L.pond);
    ell(ctx, P.x, P.y + 4, L.pond.rx + 8, L.pond.ry + 6); fillStroke(ctx, C.stone, C.line, 1.4);
    const wg = ctx.createLinearGradient(0, P.y - L.pond.ry, 0, P.y + L.pond.ry);
    wg.addColorStop(0, '#9fdcea'); wg.addColorStop(1, '#4fa9c8');
    ell(ctx, P.x, P.y, L.pond.rx, L.pond.ry); ctx.fillStyle = wg; ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.6)'; ctx.lineWidth = 1.2;
    ctx.beginPath(); ctx.ellipse(P.x - 10, P.y - 4, L.pond.rx * 0.6, L.pond.ry * 0.4, 0, Math.PI * 1.1, Math.PI * 1.6); ctx.stroke();
    // mirror light spot hint on the ground
    if (this.lightSpot > 0) {
      const M = this.W(L.mirror);
      ctx.fillStyle = `rgba(255,255,230,${0.5 * Math.sin(this.lightSpot * 2)})`;
      ell(ctx, M.x + 50 + Math.sin(this.lightSpot * 3) * 20, M.y + 16, 16, 5); ctx.fill();
    }
  }

  collect(list) {
    if (!this.e) this.initCast();
    const L = this.L;
    const e = this.eWorld();
    const pl = this.W(L.planter);
    list.push({ z: pl.y, draw: (c) => this.drawPlanter(c, pl.x, pl.y) });
    list.push({ z: e.y, draw: (c) => { this.eWorld(); drawElephant(c, e); } });
    const rail = this.W(L.rail);
    list.push({ z: rail.y, draw: (c) => this.drawRail(c, rail) });
    const hats = this.W(L.hats);
    list.push({ z: hats.y, draw: (c) => this.drawHatStand(c, hats) });
    const bas = this.W(L.basket);
    list.push({ z: bas.y, draw: (c) => this.drawBasket(c, bas) });
    const M = this.W(L.mirror);
    list.push({ z: M.y, draw: (c) => this.drawMirror(c, M) });
    const T = this.W(L.tripod);
    if (!this.hideTripod) list.push({ z: T.y, draw: (c) => this.drawTripod(c, T) });
    const P = this.W(L.pond);
    list.push({ z: P.y - 1, draw: (c) => { if (this.otter.alpha !== 0) drawOtter(c, this.otter, this.t); const s = this.items.sandals; if (s.state === 'float' || s.state === 'offer' || s.state === 'return') drawFinalItem(c, 'sandals', s.x, s.y + (s.wig ? Math.sin(this.t * 30) * s.wig * 2 : 0), 1.2); } });
  }

  drawOver(ctx) {
    for (const b of this.birds || []) if (b.alpha > 0) b.draw(ctx);
    // carried / offered items (drawn over everything so they read clearly)
    for (const name of ['dress', 'hat', 'bag']) {
      const it = this.items[name];
      if (!['carried', 'offer', 'drag', 'return'].includes(it.state)) continue;
      const p = this.itemPos(name);
      const wig = it.wig ? Math.sin(this.t * 25) * it.wig * 0.12 : 0;
      const sw = it.state === 'drag' ? clamp((this.drag ? this.drag.tx - it.x : 0) * -0.01, -0.5, 0.5) : Math.sin(this.t * 2) * 0.05;
      if (name === 'dress') drawFinalItem(ctx, 'dress', p.x, p.y, 1, sw + wig);
      if (name === 'hat') drawFinalItem(ctx, 'hat', p.x, p.y, 1, wig);
      if (name === 'bag') drawFinalItem(ctx, 'bag', p.x, p.y, 1.3, wig);
      if (it.glint > 0) glint(ctx, p.x + 8, p.y - 4, 7, Math.sin(it.glint * 5));
    }
    const s = this.items.sandals;
    if (s.state === 'drag') drawFinalItem(ctx, 'sandals', s.x, s.y, 1.2);
    for (const b of this.bees) drawBee(ctx, b.x, b.y, Math.cos(b.a) * b.sp > 0 ? Math.PI : 0, 1.2, b.ph);
    if (this.hatBirds) for (const b of this.hatBirds) if (b.state === 'hover') b.draw(ctx);
  }

  drawPlanter(ctx, x, y) {
    shadow(ctx, x, y, 44, 6, 0.18);
    rr(ctx, x - 40, y - 22, 80, 22, 4); fillStroke(ctx, '#c98a62', C.line, 1.4);
    const cols = ['#f28ca0', '#ffffff', '#f7cf4f', '#b99ae8', '#f28ca0', '#ffffff'];
    for (let i = 0; i < 6; i++) {
      const fx = x - 32 + i * 13, fy = y - 30 - (i % 2) * 6 + Math.sin(this.t * 1.4 + i) * 1;
      ctx.strokeStyle = C.leafD; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(fx, y - 20); ctx.lineTo(fx, fy); ctx.stroke();
      ctx.fillStyle = cols[i];
      for (let k = 0; k < 5; k++) { const a = (k / 5) * TAU; circ(ctx, fx + Math.cos(a) * 3.2, fy + Math.sin(a) * 3.2, 2.6); ctx.fill(); }
      ctx.fillStyle = '#f5b83d'; circ(ctx, fx, fy, 1.8); ctx.fill();
    }
  }

  drawRail(ctx, r) {
    shadow(ctx, r.x, r.y, 60, 6, 0.18);
    limb(ctx, r.x - 54, r.y, r.x - 54, r.y - 130, 4, C.wood, C.woodDD, 1.2);
    limb(ctx, r.x + 54, r.y, r.x + 54, r.y - 130, 4, C.wood, C.woodDD, 1.2);
    limb(ctx, r.x - 60, r.y - 128, r.x + 60, r.y - 128, 4, C.woodD, C.woodDD, 1.2);
    for (const o of this.others) drawDress(ctx, o.x, r.y - 122, o.col, o.stripe, 1, o.sw);
    const it = this.items.dress;
    if (it.state === 'rail') drawFinalItem(ctx, 'dress', it.x, it.y, 1, Math.sin(this.t * 1.5) * 0.02);
  }

  drawHatStand(ctx, h) {
    shadow(ctx, h.x, h.y, 22, 4, 0.18);
    limb(ctx, h.x, h.y, h.x, h.y - 100, 4, C.wood, C.woodDD, 1.2);
    ell(ctx, h.x, h.y - 2, 16, 4); fillStroke(ctx, C.woodD, C.woodDD, 1.1);
    // a beret and a cap on lower pegs (not chosen)
    limb(ctx, h.x, h.y - 70, h.x - 16, h.y - 76, 2.5, C.wood, C.woodDD, 1);
    limb(ctx, h.x, h.y - 60, h.x + 16, h.y - 66, 2.5, C.wood, C.woodDD, 1);
    ell(ctx, h.x - 20, h.y - 78, 11, 5); fillStroke(ctx, '#d65a5a', C.line, 1.2);
    ctx.beginPath(); ctx.moveTo(h.x + 10, h.y - 66); ctx.bezierCurveTo(h.x + 10, h.y - 80, h.x + 30, h.y - 80, h.x + 30, h.y - 66); ctx.closePath(); fillStroke(ctx, '#6aa2d8', C.line, 1.2);
    const it = this.items.hat;
    if (it.state === 'rail') drawFinalItem(ctx, 'hat', it.x, it.y, 1);
  }

  drawBasket(ctx, b) {
    shadow(ctx, b.x, b.y, 24, 4, 0.18);
    const it = this.items.bag;
    // other small things in the basket
    ctx.fillStyle = '#9fd27a'; ctx.strokeStyle = C.line; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(b.x + 6, b.y - 16); ctx.lineTo(b.x + 16, b.y - 24); ctx.lineTo(b.x + 18, b.y - 14); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#f7cf4f';
    ctx.beginPath(); for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU - Math.PI / 2; const r = i % 2 ? 3 : 7; ctx.lineTo(b.x - 14 + Math.cos(a) * r, b.y - 18 + Math.sin(a) * r); } ctx.closePath(); ctx.fill(); ctx.stroke();
    if (it.state === 'rail') drawFinalItem(ctx, 'bag', it.x, it.y, 1.3);
    ctx.beginPath(); ctx.moveTo(b.x - 24, b.y - 16); ctx.lineTo(b.x + 24, b.y - 16); ctx.lineTo(b.x + 19, b.y); ctx.lineTo(b.x - 19, b.y); ctx.closePath();
    fillStroke(ctx, '#d9aa62', C.line, 1.4);
    ctx.strokeStyle = 'rgba(120,80,30,0.45)'; ctx.lineWidth = 1;
    for (let y = b.y - 12; y < b.y; y += 4) { ctx.beginPath(); ctx.moveTo(b.x - 22, y); ctx.lineTo(b.x + 22, y); ctx.stroke(); }
    ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(b.x, b.y - 16, 16, Math.PI, 0); ctx.stroke();
  }

  drawMirror(ctx, M) {
    const m = this.mirror;
    const w = Math.max(0.06, Math.cos(m.ang));
    shadow(ctx, M.x, M.y, 26, 5, 0.18);
    limb(ctx, M.x - 16, M.y, M.x, M.y - 30, 3, C.woodD, C.woodDD, 1);
    limb(ctx, M.x + 16, M.y, M.x, M.y - 30, 3, C.woodD, C.woodDD, 1);
    limb(ctx, M.x - 26, M.y - 70, M.x - 26, M.y - 34, 3, C.woodD, C.woodDD, 1);
    limb(ctx, M.x + 26, M.y - 70, M.x + 26, M.y - 34, 3, C.woodD, C.woodDD, 1);
    limb(ctx, M.x - 26, M.y - 34, M.x + 26, M.y - 34, 3, C.woodD, C.woodDD, 1);
    const cy = M.y - 80, rx = 22 * w, ry = 44;
    ell(ctx, M.x, cy, rx + 4, ry + 4); fillStroke(ctx, C.wood, C.woodDD, 1.5);
    ell(ctx, M.x, cy, rx, ry);
    const back = Math.sin(m.ang) > 0.9;
    if (back) { ctx.fillStyle = '#b98a5b'; ctx.fill(); }
    else {
      ctx.save(); ctx.clip();
      const gg = ctx.createLinearGradient(M.x - rx, cy - ry, M.x + rx, cy + ry);
      gg.addColorStop(0, '#e6f4f7'); gg.addColorStop(1, '#b8d8e2');
      ctx.fillStyle = gg; ctx.fillRect(M.x - rx, cy - ry, rx * 2, ry * 2);
      // reflection of the girl
      if (w > 0.35) {
        const girl = this.g.girl;
        const sv = { x: girl.x, y: girl.y, facing: girl.facing, s: girl.s, hop: girl.hop };
        girl.x = M.x; girl.y = cy + ry - 2; girl.facing = -girl.facing; girl.s = 0.62; girl.hop = 0;
        ctx.save(); ctx.translate(M.x, 0); ctx.scale(w, 1); ctx.translate(-M.x, 0);
        girl.draw(ctx);
        ctx.restore();
        Object.assign(girl, sv);
      }
      ctx.strokeStyle = 'rgba(255,255,255,0.7)'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(M.x - rx * 0.6, cy - ry * 0.5); ctx.lineTo(M.x - rx * 0.1, cy - ry * 0.8); ctx.stroke();
      ctx.restore();
    }
    ell(ctx, M.x, cy, rx, ry); ctx.strokeStyle = C.line; ctx.lineWidth = 1.2; ctx.stroke();
    if (this.step === 'mirror' && this.lightSpot > 0) glint(ctx, M.x - rx * 0.4, cy - ry * 0.5, 8, Math.sin(this.lightSpot * 4));
  }

  drawTripod(ctx, T) {
    shadow(ctx, T.x, T.y, 26, 4, 0.18);
    for (const dx of [-18, 0, 18]) limb(ctx, T.x + dx, T.y, T.x, T.y - 44, 2.5, '#5d666e', C.line, 1);
    rr(ctx, T.x - 18, T.y - 66, 36, 24, 4); fillStroke(ctx, '#7a5a42', C.line, 1.5);
    ctx.fillStyle = '#c9d1d7'; ctx.fillRect(T.x - 18, T.y - 66, 36, 6);
    circ(ctx, T.x - 4, T.y - 53, 9); fillStroke(ctx, '#3b4148', C.line, 1.3);
    circ(ctx, T.x - 4, T.y - 53, 5.5); ctx.fillStyle = '#6c8fb0'; ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.8)'; circ(ctx, T.x - 6, T.y - 55, 1.8); ctx.fill();
    // self-timer lamp
    let on = false;
    if (this.cam.timer >= 0 && this.step === 'timer') on = Math.floor(this.t * 6) % 2 === 0;
    else if (this.cam.blink > 0) on = Math.floor((this.cam.blinkT || 0) * 1.5) % 2 === 0;
    circ(ctx, T.x + 11, T.y - 60, 2.6); ctx.fillStyle = on ? '#ff5a4a' : '#8a3a33'; ctx.fill();
    if (on) { ctx.fillStyle = 'rgba(255,90,74,0.3)'; circ(ctx, T.x + 11, T.y - 60, 6); ctx.fill(); }
    if (this.cam.glint > 0) glint(ctx, T.x - 8, T.y - 57, 7, Math.sin(this.cam.glint * 5));
  }

  drawScreen(ctx) {
    const g = this.g, v = g.view;
    if (this.capture) {
      // copy what the tripod camera sees
      const src = ctx.canvas;
      const w = 480, h = Math.round(480 * (src.height / src.width));
      const c = document.createElement('canvas'); c.width = w; c.height = h;
      try { c.getContext('2d').drawImage(src, 0, 0, w, h); } catch (err) { /* ignore */ }
      this.photoImg = c;
      this.capture = false;
    }
    if (this.photo && this.photoImg) {
      const k = E.outBack(clamp(this.photo.t / 0.6, 0, 1));
      ctx.fillStyle = `rgba(40,30,20,${0.35 * clamp(this.photo.t / 0.6, 0, 1)})`; ctx.fillRect(0, 0, v.W, v.H);
      const img = this.photoImg;
      const maxW = Math.min(v.W * 0.8, (v.H * 0.72) * (img.width / img.height));
      const pw = maxW, ph = pw * (img.height / img.width);
      ctx.save();
      ctx.translate(v.W / 2, v.H / 2);
      ctx.rotate(-0.04 * k);
      ctx.scale(lerp(1.2, 1, k), lerp(1.2, 1, k));
      const pad = pw * 0.05;
      ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.fillRect(-pw / 2 - pad + 6, -ph / 2 - pad + 8, pw + pad * 2, ph + pad * 3.2);
      ctx.fillStyle = '#fffdf7'; ctx.fillRect(-pw / 2 - pad, -ph / 2 - pad, pw + pad * 2, ph + pad * 3.2);
      ctx.drawImage(img, -pw / 2, -ph / 2, pw, ph);
      ctx.restore();
    }
  }

  debugTargets() {
    const out = {};
    if (!this.items) return out;
    for (const n in this.items) { const p = this.itemPos(n); out['item_' + n] = { x: p.x, y: p.y + (n === 'dress' ? 30 : 0) }; }
    const M = this.W(this.L.mirror); out.mirror = { x: M.x, y: M.y - 70 };
    const T = this.W(this.L.tripod); out.tripod = { x: T.x, y: T.y - 40 };
    return out;
  }
}
