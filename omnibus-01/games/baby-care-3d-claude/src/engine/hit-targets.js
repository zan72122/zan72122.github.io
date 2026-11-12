import * as THREE from 'three';
import {
  MIN_TOUCH_TARGET_PX,
  perspectiveHitRadius
} from './mobile-policy.js';

const cameraPosition = new THREE.Vector3();
const targetPosition = new THREE.Vector3();
const parentScale = new THREE.Vector3();

function requiredRadius(object, camera, viewportHeight, pixels) {
  object.getWorldPosition(targetPosition);
  camera.getWorldPosition(cameraPosition);

  if (camera.isOrthographicCamera) {
    const worldHeight = Math.abs(camera.top - camera.bottom) / (camera.zoom || 1);
    return worldHeight * pixels / (2 * Math.max(1, viewportHeight));
  }
  return perspectiveHitRadius({
    distance: cameraPosition.distanceTo(targetPosition),
    verticalFovDegrees: camera.fov,
    viewportHeight,
    pixels
  });
}

/**
 * Enlarge invisible proxy spheres only when projection would make them smaller
 * than a touch target. Visible assets are never inspected or changed.
 */
export function expandHitTargets(
  objects,
  camera,
  viewportHeight,
  recursive = true
) {
  camera.updateWorldMatrix?.(true, false);
  const visit = object => {
    const base = object.userData?.baseHitRadius;
    if (!object.userData?.proxy || !Number.isFinite(base)) return;

    object.parent?.updateWorldMatrix?.(true, false);
    object.parent?.getWorldScale?.(parentScale);
    const parentMax = object.parent
      ? Math.max(Math.abs(parentScale.x), Math.abs(parentScale.y), Math.abs(parentScale.z), 1e-6)
      : 1;
    const pixels = object.userData.minHitPixels || MIN_TOUCH_TARGET_PX;
    const localRadius = requiredRadius(object, camera, viewportHeight, pixels) / parentMax;
    object.scale.setScalar(Math.max(base, localRadius));
    object.updateWorldMatrix?.(false, false);
  };

  for (const root of objects || []) {
    if (recursive) root.traverse(visit);
    else visit(root);
  }
}
