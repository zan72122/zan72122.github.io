// ❄️ しまが こおった(W-03)
//
// 空から大きな雪の結晶がひとつ落ち、着地点から氷がピキピキと島じゅうへ ひろがる。
// 丘とうねりと火口が平らになって(TERRAIN.flatten)、島ぜんたいが スケートリンクになる。
// そのラウンドのあいだ、キャラは出た目のぶん進んだあと 0〜3マス ツーッと すべる
// (board._moveCharacter の氷滑走ブロック + rules.iceSlide)。
//
// このイベントは run() が「moveMods を立てて即 resolve」する契約なので、
// 解氷(8秒)は ctx.onRoundEnd に置いて board のラウンド末に走らせる(設計書 4.4 / 8章 #2)。
//
// islandGroup の transform には いっさい触らない。動かすのは
// TERRAIN.flatten(頂点)と 頂点カラー(_paintIsland('ice'))と 天気(frozen)だけである。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMatUnique } from '../gfx.js';
import { CONFIG } from '../config.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;
const PAINT_STEPS = 50;      // 200ms × 50 = 10秒。_paintIsland は毎フレーム呼ばない
const THAW_STEPS = 40;       // 200ms × 40 = 8秒

export class FreezeEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.flake = null;        // 空から落ちてくる雪の結晶
    this.flakeMat = null;
    this.glints = null;       // リンクの上で きらめく氷のかけら
    this.glintMat = null;
    this.frozen = false;
    this._seen = new Map();   // char → { from, to, steps } ラウンド中の移動の記録
    this._t = 0;
  }

  async run() {
    await this._trigger();     // ① きっかけ 6秒
    await this._freeze();      // ② 変化 10秒
    // ③ 遊び:そのラウンド ぜんぶ。moveMods を立てて即 resolve する。
    this.stage = 'play';
    this.ctx.moveMods.iceSlide = true;
    // ラウンド中の移動を4人ぶん数えはじめる(update が1フレーム1回だけ見る)
    this.ctx.chars.forEach((c) => this._seen.set(c, { from: c.tileIndex, to: c.tileIndex, steps: 0 }));
    // ④ 収束:解氷は board のラウンド末(ミニゲームの直前)に任せる。
    this.ctx.onRoundEnd = () => this._thaw();
    dbg.push({
      kind: 'state', id: 'freeze', from: 'change', to: 'play',
      why: `iceSlide=${this.ctx.moveMods.iceSlide} maxSlide=${CONFIG.ICE_SLIDE_MAX}`
        + ` onRoundEnd=set flatten=${Number(this.ctx.world.islandWarp.flatten).toFixed(3)}`,
    });
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    // ラウンド中の移動を1フレーム1回だけ拾う。氷の滑走ぶんも ここに入る
    // (board._moveCharacter が tileIndex を進めるたび +1)。ログは _thaw で1件にまとめる。
    if (this._seen.size) {
      for (const [c, m] of this._seen) {
        if (c.tileIndex === m.to) continue;
        m.steps += 1;
        m.to = c.tileIndex;
      }
    }
    if (this.flake) {
      this.flake.rotation.y += dt * 1.1;
      this.flake.rotation.z = Math.sin(this._t * 1.4) * 0.12;
    }
    if (this.glintMat) {
      this.glintMat.emissiveIntensity = 0.3 + Math.sin(this._t * 3.2) * 0.25;
    }
    if (this.glints) this.glints.rotation.y += dt * 0.12;
  }

  // ---------- ① きっかけ(約6秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { world, rig, audio, tweens, wait } = this.ctx;
    audio.stopBgm();

    // 着地点は島の まんなか。カメラをそこへ向けてから 結晶を落とす。
    const ground = new THREE.Vector3(0, world.heightFn(0, 0) + 0.6, 0);
    rig.setLookAt(ground);
    this._buildFlake(ground);

    audio.tone({ freq: 1400, type: 'sine', dur: 1.1, vol: 0.2, slide: -900 });
    this.ctx.banner(
      '<span class="icon">❄️</span>しまが こおった!<span class="sub">つるつる すべるよ</span>',
      2600,
    );

    const from = ground.clone().setY(ground.y + 26);
    this.flake.position.copy(from);
    await tweens.add(2.5, (k) => {
      const e = 1 - Math.pow(1 - k, 2.2);      // ふわっと落ちる
      this.flake.position.lerpVectors(from, ground, e);
      this.flake.scale.setScalar(0.5 + e * 0.9);
    });

    // ピキピキ と氷がひろがる音を8回
    this.ctx.punch(0.85);
    this.ctx.fx.sparkleBurst(ground, 18, 0xdff2ff, 1.8);
    for (let i = 0; i < 8; i++) {
      audio.crack(i);
      await wait(150);
    }
    await wait(900);
  }

  // ---------- ② 変化(約10秒) ----------
  async _freeze() {
    this.stage = 'change';
    const { world, chars, rides, rig, audio, tweens, wait } = this.ctx;
    rig.setOverview();
    audio.slip();
    audio.startBgm('board:ice');

    // 入り江が平らになると カメが陸へ乗りあげるので、こおっているあいだは かくす
    if (rides?.turtle) rides.turtle.visible = false;

    this._buildGlints();

    // 頂点カラーは 200ms に1回だけ(17,689頂点の計算を毎フレームやらない・設計書 2.3)
    const paint = (async () => {
      for (let i = 0; i < PAINT_STEPS; i++) {
        world._paintIsland('ice', { amount: (i + 1) / PAINT_STEPS });
        if (i % 10 === 0) audio.crack(i / 10);
        await wait(200);
      }
    })();

    // 丘・うねり・火口を平らにして スケートリンクにする。
    // rides の refit は呼ばない ── ロープウェイ塔とコースターは宙に浮いたままで、
    // 4歳児には「氷のうえの橋」に見える(設計書 4.4 のリスク欄)。
    const reshape = world.reshapeIsland({
      to: { flatten: CONFIG.ICE_FLATTEN },
      seconds: 10,
      tweens,
      onFrame: () => {
        world.refreshAnchors({ tiles: true });
        this.ctx.rideIsland();
      },
    });

    await Promise.all([reshape, paint]);
    world._paintIsland('ice');
    world.refreshAnchors({ tiles: true, decor: true });
    this.ctx.rideIsland();
    this.frozen = true;

    chars.forEach((c) => { c.land(); c.setMode('idle'); });
    audio.sparkle();
    await this.ctx.banner(
      '<span class="icon">⛸️</span>スケートリンクに なった!<span class="sub">とまれないよ〜</span>',
      2000,
    );
  }

  // ---------- ④ 収束(約8秒。board のラウンド末から呼ばれる) ----------
  async _thaw() {
    this.stage = 'settle';
    const { world, chars, rides, rig, audio, tweens, wait, fx } = this.ctx;
    this.ctx.moveMods.iceSlide = false;

    // 結果反映は この1件だけ。ラウンド中の4人ぶんの移動(出た目 + 氷の滑走)と、
    // moveMods を たしかに もどしたことを ここで数えられるようにする。
    dbg.push({
      kind: 'result', id: 'freeze', why: 'freeze-thaw',
      from: `flatten=${Number(world.islandWarp.flatten).toFixed(3)}`,
      to: `iceSlide=${this.ctx.moveMods.iceSlide}`
        + ` mods=${Object.values(this.ctx.moveMods).filter(Boolean).length}`,
      chars: chars.map((c) => {
        const m = this._seen.get(c) || { from: c.tileIndex, to: c.tileIndex, steps: 0 };
        return { id: c.def.id, from: m.from, to: c.tileIndex, steps: m.steps, coins: c.coins };
      }),
    });
    this._seen.clear();
    rig.setOverview();
    audio.sparkle();
    this.ctx.banner(
      '<span class="icon">🌈</span>おひさまが もどってきた!<span class="sub">こおりが とけるよ</span>',
      2400,
    );

    const paint = (async () => {
      for (let i = 0; i < THAW_STEPS; i++) {
        world._paintIsland('ice', { amount: 1 - (i + 1) / THAW_STEPS });
        await wait(200);
      }
    })();

    // 虹を いっしゅん 大きくする。world.update が毎フレーム天気の目標値へ lerp するので、
    // こちらも毎フレーム上書きして勝つ(main.js は world.update → board.update の順)。
    const reshape = world.reshapeIsland({
      to: { flatten: 0 },
      seconds: 8,
      tweens,
      onFrame: (e) => {
        world.refreshAnchors({ tiles: true });
        this.ctx.rideIsland();
        const s = 1 + Math.sin(Math.PI * e) * 0.6;
        world.rainbowGroup.scale.setScalar(s);
      },
    });

    await Promise.all([reshape, paint]);
    world._paintIsland('default');
    world.refreshAnchors({ tiles: true, decor: true });
    this.ctx.rideIsland();
    this.frozen = false;
    if (rides?.turtle) rides.turtle.visible = true;

    chars.forEach((c) => { c.land(); c.setMode('cheer'); });
    fx.sparkleBurst(new THREE.Vector3(0, 3, 0), 20, 0xdff2ff, 1.8);
    audio.yay();
    await this.ctx.banner('<span class="icon">💧</span>こおりが とけた!', 1600);
    chars.forEach((c) => c.setMode('idle'));
    dbg.push({
      kind: 'state', id: 'freeze', from: 'settle', to: 'done',
      why: `flatten=${Number(world.islandWarp.flatten).toFixed(3)}`
        + ` iceSlide=${this.ctx.moveMods.iceSlide} weather=${world.weatherName}`,
    });
  }

  // ---------- 小道具 ----------

  // 空から落ちてくる 6本うでの雪の結晶。色を動かすので toonMatUnique を使う。
  _buildFlake(ground) {
    const { scene } = this.ctx;
    const g = new THREE.Group();
    this.flakeMat = toonMatUnique(0xffffff, { emissive: 0xbfe8ff, emissiveIntensity: 0.6 });
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 10), this.flakeMat);
    g.add(core);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU;
      const arm = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.18, 0.34), this.flakeMat);
      arm.position.set(Math.cos(a) * 1.3, 0, Math.sin(a) * 1.3);
      arm.rotation.y = -a;
      g.add(arm);
      const tip = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.16, 0.26), this.flakeMat);
      tip.position.set(Math.cos(a) * 2.2, 0, Math.sin(a) * 2.2);
      tip.rotation.set(0, -a, 0.5);
      g.add(tip);
    }
    g.rotation.x = -Math.PI / 2 + 0.35;
    g.position.copy(ground);
    scene.add(g);
    this.flake = this._own(g);
  }

  // リンクのうえに ちらばる 氷のかけら。島グループの子にして いっしょに動かす。
  _buildGlints() {
    const { world } = this.ctx;
    const g = new THREE.Group();
    this.glintMat = toonMatUnique(0xeaf6ff, { emissive: 0x9fd8ff, emissiveIntensity: 0.35 });
    for (let i = 0; i < 26; i++) {
      const a = Math.random() * TAU;
      const r = 4 + Math.sqrt(Math.random()) * 17;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const shard = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.9, 5), this.glintMat);
      shard.position.set(x, world.heightFn(x, z) + 0.4, z);
      shard.rotation.set(Math.random() * 0.4 - 0.2, Math.random() * TAU, Math.random() * 0.4 - 0.2);
      g.add(shard);
    }
    world.islandGroup.add(g);
    this.glints = this._own(g);
  }

  dispose() {
    const { world, rides } = this.ctx;
    // 途中で止まっても、島の形と色と のりものは かならず もどす
    this.ctx.moveMods.iceSlide = false;
    // seconds: 0 の reshapeIsland は await 不要で同期に終わる(トゥイーンへ入らない)。
    // 解氷ずみでも もう一度 通すが、flatten は すでに 0 なので見た目は変わらない。
    world.reshapeIsland({ to: { flatten: 0 }, seconds: 0 });
    world.refreshAnchors({ tiles: true, decor: true });
    this.ctx.rideIsland();
    world._paintIsland('default');
    if (rides?.turtle) rides.turtle.visible = true;
    this.frozen = false;
    super.dispose();
    this.flakeMat?.dispose?.();
    this.glintMat?.dispose?.();
    this.flake = null;
    this.glints = null;
    this.flakeMat = null;
    this.glintMat = null;
  }
}
