/* ===========================================================================
 * activities/play/prints.js — hand/foot-print keepsake card
 * ========================================================================== */

import * as THREE from 'three';
import { snd } from '../../fx/toys.js';
import { checkAssist, waitGame } from '../assist-utils.js';
import { PlayModeBase, roundedMesh, softMaterial, target } from './mode-common.js';
import { nextPrintPhase, PRINT_PHASES } from './rules.js';

const COLORS = Object.freeze([
  { id: 'blush', value: 0xff91b6 },
  { id: 'gold', value: 0xf5c451 },
  { id: 'mint', value: 0x78cdbb }
]);
const STICKERS = Object.freeze(['star', 'heart', 'circle']);

function ellipse(x, y, rx, ry) {
  const shape = new THREE.Shape();
  shape.absellipse(x, y, rx, ry, 0, Math.PI * 2, false, 0);
  return shape;
}

function handGeometry(scale = 1) {
  const shapes = [ellipse(0, -0.004, 0.032 * scale, 0.041 * scale)];
  const fingers = [-0.025, -0.013, 0, 0.013, 0.025];
  fingers.forEach((x, index) => {
    const height = [0.027, 0.037, 0.041, 0.035, 0.024][index] * scale;
    shapes.push(ellipse(x * scale, 0.034 * scale + height * 0.35,
      0.0065 * scale, height));
  });
  return new THREE.ShapeGeometry(shapes, 10);
}

function footGeometry(scale = 1) {
  const shapes = [ellipse(0, -0.008, 0.027 * scale, 0.055 * scale)];
  for (let i = 0; i < 5; i++) {
    shapes.push(ellipse((-0.022 + i * 0.011) * scale, (0.052 + Math.sin(i * 0.7) * 0.008) * scale,
      (0.0075 - i * 0.0006) * scale, (0.009 - i * 0.0006) * scale));
  }
  return new THREE.ShapeGeometry(shapes, 10);
}

function starShape(radius = 0.035) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const angle = -Math.PI / 2 + i * Math.PI / 5;
    const r = i % 2 ? radius * 0.48 : radius;
    const x = Math.cos(angle) * r, y = Math.sin(angle) * r;
    if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
  }
  shape.closePath();
  return shape;
}

function heartShape(radius = 0.034) {
  const shape = new THREE.Shape();
  shape.moveTo(0, -radius);
  shape.bezierCurveTo(-radius * 1.25, -radius * 0.2, -radius, radius, 0, radius * 0.42);
  shape.bezierCurveTo(radius, radius, radius * 1.25, -radius * 0.2, 0, -radius);
  return shape;
}

function stickerGeometry(id, radius = 0.035) {
  if (id === 'circle') return new THREE.CircleGeometry(radius, 20);
  return new THREE.ShapeGeometry(id === 'heart' ? heartShape(radius) : starShape(radius), 12);
}

export class PrintsMode extends PlayModeBase {
  constructor(ctx, onComplete) {
    super(ctx, 'prints', onComplete);
    this.phase = 'kind';
    this.kind = null;
    this.color = null;
    this.sticker = null;
    this.pressed = null;
    this._babyHome = null;
  }

  async build(parent, home) {
    this.mount(parent, home);
    this._buildCard();
    this._buildChoices();
    this._buildPad();
    this.finishBuild();
  }

  _buildCard() {
    this.card = roundedMesh(this.res, [0.39, 0.48, 0.025], 0xfff8e8, 0.028,
      { roughness: 0.82, clearcoat: 0.12 });
    this.card.name = 'print-keepsake-card';
    this.card.position.set(-0.22, 0.34, 0.02);
    this.root.add(this.card);
    const cardFace = new THREE.Mesh(
      this.res.geo(new THREE.PlaneGeometry(0.34, 0.43)),
      softMaterial(this.res, 0xfffdf6, { roughness: 0.92, clearcoat: 0.04 })
    );
    cardFace.name = 'print-card-paper-face';
    cardFace.position.set(-0.22, 0.34, 0.034);
    cardFace.receiveShadow = true;
    this.root.add(cardFace);

    this.printMaterial = softMaterial(this.res, COLORS[0].value,
      { roughness: 0.72, clearcoat: 0.18 });
    const handGeo = this.res.geo(handGeometry(0.82));
    const footGeo = this.res.geo(footGeometry(0.78));
    this.handStamps = [];
    this.footStamps = [];
    for (let index = 0; index < 2; index++) {
      const x = -0.29 + index * 0.14;
      const hand = new THREE.Mesh(handGeo, this.printMaterial);
      hand.name = `card-hand-${index}`;
      hand.position.set(x, 0.35, 0.039);
      hand.visible = false;
      this.root.add(hand);
      this.handStamps.push(hand);
      const foot = new THREE.Mesh(footGeo, this.printMaterial);
      foot.name = `card-foot-${index}`;
      foot.position.set(x, 0.35, 0.039);
      foot.visible = false;
      this.root.add(foot);
      this.footStamps.push(foot);
    }

    this.cardSticker = new THREE.Group();
    this.cardSticker.name = 'card-selected-sticker';
    this.cardSticker.position.set(-0.22, 0.49, 0.042);
    for (const [index, id] of STICKERS.entries()) {
      const mesh = new THREE.Mesh(
        this.res.geo(stickerGeometry(id, 0.036)),
        softMaterial(this.res, [0xf5c451, 0xff91b6, 0x78cdbb][index],
          { roughness: 0.52, clearcoat: 0.45 })
      );
      mesh.name = `card-sticker-${id}`;
      mesh.visible = false;
      this.cardSticker.add(mesh);
    }
    this.root.add(this.cardSticker);
  }

  _buildChoices() {
    this.kindChoices = new THREE.Group();
    this.kindChoices.name = 'print-kind-choices';
    const tokenMat = softMaterial(this.res, 0xffd5e3, { roughness: 0.58, clearcoat: 0.38 });
    [['hand', handGeometry(0.65)], ['foot', footGeometry(0.62)]].forEach(([id, geometry], index) => {
      const token = roundedMesh(this.res, [0.15, 0.13, 0.025], 0xfff1d5, 0.025);
      token.position.set(0.10 + index * 0.18, 0.15, 0.16);
      const mark = new THREE.Mesh(this.res.geo(geometry), tokenMat);
      mark.position.z = 0.015;
      token.add(mark);
      token.userData.pickId = `prints-kind-${id}`;
      target(this.res, token, `prints-kind-${id}`, 0.10);
      this.kindChoices.add(token);
    });
    this.root.add(this.kindChoices);

    this.colorChoices = new THREE.Group();
    this.colorChoices.name = 'print-color-choices';
    COLORS.forEach((choice, index) => {
      const mesh = new THREE.Mesh(
        this.res.geo(new THREE.SphereGeometry(0.060, 18, 12)),
        softMaterial(this.res, choice.value, { roughness: 0.45, clearcoat: 0.55 })
      );
      mesh.position.set(0.04 + index * 0.14, 0.15, 0.18);
      mesh.userData.pickId = `prints-color-${choice.id}`;
      target(this.res, mesh, `prints-color-${choice.id}`, 0.085);
      this.colorChoices.add(mesh);
    });
    this.root.add(this.colorChoices);

    this.stickerChoices = new THREE.Group();
    this.stickerChoices.name = 'print-sticker-choices';
    STICKERS.forEach((id, index) => {
      const mesh = new THREE.Mesh(
        this.res.geo(stickerGeometry(id, 0.055)),
        softMaterial(this.res, [0xf5c451, 0xff91b6, 0x78cdbb][index],
          { roughness: 0.48, clearcoat: 0.52 })
      );
      mesh.position.set(0.04 + index * 0.14, 0.15, 0.18);
      mesh.userData.pickId = `prints-sticker-${id}`;
      target(this.res, mesh, `prints-sticker-${id}`, 0.085);
      this.stickerChoices.add(mesh);
    });
    this.root.add(this.stickerChoices);
  }

  _buildPad() {
    this.pad = roundedMesh(this.res, [0.22, 0.035, 0.18], COLORS[0].value, 0.016,
      { roughness: 0.72, clearcoat: 0.16 });
    this.pad.name = 'large-print-pad';
    this.pad.position.set(0.20, 0.08, 0.15);
    target(this.res, this.pad, 'prints-pad', 0.15);
    this.root.add(this.pad);
  }

  enter() {
    if (this.done) this.restart();
    super.enter();
    const baby = this.ctx.baby;
    if (baby?.group) {
      this._babyHome = {
        position: baby.group.position.clone(), quaternion: baby.group.quaternion.clone()
      };
      baby.group.position.copy(this.root.position).add(new THREE.Vector3(0.18, 0, -0.05));
      baby.group.rotation.set(0, 0.06, 0);
    }
    baby?.playPose?.('sit', { seconds: 0.42 });
    baby?.setMood?.('happy');
    baby?.lookAt?.(this.card.getWorldPosition(new THREE.Vector3()));
    this._renderState();
    this.advise();
  }

  resetVisuals() {
    this.phase = 'kind';
    this.kind = null;
    this.color = null;
    this.sticker = null;
    this.pressed = null;
    this.printMaterial.color.set(COLORS[0].value);
    this.pad.material.color.set(COLORS[0].value);
    this._renderState();
  }

  _renderState() {
    const choiceVisible = this.active && !this.pending && !this.done;
    this.kindChoices.visible = choiceVisible && this.phase === 'kind';
    this.colorChoices.visible = choiceVisible && this.phase === 'color';
    this.pad.visible = choiceVisible && (this.phase === 'left' || this.phase === 'right');
    this.stickerChoices.visible = choiceVisible && this.phase === 'sticker';
    const phaseIndex = PRINT_PHASES.indexOf(this.phase);
    const leftVisible = phaseIndex >= PRINT_PHASES.indexOf('right');
    const rightVisible = phaseIndex >= PRINT_PHASES.indexOf('sticker');
    this.handStamps[0].visible = this.kind === 'hand' && leftVisible;
    this.handStamps[1].visible = this.kind === 'hand' && rightVisible;
    this.footStamps[0].visible = this.kind === 'foot' && leftVisible;
    this.footStamps[1].visible = this.kind === 'foot' && rightVisible;
    for (const child of this.cardSticker.children) child.visible = child.name === `card-sticker-${this.sticker}`;
  }

  advise() {
    if (!this.active || this.done || this.pending) return;
    const copy = {
      kind: ['おててと あんよ どっち？', 'prints', this.kindChoices],
      color: ['すきな いろを えらんでね', 'prints', this.colorChoices],
      left: ['ひだりを ぺったん', 'hand', this.pad],
      right: ['みぎを ぺったん', 'hand', this.pad],
      sticker: ['しあげの シール', 'star', this.stickerChoices]
    }[this.phase];
    if (copy) this.ctx.ui?.prompt?.(copy[0], { icon: copy[1], target: copy[2] });
  }

  _pressLimb(side) {
    const world = this.pad.getWorldPosition(new THREE.Vector3());
    if (this.kind === 'foot') this.ctx.baby?.plantFoot?.(side, world);
    else this.ctx.baby?.reachFor?.(side, world);
    this.clock.after(0.36, () => {
      if (this.kind === 'foot') this.ctx.baby?.plantFoot?.(side, null);
      else this.ctx.baby?.reachFor?.(side, null);
    });
    snd(this.ctx, 'ui.tap', { gain: 0.55, rate: side === 'left' ? 0.96 : 1.04 });
    this.ctx.fx?.burst?.('sparkle', world, 5);
  }

  _perform(id, { deferComplete = false } = {}) {
    if (this.phase === 'kind' && id.startsWith('prints-kind-')) {
      this.kind = id.slice('prints-kind-'.length);
      this.phase = nextPrintPhase(this.phase);
    } else if (this.phase === 'color' && id.startsWith('prints-color-')) {
      this.color = id.slice('prints-color-'.length);
      const choice = COLORS.find((entry) => entry.id === this.color) || COLORS[0];
      this.printMaterial.color.set(choice.value);
      this.pad.material.color.set(choice.value);
      this.phase = nextPrintPhase(this.phase);
    } else if ((this.phase === 'left' || this.phase === 'right') && id === 'prints-pad') {
      this._pressLimb(this.phase);
      this.phase = nextPrintPhase(this.phase);
    } else if (this.phase === 'sticker' && id.startsWith('prints-sticker-')) {
      this.sticker = id.slice('prints-sticker-'.length);
      if (deferComplete) this.pending = true;
      else return this._finishCard();
    } else return false;
    this._renderState();
    this.advise();
    return true;
  }

  _finishCard() {
    if (!this.kind || !this.color || !this.sticker || this.done) return false;
    this.phase = 'done';
    this.pending = false;
    this._renderState();
    const color = COLORS.find((entry) => entry.id === this.color)?.value || COLORS[0].value;
    this.ctx.room?.setPrintMemento?.({ kind: this.kind, color, sticker: this.sticker });
    this.ctx.baby?.setMood?.('giggle');
    this.ctx.baby?.gesture?.('clap');
    snd(this.ctx, 'baby.giggle', { gain: 0.58 });
    return this.complete({ prompt: 'すてきな カードが できたね', icon: 'prints', at: this.card });
  }

  getAssistStep() {
    if (!this.active || this.done || this.pending || this.pressed) return null;
    const steps = {
      kind: ['prints:kind', 'おててを えらぶ', 'prints', this.kindChoices],
      color: ['prints:color', 'いろを えらぶ', 'prints', this.colorChoices],
      left: ['prints:left', 'ひだりを ぺったん', 'hand', this.pad],
      right: ['prints:right', 'みぎを ぺったん', 'hand', this.pad],
      sticker: ['prints:sticker', 'シールを はる', 'star', this.stickerChoices]
    }[this.phase];
    return steps ? { id: steps[0], label: steps[1], icon: steps[2], target: steps[3] } : null;
  }

  previewAssistStep() {
    return { id: 'prints:kind', label: 'てがたカードを つくる', icon: 'prints', target: null };
  }

  async runAssistStep(stepId, { signal } = {}) {
    checkAssist(signal);
    if (this.getAssistStep()?.id !== stepId) return;
    const snapshot = { phase: this.phase, kind: this.kind, color: this.color, sticker: this.sticker };
    const action = {
      'prints:kind': 'prints-kind-hand',
      'prints:color': 'prints-color-blush',
      'prints:left': 'prints-pad',
      'prints:right': 'prints-pad',
      'prints:sticker': 'prints-sticker-star'
    }[stepId];
    this.pending = true;
    const final = stepId === 'prints:sticker';
    this._perform(action, { deferComplete: final });
    try {
      await waitGame(this.ctx, 0.46, signal);
      checkAssist(signal);
      if (!this.active) return;
      this.pending = false;
      if (final) this._finishCard(); else { this._renderState(); this.advise(); }
    } catch (error) {
      if (!this.done) {
        Object.assign(this, snapshot, { pending: false });
        const choice = COLORS.find((entry) => entry.id === this.color) || COLORS[0];
        this.printMaterial.color.set(choice.value);
        this.pad.material.color.set(choice.value);
        this.releaseBaby();
        this._renderState();
        this.advise();
      }
      throw error;
    }
  }

  onPointer(pointer) {
    if (!this.active || this.done || this.pending) return;
    const expected = {
      kind: 'prints-kind-', color: 'prints-color-', left: 'prints-pad',
      right: 'prints-pad', sticker: 'prints-sticker-'
    }[this.phase];
    if (pointer.type === 'down') {
      const got = this.pick(pointer, (id) => expected && (expected.endsWith('-') ? id.startsWith(expected) : id === expected));
      if (!got) { this.misstep(this.pad, this._targetForPhase()); return; }
      this.pressed = got.id;
    } else if (pointer.type === 'cancel') {
      this.pressed = null;
    } else if (pointer.type === 'up' && this.pressed) {
      const action = this.pressed;
      this.pressed = null;
      this._perform(action);
    }
  }

  _targetForPhase() {
    return { kind: this.kindChoices, color: this.colorChoices, left: this.pad,
      right: this.pad, sticker: this.stickerChoices }[this.phase];
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

export default PrintsMode;
