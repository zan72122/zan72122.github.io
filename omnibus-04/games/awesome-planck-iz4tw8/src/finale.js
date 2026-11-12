// The last parcel of the day: a box of helium balloons. Balloons are the only
// things in town that "fall" the other way (-x): they drift back over the rooftops.
import * as THREE from 'three';
import { P, dynamicBody, removeBody } from './physics.js';
import { color } from './materials.js';
import { rand } from './textures.js';

const COLS = [0xe8423f, 0xf2b705, 0x2e86de, 0x27ae60, 0xf368e0, 0xff9f43, 0x00a8b5, 0xffffff, 0x8e44ad];
const TIMES = ['day', 'evening', 'night', 'morning'];

export class Finale {
  constructor(game) {
    this.game = game;
    this.active = false;
    this.balloons = [];
    this.t = 0;
  }

  start(r) {
    const g = this.game;
    this.active = true; this.t = 0; this.phase = 0;
    this.kidsR = r;
    const box = r.parcel;
    const origin = new THREE.Vector3(); box.getWorldPosition(origin);
    this.origin = origin;
    // lid flaps open
    box.children.forEach(ch => { if (ch.geometry && ch.geometry.type === 'BoxGeometry' && ch.position.y > 0.1) ch.visible = false; });
    g.audio?.pop();
    const n = 18;
    for (let i = 0; i < n; i++) {
      g.later(i * 0.07, () => this.spawnBalloon(origin, i));
    }
    this.newSet = [];
    g.later(1.4, () => { box.visible = false; });
  }

  spawnBalloon(o, i) {
    const g = this.game;
    const grp = new THREE.Group();
    const c = COLS[i % COLS.length];
    const mat = new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.18, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.1, sheen: 0.3, transparent: c === 0xffffff, opacity: c === 0xffffff ? 0.9 : 1 });
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 16), mat);
    b.scale.set(1, 1.18, 1); b.castShadow = true;
    // balloons point their knot along gravity (+x): the round top faces -x
    b.rotation.z = Math.PI / 2;
    grp.add(b);
    const knot = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.05, 8), mat);
    knot.position.set(0.2, 0, 0); knot.rotation.z = Math.PI / 2; grp.add(knot);
    grp.position.set(o.x - 0.1, o.y + (rand() - 0.5) * 0.3, o.z + (rand() - 0.5) * 0.3);
    g.scene.add(grp);
    const a = rand() * Math.PI * 2;
    // helium: gravity scaled negative, lots of air drag
    const rec = dynamicBody(grp, [{ shape: { kind: 'ball', r: 0.17 } }], {
      mass: 0.02, gravityScale: -0.32, linDamp: 1.1, angDamp: 2.0, restitution: 0.5, friction: 0.2,
      vel: { x: -1.5 - rand() * 2.5, y: Math.sin(a) * 2.6 + 0.6, z: Math.cos(a) * 1.4 },
    });
    rec.balloon = true;
    // string: a little chain that trails downstream
    const pts = []; for (let k = 0; k < 8; k++) pts.push(new THREE.Vector3());
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: 0xdddddd, transparent: true, opacity: 0.8 }));
    line.frustumCulled = false;
    g.scene.add(line);
    const chain = pts.map(p => p.copy(grp.position));
    const prev = chain.map(p => p.clone());
    this.balloons.push({ rec, line, chain, prev, born: this.game.time });
    if (this.balloons.length > 60) this.retire(this.balloons.shift());
  }

  retire(bl) {
    const g = this.game;
    removeBody(bl.rec);
    g.scene.remove(bl.line);
  }

  updStrings(dt) {
    for (const bl of this.balloons) {
      const o = bl.rec.obj;
      const knot = new THREE.Vector3(0.22, 0, 0).applyQuaternion(o.quaternion).add(o.position);
      const ch = bl.chain, pv = bl.prev, seg = 0.14;
      ch[0].copy(knot);
      for (let k = 1; k < ch.length; k++) {
        const p = ch[k], q = pv[k];
        const vx = (p.x - q.x) * 0.96, vy = (p.y - q.y) * 0.96, vz = (p.z - q.z) * 0.96;
        q.copy(p);
        p.x += vx + 9.8 * dt * dt; p.y += vy; p.z += vz;
      }
      for (let it = 0; it < 3; it++) for (let k = 1; k < ch.length; k++) {
        const a = ch[k - 1], b = ch[k];
        const d = b.clone().sub(a); const L = d.length() || 1e-4;
        b.copy(a).addScaledVector(d, seg / L);
      }
      const pos = bl.line.geometry.attributes.position;
      for (let k = 0; k < ch.length; k++) pos.setXYZ(k, ch[k].x, ch[k].y, ch[k].z);
      pos.needsUpdate = true;
    }
  }

  update(dt, inp) {
    const g = this.game;
    this.t += dt;
    const c = g.courier;
    c.update(dt, { down: false, pressed: false, released: false, target: null });
    // follow the balloons back over the town
    const fresh = this.balloons.filter(b => g.time - b.born < 30);
    if (fresh.length && this.t > 1.2) {
      const m = new THREE.Vector3(); let n = 0, minY = 1e9, maxY = -1e9, minX = 1e9, maxX = -1e9;
      for (const b of fresh) { const p = b.rec.obj.position; m.add(p); n++; minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y); minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); }
      m.divideScalar(n);
      const w = Math.min(30, Math.max(12, (maxX - minX) + 8 + this.t * 0.5)), h = Math.max(9, maxY - minY + 6);
      g.rig.frame(m.x, Math.max(h / 2 - 0.5, m.y + 1), w, h);
    } else {
      g.rig.frame(c.pos.x - 1, c.pos.y + 0.5, 10, 8);
    }
    // end of the day: fade out, next time of day, everything starts over
    if (this.phase === 0 && (this.t > 13 || (inp.pressed && this.t > 4))) {
      this.phase = 1; this.fadeT = 0;
    }
    if (this.phase === 1) {
      this.fadeT += dt;
      g.fade = Math.min(1, this.fadeT / 1.2);
      if (this.fadeT >= 1.3) {
        this.phase = 2;
        g.day++;
        g.sky.set(TIMES[g.day % TIMES.length]);
        g.newDay?.();
        g.reset();
        g.courier.overridePose = null;
        g.rig.snap();
        this.active = false;
        this.fadeIn = 1;
      }
    }
    this.updStrings(dt);
  }

  tick(dt) {
    // strings keep dangling even after the finale
    if (!this.active) this.updStrings(dt);
    const g = this.game;
    if (this.fadeIn > 0) { this.fadeIn = Math.max(0, this.fadeIn - dt / 1.2); g.fade = this.fadeIn; }
  }
}
