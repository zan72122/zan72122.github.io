// Game shell: renderer, quality, loop, and wiring between world, characters, story.
import * as THREE from '../lib/three.module.js';
import { World } from './world/world.js';
import { Post } from './core/post.js';
import { shared, LAYER_MAIN, LAYER_REFLECT } from './core/env.js';
import { Unicorn } from './chars/unicorn.js';
import { HorseController } from './chars/horseRig.js';
import { Child } from './chars/child.js';
import { ChildController } from './chars/childRig.js';
import { Droplets } from './fx/droplets.js';
import { Sparkles } from './fx/sparkles.js';
import { RainbowRoad } from './fx/rainbowRoad.js';
import { LightLayers } from './fx/lightLayers.js';
import { MiniBow } from './fx/miniBow.js';
import { WATER_Y } from './world/water.js';
import { puddleAt } from './world/layout.js';
import { Track } from './world/track.js';
import { Input } from './core/input.js';
import { Audio } from './core/audio.js';
import { Director } from './story/director.js';

function detectQuality(params) {
  const ua = navigator.userAgent;
  const mobile = /iPhone|iPad|iPod|Android/i.test(ua) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(ua));
  const cores = navigator.hardwareConcurrency || 4;
  let tier = mobile ? (cores >= 6 ? 'mid' : 'low') : 'high';
  if (params.get('q')) tier = params.get('q');
  const Q = {
    high: { shadow: 2048, grassNear: 16000, grassMid: 15000, dew: 2600, msaa: 4, bloom: true, horseCell: 0.0115, childCell: 0.0065, handCell: 0.0031, maxDpr: 2, reflectScale: 0.5 },
    mid: { shadow: 2048, grassNear: 12000, grassMid: 10000, dew: 2000, msaa: 4, bloom: true, horseCell: 0.0125, childCell: 0.007, handCell: 0.0034, maxDpr: 2, reflectScale: 0.45 },
    low: { shadow: 1024, grassNear: 8000, grassMid: 6000, dew: 1200, msaa: 2, bloom: true, horseCell: 0.014, childCell: 0.008, handCell: 0.0038, maxDpr: 1.5, reflectScale: 0.35 },
  };
  return { tier, ...(Q[tier] || Q.mid) };
}

export class Game {
  constructor(params) {
    this.params = params;
    this.debug = params.has('debug');
    this.q = detectQuality(params);
    const canvas = document.getElementById('c');
    const renderer = (this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false }));
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    this.dprScale = 1;
    // second-stage load relief once the resolution is already at its floor
    this.stress = 0;
    this.camera = new THREE.PerspectiveCamera(40, 1, 0.05, 4000);
    this.camera.layers.enable(LAYER_MAIN);
    this.time = 0;
    this.timeScale = 1;
    this.frameTimes = [];
    this.vw = window.innerWidth;
    this.vh = window.innerHeight;
  }

  async init() {
    const r = this.renderer;
    this.input = new Input(r.domElement);
    this.audio = new Audio();
    await this._yieldFrame();
    this.world = new World(r, this.q);
    this.scene = this.world.scene;
    this.post = new Post(r, { msaa: this.q.msaa, bloom: this.q.bloom });
    this.track = new Track();
    // effects
    this.drops = new Droplets(6000);
    this.drops.ground = (x, z) => {
      const p = puddleAt(x, z);
      return p ? WATER_Y : this.world.groundAt(x, z) + 0.02;
    };
    this.drops.onLand = (x, y, z, speed, size) => {
      const s = this.world.puddles.simAt(x, z);
      if (s) {
        s.disturb(x, z, 0.025 + size * 5, -0.0011 * Math.min(4, speed) * Math.min(2, size * 500));
        if (this.director && Math.random() < 0.25) this.audio.drip(this.director.pan(new THREE.Vector3(x, y, z)), 0.12 + Math.random() * 0.15, 1.2);
      }
    };
    this.sparkles = new Sparkles(3000);
    this.road = new RainbowRoad(this.track, { sparkles: this.sparkles });
    this.road.onAbsorb = (x, y, z, t) => this.audio.tick(t, 0.6);
    this.drops.interceptors.push((i, x, y, z, vx, vy, vz, oy) => this.road.intercept(x, y, z, oy, this.horse.s, this.drops.born[i] >= this.road.reserveSince));
    this.lightLayers = new LightLayers();
    this.miniBow = new MiniBow();
    this.scene.add(this.drops.mesh, this.drops.clingMesh, this.sparkles.mesh, this.road.mesh, this.lightLayers.group, this.miniBow.mesh);
    // unicorn
    await this._yieldFrame();
    this.unicorn = new Unicorn({ cell: this.q.horseCell });
    this.scene.add(this.unicorn.group);
    this.unicorn.group.traverse((o) => o.layers.enable(LAYER_REFLECT));
    this.hair = this.unicorn.buildHair(this.drops);
    this.hair.mesh.layers.enable(LAYER_REFLECT);
    this.hair.groundFn = (x, z) => (this.director && this.director.onBow ? -1e3 : this.world.groundAt(x, z));
    this.scene.add(this.hair.mesh);
    this.horse = new HorseController(this.unicorn);
    this.horse.groundFn = (x, z) => this.groundForHorse(x, z);
    // child
    await this._yieldFrame();
    this.childModel = new Child({ cell: this.q.childCell, handCell: this.q.handCell });
    this.scene.add(this.childModel.group);
    this.childModel.group.traverse((o) => o.layers.enable(LAYER_REFLECT));
    this.child = new ChildController(this.childModel);
    const bodyRest = new THREE.Matrix4().compose(this.unicorn.sk.restObjPos.body, this.unicorn.sk.restObjQuat.body, new THREE.Vector3(1, 1, 1));
    this.seatOffset = bodyRest.clone().invert().multiply(new THREE.Matrix4().makeTranslation(0, 1.37 - 0.47, 0.14));
    // story
    this.director = new Director(this);
    if (this.params.has('autotest')) {
      const { AutoTest } = await import('./story/autotest.js');
      this.autotest = new AutoTest(this);
    }
    this._resize();
    window.addEventListener('resize', () => this._resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this._resize(), 200));
    if (this.debug) document.getElementById('fps').style.display = 'block';
    const startScene = this.params.get('scene') || 'intro';
    if (startScene === 'intro') this.director.go('intro');
    else this.director.jumpTo(startScene);
    // warm up shaders, first frame
    this.director.update(1 / 60, 1 / 60);
    // debug: fast-forward game time (no rendering)
    const warp = parseFloat(this.params.get('warp') || '0');
    for (let i = 0; i < warp * 30; i++) {
      const dt = (1 / 30) * this.timeScale;
      this.time += dt;
      shared.uTime.value = this.time;
      this.director.update(dt, 1 / 30);
      if (this._autoTouch) this._autoTouch(i / 30);
    }
    r.compile(this.scene, this.camera);
    this.last = performance.now();
    this._loop = this._loop.bind(this);
    requestAnimationFrame(this._loop);
    const veil = document.getElementById('veil');
    if (this.params.has('noveil')) veil.style.display = 'none';
    setTimeout(() => {
      veil.style.opacity = 0;
      setTimeout(() => (veil.style.display = 'none'), 2500);
    }, 200);
    window.__ready = true;
  }

  groundForHorse(x, z) {
    const D = this.director;
    if (D && D.onBow && this.road.active) {
      const p = this.track.project(x, z, this.horse.s);
      if (this.track.isBow(p.s)) {
        const y = this.road.surfaceY(p.s, p.lat);
        if (y !== null) return y;
      }
    }
    return this.world.groundAt(x, z);
  }

  _yieldFrame() {
    return new Promise((res) => requestAnimationFrame(() => setTimeout(res, 0)));
  }

  _resize() {
    const w = window.innerWidth, h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, this.q.maxDpr) * this.dprScale;
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    const pw = Math.round(w * dpr), ph = Math.round(h * dpr);
    this.post.setSize(pw, ph);
    const rs = this.q.reflectScale * (this.stress >= 2 ? 0.65 : 1);
    this.world.puddles.setReflectSize(pw * rs, ph * rs);
    this.vw = w;
    this.vh = h;
    this.dpr = dpr;
    this._viewportUniforms();
  }

  _viewportUniforms() {
    const ph = this.vh * this.dpr;
    this.drops.setViewport(ph, this.camera.fov, this.dpr);
    this.sparkles.setViewport(ph, this.camera.fov, this.dpr);
    this.world.dew.uniforms.uPx.value = this.dpr;
  }

  _loop(now) {
    requestAnimationFrame(this._loop);
    let rdt = Math.min(0.05, Math.max(0.001, (now - this.last) / 1000));
    this.last = now;
    if (this.params.get('fixed')) rdt = 1 / 60;
    this._adapt(rdt);
    const steps = parseInt(this.params.get('simsteps') || '1');
    for (let i = 0; i < steps; i++) {
      const dt = rdt * this.timeScale;
      this.time += dt;
      shared.uTime.value = this.time;
      if (this.autotest) this.autotest.frame(rdt);
      this.director.update(dt, rdt);
    }
    this.frameNo = (this.frameNo || 0) + 1;
    const every = parseInt(this.params.get('renderEvery') || '1');
    if (this.frameNo % every !== 0) return;
    if (this._lastFov === undefined || Math.abs(this._lastFov - this.camera.fov) > 0.01) {
      this._lastFov = this.camera.fov;
      this._viewportUniforms();
    }
    this.render();
  }

  _adapt(rdt) {
    const ft = this.frameTimes;
    ft.push(rdt);
    if (ft.length > 90) ft.shift();
    if (this.debug && ft.length % 10 === 0) {
      const avg = ft.reduce((a, b) => a + b, 0) / ft.length;
      document.getElementById('fps').textContent = `${(1 / avg).toFixed(0)} fps  dpr ${this.dpr.toFixed(2)}  ${this.q.tier}  ${this.director.state}`;
    }
    if (ft.length < 90 || this.params.get('fixed')) return;
    const avg = ft.reduce((a, b) => a + b, 0) / ft.length;
    if (avg > 1 / 45 && this.dprScale > 0.55) {
      this.dprScale *= 0.88;
      this._resize();
      ft.length = 0;
    } else if (avg > 1 / 40 && this.stress < 2) {
      this.stress++;
      this._resize();
      ft.length = 0;
    } else if (avg < 1 / 58 && this.dprScale < 1) {
      this.dprScale = Math.min(1, this.dprScale * 1.06);
      this._resize();
      ft.length = 0;
    }
  }

  render() {
    const r = this.renderer;
    // under load the shadows are refreshed every other frame
    this.renderNo = (this.renderNo || 0) + 1;
    const shadowNow = this.renderNo < 3 || this.stress === 0 || this.renderNo % 2 === 0;
    r.shadowMap.autoUpdate = shadowNow;
    if (this.world.puddles.reflectEnabled) {
      this.world.puddles.renderReflection(r, this.scene, this.camera);
      r.shadowMap.autoUpdate = false;
    }
    this.post.render(this.scene, this.camera, this.time);
    r.shadowMap.autoUpdate = true;
  }
}
