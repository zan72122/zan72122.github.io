// 4歳児が一工程を気持ちよく終えられるための調整値。
// 操作の判定と表示時間を一か所に集め、端末ごとの調整をしやすくする。
export const GAME_PACING = Object.freeze({
  coachDisplayMs: 2200,
  journeySegments: 6,
  measureSnapHoldSeconds: 0.75,
  clampTurns: Math.PI * 2 * 0.8,
  sawTravelMultiplier: 1.2,
  sandCoverage: 0.45,
  sandMaxSeconds: 5.5,
  nailTaps: 2,
  paintCoverage: 0.45,
  paintMaxSeconds: 5.5,
});

// 操作の軌道を示す点は、作業面から離して薄く表示する。
// 最大サイズより持ち上げ量を大きくし、木や道具へ重ならないようにする。
export const GUIDANCE_VISUALS = Object.freeze({
  count: 6,
  baseScale: 0.022,
  pulseScale: 0.014,
  baseOpacity: 0.1,
  pulseOpacity: 0.48,
  lift: 0.048,
  bob: 0.006,
});
