// 🎇 オーロラの ぬりかえ(W-13)
//
// 空から7本のオーロラのカーテンが降りてきて、48マスを1周しながら
// **マスの種別そのものを塗り替える**。良いマスが増え、悪いマスは1枚も増えない。
//
// 島の形(islandHeight)にも islandGroup にも いっさい触らない。動かすのは
//   - world.repaintBoard(next)  … マスの種別(rotateBoard の兄弟。_layoutOverride に載る)
//   - world._paintIsland('aurora', { amount, phase }) … 地面の頂点カラー
//   - 天気 'aurora'(entry.weatherOverride)
// の3つだけである。
//
// 盤面はそのラウンドかぎりで、ctx.onRoundEnd がラウンド末に元へ戻す(設計書 9.6 の結論2)。
// touchesTurn: false のまま onRoundEnd だけを使う初めての本なので、
// board.js の _deferredEvent 経路(dispose と天気の復帰をラウンド末まで待つ)が
// そのまま効いていることを spec が確かめる。

import * as THREE from '../../vendor/three.module.min.js';
import { auroraMaterial } from '../gfx.js';
import { auroraRepaint } from '../rules.js';
import { easeInOut } from '../tween.js';
import { rand } from '../rng.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;
const RIBBONS = 7;             // カーテンの本数
const SWEEP_MS = 125;          // 1マスぶんの塗り替え間隔(48 × 125ms = 6秒)
const PAINT_STEPS = 16;        // 変化の のこり4秒で地面を塗る回数(250ms おき)
const PLAY_SEC = 13;           // 遊び(カメラが盤面を1周する)。実測 47秒 → 45秒以内へ削った
const SETTLE_COINS = 3;        // 見とれたごほうび
const BAD = new Set(['STORM', 'BOMB', 'HOLE']);

export class AuroraEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.ribbons = [];         // { mesh, mat }
    this.before = null;        // 塗り替え前の48枚
    this.after = null;         // 塗り替え後の48枚
    this.changed = [];         // 種別が変わったマス番号
    this.paintAmount = 0;
    this._t = 0;
  }

  async run() {
    await this._trigger();     // ① きっかけ 6秒
    await this._repaint();     // ② 変化 10秒
    await this._show();        // ③ 遊び 13秒
    await this._settle();      // ④ 収束 6秒
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    for (let i = 0; i < this.ribbons.length; i++) {
      const r = this.ribbons[i];
      r.mat.uniforms.uTime.value = this._t + i * 0.8;
      // カーテンが ゆっくり ひらひらする(回転だけ。頂点は触らない)
      r.mesh.rotation.y = r.baseRot + Math.sin(this._t * 0.35 + i) * 0.06;
      r.mesh.position.y = r.baseY + Math.sin(this._t * 0.5 + i * 1.3) * 0.9;
    }
  }

  // ---------- ① きっかけ(約6秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { rig, audio, tweens, wait } = this.ctx;
    rig.setOverview();
    audio.stopBgm();
    audio.chime(0);
    audio.bell(660);
    dbg.push({ kind: 'state', id: 'aurora', from: 'idle', to: 'trigger', why: `ribbons=${RIBBONS}` });

    this._buildRibbons();
    this.ctx.banner(
      '<span class="icon">🎇</span>オーロラが きた!<span class="sub">そらが ゆらゆら ひかるよ</span>',
      2600,
    );
    // 1本 → 7本へ。順ぐりに ふわっと出す。
    await tweens.add(6, (k) => {
      const e = easeInOut(k);
      this.ribbons.forEach((r, i) => {
        const on = Math.min(1, Math.max(0, e * RIBBONS - i));
        r.mat.uniforms.uOpacity.value = 0.55 * on;
        r.mesh.scale.y = 0.25 + 0.75 * on;
      });
    });
    audio.sparkle();
    await wait(200);
  }

  // ---------- ② 変化(約10秒) ----------
  async _repaint() {
    this.stage = 'change';
    const { world, chars, rig, audio, tweens, wait } = this.ctx;
    audio.startBgm('sky');

    this.before = world.currentLayout();
    this.after = auroraRepaint(this.before, chars, world.starTileIndex, rand);
    this.changed = [];
    for (let i = 0; i < this.after.length; i++) {
      if (this.after[i] !== this.before[i]) this.changed.push(i);
    }
    const badBefore = this.before.filter((t) => BAD.has(t)).length;
    const badAfter = this.after.filter((t) => BAD.has(t)).length;

    // 1マスごとの塗り替えは ログに出さない(48件でリングバッファの1/4を食うため。設計書 9.6)。
    dbg.push({
      kind: 'state', id: 'aurora', from: 'trigger', to: 'change',
      why: `before=${this.before.join(',')} after=${this.after.join(',')}`
        + ` bad=${badBefore}->${badAfter} changed=${this.changed.length}`,
    });

    // カーテンが48マスを1周しながら、1マスずつ塗り替える(6秒)。
    // ⭐ のマスは飛ばす。repaintBoard が最後に 'STAR' を入れ直す。
    const n = world.tileCount;
    const camCenter = new THREE.Vector3(0, 1.2, 0);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * TAU;
      rig.setManual(
        new THREE.Vector3(Math.cos(a) * 34, 24, Math.sin(a) * 34), camCenter.clone(),
      );
      if (i !== world.starTileIndex && world.tiles[i]) {
        world.tiles[i].setType(this.after[i]);
        if (i % 4 === 0) audio.tone({ freq: 620 + (i / n) * 520, type: 'sine', dur: 0.1, vol: 0.09 });
      }
      await wait(SWEEP_MS);
    }
    // _layoutOverride を載せる(これをしないと moveStar のたびに盤面が巻きもどる)
    world.repaintBoard(this.after);
    audio.chime(2);

    // のこり4秒で 地面をオーロラ色へ(0.25秒おき。毎フレームは呼ばない)
    for (let s = 0; s < PAINT_STEPS; s++) {
      this.paintAmount = ((s + 1) / PAINT_STEPS) * 0.55;
      world._paintIsland('aurora', { amount: this.paintAmount, phase: this._t * 0.6 });
      await wait(250);
    }
    await tweens.add(0.2, () => {});
  }

  // ---------- ③ 遊び(約13秒) ----------
  async _show() {
    this.stage = 'play';
    const { world, rig, fx, audio, tweens } = this.ctx;
    const badBefore = this.before.filter((t) => BAD.has(t)).length;
    const badAfter = this.after.filter((t) => BAD.has(t)).length;
    dbg.push({
      kind: 'state', id: 'aurora', from: 'change', to: 'play',
      why: `bad=${badBefore}->${badAfter} changed=${this.changed.length}`,
    });

    this.ctx.banner(
      '<span class="icon">✨</span>ぬりかわった!<span class="sub">マスが かわったよ</span>',
      2400,
    );

    // カメラが盤面を1周しながら、変わったマスを順にキラッとさせる
    const center = new THREE.Vector3(0, 1.0, 0);
    let lit = 0;
    await tweens.add(PLAY_SEC, (k) => {
      const a = k * TAU;
      rig.setManual(
        new THREE.Vector3(Math.cos(a) * 30, 17 + Math.sin(a * 2) * 3, Math.sin(a) * 30),
        center,
      );
      const want = Math.floor(k * this.changed.length);
      while (lit < want && lit < this.changed.length) {
        const tile = world.tiles[this.changed[lit]];
        lit++;
        if (!tile) continue;
        fx.sparkleBurst(
          world.islandGroup.localToWorld(tile.pos.clone()).add(new THREE.Vector3(0, 0.7, 0)),
          4, 0xbfe8ff, 0.9,
        );
        if (lit % 5 === 0) audio.coin(0);
      }
      // 地面の縞は ゆっくり流す(0.25秒に1回だけ塗り直す)
      const step = Math.floor(k * PLAY_SEC * 4);
      if (step !== this._lastPaintStep) {
        this._lastPaintStep = step;
        world._paintIsland('aurora', { amount: this.paintAmount, phase: this._t * 0.6 });
      }
    });
    rig.setOverview();
  }

  // ---------- ④ 収束(約6秒) ----------
  async _settle() {
    this.stage = 'settle';
    const { chars, ui, fx, audio, tweens, wait } = this.ctx;
    audio.yay();

    // 見とれたごほうびの コイン。ここが aurora の唯一の数値の変化である。
    chars.forEach((c, i) => {
      c.coins += SETTLE_COINS;
      c.setMode('cheer');
      ui.updatePlayer(c);
      audio.coin(i);
      fx.coinBurst(c.root.position.clone().add(new THREE.Vector3(0, 0.9, 0)), 5);
      fx.sparkleBurst(c.root.position, 8, 0xbfe8ff, 1.2);
    });
    dbg.push({
      kind: 'result', id: 'aurora', why: 'aurora-bonus',
      from: `changed=${this.changed.length}`, to: `bonus=${SETTLE_COINS}`,
      chars: chars.map((c) => ({ id: c.def.id, coins: c.coins, gained: SETTLE_COINS })),
    });

    fx.rainConfetti(new THREE.Vector3(0, 6, 0), 16, 80, 10);
    this.ctx.banner(
      `<span class="icon">🎇</span>きれい!<span class="sub">みんな 🪙${SETTLE_COINS}まい</span>`,
      2200,
    );
    // オーロラが空へ のぼって うすくなる
    await tweens.add(3.2, (k) => {
      const e = easeInOut(k);
      this.ribbons.forEach((r) => {
        r.mat.uniforms.uOpacity.value = 0.55 * (1 - e);
        r.mesh.position.y = r.baseY + 26 * e;
      });
    });
    this.ribbons.forEach((r) => { r.mesh.visible = false; });
    chars.forEach((c) => c.setMode('idle'));

    // ラウンド末に盤面と地面をもどす。_pendingRoundEnd は1本ぶんしか持てないので、
    // 仕掛ける前に空だったことを記録しておく(設計書 9.12 #15)。
    const wasEmpty = !this.ctx.onRoundEnd;
    this.ctx.onRoundEnd = () => this._fadeBack();
    dbg.push({
      kind: 'state', id: 'aurora', from: 'play', to: 'settle',
      why: `bonus=${SETTLE_COINS} onRoundEnd=set prevEmpty=${wasEmpty}`,
    });
    await wait(200);
  }

  // ---------- ⑤ ラウンド末(約3秒) ----------
  async _fadeBack() {
    const { world, ui, audio, wait } = this.ctx;
    audio.chime(1);
    ui.showBanner('<span class="icon">🌅</span>オーロラが きえた<span class="sub">マスが もどったよ</span>', 1600);

    // 地面の色を default へ。0.2秒おきに 12回(_paintIsland を毎フレーム呼ばない)。
    for (let s = 0; s < 12; s++) {
      const amount = this.paintAmount * (1 - (s + 1) / 12);
      world._paintIsland(amount > 0.01 ? 'aurora' : 'default', { amount, phase: this._t * 0.6 });
      await wait(200);
    }
    world._paintIsland('default');
    this.paintAmount = 0;

    // 盤面を もとの並びへ。null を渡すと _layoutOverride を捨てて currentLayout() へ戻る。
    world.repaintBoard(null);
    dbg.push({
      kind: 'state', id: 'aurora', from: 'settle', to: 'round-end',
      why: `restored layout=${world.currentLayout().join(',')} star=${world.starTileIndex}`,
    });
    audio.yay();
  }

  // ---------- 小道具 ----------

  // 空に かかる7本のカーテン。円筒の一部を ひらいた面にして、内側からも見えるようにする。
  _buildRibbons() {
    const { scene } = this.ctx;
    for (let i = 0; i < RIBBONS; i++) {
      const mat = auroraMaterial(i / (RIBBONS - 1));
      const radius = 33 + i * 2.6;
      const height = 26 + (i % 3) * 5;
      const geo = new THREE.CylinderGeometry(
        radius, radius, height, 28, 1, true, 0, TAU * (0.28 + (i % 3) * 0.05),
      );
      const mesh = new THREE.Mesh(geo, mat);
      const baseY = 30 + (i % 4) * 4;
      const baseRot = (i / RIBBONS) * TAU;
      mesh.position.y = baseY;
      mesh.rotation.y = baseRot;
      mesh.renderOrder = 2;
      scene.add(mesh);
      this.ribbons.push({ mesh: this._own(mesh), mat, baseY, baseRot });
    }
  }

  dispose() {
    const { world, ui } = this.ctx;
    // 途中で止まっても 地面の色と盤面の上書きは かならず もどす
    world._paintIsland('default');
    this.paintAmount = 0;
    if (world._layoutOverride) world.repaintBoard(null);
    ui.showTapLayer(false);
    super.dispose();
    this.ribbons.forEach((r) => r.mat?.dispose?.());
    this.ribbons = [];
    this.changed = [];
  }
}
