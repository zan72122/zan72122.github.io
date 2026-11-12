// Loose things: room contents settled by sideways gravity, and the endless
// trickle of household objects that falls out of the town into the sky.
import * as THREE from 'three';
import { makeItem, ROOM_SETS, SKY_ITEMS, STREET_ITEMS } from './furniture.js';
const FAR_ITEMS = ['sofa', 'bed', 'fridge', 'armchair', 'futonRoll', 'table', 'chair', 'washer', 'bookshelf', 'tv', 'cushion', 'bin', 'plant', 'laundryBasket', 'umbrella', 'desk'];
import { dynamicBody, removeBody, settle, isSleeping, P } from './physics.js';
import { rand, setSeed } from './textures.js';

const MAX_FLYING = 30;
// places along the street where loose things keep slipping away (all on the street side, z > 1.5)
const LOCAL = [
  { x: 7.95, y: 3.3, dy: 0.8, z: 1.7, dz: 0.5, items: ['cushion', 'laundryBasket', 'futonRoll', 'bucket', 'ball', 'umbrella', 'bear', 'plant'] },
  { x: 20.2, y: 0.4, dy: 0.5, z: 2.4, dz: 0.8, items: ['plant', 'bucket', 'ball', 'bin', 'umbrella', 'cardboard'] },
  { x: 44.8, y: 0.3, dy: 0.4, z: 2.4, dz: 1.2, items: ['ball', 'bucket', 'toyCar', 'blocks', 'ball'] },
  // parcels slipping out of the crashed delivery van
  { x: -9.0, y: 0.4, dy: 1.0, z: 4.2, dz: 1.0, items: ['cardboard', 'cardboard', 'cardboard'] },
];

export class Stuff {
  constructor(game) {
    this.game = game;
    this.scene = game.scene;
    this.flying = [];
    this.timer = 0;
    this.streetTimer = 0;
    this.impacts = [];
    this.far = [];        // visual-only things falling behind the town
    this.farTimer = 0;
  }

  burst() { this.farTimer = 0; this.burstT = 4; this.timer = 0; }

  // Far away, the whole town keeps losing things: they tumble sideways across the sky.
  updateFar(dt, cam, camObj) {
    this.farTimer -= dt;
    this.burstT = Math.max(0, (this.burstT || 0) - dt);
    if (this.farTimer <= 0 && this.far.length < 26) {
      this.farTimer = this.burstT > 0 ? 0.12 + rand() * 0.15 : 0.25 + rand() * 0.55;
      const name = FAR_ITEMS[Math.floor(rand() * FAR_ITEMS.length)];
      const it = makeItem(name);
      const g = it.group;
      // released somewhere behind the town, placed so that it shows in the frame
      // high above the roofs, so it reads against the sky
      const z = -10 - rand() * 30;
      if (camObj) {
        const ndc = new THREE.Vector3(-1.1 + rand() * 1.4, 0.2 + rand() * 0.75, 0.5).unproject(camObj);
        const o = camObj.position, d = ndc.sub(o).normalize();
        const t = (z - o.z) / d.z;
        g.position.set(o.x + d.x * t, Math.max(9.5 + rand() * 2, o.y + d.y * t), z);
      } else g.position.set(cam.x, 12, z);
      g.rotation.set(rand() * 6, rand() * 6, rand() * 6);
      g.traverse(o => { if (o.isMesh) { o.castShadow = false; } });
      this.scene.add(g);
      const vt = 8 + rand() * 24; // terminal speed: cushions float, fridges plummet
      this.far.push({ g, vx: rand() * 1.5, vy: (rand() - 0.3) * 1.2, vz: (rand() - 0.5) * 0.8, k: 9.8 / (vt * vt), w: new THREE.Vector3(rand() - 0.5, rand() - 0.5, rand() - 0.5).multiplyScalar(2.5) });
    }
    for (let i = this.far.length - 1; i >= 0; i--) {
      const f = this.far[i];
      f.vx += (9.8 - f.k * f.vx * f.vx) * dt;
      f.vy *= 1 - 0.3 * dt;
      f.g.position.x += f.vx * dt; f.g.position.y += f.vy * dt; f.g.position.z += f.vz * dt;
      f.g.rotation.x += f.w.x * dt; f.g.rotation.y += f.w.y * dt; f.g.rotation.z += f.w.z * dt;
      if (f.g.position.x > (cam ? cam.x : 0) + 400) { this.scene.remove(f.g); this.far.splice(i, 1); }
    }
  }

  spawn(name, pos, { vel, angvel, rotY = 0, sleep = false, mass } = {}) {
    const it = makeItem(name);
    const g = it.group;
    g.position.copy(pos);
    g.rotation.y = rotY;
    this.scene.add(g);
    const rec = dynamicBody(g, it.parts, { mass: mass ?? it.mass, vel, angvel, sleep, friction: name === 'apple' || name === 'orange' ? 0.4 : 0.7, restitution: name === 'ball' ? 0.6 : 0.12 });
    rec.name = name;
    return rec;
  }

  // furnish every room, then let sideways gravity arrange it
  furnish(rooms) {
    setSeed(777);
    for (const r of rooms) {
      const set = ROOM_SETS[r.kind] || [];
      const zA = r.rz0 + 0.5, zB = -1.0; // keep the gameplay corridor (z≈0) clear
      let i = 0;
      for (const name of set) {
        const x = r.rx0 + 0.5 + rand() * (r.rx1 - r.rx0 - 1.0);
        const z = zA + rand() * (zB - zA);
        const y = r.y0 + 0.02 + (name === 'apple' || name === 'orange' ? rand() * 1.2 : 0) + (i % 3) * 0.01;
        const rec = this.spawn(name, new THREE.Vector3(x, y, z), { rotY: (rand() - 0.5) * 0.6 });
        rec.obj.traverse(o => { if (o.isMesh) o.castShadow = false; });
        if (P.fallback && this.game.w2d) {
          // without a physics engine, lay things down against the room's east wall by hand
          const face = this.game.w2d.castEast(x, x + 30, y + 0.1, y + 0.2);
          const box = new THREE.Box3().setFromObject(rec.obj);
          rec.obj.rotation.z = -Math.PI / 2 * (rand() < 0.6 ? 1 : 0);
          rec.obj.updateMatrixWorld(true);
          const b2 = new THREE.Box3().setFromObject(rec.obj);
          if (face) rec.obj.position.x += face.x0 - b2.max.x - 0.01;
          rec.obj.position.y += y - b2.min.y + (box.max.y - box.min.y) * 0.1;
        }
        i++;
      }
    }
    settle(200);
  }

  // A few things already fell into the alleys/streets and lie against west walls.
  update(dt, focusX) {
    const g = this.game;
    this.timer -= dt;
    const emitters = g.town.mansion?.emitters || [];
    if (this.timer <= 0 && emitters.length && this.flying.length < MAX_FLYING) {
      this.timer = (this.burstT > 0 ? 0.3 : 1.4) + rand() * (this.burstT > 0 ? 0.4 : 2.0);
      const e = emitters[Math.floor(rand() * Math.min(this.burstT > 0 ? 6 : 3, emitters.length))];
      const name = SKY_ITEMS[Math.floor(rand() * SKY_ITEMS.length)];
      const rec = this.spawn(name, new THREE.Vector3(e.x, e.y, e.z + (rand() - 0.3) * 1.2), {
        vel: { x: 1.5 + rand() * 2, y: (rand() - 0.3) * 1.2, z: (rand() - 0.5) * 1.6 },
        angvel: { x: (rand() - 0.5) * 3, y: (rand() - 0.5) * 3, z: (rand() - 0.5) * 3 },
      });
      rec.sky = true;
      this.flying.push(rec);
      g.audio?.whoosh(0.15);
    }
    // household things slipping out of balconies and gardens near where we are looking
    this.localTimer = (this.localTimer ?? 1) - dt;
    if (this.localTimer <= 0 && this.flying.length < MAX_FLYING) {
      this.localTimer = 1.4 + rand() * 2.2;
      const near = LOCAL.filter(e => Math.abs(e.x - focusX) < 22);
      if (near.length) {
        const e = near[Math.floor(rand() * near.length)];
        const name = e.items[Math.floor(rand() * e.items.length)];
        const rec = this.spawn(name, new THREE.Vector3(e.x, e.y + rand() * (e.dy || 0), e.z + (rand() - 0.5) * (e.dz || 0.4)), {
          vel: { x: 0.8 + rand() * 1.5, y: (rand() - 0.4) * 0.8, z: (rand() - 0.2) * 0.8 },
          angvel: { x: (rand() - 0.5) * 4, y: (rand() - 0.5) * 4, z: (rand() - 0.5) * 4 },
        });
        rec.sky = true;
        this.flying.push(rec);
        g.audio?.whoosh(0.12);
      }
    }
    // produce rolling out of the shop front, along the street and off the edge of town
    this.streetTimer -= dt;
    const shop = g.town.houses.C;
    if (this.streetTimer <= 0 && shop && this.flying.length < MAX_FLYING) {
      this.streetTimer = 2.2 + rand() * 2.5;
      const name = STREET_ITEMS[Math.floor(rand() * STREET_ITEMS.length)];
      const rec = this.spawn(name, new THREE.Vector3(shop.spec.x1 - 0.3, 0.55 + rand() * 0.5, shop.spec.zf + 0.5 + rand() * 0.6), {
        vel: { x: 0.8 + rand(), y: 0.1 * rand(), z: 0.3 * rand() },
        angvel: { x: 0, y: 0, z: -2 - rand() * 3 },
      });
      rec.sky = true;
      this.flying.push(rec);
    }
    // recycle things that have fallen far away into the sky
    for (let i = this.flying.length - 1; i >= 0; i--) {
      const r = this.flying[i];
      const p = r.obj.position;
      if (p.x > 260 || p.y < -60 || p.y > 120 || (performance.now() - r.born > 60000 && isSleeping(r))) {
        removeBody(r);
        this.flying.splice(i, 1);
      }
    }
  }
}
