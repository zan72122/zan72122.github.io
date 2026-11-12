/* ケーキやさん 3D — 起動・レンダリング・状態遷移・入力・HUD・ヒント */
import * as THREE from 'three';
import { createViewport } from './viewport.js';
import { bindInput } from './input.js';
import { installDebug } from './debug.js';
import { updateTweens, tween, killTween, delay, lerp } from './tween.js';
import { buildWorld, COUNTER_Y, ST, CAKE } from './world.js';
import * as OBJ from './objects.js';
import { makeFx } from './fx.js';
import * as HUD from './hud.js';
import { buildPhases } from './phases.js';
const audio = window.CakeGame.audio;
/* ---------------------------------------------------------- レンダラー */
const canvas = document.getElementById('gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, 1, 0.05, 25);
const viewport = createViewport(THREE, renderer, camera);
const resize = viewport.resize;
/* ---------------------------------------------------------- ワールド */
const world = buildWorld(scene, renderer);
const bowl = OBJ.makeBowl();
const batter = OBJ.makeBatter();
const spoon = OBJ.makeSpoon();
const ingredients = OBJ.makeIngredients();
const oven = OBJ.makeOven();
const pan = OBJ.makePan();
const cake = OBJ.makeCake();
const frosting = OBJ.makeFrosting();
scene.add(bowl, batter.group, spoon, oven.group, pan.group, cake,
          frosting.topMesh, frosting.sideMesh);
ingredients.forEach(i => {
  i.home = i.group.position.clone();
  scene.add(i.group);
});
// ケーキの当たり判定プロキシ(少し大きめ・不可視)
const cakeProxy = new THREE.Mesh(
  new THREE.CylinderGeometry(CAKE.r + 0.025, CAKE.r + 0.025, CAKE.h + 0.04, 24),
  new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false })
);
cakeProxy.position.set(CAKE.x, CAKE.standTop + CAKE.h / 2, 0);
scene.add(cakeProxy);
// ろうそく用の集約ライト(常時1灯のみ)
const candleLight = new THREE.PointLight('#ffb347', 0, 1.2);
candleLight.position.set(CAKE.x, CAKE.topY + 0.12, 0);
scene.add(candleLight);
// タイトル用の見本ケーキ
const sample = new THREE.Group();
{
  const base = OBJ.makeCake();
  base.visible = true;
  base.position.set(0, 0, 0);
  sample.add(base);
  const icing = new THREE.Mesh(
    new THREE.SphereGeometry(CAKE.r + 0.008, 48, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshPhysicalMaterial({ color: '#fff6f0', roughness: 0.3, clearcoat: 0.6, clearcoatRoughness: 0.3 })
  );
  icing.scale.set(1, 0.22, 1);
  icing.position.y = CAKE.h - 0.004;
  sample.add(icing);
  const deco = [
    ['strawberry', -0.07, 0, 0], ['strawberry', 0.05, 0.05, 0],
    ['strawberry', 0.05, -0.06, 0], ['cherry', 0, 0.0, 22],
    ['heart', -0.02, -0.07, 0], ['star', 0.09, -0.01, 0]
  ];
  for (const [kind, x, z] of deco) {
    const t = OBJ.makeTopping(kind);
    t.position.set(x, CAKE.h + 0.006, z);
    sample.add(t);
  }
  const sc = OBJ.makeCandle();
  sc.group.position.set(-0.01, CAKE.h + 0.004, 0.06);
  sc.flame.visible = true;
  sample.add(sc.group);
  sample.userData.flame = sc.flame;
  sample.position.set(CAKE.x, CAKE.standTop, 0);
  scene.add(sample);
}
const fx = makeFx(scene);
/* ---------------------------------------------------------- HUD */
const hudSvg = document.getElementById('hud');
document.getElementById('hud-defs').innerHTML = HUD.hudDefs();
const uiLayer = document.getElementById('ui-layer');
const hintLayer = document.getElementById('hint-layer');
const wipeLayer = document.getElementById('wipe-layer');
hintLayer.innerHTML = HUD.fingerHint();

const el = id => document.getElementById(id);

function popIn(node) {
  if (!node) return;
  const base = node.getAttribute('transform') || '';
  tween(0.45, t => {
    node.setAttribute('transform', `${base} scale(${(0.2 + t * 0.8).toFixed(3)})`);
  }, { ease: 'outBack', done: () => node.setAttribute('transform', base) });
}

/* ---------------------------------------------------------- 座標変換 */

const { clientToStage, worldToStage, raycast, rayOnPlane } = viewport;

/* ---------------------------------------------------------- カメラ移動 */

const CAM = {
  title: { pos: [0.12, 1.5, 2.85], tgt: [0, 1.04, -0.1] },
  mix: { pos: [ST.mix, 1.9, 0.98], tgt: [ST.mix, 0.97, -0.06] },
  oven: { pos: [0.5, 1.5, 1.42], tgt: [ST.oven, 1.04, -0.16] },
  deco: { pos: [ST.deco, 1.62, 0.95], tgt: [ST.deco, 1.0, -0.02] }
};
const camTgt = new THREE.Vector3().fromArray(CAM.title.tgt);
camera.position.fromArray(CAM.title.pos);
camera.lookAt(camTgt);

let transitioning = false;

function flyTo(name, dur, done) {
  const dst = CAM[name];
  const p0 = camera.position.clone();
  const t0 = camTgt.clone();
  const p1 = new THREE.Vector3().fromArray(dst.pos);
  const t1 = new THREE.Vector3().fromArray(dst.tgt);
  const mid = p0.clone().lerp(p1, 0.5);
  mid.y += 0.28;
  transitioning = true;
  tween(dur, t => {
    // 2次ベジェで「ふわっと」
    const a = p0.clone().lerp(mid, t);
    const b = mid.clone().lerp(p1, t);
    camera.position.copy(a.lerp(b, t));
    camTgt.copy(t0).lerp(t1, t);
    camera.lookAt(camTgt);
  }, {
    ease: 'inOut',
    done: () => { transitioning = false; resetIdle(); if (done) done(); }
  });
}

/* ---------------------------------------------------------- フェーズ管理 */

const state = {};
function resetState() {
  state.creamColor = 1;
  state.painted = false;
  state.toppings = [];   // group[]
  state.candles = [];    // {group, flame, lit}
}
resetState();

let phases = null;
let current = null;

function goto(name) {
  if (current && current.exit) current.exit();
  uiLayer.innerHTML = '';
  clearHintNow();
  current = phases[name];
  current.enter();
  flyTo(current.cam || name, 1.25);
}

/* リセットして任意フェーズへ(円形ワイプで隠す) */
function wipeReset(toName) {
  if (transitioning) return;
  transitioning = true;
  clearHintNow();
  const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute('cx', 640); c.setAttribute('cy', 360);
  c.setAttribute('fill', '#ff8ab5');
  c.setAttribute('stroke', '#ffffff');
  c.setAttribute('stroke-width', 14);
  wipeLayer.appendChild(c);
  tween(0.42, t => c.setAttribute('r', t * 1500), {
    ease: 'inQuad',
    done: () => {
      resetAll();
      if (current && current.exit) current.exit();
      uiLayer.innerHTML = '';
      current = phases[toName];
      current.enter();
      const dst = CAM[current.cam || toName];
      camera.position.fromArray(dst.pos);
      camTgt.fromArray(dst.tgt);
      camera.lookAt(camTgt);
      tween(0.5, t => c.setAttribute('r', 1500 * (1 - t)), {
        done: () => { c.remove(); transitioning = false; resetIdle(); }
      });
    }
  });
}

function resetAll() {
  resetState();
  fx.stopConfetti();
  // ケーキまわり
  frosting.reset();
  frosting.topMesh.visible = false;
  frosting.sideMesh.visible = false;
  cake.visible = false;
  sample.visible = true;
  scene.children.slice().forEach(o => { if (o.userData.dynamic) scene.remove(o); });
  candleLight.intensity = 0;
  // MIX
  batter.group.visible = false;
  batter.dome.material.color.set('#cfb083');
  batter.dome.scale.set(1, 0.34, 1);
  batter.tex.offset.x = 0;
  batter.lumps.children.forEach(l => l.scale.setScalar(1));
  batter.lumps.visible = true;
  spoon.visible = false;
  ingredients.forEach(i => {
    i.group.visible = true;
    i.group.position.copy(i.home);
    i.group.scale.setScalar(1);
  });
  // OVEN
  oven.door.rotation.x = 0;
  oven.innerLight.intensity = 0;
  oven.heater.material.color.set('#1d0f18');
  oven.lamp.material.emissive.set('#000000');
  oven.knobBase.material.emissive.set('#000000');
  oven.knob.rotation.z = 0;
  pan.group.visible = false;
  pan.group.position.set(ST.oven - 0.52, COUNTER_Y, 0.1);
  pan.group.scale.setScalar(1);
  pan.dome.scale.set(1, 0.32, 1);
  pan.dome.material.color.set('#f3d49a');
}

/* ---------------------------------------------------------- 指ヒント */

let hintSpec = null;
let idleTime = 0;
let hintTweens = [];
let hintPlaying = false;

function setHint(fn) { hintSpec = fn; idleTime = 0; }

function clearHintNow() {
  hintTweens.forEach(killTween);
  hintTweens = [];
  hintPlaying = false;
  el('hint-hand').setAttribute('opacity', 0);
  el('hint-ripple').setAttribute('opacity', 0);
}

function resetIdle() {
  idleTime = 0;
  if (hintPlaying) clearHintNow();
}

function handAt(x, y, scale, op) {
  const hand = el('hint-hand');
  hand.setAttribute('transform', `translate(${x},${y}) scale(${scale || 1})`);
  hand.setAttribute('opacity', op);
}

function ripple(x, y) {
  const rip = el('hint-ripple');
  rip.setAttribute('cx', x); rip.setAttribute('cy', y);
  hintTweens.push(tween(0.5, t => {
    rip.setAttribute('r', 14 + t * 56);
    rip.setAttribute('opacity', (1 - t) * 0.9);
  }));
}

function playHint() {
  if (!hintSpec || hintPlaying) return;
  const spec = hintSpec();
  if (!spec) return;
  hintPlaying = true;
  const seqDone = () => { hintPlaying = false; idleTime = 5.2; };
  if (spec.type === 'tap') {
    hintTweens.push(tween(0.25, t => handAt(spec.x, spec.y, 1, t), {
      done: () => {
        const bounce = i => {
          if (i >= 2) {
            hintTweens.push(tween(0.3, t => handAt(spec.x, spec.y, 1, 1 - t),
                                  { delay: 0.25, done: seqDone }));
            return;
          }
          hintTweens.push(tween(0.36, t => {
            const s = t < 0.5 ? 1 - t * 0.5 : 0.75 + (t - 0.5) * 0.5;
            handAt(spec.x, spec.y, s, 1);
            if (t > 0.45 && t < 0.55) ripple(spec.x, spec.y);
          }, { delay: 0.12, done: () => bounce(i + 1) }));
        };
        bounce(0);
      }
    }));
  } else if (spec.type === 'circle') {
    hintTweens.push(tween(2.6, t => {
      const a = t * Math.PI * 4 - Math.PI / 2;
      const x = spec.x + Math.cos(a) * spec.r;
      const y = spec.y + Math.sin(a) * spec.r * 0.55;
      const op = t < 0.12 ? t / 0.12 : (t > 0.88 ? (1 - t) / 0.12 : 1);
      handAt(x, y, 0.95, op);
    }, { ease: 'inOut', done: seqDone }));
  } else if (spec.type === 'drag') {
    hintTweens.push(tween(0.3, t => handAt(spec.x1, spec.y1, 1, t), {
      done: () => {
        ripple(spec.x1, spec.y1);
        hintTweens.push(tween(1.3, t => {
          handAt(lerp(spec.x1, spec.x2, t),
                 lerp(spec.y1, spec.y2, t) - Math.sin(t * Math.PI) * 60, 0.92, 1);
        }, { delay: 0.3, ease: 'inOut',
             done: () => {
               hintTweens.push(tween(0.3, t => handAt(spec.x2, spec.y2, 1, 1 - t), { done: seqDone }));
             } }));
      }
    }));
  } else {
    hintPlaying = false;
  }
}

/* ---------------------------------------------------------- 入力 */

bindInput({ THREE, audio, resetIdle, clientToStage, uiLayer, HUD, el, wipeReset,
  getTransitioning: () => transitioning, getCurrent: () => current });

/* ---------------------------------------------------------- フェーズ構築 */

const ctx = {
  THREE, scene, camera, renderer, world, fx, audio, state,
  bowl, batter, spoon, ingredients, oven, pan, cake, frosting, sample,
  cakeProxy, candleLight,
  uiLayer, hintLayer, el, popIn,
  goto, wipeReset, setHint, resetIdle,
  worldToStage, raycast, rayOnPlane, clientToStage,
  ST, CAKE, COUNTER_Y, CAM, camTgt,
  isTransitioning: () => transitioning
};
phases = buildPhases(ctx);
current = phases.title;
current.enter();

// 動作確認用(画面座標の取得)
installDebug({ THREE, state, ST, CAKE, COUNTER_Y, fx, oven, camera, viewport,
  phase: () => Object.keys(phases).find(k => phases[k] === current),
  isTransitioning: () => transitioning });

/* ---------------------------------------------------------- メインループ */

let lastT = 0;
let elapsed = 0;
// 起動直後のフレーム時間を計測して重い端末では解像度を落とす
let perfFrames = 0, perfAccum = 0, perfDone = false;

function loop(ts) {
  requestAnimationFrame(loop);
  const dtRaw = (ts - lastT) / 1000 || 0.016;
  const dt = Math.min(0.1, dtRaw);
  lastT = ts;
  elapsed += dt;

  // トゥイーンはパラメトリックなので実時間で進めて、低fps端末でも演出が間延びしない
  updateTweens(Math.min(0.6, dtRaw));
  fx.update(dt);
  OBJ.flameUniforms.time.value = elapsed;

  // 炎のビルボード
  for (const c of state.candles) {
    if (c.flame.visible) c.flame.quaternion.copy(camera.quaternion);
  }
  if (sample.visible && sample.userData.flame) {
    sample.userData.flame.quaternion.copy(camera.quaternion);
  }
  // ろうそくライトのゆらぎ
  if (candleLight.intensity > 0) {
    const n = state.candles.filter(c => c.lit).length;
    candleLight.intensity = n * 0.14 * (0.85 + Math.sin(elapsed * 11) * 0.1 + Math.sin(elapsed * 23) * 0.05);
  }

  if (current && current.update && !transitioning) current.update(dt, elapsed);

  if (!transitioning && !hintPlaying && hintSpec) {
    idleTime += dt;
    if (idleTime > 8) playHint();
  }

  renderer.render(scene, camera);

  if (!perfDone) {
    perfFrames++;
    perfAccum += dt;
    if (perfFrames === 180) {
      perfDone = true;
      if (perfAccum / 180 > 0.024 && renderer.getPixelRatio() > 1.5) {
        renderer.setPixelRatio(1.5);
        resize();
      }
    }
  }
}
requestAnimationFrame(loop);
