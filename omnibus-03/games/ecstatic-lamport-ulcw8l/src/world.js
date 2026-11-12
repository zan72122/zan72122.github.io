/**
 * world.js — シーン、光、空、地形、飛び込み台、リング、コイン。
 * スポットごとにテーマが変わり、同じ操作でも「別の場所に来た」実感を出す。
 */

import * as THREE from 'three';
import { PHYS } from './config.js';
import { Water } from './water.js';
import { Particles } from './particles.js';

const rnd = (() => {
  let s = 1234567;
  return () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
})();

const SKY_VERT = `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`;
const SKY_FRAG = `
uniform vec3 uTop, uMid, uBottom, uSunDir, uSunColor;
uniform float uSunSize, uStars;
varying vec3 vDir;
float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719))) * 43758.5453); }
void main(){
  vec3 d = normalize(vDir);
  float t = clamp(d.y * 0.5 + 0.5, 0.0, 1.0);
  vec3 col = t < 0.5 ? mix(uBottom, uMid, t * 2.0) : mix(uMid, uTop, (t - 0.5) * 2.0);
  float sun = max(dot(d, normalize(uSunDir)), 0.0);
  col += uSunColor * pow(sun, 900.0 / max(uSunSize, 0.01)) * 3.0;
  col += uSunColor * pow(sun, 8.0) * 0.22;
  if (uStars > 0.5) {
    vec3 g = floor(d * 220.0);
    float h = hash(g);
    if (h > 0.9975 && d.y > 0.02) col += vec3(1.0) * (h - 0.9975) * 380.0;
  }
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;

function noisyCylinder(rTop, rBottom, h, segs, jitter, color, flat = true) {
  const g = new THREE.CylinderGeometry(rTop, rBottom, h, segs, Math.max(1, Math.round(h / 3)));
  const pos = g.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const k = 1 + (rnd() - 0.5) * jitter;
    if (Math.abs(v.y) < h / 2 - 0.001) { v.x *= k; v.z *= k; }
    v.y += (rnd() - 0.5) * jitter * 1.2;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ color, flatShading: flat }));
  m.castShadow = true; m.receiveShadow = true;
  return m;
}

function box(w, h, d, color, flat = false) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d),
    new THREE.MeshLambertMaterial({ color, flatShading: flat }));
  m.castShadow = true; m.receiveShadow = true;
  return m;
}

function palm(scale = 1) {
  const g = new THREE.Group();
  const trunkH = 4.5 * scale;
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12 * scale, 0.22 * scale, trunkH, 6, 5),
    new THREE.MeshLambertMaterial({ color: 0x8a6a45, flatShading: true }));
  const pos = trunk.geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const t = (y + trunkH / 2) / trunkH;
    pos.setX(i, pos.getX(i) + Math.sin(t * 1.6) * 0.5 * scale);
  }
  trunk.geometry.computeVertexNormals();
  trunk.position.y = trunkH / 2;
  trunk.castShadow = true;
  g.add(trunk);
  const leafMat = new THREE.MeshLambertMaterial({ color: 0x2f9e56, side: THREE.DoubleSide, flatShading: true });
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.42 * scale, 2.6 * scale, 4, 1), leafMat);
    leaf.position.set(Math.cos(a) * 1.0 * scale + Math.sin(1.6) * 0.5 * scale, trunkH - 0.1 * scale, Math.sin(a) * 1.0 * scale);
    leaf.rotation.set(Math.PI / 2 - 0.55, 0, -a + Math.PI / 2);
    leaf.rotateOnAxis(new THREE.Vector3(0, 0, 1), 0);
    leaf.castShadow = true;
    g.add(leaf);
  }
  const cocoMat = new THREE.MeshLambertMaterial({ color: 0x6b4a2a });
  for (let i = 0; i < 3; i++) {
    const c = new THREE.Mesh(new THREE.SphereGeometry(0.16 * scale, 6, 5), cocoMat);
    c.position.set(Math.cos(i * 2.1) * 0.3 * scale + 0.4 * scale, trunkH - 0.35 * scale, Math.sin(i * 2.1) * 0.3 * scale);
    g.add(c);
  }
  return g;
}

export class World {
  constructor(renderer) {
    this.renderer = renderer;
    this.scene = new THREE.Scene();

    this.skyUniforms = {
      uTop: { value: new THREE.Color(0x2b7fd4) },
      uMid: { value: new THREE.Color(0x86c9f0) },
      uBottom: { value: new THREE.Color(0xdff2ff) },
      uSunDir: { value: new THREE.Vector3(0.45, 0.6, -0.65).normalize() },
      uSunColor: { value: new THREE.Color(0xfff0c8) },
      uSunSize: { value: 1.0 },
      uStars: { value: 0 },
    };
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(700, 32, 20),
      new THREE.ShaderMaterial({ vertexShader: SKY_VERT, fragmentShader: SKY_FRAG, uniforms: this.skyUniforms, side: THREE.BackSide, depthWrite: false }));
    sky.renderOrder = -100;
    this.scene.add(sky);
    this.sky = sky;

    this.hemi = new THREE.HemisphereLight(0xdff2ff, 0x6d8ea0, 1.15);
    this.scene.add(this.hemi);
    // 逆光側を潰さないための弱いフィル。低ポリの面がべた塗りに見えるのを防ぐ。
    this.fill = new THREE.DirectionalLight(0xbcd8ee, 0.45);
    this.fill.position.set(-30, 18, 34);
    this.scene.add(this.fill);
    this.sun = new THREE.DirectionalLight(0xfff2d8, 1.75);
    this.sun.position.set(38, 58, -46);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.near = 1; sc.far = 260; sc.left = -45; sc.right = 45; sc.top = 60; sc.bottom = -60;
    this.sun.shadow.bias = -0.0012;
    this.sun.shadow.normalBias = 0.05;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target);

    this.fog = new THREE.Fog(0xbfe9ff, 90, 620);
    this.scene.fog = this.fog;

    this.water = new Water(this.scene);
    this.particles = new Particles(this.scene);

    this.spotGroup = new THREE.Group();
    this.scene.add(this.spotGroup);
    this.rings = [];
    this.coins = [];
    this.walls = [];
    this.ambient = [];
    this.spot = null;
    this.takeoff = new THREE.Vector3(0, 0, 0);
  }

  clearSpot() {
    this.spotGroup.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        const ms = Array.isArray(o.material) ? o.material : [o.material];
        ms.forEach((m) => m.dispose());
      }
    });
    this.spotGroup.clear();
    this.rings = [];
    this.coins = [];
    this.walls = [];
    this.ambient = [];
  }

  /** char は選択中のダイバー定義。ピックアップの弾道計算に使う。 */
  loadSpot(spot, char) {
    if (char) { this.charPower = char.power || 1; this.charGravity = char.gravityMult || 1; }
    this.clearSpot();
    this.spot = spot;
    const H = spot.height;
    this.takeoff.set(0, H, 0);

    const night = !!spot.night;
    if (night) {
      this.skyUniforms.uTop.value.setHex(0x090d1e);
      this.skyUniforms.uMid.value.setHex(0x1d1930);
      this.skyUniforms.uBottom.value.setHex(0x51263a);
      this.skyUniforms.uSunColor.value.setHex(0xff9a4a);
      this.skyUniforms.uSunDir.value.set(0.3, 0.06, -0.9).normalize();
      this.skyUniforms.uStars.value = 1;
      this.hemi.color.setHex(0x7b80ad); this.hemi.groundColor.setHex(0x6b4038); this.hemi.intensity = 1.7;
      this.fill.color.setHex(0xa78ab0); this.fill.intensity = 0.75;
      this.sun.color.setHex(0xffb070); this.sun.intensity = 1.9;
      this.sun.position.set(30, 22, -60);
      this.fog.color.setHex(spot.fog); this.fog.near = 70; this.fog.far = 430;
      this.water.setTheme({ deep: 0x0d2f47, shallow: 0x24607a, sky: 0x4a2f3e, sunColor: 0xffa060, chop: 1.05 });
    } else {
      this.skyUniforms.uTop.value.setHex(0x2b7fd4);
      this.skyUniforms.uMid.value.setHex(0x86c9f0);
      this.skyUniforms.uBottom.value.setHex(spot.fog);
      this.skyUniforms.uSunColor.value.setHex(0xfff0c8);
      this.skyUniforms.uSunDir.value.set(0.45, 0.6, -0.65).normalize();
      this.skyUniforms.uStars.value = 0;
      this.hemi.color.setHex(0xdff2ff); this.hemi.groundColor.setHex(0x6d8ea0); this.hemi.intensity = 1.15;
      this.fill.color.setHex(0xbcd8ee); this.fill.intensity = 0.45;
      this.sun.color.setHex(0xfff2d8); this.sun.intensity = 1.75;
      this.sun.position.set(38, 58 + H * 0.5, -46);
      this.fog.color.setHex(spot.fog); this.fog.near = 90; this.fog.far = 620;
      this.water.setTheme({ deep: 0x0d5f80, shallow: spot.water, sky: spot.fog, sunColor: 0xfff2d0, chop: 0.7 + (spot.wind || 0) * 0.35 });
    }
    this.scene.background = null;
    this.water.uniforms.uSunDir.value.copy(this.skyUniforms.uSunDir.value);

    const build = {
      lagoon: () => this._buildDock(spot),
      tropic: () => this._buildPalmCliff(spot),
      falls: () => this._buildFalls(spot),
      ruins: () => this._buildRuins(spot),
      harbor: () => this._buildCrane(spot),
      volcano: () => this._buildVolcano(spot),
    }[spot.theme];
    if (build) build();

    this._buildPickups(spot);
    if (spot.wallKick) this._buildKickWalls(spot);
    this._updateShadowCamera(H);
  }

  _updateShadowCamera(H) {
    const sc = this.sun.shadow.camera;
    const span = Math.max(28, H * 0.75);
    sc.left = -span; sc.right = span; sc.top = span * 1.3; sc.bottom = -span * 1.3;
    sc.far = 400;
    this.sun.target.position.set(0, H * 0.45, 8);
    this.sun.position.set(38 + H * 0.2, 50 + H * 0.7, -46 - H * 0.2);
    sc.updateProjectionMatrix();
  }

  _addWall(x, y, z, w, h, d) {
    this.walls.push(new THREE.Box3(
      new THREE.Vector3(x - w / 2, y - h / 2, z - d / 2),
      new THREE.Vector3(x + w / 2, y + h / 2, z + d / 2)));
  }

  // ---- 各テーマ ---------------------------------------------------

  /**
   * 地形の鉄則: ダイブ経路 (x ±6, z = -1 〜 +34) は必ず開いた水面にする。
   * 陸や岩は必ず後方 (z < -(半径+1)) に置く。高さの恐怖はここでしか出ない。
   */
  _island(radius, color, z) {
    const isl = noisyCylinder(radius * 0.82, radius, 7, 12, 0.16, color);
    isl.position.set(0, -3.0, z);
    this.spotGroup.add(isl);
    const sand = noisyCylinder(radius * 1.12, radius * 1.26, 1.4, 14, 0.1, 0xf0dfae);
    sand.position.set(0, -3.4, z);
    this.spotGroup.add(sand);
    return isl;
  }

  _buildDock(spot) {
    const H = spot.height;
    this._island(19, 0x3f9a55, -36);
    // 桟橋は水の上に張り出す。柱は水中へ。
    const deck = box(3.4, 0.4, 18, 0xb08050);
    deck.position.set(0, H, -8.6);
    this.spotGroup.add(deck);
    for (let i = 0; i < 6; i++) {
      const post = box(0.42, H + 6, 0.42, 0x7a5638);
      post.position.set(i % 2 ? 1.3 : -1.3, H / 2 - 3, -1.4 - i * 3.0);
      this.spotGroup.add(post);
    }
    const board = box(1.15, 0.16, 3.6, 0xf2f2e6);
    board.position.set(0, H + 0.2, 1.2);
    this.spotGroup.add(board);
    for (const s of [-1, 1]) {
      const rail = box(0.09, 0.95, 3.0, 0xcfd6dc);
      rail.position.set(0.85 * s, H + 0.7, -2.0);
      this.spotGroup.add(rail);
    }
    for (let i = 0; i < 9; i++) {
      const p = palm(0.9 + rnd() * 0.6);
      const a = rnd() * Math.PI * 2;
      p.position.set(Math.cos(a) * (7 + rnd() * 13), -2.6, -36 + Math.sin(a) * (7 + rnd() * 12));
      this.spotGroup.add(p);
    }
    this._addWall(0, H / 2, -12, 3.4, H, 14);
  }

  _buildPalmCliff(spot) {
    const H = spot.height;
    this._island(30, 0x3f9a55, -40);
    // 岩壁は z = -12 中心 / 底面半径 11 → 前面は z ≈ -1。真下は水。
    const rock = noisyCylinder(6.2, 11, H + 6, 10, 0.2, 0xbba887);
    rock.position.set(0, H / 2 - 3, -11);
    this.spotGroup.add(rock);
    const rock2 = noisyCylinder(4.4, 8, H * 0.7, 9, 0.22, 0xa8956f);
    rock2.position.set(-9, H * 0.35 - 2, -16);
    this.spotGroup.add(rock2);
    const grass = noisyCylinder(6.4, 6.0, 1.2, 10, 0.12, 0x59c46f);
    grass.position.set(0, H + 0.1, -11);
    this.spotGroup.add(grass);
    const ledge = box(3.2, 0.6, 5.4, 0xc9b795);
    ledge.position.set(0, H - 0.05, -0.6);
    this.spotGroup.add(ledge);
    // ヤシは飛び込み台の左右に。落ちていく最中も視界の端に入って高さの基準になる。
    for (const [x, z, sc] of [[-4.2, -3.5, 1.1], [4.4, -4.2, 0.95], [-2.6, -9, 1.25], [3.2, -10, 1.05], [0, -14, 1.15]]) {
      const p = palm(sc);
      p.position.set(x, H + 0.5, z);
      this.spotGroup.add(p);
    }
    // 水面から頭を出す岩
    for (let i = 0; i < 9; i++) {
      const r = noisyCylinder(1.0 + rnd(), 2.4 + rnd(), 3.5 + rnd() * 3, 7, 0.3, 0x9c9078);
      const a = rnd() * Math.PI * 2;
      r.position.set(Math.cos(a) * (19 + rnd() * 26), -3.4, -26 + Math.sin(a) * 22);
      this.spotGroup.add(r);
    }
    this._addWall(0, H / 2 - 3, -12, 12, H + 6, 12);
  }

  _buildFalls(spot) {
    const H = spot.height;
    const rock = noisyCylinder(7.5, 14, H + 7, 11, 0.22, 0x6f7d72);
    rock.position.set(0, H / 2 - 3.5, -16);
    this.spotGroup.add(rock);
    for (const sx of [-1, 1]) {
      const cliff = noisyCylinder(10, 15, H + 14, 9, 0.25, 0x5f6d63);
      cliff.position.set(sx * 27, H / 2 - 6, -24);
      this.spotGroup.add(cliff);
    }
    // 滝: 半透明の板をゆらす
    const fallMat = new THREE.MeshBasicMaterial({ color: 0xdff6ff, transparent: true, opacity: 0.55, side: THREE.DoubleSide });
    for (let i = 0; i < 2; i++) {
      const sx = i ? 1 : -1;
      const f = new THREE.Mesh(new THREE.PlaneGeometry(7.5, H + 8, 1, 20), fallMat);
      f.position.set(sx * 18, (H + 8) / 2 - 4, -18);
      this.spotGroup.add(f);
      this.ambient.push({ kind: 'fall', mesh: f, phase: i * 1.3, x: sx * 18, z: -16 });
    }
    const ledge = box(3.6, 0.65, 5.6, 0x7c8a80);
    ledge.position.set(0, H - 0.1, -0.8);
    this.spotGroup.add(ledge);
    for (let i = 0; i < 14; i++) {
      const t = new THREE.Mesh(new THREE.ConeGeometry(1.4 + rnd(), 5 + rnd() * 5, 6),
        new THREE.MeshLambertMaterial({ color: 0x2e7a48, flatShading: true }));
      const a = rnd() * Math.PI * 2;
      t.position.set(Math.cos(a) * (24 + rnd() * 30), H * (0.35 + rnd() * 0.7), -34 + Math.sin(a) * 20);
      t.castShadow = true;
      this.spotGroup.add(t);
    }
    this._addWall(0, H / 2 - 3.5, -16, 16, H + 7, 16);
  }

  _buildRuins(spot) {
    const H = spot.height;
    const base = noisyCylinder(7, 15, H + 7, 8, 0.12, 0xb8a888);
    base.position.set(0, H / 2 - 3.5, -17);
    this.spotGroup.add(base);
    for (let i = 0; i < 18; i++) {
      const y = (i / 18) * H;
      const b = box(3 + rnd() * 4, 1.1, 3 + rnd() * 3, i % 3 === 0 ? 0xa89a7c : 0xc4b694, true);
      const a = 2.2 + i * 0.42;               // 後方半周だけに配置
      b.position.set(Math.cos(a) * (6.5 + rnd() * 3), y, -17 + Math.sin(a) * (6.5 + rnd() * 3));
      b.rotation.y = rnd() * 0.6;
      this.spotGroup.add(b);
    }
    for (let i = 0; i < 6; i++) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.85, 5 + rnd() * 7, 10),
        new THREE.MeshLambertMaterial({ color: 0xd6c9a6 }));
      col.position.set((rnd() - 0.5) * 15, H + 2.5, -20 - rnd() * 7);
      col.rotation.z = (rnd() - 0.5) * 0.25;
      col.castShadow = true;
      this.spotGroup.add(col);
    }
    const ledge = box(3.8, 0.7, 6.0, 0xd6c9a6);
    ledge.position.set(0, H - 0.15, -1.2);
    this.spotGroup.add(ledge);
    this._addWall(0, H / 2 - 3.5, -17, 15, H + 7, 15);
  }

  _buildCrane(spot) {
    const H = spot.height;
    const steel = 0xd8532c, dark = 0x3c4450;
    const leg = (x, z) => { const l = box(1.0, H, 1.0, steel); l.position.set(x, H / 2, z); this.spotGroup.add(l); };
    leg(-3.4, -18); leg(3.4, -18); leg(-3.4, -11); leg(3.4, -11);
    for (let i = 1; i < 10; i++) {
      for (const z of [-18, -11]) {
        const br = box(7.8, 0.35, 0.35, steel);
        br.position.set(0, (i / 10) * H, z);
        this.spotGroup.add(br);
      }
    }
    const cab = box(6.8, 3.2, 8, dark);
    cab.position.set(0, H + 1.4, -14.5);
    this.spotGroup.add(cab);
    // 前へ突き出したジブ。先端 z = +2 付近から飛ぶ。
    const jib = box(2.2, 0.5, 20, steel);
    jib.position.set(0, H - 0.3, -7.5);
    this.spotGroup.add(jib);
    for (let i = 0; i < 7; i++) {
      const t = box(0.16, 1.8, 0.16, steel);
      t.position.set(0, H + 0.7, -16 + i * 2.6);
      this.spotGroup.add(t);
    }
    const quay = box(90, 4, 30, 0x8d93a0);
    quay.position.set(0, -1.4, -46);
    this.spotGroup.add(quay);
    const cols = [0xd94f3d, 0x2f7fd0, 0x3fae6a, 0xe4b23c];
    for (let i = 0; i < 26; i++) {
      const c = box(2.6, 2.4, 6, cols[(rnd() * 4) | 0]);
      c.position.set(-30 + (i % 9) * 3.1 + rnd(), 1.9 + Math.floor(i / 9) * 2.5, -44 - Math.floor(i / 9) * 2);
      this.spotGroup.add(c);
    }
    this._addWall(0, H / 2, -14.5, 9, H, 12);
  }

  _buildVolcano(spot) {
    const H = spot.height;
    const cone = noisyCylinder(9, 31, H + 11, 14, 0.16, 0x4a3e39);
    cone.position.set(0, H / 2 - 5.5, -34);
    this.spotGroup.add(cone);
    const glow = new THREE.Mesh(new THREE.CylinderGeometry(7.4, 7.4, 1.2, 14),
      new THREE.MeshBasicMaterial({ color: 0xff5b1e }));
    glow.position.set(0, H + 4.6, -34);
    this.spotGroup.add(glow);
    this.ambient.push({ kind: 'glow', mesh: glow });
    const lava = new THREE.PointLight(0xff6a20, 5.5, 180, 1.6);
    lava.position.set(0, H + 7, -34);
    this.spotGroup.add(lava);
    this.ambient.push({ kind: 'lavaLight', mesh: lava });

    // 火口から前へ伸びる細い黒曜石の尾根。その先端が飛び込み台。
    const ridge = noisyCylinder(3.6, 7.5, H + 6, 8, 0.18, 0x6b5a50);
    ridge.position.set(0, H / 2 - 3, -12);
    this.spotGroup.add(ridge);
    const ledge = box(3.8, 0.7, 6.4, 0x5a4a42);
    ledge.position.set(0, H - 0.15, -0.6);
    this.spotGroup.add(ledge);
    // 手前の尾根に溶岩の亀裂を走らせる。夜でも岩の形が読めるようにするため。
    for (let i = 0; i < 10; i++) {
      const a = rnd() * Math.PI * 2;
      const y = 4 + rnd() * (H - 8);
      const r = 3.6 + (1 - (y / H)) * 3.6;
      const crack = new THREE.Mesh(new THREE.BoxGeometry(0.35, 2.4 + rnd() * 4, 0.35),
        new THREE.MeshBasicMaterial({ color: 0xff7a2a }));
      crack.position.set(Math.cos(a) * r, y, -12 + Math.sin(a) * r);
      crack.rotation.set((rnd() - 0.5) * 0.5, a, (rnd() - 0.5) * 0.5);
      this.spotGroup.add(crack);
    }
    // 台のふちを照らす赤い光。シルエットに輪郭を与える。
    const rim = new THREE.PointLight(0xff7a30, 2.4, 42, 1.8);
    rim.position.set(0, H - 2.5, -6);
    this.spotGroup.add(rim);
    for (let i = 0; i < 9; i++) {
      const a = 2.0 + rnd() * 2.4;
      const s = new THREE.Mesh(new THREE.BoxGeometry(1.0, H * 0.85, 0.6),
        new THREE.MeshBasicMaterial({ color: 0xff7a2a }));
      s.position.set(Math.cos(a) * 15, H * 0.34, -34 + Math.sin(a) * 15);
      s.rotation.y = -a;
      this.spotGroup.add(s);
    }
    this._addWall(0, H / 2 - 3, -12, 8, H + 6, 8);
    this._addWall(0, H / 2 - 5.5, -34, 34, H + 11, 34);
  }

  /**
   * 踏切の強さごとの弾道を player.js と同じ式で数値積分する。
   * これでリングとコインは「必ずその踏切なら通る線」の上に乗る。
   */
  _arc(H, power, gravMult = 1) {
    const g = PHYS.gravity * gravMult;
    const dt = 1 / 120;
    let y = H + 0.92, z = 0.9;
    let vy = 11.8 * power, vz = 3.8 * power;
    const pts = [];
    for (let i = 0; i < 1200; i++) {
      vy += g * dt;
      const d = Math.exp(-PHYS.airDrag * dt);
      vy *= d; vz *= d;
      if (vy < -PHYS.terminal) vy = -PHYS.terminal;
      y += vy * dt; z += vz * dt;
      pts.push({ y, z, vy, vz, t: (i + 1) * dt });
      if (y <= 0.6) break;
    }
    return pts;
  }

  _sample(pts, frac) {
    const i = Math.min(pts.length - 1, Math.max(0, Math.round(frac * (pts.length - 1))));
    return pts[i];
  }

  /**
   * 落下区間を「高さの割合」でサンプルする。
   * 飛行時間の割合で切ると、高い台ほど頂点が前に寄ってリングが台より上に出てしまう。
   * 頂点から水面までを等分することで、どの台でも梯子のように等間隔に並ぶ。
   */
  _descend(pts, hFrac) {
    let apex = 0;
    for (let i = 1; i < pts.length; i++) { if (pts[i].y > pts[apex].y) apex = i; }
    const top = pts[apex].y, bottom = 1.2;
    const target = top - (top - bottom) * Math.min(1, Math.max(0, hFrac));
    for (let i = apex; i < pts.length; i++) if (pts[i].y <= target) return pts[i];
    return pts[pts.length - 1];
  }

  /**
   * リングは「パーフェクト踏切(溜め0.85 → power 1.23)」の弾道上。
   * コインは半分がその線、半分がフルパワー(1.34)の高い線。
   * → 溜めメーターの意味が空中の見た目に直結し、狙いが自然に伝わる。
   */
  /**
   * ウォールキック用の岩。落下線のすぐ脇に置く。
   * 崖の壁面に置いても届かない — 落ちる場所に置いてはじめて選択肢になる。
   */
  _buildKickWalls(spot) {
    const H = spot.height;
    const arc = this._arc(H, 1.25 * (this.charPower || 1), this.charGravity || 1);
    const col = spot.theme === 'volcano' ? 0x2f2826 : 0xb0a184;
    [[0.45, 1], [0.72, -1]].forEach(([f, sx], i) => {
      const s = this._descend(arc, f);
      const h = Math.max(5, Math.min(11, H * 0.18));
      const w = box(2.4, h, 3.2, col, true);
      w.position.set(sx * 3.0, s.y, s.z);
      w.rotation.y = sx * 0.12;
      this.spotGroup.add(w);
      this._addWall(sx * 3.0, s.y, s.z, 2.4, h, 3.2);
      // 目印のマーク
      const mark = new THREE.Mesh(new THREE.BoxGeometry(0.15, h * 0.6, 0.15),
        new THREE.MeshBasicMaterial({ color: 0xffd24a }));
      mark.position.set(sx * (3.0 - 1.25), s.y, s.z);
      this.spotGroup.add(mark);
      this.ambient.push({ kind: 'kickMark', mesh: mark, phase: i });
    });
  }

  _buildPickups(spot) {
    const H = spot.height;
    // 選んだダイバーの跳躍力・重力に合わせて弾道を引き直す。
    // これをやらないと、跳ぶ力が違うキャラでリングに一切届かなくなる。
    const P = this.charPower || 1, G = this.charGravity || 1;
    const arcRing = this._arc(H, 1.25 * P, G);       // パーフェクト踏切の線
    const arcHigh = this._arc(H, 1.36 * P, G);       // フルパワーの線
    const flight = arcRing[arcRing.length - 1].t;
    const nRings = Math.max(2, Math.min(6, Math.round(flight * 1.5)));
    const nCoins = nRings + 2;

    for (let i = 0; i < nRings; i++) {
      const f = 0.10 + (0.82 * i) / Math.max(1, nRings - 1);
      const s = this._descend(arcRing, f);
      const g = new THREE.Group();
      const mat = new THREE.MeshBasicMaterial({ color: 0x6ff0ff });
      const rad = 1.35;
      const torus = new THREE.Mesh(new THREE.TorusGeometry(rad, 0.09, 8, 30), mat);
      g.add(torus);
      const halo = new THREE.Mesh(new THREE.TorusGeometry(rad, 0.24, 8, 26),
        new THREE.MeshBasicMaterial({ color: 0x6ff0ff, transparent: true, opacity: 0.18 }));
      g.add(halo);
      g.position.set(0, s.y, s.z);
      // 輪の軸を、その地点の速度方向に合わせる
      g.rotation.x = Math.PI / 2 - Math.atan2(s.vz, -s.vy);
      this.spotGroup.add(g);
      const axis = new THREE.Vector3(0, s.vy, s.vz).normalize();
      this.rings.push({ obj: g, torus, halo, r: rad, pos: g.position.clone(), axis, taken: false });
    }

    const coinMat = new THREE.MeshLambertMaterial({ color: 0xffcb2e, emissive: 0x6a4a00 });
    for (let i = 0; i < nCoins; i++) {
      const f = 0.05 + (0.86 * i) / Math.max(1, nCoins - 1);
      const high = i % 2 === 1;
      const s = this._descend(high ? arcHigh : arcRing, f);
      const m = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.08, 16), coinMat);
      m.rotation.z = Math.PI / 2;
      m.position.set(0, s.y, s.z);
      m.castShadow = true;
      this.spotGroup.add(m);
      this.coins.push({ obj: m, pos: m.position.clone(), taken: false });
    }
  }

  resetPickups() {
    for (const r of this.rings) { r.taken = false; r.obj.visible = true; r.obj.scale.setScalar(1); }
    for (const c of this.coins) { c.taken = false; c.obj.visible = true; c.obj.scale.setScalar(1); }
  }

  update(dt, t) {
    this.water.update(dt);
    this.particles.update(dt);
    for (const r of this.rings) {
      if (r.taken) continue;
      r.obj.rotation.z = t * 0.9;   // rotation.x(傾き)は保持されたまま自転する
      const s = 1 + Math.sin(t * 3 + r.pos.y) * 0.04;
      r.obj.scale.setScalar(s);
      r.halo.material.opacity = 0.14 + Math.sin(t * 4 + r.pos.y) * 0.07;
    }
    for (const c of this.coins) {
      if (c.taken) continue;
      c.obj.rotation.y = t * 3.2;
      c.obj.position.y = c.pos.y + Math.sin(t * 2 + c.pos.z) * 0.12;
    }
    for (const a of this.ambient) {
      if (a.kind === 'fall') {
        a.mesh.material.opacity = 0.42 + Math.sin(t * 9 + a.phase) * 0.12;
      } else if (a.kind === 'glow') {
        a.mesh.material.color.setHSL(0.045 + Math.sin(t * 1.7) * 0.012, 1, 0.5 + Math.sin(t * 2.6) * 0.07);
      } else if (a.kind === 'kickMark') {
        a.mesh.material.color.setHSL(0.13, 1, 0.55 + Math.sin(t * 6 + a.phase) * 0.2);
      } else if (a.kind === 'lavaLight') {
        a.mesh.intensity = 2.2 + Math.sin(t * 5.1) * 0.6 + Math.sin(t * 11.3) * 0.3;
      }
    }
    // 火山: 火の粉
    if (this.spot && this.spot.theme === 'volcano' && Math.random() < 0.5) {
      const a = Math.random() * Math.PI * 2;
      this.particles.spawn({
        p: new THREE.Vector3(Math.cos(a) * 6, this.spot.height + 4.8, -34 + Math.sin(a) * 6),
        v: new THREE.Vector3((Math.random() - 0.5) * 2, 3 + Math.random() * 5, (Math.random() - 0.5) * 2),
        life: 2.4 + Math.random() * 2, size: 0.08, grav: -1.2, drag: 0.1,
        color: Math.random() < 0.5 ? 0xff7a20 : 0xffd050,
      });
    }
    // 滝: 飛沫
    if (this.spot && this.spot.theme === 'falls' && Math.random() < 0.7) {
      const x = Math.random() < 0.5 ? -13 : 13;
      this.particles.spawn({
        p: new THREE.Vector3(x + (Math.random() - 0.5) * 5, 1.5 + Math.random() * 3, -9),
        v: new THREE.Vector3((Math.random() - 0.5) * 3, 1.5 + Math.random() * 2, 1 + Math.random() * 2),
        life: 1.6, size: 0.1, grav: -3, drag: 0.4, color: 0xffffff,
      });
    }
  }
}
