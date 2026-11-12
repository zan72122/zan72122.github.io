// 小さなトゥイーンキューと補間関数。
// board.js・world.js・worldevents/* が共有する。
// board.js の中に置いたままだと worldevents/* との循環importができてしまうので、
// 依存を持たない独立ファイルへ切り出してある。
// config.js だけは import している(?turbo=)。config.js が import するのは rules.js
// (import 無しの純関数だけ)なので、ここから循環はできない。

import { TURBO } from './config.js';

// ミリ秒だけ待つ(バナー表示・間の取り方に使う)。
// ゲーム内の setTimeout 待ちは すべてここを通るので、テストの加速は この1か所で効く。
// ?turbo= が無ければ TURBO は 1 で、従来と1ミリ秒も変わらない。
export const wait = (ms) => new Promise((r) => setTimeout(r, ms / TURBO));

// 追加したトゥイーンを毎フレームまとめて進める。
// 進行は board.update(dt) が一本だけ駆動する(dt は timeScale 適用ずみ)。
export class Tweens {
  constructor() { this.list = []; }

  // dur 秒かけて onUpdate(k) を k=0..1 で呼ぶ。終わると Promise が resolve する。
  add(dur, onUpdate) {
    return new Promise((res) => this.list.push({ t: 0, dur, onUpdate, res }));
  }

  update(dt) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const tw = this.list[i];
      tw.t += dt;
      const k = Math.min(1, tw.t / tw.dur);
      tw.onUpdate(k);
      if (k >= 1) {
        this.list.splice(i, 1);
        tw.res();
      }
    }
  }
}

// おわりがゆっくり(着地・ズームアウト)
export const easeOut = (k) => 1 - (1 - k) * (1 - k);
// はじめとおわりがゆっくり(ホップ・島の変形)
export const easeInOut = (k) => k * k * (3 - 2 * k);
