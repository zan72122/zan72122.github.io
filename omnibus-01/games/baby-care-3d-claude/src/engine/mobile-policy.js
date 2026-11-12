export const MIN_TOUCH_TARGET_PX = 44;
export const MOBILE_PIXEL_BUDGET = Object.freeze({
  title: 700_000,
  low: 800_000,
  balanced: 1_100_000
});

const clampTier = value => Math.max(0, Math.min(2, Number(value) || 0));
const positive = (value, fallback) =>
  Number.isFinite(Number(value)) && Number(value) > 0 ? Number(value) : fallback;

/** Capability-based mobile signal; deliberately avoids User-Agent sniffing. */
export function detectTouchEnvironment({
  coarsePointer,
  maxTouchPoints,
  forced
} = {}) {
  // Explicit query override is for repeatable desktop diagnostics only. Real
  // devices continue to use capability detection.
  let override = forced;
  if (override === undefined) {
    const value = new URLSearchParams(globalThis.location?.search || '').get('touch');
    if (value === '1') override = true;
    if (value === '0') override = false;
  }
  if (override !== undefined) return Boolean(override);
  let coarse = coarsePointer;
  if (coarse === undefined) {
    try { coarse = globalThis.matchMedia?.('(pointer: coarse)')?.matches; } catch { coarse = false; }
  }
  const points = maxTouchPoints ?? globalThis.navigator?.maxTouchPoints ?? 0;
  return Boolean(coarse || points > 0);
}

/** Pure tier selection so mobile constraints remain unit-testable. */
export function selectRenderTier({
  forced = null,
  deviceMemory = 4,
  hardwareConcurrency = 4,
  width = 1,
  height = 1,
  devicePixelRatio = 1,
  touch = false
} = {}) {
  if (forced !== null && forced !== undefined) return clampTier(forced);

  const memory = positive(deviceMemory, 4);
  const cores = positive(hardwareConcurrency, 4);
  const physicalPixels = positive(width, 1) * positive(height, 1)
    * positive(devicePixelRatio, 1) ** 2;

  let tier = 2;
  if (memory <= 3 || cores <= 4) tier = 0;
  else if (physicalPixels > 3.2e6 && memory <= 6) tier = 1;

  // Touch hardware often omits deviceMemory and can thermally throttle after
  // a few minutes. Start conservatively; the frame governor still adapts.
  return touch ? Math.min(1, tier) : tier;
}

export function pixelRatioCap(tier, touch = false) {
  if (!touch) return tier <= 0 ? 1.25 : tier === 1 ? 1.6 : 2;
  return tier <= 0 ? 1.1 : tier === 1 ? 1.4 : 1.6;
}

/**
 * Reduce a requested DPR until the drawing buffer fits the pixel budget.
 * Unlike a fixed DPR cap this also protects large iPads in split/full screen.
 */
export function fitPixelRatioToBudget({
  width,
  height,
  requestedRatio,
  maxPixels,
  minimumRatio = 0.5
}) {
  const w = positive(width, 1);
  const h = positive(height, 1);
  const requested = positive(requestedRatio, 1);
  const budget = positive(maxPixels, w * h);
  const budgetRatio = Math.sqrt(budget / (w * h));
  return Math.max(minimumRatio, Math.min(requested, budgetRatio));
}

/** Use the canvas' actual CSS box; it tracks iOS dynamic viewport changes. */
export function canvasCssSize(canvas, view = globalThis) {
  return {
    width: positive(canvas?.clientWidth, positive(view?.innerWidth, 1)),
    height: positive(canvas?.clientHeight, positive(view?.innerHeight, 1))
  };
}

/** Resize only the renderer backing store; CSS remains the layout authority. */
export function setRendererDrawingSize(renderer, width, height) {
  renderer?.setSize?.(positive(width, 1), positive(height, 1), false);
}

/** World-space radius that projects to `pixels` CSS pixels. */
export function perspectiveHitRadius({
  distance,
  verticalFovDegrees,
  viewportHeight,
  pixels = MIN_TOUCH_TARGET_PX
}) {
  const d = positive(distance, 0);
  const h = positive(viewportHeight, 1);
  const fov = positive(verticalFovDegrees, 1) * Math.PI / 180;
  return d * Math.tan(fov / 2) * positive(pixels, MIN_TOUCH_TARGET_PX) / h;
}
