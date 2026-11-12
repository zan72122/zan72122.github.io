/* ========================================================================== 
 * activities/care/common.js — small, shared care-activity building blocks
 * ========================================================================== */

import * as THREE from 'three';
import {
  Clockwork, Picker, Trash, hitProxy, owner, placeAtAnchor, roundedBox
} from '../_shared.js';
import { CareFeedback } from './feedback.js';
import { visiblePickHierarchy } from './interaction-rules.js';
import { CareTransientMarks } from './transient-marks.js';

const ZERO_WIND = new THREE.Vector3();

/** Pastel physical material without a generated/cached texture dependency. */
export function softMaterial(color, {
  roughness = 0.58, clearcoat = 0.34, opacity = 1
} = {}) {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color), roughness, metalness: 0,
    clearcoat, clearcoatRoughness: 0.38,
    transparent: opacity < 1, opacity,
    depthWrite: opacity >= 0.82,
    sheen: 0.32, sheenColor: new THREE.Color(0xffffff), sheenRoughness: 0.72
  });
}

export function roundedMesh(size, color, radius = 0.012, opts) {
  const geometry = roundedBox(size[0], size[1], size[2], radius, 3);
  const mesh = new THREE.Mesh(geometry, softMaterial(color, opts));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/** A generous, invisible child-size target that can also anchor a prompt. */
export function target(parent, id, radius, position = [0, 0, 0]) {
  const proxy = hitProxy(radius, `${id}-target`);
  proxy.position.set(position[0], position[1], position[2]);
  proxy.userData.pickId = id;
  proxy.userData.promptAnchor = true;
  parent.add(proxy);
  return proxy;
}

/** Consistent lifecycle for care activities; subclasses still own gameplay. */
export class CareActivityBase {
  constructor(ctx, name) {
    this.ctx = ctx;
    this.root = new THREE.Group();
    this.root.name = `${name}-activity`;
    this.trash = new Trash();
    this.clock = new Clockwork();
    this.feedback = new CareFeedback(ctx, this.root, this.clock);
    this.marks = new CareTransientMarks(this.root, this.clock);
    this.picker = new Picker(ctx.renderer, ctx.camera);
    this.targets = [this.root];
    this._inverseRoot = new THREE.Matrix4();
    this._dragPoint = new THREE.Vector3();
    this._dragLocal = new THREE.Vector3();
    this._dragWorld = new THREE.Vector3();
    this._entered = false;
    this._babyHome = null;
  }

  mount() {
    const anchor = this.ctx.room?.anchor?.('changing');
    if (!anchor?.isObject3D) throw new Error('care activities require Room.anchor("changing")');
    placeAtAnchor(this.root, anchor);
    this.ctx.scene.add(this.root);
    this.trash.obj(this.root);
    return this.root;
  }

  /**
   * The changing anchor is the baby-root placement contract. Saving the full
   * quaternion (rather than yaw alone) makes interruption exactly reversible.
   */
  placeBaby(pose = 'sit', offset = [0, 0, 0]) {
    const baby = this.ctx.baby;
    if (!baby?.group) return;
    this._babyHome ||= {
      position: baby.group.position.clone(),
      quaternion: baby.group.quaternion.clone(),
      pose: baby.poseName || 'sit',
      mood: baby.mood || 'neutral',
      idleLife: baby.idleLife
    };
    this.root.updateWorldMatrix(true, false);
    baby.group.position.set(offset[0], offset[1], offset[2]).applyMatrix4(this.root.matrixWorld);
    baby.group.quaternion.copy(this.root.getWorldQuaternion(new THREE.Quaternion()));
    baby.idleLife = false;
    baby.playPose?.(pose, { seconds: 0.55 });
    this.ctx.cameraRig?.setSubject?.(this.root);
  }

  restoreBaby() {
    const baby = this.ctx.baby;
    if (this._babyHome && baby?.group) {
      baby.group.position.copy(this._babyHome.position);
      baby.group.quaternion.copy(this._babyHome.quaternion);
      baby.idleLife = this._babyHome.idleLife;
      baby.playPose?.(this._babyHome.pose, { seconds: 0.25 });
      baby.setMood?.(this._babyHome.mood);
      this._babyHome = null;
    }
    baby?.lookAt?.(null);
    baby?.setWind?.(ZERO_WIND, 0);
    this.ctx.cameraRig?.setSubject?.(null);
  }

  pick(p, accept = null) {
    const hits = this.picker.cast(p, this.targets, true);
    for (const hit of hits) {
      const node = owner(hit.object, 'pickId');
      if (!node) continue;
      if (accept && !accept(node.userData.pickId, node)) continue;
      // The proxy itself is intentionally invisible. A hidden prop or hidden
      // ancestor, however, belongs to another step and must not steal input.
      if (visiblePickHierarchy(node, this.root)) {
        return { id: node.userData.pickId, node, hit };
      }
    }
    return null;
  }

  worldToRoot(world, out = new THREE.Vector3()) {
    this.root.updateWorldMatrix(true, false);
    this._inverseRoot.copy(this.root.matrixWorld).invert();
    return out.copy(world).applyMatrix4(this._inverseRoot);
  }

  /** Camera-facing world drag converted back into the activity's local frame. */
  beginPlaneDrag(object, hit) {
    if (!object || !hit?.point) return null;
    const centre = object.getWorldPosition(new THREE.Vector3());
    return {
      object,
      plane: this.picker.dragPlane(hit.point, new THREE.Plane()),
      offset: centre.clone().sub(hit.point),
      start: object.position.clone(),
      lastWorld: centre.clone(),
      distance: 0
    };
  }

  movePlaneDrag(p, drag, constrain = null) {
    if (!drag) return null;
    const point = this.picker.onPlane(p, drag.plane, this._dragPoint);
    if (!point) return null;
    point.add(drag.offset);
    const local = this.worldToRoot(point, this._dragLocal);
    constrain?.(local);
    drag.object.position.copy(local);
    drag.object.getWorldPosition(this._dragWorld);
    drag.distance += this._dragWorld.distanceTo(drag.lastWorld);
    drag.lastWorld.copy(this._dragWorld);
    return local;
  }

  cancelPlaneDrag(drag) {
    if (drag?.object && drag.start) drag.object.position.copy(drag.start);
  }

  /** Common no-penalty response: shake the tool and flash the next target. */
  misstep(tool = null, nextTarget = null) {
    // A generous hit proxy is intentionally invisible. Shake its nearest
    // visible owner (or the activity root) so the feedback can actually read.
    let visibleTool = tool;
    while (visibleTool?.userData?.proxy && visibleTool.parent) {
      visibleTool = visibleTool.parent;
    }
    this.feedback.miss(visibleTool, nextTarget);
  }

  update(dt) {
    this.clock.update(dt);
  }

  async exit() {
    this._entered = false;
    this.feedback.reset();
    this.marks.clear();
    this.ctx.ui?.hidePrompt?.();
    this.restoreBaby();
  }

  dispose() {
    this._entered = false;
    this.feedback.reset();
    this.marks.clear();
    this.clock.clear();
    this.restoreBaby();
    this.ctx.ui?.hidePrompt?.();
    this.targets.length = 0;
    this.trash.flush();
  }
}
