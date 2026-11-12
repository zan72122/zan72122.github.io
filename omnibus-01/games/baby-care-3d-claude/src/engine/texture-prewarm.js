/* Startup texture manifest and worker coordinator. Only textures needed by the
 * room and base character are listed; activity-only textures remain lazy. */

const WHITE = 0xffffff;

export const STARTUP_TEXTURE_JOBS = Object.freeze([
  job('wallpaper', { base: WHITE, tint: 0xdcdcdc, seed: 11 },
    `wall:${WHITE}:${0xdcdcdc}:11:0.05:1`),
  job('wood', { light: WHITE, dark: 0x8a8a8a, seed: 5, planks: 7, ringScale: 84, satin: 0.44 },
    `wood:${WHITE}:${0x8a8a8a}:5:7:84:0.44`),
  job('wood', { light: WHITE, dark: 0x8a8a8a, seed: 3, planks: 0, ringScale: 22, satin: 0.34 },
    `wood:${WHITE}:${0x8a8a8a}:3:0:22:0.34`),
  job('wood', { light: WHITE, dark: 0x8a8a8a, seed: 5, planks: 0, ringScale: 34, satin: 0.36 },
    `wood:${WHITE}:${0x8a8a8a}:5:0:34:0.36`),
  job('paint', { color: WHITE, seed: 43, gloss: 0.3 },
    `pnt:${WHITE}:43:0.3`),
  job('fabric', { color: WHITE, weave: 'plain', threads: 120, seed: 7 },
    `fab:${WHITE}:7:plain:56:0.5`),
  job('fabric', { color: WHITE, weave: 'knit', threads: 96, seed: 17 },
    `fab:${WHITE}:17:knit:56:0.5`),
  job('carpet', { color: WHITE, seed: 19, density: 170 },
    `rug:${WHITE}:19:170`),
  job('skin', { color: WHITE, seed: 23 },
    `skin:${WHITE}:23:0.5`),
  job('ceramic', { color: WHITE, seed: 31 },
    `cer:${WHITE}:31:0.35`),
  job('ceramic', { color: WHITE, seed: 83, peel: 0.3 },
    `cer:${WHITE}:83:0.3`),
  job('plastic', { color: WHITE, seed: 37, matte: 0.4 },
    `pla:${WHITE}:37:0.4`),
  job('quilted', { color: WHITE, seed: 13, cells: 6, puff: 1 },
    `quilt:${WHITE}:13:6:1:0.7`)
]);

function job(factory, options, key) {
  return Object.freeze({ factory, options: Object.freeze(options), key });
}

export async function prepareStartupTextures() {
  if (typeof Worker === 'undefined' || typeof OffscreenCanvas === 'undefined') {
    return { count: 0, worker: false };
  }

  const prepared = new Map();
  const worker = new Worker(new URL('./texture-worker.js', import.meta.url), { type: 'module' });
  let sequence = 0;
  const pending = new Map();

  const stop = () => {
    for (const callbacks of pending.values()) {
      callbacks.reject(new Error('texture worker stopped'));
    }
    pending.clear();
    worker.terminate();
  };

  worker.onmessage = ({ data }) => {
    const callbacks = pending.get(data.id);
    if (!callbacks) return;
    pending.delete(data.id);
    if (data.error) callbacks.reject(new Error(data.error));
    else callbacks.resolve(data);
  };
  worker.onerror = (event) => {
    const error = new Error(event.message || 'texture worker failed');
    for (const callbacks of pending.values()) callbacks.reject(error);
    pending.clear();
  };

  const run = (entry) => new Promise((resolve, reject) => {
    const id = ++sequence;
    pending.set(id, { resolve, reject });
    worker.postMessage({ id, ...entry });
  });

  try {
    const results = await Promise.all(STARTUP_TEXTURE_JOBS.map(run));
    for (const result of results) prepared.set(result.key, result.payload);
    globalThis.__BABY_TEXTURE_PREWARM__ = prepared;
    return { count: prepared.size, worker: true };
  } catch (error) {
    console.warn('[textures] worker prewarm failed; using synchronous generation', error);
    globalThis.__BABY_TEXTURE_PREWARM__ = new Map();
    return { count: 0, worker: false };
  } finally {
    stop();
  }
}
