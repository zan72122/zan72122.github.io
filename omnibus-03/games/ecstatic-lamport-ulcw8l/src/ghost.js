/**
 * ghost.js — 自己ベストのダイブを半透明で並走させる。
 * 「今の自分」と「最高の自分」を同じ画面に置くと、上達が一瞬で分かる。
 */

import * as THREE from 'three';
import { Diver } from './diver.js';

const SHAPES = ['tuck', 'pike', 'layout'];

export class Ghost {
  constructor(scene) {
    this.diver = new Diver(scene);
    this.enabled = false;
    this.frames = null;
    this.t = 0;
    for (const m of Object.values(this.diver.mats)) {
      m.transparent = true;
      m.opacity = 0.28;
      m.depthWrite = false;
    }
    this.diver.root.visible = false;
  }

  setCharacter(c) {
    this.diver.setCharacter(c);
    for (const m of Object.values(this.diver.mats)) { m.transparent = true; m.opacity = 0.28; m.depthWrite = false; }
    this.diver.mats.skin.color.setHex(0x9fd8ff);
    this.diver.mats.suit.color.setHex(0x6fb8e8);
    this.diver.mats.hair.color.setHex(0x6fa8d8);
  }

  play(frames) {
    this.frames = frames && frames.length > 4 ? frames : null;
    this.t = 0;
    this.enabled = !!this.frames;
    this.diver.root.visible = this.enabled;
  }

  stop() { this.enabled = false; this.diver.root.visible = false; }

  update(dt) {
    if (!this.enabled || !this.frames) return;
    this.t += dt;
    const i = this.t * 30;
    const i0 = Math.min(this.frames.length - 1, Math.floor(i));
    const i1 = Math.min(this.frames.length - 1, i0 + 1);
    if (i0 >= this.frames.length - 1) { this.diver.root.visible = false; return; }
    const f = i - i0;
    const a = this.frames[i0], b = this.frames[i1];
    const lerp = (x, y) => x + (y - x) * f;
    this.diver.root.position.set(lerp(a[0], b[0]), lerp(a[1], b[1]), lerp(a[2], b[2]));
    this.diver.root.rotation.set(lerp(a[3], b[3]), 0, 0);
    this.diver.rig.rotation.set(0, lerp(a[4], b[4]), 0);
    this.diver.applyPose(SHAPES[a[5]] || 'layout');
    this.diver.update(dt, 15);
  }
}
