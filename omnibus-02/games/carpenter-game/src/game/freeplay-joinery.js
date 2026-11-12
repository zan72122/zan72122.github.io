import * as THREE from 'three';
import { FREEPLAY_JOINERY } from './realism-config.js';

function rayBoxInterval(origin, direction, box) {
  let near = -Infinity;
  let far = Infinity;
  for (const axis of ['x', 'y', 'z']) {
    const d = direction[axis];
    if (Math.abs(d) < 1e-8) {
      if (origin[axis] < box.min[axis] || origin[axis] > box.max[axis]) return null;
      continue;
    }
    let a = (box.min[axis] - origin[axis]) / d;
    let b = (box.max[axis] - origin[axis]) / d;
    if (a > b) [a, b] = [b, a];
    near = Math.max(near, a);
    far = Math.min(far, b);
    if (near > far) return null;
  }
  return far >= 0 ? { near: Math.max(0, near), far } : null;
}

/** タップ面から材内へ進む直線上に、接している別部品があるか調べる。 */
export function findNailJoint(hit, pieces) {
  const primary = hit.object.userData.plank;
  if (!primary || !hit.face) return null;
  hit.object.updateWorldMatrix(true, false);
  const outward = hit.face.normal.clone().transformDirection(hit.object.matrixWorld).normalize();
  const inward = outward.clone().negate();
  const origin = hit.point.clone().addScaledVector(outward, FREEPLAY_JOINERY.surfaceOffset);
  const ray = new THREE.Ray(origin, inward);
  const primaryInterval = rayBoxInterval(origin, inward, new THREE.Box3().setFromObject(primary.mesh));
  if (!primaryInterval) return null;

  let best = null;
  for (const secondary of pieces) {
    if (secondary === primary) continue;
    const interval = rayBoxInterval(origin, inward, new THREE.Box3().setFromObject(secondary.mesh));
    if (!interval || interval.near > FREEPLAY_JOINERY.maxRayDistance) continue;
    const gap = interval.near - primaryInterval.far;
    if (gap < -FREEPLAY_JOINERY.surfaceOffset || gap > FREEPLAY_JOINERY.maxGap) continue;
    if (!best || interval.near < best.distance) best = { secondary, distance: interval.near };
  }
  if (!best) return null;
  return { primary, secondary: best.secondary, point: hit.point.clone(), outward, inward, ray };
}
