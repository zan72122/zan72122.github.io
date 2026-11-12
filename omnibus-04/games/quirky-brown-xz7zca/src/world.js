import { BALLOON, WORLD, G, FINGER, TUB } from './config.js';
import { Sim, Balloon } from './physics.js';
import { Wind } from './wind.js';
import { BLUEPRINTS } from './houses.js';
import { HouseEntity } from './entity.js';
import { Camera } from './camera.js';
import { clamp, lerp, easeInOut, pointInPoly, closestOnPoly, rng } from './util.js';

// Balloons are the only saturated things in the world. House paints avoid these.
export const BALLOON_COLORS = ['#e62f3b', '#1f78dd', '#ffc21a', '#27ae55', '#ff5e9f'];

const calmWind = { at(x, y, o) { o.x = 0; o.y = 0; return o; }, gustAt() { return 0; }, profile() { return 1; } };
const LAP = BLUEPRINTS.length;

// The game: a road of toy houses on a quilt. Touch a house -> a snap button
// appears under the finger, its string runs up the wall to the roof, and a
// balloon fills there. Enough balloons -> the house floats; the camera follows
// it, it drifts off into the far sky, and the wind carries us to the next house.
export class World {
  constructor(opts = {}) {
    this.rand = rng(opts.seed || 1234);
    this.wind = new Wind(opts.seed || 7);
    this.sim = new Sim(this.wind);
    this.cam = new Camera();
    this.safe = { top: 0, bottom: 0, left: 0, right: 0 };
    this.time = 0;
    this.events = [];
    this.houses = [];
    this.curIndex = opts.startAt || 0;
    this.keepsakes = [];      // houses that floated away this lap (far sky, upper left)
    this.pointers = new Map();
    this.idleT = 0;
    this.knockT = 0;
    this.colorI = Math.floor(this.rand() * BALLOON_COLORS.length);
    this.phase = 'intro';
    this.phaseT = 0;
    this.travel = null;
    this.depart = null;
    this.finale = null;
    this.page = null;         // page-turn transition
    this.dusk = 0;
    this.demo = null;
    this.post = null;
    this.lap = Math.floor(this.curIndex / LAP);
    this.skipIntro = !!opts.skipIntro;
    this.follow = { cap: 1, y0: 0 };
    this.clouds = [];

    this.addHouse(this.curIndex);
    this.addHouse(this.curIndex + 1);
    if (this.curIndex % LAP === 0) this.makePost(this.houses[0]);
    this.makeClouds();
    this.arrivedT = 0;
  }

  get current() { return this.houses.find((h) => h.index === this.curIndex); }

  emit(e) { this.events.push(e); }

  addHouse(index) {
    const bp = BLUEPRINTS[index % LAP];
    const variant = Math.floor(index / LAP);
    const ent = new HouseEntity(bp, index, index * WORLD.spacing, variant);
    // settle into the quilt / water before anyone sees it
    const tmp = new Sim(calmWind);
    tmp.entities.push(ent);
    for (let i = 0; i < 150; i++) tmp.step(1 / 60);
    ent.state = 'rest';
    ent.everFlew = false;
    ent.groundTime = 2;
    ent.resident.mood = 'idle';
    ent.dent.D.set(ent.dent.T);
    ent.dent.M.set(ent.dent.T);
    ent.dent.V.fill(0);
    this.sim.entities.push(ent);
    this.houses.push(ent);
    return ent;
  }

  // A balloon tied to a post beside the very first house: shows what balloons do.
  makePost(ent) {
    const x = ent.baseX - ent.bp.bounds.w / 2 - 40;
    const y = 64;
    const bl = new Balloon(x + 20, y + 170, '#ffc21a', 170);
    bl.r = bl.rFull;
    bl.inflating = false;
    bl.anchor = { x, y };
    bl.taut = true;
    this.sim.free.push(bl);
    this.post = { x, y, balloon: bl, lean: 0, ent };
  }

  makeClouds() {
    // cotton clouds on a slow parallax layer; at most ~2 on screen
    for (let i = 0; i < 4; i++) {
      this.clouds.push({
        x: i * 520 + this.rand() * 200 - 400, y: 300 + this.rand() * 200 + (i % 2) * 320,
        p: 0.35 + this.rand() * 0.2, size: 0.8 + this.rand() * 0.5, seed: i * 17 + 3, puff: 0,
      });
    }
  }

  nextColor() {
    this.colorI = (this.colorI + 1) % BALLOON_COLORS.length;
    return BALLOON_COLORS[this.colorI];
  }

  // ------------------------------------------------------------------ framing
  // Where the current house sits on screen: ground line at 78% (portrait) /
  // 74% (landscape) of the height; in landscape the house stands at ~40% across
  // so the wind has room to carry it to the right.
  frameFor(ent) {
    const { W, H } = this.cam;
    const bp = ent.bp;
    const land = clamp((W / H - 0.8) / 0.55, 0, 1);
    const gFrac = lerp(0.78, 0.74, land);
    const xFrac = lerp(0.5, 0.41, land);
    let bodyW = bp.bounds.w;
    if (bp.env === 'tub') bodyW = bp.bounds.w * 1.25;
    const wFrac = bp.id === 'long' ? 0.8 : 0.58;
    const zW = (wFrac * W) / bodyW;
    const cut = bp.id === 'long' || bp.id === 'stone' ? 0.9 : 1;
    const needAbove = (bp.bounds.h + BALLOON.stringMax * 0.8 + BALLOON.radius * 2 + 16) * cut;
    const zH = (gFrac * H - this.safe.top - 4) / needAbove;
    const zoom = clamp(Math.min(zW, zH), 0.3, 2.4);
    return {
      x: ent.baseX + (W / 2 - xFrac * W) / zoom,
      y: (gFrac * H - H / 2) / zoom,
      zoom,
    };
  }

  // ------------------------------------------------------------------ input
  pointerDown(id, sx, sy, pw = 1, ph = 1) {
    this.idleT = 0;
    const { W, H } = this.cam;
    // palms / cheeks and thumbs resting on the edge are not taps
    if (pw > FINGER.palm || ph > FINGER.palm) return;
    if (sx < FINGER.edge || sx > W - FINGER.edge || sy > H - Math.max(FINGER.edge, this.safe.bottom)) return;
    if (this.page) { this.page.skip = true; return; }
    if (this.finale && this.finale.t > 3) { this.finale.done = true; return; }
    const [wx, wy] = this.cam.toWorld(sx, sy);
    const p = { id, sx0: sx, sy0: sy, sx, sy, wx, wy, t: 0, kind: null, ent: null, balloon: null, moved: 0, next: FINGER.holdRepeat, rub: 0 };
    this.pointers.set(id, p);
    if (this.phase === 'travel' || this.depart) { this.touchSky(p); return; }
    // 1. the house (with a generous halo) always wins
    const hit = this.houseAt(wx, wy);
    if (hit) {
      p.kind = 'house';
      p.ent = hit.ent;
      this.touchHouse(hit.ent, hit.x, hit.y, wx, wy);
      return;
    }
    // 2. a balloon can be held and pulled (or just boinged)
    const bl = this.balloonAt(wx, wy);
    if (bl) {
      p.kind = 'balloon';
      p.balloon = bl;
      bl.grab = { x: wx, y: wy };
      this.emit({ type: 'grab', balloon: bl, x: bl.x, y: bl.y });
      return;
    }
    // 3. everything else answers too: quilt dimples, water rings, clouds puff
    const h = this.nearestHouse(wx);
    if (h && h.ground.kind === 'tub' && Math.abs(wx - h.ground.cx) < TUB.halfW && wy < TUB.rim + 30 && wy > 0) {
      p.kind = 'water';
      this.emit({ type: 'ripple', ent: h, x: wx, y: TUB.level, strength: 1 });
      return;
    }
    if (h && wy < WORLD.groundBack + 10) {
      p.kind = 'ground';
      this.poke(h, wx, wy);
      return;
    }
    this.touchSky(p);
  }

  pointerMove(id, sx, sy) {
    const p = this.pointers.get(id);
    if (!p) return;
    const dsx = sx - p.sx, dsy = sy - p.sy;
    p.moved += Math.hypot(dsx, dsy);
    p.sx = sx; p.sy = sy;
    [p.wx, p.wy] = this.cam.toWorld(sx, sy);
    if (p.kind === 'balloon' && p.balloon) {
      p.balloon.grab = { x: p.wx, y: p.wy };
    } else if (p.kind === 'house' && p.moved > FINGER.stroke) {
      // stroking the house: it wiggles under the finger, no balloons
      p.kind = 'stroke';
    }
    if (p.kind === 'stroke' && p.ent) {
      const hit = this.houseAt(p.wx, p.wy);
      if (hit && hit.ent === p.ent) {
        const f = clamp(dsx * 0.02, -0.12, 0.12);
        p.ent.pokes.push({ lx: hit.lx, ly: hit.ly, fx: f * G, fy: -0.04 * G, t: 0.05 });
        if (p.ent.pokes.length > 8) p.ent.pokes.shift();
        p.rub += Math.abs(dsx) + Math.abs(dsy);
        if (p.rub > 60) { p.rub = 0; this.emit({ type: 'rub', ent: p.ent, x: p.wx, y: p.wy }); }
      }
    }
  }

  pointerUp(id) {
    const p = this.pointers.get(id);
    if (!p) return;
    this.pointers.delete(id);
    if (p.kind === 'balloon' && p.balloon) {
      const bl = p.balloon;
      bl.grab = null;
      if (p.t < 0.3 && p.moved < 14) {
        // a tap on a balloon: it bobs, squeaks and tugs its string — nothing is lost
        bl.vy += 150;
        bl.vx += (this.rand() - 0.5) * 90;
        bl.boing = 1;
        bl.snap = 1;
        this.emit({ type: 'boing', balloon: bl, x: bl.x, y: bl.y, color: bl.color });
      } else {
        this.emit({ type: 'letgo', balloon: bl, x: bl.x, y: bl.y });
      }
    }
  }

  touchSky(p) {
    p.kind = 'sky';
    const c = this.cloudAt(p.sx, p.sy);
    if (c) {
      c.puff = 1;
      this.emit({ type: 'puff', cloud: c, sx: p.sx, sy: p.sy });
    }
  }

  cloudScreen(c) {
    const cam = this.cam;
    const s = cam.zoom * (0.55 + c.p * 0.6);
    return {
      x: cam.W / 2 + (c.x - cam.x * c.p) * s,
      y: cam.H / 2 - (c.y - cam.y * c.p) * s,
      s: s * c.size,
    };
  }

  cloudAt(sx, sy) {
    for (const c of this.clouds) {
      const q = this.cloudScreen(c);
      if (Math.abs(sx - q.x) < 150 * q.s && Math.abs(sy - q.y) < 55 * q.s) return c;
    }
    return null;
  }

  // House under a world point: inside the outline, or within a 30 px halo
  // (snapped onto the outline). Returns the local (COM-relative) point.
  houseAt(wx, wy) {
    const pad = 30 / this.cam.zoom;
    let best = null, bd = Infinity;
    for (const ent of this.houses) {
      if (ent.state === 'gone' || ent.departing) continue;
      if (ent.index !== this.curIndex) continue; // the next house waits until we arrive
      const [lx, ly] = ent.body.toLocal(wx, wy);
      if (pointInPoly(lx, ly, ent.bp.local)) return { ent, lx, ly, x: wx, y: wy };
      const [cx, cy, d] = closestOnPoly(lx, ly, ent.bp.local);
      if (d < pad && d < bd) {
        // snap just inside the outline
        const nx = (lx - cx) / (d || 1), ny = (ly - cy) / (d || 1);
        const ix = cx - nx * 4, iy = cy - ny * 4;
        best = { ent, lx: ix, ly: iy, x: ent.body.wx(ix, iy), y: ent.body.wy(ix, iy) };
        bd = d;
      }
    }
    return best;
  }

  balloonAt(wx, wy) {
    const pad = 12 / this.cam.zoom;
    let best = null, bd = Infinity;
    for (const bl of this.sim.allBalloons()) {
      if (bl.inflating || bl.demo) continue;
      const d = Math.hypot(bl.x - wx, (bl.y - wy) * 0.9);
      if (d < bl.r + pad && d < bd) { best = bl; bd = d; }
    }
    return best;
  }

  nearestHouse(wx) {
    let best = null, bd = Infinity;
    for (const ent of this.houses) {
      const d = Math.abs(ent.baseX - wx);
      if (d < bd) { bd = d; best = ent; }
    }
    return best;
  }

  touchHouse(ent, wx, wy) {
    const hit = this.houseAt(wx, wy) || { lx: 0, ly: 0 };
    ent.touched = true;
    ent.lastTouchT = this.time;
    this.follow.cap = 1;
    // the finger presses into the toy
    ent.pokes.push({ lx: hit.lx, ly: hit.ly, fx: 0, fy: -0.15 * G, t: FINGER.pressTime });
    ent.squash = 1;
    const win = ent.bp.parts.window;
    const onWindow = win && Math.hypot(hit.lx + ent.bp.com[0] - win.x, hit.ly + ent.bp.com[1] - win.y) < win.r + 6;
    if (onWindow) ent.resident.wave = 1;
    this.emit({ type: 'knock', ent, x: wx, y: wy, onWindow });
    this.tryTie(ent, hit.lx, hit.ly);
  }

  // A new balloon waits for the previous one's string to go taut (or 0.45 s),
  // so every cause gets its moment. Taps in between hurry the filling balloon.
  tryTie(ent, lx, ly) {
    if (ent.balloons.length >= ent.cap) {
      ent.resident.mood = 'giggle';
      ent.resident.moodT = 0;
      ent.resident.giggle = 1;
      ent.shuffle = 1;
      this.emit({ type: 'giggle', ent });
      return null;
    }
    const last = ent.lastSpawn;
    if (last && !last.dead && !last.taut && this.time - ent.lastSpawnT < BALLOON.gate) {
      if (last.inflating) last.inflateRate = 1.9;
      return null;
    }
    return this.tieBalloon(ent, lx, ly);
  }

  tieBalloon(ent, lx, ly, demo = false) {
    const bp = ent.bp;
    // a tap on the resident's window puts the button on the side of the frame,
    // so the face that invited the tap is never covered by button or string
    const win = bp.parts.window;
    if (win && !demo && bp.id !== 'long') {
      const wx = lx + bp.com[0] - win.x, wy = ly + bp.com[1] - win.y;
      const R = win.r + 5.5;
      if (Math.abs(wx) < R && Math.abs(wy) < R) {
        lx = win.x + (wx < 0 ? -R : R) - bp.com[0];
        ly = win.y + clamp(wy, -win.r, win.r) - bp.com[1];
      }
    }
    // the string runs from the button straight up the wall to the roof line
    const dx = clamp(lx + bp.com[0], bp.tieX[0], bp.tieX[1]);
    const dy = bp.topAt(dx) - 1;
    const tlx = dx - bp.com[0], tly = dy - bp.com[1];
    const b = ent.body;
    const L0 = BALLOON.stringMin + this.rand() * (BALLOON.stringMax - BALLOON.stringMin);
    const L = Math.max(L0, bp.bounds.h - dy + BALLOON.clearRoof);
    const bl = new Balloon(b.wx(tlx, tly), b.wy(tlx, tly) + 6, this.nextColor(), L);
    // how far above the wrap point the hull still reaches within a balloon's width
    const clear = Math.max(0, bp.topOver(dx - bl.rFull, dx + bl.rFull) - dy);
    bl.anchor = { ent, lx: tlx, ly: tly, bx: lx, by: ly, clear };
    bl.born = this.time;
    bl.demo = demo;
    ent.balloons.push(bl);
    ent.lastSpawn = bl;
    ent.lastSpawnT = this.time;
    this.emit({ type: 'spawn', ent, balloon: bl, x: b.wx(lx, ly), y: b.wy(lx, ly), wrapX: bl.x, wrapY: bl.y, n: ent.balloons.length, ratio: ent.liftRatio, demo });
    return bl;
  }

  poke(ent, wx, wy) {
    const dn = ent.dent;
    for (let j = 0; j < dn.n; j++) {
      const u = (dn.x0 + j * dn.dx - wx) / 20;
      const v = 8 * Math.exp(-u * u);
      dn.D[j] += v;
      dn.M[j] = Math.max(dn.M[j], dn.D[j]);
    }
    this.emit({ type: 'poke', ent, x: wx, y: wy });
  }

  // ------------------------------------------------------------------ update
  update(dt) {
    dt = Math.min(dt, 0.1);
    this.time += dt;
    this.phaseT += dt;
    this.idleT += dt;
    this.wind.update(dt);

    // a still, held finger keeps asking for balloons
    for (const p of this.pointers.values()) {
      p.t += dt;
      if (p.kind === 'house' && p.t >= p.next) {
        p.next += FINGER.holdRepeat;
        const hit = this.houseAt(p.wx, p.wy);
        if (hit && hit.ent === p.ent) {
          this.emit({ type: 'knock', ent: p.ent, x: p.wx, y: p.wy, soft: true });
          this.tryTie(p.ent, hit.lx, hit.ly);
        }
      }
    }

    // balloons fill up at the roof line
    for (const bl of this.sim.allBalloons()) {
      if (!bl.inflating) continue;
      const k = bl.r / bl.rFull;
      bl.r = Math.min(bl.rFull, bl.r + (bl.rFull / BALLOON.inflate) * dt * (1.4 - k * 0.8) * bl.inflateRate);
      if (bl.r >= bl.rFull - 0.01) {
        bl.inflating = false;
        bl.age = 0;
        this.emit({ type: 'inflated', balloon: bl, x: bl.x, y: bl.y, ent: bl.anchor && bl.anchor.ent });
      }
    }

    this.sim.step(dt);
    for (const e of this.sim.events) this.onSimEvent(e);
    this.sim.events.length = 0;

    this.updatePost(dt);
    this.updateClouds(dt);
    this.updateDemo(dt);
    this.updateFree();
    this.updateFlow(dt);
    this.updateCamera(dt);
    this.updateHints(dt);
  }

  onSimEvent(e) {
    if (e.type === 'taut' && e.ent) {
      e.ratio = e.ent.liftRatio;
      e.n = e.ent.balloons.length;
      e.mass = e.ent.bp.mass;
      const r = e.ent.resident;
      if (r.mood === 'idle' || r.mood === 'eager') { r.mood = 'look'; r.moodT = 0; }
    }
    this.emit(e);
  }

  updatePost(dt) {
    const p = this.post;
    if (!p) return;
    const bl = p.balloon;
    const target = bl ? clamp((bl.x - p.x) / 500, -0.25, 0.25) * clamp(bl.tension, 0, 1.6) : 0;
    p.lean += (target - p.lean) * (1 - Math.exp(-dt * 6));
    if (this.curIndex > p.ent.index + 1) {
      this.sim.free = this.sim.free.filter((b) => b !== bl);
      this.post = null;
    }
  }

  updateClouds(dt) {
    const cam = this.cam;
    for (const c of this.clouds) {
      c.x += (6 + this.wind.gustAt(cam.x) * 10) * dt;
      c.puff = Math.max(0, c.puff - dt * 1.4);
      const q = this.cloudScreen(c);
      const s = cam.zoom * (0.55 + c.p * 0.6);
      // wrap around the screen, re-entering from the other side
      if (q.x < -260 * q.s) c.x = (cam.W + 240 * q.s - cam.W / 2) / s + cam.x * c.p + Math.random() * 300 / s;
      else if (q.x > cam.W + 900 * q.s) c.x = (-240 * q.s - cam.W / 2) / s + cam.x * c.p;
    }
  }

  // Free balloons that drifted off far above are gone for good.
  updateFree() {
    if (!this.sim.free.length) return;
    const top = this.cam.top;
    this.sim.free = this.sim.free.filter((b) => b.anchor || b.y < top + 900);
  }

  // Progression: float -> follow -> drift into the far sky -> travel -> next house.
  updateFlow(dt) {
    const cur = this.current;
    if (this.phase === 'intro') {
      if (this.phaseT > 2.6 || this.skipIntro) { this.phase = 'play'; this.phaseT = 0; this.arrivedT = this.time; }
      return;
    }
    if (this.page) { this.updatePage(dt); return; }
    if (this.finale) { this.updateFinale(dt); return; }
    if (this.phase === 'play' && cur && cur.state === 'air' && !this.depart) {
      // leave once it has floated a while and its roof nears the top of the frame
      let roof = -Infinity;
      for (const [x, y] of cur.bp.local) roof = Math.max(roof, cur.body.wy(x, y));
      const roofSy = this.cam.sy(roof);
      if (cur.airTime > 3 && (roofSy < this.cam.H * 0.3 || cur.airTime > 22)) {
        if (cur.index % LAP === LAP - 1) this.startFinale(cur);
        else this.startDepart(cur);
      }
    }
    if (this.depart) {
      const d = this.depart;
      d.t += dt;
      if (d.t >= d.dur) {
        this.retire(d.ent, d.slot);
        this.depart = null;
        this.startTravel();
      }
    }
    if (this.phase === 'travel') {
      const tr = this.travel;
      tr.t += dt;
      if (tr.t >= tr.dur) {
        this.phase = 'play';
        this.phaseT = 0;
        this.travel = null;
        this.arrivedT = this.time;
        this.idleT = 0;
        this.emit({ type: 'arrive', ent: this.current });
      }
    }
    // houses left behind (landed, or drifted) quietly leave the simulation
    for (const ent of this.houses.slice()) {
      if (ent.index >= this.curIndex || ent.departing) continue;
      if (ent.body.x < this.cam.left - 900 || ent.body.y > this.cam.top + 1500) this.removeHouse(ent);
    }
  }

  slotFor(i) {
    const { W, H } = this.cam;
    const land = W > H;
    const s = Math.min(W, H);
    const scale = clamp(s * 0.00034, 0.11, 0.22);
    return {
      x: this.safe.left + s * (land ? 0.07 : 0.11) + i * s * (land ? 0.09 : 0.15),
      // the mini house hangs under its balloons: leave room for them above
      y: this.safe.top + 8 + scale * 470 + (i % 2) * s * 0.035,
      scale,
    };
  }

  startDepart(ent) {
    const slot = this.keepsakes.length;
    ent.departing = true;
    this.depart = { ent, t: 0, dur: 1.6, slot };
    this.emit({ type: 'depart', ent });
  }

  startTravel() {
    const nextIndex = this.curIndex + 1;
    if (!this.houses.find((h) => h.index === nextIndex)) this.addHouse(nextIndex);
    this.curIndex = nextIndex;
    if (!this.houses.find((h) => h.index === nextIndex + 1)) this.addHouse(nextIndex + 1);
    const to = this.frameFor(this.current);
    const c = this.cam;
    this.travel = { t: 0, dur: 2.6, from: { x: c.x, y: c.y, zoom: c.zoom }, to };
    this.phase = 'travel';
    this.phaseT = 0;
    this.emit({ type: 'travel' });
  }

  retire(ent, slot) {
    if (ent.state === 'gone') return;
    ent.state = 'gone';
    this.keepsakes.push({
      bp: ent.bp, variant: ent.variant, index: ent.index,
      colors: ent.balloons.map((b) => b.color).slice(0, 12),
      tilt: clamp(ent.tilt, -0.5, 0.5), slot, born: this.time, resident: ent.bp.resident,
    });
    this.removeHouse(ent);
    this.emit({ type: 'retire', ent });
  }

  removeHouse(ent) {
    this.sim.entities = this.sim.entities.filter((e) => e !== ent);
    this.houses = this.houses.filter((e) => e !== ent);
  }

  // ---- ending of a lap: the stone house rises into an evening sky and the
  // earlier houses drift in around it. A tap (or 20 s) turns the cloth page.
  startFinale(ent) {
    ent.departing = true;
    this.finale = { ent, t: 0, done: false, y0: this.cam.y };
    this.emit({ type: 'finale', ent });
  }

  updateFinale(dt) {
    const f = this.finale;
    f.t += dt;
    this.dusk = clamp(f.t / 6, 0, 1);
    this.wind.calm = this.dusk * 0.85;
    if (f.t > 1 && !f.chord) { f.chord = true; this.emit({ type: 'flotilla' }); }
    if (f.done || f.t > 24) {
      this.finale = null;
      this.page = { t: 0, dur: 2.2, swapped: false, skip: false };
      this.emit({ type: 'pageTurn' });
    }
  }

  updatePage(dt) {
    const pg = this.page;
    pg.t += dt;
    if (!pg.swapped && pg.t >= pg.dur * 0.5) {
      pg.swapped = true;
      this.newLap();
    }
    if (pg.t >= pg.dur) {
      this.page = null;
      this.phase = 'play';
      this.phaseT = 0;
      this.arrivedT = this.time;
      this.emit({ type: 'arrive', ent: this.current });
    }
  }

  newLap() {
    // clear the sky; morning on the next lap of the road
    const next = this.curIndex + 1;
    for (const ent of this.houses.slice()) this.removeHouse(ent);
    this.sim.free = [];
    this.keepsakes = [];
    this.dusk = 0;
    this.wind.calm = 0;
    this.curIndex = next;
    this.lap = Math.floor(next / LAP);
    this.addHouse(next);
    this.addHouse(next + 1);
    this.makePost(this.current);
    const f = this.frameFor(this.current);
    this.cam.x = f.x; this.cam.y = f.y; this.cam.zoom = f.zoom;
    this.phase = 'page';
  }

  updateCamera(dt) {
    const c = this.cam;
    const cur = this.current;
    if (!cur) return;
    const rest = this.frameFor(cur);
    if (this.page) return;
    if (!this.camInit) { this.camInit = true; c.x = rest.x; c.y = rest.y; c.zoom = rest.zoom; }
    if (this.phase === 'intro') {
      if (this.skipIntro) { c.x = rest.x; c.y = rest.y; c.zoom = rest.zoom; return; }
      const t = easeInOut(clamp(this.phaseT / 2.6, 0, 1));
      c.zoom = rest.zoom;
      c.x = rest.x - (1 - t) * 60;
      c.y = rest.y + (1 - t) * (c.H / rest.zoom) * 1.2;
      return;
    }
    if (this.phase === 'travel') {
      const tr = this.travel;
      tr.to = this.frameFor(this.current);
      const k = easeInOut(clamp(tr.t / tr.dur, 0, 1));
      const lift = Math.sin(Math.PI * k) * 90 / tr.to.zoom;
      c.x = tr.from.x + (tr.to.x - tr.from.x) * k;
      c.y = tr.from.y + (tr.to.y - tr.from.y) * k + lift;
      c.zoom = tr.from.zoom + (tr.to.zoom - tr.from.zoom) * k;
      this.wind.extra = Math.sin(Math.PI * k) * 30;
      return;
    }
    this.wind.extra = 0;
    if (this.finale) {
      // rise with the last house into the evening
      const e = this.finale.ent;
      const ty = Math.max(rest.y, e.body.y - e.bp.com[1] + rest.y - 0);
      c.y += (ty - c.y) * (1 - Math.exp(-dt * 1.2));
      c.x += (e.body.x + (rest.x - cur.baseX) - c.x) * (1 - Math.exp(-dt * 1.2));
      return;
    }
    // play: frame the house; once it floats, follow it up — but only so fast,
    // so a house with more balloons visibly outruns the camera
    let tx = rest.x + clamp(cur.body.x - cur.bp.com[0] - cur.baseX, -300, 300) * 0.7, ty = rest.y;
    if (cur.everFlew && !this.depart) {
      const rise = cur.body.y - cur.bp.com[1] - (cur.ground.kind === 'tub' ? 18 : 0);
      ty = rest.y + Math.max(0, rise);
      // the wind carries it towards the next house: follow it all the way
      tx = rest.x + (cur.body.x - cur.bp.com[0] - cur.baseX);
      // attention fades: after a while of no touches the camera lets it go
      const quiet = this.time - cur.lastTouchT;
      const want = cur.state === 'air' && quiet > 7 ? 0.15 : 1;
      this.follow.cap += (want - this.follow.cap) * (1 - Math.exp(-dt * 0.6));
    }
    const vmax = 60 * this.follow.cap;       // ≈ 0.34 H/s
    const dy = clamp((ty - c.y) * (1 - Math.exp(-dt * 2.5)), -vmax * 3 * dt, vmax * dt);
    c.y += dy;
    c.x += (tx - c.x) * (1 - Math.exp(-dt * 1.6));
    c.zoom += (rest.zoom - c.zoom) * (1 - Math.exp(-dt * 2));
  }

  updateHints(dt) {
    const cur = this.current;
    if (!cur || this.phase !== 'play' || this.depart || this.finale) return;
    const r = cur.resident;
    r.knock = Math.max(0, r.knock - dt / 1.2);
    if (cur.state !== 'rest' || this.pointers.size) { this.knockT = 0; return; }
    const sinceArrive = this.time - this.arrivedT;
    // first house: a demonstration soon after we land, if nobody has touched yet
    if (cur.index % LAP === 0 && !cur.touched && !cur.demoDone && sinceArrive > 3) {
      this.startDemo(cur);
      return;
    }
    // every house: after 8 s idle the resident knocks and the house shuffles;
    // after 16 s a balloon peeks out of the roof, tugs, and slips away
    if (this.idleT > 8) {
      this.knockT += dt;
      if (this.knockT > 5 || this.knockT === dt) {
        this.knockT = dt;
        r.knock = 1;
        cur.shuffle = 1;
        cur.pokes.push({ lx: 20, ly: -cur.bp.com[1] + 10, fx: 0, fy: 0.18 * G, t: 0.08 });
        this.emit({ type: 'hint', ent: cur });
      }
    } else this.knockT = 0;
    // (only on a house nobody has started: a borrowed balloon must never do the floating)
    if (this.idleT > 16 && !this.demo && !cur.balloons.length && this.time - (cur.demoT || -99) > 20) this.startDemo(cur);
  }

  startDemo(ent) {
    ent.demoDone = true;
    ent.demoT = this.time;
    const win = ent.bp.parts.window;
    const lx = (ent.bp.parts.chimney ? (ent.bp.parts.chimney.x0 + ent.bp.parts.chimney.x1) / 2 : win.x) - ent.bp.com[0];
    const bl = this.tieBalloon(ent, lx, ent.bp.topAt(lx + ent.bp.com[0]) - ent.bp.com[1] - 2, true);
    this.demo = { ent, balloon: bl, t: 0 };
  }

  updateDemo(dt) {
    const d = this.demo;
    if (!d) return;
    d.t += dt;
    const bl = d.balloon;
    if (d.ent.touched && !d.slipped) {
      // the child took over: the demo balloon simply stays like any other
      bl.demo = false;
      this.demo = null;
      return;
    }
    if (!d.slipped && !bl.inflating && d.t > 4.2) {
      // the loop slips off the roof: the house settles back, the balloon sails away
      d.slipped = true;
      const i = d.ent.balloons.indexOf(bl);
      if (i >= 0) d.ent.balloons.splice(i, 1);
      bl.anchor = null;
      bl.demo = false;
      this.sim.free.push(bl);
      this.emit({ type: 'slip', ent: d.ent, balloon: bl, x: bl.x, y: bl.y });
    }
    if (d.slipped && d.t > 9) this.demo = null;
  }

  // Debug/testing snapshot (only used with ?debug).
  snapshot() {
    const cur = this.current;
    return {
      phase: this.phase,
      index: this.curIndex,
      house: cur && cur.bp.id,
      state: cur && cur.state,
      balloons: cur ? cur.balloons.length : 0,
      loadFrac: cur ? +cur.loadFrac.toFixed(3) : 0,
      tilt: cur ? +cur.tilt.toFixed(3) : 0,
      alt: cur ? +(cur.body.y - cur.bp.com[1]).toFixed(1) : 0,
      keepsakes: this.keepsakes.length,
      departing: !!this.depart,
      finale: !!this.finale,
      page: !!this.page,
      cam: { x: +this.cam.x.toFixed(1), y: +this.cam.y.toFixed(1), zoom: +this.cam.zoom.toFixed(3) },
    };
  }

  // Screen position of a point on the current house (fractions of its bounds).
  houseScreenPoint(fx = 0, fy = 0.5) {
    const cur = this.current;
    const bp = cur.bp;
    const dx = bp.bounds.x0 + (fx + 0.5) * bp.bounds.w;
    const dy = bp.bounds.h * fy;
    const b = cur.body;
    const wx = b.wx(dx - bp.com[0], dy - bp.com[1]);
    const wy = b.wy(dx - bp.com[0], dy - bp.com[1]);
    return [this.cam.sx(wx), this.cam.sy(wy)];
  }
}
