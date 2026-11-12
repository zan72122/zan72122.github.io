// 起動: 固定 1/30 秒の状態更新と補間描画を分離したループ。
import * as THREE from 'three';
import { buildRoute, PIECE_COUNT } from './core/route.js';
import * as SIM from './core/sim.js';
import { createWorld, capture } from './view/world.js';
import { createInput, HIT } from './input.js';
import { createUI } from './ui.js';
import { createAudio } from './audio.js';
import { createQualityGovernor, pixelRatioFor, LEVELS } from './quality.js';
import { createPerf } from './perf.js';

const params = new URLSearchParams(location.search);
// ?test=1: 自動検査用。状態は __game.advance() でだけ進む(入力は通常どおり処理)
const manual = params.has('test');
const STEP = SIM.STEP;
const MAX_FRAME = 0.25; // 復帰時などに大量の時間を進めない

const canvas = document.getElementById('view');
const uiRoot = document.getElementById('ui');

function fail(msg) {
  const d = document.createElement('div');
  d.className = 'fallback';
  d.textContent = msg;
  document.getElementById('app').appendChild(d);
}

let renderer;
try {
  const aa = params.get('aa') !== '0'; // 検査用に MSAA を外せる
  const gl = canvas.getContext('webgl2', { antialias: aa, alpha: false, powerPreference: 'high-performance', stencil: false });
  if (!gl) throw new Error('WebGL2 unavailable');
  renderer = new THREE.WebGLRenderer({ canvas, context: gl, antialias: aa });
} catch (e) {
  fail('この端末のブラウザーでは WebGL2 が使えません。(WebGL2 required)');
  throw e;
}
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.95;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.shadowMap.autoUpdate = false;
renderer.info.autoReset = false;

const route = buildRoute();
let st = SIM.createState(route);
const world = createWorld(renderer, route);
const audio = createAudio();
const perf = createPerf(uiRoot, params.has('perf'));
const forced = params.get('quality');
const governor = createQualityGovernor({ forced: forced === 'low' ? 2 : forced === 'mid' ? 1 : forced === 'high' ? 0 : null });

let prev = capture(st, route);
let cur = capture(st, route, null);
let acc = 0;
let last = performance.now();
let paused = false;
let hidden = document.visibilityState === 'hidden';
let contextLost = false;
let rafId = 0;
let renderTime = 0; // 見た目の時間(休止中は止まる)
let needRender = true;
const quality = { name: LEVELS[governor.level].name, dpr: 1, pixels: 0, level: governor.level };
let pendingInputs = [];

// ---------- 大きさ ----------
let cssW = 0, cssH = 0;
function applySize() {
  const w = Math.max(1, Math.round(canvas.clientWidth || window.innerWidth));
  const h = Math.max(1, Math.round(canvas.clientHeight || window.innerHeight));
  cssW = w; cssH = h;
  const dpr = pixelRatioFor(governor.level, w, h, window.devicePixelRatio || 1);
  renderer.setPixelRatio(dpr);
  renderer.setSize(w, h, false);
  world.resize(w, h);
  quality.dpr = dpr;
  quality.pixels = Math.round(w * dpr) * Math.round(h * dpr);
  quality.level = governor.level;
  quality.name = LEVELS[governor.level].name;
  world.setShadowEvery(LEVELS[governor.level].shadowEvery);
  world.setSnailEvery(LEVELS[governor.level].snailEvery);
  world.slime.setQuality(governor.level);
  needRender = true;
}
let resizeTimer = 0;
function onResize() {
  // 回転や大きさの変化: ドラッグは取り消して選択位置へ戻す(選択と進行は保つ)
  input.cancel();
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(applySize, 60);
  applySize();
}

// ---------- 状態の操作 ----------
function nominalSlotTarget(slotId) {
  const p = world.slime.slotWorld[slotId].p;
  return { x: p.x, y: p.y, z: p.z };
}
const actions = {
  select(id) { SIM.selectTag(st, id); needRender = true; },
  deselect() { SIM.returnSelected(st, false); needRender = true; },
  attach(slotId) { SIM.attachSelected(st, slotId, nominalSlotTarget(slotId)); needRender = true; },
  interrupt() { SIM.interrupt(st); world.tags.overlay.drag = null; needRender = true; },
  hint(slotId) { SIM.requestHint(st, slotId); needRender = true; },
};

const input = createInput(canvas, {
  state: () => st,
  world,
  overlay: () => world.tags.overlay,
  canPlay: () => !paused && !hidden && !contextLost && st.phase === 'play',
  noteInput: (ts) => pendingInputs.push(ts),
  select: (id) => actions.select(id),
  deselect: () => actions.deselect(),
  attach: (s) => actions.attach(s),
  interrupt: () => actions.interrupt(),
  hint: (s) => actions.hint(s),
  setDrag: (d) => { world.tags.overlay.drag = d; world.view.dragging = !!d; },
  setSnap: (s) => { world.view.snapSlot = s; },
});

const ui = createUI(uiRoot, {
  onStart() {
    audio.enable();
    SIM.startGame(st);
    syncUI();
  },
  onPause() {
    setPaused(!paused);
  },
  onReset() {
    resetAll();
  },
  onReplay() {
    if (SIM.replaySlide(st)) syncUI();
  },
});
function syncUI() { ui.sync({ paused, phase: st.phase }); lastPhase = st.phase; }
// 状態の段階が変わったら絵ボタンを出し入れする(描画の有無とは無関係に)
let lastPhase = null;
function syncPhase() { if (lastPhase !== st.phase) syncUI(); }

function setPaused(p) {
  paused = p;
  if (paused) {
    input.cancel();
    world.tags.overlay.drag = null;
    audio.suspend();
  } else {
    last = performance.now();
    acc = 0;
    if (!hidden) audio.resume();
  }
  needRender = true;
  syncUI();
}

function resetAll() {
  st = SIM.createState(route);
  SIM.startGame(st);
  st.hint.active = true;
  prev = capture(st, route, prev);
  cur = capture(st, route, cur);
  acc = 0;
  input.cancel();
  world.tags.overlay.drag = null;
  world.view.snapSlot = -1;
  audio.reset();
  if (paused) setPaused(false);
  needRender = true;
  syncUI();
}

// ---------- 音と演出のきっかけ ----------
function handleEvents() {
  for (const e of st.events) {
    if (e.type === 'stick') {
      const p = world.slime.slotWorld[e.slot].p;
      audio.stick(p.x / 9, 1);
    } else if (e.type === 'cureStart') {
      const p = world.slime.slotWorld[e.piece * 2].p;
      audio.stretch(p.x / 9, e.kind === 2 ? 1.2 : 0.8);
    } else if (e.type === 'select') {
      audio.soft(560, 0.12, 0.025);
    } else if (e.type === 'deselect') {
      audio.soft(420, 0.12, 0.02);
    } else if (e.type === 'finaleStage' && e.stage === 'turn') {
      audio.stretch(0, 4.0);
    } else if (e.type === 'finaleStage' && e.stage === 'podDown') {
      audio.stretch(-0.6, 2.4);
    }
  }
  st.events.length = 0;
}

// ---------- ループ ----------
function frame(now) {
  rafId = requestAnimationFrame(frame);
  if (contextLost) return;
  let dt = (now - last) / 1000;
  last = now;
  if (!(dt >= 0)) dt = 0;
  const realMs = dt * 1000;
  if (dt > MAX_FRAME) dt = MAX_FRAME;
  if (!paused && !hidden && !manual) {
    acc += dt;
    let n = 0;
    while (acc >= STEP && n < 10) {
      prev = capture(st, route, prev);
      SIM.step(st, STEP);
      cur = capture(st, route, cur);
      acc -= STEP;
      n++;
    }
    if (n === 10) acc = 0;
    handleEvents();
    renderTime += dt;
    needRender = true;
  }
  syncPhase();
  if (!needRender) return;
  const alpha = Math.min(1, acc / STEP);
  world.update(st, prev, cur, alpha, paused ? 0 : dt, renderTime);
  world.tags.updateOverlay(st, paused ? 0 : dt, renderTime, { w: cssW, h: cssH });
  renderer.info.reset();
  world.render(renderer);
  world.tags.renderOverlay(renderer);
  if (paused || manual) needRender = false;
  // 音量(転がる玉・滑走)
  let rolling = 0;
  for (const b of st.balls) if (b.moving) rolling++;
  audio.setLevels(paused ? 0 : rolling, st.finale && st.finale.stage === 'slide' ? st.girl.slideV || 0 : 0);
  // 計測
  const t2 = performance.now();
  for (const ts of pendingInputs) perf.input(t2 - ts);
  pendingInputs.length = 0;
  perf.frame(realMs, renderer.info.render, quality, renderer.info.memory);
  if (!paused) {
    governor.push(now, realMs);
    const nl = governor.evaluate(now);
    if (nl !== null) { perf.level(nl); applySize(); }
  }
}

function startLoop() {
  cancelAnimationFrame(rafId);
  last = performance.now();
  acc = 0;
  rafId = requestAnimationFrame(frame);
}

// ---------- 背景化・再表示 ----------
function onHidden() {
  if (hidden) return;
  hidden = true;
  // 中断: 選択を解除して未使用タグを床へ。貼ったタグと途中支持は保持
  input.cancel();
  SIM.interrupt(st);
  world.tags.overlay.drag = null;
  audio.suspend();
  cancelAnimationFrame(rafId);
}
function onShown() {
  if (!hidden) return;
  hidden = false;
  if (!paused) audio.resume();
  needRender = true;
  startLoop();
}
document.addEventListener('visibilitychange', () => (document.visibilityState === 'hidden' ? onHidden() : onShown()));
window.addEventListener('pagehide', onHidden);
window.addEventListener('pageshow', () => { if (document.visibilityState !== 'hidden') onShown(); });
window.addEventListener('blur', () => input.cancel());
window.addEventListener('resize', onResize);
window.addEventListener('orientationchange', onResize);

// ---------- WebGL の文脈喪失 ----------
canvas.addEventListener('webglcontextlost', (e) => {
  e.preventDefault();
  contextLost = true;
  input.cancel();
  SIM.interrupt(st);
  audio.suspend();
});
canvas.addEventListener('webglcontextrestored', () => {
  contextLost = false;
  world.rebuildEnvironment();
  for (const P of world.slime.pieces) P.sig = '';
  applySize();
  if (!paused && !hidden) audio.resume();
  needRender = true;
  last = performance.now();
  acc = 0;
});

applySize();
syncUI();
startLoop();
// 点検用の視点(?cam=x,y,z,tx,ty,tz,fov)。通常の遊びでは使わない
if (params.has('cam')) world.rig.setOverride(params.get('cam').split(',').map(Number));

// ---------- 検査用の窓口(画面には何も出さない) ----------
window.__game = {
  get state() { return st; },
  route, world, renderer, SIM, HIT, audio, perf, governor, quality,
  get paused() { return paused; },
  get hidden() { return hidden; },
  get contextLost() { return contextLost; },
  setPaused,
  resetAll,
  simulateHidden(h) { if (h) onHidden(); else onShown(); },
  screen() { return { w: cssW, h: cssH }; },
  slotsOnScreen() { return world.screenSlots(cssW, cssH); },
  tagsOnScreen() { return world.screenTags(cssW, cssH); },
  overlay() { const o = world.tags.overlay; return { visible: o.visible, cx: o.cx, cy: o.cy, size: o.sizePx }; },
  invariants() { return SIM.checkInvariants(st); },
  // 検査用: 同じ固定刻みで状態を進めてから一度描く(実時間を待たずに確認するため)
  advance(seconds, render = true) {
    const n = Math.round(seconds / STEP);
    for (let k = 0; k < n; k++) {
      prev = capture(st, route, prev);
      SIM.step(st, STEP);
      cur = capture(st, route, cur);
      handleEvents();
    }
    renderTime += seconds;
    acc = 0;
    needRender = true;
    syncPhase();
    // 見た目の位置(判定に使う画面上の位置を含む)は常に更新し、描画は必要な時だけ
    for (let k = 0; k < Math.max(1, Math.min(12, n)); k++) world.tags.updateOverlay(st, STEP, renderTime, { w: cssW, h: cssH });
    world.update(st, prev, cur, 1, STEP, renderTime);
    if (render) {
      renderer.info.reset();
      world.render(renderer);
      world.tags.renderOverlay(renderer);
    }
    return st.t;
  },
  renderInfo() { return { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures, programs: renderer.info.programs ? renderer.info.programs.length : 0 }; },
  counts() { return SIM.tagCounts(st); },
  pieceCount: PIECE_COUNT,
};
