'use strict';
/* ============================================================
   plant.js — glowing star-plants with weight and elasticity
   'string' mode: a vine bridge under tension (sags under weight)
   'beam'   mode: a cantilever of angular springs (sways, bends)
   'static' mode: roots
   ============================================================ */

class Plant {
  constructor(o) {
    this.kind = o.kind;
    this.mode = o.mode || 'beam';
    this.seg = o.seg || 0.2;
    this.baseW = o.baseW ?? 0.2; this.tipW = o.tipW ?? 0.07;
    this.wScale = 1; this.wScaleT = 1; this.thickenTo = Infinity;
    this.build(o.ctrl);
    this.grown = 0; this.visible = false;
    this.leaves = []; this.tendrils = []; this.braids = []; this.blooms = [];
    this.glow = 0.3; this.glowT = 0.55; this.glowBoost = 0;
    this.hook = 0; this.hookSide = o.hookSide ?? 1;
    this.anchored = false; this.droopAmt = o.droop ?? 0;
    this.walkable = false;
    this.pulses = [];
    this.EI = o.EI ?? 40; this.omega = o.omega ?? 4.4; this.zeta = o.zeta ?? 0.14;
    this.tension = o.tension ?? 5; this.mu = o.mu ?? 0.3; this.kself = o.kself ?? 3;
    this.windK = o.wind ?? 1;
    this.soil = null;
    this.bark = !!o.bark;
    this.parent = o.parent || null;
    this.anchorT = 0;
    this.stepCount = 0;
    this.updateStiffness();
    this.updatePositions();
  }

  build(ctrl) {
    const pts = resample(catmull(ctrl, 12), this.seg);
    this.pts = pts; this.n = pts.length;
    this.L = pts[this.n - 1].s; this.ds = this.L / (this.n - 1);
    const n = this.n;
    this.d = new Float32Array(n); this.v = new Float32Array(n);
    this.fx = new Float32Array(n); this.fy = new Float32Array(n); this.fc = new Float32Array(n); this.fn = new Float32Array(n);
    this.k = new Float32Array(n); this.I = new Float32Array(n); this.c = new Float32Array(n);
    this.P = pts.map(p => ({ x: p.x, y: p.y, a: p.ang }));
  }

  sAtY(y) { for (const p of this.pts) if (p.y >= y) return p.s; return this.L; }
  sAtX(x) { for (const p of this.pts) if (p.x >= x) return p.s; return this.L; }

  restW(s) { return lerp(this.baseW, this.tipW, Math.pow(clamp01(s / this.L), 0.85)); }
  widthAt(s) {
    let w = this.restW(s);
    if (s < this.thickenTo) w *= this.wScale;
    else w *= lerp(this.wScale, 1, clamp01((s - this.thickenTo) / 1.5));
    const young = clamp01((this.grown - s) / 0.9);
    return w * lerp(0.45, 1, young);
  }

  updateStiffness() {
    const om = this.omega;
    for (let i = 0; i < this.n; i++) {
      const r = this.restW(this.pts[i].s) / this.baseW;
      const ws = this.pts[i].s < this.thickenTo ? this.wScale : 1;
      let k = (this.EI / this.ds) * r * r * ws * ws;
      if (i === 0) k *= 2.5;
      this.k[i] = k; this.I[i] = k / (om * om); this.c[i] = (2 * this.zeta * k) / om;
    }
  }

  physCount() { return clamp(Math.floor(this.grown / this.ds) + 2, 2, this.n); }

  /* ---------- loads ---------- */
  load(x, y, W, s) {
    if (!this.visible) return;
    const i = clamp(Math.round(s / this.ds), 1, this.n - 1);
    if (this.mode === 'string') {
      const f = s / this.ds, i0 = clamp(Math.floor(f), 1, this.n - 1), i1 = Math.min(this.n - 1, i0 + 1), t = f - Math.floor(f);
      this.fn[i0] += -W * this.pts[i0].ny * (1 - t);
      this.fn[i1] += -W * this.pts[i1].ny * t;
    } else if (this.mode === 'beam') {
      const qx = this.pts[i].x + (x - this.P[i].x), qy = this.pts[i].y + (y - this.P[i].y);
      this.fy[i] += -W;
      this.fc[i] += qx * -W;
    }
  }
  force(s, fx, fy) {
    const i = clamp(Math.round(s / this.ds), 1, this.n - 1);
    if (this.mode === 'beam') { this.fx[i] += fx; this.fy[i] += fy; this.fc[i] += this.pts[i].x * fy - this.pts[i].y * fx; }
    else if (this.mode === 'string') this.fn[i] += fx * this.pts[i].nx + fy * this.pts[i].ny;
  }
  impulse(s, fx, fy, atX) {
    if (!this.visible) return;
    const i = clamp(Math.round(s / this.ds), 1, this.n - 1);
    if (this.mode === 'string') {
      const m = this.mu * this.ds;
      const dv = (fx * this.pts[i].nx + fy * this.pts[i].ny) / m * 0.05;
      for (let j = Math.max(1, i - 2); j <= Math.min(this.n - 1, i + 2); j++) this.v[j] += dv * (1 - Math.abs(j - i) / 3);
    } else if (this.mode === 'beam') {
      const qx = atX ?? this.pts[i].x, qy = this.pts[i].y;
      for (let j = 0; j < i; j++) {
        const tau = (qx - this.pts[j].x) * fy - (qy - this.pts[j].y) * fx;
        this.v[j] += (tau / this.I[j]) * 0.06;
      }
    }
  }

  /* ---------- simulation ---------- */
  physics(h, t) {
    if (!this.visible || this.mode === 'static') return;
    const nv = this.physCount();
    if (this.mode === 'beam') {
      const wind = 0.00022 * this.windK * (Math.sin(t * 0.7) * 0.7 + Math.sin(t * 1.9 + 1) * 0.3);
      let Sx = 0, Sy = 0, C = 0;
      for (let i = nv - 1; i >= 0; i--) {
        const px = this.pts[i].x, py = this.pts[i].y;
        const tau = C - (px * Sy - py * Sx) + this.k[i] * wind;
        const a = (tau - this.k[i] * this.d[i] - this.c[i] * this.v[i]) / this.I[i];
        this.v[i] += a * h; this.d[i] += this.v[i] * h;
        Sx += this.fx[i]; Sy += this.fy[i]; C += this.fc[i];
      }
    } else {
      const T = this.tension / this.ds, m = this.mu * this.ds, ks = this.kself * this.ds, cd = 0.9 * this.ds;
      const last = nv - 1;
      const free = clamp01((this.grown - 0.8) / 2.5);
      for (let i = 1; i < nv; i++) {
        if (this.anchored && i === this.n - 1) { this.d[i] = 0; this.v[i] = 0; continue; }
        const dl = this.d[i - 1], dr = i < last ? this.d[i + 1] : this.d[i];
        let f = T * (dl + dr - 2 * this.d[i]) - ks * this.d[i] - cd * this.v[i] + this.fn[i];
        if (!this.anchored && this.droopAmt > 0) {
          const u = this.pts[i].s / Math.max(0.5, this.grown);
          f += (-this.droopAmt * free * u * u - this.d[i]) * 8 * this.ds;
        }
        f += Math.sin(t * 1.1 + i * 0.3) * 0.02 * this.ds * this.windK;
        this.v[i] += (f / m) * h;
      }
      for (let i = 1; i < nv; i++) this.d[i] += this.v[i] * h;
      this.d[0] = 0; this.v[0] = 0;
    }
  }

  clearForces() { this.fx.fill(0); this.fy.fill(0); this.fc.fill(0); this.fn.fill(0); }

  updatePositions() {
    const P = this.P, pts = this.pts, n = this.n;
    if (this.mode === 'beam') {
      let bx = pts[0].x, by = pts[0].y, Phi = 0;
      if (this.parent) {
        const pp = this.parent.plant, ps = this.parent.s();
        const q = pp.pointAt(ps);
        bx = q.x; by = q.y;
        Phi = pp.angleAt(ps) - pp.restAngleAt(ps);
      }
      P[0].x = bx; P[0].y = by;
      for (let i = 0; i < n - 1; i++) {
        Phi += this.d[i];
        const a = pts[i].seg + Phi;
        P[i + 1].x = P[i].x + Math.cos(a) * this.ds;
        P[i + 1].y = P[i].y + Math.sin(a) * this.ds;
        P[i].a = a;
      }
      P[n - 1].a = P[n - 2].a;
    } else {
      for (let i = 0; i < n; i++) { P[i].x = pts[i].x + pts[i].nx * this.d[i]; P[i].y = pts[i].y + pts[i].ny * this.d[i]; }
      for (let i = 0; i < n; i++) {
        const a = P[Math.max(0, i - 1)], b = P[Math.min(n - 1, i + 1)];
        P[i].a = Math.atan2(b.y - a.y, b.x - a.x);
      }
    }
  }

  pointAt(s) {
    const f = clamp(s / this.ds, 0, this.n - 1), i = Math.min(this.n - 2, Math.floor(f)), t = f - i;
    const a = this.P[i], b = this.P[i + 1];
    return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) };
  }
  angleAt(s) {
    const f = clamp(s / this.ds, 0, this.n - 1), i = Math.min(this.n - 2, Math.floor(f));
    return angLerp(this.P[i].a, this.P[i + 1].a, f - i);
  }
  restAngleAt(s) {
    const f = clamp(s / this.ds, 0, this.n - 1), i = Math.min(this.n - 2, Math.floor(f));
    return angLerp(this.pts[i].ang, this.pts[i + 1].ang, f - i);
  }
  tip() { return this.pointAt(this.grown); }

  /* walking surface of a vine bridge */
  surfaceAt(x) {
    const P = this.P;
    const nv = this.physCount();
    let i = 0;
    while (i < nv - 2 && P[i + 1].x < x) i++;
    const a = P[i], b = P[i + 1];
    const t = clamp01((x - a.x) / ((b.x - a.x) || 1e-6));
    const s = lerp(this.pts[i].s, this.pts[i + 1].s, t);
    const y = lerp(a.y, b.y, t) + this.widthAt(s) * 0.5;
    return { y: Math.max(y, terrainY(x)), s };
  }

  /* ---------- leaves ---------- */
  addLeaf(o) {
    const L = Object.assign({ s: 0, side: 1, len: 0.6, wid: 0.26, ang: 0.9, abs: null, platform: false, kind: 'side',
      follow: null, born: -1, unfold: 0, a: 0, av: 0, k: 12, c: 2.6, tau: 0, delay: 0.05, dur: 0.7, scaleNow: 0, lean: 0, curl: 0.12, glow: 1, manual: false }, o);
    this.leaves.push(L);
    return L;
  }
  leafS(L) { return L.follow != null ? Math.max(0.05, this.grown - L.follow) : L.s; }
  leafAngleRaw(L) {
    const s = this.leafS(L);
    const a = this.angleAt(s);
    const fin = L.abs != null ? L.abs + (a - this.restAngleAt(s)) : a + L.side * L.ang;
    const folded = a + L.side * 0.12;
    return angLerp(folded, fin + L.lean, Ease.outBack(L.unfold, 1.3));
  }
  leafAngle(L) { return this.leafAngleRaw(L) + L.a; }
  leafBase(L) {
    const s = this.leafS(L);
    const p = this.pointAt(s), a = this.leafAngleRaw(L);
    const w = this.widthAt(s) * 0.42;
    return { x: p.x + Math.cos(a) * w, y: p.y + Math.sin(a) * w };
  }
  leafPoint(L, off) {
    const b = this.leafBase(L), a = this.leafAngle(L);
    return { x: b.x + Math.cos(a) * off, y: b.y + Math.sin(a) * off };
  }
  steps() {
    const st = this.leaves.filter(L => L.platform && L.step && this.leafS(L) <= this.grown + 0.02);
    st.sort((a, b) => (a.crown ? 1 : 0) - (b.crown ? 1 : 0) || this.leafS(a) - this.leafS(b));
    return st;
  }

  /* ---------- per-frame ---------- */
  update(dt, t) {
    if (!this.visible) return;
    this.wScale = damp(this.wScale, this.wScaleT, 1.2, dt);
    if (Math.abs(this.wScale - this.wScaleT) > 0.002) this.updateStiffness();
    this.glow = damp(this.glow, this.glowT + this.glowBoost, 2, dt);
    this.glowBoost = damp(this.glowBoost, 0, 0.6, dt);
    this.hook = damp(this.hook, 0, this.hookDecay || 0, dt);
    for (const L of this.leaves) {
      if (L.born < 0 && !L.manual && this.grown >= L.s + 0.12) {
        L.born = t;
        if (this.onLeafBorn) this.onLeafBorn(L);
      }
      if (L.born >= 0 && !L.manual) L.unfold = clamp01((t - L.born - L.delay) / L.dur);
      L.scaleNow = lerp(0.18, 1, Ease.outCubic(L.unfold));
      L.av += (-L.k * L.a - L.c * L.av + L.tau) * dt;
      L.a += L.av * dt;
      L.a = clamp(L.a, -1.2, 1.2);
      L.tau = 0;
    }
    for (const T of this.tendrils) {
      if (T.born < 0 && this.grown >= T.s + 0.1) T.born = t;
      T.u = T.born < 0 ? 0 : clamp01((t - T.born) / (T.dur || 1.2));
    }
    for (const p of this.pulses) p.s += p.v * dt;
    this.pulses = this.pulses.filter(p => p.s > -0.5 && p.s < this.grown + 0.5 && (p.life === undefined || (p.life -= dt) > 0));
    for (const b of this.blooms) b.u = clamp01((t - b.t0) / 1.1);
  }

  registerLights() {
    if (!this.visible || this.grown < 0.05) return;
    const g = this.glow;
    const step = this.L > 20 ? 3 : 1.4;
    for (let s = 0.4; s < this.grown; s += step) {
      const p = this.pointAt(s);
      Lights.add(p.x, p.y + 0.1, 0.14 * g, 1.3, 'plant');
    }
    const tp = this.tip();
    Lights.add(tp.x, tp.y, 0.25 * g, 1.2, 'plant');
    for (const p of this.pulses) {
      const q = this.pointAt(clamp(p.s, 0, this.grown));
      Lights.add(q.x, q.y, 0.5 * p.amp, 1.6, 'plant');
    }
    if (this.soil && this.soil.glow > 0.05) {
      const q = this.soilPos();
      Lights.add(q.x, q.y, this.soil.glow, 2.2, 'warm');
    }
  }

  /* ---------- rendering ---------- */
  renderPoints() {
    const out = [];
    const nv = Math.min(this.n, Math.floor(this.grown / this.ds) + 1);
    for (let i = 0; i < nv; i++) out.push({ x: this.P[i].x, y: this.P[i].y, s: this.pts[i].s });
    const tp = this.tip();
    if (this.grown - (nv - 1) * this.ds > 0.01) out.push({ x: tp.x, y: tp.y, s: this.grown });
    if (out.length < 2) out.push({ x: tp.x, y: tp.y + 0.001, s: this.grown + 0.001 });
    // apical hook: the young shoot emerges bent over, then straightens
    if (this.hook > 0.01 && out.length >= 2) {
      const hs = Math.max(0, this.grown - 0.7);
      let k0 = out.findIndex(p => p.s >= hs);
      if (k0 < 1) k0 = 1;
      let ang = Math.atan2(out[k0].y - out[k0 - 1].y, out[k0].x - out[k0 - 1].x);
      for (let k = k0; k < out.length; k++) {
        const segL = Math.hypot(out[k].x - out[k - 1].x, out[k].y - out[k - 1].y) || this.ds;
        const u = (out[k].s - hs) / 0.7;
        ang = Math.atan2(out[k].y - out[k - 1].y, out[k].x - out[k - 1].x) - this.hookSide * this.hook * 2.6 * u;
        out[k].x = out[k - 1].x + Math.cos(ang) * segL;
        out[k].y = out[k - 1].y + Math.sin(ang) * segL;
      }
    }
    return out;
  }

  drawStem(ctx) {
    const R = this.renderPoints();
    const n = R.length;
    if (n < 2) return;
    const Lx = [], Ly = [], Rx = [], Ry = [];
    for (let i = 0; i < n; i++) {
      const a = R[Math.max(0, i - 1)], b = R[Math.min(n - 1, i + 1)];
      let nx = -(b.y - a.y), ny = b.x - a.x;
      const l = Math.hypot(nx, ny) || 1; nx /= l; ny /= l;
      const w = this.widthAt(R[i].s) * 0.5;
      Lx.push(R[i].x + nx * w); Ly.push(R[i].y + ny * w);
      Rx.push(R[i].x - nx * w); Ry.push(R[i].y - ny * w);
    }
    ctx.beginPath();
    ctx.moveTo(Lx[0], Ly[0]);
    for (let i = 1; i < n; i++) ctx.lineTo(Lx[i], Ly[i]);
    const tip = R[n - 1], prev = R[n - 2];
    const ta = Math.atan2(tip.y - prev.y, tip.x - prev.x);
    const tw = this.widthAt(tip.s) * 0.5;
    ctx.arc(tip.x, tip.y, tw, ta + PI / 2, ta - PI / 2, true);
    for (let i = n - 1; i >= 0; i--) ctx.lineTo(Rx[i], Ry[i]);
    ctx.closePath();
    const lit = clamp01(Lights.at((R[0].x + tip.x) / 2, (R[0].y + tip.y) / 2) * 0.35);
    if (this.bark) {
      ctx.fillStyle = css(mixc([96, 70, 48], [170, 128, 86], lit * 0.6));
      ctx.fill();
      ctx.strokeStyle = 'rgba(30,18,10,0.7)'; ctx.lineWidth = 0.03; ctx.stroke();
    } else {
      ctx.fillStyle = css(mixc(PAL.stemDark, PAL.stem, 0.75 + lit * 0.25));
      ctx.fill();
      ctx.strokeStyle = 'rgba(12,30,20,0.55)'; ctx.lineWidth = Math.max(0.012, this.baseW * 0.08); ctx.stroke();
      // lit ridge on the upper side
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const x = lerp(R[i].x, Lx[i], 0.45), y = lerp(R[i].y, Ly[i], 0.45);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = css(PAL.stemLit, 0.35 + lit * 0.3);
      ctx.lineWidth = Math.max(0.01, this.widthAt(this.grown * 0.3) * 0.18);
      ctx.lineCap = 'round';
      ctx.stroke();
    }
    // node rings
    ctx.strokeStyle = this.bark ? 'rgba(20,12,8,0.5)' : 'rgba(14,34,22,0.6)';
    ctx.lineWidth = 0.02;
    for (const L of this.leaves) {
      const s = this.leafS(L);
      if (s > this.grown || L.follow != null) continue;
      const p = this.pointAt(s), a = this.angleAt(s) + PI / 2, w = this.widthAt(s) * 0.5;
      ctx.beginPath(); ctx.moveTo(p.x + Math.cos(a) * w, p.y + Math.sin(a) * w); ctx.lineTo(p.x - Math.cos(a) * w, p.y - Math.sin(a) * w); ctx.stroke();
    }
    this._R = R;
  }

  drawGlowCore(ctx) {
    const R = this._R;
    if (!R || R.length < 2) return;
    const g = this.glow;
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath();
    for (let i = 0; i < R.length; i++) { if (i === 0) ctx.moveTo(R[i].x, R[i].y); else ctx.lineTo(R[i].x, R[i].y); }
    if (this.bark) {
      ctx.strokeStyle = 'rgba(255,200,110,' + (0.55 * g).toFixed(3) + ')';
      ctx.lineWidth = Math.max(0.015, this.baseW * 0.16);
    } else {
      ctx.strokeStyle = 'rgba(200,255,160,' + (0.42 * g).toFixed(3) + ')';
      ctx.lineWidth = Math.max(0.012, this.baseW * 0.28);
    }
    ctx.stroke();
    // bright young tip
    const tp = R[R.length - 1];
    drawGlow(ctx, this.bark ? 'warm' : 'plant', tp.x, tp.y, 0.35 + this.baseW, 0.55 * g);
    for (const p of this.pulses) {
      if (p.s < 0 || p.s > this.grown) continue;
      const q = this.pointAt(p.s);
      drawGlow(ctx, p.col || 'plant', q.x, q.y, (p.w || 0.9) * Math.max(1, this.wScale * 0.8), p.amp);
    }
  }

  drawLeaf(ctx, L, front) {
    if (L.born < 0 && L.unfold <= 0 && !L.alwaysShow) return;
    const s = this.leafS(L);
    if (s > this.grown + 0.01) return;
    const b = this.leafBase(L), a = this.leafAngle(L);
    const len = L.len * L.scaleNow, wid = L.wid * lerp(0.25, 1, Ease.outCubic(L.unfold));
    const cx = b.x + Math.cos(a) * len * 0.5, cy = b.y + Math.sin(a) * len * 0.5;
    const lit = clamp01(Lights.at(cx, cy) * 0.45);
    ctx.save();
    ctx.translate(b.x, b.y);
    ctx.rotate(a);
    if (Math.cos(a) < 0) ctx.scale(1, -1);
    const dark = mixc(PAL.leafDark, [70, 110, 70], lit * 0.6), mid = mixc(PAL.leaf, [160, 205, 118], lit * 0.7);
    if (L.kind === 'pad') {
      // a broad leaf seen a little from above: you can stand on it
      ctx.fillStyle = css(dark);
      ctx.beginPath(); ctx.ellipse(len * 0.5, -wid * 0.05, len * 0.5, wid * 0.5, 0, 0, TAU); ctx.fill();
      ctx.fillStyle = css(mid);
      ctx.beginPath(); ctx.ellipse(len * 0.5, wid * 0.1, len * 0.48, wid * 0.36, 0, 0, TAU); ctx.fill();
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = 'rgba(220,255,170,' + (0.32 * this.glow * L.glow).toFixed(3) + ')';
      ctx.lineWidth = 0.014;
      ctx.beginPath();
      for (let k = -2; k <= 2; k++) {
        ctx.moveTo(len * 0.06, wid * 0.1);
        ctx.quadraticCurveTo(len * 0.45, wid * 0.1 + k * wid * 0.08, len * (0.8 - Math.abs(k) * 0.1), wid * 0.1 + k * wid * 0.13);
      }
      ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = 'rgba(12,34,20,0.45)'; ctx.lineWidth = 0.015;
      ctx.beginPath(); ctx.ellipse(len * 0.5, -wid * 0.05, len * 0.5, wid * 0.5, 0, 0, TAU); ctx.stroke();
    } else {
      const curl = L.curl * len;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(len * 0.22, wid * 0.95, len * 0.72, wid * 0.8, len, curl);
      ctx.bezierCurveTo(len * 0.72, -wid * 0.45, len * 0.25, -wid * 0.6, 0, 0);
      ctx.fillStyle = css(front ? mid : dark);
      ctx.fill();
      ctx.strokeStyle = 'rgba(12,34,20,0.4)'; ctx.lineWidth = 0.012 + len * 0.01; ctx.stroke();
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = 'rgba(220,255,170,' + (0.35 * this.glow * L.glow).toFixed(3) + ')';
      ctx.lineWidth = 0.012 + len * 0.012;
      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.quadraticCurveTo(len * 0.5, wid * 0.22, len * 0.95, curl);
      for (let k = 1; k <= 3; k++) {
        const u = k / 4.2;
        ctx.moveTo(len * u, wid * 0.14 * (1 - u) + curl * u * u);
        ctx.lineTo(len * (u + 0.14), wid * (0.55 - u * 0.3));
      }
      ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
    }
    ctx.restore();
  }

  drawTendrils(ctx) {
    ctx.lineCap = 'round';
    for (const T of this.tendrils) {
      if (T.u <= 0) continue;
      const base = T.anchor ? this.tip() : this.pointAt(T.s);
      const a0 = T.anchor ? T.ang : this.angleAt(T.s) + T.side * T.ang;
      const len = T.len * Ease.outCubic(T.u);
      const curl = T.side * T.curl * (0.25 + 0.75 * Ease.outBack(T.u)) * (1 + 0.05 * Math.sin(G.time * 2 + T.s));
      ctx.beginPath(); ctx.moveTo(base.x, base.y);
      let ang = a0, px = base.x, py = base.y;
      const n = 16, st = len / n;
      for (let i = 0; i < n; i++) {
        ang += curl * Math.pow(i / n, 1.6) * 0.7;
        px += Math.cos(ang) * st; py += Math.sin(ang) * st;
        ctx.lineTo(px, py);
      }
      ctx.strokeStyle = css(mixc(PAL.stemDark, PAL.stem, 0.8)); ctx.lineWidth = T.w || 0.03; ctx.stroke();
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = 'rgba(200,255,160,' + (0.3 * this.glow).toFixed(3) + ')'; ctx.lineWidth = (T.w || 0.03) * 0.4; ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
    }
  }

  drawBlooms(ctx, add) {
    for (const b of this.blooms) {
      if (b.u <= 0) continue;
      const p = this.pointAt(Math.min(b.s, this.grown));
      const a = this.angleAt(b.s) + b.side * 0.9;
      const stalk = 0.28 * Ease.outCubic(b.u * 1.5);
      const fx = p.x + Math.cos(a) * stalk, fy = p.y + Math.sin(a) * stalk;
      if (add) { drawGlow(ctx, 'rose', fx, fy, 0.5 * b.size, 0.5 * Ease.outCubic(b.u)); continue; }
      ctx.strokeStyle = css(PAL.stem); ctx.lineWidth = 0.025;
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(fx, fy); ctx.stroke();
      const op = Ease.outBack(clamp01((b.u - 0.3) / 0.7), 2);
      for (let k = 0; k < 5; k++) {
        const pa = (k / 5) * TAU + G.time * 0.1 + b.s;
        ctx.fillStyle = css(PAL.petal, 0.95);
        ctx.beginPath();
        ctx.ellipse(fx + Math.cos(pa) * 0.07 * op * b.size, fy + Math.sin(pa) * 0.07 * op * b.size, 0.08 * op * b.size + 0.01, 0.045 * op * b.size + 0.01, pa, 0, TAU);
        ctx.fill();
      }
      ctx.fillStyle = '#ffd36b'; ctx.beginPath(); ctx.arc(fx, fy, 0.035 * b.size, 0, TAU); ctx.fill();
    }
  }

  soilPos() {
    const tp = this.tip(), a = this.angleAt(this.grown);
    const off = this.soil.r * 0.55;
    return { x: tp.x + Math.cos(a) * off, y: tp.y + Math.sin(a) * off };
  }
  drawSoil(ctx) {
    if (!this.soil || !this.soil.show) return;
    const q = this.soilPos(), r = this.soil.r * this.soil.scale;
    ctx.fillStyle = '#3e2c21';
    ctx.beginPath();
    ctx.ellipse(q.x, q.y, r * 1.05, r * 0.72, 0, 0, TAU);
    ctx.ellipse(q.x - r * 0.45, q.y + r * 0.2, r * 0.45, r * 0.4, 0, 0, TAU);
    ctx.ellipse(q.x + r * 0.4, q.y + r * 0.28, r * 0.42, r * 0.36, 0, 0, TAU);
    ctx.fill();
    ctx.fillStyle = 'rgba(110,80,58,0.5)';
    ctx.beginPath(); ctx.ellipse(q.x - r * 0.2, q.y + r * 0.42, r * 0.5, r * 0.18, 0, 0, TAU); ctx.fill();
    ctx.fillStyle = '#2a1d16';
    for (let k = 0; k < 4; k++) { ctx.beginPath(); ctx.arc(q.x - r * 0.6 + k * r * 0.4, q.y - r * 0.35 + (k % 2) * 0.03, 0.025, 0, TAU); ctx.fill(); }
    if (this.soil.glow > 0.02) {
      ctx.globalCompositeOperation = 'lighter';
      drawGlow(ctx, 'warm', q.x, q.y, r * 2.2, this.soil.glow * 0.7);
      ctx.globalCompositeOperation = 'source-over';
    }
  }

  drawBraids(ctx, front) {
    if (!this.braids.length) return;
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (const b of this.braids) {
      if (b.grown <= 0.05) continue;
      const step = 0.18;
      let drawing = false;
      ctx.beginPath();
      for (let s = 0; s <= b.grown; s += step) {
        const ph = s * b.freq + b.phase;
        const depth = Math.cos(ph);
        const isFront = depth >= 0;
        const p = this.pointAt(s), a = this.angleAt(s) + PI / 2;
        const rad = this.widthAt(s) * 0.5 * 0.9;
        const x = p.x + Math.cos(a) * Math.sin(ph) * rad, y = p.y + Math.sin(a) * Math.sin(ph) * rad;
        if (isFront === front) {
          if (!drawing) { ctx.moveTo(x, y); drawing = true; } else ctx.lineTo(x, y);
        } else drawing = false;
      }
      const lit = front ? 1 : 0.6;
      ctx.strokeStyle = css(mixc(PAL.stemDark, PAL.stem, lit)); ctx.lineWidth = b.w; ctx.stroke();
      if (front) {
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = 'rgba(200,255,160,' + (0.3 * this.glow).toFixed(3) + ')'; ctx.lineWidth = b.w * 0.3; ctx.stroke();
        ctx.globalCompositeOperation = 'source-over';
      }
      // bright growing tip of the braid
      if (b.grown < b.target - 0.1 && front) {
        const p = this.pointAt(b.grown);
        ctx.globalCompositeOperation = 'lighter';
        drawGlow(ctx, 'plant', p.x, p.y, 0.9, 0.8);
        ctx.globalCompositeOperation = 'source-over';
      }
    }
  }

  draw(ctx) {
    if (!this.visible || this.grown <= 0.001) return;
    this.drawBraids(ctx, false);
    for (const L of this.leaves) if (L.side < 0 && !L.front) this.drawLeaf(ctx, L, false);
    this.drawTendrils(ctx);
    this.drawStem(ctx);
    this.drawBraids(ctx, true);
    this.drawBlooms(ctx, false);
    for (const L of this.leaves) if (L.side >= 0 || L.front) this.drawLeaf(ctx, L, true);
    this.drawSoil(ctx);
  }
  drawAdd(ctx) {
    if (!this.visible || this.grown <= 0.001) return;
    this.drawGlowCore(ctx);
    this.drawBlooms(ctx, true);
  }
}

/* ============================================================
   The great flower at the very top
   ============================================================ */
class BigFlower {
  constructor(plant) {
    this.plant = plant;
    this.bud = 0; this.sepal = 0; this.petals = [0, 0, 0, 0, 0, 0]; this.stamen = 0; this.core = 0; this.shine = 0;
    this.size = 2.2;
  }
  center() {
    const tp = this.plant.tip(), a = this.plant.angleAt(this.plant.grown);
    const off = this.size * 0.35 * this.bud;
    return { x: tp.x + Math.cos(a) * off, y: tp.y + Math.sin(a) * off, a };
  }
  draw(ctx) {
    if (this.bud <= 0) return;
    const c = this.center();
    const S = this.size;
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.rotate(c.a - PI / 2);
    // petals (back row first)
    const np = this.petals.length;
    for (let k = 0; k < np; k++) {
      const u = this.petals[k];
      const baseA = PI / 2 + ((k - (np - 1) / 2) / (np - 1)) * 2.6;
      const closed = PI / 2 + ((k - (np - 1) / 2) / (np - 1)) * 0.35;
      const ang = lerp(closed, baseA + (k % 2 ? 0.18 : -0.1) * Math.sign(baseA - PI / 2), Ease.outBack(u, 1.6));
      const len = S * lerp(0.42, 1.0, Ease.outCubic(u)) * this.bud;
      const wid = S * lerp(0.16, 0.36, Ease.outCubic(u)) * this.bud;
      ctx.save(); ctx.rotate(ang);
      const g = ctx.createLinearGradient(0, 0, len, 0);
      g.addColorStop(0, 'rgb(255,205,170)'); g.addColorStop(0.6, 'rgb(255,238,220)'); g.addColorStop(1, 'rgb(255,250,240)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(len * 0.3, wid, len * 0.85, wid * 0.9, len, 0);
      ctx.bezierCurveTo(len * 0.85, -wid * 0.9, len * 0.3, -wid, 0, 0);
      ctx.fill();
      ctx.strokeStyle = 'rgba(220,140,110,0.5)'; ctx.lineWidth = 0.03; ctx.stroke();
      ctx.restore();
    }
    // sepals
    for (let k = -1; k <= 1; k += 2) {
      const ang = lerp(PI / 2 + k * 0.25, PI / 2 + k * 1.9, Ease.outBack(this.sepal, 1.4));
      const len = S * 0.55 * this.bud, wid = S * 0.2 * this.bud;
      ctx.save(); ctx.rotate(ang);
      ctx.fillStyle = css(mixc(PAL.leafDark, PAL.leaf, 0.7));
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.bezierCurveTo(len * 0.3, wid, len * 0.8, wid * 0.6, len, 0); ctx.bezierCurveTo(len * 0.8, -wid * 0.6, len * 0.3, -wid, 0, 0); ctx.fill();
      ctx.restore();
    }
    // closed bud body
    const closedA = 1 - this.sepal;
    if (closedA > 0.01) {
      ctx.globalAlpha = closedA;
      ctx.fillStyle = css(mixc(PAL.leafDark, PAL.leaf, 0.8));
      ctx.beginPath(); ctx.ellipse(0, S * 0.3 * this.bud, S * 0.22 * this.bud, S * 0.36 * this.bud, 0, 0, TAU); ctx.fill();
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = 'rgba(255,220,170,0.6)'; ctx.lineWidth = 0.04;
      ctx.beginPath(); ctx.moveTo(0, S * 0.02); ctx.lineTo(0, S * 0.62 * this.bud); ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
    }
    // stamens
    if (this.stamen > 0) {
      ctx.strokeStyle = 'rgba(255,220,150,0.9)'; ctx.lineWidth = 0.03;
      for (let k = 0; k < 9; k++) {
        const ang = PI / 2 + (k - 4) * 0.2;
        const len = S * 0.45 * Ease.outBack(this.stamen) * (0.8 + (k % 3) * 0.12);
        ctx.beginPath(); ctx.moveTo(0, S * 0.05); ctx.quadraticCurveTo(Math.cos(ang) * len * 0.5, S * 0.05 + Math.sin(ang) * len * 0.6, Math.cos(ang) * len, S * 0.05 + Math.sin(ang) * len);
        ctx.stroke();
        ctx.fillStyle = '#ffe58a';
        ctx.beginPath(); ctx.arc(Math.cos(ang) * len, S * 0.05 + Math.sin(ang) * len, 0.05, 0, TAU); ctx.fill();
      }
    }
    ctx.restore();
  }
  drawAdd(ctx) {
    if (this.bud <= 0) return;
    const c = this.center();
    const k = this.core;
    if (k > 0) {
      const S = this.size;
      const cx = c.x + Math.cos(c.a) * S * 0.12, cy = c.y + Math.sin(c.a) * S * 0.12;
      drawGlow(ctx, 'rose', cx, cy, S * (0.5 + k * 0.6), 0.55 * k);
      drawGlow(ctx, 'warm', cx, cy, S * (0.2 + k * 0.25), 0.8 * k);
    }
    if (this.shine > 0) {
      drawGlow(ctx, 'warm', c.x, c.y, this.size * (2 + this.shine * 10), 0.55 * this.shine);
      drawGlow(ctx, 'rose', c.x, c.y, this.size * (1 + this.shine * 4), 0.6 * this.shine);
    }
  }
}
