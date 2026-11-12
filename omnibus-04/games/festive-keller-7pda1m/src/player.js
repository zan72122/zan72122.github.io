import * as THREE from 'three';
import { clamp, damp, dampAngle, smoothstep, wrapAngle, spectral } from './util.js';
import { staticSurfaces, resolveObstacles, PARK_R, obstacleTop } from './layout.js';
import { SPACING } from './rainbow.js';

// Moves the child across ground, roofs and rainbows; handles stepping,
// hesitating at edges, falling, the soap-film bubble that catches a long
// fall, and paints the path.

const STEP_UP = 0.36;
const STEP_DOWN = 0.42;
const MIN_LIFT = 0.1;   // ribbons lower than this count as the ground they lie on
const G = 8.6;

const _v = new THREE.Vector3();
const _w = new THREE.Vector3();
const _c = new THREE.Color();

export class Player {
  constructor({ kid, rainbow, particles, audio, world, bubble, critters }) {
    this.kid = kid;
    this.rainbow = rainbow;
    this.particles = particles;
    this.audio = audio;
    this.world = world;
    this.bubble = bubble;
    this.critters = critters;
    this.pos = new THREE.Vector3(0, 0, 7);
    this.heading = Math.PI;
    this.speed = 0;
    this.vel = new THREE.Vector3();
    this.mode = 'stand';
    this.support = { kind: 'ground', chain: null, idx: 0, y: 0, id: -1 };
    this.target = null;
    this.held = false;
    this.edgeT = 0;
    this.fallStartY = 0;
    this.fallT = 0;
    this.bounces = 0;
    this.idleT = 0;
    this.slope = 0;
    this.statics = [];
    this.ribbons = [];
    this.cands = [];
    this.leafT = 0;
    this.maxHeight = 0;
    this.look = null;
    this.walkedDist = 0;
    this.everMoved = false;
    this.supportY = (x, z, yRef) => this.surfaceNear(x, z, yRef);
    this.onContact = (L, p, yaw, side, speed) => this.footContact(L, p, yaw, side, speed);
    kid.resetFeet(this.pos, this.heading, this.supportY);
  }

  // --- surfaces ---------------------------------------------------------------
  surfacesAt(x, z) {
    const out = this.cands;
    out.length = 0;
    staticSurfaces(x, z, this.statics);
    for (const s of this.statics) out.push(s);
    this.rainbow.querySupport(x, z, this.ribbons);
    for (const r of this.ribbons) {
      if (r.lift < MIN_LIFT && !r.chain.baseChain[Math.round(r.idx)]) continue;
      out.push({ kind: 'ribbon', chain: r.chain, idx: r.idx, y: r.y, id: r.chain.id, lift: r.lift });
    }
    return out;
  }

  sameSurface(a, b) {
    return a && b && a.kind === b.kind && (a.kind === 'ribbon' ? a.chain === b.chain : a.id === b.id);
  }

  chooseSupport(x, z, yRef, prefer = null) {
    const cands = this.surfacesAt(x, z);
    let keep = null, pref = null, best = null;
    const si = this.support.idx || 0;
    for (const c of cands) {
      if (c.y > yRef + STEP_UP || c.y < yRef - STEP_DOWN) continue;
      // same surface: on a rainbow that crosses itself, stay on the same pass
      if (this.sameSurface(c, this.support) && (!keep || Math.abs(c.idx - si) < Math.abs(keep.idx - si))) keep = c;
      if (prefer && c.kind === 'ribbon' && c.chain === prefer && (!pref || Math.abs(c.y - yRef) < Math.abs(pref.y - yRef))) pref = c;
      if (!best || c.y > best.y) best = c;
    }
    return pref || keep || best;
  }

  // Height for a foot near the body's surface.
  surfaceNear(x, z, yRef) {
    const cands = this.surfacesAt(x, z);
    let best = null, bd = 1e9;
    let same = null;
    for (const c of cands) {
      const d = Math.abs(c.y - yRef);
      if (c.y > yRef + STEP_UP || c.y < yRef - STEP_DOWN) continue;
      if (this.sameSurface(c, this.support) && (!same || d < Math.abs(same.y - yRef))) same = c;
      if (d < bd) { bd = d; best = c; }
    }
    if (same) best = same;
    return best ? best.y : yRef;
  }

  setSupport(s) {
    if (!this.sameSurface(s, this.support)) {
      // Stepping between surfaces at (almost) the same height keeps drawing the
      // same rainbow; a real step up/down, or stepping onto the rainbow being
      // drawn, starts a new one.
      const cur = this.rainbow.current;
      if (Math.abs(s.y - this.support.y) > 0.12 || (cur && s.chain === cur)) this.rainbow.endChain();
    }
    this.support = { kind: s.kind, chain: s.chain || null, idx: s.idx || 0, y: s.y, id: s.id };
  }

  // Where the target rainbow is under our feet (if it is within a step).
  onChain(c) {
    this.rainbow.querySupport(this.pos.x, this.pos.z, this.ribbons);
    let best = null;
    for (const r of this.ribbons) {
      if (r.chain === c && Math.abs(r.y - this.pos.y) <= STEP_UP && (!best || Math.abs(r.y - this.pos.y) < Math.abs(best.y - this.pos.y))) best = r;
    }
    return best;
  }

  // --- input ------------------------------------------------------------------
  setTarget(t) {
    if (!t) { this.target = null; return; }
    if (t.kind === 'ribbon') {
      const c = t.chain;
      t.idx = clamp(t.idx, 3, c.n - 4);
      // touching the rainbow you are still drawing: stop drawing it so its
      // foot stays put and you can step on
      if (c === this.rainbow.current) this.rainbow.endChain();
    }
    this.target = t;
    this.idleT = 0;
    this.everMoved = true;
  }

  // --- per frame -----------------------------------------------------------------
  update(dt, time) {
    this.time = time;
    if (this.mode === 'fall' || this.mode === 'bubble') this.airMove(dt);
    else if (this.mode === 'edge') this.edgeUpdate(dt);
    else this.groundMove(dt);

    this.maxHeight = Math.max(this.maxHeight, this.pos.y);
    const load = this.support.kind === 'ribbon' && (this.mode === 'stand' || this.mode === 'walk') ? this.support : null;

    this.kid.update(dt, {
      pos: this.pos,
      heading: this.heading,
      vel: this.vel,
      speed: this.mode === 'walk' || this.mode === 'stand' ? this.speed : 0,
      mode: this.mode,
      grounded: this.mode === 'walk' || this.mode === 'stand' || this.mode === 'edge',
      look: this.look,
      point: this.point || null,
      slope: this.slope,
      supportY: this.supportY,
      onContact: this.onContact,
    });
    if (this.bubble) this.bubble.follow(this.pos, dt, this.mode === 'bubble');
    return load;
  }

  desiredDirection(out) {
    const t = this.target;
    if (!t) return 0;
    let sup = this.support;
    if (t.kind === 'ribbon' && sup.chain !== t.chain) {
      const r = this.onChain(t.chain);
      if (r) sup = { kind: 'ribbon', chain: r.chain, idx: r.idx };
    }
    // following along a rainbow
    if (sup.kind === 'ribbon' && (t.kind === 'ribbon' && t.chain === sup.chain || t.kind === 'dir')) {
      const c = sup.chain;
      let dirSign;
      let remaining;
      if (t.kind === 'ribbon') {
        remaining = (t.idx - sup.idx) * SPACING;
        dirSign = Math.sign(remaining);
        if (Math.abs(remaining) < 0.3) return -1;
      } else {
        c.tangentAt(sup.idx, _w);
        dirSign = Math.sign(_w.x * t.dir.x + _w.z * t.dir.z) || 1;
        const end = dirSign > 0 ? c.n - 4 : 3;
        remaining = (end - sup.idx) * SPACING;
        if (remaining * dirSign < 0.25) return -1;
        remaining = 5 * dirSign;
      }
      const la = clamp(sup.idx + dirSign * 5, 2, c.n - 3);
      c.centerAt(la, _w);
      out.set(_w.x - this.pos.x, 0, _w.z - this.pos.z);
      if (out.lengthSq() < 1e-6) return -1;
      out.normalize();
      return Math.abs(remaining);
    }
    if (t.kind === 'dir') {
      out.set(t.dir.x, 0, t.dir.z).normalize();
      return this.held ? 6 : 0;
    }
    let tx = t.p.x, tz = t.p.z;
    if (t.kind === 'ribbon') {
      // find where the rainbow can be stepped onto from our height
      const c = t.chain;
      if (c.dead) { this.target = null; return 0; }
      const e = this.rainbow.entryPoint(c, this.pos.x, this.pos.y, this.pos.z, STEP_UP * 0.9, MIN_LIFT + 0.02);
      if (e >= 0) {
        tx = c.x[e]; tz = c.z[e];
        // walk a little along it so we actually step on
        tx += c.tx[e] * Math.sign(t.idx - e) * 0.3;
        tz += c.tz[e] * Math.sign(t.idx - e) * 0.3;
        out.set(tx - this.pos.x, 0, tz - this.pos.z);
        const d = out.length();
        this.entryT = d < 0.3 ? (this.entryT || 0) + 1 / 60 : 0;
        if (this.entryT > 1.2) { this.entryT = 0; return -1; }
        if (d < 1e-3) out.set(c.tx[e] * Math.sign(t.idx - e), 0, c.tz[e] * Math.sign(t.idx - e));
        out.normalize();
        this.waitT = 0;
        return Math.max(d, 0.6);
      }
      // not ready yet: go to its newest end, where the ramp will form, and wait
      const h = c.n - 1;
      out.set(c.x[h] - this.pos.x, 0, c.z[h] - this.pos.z);
      const d = out.length();
      if (d < 0.8) {
        this.waitT = (this.waitT || 0) + 1 / 60;
        if (this.waitT > 12) { this.waitT = 0; return -1; }
        return 0;
      }
      out.divideScalar(d);
      return d;
    }
    out.set(tx - this.pos.x, 0, tz - this.pos.z);
    const d = out.length();
    if (d < 0.2) return -1;
    out.divideScalar(d);
    return d;
  }

  // Walking along a rainbow the child is on: move along its length like on
  // rails, so hairpins and loops are followed and nobody slips off by accident.
  railInfo() {
    const t = this.target;
    if (!t || (t.kind !== 'ribbon' && t.kind !== 'dir')) return null;
    let sup = this.support;
    if (t.kind === 'ribbon' && sup.chain !== t.chain) {
      const r = this.onChain(t.chain);
      if (r) sup = { kind: 'ribbon', chain: r.chain, idx: r.idx };
    }
    if (sup.kind !== 'ribbon' || !sup.chain || sup.chain.dead) return null;
    const c = sup.chain;
    if (t.kind === 'ribbon') {
      if (t.chain !== c) return null;
      const remaining = (t.idx - sup.idx) * SPACING;
      return { c, idx: sup.idx, dirSign: Math.sign(remaining) || 1, remaining: Math.abs(remaining) };
    }
    c.tangentAt(sup.idx, _w);
    const dirSign = Math.sign(_w.x * t.dir.x + _w.z * t.dir.z) || 1;
    const end = dirSign > 0 ? c.n - 3 : 3;
    const remaining = (end - sup.idx) * SPACING * dirSign;
    return { c, idx: sup.idx, dirSign, remaining: this.held ? Math.max(remaining, 0) : Math.min(Math.max(remaining, 0), 5) };
  }

  railMove(dt, r) {
    const c = r.c;
    let want = 0;
    if (r.remaining < 0.25) {
      if (!this.held || this.target.kind === 'ribbon') this.target = null;
    } else {
      want = clamp(0.95 + r.remaining * 0.5, 1.15, 2.4);
      want *= clamp(1 - Math.max(this.slope, 0) * 0.6, 0.55, 1);
    }
    this.speed = damp(this.speed, want, want > this.speed ? 5.5 : 7, dt);
    if (this.speed < 0.02 && want === 0) this.speed = 0;
    let ni = r.idx + (r.dirSign * this.speed * dt) / SPACING;
    ni = clamp(ni, 2.5, c.n - 2.5);
    // keep a little of the current sideways offset, easing back to the middle
    c.centerAt(r.idx, _w);
    const ti = clamp(Math.round(r.idx), 0, c.n - 1);
    const sx = -c.tz[ti], sz = c.tx[ti];
    let off = (this.pos.x - _w.x) * sx + (this.pos.z - _w.z) * sz;
    off = clamp(off, -0.5, 0.5) * Math.exp(-2.5 * dt);
    c.centerAt(ni, _w);
    const ni2 = clamp(Math.round(ni), 0, c.n - 1);
    const nx = _w.x - c.tz[ni2] * off, nz = _w.z + c.tx[ni2] * off;
    const ny = _w.y;
    const moved = Math.hypot(nx - this.pos.x, nz - this.pos.z);
    if (moved > 1e-5) {
      const h = Math.atan2(nx - this.pos.x, nz - this.pos.z);
      const diff = wrapAngle(h - this.heading);
      this.heading += clamp(diff, -9 * dt, 9 * dt);
    }
    this.slope = damp(this.slope, moved > 1e-4 ? clamp((ny - this.pos.y) / moved, -1, 1) : 0, 8, dt);
    this.vel.set((nx - this.pos.x) / dt, (ny - this.pos.y) / dt, (nz - this.pos.z) / dt);
    this.pos.set(nx, ny, nz);
    this.setSupport({ kind: 'ribbon', chain: c, idx: ni, y: ny, id: c.id });
    this.walkedDist += moved;
    this.mode = this.speed > 0.05 ? 'walk' : 'stand';
    if (this.mode === 'stand') this.idleT += dt; else this.idleT = 0;
    if (this.mode === 'walk') this.rainbow.paint(this.pos.x, this.pos.z, { chain: c, idx: ni }, this.heading);
  }

  groundMove(dt) {
    const rail = this.railInfo();
    if (rail) { this.railMove(dt, rail); return; }
    const dist = this.desiredDirection(_v);
    let want = 0;
    if (dist === -1) {
      if (!this.held) this.target = null;
    } else if (dist > 0) {
      want = clamp(0.95 + dist * 0.5, 1.15, 2.55);
      if (this.held && this.target && this.target.kind !== 'ribbon') want = Math.max(want, 1.6);
      const desiredH = Math.atan2(_v.x, _v.z);
      const diff = wrapAngle(desiredH - this.heading);
      const turnRate = 7.5;
      this.heading += clamp(diff, -turnRate * dt, turnRate * dt);
      want *= clamp(Math.cos(diff) * 1.2, 0.15, 1);
      // uphill is harder for small legs
      want *= clamp(1 - Math.max(this.slope, 0) * 0.6, 0.55, 1);
    }
    const accel = want > this.speed ? 5.5 : 7;
    this.speed = damp(this.speed, want, accel, dt);
    if (this.speed < 0.02 && want === 0) this.speed = 0;

    const fx = Math.sin(this.heading), fz = Math.cos(this.heading);
    const step = this.speed * dt;
    if (step > 0) {
      _w.set(this.pos.x + fx * step, 0, this.pos.z + fz * step);
      if (this.support.kind !== 'ribbon') resolveObstacles(_w, 0.2, this.pos.y, STEP_UP);
      else {
        const r = Math.hypot(_w.x, _w.z);
        if (r > PARK_R + 4) { _w.x *= (PARK_R + 4) / r; _w.z *= (PARK_R + 4) / r; }
      }
      const prefer = this.target && this.target.kind === 'ribbon' ? this.target.chain : null;
      const sup = this.chooseSupport(_w.x, _w.z, this.pos.y, prefer);
      if (!sup) {
        // an edge: are we trying to go somewhere below?
        const wantsOff = this.target && (this.target.kind === 'ground' || this.target.kind === 'roof' ||
          (this.target.kind === 'ribbon' && this.target.chain !== this.support.chain) ||
          (this.target.kind === 'dir' && this.support.kind !== 'ribbon'));
        if (wantsOff && this.pos.y > 0.2) {
          this.mode = 'edge';
          this.edgeT = 0;
          this.audio && this.audio.gasp();
        } else {
          this.speed = 0;
          if (!this.held) this.target = null;
        }
      } else {
        const dy = sup.y - this.pos.y;
        const ddx = _w.x - this.pos.x, ddz = _w.z - this.pos.z;
        const moved = Math.hypot(ddx, ddz);
        this.slope = damp(this.slope, moved > 1e-4 ? clamp(dy / moved, -1, 1) : 0, 8, dt);
        this.vel.set(ddx / dt, dy / dt, ddz / dt);
        this.pos.set(_w.x, sup.y, _w.z);
        this.setSupport(sup);
        this.walkedDist += moved;
      }
    } else {
      this.vel.set(0, 0, 0);
      // stay glued to a moving surface
      const sup = this.chooseSupport(this.pos.x, this.pos.z, this.pos.y);
      if (sup) {
        this.pos.y = sup.y;
        this.setSupport(sup);
      } else if (this.pos.y > 0.05) {
        // surface vanished (a rainbow evaporated): fall
        this.startFall(0);
      }
      this.slope = damp(this.slope, 0, 4, dt);
    }
    this.mode = this.mode === 'edge' ? 'edge' : this.speed > 0.05 ? 'walk' : 'stand';
    if (this.mode === 'stand') this.idleT += dt; else this.idleT = 0;

    // paint the path
    if (this.mode === 'walk' && this.speed > 0.05) {
      const s = this.support;
      const base = s.kind === 'ribbon' ? { chain: s.chain, idx: s.idx } : { y: s.y };
      this.rainbow.paint(this.pos.x, this.pos.z, base, this.heading);
    }

    // the ball
    const ball = this.critters && this.critters.ball;
    if (ball && this.speed > 0.25 && this.support.kind === 'ground') {
      const bx = this.pos.x + fx * 0.22, bz = this.pos.z + fz * 0.22;
      const d = Math.hypot(ball.pos.x - bx, ball.pos.z - bz);
      if (d < 0.26 && ball.pos.y < 0.3 && ball.canKick()) {
        const side = this.kid.lastStepSide === 1 ? -1 : 1;
        this.kid.doKick(side);
        ball.kick(fx, fz, 1.6 + this.speed * 1.1);
        this.audio && this.audio.ballKick(ball.pos, 1);
      }
    }
  }

  edgeUpdate(dt) {
    this.edgeT += dt;
    this.speed = damp(this.speed, 0, 12, dt);
    this.vel.set(0, 0, 0);
    // the target may have changed back to something reachable
    if (this.target && this.target.kind === 'ribbon' && this.target.chain === this.support.chain) {
      this.mode = 'stand';
      return;
    }
    if (!this.target) { this.mode = 'stand'; return; }
    if (this.edgeT > 0.42) {
      const fx = Math.sin(this.heading), fz = Math.cos(this.heading);
      this.vel.set(fx * 1.5, 2.3, fz * 1.5);
      this.audio && this.audio.jump();
      this.startFall(0);
      this.vel.set(fx * 1.5, 2.3, fz * 1.5);
    }
  }

  startFall(vy) {
    this.rainbow.endChain();
    this.mode = 'fall';
    this.fallStartY = this.pos.y;
    this.fallT = 0;
    this.bounces = 0;
    this.vel.y = vy || this.vel.y;
    this.support = { kind: 'air', chain: null, idx: 0, y: this.pos.y, id: -2 };
  }

  groundBelow(x, z, y) {
    const cands = this.surfacesAt(x, z);
    let best = -1e9;
    for (const c of cands) if (c.y <= y + 0.05 && c.y > best) best = c.y;
    return best;
  }

  airMove(dt) {
    this.fallT += dt;
    const prevY = this.pos.y;
    const bubble = this.mode === 'bubble';
    if (bubble) {
      // a soap film cushion: slow, drifting, wobbling descent
      // drifts down faster when still high up, gently near the ground
      const hAbove = Math.max(0, this.pos.y - Math.max(this.groundBelow(this.pos.x, this.pos.z, this.pos.y), 0));
      this.vel.y = damp(this.vel.y, -clamp(1.5 + hAbove * 0.14, 1.5, 6.5), 2.2, dt);
      this.vel.x = damp(this.vel.x, Math.sin(this.time * 0.5) * 0.35, 0.8, dt);
      this.vel.z = damp(this.vel.z, Math.cos(this.time * 0.43) * 0.3, 0.8, dt);
    } else {
      this.vel.y -= G * dt;
      this.vel.x = damp(this.vel.x, 0, 0.4, dt);
      this.vel.z = damp(this.vel.z, 0, 0.4, dt);
    }
    this.pos.addScaledVector(this.vel, dt);
    // keep out of walls
    _w.copy(this.pos);
    resolveObstacles(_w, 0.35, this.pos.y, 0);
    this.pos.x = _w.x; this.pos.z = _w.z;

    const below = this.groundBelow(this.pos.x, this.pos.z, prevY);
    const drop = this.fallStartY - Math.max(below, 0);
    if (!bubble && this.fallT > 0.28 && drop > 2.6 && this.pos.y - below > 1.2) {
      this.mode = 'bubble';
      this.bubble.appear(this.pos);
      this.audio && this.audio.bubbleForm();
    }
    // leaves when passing through a canopy
    this.leafT -= dt;
    for (const t of this.world.treeSpots) {
      const dx = this.pos.x - t.x, dz = this.pos.z - t.z, dy = (this.pos.y + 0.5) - t.cy;
      if (dx * dx + dz * dz + dy * dy * 1.4 < t.r * t.r) {
        if (this.leafT <= 0) {
          this.particles.leaves(this.pos.x, this.pos.y + 0.5, this.pos.z, 10);
          this.audio && this.audio.rustle(this.pos);
          this.leafT = 0.25;
        }
        this.vel.x *= 0.96; this.vel.z *= 0.96;
        if (!bubble) this.vel.y *= 0.97;
      }
    }

    // landing
    const off = bubble ? 0.08 : 0;
    if (this.pos.y - off <= below && this.vel.y < 0 && below > -1e8) {
      if (bubble && this.bounces < 2) {
        this.pos.y = below + off;
        this.bounces++;
        this.vel.y = this.bounces === 1 ? 2.1 : 1.1;
        this.bubble.squash(this.bounces === 1 ? 1 : 0.6);
        this.audio && this.audio.bubbleBounce(this.pos, this.bounces);
        this.particles.ripples.add(this.pos.x, below, this.pos.z, 2.2, 0.35, 0.6, this.time);
        return;
      }
      const impact = -this.vel.y;
      this.pos.y = below;
      this.vel.set(0, 0, 0);
      this.speed = 0;
      if (bubble) {
        this.bubble.pop(this.particles);
        this.audio && this.audio.bubblePop(this.pos, 1.5);
        this.kid.land(0.45);
      } else {
        this.kid.land(clamp(impact / 7, 0.2, 1));
        this.audio && this.audio.land(this.pos, impact);
        this.particles.splash(this.pos.x, below, this.pos.z, 10, 1.2);
      }
      this.particles.ripples.add(this.pos.x, below, this.pos.z, 1.6, 0.35, 0, this.time);
      this.mode = 'stand';
      const sup = this.chooseSupport(this.pos.x, this.pos.z, this.pos.y + 0.05) || { kind: 'ground', id: -1, y: 0 };
      this.support = { kind: sup.kind, chain: sup.chain || null, idx: sup.idx || 0, y: sup.y, id: sup.id };
      this.pos.y = sup.y;
      this.kid.resetFeet(this.pos, this.heading, this.supportY);
      if (!this.held) this.target = null;
    }
    // never leave the park while falling
    const r = Math.hypot(this.pos.x, this.pos.z);
    if (r > PARK_R) { this.pos.x *= PARK_R / r; this.pos.z *= PARK_R / r; }
  }

  footContact(L, p, yaw, side, speed) {
    const s = this.support;
    const onRibbon = s.kind === 'ribbon';
    const h = this.pos.y;
    if (this.audio) this.audio.footstep(p, onRibbon ? 'ribbon' : s.kind === 'roof' ? 'roof' : 'wet', speed, side, h);
    this.rainbow.footprints.add(p.x, p.y, p.z, yaw, side, this.time);
    if (!onRibbon) {
      this.particles.splash(p.x, p.y, p.z, 2 + Math.round(speed * 1.5), 0.5 + speed * 0.2);
      if (Math.random() < 0.25) this.particles.ripples.add(p.x, p.y, p.z, 0.4 + speed * 0.08, 0.2, 0, this.time);
    } else {
      spectral(Math.random(), _c);
      this.particles.splash(p.x, p.y, p.z, 2, 0.4, _c);
      if (Math.random() < 0.4) this.particles.ripples.add(p.x, p.y, p.z, 0.6, 0.4, 1, this.time);
    }
  }
}
