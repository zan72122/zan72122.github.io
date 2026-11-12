// main.js — エントリポイント
// レンダラ・ループ・ゲーム状態(タイトル/プレイ/クリア/ゲームオーバー)の統括
import * as THREE from 'three';
import { input, initInput, updateInput, endFrame } from './input.js';
import { createStage, groundHeight, KILL_Y, TOTAL_STARS } from './stage.js';
import { Player } from './player.js';
import { Enemies } from './enemies.js';
import { Items, FX } from './items.js';
import { FollowCam } from './camera.js';
import { hud } from './hud.js';
import { audio } from './audio.js';

window.__BOOT_OK = true; // CDN読み込み失敗検知用(index.htmlのフォールバックが参照)

const STEP = 1 / 60;
const DEBUG = new URLSearchParams(location.search).has('debug');

// --- レンダラ・シーン ---
const canvas = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8ecbff);
scene.fog = new THREE.Fog(0x8ecbff, 60, 170);

const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 400);

scene.add(new THREE.HemisphereLight(0xbfe7ff, 0x7fbf6a, 0.95));
const sun = new THREE.DirectionalLight(0xffffff, 1.15);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -28;
sun.shadow.camera.right = 28;
sun.shadow.camera.top = 28;
sun.shadow.camera.bottom = -28;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 120;
sun.shadow.bias = -0.0008;
scene.add(sun);
scene.add(sun.target);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// --- ゲームオブジェクト ---
let coins = 0;
let stars = 0;
let state = 'title'; // 'title' | 'play' | 'clear' | 'gameover'
let pending = null; // { timer, action }

const events = {
  onJump: (chain) => audio.jump(chain),
  onLand: () => {},
  onCoin: () => {
    coins++;
    hud.setCoins(coins);
    audio.coin();
  },
  onStar: () => {
    stars++;
    hud.setStars(stars);
    audio.star();
    if (stars >= TOTAL_STARS) {
      schedule(1.3, () => {
        audio.stopBGM();
        audio.clearJingle();
        hud.setClearStats(coins);
        hud.showScreen('clear');
        state = 'clear';
      });
    }
  },
  onStomp: (pos) => {
    audio.stomp();
    coins++;
    hud.setCoins(coins);
    fx.burst(pos, 0xc7cdd8, 10);
  },
  onHurt: () => {
    hud.setHp(player.hp);
    hud.flashDamage();
    audio.hurt();
    if (player.hp <= 0) {
      player.die();
      schedule(1.1, showGameOver);
    }
  },
};

const stage = createStage(scene);
const fx = new FX(scene);
const player = new Player(scene, events);
const enemies = new Enemies(scene, stage, events);
const items = new Items(scene, stage, events, fx);
const cam = new FollowCam(camera, groundHeight);
const moverByMesh = new Map(stage.movers.map((m) => [m.mesh, m]));

player.respawn(stage.spawn);
hud.init(player.maxHp, TOTAL_STARS);
hud.showScreen('title');
initInput(canvas);

if (DEBUG) {
  const helperMat = new THREE.LineBasicMaterial({ color: 0xff00ff });
  for (const b of stage.solidBoxes) {
    const box = new THREE.Box3(
      new THREE.Vector3(b.minX, b.minY, b.minZ),
      new THREE.Vector3(b.maxX, b.maxY, b.maxZ)
    );
    scene.add(new THREE.Box3Helper(box, 0xff00ff));
  }
  for (const c of stage.solidCyls) {
    const geo = new THREE.CylinderGeometry(c.r, c.r, c.maxY - c.minY, 12, 1, true);
    const wire = new THREE.LineSegments(new THREE.WireframeGeometry(geo), helperMat);
    wire.position.set(c.x, (c.minY + c.maxY) / 2, c.z);
    scene.add(wire);
  }
}

function schedule(timer, action) {
  if (!pending) pending = { timer, action };
}

function showGameOver() {
  audio.stopBGM();
  audio.gameover();
  hud.showScreen('over');
  state = 'gameover';
}

function resetGame() {
  coins = 0;
  stars = 0;
  pending = null;
  player.fullReset(stage.spawn);
  items.reset();
  enemies.reset();
  hud.setHp(player.hp);
  hud.setCoins(0);
  hud.setStars(0);
  hud.showScreen('play');
  state = 'play';
  audio.startBGM();
}

function startGame() {
  audio.init();
  resetGame();
}

document.getElementById('btn-start').addEventListener('click', startGame);
document.getElementById('btn-again').addEventListener('click', () => {
  audio.init();
  resetGame();
});
document.getElementById('btn-retry').addEventListener('click', () => {
  audio.init();
  resetGame();
});
document.getElementById('btn-start').disabled = false;

window.addEventListener('keydown', (e) => {
  if (e.code !== 'Enter' && e.code !== 'Space') return;
  if (state === 'title') startGame();
  else if (state === 'clear' || state === 'gameover') {
    audio.init();
    resetGame();
  }
});

// --- 更新 ---
let t = 0;

function tick(dt) {
  t += dt;
  stage.update(t); // 動く足場の移動 + matrixWorld 更新(レイキャストより先)

  if (pending) {
    pending.timer -= dt;
    if (pending.timer <= 0) {
      const action = pending.action;
      pending = null;
      action();
    }
  }

  const playing = state === 'play';

  if (playing || state === 'clear' || state === 'gameover') {
    // 乗っている動く足場の移動差分を先に伝える
    const mover = moverByMesh.get(player.groundObject);
    if (mover) player.pos.add(mover.delta);

    player.update(dt, input, cam.yaw, stage);
    enemies.update(dt, playing ? player : null);
    items.update(dt, player, playing);
    fx.update(dt);

    // 落下死
    if (playing && player.pos.y < KILL_Y && !player.dead) {
      player.hp--;
      hud.setHp(player.hp);
      audio.hurt();
      if (player.hp > 0) {
        hud.flashWhite();
        player.respawn(stage.spawn);
      } else {
        player.die();
        schedule(0.8, showGameOver);
      }
    }
  } else {
    // タイトル中も世界は生きている
    enemies.update(dt, null);
    items.update(dt, player, false);
    fx.update(dt);
  }

  cam.update(dt, player.pos, input, stage.occluders, state === 'title');

  // 影カメラをプレイヤーに追従
  sun.position.set(player.pos.x + 22, player.pos.y + 32, player.pos.z + 14);
  sun.target.position.copy(player.pos);
}

// --- メインループ(固定タイムステップ) ---
let last = performance.now();
let acc = 0;

function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min((now - last) / 1000, 0.05);
  last = now;
  acc += dt;
  let sub = 0;
  updateInput();
  while (acc >= STEP && sub < 3) {
    tick(STEP);
    acc -= STEP;
    sub++;
  }
  if (acc > STEP) acc = STEP; // 巨大dtの持ち越しを捨てる
  endFrame();
  renderer.render(scene, camera);
}

requestAnimationFrame(frame);
