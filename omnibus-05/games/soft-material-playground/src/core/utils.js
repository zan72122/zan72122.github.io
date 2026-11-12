// やわらかそざいあそび - core utilities. First script: creates the GAME namespace.
(function () {
  'use strict';
  const GAME = (window.GAME = window.GAME || {});

  const U = {};

  U.clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  U.lerp = (a, b, t) => a + (b - a) * t;
  // Frame-rate independent damping factor.
  U.damp = (a, b, lambda, dt) => U.lerp(a, b, 1 - Math.exp(-lambda * dt));
  U.smoothstep = (a, b, x) => {
    const t = U.clamp((x - a) / (b - a), 0, 1);
    return t * t * (3 - 2 * t);
  };

  // Deterministic RNG (mulberry32) so the toy can be seeded for tests.
  U.rng = function (seed) {
    let s = seed >>> 0;
    return function () {
      s |= 0; s = (s + 0x6d2b79f5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };
  U.pick = (rand, arr) => arr[Math.floor(rand() * arr.length) % arr.length];

  // URL params: ?quality=low&seed=7&debug=1
  U.params = (function () {
    const out = {};
    try {
      const q = new URLSearchParams(location.search);
      for (const [k, v] of q.entries()) out[k] = v;
    } catch (e) { /* file:// with odd search strings */ }
    return out;
  })();

  // '#ff8844' -> [1, 0.53, 0.27]
  U.hexToRgb = function (hex) {
    const n = parseInt(hex.slice(1), 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  };
  U.rgbToCss = (r, g, b) =>
    'rgb(' + ((r * 255) | 0) + ',' + ((g * 255) | 0) + ',' + ((b * 255) | 0) + ')';

  // Shared debug/test hooks (latched peaks etc, asserted by test/verify.mjs).
  GAME.DEBUG = { lastDeformPeak: 0, lastWallImpact: 0, layout: '' };

  GAME.U = U;
})();
