// 🏝️ そらとぶ しま(W-01)
//
// 4色の気球が 島を根こそぎ 吊りあげる。islandGroup.position.y を 0 → 46 へ動かすだけの
// **剛体移動** なので、頂点はひとつも触らない(設計書 2.1 / 4.7)。
// 海・波リング・遠景の気球は scene 直下なので置き去りになって小さくなる ── これが狙いである。
// 高いところを こわがらせないよう、遠景の雲10個を +30 だけ持ちあげて画面の下半分に敷きなおす。
//
// 雲の上には 12マスの臨時ボード「そらのわ」が出る。既存の Tile は使わず、
// 専用の軽いメッシュにする(TILE_TYPES を増やすと buildTileLayout と chooseStarTile に
// 波及するため。設計書 4.7 の方針)。
//
// 手番は **最下位から** 回す。くもリングは4人で共有する1本なので、
// 「最下位ほど ほし雲が近い」は 順番で作るのがいちばん公平である(ExecPlan Decision Log)。
//
// キャラは scene 直下のままなので、島が動いているあいだは毎フレーム ctx.rideIsland() で
// 貼りなおす。くもに乗っているあいだは くもの位置へ貼りなおす。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMat, toonMatUnique, starGeometry } from '../gfx.js';
import { CONFIG } from '../config.js';
import { buildCloudRing, skyReturnBonus } from '../rules.js';
import { easeInOut } from '../tween.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;
const BALLOON_COLORS = [0xff5c8d, 0xffc93e, 0x4da3ff, 0x43c04e];
const CLOUD_ICONS = {
  fluffy: { emoji: '☁️', color: 0xffffff, glow: 0xdfefff },
  hole: { emoji: '🕳️', color: 0xe8eef6, glow: 0x8f9bb5 },
  star: { emoji: '🌟', color: 0xfff6c8, glow: 0xffcf4d },
  wind: { emoji: '💨', color: 0xe0f6ff, glow: 0x7fd8ff },
};

export class SkyEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.balloons = [];         // { group, mat, anchor }
    this.ropes = [];
    this.ringTypes = [];        // buildCloudRing の戻り値
    this.clouds = [];           // { group, mat, type, local }
    this.advance = new Map();   // char → のりばから進んだ くもの数
    this.onRing = new Set();    // いま くもの上に居る子
    this.cloudBaseY = [];       // 遠景の雲の もとの高さ
    this.lift = 0;              // いまの島の高さ(dispose 用)
    this._t = 0;
    this._tapHandler = null;
  }

  async run() {
    await this._trigger();   // ① きっかけ 8秒
    await this._lift();      // ② 変化 12秒
    await this._play();      // ③ 遊び 34秒
    await this._land();      // ④ 収束 14秒
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    // 気球は ゆらゆら、くもは ふわふわ(どちらも島グループの子なので島と一緒に上がる)
    this.balloons.forEach((b, i) => {
      b.group.rotation.z = Math.sin(this._t * 0.9 + i) * 0.05;
      b.group.position.y = b.anchor.y + Math.sin(this._t * 0.8 + i * 1.3) * 0.5;
    });
    this.clouds.forEach((c, i) => {
      c.group.position.y = c.local.y + Math.sin(this._t * 1.1 + i * 0.7) * 0.12;
      if (c.type === 'star') c.group.rotation.y += dt * 0.9;
    });
  }

  // ---------- ① きっかけ(約8秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { world, rig, audio, tweens, wait } = this.ctx;
    audio.stopBgm();
    rig.setOverview();
    audio.rumble();
    audio.whoosh();
    this.ctx.banner(
      '<span class="icon">🏝️</span>しまが うかぶ!<span class="sub">ききゅうが むかえに きたよ</span>',
      2800,
    );
    await wait(1200);

    // 4色の気球を 海の四方から 島の上へ おろす
    this._buildBalloons();
    const froms = this.balloons.map((b) => b.anchor.clone().setY(b.anchor.y + 42));
    this.balloons.forEach((b, i) => b.group.position.copy(froms[i]));
    this.ctx.punch(1.2);
    await tweens.add(3.4, (k) => {
      const e = easeInOut(k);
      this.balloons.forEach((b, i) => {
        b.group.position.lerpVectors(froms[i], b.anchor, e);
      });
      this._updateRopes();
    });
    audio.whoosh();
    world.rides?.refit?.();
    await wait(1200);
  }

  // ---------- ② 変化(約12秒) ----------
  async _lift() {
    this.stage = 'change';
    const { world, rig, audio, tweens, wait } = this.ctx;
    audio.startBgm('sky');
    audio.rise(9);

    // 遠景の雲を 画面の下半分へ。world.update は雲の x/z しか触らないので消されない。
    this.cloudBaseY = world.clouds.map((c) => c.position.y);
    const raise = CONFIG.SKY_CLOUD_RAISE;
    const lift = CONFIG.SKY_LIFT;

    await tweens.add(12, (k) => {
      const e = easeInOut(k);
      this.lift = lift * e;
      world.islandGroup.position.y = this.lift;
      world.clouds.forEach((c, i) => { c.position.y = this.cloudBaseY[i] + raise * e; });
      // カメラは島と一緒に上がりながら、すこし下を向く(海が小さくなるのが見える)
      rig.setManual(
        new THREE.Vector3(0, this.lift + 26, 44 - e * 8),
        new THREE.Vector3(0, this.lift - 8 * e, 0),
      );
      this.ctx.rideIsland();
      this._updateRopes();
    });

    this.ctx.punch(1.15);
    audio.sparkle();
    await this.ctx.banner(
      '<span class="icon">☁️</span>くもの うえに ついた!<span class="sub">そらのわで あそぼう</span>',
      2200,
    );
    await wait(200);
  }

  // ---------- ③ 遊び(約34秒) ----------
  async _play() {
    this.stage = 'play';
    const { chars, rig } = this.ctx;
    this._buildCloudRing();

    // 手番は 最下位から。ほし雲は のりばの すぐ先に1枚しかないので、
    // いちばん うしろの子が いちばん先に えらべる。
    const order = chars
      .map((c, i) => ({ c, i, stars: c.stars, coins: c.coins }))
      .sort((a, b) => (a.stars - b.stars) || (a.coins - b.coins) || (a.i - b.i))
      .map((e) => e.c);
    dbg.push({
      kind: 'state', id: 'sky', from: 'change', to: 'play',
      why: `lift=${CONFIG.SKY_LIFT} ring=${this.ringTypes.join(',')}`
        + ` order=${order.map((c) => c.def.id).join('>')}`,
    });

    for (const char of order) {
      if (!this.ctx.chars.includes(char)) continue;
      rig.setFollow(char);
      await this._boardRing(char);
      const n = await this._rollSmallDice(char);
      await this._walkRing(char, n);
      await this._cloudEffect(char);
    }
    rig.setOverview();
  }

  // のりば(index 0)の くもへ跳び乗る
  async _boardRing(char) {
    const { audio } = this.ctx;
    this.advance.set(char, 0);
    this.onRing.add(char);
    audio.pop();
    await this.ctx.hopFree(char, this._cloudWorldPos(0, char), 0.7, { hopHeight: 2.4 });
  }

  // 1〜3の 小さいサイコロ。_takeTurn は通らないので、ここで簡単に振る(設計書 4.7)。
  async _rollSmallDice(char) {
    const { ui, audio, wait } = this.ctx;
    audio.dice();
    ui.showDice(true, '🎲');
    if (char.isPlayer) await this._waitTap(5000, 'small-dice');
    else await wait(900);
    const n = 1 + Math.floor(Math.random() * 3);
    ui.showDice(true, ['1️⃣', '2️⃣', '3️⃣'][n - 1]);
    audio.diceResult(n);
    await this.ctx.banner(
      `<span class="icon">${['1️⃣', '2️⃣', '3️⃣'][n - 1]}</span>${n} だ!`, 900,
    );
    ui.showDice(false);
    return n;
  }

  // 出た目のぶん くもを わたる
  async _walkRing(char, steps) {
    const { audio } = this.ctx;
    const count = CONFIG.SKY_TILE_COUNT;
    for (let s = 0; s < steps; s++) {
      const next = (this.advance.get(char) || 0) + 1;
      this.advance.set(char, next);
      audio.hop(s);
      await this.ctx.hopFree(char, this._cloudWorldPos(next % count, char), 0.42, {
        hopHeight: 1.1, silent: true,
      });
    }
  }

  // 止まった くもの こうか
  async _cloudEffect(char) {
    const { ui, fx, audio } = this.ctx;
    const count = CONFIG.SKY_TILE_COUNT;
    const at = (this.advance.get(char) || 0) % count;
    const type = this.ringTypes[at] || 'fluffy';
    const cloud = this.clouds[at];

    if (type === 'fluffy') {
      char.coins += 2;
      audio.coin(0);
      fx.coinBurst(char.root.position, 5);
      ui.updatePlayer(char);
      char.setMode('cheer');
      await this.ctx.banner(
        `<span class="icon">☁️</span>ふわふわ くも!<span class="sub">🪙2まい</span>`, 1400,
      );
      char.setMode('idle');
      return;
    }

    if (type === 'star') {
      char.stars += 1;
      audio.starGet();
      fx.burstConfetti(char.root.position, 40, 4, 6);
      ui.updatePlayer(char);
      char.setMode('cheer');
      await this.ctx.banner(
        `<span class="icon">🌟</span>ほしの くも!<span class="sub">⭐1こ ゲット!</span>`, 1900,
      );
      if (char.stars >= CONFIG.SUPER_STARS && char.form !== 'super') {
        audio.transform();
        char.setForm('super');
        fx.sparkleBurst(char.root.position.clone().add(new THREE.Vector3(0, 1, 0)), 20, 0xfff6a8, 2);
        await this.ctx.banner(
          `<span class="icon">${char.def.emoji}✨</span>スーパー${char.def.name}に へんしん!`, 1800,
        );
      }
      char.setMode('idle');
      this.ctx.moveStar();
      return;
    }

    if (type === 'wind') {
      audio.gust();
      await this.ctx.banner(
        '<span class="icon">💨</span>かぜの くも!<span class="sub">みんな 1マス まわるよ</span>', 1500,
      );
      // そらのわに居る子 ぜんいんを 時計まわりに1マス
      const moves = [];
      for (const c of this.onRing) {
        const next = (this.advance.get(c) || 0) + 1;
        this.advance.set(c, next);
        moves.push(this.ctx.hopFree(c, this._cloudWorldPos(next % count, c), 0.5, {
          hopHeight: 1.0, silent: true,
        }));
      }
      await Promise.all(moves);
      return;
    }

    // 🕳️ ぬけ雲。落ちる前に3回 点滅して予告する(痛くない・こわくない)。
    await this._fallThrough(char, cloud);
  }

  // ぬけ雲から 下の島へ ぽよんと おりる。本島は 2マス もどる。
  async _fallThrough(char, cloud) {
    const { world, audio, fx, tweens, wait } = this.ctx;
    this.ctx.banner(
      '<span class="icon">🕳️</span>あなが あいた!<span class="sub">ぽよんと おりるよ</span>', 1800,
    );
    for (let i = 0; i < 3; i++) {
      if (cloud?.mat) cloud.mat.emissiveIntensity = 0.9;
      audio.tap();
      await wait(180);
      if (cloud?.mat) cloud.mat.emissiveIntensity = 0.15;
      await wait(180);
    }
    // 「おりる」合図は タップだけ(4歳児向けの操作は タップのみ)
    if (char.isPlayer) await this._waitTap(4000, 'fall-through');
    else await wait(600);

    this.onRing.delete(char);
    this.advance.set(char, 0);
    char.tileIndex = ((char.tileIndex - 2) % world.tileCount + world.tileCount) % world.tileCount;
    const to = world.tileAnchor(char.tileIndex).add(this.ctx.charOffset(char));
    const from = char.root.position.clone();
    char.setMode('hop');
    audio.whoosh();
    await tweens.add(1.1, (k) => {
      // まっすぐ落ちて、さいごに ぽよんと はねる
      const e = k < 0.8 ? (k / 0.8) * (k / 0.8) : 1;
      char.root.position.lerpVectors(from, to, e);
      char.setHopHeight(k < 0.8 ? 0 : Math.sin((k - 0.8) / 0.2 * Math.PI) * 0.8);
    });
    char.setHopHeight(0);
    char.land();
    char.setMode('idle');
    audio.boing();
    fx.dustPuff(char.root.position, 6);
    await this.ctx.banner(
      `<span class="icon">🪂</span>ぽよん!<span class="sub">2マス もどったよ</span>`, 1400,
    );
  }

  // ---------- ④ 収束(約14秒) ----------
  async _land() {
    this.stage = 'settle';
    const { world, chars, rig, audio, fx, tweens, wait } = this.ctx;
    dbg.push({
      kind: 'state', id: 'sky', from: 'play', to: 'settle',
      why: `onRing=${[...this.onRing].map((c) => c.def.id).join(',') || 'none'}`,
    });

    // 気球が ぱちんと はじける
    audio.pop();
    this.ctx.punch(1.25);
    this.balloons.forEach((b, i) => {
      fx.burstConfetti(b.group.getWorldPosition(new THREE.Vector3()), 24, 4, 5);
      setTimeout(() => audio.pop(), i * 90);
    });
    await tweens.add(1.0, (k) => {
      this.balloons.forEach((b) => b.group.scale.setScalar(Math.max(0.001, 1 - k)));
    });
    this.balloons.forEach((b) => { b.group.visible = false; });
    this.ropes.forEach((r) => { r.visible = false; });

    // 島が ゆっくり着水する
    const lift = CONFIG.SKY_LIFT;
    const raise = CONFIG.SKY_CLOUD_RAISE;
    await tweens.add(9, (k) => {
      const e = easeInOut(k);
      this.lift = lift * (1 - e);
      world.islandGroup.position.y = this.lift;
      world.clouds.forEach((c, i) => { c.position.y = this.cloudBaseY[i] + raise * (1 - e); });
      rig.setManual(
        new THREE.Vector3(0, this.lift + 26, 36 + e * 8),
        new THREE.Vector3(0, this.lift - 8 * (1 - e), 0),
      );
      // くもに乗っている子は くもといっしょに、おりた子は島といっしょに おりる
      this.ctx.rideIsland();
      for (const c of this.onRing) {
        c.root.position.copy(this._cloudWorldPos((this.advance.get(c) || 0) % CONFIG.SKY_TILE_COUNT, c));
      }
    });

    world.islandGroup.position.set(0, 0, 0);
    this.lift = 0;
    world.clouds.forEach((c, i) => { c.position.y = this.cloudBaseY[i]; });
    this.ctx.rideIsland();
    audio.splash();
    this.ctx.punch(1.3);
    fx.rainConfetti(new THREE.Vector3(0, 6, 0), 20, 70, 16);
    rig.setOverview();
    await this.ctx.banner(
      '<span class="icon">🌊</span>ちゃくすい!<span class="sub">おかえりなさーい</span>', 1800,
    );

    // そらのわで 進んだぶん、本島を進む(くも1マス = 本島4マスぶん)。
    // 結果反映は この1件だけ。くもに乗ったまま着水した子だけが steps ぶん進む。
    dbg.push({
      kind: 'result', id: 'sky', why: 'sky-return',
      to: `lift=${world.islandGroup.position.y.toFixed(3)}`,
      chars: chars.map((c) => {
        const onRing = this.onRing.has(c);
        const advance = this.advance.get(c) || 0;
        const steps = onRing ? skyReturnBonus(advance, CONFIG.SKY_TILE_COUNT) : 0;
        return {
          id: c.def.id, onRing, advance, steps,
          from: c.tileIndex, to: (c.tileIndex + steps) % world.tileCount,
        };
      }),
    });
    audio.fanfare();
    for (const char of chars) {
      if (!this.onRing.has(char)) continue;
      const steps = skyReturnBonus(this.advance.get(char) || 0, CONFIG.SKY_TILE_COUNT);
      const next = (char.tileIndex + steps) % world.tileCount;
      char.setMode('cheer');
      if (steps > 0) {
        await this.ctx.banner(
          `<span class="icon">${char.def.emoji}</span>${steps}マス すすむ!`, 1100,
        );
      }
      await this.ctx.hopTo(char, next, 0.55);
      char.setMode('idle');
    }
    this.onRing.clear();

    // くもリングを 消す
    await tweens.add(1.2, (k) => {
      this.clouds.forEach((c) => {
        c.group.scale.setScalar(Math.max(0.001, 1 - k));
        if (c.mat) c.mat.opacity = 0.9 * (1 - k);
      });
    });
    this.clouds.forEach((c) => { c.group.visible = false; });

    this.ctx.rideIsland();
    chars.forEach((c) => { c.land(); c.setMode('idle'); });
    // 島は 剛体移動なので、着水後は 全員が じぶんのマスのアンカーの近くに立っているはず。
    // snapshot からは見えない値なので、ここで1件だけ記録する(smoke.spec.js の groundedMax と同じ式)。
    dbg.push({
      kind: 'state', id: 'sky', from: 'settle', to: 'landed',
      why: `groundedMax=${Math.max(...chars.map((c) => {
        const a = world.tileAnchor(c.tileIndex);
        const p = c.root.position;
        return Math.max(Math.hypot(p.x - a.x, p.z - a.z), Math.abs(p.y - a.y));
      })).toFixed(3)} islandY=${world.islandGroup.position.y.toFixed(3)}`,
    });
    await wait(300);
  }

  // ---------- 小道具 ----------

  // くも i の ワールド座標(キャラの ずらしぶん こみ)
  _cloudWorldPos(i, char) {
    const { world } = this.ctx;
    const cloud = this.clouds[i];
    const local = cloud ? cloud.local : this._cloudLocal(i);
    const p = world.islandGroup.localToWorld(local.clone());
    p.y += 0.55;
    return char ? p.add(this.ctx.charOffset(char)) : p;
  }

  _cloudLocal(i) {
    const { world } = this.ctx;
    const count = CONFIG.SKY_TILE_COUNT;
    const a = (i / count) * TAU;
    const r = CONFIG.SKY_RING_RADIUS;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    // 「島の上 +1.2」。入り江のように へこんだ所でも くもが沈まないよう 0.6 で底上げする。
    const y = Math.max(world.heightFn(x, z), 0.6) + 1.2;
    return new THREE.Vector3(x, y, z);
  }

  // 4色の気球。島グループの子にするので、島といっしょに浮きあがる。
  _buildBalloons() {
    const { world } = this.ctx;
    for (let i = 0; i < 4; i++) {
      const g = new THREE.Group();
      const mat = toonMatUnique(BALLOON_COLORS[i], {
        emissive: BALLOON_COLORS[i], emissiveIntensity: 0.12,
      });
      const env = new THREE.Mesh(new THREE.SphereGeometry(3.6, 18, 16), mat);
      env.scale.y = 1.2;
      const stripe = new THREE.Mesh(
        new THREE.SphereGeometry(3.64, 18, 16, 0, TAU, 1.05, 0.5), toonMat(0xfff8dc),
      );
      stripe.scale.y = 1.2;
      const basket = new THREE.Mesh(
        new THREE.CylinderGeometry(0.95, 0.8, 1.1, 10), toonMat(0xb0803f),
      );
      basket.position.y = -5.2;
      g.add(env, stripe, basket);

      const a = (i / 4) * TAU + 0.6;
      const anchor = new THREE.Vector3(Math.cos(a) * 20, 24, Math.sin(a) * 20);
      g.position.copy(anchor);
      world.islandGroup.add(g);
      this.balloons.push({ group: this._own(g), mat, anchor });

      // 気球から島のふちへ のびるロープ
      const rope = new THREE.Mesh(
        new THREE.CylinderGeometry(0.09, 0.09, 1, 6), toonMat(0xe8d8b0),
      );
      world.islandGroup.add(rope);
      this.ropes.push(this._own(rope));
    }
  }

  // ロープを 気球と島のふちの あいだに 張りなおす
  _updateRopes() {
    const { world } = this.ctx;
    this.ropes.forEach((rope, i) => {
      const b = this.balloons[i];
      if (!b) return;
      const a = (i / 4) * TAU + 0.6;
      const gx = Math.cos(a) * 26;
      const gz = Math.sin(a) * 26;
      const ground = new THREE.Vector3(gx, world.heightFn(gx, gz), gz);
      const top = b.group.position.clone().add(new THREE.Vector3(0, -5.2, 0));
      const mid = ground.clone().lerp(top, 0.5);
      const len = ground.distanceTo(top);
      rope.position.copy(mid);
      rope.scale.y = Math.max(0.01, len);
      rope.lookAt(top);
      rope.rotateX(Math.PI / 2);
    });
  }

  // そらのわ 12マス。既存 Tile は使わず、半透明の白い円盤 + アイコンにする。
  _buildCloudRing() {
    const { world, chars } = this.ctx;
    const count = CONFIG.SKY_TILE_COUNT;
    this.ringTypes = buildCloudRing(chars, Math.random, count);

    for (let i = 0; i < count; i++) {
      const type = this.ringTypes[i];
      const info = CLOUD_ICONS[type] || CLOUD_ICONS.fluffy;
      const g = new THREE.Group();
      const mat = toonMatUnique(info.color, {
        emissive: info.glow, emissiveIntensity: 0.15, transparent: true, opacity: 0.92,
      });
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.2, 0.4, 20), mat);
      g.add(disc);
      // ふちの ふくらみ(ふかふかに見せる)
      for (let k = 0; k < 6; k++) {
        const a = (k / 6) * TAU;
        const puff = new THREE.Mesh(new THREE.SphereGeometry(0.52, 10, 8), mat);
        puff.position.set(Math.cos(a) * 1.2, 0.02, Math.sin(a) * 1.2);
        puff.scale.y = 0.62;
        g.add(puff);
      }
      g.add(this._cloudIcon(type));

      const local = this._cloudLocal(i);
      g.position.copy(local);
      world.islandGroup.add(g);
      this.clouds.push({ group: this._own(g), mat, type, local });
    }
  }

  // くもの種類を 絵で見せる(文字は使わない)
  _cloudIcon(type) {
    const g = new THREE.Group();
    g.position.y = 0.3;
    if (type === 'star') {
      const star = new THREE.Mesh(starGeometry(0.46, 0.22, 0.14), toonMatUnique(0xfff1b0, {
        emissive: 0xffcf4d, emissiveIntensity: 0.6,
      }));
      star.rotation.x = -Math.PI / 2;
      star.position.y = 0.25;
      g.add(star);
    } else if (type === 'hole') {
      const hole = new THREE.Mesh(
        new THREE.CircleGeometry(0.62, 20),
        new THREE.MeshBasicMaterial({ color: 0x5f6a80 }),
      );
      hole.rotation.x = -Math.PI / 2;
      hole.position.y = 0.02;
      g.add(hole);
    } else if (type === 'wind') {
      for (let k = 0; k < 3; k++) {
        const arc = new THREE.Mesh(
          new THREE.TorusGeometry(0.34 + k * 0.16, 0.05, 6, 14, Math.PI * 1.2),
          toonMat(0x7fd8ff),
        );
        arc.rotation.x = Math.PI / 2;
        arc.position.y = 0.06 + k * 0.05;
        g.add(arc);
      }
    }
    return g;
  }

  // タップ1回を待つ。時間で必ず抜けるので、遊ばれなくても進行が止まらない。
  _waitTap(timeoutMs = 4000, why = 'tap') {
    const { ui } = this.ctx;
    ui.showTapLayer(true);
    return new Promise((resolve) => {
      let done = false;
      const finish = (byTap) => {
        if (done) { dbg.push({ kind: 'input-reject', id: 'sky', why: 'already-done' }); return; }
        done = true;
        dbg.push(byTap
          ? { kind: 'input-accept', id: 'sky', why }
          : { kind: 'input-reject', id: 'sky', why: `timeout-${why}` });
        clearTimeout(timer);
        this._tapHandler = null;
        this.ctx.setTapHandler(null);
        ui.showTapLayer(false);
        resolve();
      };
      const timer = setTimeout(() => finish(false), timeoutMs);
      this._tapHandler = finish;
      this.ctx.setTapHandler(() => finish(true));
    });
  }

  onTap() {
    if (!this._tapHandler) { dbg.push({ kind: 'input-reject', id: 'sky', why: 'not-waiting' }); return; }
    this._tapHandler(true);
  }

  dispose() {
    const { world, ui, chars } = this.ctx;
    // 途中で止まっても、島は かならず 海面へ もどす(設計書 2.1 の不変条件)
    world.islandGroup.position.set(0, 0, 0);
    this.lift = 0;
    if (this.cloudBaseY.length) {
      world.clouds.forEach((c, i) => { c.position.y = this.cloudBaseY[i] ?? c.position.y; });
    }
    this.cloudBaseY = [];
    this._tapHandler = null;
    ui.showTapLayer(false);
    ui.showDice(false);
    // くもに乗ったまま終わった子を 島へ おろす
    this.ctx.rideIsland();
    chars.forEach((c) => c.setHopHeight(0));
    this.onRing.clear();
    this.advance.clear();
    super.dispose();
    this.balloons.forEach((b) => b.mat?.dispose?.());
    this.clouds.forEach((c) => c.mat?.dispose?.());
    this.balloons = [];
    this.ropes = [];
    this.clouds = [];
  }
}
