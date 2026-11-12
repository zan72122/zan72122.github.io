// The story, told without words. Each state sets up what the camera frames, what
// the characters do on their own, and which touches change what happens next.
import * as THREE from '../../lib/three.module.js';
import { CameraRig, fitShot } from './camera.js';
import { PolyTrack } from './paths.js';
import { clamp, lerp, damp, smoothstep, easeInOut, TAU } from '../core/math.js';
import { SUN_DIR, shared } from '../core/env.js';
import { WATER_Y } from '../world/water.js';
import { CHILD_SPOT, RUN_X, PUDDLES, puddleAt, terrainHeight } from '../world/layout.js';
import { LEGS } from '../chars/horseRig.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const UP = V(0, 1, 0);

// unicorn's waiting spot behind the child (its head reaches over the child)
const HORSE_SPOT = V(RUN_X, 0, -0.68);

export class Director {
  constructor(game) {
    this.g = game;
    this.horse = game.horse;
    this.child = game.child;
    this.track = game.track;
    this.road = game.road;
    this.rig = new CameraRig(game.camera);
    this.ray = new THREE.Raycaster();
    this.state = null;
    this.t = 0;
    this.rt = 0;
    this.shot = null;
    this.stiff = 1.4;
    this.onBow = false;
    this.counters = {};
    this.touchPts = [];
    this.mist = 0;
    this.focus = V(0, 0, 0.6);
    this.handTouch = { L: 0, R: 0 };
    this.lastRipple = new Map();
    this.layerVisits = new Set();
    this._setupHorseEvents();
    const inp = game.input;
    inp.on('down', (p) => this._down(p));
    inp.on('move', (p) => this._move(p));
    inp.on('up', (p) => this._up(p));
    inp.on('first', () => game.audio.unlock());
    // some iOS versions only allow audio to start on touchend: retry until running
    inp.on('gesture', () => {
      const a = game.audio;
      if (!a.ctx || a.ctx.state !== 'running') a.unlock();
    });
    this.S = this._states();
  }

  // --------------------------------------------------------------- helpers
  aspect() {
    return this.g.vw / this.g.vh;
  }
  portrait() {
    return this.aspect() < 0.9;
  }
  // blend a parameter between portrait (a < 0.6) and landscape (a > 1.3)
  ar(p, l) {
    const t = smoothstep(0.55, 1.35, this.aspect());
    if (typeof p === 'number') return lerp(p, l, t);
    return p.clone().lerp(l, t);
  }
  rayFrom(p) {
    const ndc = new THREE.Vector2((p.x / this.g.vw) * 2 - 1, -(p.y / this.g.vh) * 2 + 1);
    this.ray.setFromCamera(ndc, this.g.camera);
    return this.ray.ray;
  }
  project(v) {
    const p = v.clone().project(this.g.camera);
    return { x: (p.x * 0.5 + 0.5) * this.g.vw, y: (-p.y * 0.5 + 0.5) * this.g.vh, z: p.z };
  }
  pan(v) {
    const p = this.project(v);
    return clamp((p.x / this.g.vw) * 2 - 1, -1, 1) * 0.7;
  }
  hitPlane(ray, y) {
    if (Math.abs(ray.direction.y) < 1e-5) return null;
    const t = (y - ray.origin.y) / ray.direction.y;
    if (t < 0) return null;
    return ray.origin.clone().addScaledVector(ray.direction, t);
  }
  // world point on a camera-facing plane through `through`
  pointOnViewPlane(p, through) {
    const ray = this.rayFrom(p);
    const n = this.g.camera.getWorldDirection(new THREE.Vector3());
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(n, through);
    const out = new THREE.Vector3();
    return ray.intersectPlane(plane, out) ? out : through.clone();
  }
  // nearest distance between a ray and a segment
  raySeg(ray, a, b) {
    let best = 1e9, bp = null, bt = 0;
    for (let i = 0; i <= 12; i++) {
      const q = _v.lerpVectors(a, b, i / 12);
      const t = Math.max(0, _v2.subVectors(q, ray.origin).dot(ray.direction));
      const c = _v3.copy(ray.origin).addScaledVector(ray.direction, t);
      const d = c.distanceTo(q);
      if (d < best) {
        best = d;
        bp = q.clone();
        bt = t;
      }
    }
    return { d: best, p: bp, t: bt };
  }
  pickHorse(ray, inflate = 0.12) {
    const u = this.g.unicorn;
    let best = null;
    for (const c of u.colliderDefs) {
      const r = this.raySeg(ray, c.a, c.b);
      if (r.d < c.r + inflate && (!best || r.t < best.t)) best = { ...r, part: c.bone.name };
    }
    // legs
    for (const n of ['humL', 'humR', 'foreL', 'foreR', 'femL', 'femR', 'tibL', 'tibR']) {
      const b = u.bones[n];
      const a = b.getWorldPosition(new THREE.Vector3());
      const e = b.localToWorld(new THREE.Vector3(0, b.userData.length, 0));
      const r = this.raySeg(ray, a, e);
      if (r.d < 0.07 + inflate * 0.6 && (!best || r.t < best.t)) best = { ...r, part: 'leg' };
    }
    return best;
  }
  pickMane(ray, inflate = 0.09) {
    let best = null;
    for (const L of this.g.hair.locks) {
      if (L.kind === 'tail') continue;
      for (let i = 1; i < L.p.length; i++) {
        const q = L.p[i];
        const t = Math.max(0, _v.subVectors(q, ray.origin).dot(ray.direction));
        const d = _v2.copy(ray.origin).addScaledVector(ray.direction, t).distanceTo(q);
        if (d < inflate && (!best || d < best.d)) best = { d, p: q.clone(), lock: L, index: i, t };
      }
    }
    return best;
  }
  pickChild(ray) {
    const b = this.g.childModel.bones;
    const a = b.hips.getWorldPosition(new THREE.Vector3());
    const h = b.head.getWorldPosition(new THREE.Vector3()).add(V(0, 0.08, 0));
    const r = this.raySeg(ray, a, h);
    return r.d < 0.2 ? r : null;
  }
  pickWater(ray) {
    const p = this.hitPlane(ray, WATER_Y);
    if (!p) return null;
    const sim = this.g.world.puddles.simAt(p.x, p.z, 0.12);
    return sim ? { p, sim } : null;
  }
  // world velocity of a dragging finger at the depth of `at`
  fingerVel(ptr, at) {
    const cam = this.g.camera;
    const dist = at.distanceTo(cam.position);
    const pxToM = (2 * Math.tan((cam.fov * Math.PI) / 360) * dist) / this.g.vh;
    const right = V(1, 0, 0).applyQuaternion(cam.quaternion);
    const up = V(0, 1, 0).applyQuaternion(cam.quaternion);
    return right.multiplyScalar(ptr.vx * pxToM).addScaledVector(up, -ptr.vy * pxToM);
  }

  // --------------------------------------------------------------- horse events
  _setupHorseEvents() {
    const g = this.g;
    let note = 0;
    this.horse.on('plant', (id, pos, v) => {
      const pan = this.pan(pos);
      // on the rainbow
      if (this.onBow && this.road.active) {
        const pr = this.track.project(pos.x, pos.z, this.horse.s);
        if (this.track.isBow(pr.s) && this.road.exists(pr.s, pr.lat)) {
          const rho = this.road.rhoAt(pr.s);
          const str = clamp(0.35 + v / 14, 0.3, 1.1) * (0.4 + 0.6 * Math.min(1, rho));
          this.road.addContact(pr.s, pr.lat, str);
          const u = this.track.u(pr.s);
          const climb = Math.round((u < 0.5 ? u : 1 - u) * 14);
          const pattern = [0, 2, 4, 3];
          note = (note + 1) % 4;
          g.audio.glass(climb + pattern[LEGS.indexOf(id)], str, pan, 1 - Math.min(1, rho * 1.3));
          const t = clamp(pr.lat / this.road.W + 0.5, 0, 1);
          g.sparkles.burst(pos.x, pos.y + 0.02, pos.z, Math.round(4 + str * 8), 0.9, () => t + (Math.random() - 0.5) * 0.3, 0.8, 0.022, 1.2);
          return;
        }
      }
      // in a puddle
      const sim = g.world.puddles.simAt(pos.x, pos.z, -0.02);
      if (sim) {
        const e = clamp(v / 9, 0.18, 1.0);
        const fwd = V(Math.sin(this.horse.heading), 0, Math.cos(this.horse.heading));
        g.drops.splash(pos.x, WATER_Y, pos.z, e, fwd.x * v * 0.35, fwd.z * v * 0.35, Math.round(70 + e * 330));
        sim.disturb(pos.x, pos.z, 0.13, -0.007 * (0.4 + e));
        g.audio.splash(e, pan);
        g.audio.hoof('grass', 0.4 + e * 0.4, pan);
        // spray wets the tail and the lower mane
        g.hair.wet(0.03 * e, (L) => L.kind === 'tail' || (L.kind === 'mane' && Math.random() < 0.4));
        return;
      }
      g.audio.hoof('grass', clamp(0.3 + v / 10, 0.3, 1), pan);
      // wet grass flicks a few droplets
      if (v > 2) for (let k = 0; k < 6; k++) g.drops.spawn(pos.x + (Math.random() - 0.5) * 0.2, pos.y + 0.05, pos.z + (Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 1.2, 0.8 + Math.random() * 1.2, (Math.random() - 0.5) * 1.2, 0.8);
    });
  }

  // --------------------------------------------------------------- flow
  go(name, opts = {}) {
    if (this.state && this.S[this.state].exit) this.S[this.state].exit.call(this);
    this.state = name;
    this.t = 0;
    this.rt = 0;
    this.sub = {};
    if (this.g.debug) console.log('state', name);
    this.S[name].enter.call(this, opts);
  }

  jumpTo(name) {
    // debug / replay: set up a consistent world for a given state
    const prep = this.S[name].prep;
    if (prep) prep.call(this);
    this.go(name);
    const S = this.S[name];
    // bring characters' matrices up to date before framing
    this.horse.update(1e-4);
    this.child.update(1e-4);
    this.g.hair.reset();
    if (S.update) S.update.call(this, 1 / 60, 1 / 60);
    this.horse.update(1e-4);
    this.child.update(1e-4);
    if (S.update) S.update.call(this, 1e-4, 1e-4);
    if (this.shot) this.rig.snap(this.shot);
  }

  update(dt, rdt) {
    this.t += dt;
    this.rt += rdt;
    const S = this.S[this.state];
    if (S.update) S.update.call(this, dt, rdt);
    this._common(dt, rdt);
  }

  _common(dt, rdt) {
    const g = this.g;
    const h = this.horse;
    // ground for hooves: rainbow when riding the bow
    h.update(dt);
    this.child.update(dt);
    // mane droplets & physics
    g.hair.viewPos.copy(g.camera.position);
    g.hair.update(dt);
    g.drops.beginCling();
    g.hair.forEachClinging((x, y, z, w) => g.drops.addCling(x, y, z, w));
    if (this.hornDrop) {
      const tip = g.unicorn.hornTipWorld(new THREE.Vector3());
      g.drops.addCling(tip.x, tip.y - 0.004, tip.z, 1.4);
    }
    g.drops.endCling();
    g.drops.update(dt);
    g.sparkles.update(dt);
    // road loads from planted hooves
    if (this.road.active) {
      let i = 0;
      for (const id of LEGS) {
        const ft = h.feet[id];
        if (ft.planted && this.onBow && !h.jump) {
          const pr = this.track.project(ft.pos.x, ft.pos.z, h.s);
          this.road.setLoad(id, pr.s, pr.lat, ft.load * (h.speed > 0.5 ? 1 : 0.6));
        } else this.road.setLoad(id, 0, 0, 0);
        i++;
      }
      this.road.update(dt, h.s, h.speed);
    }
    g.lightLayers.update(dt, this.layersOn ? 1 : 0);
    if (this.layersOn) g.lightLayers.face(g.camera);
    if (g.miniBow.update(dt) && this.onMiniBowDone) this.onMiniBowDone();
    // grass bends under hooves, boots and fingers
    const gr = [g.world.grassNear, g.world.grassMid];
    let k = 0;
    for (const id of LEGS) {
      const p = h.hoofWorld(id, _v);
      for (const gg of gr) gg.setPusher(k, p.x, p.y - terrainHeight(p.x, p.z), p.z, 0.22);
      k++;
    }
    for (const s of ['L', 'R']) {
      const f = this.g.childModel.bones['foot' + s].getWorldPosition(_v);
      for (const gg of gr) gg.setPusher(k, f.x, f.y, f.z, 0.16);
      k++;
    }
    for (let i = 0; i < 4; i++) {
      const tp = this.touchPts[i];
      for (const gg of gr) gg.setPusher(k, tp ? tp.x : 0, tp ? 0 : -100, tp ? tp.z : 0, tp ? 0.35 : 0.01);
      k++;
    }
    // camera
    if (this.shot) this.rig.update(rdt, this.shot, this.stiff);
    shared.uCameraPos.value.copy(g.camera.position);
    // world (grass focus follows what we look at)
    const cam = g.camera;
    const fp = this.focusOverride || this._groundFocus();
    this.focus.lerp(fp, 1 - Math.exp(-rdt * 4));
    g.world.update(dt, cam, this.focus, this.shadowCenter || this.focus);
    // cloud mist when the camera is inside a cloud
    const dens = g.world.clouds.densityAt(cam.position);
    this.mist = damp(this.mist, dens, 3, rdt);
    g.post.final.uniforms.uMist.value = this.mist * 0.85;
    g.audio.update(rdt);
    // the distant ordinary rainbow stays modest while high up in the dry air
    if (this.state !== 'free') shared.uRainbowSky.value = lerp(0.35, 0.12, smoothstep(20, 80, cam.position.y));
  }

  _groundFocus() {
    const cam = this.g.camera;
    const dir = cam.getWorldDirection(new THREE.Vector3());
    // point on the ground the camera looks at, clamped near the camera
    let t = dir.y < -0.05 ? (terrainHeight(cam.position.x, cam.position.z) - cam.position.y) / dir.y : 6;
    t = clamp(t, 0.5, 9);
    return cam.position.clone().addScaledVector(dir, t);
  }

  // --------------------------------------------------------------- input
  _down(p) {
    const S = this.S[this.state];
    p.data.state = this.state;
    if (S.down) S.down.call(this, p);
    this.counters.touches = (this.counters.touches || 0) + 1;
  }
  _move(p) {
    const S = this.S[this.state];
    if (S.move) S.move.call(this, p);
  }
  _up(p) {
    const S = this.S[this.state];
    if (S.up) S.up.call(this, p);
    this.touchPts = this.touchPts.filter((t) => t.id !== p.id);
  }

  // generic world touches: water, grass, mane, birds, road
  touchWorld(p, { water = true, grass = true, mane = true, pet = false, road = false, birds = true } = {}) {
    const g = this.g;
    const ray = this.rayFrom(p);
    // mane first (it hangs in front of everything when visible)
    if (mane) {
      const m = this.pickMane(ray, p.down ? 0.12 : 0.1);
      if (m) {
        this.shakeMane(m, p);
        return 'mane';
      }
    }
    if (pet) {
      const hh = this.pickHorse(ray);
      if (hh) return 'horse';
    }
    if (road && this.road.active) {
      const pt = this.hitRoad(ray);
      if (pt) {
        this.road.addContact(pt.s, pt.lat, 0.7);
        const r = Math.round(this.road.rowOf(pt.s)), c = Math.round((pt.lat + this.road.W / 2) / this.road.dl);
        if (r > 0 && r < this.road.N - 1 && c >= 0 && c < this.road.M) this.road.v[r * this.road.M + c] -= 1.4;
        g.audio.glass(4 + Math.floor(Math.random() * 5), 0.5, this.pan(pt.p));
        return 'road';
      }
    }
    if (birds) {
      for (let i = 0; i < g.world.birds.n; i++) {
        const b = g.world.birds.birds[i];
        const sp = this.project(b.pos);
        if (sp.z < 1 && Math.hypot(sp.x - p.x, sp.y - p.y) < 40) {
          g.world.birds.scare(i);
          g.audio.bird(this.pan(b.pos), 0.25);
          return 'bird';
        }
      }
    }
    if (water) {
      const w = this.pickWater(ray);
      if (w) {
        this.rippleAt(w.p, p, 1);
        return 'water';
      }
    }
    if (grass) {
      const gp = this.hitPlane(ray, 0.05);
      if (gp && gp.distanceTo(this.g.camera.position) < 25) {
        this.touchPts = this.touchPts.filter((t) => t.id !== p.id);
        this.touchPts.push({ id: p.id, x: gp.x, z: gp.z });
        if (!p.data.grassT || performance.now() - p.data.grassT > 120) {
          p.data.grassT = performance.now();
          // dew shaken off the blades
          for (let k = 0; k < 10; k++) g.drops.spawn(gp.x + (Math.random() - 0.5) * 0.25, 0.12 + Math.random() * 0.08, gp.z + (Math.random() - 0.5) * 0.25, (Math.random() - 0.5) * 0.9, 0.6 + Math.random() * 1.4, (Math.random() - 0.5) * 0.9, 0.9);
          g.audio.rustle(0.3, this.pan(gp));
        }
        return 'grass';
      }
    }
    return null;
  }

  rippleAt(pt, ptr, strength = 1) {
    const g = this.g;
    const sim = g.world.puddles.simAt(pt.x, pt.z, 0.05);
    if (!sim) return;
    const last = this.lastRipple.get(ptr ? ptr.id : -1);
    if (last && last.distanceTo(pt) < 0.06) return;
    this.lastRipple.set(ptr ? ptr.id : -1, pt.clone());
    sim.disturb(pt.x, pt.z, 0.05, -0.004 * strength);
    g.audio.ripple(this.pan(pt), 0.35 + 0.3 * strength);
    // a few droplets flicked up by the fingertip
    const n = Math.round(4 + strength * 8);
    for (let k = 0; k < n; k++) g.drops.spawn(pt.x, WATER_Y + 0.01, pt.z, (Math.random() - 0.5) * 0.6, 0.6 + Math.random() * 1.0, (Math.random() - 0.5) * 0.6, 0.9);
    this.counters.ripples = (this.counters.ripples || 0) + 1;
    this.lastWaterTouch = pt.clone();
    this.lastWaterTouchT = this.rt;
  }

  shakeMane(m, p, k = 1) {
    const g = this.g;
    let vel = this.fingerVel(p, m.p).multiplyScalar(k);
    if (vel.length() < 0.3 * k) {
      // a tap: a quick nudge sideways
      const side = V(Math.cos(this.horse.heading), 0, -Math.sin(this.horse.heading));
      vel = side.multiplyScalar((Math.random() < 0.5 ? -1 : 1) * 2.8 * k).add(V(0, 1.4 * k, 0));
    }
    vel.clampLength(0, 6);
    g.hair.forces.push({ pos: m.p.clone(), vel, radius: 0.28, strength: 40, ttl: 0.12 });
    g.audio.rustle(clamp(vel.length() / 4, 0.2, 1), this.pan(m.p));
    this.counters.mane = (this.counters.mane || 0) + 1;
  }

  hitRoad(ray) {
    // march along the ray and test against the road surface
    const r = this.road;
    for (let t = 0.5; t < 60; t += 0.25) {
      const q = ray.origin.clone().addScaledVector(ray.direction, t);
      const pr = this.track.project(q.x, q.z, this.horse.s);
      if (!this.track.isBow(pr.s) || !r.exists(pr.s, pr.lat)) continue;
      const y = r.surfaceY(pr.s, pr.lat);
      if (y !== null && Math.abs(q.y - y) < 0.15) return { s: pr.s, lat: pr.lat, p: q };
    }
    return null;
  }

  // touching the unicorn: taps pet it, strokes across the mane shake it
  touchUnicorn(p, moving) {
    const ray = this.rayFrom(p);
    const m = this.pickMane(ray);
    const hh = this.pickHorse(ray, 0.18);
    const strokeMane = m && (moving || !hh) && m.lock.kind !== 'forelock';
    if (strokeMane || (m && !hh)) {
      this.shakeMane(m, p);
      return 'mane';
    }
    if (hh) {
      if (m) this.shakeMane(m, { ...p, vx: p.vx * 0.3, vy: p.vy * 0.3 }, 0.4);
      if (!moving) this.pet(hh, p);
      else {
        this.child.arm.R.target.copy(hh.p);
        this.handTouch.R = 0.8;
        this.horse.eyeClose = Math.min(1, this.horse.eyeClose + 0.03);
        if (p.dist - (p.data.lastPet || 0) > 140) {
          p.data.lastPet = p.dist;
          this.pet(hh, p);
        }
      }
      return 'horse';
    }
    return null;
  }

  // pet the unicorn: the child's hand goes to the touched spot
  pet(hit, p) {
    const h = this.horse, g = this.g;
    h.eyeClose = Math.min(1, h.eyeClose + 0.5);
    h.nuzzle = Math.min(1, h.nuzzle + 0.35);
    this.counters.pets = (this.counters.pets || 0) + 1;
    if (Math.random() < 0.5) g.audio.breath(0.3, this.pan(hit.p));
    else g.audio.snort(0.2, this.pan(hit.p));
    // child reaches (if close enough)
    const c = this.child;
    const sh = this.g.childModel.bones.uarmR.getWorldPosition(new THREE.Vector3());
    if (!c.attach && hit.p.distanceTo(sh) < 0.55) {
      c.arm.R.target.copy(hit.p);
      c.arm.R.w = 1;
      c.curl.R = 0.15;
      this.handTouch.R = 1.2;
    }
  }

  _updateHands(dt) {
    for (const s of ['L', 'R']) {
      if (this.handTouch[s] > 0) {
        this.handTouch[s] -= dt;
        if (this.handTouch[s] <= 0) {
          this.child.arm[s].w = 0;
          this.child.curl[s] = 0.35;
        }
      }
    }
  }

  // --------------------------------------------------------------- shots
  shotIntro() {
    // low over the wet grass, looking toward the low sun past the child at the puddle
    const k = smoothstep(0, 7, this.rt);
    const base = V(0.1, lerp(1.2, 0.45, k), 0.4);
    const dir = this.ar(V(0.3, 0.12, 1), V(0.5, 0.1, 0.85)).normalize();
    const d = this.ar(6.2, 4.6) + (1 - k) * 2.5;
    return { pos: base.clone().addScaledVector(dir, d), tgt: base, fov: this.ar(52, 40) };
  }
  shotPuddle() {
    // from across the puddle, looking down at the water in front of the child:
    // the child's face leans in at the top, the water mirrors what is above it
    return {
      pos: this.ar(V(0.42, 1.5, 1.8), V(0.48, 1.22, 1.72)),
      tgt: this.ar(V(0.22, 0.0, 0.7), V(0.22, 0.02, 0.72)),
      fov: this.ar(50, 48),
    };
  }
  shotReveal() {
    const pts = [V(0, 0.95, 0), V(0, 0.2, 0), this.horseHead(), V(RUN_X, 1.65, -0.9), V(RUN_X, 0.9, -1.0)];
    const dir = this.ar(V(-0.42, 0.05, 1), V(-0.55, 0.0, 1)).normalize();
    return fitShot({ points: pts, dir, fov: this.ar(44, 38), aspect: this.aspect(), margin: 0.12 });
  }
  shotMeet() {
    const g = this.g;
    const ch = g.childModel.bones.head.getWorldPosition(new THREE.Vector3());
    const cf = g.childModel.bones.footL.getWorldPosition(new THREE.Vector3());
    const hp = this.horse.pos;
    const muzzle = this.g.unicorn.bones.head.localToWorld(new THREE.Vector3(0, 0.5, 0));
    const pts = [ch.clone().add(V(0, 0.1, 0)), cf, this.horseHead(), muzzle, hp.clone().add(V(0, 1.6, 0.1)), hp.clone().add(V(0, 0.9, 0.55))];
    const dir = this.ar(V(-1, 0.22, 0.95), V(-1, 0.16, 0.4)).normalize();
    return fitShot({ points: pts, dir, fov: this.ar(46, 36), aspect: this.aspect(), margin: this.ar(0.16, 0.1) });
  }
  shotKneel() {
    const g = this.g;
    const h = this.horse;
    const c = g.childModel.bones.hips.getWorldPosition(new THREE.Vector3());
    const head = this.horseHead();
    const pts = [h.pos.clone().add(V(0, 1.15, 0)), h.pos.clone().add(V(0, 0.1, -0.95)), h.pos.clone().add(V(0, 0.1, 0.8)), head, c.clone().add(V(0, 0.55, 0)), c.clone().add(V(0, -0.5, 0))];
    const dir = this.ar(V(-0.8, 0.45, 0.85), V(-0.95, 0.38, 0.55)).normalize();
    return fitShot({ points: pts, dir, fov: this.ar(46, 38), aspect: this.aspect(), margin: 0.12 });
  }
  // camera in the horse's frame: off = (left, up, forward) in metres; negative x is
  // the unicorn's right-hand (sun) side on the outbound run
  horseFrame(off, look) {
    const h = this.horse;
    const hd = h.heading;
    const f = V(Math.sin(hd), 0, Math.cos(hd));
    const r = V(Math.cos(hd), 0, -Math.sin(hd)); // horse's left
    const base = h.pos.clone();
    const pos = base.clone().addScaledVector(r, off.x).addScaledVector(UP, off.y).addScaledVector(f, off.z);
    const tgt = base.clone().addScaledVector(r, look.x).addScaledVector(UP, look.y).addScaledVector(f, look.z);
    return { pos, tgt, anchor: h.pos, anchorId: 'horse' };
  }
  horseHead() {
    return this.g.unicorn.bones.head.localToWorld(new THREE.Vector3(0, 0.22, 0));
  }

  // --------------------------------------------------------------- states
  _states() {
    const D = this;
    const g = this.g;
    const h = this.horse;
    const c = this.child;
    const childSquat = () => {
      c.placeAt(CHILD_SPOT.clone(), 0);
      c.setWeights({ squat: 1 });
      c.look.target = V(0.2, 0, 0.8);
    };
    const childStand = (yaw) => {
      c.setWeights({ stand: 1 });
    };
    return {
      // ------------------------------------------------------------ INTRO
      intro: {
        prep() {
          childSquat();
          h.placeAt(V(9, 0, -6.5), -1.1);
        },
        enter() {
          childSquat();
          h.placeAt(V(9, 0, -6.5), -1.1);
          D.shot = D.shotIntro();
          D.rig.snap(D.shot);
          D.stiff = 0.9;
          D.dripT = 2.5;
          g.audio.setAmbience({ wind: 0.07, birds: 1 });
        },
        update(dt) {
          D.shot = D.shotIntro();
          D._ambientDrips(dt);
          if (D.rt > 7.5 || (D.firstTouchT !== undefined && D.rt - D.firstTouchT > 1.6)) D.go('puddle');
        },
        down(p) {
          if (D.firstTouchT === undefined) D.firstTouchT = D.rt;
          D.touchWorld(p, { mane: false });
        },
        move(p) {
          D.touchWorld(p, { mane: false, birds: false });
        },
      },
      // ------------------------------------------------------------ PUDDLE
      puddle: {
        prep() {
          childSquat();
          h.placeAt(V(9, 0, -6.5), -1.1);
        },
        enter() {
          D.stiff = 1.0;
          D.shot = D.shotPuddle();
          D.sub.approach = false;
          D.sub.arrived = false;
          D.sub.visibleT = 0;
          D.dripT = 1.0;
          c.look.target = V(0.05, 0, 0.8);
        },
        update(dt) {
          D.shot = D.shotPuddle();
          D._ambientDrips(dt);
          D._updateHands(dt);
          const S = D.sub;
          // the splashing attracts the curious unicorn
          if (!S.approach && ((D.counters.ripples || 0) >= 3 || D.t > 5.5)) {
            S.approach = true;
            const path = new PolyTrack([h.pos.clone(), V(6.0, 0, -5.2), V(3.2, 0, -3.6), V(1.4, 0, -2.3), HORSE_SPOT.clone()]);
            h.setTrack(path, 0);
            h.targetSpeed = 1.25;
            S.path = path;
            S.breathT = 1.5;
          }
          if (S.approach && !S.arrived) {
            const rem = S.path.length - h.s;
            h.targetSpeed = rem > 0.02 ? Math.min(1.25, Math.max(0.15, Math.sqrt(2 * 0.9 * Math.max(0, rem - 0.05)))) : 0;
            S.breathT -= dt;
            if (S.breathT < 0) {
              S.breathT = 2.2;
              g.audio.breath(0.08 + 0.2 * (1 - rem / S.path.length), -0.6);
            }
            if (rem < 1.6) {
              h.headLower = 0.2;
              h.look.target = V(0.42, 0, 1.55);
              h.look.weight = 1;
            }
            if (rem < 0.04 && h.speed < 0.05) {
              S.arrived = true;
              h.track = null;
              S.arriveT = D.t;
              g.audio.breath(0.32, 0);
            }
          }
          if (S.arrived) {
            S.visibleT += dt;
            // the unicorn's breath stirs the water under its nose
            if (Math.random() < dt * 0.5) {
              const m = g.unicorn.bones.head.localToWorld(V(0, 0.52, 0));
              const sim = g.world.puddles.simAt(m.x, m.z + 0.2, 0.1);
              if (sim) {
                sim.disturb(m.x, m.z + 0.25, 0.2, -0.0012);
                g.audio.breath(0.18, 0);
              }
            }
            if (S.visibleT > 9 && !S.nick) {
              S.nick = true;
              g.audio.nicker(0.22, 0);
              h.nuzzle = 0.5;
            }
            if (S.visibleT > 13) D.go('turn');
          }
        },
        down(p) {
          const ray = D.rayFrom(p);
          const w = D.pickWater(ray);
          if (w) {
            D.rippleAt(w.p, p, 1);
            // the child's hand dabbles where the finger touches
            const sh = g.childModel.bones.uarmR.getWorldPosition(new THREE.Vector3());
            const side = w.p.x > 0 ? 'L' : 'R';
            if (w.p.distanceTo(sh) < 0.75) {
              c.arm[side].target.copy(w.p).add(V(0, 0.02, 0));
              c.arm[side].w = 1;
              c.curl[side] = 0.2;
              D.handTouch[side] = 1.0;
            }
            // touching the unicorn's reflection makes the child look up and turn
            if (D.sub.arrived && D.sub.visibleT > 1.2) {
              const refl = D.reflectionPoint(D.horseHead());
              if (refl && refl.distanceTo(w.p) < 0.55) {
                D.sub.turnSoon = true;
                setTimeout(() => D.state === 'puddle' && D.go('turn'), 450);
              }
            }
          } else D.touchWorld(p, { mane: false });
        },
        move(p) {
          const w = D.pickWater(D.rayFrom(p));
          if (w) D.rippleAt(w.p, p, 0.7);
        },
      },
      // ------------------------------------------------------------ TURN (reveal)
      turn: {
        prep() {
          childSquat();
          h.placeAt(HORSE_SPOT.clone(), 0);
          h.headLower = 0.2;
          h.look.target = V(0.42, 0, 1.55);
          h.look.weight = 1;
        },
        enter() {
          D.stiff = 0.85;
          D.sub.yaw0 = c.yaw;
          c.look.target = null;
        },
        update(dt) {
          const t = D.t;
          // stand up, then turn around toward the unicorn
          if (t > 0.3) c.setWeights({ stand: 1, lookUp: smoothstep(1.2, 2.4, t) * 0.8 });
          const k = smoothstep(0.9, 2.6, t);
          c.yaw = lerp(D.sub.yaw0, Math.PI - 0.35, easeInOut(k));
          c.walk = k > 0 && k < 1 ? 0.4 : 0;
          if (t > 1.8) c.look.target = D.horseHead();
          h.headLower = lerp(0.2, 0.5, smoothstep(1.0, 3.0, t));
          h.look.target = g.childModel.bones.head.getWorldPosition(new THREE.Vector3());
          D.shot = t < 0.6 ? D.shotPuddle() : D.shotReveal();
          if (t > 1.6 && !D.sub.n) {
            D.sub.n = true;
            g.audio.nicker(0.2, 0.1);
          }
          if (t > 3.6) D.go('meet');
        },
        down(p) {
          D.touchWorld(p, { pet: false });
        },
      },
      // ------------------------------------------------------------ MEET
      meet: {
        prep() {
          c.placeAt(CHILD_SPOT.clone(), Math.PI - 0.35);
          c.setWeights({ stand: 1, lookUp: 0.6 });
          h.placeAt(HORSE_SPOT.clone(), 0);
          h.headLower = 0.5;
        },
        enter() {
          D.stiff = 0.9;
          D.sub.shakeDone = false;
          D.sub.idleNudge = 0;
          c.walk = 0;
          D.counters.pets = 0;
        },
        update(dt) {
          D._updateHands(dt);
          D.shot = D.shotMeet();
          const head = g.childModel.bones.head.getWorldPosition(new THREE.Vector3());
          h.look.target = head;
          h.look.weight = 1;
          c.look.target = D.horseHead();
          c.setWeights({ stand: 1, lookUp: 0.6 });
          h.headLower = 0.55 + Math.sin(D.t * 0.6) * 0.05;
          // after being petted, it shakes its wet mane
          if (!D.sub.shakeDone && ((D.counters.pets || 0) >= 2 || D.t > 7)) {
            D.sub.shakeDone = true;
            D.sub.shakeT = D.t + 0.6;
          }
          if (D.sub.shakeT && D.t > D.sub.shakeT) {
            D.sub.shakeT = null;
            h.headShake = 1.0;
            g.audio.snort(0.35, 0.1);
            setTimeout(() => g.audio.rustle(0.9, 0.1), 80);
          }
          const pets = D.counters.pets || 0;
          if ((pets >= 3 && D.t > 6) || D.t > 15) D.go('kneel');
        },
        down(p) {
          if (D.touchUnicorn(p, false)) return;
          D.touchWorld(p, { mane: false });
        },
        move(p) {
          if (D.touchUnicorn(p, p.dist > 20)) return;
          D.touchWorld(p, { mane: false, birds: false });
        },
      },
      // ------------------------------------------------------------ KNEEL
      kneel: {
        prep() {
          c.placeAt(CHILD_SPOT.clone(), Math.PI - 0.35);
          c.setWeights({ stand: 1 });
          h.placeAt(HORSE_SPOT.clone(), 0);
        },
        enter() {
          D.stiff = 0.8;
          h.downDir = 1;
          h.headLower = 0.2;
          D.sub.walk0 = c.pos.clone();
          D.sub.walk1 = V(RUN_X - 0.62, 0, HORSE_SPOT.z - 0.12);
          D.sub.nudge = 0;
          g.audio.snort(0.2, 0);
        },
        update(dt) {
          h.down = Math.min(1, h.down + dt / 3.2);
          // look back at its own back, then at the child
          h.look.target = D.t < 3 ? g.childModel.bones.head.getWorldPosition(new THREE.Vector3()) : V(RUN_X - 0.9, 0.9, HORSE_SPOT.z - 0.3);
          // the child walks to the unicorn's side
          const k = smoothstep(0.8, 3.4, D.t);
          c.pos.lerpVectors(D.sub.walk0, D.sub.walk1, easeInOut(k));
          c.yaw = lerp(Math.PI - 0.35, Math.PI * 0.5, smoothstep(0.8, 1.6, D.t));
          c.walk = k > 0.02 && k < 0.98 ? 0.8 : 0;
          c.look.target = V(RUN_X, 0.9, HORSE_SPOT.z - 0.2);
          D.shot = D.shotKneel();
          if (D.t > 4) {
            D.sub.nudge += dt;
            if (D.sub.nudge > 7 && !D.sub.n1) {
              D.sub.n1 = true;
              g.audio.nicker(0.22, -0.2);
              h.nuzzle = 0.7;
            }
            if (D.sub.nudge > 14) D.go('mount');
          }
        },
        down(p) {
          const ray = D.rayFrom(p);
          if (D.t > 3.2 && (D.pickHorse(ray, 0.3) || D.pickChild(ray) || D.pickMane(ray, 0.15))) return D.go('mount');
          D.touchWorld(p, { mane: true });
        },
      },
      // ------------------------------------------------------------ MOUNT (climb on, rise)
      mount: {
        prep() {
          h.placeAt(HORSE_SPOT.clone(), 0);
          h.down = 1;
          h.downDir = 1;
          c.placeAt(V(RUN_X - 0.62, 0, HORSE_SPOT.z - 0.12), Math.PI * 0.5);
          c.setWeights({ stand: 1 });
        },
        enter() {
          D.stiff = 0.9;
          const seat = new THREE.Matrix4().multiplyMatrices(g.unicorn.bones.body.matrixWorld, g.seatOffset);
          D.sub.seat0 = new THREE.Vector3().setFromMatrixPosition(seat);
          D.sub.p0 = c.pos.clone();
          D.sub.attached = false;
          c.walk = 0;
          g.audio.rustle(0.4, 0);
        },
        update(dt) {
          const t = D.t;
          const S = D.sub;
          if (!S.attached) {
            // reach onto the back, hop, swing a leg over
            const seatM = new THREE.Matrix4().multiplyMatrices(g.unicorn.bones.body.matrixWorld, g.seatOffset);
            const seat = new THREE.Vector3().setFromMatrixPosition(seatM);
            const k = smoothstep(0.35, 1.5, t);
            c.setWeights({ stand: 1 - k, climb: Math.sin(Math.PI * clamp((t - 0.3) / 1.6)) * 1.2, ride: smoothstep(1.2, 1.8, t) });
            c.arm.L.target.copy(seat).add(V(0.15, 0.1, 0.25));
            c.arm.R.target.copy(seat).add(V(-0.05, 0.1, 0.3));
            c.arm.L.w = c.arm.R.w = 1 - smoothstep(1.4, 1.8, t);
            const hop = Math.sin(Math.PI * clamp((t - 0.6) / 1.0)) * 0.25;
            c.pos.lerpVectors(S.p0, seat.clone().sub(V(0, 0.47, 0)), easeInOut(k));
            c.pos.y += hop;
            c.yaw = lerp(Math.PI * 0.5, 0, smoothstep(0.9, 1.7, t));
            if (t > 1.8) {
              S.attached = true;
              c.attachTo(g.unicorn.bones.body, g.seatOffset);
              c.setWeights({ ride: 1 });
              S.attachT = t;
              g.audio.snort(0.25, 0);
            }
          } else {
            // hold the mane, the unicorn rises (front legs first)
            D.holdMane(1);
            if (t > S.attachT + 0.6) {
              h.downDir = -1;
              h.down = Math.max(0, h.down - dt / 2.6);
            }
            if (h.down <= 0 && t > S.attachT + 3.4) D.go('run');
          }
          h.look.target = null;
          D.shot = D.shotKneel();
        },
      },
      // ------------------------------------------------------------ RUN through puddles
      run: {
        prep() {
          h.placeAt(HORSE_SPOT.clone(), 0);
          h.down = 0;
          c.attachTo(g.unicorn.bones.body, g.seatOffset);
          c.setWeights({ ride: 1 });
        },
        enter() {
          const s0 = D.track.project(h.pos.x, h.pos.z, 0).s;
          h.setTrack(D.track, s0);
          h.targetSpeed = 1.5;
          h.accel = 1.6;
          D.sub.base = 1.5;
          D.sub.boost = 0;
          D.sub.waitT = 0;
          D.stiff = 1.6;
          D.onBow = false;
          g.audio.setAmbience({ wind: 0.1, birds: 0.8 });
        },
        update(dt) {
          D.holdMane(1);
          const S = D.sub;
          // the unicorn settles into a trot, then canters; pats make it go faster
          S.base = Math.min(3.6, S.base + dt * 0.35);
          S.boost = Math.max(0, S.boost - dt * 0.35);
          const sJump = D.track.sA - 4.4;
          let tv = S.base + S.boost;
          // without encouragement it waits at the big puddle, stamping (each stamp: a little rainbow)
          if (h.s > sJump - 6 && tv < 5.5) {
            tv = Math.max(0, Math.min(tv, (sJump - 1.5 - h.s) * 1.2));
            if (h.speed < 0.2) {
              S.waitT += dt;
              if (S.waitT > 1.4) {
                S.waitT = 0;
                D.stampSplash();
              }
              S.waited = (S.waited || 0) + dt;
              if (S.waited > 9) S.boost = 6; // goes on its own eventually
            }
          }
          h.targetSpeed = tv;
          h.accel = 2.6;
          g.hair.wind.set(0, 0, 0);
          // jump when fast enough at the end of the big puddle
          if (h.s >= sJump && h.speed > 4.5) return D.go('leap');
          D.shot = D.shotRun();
        },
        down(p) {
          const ray = D.rayFrom(p);
          if (D.pickHorse(ray, 0.35) || D.pickMane(ray, 0.2) || D.pickChild(ray)) {
            D.sub.boost = Math.min(7, D.sub.boost + 2.6);
            g.audio.snort(0.25, 0);
            h.extraPitch = -0.04;
            setTimeout(() => (h.extraPitch = 0), 200);
            return;
          }
          // tapping the spray or anywhere ahead also urges it on
          const r = D.touchWorld(p, { mane: false });
          if (r !== 'water') D.sub.boost = Math.min(7, D.sub.boost + 1.2);
        },
      },
      // ------------------------------------------------------------ LEAP & BIRTH OF THE BOW
      leap: {
        prep() {
          D.prepRun(D.track.sA - 5.2, 7.5);
        },
        enter() {
          const tr = D.track;
          // where must the body be so the leading foreleg meets the contact point?
          const hoofOff = h.measurePoseHoof('reach', 'FL');
          const A = tr.pos(tr.sA, new THREE.Vector3());
          A.y = tr.bowHeight(tr.sA + 0.01);
          const lat = tr.lateral(tr.sA, new THREE.Vector3());
          D.sub.contact = A.clone().addScaledVector(lat, 0.13);
          const rootTo = D.sub.contact.clone().sub(V(-hoofOff.x * 0 + lat.x * 0.13, hoofOff.y, hoofOff.z)).sub(lat.clone().multiplyScalar(0.13));
          rootTo.x = A.x;
          rootTo.z = A.z - hoofOff.z;
          rootTo.y = A.y - hoofOff.y;
          const dist = rootTo.z - h.pos.z;
          const T = clamp(dist / Math.max(h.speed, 4), 0.42, 0.9);
          // push-off splash from the hind hooves in the puddle
          for (const id of ['HL', 'HR']) {
            const p = h.hoofWorld(id, new THREE.Vector3());
            if (g.world.puddles.simAt(p.x, p.z)) {
              g.drops.splash(p.x, WATER_Y, p.z, 1.0, 0, h.speed * 0.6, 420);
              g.world.puddles.simAt(p.x, p.z).disturb(p.x, p.z, 0.2, -0.01);
            }
          }
          g.audio.splash(1, 0);
          g.audio.whoosh(0.4);
          h.startJump({
            to: rootTo,
            apexTime: T,
            onContact: () => D.go('birth'),
          });
          D.sub.T = T;
          D.stiff = 2.2;
        },
        update(dt) {
          D.holdMane(1);
          // slow down as the hoof reaches into the air
          const u = clamp(D.t / D.sub.T, 0, 1);
          g.timeScale = lerp(1, 0.16, smoothstep(0.45, 1.0, u));
          D.shot = D.shotHoof(smoothstep(0.0, 0.7, u));
          // spray thrown up with the leap hangs around the reaching hoof
          if (Math.random() < 0.7) {
            const p = h.hoofWorld('FL', new THREE.Vector3());
            for (let k = 0; k < 6; k++) g.drops.spawn(p.x + (Math.random() - 0.5) * 0.9, p.y - 0.4 + Math.random() * 0.5, p.z + (Math.random() - 0.4) * 1.2, (Math.random() - 0.5) * 0.5, 1.6 + Math.random() * 1.2, h.speed * 0.6, 1.2);
          }
        },
      },
      birth: {
        prep() {
          D.prepRun(D.track.sA - 1.2, 7.5);
          h.startJump({ to: h.pos.clone().add(V(0, 1.2, 0.5)), apexTime: 0.05 });
          h.update(0.06);
        },
        enter() {
          const tr = D.track;
          const s = tr.sA;
          g.road.begin(s, 0.13);
          D.onBow = true;
          // pull the nearby spray into the new surface (condensation)
          D.sub.condense = 1.0;
          // land the gait onto the bow
          const sRoot = s - (h.measurePoseHoof('reach', 'FL').z);
          const contact = tr.pos(s, new THREE.Vector3()).addScaledVector(tr.lateral(s, new THREE.Vector3()), 0.13);
          contact.y = tr.bowHeight(s + 0.01);
          h.endJump(tr, sRoot, contact);
          h.speed = 6.5;
          h.targetSpeed = 9;
          h.accel = 2.0;
          g.audio.glass(5, 1.1, 0);
          setTimeout(() => g.audio.glass(7, 0.7, -0.2), 140);
          setTimeout(() => g.audio.glass(9, 0.5, 0.2), 300);
          const cp = tr.pos(s, new THREE.Vector3());
          D.sub.cp = cp.clone();
          g.sparkles.burst(cp.x, cp.y, cp.z, 60, 1.6, (k) => (k % 7) / 6, 1.4, 0.03, 1.5);
          D.rig.drift = 0.3;
          g.audio.setAmbience({ wind: 0.22, gust: 0.1, birds: 0.3 });
        },
        update(dt, rdt) {
          D.holdMane(1);
          // condensation: spray droplets near the contact are drawn into the forming road
          if (D.sub.condense > 0) {
            D.sub.condense -= dt;
            const dr = g.drops, cp = D.sub.cp;
            const yS = D.track.bowHeight(D.track.sA + 0.5);
            for (let i = 0; i < dr.n; i++) {
              const dx = dr.p[i * 3] - cp.x, dy = dr.p[i * 3 + 1] - yS, dz = dr.p[i * 3 + 2] - cp.z;
              const d2 = dx * dx + dz * dz;
              if (d2 > 9 || Math.abs(dy) > 2.5) continue;
              const k = (1 - Math.sqrt(d2) / 3) * 9 * dt;
              dr.v[i * 3 + 1] += (-dy * 3 - dr.v[i * 3 + 1]) * k;
              dr.v[i * 3] *= 1 - k * 0.3;
              dr.v[i * 3 + 2] *= 1 - k * 0.3;
            }
          }
          // time returns to normal while the camera swings around
          const k = smoothstep(1.6, 5.0, D.rt);
          g.timeScale = lerp(0.16, 1.0, k);
          D.shot = D.shotBirth(smoothstep(1.2, 6.5, D.rt));
          D.stiff = 1.6;
          if (D.rt > 7.0) {
            D.rig.drift = 1;
            D.go('ascent');
          }
        },
        down(p) {
          D.touchWorld(p, { road: true, water: false, grass: false });
        },
      },
      // ------------------------------------------------------------ ASCENT
      ascent: {
        prep() {
          D.prepBow(0.08);
        },
        enter() {
          g.timeScale = 1;
          h.targetSpeed = 11;
          h.accel = 2;
          D.stiff = 0.9;
          D.sub.boost = 0;
        },
        update(dt) {
          D.holdMane(1);
          const u = D.track.u(h.s);
          D.sub.boost = Math.max(0, D.sub.boost - dt * 0.8);
          D.limitSpeedByRoad(10.5 + D.sub.boost);
          // passing through the cloud: mist beads on the mane
          const dens = g.world.clouds.densityAt(g.unicorn.bones.neck2.getWorldPosition(new THREE.Vector3()));
          if (dens > 0.05) g.hair.wet(dens * dt * 1.6);
          g.audio.setAmbience({ wind: 0.22 + u * 0.4, gust: 0.25, birds: u < 0.25 ? 0.4 : 0, muffle: Math.min(1, D.mist * 1.5) });
          D.shot = D.shotAscent(u);
          if (D.road.stalled && D.road.sFront - h.s < 9 && u > 0.31) D.go('crisis');
        },
        down(p) {
          const ray = D.rayFrom(p);
          if (D.pickHorse(ray, 0.25) && !D.pickMane(ray)) {
            D.sub.boost = Math.min(4, D.sub.boost + 1.5);
            g.audio.snort(0.2, 0);
            return;
          }
          D.touchWorld(p, { road: true, water: false, grass: false });
        },
        move(p) {
          const m = D.pickMane(D.rayFrom(p));
          if (m) D.shakeMane(m, p);
        },
      },
      // ------------------------------------------------------------ CRISIS & REVIVAL
      crisis: {
        prep() {
          D.prepBow(0.37);
          D.road.reserve = 0;
          D.road.humidityBoost = 0;
          h.speed = 0;
          h.targetSpeed = 0;
          D.road.sFront = h.s + 6;
          for (let r = 0; r < D.road.N; r++) {
            const s = (D.road.k0 + r) * D.road.ds;
            D.road.rho[r] = s < h.s - 6 ? 1 : Math.max(0.12, 1 - (s - (h.s - 6)) / 9);
          }
          g.hair.wet(1.0);
        },
        enter() {
          D.stiff = 0.8;
          D.sub.shake = 0;
          D.sub.calm = 0;
          D.sub.revived = false;
          D.sub.lookBack = 0;
          D.sub.absorbed0 = D.road.absorbed;
          D.sub.idle = 0;
          D.sub.dripT = 1.5;
          g.audio.setAmbience({ wind: 0.32, gust: 0.35, birds: 0 });
          D.sub.grab = D.setupGrab();
          // the light ahead is rebuilt only by droplets shaken free while the unicorn waits
          D.road.acceptReserve = false;
          D.road.reserve = 0;
          D.sub.stopT = 0;
          D.sub.armed = false;
          g.hair.budget = 1;
          // fine mist from the cloud still beads on the mane
          if (g.hair.totalWater() < 60) g.hair.wet(0.85, (L) => L.kind === 'mane');
        },
        update(dt) {
          const S = D.sub;
          D.limitSpeedByRoad(S.revived ? 9 : 2.5);
          if (h.speed < 0.3) S.stopT += dt;
          if (!S.armed && S.stopT > 0.8) {
            S.armed = true;
            D.road.reserve = 0;
            D.road.reserveSince = g.drops.clock;
            D.road.acceptReserve = true;
            S.absorbed0 = D.road.absorbed;
            g.hair.budget = 5;
          }
          // the unicorn tests the faint light with a hoof and looks back
          if (h.speed < 0.3) {
            h.look.target = g.childModel.bones.head.getWorldPosition(new THREE.Vector3());
            h.look.weight = 0.8;
            S.lookBack += dt;
            if (S.lookBack > 1.2 && !S.n) {
              S.n = true;
              g.audio.nicker(0.18, 0);
            }
          } else h.look.target = null;
          // wind sways the mane; now and then a droplet falls and lights the road
          S.dripT -= dt;
          if (S.dripT < 0) {
            S.dripT = 1.4 + Math.random() * 1.6;
            const L = g.hair.locks[Math.floor(Math.random() * g.hair.locks.length)];
            const tip = L.p[L.p.length - 1];
            g.drops.spawn(tip.x, tip.y, tip.z, 0.1, -0.2, 0.3, 1.2, 'mane');
          }
          // child's hands on the mane follow the finger
          D.applyGrab(dt);
          S.idle += dt;
          if (S.idle > 10) {
            // a gust shakes the mane by itself
            g.hair.forces.push({ pos: g.unicorn.bones.neck2.getWorldPosition(new THREE.Vector3()), vel: V(Math.sin(D.t * 9) * 3, 1, 0), radius: 0.8, strength: 12, ttl: 0.05 });
          }
          const got = S.armed ? D.road.absorbed - S.absorbed0 : 0;
          if (!S.revived && S.armed && (got > 60 || D.road.reserve > 80)) {
            S.revived = true;
            S.revT = D.t;
            D.road.humidityBoost = 0.8;
            h.look.target = null;
            g.audio.nicker(0.3, 0);
            g.audio.horn(0.5);
          }
          D.shot = D.shotCrisis();
          if (S.revived && D.t - S.revT > 2.0) {
            D.releaseGrab();
            D.go('climb');
          }
        },
        down(p) {
          D.sub.idle = 0;
          D.grabPointer = p;
          p.data.grabX = p.x;
          D.touchWorld(p, { road: true, water: false, grass: false, mane: false });
        },
        move(p) {
          D.sub.idle = 0;
          D.grabPointer = p;
        },
        up(p) {
          if (D.grabPointer === p) D.grabPointer = null;
        },
      },
      // run on toward the summit
      climb: {
        exit() {
          D.road.acceptReserve = false;
          g.hair.budget = 1;
        },
        enter() {
          h.targetSpeed = 9;
          D.stiff = 0.9;
        },
        update(dt) {
          D.holdMane(1);
          const u = D.track.u(h.s);
          const sSum = D.track.sOfU(0.5);
          D.limitSpeedByRoad(Math.min(9, Math.sqrt(2 * 1.6 * Math.max(0, sSum - h.s)) + 0.0));
          D.shot = D.shotAscent(Math.max(u, 0.42));
          if (h.s > sSum - 0.6 && h.speed < 0.2) D.go('summit');
        },
        down(p) {
          D.touchWorld(p, { road: true, water: false, grass: false });
        },
        move(p) {
          const m = D.pickMane(D.rayFrom(p));
          if (m) D.shakeMane(m, p);
        },
      },
      // ------------------------------------------------------------ SUMMIT: light layers
      summit: {
        prep() {
          D.prepBow(0.499);
          h.targetSpeed = 0;
          h.speed = 0;
        },
        enter() {
          D.stiff = 0.8;
          h.targetSpeed = 0;
          D.layersOn = true;
          // the layers gather beside the child, within reach of the right hand:
          // violet at the shoulder, red at arm's length (settled on the shoulder below)
          g.lightLayers.spacing = 0.062;
          g.lightLayers.place(D.summitLayerBase(V(0, D.track.bowHeight(h.s) + 1.65, 0), true));
          D.sub.handT = 0;
          D.sub.idle = 0;
          D.layerVisits = new Set();
          c.arm.R.w = 1;
          c.arm.R.pole.set(-0.6, -0.3, -0.6);
          c.spread.R = 1;
          c.curl.R = 0.05;
          D.sub.target = g.childModel.bones.head.getWorldPosition(new THREE.Vector3()).add(V(-0.2, 0.35, 0.15));
          g.audio.setAmbience({ wind: 0.12, gust: 0.05, birds: 0 });
        },
        update(dt) {
          const S = D.sub;
          D.holdMane(1, 'L');
          S.idle += dt;
          if (S.handT < 1) {
            // settle the layers on the shoulder once the riding pose has settled
            const sh = g.childModel.bones.uarmR.getWorldPosition(new THREE.Vector3());
            if (Math.abs(sh.y - g.lightLayers.base.y) < 0.5) g.lightLayers.place(g.lightLayers.base.clone().lerp(D.summitLayerBase(sh), Math.min(1, dt * 8)));
          }
          const headNow = g.childModel.bones.head.getWorldPosition(new THREE.Vector3());
          if (S.target.distanceTo(headNow) > 1.2) S.target.copy(headNow).add(V(0, 0.3, 0));
          // without a finger the child reaches up on their own, slowly
          if (!D.summitPtr) {
            const k = smoothstep(2, 6, S.idle);
            const sh = g.childModel.bones.uarmR.getWorldPosition(new THREE.Vector3());
            const fwd = V(Math.sin(h.heading), 0, Math.cos(h.heading));
            const right = V(-Math.cos(h.heading), 0, Math.sin(h.heading));
            const auto = sh.addScaledVector(right, 0.07 + 0.03 * Math.cos(D.t * 0.5)).addScaledVector(fwd, -0.1);
            auto.y += 0.15 + 0.15 * Math.sin(D.t * 0.6);
            S.target.lerp(auto, k * dt * 2);
          }
          c.arm.R.target.copy(S.target);
          c.look.target = g.childModel.bones.handR.getWorldPosition(new THREE.Vector3());
          c.setWeights({ ride: 1, lookUp: 0.8 });
          const hand = g.childModel.bones.f2aR.getWorldPosition(new THREE.Vector3());
          g.lightLayers.hand.copy(hand);
          const L = g.lightLayers.layerAt(hand.y, hand.x, hand.z);
          if (L.index >= 0) {
            g.audio.layerPad(L.index, 0.4 + L.w * 0.6);
            D.layerVisits.add(L.index);
            if (Math.random() < dt * 20) g.sparkles.spawn(hand.x, hand.y, hand.z, (Math.random() - 0.5) * 0.2, 0.05, (Math.random() - 0.5) * 0.2, L.t, 0.8, 0.012, 1);
          } else g.audio.layerPad(-1, 0);
          // hair glows in the layer colours too
          S.handT += dt;
          D.shot = D.shotSummit();
          const enough = D.layerVisits.size >= 4 && S.handT > 7;
          if (enough || S.handT > 22) D.go('descent');
        },
        down(p) {
          D.summitPtr = p;
          D.sub.idle = 0;
          D._summitHand(p);
        },
        move(p) {
          if (D.summitPtr === p) D._summitHand(p);
        },
        up(p) {
          if (D.summitPtr === p) D.summitPtr = null;
        },
        exit() {
          D.layersOn = false;
          g.audio.padOff();
          c.arm.R.w = 0;
          c.spread.R = 0;
          c.curl.R = 0.35;
          c.arm.R.pole.set(-0.3, -1, -0.6);
          D.summitPtr = null;
        },
      },
      // ------------------------------------------------------------ DESCENT
      descent: {
        prep() {
          D.prepBow(0.52);
        },
        enter() {
          D.road.humidityBoost = 0.6;
          h.targetSpeed = 10.5;
          D.stiff = 0.8;
          D.sub.boost = 0;
          g.audio.nicker(0.2, 0);
        },
        update(dt) {
          D.holdMane(1);
          const u = D.track.u(h.s);
          D.sub.boost = Math.max(0, D.sub.boost - dt * 0.8);
          D.limitSpeedByRoad(12 + D.sub.boost);
          g.audio.setAmbience({ wind: 0.2 + (1 - u) * 0.3, gust: 0.2, birds: u > 0.8 ? 0.6 : 0, muffle: Math.min(1, D.mist * 1.5) });
          D.shot = D.shotDescent(u);
          if (u > 0.985) D.go('landing');
        },
        down(p) {
          const ray = D.rayFrom(p);
          if (D.pickHorse(ray, 0.25) && !D.pickMane(ray)) {
            D.sub.boost = Math.min(4, D.sub.boost + 1.5);
            g.audio.snort(0.2, 0);
            return;
          }
          D.touchWorld(p, { road: true, water: false, grass: false });
        },
        move(p) {
          const m = D.pickMane(D.rayFrom(p));
          if (m) D.shakeMane(m, p);
        },
      },
      // ------------------------------------------------------------ LANDING
      landing: {
        enter() {
          D.stiff = 1.0;
          g.audio.setAmbience({ wind: 0.1, birds: 1 });
        },
        update(dt) {
          D.holdMane(1);
          const sEnd = D.track.sEnd;
          const rem = sEnd - h.s;
          h.targetSpeed = Math.min(10, Math.sqrt(2 * 1.25 * Math.max(0, rem)));
          h.accel = 3;
          if (h.s > D.track.sLand + 1) D.onBow = false;
          if (h.s > D.track.sLand + 30 && D.road.active) D.road.end();
          // the bow behind melts into light
          D.road.fade = 1 - smoothstep(D.track.sLand - 2, D.track.sLand + 26, h.s);
          D.shot = D.shotLanding();
          if (rem < 0.2 && h.speed < 0.05) D.go('farewell');
        },
        down(p) {
          D.touchWorld(p, { road: true });
        },
      },
      // ------------------------------------------------------------ FAREWELL
      farewell: {
        prep() {
          h.setTrack(D.track, D.track.sEnd);
          h.track = null;
          c.attachTo(g.unicorn.bones.body, g.seatOffset);
          c.setWeights({ ride: 1 });
          for (const k in c.wS) c.wS[k] = k === 'ride' ? 1 : 0;
        },
        enter() {
          D.road.end();
          D.onBow = false;
          h.track = null;
          h.targetSpeed = 0;
          h.downDir = 1;
          D.stiff = 0.9;
          D.sub.phase = 'down';
          const f = V(Math.sin(h.heading), 0, Math.cos(h.heading));
          const l = V(Math.cos(h.heading), 0, -Math.sin(h.heading));
          D.sub.f = f;
          D.sub.l = l;
          D.sub.side = h.pos.clone().addScaledVector(l, 0.8).addScaledVector(f, 0.35).setY(0);
          D.sub.front = h.pos.clone().addScaledVector(l, 0.32).addScaledVector(f, 1.32).setY(0);
          D.sub.faceYaw = h.heading + Math.PI - 0.25;
          D.hornDrop = true;
        },
        update(dt) {
          const S = D.sub;
          if (S.phase === 'down') {
            D.holdMane(1);
            h.down = Math.min(1, h.down + dt / 2.6);
            if (h.down >= 1) {
              S.phase = 'off';
              S.t0 = D.t;
              const seat = new THREE.Matrix4().multiplyMatrices(g.unicorn.bones.body.matrixWorld, g.seatOffset);
              S.seat = new THREE.Vector3().setFromMatrixPosition(seat).sub(V(0, 0.47, 0));
              c.placeAt(S.seat.clone(), h.heading);
              c.arm.L.w = c.arm.R.w = 0;
            }
          } else if (S.phase === 'off') {
            // slide down the side and stand
            const k = smoothstep(0, 1.4, D.t - S.t0);
            c.pos.lerpVectors(S.seat, S.side, easeInOut(k));
            c.pos.y += Math.sin(Math.PI * k) * 0.15;
            c.yaw = h.heading + k * 0.6;
            c.setWeights({ ride: 1 - k, stand: k, climb: Math.sin(Math.PI * k) * 0.5 });
            if (k >= 1) {
              S.phase = 'walk';
              S.t0 = D.t;
              h.downDir = -1;
            }
          } else if (S.phase === 'walk') {
            // walk round to stand in front of the unicorn, while it gets up
            const k = smoothstep(0, 2.2, D.t - S.t0);
            c.pos.lerpVectors(S.side, S.front, easeInOut(k));
            c.yaw = lerp(h.heading + 0.6, S.faceYaw, smoothstep(0.2, 1, k));
            c.walk = k > 0.02 && k < 0.98 ? 0.8 : 0;
            c.setWeights({ stand: 1 });
            h.down = Math.max(0, h.down - dt / 2.4);
            c.look.target = D.horseHead();
            if (k >= 1 && h.down <= 0) {
              c.walk = 0;
              S.phase = 'palm';
              S.t0 = D.t;
              S.waitT = 0;
            }
          } else if (S.phase === 'palm') {
            // the child holds out a palm; the unicorn lowers its horn to it
            const chest = g.childModel.bones.chest.getWorldPosition(new THREE.Vector3());
            const toHorse = h.pos.clone().sub(chest).setY(0).normalize();
            const palmTarget = chest.clone().addScaledVector(toHorse, 0.26).add(V(0, 0.02, 0));
            if (!S.touch) {
              c.arm.R.target.copy(palmTarget);
              c.arm.R.w = 1;
              c.arm.R.palm = 1;
              c.curl.R = 0.12;
            }
            c.look.target = palmTarget.clone().add(V(0, 0.15, 0));
            c.setWeights({ stand: 1 });
            h.look.target = palmTarget;
            h.look.weight = 1;
            h.headLower = Math.min(0.75, h.headLower + dt * 0.4);
            S.palm = palmTarget;
            S.waitT += dt;
            const tip = g.unicorn.hornTipWorld(new THREE.Vector3());
            if (S.touch) {
              S.touchK = Math.min(1, (S.touchK || 0) + dt / 1.4);
              // the palm rises to meet the horn tip
              c.arm.R.target.lerpVectors(palmTarget, tip.clone().add(V(0, -0.03, 0)), smoothstep(0, 1, S.touchK));
              if (S.touchK >= 1 && !S.born) {
                S.born = true;
                D.hornDrop = false;
                const pc = g.child.palmCenter('R', new THREE.Vector3());
                const face = g.camera.position.clone().sub(pc).setY(0).normalize();
                g.miniBow.start(pc.add(V(0, 0.012, 0)), face, 0.085);
                g.audio.horn(0.7);
                g.sparkles.burst(tip.x, tip.y, tip.z, 30, 0.5, (k) => (k % 7) / 6, 1.2, 0.012, 1.3);
                h.eyeClose = 1;
                D.onMiniBowDone = () => D.go('free', { fromFarewell: true });
              }
            } else if (S.waitT > 8) S.touch = true;
            D.shot = D.shotPalm();
            return;
          }
          D.shot = D.shotFarewellWide();
        },
        down(p) {
          const S = D.sub;
          if (S.phase === 'palm' && !S.touch) {
            const ray = D.rayFrom(p);
            const tip = g.unicorn.hornTipWorld(new THREE.Vector3());
            const pc = g.child.palmCenter('R', new THREE.Vector3());
            const sp1 = D.project(tip), sp2 = D.project(pc);
            const hit = D.pickHorse(ray, 0.2) || D.pickChild(ray) || Math.hypot(sp1.x - p.x, sp1.y - p.y) < 110 || Math.hypot(sp2.x - p.x, sp2.y - p.y) < 110;
            if (hit) S.touch = true;
            return;
          }
          D.touchWorld(p, { pet: false });
        },
      },
      // ------------------------------------------------------------ FREE PLAY
      free: {
        prep() {
          h.setTrack(D.track, D.track.sEnd);
          h.track = null;
          const fwd = V(Math.sin(h.heading), 0, Math.cos(h.heading));
          const left = V(Math.cos(h.heading), 0, -Math.sin(h.heading));
          c.placeAt(h.pos.clone().addScaledVector(left, 0.32).addScaledVector(fwd, 1.32).setY(0), h.heading + Math.PI - 0.25);
          c.setWeights({ stand: 1 });
        },
        enter(opts) {
          D.stiff = 0.6;
          D.sub.wide = opts && opts.fromFarewell ? 0 : 1;
          D.sub.idle = 0;
          // first thing after the ride: a drink from the puddle (wets forelock and mane)
          D.sub.drinkT = g.hair.totalWater() < 60 ? 2.5 : 25;
          D.sub.inviteT = 0;
          D.counters.pets = 0;
          c.arm.R.w = 0;
          c.arm.R.palm = 0;
          h.headLower = 0.4;
          h.look.target = null;
          // the ordinary rainbow brightens in the sky
          D.sub.bow0 = shared.uRainbowSky.value;
          g.audio.setAmbience({ wind: 0.08, birds: 1 });
        },
        update(dt) {
          const S = D.sub;
          D._updateHands(dt);
          S.wide = Math.min(1, S.wide + dt * 0.2);
          shared.uRainbowSky.value = lerp(S.bow0, 1.0, smoothstep(0, 1, S.wide));
          S.idle += dt;
          // the unicorn grazes / drinks from the puddle now and then (wets its forelock)
          S.drinkT -= dt;
          if (S.drinkT < 0 && !S.drinking) {
            S.drinking = 4;
            S.drinkT = 30 + Math.random() * 20;
          }
          if (S.drinking) {
            S.drinking -= dt;
            h.headLower = 1;
            h.look.target = V(-4.95, 0, 3.2);
            h.look.weight = 1;
            if (Math.random() < dt * 3) {
              const m = g.unicorn.bones.head.localToWorld(V(0, 0.52, 0));
              const sim = g.world.puddles.simAt(m.x, m.z, 0.15);
              if (sim) {
                sim.disturb(m.x, m.z, 0.06, -0.002);
                g.audio.drip(0, 0.2, 0.7);
              }
            }
            if (S.drinking < 2 && S.drinking > 1.9) g.hair.wet(0.6, (L) => L.kind !== 'tail');
            if (S.drinking <= 0) {
              S.drinking = 0;
              h.headLower = 0.4;
              h.headShake = 0.8;
              g.audio.snort(0.3, 0);
            }
          }
          const bowDir = V(0.45, 0.35, 0.86).normalize().multiplyScalar(60).add(h.pos);
          const lookBow = Math.sin(D.t * 0.13) > 0.2 && S.wide >= 1;
          c.look.target = lookBow ? bowDir : D.horseHead();
          if (!S.drinking) h.look.target = lookBow ? bowDir : g.childModel.bones.head.getWorldPosition(new THREE.Vector3());
          h.look.weight = 0.7;
          // invitation to ride again
          if (S.idle > 45 && !S.inviting) {
            S.inviting = true;
            h.downDir = 1;
          }
          if (S.inviting) h.down = Math.min(1, h.down + dt / 3);
          D.shot = S.wide < 1 ? D.shotFreeWide(S.wide) : D.shotFree();
        },
        down(p) {
          D.sub.idle = 0;
          const ray = D.rayFrom(p);
          if (D.sub.inviting && h.down > 0.9 && (D.pickHorse(ray, 0.3) || D.pickChild(ray))) return D.replay();
          if (D.touchUnicorn(p, false)) return;
          D.touchWorld(p, { mane: false });
        },
        move(p) {
          D.sub.idle = 0;
          if (D.touchUnicorn(p, p.dist > 20)) return;
          D.touchWorld(p, { mane: false, birds: false });
        },
      },
      // ride back to the start of the run for another journey
      back: {
        enter() {
          const start = V(RUN_X, 0, -1.2);
          const path = new PolyTrack([h.pos.clone(), h.pos.clone().add(V(Math.sin(h.heading) * 3, 0, Math.cos(h.heading) * 3)), V(-1.5, 0, -3.5), V(RUN_X, 0, -3.0), start]);
          h.setTrack(path, 0);
          D.sub.path = path;
          h.targetSpeed = 1.6;
          D.stiff = 0.8;
          D.road.fade = 1;
          D.road.humidityBoost = 0;
          D.road.reserve = 0;
          shared.uRainbowSky.value = 0.35;
        },
        update(dt) {
          D.holdMane(1);
          const rem = D.sub.path.length - h.s;
          h.targetSpeed = Math.min(1.8, Math.sqrt(2 * 1.0 * Math.max(0, rem)));
          D.shot = D.shotRun();
          if (rem < 0.1 && h.speed < 0.05) D.go('run');
        },
      },
    };
  }

  replay() {
    const g = this.g;
    this.go('mount');
    this.sub.p0 = this.child.pos.clone();
  }

  // child grips the mane near the withers
  holdMane(w, only) {
    const g = this.g;
    const c = this.child;
    if (!c.attach) return;
    const neck = g.unicorn.bones.neck1;
    for (const s of ['L', 'R']) {
      if (only && s !== only) continue;
      const off = s === 'L' ? V(0.07, 0.17, 0.02) : V(-0.07, 0.17, 0.02);
      const tp = neck.localToWorld(off.clone());
      c.arm[s].target.copy(tp);
      c.arm[s].w = w;
      c.curl[s] = 0.75;
    }
  }

  // crisis: the child's hands take hold of two mane locks
  setupGrab() {
    const g = this.g;
    const locks = g.hair.locks.filter((L) => L.kind === 'mane');
    // pick locks near the withers end
    const byDist = locks
      .map((L) => ({ L, d: L.p[1].distanceTo(g.childModel.bones.chest.getWorldPosition(new THREE.Vector3())) }))
      .sort((a, b) => a.d - b.d);
    const grabs = [];
    for (let i = 0; i < 6 && i < byDist.length; i++) grabs.push({ lock: byDist[i].L, index: 2, pos: new THREE.Vector3(), strength: 0.0 });
    g.hair.grabs = grabs;
    this.grabState = { x: 0, vx: 0, energy: 0 };
    return grabs;
  }
  applyGrab(dt) {
    const g = this.g, c = this.child;
    const G = this.grabState;
    const p = this.grabPointer;
    let target = 0;
    if (p) {
      target = clamp((p.x - (p.data.grabX ?? p.x)) / 90, -1.6, 1.6);
      // allow repeated left-right scrubbing: recentre slowly
      p.data.grabX = (p.data.grabX ?? p.x) + (p.x - (p.data.grabX ?? p.x)) * dt * 1.5;
      if (Math.abs(p.vx) > 400) target += Math.sign(p.vx) * 0.6;
    }
    const prev = G.x;
    G.x = damp(G.x, target, 14, dt);
    G.vx = (G.x - prev) / Math.max(dt, 1e-3);
    const neck = g.unicorn.bones.neck1;
    const lateral = V(Math.cos(this.horse.heading), 0, -Math.sin(this.horse.heading)); // horse left
    const sway = lateral.clone().multiplyScalar(G.x * 0.13);
    for (const s of ['L', 'R']) {
      const off = s === 'L' ? V(0.06, 0.2, 0.03) : V(-0.06, 0.2, 0.03);
      const tp = neck.localToWorld(off.clone()).add(sway).add(V(0, Math.abs(G.x) * 0.05, 0));
      c.arm[s].target.copy(tp);
      c.arm[s].w = 1;
      c.curl[s] = 0.85;
    }
    const hl = g.childModel.bones.handL.getWorldPosition(new THREE.Vector3());
    const hr = g.childModel.bones.handR.getWorldPosition(new THREE.Vector3());
    g.hair.grabs.forEach((gb, i) => {
      gb.pos.copy(i % 2 ? hl : hr).add(V(0, -0.03, 0));
      gb.strength = 0.55;
    });
    if (Math.abs(G.vx) > 2) g.audio.rustle(Math.min(1, Math.abs(G.vx) / 8), 0);
    // body sways with the shaking
    c.extra.chest = [0, 0, -G.x * 0.08];
  }
  releaseGrab() {
    this.g.hair.grabs = [];
    this.grabPointer = null;
  }

  // where the summit light gathers: just beside and behind the right shoulder, so the
  // camera (on the sunny side, ahead) sees it next to the face rather than across it
  summitLayerBase(sh, fromHorse = false) {
    const h = this.horse;
    const fwd = V(Math.sin(h.heading), 0, Math.cos(h.heading));
    const right = V(-Math.cos(h.heading), 0, Math.sin(h.heading));
    const c = fromHorse ? h.pos.clone().addScaledVector(right, 0.12).addScaledVector(fwd, -0.05) : sh.clone();
    c.addScaledVector(right, 0.08).addScaledVector(fwd, -0.12);
    c.y = sh.y - 0.01;
    return c;
  }

  _summitHand(p) {
    const g = this.g;
    const sh = g.childModel.bones.uarmR.getWorldPosition(new THREE.Vector3());
    const q = this.pointOnViewPlane(p, sh.clone().add(V(0, 0.25, 0)));
    const d = q.clone().sub(sh);
    // height follows the finger first; sideways reach gives way so the hand can get there
    const R = 0.4;
    d.y = clamp(d.y, -0.05, 0.37);
    const hz = Math.hypot(d.x, d.z), hzMax = Math.sqrt(R * R - d.y * d.y);
    if (hz > hzMax) {
      d.x *= hzMax / hz;
      d.z *= hzMax / hz;
    }
    this.sub.target.copy(sh).add(d);
  }

  limitSpeedByRoad(vmax) {
    const h = this.horse;
    const lead = this.road.sFront - h.s;
    const rho = this.road.rhoAt(h.s + 2);
    const v = Math.min(vmax, Math.max(0, (lead - 4.5) * 0.9));
    h.targetSpeed = v;
    h.accel = 2.6;
    // gentle air resistance on the hair
    const f = V(Math.sin(h.heading), 0, Math.cos(h.heading));
    this.g.hair.wind.copy(f).multiplyScalar(-0.0);
  }

  prepRun(s, v) {
    const g = this.g, h = this.horse;
    h.setTrack(this.track, s);
    h.speed = v;
    h.targetSpeed = v;
    h.down = 0;
    this.child.attachTo(g.unicorn.bones.body, g.seatOffset);
    this.child.setWeights({ ride: 1 });
    for (const k in this.child.wS) this.child.wS[k] = k === 'ride' ? 1 : 0;
    g.hair.reset();
  }

  // put the unicorn on the bow at progress u (debug / replays)
  prepBow(u) {
    const g = this.g, h = this.horse;
    const s = this.track.sOfU(u);
    if (!this.road.active) this.road.begin(s - 6, 0.13);
    this.road.birth = 1;
    this.road.k0 = Math.floor((s - 20) / this.road.ds);
    this.road.sBack = s - 14;
    this.road.sFront = s + 25;
    this.road.rho.fill(1);
    this.onBow = true;
    h.setTrack(this.track, s);
    h.speed = u > 0.49 && u < 0.51 ? 0 : 10;
    h.targetSpeed = h.speed;
    this.child.attachTo(g.unicorn.bones.body, g.seatOffset);
    this.child.setWeights({ ride: 1 });
    g.hair.reset();
  }

  stampSplash() {
    const g = this.g, h = this.horse;
    const p = h.hoofWorld('FR', new THREE.Vector3());
    const sim = g.world.puddles.simAt(p.x, p.z);
    h.extraPitch = 0.05;
    setTimeout(() => (h.extraPitch = 0), 250);
    if (sim) {
      g.drops.splash(p.x, WATER_Y, p.z, 0.75, 0, 0.5, 260);
      sim.disturb(p.x, p.z, 0.14, -0.008);
      g.audio.splash(0.7, this.pan(p));
    } else g.audio.hoof('grass', 0.7, this.pan(p));
  }

  _ambientDrips(dt) {
    // water drips from the child's wet hood into the puddle now and then
    this.dripT -= dt;
    if (this.dripT < 0) {
      this.dripT = 2.2 + Math.random() * 2.5;
      const head = this.g.childModel.bones.head.getWorldPosition(new THREE.Vector3());
      const start = head.clone().add(V((Math.random() - 0.5) * 0.12, 0.02, 0.06));
      this.g.drops.spawn(start.x, start.y, start.z, 0, 0, 0.05, 1.3);
    }
  }

  reflectionPoint(p) {
    const cam = this.g.camera.position;
    const m = V(p.x, 2 * WATER_Y - p.y, p.z);
    const t = (cam.y - WATER_Y) / (cam.y - m.y);
    return cam.clone().lerp(m, t);
  }

  // ------------------------------------------------------------- moving shots
  shotRun() {
    const h = this.horse;
    const P = this.ar(V(-6.8, 2.1, -3.6), V(-4.8, 1.4, -2.4));
    const L = this.ar(V(0, 0.85, 0.5), V(0, 0.85, 1.2));
    const s = this.horseFrame(P, L);
    return { ...s, fov: this.ar(46, 40) };
  }
  // camera on an orbit around the unicorn: az 0 = straight ahead, +PI/2 = its right
  // (sunny) side, PI = behind; height above the root; looking at `look`
  orbitShot(az, rad, height, look, fov) {
    const h = this.horse;
    const f = V(Math.sin(h.heading), 0, Math.cos(h.heading));
    const right = V(-Math.cos(h.heading), 0, Math.sin(h.heading));
    const pos = h.pos.clone().addScaledVector(f, Math.cos(az) * rad).addScaledVector(right, Math.sin(az) * rad);
    pos.y += height;
    return { pos, tgt: look, fov, anchor: h.pos, anchorId: 'horse' };
  }
  // polar coordinates (az, rad, height) of a world point around the unicorn
  toOrbit(p) {
    const h = this.horse;
    const f = V(Math.sin(h.heading), 0, Math.cos(h.heading));
    const right = V(-Math.cos(h.heading), 0, Math.sin(h.heading));
    const d = p.clone().sub(h.pos);
    return { az: Math.atan2(d.dot(right), d.dot(f)), rad: Math.hypot(d.dot(right), d.dot(f)), hgt: d.y };
  }
  // the close view of the reaching hoof: a little below the plane it touches, so the
  // hoof stands against the open sky
  hoofView() {
    const h = this.horse;
    const hoof = h.hoofWorld('FL', new THREE.Vector3());
    const f = V(Math.sin(h.heading), 0, Math.cos(h.heading));
    const right = V(-Math.cos(h.heading), 0, Math.sin(h.heading));
    const yR = this.track.bowHeight(this.track.sA + 0.2) ?? hoof.y;
    const pos = hoof.clone().addScaledVector(f, this.ar(2.7, 2.4)).addScaledVector(right, this.ar(1.6, 1.4));
    pos.y = yR + 0.16;
    const o = this.toOrbit(pos);
    const look = hoof.clone().addScaledVector(f, -0.1);
    look.y = yR + 0.12;
    return { ...o, look };
  }
  shotHoof(k) {
    // swing round from the running view (never through the horse) to the hoof view
    const h = this.horse;
    const e = easeInOut(k);
    const hv = this.hoofView();
    const az = lerp(2.05, hv.az, e);
    const rad = lerp(this.ar(7.0, 5.4), hv.rad, e);
    const hgt = lerp(this.ar(2.1, 1.4), hv.hgt, e);
    const look = h.pos.clone().add(V(0, 0.9, 0)).lerp(hv.look, e);
    return this.orbitShot(az, rad, hgt, look, lerp(this.ar(46, 40), this.ar(44, 38), e));
  }
  shotBirth(k) {
    // hold on the hoof while the light spreads, then orbit out to the side, rising,
    // revealing horse, child and the bow in the air
    const h = this.horse;
    const e = easeInOut(k);
    const hv = this.hoofView();
    const yR = this.track.bowHeight(h.s) ?? h.pos.y;
    const az = lerp(hv.az, 1.5, e);
    const rad = lerp(hv.rad, this.ar(10.5, 7.8), e);
    const hgt = lerp(hv.hgt, (yR - h.pos.y) + this.ar(1.4, 0.9), e);
    const look = hv.look.clone().lerp(h.pos.clone().add(V(0, 1.0, 0)), smoothstep(0.05, 0.7, k));
    return this.orbitShot(az, rad, hgt, look, lerp(this.ar(44, 38), this.ar(44, 38), k));
  }
  shotAscent(u) {
    // a calm sequence along the climb: side, high (ground shrinking), over the shoulder
    const segs = [
      [0.0, this.ar(V(-8.5, 1.4, 2.0), V(-6.6, 0.9, 1.0)), V(0, 1.1, 1.5), 42],
      [0.1, this.ar(V(-15, 8, -9), V(-14, 7, -8)), V(0, -2.5, 4), 50],
      [0.19, this.ar(V(-0.5, 2.6, -3.2), V(-0.4, 2.35, -2.6)), V(0, 1.5, 6), this.ar(60, 52)],
      [0.27, this.ar(V(-2.2, 0.0, 9.5), V(-1.6, 0.2, 7.5)), V(0, 1.3, 0), 44],
      [0.33, this.ar(V(-0.35, 2.5, -2.6), V(-0.3, 2.35, -2.2)), V(0, 1.6, 6), this.ar(58, 50)],
    ];
    return this._seqShot(u, segs);
  }
  shotDescent(u) {
    const segs = [
      [0.5, this.ar(V(-9, 2.5, 3), V(-7, 1.8, 2)), V(0, 1.0, 1.5), 42],
      [0.62, this.ar(V(-0.4, 2.6, -3.0), V(-0.35, 2.35, -2.5)), V(0, 1.0, 8), this.ar(60, 52)],
      [0.75, this.ar(V(-14, -3, 10), V(-12, -2, 8)), V(0, 1.2, 0), 46],
      [0.86, this.ar(V(-7.5, 1.2, 4.0), V(-6, 1.0, 3.0)), V(0, 0.9, 1.2), 44],
    ];
    return this._seqShot(u, segs);
  }
  _seqShot(u, segs) {
    let i = 0;
    while (i < segs.length - 1 && u >= segs[i + 1][0]) i++;
    const a = segs[i], b = segs[Math.min(segs.length - 1, i + 1)];
    // ease between shots over a short window at each boundary
    const span = 0.03;
    const k = b === a ? 0 : smoothstep(b[0] - span, b[0], u);
    const pos = a[1].clone().lerp(b[1], k), look = a[2].clone().lerp(b[2], k);
    const s = this.horseFrame(pos, look);
    return { ...s, fov: lerp(a[3], b[3], k) };
  }
  shotCrisis() {
    const s = this.horseFrame(this.ar(V(-0.45, 3.4, -2.9), V(-0.4, 3.0, -2.5)), this.ar(V(0, 0.6, 6.5), V(0, 0.9, 7.0)));
    return { ...s, fov: this.ar(56, 48) };
  }
  shotSummit() {
    const g = this.g;
    const hand = g.childModel.bones.handR.getWorldPosition(new THREE.Vector3());
    const head = g.childModel.bones.head.getWorldPosition(new THREE.Vector3());
    // centre on the face, the reaching hand and the middle of the light layers
    const mid = hand.clone().lerp(head, 0.5);
    mid.y = lerp(mid.y, g.lightLayers.base.y + 2.5 * g.lightLayers.spacing, 0.5) - 0.02;
    // camera at the height of the light layers: they read as stacked lines of colour
    const s = this.horseFrame(this.ar(V(-1.45, 1.9, 1.05), V(-1.4, 1.92, 0.9)), V(0, 0, 0));
    return { pos: s.pos, tgt: mid, fov: this.ar(46, 38), anchor: this.horse.pos, anchorId: 'horse' };
  }
  shotLanding() {
    const s = this.horseFrame(this.ar(V(-7.5, 2.0, 3.5), V(-6.0, 1.3, 2.4)), V(0, 0.9, 1.0));
    return { ...s, fov: this.ar(46, 40) };
  }
  shotFarewellWide() {
    const s = this.horseFrame(this.ar(V(-2.6, 1.5, 4.2), V(-2.4, 1.2, 3.4)), V(0.2, 0.8, 0.7));
    return { ...s, fov: this.ar(52, 42) };
  }
  shotPalm() {
    const g = this.g;
    const h = this.horse;
    const pc = g.child.palmCenter('R', new THREE.Vector3());
    const tip = g.unicorn.hornTipWorld(new THREE.Vector3());
    const head = g.childModel.bones.head.getWorldPosition(new THREE.Vector3());
    const eye = g.unicorn.bones.head.localToWorld(new THREE.Vector3(0, 0.2, 0));
    const right = V(-Math.cos(h.heading), 0, Math.sin(h.heading));
    const f = V(Math.sin(h.heading), 0, Math.cos(h.heading));
    const dir = right.clone().addScaledVector(f, -0.25).add(V(0, 0.08, 0)).normalize();
    const pts = [pc, tip, head.clone().add(V(0, 0.1, 0)), eye, pc.clone().add(V(0, -0.15, 0))];
    return fitShot({ points: pts, dir, fov: this.ar(46, 38), aspect: this.aspect(), margin: 0.16 });
  }
  shotFree() {
    // low behind the pair, looking up toward the ordinary rainbow over the meadow
    const h = this.horse;
    const c = this.g.childModel.bones.hips.getWorldPosition(new THREE.Vector3());
    const mid = h.pos.clone().lerp(c, 0.5);
    mid.y = 0;
    const toBow = V(0.45, 0, 0.86).normalize();
    const side = V(-toBow.z, 0, toBow.x);
    const az = Math.sin(this.rt * 0.05) * 0.6;
    const pos = mid.clone().addScaledVector(toBow, -this.ar(5.4, 4.2)).addScaledVector(side, -this.ar(0.7, 2.0) + az * this.ar(0.4, 1)).add(V(0, this.ar(0.85, 0.7), 0));
    const tgt = mid.clone().addScaledVector(toBow, 6).add(V(0, this.ar(2.6, 1.9), 0));
    return { pos, tgt, fov: this.ar(64, 56) };
  }
  shotFreeWide(k) {
    const close = this.shotPalm();
    const free = this.shotFree();
    return { pos: close.pos.clone().lerp(free.pos, easeInOut(k)), tgt: close.tgt.clone().lerp(free.tgt, easeInOut(k)), fov: lerp(close.fov, free.fov, k) };
  }
}
