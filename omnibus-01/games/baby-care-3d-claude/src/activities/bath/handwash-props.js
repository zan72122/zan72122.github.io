/* ===========================================================================
 * activities/bath/handwash-props.js — activity-owned hand-wash visuals
 * ========================================================================== */

import * as THREE from 'three';
import { Trash, hitProxy, owner, roundedBox } from '../_shared.js';

function material(color, { opacity = 1, clearcoat = 0.35 } = {}) {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color), roughness: 0.5, metalness: 0,
    clearcoat, clearcoatRoughness: 0.35,
    transparent: opacity < 1, opacity, depthWrite: opacity >= 0.8,
    sheen: 0.3, sheenColor: new THREE.Color(0xffffff), sheenRoughness: 0.7
  });
}

function proxy(parent, id, radius, position = [0, 0, 0]) {
  const hit = hitProxy(radius, `${id}-target`);
  hit.position.set(...position);
  hit.userData.pickId = id;
  parent.add(hit);
  return hit;
}

/**
 * This set deliberately owns its foam and water. It never calls Baby.setWet()
 * or Baby.setFoam(), so leaving half-way cannot leak bath state.
 */
export class HandWashProps {
  constructor(ctx, parent) {
    this.ctx = ctx;
    this.parent = parent;
    this.trash = new Trash();
    this.root = new THREE.Group();
    this.root.name = 'bath-handwash-root';
    this.root.position.set(0.18, 0.02, 0.31);
    parent.add(this.root);
    this.trash.obj(this.root);
    this._inverse = new THREE.Matrix4();
    this._localL = new THREE.Vector3();
    this._localR = new THREE.Vector3();
    this._build();
    this.reset();
  }

  _build() {
    const pink = material(0xffa9c9);
    const cream = material(0xfff7e9);
    const mint = material(0xbfeadd);
    const blue = material(0xbde9f3, { opacity: 0.66, clearcoat: 0.8 });

    const basin = new THREE.Mesh(roundedBox(0.27, 0.045, 0.18, 0.02, 4), cream);
    basin.name = 'bath-handwash-basin';
    basin.position.set(0, 0.025, 0);
    basin.receiveShadow = true;
    this.root.add(basin);

    this.soap = new THREE.Group();
    this.soap.name = 'bath-handwash-soap';
    this.soap.position.set(0.13, 0.09, 0.015);
    this.root.add(this.soap);
    const bottle = new THREE.Mesh(roundedBox(0.055, 0.13, 0.05, 0.018, 4), pink);
    bottle.position.y = 0.03;
    bottle.castShadow = true;
    this.soap.add(bottle);
    this.pump = new THREE.Mesh(roundedBox(0.065, 0.018, 0.025, 0.007, 3), cream);
    this.pump.position.set(0.012, 0.108, 0);
    this.pump.castShadow = true;
    this.soap.add(this.pump);
    this.soapTarget = proxy(this.soap, 'handwash:soap', 0.075, [0, 0.05, 0]);

    this.handHolder = new THREE.Group();
    this.handHolder.name = 'bath-handwash-hands';
    this.root.add(this.handHolder);
    this.handTarget = proxy(this.handHolder, 'handwash:hands', 0.105);

    this.foam = new THREE.Group();
    this.foam.name = 'bath-handwash-local-foam';
    this.handHolder.add(this.foam);
    const bubbleGeo = new THREE.SphereGeometry(0.014, 8, 6);
    const bubbleMat = material(0xffffff, { opacity: 0.82, clearcoat: 0.9 });
    const bubbles = new THREE.InstancedMesh(bubbleGeo, bubbleMat, 7);
    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    const scale = new THREE.Vector3();
    for (let i = 0; i < 7; i++) {
      position.set((i % 3 - 1) * 0.022, (i % 2) * 0.014, (i % 4 - 1.5) * 0.008);
      scale.setScalar(0.75 + (i % 3) * 0.14);
      matrix.compose(position, new THREE.Quaternion(), scale);
      bubbles.setMatrixAt(i, matrix);
    }
    bubbles.instanceMatrix.needsUpdate = true;
    this.foam.add(bubbles);

    this.stream = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.012, 0.16, 10), blue);
    this.stream.name = 'bath-handwash-local-water';
    this.stream.renderOrder = 4;
    this.root.add(this.stream);

    this.towel = new THREE.Mesh(roundedBox(0.15, 0.018, 0.105, 0.008, 4), mint);
    this.towel.name = 'bath-handwash-towel';
    this.towel.position.set(-0.14, 0.055, 0.015);
    this.towel.rotation.y = -0.18;
    this.towel.castShadow = true;
    this.root.add(this.towel);
    this.towelTarget = proxy(this.towel, 'handwash:towel', 0.09);

    this.root.traverse(node => {
      if (node.isMesh && !node.userData.proxy) node.receiveShadow = true;
    });
  }

  setHands(leftWorld, rightWorld) {
    if (!leftWorld || !rightWorld) return;
    this.root.updateWorldMatrix(true, false);
    this._inverse.copy(this.root.matrixWorld).invert();
    this._localL.copy(leftWorld).applyMatrix4(this._inverse);
    this._localR.copy(rightWorld).applyMatrix4(this._inverse);
    this.handHolder.position.copy(this._localL).add(this._localR).multiplyScalar(0.5);
    this.stream.position.copy(this.handHolder.position).add(new THREE.Vector3(0, 0.11, -0.01));
  }

  setStage(stage) {
    this.root.visible = stage !== 'inactive';
    this.foam.visible = stage === 'rub' || stage === 'rinse';
    this.stream.visible = stage === 'rinse';
    this.towel.visible = stage === 'dry';
    this.soap.visible = stage === 'soap';
  }

  pickOwner(hit) {
    return owner(hit?.object, 'pickId');
  }

  animatePump(t) {
    this.pump.position.y = 0.108 - Math.sin(Math.PI * t) * 0.018;
  }

  animateRub(t) {
    this.foam.rotation.z = Math.sin(t * Math.PI * 6) * 0.16;
    this.foam.scale.setScalar(0.78 + t * 0.36);
  }

  animateRinse(t) {
    this.stream.scale.y = 0.82 + Math.sin(t * Math.PI * 5) * 0.12;
    this.foam.scale.setScalar(Math.max(0.12, 1 - t * 0.88));
  }

  animateDry(t) {
    this.towel.rotation.z = Math.sin(t * Math.PI * 4) * 0.18;
  }

  resetMotion() {
    this.pump.position.y = 0.108;
    this.foam.rotation.z = 0;
    this.foam.scale.setScalar(1);
    this.stream.scale.set(1, 1, 1);
    this.towel.rotation.set(0, -0.18, 0);
  }

  reset() {
    this.resetMotion();
    this.setStage('inactive');
  }

  dispose() {
    this.reset();
    this.trash.flush();
  }
}
