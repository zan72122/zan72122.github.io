/**
 * Keep the dressing room below the shared draw-call ceiling without replacing
 * its authored assets. The rail always retains five tappable 3D silhouettes;
 * only the featured garment expands to sleeves, trim, stitching and buttons.
 * Laundry furniture is revealed only while it tells part of the current step.
 */

const GARMENT_MODE = Object.freeze({
  HIDDEN: 'hidden',
  LIGHT: 'light',
  FEATURED: 'featured',
  FULL: 'full'
});

const PROP_NAMES = Object.freeze(['washer', 'line', 'basket', 'mirror']);

function partsFor(entry) {
  if (!entry.renderBudgetParts) {
    entry.renderBudgetParts = entry.group.children.filter(
      child => child.userData?.proxy !== true
    );
    entry.renderBudgetLightParts = new Set(
      [entry.body, entry.skirt, entry.hood].filter(Boolean)
    );
    // Picker closeups need a recognisable silhouette, not every button and
    // stitch. Full detail returns once the garment is actually being dressed.
    entry.renderBudgetFeaturedParts = new Set([
      ...entry.renderBudgetLightParts,
      ...(entry.sleeves || []),
      entry.placket
    ].filter(Boolean));
  }
  return entry.renderBudgetParts;
}

function setGarmentMode(entry, mode, { hanger = true } = {}) {
  const hidden = mode === GARMENT_MODE.HIDDEN;
  entry.group.visible = !hidden;
  entry.hanger.visible = !hidden && hanger;
  if (hidden) return;

  const full = mode === GARMENT_MODE.FULL;
  const featured = mode === GARMENT_MODE.FEATURED;
  const parts = partsFor(entry);
  const lightParts = entry.renderBudgetLightParts;
  for (const part of parts) {
    part.visible = full
      || (featured ? entry.renderBudgetFeaturedParts.has(part) : lightParts.has(part));
  }
}

function setProps(activity, visibleNames) {
  const visible = new Set(visibleNames);
  for (const name of PROP_NAMES) {
    if (activity[name]) activity[name].visible = visible.has(name);
  }
}

/** Five rail choices remain; one keeps its close-up detail. */
export function showDressPicker(activity, featured = null) {
  setProps(activity, []);
  for (const entry of activity.garments || []) {
    setGarmentMode(entry,
      entry === featured ? GARMENT_MODE.FEATURED : GARMENT_MODE.LIGHT);
  }
}

/** Keep only the garment being animated at full complexity. */
export function showDressFocus(activity, featured) {
  setProps(activity, []);
  for (const entry of activity.garments || []) {
    setGarmentMode(entry,
      entry === featured ? GARMENT_MODE.FULL : GARMENT_MODE.LIGHT);
  }
}

/** Foot props replace the wardrobe rail as the active visual target. */
export function showDressFootwear(activity) {
  setProps(activity, []);
  for (const entry of activity.garments || []) {
    setGarmentMode(entry, GARMENT_MODE.HIDDEN, { hanger: false });
  }
}

/** Laundry uses a light cloth silhouette and reveals its three destinations. */
export function showDressLaundry(activity, featured) {
  setProps(activity, ['washer', 'line', 'basket']);
  for (const entry of activity.garments || []) {
    setGarmentMode(entry,
      entry === featured ? GARMENT_MODE.LIGHT : GARMENT_MODE.HIDDEN,
      { hanger: false });
  }
}

/** The finishing table replaces the rail and keeps only its source basket. */
export function showDressFinish(activity) {
  setProps(activity, ['basket']);
  for (const entry of activity.garments || []) {
    setGarmentMode(entry, GARMENT_MODE.HIDDEN, { hanger: false });
  }
}

export { GARMENT_MODE };
