/* ===========================================================================
 * world/session-mementos.js — session-only keepsake display
 * ========================================================================== */

import * as THREE from 'three';
import { Resources } from '../fx/toys.js';

const STICKERS = Object.freeze(['star', 'heart', 'circle']);

function ellipse(x, y, rx, ry) {
  const shape = new THREE.Shape();
  shape.absellipse(x, y, rx, ry, 0, Math.PI * 2, false, 0);
  return shape;
}

function handGeometry() {
  const shapes = [ellipse(0, -0.004, 0.030, 0.038)];
  [-0.023, -0.012, 0, 0.012, 0.023].forEach((x, index) => {
    const h = [0.024, 0.034, 0.038, 0.032, 0.022][index];
    shapes.push(ellipse(x, 0.030 + h * 0.35, 0.006, h));
  });
  return new THREE.ShapeGeometry(shapes, 10);
}

function footGeometry() {
  const shapes = [ellipse(0, -0.007, 0.025, 0.050)];
  for (let i = 0; i < 5; i++) {
    shapes.push(ellipse(-0.020 + i * 0.010, 0.047 + Math.sin(i * 0.7) * 0.007,
      0.0065 - i * 0.0005, 0.008 - i * 0.0005));
  }
  return new THREE.ShapeGeometry(shapes, 10);
}

function starShape(radius) {
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

function heartShape(radius) {
  const shape = new THREE.Shape();
  shape.moveTo(0, -radius);
  shape.bezierCurveTo(-radius * 1.25, -radius * 0.2, -radius, radius, 0, radius * 0.42);
  shape.bezierCurveTo(radius, radius, radius * 1.25, -radius * 0.2, 0, -radius);
  return shape;
}

function stickerGeometry(id) {
  if (id === 'circle') return new THREE.CircleGeometry(0.032, 20);
  return new THREE.ShapeGeometry(id === 'heart' ? heartShape(0.032) : starShape(0.032), 10);
}

/** The recipe is deliberately not State-backed; reload/reset removes the art. */
export class SessionPrintMemento {
  constructor(parent) {
    this.res = new Resources();
    this.group = new THREE.Group();
    this.group.name = 'session-print-memento';
    this.group.position.set(0.64, 1.64, -2.718);
    this.group.userData.sessionMemento = true;
    this.group.userData.hasContent = false;
    this.group.userData.detailVisible = true;
    parent.add(this.group);
    this.res.root(this.group);
    this._build();
    this.clear();
  }

  _material(color, roughness = 0.72) {
    return this.res.mat(new THREE.MeshStandardMaterial({ color, roughness, metalness: 0 }));
  }

  _build() {
    const frame = new THREE.Mesh(
      this.res.geo(new THREE.BoxGeometry(0.36, 0.44, 0.025)), this._material(0xe5bd86, 0.62)
    );
    frame.castShadow = false;
    frame.receiveShadow = true;
    this.group.add(frame);

    const card = new THREE.Mesh(
      this.res.geo(new THREE.PlaneGeometry(0.315, 0.395)), this._material(0xfff8e8, 0.88)
    );
    card.position.z = 0.014;
    this.group.add(card);

    this.ink = this._material(0xff91b6, 0.78);
    this.hand = [];
    this.foot = [];
    const handGeo = this.res.geo(handGeometry());
    const footGeo = this.res.geo(footGeometry());
    for (let index = 0; index < 2; index++) {
      const x = -0.072 + index * 0.144;
      const hand = new THREE.Mesh(handGeo, this.ink);
      hand.position.set(x, -0.010, 0.016);
      this.group.add(hand);
      this.hand.push(hand);
      const foot = new THREE.Mesh(footGeo, this.ink);
      foot.position.set(x, -0.010, 0.016);
      this.group.add(foot);
      this.foot.push(foot);
    }

    this.stickers = new Map();
    STICKERS.forEach((id, index) => {
      const mesh = new THREE.Mesh(
        this.res.geo(stickerGeometry(id)),
        this._material([0xf5c451, 0xff91b6, 0x78cdbb][index], 0.58)
      );
      mesh.position.set(0.105, 0.142, 0.017);
      this.group.add(mesh);
      this.stickers.set(id, mesh);
    });
    this.res.claim(this.group);
  }

  set(recipe = {}) {
    const kind = recipe.kind === 'foot' ? 'foot' : 'hand';
    const sticker = STICKERS.includes(recipe.sticker) ? recipe.sticker : 'star';
    try { this.ink.color.set(recipe.color ?? 0xff91b6); } catch (error) { this.ink.color.set(0xff91b6); }
    for (const mesh of this.hand) mesh.visible = kind === 'hand';
    for (const mesh of this.foot) mesh.visible = kind === 'foot';
    for (const [id, mesh] of this.stickers) mesh.visible = id === sticker;
    this.group.userData.hasContent = true;
    this.group.visible = this.group.userData.detailVisible !== false;
  }

  setDetailVisible(visible) {
    this.group.userData.detailVisible = Boolean(visible);
    this.group.visible = Boolean(visible) && this.group.userData.hasContent === true;
  }

  clear() {
    this.group.userData.hasContent = false;
    this.group.visible = false;
    for (const mesh of [...(this.hand || []), ...(this.foot || [])]) mesh.visible = false;
    for (const mesh of this.stickers?.values?.() || []) mesh.visible = false;
  }

  dispose() {
    this.clear();
    this.res.dispose();
  }
}

export default SessionPrintMemento;
