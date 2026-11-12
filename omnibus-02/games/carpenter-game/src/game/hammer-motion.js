import * as THREE from 'three';
import { tween, easeInCubic, easeOutCubic } from '../core/util.js';
import { HAMMER_MOTION } from './realism-config.js';

const LOCAL_X = new THREE.Vector3(1, 0, 0);
const LOCAL_Y = new THREE.Vector3(0, 1, 0);

/**
 * 打撃面を釘頭へ合わせた姿勢を作る。
 * ハンマーの local -X が打撃面の法線、local -Y が柄の方向である。
 */
export function makeHammerPose(hammer, contact, inward, preferredHandle) {
  const drive = inward.clone().normalize();
  const handle = preferredHandle.clone().addScaledVector(drive, -preferredHandle.dot(drive));
  if (handle.lengthSq() < 1e-6) handle.set(0, 0, -1).addScaledVector(drive, drive.z);
  if (handle.lengthSq() < 1e-6) handle.set(1, 0, 0).addScaledVector(drive, -drive.x);
  handle.normalize();

  const worldX = drive.clone().negate();
  const worldY = handle.clone().negate();
  const worldZ = new THREE.Vector3().crossVectors(worldX, worldY).normalize();
  worldY.crossVectors(worldZ, worldX).normalize();

  const basis = new THREE.Matrix4().makeBasis(worldX, worldY, worldZ);
  const impactQuaternion = new THREE.Quaternion().setFromRotationMatrix(basis);
  const strikeLocal = hammer.strikeFace.position.clone();
  const gripLocal = hammer.grip.position.clone();
  const impactPosition = contact.clone().sub(strikeLocal.applyQuaternion(impactQuaternion));
  const pivot = gripLocal.clone().applyQuaternion(impactQuaternion).add(impactPosition);
  const radial = contact.clone().sub(pivot);
  const swingAxis = new THREE.Vector3().crossVectors(radial, drive.clone().negate()).normalize();

  return { contact: contact.clone(), impactQuaternion, pivot, swingAxis, gripLocal };
}

/** 柄の握りを支点として回転させ、打撃面を円弧で動かす。 */
export function applyHammerAngle(hammer, pose, angle) {
  const swing = new THREE.Quaternion().setFromAxisAngle(pose.swingAxis, angle);
  hammer.group.quaternion.copy(swing).multiply(pose.impactQuaternion);
  const gripOffset = pose.gripLocal.clone().applyQuaternion(hammer.group.quaternion);
  hammer.group.position.copy(pose.pivot).sub(gripOffset);
  return hammer.group.position.clone().add(gripOffset);
}

/** ためる → 釘頭へ当たる → 小さく戻る、の一打を再生する。 */
export async function animateHammerStrike({ hammer, pose, onPose, onImpact }) {
  const set = (angle) => {
    const grip = applyHammerAngle(hammer, pose, angle);
    if (onPose) onPose(grip);
  };
  await tween({
    from: HAMMER_MOTION.readyAngle,
    to: HAMMER_MOTION.windupAngle,
    dur: HAMMER_MOTION.windupSeconds,
    ease: easeOutCubic,
    onUpdate: set,
  });
  await tween({
    from: HAMMER_MOTION.windupAngle,
    to: 0,
    dur: HAMMER_MOTION.strikeSeconds,
    ease: easeInCubic,
    onUpdate: set,
    onDone: onImpact,
  });
  await tween({
    from: 0,
    to: HAMMER_MOTION.reboundAngle,
    dur: HAMMER_MOTION.reboundSeconds,
    ease: easeOutCubic,
    onUpdate: set,
  });
}

/** 釘の外側にある頭頂面をワールド座標で返す。 */
export function nailHeadWorld(nail) {
  nail.group.updateWorldMatrix(true, true);
  return nail.headFace.getWorldPosition(new THREE.Vector3());
}

export function hammerContactError(hammer, contact) {
  hammer.group.updateWorldMatrix(true, true);
  return hammer.strikeFace.getWorldPosition(new THREE.Vector3()).distanceTo(contact);
}

export const HAMMER_LOCAL_AXES = Object.freeze({ face: LOCAL_X.clone().negate(), handle: LOCAL_Y.clone().negate() });
