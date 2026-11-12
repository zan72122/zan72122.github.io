// パーティーアイランドの3Dワールド。
// 48マス・4ゾーン(はまべ/ジャングル/かざん/ゆうえんち)の大きな島を
// トゥーン調で生成し、天気システムでラウンドごとに表情を変える。

import * as THREE from '../vendor/three.module.min.js';
import { CONFIG, TILE_TYPES, buildTileLayout, zoneOfTile } from './config.js';
import {
  toonMat, toonMatUnique, skyMaterial, seaMaterial,
  starGeometry, heartGeometry, glowTexture, lightningGeometry,
} from './gfx.js';
import { Rides } from './rides.js';
import { chooseStarTile, rotateTileIndex, shrinkLayout, remapTileIndex } from './rules.js';
import { rand } from './rng.js';
import { easeInOut } from './tween.js';

const { TILE_COUNT, BOARD_RADIUS } = CONFIG;

function smoothstep(a, b, x) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}
const lerp = (a, b, t) => a + (b - a) * t;
const TAU = Math.PI * 2;

// ゾーンの中心角度(はまべ→ジャングル→かざん→ゆうえんち)
const ZONE_CENTERS = [TAU * 0.125, TAU * 0.375, TAU * 0.625, TAU * 0.875];
// かざんの本体位置
const VOLCANO_A = ZONE_CENTERS[2];
const VOLCANO_R = 23.5;
const VOLCANO_X = Math.cos(VOLCANO_A) * VOLCANO_R;
const VOLCANO_Z = Math.sin(VOLCANO_A) * VOLCANO_R;

// 角度ごとのゾーンウェイト(なめらかに混ざる)
export function zoneWeights(a) {
  const w = [0, 0, 0, 0];
  let sum = 0;
  for (let i = 0; i < 4; i++) {
    let d = Math.abs(a - ZONE_CENTERS[i]);
    if (d > Math.PI) d = TAU - d;
    const v = Math.pow(Math.max(0, Math.cos(d * 0.95)), 2.2);
    w[i] = v; sum += v;
  }
  for (let i = 0; i < 4; i++) w[i] = sum > 0 ? w[i] / sum : 0.25;
  return w;
}

// ============ 地形の変調パラメータ ============
// islandHeight の末尾で適用される「形」だけの状態。
// うく・かたむく・まわる のような剛体の動きは world.islandGroup の transform で扱い、
// ここには入れない(どれが頂点をさわるのかを読めるようにするため)。
const TERRAIN = {
  flatten: 0,    // 0..1  丘・うねり・火口を平坦へ寄せる(W-03 こおった)
  splitGap: 0,   // 0..   x の符号で ±gap ずらして評価する = 島が割れる(W-04 まっぷたつ)
  breathe: 0,    // 0..1  背中のゆっくりした上下うねり(W-06 いきもののせなか)
  newIsle: 0,    // 0..1  海上に新しいガウス丘が生える(Phase 5 / W-09)
  shrink: 1,     // 1..   島ぜんたいの相似縮小(Phase 5 / W-19)
};

// TERRAIN を書き換えるだけ。ジオメトリは更新しない(呼び出し側が reshapeIsland する)。
export function setIslandWarp(partial) { Object.assign(TERRAIN, partial); }
export function getIslandWarp() { return { ...TERRAIN }; }

// 島の高さ関数。地形・タイル・木・キャラの接地すべてがこれを参照する。
// TERRAIN がぜんぶ既定値のときは分岐が走らないので、拡張前と数値が完全に一致する。
export function islandHeight(x, z) {
  // 🫧 相似縮小(W-19)。1/s へ引きのばした座標で評価して s 倍すると、島ぜんたいが s 倍になる。
  // 既定 1 のときは分岐が走らず、拡張前と数値が完全に一致する。
  const s = TERRAIN.shrink;
  if (s !== 1 && s > 0) return islandHeightCore(x / s, z / s) * s;
  return islandHeightCore(x, z);
}

function islandHeightCore(x, z) {
  // わけめの外側は、内側へ寄せた座標で評価する(島が割れて見える)
  let sx = x;
  if (TERRAIN.splitGap > 0) {
    if (x > TERRAIN.splitGap) sx = x - TERRAIN.splitGap;
    else if (x < -TERRAIN.splitGap) sx = x + TERRAIN.splitGap;
    else return -3.2;                    // わけめの内側は海底
  }
  const r = Math.hypot(sx, z);
  let a = Math.atan2(z, sx);
  if (a < 0) a += TAU;

  let h = -2.6 + 6.4 * Math.pow(Math.max(0, 1 - r / 31), 1.05);
  const hill = 1.7 * Math.exp(-(r * r) / (6.5 * 6.5));                  // 中央の丘
  const swell = 0.45 * Math.sin(a * 7 + r * 0.8) * smoothstep(6, 26, r); // うねり
  h += hill;
  h += swell;

  // タイルが並ぶ帯はなだらかに
  const band = smoothstep(13.6, 15.2, r) * (1 - smoothstep(18.0, 19.6, r));
  h = lerp(h, 0.9, band * 0.92);

  // はまべゾーンの外側は遠浅の入り江(カメさんが泳ぐ)
  const w = zoneWeights(a);
  h -= 3.4 * w[0] * smoothstep(19.5, 25, r);

  // かざんの山とクレーター
  const dv = Math.hypot(sx - VOLCANO_X, z - VOLCANO_Z);
  const volcUp = 7.2 * Math.exp(-(dv * dv) / (4.4 * 4.4));
  const volcDn = 3.0 * Math.exp(-(dv * dv) / (1.7 * 1.7));
  h += volcUp;
  h -= volcDn;

  // flatten: 丘・うねり・かざんを打ち消して 0.9 のリンクへ寄せる
  if (TERRAIN.flatten > 0) {
    const volc = volcUp - volcDn;
    h = lerp(h, lerp(h - hill - swell - volc, 0.9, 0.55), TERRAIN.flatten);
  }
  // breathe: 中央ほど大きく息をする
  if (TERRAIN.breathe > 0) {
    h += TERRAIN.breathe * 0.9 * Math.exp(-(r * r) / (20 * 20));
  }
  return h;
}

export function volcanoTop() {
  return new THREE.Vector3(VOLCANO_X, islandHeight(VOLCANO_X, VOLCANO_Z), VOLCANO_Z);
}

// count はリングのマス数。既定は本島の48で、1引数の既存呼び出しは挙動が変わらない。
// 🫧 しまが ちっちゃく(W-19)だけが 24 を渡す(設計書 9.9 の A)。
export function tileAngle(i, count = TILE_COUNT) {
  const n = Math.max(1, Math.trunc(Number(count)) || TILE_COUNT);
  return (i / n) * TAU;
}

export function tilePosition(i, count = TILE_COUNT) {
  const a = tileAngle(i, count);
  // 島が相似縮小しているあいだは、マスの並ぶ半径も同じだけ縮める。
  // TERRAIN.shrink === 1(既定)のときは 拡張前と数値が完全に一致する。
  const r = (BOARD_RADIUS + Math.sin(i * 1.7) * 0.6) * TERRAIN.shrink;
  const x = Math.cos(a) * r;
  const z = Math.sin(a) * r;
  return new THREE.Vector3(x, islandHeight(x, z) + 0.16, z);
}

// ============ タイル(すごろくマス) ============
class Tile {
  constructor(index, typeKey, world) {
    this.index = index;
    this.world = world;
    this.pos = tilePosition(index);
    this.group = new THREE.Group();
    this.group.position.copy(this.pos);

    // 白いふち
    const rim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.98, 1.08, 0.14, 24),
      toonMat(0xfffdf4),
    );
    rim.receiveShadow = true;
    this.group.add(rim);

    // 色つきトップ(タイプで色が変わる)
    this.topMat = toonMatUnique(0xffffff);
    const top = new THREE.Mesh(
      new THREE.CylinderGeometry(0.82, 0.87, 0.14, 24),
      this.topMat,
    );
    top.position.y = 0.08;
    top.receiveShadow = true;
    this.group.add(top);

    this.iconGroup = new THREE.Group();
    this.iconGroup.position.y = 0.18;
    this.group.add(this.iconGroup);

    this.setType(typeKey);
  }

  setType(typeKey) {
    this.type = typeKey;
    const info = TILE_TYPES[typeKey];
    this.topMat.color.set(info.color);
    this.topMat.emissive.set(info.color);
    this.topMat.emissiveIntensity = 0;

    // アイコンを作り直す。ジオメトリは作り直すたびに捨てる(共有マテリアルは残す)。
    while (this.iconGroup.children.length) {
      const old = this.iconGroup.children[0];
      this.iconGroup.remove(old);
      old.traverse?.((o) => o.geometry?.dispose?.());
    }
    let icon = null;
    if (typeKey === 'COIN') {
      icon = new THREE.Mesh(
        new THREE.CylinderGeometry(0.32, 0.32, 0.08, 18),
        toonMat(0xffd23e),
      );
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.32, 0.055, 8, 18),
        toonMat(0xffb300),
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.04;
      this.iconGroup.add(ring);
    } else if (typeKey === 'HEART') {
      icon = new THREE.Mesh(heartGeometry(0.44, 0.13), toonMat(0xff5c8d));
      icon.rotation.x = -Math.PI / 2;
      icon.position.y = 0.07;
    } else if (typeKey === 'RAINBOW') {
      const cols = [0xff5c5c, 0xffb03c, 0xffe45c, 0x6fdd6f, 0x5cb8ff];
      cols.forEach((c, k) => {
        const arc = new THREE.Mesh(
          new THREE.TorusGeometry(0.44 - k * 0.075, 0.038, 6, 14, Math.PI),
          toonMat(c),
        );
        arc.position.y = 0.05;
        this.iconGroup.add(arc);
      });
    } else if (typeKey === 'EVENT') {
      icon = new THREE.Mesh(starGeometry(0.26, 0.13, 0.08), toonMat(0xffffff));
      icon.rotation.x = -Math.PI / 2;
      icon.position.y = 0.08;
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.42, 0.04, 6, 18),
        toonMat(0x2f9139),
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.03;
      this.iconGroup.add(ring);
    } else if (typeKey === 'STAR') {
      icon = new THREE.Mesh(starGeometry(0.46, 0.22, 0.15), toonMatUnique(0xfff1b0, {
        emissive: 0xffcf4d, emissiveIntensity: 0.5,
      }));
      icon.rotation.x = -Math.PI / 2;
      icon.position.y = 0.1;
    } else if (typeKey === 'STORM') {
      // くろくも+いなずま
      const cloud = new THREE.Group();
      [[-0.16, 0, 0.15], [0.05, 0.06, 0.19], [0.22, 0, 0.13]].forEach(([x, y, r]) => {
        const puff = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), toonMat(0x555070));
        puff.position.set(x, 0.42 + y, 0);
        cloud.add(puff);
      });
      const bolt = new THREE.Mesh(lightningGeometry(0.42, 0.08), toonMatUnique(0xffe45c, {
        emissive: 0xffc93e, emissiveIntensity: 0.6,
      }));
      bolt.position.y = 0.18;
      cloud.add(bolt);
      this.iconGroup.add(cloud);
    } else if (typeKey === 'BOMB') {
      // まっくろばくだん
      icon = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 12), toonMat(0x2a2733));
      icon.position.y = 0.3;
      const fuse = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.2, 6), toonMat(0x8a8a8a));
      fuse.position.y = 0.66;
      fuse.rotation.z = 0.3;
      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.16, 6), toonMatUnique(0xff9d3c, {
        emissive: 0xff6a00, emissiveIntensity: 0.8,
      }));
      flame.position.set(0.06, 0.8, 0);
      this.iconGroup.add(fuse, flame);
    } else if (typeKey === 'HOLE') {
      // まっくらな あな
      const hole = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 20),
        new THREE.MeshBasicMaterial({ color: 0x241a12 }),
      );
      hole.rotation.x = -Math.PI / 2;
      hole.position.y = 0.09;
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.07, 8, 20), toonMat(0x6b4a26));
      rim.rotation.x = Math.PI / 2;
      rim.position.y = 0.07;
      this.iconGroup.add(hole, rim);
    } else if (typeKey === 'TURTLE') {
      // カメのこうら
      const shell = new THREE.Mesh(
        new THREE.SphereGeometry(0.36, 14, 10, 0, TAU, 0, Math.PI / 2),
        toonMat(0x2f9e6e),
      );
      shell.position.y = 0.08;
      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.06, 8, 16), toonMat(0x8fe0b8));
      rim.rotation.x = Math.PI / 2;
      rim.position.y = 0.1;
      this.iconGroup.add(shell, rim);
    } else if (typeKey === 'ROPEWAY') {
      // ゴンドラ
      const cab = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.34, 0.3), toonMat(0xff6f9c));
      cab.position.y = 0.3;
      const roof = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.16, 4), toonMat(0xffffff));
      roof.position.y = 0.53;
      roof.rotation.y = Math.PI / 4;
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.22, 6), toonMat(0x8a8a8a));
      arm.position.y = 0.68;
      this.iconGroup.add(cab, roof, arm);
    } else if (typeKey === 'COASTER') {
      // レールのアーチ+トロッコ
      const rail = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.05, 8, 18, Math.PI), toonMat(0x9c6b3f));
      rail.position.y = 0.08;
      const cart = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.24), toonMat(0xff5c5c));
      cart.position.set(0, 0.52, 0);
      this.iconGroup.add(rail, cart);
    }
    if (icon) {
      icon.castShadow = true;
      this.iconGroup.add(icon);
    }
  }

  update(t) {
    if (this.type === 'STAR') {
      // スターのマスはキラキラ浮かんで回る
      this.iconGroup.position.y = 0.5 + Math.sin(t * 2.4) * 0.1;
      this.iconGroup.rotation.y = t * 1.6;
      this.topMat.emissiveIntensity = 0.25 + Math.sin(t * 3) * 0.2;
    } else if (this.type === 'STORM') {
      this.iconGroup.position.y = 0.18 + Math.sin(t * 3 + this.index) * 0.03;
      this.topMat.emissiveIntensity = Math.max(0, Math.sin(t * 5 + this.index) - 0.85) * 2;
    } else if (this.type === 'COASTER' || this.type === 'ROPEWAY' || this.type === 'TURTLE') {
      this.iconGroup.rotation.y = Math.sin(t * 1.6 + this.index) * 0.4;
    } else {
      this.iconGroup.position.y = 0.18;
      this.iconGroup.rotation.y = 0;
    }
  }
}

// ============ 天気プリセット ============
// rain は false | 'rain' | 'snow' の3値。near / far を省くと 120 / 300 になる。
const WEATHERS = {
  sunny: {
    top: 0x3f8fe8, mid: 0x8fd0ff, bot: 0xfff2e0, fog: 0xa8d8ff,
    sun: 1.9, sunCol: 0xfff2d8, hemi: 0.85, cloud: 0xffffff, rain: false, rainbow: 0.35,
  },
  cloudy: {
    top: 0x5d7ba8, mid: 0xa3b8d0, bot: 0xe8ecf0, fog: 0xb8c4d4,
    sun: 1.15, sunCol: 0xe8e8e0, hemi: 0.7, cloud: 0xd5dae4, rain: false, rainbow: 0,
  },
  squall: {
    top: 0x3a4a6b, mid: 0x64789b, bot: 0xb8c2d4, fog: 0x8fa0b8,
    sun: 0.6, sunCol: 0xccccdd, hemi: 0.6, cloud: 0x939db2, rain: 'rain', rainbow: 0,
  },
  rainbowy: {
    top: 0x4f9bea, mid: 0x9fd8ff, bot: 0xffeef2, fog: 0xbfe0ff,
    sun: 1.8, sunCol: 0xfff2d8, hemi: 0.9, cloud: 0xffffff, rain: false, rainbow: 1,
  },
  sunset: {
    top: 0x5a4a9e, mid: 0xff9d6e, bot: 0xffd9a0, fog: 0xe8b090,
    sun: 1.6, sunCol: 0xffb070, hemi: 0.75, cloud: 0xffd8c0, rain: false, rainbow: 0,
  },

  // ---- 島変貌イベントの天気(Phase 1) ----
  // 🐚 うみが ごっそり ひいた:黄金色のひかりと うすい きり。海底まで あかるい。
  lowtide: {
    top: 0x4a9be0, mid: 0xbfe0f0, bot: 0xffe9c0, fog: 0xd8e8d0,
    sun: 1.7, sunCol: 0xfff0c8, hemi: 0.9, cloud: 0xfff4e0, rain: false, rainbow: 0.15,
    near: 140, far: 320,
  },
  // 🌊 ざっぱーん だいつなみ:こい青。くらくはしないので hemi は 0.7 を保つ。
  tidal: {
    top: 0x2a5a9e, mid: 0x5f96c8, bot: 0xa8cde0, fog: 0x6f9cbc,
    sun: 1.0, sunCol: 0xd8e8f8, hemi: 0.7, cloud: 0x9fb8cc, rain: false, rainbow: 0,
    near: 90, far: 260,
  },

  // ---- 島変貌イベントの天気(Phase 2) ----
  // ❄️ しまが こおった:白と水色の あかるい雪景色。寒さで画面を暗くしない。
  frozen: {
    top: 0x9fd8ff, mid: 0xdff2ff, bot: 0xffffff, fog: 0xd8f0ff,
    sun: 1.5, sunCol: 0xe8f6ff, hemi: 0.95, cloud: 0xffffff, rain: 'snow', rainbow: 0.2,
    near: 110, far: 280,
  },
  // 🙃 さかさま じま:空と海の いろを いれかえる(bot がいちばん こい青 = 海の色)。
  // 島じたいは正立したままで、カメラのロール180度と この色だけで さかさまに見せる。
  upsidedown: {
    top: 0x4f9bea, mid: 0x9fd8ff, bot: 0x2f7ed8, fog: 0xbfe0ff,
    sun: 1.7, sunCol: 0xfff2d8, hemi: 0.9, cloud: 0xffffff, rain: false, rainbow: 1,
    near: 120, far: 300,
  },
  // 🌑 まひるの ほしふり:銀色。よるにはしない(hemi 0.6 / sun 0.45 / bot はあかるい銀)。
  eclipse: {
    top: 0x5a5f78, mid: 0x9aa0b8, bot: 0xd8dae2, fog: 0xa8adbc,
    sun: 0.45, sunCol: 0xe8eaf0, hemi: 0.6, cloud: 0xb8bcc8, rain: false, rainbow: 0,
    near: 130, far: 300,
  },

  // ---- 島変貌イベントの天気(Phase 3) ----
  // 🏝️ そらとぶ しま:いちばん あかるい空。bot をまっ白にして、下half が雲で埋まって見えるようにする。
  sky: {
    top: 0x2f7fe0, mid: 0xbfe8ff, bot: 0xffffff, fog: 0xdfefff,
    sun: 2.1, sunCol: 0xfff8e8, hemi: 1.0, cloud: 0xffffff, rain: false, rainbow: 0.6,
    near: 160, far: 420,
  },

  // ---- 島変貌イベントの天気(Phase 4) ----
  // 🐢 おおきな いきものの せなか:大海原へ こぎ出す あさやけ。虹をうっすら出して こわくしない。
  voyage: {
    top: 0x3f8fe8, mid: 0x8fd0ff, bot: 0xffe8d0, fog: 0xa8d8ff,
    sun: 1.9, sunCol: 0xfff2d8, hemi: 0.9, cloud: 0xffffff, rain: false, rainbow: 0.45,
    near: 140, far: 360,
  },

  // ===== Phase 5 / 5b ここから =====
  // ---- 島変貌イベントの天気(Phase 5 / 5b) ----
  // 🌌 ほしぞら すごろく:こい青むらさきの夜空。0.3 #7 の下限そのもの(sun 0.35 / hemi 0.55)なので、
  // 月・ちょうちん・ホタル・24個の星マスの発光で画面の30%以上を光らせるのが前提である(設計書 9.5)。
  starrynight: {
    top: 0x141a4a, mid: 0x2e3f86, bot: 0x6a7fd0, fog: 0x2a3566,
    sun: 0.35, sunCol: 0xaebfff, hemi: 0.55, cloud: 0x3a4a86, rain: false, rainbow: 0,
    near: 140, far: 340,
  },
  // 🚀 しまロケット:藍 + 極彩色の星雲。くらやみにはしない(hemi 0.6 / sun 0.55)。
  // far: 2000 は _updateWeather がすでに lerp しているので、この1行だけで遠景がひらける。
  space: {
    top: 0x1b1f52, mid: 0x4a3f94, bot: 0x8f6fd0, fog: 0x2e2a5e,
    sun: 0.55, sunCol: 0xdcd0ff, hemi: 0.6, cloud: 0x6a5fb0, rain: false, rainbow: 0,
    near: 200, far: 2000,
  },
  // ===== Phase 5 / 5b ここまで =====

  // ===== Phase 5 / 5a ここから =====
  // ---- 島変貌イベントの天気(Phase 5 / 5a) ----
  // 🎇 オーロラの ぬりかえ:よあけ前の あかるい青。bot をほぼ白にして 0.3 #7 の暗闇禁止を守る
  // (hemi 0.80 / sun 0.80 は どちらも下限の 0.5 / 0.35 に余裕がある)。
  aurora: {
    top: 0x1e3a6e, mid: 0x3f7fb8, bot: 0xbfe8ff, fog: 0x5a86b8,
    sun: 0.80, sunCol: 0xcfe8ff, hemi: 0.80, cloud: 0x8fc8e8, rain: false, rainbow: 0.4,
    near: 130, far: 320,
  },
  // ===== Phase 5 / 5a ここまで =====
};

// ============ ワールド全体 ============
export class World {
  constructor(scene) {
    this.scene = scene;
    this.time = 0;
    this.heightFn = islandHeight; // rides.js が循環importせず使えるように

    // 島の剛体変換の唯一の入口。うく・かたむく・まわる はぜんぶここで表現する。
    // キャラ root はここへ入れない(2.1 の結論)。タイルのアンカー経由で追従させる。
    this.islandGroup = new THREE.Group();
    this.scene.add(this.islandGroup);

    // 木・岩・装飾の島ローカル位置。変形後に y を置き直すために覚えておく。
    this._decorAnchors = [];
    // しままわし(W-07)で マスの種別を いくつ ずらしたか。currentLayout が使う。
    this.boardOffset = 0;
    // ===== Phase 5 / 5a ここから =====
    // 🎇 オーロラ(W-13)と 🫧 ちっちゃく(W-19)が使う、いまの並びの上書き。
    // null のあいだは currentLayout() が 拡張前と完全に同値である。
    this._layoutOverride = null;
    this._shrinkBackup = null;
    // ===== Phase 5 / 5a ここまで =====
    // reshapeIsland が computeVertexNormals を呼んだ回数(性能テスト用の計器)
    this._normalRecomputes = 0;
    // ===== Phase 5 / 5b ここから =====
    // 🌋 だいふんか(W-09)が噴火を増幅する係数。update の火山ループが読む。
    // smokes / embers は update が毎フレーム position と opacity を上書きするので、
    // イベント側から効かせられる口はこの1つだけである(設計書 9.12 #6)。erupt が dispose で 1 に戻す。
    this.volcanoBoost = 1;
    // ===== Phase 5 / 5b ここまで =====

    this._buildLights();
    this._buildSky();
    this._buildSea();
    this._buildIsland();
    this._buildTiles();
    this._buildCenterTower();
    this._buildDecorations();
    this._buildZoneDecorations();
    this._buildPrecipitation();

    // のりもの・どうくつ・ボス・コースターのメッシュ群
    // カメ・ロープウェイ・コースターは島グループの子、どうくつとタコすけは scene 直下
    this.rides = new Rides(this.islandGroup, this);

    this.weatherName = 'sunny';
    this.weatherTarget = WEATHERS.sunny;
  }

  // 本島のマス数。W-16(ふたごの島)などでリングが増えても、ここは常に本島を指す。
  get tileCount() { return this.tiles.length; }

  // いまの地形の変調パラメータ。rides.js が循環importせずに読めるようにする。
  get islandWarp() { return getIslandWarp(); }

  // ---------- 島ローカル ⇔ ワールド ----------

  // マス i のワールド座標。board.js はキャラの位置計算にこれだけを使う。
  // islandGroup が単位変換のあいだは tiles[i].pos と完全に同値である。
  tileAnchor(i) {
    return this.islandGroup.localToWorld(this.tiles[i].pos.clone());
  }

  // キャラたちを、それぞれの tileIndex のアンカーへ島の変換ごと貼り付け直す。
  // 島が動いているあいだ、イベント側が毎フレーム呼ぶ。
  rideIsland(chars, offsetOf) {
    for (const c of chars) {
      if (c.root.parent !== this.scene) continue; // ミニゲーム等へ貸し出し中は触らない
      const a = this.tileAnchor(c.tileIndex);
      c.root.position.copy(a).add(offsetOf(c));
    }
  }

  // 島ローカルのアンカーを islandHeight の現在値で取り直す。
  // 剛体変換(islandGroup)のときは子が勝手についてくるので呼ばなくてよい。
  refreshAnchors({ tiles = true, decor = false, rides = false } = {}) {
    const gap = TERRAIN.splitGap;
    if (tiles) {
      for (const t of this.tiles) {
        t.pos.copy(tilePosition(t.index));
        // わけめの内側に入ってしまったマスは ふちへ寄せる(設計書 4.8)。
        // x をずらしただけだと y が海底(-3.2)のままなので、高さも引き直す。
        if (gap > 0 && Math.abs(t.pos.x) < gap) {
          t.pos.x = Math.sign(t.pos.x || 1) * gap * 1.15;
          t.pos.y = islandHeight(t.pos.x, t.pos.z) + 0.16;
        }
        t.group.position.copy(t.pos);
      }
    }
    if (decor) {
      // 数が多いので、変形のおわりに1回だけ呼ぶ想定。
      // 🫧 相似縮小のあいだは x/z も同じだけ寄せる(s === 1 では恒等なので現行と同値)。
      const s = TERRAIN.shrink;
      for (const a of this._decorAnchors) {
        const x = a.x * s;
        const z = a.z * s;
        a.obj.position.set(x, islandHeight(x, z) + a.dy, z);
      }
    }
    if (rides) this.rides.refit();
  }

  // 島ローカルに置いた装飾を、あとで地面へ置き直せるように覚える。
  _anchorDecor(obj, x, z) {
    this._decorAnchors.push({ obj, x, z, dy: obj.position.y - islandHeight(x, z) });
    return obj;
  }

  /**
   * TERRAIN を to の内容へ seconds 秒かけて変形する。
   * 頂点は「変形前」「変形後」の2本の Float32Array の lerp で作り、
   * 法線は始点と終点でだけ computeVertexNormals する(毎フレームだと重すぎる)。
   * @param {object}   to        TERRAIN の部分適用(例 { flatten: 0.75 })
   * @param {number}   seconds   所要秒。0 なら即時
   * @param {object}   tweens    board のインスタンスを渡す(フレーム駆動を一本化する)
   * @param {Function} [onFrame] 毎フレーム k(0..1) を受け取る。キャラ・タイルの追従に使う
   * @returns {Promise<void>}
   */
  async reshapeIsland({ to, seconds = 1.0, tweens, onFrame } = {}) {
    const geo = this.islandGeo;
    const pos = geo.attributes.position;
    const nrm = geo.attributes.normal;

    // 1. いまの形をひかえる
    const from = new Float32Array(pos.array);

    // 2. 変形後の形と法線を作る
    setIslandWarp(to || {});
    const toBuf = new Float32Array(pos.array.length);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      toBuf[i * 3] = x;
      toBuf[i * 3 + 1] = islandHeight(x, z);
      toBuf[i * 3 + 2] = z;
    }
    pos.array.set(toBuf);
    geo.computeVertexNormals();
    this._normalRecomputes++;
    const toNrm = new Float32Array(nrm.array);

    // 3. いったん元の形へ戻して、始点の法線をひかえる
    pos.array.set(from);
    geo.computeVertexNormals();
    this._normalRecomputes++;
    const fromNrm = new Float32Array(nrm.array);
    pos.needsUpdate = nrm.needsUpdate = true;

    // 4. 2本の lerp でなめらかに移す
    if (seconds > 0 && tweens) {
      await tweens.add(seconds, (k) => {
        const e = easeInOut(k);
        const p = pos.array, n = nrm.array;
        for (let i = 0; i < p.length; i++) {
          p[i] = from[i] + (toBuf[i] - from[i]) * e;
          n[i] = fromNrm[i] + (toNrm[i] - fromNrm[i]) * e;
        }
        pos.needsUpdate = nrm.needsUpdate = true;
        onFrame?.(e);
      });
    }

    // 5. 仕上げ
    pos.array.set(toBuf);
    nrm.array.set(toNrm);
    pos.needsUpdate = nrm.needsUpdate = true;
    geo.computeBoundingSphere();
    onFrame?.(1);
  }

  // ---------- 天気 ----------
  setWeather(name) {
    this.weatherName = name;
    this.weatherTarget = WEATHERS[name] || WEATHERS.sunny;
  }

  _buildLights() {
    this.hemi = new THREE.HemisphereLight(0xcfe8ff, 0x7fb56a, 0.85);
    this.scene.add(this.hemi);
    const sun = new THREE.DirectionalLight(0xfff2d8, 1.9);
    sun.position.set(24, 38, 16);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -36;
    sun.shadow.camera.right = 36;
    sun.shadow.camera.top = 36;
    sun.shadow.camera.bottom = -36;
    sun.shadow.camera.near = 5;
    sun.shadow.camera.far = 110;
    sun.shadow.bias = -0.0005;
    this.scene.add(sun);
    this.sunLight = sun;
  }

  _buildSky() {
    this.skyMat = skyMaterial();
    const dome = new THREE.Mesh(new THREE.SphereGeometry(280, 32, 18), this.skyMat);
    this.scene.add(dome);

    // 太陽のグロー
    this.sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture(), color: 0xfff3b8, transparent: true,
      blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    this.sunSprite.position.set(110, 150, 50);
    this.sunSprite.scale.setScalar(85);
    this.scene.add(this.sunSprite);

    this.scene.fog = new THREE.Fog(0xa8d8ff, 120, 300);
  }

  _buildSea() {
    this.seaMat = seaMaterial();
    const sea = new THREE.Mesh(
      new THREE.PlaneGeometry(CONFIG.SEA_SIZE, CONFIG.SEA_SIZE, 56, 56),
      this.seaMat,
    );
    sea.rotation.x = -Math.PI / 2;
    sea.position.y = 0;
    this.scene.add(sea);
    this.sea = sea;   // W-02 / W-18 が海面の高さを動かす

    // 島まわりの白い波リング
    this.foamRings = [];
    [29.5, 31.4].forEach((r, i) => {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(r, r + 0.6, 80),
        new THREE.MeshBasicMaterial({
          color: 0xffffff, transparent: true, opacity: i === 0 ? 0.5 : 0.28,
          depthWrite: false,
        }),
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.06 + i * 0.02;
      this.scene.add(ring);
      this.foamRings.push(ring);
    });
  }

  _buildIsland() {
    const size = 66, seg = 132;
    this.islandGeo = new THREE.PlaneGeometry(size, size, seg, seg);
    this.islandGeo.rotateX(-Math.PI / 2);
    const pos = this.islandGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) pos.setY(i, islandHeight(pos.getX(i), pos.getZ(i)));
    this.islandGeo.setAttribute('color',
      new THREE.BufferAttribute(new Float32Array(pos.count * 3), 3));
    this._paintIsland('default');                  // 色はぜんぶここを通る
    this.islandGeo.computeVertexNormals();
    this.islandMesh = new THREE.Mesh(this.islandGeo,
      toonMatUnique(0xffffff, { vertexColors: true }));
    this.islandMesh.receiveShadow = true;
    this.islandGroup.add(this.islandMesh);
  }

  // 現行の砂浜→草→丘+ゾーン混色+火口の熱色+色ゆらぎ。結果を _baseColors に持つ。
  // 高さは pos.getY(i) ではなく islandHeight(x, z) を引く。
  // 位置バッファは Float32 に丸められているので、倍精度の h でないと色が変わってしまう。
  _computeBaseColors() {
    const pos = this.islandGeo.attributes.position;
    const colors = this._baseColors || new Float32Array(pos.count * 3);
    const tmp = new THREE.Color();
    const mix = new THREE.Color();

    // ゾーンごとのパレット(低い場所, 高い場所)
    const PALETTES = [
      [new THREE.Color(0xf7e3a8), new THREE.Color(0x9be07a)], // はまべ
      [new THREE.Color(0x58b34a), new THREE.Color(0x2f8f3f)], // ジャングル
      [new THREE.Color(0x9a8878), new THREE.Color(0x5d5148)], // かざん
      [new THREE.Color(0x9fe88a), new THREE.Color(0x6fd07a)], // ゆうえんち
    ];
    const sand = new THREE.Color(0xf7e3a8);
    const lava = new THREE.Color(0xd96a3a);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const h = islandHeight(x, z);
      let a = Math.atan2(z, x);
      if (a < 0) a += TAU;
      const w = zoneWeights(a);
      const hk = smoothstep(0.6, 3.4, h);
      mix.setRGB(0, 0, 0);
      for (let zi = 0; zi < 4; zi++) {
        tmp.copy(PALETTES[zi][0]).lerp(PALETTES[zi][1], hk);
        mix.r += tmp.r * w[zi]; mix.g += tmp.g * w[zi]; mix.b += tmp.b * w[zi];
      }
      // みぎわは砂浜に(かざんゾーンはそのまま岩)
      if (h < 0.45) mix.lerp(sand, (1 - w[2]) * (1 - smoothstep(0.2, 0.45, h)) * 0.9);
      // かざんの火口ちかくは あつそうな色
      const dv = Math.hypot(x - VOLCANO_X, z - VOLCANO_Z);
      mix.lerp(lava, Math.max(0, 1 - dv / 3.2) * 0.55);
      // 色ゆらぎ
      const n = Math.sin(x * 1.7 + z * 2.3) * Math.sin(x * 0.9 - z * 1.1) * 0.04;
      mix.offsetHSL(0, 0, n);
      colors[i * 3] = mix.r; colors[i * 3 + 1] = mix.g; colors[i * 3 + 2] = mix.b;
    }
    this._baseColors = colors;
    return colors;
  }

  /**
   * 島の頂点カラーを書きかえる唯一の入口。
   * どの phase も _baseColors から出発する(phase を重ねがけしない)。
   * 17,689頂点ぶんの計算があるので毎フレーム呼んではならない。
   * 徐々に変えたいときは opts.amount を使い、0.2秒に1回くらいの低頻度で呼ぶ。
   * @param {'default'|'ice'|'night'|'silver'|'pie'|'aurora'|'strata'} phase
   * @param {object} [opts]
   * @param {number} [opts.amount=1]  0..1。default からの混ぜぐあい
   * @param {number[]} [opts.weights] phase='pie' のとき、4色パイの面積比(合計1)
   * @param {number[]} [opts.colors]  phase='pie' のとき、4人のキャラ色
   */
  _paintIsland(phase = 'default', opts = {}) {
    const attr = this.islandGeo.attributes.color;
    if (phase === 'default' || !this._baseColors) this._computeBaseColors();
    const base = this._baseColors;
    const arr = attr.array;
    const amount = Math.min(1, Math.max(0, opts.amount ?? 1));

    if (phase === 'ice') {
      // ❄️ こおった島。ひくい所は しろい氷、たかい所は みずいろの氷。
      // 高さは islandHeight を引き直さず position の y を読む
      // (変形のとちゅうの形が そのまま色に乗り、17,689回の高さ計算を省ける)。
      const pos = this.islandGeo.attributes.position;
      const loR = 0.918, loG = 0.965, loB = 1.0;      // #eaf6ff
      const hiR = 0.714, hiG = 0.886, hiB = 1.0;      // #b6e2ff
      for (let i = 0; i < pos.count; i++) {
        const k = smoothstep(0.4, 3.0, pos.getY(i));
        const r = loR + (hiR - loR) * k;
        const g = loG + (hiG - loG) * k;
        const b = loB + (hiB - loB) * k;
        const j = i * 3;
        arr[j] = base[j] + (r - base[j]) * amount;
        arr[j + 1] = base[j + 1] + (g - base[j + 1]) * amount;
        arr[j + 2] = base[j + 2] + (b - base[j + 2]) * amount;
      }
    } else if (phase === 'silver') {
      // 🌑 日食の銀色。彩度だけを落とし、明度は下げない(暗闇禁止・設計書 0.3 #7)。
      // 輝度グレーへ 0.86 寄せてから 1.06 倍に もちあげる = くすまずに 銀になる。
      const DESAT = 0.86, LIFT = 1.06;
      for (let i = 0; i < arr.length; i += 3) {
        const r0 = base[i], g0 = base[i + 1], b0 = base[i + 2];
        const lum = 0.299 * r0 + 0.587 * g0 + 0.114 * b0;
        const r = Math.min(1, (r0 + (lum - r0) * DESAT) * LIFT);
        const g = Math.min(1, (g0 + (lum - g0) * DESAT) * LIFT);
        const b = Math.min(1, (b0 + (lum - b0) * DESAT) * LIFT);
        arr[i] = r0 + (r - r0) * amount;
        arr[i + 1] = g0 + (g - g0) * amount;
        arr[i + 2] = b0 + (b - b0) * amount;
      }
    } else if (phase === 'strata') {
      // ✂️ わけめの断面。ふかさで 茶(#8a5a34) → 橙(#d9884a) の しま模様にする。
      // 塗るのは わけめの まわりだけで、島の おもてはもとの色のままである。
      // 高さは islandHeight を引き直さず position の y を読む('ice' と同じ理由)。
      const pos = this.islandGeo.attributes.position;
      const gap = Math.max(0.001, opts.gap ?? TERRAIN.splitGap);
      const loR = 0.541, loG = 0.353, loB = 0.204;   // #8a5a34
      const hiR = 0.851, hiG = 0.533, hiB = 0.290;   // #d9884a
      for (let i = 0; i < pos.count; i++) {
        const j = i * 3;
        const near = 1 - smoothstep(gap * 0.9, gap * 2.4, Math.abs(pos.getX(i)));
        const a = near * amount;
        if (a <= 0) {
          arr[j] = base[j]; arr[j + 1] = base[j + 1]; arr[j + 2] = base[j + 2];
          continue;
        }
        const k = 0.5 + 0.5 * Math.sin(pos.getY(i) * 2.2);   // ふかさの しま
        const r = loR + (hiR - loR) * k;
        const g = loG + (hiG - loG) * k;
        const b = loB + (hiB - loB) * k;
        arr[j] = base[j] + (r - base[j]) * a;
        arr[j + 1] = base[j + 1] + (g - base[j + 1]) * a;
        arr[j + 2] = base[j + 2] + (b - base[j + 2]) * a;
      }
    } else if (phase === 'pie') {
      // 🎲 だいルーレット。頂点の角度 atan2(z, x) を weights の累積分布で4区画に割り、
      // colors[k](キャラの色)で塗る。さかいめは 0.04 rad ぼかして かくかくさせない。
      // 島の形(islandHeight)は 1ミリも変えない = 当たり判定も マスの位置も そのままである。
      const pos = this.islandGeo.attributes.position;
      const weights = Array.isArray(opts.weights) && opts.weights.length
        ? opts.weights : [0.25, 0.25, 0.25, 0.25];
      const colors = Array.isArray(opts.colors) && opts.colors.length
        ? opts.colors : [0xff5c5c, 0xffe45c, 0x6fdd6f, 0x5cb8ff];
      const n = weights.length;
      // 区画のさかい(0..TAU の累積)。最後は必ず TAU にそろえる。
      const edges = new Array(n + 1);
      edges[0] = 0;
      let acc = 0;
      const wsum = weights.reduce((a, b) => a + Math.max(0, b), 0) || 1;
      for (let k = 0; k < n; k++) {
        acc += Math.max(0, weights[k]) / wsum;
        edges[k + 1] = k === n - 1 ? TAU : acc * TAU;
      }
      // キャラ色を RGB へ ほどいておく(頂点ごとに new しない)
      const tmp = new THREE.Color();
      const rgb = colors.map((c) => { tmp.set(c); return [tmp.r, tmp.g, tmp.b]; });
      const BLUR = 0.04;
      for (let i = 0; i < pos.count; i++) {
        let a = Math.atan2(pos.getZ(i), pos.getX(i));
        if (a < 0) a += TAU;
        let k = 0;
        while (k < n - 1 && a >= edges[k + 1]) k++;
        let r = rgb[k % rgb.length][0];
        let g = rgb[k % rgb.length][1];
        let b = rgb[k % rgb.length][2];
        // さかいめの手前は となりの色へ にじませる
        const dHi = edges[k + 1] - a;
        const dLo = a - edges[k];
        if (dHi < BLUR || dLo < BLUR) {
          const nextK = dHi < BLUR ? (k + 1) % n : (k - 1 + n) % n;
          const t = 0.5 * (1 - Math.min(dHi, dLo) / BLUR);
          const o = rgb[nextK % rgb.length];
          r += (o[0] - r) * t; g += (o[1] - g) * t; b += (o[2] - b) * t;
        }
        const j = i * 3;
        arr[j] = base[j] + (r - base[j]) * amount;
        arr[j + 1] = base[j + 1] + (g - base[j + 1]) * amount;
        arr[j + 2] = base[j + 2] + (b - base[j + 2]) * amount;
      }
    // ===== Phase 5 / 5b ここから =====
    } else if (phase === 'night') {
      // 🌌 よるの島。基準色を 0.55 倍し、色相を青へ 0.06 寄せる(設計書 2.3 の表)。
      // 0.55 より下げない ── 月・ちょうちん・ホタル・星マスの発光と合わせて
      // 暗闇禁止(0.3 #7)の下限を守るための係数である。
      const DIM = 0.55, BLUE = 0.06, BLUE_HUE = 0.6;
      const c = new THREE.Color();
      const hsl = { h: 0, s: 0, l: 0 };
      for (let i = 0; i < arr.length; i += 3) {
        const r0 = base[i], g0 = base[i + 1], b0 = base[i + 2];
        c.setRGB(r0, g0, b0);
        c.getHSL(hsl);
        // 色相を「青(0.6)へ 0.06 ぶん」寄せる。色相環は巻くので近いほうへ回す。
        let d = BLUE_HUE - hsl.h;
        if (d > 0.5) d -= 1;
        if (d < -0.5) d += 1;
        const shift = Math.max(-BLUE, Math.min(BLUE, d));
        c.setHSL((hsl.h + shift + 1) % 1, hsl.s, hsl.l);
        const r = c.r * DIM, g = c.g * DIM, b = c.b * DIM;
        arr[i] = r0 + (r - r0) * amount;
        arr[i + 1] = g0 + (g - g0) * amount;
        arr[i + 2] = b0 + (b - b0) * amount;
      }
    // ===== Phase 5 / 5b ここまで =====
    // ===== Phase 5 / 5a ここから =====
    } else if (phase === 'aurora') {
      // 🎇 オーロラのカーテンが 地面に落とす ひかりの帯。
      // 明度は下げない(0.3 #7)。みどり(#7ff0c8)と ふじいろ(#c8a8ff)の あいだを
      // ゆるい斜めの縞で行き来させ、base へ amount ぶん だけ混ぜる。
      const pos = this.islandGeo.attributes.position;
      const phaseShift = Number(opts.phase) || 0;
      const g1R = 0.498, g1G = 0.941, g1B = 0.784;   // #7ff0c8
      const g2R = 0.784, g2G = 0.659, g2B = 1.0;     // #c8a8ff
      for (let i = 0; i < pos.count; i++) {
        const j = i * 3;
        const band = 0.5 + 0.5 * Math.sin(pos.getX(i) * 0.16 + pos.getZ(i) * 0.075 + phaseShift);
        const k = band * band * (3 - 2 * band);      // smoothstep で帯を くっきりさせる
        const r = g1R + (g2R - g1R) * k;
        const g = g1G + (g2G - g1G) * k;
        const b = g1B + (g2B - g1B) * k;
        arr[j] = base[j] + (r - base[j]) * amount;
        arr[j + 1] = base[j + 1] + (g - base[j + 1]) * amount;
        arr[j + 2] = base[j + 2] + (b - base[j + 2]) * amount;
      }
    // ===== Phase 5 / 5a ここまで =====
    } else {
      // 'default' ほか。
      arr.set(base);
    }
    attr.needsUpdate = true;
  }

  _buildTiles() {
    const layout = buildTileLayout(TILE_COUNT);
    this.tiles = layout.map((typeKey, i) => new Tile(i, typeKey, this));
    // タイトル画面の背景にもスターを見せる。ゲーム開始時に公平な位置へ置き直す。
    this.starTileIndex = 8;
    this.tiles[this.starTileIndex].setType('STAR');
    this.tiles.forEach((t) => this.islandGroup.add(t.group));
  }

  // ゲーム開始時に、固定キャラへ偏らない位置へスターを置く。
  placeStarForPlayers(chars) {
    return this.moveStar(chars);
  }

  // いま盤面に出ているマスのならび。しままわし(W-07)で回した ぶんを反映する。
  // buildTileLayout は いつも回転前の並びを返すので、moveStar はこちらを使う。
  currentLayout() {
    // ===== Phase 5 / 5a ここから ===== 🎇 aurora と 🫧 shrink が置いた「いまの並び」
    if (this._layoutOverride) return this._layoutOverride.slice();
    // ===== Phase 5 / 5a ここまで =====
    const n = this.tileCount;
    const layout = buildTileLayout(n);
    if (!this.boardOffset) return layout;
    const out = new Array(n);
    for (let i = 0; i < n; i++) out[i] = layout[rotateTileIndex(i, this.boardOffset, n)];
    return out;
  }

  // スター数が少ない子の数ターン先へおひっこしする。
  moveStar(chars) {
    const layout = this.currentLayout();
    const old = this.tiles[this.starTileIndex];
    old.setType(layout[old.index]);
    const next = chooseStarTile(layout, chars, this.starTileIndex, rand, {
      minForward: CONFIG.STAR_MIN_FORWARD,
      maxForward: CONFIG.STAR_MAX_FORWARD,
    });
    this.starTileIndex = next;
    this.tiles[next].setType('STAR');
    return this.tiles[next];
  }

  /**
   * 🎠 ぐるぐる しままわし。マスの3D位置は動かさず、
   * タイプとアイコンだけを offset ぶん となりへ移す(再生成だけで軽い)。
   *
   * 見た目の回転は islandGroup.rotation.y = -offset * TAU / count である
   * (three.js の Y 回転は 点の極角 atan2(z,x) を -φ 動かすため)。
   * ここでタイプを移したら、見た目の回転は 0 へ戻す。
   *
   * キャラの tileIndex は変えない。キャラは動いておらず、
   * 足元のマスの種類だけが変わったからである。スターの位置も同じだけずらす。
   */
  rotateBoard(offset) {
    const n = this.tileCount;
    // 🎇 aurora が置いた上書きは捨てる。あとから来たほうが盤面を決める(設計書 9.6 の結論1)。
    this._layoutOverride = null;
    this.boardOffset = (((this.boardOffset || 0) + offset) % n + n) % n;
    const next = this.currentLayout();
    this.starTileIndex = ((this.starTileIndex + offset) % n + n) % n;
    next[this.starTileIndex] = 'STAR';
    for (let i = 0; i < n; i++) this.tiles[i].setType(next[i]);
    this.islandGroup.rotation.y = 0;   // 見た目の回転は戻す(タイプが移ったので不要)
  }

  // ===== Phase 5 / 5a ここから =====

  /**
   * 🎇 盤面の種別を まるごと差し替える(W-13 オーロラ)。
   * `null` を渡すと上書きを捨てて、もとの自然な並びへ戻す(ExecPlan Decision Log #2)。
   * ⭐ のマスだけは動かさない(忘れると reachedStar が永久に偽になる。設計書 9.12 #7)。
   *
   * @param {string[]|null} nextTypes 長さは tileCount と一致すること
   */
  repaintBoard(nextTypes) {
    if (!nextTypes) this._layoutOverride = null;
    const n = this.tileCount;
    const next = (nextTypes ? nextTypes.slice(0, n) : this.currentLayout().slice(0, n));
    // _layoutOverride は buildTileLayout と同じ「素の並び」を持つ('STAR' を入れない)。
    // moveStar が old.setType(layout[old.index]) で もとの型へ戻せなくなるためである。
    if (nextTypes) this._layoutOverride = next.slice();
    for (let i = 0; i < n; i++) this.tiles[i].setType(next[i]);
    this.tiles[this.starTileIndex].setType('STAR');
  }

  /**
   * 🫧 奇数マスを沈めて、偶数マスだけの24マス盤にする(W-19 ちっちゃく)。
   * `this.tiles` の長さが変わるので `world.tileCount` が 24 を返すようになる。
   * 沈める Tile は **dispose しない**。`islandGroup` から外して控えておくだけである
   * (設計書 9.12 #4。`_own()` に渡してはならない)。
   *
   * @param {number} [keepEvery=2]
   * @returns {number[]} 残したマスの もとの index(昇順・長さ 24)
   */
  shrinkBoard(keepEvery = 2) {
    const step = Math.max(1, Math.trunc(Number(keepEvery) || 2));
    const before = this.currentLayout();
    const keep = [];
    for (let i = 0; i < this.tiles.length; i += step) keep.push(i);
    const keepSet = new Set(keep);
    this._shrinkBackup = {
      layout: before, star: this.starTileIndex, offset: this.boardOffset,
      tiles: this.tiles.slice(), keep,
    };

    const next = shrinkLayout(before, step);
    for (const t of this.tiles) if (!keepSet.has(t.index)) this.islandGroup.remove(t.group);
    this.tiles = keep.map((src, i) => {
      const t = this._shrinkBackup.tiles[src];
      t.index = i;
      return t;
    });
    this._layoutOverride = next.slice();
    this.starTileIndex = remapTileIndex(this._shrinkBackup.star, keep, this.tiles.length);
    this.boardOffset = 0;                      // 24マス系では意味が変わるので捨てる
    for (let i = 0; i < this.tiles.length; i++) this.tiles[i].setType(next[i]);
    this.tiles[this.starTileIndex].setType('STAR');
    this.refreshAnchors({ tiles: true });
    return keep;
  }

  /** 🫧 48マス盤へ もどす。`shrinkBoard` の逆。戻り値は keep(呼び出し側の remap 用)。 */
  restoreBoard() {
    const b = this._shrinkBackup;
    if (!b) return null;
    this._shrinkBackup = null;
    this.tiles = b.tiles;
    this.tiles.forEach((t, i) => {
      t.index = i;
      if (!t.group.parent) this.islandGroup.add(t.group);
    });
    this._layoutOverride = null;
    this.starTileIndex = b.star;
    this.boardOffset = b.offset;
    const layout = this.currentLayout();
    for (let i = 0; i < this.tiles.length; i++) this.tiles[i].setType(layout[i]);
    this.tiles[this.starTileIndex].setType('STAR');
    this.refreshAnchors({ tiles: true });
    return b.keep;
  }

  // ===== Phase 5 / 5a ここまで =====

  _buildCenterTower() {
    // 島の中心に立つ「おほしさまタワー」
    const g = new THREE.Group();
    const baseY = islandHeight(0, 0);
    g.position.set(0, baseY, 0);

    const steps = [2.6, 2.0, 1.4];
    steps.forEach((r, i) => {
      const step = new THREE.Mesh(
        new THREE.CylinderGeometry(r, r + 0.25, 0.36, 26),
        toonMat(i % 2 === 0 ? 0xffe9f0 : 0xfff8dc),
      );
      step.position.y = 0.18 + i * 0.36;
      step.receiveShadow = true;
      step.castShadow = true;
      g.add(step);
    });

    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.3, 4.4, 12),
      toonMat(0xff9dbe),
    );
    pole.position.y = 1.1 + 2.2;
    pole.castShadow = true;
    g.add(pole);

    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(1.7, 1.2, 12),
      toonMat(0xff6f9c),
    );
    roof.position.y = 5.0;
    roof.castShadow = true;
    g.add(roof);

    this.bigStar = new THREE.Mesh(
      starGeometry(1.15, 0.55, 0.4),
      toonMatUnique(0xffe066, { emissive: 0xffb300, emissiveIntensity: 0.45 }),
    );
    this.bigStar.position.y = 6.6;
    this.bigStar.castShadow = true;
    g.add(this.bigStar);

    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU;
      const flag = new THREE.Mesh(
        new THREE.ConeGeometry(0.16, 0.5, 6),
        toonMat([0xff5c8d, 0x4da3ff, 0xffc93e, 0x43c04e, 0xb06ce0, 0xff9d3c][i]),
      );
      flag.position.set(Math.cos(a) * 2.0, 4.35, Math.sin(a) * 2.0);
      flag.rotation.z = Math.PI;
      g.add(flag);
    }

    this.islandGroup.add(g);
    this._anchorDecor(g, 0, 0);
    this.tower = g;
  }

  _addTree(x, z, kind = 'green', scale = 1) {
    const g = new THREE.Group();
    const y = islandHeight(x, z);
    if (y < 0.5) return;
    g.position.set(x, y, z);
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.24, 1.1, 8),
      toonMat(0x9c6b3f),
    );
    trunk.position.y = 0.55;
    trunk.castShadow = true;
    g.add(trunk);
    const cols = kind === 'pink'
      ? [0xffb7d0, 0xffa2c2, 0xffcadd]
      : kind === 'deep'
        ? [0x2f8f3f, 0x3da34c, 0x27803a]
        : [0x51b84a, 0x66cc55, 0x459e3f];
    const blobs = [
      [0, 1.5, 0, 0.75], [0.45, 1.25, 0.15, 0.5], [-0.4, 1.3, -0.1, 0.55],
    ];
    blobs.forEach(([bx, by, bz, r], i) => {
      const blob = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 12), toonMat(cols[i % cols.length]));
      blob.position.set(bx, by, bz);
      blob.castShadow = true;
      g.add(blob);
    });
    g.scale.setScalar((0.8 + Math.random() * 0.7) * scale);
    g.rotation.y = Math.random() * TAU;
    this.islandGroup.add(g);
    this._anchorDecor(g, x, z);
  }

  _addPalm(x, z) {
    const y = islandHeight(x, z);
    if (y < 0.4) return;
    const g = new THREE.Group();
    g.position.set(x, y, z);
    // ちょっと曲がった幹
    let px = 0, py = 0;
    for (let i = 0; i < 4; i++) {
      const seg = new THREE.Mesh(new THREE.CylinderGeometry(0.14 - i * 0.015, 0.17 - i * 0.015, 0.7, 8), toonMat(0xb08a56));
      px += i * 0.07;
      py += 0.62;
      seg.position.set(px, py, 0);
      seg.rotation.z = -0.12 * i;
      seg.castShadow = true;
      g.add(seg);
    }
    // はっぱ
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU;
      const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.55, 10, 6), toonMat(0x3fae4e));
      leaf.scale.set(1.5, 0.16, 0.5);
      leaf.position.set(px + Math.cos(a) * 0.75, py + 0.4, Math.sin(a) * 0.75);
      leaf.rotation.y = -a;
      leaf.rotation.z = 0.35;
      leaf.castShadow = true;
      g.add(leaf);
    }
    // ココナッツ
    for (let i = 0; i < 3; i++) {
      const nut = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), toonMat(0x7a5a34));
      nut.position.set(px + (i - 1) * 0.2, py + 0.15, 0.15);
      g.add(nut);
    }
    g.rotation.y = Math.random() * TAU;
    this.islandGroup.add(g);
    this._anchorDecor(g, x, z);
  }

  _buildDecorations() {
    // お花(タイル帯とゾーン装飾を避けて散らす)
    const flowerGeo = new THREE.SphereGeometry(0.11, 8, 6);
    const flowers = new THREE.InstancedMesh(flowerGeo, toonMat(0xffffff), 170);
    const dummy = new THREE.Object3D();
    const fCols = [0xff8fb5, 0xffe45c, 0xffffff, 0xc19bff, 0xff9d5c];
    let placed = 0;
    let guard = 0;
    while (placed < 170 && guard++ < 1400) {
      const a = Math.random() * TAU;
      const r = 5 + Math.random() * 21;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const y = islandHeight(x, z);
      if (y < 0.55) continue;
      const rr = Math.hypot(x, z);
      if (rr > 14.2 && rr < 19.0) continue; // タイルの帯は避ける
      dummy.position.set(x, y + 0.06, z);
      dummy.scale.setScalar(0.7 + Math.random() * 0.9);
      dummy.updateMatrix();
      flowers.setMatrixAt(placed, dummy.matrix);
      flowers.setColorAt(placed, new THREE.Color(fCols[placed % fCols.length]));
      placed++;
    }
    flowers.count = placed;
    flowers.instanceMatrix.needsUpdate = true;
    if (flowers.instanceColor) flowers.instanceColor.needsUpdate = true;
    this.islandGroup.add(flowers);

    // 虹のアーチ(あめあがりに大きくなる)
    this.rainbowGroup = new THREE.Group();
    const rCols = [0xff5c5c, 0xffb03c, 0xffe45c, 0x6fdd6f, 0x5cb8ff, 0xb06ce0];
    rCols.forEach((c, i) => {
      const arc = new THREE.Mesh(
        new THREE.TorusGeometry(11 - i * 0.55, 0.3, 8, 40, Math.PI),
        new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.82, fog: false }),
      );
      this.rainbowGroup.add(arc);
    });
    this.rainbowGroup.position.set(-34, 2, -26);
    this.rainbowGroup.rotation.y = Math.PI / 3.4;
    this.scene.add(this.rainbowGroup);

    // ふわふわ気球(遠景)
    this.balloons = [];
    const bCols = [0xff5c8d, 0xffc93e, 0x4da3ff, 0x43c04e];
    for (let i = 0; i < 4; i++) {
      const b = new THREE.Group();
      const env = new THREE.Mesh(new THREE.SphereGeometry(1.6, 16, 14), toonMat(bCols[i]));
      env.scale.y = 1.15;
      const stripe = new THREE.Mesh(new THREE.SphereGeometry(1.62, 16, 14, 0, TAU, 1.1, 0.5), toonMat(0xfff8dc));
      stripe.scale.y = 1.15;
      const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.34, 0.5, 8), toonMat(0xb0803f));
      basket.position.y = -2.35;
      b.add(env, stripe, basket);
      const a = (i / 4) * TAU + 0.8;
      b.position.set(Math.cos(a) * 46, 12 + i * 3, Math.sin(a) * 46);
      b.userData = { baseY: b.position.y, phase: i * 1.7, speed: 0.12 + i * 0.03, angle: a, radius: 46 };
      this.scene.add(b);
      this.balloons.push(b);
    }

    // 雲(天気で色が変わるよう専用マテリアル)
    this.cloudMat = toonMatUnique(0xffffff);
    this.clouds = [];
    for (let i = 0; i < 10; i++) {
      const cloud = new THREE.Group();
      const n = 3 + Math.floor(Math.random() * 3);
      for (let k = 0; k < n; k++) {
        const puff = new THREE.Mesh(
          new THREE.SphereGeometry(1.6 + Math.random() * 1.8, 12, 10),
          this.cloudMat,
        );
        puff.position.set(k * 2.0 - n, Math.random() * 0.8, (Math.random() - 0.5) * 1.6);
        puff.scale.y = 0.62;
        cloud.add(puff);
      }
      const a = (i / 10) * TAU;
      const r = 58 + Math.random() * 50;
      cloud.position.set(Math.cos(a) * r, 18 + Math.random() * 16, Math.sin(a) * r);
      cloud.userData = { angle: a, radius: r, speed: 0.008 + Math.random() * 0.012, y: cloud.position.y };
      this.scene.add(cloud);
      this.clouds.push(cloud);
    }

    // ちょうちょ
    this.butterflies = [];
    for (let i = 0; i < 6; i++) {
      const fly = new THREE.Group();
      const wingGeo = new THREE.CircleGeometry(0.22, 10);
      const wMat = toonMat([0xffc93e, 0xff8fb5, 0x9bd4ff][i % 3], { side: THREE.DoubleSide });
      const w1 = new THREE.Mesh(wingGeo, wMat);
      const w2 = new THREE.Mesh(wingGeo, wMat);
      w1.position.x = -0.14; w2.position.x = 0.14;
      const wl = new THREE.Group(); wl.add(w1);
      const wr = new THREE.Group(); wr.add(w2);
      fly.add(wl, wr);
      fly.userData = {
        wl, wr, phase: i * 2.2,
        cx: (Math.random() - 0.5) * 24, cz: (Math.random() - 0.5) * 24,
        r: 2.5 + Math.random() * 4, h: 2.2 + Math.random() * 2, speed: 0.4 + Math.random() * 0.4,
      };
      this.islandGroup.add(fly);
      this.butterflies.push(fly);
    }
  }

  // ゾーンごとの見どころ
  _buildZoneDecorations() {
    // 🏖️ はまべ:ヤシのき・パラソル・かいがら・ビーチボール
    const beachA = ZONE_CENTERS[0];
    for (let i = 0; i < 4; i++) {
      const a = beachA + (i - 1.5) * 0.22;
      const r = 11 + (i % 2) * 2;
      this._addPalm(Math.cos(a) * r, Math.sin(a) * r);
    }
    {
      const a = beachA - 0.28, r = 21.5;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const y = Math.max(islandHeight(x, z), 0.2);
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.2, 8), toonMat(0xffffff));
      pole.position.set(x, y + 1.1, z);
      const shade = new THREE.Mesh(new THREE.ConeGeometry(1.5, 0.6, 10), toonMat(0xff6f9c));
      shade.position.set(x, y + 2.2, z);
      this.islandGroup.add(pole, shade);
      this._anchorDecor(pole, x, z);
      this._anchorDecor(shade, x, z);
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.45, 12, 10), toonMat(0xff5c5c));
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.46, 12, 10, 0, TAU, 0, 0.8), toonMat(0xffffff));
      ball.position.set(x + 1.6, y + 0.45, z + 0.6);
      cap.position.copy(ball.position);
      this.islandGroup.add(ball, cap);
      this._anchorDecor(ball, ball.position.x, ball.position.z);
      this._anchorDecor(cap, cap.position.x, cap.position.z);
    }
    for (let i = 0; i < 6; i++) {
      const a = beachA + (Math.random() - 0.5) * 0.7;
      const r = 20 + Math.random() * 3;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const y = islandHeight(x, z);
      if (y < 0.15) continue;
      const shell = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), toonMat(0xfff0e0));
      shell.scale.set(1.2, 0.5, 1);
      shell.position.set(x, y + 0.06, z);
      this.islandGroup.add(shell);
      this._anchorDecor(shell, x, z);
    }

    // 🌴 ジャングル:みっしりした木・おおきな葉っぱ・いせき
    const jungleA = ZONE_CENTERS[1];
    for (let i = 0; i < 9; i++) {
      const a = jungleA + (Math.random() - 0.5) * 1.0;
      const r = 8 + Math.random() * 4.5;
      this._addTree(Math.cos(a) * r, Math.sin(a) * r, i % 3 === 2 ? 'green' : 'deep', 1.25);
    }
    for (let i = 0; i < 4; i++) {
      const a = jungleA + (Math.random() - 0.5) * 0.9;
      const r = 20.5 + Math.random() * 3;
      this._addTree(Math.cos(a) * r, Math.sin(a) * r, 'deep', 1.1);
    }
    {
      const a = jungleA + 0.3, r = 22.5;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const y = islandHeight(x, z);
      if (y > 0.3) {
        [[0, 0.5, 1.3], [0, 1.3, 0.9], [0.1, 1.9, 0.55]].forEach(([ox, oy, s]) => {
          const stone = new THREE.Mesh(new THREE.BoxGeometry(s, 0.7, s), toonMat(0x9aa88f));
          stone.position.set(x + ox, y + oy, z);
          stone.rotation.y = oy;
          stone.castShadow = true;
          this.islandGroup.add(stone);
          this._anchorDecor(stone, x + ox, z);
        });
      }
    }

    // 🌋 かざん:よこの岩・ようがん・けむり
    const vTop = volcanoTop();
    this.lavaMat = toonMatUnique(0xff8a3c, { emissive: 0xff5a00, emissiveIntensity: 0.9 });
    const lava = new THREE.Mesh(new THREE.CircleGeometry(1.35, 20), this.lavaMat);
    lava.rotation.x = -Math.PI / 2;
    lava.position.set(vTop.x, vTop.y + 0.15, vTop.z);
    this.islandGroup.add(lava);
    this._anchorDecor(lava, vTop.x, vTop.z);
    this.lavaPos = lava.position.clone();
    for (let i = 0; i < 7; i++) {
      const a = ZONE_CENTERS[2] + (Math.random() - 0.5) * 0.9;
      const r = 12 + Math.random() * 8;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const y = islandHeight(x, z);
      if (y < 0.5) continue;
      const rock = new THREE.Mesh(new THREE.ConeGeometry(0.5 + Math.random() * 0.5, 1 + Math.random() * 1.4, 6), toonMat(0x6b5f55));
      rock.position.set(x, y + 0.3, z);
      rock.rotation.y = Math.random() * TAU;
      rock.castShadow = true;
      this.islandGroup.add(rock);
      this._anchorDecor(rock, x, z);
    }
    // けむり(ループするスプライト)
    this.smokes = [];
    for (let i = 0; i < 3; i++) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTexture(), color: 0xdcd6d0, transparent: true, opacity: 0.32, depthWrite: false,
      }));
      sp.userData = { phase: i / 3 };
      this.islandGroup.add(sp);
      this.smokes.push(sp);
    }
    // 火の粉
    this.embers = [];
    for (let i = 0; i < 5; i++) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTexture(), color: 0xffa03c, transparent: true, depthWrite: false,
        blending: THREE.AdditiveBlending,
      }));
      sp.userData = { phase: Math.random() };
      sp.scale.setScalar(0.5);
      this.islandGroup.add(sp);
      this.embers.push(sp);
    }

    // 🎡 ゆうえんち:かんらんしゃ・テント
    const parkA = ZONE_CENTERS[3];
    {
      const a = parkA, r = 24;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const y = Math.max(islandHeight(x, z), 0.4);
      this.ferris = new THREE.Group();
      this.ferris.position.set(x, y, z);
      this.ferris.lookAt(0, y, 0);
      const wheel = new THREE.Group();
      wheel.position.y = 5.2;
      const ringM = new THREE.Mesh(new THREE.TorusGeometry(4.2, 0.14, 8, 36), toonMat(0xff8fb5));
      wheel.add(ringM);
      const cabCols = [0xff5c5c, 0xffb03c, 0xffe45c, 0x6fdd6f, 0x5cb8ff, 0xb06ce0, 0xff8fb5, 0x4fd0c0];
      this.ferrisCabins = [];
      for (let i = 0; i < 8; i++) {
        const a2 = (i / 8) * TAU;
        const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 4.2, 6), toonMat(0xffffff));
        spoke.position.set(Math.cos(a2) * 2.1, Math.sin(a2) * 2.1, 0);
        spoke.rotation.z = a2 + Math.PI / 2;
        wheel.add(spoke);
      }
      this.ferrisWheel = wheel;
      this.ferris.add(wheel);
      // ゴンドラは回らないホルダーに置き、絶対角度で位置だけ回す
      const cabinHolder = new THREE.Group();
      cabinHolder.position.y = 5.2;
      for (let i = 0; i < 8; i++) {
        const cab = new THREE.Mesh(new THREE.SphereGeometry(0.45, 10, 8), toonMat(cabCols[i]));
        cab.userData = { angle: (i / 8) * TAU };
        cabinHolder.add(cab);
        this.ferrisCabins.push(cab);
      }
      this.ferris.add(cabinHolder);
      // あし
      [-1, 1].forEach((s) => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 5.6, 8), toonMat(0xffffff));
        leg.position.set(s * 1.3, 2.6, 0);
        leg.rotation.z = s * 0.24;
        this.ferris.add(leg);
      });
      this.islandGroup.add(this.ferris);
      this._anchorDecor(this.ferris, x, z);
    }
    for (let i = 0; i < 2; i++) {
      const a = parkA + (i === 0 ? -0.32 : 0.34);
      const r = 12.5;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const y = islandHeight(x, z);
      const tent = new THREE.Mesh(new THREE.ConeGeometry(1.6, 1.7, 10), toonMat(i === 0 ? 0xff6f9c : 0x5cb8ff));
      tent.position.set(x, y + 0.85, z);
      tent.castShadow = true;
      const flagPole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.7, 6), toonMat(0xffffff));
      flagPole.position.set(x, y + 2.0, z);
      this.islandGroup.add(tent, flagPole);
      this._anchorDecor(tent, x, z);
      this._anchorDecor(flagPole, x, z);
    }
  }

  _buildPrecipitation() {
    // スコールの雨(インスタンスの細長い棒)
    const geo = new THREE.BoxGeometry(0.035, 0.8, 0.035);
    const mat = new THREE.MeshBasicMaterial({ color: 0xbdd8f5, transparent: true, opacity: 0.55 });
    this.rain = new THREE.InstancedMesh(geo, mat, 240);
    this.rain.frustumCulled = false;
    this.rainDrops = [];
    const dummy = new THREE.Object3D();
    for (let i = 0; i < 240; i++) {
      const a = Math.random() * TAU;
      const r = Math.sqrt(Math.random()) * 34;
      this.rainDrops.push({
        x: Math.cos(a) * r, z: Math.sin(a) * r,
        y: Math.random() * 22, speed: 16 + Math.random() * 6,
      });
      dummy.position.set(0, -999, 0);
      dummy.updateMatrix();
      this.rain.setMatrixAt(i, dummy.matrix);
    }
    this.rain.visible = false;
    this.scene.add(this.rain);
    this._rainDummy = dummy;

    // こおった日の雪(白い小さな板。雨の1/4の速さで左右にゆれながら落ちる)
    const snowGeo = new THREE.PlaneGeometry(0.14, 0.14);
    const snowMat = new THREE.MeshBasicMaterial({
      color: 0xffffff, transparent: true, opacity: 0.85, side: THREE.DoubleSide,
    });
    this.snow = new THREE.InstancedMesh(snowGeo, snowMat, 200);
    this.snow.frustumCulled = false;
    this.snowFlakes = [];
    for (let i = 0; i < 200; i++) {
      const a = Math.random() * TAU;
      const r = Math.sqrt(Math.random()) * 34;
      this.snowFlakes.push({
        x: Math.cos(a) * r, z: Math.sin(a) * r,
        y: Math.random() * 22, speed: 16 + Math.random() * 6,
      });
      dummy.position.set(0, -999, 0);
      dummy.updateMatrix();
      this.snow.setMatrixAt(i, dummy.matrix);
    }
    this.snow.visible = false;
    this.scene.add(this.snow);
  }

  _updateWeather(dt) {
    const t = this.weatherTarget;
    const k = Math.min(1, dt * 1.2);
    const u = this.skyMat.uniforms;
    u.topColor.value.lerp(new THREE.Color(t.top), k);
    u.midColor.value.lerp(new THREE.Color(t.mid), k);
    u.botColor.value.lerp(new THREE.Color(t.bot), k);
    this.scene.fog.color.lerp(new THREE.Color(t.fog), k);
    this.sunLight.intensity += (t.sun - this.sunLight.intensity) * k;
    this.sunLight.color.lerp(new THREE.Color(t.sunCol), k);
    this.hemi.intensity += (t.hemi - this.hemi.intensity) * k;
    this.cloudMat.color.lerp(new THREE.Color(t.cloud), k);

    // きりの濃さ(天気が near/far を持たないときは既定の 120/300 に落ちつく)
    const far = t.far ?? 300;
    const near = t.near ?? 120;
    this.scene.fog.far += (far - this.scene.fog.far) * k;
    this.scene.fog.near += (near - this.scene.fog.near) * k;

    // 虹はあめあがりに大きく・くっきり
    const rbTarget = t.rainbow;
    this.rainbowGroup.children.forEach((arc) => {
      arc.material.opacity += (rbTarget * 0.85 - arc.material.opacity) * k;
    });
    const s = 1 + (rbTarget > 0.5 ? 0.55 : 0);
    this.rainbowGroup.scale.lerp(new THREE.Vector3(s, s, s), k);

    // 雨と雪(rain は false | 'rain' | 'snow' の3値。きびしく比較する)
    const kind = t.rain;
    this.rain.visible = kind === 'rain';
    this.snow.visible = kind === 'snow';
    if (kind === 'rain') {
      for (let i = 0; i < this.rainDrops.length; i++) {
        const d = this.rainDrops[i];
        d.y -= d.speed * dt;
        if (d.y < 0) d.y = 20 + Math.random() * 4;
        this._rainDummy.position.set(d.x, d.y, d.z);
        this._rainDummy.updateMatrix();
        this.rain.setMatrixAt(i, this._rainDummy.matrix);
      }
      this.rain.instanceMatrix.needsUpdate = true;
    }
    if (kind === 'snow') {
      for (let i = 0; i < this.snowFlakes.length; i++) {
        const d = this.snowFlakes[i];
        d.y -= d.speed * 0.25 * dt;
        d.x += Math.sin(this.time + d.z) * 0.4 * dt;
        if (d.y < 0) d.y = 20 + Math.random() * 4;
        this._rainDummy.position.set(d.x, d.y, d.z);
        this._rainDummy.updateMatrix();
        this.snow.setMatrixAt(i, this._rainDummy.matrix);
      }
      this.snow.instanceMatrix.needsUpdate = true;
    }
  }

  update(dt) {
    this.time += dt;
    const t = this.time;
    this.seaMat.uniforms.time.value = t;

    this.tiles.forEach((tile) => tile.update(t));
    this._updateWeather(dt);
    this.rides.update(dt, t);

    // 中央タワーの星
    this.bigStar.rotation.y = t * 0.8;
    this.bigStar.position.y = 6.6 + Math.sin(t * 1.4) * 0.18;

    // 波リング
    this.foamRings.forEach((r, i) => {
      const s = 1 + Math.sin(t * 1.4 + i * 1.5) * 0.012;
      r.scale.setScalar(s);
      r.material.opacity = (i === 0 ? 0.5 : 0.28) * (0.75 + Math.sin(t * 1.4 + i) * 0.25);
    });

    // 気球
    this.balloons.forEach((b) => {
      const u = b.userData;
      u.angle += u.speed * dt * 0.2;
      b.position.x = Math.cos(u.angle) * u.radius;
      b.position.z = Math.sin(u.angle) * u.radius;
      b.position.y = u.baseY + Math.sin(t * 0.7 + u.phase) * 1.2;
    });

    // 雲
    this.clouds.forEach((c) => {
      const u = c.userData;
      u.angle += u.speed * dt;
      c.position.x = Math.cos(u.angle) * u.radius;
      c.position.z = Math.sin(u.angle) * u.radius;
    });

    // ちょうちょ
    this.butterflies.forEach((f) => {
      const u = f.userData;
      const a = t * u.speed + u.phase;
      const x = u.cx + Math.cos(a) * u.r;
      const z = u.cz + Math.sin(a * 1.3) * u.r;
      const y = Math.max(islandHeight(x, z), 0.4) + u.h + Math.sin(t * 2 + u.phase) * 0.4;
      f.position.set(x, y, z);
      f.rotation.y = -a;
      const flap = Math.sin(t * 14 + u.phase) * 0.9;
      u.wl.rotation.y = flap;
      u.wr.rotation.y = -flap;
    });

    // かざんのけむりと火の粉
    // ===== Phase 5 / 5b ここから =====
    // boost は 🌋 だいふんか(W-09)だけが 1 より大きくする。既定 1 では従来と同じ式である。
    const boost = this.volcanoBoost || 1;
    // ===== Phase 5 / 5b ここまで =====
    this.smokes.forEach((sp) => {
      const p = (t * 0.12 * boost + sp.userData.phase) % 1;
      sp.position.set(
        this.lavaPos.x + Math.sin(p * 9) * 0.6 * boost,
        this.lavaPos.y + p * 6 * boost,
        this.lavaPos.z,
      );
      sp.scale.setScalar((1.2 + p * 3.2) * boost);
      sp.material.opacity = 0.3 * (1 - p);
    });
    this.embers.forEach((sp) => {
      const p = (t * 0.5 * boost + sp.userData.phase) % 1;
      sp.position.set(
        this.lavaPos.x + Math.sin(p * 20 + sp.userData.phase * 9) * 1.2 * boost,
        this.lavaPos.y + p * 3.4 * boost,
        this.lavaPos.z + Math.cos(p * 16) * 1.2 * boost,
      );
      sp.scale.setScalar(0.5 * boost);
      sp.material.opacity = (1 - p) * 0.9;
    });
    this.lavaMat.emissiveIntensity = 0.8 + Math.sin(t * 3.3) * 0.25;

    // かんらんしゃ
    if (this.ferrisWheel) {
      this.ferrisWheel.rotation.z = t * 0.24;
      this.ferrisCabins.forEach((cab) => {
        const a = cab.userData.angle + t * 0.24;
        cab.position.set(Math.cos(a) * 4.2, Math.sin(a) * 4.2, 0);
      });
    }
  }
}
