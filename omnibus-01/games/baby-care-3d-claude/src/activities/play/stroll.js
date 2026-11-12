/* ===========================================================================
 * activities/play/stroll.js — one-finger, closed-garden stroller play
 * ========================================================================== */

import * as THREE from 'three';
import { snd } from '../../fx/toys.js';
import { checkAssist, tweenGame, waitGame } from '../assist-utils.js';
import { PlayModeBase, roundedMesh, softMaterial, target } from './mode-common.js';
import { STROLL_DISCOVERY_THRESHOLDS } from './rules.js';

const SETUP = Object.freeze(['buckle', 'canopy', 'bag']);
const NEXT = Object.freeze({ buckle: 'canopy', canopy: 'bag', bag: 'roll' });

function rectangleShape(x, y, width, height) {
  const shape = new THREE.Shape();
  shape.moveTo(x, y);
  shape.lineTo(x + width, y);
  shape.lineTo(x + width, y + height);
  shape.lineTo(x, y + height);
  shape.closePath();
  return shape;
}

export class StrollMode extends PlayModeBase {
  constructor(ctx, onComplete) {
    super(ctx, 'stroll', onComplete);
    this.phase = 'buckle';
    this.progress = 0;
    this.pressed = null;
    this.discovered = new Set();
    this._babyHome = null;
  }

  async build(parent, home) {
    this.mount(parent, home);
    this._buildBackdrop();
    this._buildStroller();
    this.finishBuild();
  }

  _buildBackdrop() {
    this.backdrop = new THREE.Group();
    this.backdrop.name = 'stroll-scrolling-backdrop';
    this.backdrop.position.set(0, 0.08, -0.34);
    this.root.add(this.backdrop);

    this.sky = new THREE.Mesh(
      this.res.geo(new THREE.PlaneGeometry(1.10, 0.64)),
      softMaterial(this.res, 0xdff2ff, { roughness: 0.9, clearcoat: 0.04 })
    );
    this.sky.position.y = 0.40;
    this.sky.receiveShadow = false;
    this.backdrop.add(this.sky);

    // Two merged silhouettes turn the panel into a toy garden without roads,
    // another world, or one draw call for every hill and fence slat.
    const gardenShapes = [rectangleShape(-0.55, 0.02, 1.10, 0.17)];
    for (const [x, y, rx, ry] of [
      [-0.38, 0.19, 0.22, 0.13], [-0.04, 0.17, 0.29, 0.16], [0.36, 0.19, 0.24, 0.13]
    ]) {
      const hill = new THREE.Shape();
      hill.absellipse(x, y, rx, ry, 0, Math.PI * 2, false, 0);
      gardenShapes.push(hill);
    }
    const garden = new THREE.Mesh(
      this.res.geo(new THREE.ShapeGeometry(gardenShapes, 12)),
      softMaterial(this.res, 0xaed9a5, { roughness: 0.92, clearcoat: 0.02 })
    );
    garden.name = 'stroll-garden-silhouette';
    garden.position.z = 0.012;
    this.backdrop.add(garden);

    const fenceShapes = [rectangleShape(-0.50, 0.115, 1.00, 0.025)];
    for (let i = 0; i < 7; i++) {
      fenceShapes.push(rectangleShape(-0.47 + i * 0.155, 0.055, 0.025, 0.19));
    }
    const fence = new THREE.Mesh(
      this.res.geo(new THREE.ShapeGeometry(fenceShapes, 4)),
      softMaterial(this.res, 0xffe2a5, { roughness: 0.74, clearcoat: 0.14 })
    );
    fence.name = 'stroll-garden-fence';
    fence.position.z = 0.020;
    this.backdrop.add(fence);

    this.scenery = new THREE.Group();
    this.scenery.name = 'stroll-moving-scenery';
    this.backdrop.add(this.scenery);
    const colors = [0xff9ebd, 0xffd76e, 0x8fd8c8];
    const names = ['bird', 'flower', 'cloud'];
    this.discoveries = names.map((name, index) => {
      const group = new THREE.Group();
      group.name = `stroll-${name}`;
      group.position.set(-0.34 + index * 0.34, 0.30 + (index % 2) * 0.15, 0.018);
      const mesh = new THREE.Mesh(
        this.res.geo(new THREE.CircleGeometry(0.065 + index * 0.006, 18)),
        softMaterial(this.res, colors[index], { roughness: 0.65, clearcoat: 0.25 })
      );
      if (name === 'bird') mesh.scale.set(1.35, 0.58, 1);
      if (name === 'cloud') mesh.scale.set(1.55, 0.72, 1);
      group.add(mesh);
      group.visible = false;
      this.scenery.add(group);
      return group;
    });
  }

  _buildStroller() {
    this.stroller = new THREE.Group();
    this.stroller.name = 'pastel-stroller';
    this.root.add(this.stroller);

    const seat = roundedMesh(this.res, [0.38, 0.24, 0.27], 0xffb7cf, 0.055,
      { roughness: 0.62, clearcoat: 0.30 });
    seat.position.set(0, 0.25, 0);
    seat.rotation.x = -0.12;
    this.stroller.add(seat);

    const frameMat = softMaterial(this.res, 0xf4c96b, { roughness: 0.40, clearcoat: 0.60 });
    for (const x of [-0.16, 0.16]) {
      const leg = new THREE.Mesh(this.res.geo(new THREE.CylinderGeometry(0.012, 0.012, 0.35, 10)), frameMat);
      leg.position.set(x, 0.16, 0);
      leg.rotation.z = x < 0 ? -0.25 : 0.25;
      this.stroller.add(leg);
    }

    const wheelMat = softMaterial(this.res, 0x6d7185, { roughness: 0.82, clearcoat: 0.1 });
    this.wheels = [];
    for (const x of [-0.20, 0.20]) {
      const wheel = new THREE.Mesh(this.res.geo(new THREE.TorusGeometry(0.075, 0.018, 10, 24)), wheelMat);
      wheel.position.set(x, 0.075, 0.02);
      wheel.rotation.y = Math.PI / 2;
      this.stroller.add(wheel);
      this.wheels.push(wheel);
    }

    this.canopy = new THREE.Group();
    this.canopy.name = 'stroller-canopy';
    this.canopy.position.set(0, 0.43, -0.06);
    const hood = new THREE.Mesh(
      this.res.geo(new THREE.SphereGeometry(0.22, 20, 10, 0, Math.PI, 0, Math.PI / 2)),
      softMaterial(this.res, 0xffe2a5, { roughness: 0.72, clearcoat: 0.18, opacity: 0.92 })
    );
    hood.scale.z = 0.70;
    hood.rotation.x = -Math.PI / 2;
    this.canopy.add(hood);
    target(this.res, this.canopy, 'stroll-canopy', 0.16, [0, 0.06, 0]);
    this.stroller.add(this.canopy);

    this.buckleLeft = roundedMesh(this.res, [0.08, 0.035, 0.025], 0xfff4dc, 0.012);
    this.buckleRight = this.buckleLeft.clone();
    this.buckleRight.geometry = this.res.geo(this.buckleLeft.geometry.clone());
    this.buckleRight.material = softMaterial(this.res, 0xfff4dc, { roughness: 0.55, clearcoat: 0.3 });
    this.buckleLeft.position.set(-0.08, 0.33, 0.15);
    this.buckleRight.position.set(0.08, 0.33, 0.15);
    this.stroller.add(this.buckleLeft, this.buckleRight);
    this.buckleTarget = target(this.res, this.stroller, 'stroll-buckle', 0.12, [0, 0.33, 0.15]);

    this.bag = roundedMesh(this.res, [0.13, 0.14, 0.08], 0x9edacb, 0.026,
      { roughness: 0.68, clearcoat: 0.22 });
    this.bag.name = 'stroller-care-bag';
    this.bag.position.set(0.30, 0.12, 0.12);
    target(this.res, this.bag, 'stroll-bag', 0.13);
    this.stroller.add(this.bag);
    this.rollTarget = target(this.res, this.stroller, 'stroll-roll', 0.36, [0, 0.28, 0]);
  }

  enter() {
    if (this.done) this.restart();
    super.enter();
    const baby = this.ctx.baby;
    if (baby?.group) {
      this._babyHome = {
        position: baby.group.position.clone(), quaternion: baby.group.quaternion.clone()
      };
      baby.group.position.copy(this.root.position).add(new THREE.Vector3(0, 0.13, -0.015));
      baby.group.rotation.set(0, 0.10, 0);
    }
    baby?.playPose?.('sit', { seconds: 0.45 });
    baby?.setMood?.('happy');
    baby?.lookAt?.(this.buckleTarget.getWorldPosition(new THREE.Vector3()));
    this._applyWeather();
    this._renderState();
    this.advise();
  }

  resetVisuals() {
    this.phase = 'buckle';
    this.progress = 0;
    this.pressed = null;
    this.discovered.clear();
    this._renderState();
  }

  _applyWeather() {
    const weather = this.ctx.state?.weather || 'clear';
    const colors = { clear: 0xdff2ff, rain: 0xd9e4ed, snow: 0xf4f7ff };
    this.sky.material.color.set(colors[weather] || colors.clear);
    this.discoveries[0].children[0].material.color.set(weather === 'rain' ? 0x8fb8d8 : 0xff9ebd);
  }

  _renderState() {
    const setupIndex = SETUP.indexOf(this.phase);
    const buckleDone = setupIndex > 0 || this.phase === 'roll' || this.phase === 'done';
    const canopyDone = setupIndex > 1 || this.phase === 'roll' || this.phase === 'done';
    const bagDone = this.phase === 'roll' || this.phase === 'done';
    this.buckleLeft.position.x = buckleDone ? -0.035 : -0.08;
    this.buckleRight.position.x = buckleDone ? 0.035 : 0.08;
    this.canopy.rotation.x = canopyDone ? 0 : -0.68;
    this.bag.position.set(bagDone ? 0.23 : 0.30, bagDone ? 0.34 : 0.12, 0.12);
    this.scenery.position.x = -this.progress * 0.32;
    for (const wheel of this.wheels) wheel.rotation.x = this.progress * 20;
    STROLL_DISCOVERY_THRESHOLDS.forEach((threshold, index) => {
      this.discoveries[index].visible = this.progress >= threshold;
      if (this.progress >= threshold) this.discovered.add(index); else this.discovered.delete(index);
    });
  }

  advise() {
    if (!this.active || this.done || this.pending) return;
    const copy = {
      buckle: ['ベルトを かちっ', 'check', this.buckleTarget],
      canopy: ['ほろを ひらこう', 'stroller', this.canopy],
      bag: ['バッグを かけよう', 'care-kit', this.bag],
      roll: ['ゆっくり おさんぽ', 'hand', this.rollTarget]
    }[this.phase];
    if (copy) this.ctx.ui?.prompt?.(copy[0], { icon: copy[1], target: copy[2] });
  }

  _advanceSetup() {
    const next = NEXT[this.phase];
    if (!next) return false;
    this.phase = next;
    this._renderState();
    snd(this.ctx, 'ui.tap', { gain: 0.55 });
    this.ctx.fx?.burst?.('sparkle', this.stroller.getWorldPosition(new THREE.Vector3()), 4);
    this.advise();
    return true;
  }

  _setProgress(value, celebrate = true) {
    const before = this.progress;
    this.progress = THREE.MathUtils.clamp(value, 0, 1);
    this._renderState();
    STROLL_DISCOVERY_THRESHOLDS.forEach((threshold, index) => {
      if (celebrate && before < threshold && this.progress >= threshold) {
        const at = this.discoveries[index].getWorldPosition(new THREE.Vector3());
        this.ctx.fx?.burst?.('sparkle', at, 6);
        this.ctx.baby?.gesture?.('wave');
        snd(this.ctx, 'baby.babble', { rate: 0.95 + index * 0.08, gain: 0.45 });
      }
    });
  }

  _finishWalk() {
    if (this.progress < 1 || this.done) return false;
    this.phase = 'done';
    this.ctx.baby?.setMood?.('giggle');
    this.ctx.baby?.gesture?.('clap');
    return this.complete({ prompt: 'おさんぽ たのしかったね', icon: 'stroller', at: this.stroller });
  }

  getAssistStep() {
    if (!this.active || this.done || this.pending || this.drag) return null;
    if (this.phase === 'buckle') return { id: 'stroll:buckle', label: 'ベルトを とめる', icon: 'check', target: this.buckleTarget };
    if (this.phase === 'canopy') return { id: 'stroll:canopy', label: 'ほろを ひらく', icon: 'stroller', target: this.canopy };
    if (this.phase === 'bag') return { id: 'stroll:bag', label: 'バッグを かける', icon: 'care-kit', target: this.bag };
    return { id: 'stroll:roll', label: 'ゆっくり すすむ', icon: 'hand', target: this.rollTarget };
  }

  previewAssistStep() {
    return { id: 'stroll:buckle', label: 'おさんぽの じゅんび', icon: 'stroller', target: null };
  }

  async runAssistStep(stepId, { signal } = {}) {
    checkAssist(signal);
    if (this.getAssistStep()?.id !== stepId) return;
    const snapshot = { phase: this.phase, progress: this.progress };
    const final = stepId === 'stroll:roll';
    this.pending = true;
    if (!final) this._advanceSetup();
    try {
      if (final) {
        const from = this.progress;
        await tweenGame(this.clock, 1.24,
          (t) => this._setProgress(from + (1 - from) * t), { signal });
      } else {
        await waitGame(this.ctx, 0.46, signal);
      }
      checkAssist(signal);
      if (!this.active) return;
      this.pending = false;
      if (final) this._finishWalk(); else this.advise();
    } catch (error) {
      if (!this.done) {
        this.pending = false;
        this.phase = snapshot.phase;
        this.progress = snapshot.progress;
        this._renderState();
        this.advise();
      }
      throw error;
    }
  }

  onPointer(pointer) {
    if (!this.active || this.done || this.pending) return;
    const expected = this.phase === 'roll' ? 'stroll-roll' : `stroll-${this.phase}`;
    if (pointer.type === 'down') {
      const got = this.pick(pointer, (id) => id === expected);
      if (!got) { this.misstep(this.stroller, this._targetForPhase()); return; }
      if (this.phase === 'roll') {
        this.drag = { startX: pointer.x, lastX: pointer.x, travel: 0, startProgress: this.progress };
      } else {
        this.pressed = expected;
      }
    } else if (pointer.type === 'move' && this.drag) {
      this.drag.travel += Math.abs(pointer.x - this.drag.lastX);
      this.drag.lastX = pointer.x;
      const width = this.ctx.renderer?.domElement?.clientWidth || 700;
      this._setProgress(this.drag.startProgress + this.drag.travel / Math.max(220, width * 0.62));
    } else if (pointer.type === 'cancel') {
      if (this.drag) this._setProgress(this.drag.startProgress, false);
      this.drag = null;
      this.pressed = null;
    } else if (pointer.type === 'up') {
      if (this.drag) {
        const moved = this.drag.travel;
        this.drag = null;
        if (this.progress >= 1) this._finishWalk();
        else if (moved < 8) this.misstep(this.stroller, this.rollTarget);
        this.advise();
      } else if (this.pressed === expected) {
        this.pressed = null;
        this._advanceSetup();
      }
    }
  }

  _targetForPhase() {
    return { buckle: this.buckleTarget, canopy: this.canopy, bag: this.bag, roll: this.rollTarget }[this.phase];
  }

  update(dt) {
    if (this.active && this.phase === 'roll' && this.progress > 0 && !this.done) {
      this.stroller.position.y = Math.sin(this.progress * 28) * 0.004;
    } else if (this.stroller) this.stroller.position.y = 0;
    super.update(dt);
  }

  _restoreBaby() {
    if (!this._babyHome || !this.ctx.baby?.group) return;
    this.ctx.baby.group.position.copy(this._babyHome.position);
    this.ctx.baby.group.quaternion.copy(this._babyHome.quaternion);
  }

  exit() {
    this._restoreBaby();
    this._babyHome = null;
    super.exit();
  }

  dispose() {
    this._restoreBaby();
    this._babyHome = null;
    super.dispose();
  }
}

export default StrollMode;
