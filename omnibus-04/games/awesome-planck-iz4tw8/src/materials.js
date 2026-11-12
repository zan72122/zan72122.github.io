// Shared PBR materials built from the procedural textures.
import * as THREE from 'three';
import { T } from './textures.js';

export const M = {};
const cache = new Map();

function std(opts) { return new THREE.MeshStandardMaterial(opts); }

// a textured material with world-scale repeat baked in via a clone of the texture
export function texMat(key, tex, repeat, opts = {}) {
  const k = key + ':' + repeat.join(',') + ':' + JSON.stringify(opts);
  if (cache.has(k)) return cache.get(k);
  const map = tex.map ? tex.map.clone() : null;
  const nm = tex.normalMap ? tex.normalMap.clone() : null;
  if (map) { map.repeat.set(repeat[0], repeat[1]); map.needsUpdate = true; }
  if (nm) { nm.repeat.set(repeat[0], repeat[1]); nm.needsUpdate = true; }
  const m = std({ map, normalMap: nm, ...opts });
  if (nm && opts.normalScale === undefined) m.normalScale = new THREE.Vector2(0.6, 0.6);
  cache.set(k, m);
  return m;
}

export function color(hex, rough = 0.8, metal = 0, extra = {}) {
  const k = 'c:' + hex + ':' + rough + ':' + metal + JSON.stringify(extra);
  if (cache.has(k)) return cache.get(k);
  const m = std({ color: hex, roughness: rough, metalness: metal, ...extra });
  cache.set(k, m);
  return m;
}

export function fabric(kind, ...args) {
  const k = 'f:' + kind + JSON.stringify(args);
  if (cache.has(k)) return cache.get(k);
  const t = T.fabric[kind](...args);
  const m = new THREE.MeshStandardMaterial({ map: t.map, normalMap: t.normalMap, roughness: 0.92, metalness: 0, side: THREE.DoubleSide });
  m.normalScale = new THREE.Vector2(0.4, 0.4);
  // representative colour (used when a fabric is baked into vertex colours)
  const a = args[0], b = Array.isArray(args[1]) ? args[1] : a;
  const mix = kind === 'plain' ? a : kind === 'dots' ? b : a.map((v, i) => (v * 0.6 + b[i] * 0.4));
  m.userData.base = new THREE.Color().setRGB(mix[0] / 255, mix[1] / 255, mix[2] / 255, THREE.SRGBColorSpace);
  cache.set(k, m);
  return m;
}

export function buildMaterials() {
  M.asphalt = texMat('asphalt', T.asphalt, [1, 1], { roughness: 0.93, color: 0xffffff });
  M.concrete = texMat('concrete', T.concrete, [1, 1], { roughness: 0.9 });
  M.block = texMat('block', T.block, [1, 1], { roughness: 0.92, color: 0xd8d4cc });
  M.aluminum = color(0xb9bdc0, 0.35, 0.8);
  M.darkAlu = color(0x3a3b3d, 0.4, 0.7);
  M.white = color(0xf1f0ec, 0.6);
  M.black = color(0x1c1c1e, 0.6);
  M.rubber = color(0x151515, 0.9);
  M.pole = texMat('pole', T.concrete, [1, 3], { roughness: 0.85, color: 0xb8b6ae });
  M.wire = color(0x151515, 0.6, 0.2);
  M.glass = new THREE.MeshStandardMaterial({ color: 0x8fa3ae, roughness: 0.03, metalness: 0.0, transparent: true, opacity: 0.1, envMapIntensity: 1.2, depthWrite: false });
  M.glassFrost = new THREE.MeshStandardMaterial({ color: 0xdfe6ea, roughness: 0.35, metalness: 0.1, transparent: true, opacity: 0.75 });
  M.interiorDark = color(0x2a2724, 0.9);
  M.cardboard = texMat('cardboard', T.cardboard, [1, 1], { roughness: 0.88 });
  M.wood = texMat('wood', T.wood, [1, 1], { roughness: 0.6 });
  M.wallpaper = texMat('wallpaper', T.wallpaper, [2, 2], { roughness: 0.9 });
  M.tatami = texMat('tatami', T.tatami, [1, 1], { roughness: 0.85 });
  M.tile = texMat('tile', T.tile, [2, 2], { roughness: 0.25 });
  M.grass = texMat('grass', T.grass, [8, 8], { roughness: 0.95 });
  M.soil = texMat('soil', T.soil, [4, 4], { roughness: 0.97 });
  M.leaves = new THREE.MeshStandardMaterial({ map: T.leaves.map, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.8, color: 0xffffff });
  M.bark = color(0x5a4636, 0.95);
  M.skin = [0xe8c1a0, 0xd9a882, 0xc68f6a, 0xf0d0b4].map(c => color(c, 0.62, 0, { }));
  M.hair = [0x1b1512, 0x2e231b, 0x4a3a2c, 0x8f8d8a].map(c => color(c, 0.75));
  return M;
}
