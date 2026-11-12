/* ===========================================================================
 * activities/play/mode-common.js — lifecycle and input for Play sub-modes
 * ========================================================================== */

import * as THREE from 'three';
import { Resources, hitProxy } from '../../fx/toys.js';
import { Clockwork, Picker, owner, roundedBox, bumpMeter, award } from '../_shared.js';
import { CareFeedback } from '../care/feedback.js';
import { visiblePickHierarchy } from '../care/interaction-rules.js';

const ZERO = new THREE.Vector3();

export function softMaterial(res, color, {
  roughness = 0.62, clearcoat = 0.28, opacity = 1, emissive = 0x000000
} = {}) {
  return res.mat(new THREE.MeshPhysicalMaterial({
    color, roughness, metalness: 0, clearcoat,
    clearcoatRoughness: 0.42, transparent: opacity < 1,
    opacity, depthWrite: opacity >= 0.82, emissive
  }));
}

export function roundedMesh(res, size, color, radius = 0.012, opts) {
  const geometry = res.geo(roundedBox(size[0], size[1], size[2], radius, 3));
  const mesh = new THREE.Mesh(geometry, softMaterial(res, color, opts));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/** A Resources-owned 44px-minimum target; unlike the shared care proxy it is
 * safe for an independently disposed Play mode. */
export function target(res, parent, id, radius, position = [0, 0, 0]) {
  const proxy = hitProxy(res, radius, id, { pickId: id, promptAnchor: true });
  proxy.position.fromArray(position);
  parent.add(proxy);
  return proxy;
}

export class PlayModeBase {
  constructor(ctx, id, onComplete) {
    this.ctx = ctx;
    this.id = id;
    this.onComplete = onComplete;
    this.res = new Resources();
    this.root = new THREE.Group();
    this.root.name = `play-${id}-mode`;
    this.root.visible = false;
    this.clock = new Clockwork();
    this.picker = new Picker(ctx.renderer, ctx.camera);
    this.feedback = new CareFeedback(ctx, this.root, this.clock);
    this.active = false;
    this.done = false;
    this.rewarded = false;
    this.pending = false;
    this.drag = null;
    this._inverse = new THREE.Matrix4();
    this._point = new THREE.Vector3();
    this._local = new THREE.Vector3();
  }

  mount(parent, home) {
    this.root.position.copy(home);
    parent.add(this.root);
    this.res.root(this.root);
    return this.root;
  }

  finishBuild() {
    this.res.claim(this.root);
  }

  enter() {
    this.active = true;
    this.root.visible = true;
    this.pending = false;
    this.advise?.();
  }

  restart() {
    this.clock.clear();
    this.feedback.reset();
    this.releaseBaby();
    this.done = false;
    this.pending = false;
    this.drag = null;
    this.resetVisuals?.();
  }

  exit() {
    const interrupted = !this.done;
    this.active = false;
    this.drag = null;
    this.pending = false;
    this.clock.clear();
    this.feedback.reset();
    this.releaseBaby();
    if (interrupted) this.restart();
    this.root.visible = false;
    this.ctx.ui?.hidePrompt?.();
  }

  complete({ happy = 0.04, stars = 1, prompt = 'できたね！', icon = 'star', at = null } = {}) {
    if (!this.active || this.done) return false;
    this.pending = false;
    this.done = true;
    if (!this.rewarded) {
      this.rewarded = true;
      bumpMeter(this.ctx, 'happy', happy);
      award(this.ctx, stars);
    }
    const from = at || this.ctx.baby?.group;
    if (from) {
      const point = from.isObject3D ? from.getWorldPosition(new THREE.Vector3()) : from;
      this.ctx.fx?.burst?.('heart', point, 5);
    }
    this.ctx.ui?.prompt?.(prompt, { icon, target: at || this.root });
    this.onComplete?.(this.id);
    return true;
  }

  releaseBaby() {
    const baby = this.ctx.baby;
    baby?.reachFor?.('left', null);
    baby?.reachFor?.('right', null);
    baby?.plantFoot?.('left', null);
    baby?.plantFoot?.('right', null);
    baby?.setWind?.(ZERO, 0);
    baby?.lookAt?.(null);
  }

  worldToRoot(world, out = new THREE.Vector3()) {
    this.root.updateWorldMatrix(true, false);
    this._inverse.copy(this.root.matrixWorld).invert();
    return out.copy(world).applyMatrix4(this._inverse);
  }

  pick(pointer, accept = null) {
    const hits = this.picker.cast(pointer, [this.root], true);
    for (const hit of hits) {
      const node = owner(hit.object, 'pickId') || owner(hit.object, 'tag');
      if (!node) continue;
      const id = node.userData.pickId ?? node.userData.tag;
      if (accept && !accept(id, node)) continue;
      if (visiblePickHierarchy(node, this.root)) return { id, node, hit };
    }
    return null;
  }

  beginDrag(object, hit) {
    if (!object || !hit?.point) return null;
    const centre = object.getWorldPosition(new THREE.Vector3());
    return {
      object,
      plane: this.picker.dragPlane(hit.point, new THREE.Plane()),
      offset: centre.clone().sub(hit.point),
      start: object.position.clone(),
      last: centre.clone(),
      distance: 0
    };
  }

  moveDrag(pointer, drag, constrain = null) {
    if (!drag) return null;
    const point = this.picker.onPlane(pointer, drag.plane, this._point);
    if (!point) return null;
    point.add(drag.offset);
    const local = this.worldToRoot(point, this._local);
    constrain?.(local);
    drag.object.position.copy(local);
    drag.object.getWorldPosition(this._point);
    drag.distance += this._point.distanceTo(drag.last);
    drag.last.copy(this._point);
    return local;
  }

  cancelDrag(drag = this.drag) {
    if (drag?.object && drag.start) drag.object.position.copy(drag.start);
    this.drag = null;
  }

  misstep(tool, next) {
    this.feedback.miss(tool || this.root, next || this.root);
  }

  update(dt) {
    if (!this.active) return;
    this.clock.update(dt);
  }

  dispose() {
    this.active = false;
    this.clock.clear();
    this.feedback.reset();
    this.releaseBaby();
    this.res.dispose();
  }
}
