// Assembles the environment: sky, light, ground, grass, puddles, village, trees, clouds.
import * as THREE from '../../lib/three.module.js';
import { Sky } from './sky.js';
import { Terrain } from './terrain.js';
import { Grass, Dew, makePuddleMask } from './grass.js';
import { Puddles, WATER_Y } from './water.js';
import { buildVillage, buildTrees } from './props.js';
import { Clouds } from './clouds.js';
import { Birds } from './birds.js';
import { terrainHeight, LOOP_CENTER, LOOP_R, RAINBOW_H, bowProfile } from './layout.js';
import { SUN_DIR, shared, LAYER_MAIN, LAYER_REFLECT } from '../core/env.js';
import { rng } from '../core/math.js';

export class World {
  constructor(renderer, quality) {
    this.renderer = renderer;
    this.q = quality;
    const scene = (this.scene = new THREE.Scene());
    scene.fog = new THREE.FogExp2(new THREE.Color('#d9e8ee'), 0.00085);
    this.sky = new Sky();
    scene.add(this.sky.mesh);
    scene.environment = this.sky.makeEnvironment(renderer);
    scene.environmentIntensity = 0.85;
    // sun
    const sun = (this.sun = new THREE.DirectionalLight(new THREE.Color(1.0, 0.88, 0.72), 3.0));
    sun.castShadow = true;
    sun.shadow.mapSize.set(quality.shadow, quality.shadow);
    sun.shadow.bias = -0.0003;
    sun.shadow.normalBias = 0.025;
    const sc = sun.shadow.camera;
    sc.near = 0.5;
    sc.far = 80;
    this.setShadowExtent(5);
    sun.layers.enable(LAYER_REFLECT);
    scene.add(sun, sun.target);
    const hemi = (this.hemi = new THREE.HemisphereLight(0xc4dcf2, 0x5f7440, 0.45));
    hemi.layers.enable(LAYER_REFLECT);
    scene.add(hemi);
    // ground
    this.terrain = new Terrain();
    scene.add(this.terrain.mesh);
    this.mask = makePuddleMask(512);
    this.grassNear = new Grass({ count: quality.grassNear, tile: 11, fade: 5.5, seed: 2, mask: this.mask, heightScale: 1.0, fadeStart: 0.3 });
    this.grassMid = new Grass({ count: quality.grassMid, tile: 28, fade: 13.5, seed: 3, mask: this.mask, heightScale: 1.15, widthScale: 1.7 });
    scene.add(this.grassNear.mesh, this.grassMid.mesh);
    this.dew = new Dew({ mask: this.mask, count: quality.dew });
    scene.add(this.dew.mesh);
    this.puddles = new Puddles(renderer);
    scene.add(this.puddles.group);
    // village & trees
    const v = buildVillage();
    scene.add(v.mesh);
    this.trees = buildTrees();
    scene.add(this.trees);
    // clouds
    this.clouds = new Clouds();
    this._makeClouds();
    scene.add(this.clouds.mesh);
    this.birds = new Birds(16);
    scene.add(this.birds.mesh);
    this.focus = new THREE.Vector3();
    this.cloudMist = 0;
  }

  _makeClouds() {
    const r = rng(91);
    const C = this.clouds;
    // a cloud bank across the ascending bow (the unicorn runs through it)
    const th = (u) => (u * Math.PI * 1.78);
    for (let k = 0; k < 4; k++) {
      const u = 0.25 + k * 0.022;
      const t = th(u);
      const x = LOOP_CENTER.x + Math.cos(t) * LOOP_R, z = LOOP_CENTER.z + Math.sin(t) * LOOP_R;
      const h = bowProfile(u);
      C.addCluster(x + (r() - 0.5) * 30, h - 14 + (r() - 0.5) * 6, z + (r() - 0.5) * 30, 22 + r() * 10, 100 + k);
    }
    // scattered fair-weather cumulus at 90-170 m
    for (let i = 0; i < 26; i++) {
      const a = r() * Math.PI * 2, d = 40 + r() * 420;
      const x = LOOP_CENTER.x + Math.cos(a) * d, z = LOOP_CENTER.z + Math.sin(a) * d;
      C.addCluster(x, 95 + r() * 80, z, 16 + r() * 22, 200 + i);
    }
    // distant towers on the horizon
    for (let i = 0; i < 18; i++) {
      const a = r() * Math.PI * 2, d = 900 + r() * 700;
      C.addCluster(LOOP_CENTER.x + Math.cos(a) * d, 140 + r() * 120, LOOP_CENTER.z + Math.sin(a) * d, 80 + r() * 90, 300 + i, 0.8);
    }
  }

  setShadowExtent(ext) {
    const sc = this.sun.shadow.camera;
    sc.left = -ext;
    sc.right = ext;
    sc.top = ext;
    sc.bottom = -ext;
    sc.updateProjectionMatrix();
    this.shadowExt = ext;
  }

  groundAt(x, z) {
    return terrainHeight(x, z);
  }

  update(dt, camera, focus, shadowCenter = focus) {
    this.focus.copy(focus);
    this.grassNear.focus.set(focus.x, focus.z);
    this.grassMid.focus.set(focus.x, focus.z);
    this.dew.focus.set(focus.x, focus.z);
    // sun shadow follows the action
    const sun = this.sun;
    sun.target.position.copy(shadowCenter);
    sun.position.copy(shadowCenter).addScaledVector(SUN_DIR, 40);
    sun.target.updateMatrixWorld();
    // keep shadow texels stable: snap
    this.puddles.update(dt, camera, this.scene);
    this.clouds.update(camera);
    this.birds.update(dt);
    // skip expensive puddle reflection when far above / no puddles near
    const camY = camera.position.y;
    this.puddles.reflectEnabled = camY < 25 && this.puddlesNear(camera.position, 60);
  }

  puddlesNear(p, d) {
    for (const s of this.puddles.sims) if (Math.hypot(s.def.c[0] - p.x, s.def.c[1] - p.z) < d) return true;
    return false;
  }
}
