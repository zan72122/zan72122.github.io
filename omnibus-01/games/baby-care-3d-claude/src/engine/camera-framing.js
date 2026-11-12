/**
 * Keep the horizontal framing of a perspective shot on narrow screens.
 *
 * Three.js defines PerspectiveCamera.fov vertically. At the same eye distance,
 * reducing width/height therefore crops the left and right edges. Moving the
 * eye away by minAspect/aspect preserves the horizontal span without changing
 * the lens or the shot on screens that already meet the authored aspect.
 */
export function aspectFitScale(aspect, minAspect = 0) {
  const current = Number(aspect);
  const minimum = Number(minAspect);
  if (!(current > 0) || !(minimum > 0) || current >= minimum) return 1;
  return minimum / current;
}

