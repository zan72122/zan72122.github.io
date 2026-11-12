// メイン：描画・入力・カメラ・進行・ヒント
import * as THREE from '../vendor/three.module.min.js';
import { Bus, DIM } from './bus.js';
import { World, Trail, TargetMarker, createEnvironment } from './world.js';
import { GameAudio } from './audio.js';
import { LEVELS } from './levels.js';
import { dirOf, leftOf, wrapAngle, clamp, lerp } from './geom.js';

const $ = (id) => document.getElementById(id);

// ---------- レンダラ ----------
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xd8e8f2, 120, 320);
const camera = new THREE.PerspectiveCamera(42, 1, 0.5, 600);

const env = createEnvironment(renderer);
scene.environment = env;

// ライト
const hemi = new THREE.HemisphereLight(0xcfe6ff, 0x5a7a3a, 0.55);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff2dc, 2.4);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near = 10; sun.shadow.camera.far = 200;
sun.shadow.camera.left = -42; sun.shadow.camera.right = 42; sun.shadow.camera.top = 42; sun.shadow.camera.bottom = -42;
sun.shadow.bias = -0.0008; sun.shadow.normalBias = 0.03;
scene.add(sun, sun.target);
const SUN_DIR = new THREE.Vector3(-0.55, 1.0, 0.35).normalize();

const world = new World(scene, env);
const bus = new Bus(scene, env);
const audio = new GameAudio();
const marker = new TargetMarker(scene);
// タイヤのあと：前輪（きいろ）と後輪（あお）、左右それぞれ
const TRAIL_W = 0.3;
const trails = {
  fL: new Trail(scene, 0xffd23f, TRAIL_W), fR: new Trail(scene, 0xffd23f, TRAIL_W),
  rL: new Trail(scene, 0x35b8ff, TRAIL_W), rR: new Trail(scene, 0x35b8ff, TRAIL_W),
};
const ghosts = {};
for (const k in trails) { ghosts[k] = new Trail(scene, k[0] === 'f' ? 0xffd23f : 0x35b8ff, TRAIL_W, 3000, 0.025); ghosts[k].mat.opacity = 0.32; }

// ---------- 状態 ----------
const G = {
  levelIdx: 0,
  state: 'title',   // title | intro | play | finish | result | resetting
  t: 0,
  target: null,     // Vector3 | null
  targetAge: 0,
  noTouchTime: 0,
  hasTouched: false,
  hints: {},
  finishTimer: 0,
  fade: 0,
  camYaw: 0, camDist: 26, camFocus: new THREE.Vector3(), camPos: new THREE.Vector3(), camLook: new THREE.Vector3(),
  camMode: 'chase',
  wheelOutside: {},
  maxPhi: 0,
  startTheta: 0,
  soundOn: true,
  hintHandTimer: 0,
};

function loadLevel(idx, keepGhost = false) {
  G.levelIdx = idx;
  const lv = LEVELS[idx];
  world.buildLevel(lv);
  const sm = world.path.at(lv.startS);
  bus.reset(sm.p.x, sm.p.z, sm.theta);
  G.startTheta = sm.theta;
  G.target = null; marker.hide();
  for (const k in trails) { if (keepGhost) trails[k].copyTo(ghosts[k]); else ghosts[k].clear(); trails[k].clear(); }
  G.hints = {};
  G.maxPhi = 0; G.wheelOutside = {};
  G.finishTimer = 0; G.noTouchTime = 0; G.hasTouched = false;
  G.camMode = 'chase';
  // カメラ初期値（バスとカーブが同時に見える位置）
  const arc = world.path.nextArc(lv.startS);
  G.camYaw = sm.theta - 0.85 * arc.dir;
  G.camDist = 34;
  G.camFocus.copy(bus.hinge()).addScaledVector(dirOf(sm.theta), 8);
  updateCamera(0, true);
  setLevelDots();
  $('levelName').textContent = lv.name;
  showBubble(`${idx + 1}. ${lv.name}`, 1800);
}

// ---------- UI ----------
function showBubble(text, ms = 2200) {
  const b = $('bubble');
  b.textContent = text;
  b.classList.add('show');
  clearTimeout(showBubble._t);
  showBubble._t = setTimeout(() => b.classList.remove('show'), ms);
}
function setLevelDots() {
  const dots = $('levelDots').children;
  for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', i === G.levelIdx);
}
function hint(key, text, ms) {
  if (G.hints[key]) return;
  G.hints[key] = true;
  showBubble(text, ms);
}

$('startBtn').addEventListener('click', () => {
  audio.unlock(); audio.blip();
  $('title').classList.add('hide');
  startLevel(0, false);
});
$('restartBtn').addEventListener('click', () => { audio.unlock(); audio.blip(); startLevel(G.levelIdx, true); });
$('againBtn').addEventListener('click', () => { audio.blip(); startLevel(G.levelIdx, true); });
$('nextBtn').addEventListener('click', () => { audio.blip(); startLevel((G.levelIdx + 1) % LEVELS.length, false); });
$('soundBtn').addEventListener('click', () => {
  audio.unlock();
  G.soundOn = !G.soundOn; audio.setEnabled(G.soundOn);
  $('soundBtn').textContent = G.soundOn ? '🔊' : '🔇';
});
Array.from($('levelDots').children).forEach((d, i) => d.addEventListener('click', () => { audio.unlock(); audio.blip(); startLevel(i, false); }));

function startLevel(idx, keepGhost) {
  $('result').classList.remove('show');
  $('hud').classList.remove('hidden');
  loadLevel(idx, keepGhost && idx === G.levelIdx);
  G.state = 'intro'; G.t = 0;
  audio.hiss();
}

// ---------- 入力（1本指）----------
const ray = new THREE.Raycaster();
const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
const ndc = new THREE.Vector2();
let pointerDown = false;
function pointerToGround(ev) {
  const r = canvas.getBoundingClientRect();
  ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const p = new THREE.Vector3();
  if (ray.ray.intersectPlane(groundPlane, p)) return p;
  return null;
}
function setTarget(p) {
  if (!p) return;
  // 極端に遠い点は前方に丸める（バスが迷子にならない）
  const nose = bus.frontAxle();
  const dx = p.x - nose.x, dz = p.z - nose.z;
  const dist = Math.hypot(dx, dz);
  if (dist > 60) { p.x = nose.x + (dx / dist) * 60; p.z = nose.z + (dz / dist) * 60; }
  G.target = p; G.targetAge = 0; G.noTouchTime = 0; G.hasTouched = true;
  marker.set(p);
  $('hand').classList.add('hidden');
}
canvas.addEventListener('pointerdown', (ev) => {
  audio.unlock();
  if (G.state !== 'play' && G.state !== 'intro') return;
  pointerDown = true;
  canvas.setPointerCapture(ev.pointerId);
  setTarget(pointerToGround(ev));
  if (G.state === 'intro') { G.state = 'play'; }
});
canvas.addEventListener('pointermove', (ev) => {
  if (!pointerDown) return;
  if (G.state !== 'play') return;
  setTarget(pointerToGround(ev));
});
const up = (ev) => { pointerDown = false; };
canvas.addEventListener('pointerup', up);
canvas.addEventListener('pointercancel', up);
canvas.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
canvas.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

// ---------- 操舵ロジック ----------
function pursuitSteer(target, maxDelta) {
  const R1 = bus.driveAxle();
  const d1 = dirOf(bus.th1), n1 = leftOf(bus.th1);
  const tx = target.x - R1.x, tz = target.z - R1.z;
  const Ld = Math.max(5.0, Math.hypot(tx, tz));
  const alpha = Math.atan2(tx * n1.x + tz * n1.z, tx * d1.x + tz * d1.z);
  const delta = Math.atan((2 * DIM.W1 * Math.sin(alpha)) / Ld);
  return clamp(delta, -maxDelta, maxDelta);
}
function computeSteer() {
  const nose = bus.frontAxle();
  if (G.target) {
    const dist = Math.hypot(G.target.x - nose.x, G.target.z - nose.z);
    if (dist < 2.2) { G.target = null; marker.hide(); }
    else return pursuitSteer(G.target, DIM.steerMax);
  }
  // 指が離れているとき：道の中心へ弱くもどる（勝手には曲がりすぎない）
  const nr = world.path.nearest(nose);
  const ahead = world.path.at(nr.s + 9);
  const w = clamp((G.noTouchTime - 0.8) / 2.5, 0, 1);
  const outside = clamp((Math.abs(nr.lat) - world.roadWidth / 2) / 4, 0, 1);
  const gain = lerp(0.35, 1.0, Math.max(w, outside));
  return pursuitSteer(ahead.p, DIM.steerMax * 0.55) * gain;
}

// ---------- カメラ ----------
function updateCamera(dt, snap = false) {
  const aspect = camera.aspect;
  const portrait = aspect < 1;
  const H = bus.hinge();
  const nose = bus.frontAxle();
  let focus, yawTarget, distTarget, heightRatio, fov;
  if (G.camMode === 'result') {
    // 曲がり角の上から軌跡を見る
    const arcs = world.path.arcs;
    const a0 = arcs[0], a1 = arcs[arcs.length - 1];
    const m0 = world.path.at((a0.s0 + a0.s1) / 2).p, m1 = world.path.at((a1.s0 + a1.s1) / 2).p;
    focus = m0.clone().lerp(m1, 0.5);
    yawTarget = a0.theta0 + a0.dir * 0.5;
    // 縦画面ではカードが下に出るので、カーブを画面上半分に置く
    if (portrait) focus.addScaledVector(dirOf(G.camYaw), -9);
    distTarget = (portrait ? 30 : 26) + (arcs.length > 1 ? 8 : 0);
    heightRatio = portrait ? 1.7 : 1.3;
    fov = 45;
  } else {
    const arc = world.path.nextArc(world.path.nearest(nose).s);
    const dir = arc ? arc.dir : 1;
    const inTurn = clamp(Math.abs(bus.phi) / 0.35, 0, 1);
    const ahead = world.path.at(world.path.nearest(nose).s + 7);
    focus = H.clone().lerp(ahead.p, 0.45);
    // カメラはカーブの内側・後方から（蛇腹の圧縮が見える）
    yawTarget = bus.th1 - (portrait ? 0.6 : 0.9) * dir;
    // 曲がり始めは少し寄る
    distTarget = lerp(portrait ? 40 : 30, portrait ? 32 : 25, inTurn);
    if (G.state === 'intro' || G.state === 'title') distTarget = portrait ? 46 : 32;
    heightRatio = lerp(portrait ? 0.95 : 0.72, portrait ? 0.85 : 0.62, inTurn);
    fov = portrait ? 52 : 42;
  }
  if (snap) {
    G.camYaw = yawTarget; G.camDist = distTarget; G.camFocus.copy(focus);
  } else {
    const k = G.camMode === 'result' ? 1.6 : 1.1;
    G.camYaw += wrapAngle(yawTarget - G.camYaw) * Math.min(1, dt * k);
    G.camDist += (distTarget - G.camDist) * Math.min(1, dt * 1.4);
    G.camFocus.lerp(focus, Math.min(1, dt * 3.0));
  }
  camera.fov += (fov - camera.fov) * (snap ? 1 : Math.min(1, dt * 2));
  camera.updateProjectionMatrix();
  const d = dirOf(G.camYaw);
  const pos = G.camFocus.clone().addScaledVector(d, -G.camDist).add(new THREE.Vector3(0, G.camDist * heightRatio, 0));
  if (snap) G.camPos.copy(pos); else G.camPos.lerp(pos, Math.min(1, dt * 3.0));
  camera.position.copy(G.camPos);
  camera.lookAt(G.camFocus.x, 1.6, G.camFocus.z);
  // 太陽と影の範囲をバスに追従
  sun.position.copy(H).addScaledVector(SUN_DIR, 90);
  sun.target.position.copy(H);
}

// ---------- ゲーム更新 ----------
const clock = new THREE.Clock();
let acc = 0;
const FIXED = 1 / 120;

function physicsStep(dt) {
  let desired = 0, speed = 0;
  if (G.state === 'play') {
    desired = computeSteer();
    const load = Math.abs(bus.delta) / DIM.steerMax;
    speed = 3.6 - load * 1.0;
  } else if (G.state === 'finish') {
    speed = 0; desired = bus.delta * 0.9;
  }
  bus.step(dt, desired, speed);
}

function update(dt) {
  G.t += dt;
  if (G.target) G.targetAge += dt;
  if (!pointerDown) G.noTouchTime += dt;

  if (G.state === 'intro') {
    // 少し待って自動発車（指で触れればすぐ発車）
    if (G.t > 2.2) G.state = 'play';
    if (G.t > 0.6 && !G.hasTouched) $('hand').classList.remove('hidden');
  }

  // 物理（固定ステップ）
  acc += dt;
  let n = 0;
  while (acc >= FIXED && n < 6) { physicsStep(FIXED); acc -= FIXED; n++; }
  bus.updateVisual(dt);

  const nose = bus.frontAxle();
  const rearA = bus.rearAxle();
  if (G.state === 'play' || G.state === 'finish') {
    for (const w of bus.wheelPoints()) {
      if (w.name === 'fL') trails.fL.push(w.p, bus.th1);
      else if (w.name === 'fR') trails.fR.push(w.p, bus.th1);
      else if (w.name === 'rL') trails.rL.push(w.p, bus.th2);
      else if (w.name === 'rR') trails.rR.push(w.p, bus.th2);
    }
  }
  marker.update(dt, bus.frontEnd());

  // 指のヒント位置（前方の道路上）を画面へ投影
  if (!$('hand').classList.contains('hidden')) {
    const nr = world.path.nearest(nose);
    const ahead = world.path.at(nr.s + 10).p;
    const v = ahead.clone().project(camera);
    const r = canvas.getBoundingClientRect();
    $('hand').style.left = `${(v.x * 0.5 + 0.5) * r.width}px`;
    $('hand').style.top = `${(-v.y * 0.5 + 0.5) * r.height}px`;
  }

  // 音
  if (bus.consumeBlinkEvent()) audio.blinkTick(bus.blinkOn);
  audio.update(dt, { speed: bus.v, steer: bus.delta, steerMax: DIM.steerMax, phi: bus.phi, phiRate: bus.phiRate, blinking: bus.blinkSide });

  if (G.state === 'play') {
    // ヒント（謎 → 理解）
    if (Math.abs(bus.delta) > 0.2) hint('turn', 'まえが まがりはじめた！', 1800);
    if (Math.abs(bus.phi) > 0.2) hint('fold', 'じゃばらが ぎゅっと ちぢんだ！', 2000);
    const rearTurned = Math.abs(wrapAngle(bus.th2 - G.startTheta));
    if (rearTurned > 0.45 && G.hints.fold) hint('follow', 'うしろは あとから べつのみちを とおるよ', 2600);
    G.maxPhi = Math.max(G.maxPhi, Math.abs(bus.phi));

    // 縁石にコトン（失敗ではなく、通った場所が分かる音）
    const hw = world.roadWidth / 2;
    for (const w of bus.wheelPoints()) {
      const nr = world.path.nearest(w.p);
      const out = Math.abs(nr.lat) > hw + 0.05;
      const prev = G.wheelOutside[w.name];
      if (prev !== undefined && prev !== out && Math.abs(nr.lat) < hw + 4) {
        audio.bump(0.8);
        bus.bumpImpulse(w.name[0] === 'r' ? 'rear' : 'front', (nr.lat > 0 ? 1 : -1) * (out ? 1 : -1));
        if (w.name[0] === 'r') hint('curb', 'うしろの タイヤが えんせきに のったよ', 1800);
      }
      G.wheelOutside[w.name] = out;
    }
    // コーン
    world.updateCones(dt, bus.bodyCorners(), (which) => {
      audio.coneKnock();
      if (which === 'rear') hint('cone', 'おしりが コーンに あたった！', 1800);
    });

    // ゴール判定
    const nr = world.path.nearest(nose);
    if (nr.s > world.path.total - 8) { G.state = 'finish'; G.target = null; marker.hide(); }
    // 迷子（道から大きく外れた）→ やさしくやり直し
    if (nr.dist > hw + 11 || nr.s < 2) { G.state = 'resetting'; G.fade = 0; showBubble('もういちど いこう', 1500); }
  } else if (G.state === 'finish') {
    world.updateCones(dt, bus.bodyCorners(), () => audio.coneKnock());
    if (bus.v < 0.05) {
      G.finishTimer += dt;
      if (G.finishTimer > 0.6 && G.camMode !== 'result') { G.camMode = 'result'; audio.cheer(); }
      if (G.finishTimer > 1.9) { G.state = 'result'; showResult(); }
    }
  } else if (G.state === 'resetting') {
    G.fade += dt;
    $('fade').style.opacity = String(clamp(G.fade * 2, 0, 1));
    if (G.fade > 0.6) {
      $('fade').style.opacity = '0';
      startLevel(G.levelIdx, true);
    }
  }
  updateCamera(dt);
}

function showResult() {
  $('hud').classList.add('hidden');
  const deg = Math.round((G.maxPhi * 180) / Math.PI);
  const cones = world.cones.filter(c => c.fallen).length;
  let msg;
  if (deg < 18) msg = 'ゆったり おおきく まわったね';
  else if (deg < 34) msg = 'うしろが おくれて ついてきたね';
  else msg = 'じゃばらが ぎゅーっと おれたね！';
  $('resultMsg').textContent = msg;
  $('resultSub').textContent = cones > 0 ? `おしりが コーンを ${cones}こ とばしたよ` : 'コーンには あたらなかったよ';
  $('nextBtn').textContent = G.levelIdx < LEVELS.length - 1 ? 'つぎの みち ▶' : 'さいしょから ▶';
  $('result').classList.add('show');
}

// ---------- ループ ----------
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
window.addEventListener('orientationchange', () => setTimeout(resize, 200));
resize();

// タイトルの裏でも動かしておく（初見で「長いバスと急カーブ」が見える）
loadLevel(0, false);

// テスト用：描画せずに時間を進める
window.__game = {
  G, bus, world, LEVELS, trails, ghosts,
  start: (idx) => { $('title').classList.add('hide'); startLevel(idx ?? 0, false); },
  simulate: (sec, step = 1 / 60) => { for (let t = 0; t < sec; t += step) update(step); },
  tapWorld: (x, z) => setTarget(new THREE.Vector3(x, 0, z)),
  render: () => renderer.render(scene, camera),
};

function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, clock.getDelta());
  if (G.state !== 'title') update(dt);
  else { bus.updateVisual(dt); marker.update(dt, null); updateCamera(dt); }
  renderer.render(scene, camera);
}
frame();
