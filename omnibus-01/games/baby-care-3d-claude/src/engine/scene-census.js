/**
 * Count scene nodes that must return to their pre-activity total.
 *
 * Every `outfit:*` mesh belongs to the durable character subsystem, whether it
 * is currently worn or cached and hidden. Changing clothes may add meshes or
 * turn the nappy from visible to hidden, so counting them as activity-owned
 * nodes produces false leak warnings even when the wardrobe root was removed.
 * DressActivity audits and prunes the variants it creates separately.
 */
export function collectTransientSceneNodes(root) {
  const nodes = [];
  root?.traverse?.((node) => {
    const persistentOutfit = node?.name?.startsWith?.('outfit:');
    if (!persistentOutfit) nodes.push(node);
  });
  return nodes;
}

export function countTransientSceneNodes(root) {
  return collectTransientSceneNodes(root).length;
}
