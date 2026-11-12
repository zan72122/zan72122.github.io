/* ==========================================================================
 * assist.js — one-step child assistance and activity recommendation
 * --------------------------------------------------------------------------
 * This module intentionally owns no DOM and no activity internals. Keeping
 * the single-flight/cancellation contract pure makes it testable without a
 * renderer and prevents every activity from inventing subtly different
 * double-tap behaviour.
 * ========================================================================== */

const ACTIVITY_ORDER = ['feed', 'bath', 'diaper', 'play', 'sleep'];

const METER_ACTIVITY = {
  food: 'feed',
  clean: 'bath',
  happy: 'play',
  energy: 'sleep'
};

const finite01 = (value, fallback = 0) => {
  const n = Number(value);
  return Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : fallback;
};

/** Pick one useful destination without inventing a forced care sequence. */
export function recommendActivity(state) {
  if (!state) return 'feed';
  if (finite01(state.wet) > 0.05) return 'bath';
  if (state.naked === true) return 'dress';

  const dirt = typeof state.dirtTotal === 'function'
    ? finite01(state.dirtTotal())
    : finite01(state.dirt?.face);
  const meters = state.meters || {};
  const scores = new Map(ACTIVITY_ORDER.map((name) => [name, -Infinity]));

  for (const [meter, activity] of Object.entries(METER_ACTIVITY)) {
    scores.set(activity, 1 - finite01(meters[meter], 1));
  }
  scores.set('bath', Math.max(scores.get('bath'), dirt));
  scores.set('diaper', finite01(state.diaperNeed));

  let best = ACTIVITY_ORDER[0];
  for (const activity of ACTIVITY_ORDER) {
    if (scores.get(activity) > scores.get(best)) best = activity;
  }
  return best;
}

/**
 * Runs one activity-owned assist step at a time.
 *
 * `cancel()` deliberately settles UI state immediately. The activity still
 * receives an AbortSignal and must stop any multi-part sequence before its
 * next semantic action; its normal dispose path owns already-running tweens.
 */
export class AssistRunner {
  constructor({ getActivity, onBusy, onSettled, prepareStep } = {}) {
    this.getActivity = getActivity || (() => null);
    this.onBusy = onBusy || (() => {});
    this.onSettled = onSettled || (() => {});
    this.prepareStep = prepareStep || (async () => {});
    this.busy = false;
    this._generation = 0;
    this._controller = null;
  }

  currentStep() {
    try { return this.getActivity()?.getAssistStep?.() || null; }
    catch { return null; }
  }

  async run() {
    if (this.busy) return false;
    const activity = this.getActivity();
    const step = activity?.getAssistStep?.();
    if (!activity?.runAssistStep || !step?.id) return false;

    const generation = ++this._generation;
    const controller = new AbortController();
    this._controller = controller;
    this.busy = true;
    this.onBusy(true, step);

    try {
      await this.prepareStep(step, { signal: controller.signal });
      if (controller.signal.aborted) throw new DOMException('Assist cancelled', 'AbortError');
      await activity.runAssistStep(step.id, { signal: controller.signal });
      return !controller.signal.aborted;
    } finally {
      if (generation !== this._generation) return;
      this.busy = false;
      this._controller = null;
      this.onBusy(false, null);
      this.onSettled();
    }
  }

  cancel() {
    if (!this.busy && !this._controller) return;
    ++this._generation;
    this._controller?.abort();
    this._controller = null;
    this.busy = false;
    this.onBusy(false, null);
    this.onSettled();
  }
}

export { ACTIVITY_ORDER };
