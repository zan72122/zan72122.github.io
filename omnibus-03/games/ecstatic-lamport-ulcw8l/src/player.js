/**
 * player.js — ダイバーの物理とステートマシン。ゲームの心臓部。
 *
 * 物理設計のキモは「角運動量 L の保存」:
 *   ω = L / I,  I は姿勢で変わる (抱え型 0.42 / えび型 0.62 / 伸型 1.15)
 * 抱えれば速く回るが、伸ばしても L は消えない。
 * → 欲張って L を溜めすぎると、伸ばした瞬間もまだ回っていて入水を潰す。
 * これが「もう半回転」の誘惑と、その代償を物理的に成立させている。
 */

import * as THREE from 'three';
import { PHYS, TIME, SHAPES } from './config.js';
import { TrickTracker, gradeEntry } from './tricks.js';

export const STATE = {
  READY: 'ready',
  CHARGE: 'charge',
  AIR: 'air',
  SPLASH: 'splash',
  DONE: 'done',
};

const TAU = Math.PI * 2;
const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();

export class Player {
  constructor(diver, world, audio) {
    this.diver = diver;
    this.world = world;
    this.audio = audio;
    this.tracker = new TrickTracker();

    this.pos = new THREE.Vector3();
    this.prevPos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.pitch = 0;
    this.L = 0;
    this.omega = 0;
    this.twist = 0;
    this.twistVel = 0;
    this.shape = 'layout';
    this.state = STATE.READY;

    this.charge = 0;
    this.chargeDir = 1;
    this.slowMo = 0;
    this.timeScale = 1;
    this.entryResult = null;
    this.char = null;
    this.spot = null;
    this.startY = 0;
    this.wallKicksLeft = 0;
    this.ghostFrames = [];
    this._ghostAcc = 0;
    this.events = [];      // フレーム内で起きたこと (main.js が拾って演出に使う)
    this.splashTimer = 0;
    this.bailedOut = false;
    this._heldSeen = { tuck: false, pike: false, layout: false };
  }

  setCharacter(c) { this.char = c; this.diver.setCharacter(c); }

  reset(spot) {
    this.spot = spot;
    const t = this.world.takeoff;
    this.pos.set(t.x, t.y + 0.92, t.z + 0.9);
    this.prevPos.copy(this.pos);
    this.vel.set(0, 0, 0);
    this.pitch = 0;
    this.L = 0;
    this.omega = 0;
    this.twist = 0;
    this.twistVel = 0;
    this.shape = 'layout';
    this.charge = 0;
    this.chargeDir = 1;
    this.slowMo = 0;
    this.timeScale = 1;
    this.state = STATE.READY;
    this.entryResult = null;
    this.entryPoint = null;
    this.startY = this.pos.y;
    this.wallKicksLeft = spot.wallKick ? 2 : 0;
    this.tracker.reset();
    this.ghostFrames = [];
    this._ghostAcc = 0;
    this.splashTimer = 0;
    this.bailedOut = false;
    this._heldSeen = { tuck: false, pike: false, layout: false };
    this.events.length = 0;
    this.diver.clearRagdoll();
    this.diver.applyPose('stand', 1);
    this.diver.root.position.copy(this.pos);
    this.diver.root.rotation.set(0, 0, 0);
    this.diver.rig.rotation.set(0, 0, 0);
    this.world.resetPickups();
  }

  get gravity() { return PHYS.gravity * (this.char?.gravityMult || 1); }
  get fallHeight() { return Math.max(0, this.startY - this.pos.y); }
  get heightAboveWater() { return this.pos.y - this.world.water.heightAt(this.pos.x, this.pos.z); }

  /** 体軸(頭方向)の単位ベクトル */
  bodyUp(out = _v) { return out.set(0, Math.cos(this.pitch), Math.sin(this.pitch)); }

  /** 入水判定に使う先端(頭 or 足) */
  leadingPoint(out = _v2) {
    this.bodyUp(_v);
    const headward = _v.y < 0;
    return out.copy(this.pos).addScaledVector(_v, headward ? 0.95 : -0.9);
  }

  /** 理想入水方向 = 真下と速度方向のブレンド。実際の飛び込みと同じ考え方。 */
  idealEntryDir(out = new THREE.Vector3()) {
    const v = _v.copy(this.vel);
    if (v.lengthSq() < 1e-4) return out.set(0, -1, 0);
    v.normalize();
    return out.set(0, -1, 0).multiplyScalar(0.45).addScaledVector(v, 0.55).normalize();
  }

  /** 現在の入水角(度)と頭からかどうか */
  entryReadout() {
    const ideal = this.idealEntryDir();
    const up = this.bodyUp(_v).clone();
    const down = up.clone().negate();
    const dHead = down.dot(ideal), dFeet = up.dot(ideal);
    const headFirst = dHead >= dFeet;
    const d = Math.min(1, Math.max(-1, headFirst ? dHead : dFeet));
    const axis = headFirst ? down : up;
    // 符号: 回りすぎ(+)か 足りない(-)かを HUD の針で示すために使う
    const cross = ideal.y * axis.z - ideal.z * axis.y;
    const angle = THREE.MathUtils.radToDeg(Math.acos(d));
    return { angle, signed: angle * (cross >= 0 ? 1 : -1), headFirst, ideal };
  }

  // -----------------------------------------------------------------
  update(dt, input) {
    this.events.length = 0;
    switch (this.state) {
      case STATE.READY: this._ready(dt, input); break;
      case STATE.CHARGE: this._chargeStep(dt, input); break;
      case STATE.AIR: this._air(dt, input); break;
      case STATE.SPLASH: this._splash(dt); break;
      default: break;
    }
  }

  _ready(dt, input) {
    this.diver.applyPose('stand');
    this.diver.update(dt);
    if (input.any) { this.state = STATE.CHARGE; this.charge = 0; this.chargeDir = 1; }
  }

  /** 溜め: メーターが往復するので、狙った強さで離す必要がある。 */
  _chargeStep(dt, input) {
    this.charge += this.chargeDir * dt * 1.15;
    if (this.charge >= 1) { this.charge = 1; this.chargeDir = -1; }
    if (this.charge <= 0.12) { this.charge = 0.12; this.chargeDir = 1; }
    this.diver.blendPose('stand', 'crouch', Math.min(1, this.charge * 1.1));
    this.diver.update(dt, 18);
    this.audio.charge(this.charge);
    if (!input.any) this._takeoff();
  }

  _takeoff() {
    const c = this.char;
    const perfect = this.charge >= 0.82 && this.charge <= 0.94;
    const power = c.power * (0.55 + this.charge * 0.8);
    this.vel.set(0, 11.8 * power, 3.8 * power);
    this.state = STATE.AIR;
    this.startY = this.pos.y;
    this.tracker.perfectTakeoff = perfect;
    this.diver.applyPose('launch');
    this.audio.takeoff(power);
    if (perfect) { this.audio.perfectTakeoff(); this.events.push({ type: 'perfectTakeoff' }); }
    this.events.push({ type: 'takeoff', power });
  }

  _air(dt, input) {
    const c = this.char;
    // --- 姿勢の決定 ---
    const spinning = input.front || input.back;
    const braking = input.pike && !spinning;
    let shape = 'layout';
    if (spinning) shape = input.pike ? 'pike' : 'tuck';
    // 水面が近い(スローモーション中)は微調整モード。
    // ここで急に抱え込めてしまうと入水が運任せになるので、姿勢は伸型に固定し、
    // 入力は「線を整えるための弱いトリム」として効かせる。
    const trim = this.slowMo;
    if (trim > 0.6 && shape === 'tuck') shape = 'layout';
    this.shape = shape;

    // --- 角運動量 ---
    const dir = input.front ? 1 : input.back ? -1 : 0;
    if (dir !== 0) {
      const opposing = this.L !== 0 && Math.sign(dir) !== Math.sign(this.L);
      const rate = (opposing ? PHYS.spinCounter : PHYS.spinTorque) * (1 - 0.62 * trim);
      this.L += dir * rate * c.spin * dt;
      this.L = THREE.MathUtils.clamp(this.L, -PHYS.maxL, PHYS.maxL);
    }
    // 姿勢ごとの自然減衰 + 明示的なブレーキ
    const damp = PHYS.shapeDamp[shape] || 0;
    if (damp > 0) this.L *= Math.exp(-damp * dt);
    if (braking) {
      this.L *= Math.exp(-PHYS.flareDamp * dt);
      this.bailedOut = true;
    }
    const I = PHYS.inertia[shape] * c.inertia;
    this.omega = this.L / I;
    const dTheta = this.omega * dt;
    this.pitch += dTheta;

    // --- ひねり ---
    const th = input.twistHeld;
    if (th !== 0) this.twistVel += (th * PHYS.twistRate - this.twistVel) * Math.min(1, dt * 8);
    else this.twistVel *= Math.exp(-PHYS.twistDrag * dt * 3);
    if (input.twist !== 0) { this.audio.twist(); this.events.push({ type: 'twist' }); }
    const dTwist = this.twistVel * dt;
    this.twist += dTwist;

    this.tracker.step(dTheta, dTwist, shape, dt);
    if (this.tracker.consumeHalfTurn()) this.audio.whoosh(Math.min(1, Math.abs(this.omega) / 12));
    // その姿勢を「保った」と認定された瞬間に知らせる(倍率が確定する)
    const held = this.tracker.heldShapes();
    for (const k of ['tuck', 'pike', 'layout']) {
      if (held[k] && !this._heldSeen[k]) { this._heldSeen[k] = true; this.events.push({ type: 'shapeHeld', shape: k }); }
    }

    // --- 並進運動 ---
    this.prevPos.copy(this.pos);
    this.vel.y += this.gravity * dt;
    const wind = (this.spot.wind || 0);
    this.vel.x += Math.sin(this.world.water.time * 0.6) * wind * 1.4 * dt;
    const drag = Math.exp(-PHYS.airDrag * dt);
    this.vel.multiplyScalar(drag);
    if (this.vel.y < -PHYS.terminal) this.vel.y = -PHYS.terminal;
    this.pos.addScaledVector(this.vel, dt);

    this._wallKick(input);
    this._collect();

    // --- 見た目 ---
    this._applyVisualPose(dt, braking);
    this.diver.root.position.copy(this.pos);
    this.diver.root.rotation.set(this.pitch, 0, 0);
    this.diver.rig.rotation.set(0, this.twist, 0);

    // --- スローモーション ---
    const lead = this.leadingPoint();
    const wY = this.world.water.heightAt(lead.x, lead.z);
    const gap = lead.y - wY;
    const tti = gap / Math.max(0.5, -this.vel.y);    // 着水までの残り時間
    const wantSlow = this.vel.y < 0 && tti < TIME.slowMoTime;
    const target = wantSlow ? 1 : 0;
    if (wantSlow && this.slowMo < 0.01) { this.audio.slowMo(true); this.events.push({ type: 'slowMoOn' }); }
    this.slowMo += (target - this.slowMo) * Math.min(1, dt / TIME.slowMoBlend * (wantSlow ? 1 : 0.5));
    this.timeScale = 1 + (TIME.slowMoScale - 1) * this.slowMo;

    this.audio.setWind(Math.min(1, Math.abs(this.vel.y) / 30));
    this._recordGhost(dt);

    if (gap <= 0) this._enterWater(lead, wY);
  }

  _applyVisualPose(dt, braking) {
    if (braking) this.diver.applyPose('flare');
    else if (this.shape === 'tuck') this.diver.applyPose('tuck');
    else if (this.shape === 'pike') this.diver.applyPose('pike');
    else {
      // 伸型: 水面が近く回転が収まっているなら入水姿勢へ寄せる
      const gap = this.heightAboveWater;
      // 回転が収まり水面が近いほど、腕を頭上で組む入水姿勢へ寄せる
      const calm = THREE.MathUtils.clamp(1 - Math.abs(this.omega) / 4.0, 0, 1);
      const near = THREE.MathUtils.clamp(1 - gap / 16, 0, 1);
      this.diver.blendPose('layout', 'entry', calm * near);
    }
    this.diver.update(dt, this.slowMo > 0.4 ? 9 : 15);
  }

  _wallKick(input) {
    if (this.wallKicksLeft <= 0 || !input.pikePressed) return;
    for (const b of this.world.walls) {
      const cp = _v.set(
        THREE.MathUtils.clamp(this.pos.x, b.min.x, b.max.x),
        THREE.MathUtils.clamp(this.pos.y, b.min.y, b.max.y),
        THREE.MathUtils.clamp(this.pos.z, b.min.z, b.max.z));
      if (cp.distanceTo(this.pos) > 2.4) continue;
      const away = _v2.copy(this.pos).sub(cp);
      if (away.lengthSq() < 1e-5) away.set(0, 0, 1);
      away.y = 0; away.normalize();
      this.vel.y = Math.max(this.vel.y * 0.15, 0) + 8.4;
      this.vel.z += 3.0;
      this.vel.addScaledVector(away, 1.1);
      this.wallKicksLeft--;
      this.tracker.wallKicks++;
      this.audio.wallKick();
      this.world.particles.burst(this.pos.clone(), 16, { speed: 6, color: [0xffffff, 0xd8d0c0], life: 0.7, size: 0.09 });
      this.events.push({ type: 'wallKick' });
      return;
    }
  }

  _collect() {
    // リング: 前フレームからの線分が輪の面を跨いだかで判定。
    // 行列の更新タイミングに依存しないよう、保存した中心と軸ベクトルだけで計算する。
    for (const r of this.world.rings) {
      if (r.taken) continue;
      const n = r.axis;
      const da = _v.copy(this.prevPos).sub(r.pos).dot(n);
      const db = _v2.copy(this.pos).sub(r.pos).dot(n);
      if (da === db || Math.sign(da) === Math.sign(db)) continue;
      const t = da / (da - db);
      _v.copy(this.prevPos).lerp(this.pos, t).sub(r.pos);
      const along = _v.dot(n);
      const radial = Math.sqrt(Math.max(0, _v.lengthSq() - along * along));
      if (radial > r.r * 1.08) continue;
      r.taken = true;
      r.obj.visible = false;
      this.tracker.rings++;
      this.audio.ring(this.tracker.rings);
      this.world.particles.burst(r.pos.clone(), 24, { speed: 7, color: [0x6ff0ff, 0xffffff], life: 0.8, size: 0.1, grav: -4 });
      this.events.push({ type: 'ring', n: this.tracker.rings, pos: r.pos.clone() });
    }
    for (const c of this.world.coins) {
      if (c.taken) continue;
      if (c.obj.position.distanceTo(this.pos) > 0.95) continue;
      c.taken = true;
      c.obj.visible = false;
      this.tracker.coins++;
      this.audio.coin(this.tracker.coins);
      this.world.particles.burst(c.pos.clone(), 12, { speed: 5, color: [0xffcb2e, 0xfff0a0], life: 0.6, size: 0.08, grav: -6 });
      this.events.push({ type: 'coin', n: this.tracker.coins, pos: c.pos.clone() });
    }
  }

  _recordGhost(dt) {
    this._ghostAcc += dt;
    if (this._ghostAcc < 1 / 30) return;
    this._ghostAcc = 0;
    this.ghostFrames.push([
      +this.pos.x.toFixed(3), +this.pos.y.toFixed(3), +this.pos.z.toFixed(3),
      +this.pitch.toFixed(3), +this.twist.toFixed(3),
      this.shape === 'tuck' ? 0 : this.shape === 'pike' ? 1 : 2,
    ]);
  }

  _enterWater(lead, waterY) {
    const read = this.entryReadout();
    const spinAbs = Math.abs(this.omega);
    const grade = gradeEntry(read.angle, spinAbs, read.headFirst);
    this.tracker.fallHeight = this.fallHeight;

    this.entryResult = { grade, angle: read.angle, headFirst: read.headFirst, spin: spinAbs };
    this.entryPoint = lead.clone();   // カメラが着水点を見続けるために保持
    this.state = STATE.SPLASH;
    this.splashTimer = 0;
    this.slowMo = 0;
    this.timeScale = 1;
    this.audio.slowMo(false);
    this.audio.setWind(0);

    const speed = Math.min(2.4, Math.abs(this.vel.y) / 16);
    const splashScale = (this.char.splash || 1);
    const style = grade.key === 'rip' ? 'rip' : grade.key === 'flop' || grade.key === 'sloppy' ? 'flop' : 'normal';
    this.world.particles.splash(lead, speed * (style === 'rip' ? 1.5 : splashScale * 1.2), waterY,
      this.spot.night ? 0x8fbfd8 : 0x9fe8ff, style);
    this.world.water.ripple(lead.x, lead.z, style === 'rip' ? 0.5 : style === 'flop' ? 1.6 * splashScale : 1.0);
    this.audio.splash(grade.key, splashScale);
    this.events.push({ type: 'entry', grade, angle: read.angle, pos: lead.clone(), style });

    if (grade.key === 'flop' || (grade.key === 'sloppy' && spinAbs > 6)) {
      this.diver.startRagdoll(this.vel.clone(), new THREE.Vector3(this.omega, 0, 0));
    }
  }

  _splash(dt) {
    this.splashTimer += dt;
    if (this.diver.isRagdoll) {
      this.diver.updateRagdoll(dt, 0, this.gravity, (p, speed) => {
        if (speed > 4) {
          this.world.particles.splash(p, Math.min(1.6, speed / 12), 0, 0xbfe8ff, 'normal');
          this.world.water.ripple(p.x, p.z, 0.6);
        }
      });
    } else {
      // 水中を滑る
      this.vel.y += (this.gravity + PHYS.buoyancy) * dt;
      this.vel.multiplyScalar(Math.exp(-PHYS.waterDrag * dt));
      this.pos.addScaledVector(this.vel, dt);
      this.pitch += this.omega * dt;
      this.omega *= Math.exp(-4.5 * dt);
      this.diver.root.position.copy(this.pos);
      this.diver.root.rotation.set(this.pitch, 0, 0);
      this.diver.applyPose('entry');
      this.diver.update(dt, 6);
      if (Math.random() < 0.35 && this.pos.y < 0) {
        this.world.particles.spawn({
          p: this.pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.5, 0, (Math.random() - 0.5) * 0.5)),
          v: new THREE.Vector3(0, 2.5 + Math.random() * 2, 0),
          life: 1.0, size: 0.06, grav: 6, drag: 0.6, color: 0xdff6ff, waterY: -99,
        });
      }
    }
    if (this.splashTimer > 1.05) this.state = STATE.DONE;
  }
}
