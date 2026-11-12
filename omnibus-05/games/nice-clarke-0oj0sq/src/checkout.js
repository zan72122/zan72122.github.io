// Lane 3: the register the child is allowed to run tonight.
// Builds every machine part and exposes handles the director and input use.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';
import { COUNTER, COUNTER_TOP, BELT, SCANNER, BIN, CASHIER, DISPLAY, PRINTER } from './layout.js';
import { patchStoreMaterial } from './lighting.js';
import * as T from './textures.js';
import { drawIcon } from './icons.js';
import { clamp, damp, lerp } from './util.js';

const TOP = COUNTER_TOP;

// merge helper that tolerates indexed/non-indexed mixes
function mg(list) {
  const clean = list.map((g) => {
    const n = g.index ? g.toNonIndexed() : g;
    for (const k of Object.keys(n.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') n.deleteAttribute(k);
    if (!n.attributes.uv) n.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n.attributes.position.count * 2), 2));
    n.clearGroups();
    return n;
  });
  return mergeGeometries(clean, false);
}

export class Checkout {
  constructor(scene, lights) {
    this.scene = scene;
    this.lights = lights;
    this.root = new THREE.Group();
    this.root.name = 'checkout';
    scene.add(this.root);
    this.hit = {}; // invisible, generous touch targets
    this.power = 0; // 0 = asleep, 1 = booted
    this.beltPos = 0;
    this.beltSpeed = 0;
    this.time = 0;

    this.materials();
    this.buildCounter();
    this.buildBelt();
    this.buildScanner();
    this.buildBin();
    this.buildTower();
    this.buildPrinter();
    this.buildKeypad();
    this.buildButton();
    this.buildDrawer();
    this.buildStool();
    this.buildMic();
    this.buildLaneLamp();
    this.buildProps();
  }

  m(opts) {
    const mat = new THREE.MeshStandardMaterial(opts);
    patchStoreMaterial(mat, this.lights);
    return mat;
  }

  materials() {
    const brushed = T.canvasTex(T.brushedTexture(), { repeat: [4, 1] });
    this.mSteel = this.m({ color: '#d4d8dd', map: brushed, roughness: 0.3, metalness: 0.85 });
    this.mLam = this.m({ color: '#efe7d6', roughness: 0.55 });
    this.mStripe = this.m({ color: '#d9573e', roughness: 0.5 });
    this.mStripe2 = this.m({ color: '#f3c74a', roughness: 0.5 });
    this.mDark = this.m({ color: '#2a2d33', roughness: 0.45, metalness: 0.1 });
    this.mBlack = this.m({ color: '#141518', roughness: 0.35 });
    this.mCream = this.m({ color: '#ece6d8', roughness: 0.45 });
    this.mWood = this.m({ color: '#c88f55', roughness: 0.7 });
    this.mWoodDark = this.m({ color: '#9a6638', roughness: 0.75 });
    this.mRubber = this.m({ color: '#1d1e21', roughness: 0.9 });
    this.mChrome = this.m({ color: '#eef0f3', roughness: 0.12, metalness: 1.0 });
  }

  add(geo, mat, { cast = true, receive = true, name } = {}) {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = cast;
    mesh.receiveShadow = receive;
    if (name) mesh.name = name;
    this.root.add(mesh);
    return mesh;
  }

  hitBox(name, w, h, d, pos, parent = this.root) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshBasicMaterial({ visible: false }));
    m.position.copy(pos);
    m.name = 'hit:' + name;
    parent.add(m);
    this.hit[name] = m;
    return m;
  }

  buildCounter() {
    const { x0, x1, z0, z1 } = COUNTER;
    const body = [];
    const lam = [];
    const stripe = [];
    const steel = [];
    const H = TOP - 0.04;
    // customer side panel and ends
    lam.push(new THREE.BoxGeometry(x1 - x0, H - 0.1, 0.04).translate((x0 + x1) / 2, (H + 0.1) / 2, z0 + 0.02));
    lam.push(new THREE.BoxGeometry(0.04, H - 0.1, z1 - z0).translate(x0 + 0.02, (H + 0.1) / 2, (z0 + z1) / 2));
    lam.push(new THREE.BoxGeometry(0.04, H - 0.1, z1 - z0).translate(x1 - 0.02, (H + 0.1) / 2, (z0 + z1) / 2));
    // cashier side: cabinet face, interrupted where the drawer is
    const dx0 = -0.52;
    const dx1 = 0.22;
    lam.push(new THREE.BoxGeometry(dx0 - x0, H - 0.1, 0.04).translate((x0 + dx0) / 2, (H + 0.1) / 2, z1 - 0.02));
    lam.push(new THREE.BoxGeometry(x1 - dx1, H - 0.1, 0.04).translate((dx1 + x1) / 2, (H + 0.1) / 2, z1 - 0.02));
    lam.push(new THREE.BoxGeometry(dx1 - dx0, 0.6, 0.04).translate((dx0 + dx1) / 2, 0.4, z1 - 0.02));
    // inner volume (so the counter reads solid from above edges)
    body.push(new THREE.BoxGeometry(x1 - x0 - 0.08, H - 0.12, z1 - z0 - 0.1).translate((x0 + x1) / 2, (H + 0.1) / 2 - 0.02, (z0 + z1) / 2));
    // stripes on both long faces
    for (const z of [z0 - 0.002, z1 + 0.002]) {
      stripe.push(new THREE.BoxGeometry(x1 - x0 + 0.004, 0.07, 0.01).translate((x0 + x1) / 2, 0.62, z));
    }
    // kick plate
    steel.push(new THREE.BoxGeometry(x1 - x0, 0.1, z1 - z0 - 0.06).translate((x0 + x1) / 2, 0.05, (z0 + z1) / 2));
    // cabinet door seams on the cashier side
    const seams = [];
    for (const x of [-1.9, -1.3, -0.8, 0.7, 1.0]) seams.push(new THREE.BoxGeometry(0.006, H - 0.2, 0.006).translate(x, H / 2 + 0.05, z1 + 0.001));
    for (const x of [-1.6, -1.05, 0.5, 0.86]) seams.push(new THREE.BoxGeometry(0.1, 0.014, 0.02).translate(x, 0.78, z1 + 0.01));
    this.add(mg(lam), this.mLam);
    this.add(mg(body), this.mDark, { cast: false });
    this.add(mg(stripe), this.mStripe);
    this.add(mg(steel), this.mSteel);
    this.add(mg(seams), this.mDark);

    // top surfaces: steel, cut around the belt, scanner and bagging well
    const t = [];
    const th = 0.04;
    const ty = TOP - th / 2;
    // strips around the belt, scanner and the bagging well (customer side = far)
    const rects = [
      [x0, BIN.x0, z0, BELT.z0],
      [BIN.x0, BIN.x1, z0, BIN.z0],
      [BIN.x1, x1, z0, BELT.z0],
      [x0, BIN.x0, BELT.z1, z1],
      [BIN.x0, x1, BIN.z1, z1],
      [x0, BELT.x0, BELT.z0, BELT.z1],
      [BELT.x1, SCANNER.x0, BELT.z0, BELT.z1],
      [BIN.x1, x1, BELT.z0, BIN.z1],
    ];
    for (const [ax, bx, az, bz] of rects) t.push(new THREE.BoxGeometry(bx - ax, th, bz - az).translate((ax + bx) / 2, ty, (az + bz) / 2));
    this.add(mg(t), this.mSteel);
    // bevelled front lip on the cashier side (what a small child sees at eye level)
    const lip = new RoundedBoxGeometry(x1 - x0 + 0.02, 0.05, 0.06, 2, 0.02);
    lip.translate((x0 + x1) / 2, TOP - 0.02, z1 - 0.02);
    this.add(lip, this.mSteel);
    const lip2 = new RoundedBoxGeometry(x1 - x0 + 0.02, 0.05, 0.06, 2, 0.02);
    lip2.translate((x0 + x1) / 2, TOP - 0.02, z0 + 0.02);
    this.add(lip2, this.mSteel);

    // physics description of static colliders: [cx, cy, cz, hx, hy, hz]
    this.colliders = [];
    const col = (cx, cy, cz, hx, hy, hz, kind = 'counter') => this.colliders.push({ c: [cx, cy, cz], h: [hx, hy, hz], kind });
    for (const [ax, bx, az, bz] of rects) col((ax + bx) / 2, ty, (az + bz) / 2, (bx - ax) / 2, th / 2, (bz - az) / 2, ax === BELT.x1 ? 'glass' : 'counter');
    // invisible guard walls so a pile never spills on the child (customer side stays open to the cart dump)
    col(-0.9, TOP + 0.35, z1 + 0.03, 1.5, 0.35, 0.03, 'wall');
    col((BIN.x0 + BIN.x1) / 2, TOP + 0.4, z1 + 0.03, (BIN.x1 - BIN.x0) / 2 + 0.2, 0.4, 0.03, 'wall');
    col(x1 + 0.03, TOP + 0.4, 0, 0.03, 0.4, 0.5, 'wall');
    col(x0 - 0.03, TOP + 0.3, 0, 0.03, 0.3, 0.5, 'wall');
  }

  buildBelt() {
    const len = BELT.x1 - BELT.x0;
    const wid = BELT.z1 - BELT.z0;
    const canvas = T.beltTexture();
    this.beltTex = T.canvasTex(canvas, { repeat: [1, len / 0.5], aniso: 8 });
    this.beltTex.wrapS = this.beltTex.wrapT = THREE.RepeatWrapping;
    this.beltTex.center.set(0.5, 0.5);
    this.beltTex.rotation = Math.PI / 2;
    const beltMat = this.m({ map: this.beltTex, roughness: 0.82, color: '#ffffff' });
    const surf = new THREE.PlaneGeometry(len, wid);
    surf.rotateX(-Math.PI / 2);
    surf.translate((BELT.x0 + BELT.x1) / 2, TOP - 0.001, 0);
    this.beltMesh = this.add(surf, beltMat, { cast: false, name: 'belt' });
    // rollers and the dark trough beneath
    const rollers = [];
    for (const x of [BELT.x0, BELT.x1]) rollers.push(new THREE.CylinderGeometry(0.03, 0.03, wid, 16).rotateX(Math.PI / 2).translate(x, TOP - 0.03, 0));
    this.add(mg(rollers), this.mRubber, { cast: false });
    const trough = new THREE.BoxGeometry(len + 0.06, 0.06, wid + 0.02).translate((BELT.x0 + BELT.x1) / 2, TOP - 0.035, 0);
    this.add(trough, this.mBlack, { cast: false });
    // low steel guards along both belt edges
    const guards = [];
    for (const z of [BELT.z0 - 0.012, BELT.z1 + 0.012]) {
      const g = new RoundedBoxGeometry(len + 0.1, 0.035, 0.024, 2, 0.01);
      g.translate((BELT.x0 + BELT.x1) / 2, TOP + 0.012, z);
      guards.push(g);
    }
    this.add(mg(guards), this.mSteel);
    // the photo-eye at the end of the belt: two little posts with a red dot
    const eye = [];
    for (const z of [BELT.z0 - 0.02, BELT.z1 + 0.02]) eye.push(new THREE.BoxGeometry(0.03, 0.06, 0.02).translate(BELT.x1 - 0.04, TOP + 0.04, z));
    this.add(mg(eye), this.mDark);
    this.eyeDots = [];
    for (const z of [BELT.z0 - 0.009, BELT.z1 + 0.009]) {
      const d = new THREE.Mesh(new THREE.CircleGeometry(0.006, 10), new THREE.MeshBasicMaterial({ color: '#ff3030' }));
      d.position.set(BELT.x1 - 0.04, TOP + 0.05, z);
      d.rotation.y = z < 0 ? 0 : Math.PI;
      this.root.add(d);
      this.eyeDots.push(d);
    }
    this.hitBox('belt', len, 0.1, wid + 0.06, new THREE.Vector3((BELT.x0 + BELT.x1) / 2, TOP + 0.02, 0));
    this.colliders.push({ c: [(BELT.x0 + BELT.x1) / 2, TOP - 0.02, 0], h: [len / 2, 0.02, wid / 2], kind: 'belt' });
    for (const z of [BELT.z0 - 0.012, BELT.z1 + 0.012]) this.colliders.push({ c: [(BELT.x0 + BELT.x1) / 2, TOP + 0.012, z], h: [len / 2, 0.018, 0.012], kind: 'counter' });
  }

  buildScanner() {
    const w = SCANNER.x1 - SCANNER.x0;
    const d = SCANNER.z1 - SCANNER.z0;
    this.scanCanvas = T.makeCanvas(256, 256);
    this.scanCtx = this.scanCanvas.getContext('2d');
    this.scanTex = T.canvasTex(this.scanCanvas, { mips: false });
    const glass = new THREE.PlaneGeometry(w - 0.03, d - 0.03);
    glass.rotateX(-Math.PI / 2);
    glass.translate((SCANNER.x0 + SCANNER.x1) / 2, SCANNER.top, 0);
    this.glassMat = new THREE.MeshStandardMaterial({ map: this.scanTex, emissiveMap: this.scanTex, emissive: new THREE.Color(1, 1, 1), emissiveIntensity: 1.0, roughness: 0.08, metalness: 0.2, color: '#ffffff' });
    this.glass = this.add(glass, this.glassMat, { cast: false, name: 'glass' });
    // steel frame
    const fr = [];
    const cx = (SCANNER.x0 + SCANNER.x1) / 2;
    fr.push(new THREE.BoxGeometry(w, 0.012, 0.016).translate(cx, TOP - 0.004, SCANNER.z0 + 0.008));
    fr.push(new THREE.BoxGeometry(w, 0.012, 0.016).translate(cx, TOP - 0.004, SCANNER.z1 - 0.008));
    fr.push(new THREE.BoxGeometry(0.016, 0.012, d).translate(SCANNER.x0 + 0.008, TOP - 0.004, 0));
    fr.push(new THREE.BoxGeometry(0.016, 0.012, d).translate(SCANNER.x1 - 0.008, TOP - 0.004, 0));
    this.add(mg(fr), this.mChrome, { cast: false });
    // vertical tower window on the customer side
    const tw = new RoundedBoxGeometry(w + 0.04, 0.2, 0.07, 2, 0.02);
    tw.translate(cx, TOP + 0.1, SCANNER.z0 - 0.06);
    this.add(tw, this.mDark);
    const tg = new THREE.PlaneGeometry(w - 0.04, 0.14);
    tg.translate(cx, TOP + 0.1, SCANNER.z0 - 0.024);
    this.towerGlass = this.add(tg, this.glassMat, { cast: false });
    this.colliders.push({ c: [cx, TOP - 0.02, 0], h: [w / 2, 0.02, d / 2], kind: 'glass' });
    this.colliders.push({ c: [cx, TOP + 0.1, SCANNER.z0 - 0.06], h: [w / 2 + 0.02, 0.1, 0.035], kind: 'counter' });
    // the red light that really falls on whatever crosses the window
    this.scanLight = new THREE.PointLight('#ff2020', 0.0, 0.7, 2);
    this.scanLight.position.set(cx, TOP + 0.12, 0.02);
    this.root.add(this.scanLight);
    this.scanFlash = 0;
    this.scanErr = 0;
    this.hitBox('scanner', w, 0.16, d, new THREE.Vector3(cx, TOP + 0.06, 0));
  }

  buildBin() {
    const { x0, x1, z0, z1, floor } = BIN;
    const parts = [];
    const depth = TOP - floor;
    // floor of the well
    parts.push(new THREE.BoxGeometry(x1 - x0, 0.02, z1 - z0).translate((x0 + x1) / 2, floor - 0.01, (z0 + z1) / 2));
    // walls
    parts.push(new THREE.BoxGeometry(x1 - x0, depth, 0.02).translate((x0 + x1) / 2, floor + depth / 2, z0 - 0.01));
    parts.push(new THREE.BoxGeometry(x1 - x0, depth, 0.02).translate((x0 + x1) / 2, floor + depth / 2, z1 + 0.01));
    parts.push(new THREE.BoxGeometry(0.02, depth, z1 - z0).translate(x1 + 0.01, floor + depth / 2, (z0 + z1) / 2));
    this.add(mg(parts), this.mSteel, { cast: false });
    // slide from the scanner down into the well
    const sx0 = SCANNER.x1;
    const sx1 = x0 + 0.24;
    const ang = Math.atan2(TOP - (floor + 0.12), sx1 - sx0);
    const slen = Math.hypot(sx1 - sx0, TOP - (floor + 0.12));
    const slide = new THREE.BoxGeometry(slen, 0.016, z1 - z0);
    slide.rotateZ(-ang);
    slide.translate((sx0 + sx1) / 2, (TOP + floor + 0.12) / 2 - 0.008, (z0 + z1) / 2);
    this.add(slide, this.mSteel, { cast: false });
    const slideBelow = new THREE.BoxGeometry(sx1 - sx0, depth, 0.02).translate((sx0 + sx1) / 2, floor + depth / 2, z0 - 0.01);
    this.add(slideBelow, this.mSteel, { cast: false });
    this.slide = { ang, len: slen, c: [(sx0 + sx1) / 2, (TOP + floor + 0.12) / 2 - 0.008, (z0 + z1) / 2] };
    this.colliders.push({ c: [(x0 + x1) / 2, floor - 0.02, (z0 + z1) / 2], h: [(x1 - x0) / 2, 0.02, (z1 - z0) / 2], kind: 'bin' });
    this.colliders.push({ c: [(x0 + x1) / 2, floor + depth / 2, z0 - 0.02], h: [(x1 - x0) / 2, depth / 2 + 0.3, 0.02], kind: 'bin' });
    this.colliders.push({ c: [(x0 + x1) / 2, floor + depth / 2, z1 + 0.02], h: [(x1 - x0) / 2, depth / 2, 0.02], kind: 'bin' });
    this.colliders.push({ c: [x1 + 0.02, floor + depth / 2, (z0 + z1) / 2], h: [0.02, depth / 2 + 0.3, (z1 - z0) / 2], kind: 'bin' });
    this.colliders.push({ c: this.slide.c, h: [slen / 2, 0.008, (z1 - z0) / 2], rotZ: -ang, kind: 'slide' });
    // plastic bag dispenser hanging off the far wall: a nice bit of clutter
    const bags = new THREE.Mesh(new RoundedBoxGeometry(0.22, 0.26, 0.05, 2, 0.02), this.m({ color: '#f4f1ea', roughness: 0.6, transparent: true, opacity: 0.92 }));
    bags.position.set(x1 - 0.2, TOP + 0.13, z0 - 0.05);
    this.root.add(bags);
    this.hitBox('bin', x1 - x0, 0.5, z1 - z0, new THREE.Vector3((x0 + x1) / 2, floor + 0.25, (z0 + z1) / 2));
  }

  buildTower() {
    const { x, z } = DISPLAY;
    const g = new THREE.Group();
    g.position.set(x, TOP, z);
    this.root.add(g);
    this.tower = g;
    const base = new RoundedBoxGeometry(0.24, 0.05, 0.16, 2, 0.015);
    base.translate(0, 0.025, 0);
    const pole = new THREE.CylinderGeometry(0.028, 0.032, 0.4, 16).translate(0, 0.25, 0);
    const parts = [base, pole];
    const tm = new THREE.Mesh(mg(parts), this.mDark);
    tm.castShadow = true;
    g.add(tm);
    // monitor
    const mon = new THREE.Group();
    mon.position.set(0, 0.52, 0.02);
    mon.rotation.x = -0.32;
    g.add(mon);
    this.monitor = mon;
    const bez = new RoundedBoxGeometry(0.44, 0.33, 0.045, 3, 0.02);
    const bm = new THREE.Mesh(bez, this.mCream);
    bm.castShadow = true;
    mon.add(bm);
    this.screenCanvas = T.makeCanvas(512, 384);
    this.screenCtx = this.screenCanvas.getContext('2d');
    this.screenTex = T.canvasTex(this.screenCanvas, { mips: true, aniso: 8 });
    this.screenMat = new THREE.MeshBasicMaterial({ map: this.screenTex, toneMapped: false, color: new THREE.Color(0.92, 0.92, 0.92) });
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.392, 0.294), this.screenMat);
    scr.position.z = 0.0235;
    mon.add(scr);
    this.screen = scr;
    // glossy glass overlay for reflections
    const gl = new THREE.Mesh(new THREE.PlaneGeometry(0.392, 0.294), new THREE.MeshStandardMaterial({ color: '#000', roughness: 0.05, metalness: 1, transparent: true, opacity: 0.18 }));
    gl.position.z = 0.0245;
    mon.add(gl);
    // customer display on the back: green VFD
    this.vfdCanvas = T.makeCanvas(256, 64);
    this.vfdTex = T.canvasTex(this.vfdCanvas, { mips: false });
    const back = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.065), new THREE.MeshBasicMaterial({ map: this.vfdTex, toneMapped: false }));
    back.position.set(0, 0.06, -0.0235);
    back.rotation.y = Math.PI;
    mon.add(back);
    // weight readout on the pole, facing the cashier
    this.wCanvas = T.makeCanvas(256, 80);
    this.wTex = T.canvasTex(this.wCanvas, { mips: false });
    const wbox = new RoundedBoxGeometry(0.2, 0.07, 0.04, 2, 0.01);
    const wm = new THREE.Mesh(wbox, this.mDark);
    wm.position.set(0, 0.24, 0.045);
    wm.castShadow = true;
    g.add(wm);
    const wd = new THREE.Mesh(new THREE.PlaneGeometry(0.17, 0.05), new THREE.MeshBasicMaterial({ map: this.wTex, toneMapped: false }));
    wd.position.set(0, 0.24, 0.0655);
    g.add(wd);
    this.weightShown = 0;
    this.weightTarget = 0;
    this.drawWeight(0, false);
    this.colliders.push({ c: [x, TOP + 0.2, z], h: [0.12, 0.2, 0.08], kind: 'counter' });
    this.hitBox('screen', 0.5, 0.4, 0.1, new THREE.Vector3(0, 0, 0.03), mon);
  }

  drawWeight(kg, on) {
    const g = this.wCanvas.getContext('2d');
    g.fillStyle = '#120806';
    g.fillRect(0, 0, 256, 80);
    const s = on ? kg.toFixed(3) : '0.000';
    const digits = s.replace('.', '');
    const n = digits.length;
    const cw = 34;
    const x0 = 256 - 18 - n * (cw + 8);
    for (let i = 0; i < n; i++) {
      T.drawSeg(g, digits[i], x0 + i * (cw + 8), 12, cw, 56, on ? '#ff8a2a' : '#2a140c', on ? '#3a1a0c' : '#1c0e08');
      if (i === n - 4) {
        g.fillStyle = on ? '#ff8a2a' : '#2a140c';
        g.fillRect(x0 + i * (cw + 8) + cw + 1, 62, 6, 6);
      }
    }
    // a tiny scale pictogram
    g.strokeStyle = on ? '#ff8a2a' : '#2a140c';
    g.lineWidth = 3;
    g.strokeRect(8, 46, 22, 16);
    g.beginPath();
    g.moveTo(4, 44);
    g.lineTo(34, 44);
    g.stroke();
    this.wTex.needsUpdate = true;
  }

  buildPrinter() {
    const { x, z } = PRINTER;
    const g = new THREE.Group();
    g.position.set(x, TOP, z);
    this.root.add(g);
    this.printer = g;
    const body = new THREE.Mesh(new RoundedBoxGeometry(0.22, 0.13, 0.19, 3, 0.025), this.mCream);
    body.position.y = 0.065;
    body.castShadow = true;
    g.add(body);
    const lid = new THREE.Mesh(new RoundedBoxGeometry(0.205, 0.03, 0.12, 2, 0.012), this.m({ color: '#3a3d44', roughness: 0.25 }));
    lid.position.set(0, 0.13, 0.02);
    g.add(lid);
    // slot and the stub of paper
    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.012, 0.012), this.mBlack);
    slot.position.set(0, 0.135, -0.05);
    g.add(slot);
    this.slotWorld = new THREE.Vector3(x, TOP + 0.14, z - 0.05);
    const led = new THREE.Mesh(new THREE.CircleGeometry(0.006, 10), new THREE.MeshBasicMaterial({ color: '#30ff60' }));
    led.position.set(0.06, 0.09, 0.0955);
    g.add(led);
    this.printerLed = led;
    this.colliders.push({ c: [x, TOP + 0.07, z], h: [0.085, 0.07, 0.095], kind: 'counter' });
    this.hitBox('printer', 0.26, 0.24, 0.28, new THREE.Vector3(0, 0.1, 0), g);
  }

  buildKeypad() {
    const g = new THREE.Group();
    // a keyboard on an arm, angled toward the child, left of the scanner
    g.position.set(-0.98, TOP + 0.06, 0.52);
    g.rotation.x = 0.52;
    g.rotation.y = 0.3;
    this.root.add(g);
    this.keypad = g;
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.12, 10), this.mDark);
    arm.position.set(-0.98, TOP + 0.0, 0.46);
    this.root.add(arm);
    const body = new THREE.Mesh(new RoundedBoxGeometry(0.34, 0.035, 0.24, 2, 0.012), this.mCream);
    body.castShadow = true;
    g.add(body);
    this.keys = [];
    const cols = 5;
    const rows = 4;
    const kw = 0.05;
    const gap = 0.012;
    const colors = ['#f6f1e4', '#f6f1e4', '#f6f1e4', '#9fd2ee', '#ffd36a'];
    const keyGeo = new RoundedBoxGeometry(kw, 0.022, kw, 2, 0.008);
    // one material per key: the label sits on the top face, the sides take its edge colour
    const keyGeoTop = keyGeo.clone();
    {
      keyGeoTop.clearGroups();
      const uv = keyGeoTop.attributes.uv;
      const per = uv.count / 6;
      for (let i = 0; i < uv.count; i++) if (Math.floor(i / per) !== 2) uv.setXY(i, 0.02, 0.02);
    }
    const keyIcons = ['7', '8', '9', '·', '', '4', '5', '6', '×', '', '1', '2', '3', '−', '', '0', '00', '·', '+', ''];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (c === 4) continue; // the tall total key lives here
        const i = r * cols + c;
        const color = c === 3 ? '#9fd2ee' : r === 3 && c === 2 ? '#f6b0b0' : colors[c];
        const kc = T.makeCanvas(64, 64);
        const kg = kc.getContext('2d');
        kg.fillStyle = color;
        kg.fillRect(0, 0, 64, 64);
        kg.fillStyle = '#3a2a22';
        kg.font = 'bold 34px sans-serif';
        kg.textAlign = 'center';
        kg.textBaseline = 'middle';
        kg.fillText(keyIcons[i], 32, 35);
        const mat = this.m({ color: '#ffffff', map: T.canvasTex(kc, { mips: true }), roughness: 0.4 });
        const key = new THREE.Mesh(keyGeoTop, mat);
        key.position.set(-0.14 + c * (kw + gap), 0.022, -0.085 + r * (kw + gap));
        key.castShadow = true;
        g.add(key);
        key.userData.rest = key.position.y;
        key.userData.press = 0;
        key.userData.digit = keyIcons[i];
        key.userData.note = r * 4 + c;
        key.name = 'key';
        this.keys.push(key);
      }
    }
    // TOTAL: tall, warm, with an LED ring that wakes up when everything is registered
    const tg = new RoundedBoxGeometry(kw + 0.004, 0.03, kw * 2 + gap + 0.03, 2, 0.012);
    const tc = T.makeCanvas(64, 128);
    const tgc = tc.getContext('2d');
    tgc.fillStyle = '#ff6a3a';
    tgc.fillRect(0, 0, 64, 128);
    drawIcon(tgc, 'star', 6, 30, 52);
    const tmat = this.m({ color: '#ffffff', map: T.canvasTex(tc, { mips: false }), roughness: 0.35, emissive: new THREE.Color('#ff3a1a'), emissiveIntensity: 0 });
    const tside = this.m({ color: '#ff6a3a', roughness: 0.35, emissive: new THREE.Color('#ff3a1a'), emissiveIntensity: 0 });
    this.totalKey = new THREE.Mesh(tg, [tside, tside, tmat, tside, tside, tside]);
    this.totalKey.position.set(-0.14 + 4 * (kw + gap), 0.026, -0.085 + 2.5 * (kw + gap) - 0.012);
    this.totalKey.castShadow = true;
    this.totalKey.userData.rest = this.totalKey.position.y;
    this.totalKey.userData.press = 0;
    g.add(this.totalKey);
    this.totalMats = [tmat, tside];
    this.totalGlow = 0;
    // keyhole for the mode key (top-left of the keypad, upper edge)
    const lock = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.02, 20), this.mChrome);
    lock.position.set(0.12, 0.026, -0.11 + 0.0);
    g.add(lock);
    this.lock = lock;
    const hole = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.002, 0.018), this.mBlack);
    hole.position.set(0.12, 0.037, -0.11);
    g.add(hole);
    // move lock to the top strip: shift the whole key grid down a little
    for (const k of this.keys) k.position.z += 0.02;
    this.totalKey.position.z += 0.02;
    lock.position.set(0.12, 0.024, -0.1);
    hole.position.set(0.12, 0.035, -0.1);
    this.lockWorld = () => this.lock.getWorldPosition(new THREE.Vector3());
    this.hitBox('keypad', 0.36, 0.08, 0.26, new THREE.Vector3(0, 0.02, 0), g);
    this.hitBox('total', 0.11, 0.08, 0.17, this.totalKey.position.clone().add(new THREE.Vector3(0, 0.02, 0)), g);
  }

  buildButton() {
    const g = new THREE.Group();
    g.position.set(-0.58, TOP, 0.36);
    this.root.add(g);
    this.button = g;
    const housing = new THREE.Mesh(new RoundedBoxGeometry(0.13, 0.04, 0.1, 2, 0.015), this.m({ color: '#f3c74a', roughness: 0.4 }));
    housing.position.y = 0.02;
    housing.castShadow = true;
    g.add(housing);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.036, 0.008, 10, 28), this.mChrome);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.042;
    g.add(ring);
    this.btnMat = this.m({ color: '#2fbf5a', roughness: 0.25, emissive: new THREE.Color('#22ff66'), emissiveIntensity: 0 });
    const capGeo = new THREE.SphereGeometry(0.036, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    capGeo.scale(1, 0.55, 1);
    const cap = new THREE.Mesh(capGeo, this.btnMat);
    cap.position.y = 0.04;
    cap.castShadow = true;
    g.add(cap);
    this.btnCap = cap;
    this.btnPress = 0;
    // a small arrow pressed into the housing (a real machine marking, not a hint)
    const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.01, 0.022, 3), this.m({ color: '#3a2a22' }));
    arrow.rotation.z = -Math.PI / 2;
    arrow.rotation.y = 0;
    arrow.position.set(0.05, 0.041, 0);
    arrow.scale.set(1, 1, 0.2);
    g.add(arrow);
    this.colliders.push({ c: [-0.58, TOP + 0.02, 0.36], h: [0.065, 0.02, 0.05], kind: 'counter' });
    this.hitBox('button', 0.2, 0.16, 0.18, new THREE.Vector3(0, 0.04, 0), g);
  }

  buildDrawer() {
    const g = new THREE.Group();
    const dx0 = -0.52;
    const dx1 = 0.22;
    g.position.set((dx0 + dx1) / 2, 0.79, COUNTER.z1 - 0.2);
    this.root.add(g);
    this.drawer = g;
    this.drawerOpen = 0;
    this.drawerTarget = 0;
    const w = dx1 - dx0 - 0.01;
    const front = new THREE.Mesh(new RoundedBoxGeometry(w, 0.13, 0.03, 2, 0.008), this.mCream);
    front.position.z = 0.2 - 0.015 + 0.02;
    front.castShadow = true;
    g.add(front);
    const handle = new THREE.Mesh(new RoundedBoxGeometry(0.22, 0.018, 0.02, 2, 0.008), this.mDark);
    handle.position.set(0, 0.02, 0.235);
    g.add(handle);
    const tray = [];
    tray.push(new THREE.BoxGeometry(w, 0.01, 0.4).translate(0, -0.055, 0));
    tray.push(new THREE.BoxGeometry(0.01, 0.11, 0.4).translate(-w / 2, 0, 0));
    tray.push(new THREE.BoxGeometry(0.01, 0.11, 0.4).translate(w / 2, 0, 0));
    tray.push(new THREE.BoxGeometry(w, 0.11, 0.01).translate(0, 0, -0.2));
    for (let i = 1; i < 5; i++) tray.push(new THREE.BoxGeometry(0.006, 0.07, 0.18).translate(-w / 2 + (i * w) / 5, -0.02, 0.09));
    tray.push(new THREE.BoxGeometry(w, 0.07, 0.006).translate(0, -0.02, 0.0));
    g.add(new THREE.Mesh(mg(tray), this.mDark));
    // money: bills at the back, coins in front
    const billCols = ['#c9b8e8', '#e8d7a8', '#a8d8b8', '#9ab8e0'];
    for (let i = 0; i < 4; i++) {
      for (let k = 0; k < 6; k++) {
        const b = new THREE.Mesh(new THREE.BoxGeometry(w / 4 - 0.02, 0.002, 0.15), this.m({ color: billCols[i], roughness: 0.8 }));
        b.position.set(-w / 2 + (i + 0.5) * (w / 4), -0.048 + k * 0.003, -0.1 + (k % 2) * 0.004);
        g.add(b);
      }
    }
    this.coinSlots = [];
    const coinCols = ['#d9b44a', '#c9ccd2', '#c08a5a', '#c9ccd2', '#d9b44a'];
    for (let i = 0; i < 5; i++) {
      const slot = new THREE.Group();
      slot.position.set(-w / 2 + (i + 0.5) * (w / 5), -0.048, 0.09);
      g.add(slot);
      this.coinSlots.push(slot);
      for (let k = 0; k < 7; k++) {
        const c = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.003, 14), this.m({ color: coinCols[i], roughness: 0.25, metalness: 0.9 }));
        c.position.set((Math.random() - 0.5) * 0.03, k * 0.0032, (Math.random() - 0.5) * 0.08);
        c.rotation.set((Math.random() - 0.5) * 0.3, 0, (Math.random() - 0.5) * 0.3);
        slot.add(c);
      }
    }
    this.hitBox('drawer', w + 0.06, 0.2, 0.18, new THREE.Vector3(0, 0, 0.22), g);
  }

  buildStool() {
    const g = new THREE.Group();
    g.position.set(CASHIER.x, 0, CASHIER.z + 0.04);
    this.root.add(g);
    this.stool = g;
    const parts = [];
    const dark = [];
    // two steps, rounded wood
    const s1 = new RoundedBoxGeometry(0.44, 0.035, 0.18, 2, 0.012);
    s1.translate(0, 0.17, 0.1);
    const s2 = new RoundedBoxGeometry(0.44, 0.035, 0.2, 2, 0.012);
    s2.translate(0, 0.34, -0.06);
    parts.push(s1, s2);
    for (const sx of [-0.2, 0.2]) {
      const side = new THREE.Shape();
      side.moveTo(-0.18, 0);
      side.lineTo(0.2, 0);
      side.lineTo(0.2, 0.17);
      side.lineTo(0.02, 0.17);
      side.lineTo(0.02, 0.34);
      side.lineTo(-0.18, 0.34);
      side.closePath();
      const hole = new THREE.Path();
      hole.absarc(-0.08, 0.2, 0.045, 0, Math.PI * 2, false);
      side.holes.push(hole);
      const geo = new THREE.ExtrudeGeometry(side, { depth: 0.025, bevelEnabled: true, bevelSize: 0.006, bevelThickness: 0.006, bevelSegments: 2 });
      geo.rotateY(-Math.PI / 2);
      geo.translate(sx + 0.0125, 0, 0.02);
      parts.push(geo);
    }
    dark.push(new THREE.BoxGeometry(0.4, 0.01, 0.15).translate(0, 0.19, 0.1));
    const mesh = new THREE.Mesh(mg(parts), this.mWood);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    g.add(mesh);
    // non-slip strips on the treads
    const strips = [];
    for (let i = 0; i < 3; i++) {
      strips.push(new THREE.BoxGeometry(0.36, 0.004, 0.018).translate(0, 0.19, 0.04 + i * 0.05));
      strips.push(new THREE.BoxGeometry(0.36, 0.004, 0.018).translate(0, 0.36, -0.12 + i * 0.05));
    }
    g.add(new THREE.Mesh(mg(strips), this.mWoodDark));
    this.hitBox('stool', 0.6, 0.5, 0.5, new THREE.Vector3(0, 0.2, 0), g);
  }

  buildMic() {
    const g = new THREE.Group();
    g.position.set(1.21, TOP, 0.18);
    this.root.add(g);
    this.mic = g;
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.03, 24), this.mDark);
    base.position.y = 0.015;
    base.castShadow = true;
    g.add(base);
    this.micBtnMat = this.m({ color: '#e84a3a', roughness: 0.3, emissive: new THREE.Color('#ff2a1a'), emissiveIntensity: 0 });
    const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.012, 16), this.micBtnMat);
    btn.position.set(0, 0.034, 0.025);
    g.add(btn);
    this.micBtn = btn;
    // gooseneck: a bent tube of little rings
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.03, -0.01), new THREE.Vector3(0, 0.18, -0.02), new THREE.Vector3(-0.03, 0.3, 0.02), new THREE.Vector3(-0.08, 0.34, 0.08)]);
    this.micCurve = curve;
    const neck = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.009, 8), this.mChrome);
    neck.castShadow = true;
    g.add(neck);
    const head = new THREE.Group();
    head.position.copy(curve.getPoint(1));
    head.lookAt(new THREE.Vector3(-0.3, 0.2, 0.5).add(g.position));
    g.add(head);
    const hm = new THREE.Mesh(new THREE.CapsuleGeometry(0.022, 0.05, 6, 14), this.mDark);
    hm.rotation.x = Math.PI / 2;
    head.add(hm);
    const grille = new THREE.Mesh(new THREE.SphereGeometry(0.024, 14, 10), this.m({ color: '#5a5d64', roughness: 0.6, metalness: 0.6 }));
    grille.position.z = 0.035;
    head.add(grille);
    this.micHead = head;
    // ON-AIR lamp ring
    this.micLamp = new THREE.Mesh(new THREE.TorusGeometry(0.024, 0.004, 8, 24), new THREE.MeshBasicMaterial({ color: '#3a0a08' }));
    this.micLamp.position.z = 0.012;
    head.add(this.micLamp);
    this.colliders.push({ c: [1.21, TOP + 0.015, 0.18], h: [0.06, 0.015, 0.06], kind: 'counter' });
    this.hitBox('mic', 0.24, 0.46, 0.24, new THREE.Vector3(-0.03, 0.2, 0.03), g);
  }

  buildLaneLamp() {
    const g = new THREE.Group();
    g.position.set(COUNTER.x1 - 0.12, TOP, COUNTER.z0 + 0.1);
    this.root.add(g);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 1.4, 10), this.mSteel);
    pole.position.y = 0.7;
    g.add(pole);
    const lc = T.makeCanvas(512, 128);
    const lg = lc.getContext('2d');
    lg.fillStyle = '#fff4dc';
    lg.fillRect(0, 0, 512, 128);
    for (let i = 0; i < 2; i++) {
      const cx = 128 + i * 256;
      lg.fillStyle = '#d9573e';
      lg.beginPath();
      lg.arc(cx, 64, 54, 0, Math.PI * 2);
      lg.fill();
      lg.fillStyle = '#fff';
      lg.font = 'bold 80px sans-serif';
      lg.textAlign = 'center';
      lg.textBaseline = 'middle';
      lg.fillText('3', cx, 70);
    }
    this.lampMat = new THREE.MeshBasicMaterial({ map: T.canvasTex(lc), color: new THREE.Color(0.5, 0.5, 0.5), toneMapped: false });
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.2, 28, 1, true), this.lampMat);
    drum.position.y = 1.5;
    g.add(drum);
    const caps = [];
    caps.push(new THREE.CylinderGeometry(0.16, 0.16, 0.02, 28).translate(0, 1.61, 0));
    caps.push(new THREE.CylinderGeometry(0.16, 0.16, 0.02, 28).translate(0, 1.39, 0));
    g.add(new THREE.Mesh(mg(caps), this.mSteel));
    this.lamp = drum;
    this.lampBlink = 0;
    this.lampPos = new THREE.Vector3().copy(g.position).add(new THREE.Vector3(0, 1.5, 0));
    this.hitBox('lamp', 0.4, 0.34, 0.4, new THREE.Vector3(0, 1.5, 0), g);
  }

  // The side only the cashier sees: open cubbies with bags and rolls, a little bin, a sticker.
  buildCashierSide() {
    const z1 = COUNTER.z1;
    const parts = [];
    // an open cubby to the left of the drawer
    const cx = -1.45;
    parts.push(new THREE.BoxGeometry(0.5, 0.02, 0.3).translate(cx, 0.36, z1 - 0.15));
    parts.push(new THREE.BoxGeometry(0.5, 0.02, 0.3).translate(cx, 0.62, z1 - 0.15));
    this.add(mg(parts), this.mDark, { cast: false });
    const hole = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.52), this.m({ color: '#1c1d22', roughness: 0.9 }));
    hole.position.set(cx, 0.6, z1 + 0.002);
    hole.visible = false;
    this.root.add(hole);
    // folded bags and a spare receipt roll in the cubby
    const bagMat = this.m({ color: '#f4f1ea', roughness: 0.7 });
    for (let i = 0; i < 5; i++) {
      const b = new THREE.Mesh(new RoundedBoxGeometry(0.26, 0.018, 0.2, 2, 0.006), bagMat);
      b.position.set(cx - 0.08, 0.38 + i * 0.019, z1 - 0.12);
      b.rotation.y = (i % 2) * 0.08;
      this.root.add(b);
    }
    for (let i = 0; i < 3; i++) {
      const roll = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.08, 18), this.m({ color: '#fbf8f0', roughness: 0.6 }));
      roll.rotation.z = Math.PI / 2;
      roll.position.set(cx + 0.12 + i * 0.0, 0.67 + i * 0.07, z1 - 0.1);
      this.root.add(roll);
    }
    // a small round bin on the floor
    const bin = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.11, 0.32, 20, 1, true), this.m({ color: '#3fb27f', roughness: 0.5, side: THREE.DoubleSide }));
    bin.position.set(0.72, 0.16, z1 + 0.17);
    bin.castShadow = true;
    this.root.add(bin);
    // the store mascot sticker: a smiling basket
    const sc = T.makeCanvas(256, 256);
    const sg = sc.getContext('2d');
    sg.fillStyle = '#fff6e0';
    sg.beginPath();
    sg.arc(128, 128, 124, 0, Math.PI * 2);
    sg.fill();
    sg.lineWidth = 8;
    sg.strokeStyle = '#d9573e';
    sg.stroke();
    drawIcon(sg, 'basket', 40, 30, 176);
    sg.fillStyle = '#3a2a22';
    sg.beginPath();
    sg.arc(104, 150, 8, 0, Math.PI * 2);
    sg.arc(152, 150, 8, 0, Math.PI * 2);
    sg.fill();
    sg.lineWidth = 6;
    sg.strokeStyle = '#3a2a22';
    sg.beginPath();
    sg.arc(128, 160, 22, 0.2, Math.PI - 0.2);
    sg.stroke();
    const sticker = new THREE.Mesh(new THREE.CircleGeometry(0.09, 32), this.m({ map: T.canvasTex(sc), roughness: 0.5, transparent: true }));
    sticker.position.set(0.62, 0.45, z1 + 0.003);
    this.root.add(sticker);
    // scuffed steel kick plate along the cashier side
    const kick = new THREE.Mesh(new THREE.BoxGeometry(COUNTER.x1 - COUNTER.x0, 0.12, 0.01), this.mSteel);
    kick.position.set((COUNTER.x0 + COUNTER.x1) / 2, 0.06, z1 + 0.004);
    this.root.add(kick);
    // little rubber mat where the cashier stands
    const mat = new THREE.Mesh(new RoundedBoxGeometry(1.0, 0.012, 0.7, 2, 0.006), this.m({ color: '#3a3e48', roughness: 0.95 }));
    mat.position.set(CASHIER.x, 0.006, CASHIER.z + 0.1);
    mat.receiveShadow = true;
    this.root.add(mat);
  }

  buildProps() {
    this.buildCashierSide();
    // divider bar, coin tray, little cactus, pen cup: a working place, not a showroom
    const div = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.38, 3), this.m({ color: '#f3c74a', roughness: 0.4 }));
    div.rotation.z = Math.PI / 2;
    div.rotation.x = Math.PI / 6;
    div.position.set(-2.22, TOP + 0.03, -0.38);
    div.castShadow = true;
    this.root.add(div);
    const tray = new THREE.Mesh(new RoundedBoxGeometry(0.16, 0.012, 0.1, 2, 0.006), this.m({ color: '#3c78c8', roughness: 0.6 }));
    tray.position.set(-0.4, TOP + 0.006, -0.44);
    this.root.add(tray);
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.028, 0.05, 14), this.m({ color: '#c8693e', roughness: 0.8 }));
    pot.position.set(0.18, TOP + 0.025, -0.47);
    pot.castShadow = true;
    this.root.add(pot);
    const cactusMat = this.m({ color: '#5a9e5a', roughness: 0.7 });
    const cac = new THREE.Mesh(new THREE.CapsuleGeometry(0.018, 0.04, 4, 10), cactusMat);
    cac.position.set(0.18, TOP + 0.08, -0.47);
    cac.castShadow = true;
    this.root.add(cac);
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.009, 0.02, 4, 8), cactusMat);
    arm.position.set(0.2, TOP + 0.085, -0.47);
    arm.rotation.z = -0.9;
    this.root.add(arm);
    const flower = new THREE.Mesh(new THREE.SphereGeometry(0.008, 8, 6), this.m({ color: '#ff6fa8' }));
    flower.position.set(0.18, TOP + 0.12, -0.47);
    this.root.add(flower);
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.022, 0.08, 14, 1, true), this.m({ color: '#2e9fd6', side: THREE.DoubleSide }));
    cup.position.set(-0.36, TOP + 0.04, -0.47);
    this.root.add(cup);
    for (let i = 0; i < 3; i++) {
      const pen = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.13, 6), this.m({ color: ['#e94f37', '#3a2a22', '#3c78c8'][i] }));
      pen.position.set(-0.36 + (i - 1) * 0.01, TOP + 0.08, -0.47 + (i % 2) * 0.01);
      pen.rotation.z = (i - 1) * 0.15;
      this.root.add(pen);
    }
    this.colliders.push({ c: [0.18, TOP + 0.05, -0.47], h: [0.035, 0.05, 0.035], kind: 'counter' });
  }

  // ---------- live updates ----------

  setPower(p) {
    this.power = p;
  }

  update(dt) {
    this.time += dt;
    const t = this.time;
    // belt texture follows the belt position (items ride along +x)
    this.beltTex.offset.y = -this.beltPos / 0.5;
    // scanner glass animation
    this.scanFlash = Math.max(0, this.scanFlash - dt * 4);
    this.scanErr = Math.max(0, this.scanErr - dt * 2.5);
    const intensity = this.power > 0 ? 0.6 + 0.4 * this.power : 0.18 + 0.12 * Math.max(0, Math.sin(t * 2.2));
    T.drawScannerGlass(this.scanCtx, 256, 256, t, intensity, this.scanFlash, this.scanErr);
    this.scanTex.needsUpdate = true;
    const col = this.scanErr > 0 ? [1, 0.5, 0.1] : this.scanFlash > 0 ? [0.3, 1, 0.4] : [1, 0.1, 0.1];
    this.scanLight.color.setRGB(col[0], col[1], col[2]);
    this.scanLight.intensity = (this.power > 0 ? 0.35 : 0.08) + this.scanFlash * 1.2 + this.scanErr * 1.0;

    // belt button: glows when powered; pressed animation
    this.btnPress = damp(this.btnPress, this.btnDown ? 1 : 0, 30, dt);
    this.btnCap.position.y = 0.04 - this.btnPress * 0.014;
    this.btnMat.emissiveIntensity = this.power > 0 ? 0.25 + (this.btnDown ? 0.9 : 0.25 * (0.5 + 0.5 * Math.sin(t * 2.4))) : 0;

    // keys spring back
    for (const k of this.keys) {
      k.userData.press = Math.max(0, k.userData.press - dt * 6);
      k.position.y = k.userData.rest - Math.sin(Math.min(1, k.userData.press) * Math.PI) * 0.012;
    }
    const tk = this.totalKey;
    tk.userData.press = Math.max(0, tk.userData.press - dt * 4);
    tk.position.y = tk.userData.rest - Math.sin(Math.min(1, tk.userData.press) * Math.PI) * 0.016;
    const tg = this.totalGlow * (0.55 + 0.45 * Math.sin(t * 3.2));
    for (const m of this.totalMats) m.emissiveIntensity = tg * 0.9;

    // drawer
    this.drawerOpen = damp(this.drawerOpen, this.drawerTarget, this.drawerTarget > this.drawerOpen ? 9 : 12, dt);
    this.drawer.position.z = COUNTER.z1 - 0.2 + this.drawerOpen * 0.3;

    // weight readout rolls toward the target
    if (Math.abs(this.weightShown - this.weightTarget) > 0.0005) {
      this.weightShown = lerp(this.weightShown, this.weightTarget, clamp(dt * 5, 0, 1));
      if (Math.abs(this.weightShown - this.weightTarget) < 0.002) this.weightShown = this.weightTarget;
      this.drawWeight(this.weightShown + (this.weightShown !== this.weightTarget ? Math.random() * 0.01 : 0), this.power > 0);
    }

    // lane lamp: lit when the lane is open, flashes on each beep
    this.lampBlink = Math.max(0, this.lampBlink - dt * 5);
    const lv = this.power > 0 ? 1.0 + this.lampBlink * 1.4 : 0.35;
    this.lampMat.color.setRGB(lv, lv * 0.97, lv * 0.92);
    for (const d of this.eyeDots) d.material.color.setRGB(this.power > 0 ? 1 : 0.3, 0.12, 0.1);
  }
}
