/* ===========================================================================
 * activities/care/hub-props.js — CareHub caddy, restock and nose-wipe props
 * ========================================================================== */

import * as THREE from 'three';
import { roundedMesh, softMaterial, target } from './common.js';
import { HUB_SUPPLY_IDS } from './hub-rules.js';

export { HUB_SUPPLY_IDS } from './hub-rules.js';

const HOME = Object.freeze({
  diaper: [0.06, 0.065, 0.02],
  tissue: [0.23, 0.065, 0.02],
  cream: [0.40, 0.065, 0.02]
});

const SLOT = Object.freeze({
  diaper: [0.235, 0.105, 0.205],
  tissue: [0.315, 0.115, 0.205],
  cream: [0.395, 0.11, 0.205]
});

function supply(root, id, color, size) {
  const item = new THREE.Group();
  item.name = `care-hub-supply-${id}`;
  item.position.set(...HOME[id]);
  const body = roundedMesh(size, color, 0.012);
  item.add(body);
  target(item, `hub:item:${id}`, 0.072);
  root.add(item);
  return item;
}

/** All resources are children of CareActivityBase.root and its Trash ledger. */
export function buildHubProps(root) {
  const caddy = new THREE.Group();
  caddy.name = 'care-caddy';
  caddy.position.set(0.31, 0.045, 0.21);
  caddy.add(roundedMesh([0.30, 0.09, 0.20], 0xffd7e5, 0.025));

  const handle = new THREE.Mesh(
    new THREE.TorusGeometry(0.095, 0.012, 8, 22, Math.PI),
    softMaterial(0xff8fb8, { roughness: 0.48, clearcoat: 0.58 })
  );
  handle.rotation.set(0, 0, Math.PI / 2);
  handle.position.set(0, 0.105, 0);
  handle.castShadow = true;
  caddy.add(handle);
  const entryTarget = target(caddy, 'hub:entry', 0.125, [0, 0.07, 0]);
  root.add(caddy);

  const items = new Map([
    ['diaper', supply(root, 'diaper', 0xfff8ef, [0.115, 0.035, 0.08])],
    ['tissue', supply(root, 'tissue', 0xbfeadd, [0.09, 0.075, 0.065])],
    ['cream', supply(root, 'cream', 0xffef9e, [0.055, 0.12, 0.052])]
  ]);

  const slots = new Map();
  for (const id of HUB_SUPPLY_IDS) {
    const slot = roundedMesh([0.064, 0.012, 0.064], 0xfff4f7, 0.008, { opacity: 0.68 });
    slot.name = `care-hub-slot-${id}`;
    slot.position.set(...SLOT[id]);
    target(slot, `hub:slot:${id}`, 0.075);
    root.add(slot);
    slots.set(id, slot);
  }

  const tissue = roundedMesh([0.09, 0.005, 0.075], 0xffffff, 0.002, { opacity: 0.92 });
  tissue.name = 'care-hub-tissue';
  tissue.position.set(...SLOT.tissue);
  tissue.position.y += 0.075;
  tissue.rotation.x = -0.25;
  target(tissue, 'hub:tissue', 0.082);
  root.add(tissue);

  const noseTarget = new THREE.Group();
  noseTarget.name = 'care-hub-nose-target';
  target(noseTarget, 'hub:nose', 0.072);
  root.add(noseTarget);

  const bin = new THREE.Group();
  bin.name = 'care-hub-bin';
  bin.position.set(0.49, 0.045, 0.18);
  const binBody = roundedMesh([0.13, 0.16, 0.13], 0xffe3bf, 0.025);
  binBody.position.y = 0.06;
  bin.add(binBody);
  const lid = roundedMesh([0.145, 0.025, 0.145], 0xffb6c9, 0.01);
  lid.position.set(0, 0.15, -0.055);
  lid.userData.closedRotation = lid.rotation.x;
  bin.add(lid);
  target(bin, 'hub:bin', 0.105, [0, 0.08, 0]);
  root.add(bin);

  const inverse = new THREE.Matrix4();
  const local = new THREE.Vector3();
  const tissueHome = tissue.position.clone();

  const api = {
    caddy, entryTarget, items, slots, tissue, tissueHome, noseTarget, bin, lid,

    reset({ completed = false } = {}) {
      for (const id of HUB_SUPPLY_IDS) {
        const item = items.get(id);
        item.position.set(...HOME[id]);
        item.rotation.set(0, 0, 0);
        item.visible = completed;
        if (completed) item.position.set(...SLOT[id]);
        slots.get(id).visible = false;
      }
      tissue.position.copy(tissueHome);
      tissue.rotation.set(-0.25, 0, 0);
      tissue.visible = false;
      noseTarget.visible = false;
      bin.visible = false;
      lid.rotation.x = lid.userData.closedRotation;
    },

    enterRestock() {
      for (const id of HUB_SUPPLY_IDS) {
        items.get(id).visible = true;
        slots.get(id).visible = true;
      }
      tissue.visible = false;
      noseTarget.visible = false;
      bin.visible = false;
    },

    place(id) {
      const item = items.get(id);
      if (!item) return;
      item.position.set(...SLOT[id]);
      item.rotation.set(0, 0, 0);
      slots.get(id).visible = false;
    },

    showNose() {
      for (const id of HUB_SUPPLY_IDS) this.place(id);
      tissue.position.copy(tissueHome);
      tissue.visible = true;
      noseTarget.visible = true;
      bin.visible = true;
    },

    updateNose(worldPoint) {
      if (!worldPoint) return;
      root.updateWorldMatrix(true, false);
      inverse.copy(root.matrixWorld).invert();
      local.copy(worldPoint).applyMatrix4(inverse);
      local.y += 0.005;
      local.z += 0.045;
      noseTarget.position.copy(local);
    },

    tissueNearNose(offsetX = 0) {
      tissue.position.copy(noseTarget.position).add(new THREE.Vector3(offsetX, -0.015, 0.025));
    },

    binPoint(out = new THREE.Vector3()) {
      return bin.getWorldPosition(out).add(new THREE.Vector3(0, 0.10, 0));
    },

    setLid(amount) {
      lid.rotation.x = lid.userData.closedRotation - Math.sin(Math.PI * amount) * 0.95;
    }
  };

  api.reset();
  return api;
}
