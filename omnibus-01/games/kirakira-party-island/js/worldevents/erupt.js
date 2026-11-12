// 🌋 だいふんか! しんしま たんじょう(W-09)
//
// かざんが虹色の噴火をして、海の上に まだ誰も踏んでいない新しい島が生まれる。
// 8枚の「ほうせきマス」があり、**下位から順に**小さいサイコロを振って宝石をひろう。
// ⭐ は1枚だけ埋まっている。**誰のコインも減らない純プラスのイベント**である。
//
// 島の頂点にも TERRAIN にも触らない(設計書 9.3 結論1)。
// 本島メッシュは PlaneGeometry(66, 66) = |x|,|z| <= 33 しか頂点が無く、
// 半径 10 以上のガウス丘を置ける海面がそもそも存在しないためである。
// 新島は islandGroup の子の **別メッシュ** で、イベントが _own() で所有して dispose する。
//
// ほうせきマス8枚も既存の Tile ではなく専用の軽いメッシュにする(設計書 9.3 結論2)。
// TILE_COUNT = 48 と LAYOUT_48 の凍結(0.3 #1)を守るためで、方式は sky.js の「そらのわ」と同じである。
// char.tileIndex は新島に居るあいだ動かさない。移動は ctx.hopFree、帰りは ctx.hopTo(c, c.tileIndex)。
//
// 噴火の増幅は world.volcanoBoost の1つだけを使う。world.smokes / world.embers は
// world.update が毎フレーム position と opacity を上書きするので、外から position を書いても潰される
// (設計書 9.12 #6)。dispose() で必ず 1 に戻す。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMat, toonMatUnique, starGeometry } from '../gfx.js';
import { CONFIG } from '../config.js';
import { buildGemIsle, eruptOrder, gemTileCoins } from '../rules.js';
import { easeInOut, easeOut } from '../tween.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;
const VOLCANO_A = TAU * 0.625;        // world.js の ZONE_CENTERS[2](かざんゾーンの中心角)
const ISLE_SINK = -9;                 // 生まれる前の新島の高さ
const ISLE_TOP = 0.2;                 // 生まれたあとの新島の高さ
const BOOST_MAX = 2.4;                // 噴火の増幅の上限(world.volcanoBoost)
const DICE_FACES = ['1️⃣', '2️⃣', '3️⃣'];

// ほうせきマスの見た目。文字は使わず 色と形だけで わかるようにする。
const GEM_LOOK = {
  c1: { color: 0x8fe8ff, glow: 0x4fc8ff },
  c2: { color: 0x9fffc8, glow: 0x3fd98f },
  c3: { color: 0xffe08f, glow: 0xffb300 },
  c4: { color: 0xffa8d8, glow: 0xff5c9e },
  c5: { color: 0xd8b0ff, glow: 0x9b5cff },
  star: { color: 0xfff1b0, glow: 0xffcf4d },
};

export class EruptEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.isleGroup = null;      // 新島ぜんたい(islandGroup の子)
    this.isleCenter = new THREE.Vector3();
    this.gemTypes = [];         // buildGemIsle の戻り値
    this.gems = [];             // { group, mat, type, local, taken }
    this.palms = [];
    this.rainbow = null;
    this.advance = new Map();   // char → のりばから進んだ枚数
    this.gained = new Map();    // char → このイベントで増えたコイン
    this.gotStar = null;
    this.smokeBase = [];        // 煙のもとの色(dispose で もどす)
    this._t = 0;
    this._tapHandler = null;
  }

  async run() {
    await this._trigger();   // ① きっかけ 8秒
    await this._birth();     // ② 変化 16秒
    await this._play();      // ③ 遊び 26秒
    await this._settle();    // ④ 収束 10秒
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    // ほうせきは ゆっくり回って キラキラする
    for (const g of this.gems) {
      if (g.taken) continue;
      g.icon.rotation.y += dt * 1.4;
      g.icon.position.y = g.iconY + Math.sin(this._t * 2.2 + g.phase) * 0.12;
      if (g.mat) g.mat.emissiveIntensity = 0.45 + Math.sin(this._t * 3 + g.phase) * 0.2;
    }
    if (this.rainbow) this.rainbow.rotation.y += dt * 0.12;
  }

  // ---------- ① きっかけ(約8秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { world, rig, audio, tweens, wait } = this.ctx;
    audio.stopBgm();
    audio.rumble();
    audio.startBgm('board:volcano');

    // 火口へ寄る。溶岩は赤黒くしない ── 明るいオレンジのままで、煙だけを虹色にする。
    const vTop = world.lavaPos.clone();
    const camFrom = rig.pos.clone();
    const camTo = new THREE.Vector3(vTop.x * 1.9, vTop.y + 16, vTop.z * 1.9);
    rig.setManual(camFrom.clone(), vTop.clone());

    this.ctx.banner(
      '<span class="icon">🌋</span>やまが…!<span class="sub">けむりが にじいろに なった</span>',
      2800,
    );

    // 煙のもとの色を覚えて、黒 → 虹へ lerp する
    this.smokeBase = world.smokes.map((sp) => sp.material.color.getHex());
    const rainbowHues = [0xff7f7f, 0xffe07f, 0x9fffb0];
    const from = new THREE.Color(0x6a6058);
    const tos = world.smokes.map((_, i) => new THREE.Color(rainbowHues[i % rainbowHues.length]));

    let ticks = 0;
    await tweens.add(8, (k) => {
      const e = easeInOut(k);
      world.volcanoBoost = 1 + (BOOST_MAX - 1) * e;
      world.smokes.forEach((sp, i) => {
        sp.material.color.copy(from).lerp(tos[i], e);
      });
      rig.setManual(camFrom.clone().lerp(camTo, e), vTop.clone());
      if (e > ticks * 0.34) { audio.tone({ freq: 240 - ticks * 40, type: 'sine', dur: 0.5, vol: 0.14, slide: -60 }); ticks++; }
    });
    dbg.push({
      kind: 'state', id: 'erupt', from: 'idle', to: 'trigger',
      why: `boost=${world.volcanoBoost.toFixed(2)}`,
    });
    await wait(200);
  }

  // ---------- ② 変化(約16秒) ----------
  async _birth() {
    this.stage = 'change';
    const { world, rig, fx, audio, tweens, wait } = this.ctx;
    this._buildIsle();

    audio.erupt(2.6);
    this.ctx.punch(1.6);
    // キャンディみたいな光の噴水(赤黒い溶岩にはしない)
    const vTop = world.lavaPos.clone();
    fx.sparkleBurst(vTop.clone().add(new THREE.Vector3(0, 3, 0)), 20, 0xffc98f, 2.2);
    fx.burstConfetti(vTop.clone().add(new THREE.Vector3(0, 4, 0)), 40, 5, 12);

    // いちばんの見せ場だけ ゆっくりにする(1.2秒)。必ず 1 に戻す。
    this.ctx.setTimeScale(0.35);
    setTimeout(() => this.ctx.setTimeScale(1), 1200);

    const camFrom = rig.pos.clone();
    const camTo = this.isleCenter.clone().add(new THREE.Vector3(0, 22, 26));
    let punches = 1;
    let splashes = 0;
    await tweens.add(16, (k) => {
      const e = easeOut(k);
      this.isleGroup.scale.y = Math.max(0.001, e);
      this.isleGroup.position.y = ISLE_SINK + (ISLE_TOP - ISLE_SINK) * e;
      rig.setManual(
        camFrom.clone().lerp(camTo, easeInOut(k)),
        this.isleCenter.clone().setY(this.isleCenter.y + 2),
      );
      if (k > punches * 0.3 && punches < 4) { this.ctx.punch(1.6); punches++; }
      if (e > splashes * 0.24 && splashes < 4) { audio.splash(); splashes++; }
    });
    this.isleGroup.scale.y = 1;
    this.isleGroup.position.y = ISLE_TOP;
    audio.boing();
    fx.rainConfetti(this.isleCenter.clone().add(new THREE.Vector3(0, 8, 0)), 12, 40, 10);
    await this.ctx.banner(
      '<span class="icon">🏝️</span>しんしま が できた!<span class="sub">ほうせきが いっぱい</span>',
      2200,
    );
    await wait(200);
  }

  // ---------- ③ 遊び(約26秒) ----------
  async _play() {
    this.stage = 'play';
    const { chars, rig } = this.ctx;
    const order = eruptOrder(chars).map((i) => chars[i]).filter(Boolean);

    dbg.push({
      kind: 'state', id: 'erupt', from: 'change', to: 'play',
      why: `isle=${this.gemTypes.join(',')} order=${order.map((c) => c.def.id).join('>')}`,
    });

    await this.ctx.banner(
      '<span class="icon">💎</span>したの こ から! <span class="sub">タップで サイコロ</span>',
      2000,
    );

    for (const char of order) {
      if (!chars.includes(char)) continue;
      rig.setFollow(char);
      await this._boardIsle(char);
      const n = await this._rollSmallDice(char);
      await this._walkIsle(char, n);
      await this._takeGem(char);
    }
    rig.setOverview();
  }

  // のりば(index 0)へ跳び乗る
  async _boardIsle(char) {
    const { audio } = this.ctx;
    this.advance.set(char, 0);
    audio.pop();
    await this.ctx.hopFree(char, this._gemWorldPos(0, char), 0.8, { hopHeight: 4.2 });
  }

  // 1〜3の小さいサイコロ。_takeTurn は通らないので、ここで簡単に振る(sky.js と同じ作法)。
  async _rollSmallDice(char) {
    const { ui, audio, wait } = this.ctx;
    audio.dice();
    ui.showDice(true, '🎲');
    if (char.isPlayer) await this._waitTap(5000, 'small-dice');
    else await wait(800);
    const n = 1 + Math.floor(Math.random() * 3);
    ui.showDice(true, DICE_FACES[n - 1]);
    audio.diceResult(n);
    await this.ctx.banner(`<span class="icon">${DICE_FACES[n - 1]}</span>${n} だ!`, 900);
    ui.showDice(false);
    return n;
  }

  // 出た目のぶん ほうせきマスを わたる
  async _walkIsle(char, steps) {
    const { audio } = this.ctx;
    const count = CONFIG.ERUPT_ISLE_TILES;
    for (let s = 0; s < steps; s++) {
      const next = (this.advance.get(char) || 0) + 1;
      this.advance.set(char, next);
      audio.hop(s);
      await this.ctx.hopFree(char, this._gemWorldPos(next % count, char), 0.4, {
        hopHeight: 0.9, silent: true,
      });
    }
  }

  // 止まった ほうせきマスの中身をもらう。誰のコインも減らない。
  async _takeGem(char) {
    const { ui, fx, audio } = this.ctx;
    const count = CONFIG.ERUPT_ISLE_TILES;
    const at = (this.advance.get(char) || 0) % count;
    const gem = this.gems[at];
    const type = this.gemTypes[at] || 'c1';

    if (gem && !gem.taken) {
      gem.taken = true;
      gem.icon.visible = false;
      fx.sparkleBurst(gem.group.getWorldPosition(new THREE.Vector3()), 12, GEM_LOOK[type].glow, 1.6);
    }

    if (type === 'star') {
      char.stars += 1;
      this.gotStar = char;
      audio.starGet();
      fx.burstConfetti(char.root.position, 40, 4, 6);
      ui.updatePlayer(char);
      char.setMode('cheer');
      dbg.push({
        kind: 'result', id: 'erupt', why: 'erupt-gem', to: char.def.id,
        chars: [{ id: char.def.id, at, type, coins: char.coins, stars: char.stars }],
      });
      await this.ctx.banner(
        `<span class="icon">⭐</span>ほしの ほうせき!<span class="sub">⭐1こ ゲット!</span>`, 1900,
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

    const coins = gemTileCoins(type);
    char.coins += coins;
    this.gained.set(char, (this.gained.get(char) || 0) + coins);
    for (let i = 0; i < Math.min(4, coins); i++) audio.coin(i);
    audio.chime(1);
    fx.coinBurst(char.root.position, 4 + coins);
    ui.updatePlayer(char);
    char.setMode('cheer');
    dbg.push({
      kind: 'result', id: 'erupt', why: 'erupt-gem', to: char.def.id,
      chars: [{ id: char.def.id, at, type, gain: coins, coins: char.coins }],
    });
    await this.ctx.banner(
      `<span class="icon">💎</span>ほうせき!<span class="sub">🪙${coins}まい</span>`, 1400,
    );
    char.setMode('idle');
  }

  // ---------- ④ 収束(約10秒) ----------
  async _settle() {
    this.stage = 'settle';
    const { world, chars, rig, audio, fx, tweens, wait } = this.ctx;
    rig.setOverview();

    dbg.push({
      kind: 'state', id: 'erupt', from: 'play', to: 'settle',
      why: `gained=${chars.map((c) => `${c.def.id}:${this.gained.get(c) || 0}`).join(',')}`
        + ` star=${this.gotStar ? this.gotStar.def.id : 'none'}`,
    });

    // 新島に虹とヤシが生える
    this._buildRainbowAndPalms();
    audio.sparkle();
    await tweens.add(1.6, (k) => {
      const e = easeOut(k);
      if (this.rainbow) this.rainbow.scale.setScalar(Math.max(0.001, e));
      this.palms.forEach((p, i) => {
        const t = Math.max(0, Math.min(1, (e - i * 0.12) / 0.6));
        p.scale.setScalar(Math.max(0.001, t));
      });
    });
    audio.yay();
    fx.rainConfetti(this.isleCenter.clone().add(new THREE.Vector3(0, 8, 0)), 12, 50, 10);
    await this.ctx.banner(
      '<span class="icon">🌈</span>にじが かかった!<span class="sub">しまへ かえろう</span>', 1800,
    );

    // 全員を 本島の じぶんのマスへ もどす(tileIndex は そもそも動かしていない)
    audio.fanfare();
    const backs = chars.map((c) => this.ctx.hopTo(c, c.tileIndex, 0.85));
    await Promise.all(backs);
    chars.forEach((c) => { c.setHopHeight(0); c.land(); c.setMode('cheer'); });

    // 新島を しずめて 火山を しずめる
    const isleFrom = this.isleGroup ? this.isleGroup.position.y : ISLE_TOP;
    audio.splash();
    await tweens.add(2.6, (k) => {
      const e = easeInOut(k);
      world.volcanoBoost = BOOST_MAX + (1 - BOOST_MAX) * e;
      if (this.isleGroup) {
        this.isleGroup.position.y = isleFrom + (ISLE_SINK - isleFrom) * e;
        this.isleGroup.scale.y = Math.max(0.001, 1 - e);
      }
      if (this.rainbow) this.rainbow.scale.setScalar(Math.max(0.001, 1 - e));
    });
    world.volcanoBoost = 1;
    if (this.isleGroup) this.isleGroup.visible = false;
    chars.forEach((c) => c.setMode('idle'));

    // 島の剛体変換は そもそも触っていない。念のため landed を1件だけ記録する。
    dbg.push({
      kind: 'state', id: 'erupt', from: 'settle', to: 'landed',
      why: `groundedMax=${Math.max(...chars.map((c) => {
        const a = world.tileAnchor(c.tileIndex);
        const p = c.root.position;
        return Math.max(Math.hypot(p.x - a.x, p.z - a.z), Math.abs(p.y - a.y));
      })).toFixed(3)} boost=${world.volcanoBoost.toFixed(2)}`,
    });
    await wait(300);
  }

  // ---------- 小道具 ----------

  // 新島ぜんたい。黒曜石のドーム + ほうせきマス8枚。islandGroup の子にする。
  _buildIsle() {
    const { world, chars } = this.ctx;
    const g = new THREE.Group();
    const a = VOLCANO_A;
    const d = CONFIG.ERUPT_ISLE_DIST;
    this.isleCenter.set(Math.cos(a) * d, ISLE_TOP, Math.sin(a) * d);
    g.position.copy(this.isleCenter);
    g.scale.y = 0.001;

    // 黒曜石のドーム。まっ黒にはせず、むらさき寄りの つやのある色にする(こわくしない)。
    const domeMat = toonMatUnique(0x4a3f6e, { emissive: 0x2a2450, emissiveIntensity: 0.3 });
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(CONFIG.ERUPT_ISLE_RADIUS, 24, 14, 0, TAU, 0, Math.PI / 2),
      domeMat,
    );
    dome.scale.y = 0.42;
    dome.receiveShadow = true;
    g.add(dome);

    // すそ野の砂(海面との さかいめを やわらかく)
    const skirt = new THREE.Mesh(
      new THREE.CylinderGeometry(
        CONFIG.ERUPT_ISLE_RADIUS * 1.06, CONFIG.ERUPT_ISLE_RADIUS * 1.22, 1.6, 26,
      ),
      toonMat(0xe8d8b8),
    );
    skirt.position.y = -0.7;
    g.add(skirt);

    // 光るすじ(ひやされた ようがんの あと)。赤黒くしない ── 明るい桃とオレンジ。
    for (let i = 0; i < 6; i++) {
      const sa = (i / 6) * TAU + 0.3;
      const vein = new THREE.Mesh(
        new THREE.BoxGeometry(0.42, 0.12, CONFIG.ERUPT_ISLE_RADIUS * 0.9),
        toonMatUnique(i % 2 ? 0xffb07f : 0xffa8d8, {
          emissive: i % 2 ? 0xff8a3c : 0xff5c9e, emissiveIntensity: 0.7,
        }),
      );
      vein.position.set(Math.cos(sa) * 3.6, 1.6, Math.sin(sa) * 3.6);
      vein.rotation.y = -sa;
      g.add(vein);
    }

    world.islandGroup.add(g);
    this.isleGroup = this._own(g);

    // ほうせきマス8枚
    this.gemTypes = buildGemIsle(chars, Math.random, CONFIG.ERUPT_ISLE_TILES);
    for (let i = 0; i < CONFIG.ERUPT_ISLE_TILES; i++) {
      const type = this.gemTypes[i];
      const look = GEM_LOOK[type] || GEM_LOOK.c1;
      const tile = new THREE.Group();
      const mat = toonMatUnique(look.color, {
        emissive: look.glow, emissiveIntensity: 0.45,
      });
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.1, 0.35, 18), mat);
      tile.add(disc);

      // 宝石アイコン。⭐ だけ かたちを変えて、文字なしで見わけられるようにする。
      const icon = type === 'star'
        ? new THREE.Mesh(starGeometry(0.62, 0.3, 0.2),
          toonMatUnique(0xfff1b0, { emissive: 0xffcf4d, emissiveIntensity: 0.9 }))
        : new THREE.Mesh(new THREE.OctahedronGeometry(0.42 + gemTileCoins(type) * 0.06),
          toonMatUnique(look.color, { emissive: look.glow, emissiveIntensity: 0.8 }));
      if (type === 'star') icon.rotation.x = -Math.PI / 2;
      icon.position.y = 0.62;
      tile.add(icon);

      const local = this._gemLocal(i);
      tile.position.copy(local);
      g.add(tile);
      this.gems.push({
        group: tile, icon, mat, type, local, taken: false,
        iconY: 0.62, phase: Math.random() * TAU,
      });
    }
  }

  // ほうせきマス i の 新島ローカル座標
  _gemLocal(i) {
    const count = CONFIG.ERUPT_ISLE_TILES;
    const a = (i / count) * TAU;
    const r = CONFIG.ERUPT_RING_RADIUS;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r;
    // ドーム(半径 R、つぶし 0.42)の表面の高さ
    const R = CONFIG.ERUPT_ISLE_RADIUS;
    const y = 0.42 * R * Math.sqrt(Math.max(0, 1 - (r * r) / (R * R))) + 0.2;
    return new THREE.Vector3(x, y, z);
  }

  // ほうせきマス i の ワールド座標(キャラの ずらしぶん こみ)
  _gemWorldPos(i, char) {
    const { world } = this.ctx;
    const gem = this.gems[i];
    const local = gem ? gem.local : this._gemLocal(i);
    // 新島ローカル → islandGroup ローカル → ワールド
    const p = local.clone().add(this.isleCenter);
    const w = world.islandGroup.localToWorld(p);
    w.y += 0.35;
    return char ? w.add(this.ctx.charOffset(char)) : w;
  }

  // 収束で生える 虹とヤシ
  _buildRainbowAndPalms() {
    if (!this.isleGroup) return;
    const arcs = [0xff6f6f, 0xffb03c, 0xffe45c, 0x7fe08a, 0x6fb7ff, 0xb06ce0];
    const rb = new THREE.Group();
    arcs.forEach((c, i) => {
      const arc = new THREE.Mesh(
        new THREE.TorusGeometry(9.5 - i * 0.55, 0.26, 8, 40, Math.PI),
        toonMatUnique(c, { emissive: c, emissiveIntensity: 0.35, transparent: true, opacity: 0.85 }),
      );
      arc.position.y = 1.2;
      arc.rotation.y = 0.4;
      rb.add(arc);
    });
    rb.scale.setScalar(0.001);
    this.isleGroup.add(rb);
    this.rainbow = rb;

    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * TAU + 1.1;
      const r = 2.2;
      const palm = new THREE.Group();
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.16, 0.24, 3.2, 8), toonMat(0xb08a5a),
      );
      trunk.position.y = 1.6;
      palm.add(trunk);
      for (let k = 0; k < 5; k++) {
        const la = (k / 5) * TAU;
        const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.85, 8, 6), toonMat(0x5fc96f));
        leaf.scale.set(1.5, 0.22, 0.6);
        leaf.position.set(Math.cos(la) * 0.9, 3.2, Math.sin(la) * 0.9);
        leaf.rotation.y = -la;
        leaf.rotation.z = -0.35;
        palm.add(leaf);
      }
      const local = this._gemLocal(0);
      palm.position.set(Math.cos(a) * r, local.y + 1.4, Math.sin(a) * r);
      palm.scale.setScalar(0.001);
      this.isleGroup.add(palm);
      this.palms.push(palm);
    }
  }

  // タップ1回を待つ。時間で必ず抜けるので、遊ばれなくても進行が止まらない。
  _waitTap(timeoutMs = 4000, why = 'tap') {
    const { ui } = this.ctx;
    ui.showTapLayer(true);
    return new Promise((resolve) => {
      let done = false;
      const finish = (byTap) => {
        if (done) { dbg.push({ kind: 'input-reject', id: 'erupt', why: 'already-done' }); return; }
        done = true;
        dbg.push(byTap
          ? { kind: 'input-accept', id: 'erupt', why }
          : { kind: 'input-reject', id: 'erupt', why: `timeout-${why}` });
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
    if (!this._tapHandler) { dbg.push({ kind: 'input-reject', id: 'erupt', why: 'not-waiting' }); return; }
    this._tapHandler(true);
  }

  dispose() {
    const { world, ui, chars } = this.ctx;
    // 途中で止まっても、火山と時計と UI は かならず もどす
    world.volcanoBoost = 1;
    world.smokes.forEach((sp, i) => {
      if (this.smokeBase[i] != null) sp.material.color.setHex(this.smokeBase[i]);
    });
    this.smokeBase = [];
    this.ctx.setTimeScale(1);
    this._tapHandler = null;
    ui.showTapLayer(false);
    ui.showDice(false);
    chars.forEach((c) => c.setHopHeight(0));
    this.advance.clear();
    this.gained.clear();
    super.dispose();
    this.gems.forEach((g) => g.mat?.dispose?.());
    this.gems = [];
    this.palms = [];
    this.rainbow = null;
    this.isleGroup = null;
  }
}
