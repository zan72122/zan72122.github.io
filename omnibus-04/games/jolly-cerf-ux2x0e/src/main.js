import * as THREE from 'three';
import { Game } from './game.js';

const canvas = document.getElementById('view');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setClearColor(0x121110, 1);

const game = new Game(renderer);
window.__mirror = game;

const query = new URLSearchParams(location.search);
const prOverride = query.get('pr') ? +query.get('pr') : null; // QA: force a render scale
let dprCap = prOverride || Math.min(window.devicePixelRatio || 1, 2);
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setPixelRatio(dprCap);
  renderer.setSize(w, h, false);
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  game.resize(w, h);
}
window.addEventListener('resize', resize);
window.addEventListener('orientationchange', () => setTimeout(resize, 120));
if (window.visualViewport) window.visualViewport.addEventListener('resize', resize);
resize();

// ---- pointer input (touch, pen or mouse all become the same single-finger drag)
const rectOf = () => canvas.getBoundingClientRect();
function local(e) { const r = rectOf(); return [e.clientX - r.left, e.clientY - r.top]; }
canvas.addEventListener('pointerdown', e => {
  e.preventDefault();
  try { canvas.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
  const [x, y] = local(e);
  game.onDown(e.pointerId, x, y);
}, { passive: false });
canvas.addEventListener('pointermove', e => {
  e.preventDefault();
  const [x, y] = local(e);
  game.onMove(e.pointerId, x, y);
}, { passive: false });
const up = cancelled => e => {
  const [x, y] = local(e);
  game.onUp(e.pointerId, x, y, cancelled);
};
canvas.addEventListener('pointerup', up(false));
canvas.addEventListener('pointercancel', up(true));
canvas.addEventListener('lostpointercapture', up(true));
// iOS Safari: keep the page from scrolling, zooming or showing callouts
for (const ev of ['touchstart', 'touchmove', 'touchend', 'gesturestart', 'gesturechange', 'dblclick', 'contextmenu']) {
  document.addEventListener(ev, e => { if (e.cancelable) e.preventDefault(); }, { passive: false });
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden && game.pointer.active) game.onUp(game.pointer.id, 0, 0, true);
});

// ---- main loop, with a gentle resolution governor for slower devices
let last = performance.now();
let slow = 0, fast = 0;
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;
  game.update(dt);
  game.render();
  if (dt > 1 / 40) { slow++; fast = 0; } else { fast++; slow = Math.max(0, slow - 1); }
  if (prOverride) { requestAnimationFrame(frame); return; }
  if (slow > 45 && dprCap > 1) { dprCap = Math.max(1, dprCap - 0.25); slow = 0; resize(); }
  if (fast > 600 && dprCap < Math.min(window.devicePixelRatio || 1, 2)) { dprCap = Math.min(2, dprCap + 0.25); fast = 0; resize(); }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
