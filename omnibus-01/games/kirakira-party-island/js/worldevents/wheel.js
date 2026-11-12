// 🎲 しま まるごと だいルーレット(W-20)
//
// けっか はっぴょうの直前に かならず1回だけ走る フィナーレ専用イベント。
// 島の地面が4人のキャラ色の パイ に塗り分かれ、面積は その子のコイン数に比例する
// (どの子も 12% は必ずある = コインが0でも当たる目がのこる)。
// 中央タワーの矢印が回り出し、**タップ1回で減速がはじまる**。止まった色の子が⭐1個。
// これを3回くりかえし、2回目は 最下位の色が2倍幅になる ボーナス回である。
//
// 島は1ミリも動かさない。回すのは矢印だけで、islandHeight も マスの位置も そのままである
// (当たり判定を こわさない安全策・設計書 4.9)。
// 当選者は 先に spinWheel で決め、矢印が その区画の中心で止まるように
// 減速時間 T を逆算する。見た目と結果が 食いちがう事故が原理的に起きない。
//
// _finale() は stars → coins の降順で並べるだけなので、ここで stars を書きかえると
// そのまま新しい順位が表示される(設計書 0.3 #3・_finale は無改造)。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMat, toonMatUnique } from '../gfx.js';
import { CONFIG } from '../config.js';
import { applyWheelStars, spinWheel, wheelConsolation, wheelWeights } from '../rules.js';
import { WorldEventBase } from './base.js';
import { rand } from '../rng.js';
import { dbg } from '../debug.js';

const TAU = Math.PI * 2;
const PAINT_STEPS = 25;        // パイが 染まるまでの コマ数(× 200ms = 5秒)
const PAINT_INTERVAL = 200;    // 設計書 2.3 の「毎フレーム呼ばない」規約
const SPIN_SPEED = 9.0;        // 矢印の角速度(rad/s)。1秒で 約1.4周
const TOWER_TOP = 8.6;         // 矢印の高さ(島ローカル)
const RATCHET_STEPS = 24;      // 減速中、1周で何回カチッと鳴らすか

export class WheelEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.pillar = null;
    this.arrowPivot = null;
    this.arrowMat = null;
    this.rays = [];            // 地面の光の線(4本)
    this.angle = 0;            // 矢印が指している パイ角(atan2(z,x) と同じ向き)
    this.state = 'idle';       // idle | spin | slow | stopped
    this.speed0 = SPIN_SPEED;
    this.slowFrom = 0;
    this.slowT = 0;
    this.slowDur = 1;
    this.slowDist = 0;
    this._onStop = null;
    this._ratchetAt = -1;
    this._t = 0;
    this.winners = [];
    this.weights = [];
    this.starsBefore = null;   // まわす前の ⭐。applyWheelStars の出発点にする
  }

  async run() {
    // ⭐の足し算は applyWheelStars(純関数)に一本化する。
    // まわす前の値をひかえ、当選するたびに winners から 引きなおす。
    this.starsBefore = this.ctx.chars.map((c) => Math.max(0, Number(c.stars) || 0));
    await this._trigger();   // ① きっかけ
    await this._pie();       // ② 変化
    await this._play();      // ③ 遊び
    await this._finish();    // ④ 収束
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    if (this.arrowMat) {
      this.arrowMat.emissiveIntensity = 0.5 + Math.sin(this._t * 6) * 0.22;
    }
    if (this.state === 'spin') {
      this.angle += this.speed0 * dt;
    } else if (this.state === 'slow') {
      this.slowT += dt;
      const t = Math.min(this.slowT, this.slowDur);
      // angle(t) = θ0 + ω t - (ω / 2T) t² は t = T で θ0 + ωT/2 = θ0 + D に着く
      this.angle = this.slowFrom + this.speed0 * t - (this.speed0 / (2 * this.slowDur)) * t * t;
      // カチッ…カチッ…(減速するほど間隔がのびる)
      const step = Math.floor((this.angle / TAU) * RATCHET_STEPS);
      if (step !== this._ratchetAt) {
        this._ratchetAt = step;
        this.ctx.audio.ratchet(Math.min(30, Math.floor(this.slowT * 6)));
      }
      if (this.slowT >= this.slowDur) {
        this.angle = this.slowFrom + this.slowDist;
        dbg.push({ kind: 'state', id: 'wheel', from: 'slow', to: 'stopped' });
        this.state = 'stopped';
        const done = this._onStop;
        this._onStop = null;
        done?.();
      }
    }
    if (this.arrowPivot) {
      // Y軸まわりの回転は (1,0,0) を (cos φ, 0, -sin φ) へ送るので、
      // パイ角 a を指すには rotation.y = -a と書く(符号の取りちがえ防止)。
      this.arrowPivot.rotation.y = -this.angle;
    }
  }

  // ---------- ① きっかけ(約6秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { world, rig, audio, tweens, wait } = this.ctx;
    audio.stopBgm();
    rig.setWheel();
    audio.fanfare();

    this._buildTower();
    this._buildRays();

    this.ctx.banner(
      '<span class="icon">🎲</span>しま まるごと だいルーレット!'
      + '<span class="sub">とまった いろの こが ⭐を もらえるよ</span>',
      3000,
    );

    // タワーが空へ のびて、地面に光の線が はしる
    await tweens.add(3, (k) => {
      this.pillar.scale.y = Math.max(0.001, k);
      this.pillar.position.y = this._baseY + (TOWER_TOP - this._baseY) * 0.5 * k;
      this.rays.forEach((r, i) => {
        const on = Math.min(1, Math.max(0, k * 4 - i * 0.6));
        r.material.opacity = 0.75 * on;
        r.scale.setScalar(0.2 + 0.8 * on);
      });
    });
    audio.sparkle();
    await wait(900);
  }

  // ---------- ② 変化(約9秒) ----------
  async _pie() {
    this.stage = 'change';
    const { chars, world, audio, wait } = this.ctx;

    // 4人をタワーの根もとへ 集合させる
    await Promise.all(chars.map((c, i) => {
      const a = (i / chars.length) * TAU + Math.PI / 4;
      const r = 4.2;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const to = new THREE.Vector3(x, world.heightFn(x, z) + 0.16, z);
      return this.ctx.hopFree(c, to, 0.85, { hopHeight: 1.5 })
        .then(() => c.faceTowards(new THREE.Vector3(0, 0, 0)));
    }));

    // パイを じわじわ 染める。17,689頂点ぶんの計算なので 200ms に1回だけ(設計書 2.3)。
    this.weights = this._weightsFor(0);
    const colors = chars.map((c) => c.def.color);
    for (let i = 0; i < PAINT_STEPS; i++) {
      world._paintIsland('pie', {
        weights: this.weights, colors, amount: (i + 1) / PAINT_STEPS,
      });
      if (i % 6 === 0) audio.sparkle();
      await wait(PAINT_INTERVAL);
    }
    this.ctx.punch(1.15);
  }

  // ---------- ③ 遊び(約26秒) ----------
  async _play() {
    this.stage = 'play';
    const { chars, ui, audio, fx, wait, world } = this.ctx;
    const colors = chars.map((c) => c.def.color);

    for (let spin = 0; spin < CONFIG.WHEEL_SPINS; spin++) {
      const bonus = spin === CONFIG.WHEEL_BONUS_SPIN;
      this.weights = this._weightsFor(spin);
      world._paintIsland('pie', { weights: this.weights, colors, amount: 1 });
      this._paintRays();

      if (bonus) {
        audio.chime(1);
        this.ctx.banner(
          '<span class="icon">🎁</span>ボーナス かい!'
          + '<span class="sub">いちばん うしろの こが 2ばい ひろい!</span>',
          1800,
        );
        await wait(1800);
      }

      // 先に当選者を決める。矢印は この区画の中心で止まるように減速させる。
      const winner = spinWheel(this.weights, rand);
      this.winners.push(winner);

      // 回しはじめ → タップ待ち(5秒で自動)
      this.state = 'spin';
      dbg.push({
        kind: 'state', id: 'wheel', from: 'idle', to: 'spin',
        why: `spin ${spin}${bonus ? ' bonus' : ''}`,
        chars: this.weights.map((w) => Number(w.toFixed(4))),
      });
      this._ratchetAt = -1;
      ui.showTapLayer(true);
      let tapped = false;
      this.ctx.setTapHandler(() => {
        if (tapped || this.state !== 'spin') {
          dbg.push({
            kind: 'input-reject', id: 'wheel',
            why: tapped ? 'already-tapped' : `state=${this.state}`,
          });
          return;
        }
        tapped = true;
        audio.tap();
        this._startSlow(winner);
      });
      for (let i = 0; i < CONFIG.WHEEL_TAP_WAIT * 4 && !tapped; i++) await wait(250);
      if (!tapped) this._startSlow(winner);       // 4歳児がタップしなくても進む
      this.ctx.setTapHandler(null);
      ui.showTapLayer(false);

      // 減速の終わりを待つ
      await new Promise((res) => { this._onStop = res; });

      // 止まりきらず カクンと となりへ かたむく(当選者は変わらない範囲)
      const edges = this._edges(this.weights);
      const half = (edges[winner + 1] - edges[winner]) / 2;
      const end = this.angle;
      const lean = Math.min(half * 0.8, 0.5);
      await this.ctx.tweens.add(1.0, (k) => {
        this.angle = end + lean * Math.sin(k * Math.PI * 2.5) * (1 - k);
      });
      this.angle = end;

      // 当選演出。⭐は applyWheelStars が返す値をそのまま入れる(足し算はここでしない)。
      const c = chars[winner];
      const stars = applyWheelStars(
        this.starsBefore.map((v) => ({ stars: v })), this.winners,
      );
      chars.forEach((ch, i) => { ch.stars = stars[i]; ui.updatePlayer(ch); });
      dbg.push({
        kind: 'result', id: 'wheel', why: 'wheel-stars',
        to: c.def.id, chars: stars.slice(),
      });
      c.setMode('cheer');
      audio.starGet();
      this.ctx.punch(0.8);
      fx.burstConfetti(c.root.position, 44, 3, 6);
      fx.sparkleBurst(c.root.position, 14, 0xffe066, 1.8);
      this.ctx.banner(
        `<span class="icon">${c.def.emoji}⭐</span>${c.def.name} の いろ!`
        + `<span class="sub">⭐${c.stars} こに なったよ</span>`,
        1700,
      );
      await wait(1700);
      c.setMode('idle');
      dbg.push({ kind: 'state', id: 'wheel', from: 'stopped', to: 'idle', why: `spin ${spin} done` });
      this.state = 'idle';
    }
  }

  // ---------- ④ 収束(約11秒) ----------
  async _finish() {
    this.stage = 'settle';
    const { chars, ui, audio, fx, wait } = this.ctx;

    // がんばったで賞。1回も当たらなかった子に コイン。
    const gains = wheelConsolation(chars, this.winners, CONFIG.WHEEL_CONSOLATION);
    const sad = [];
    dbg.push({
      kind: 'result', id: 'wheel', why: 'wheel-consolation',
      chars: gains.slice(), to: this.winners.join(','),
    });
    gains.forEach((g, i) => {
      if (g <= 0) return;
      chars[i].coins += g;
      ui.updatePlayer(chars[i]);
      chars[i].setMode('cheer');
      fx.coinBurst(chars[i].root.position.clone().add(new THREE.Vector3(0, 0.9, 0)), 6);
      sad.push(chars[i].def.emoji);
    });
    if (sad.length) {
      for (let i = 0; i < 3; i++) audio.coin(i);
      await this.ctx.banner(
        `<span class="icon">${sad.join('')}</span>がんばったで しょう!`
        + `<span class="sub">🪙${CONFIG.WHEEL_CONSOLATION} まい ずつ</span>`,
        2000,
      );
      chars.forEach((c) => c.setMode('idle'));
    }

    audio.fanfare();
    chars.forEach((c) => c.setMode('cheer'));
    fx.rainConfetti(new THREE.Vector3(0, 6, 0), 11, 60, 10);
    await this.ctx.banner(
      '<span class="icon">🎉</span>ルーレット おしまい!'
      + '<span class="sub">けっか はっぴょう!</span>',
      2200,
    );
    chars.forEach((c) => c.setMode('idle'));
    ui.showTapLayer(false);
    await wait(300);
  }

  // ---------- 当選までの減速を逆算する ----------
  // D = (目標角 - いまの角 mod TAU) + TAU n。T = 2D/ω なら t = T で ちょうど D 進む。
  // n は T が 2.2〜5.5秒に入るように選ぶ(短すぎると あっけなく、長すぎると だれる)。
  _startSlow(winner) {
    const edges = this._edges(this.weights);
    const target = (edges[winner] + edges[winner + 1]) / 2;
    const d0 = ((target - this.angle) % TAU + TAU) % TAU;
    let dist = d0 + TAU * 3;
    for (let n = 1; n <= 12; n++) {
      const d = d0 + TAU * n;
      const t = (2 * d) / this.speed0;
      if (t >= 2.2 && t <= 5.5) { dist = d; break; }
    }
    this.slowFrom = this.angle;
    this.slowDist = dist;
    this.slowDur = Math.max(0.5, (2 * dist) / this.speed0);
    this.slowT = 0;
    this._ratchetAt = -1;
    dbg.push({
      kind: 'state', id: 'wheel', from: this.state, to: 'slow',
      why: `winner=${winner} dur=${this.slowDur.toFixed(2)}s`,
    });
    this.state = 'slow';
  }

  // spin 回目の面積比。ボーナス回だけ 最下位が2倍幅になる。
  _weightsFor(spin) {
    return wheelWeights(this.ctx.chars, {
      minShare: CONFIG.WHEEL_MIN_SHARE,
      underdogBoost: spin === CONFIG.WHEEL_BONUS_SPIN ? 2 : 1,
    });
  }

  // 区画のさかい(0..TAU の累積)。_paintIsland('pie') と同じ割りかたである。
  _edges(weights) {
    const n = weights.length;
    const sum = weights.reduce((a, b) => a + Math.max(0, b), 0) || 1;
    const edges = [0];
    let acc = 0;
    for (let k = 0; k < n; k++) {
      acc += Math.max(0, weights[k]) / sum;
      edges.push(k === n - 1 ? TAU : acc * TAU);
    }
    return edges;
  }

  // ---------- 小道具 ----------
  _buildTower() {
    const { world } = this.ctx;
    this._baseY = world.heightFn(0, 0);

    const g = new THREE.Group();
    // 空へ のびる 光の柱(scale.y を 0→1 にして のばす)
    this.pillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.24, TOWER_TOP - this._baseY, 12),
      toonMatUnique(0xfff4c0, { emissive: 0xffd23e, emissiveIntensity: 0.6 }),
    );
    this.pillar.position.set(0, this._baseY, 0);
    this.pillar.scale.y = 0.001;
    g.add(this.pillar);

    // 矢印。パイ角 this.angle を指すように update が rotation.y = -angle を書く。
    this.arrowPivot = new THREE.Group();
    this.arrowPivot.position.set(0, TOWER_TOP, 0);
    this.arrowMat = toonMatUnique(0xff5c8d, { emissive: 0xff2f6f, emissiveIntensity: 0.5 });

    const head = new THREE.Mesh(new THREE.ConeGeometry(0.62, 1.9, 10), this.arrowMat);
    head.rotation.z = -Math.PI / 2;
    head.position.set(5.1, 0, 0);
    const shaft = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.3, 0.3), this.arrowMat);
    shaft.position.set(2.0, 0, 0);
    const tail = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 10), toonMat(0xfff4c0));
    const back = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.24, 0.24), this.arrowMat);
    back.position.set(-1.0, 0, 0);
    this.arrowPivot.add(head, shaft, tail, back);
    g.add(this.arrowPivot);

    world.islandGroup.add(g);
    this._own(g);
    this.towerGroup = g;
  }

  // 地面を4分割する光の線。地形の高さに そって リボンを はわせる。
  _buildRays() {
    const { world, chars } = this.ctx;
    const g = new THREE.Group();
    const weights = this._weightsFor(0);
    const edges = this._edges(weights);
    for (let k = 0; k < chars.length; k++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xfff6c8, transparent: true, opacity: 0, depthWrite: false,
      });
      const ribbon = new THREE.Mesh(this._ribbonGeometry(edges[k]), mat);
      g.add(ribbon);
      this.rays.push(ribbon);
    }
    world.islandGroup.add(g);
    this._own(g);
    this.rayGroup = g;
  }

  // 中心から そとへ のびる 幅 0.5 の帯。y は islandHeight に そわせて 浮かせない。
  _ribbonGeometry(angle) {
    const { world } = this.ctx;
    const SEG = 34, R0 = 1.6, R1 = 29, HALF = 0.26;
    const nx = -Math.sin(angle), nz = Math.cos(angle);
    const verts = [];
    const idx = [];
    for (let i = 0; i <= SEG; i++) {
      const r = R0 + (R1 - R0) * (i / SEG);
      const x = Math.cos(angle) * r, z = Math.sin(angle) * r;
      const y = world.heightFn(x, z) + 0.14;
      verts.push(x + nx * HALF, y, z + nz * HALF);
      verts.push(x - nx * HALF, y, z - nz * HALF);
    }
    for (let i = 0; i < SEG; i++) {
      const a = i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    return geo;
  }

  // ボーナス回で 面積比が変わったら、光の線も 引き直す。
  _paintRays() {
    const edges = this._edges(this.weights);
    this.rays.forEach((r, k) => {
      r.geometry.dispose();
      r.geometry = this._ribbonGeometry(edges[k]);
      r.material.opacity = 0.75;
    });
  }

  dispose() {
    const { world, ui } = this.ctx;
    // 島の色を もどす。もどさないと ?event=wheel の単体再生で パイのまま のこる
    // (設計書 4.9 リスク欄)。
    world._paintIsland('default');
    ui.showTapLayer(false);
    this.rays.length = 0;
    this.arrowPivot = null;
    this.arrowMat = null;
    this.pillar = null;
    super.dispose();
  }
}
