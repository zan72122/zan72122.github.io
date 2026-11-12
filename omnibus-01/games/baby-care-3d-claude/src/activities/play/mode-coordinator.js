/* ===========================================================================
 * activities/play/mode-coordinator.js — four-choice Play mode ownership
 * ========================================================================== */

import { CuddleMode } from './cuddle.js';
import { StrollMode } from './stroll.js';
import { PrintsMode } from './prints.js';
import { PLAY_MODE_ITEMS, modeIdForAssist } from './rules.js';

const EXPANDED_ORDER = Object.freeze(['cuddle', 'stroll', 'prints']);
const CAMERA = Object.freeze({
  cuddle: {
    space: 'subject', pos: [0.46, 0.53, 1.20], target: [0, 0.34, 0.02],
    fov: 35, focusRange: 0.16, dof: 0.90, handheld: 0.55, roll: 0.35, minAspect: 0.62
  },
  stroll: {
    space: 'subject', pos: [0.56, 0.58, 1.44], target: [0, 0.33, 0],
    fov: 42, focusRange: 0.25, dof: 0.72, handheld: 0.80, roll: 0.55, minAspect: 0.78
  },
  prints: {
    space: 'subject', pos: [0.28, 0.57, 1.30], target: [-0.02, 0.30, 0.03],
    fov: 39, focusRange: 0.20, dof: 0.82, handheld: 0.58, roll: 0.40, minAspect: 0.76
  }
});

export class PlayModeCoordinator {
  constructor(host) {
    this.host = host;
    this.ctx = host.ctx;
    this.activeId = 'toys';
    this.controllers = new Map();
    this.assistCompleted = new Set();
    this.entered = false;
  }

  async build() {
    const done = (id) => this._modeComplete(id);
    this.controllers.set('cuddle', new CuddleMode(this.ctx, done));
    this.controllers.set('stroll', new StrollMode(this.ctx, done));
    this.controllers.set('prints', new PrintsMode(this.ctx, done));

    // Parent Play resources were claimed before this method is called. These
    // roots therefore have one owner each: their controller's Resources.
    for (const id of EXPANDED_ORDER) {
      await this.controllers.get(id).build(this.host.group, this.host.home);
      this.ctx.cameraRig?.overridePreset?.(`play-${id}`, CAMERA[id]);
    }
  }

  enter() {
    this.entered = true;
    this.activeId = 'toys';
    this.host.toyRoot.visible = true;
    this.ctx.ui?.setTools?.(
      PLAY_MODE_ITEMS.map((item) => ({ ...item, selected: item.id === 'toys' })),
      (id) => {
        this.select(id, { manual: true });
      }
    );
  }

  select(id, { manual = false, fromAssist = false } = {}) {
    if (!this.entered || !PLAY_MODE_ITEMS.some((item) => item.id === id)) return false;
    const same = id === this.activeId;
    const current = this.controllers.get(this.activeId);
    if (same) {
      if (id === 'toys' || !current?.done) return false;
      current.exit();
      this.host._resetBabyForPlay();
      current.restart();
      this._enterExpanded(id, current);
      this.ctx.ui?.selectTool?.(id);
      return true;
    }

    if (manual && !fromAssist) this.ctx.ui?.cancelAssist?.({ transition: false });
    if (this.activeId === 'toys') this.host._stopToyMode();
    else current?.exit();

    this.host._resetBabyForPlay();
    this.activeId = id;
    this.ctx.ui?.selectTool?.(id);

    if (id === 'toys') {
      this.host._enterToyMode();
      return true;
    }

    const next = this.controllers.get(id);
    if (next?.done) next.restart();
    this._enterExpanded(id, next);
    return true;
  }

  _enterExpanded(id, controller) {
    this.host.toyRoot.visible = false;
    this.ctx.cameraRig?.setSubject?.(controller.root, { yaw: false });
    this.ctx.cameraRig?.goTo?.(`play-${id}`, 0.72);
    controller.enter();
  }

  _modeComplete(id) {
    this.assistCompleted.add(id);
  }

  getAssistStep() {
    if (!this.entered) return null;
    if (this.activeId !== 'toys') {
      const active = this.controllers.get(this.activeId);
      if (active && !active.done) return active.getAssistStep();
    }
    const id = EXPANDED_ORDER.find((candidate) => !this.assistCompleted.has(candidate));
    if (!id) return null;
    const controller = this.controllers.get(id);
    return this.activeId === id ? controller.getAssistStep() : controller.previewAssistStep();
  }

  async runAssistStep(stepId, { signal } = {}) {
    const id = modeIdForAssist(stepId);
    if (!id) return false;
    if (this.activeId !== id) this.select(id, { fromAssist: true });
    const controller = this.controllers.get(id);
    if (!controller || controller.getAssistStep()?.id !== stepId) return false;
    await controller.runAssistStep(stepId, { signal });
    return true;
  }

  onPointer(pointer) {
    if (this.activeId === 'toys') return false;
    this.controllers.get(this.activeId)?.onPointer?.(pointer);
    return true;
  }

  onState(patch) {
    if (patch?.playMode && PLAY_MODE_ITEMS.some((item) => item.id === patch.playMode)) {
      this.select(patch.playMode);
    }
  }

  update(dt) {
    if (this.activeId === 'toys') return false;
    this.controllers.get(this.activeId)?.update?.(dt);
    return true;
  }

  exit() {
    if (!this.entered) return;
    if (this.activeId !== 'toys') this.controllers.get(this.activeId)?.exit();
    else this.host._stopToyMode();
    this.entered = false;
    this.ctx.ui?.clearTools?.();
  }

  dispose() {
    this.entered = false;
    for (const controller of this.controllers.values()) controller.dispose();
    this.controllers.clear();
    this.assistCompleted.clear();
  }
}

export default PlayModeCoordinator;
