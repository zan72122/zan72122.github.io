/* ===========================================================================
 * activities/play/rules.js — dependency-free contracts for Play sub-modes
 * ========================================================================== */

export const PLAY_MODE_ITEMS = Object.freeze([
  Object.freeze({ id: 'toys', label: 'おもちゃ', icon: 'ball' }),
  Object.freeze({ id: 'cuddle', label: 'だっこ', icon: 'cuddle' }),
  Object.freeze({ id: 'stroll', label: 'おさんぽ', icon: 'stroller' }),
  Object.freeze({ id: 'prints', label: 'てがた', icon: 'prints' })
]);

export const PLAY_MODE_IDS = Object.freeze(PLAY_MODE_ITEMS.map((item) => item.id));

export const STROLL_DISCOVERY_THRESHOLDS = Object.freeze([0.25, 0.55, 0.85]);

export const PRINT_PHASES = Object.freeze(['kind', 'color', 'left', 'right', 'sticker', 'done']);

export function nextPrintPhase(phase) {
  const index = PRINT_PHASES.indexOf(phase);
  if (index < 0) return PRINT_PHASES[0];
  return PRINT_PHASES[Math.min(PRINT_PHASES.length - 1, index + 1)];
}

export function modeIdForAssist(stepId) {
  const prefix = String(stepId || '').split(':')[0];
  return PLAY_MODE_IDS.includes(prefix) && prefix !== 'toys' ? prefix : null;
}
