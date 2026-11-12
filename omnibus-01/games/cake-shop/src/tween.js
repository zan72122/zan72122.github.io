/* トゥイーン(2D版 game.js から移植) */

export const easings = {
  linear: t => t,
  outQuad: t => t * (2 - t),
  inQuad: t => t * t,
  inOut: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  outBack: t => { const s = 1.6; t -= 1; return t * t * ((s + 1) * t + s) + 1; },
  outBounce: t => {
    if (t < 1 / 2.75) return 7.5625 * t * t;
    if (t < 2 / 2.75) { t -= 1.5 / 2.75; return 7.5625 * t * t + 0.75; }
    if (t < 2.5 / 2.75) { t -= 2.25 / 2.75; return 7.5625 * t * t + 0.9375; }
    t -= 2.625 / 2.75; return 7.5625 * t * t + 0.984375;
  }
};

const tweens = [];

export function tween(dur, fn, opt = {}) {
  const tw = {
    t: 0, dur, fn, dead: false,
    ease: easings[opt.ease || 'outQuad'],
    done: opt.done, delay: opt.delay || 0
  };
  tweens.push(tw);
  return tw;
}

export function killTween(tw) { if (tw) tw.dead = true; }

export function delay(sec, fn) {
  return tween(sec, () => {}, { done: fn, ease: 'linear' });
}

export function updateTweens(dt) {
  for (let i = tweens.length - 1; i >= 0; i--) {
    const tw = tweens[i];
    if (tw.dead) { tweens.splice(i, 1); continue; }
    if (tw.delay > 0) { tw.delay -= dt; continue; }
    tw.t += dt;
    const k = Math.min(1, tw.t / tw.dur);
    tw.fn(tw.ease(k));
    if (k >= 1) {
      tweens.splice(i, 1);
      if (tw.done) tw.done();
    }
  }
}

export function lerp(a, b, t) { return a + (b - a) * t; }
