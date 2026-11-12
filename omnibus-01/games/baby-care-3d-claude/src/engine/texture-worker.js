/* Runs the existing procedural texture factories away from the main thread.
 * The tiny document shim lets textures.js keep using its canvas helper while
 * OffscreenCanvas supplies the actual worker-safe implementation. */

globalThis.document = {
  createElement(tag) {
    if (tag !== 'canvas') throw new Error(`unsupported worker element: ${tag}`);
    return new OffscreenCanvas(1, 1);
  }
};

const texturesPromise = import('./textures.js');

function textureDescriptor(texture, bitmap) {
  return {
    kind: 'texture',
    bitmap,
    wrapS: texture.wrapS,
    wrapT: texture.wrapT,
    magFilter: texture.magFilter,
    minFilter: texture.minFilter,
    anisotropy: texture.anisotropy,
    colorSpace: texture.colorSpace,
    generateMipmaps: texture.generateMipmaps,
    repeat: texture.repeat?.toArray?.() || [1, 1]
  };
}

async function serialize(value, transfers) {
  if (value?.isTexture) {
    const image = value.source?.data || value.image;
    const bitmap = await createImageBitmap(image);
    transfers.push(bitmap);
    return textureDescriptor(value, bitmap);
  }
  if (!value || typeof value !== 'object') return value;
  const output = {};
  for (const [key, item] of Object.entries(value)) {
    if (item?.isTexture) output[key] = await serialize(item, transfers);
  }
  return { kind: 'texture-set', value: output };
}

self.onmessage = async ({ data }) => {
  const { id, factory, options, key } = data;
  try {
    const textures = await texturesPromise;
    const build = textures[factory];
    if (typeof build !== 'function') throw new Error(`unknown texture factory: ${factory}`);
    const result = build(options);
    const transfers = [];
    const payload = await serialize(result, transfers);
    self.postMessage({ id, key, payload }, transfers);
  } catch (error) {
    self.postMessage({ id, key, error: error?.stack || error?.message || String(error) });
  }
};
