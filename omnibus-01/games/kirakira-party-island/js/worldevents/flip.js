// 🙃 さかさま じま(W-08)
//
// 空に大きな 🙃 の雲が出て、カメラが180度ロールし、空と海の いろが入れかわる。
// そのラウンドのあいだ サイコロの目のぶん **うしろ** へ進み、
// 通過したコインは着地マスも ふくめて ぜんぶ ひろえる(board.moveMods.coinPickupAll)。
// マイナスサイコロ × 逆走 = 前進である。
//
// **islandGroup は回さない**(設計書 4.5 の結論)。
// 効果がラウンド全体に及ぶあいだ、_tileEvent から どうくつ(scene 直下)や
// カメ・ロープウェイ(islandGroup 配下)が呼ばれるので、島を反転させたままだと
// 座標系が破れる。カメラのロールと 天気 upsidedown の色だけで「さかさま」を出す。
//
// 反転もどしは ctx.onRoundEnd に置いて board のラウンド末に走らせる(設計書 8章 #2)。

import * as THREE from '../../vendor/three.module.min.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;

// 絵文字1字の板をつくる。文字が読めなくても「🙃」だけは伝わる。
function emojiSprite(emoji, size = 256) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const c = canvas.getContext('2d');
  c.clearRect(0, 0, size, size);
  c.font = `${Math.floor(size * 0.78)}px system-ui, "Apple Color Emoji", sans-serif`;
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(emoji, size / 2, size / 2 + size * 0.04);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class FlipEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.cloud = null;
    this.cloudTex = null;
    this.rolled = false;
    this._seen = new Map();   // char → { from, to, steps, coins } ラウンド中の逆走の記録
    this._t = 0;
  }

  async run() {
    await this._trigger();     // ① きっかけ 6秒
    await this._flip();        // ② 変化 10秒
    // ③ 遊び:そのラウンド ぜんぶ。moveMods を立てて即 resolve する。
    this.stage = 'play';
    this.ctx.moveMods.reversed = true;
    this.ctx.moveMods.coinPickupAll = true;
    // ラウンド中の逆走を4人ぶん数えはじめる(update が1フレーム1回だけ見る)
    this.ctx.chars.forEach((c) => this._seen.set(c, {
      from: c.tileIndex, to: c.tileIndex, back: 0, fwd: 0, coins: c.coins,
    }));
    // ④ 収束:反転もどしは board のラウンド末(ミニゲームの直前)に任せる。
    this.ctx.onRoundEnd = () => this._restore();
    dbg.push({
      kind: 'state', id: 'flip', from: 'change', to: 'play',
      why: `reversed=${this.ctx.moveMods.reversed}`
        + ` coinPickupAll=${this.ctx.moveMods.coinPickupAll}`
        + ` onRoundEnd=set roll=${this.ctx.rig.roll.toFixed(3)}`,
    });
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;
    // ラウンド中の1マスずつの移動を1フレーム1回だけ拾う。
    // 逆走(back)と 前進(fwd)を分けて数え、ログは _restore で1件にまとめる。
    if (this._seen.size) {
      const count = this.ctx.world.tileCount;
      for (const [c, m] of this._seen) {
        if (c.tileIndex === m.to) continue;
        const d = ((c.tileIndex - m.to) % count + count) % count;
        if (d === count - 1) m.back += 1; else m.fwd += d;
        m.to = c.tileIndex;
      }
    }
    if (this.cloud) {
      this.cloud.position.y = this._cloudY + Math.sin(this._t * 0.9) * 1.2;
      this.cloud.material.rotation = Math.sin(this._t * 0.6) * 0.18;
    }
  }

  // ---------- ① きっかけ(約6秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { rig, audio, tweens, wait } = this.ctx;
    rig.setOverview();
    audio.stopBgm();
    audio.whoosh();
    audio.tone({ freq: 260, type: 'sine', dur: 1.4, vol: 0.2, slide: 900 });

    this._buildCloud();

    // ゆっくり時間が とまったように
    this.ctx.setTimeScale(0.35);
    setTimeout(() => this.ctx.setTimeScale(1), 1500);

    // 雲がふわっと大きくなる
    await tweens.add(1.4, (k) => {
      this.cloud.scale.setScalar(2 + k * 14);
      this.cloud.material.opacity = Math.min(1, k * 2);
    });
    await this.ctx.banner(
      '<span class="icon">🙃</span>さかさま じま!<span class="sub">せかいが ひっくりかえる!</span>',
      2600,
    );
    await wait(600);
  }

  // ---------- ② 変化(約10秒) ----------
  async _flip() {
    this.stage = 'change';
    const { chars, rig, audio, tweens, fx } = this.ctx;

    audio.warp();
    rig.setRoll(Math.PI, 2.5);      // 一定速で回すので ゆりもどしが出ない(4歳児が酔わない)
    this.rolled = true;
    dbg.push({
      kind: 'state', id: 'flip', from: 'trigger', to: 'change',
      why: `roll=${rig.roll.toFixed(3)} weather=${this.ctx.world.weatherName}`,
    });

    // 天気 upsidedown(空と海の いろの入れかえ)は board の weatherOverride が すでに当てている。
    // ロールの2.5秒 + 色が lerp しきる ぶんを 6秒 かけて見せる。
    await tweens.add(6, (k) => {
      // 4人が その場で くるんと1回転する
      chars.forEach((c, i) => {
        c.inner.rotation.z = Math.sin(Math.min(1, k * 1.4) * Math.PI) * TAU * 0.5;
        c.setHopHeight(Math.sin(Math.min(1, k * 1.4) * Math.PI) * (0.8 + i * 0.05));
      });
      this.cloud.material.opacity = Math.max(0, 1 - k * 1.6);
    });
    chars.forEach((c) => { c.inner.rotation.z = 0; c.setHopHeight(0); c.land(); });
    if (this.cloud) this.cloud.visible = false;

    audio.startBgm('board:flip');
    fx.rainConfetti(new THREE.Vector3(0, 8, 0), 12, 80, 8);
    await this.ctx.banner(
      '<span class="icon">🔁</span>サイコロの ぶんだけ うしろへ すすむよ!'
      + '<span class="sub">とおった 🔵コインは ぜんぶ もらえる!</span>',
      3000,
    );
  }

  // ---------- ④ 収束(約8秒。board のラウンド末から呼ばれる) ----------
  async _restore() {
    this.stage = 'settle';
    const { chars, rig, audio, tweens, fx, wait } = this.ctx;
    this.ctx.moveMods.reversed = false;
    this.ctx.moveMods.coinPickupAll = false;

    // 結果反映は この1件だけ。ラウンド中の逆走(back)と 通過コイン(coins の増分)、
    // moveMods を たしかに もどしたことを ここで数えられるようにする。
    dbg.push({
      kind: 'result', id: 'flip', why: 'flip-restore',
      from: `roll=${rig.roll.toFixed(3)}`,
      to: `reversed=${this.ctx.moveMods.reversed}`
        + ` coinPickupAll=${this.ctx.moveMods.coinPickupAll}`
        + ` mods=${Object.values(this.ctx.moveMods).filter(Boolean).length}`,
      chars: chars.map((c) => {
        const m = this._seen.get(c)
          || { from: c.tileIndex, back: 0, fwd: 0, coins: c.coins };
        return {
          id: c.def.id, from: m.from, to: c.tileIndex,
          back: m.back, fwd: m.fwd, gained: c.coins - m.coins,
        };
      }),
    });
    this._seen.clear();

    rig.setOverview();
    audio.warp();
    rig.setRoll(0, 2.5);
    this.rolled = false;

    // くるんと もどって、4人とも しりもち
    await tweens.add(3, (k) => {
      chars.forEach((c) => {
        c.inner.rotation.z = Math.sin(Math.min(1, k * 1.6) * Math.PI) * TAU * 0.5;
        c.setHopHeight(Math.sin(Math.min(1, k * 1.6) * Math.PI) * 0.9);
      });
    });
    chars.forEach((c) => { c.inner.rotation.z = 0; c.setHopHeight(0); c.land(); });
    for (let i = 0; i < 4; i++) {
      audio.boing();
      fx.dustPuff(chars[i].root.position, 4);
      await wait(180);
    }

    audio.yay();
    chars.forEach((c) => c.setMode('cheer'));
    await this.ctx.banner(
      '<span class="icon">😆</span>もとに もどった!<span class="sub">おかしかったね</span>',
      2200,
    );
    chars.forEach((c) => c.setMode('idle'));
    dbg.push({
      kind: 'state', id: 'flip', from: 'settle', to: 'done',
      why: `roll=${rig.roll.toFixed(3)} now=${rig._roll.toFixed(3)}`
        + ` reversed=${this.ctx.moveMods.reversed} weather=${this.ctx.world.weatherName}`,
    });
  }

  // ---------- 小道具 ----------

  // 空に出る 🙃 の雲。スプライトなので つねに カメラを向く(ロールしても読める)。
  _buildCloud() {
    const { scene } = this.ctx;
    this.cloudTex = emojiSprite('🙃');
    const mat = new THREE.SpriteMaterial({
      map: this.cloudTex, transparent: true, opacity: 0, depthWrite: false, fog: false,
    });
    const s = new THREE.Sprite(mat);
    this._cloudY = 30;
    s.position.set(0, this._cloudY, -14);
    s.scale.setScalar(2);
    scene.add(s);
    this.cloud = this._own(s);
  }

  dispose() {
    const { rig, chars } = this.ctx;
    // 途中で止まっても カメラのロールと キャラの姿勢は かならず もどす
    this.ctx.moveMods.reversed = false;
    this.ctx.moveMods.coinPickupAll = false;
    if (this.rolled) rig.setRoll(0, 0.8);
    chars.forEach((c) => { c.inner.rotation.z = 0; c.setHopHeight(0); });
    this.rolled = false;
    super.dispose();
    this.cloudTex?.dispose?.();
    this.cloud = null;
    this.cloudTex = null;
  }
}
