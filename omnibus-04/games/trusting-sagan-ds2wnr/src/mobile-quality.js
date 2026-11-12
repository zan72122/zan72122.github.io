import './renderer-lifecycle.js';
// Bound render-target memory on touch devices, including tablets in landscape.
export const isMobile = () => navigator.maxTouchPoints > 0 || /Android|iPhone|iPad|iPod/.test(navigator.userAgent);
export function mobilePixelRatio(requested, w = innerWidth, h = innerHeight) {
  if (!isMobile()) return requested;
  return Math.min(requested, 1.5, Math.sqrt(1_200_000 / Math.max(1, w * h)));
}
export function mobileShadowSize(requested) {
  return isMobile() ? Math.min(requested, 1024) : requested;
}
