/* ========================================================================== 
 * activities/hair.js — あかちゃんのかみとかし
 * ========================================================================== */

import * as THREE from 'three';
import * as S from './_shared.js';
import { checkAssist, waitGame } from './assist-utils.js';
import {
  CareActivityBase, roundedMesh, softMaterial, target
} from './care/common.js';
import { isValidHairStroke } from './care/interaction-rules.js';

const STROKE_GOAL = 4;

export class HairActivity extends CareActivityBase {
  constructor(ctx) {
    super(ctx, 'hair');
    this.strokes = 0;
    this.done = false;
    this._drag = null;
    this._head = new THREE.Vector3();
    this._localHead = new THREE.Vector3();
    this._brushHome = new THREE.Vector3();
    this._markPosition = new THREE.Vector3();
    this._strokeLock = 0;
    this._pendingCompletion = false;
    this._stagedMark = null;
    this._stagedMarkSide = 1;
  }

  async build() {
    this.mount();
    this.ctx.cameraRig?.overridePreset?.('closeup', {
      space: 'subject', pos: [0.55, 0.50, 1.12], target: [0, 0.39, 0.01],
      fov: 34, focusRange: 0.17, dof: 0.86, minAspect: 0.46
    });
    this.ctx.cameraRig?.overridePreset?.('face', {
      space: 'subject', pos: [0.40, 0.48, 0.87], target: [0, 0.41, 0.02],
      fov: 32, focusRange: 0.14, dof: 0.92, minAspect: 0.46
    });

    this.brush = new THREE.Group();
    this.brush.name = 'round-baby-brush';
    this.brush.userData.pickId = 'brush';
    const handle = roundedMesh([0.045, 0.18, 0.035], 0xff99bc, 0.016,
      { roughness: 0.48, clearcoat: 0.58 });
    handle.position.y = -0.105;
    this.brush.add(handle);
    const back = new THREE.Mesh(
      new THREE.SphereGeometry(0.065, 20, 14),
      softMaterial(0xffb3cd, { roughness: 0.46, clearcoat: 0.58 })
    );
    back.scale.set(0.82, 1, 0.36);
    back.castShadow = back.receiveShadow = true;
    this.brush.add(back);
    const bristleMat = softMaterial(0xfff3df, { roughness: 0.88, clearcoat: 0.05 });
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        const bristle = new THREE.Mesh(
          new THREE.CylinderGeometry(0.0025, 0.0032, 0.025, 6), bristleMat
        );
        bristle.rotation.x = Math.PI / 2;
        bristle.position.set(x * 0.026, y * 0.022, -0.032);
        this.brush.add(bristle);
      }
    }
    target(this.brush, 'brush', 0.105, [0, -0.045, 0]);
    this.root.add(this.brush);

    this.crown = target(this.root, 'crown', 0.105);
  }

  async enter() {
    this._entered = true;
    this.placeBaby('sit', [0, 0.01, -0.02]);
    this.ctx.baby?.setMood?.('shy');
    this._syncHead(true);
    this.ctx.baby?.lookAt?.(this.brush.getWorldPosition(new THREE.Vector3()));
    this._advise();
  }

  _syncHead(resetBrush = false) {
    const baby = this.ctx.baby;
    if (!baby) return;
    baby.headWorldPos?.(this._head);
    this.worldToRoot(this._head, this._localHead);
    this.crown.position.copy(this._localHead).add(new THREE.Vector3(0, 0.055, 0.020));
    this._brushHome.copy(this.crown.position).add(new THREE.Vector3(0.075, 0.015, 0.065));
    if (resetBrush || !this._drag) {
      this.brush.position.copy(this._brushHome);
      // Bristles face back toward the scalp; the handle extends out and down.
      this.brush.rotation.set(0.08, 0.12, 0.58);
    }
  }

  _advise() {
    if (this.done || this._pendingCompletion) { this.ctx.ui?.hidePrompt?.(); return; }
    this.ctx.ui?.prompt?.(`うえから すーっ ${this.strokes + 1}/${STROKE_GOAL}`,
      { icon: 'brush', target: this.brush });
  }

  _brushMarkPosition(side) {
    this._markPosition.copy(this._localHead);
    // Keep the streak over the crown even when portrait framing moves the
    // camera close; a large forward offset projects far outside the head.
    this._markPosition.x += side * 0.022;
    this._markPosition.y += 0.060;
    this._markPosition.z += 0.038;
    return this._markPosition;
  }

  _syncStagedMark() {
    if (!this._stagedMark) return;
    if (!this.marks.active.has(this._stagedMark)) {
      this._stagedMark = null;
      return;
    }
    this._stagedMark.object.position.copy(this._brushMarkPosition(this._stagedMarkSide));
  }

  getAssistStep() {
    if (!this._entered || this.done || this._drag || this._pendingCompletion) return null;
    return {
      id: `brush:${this.strokes + 1}`, label: 'かみを すーっ',
      icon: 'brush', target: this.brush
    };
  }

  async runAssistStep(stepId, { signal } = {}) {
    checkAssist(signal);
    if (this.getAssistStep()?.id !== stepId) return;
    const final = this.strokes === STROKE_GOAL - 1;
    if (!this._stroke(null, { commit: !final })) return;
    try {
      await waitGame(this.ctx, 0.48, signal);
      checkAssist(signal);
      if (final && this._entered) this._complete();
      else if (final) this._rollbackCompletion();
    } catch (error) {
      if (final) this._rollbackCompletion();
      throw error;
    }
  }

  _stroke(requestedSide = null, { commit = true } = {}) {
    if (this.done || this.strokes >= STROKE_GOAL) return false;
    const side = requestedSide === -1 || requestedSide === 1
      ? requestedSide : (this.strokes % 2 ? -1 : 1);
    this.strokes++;
    this._strokeLock = 0.30;
    this.brush.position.copy(this._localHead)
      .add(new THREE.Vector3(side * 0.085, -0.015, 0.065));
    this.brush.rotation.z = side * 0.58;
    this.ctx.baby?.setWind?.(new THREE.Vector3(side, 0.10, 0.24).normalize(), 0.54);
    this.clock.after(0.38, () => this.ctx.baby?.setWind?.(new THREE.Vector3(), 0));
    this.marks.brush(this._brushMarkPosition(side), side);
    S.burst(this.ctx, 'sparkle', this._head, 3, { color: 0xffe7a8 });
    S.play(this.ctx, 'brush', { rate: 0.96 + this.strokes * 0.025, gain: 0.40 });
    if (this.strokes >= STROKE_GOAL) {
      if (commit) this._complete();
      else { this._pendingCompletion = true; this._advise(); }
    }
    else {
      this.clock.after(0.30, () => this._syncHead(true));
      this._advise();
    }
    return true;
  }

  _complete() {
    if (this.done) return;
    this._pendingCompletion = false;
    this.done = true;
    S.bumpMeter(this.ctx, 'happy', 0.04);
    S.award(this.ctx, 1);
    S.mood(this.ctx, 'giggle');
    S.gesture(this.ctx, ['clap', 'wave']);
    S.burst(this.ctx, 'heart', this._head, 5);
    S.play(this.ctx, 'giggle', { gain: 0.50 });
    this.ctx.ui?.toast?.('さらさら！', { icon: 'brush' });
    this.ctx.ui?.hidePrompt?.();
  }

  _rollbackCompletion() {
    if (!this._pendingCompletion) return;
    this._pendingCompletion = false;
    this.strokes = STROKE_GOAL - 1;
    this._strokeLock = 0;
    this.ctx.baby?.setWind?.(new THREE.Vector3(), 0);
    this._syncHead(true);
    if (this._entered) this._advise();
  }

  /** Visual-only deterministic stage used by the screenshot harness. */
  onState(patch = {}) {
    if (typeof patch.strokes !== 'number') return;
    this.strokes = S.clamp(Math.floor(patch.strokes), 0, STROKE_GOAL);
    this._pendingCompletion = false;
    this.done = this.strokes >= STROKE_GOAL;
    this._strokeLock = 0;
    this.ctx.baby?.setWind?.(new THREE.Vector3(), 0);
    this.ctx.baby?.setMood?.(this.done ? 'happy' : 'shy');
    this._syncHead(true);
    this.marks.clear();
    this._stagedMark = null;
    if (patch.strokeFx === true && !this.done) {
      const side = this.strokes % 2 ? 1 : -1;
      this._stagedMarkSide = side;
      this._stagedMark = this.marks.brush(
        this._brushMarkPosition(side), side, { hold: true }
      );
    }
    this._advise();
  }

  onPointer(p) {
    if (!this._entered || this.done) return;
    if (p.type === 'down') {
      const crownHit = this.picker.cast(p, [this.crown], false).length > 0;
      if (!crownHit) {
        this.misstep(this.brush, this.crown);
        this._advise();
        return;
      }
      this._drag = {
        x: p.x, y: p.y, startX: p.x, startY: p.y,
        distance: 0, startedInCrown: true
      };
    } else if (p.type === 'move' && this._drag) {
      const dx = p.x - this._drag.x, dy = p.y - this._drag.y;
      this._drag.distance += Math.hypot(dx, dy);
      this._drag.x = p.x; this._drag.y = p.y;
      this.brush.position.x += dx * 0.0011;
      this.brush.position.y -= dy * 0.0011;
    } else if ((p.type === 'up' || p.type === 'cancel') && this._drag) {
      const dx = p.x - this._drag.startX;
      const dy = p.y - this._drag.startY;
      const valid = p.type !== 'cancel' && isValidHairStroke({
        startedInCrown: this._drag.startedInCrown,
        distance: this._drag.distance, dx, dy
      });
      this._drag = null;
      if (valid) this._stroke(dx < 0 ? -1 : 1);
      else {
        this._syncHead(true);
        if (p.type !== 'cancel') this.misstep(this.brush, this.crown);
        this._advise();
      }
    }
  }

  update(dt) {
    this._strokeLock = Math.max(0, this._strokeLock - dt);
    if (this._entered && !this._drag && !this.done && this._strokeLock <= 0) this._syncHead(false);
    this._syncStagedMark();
    // Apply clock-owned miss feedback after the tracked brush reaches home.
    super.update(dt);
  }

  async exit() {
    this._drag = null;
    this._stagedMark = null;
    this._rollbackCompletion();
    this.ctx.baby?.setWind?.(new THREE.Vector3(), 0);
    await super.exit();
  }

  dispose() {
    this._stagedMark = null;
    this._rollbackCompletion();
    this.ctx.baby?.setWind?.(new THREE.Vector3(), 0);
    super.dispose();
  }
}
