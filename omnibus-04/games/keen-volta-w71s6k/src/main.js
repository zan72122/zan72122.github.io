// Bootstrap: renderer, resize/orientation handling, replay memory, test hooks.
import * as THREE from 'three';
import { Game } from './game.js';
import { sound } from './audio.js';

const canvas = document.getElementById('c');
const veil = document.getElementById('veil');
const params = new URLSearchParams(location.search);
const store = {
  get(k, d) { try { const v = localStorage.getItem('dominoTown.' + k); return v == null ? d : JSON.parse(v); } catch (_) { return d; } },
  set(k, v) { try { localStorage.setItem('dominoTown.' + k, JSON.stringify(v)); } catch (_) {} },
};

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
} catch (e) {
  veil.style.background = '#e9dcc3'; throw e;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, params.has('lowdpr') ? 1 : 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// If the GPU context is lost (backgrounded tab on iOS), fade and rebuild when it returns.
canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); veil.style.opacity = '1'; }, false);
canvas.addEventListener('webglcontextrestored', () => { location.reload(); }, false);

const seed = parseInt(params.get('seed') || '7', 10);
let run = params.has('run') ? parseInt(params.get('run'), 10) : store.get('runs', 0) + 1;
let prevRoute = params.get('prev') || store.get('lastRoute', null);
if (params.has('fresh')) { run = 1; prevRoute = null; }

let game = null;
function start() {
  if (game) game.dispose();
  game = new Game({ renderer, canvas, seed: seed + run * 101, run, prevRoute, onFinished: finished });
  window.__game = game;
  resize(); game.rig.cut();
  requestAnimationFrame(() => { veil.style.opacity = '0'; });
}
function finished(route) {
  store.set('runs', run); store.set('lastRoute', route);
  veil.style.opacity = '1';
  setTimeout(() => { run += 1; prevRoute = route; start(); }, 1600);
}

function resize() {
  // size to the canvas box (it may sit inside safe-area padding in an embedding page)
  const r = canvas.getBoundingClientRect();
  const w = Math.max(1, Math.round(r.width || window.innerWidth)), h = Math.max(1, Math.round(r.height || window.innerHeight));
  if (game) game.resize(w, h);
}
if (window.ResizeObserver) new ResizeObserver(() => resize()).observe(canvas);
window.addEventListener('resize', resize);
window.addEventListener('orientationchange', () => setTimeout(resize, 120));
if (window.visualViewport) window.visualViewport.addEventListener('resize', resize);

// Main loop. Tests can pause it and step deterministically with __step().
let last = performance.now(), paused = params.has('manual');
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  if (!paused && game) { game.update(dt); game.render(); }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
window.__step = (seconds, fps = 30) => { const n = Math.round(seconds * fps); for (let i = 0; i < n; i++) game.update(1 / fps); game.render(); };
window.__pause = (p) => { paused = p; last = performance.now(); };
window.__restart = (opts = {}) => { if (opts.run) run = opts.run; if ('prev' in opts) prevRoute = opts.prev; start(); };
window.__sound = sound;
// iOS only unlocks audio inside certain gesture events; listen to all of them once.
for (const ev of ['pointerdown', 'touchend', 'click', 'keydown']) document.addEventListener(ev, () => sound.unlock(), { passive: true });
start();
