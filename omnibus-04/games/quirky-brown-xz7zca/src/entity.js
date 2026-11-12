import { G, BALLOON, TUB, WATER } from './config.js';
import { Body, Ground } from './physics.js';
import { clamp } from './util.js';

// A house standing somewhere along the road, with everything that reacts to it:
// its balloons, the quilt under it (dent memory), its resident, moving loads,
// swinging bits, birds on the roof, and the wet hull of the boat.
export class HouseEntity {
  constructor(bp, index, baseX, variant) {
    this.bp = bp;
    this.index = index;
    this.baseX = baseX;
    this.variant = variant;
    this.ground = new Ground(bp.env, baseX);
    let restY = 0;
    if (bp.env === 'tub') restY = TUB.level - bp.mass / (WATER.rho * 214);
    if (bp.env === 'log') restY = 44;
    this.body = new Body(bp.bodyMass, bp.inertia, baseX + bp.com[0], restY + bp.com[1]);
    this.balloons = [];
    const n = bp.contacts.length;
    this.cD = new Float32Array(n);  // penetration per contact (max over frame)
    this.cF = new Float32Array(n);  // summed force per contact (over substeps)
    this.cX = new Float32Array(n);
    this.cA = new Float32Array(n);  // adhesion gap (negative) while the cloth clings
    this.stuck = new Uint8Array(n);
    this.anchor = new Float32Array(n).fill(NaN); // static-friction anchor per contact
    this.slipping = 0;
    this.peeled = 0;
    this.bump = 0;
    this.touch = 0;
    this.onLog = 0;
    this.nsub = 1;
    this.submerged = 0;
    this.load = bp.mass * G;        // smoothed support from quilt/water
    this.loadFrac = 1;
    this.state = 'rest';            // rest | air | gone
    this.groundTime = 0;
    this.airTime = 0;
    this.everFlew = false;
    this.lastVy = 0;
    this.creakAcc = 0;
    this.prevA = 0;
    this.prevLoad = 1;
    this.touched = false;
    this.lastTouchT = -99;
    this.lastSpawn = null;
    this.lastSpawnT = -99;
    this.frozen = false;
    this.pokes = [];
    this.loads = (bp.loads || []).map((L) => ({
      kind: L.kind, m: L.m, x: L.x, y: L.y, min: L.min, max: L.max,
      lx: L.x - bp.com[0], ly: L.y - bp.com[1], v: 0, dir: -1, step: 0, rest: 0,
    }));

    // Visual quilt memory (two layers): the surface springs back quickly with a
    // little overshoot; a darker pressed mark in the fabric fades slowly.
    const span = Math.max(300, bp.bounds.w * 0.5 + 170);
    const dx = 4;
    const m = Math.ceil((span * 2) / dx) + 1;
    this.dent = {
      x0: baseX - span, dx, n: m,
      D: new Float32Array(m), V: new Float32Array(m), T: new Float32Array(m), M: new Float32Array(m),
    };

    this.swingers = [];
    if (bp.parts.lantern) this.swingers.push(this.makeSwinger(bp.parts.lantern.x, bp.parts.lantern.y, bp.parts.lantern.len));

    this.resident = {
      lookX: baseX, lookY: 400, mood: 'idle', moodT: 0, blink: 2 + Math.random() * 2, blinkT: 0,
      ox: 0, vx: 0, oy: 0, vy: 0, cheer: 0, knock: 0, wave: 0, giggle: 0,
    };
    this.birds = (bp.parts.perches || []).map(([x, y], i) => ({
      lx: x - bp.com[0], ly: y - bp.com[1], state: i === 0 || index % 2 === 0 ? 'perch' : 'none',
      x: 0, y: 0, vx: 0, vy: 0, t: Math.random() * 5, dir: 1, hop: 0,
    }));
    this.wet = 0;              // wet height on the hull (boats)
    this.water = 0;            // current water height on the hull
    this.dripAcc = 0;
    this.prevV = { x: 0, y: 0 };
    this.acc = { x: 0, y: 0 };
    this.tilt = 0;
    this.peel = 0;
    this.shuffle = 0;
    this.squash = 0;
  }

  makeSwinger(x, y, len) {
    return { lx: x - this.bp.com[0], ly: y - this.bp.com[1], len, phi: 0, dphi: 0, px: null, py: null, pvx: 0, pvy: 0 };
  }

  get attachedLift() {
    let s = 0;
    for (const b of this.balloons) s += BALLOON.lift * Math.pow(b.r / b.rFull, 3);
    return s;
  }

  get liftRatio() { return this.attachedLift / this.bp.mass; }
  get cap() { return Math.ceil(this.bp.mass) + BALLOON.extra; }

  // A finger presses into the house here (world point), briefly.
  press(wx, wy, bu, time) {
    const [lx, ly] = this.body.toLocal(wx, wy);
    this.pokes.push({ lx, ly, fx: 0, fy: -bu * G, t: time });
    if (this.pokes.length > 6) this.pokes.shift();
  }

  beginFrame(n) {
    this.cD.fill(0);
    this.cF.fill(0);
    this.cA.fill(0);
    this.peeled = 0;
    this.bump = 0;
    this.touch = 0;
    this.onLog = 0;
    this.slipping = 0;
    this.nsub = n;
  }

  // Called once per frame after the physics substeps.
  endFrame(dt, sim) {
    const b = this.body;
    const bp = this.bp;
    let load = 0;
    const touching = this.touch;
    for (let i = 0; i < this.cF.length; i++) load += this.cF[i];
    load /= this.nsub;
    if (bp.columns) load += Math.max(0, WATER.rho * G * this.submerged);
    this.load += (load - this.load) * (1 - Math.exp(-dt * 10));
    const loadFrac = this.load / (bp.mass * G);
    this.loadFrac = loadFrac;
    this.pokes = this.pokes.filter((p) => p.t > 0);

    const grounded = touching > 0 || this.submerged > 20;

    // acceleration of the body (for residents & swingers)
    const ax = (b.vx - this.prevV.x) / dt, ay = (b.vy - this.prevV.y) / dt;
    this.acc.x += (ax - this.acc.x) * (1 - Math.exp(-dt * 20));
    this.acc.y += (ay - this.acc.y) * (1 - Math.exp(-dt * 20));
    this.prevV.x = b.vx; this.prevV.y = b.vy;
    this.tilt = Math.atan2(Math.sin(b.a), Math.cos(b.a));

    // --- state machine: rest <-> air
    if (grounded) {
      if (this.state === 'air' && this.airTime > 0.25) {
        sim.emit({ type: 'land', ent: this, speed: -this.lastVy, x: b.x, y: b.y });
        this.resident.mood = 'surprised';
        this.resident.moodT = 0;
      }
      if (this.state === 'air') this.state = 'rest';
      this.groundTime += dt;
      this.airTime = 0;
    } else if (this.state !== 'gone') {
      this.airTime += dt;
      if (this.state === 'rest' && this.airTime > 0.1) {
        this.state = 'air';
        this.everFlew = true;
        sim.emit({ type: 'liftoff', ent: this, x: b.x, y: b.y, first: this.groundTime > 0.3, mass: bp.mass });
        this.groundTime = 0;
        this.peel = 1;
        for (const bird of this.birds) if (bird.state === 'perch') this.scareBird(bird, Math.random() * 0.2);
        this.resident.mood = 'joy'; this.resident.moodT = 0; this.resident.cheer = 1;
      }
    }
    this.lastVy = b.vy;

    if (this.peeled > 0 && this.state === 'rest') sim.emit({ type: 'peel', ent: this, n: this.peeled, x: b.x, y: b.y });
    if (this.bump > 0) sim.emit({ type: 'bump', ent: this, speed: this.bump, x: b.x, y: b.y });

    // --- creaks: the wooden toy groans when its load shifts
    if (this.state === 'rest') {
      const da = Math.abs(this.tilt - this.prevA);
      const dl = Math.abs(loadFrac - this.prevLoad);
      this.creakAcc += da * 9 + dl * 1.2;
      if (this.creakAcc > 0.2) {
        sim.emit({ type: 'creak', ent: this, amount: clamp(this.creakAcc, 0.2, 1.2), light: clamp(1 - loadFrac, 0, 1), mass: bp.mass });
        this.creakAcc = 0;
      }
      this.creakAcc *= Math.exp(-dt * 1.5);
    }
    this.prevA = this.tilt;
    this.prevLoad = loadFrac;

    if (Math.abs(this.tilt) > 0.3) {
      for (const bird of this.birds) if (bird.state === 'perch') this.scareBird(bird, Math.random() * 0.3);
    }

    this.updateLoads(dt, sim);
    // springy visuals are integrated in short steps so a long frame (a resize,
    // a hiccup) can never make them diverge
    const k = Math.ceil(dt / (1 / 120));
    for (let j = 0; j < k; j++) this.updateDent(dt / k);
    this.updateSwingers(dt);
    this.updateResident(dt, sim);
    this.updateBirds(dt, sim);
    this.updateWet(dt, sim);
    this.peel *= Math.exp(-dt * 3);
    this.shuffle *= Math.exp(-dt * 3);
    this.squash *= Math.exp(-dt * 9);
  }

  // The dachshund trots towards the low end — its weight goes with it.
  updateLoads(dt, sim) {
    for (const L of this.loads) {
      const t = this.tilt;
      let want = 0;
      if (t > 0.035) want = -1;       // right end up -> left end low
      else if (t < -0.035) want = 1;
      if (want !== 0) {
        L.dir = want;
        L.rest = 0;
        L.v += (want * 58 - L.v) * (1 - Math.exp(-dt * 5));
      } else {
        L.rest += dt;
        L.v *= Math.exp(-dt * 4);
      }
      const nx = clamp(L.x + L.v * dt, L.min, L.max);
      if (nx === L.min || nx === L.max) L.v = 0;
      if (Math.abs(nx - L.x) > 0.01) L.step += Math.abs(nx - L.x);
      L.x = nx;
      L.lx = L.x - this.bp.com[0];
    }
  }

  updateDent(dt) {
    const dn = this.dent;
    if (this.ground.kind === 'tub') return;
    dn.T.fill(0);
    for (let i = 0; i < this.cD.length; i++) {
      const d = this.cD[i] > 0.01 ? this.cD[i] : this.cA[i];
      if (d === 0) continue;
      const x = this.cX[i];
      const j0 = Math.max(0, Math.floor((x - 80 - dn.x0) / dn.dx));
      const j1 = Math.min(dn.n - 1, Math.ceil((x + 80 - dn.x0) / dn.dx));
      for (let j = j0; j <= j1; j++) {
        const xj = dn.x0 + j * dn.dx;
        const u = Math.max(0, Math.abs(xj - x) - 5) / 26;
        const v = d * Math.exp(-u * u);
        if (d > 0 ? v > dn.T[j] : v < dn.T[j] && dn.T[j] <= 0) dn.T[j] = v;
      }
    }
    // surface: fast press, springy release (~3.5 Hz, a little overshoot)
    const w = 2 * Math.PI * 3.5, k = w * w, c = 2 * 0.45 * w;
    const fade = Math.exp(-dt / 3);
    for (let j = 0; j < dn.n; j++) {
      const T = dn.T[j];
      if (T > 0 && T >= dn.D[j]) {
        dn.D[j] += (T - dn.D[j]) * (1 - Math.exp(-dt * 40));
        dn.V[j] *= 0.5;
      } else {
        dn.V[j] += (k * (T - dn.D[j]) - c * dn.V[j]) * dt;
        dn.D[j] += dn.V[j] * dt;
      }
      if (!(dn.D[j] > -60 && dn.D[j] < 200)) { dn.D[j] = T; dn.V[j] = 0; }
      // pressed mark in the fabric
      dn.M[j] = Math.max(dn.M[j] * fade, dn.D[j] > 0 ? dn.D[j] : 0);
    }
  }

  // Rendered quilt displacement (positive = pressed down) at world x.
  dentAt(x) { return this.sample(this.dent.D, x); }
  markAt(x) { return this.sample(this.dent.M, x); }
  sample(arr, x) {
    const dn = this.dent;
    const f = (x - dn.x0) / dn.dx;
    if (f <= 0 || f >= dn.n - 1) return 0;
    const i = Math.floor(f);
    const t = f - i;
    return arr[i] * (1 - t) + arr[i + 1] * t;
  }

  updateSwingers(dt) {
    const b = this.body;
    for (const s of this.swingers) {
      const px = b.wx(s.lx, s.ly), py = b.wy(s.lx, s.ly);
      if (s.px === null) { s.px = px; s.py = py; }
      const vx = (px - s.px) / dt, vy = (py - s.py) / dt;
      const ax = (vx - s.pvx) / dt, ay = (vy - s.pvy) / dt;
      s.px = px; s.py = py; s.pvx = vx; s.pvy = vy;
      const gx = -clamp(ax, -3000, 3000), gy = -G - clamp(ay, -3000, 3000);
      const n = Math.ceil(dt / (1 / 120)), h = dt / n;
      for (let j = 0; j < n; j++) {
        const acc = (gx * Math.cos(s.phi) + gy * Math.sin(s.phi)) / s.len;
        s.dphi += (acc - 1.6 * s.dphi) * h;
        s.phi += s.dphi * h;
      }
      if (!Number.isFinite(s.phi)) { s.phi = 0; s.dphi = 0; }
    }
  }

  updateResident(dt, sim) {
    const r = this.resident;
    const b = this.body;
    r.moodT += dt;
    // look at the newest balloon, else up at the sky once flying, else around
    let newest = null;
    for (const bl of this.balloons) if (!newest || bl.age < newest.age || bl.inflating) newest = bl;
    let tx, ty;
    if (newest && (newest.age < 3.5 || newest.inflating)) { tx = newest.x; ty = newest.y; }
    else if (this.state === 'air') { tx = b.x + 60; ty = b.y - 500; }
    else if (newest) { tx = newest.x; ty = newest.y; }
    else { tx = b.x + Math.sin(sim.t * 0.4) * 240; ty = b.y + 40 + Math.sin(sim.t * 0.23) * 60; }
    if (r.knock > 0) { tx = b.x; ty = b.y - 60; }
    r.lookX += (tx - r.lookX) * (1 - Math.exp(-dt * 6));
    r.lookY += (ty - r.lookY) * (1 - Math.exp(-dt * 6));
    // only curious, surprised or delighted — never scared or sad
    if ((r.mood === 'joy' && r.moodT > 2.6) || (r.mood === 'surprised' && r.moodT > 0.9) || (r.mood === 'giggle' && r.moodT > 1.2) || (r.mood === 'look' && r.moodT > 1.6)) {
      r.mood = this.state === 'air' ? 'happy' : 'idle';
      r.moodT = 0;
    }
    if (r.mood === 'idle' || r.mood === 'eager') {
      const want = this.loadFrac < 0.4 && this.state === 'rest' && this.balloons.length ? 'eager' : 'idle';
      if (want !== r.mood) { r.mood = want; r.moodT = 0; }
    }
    if (r.mood === 'happy' && this.state === 'rest') { r.mood = 'idle'; r.moodT = 0; }
    r.cheer *= Math.exp(-dt * 0.8);
    r.wave = Math.max(0, r.wave - dt / 1.2);
    r.giggle = Math.max(0, r.giggle - dt / 1.2);
    // blink
    r.blinkT += dt;
    if (r.blinkT > r.blink) { r.blinkT = 0; r.blink = 1.8 + Math.random() * 3; }
    // the puppet leans with apparent gravity in the house frame (and lags a swing)
    const c = Math.cos(-b.a), s = Math.sin(-b.a);
    const gx = -this.acc.x, gy = -G - this.acc.y;
    const lx = c * gx - s * gy;
    const ly = s * gx + c * gy;
    const fx = lx * 0.012, fy = (ly + G) * 0.006;
    const n = Math.ceil(dt / (1 / 120)), h = dt / n;
    for (let j = 0; j < n; j++) {
      r.vx += (fx - 60 * r.ox - 5 * r.vx) * h;
      r.vy += (fy - 60 * r.oy - 5 * r.vy) * h;
      r.ox = clamp(r.ox + r.vx * h, -9, 9);
      r.oy = clamp(r.oy + r.vy * h, -6, 6);
    }
  }

  scareBird(bird, delay) {
    bird.state = 'fly';
    const b = this.body;
    bird.x = b.wx(bird.lx, bird.ly);
    bird.y = b.wy(bird.lx, bird.ly);
    bird.dir = Math.random() < 0.5 ? -1 : 1;
    bird.vx = bird.dir * (60 + Math.random() * 60);
    bird.vy = 120 + Math.random() * 60;
    bird.t = -delay;
    bird.hop = 0;
    bird.announced = false;
  }

  updateBirds(dt, sim) {
    const b = this.body;
    for (const bird of this.birds) {
      bird.t += dt;
      if (bird.state === 'perch') {
        bird.x = b.wx(bird.lx, bird.ly);
        bird.y = b.wy(bird.lx, bird.ly);
        bird.hop = Math.max(0, bird.hop - dt * 4);
        if (Math.random() < dt * 0.25) bird.hop = 1;
        if (Math.random() < dt * 0.1) bird.dir = -bird.dir;
      } else if (bird.state === 'fly') {
        if (bird.t < 0) { bird.x = b.wx(bird.lx, bird.ly); bird.y = b.wy(bird.lx, bird.ly); continue; }
        if (!bird.announced) { bird.announced = true; sim.emit({ type: 'birdsFly', x: bird.x, y: bird.y }); }
        bird.vy += (40 - bird.vy * 0.3) * dt;
        bird.vx += bird.dir * 30 * dt;
        bird.x += bird.vx * dt;
        bird.y += bird.vy * dt;
        if (bird.t > 9) bird.state = 'none';
      }
    }
  }

  updateWet(dt, sim) {
    if (!this.bp.columns) return;
    const b = this.body;
    // waterline at the hull middle, measured up from the keel
    const kx = b.wx(0, -this.bp.com[1]), ky = b.wy(0, -this.bp.com[1]);
    const wl = this.ground.waterAt(kx, sim.t);
    this.gap = wl === -Infinity ? 999 : ky - wl;   // keel above water (>0) or below (<0)
    this.water = clamp(wl - ky, 0, this.bp.keel.deck);
    if (this.water > this.wet) this.wet = this.water;
    else this.wet += (this.water - this.wet) * (1 - Math.exp(-dt / 5));
    // drips fall from a wet hull that has left the water
    const exposed = this.wet - this.water;
    if (exposed > 1) {
      this.dripAcc += dt * clamp(exposed / 10, 0, 3) * (this.water < 0.5 ? 5 : 1.5);
      while (this.dripAcc > 1) {
        this.dripAcc -= 1;
        const lx = (Math.random() - 0.5) * this.bp.keel.flat * 1.8 - this.bp.com[0];
        const ly = -this.bp.com[1] + 1;
        sim.emit({ type: 'drip', ent: this, x: b.wx(lx, ly), y: b.wy(lx, ly), vx: b.vx, vy: b.vy });
      }
    }
  }
}
