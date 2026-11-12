/* activities/diaper.js — おむつ替え（常時被覆・失敗なし） */

import * as THREE from 'three';
import * as S from './_shared.js';
import { checkAssist, waitGame } from './assist-utils.js';
import {
  CareActivityBase, roundedMesh, target
} from './care/common.js';
import {
  animateUsedToPail, buildGentleIndicator, buildPail, DIAPER_PAIL_SECONDS,
  keepUsedAtPailRim, stageUsedToPail
} from './care/diaper-visuals.js';

const STEPS = Object.freeze([
  ['old-left', 'ひだりの テープを はずす', 'hand'],
  ['old-right', 'みぎの テープを はずす', 'hand'],
  ['old-to-pail', 'おむつを ふたつきボックスへ', 'diaper'],
  ['wipe', 'おしりふきで すーっ', 'hand'],
  ['clean', 'あたらしい おむつを おく', 'diaper'],
  ['new-left', 'ひだりの テープを とめる', 'hand'],
  ['new-right', 'みぎの テープを とめる', 'hand']
]);

export class DiaperActivity extends CareActivityBase {
  constructor(ctx) {
    super(ctx, 'diaper');
    this.step = 0;
    this.wipePasses = 0;
    this.done = false;
    this._drag = null;
    this._busy = false;
    this._pendingCompletion = false;
    this._pendingTabX = 0;
    this._t = 0;
  }

  async build() {
    this.mount();
    // Align the lie pose and every waist prop with the mat's long axis.
    this.root.rotateY(Math.PI / 2);
    // Keep the camera in the authored mat frame, not the rotated baby frame.
    this.cameraAnchor = new THREE.Object3D();
    this.cameraAnchor.name = 'diaper-camera-anchor';
    this.cameraAnchor.rotation.y = -Math.PI / 2;
    this.root.add(this.cameraAnchor);
    this.ctx.cameraRig?.overridePreset?.('closeup', {
      space: 'subject', pos: [0.62, 0.98, 1.08], target: [0, 0.13, -0.04],
      fov: 38, focusRange: 0.24, dof: 0.74, minAspect: 0.46
    });

    // This soft cloth covers the waist throughout the activity. The baby's
    // real diaper remains underneath it even while the two visual props swap.
    this.privacy = roundedMesh([0.38, 0.020, 0.38], 0xffeef4, 0.038,
      { roughness: 0.88, clearcoat: 0.08 });
    this.privacy.position.set(0, 0.132, -0.10);
    this.root.add(this.privacy);

    this.used = roundedMesh([0.27, 0.032, 0.23], 0xfff7dc, 0.045,
      { roughness: 0.76, clearcoat: 0.12 });
    this.used.position.set(0, 0.145, 0.035);
    this.usedHome = this.used.position.clone();
    this.used.userData.pickId = 'old-to-pail';
    this.root.add(this.used);
    target(this.used, 'old-to-pail', 0.15);

    this.oldTabs = this._makeTabs('old', 0xffd08f);
    this.newCover = roundedMesh([0.27, 0.034, 0.23], 0xfffdf8, 0.045,
      { roughness: 0.72, clearcoat: 0.16 });
    this.newCover.position.copy(this.used.position);
    this.newCover.visible = false;
    this.root.add(this.newCover);
    this.newTabs = this._makeTabs('new', 0xff9fc2);
    this.newTabs.forEach((tab) => { tab.visible = false; });

    ({ pail: this.pail, lid: this.pailLid } = buildPail(this.root));
    this._buildWipes();
    this._buildCleanDiaper();
    this.indicator = buildGentleIndicator(this.root);
  }

  _makeTabs(prefix, color) {
    return [-1, 1].map((side, index) => {
      const tab = roundedMesh([0.075, 0.018, 0.065], color, 0.009);
      tab.position.set(side * 0.145, 0.164, 0.035);
      tab.userData.side = side;
      tab.userData.pickId = `${prefix}-${index ? 'right' : 'left'}`;
      this.root.add(tab);
      target(tab, `${prefix}-${index ? 'right' : 'left'}`, 0.072);
      return tab;
    });
  }

  _buildWipes() {
    this.wipePack = roundedMesh([0.20, 0.075, 0.13], 0xc7dcff, 0.026);
    this.wipePack.position.set(-0.26, 0.038, 0);
    this.root.add(this.wipePack);
    this.wipe = roundedMesh([0.13, 0.009, 0.10], 0xffffff, 0.018,
      { roughness: 0.95, clearcoat: 0.02 });
    this.wipe.position.set(-0.26, 0.081, 0);
    this.wipe.userData.pickId = 'wipe';
    this.root.add(this.wipe);
    target(this.wipe, 'wipe', 0.09);
    this.wipeHome = this.wipe.position.clone();
    this.wipeZone = new THREE.Object3D();
    this.wipeZone.name = 'wipe-zone';
    this.wipeZone.position.set(0, 0.18, 0.035);
    this.root.add(this.wipeZone);
  }

  _buildCleanDiaper() {
    this.clean = roundedMesh([0.19, 0.055, 0.15], 0xffffff, 0.026,
      { roughness: 0.76, clearcoat: 0.14 });
    this.clean.position.set(-0.34, 0.028, 0.05);
    this.clean.userData.pickId = 'clean';
    this.root.add(this.clean);
    target(this.clean, 'clean', 0.12);
  }

  async enter() {
    this._entered = true;
    this.placeBaby('lie');
    this.ctx.cameraRig?.setSubject?.(this.cameraAnchor);
    this.ctx.baby?.setOutfitPreview?.({
      top: false, bottom: false, socks: false, shoes: false, diaper: true
    });
    this.ctx.baby?.setMood?.('neutral');
    this._advise();
  }

  _advise() {
    const spec = STEPS[this.step];
    if (!spec || this.done) { this.ctx.ui?.hidePrompt?.(); return; }
    const targetObject = this._targetForStep(spec[0]);
    const suffix = spec[0] === 'wipe' ? ` ${this.wipePasses + 1}/3` : '';
    this.ctx.ui?.prompt?.(spec[1] + suffix, { icon: spec[2], target: targetObject });
  }

  _targetForStep(id) {
    if (id === 'old-left') return this.oldTabs[0];
    if (id === 'old-right') return this.oldTabs[1];
    if (id === 'old-to-pail') return this.used;
    if (id === 'wipe') return this.wipe;
    if (id === 'clean') return this.clean;
    if (id === 'new-left') return this.newTabs[0];
    if (id === 'new-right') return this.newTabs[1];
    return this.root;
  }

  getAssistStep() {
    if (!this._entered || this.done || this._busy || this._pendingCompletion) return null;
    const [base, label, icon] = STEPS[this.step];
    const id = base === 'wipe' ? `wipe:${this.wipePasses + 1}` : base;
    return { id, label, icon, target: this._targetForStep(base) };
  }

  async runAssistStep(stepId, { signal } = {}) {
    checkAssist(signal);
    if (this.getAssistStep()?.id !== stepId) return;
    const action = STEPS[this.step][0];
    const final = action === 'new-right';
    this._perform(action, { commit: !final });
    try {
      const settle = action === 'old-to-pail' ? DIAPER_PAIL_SECONDS + 0.10 : 0.38;
      await waitGame(this.ctx, settle, signal);
      checkAssist(signal);
      if (final && this._entered) this._complete();
      else if (final) this._rollbackCompletion();
    } catch (error) {
      if (final) this._rollbackCompletion();
      throw error;
    }
  }

  _perform(id, { commit = true } = {}) {
    if (this.done || this._busy || id !== STEPS[this.step]?.[0]) return false;
    if (id === 'old-left' || id === 'old-right') {
      const index = id.endsWith('right') ? 1 : 0;
      this.oldTabs[index].rotation.z = (index ? -1 : 1) * 0.72;
      S.play(this.ctx, 'zip', { gain: 0.45 });
      this.step++;
    } else if (id === 'old-to-pail') {
      this._busy = true;
      this.oldTabs.forEach((tab) => { tab.visible = false; });
      this.indicator.forEach((puff) => { puff.visible = false; });
      S.play(this.ctx, 'sleep.pat', { rate: 0.84, gain: 0.5 });
      animateUsedToPail(this.clock, this.used, this.pail, this.pailLid, () => {
        this.used.visible = false;
        this.step++;
        this._busy = false;
        this._advise();
      });
    } else if (id === 'wipe') {
      this._wipeOnce();
    } else if (id === 'clean') {
      this._busy = true;
      const from = this.clean.position.clone();
      const to = this.usedHome.clone();
      S.play(this.ctx, 'dress.rustle', { gain: 0.45 });
      this.clock.tween(0.32, (t) => {
        this.clean.position.lerpVectors(from, to, S.EASE.cubicOut(t));
      }, { onDone: () => {
        this.clean.visible = false;
        this.newCover.visible = true;
        this.newTabs.forEach((tab) => { tab.visible = true; });
        this.step++;
        this._busy = false;
        this._advise();
      } });
    } else if (id === 'new-left' || id === 'new-right') {
      const index = id.endsWith('right') ? 1 : 0;
      if (!commit) this._pendingTabX = this.newTabs[index].position.x;
      this.newTabs[index].position.x *= 0.68;
      S.play(this.ctx, 'tap', { rate: 1.12, gain: 0.45 });
      this.step++;
      if (this.step >= STEPS.length) {
        if (commit) this._complete();
        else this._pendingCompletion = true;
      }
    }
    if (!this._busy) this._advise();
    return true;
  }

  _wipeOnce() {
    if (this.step !== 3 || this.wipePasses >= 3) return;
    this.wipePasses++;
    this.wipe.position.set((this.wipePasses - 2) * 0.055, 0.195, 0.04);
    S.burst(this.ctx, 'sparkle', this.wipe.getWorldPosition(new THREE.Vector3()), 2,
      { color: 0xcceeff });
    S.play(this.ctx, 'wipe', { rate: 0.96 + this.wipePasses * 0.04, gain: 0.38 });
    if (this.wipePasses >= 3) {
      this.step++;
      this.wipe.position.copy(this.wipeHome);
    }
  }

  _complete() {
    if (this.done) return;
    this._pendingCompletion = false;
    this.done = true;
    this.ctx.state?.completeDiaperChange?.();
    S.bumpMeter(this.ctx, 'clean', 0.08);
    S.bumpMeter(this.ctx, 'happy', 0.06);
    S.award(this.ctx, 2);
    S.mood(this.ctx, 'giggle');
    S.gesture(this.ctx, ['clap', 'kick']);
    S.burst(this.ctx, 'heart', this.ctx.baby?.focusPoint?.() || new THREE.Vector3(), 7);
    S.play(this.ctx, 'ui.star', { gain: 0.55 });
    this.ctx.ui?.toast?.('さっぱり！', { icon: 'diaper' });
    this.ctx.ui?.hidePrompt?.();
  }

  _rollbackCompletion() {
    if (!this._pendingCompletion) return;
    this._pendingCompletion = false;
    this.step = STEPS.length - 1;
    this.newTabs[1].position.x = this._pendingTabX;
    if (this._entered) this._advise();
  }

  /** Deterministic screenshot stages; these never grant rewards or save. */
  onState(patch = {}) {
    if (patch.step === 'pail') {
      this.clock.cancelTag('diaper-pail');
      this._busy = false;
      this._pendingCompletion = false;
      this.step = 2;
      this.wipePasses = 0;
      this.done = false;
      this.used.visible = true;
      this.used.position.copy(this.usedHome);
      this.used.scale.setScalar(1);
      this.used.rotation.set(0, 0, 0);
      this.oldTabs.forEach((tab) => { tab.visible = false; });
      this.indicator.forEach((puff) => { puff.visible = false; });
      stageUsedToPail(this.used, this.pail, this.pailLid, 0.66);
      this.clean.visible = true;
      this.newCover.visible = false;
      this.newTabs.forEach((tab) => { tab.visible = false; });
      this._advise();
    } else if (patch.step === 'wipe') {
      this._pendingCompletion = false;
      this.step = 3;
      this.wipePasses = 0;
      this.done = false;
      this.used.visible = false;
      this.oldTabs.forEach((tab) => { tab.visible = false; });
      this.indicator.forEach((puff) => { puff.visible = false; });
      this.pailLid.rotation.z = 0;
      this.clean.visible = true;
      this.newCover.visible = false;
      this.newTabs.forEach((tab) => { tab.visible = false; });
      this.wipe.position.set(0, 0.195, 0.04);
      this._advise();
    } else if (patch.step === 'complete') {
      this._pendingCompletion = false;
      this.step = STEPS.length;
      this.wipePasses = 3;
      this.done = true;
      this.used.visible = false;
      this.oldTabs.forEach((tab) => { tab.visible = false; });
      this.indicator.forEach((puff) => { puff.visible = false; });
      this.clean.visible = false;
      this.newCover.visible = true;
      this.newTabs.forEach((tab) => {
        tab.visible = true;
        tab.position.x = Math.sign(tab.position.x || 1) * 0.099;
      });
      this.ctx.baby?.setMood?.('happy');
      this.ctx.ui?.hidePrompt?.();
    }
  }

  onPointer(p) {
    if (!this._entered || this.done || this._busy) return;
    if (p.type === 'down') {
      const expected = STEPS[this.step]?.[0];
      const picked = this.pick(p);
      if (this.step === 2 && picked?.id === 'old-to-pail') {
        this._drag = this.beginPlaneDrag(this.used, picked.hit);
        if (!this._drag) return;
        this._drag.kind = 'old';
        this.oldTabs.forEach((tab) => { tab.visible = false; });
        return;
      }
      if (this.step === 3 && picked?.id === 'wipe') {
        this._drag = this.beginPlaneDrag(this.wipe, picked.hit);
        if (!this._drag) return;
        this._drag.kind = 'wipe';
        this._drag.crossed = false;
        return;
      }
      if (picked?.id !== expected || !this._perform(picked.id)) {
        this.misstep(picked?.node, this._targetForStep(expected));
        this._advise();
      }
    } else if (p.type === 'move' && this._drag) {
      const local = this.movePlaneDrag(p, this._drag, this._drag.kind === 'wipe'
        ? (point) => {
          point.x = S.clamp(point.x, -0.45, 0.22);
          point.y = S.clamp(point.y, 0.10, 0.26);
          point.z = S.clamp(point.z, -0.30, 0.18);
        }
        : (point) => keepUsedAtPailRim(point, this.pail.position, this.usedHome));
      if (local && this._drag.kind === 'wipe') {
        this._drag.crossed ||= Math.abs(local.x) <= 0.16 &&
          local.z >= -0.10 && local.z <= 0.15;
      }
    } else if ((p.type === 'up' || p.type === 'cancel') && this._drag) {
      const drag = this._drag;
      this._drag = null;
      if (p.type === 'cancel') {
        this.cancelPlaneDrag(drag);
        if (drag.kind === 'old') this.oldTabs.forEach((tab) => { tab.visible = true; });
        this._advise();
        return;
      }
      if (drag.kind === 'old') {
        const overPail = this.picker.cast(p, [this.pail], true).length > 0;
        if (overPail) this._perform('old-to-pail');
        else {
          this.cancelPlaneDrag(drag);
          this.oldTabs.forEach((tab) => { tab.visible = true; });
          this.misstep(this.used, this.pail);
          this._advise();
        }
      } else if (drag.crossed && drag.distance >= 0.065) this._perform('wipe');
      else {
        this.cancelPlaneDrag(drag);
        this.misstep(this.wipe, this.wipeZone);
        this._advise();
      }
    }
  }

  update(dt) {
    super.update(dt);
    this._t += dt;
    for (let i = 0; i < this.indicator.length; i++) {
      if (this.indicator[i].visible) this.indicator[i].position.y += Math.sin(this._t * 2 + i) * dt * 0.004;
    }
  }

  async exit() {
    if (this._drag) this.cancelPlaneDrag(this._drag);
    this._drag = null;
    this.clock.cancelTag('diaper-pail');
    this._busy = false;
    this._rollbackCompletion();
    this.ctx.baby?.setOutfitPreview?.(null);
    await super.exit();
  }

  dispose() {
    this._rollbackCompletion();
    this.ctx.baby?.setOutfitPreview?.(null);
    super.dispose();
  }
}
