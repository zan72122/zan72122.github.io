// Director の補助: 構図 (ショット)・水・成長スパート・朝露・滑り台の道
import * as THREE from './vendor/three.module.min.js';
import { Director } from './story.js';
import { PHASES } from './phases.js';
import { clamp, lerp, damp, smooth, smoothstep } from './core/util.js';
import { PLOT, TUB } from './world/garden.js';
import { VINE_PETAL, FLOOR_Y, RIM, PETAL_PHI, petalPoint, petalFrame } from './world/flower.js';
import { STEM_TOP, HELIX } from './world/plant.js';

const V3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const SPURTS = [6, 13, 23, 37, 56, STEM_TOP];
const SLIT_A = -54 * Math.PI / 180;
const _a = V3(), _b = V3();

Director.prototype.phases = PHASES;

Object.assign(Director.prototype, {
  // ------------------------------------------------------------
  // 構図
  // ------------------------------------------------------------
  shotSeed(w) {
    const G = this.G, pr = G.rig.portrait;
    const c = V3(lerp(-0.05, -0.22, pr), lerp(0.42, 0.32, pr), 0.55);
    this.fitShot(w, c, V3(lerp(0.05, 0.22, pr), lerp(0.45, 0.62, pr), 1), lerp(1.6, 0.9, pr), lerp(0.95, 0.85, pr), lerp(44, 50, pr));
    // 最初は庭全体と朝の空を見せてから、手もとの種へ降りてくる
    if (this.phase === 'SEED' && this.t < 4.5 && !this.introDone) {
      const k = smoothstep(0.6, 4.2, this.t);
      const ep = V3(lerp(4.5, 3.0, pr), lerp(5.0, 6.5, pr), lerp(13, 16, pr));
      const et = V3(0.5, 3.2, -4);
      w.pos.lerpVectors(ep, w.pos, k);
      w.target.lerpVectors(et, w.target, k);
      w.fov = lerp(lerp(50, 62, pr), w.fov, k);
      w.lp = 3; w.lt = 3;
      if (this.t > 4.3) this.introDone = true;
      return;
    }
    w.lp = 1.6; w.lt = 2.0;
  },
  shotWater(w) {
    const G = this.G, P = G.plant, pr = G.rig.portrait;
    const h = 0.08 + 0.12 * smooth(P.sprout) + 0.35 * smooth(P.young) + 4.6 * Math.pow(smooth(P.bud), 1.4);
    const b = smooth(P.bud);
    const cx = lerp(lerp(0.35, 0.3, pr), 0.0, b);
    const c = V3(cx, 0.18 + h * 0.5, lerp(0.25, 0.4, b));
    const hw = lerp(lerp(1.6, 0.78, pr), lerp(2.6, 1.7, pr), b);
    const hh = Math.max(0.6, h * 0.62 + 0.2);
    // つぼみが大きくなるほど低い位置から見上げる
    const dir = V3(lerp(0.2, 0.25, b), lerp(lerp(0.42, 0.6, pr), 0.02, b), 1);
    this.fitShot(w, c, dir, hw, hh, lerp(44, 55, b));
    w.lp = 1.2; w.lt = 1.6;
  },
  shotBud(w) {
    const G = this.G, pr = G.rig.portrait;
    const c = V3(0.05, 2.25, 0.6);
    this.fitShot(w, c, V3(0.22, 0.0, 1), lerp(2.7, 1.65, pr), 2.55, 55);
    w.target.y += 0.2;
    w.lp = 1.0; w.lt = 1.4;
  },
  shotInside(w) {
    const G = this.G, pr = G.rig.portrait;
    w.frame = G.flower.head;
    const peek = smoothstep(0, 1, Math.min(this.peekT, 1.0) * (this.peekT > 0 ? 1 : 0));
    // 通常: 花の内側から、子どもと覗き窓、光る壁を見る
    const pIn = V3(lerp(1.62, 1.55, pr), lerp(2.1, 2.3, pr), lerp(0.25, 0.35, pr));
    const tIn = V3(0.35, lerp(1.0, 0.9, pr), -1.05);
    // 覗き: 窓に顔を寄せ、外と下を見る
    const pPk = V3(0.92, 1.72, -1.12);
    const tPk = V3(2.3, -0.2, -3.0);
    w.pos.copy(pIn).lerp(pPk, peek);
    w.target.copy(tIn).lerp(tPk, peek);
    w.fov = lerp(lerp(64, 76, pr), lerp(68, 80, pr), peek);
    w.lp = 2.0; w.lt = 2.4;
  },
  shotOpen(w) {
    const G = this.G, pr = G.rig.portrait;
    w.frame = G.flower.head;
    const k = smooth((this.opened || 0) / 4);
    // つぼみの頂近くから見下ろす: まわりの花びらがすべて見える
    w.pos.set(0.2, lerp(3.25, 6.2, k) + pr * 0.3, lerp(0.35, 3.6, k));
    w.target.set(0, lerp(0.25, 0.8, k), lerp(-0.2, -0.9, k));
    w.fov = lerp(lerp(78, 86, pr), lerp(62, 72, pr), k);
    w.lp = 1.0; w.lt = 1.4;
  },
  shotVine(w) {
    const G = this.G, pr = G.rig.portrait;
    w.frame = G.flower.head;
    const a = PETAL_PHI[VINE_PETAL];
    w.pos.set(Math.cos(a) * -1.6 + 0.6, lerp(3.0, 3.4, pr), Math.sin(a) * -1.6 + 0.9);
    w.target.set(Math.cos(a) * 1.0, 1.9, Math.sin(a) * 1.0);
    w.fov = lerp(64, 72, pr);
    w.lp = 1.2; w.lt = 1.6;
  },
  shotBloom(w) {
    const G = this.G, pr = G.rig.portrait;
    w.frame = G.flower.head;
    // 花の中から上へ抜け、花と同じ高さで空と雲の広がりを見せる
    const k1 = smoothstep(0.2, 2.2, this.t), k2 = smoothstep(2.0, 4.8, this.t);
    const p0 = V3(0.5, 3.4, 2.4), p1 = V3(2.5, 7.5, 6.5), p2 = V3(lerp(5.5, 4.2, pr), lerp(2.4, 2.8, pr), lerp(7.5, 8.5, pr));
    const t0 = V3(0, 1.4, -1.2), t1 = V3(0, 0.5, -1.0), t2 = V3(lerp(-2.0, -1.2, pr), lerp(2.6, 3.4, pr), -6.0);
    w.pos.copy(p0).lerp(p1, k1).lerp(p2, k2);
    w.target.copy(t0).lerp(t1, k1).lerp(t2, k2);
    w.fov = lerp(lerp(72, 66, k1), lerp(62, 74, pr), k2);
    w.lp = 1.3; w.lt = 1.5;
  },
  // 花びらを真横から: 花びらは薄い帯に見え、その下にはるか遠い庭が広がる
  sideShot(w, v, side, back, up, outK, downK) {
    const G = this.G;
    w.frame = G.flower.head;
    const a = PETAL_PHI[VINE_PETAL];
    const out = V3(Math.cos(a), 0, Math.sin(a));
    const sd = V3(-Math.sin(a), 0, Math.cos(a));
    const cp = this.petalLocal(VINE_PETAL, 0, v);
    w.pos.copy(cp).addScaledVector(sd, side).addScaledVector(out, -back).add(V3(0, up, 0));
    w.target.copy(cp).addScaledVector(out, outK).add(V3(0, -downK, 0));
    return cp;
  },
  shotDrop(w) {
    const G = this.G, pr = G.rig.portrait, B = G.bigDrop;
    if (this.dropFalling) {
      // 縁の横から、落ちていくしずくを見送る (茎と葉の横を落ちて、庭へ)
      w.frame = null;
      const edge = this.petalWorld(VINE_PETAL, 0, 0.95, V3());
      const out = V3(Math.cos(PETAL_PHI[VINE_PETAL]), 0, Math.sin(PETAL_PHI[VINE_PETAL])).transformDirection(G.flower.head.matrixWorld);
      out.y = 0; out.normalize();
      const sd = V3(-out.z, 0, out.x);
      w.pos.copy(edge).addScaledVector(sd, lerp(3.4, 2.8, pr)).addScaledVector(out, 1.2).add(V3(0, 0.8, 0));
      const fall = clamp((edge.y - B.pos.y) / 75);
      w.target.copy(this.dropLanded ? V3(B.pos.x, 0.3, B.pos.z) : B.pos);
      w.fov = lerp(lerp(58, 68, pr), lerp(20, 26, pr), smoothstep(0.1, 0.9, fall));
      w.lp = 1.0; w.lt = 6.0; w.look = false;
      return;
    }
    this.sideShot(w, 0.7, lerp(4.2, 3.7, pr), 0.0, lerp(0.75, 0.85, pr), 0.2, lerp(0.45, 0.8, pr));
    w.fov = lerp(55, 66, pr);
    w.lp = 1.2; w.lt = 1.4;
  },
  shotView(w) {
    const G = this.G, pr = G.rig.portrait;
    if (this.dropFalling) { this.shotDrop(w); return; }
    this.sideShot(w, 0.84, lerp(3.8, 3.4, pr), 0.6, lerp(0.5, 0.6, pr), lerp(0.3, 0.2, pr), lerp(0.8, 1.15, pr));
    w.fov = lerp(60, 74, pr);
    w.lp = 0.9; w.lt = 1.2;
  },
  shotSlide(w) {
    const G = this.G, pr = G.rig.portrait, C = G.child;
    const path = this.slidePath;
    const s = this.slideS || 0;
    const i = Math.min(path.length - 2, Math.floor(s / path.step));
    const j = Math.min(path.length - 1, i + 6);
    const dir = path[j].p.clone().sub(path[i].p);
    dir.y *= 0.5;
    if (dir.lengthSq() < 1e-6) dir.set(0, 0, -1);
    dir.normalize();
    const cp = C.pos.clone();
    // 茎の外側から追う
    const outward = V3(cp.x, 0, cp.z).normalize();
    w.pos.copy(cp).addScaledVector(dir, -lerp(3.2, 2.6, pr)).add(V3(0, 1.4, 0)).addScaledVector(outward, 1.4);
    w.target.copy(cp).addScaledVector(dir, 2.5).add(V3(0, -0.6, 0));
    w.fov = lerp(62, 72, pr);
    w.lp = 4.0; w.lt = 5.0; w.look = false;
  },
  shotHome(w) {
    const G = this.G, pr = G.rig.portrait, C = G.child;
    const cp = C.pos.clone();
    const k = smoothstep(1.5, 5, this.t);
    // 子どもの後ろの低い所から、空高く続く茎と花を見上げる
    const back = V3(cp.x, 0, cp.z).normalize();
    w.pos.copy(cp).addScaledVector(back, 2.6 + k * 1.5).add(V3(0.6, lerp(0.7, 0.45, k), 0.8));
    w.target.copy(cp).lerp(V3(0, 0, 0), 0.5).add(V3(0, lerp(1.0, lerp(16, 22, pr), k), 0));
    w.fov = lerp(55, lerp(62, 74, pr), k);
    w.lp = 1.0; w.lt = 1.0;
  },
  shotRide(w) {
    const G = this.G, pr = G.rig.portrait, C = G.child;
    const cp = C.pos.clone();
    const out = V3(cp.x, 0, cp.z).normalize();
    w.pos.copy(cp).addScaledVector(out, 5.5).add(V3(0, -2.5, 0));
    w.target.copy(cp).add(V3(0, 2.0, 0));
    w.fov = lerp(62, 72, pr);
    w.lp = 3.0; w.lt = 4.0; w.look = false;
  },

  // ------------------------------------------------------------
  // 花びら上の位置
  // ------------------------------------------------------------
  petalLocal(i, x, v, out = V3()) {
    petalPoint(this.G.flower.petals[i].frame, x, v, out);
    return out;
  },
  petalWorld(i, x, v, out = V3(), n) { return this.G.flower.petalWorld(i, x, v, out, n); },
  // 子どもが花びらの上を歩く時の高さ (ローカル)
  petalHeightAt(i, x, z) {
    const fr = this.G.flower.petals[i].frame;
    const r = Math.hypot(x, z);
    if (r < RIM) return FLOOR_Y + 0.06 * Math.pow(r / RIM, 2.5) - 0.03;
    // 中心線上で一番近い行
    let best = 0, bd = Infinity;
    for (const row of fr.rows) { const d = Math.abs(row.rho - r); if (d < bd) { bd = d; best = row; } }
    return best.y + 0.02;
  },

  // ------------------------------------------------------------
  // 水やり
  // ------------------------------------------------------------
  onWaterDrop(p, gy) {
    const G = this.G;
    const inPlot = Math.abs(p.x) < PLOT.w / 2 && Math.abs(p.z) < PLOT.d / 2;
    if (inPlot) {
      G.garden.plot.wet(p.x, p.z, 1);
      const d = Math.hypot(p.x, p.z);
      if (d < 0.6) this.water += (1 / 110) * 1.25;
      else this.water += (1 / 110) * 0.35;
      if (Math.random() < 0.08) G.particles.emit({ x: p.x, y: gy + 0.01, z: p.z, vx: (Math.random() - 0.5) * 0.6, vy: 0.6, vz: (Math.random() - 0.5) * 0.6, life: 0.4, size: 0.008, color: [0.8, 0.9, 1], alpha: 0.8, ground: (px, pz) => G.garden.plot.soilHeight(px, pz) });
    } else if (Math.random() < 0.3) {
      G.garden.grass.mat.uniforms.uRustle.value.set(p.x, p.z, G.time, 0.2);
    }
    this.dripSnd = (this.dripSnd || 0) + 1;
    if (this.dripSnd % 9 === 0) G.audio.play('drip', { vol: 0.35, pan: this.panOf(p) });
    // 子どもにかかったら、くすぐったい
    const cp = G.child.worldPos(V3());
    if (Math.hypot(p.x - cp.x, p.z - cp.z) < 0.3 && G.time - (this.wetChildT || -10) > 3) {
      this.wetChildT = G.time;
      G.child.hop(1.6); G.audio.play('giggle');
    }
    return true;
  },

  // ------------------------------------------------------------
  // 露を飲む → 茎が伸びる
  // ------------------------------------------------------------
  onDrink(d) {
    const G = this.G;
    // 花の芯が光り、茎へ脈が伝わる
    const c = this.headLocal(0, FLOOR_Y + 0.05, 0);
    for (let k = 0; k < 18; k++) {
      const a = k / 18 * Math.PI * 2;
      G.particles.emit({ x: c.x, y: c.y, z: c.z, vx: Math.cos(a) * 0.8, vy: 0.05, vz: Math.sin(a) * 0.8, glow: true, grav: 0, drag: 2.5, life: 1.0, size: 0.04, color: [0.7, 0.95, 1.0], alpha: 0.8, seed: Math.random() });
    }
    if (this.phase === 'INSIDE') {
      if (this.growT >= 1 && !this.inSpurt && this.spurt < SPURTS.length) this.G.later(() => this.startSpurt(), 350);
      else if (this.spurt + this.queued < SPURTS.length) this.queued++;
    } else {
      // 頂上では、花がうれしそうに揺れる
      G.plant.swayV.x += 0.08;
      G.audio.play('petalOpen', { chord: 67 });
    }
  },
  startSpurt() {
    const G = this.G;
    if (this.phase !== 'INSIDE' || this.spurt >= SPURTS.length || this.inSpurt) return;
    this.inSpurt = true;
    this.growFrom = G.plant.length;
    this.growTarget = SPURTS[this.spurt];
    this.growT = 0;
    this.growDur = 2.4 + this.spurt * 0.45;
    this.spurt++;
    G.plant.lengthDriven = true;
    G.audio.play('spurt', { note: this.spurt });
    this.G.later(() => G.audio.play('creak', { vol: 0.7 }), 200);
    // 1・3・5回目は窓へ寄って外を見せる
    if (this.spurt % 2 === 1) this.peekT = this.growDur + 1.8;
    G.child.set('crouch', 0.8);
    G.rig.shake = 0.6;
  },

  // ------------------------------------------------------------
  // 大きな朝露: 花びらの上を転がり、先から落ちる
  // ------------------------------------------------------------
  updateBigDrop(dt) {
    const G = this.G, B = G.bigDrop, F = G.flower;
    if (!B.visible) return;
    if (!this.dropFalling) {
      // 花びらの先の方は少し下り坂。くぼみで止まっているが、押すと転がる
      const v = this.dropV;
      const dimple = (0.86 - v) * 1.4;
      let acc = dimple * 0.6;
      if (this.dropPush > 0) { acc += 2.2; this.dropPush = Math.max(0, this.dropPush - dt); }
      if (this.dropTarget) { acc += (this.dropTarget.v - v) * 10; this.dropX = damp(this.dropX, clamp(this.dropTarget.x, -0.7, 0.7), 4, dt); }
      this.dropVel = (this.dropVel + acc * dt) * Math.exp(-2.2 * dt);
      this.dropV = clamp(this.dropV + this.dropVel * dt, 0.25, 1.0);
      this.dropX = damp(this.dropX, this.dropX * 0.9, 0.5, dt);
      const R = B.radius;
      this.petalWorld(VINE_PETAL, this.dropX, Math.min(this.dropV, 0.985), B.pos, _b);
      B.pos.addScaledVector(_b, R * 0.82 * F.head.scale.x);
      // 先端: ぶら下がって、のびて、落ちる
      if (this.dropV > 0.975) {
        this.hangT = (this.hangT || 0) + dt;
        B.stretch = smoothstep(0, 0.9, this.hangT) * 0.6;
        B.pos.y -= B.stretch * R * 0.7;
        if (this.hangT > 0.95) {
          this.dropFalling = true; this.hangT = 0; B.stretch = 0;
          this.dropFallV = V3(0, -0.4, 0);
          this.dropFallT = 0;
          G.audio.play('fall', { dur: 3.6 });
          G.child.set('peek', 1);
          if (this.phase === 'DROP') G.rig.setShot((w) => this.shotDrop(w));
        }
      } else { this.hangT = 0; B.stretch = damp(B.stretch, 0, 6, dt); }
      // 転がる音
      if (Math.abs(this.dropVel) > 0.15 && G.time - (this.dropRollSnd || 0) > 0.35) { this.dropRollSnd = G.time; G.audio.play('wobble', { pitch: 0.4 + this.dropV * 0.3, vol: 0.5 }); B.kick(0.3); }
      // 足もとの集光の斑点
      B.causticOn = true;
      this.petalWorld(VINE_PETAL, this.dropX, Math.min(this.dropV + 0.02, 1), _a, _b);
      B.caustic.position.copy(_a).addScaledVector(_b, 0.01);
      B.caustic.lookAt(_a.clone().add(_b));
      B.caustic.scale.setScalar(R * 0.5);
      B.caustic.material.opacity = 0.5;
    } else if (!this.dropLanded) {
      B.causticOn = false;
      // 自由落下 (庭のたらいへ: 少しだけ寄せる)
      this.dropFallT += dt;
      const v = this.dropFallV;
      v.y -= 9.8 * dt;
      const tx = TUB.x - B.pos.x, tz = TUB.z - B.pos.z;
      v.x = damp(v.x, tx * 0.35, 1.5, dt); v.z = damp(v.z, tz * 0.35, 1.5, dt);
      B.pos.addScaledVector(v, dt);
      // 遠ざかっても見えるように少し大きく
      B.radius = lerp(0.3, 0.55, smoothstep(5, 60, G.plant.headPos.y - B.pos.y));
      if (B.pos.y < TUB.h) {
        this.dropLanded = true; this.dropLandT = this.t;
        G.garden.props.rippleTub(TUB.x, TUB.z, 1.6);
        G.audio.play('farPlip');
        G.audio.play('wow', { vol: 0.6, delay: 0.35 });
        G.child.set('awe', 1); this.G.later(() => G.child.set('awe', 0), 2000);
        // 水しぶき (遠くからでも見える光)
        for (let k = 0; k < 24; k++) {
          const a = k / 24 * Math.PI * 2;
          G.particles.emit({ x: TUB.x, y: TUB.h, z: TUB.z, vx: Math.cos(a) * 1.2, vy: 2 + Math.random(), vz: Math.sin(a) * 1.2, glow: true, grav: 9.8, drag: 0.3, life: 0.9, size: 0.12, color: [0.9, 0.97, 1.0], alpha: 0.9, seed: Math.random() });
        }
        B.visible = false;
      }
    }
  },

  // ------------------------------------------------------------
  // 滑り台の道: 花びら → らせんの葉 → 庭
  // ------------------------------------------------------------
  buildSlide() {
    const G = this.G, P = G.plant, F = G.flower;
    F.head.updateMatrixWorld();
    const pts = [];
    const add = (p, on, air = false) => pts.push({ p: p.clone(), on, air });
    // 花びら (重みでしなった形で計算)
    const p3 = F.petals[VINE_PETAL];
    const savedSag = p3.sag || 0;
    const fr = { rows: [] };
    petalFrame({ phi: p3.phi, open: 1, sag: 0.75 }, fr);
    const start = this.G.child.worldPos(V3());
    add(start, -1);
    for (let k = 0; k <= 12; k++) {
      const v = lerp(0.5, 1.0, k / 12);
      petalPoint(fr, 0, v, _a);
      _a.y += 0.12;
      F.head.localToWorld(_a);
      add(_a, -1);
    }
    this.petalLenIdx = pts.length;
    // らせんの葉
    for (let k = 0; k < HELIX.n; k++) {
      const L = P.helix[k];
      const p0 = P.leafPoint(L, 0.3, V3()).add(V3(0, 0.15, 0));
      // 前の点から放物線で飛び移る
      const prev = pts[pts.length - 1].p;
      const n = 8;
      for (let i = 1; i < n; i++) {
        const t = i / n;
        const q = prev.clone().lerp(p0, t);
        q.y += Math.sin(Math.PI * t) * 0.6 - 0;
        add(q, -2, true);
      }
      for (let i = 0; i <= 14; i++) {
        const t = lerp(0.3, 1.0, i / 14);
        const q = P.leafPoint(L, t, V3()).add(V3(0, 0.14, 0));
        add(q, k);
      }
    }
    // 最後は芝生へ
    const last = pts[pts.length - 1].p;
    const out = V3(last.x, 0, last.z).normalize();
    const land = last.clone().addScaledVector(out, 2.2); land.y = 0.0;
    for (let i = 1; i <= 10; i++) {
      const t = i / 10;
      const q = last.clone().lerp(land, t);
      q.y = lerp(last.y, 0, t * t) + Math.sin(Math.PI * t) * 0.5;
      add(q, -2, true);
    }
    // 等間隔に並べ直す (各点は「どの葉の上か」を持つ)
    const res = [];
    const step = 0.12;
    res.push({ p: pts[0].p.clone(), on: -1, air: false });
    let carry = 0;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i];
      const d = a.p.distanceTo(b.p);
      let s2 = step - carry;
      while (s2 <= d) {
        res.push({ p: a.p.clone().lerp(b.p, s2 / d), on: b.on, air: b.air });
        s2 += step;
      }
      carry = d - (s2 - step);
    }
    res.step = step;
    res.total = (res.length - 1) * step;
    this.slidePath = res;
    // 花びらの区間の長さ
    let pl = 0;
    for (let i = 1; i < this.petalLenIdx; i++) pl += pts[i].p.distanceTo(pts[i - 1].p);
    this.petalLen = pl;
  },
});
