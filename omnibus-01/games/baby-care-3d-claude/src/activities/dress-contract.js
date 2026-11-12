/**
 * Return the footwear kind that belongs to the current foot-tap step.
 *
 * Steps 1–2 are socks, 3–4 are shoes (or boots for a rain outfit). Keeping
 * this contract outside the activity input path makes it independently
 * testable and prevents an already-worn prop from advancing the next step.
 */
export function expectedFootwearKind(step, rain = false) {
  if (step === 1 || step === 2) return 'sock';
  if (step === 3 || step === 4) return rain ? 'boot' : 'shoe';
  return null;
}

export function canPickFootwear({ step, kind, on = false, rain = false } = {}) {
  return !on && kind === expectedFootwearKind(step, rain);
}

/**
 * Select cached garment variants the dressing activity may safely release.
 *
 * Hidden variants created during the activity are temporary. A newly visible
 * variant replaces the hidden arrival variant for the same slot, so releasing
 * that old variant keeps the scene graph at its pre-build size while retaining
 * the outfit the child chose.
 */
export function garmentCacheKeysToPrune(items = {}, originalKeys = new Set()) {
  const remove = new Set();
  const keys = Object.keys(items);

  for (const key of keys) {
    if (!originalKeys.has(key) && !items[key]?.mesh?.visible) remove.add(key);
  }

  const originalHidden = [...originalKeys].filter((key) => {
    const item = items[key];
    return item && !item.mesh?.visible;
  });
  for (const key of keys) {
    const fresh = items[key];
    if (originalKeys.has(key) || !fresh?.mesh?.visible) continue;
    const replaced = originalHidden.find((oldKey) =>
      !remove.has(oldKey) && items[oldKey]?.name === fresh.name);
    if (replaced) remove.add(replaced);
  }

  return [...remove];
}
