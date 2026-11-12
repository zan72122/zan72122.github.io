import * as THREE from 'three';
import * as MAT from '../engine/materials.js';
import { hitProxy, roundedBoxGeometry, snd } from '../fx/toys.js';
import * as S from './_shared.js';
import {
  advanceBedPrep,
  bedPrepStep,
  createBedPrepState,
  isBedPrepared
} from './sleep-bed-prep-contract.js';

/** Safe fitted-sheet preparation owned by one SleepActivity instance. */
export class SleepBedPrep {
  constructor(host) {
    this.host = host;
    this.ctx = host.ctx;
    this.res = host.res;
    this.clock = new S.Clockwork();
    this.state = createBedPrepState(false);
    this.settling = false;
  }

  build() {
    const { cribPos, surfaceY } = this.host;
    const res = this.res;
    const root = new THREE.Group();
    root.name = 'safe-bed-prep';
    this.host.group.add(root);
    this.root = root;

    const sheetMat = res.mat(MAT.makeCloth({
      color: 0xf7d8e5, weave: 'plain', threads: 140, repeat: 4, seed: 61,
      sheen: 0.65, roughness: 0.96
    }));
    const trimMat = res.mat(MAT.makeCloth({
      color: 0xfff4dd, weave: 'plain', threads: 120, repeat: 5, seed: 62,
      sheen: 0.55, roughness: 0.98
    }));
    const wood = res.mat(MAT.makeWood({
      light: 0xf2d4ad, dark: 0xc99263, seed: 63, ringScale: 24, clearcoat: 0.35
    }));

    const sheet = new THREE.Mesh(
      res.geo(roundedBoxGeometry(0.704, 0.018, 0.544, 0.012, 4)), sheetMat);
    sheet.position.set(cribPos.x, surfaceY - 0.010, cribPos.z);
    sheet.castShadow = false;
    sheet.receiveShadow = true;
    sheet.userData.tag = 'fitted-sheet';
    root.add(sheet);
    this.sheet = sheet;

    // A fitted side band makes the sheet read as attached to the mattress,
    // never as a loose cover that could be pulled over the baby.
    const band = new THREE.Mesh(
      res.geo(roundedBoxGeometry(0.712, 0.038, 0.552, 0.010, 3)), trimMat);
    band.position.set(cribPos.x, surfaceY - 0.025, cribPos.z);
    band.castShadow = false;
    band.receiveShadow = true;
    root.add(band);
    this.band = band;

    this.corners = [];
    for (let i = 0; i < 2; i++) {
      const corner = new THREE.Group();
      const sx = i === 0 ? -1 : 1;
      corner.position.set(cribPos.x - 0.26, surfaceY + 0.018, cribPos.z + sx * 0.21);
      corner.userData.tag = `bed-sheet-${i}`;
      const tab = new THREE.Mesh(
        res.geo(roundedBoxGeometry(0.072, 0.014, 0.050, 0.008, 3)), trimMat);
      tab.rotation.z = 0.42;
      corner.add(tab);
      corner.add(hitProxy(res, 0.070, `bed-sheet-${i}`));
      root.add(corner);
      this.host.pickables.push(corner);
      this.corners.push({ group: corner, tab, homeRotation: tab.rotation.z });
    }

    // A small shelf sits wholly outside the cot footprint. The teddy's final
    // target is here, and never returns to the sleeping surface.
    const shelf = new THREE.Group();
    shelf.position.set(cribPos.x + 0.57, 0.58, cribPos.z + 0.02);
    const shelfParts = new THREE.Mesh(
      res.geo(roundedBoxGeometry(0.25, 0.026, 0.16, 0.010, 3)), wood);
    shelfParts.castShadow = true;
    shelfParts.receiveShadow = true;
    shelf.add(shelfParts);
    const back = new THREE.Mesh(
      res.geo(roundedBoxGeometry(0.25, 0.11, 0.018, 0.008, 3)), wood);
    back.position.set(0, 0.042, -0.074);
    shelf.add(back);
    root.add(shelf);
    this.shelf = shelf;
    this.shelfSpot = shelf.position.clone().add(new THREE.Vector3(0, 0.036, 0.01));
    this.teddyStart = new THREE.Vector3(
      cribPos.x + 0.52, 0.055, cribPos.z + 0.34);

    this.stage(false);
  }

  enter() {
    this.stage(!!this.ctx.state?.bedPrepared);
  }

  stage(prepared) {
    this.clock.clear();
    this.settling = false;
    this.state = createBedPrepState(prepared);
    this._renderState();
  }

  currentStep() { return bedPrepStep(this.state); }
  prepared() { return isBedPrepared(this.state); }
  preparing() { return !this.prepared(); }

  getAssistStep() {
    if (this.settling) return null;
    const id = this.currentStep();
    if (id === 'bed:sheet') {
      return {
        id, label: 'シーツを ひろげて とめる', icon: 'hand',
        target: this.corners[0].group
      };
    }
    if (id === 'bed:corner') {
      return {
        id, label: 'はんたいも とめる', icon: 'hand',
        target: this.corners[1].group
      };
    }
    return null;
  }

  runAssistStep(stepId, { signal } = {}) {
    if (this.getAssistStep()?.id !== stepId) return false;
    const token = { stepId, signal, state: { ...this.state } };
    this._assist = token;
    this._fasten(stepId === 'bed:sheet' ? 0 : 1, stepId);
    return token;
  }

  finishAssist(token) {
    if (this._assist === token) this._assist = null;
  }

  cancelAssist(token) {
    if (!token || this._assist !== token) return;
    this.clock.clear();
    this.state = { ...token.state };
    this.settling = false;
    this._assist = null;
    this._renderState();
    this.host._sayHint?.();
  }

  onPointer(p, picked) {
    const step = this.currentStep();
    if (!['bed:sheet', 'bed:corner'].includes(step)) return false;
    if (p?.type === 'cancel') return true;
    if (p?.type !== 'down' || this.settling) return true;
    const expected = step === 'bed:sheet' ? 'bed-sheet-0' : 'bed-sheet-1';
    if (picked?.tag === expected) this._fasten(step === 'bed:sheet' ? 0 : 1, step);
    else this.misstep(this.getAssistStep()?.target);
    return true;
  }

  _fasten(index, stepId) {
    if (this.settling || this.currentStep() !== stepId) return;
    this.settling = true;
    const corner = this.corners[index];
    const startZ = corner.tab.rotation.z;
    const startScaleZ = this.sheet.scale.z;
    const startX = this.sheet.position.x;
    this.clock.tween(0.48, t => {
      corner.tab.rotation.z = THREE.MathUtils.lerp(startZ, 0, t);
      corner.group.scale.setScalar(1 + Math.sin(t * Math.PI) * 0.15);
      if (index === 0) {
        this.sheet.scale.z = THREE.MathUtils.lerp(startScaleZ, 1, t);
        this.sheet.position.x = THREE.MathUtils.lerp(startX, this.host.cribPos.x, t);
        this.band.visible = t > 0.55;
      }
    }, { ease: S.EASE.inOut, onDone: () => {
      if (this._assist?.signal?.aborted) {
        this.cancelAssist(this._assist);
        return;
      }
      corner.group.scale.setScalar(1);
      this.state = advanceBedPrep(this.state, stepId);
      this.settling = false;
      snd(this.ctx, 'dress.snap', { gain: 0.55 });
      S.burst(this.ctx, 'sparkle', corner.group.getWorldPosition(new THREE.Vector3()), 5);
      this.host._sayHint?.();
    } });
  }

  completeSleeper() {
    if (this.currentStep() !== 'pajama') return false;
    this.state = advanceBedPrep(this.state, 'pajama');
    this.host._sayHint?.();
    return true;
  }

  completeTeddyShelf() {
    if (this.currentStep() !== 'teddy') return false;
    this.state = advanceBedPrep(this.state, 'teddy');
    this.ctx.state?.setBedPrepared?.(true);
    snd(this.ctx, 'play.chime', { gain: 0.45 });
    S.say(this.ctx, 'あんぜんな ベッドに なったよ', 'moon');
    return true;
  }

  _renderState() {
    const index = this.state.index;
    const sheetOpen = index >= 1;
    this.sheet.scale.set(1, 1, sheetOpen ? 1 : 0.28);
    this.sheet.position.x = this.host.cribPos.x + (sheetOpen ? 0 : 0.18);
    this.band.visible = sheetOpen;
    for (let i = 0; i < this.corners.length; i++) {
      this.corners[i].tab.rotation.z = index > i ? 0 : this.corners[i].homeRotation;
      this.corners[i].group.scale.setScalar(1);
    }
  }

  teddyTarget(out = new THREE.Vector3()) { return out.copy(this.shelfSpot); }
  teddyHome(out = new THREE.Vector3()) { return out.copy(this.teddyStart); }

  focusPoint(out = new THREE.Vector3()) {
    return out.set(
      this.host.cribPos.x + 0.16,
      this.host.surfaceY + 0.08,
      this.host.cribPos.z + 0.10
    );
  }

  hintSteps() {
    const step = this.getAssistStep();
    return step ? [{ text: step.label, icon: step.icon, target: step.target }] : [];
  }

  misstep(target) {
    snd(this.ctx, 'ui.boing', { gain: 0.45 });
    if (!target || this.settling) return;
    const base = target.rotation.z;
    this.clock.tween(0.22, t => {
      target.rotation.z = base + Math.sin(t * Math.PI * 4) * 0.07 * (1 - t);
    }, { onDone: () => { target.rotation.z = base; } });
  }

  update(dt) { this.clock.update(dt); }

  exit() {
    this.clock.clear();
    this.settling = false;
    this._assist = null;
  }

  dispose() {
    this.clock.clear();
    // Parent Sleep Resources owns the root and every GPU resource once.
  }
}
