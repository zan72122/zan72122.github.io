'use strict';
/* ============================================================
   game.js — route, stage scripts, input intent, hints, camera
   ============================================================ */

/* ---------- walkable route: ground, vine bridges, leaf steps ---------- */
const Route = {
  links: [],
  build() {
    this.links = [
      { kind: 'ground', x0: -3.3, x1: 2.3 },
      { kind: 'bridge', plant: 0, x0: 2.3, x1: 6.05 },
      { kind: 'ground', x0: 6.05, x1: 10.9 },
      { kind: 'bridge', plant: 1, x0: 10.9, x1: 15.35 },
      { kind: 'ground', x0: 15.35, x1: 18.13 },
      { kind: 'steps', plant: 2, entry: { x: 18.13 }, exit: { x: 20.45 }, climb: false },
      { kind: 'ground', x0: 20.45, x1: 24.38 },
      { kind: 'steps', plant: 3, entry: { x: 24.38 }, exit: null, climb: true },
    ];
  },
  enabled(i) {
    if (i < 0 || i >= this.links.length) return false;
    const L = this.links[i];
    if (L.kind === 'ground') return true;
    const p = G.plants[L.plant];
    return !!(p && p.walkable);
  },
  pos(i, t) {
    const L = this.links[i];
    if (L.kind === 'ground') return { x: t, y: terrainY(t) };
    if (L.kind === 'bridge') {
      const p = G.plants[L.plant], s = p.surfaceAt(t);
      return { x: t, y: s.y, plant: p, s: s.s };
    }
    const k = Math.round(t);
    const sp = this.stepPoint(i, k), la = this.stepLeaf(i, k);
    return { x: sp.x, y: sp.y, plant: la ? la.plant : null, leaf: la ? la.leaf : null };
  },
  stepList(i) { return G.plants[this.links[i].plant].steps(); },
  stepCount(i) { const L = this.links[i]; return 1 + this.stepList(i).length + (L.exit ? 1 : 0); },
  stepPoint(i, k) {
    const L = this.links[i], st = this.stepList(i);
    if (k <= 0) return { x: L.entry.x, y: terrainY(L.entry.x) };
    if (k <= st.length) {
      const lf = st[k - 1], p = G.plants[L.plant];
      const q = p.leafPoint(lf, lf.stand || 0.45);
      return { x: q.x, y: q.y + 0.035 };
    }
    return { x: L.exit.x, y: terrainY(L.exit.x) };
  },
  stepLeaf(i, k) {
    const st = this.stepList(i);
    if (k >= 1 && k <= st.length) return { plant: G.plants[this.links[i].plant], leaf: st[k - 1] };
    return null;
  },
  stepReady(i, k) {
    const la = this.stepLeaf(i, k);
    if (!la) return true;
    return la.leaf.unfold > 0.9 && la.plant.leafS(la.leaf) <= la.plant.grown + 0.01;
  },
  stemX(i, y) { const p = G.plants[this.links[i].plant]; return p.pointAt(Math.min(p.grown, p.sAtY(y))).x; },
  reachable(a, b) {
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) if (!this.enabled(i)) return false;
    return true;
  },
  /* any reachable ground/bridge position, even across leaf steps */
  locateAny(x, y, from) {
    let best = null, bd = 1e9;
    for (let i = 0; i < this.links.length; i++) {
      const L = this.links[i];
      if (L.kind === 'steps' || x < L.x0 - 0.4 || x > L.x1 + 0.4 || !this.reachable(from, i)) continue;
      const t = clamp(x, L.x0, L.x1);
      const d = Math.abs(this.pos(i, t).y - y) + Math.abs(t - x) * 2;
      if (d < bd) { bd = d; best = { link: i, t }; }
    }
    return best || this.locate(x, from);
  },
  locate(x, from) {
    if (this.links[from].kind === 'steps') return { link: from, t: Math.round(G.gardener.t) };
    let lo = from, hi = from;
    while (lo - 1 >= 0 && this.links[lo - 1].kind !== 'steps' && this.enabled(lo - 1)) lo--;
    while (hi + 1 < this.links.length && this.links[hi + 1].kind !== 'steps' && this.enabled(hi + 1)) hi++;
    const cx = clamp(x, this.links[lo].x0, this.links[hi].x1);
    for (let i = lo; i <= hi; i++) {
      const L = this.links[i];
      if (cx >= L.x0 - 1e-6 && cx <= L.x1 + 1e-6) return { link: i, t: clamp(cx, L.x0, L.x1) };
    }
    return { link: hi, t: this.links[hi].x1 };
  },
};

const STAR_LAND = [{ x: 0.55, vx: 3.2 }, { x: 7.0, vx: 2.6 }, { x: 16.3, vx: 2.6 }, { x: 21.7, vx: 2.6 }];
const CROSS_GOALS = [{ link: 2, t: 7.1 }, { link: 4, t: 15.6 }, { link: 6, t: 21.3 }];

/* ============================================================ */
const G = {
  time: 0, speed: 1,
  phase: 'boot', cinema: null,
  plants: [], roots: [], giant: null, flower: null,
  stars: [], gardener: null,
  script: null,
  idle: 0, hint: 0, moteT: 0, chimeT: 2, nudged: false,
  primary: null,
  woken: false, pendingFetch: false, dragPlant: false, crownPlanted: false,
  fade: 0, replay: null, replayTapped: false,
  wave: null, round: 0,
  popCount: 0,

  init() {
    Route.build();
    this.gardener = new Gardener();
    this.reset(false);
  },

  reset(awake) {
    this.time = this.time || 0;
    FX.reset();
    Bumps.length = 0;
    for (const sp of SPOTS) { sp.used = false; sp.healed = 0; sp.hole = 0; sp.planted = false; sp.star = null; sp.act = 0; }
    for (const c of World.clouds) { c.push = 0; c.pv = 0; }
    this.stars = []; this.roots = []; this.giant = null; this.flower = null;
    this.buildPlants();
    this.phase = 'boot'; this.cinema = null; this.primary = null;
    this.woken = false; this.pendingFetch = false; this.dragPlant = false; this.crownPlanted = false;
    this.replay = null; this.replayTapped = false; this.wave = null;
    this.idle = 0; this.hint = 0; this.nudged = false;
    this.fadeTarget = 0; this.bigStar = null; this.growing = null; this.braidTop = 0;
    const g = this.gardener;
    g.reset();
    if (awake) {
      g.mode = 'route'; g.link = 0; g.t = -1.9; g.p.sit.snap(0); g.p.sleep.snap(0);
    }
    this.script = this.main(awake);
    this.frameCam(true);
  },

  /* ---------- plants ---------- */
  buildPlants() {
    const P = [];
    // 0: a flat vine bridge over the first creek
    {
      const x = SPOTS[0].x, y = terrainRaw(x);
      const p = new Plant({ kind: 'bridge', mode: 'string', ctrl: [{ x, y: y - 0.1 }, { x: x + 0.25, y: 0.17 }, { x: 3.2, y: 0.3 }, { x: 4.2, y: 0.34 }, { x: 5.1, y: 0.28 }, { x: 5.85, y: 0.13 }, { x: 6.2, y: -0.02 }],
        baseW: 0.24, tipW: 0.15, droop: 0.6, tension: 5, hookSide: 1 });
      this.dressVine(p, 0);
      P.push(p);
    }
    // 1: a rising, arched bridge to the higher bank
    {
      const x = SPOTS[1].x, y = terrainRaw(x);
      const p = new Plant({ kind: 'arch', mode: 'string', ctrl: [{ x, y: y - 0.1 }, { x: x + 0.25, y: 0.22 }, { x: 12.1, y: 0.88 }, { x: 13.2, y: 1.5 }, { x: 14.3, y: 1.88 }, { x: 15.05, y: 1.74 }, { x: 15.6, y: 1.4 }],
        baseW: 0.27, tipW: 0.16, droop: 0.9, tension: 6, hookSide: 1 });
      this.dressVine(p, 1);
      P.push(p);
    }
    // 2: a vine that climbs the rock wall, its leaves become steps
    {
      const x = SPOTS[2].x, y = terrainRaw(x);
      const p = new Plant({ kind: 'stairs', mode: 'beam', ctrl: [{ x, y: y - 0.1 }, { x: 18.93, y: 1.98 }, { x: 19.12, y: 2.74 }, { x: 19.28, y: 3.5 }, { x: 19.55, y: 4.3 }, { x: 20.05, y: 4.74 }, { x: 20.6, y: 4.63 }, { x: 21.05, y: 4.44 }],
        baseW: 0.25, tipW: 0.13, EI: 160, omega: 5, hookSide: -1 });
      for (const [yy, i] of [[2.12, 0], [2.92, 1], [3.72, 2]]) {
        p.addLeaf({ s: p.sAtY(yy), side: 1, abs: PI - 0.07, len: 0.84, wid: 0.34, kind: 'pad', platform: true, step: true, stand: 0.45, dur: 0.55 });
      }
      for (const yy of [1.7, 2.5, 3.3, 4.1]) p.addLeaf({ s: p.sAtY(yy), side: -1, ang: 0.9, len: 0.38, wid: 0.16 });
      p.addLeaf({ s: p.L - 1.1, side: 1, ang: 0.8, len: 0.5, wid: 0.2 });
      p.addLeaf({ s: p.L - 0.6, side: -1, ang: 1.1, len: 0.45, wid: 0.18, front: true });
      p.addLeaf({ s: 0.28, side: 1, ang: 1.2, len: 0.22, wid: 0.12 });
      p.addLeaf({ s: 0.28, side: -1, ang: 1.2, len: 0.22, wid: 0.12 });
      for (const yy of [2.3, 3.1, 3.9]) p.tendrils.push({ s: p.sAtY(yy), side: -1, ang: 0.6, len: 0.35, curl: 1.4, born: -1, u: 0 });
      for (let k = 0; k < 3; k++) p.tendrils.push({ anchor: true, s: p.L, side: k % 2 ? 1 : -1, ang: -PI / 2 + (k - 1) * 0.5, len: 0.4, curl: 1.8, born: -1, u: 0, manual: true });
      p.blooms.push({ s: 0.45, side: 1, t0: 1e9, u: 0, size: 1 });
      P.push(p);
    }
    // 3: the tower — grows straight up, later extends, then becomes the root of the giant
    {
      const x = SPOTS[3].x, y = terrainRaw(x);
      const p = new Plant({ kind: 'tower', mode: 'beam', ctrl: [{ x, y: y - 0.12 }, { x: 25.08, y: 5.6 }, { x: 25.22, y: 7.4 }, { x: 24.96, y: 9.6 }, { x: 25.06, y: 11.8 }, { x: 25.0, y: 13.4 }, { x: 25.26, y: 15.2 }, { x: 25.05, y: 16.9 }, { x: 25.14, y: 18.4 }],
        baseW: 0.3, tipW: 0.14, EI: 130, omega: 3.2, zeta: 0.12, hookSide: 1, seg: 0.2 });
      p.stage1 = p.sAtY(13.4);
      const steps = [[5.5, 1], [6.8, -1], [8.1, 1], [9.4, -1], [10.7, 1], [12.0, -1], [14.6, 1], [15.9, -1], [17.2, 1]];
      for (const [yy, side] of steps) {
        const ext = yy > 13.5;
        p.addLeaf({ s: p.sAtY(yy), side, abs: side > 0 ? PI - 0.08 : 0.08, len: ext ? 0.8 : 0.95, wid: 0.34, kind: 'pad', platform: true, step: !ext, stand: 0.47, dur: 0.6 });
        p.addLeaf({ s: p.sAtY(yy + 0.5), side: -side, ang: 0.85, len: 0.4, wid: 0.17 });
      }
      p.addLeaf({ s: 0.3, side: 1, ang: 1.2, len: 0.24, wid: 0.13 });
      p.addLeaf({ s: 0.3, side: -1, ang: 1.2, len: 0.24, wid: 0.13 });
      for (const yy of [6.1, 8.8, 11.3, 15.3]) p.tendrils.push({ s: p.sAtY(yy), side: yy % 2 > 1 ? 1 : -1, ang: 0.7, len: 0.4, curl: 1.5, born: -1, u: 0 });
      this.addCrown(p);
      p.soil = { r: 0.34, show: false, scale: 1, glow: 0, star: null };
      p.blooms.push({ s: 0.5, side: -1, t0: 1e9, u: 0, size: 1.1 });
      P.push(p);
    }
    for (const p of P) p.onLeafBorn = L => { const b = p.leafBase(L); Sound.leaf(Cam.panOf(b.x)); FX.sparks(b.x, b.y, 3, 0.8, { col: 'plant' }); };
    this.plants = P;
  },

  dressVine(p, idx) {
    // leaves along a vine bridge: upright leaves lean forward (the way to go), others hang below
    let side = 1;
    for (let s = 0.75; s < p.L - 0.35; s += 0.42) {
      if (side > 0) p.addLeaf({ s, side: 1, ang: 0.62, len: 0.42 + Math.random() * 0.12, wid: 0.19, curl: 0.18 });
      else p.addLeaf({ s, side: -1, ang: 1.45, len: 0.5 + Math.random() * 0.15, wid: 0.2, curl: -0.1 });
      side = -side;
    }
    p.addLeaf({ s: 0.3, side: 1, ang: 1.15, len: 0.22, wid: 0.12 });
    p.addLeaf({ s: 0.3, side: -1, ang: 1.15, len: 0.22, wid: 0.12, front: true });
    for (let s = 1.2; s < p.L - 0.8; s += 1.1) p.tendrils.push({ s, side: -1, ang: 0.9, len: 0.3, curl: 1.6, born: -1, u: 0 });
    for (let k = 0; k < 3; k++) p.tendrils.push({ anchor: true, s: p.L, side: k % 2 ? 1 : -1, ang: -PI / 2 + (k - 1) * 0.55, len: 0.42, curl: 1.8, born: -1, u: 0, manual: true });
    p.blooms.push({ s: 0.42, side: 1, t0: 1e9, u: 0, size: 1 });
  },

  addCrown(p) {
    const mk = o => p.addLeaf(Object.assign({ follow: 0, manual: true, alwaysShow: true, crown: true, unfold: 0 }, o));
    p.crown = {
      left: mk({ side: 1, abs: PI - 0.05, len: 1.02, wid: 0.36, kind: 'pad', platform: true, step: true, stand: 0.55 }),
      right: mk({ side: -1, abs: 0.3, len: 1.12, wid: 0.38, kind: 'pad', platform: true }),
      ul: mk({ side: 1, ang: 0.5, len: 0.7, wid: 0.26 }),
      ur: mk({ side: -1, ang: 0.55, len: 0.75, wid: 0.27 }),
    };
  },

  allPlants() {
    const a = this.plants.slice();
    for (const r of this.roots) a.push(r);
    if (this.giant) a.push(this.giant);
    return a;
  },

  /* ---------- stars ---------- */
  spawnGroundStar(tx, vx) {
    const gy = terrainRaw(tx);
    const top = Math.max(Cam.top + 1.2, gy + 7.5);
    const R = 0.3;
    // simulate the fall to aim the landing
    let x = 0, y = top, vxx = vx, vy = -1.5, t = 0;
    const h = 1 / 120;
    while (y - R * 0.8 > gy && t < 6) { vy -= 9 * h; const f = Math.exp(-1.2 * h); vxx *= f; vy *= f; x += vxx * h; y += vy * h; t += h; }
    const s = new Star({ x: tx - x, y: top, vx, vy: -1.5, R, drag: 1.2 });
    this.stars.push(s);
    Sound.fall(Cam.panOf(tx), t);
    return s;
  },
  spawnSkyStar(x, crownY, o = {}) {
    const y = Math.max(crownY + 6.5, Cam.top + 0.8);
    const s = new Star(Object.assign({ x: x + rnd(-0.05, 0.05), y, vx: rnd(-0.15, 0.15), vy: -2, R: 0.3, useLeaves: true, drag: 1.5 }, o));
    this.stars.push(s);
    if (!o.small) Sound.fall(Cam.panOf(x), 1.4);
    return s;
  },
  onStarImpact(star) {
    const g = this.gardener;
    if (!star.small && Math.abs(star.x - g.x) < 6 && this.phase !== 'climax') {
      if (Math.abs(star.x - g.x) < 3) g.startle();
      g.lookAt = { x: star.x, y: star.y };
    }
    for (const p of this.plants) if (p.visible) { const tp = p.tip(); if (Math.abs(tp.x - star.x) < 4) p.impulse(p.grown * 0.7, 0, -1.5); }
  },
  onLeafDrink(star) {
    // small stars burst on the leaves and the plant soaks up their light
    const tower = this.plants[3];
    tower.glowBoost = Math.min(1.2, tower.glowBoost + 0.18);
    const s = star.restOn ? tower.leafS(star.restOn.leaf) : tower.grown;
    tower.pulses.push({ s: tower.grown, v: -5, amp: 0.5, w: 0.7 });
    this.popCount++;
  },

  /* ============================================================
     stage scripts
     ============================================================ */
  *main(awake) {
    const g = this.gardener;
    if (!awake) {
      this.phase = 'sleep';
      yield* until(() => this.woken);
      g.command(g.aWake(), false);
      yield* wait(0.7);
    } else {
      this.phase = 'intro';
      yield* wait(0.6);
    }
    for (let i = 0; i < 4; i++) yield* this.groundStage(i);
    yield* this.climbStage();
    yield* this.catchStage();
    yield* this.showerStage();
    yield* this.climax();
    yield* this.ending();
  },

  *groundStage(i) {
    const g = this.gardener, spot = SPOTS[i];
    this.phase = 'fall';
    const star = this.spawnGroundStar(STAR_LAND[i].x, STAR_LAND[i].vx);
    this.primary = { kind: 'star', star };
    yield* until(() => star.state === 'rest');
    this.phase = 'fetch';
    this.idle = Math.min(this.idle, 1.5);
    if (this.pendingFetch) { this.pendingFetch = false; g.command(g.aFetch(star)); }
    yield* until(() => star.state === 'carried' || star.state === 'lifted');
    this.phase = 'carry';
    this.primary = { kind: 'spot', spot, i };
    yield* until(() => star.state === 'carried');
    if (this.dragPlant) { this.dragPlant = false; g.command(g.aPlant(spot)); }
    yield* until(() => spot.planted);
    this.phase = 'grow'; this.primary = null;
    yield* this.growPlant(i);
    this.idle = 0;
  },

  crossed(i) {
    const g = this.gardener;
    if (i === 0) return g.link >= 2 || (g.link === 1 && g.t > 3.4);
    if (i === 1) return g.link >= 4 || (g.link === 3 && g.t > 12.6);
    return g.link >= 6 || (g.link === 5 && Math.round(g.t) >= 2);
  },

  *growPlant(i) {
    const spot = SPOTS[i], plant = this.plants[i], star = spot.star, g = this.gardener;
    const first = i === 0;
    const sx = spot.x, sy = terrainY(sx);
    const pan = Cam.panOf(sx);
    this.growing = plant;
    const q = first ? 1 : 0.62;
    yield* wait(0.35);
    // 1. the star sinks into the soft soil
    star.state = 'sinking'; star.clipY = sy - 0.02;
    Sound.sink(pan);
    const y0 = star.y;
    yield* tween(0.95 * q, u => {
      star.y = lerp(y0, sy - star.R * 1.3, Ease.inCubic(u));
      star.sink = u; spot.hole = Math.max(0, 1 - u * 1.4);
      if (Math.random() < 0.2) FX.crumbs(sx + rnd(-0.2, 0.2), sy, 1, 0.5);
    });
    star.hidden = true; star.state = 'buried';
    FX.ring(sx, sy, 0.8);
    // 2. light spreads through the soil
    const kind = plant.kind;
    const vdir = kind === 'tower' ? -PI / 2 : kind === 'stairs' ? 0.1 : -0.1;
    const angles = kind === 'tower' ? [-PI / 2, -PI / 2 - 0.9, -PI / 2 + 0.9, PI + 0.2, -0.2] : [vdir, vdir - 0.6, PI + 0.4, vdir - 1.2];
    FX.vein(sx, sy - 0.32, vdir, kind === 'tower' ? 2.2 : 1.8, { branches: angles.length, angles, speed: 2.4, life: 4.2, fadeAt: 2.2 });
    Sound.hum(pan, 1.5);
    yield* wait(0.95 * q);
    // 3. the ground heaves, cracks
    const bump = addBump(sx, 0.34);
    bump.s.target = kind === 'tower' ? 0.3 : 0.22;
    Sound.rumble(pan, 1.0, kind === 'tower' ? 1.4 : 1);
    Cam.shake(kind === 'tower' ? 0.07 : 0.045);
    if (Math.abs(g.x - sx) < 2.5) g.startle();
    yield* wait(0.42 * q);
    FX.crack(sx, 0.7, 5, 3);
    Sound.crack(pan);
    FX.crumbs(sx, sy + 0.15, 8, 1.6);
    yield* wait(0.32 * q);
    // 4. the sprout breaks through, bent over, then straightens
    plant.visible = true; plant.hook = 1; plant.hookDecay = 0;
    if (plant.soil) plant.soil.show = true;
    bump.s.target = 0.05;
    Sound.sprout(pan);
    FX.crumbs(sx, sy + 0.1, 14, 2.6); FX.dust(sx, sy, 8, 1.2);
    yield* tween(0.45, u => { plant.grown = lerp(0.02, 0.72, Ease.outCubic(u)); });
    plant.hookDecay = 3.2;
    Sound.leaf(pan);
    yield* wait(0.4 * q);
    // 5. the stem grows, leaves open behind the tip
    const target = kind === 'tower' ? plant.stage1 : plant.L;
    const vmax = kind === 'tower' ? 4.6 : kind === 'stairs' ? 3.4 : first ? 2.8 : 4.0;
    yield* this.extend(plant, target, vmax);
    // 6. finishing: tendrils grab, crown opens
    if (kind === 'tower') {
      yield* this.openCrown(plant, 0.9);
    } else {
      for (const T of plant.tendrils) if (T.anchor) { T.born = this.time; T.dur = 0.6; }
      yield* wait(first ? 0.45 : 0.3);
      plant.anchored = true;
      const tp = plant.tip();
      Sound.grab(Cam.panOf(tp.x));
      FX.dust(tp.x, terrainY(tp.x), 6, 1); FX.sparks(tp.x, tp.y, 8, 1.2, { col: 'plant' });
      Cam.shake(0.02);
    }
    plant.glowBoost = 0.7;
    plant.pulses.push({ s: 0, v: 5, amp: 0.8, w: 0.9 });
    for (const b of plant.blooms) b.t0 = this.time + 0.2;
    spot.used = true;
    Sound.cheer(pan);
    g.cheer();
    plant.walkable = true;
    this.growing = null;
    spot.healStart = this.time;
    yield* wait(0.3);
  },

  *extend(plant, target, vmax) {
    const start = plant.grown;
    let lastNote = plant.grown, noteI = 0;
    while (plant.grown < target - 1e-3) {
      const dt = yield;
      const u = (plant.grown - start) / Math.max(0.01, target - start);
      const v = vmax * (0.3 + 0.7 * Math.sin(clamp(u, 0.04, 0.96) * PI));
      plant.grown = Math.min(target, plant.grown + v * (dt || 0));
      if (plant.grown - lastNote > 0.6) { lastNote = plant.grown; Sound.grow(noteI++ % 12, Cam.panOf(plant.tip().x)); }
      this.gardener.lookAt = plant.tip();
      if (plant.soil && plant.soil.show && Math.random() < 0.08) { const q = plant.soilPos(); FX.crumbs(q.x, q.y, 1, 0.4); }
    }
  },

  *openCrown(plant, dur) {
    const c = plant.crown;
    const leaves = [c.left, c.right, c.ul, c.ur];
    Sound.grab(Cam.panOf(plant.tip().x));
    yield* tween(dur, u => { leaves.forEach((L, k) => { L.unfold = clamp01(u * 1.3 - k * 0.1); }); });
    for (const L of leaves) L.unfold = 1;
    const tp = plant.tip();
    FX.sparks(tp.x, tp.y, 12, 1.5, { col: 'plant' });
  },

  *climbStage() {
    const g = this.gardener;
    this.phase = 'climb'; this.primary = { kind: 'climb' };
    this.idle = 0;
    yield* until(() => g.link === 7 && Math.round(g.t) === Route.stepCount(7) - 1 && !g.hop && g.mode === 'route');
  },

  *catchStage() {
    const g = this.gardener, tower = this.plants[3];
    this.phase = 'catch';
    let misses = 0, star = null;
    yield* wait(0.8);
    while (true) {
      const crown = tower.tip();
      const off = [0.72, 0.55, 0.4, 0.3][Math.min(misses, 3)];
      star = this.spawnSkyStar(crown.x + off, crown.y);
      this.primary = { kind: 'catch', star };
      this.idle = Math.min(this.idle, 2);
      yield* until(() => ['carried', 'lifted', 'rest'].includes(star.state) || star.y < crown.y - 2.2 || g.carry);
      if (star.state === 'rest' && star.restOn && !g.carry) {
        this.primary = { kind: 'leafstar', star };
        yield* until(() => star.state === 'carried' || star.state === 'lifted' || !star.restOn || g.carry);
      }
      if (g.carry) { star = g.carry; break; }
      if (star.state === 'carried' || star.state === 'lifted') break;
      star.missed = true;
      misses++;
      yield* wait(0.4);
    }
    yield* until(() => star.state === 'carried' && !g.busy);
    this.phase = 'carryCrown'; this.primary = { kind: 'crown' };
    this.idle = 0;
    yield* until(() => this.crownPlanted);
    this.crownPlanted = false;
    this.phase = 'grow'; this.primary = null;
    yield* this.growExtension();
  },

  *sinkIntoCrown(plant, star, dur) {
    const q = plant.soilPos();
    star.state = 'sinking';
    star.clipY = q.y + plant.soil.r * 0.35;
    Sound.sink(Cam.panOf(q.x));
    const y0 = star.y;
    yield* tween(dur, u => {
      const qq = plant.soilPos();
      star.x = qq.x; star.clipY = qq.y + plant.soil.r * 0.35;
      star.y = lerp(y0, qq.y - star.R * 0.4, Ease.inCubic(u));
      plant.soil.glow = u * (star.big ? 1.6 : 1);
    });
    star.hidden = true; star.state = 'buried';
  },

  *growExtension() {
    const tower = this.plants[3], g = this.gardener, star = tower.soil.star;
    this.growing = tower;
    yield* wait(0.3);
    yield* this.sinkIntoCrown(tower, star, 0.8);
    // the light runs down the stem to the roots, then the stem below the crown stretches
    tower.pulses.push({ s: tower.grown, v: -9, amp: 0.9, w: 1.0, col: 'warm' });
    Sound.hum(0, 1.2);
    yield* wait(0.7);
    tower.pulses.push({ s: 0, v: 10, amp: 0.8, w: 1.0 });
    yield* wait(0.5);
    Sound.creak(0); Sound.rumble(0, 0.5, 0.5);
    const q = tower.soilPos();
    FX.crumbs(q.x, q.y, 8, 1.4);
    g.startle();
    // the crown with the gardener on it rides upward while new leaves open below
    yield* this.extend(tower, tower.L, 2.4);
    const c = tower.crown;
    for (const L of [c.left, c.right]) L.av -= 2.5 * Math.cos(tower.leafAngle(L));
    tower.impulse(tower.grown, 0, -6, tower.tip().x);
    Sound.grab(0);
    tower.soil.glow = 0.25;
    tower.glowBoost = 0.6;
    Sound.cheer(0);
    g.cheer();
    this.growing = null;
  },

  *showerStage() {
    const g = this.gardener, tower = this.plants[3];
    this.phase = 'shower';
    this.primary = { kind: 'shower' };
    this.idle = 0;
    yield* wait(0.6);
    for (let k = 0; k < 9; k++) {
      const crown = tower.tip();
      const s = this.spawnSkyStar(crown.x + rnd(-2.6, 2.8), crown.y, { small: true, R: 0.15, drag: 1.1 });
      s.av = rnd(-5, 5);
      if (k === 0) Sound.fall(0, 1.2);
      yield* wait(rnd(0.16, 0.34));
    }
    yield* wait(0.9);
    let big = null;
    while (true) {
      const crown = tower.tip();
      big = this.spawnSkyStar(crown.x + 0.62, crown.y, { big: true, R: 0.46, drag: 3.6 });
      big.av = 0.6;
      this.bigStar = big;
      this.primary = { kind: 'catch', star: big };
      this.idle = Math.min(this.idle, 2);
      yield* until(() => ['carried', 'lifted', 'rest'].includes(big.state) || big.y < crown.y - 2 || (g.carry && g.carry.big));
      if (big.state === 'rest' && big.restOn && !g.carry) {
        this.primary = { kind: 'leafstar', star: big };
        yield* until(() => big.state === 'carried' || big.state === 'lifted' || !big.restOn || (g.carry && g.carry.big));
      }
      if (g.carry && g.carry.big) { big = g.carry; break; }
      if (big.state === 'carried' || big.state === 'lifted') break;
      big.missed = true;
      yield* wait(0.5);
    }
    yield* until(() => big.state === 'carried' && !g.busy);
    this.phase = 'carryCrown'; this.primary = { kind: 'crown' };
    this.idle = 0;
    yield* until(() => this.crownPlanted);
    this.crownPlanted = false;
  },

  /* ---------------- the climax ---------------- */
  giantPath(x0, y0) {
    const P = [[0, 0], [0.15, 4], [1.6, 14], [-1.2, 27], [1.3, 40], [0.1, 52], [0.5, 58.5]];
    const Lp = [[0, 0], [0.4, 4], [2.4, 13], [6, 24], [10.5, 35], [14.5, 45], [16.5, 50]];
    const k = clamp01((View.L.giantLean - 0.12) / 0.5);
    return P.map((p, i) => ({ x: x0 + lerp(p[0], Lp[i][0], k), y: y0 - 0.15 + lerp(p[1], Lp[i][1], k) }));
  },

  *climax() {
    const g = this.gardener, tower = this.plants[3], star = tower.soil.star;
    this.phase = 'climax'; this.primary = null;
    this.cinema = 'sink';
    Sound.pad([62, 66, 69, 74], 4, 0.8);
    yield* wait(0.3);
    yield* this.sinkIntoCrown(tower, star, 1.1);
    // light runs all the way down into the earth
    this.cinema = 'down';
    const pulse = { s: tower.grown, v: -7.5, amp: 1.3, w: 1.5, col: 'rose' };
    tower.pulses.push(pulse);
    for (let k = 1; k < 4; k++) tower.pulses.push({ s: tower.grown + k * 0.8, v: -7.5, amp: 0.6, w: 1, col: 'rose' });
    Sound.hum(0, 2.4);
    g.lookAt = null;
    while (pulse.s > 0.2) { yield; g.lookAt = tower.pointAt(Math.max(0, pulse.s)); }
    // underground light across the plateau and down the cliff; the ground heaves
    this.cinema = 'roots';
    const by = terrainY(25);
    FX.vein(25, by - 0.3, 0, 5, { branches: 6, angles: [0, -0.4, PI, PI + 0.4, -PI / 2, -0.9], speed: 4.5, life: 6.5, fadeAt: 4, col: 'warm' });
    const bump = addBump(25, 0.9); bump.s.target = 0.35;
    Sound.rumble(0, 2.4, 1.6); Cam.shake(0.1);
    Sound.pad([59, 62, 66, 71], 4, 0.9);
    yield* wait(0.7);
    FX.crack(25, 1.4, 7, 4); Sound.crack(0);
    // roots burst out and grip the plateau and the cliff
    this.makeRoots();
    for (let k = 0; k < this.roots.length; k++) {
      const r = this.roots[k];
      r.visible = true; r.startT = this.time + k * 0.22;
    }
    const rootsDone = () => this.roots.every(r => r.grown >= r.L - 0.01);
    while (!rootsDone()) {
      const dt = yield;
      for (const r of this.roots) if (this.time > r.startT) {
        const was = r.grown;
        r.grown = Math.min(r.L, r.grown + (dt || 0) * 5.5);
        if (Math.floor(was / 1.2) !== Math.floor(r.grown / 1.2)) { const p = r.tip(); FX.crumbs(p.x, p.y, 4, 1.4); FX.dust(p.x, p.y, 2, 0.6); }
      }
      Cam.shake(0.03);
    }
    bump.s.target = 0.12;
    Sound.grab(0);
    yield* wait(0.3);
    // three vines braid up the tower, thickening it
    this.cinema = 'braid';
    Sound.pad([55, 59, 62, 67], 4, 1);
    tower.thickenTo = tower.grown + 1;
    tower.wScaleT = 2.4;
    tower.braids = [0, 1, 2].map(k => ({ phase: k * 2.09, freq: 1.25, grown: 0, target: tower.grown, w: 0.13, delay: k * 0.35 }));
    const t0 = this.time;
    let noteI = 0, lastS = 0;
    while (tower.braids.some(b => b.grown < b.target - 0.01)) {
      const dt = yield;
      for (const b of tower.braids) if (this.time - t0 > b.delay) b.grown = Math.min(b.target, b.grown + (dt || 0) * 8.5);
      const top = tower.braids[0].grown;
      if (top - lastS > 1.3) { lastS = top; Sound.grow(noteI++ % 10, 0); }
      this.braidTop = Math.max(...tower.braids.map(b => b.grown));
      g.lookAt = tower.pointAt(this.braidTop);
    }
    tower.glowBoost = 0.8;
    // the crown bursts: the giant shoot rises and carries the gardener
    this.cinema = 'ascent';
    Sound.pad([57, 61, 64, 69], 4, 1.1);
    const tp = tower.tip();
    const giant = new Plant({ kind: 'giant', mode: 'beam', ctrl: this.giantPath(tp.x, tp.y), baseW: 0.62, tipW: 0.26, EI: 2500, omega: 1.8, zeta: 0.14, seg: 0.35, wind: 1.6,
      parent: { plant: tower, s: () => tower.grown } });
    giant.glowT = 0.7;
    // leaves along the giant: big, alternating, growing larger lower down
    let side = 1;
    for (let s = 3; s < giant.L - 3; s += 4.2) {
      const big = lerp(3.4, 1.8, s / giant.L);
      giant.addLeaf({ s, side, ang: 0.95, len: big, wid: big * 0.42, curl: 0.2, dur: 0.9 });
      giant.addLeaf({ s: s + 1.3, side: -side, ang: 1.1, len: big * 0.6, wid: big * 0.26, curl: 0.15, dur: 0.8 });
      giant.tendrils.push({ s: s + 2.4, side: -side, ang: 0.7, len: 1.1, curl: 1.3, born: -1, u: 0, w: 0.06, dur: 1.4 });
      side = -side;
    }
    const rider = giant.addLeaf({ follow: 0.75, side: 1, abs: PI - 0.12, len: 1.15, wid: 0.4, kind: 'pad', platform: true, manual: true, unfold: 0, alwaysShow: true, stand: 0.55 });
    giant.onLeafBorn = L => { const b = giant.leafBase(L); Sound.whoosh(Cam.panOf(b.x), 0.5, 0.8); Sound.leaf(Cam.panOf(b.x)); FX.sparks(b.x, b.y, 6, 1.5, { col: 'plant' }); };
    this.giant = giant;
    giant.visible = true;
    // crumbling crown soil
    tower.soil.show = false;
    const q = tower.soilPos();
    FX.crumbs(q.x, q.y, 22, 2.4);
    Sound.crack(0); Sound.rumble(0, 0.8, 1);
    // the shoot emerges and the rider leaf opens under the gardener's feet
    yield* tween(0.7, u => { giant.grown = lerp(0.05, 1.3, Ease.outCubic(u)); rider.unfold = u; });
    // the gardener hops onto the rider leaf
    g.mode = 'air';
    g.air = { x0: g.x, y0: g.y, u: 0, dur: 0.4, h: 0.4, to: () => { const p = giant.leafPoint(rider, 0.55); return { x: p.x, y: p.y + 0.03 }; } };
    Sound.jump(0);
    yield* until(() => g.air.u >= 1);
    g.mode = 'ride'; g.ride = { plant: giant, leaf: rider, off: 0.55 }; g.air = null;
    g.link = -1;
    g.dir = 1;
    // grow, grow, grow
    const chords = [[62, 66, 69, 74], [59, 62, 66, 71], [55, 59, 62, 67], [57, 61, 64, 69], [62, 66, 69, 76], [64, 67, 71, 76]];
    let chordI = 0, lastChord = giant.grown, lastArp = giant.grown;
    const total = giant.L - 0.2;
    this.ascentStart = giant.grown;
    while (giant.grown < total) {
      const dt = yield;
      const u = (giant.grown - 1.3) / (total - 1.3);
      const v = lerp(2, 6.2, sstep(0, 0.12, u)) * lerp(1, 0.35, sstep(0.82, 1, u));
      giant.grown = Math.min(total, giant.grown + v * (dt || 0));
      giant.wScaleT = 1 + u * 0.3;
      tower.wScaleT = 2.4 + u * 0.8;
      if (giant.grown - lastChord > 9 && chordI < chords.length) { lastChord = giant.grown; Sound.pad(chords[chordI++ % chords.length], 3.2, 1); }
      if (giant.grown - lastArp > 2.2) { lastArp = giant.grown; Sound.grow((chordI * 2 + Math.floor(giant.grown)) % 12, 0); }
      // speed motes stream past the camera
      if (Math.random() < 0.5) FX.add({ x: Cam.x + rnd(-0.5, 0.5) * Cam.vw, y: Cam.top + 0.5, vx: rnd(-0.2, 0.2), vy: 0, life: 3, size: rnd(0.04, 0.09) * Math.max(1, 60 / Cam.ppu), type: 'spark', g: 0, drag: 0 });
      this.pushClouds(giant);
      g.lookAt = { x: giant.tip().x, y: giant.tip().y + 3 };
    }
    // a bud swells at the very top
    this.cinema = 'bud';
    const fl = new BigFlower(giant);
    this.flower = fl;
    Sound.pad([62, 66, 69, 74, 78], 5, 1.1);
    yield* tween(1.3, u => { fl.bud = Ease.outBack(u, 1.2); });
    yield* wait(0.3);
    Sound.whoosh(0, 0.6);
    yield* tween(0.7, u => { fl.sepal = u; });
    for (let k = 0; k < fl.petals.length; k++) {
      const idx = [2, 3, 1, 4, 0, 5][k];
      const tS = this.time;
      Sound.chime([4, 5, 7, 8, 9, 11][k], { gain: 0.08, pan: (idx - 2.5) / 3 });
      FX.petals(fl.center().x, fl.center().y, 3, 1.4);
      yield* tween(0.34, u => { fl.petals[idx] = u; });
    }
    yield* tween(0.8, u => { fl.stamen = u; fl.core = u; });
    // the gardener climbs into the flower and sits
    this.cinema = 'bloom';
    const seat = () => { const c = fl.center(); return { x: c.x - fl.size * 0.42, y: c.y + fl.size * 0.05 }; };
    g.mode = 'air'; g.ride = null;
    g.air = { x0: g.x, y0: g.y, u: 0, dur: 0.55, h: 0.8, to: seat };
    Sound.jump(0);
    yield* until(() => g.air.u >= 1);
    g.mode = 'seat'; g.seatFn = seat; g.air = null;
    g.p.sit.snap(1);
    Sound.cheer(0);
    yield* wait(0.6);
    // the flower becomes a star
    this.cinema = 'final';
    Sound.finale();
    const sp = Cam.toScreen(fl.center().x, fl.center().y);
    this.wave = { x: sp.x, y: sp.y, r: 0 };
    yield* tween(2.2, u => { fl.shine = Math.sin(Math.min(1, u * 1.4) * PI / 2); });
    this.phase = 'ending';
  },

  makeRoots() {
    const mk = (pts, w) => {
      const r = new Plant({ kind: 'root', mode: 'static', ctrl: pts, baseW: w, tipW: 0.04, bark: true, seg: 0.25 });
      r.glowT = 0.9; r.grown = 0;
      this.roots.push(r);
    };
    const surf = (x, dy = 0.08) => ({ x, y: terrainRaw(x) + dy });
    // along the plateau to the right, then down the cliff face
    mk([surf(25.2), surf(26), surf(27), surf(28), { x: 28.55, y: 3.9 }, { x: 28.95, y: 2.2 }, { x: 29.25, y: 0.2 }, { x: 29.45, y: -1.8 }, { x: 29.6, y: -3.4 }], 0.34);
    // to the left across the plateau and over the wall
    mk([surf(24.8), surf(23.6), surf(22.3), surf(21.0), surf(20.2), { x: 19.9, y: 3.6 }, { x: 19.72, y: 2.6 }, { x: 19.58, y: 1.7 }], 0.3);
    mk([surf(25.3, 0.01), { x: 26.2, y: 4.38 }, { x: 27.4, y: 4.35 }, { x: 28.3, y: 4.3 }, { x: 28.7, y: 3.2 }, { x: 28.85, y: 1.4 }], 0.2);
    mk([surf(24.7, 0.01), surf(24.0, 0.01), surf(23.0, 0.01), surf(22.0, 0.01)], 0.16);
    mk([surf(25.1, 0.01), surf(25.7, 0.01), surf(26.5, 0.02), surf(27.4, 0.02)], 0.14);
  },

  pushClouds(giant) {
    const tp = giant.tip();
    for (const c of World.clouds) {
      if (Math.abs(tp.y - c.y) < 3.5) {
        const sx = giant.pointAt(giant.sAtY(c.y)).x;
        const dx = c.x + c.push - sx;
        if (Math.abs(dx) < 7) c.pv += Math.sign(dx || 1) * (7 - Math.abs(dx)) * 0.05;
      }
    }
  },

  *ending() {
    const g = this.gardener, fl = this.flower;
    this.cinema = 'final';
    // seeds of light drift down from the new star toward the garden
    let seedT = 0;
    const t0 = this.time;
    while (this.time - t0 < 4.2) {
      const dt = yield;
      if (this.time - t0 > 2.2) this.cinema = 'far';
      seedT -= dt || 0;
      if (seedT < 0) {
        seedT = 0.12;
        const c = fl.center();
        FX.add({ x: c.x + rnd(-1, 1), y: c.y + rnd(-0.5, 0.5), vx: rnd(-2.5, 2.5), vy: rnd(-0.5, 1.2), life: rnd(5, 8), size: rnd(0.12, 0.22), type: 'spark', g: 0.9, drag: 0.35 });
      }
    }
    // one seed floats down to the middle of the screen and waits
    const c = fl.center();
    this.replay = { x: c.x, y: c.y, t: 0, ready: false };
    this.phase = 'end';
    this.primary = { kind: 'replay' };
    this.idle = 0;
    while (!this.replayTapped) {
      const dt = yield;
      const r = this.replay;
      r.t += dt || 0;
      // it drifts back down toward the little garden: the next beginning
      const target = { x: 17, y: 9 };
      r.x = damp(r.x, target.x + Math.sin(r.t * 1.3) * 1.2, 0.9, dt || 0);
      r.y = damp(r.y, target.y + Math.sin(r.t * 2) * 0.8, 0.9, dt || 0);
      if (r.t > 1.2) r.ready = true;
    }
    // dive back down to the garden
    Sound.whoosh(0, 1.2, 1.4);
    this.fadeTarget = 1;
    yield* until(() => this.fade > 0.98);
    this.round++;
    this.reset(true);   // replaces this script; the fade clears by itself
  },

  /* ============================================================
     input → intent
     ============================================================ */
  tap(sx, sy) {
    Sound.init();
    this.idle = 0; this.nudged = false;
    const w = Cam.toWorld(sx, sy);
    const g = this.gardener;
    Sound.tap(Cam.panOf(w.x));
    this.tapFx(w.x, w.y);
    switch (this.phase) {
      case 'sleep': this.woken = true; break;
      case 'fall': {
        const st = this.primary && this.primary.star;
        this.pendingFetch = true;
        if (st && !g.busy && g.mode === 'route') { const lx = STAR_LAND[this.stageIndex()].x - 0.7; g.command(g.aGoal(Route.locateAny(lx, terrainRaw(lx), g.link))); }
        break;
      }
      case 'fetch': {
        const st = this.primary.star;
        if (this.wantsPrimary(w, st.x, st.y)) g.command(g.aFetch(st));
        else this.freeWalk(w.x);
        break;
      }
      case 'carry': {
        const sp = this.primary.spot;
        if (g.busy || !g.carry) { this.dragPlant = true; break; }
        if (this.wantsPrimary(w, sp.x, terrainY(sp.x))) g.command(g.aPlant(sp));
        else this.freeWalk(w.x);
        break;
      }
      case 'grow': if (!g.busy) g.cheer(); break;
      case 'cross': {
        const goal = CROSS_GOALS[this.primary.i];
        const gx = goal.link === 6 ? 21.3 : goal.t;
        if (this.wantsPrimary(w, gx, g.y)) g.command(g.aGoal(Object.assign({}, goal)));
        else this.freeWalk(w.x);
        break;
      }
      case 'climb': this.climbIntent(w.y, 2); break;
      case 'catch': case 'shower': {
        const p = this.primary;
        if (this.phase === 'shower' && this.popNear(w, !p.star)) break;
        const st = p.star;
        if (!st || g.busy || g.mode !== 'route' || g.carry) break;
        if (st.state === 'falling') g.command(g.aCatch(st), false);
        else if (st.state === 'rest') g.command(g.aTakeFromLeaf(st), false);
        break;
      }
      case 'carryCrown': if (!g.busy && g.carry) g.command(g.aPlantCrown(this.plants[3]), false); break;
      case 'climax': this.bloomNear(w); break;
      case 'end': if (this.replay && this.replay.ready) { this.replayTapped = true; Sound.catch(0); } break;
    }
  },

  stageIndex() {
    for (let i = 0; i < 4; i++) if (!SPOTS[i].used && !SPOTS[i].planted) return i;
    return 3;
  },

  /* a tap roughly in the direction of the goal, near it, or on the gardener
     himself counts as "do the obvious thing" */
  wantsPrimary(w, tx, ty) {
    const g = this.gardener;
    const nearGoal = Math.hypot(w.x - tx, w.y - ty) < 3.2;
    const nearMe = Math.hypot(w.x - g.x, w.y - (g.y + 0.6)) < 1.4;
    const sameSide = Math.sign(tx - g.x) === Math.sign(w.x - g.x) || Math.abs(tx - g.x) < 0.8;
    return nearGoal || nearMe || sameSide;
  },

  freeWalk(x) {
    const g = this.gardener;
    if (g.busy || g.mode !== 'route') return;
    if (Route.links[g.link].kind === 'steps') return;
    g.command(g.aWalkTo(x));
  },

  climbIntent(wy, maxSteps) {
    const g = this.gardener;
    if (g.busy || g.mode !== 'route') return;
    const last = Route.stepCount(7) - 1;
    if (g.link < 7) { g.command(g.aGoal({ link: 7, t: 1 })); return; }
    const cur = g.goal && g.goal.link === 7 ? g.goal.t : Math.round(g.t);
    let k = cur + 1;
    for (let j = cur + 1; j <= last; j++) if (Route.stepPoint(7, j).y <= wy + 0.8) k = j;
    k = clamp(k, cur + 1, cur + maxSteps);
    while (k > cur && !Route.stepReady(7, k)) k--;
    k = Math.min(k, last);
    if (k > Math.round(g.t)) g.command(g.aGoal({ link: 7, t: k }));
  },

  popNear(w, cheer) {
    let best = null, bd = 1.8;
    for (const s of this.stars) {
      if (!s.small || s.state !== 'falling') continue;
      const d = Math.hypot(s.x - w.x, s.y - w.y);
      if (d < bd) { bd = d; best = s; }
    }
    if (best) {
      best.state = 'gone';
      FX.sparks(best.x, best.y, 16, 2, { col: 'warm' });
      FX.ring(best.x, best.y, 0.6);
      Sound.pop(this.popCount++, Cam.panOf(best.x));
      return true;
    }
    if (cheer && !this.gardener.busy) this.gardener.cheer();
    return false;
  },

  bloomNear(w) {
    const gi = this.giant;
    if (!gi || gi.grown < 3) return;
    let best = null, bd = 4;
    for (let s = 1; s < gi.grown - 1; s += 0.5) {
      const p = gi.pointAt(s);
      const d = Math.hypot(p.x - w.x, p.y - w.y);
      if (d < bd) { bd = d; best = s; }
    }
    if (best == null) { best = Math.max(1, gi.grown - 2 - Math.random() * 6); }
    gi.blooms.push({ s: best, side: Math.random() < 0.5 ? -1 : 1, t0: this.time, u: 0, size: 2.5 + Math.random() });
    Sound.chime(5 + (this.popCount++ % 7), { gain: 0.07 });
    const p = gi.pointAt(best);
    FX.petals(p.x, p.y, 4, 1.2);
  },

  tapFx(x, y) {
    // the garden answers every touch a little
    FX.sparks(x, y, 4, 0.6, { col: 'plant', life: 0.6 });
    for (const p of this.plants) {
      if (!p.visible) continue;
      for (const L of p.leaves) {
        if (L.unfold < 0.5) continue;
        const b = p.leafBase(L);
        if (Math.hypot(b.x - x, b.y - y) < 0.9) L.av += rnd(-2, 2);
      }
    }
  },

  drag(sx0, sy0, sx, sy, dtMs) {
    this.idle = 0;
    const w0 = Cam.toWorld(sx0, sy0), w = Cam.toWorld(sx, sy);
    if (this.phase === 'fetch' || this.phase === 'carry') {
      const sp = SPOTS[this.stageIndex()];
      if (Math.abs(w.x - sp.x) < 2.2) {
        this.dragPlant = true;
        const g = this.gardener;
        if (this.phase === 'carry' && !g.busy && g.carry) { this.dragPlant = false; g.command(g.aPlant(sp)); }
      }
    }
  },
  dragStep(dy) {
    // pulling upward while on the tower climbs
    if (this.phase === 'climb') { const g = this.gardener; this.climbIntent(g.y + 1.3, 1); }
  },
  swipe(dx, dy) {
    if (this.phase === 'climb' && dy < 0) this.climbIntent(this.gardener.y + 3, 2);
  },

  /* ============================================================
     hints — only when nothing has happened for a while
     ============================================================ */
  primaryPos() {
    const p = this.primary;
    if (!p) return null;
    const g = this.gardener;
    switch (p.kind) {
      case 'star': case 'catch': case 'leafstar': return p.star.state === 'gone' ? null : { x: p.star.x, y: p.star.y };
      case 'spot': return { x: p.spot.x, y: terrainY(p.spot.x) + 0.1 };
      case 'cross': { const goal = CROSS_GOALS[p.i]; const x = goal.link === 6 ? 21.3 : goal.t; return { x, y: terrainY(x) + 0.3 }; }
      case 'climb': {
        if (g.link < 7) return Route.stepPoint(7, 1);
        const k = Math.min(Route.stepCount(7) - 1, Math.round(g.t) + 1);
        return Route.stepPoint(7, k);
      }
      case 'crown': return this.plants[3].soilPos();
      case 'replay': return this.replay ? { x: this.replay.x, y: this.replay.y } : null;
      case 'shower': return this.bigStar ? { x: this.bigStar.x, y: this.bigStar.y } : null;
    }
    return null;
  },

  hints(dt) {
    this.idle += dt;
    const g = this.gardener;
    const active = !['grow', 'climax', 'ending', 'boot', 'intro'].includes(this.phase) && !g.busy;
    const h = active ? clamp01((this.idle - 3.2) / 1.2) : 0;
    this.hint = damp(this.hint, h, 3, dt);
    const tp = this.primaryPos();
    if (tp && this.phase !== 'climax') g.lookAt = tp;
    else if (!tp && !this.growing && this.phase !== 'climax' && this.phase !== 'ending' && this.phase !== 'end') g.lookAt = { x: g.x + g.dir * 2, y: g.y + 1.2 };
    g.lookCam = 0;
    for (const s of this.stars) s.hint = 0;
    if (this.phase === 'sleep') {
      if (this.idle > 3) {
        this.chimeT -= dt; if (this.chimeT < 0) { this.chimeT = 4; Sound.hint(0); }
        // fireflies gather around the sleeping gardener's head
        this.moteT -= dt;
        if (this.moteT < 0) {
          this.moteT = 0.5;
          const hp = g.headWorld(), a = rnd(0, TAU);
          FX.motes(hp.x + Math.cos(a) * 2.2, hp.y + Math.sin(a) * 1.2 - 0.3, hp.x, hp.y + 0.1, 1);
        }
      }
      return;
    }
    if (h <= 0.01 || !tp) { this.chimeT = Math.min(this.chimeT, 1.2); return; }
    const cyc = (this.idle - 3.2) % 5;
    if (cyc > 1.4 && cyc < 2.4 && g.mode === 'route' && !g.hop) g.lookCam = 1;
    this.moteT -= dt;
    if (this.moteT < 0) { this.moteT = 0.65; FX.motes(g.x, g.y + 0.5, tp.x, tp.y, 1); }
    this.chimeT -= dt;
    if (this.chimeT < 0) { this.chimeT = 4.5; Sound.hint(Cam.panOf(tp.x)); }
    const p = this.primary;
    if (p.star) p.star.hint = h;
    this.pulseT = (this.pulseT || 0) - dt;
    if (this.pulseT < 0) {
      this.pulseT = 1.3;
      if (p.kind === 'climb') {
        // light runs up the stem and the next leaf bobs
        const tw = this.plants[3];
        tw.pulses.push({ s: 0, v: 7, amp: 0.7, w: 0.8, life: 3 });
        const la = Route.stepLeaf(7, Math.min(Route.stepCount(7) - 1, (g.link === 7 ? Math.round(g.t) : 0) + 1));
        if (la) la.leaf.av += 2.2;
      } else if (p.kind === 'star') {
        // a grown plant between the gardener and the star runs light toward it
        for (let i = 0; i < 3; i++) {
          const pl = this.plants[i];
          if (!pl.walkable) continue;
          const x0 = pl.pts[0].x, x1 = pl.pts[pl.n - 1].x;
          if (g.x < x1 && tp.x > x0) {
            pl.pulses.push({ s: 0, v: 4, amp: 0.8, w: 0.8 });
            for (const L of pl.leaves) if (L.side > 0) L.av += 0.8;
          }
        }
      }
    }
    if (p.kind === 'crown') { const tw = this.plants[3]; tw.soil.glow = 0.25 + 0.35 * h * (0.5 + 0.5 * Math.sin(this.time * 4)); }
    // after a long pause the gardener takes a couple of steps toward it himself
    if (this.idle > 8.5 && !this.nudged && g.mode === 'route' && !g.busy && Route.links[g.link] && Route.links[g.link].kind !== 'steps') {
      this.nudged = true;
      const dx = tp.x - g.x;
      if (Math.abs(dx) > 1.6) g.command(g.aWalkTo(g.x + Math.sign(dx) * 0.9));
    }
  },

  /* ============================================================
     camera direction (composition adapts to the layout)
     ============================================================ */
  frameCam(snap) {
    this.camera(0);
    if (snap) Cam.snap();
  },

  camera(dt) {
    const L = View.L, g = this.gardener, B = View.basePPU;
    Cam.lamX = 2.2; Cam.lamY = 2.2; Cam.lamZ = 1.5;
    const ph = this.phase;
    if (this.cinema) return this.cinemaCam();
    if (ph === 'sleep' || ph === 'boot' || (ph === 'intro')) {
      const ppu = B * L.sleepZoom;
      const vw = View.W / ppu;
      const fx = View.layout === 'landscape' ? g.x - 0.2 : g.x - 0.5;
      Cam.frame(fx, terrainRaw(g.x), View.layout === 'landscape' ? 0.4 : 0.42, L.groundFy, ppu);
      return;
    }
    const onTower = g.link === 7 && (Math.round(g.t) > 0 || g.mode === 'air');
    const tower = this.plants[3];
    if (ph === 'catch' || ph === 'shower' || ph === 'carryCrown') {
      Cam.frame(tower.pts[0].x, tower.tip().y, L.crownFx, L.crownFy, B * L.catchZoom);
      return;
    }
    if (ph === 'grow' && this.growing === tower && onTower) {
      // the crown rises away from the gardener: keep both in frame
      const tp = tower.tip();
      Cam.frame(tower.pts[0].x, (tp.y + g.y) / 2 + 0.6, L.crownFx, 0.5, B * L.catchZoom * 0.82);
      return;
    }
    if (ph === 'climb' || onTower) {
      const tx = tower.pts[0].x;
      Cam.frame(tx, g.y + 0.6, L.climbFx, L.climbFy, B * 0.95);
      Cam.lamY = 3;
      return;
    }
    // ground phases
    let ppu = B;
    let ix = null, iy = null;
    const p = this.primaryPos();
    if (this.growing) { const tp = this.growing.tip(); ix = tp.x; iy = tp.y; }
    else if (p) { ix = p.x; iy = p.y; }
    else if (this.stars.length) { const s = this.stars[this.stars.length - 1]; if (s.state === 'falling' || s.state === 'ground') { ix = s.x; iy = s.y; } }
    const towerGrow = (this.growing === tower && tower.grown > 0.6) || (ph === 'climb');
    if (towerGrow) ppu = B * L.towerZoom;
    else if (ix !== null) {
      const need = Math.abs(ix - g.x) + 2.6;
      ppu = clamp(View.W / need, B * 0.62, B);
    }
    const vw = View.W / ppu, vh = View.H / ppu;
    const gy = Route.links[g.link] && Route.links[g.link].kind === 'bridge' ? terrainRaw(g.x) : g.y;
    let cx;
    if (ix !== null) {
      const mid = lerp(g.x, ix, L.look);
      cx = clamp(mid, g.x - (0.5 - 0.16) * vw, g.x + (0.5 - 0.16) * vw);
    } else cx = g.x + (0.5 - L.subjFx) * vw;
    let cy = Math.max(gy, terrainRaw(g.x)) + (L.groundFy - 0.5) * vh;
    if (towerGrow) cy = PLATEAU_H + (0.86 - 0.5) * vh;
    if (iy !== null && !towerGrow) {
      const topNeed = iy + 0.8 - vh * 0.5;
      if (cy < topNeed && (this.stars.length && this.stars[this.stars.length - 1].state !== 'falling')) cy = topNeed;
    }
    Cam.tx = cx; Cam.ty = cy; Cam.tppu = ppu;
  },

  cinemaCam() {
    const L = View.L, B = View.basePPU, tower = this.plants[3], g = this.gardener;
    const c = this.cinema;
    const tx = tower.pts[0].x;
    if (c === 'sink') { Cam.frame(tx, tower.tip().y, L.crownFx, L.crownFy, B * L.catchZoom); return; }
    if (c === 'down') {
      const top = tower.tip().y;
      Cam.lamZ = 0.9; Cam.lamY = 1.4; Cam.lamX = 1.4;
      Cam.fit(tx - 5, PLATEAU_H - 1.5, tx + 5, top + 2, [0.08, 0.08, 0.08, 0.08]);
      return;
    }
    if (c === 'roots') {
      Cam.lamZ = 1.2; Cam.lamY = 1.8;
      Cam.fit(18.5, -2.5, 31, 9.5, View.layout === 'portrait' ? [0.04, 0.3, 0.04, 0.12] : [0.12, 0.1, 0.12, 0.08]);
      return;
    }
    if (c === 'braid') {
      Cam.lamY = 2.5;
      const top = this.braidTop || 0;
      const p = tower.pointAt(top);
      Cam.frame(tx, p.y, 0.5, 0.45, B * 0.62);
      return;
    }
    if (c === 'ascent') {
      const gi = this.giant, tp = gi.tip();
      const u = clamp01((gi.grown - 1) / (gi.L - 1));
      const ppu = B * lerp(0.7, 0.26, Ease.inOut(u));
      Cam.lamX = 3; Cam.lamY = 4.5; Cam.lamZ = 1.2;
      const fx = View.layout === 'landscape' ? 0.6 : 0.5;
      Cam.frame(tp.x, tp.y, fx, lerp(0.45, 0.38, u), ppu);
      return;
    }
    if (c === 'bud' || c === 'bloom') {
      const fc = this.flower.center();
      Cam.lamZ = 1.2; Cam.lamY = 2; Cam.lamX = 2;
      Cam.frame(fc.x, fc.y, 0.5, 0.48, B * 0.5);
      return;
    }
    if (c === 'final') {
      const fc = this.flower.center();
      Cam.lamZ = 0.55; Cam.lamY = 0.7; Cam.lamX = 0.7;
      const x0 = Math.min(-6, fc.x - 10), x1 = Math.max(fc.x + 10, 34);
      Cam.fit(x0, -8, x1, fc.y + 7, L.finalFit);
      return;
    }
    if (c === 'far') {
      // all the way out: a tiny round world with its new star
      const fc = this.flower.center();
      Cam.lamZ = 0.45; Cam.lamY = 0.55; Cam.lamX = 0.55;
      Cam.fit(Math.min(PLANET.x - PLANET.r - 6, fc.x - 8), PLANET.y - PLANET.r - 6, Math.max(PLANET.x + PLANET.r + 6, fc.x + 8), fc.y + 8, L.finalFit);
      return;
    }
  },

  /* ============================================================ */
  update(dt) {
    this.time += dt;
    if (this.script) {
      const sc = this.script;
      const r = sc.next(dt);
      if (r.done && this.script === sc) this.script = null;
    }
    this.hints(dt);
    this.gardener.update(dt);
    for (const s of this.stars) {
      s.update(dt);
      if (s.missed && s.state !== 'carried' && s.state !== 'lifted') { s.missT = (s.missT || 0) + dt; if (s.missT > 2.2 && s.state !== 'gone') { s.state = 'gone'; FX.sparks(s.x, s.y, 12, 1.2); } }
      if (s.small && s.state === 'ground') { s.popOnLeaf(false); }
      if (s.y < -60) s.state = 'gone';
    }
    this.stars = this.stars.filter(s => s.state !== 'gone' || (this.primary && this.primary.star === s));
    const plants = this.allPlants();
    const sub = clamp(Math.ceil(dt / (1 / 120)), 1, 8), h = dt / sub;
    for (let k = 0; k < sub; k++) for (const p of plants) p.physics(h, this.time);
    for (const p of plants) { p.clearForces(); p.updatePositions(); p.update(dt, this.time); }
    for (const b of Bumps) b.s.update(dt);
    for (const sp of SPOTS) if (sp.used) sp.healed = clamp01((this.time - (sp.healStart || this.time)) / 2);
    for (const c of World.clouds) { c.pv += -c.push * 0.4 * dt; c.pv *= Math.exp(-0.8 * dt); c.push += c.pv * dt; if (c.drift) c.x += c.drift * dt; }
    if (this.wave) this.wave.r += dt * 700;
    this.fade = this.fadeTarget > this.fade ? Math.min(this.fadeTarget, this.fade + dt * 1.1) : Math.max(this.fadeTarget, this.fade - dt * 0.9);
    FX.update(dt);
    Backdrop.updateFalls(dt);
    this.camera(dt);
    Cam.update(dt);
    Sound.update(dt, Cam.y);
  },
};
