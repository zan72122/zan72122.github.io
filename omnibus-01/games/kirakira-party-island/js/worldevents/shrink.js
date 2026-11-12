// 🫧 しまが ちっちゃく なっちゃった(W-19)
//
// このラウンドだけ **world.tileCount が 48 → 24 になる**。奇数マスが海へ沈み、
// 島ぜんたいが 62% に相似縮小して、4人が ぎゅうぎゅうに集まって遊ぶ。
//
// board._moveCharacter は `count = world.tileCount` を読むだけなので **1行も触らない**
// (これが設計書 5.3 の狙いである)。かわりに world 側で3つを片づける。
//   A. tileAngle / tilePosition の count 引数(＋半径にも TERRAIN.shrink を掛ける)
//   B. currentLayout() が _layoutOverride(rules.shrinkLayout が作る24枚)を先に見る
//   C. zoneOfTile に world.tileCount を渡す(board.js 3か所・debug.js 1か所)
//
// 沈める 24枚の Tile は **dispose しない**。islandGroup から外して world._shrinkBackup に
// 控えておくだけである(設計書 9.12 #4。this._own() に渡してはならない)。
//
// ラウンド末に 48マスへ戻す。最終ラウンドの固定発火にはしない(設計書 9.9 の結論2)。

import * as THREE from '../../vendor/three.module.min.js';
import { CONFIG } from '../config.js';
import { relocationFee, remapTileIndex, restoreTileIndex } from '../rules.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;
// 24マス盤では のりものメッシュが隠れる(rides.refit)。対応するマスの型は COIN へ退避する。
const RIDE_TYPES = new Set(['TURTLE', 'ROPEWAY', 'COASTER']);

export class ShrinkEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.keep = null;          // 残したマスの もとの index(長さ 24)
    this.wasSunk = [];         // 沈んだマスの上に居たか(4人ぶん)
    this.fees = [];
    this.bubbles = [];
    this.shrunk = false;
    this._t = 0;
  }

  async run() {
    await this._trigger();     // ① きっかけ 5秒
    await this._shrink();      // ② 変化 12秒
    await this._settleChars(); // ③ 遊び 4秒
    await this._defer();       // ④ 収束 5秒
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    this.bubbles.forEach((b, i) => {
      b.position.y += dt * (1.6 + (i % 3) * 0.4);
      b.rotation.y += dt * 0.8;
      const m = b.material;
      if (m) m.opacity = Math.max(0, m.opacity - dt * 0.28);
      if (b.position.y > 18) {
        b.position.y = 0.5;
        if (m) m.opacity = 0.45;
      }
    });
  }

  // ---------- ① きっかけ(約5秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { world, audio, rig, wait } = this.ctx;
    rig.setOverview();
    audio.stopBgm();
    audio.noise({ dur: 2.2, vol: 0.18, filterFreq: 520 });   // 空気が抜ける音
    this.ctx.punch(0.8);
    dbg.push({
      kind: 'state', id: 'shrink', from: 'idle', to: 'trigger',
      why: `count=${world.tileCount} scale=${CONFIG.SHRINK_SCALE}`,
    });
    this._buildBubbles();
    await this.ctx.banner(
      '<span class="icon">🫧</span>しまが ちいさく なる!<span class="sub">ぎゅうぎゅうに あつまろう</span>',
      2600,
    );
    await wait(400);
  }

  // ---------- ② 変化(約12秒) ----------
  async _shrink() {
    this.stage = 'change';
    const { world, chars, fx, audio, tweens, wait } = this.ctx;
    audio.startBgm('board:ice');

    // 沈むマスの位置を先に控えて、水しぶきを出す
    const sinking = [];
    for (let i = 1; i < world.tileCount; i += CONFIG.SHRINK_KEEP_EVERY) {
      const t = world.tiles[i];
      if (t) sinking.push(world.islandGroup.localToWorld(t.pos.clone()));
    }
    // 残るマスの いまの位置(48マス系)。あとで最終位置へ lerp する。
    const beforePos = new Map();
    for (const t of world.tiles) beforePos.set(t, t.pos.clone());

    const before = chars.map((c) => c.tileIndex);
    const keep = world.shrinkBoard(CONFIG.SHRINK_KEEP_EVERY);
    this.keep = keep;
    this.shrunk = true;
    const keepSet = new Set(keep);
    this.wasSunk = before.map((idx) => !keepSet.has(idx));

    // 24マス盤では のりものが隠れる。3種の型を COIN へ退避する(split と同じ扱い)。
    const layout24 = world.currentLayout();
    for (let i = 0; i < world.tiles.length; i++) {
      if (!RIDE_TYPES.has(layout24[i])) continue;
      layout24[i] = 'COIN';
    }
    world.repaintBoard(layout24);

    // 4人の tileIndex を 24マス系へ(board 側に一括で頼む唯一の ctx フィールド)
    this.ctx.remapTiles((idx) => remapTileIndex(idx, keep, world.tileCount));
    const after = chars.map((c) => c.tileIndex);

    dbg.push({
      kind: 'state', id: 'shrink', from: 'trigger', to: 'change',
      why: `count=48→24 keep=${keep.join(',')} star=${world.starTileIndex}`,
      chars: chars.map((c, i) => ({
        id: c.def.id, from: before[i], to: after[i], sunk: this.wasSunk[i],
      })),
    });

    // 島が 62% へ縮む。頂点は reshapeIsland が lerp するが、
    // TERRAIN.shrink は tween の前に確定するので(設計書の reshapeIsland 実装)、
    // マスの位置だけは ここで「変化前 → 最終」を自分で lerp する。
    let finalPos = null;
    let splashed = 0;
    let refitted = false;
    await world.reshapeIsland({
      to: { shrink: CONFIG.SHRINK_SCALE },
      seconds: 12,
      tweens,
      onFrame: (e) => {
        world.refreshAnchors({ tiles: true });
        if (!finalPos) {
          finalPos = new Map();
          for (const t of world.tiles) finalPos.set(t, t.pos.clone());
        }
        for (const t of world.tiles) {
          const from = beforePos.get(t);
          const to = finalPos.get(t);
          if (!from || !to) continue;
          t.pos.lerpVectors(from, to, e);
          t.group.position.copy(t.pos);
        }
        this.ctx.rideIsland();
        if (!refitted) { refitted = true; world.rides?.refit?.(); }
        if (e > splashed * 0.045 && splashed < sinking.length) {
          const p = sinking[splashed++];
          fx.sparkleBurst(p, 5, 0x9fd8ff, 1.1);
          if (splashed % 4 === 0) audio.splash();
        }
      },
    });
    world.refreshAnchors({ tiles: true, decor: true, rides: true });
    this.ctx.rideIsland();
    audio.chime(2);
    await wait(300);
  }

  // ---------- ③ 遊び(約4秒) ----------
  async _settleChars() {
    this.stage = 'play';
    const { world, chars, rig, ui, fx, audio, wait } = this.ctx;

    // 4人を 残ったマスへ きちんと着地させる
    for (const c of chars) {
      rig.setFollow(c);
      c.setMode('hop');
      await this.ctx.hopTo(c, c.tileIndex, 0.45);
      c.setMode('idle');
    }
    rig.setOverview();

    // 沈んだマスに居た子へ お引越し代
    this.fees = this.wasSunk.map((sunk) => relocationFee(sunk, CONFIG.SHRINK_FEE));
    chars.forEach((c, i) => {
      if (!this.fees[i]) return;
      c.coins += this.fees[i];
      c.setMode('cheer');
      audio.coin(i);
      fx.coinBurst(c.root.position.clone().add(new THREE.Vector3(0, 0.9, 0)), 5);
      ui.updatePlayer(c);
    });
    dbg.push({
      kind: 'result', id: 'shrink', why: 'shrink-fee',
      from: `count=${world.tileCount}`, to: `fee=${this.fees.join(',')}`,
      chars: chars.map((c, i) => ({
        id: c.def.id, tileIndex: c.tileIndex, sunk: this.wasSunk[i],
        fee: this.fees[i], coins: c.coins,
      })),
    });
    if (this.fees.some((f) => f > 0)) {
      await this.ctx.banner(
        `<span class="icon">📦</span>おひっこし だい!<span class="sub">🪙${CONFIG.SHRINK_FEE}まい</span>`,
        1800,
      );
    }
    chars.forEach((c) => c.setMode('idle'));
    await wait(200);
  }

  // ---------- ④ 収束(約5秒) ----------
  async _defer() {
    this.stage = 'settle';
    const { world, chars, fx, audio, wait } = this.ctx;
    audio.yay();
    fx.rainConfetti(new THREE.Vector3(0, 5, 0), 12, 60, 8);
    chars.forEach((c) => c.setMode('cheer'));

    // _pendingRoundEnd は1本ぶんしか持てない。仕掛ける前に空だったことを記録する(9.12 #15)。
    const wasEmpty = !this.ctx.onRoundEnd;
    this.ctx.onRoundEnd = () => this._grow();
    dbg.push({
      kind: 'state', id: 'shrink', from: 'play', to: 'settle',
      why: `deferred count=${world.tileCount} onRoundEnd=set prevEmpty=${wasEmpty}`,
    });
    await this.ctx.banner(
      '<span class="icon">🫧</span>このラウンドは ちいさい しまで あそぼう!',
      2000,
    );
    chars.forEach((c) => c.setMode('idle'));
    await wait(200);
  }

  // ---------- ⑤ ラウンド末(約8秒) ----------
  async _grow() {
    const { world, chars, ui, fx, audio, tweens, wait } = this.ctx;
    audio.boing();
    ui.showBanner('<span class="icon">🎈</span>しまが もどる!', 1600);

    // 1. 盤面を 48マスへ。tiles / _layoutOverride / starTileIndex / boardOffset が戻る。
    const beforePos = new Map();
    for (const t of world.tiles) beforePos.set(t, t.pos.clone());
    const keep = world.restoreBoard() || this.keep || [];
    this.shrunk = false;

    // 2. 4人を 48マス系へ
    const before = chars.map((c) => c.tileIndex);
    this.ctx.remapTiles((idx) => restoreTileIndex(idx, keep));

    // 3. 島を もとの大きさへ。マスの位置は 自分で lerp する(変化のときと同じ理由)。
    let finalPos = null;
    await world.reshapeIsland({
      to: { shrink: 1 },
      seconds: 8,
      tweens,
      onFrame: (e) => {
        world.refreshAnchors({ tiles: true });
        if (!finalPos) {
          finalPos = new Map();
          for (const t of world.tiles) finalPos.set(t, t.pos.clone());
        }
        for (const t of world.tiles) {
          const to = finalPos.get(t);
          if (!to) continue;
          // 沈んでいた24枚は 縮んだ島のうえには居なかったので、
          // 最終位置を 縮小率ぶん内側へ寄せた点を「変化前」とみなす。
          const from = beforePos.get(t)
            || to.clone().multiplyScalar(CONFIG.SHRINK_SCALE);
          t.pos.lerpVectors(from, to, e);
          t.group.position.copy(t.pos);
        }
        this.ctx.rideIsland();
      },
    });

    // 4. 装飾と のりものを 置き直す(refit が3種を再表示する)
    world.refreshAnchors({ tiles: true, decor: true, rides: true });
    this.ctx.rideIsland();

    // 5. 4人を それぞれのマスへ ぽんと着地
    for (const c of chars) {
      c.setMode('hop');
      await this.ctx.hopTo(c, c.tileIndex, 0.4);
      c.setMode('idle');
    }
    audio.fanfare();
    fx.rainConfetti(new THREE.Vector3(0, 6, 0), 18, 80, 12);
    dbg.push({
      kind: 'state', id: 'shrink', from: 'settle', to: 'round-end',
      why: `count=24→48 restored star=${world.starTileIndex} shrink=${world.islandWarp.shrink}`,
      chars: chars.map((c, i) => ({ id: c.def.id, from: before[i], to: c.tileIndex })),
    });
    await this.ctx.banner(
      '<span class="icon">🏝️</span>もどった!<span class="sub">おおきい しまだ</span>', 1800,
    );
    await wait(200);
  }

  // ---------- 小道具 ----------

  // 島のまわりで ぽこぽこ のぼる あわ。空気が抜けていく合図(こわくない)。
  _buildBubbles() {
    const { scene } = this.ctx;
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * TAU;
      const r = 24 + Math.random() * 6;
      const b = new THREE.Mesh(
        new THREE.SphereGeometry(0.5 + Math.random() * 0.5, 10, 8),
        new THREE.MeshBasicMaterial({
          color: 0xdff2ff, transparent: true, opacity: 0.45, depthWrite: false,
        }),
      );
      b.position.set(Math.cos(a) * r, 0.5 + Math.random() * 6, Math.sin(a) * r);
      scene.add(b);
      this.bubbles.push(this._own(b));
    }
  }

  dispose() {
    const { world, ui } = this.ctx;
    // 途中で止まっても 48マス盤と もとの大きさへ かならず戻す。
    // 沈めた Tile は _own() に渡していないので、ここで解放されることはない(9.12 #4)。
    if (world._shrinkBackup) {
      const keep = world.restoreBoard() || [];
      this.ctx.remapTiles((idx) => restoreTileIndex(idx, keep));
    }
    if ((world.islandWarp.shrink ?? 1) !== 1) {
      world.reshapeIsland({ to: { shrink: 1 }, seconds: 0 });
      world.refreshAnchors({ tiles: true, decor: true, rides: true });
      this.ctx.rideIsland();
    }
    this.shrunk = false;
    ui.showTapLayer(false);
    super.dispose();
    this.bubbles = [];
  }
}
