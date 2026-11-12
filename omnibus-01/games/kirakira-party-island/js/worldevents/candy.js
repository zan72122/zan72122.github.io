// 🌈 にじの はしの むこう(W-14)
//
// にじの日(weather === 'rainbowy')だけ起きる。既存の虹アーチが ぐんと太くなって
// 空へのびる橋になり、4人が弧を登って **おかしじま12マス** へ行く。
//
// 臨時ボードは sky.js の「そらのわ」と同じ作法で作る。既存の Tile も TILE_TYPES も使わない
// (設計書 9.7 の結論)。char.tileIndex は1マスも触らず、帰りは本島の元のマス +5 へ hopTo する。
//
// world.tiles / TERRAIN / islandGroup には いっさい触らない。
// 触るのは scene 直下の candyGroup と world.rainbowGroup の scale だけである。
// world.update(_updateWeather) が毎フレーム rainbowGroup.scale を天気の目標へ lerp して戻すので、
// 太らせているあいだは毎フレーム上書きする(main.js は world.update → board.update の順)。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMat, toonMatUnique, starGeometry, heartGeometry } from '../gfx.js';
import { CONFIG } from '../config.js';
import { buildCandyRing, candyTileValue, underdogOrder } from '../rules.js';
import { easeInOut } from '../tween.js';
import { rand } from '../rng.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;
const BACK_STEPS = 5;          // 帰りは本島の元のマス +5
const RAINBOW_FAT = 2.6;       // 虹の太らせ倍率

// おかしマスの見ため。文字は使わず 形と色で伝える。
const CANDY_LOOK = {
  candy: { color: 0xff9dbe, glow: 0xffd0e4, emoji: '🍭' },
  cookie: { color: 0xd9a86a, glow: 0xffe0b0, emoji: '🍪' },
  choco: { color: 0x8a5a34, glow: 0xd9a06a, emoji: '🍫' },
  cake: { color: 0xfff1d0, glow: 0xffd23e, emoji: '🎂' },
  star: { color: 0xfff6c8, glow: 0xffcf4d, emoji: '⭐' },
};

export class CandyEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.candyGroup = null;
    this.ring = [];            // buildCandyRing の戻り値
    this.tiles = [];           // { group, mat, kind, local }
    this.advance = new Map();  // char → のりばから進んだ マス数
    this.onRing = new Set();
    this.starTakenBy = null;
    this.gained = new Map();   // char → このイベントで増えたコイン
    this.rainbowScale = 1;
    this._t = 0;
    this._tapHandler = null;
  }

  async run() {
    await this._trigger();     // ① きっかけ 6秒
    await this._climb();       // ② 変化 10秒
    await this._play();        // ③ 遊び 38秒
    await this._back();        // ④ 収束 12秒
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    // 虹は world.update が毎フレーム もとの大きさへ戻そうとするので、ここで上書きする
    const rg = this.ctx.world.rainbowGroup;
    if (rg && this.rainbowScale > 1.001) {
      rg.scale.setScalar(this.rainbowScale);
      rg.children.forEach((arc) => { arc.material.opacity = 0.95; });
    }
    this.tiles.forEach((t, i) => {
      t.group.position.y = t.local.y + Math.sin(this._t * 1.2 + i * 0.6) * 0.14;
      if (t.kind === 'star') t.group.rotation.y += dt * 1.1;
    });
  }

  // ---------- ① きっかけ(約6秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { world, rig, fx, audio, tweens, wait } = this.ctx;
    rig.setOverview();
    audio.stopBgm();
    audio.warp();
    dbg.push({
      kind: 'state', id: 'candy', from: 'idle', to: 'trigger',
      why: `weather=${world.weatherName} lift=${CONFIG.CANDY_LIFT}`,
    });
    this.ctx.banner(
      '<span class="icon">🌈</span>にじの はしが かかった!<span class="sub">むこうは おかしの しま</span>',
      2800,
    );

    // 虹を ぐんと太らせる。7色を1色ずつ キラッと。
    const rg = world.rainbowGroup;
    let chimed = 0;
    await tweens.add(6, (k) => {
      const e = easeInOut(k);
      this.rainbowScale = 1 + (RAINBOW_FAT - 1) * e;
      if (rg) {
        rg.scale.setScalar(this.rainbowScale);
        rg.children.forEach((arc) => { arc.material.opacity = 0.95; });
      }
      if (e > chimed / 7 && chimed < 7) {
        audio.chime(chimed % 4);
        if (rg) {
          fx.sparkleBurst(
            rg.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 8, 0)),
            6, [0xff5c5c, 0xffb03c, 0xffe45c, 0x6fdd6f, 0x5cb8ff, 0xb06ce0, 0xffffff][chimed], 1.4,
          );
        }
        chimed++;
      }
    });
    await wait(200);
  }

  // ---------- ② 変化(約10秒) ----------
  async _climb() {
    this.stage = 'change';
    const { chars, rig, audio, tweens, wait } = this.ctx;
    audio.startBgm('candy');
    this._buildCandyIsland();

    dbg.push({
      kind: 'state', id: 'candy', from: 'trigger', to: 'change',
      why: `lift=${CONFIG.CANDY_LIFT} ring=${this.ring.join(',')}`,
    });

    // 4人を 虹の弧で 一列に登らせる。ctx.hopFree を使うので char.tileIndex は動かない。
    const froms = chars.map((c) => c.root.position.clone());
    const dests = chars.map((c, i) => this._tileWorldPos(0, c, i));
    rig.setManual(new THREE.Vector3(0, 22, 58), new THREE.Vector3(0, 20, 0));
    chars.forEach((c) => c.setMode('hop'));

    await tweens.add(8, (k) => {
      const e = easeInOut(k);
      chars.forEach((c, i) => {
        const delay = i * 0.06;
        const t = Math.min(1, Math.max(0, (e - delay) / (1 - delay)));
        const from = froms[i];
        const to = dests[i];
        // にじの弧。中間で いちばん高くなる Catmull 風の2次曲線で じゅうぶん。
        const mid = 1.25;
        const y = from.y + (to.y - from.y) * t + Math.sin(Math.PI * t) * (CONFIG.CANDY_LIFT * 0.22) * mid;
        c.root.position.set(
          from.x + (to.x - from.x) * t,
          y,
          from.z + (to.z - from.z) * t,
        );
        c.setHopHeight(0);
        c.inner.rotation.z = Math.sin(t * Math.PI * 4) * 0.12;
      });
      rig.setManual(
        new THREE.Vector3(0, 22 + e * 22, 58 - e * 12),
        new THREE.Vector3(0, 20 + e * 20, 0),
      );
      if (k > 0.98) audio.chime(3);
    });
    chars.forEach((c, i) => {
      c.inner.rotation.z = 0;
      c.root.position.copy(dests[i]);
      c.land();
      c.setMode('idle');
      this.advance.set(c, 0);
      this.onRing.add(c);
      this.gained.set(c, 0);
    });
    audio.boing();
    await this.ctx.banner(
      '<span class="icon">🍭</span>おかしの しまに ついた!<span class="sub">サイコロで あるこう</span>',
      2200,
    );
    await wait(200);
  }

  // ---------- ③ 遊び(約38秒) ----------
  async _play() {
    this.stage = 'play';
    const { chars, rig } = this.ctx;
    const order = underdogOrder(chars).map((i) => chars[i]);
    dbg.push({
      kind: 'state', id: 'candy', from: 'change', to: 'play',
      why: `ring=${this.ring.join(',')} order=${order.map((c) => c.def.id).join('>')}`,
    });

    for (const char of order) {
      if (!chars.includes(char)) continue;
      rig.setFollow(char);
      const n = await this._rollSmallDice(char);
      await this._walk(char, n);
      await this._effect(char);
    }
    rig.setOverview();
  }

  // 1〜3の 小さいサイコロ。合図のタップを待つ(時間でも必ず抜ける)。
  async _rollSmallDice(char) {
    const { ui, audio, wait } = this.ctx;
    audio.dice();
    ui.showDice(true, '🎲');
    if (char.isPlayer) await this._waitTap(5000, 'small-dice');
    else await wait(800);
    const n = 1 + Math.floor(rand() * 3);
    ui.showDice(true, ['1️⃣', '2️⃣', '3️⃣'][n - 1]);
    audio.diceResult(n);
    await this.ctx.banner(`<span class="icon">${['1️⃣', '2️⃣', '3️⃣'][n - 1]}</span>${n} だ!`, 900);
    ui.showDice(false);
    return n;
  }

  async _walk(char, steps) {
    const { chars, audio } = this.ctx;
    const count = CONFIG.CANDY_TILE_COUNT;
    const slot = chars.indexOf(char);
    for (let s = 0; s < steps; s++) {
      const next = (this.advance.get(char) || 0) + 1;
      this.advance.set(char, next);
      audio.hop(s);
      await this.ctx.hopFree(char, this._tileWorldPos(next % count, char, slot), 0.45, {
        hopHeight: 1.1, silent: true,
      });
    }
  }

  // 止まった おかしマスの こうか。全部プラスで、誰のコインも減らない。
  async _effect(char) {
    const { chars, ui, fx, audio } = this.ctx;
    const count = CONFIG.CANDY_TILE_COUNT;
    const at = (this.advance.get(char) || 0) % count;
    let kind = this.ring[at] || 'candy';
    // ⭐ は早い者勝ち。だれかが取ったあとは 🍪 として ふるまう。
    if (kind === 'star' && this.starTakenBy) kind = 'cookie';

    if (kind === 'star') {
      this.starTakenBy = char;
      char.stars += 1;
      audio.starGet();
      fx.burstConfetti(char.root.position, 40, 4, 6);
      ui.updatePlayer(char);
      char.setMode('cheer');
      dbg.push({
        kind: 'result', id: 'candy', why: 'candy-star',
        to: char.def.id, from: `at=${at}`,
      });
      await this.ctx.banner(
        '<span class="icon">⭐</span>おかしの ほし!<span class="sub">⭐1こ ゲット!</span>', 1900,
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
      // ⭐ を取ったマスは もう ほしではない
      this._retint(at, 'cookie');
      return;
    }

    const value = candyTileValue(kind);
    char.coins += value;
    this.gained.set(char, (this.gained.get(char) || 0) + value);
    for (let i = 0; i < Math.min(3, value); i++) audio.coin(i);
    fx.coinBurst(char.root.position.clone().add(new THREE.Vector3(0, 0.8, 0)), 5);
    ui.updatePlayer(char);
    char.setMode('cheer');
    dbg.push({
      kind: 'result', id: 'candy', why: `candy-${kind}`,
      to: char.def.id, from: `at=${at}`,
      chars: chars.map((c) => ({ id: c.def.id, coins: c.coins })),
    });
    await this.ctx.banner(
      `<span class="icon">${CANDY_LOOK[kind].emoji}</span>おいしい!<span class="sub">🪙${value}まい</span>`,
      1400,
    );
    char.setMode('idle');
  }

  // ---------- ④ 収束(約12秒) ----------
  async _back() {
    this.stage = 'settle';
    const { world, chars, rig, ui, fx, audio, tweens, wait } = this.ctx;
    rig.setOverview();
    audio.splash();
    this.ctx.banner(
      '<span class="icon">☁️</span>なまクリームの くもへ!<span class="sub">おうちへ かえろう</span>',
      2000,
    );

    const dests = chars.map((c) => (c.tileIndex + BACK_STEPS) % world.tileCount);
    dbg.push({
      kind: 'result', id: 'candy', why: 'candy-back',
      from: `back=+${BACK_STEPS}`, to: `star=${this.starTakenBy?.def?.id || 'none'}`,
      chars: chars.map((c, i) => ({
        id: c.def.id, gained: this.gained.get(c) || 0, coins: c.coins,
        from: c.tileIndex, to: dests[i], stars: c.stars,
      })),
    });

    // 虹が ほそくなり、おかしじまが ちぢむ
    await tweens.add(4, (k) => {
      const e = easeInOut(k);
      this.rainbowScale = RAINBOW_FAT + (1 - RAINBOW_FAT) * e;
      const rg = world.rainbowGroup;
      if (rg) rg.scale.setScalar(Math.max(0.01, this.rainbowScale));
      if (this.candyGroup) this.candyGroup.scale.setScalar(Math.max(0.001, 1 - e * 0.15));
    });
    this.rainbowScale = 1;

    // 4人を 本島の 元のマス +5 へ おろす
    audio.fanfare();
    for (let i = 0; i < chars.length; i++) {
      const c = chars[i];
      c.setMode('cheer');
      await this.ctx.hopTo(c, dests[i], 0.75, { hopHeight: 3.2 });
      c.setMode('idle');
      fx.dustPuff(c.root.position, 4);
      this.onRing.delete(c);
    }
    audio.splash();

    // おかしじまを 消す
    await tweens.add(1.4, (k) => {
      if (this.candyGroup) this.candyGroup.scale.setScalar(Math.max(0.001, 0.85 * (1 - k)));
    });
    if (this.candyGroup) this.candyGroup.visible = false;

    chars.forEach((c) => { c.land(); ui.updatePlayer(c); });
    fx.rainConfetti(new THREE.Vector3(0, 6, 0), 16, 80, 10);
    audio.yay();
    await this.ctx.banner(
      `<span class="icon">🌈</span>また にじが でたら いこうね!`, 1800,
    );
    await wait(200);
  }

  // ---------- 入力 ----------
  _waitTap(timeoutMs = 4000, why = 'tap') {
    const { ui } = this.ctx;
    ui.showTapLayer(true);
    return new Promise((resolve) => {
      let done = false;
      const finish = (byTap) => {
        if (done) { dbg.push({ kind: 'input-reject', id: 'candy', why: 'already-done' }); return; }
        done = true;
        dbg.push(byTap
          ? { kind: 'input-accept', id: 'candy', why }
          : { kind: 'input-reject', id: 'candy', why: `timeout-${why}` });
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
    if (!this._tapHandler) { dbg.push({ kind: 'input-reject', id: 'candy', why: 'not-waiting' }); return; }
    this._tapHandler(true);
  }

  // ---------- 小道具 ----------

  _tileLocal(i) {
    const count = CONFIG.CANDY_TILE_COUNT;
    const a = (i / count) * TAU;
    const r = CONFIG.CANDY_RING_RADIUS;
    return new THREE.Vector3(Math.cos(a) * r, 0.5, Math.sin(a) * r);
  }

  _tileWorldPos(i, char, slot = 0) {
    const local = this._tileLocal(i);
    const p = local.clone();
    p.y += CONFIG.CANDY_LIFT + 0.55;
    if (char) {
      const a = (slot / 4) * TAU + 0.6;
      p.add(new THREE.Vector3(Math.cos(a) * 0.42, 0, Math.sin(a) * 0.42));
    }
    return p;
  }

  // おかしじま12マス。Tile も TILE_TYPES も使わない専用メッシュである。
  _buildCandyIsland() {
    const { scene } = this.ctx;
    const g = new THREE.Group();
    g.position.set(0, CONFIG.CANDY_LIFT, 0);
    this.ring = buildCandyRing(rand, CONFIG.CANDY_TILE_COUNT);

    // 生クリームの雲(土台)
    const creamMat = toonMat(0xfff8ee);
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * TAU;
      const puff = new THREE.Mesh(new THREE.SphereGeometry(3.4, 12, 10), creamMat);
      puff.position.set(Math.cos(a) * CONFIG.CANDY_RING_RADIUS, -1.5, Math.sin(a) * CONFIG.CANDY_RING_RADIUS);
      puff.scale.y = 0.55;
      g.add(puff);
    }
    const core = new THREE.Mesh(new THREE.SphereGeometry(7.5, 16, 12), creamMat);
    core.position.y = -2.2;
    core.scale.y = 0.42;
    g.add(core);

    // 12マス
    for (let i = 0; i < CONFIG.CANDY_TILE_COUNT; i++) {
      const kind = this.ring[i];
      const look = CANDY_LOOK[kind] || CANDY_LOOK.candy;
      const tg = new THREE.Group();
      const mat = toonMatUnique(look.color, {
        emissive: look.glow, emissiveIntensity: 0.25,
      });
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.3, 0.42, 20), mat);
      tg.add(disc);
      tg.add(this._candyIcon(kind));
      const local = this._tileLocal(i);
      tg.position.copy(local);
      g.add(tg);
      this.tiles.push({ group: tg, mat, kind, local });
    }

    scene.add(g);
    this.candyGroup = this._own(g);
  }

  // マスの中身を 形で見せる(文字は使わない)
  _candyIcon(kind) {
    const g = new THREE.Group();
    g.position.y = 0.32;
    if (kind === 'star') {
      const star = new THREE.Mesh(starGeometry(0.5, 0.24, 0.16), toonMatUnique(0xfff1b0, {
        emissive: 0xffcf4d, emissiveIntensity: 0.6,
      }));
      star.rotation.x = -Math.PI / 2;
      star.position.y = 0.28;
      g.add(star);
    } else if (kind === 'cake') {
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.68, 0.5, 16), toonMat(0xfff1d0));
      body.position.y = 0.25;
      const cream = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.66, 0.16, 16), toonMat(0xffffff));
      cream.position.y = 0.56;
      const berry = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), toonMat(0xff5c5c));
      berry.position.y = 0.72;
      g.add(body, cream, berry);
    } else if (kind === 'choco') {
      for (let k = 0; k < 4; k++) {
        const bar = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.18, 0.34), toonMat(0x6b4326));
        bar.position.set((k % 2) * 0.38 - 0.19, 0.2 + Math.floor(k / 2) * 0.2, Math.floor(k / 2) * 0.38 - 0.19);
        g.add(bar);
      }
    } else if (kind === 'cookie') {
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.16, 16), toonMat(0xd9a86a));
      disc.position.y = 0.2;
      g.add(disc);
      for (let k = 0; k < 4; k++) {
        const a = (k / 4) * TAU;
        const chip = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), toonMat(0x5a3a20));
        chip.position.set(Math.cos(a) * 0.24, 0.3, Math.sin(a) * 0.24);
        g.add(chip);
      }
    } else {
      // 🍭 あめ。まるいハートと ぼう。
      const head = new THREE.Mesh(heartGeometry(0.46, 0.14), toonMat(0xff5c8d));
      head.rotation.x = -Math.PI / 2;
      head.position.y = 0.6;
      const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.55, 8), toonMat(0xffffff));
      stick.position.y = 0.3;
      g.add(head, stick);
    }
    return g;
  }

  // ⭐ を取ったあと、そのマスを 🍪 の見ためへ変える
  _retint(index, kind) {
    const t = this.tiles[index];
    if (!t) return;
    const look = CANDY_LOOK[kind] || CANDY_LOOK.cookie;
    t.kind = kind;
    this.ring[index] = kind;
    t.mat.color.set(look.color);
    t.mat.emissive.set(look.glow);
  }

  dispose() {
    const { world, ui, chars } = this.ctx;
    // 途中で止まっても 虹は もとの大きさへ戻す(_updateWeather が次のフレームで引き取る)
    this.rainbowScale = 1;
    if (world.rainbowGroup) world.rainbowGroup.scale.setScalar(1);
    ui.showTapLayer(false);
    ui.showDice(false);
    this._tapHandler = null;
    // おかしじまに 取り残された子を 本島へ おろす
    chars.forEach((c) => {
      if (!this.onRing.has(c)) return;
      c.root.position.copy(world.tileAnchor(c.tileIndex)).add(this.ctx.charOffset(c));
      c.setHopHeight(0);
      c.land();
    });
    this.onRing.clear();
    this.advance.clear();
    this.gained.clear();
    super.dispose();
    this.tiles.forEach((t) => t.mat?.dispose?.());
    this.tiles = [];
    this.candyGroup = null;
  }
}
