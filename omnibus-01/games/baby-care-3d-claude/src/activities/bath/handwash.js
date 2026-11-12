/* ===========================================================================
 * activities/bath/handwash.js — optional four-step hand-wash submode
 * ========================================================================== */

import * as THREE from 'three';
import { Clockwork, Picker, burst, play } from '../_shared.js';
import { checkAssist, tweenGame, waitGame } from '../assist-utils.js';
import { HandWashProps } from './handwash-props.js';
import {
  HANDWASH_SEQUENCE, nextHandwashStage, validHandwashGesture
} from './handwash-rules.js';

const COPY = Object.freeze({
  soap: ['ポンプを 1かい おそう', 'soap'],
  rub: ['おててを あわあわ ごしごし', 'bubble'],
  rinse: ['おみずで あわを ながそう', 'hand'],
  dry: ['タオルで ふきふき しよう', 'onesie']
});

const LABEL = Object.freeze({
  soap: 'せっけんを だす', rub: 'おててを こする',
  rinse: 'おててを すすぐ', dry: 'おててを ふく'
});

export class BathHandWash {
  constructor(ctx, {
    parent, getHands, canStart = () => true, onStart = () => {},
    onComplete = () => {}, onReturn = () => {}
  }) {
    this.ctx = ctx;
    this.getHands = getHands;
    this.canStart = canStart;
    this.onStart = onStart;
    this.onComplete = onComplete;
    this.onReturn = onReturn;
    this.clock = new Clockwork();
    this.picker = new Picker(ctx.renderer, ctx.camera);
    this.props = new HandWashProps(ctx, parent);
    this.active = false;
    this.completed = false;
    this.stage = 'inactive';
    this._offered = false;
    this._settling = false;
    this._drag = null;
    this._waterLoop = null;
  }

  setOffer(visible) {
    const show = !!visible && !this.active && !this.completed;
    if (show === this._offered) return;
    this._offered = show;
    if (!show) {
      this.ctx.ui?.clearTools?.();
      return;
    }
    this.ctx.ui?.setTools?.([
      { id: 'handwash', icon: 'hand', label: 'おててを あらう' }
    ], id => {
      if (id === 'handwash') this.start();
    });
  }

  start() {
    if (this.active || this.completed || !this.canStart()) return false;
    this._offered = false;
    this.ctx.ui?.clearTools?.();
    this.active = true;
    this.stage = 'soap';
    this._settling = false;
    this._drag = null;
    this.onStart();
    this.props.setStage(this.stage);
    this._advise();
    return true;
  }

  getAssistStep() {
    if (!this.active || this._settling || !HANDWASH_SEQUENCE.includes(this.stage)) return null;
    const target = this.stage === 'soap' ? this.props.soap
      : this.stage === 'dry' ? this.props.towel : this.props.handHolder;
    return {
      id: `handwash:${this.stage}`, label: LABEL[this.stage],
      icon: COPY[this.stage][1], target
    };
  }

  getStartAssistStep() {
    if (this.active || this.completed || !this.canStart()) return null;
    return {
      id: 'handwash:start', label: 'おててあらいを はじめる',
      icon: 'hand', target: this.props.soap
    };
  }

  async runAssistStep(stepId, { signal } = {}) {
    checkAssist(signal);
    if (stepId === 'handwash:start') {
      if (this.getStartAssistStep()?.id !== stepId) return;
      await waitGame(this.ctx, 0.16, signal);
      checkAssist(signal);
      this.start();
      return;
    }
    if (this.getAssistStep()?.id !== stepId) return;
    const stage = this.stage;
    this._settling = true;
    if (stage === 'rinse') this._setWater(true);
    try {
      await tweenGame(this.clock, stage === 'soap' ? 0.32 : 0.48, t => {
        if (stage === 'soap') this.props.animatePump(t);
        else if (stage === 'rub') this.props.animateRub(t);
        else if (stage === 'rinse') this.props.animateRinse(t);
        else this.props.animateDry(t);
      }, { signal });
      checkAssist(signal);
      if (!this.active || this.stage !== stage) return;
      this._advance();
    } finally {
      if (stage === 'rinse') this._setWater(false);
      this.props.resetMotion();
      this._settling = false;
    }
  }

  onPointer(p) {
    if (!this.active || this._settling) return false;
    if (p.type === 'down') return this._down(p);
    if (!this._drag) return false;
    if (p.type === 'move') { this._move(p); return true; }
    if (p.type === 'up') { this._up(false); return true; }
    if (p.type === 'cancel') { this._up(true); return true; }
    return false;
  }

  _down(p) {
    const wanted = this.stage === 'soap' ? 'handwash:soap'
      : this.stage === 'dry' ? 'handwash:towel' : 'handwash:hands';
    const hits = this.picker.cast(p, [this.props.root], true);
    const picked = hits.map(hit => this.props.pickOwner(hit)).find(node => node?.userData.pickId === wanted);
    if (!picked) { this._misstep(); return true; }
    if (this.stage === 'soap') {
      this._settling = true;
      this.clock.tween(0.28, t => this.props.animatePump(t), {
        tag: 'handwash-action', onDone: () => {
          if (this.active && this.stage === 'soap') this._advance();
          this.props.resetMotion();
          this._settling = false;
        }
      });
      return true;
    }
    this._drag = {
      stage: this.stage, startX: p.x, startY: p.y, x: p.x, y: p.y,
      distance: 0, reversals: 0, sign: 0
    };
    if (this.stage === 'rinse') this._setWater(true);
    return true;
  }

  _move(p) {
    const drag = this._drag;
    const dx = p.x - drag.x, dy = p.y - drag.y;
    drag.distance += Math.hypot(dx, dy);
    if (Math.abs(dx) >= 3) {
      const sign = Math.sign(dx);
      if (drag.sign && sign !== drag.sign) drag.reversals++;
      drag.sign = sign;
    }
    drag.x = p.x;
    drag.y = p.y;
    const progress = Math.min(1, drag.distance / 90);
    if (drag.stage === 'rub') this.props.animateRub(progress);
    else if (drag.stage === 'rinse') this.props.animateRinse(progress);
    else this.props.animateDry(progress);
  }

  _up(cancelled) {
    const drag = this._drag;
    this._drag = null;
    if (drag?.stage === 'rinse') this._setWater(false);
    this.props.resetMotion();
    if (cancelled || !validHandwashGesture(drag.stage, drag)) {
      this._misstep();
      return;
    }
    this._advance();
  }

  _advance() {
    if (!this.active) return;
    play(this.ctx, 'chime', { gain: 0.35 });
    const next = nextHandwashStage(this.stage);
    if (next === 'complete') { this._complete(); return; }
    this.stage = next;
    this.props.setStage(next);
    this._advise();
  }

  _complete() {
    if (!this.active || this.completed) return;
    this.completed = true;
    this.active = false;
    this.stage = 'inactive';
    this._setWater(false);
    this.props.reset();
    this.ctx.ui?.hidePrompt?.();
    const hands = this.getHands?.();
    const centre = hands?.left?.clone?.().add(hands.right).multiplyScalar(0.5)
      || this.ctx.baby?.focusPoint?.() || new THREE.Vector3();
    burst(this.ctx, 'sparkle', centre, 7, { color: 0xffef9e });
    this.ctx.baby?.gesture?.('clap');
    this.ctx.baby?.setMood?.('happy');
    this.onComplete();
    this.onReturn();
  }

  _advise() {
    const [text, icon] = COPY[this.stage] || ['', 'hand'];
    const target = this.stage === 'soap' ? this.props.soap
      : this.stage === 'dry' ? this.props.towel : this.props.handHolder;
    this.ctx.ui?.prompt?.(text, { icon, target });
  }

  _misstep() {
    const object = this.stage === 'soap' ? this.props.soap
      : this.stage === 'dry' ? this.props.towel : this.props.handHolder;
    const z = object.rotation.z;
    this.clock.tween(0.24, t => {
      object.rotation.z = z + Math.sin(t * Math.PI * 4) * 0.08;
    }, { tag: 'handwash-miss', onDone: () => { object.rotation.z = z; } });
    this._advise();
  }

  _setWater(on) {
    if (on && !this._waterLoop) {
      try { this._waterLoop = this.ctx.audio?.loop?.('bath.fill', { gain: 0.28 }) || null; }
      catch { this._waterLoop = null; }
    } else if (!on && this._waterLoop) {
      try { this._waterLoop.stop?.(); } catch { /* optional audio */ }
      this._waterLoop = null;
    }
  }

  update(dt) {
    this.clock.update(dt);
    if (!this.active) return;
    const hands = this.getHands?.();
    if (hands) this.props.setHands(hands.left, hands.right);
  }

  /** Visual-only deterministic staging; it never reaches the dirt commit. */
  stageForHarness(stage = 'soap') {
    if (!HANDWASH_SEQUENCE.includes(stage)) return;
    this.completed = false;
    this.active = true;
    this.stage = stage;
    this._settling = false;
    this._drag = null;
    this.ctx.ui?.clearTools?.();
    this.onStart();
    const hands = this.getHands?.();
    if (hands) this.props.setHands(hands.left, hands.right);
    this.props.setStage(stage);
    this._advise();
  }

  cancel() {
    this._offered = false;
    this.active = false;
    this.stage = 'inactive';
    this._settling = false;
    this._drag = null;
    this.clock.clear();
    this._setWater(false);
    this.props.reset();
    this.ctx.ui?.clearTools?.();
    this.ctx.ui?.hidePrompt?.();
  }

  dispose() {
    this.cancel();
    this.props.dispose();
  }
}
