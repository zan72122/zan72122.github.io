/* ========================================================================== 
 * care/feedback.js — forgiving, clock-owned feedback for a wrong care gesture
 * ========================================================================== */

import * as THREE from 'three';
import { play } from '../_shared.js';

const SHAKE_TAG = 'care-miss-shake';
const FLASH_TAG = 'care-miss-flash';

/**
 * A miss never changes game progress. It only nudges the touched tool (or the
 * activity root) and briefly flashes the next meaningful target.
 */
export class CareFeedback {
  constructor(ctx, root, clock) {
    this.ctx = ctx;
    this.root = root;
    this.clock = clock;
    this._world = new THREE.Vector3();
    this._homePosition = new THREE.Vector3();
    this._homeRotationZ = 0;
    this._shaken = null;

    this.halo = new THREE.Sprite(new THREE.SpriteMaterial({
      color: 0xffd36f, transparent: true, opacity: 0,
      depthTest: false, depthWrite: false
    }));
    this.halo.name = 'care-next-target-flash';
    this.halo.visible = false;
    this.halo.renderOrder = 24;
    root.add(this.halo);
  }

  miss(tool = null, nextTarget = null) {
    this.reset();
    play(this.ctx, 'boing', { gain: 0.25 });

    const shaken = tool?.isObject3D ? tool : this.root;
    this._shaken = shaken;
    this._homePosition.copy(shaken.position);
    this._homeRotationZ = shaken.rotation.z;

    const target = nextTarget?.isObject3D ? nextTarget : this.root;
    target.getWorldPosition(this._world);
    this.root.worldToLocal(this._world);
    this.halo.position.copy(this._world);
    this.halo.scale.setScalar(0.10);
    this.halo.material.opacity = 0.88;
    this.halo.visible = true;

    this.clock.tween(0.24, (_t, raw) => {
      if (this._shaken !== shaken) return;
      const wave = Math.sin(raw * Math.PI * 5) * (1 - raw);
      shaken.position.copy(this._homePosition);
      shaken.position.x += wave * 0.009;
      shaken.rotation.z = this._homeRotationZ + wave * 0.035;
    }, { tag: SHAKE_TAG, onDone: () => this._restoreShake(shaken) });

    this.clock.tween(0.48, (_t, raw) => {
      const pulse = 0.5 + 0.5 * Math.sin(raw * Math.PI * 5);
      this.halo.material.opacity = (1 - raw) * (0.34 + pulse * 0.62);
      this.halo.scale.setScalar(0.10 + pulse * 0.045);
    }, { tag: FLASH_TAG, onDone: () => { this.halo.visible = false; } });
  }

  _restoreShake(expected = this._shaken) {
    if (!expected || this._shaken !== expected) return;
    expected.position.copy(this._homePosition);
    expected.rotation.z = this._homeRotationZ;
    this._shaken = null;
  }

  /** cancelTag does not run tween onDone, so restore transforms explicitly. */
  reset() {
    this.clock.cancelTag(SHAKE_TAG);
    this.clock.cancelTag(FLASH_TAG);
    this._restoreShake();
    this.halo.visible = false;
    this.halo.material.opacity = 0;
  }
}
