/* ============================================================================
 * activities/index.js — runtime registry and visible navigation catalog
 * ----------------------------------------------------------------------------
 * Runtime activities and the five child-facing buttons are intentionally
 * separate: dress/diaper/hair/lotion all belong to the single care button.
 * This file is the only place that owns that relationship.
 * ========================================================================== */

export const ACTIVITIES = {
  feed: {
    load: () => import('./feed.js').then(module => module.FeedActivity),
    mood: 'golden', camera: 'table', label: 'ごはん', icon: 'bottle', meter: 'food'
  },
  bath: {
    load: () => import('./bath.js').then(module => module.BathActivity),
    mood: 'evening', camera: 'tub', label: 'おふろ', icon: 'tub', meter: 'clean'
  },
  care: {
    load: () => import('./care.js').then(module => module.CareHubActivity),
    mood: 'day', camera: 'closeup', label: 'おていれ', icon: 'care-kit', meter: null
  },
  dress: {
    load: () => import('./dress.js').then(module => module.DressActivity),
    mood: 'day', camera: 'closeup', label: 'きせかえ', icon: 'onesie', meter: null
  },
  diaper: {
    load: () => import('./diaper.js').then(module => module.DiaperActivity),
    mood: 'day', camera: 'closeup', label: 'おむつ', icon: 'diaper', meter: null
  },
  hair: {
    load: () => import('./hair.js').then(module => module.HairActivity),
    mood: 'day', camera: 'closeup', label: 'かみ', icon: 'brush', meter: null
  },
  lotion: {
    load: () => import('./lotion.js').then(module => module.LotionActivity),
    mood: 'day', camera: 'closeup', label: 'クリーム', icon: 'lotion', meter: null
  },
  play: {
    load: () => import('./play.js').then(module => module.PlayActivity),
    mood: 'golden', camera: 'floor', label: 'あそぶ', icon: 'balloon', meter: 'happy'
  },
  sleep: {
    load: () => import('./sleep.js').then(module => module.SleepActivity),
    mood: 'night', camera: 'crib', label: 'ねんね', icon: 'moon', meter: 'energy'
  }
};

const NO_MEMBERS = Object.freeze([]);

export const NAV_ITEMS = Object.freeze([
  Object.freeze({ id: 'feed', label: 'ごはん', icon: 'bottle', entry: 'feed', members: NO_MEMBERS }),
  Object.freeze({ id: 'bath', label: 'おふろ', icon: 'tub', entry: 'bath', members: NO_MEMBERS }),
  Object.freeze({
    id: 'care', label: 'おていれ', icon: 'care-kit', entry: 'care',
    members: Object.freeze(['dress', 'diaper', 'hair', 'lotion'])
  }),
  Object.freeze({ id: 'play', label: 'あそぶ', icon: 'balloon', entry: 'play', members: NO_MEMBERS }),
  Object.freeze({ id: 'sleep', label: 'ねんね', icon: 'moon', entry: 'sleep', members: NO_MEMBERS })
]);

/** Resolve a runtime id to the one visible button that owns it. */
export function navIdForActivity(activityId) {
  const item = NAV_ITEMS.find(({ id, entry, members }) => (
    id === activityId || entry === activityId || members.includes(activityId)
  ));
  return item?.id || activityId;
}

/** Lazy-import order, derived from the same catalog rather than duplicated. */
export const PRELOAD_ORDER = Object.freeze([
  ...new Set(NAV_ITEMS.flatMap(({ entry, members }) => [entry, ...members]))
]);

/** Compatibility name for existing preload callers. */
export const ACTIVITY_ORDER = PRELOAD_ORDER;
