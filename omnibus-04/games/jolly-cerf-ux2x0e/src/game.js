import * as THREE from 'three';
import { G } from './materials.js';
import { Surface, smoothstep } from './surface.js';
import { buildWorld } from './world.js';
import {
  makeScrubber, makeJanitor, makeHandle, placeHandle, poseJanitorArms, makeCart, makeSign, makeBall, makeFoam, Twin,
} from './actors.js';
import { makeNoiseTexture, mulberry32 } from './noise.js';
import { CamRig, smooth01 } from './camrig.js';
import { Audio } from './audio.js';
import {
  HW, H, Z_START, Z_END, PILLAR, DOOR_A, REVEAL_A, REVEAL_B, BALL_REST_A, BALL_REST_B, BRUSH_R, runLayout,
  HOLE_A, HOLE_B, SHAFT_H, SLOT_H,
} from './config.js';

const TOOL_R = BRUSH_R;
const BALL_R = 0.14;
const CART_HX = 0.29, CART_HZ = 0.51;
const X_LIM = HW - TOOL_R - 0.01;
const Z_MIN = Z_END + 0.45, Z_MAX = Z_START - 0.45;

const v3 = () => new THREE.Vector3();
const _a = v3(), _b = v3(), _c = v3();

function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
function angDiff(a, b) { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; }
function rotLocal(h, lx, lz) { return [lx * Math.cos(h) + lz * Math.sin(h), -lx * Math.sin(h) + lz * Math.cos(h)]; }

// Catmull-Rom through keyframes [x, h, z]
function pathPoint(pts, t) {
  const n = pts.length - 1;
  const f = clamp(t, 0, 1) * n;
  const i = Math.min(n - 1, Math.floor(f));
  const u = f - i;
  const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(n, i + 2)];
  const out = [0, 0, 0];
  for (let k = 0; k < 3; k++) {
    out[k] = 0.5 * ((2 * p1[k]) + (-p0[k] + p2[k]) * u + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * u * u + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * u * u * u);
  }
  return out;
}

export class Game {
  constructor(renderer) {
    this.renderer = renderer;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x121110);
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.05, 140);
    this.rig = new CamRig(this.camera);
    this.audio = new Audio();
    this.raycaster = new THREE.Raycaster();
    this.time = 0;
    this.frame = 0;
    this.events = [];

    this.noiseTex = makeNoiseTexture();
    this.surface = new Surface(this.noiseTex);
    this.scene.add(this.surface.mesh);

    this.upper = buildWorld('upper');
    this.scene.add(this.upper);
    this.lowerRoot = new THREE.Group();
    this.lowerRoot.scale.y = -1;
    this.lower = buildWorld('lower');
    this.lowerRoot.add(this.lower);
    this.scene.add(this.lowerRoot);

    this.scrubber = makeScrubber();
    this.janitor = makeJanitor();
    this.handle = makeHandle();
    this.cart = makeCart();
    this.sign = makeSign();
    this.ball = makeBall();
    for (const o of [this.scrubber, this.janitor, this.handle, this.cart, this.sign, this.ball]) this.scene.add(o);
    this.foam = makeFoam(110);
    this.scene.add(this.foam);
    this.foamFree = [];
    this.bubbles = [];
    this.twins = [this.scrubber, this.janitor, this.handle, this.cart, this.sign, this.ball].map(o => new Twin(o, this.scene));

    // invisible pick proxies for tappable things
    const pm = new THREE.MeshBasicMaterial({ visible: false });
    this.proxies = [];
    const addProxy = (name, geo, parent, x, y, z) => {
      const m = new THREE.Mesh(geo, pm);
      m.position.set(x, y, z);
      m.userData.pick = name;
      (parent || this.scene).add(m);
      this.proxies.push(m);
      return m;
    };
    addProxy('cart', new THREE.BoxGeometry(0.8, 1.2, 1.25), null, 0, 0.6, 0);
    addProxy('sign', new THREE.BoxGeometry(0.55, 0.9, 0.55), null, 0, 0.45, 0);
    addProxy('janitor', new THREE.BoxGeometry(0.62, 1.75, 0.55), null, 0, 0.88, 0);
    addProxy('door', new THREE.BoxGeometry(0.3, 2.1, 1.0), null, -HW, 1.05, -0.9);
    addProxy('door', new THREE.BoxGeometry(0.3, 2.1, 1.7), null, -HW, 1.05, DOOR_A.z);
    addProxy('door', new THREE.BoxGeometry(0.3, 2.1, 1.0), null, -HW, 1.05, -21.4);
    addProxy('door', new THREE.BoxGeometry(2.2, 2.2, 0.3), null, 0, 1.1, Z_START);
    addProxy('window', new THREE.BoxGeometry(0.3, 1.5, 5.2), null, HW, 1.6, -15.1);
    addProxy('locker', new THREE.BoxGeometry(0.2, 1.9, 10.4), null, -HW, 1.0, -7.3);
    addProxy('locker', new THREE.BoxGeometry(0.2, 1.9, 4.1), null, -HW, 1.0, -18.25);
    addProxy('clock', new THREE.BoxGeometry(0.9, 2.8, 0.9), null, PILLAR.x, 1.4, PILLAR.z);
    this.cartProxy = this.proxies[0];
    this.signProxy = this.proxies[1];
    this.janProxy = this.proxies[2];

    this.pointer = { active: false, id: null, sx: 0, sy: 0, x0: 0, y0: 0, t0: 0, moved: false, grab: null, hit: null, off: { x: 0, z: 0 }, tapObj: null };
    this.tapTarget = null;
    this.viewW = 1; this.viewH = 1;

    this.runIndex = 0;
    this.prevRoute = null;
    this.history = null;
    this.newRun();
  }

  // ---------------------------------------------------------------- run setup
  newRun() {
    const L = runLayout(this.runIndex, this.prevRoute);
    this.layout = L;
    this.surface.reset(L, 1000 + this.runIndex * 17, this.history);
    this.phase = this.runIndex === 0 ? 'intro' : 'clean';
    this.phaseTime = 0;
    this.runTime = 0;
    this.route = null;
    this.idle = 0;
    this.lastInput = this.time;
    this.stats = { scrubDist: 0, cleanTime: 0 };
    this.tool = { x: L.start.x, z: L.start.z, vx: 0, vz: 0, heading: 0, v: 1, sink: 0, progress: 0, spin: 0, lastBump: 0, speed: 0, dirtUnder: 1, held: 0 };
    this.jan = { x: L.start.x, z: L.start.z + 1.25, heading: 0, v: 1, walk: 0, lift: 0, dive: -1, lean: 0, wave: 0, hop: 0, lastStep: 0, speed: 0, tapT: -9 };
    this.cartS = { x: L.cart.x, z: L.cart.z, vx: 0, vz: 0, heading: L.cart.heading, av: 0, v: 1, charge: 0, sinkT: -1, attached: false, keysA: 0, keysV: 0, slosh: 0, sloshV: 0, speed: 0, dragged: false, lastJingle: 0, wheelRot: 0 };
    this.signS = { x: L.sign.x, z: L.sign.z, heading: 0.5, wob: 0, wobV: 0 };
    this.ballS = { state: 'hidden', side: -1, x: 0, z: 0, y: 0, vx: 0, vz: 0, vy: 0, charge: 0, pushes: 0, lastPush: 0, t: 0, path: null, rot: new THREE.Quaternion(), lastTap: 0, lastRipple: 0 };
    this.membrane = null;
    this.home = null;
    this.homeSamples = [];
    this.firstScrubT = -1;
    this.ending = null;
    this.night = null;
    this.cartReunited = false;
    this.symmetric = false;
    this.rig.side = 1;
    this.rig.mode = 'follow';
    G.uWarm.value = 0.55;
    G.uLamp.value = 0.45;
    G.uSunLower.value = 0.0;
    G.uLowerTint.value.setRGB(1.0, 0.97, 0.93);
    G.uSwitch.value.set(100, 1);
    this.chord = 0;
    this.mirrorDepth = 0;
    this.tintGoal = null;
    this.surface.uniforms.uSeeThrough.value = 0.07;
    this.ballS.rot.identity();
    if (this.rig.params) this.rig.snapTo(this.tool.x, this.tool.z);
    this.emit('run', { run: this.runIndex, layout: L });
  }

  emit(type, data = {}) {
    this.events.push({ type, t: +this.time.toFixed(2), rt: +this.runTime.toFixed(2), phase: this.phase, ...data });
    if (this.events.length > 400) this.events.shift();
  }

  setPhase(p) {
    if (this.phase === p) return;
    this.emit('phase', { from: this.phase, to: p });
    this.phase = p;
    this.phaseTime = 0;
  }

  resize(w, h) {
    this.viewW = w; this.viewH = h;
    this.rig.setAspect(w / h);
    if (!this.sized) { this.sized = true; this.rig.snapTo(this.tool.x, this.tool.z); }
  }

  inputLocked() {
    return this.phase === 'orbit' || this.phase === 'ending' || this.phase === 'night' || this.jan.dive >= 0;
  }

  // ---------------------------------------------------------------- input
  ndc(sx, sy) { return new THREE.Vector2((sx / this.viewW) * 2 - 1, -(sy / this.viewH) * 2 + 1); }

  floorHit(sx, sy, clampIt = true) {
    // a touch that misses the floor (above its horizon, or off-screen) slides down to the nearest point that hits it
    let p = null;
    for (let k = 0; k < 40 && !p; k++) {
      const yy = Math.min(this.viewH, sy + k * this.viewH * 0.025);
      this.raycaster.setFromCamera(this.ndc(Math.max(0, Math.min(this.viewW, sx)), Math.max(0, yy)), this.camera);
      const r = this.raycaster.ray;
      if (Math.abs(r.direction.y) < 1e-4) continue;
      const t = -r.origin.y / r.direction.y;
      if (t <= 0 || t > 60) continue;
      p = r.origin.clone().addScaledVector(r.direction, t);
    }
    if (!p) return null;
    if (clampIt) {
      p.x = clamp(p.x, -X_LIM, X_LIM);
      p.z = clamp(p.z, Z_MIN, Z_MAX);
    }
    return p;
  }

  project(x, y, z) {
    _a.set(x, y, z).project(this.camera);
    return { x: (_a.x * 0.5 + 0.5) * this.viewW, y: (-_a.y * 0.5 + 0.5) * this.viewH, behind: _a.z > 1 };
  }

  pick(sx, sy) {
    this.raycaster.setFromCamera(this.ndc(sx, sy), this.camera);
    const hits = this.raycaster.intersectObjects(this.proxies, false);
    for (const h of hits) {
      const name = h.object.userData.pick;
      const side = this.camSide();
      if (name === 'cart' && Math.sign(this.cartS.v) !== side) continue;
      if (name === 'sign' && side < 0) continue;
      if (name === 'janitor' && Math.sign(this.jan.v) !== side) continue;
      return name;
    }
    return null;
  }

  camSide() { return this.camera.position.y >= 0 ? 1 : -1; }

  onDown(id, sx, sy) {
    this.audio.unlock();
    this.lastInput = this.time;
    if (this.phase === 'ending' && this.ending && this.ending.settled) { this.startNight(); return; }
    if (this.pointer.active) return;
    if (this.phase === 'ending') {
      // the waving janitor still answers a tap
      this.react('janitor');
      return;
    }
    if (this.phase === 'intro') this.setPhase('clean');
    const P = this.pointer;
    P.active = true; P.id = id; P.sx = sx; P.sy = sy; P.x0 = sx; P.y0 = sy; P.t0 = this.time; P.moved = false;
    P.grab = null; P.tapObj = null; P.hit = null;
    if (this.inputLocked()) { P.grab = 'none'; return; }
    this.tapTarget = null;
    const hit = this.floorHit(sx, sy);
    // grabbing the scrubber itself?
    const t = this.tool;
    const c = this.project(t.x, 0.12 * t.v, t.z);
    const e = this.project(t.x + TOOL_R, 0.12 * t.v, t.z);
    const rpx = Math.hypot(e.x - c.x, e.y - c.y);
    const dpx = Math.hypot(sx - c.x, sy - c.y);
    if (dpx < Math.max(74, rpx * 1.35) || (hit && Math.hypot(hit.x - t.x, hit.z - t.z) < TOOL_R * 1.5)) {
      P.grab = 'tool';
      P.off.x = hit ? hit.x - t.x : 0;
      P.off.z = hit ? hit.z - t.z : 0;
      this.emit('grab', { what: 'tool' });
      return;
    }
    const picked = this.pick(sx, sy);
    if (picked === 'cart' && !this.cartS.attached && this.cartS.sinkT < 0) {
      P.grab = 'cart';
      P.off.x = hit ? hit.x - this.cartS.x : 0;
      P.off.z = hit ? hit.z - this.cartS.z : 0;
      P.tapObj = 'cart';
      this.emit('grab', { what: 'cart' });
      return;
    }
    if (picked) { P.tapObj = picked; P.grab = 'pending'; return; }
    P.grab = 'travel';
  }

  onMove(id, sx, sy) {
    const P = this.pointer;
    if (!P.active || P.id !== id) return;
    P.sx = sx; P.sy = sy;
    this.lastInput = this.time;
    if (!P.moved && Math.hypot(sx - P.x0, sy - P.y0) > 14) {
      P.moved = true;
      if (P.grab === 'pending') P.grab = 'travel';
    }
  }

  onUp(id, sx, sy, cancelled = false) {
    if (!cancelled) this.audio.unlock();
    const P = this.pointer;
    if (!P.active || P.id !== id) return;
    const quick = this.time - P.t0 < 0.45;
    if (!cancelled && !P.moved && quick) {
      if (P.tapObj) this.react(P.tapObj);
      else if (P.grab === 'travel') {
        const h = this.floorHit(sx, sy);
        if (h) this.tapTarget = { x: h.x, z: h.z };
      }
    }
    if (P.grab === 'cart') this.cartS.dragged = false;
    P.active = false; P.id = null; P.grab = null; P.hit = null;
  }

  // a finger that stayed down through a camera move picks the machine back up
  reacquirePointer() {
    const P = this.pointer;
    if (P.active && (P.grab === 'none' || P.grab === 'pending')) {
      P.grab = 'travel';
      P.moved = true;
      this.emit('reacquire');
    }
  }

  react(what) {
    const A = this.audio;
    this.emit('tap', { what });
    switch (what) {
      case 'cart': this.cartS.sloshV += 3; this.cartS.keysV += 4; A.slosh(); A.jingle(); break;
      case 'sign': this.signS.wobV += 5; A.clank(); break;
      case 'janitor':
        this.jan.tapT = this.time; A.whistle();
        // waiting at the edge of the liquid floor, a tap is enough for him to hop in
        if (this.phase === 'dive') this.jan.tapDive = true;
        break;
      case 'door': A.rattle(); A.knock(); break;
      case 'window': A.knock(); break;
      case 'locker': A.clank(); break;
      case 'clock': A.tick(); A.tick(); break;
      default: break;
    }
  }

  // ---------------------------------------------------------------- main update
  update(dt) {
    dt = Math.min(dt, 1 / 20);
    this.time += dt;
    this.runTime += dt;
    this.phaseTime += dt;
    G.uTime.value = this.time;

    const P = this.pointer;
    if (P.active && (P.grab === 'tool' || P.grab === 'travel' || P.grab === 'cart')) {
      P.hit = this.floorHit(P.sx, P.sy);
    }
    this.updateTool(dt);
    this.updateJanitor(dt);
    this.updateCart(dt);
    this.updateSign(dt);
    this.updateBall(dt);
    this.updatePhase(dt);
    this.updateFoam(dt);
    this.surface.update(dt);
    this.updateCamera(dt);
    this.syncVisuals(dt);
    const t = this.tool;
    this.audio.update({
      toolSpeed: t.speed,
      motorOn: this.phase !== 'intro' && !(this.ending && this.ending.t > 1.2) && this.phase !== 'night',
      contact: Math.abs(t.v) > 0.6 && t.speed > 0.05 ? 1 : 0,
      dirt: t.dirtUnder,
      wet: this.surface.sample(this.surface.wet, t.x, t.z),
      cartSpeed: this.cartS.speed,
      mirror: this.mirrorDepth,
      lights: G.uLightLevel.value,
      chord: this.chord,
    });
  }

  // ---------------------------------------------------------------- scrubber
  updateTool(dt) {
    const t = this.tool, P = this.pointer;
    let tx = null, tz = null, maxV = 2.4, stiff = 8;
    const locked = this.inputLocked() || this.phase === 'intro';
    if (!locked && P.active && P.hit) {
      if (P.grab === 'tool') {
        tx = P.hit.x - P.off.x; tz = P.hit.z - P.off.z;
        const k = Math.exp(-dt * 5); P.off.x *= k; P.off.z *= k;
        maxV = 3.4; stiff = 16;
      } else if (P.grab === 'travel') {
        tx = P.hit.x; tz = P.hit.z; maxV = 2.4; stiff = 8;
      }
    } else if (!locked && this.tapTarget) {
      tx = this.tapTarget.x; tz = this.tapTarget.z;
      if (Math.hypot(tx - t.x, tz - t.z) < 0.08) this.tapTarget = null;
    }
    if (tx !== null) {
      // phase-specific constraints on where the scrubber may go
      const c = this.constrainTool(tx, tz);
      tx = c[0]; tz = c[1];
      maxV *= c[2];
    }
    let dvx = 0, dvz = 0;
    if (tx !== null) {
      dvx = (tx - t.x) * stiff; dvz = (tz - t.z) * stiff;
      const s = Math.hypot(dvx, dvz);
      if (s > maxV) { dvx *= maxV / s; dvz *= maxV / s; }
    }
    const acc = 1 - Math.exp(-dt * 14);
    t.vx += (dvx - t.vx) * acc;
    t.vz += (dvz - t.vz) * acc;
    let nx = t.x + t.vx * dt, nz = t.z + t.vz * dt;

    // collisions
    const side = Math.sign(t.v) || 1;
    let bumped = 0;
    if (nx > X_LIM) { bumped = Math.max(bumped, t.vx); nx = X_LIM; t.vx = -Math.abs(t.vx) * 0.25; }
    if (nx < -X_LIM) { bumped = Math.max(bumped, -t.vx); nx = -X_LIM; t.vx = Math.abs(t.vx) * 0.25; }
    if (nz < Z_MIN) { bumped = Math.max(bumped, -t.vz); nz = Z_MIN; t.vz = Math.abs(t.vz) * 0.25; }
    if (nz > Z_MAX) { bumped = Math.max(bumped, t.vz); nz = Z_MAX; t.vz = -Math.abs(t.vz) * 0.25; }
    const pr = this.pushOutBox(nx, nz, PILLAR.x, PILLAR.z, PILLAR.hw + TOOL_R, PILLAR.hw + TOOL_R);
    if (pr) { bumped = Math.max(bumped, Math.hypot(t.vx, t.vz) * 0.7); nx = pr[0]; nz = pr[1]; t.vx *= 0.3; t.vz *= 0.3; }
    // pushing the cart (same side) or through the floor (other side, where the floor is clear)
    const cs = this.cartS;
    if (cs.sinkT < 0 && !cs.attached) {
      const sameSide = Math.sign(cs.v) === side;
      const clearUnder = this.surface.sample(this.surface.dirt, cs.x, cs.z) < 0.4;
      const through = !sameSide && this.phase === 'lower' && clearUnder;
      if (sameSide) {
        const pen = this.discVsCart(nx, nz, TOOL_R);
        if (pen) {
          const w = 0.75;
          cs.x += pen[0] * w; cs.z += pen[1] * w;
          nx -= pen[0] * (1 - w); nz -= pen[1] * (1 - w);
          cs.vx += (t.vx * 0.9 - cs.vx) * 0.5; cs.vz += (t.vz * 0.9 - cs.vz) * 0.5;
          cs.av += (pen[0] * (cs.z - nz) - pen[1] * (cs.x - nx)) * 6;
        }
      } else if (through && !cs.caught && this.discVsCart(nx, nz, TOOL_R * 0.9)) {
        // from the other side the brush catches the cart's wheels through the clear floor
        cs.caught = true;
        this.audio.thunkThrough(); this.audio.jingle();
        cs.keysV += 4;
        this.surface.addRipple(cs.x, cs.z, 0.9, this.time);
        this.emit('cartCaught');
      }
      if (cs.caught && !sameSide) this.onCartThroughContact(Math.hypot(nx - t.x, nz - t.z));
    }
    // knocking the caution sign
    if (side > 0) {
      const s = this.signS;
      const d = Math.hypot(nx - s.x, nz - s.z);
      if (d < TOOL_R + 0.2) {
        const push = TOOL_R + 0.2 - d;
        const ux = (s.x - nx) / (d || 1), uz = (s.z - nz) / (d || 1);
        s.x += ux * push; s.z += uz * push;
        s.wobV += Math.hypot(t.vx, t.vz) * 3;
        if (this.time - (s.lastClank || 0) > 0.4) { this.audio.clank(); s.lastClank = this.time; }
      }
    }
    if (bumped > 0.5 && this.time - t.lastBump > 0.25) {
      t.lastBump = this.time;
      this.audio.bump(Math.min(1.2, bumped / 2));
      this.rig.shake = Math.min(1, bumped / 2.5);
      this.emit('bump');
    }

    const dx = nx - t.x, dz = nz - t.z;
    const ds = Math.hypot(dx, dz);
    t.speed = ds / Math.max(dt, 1e-4);
    // clean along the path
    const contact = Math.abs(t.v) > 0.6 && this.phase !== 'intro';
    let lifted = 0;
    if (contact && ds > 1e-4) {
      const steps = Math.ceil(ds / 0.03);
      const ux = dx / ds, uz = dz / ds;
      for (let i = 1; i <= steps; i++) {
        const f = i / steps;
        lifted += this.surface.scrub(t.x + dx * f, t.z + dz * f, ux, uz, ds / steps, this.time, TOOL_R);
      }
      this.stats.scrubDist += ds;
      if (this.firstScrubT < 0 && lifted > 0.01) this.firstScrubT = this.runTime;
    } else if (contact && P.active && (P.grab === 'tool' || P.grab === 'travel')) {
      // held still: the brush keeps spinning and polishing in place
      this.surface.scrub(t.x, t.z, 0, 0, dt * 0.25, this.time, TOOL_R * 0.9, 0.8);
      t.held += dt;
    }
    t.x = nx; t.z = nz;
    t.dirtUnder = this.surface.sample(this.surface.dirt, t.x, t.z);
    t.spin += dt * (4 + t.speed * 10) * (this.phase === 'intro' ? 0.2 : 1);
    if (lifted > 0) this.spawnFoam(t, lifted, ds);
    // squeaks on polished floor when changing direction
    if (contact && t.speed > 0.4) {
      const pol = this.surface.sample(this.surface.polish, t.x, t.z);
      const turn = Math.abs(angDiff(t.lastDir ?? 0, Math.atan2(dx, dz)));
      if (pol > 0.35 && t.dirtUnder < 0.25 && (turn > 0.5 || Math.random() < dt * 0.6)) this.audio.squeak(pol);
      t.lastDir = Math.atan2(dx, dz);
    }
    // home = where the very first cleaning happened
    if (this.firstScrubT >= 0 && this.runTime - this.firstScrubT < 6 && lifted > 0.002) {
      this.homeSamples.push([t.x, t.z]);
    }
    if (!this.home && this.firstScrubT >= 0 && this.runTime - this.firstScrubT >= 6 && this.homeSamples.length) {
      let sx = 0, sz = 0;
      for (const [x, z] of this.homeSamples) { sx += x; sz += z; }
      this.home = { x: sx / this.homeSamples.length, z: sz / this.homeSamples.length };
      this.emit('home', this.home);
    }
    // surface tension ring around the tool when it presses on thin floor
    const mem = this.surface.sample(this.surface.mem, t.x, t.z);
    const pol = this.surface.sample(this.surface.polish, t.x, t.z);
    const thin = Math.max(mem, smoothstep(0.75, 1.0, pol) * 0.35);
    const pu = this.surface.uniforms.uPress.value;
    pu.set(t.x, t.z, TOOL_R + 0.05, thin * (0.5 + Math.min(1, t.speed)) + (this.phase === 'route' || this.phase === 'dive' ? t.sink * 0.6 : 0));
    if (thin > 0.3 && t.speed > 0.3 && Math.random() < dt * 6) this.surface.addRipple(t.x + (Math.random() - 0.5) * 0.3, t.z + (Math.random() - 0.5) * 0.3, 0.5 * thin, this.time);
  }

  constrainTool(tx, tz) {
    const m = this.membrane;
    if (this.phase === 'route' && m && this.tool.sink > 0.02) {
      // sinking: the membrane holds the tool a little
      return [tx, tz, 1 - 0.5 * this.tool.sink];
    }
    if (this.phase === 'dive' && m) {
      const X = m.X;
      const lim = m.kind === 'disc' ? 0.75 : 0.45;
      const dx = tx - X.x, dz = tz - X.z, d = Math.hypot(dx, dz);
      if (d > lim) { tx = X.x + dx / d * lim; tz = X.z + dz / d * lim; }
      return [tx, tz, 0.6];
    }
    return [tx, tz, 1];
  }

  pushOutBox(x, z, bx, bz, hx, hz) {
    const dx = x - bx, dz = z - bz;
    if (Math.abs(dx) >= hx || Math.abs(dz) >= hz) return null;
    const px = hx - Math.abs(dx), pz = hz - Math.abs(dz);
    if (px < pz) return [bx + Math.sign(dx || 1) * hx, z];
    return [x, bz + Math.sign(dz || 1) * hz];
  }

  // penetration vector pushing the cart away from a disc (in world xz)
  discVsCart(x, z, r) {
    const c = this.cartS;
    const [lx, lz] = rotLocal(-c.heading, x - c.x, z - c.z);
    const qx = clamp(lx, -CART_HX, CART_HX), qz = clamp(lz, -CART_HZ, CART_HZ);
    let ddx = lx - qx, ddz = lz - qz;
    let d = Math.hypot(ddx, ddz);
    let pen, nx, nz;
    if (d > 1e-5) {
      if (d >= r) return null;
      pen = r - d; nx = -ddx / d; nz = -ddz / d;
    } else {
      // centre inside the footprint
      const ex = CART_HX - Math.abs(lx), ez = CART_HZ - Math.abs(lz);
      if (ex < ez) { nx = -Math.sign(lx || 1); nz = 0; pen = ex + r; } else { nx = 0; nz = -Math.sign(lz || 1); pen = ez + r; }
    }
    const [wx, wz] = rotLocal(c.heading, nx * pen, nz * pen);
    return [wx, wz];
  }

  spawnFoam(t, lifted, ds) {
    const n = Math.min(4, Math.floor(lifted * 3 + Math.random()));
    const side = Math.sign(t.v) || 1;
    for (let i = 0; i < n; i++) {
      if (this.bubbles.length >= 110) this.bubbles.shift();
      const a = t.heading + Math.PI + (Math.random() - 0.5) * 2.6;
      const rr = TOOL_R * (0.9 + Math.random() * 0.2);
      this.bubbles.push({
        x: t.x - Math.sin(a) * rr, z: t.z - Math.cos(a) * rr,
        r: 0.012 + Math.random() * 0.028, life: 0, max: 1.0 + Math.random() * 1.4, side,
        vx: (Math.random() - 0.5) * 0.1, vz: (Math.random() - 0.5) * 0.1,
      });
    }
  }

  updateFoam(dt) {
    const m = new THREE.Matrix4();
    let n = 0;
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const b = this.bubbles[i];
      b.life += dt;
      if (b.life > b.max) { this.bubbles.splice(i, 1); continue; }
    }
    for (const b of this.bubbles) {
      b.x += b.vx * dt; b.z += b.vz * dt;
      const k = 1 - smoothstep(b.max * 0.5, b.max, b.life);
      const s = b.r * (0.4 + 0.6 * Math.min(1, b.life * 8)) * k;
      m.makeScale(s, s * 0.7 * b.side, s);
      m.setPosition(b.x, b.side * s * 0.45, b.z);
      this.foam.setMatrixAt(n++, m);
    }
    this.foam.count = n;
    this.foam.instanceMatrix.needsUpdate = true;
  }

  // ---------------------------------------------------------------- janitor
  updateJanitor(dt) {
    const j = this.jan, t = this.tool;
    if (j.dive >= 0) {
      j.dive = Math.min(1, j.dive + dt / 1.05);
      const d = j.dive;
      if (d < 0.25) { j.v = 1 - 0.14 * smoothstep(0, 0.25, d); j.lift = 0; }
      else if (d < 0.55) { const u = (d - 0.25) / 0.3; j.v = 0.86 + 0.14 * u; j.lift = Math.sin(u * Math.PI * 0.5) * 0.28; }
      else { const u = smooth01((d - 0.55) / 0.45); j.v = 1 - 2 * u; j.lift = 0.28 * (1 - u) * (1 - u); }
      if (d > 0.55 && !j.splashed) { j.splashed = true; this.surface.addRipple(j.x, j.z, 1.4, this.time); this.audio.splash(1.2); }
      if (d > 0.8 && !j.splashed2) { j.splashed2 = true; this.surface.addRipple(j.x + 0.2, j.z - 0.1, 1.0, this.time); }
      if (d >= 1) {
        j.dive = -1; j.v = -1; j.lift = 0;
        this.emit('janitorCrossed');
        this.startOrbit();
      }
      return;
    }
    if (this.phase === 'orbit') {
      // turn around together with the view
      return;
    }
    // like a real rotary machine: the operator mostly stays put and sweeps it in arcs,
    // stepping after it only when it pulls too far away (or pushes too close)
    let gx = j.x, gz = j.z;
    {
      const dx = j.x - t.x, dz = j.z - t.z;
      const d = Math.hypot(dx, dz) || 1e-3;
      const REACH = 1.42, NEAR = 0.95;
      if (d > REACH) { gx = t.x + dx / d * REACH; gz = t.z + dz / d * REACH; }
      else if (d < NEAR) { gx = t.x + dx / d * NEAR; gz = t.z + dz / d * NEAR; }
      // drift gently to stand behind the machine in the direction of play
      const pf = this.rig.fwd();
      const bx = t.x, bz = t.z - pf * 1.2;
      const k = this.pointer.active ? 0.35 : 0.8;
      gx += (bx - gx) * Math.min(1, dt * k); gz += (bz - gz) * Math.min(1, dt * k);
    }
    if (this.phase === 'dive' && this.membrane) {
      const X = this.membrane.X;
      if (this.pointer.active && (this.pointer.grab === 'tool' || this.pointer.grab === 'travel')) {
        j.pull = Math.min(1, (j.pull || 0) + dt * 0.55);
      } else {
        // without the child's drag the janitor just waits at the edge
        j.pull = Math.max(0, (j.pull || 0) - dt * 0.9);
      }
      if (j.tapDive) j.pull = 1;
      const pull = j.pull || 0;
      gx += (X.x - gx) * pull; gz += (X.z - gz) * pull;
      // step in when close enough
      if (Math.hypot(j.x - X.x, j.z - X.z) < 0.4 && pull > 0.6 && (this.pointer.active || j.tapDive)) {
        j.dive = 0; j.splashed = false; j.splashed2 = false; j.tapDive = false;
        this.emit('janitorDive');
        this.audio.whistle();
        this.pointer.grab = 'none';
        return;
      }
    }
    gx = clamp(gx, -HW + 0.3, HW - 0.3);
    gz = clamp(gz, Z_END + 0.35, Z_START - 0.35);
    const pr = this.pushOutBox(gx, gz, PILLAR.x, PILLAR.z, PILLAR.hw + 0.28, PILLAR.hw + 0.28);
    if (pr) { gx = pr[0]; gz = pr[1]; }
    const k = 1 - Math.exp(-dt * 7);
    let mx = (gx - j.x) * k, mz = (gz - j.z) * k;
    const maxStep = 3.2 * dt;
    const ms = Math.hypot(mx, mz);
    if (ms > maxStep) { mx *= maxStep / ms; mz *= maxStep / ms; }
    j.x += mx; j.z += mz;
    j.speed = Math.hypot(mx, mz) / Math.max(dt, 1e-4);
    // the machine faces away from the operator, its handle toward his hands
    if (this.phase !== 'orbit') {
      const ax = t.x - j.x, az = t.z - j.z;
      if (Math.hypot(ax, az) > 0.3) {
        const goal = Math.atan2(-ax, -az);
        t.heading += angDiff(t.heading, goal) * (1 - Math.exp(-dt * 9));
      }
    }
    // face the handle base
    const [bx, bz] = rotLocal(t.heading, 0, 0.3);
    const hx = t.x + bx - j.x, hz = t.z + bz - j.z;
    if (Math.hypot(hx, hz) > 0.2) {
      const goal = Math.atan2(-hx, -hz);
      j.heading += angDiff(j.heading, goal) * (1 - Math.exp(-dt * 8));
    }
    const prev = Math.sin(j.walk);
    j.walk += dt * Math.min(12, j.speed * 7.5);
    if (j.speed < 0.05) j.walk += angDiff(j.walk % Math.PI, 0) * 0; // settle
    const now = Math.sin(j.walk);
    if (prev * now < 0 && j.speed > 0.2) {
      const wet = this.surface.sample(this.surface.wet, j.x, j.z);
      this.audio.step(wet > 0.25);
      if (wet > 0.3 && Math.sign(j.v) > 0) {
        const s = now > 0 ? 1 : -1;
        const [ox, oz] = rotLocal(j.heading, s * 0.1, 0);
        this.surface.smudge(j.x + ox, j.z + oz, 0.05, 0.11, 0.22, j.heading);
      }
    }
    const target = this.phase === 'dive' ? 0.55 : Math.min(0.25, t.speed * 0.08);
    j.lean += (target - j.lean) * (1 - Math.exp(-dt * 4));
    // happy hop after tapping or reuniting
    const since = this.time - j.tapT;
    j.lift = since < 0.5 ? Math.sin((since / 0.5) * Math.PI) * 0.12 : 0;
  }

  // ---------------------------------------------------------------- cart
  updateCart(dt) {
    const c = this.cartS, P = this.pointer, j = this.jan;
    const px = c.x, pz = c.z;
    if (c.sinkT >= 0) {
      c.sinkT = Math.min(1, c.sinkT + dt / 1.2);
      const u = smooth01(c.sinkT);
      c.v = 1 - 2 * u;
      if (c.sinkT >= 1) {
        c.sinkT = -1; c.v = -1; c.attached = true;
        this.cartReunited = true;
        this.jan.tapT = this.time;
        this.audio.happy(); this.audio.jingle();
        this.surface.addRipple(c.x, c.z, 1.0, this.time);
        this.emit('cartReunited', { x: +c.x.toFixed(2), z: +c.z.toFixed(2) });
      }
    } else if (c.attached) {
      // rolls along beside the janitor
      const [ox, oz] = rotLocal(j.heading, 0.78, 0.25);
      const gx = clamp(j.x + ox, -HW + 0.32, HW - 0.32), gz = clamp(j.z + oz, Z_END + 0.6, Z_START - 0.6);
      const k = 1 - Math.exp(-dt * 5);
      c.x += (gx - c.x) * k; c.z += (gz - c.z) * k;
      c.heading += angDiff(c.heading, j.heading) * (1 - Math.exp(-dt * 4));
    } else if (c.caught) {
      const t = this.tool;
      if (this.surface.sample(this.surface.dirt, c.x, c.z) > 0.45 || Math.hypot(t.x - c.x, t.z - c.z) > 1.6) {
        // grime between them breaks the hold
        c.caught = false; c.vx = t.vx * 0.3; c.vz = t.vz * 0.3;
        this.audio.thunkThrough();
        this.emit('cartLost');
      } else {
        const k = 1 - Math.exp(-dt * 6);
        const ox = c.x, oz = c.z;
        c.x += (t.x - c.x) * k; c.z += (t.z - c.z) * k;
        c.vx = (c.x - ox) / Math.max(dt, 1e-4); c.vz = (c.z - oz) / Math.max(dt, 1e-4);
        const sp = Math.hypot(c.vx, c.vz);
        if (sp > 0.3) {
          const goal = Math.atan2(-c.vx, -c.vz);
          const diff = angDiff(c.heading, goal);
          const g2 = Math.abs(diff) < 1.6 ? goal : goal + Math.PI;
          c.heading += angDiff(c.heading, g2) * (1 - Math.exp(-dt * 2.5));
        }
      }
    } else if (P.active && P.grab === 'cart' && P.hit && Math.sign(c.v) === this.camSide()) {
      c.dragged = true;
      const tx = P.hit.x - P.off.x, tz = P.hit.z - P.off.z;
      let vx = (tx - c.x) * 7, vz = (tz - c.z) * 7;
      const s = Math.hypot(vx, vz);
      if (s > 2.2) { vx *= 2.2 / s; vz *= 2.2 / s; }
      c.vx += (vx - c.vx) * (1 - Math.exp(-dt * 10));
      c.vz += (vz - c.vz) * (1 - Math.exp(-dt * 10));
      if (s > 0.3) {
        const goal = Math.atan2(-c.vx, -c.vz);
        const diff = angDiff(c.heading, goal);
        const g2 = Math.abs(diff) < 1.6 ? goal : goal + Math.PI;
        c.heading += angDiff(c.heading, g2) * (1 - Math.exp(-dt * 2.5));
      }
      c.x += c.vx * dt; c.z += c.vz * dt;
    } else {
      c.x += c.vx * dt; c.z += c.vz * dt;
      c.heading += c.av * dt;
      const f = Math.exp(-dt * 2.4);
      c.vx *= f; c.vz *= f; c.av *= Math.exp(-dt * 4);
    }
    // stay in the corridor, off the pillar
    const ext = 0.52;
    if (c.x > HW - ext + 0.2) { c.x = HW - ext + 0.2; c.vx = -Math.abs(c.vx) * 0.3; }
    if (c.x < -HW + ext - 0.2) { c.x = -HW + ext - 0.2; c.vx = Math.abs(c.vx) * 0.3; }
    c.z = clamp(c.z, Z_END + 0.65, Z_START - 0.65);
    const pr = this.pushOutBox(c.x, c.z, PILLAR.x, PILLAR.z, PILLAR.hw + 0.34, PILLAR.hw + 0.55);
    if (pr) { c.x = pr[0]; c.z = pr[1]; c.vx *= -0.2; c.vz *= -0.2; }
    // janitor can't walk through it (same side)
    if (!c.attached && Math.sign(c.v) === Math.sign(j.v) && j.dive < 0) {
      const pen = this.discVsCart(j.x, j.z, 0.25);
      if (pen) { j.x -= pen[0]; j.z -= pen[1]; }
    }
    const moved = Math.hypot(c.x - px, c.z - pz);
    c.speed = moved / Math.max(dt, 1e-4);
    c.wheelRot += moved / 0.055;
    // keys and bucket respond to acceleration
    const ax = (c.speed - (c.prevSpeed || 0)) / Math.max(dt, 1e-4);
    c.prevSpeed = c.speed;
    c.keysV += (-c.keysA * 40 - c.keysV * 2.5) * dt + clamp(ax, -20, 20) * dt * 0.8;
    c.keysA += c.keysV * dt;
    c.sloshV += (-c.slosh * 30 - c.sloshV * 3) * dt + clamp(ax, -20, 20) * dt * 0.5;
    c.slosh += c.sloshV * dt;
    if (Math.abs(ax) > 6 && this.time - c.lastJingle > 0.6) { c.lastJingle = this.time; this.audio.jingle(); }
  }

  onCartThroughContact(ds) {
    // scrubbing right under the cart from the other side thins the floor there
    if (this.phase !== 'lower' || this.cartS.attached || this.cartS.sinkT >= 0) return;
    const c = this.cartS;
    c.charge += ds;
    if (ds > 0.004 && this.time - (c.lastThunk || 0) > 0.5) { c.lastThunk = this.time; c.keysV += 1.5; this.surface.addRipple(c.x, c.z, 0.5, this.time); }
  }

  updateSign(dt) {
    const s = this.signS;
    s.wobV += (-s.wob * 55 - s.wobV * 4.5) * dt;
    s.wob += s.wobV * dt;
    s.wob = clamp(s.wob, -0.7, 0.7);
    s.x = clamp(s.x, -HW + 0.25, HW - 0.25);
    s.z = clamp(s.z, Z_END + 0.3, Z_START - 0.3);
  }

  // ---------------------------------------------------------------- ball
  startBall(route) {
    const b = this.ballS;
    b.state = 'emerging'; b.t = 0; b.side = -1;
    if (route === 'A') {
      // drops out of the open hatch, falls the length of the shaft, bounces, rolls away
      const xc = (HOLE_A.x0 + HOLE_A.x1) / 2, zc = (HOLE_A.z0 + HOLE_A.z1) / 2;
      b.path = [[xc + 0.1, H + SHAFT_H - 0.5, zc + 0.2], [xc + 0.05, H + 1.6, zc + 0.05], [xc, H * 0.35, zc - 0.1], [xc - 0.02, 0.0, zc - 0.3],
        [xc - 0.05, 0.55, zc - 1.0], [xc - 0.1, 0.0, zc - 1.7], [-1.1, 0.18, zc - 2.7], [-1.05, 0.0, zc - 3.8], [BALL_REST_A.x, 0.0, BALL_REST_A.z]];
      b.dur = 4.2;
    } else {
      // rolls along the corridor beyond the slot, then drops through it
      const xc = (HOLE_B.x0 + HOLE_B.x1) / 2;
      b.path = [[1.35, H, HOLE_B.z1 + 1.0], [1.2, H, HOLE_B.z1 - 0.6], [xc, H, HOLE_B.z1 - 1.6], [xc - 0.05, H * 0.45, HOLE_B.z1 - 2.2], [xc - 0.08, 0.0, HOLE_B.z1 - 2.6],
        [xc - 0.1, 0.5, HOLE_B.z1 - 3.4], [0.95, 0.0, HOLE_B.z1 - 4.1], [1.0, 0.16, HOLE_B.z1 - 5.4], [BALL_REST_B.x, 0.0, BALL_REST_B.z]];
      b.dur = 4.6;
    }
    const p = pathPoint(b.path, 0);
    b.x = p[0]; b.y = p[1]; b.z = p[2];
    this.audio.ballBounce(0.6);
    this.emit('ballOut', { route });
  }

  updateBall(dt) {
    const b = this.ballS;
    if (b.state === 'hidden') return;
    const px = b.x, pz = b.z, py = b.y;
    if (b.state === 'emerging') {
      b.t = Math.min(1, b.t + dt / b.dur);
      const e = 1 - Math.pow(1 - b.t, 1.6);
      const p = pathPoint(b.path, e);
      b.x = p[0]; b.y = Math.max(0, p[1]); b.z = p[2];
      if (py > 0.05 && b.y <= 0.02) { this.audio.ballBounce(0.6, this.camSide() !== b.side); }
      if (b.t >= 1) { b.state = 'free'; b.vx = 0; b.vz = 0; b.y = 0; }
    } else if (b.state === 'popping') {
      b.t += dt / 0.3;
      b.y = 0;
      const wy = -BALL_R + 2 * BALL_R * smooth01(b.t);
      b.popY = wy;
      if (b.t >= 1) {
        b.state = 'free'; b.side = 1; b.y = 0.02; b.vy = 3.1; b.popY = null;
        b.vx = (Math.random() - 0.5) * 0.6; b.vz = -0.5;
        this.emit('ballPopped', { x: +b.x.toFixed(2), z: +b.z.toFixed(2) });
      }
    } else if (b.state === 'free') {
      // vertical bounce (in its own world)
      if (b.y > 0 || b.vy > 0) {
        b.vy -= 9.8 * dt;
        b.y += b.vy * dt;
        if (b.y <= 0) {
          b.y = 0;
          if (b.vy < -0.6) { this.audio.ballBounce(Math.min(1, -b.vy / 3), this.camSide() !== b.side); b.vy = -b.vy * 0.5; } else b.vy = 0;
        }
      }
      // floating on the membrane: bob
      const mem = this.surface.sample(this.surface.mem, b.x, b.z);
      b.x += b.vx * dt; b.z += b.vz * dt;
      // grime is sticky: a rolling ball stops at the edge of the polished floor
      const grime = this.surface.sample(this.surface.dirt, b.x, b.z);
      const fr = Math.exp(-dt * (mem > 0.4 ? 1.6 : 0.9 + smoothstep(0.25, 0.6, grime) * 5.0));
      b.vx *= fr; b.vz *= fr;
      const lim = HW - BALL_R;
      const farB = this.camSide() !== b.side;
      if (b.x > lim) { b.x = lim; if (b.vx > 0.4) this.audio.ballBounce(0.4, farB); b.vx = -Math.abs(b.vx) * 0.7; }
      if (b.x < -lim) { b.x = -lim; if (b.vx < -0.4) this.audio.ballBounce(0.4, farB); b.vx = Math.abs(b.vx) * 0.7; }
      if (b.z < Z_END + BALL_R) { b.z = Z_END + BALL_R; b.vz = Math.abs(b.vz) * 0.7; }
      if (b.z > Z_START - BALL_R) { b.z = Z_START - BALL_R; b.vz = -Math.abs(b.vz) * 0.7; }
      const pr = this.pushOutBox(b.x, b.z, PILLAR.x, PILLAR.z, PILLAR.hw + BALL_R, PILLAR.hw + BALL_R);
      if (pr) { if (pr[0] !== b.x) b.vx *= -0.7; else b.vz *= -0.7; b.x = pr[0]; b.z = pr[1]; }
      // the scrubber touches it — directly on the same side, or through clear floor
      const t = this.tool;
      const tSide = Math.sign(t.v) || 1;
      const same = tSide === b.side;
      const clear = this.surface.sample(this.surface.dirt, b.x, b.z) < 0.35;
      const d = Math.hypot(b.x - t.x, b.z - t.z);
      const R = TOOL_R + BALL_R;
      if (d < R && Math.abs(t.v) > 0.6 && (same || clear) && b.y < 0.2) {
        const nx = (b.x - t.x) / (d || 1), nz = (b.z - t.z) / (d || 1);
        b.x = t.x + nx * R; b.z = t.z + nz * R;
        const vn = t.vx * nx + t.vz * nz;
        b.vx += nx * (Math.max(0, vn) * 1.0 + 0.45) + t.vx * 0.15;
        b.vz += nz * (Math.max(0, vn) * 1.0 + 0.45) + t.vz * 0.15;
        const sp = Math.hypot(b.vx, b.vz);
        if (sp > 2.6) { b.vx *= 2.6 / sp; b.vz *= 2.6 / sp; }
        if (this.time - b.lastPush > 0.25) {
          b.lastPush = this.time;
          b.pushes++;
          if (same) this.audio.ballBounce(0.7); else this.audio.thunkThrough();
          this.surface.addRipple(t.x + nx * TOOL_R, t.z + nz * TOOL_R, same ? 0.3 : 0.8, this.time);
          this.emit('ballPush', { through: !same });
        }
      }
      if (!same && this.phase === 'boundary' && d < 1.0 && t.speed > 0.1 && Math.abs(t.v) > 0.6 && b.state === 'free') {
        b.charge += t.speed * dt * (clear ? 1.0 : 0.6);
      }
      // pressing up against the floor from the other side
      if (!same && b.charge > 0.5 && this.time - b.lastRipple > 0.55) {
        b.lastRipple = this.time;
        this.surface.addRipple(b.x, b.z, Math.min(1.2, b.charge / 3), this.time);
      }
    }
    // rolling rotation
    const mx = b.x - px, mz = b.z - pz;
    const dist = Math.hypot(mx, mz);
    if (dist > 1e-5) {
      const q = new THREE.Quaternion().setFromAxisAngle(_a.set(mz / dist, 0, -mx / dist), dist / BALL_R);
      b.rot.premultiply(q);
    }
  }

  // ---------------------------------------------------------------- phases
  updatePhase(dt) {
    const s = this.surface;
    switch (this.phase) {
      case 'intro':
        // idle invitation: the machine jiggles and drips
        if (this.phaseTime > 2 && Math.random() < dt * 0.6) this.surface.addRipple(this.tool.x + 0.25, this.tool.z - 0.2, 0.2, this.time);
        break;
      case 'clean': {
        if (!this.route && (this.frame++ % 12 === 0)) {
          const a = s.coverage(REVEAL_A), b = s.coverage(REVEAL_B);
          this.covA = a; this.covB = b;
          if (a >= 0.25 || b >= 0.25) this.commitRoute(a >= b ? 'A' : 'B');
          // assistance: the mirror corridor's lights spill further while it waits
          const wait = Math.max(0, this.phaseTime - 35);
          G.uWarm.value = Math.min(1.6, 0.55 + wait * 0.03);
          G.uLamp.value = Math.min(1.4, 0.45 + wait * 0.03);
        }
        break;
      }
      case 'window': {
        const b = this.ballS;
        if (b.state === 'free') {
          const seen = s.cleanIn(b.x, b.z, 0.3);
          if (seen >= 0.4 || b.pushes > 0) {
            this.setPhase('boundary');
            b.pushes = Math.min(b.pushes, 1); b.charge = 0;
            this.emit('ballFound', { x: +b.x.toFixed(2), z: +b.z.toFixed(2) });
            this.surface.addRipple(b.x, b.z, 0.8, this.time);
            this.audio.tap();
          } else if (this.phaseTime > 14 && this.time - (b.lastNudge || 0) > 7) {
            // assistance: the ball settles toward the nearest clear patch
            b.lastNudge = this.time;
            const best = this.nearestClear(b.x, b.z, 2.6);
            if (best) {
              const dx = best[0] - b.x, dz = best[1] - b.z, d = Math.hypot(dx, dz);
              b.vx += dx / d * Math.min(1.6, d * 1.1); b.vz += dz / d * Math.min(1.6, d * 1.1);
              this.audio.ballBounce(0.25);
              this.emit('assist', { what: 'ballSettle' });
            }
          }
        }
        break;
      }
      case 'boundary': {
        const b = this.ballS;
        if (b.state === 'free' && b.side < 0) {
          const need = this.phaseTime > 25 ? 2.2 : 3.0;
          if (b.charge >= need && b.pushes >= 2 && this.phaseTime > 7 && Math.hypot(b.vx, b.vz) < 1.6 && s.sample(s.dirt, b.x, b.z) < 0.45) {
            b.state = 'popping'; b.t = 0;
            this.audio.blup(1); this.audio.splash(0.8);
            this.surface.addRipple(b.x, b.z, 1.6, this.time);
            this.emit('ballPop');
          } else if (this.phaseTime > 10 && this.time - b.lastPush > 8 && this.time - b.lastTap > 3) {
            // assistance: it taps the floor from underneath
            b.lastTap = this.time;
            this.surface.addRipple(b.x, b.z, 1.0, this.time);
            this.audio.tap();
            const t = this.tool, d = Math.hypot(t.x - b.x, t.z - b.z);
            if (d < 2.2 && d > 0.6) { b.vx += (t.x - b.x) / d * 0.5; b.vz += (t.z - b.z) / d * 0.5; }
          }
        }
        if (b.side > 0 && b.state === 'free') this.startMembrane();
        break;
      }
      case 'route': this.updateRoute(dt); break;
      case 'dive': break;
      case 'orbit': this.updateOrbitPhase(dt); break;
      case 'lower': this.updateLower(dt); break;
      case 'ending': this.updateEnding(dt); break;
      case 'night': this.updateNight(dt); break;
      default: break;
    }
    // the other corridor's light grows a little warmer once it has been noticed
    if (this.tintGoal && this.phase !== 'ending' && this.phase !== 'night') G.uLowerTint.value.lerp(this.tintGoal, 1 - Math.exp(-dt * 0.5));
    // mirror depth drives the doubled acoustics
    const depthGoal = { intro: 0, clean: 0.05, window: 0.3, boundary: 0.45, route: 0.65, dive: 0.8, orbit: 1, lower: 1, ending: 1, night: 0.5 }[this.phase] ?? 0;
    this.mirrorDepth += (depthGoal - this.mirrorDepth) * (1 - Math.exp(-dt * 0.8));
  }

  nearestClear(x, z, maxR) {
    let best = null, bd = 1e9;
    for (let r = 0.3; r <= maxR; r += 0.2) {
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
        const cx = x + Math.cos(a) * r, cz = z + Math.sin(a) * r;
        if (Math.abs(cx) > HW - 0.2) continue;
        if (this.surface.cleanIn(cx, cz, 0.18) > 0.7) {
          const d = r;
          if (d < bd) { bd = d; best = [cx, cz]; }
        }
      }
      if (best) return best;
    }
    return best;
  }

  commitRoute(route) {
    this.route = route;
    this.emit('route', { route, covA: +(this.covA || 0).toFixed(2), covB: +(this.covB || 0).toFixed(2) });
    this.setPhase('window');
    if (route === 'A') G.uWarm.value = 1.7; else G.uLamp.value = 1.5;
    this.tintGoal = new THREE.Color(1.05, 0.975, 0.87);
    this.startBall(route);
  }

  startMembrane() {
    const b = this.ballS;
    const kind = this.route === 'A' ? 'disc' : 'arc';
    const m = { kind, grow: 0, cx: b.x, cz: b.z };
    if (kind === 'disc') {
      m.r = 1.05;
      m.cx = clamp(b.x, -HW + 0.75, HW - 0.75);
      m.cz = clamp(b.z, Z_END + 1.3, Z_START - 1.5);
      m.X = { x: m.cx, z: m.cz };
    } else {
      // a narrow curved strip that bends from where the ball came up toward a wall
      const P = { x: clamp(b.x, -HW + 0.5, HW - 0.5), z: clamp(b.z, Z_END + 2.0, Z_START - 1.5) };
      const turn = P.x < 0.0 ? 1 : -1; // bend toward the far wall
      const R = Math.min(1.3, Math.max(0.7, (turn > 0 ? (HW - 0.45) - P.x : P.x - (-HW + 0.45))));
      m.C = { x: P.x + turn * R, z: P.z };
      m.R = R; m.turn = turn; m.w = 0.27;
      m.a0 = turn > 0 ? Math.PI : 0;
      m.sweep = turn > 0 ? Math.PI / 2 : -Math.PI / 2;
      const aEnd = m.a0 + m.sweep;
      m.X = { x: m.C.x + Math.cos(aEnd) * R, z: m.C.z + Math.sin(aEnd) * R };
      m.start = P;
    }
    this.membrane = m;
    this.tool.sink = 0; this.tool.progress = 0;
    this.setPhase('route');
    this.audio.wub();
    this.emit('membrane', { kind, X: { x: +m.X.x.toFixed(2), z: +m.X.z.toFixed(2) } });
  }

  membraneShape(x, z, grow) {
    const m = this.membrane;
    if (m.kind === 'disc') {
      const d = Math.hypot(x - m.cx, z - m.cz);
      const r = m.r * grow;
      return 1 - smoothstep(r * 0.72, r, d);
    }
    const s = this.arcParam(x, z);
    if (s.t > grow) return 0;
    const w = m.w * (0.7 + 0.5 * s.t);
    return (1 - smoothstep(w * 0.55, w, s.d));
  }

  arcParam(x, z) {
    const m = this.membrane;
    const dx = x - m.C.x, dz = z - m.C.z;
    const r = Math.hypot(dx, dz);
    let a = Math.atan2(dz, dx);
    let rel = angDiff(m.a0, a) / m.sweep; // 0..1 along the arc
    let d = Math.abs(r - m.R);
    if (rel < 0) { d = Math.hypot(x - m.start.x, z - m.start.z); rel = 0; }
    if (rel > 1) { d = Math.hypot(x - m.X.x, z - m.X.z); rel = 1; }
    return { t: rel, d };
  }

  updateRoute(dt) {
    const m = this.membrane, s = this.surface, t = this.tool;
    if (m.grow < 1) {
      m.grow = Math.min(1, m.grow + dt / 1.4);
      const pad = (m.kind === 'disc' ? m.r : m.R + 0.5) + 0.3;
      const cx = m.kind === 'disc' ? m.cx : m.C.x, cz = m.kind === 'disc' ? m.cz : m.C.z;
      s.paintMembrane((x, z) => this.membraneShape(x, z, m.grow), cx - pad, cx + pad, cz - pad, cz + pad);
      if (Math.random() < 0.3) s.addRipple(m.X.x + (Math.random() - 0.5), m.X.z + (Math.random() - 0.5), 0.6, this.time);
    }
    // gentle living ripple
    if (Math.random() < dt * 1.2) s.addRipple(m.X.x + (Math.random() - 0.5) * 0.6, m.X.z + (Math.random() - 0.5) * 0.6, 0.35, this.time);
    const P = this.pointer;
    const dragging = P.active && (P.grab === 'tool' || P.grab === 'travel');
    const mem = s.sample(s.mem, t.x, t.z);
    const moved = dragging ? t.speed * dt : 0;
    // while it forms, the new surface is taut and nudges the machine back to its rim
    const settled = m.grow >= 1 && this.phaseTime > 3.4;
    if (!settled) {
      if (mem > 0.3) {
        let nx, nz;
        if (m.kind === 'disc') { nx = t.x - m.cx; nz = t.z - m.cz; } else {
          const ap = this.arcParam(t.x, t.z);
          nx = t.x - m.C.x; nz = t.z - m.C.z;
          if (Math.hypot(nx, nz) < m.R) { nx = -nx; nz = -nz; }
          if (ap.t <= 0 || ap.t >= 1) { nx = t.x - m.X.x; nz = t.z - m.X.z; }
        }
        const l = Math.hypot(nx, nz) || 1;
        t.x += nx / l * dt * 1.1 * mem; t.z += nz / l * dt * 1.1 * mem;
        if (Math.random() < dt * 8) s.addRipple(t.x, t.z, 0.5, this.time);
      }
      t.progress = 0;
    } else if (m.kind === 'disc') {
      if (mem > 0.45) {
        t.progress += moved * 0.55 + (dragging ? dt * 0.05 : 0);
      } else if (t.sink < 0.5) {
        t.progress = Math.max(0, t.progress - dt * 0.8);
      }
      t.sink = clamp(t.progress / 1.35, 0, 1);
    } else {
      const ap = this.arcParam(t.x, t.z);
      const inside = ap.d < m.w * 1.25 && mem > 0.25 && settled;
      if (inside && moved > 0) {
        // must follow the curve: only progress along it counts
        t.progress = Math.max(t.progress, Math.min(ap.t, t.progress + moved * 0.9));
      } else if (!inside && t.sink < 0.5) {
        t.progress = Math.max(0, t.progress - dt * 0.4);
      }
      t.sink = clamp(t.progress / 0.95, 0, 1);
    }
    const prevV = t.v;
    t.v = 1 - 2 * smooth01(t.sink);
    if (prevV > 0 && t.v <= 0) { this.audio.blup(0.8); s.addRipple(t.x, t.z, 1.2, this.time); this.emit('toolFlat'); }
    if (t.sink > 0.02 && Math.random() < dt * 5) s.addRipple(t.x, t.z, 0.4 + t.sink, this.time);
    // assistance: when near and dragging, the membrane draws the tool a little
    const dX = Math.hypot(m.X.x - t.x, m.X.z - t.z);
    if (settled && dragging && dX < 1.9 && t.sink < 0.2 && m.kind === 'disc') {
      t.x += (m.X.x - t.x) * dt * 0.25; t.z += (m.X.z - t.z) * dt * 0.25;
    }
    if (t.sink >= 1) {
      t.v = -1;
      this.setPhase('dive');
      this.jan.pull = 0;
      this.audio.splash(0.7);
      this.emit('toolCrossed');
    }
  }

  startOrbit() {
    this.setPhase('orbit');
    const j = this.jan;
    this.orbitHead0 = this.tool.heading;
    this.orbitJ0 = { x: j.x, z: j.z };
    this.orbitT0 = { x: this.tool.x, z: this.tool.z };
    this.rig.startOrbit(new THREE.Vector3(j.x, 0, j.z));
    this.audio.whoosh(4.0);
    this.pointer.grab = 'none';
    this.tapTarget = null;
  }

  updateOrbitPhase(dt) {
    const t = this.tool, j = this.jan;
    const e = smooth01(this.rig.orbit ? this.rig.orbit.t : 1);
    // janitor and machine turn around to face the way home
    const goal = Math.PI;
    t.heading = this.orbitHead0 + angDiff(this.orbitHead0, goal) * e;
    const fx = -Math.sin(t.heading), fz = -Math.cos(t.heading);
    const gx = this.orbitJ0.x + fx * 0.6, gz = this.orbitJ0.z + fz * 0.6;
    t.x = this.orbitT0.x + (gx - this.orbitT0.x) * e;
    t.z = this.orbitT0.z + (gz - this.orbitT0.z) * e;
    j.x = this.orbitJ0.x + ((gx - fx * 1.22) - this.orbitJ0.x) * e;
    j.z = this.orbitJ0.z + ((gz - fz * 1.22) - this.orbitJ0.z) * e;
    j.heading = t.heading;
    j.speed = 0.5; j.walk += dt * 4;
    if (this.rig.mode === 'follow') {
      this.setPhase('lower');
      this.emit('lowerWorld');
      this.jan.pull = 0;
      this.reacquirePointer();
    }
  }

  updateLower(dt) {
    const c = this.cartS, t = this.tool, s = this.surface;
    // grime is a thin film: from this side the shapes beyond it show faintly through
    s.uniforms.uSeeThrough.value += (0.13 - s.uniforms.uSeeThrough.value) * (1 - Math.exp(-dt));
    if (!c.attached && c.sinkT < 0 && Math.sign(c.v) > 0) {
      const need = this.phaseTime > 35 ? 2.0 : 3.0;
      if (c.caught && c.charge >= need && s.sample(s.dirt, c.x, c.z) < 0.4) {
        c.sinkT = 0; c.caught = false;
        this.audio.blup(0.6); this.audio.splash(1.0);
        s.addRipple(c.x, c.z, 1.5, this.time);
        s.paintMembrane((x, z) => 1 - smoothstep(0.55, 0.85, Math.hypot(x - c.x, z - c.z)), c.x - 1, c.x + 1, c.z - 1, c.z + 1);
        this.emit('cartSink');
      } else if (c.charge > 0.8 && Math.random() < dt * 2) {
        s.addRipple(c.x + (Math.random() - 0.5) * 0.5, c.z + (Math.random() - 0.5) * 0.8, 0.5, this.time);
      }
      // assistance: the keys jingle now and then so the eye finds the cart
      if (this.phaseTime > 8 && this.time - c.lastJingle > 5) {
        c.lastJingle = this.time; c.keysV += 5; this.audio.jingle();
      }
      // a cart left far away slowly rolls toward the janitor (it still has to be pulled through)
      const far = Math.hypot(c.x - t.x, c.z - t.z);
      if (this.phaseTime > 18 && far > 4.5 && !this.pointer.active && !c.caught) {
        const dz = t.z - c.z, dx = t.x - c.x;
        c.vx += (dx / far) * dt * 0.6; c.vz += (dz / far) * dt * 0.6;
        const sp = Math.hypot(c.vx, c.vz);
        if (sp > 0.5) { c.vx *= 0.5 / sp; c.vz *= 0.5 / sp; }
        if (!c.drifting) { c.drifting = true; this.emit('assist', { what: 'cartDrift' }); }
      }
    }
    if (this.cartReunited && this.home) {
      const d = Math.hypot(t.x - this.home.x, t.z - this.home.z);
      if (d < 1.3) this.startEnding();
    }
  }

  startEnding() {
    this.setPhase('ending');
    this.ending = { t: 0, settled: false };
    this.pointer.grab = 'none';
    this.tapTarget = null;
    this.emit('ending', { home: this.home, route: this.route, cart: { x: +this.cartS.x.toFixed(2), z: +this.cartS.z.toFixed(2) } });
    this.rig.startEnding({ x: (this.jan.x + this.tool.x) / 2, z: (this.jan.z + this.tool.z) / 2 });
    this.audio.motorOff();
  }

  updateEnding(dt) {
    const E = this.ending;
    E.t += dt;
    const t = this.tool;
    t.vx *= Math.exp(-dt * 4); t.vz *= Math.exp(-dt * 4);
    // the two corridors settle into the same light
    const k = 1 - Math.exp(-dt * 0.9);
    G.uWarm.value += (0 - G.uWarm.value) * k;
    G.uLamp.value += (0 - G.uLamp.value) * k;
    G.uSunLower.value += (G.uSunUpper.value - G.uSunLower.value) * k;
    G.uLowerTint.value.lerp(new THREE.Color(1, 1, 1), k);
    this.chord = Math.min(1, E.t / 3);
    if (E.t > 2.5) this.symmetric = true;
    // janitor turns to look back toward us and waves
    const j = this.jan;
    if (E.t > 1.8) {
      j.heading += angDiff(j.heading, Math.atan2(-(this.rig.pos.x - j.x), -(this.rig.pos.z - j.z))) * (1 - Math.exp(-dt * 2));
      j.wave = Math.min(1, (E.t - 1.8) / 0.6);
    }
    if (!E.chimed && E.t > 3.2) { E.chimed = true; this.audio.jingle(); this.audio.happy(); }
    if (E.t > 5.5 && !E.settled) { E.settled = true; this.emit('endingSettled'); }
  }

  startNight() {
    this.setPhase('night');
    this.night = { t: 0, reset: false };
    this.emit('night');
    for (let i = 0; i < 9; i++) this.audio.switchClick(i * 0.12);
  }

  updateNight(dt) {
    const N = this.night;
    N.t += dt;
    if (N.t < 1.4) {
      // fixtures switch off one after another from the far end
      G.uSwitch.value.set(-50 + (N.t / 1.4) * 56, -1);
      G.uLightLevel.value = 1 - 0.85 * smoothstep(0.2, 1.4, N.t);
    } else if (!N.reset) {
      N.reset = true;
      // remember this run: the polish soaks into tomorrow's floor
      this.history = Float32Array.from(this.surface.polish);
      this.prevRoute = this.route || this.prevRoute || 'A';
      this.runIndex++;
      this.symmetric = false;
      const keepLevel = G.uLightLevel.value;
      this.newRun();
      this.setPhase('night');
      this.night = N;
      G.uLightLevel.value = keepLevel;
      G.uSwitch.value.set(6, -1);
      this.rig.side = 1; this.rig.mode = 'follow';
      this.rig.snapTo(this.tool.x, this.tool.z);
      this.chord = 0;
    } else {
      const u = (N.t - 1.9) / 1.6;
      if (u > 0) {
        G.uSwitch.value.set(6 - u * 56, -1);
        G.uLightLevel.value = 0.15 + 0.85 * smoothstep(0, 0.6, u);
        if (!N.clicked) { N.clicked = true; for (let i = 0; i < 9; i++) this.audio.switchClick(i * 0.16); }
      }
      if (u >= 1) {
        G.uSwitch.value.set(100, 1);
        G.uLightLevel.value = 1;
        this.setPhase('clean');
        this.reacquirePointer();
      }
    }
  }

  // ---------------------------------------------------------------- camera
  updateCamera(dt) {
    const r = this.rig;
    if (r.mode === 'orbit') r.updateOrbit(dt);
    else if (r.mode === 'ending') r.updateEnding(dt);
    else if (this.phase !== 'night' || (this.night && this.night.reset)) r.updateFollow(dt, this.tool);
    r.shake *= Math.exp(-dt * 12);
    r.apply(this.time);
    const cs = this.camSide();
    G.uTwinClip.value = this.symmetric ? 0 : cs;
    this.surface.uniforms.uCamSide.value = cs;
  }

  // ---------------------------------------------------------------- visuals
  syncVisuals(dt) {
    const t = this.tool, j = this.jan, c = this.cartS, s = this.signS, b = this.ballS;
    const cs = this.camSide();
    // scrubber
    const sc = this.scrubber;
    const shiver = this.phase === 'intro' ? Math.max(0, Math.sin(this.time * 1.3)) * 0.004 : (t.speed < 0.1 && this.phase !== 'ending' ? 0.003 : 0);
    sc.position.set(t.x + Math.sin(this.time * 83) * shiver, 0, t.z + Math.cos(this.time * 71) * shiver);
    sc.rotation.set(Math.sin(this.time * 57) * shiver * 3, t.heading, 0);
    sc.scale.set(1, t.v, 1);
    sc.userData.brush.rotation.y = t.spin;
    sc.userData.lamp.visible = this.phase === 'intro' ? Math.sin(this.time * 2.2) > 0.2 : (this.phase !== 'ending' && Math.sin(this.time * 6) > -0.3);
    sc.userData.waterIn.rotation.z = Math.sin(this.time * 7) * Math.min(0.2, t.speed * 0.05);
    // janitor
    const jn = this.janitor;
    jn.position.set(j.x, j.lift * (Math.sign(j.v) || 1), j.z);
    jn.rotation.set(0, j.heading, 0);
    jn.scale.set(1, j.v, 1);
    const ud = jn.userData;
    const sw = Math.sin(j.walk) * Math.min(0.55, j.speed * 0.4);
    ud.legs[0].rotation.x = sw; ud.legs[1].rotation.x = -sw;
    ud.torso.rotation.x = -j.lean * 0.5;
    ud.torso.position.y = 0.82 + Math.abs(Math.cos(j.walk)) * Math.min(0.03, j.speed * 0.02);
    // the janitor looks at whatever is newly interesting: a wordless pointer for the eye
    let look = null;
    if (this.phase === 'intro' && this.phaseTime > 1.5) look = [this.layout.start.x + 0.05, this.layout.start.z - 1.05];
    else if ((this.phase === 'window' || this.phase === 'boundary') && b.state !== 'hidden') look = [b.x, b.z];
    else if ((this.phase === 'route' || this.phase === 'dive') && this.membrane) look = [this.membrane.X.x, this.membrane.X.z];
    else if (this.phase === 'lower' && !c.attached) look = [c.x, c.z];
    let yawGoal = 0;
    const idleT = this.time - this.lastInput;
    if (look) {
      const ax = look[0] - j.x, az = look[1] - j.z;
      yawGoal = clamp(angDiff(j.heading, Math.atan2(-ax, -az)), -1.1, 1.1);
    } else if (idleT > 3 && j.speed < 0.05) {
      yawGoal = Math.sin(this.time * 0.6) * 0.6;
    }
    j.headYaw = (j.headYaw || 0) + (yawGoal - (j.headYaw || 0)) * (1 - Math.exp(-dt * 3));
    ud.head.rotation.set(this.phase === 'dive' || (this.phase === 'intro' && this.phaseTime > 1.5) ? 0.35 : 0, j.headYaw, 0);
    // idle: breathe, tap a foot
    ud.torso.scale.y = 1 + Math.sin(this.time * 2.1) * 0.012;
    if (idleT > 5 && j.speed < 0.05 && Math.sin(this.time * 0.8) > 0.6) ud.legs[1].rotation.x = -Math.max(0, Math.sin(this.time * 10)) * 0.18;
    // hands: on the handle, or waving at the end
    const [hbx, hbz] = rotLocal(t.heading, 0, 0.3);
    _b.set(t.x + hbx, 0.37 * t.v, t.z + hbz);            // handle base (world)
    const [hx, hz] = rotLocal(j.heading, 0, -0.42);
    _c.set(j.x + hx, j.lift * (Math.sign(j.v) || 1) + (1.0 - j.lean * 0.18) * j.v, j.z + hz);  // hands (world)
    placeHandle(this.handle, _b, _c, j.heading);
    const tgt = new THREE.Vector3(0, 1.0 - j.lean * 0.18, -0.42);
    poseJanitorArms(jn, tgt, j.lean);
    if (j.wave > 0) {
      const arm = ud.arms[1];
      const w = j.wave;
      const hand = new THREE.Vector3(0.36, 1.45 + 0.35 * w, -0.1).lerp(new THREE.Vector3(0.36, 1.85, -0.05 + Math.sin(this.time * 8) * 0.12), w);
      const S = new THREE.Vector3(0.24, 1.32, 0);
      const E = S.clone().lerp(hand, 0.5).add(new THREE.Vector3(0.12, -0.05, 0));
      const seg = (m, a2, b2) => { const d = b2.clone().sub(a2); const len = d.length(); m.position.copy(a2); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); m.scale.set(1, len - 0.05, 1); };
      seg(arm.upper, S, E); seg(arm.lower, E, hand); arm.hand.position.copy(hand);
    }
    // cart
    const ct = this.cart;
    ct.position.set(c.x, 0, c.z);
    ct.rotation.set(0, c.heading, 0);
    ct.scale.set(1, c.v, 1);
    for (const w of ct.userData.wheels) w.rotation.x = c.wheelRot;
    ct.userData.keys.rotation.set(c.keysA * 0.6, 0, c.keysA * 0.3);
    ct.userData.water.rotation.set(c.slosh * 0.15, 0, c.slosh * 0.1);
    this.cartProxy.position.set(c.x, 0.6 * Math.sign(c.v), c.z);
    this.cartProxy.rotation.y = c.heading;
    // sign
    const sg = this.sign;
    sg.position.set(s.x, 0, s.z);
    sg.rotation.set(0, s.heading, 0);
    sg.userData.pivot.rotation.z = s.wob;
    this.signProxy.position.set(s.x, 0.45, s.z);
    this.janProxy.position.set(j.x, 0.88 * Math.sign(j.v), j.z);
    // ball
    const bl = this.ball;
    bl.visible = b.state !== 'hidden';
    if (b.popY != null) bl.position.set(b.x, b.popY, b.z);
    else bl.position.set(b.x, b.side * (BALL_R + b.y), b.z);
    bl.scale.set(1, b.popY != null ? Math.sign(b.popY) || 1 : b.side, 1);
    if (b.state === 'free' && b.side < 0 && b.charge > 0.5) {
      // pressing against the floor from below
      bl.position.y += Math.abs(Math.sin(this.time * 7)) * 0.025 * Math.min(1, b.charge / 3);
    }
    const mem = this.surface.sample(this.surface.mem, b.x, b.z);
    if (b.state === 'free' && b.side > 0 && mem > 0.4 && b.y <= 0.001) bl.position.y = BALL_R * 0.8 + Math.sin(this.time * 3) * 0.02;
    bl.userData.spin.quaternion.copy(b.rot);

    // clocks
    for (const w of [this.upper, this.lower]) {
      const h = w.userData.extras.hands;
      h.minute.rotation.z = -this.time * 0.1;
      h.hour.rotation.z = -this.time * 0.1 / 12 - 1.2;
    }
    const ex = this.lower.userData.extras;
    ex.top.visible = this.camera.position.y > -H + 0.05;
    ex.warmBulb.material.uniforms.uEmissive.value.setRGB(1.0, 0.76, 0.48).multiplyScalar(0.4 + G.uWarm.value * 0.8);
    ex.lamp.material.uniforms.uEmissive.value.setRGB(1.0, 0.86, 0.63).multiplyScalar(0.4 + G.uLamp.value * 0.8);

    // blob shadows for things on the viewer's side of the floor
    const S = this.surface;
    let si = 0;
    const shadow = (side, x, z, r, str) => { if (si < 8) S.setShadow(si++, x, z, r, side === cs ? str : 0); };
    shadow(Math.sign(t.v) || 1, t.x, t.z, 0.5, 0.42 * Math.abs(t.v));
    shadow(Math.sign(j.v) || 1, j.x, j.z, 0.36, 0.45 * Math.abs(j.v) * (1 - j.lift * 2));
    shadow(Math.sign(c.v) || 1, c.x, c.z, 0.62, 0.42 * Math.abs(c.v));
    shadow(1, s.x, s.z, 0.28, 0.3);
    shadow(b.side, b.x, b.z, 0.17, b.state === 'hidden' ? 0 : 0.5 / (1 + b.y * 6));
    shadow(1, PILLAR.x, PILLAR.z, 0.72, 0.35);
    shadow(-1, PILLAR.x, PILLAR.z, 0.72, 0.35);
    while (si < 8) S.setShadow(si++, 0, 0, 1, 0);

    for (const tw of this.twins) tw.sync();
  }

  render() {
    const r = this.renderer;
    const U = this.surface.uniforms;
    // far-side pass: what lies beyond the floor, for wobble and wet blur
    if (this.farPass !== false) {
      r.getDrawingBufferSize(this._dbs || (this._dbs = new THREE.Vector2()));
      const w = Math.max(2, Math.floor(this._dbs.x * 0.5)), h = Math.max(2, Math.floor(this._dbs.y * 0.5));
      if (!this.farRT) {
        const half = r.extensions.has('EXT_color_buffer_half_float') || r.extensions.has('EXT_color_buffer_float');
        this.farRT = new THREE.WebGLRenderTarget(w, h, { type: half ? THREE.HalfFloatType : THREE.UnsignedByteType, depthBuffer: true });
      } else if (this.farRT.width !== w || this.farRT.height !== h) this.farRT.setSize(w, h);
      const cs = this.camSide();
      G.uWorldClip.value = cs;
      // only what lies beyond the floor: skip the near world and near-side objects entirely
      const hidden = [this.surface.mesh, this.foam, cs > 0 ? this.upper : this.lowerRoot];
      const sides = [
        [this.scrubber, this.tool.v], [this.janitor, this.jan.v], [this.cart, this.cartS.v],
        [this.sign, 1], [this.ball, this.ballS.popY != null ? 0 : this.ballS.side],
      ];
      for (const [o, v] of sides) if (Math.abs(v) > 0.99 && Math.sign(v) === cs) hidden.push(o);
      for (let i = 0; i < this.twins.length; i++) {
        const tw = this.twins[i];
        const src = sides.find(e => e[0] === tw.src);
        if (src && Math.abs(src[1]) > 0.99 && Math.sign(src[1]) !== cs) hidden.push(tw.dst);
      }
      const vis = hidden.map(o => o.visible);
      for (const o of hidden) o.visible = false;
      r.setRenderTarget(this.farRT);
      r.render(this.scene, this.camera);
      r.setRenderTarget(null);
      G.uWorldClip.value = 0;
      hidden.forEach((o, i) => { o.visible = vis[i]; });
      U.uFar.value = this.farRT.texture;
      U.uScreenInv.value.set(1 / this._dbs.x, 1 / this._dbs.y);
      U.uFarOn.value = 1;
    } else U.uFarOn.value = 0;
    r.render(this.scene, this.camera);
  }

  // ---- QA helpers (used by automated browser tests; not part of play)
  dbgClean(x0, x1, z0, z1, polish = 0.5) {
    const s = this.surface;
    for (let j = Math.max(0, s.toJ(z0)); j <= Math.min(s.nz - 1, s.toJ(z1)); j++) {
      for (let i = Math.max(0, s.toI(x0)); i <= Math.min(s.nx - 1, s.toI(x1)); i++) {
        const k = s.idx(i, j); s.dirt[k] = 0; s.polish[k] = Math.max(s.polish[k], polish);
      }
    }
    s.markRows(0, s.nz - 1);
  }
  dbgJump(stage, route = 'A') {
    const order = ['clean', 'window', 'boundary', 'route', 'dive', 'lower', 'ending'];
    const k = order.indexOf(stage);
    const L = route === 'A' ? -1 : 1;
    if (this.phase === 'intro') this.setPhase('clean');
    if (!this.home) this.home = { x: this.layout.start.x, z: this.layout.start.z - 1.0 };
    this.dbgClean(-0.8, 0.6, -3.0, 0.5, 0.35);
    if (k >= 1) {
      this.dbgClean(Math.min(L * 0.4, L * 1.8), Math.max(L * 0.4, L * 1.8), -16.5, -3, 0.5);
      this.commitRoute(route);
    }
    if (k >= 2) {
      const b = this.ballS, R = route === 'A' ? BALL_REST_A : BALL_REST_B;
      b.state = 'free'; b.x = R.x; b.z = R.z; b.y = 0; b.vx = b.vz = 0;
      this.dbgClean(R.x - 0.8, R.x + 0.8, R.z - 0.8, -16, 0.6);
      this.tool.x = R.x + 0.3; this.tool.z = R.z + 1.4;
      this.jan.x = this.tool.x; this.jan.z = this.tool.z + 1.2;
      this.rig.snapTo(this.tool.x, this.tool.z);
      this.setPhase('boundary');
    }
    if (k >= 3) {
      const b = this.ballS;
      b.side = 1; b.state = 'free'; b.charge = 5;
      this.startMembrane();
      this.membrane.grow = 0.99;
    }
    if (k >= 4) {
      const m = this.membrane;
      this.updateRoute(0.02);
      this.tool.x = m.X.x; this.tool.z = m.X.z; this.tool.sink = 1; this.tool.v = -1;
      this.jan.x = m.X.x; this.jan.z = m.X.z + 1.2;
      this.rig.snapTo(this.tool.x, this.tool.z);
      this.setPhase('dive');
    }
    if (k >= 5) {
      const m = this.membrane;
      this.jan.v = -1; this.jan.x = m.X.x; this.jan.z = m.X.z - 0.6;
      this.tool.heading = Math.PI; this.tool.z = m.X.z + 0.6;
      this.rig.side = -1; this.rig.mode = 'follow'; this.rig.snapTo(this.tool.x, this.tool.z);
      this.setPhase('lower');
    }
    if (k >= 6) {
      const c = this.cartS;
      c.v = -1; c.attached = true; this.cartReunited = true;
      this.tool.x = this.home.x; this.tool.z = this.home.z - 0.5;
      this.jan.x = this.tool.x; this.jan.z = this.tool.z - 1.2;
      this.rig.snapTo(this.tool.x, this.tool.z);
      this.startEnding();
    }
    return this.snapshot();
  }
  snapshot() {
    const t = this.tool, j = this.jan, c = this.cartS, b = this.ballS;
    const r2 = v => +v.toFixed(2);
    return {
      phase: this.phase, route: this.route, run: this.runIndex, runTime: r2(this.runTime), phaseTime: r2(this.phaseTime),
      tool: { x: r2(t.x), z: r2(t.z), v: r2(t.v), sink: r2(t.sink) },
      jan: { x: r2(j.x), z: r2(j.z), v: r2(j.v) },
      cart: { x: r2(c.x), z: r2(c.z), v: r2(c.v), charge: r2(c.charge), attached: c.attached },
      ball: { state: b.state, side: b.side, x: r2(b.x), z: r2(b.z), charge: r2(b.charge), pushes: b.pushes },
      home: this.home, membrane: this.membrane ? { kind: this.membrane.kind, X: this.membrane.X } : null,
      camSide: this.camSide(), cam: { x: r2(this.camera.position.x), y: r2(this.camera.position.y), z: r2(this.camera.position.z) },
      covA: r2(this.surface.coverage(REVEAL_A)), covB: r2(this.surface.coverage(REVEAL_B)),
    };
  }
}
