/* ========================================================================== 
 * care/interaction-rules.js — pure gesture and hit-hierarchy rules
 * ========================================================================== */

export const HAIR_STROKE_MIN_DISTANCE = 48;
export const HAIR_STROKE_MIN_DOWN = 24;
export const HAIR_STROKE_MIN_SIDE = 22;
export const LOTION_RUB_MIN_DISTANCE = 72;
export const LOTION_RUB_MIN_TURN = Math.PI * 0.75;
const PAIL_RIM_DISTANCE = 0.14;

const smooth = value => value * value * (3 - 2 * value);

/** Pure visual phases for fold-in-place, travel to the pail, and lid motion. */
export function diaperPailProgress(raw) {
  const value = Math.max(0, Math.min(1, Number.isFinite(raw) ? raw : 0));
  const fold = smooth(Math.min(1, value / 0.36));
  const travel = smooth(Math.max(0, (value - 0.36) / 0.64));
  const lidOpen = value < 0.18
    ? smooth(value / 0.18)
    : (value > 0.82 ? smooth((1 - value) / 0.18) : 1);
  return { fold, travel, lidOpen };
}

/** Leave a visible final trip from the manually dragged prop into the pail. */
export function keepUsedAtPailRim(point, pail, home) {
  let dx = point.x - pail.x;
  let dz = point.z - pail.z;
  let distance = Math.hypot(dx, dz);
  if (distance >= PAIL_RIM_DISTANCE) return point;
  if (distance < 1e-5) {
    dx = home.x - pail.x;
    dz = home.z - pail.z;
    distance = Math.hypot(dx, dz) || 1;
  }
  point.x = pail.x + (dx / distance) * PAIL_RIM_DISTANCE;
  point.z = pail.z + (dz / distance) * PAIL_RIM_DISTANCE;
  return point;
}

/** Invisible hit proxies are valid, but nothing beneath a hidden prop is. */
export function visiblePickHierarchy(node, root) {
  if (!node || (!node.visible && !node.userData?.proxy)) return false;
  for (let parent = node.parent; parent; parent = parent.parent) {
    if (!parent.visible) return false;
    if (parent === root) break;
  }
  return true;
}

/** A real brush stroke starts on the crown and leaves it down one side. */
export function isValidHairStroke({ startedInCrown, distance, dx, dy }) {
  return Boolean(startedInCrown) &&
    distance >= HAIR_STROKE_MIN_DISTANCE &&
    dy >= HAIR_STROKE_MIN_DOWN &&
    Math.abs(dx) >= HAIR_STROKE_MIN_SIDE;
}

/** Add one pointer segment while retaining enough shape to detect a rub. */
export function addRubSegment(gesture, dx, dy) {
  const length = Math.hypot(dx, dy);
  if (length <= 0.01) return gesture;

  let turn = gesture.turn || 0;
  let reversals = gesture.reversals || 0;
  const previousLength = Math.hypot(gesture.lastDx || 0, gesture.lastDy || 0);
  if (previousLength > 0.01) {
    const dot = Math.max(-1, Math.min(1,
      ((gesture.lastDx * dx) + (gesture.lastDy * dy)) / (previousLength * length)));
    turn += Math.acos(dot);
    if (dot <= -0.55) reversals++;
  }

  return {
    ...gesture,
    travel: (gesture.travel || 0) + length,
    turn,
    reversals,
    lastDx: dx,
    lastDy: dy
  };
}

/** A circle accumulates turn; a back-and-forth stroke has a clear reversal. */
export function isValidLotionRub(gesture) {
  return (gesture?.travel || 0) >= LOTION_RUB_MIN_DISTANCE &&
    ((gesture?.turn || 0) >= LOTION_RUB_MIN_TURN || (gesture?.reversals || 0) >= 1);
}
