/**
 * 封筒ごとの「旅する消印」の規則。
 * 描画から切り離し、周回順と状態遷移を Node テストでも共有する。
 */

export const TRAVEL_STORIES = Object.freeze([
  Object.freeze({ id: 'ocean', accent: 0x35b9d4, ink: 0x175a78 }),
  Object.freeze({ id: 'mountain', accent: 0x83c96b, ink: 0x315b56 }),
  Object.freeze({ id: 'cosmos', accent: 0xb997ff, ink: 0x473a82 }),
  Object.freeze({ id: 'balloon', accent: 0xffa45f, ink: 0x9b4938 }),
]);

export function storyForRound(round) {
  const safeRound = Number.isFinite(round) ? Math.max(0, Math.floor(round)) : 0;
  return TRAVEL_STORIES[safeRound % TRAVEL_STORIES.length];
}

export function storyById(id) {
  return TRAVEL_STORIES.find(story => story.id === id) || TRAVEL_STORIES[0];
}

/**
 * hidden: まだ紙の中 / emerge: 1押し目から誕生 / waiting: 紙上で待つ
 * seal: 2つの印影を航路で結ぶ / depart: 手紙と一緒に旅立つ
 */
export function travelStoryPhase({ state, step, contacted = false }) {
  if (state === 'FINALE') return 'depart';
  if (step <= 0) return state === 'PRESS' && contacted ? 'emerge' : 'hidden';
  if (step === 1 && state === 'PRESS' && contacted) return 'seal';
  return 'waiting';
}
