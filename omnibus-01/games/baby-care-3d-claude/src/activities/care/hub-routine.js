/* ===========================================================================
 * activities/care/hub-routine.js — restock, then a gentle outside nose wipe
 * ========================================================================== */

import * as THREE from 'three';
import * as S from '../_shared.js';
import { checkAssist, tweenGame } from '../assist-utils.js';
import {
  HUB_SUPPLY_IDS, nextHubRoutineStep, validNoseStroke, validRestockDrop
} from './hub-rules.js';

const SUPPLY_LABEL = Object.freeze({
  diaper: 'おむつ', tissue: 'ティッシュ', cream: 'クリーム'
});

export class CareHubRoutine {
  constructor(host, props, { onReturn = () => {} } = {}) {
    this.host = host;
    this.ctx = host.ctx;
    this.props = props;
    this.onReturn = onReturn;
    this.mode = 'idle';
    this.remaining = new Set(HUB_SUPPLY_IDS);
    this.noseStrokes = 0;
    this.lastDirection = 0;
    this.completed = false;
    this.rewarded = false;
    this._busy = false;
    this._drag = null;
  }

  get active() {
    return !['idle', 'done'].includes(this.mode);
  }

  start() {
    if (this.active || this.completed || !this.host._entered) return false;
    this.mode = 'restock';
    this.remaining = new Set(HUB_SUPPLY_IDS);
    this.noseStrokes = 0;
    this.lastDirection = 0;
    this._busy = false;
    this.ctx.ui?.clearTools?.();
    this.props.enterRestock();
    this.ctx.baby?.lookAt?.(this.props.caddy.getWorldPosition(new THREE.Vector3()));
    this._advise();
    return true;
  }

  getAssistStep() {
    if (!this.active || this._busy) return null;
    const id = nextHubRoutineStep({
      mode: this.mode, remaining: [...this.remaining], noseStrokes: this.noseStrokes
    });
    if (!id) return null;
    if (id.startsWith('hub:restock:')) {
      const item = id.split(':').at(-1);
      return {
        id, label: `${SUPPLY_LABEL[item]}を しまう`, icon: item === 'cream' ? 'lotion' : item,
        target: this.props.items.get(item)
      };
    }
    if (id === 'hub:nose:take') {
      return { id, label: 'ティッシュを とる', icon: 'hand', target: this.props.tissue };
    }
    if (id.startsWith('hub:nose:wipe:')) {
      return { id, label: 'おはなを やさしく ふく', icon: 'hand', target: this.props.noseTarget };
    }
    return { id, label: 'ティッシュを すてる', icon: 'care-kit', target: this.props.bin };
  }

  getStartAssistStep() {
    if (this.active || this.completed || !this.host._entered) return null;
    return {
      id: 'hub:start', label: 'ケア用品を じゅんびする',
      icon: 'care-kit', target: this.props.caddy
    };
  }

  async runAssistStep(stepId, { signal } = {}) {
    checkAssist(signal);
    if (this.getAssistStep()?.id !== stepId) return;
    this._busy = true;
    try {
      if (stepId.startsWith('hub:restock:')) {
        await this._assistRestock(stepId.split(':').at(-1), signal);
      } else if (stepId === 'hub:nose:take') {
        await this._assistTake(signal);
      } else if (stepId.startsWith('hub:nose:wipe:')) {
        await this._assistWipe(signal);
      } else if (stepId === 'hub:nose:bin') {
        await this._settleBin(signal);
      }
    } finally {
      this._busy = false;
    }
  }

  async _assistRestock(id, signal) {
    const item = this.props.items.get(id);
    const slot = this.props.slots.get(id);
    const start = item.position.clone();
    try {
      await tweenGame(this.host.clock, 0.40, t => item.position.lerpVectors(start, slot.position, t), { signal });
      checkAssist(signal);
      this._commitRestock(id);
    } catch (error) {
      item.position.copy(start);
      throw error;
    }
  }

  async _assistTake(signal) {
    const start = this.props.tissue.position.clone();
    const end = this.props.noseTarget.position.clone().add(new THREE.Vector3(-0.05, -0.015, 0.025));
    try {
      await tweenGame(this.host.clock, 0.34, t => this.props.tissue.position.lerpVectors(start, end, t), { signal });
      checkAssist(signal);
      this.mode = 'nose-wipe';
      this._advise();
    } catch (error) {
      this.props.tissue.position.copy(start);
      throw error;
    }
  }

  async _assistWipe(signal) {
    const direction = this.lastDirection ? -this.lastDirection : 1;
    const start = this.props.noseTarget.position.clone()
      .add(new THREE.Vector3(-direction * 0.055, -0.015, 0.025));
    const end = this.props.noseTarget.position.clone()
      .add(new THREE.Vector3(direction * 0.055, -0.015, 0.025));
    this.props.tissue.position.copy(start);
    try {
      await tweenGame(this.host.clock, 0.38,
        t => this.props.tissue.position.lerpVectors(start, end, t), { signal });
      checkAssist(signal);
      this._recordNoseStroke(direction);
    } catch (error) {
      this.props.tissueNearNose(-0.05);
      throw error;
    }
  }

  async _settleBin(signal) {
    const start = this.props.tissue.position.clone();
    const end = this.host.worldToRoot(this.props.binPoint(), new THREE.Vector3());
    try {
      await tweenGame(this.host.clock, 0.56, t => {
        this.props.tissue.position.lerpVectors(start, end, t);
        this.props.tissue.scale.setScalar(1 - t * 0.58);
        this.props.setLid(t);
      }, { signal });
      checkAssist(signal);
      this._complete();
    } catch (error) {
      this.props.tissue.scale.setScalar(1);
      this.props.tissueNearNose(-0.05);
      this.props.setLid(0);
      throw error;
    }
  }

  onPointer(p) {
    if (!this.host._entered || this._busy) return false;
    if (this.mode === 'idle') {
      if (p.type !== 'down' || this.completed) return false;
      const hit = this.host.pick(p, id => id === 'hub:entry');
      return hit ? this.start() : false;
    }
    if (p.type === 'down') return this._down(p);
    if (!this._drag) return false;
    if (p.type === 'move') { this._move(p); return true; }
    if (p.type === 'up') { this._up(p, false); return true; }
    if (p.type === 'cancel') { this._up(p, true); return true; }
    return false;
  }

  _down(p) {
    if (this.mode === 'restock') {
      const hit = this.host.pick(p, id => id.startsWith('hub:item:') && this.remaining.has(id.split(':').at(-1)));
      if (!hit) { this._miss(null, this.props.items.get([...this.remaining][0])); return true; }
      const id = hit.id.split(':').at(-1);
      this._drag = { kind: 'restock', id, ...this.host.beginPlaneDrag(this.props.items.get(id), hit.hit) };
      return true;
    }
    if (this.mode === 'nose-take') {
      const hit = this.host.pick(p, id => id === 'hub:tissue');
      if (!hit) { this._miss(null, this.props.tissue); return true; }
      this.props.tissueNearNose(-0.05);
      this.mode = 'nose-wipe';
      this._advise();
      return true;
    }
    if (this.mode === 'nose-wipe') {
      const hit = this.host.pick(p, id => id === 'hub:tissue' || id === 'hub:nose');
      if (!hit) { this._miss(null, this.props.noseTarget); return true; }
      this._drag = { kind: 'wipe', startX: p.x, x: p.x, y: p.y, distance: 0 };
      return true;
    }
    if (this.mode === 'nose-bin') {
      const hit = this.host.pick(p, id => id === 'hub:tissue');
      if (!hit) { this._miss(null, this.props.tissue); return true; }
      this._drag = { kind: 'bin', ...this.host.beginPlaneDrag(this.props.tissue, hit.hit) };
      return true;
    }
    return false;
  }

  _move(p) {
    if (this._drag.kind === 'wipe') {
      this._drag.distance += Math.hypot(p.x - this._drag.x, p.y - this._drag.y);
      this._drag.x = p.x;
      this._drag.y = p.y;
      const dx = S.clamp((p.x - this._drag.startX) * 0.0008, -0.07, 0.07);
      this.props.tissueNearNose(dx);
      return;
    }
    this.host.movePlaneDrag(p, this._drag);
  }

  _up(p, cancelled) {
    const drag = this._drag;
    this._drag = null;
    if (drag.kind === 'wipe') {
      const direction = Math.sign(p.x - drag.startX);
      if (!cancelled && validNoseStroke({ distance: drag.distance, direction }, this.lastDirection)) {
        this._recordNoseStroke(direction);
      } else {
        this.props.tissueNearNose(-0.05);
        this._miss(this.props.tissue, this.props.noseTarget);
      }
      return;
    }
    if (drag.kind === 'restock') {
      const slot = cancelled ? null : this.host.pick(p, id => id === `hub:slot:${drag.id}`);
      if (slot && validRestockDrop(drag.id, slot.id.split(':').at(-1))) this._commitRestock(drag.id);
      else { this.host.cancelPlaneDrag(drag); this._miss(drag.object, this.props.slots.get(drag.id)); }
      return;
    }
    const bin = cancelled ? null : this.host.pick(p, id => id === 'hub:bin');
    if (!bin) {
      this.host.cancelPlaneDrag(drag);
      this._miss(this.props.tissue, this.props.bin);
      return;
    }
    this._beginManualBinSettle();
  }

  _commitRestock(id) {
    if (this.mode !== 'restock' || !this.remaining.has(id)) return;
    this.remaining.delete(id);
    this.props.place(id);
    S.play(this.ctx, 'ui.confirm', { gain: 0.34 });
    if (!this.remaining.size) this._beginNose();
    else this._advise();
  }

  _beginNose() {
    this.mode = 'nose-take';
    const mouth = this.ctx.baby?.mouthWorldPos?.();
    this.props.updateNose(mouth);
    this.props.showNose();
    this.ctx.baby?.setMood?.('surprised');
    this.ctx.baby?.gesture?.('sneeze');
    this.ctx.baby?.say?.('sneeze');
    S.play(this.ctx, 'sneeze', { gain: 0.34 });
    S.burst(this.ctx, 'steam', mouth || new THREE.Vector3(), 3,
      { color: 0xfff7e9 });
    this._advise();
  }

  _recordNoseStroke(direction) {
    if (this.mode !== 'nose-wipe') return;
    this.noseStrokes++;
    this.lastDirection = direction;
    S.play(this.ctx, 'cloth', { gain: 0.25 });
    if (this.noseStrokes >= 2) {
      this.mode = 'nose-bin';
      this.props.tissueNearNose(-0.05);
    }
    this._advise();
  }

  _beginManualBinSettle() {
    if (this.mode !== 'nose-bin') return;
    const start = this.props.tissue.position.clone();
    const end = this.host.worldToRoot(this.props.binPoint(), new THREE.Vector3());
    this.mode = 'bin-settle';
    this._busy = true;
    this.host.clock.tween(0.56, t => {
      this.props.tissue.position.lerpVectors(start, end, t);
      this.props.tissue.scale.setScalar(1 - t * 0.58);
      this.props.setLid(t);
    }, {
      tag: 'hub-bin', onDone: () => {
        this._busy = false;
        if (this.host._entered && this.mode === 'bin-settle') this._complete();
      }
    });
  }

  _complete() {
    if (this.completed || !this.host._entered) return;
    this.completed = true;
    this.mode = 'done';
    this.props.tissue.scale.setScalar(1);
    this.props.reset({ completed: true });
    if (!this.rewarded) {
      this.rewarded = true;
      S.bumpMeter(this.ctx, 'happy', 0.04);
      S.award(this.ctx, 1);
    }
    this.ctx.baby?.setMood?.('giggle');
    this.ctx.baby?.gesture?.('clap');
    S.burst(this.ctx, 'heart', this.ctx.baby?.focusPoint?.() || new THREE.Vector3(), 6);
    S.play(this.ctx, 'giggle', { gain: 0.45 });
    this.ctx.ui?.toast?.('じゅんび ばっちり！', { icon: 'care-kit' });
    this.onReturn({ completed: true });
  }

  _advise() {
    if (this.mode === 'restock') {
      const id = HUB_SUPPLY_IDS.find(item => this.remaining.has(item));
      this.ctx.ui?.prompt?.(`${SUPPLY_LABEL[id]}を おなじ かたちへ`, {
        icon: id === 'cream' ? 'lotion' : id, target: this.props.items.get(id)
      });
    } else if (this.mode === 'nose-take') {
      this.ctx.ui?.prompt?.('ティッシュを とろう', { icon: 'hand', target: this.props.tissue });
    } else if (this.mode === 'nose-wipe') {
      this.ctx.ui?.prompt?.('おはなの そとを やさしく ふこう', {
        icon: 'hand', target: this.props.noseTarget
      });
    } else if (this.mode === 'nose-bin') {
      this.ctx.ui?.prompt?.('ふたつきボックスへ ぽい', { icon: 'care-kit', target: this.props.bin });
    }
  }

  _miss(tool, target) {
    this.host.misstep(tool, target);
    this._advise();
  }

  update() {
    if (!this.active || !this.mode.startsWith('nose')) return;
    this.props.updateNose(this.ctx.baby?.mouthWorldPos?.());
  }

  cancel() {
    if (this._drag?.object) this.host.cancelPlaneDrag(this._drag);
    this._drag = null;
    this.host.clock.cancelTag('hub-bin');
    this._busy = false;
    this.mode = this.completed ? 'done' : 'idle';
    this.remaining = new Set(HUB_SUPPLY_IDS);
    this.noseStrokes = 0;
    this.lastDirection = 0;
    this.props.tissue.scale.setScalar(1);
    this.props.reset({ completed: this.completed });
  }

  /** Visual-only deterministic staging for screenshots and browser contracts. */
  stage({ mode = 'restock', remaining = HUB_SUPPLY_IDS, noseStrokes = 0 } = {}) {
    if (!this.host._entered) return;
    this.completed = mode === 'done';
    this.rewarded = false;
    this._busy = false;
    this._drag = null;
    this.ctx.ui?.clearTools?.();
    if (mode === 'done') {
      this.mode = 'done';
      this.props.reset({ completed: true });
      this.onReturn({ completed: true });
      return;
    }
    if (mode === 'restock') {
      this.mode = 'restock';
      this.remaining = new Set(HUB_SUPPLY_IDS.filter(id => remaining.includes(id)));
      this.props.reset();
      this.props.enterRestock();
      for (const id of HUB_SUPPLY_IDS) if (!this.remaining.has(id)) this.props.place(id);
    } else {
      this.mode = ['nose-take', 'nose-wipe', 'nose-bin'].includes(mode) ? mode : 'nose-take';
      this.remaining.clear();
      this.noseStrokes = S.clamp(Math.floor(noseStrokes), 0, 2);
      this.lastDirection = this.noseStrokes ? (this.noseStrokes % 2 ? 1 : -1) : 0;
      this.props.updateNose(this.ctx.baby?.mouthWorldPos?.());
      this.props.showNose();
      if (this.mode !== 'nose-take') this.props.tissueNearNose(-0.05);
    }
    this._advise();
  }

  dispose() {
    this.cancel();
  }
}
