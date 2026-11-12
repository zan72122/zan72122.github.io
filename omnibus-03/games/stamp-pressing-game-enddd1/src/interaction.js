/**
 * 入力判定と段階ヒントの、描画に依存しない規則。
 * main.js と Node の回帰テストで同じ値を使う。
 */

export const DROP_ACCEPT_RADIUS = 1.05;
export const AUTO_PRESS_RADIUS = 0.62;
export const HINT_TARGET_AT = 2.2;
export const HINT_ROUTE_AT = 4.0;

export function planarDistance(a, b) {
  if (!a || !b) return Infinity;
  return Math.hypot(a.x - b.x, a.z - b.z);
}

/**
 * 表示が指に遅れても、最新の紙面上の指位置が正しければ成功にする。
 * 半径そのものは広げない。
 */
export function acceptsDrop(rendered, intended, target, radius = DROP_ACCEPT_RADIUS) {
  return Math.min(planarDistance(rendered, target), planarDistance(intended, target)) < radius;
}

export function guidanceStage(idleSeconds, misses = 0) {
  if (misses > 0 || idleSeconds >= HINT_ROUTE_AT) return 'route';
  if (idleSeconds >= HINT_TARGET_AT) return 'target';
  return 'source';
}

export function ownsPointer(activePointerId, eventPointerId) {
  return activePointerId !== null && activePointerId === eventPointerId;
}
