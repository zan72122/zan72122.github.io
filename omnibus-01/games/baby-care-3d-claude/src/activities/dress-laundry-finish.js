import * as THREE from 'three';
import * as S from './_shared.js';
import {
  applyLaundryFinishAction,
  assistLaundryFinish,
  createLaundryFinishState,
  laundryFinishStep
} from './dress-laundry-finish-contract.js';
import { showDressFinish } from './dress-render-budget.js';

const SOCKS = [
  { id: 'rose:left', pair: 0, x: -0.18, z: -0.045, color: 0xff9fbd, long: true },
  { id: 'sun:left', pair: 1, x: -0.06, z: 0.045, color: 0xffd65c, long: false },
  { id: 'rose:right', pair: 0, x: 0.07, z: -0.035, color: 0xff9fbd, long: true },
  { id: 'sun:right', pair: 1, x: 0.19, z: 0.050, color: 0xffd65c, long: false }
];

/** Activity-owned visual/controller for the end of Dress's laundry chain. */
export class LaundryFinish {
  constructor(host) {
    this.host = host;
    this.ctx = host.ctx;
    this.clock = new S.Clockwork();
    this.state = createLaundryFinishState();
    this.active = false;
    this.settling = false;
    this.garmentId = false;
    this.sockProps = new Map();
  }

  build() {
    const host = this.host;
    const root = new THREE.Group();
    root.name = 'laundry-finish';
    root.position.set(0, 0, 0.02);
    root.visible = false;
    host.root.add(root);
    this.root = root;

    const mat = (color, roughness = 0.82) => host.trash.mat(
      new THREE.MeshStandardMaterial({ color, roughness, metalness: 0 }));
    this.wood = mat(0xf0caa4, 0.78);
    this.cream = mat(0xfff4de, 0.9);
    this.rose = mat(0xff9fbd, 0.92);
    this.sun = mat(0xffd65c, 0.92);
    this.mint = mat(0xa7dfcd, 0.92);

    const board = new THREE.Mesh(
      host.trash.geo(S.roundedBox(0.52, 0.025, 0.25, 0.012, 3)), this.cream);
    board.position.set(0, 0.205, 0.62);
    board.receiveShadow = true;
    root.add(board);
    this.board = board;

    const cabinet = new THREE.Group();
    cabinet.position.set(0.34, 0, 0.47);
    const body = new THREE.Mesh(
      host.trash.geo(S.roundedBox(0.22, 0.25, 0.22, 0.014, 3)), this.wood);
    body.position.y = 0.125;
    cabinet.add(body);
    const front = new THREE.Mesh(
      host.trash.geo(S.roundedBox(0.19, 0.075, 0.018, 0.008, 3)), this.cream);
    front.position.set(0, 0.15, 0.115);
    front.userData.pickId = 'laundry-put-away';
    front.add(S.hitProxy(0.105, 'laundry-drawer-hit'));
    cabinet.add(front);
    root.add(cabinet);
    this.cabinet = cabinet;
    this.drawer = front;

    for (const def of SOCKS) this._buildSock(def);

    const garment = new THREE.Group();
    const panel = new THREE.Mesh(
      host.trash.geo(S.roundedBox(0.18, 0.014, 0.16, 0.009, 3)), this.mint);
    panel.castShadow = true;
    garment.add(panel);
    const fold = new THREE.Mesh(
      host.trash.geo(S.roundedBox(0.17, 0.009, 0.075, 0.007, 3)), this.cream);
    fold.position.set(0, 0.012, -0.035);
    garment.add(fold);
    garment.position.set(0, 0.228, 0.63);
    garment.userData.pickId = 'laundry-fold';
    garment.add(S.hitProxy(0.12, 'laundry-fold-hit'));
    root.add(garment);
    this.garment = garment;
    this.garmentHome = garment.position.clone();

    const stored = new THREE.Mesh(
      host.trash.geo(S.roundedBox(0.145, 0.042, 0.09, 0.010, 3)), this.mint);
    stored.position.set(0.34, 0.15, 0.60);
    stored.visible = false;
    stored.castShadow = true;
    root.add(stored);
    this.stored = stored;

    S.shade(root, true, true);
    S.trimShadowCasters(root, { minRadius: 0.12 });
  }

  _buildSock(def) {
    const host = this.host;
    const g = new THREE.Group();
    const length = def.long ? 0.105 : 0.078;
    const cloth = def.pair === 0 ? this.rose : this.sun;
    const leg = new THREE.Mesh(
      host.trash.geo(S.roundedBox(0.040, 0.012, length, 0.008, 3)), cloth);
    g.add(leg);
    const toe = new THREE.Mesh(
      host.trash.geo(new THREE.SphereGeometry(0.023, 12, 8)), cloth);
    toe.scale.set(1, 0.34, 1.35);
    toe.position.set(def.id.endsWith('left') ? -0.014 : 0.014, 0, length * 0.42);
    g.add(toe);
    const stripe = new THREE.Mesh(
      host.trash.geo(S.roundedBox(0.043, 0.014, 0.012, 0.004, 2)), this.cream);
    stripe.position.z = -length * 0.30;
    g.add(stripe);
    g.position.set(def.x, 0.228, 0.62 + def.z);
    g.rotation.y = def.id.endsWith('left') ? -0.12 : 0.12;
    g.userData.pickId = `laundry-sock:${def.id}`;
    g.add(S.hitProxy(0.065, 'laundry-sock-hit'));
    this.root.add(g);
    this.sockProps.set(def.id, { group: g, home: g.position.clone(), pair: def.pair });
  }

  enter() {
    const state = this.ctx.state;
    if (state?.laundryFinishPending) {
      this.begin(state.laundryFinishPending);
    } else if (state?.laundryStored) {
      this.stageStored(state.laundryStored);
    } else {
      this.hide();
    }
  }

  begin(garmentId) {
    this.clock.clear();
    this.garmentId = garmentId || 'onesie';
    this.state = createLaundryFinishState();
    this.active = true;
    this.settling = false;
    this._renderState();
    showDressFinish(this.host);
    this.ctx.ui?.clearTools?.();
    this._advise();
  }

  stageStored(garmentId) {
    this.clock.clear();
    this.garmentId = garmentId || 'onesie';
    this.active = false;
    this.settling = false;
    this.root.visible = true;
    this.board.visible = false;
    this.cabinet.visible = true;
    this.garment.visible = false;
    this.stored.visible = true;
    for (const prop of this.sockProps.values()) prop.group.visible = false;
  }

  hide() {
    this.active = false;
    this.settling = false;
    if (this.root) this.root.visible = false;
  }

  getAssistStep() {
    if (!this.active || this.settling) return null;
    const id = laundryFinishStep(this.state);
    if (!id) return null;
    if (id.startsWith('finish:pair:')) {
      const pair = Number(id.at(-1));
      const target = [...this.sockProps.values()].find(prop => prop.pair === pair)?.group;
      return { id, label: 'おなじ くつしたを あわせる', icon: 'socks', target };
    }
    if (id === 'finish:fold') {
      return { id, label: 'おようふくを たたむ', icon: 'onesie', target: this.garment };
    }
    return { id, label: 'ひきだしへ しまう', icon: 'hand', target: this.drawer };
  }

  runAssistStep(stepId, { signal } = {}) {
    if (this.getAssistStep()?.id !== stepId) return false;
    const token = {
      stepId,
      signal,
      state: { ...this.state },
      garmentId: this.garmentId
    };
    this._assist = token;
    if (stepId.startsWith('finish:pair:')) {
      const pair = Number(stepId.at(-1));
      this.state = assistLaundryFinish(this.state);
      this._settlePair(pair);
    } else if (stepId === 'finish:fold') {
      this.state = assistLaundryFinish(this.state);
      this._fold();
    } else {
      this._putAway();
    }
    return token;
  }

  finishAssist(token) {
    if (this._assist === token) this._assist = null;
  }

  cancelAssist(token) {
    if (!token || this._assist !== token) return;
    this.clock.clear();
    this.state = { ...token.state };
    this.garmentId = token.garmentId;
    this.active = true;
    this.settling = false;
    this._assist = null;
    this._renderState();
    this._advise();
  }

  onPointer(p, picked) {
    if (!this.active) return false;
    if (p?.type === 'cancel') return true;
    if (p?.type !== 'down' || this.settling) return true;
    const id = picked?.id || '';
    if (id.startsWith('laundry-sock:')) {
      const sockId = id.slice('laundry-sock:'.length);
      const move = applyLaundryFinishAction(this.state, { type: 'sock', id: sockId });
      this.state = move.state;
      if (move.result === 'selected') {
        this.sockProps.get(sockId)?.group.scale.setScalar(1.14);
        S.play(this.ctx, 'tap');
      } else if (move.result === 'advanced') {
        this._settlePair(this.state.index - 1);
      } else {
        this._misstep(this.sockProps.get(sockId)?.group);
      }
      return true;
    }
    if (id === 'laundry-fold' && laundryFinishStep(this.state) === 'finish:fold') {
      this.state = applyLaundryFinishAction(this.state, { type: 'fold' }).state;
      this._fold();
      return true;
    }
    if (id === 'laundry-put-away'
      && laundryFinishStep(this.state) === 'finish:put-away') {
      this._putAway();
      return true;
    }
    this._misstep(this.getAssistStep()?.target);
    return true;
  }

  _settlePair(pair) {
    this.settling = true;
    const items = [...this.sockProps.values()].filter(prop => prop.pair === pair);
    const from = items.map(prop => prop.group.position.clone());
    this.clock.tween(0.35, t => {
      for (let i = 0; i < items.length; i++) {
        const to = new THREE.Vector3(-0.13 + pair * 0.12 + i * 0.018, 0.235 + i * 0.006, 0.58);
        items[i].group.position.lerpVectors(from[i], to, t);
        items[i].group.scale.setScalar(1 - t * 0.18);
      }
    }, { ease: S.EASE.inOut, onDone: () => {
      this.settling = false;
      S.play(this.ctx, 'snap');
      S.burst(this.ctx, 'sparkle', items[0].group.getWorldPosition(new THREE.Vector3()), 4);
      this._stageForStep();
    } });
  }

  _fold() {
    this.settling = true;
    this.garment.visible = true;
    this.garment.scale.set(1, 1, 1);
    this.clock.tween(0.45, t => {
      this.garment.scale.set(1 - t * 0.22, 1 + Math.sin(t * Math.PI) * 0.25, 1 - t * 0.48);
      this.garment.rotation.y = t * 0.08;
    }, { ease: S.EASE.inOut, onDone: () => {
      this.settling = false;
      S.play(this.ctx, 'dress.rustle');
      this._advise();
    } });
  }

  _putAway() {
    if (this.settling) return;
    this.settling = true;
    const from = this.garment.position.clone();
    const to = new THREE.Vector3(0.34, 0.15, 0.60);
    const startScale = this.garment.scale.clone();
    this.clock.tween(0.62, t => {
      this.garment.position.lerpVectors(from, to, t);
      this.garment.scale.copy(startScale).multiplyScalar(1 - t * 0.24);
    }, { ease: S.EASE.inOut, onDone: () => this._commit() });
  }

  _commit() {
    if (this._assist?.signal?.aborted) {
      this.cancelAssist(this._assist);
      return;
    }
    if (!this.active || this.ctx.state?.laundryStored === this.garmentId) return;
    this.state = applyLaundryFinishAction(this.state, { type: 'put-away' }).state;
    this.ctx.state?.completeLaundryStorage?.(this.garmentId);
    S.award(this.ctx, 1);
    S.bumpMeter(this.ctx, 'happy', 0.03);
    S.play(this.ctx, 'tada');
    S.mood(this.ctx, 'excited');
    S.gesture(this.ctx, ['clap']);
    S.say(this.ctx, 'きれいに しまえたね！', 'star');
    this.stored.visible = true;
    this.garment.visible = false;
    this.active = false;
    this.settling = false;
    this.board.visible = false;
    for (const prop of this.sockProps.values()) prop.group.visible = false;
  }

  _stageForStep() {
    if (laundryFinishStep(this.state) === 'finish:fold') this.garment.visible = true;
    this._advise();
  }

  _renderState() {
    this.root.visible = true;
    this.board.visible = true;
    this.cabinet.visible = true;
    this.stored.visible = false;
    this.garment.position.copy(this.garmentHome);
    this.garment.rotation.set(0, 0, 0);
    this.garment.scale.setScalar(1);
    this.garment.visible = this.state.index >= 2;
    if (this.state.index >= 3) {
      this.garment.scale.set(0.78, 1, 0.52);
      this.garment.rotation.y = 0.08;
    }
    for (const prop of this.sockProps.values()) {
      prop.group.visible = true;
      prop.group.position.copy(prop.home);
      prop.group.scale.setScalar(1);
      if (prop.pair < Math.min(this.state.index, 2)) {
        const pairItems = [...this.sockProps.values()].filter(p => p.pair === prop.pair);
        const i = pairItems.indexOf(prop);
        prop.group.position.set(-0.13 + prop.pair * 0.12 + i * 0.018,
          0.235 + i * 0.006, 0.58);
        prop.group.scale.setScalar(0.82);
      }
    }
  }

  _advise() {
    const step = this.getAssistStep();
    if (step) S.say(this.ctx, step.label, step.icon);
  }

  advise() { this._advise(); }

  _misstep(target) {
    S.play(this.ctx, 'boing');
    if (target) {
      const base = target.rotation.z;
      this.clock.tween(0.22, t => {
        target.rotation.z = base + Math.sin(t * Math.PI * 4) * 0.08 * (1 - t);
      }, { onDone: () => { target.rotation.z = base; } });
    }
    this._advise();
  }

  update(dt) { this.clock.update(dt); }

  exit() {
    this.clock.clear();
    this._assist = null;
    this.hide();
  }

  dispose() {
    this.clock.clear();
    // Parent Dress root owns and disposes every geometry/material exactly once.
  }
}
