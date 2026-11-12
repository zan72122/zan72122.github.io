import { mobilePixelRatio } from './mobile-quality.js';
// 描画品質の段階調整。判定・速度・触れる範囲は品質に依存しない。
// 内部画素数: 高 約150万 / 中 約110万 / 低 約75万。実効ピクセル比は最大 1.5。
export const LEVELS = [
  { name: 'high', pixels: 1.5e6, shadowEvery: 1, snailEvery: 1 },
  { name: 'mid', pixels: 1.1e6, shadowEvery: 2, snailEvery: 1 },
  { name: 'low', pixels: 0.75e6, shadowEvery: 4, snailEvery: 2 },
];
export const MAX_DPR = 1.5;

export function pixelRatioFor(level, cssW, cssH, dpr) {
  const budget = LEVELS[level].pixels;
  const byBudget = Math.sqrt(budget / Math.max(1, cssW * cssH));
  return Math.max(0.5, Math.min(dpr, MAX_DPR, mobilePixelRatio(byBudget, cssW, cssH)));
}

// 処理落ちが続けば下げ、十分余裕が続けば上げる。往復を防ぐため待機幅を置く。
export function createQualityGovernor(opts = {}) {
  const g = {
    level: opts.start ?? 0,
    forced: opts.forced ?? null,
    lastChange: -1e9,
    samples: [],
    changes: [],
  };
  if (g.forced !== null) g.level = g.forced;
  g.push = (now, dt) => {
    // 起動直後(シェーダーの準備などで一時的に遅い)は判定しない
    if (g.startedAt === undefined) { g.startedAt = now; g.lastChange = now; }
    g.samples.push({ now, dt });
    while (g.samples.length && now - g.samples[0].now > 10000) g.samples.shift();
  };
  const avg = (now, ms) => {
    let s = 0, n = 0;
    for (let i = g.samples.length - 1; i >= 0 && now - g.samples[i].now <= ms; i--) { s += g.samples[i].dt; n++; }
    return n > 10 ? s / n : null;
  };
  // 戻り値: 変更があれば新しい段階
  g.evaluate = (now) => {
    if (g.forced !== null) return null;
    if (now - g.lastChange < 6000) return null; // 変更直後は様子見
    const short = avg(now, 2500);
    const long = avg(now, 9000);
    if (short !== null && short > 1000 / 26 && g.level < LEVELS.length - 1) {
      g.level++;
      g.lastChange = now;
      g.samples.length = 0;
      g.changes.push({ t: now, level: g.level, why: 'slow', ms: short });
      return g.level;
    }
    if (long !== null && now - g.lastChange > 20000 && long < 1000 / 50 && g.level > 0) {
      g.level--;
      g.lastChange = now;
      g.samples.length = 0;
      g.changes.push({ t: now, level: g.level, why: 'fast', ms: long });
      return g.level;
    }
    return null;
  };
  return g;
}
