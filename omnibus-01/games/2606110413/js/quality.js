import { CONFIG } from './config.js';

// 段階的な自動品質制御。
//   Stage 0: Bloom ON  + DPR 2
//   Stage 1: Bloom OFF + DPR 2
//   Stage 2: Bloom OFF + DPR 1.5
//   Stage 3: さらにビーム非表示・破片半減(購読側が対応)
// 起動3秒後から2秒窓の平均フレームタイムで判断し、遅ければ1段ずつ降格。
// 昇格はしない(プレイ中の画質変動は子供に分かりやすいノイズになるため)。
// ?stage=N で固定可能(ヘッドレス検証用)。

export class Quality {
  constructor(renderer, postfx, onApply) {
    this.renderer = renderer;
    this.postfx = postfx;
    this.onApply = onApply || (() => {});
    this.listeners = [];

    const param = new URLSearchParams(location.search).get('stage');
    this.fixed = param !== null;
    this.stage = this.fixed ? Math.min(3, Math.max(0, parseInt(param, 10) || 0)) : 0;

    this.windowStart = 3;   // 計測開始(起動からの秒)
    this.accum = 0;
    this.count = 0;
    this.windowsLeft = 3;   // 最大3窓で打ち切り
    this.done = this.fixed;

    this.apply();
  }

  get bloomOn() { return this.stage === 0 && this.renderer.capabilities.isWebGL2; }
  get pixelRatio() {
    const max = this.stage >= 2 ? CONFIG.lowPixelRatio : CONFIG.maxPixelRatio;
    return Math.min(window.devicePixelRatio, max);
  }

  apply() {
    this.postfx.enabled = this.bloomOn;
    this.renderer.setPixelRatio(this.pixelRatio);
    this.onApply(this.stage);
    for (const fn of this.listeners) fn(this.stage);
  }

  onStageChange(fn) { this.listeners.push(fn); }

  // 毎フレーム呼ぶ。rawDt はクランプ前のフレームタイム(秒)
  frame(rawDt, elapsed) {
    if (this.done || elapsed < this.windowStart) return;
    this.accum += rawDt;
    this.count++;
    if (this.accum < 2) return;

    const avgMs = (this.accum / this.count) * 1000;
    this.accum = 0;
    this.count = 0;
    if (avgMs > CONFIG.slowFrameMs && this.stage < 3) {
      this.stage++;
      this.apply();
      this.windowsLeft--;
      if (this.windowsLeft <= 0) this.done = true;
    } else {
      this.done = true; // 十分速い(または底)なので計測終了
    }
  }
}
