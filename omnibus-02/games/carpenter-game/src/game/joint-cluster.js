/** 釘でつないだ部品を、移動時に常に同じ集合として扱う。 */
export function clusterMembers(piece) {
  return [...(piece.jointCluster || new Set([piece]))];
}

export function mergePieceClusters(a, b) {
  const merged = new Set([...clusterMembers(a), ...clusterMembers(b)]);
  for (const piece of merged) piece.jointCluster = merged;
  return merged;
}

export function sameCluster(a, b) {
  return a === b || Boolean(a.jointCluster && a.jointCluster === b.jointCluster);
}
