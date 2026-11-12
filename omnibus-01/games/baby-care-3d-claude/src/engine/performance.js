/* Central performance policy. Keep tunables here so the frame loop, renderer
 * and tests all agree on the same thresholds. */

export const QUALITY = Object.freeze({ LOW: 0, BALANCED: 1, HIGH: 2 });

export const PERFORMANCE_CONFIG = Object.freeze({
  targetFrameMs: 1000 / 30,
  evaluationMs: 1800,
  downgradeP95Ms: 38,
  upgradeP95Ms: 25,
  downgradeCooldownMs: 3500,
  upgradeCooldownMs: 9000,
  titleFps: 12,
  mobilePlayFps: 30,
  mobileFallbackFps: 24,
  immediateDowngradeMs: 100,
  consecutiveSlowMs: 50,
  consecutiveSlowFrames: 2,
  maxFrameMs: 200,
  rates: Object.freeze({
    play: Object.freeze({
      lighting: 30, camera: 60, physics: 30, room: 20, baby: 60,
      activity: 60, fx: 30, ui: 30, focus: 20
    }),
    title: Object.freeze({
      lighting: 10, camera: 12, physics: 0, room: 10, baby: 12,
      activity: 0, fx: 10, ui: 12, focus: 10
    }),
    harness: Object.freeze({
      lighting: 60, camera: 60, physics: 60, room: 60, baby: 60,
      activity: 60, fx: 60, ui: 60, focus: 60
    })
  }),
  mobileRates: Object.freeze({
    play: Object.freeze({
      lighting: 20, camera: 30, physics: 30, room: 15, baby: 30,
      activity: 30, fx: 20, ui: 20, focus: 15
    }),
    title: Object.freeze({
      lighting: 10, camera: 12, physics: 0, room: 10, baby: 12,
      activity: 0, fx: 10, ui: 12, focus: 10
    }),
    harness: Object.freeze({
      lighting: 60, camera: 60, physics: 60, room: 60, baby: 60,
      activity: 60, fx: 60, ui: 60, focus: 60
    })
  }),
  shadowFps: Object.freeze({
    title: 2,
    mobile: 8,
    [QUALITY.LOW]: 15,
    [QUALITY.BALANCED]: 24,
    [QUALITY.HIGH]: 30
  })
});

export function initialQuality(tier) {
  if (tier <= 0) return QUALITY.LOW;
  if (tier === 1) return QUALITY.BALANCED;
  return QUALITY.HIGH;
}

export function roomDetailFor(mode, quality) {
  if (mode === 'title' || quality === QUALITY.LOW) return 'proxy';
  if (quality === QUALITY.BALANCED) return 'reduced';
  return 'full';
}

export function isWarmResourceGrowth(delta, priorDisposals) {
  return priorDisposals >= 2
    && (delta.nodes > 0 || delta.geometries > 0 || delta.textures > 0);
}

export class CadenceScheduler {
  constructor(rates = PERFORMANCE_CONFIG.rates, mode = 'play') {
    this.rates = rates;
    this.mode = mode;
    this.accumulators = new Map();
  }

  setMode(mode) {
    if (!this.rates[mode]) throw new Error(`unknown cadence mode: ${mode}`);
    this.mode = mode;
    this.accumulators.clear();
  }

  run(name, dt, fn) {
    const hz = this.rates[this.mode]?.[name] ?? 60;
    if (hz <= 0) return false;
    if (hz >= 55) {
      fn(dt);
      return true;
    }

    const interval = 1 / hz;
    const elapsed = (this.accumulators.get(name) || 0) + dt;
    if (elapsed + 1e-9 < interval) {
      this.accumulators.set(name, elapsed);
      return false;
    }

    this.accumulators.set(name, elapsed % interval);
    fn(Math.min(elapsed, PERFORMANCE_CONFIG.maxFrameMs / 1000));
    return true;
  }
}

export class FrameBudgetController {
  constructor({
    initial = QUALITY.HIGH,
    maximum = QUALITY.HIGH,
    allowUpgrade = true,
    rapidDowngrade = false,
    config = PERFORMANCE_CONFIG,
    onChange = () => {}
  } = {}) {
    this.config = config;
    this.maximum = maximum;
    this.allowUpgrade = allowUpgrade;
    this.rapidDowngrade = rapidDowngrade;
    this.quality = Math.min(initial, maximum);
    this.onChange = onChange;
    this.mode = 'title';
    this.samples = [];
    this.windowStartedAt = 0;
    this.lastChangeAt = -Infinity;
    this.consecutiveSlow = 0;
  }

  setMode(mode, now = 0) {
    this.mode = mode;
    this.samples.length = 0;
    this.windowStartedAt = now;
    this.consecutiveSlow = 0;
  }

  sample(frameMs, now) {
    if (this.mode !== 'play' || !(frameMs > 0)) {
      return this.quality;
    }
    if (this.rapidDowngrade) {
      const immediateMs = this.config.immediateDowngradeMs ?? Infinity;
      const slowMs = this.config.consecutiveSlowMs ?? Infinity;
      const slowFrames = this.config.consecutiveSlowFrames ?? Infinity;
      this.consecutiveSlow = frameMs >= slowMs ? this.consecutiveSlow + 1 : 0;
      if (frameMs >= immediateMs || this.consecutiveSlow >= slowFrames) {
        this.consecutiveSlow = 0;
        this.samples.length = 0;
        this.windowStartedAt = now;
        this._change(QUALITY.LOW, now, { p95: frameMs, immediate: true });
        return this.quality;
      }
    } else if (frameMs > this.config.maxFrameMs) {
      return this.quality;
    }
    if (!this.windowStartedAt) this.windowStartedAt = now;
    // A long stall is evidence, not an outlier to discard. Capping only keeps
    // one suspension from dominating percentile math for several windows.
    this.samples.push(this.rapidDowngrade
      ? Math.min(frameMs, this.config.maxFrameMs)
      : frameMs);
    if (now - this.windowStartedAt < this.config.evaluationMs) return this.quality;

    const sorted = this.samples.slice().sort((a, b) => a - b);
    const p95 = sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * 0.95))];
    this.samples.length = 0;
    this.windowStartedAt = now;

    let next = this.quality;
    const sinceChange = now - this.lastChangeAt;
    if (p95 > this.config.downgradeP95Ms
      && sinceChange >= this.config.downgradeCooldownMs) {
      next = Math.max(QUALITY.LOW, this.quality - 1);
    } else if (this.allowUpgrade && p95 < this.config.upgradeP95Ms
      && sinceChange >= this.config.upgradeCooldownMs) {
      next = Math.min(this.maximum, this.quality + 1);
    }

    this._change(next, now, { p95 });
    return this.quality;
  }

  _change(next, now, detail) {
    next = Math.min(this.maximum, Math.max(QUALITY.LOW, next));
    if (next === this.quality) return;
    this.quality = next;
    this.lastChangeAt = now;
    this.onChange(next, detail);
  }
}

export class ShadowUpdateGate {
  constructor(config = PERFORMANCE_CONFIG, { mobile = false } = {}) {
    this.config = config;
    this.mobile = mobile;
    this.mode = 'title';
    this.quality = QUALITY.HIGH;
    this.dirty = true;
    this.lastUpdateAt = -Infinity;
    this.updateCount = 0;
  }

  setBudget(mode, quality) {
    this.mode = mode;
    this.quality = quality;
    this.dirty = true;
  }

  request() { this.dirty = true; }

  consume(now, force = false) {
    if (!this.dirty && !force) return false;
    const fps = this.mode === 'title'
      ? this.config.shadowFps.title
      : this.mobile ? this.config.shadowFps.mobile
      : this.config.shadowFps[this.quality];
    const due = force || now - this.lastUpdateAt >= 1000 / Math.max(1, fps);
    if (!due) return false;
    this.dirty = false;
    this.lastUpdateAt = now;
    this.updateCount++;
    return true;
  }
}
