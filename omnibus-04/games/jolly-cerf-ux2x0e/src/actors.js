import * as THREE from 'three';
import { RoundedBoxGeometry, mergeGeometries } from 'three';
import { makeLit, twinMaterial } from './materials.js';

// Merge a group's static child meshes into one vertex-coloured mesh per material kind
// (fewer draw calls; the mirror twins double every call).
export function bakeStatic(group) {
  const buckets = new Map();
  const remove = [];
  const col = new THREE.Color();
  for (const ch of group.children) {
    if (!ch.isMesh || ch.userData.keep) continue;
    const m = ch.material;
    if (!m.userData || !m.userData.isLit || m.transparent || 'USE_TEX' in m.defines || 'USE_VCOLOR' in m.defines) continue;
    const key = [m.uniforms.uSpec.value, m.uniforms.uGloss.value, m.uniforms.uEmissive.value.getHexString(), m.side].join('|');
    ch.updateMatrix();
    let g = ch.geometry.index ? ch.geometry.toNonIndexed() : ch.geometry.clone();
    g.applyMatrix4(ch.matrix);
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    col.copy(m.uniforms.uColor.value);
    const n = g.attributes.position.count, c = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { c[i * 3] = col.r; c[i * 3 + 1] = col.g; c[i * 3 + 2] = col.b; }
    g.setAttribute('color', new THREE.BufferAttribute(c, 3));
    if (!buckets.has(key)) buckets.set(key, { m, list: [] });
    buckets.get(key).list.push(g);
    remove.push(ch);
  }
  for (const { m, list } of buckets.values()) {
    if (list.length < 2 && remove.length < 2) continue;
    const merged = mergeGeometries(list, false);
    const mat = makeLit({ vertexColors: true, spec: m.uniforms.uSpec.value, gloss: m.uniforms.uGloss.value, emissive: m.uniforms.uEmissive.value.getHex(), side: m.side });
    group.add(new THREE.Mesh(merged, mat));
  }
  for (const r of remove) group.remove(r);
  return group;
}
const keep = o => { o.userData.keep = true; return o; };

const MIRROR = new THREE.Matrix4().makeScale(1, -1, 1);

function mesh(geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  return m;
}

// ---------- mirror twin support ----------
// A twin is a clone of an actor's scene graph whose root matrix is the mirror
// image of the real one through the floor plane, and whose materials discard
// fragments on the viewer's side (so it only ever shows up "in" the floor).
export class Twin {
  constructor(src, scene) {
    this.src = src;
    this.dst = src.clone(true);
    this.pairs = [];
    const a = [], b = [];
    src.traverse(o => a.push(o));
    this.dst.traverse(o => b.push(o));
    for (let i = 0; i < a.length; i++) {
      this.pairs.push([a[i], b[i]]);
      if (b[i].isMesh) {
        b[i].material = Array.isArray(b[i].material) ? b[i].material.map(twinMaterial) : twinMaterial(b[i].material);
        b[i].renderOrder = a[i].renderOrder;
      }
    }
    this.dst.matrixAutoUpdate = false;
    scene.add(this.dst);
  }
  sync() {
    for (let i = 1; i < this.pairs.length; i++) {
      const [s, d] = this.pairs[i];
      d.position.copy(s.position);
      d.quaternion.copy(s.quaternion);
      d.scale.copy(s.scale);
      d.visible = s.visible;
    }
    this.src.updateMatrixWorld(true);
    this.dst.matrix.multiplyMatrices(MIRROR, this.src.matrixWorld);
    this.dst.visible = this.src.visible;
    this.dst.updateMatrixWorld(true);
  }
}

// ---------- textures ----------
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function beachBallTex() {
  return canvasTex(256, 128, (g, w, h) => {
    const cols = ['#e2452f', '#f7f3ea', '#f2c230', '#f7f3ea', '#3b78c2', '#f7f3ea'];
    for (let i = 0; i < 6; i++) { g.fillStyle = cols[i]; g.fillRect((i * w) / 6, 0, w / 6 + 1, h); }
    g.fillStyle = '#f7f3ea'; g.fillRect(0, 0, w, 12); g.fillRect(0, h - 12, w, 12);
  });
}

function cautionTex() {
  return canvasTex(128, 256, (g, w, h) => {
    g.fillStyle = '#f2c230'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#1f1d1a';
    g.fillRect(0, 0, w, 10); g.fillRect(0, h - 10, w, 10);
    // warning triangle with a slipping figure (pictogram only)
    g.lineWidth = 9; g.strokeStyle = '#1f1d1a'; g.lineJoin = 'round';
    g.beginPath(); g.moveTo(w / 2, 40); g.lineTo(w - 14, 150); g.lineTo(14, 150); g.closePath(); g.stroke();
    g.lineWidth = 7; g.lineCap = 'round';
    g.beginPath(); g.arc(w / 2 + 8, 78, 8, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.moveTo(w / 2 + 4, 90); g.lineTo(w / 2 - 6, 118); g.lineTo(w / 2 - 22, 128);
    g.moveTo(w / 2 - 6, 118); g.lineTo(w / 2 + 16, 132);
    g.moveTo(w / 2 + 2, 98); g.lineTo(w / 2 - 18, 100); g.moveTo(w / 2 + 2, 98); g.lineTo(w / 2 + 22, 108);
    g.stroke();
    g.lineWidth = 5;
    g.beginPath(); g.moveTo(26, 140); g.quadraticCurveTo(w / 2, 132, w - 26, 140); g.stroke();
    g.fillRect(24, 180, w - 48, 12); g.fillRect(34, 204, w - 68, 10);
  });
}

// ---------- scrubber ----------
export function makeScrubber() {
  const root = new THREE.Group();
  root.name = 'scrubber';
  const red = makeLit({ color: 0xd4522d, spec: 0.6, gloss: 50 });
  const cream = makeLit({ color: 0xefe7d6, spec: 0.3, gloss: 30 });
  const black = makeLit({ color: 0x242322, spec: 0.2, gloss: 20 });
  const dark = makeLit({ color: 0x3b3936 });
  const water = makeLit({ color: 0x5fb0b4, spec: 0.8, gloss: 70, emissive: 0x0c2a2c });

  const brush = new THREE.Group();
  brush.add(mesh(new THREE.CylinderGeometry(0.345, 0.36, 0.05, 32), dark, 0, 0.027, 0));
  const tuft = new THREE.BoxGeometry(0.05, 0.05, 0.03);
  const tuftMat = makeLit({ color: 0x8a7a55 });
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    const t = mesh(tuft, tuftMat, Math.sin(a) * 0.345, 0.025, Math.cos(a) * 0.345);
    t.rotation.y = a;
    brush.add(t);
  }
  root.add(brush);
  root.add(mesh(new THREE.CylinderGeometry(0.37, 0.37, 0.1, 40), red, 0, 0.1, 0));
  const bumper = mesh(new THREE.TorusGeometry(0.372, 0.03, 8, 40), black, 0, 0.075, 0);
  bumper.rotation.x = Math.PI / 2;
  root.add(bumper);
  root.add(mesh(new THREE.CylinderGeometry(0.3, 0.32, 0.04, 40), cream, 0, 0.17, 0));
  root.add(mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.04, 20), black, 0, 0.2, 0));
  root.add(mesh(new RoundedBoxGeometry(0.36, 0.2, 0.3, 3, 0.05), red, 0, 0.29, 0.14));
  const tank = mesh(new RoundedBoxGeometry(0.3, 0.16, 0.18, 3, 0.04), makeLit({ color: 0xcfe4e2, spec: 0.9, gloss: 80, opacity: 0.55, transparent: true, depthWrite: false }), 0, 0.46, 0.18);
  tank.renderOrder = 2;
  const waterIn = keep(mesh(new THREE.BoxGeometry(0.26, 0.08, 0.14), water, 0, 0.43, 0.18));
  root.add(waterIn, tank);
  const lamp = keep(mesh(new THREE.SphereGeometry(0.025, 10, 6), makeLit({ color: 0x000000, emissive: 0xffb23a }), 0.12, 0.4, 0.05));
  root.add(lamp);
  for (const s of [-1, 1]) {
    const w = mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.045, 16), black, s * 0.2, 0.06, 0.36);
    w.rotation.z = Math.PI / 2;
    root.add(w);
  }
  bakeStatic(brush);
  bakeStatic(root);
  root.userData = { brush, waterIn, lamp };
  return root;
}

// handle drawn between two world points
export function makeHandle() {
  const g = new THREE.CylinderGeometry(0.018, 0.018, 1, 10);
  g.translate(0, 0.5, 0);
  const m = new THREE.Mesh(g, makeLit({ color: 0xb8bcbf, spec: 0.8, gloss: 60 }));
  const grip = mesh(new THREE.CylinderGeometry(0.026, 0.026, 0.4, 10), makeLit({ color: 0x2a2826 }), 0, 1, 0);
  grip.rotation.z = Math.PI / 2;
  const root = new THREE.Group();
  root.add(m);
  root.add(grip);
  root.userData = { shaft: m, grip };
  return root;
}
const _up = new THREE.Vector3(0, 1, 0), _d = new THREE.Vector3(), _q = new THREE.Quaternion();
export function placeHandle(handle, a, b, gripYaw) {
  _d.subVectors(b, a);
  const len = _d.length();
  handle.position.copy(a);
  _q.setFromUnitVectors(_up, _d.normalize());
  handle.quaternion.copy(_q);
  handle.userData.shaft.scale.set(1, len, 1);
  handle.userData.grip.position.set(0, len, 0);
  handle.userData.grip.rotation.set(0, gripYaw, Math.PI / 2);
}

// ---------- janitor ----------
export function makeJanitor() {
  const root = new THREE.Group();
  root.name = 'janitor';
  const navy = makeLit({ color: 0x33506f, spec: 0.1 });
  const navyD = makeLit({ color: 0x27405a });
  const skin = makeLit({ color: 0xdca77d, spec: 0.15 });
  const shoe = makeLit({ color: 0x2b2826, spec: 0.3 });
  const grey = makeLit({ color: 0xd8d5ce });
  const eye = makeLit({ color: 0x1d1b19 });
  const stripe = makeLit({ color: 0xe9c24a, spec: 0.4 });

  const hips = new THREE.Group();
  hips.position.set(0, 0.82, 0);
  root.add(hips);
  const legs = [];
  for (const s of [-1, 1]) {
    const leg = new THREE.Group();
    leg.position.set(s * 0.1, 0, 0);
    const shin = mesh(new THREE.CapsuleGeometry(0.075, 0.62, 4, 10), navyD, 0, -0.38, 0);
    const foot = mesh(new RoundedBoxGeometry(0.12, 0.08, 0.26, 2, 0.03), shoe, 0, -0.78, -0.05);
    leg.add(shin, foot);
    hips.add(leg);
    legs.push(leg);
  }
  const torso = new THREE.Group();
  torso.position.set(0, 0.82, 0);
  root.add(torso);
  torso.add(mesh(new RoundedBoxGeometry(0.42, 0.56, 0.27, 3, 0.1), navy, 0, 0.27, 0));
  torso.add(mesh(new THREE.BoxGeometry(0.43, 0.05, 0.28), stripe, 0, 0.3, 0));
  torso.add(mesh(new THREE.BoxGeometry(0.1, 0.08, 0.02), grey, 0.1, 0.42, -0.137));
  const head = new THREE.Group();
  head.position.set(0, 0.68, 0);
  torso.add(head);
  head.add(mesh(new THREE.SphereGeometry(0.135, 20, 14), skin, 0, 0, 0));
  head.add(mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.08, 10), skin, 0, -0.14, 0));
  const cap = mesh(new THREE.SphereGeometry(0.142, 20, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), navyD, 0, 0.03, 0);
  head.add(cap);
  const brim = mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.018, 18, 1, false, -Math.PI / 2, Math.PI), navyD, 0, 0.035, -0.08);
  head.add(brim);
  for (const s of [-1, 1]) {
    head.add(mesh(new THREE.SphereGeometry(0.017, 8, 6), eye, s * 0.05, -0.005, -0.125));
    head.add(mesh(new THREE.SphereGeometry(0.03, 8, 6), skin, s * 0.135, -0.01, 0));
  }
  head.add(mesh(new RoundedBoxGeometry(0.11, 0.03, 0.04, 2, 0.012), grey, 0, -0.06, -0.125));
  head.add(mesh(new THREE.SphereGeometry(0.024, 8, 6), skin, 0, -0.03, -0.14));

  // arms: shoulder -> elbow -> hand, solved each frame
  const arms = [];
  const seg = new THREE.CapsuleGeometry(0.052, 1, 4, 8);
  seg.translate(0, 0.5, 0);
  for (const s of [-1, 1]) {
    const upper = new THREE.Mesh(seg, navy);
    const lower = new THREE.Mesh(seg, navy);
    const hand = mesh(new THREE.SphereGeometry(0.05, 10, 8), skin);
    root.add(upper, lower, hand);
    arms.push({ s, upper, lower, hand });
  }
  for (const l of legs) bakeStatic(l);
  bakeStatic(torso);
  bakeStatic(head);
  root.userData = { legs, hips, torso, head, arms, walk: 0 };
  return root;
}

const _S = new THREE.Vector3(), _T = new THREE.Vector3(), _E = new THREE.Vector3(), _h = new THREE.Vector3(), _n = new THREE.Vector3();
function segTo(meshObj, a, b) {
  _d.subVectors(b, a);
  const len = Math.max(0.001, _d.length());
  meshObj.position.copy(a);
  meshObj.quaternion.setFromUnitVectors(_up, _d.divideScalar(len));
  meshObj.scale.set(1, len - 0.05, 1);
}
// localTarget: hand target (between the hands) in janitor-local coords
export function poseJanitorArms(jan, localTarget, lean) {
  const ud = jan.userData;
  const shoulderY = 0.82 + 0.5;
  for (const arm of ud.arms) {
    _S.set(arm.s * 0.24, shoulderY - lean * 0.08, -lean * 0.12);
    _T.copy(localTarget); _T.x += arm.s * 0.17;
    const l1 = 0.31, l2 = 0.31;
    _d.subVectors(_T, _S);
    let dist = _d.length();
    const maxD = l1 + l2 - 0.005;
    if (dist > maxD) { _d.multiplyScalar(maxD / dist); _T.copy(_S).add(_d); dist = maxD; }
    // elbow: bend outward and down
    const a = (l1 * l1 - l2 * l2 + dist * dist) / (2 * dist);
    const hgt = Math.sqrt(Math.max(0, l1 * l1 - a * a));
    _d.normalize();
    _h.set(arm.s * 0.8, -1, 0.3);
    _n.copy(_h).addScaledVector(_d, -_h.dot(_d)).normalize();
    _E.copy(_S).addScaledVector(_d, a).addScaledVector(_n, hgt);
    segTo(arm.upper, _S, _E);
    segTo(arm.lower, _E, _T);
    arm.hand.position.copy(_T);
  }
}

// ---------- cart ----------
export function makeCart() {
  const root = new THREE.Group();
  root.name = 'cart';
  const body = makeLit({ color: 0x4a4d52, spec: 0.35, gloss: 40 });
  const dark = makeLit({ color: 0x2a2a2b });
  const yellow = makeLit({ color: 0xf0c230, spec: 0.5, gloss: 50 });
  const grey = makeLit({ color: 0x8b8e8f, spec: 0.3 });
  const bag = makeLit({ color: 0x3f4246, spec: 0.5, gloss: 24 });
  const brass = makeLit({ color: 0xc8a14a, spec: 1.0, gloss: 60 });
  const waterMat = makeLit({ color: 0x7ea9a8, spec: 1.0, gloss: 90 });
  const mopMat = makeLit({ color: 0xeee6d2 });
  const green = makeLit({ color: 0x5aa06a, spec: 0.6, gloss: 50 });

  root.add(mesh(new RoundedBoxGeometry(0.58, 0.1, 1.02, 3, 0.04), body, 0, 0.17, 0));
  const wheels = [];
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const w = keep(mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.04, 14), dark, sx * 0.23, 0.058, sz * 0.4));
    w.rotation.z = Math.PI / 2;
    root.add(w);
    wheels.push(w);
    root.add(mesh(new THREE.BoxGeometry(0.03, 0.06, 0.03), grey, sx * 0.23, 0.12, sz * 0.4));
  }
  for (const s of [-1, 1]) root.add(mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.86, 8), grey, s * 0.25, 0.64, 0.47));
  root.add(mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.56, 8).rotateZ(Math.PI / 2), dark, 0, 1.06, 0.47));
  root.add(mesh(new RoundedBoxGeometry(0.56, 0.04, 0.34, 2, 0.015), body, 0, 0.82, 0.3));
  root.add(mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.2, 10), green, 0.12, 0.94, 0.28));
  root.add(mesh(new THREE.BoxGeometry(0.03, 0.06, 0.03), green, 0.12, 1.06, 0.26));
  root.add(mesh(new RoundedBoxGeometry(0.2, 0.06, 0.16, 2, 0.02), makeLit({ color: 0xc86a5a }), -0.1, 0.87, 0.3));
  // trash bag
  root.add(mesh(new THREE.CylinderGeometry(0.2, 0.18, 0.62, 16), bag, 0, 0.53, -0.3));
  root.add(mesh(new THREE.TorusGeometry(0.2, 0.02, 6, 20).rotateX(Math.PI / 2), grey, 0, 0.85, -0.3));
  // bucket, water, wringer, mop
  const bucket = new THREE.Group();
  bucket.position.set(0, 0.22, 0.12);
  bucket.add(mesh(new THREE.CylinderGeometry(0.2, 0.17, 0.3, 20, 1, true), yellow, 0, 0.15, 0));
  bucket.add(mesh(new THREE.CircleGeometry(0.17, 20).rotateX(-Math.PI / 2), yellow, 0, 0.01, 0));
  const water = keep(mesh(new THREE.CircleGeometry(0.19, 20).rotateX(-Math.PI / 2), waterMat, 0, 0.24, 0));
  bucket.add(water);
  bucket.add(mesh(new THREE.BoxGeometry(0.34, 0.12, 0.12), grey, 0, 0.34, 0.1));
  root.add(bucket);
  const mop = new THREE.Group();
  mop.position.set(0.05, 0.3, 0.1);
  mop.add(mesh(new THREE.CylinderGeometry(0.016, 0.016, 1.3, 8), makeLit({ color: 0x9c7a52 }), 0, 0.62, 0));
  mop.add(mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.14, 10), mopMat, 0, 0.02, 0));
  mop.rotation.z = -0.22; mop.rotation.x = 0.12;
  root.add(mop);
  // key ring swinging from the handle bar
  const keys = new THREE.Group();
  keys.position.set(-0.18, 1.04, 0.49);
  keys.add(mesh(new THREE.TorusGeometry(0.035, 0.007, 6, 14), brass, 0, -0.04, 0));
  for (let i = 0; i < 3; i++) {
    const k = mesh(new THREE.BoxGeometry(0.018, 0.075, 0.006), brass, -0.02 + i * 0.02, -0.1, 0);
    k.rotation.z = (i - 1) * 0.35;
    keys.add(k);
  }
  root.add(keys);
  bakeStatic(bucket); bakeStatic(mop); bakeStatic(keys); bakeStatic(root);
  root.userData = { wheels, water, keys, bucket };
  return root;
}

// ---------- caution sign ----------
export function makeSign() {
  const root = new THREE.Group();
  root.name = 'sign';
  const tex = cautionTex();
  const mat = makeLit({ map: tex, spec: 0.4, gloss: 30, side: THREE.DoubleSide });
  const pivot = new THREE.Group();
  root.add(pivot);
  for (const s of [-1, 1]) {
    const g = new THREE.PlaneGeometry(0.3, 0.62);
    g.translate(0, -0.31, 0);
    const p = new THREE.Mesh(g, mat);
    p.position.set(0, 0.64, 0);
    p.rotation.x = s * 0.2;
    if (s < 0) p.rotation.y = Math.PI;
    pivot.add(p);
  }
  pivot.add(mesh(new THREE.BoxGeometry(0.1, 0.04, 0.03), makeLit({ color: 0xe6b726 }), 0, 0.67, 0));
  root.userData = { pivot };
  return root;
}

// ---------- ball ----------
export function makeBall() {
  const root = new THREE.Group();
  root.name = 'ball';
  const m = mesh(new THREE.SphereGeometry(0.14, 24, 16), makeLit({ map: beachBallTex(), spec: 0.9, gloss: 60 }), 0, 0, 0);
  root.add(m);
  root.userData = { spin: m };
  return root;
}

// ---------- foam bubbles ----------
export function makeFoam(count = 90) {
  const geo = new THREE.SphereGeometry(1, 8, 6);
  const mat = makeLit({ color: 0xf6f4ee, spec: 1.0, gloss: 60, emissive: 0x1a1a1a });
  const inst = new THREE.InstancedMesh(geo, mat, count);
  inst.frustumCulled = false;
  inst.renderOrder = 11;
  return inst;
}
