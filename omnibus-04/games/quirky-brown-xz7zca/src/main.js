import { World } from './world.js';
import { Renderer } from './render/renderer.js';
import { Fx } from './render/fx.js';
import { Sound } from './audio.js';

const params = new URLSearchParams(location.search);
const debug = params.has('debug');
const canvas = document.getElementById('c');

const world = new World({
  skipIntro: params.has('skip'),
  startAt: Math.max(0, parseInt(params.get('house') || '0', 10) || 0),
  seed: parseInt(params.get('seed') || '0', 10) || undefined,
});
const renderer = new Renderer(canvas);
const fx = new Fx();
const sound = new Sound();
if (params.has('mute')) sound.muted = true;

// ---------------------------------------------------------------- sizing
// Safe-area insets can only be read through CSS: a probe element padded with env().
const probe = document.createElement('div');
probe.style.cssText = 'position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;' +
  'padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);';
document.body.appendChild(probe);

let pendingResize = 0;
function resize() {
  const r = canvas.getBoundingClientRect();
  const W = Math.max(1, Math.round(r.width || window.innerWidth));
  const H = Math.max(1, Math.round(r.height || window.innerHeight));
  const cs = getComputedStyle(probe);
  world.safe = {
    top: parseFloat(cs.paddingTop) || 0,
    right: parseFloat(cs.paddingRight) || 0,
    bottom: parseFloat(cs.paddingBottom) || 0,
    left: parseFloat(cs.paddingLeft) || 0,
  };
  // keep the backing store at or under ~3.5 megapixels (big iPads run at 1.5x)
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  const maxPx = 3.5e6;
  if (W * H * dpr * dpr > maxPx) dpr = Math.max(1, Math.sqrt(maxPx / (W * H)));
  dpr = Math.min(dpr, renderer.qualityCap);
  renderer.resize(W, H, dpr);
  world.cam.resize(W, H);
}
function scheduleResize() {
  clearTimeout(pendingResize);
  pendingResize = setTimeout(resize, 120);
}
resize();
if (window.ResizeObserver) new ResizeObserver(scheduleResize).observe(canvas);
window.addEventListener('resize', scheduleResize);
window.addEventListener('orientationchange', scheduleResize);
renderer.onQualityDrop = resize;

// ---------------------------------------------------------------- input
// One finger is all that's needed; extra fingers (a resting thumb, a palm)
// are tracked separately and never block a tap.
const stop = (e) => { if (e.cancelable) e.preventDefault(); };
canvas.addEventListener('pointerdown', (e) => {
  stop(e);
  sound.unlock();
  try { canvas.setPointerCapture(e.pointerId); } catch (_) { /* not supported */ }
  const w = e.pointerType === 'touch' ? e.width : 1;
  const h = e.pointerType === 'touch' ? e.height : 1;
  world.pointerDown(e.pointerId, e.clientX, e.clientY, w, h);
});
canvas.addEventListener('pointermove', (e) => { stop(e); world.pointerMove(e.pointerId, e.clientX, e.clientY); });
const up = (e) => { sound.unlock(); world.pointerUp(e.pointerId); };
canvas.addEventListener('pointerup', up);
canvas.addEventListener('pointercancel', up);
canvas.addEventListener('lostpointercapture', (e) => world.pointerUp(e.pointerId));
// iOS: block scrolling, double-tap zoom, pinch, magnifier, callouts.
for (const t of ['touchstart', 'touchmove']) document.addEventListener(t, stop, { passive: false });
document.addEventListener('touchend', (e) => { sound.unlock(); stop(e); }, { passive: false });
for (const t of ['gesturestart', 'gesturechange', 'gestureend', 'contextmenu', 'dblclick', 'selectstart']) {
  document.addEventListener(t, stop, { passive: false });
}

// ---------------------------------------------------------------- loop
let last = 0;
let running = true;
function frame(now) {
  if (!running) return;
  let dt = last ? (now - last) / 1000 : 1 / 60;
  last = now;
  if (!(dt > 0)) dt = 1 / 60;
  tick(Math.min(dt, 0.1));
  requestAnimationFrame(frame);
}

function tick(dt) {
  world.update(dt);
  for (const e of world.events) {
    fx.handle(e, world);
    sound.handle(e, world);
  }
  world.events.length = 0;
  fx.update(dt, world);
  sound.update(dt, world);
  renderer.draw(world, fx, dt);
}

function pause() { running = false; sound.suspend(); }
function resume() {
  if (running) return;
  running = true;
  last = 0;
  sound.resume();
  requestAnimationFrame(frame);
}
document.addEventListener('visibilitychange', () => (document.hidden ? pause() : resume()));
window.addEventListener('pagehide', pause);
window.addEventListener('pageshow', () => { running = false; resume(); });

requestAnimationFrame(frame);

// ---------------------------------------------------------------- testing hook
if (debug) {
  window.__game = {
    world, renderer, fx, sound,
    snapshot: () => world.snapshot(),
    // Advance the simulation synchronously (fixed 60 Hz) and draw once.
    advance(seconds) {
      const n = Math.round(seconds * 60);
      running = false;
      for (let i = 0; i < n; i++) {
        world.update(1 / 60);
        for (const e of world.events) fx.handle(e, world);
        world.events.length = 0;
        fx.update(1 / 60, world);
      }
      renderer.draw(world, fx, 1 / 60);
      return world.snapshot();
    },
    resume() { running = false; resume(); },
    pause() { running = false; },
    houseScreenPoint: (fx0, fy0) => world.houseScreenPoint(fx0, fy0),
    tap(sx, sy) { world.pointerDown(99, sx, sy); world.update(1 / 60); world.pointerUp(99); },
    down(id, sx, sy) { world.pointerDown(id, sx, sy); },
    move(id, sx, sy) { world.pointerMove(id, sx, sy); },
    up(id) { world.pointerUp(id); },
  };
}
