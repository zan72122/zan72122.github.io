/**
 * Keep every depth consumer on the render target that RenderPass will fill.
 *
 * EffectComposer swaps its read/write buffers after passes such as GTAO,
 * Grade and SMAA. Each buffer owns a different DepthTexture, so retaining the
 * constructor's original texture makes odd-swap pipelines alternate between
 * current and stale depth on successive frames.
 */
export function syncSceneDepth(composer, gtao, depthResolve) {
  const depthTexture = composer.readBuffer?.depthTexture;
  if (!depthTexture) {
    throw new Error('RenderPipeline: active composer buffer has no depth texture');
  }

  if (gtao) {
    gtao.depthTexture = depthTexture;
    gtao.gtaoMaterial.uniforms.tDepth.value = depthTexture;
    gtao.pdMaterial.uniforms.tDepth.value = depthTexture;
  }

  depthResolve.setDepthTexture(depthTexture);
  return depthTexture;
}

/**
 * Resize every depth attachment owned by EffectComposer.
 *
 * `RenderTarget#setSize()` resizes colour textures immediately, while WebGL
 * depth textures are otherwise fixed lazily when each buffer is next bound.
 * This pipeline samples depth in later passes, so both ping-pong buffers must
 * advertise the new physical pixel size before the next frame begins.
 */
export function resizeSceneDepthTargets(composer, width, height) {
  const targets = new Set([
    composer?.renderTarget1,
    composer?.renderTarget2,
    composer?.readBuffer,
    composer?.writeBuffer
  ]);
  let resized = 0;
  for (const target of targets) {
    const depth = target?.depthTexture;
    if (!depth?.image) continue;
    depth.image.width = width;
    depth.image.height = height;
    depth.needsUpdate = true;
    resized++;
  }
  return resized;
}
