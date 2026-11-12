// Apartment block (the upstream "sky faucet") and small concrete blocks.
import * as THREE from 'three';
import { Batcher } from './geo.js';
import { M, texMat, color } from './materials.js';
import { T } from './textures.js';
import { staticBox } from './physics.js';

export function buildMansion(spec, ctx) {
  const { scene, w2d } = ctx;
  const { x0, x1, zf, zb, floors, floorH } = spec;
  const H = floors * floorH + 1.2;
  const group = new THREE.Group();
  const B = new Batcher();
  const wallM = texMat('mansion', T.stucco, [1, 1], { color: spec.color, roughness: 0.9 });
  const tileM = texMat('mansionTile', T.block, [1, 1], { color: 0xa89f92, roughness: 0.85 });
  const dark = color(0x2b2d31, 0.35, 0.3);
  const railM = new THREE.MeshStandardMaterial({ color: 0xcfd6d8, roughness: 0.3, metalness: 0.1, transparent: true, opacity: 0.55 });
  const slabM = color(0xd9d4ca, 0.85);
  const bodyZf = zf - 1.3; // balconies project to zf

  B.aabb(wallM, x0, 0, zb, x1, H, bodyZf, 3);
  B.aabb(tileM, x0 - 0.05, 0, bodyZf - 0.1, x1 + 0.05, floorH, bodyZf + 0.02, 2);
  B.aabb(color(0xbab3a7, 0.8), x0 - 0.2, H, zb - 0.2, x1 + 0.2, H + 0.5, bodyZf + 0.2, 1);
  w2d.solid(x0, 0, x1, H + 0.5, 'mansion');
  staticBox(x0, 0, zb, x1, H + 0.5, bodyZf);

  const units = Math.round((x1 - x0) / 3.5);
  const uw = (x1 - x0) / units;
  const emitters = [];
  const laundrySpots = [];
  for (let f = 1; f < floors; f++) {
    const y = f * floorH;
    // continuous balcony slab + railing
    B.aabb(slabM, x0, y - 0.18, bodyZf, x1, y, zf, 1);
    B.aabb(slabM, x0, y + 0.95, zf - 0.12, x1, y + 1.1, zf, 1);
    B.aabb(railM, x0, y, zf - 0.08, x1, y + 0.95, zf - 0.04, 1, { noShadow: true });
    staticBox(x0, y - 0.18, bodyZf, x1, y, zf);
    for (let u = 0; u < units; u++) {
      const ux = x0 + u * uw;
      // partition board (隔て板) between units
      if (u > 0) B.aabb(color(0xe8e6e0, 0.6), ux - 0.02, y, bodyZf, ux + 0.02, y + floorH - 0.25, zf - 0.12, 1);
      // sliding glass door + window
      B.aabb(dark, ux + 0.35, y + 0.05, bodyZf - 0.02, ux + uw - 1.2, y + 2.1, bodyZf + 0.01, 1);
      B.aabb(M.aluminum, ux + 0.33, y + 2.1, bodyZf - 0.02, ux + uw - 1.18, y + 2.16, bodyZf + 0.03, 1);
      // AC unit
      B.aabb(color(0xe9e8e3, 0.55), ux + uw - 1.05, y + 0.02, bodyZf + 0.1, ux + uw - 0.25, y + 0.62, bodyZf + 0.4, 1);
      if ((u + f) % 3 !== 0) laundrySpots.push({ x0: ux + 0.4, x1: ux + uw - 0.5, y: y + 1.9, z: zf - 0.6 });
    }
    // the east end is open: loose things slide along the balcony and fall off into the sky
    emitters.push({ x: x1 + 0.3, y: y + 0.55, z: zf - 0.6 });
  }
  // ground-floor entrance
  B.aabb(dark, x1 - 5.5, 0.1, bodyZf - 0.02, x1 - 3.2, 2.4, bodyZf + 0.01, 1);
  B.aabb(color(0xbab3a7, 0.8), x1 - 6.0, 2.5, bodyZf, x1 - 2.7, 2.7, bodyZf + 1.2, 1);
  // east face windows
  for (let f = 1; f < floors; f++) for (let k = 0; k < 2; k++) {
    const z = zb + 2 + k * 3.5;
    B.aabb(dark, x1, f * floorH + 0.9, z, x1 + 0.02, f * floorH + 2.0, z + 1.2, 1);
  }
  B.build(group);
  scene.add(group);
  return { spec, group, emitters, laundrySpots, openings: [], rooms: [] };
}

export function buildBlock(spec, ctx) {
  const { scene } = ctx;
  const group = new THREE.Group();
  const B = new Batcher();
  const m = texMat('block-' + spec.id, T.concrete, [1, 1], { color: spec.color, roughness: 0.9 });
  B.aabb(m, spec.x0, 0, spec.zb, spec.x1, spec.h, spec.zf, 2);
  B.aabb(color(0x9c978d, 0.85), spec.x0 - 0.3, spec.h, spec.zb - 0.3, spec.x1 + 0.3, spec.h + 0.2, spec.zf + 0.3, 1);
  B.aabb(color(0x6d7b82, 0.5, 0.3), spec.x0 + 0.4, 0.05, spec.zf, spec.x0 + 1.2, 2.0, spec.zf + 0.03, 1);
  B.aabb(color(0x2f6fb0, 0.5), spec.x1 - 0.9, 1.7, spec.zf, spec.x1 - 0.5, 2.1, spec.zf + 0.03, 1);
  B.build(group);
  staticBox(spec.x0, 0, spec.zb, spec.x1, spec.h + 0.2, spec.zf);
  scene.add(group);
  return { spec, group, openings: [], rooms: [] };
}
