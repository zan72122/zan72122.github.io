// The supermarket building: floor, walls, ceiling, shelving, stocked products,
// cold cases, signs, closed neighbour lanes and every ceiling fixture.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/BufferGeometryUtils.js';
import { STORE, GONDOLA_X, GONDOLA_Z, AISLE_X, MAIN_AISLE_Z, BACK_AISLE_Z, COUNTER, COUNTER_TOP, DOOR } from './layout.js';
// (decor uses the same constants)
import { patchStoreMaterial } from './lighting.js';
import * as T from './textures.js';
import { PRODUCTS, product, shelfProxy } from './products.js';
import { drawRoundSign, drawIcon } from './icons.js';
import { rng } from './util.js';

function std(opts) {
  return new THREE.MeshStandardMaterial(opts);
}

export class Store {
  constructor(scene, lights, cat) {
    this.scene = scene;
    this.lights = lights;
    this.cat = cat;
    this.root = new THREE.Group();
    this.root.name = 'store';
    scene.add(this.root);
    this.sections = []; // shelf sections the receipt can wake up
    this.shelfMeshes = [];
    this.fixtureList = [];
    this.speakers = [];
    this.signs = [];
    this.wiggle = []; // instanced product groups that can dance

    this.buildShell();
    this.buildGondolas();
    this.buildProduce();
    this.buildBakery();
    this.buildColdCases();
    this.buildFixtures();
    this.buildSigns();
    this.buildFrontArea();
    this.buildDecor();
    this.buildExterior();
    this.cat.texture.needsUpdate = true;
  }

  mat(opts, reflect = 0) {
    const m = std(opts);
    patchStoreMaterial(m, this.lights, reflect ? { reflect } : {});
    return m;
  }

  buildShell() {
    const W = STORE.x1 - STORE.x0;
    const D = STORE.z1 - STORE.z0;
    const cx = (STORE.x0 + STORE.x1) / 2;
    const cz = (STORE.z0 + STORE.z1) / 2;

    const floorTex = T.canvasTex(T.floorTexture(), { repeat: [W / 2.4, D / 2.4], aniso: 8 });
    this.floorMat = this.mat({ map: floorTex, roughness: 0.42, metalness: 0.0 }, 0.85);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), this.floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(cx, 0, cz);
    floor.receiveShadow = true;
    floor.name = 'floor';
    this.root.add(floor);
    this.floor = floor;

    // walls (single-sided so the dollhouse cut-away works from outside)
    const wallTex = T.canvasTex(T.wallTexture('#d9573e'), { repeat: [W / 4, 1] });
    const wallMat = this.mat({ map: wallTex, roughness: 0.92 });
    const H = STORE.h;
    const mkWall = (w, x, z, ry, tex = wallMat) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, H), tex);
      m.position.set(x, H / 2, z);
      m.rotation.y = ry;
      this.root.add(m);
      return m;
    };
    mkWall(W, cx, STORE.z0, 0); // back
    const sideTex = T.canvasTex(T.wallTexture('#3f8a6a'), { repeat: [D / 4, 1] });
    const sideMat = this.mat({ map: sideTex, roughness: 0.92 });
    mkWall(D, STORE.x0, cz, Math.PI / 2, sideMat);
    mkWall(D, STORE.x1, cz, -Math.PI / 2, sideMat);

    // front wall with a band of windows looking out at the night
    const frontMat = this.mat({ color: '#e9dfcf', roughness: 0.9 });
    const lowH = 0.7;
    const winTop = 2.9;
    const fz = STORE.z1;
    const parts = [];
    const pl = (w, h, x, y) => {
      const g = new THREE.PlaneGeometry(w, h);
      g.rotateY(Math.PI);
      g.translate(x, y, fz);
      parts.push(g);
    };
    // the automatic doors sit in the window band near the right
    const DX = DOOR.x;
    const DW = DOOR.w;
    const dx0 = DX - DW / 2;
    const dx1 = DX + DW / 2;
    pl(dx0 - STORE.x0, lowH, (STORE.x0 + dx0) / 2, lowH / 2);
    pl(STORE.x1 - dx1, lowH, (dx1 + STORE.x1) / 2, lowH / 2);
    pl(DW, winTop - DOOR.h, DX, (DOOR.h + winTop) / 2);
    pl(W, H - winTop, cx, (winTop + H) / 2);
    for (let x = STORE.x0; x <= STORE.x1 + 0.01; x += 2.75) if (x < dx0 - 0.1 || x > dx1 + 0.1) pl(0.16, winTop - lowH, x, (lowH + winTop) / 2);
    const front = new THREE.Mesh(mergeGeometries(parts), frontMat);
    this.root.add(front);
    this.frontGeo = { lowH, winTop, DX, DW, dx0, dx1 };
    const nightTex = T.canvasTex(T.nightTexture(), { aniso: 4 });
    const night = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.6, (winTop - lowH) * 2.2), new THREE.MeshBasicMaterial({ map: nightTex, toneMapped: false, color: new THREE.Color(0.85, 0.85, 0.95) }));
    night.rotation.y = Math.PI;
    night.position.set(cx, (winTop + lowH) / 2 + 0.6, fz + 3.5);
    this.root.add(night);
    this.night = night;

    // ceiling (faces down only: invisible from above)
    const ceilTex = T.canvasTex(T.ceilingTexture(), { repeat: [W / 2.4, D / 2.4] });
    const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W, D), this.mat({ map: ceilTex, roughness: 1, color: '#5a5f6a' }));
    ceil.rotation.x = Math.PI / 2;
    ceil.position.set(cx, H, cz);
    this.root.add(ceil);
    this.ceiling = ceil;
    // exposed beams and a big duct, painted dark, so the light tubes pop
    const beamMat = this.mat({ color: '#3a3e48', roughness: 0.8 });
    const beams = [];
    for (let z = STORE.z0 + 2; z < STORE.z1; z += 4) beams.push(new THREE.BoxGeometry(W, 0.32, 0.18).translate(cx, H - 0.16, z));
    beams.push(new THREE.CylinderGeometry(0.28, 0.28, D - 1, 16).rotateX(Math.PI / 2).translate(-5.6, H - 0.45, cz));
    beams.push(new THREE.CylinderGeometry(0.28, 0.28, D - 1, 16).rotateX(Math.PI / 2).translate(5.6, H - 0.45, cz));
    this.ceilingStuff = new THREE.Group();
    this.root.add(this.ceilingStuff);
    this.ceilingStuff.add(new THREE.Mesh(mergeGeometries(beams), beamMat));

    // pillars
    const pillarMat = this.mat({ color: '#efe7da', roughness: 0.8 });
    const pg = [];
    for (const x of [-9.8, 9.8]) for (const z of [-9.6]) pg.push(new THREE.BoxGeometry(0.5, H, 0.5).translate(x, H / 2, z));
    for (const x of [-2.8 * 1.5 - 0.0, 2.8 * 1.5]) pg.push(new THREE.BoxGeometry(0.45, H, 0.45).translate(x, H / 2, 2.6));
    this.pillars = new THREE.Mesh(mergeGeometries(pg), pillarMat);
    this.root.add(this.pillars);

    this.lights.addGlow(cx, STORE.z1 - 0.8, 12, 1.6, '#3a4a80', 0.35); // moonlight at the windows
  }

  // Shelving runs with stocked products.
  buildGondolas() {
    const shelfMat = this.mat({ color: '#f2ede4', roughness: 0.55, metalness: 0.05 });
    const backMat = this.mat({ color: '#d8d0c0', roughness: 0.8 });
    const railTex = T.canvasTex(T.railTexture(), { repeat: [6, 1] });
    const railMat = this.mat({ map: railTex, roughness: 0.6 });
    const shelfParts = [];
    const backParts = [];
    const railParts = [];
    const [z0, z1] = GONDOLA_Z; // z0 < z1
    const len = z1 - z0;
    const zc = (z0 + z1) / 2;
    const levels = [0.12, 0.5, 0.88, 1.26, 1.64];
    const H = 1.95;
    const r = rng(77);

    // product placement buckets per product index
    const buckets = new Map();
    const put = (pi, m) => {
      if (!buckets.has(pi)) buckets.set(pi, []);
      buckets.get(pi).push(m);
    };
    const mtx = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);

    // themes per aisle so each aisle has its own colour story
    const aisleThemes = [
      ['cereal', 'cookies', 'candy', 'chips', 'donut'],
      ['juice', 'can', 'ketchup', 'juice', 'can'],
      ['chips', 'candy', 'cookies', 'cereal', 'chips'],
      ['tissue', 'toilet', 'tissue', 'cereal', 'toilet'],
      ['can', 'ketchup', 'riceball', 'tofu', 'juice'],
      ['cookies', 'donut', 'candy', 'cereal', 'chips'],
    ];

    GONDOLA_X.forEach((gx, gi) => {
      // body
      backParts.push(new THREE.BoxGeometry(0.06, H, len).translate(gx, H / 2, zc));
      shelfParts.push(new THREE.BoxGeometry(1.0, 0.12, len).translate(gx, 0.06, zc)); // base
      shelfParts.push(new THREE.BoxGeometry(1.02, 0.04, len + 0.02).translate(gx, H, zc)); // top cap
      // end caps
      for (const ez of [z0, z1]) {
        shelfParts.push(new THREE.BoxGeometry(1.02, H, 0.04).translate(gx, H / 2, ez));
      }
      for (const side of [-1, 1]) {
        // skip the outer faces of the outermost gondolas facing the walls
        const aisleIndex = side < 0 ? gi - 1 : gi;
        const facesAisle = aisleIndex >= 0 && aisleIndex < AISLE_X.length;
        for (const ly of levels) {
          shelfParts.push(new THREE.BoxGeometry(0.46, 0.025, len - 0.04).translate(gx + side * 0.25, ly, zc));
          railParts.push(new THREE.BoxGeometry(0.012, 0.045, len - 0.04).translate(gx + side * 0.485, ly + 0.005, zc));
        }
        if (!facesAisle) continue;
        const theme = aisleThemes[aisleIndex] || aisleThemes[0];
        // sections of 1.25m
        const nSec = 8;
        const secLen = (len - 0.1) / nSec;
        for (let s = 0; s < nSec; s++) {
          const sz0 = z0 + 0.05 + s * secLen;
          const section = { x: gx + side * 0.3, z: sz0 + secLen / 2, aisle: aisleIndex, items: [] };
          this.sections.push(section);
          levels.forEach((ly, li) => {
            const pid = theme[(s + li * 2 + gi) % theme.length];
            const p = product(pid);
            const sx = p.size.x;
            const sy = p.size.y;
            const sd = p.size.z;
            const gap = 0.012;
            const count = Math.max(1, Math.floor((secLen - 0.04) / (sx + gap)));
            const maxH = li < levels.length - 1 ? levels[li + 1] - ly - 0.04 : 0.32;
            const stack = sy * 2 + 0.01 < maxH && sy < 0.09 ? 2 : 1;
            for (let k = 0; k < count; k++) {
              if (r() < 0.06) continue; // a few gaps (it is night, things sold out)
              for (let st = 0; st < stack; st++) {
                const zz = sz0 + 0.02 + (k + 0.5) * (sx + gap);
                const depthRows = 2;
                for (let dr = 0; dr < depthRows; dr++) {
                  const xx = gx + side * (0.47 - sd / 2 - 0.01 - dr * (sd + 0.01));
                  if (Math.abs(xx - gx) < 0.05 + sd / 2) continue;
                  q.setFromAxisAngle(up, side * (Math.PI / 2) + (r() - 0.5) * 0.08);
                  mtx.compose(new THREE.Vector3(xx, ly + 0.013 + st * (sy + 0.004), zz), q, new THREE.Vector3(1, 1, 1));
                  put(p.index, { m: mtx.clone(), section, dr });
                }
              }
            }
          });
        }
      }
    });

    this.root.add(new THREE.Mesh(mergeGeometries(shelfParts), shelfMat));
    this.root.add(new THREE.Mesh(mergeGeometries(backParts), backMat));
    // overstock cartons on the gondola tops
    const boxC = T.makeCanvas(128, 128);
    const bxg = boxC.getContext('2d');
    bxg.fillStyle = '#c4935e';
    bxg.fillRect(0, 0, 128, 128);
    bxg.fillStyle = '#d9b07c';
    bxg.fillRect(0, 56, 128, 16);
    bxg.strokeStyle = 'rgba(80,50,20,0.35)';
    bxg.lineWidth = 3;
    bxg.strokeRect(2, 2, 124, 124);
    bxg.fillStyle = 'rgba(60,40,20,0.5)';
    bxg.fillRect(20, 90, 50, 6);
    bxg.fillRect(20, 100, 34, 6);
    const boxMat = this.mat({ map: T.canvasTex(boxC), roughness: 0.9 });
    const cartons = [];
    GONDOLA_X.forEach((gx) => {
      let z = z0 + 0.4;
      while (z < z1 - 0.5) {
        const w = 0.45 + r() * 0.35;
        const h = 0.22 + r() * 0.25;
        const d = 0.4 + r() * 0.3;
        if (r() > 0.35) {
          const g = new THREE.BoxGeometry(d, h, w);
          g.rotateY((r() - 0.5) * 0.2);
          g.translate(gx + (r() - 0.5) * 0.2, H + 0.02 + h / 2, z + w / 2);
          cartons.push(g);
          if (r() > 0.6) {
            const g2 = new THREE.BoxGeometry(d * 0.8, h * 0.8, w * 0.8);
            g2.rotateY((r() - 0.5) * 0.4);
            g2.translate(gx + (r() - 0.5) * 0.15, H + 0.02 + h + (h * 0.8) / 2, z + w / 2);
            cartons.push(g2);
          }
        }
        z += w + 0.1 + r() * 0.6;
      }
    });
    const cm = new THREE.Mesh(mergeGeometries(cartons), boxMat);
    this.root.add(cm);
    this.root.add(new THREE.Mesh(mergeGeometries(railParts), railMat));
    this.buildInstances(buckets);
  }

  // Turn placement buckets into instanced meshes (one per product type).
  buildInstances(buckets) {
    if (!this.productMat) {
      this.productMat = this.mat({ map: this.cat.texture, roughness: 0.5 });
    }
    for (const [pi, list] of buckets) {
      const p = PRODUCTS[pi];
      const geo = p.proxy || (p.proxy = shelfProxy(p, this.cat.atlas));
      const im = new THREE.InstancedMesh(geo, this.productMat, list.length);
      list.forEach((it, i) => {
        im.setMatrixAt(i, it.m);
        if (it.section) it.section.items.push({ mesh: im, i, base: it.m.clone(), dr: it.dr });
      });
      im.instanceMatrix.needsUpdate = true;
      im.frustumCulled = false;
      this.root.add(im);
      this.shelfMeshes.push(im);
    }
  }

  // Produce: wooden crates on angled tables along the left wall.
  buildProduce() {
    const woodMat = this.mat({ color: '#a8754a', roughness: 0.85 });
    const x = STORE.x0 + 0.9;
    const parts = [];
    const buckets = new Map();
    const put = (pi, m, section) => {
      if (!buckets.has(pi)) buckets.set(pi, []);
      buckets.get(pi).push({ m, section, dr: 0 });
    };
    const fruit = ['apple', 'orange', 'tomato', 'onion', 'apple', 'orange'];
    const r = rng(31);
    const mtx = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    for (let i = 0; i < 6; i++) {
      const zc = -5.2 - i * 1.7;
      // tilted table
      const table = new THREE.BoxGeometry(1.2, 0.08, 1.5);
      table.rotateZ(-0.22);
      table.translate(x, 0.82, zc);
      parts.push(table);
      parts.push(new THREE.BoxGeometry(1.0, 0.75, 1.4).translate(x - 0.05, 0.38, zc));
      // crate rim
      for (const dz of [-0.74, 0.74]) parts.push(new THREE.BoxGeometry(1.2, 0.14, 0.04).rotateZ(-0.22).translate(x, 0.9, zc + dz));
      const section = { x: x + 0.3, z: zc, aisle: -1, items: [] };
      this.sections.push(section);
      const p = product(fruit[i]);
      const rad = p.shape.r;
      for (let a = 0; a < 9; a++) {
        for (let b = 0; b < 12; b++) {
          const lx = -0.5 + a * (1.0 / 8);
          const lz = -0.66 + b * (1.32 / 11) + (a % 2) * 0.03;
          q.setFromEuler(new THREE.Euler(r() * 0.6, r() * 6, r() * 0.6));
          mtx.compose(new THREE.Vector3(x + lx, 0.86 + rad * 0.6 - lx * 0.22, zc + lz), q, new THREE.Vector3(1, 1, 1));
          put(p.index, mtx.clone(), section);
        }
      }
    }
    this.root.add(new THREE.Mesh(mergeGeometries(parts), woodMat));
    this.buildInstances(buckets);
  }

  // Bakery shelves on the right wall.
  buildBakery() {
    const woodMat = this.mat({ color: '#c99a62', roughness: 0.8 });
    const x = STORE.x1 - 0.55;
    const parts = [];
    const buckets = new Map();
    const mtx = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const r = rng(41);
    const items = ['bread', 'donut', 'bread', 'riceball', 'bread', 'donut'];
    parts.push(new THREE.BoxGeometry(0.9, 2.0, 10.5).translate(x + 0.15, 1.0, -9.6).scale(1, 1, 1));
    for (let i = 0; i < 6; i++) {
      const zc = -5.0 - i * 1.75;
      const section = { x: x - 0.4, z: zc, aisle: 99, items: [] };
      this.sections.push(section);
      for (const ly of [0.55, 0.95, 1.35]) {
        parts.push(new THREE.BoxGeometry(0.7, 0.03, 1.7).translate(x - 0.2, ly, zc));
        const p = product(items[(i + Math.round(ly * 10)) % items.length]);
        const n = Math.floor(1.6 / (p.size.z + 0.03));
        for (let k = 0; k < n; k++) {
          q.setFromEuler(new THREE.Euler(0, -Math.PI / 2 + Math.PI / 2 + (r() - 0.5) * 0.2, 0));
          mtx.compose(new THREE.Vector3(x - 0.25, ly + 0.015, zc - 0.78 + (k + 0.5) * (p.size.z + 0.03)), q, new THREE.Vector3(1, 1, 1));
          if (!buckets.has(p.index)) buckets.set(p.index, []);
          buckets.get(p.index).push({ m: mtx.clone(), section, dr: 0 });
        }
      }
    }
    // the shelves are deep; rotate products so their fronts face -x
    for (const list of buckets.values()) {
      for (const it of list) {
        const rot = new THREE.Matrix4().makeRotationY(-Math.PI / 2);
        const pos = new THREE.Vector3().setFromMatrixPosition(it.m);
        it.m.copy(rot).setPosition(pos);
      }
    }
    this.root.add(new THREE.Mesh(mergeGeometries(parts), woodMat));
    this.buildInstances(buckets);
  }

  // Open refrigerated cases along the back wall: they glow all night.
  buildColdCases() {
    const bodyMat = this.mat({ color: '#e8eef2', roughness: 0.4, metalness: 0.2 });
    const glowMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.75, 0.92, 1.25), toneMapped: true });
    const innerMat = this.mat({ color: '#cfdce6', roughness: 0.5 });
    const z = STORE.z0 + 0.6;
    const parts = [];
    const inner = [];
    const glow = [];
    const buckets = new Map();
    const mtx = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const items = ['milk', 'yogurt', 'pudding', 'tofu', 'juice', 'cheese', 'icecream', 'milk'];
    const x0 = STORE.x0 + 0.6;
    const x1 = STORE.x1 - 0.6;
    parts.push(new THREE.BoxGeometry(x1 - x0, 0.5, 1.0).translate((x0 + x1) / 2, 0.25, z));
    parts.push(new THREE.BoxGeometry(x1 - x0, 0.25, 1.1).translate((x0 + x1) / 2, 2.3, z - 0.05));
    inner.push(new THREE.BoxGeometry(x1 - x0, 1.8, 0.05).translate((x0 + x1) / 2, 1.35, z - 0.48));
    glow.push(new THREE.BoxGeometry(x1 - x0, 0.04, 0.06).translate((x0 + x1) / 2, 2.16, z + 0.4));
    let k = 0;
    for (let x = x0 + 0.6; x < x1 - 0.5; x += 2.0) {
      parts.push(new THREE.BoxGeometry(0.05, 1.9, 1.0).translate(x - 0.6 + 0.0, 1.35, z));
      const section = { x, z: z + 0.4, aisle: 98, items: [] };
      this.sections.push(section);
      for (const ly of [0.52, 0.92, 1.32, 1.72]) {
        inner.push(new THREE.BoxGeometry(1.95, 0.025, 0.7).translate(x + 0.4, ly, z - 0.05));
        glow.push(new THREE.BoxGeometry(1.95, 0.012, 0.02).translate(x + 0.4, ly + 0.36, z + 0.28));
        const p = product(items[k++ % items.length]);
        const n = Math.floor(1.85 / (p.size.x + 0.015));
        for (let i = 0; i < n; i++) {
          for (let dr = 0; dr < 2; dr++) {
            q.identity();
            mtx.compose(new THREE.Vector3(x - 0.52 + (i + 0.5) * (p.size.x + 0.015), ly + 0.013, z + 0.18 - dr * (p.size.z + 0.02)), q, new THREE.Vector3(1, 1, 1));
            if (!buckets.has(p.index)) buckets.set(p.index, []);
            buckets.get(p.index).push({ m: mtx.clone(), section, dr });
          }
        }
      }
    }
    this.root.add(new THREE.Mesh(mergeGeometries(parts), bodyMat));
    this.root.add(new THREE.Mesh(mergeGeometries(inner), innerMat));
    this.root.add(new THREE.Mesh(mergeGeometries(glow), glowMat));
    this.buildInstances(buckets);
    this.lights.addGlow(0, z + 0.9, 13, 1.7, '#9fc8ff', 0.75);
  }

  buildFixtures() {
    const L = this.lights;
    const add = (x, z, alongX, zone, on = false, len = 1.6) => {
      const f = L.addFixture(x, z, { len, alongX, zone, on });
      this.fixtureList.push(f);
      return f;
    };
    // our lane and the checkout zone
    this.laneFixtures = [add(-1.45, -0.05, true, 'lane', true), add(0.35, -0.05, true, 'lane', true)];
    this.frontFixtures = [];
    for (const x of [-5.4, -3.6, 2.6, 4.4]) this.frontFixtures.push(add(x, -0.05, true, 'front'));
    for (let x = -9.4; x <= 9.5; x += 2.7) this.frontFixtures.push(add(x, 2.5, true, 'front'));
    this.mainFixtures = [];
    for (let x = -9.8; x <= 9.9; x += 2.8) this.mainFixtures.push(add(x, MAIN_AISLE_Z, true, 'main'));
    this.aisleFixtures = AISLE_X.map((ax) => {
      const list = [];
      for (let z = -5.4; z >= -14.2; z -= 2.2) list.push(add(ax, z, false, 'aisle'));
      return list;
    });
    this.backFixtures = [];
    for (let x = -9.8; x <= 9.9; x += 2.8) this.backFixtures.push(add(x, BACK_AISLE_Z, true, 'back'));
    this.wallFixtures = [];
    for (let z = -5.4; z >= -14.2; z -= 2.2) {
      this.wallFixtures.push(add(STORE.x0 + 1.6, z, false, 'wall'));
      this.wallFixtures.push(add(STORE.x1 - 1.6, z, false, 'wall'));
    }

    // geometry: housing + diffuser + glow points
    const n = L.fixtures.length;
    const housing = new THREE.BoxGeometry(1, 0.08, 1);
    const housingMat = this.mat({ color: '#f4f2ec', roughness: 0.5 });
    const diffuser = new THREE.BoxGeometry(1, 0.02, 1);
    this.diffMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: true });
    this.housing = new THREE.InstancedMesh(housing, housingMat, n);
    this.diffuser = new THREE.InstancedMesh(diffuser, this.diffMat, n);
    const m = new THREE.Matrix4();
    const y = STORE.h - 0.22;
    L.fixtures.forEach((f, i) => {
      const sx = f.alongX ? f.len : 0.34;
      const sz = f.alongX ? 0.34 : f.len;
      m.makeScale(sx + 0.06, 1, sz + 0.06).setPosition(f.x, y + 0.05, f.z);
      this.housing.setMatrixAt(i, m);
      m.makeScale(sx, 1, sz).setPosition(f.x, y, f.z);
      this.diffuser.setMatrixAt(i, m);
      this.diffuser.setColorAt(i, new THREE.Color(0.1, 0.1, 0.1));
    });
    this.housing.frustumCulled = false;
    this.diffuser.frustumCulled = false;
    this.ceilingStuff.add(this.housing);
    this.root.add(this.diffuser);
    // hanging rods
    const rods = [];
    for (const f of L.fixtures) {
      for (const s of [-0.4, 0.4]) {
        const dx = f.alongX ? s * f.len : 0;
        const dz = f.alongX ? 0 : s * f.len;
        rods.push(new THREE.CylinderGeometry(0.006, 0.006, 0.18, 4).translate(f.x + dx, STORE.h - 0.09, f.z + dz));
      }
    }
    this.ceilingStuff.add(new THREE.Mesh(mergeGeometries(rods), housingMat));

    // soft rectangular glow cards under each tube (a cheap bloom)
    const gc = T.makeCanvas(128, 64);
    const gg = gc.getContext('2d');
    const grad = gg.createRadialGradient(64, 32, 4, 64, 32, 64);
    grad.addColorStop(0, 'rgba(255,255,255,0.9)');
    grad.addColorStop(0.35, 'rgba(255,255,255,0.35)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    gg.fillStyle = grad;
    gg.save();
    gg.scale(1, 0.5);
    gg.fillRect(0, 0, 128, 128);
    gg.restore();
    const glowTex = T.canvasTex(gc, { mips: false });
    this.haloMat = new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xffffff, side: THREE.DoubleSide });
    const card = new THREE.PlaneGeometry(1, 1);
    card.rotateX(Math.PI / 2);
    this.halos = new THREE.InstancedMesh(card, this.haloMat, n);
    L.fixtures.forEach((f, i) => {
      const sx = (f.alongX ? f.len : 0.34) * 1.9 + 0.5;
      const sz = (f.alongX ? 0.34 : f.len) * 1.9 + 0.5;
      m.makeScale(sx, 1, sz).setPosition(f.x, y - 0.03, f.z);
      this.halos.setMatrixAt(i, m);
      this.halos.setColorAt(i, new THREE.Color(0, 0, 0));
    });
    this.halos.frustumCulled = false;
    this.halos.renderOrder = 3;
    this.root.add(this.halos);
    this.fixtureColor = new THREE.Color();
  }

  // Round category signs hung over each aisle.
  buildSigns() {
    const c = T.makeCanvas(1024, 512);
    const g = c.getContext('2d');
    const defs = [
      ['cereal', '#2e9fd6'],
      ['juice', '#f39a1e'],
      ['chips', '#e94f37'],
      ['tissue', '#5aa0c8'],
      ['can', '#3fb27f'],
      ['cookies', '#8a4a22'],
      ['apple', '#c8302a'],
      ['bread', '#c98845'],
      ['milk', '#3c78c8'],
    ];
    defs.forEach(([icon, bg], i) => {
      const cx = (i % 4) * 256 + 128;
      const cy = Math.floor(i / 4) * 170 + 85;
      drawRoundSign(g, icon, cx, cy, 78, bg);
    });
    const tex = T.canvasTex(c);
    const mat = this.mat({ map: tex, roughness: 0.6, transparent: true, alphaTest: 0.5, side: THREE.DoubleSide });
    const uvFor = (i) => {
      const u0 = ((i % 4) * 256 + 128 - 82) / 1024;
      const u1 = ((i % 4) * 256 + 128 + 82) / 1024;
      const v1 = 1 - (Math.floor(i / 4) * 170 + 85 - 82) / 512;
      const v0 = 1 - (Math.floor(i / 4) * 170 + 85 + 82) / 512;
      return [u0, v0, u1, v1];
    };
    const parts = [];
    const wires = [];
    const addSign = (i, x, y, z, ry = 0) => {
      const geo = new THREE.PlaneGeometry(0.62, 0.62);
      const [u0, v0, u1, v1] = uvFor(i);
      const uv = geo.attributes.uv;
      for (let k = 0; k < uv.count; k++) uv.setXY(k, u0 + (u1 - u0) * uv.getX(k), v0 + (v1 - v0) * uv.getY(k));
      geo.rotateY(ry);
      geo.translate(x, y, z);
      parts.push(geo);
      wires.push(new THREE.CylinderGeometry(0.004, 0.004, STORE.h - y - 0.3, 3).translate(x, (STORE.h + y + 0.3) / 2, z));
      this.signs.push({ x, y, z, i });
    };
    AISLE_X.forEach((ax, i) => addSign(i, ax, 2.9, -4.3));
    addSign(6, STORE.x0 + 1.4, 2.9, -8, Math.PI / 2);
    addSign(7, STORE.x1 - 1.4, 2.9, -8, -Math.PI / 2);
    addSign(8, 0, 2.9, STORE.z0 + 1.8);
    this.root.add(new THREE.Mesh(mergeGeometries(parts), mat));
    this.root.add(new THREE.Mesh(mergeGeometries(wires), this.mat({ color: '#888' })));

    // ceiling speakers for the PA (little round grilles)
    const spk = [];
    for (let x = -8; x <= 8; x += 4) {
      for (const z of [1.2, -3.0, -8.0, -13.0, -16.6]) {
        spk.push(new THREE.CylinderGeometry(0.16, 0.16, 0.03, 16).translate(x + 1.0, STORE.h - 0.015, z));
        this.speakers.push(new THREE.Vector3(x + 1.0, STORE.h - 0.03, z));
      }
    }
    this.ceilingStuff.add(new THREE.Mesh(mergeGeometries(spk), this.mat({ color: '#d9d4c8', roughness: 0.7 })));
  }

  // Closed neighbour lanes, lane lamps, baskets and carts near the entrance.
  buildFrontArea() {
    const counterMat = this.mat({ color: '#e7e1d4', roughness: 0.6 });
    const stripeMat = this.mat({ color: '#d9573e', roughness: 0.6 });
    const beltMat = this.mat({ color: '#2a2b2e', roughness: 0.7 });
    const steelMat = this.mat({ color: '#c3c8ce', roughness: 0.35, metalness: 0.8 });
    const len = COUNTER.x1 - COUNTER.x0;
    const cxo = (COUNTER.x0 + COUNTER.x1) / 2;
    const cz = (COUNTER.z0 + COUNTER.z1) / 2;
    const dep = COUNTER.z1 - COUNTER.z0;
    const pc = [];
    const ps = [];
    const pb = [];
    const pm = [];
    for (const off of [-4.7, 4.7]) {
      const x = cxo + off;
      pc.push(new THREE.BoxGeometry(len, COUNTER_TOP - 0.06, dep).translate(x, (COUNTER_TOP - 0.06) / 2, cz));
      ps.push(new THREE.BoxGeometry(len + 0.01, 0.08, dep + 0.01).translate(x, 0.55, cz));
      pb.push(new THREE.BoxGeometry(1.7, 0.03, 0.5).translate(x - 0.9, COUNTER_TOP - 0.03, cz + 0.05));
      pm.push(new THREE.BoxGeometry(len, 0.03, dep).translate(x, COUNTER_TOP - 0.045, cz));
      // lamp pole
      pm.push(new THREE.CylinderGeometry(0.025, 0.025, 1.3, 8).translate(x + 1.6, COUNTER_TOP + 0.65, cz - 0.3));
    }
    this.root.add(new THREE.Mesh(mergeGeometries(pc), counterMat));
    this.root.add(new THREE.Mesh(mergeGeometries(ps), stripeMat));
    this.root.add(new THREE.Mesh(mergeGeometries(pb), beltMat));
    this.root.add(new THREE.Mesh(mergeGeometries(pm), steelMat));

    // lane number lamps: a lit drum on our lane, dark on the others
    const lampC = T.makeCanvas(512, 128);
    const lg = lampC.getContext('2d');
    for (let i = 0; i < 4; i++) {
      lg.fillStyle = i === 3 ? '#333' : '#fff6e0';
      lg.fillRect(i * 128, 0, 128, 128);
      lg.fillStyle = i === 3 ? '#555' : '#d9573e';
      lg.beginPath();
      lg.arc(i * 128 + 64, 64, 50, 0, Math.PI * 2);
      lg.fill();
      lg.fillStyle = '#fff';
      lg.font = 'bold 72px sans-serif';
      lg.textAlign = 'center';
      lg.textBaseline = 'middle';
      lg.fillText(String([2, 3, 4, 3][i]), i * 128 + 64, 68);
    }
    const lampTex = T.canvasTex(lampC);
    this.otherLamps = [];
    [-4.7, 4.7].forEach((off, k) => {
      const geo = new THREE.CylinderGeometry(0.14, 0.14, 0.2, 20, 1, true);
      const uv = geo.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setX(i, (k === 0 ? 0 : 0.5) + uv.getX(i) * 0.25 * 0 + 0.0 + uv.getX(i) * 0.25);
      const m = new THREE.Mesh(geo, this.mat({ map: lampTex, color: '#777', roughness: 0.5 }));
      m.position.set(cxo + off + 1.6, COUNTER_TOP + 1.38, cz - 0.3);
      this.root.add(m);
      this.otherLamps.push(m);
    });
    this.lampTex = lampTex;

    // carts parked by the windows
    this.cartProto = null;
    // basket stack
    const basketMat = this.mat({ color: '#d9573e', roughness: 0.6 });
    const bparts = [];
    for (let i = 0; i < 6; i++) bparts.push(new THREE.BoxGeometry(0.5, 0.06, 0.36).translate(-6.6, 0.12 + i * 0.07, 2.2));
    bparts.push(new THREE.BoxGeometry(0.46, 0.12, 0.32).translate(-6.6, 0.06, 2.2));
    this.root.add(new THREE.Mesh(mergeGeometries(bparts), basketMat));

    // green exit sign over the door (pictogram only)
    const ec = T.makeCanvas(256, 128);
    const eg = ec.getContext('2d');
    eg.fillStyle = '#1f9a55';
    eg.fillRect(0, 0, 256, 128);
    eg.fillStyle = '#ffffff';
    eg.fillRect(150, 20, 70, 88);
    eg.fillStyle = '#1f9a55';
    eg.fillRect(160, 30, 50, 78);
    eg.fillStyle = '#ffffff';
    eg.beginPath();
    eg.arc(80, 34, 12, 0, 6.3);
    eg.fill();
    eg.lineWidth = 12;
    eg.strokeStyle = '#fff';
    eg.lineCap = 'round';
    eg.beginPath();
    eg.moveTo(76, 50);
    eg.lineTo(70, 80);
    eg.lineTo(50, 104);
    eg.moveTo(70, 80);
    eg.lineTo(96, 100);
    eg.moveTo(60, 60);
    eg.lineTo(96, 64);
    eg.stroke();
    const exit = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.3), new THREE.MeshBasicMaterial({ map: T.canvasTex(ec), color: new THREE.Color(1.2, 1.2, 1.2) }));
    exit.position.set(7.5, 3.1, STORE.z1 - 0.02);
    exit.rotation.y = Math.PI;
    this.root.add(exit);
    const exit2 = exit.clone();
    exit2.position.set(STORE.x0 + 0.02, 3.1, -16);
    exit2.rotation.y = Math.PI / 2;
    this.root.add(exit2);
    this.lights.addGlow(7.5, STORE.z1 - 0.6, 1.2, 0.8, '#2faa66', 0.35);
    this.lights.addGlow(STORE.x0 + 0.6, -16, 0.8, 1.2, '#2faa66', 0.35);
  }

  // Things that make it a place: end-cap displays, a terracotta path, wall murals,
  // the produce awning, pennant garlands.
  buildDecor() {
    const r = rng(99);
    // --- terracotta path along the main aisle and the back aisle
    const pathC = T.makeCanvas(256, 256);
    const pg = pathC.getContext('2d');
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        const v = (x + y) % 2 ? 0 : 10;
        pg.fillStyle = `rgb(${176 + v},${92 + v * 0.6},${66 + v * 0.4})`;
        pg.fillRect(x * 64, y * 64, 64, 64);
      }
    }
    T.speckle(pg, 256, 256, 1600, ['rgba(255,220,190,0.25)', 'rgba(80,30,20,0.2)'], 0.5, 1.6, 4);
    pg.strokeStyle = 'rgba(90,40,30,0.5)';
    pg.lineWidth = 2;
    for (let i = 0; i <= 4; i++) {
      pg.beginPath();
      pg.moveTo(i * 64, 0);
      pg.lineTo(i * 64, 256);
      pg.moveTo(0, i * 64);
      pg.lineTo(256, i * 64);
      pg.stroke();
    }
    const pathTex = T.canvasTex(pathC, { repeat: [1, 1] });
    const pathMat = this.mat({ map: pathTex, roughness: 0.4, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }, 0.7);
    const W = STORE.x1 - STORE.x0;
    const mkPath = (w, d, x, z) => {
      const g = new THREE.PlaneGeometry(w, d);
      const uv = g.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) * w) / 1.2, (uv.getY(i) * d) / 1.2);
      g.rotateX(-Math.PI / 2);
      g.translate(x, 0.003, z);
      return g;
    };
    this.root.add(new THREE.Mesh(mergeGeometries([mkPath(W - 1, 1.4, 0, MAIN_AISLE_Z), mkPath(W - 1, 1.2, 0, BACK_AISLE_Z)]), pathMat));
    // a border line along the path
    const lineMat = this.mat({ color: '#f3c74a', roughness: 0.5, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
    const lines = [];
    for (const z of [MAIN_AISLE_Z - 0.74, MAIN_AISLE_Z + 0.74, BACK_AISLE_Z - 0.64, BACK_AISLE_Z + 0.64]) lines.push(new THREE.PlaneGeometry(W - 1, 0.06).rotateX(-Math.PI / 2).translate(0, 0.004, z));
    this.root.add(new THREE.Mesh(mergeGeometries(lines), lineMat));

    // --- end caps: a stepped display of one product at each gondola end, with a header board
    const headC = T.makeCanvas(1024, 256);
    const hg = headC.getContext('2d');
    const heads = [
      ['cereal', '#2e9fd6'],
      ['juice', '#f39a1e'],
      ['chips', '#e94f37'],
      ['donut', '#ff8fb8'],
      ['can', '#3fb27f'],
      ['cookies', '#8a4a22'],
      ['candy', '#7a3fc0'],
      ['milk', '#3c78c8'],
    ];
    heads.forEach(([icon, bg], i) => {
      const x = (i % 4) * 256;
      const y = Math.floor(i / 4) * 128;
      hg.fillStyle = bg;
      hg.fillRect(x, y, 256, 128);
      hg.fillStyle = 'rgba(255,255,255,0.18)';
      for (let k = 0; k < 8; k++) hg.fillRect(x + k * 34, y, 14, 128);
      hg.fillStyle = '#fff8ea';
      hg.beginPath();
      hg.arc(x + 128, y + 64, 54, 0, Math.PI * 2);
      hg.fill();
      drawIcon(hg, icon, x + 84, y + 20, 88);
      // burst stars
      hg.fillStyle = '#ffd34a';
      for (const sx of [34, 222]) {
        hg.beginPath();
        for (let k = 0; k < 10; k++) {
          const rad = k % 2 ? 9 : 22;
          const a = (k / 10) * Math.PI * 2;
          hg.lineTo(x + sx + Math.cos(a) * rad, y + 64 + Math.sin(a) * rad);
        }
        hg.fill();
      }
    });
    const headTex = T.canvasTex(headC);
    const headMat = this.mat({ map: headTex, roughness: 0.6 });
    const headParts = [];
    const capMat = this.mat({ color: '#e94f37', roughness: 0.5 });
    const capParts = [];
    const buckets = new Map();
    const mtx = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    GONDOLA_X.forEach((gx, gi) => {
      for (const [ez, dir] of [
        [GONDOLA_Z[1] + 0.02, 1],
        [GONDOLA_Z[0] - 0.02, -1],
      ]) {
        const hi = (gi + (dir > 0 ? 0 : 3)) % heads.length;
        const pid = heads[hi][0] === 'milk' ? 'tissue' : heads[hi][0];
        const p = product(pid);
        // three stepped tiers
        for (let t = 0; t < 3; t++) {
          const ty = 0.25 + t * 0.32;
          const depth = 0.42 - t * 0.12;
          capParts.push(new THREE.BoxGeometry(0.98, ty, depth).translate(gx, ty / 2, ez + dir * (depth / 2)));
          const n = Math.floor(0.92 / (p.size.x + 0.01));
          for (let k = 0; k < n; k++) {
            q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), dir > 0 ? 0 : Math.PI);
            mtx.compose(new THREE.Vector3(gx - 0.46 + (k + 0.5) * (p.size.x + 0.01), ty + 0.002, ez + dir * (depth - p.size.z / 2 - 0.02)), q, new THREE.Vector3(1, 1, 1));
            if (!buckets.has(p.index)) buckets.set(p.index, []);
            buckets.get(p.index).push({ m: mtx.clone(), section: null, dr: 0 });
          }
        }
        // header board on two poles
        const geo = new THREE.PlaneGeometry(1.0, 0.5);
        const uv = geo.attributes.uv;
        const u0 = (hi % 4) * 0.25;
        const v0 = 1 - (Math.floor(hi / 4) + 1) * 0.5;
        for (let k = 0; k < uv.count; k++) uv.setXY(k, u0 + uv.getX(k) * 0.25, v0 + uv.getY(k) * 0.5);
        if (dir < 0) geo.rotateY(Math.PI);
        geo.translate(gx, 2.32, ez + dir * 0.03);
        headParts.push(geo);
        capParts.push(new THREE.BoxGeometry(0.03, 0.4, 0.03).translate(gx - 0.45, 2.0, ez + dir * 0.01));
        capParts.push(new THREE.BoxGeometry(0.03, 0.4, 0.03).translate(gx + 0.45, 2.0, ez + dir * 0.01));
      }
    });
    this.root.add(new THREE.Mesh(mergeGeometries(headParts), headMat));
    this.root.add(new THREE.Mesh(mergeGeometries(capParts), capMat));
    this.buildInstances(buckets);

    // --- murals: giant pictograms high on the walls (department signs without words)
    const mural = (icon, bg, w, h, pos, ry) => {
      const c = T.makeCanvas(512, 256);
      const g = c.getContext('2d');
      g.fillStyle = bg;
      g.beginPath();
      g.moveTo(24, 0);
      g.arcTo(512, 0, 512, 256, 24);
      g.arcTo(512, 256, 0, 256, 24);
      g.arcTo(0, 256, 0, 0, 24);
      g.arcTo(0, 0, 512, 0, 24);
      g.fill();
      g.fillStyle = 'rgba(255,255,255,0.12)';
      for (let k = 0; k < 6; k++) {
        g.beginPath();
        g.arc(60 + k * 90, 128 + Math.sin(k) * 40, 30 + (k % 3) * 12, 0, Math.PI * 2);
        g.fill();
      }
      drawIcon(g, icon, 156, 28, 200);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), this.mat({ map: T.canvasTex(c), roughness: 0.8, transparent: true }));
      m.position.copy(pos);
      m.rotation.y = ry;
      this.root.add(m);
    };
    mural('apple', '#c8302a', 3.2, 1.6, new THREE.Vector3(STORE.x0 + 0.03, 3.25, -9.5), Math.PI / 2);
    mural('bread', '#c98845', 3.2, 1.6, new THREE.Vector3(STORE.x1 - 0.03, 3.25, -9.5), -Math.PI / 2);
    mural('milk', '#3c78c8', 3.2, 1.6, new THREE.Vector3(-4.5, 3.35, STORE.z0 + 0.03), 0);
    mural('icecream', '#ff8fb8', 3.2, 1.6, new THREE.Vector3(4.5, 3.35, STORE.z0 + 0.03), 0);

    // --- produce awning: red and cream stripes
    const awC = T.makeCanvas(256, 64);
    const ag = awC.getContext('2d');
    for (let k = 0; k < 8; k++) {
      ag.fillStyle = k % 2 ? '#fbf3e2' : '#d9402e';
      ag.fillRect(k * 32, 0, 32, 64);
    }
    const awTex = T.canvasTex(awC, { repeat: [8, 1] });
    const aw = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 10.6), this.mat({ map: awTex, roughness: 0.8, side: THREE.DoubleSide }));
    aw.rotation.set(-Math.PI / 2, 0.42, 0);
    aw.rotation.order = 'YXZ';
    aw.rotation.set(-Math.PI / 2 + 0.0, 0, 0);
    const awg = new THREE.Group();
    awg.add(aw);
    aw.rotation.set(-Math.PI / 2, 0, 0);
    awg.rotation.z = -0.45;
    awg.position.set(STORE.x0 + 1.0, 2.25, -9.45);
    this.root.add(awg);
    // scalloped valance
    const val = [];
    for (let z = -14.6; z < -4.3; z += 0.26) val.push(new THREE.CylinderGeometry(0.13, 0.13, 0.02, 12, 1, false, 0, Math.PI).rotateZ(Math.PI / 2).rotateY(Math.PI / 2).translate(STORE.x0 + 1.6, 1.98, z));
    this.root.add(new THREE.Mesh(mergeGeometries(val), this.mat({ color: '#d9402e', roughness: 0.8, side: THREE.DoubleSide })));

    // --- pennant garlands across the main aisle
    const colors = ['#e94f37', '#f3c74a', '#3fb27f', '#2e9fd6', '#ff8fb8', '#7a3fc0'];
    const flagGeo = [];
    const flagCols = [];
    for (const zz of [MAIN_AISLE_Z - 0.3, MAIN_AISLE_Z + 0.45, BACK_AISLE_Z]) {
      for (let x = STORE.x0 + 1; x < STORE.x1 - 1; x += 0.32) {
        const sag = Math.pow(Math.sin(((x - STORE.x0) / (STORE.x1 - STORE.x0)) * Math.PI * 3), 2) * 0.35;
        const y = 3.5 - sag;
        const tri = new THREE.BufferGeometry();
        tri.setAttribute('position', new THREE.Float32BufferAttribute([-0.11, 0, 0, 0.11, 0, 0, 0, -0.24, 0], 3));
        tri.setAttribute('normal', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0, 1, 0, 0, 1], 3));
        tri.translate(x, y, zz);
        tri.rotateY(0);
        flagGeo.push(tri);
        const c = new THREE.Color(colors[Math.floor(r() * colors.length)]);
        flagCols.push(c, c, c);
      }
    }
    const fg = mergeGeometries(flagGeo);
    const cols = new Float32Array(flagCols.length * 3);
    flagCols.forEach((c, i) => {
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    });
    fg.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    const flags = new THREE.Mesh(fg, this.mat({ vertexColors: true, roughness: 0.8, side: THREE.DoubleSide }));
    this.root.add(flags);
    this.flags = flags;
  }

  // Outside at night: the parking lot, the lit sign, the glass front and the automatic doors.
  buildExterior() {
    const fz = STORE.z1;
    const { lowH, winTop, DX, DW, dx0, dx1 } = this.frontGeo;
    const H = STORE.h;
    const W = STORE.x1 - STORE.x0;
    const ext = new THREE.Group();
    ext.name = 'exterior';
    this.root.add(ext);
    this.exterior = ext;
    // outside has its own moonlit look: cool, dim, independent of the store's tubes
    const std = (o) => {
      const m = new THREE.MeshStandardMaterial(o);
      m.onBeforeCompile = (sh) => {
        sh.fragmentShader = sh.fragmentShader.replace('#include <opaque_fragment>', 'outgoingLight *= vec3(0.34, 0.4, 0.62);\n#include <opaque_fragment>');
      };
      m.customProgramCacheKey = () => 'moonlit';
      return m;
    };
    // asphalt with parking bays
    const ac = T.makeCanvas(1024, 1024);
    const ag = ac.getContext('2d');
    ag.fillStyle = '#2a2b31';
    ag.fillRect(0, 0, 1024, 1024);
    T.speckle(ag, 1024, 1024, 14000, ['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.25)', 'rgba(120,110,100,0.08)'], 0.5, 1.8, 17);
    ag.strokeStyle = 'rgba(240,240,230,0.55)';
    ag.lineWidth = 6;
    for (let i = 0; i < 9; i++) {
      ag.beginPath();
      ag.moveTo(60 + i * 110, 520);
      ag.lineTo(60 + i * 110, 900);
      ag.stroke();
    }
    ag.fillStyle = 'rgba(240,210,80,0.5)';
    for (let i = 0; i < 12; i++) ag.fillRect(i * 90, 300, 50, 8);
    const asphalt = new THREE.Mesh(new THREE.PlaneGeometry(60, 34), std({ map: T.canvasTex(ac, { aniso: 8 }), roughness: 0.95, color: '#8a8c98' }));
    asphalt.rotation.x = -Math.PI / 2;
    asphalt.position.set(0, -0.002, fz + 17);
    ext.add(asphalt);
    // sidewalk strip along the front
    const walk = new THREE.Mesh(new THREE.BoxGeometry(W + 2, 0.12, 2.2), std({ color: '#6c6a6a', roughness: 0.9 }));
    walk.position.set(0, 0.06, fz + 1.1);
    ext.add(walk);
    // facade, facing out, with holes for the windows and the door
    const parts = [];
    const pl = (w, h, x, y) => {
      const g = new THREE.PlaneGeometry(w, h);
      g.translate(x, y, fz + 0.02);
      parts.push(g);
    };
    pl(dx0 - STORE.x0, lowH, (STORE.x0 + dx0) / 2, lowH / 2);
    pl(STORE.x1 - dx1, lowH, (dx1 + STORE.x1) / 2, lowH / 2);
    pl(DW, winTop - DOOR.h, DX, (DOOR.h + winTop) / 2);
    pl(W, H + 0.8 - winTop, 0, (winTop + H + 0.8) / 2);
    for (let x = STORE.x0; x <= STORE.x1 + 0.01; x += 2.75) if (x < dx0 - 0.1 || x > dx1 + 0.1) pl(0.18, winTop - lowH, x, (lowH + winTop) / 2);
    ext.add(new THREE.Mesh(mergeGeometries(parts), std({ color: '#d8cdb8', roughness: 0.85 })));
    // red fascia band with a warm stripe
    const band = new THREE.Mesh(new THREE.BoxGeometry(W + 0.4, 0.55, 0.3), std({ color: '#c8402e', roughness: 0.6 }));
    band.position.set(0, H + 0.1, fz + 0.18);
    ext.add(band);
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(W + 0.4, 0.08, 0.31), std({ color: '#f3c74a', roughness: 0.5, emissive: '#f3c74a', emissiveIntensity: 0.25 }));
    stripe.position.set(0, H - 0.2, fz + 0.18);
    ext.add(stripe);
    // the store sign: our smiling basket, lit from inside
    const sc = T.makeCanvas(512, 512);
    const sg = sc.getContext('2d');
    sg.fillStyle = '#fff6e0';
    sg.beginPath();
    sg.arc(256, 256, 250, 0, Math.PI * 2);
    sg.fill();
    sg.lineWidth = 22;
    sg.strokeStyle = '#d9573e';
    sg.stroke();
    drawIcon(sg, 'basket', 86, 70, 340);
    sg.fillStyle = '#3a2a22';
    sg.beginPath();
    sg.arc(212, 300, 16, 0, Math.PI * 2);
    sg.arc(300, 300, 16, 0, Math.PI * 2);
    sg.fill();
    sg.lineWidth = 12;
    sg.strokeStyle = '#3a2a22';
    sg.beginPath();
    sg.arc(256, 318, 40, 0.25, Math.PI - 0.25);
    sg.stroke();
    const sign = new THREE.Mesh(new THREE.CircleGeometry(1.1, 48), new THREE.MeshBasicMaterial({ map: T.canvasTex(sc), color: new THREE.Color(1.15, 1.1, 1.0) }));
    sign.position.set(DX - 2.7, H + 0.35, fz + 0.36);
    ext.add(sign);
    // fruit roundels along the fascia
    const icons = ['apple', 'bread', 'milk', 'carrot', 'fish', 'cookies'];
    icons.forEach((ic, i) => {
      const c = T.makeCanvas(256, 256);
      drawRoundSign(c.getContext('2d'), ic, 128, 128, 120, ['#3fb27f', '#2e9fd6', '#f39a1e', '#ff8fb8', '#7a3fc0', '#e94f37'][i]);
      const m = new THREE.Mesh(new THREE.CircleGeometry(0.42, 32), new THREE.MeshBasicMaterial({ map: T.canvasTex(c), color: new THREE.Color(0.95, 0.95, 0.95) }));
      m.position.set(DX - 4.4 - i * 1.25, H + 0.1, fz + 0.34);
      ext.add(m);
    });
    // a canopy over the doors
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(DW + 1.2, 0.1, 1.4), std({ color: '#c8402e', roughness: 0.6 }));
    canopy.position.set(DX, DOOR.h + 0.45, fz + 0.7);
    ext.add(canopy);
    const canLight = new THREE.Mesh(new THREE.PlaneGeometry(DW + 0.8, 1.0), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.4, 1.3, 1.1) }));
    canLight.rotation.x = Math.PI / 2;
    canLight.position.set(DX, DOOR.h + 0.395, fz + 0.7);
    ext.add(canLight);
    // the automatic doors (two glass leaves in steel frames)
    const glass = new THREE.MeshStandardMaterial({ color: '#9fc2d6', roughness: 0.05, metalness: 0.3, transparent: true, opacity: 0.18, depthWrite: false });
    const steel = std({ color: '#b8bec6', roughness: 0.3, metalness: 0.8 });
    this.doors = [];
    for (const side of [-1, 1]) {
      const leaf = new THREE.Group();
      const lw = DW / 2;
      const pane = new THREE.Mesh(new THREE.PlaneGeometry(lw - 0.06, DOOR.h - 0.08), glass);
      pane.position.set(0, DOOR.h / 2, 0);
      leaf.add(pane);
      const fr = [];
      fr.push(new THREE.BoxGeometry(lw, 0.05, 0.05).translate(0, 0.025, 0));
      fr.push(new THREE.BoxGeometry(lw, 0.05, 0.05).translate(0, DOOR.h - 0.025, 0));
      fr.push(new THREE.BoxGeometry(0.05, DOOR.h, 0.05).translate(-lw / 2 + 0.025, DOOR.h / 2, 0));
      fr.push(new THREE.BoxGeometry(0.05, DOOR.h, 0.05).translate(lw / 2 - 0.025, DOOR.h / 2, 0));
      leaf.add(new THREE.Mesh(mergeGeometries(fr), steel));
      // a little round sticker at child height: our mascot
      const dot = new THREE.Mesh(new THREE.CircleGeometry(0.09, 24), new THREE.MeshBasicMaterial({ map: T.canvasTex(sc) }));
      dot.position.set(side * -0.12, 1.0, 0.03);
      leaf.add(dot);
      const back = dot.clone();
      back.rotation.y = Math.PI;
      back.position.z = -0.03;
      leaf.add(back);
      leaf.position.set(DX + side * (lw / 2), 0, fz + 0.05);
      leaf.userData.home = leaf.position.x;
      leaf.userData.side = side;
      this.root.add(leaf);
      this.doors.push(leaf);
    }
    this.doorOpen = 0;
    this.doorHit = new THREE.Mesh(new THREE.BoxGeometry(DW + 0.6, DOOR.h, 0.6), new THREE.MeshBasicMaterial({ visible: false }));
    this.doorHit.position.set(DX, DOOR.h / 2, fz + 0.3);
    ext.add(this.doorHit);
    // window glass across the band
    const wg = new THREE.Mesh(new THREE.PlaneGeometry(W, winTop - lowH), glass);
    wg.position.set(0, (lowH + winTop) / 2, fz + 0.03);
    this.root.add(wg);
    // warm light spilling out onto the pavement, and two lamp posts
    const pool = (x, z, sx, sz, color, op) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(sx, sz), new THREE.MeshBasicMaterial({ map: this.poolTex || (this.poolTex = T.canvasTex(T.glowTexture(128), { mips: false })), color, transparent: true, opacity: op, depthWrite: false, blending: THREE.AdditiveBlending }));
      m.rotation.x = -Math.PI / 2;
      m.position.set(x, 0.13, z);
      ext.add(m);
      return m;
    };
    pool(DX, fz + 1.6, 4, 3, '#ffd9a0', 0.45);
    // the glow of lane 3 through the glass
    this.lanePool = pool(-0.4, fz + 1.4, 7, 2.6, '#fff2d0', 0.16);
    pool(-6, fz + 1.2, 6, 2, '#9fc8ff', 0.05);
    for (const lx of [-7, 9]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 5, 10), std({ color: '#30323a', roughness: 0.6 }));
      post.position.set(lx, 2.5, fz + 9);
      ext.add(post);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 10), new THREE.MeshBasicMaterial({ color: new THREE.Color(2, 1.6, 1.0) }));
      head.position.set(lx, 5.05, fz + 9);
      ext.add(head);
      pool(lx, fz + 9, 7, 7, '#ffb870', 0.4);
    }
    // a cart corral and a row of tidy carts
    const rail = std({ color: '#c8402e', roughness: 0.5 });
    const cr = [];
    cr.push(new THREE.BoxGeometry(3.2, 0.05, 0.05).translate(-6, 0.95, fz + 3.0));
    cr.push(new THREE.BoxGeometry(3.2, 0.05, 0.05).translate(-6, 0.95, fz + 4.2));
    for (const x of [-7.6, -4.4]) for (const z of [fz + 3.0, fz + 4.2]) cr.push(new THREE.BoxGeometry(0.05, 0.95, 0.05).translate(x, 0.475, z));
    ext.add(new THREE.Mesh(mergeGeometries(cr), rail));
    // sky behind the roof line
    const skyC = T.makeCanvas(512, 512);
    const kg = skyC.getContext('2d');
    const gr = kg.createLinearGradient(0, 0, 0, 512);
    gr.addColorStop(0, '#04060f');
    gr.addColorStop(0.7, '#101a3a');
    gr.addColorStop(1, '#1d2850');
    kg.fillStyle = gr;
    kg.fillRect(0, 0, 512, 512);
    const rr = rng(5);
    for (let i = 0; i < 300; i++) {
      kg.fillStyle = `rgba(255,255,235,${0.3 + rr() * 0.7})`;
      const s2 = rr() < 0.05 ? 2 : 1;
      kg.fillRect(rr() * 512, rr() * 400, s2, s2);
    }
    const sky = new THREE.Mesh(new THREE.PlaneGeometry(160, 70), new THREE.MeshBasicMaterial({ map: T.canvasTex(skyC), depthWrite: false }));
    sky.position.set(0, 20, STORE.z0 - 30);
    ext.add(sky);
    this.sky = sky;
  }

  setDoors(k) {
    this.doorOpen = k;
    for (const d of this.doors) d.position.x = d.userData.home + d.userData.side * k * (DOOR.w / 2 - 0.05);
  }

  // Refresh fixture visuals from the light system (call every frame).
  update(dt, time, camera) {
    const L = this.lights;
    // the dollhouse cut-away: from above, the ceiling clutter disappears
    if (camera) {
      const inside = camera.position.y < STORE.h - 0.35;
      this.ceilingStuff.visible = inside;
      this.diffuser.visible = inside;
      this.halos.visible = inside;
      this.pillars.visible = inside;
    }
    let changed = false;
    L.fixtures.forEach((f, i) => {
      const v = f.level;
      const key = Math.round(v * 100) + f.tint.r * 1000 + f.tint.g * 10000 + f.tint.b * 100000;
      if (f._key === key) return;
      f._key = key;
      changed = true;
      const k = 0.12 + v * 1.5;
      this.fixtureColor.setRGB(Math.min(4, f.tint.r * k + 0.02), Math.min(4, f.tint.g * k + 0.02), Math.min(4, f.tint.b * k + 0.03));
      this.diffuser.setColorAt(i, this.fixtureColor);
      this.fixtureColor.setRGB(f.tint.r * v * 0.5, f.tint.g * v * 0.5, f.tint.b * v * 0.5);
      this.halos.setColorAt(i, this.fixtureColor);
    });
    if (changed) {
      this.diffuser.instanceColor.needsUpdate = true;
      this.halos.instanceColor.needsUpdate = true;
    }
    // dancing products (receipt wave / voice)
    for (let i = this.wiggle.length - 1; i >= 0; i--) {
      const w = this.wiggle[i];
      w.t += dt;
      const k = w.t / w.dur;
      if (k >= 1) {
        for (const it of w.section.items) it.mesh.setMatrixAt(it.i, it.base);
        for (const it of w.section.items) it.mesh.instanceMatrix.needsUpdate = true;
        this.wiggle.splice(i, 1);
        continue;
      }
      const m = new THREE.Matrix4();
      const off = new THREE.Matrix4();
      for (const it of w.section.items) {
        const ph = it.i * 0.37;
        const amp = Math.sin(Math.PI * k) * w.amp;
        const hop = Math.max(0, Math.sin(k * Math.PI * 4 + ph)) * 0.05 * amp;
        off.makeRotationZ(Math.sin(k * 20 + ph) * 0.08 * amp);
        off.setPosition(0, hop, 0);
        m.copy(it.base).multiply(off);
        it.mesh.setMatrixAt(it.i, m);
      }
      for (const it of w.section.items) it.mesh.instanceMatrix.needsUpdate = true;
    }
  }

  danceSection(section, amp = 1, dur = 1.4) {
    if (this.wiggle.find((w) => w.section === section)) return;
    this.wiggle.push({ section, t: 0, dur, amp });
  }
}
