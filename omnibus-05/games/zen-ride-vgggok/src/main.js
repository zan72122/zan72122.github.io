// 起動：レンダラー、画面サイズと回転、タッチ入力、音声の解錠、メインループ
import * as THREE from '../vendor/three.module.min.js';
import { Sound } from './audio.js';
import { Cockpit } from './cockpit.js';
import { Game } from './game.js';
import { makeEnvironment } from './world.js';

const canvas = document.getElementById('c');
const probe = document.getElementById('safe');

const short = Math.min(screen.width, screen.height);
const touch = navigator.maxTouchPoints > 0;
const quality = { high: !touch || short >= 700 };

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', alpha: false });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.autoClear = false;

let pixelRatio = Math.min(window.devicePixelRatio || 1, quality.high ? 2 : 2);
renderer.setPixelRatio(pixelRatio);

const scene = new THREE.Scene();
const env = makeEnvironment(renderer);
scene.environment = env;
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 900);

const sound = new Sound();
const cockpit = new Cockpit(env, sound);
const game = new Game({ scene, camera, renderer, sound, cockpit, quality });

let W = 1, H = 1;
function safeInsets() {
  const cs = getComputedStyle(probe);
  return {
    top: parseFloat(cs.paddingTop) || 0,
    right: parseFloat(cs.paddingRight) || 0,
    bottom: parseFloat(cs.paddingBottom) || 0,
    left: parseFloat(cs.paddingLeft) || 0,
  };
}
function resize() {
  W = Math.max(1, Math.round(window.innerWidth));
  H = Math.max(1, Math.round(window.innerHeight));
  renderer.setSize(W, H, false);
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  cockpit.resize(W, H, safeInsets());
  game.onResize(H >= W);
}
window.addEventListener('resize', resize);
window.addEventListener('orientationchange', () => setTimeout(resize, 120));
if (window.visualViewport) window.visualViewport.addEventListener('resize', resize);
resize();

// ---------------------------------------------------------------- 入力
function pos(e) {
  const r = canvas.getBoundingClientRect();
  return [e.clientX - r.left, e.clientY - r.top];
}
canvas.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  sound.unlock();
  try { canvas.setPointerCapture(e.pointerId); } catch { /* 無視 */ }
  const [x, y] = pos(e);
  if (!cockpit.pointerDown(e.pointerId, x, y)) game.worldTap(x, y, W, H);
}, { passive: false });
canvas.addEventListener('pointermove', (e) => {
  const [x, y] = pos(e);
  cockpit.pointerMove(e.pointerId, x, y);
}, { passive: true });
const up = (e) => { cockpit.pointerUp(e.pointerId); sound.unlock(); };
canvas.addEventListener('pointerup', up);
canvas.addEventListener('pointercancel', (e) => cockpit.pointerUp(e.pointerId));
canvas.addEventListener('lostpointercapture', (e) => cockpit.pointerUp(e.pointerId));
// iOS：スクロール・拡大・長押しメニューを止める
const stop = (e) => e.preventDefault();
canvas.addEventListener('touchstart', stop, { passive: false });
canvas.addEventListener('touchmove', stop, { passive: false });
canvas.addEventListener('touchend', (e) => { sound.unlock(); e.preventDefault(); }, { passive: false });
document.addEventListener('gesturestart', stop, { passive: false });
document.addEventListener('dblclick', stop, { passive: false });
document.addEventListener('contextmenu', stop);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { sound.suspend(); cockpit.cancelAll(); } else sound.resume();
});
canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault(); });
canvas.addEventListener('webglcontextrestored', () => location.reload());

// ---------------------------------------------------------------- ループ
let last = performance.now();
let worldBottomAnim = H;
let frames = 0, acc = 0, slowCount = 0;
window.GameGuide?.connect({ time: () => game.time, audio: () => sound.ctx, cancelInput: () => cockpit.cancelAll() });
game.start();

function frame(now) {
  requestAnimationFrame(frame);
  if (window.GameGuide?.paused) { last = now; return; }
  let dt = (now - last) / 1000;
  last = now;
  if (dt > 0.1) dt = 0.1;
  const sdt = Math.min(dt, 1 / 30) * (window.__playGuide?.running ? .65 : 1);

  game.update(sdt);
  cockpit.update(sdt, game.time, game.car);

  // 縦画面：下の操縦部の分だけ、世界の中心を上へずらす（画面の縮小ではない）
  const L = cockpit.layout;
  const k = cockpit.show.dash;
  const e = k * k * (3 - 2 * k);
  worldBottomAnim = H + (L.worldBottom - H) * e;
  const Hv = Math.max(100, worldBottomAnim);
  const d = (H - Hv) / 2;
  let fov = game.rig.out.fov;
  const aspectV = W / Hv;
  if (aspectV > 1.75) fov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(fov) / 2) * 1.75 / aspectV));
  const full = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(fov) / 2) * (H + 2 * d) / Hv);
  camera.fov = THREE.MathUtils.radToDeg(full);
  camera.aspect = W / H;
  if (d > 0.5) camera.setViewOffset(W, H + 2 * d, 0, 2 * d, W, H);
  else camera.clearViewOffset();
  camera.updateProjectionMatrix();

  renderer.clear();
  renderer.render(scene, camera);
  renderer.clearDepth();
  renderer.render(cockpit.scene, cockpit.camera);

  // 端末性能に合わせて解像度を下げる
  frames++;
  acc += dt;
  if (acc > 2) {
    const fps = frames / acc;
    if (fps < 40 && pixelRatio > 1.25) {
      slowCount++;
      if (slowCount >= 2) {
        pixelRatio = Math.max(1.25, pixelRatio - 0.25);
        renderer.setPixelRatio(pixelRatio);
        resize();
        slowCount = 0;
      }
    } else slowCount = 0;
    frames = 0; acc = 0;
  }
  if (!booted) {
    booted = true;
    const b = document.getElementById('boot');
    if (b) { b.style.opacity = '0'; setTimeout(() => b.remove(), 600); }
  }
}
let booted = false;
requestAnimationFrame(frame);

// 検証用（自動テストから状態を確認する）。通常のプレイでは使わない
window.__game = {
  game, cockpit, sound, renderer, camera,
  step(sec) {
    const n = Math.round(sec * 30);
    for (let i = 0; i < n; i++) { game.update(1 / 30); cockpit.update(1 / 30, game.time, game.car); }
  },
};
