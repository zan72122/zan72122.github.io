// 🌀 ぐらぐら かたむき(W-17)
//
// 島ぜんたいが 0.28 rad(約16度)だけ **剛体で** 傾く。動かすのは
// world.islandGroup.rotation.z と rig.setRoll だけで、頂点(islandHeight)には いっさい触らない。
// キャラは scene 直下なので、傾いているあいだは毎フレーム ctx.rideIsland() で貼りなおす。
//
// 🌊 だいつなみ との差別化は4点である(設計書 9.8 の表)。
//   入力       … よこドラッグ ではなく **タップ**
//   誰が失うか … 全員100% ではなく **持っている子ほど多く**(60%・上限20枚)
//   動くもの   … 海面 ではなく **島の剛体の傾き**
//   配り直し   … 下位傾斜 ではなく **均等配布**(カメさんが届けてくれた)
// さらに condition(!usedIds.includes('tsunami'))で 同じゲームには両方出さない。
//
// 総量は 1枚も 増えも減りもしない。spillCoins の合計が pool へ移り、
// settleCoinScramble が pool を きっかり配り切る(spec が 105枚で実地検算する)。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMatUnique } from '../gfx.js';
import { CONFIG } from '../config.js';
import { spillCoins, settleCoinScramble } from '../rules.js';
import { easeInOut } from '../tween.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;
const PLAY_TICKS = 120;        // 250ms × 120 = 30秒
const GRAB_NDC = 0.22;         // タップ点からの NDC 距離(これより近いコインを拾う)
const CPU_MIN = 1.5;           // CPU が拾う間隔(秒)
const CPU_MAX = 3.2;

export class TiltEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.coins = null;         // InstancedMesh
    this.coinMat = null;
    this.rolling = [];         // { x, z, vx, vz, alive }
    this.angle = 0;
    this.before = [];          // イベント前のコイン数
    this.spilled = [];
    this.pool = 0;
    this.grabs = [];
    this.playing = false;
    this.cpuTimer = new Map();
    this._dummy = new THREE.Object3D();
    this._t = 0;
  }

  async run() {
    await this._trigger();     // ① きっかけ 6秒
    await this._lean();        // ② 変化 8秒
    await this._play();        // ③ 遊び 30秒
    await this._settle();      // ④ 収束 12秒
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    if (!this.coins) return;
    const { world } = this.ctx;
    const h = world.heightFn;
    const step = Math.min(0.05, dt);

    for (let i = 0; i < this.rolling.length; i++) {
      const c = this.rolling[i];
      if (!c.alive) continue;
      // 地形の勾配を数値微分して 下り坂へ。傾きぶんの一定の引きを x へ足す。
      const d = 0.6;
      const gx = (h(c.x + d, c.z) - h(c.x - d, c.z)) / (2 * d);
      const gz = (h(c.x, c.z + d) - h(c.x, c.z - d)) / (2 * d);
      c.vx += (-gx * 9 - Math.sin(this.angle) * 11) * step;
      c.vz += (-gz * 9) * step;
      c.vx *= 0.93;
      c.vz *= 0.93;
      c.x += c.vx * step;
      c.z += c.vz * step;
      // 島の外へは出さない(海に落ちると 拾えなくなって かなしい)
      const r = Math.hypot(c.x, c.z);
      if (r > 25) {
        const k = 25 / r;
        c.x *= k; c.z *= k;
        c.vx *= -0.35; c.vz *= -0.35;
      }
      this._dummy.position.set(c.x, h(c.x, c.z) + 0.16, c.z);
      this._dummy.rotation.set(Math.PI / 2, 0, this._t * 2.4 + i);
      this._dummy.updateMatrix();
      this.coins.setMatrixAt(i, this._dummy.matrix);
    }
    this.coins.instanceMatrix.needsUpdate = true;

    if (!this.playing) return;
    // 傾いているあいだ キャラを マスへ貼りなおす
    this.ctx.rideIsland();
    for (const c of this.ctx.chars) this._stepCpu(c, dt);
  }

  // ---------- ① きっかけ(約6秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { world, rig, audio, tweens, wait } = this.ctx;
    rig.setOverview();
    audio.stopBgm();
    audio.rumble();
    audio.slideRumble(2.6);
    this.ctx.punch(1.2);
    dbg.push({
      kind: 'state', id: 'tilt', from: 'idle', to: 'trigger',
      why: `angle=${CONFIG.TILT_ANGLE} weather=${world.weatherName}`,
    });
    this.ctx.banner(
      '<span class="icon">🌀</span>しまが ぐらぐら!<span class="sub">かたむいて きたよ</span>',
      2600,
    );
    // 低くなるほうの木が 同じ向きへ しなる(予告)
    await tweens.add(5.4, (k) => {
      const wob = Math.sin(k * Math.PI * 5) * (1 - k) * 0.035;
      world.islandGroup.rotation.z = wob;
    });
    world.islandGroup.rotation.z = 0;
    await wait(200);
  }

  // ---------- ② 変化(約8秒) ----------
  async _lean() {
    this.stage = 'change';
    const { world, chars, ui, rig, fx, audio, tweens, wait } = this.ctx;
    audio.startBgm('tsunami');

    this.before = chars.map((c) => c.coins);
    const res = spillCoins(chars, {
      ratio: CONFIG.TILT_SPILL_RATIO, cap: CONFIG.TILT_SPILL_CAP,
    });
    this.spilled = res.spilled;
    this.pool = res.pool;
    this.grabs = chars.map(() => 0);
    chars.forEach((c, i) => { c.coins -= this.spilled[i]; ui.updatePlayer(c); });
    this._buildCoins();

    dbg.push({
      kind: 'state', id: 'tilt', from: 'trigger', to: 'change',
      why: `tilt=${CONFIG.TILT_ANGLE} spilled=${this.spilled.join(',')} pool=${this.pool}`,
      chars: chars.map((c, i) => ({ id: c.def.id, before: this.before[i], spilled: this.spilled[i] })),
    });

    audio.slideRumble(8);
    const target = CONFIG.TILT_ANGLE;
    rig.setRoll(target, 6);
    let spills = 0;
    await tweens.add(8, (k) => {
      const e = easeInOut(k);
      this.angle = target * e;
      world.islandGroup.rotation.z = this.angle;
      this.ctx.rideIsland();
      // コインが体から こぼれ落ちる
      if (e > spills * 0.12 && spills < 8) {
        spills++;
        const c = chars[spills % chars.length];
        fx.coinBurst(c.root.position.clone().add(new THREE.Vector3(0, 0.9, 0)), 4);
        audio.coin(spills % 4);
      }
    });
    world.islandGroup.rotation.z = target;
    this.angle = target;
    this.ctx.rideIsland();
    this.ctx.punch(1.15);
    await wait(200);
  }

  // ---------- ③ 遊び(約30秒) ----------
  async _play() {
    this.stage = 'play';
    const { chars, ui, rig, audio, wait } = this.ctx;
    rig.setOverview();
    await this.ctx.banner(
      '<span class="icon">🪙</span>コインが ころがってる!<span class="sub">タップで ひろおう</span>',
      2400,
    );

    chars.forEach((c, i) => this.cpuTimer.set(c, CPU_MIN + i * 0.4));
    ui.setMinigameMode(true);
    ui.showScore(true);
    ui.showTimer(true);
    ui.showTapLayer(true);
    ui.setScore(0);
    this.playing = true;
    this.ctx.setTapHandler((ndc, px) => this.onTap(ndc, px));
    dbg.push({
      kind: 'state', id: 'tilt', from: 'change', to: 'play',
      why: `pool=${this.pool} coins=${this.rolling.filter((c) => c.alive).length} ticks=${PLAY_TICKS}`,
    });

    for (let s = 0; s < PLAY_TICKS; s++) {
      ui.setTimer(1 - s / PLAY_TICKS);
      if (s === PLAY_TICKS - 12) audio.countTick(3);
      if (s === PLAY_TICKS - 8) audio.countTick(2);
      if (s === PLAY_TICKS - 4) audio.countTick(1);
      if (this.rolling.every((c) => !c.alive)) break;
      await wait(250);
    }

    this.playing = false;
    this.ctx.setTapHandler(null);
    dbg.push({
      kind: 'state', id: 'tilt', from: 'play', to: 'settle',
      why: `grabs=${this.grabs.join(',')} left=${this.rolling.filter((c) => c.alive).length}`,
    });
    ui.showTimer(false);
    ui.showTapLayer(false);
    ui.showScore(false);
    ui.setMinigameMode(false);
    audio.countTick(0);
  }

  // ---------- ④ 収束(約12秒) ----------
  async _settle() {
    this.stage = 'settle';
    const { world, chars, rig, ui, fx, audio, tweens, wait } = this.ctx;

    // 島が もとへ もどる
    audio.slideRumble(6);
    rig.setRoll(0, 5);
    const from = this.angle;
    await tweens.add(6, (k) => {
      const e = easeInOut(k);
      this.angle = from * (1 - e);
      world.islandGroup.rotation.z = this.angle;
      this.ctx.rideIsland();
    });
    world.islandGroup.rotation.z = 0;
    this.angle = 0;
    rig.setRoll(0, 0);
    this.ctx.rideIsland();
    chars.forEach((c) => { c.land(); c.setMode('idle'); });
    audio.boing();
    rig.setOverview();

    // 拾い残しを 均等配布。総量は きっかり保存される。
    const snapshot = this.before.map((coins) => ({ coins }));
    const finals = settleCoinScramble(this.pool, this.grabs, snapshot);
    const totalBefore = this.before.reduce((s, v) => s + v, 0);

    // 結果反映は この1件だけ。
    // before(イベント前) - spilled + finals = after になることを spec が突きあわせる。
    dbg.push({
      kind: 'result', id: 'tilt', why: 'tilt-settle',
      from: `pool=${this.pool}`,
      to: `settle=${finals.join(',')} total=${totalBefore}->${
        this.before.reduce((s, v, i) => s + v - this.spilled[i] + finals[i], 0)}`,
      chars: chars.map((c, i) => ({
        id: c.def.id, before: this.before[i], spilled: this.spilled[i],
        grabbed: this.grabs[i], share: finals[i] - this.grabs[i], final: finals[i],
      })),
    });

    // 転がっていたコインを 消して、カメさんが 届けてくれた ていで配る
    this.rolling.forEach((c) => { c.alive = false; });
    if (this.coins) this.coins.visible = false;
    await this.ctx.banner(
      '<span class="icon">🐢</span>カメさんが ひろって きてくれた!<span class="sub">みんなで はんぶんこ</span>',
      2200,
    );
    chars.forEach((c, i) => {
      c.coins += finals[i];
      c.setMode('dance');
      ui.updatePlayer(c);
      audio.coin(i);
      fx.coinBurst(c.root.position.clone().add(new THREE.Vector3(0, 0.9, 0)), 6);
    });
    audio.yay();
    audio.fanfare();
    fx.rainConfetti(new THREE.Vector3(0, 6, 0), 16, 80, 10);
    await this.ctx.banner(
      `<span class="icon">🌀</span>もとどおり!<span class="sub">${
        chars.map((c) => `${c.def.emoji}🪙${c.coins}`).join('  ')}</span>`,
      2400,
    );
    chars.forEach((c) => c.setMode('idle'));
    await wait(200);
  }

  // ---------- 入力 ----------
  onTap(ndc, px) {
    if (!this.playing) { dbg.push({ kind: 'input-reject', id: 'tilt', why: 'not-playing' }); return; }
    const { chars, ui } = this.ctx;
    const player = chars.find((c) => c.isPlayer) || chars[0];
    const idx = this._nearestCoin(ndc);
    if (idx < 0) {
      dbg.push({ kind: 'input-reject', id: 'tilt', why: 'no-coin-here' });
      return;
    }
    this._grab(player, idx);
    if (px) ui.emojiBurst(px.x, px.y, '🪙');
    dbg.push({ kind: 'input-accept', id: 'tilt', to: player.def.id, why: 'grab' });
  }

  // タップ点に いちばん近いコインを 画面上の距離で選ぶ(4歳児にやさしい寛容さ)。
  // InstancedMesh の instanceId 解決に頼らないので、レイの当たり外れに左右されない。
  _nearestCoin(ndc) {
    const { world, rig } = this.ctx;
    const p = new THREE.Vector3();
    let best = -1;
    let bestD = GRAB_NDC;
    for (let i = 0; i < this.rolling.length; i++) {
      const c = this.rolling[i];
      if (!c.alive) continue;
      p.set(c.x, world.heightFn(c.x, c.z) + 0.16, c.z);
      world.islandGroup.localToWorld(p);
      p.project(rig.camera);
      const d = Math.hypot(p.x - ndc.x, p.y - ndc.y);
      if (d < bestD) { bestD = d; best = i; }
    }
    return best;
  }

  _stepCpu(char, dt) {
    if (char.isPlayer) return;
    let t = (this.cpuTimer.get(char) || 0) - dt;
    if (t > 0) { this.cpuTimer.set(char, t); return; }
    this.cpuTimer.set(char, CPU_MIN + Math.random() * (CPU_MAX - CPU_MIN));
    // CPU は いちばん近いコインを ひろう
    let best = -1;
    let bestD = Infinity;
    const { world } = this.ctx;
    for (let i = 0; i < this.rolling.length; i++) {
      const c = this.rolling[i];
      if (!c.alive) continue;
      const w = world.islandGroup.localToWorld(
        new THREE.Vector3(c.x, world.heightFn(c.x, c.z), c.z),
      );
      const d = char.root.position.distanceToSquared(w);
      if (d < bestD) { bestD = d; best = i; }
    }
    if (best >= 0) this._grab(char, best);
  }

  _grab(char, index) {
    const { world, chars, ui, fx, audio } = this.ctx;
    const c = this.rolling[index];
    if (!c || !c.alive) return;
    c.alive = false;
    const i = chars.indexOf(char);
    if (i >= 0) this.grabs[i] += c.value;
    // 拾ったコインは いったん見えなくする(配るのは収束フェーズ)
    this._dummy.position.set(0, -900, 0);
    this._dummy.rotation.set(0, 0, 0);
    this._dummy.updateMatrix();
    this.coins.setMatrixAt(index, this._dummy.matrix);
    this.coins.instanceMatrix.needsUpdate = true;

    const w = world.islandGroup.localToWorld(
      new THREE.Vector3(c.x, world.heightFn(c.x, c.z) + 0.3, c.z),
    );
    audio.coin(i < 0 ? 0 : i % 4);
    fx.sparkleBurst(w, 5, 0xffd23e);
    const player = chars.find((x) => x.isPlayer) || chars[0];
    if (char === player) ui.setScore(this.grabs[chars.indexOf(player)] || 0);
  }

  // ---------- 小道具 ----------

  // 斜面を転がるコイン。ParticleFX のプールは使わない(設計書 8章 #9)。
  // 24個 × 2回の islandHeight 呼び出し = 実測 0.005ms/frame で無視できる。
  _buildCoins() {
    const { world } = this.ctx;
    const n = CONFIG.TILT_COIN_COUNT;
    this.coinMat = toonMatUnique(0xffd23e, { emissive: 0xffaa00, emissiveIntensity: 0.3 });
    const mesh = new THREE.InstancedMesh(
      new THREE.CylinderGeometry(0.22, 0.22, 0.06, 12), this.coinMat, n,
    );
    mesh.frustumCulled = false;

    // pool 枚を 24個の見た目へ割りふる(1個に 1..n 枚)
    const base = Math.floor(this.pool / n);
    let rest = this.pool - base * n;
    this.rolling = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * TAU + Math.random() * 0.2;
      const r = 8 + Math.random() * 10;
      const value = base + (rest > 0 ? 1 : 0);
      if (rest > 0) rest--;
      this.rolling.push({
        x: Math.cos(a) * r, z: Math.sin(a) * r,
        vx: 0, vz: 0, alive: value > 0, value,
      });
      const c = this.rolling[i];
      this._dummy.position.set(
        c.alive ? c.x : 0, c.alive ? world.heightFn(c.x, c.z) + 0.16 : -900, c.alive ? c.z : 0,
      );
      this._dummy.rotation.set(Math.PI / 2, 0, 0);
      this._dummy.updateMatrix();
      mesh.setMatrixAt(i, this._dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    world.islandGroup.add(mesh);
    this.coins = this._own(mesh);
  }

  dispose() {
    const { world, ui, chars } = this.ctx;
    // 途中で止まっても 島の傾きと カメラのロールは かならず もどす(設計書 9.8)
    world.islandGroup.rotation.z = 0;
    this.angle = 0;
    this.ctx.rig.setRoll(0, 0);
    this.ctx.rideIsland();
    chars.forEach((c) => { c.setHopHeight(0); c.land(); });
    ui.showTimer(false);
    ui.showTapLayer(false);
    ui.showScore(false);
    ui.setMinigameMode(false);
    this.playing = false;
    this.cpuTimer.clear();
    this.rolling = [];
    super.dispose();
    this.coinMat?.dispose?.();
    this.coins = null;
    this.coinMat = null;
  }
}
