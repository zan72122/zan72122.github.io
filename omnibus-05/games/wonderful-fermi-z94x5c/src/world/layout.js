// Fixed geography of the story so every module agrees on where things are.
import * as THREE from '../../lib/three.module.js';
import { fbm2, smoothstep, clamp } from '../core/math.js';

// The child kneels at the origin facing +Z, over puddle P0.
export const CHILD_SPOT = new THREE.Vector3(0.3, 0, 0.08);

// Puddles: centre, radii (x, z), rotation, irregularity seed.
export const PUDDLES = [
  { id: 'p0', c: [0.05, 0.92], r: [0.95, 0.72], rot: 0.15, seed: 3, res: 96 },
  { id: 'p1', c: [0.75, 11.0], r: [0.85, 1.25], rot: 0.4, seed: 7, res: 72 },
  { id: 'p2', c: [0.45, 19.5], r: [1.1, 1.5], rot: -0.3, seed: 11, res: 80 },
  { id: 'p3', c: [0.65, 31.5], r: [2.1, 5.4], rot: 0.08, seed: 19, res: 128 },
  { id: 'p4', c: [-2.6, 5.5], r: [0.7, 0.5], rot: 0.9, seed: 23, res: 56 },
  { id: 'p5', c: [3.4, 2.4], r: [0.55, 0.8], rot: -0.6, seed: 29, res: 56 },
  { id: 'p6', c: [-8.0, -8.5], r: [1.6, 0.9], rot: 0.5, seed: 31, res: 72 },
  { id: 'p7', c: [-16.5, -27.0], r: [1.4, 2.2], rot: 0.6, seed: 37, res: 80 },
  { id: 'p8', c: [-4.95, 3.2], r: [0.85, 0.62], rot: 0.3, seed: 41, res: 80 },
];

// The run line and the rainbow loop.
export const RUN_X = 0.6;
export const RUN_START_Z = -0.6;
export const JUMP_Z = 40.0; // xz of the first contact on the rainbow
export const LOOP_R = 140;
export const LOOP_CENTER = new THREE.Vector3(RUN_X - LOOP_R, 0, JUMP_Z);
export const LOOP_LAND_THETA = Math.PI * 1.78; // where the bow reaches the ground
export const LOOP_END_THETA = Math.PI * 1.912; // where the unicorn stops
export const RAINBOW_H = 132;
export const RAINBOW_START_H = 2.05;

export const VILLAGE = new THREE.Vector2(-150, 55);
export const MEADOW_C = new THREE.Vector2(-8, 4);

// Terrain height (metres). The meadow and the run are flat; farmland rolls gently;
// hills rise far away.
export function terrainHeight(x, z) {
  const dm = Math.hypot(x - MEADOW_C.x, (z - MEADOW_C.y) * 0.75);
  const flat = 1 - smoothstep(55, 110, dm);
  let h = (fbm2(x / 160 + 3.1, z / 160 - 1.7, 4) - 0.5) * 7.0;
  h += (fbm2(x / 55 + 9.1, z / 55 + 4.2, 3) - 0.5) * 1.6;
  // distant hills around the loop
  const dc = Math.hypot(x - LOOP_CENTER.x, z - LOOP_CENTER.z);
  h += smoothstep(320, 760, dc) * (fbm2(x / 260 - 7.0, z / 260 + 2.0, 4) * 90 - 10);
  // village is gently levelled
  const dv = Math.hypot(x - VILLAGE.x, z - VILLAGE.y);
  h *= 1 - 0.7 * (1 - smoothstep(30, 90, dv));
  return h * (1 - flat);
}

// Signed puddle mask: <0 inside. Irregular outline.
export function puddleShape(p, x, z) {
  const dx = x - p.c[0], dz = z - p.c[1];
  const cs = Math.cos(p.rot), sn = Math.sin(p.rot);
  const lx = (dx * cs - dz * sn) / p.r[0];
  const lz = (dx * sn + dz * cs) / p.r[1];
  const a = Math.atan2(lz, lx);
  const wob = 1 + 0.12 * Math.sin(a * 3 + p.seed) + 0.07 * Math.sin(a * 5 + p.seed * 2.3) + 0.05 * Math.sin(a * 7 + p.seed * 0.7);
  return Math.hypot(lx, lz) - wob;
}

export function puddleAt(x, z) {
  for (const p of PUDDLES) {
    const ext = Math.max(p.r[0], p.r[1]) * 1.4;
    if (Math.abs(x - p.c[0]) > ext || Math.abs(z - p.c[1]) > ext) continue;
    if (puddleShape(p, x, z) < 0) return p;
  }
  return null;
}


// Height of the bow above the meadow at progress u (0 = first contact, 1 = landing).
// Climbs briskly after the first step, peaks at u = 0.5, lands gently.
export function bowProfile(u) {
  if (u <= 0 || u >= 1) return 0;
  const cosBump = (1 - Math.cos(2 * Math.PI * u)) * 0.5;
  let h;
  // the first steps run nearly level so the new surface reads clearly, then climb
  const ease = u < 0.045 ? (u / 0.045) ** 2 * (3 - 2 * (u / 0.045)) : 1;
  if (u <= 0.5) h = RAINBOW_H * (0.62 * Math.sin(Math.PI * u) * ease + 0.38 * cosBump);
  else h = RAINBOW_H * cosBump;
  const start = RAINBOW_START_H * Math.max(0, 1 - u / 0.3) ** 2;
  return h + start * (1 - (u <= 0.5 ? 0 : 1));
}
