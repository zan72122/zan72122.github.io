import * as THREE from 'three';
import { CONFIG } from './config.js';
import { createTextures } from './textures.js';
import { createMaterials } from './materials.js';
import { setupEnvironment } from './environment.js';
import { createWorld } from './world.js';
import { Effects } from './effects.js';
import { TargetManager } from './targets.js';
import { ProjectileManager } from './projectiles.js';
import { Input } from './input.js';
import { AudioEngine } from './audio.js';
import { UI } from './ui.js';
import { Game } from './game.js';
import { PostFX } from './postfx.js';
import { Quality } from './quality.js';
import { Debris } from './debris.js';
import { LightShow } from './lightshow.js';
import { CameraDirector } from './cameradirector.js';

const DEBUG = new URLSearchParams(location.search).has('debug');

// ---- レンダラ ----
const canvas = document.getElementById('game-canvas');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
  stencil: false,
});
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setPixelRatio(Math.min(window.devicePixelRatio, CONFIG.maxPixelRatio));

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(CONFIG.camera.fov, 2, 0.1, 200);
camera.position.set(...CONFIG.camera.pos);
camera.lookAt(new THREE.Vector3(...CONFIG.camera.look));
const camDir = new CameraDirector(camera);

const postfx = new PostFX(renderer);
const quality = new Quality(renderer, postfx, () => resize());

// ---- 各サブシステム ----
const T = createTextures();
const M = createMaterials(T);
const env = setupEnvironment(renderer, scene);
const lightshow = new LightShow(scene, env, T);
const world = createWorld(scene, M, T);
const effects = new Effects(scene, T);
const targets = new TargetManager(scene, M, T);
const projectiles = new ProjectileManager(scene, M, T);
const debris = new Debris(scene);
const input = new Input(canvas, camera, targets);
const audio = new AudioEngine();
const ui = new UI();
const game = new Game({ targets, projectiles, effects, audio, ui, input, debris, lightshow, camDir });

// 重い端末では Stage 3 でビーム非表示・破片半減
quality.onStageChange((stage) => {
  lightshow.setBeamsVisible(stage < 3);
  debris.reduced = stage >= 3;
});

// テスト/デバッグ用に公開
window.__game = { game, renderer, scene, targets, projectiles, postfx, quality, camera, camDir, lightshow, debris };

// ---- リサイズ(iOS の 100vh / 回転対応) ----
function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h, false);
  postfx.setSize(w, h, renderer.getPixelRatio());
  camera.aspect = w / h;
  // 縦画面でも横方向の舞台幅を確保。的の位置・速度・判定は変えない。
  const portraitFov = THREE.MathUtils.radToDeg(2 * Math.atan(
    Math.tan(THREE.MathUtils.degToRad(CONFIG.camera.fov / 2)) * 1.5 / camera.aspect));
  camDir.setBaseFov(w > h ? CONFIG.camera.fov : Math.max(CONFIG.camera.fovPortrait, portraitFov));
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
window.addEventListener('orientationchange', () => setTimeout(resize, 60));
if (window.visualViewport) window.visualViewport.addEventListener('resize', resize);
resize();

// ---- iOS Safari のジェスチャ抑止 ----
for (const ev of ['gesturestart', 'gesturechange', 'gestureend']) {
  document.addEventListener(ev, (e) => e.preventDefault());
}
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('dblclick', (e) => e.preventDefault());
document.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

// ---- メインループ ----
const clock = new THREE.Clock();
let elapsed = 0;
let debugTimer = 0;

renderer.info.autoReset = false; // 複数パスの draw call を合算して見るため手動リセット

function loop() {
  renderer.info.reset();
  const rawDt = clock.getDelta();
  const dt = Math.min(rawDt, 0.05); // 復帰時の暴走防止
  elapsed += dt;
  const t = elapsed;

  game.update(t, dt);
  world.update(t);
  targets.update(t, dt, game.playing);
  projectiles.update(t, dt, targets, effects);
  effects.update(t, dt);
  debris.update(dt);
  lightshow.update(t, dt);

  camDir.update(t, dt);

  postfx.render(scene, camera);
  quality.frame(rawDt, t);

  if (DEBUG) {
    debugTimer += dt;
    if (debugTimer > 0.5) {
      debugTimer = 0;
      const info = renderer.info.render;
      ui.debug(
        `calls: ${info.calls}\ntris: ${info.triangles}\n` +
        `dt: ${(rawDt * 1000).toFixed(1)}ms\nDPR: ${renderer.getPixelRatio().toFixed(2)}\n` +
        `stage: ${quality.stage} bloom: ${postfx.enabled ? 'on' : 'off'}\n` +
        `state: ${game.state}`
      );
    }
  }

  requestAnimationFrame(loop);
}
// Bloom ON/OFF 両方のシェーダを起動時にコンパイルしておく(切替時のヒッチ防止)
postfx.prewarm(scene, camera);
requestAnimationFrame(loop);
