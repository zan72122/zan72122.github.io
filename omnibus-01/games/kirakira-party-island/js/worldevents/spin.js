// 🎠 ぐるぐる しままわし(W-07)
//
// 島だけがレコードのようにぐるーんと回る。キャラは scene 直下のワールド座標にいるので
// (設計書 2.1 の結論)、rideIsland() を呼ばないだけで自動的に「取り残される」。
// 止まったら world.rotateBoard(offset) でマスのタイプだけを となりへ移し、
// 足元のマスが変わったことを4人ぶん順番に見せる。
//
// 島の高さ関数には いっさい触らない。いちばん安全なイベントである。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMatUnique } from '../gfx.js';
import { chooseSpinOffset } from '../rules.js';
import { buildTileLayout } from '../config.js';
import { dbg } from '../debug.js';
import { rand } from '../rng.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;

// マスの種類 → 頭のうえに出す絵文字。文字が読めなくても何が来たか分かるように。
const TILE_EMOJI = {
  COIN: '🔵', HEART: '💗', RAINBOW: '🌈', EVENT: '🎆', STAR: '⭐', STORM: '🌩️',
  BOMB: '💣', HOLE: '🕳️', TURTLE: '🐢', ROPEWAY: '🚠', COASTER: '🎢',
};

// その場で完結するマスだけ _tileEvent を発動する。
// のりもの・おとしあな・にじワープはキャラを動かしてしまい、
// 「自分は動いていないのにマスが変わった」という この演出の主張をこわす。
const SETTLE_HERE = new Set(['COIN', 'HEART', 'EVENT', 'STAR', 'STORM', 'BOMB']);

export class SpinEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.offset = 0;
    this.gear = null;
    this.gearMat = null;
    this.arrowRing = null;
    this._t = 0;
  }

  async run() {
    await this._trigger();
    await this._spin();
    await this._settle();
  }

  // 毎フレーム。歯車のひかりと矢印リングのゆらぎだけ。
  update(dt) {
    this._t += dt;
    if (this.gearMat) this.gearMat.emissiveIntensity = 0.35 + Math.sin(this._t * 6) * 0.25;
    if (this.arrowRing) this.arrowRing.position.y = 0.9 + Math.sin(this._t * 2.4) * 0.12;
  }

  // ---------- ① きっかけ(約5秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { world, chars, rig, audio, wait } = this.ctx;
    rig.setOverview();

    // 中央タワーの土台が歯車になってひかる
    this._buildGear();
    this._buildArrowRing();

    audio.ratchet(0);
    audio.boing();
    chars.forEach((c) => { c.land(); c.setMode('hop'); });

    await this.ctx.banner(
      '<span class="icon">🎠</span>ぐるぐる しままわし!<span class="sub">しまが まわるよ!</span>',
      1900,
    );
    // 歯車がカチッ カチッと3回 予備動作する
    for (let i = 0; i < 3; i++) {
      audio.ratchet(i);
      world.islandGroup.rotation.y = -0.05 * ((i % 2) ? -1 : 1);
      await wait(260);
    }
    world.islandGroup.rotation.y = 0;
    await wait(300);
  }

  // ---------- ② 変化(約9秒) ----------
  async _spin() {
    this.stage = 'change';
    const { world, chars, rig, audio, tweens } = this.ctx;
    const count = world.tileCount;
    const layout = buildTileLayout(count);
    // ?seed= があるときだけ固定列になる rand()(js/rng.js)。種が無ければ Math.random と同一。
    this.offset = chooseSpinOffset(layout, chars, world.starTileIndex, rand);
    dbg.push({
      kind: 'state', id: 'spin', from: 'trigger', to: 'change',
      why: `offset=${this.offset} star=${world.starTileIndex} count=${count}`,
    });

    // three.js の Y 回転は 点の極角 atan2(z,x) を -φ 動かす。
    // rotateBoard は「マス i に マス i-offset のタイプが来る」なので、符号はマイナスである。
    const turns = 2;
    const total = -(turns * TAU + (this.offset * TAU) / count);

    // カチッ音は 6マスごと(1周あたり8回)。ease-out なので はじめは密、おわりは まばら。
    const clickStep = (TAU / 8);
    let clicks = 0;
    let lastClick = 0;

    await tweens.add(9, (k) => {
      const e = 1 - Math.pow(1 - k, 3);      // ルーレットの減速
      const angle = total * e;
      world.islandGroup.rotation.y = angle;
      const passed = Math.floor(Math.abs(angle) / clickStep);
      if (passed > lastClick) {
        lastClick = passed;
        audio.ratchet(clicks++);
      }
      // 島が回っても キャラは ついていかない(rideIsland は呼ばない)
    });

    // 止まりきらずに カクンと はずむ
    audio.boing();
    rig.punch(0.45);
    await tweens.add(0.7, (k) => {
      const wob = Math.sin(k * Math.PI * 3) * (1 - k) * 0.06;
      world.islandGroup.rotation.y = total + wob;
    });
    world.islandGroup.rotation.y = total;
  }

  // ---------- ③④ 遊び(0秒)と 収束(約13秒) ----------
  async _settle() {
    this.stage = 'play';
    const { world, chars, rig, ui, fx, audio, wait } = this.ctx;

    // 回る前の「足もとのマスの種類」。回ったあとと突きあわせて 1件だけ記録する。
    const before = chars.map((c) => ({
      id: c.def.id, tileIndex: c.tileIndex, coins: c.coins, was: world.tiles[c.tileIndex].type,
    }));

    // タイプとアイコンだけを となりへ移す。見た目の回転はここで 0 に戻る。
    world.rotateBoard(this.offset);

    // 結果反映その1。キャラは1マスも動いていない(spin は tileIndex を触らない)。
    dbg.push({
      kind: 'result', id: 'spin', why: 'spin-rotate',
      from: `offset=${this.offset}`, to: `star=${world.starTileIndex}`,
      chars: before.map((b) => ({
        id: b.id, tileIndex: b.tileIndex, was: b.was, now: world.tiles[b.tileIndex].type,
      })),
    });
    audio.sparkle();
    fx.burstConfetti(new THREE.Vector3(0, 5, 0), 40, 6, 6);
    await this.ctx.banner('<span class="icon">🎊</span>とまった!<span class="sub">あしもとの マスが かわったよ</span>', 1600);

    // 歯車と矢印リングを消してから、4人ぶん順に見せる
    this._hideProps();

    for (const c of chars) {
      const tile = world.tiles[c.tileIndex];
      rig.setFollow(c);
      c.setMode('cheer');
      this._popEmoji(c, TILE_EMOJI[tile.type] || '✨');
      audio.chime(0);
      fx.sparkleBurst(c.root.position.clone().add(new THREE.Vector3(0, 1.6, 0)), 6, 0xfff6a8);
      await wait(800);
      c.setMode('idle');

      if (SETTLE_HERE.has(tile.type)) {
        await this.ctx.runTileEvent(c);
      } else {
        // のりもの・おとしあな・にじワープは動かさず、おみやげだけ渡す
        c.coins += 3;
        for (let i = 0; i < 3; i++) audio.coin(i);
        fx.coinBurst(c.root.position.clone().add(new THREE.Vector3(0, 0.8, 0)), 5);
        ui.updatePlayer(c);
        c.setMode('cheer');
        await wait(750);
        c.setMode('idle');
      }
    }

    this.stage = 'settle';
    // 結果反映その2。足もとのマスの ごほうび(runTileEvent か おみやげ3枚)が すんだところ。
    dbg.push({
      kind: 'result', id: 'spin', why: 'spin-settle',
      from: `offset=${this.offset}`, to: `star=${world.starTileIndex}`,
      chars: chars.map((c, i) => ({
        id: c.def.id, tileIndex: c.tileIndex, gained: c.coins - before[i].coins, stars: c.stars,
      })),
    });
    rig.setOverview();
    audio.yay();
    await this.ctx.banner('<span class="icon">🎠</span>また あそぼうね!', 1200);
  }

  // ---------- 小道具 ----------

  // 中央タワーの足もとの歯車。色と emissive を動かすので toonMatUnique を使う。
  _buildGear() {
    const { world } = this.ctx;
    const g = new THREE.Group();
    this.gearMat = toonMatUnique(0xffd23e, { emissive: 0xffaa00, emissiveIntensity: 0.4 });
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.4, 0.22, 26), this.gearMat);
    g.add(disc);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * TAU;
      const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.24, 0.9), this.gearMat);
      tooth.position.set(Math.cos(a) * 3.7, 0, Math.sin(a) * 3.7);
      tooth.rotation.y = -a;
      g.add(tooth);
    }
    g.position.set(0, world.heightFn(0, 0) + 0.12, 0);
    world.islandGroup.add(g);
    this.gear = this._own(g);
  }

  // 外周の白い矢印リング。「こっちに まわるよ」を絵で伝える。
  _buildArrowRing() {
    const { world } = this.ctx;
    const g = new THREE.Group();
    const mat = toonMatUnique(0xffffff, { emissive: 0xfff2d8, emissiveIntensity: 0.3 });
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * TAU;
      const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.42, 1.1, 4), mat);
      arrow.position.set(Math.cos(a) * 20.5, 0, Math.sin(a) * 20.5);
      arrow.rotation.set(Math.PI / 2, 0, -a + Math.PI / 2);
      g.add(arrow);
    }
    g.position.y = 0.9;
    world.islandGroup.add(g);
    this.arrowRing = this._own(g);
  }

  _hideProps() {
    if (this.gear) this.gear.visible = false;
    if (this.arrowRing) this.arrowRing.visible = false;
  }

  // キャラの頭のうえ(ワールド座標)を画面座標へ写して、絵文字をポンと出す。
  _popEmoji(char, emoji) {
    const { rig, ui } = this.ctx;
    const p = char.root.position.clone().add(new THREE.Vector3(0, 2.6, 0));
    p.project(rig.camera);
    const x = (p.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-p.y * 0.5 + 0.5) * window.innerHeight;
    ui.emojiBurst(x, y, emoji);
  }

  dispose() {
    // 見た目の回転は rotateBoard が 0 に戻すが、途中で失敗しても単位変換へ戻す
    this.ctx.world.islandGroup.rotation.y = 0;
    super.dispose();
    this.gearMat?.dispose?.();
    this.gear = null;
    this.arrowRing = null;
    this.gearMat = null;
  }
}
