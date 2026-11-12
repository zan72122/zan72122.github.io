/** save.js — localStorage への進行状況の保存。壊れていても落ちないようにする。 */
const KEY = 'flipdive3d.save.v1';

const DEFAULT = {
  coins: 0,
  stars: {},                 // spotId -> 0..3
  best: {},                  // spotId -> best run score
  bestDive: {},              // spotId -> best single dive
  owned: ['rookie'],
  ownedSpots: ['dock'],
  character: 'rookie',
  ghosts: {},                // spotId -> ghost frames
  totalDives: 0,
  totalRips: 0,
  muted: false,
  seenTutorial: false,
  lastSpot: 'dock',
  ghostOn: true,
};

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return structuredClone(DEFAULT);
    const d = JSON.parse(raw);
    return { ...structuredClone(DEFAULT), ...d };
  } catch (e) {
    return structuredClone(DEFAULT);
  }
}

export function save(data) {
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* 容量超過などは黙って無視 */ }
}

export function wipe() {
  try { localStorage.removeItem(KEY); } catch (e) {}
}

export function totalStars(data) {
  return Object.values(data.stars || {}).reduce((a, b) => a + b, 0);
}
