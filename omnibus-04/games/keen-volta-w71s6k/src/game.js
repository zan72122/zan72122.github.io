// Game core: owns the scene, systems, persistent state (S) and the phase
// director. Visual animation lives in mechanisms; S only records facts.
import * as THREE from 'three';
import { buildWorld, makeSun } from './world.js';
import { buildTown } from './town.js';
import { Girl } from './girl.js';
import { Input } from './input.js';
import { CameraRig } from './camera.js';
import { Dust, Debris } from './physics.js';
import { setRopeCamera } from './rope.js';
import { sound } from './audio.js';
import { makeRng, clamp } from './util.js';
import { setupOpening } from './stations/opening.js';
import { setupRouteA } from './stations/routeA.js';
import { setupRouteB } from './stations/routeB.js';
import { setupYard } from './stations/yard.js';
import { setupFinale } from './stations/finale.js';

// what the girl may point at in each phase when she is touched
const HINTS = {
  start: ['D1'], fork: ['D3', 'D2'], a_ramp: ['crane'], a_wall: ['crane'], b_cart: ['cart'], b_lift: ['liftRope'],
  b_roll: ['cart'], b_tipup: ['D3up'], yard: ['ropeway', 'roof'], wave: ['master'], finale: ['houseCart', 'crane2', 'STAY'], ending: ['TINY'],
};

export class Game {
  constructor({ renderer, canvas, seed = 1, run = 1, prevRoute = null, onFinished = null }) {
    this.renderer = renderer; this.canvas = canvas; this.onFinished = onFinished;
    this.rng = makeRng(seed);
    this.S = { seed, run, prevRoute, phase: 'boot', route: null, spare: [], log: [], t: 0,
      d1: { state: 'standing' }, d2: { state: 'standing' }, d3: { state: 'standing' },
      house: { walls: [], roof: false, x: null, carrier: null }, wave: 0, stay: 'standing', tilt: 0, done: false };
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.3, 900);
    this.rig = new CameraRig(this.camera);
    setRopeCamera(this.camera);
    this.input = new Input(canvas, this.camera);
    this.input.onAnyDown = () => sound.unlock();
    this.world = buildWorld(this.scene, this.rng.fork(1));
    this.lights = makeSun(this.scene);
    this.town = buildTown(this.scene, this.rng.fork(2));
    this.girl = new Girl(); this.scene.add(this.girl.obj);
    this.dust = new Dust(this.scene); this.debris = new Debris(this.scene);
    this.updaters = []; this.phases = {}; this.phase = null; this.phaseT = 0;
    this.lastProgress = 0; this.time = 0; this.targets = []; this.timers = [];
    this.D = {}; // dominoes by id
    this._v = new THREE.Vector3();
    setupOpening(this); setupRouteA(this); setupRouteB(this); setupYard(this); setupFinale(this);
    this._girlTarget();
    this.go('start');
    this.rig.cut();
  }

  // --- persistent facts -------------------------------------------------
  fact(event, data = {}) { this.S.log.push({ t: +this.time.toFixed(2), event, ...data }); this.lastProgress = this.time; }
  // --- phases ------------------------------------------------------------
  go(name) {
    const prev = this.phase; this.phase = name; this.S.phase = name; this.phaseT = 0; this.lastProgress = this.time;
    const p = this.phases[name]; if (p && p.enter) p.enter(prev);
  }
  onUpdate(fn) { this.updaters.push(fn); return fn; }
  // game-time scheduler (deterministic under test stepping; never use setTimeout for logic)
  after(sec, fn) { this.timers.push({ t: this.time + sec, fn }); }
  sinceProgress() { return this.time - this.lastProgress; }
  touch() { this.lastProgress = this.time; }

  // --- helpers -------------------------------------------------------------
  pan(p) { return clamp((p.x - this.rig.focus.x) / 14, -1, 1); }
  target(t) { this.targets.push(t); this.input.register(t); return t; }
  untarget(t) { this.targets = this.targets.filter((x) => x !== t); this.input.unregister(t); }
  // screen distance from (sx,sy) to the projected outline of a domino
  distToDomino(dom, sx, sy, pad = 0) {
    dom.root.updateWorldMatrix(true, false);
    const hx = dom.T / 2 + pad, hy = dom.H / 2 + pad, hz = dom.W / 2 + pad;
    const pts = [];
    for (const x of [-hx, hx]) for (const y of [-hy, hy]) for (const z of [-hz, hz]) {
      const w = this._v.set(x, y, z).applyMatrix4(dom.root.matrixWorld); const q = this.input.project(w, {}); pts.push([q.x, q.y]);
    }
    return distToHull(pts, sx, sy);
  }
  shot(s, rate) { this.rig.setShot(s, rate); }
  // Touching the girl: she turns to you, then looks and points at what could move next.
  _girlTarget() {
    const girl = this.girl, v = new THREE.Vector3();
    this.target({
      id: 'girl', radius: 46,
      enabled: () => !['tilt', 'ending'].includes(this.phase) && !girl.path,
      anchor: () => girl.obj.getWorldPosition(v).add(new THREE.Vector3(0, 0.7, 0)),
      pick: (sx, sy) => this.input.distToPoint(sx, sy, girl.obj.getWorldPosition(v).add(new THREE.Vector3(0, 0.6, 0))) + 12,
      down: () => {},
      up: () => {
        girl.faceCamera(); girl.lookAt(() => this.camera.position, 0.9); girl.emote('nod', 0.8);
        sound.tick(this.pan(girl.obj.getWorldPosition(v)), 1500, 0.08, 0.05);
        this.after(0.9, () => {
          let allow = HINTS[this.phase] || [];
          const ph = this.phases[this.phase];
          if (this.phase === 'fork' && ph.first) allow = [ph.first.id, ph.second.id];
          const next = this.testTargets().filter((t) => allow.includes(t.id)).sort((a, b) => allow.indexOf(a.id) - allow.indexOf(b.id));
          const w = this.input.size();
          const on = next.filter((t) => t.x > 0 && t.x < w.w && t.y > 0 && t.y < w.h);
          const pick = (on.length ? on : next)[0];
          const tgt = pick && this.targets.find((t) => t.id === pick.id);
          if (tgt) { const p = tgt.anchor(); girl.lookAt(() => p, 2.2); girl.emote('point', 1.5); if (girl.obj.parent === this.scene) girl.targetYaw = Math.atan2(p.x - girl.position.x, p.z - girl.position.z); }
        });
      },
    });
  }
  // what the girl's feet are on (footstep material); the town itself sounds like a domino
  _surface() {
    const g = this.girl; if (g.heightFn) return 'domino';
    const par = g.obj.parent;
    if (this.house && par === this.house.group) return 'wood';
    if (par === this.town.group) return 'domino';
    const p = g.obj.position;
    if (p.y > 2.2 || p.y < -2.5) return 'stone';
    return p.x < -2.7 || (p.x < 4 && p.z > -1) ? 'grass' : 'stone';
  }

  update(dt) {
    dt = Math.min(dt, 0.05);
    this.time += dt; this.phaseT += dt; this.S.t = this.time;
    if (this.timers.length) {
      const due = this.timers.filter((t) => t.t <= this.time);
      if (due.length) { this.timers = this.timers.filter((t) => t.t > this.time); due.forEach((t) => t.fn()); }
    }
    const p = this.phases[this.phase];
    if (p && p.update) p.update(dt);
    for (const f of this.updaters) f(dt);
    this.girl.camX = this.rig.focus.x;
    this.girl.surface = this._surface();
    this.girl.update(dt);
    this.dust.update(dt); this.debris.update(dt);
    this.rig.update(dt);
    this.lights.sun.follow(this.rig.focus, this.rig.dist * 0.9);
    sound.update(dt);
  }
  render() { this.renderer.render(this.scene, this.camera); }
  resize(w, h) {
    this.renderer.setSize(w, h, false);
    this.rig.resize(w / h);
  }
  // test hooks: project a world point; list of interactable anchors in CSS px
  testProject(x, y, z) { const q = this.input.project(new THREE.Vector3(x, y, z), {}); return { x: q.x, y: q.y }; }
  testLocal(x, y, z) { const v = this.town.group.localToWorld(new THREE.Vector3(x - 36, y, z)); return this.testProject(v.x, v.y, v.z); }
  testTargets() {
    const out = [];
    for (const t of this.targets) {
      if (t.enabled && !t.enabled()) continue;
      if (!t.anchor) continue;
      const q = this.input.project(t.anchor(), {});
      out.push({ id: t.id, x: q.x, y: q.y });
    }
    return out;
  }
  dispose() {
    this.input.destroy();
    for (const k of ['creak', 'slide', 'roll', 'rumble', 'rope']) sound.loop(k).set(0);
    this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); }); });
  }
}

function distToHull(pts, x, y) {
  // convex hull (monotone chain) then point-in-polygon / edge distance
  pts.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const p of pts) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
  for (let i = pts.length - 1; i >= 0; i--) { const p = pts[i]; while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
  const hull = lo.slice(0, -1).concat(up.slice(0, -1));
  let inside = true, best = Infinity;
  for (let i = 0; i < hull.length; i++) {
    const a = hull[i], b = hull[(i + 1) % hull.length];
    if (cross(a, b, [x, y]) < 0) inside = false;
    const dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy || 1;
    let t = ((x - a[0]) * dx + (y - a[1]) * dy) / l2; t = Math.max(0, Math.min(1, t));
    best = Math.min(best, Math.hypot(a[0] + dx * t - x, a[1] + dy * t - y));
  }
  return inside ? 0 : best;
}
