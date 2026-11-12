// 物語の進行: 操作の連鎖・カメラ・光・音場・気づきの手がかり
import * as THREE from './vendor/three.module.min.js';
import { clamp, lerp, damp, smooth, smoothstep, easeInOutSine, Spring, angleDiff } from './core/util.js';
import { PLOT, TUB, HOUSE, TREE } from './world/garden.js';
import { VINE_PETAL, FLOOR_Y, RIM, PETAL_PHI } from './world/flower.js';
import { STEM_TOP, BUD_STEM, HELIX } from './world/plant.js';

const V3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const _v = V3(), _w = V3(), _u = V3(), _n = V3();
const UP = V3(0, 1, 0);
const SPURTS = [6, 13, 23, 37, 56, STEM_TOP];
const SLIT_DIR = -54 * Math.PI / 180;

export class Director {
  constructor(G) {
    this.G = G;
    this.phase = null;
    this.t = 0;
    this.water = 0;
    this.spurt = 0;
    this.growTarget = BUD_STEM;
    this.growFrom = BUD_STEM;
    this.growT = 1;
    this.exposure = 1;
    this.flood = 0;
    this.prevHead = V3();
    this.prevVel = V3();
    this.hintT = 0;
    this.peekT = 0;
    this.strand = null;
    this.audioS = { muffle: 0, space: 0, wind: 0.1, pour: 0, slide: 0, pad: 0, birds: 1, music: 'garden', tempo: 68, musicVol: 0.3 };
    this.sunAtBud = 1;
    this.lightBoost = 0;
    this.closedOverride = null;
    this.timers = [];
    // 疑似時間のタイマー (タブ切替や手動テストでもずれない)
    G.later = (fn, ms) => { this.timers.push({ t: G.time + ms / 1000, fn }); };
    this.setupInteractions();
  }

  get idle() { return this.G.time - Math.max(this.G.input.lastInteraction, this.phaseStart); }
  // 繰り返す手がかり: 条件が続く間、period 秒ごとに true
  cue(name, cond, period) {
    this.cues = this.cues || {};
    if (!cond) return false;
    const last = this.cues[name] ?? -1e9;
    if (this.G.time - last < period) return false;
    this.cues[name] = this.G.time;
    return true;
  }

  go(name) {
    const G = this.G;
    if (this.phase && this.phases[this.phase].exit) this.phases[this.phase].exit.call(this);
    this.phase = name;
    this.t = 0;
    this.phaseStart = G.time;
    this.hintT = 0;
    if (this.phases[name].enter) this.phases[name].enter.call(this);
  }

  // ------------------------------------------------------------
  // 毎フレーム
  // ------------------------------------------------------------
  update(dt) {
    const G = this.G;
    this.t += dt;
    if (this.timers.length) {
      const due = this.timers.filter((x) => x.t <= G.time);
      if (due.length) { this.timers = this.timers.filter((x) => x.t > G.time); for (const x of due) x.fn(); }
    }
    const ph = this.phases[this.phase];
    if (ph && ph.update) ph.update.call(this, dt);
    this.updateGrowth(dt);
    G.plant.update(dt);
    G.flower.update(dt);
    G.vine.update(dt);
    G.child.update(dt);
    G.seed.update(dt);
    G.can.update(dt);
    G.drops.update(dt);
    G.bigDrop.update(dt);
    G.particles.update(dt);
    G.birds.update(dt);
    G.butterfly.update(dt);
    G.cat.update(dt);
    G.garden.plot.update(dt);
    this.updateStrand(dt);
    this.updateSwing(dt);
    this.updateLight(dt);
    this.updateAudio(dt);
  }

  // つぼみの成長スパート (茎の節が伸びる)
  updateGrowth(dt) {
    const G = this.G, P = G.plant;
    if (this.growT < 1) {
      const dur = this.growDur || 2.6;
      this.growT = Math.min(1, this.growT + dt / dur);
      const e = easeInOutSine(this.growT);
      P.lengthDriven = true;
      P.length = lerp(this.growFrom, this.growTarget, e);
    }
    // 花の加速度 (慣性の表現に使う)
    const hp = P.headPos;
    const vel = _v.copy(hp).sub(this.prevHead).divideScalar(Math.max(dt, 1e-3));
    const acc = _w.copy(vel).sub(this.prevVel).divideScalar(Math.max(dt, 1e-3));
    this.prevHead.copy(hp); this.prevVel.copy(vel);
    this.headVel = vel.length();
    // 花のローカルへ
    const inv = G.flower.head.quaternion.clone().invert();
    const la = acc.clone().applyQuaternion(inv);
    la.clampLength(0, 40);
    G.flower.accel.lerp(la, 0.3);
    this.headAccelY = la.y;
  }

  // ------------------------------------------------------------
  // 光と露出 (目が慣れる)
  // ------------------------------------------------------------
  updateLight(dt) {
    const G = this.G, U = G.U, F = G.flower, head = F.head;
    head.updateMatrixWorld();
    const sc = head.scale.x;
    U.uBudCenter.value.set(0, 2.25, 0); head.localToWorld(U.uBudCenter.value);
    U.uBudAxis.value.set(0, 1, 0).transformDirection(head.matrixWorld);
    U.uBudRadii.value.set(1.95 * sc, 2.45 * sc);
    let avgOpen = 0;
    for (const p of F.petals) avgOpen += clamp(p.open.x);
    avgOpen /= 5;
    let closed = clamp(1 - avgOpen * 1.6 - F.door * 0.12) * smoothstep(0.3, 0.9, G.plant.bud);
    if (this.closedOverride !== null) closed = this.closedOverride;
    U.uBudClosed.value = closed;
    // つぼみの位置での日なた/日かげ (木の陰)
    const sunVis = canopyVisCPU(U, U.uBudCenter.value) * cloudVisCPU(U, U.uBudCenter.value);
    this.sunAtBud = damp(this.sunAtBud, sunVis, 2, dt);
    const s = this.sunAtBud;
    const glowK = (0.28 + 0.72 * s) * (1 + this.lightBoost * 0.5);
    U.uBudGlow.value.setRGB(0.52 * glowK, 0.32 * glowK, 0.36 * glowK);
    const tk = 0.35 + 0.65 * s;
    U.uBudTint.value.setRGB(0.95 * tk, 0.60 * tk, 0.66 * tk);
    // カメラがつぼみの中か
    const cam = G.camera.position;
    const d = _v.copy(cam).sub(U.uBudCenter.value);
    const y = d.dot(U.uBudAxis.value);
    const rr = Math.sqrt(Math.max(0, d.lengthSq() - y * y));
    const e = Math.hypot(rr / U.uBudRadii.value.x, y / U.uBudRadii.value.y);
    this.camInside = e < 1.0 ? closed : 0;
    // 露出: 暗い花の中では目が開き、外の光に出るとまぶしい
    // 覗き窓から外を見ている間は、外の明るさに目が合う
    const peekK = this.phase === 'INSIDE' ? smoothstep(0, 1, Math.min(1, this.peekT || 0)) : 0;
    const target = lerp(1.0 + this.camInside * lerp(0.95, -0.14, s), 1.0, peekK * 0.85);
    this.exposure = damp(this.exposure, target, target > this.exposure ? 1.6 : 0.7, dt);
    U.uExposure.value = this.exposure;
    // 高度による空の深まり
    const alt = Math.max(cam.y, 0);
    // 高い所からは草の葉は見えない (描かない)
    G.garden.grass.mesh.visible = alt < 28;
    G.skyMat.uniforms.uSkyDeep.value = smoothstep(8, 80, alt);
    U.uFogDensity.value = lerp(0.0028, 0.0008, smoothstep(10, 80, alt));
    U.uWind.value = 0.3 + smoothstep(5, 80, G.plant.headPos.y) * 0.8;
    // まぶしさ
    this.flood = damp(this.flood, 0, 1.4, dt);
    G.glare.uniforms.uFlood.value = this.flood;
    G.glare.uniforms.uGlare.value = lerp(0.45, 0.12, this.camInside);
    const vig = this.camInside * 0.55;
    G.glare.uniforms.uVignette.value = damp(G.glare.uniforms.uVignette.value, vig, 2, dt);
  }

  updateAudio(dt) {
    const G = this.G, A = this.audioS;
    const alt = G.plant.headPos.y;
    A.muffle = damp(A.muffle, this.camInside, 2.5, dt);
    A.space = damp(A.space, (1 - this.camInside) * smoothstep(15, 75, G.camera.position.y), 1, dt);
    A.wind = damp(A.wind, clamp(0.08 + smoothstep(3, 80, alt) * 0.9 * (1 - this.camInside * 0.6) + (this.windGust || 0)), 1.5, dt);
    this.windGust = Math.max(0, (this.windGust || 0) - dt * 0.4);
    A.pour = G.can.pouring;
    A.birds = lerp(1, 0.18, smoothstep(10, 60, G.camera.position.y)) * (1 - this.camInside * 0.7);
    A.pad = damp(A.pad, this.camInside > 0.3 ? 1 : (this.phase === 'VIEW' ? 0.35 : 0.0), 0.8, dt);
    G.audio.update(dt, A);
  }

  // ------------------------------------------------------------
  // ショット (縦長/横長で構図を変える)
  // ------------------------------------------------------------
  fitShot(w, center, dir, hw, hh, fov, extra = 0) {
    const rig = this.G.rig;
    w.fov = fov;
    const d = rig.fitDistance(hw, hh, fov) + extra;
    w.target.copy(center);
    w.pos.copy(dir).normalize().multiplyScalar(d).add(center);
  }
  headLocal(x, y, z, out = V3()) { this.G.flower.head.updateMatrixWorld(); return this.G.flower.head.localToWorld(out.set(x, y, z)); }

  // ------------------------------------------------------------
  // 入力の受け皿
  // ------------------------------------------------------------
  setupInteractions() {
    const G = this.G;
    const self = this;
    // ---- 土をたたく (覆土) ----
    G.input.add({
      enabled: () => self.phase === 'COVER',
      pick: (ptr) => { const d = G.input.screenDist(V3(0, 0.12, 0), ptr); return d < G.input.fingerR * 2.2 ? d : null; },
      down: (ptr) => {
        const hit = ptr.ray.intersectPlane(new THREE.Plane(UP, -0.12), V3());
        const x = hit ? clamp(hit.x, -0.5, 0.5) : 0, z = hit ? clamp(hit.z, -0.4, 0.4) : 0;
        G.garden.plot.pat(x, z, G.time);
        self.coverBoost = (self.coverBoost || 0) + 0.25;
        G.audio.play('pat', { pan: self.panOf(V3(x, 0.1, z)) });
        G.particles.burst(x, 0.13, z, 6, { speed: 0.4, vy: 1.2, size: 0.016, life: 0.8, p: { color: [0.36, 0.24, 0.15], grav: 9.8, bounce: 0.2, ground: (px, pz) => G.garden.plot.soilHeight(px, pz) } });
        G.child.set('cheer', 1); this.G.later(() => G.child.set('cheer', 0), 500);
      },
    });
    // ---- つぼみ (入口) ----
    G.input.add({
      enabled: () => self.phase === 'BUD' && self.t > 0.8,
      pick: (ptr) => {
        const c = G.input.screenDist(G.child.worldPos(V3()).add(V3(0, 0.5, 0)), ptr);
        const door = G.input.screenDist(self.headLocal(0, 0.9, 1.6), ptr);
        const hit = G.flower.raycastPetals(ptr.ray);
        const m = Math.min(c, door);
        if (m < G.input.fingerR * 1.6) return m * 0.5;
        return hit ? 200 : null;
      },
      down: (ptr) => {
        const hit = G.flower.raycastPetals(ptr.ray);
        if (hit) { G.flower.petalMat.touchAt(hit.point, 1); G.audio.play('petal', { note: Math.floor(hit.uv.x * 6), pan: self.panOf(hit.point) }); }
      },
      up: (ptr, info) => { self.go('ENTER'); },
    });
    // ---- 花の内側 (しずく・つる・蜜・雄しべ・花びら) ----
    G.input.add({
      enabled: () => ['INSIDE', 'TOP', 'OPEN', 'VINE', 'NEST'].includes(self.phase),
      pick: (ptr) => 600,
      down: (ptr) => self.interiorDown(ptr),
      move: (ptr) => self.interiorMove(ptr),
      up: (ptr, info) => self.interiorUp(ptr, info),
    });
    // ---- 花の上 (朝露・子ども・見下ろす世界) ----
    G.input.add({
      enabled: () => ['BLOOM', 'DROP', 'VIEW'].includes(self.phase),
      pick: (ptr) => 600,
      down: (ptr) => self.topDown(ptr),
      move: (ptr) => self.topMove(ptr),
      up: (ptr, info) => self.topUp(ptr, info),
    });
    // ---- 庭に帰ってから: 一番下の葉に跳び乗る ----
    G.input.add({
      enabled: () => self.phase === 'HOME' && self.t > 2.0,
      pick: (ptr) => {
        const L = G.plant.helix[HELIX.n - 1];
        const p = G.plant.leafPoint(L, 0.75, V3());
        const d = G.input.screenDist(p, ptr);
        const dc = G.input.screenDist(G.child.worldPos(V3()).add(V3(0, 0.5, 0)), ptr);
        const m = Math.min(d, dc * 1.2);
        return m < G.input.fingerR * 1.5 ? m : null;
      },
      up: (ptr, info) => { if (info.tap) self.go('RIDE'); },
    });
  }

  panOf(p) { const s = this.G.input.project(p); return clamp(s.x / this.G.viewW * 2 - 1, -1, 1); }

  // ------------------------------------------------------------
  // 花の内側の操作
  // ------------------------------------------------------------
  interiorDown(ptr) {
    const G = this.G, F = G.flower;
    this.touch = { kind: null, ptr, start: ptr, lastSound: 0, pushAcc: 0 };
    const T = this.touch;
    if (G.params.has('dbgtouch')) this.G.later(() => console.log('touch kind', T.kind, T.petal, Math.round(ptr.x), Math.round(ptr.y)), 0);
    // 1. しずく
    const dp = G.drops.pick(ptr);
    if (dp && this.phase !== 'VINE') {
      T.kind = 'drop'; T.drop = dp.d; dp.d.held = true; dp.d.target = null; G.drops.held = dp.d;
      dp.d.wob.kick(2);
      G.audio.play('drop', { pan: this.panOf(G.drops.worldPos(dp.d, V3())) });
      G.child.lookAt = G.drops.worldPos(dp.d, V3()); G.child.lookW = 1;
      return;
    }
    // 2. つるの端
    const ve = G.vine.endPos;
    if (G.vine.reach > 0.5 && !G.vine.released && G.input.screenDist(ve, ptr) < G.input.fingerR * 1.5) {
      T.kind = 'vine';
      if (this.phase === 'VINE') { G.vine.held = true; G.vine.target.copy(ve); }
      else { this.vineTug(0.08); }
      G.audio.play('vine', { tension: G.vine.tension, pan: this.panOf(ve) });
      return;
    }
    // 3. 蜜
    for (const n of F.nectars) {
      const np = n.mesh.getWorldPosition(V3());
      if (G.input.screenDist(np, ptr) < G.input.fingerR * 0.9) {
        T.kind = 'nectar'; T.nectar = n;
        this.strand = { n, anchor: np.clone(), end: np.clone(), target: np.clone(), len: 0, snap: 0, t: 0, beads: 0 };
        n.wob.kick(3);
        G.audio.play('nectar', { pan: this.panOf(np) });
        return;
      }
    }
    // 4. 雄しべ (葯)
    let bestS = null, bd = Infinity;
    for (const s of F.stamens) {
      if (!s.tip) continue;
      const wp = F.head.localToWorld(s.tip.clone());
      const d = G.input.screenDist(wp, ptr);
      if (d < bd) { bd = d; bestS = s; T.sw = wp; }
    }
    if (bestS && bd < G.input.fingerR * (this.phase === 'OPEN' ? 0.45 : 0.9)) {
      T.kind = 'stamen';
      this.flickStamen(bestS, T.sw, ptr);
      return;
    }
    // 5. 花びら
    const hit = F.raycastPetals(ptr.ray);
    const floorHit = this.floorHit(ptr.ray);
    if (hit && (!floorHit || hit.distance < floorHit.dist)) {
      T.kind = 'petal'; T.petal = hit.object.userData.petal; T.hit = hit;
      T.slot = F.petalMat.touchAt(hit.point, 1);
      T.lastPoint = hit.point.clone();
      G.audio.play('petal', { note: Math.floor(hit.uv.x * 5 + hit.uv.y * 4), pan: this.panOf(hit.point) });
      G.child.lookAt = hit.point.clone(); G.child.lookW = 1;
      // 覗き窓のあたりなら外を覗く
      if (this.phase === 'INSIDE' && this.isSlit(hit)) { this.peekT = 4.0; }
      if (this.phase === 'OPEN' || this.phase === 'VINE' || this.phase === 'NEST') this.pushPetal(T.petal, 0.34, hit.point);
      return;
    }
    // 6. 床 (子どもが歩いていく) / 雌しべ
    if (floorHit) {
      T.kind = 'floor';
      const lp = floorHit.local;
      if (Math.hypot(lp.x, lp.z) < 0.3) {
        // 雌しべ: ねばっとしたつや
        G.audio.play('wobble', { pitch: 0.3, pan: this.panOf(floorHit.point) });
      } else if (!this.busyChild()) {
        const r = Math.hypot(lp.x, lp.z);
        const k = clamp(r, 0.75, RIM - 0.25) / Math.max(r, 1e-3);
        G.child.walkTo(lp.x * k, lp.z * k, 0.8);
        G.audio.play('tapGrass', { pan: this.panOf(floorHit.point) });
      }
      G.child.lookAt = floorHit.point.clone(); G.child.lookW = 0.8;
    }
  }

  interiorMove(ptr) {
    const G = this.G, F = G.flower, T = this.touch;
    if (!T) return;
    if (T.kind === 'drop') {
      const d = T.drop;
      const hit = F.raycastPetals(ptr.ray);
      if (d.mode === 'wall') {
        if (hit && hit.object.userData.petal === d.i) {
          d.target = { x: hit.uv.x * 2 - 1, v: hit.uv.y };
        } else {
          // 床の方へ引きずり下ろした
          const fh = this.floorHit(ptr.ray);
          if (fh) d.target = { x: d.x, v: 0 };
          else if (hit) d.target = { x: d.x, v: clamp(d.v - 0.05, 0, 1) };
        }
      } else if (d.mode === 'floor') {
        const fh = this.floorHit(ptr.ray);
        if (fh) d.target = { floor: true, fx: fh.local.x, fz: fh.local.z };
      }
      if (G.time - T.lastSound > 0.25) { T.lastSound = G.time; G.audio.play('stretch', { pitch: Math.random() * 0.5 }); }
    } else if (T.kind === 'vine') {
      if (this.phase === 'VINE') {
        const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(G.camera.getWorldDirection(V3()).negate(), G.vine.endPos);
        const hp = ptr.ray.intersectPlane(plane, V3());
        if (hp) G.vine.target.copy(hp);
      }
    } else if (T.kind === 'nectar' && this.strand) {
      const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(G.camera.getWorldDirection(V3()).negate(), this.strand.anchor);
      const hp = ptr.ray.intersectPlane(plane, V3());
      if (hp) this.strand.target.copy(hp);
    } else if (T.kind === 'petal') {
      const hit = F.raycastPetals(ptr.ray);
      if (hit) {
        F.petalMat.holdTouch(T.slot, hit.point, 1);
        const moved = hit.point.distanceTo(T.lastPoint);
        if (moved > 0.18) {
          T.lastPoint.copy(hit.point);
          G.audio.play('stroke', { pitch: hit.uv.y, pan: this.panOf(hit.point), vol: 0.8 });
          // なでた跡にきらめく粉
          G.particles.emit({ x: hit.point.x, y: hit.point.y, z: hit.point.z, vx: (Math.random() - 0.5) * 0.1, vy: 0.05, vz: (Math.random() - 0.5) * 0.1, glow: true, grav: -0.02, drag: 1, life: 1.4, size: 0.03, color: [1.0, 0.75, 0.6], alpha: 0.5, twinkle: 9, seed: Math.random() });
        }
        if ((this.phase === 'OPEN' || this.phase === 'VINE' || this.phase === 'NEST') && hit.object.userData.petal === T.petal) {
          // 外へ押し広げる
          this.pushPetal(T.petal, Math.min(0.03, moved * 0.08), hit.point);
        }
      }
    }
  }

  interiorUp(ptr, info) {
    const G = this.G, F = G.flower, T = this.touch;
    if (!T) return;
    if (T.kind === 'drop') {
      const d = T.drop; d.held = false; d.target = null; G.drops.held = null;
      d.pushed = 1.5;
      // 軽くはじかれたら下へ転がる
      if (info.tap && d.mode === 'wall') { d.vv -= 0.25; d.wob.kick(2); }
    } else if (T.kind === 'vine') {
      if (G.vine.held) { G.vine.held = false; }
      if (info.tap && this.phase === 'VINE') this.vineTug(0.35);
    } else if (T.kind === 'nectar' && this.strand) {
      this.strand.release = true;
    } else if (T.kind === 'petal') {
      const u = F.petalMat.uniforms;
      // 押さえていた所を離す
      u.uTouch.value[T.slot].w = G.time - 0.15;
    }
    this.touch = null;
  }

  floorHit(ray) {
    const G = this.G, head = G.flower.head;
    head.updateMatrixWorld();
    const inv = head.matrixWorld.clone().invert();
    const o = ray.origin.clone().applyMatrix4(inv), dir = ray.direction.clone().transformDirection(inv);
    const y = FLOOR_Y + 0.02;
    if (Math.abs(dir.y) < 1e-4) return null;
    const t = (y - o.y) / dir.y;
    if (t < 0) return null;
    const lp = o.clone().addScaledVector(dir, t);
    if (Math.hypot(lp.x, lp.z) > RIM) return null;
    const wp = head.localToWorld(lp.clone());
    return { local: lp, point: wp, dist: wp.distanceTo(ray.origin) };
  }

  isSlit(hit) {
    const i = hit.object.userData.petal, x = hit.uv.x * 2 - 1;
    return (i === 3 && x > 0.55) || (i === 4 && x < -0.55);
  }

  busyChild() { return ['ENTER', 'SLIDE', 'RIDE'].includes(this.phase); }

  flickStamen(s, wp, ptr) {
    const G = this.G;
    s.sx.kick((Math.random() - 0.5) * 3); s.sz.kick((Math.random() - 0.5) * 3);
    G.audio.play('stamen', { pan: this.panOf(wp) });
    G.audio.play('pollen', { pan: this.panOf(wp) });
    for (let i = 0; i < 26; i++) {
      G.particles.emit({
        x: wp.x, y: wp.y, z: wp.z, vx: (Math.random() - 0.5) * 0.6, vy: Math.random() * 0.4, vz: (Math.random() - 0.5) * 0.6,
        glow: true, grav: 0.12, drag: 1.6, life: 3 + Math.random() * 2, size: 0.018 + Math.random() * 0.018,
        color: [1.0, 0.82, 0.3], alpha: 0.9, twinkle: 6 + Math.random() * 6, seed: Math.random(),
      });
    }
    // 花粉が鼻に入ると、くしゃみ
    const cp = G.child.headWorld(V3());
    if (cp.distanceTo(wp) < 1.0 && Math.random() < 0.6 && G.time - (this.lastSneeze || -10) > 6) {
      this.lastSneeze = G.time;
      this.G.later(() => {
        G.child.sneeze();
        this.G.later(() => {
          G.audio.play('sneeze');
          // 花全体がゆれる
          G.rig.shake = 1.2;
          for (const s2 of G.flower.stamens) { s2.sx.kick((Math.random() - 0.5) * 2); s2.sz.kick((Math.random() - 0.5) * 2); }
          for (let k = 0; k < 3; k++) G.flower.petalMat.touchAt(this.headLocal(Math.cos(k * 2.1) * 1.7, 1.4 + k * 0.4, Math.sin(k * 2.1) * 1.7), 0.7);
        }, 450);
      }, 700);
    }
  }

  pushPetal(i, amount, point) {
    const G = this.G, F = G.flower, p = F.petals[i];
    if (i === VINE_PETAL && !G.vine.released) {
      // つるが邪魔をして開けない: 震える
      p.strain = Math.min(2.5, (p.strain || 0) + amount * 6);
      if (G.time - (this.lastStrainSound || 0) > 0.5) { this.lastStrainSound = G.time; G.audio.play('vine', { tension: 0.9, pan: this.panOf(point) }); G.audio.play('creak', { vol: 0.5 }); }
      this.vineNoticed = true;
      return;
    }
    if (p.openReq === undefined) p.openReq = p.open.target;
    if (p.open.target >= 0.99) return;
    p.openReq = Math.min(1, p.openReq + amount);
    p.open.target = Math.max(p.open.target, p.openReq * 0.45 + 0.08);
    if (G.time - (this.lastPushSound || 0) > 0.3) { this.lastPushSound = G.time; G.audio.play('push', { pan: this.panOf(point) }); }
    if (p.openReq > 0.55) this.openPetal(i);
  }

  openPetal(i) {
    const G = this.G, p = G.flower.petals[i];
    if (p.open.target >= 0.99) return;
    p.open.target = 1;
    p.open.kick(0.6);
    this.opened = (this.opened || 0) + 1;
    G.audio.play('petalOpen', { chord: [60, 65, 67, 62, 64][this.opened % 5], pan: Math.cos(p.phi) * 0.5 });
    this.flood = Math.max(this.flood, 0.35);
    this.windGust = 0.4;
    // 花粉が外へ吹き出す
    const c = this.headLocal(Math.cos(p.phi) * 1.2, 1.6, Math.sin(p.phi) * 1.2);
    for (let k = 0; k < 30; k++) G.particles.emit({ x: c.x, y: c.y, z: c.z, vx: Math.cos(p.phi) * (1 + Math.random() * 2), vy: Math.random() * 1.5, vz: Math.sin(p.phi) * (1 + Math.random() * 2), glow: true, grav: 0.1, drag: 0.6, life: 3, size: 0.03, color: [1, 0.85, 0.4], alpha: 0.9, twinkle: 8, seed: Math.random() });
    G.child.set('awe', 1); this.G.later(() => G.child.set('awe', 0), 1400);
  }

  vineTug(amount) {
    const G = this.G, V = G.vine;
    if (V.released) return;
    V.coils = Math.max(0, V.coils - amount);
    V.ropeLen += amount * 0.9;
    this.onUnwind();
  }

  onUnwind() {
    const G = this.G, V = G.vine, p = G.flower.petals[VINE_PETAL];
    const k = V.coils / V.coils0;
    p.roll = (V.bind || 1) * (0.35 + 0.65 * k);
    p.open.target = 0.08 + (1 - k) * 0.14;
    p.strain = 1.5 * k;
    const turn = Math.floor((V.coils0 - V.coils) * 2);
    if (turn !== this.lastTurn) {
      this.lastTurn = turn;
      G.audio.play('vine', { tension: k, pan: this.panOf(V.anchor || V.endPos) });
      G.flower.petalMat.touchAt(this.headLocal(Math.cos(p.phi) * 1.4, 3.0, Math.sin(p.phi) * 1.4), 0.6);
    }
    if (V.coils <= 0.001 && this.phase === 'VINE') this.go('BLOOM');
  }

  // ------------------------------------------------------------
  // 花の上の操作
  // ------------------------------------------------------------
  topDown(ptr) {
    const G = this.G, B = G.bigDrop;
    this.touch = { kind: null, ptr, start: ptr };
    const T = this.touch;
    if (B.visible && !this.dropFalling) {
      const d = G.input.screenDist(B.pos, ptr);
      const rpx = this.screenRadius(B.pos, B.radius);
      if (d < Math.max(G.input.fingerR * 1.2, rpx * 1.3)) {
        T.kind = 'bigdrop';
        B.kick(1);
        G.audio.play('wobble', { pitch: 0.1, pan: this.panOf(B.pos) });
        return;
      }
    }
    // 子ども (滑り台へ)
    const cd = G.input.screenDist(G.child.worldPos(V3()).add(V3(0, 0.45, 0)), ptr);
    if (this.phase === 'VIEW' && cd < G.input.fingerR * 1.3 && this.t > 1.5) {
      T.kind = 'child';
      return;
    }
    // 花びら
    const hit = G.flower.raycastPetals(ptr.ray);
    if (hit) {
      T.kind = 'petal'; T.slot = G.flower.petalMat.touchAt(hit.point, 0.9); T.lastPoint = hit.point.clone();
      G.audio.play('petal', { note: Math.floor(hit.uv.x * 5 + hit.uv.y * 4), pan: this.panOf(hit.point) });
      G.child.lookAt = hit.point.clone(); G.child.lookW = 0.8;
      return;
    }
    T.kind = 'world';
  }
  topMove(ptr) {
    const G = this.G, T = this.touch;
    if (!T) return;
    if (T.kind === 'bigdrop' && this.phase === 'DROP') {
      // 指の方向へ花びらの上を転がす
      const hit = G.flower.raycastPetals(ptr.ray);
      if (hit && hit.object.userData.petal === VINE_PETAL) {
        this.dropTarget = { x: hit.uv.x * 2 - 1, v: hit.uv.y };
      } else {
        // 花びらの外へ引っ張った → 先へ
        this.dropTarget = { x: this.dropX * 0.5, v: 1.05 };
      }
    } else if (T.kind === 'petal') {
      const hit = G.flower.raycastPetals(ptr.ray);
      if (hit) {
        G.flower.petalMat.holdTouch(T.slot, hit.point, 0.9);
        if (hit.point.distanceTo(T.lastPoint) > 0.25) { T.lastPoint.copy(hit.point); G.audio.play('stroke', { pitch: hit.uv.y, pan: this.panOf(hit.point), vol: 0.8 }); }
      }
    } else if (T.kind === 'child' && this.phase === 'VIEW') {
      // 子どもを下へ (先へ) なぞった → すべりだす
      if (ptr.y - T.start.y > 40 || Math.hypot(ptr.x - T.start.x, ptr.y - T.start.y) > 60) { T.kind = null; this.go('SLIDE'); }
    } else if (T.kind === 'world') {
      G.rig.look.held = true;
      G.rig.dragLook(ptr.dx || 0, ptr.dy || 0);
    }
  }
  topUp(ptr, info) {
    const G = this.G, T = this.touch;
    if (!T) return;
    G.rig.look.held = false;
    if (T.kind === 'bigdrop') {
      if (info.tap && this.phase === 'DROP') { this.dropPush = (this.dropPush || 0) + 0.35; this.dropTarget = null; }
      else this.dropTarget = null;
    } else if (T.kind === 'petal') {
      G.flower.petalMat.uniforms.uTouch.value[T.slot].w = G.time - 0.15;
    } else if (T.kind === 'child' && this.phase === 'VIEW') {
      if (info.tap) this.go('SLIDE');
    } else if (T.kind === 'world' && info.tap) {
      this.worldTap(ptr);
    }
    this.touch = null;
  }

  screenRadius(p, r) {
    const a = this.G.input.project(p), b = this.G.input.project(_u.copy(p).addScaledVector(V3().setFromMatrixColumn(this.G.camera.matrixWorld, 0), r));
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  // ------------------------------------------------------------
  // 何もない所に触れても、小さな物理反応を返す
  // ------------------------------------------------------------
  ambientTap(ptr, extra) {
    const G = this.G;
    if (['INSIDE', 'TOP', 'OPEN', 'VINE', 'NEST'].includes(this.phase) && extra) {
      // 二本目の指: 花びらを波立たせる
      const hit = G.flower.raycastPetals(ptr.ray);
      if (hit) { G.flower.petalMat.touchAt(hit.point, 0.8); G.audio.play('petal', { note: Math.floor(hit.uv.x * 6), pan: this.panOf(hit.point), vol: 0.7 }); }
      return;
    }
    this.worldTap(ptr);
  }
  ambientDrag(ptr) { /* 見回しはカメラが受ける */ }

  worldTap(ptr) {
    const G = this.G;
    const ray = ptr.ray;
    // 花びら (外から)
    if (G.flower.head.visible && G.plant.bud > 0.3) {
      const hit = G.flower.raycastPetals(ray);
      if (hit) {
        G.flower.petalMat.touchAt(hit.point, 1);
        G.audio.play('petal', { note: Math.floor(hit.uv.x * 6), pan: this.panOf(hit.point) });
        return;
      }
    }
    // 鳥
    const nb = G.birds.nearestScreen(ptr);
    if (nb.b && nb.d < G.input.fingerR * 0.8) {
      G.birds.scatterNear(nb.b.pos, 6);
      G.audio.play('flap', { pan: this.panOf(nb.b.pos) }); G.audio.play('bird', { pan: this.panOf(nb.b.pos) });
      return;
    }
    // 雲
    const cloudHit = this.cloudNear(ptr);
    if (cloudHit) {
      const p = cloudHit;
      for (let i = 0; i < 14; i++) G.particles.emit({ x: p.x, y: p.y, z: p.z, vx: (Math.random() - 0.5) * 3, vy: (Math.random() - 0.5) * 1.5, vz: (Math.random() - 0.5) * 3, glow: true, grav: 0, drag: 1.2, life: 1.6, size: 0.6 + Math.random() * 0.6, color: [1, 1, 1], alpha: 0.35, seed: Math.random() });
      G.audio.play('tapSky', { pan: this.panOf(p) });
      return;
    }
    // 地面・水・家・木
    const gy = 0;
    const t = ray.direction.y < -1e-4 ? (gy - ray.origin.y) / ray.direction.y : -1;
    if (t > 0) {
      const p = ray.origin.clone().addScaledVector(ray.direction, t);
      // 家
      if (p.x > HOUSE.x0 - 1 && p.x < HOUSE.x1 + 1 && p.z > HOUSE.z0 - 1 && p.z < HOUSE.z1 + 1.5) {
        const hp = this.rayBox(ray, V3(HOUSE.x0 - 0.6, 0, HOUSE.z0 - 0.6), V3(HOUSE.x1 + 0.6, HOUSE.ridgeH + 0.5, HOUSE.z1 + 0.6));
        if (hp) {
          if (G.cat && hp.distanceTo(G.cat.mesh.position) < (G.camera.position.y > 20 ? 4 : 1.5)) { G.cat.wake = 1; G.audio.play('cat', { pan: this.panOf(hp) }); }
          else G.audio.play('tapWood', { pan: this.panOf(hp) });
          this.sparkleAt(hp, 6);
          return;
        }
      }
      // たらいの水
      if (Math.hypot(p.x - TUB.x, p.z - TUB.z) < TUB.r + (G.camera.position.y > 20 ? 1.5 : 0.1)) {
        G.garden.props.rippleTub(p.x, p.z, 1);
        G.audio.play('tapWater', { pan: this.panOf(p) });
        return;
      }
      // 木
      const tp = this.rayTree(ray);
      if (tp) {
        G.audio.play('leaf', { pan: this.panOf(tp) });
        G.birds.scatterNear(V3(TREE.x, 8, TREE.z), 14) && G.audio.play('bird', { pan: this.panOf(tp) });
        for (let i = 0; i < 6; i++) G.particles.emit({ x: tp.x + (Math.random() - 0.5), y: tp.y, z: tp.z + (Math.random() - 0.5), vx: (Math.random() - 0.5) * 0.5, vy: 0, vz: (Math.random() - 0.5) * 0.5, grav: 0.4, drag: 2.5, life: 5, size: 0.06, color: [0.35, 0.55, 0.15], alpha: 1, seed: Math.random() });
        this.swingKick(0.6);
        return;
      }
      // ブランコ
      const sw = G.garden.tree.swing;
      if (sw && G.input.screenDist(sw.position.clone().add(V3(0, -2.6, 0)), ptr) < G.input.fingerR) { this.swingKick(1.2); G.audio.play('swing', { pan: this.panOf(p) }); return; }
      // 物干し
      if (p.x > 11.5 && p.x < 13.4 && p.z < -1.5 && p.z > -8.5) { G.garden.props.clothMat.uniforms.uFlap.value = 4; G.audio.play('leaf', { pan: this.panOf(p) }); return; }
      // 花壇の土
      if (Math.abs(p.x) < PLOT.w / 2 && Math.abs(p.z) < PLOT.d / 2) {
        const sy = G.garden.plot.soilHeight(p.x, p.z);
        G.particles.burst(p.x, sy + 0.01, p.z, 5, { speed: 0.35, vy: 1.0, size: 0.014, life: 0.7, p: { color: [0.36, 0.24, 0.15], bounce: 0.2, ground: (px, pz) => G.garden.plot.soilHeight(px, pz) } });
        G.audio.play('soil', { pan: this.panOf(p) });
        return;
      }
      // 草: さわさわ揺れて、小さな露が跳ねる
      G.garden.grass.mat.uniforms.uRustle.value.set(p.x, p.z, G.time, 1);
      const far = G.camera.position.distanceTo(p) > 25;
      for (let i = 0; i < (far ? 10 : 5); i++) G.particles.emit({ x: p.x, y: p.y + 0.05, z: p.z, vx: (Math.random() - 0.5) * 0.6, vy: 0.6 + Math.random() * 0.8, vz: (Math.random() - 0.5) * 0.6, glow: true, grav: 3, drag: 1, life: 0.9, size: far ? 0.4 : 0.03, color: [0.9, 1.0, 0.85], alpha: 0.7, seed: Math.random(), twinkle: 12 });
      G.audio.play('tapGrass', { pan: this.panOf(p) });
      // 庭では子どもがそちらを見る/歩いていく
      if (G.child.root.parent === G.scene && !this.busyChild() && ['SEED', 'WATER', 'COVER', 'HOME', 'BUD'].includes(this.phase)) {
        G.child.lookAt = p.clone(); G.child.lookW = 1;
        const cp = G.child.pos;
        if (p.distanceTo(V3(cp.x, 0, cp.z)) < 3.5 && !(Math.abs(p.x) < PLOT.w / 2 + 0.2 && Math.abs(p.z) < PLOT.d / 2 + 0.2) && this.phase !== 'BUD') G.child.walkTo(p.x, p.z, 0.9);
      }
      return;
    }
    // 空
    const sp = ray.origin.clone().addScaledVector(ray.direction, 12);
    this.sparkleAt(sp, 10, 0.12);
    G.audio.play('tapSky', { pan: this.panOf(sp) });
  }

  sparkleAt(p, n, size = 0.05) {
    for (let i = 0; i < n; i++) this.G.particles.emit({ x: p.x, y: p.y, z: p.z, vx: (Math.random() - 0.5) * 1.2, vy: (Math.random() - 0.3) * 1.2, vz: (Math.random() - 0.5) * 1.2, glow: true, grav: 0.2, drag: 2, life: 1.2, size, color: [1, 0.95, 0.8], alpha: 0.9, twinkle: 10, seed: Math.random() });
  }

  rayBox(ray, min, max) {
    const b = new THREE.Box3(min, max);
    return ray.intersectBox(b, V3());
  }
  rayTree(ray) {
    for (const c of this.G.U.uCanopy.value) {
      const s = new THREE.Sphere(V3(c.x, c.y, c.z), c.w * 1.05);
      const p = ray.intersectSphere(s, V3());
      if (p) return p;
    }
    return null;
  }
  cloudNear(ptr) {
    const G = this.G;
    let best = null, bd = Infinity;
    for (const p of G.sky.puffs) {
      if (p.y > 80 || p.s > 15) continue;
      const pos = V3(p.x + G.time * 0.25, p.y, p.z + G.time * 0.08);
      const d = G.input.screenDist(pos, ptr);
      const r = this.screenRadius(pos, p.s * 1.4);
      if (d < r && d < bd) { bd = d; best = pos; }
    }
    return best;
  }

  swingKick(a) { const s = this.G.garden.tree.swingSpring; s.v += a; }
  updateSwing(dt) {
    const G = this.G, s = G.garden.tree.swingSpring;
    s.v += (-9.8 / 2.6 * Math.sin(s.a)) * dt; s.v *= Math.exp(-0.3 * dt); s.a += s.v * dt;
    G.garden.tree.swing.rotation.x = s.a;
    const cm = G.garden.props.clothMat.uniforms.uFlap;
    cm.value = damp(cm.value, 1, 0.8, dt);
  }

  // ------------------------------------------------------------
  // 蜜の糸
  // ------------------------------------------------------------
  updateStrand(dt) {
    const G = this.G, S = this.strand;
    if (!S) { if (this.strandMesh) this.strandMesh.visible = false; return; }
    S.t += dt;
    S.anchor.copy(S.n.mesh.getWorldPosition(V3()));
    if (!S.release) S.end.lerp(S.target, 1 - Math.exp(-6 * dt));
    S.len = S.end.distanceTo(S.anchor);
    const maxLen = 0.75 * G.flower.head.scale.x;
    if (!S.release && S.len > maxLen) S.release = true;
    if (S.release) {
      // 細くくびれて、ぷつりと切れて縮む
      S.snap += dt * 3;
      S.end.lerp(S.anchor, 1 - Math.exp(-5 * dt));
      if (S.snap > 0.05 && !S.snapped) {
        S.snapped = true;
        G.audio.play('snap', { pan: this.panOf(S.end) });
        S.n.wob.kick(4);
        // しずくが一粒落ちる
        G.particles.emit({ x: S.end.x, y: S.end.y, z: S.end.z, vx: 0, vy: 0, vz: 0, life: 1.4, size: 0.03, color: [1.0, 0.75, 0.25], alpha: 1, grav: 6, drag: 0.5, ground: () => this.headLocal(0, FLOOR_Y, 0).y });
      }
      if (S.snap > 1) { this.strand = null; return; }
    } else if (G.time - (S.lastSound || 0) > 0.3 && S.len > 0.1) { S.lastSound = G.time; G.audio.play('nectar', { pitch: S.len, pan: this.panOf(S.end) }); }
    // 管 (重みで垂れ、伸びるほど細い)
    const pts = [];
    const n = 12;
    const sag = Math.min(0.25, S.len * 0.35);
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const p = S.anchor.clone().lerp(S.end, t);
      p.y -= Math.sin(Math.PI * t) * sag;
      pts.push(p);
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    const thick = clamp(0.03 / (1 + S.len * 8), 0.004, 0.03) * (1 - S.snap * 0.5);
    if (this.strandMesh) { this.strandMesh.geometry.dispose(); }
    const geo = new THREE.TubeGeometry(curve, 24, thick, 6, false);
    // くびれ (表面張力で数珠状に)
    const pos = geo.getAttribute('position');
    if (!this.strandMesh) {
      this.strandMesh = new THREE.Mesh(geo, G.flower.nectars[0].mesh.material);
      this.strandMesh.renderOrder = 3;
      G.scene.add(this.strandMesh);
    } else this.strandMesh.geometry = geo;
    this.strandMesh.visible = true;
  }

  // ------------------------------------------------------------
  // 子どもの居場所
  // ------------------------------------------------------------
  childToGarden() {
    const C = this.G.child;
    C.attach(this.G.scene);
    C.groundFn = (x, z) => {
      if (Math.abs(x) < PLOT.w / 2 + 0.15 && Math.abs(z) < PLOT.d / 2 + 0.15) return this.G.garden.plot.soilHeight(x, z);
      return 0;
    };
  }
  childToFlower() {
    const C = this.G.child;
    C.attach(this.G.flower.head);
    C.groundFn = (x, z) => FLOOR_Y + 0.06 * Math.pow(Math.hypot(x, z) / RIM, 2.5) - 0.03;
  }
}

function cloudVisCPU(U, p) {
  const L = U.uSunDir.value;
  let vis = 1;
  for (const c of U.uCloudSph.value) {
    const ox = p.x - c.x, oy = p.y - c.y, oz = p.z - c.z;
    const b = ox * L.x + oy * L.y + oz * L.z;
    const h = b * b - (ox * ox + oy * oy + oz * oz - c.w * c.w);
    if (h > 0 && -b + Math.sqrt(h) > 0) vis *= 1 - 0.55 * Math.min(1, h / (c.w * c.w * 0.6));
  }
  return vis;
}
// CPU 側の木陰判定 (ノイズなしの近似)
function canopyVisCPU(U, p) {
  const L = U.uSunDir.value;
  let vis = 1;
  for (const c of U.uCanopy.value) {
    const ox = p.x - c.x, oy = p.y - c.y, oz = p.z - c.z;
    const b = ox * L.x + oy * L.y + oz * L.z;
    const cc = ox * ox + oy * oy + oz * oz - c.w * c.w;
    const h = b * b - cc;
    if (h > 0) {
      const t1 = -b + Math.sqrt(h);
      if (t1 > 0) vis *= 1 - (1 - Math.exp(-Math.sqrt(h) * 2 * 0.75)) * 0.55;
    }
  }
  return vis;
}
