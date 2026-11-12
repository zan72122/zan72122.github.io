// Live products on the counter: spawn, sync with physics, scan detection, hops and drags.
import * as THREE from 'three';
import { CANNON } from './physics.js';
import { BELT, SCANNER, BIN, COUNTER_TOP } from './layout.js';
import { patchStoreMaterial } from './lighting.js';
import { product, pillowGeo } from './products.js';
import { frontPanelForCrinkle } from './crinkle.js';
import { clamp, lerp } from './util.js';

const G = 9.82;
const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();

export class Items {
  constructor(scene, physics, lights, cat) {
    this.scene = scene;
    this.physics = physics;
    this.lights = lights;
    this.cat = cat;
    this.list = [];
    this.mat = new THREE.MeshStandardMaterial({ map: cat.texture, roughness: 0.48, metalness: 0.0 });
    patchStoreMaterial(this.mat, lights);
    this.group = new THREE.Group();
    this.group.name = 'items';
    scene.add(this.group);
    this.onScan = null; // (item) => void
    this.onReject = null; // (item) => void
    this.onLand = null; // (item, speed) => void
    this.scanEnabled = false;
    this.nextId = 1;
    this.time = 0;
  }

  spawn(id, pos, opts = {}) {
    const p = product(id);
    let mesh;
    if (opts.crinkled) {
      mesh = this.makeCrinkled();
    } else {
      mesh = new THREE.Mesh(p.geo, this.mat);
      if (p.stickerGeo) {
        const st = new THREE.Mesh(p.stickerGeo, this.mat);
        st.castShadow = true;
        mesh.add(st);
      }
    }
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.group.add(mesh);
    const quat = opts.quat || new THREE.Quaternion().setFromEuler(new THREE.Euler(0, opts.ry ?? 0, 0));
    const body = this.physics.addBody(p.shape, p.mass, pos, quat);
    const item = {
      id: this.nextId++,
      p,
      mesh,
      body,
      scanned: false,
      crinkle: opts.crinkled ? 1 : 0,
      sticker: !!p.stickerGeo,
      dragging: false,
      hopping: 0,
      age: 0,
      lastImpact: 0,
      squash: 0,
      flash: 0,
      inBin: false,
      note: -1,
      tries: 0,
    };
    mesh.userData.item = item;
    body.userData = { item };
    if (opts.vel) body.velocity.set(opts.vel.x, opts.vel.y, opts.vel.z);
    if (opts.spin) body.angularVelocity.set(opts.spin.x, opts.spin.y, opts.spin.z);
    body.addEventListener('collide', (e) => {
      const rel = Math.abs(e.contact.getImpactVelocityAlongNormal());
      if (rel > 0.35 && this.time - item.lastImpact > 0.06) {
        item.lastImpact = this.time;
        if (this.onLand) this.onLand(item, rel, e.body);
      }
    });
    this.list.push(item);
    this.sync(item);
    return item;
  }

  makeCrinkled() {
    // its own canvas so the barcode can be smoothed live
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 320;
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.32, metalness: 0.15 });
    patchStoreMaterial(mat, this.lights);
    const full = { u0: 0, v0: 0, u1: 1, v1: 1 };
    const back = { u0: 0, v0: 0, u1: 1, v1: 1 };
    // base and crumpled shapes; we morph between them
    const smooth = pillowGeo(0.2, 0.26, 0.07, full, back, 14, 16);
    const crumpled = smooth.clone();
    const pos = crumpled.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const n = Math.sin(x * 61 + y * 23) * Math.cos(y * 47 - x * 11) + 0.5 * Math.sin(x * 140 + y * 90);
      pos.setXYZ(i, x * (0.93 + 0.04 * Math.sin(y * 30)), y * 0.94 + n * 0.006, z * 0.75 + n * 0.012);
    }
    crumpled.computeVertexNormals();
    smooth.computeVertexNormals();
    smooth.morphAttributes.position = [crumpled.attributes.position];
    smooth.morphAttributes.normal = [crumpled.attributes.normal];
    smooth.computeBoundingBox();
    const mesh = new THREE.Mesh(smooth, mat);
    mesh.morphTargetInfluences = [1];
    mesh.userData.crinkleCanvas = c;
    mesh.userData.crinkleTex = tex;
    frontPanelForCrinkle(c, 1);
    tex.needsUpdate = true;
    return mesh;
  }

  setCrinkle(item, v) {
    item.crinkle = clamp(v, 0, 1);
    const m = item.mesh;
    if (m.morphTargetInfluences) m.morphTargetInfluences[0] = item.crinkle;
    if (m.userData.crinkleCanvas) {
      frontPanelForCrinkle(m.userData.crinkleCanvas, item.crinkle);
      m.userData.crinkleTex.needsUpdate = true;
    }
  }

  remove(item) {
    this.physics.removeBody(item.body);
    this.group.remove(item.mesh);
    const i = this.list.indexOf(item);
    if (i >= 0) this.list.splice(i, 1);
  }

  sync(item) {
    const b = item.body;
    item.mesh.position.set(b.position.x, b.position.y, b.position.z);
    item.mesh.quaternion.set(b.quaternion.x, b.quaternion.y, b.quaternion.z, b.quaternion.w);
    if (item.squash > 0) {
      const s = item.squash;
      item.mesh.scale.set(1 + s * 0.12, 1 - s * 0.18, 1 + s * 0.12);
    } else if (item.mesh.scale.x !== 1) item.mesh.scale.set(1, 1, 1);
  }

  // Which way does the watermelon sticker face (world)?
  stickerDir(item, out = _v) {
    const q = item.body.quaternion;
    _q.set(q.x, q.y, q.z, q.w);
    return out.set(-1, 0, 0).applyQuaternion(_q);
  }

  inScanZone(b) {
    const p = b.position;
    return p.x > SCANNER.x0 - 0.02 && p.x < SCANNER.x1 + 0.02 && p.z > SCANNER.z0 && p.z < SCANNER.z1 && p.y < COUNTER_TOP + 0.36 && p.y > COUNTER_TOP - 0.05;
  }

  update(dt) {
    this.time += dt;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const it = this.list[i];
      it.age += dt;
      it.squash = Math.max(0, it.squash - dt * 6);
      if (it.placing) this.updatePlacing(it, dt);
      const b = it.body;
      // scanning happens while crossing the red window
      if (this.scanEnabled && !it.scanned && !it.dragHold && this.inScanZone(b)) {
        if (it.p.id === 'watermelon') {
          const d = this.stickerDir(it);
          const facing = -d.y > 0.55 || -d.z > 0.75;
          if (facing) this.markScanned(it);
          else if (!it.rejectT || this.time - it.rejectT > 1.2) {
            it.rejectT = this.time;
            it.tries++;
            if (this.onReject) this.onReject(it, 'sticker');
          }
        } else if (it.crinkle > 0.22) {
          if (!it.rejectT || this.time - it.rejectT > 0.9) {
            it.rejectT = this.time;
            it.tries++;
            if (this.onReject) this.onReject(it, 'crinkle');
          }
        } else {
          this.markScanned(it);
        }
      }
      // the scale plate is laid with a whisper of slope toward the bagging well
      const onPlate = b.position.x > BELT.x1 - 0.04 && b.position.x < BIN.x0 + 0.12 && Math.abs(b.position.z) < 0.34 && b.position.y < COUNTER_TOP + 0.3;
      if (onPlate && !it.dragging && !it.placing && it.p.id !== 'watermelon' && !(it.crinkle > 0.22)) {
        b.wakeUp();
        b.velocity.x += (0.55 - b.velocity.x) * Math.min(1, dt * 2.5);
      }
      // anything stranded on the counter beside the belt eases back onto it (angled side guards)
      if (!it.scanned && !it.dragging && !it.placing && b.position.x > BELT.x0 && b.position.x < BELT.x1 && Math.abs(b.position.z) > 0.2 && Math.abs(b.position.z) < 0.6 && b.position.y < COUNTER_TOP + 0.35 && b.position.y > COUNTER_TOP - 0.05) {
        b.wakeUp();
        const want = -Math.sign(b.position.z) * 0.35;
        b.velocity.z += (want - b.velocity.z) * Math.min(1, dt * 3);
      }
      // anything left on the counter at the start of the belt slides onto it
      if (!it.scanned && !it.dragging && !it.placing && b.position.x < BELT.x0 + 0.06 && b.position.y < COUNTER_TOP + 0.35 && b.position.y > COUNTER_TOP - 0.05 && Math.abs(b.position.z) < 0.6) {
        b.wakeUp();
        b.velocity.x += (0.4 - b.velocity.x) * Math.min(1, dt * 3);
      }
      it.inBin = b.position.x > BIN.x0 && b.position.x < BIN.x1 + 0.05 && b.position.z > BIN.z0 - 0.05 && b.position.z < BIN.z1 + 0.05 && b.position.y < COUNTER_TOP + 0.6;
      // deep in the well nobody sees their shadows
      it.mesh.castShadow = !(it.inBin && b.position.y < COUNTER_TOP - 0.05);
      // anything that escapes the counter quietly returns to the pile
      if (b.position.y < -1 || Math.abs(b.position.x) > 6 || Math.abs(b.position.z) > 6) {
        b.position.set(lerp(BIN.x0, BIN.x1, 0.5), COUNTER_TOP + 0.4, 0);
        b.velocity.set(0, 0, 0);
      }
      this.sync(it);
    }
    this.settleBin();
  }

  // Keep the bagging well a mound, never a dam: quietly retire the deepest, buried items.
  settleBin(max = 28) {
    this._settleT = (this._settleT || 0) + 1;
    if (this._settleT < 12) return;
    this._settleT = 0;
    let n = 0;
    let low = null;
    let top = -1;
    for (const it of this.list) {
      if (!it.inBin || it.dragging || it.placing || it.p.id === 'watermelon') continue;
      n++;
      top = Math.max(top, it.body.position.y);
      if (!low || it.body.position.y < low.body.position.y) low = it;
    }
    if (n > max && low && low.body.position.y < top - 0.12) this.remove(low);
  }

  markScanned(it) {
    it.scanned = true;
    it.flash = 1;
    if (this.onScan) this.onScan(it);
  }

  // Ballistic hop to a target point, apex `h` above the higher end.
  hop(it, target, h = 0.18, spin = 1) {
    const b = it.body;
    b.wakeUp();
    const p0 = b.position;
    const apex = Math.max(p0.y, target.y) + h;
    const vy = Math.sqrt(2 * G * Math.max(0.01, apex - p0.y));
    const tUp = vy / G;
    const tDown = Math.sqrt((2 * Math.max(0.01, apex - target.y)) / G);
    const T = tUp + tDown;
    b.velocity.set((target.x - p0.x) / T, vy, (target.z - p0.z) / T);
    b.angularVelocity.set((Math.random() - 0.5) * 6 * spin, (Math.random() - 0.5) * 4 * spin, -(4 + Math.random() * 4) * spin);
    it.hopping = T;
  }

  // Set an item down along a scripted arc (hands placing things), then let physics take it.
  place(it, target, dur = 0.45, lift = 0.1) {
    const b = it.body;
    b.type = CANNON.Body.KINEMATIC;
    b.velocity.set(0, 0, 0);
    b.angularVelocity.set(0, 0, 0);
    it.placing = { from: new THREE.Vector3(b.position.x, b.position.y, b.position.z), to: target.clone(), t: 0, dur, lift };
  }

  updatePlacing(it, dt) {
    const pl = it.placing;
    const b = it.body;
    pl.t += dt;
    const k = Math.min(1, pl.t / pl.dur);
    const e = k * k * (3 - 2 * k);
    const x = pl.from.x + (pl.to.x - pl.from.x) * e;
    const y = pl.from.y + (pl.to.y - pl.from.y) * e + Math.sin(Math.PI * k) * pl.lift;
    const z = pl.from.z + (pl.to.z - pl.from.z) * e;
    // kinematic bodies move by velocity: aim for the next point
    b.velocity.set((x - b.position.x) / Math.max(dt, 1e-3), (y - b.position.y) / Math.max(dt, 1e-3), (z - b.position.z) / Math.max(dt, 1e-3));
    if (k >= 1) {
      it.placing = null;
      b.type = CANNON.Body.DYNAMIC;
      b.velocity.set(0, -0.2, 0);
      b.angularVelocity.set(0, 0, 0);
      b.wakeUp();
    }
  }

  // A good landing spot in the bagging well, preferring lower parts of the pile.
  binTarget() {
    const x = lerp(BIN.x0 + 0.18, BIN.x1 - 0.12, Math.random());
    const z = lerp(BIN.z0 + 0.1, BIN.z1 - 0.1, Math.random());
    let top = BIN.floor;
    for (const it of this.list) {
      if (!it.inBin) continue;
      const p = it.body.position;
      if (Math.abs(p.x - x) < 0.15 && Math.abs(p.z - z) < 0.15) top = Math.max(top, p.y + 0.05);
    }
    return new THREE.Vector3(x, top + 0.05, z);
  }

  pileHeight() {
    let top = BIN.floor;
    for (const it of this.list) if (it.inBin) top = Math.max(top, it.body.position.y);
    return top;
  }

  countOnBelt() {
    let n = 0;
    for (const it of this.list) if (!it.scanned && this.physics.onBelt(it.body)) n++;
    return n;
  }

  unscanned() {
    return this.list.filter((it) => !it.scanned);
  }
}

