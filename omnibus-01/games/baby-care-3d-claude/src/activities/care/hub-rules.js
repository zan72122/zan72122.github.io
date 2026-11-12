/** Pure CareHub progression rules shared by runtime and unit tests. */
export const HUB_SUPPLY_IDS = Object.freeze(['diaper', 'tissue', 'cream']);

export function validRestockDrop(itemId, slotId) {
  return HUB_SUPPLY_IDS.includes(itemId) && itemId === slotId;
}

export function validNoseStroke({ distance = 0, direction = 0 } = {}, previousDirection = 0) {
  if (distance < 36 || !direction) return false;
  return !previousDirection || direction !== previousDirection;
}

export function nextHubRoutineStep({ mode, remaining = [], noseStrokes = 0 } = {}) {
  if (mode === 'restock') {
    const id = HUB_SUPPLY_IDS.find(item => remaining.includes(item));
    return id ? `hub:restock:${id}` : null;
  }
  if (mode === 'nose-take') return 'hub:nose:take';
  if (mode === 'nose-wipe') return `hub:nose:wipe:${noseStrokes + 1}`;
  if (mode === 'nose-bin') return 'hub:nose:bin';
  return null;
}
