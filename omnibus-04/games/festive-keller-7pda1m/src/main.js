import * as THREE from 'three';
import { Atmosphere } from './atmosphere.js';
import { World } from './world.js';
import { RainbowSystem, SPACING } from './rainbow.js';
import { Kid } from './kid.js';
import { Player } from './player.js';
import { CameraRig } from './camera.js';
import { Input } from './input.js';
import { Critters, CatchBubble } from './critters.js';
import { Particles } from './particles.js';
import { Clouds } from './clouds.js';
import { Sound } from './audio.js';
import { Quality } from './quality.js';
import { clamp, smoothstep } from './util.js';

const canvas = document.getElementById('c');
const veil = document.getElementById('veil');
const debug = new URLSearchParams(location.search).has('debug');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', stencil: false, alpha: false });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.06;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.setClearColor(0xcfe0ee, 1);

const quality = new Quality(renderer);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 4200);

const atmo = new Atmosphere(renderer, scene);
const world = new World(scene, atmo, quality);
const particles = new Particles(scene, 1800);
particles.budget = quality.settings.particles;
const rainbow = new RainbowSystem(scene);
rainbow.particles = particles;
const sound = new Sound();
const critters = new Critters(scene, world, particles, rainbow.uTime);
const bubble = new CatchBubble(scene, rainbow.uTime);
const kid = new Kid(scene);
const player = new Player({ kid, rainbow, particles, audio: sound, world, bubble, critters });
const rig = new CameraRig(camera);

// Coloured light bouncing off nearby rainbows onto walls, clothes, ground.
const bounceLights = [0, 1, 2].map(() => {
  const l = new THREE.PointLight(0xffffff, 0, 11, 2);
  scene.add(l);
  return l;
});
const clouds = new Clouds(scene, bounceLights, 1);

const input = new Input(canvas, camera, {
  rainbow,
  critters,
  onFirstTouch: () => sound.unlock(),
});
canvas.addEventListener('pointerdown', () => sound.unlock());

// --- the first seconds: a ball rolls into view ---------------------------------
const director = {
  t: 0,
  ballStarted: false,
  nudged: 0,
  firstPeel: null,
  firstPeelT: 0,
  peelWatch: 0,
  lastPeelChain: null,
  admireT: 0,
  cheered: false,
};

rainbow.onFirstPeel = (chain) => {
  director.firstPeel = chain;
  director.firstPeelT = 0;
};

function updateDirector(dt) {
  const d = director;
  d.t += dt;
  const ball = critters.ball;
  if (!d.ballStarted && d.t > 0.6) {
    d.ballStarted = true;
    ball.vel.set(1.95, 0, -0.18);
  }
  // nothing touched yet: the child points at the ball; the ball rolls a little
  if (!input.touched) {
    if (d.t > 6 && d.nudged === 0) { d.nudged = 1; }
    if (d.t > 9 && d.nudged === 1) {
      d.nudged = 2;
      const dx = player.pos.x - ball.pos.x, dz = player.pos.z - ball.pos.z;
      const l = Math.hypot(dx, dz) || 1;
      ball.push((dx / l) * 0.9 + 0.4, (dz / l) * 0.9);
    }
    if (d.t > 16 && d.nudged === 2) { d.nudged = 0; d.t = 5; }
  }

  // look targets
  let look = null;
  let point = null;
  if (d.firstPeel && !d.firstPeel.dead) {
    d.firstPeelT += dt;
    const c = d.firstPeel;
    if (d.firstPeelT < 9) {
      // follow the peel front along the ribbon
      const front = clamp(c.frontS(rainbow.time) / SPACING, 0, c.n - 1);
      const p = c.centerAt(Math.max(2, front * 0.6), new THREE.Vector3());
      p.y += 0.3;
      look = p;
      rig.showPoi(p, 0.5, d.firstPeelT < 7 ? 1 : 0.5);
      if (!d.cheered && d.firstPeelT > 4.5 && player.mode === 'stand') { kid.cheer(); d.cheered = true; }
    }
  }
  // when standing still, admire the rainbow you just made
  const newest = rainbow.chains[rainbow.chains.length - 1];
  if (!look && newest && !newest.dead && player.mode === 'stand' && player.idleT > 1.2 && newest.maxY > 1.2) {
    d.admireT += dt;
    // look at the part of the newest rainbow that is lifting near us
    const target = newest.maxY * 0.55;
    let bi = newest.n - 1;
    while (bi > 0 && newest.y[bi] < target) bi--;
    const p = newest.centerAt(bi, new THREE.Vector3());
    if (p.distanceTo(player.pos) > 2) {
      look = p;
      if (d.admireT < 6) rig.showPoi(p, 0.3, 0.6);
    }
  } else if (player.mode !== 'stand') d.admireT = 0;

  if (!look && player.target && player.mode === 'walk') {
    const t = player.target;
    look = t.p ? t.p.clone().setY(Math.max(t.p.y, player.pos.y) + 0.4) : null;
  }
  if (!look && ball.pos.distanceTo(player.pos) < 9 && player.pos.y < 1) look = ball.pos;
  if (!look && player.pos.y > 10) look = critters.balloonPos;
  if (!input.touched && d.t > 5.5 && d.t < 9) point = ball.pos.clone().add(new THREE.Vector3(0, 0.3, 0));
  player.look = look;
  player.point = point;
}

// --- sizing ---------------------------------------------------------------------
const safeProbe = document.createElement('div');
safeProbe.style.cssText = 'position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);';
document.body.appendChild(safeProbe);

function readSafe() {
  const cs = getComputedStyle(safeProbe);
  return {
    top: parseFloat(cs.paddingTop) || 0,
    right: parseFloat(cs.paddingRight) || 0,
    bottom: parseFloat(cs.paddingBottom) || 0,
    left: parseFloat(cs.paddingLeft) || 0,
  };
}

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setPixelRatio(quality.pixelRatio(w, h));
  renderer.setSize(w, h, false);
  rig.resize(w, h, readSafe());
  const s = quality.settings;
  atmo.setShadowQuality(s.shadow, s.extent);
  particles.budget = s.particles;
}
quality.onChange = resize;
window.addEventListener('resize', resize);
window.addEventListener('orientationchange', () => setTimeout(resize, 120));
if (window.visualViewport) window.visualViewport.addEventListener('resize', resize);
resize();

document.addEventListener('visibilitychange', () => {
  if (document.hidden) sound.suspend(); else { sound.resume(); last = performance.now(); }
});

// --- loop -------------------------------------------------------------------------
let last = performance.now();
let time = 0;
const camRight = new THREE.Vector3();
const focus = new THREE.Vector3();
let veilGone = false;

function step(dt) {
  time += dt;
  const out = input.update(player);
  for (const hit of out.taps) {
    if (hit.kind === 'critter') {
      critters.poke(hit.critter, sound, player.pos);
      if (hit.critter.type === 'ball' || hit.critter.type === 'sparrow') {
        out.target = { kind: 'ground', p: new THREE.Vector3(hit.p.x, 0, hit.p.z) };
      } else {
        const dir = new THREE.Vector3(hit.p.x - player.pos.x, 0, hit.p.z - player.pos.z).normalize();
        out.target = { kind: 'dir', dir, p: hit.p.clone() };
      }
    } else if (hit.kind === 'ground' || hit.kind === 'roof') {
      particles.ripples.add(hit.p.x, hit.p.y, hit.p.z, 0.9, 0.9, 0, time);
    } else if (hit.kind === 'ribbon') {
      particles.ripples.add(hit.p.x, hit.p.y, hit.p.z, 1.2, 0.9, 1, time);
    }
  }
  if (out.target !== undefined) player.setTarget(out.target);

  updateDirector(dt);
  const load = player.update(dt, time);
  rainbow.walkerIdle = player.mode === 'stand' && player.idleT > 0.35 && !input.held;
  rainbow.update(dt, time, load ? load.chain : null, load ? load.idx : -1);
  critters.update(dt, time, player.pos, sound);
  world.update(dt, time);
  if (!(debug && window.__game && window.__game.freezeCam)) rig.update(dt, player, bubble.active);
  rainbow.updateBounceLights(bounceLights, player.pos, dt);
  focus.copy(rig.focus);
  atmo.update(dt, camera, focus, rainbow.presence, rainbow.lightColor);
  const inside = clouds.insideAmount(camera.position);
  atmo.cloudFog += (inside - atmo.cloudFog) * (1 - Math.exp(-dt * 3));
  clouds.update(dt, time, camera, bounceLights);
  particles.update(dt, time, renderer, camera);

  // sound
  camRight.set(1, 0, 0).applyQuaternion(camera.quaternion);
  sound.setListener(camera.position, camRight);
  let peelPos = player.pos;
  const cur = rainbow.chains.find((c) => c.peelCount > 0);
  if (cur) peelPos = cur.centerAt(cur.frontIdx, new THREE.Vector3());
  let rh = 0;
  if (player.support.kind === 'ribbon') rh = player.pos.y;
  sound.update(dt, {
    height: player.pos.y,
    fallSpeed: player.mode === 'fall' || player.mode === 'bubble' ? Math.abs(player.vel.y) : 0,
    tension: rainbow.tension,
    load: load ? 1 : 0,
    rainbowHeight: rh,
    peel: rainbow.peelActivity,
    peelPos,
  });
}

function frame(now) {
  requestAnimationFrame(frame);
  const real = (now - last) / 1000;
  last = now;
  if (document.hidden) return;
  quality.sample(real);
  const dt = clamp(real, 0.001, 1 / 20);
  step(dt);
  camera.updateMatrixWorld();
  renderer.render(scene, camera);
  if (!veilGone) {
    veilGone = true;
    requestAnimationFrame(() => veil.classList.add('gone'));
  }
}
requestAnimationFrame(frame);

if (debug) {
  window.__game = {
    THREE, scene, camera, renderer, player, rainbow, kid, critters, rig, quality, input, clouds, atmo, sound,
    // advance the simulation without rendering (for tests)
    advance(seconds, dt = 1 / 60) {
      const n = Math.round(seconds / dt);
      for (let i = 0; i < n; i++) step(dt);
    },
    get time() { return time; },
  };
}
