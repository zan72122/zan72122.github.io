import * as THREE from 'three';
import { tween } from '../core/util.js';
import { FACE_TILES } from '../core/surface-math.js';
import { PAINT_ASSIST } from './realism-config.js';

const UP = new THREE.Vector3(0, 1, 0);

function targetFor(mesh, face) {
  const size = mesh.userData.woodSize;
  const def = FACE_TILES[face];
  const normal = new THREE.Vector3();
  normal.setComponent(def.axis, def.sign);
  const local = new THREE.Vector3();
  local.setComponent(def.axis, def.sign * size[def.axis] / 2);
  mesh.updateWorldMatrix(true, false);
  const world = mesh.localToWorld(local);
  const worldNormal = normal.clone().transformDirection(mesh.matrixWorld);
  const position = world.clone().addScaledVector(worldNormal, PAINT_ASSIST.brushLift);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(UP, worldNormal);
  return { mesh, face, world, worldNormal, position, quaternion };
}

export function collectUnpaintedFaces(root, paintSystem) {
  const targets = [];
  root.traverse((mesh) => {
    if (!mesh.isMesh || !mesh.material?.userData.isWood || !mesh.userData.woodSize) return;
    paintSystem.registerMesh(mesh);
    for (let face = 0; face < FACE_TILES.length; face++) {
      if (paintSystem.faceCoverage(mesh, face) < 0.98) targets.push(targetFor(mesh, face));
    }
  });
  return targets;
}

/** ロボットの刷毛を未塗装面へ順に触れさせてから、その面を仕上げる。 */
export function animatePaintAssist(game, root, brush, paintSystem) {
  const targets = collectUnpaintedFaces(root, paintSystem);
  if (!targets.length) return Promise.resolve();
  const duration = Math.min(
    PAINT_ASSIST.maxSeconds,
    Math.max(PAINT_ASSIST.minSeconds, targets.length * PAINT_ASSIST.secondsPerFace),
  );
  let filled = -1;
  return tween({
    from: 0,
    to: targets.length,
    dur: duration,
    ease: (t) => t,
    onUpdate: (value) => {
      const index = Math.min(targets.length - 1, Math.floor(value));
      const nextIndex = Math.min(targets.length - 1, index + 1);
      const fraction = Math.min(1, value - index);
      const current = targets[index];
      const next = targets[nextIndex];
      if (filled !== index) {
        paintSystem.fillFace(current.mesh, current.face);
        filled = index;
      }
      brush.group.position.lerpVectors(current.position, next.position, fraction);
      brush.group.quaternion.slerpQuaternions(current.quaternion, next.quaternion, fraction);
      const hand = current.world.clone().lerp(next.world, fraction)
        .addScaledVector(current.worldNormal, PAINT_ASSIST.handLift);
      game.robot.setHandWorld('R', hand);
      game.robot.lookAtWorld(current.world);
    },
    onDone: () => {
      const last = targets[targets.length - 1];
      paintSystem.fillFace(last.mesh, last.face);
    },
  });
}
