// Residents who wait for their parcels. Everyone stands on west-facing surfaces.
import * as THREE from 'three';
import { Human, POSE } from './human.js';
import { LEG } from './courier.js';

const WHO = { grandpa: 'grandpa', boy: 'boy', grandma: 'grandma', mom: 'mom', girl: 'girl', shopkeeper: 'shopkeeper' };

export class Resident {
  constructor(scene, stop) {
    this.stop = stop;
    this.h = new Human(WHO[stop.who] || 'mom');
    scene.add(this.h.root);
    this.s = this.h.scale;
    this.state = 'idle';
    this.t = Math.random() * 5;
    this.yaw = 0;
    this.extra = [];
    this.place();
  }
  place() {
    const st = this.stop, r = this.h.root;
    if (st.lean) {
      // kneeling at the edge of a window-hole in her floor, reaching through it
      this.base = new THREE.Vector3(st.lean.x - 0.15 - 0.55 * this.s, st.lean.y - 0.45, st.lean.z);
      this.handAt = new THREE.Vector3(st.lean.x + 0.45, st.lean.y + 0.2, 0);
      this.yawBase = 90;
      this.lean = true;
    } else {
      this.base = new THREE.Vector3(st.feet - LEG * this.s, st.y, st.z ?? 0);
      this.handAt = new THREE.Vector3(st.feet - LEG * this.s - 0.35 * this.s, st.y, 0);
      this.yawBase = 0;
    }
    r.position.copy(this.base);
  }
  // where the courier should come to (gameplay plane)
  get spot() { return this.handAt; }

  update(dt, courierPos) {
    this.t += dt;
    const h = this.h, r = h.root;
    let pose;
    let yaw = this.yawBase;
    if (this.lean) {
      pose = { hipL: [-95], hipR: [-95], kneeL: [-95], kneeR: [-95], spine: [55], chest: [25], neck: [-25], head: [-20],
        shoulderL: [-120, 0, 12], shoulderR: [-120, 0, -12], elbowL: [-10], elbowR: [-10] };
      if (this.state === 'calling') { const w = Math.sin(this.t * 5) * 18; pose.shoulderR = [-120 + w, 0, -20]; }
    } else if (this.state === 'calling') {
      pose = { ...POSE.stand, ...POSE.wave };
      pose.shoulderR = [-150 + Math.sin(this.t * 7) * 20, 0, -30 + Math.sin(this.t * 7) * 15];
      // turn a little towards the courier
      if (courierPos) yaw = THREE.MathUtils.clamp((courierPos.y - this.base.y) * 25, -60, 60);
    } else if (this.state === 'receive') {
      pose = { ...POSE.stand, ...POSE.reach };
    } else if (this.state === 'happy') {
      pose = { ...POSE.stand, ...POSE.hug };
      const b = Math.max(0, Math.sin(this.t * 9));
      r.position.x = this.base.x - b * 0.06;
    } else if (this.state === 'cheer') {
      pose = { ...POSE.stand, ...POSE.cheer };
      pose.shoulderL[2] += Math.sin(this.t * 8) * 10; pose.shoulderR[2] -= Math.sin(this.t * 8) * 10;
    } else if (this.state === 'openDoor') {
      pose = { ...POSE.stand, shoulderR: [-70, 0, -40], elbowR: [-40], spine: [0, 20, 0] };
      yaw = 60;
    } else {
      pose = { ...POSE.stand };
      pose.head = [Math.sin(this.t * 0.7) * 6, Math.sin(this.t * 0.4) * 20, 0];
      pose.spine = [Math.sin(this.t * 1.3) * 2, 0, 0];
    }
    if (this.state !== 'happy') r.position.x += (this.base.x - r.position.x) * Math.min(1, dt * 8);
    h.setPose(pose);
    this.yaw += (yaw - this.yaw) * Math.min(1, dt * 4);
    r.rotation.set(0, 0, 0);
    r.rotateZ(Math.PI / 2);
    r.rotateY(this.yaw * Math.PI / 180);
    h.update(dt, 8);
  }
}

// A group of children for the finale.
export function makeKids(scene, stop) {
  const kinds = ['kidA', 'kidB', 'kidC'];
  const out = [];
  kinds.forEach((k, i) => {
    const r = new Resident(scene, { ...stop, who: 'x', y: stop.y + (i - 1) * 0.65, z: stop.z + (i - 1) * 0.25 });
    // swap in the child outfit
    scene.remove(r.h.root);
    r.h = new Human(k);
    r.s = r.h.scale;
    scene.add(r.h.root);
    r.place();
    out.push(r);
  });
  return out;
}
