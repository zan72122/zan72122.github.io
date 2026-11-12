import * as THREE from 'three';

const SPECS = Object.freeze([
  ['crib',       [1.30, 0.82, 0.72], 0xf2d9b5, ['sleep', 'title']],
  ['dresser',    [1.18, 0.88, 0.52], 0xd7a66f, ['care']],
  ['wardrobe',   [0.82, 1.82, 0.56], 0xe5c79e, ['care']],
  ['shelf',      [1.08, 0.16, 0.28], 0xf2dfc2, ['sleep', 'care']],
  ['toybox',     [0.78, 0.48, 0.48], 0xe8b2c4, ['play']],
  ['highchair',  [0.58, 0.92, 0.58], 0xf0d6ae, ['feed']],
  ['table',      [0.76, 0.48, 0.76], 0xc9dfd5, []],
  ['basket',     [0.48, 0.44, 0.48], 0xc9a77b, ['care']],
  ['plant',      [0.42, 0.82, 0.42], 0x83a878, []],
  ['pouffe',     [0.62, 0.34, 0.62], 0xd9b7c8, ['title']]
]);

export class RoomRenderBudget {
  constructor(room) {
    this.room = room;
    this.entries = [];
    this.smallDetails = [
      room.pictures, room.clock, room.bunting, room.printMemento?.group
    ].filter(Boolean);
    this.batch = this._buildBatch();
    room.group.add(this.batch);
  }

  _buildBatch() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const positionCount = geometry.attributes.position.count;
    const indexCount = geometry.index?.count || positionCount;
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.92,
      metalness: 0
    });
    const batch = new THREE.BatchedMesh(
      SPECS.length,
      positionCount,
      indexCount,
      material
    );
    const geometryId = batch.addGeometry(geometry);
    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const position = new THREE.Vector3();
    const scale = new THREE.Vector3();
    const bounds = new THREE.Box3();

    // Furniture builders often keep the Group at the room origin and offset
    // their children. Read the rendered bounds instead of trusting the Group
    // transform, otherwise low-LOD boxes pile up in the middle of the room.
    this.room.group.updateWorldMatrix(true, true);

    for (const [name, fallbackSize, color, relevant] of SPECS) {
      const original = this.room[name];
      if (!original) continue;
      const instanceId = batch.addInstance(geometryId);
      bounds.makeEmpty().setFromObject(original);
      if (bounds.isEmpty()) {
        original.getWorldPosition(position);
        scale.fromArray(fallbackSize);
        position.y += scale.y * 0.5;
      } else {
        bounds.getCenter(position);
        bounds.getSize(scale);
      }
      this.room.group.worldToLocal(position);
      quaternion.identity();
      batch.setMatrixAt(instanceId, matrix.compose(position, quaternion, scale));
      batch.setColorAt(instanceId, new THREE.Color(color));
      batch.setVisibleAt(instanceId, false);
      this.entries.push({ original, instanceId, relevant: new Set(relevant) });
    }

    geometry.dispose();
    batch.name = 'RoomLowLodBatch';
    batch.castShadow = false;
    batch.receiveShadow = true;
    batch.visible = false;
    return batch;
  }

  apply({ detail = 'full', activity = '' } = {}) {
    const proxy = detail === 'proxy';
    // Gameplay cameras are composed around one part of the room. Keep that
    // activity's authored furniture and omit off-camera sets at high/reduced
    // quality; low quality keeps their usual one-batch silhouettes. Apart from
    // protecting close-up composition, this is what keeps every runtime under
    // the shared draw-call ceiling.
    const focusedGameplay = activity !== '' && activity !== 'title';
    let visibleProxyCount = 0;
    for (const entry of this.entries) {
      // An activity may replace one room prop with an interactive version.
      // Performance-budget changes happen after activity.enter(), so they must
      // not resurrect the parked original (or a proxy of it) on top.
      const activityHidden = entry.original.userData?.activityHidden === true;
      const isRelevant = entry.relevant.has(activity);
      const keepOriginal = !activityHidden
        && (focusedGameplay ? isRelevant : (!proxy || isRelevant));
      entry.original.visible = keepOriginal;
      // The title vignette needs only a clean nursery silhouette. Gameplay at
      // low quality gets the batched proxies; title-only clutter is omitted.
      // Care happens on top of the dresser. Even a cheap crib box between the
      // portrait camera and that surface would make every tool untouchable.
      const showProxy = !activityHidden && proxy && !keepOriginal
        && activity !== 'title' && activity !== 'care';
      this.batch.setVisibleAt(entry.instanceId, showProxy);
      if (showProxy) visibleProxyCount++;
    }
    this.batch.visible = visibleProxyCount > 0;

    const showSmall = detail === 'full';
    for (const object of this.smallDetails) {
      if (object.userData?.sessionMemento) {
        // Relationship traces survive the normal reduced tier. Only the
        // emergency one-batch proxy tier drops this tiny wall card.
        this.room.printMemento?.setDetailVisible(detail !== 'proxy');
        continue;
      }
      // The bunting is above and behind the floor-play camera. Its four tiny
      // cloth draws do not improve that composition, while hiding it keeps the
      // authored toys and all five interactions inside the shared ceiling.
      object.visible = showSmall && !(activity === 'play' && object === this.room.bunting);
    }
  }

  dispose() {
    this.batch.removeFromParent();
    this.batch.material.dispose();
    this.batch.dispose();
  }
}
