/* ========================================================================== 
 * care/transient-marks.js — activity-owned brush marks and cream trails
 * ========================================================================== */

import * as THREE from 'three';

function quadGeometry(rects) {
  const positions = [];
  for (const [x, y, width, height] of rects) {
    const left = x - width / 2, right = x + width / 2;
    const bottom = y - height / 2, top = y + height / 2;
    positions.push(
      left, bottom, 0, right, bottom, 0, right, top, 0,
      left, bottom, 0, right, top, 0, left, top, 0
    );
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

function flatMaterial(color, opacity) {
  return new THREE.MeshBasicMaterial({
    color, transparent: true, opacity, side: THREE.DoubleSide,
    depthTest: false, depthWrite: false
  });
}

/** Each effect has a clock handle and disposes immediately after its fade. */
export class CareTransientMarks {
  constructor(root, clock) {
    this.root = root;
    this.clock = clock;
    this.active = new Set();
  }

  get activeCount() { return this.active.size; }

  brush(position, side = 1, { hold = false } = {}) {
    const group = new THREE.Group();
    group.name = 'care-brush-mark';
    group.position.copy(position);
    group.rotation.z = side * -0.28;
    group.renderOrder = 22;

    // The three streaks and three tiny crosses share one draw call.
    const geometry = quadGeometry([
      [0, -0.012, 0.085, 0.006], [0.008, 0, 0.078, 0.005],
      [0.016, 0.012, 0.066, 0.004],
      [-0.050, 0.032, 0.004, 0.026], [-0.050, 0.032, 0.014, 0.004],
      [0.047, 0.026, 0.003, 0.021], [0.047, 0.026, 0.011, 0.003],
      [0.018, 0.048, 0.002, 0.016], [0.018, 0.048, 0.008, 0.002]
    ]);
    const material = flatMaterial(0xffe9a8, 0.84);
    const mark = new THREE.Mesh(geometry, material);
    mark.renderOrder = 23;
    group.add(mark);
    this.root.add(group);

    return this._own(group, [geometry], [material], hold ? 0 : 0.62, (t, raw) => {
        material.opacity = 0.84 * (1 - raw);
        group.scale.setScalar(1 + t * 0.12);
      });
  }

  cream(from, to, { hold = false } = {}) {
    const delta = to.clone().sub(from);
    const length = Math.hypot(delta.x, delta.y);
    if (length < 0.003) return null;

    const geometry = new THREE.CircleGeometry(0.5, 14);
    const material = flatMaterial(0xfff5d4, 0.66);
    const mark = new THREE.Mesh(geometry, material);
    mark.name = 'care-cream-trail';
    mark.position.copy(from).lerp(to, 0.5);
    mark.rotation.z = Math.atan2(delta.y, delta.x);
    mark.scale.set(length + 0.018, 0.014, 1);
    mark.renderOrder = 21;
    this.root.add(mark);

    return this._own(mark, [geometry], [material], hold ? 0 : 0.46, (_t, raw) => {
      material.opacity = 0.66 * (1 - raw);
      mark.scale.y = 0.014 * (1 - raw * 0.32);
    });
  }

  _own(object, geometries, materials, duration, animate) {
    const entry = { object, geometries, materials, timer: null };
    this.active.add(entry);
    if (duration > 0) {
      entry.timer = this.clock.tween(duration, animate, {
        onDone: () => this._dispose(entry)
      });
    }
    return entry;
  }

  _dispose(entry) {
    if (!entry || !this.active.delete(entry)) return;
    this.clock.cancel(entry.timer);
    entry.object.parent?.remove(entry.object);
    for (const geometry of entry.geometries) geometry.dispose();
    for (const material of entry.materials) material.dispose();
  }

  clear() {
    for (const entry of [...this.active]) this._dispose(entry);
  }
}
