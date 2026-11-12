// Yokomuki Delivery — bootstrap and main loop.
import * as THREE from 'three';
import { buildTextures } from './textures.js';
import { buildMaterials, color, M } from './materials.js';
import { Sky } from './sky.js';
import { Post } from './post.js';
import { CameraRig } from './camera.js';
import { World2D } from './world2d.js';
import { initPhysics, stepPhysics, P, removeBody } from './physics.js';
import { buildTown } from './town.js';
import { buildProps } from './props.js';
import { buildPark } from './park.js';
import { buildClutter } from './clutter.js';
import { Critters } from './critters.js';
import { Stuff } from './stuff.js';
import { ClothSystem } from './cloth.js';
import { Water, Dust, Leaves, Stream } from './fx.js';
import { Game } from './game.js';
import { Input } from './input.js';
import { Audio } from './audio.js';
import { Hint } from './hint.js';
import { installLook, setRooms, LOOK } from './look.js';

const canvas = document.getElementById('stage');
const params = new URLSearchParams(location.search);
const TEST = params.has('test');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.NoToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.info.autoReset = false;

const scene = new THREE.Scene();
const rig = new CameraRig();
const post = new Post(renderer);
const hint = new Hint(document.getElementById('hint'));
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && /Mac/.test(navigator.userAgent));
// Keep antialiased HDR on touch devices without the 4-sample backing buffers.
post.samples = isMobile ? 2 : 4;
let pixelRatio = Math.min(window.devicePixelRatio || 1, isMobile ? 1.6 : 2);
if (TEST) pixelRatio = 1;

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(w, h, false);
  rig.setAspect(w / h);
  post.setSize(w, h, pixelRatio);
  hint.resize(w, h, Math.min(2, window.devicePixelRatio || 1));
}

// pendant lamps: the cord hangs sideways, so every shade lies along the ceiling
function buildLamps(town) {
  const list = [];
  const cordM = color(0x222222, 0.6);
  for (const id in town.houses) {
    for (const L of town.houses[id].lamps || []) {
      const g = new THREE.Group();
      const len = 0.55;
      const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, len, 5), cordM);
      cord.rotation.z = Math.PI / 2; cord.position.set(len / 2, -0.04, 0); g.add(cord);
      const shadeM = new THREE.MeshStandardMaterial({ color: 0xf3eee2, roughness: 0.6, emissive: 0xffd9a0, emissiveIntensity: 0, side: THREE.DoubleSide });
      const shade = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.18, 20, 1, true), shadeM);
      shade.rotation.z = Math.PI / 2; shade.position.set(len + 0.09, -0.12, 0); shade.castShadow = true; g.add(shade);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff0d0, emissiveIntensity: 0 }));
      bulb.position.set(len + 0.14, -0.12, 0); g.add(bulb);
      g.position.set(L.x - 0.4, L.y, L.z);
      scene.add(g);
      list.push({ g, shadeM, bulbM: bulb.material, pos: new THREE.Vector3(L.x + 0.3, L.y - 0.3, L.z) });
    }
  }
  return list;
}

const streams = [];
function drinkingFountain(water) {
  const B = new THREE.Group();
  const post = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.8, 0.35), M.concrete);
  post.position.set(49.8, 0.4, 2.0); post.castShadow = post.receiveShadow = true; B.add(post);
  const tap = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.12, 8), M.aluminum);
  tap.position.set(49.8, 0.86, 2.0); B.add(tap);
  scene.add(B);
  // the drinking fountain's jet bends sideways instead of falling back
  streams.push(new Stream(scene, water, new THREE.Vector3(49.82, 0.92, 2.0), new THREE.Vector3(0.25, 0.9, 0.04), 0.5, 0.01));
  // a garden hose left running in front of house B: the arc bends sideways too
  streams.push(new Stream(scene, water, new THREE.Vector3(19.55, 0.32, 2.3), new THREE.Vector3(0.15, 1.8, 0.3), 0.6, 0.012));
  const hose = new THREE.Mesh(new THREE.TorusGeometry(0.25, 0.03, 6, 20), color(0x2f8f4a, 0.5));
  hose.rotation.x = Math.PI / 2; hose.position.set(19.3, 0.05, 2.5); scene.add(hose);
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.14, 8), color(0x2f8f4a, 0.5));
  nozzle.position.set(19.55, 0.25, 2.3); scene.add(nozzle);
  // AC drain drips on house A's east wall
  water.source(new THREE.Vector3(8.7, 3.25, -2.2), new THREE.Vector3(0.2, 0, 0), 4, 0.05, 0.012);
}

async function boot() {
  const t0 = performance.now();
  installLook();
  buildTextures();
  buildMaterials();
  await initPhysics();
  const w2d = new World2D();
  const ctx = { scene, w2d, renderer };
  const sky = new Sky(renderer, scene);
  sky.set(params.get('time') || 'day');
  const town = buildTown(ctx);
  const props = buildProps(ctx);
  const park = buildPark(ctx);
  buildClutter(ctx);
  const lamps = buildLamps(town);
  setRooms(town.rooms);
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('orientationchange', () => setTimeout(resize, 200));

  const audio = new Audio();
  const input = new Input(canvas);
  input.listeners.push(() => audio.unlock());

  const stuff = new Stuff({ scene, town });
  stuff.game = { town, audio, scene, w2d };
  stuff.furnish(town.rooms);
  const cloth = new ClothSystem(scene);
  cloth.build(town, park);
  const water = new Water(scene, w2d);
  drinkingFountain(water);
  const dust = new Dust(scene);
  const leaves = new Leaves(scene, park.trees);
  const critters = new Critters(scene, town);

  const game = new Game({ scene, sky, rig, town, w2d, renderer, props, park, audio });
  game.stuff = stuff; stuff.burst();
  game.fx = { dust: (x, y, z, k) => dust.puff(x, y, z, Math.min(1.5, k / 6)) };
  game.newDay = () => {
    // clear the day's mess and furnish the houses again
    for (const b of [...P.bodies]) if (!b.balloon) removeBody(b);
    stuff.flying.length = 0;
    stuff.furnish(town.rooms);
  };
  game.fade = 1;
  window.__game = game; window.__input = input; window.__stuff = stuff;

  // point lights that follow the camera to the nearest lit rooms (evening / night)
  const roomLights = [new THREE.PointLight(0xffd6a0, 0, 7, 1.6), new THREE.PointLight(0xffd6a0, 0, 7, 1.6)];
  roomLights.forEach(l => scene.add(l));
  // indoors, a soft fill so the courier and the family stay readable
  const inLight = new THREE.PointLight(0xfff0dc, 0, 6.5, 1.4);
  scene.add(inLight);
  let inK = 0;

  if (TEST && params.get('x')) {
    // debug placement: ?x=..&y=.. puts the courier standing on the nearest floor
    const c = game.courier; c.hold = null; c.state = 'fall'; c.pos.set(+params.get('x'), +params.get('y')); c.vel.set(0, 0);
  }
  game.frameCamera(0); rig.snap();

  let last = performance.now();
  let fpsAcc = 0, fpsN = 0, lowT = 0, quality = 0, shadowEvery = 1, frameN = 0;
  renderer.shadowMap.autoUpdate = false;
  renderer.shadowMap.needsUpdate = true;
  function simulate(dt) {
    game.update(dt, input);
    stepPhysics(dt);
    stuff.update(dt, game.courier.pos.x);
    stuff.updateFar(dt, rig.focus, rig.cam);
    cloth.update(dt, rig.focus.x);
    water.update(dt);
    for (const st of streams) st.update(dt);
    dust.update(dt);
    leaves.update(dt);
    critters.update(dt, game.courier, rig.focus);
    game.finale.tick(dt);
    // futon squash
    const f = park.futon; if (f) { f.squash = Math.max(0, f.squash - dt * 4); f.pivot.scale.x = 1 - f.squash * 0.45; }
    // swing seats follow their pendulum
    if (park.swing) for (const s of park.swing.seats) {
      if (game.courier.state !== 'swing' || s !== park.swing.seats[1]) { s.vel += -9.8 / 1.9 * Math.sin(s.angle - 0) * dt * 0; s.angle += (0 - s.angle) * dt * 0.5; }
      s.g.rotation.z = Math.PI / 2 + s.angle;
    }
    rig.update(dt);
    sky.update(dt, rig.focus);
    // lamps
    const lampK = sky.lamps || 0;
    LOOK.uNight.value = lampK;
    for (const L of lamps) { L.shadeM.emissiveIntensity = lampK * 0.8; L.bulbM.emissiveIntensity = lampK * 6; }
    for (const l of props.lamps) l.mat.emissiveIntensity = lampK * 8;
    if (lampK > 0.01) {
      const sorted = lamps.map(L => [L, L.pos.distanceToSquared(rig.focus)]).sort((a, b) => a[1] - b[1]);
      roomLights.forEach((l, i) => { const L = sorted[i]?.[0]; if (L) { l.position.copy(L.pos); l.intensity = lampK * 6; } });
    } else roomLights.forEach(l => { l.intensity = 0; });
    {
      const c = game.courier;
      const inside = town.rooms.some(r => c.pos.x > r.rx0 - 0.9 && c.pos.x < r.rx1 && c.pos.y > r.y0 && c.pos.y < r.y1);
      inK += ((inside ? 1 : 0) - inK) * Math.min(1, dt * 3);
      inLight.intensity = Math.max(inK * 5, (sky.lamps || 0) * 3.5);
      inLight.position.set(c.pos.x - 0.6, c.pos.y + 0.4, 0.55);
    }
    audio.tick(dt, game.courier.state === 'fall' ? game.courier.vel.length() : 0, sky.preset === 'night');
    updateHints(game, input, dt);
    input.endFrame(dt);
  }
  // test hook: advance the simulation without rendering
  window.__press = (x, y) => { const v = new THREE.Vector3(x, y, 0).project(rig.cam); input.sx = v.x; input.sy = v.y; if (!input.down) { input.down = true; input.pressed = true; } else input.moved = true; input.idle = 0; };
  window.__release = () => { input.down = false; input.released = true; };
  window.__st = () => { const c = game.courier; return `${c.state} x=${c.pos.x.toFixed(2)} y=${c.pos.y.toFixed(2)} face=${c.face} served=${game.served} focus=${game.focus?.stop?.id} deliv=${!!game.delivery}`; };
  window.__sim = (sec, fn) => { const n = Math.round(sec * 60); for (let i = 0; i < n; i++) { if (fn) fn(i); simulate(1 / 60); } };
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    simulate(dt);
    renderer.info.reset();
    post.render(scene, rig.cam, dt, { exposure: sky.exposure, fade: game.fade || 0, focus: rig.dist });
    hint.draw(dt);
    // adaptive quality: if the device struggles, step down gently
    fpsAcc += dt; fpsN++;
    if (fpsAcc > 2) {
      const fps = fpsN / fpsAcc; fpsAcc = 0; fpsN = 0;
      if (fps < 42 && !TEST) {
        lowT++;
        if (lowT >= 2) {
          lowT = 0; quality++;
          if (quality === 1) { shadowEvery = 2; }
          else if (quality === 2 && pixelRatio > 1) { pixelRatio = Math.max(1, pixelRatio - 0.3); resize(); }
          else if (quality === 3) { post.dof = false; }
          else if (quality >= 4 && pixelRatio > 0.75) { pixelRatio = Math.max(0.75, pixelRatio - 0.25); resize(); }
        }
      } else lowT = 0;
    }
    frameN++;
    renderer.shadowMap.needsUpdate = frameN % shadowEvery === 0;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  setTimeout(() => document.getElementById('veil').classList.add('gone'), 300);
  if (TEST) console.log('boot ms', Math.round(performance.now() - t0));
  game.fade = 0;
}

const _v = new THREE.Vector3();
function toScreen(p) {
  _v.set(p.x, p.y, p.z ?? 0).project(rig.cam);
  return { x: (_v.x * 0.5 + 0.5) * window.innerWidth, y: (-_v.y * 0.5 + 0.5) * window.innerHeight };
}

// Where should a small finger go next? (wordless route hint)
function holeToward(w2d, face, fromY, target) {
  const { spans } = w2d.floorSpan(face, fromY);
  let best = null, bd = 1e9;
  for (let i = 0; i < spans.length - 1; i++) {
    const y0 = spans[i][1], y1 = spans[i + 1][0];
    if (y1 - y0 < 0.55 || y1 - y0 > 5) continue;
    const c = (y0 + y1) / 2;
    const d = Math.abs(c - target.y) + Math.abs(c - fromY) * 0.3;
    if (d < bd) { bd = d; best = c; }
  }
  return best;
}

function updateHints(game, input, dt) {
  const c = game.courier;
  if (game.intro > 0 || input.down || game.delivery || game.finale.active) { hint.clear(); return; }
  const idle = input.idle;
  const fr = game.focus;
  const first = game.served === 0 && game.day === 0;
  const w2d = game.w2d;
  const at = (x, y) => toScreen({ x, y, z: 0 });
  const me = at(c.pos.x - 0.35, c.pos.y);
  if (c.state === 'hang' && idle > (first ? 2.0 : 6)) {
    hint.set('tap', me);                       // hold on... and let go
  } else if (c.state === 'stand' && fr && idle > 4.5) {
    const s = fr.spot;
    const onBouncy = w2d.bouncyAt(c.face, c.pos.y);
    const bouncy = w2d.bouncy.find(b => Math.abs(b.x - c.face) < 0.2 || Math.abs(b.x + 0.13 - c.face) < 0.2);
    if (s.x < c.pos.x - 1.0 && onBouncy) hint.set('hold', at(s.x, s.y));            // bounce up to them
    else if (s.x < c.pos.x - 1.0 && bouncy) hint.set('drag', me, at(c.pos.x - 0.35, (bouncy.y0 + bouncy.y1) / 2));
    else if (s.x > c.face + 0.05) {
      const hy = holeToward(w2d, c.face, c.pos.y, s);
      if (hy != null) hint.set('drag', me, at(c.pos.x - 0.35, hy));                 // the window is a hole
      else hint.set('drag', me, at(c.pos.x - 0.35, c.pos.y + 3));
    } else hint.set('drag', me, at(c.pos.x - 0.35, THREE.MathUtils.clamp(s.y, c.pos.y - 3, c.pos.y + 3)));
  } else if (idle < 0.5) hint.clear();
}

boot().catch(e => { console.error(e); });
