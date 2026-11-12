// Procedural people: a small articulated rig, clothing presets and pose blending.
// Local rig axes: +y = the person's "up" (head), +z = facing forward.
import * as THREE from 'three';
import { color, fabric, M } from './materials.js';
import { mergeGeometries } from 'three/addons/BufferGeometryUtils.js';

const cap = (r, len, mat, seg = 8) => {
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, Math.max(0.001, len), 4, seg), mat);
  m.castShadow = true; m.receiveShadow = true;
  return m;
};
const mesh = (geo, mat) => { const m = new THREE.Mesh(geo, mat); m.castShadow = true; m.receiveShadow = true; return m; };
const joint = (parent, x, y, z) => { const g = new THREE.Bone(); g.position.set(x, y, z); parent.add(g); return g; };

// tapered limb segment hanging down from its joint (along -y)
function limbGeo(r0, r1, L, seg = 10) {
  // profile from the bottom end up to the joint (lathe normals face outward)
  const pts = [];
  const N = 12;
  for (let i = N; i >= 0; i--) {
    const t = i / N;
    let r = r0 + (r1 - r0) * t;
    const e0 = Math.min(1, t * L / (r0 * 0.9)), e1 = Math.min(1, (1 - t) * L / (r1 * 0.9));
    r *= Math.sqrt(Math.max(0, 1 - (1 - e0) ** 2)) * Math.sqrt(Math.max(0, 1 - (1 - e1) ** 2));
    pts.push(new THREE.Vector2(Math.max(0.0005, r), -t * L));
  }
  return new THREE.LatheGeometry(pts, seg);
}

export const OUTFITS = {
  courier: { skin: 1, hair: 0, shirt: [0x6f8fa6, 'plain'], pants: 0x1f2a3a, shoes: 0xd9d9d6, cap: 0x1d2c44, bag: true, h: 1.72, build: 1.0, sleeves: 'short', collar: 0x1d2c44 },
  grandpa: { skin: 2, hair: 3, shirt: [0x5f6b4e, 'plain'], pants: 0x6b5d4c, shoes: 0x3a2e26, h: 1.64, build: 0.95, sleeves: 'long', glasses: true, flatcap: 0x6e6356, bald: true },
  grandma: { skin: 0, hair: 3, shirt: [0x8f7aa3, 'plain'], pants: 0x5d5a66, shoes: 0x55504a, h: 1.52, build: 0.95, sleeves: 'long', apron: [0xe3b3a0, 'dots'], bun: true },
  boy: { skin: 0, hair: 0, shirt: [0xf2c94c, 'plain'], pants: 0x3c6ea8, shoes: 0xe04a3a, h: 1.18, build: 0.8, sleeves: 'short', shorts: true, child: true },
  girl: { skin: 3, hair: 1, shirt: [0xd94f5c, 'dots'], pants: 0xd94f5c, shoes: 0xf0f0f0, h: 1.22, build: 0.78, sleeves: 'short', skirt: 0xd94f5c, child: true, ponytail: true },
  mom: { skin: 3, hair: 1, shirt: [0xf2efe8, 'plain'], pants: 0x7a8a9a, shoes: 0xc9b8a6, h: 1.6, build: 0.9, sleeves: 'long', apron: [0x8fb3a1, 'check'], ponytail: true },
  shopkeeper: { skin: 2, hair: 0, shirt: [0xf4f4f0, 'plain'], pants: 0x2d2f33, shoes: 0x2a2a2a, h: 1.7, build: 1.1, sleeves: 'short', apron: [0x2f6b4f, 'plain'], headband: 0xe8e2d0 },
  kidA: { skin: 1, hair: 0, shirt: [0x4fa3d9, 'stripe'], pants: 0x33415a, shoes: 0x2f7ad9, h: 1.12, build: 0.78, sleeves: 'short', shorts: true, child: true, partyhat: true },
  kidB: { skin: 0, hair: 2, shirt: [0x7cc47f, 'plain'], pants: 0xe6a35c, shoes: 0xffffff, h: 1.08, build: 0.76, sleeves: 'short', skirt: 0xe6a35c, child: true, ponytail: true },
  kidC: { skin: 2, hair: 0, shirt: [0xf08a4b, 'plain'], pants: 0x4b4b50, shoes: 0x333333, h: 1.15, build: 0.8, sleeves: 'short', shorts: true, child: true },
};

function rgb(hex) { return [(hex >> 16) & 255, (hex >> 8) & 255, hex & 255]; }
function shirtMat(spec) {
  const [c, kind] = spec;
  const a = rgb(c);
  if (kind === 'stripe') return fabric('stripe', a, [245, 245, 240], 10);
  if (kind === 'dots') return fabric('dots', [250, 248, 240], a, 7);
  if (kind === 'check') return fabric('check', a, [240, 238, 230], 6);
  return fabric('plain', a);
}

export class Human {
  constructor(kind = 'courier') {
    const o = OUTFITS[kind];
    this.kind = kind; this.o = o;
    const s = o.h / 1.72;             // overall scale
    const w = o.build;                 // girth
    const child = !!o.child;
    this.scale = s;
    const skin = M.skin[o.skin], hair = M.hair[o.hair];
    const shirt = shirtMat(o.shirt), pants = color(o.pants, 0.85), shoes = color(o.shoes, 0.55);
    const root = new THREE.Group(); root.name = 'human-' + kind;
    this.root = root;
    const body = new THREE.Group(); root.add(body); body.scale.setScalar(s); this.body = body;
    const J = this.j = {};
    const headR = child ? 0.118 : 0.108;
    // pelvis (origin at hips)
    J.pelvis = joint(body, 0, 0, 0);
    { const pm = mesh(new THREE.SphereGeometry(0.17, 14, 10), pants); pm.scale.set(1.0 * w, 0.62, 0.72 * w); J.pelvis.add(pm); }
    // spine & chest
    J.spine = joint(J.pelvis, 0, 0.08, 0);
    const torso = mesh(limbGeo(0.13 * w, 0.165 * w, 0.44, 14), shirt);
    torso.rotation.x = Math.PI; torso.position.y = 0.0; torso.scale.set(1.12, 1, 0.72);
    J.spine.add(torso);
    J.chest = joint(J.spine, 0, 0.4, 0);
    const shoulders = mesh(new THREE.SphereGeometry(0.17 * w, 14, 10), shirt); shoulders.scale.set(1.08, 0.5, 0.66); shoulders.position.y = 0.02;
    J.chest.add(shoulders);
    if (o.collar) { const c = mesh(new THREE.TorusGeometry(0.055, 0.018, 6, 14), color(o.collar, 0.8)); c.rotation.x = Math.PI / 2; c.position.y = 0.09; J.chest.add(c); }
    // neck & head
    J.neck = joint(J.chest, 0, 0.1, 0.0);
    { const nm = mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.1, 10), skin); nm.position.set(0, 0.04, 0); J.neck.add(nm); }
    J.head = joint(J.neck, 0, 0.09, 0.01);
    const head = mesh(new THREE.SphereGeometry(headR, 20, 16), skin); head.scale.set(0.9, 1.08, 1.0); head.position.y = headR * 0.95;
    J.head.add(head);
    this.headMesh = head;
    const hy = headR * 0.95;
    // face: nose, ears, eyes, brows
    const nose = mesh(new THREE.SphereGeometry(0.018, 8, 6), skin); nose.position.set(0, hy - 0.005, headR * 0.98); nose.scale.set(0.9, 1.1, 1); J.head.add(nose);
    for (const sx of [-1, 1]) {
      const ear = mesh(new THREE.SphereGeometry(0.024, 8, 6), skin); ear.position.set(sx * headR * 0.9, hy, 0); ear.scale.set(0.5, 1, 0.8); J.head.add(ear);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.011, 8, 6), color(0x1a1512, 0.3)); eye.position.set(sx * 0.036, hy + 0.018, headR * 0.9); J.head.add(eye);
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.006, 0.01), hair); brow.position.set(sx * 0.037, hy + 0.043, headR * 0.93); J.head.add(brow);
    }
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.005, 0.01), color(0x8a4a42, 0.6)); mouth.position.set(0, hy - 0.045, headR * 0.93); J.head.add(mouth);
    this.mouth = mouth;
    // hair
    if (!o.bald) {
      const hm = mesh(new THREE.SphereGeometry(headR * 1.06, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), hair);
      hm.position.set(0, hy + 0.01, -0.012); hm.rotation.x = -0.25; J.head.add(hm);
    } else {
      const fringe = mesh(new THREE.SphereGeometry(headR * 1.03, 16, 8, 0, Math.PI * 2, Math.PI * 0.45, Math.PI * 0.25), hair);
      fringe.position.set(0, hy, -0.01); fringe.rotation.x = 0.35; J.head.add(fringe);
    }
    if (o.bun) { const b = mesh(new THREE.SphereGeometry(0.05, 10, 8), hair); b.position.set(0, hy + 0.06, -0.1); J.head.add(b); }
    this.danglers = [];
    if (o.ponytail) {
      const pt = joint(J.head, 0, hy + 0.04, -0.1);
      const tail = mesh(limbGeo(0.035, 0.012, 0.22, 8), hair); pt.add(tail);
      this.danglers.push({ obj: pt, k: 6, len: 0.22 });
    }
    if (o.cap) {
      const cm = color(o.cap, 0.75);
      const dome = mesh(new THREE.SphereGeometry(headR * 1.1, 18, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), cm);
      dome.position.set(0, hy + 0.02, -0.005); dome.scale.y = 0.9; J.head.add(dome);
      const brim = mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.012, 16, 1, false, -Math.PI / 2, Math.PI), cm);
      brim.position.set(0, hy + 0.025, headR * 0.92); brim.scale.set(1.2, 1, 1.25); J.head.add(brim);
      const hairBack = mesh(new THREE.SphereGeometry(headR * 1.02, 12, 8, 0, Math.PI * 2, Math.PI * 0.45, Math.PI * 0.2), hair);
      hairBack.position.set(0, hy, -0.01); J.head.add(hairBack);
    }
    if (o.flatcap) {
      const cm = color(o.flatcap, 0.9);
      const c = mesh(new THREE.CylinderGeometry(headR * 1.05, headR * 1.12, 0.05, 16), cm); c.position.set(0, hy + 0.07, 0.01); c.rotation.x = 0.12; J.head.add(c);
      this.hat = c;
    }
    if (o.headband) { const hb = mesh(new THREE.TorusGeometry(headR * 1.0, 0.017, 6, 20), color(o.headband, 0.9)); hb.rotation.x = Math.PI / 2 - 0.15; hb.position.y = hy + 0.035; J.head.add(hb); }
    if (o.glasses) {
      for (const sx of [-1, 1]) { const g = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.003, 4, 12), color(0x333333, 0.3, 0.6)); g.position.set(sx * 0.037, hy + 0.018, headR * 0.97); J.head.add(g); }
    }
    if (o.partyhat) {
      const ph = mesh(new THREE.ConeGeometry(0.06, 0.17, 14), fabric('stripe', [240, 80, 110], [255, 220, 90], 6)); ph.position.set(0.02, hy + 0.15, 0); ph.rotation.z = -0.2; J.head.add(ph);
    }
    // arms
    const upperR = 0.056 * w, foreR = 0.046 * w;
    const sleeveM = shirt, armSkin = skin;
    for (const side of ['L', 'R']) {
      const sx = side === 'L' ? 1 : -1;
      const sh = J['shoulder' + side] = joint(J.chest, sx * 0.19 * w, 0.02, 0);
      const ua = mesh(limbGeo(upperR * 1.05, upperR * 0.85, 0.29), o.sleeves === 'long' ? sleeveM : armSkin); sh.add(ua);
      if (o.sleeves === 'short') { const sl = mesh(limbGeo(upperR * 1.35, upperR * 1.2, 0.13), sleeveM); sh.add(sl); }
      const el = J['elbow' + side] = joint(sh, 0, -0.29, 0);
      el.add(mesh(limbGeo(foreR, foreR * 0.8, 0.25), o.sleeves === 'long' ? sleeveM : armSkin));
      if (o.sleeves === 'long') { const cuffHand = joint(el, 0, -0.24, 0); cuffHand.add(mesh(new THREE.SphereGeometry(0.035, 8, 6), skin)); }
      const hd = J['hand' + side] = joint(el, 0, -0.26, 0);
      const hand = mesh(new THREE.SphereGeometry(0.045, 10, 8), skin); hand.scale.set(0.55, 1.05, 0.9); hand.position.y = -0.04;
      hd.add(hand);
    }
    // legs
    const legM = o.shorts ? skin : pants;
    for (const side of ['L', 'R']) {
      const sx = side === 'L' ? 1 : -1;
      const hp = J['hip' + side] = joint(J.pelvis, sx * 0.095 * w, -0.03, 0);
      hp.add(mesh(limbGeo(0.08 * w, 0.058 * w, 0.43), legM));
      if (o.shorts) hp.add(mesh(limbGeo(0.088 * w, 0.075 * w, 0.2), pants));
      const kn = J['knee' + side] = joint(hp, 0, -0.43, 0);
      kn.add(mesh(limbGeo(0.058 * w, 0.04 * w, 0.42), o.shorts || o.skirt ? skin : pants));
      const an = J['ankle' + side] = joint(kn, 0, -0.42, 0);
      const foot = mesh(new THREE.BoxGeometry(0.09, 0.07, 0.24), shoes); foot.position.set(0, -0.035, 0.05);
      an.add(foot);
      const sole = mesh(new THREE.BoxGeometry(0.095, 0.02, 0.25), color(0xe8e6e0, 0.8)); sole.position.set(0, -0.07, 0.05); an.add(sole);
    }
    if (o.skirt) {
      const sk = joint(J.pelvis, 0, 0.02, 0);
      const skm = mesh(new THREE.CylinderGeometry(0.15 * w, 0.26 * w, 0.36, 18, 1, true), color(o.skirt, 0.85, 0, { side: THREE.DoubleSide }));
      skm.position.y = -0.18; sk.add(skm);
      this.danglers.push({ obj: sk, k: 3, len: 0.2, amount: 0.9 });
    }
    if (o.apron) {
      const am = shirtMat(o.apron);
      const ap = joint(J.spine, 0, 0.25, 0.14 * w);
      const a = mesh(new THREE.PlaneGeometry(0.34 * w, 0.62), am); a.position.y = -0.3; ap.add(a);
      this.danglers.push({ obj: ap, k: 4, len: 0.3, amount: 0.7 });
    }
    if (o.bag) {
      const bm = color(0x23262b, 0.7);
      const bag = mesh(new THREE.BoxGeometry(0.1, 0.24, 0.3), bm); bag.position.set(-0.2, -0.05, -0.02); J.pelvis.add(bag);
      const strap = mesh(new THREE.BoxGeometry(0.04, 0.72, 0.012), bm); strap.position.set(0.0, 0.3, 0.13); strap.rotation.z = 0.62; J.spine.add(strap);
      const strap2 = strap.clone(); strap2.position.z = -0.13; J.spine.add(strap2);
      this.bag = bag;
    }
    this.skin(body);
    this.pose = {};      // current euler per joint name
    this.target = {};
    for (const k in J) { this.pose[k] = new THREE.Euler(); this.target[k] = new THREE.Euler(); }
    this.carry = null;
    this.t = Math.random() * 10;
    this.blink = 0;
  }

  // Bake every part into one skinned mesh (one draw call per person).
  skin(body) {
    body.updateMatrixWorld(true);
    const bones = [];
    body.traverse(o => { if (o.isBone) bones.push(o); });
    const index = new Map(bones.map((b, i) => [b, i]));
    const inv = body.matrixWorld.clone().invert();
    const geos = [], meshes = [];
    const col = new THREE.Color();
    body.traverse(o => {
      if (!o.isMesh || o.userData.keep) return;
      let b = o.parent; while (b && !b.isBone) b = b.parent;
      let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
      g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld));
      const n = g.attributes.position.count;
      col.copy(o.material.userData.base || o.material.color || col.set(0xffffff));
      const c = new Float32Array(n * 3), si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
      const bi = index.get(b) ?? 0;
      for (let i = 0; i < n; i++) { c[i * 3] = col.r; c[i * 3 + 1] = col.g; c[i * 3 + 2] = col.b; si[i * 4] = bi; sw[i * 4] = 1; }
      g.setAttribute('color', new THREE.BufferAttribute(c, 3));
      g.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
      g.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
      geos.push(g); meshes.push(o);
    });
    for (const m of meshes) m.parent.remove(m);
    const merged = mergeGeometries(geos, false);
    const sm = new THREE.SkinnedMesh(merged, HUMAN_MAT());
    sm.castShadow = true; sm.receiveShadow = true;
    sm.frustumCulled = false;
    body.add(sm);
    sm.updateMatrixWorld(true);
    sm.bind(new THREE.Skeleton(bones));
    this.mesh = sm;
  }

  // targets from a pose object {joint:[x,y,z]} (degrees)
  setPose(p) {
    for (const k in this.target) this.target[k].set(0, 0, 0);
    for (const k in p) if (this.target[k]) { const v = p[k]; this.target[k].set(v[0] * D, (v[1] || 0) * D, (v[2] || 0) * D); }
  }
  addPose(p, w = 1) {
    for (const k in p) if (this.target[k]) { const v = p[k]; const t = this.target[k]; t.x += v[0] * D * w; t.y += (v[1] || 0) * D * w; t.z += (v[2] || 0) * D * w; }
  }
  // gravity direction expressed in the root's local frame, for danglers
  update(dt, rate = 10, gravityWorld = G_WORLD) {
    this.t += dt;
    const a = 1 - Math.exp(-dt * rate);
    for (const k in this.j) {
      const c = this.pose[k], t = this.target[k];
      c.x += (t.x - c.x) * a; c.y += (t.y - c.y) * a; c.z += (t.z - c.z) * a;
      this.j[k].rotation.copy(c);
    }
    // blink by squashing the eyes... (tiny, only visible close-up)
    // danglers point their local -y along gravity
    if (this.danglers.length) {
      this.root.updateWorldMatrix(true, true);
      for (const d of this.danglers) {
        const parent = d.obj.parent;
        _q.setFromRotationMatrix(_m.extractRotation(parent.matrixWorld)).invert();
        _g.copy(gravityWorld).applyQuaternion(_q).normalize();
        // desired rotation: map (0,-1,0) to _g, blended by amount
        _tq.setFromUnitVectors(_down, _g);
        _tq.slerp(_id, 1 - (d.amount ?? 1));
        d.obj.quaternion.slerp(_tq, 1 - Math.exp(-dt * d.k));
      }
    }
  }
}

const D = Math.PI / 180;
let _hm = null;
function HUMAN_MAT() { if (!_hm) _hm = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.72, metalness: 0, side: THREE.DoubleSide }); return _hm; }
const _q = new THREE.Quaternion(), _m = new THREE.Matrix4(), _g = new THREE.Vector3(), _tq = new THREE.Quaternion(), _id = new THREE.Quaternion();
const _down = new THREE.Vector3(0, -1, 0);
export const G_WORLD = new THREE.Vector3(1, 0, 0);

// ---------------- poses (degrees). x = flex (forward +), z = sideways, y = twist
export const POSE = {
  stand: { shoulderL: [5, 0, 8], shoulderR: [5, 0, -8], elbowL: [-10], elbowR: [-10], hipL: [2], hipR: [2], kneeL: [-3], kneeR: [-3] },
  holdBox: { shoulderL: [-40, 0, 14], shoulderR: [-40, 0, -14], elbowL: [-80, 0, -20], elbowR: [-80, 0, 20] },
  hang: { shoulderL: [-170, 0, 12], elbowL: [-8], shoulderR: [-45, 0, -10], elbowR: [-85, 0, 25], hipL: [-12], hipR: [8], kneeL: [-25], kneeR: [-40], spine: [-4], head: [8] },
  fall: { shoulderL: [-60, 0, 60], shoulderR: [-40, 0, -14], elbowL: [-30], elbowR: [-80, 0, 20], hipL: [-25], hipR: [15], kneeL: [-45], kneeR: [-20], spine: [8], head: [-10] },
  wave: { shoulderR: [-150, 0, -30], elbowR: [-40] },
  reach: { shoulderL: [-85, 0, 8], shoulderR: [-85, 0, -8], elbowL: [-10], elbowR: [-10] },
  hug: { shoulderL: [-50, 0, 20], shoulderR: [-50, 0, -20], elbowL: [-95, 0, -25], elbowR: [-95, 0, 25], head: [10] },
  leanOut: { spine: [40], chest: [20], neck: [-20], head: [-15], shoulderL: [-100, 0, 10], shoulderR: [-100, 0, -10], elbowL: [-15], elbowR: [-15] },
  crouch: { hipL: [-60], hipR: [-60], kneeL: [-95], kneeR: [-95], ankleL: [35], ankleR: [35], spine: [25] },
  jumpUp: { hipL: [10], hipR: [10], kneeL: [-10], kneeR: [-10], shoulderL: [-30, 0, 20], shoulderR: [-30, 0, -20] },
  swim: { shoulderL: [-120, 0, 40], shoulderR: [-60, 0, -40], hipL: [-20], hipR: [10], kneeL: [-30], kneeR: [-10], spine: [20] },
  sitHold: { hipL: [-80], hipR: [-80], kneeL: [-85], kneeR: [-85], shoulderL: [-150, 0, 10], shoulderR: [-150, 0, -10], elbowL: [-20], elbowR: [-20] },
  cheer: { shoulderL: [-160, 0, 25], shoulderR: [-160, 0, -25], elbowL: [-20], elbowR: [-20], head: [-10] },
};

// procedural run cycle (phase in radians)
export function runPose(ph, amt = 1) {
  const s = Math.sin(ph), c = Math.cos(ph);
  return {
    hipL: [-35 * s * amt - 8], hipR: [35 * s * amt - 8],
    kneeL: [(-45 - 40 * Math.max(0, -c)) * amt], kneeR: [(-45 - 40 * Math.max(0, c)) * amt],
    ankleL: [10 * s * amt], ankleR: [-10 * s * amt],
    spine: [10 * amt, 6 * s * amt], head: [-6 * amt],
  };
}
export function climbPose(ph) {
  const s = Math.sin(ph);
  return {
    shoulderL: [-150 + 25 * s, 0, 12], shoulderR: [-150 - 25 * s, 0, -12], elbowL: [-30 - 20 * s], elbowR: [-30 + 20 * s],
    hipL: [-40 - 25 * s], hipR: [-40 + 25 * s], kneeL: [-60 - 20 * s], kneeR: [-60 + 20 * s],
  };
}
