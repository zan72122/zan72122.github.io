/* Split mobile activity shader preparation across animation frames.
 * WebGLRenderer.compileAsync() still performs its material preparation
 * synchronously before waiting on KHR_parallel_shader_compile. Calling it for
 * a whole activity can therefore block Safari for seconds even though the
 * returned API is asynchronous. */

export function activityCompileUnits(root) {
  if (!root?.traverse) return [];
  const seenMaterials = new Set();
  const units = [];
  root.traverse(object => {
    if (!(object.isMesh || object.isPoints || object.isLine || object.isSprite)) return;
    const materials = Array.isArray(object.material)
      ? object.material
      : [object.material];
    let hasNewMaterial = false;
    for (const material of materials) {
      if (!material || seenMaterials.has(material)) continue;
      seenMaterials.add(material);
      hasNewMaterial = true;
    }
    if (hasNewMaterial) units.push(object);
  });
  return units;
}

const waitForFrame = () => new Promise(resolve => requestAnimationFrame(() => resolve()));

export async function compileActivityIncrementally({
  renderer,
  root,
  camera,
  targetScene,
  yieldFrame = waitForFrame
}) {
  if (!root) {
    await renderer.compileAsync(targetScene, camera);
    return;
  }

  const wasVisible = root.visible;
  root.visible = false;
  try {
    for (const unit of activityCompileUnits(root)) {
      await renderer.compileAsync(unit, camera, targetScene);
      // Let input, animation and the old/core scene render between materials.
      await yieldFrame();
    }
  } finally {
    root.visible = wasVisible;
  }
}
