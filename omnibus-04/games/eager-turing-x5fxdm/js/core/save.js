// Persistence in localStorage (guarded: private mode or blocked storage just disables it).
const KEY = 'punipuni-sticker-shop-v1';

export function loadState() {
  try {
    const s = localStorage.getItem(KEY);
    if (!s) return {};
    const o = JSON.parse(s);
    return o && typeof o === 'object' ? o : {};
  } catch (e) {
    return {};
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    return true;
  } catch (e) {
    return false;
  }
}

export function clearState() {
  try {
    localStorage.removeItem(KEY);
  } catch (e) {
    /* ignore */
  }
}
