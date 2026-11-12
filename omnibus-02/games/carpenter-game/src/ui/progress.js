/**
 * 長い工程を、幼児が見渡せる少数の進行ドットへまとめる。
 * index は 0 始まりで、返り値は past / current / future のいずれか。
 */
export function journeySegmentStates(index, total, segments = 6) {
  const safeSegments = Math.max(1, Math.floor(segments));
  const safeTotal = Math.max(1, Math.floor(total));
  const safeIndex = Math.min(safeTotal - 1, Math.max(0, Math.floor(index)));
  const ratio = safeTotal === 1 ? 1 : safeIndex / (safeTotal - 1);
  const current = Math.min(safeSegments - 1, Math.floor(ratio * safeSegments));

  return Array.from({ length: safeSegments }, (_, i) => {
    if (i < current) return 'past';
    if (i === current) return 'current';
    return 'future';
  });
}
