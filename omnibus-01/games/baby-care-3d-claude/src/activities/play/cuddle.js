/* ===========================================================================
 * activities/play/cuddle.js — safe, tiny-sway cuddle play
 * ========================================================================== */

import * as THREE from 'three';
import { snd } from '../../fx/toys.js';
import { checkAssist, waitGame, waitUntil } from '../assist-utils.js';
import { PlayModeBase, softMaterial, target } from './mode-common.js';

const HEART_HOME = new THREE.Vector3(-0.27, 0.27, 0.18);
const CHEST_FALLBACK = new THREE.Vector3(0, 0.34, 0.08);

function heartShape(radius = 0.07) {
  const shape = new THREE.Shape();
  const k = radius / 1.1;
  shape.moveTo(0, -1.05 * k);
  shape.bezierCurveTo(-1.4 * k, -0.15 * k, -0.95 * k, k, 0, 0.42 * k);
  shape.bezierCurveTo(0.95 * k, k, 1.4 * k, -0.15 * k, 0, -1.05 * k);
  return shape;
}

export class CuddleMode extends PlayModeBase {
  constructor(ctx, onComplete) {
    super(ctx, 'cuddle', onComplete);
    this.phase = 'invite';
    this.swayTime = 0;
    this._babyBase = null;
    this._chest = new THREE.Vector3();
    this._chestLocal = new THREE.Vector3();
    this._swayTimer = null;
  }

  async build(parent, home) {
    this.mount(parent, home);

    this.heart = new THREE.Mesh(
      this.res.geo(new THREE.ExtrudeGeometry(heartShape(), {
        depth: 0.018, bevelEnabled: true, bevelSize: 0.004,
        bevelThickness: 0.004, bevelSegments: 2, curveSegments: 18
      })),
      softMaterial(this.res, 0xff8fb4, { roughness: 0.42, clearcoat: 0.62 })
    );
    this.heart.name = 'cuddle-heart-marker';
    this.heart.userData.pickId = 'cuddle-heart';
    this.heart.position.copy(HEART_HOME);
    this.heart.rotation.z = Math.PI;
    this.heart.castShadow = true;
    target(this.res, this.heart, 'cuddle-heart', 0.105);
    this.root.add(this.heart);

    this.halo = new THREE.Mesh(
      this.res.geo(new THREE.TorusGeometry(0.105, 0.008, 8, 32)),
      softMaterial(this.res, 0xffd76e, {
        roughness: 0.55, clearcoat: 0.4, opacity: 0.72, emissive: 0x4a2500
      })
    );
    this.halo.name = 'cuddle-chest-halo';
    this.halo.rotation.x = 0.06;
    this.root.add(this.halo);
    this.chestTarget = target(this.res, this.root, 'cuddle-chest', 0.14);

    this.finishBuild();
  }

  enter() {
    if (this.done) this.restart();
    super.enter();
    const baby = this.ctx.baby;
    if (baby?.group) {
      this._babyBase = {
        position: baby.group.position.clone(),
        quaternion: baby.group.quaternion.clone()
      };
    }
    baby?.playPose?.('sit', { seconds: 0.35 });
    baby?.setMood?.('shy');
    const heartWorld = this.heart.getWorldPosition(new THREE.Vector3());
    baby?.reachFor?.('left', heartWorld);
    baby?.reachFor?.('right', heartWorld);
    baby?.lookAt?.(heartWorld);
    this._syncChest();
    this.advise();
  }

  resetVisuals() {
    this.phase = 'invite';
    this.swayTime = 0;
    this._swayTimer = null;
    this.heart.position.copy(HEART_HOME);
    this.heart.scale.setScalar(1);
    this.heart.visible = true;
    this.halo.visible = true;
    if (this.halo.material) this.halo.material.opacity = 0.72;
    this._syncChest();
  }

  _syncChest() {
    const point = this.ctx.baby?.focusPoint?.(this._chest) || this._chest.copy(CHEST_FALLBACK);
    this.worldToRoot(point, this._chestLocal);
    this._chestLocal.z += 0.075;
    this.halo.position.copy(this._chestLocal);
    this.chestTarget.position.copy(this._chestLocal);
  }

  advise() {
    if (!this.active || this.done || this.pending) return;
    if (this.phase === 'invite') {
      this.ctx.ui?.prompt?.('ハートを むねへ', { icon: 'cuddle', target: this.heart });
    } else if (this.phase === 'sway') {
      this.ctx.ui?.prompt?.('ゆらゆら みていよう', { icon: 'cuddle', target: this.ctx.baby?.group });
    } else if (this.phase === 'hug') {
      this.ctx.ui?.prompt?.('むねを とんとん', { icon: 'hand', target: this.chestTarget });
    }
  }

  _acceptInvite() {
    if (!this.active || this.phase !== 'invite') return false;
    this.cancelDrag();
    this.phase = 'sway';
    this.swayTime = 0;
    this.heart.position.copy(this._chestLocal);
    this.heart.scale.setScalar(0.72);
    this.ctx.baby?.reachFor?.('left', null);
    this.ctx.baby?.reachFor?.('right', null);
    this.ctx.baby?.playPose?.('held', { seconds: 0.45 });
    this.ctx.baby?.setMood?.('happy');
    snd(this.ctx, 'baby.babble', { gain: 0.45, rate: 0.94 });
    this._swayTimer = this.clock.after(1.18, () => {
      if (!this.active || this.phase !== 'sway') return;
      this.phase = 'hug';
      this._restoreBabyBase();
      this.advise();
    });
    this.advise();
    return true;
  }

  _stageHug() {
    if (!this.active || this.phase !== 'hug' || this.pending) return false;
    this.pending = true;
    this.heart.scale.setScalar(1.02);
    this.ctx.baby?.setMood?.('giggle');
    this.ctx.baby?.gesture?.('clap');
    snd(this.ctx, 'baby.giggle', { gain: 0.6 });
    this.ctx.fx?.burst?.('heart', this.ctx.baby?.headWorldPos?.() || this._chest, 7);
    this.ctx.ui?.hidePrompt?.();
    return true;
  }

  _finishHug() {
    if (!this._stageHug()) return false;
    this.phase = 'done';
    return this.complete({ prompt: 'ぎゅーっ あんしんだね', icon: 'cuddle' });
  }

  _restoreBabyBase() {
    const baby = this.ctx.baby;
    if (!this._babyBase || !baby?.group) return;
    baby.group.position.copy(this._babyBase.position);
    baby.group.quaternion.copy(this._babyBase.quaternion);
  }

  getAssistStep() {
    if (!this.active || this.done || this.pending || this.drag || this.phase === 'sway') return null;
    if (this.phase === 'invite') {
      return { id: 'cuddle:invite', label: 'ハートを むねへ', icon: 'cuddle', target: this.heart };
    }
    return { id: 'cuddle:hug', label: 'むねを とんとん', icon: 'hand', target: this.chestTarget };
  }

  previewAssistStep() {
    return { id: 'cuddle:invite', label: 'だっこしよう', icon: 'cuddle', target: null };
  }

  async runAssistStep(stepId, { signal } = {}) {
    checkAssist(signal);
    if (this.getAssistStep()?.id !== stepId) return;
    if (stepId === 'cuddle:invite') {
      if (!this._acceptInvite()) return;
      try {
        await waitUntil(this.ctx, () => this.phase === 'hug', { signal, timeout: 2.2 });
      } catch (error) {
        if (!this.done) {
          this.clock.cancel(this._swayTimer);
          this._restoreBabyBase();
          this.restart();
          this.advise();
        }
        throw error;
      }
      return;
    }
    if (!this._stageHug()) return;
    try {
      await waitGame(this.ctx, 0.52, signal);
      checkAssist(signal);
      if (!this.active) return;
      this.phase = 'done';
      this.complete({ prompt: 'ぎゅーっ あんしんだね', icon: 'cuddle' });
    } catch (error) {
      if (!this.done) {
        this.pending = false;
        this.phase = 'hug';
        this.heart.scale.setScalar(0.72);
        this.ctx.baby?.setMood?.('happy');
        this.advise();
      }
      throw error;
    }
  }

  onPointer(pointer) {
    if (!this.active || this.done || this.pending) return;
    if (pointer.type === 'down') {
      const expected = this.phase === 'invite' ? 'cuddle-heart' : 'cuddle-chest';
      const got = this.pick(pointer, (id) => id === expected);
      if (!got) { this.misstep(this.heart, this.phase === 'invite' ? this.heart : this.chestTarget); return; }
      if (this.phase === 'invite') this.drag = this.beginDrag(this.heart, got.hit);
      else this._finishHug();
    } else if (pointer.type === 'move' && this.drag) {
      this.moveDrag(pointer, this.drag, (p) => {
        p.x = THREE.MathUtils.clamp(p.x, -0.34, 0.24);
        p.y = THREE.MathUtils.clamp(p.y, 0.16, 0.48);
        p.z = THREE.MathUtils.clamp(p.z, 0.08, 0.24);
      });
    } else if ((pointer.type === 'up' || pointer.type === 'cancel') && this.drag) {
      const drag = this.drag;
      this.drag = null;
      const close = this.heart.position.distanceTo(this._chestLocal) < 0.18;
      if (pointer.type !== 'cancel' && close && drag.distance >= 0.05) this._acceptInvite();
      else {
        this.heart.position.copy(HEART_HOME);
        if (pointer.type !== 'cancel') this.misstep(this.heart, this.chestTarget);
      }
    }
  }

  update(dt) {
    if (!this.active) return;
    this._syncChest();
    if (this.phase === 'sway' && this._babyBase && this.ctx.baby?.group) {
      this.swayTime += dt;
      const baby = this.ctx.baby.group;
      baby.position.copy(this._babyBase.position);
      baby.position.x += Math.sin(this.swayTime * 4.8) * 0.008;
      baby.quaternion.copy(this._babyBase.quaternion);
      baby.rotateZ(Math.sin(this.swayTime * 4.8) * 0.022);
    }
    this.halo.scale.setScalar(1 + Math.sin(this.swayTime * 5) * 0.045);
    super.update(dt);
  }

  exit() {
    this._restoreBabyBase();
    this._babyBase = null;
    super.exit();
  }

  dispose() {
    this._restoreBabyBase();
    this._babyBase = null;
    super.dispose();
  }
}

export default CuddleMode;
