/** Pure hand-wash progression rules shared by runtime and unit tests. */
export const HANDWASH_SEQUENCE = Object.freeze(['soap', 'rub', 'rinse', 'dry']);

export function nextHandwashStage(stage) {
  const index = HANDWASH_SEQUENCE.indexOf(stage);
  return index >= 0 && index + 1 < HANDWASH_SEQUENCE.length
    ? HANDWASH_SEQUENCE[index + 1] : 'complete';
}

export function validHandwashGesture(stage, { distance = 0, reversals = 0 } = {}) {
  if (stage === 'rub') return distance >= 64 && reversals >= 1;
  if (stage === 'rinse') return distance >= 44;
  if (stage === 'dry') return distance >= 52;
  return false;
}
