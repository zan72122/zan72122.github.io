/* ========================================================================== 
 * activities/lotion.js — ほっぺとおててのクリーム遊び
 * ========================================================================== */

import * as THREE from 'three';
import * as S from './_shared.js';
import { checkAssist, waitGame } from './assist-utils.js';
import {
  CareActivityBase, roundedMesh, softMaterial, target
} from './care/common.js';
import {
  addRubSegment, isValidLotionRub, LOTION_RUB_MIN_DISTANCE
} from './care/interaction-rules.js';

const SPOT_DEFS = Object.freeze([
  { id: 'cheek-left', label: 'ひだりの ほっぺ', kind: 'cheek', side: 1 },
  { id: 'cheek-right', label: 'みぎの ほっぺ', kind: 'cheek', side: -1 },
  { id: 'hand-left', label: 'ひだりの おてて', kind: 'hand', side: 'left' },
  { id: 'hand-right', label: 'みぎの おてて', kind: 'hand', side: 'right' }
]);

// The hand spots span wider than the face. Preserve that horizontal span on
// narrow phones, then park the used bottle beside (not over) the right hand.
const LOTION_MIN_ASPECT = 0.72;
const BOTTLE_PUMP_X = 0.28;
const BOTTLE_PARK_X = 0.36;
const LOTION_TRACE_STEP_PX = 7;
const LOTION_TRACE_WORLD_PER_PX = 0.0007;

export class LotionActivity extends CareActivityBase {
  constructor(ctx) {
    super(ctx, 'lotion');
    this.pumped = false;
    this.done = false;
    this.spots = [];
    this._drag = null;
    this._world = new THREE.Vector3();
    this._offset = new THREE.Vector3();
    this._q = new THREE.Quaternion();
    this._traceFrom = new THREE.Vector3();
    this._traceTo = new THREE.Vector3();
    this._stagedTrail = [];
    this._pendingCompletion = null;
  }

  async build() {
    this.mount();
    this.ctx.cameraRig?.overridePreset?.('closeup', {
      space: 'subject', pos: [0.68, 0.55, 1.26], target: [0.09, 0.31, 0.02],
      fov: 36, focusRange: 0.20, dof: 0.78, minAspect: LOTION_MIN_ASPECT
    });

    this.bottle = new THREE.Group();
    this.bottle.name = 'cream-pump';
    this.bottle.userData.pickId = 'pump';
    this.bottle.position.set(BOTTLE_PUMP_X, 0, 0.16);
    const body = roundedMesh([0.13, 0.22, 0.105], 0xffe1ec, 0.030,
      { roughness: 0.46, clearcoat: 0.62 });
    body.position.y = 0.11;
    this.bottle.add(body);
    const collar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.045, 0.052, 0.034, 16),
      softMaterial(0xff9fc1, { roughness: 0.42, clearcoat: 0.68 })
    );
    collar.position.y = 0.238;
    this.bottle.add(collar);
    this.pump = roundedMesh([0.12, 0.032, 0.045], 0xff9fc1, 0.012,
      { roughness: 0.40, clearcoat: 0.70 });
    this.pump.position.set(0.025, 0.275, 0);
    this.bottle.add(this.pump);
    this.pumpTarget = target(this.bottle, 'pump', 0.15, [0, 0.18, 0]);
    this.root.add(this.bottle);

    for (const def of SPOT_DEFS) {
      const material = softMaterial(0xfff8df, {
        roughness: 0.34, clearcoat: 0.72, opacity: 0.94
      });
      const cream = new THREE.Mesh(new THREE.SphereGeometry(0.019, 12, 8), material);
      cream.scale.set(1.25, 0.48, 1);
      cream.castShadow = false;
      cream.visible = false;
      cream.userData.pickId = `spot:${def.id}`;
      this.root.add(cream);
      const proxy = target(this.root, `spot:${def.id}`, def.kind === 'cheek' ? 0.070 : 0.080);
      this.spots.push({ ...def, cream, proxy, progress: 0, finished: false });
    }
  }

  async enter() {
    this._entered = true;
    this.placeBaby('sit', [0, 0.01, -0.03]);
    this.ctx.baby?.setMood?.('happy');
    this._syncSpots();
    this.ctx.baby?.lookAt?.(this.bottle.getWorldPosition(new THREE.Vector3()));
    this._advise();
  }

  _syncSpots() {
    const baby = this.ctx.baby;
    if (!baby?.group) return;
    baby.group.getWorldQuaternion(this._q);
    for (const spot of this.spots) {
      if (spot.kind === 'cheek') {
        baby.headWorldPos?.(this._world);
        this._offset.set(spot.side * 0.043, -0.012, 0.072).applyQuaternion(this._q);
        this._world.add(this._offset);
      } else {
        baby.handWorldPos?.(spot.side, this._world);
        this._offset.set(spot.side === 'left' ? 0.010 : -0.010, 0.008, 0.018)
          .applyQuaternion(this._q);
        this._world.add(this._offset);
      }
      this.worldToRoot(this._world, spot.cream.position);
      spot.proxy.position.copy(spot.cream.position);
    }
  }

  _advise() {
    if (this.done || this._pendingCompletion) { this.ctx.ui?.hidePrompt?.(); return; }
    if (!this.pumped) {
      this.ctx.ui?.prompt?.('ポンプを おしてね', { icon: 'lotion', target: this.bottle });
      return;
    }
    const spot = this.spots.find((entry) => !entry.finished);
    if (spot) this.ctx.ui?.prompt?.(`${spot.label}を くるくる`,
      { icon: 'hand', target: spot.proxy });
  }

  _nextTarget() {
    if (!this.pumped) return this.bottle;
    return this.spots.find((entry) => !entry.finished)?.proxy || this.root;
  }

  getAssistStep() {
    if (!this._entered || this.done || this._drag || this._pendingCompletion) return null;
    if (!this.pumped) {
      return { id: 'pump', label: 'ポンプを おす', icon: 'lotion', target: this.bottle };
    }
    const spot = this.spots.find((entry) => !entry.finished);
    return spot ? {
      id: `rub:${spot.id}`, label: `${spot.label}に ぬる`, icon: 'hand', target: spot.proxy
    } : null;
  }

  async runAssistStep(stepId, { signal } = {}) {
    checkAssist(signal);
    if (this.getAssistStep()?.id !== stepId) return;
    if (stepId === 'pump') {
      this._pump();
      await waitGame(this.ctx, 0.42, signal);
      return;
    }
    const spot = this.spots.find((entry) => `rub:${entry.id}` === stepId);
    const final = this.spots.filter((entry) => !entry.finished).length === 1;
    if (!this._finishSpot(spot, { commit: !final })) return;
    try {
      await waitGame(this.ctx, 0.42, signal);
      checkAssist(signal);
      if (final && this._entered) this._complete();
      else if (final) this._rollbackCompletion();
    } catch (error) {
      if (final) this._rollbackCompletion();
      throw error;
    }
  }

  _pump() {
    if (this.pumped || this.done) return;
    this.pumped = true;
    this._retirePump();
    this.pump.position.y -= 0.018;
    this.clock.after(0.18, () => { this.pump.position.y += 0.018; });
    for (const spot of this.spots) spot.cream.visible = true;
    S.play(this.ctx, 'bath.pump', { gain: 0.45 });
    S.burst(this.ctx, 'sparkle', this.bottle.getWorldPosition(new THREE.Vector3()), 3,
      { color: 0xfff1a8 });
    this._advise();
  }

  /** Once used, the decorative bottle must not win a ray meant for a hand. */
  _retirePump({ animate = true } = {}) {
    delete this.bottle.userData.pickId;
    delete this.pumpTarget.userData.pickId;
    if (!animate) {
      this.clock.cancelTag('park-pump');
      this.bottle.position.x = BOTTLE_PARK_X;
      return;
    }
    const startX = this.bottle.position.x;
    this.clock.tween(0.32, (t) => {
      this.bottle.position.x = THREE.MathUtils.lerp(startX, BOTTLE_PARK_X, t);
    }, { tag: 'park-pump' });
  }

  _finishSpot(spot, { commit = true } = {}) {
    if (!spot || spot.finished || this.done) return false;
    if (!commit) {
      this._pendingCompletion = {
        spot, progress: spot.progress, visible: spot.cream.visible
      };
    }
    spot.progress = 1;
    spot.finished = true;
    spot.cream.visible = false;
    const from = spot.proxy.position.clone().add(new THREE.Vector3(-0.025, -0.004, 0.026));
    const to = spot.proxy.position.clone().add(new THREE.Vector3(0.025, 0.006, 0.026));
    this.marks.cream(from, to);
    S.play(this.ctx, 'feed.wipe', { rate: 0.98, gain: 0.36 });
    S.burst(this.ctx, 'sparkle', spot.proxy.getWorldPosition(new THREE.Vector3()), 2,
      { color: 0xffeab8 });
    if (this.spots.every((entry) => entry.finished)) {
      if (commit) this._complete();
      else this._advise();
    }
    else this._advise();
    return true;
  }

  _complete() {
    if (this.done) return;
    this._pendingCompletion = null;
    this.done = true;
    S.bumpMeter(this.ctx, 'happy', 0.04);
    S.award(this.ctx, 1);
    S.mood(this.ctx, 'giggle');
    S.gesture(this.ctx, ['kick', 'clap']);
    S.burst(this.ctx, 'heart', this.ctx.baby?.focusPoint?.() || new THREE.Vector3(), 5);
    S.play(this.ctx, 'giggle', { gain: 0.48 });
    this.ctx.ui?.toast?.('もちもち！', { icon: 'lotion' });
    this.ctx.ui?.hidePrompt?.();
  }

  _rollbackCompletion() {
    const pending = this._pendingCompletion;
    if (!pending) return;
    this._pendingCompletion = null;
    pending.spot.finished = false;
    pending.spot.progress = pending.progress;
    pending.spot.cream.visible = pending.visible;
    this._applySpotProgress(pending.spot, pending.progress);
    if (this._entered) this._advise();
  }

  _applySpotProgress(spot, progress) {
    spot.progress = S.clamp(progress, 0, 1);
    const scale = 1 - spot.progress * 0.68;
    spot.cream.scale.set(1.25 * scale, 0.48 * scale, scale);
    spot.cream.material.opacity = 0.94 * (1 - spot.progress * 0.78);
  }

  _tracePoint(drag, x, y, out) {
    const dx = S.clamp((x - drag.startX) * LOTION_TRACE_WORLD_PER_PX, -0.048, 0.048);
    const dy = S.clamp((drag.startY - y) * LOTION_TRACE_WORLD_PER_PX, -0.048, 0.048);
    return out.copy(drag.spot.cream.position).add(new THREE.Vector3(dx, dy, 0.026));
  }

  _traceRub(drag, x, y) {
    if (Math.hypot(x - drag.traceX, y - drag.traceY) < LOTION_TRACE_STEP_PX) return;
    this._tracePoint(drag, drag.traceX, drag.traceY, this._traceFrom);
    this._tracePoint(drag, x, y, this._traceTo);
    this.marks.cream(this._traceFrom, this._traceTo);
    drag.traceX = x;
    drag.traceY = y;
  }

  _holdTrail(spot, from, to) {
    const entry = this.marks.cream(from, to, { hold: true });
    if (!entry) return;
    this._stagedTrail.push({
      entry, spot,
      offset: entry.object.position.clone().sub(spot.cream.position)
    });
  }

  _syncStagedTrail() {
    for (const staged of this._stagedTrail) {
      if (!this.marks.active.has(staged.entry)) continue;
      staged.entry.object.position.copy(staged.spot.cream.position).add(staged.offset);
    }
  }

  /** Visual-only deterministic stage used by the screenshot harness. */
  onState(patch = {}) {
    this._pendingCompletion = null;
    if (patch.pumped === true) {
      this.pumped = true;
      this._retirePump({ animate: false });
      for (const spot of this.spots) spot.cream.visible = true;
    }
    if (typeof patch.rubbed === 'number') {
      this.pumped = true;
      this._retirePump({ animate: false });
      const rubbed = S.clamp(Math.floor(patch.rubbed), 0, this.spots.length);
      for (let i = 0; i < this.spots.length; i++) {
        const spot = this.spots[i];
        spot.finished = i < rubbed;
        spot.progress = spot.finished ? 1 : 0;
        spot.cream.visible = !spot.finished;
        spot.cream.scale.set(1.25, 0.48, 1);
        spot.cream.material.opacity = 0.94;
      }
      this.done = rubbed >= this.spots.length;
      this.ctx.baby?.setMood?.(this.done ? 'happy' : 'neutral');
    }
    this._syncSpots();
    this.marks.clear();
    this._stagedTrail = [];
    if (patch.trailFx === true && !this.done) {
      const spot = this.spots.find((entry) => !entry.finished);
      if (spot) {
        const from = spot.cream.position.clone().add(new THREE.Vector3(-0.034, -0.012, 0.026));
        const mid = spot.cream.position.clone().add(new THREE.Vector3(0.006, 0.018, 0.026));
        const to = spot.cream.position.clone().add(new THREE.Vector3(0.038, -0.004, 0.026));
        this._holdTrail(spot, from, mid);
        this._holdTrail(spot, mid, to);
      }
    }
    this._advise();
  }

  onPointer(p) {
    if (!this._entered || this.done) return;
    if (p.type === 'down') {
      const picked = this.pick(p);
      if (!this.pumped && picked?.id === 'pump') { this._pump(); return; }
      if (this.pumped && picked?.id?.startsWith('spot:')) {
        const spot = this.spots.find((entry) => `spot:${entry.id}` === picked.id);
        if (spot && !spot.finished) {
          this._drag = {
            spot, x: p.x, y: p.y, startProgress: spot.progress,
            startX: p.x, startY: p.y, traceX: p.x, traceY: p.y,
            travel: 0, turn: 0, reversals: 0, lastDx: 0, lastDy: 0
          };
          return;
        }
      }
      this.misstep(picked?.node, this._nextTarget());
      this._advise();
    } else if (p.type === 'move' && this._drag) {
      const dx = p.x - this._drag.x, dy = p.y - this._drag.y;
      this._drag = addRubSegment(this._drag, dx, dy);
      this._drag.x = p.x; this._drag.y = p.y;
      this._traceRub(this._drag, p.x, p.y);
      const spot = this._drag.spot;
      const shaped = isValidLotionRub(this._drag);
      const raw = this._drag.startProgress + this._drag.travel / LOTION_RUB_MIN_DISTANCE;
      this._applySpotProgress(spot, Math.min(raw, shaped ? 1 : 0.88));
    } else if ((p.type === 'up' || p.type === 'cancel') && this._drag) {
      const drag = this._drag;
      this._drag = null;
      if (p.type === 'up' && isValidLotionRub(drag)) this._finishSpot(drag.spot);
      else {
        this._applySpotProgress(drag.spot, drag.startProgress);
        if (p.type !== 'cancel') this.misstep(drag.spot.cream, drag.spot.proxy);
        this._advise();
      }
    }
  }

  update(dt) {
    if (this._entered && !this.done) {
      this._syncSpots();
      this._syncStagedTrail();
    }
    // Apply clock-owned miss feedback after cream spots follow the baby.
    super.update(dt);
  }

  async exit() {
    if (this._drag) this._applySpotProgress(this._drag.spot, this._drag.startProgress);
    this._drag = null;
    this._stagedTrail = [];
    this._rollbackCompletion();
    await super.exit();
  }

  dispose() {
    this._stagedTrail = [];
    this._rollbackCompletion();
    super.dispose();
  }
}
