// そらのはな — 起動とメインループ
import * as THREE from './vendor/three.module.min.js';
import { createSharedUniforms } from './core/shared.js';
import { CameraRig } from './core/camera.js';
import { Input } from './core/input.js';
import { Audio } from './core/audio.js';
import { createSky, createGlare } from './world/sky.js';
import { createGarden, HOUSE } from './world/garden.js';
import { createFlower, VINE_PETAL } from './world/flower.js';
import { createPlant, STEM_TOP } from './world/plant.js';
import { createCharacter } from './world/character.js';
import { createParticles } from './world/particles.js';
import { createSeed, createCan } from './world/props.js';
import { createVine } from './world/vine.js';
import { createInteriorDrops, createBigDrop } from './world/drops.js';
import { createBirds, createButterfly, createCat } from './world/critters.js';
import { Director } from './story.js';
import './story-extra.js';

const G = (window.G = { time: 0, dt: 0, viewW: 1, viewH: 1 });
const params = new URLSearchParams(location.search);
G.params = params;

async function boot() {
  const canvas = document.getElementById('c');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', alpha: false, stencil: false });
  } catch (err) {
    showFallback();
    return;
  }
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.autoClear = false;
  renderer.setClearColor(0xdfe9ee, 1);
  G.renderer = renderer;
  G.scene = new THREE.Scene();
  G.U = createSharedUniforms();
  G.rig = new CameraRig(G);
  G.camera = G.rig.cam;
  G.input = new Input(G, canvas);
  G.audio = new Audio(G);

  G.sky = createSky(G);
  G.glare = createGlare(G);
  G.garden = createGarden(G);
  G.flower = createFlower(G);
  G.scene.add(G.flower.head);
  G.plant = createPlant(G, G.flower);
  G.vine = createVine(G, G.plant, G.flower);
  G.particles = createParticles(G);
  G.particles.groundY = (x, z) => {
    if (Math.abs(x) < 1.35 && Math.abs(z) < 0.95) return G.garden.plot.soilHeight(x, z);
    return 0;
  };
  G.child = createCharacter(G);
  G.seed = createSeed(G);
  G.can = createCan(G);
  G.drops = createInteriorDrops(G, G.flower);
  G.bigDrop = createBigDrop(G);
  G.bigDrop.hide = [G.child.root];
  G.birds = createBirds(G);
  G.butterfly = createButterfly(G);
  G.cat = createCat(G, new THREE.Vector3(7.6, HOUSE.ridgeH + 0.05, (HOUSE.z0 + HOUSE.z1) / 2));

  G.director = new Director(G);

  // 画質の段階 (フレーム時間で自動調整)
  G.pixelRatioMax = Math.min(window.devicePixelRatio || 1, 2);
  G.pixelRatio = params.has('pr') ? parseFloat(params.get('pr')) : G.pixelRatioMax;
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('orientationchange', () => setTimeout(resize, 150));
  if (window.visualViewport) window.visualViewport.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => {
    if (!G.audio.ctx) return;
    if (document.hidden) G.audio.ctx.suspend(); else if (G.audio.ready) G.audio.ctx.resume();
  });

  debugJump(params.get('phase') || 'SEED');

  renderer.compile(G.scene, G.camera);
  let last = performance.now();
  let frameAvg = 16;
  let lowFrames = 0, highFrames = 0;
  const fixedDt = params.has('fixeddt') ? parseFloat(params.get('fixeddt')) : 0;
  function frame(now) {
    requestAnimationFrame(frame);
    const dt = fixedDt || Math.min(0.05, Math.max(0.001, (now - last) / 1000));
    last = now;
    step(dt);
    // 自動画質: 重ければ解像度を下げ、余裕があれば戻す
    frameAvg = frameAvg * 0.95 + (dt * 1000) * 0.05;
    if (!fixedDt && G.time > 3) {
      if (frameAvg > 22) { lowFrames++; highFrames = 0; } else if (frameAvg < 15) { highFrames++; lowFrames = 0; }
      if (lowFrames > 60 && G.pixelRatio > 1) { G.pixelRatio = Math.max(1, G.pixelRatio - 0.25); lowFrames = 0; resize(); }
      if (highFrames > 300 && G.pixelRatio < G.pixelRatioMax) { G.pixelRatio = Math.min(G.pixelRatioMax, G.pixelRatio + 0.25); highFrames = 0; resize(); }
    }
  }
  G.step = step;
  // テスト用: 手動で時間を進める
  G.advance = (seconds, dt = 1 / 30) => {
    const n = Math.max(1, Math.round(seconds / dt));
    for (let i = 0; i < n; i++) simulate(dt);
    render();
  };
  G.sim = (seconds, dt = 1 / 30) => { const n = Math.max(1, Math.round(seconds / dt)); for (let i = 0; i < n; i++) simulate(dt); };
  G.render = render;
  G.debugJump = debugJump;
  if (params.has('manual')) { render(); document.getElementById('veil').style.display = 'none'; }
  else requestAnimationFrame((t) => { last = t; frame(t); });
  setTimeout(() => document.getElementById('veil').classList.add('gone'), 200);
  G.ready = true;
}

function simulate(dt) {
  G.dt = dt;
  G.time += dt;
  G.U.uTime.value = G.time;
  G.director.update(dt);
  G.rig.update(dt);
}
function step(dt) {
  simulate(dt);
  render();
}

function render() {
  const r = G.renderer;
  G.bigDrop.renderRT(r, G.scene, G.camera);
  r.setRenderTarget(null);
  r.clear();
  r.render(G.scene, G.camera);
  G.glare.update(G.camera, G.viewW / G.viewH);
  r.render(G.glare.scene, G.camera);
}

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  G.viewW = w; G.viewH = h;
  G.renderer.setPixelRatio(G.pixelRatio);
  G.renderer.setSize(w, h, false);
  G.rig.setAspect(w / h);
  G.camera.updateProjectionMatrix();
}

// 開発用: 任意の場面から始める (?phase=INSIDE など)
function debugJump(phase) {
  const D = G.director, P = G.plant, F = G.flower;
  const order = ['SEED', 'COVER', 'WATER', 'BUD', 'ENTER', 'INSIDE', 'TOP', 'OPEN', 'VINE', 'BLOOM', 'DROP', 'VIEW', 'SLIDE', 'HOME', 'RIDE', 'NEST'];
  let idx = order.indexOf(phase);
  if (idx < 0) { phase = 'SEED'; idx = 0; }
  const at = (p) => idx >= order.indexOf(p);
  if (at('COVER')) { G.seed.planted = true; G.seed.enabled = false; }
  if (at('WATER')) { G.garden.plot.mat.uniforms.uFill.value = 1; G.seed.group.visible = false; G.child.pos.set(-0.72, 0, 1.32); }
  if (at('BUD')) {
    P.sprout = 1; P.young = 1; P.bud = 1; D.water = 4;
    F.sepalOpen = 0.55; G.vine.reach = 1; G.seed.group.visible = false;
    G.garden.plot.mat.uniforms.uCrack.value = 1;
    G.child.pos.set(0.15, 0, 2.75);
  }
  if (at('INSIDE')) { F.door = 0; }
  if (at('TOP')) {
    P.lengthDriven = true; P.length = STEM_TOP; D.spurt = 6; D.dropsSeeded = true; G.drops.active = true;
  }
  for (let i = 0; i < 3; i++) { P.update(0.016); F.update(0.016); }
  if (at('INSIDE')) { D.childToFlower(); G.child.pos.set(0.66, 0.12, -0.86); }
  if (at('VINE')) { for (const p of F.petals) if (p.i !== VINE_PETAL) { p.open.target = 1; p.open.x = 1; } D.opened = 4; G.vine.bind = 1; F.petals[VINE_PETAL].roll = 1; }
  if (at('BLOOM') && phase !== 'BLOOM') {
    G.vine.coils = 0; G.vine.released = true;
    const p3 = F.petals[VINE_PETAL]; p3.open.target = 1; p3.open.x = 1; p3.roll = 0;
    D.audioS.music = 'sky'; G.drops.active = false;
  }
  for (let i = 0; i < 3; i++) { P.update(0.016); F.update(0.016); }
  if (at('VIEW') && phase !== 'HOME') { G.child.pos.copy(D.petalLocal(VINE_PETAL, 0, 0.8)); }
  if (phase === 'HOME' || phase === 'RIDE') { D.childToGarden(); G.child.pos.set(-3.5, 0, -1.2); }
  if (phase === 'NEST') { D.childToFlower(); }
  D.go(phase);
  G.rig.update(0.016);
  if (G.rig.shotFn) G.rig.setShot(G.rig.shotFn, true);
}

function showFallback() {
  const v = document.getElementById('veil');
  v.innerHTML = '<div style="font-size:120px">🌸</div>';
}

boot();
