/* ===========================================================================
 * activities/care.js — おていれの4つの入り口
 * ========================================================================== */

import * as THREE from 'three';
import { checkAssist, waitGame } from './assist-utils.js';
import { DIAPER_NEED_ATTENTION } from '../game/state.js';
import { CareActivityBase } from './care/common.js';
import { buildHubProps } from './care/hub-props.js';
import { CareHubRoutine } from './care/hub-routine.js';

const CHOICES = Object.freeze([
  { id: 'dress', icon: 'onesie', label: 'きせかえ' },
  { id: 'diaper', icon: 'diaper', label: 'おむつ' },
  { id: 'hair', icon: 'brush', label: 'かみ' },
  { id: 'lotion', icon: 'lotion', label: 'クリーム' }
]);

export class CareHubActivity extends CareActivityBase {
  constructor(ctx) {
    super(ctx, 'care');
    this._choicePending = false;
  }

  async build() {
    this.mount();
    this.ctx.cameraRig?.overridePreset?.('closeup', {
      space: 'subject', pos: [0.76, 0.52, 1.28], target: [0.08, 0.28, 0.02],
      fov: 38, focusRange: 0.24, dof: 0.72, minAspect: 0.46
    });

    this.hubProps = buildHubProps(this.root);
    this.caddy = this.hubProps.caddy;
    this.hubRoutine = new CareHubRoutine(this, this.hubProps, {
      onReturn: () => this._returnToChoices()
    });
  }

  async enter() {
    this._entered = true;
    this.placeBaby('sit', [-0.08, 0.01, -0.03]);
    this.ctx.baby?.setMood?.('happy');
    this.caddy?.getWorldPosition?.(this._look ||= new THREE.Vector3());
    this.ctx.baby?.lookAt?.(this._look);
    this._showChoices();
    this.ctx.ui?.prompt?.('どの おていれに する？', { icon: 'care-kit' });
  }

  _showChoices() {
    this.ctx.ui?.setTools?.(CHOICES, (id) => {
      if (!this._entered || !CHOICES.some((choice) => choice.id === id)) return;
      this.ctx.ui?.pickActivity?.(id);
    });
  }

  /** Repaint the four choices when the already-active care button is tapped. */
  showChoices() {
    if (!this._entered) return;
    // The visible care button always means "back to these four choices".
    // Cancelling the runner first prevents an assist tween from committing
    // after the props have already been reset.
    if (this.hubRoutine?.active) {
      this.ctx.ui?.cancelAssist?.();
      this.hubRoutine.cancel();
    }
    this._returnToChoices();
  }

  _returnToChoices() {
    if (!this._entered) return;
    this._showChoices();
    this.ctx.ui?.prompt?.('どの おていれに する？', { icon: 'care-kit' });
    this.caddy?.getWorldPosition?.(this._look ||= new THREE.Vector3());
    this.ctx.baby?.lookAt?.(this._look);
  }

  getAssistStep() {
    if (this.hubRoutine?.active) return this.hubRoutine.getAssistStep();
    if (!this._entered || this._choicePending) return null;
    const needsDiaper = (this.ctx.state?.diaperNeed || 0) >= DIAPER_NEED_ATTENTION;
    if (!needsDiaper && !this.hubRoutine?.completed) {
      return this.hubRoutine?.getStartAssistStep?.() || null;
    }
    const id = needsDiaper ? 'diaper' : 'dress';
    const choice = CHOICES.find((item) => item.id === id);
    return {
      id: `choose:${id}`, label: `${choice.label}を えらぶ`,
      icon: choice.icon, target: this.caddy
    };
  }

  async runAssistStep(stepId, { signal } = {}) {
    checkAssist(signal);
    if (stepId === 'hub:start') {
      if (this.getAssistStep()?.id !== stepId) return;
      await waitGame(this.ctx, 0.16, signal);
      checkAssist(signal);
      this.hubRoutine?.start?.();
      return;
    }
    if (stepId?.startsWith('hub:')) {
      await this.hubRoutine?.runAssistStep?.(stepId, { signal });
      return;
    }
    if (this.getAssistStep()?.id !== stepId) return;
    const id = stepId.slice('choose:'.length);
    this._choicePending = true;
    try {
      // This beat is activity-owned: changing activity aborts it and no
      // detached timer can later override the child's newer choice.
      await waitGame(this.ctx, 0.16, signal);
      checkAssist(signal);
      if (!this._entered || this.ctx.app?.activity !== this) return;
      this.ctx.ui?.pickActivity?.(id);
    } finally {
      this._choicePending = false;
    }
  }

  onPointer(p) {
    this.hubRoutine?.onPointer?.(p);
  }

  update(dt) {
    super.update(dt);
    this.hubRoutine?.update?.(dt);
  }

  onState(patch = {}) {
    const mode = patch.hubRoutine || patch.careRoutine;
    if (!mode) return;
    this.hubRoutine?.stage?.({
      mode,
      remaining: Array.isArray(patch.remaining) ? patch.remaining : undefined,
      noseStrokes: patch.noseStrokes || 0
    });
  }

  async exit() {
    this.hubRoutine?.cancel?.();
    this.ctx.ui?.clearTools?.();
    await super.exit();
  }

  dispose() {
    this.hubRoutine?.dispose?.();
    this.ctx.ui?.clearTools?.();
    super.dispose();
  }
}

export { CHOICES as CARE_CHOICES };
