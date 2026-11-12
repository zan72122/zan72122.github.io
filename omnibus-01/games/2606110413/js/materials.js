import * as THREE from 'three';
import { CONFIG } from './config.js';

const C = CONFIG.colors;

// 飴のツヤ(clearcoat)を持つキャンディ質感
function candy(color, opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.28,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
    envMapIntensity: 0.7,
    ...opts,
  });
}

export function createMaterials(T) {
  return {
    candyPink: candy(C.pink),
    candyMint: candy(C.mint),
    candyLemon: candy(C.lemon),
    candySky: candy(C.sky),
    candyLavender: candy(C.lavender),
    cream: candy(C.cream, { roughness: 0.45, clearcoat: 0.6 }),
    chocolate: candy(C.chocolate, { roughness: 0.38, clearcoat: 0.8 }),
    cherry: candy(C.cherry, { clearcoatRoughness: 0.05, roughness: 0.15 }),
    stick: candy(C.white, { roughness: 0.4 }),
    gold: candy(C.gold, {
      emissive: 0xffaa00,
      emissiveIntensity: 0.55,
      roughness: 0.18,
      metalness: 0.4,
    }),
    // 頂点カラーで塗り分けたお菓子(マージ用の共有マテリアル)
    vertexCandy: candy(0xffffff, { vertexColors: true }),
    vertexCandyMatte: candy(0xffffff, { vertexColors: true, roughness: 0.5, clearcoat: 0.4 }),

    cookie: new THREE.MeshStandardMaterial({ map: T.cookie, roughness: 0.75 }),
    swirlPink: candy(0xffffff, { map: T.swirlPink }),
    swirlMint: candy(0xffffff, { map: T.swirlMint }),
    swirlGrape: candy(0xffffff, { map: T.swirlGrape }),
    stripesRed: candy(0xffffff, { map: T.stripesRed }),
    stripesMint: candy(0xffffff, { map: T.stripesMint }),
    awning: new THREE.MeshStandardMaterial({ map: T.stripesAwning, roughness: 0.6 }),
    ground: new THREE.MeshStandardMaterial({ map: T.ground, roughness: 0.85 }),
  };
}

// 色付きパーツ群を 1 つの頂点カラー BufferGeometry にマージする。
// parts: [{ geo, color, matrix? }] — geo は使い捨て(内部で dispose する)
// opts.uv: true でUVもコピーする(テクスチャ付きマテリアル用)
export function mergeColored(parts, opts = {}) {
  const positions = [];
  const normals = [];
  const colors = [];
  const uvs = [];
  const col = new THREE.Color();
  for (const part of parts) {
    const geo = part.geo.toNonIndexed();
    if (part.matrix) geo.applyMatrix4(part.matrix);
    col.set(part.color !== undefined ? part.color : 0xffffff);
    const pos = geo.getAttribute('position');
    const nor = geo.getAttribute('normal');
    const uv = geo.getAttribute('uv');
    for (let i = 0; i < pos.count; i++) {
      positions.push(pos.getX(i), pos.getY(i), pos.getZ(i));
      normals.push(nor.getX(i), nor.getY(i), nor.getZ(i));
      colors.push(col.r, col.g, col.b);
      if (opts.uv) uvs.push(uv ? uv.getX(i) : 0, uv ? uv.getY(i) : 0);
    }
    geo.dispose();
    part.geo.dispose();
  }
  const merged = new THREE.BufferGeometry();
  merged.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  merged.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  merged.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  if (opts.uv) merged.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  return merged;
}

// 行列を作るための短縮ヘルパー
export function mat4(x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s = 1, sy, sz) {
  const m = new THREE.Matrix4();
  m.compose(
    new THREE.Vector3(x, y, z),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)),
    new THREE.Vector3(s, sy === undefined ? s : sy, sz === undefined ? s : sz)
  );
  return m;
}
