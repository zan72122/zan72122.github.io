/** Pure, renderer-free contract for a four-step safe sleep-space setup. */

export const BED_PREP_STEPS = Object.freeze([
  'bed:sheet',
  'bed:corner',
  'pajama',
  'teddy'
]);

export function createBedPrepState(prepared = false) {
  return { index: prepared ? BED_PREP_STEPS.length : 0 };
}

export function bedPrepStep(state) {
  return BED_PREP_STEPS[state?.index] || null;
}

export function advanceBedPrep(state, expectedStep) {
  const current = state || createBedPrepState();
  if (bedPrepStep(current) !== expectedStep) return current;
  return { index: Math.min(BED_PREP_STEPS.length, current.index + 1) };
}

export function isBedPrepared(state) {
  return !bedPrepStep(state);
}

/** Final cot inventory used by unit and browser contracts. */
export function isSafeSleepInventory(tags) {
  const present = new Set(tags || []);
  return !['pillow', 'quilt', 'loose-cover', 'teddy'].some(tag => present.has(tag));
}

