// 🌊 ざっぱーん だいつなみ(W-18)
//
// おおきな波が島を ざぶーんと洗い、みんなのコインが ぜんぶ 海に浮かぶ。
// よこドラッグで自分のキャラを 外周リングのうえで動かして拾いなおす。
// ひろい残しは「うみの おくりもの」として コインが少ない子ほど多く配られる(総量保存)。
//
// スターには いっさい触らない。島の頂点にも islandGroup にも触らない。
// 動かすのは world.sea の position.y と seaMat の swell uniform だけである。
// 溺れる・沈む 表現は作らず、全員 浮き輪に乗って ぷかぷかする。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMatUnique } from '../gfx.js';
import { washCoins, tideRedistribute } from '../rules.js';
import { easeInOut, easeOut } from '../tween.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;
const SEA_UP = 1.8;         // 海面をここまで上げる
const RING_R = 20.2;        // キャラと浮きコインが ただよう 外周リングの半径
const PLAY_TICKS = 100;     // 250ms × 100 = 25秒
const FLOAT_MAX = 40;       // 浮きコインの上限(専用メッシュ。ParticleFX は使わない)
const GRAB_DIST = 1.35;
const MIN_POOL = 12;        // コインが0枚のとき(?event= の単体再生)の「うみの おくりもの」
// ドラッグは pointermove ごとに来るので、ログは この角度ぶん動いたときだけ積む。
// (200件のリングバッファから event-start を押し出さないため。受理そのものは毎回行う)
const LOG_ANGLE_STEP = 0.15;

export class TsunamiEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.rings = [];
    this.floats = [];        // { mesh, value, angle, radius, phase, alive }
    this.rider = new Map();  // char → 浮き輪メッシュ
    this.angleOf = new Map();
    this.cpuTimer = new Map();
    this.cpuTarget = new Map();
    this.grabs = [];
    this.before = [];
    this.playerAngle = 0;
    this.baseAngle = 0;
    this.playing = false;
    this.floating = false;
    this.pool = 0;             // 海へ流れたコインの総数(記録用)
    this.washedTotal = 0;
    this._loggedAngle = 0;
    this._t = 0;
  }

  async run() {
    await this._trigger();
    await this._wash();
    await this._play();
    await this._settle();
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    const seaY = this.ctx.world.sea.position.y;

    // 浮きコインは リングのうえを ゆっくり流れる
    for (const f of this.floats) {
      if (!f.alive) continue;
      f.angle += f.drift * dt;
      f.mesh.position.set(
        Math.cos(f.angle) * f.radius,
        seaY + 0.28 + Math.sin(this._t * 2.2 + f.phase) * 0.12,
        Math.sin(f.angle) * f.radius,
      );
      f.mesh.rotation.y += dt * 2.2;
      f.mesh.rotation.z = Math.sin(this._t * 1.8 + f.phase) * 0.25;
    }

    if (!this.floating) return;

    // 4人は 浮き輪に乗って 海面の高さで ゆれる
    const { chars } = this.ctx;
    for (const c of chars) {
      if (this.playing) this._steer(c, dt);
      const a = this.angleOf.get(c) ?? 0;
      const bob = Math.sin(this._t * 2.4 + a * 3) * 0.13;
      c.root.position.set(Math.cos(a) * RING_R, seaY + 0.18 + bob, Math.sin(a) * RING_R);
      c.root.rotation.z = Math.sin(this._t * 1.7 + a * 2) * 0.08;
      if (!this.playing) continue;
      for (const f of this.floats) {
        if (f.alive && c.root.position.distanceTo(f.mesh.position) < GRAB_DIST) this._grab(c, f);
      }
    }
  }

  // ---------- ① きっかけ(約8秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { rig, audio, tweens } = this.ctx;
    rig.setOverview();
    audio.stopBgm();
    audio.rumble();
    audio.tone({ freq: 70, type: 'sine', dur: 2.4, vol: 0.22 });
    this._buildRings();

    this.ctx.banner(
      '<span class="icon">🌊</span>おおきな なみが くるよ!<span class="sub">こわくないよ、うきわに のろう!</span>',
      2600,
    );

    // 白い線が 水平線から 島へ 迫ってくる
    const camFrom = rig.pos.clone();
    const camTo = new THREE.Vector3(0, 26, 56);
    rig.setManual(camFrom.clone(), new THREE.Vector3(0, 0.5, 0));
    let roars = 0;
    await tweens.add(8, (k) => {
      const e = easeInOut(k);
      this.rings.forEach((ring, i) => {
        const delay = i * 0.14;
        const kk = Math.min(1, Math.max(0, (e - delay) / (1 - delay)));
        const r = 78 - (78 - 33) * kk;
        ring.scale.setScalar(r);
        ring.position.y = 0.2 + kk * 2.1;
        ring.material.opacity = 0.25 + kk * 0.55;
      });
      rig.setManual(camFrom.clone().lerp(camTo, e), new THREE.Vector3(0, 0.5 + 2 * e, 0));
      if (e > roars * 0.34) { audio.slideRumble(2.2); roars++; }
    });
  }

  // ---------- ② 変化(約10秒) ----------
  async _wash() {
    this.stage = 'change';
    const { world, chars, rig, ui, fx, audio, tweens, wait } = this.ctx;
    rig.setOverview();
    audio.splash();
    rig.punch(1.2);

    // コインを ぜんぶ 海へ(スターには触らない)
    const washed = washCoins(chars);
    this.before = washed.before;
    let pool = washed.pool;
    this.washedTotal = washed.pool;
    if (pool < 4) pool = MIN_POOL;    // ?event= の単体再生用。うみの おくりもの。
    this.pool = pool;
    chars.forEach((c) => ui.updatePlayer(c));
    ui.showScore(true);
    ui.setScore(0);

    this._buildFloats(pool);
    chars.forEach((c, i) => {
      this._buildRider(c);
      const a = (c.tileIndex / world.tileCount) * TAU;
      this.angleOf.set(c, a);
      this.cpuTimer.set(c, 0.3 + i * 0.2);
      c.setMode('idle');
      audio.boing();
    });
    const player = chars.find((c) => c.isPlayer) || chars[0];
    this.baseAngle = this.angleOf.get(player);
    this.playerAngle = this.baseAngle;
    this._loggedAngle = this.baseAngle;
    this.grabs = chars.map(() => 0);
    dbg.push({
      kind: 'state', id: 'tsunami', from: 'trigger', to: 'change',
      why: `washed=${this.washedTotal} pool=${pool} floats=${this.floats.length}`,
    });

    const seaMat = world.seaMat;
    await tweens.add(10, (k) => {
      const e = easeInOut(k);
      world.sea.position.y = SEA_UP * e;
      world.foamRings.forEach((r) => { r.position.y = 0.06 + SEA_UP * e; });
      seaMat.uniforms.swell.value = 1 + 1.8 * Math.sin(Math.PI * k);
      this.rings.forEach((ring, i) => {
        ring.position.y = 2.3 + e * 1.4;
        ring.material.opacity = Math.max(0, 0.8 - e * 1.1);
        ring.scale.setScalar(33 - i * 0.8 + e * 4);
      });
      if (k > 0.25) this.floating = true;
      if (k > 0.98) this.rings.forEach((r) => { r.visible = false; });
    });
    seaMat.uniforms.swell.value = 1.25;
    audio.splash();
    fx.rainConfetti(new THREE.Vector3(0, 5, 0), 18, 60, 8);
    await wait(300);
  }

  // ---------- ③ 遊び(約25秒) ----------
  async _play() {
    this.stage = 'play';
    const { ui, audio, wait } = this.ctx;
    audio.startBgm('tsunami');
    await this.ctx.banner(
      '<span class="icon">🪙</span>コインが ぷかぷか!<span class="sub">よこに ドラッグして あつめよう</span>',
      2400,
    );

    ui.setMinigameMode(true);
    ui.showTimer(true);
    ui.showTapLayer(true);
    this.playing = true;
    // タップ(pointerdown)と ドラッグ(pointermove)で 同じ処理をするが、
    // ログの why でどちらから来たかが分かるようにする。
    this.ctx.setDragHandler((ndc, px) => this.onDrag(ndc, px, 'drag'));
    this.ctx.setTapHandler((ndc, px) => this.onDrag(ndc, px, 'tap'));
    dbg.push({
      kind: 'state', id: 'tsunami', from: 'change', to: 'play',
      why: `ticks=${PLAY_TICKS} alive=${this.floats.filter((f) => f.alive).length}`,
    });

    for (let s = 0; s < PLAY_TICKS; s++) {
      ui.setTimer(1 - s / PLAY_TICKS);
      if (s === PLAY_TICKS - 12) audio.countTick(3);
      if (s === PLAY_TICKS - 8) audio.countTick(2);
      if (s === PLAY_TICKS - 4) audio.countTick(1);
      if (this.floats.every((f) => !f.alive)) break;
      await wait(250);
    }

    this.playing = false;
    this.ctx.setDragHandler(null);
    this.ctx.setTapHandler(null);
    dbg.push({
      kind: 'state', id: 'tsunami', from: 'play', to: 'settle',
      why: `left=${this.floats.filter((f) => f.alive).length}`,
    });
    ui.showTimer(false);
    ui.showTapLayer(false);
    ui.setMinigameMode(false);
    audio.countTick(0);
  }

  // ---------- ④ 収束(約15秒) ----------
  async _settle() {
    this.stage = 'settle';
    const { world, chars, rig, ui, fx, audio, tweens, wait } = this.ctx;

    // ひろい残しは コインが少ない子ほど 多く配る(総量保存)
    const leftover = this.floats.reduce((s, f) => s + (f.alive ? f.value : 0), 0);
    const snapshot = this.before.map((coins) => ({ coins }));
    const finals = tideRedistribute(leftover, this.grabs, snapshot);

    // 結果反映は この1件だけ。総量保存(pool = ひろった合計 + ひろい残し)と
    // 最下位傾斜(before が少ない子ほど 再配分が多い)を ここだけで数えられるようにする。
    dbg.push({
      kind: 'result', id: 'tsunami', why: 'tsunami-redistribute',
      from: `pool=${this.pool}`, to: `leftover=${leftover}`,
      chars: chars.map((c, i) => ({
        id: c.def.id,
        before: this.before[i],
        grabbed: this.grabs[i],
        share: finals[i] - this.grabs[i],
        final: finals[i],
      })),
    });

    // 波が ひいて、みんな 島へ もどる。
    // ここから root.position の毎フレーム上書きを止め、トゥイーンに ゆずる。
    this.floating = false;
    const seaMat = world.seaMat;
    const froms = new Map(chars.map((c) => [c, c.root.position.clone()]));
    audio.slideRumble(3.0);
    await tweens.add(5, (k) => {
      const e = easeOut(k);
      world.sea.position.y = SEA_UP * (1 - e);
      world.foamRings.forEach((r) => { r.position.y = 0.06 + SEA_UP * (1 - e); });
      seaMat.uniforms.swell.value = 1.25 - 0.25 * e;
      for (const f of this.floats) {
        if (f.alive) f.mesh.position.y = world.sea.position.y + 0.28;
      }
      for (const c of chars) {
        const to = world.tileAnchor(c.tileIndex).add(this.ctx.charOffset(c));
        c.root.position.lerpVectors(froms.get(c), to, e);
      }
    });
    world.sea.position.y = 0;
    world.foamRings.forEach((r, i) => { r.position.y = 0.06 + i * 0.02; });
    seaMat.uniforms.swell.value = 1;
    for (const c of chars) {
      c.root.rotation.z = 0;
      c.root.position.copy(world.tileAnchor(c.tileIndex)).add(this.ctx.charOffset(c));
      c.land();
      this._removeRider(c);
    }
    this.floats.forEach((f) => { f.mesh.visible = false; f.alive = false; });
    audio.splash();

    // いちばん コインが少なかった子の まえに コインの山が どーん
    const lastIndex = snapshot.reduce(
      (best, s, i) => (s.coins < snapshot[best].coins ? i : best), 0,
    );
    const lastChar = chars[lastIndex];
    rig.setFollow(lastChar);
    await wait(900);

    chars.forEach((c, i) => {
      c.coins = finals[i];
      c.setMode('cheer');
      ui.updatePlayer(c);
      fx.coinBurst(c.root.position.clone().add(new THREE.Vector3(0, 0.9, 0)), 6);
    });
    for (let i = 0; i < 4; i++) audio.coin(i);
    audio.fanfare();
    fx.rainConfetti(lastChar.root.position.clone().add(new THREE.Vector3(0, 5, 0)), 6, 70, 7);

    const lines = chars.map((c, i) => `${c.def.emoji}🪙${finals[i]}`).join('  ');
    await this.ctx.banner(
      `<span class="icon">🐚</span>うみの おくりもの!<span class="sub">${lines}</span>`,
      3000,
    );
    chars.forEach((c) => c.setMode('idle'));
    ui.showScore(false);
    rig.setOverview();
    await wait(300);
  }

  // ---------- 入力(よこドラッグ。タップも同じあつかい) ----------
  onDrag(ndc, px, src = 'drag') {
    if (!this.playing) {
      dbg.push({ kind: 'input-reject', id: 'tsunami', why: `not-playing:${src}` });
      return;
    }
    // 絶対値マッピング。指を置きなおしても そこへ すぐ動く(4歳児は指を置きなおす)。
    const want = this.baseAngle + ndc.x * 0.9;
    if (want === this.playerAngle) {
      // 同じ場所を もう一度さわっても ねらい先は変わらない
      dbg.push({ kind: 'input-reject', id: 'tsunami', why: `same-angle:${src}` });
      return;
    }
    this.playerAngle = want;
    // pointerdown は1回きりなので毎回、pointermove は動いた量が しきい値を越えたときだけ積む。
    // (受理そのものは しきい値に関係なく 上の1行で すでに済んでいる)
    if (src === 'tap' || Math.abs(want - this._loggedAngle) >= LOG_ANGLE_STEP) {
      this._loggedAngle = want;
      dbg.push({
        kind: 'input-accept', id: 'tsunami', to: `angle=${want.toFixed(3)}`, why: src,
      });
    }
  }

  // ---------- 中身 ----------
  _steer(char, dt) {
    const cur = this.angleOf.get(char) ?? 0;
    let want;
    if (char.isPlayer) {
      want = this.playerAngle;
    } else {
      let t = (this.cpuTimer.get(char) || 0) - dt;
      if (t <= 0) {
        t = 0.9 + Math.random() * 0.7;      // 0.9〜1.6秒ごとに いちばん近いコインへ
        let best = null, bestD = Infinity;
        for (const f of this.floats) {
          if (!f.alive) continue;
          const d = Math.abs(this._wrapPi(f.angle - cur));
          if (d < bestD) { bestD = d; best = f; }
        }
        this.cpuTarget.set(char, best ? best.angle : cur);
      }
      this.cpuTimer.set(char, t);
      want = this.cpuTarget.get(char) ?? cur;
    }
    const d = this._wrapPi(want - cur);
    const speed = char.isPlayer ? 5.2 : 0.95;    // プレイヤーのほうが ずっと速い
    const step = Math.max(-speed * dt, Math.min(speed * dt, d));
    this.angleOf.set(char, cur + step);
    char.faceTowards(new THREE.Vector3(
      Math.cos(cur + step * 6) * RING_R, char.root.position.y, Math.sin(cur + step * 6) * RING_R,
    ));
  }

  _wrapPi(a) {
    let d = a;
    while (d > Math.PI) d -= TAU;
    while (d < -Math.PI) d += TAU;
    return d;
  }

  _grab(char, float) {
    const { chars, ui, fx, audio } = this.ctx;
    float.alive = false;
    float.mesh.visible = false;
    const i = chars.indexOf(char);
    this.grabs[i] += float.value;
    char.coins += float.value;
    ui.updatePlayer(char);
    audio.coin(0);
    fx.sparkleBurst(float.mesh.position, 5, 0xffe066);
    const player = chars.find((c) => c.isPlayer) || chars[0];
    if (char === player) ui.setScore(this.grabs[chars.indexOf(player)]);
  }

  // ---------- 小道具 ----------

  // 迫ってくる波の白いリング3枚。
  // world.foamRings は world.update が scale と opacity を毎フレーム上書きするので流用できない。
  _buildRings() {
    const { scene } = this.ctx;
    this.rings = [];
    for (let i = 0; i < 3; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff, transparent: true, opacity: 0.25, depthWrite: false,
      });
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1, 0.055, 8, 72), mat);
      ring.rotation.x = -Math.PI / 2;
      ring.scale.setScalar(78);
      ring.position.y = 0.2;
      scene.add(ring);
      this.rings.push(this._own(ring));
    }
  }

  // コインの浮きオブジェ。合計が total にぴったり一致するように分ける。
  _buildFloats(total) {
    const { scene } = this.ctx;
    const n = Math.min(FLOAT_MAX, Math.max(1, total));
    const base = Math.floor(total / n);
    const extra = total % n;
    const group = new THREE.Group();
    this.floats = [];

    for (let i = 0; i < n; i++) {
      const value = base + (i < extra ? 1 : 0);
      if (value <= 0) continue;
      const big = value >= 3;
      const mat = toonMatUnique(0xffd23e, { emissive: 0xffaa00, emissiveIntensity: 0.35 });
      const mesh = new THREE.Mesh(
        new THREE.CylinderGeometry(big ? 0.46 : 0.34, big ? 0.46 : 0.34, 0.12, 18),
        mat,
      );
      mesh.rotation.x = Math.PI / 2;
      const angle = (i / n) * TAU + Math.random() * 0.12;
      const radius = RING_R + (Math.random() - 0.5) * 1.6;
      mesh.position.set(Math.cos(angle) * radius, SEA_UP + 0.28, Math.sin(angle) * radius);
      group.add(mesh);
      this.floats.push({
        mesh, value, angle, radius,
        drift: 0.3 + Math.random() * 0.12,
        phase: Math.random() * TAU, alive: true,
      });
    }
    scene.add(group);
    this._own(group);
  }

  // 浮き輪。キャラ自身の色で、char.root の子にする(キャラといっしょに動く)。
  _buildRider(char) {
    const mat = toonMatUnique(char.def.color, { emissive: char.def.accent, emissiveIntensity: 0.15 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.18, 10, 22), mat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.32;
    char.root.add(ring);
    this.rider.set(char, this._own(ring));
  }

  _removeRider(char) {
    const ring = this.rider.get(char);
    if (ring) ring.parent?.remove(ring);
  }

  dispose() {
    const { world, chars, ui } = this.ctx;
    // 途中で止まっても 海面・キャラ・UI は かならず もどす
    world.sea.position.y = 0;
    world.foamRings.forEach((r, i) => { r.position.y = 0.06 + i * 0.02; });
    if (world.seaMat?.uniforms?.swell) world.seaMat.uniforms.swell.value = 1;
    this.floating = false;
    this.playing = false;
    for (const c of chars) {
      c.root.rotation.z = 0;
      this._removeRider(c);
    }
    ui.showTimer(false);
    ui.showTapLayer(false);
    ui.showScore(false);
    ui.setMinigameMode(false);
    this.rings.length = 0;
    this.floats.length = 0;
    this.rider.clear();
    this.angleOf.clear();
    this.cpuTimer.clear();
    this.cpuTarget.clear();
    super.dispose();
  }
}
