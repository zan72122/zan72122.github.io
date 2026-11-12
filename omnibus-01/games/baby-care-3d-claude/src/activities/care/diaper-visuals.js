/* ========================================================================== 
 * care/diaper-visuals.js — diaper-only props and fold-to-pail motion
 * ========================================================================== */

import * as THREE from 'three';
import { softMaterial, target } from './common.js';
import { diaperPailProgress, keepUsedAtPailRim } from './interaction-rules.js';

export { keepUsedAtPailRim };

export const DIAPER_PAIL_SECONDS = 0.60;

export function buildPail(root) {
  const pail = new THREE.Group();
  pail.userData.pickId = 'pail';
  pail.position.set(-0.16, 0.02, 0.28);
  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.088, 0.078, 0.22, 20),
    softMaterial(0xbfe4dc, { roughness: 0.56, clearcoat: 0.42 })
  );
  body.position.y = 0.11;
  body.castShadow = body.receiveShadow = true;
  pail.add(body);
  const lid = new THREE.Mesh(
    new THREE.CylinderGeometry(0.096, 0.096, 0.024, 20),
    softMaterial(0x82c9bc, { roughness: 0.48, clearcoat: 0.55 })
  );
  lid.position.y = 0.232;
  pail.add(lid);
  target(pail, 'pail', 0.13, [0, 0.13, 0]);
  root.add(pail);
  return { pail, lid };
}

export function buildGentleIndicator(root) {
  const indicator = [];
  for (let i = 0; i < 3; i++) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(0.022 + i * 0.004, 10, 7),
      softMaterial(0xe7d8f2, { opacity: 0.42, roughness: 0.9, clearcoat: 0 })
    );
    puff.position.set(-0.035 + i * 0.04, 0.22 + i * 0.025, 0.04);
    puff.castShadow = false;
    root.add(puff);
    indicator.push(puff);
  }
  return indicator;
}

function captureMotion(used, pail) {
  return {
    start: used.position.clone(),
    foldAt: used.position.clone().add(new THREE.Vector3(0, 0.055, 0)),
    dropAt: pail.position.clone().add(new THREE.Vector3(0, 0.205, 0)),
    scale: used.scale.clone(),
    rotation: used.rotation.clone()
  };
}

function applyMotion(used, lid, motion, raw) {
  const { fold, travel, lidOpen } = diaperPailProgress(raw);
  used.position.lerpVectors(motion.start, motion.foldAt, fold);
  if (travel > 0) {
    used.position.lerpVectors(motion.foldAt, motion.dropAt, travel);
    used.position.y += Math.sin(travel * Math.PI) * 0.075;
  }
  const travelScale = THREE.MathUtils.lerp(1, 0.56, travel);
  used.scale.set(
    motion.scale.x * THREE.MathUtils.lerp(1, 0.68, fold) * travelScale,
    motion.scale.y * THREE.MathUtils.lerp(1, 0.74, fold) * travelScale,
    motion.scale.z * THREE.MathUtils.lerp(1, 0.32, fold) * travelScale
  );
  used.rotation.set(
    motion.rotation.x + fold * 0.34,
    motion.rotation.y,
    motion.rotation.z + fold * 0.20 + travel * 0.30
  );
  lid.rotation.z = -0.54 * lidOpen;
}

export function animateUsedToPail(clock, used, pail, lid, onDone) {
  const motion = captureMotion(used, pail);
  return clock.tween(DIAPER_PAIL_SECONDS, (_t, raw) => {
    applyMotion(used, lid, motion, raw);
  }, { tag: 'diaper-pail', onDone });
}

/** Freeze the same authored motion at a deterministic screenshot frame. */
export function stageUsedToPail(used, pail, lid, progress = 0.66) {
  applyMotion(used, lid, captureMotion(used, pail), progress);
}
