// The girl: skeleton, outfits, dressing sequence.
import { clamp, lerp, damp, E, TAU, inv, rand } from './util.js';
import { C, rr, ell, circ, fillStroke, limb, limb3, shadow } from './draw.js';
import { audio } from './audio.js';
import { drawBundle, drawFolded } from './wardrobe.js';

const SK = '#f7d2b4', SKD = '#e2ab8a', HAIR = '#6e4431', HAIRD = '#4b2b1e', LN = '#5a3c2d';

// arm angles: 0 = straight down, +PI/2 = pointing forward (+x), absolute; elbow adds.
const POSES = {
  idle: { aL: -0.15, eL: -0.05, aR: 0.15, eR: 0.05 },
  armsUp: { aL: -2.8, eL: -0.1, aR: 2.8, eR: 0.1 },
  tpose: { aL: -1.35, eL: -0.2, aR: 1.35, eR: 0.2 },
  cheer: { aL: -2.45, eL: -0.35, aR: 2.45, eR: 0.35 },
  hold: { aL: -0.35, eL: 1.25, aR: 0.35, eR: -1.25 },
  cheeks: { aL: -0.4, eL: 3.29, aR: 0.4, eR: -3.29 },
  refuse: { aL: -0.25, eL: -0.1, aR: 0.9, eR: 1.2 },
  flinch: { aL: -0.5, eL: 2.8, aR: 0.5, eR: -2.8 },
  vet: { aL: -0.3, eL: 1.99, aR: 0.1, eR: 0 },
  carp: { aL: -0.2, eL: -0.25, aR: 0.6, eR: 2.54 },
  diver: { aL: -0.5, eL: 3.44, aR: 0.25, eR: 0.1 },
  bee: { aL: -0.35, eL: -0.25, aR: 0.3, eR: 0.45 },
  final: { aL: -0.32, eL: 1.12, aR: 0.32, eR: -1.12 },
  pull: { aL: -0.85, eL: -0.15, aR: 0.2, eR: 0.1 },
  swim: { aL: -0.35, eL: -0.35, aR: 0.35, eR: 0.35 },
  point: { aL: -0.15, eL: -0.05, aR: 1.8, eR: 0.1 },
  climbA: { aL: -2.7, eL: 0.25, aR: 2.3, eR: -0.35 },
  climbB: { aL: -2.3, eL: 0.35, aR: 2.7, eR: -0.25 },
  hammerUp: { aL: -0.25, eL: -0.2, aR: 2.3, eR: 0.5 },
  hammerHit: { aL: -0.25, eL: -0.2, aR: 1.25, eR: 0.35 },
  squeeze: { aL: -0.35, eL: -0.25, aR: 0.55, eR: 0.9 },
};

export const OUTFIT_STANCE = { base: 'idle', vet: 'vet', carp: 'carp', diver: 'diver', bee: 'bee', final: 'final' };

export class Girl {
  constructor(game) {
    this.g = game;
    this.reset();
  }

  reset() {
    this.x = 0; this.y = 0; this.s = 1;
    this.facing = 1;
    this.walkPh = 0; this.walkAmt = 0; this.moving = false;
    this.target = null; this.speed = 190;
    this.look = null; // {x,y} world target
    this.lookSm = { x: 0, y: 0 };
    this.outfit = 'base';
    this.pieces = { dress: 0, hat: 0, sandals: 0, bag: 0 };
    this.change = null;
    this.piece = null;
    this.pose = 'idle'; this.poseOverride = null;
    this.arm = { aL: -0.15, eL: -0.05, aR: 0.15, eR: 0.05 };
    this.reachR = null; this.reachL = null;
    this.expr = 'smile'; this.exprT = 0;
    this.blinkT = 2; this.blink = 0;
    this.rot = 0; this.swim = 0; this.kick = 0; this.pivot = 0; this.noShadow = false; this.zBias = 0;
    this.spin = 0; this.spinAmt = 0;
    this.hop = 0; this.hopV = 0;
    this.shake = 0;
    this.wet = 0; this.dripT = 0;
    this.hair = 0; this.hairV = 0; // ponytail sway angle
    this.hairFlow = null; // underwater flow direction
    this.hidden = false; this.drawnByScene = false;
    this.holding = null; // 'rack'
    this.held = null; // item drawn in right hand: 'bag','mallet','smoker'
    this.climb = 0; this.climbing = false;
    this.lean = 0;
    this.t = 0;
    this.vx = 0; this.vy = 0;
    this.stepAcc = 0;
    this.legSpread = 0;
    this.alpha = 1;
    this.depthScale = 1;
  }

  get stance() { return OUTFIT_STANCE[this.outfit] || 'idle'; }

  setPose(p) { this.poseOverride = p; }

  lookAt(x, y) { this.look = x == null ? null : { x, y }; }

  say(expr, dur = 1.2) { this.expr = expr; this.exprT = dur; }

  jump(v = 90) { if (this.hop <= 0.01) { this.hopV = v; } }

  walkTo(x, y) {
    this.target = { x, y: y ?? this.y };
    const self = this;
    return (function* () { yield () => !self.target; })();
  }

  bodyBox() {
    const s = this.s;
    return { x0: this.x - 40 * s, x1: this.x + 40 * s, y0: this.y - 130 * s, y1: this.y - 5 * s };
  }

  headPos() { return { x: this.x + 0, y: this.y - 93 * this.s }; }

  // world position of the right hand (approx)
  handWorld(side = 'R') {
    const sk = this._sk || this.skeleton();
    const h = side === 'R' ? sk.handR : sk.handL;
    const c = Math.cos(this.rot), sn = Math.sin(this.rot);
    const pv = this.pivot * this.s;
    const lx = h.x * this.facing * this.s, ly = h.y * this.s + pv;
    return { x: this.x + lx * c - ly * sn, y: this.y - pv + lx * sn + ly * c };
  }

  // ------------------------------------------------------------------ dressing
  startChange(to, from = { x: this.x, y: this.y - 150 }, onDone) {
    this.change = { from: this.outfit, to, t: 0, dur: 2.0, sx: from.x, sy: from.y, onDone, flewOld: false, sounds: {} };
    this.target = null;
  }

  equipPiece(name, from, onDone) {
    this.piece = { name, t: 0, dur: 1.0, sx: from.x, sy: from.y, onDone, sounds: {} };
  }

  // part progress of an outfit during a change (1 = fully worn)
  _parts(u, removing) {
    if (removing) {
      const p = 1 - E.inOut(inv(0.0, 0.3, u));
      return { body: p, sleeves: p, feet: 1 - inv(0.0, 0.2, u), acc: 1 - inv(0, 0.12, u), head: 1 - inv(0, 0.15, u), headOff: inv(0, 0.15, u) };
    }
    return {
      body: E.out(inv(0.3, 0.62, u)),
      sleeves: E.out(inv(0.47, 0.74, u)),
      feet: E.out(inv(0.56, 0.78, u)),
      acc: inv(0.68, 0.84, u),
      head: inv(0.8, 1.0, u),
    };
  }

  update(dt) {
    this.t += dt;
    const g = this.g;
    // walking toward target
    this.moving = false;
    if (this.target && !this.change) {
      const dx = this.target.x - this.x, dy = this.target.y - this.y;
      const d = Math.hypot(dx, dy);
      const sp = this.speed * (this.outfit === 'diver' && !this.swim ? 0.7 : 1);
      if (d < 2) {
        this.x = this.target.x; this.y = this.target.y; this.target = null;
      } else {
        const step = Math.min(d, sp * dt);
        this.x += (dx / d) * step; this.y += (dy / d) * step;
        this.vx = (dx / d) * sp; this.vy = (dy / d) * sp;
        if (Math.abs(dx) > 3) this.facing = dx > 0 ? 1 : -1;
        this.moving = true;
      }
    }
    if (!this.moving) { this.vx = damp(this.vx, 0, 10, dt); }
    this.walkAmt = damp(this.walkAmt, this.moving ? 1 : 0, 10, dt);
    if (this.moving) {
      const prev = this.walkPh;
      this.walkPh += dt * (this.outfit === 'diver' ? 7 : 9.5);
      if (Math.floor(prev / Math.PI) !== Math.floor(this.walkPh / Math.PI)) {
        audio.step(this._pan(), this.wet);
        if (this.outfit === 'diver') audio.noise({ dur: 0.05, gain: 0.05, filter: { type: 'bandpass', freq: 900, q: 1 }, pan: this._pan() });
        if (this.wet > 0.15 && g.fx) {
          const side = Math.floor(this.walkPh / Math.PI) % 2 ? 1 : -1;
          g.fx.add({ type: 'print', floorLayer: true, x: this.x + side * 5 * this.facing, y: this.y + 2, size: 5, life: 5 + this.wet * 4, alpha: Math.min(1, this.wet * 1.4), rot: 0 });
        }
      }
    }
    // hop
    if (this.hopV !== 0 || this.hop > 0) {
      this.hopV -= 520 * dt; this.hop += this.hopV * dt;
      if (this.hop <= 0) { this.hop = 0; this.hopV = 0; }
    }
    // blink
    this.blinkT -= dt;
    if (this.blinkT < 0) { this.blink = 0.12; this.blinkT = rand(2, 4.5); }
    if (this.blink > 0) this.blink -= dt;
    if (this.exprT > 0) { this.exprT -= dt; if (this.exprT <= 0) this.expr = 'smile'; }
    if (this.shake > 0) this.shake = Math.max(0, this.shake - dt);
    // spin (twirl)
    // hair sway physics
    const acc = -this.vx * 0.004 * (this.swim ? 0 : 1);
    this.hairV += (-(this.hair - acc) * 40 - this.hairV * 5) * dt + Math.sin(this.walkPh * 2) * this.walkAmt * dt * 3;
    this.hair += this.hairV * dt;
    // wet drips
    if (this.wet > 0 && !this.swim) {
      this.wet = Math.max(0, this.wet - dt * 0.07);
      this.dripT -= dt;
      if (this.dripT < 0 && g.fx) {
        this.dripT = 0.06 + (1 - this.wet) * 0.5;
        const s = this.s;
        const bx = this.x + rand(-16, 16) * s, by = this.y - rand(15, 90) * s;
        const ground = this.y + rand(-2, 4);
        g.fx.add({ type: 'drop', x: bx, y: by, vx: rand(-5, 5), vy: 10, g: 500, life: 2, size: 1.3, ground, onGround: (p) => {
          if (Math.random() < 0.3) audio.drip(this._pan(), 0.025);
          g.fx.add({ type: 'ring', floorLayer: true, x: p.x, y: p.y, size: 7, life: 0.5, color: 'rgba(255,255,255,0.7)', lw: 0.8 });
        } });
      }
    }
    // dressing sequence
    if (this.change) {
      const c = this.change;
      c.t += dt;
      const u = c.t / c.dur;
      const snd = (k, f) => { if (!c.sounds[k]) { c.sounds[k] = 1; f(); } };
      snd('a', () => audio.cloth(this._pan(), 1.2));
      if (u > 0.28) snd('b', () => audio.cloth(this._pan(), 1));
      if (u > 0.5) snd('c', () => audio.cloth(this._pan(), 0.7));
      if (u > 0.7) snd('d', () => audio.cinch(this._pan()));
      if (u > 0.9) snd('e', () => audio.tone({ type: 'sine', f: 900, f2: 600, dur: 0.1, gain: 0.07, pan: this._pan() }));
      if (u > 0.22 && !c.flewOld) {
        c.flewOld = true;
        if (c.from !== 'base' && g.rack) g.rack.receiveFolded(c.from, this.x, this.y - 80 * this.s);
      }
      if (u >= 1) {
        this.outfit = c.to;
        const done = c.onDone;
        this.change = null;
        audio.jingle(c.to);
        this.hop = 0; this.jump(60);
        if (done) done();
      }
    }
    if (this.piece) {
      const p = this.piece;
      p.t += dt;
      const u = p.t / p.dur;
      if (u > 0.5 && !p.sounds.a) { p.sounds.a = 1; audio.cloth(this._pan(), 0.7); }
      if (u >= 1) {
        this.pieces[p.name] = 1;
        const done = p.onDone; this.piece = null;
        audio.jingle('piece');
        if (done) done();
      }
    }
    // pose target
    let pose = POSES[this.poseOverride || (this.holding === 'rack' && this.moving ? 'pull' : this.stance)] || POSES.idle;
    if (this.change) {
      const u = this.change.t / this.change.dur;
      if (u < 0.5) pose = POSES.armsUp; else if (u < 0.72) pose = POSES.tpose;
    }
    const k = 12;
    for (const key of ['aL', 'eL', 'aR', 'eR']) this.arm[key] = damp(this.arm[key], pose[key], k, dt);
    // look smoothing
    const lx = this.look ? (this.look.x - this.x) * this.facing : 0;
    const ly = this.look ? this.look.y - (this.y - 93 * this.s) : 0;
    const ld = Math.hypot(lx, ly) || 1;
    this.lookSm.x = damp(this.lookSm.x, this.look ? (lx / ld) : 0.3, 8, dt);
    this.lookSm.y = damp(this.lookSm.y, this.look ? (ly / ld) : 0, 8, dt);
  }

  _pan() { return this.g.panOf ? this.g.panOf(this.x) : 0; }

  skeleton() {
    const w = this.walkAmt;
    const ph = this.walkPh;
    const t = this.t;
    const breathe = Math.sin(t * 2.2) * 0.6;
    let bob = -Math.abs(Math.sin(ph)) * 2.4 * w + breathe * 0.4;
    const sk = {};
    const hipY = -40 + bob;
    const spread = this.legSpread + (this.outfit === 'diver' && !this.swim ? 2.5 : 0);
    let la = Math.sin(ph) * 0.42 * w - 0.04 - spread * 0.02;
    let ra = -Math.sin(ph) * 0.42 * w + 0.04 + spread * 0.02;
    if (this.swim > 0) {
      const kk = Math.sin(t * 7) * (0.12 + this.kick * 0.35);
      la = lerp(la, kk, this.swim); ra = lerp(ra, -kk, this.swim);
    }
    if (this.climbing) {
      const c = Math.sin(this.climb * Math.PI);
      la = -0.15; ra = 0.15;
      sk.climbLift = c;
    }
    const legLen = 38;
    sk.hipL = { x: -5.5, y: hipY }; sk.hipR = { x: 5.5, y: hipY };
    const liftL = Math.max(0, Math.sin(ph)) * 4 * w, liftR = Math.max(0, -Math.sin(ph)) * 4 * w;
    sk.footL = { x: sk.hipL.x + Math.sin(la) * legLen, y: sk.hipL.y + Math.cos(la) * legLen - liftL };
    sk.footR = { x: sk.hipR.x + Math.sin(ra) * legLen, y: sk.hipR.y + Math.cos(ra) * legLen - liftR };
    if (this.climbing) {
      const c = Math.sin(this.climb * TAU);
      sk.footL.y -= Math.max(0, c) * 8; sk.footR.y -= Math.max(0, -c) * 8;
    }
    const shY = -68 + bob;
    sk.shL = { x: -12.5, y: shY }; sk.shR = { x: 12.5, y: shY };
    const A = this.arm;
    let aL = A.aL, eL = A.eL, aR = A.aR, eR = A.eR;
    if (this.moving && !this.poseOverride && !this.change && this.holding !== 'rack') {
      aL += Math.sin(ph) * 0.35 * w; aR += Math.sin(ph) * 0.35 * w;
    }
    if (this.holding === 'rack' && this.moving) aR += Math.sin(ph) * 0.3 * w;
    // IK reach overrides
    const reach = (side, tgt) => {
      const sh = side === 'R' ? sk.shR : sk.shL;
      const c = Math.cos(-this.rot), s = Math.sin(-this.rot);
      const pv = this.pivot;
      let dx = (tgt.x - this.x) / this.s, dy = (tgt.y - this.y) / this.s + pv;
      const rx0 = dx * c - dy * s, ry0 = dx * s + dy * c - pv;
      const rx = rx0 * this.facing, ry = ry0;
      const a = Math.atan2(rx - sh.x, ry - sh.y);
      return a;
    };
    if (this.reachR) { aR = reach('R', this.reachR); eR = 0.15; }
    if (this.reachL) { aL = reach('L', this.reachL); eL = -0.15; }
    const U = 15, F = 14;
    sk.elL = { x: sk.shL.x + Math.sin(aL) * U, y: sk.shL.y + Math.cos(aL) * U };
    sk.handL = { x: sk.elL.x + Math.sin(aL + eL) * F, y: sk.elL.y + Math.cos(aL + eL) * F };
    sk.elR = { x: sk.shR.x + Math.sin(aR) * U, y: sk.shR.y + Math.cos(aR) * U };
    sk.handR = { x: sk.elR.x + Math.sin(aR + eR) * F, y: sk.elR.y + Math.cos(aR + eR) * F };
    sk.aR = aR + eR; sk.aL = aL + eL;
    sk.head = { x: 0.5, y: -93 + bob + (this.shake > 0 ? 0 : 0) };
    sk.headTilt = this.shake > 0 ? Math.sin(this.shake * 30) * 0.12 : Math.sin(t * 1.3) * 0.02;
    sk.bob = bob;
    this._sk = sk;
    return sk;
  }

  // ------------------------------------------------------------------ drawing
  draw(ctx) {
    if (this.hidden) return;
    const sk = this.skeleton();
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.translate(this.x, this.y - this.hop);
    // contact shadow
    if (!this.swim && !this.climbing && !this.noShadow) {
      const sa = 0.22 * Math.max(0.3, 1 - this.hop / 60);
      shadow(ctx, 0, 1, 22 * this.s, 5 * this.s, sa);
    }
    const pv = this.pivot * this.s;
    ctx.translate(0, -pv); ctx.rotate(this.rot); ctx.translate(0, pv);
    let sx = this.facing;
    if (this.spinAmt > 0) {
      const c = Math.cos(this.spin);
      sx = (Math.abs(c) < 0.12 ? 0.12 * Math.sign(c || 1) : c);
    }
    ctx.scale(sx * this.s, this.s);

    const ch = this.change;
    const u = ch ? ch.t / ch.dur : 1;
    const layers = [];
    if (ch) {
      layers.push({ id: ch.from, parts: this._parts(u, true) });
      layers.push({ id: ch.to, parts: this._parts(u, false) });
    } else {
      layers.push({ id: this.outfit, parts: { body: 1, sleeves: 1, feet: 1, acc: 1, head: 1 } });
    }
    // what covers the hair / head
    const headLayer = layers[layers.length - 1];

    // --- back layer
    for (const L of layers) this._back(ctx, sk, L.id, L.parts);
    this._ponytail(ctx, sk, layers);
    // --- legs
    this._legs(ctx, sk, layers);
    // --- torso (underlayer then outfits)
    this._under(ctx, sk);
    for (const L of layers) this._torso(ctx, sk, L.id, L.parts);
    for (const L of layers) this._acc(ctx, sk, L.id, L.parts);
    if (this.outfit === 'final' || (ch && ch.to === 'final')) this._finalAcc(ctx, sk);
    // --- arms
    this._arms(ctx, sk, layers);
    // --- head, then whatever she holds (so a raised mallet stays visible)
    this._head(ctx, sk, layers);
    this._held(ctx, sk, sk.handR);
    ctx.restore();

    // floating garment during a change
    if (ch && u < 0.5) {
      const k1 = E.inOut(inv(0, 0.25, u));
      const k2 = E.in(inv(0.25, 0.48, u));
      const hx = lerp(ch.sx, this.x, k1), hy = lerp(ch.sy, this.y - 175 * this.s, k1);
      const y2 = lerp(hy, this.y - 110 * this.s, k2);
      const sc = lerp(1, 0.75, k2);
      ctx.save();
      ctx.globalAlpha = 1 - inv(0.36, 0.48, u);
      const wob = Math.sin(u * 30) * 0.08 * (1 - k2);
      if (ch.to === 'final') drawFinalItem(ctx, 'dress', hx, y2, sc, wob);
      else drawBundle(ctx, ch.to, hx, y2, wob, sc, { lift: 1 - k2 });
      ctx.restore();
    }
    if (this.piece) this._drawPieceFlight(ctx);
  }

  _drawPieceFlight(ctx) {
    const p = this.piece;
    const u = p.t / p.dur;
    if (u > 0.6) return;
    const k = E.inOut(inv(0, 0.6, u));
    const tgt = this._pieceTarget(p.name);
    const x = lerp(p.sx, tgt.x, k), y = lerp(p.sy, tgt.y, k) - Math.sin(k * Math.PI) * 30;
    ctx.save();
    ctx.globalAlpha = 1 - inv(0.45, 0.6, u);
    drawFinalItem(ctx, p.name, x, y, 1, Math.sin(u * 20) * 0.1 * (1 - k));
    ctx.restore();
  }

  _pieceTarget(name) {
    const s = this.s;
    if (name === 'hat') return { x: this.x, y: this.y - 116 * s };
    if (name === 'sandals') return { x: this.x, y: this.y - 4 * s };
    if (name === 'bag') return { x: this.x - 10 * s * this.facing, y: this.y - 44 * s };
    return { x: this.x, y: this.y - 60 * s };
  }

  _pieceP(name) {
    if (this.piece && this.piece.name === name) {
      const u = this.piece.t / this.piece.dur;
      return inv(0.45, 1, u);
    }
    return this.pieces[name] ? 1 : 0;
  }

  // ---- components
  _back(ctx, sk, id, P) {
    if (id === 'diver' && P.body > 0) {
      ctx.save();
      ctx.globalAlpha *= Math.min(1, P.body * 2);
      // air tank on the back (peeks out behind the body)
      rr(ctx, -21, -80 + sk.bob, 15, 44, 7);
      fillStroke(ctx, '#f1c232', LN, 1.5);
      ctx.fillStyle = 'rgba(255,255,255,0.45)'; rr(ctx, -18, -76 + sk.bob, 3, 34, 1.5); ctx.fill();
      ctx.fillStyle = '#8a9299'; rr(ctx, -17, -86 + sk.bob, 7, 7, 2); ctx.fill();
      ctx.strokeStyle = '#3b3f45'; ctx.lineWidth = 2.2;
      ctx.beginPath(); ctx.moveTo(-13, -85 + sk.bob); ctx.quadraticCurveTo(-4, -96 + sk.bob, 6, -84 + sk.bob); ctx.stroke();
      ctx.restore();
    }
    if (id === 'bee' && P.head > 0.05) {
      // back of veil
      const off = (1 - E.outBounce(Math.min(1, P.head))) * -40 - (P.headOff || 0) * 30;
      ctx.save();
      ctx.globalAlpha *= Math.min(1, P.head * 1.5);
      ctx.fillStyle = 'rgba(40,40,40,0.55)';
      ctx.beginPath();
      ctx.moveTo(-29, -113 + sk.bob + off); ctx.lineTo(29, -113 + sk.bob + off);
      ctx.lineTo(21, -70 + sk.bob); ctx.lineTo(-21, -70 + sk.bob); ctx.closePath(); ctx.fill();
      ctx.restore();
    }
  }

  _ponytail(ctx, sk, layers) {
    const top = layers[layers.length - 1];
    const hide = layers.some((L) => L.id === 'bee' && L.parts.head > 0.5);
    if (hide) return;
    const hx = sk.head.x - 15, hy = sk.head.y - 12;
    let ang = 0.5 + this.hair * 1.2 + Math.sin(this.t * 3) * 0.04;
    let wave = 0;
    if (this.swim > 0.2) {
      // hair streams opposite to the swim direction and floats up a bit
      const fl = this.hairFlow || { x: -1, y: -0.2 };
      const a = Math.atan2(fl.x * this.facing, fl.y);
      const local = a - this.rot * this.facing;
      ang = lerp(ang, local, this.swim);
      wave = this.swim;
    }
    const segs = 4, L = 8.5;
    const pts = [{ x: hx, y: hy }];
    let a = ang;
    for (let i = 0; i < segs; i++) {
      a += Math.sin(this.t * 4 + i * 1.3) * (0.08 + wave * 0.25);
      const p = pts[pts.length - 1];
      pts.push({ x: p.x - Math.sin(a) * L, y: p.y + Math.cos(a) * L });
    }
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    const draw = (w, col) => {
      ctx.strokeStyle = col;
      for (let i = 0; i < segs; i++) {
        ctx.lineWidth = w * (1 - i / (segs + 1.5));
        ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[i + 1].x, pts[i + 1].y); ctx.stroke();
      }
    };
    draw(13, LN); draw(10, HAIR);
    ctx.fillStyle = '#e8726a'; circ(ctx, hx, hy, 3.4); ctx.fill();
  }

  _legs(ctx, sk, layers) {
    // skin legs
    const feetShown = (id, P) => P.feet;
    limb(ctx, sk.hipL.x, sk.hipL.y, sk.footL.x, sk.footL.y - 2, 8.5, SK, LN, 1.3);
    limb(ctx, sk.hipR.x, sk.hipR.y, sk.footR.x, sk.footR.y - 2, 8.5, SK, LN, 1.3);
    for (const L of layers) this._pants(ctx, sk, L.id, L.parts);
    // feet
    let drewShoe = false;
    for (const L of layers) if (this._shoes(ctx, sk, L.id, L.parts)) drewShoe = true;
    if (!drewShoe) {
      for (const f of [sk.footL, sk.footR]) { ell(ctx, f.x + 2, f.y - 2, 5.5, 3.2); fillStroke(ctx, SK, LN, 1.2); }
    }
  }

  _clipTop(ctx, top, bot, p) {
    ctx.beginPath();
    ctx.rect(-60, top - 80, 120, (bot - top) * p + 80);
    ctx.clip();
  }

  _pants(ctx, sk, id, P) {
    if (P.body <= 0) return;
    const legs = {
      base: { col: '#3f5484', len: 0.33, w: 11 },
      vet: { col: '#8fc9dc', len: 1, w: 10.5 },
      carp: { col: '#4d7eb3', len: 1, w: 11.5 },
      diver: { col: '#2c3544', len: 1, w: 10.5 },
      bee: { col: '#f4f3ee', len: 1, w: 13.5 },
      final: null,
    }[id];
    if (!legs) return;
    ctx.save();
    this._clipTop(ctx, -74 + sk.bob, 2, P.body);
    for (const [h, f] of [[sk.hipL, sk.footL], [sk.hipR, sk.footR]]) {
      const ex = lerp(h.x, f.x, legs.len), ey = lerp(h.y, f.y, legs.len) - (legs.len >= 1 ? 3 : 0);
      limb(ctx, h.x, h.y - 2, ex, ey, legs.w, legs.col, LN, 1.3);
      if (id === 'diver') { ctx.strokeStyle = '#43b8c6'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(h.x + 3, h.y); ctx.lineTo(ex + 3, ey); ctx.stroke(); }
      if (id === 'bee') { ctx.strokeStyle = 'rgba(0,0,0,0.12)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(lerp(h.x, ex, 0.4) - 5, lerp(h.y, ey, 0.4)); ctx.lineTo(lerp(h.x, ex, 0.5) + 4, lerp(h.y, ey, 0.5)); ctx.stroke(); }
    }
    if (id === 'base') {
      // shorts body
      rr(ctx, -11.5, -46 + sk.bob, 23, 12, 4); fillStroke(ctx, legs.col, LN, 1.3);
    }
    ctx.restore();
  }

  _shoes(ctx, sk, id, P) {
    if (P.feet <= 0.02) return false;
    ctx.save();
    const a = Math.min(1, P.feet * 1.6);
    ctx.globalAlpha *= a;
    const off = (1 - P.feet) * -10;
    for (const f of [sk.footL, sk.footR]) {
      const x = f.x, y = f.y + off;
      if (id === 'base') {
        ell(ctx, x + 2.5, y - 2.8, 6.8, 3.9); fillStroke(ctx, '#ffffff', LN, 1.3);
        ctx.fillStyle = '#e8584f'; rr(ctx, x - 4, y - 1.4, 13, 2.2, 1); ctx.fill();
      } else if (id === 'vet') {
        ell(ctx, x + 2.5, y - 2.8, 6.8, 3.8); fillStroke(ctx, '#e9eef1', LN, 1.3);
      } else if (id === 'carp') {
        rr(ctx, x - 5, y - 8, 13, 8, 3); fillStroke(ctx, '#8a5530', LN, 1.3);
        ctx.fillStyle = '#5a3620'; ctx.fillRect(x - 5, y - 2, 13, 2);
      } else if (id === 'diver') {
        // long fins: very recognisable silhouette
        const kick = this.swim ? Math.sin(this.t * 7 + (f === sk.footL ? 0 : Math.PI)) * 0.25 : 0;
        ctx.save(); ctx.translate(x, y - 2); ctx.rotate(kick);
        ctx.beginPath();
        ctx.moveTo(-3, -3); ctx.lineTo(26, -5); ctx.quadraticCurveTo(31, 0, 26, 4); ctx.lineTo(-3, 3); ctx.closePath();
        fillStroke(ctx, '#f1c232', LN, 1.3);
        ctx.strokeStyle = 'rgba(0,0,0,0.18)'; ctx.lineWidth = 0.9;
        ctx.beginPath(); ctx.moveTo(6, -3); ctx.lineTo(25, -1); ctx.moveTo(6, 2); ctx.lineTo(25, 2); ctx.stroke();
        ctx.restore();
      } else if (id === 'bee') {
        rr(ctx, x - 5, y - 11, 13, 11, 3); fillStroke(ctx, '#f5f5f0', LN, 1.3);
      } else if (id === 'final') {
        // sandals are a separate piece; barefoot until then
        const sp = this._pieceP('sandals');
        ell(ctx, x + 2, y - 2, 5.5, 3.2); fillStroke(ctx, SK, LN, 1.2);
        if (sp > 0) {
          ctx.globalAlpha *= sp;
          ctx.fillStyle = '#3f7fd6'; rr(ctx, x - 4, y - 1.2, 13, 2.4, 1.2); ctx.fill();
          ctx.strokeStyle = '#3f7fd6'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(x - 1, y - 1); ctx.lineTo(x + 4, y - 5); ctx.lineTo(x + 7, y - 1); ctx.stroke();
          ctx.fillStyle = '#ffd35a'; circ(ctx, x + 4, y - 5, 1.2); ctx.fill();
        }
      }
    }
    ctx.restore();
    return P.feet > 0.5;
  }

  _under(ctx, sk) {
    // white tank-top & bloomers underlayer (visible only mid-change)
    const b = sk.bob;
    rr(ctx, -12.5, -70 + b, 25, 32, 6); fillStroke(ctx, '#fbfaf6', LN, 1.4);
    rr(ctx, -11, -44 + b, 22, 9, 4); fillStroke(ctx, '#fbfaf6', LN, 1.2);
  }

  _torsoPath(ctx, y0, y1, w0, w1, r = 6) {
    ctx.beginPath();
    ctx.moveTo(-w0 / 2, y0 + r);
    ctx.quadraticCurveTo(-w0 / 2, y0, -w0 / 2 + r, y0);
    ctx.lineTo(w0 / 2 - r, y0);
    ctx.quadraticCurveTo(w0 / 2, y0, w0 / 2, y0 + r);
    ctx.lineTo(w1 / 2, y1 - 3);
    ctx.quadraticCurveTo(w1 / 2, y1, w1 / 2 - 3, y1);
    ctx.lineTo(-w1 / 2 + 3, y1);
    ctx.quadraticCurveTo(-w1 / 2, y1, -w1 / 2, y1 - 3);
    ctx.closePath();
  }

  _torso(ctx, sk, id, P) {
    if (P.body <= 0) return;
    const b = sk.bob;
    ctx.save();
    // fitting squash: garment "sucks" onto the body
    const fit = P.body < 1 ? 1 + (1 - P.body) * 0.18 : 1;
    ctx.translate(0, -55 + b); ctx.scale(fit, 1); ctx.translate(0, 55 - b);
    this._clipTop(ctx, -74 + b, 2, P.body);
    if (id === 'base') {
      this._torsoPath(ctx, -71 + b, -40 + b, 29, 26);
      fillStroke(ctx, '#5bb8b0', LN, 1.5);
      ctx.fillStyle = '#ffffff'; circ(ctx, 4, -58 + b, 3.2); ctx.fill();
      ctx.fillStyle = '#f7d85e'; circ(ctx, 4, -58 + b, 1.6); ctx.fill();
    } else if (id === 'vet') {
      this._torsoPath(ctx, -72 + b, -15 + b, 30, 38, 6);
      fillStroke(ctx, '#fbfbf8', LN, 1.5);
      // scrub V + lapels
      ctx.fillStyle = '#8fc9dc';
      ctx.beginPath(); ctx.moveTo(-6, -72 + b); ctx.lineTo(0, -60 + b); ctx.lineTo(6, -72 + b); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = 'rgba(80,70,60,0.5)'; ctx.lineWidth = 1.1;
      ctx.beginPath(); ctx.moveTo(-9, -72 + b); ctx.lineTo(0, -52 + b); ctx.lineTo(9, -72 + b); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, -52 + b); ctx.lineTo(0, -16 + b); ctx.stroke();
      rr(ctx, 4, -36 + b, 8, 7, 1.5); ctx.stroke();
      ctx.strokeStyle = '#5b8fd6'; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(-9, -52 + b); ctx.lineTo(-9, -46 + b); ctx.stroke();
      ctx.strokeStyle = 'rgba(0,0,0,0.06)'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(-10, -40 + b); ctx.lineTo(-13, -17 + b); ctx.stroke();
    } else if (id === 'carp') {
      this._torsoPath(ctx, -71 + b, -40 + b, 29, 26);
      fillStroke(ctx, '#f2e2bf', LN, 1.5);
      // overall bib
      rr(ctx, -10, -62 + b, 20, 26, 3); fillStroke(ctx, '#4d7eb3', LN, 1.3);
      ctx.fillStyle = '#4d7eb3'; rr(ctx, -12.5, -44 + b, 25, 10, 3); ctx.fill();
      ctx.strokeStyle = '#4d7eb3'; ctx.lineWidth = 4; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(-8, -62 + b); ctx.lineTo(-10, -71 + b); ctx.moveTo(8, -62 + b); ctx.lineTo(10, -71 + b); ctx.stroke();
      ctx.fillStyle = '#e9c24e'; circ(ctx, -8, -61 + b, 1.6); ctx.fill(); circ(ctx, 8, -61 + b, 1.6); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = 0.9; ctx.setLineDash([2, 2]);
      rr(ctx, -5, -56 + b, 10, 8, 1.5); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = '#e04f45'; ctx.fillRect(1, -61 + b, 1.6, 6);
    } else if (id === 'diver') {
      this._torsoPath(ctx, -71 + b, -38 + b, 29, 25);
      fillStroke(ctx, '#2c3544', LN, 1.5);
      ctx.fillStyle = '#43b8c6';
      ctx.beginPath(); ctx.moveTo(-14, -66 + b); ctx.lineTo(-9, -66 + b); ctx.lineTo(-11, -40 + b); ctx.lineTo(-13, -40 + b); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(14, -66 + b); ctx.lineTo(9, -66 + b); ctx.lineTo(11, -40 + b); ctx.lineTo(13, -40 + b); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, -71 + b); ctx.lineTo(0, -45 + b); ctx.stroke();
      // tank straps
      ctx.strokeStyle = '#1b1f26'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(-9, -71 + b); ctx.lineTo(-7, -48 + b); ctx.moveTo(9, -71 + b); ctx.lineTo(7, -48 + b); ctx.stroke();
      if (this.wet > 0.2) { ctx.strokeStyle = `rgba(255,255,255,${this.wet * 0.5})`; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(-6, -66 + b); ctx.lineTo(-8, -54 + b); ctx.stroke(); }
    } else if (id === 'bee') {
      this._torsoPath(ctx, -73 + b, -35 + b, 34, 32, 9);
      fillStroke(ctx, '#f6f5f0', LN, 1.5);
      ctx.strokeStyle = 'rgba(0,0,0,0.12)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, -70 + b); ctx.lineTo(0, -37 + b); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-10, -50 + b); ctx.quadraticCurveTo(-4, -46 + b, -12, -42 + b); ctx.stroke();
      ctx.fillStyle = '#d9d6c9'; ctx.fillRect(-1, -69 + b, 2, 4);
    } else if (id === 'final') {
      // yellow sundress with white round collar
      const flare = 10 + this.spinAmt * 16 + Math.abs(Math.sin(this.spin)) * this.spinAmt * 6;
      ctx.beginPath();
      ctx.moveTo(-12.5, -68 + b);
      ctx.quadraticCurveTo(-13, -72 + b, -8, -72 + b);
      ctx.lineTo(8, -72 + b);
      ctx.quadraticCurveTo(13, -72 + b, 12.5, -68 + b);
      ctx.lineTo(11, -48 + b);
      ctx.quadraticCurveTo(18 + flare * 0.5, -32 + b, 20 + flare, -17 + b);
      ctx.quadraticCurveTo(0, -12 + b, -20 - flare, -17 + b);
      ctx.quadraticCurveTo(-18 - flare * 0.5, -32 + b, -11, -48 + b);
      ctx.closePath();
      fillStroke(ctx, '#f7cf4f', LN, 1.5);
      // soft folds + dots
      ctx.strokeStyle = 'rgba(190,130,20,0.35)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(-5, -46 + b); ctx.lineTo(-9 - flare * 0.4, -18 + b); ctx.moveTo(5, -46 + b); ctx.lineTo(8 + flare * 0.4, -18 + b); ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      for (const [dx, dy] of [[-8, -36], [3, -30], [12, -22], [-14, -24], [-2, -21], [7, -40], [-5, -60], [5, -54]]) { circ(ctx, dx, dy + b, 1.2); ctx.fill(); }
      // waist ribbon
      ctx.fillStyle = '#ffffff'; ctx.fillRect(-11.5, -50 + b, 23, 3);
      // round collar
      ctx.fillStyle = '#ffffff'; ctx.strokeStyle = LN; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.ellipse(-4.5, -71 + b, 6, 4, 0.3, 0, Math.PI); ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(4.5, -71 + b, 6, 4, -0.3, 0, Math.PI); ctx.fill(); ctx.stroke();
      // hem scallop
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(-19 - flare, -16.5 + b); ctx.quadraticCurveTo(0, -11.5 + b, 19 + flare, -16.5 + b); ctx.stroke();
    }
    ctx.restore();
  }

  _acc(ctx, sk, id, P) {
    if (P.acc <= 0) return;
    const b = sk.bob;
    ctx.save();
    const s = P.acc < 1 ? 1 + (1 - E.outBack(P.acc)) * 0.4 : 1;
    ctx.globalAlpha *= Math.min(1, P.acc * 2);
    if (id === 'vet') {
      // stethoscope around the neck
      ctx.translate(0, -60 + b); ctx.scale(s, s); ctx.translate(0, 60 - b);
      ctx.strokeStyle = '#4a5560'; ctx.lineWidth = 2.4; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(-8, -72 + b); ctx.quadraticCurveTo(-10, -58 + b, -3, -54 + b); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(8, -72 + b); ctx.quadraticCurveTo(10, -60 + b, 3, -54 + b); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, -54 + b); ctx.quadraticCurveTo(-1, -48 + b, 3, -44 + b); ctx.stroke();
      circ(ctx, 4, -42 + b, 3.6); fillStroke(ctx, '#cfd6db', LN, 1.2);
      ctx.fillStyle = '#ffffff'; circ(ctx, 3, -43 + b, 1.2); ctx.fill();
    } else if (id === 'carp') {
      ctx.translate(0, -42 + b); ctx.scale(s, s); ctx.translate(0, 42 - b);
      // tool belt with hammer and pouch
      rr(ctx, -15, -45 + b, 30, 6, 2); fillStroke(ctx, '#8a5a33', LN, 1.3);
      ctx.fillStyle = '#d8b04a'; rr(ctx, -2.5, -45 + b, 5, 6, 1); ctx.fill();
      rr(ctx, -17, -41 + b, 9, 11, 2); fillStroke(ctx, '#9c6a3c', LN, 1.2);
      ctx.fillStyle = '#e8c35a'; ctx.fillRect(-15, -47 + b, 2, 7);
      // hammer hanging on the right hip (silhouette)
      ctx.save(); ctx.translate(15, -41 + b); ctx.rotate(0.35);
      rr(ctx, -1.6, 0, 3.2, 17, 1.5); fillStroke(ctx, '#c79a62', LN, 1.1);
      rr(ctx, -6, 14, 12, 5, 1.5); fillStroke(ctx, '#8d969d', LN, 1.1);
      ctx.restore();
    } else if (id === 'diver') {
      ctx.translate(0, -42 + b); ctx.scale(s, s); ctx.translate(0, 42 - b);
      rr(ctx, -14, -42 + b, 28, 5, 2); fillStroke(ctx, '#15181d', LN, 1.2);
      ctx.fillStyle = '#9aa3aa';
      for (const dx of [-10, -3, 4]) { rr(ctx, dx, -43.5 + b, 5, 8, 1.5); ctx.fill(); }
    } else if (id === 'bee') {
      // zipper pull and chest pocket
      ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 1;
      rr(ctx, 4, -62 + b, 8, 7, 1.5); ctx.stroke();
    }
    ctx.restore();
  }

  _finalAcc(ctx, sk) {
    const b = sk.bob;
    const bp = this._pieceP('bag');
    if (bp > 0) {
      ctx.save();
      ctx.globalAlpha *= bp;
      ctx.strokeStyle = '#e59aa6'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(10, -70 + b); ctx.lineTo(-9, -46 + b); ctx.stroke();
      drawFinalItem(ctx, 'bag', -11, -42 + b, 0.85, 0);
      ctx.restore();
    }
  }

  _arms(ctx, sk, layers) {
    const cover = { base: 0.3, vet: 1, carp: 0.8, diver: 1, bee: 1, final: 0.25 };
    const sleeveCol = { base: '#5bb8b0', vet: '#fbfbf8', carp: '#f2e2bf', diver: '#2c3544', bee: '#f6f5f0', final: '#f7cf4f' };
    const sleeveW = { base: 10.5, vet: 10, carp: 9.5, diver: 9, bee: 12.5, final: 12 };
    for (const side of ['L', 'R']) {
      const sh = sk['sh' + side], el = sk['el' + side], h = sk['hand' + side];
      limb3(ctx, [sh, el, h], 7.2, SK, LN, 1.3);
      for (const L of layers) {
        const id = L.id, p = L.parts.sleeves;
        if (p <= 0) continue;
        const cov = cover[id] * p;
        // sleeve along the arm up to 'cov' of its length
        const pts = [sh];
        const total = 29;
        const upLen = 15 / total;
        if (cov <= upLen) {
          const k = cov / upLen;
          pts.push({ x: lerp(sh.x, el.x, k), y: lerp(sh.y, el.y, k) });
        } else {
          pts.push(el);
          const k = (cov - upLen) / (1 - upLen);
          pts.push({ x: lerp(el.x, h.x, k * 0.9), y: lerp(el.y, h.y, k * 0.9) });
        }
        if (id === 'final') {
          ell(ctx, lerp(sh.x, el.x, 0.25), lerp(sh.y, el.y, 0.25), 7 * p, 6 * p); fillStroke(ctx, '#f7cf4f', LN, 1.3);
          continue;
        }
        limb3(ctx, pts, sleeveW[id], sleeveCol[id], LN, 1.3);
        const end = pts[pts.length - 1];
        if (id === 'diver') {
          ctx.strokeStyle = '#43b8c6'; ctx.lineWidth = 1.8;
          ctx.beginPath(); ctx.moveTo(sh.x, sh.y); ctx.lineTo(el.x, el.y); ctx.stroke();
        }
        if (id === 'carp' && p >= 1) { ell(ctx, end.x, end.y, 5.2, 5.2); fillStroke(ctx, '#e7d3a8', LN, 1.1); }
        if (id === 'bee' && p >= 1) { ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 1; ell(ctx, el.x, el.y, 5, 5); ctx.stroke(); }
      }
      // hands / gloves
      const glove = layers.find((L) => L.id === 'bee' && L.parts.sleeves > 0.6);
      if (glove) {
        const ga = inv(0.6, 1, glove.parts.sleeves);
        ctx.save(); ctx.globalAlpha *= ga;
        limb(ctx, lerp(el.x, h.x, 0.25), lerp(el.y, h.y, 0.25), h.x, h.y, 9.5, '#eedfb4', LN, 1.2);
        circ(ctx, h.x, h.y, 6.3); fillStroke(ctx, '#eedfb4', LN, 1.2);
        ctx.restore();
        if (ga < 1) { circ(ctx, h.x, h.y, 4.3 * (1 - ga)); fillStroke(ctx, SK, LN, 1.1); }
      } else {
        circ(ctx, h.x, h.y, 4.4); fillStroke(ctx, SK, LN, 1.2);
      }
    }
  }

  _held(ctx, sk, h) {
    const it = this.held;
    if (!it) return;
    ctx.save();
    ctx.translate(h.x, h.y);
    if (it === 'bag') {
      rr(ctx, -8, 1, 17, 12, 3); fillStroke(ctx, '#8b5a3a', LN, 1.2);
      ctx.strokeStyle = LN; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(0.5, 1, 4, Math.PI, 0); ctx.stroke();
      ctx.fillStyle = '#d7b46a'; ctx.fillRect(-1, 5, 3, 2);
    } else if (it === 'mallet') {
      ctx.rotate(-sk.aR);
      rr(ctx, -1.8, -2, 3.6, 22, 1.5); fillStroke(ctx, '#c99a60', LN, 1.1);
      rr(ctx, -8, 18, 16, 10, 3); fillStroke(ctx, '#a86f3e', LN, 1.2);
      ctx.fillStyle = 'rgba(255,230,190,0.5)'; ctx.fillRect(-7, 19, 3, 8);
    } else if (it === 'smoker') {
      rr(ctx, -5, 0, 11, 16, 3); fillStroke(ctx, '#b9c1c7', LN, 1.2);
      ctx.fillStyle = '#8d969d'; ctx.beginPath(); ctx.moveTo(-4, 0); ctx.lineTo(0, -6); ctx.lineTo(5, 0); ctx.closePath(); ctx.fill();
      rr(ctx, 6, 3, 6, 11, 2); fillStroke(ctx, '#a0714a', LN, 1);
    }
    ctx.restore();
  }

  _head(ctx, sk, layers) {
    const hx = sk.head.x, hy = sk.head.y, r = 21;
    ctx.save();
    ctx.translate(hx, hy + 10); ctx.rotate(sk.headTilt); ctx.translate(-hx, -hy - 10);
    const fo = 2.5 + this.lookSm.x * 3;
    const fy = this.lookSm.y * 2;
    // hair back
    ell(ctx, hx - 1, hy + 1, r + 3.5, r + 3); fillStroke(ctx, HAIR, LN, 1.5);
    // neck
    ctx.fillStyle = SK; ctx.fillRect(hx - 4, hy + 17, 8, 7);
    // face
    circ(ctx, hx, hy, r); fillStroke(ctx, SK, LN, 1.5);
    // ear
    ell(ctx, hx - 17 + fo * 0.3, hy + 3, 3.5, 4.5); fillStroke(ctx, SK, LN, 1.1);
    // cheeks
    ctx.fillStyle = 'rgba(240,120,110,0.35)';
    ell(ctx, hx - 10 + fo, hy + 8, 4, 2.6); ctx.fill();
    ell(ctx, hx + 13 + fo, hy + 8, 4, 2.6); ctx.fill();
    // eyes
    const ex1 = hx - 6 + fo, ex2 = hx + 8 + fo, ey = hy + 2 + fy;
    const bl = this.blink > 0 ? 0.15 : 1;
    const surprised = this.expr === 'o';
    const happy = this.expr === 'happy' || this.expr === 'open';
    ctx.fillStyle = '#3a2820';
    for (const ex of [ex1, ex2]) {
      if (happy && this.blink <= 0) {
        ctx.strokeStyle = '#3a2820'; ctx.lineWidth = 1.8; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.arc(ex, ey + 1, 3, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke();
      } else {
        const ry = (surprised ? 4 : 3.4) * bl;
        ell(ctx, ex, ey, surprised ? 3 : 2.6, ry); ctx.fill();
        if (bl > 0.5) { ctx.fillStyle = '#ffffff'; circ(ctx, ex - 0.8, ey - 1.2, 1); ctx.fill(); ctx.fillStyle = '#3a2820'; }
      }
    }
    // brows
    ctx.strokeStyle = HAIRD; ctx.lineWidth = 1.3; ctx.lineCap = 'round';
    const worry = this.expr === 'worry';
    ctx.beginPath();
    ctx.moveTo(ex1 - 3, ey - 6 - (worry ? -1 : 0)); ctx.lineTo(ex1 + 2, ey - 7 + (worry ? 1.5 : 0));
    ctx.moveTo(ex2 - 2, ey - 7 + (worry ? 1.5 : 0)); ctx.lineTo(ex2 + 3, ey - 6 - (worry ? -1 : 0));
    ctx.stroke();
    // mouth
    const mx = hx + 1 + fo, my = hy + 10;
    ctx.strokeStyle = '#7a3a2e'; ctx.lineWidth = 1.5;
    const mouthCovered = layers.some((L) => L.id === 'diver' && L.parts.head > 0.5);
    if (!mouthCovered) {
      if (surprised) { ctx.fillStyle = '#7a3a2e'; ell(ctx, mx, my + 1, 2.2, 2.8); ctx.fill(); }
      else if (this.expr === 'open') { ctx.fillStyle = '#b8574a'; ctx.beginPath(); ctx.arc(mx, my - 0.5, 4, 0, Math.PI); ctx.closePath(); ctx.fill(); }
      else if (worry) { ctx.beginPath(); ctx.moveTo(mx - 3, my + 1); ctx.quadraticCurveTo(mx, my - 0.5, mx + 3, my + 1); ctx.stroke(); }
      else { ctx.beginPath(); ctx.arc(mx, my - 2, 3.6, Math.PI * 0.2, Math.PI * 0.8); ctx.stroke(); }
    }
    // bangs / top hair
    ctx.fillStyle = HAIR; ctx.strokeStyle = LN; ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(hx - r - 2, hy + 4);
    ctx.bezierCurveTo(hx - r - 3, hy - r - 6, hx + r + 4, hy - r - 7, hx + r + 2, hy + 1);
    ctx.quadraticCurveTo(hx + r - 2, hy - 8, hx + 12 + fo * 0.4, hy - 9);
    ctx.quadraticCurveTo(hx + 6 + fo * 0.4, hy - 5, hx + 2 + fo * 0.4, hy - 10);
    ctx.quadraticCurveTo(hx - 5 + fo * 0.4, hy - 5, hx - 10 + fo * 0.4, hy - 10);
    ctx.quadraticCurveTo(hx - r + 2, hy - 6, hx - r - 2, hy + 4);
    ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = 'rgba(255,230,200,0.25)';
    ell(ctx, hx - 7, hy - 16, 7, 3, -0.3); ctx.fill();

    for (const L of layers) this._headGear(ctx, sk, L.id, L.parts, fo);
    if (this.outfit === 'final' || (this.change && this.change.to === 'final')) {
      const hp = this._pieceP('hat');
      if (hp > 0) {
        ctx.save();
        const drop = (1 - E.outBounce(hp)) * -26;
        ctx.globalAlpha *= Math.min(1, hp * 3);
        drawFinalItem(ctx, 'hat', hx, hy - 16 + drop, 1, 0, fo);
        ctx.restore();
      }
    }
    ctx.restore();
  }

  _headGear(ctx, sk, id, P, fo) {
    if (P.head <= 0.01) return;
    const hx = sk.head.x, hy = sk.head.y;
    const k = P.headOff !== undefined ? P.head : E.outBounce(Math.min(1, P.head));
    const off = P.headOff !== undefined ? -P.headOff * 40 : (1 - k) * -34;
    ctx.save();
    ctx.globalAlpha *= Math.min(1, P.head * 2.5);
    ctx.translate(0, off);
    if (id === 'carp') {
      // cap with brim to the front
      ctx.beginPath();
      ctx.moveTo(hx - 21, hy - 5);
      ctx.bezierCurveTo(hx - 21, hy - 30, hx + 21, hy - 30, hx + 21, hy - 5);
      ctx.closePath(); fillStroke(ctx, '#ea8a3b', LN, 1.5);
      ctx.beginPath(); ctx.moveTo(hx + 8, hy - 7); ctx.quadraticCurveTo(hx + 26, hy - 9, hx + 31, hy - 3); ctx.lineTo(hx + 12, hy - 3); ctx.closePath();
      fillStroke(ctx, '#d4742b', LN, 1.3);
      ctx.fillStyle = '#f7b36b'; circ(ctx, hx, hy - 27, 2.4); ctx.fill();
    } else if (id === 'diver') {
      // mask + regulator
      ctx.strokeStyle = '#1e2329'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(hx - 22, hy - 2); ctx.lineTo(hx - 8 + fo, hy - 1); ctx.stroke();
      rr(ctx, hx - 12 + fo, hy - 7, 26, 16, 7); fillStroke(ctx, '#f1c232', LN, 1.5);
      rr(ctx, hx - 9.5 + fo, hy - 4.5, 21, 11, 5);
      ctx.fillStyle = 'rgba(170,225,245,0.55)'; ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(hx - 6 + fo, hy - 2); ctx.lineTo(hx - 2 + fo, hy - 3); ctx.stroke();
      // eyes through the mask
      ctx.fillStyle = '#3a2820'; ell(ctx, hx - 5 + fo, hy + 2, 2.3, 3); ctx.fill(); ell(ctx, hx + 7 + fo, hy + 2, 2.3, 3); ctx.fill();
      // regulator
      rr(ctx, hx - 3 + fo, hy + 9, 9, 6, 2.5); fillStroke(ctx, '#2b3037', LN, 1.2);
      ctx.strokeStyle = '#2b3037'; ctx.lineWidth = 2.4;
      ctx.beginPath(); ctx.moveTo(hx - 2 + fo, hy + 13); ctx.quadraticCurveTo(hx - 14, hy + 20, hx - 16, hy + 10); ctx.stroke();
    } else if (id === 'bee') {
      // round brim hat + mesh veil (face visible through the mesh)
      ctx.fillStyle = 'rgba(35,35,35,0.26)';
      ctx.beginPath();
      ctx.moveTo(hx - 29, hy - 20); ctx.lineTo(hx + 29, hy - 20);
      ctx.lineTo(hx + 21, hy + 23); ctx.lineTo(hx - 21, hy + 23); ctx.closePath(); ctx.fill();
      ctx.save(); ctx.clip();
      ctx.strokeStyle = 'rgba(20,20,20,0.35)'; ctx.lineWidth = 0.6;
      for (let i = -32; i < 32; i += 3.2) { ctx.beginPath(); ctx.moveTo(hx + i, hy - 22); ctx.lineTo(hx + i * 0.72, hy + 25); ctx.stroke(); }
      for (let j = -20; j < 25; j += 3.2) { ctx.beginPath(); ctx.moveTo(hx - 32, hy + j); ctx.lineTo(hx + 32, hy + j); ctx.stroke(); }
      ctx.restore();
      ctx.strokeStyle = LN; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(hx - 29, hy - 20); ctx.lineTo(hx - 21, hy + 23); ctx.moveTo(hx + 29, hy - 20); ctx.lineTo(hx + 21, hy + 23); ctx.stroke();
      rr(ctx, hx - 22, hy + 20, 44, 5, 2.5); fillStroke(ctx, '#f6f5f0', LN, 1.2);
      ell(ctx, hx, hy - 20, 34, 7); fillStroke(ctx, '#f7f2e1', LN, 1.5);
      ctx.beginPath(); ctx.moveTo(hx - 17, hy - 21); ctx.bezierCurveTo(hx - 17, hy - 40, hx + 17, hy - 40, hx + 17, hy - 21); ctx.closePath();
      fillStroke(ctx, '#f7f2e1', LN, 1.5);
      ctx.fillStyle = 'rgba(0,0,0,0.08)'; ctx.fillRect(hx - 17, hy - 26, 34, 4);
    }
    ctx.restore();
  }
}

// ------------------------------------------------------------------ final items
export function drawFinalItem(ctx, name, x, y, s = 1, rot = 0, fo = 0) {
  ctx.save();
  ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
  if (name === 'hat') {
    // straw hat with blue ribbon
    ell(ctx, fo * 0.3, 2, 33, 7.5); fillStroke(ctx, '#e8c67a', LN, 1.5);
    ctx.strokeStyle = 'rgba(160,110,40,0.35)'; ctx.lineWidth = 0.8;
    for (let i = 0; i < 3; i++) { ell(ctx, fo * 0.3, 2, 30 - i * 6, 6 - i * 1.2); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(-18 + fo * 0.3, 1); ctx.bezierCurveTo(-18, -20, 18, -20, 18 + fo * 0.3, 1); ctx.closePath();
    fillStroke(ctx, '#edcf88', LN, 1.5);
    ctx.fillStyle = '#3f7fd6'; ctx.fillRect(-18 + fo * 0.3, -4, 36, 5);
    // bow on the side
    ctx.fillStyle = '#3f7fd6'; ctx.strokeStyle = LN; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(-16, -2); ctx.lineTo(-24, -7); ctx.lineTo(-24, 3); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-16, -2); ctx.lineTo(-9, -8); ctx.lineTo(-9, 3); ctx.closePath(); ctx.fill(); ctx.stroke();
    circ(ctx, -16, -2, 2); ctx.fill();
  } else if (name === 'sandals') {
    for (const dx of [-7, 7]) {
      rr(ctx, dx - 6, -2, 12, 4, 2); fillStroke(ctx, '#3f7fd6', LN, 1.1);
      ctx.strokeStyle = '#3f7fd6'; ctx.lineWidth = 2.2;
      ctx.beginPath(); ctx.moveTo(dx - 4, -1); ctx.quadraticCurveTo(dx, -8, dx + 4, -1); ctx.stroke();
      ctx.fillStyle = '#ffd35a'; circ(ctx, dx, -5.5, 1.3); ctx.fill();
    }
  } else if (name === 'bag') {
    circ(ctx, 0, 0, 8); fillStroke(ctx, '#fff6ea', LN, 1.3);
    ctx.fillStyle = '#f39bb0';
    for (let i = 0; i < 5; i++) { const a = (i / 5) * TAU; ell(ctx, Math.cos(a) * 3.4, Math.sin(a) * 3.4, 2.6, 1.6, a); ctx.fill(); }
    ctx.fillStyle = '#ffd35a'; circ(ctx, 0, 0, 1.8); ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.arc(0, 0, 6.5, Math.PI * 1.1, Math.PI * 1.9); ctx.stroke();
  } else if (name === 'dress') {
    // on a hanger
    ctx.strokeStyle = '#8d969d'; ctx.lineWidth = 1.6;
    ctx.beginPath(); ctx.arc(0, -4, 3.5, Math.PI, Math.PI * 2.2); ctx.stroke();
    ctx.strokeStyle = C.woodD; ctx.lineWidth = 2.6;
    ctx.beginPath(); ctx.moveTo(-17, 6); ctx.lineTo(0, 0); ctx.lineTo(17, 6); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-11, 4); ctx.lineTo(11, 4); ctx.lineTo(10, 24); ctx.quadraticCurveTo(20, 40, 24, 58);
    ctx.quadraticCurveTo(0, 63, -24, 58); ctx.quadraticCurveTo(-20, 40, -10, 24); ctx.closePath();
    fillStroke(ctx, '#f7cf4f', LN, 1.5);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(-10, 22, 20, 3);
    ctx.beginPath(); ctx.ellipse(-4, 5, 5, 3.5, 0.3, 0, Math.PI); ctx.fill();
    ctx.beginPath(); ctx.ellipse(4, 5, 5, 3.5, -0.3, 0, Math.PI); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    for (const [dx, dy] of [[-6, 34], [4, 40], [12, 50], [-14, 50], [0, 52], [6, 30]]) { circ(ctx, dx, dy, 1.2); ctx.fill(); }
  }
  ctx.restore();
}
