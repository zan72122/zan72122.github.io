import * as THREE from 'three';
import { makeNail } from '../world/tools.js';
import { tween, easeOutCubic } from '../core/util.js';
import { findNailJoint } from './freeplay-joinery.js';
import { mergePieceClusters } from './joint-cluster.js';
import {
  makeHammerPose, applyHammerAngle, animateHammerStrike, nailHeadWorld,
} from './hammer-motion.js';
import { FREEPLAY_JOINERY, HAMMER_MOTION } from './realism-config.js';

const UP = new THREE.Vector3(0, 1, 0);
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

/** 重なった2部品へ、面法線に沿った2回の打撃で釘を通す。 */
export async function nailFreeplayJoint(step, hit) {
  const g = step.game;
  if (step._nailCool > 0) return;
  const joint = findNailJoint(hit, step.pieces);
  if (!joint) {
    g.say('きと きを かさねよう');
    g.rings.pop(hit.point, { size: 0.06, color: '#ff9f8c', dur: 0.45 });
    g.audio.hint();
    return;
  }

  step._nailCool = 1.2;
  const nail = makeNail();
  let depth = 0.010;
  nail.group.quaternion.setFromUnitVectors(UP, joint.outward);
  const placeNail = (value) => nail.group.position.copy(joint.point).addScaledVector(joint.inward, value);
  placeNail(depth);
  g.scene.add(nail.group);

  const strike = async (tap, nextDepth) => {
    const contact = nailHeadWorld(nail);
    const preferred = g.robot.group.getWorldPosition(new THREE.Vector3()).sub(contact).add(V(0, 0.08, 0));
    const pose = makeHammerPose(g.tools.hammer, contact, joint.inward, preferred);
    applyHammerAngle(g.tools.hammer, pose, HAMMER_MOTION.readyAngle);
    await animateHammerStrike({
      hammer: g.tools.hammer,
      pose,
      onPose: (grip) => g.robot.setHandWorld('R', grip),
      onImpact: () => {
        g.audio.hammer(tap);
        g.stage.punch(0.028);
        g.rings.pop(contact, { size: 0.07, color: '#ffffff', dur: 0.45, normal: joint.outward });
        const from = depth;
        depth = nextDepth;
        tween({ from, to: depth, dur: 0.12, ease: easeOutCubic, onUpdate: placeNail });
      },
    });
  };

  await strike(0, FREEPLAY_JOINERY.firstDepth);
  await strike(1, FREEPLAY_JOINERY.finalDepth);
  mergePieceClusters(joint.primary, joint.secondary);
  g.scene.updateMatrixWorld(true);
  joint.primary.group.attach(nail.group);
  g.audio.sparkle();
  g.sparkles.burst(joint.point, { radius: 0.04, count: 8, color: '#ffffff' });
  g.say('しっかり つながったよ');
}
