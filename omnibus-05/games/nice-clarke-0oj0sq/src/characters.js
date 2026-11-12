// Mom, Dad and the clerk: soft vinyl-toy figures with posable arms and painted faces.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/BufferGeometryUtils.js';
import { patchStoreMaterial } from './lighting.js';
import { makeCanvas, canvasTex } from './textures.js';
import { clamp, damp, lerp } from './util.js';

const POSES = {
  idle: { lean: 0, twist: 0, hp: 0.05, hy: 0, L: [0.08, 0.14, 0.25], R: [0.08, -0.14, 0.25] },
  reach: { lean: 0.32, twist: -0.15, hp: 0.3, hy: 0, L: [0.15, 0.2, 0.35], R: [1.35, -0.05, 0.15] },
  reachLow: { lean: 0.55, twist: -0.1, hp: 0.45, hy: 0, L: [0.2, 0.2, 0.4], R: [1.15, -0.1, 0.1] },
  hold: { lean: 0.05, twist: 0, hp: 0.1, hy: 0, L: [0.1, 0.18, 0.4], R: [0.9, -0.2, 0.9] },
  wave: { lean: 0, twist: 0.05, hp: 0, hy: 0, L: [0.1, 0.15, 0.3], R: [0.25, -2.55, 0.35] },
  clap: { lean: 0.08, twist: 0, hp: 0.05, hy: 0, L: [1.05, -0.5, 1.15], R: [1.05, 0.5, 1.15] },
  cheer: { lean: -0.08, twist: 0, hp: -0.25, hy: 0, L: [0.3, 2.6, 0.2], R: [0.3, -2.6, 0.2] },
  push: { lean: 0.22, twist: 0, hp: 0.12, hy: 0, L: [1.05, 0.08, 0.55], R: [1.05, -0.08, 0.55] },
  lift: { lean: -0.12, twist: 0, hp: 0.2, hy: 0, L: [1.0, 0.3, 1.05], R: [1.0, -0.3, 1.05] },
  liftHigh: { lean: 0.25, twist: 0, hp: 0.4, hy: 0, L: [1.45, 0.25, 0.55], R: [1.45, -0.25, 0.55] },
  lookUp: { lean: -0.1, twist: 0, hp: -0.7, hy: 0, L: [0.1, 0.25, 0.3], R: [0.1, -0.25, 0.3] },
  peek: { lean: 0.42, twist: 0, hp: 0.65, hy: 0, L: [0.5, 0.3, 1.2], R: [0.5, -0.3, 1.2] },
  thumbs: { lean: 0.05, twist: 0, hp: 0.15, hy: 0, L: [0.1, 0.14, 0.3], R: [1.0, -0.4, 1.4] },
  cheeks: { lean: 0.05, twist: 0, hp: 0.05, hy: 0, L: [0.6, -0.55, 2.4], R: [0.6, 0.55, 2.4] },
};

export class Character {
  constructor(lights, o) {
    this.o = o;
    this.lights = lights;
    const H = o.height;
    const s = H / 1.7;
    this.s = s;
    this.root = new THREE.Group();
    this.root.name = o.name;
    const m = (color, extra = {}) => {
      const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.62, ...extra });
      patchStoreMaterial(mat, lights);
      return mat;
    };
    const mSkin = m(o.skin, { roughness: 0.55 });
    const mTop = m(o.top, { roughness: 0.85 });
    const mPants = m(o.pants, { roughness: 0.8 });
    const mShoes = m(o.shoes, { roughness: 0.5 });
    const mHair = m(o.hair, { roughness: 0.7 });
    const add = (parent, geo, mat, x = 0, y = 0, z = 0) => {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      parent.add(mesh);
      return mesh;
    };

    // legs
    const hipY = 0.86 * s;
    this.hips = new THREE.Group();
    this.hips.position.y = hipY;
    this.root.add(this.hips);
    this.legs = [];
    for (const side of [-1, 1]) {
      const leg = new THREE.Group();
      leg.position.set(side * 0.09 * s, 0, 0);
      this.hips.add(leg);
      add(leg, new THREE.CapsuleGeometry(0.07 * s, hipY - 0.14 * s, 4, 12), mPants, 0, -hipY / 2 + 0.02, 0);
      const shoe = add(leg, new RoundedBoxGeometry(0.12 * s, 0.08 * s, 0.24 * s, 2, 0.035 * s), mShoes, 0, -hipY + 0.04 * s, 0.04 * s);
      shoe.castShadow = true;
      this.legs.push(leg);
    }
    // torso
    this.torso = new THREE.Group();
    this.hips.add(this.torso);
    const prof = [
      [0.0, 0.0],
      [0.17, 0.0],
      [0.19, 0.08],
      [0.18, 0.3],
      [0.2, 0.46],
      [0.19, 0.55],
      [0.13, 0.6],
      [0.06, 0.62],
      [0.0, 0.62],
    ].map(([r, y]) => new THREE.Vector2(r * s, y * s));
    const body = add(this.torso, new THREE.LatheGeometry(prof, 24), mTop, 0, -0.04 * s, 0);
    body.scale.set(1, 1, 0.72);
    if (o.apron) {
      const ap = add(this.torso, new RoundedBoxGeometry(0.3 * s, 0.62 * s, 0.03 * s, 2, 0.01 * s), m(o.apron, { roughness: 0.85 }), 0, 0.22 * s, 0.13 * s);
      ap.rotation.x = -0.06;
    }
    if (o.scarf) {
      const sc = add(this.torso, new THREE.TorusGeometry(0.11 * s, 0.045 * s, 10, 20), m(o.scarf, { roughness: 0.9 }), 0, 0.56 * s, 0);
      sc.rotation.x = Math.PI / 2;
      sc.scale.set(1, 0.8, 1);
      add(this.torso, new RoundedBoxGeometry(0.08 * s, 0.2 * s, 0.04 * s, 2, 0.015 * s), m(o.scarf, { roughness: 0.9 }), 0.05 * s, 0.44 * s, 0.11 * s).rotation.z = 0.15;
    }
    if (o.zip) add(this.torso, new THREE.BoxGeometry(0.012 * s, 0.5 * s, 0.01 * s), m('#c9ccd2', { metalness: 0.8, roughness: 0.3 }), 0, 0.3 * s, 0.135 * s);
    // knitted hem / jacket waistband
    const hem = add(this.torso, new THREE.TorusGeometry(0.175 * s, 0.028 * s, 8, 28), m(o.cuff || o.top, { roughness: 0.95 }), 0, 0.0, 0);
    hem.rotation.x = Math.PI / 2;
    hem.scale.set(1, 0.74, 1);
    if (o.hood) {
      const hood = add(this.torso, new THREE.TorusGeometry(0.11 * s, 0.045 * s, 10, 20, Math.PI), m(o.cuff || o.top, { roughness: 0.9 }), 0, 0.56 * s, -0.06 * s);
      hood.rotation.x = -Math.PI / 2 - 0.25;
      for (const side of [-1, 1]) add(this.torso, new RoundedBoxGeometry(0.1 * s, 0.07 * s, 0.03 * s, 2, 0.01 * s), m(o.cuff || o.top, { roughness: 0.9 }), side * 0.1 * s, 0.12 * s, 0.13 * s);
    }
    if (o.bag) {
      // a crossbody strap and a little round bag
      // a sash from one shoulder to the opposite hip, hugging the sweater
      const strap = add(this.torso, new THREE.TorusGeometry(0.235 * s, 0.01 * s, 6, 48), m('#6b3a24', { roughness: 0.6 }), 0, 0.3 * s, 0.0);
      strap.rotation.order = 'ZYX';
      strap.rotation.set(0, Math.PI / 2, 0.62);
      strap.scale.set(0.66, 1.2, 1);
      add(this.torso, new THREE.CylinderGeometry(0.075 * s, 0.075 * s, 0.05 * s, 20), m(o.bag, { roughness: 0.5 }), 0.17 * s, 0.13 * s, 0.07 * s).rotation.x = Math.PI / 2;
    }
    // nametag on the clerk's apron
    if (o.apron) add(this.torso, new RoundedBoxGeometry(0.08 * s, 0.035 * s, 0.01 * s, 2, 0.004 * s), m('#ffffff'), -0.07 * s, 0.46 * s, 0.15 * s);

    // head
    this.neck = new THREE.Group();
    this.neck.position.y = 0.6 * s;
    this.torso.add(this.neck);
    add(this.neck, new THREE.CylinderGeometry(0.05 * s, 0.055 * s, 0.08 * s, 12), mSkin, 0, 0.03 * s, 0);
    this.head = new THREE.Group();
    this.head.position.y = 0.17 * s;
    this.neck.add(this.head);
    this.faceCanvas = makeCanvas(512, 256);
    this.faceTex = canvasTex(this.faceCanvas, { mips: true });
    const faceMat = new THREE.MeshStandardMaterial({ map: this.faceTex, roughness: 0.55 });
    patchStoreMaterial(faceMat, lights);
    const headGeo = new THREE.SphereGeometry(0.135 * s, 32, 24);
    const head = add(this.head, headGeo, faceMat);
    head.scale.set(0.95, 1.04, 0.98);
    // ears
    for (const side of [-1, 1]) add(this.head, new THREE.SphereGeometry(0.03 * s, 10, 8), mSkin, side * 0.128 * s, -0.005 * s, 0).scale.set(0.5, 1, 0.8);
    // nose
    add(this.head, new THREE.SphereGeometry(0.02 * s, 10, 8), mSkin, 0, -0.015 * s, 0.13 * s).scale.set(1, 0.9, 0.8);
    this.buildHair(o, mHair, s, add, m);
    this.expr = 'smile';
    this.blink = 0;
    this.blinkT = 2 + Math.random() * 3;
    this.drawFace();

    // arms
    this.arms = [];
    for (const side of [-1, 1]) {
      const sh = new THREE.Group();
      sh.position.set(side * 0.2 * s, 0.52 * s, 0);
      this.torso.add(sh);
      add(sh, new THREE.SphereGeometry(0.065 * s, 12, 10), mTop, 0, 0, 0);
      add(sh, new THREE.CapsuleGeometry(0.055 * s, 0.22 * s, 4, 10), mTop, 0, -0.14 * s, 0);
      const el = new THREE.Group();
      el.position.y = -0.29 * s;
      sh.add(el);
      add(el, new THREE.CapsuleGeometry(0.048 * s, 0.2 * s, 4, 10), mTop, 0, -0.12 * s, 0);
      // cuff
      add(el, new THREE.CylinderGeometry(0.052 * s, 0.052 * s, 0.03 * s, 12), m(o.cuff || o.top), 0, -0.235 * s, 0);
      const hand = new THREE.Group();
      hand.position.y = -0.29 * s;
      el.add(hand);
      add(hand, new THREE.SphereGeometry(0.055 * s, 14, 12), mSkin, 0, 0, 0).scale.set(0.82, 1.05, 0.62);
      add(hand, new THREE.CapsuleGeometry(0.018 * s, 0.035 * s, 4, 8), mSkin, side * -0.04 * s, 0.01 * s, 0.025 * s).rotation.z = side * 0.6;
      this.arms.push({ sh, el, hand, side });
    }
    this.hand = { L: this.arms[0].hand, R: this.arms[1].hand };

    // pose state
    this.cur = JSON.parse(JSON.stringify(POSES.idle));
    this.target = POSES.idle;
    this.poseName = 'idle';
    this.blendRate = 6;
    this.t = Math.random() * 10;
    this.lookTarget = null;
    this.lookYaw = 0;
    this.lookPitch = 0;
    this.walk = 0;
    this.walkPhase = 0;
    this.hop = 0;
    this.hopV = 0;
    this.waving = 0;
    this.clapping = 0;
    this.bob = 0;
    this.onClap = null;
    this._clapPrev = 0;
    this.bakeParts();
  }

  // Merge the plain-coloured pieces hanging off each joint into one vertex-coloured mesh:
  // a figure becomes ~10 draw calls instead of ~30.
  bakeParts() {
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7 });
    patchStoreMaterial(mat, this.lights);
    const visit = (node) => {
      const kids = node.children.slice();
      const plain = kids.filter((c) => c.isMesh && !c.material.map);
      if (plain.length > 1) {
        const geos = plain.map((m) => {
          m.updateMatrix();
          let g = m.geometry.clone();
          g = g.index ? g.toNonIndexed() : g;
          for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k);
          g.applyMatrix4(m.matrix);
          const c = m.material.color;
          const col = new Float32Array(g.attributes.position.count * 3);
          for (let i = 0; i < col.length; i += 3) {
            col[i] = c.r;
            col[i + 1] = c.g;
            col[i + 2] = c.b;
          }
          g.setAttribute('color', new THREE.BufferAttribute(col, 3));
          g.clearGroups();
          return g;
        });
        const merged = new THREE.Mesh(mergeGeometries(geos, false), mat);
        merged.castShadow = true;
        merged.receiveShadow = true;
        for (const m of plain) node.remove(m);
        node.add(merged);
      }
      for (const c of kids) if (!c.isMesh) visit(c);
    };
    visit(this.root);
  }

  buildHair(o, mHair, s, add, m) {
    const h = this.head;
    // hair that frames the face: a full cap over the crown, and a back/sides shell that leaves the face open
    const shell = (r, y, z, down = 0.62, sx = 1, sy = 1.02, sz = 1.04) => {
      const open = 1.0; // radians of face left uncovered on each side of the front
      const crown = add(h, new THREE.SphereGeometry(r, 24, 10, 0, Math.PI * 2, 0, Math.PI * 0.3), mHair, 0, y, z);
      crown.scale.set(sx, sy, sz);
      const back = add(h, new THREE.SphereGeometry(r, 24, 14, Math.PI / 2 + open, Math.PI * 2 - open * 2, 0, Math.PI * down), mHair, 0, y, z);
      back.scale.set(sx, sy, sz);
      back.material = mHair;
      return back;
    };
    if (o.hairStyle === 'bun') {
      shell(0.142 * s, 0.012 * s, -0.008 * s, 0.6);
      add(h, new THREE.SphereGeometry(0.065 * s, 14, 12), mHair, 0, 0.13 * s, -0.07 * s);
      // side locks
      for (const side of [-1, 1]) add(h, new THREE.CapsuleGeometry(0.03 * s, 0.1 * s, 4, 8), mHair, side * 0.12 * s, -0.02 * s, 0.01 * s).rotation.z = side * 0.15;
      // bangs
      // a soft side-swept fringe that stays above the brows
      const bang = add(h, new THREE.SphereGeometry(0.1 * s, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.3), mHair, 0.025 * s, 0.085 * s, 0.07 * s);
      bang.rotation.set(0.75, 0, -0.25);
      bang.scale.set(1.2, 0.45, 0.9);
    } else if (o.hairStyle === 'beanie') {
      shell(0.14 * s, 0.01 * s, 0, 0.6, 1, 1, 1.02);
      const hat = m(o.hat, { roughness: 0.95 });
      add(h, new THREE.SphereGeometry(0.147 * s, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.42), hat, 0, 0.03 * s, -0.005 * s);
      const brim = add(h, new THREE.TorusGeometry(0.135 * s, 0.022 * s, 8, 28), hat, 0, 0.07 * s, -0.005 * s);
      brim.rotation.x = Math.PI / 2;
      add(h, new THREE.SphereGeometry(0.04 * s, 12, 10), hat, 0, 0.18 * s, -0.01 * s);
      // beard shadow
      const beard = add(h, new THREE.SphereGeometry(0.128 * s, 20, 10, Math.PI * 0.15, Math.PI * 0.7, Math.PI * 0.68, Math.PI * 0.24), m('#5a4030', { roughness: 0.95 }), 0, -0.004 * s, 0.006 * s);
      beard.scale.set(1.03, 1.04, 1.05);
    } else if (o.hairStyle === 'cap') {
      shell(0.14 * s, 0.0, -0.006 * s, 0.58);
      const cm = m(o.hat, { roughness: 0.7 });
      add(h, new THREE.SphereGeometry(0.145 * s, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.38), cm, 0, 0.03 * s, 0);
      const bill = add(h, new THREE.CylinderGeometry(0.1 * s, 0.1 * s, 0.012 * s, 20, 1, false, -Math.PI / 2, Math.PI), cm, 0, 0.07 * s, 0.1 * s);
      bill.scale.set(1, 1, 0.8);
      bill.rotation.x = 0.12;
    }
  }

  drawFace() {
    const g = this.faceCanvas.getContext('2d');
    const o = this.o;
    g.fillStyle = o.skin;
    g.fillRect(0, 0, 512, 256);
    // the front of a three.js sphere sits at u = 0.25
    const cx = 128;
    const cy = 132;
    // cheeks
    g.fillStyle = 'rgba(240,120,110,0.35)';
    for (const sx of [-1, 1]) {
      g.beginPath();
      g.ellipse(cx + sx * 34, cy + 22, 14, 9, 0, 0, Math.PI * 2);
      g.fill();
    }
    // brows
    g.strokeStyle = o.brow || '#3a2a22';
    g.lineWidth = 4;
    g.lineCap = 'round';
    const browUp = this.expr === 'open' || this.expr === 'ooh' ? -6 : 0;
    for (const sx of [-1, 1]) {
      g.beginPath();
      g.moveTo(cx + sx * 14, cy - 22 + browUp);
      g.quadraticCurveTo(cx + sx * 24, cy - 27 + browUp, cx + sx * 32, cy - 22 + browUp);
      g.stroke();
    }
    // eyes
    for (const sx of [-1, 1]) {
      const ex = cx + sx * 22;
      const ey = cy - 4;
      if (this.blink > 0.5 || this.expr === 'happy') {
        g.strokeStyle = '#2a1e18';
        g.lineWidth = 4;
        g.beginPath();
        if (this.expr === 'happy') g.arc(ex, ey + 3, 7, Math.PI * 1.15, Math.PI * 1.85);
        else {
          g.moveTo(ex - 7, ey);
          g.lineTo(ex + 7, ey);
        }
        g.stroke();
      } else {
        g.fillStyle = '#2a1e18';
        g.beginPath();
        g.ellipse(ex, ey, 6.5, this.expr === 'open' || this.expr === 'ooh' ? 9.5 : 8, 0, 0, Math.PI * 2);
        g.fill();
        g.fillStyle = '#fff';
        g.beginPath();
        g.arc(ex + 2, ey - 3, 2.2, 0, Math.PI * 2);
        g.fill();
      }
    }
    // mouth
    g.strokeStyle = '#7a3a30';
    g.fillStyle = '#a8443a';
    g.lineWidth = 3.5;
    const my = cy + 26;
    g.beginPath();
    switch (this.expr) {
      case 'open':
        g.ellipse(cx, my + 2, 9, 11, 0, 0, Math.PI * 2);
        g.fill();
        break;
      case 'ooh':
        g.ellipse(cx, my, 5, 6, 0, 0, Math.PI * 2);
        g.fill();
        break;
      case 'grin':
      case 'happy':
        g.moveTo(cx - 14, my - 3);
        g.quadraticCurveTo(cx, my + 18, cx + 14, my - 3);
        g.closePath();
        g.fill();
        break;
      default:
        g.moveTo(cx - 10, my - 2);
        g.quadraticCurveTo(cx, my + 8, cx + 10, my - 2);
        g.stroke();
    }
    this.faceTex.needsUpdate = true;
  }

  face(expr) {
    if (this.expr === expr) return;
    this.expr = expr;
    this.drawFace();
  }

  pose(name, rate = 6) {
    this.target = POSES[name] || POSES.idle;
    this.poseName = name;
    this.blendRate = rate;
  }

  lookAt(v) {
    this.lookTarget = v ? v.clone() : null;
  }

  handWorld(side = 'R', out = new THREE.Vector3()) {
    return this.hand[side].getWorldPosition(out);
  }

  update(dt) {
    this.t += dt;
    const c = this.cur;
    const tg = this.target;
    const k = 1 - Math.exp(-this.blendRate * dt);
    for (const key of ['lean', 'twist', 'hp', 'hy']) c[key] = lerp(c[key], tg[key], k);
    for (const side of ['L', 'R']) for (let i = 0; i < 3; i++) c[side][i] = lerp(c[side][i], tg[side][i], k);

    // breathing, idle sway
    const br = Math.sin(this.t * 1.6) * 0.012;
    this.torso.rotation.x = c.lean + br;
    this.torso.rotation.y = c.twist + Math.sin(this.t * 0.5) * 0.03;
    // head look
    let yaw = c.hy;
    let pitch = c.hp;
    if (this.lookTarget) {
      const hp = this.head.getWorldPosition(new THREE.Vector3());
      const d = this.lookTarget.clone().sub(hp);
      const inv = new THREE.Quaternion();
      this.root.getWorldQuaternion(inv).invert();
      d.applyQuaternion(inv);
      const ly = Math.atan2(d.x, d.z);
      const lp = -Math.atan2(d.y, Math.hypot(d.x, d.z));
      yaw = clamp(ly - c.twist, -1.0, 1.0);
      pitch = clamp(lp - c.lean, -0.8, 0.9);
    }
    this.lookYaw = damp(this.lookYaw, yaw, 5, dt);
    this.lookPitch = damp(this.lookPitch, pitch, 5, dt);
    this.neck.rotation.y = this.lookYaw * 0.4;
    this.head.rotation.y = this.lookYaw * 0.6;
    this.head.rotation.x = this.lookPitch;
    this.head.rotation.z = Math.sin(this.t * 0.8) * 0.03;

    // arms
    const wave = this.poseName === 'wave' ? Math.sin(this.t * 9) * 0.35 : 0;
    const clapOsc = this.poseName === 'clap' ? Math.sin(this.t * 14) : 0;
    if (this.poseName === 'clap') {
      if (clapOsc > 0.9 && this._clapPrev <= 0.9 && this.onClap) this.onClap(this);
      this._clapPrev = clapOsc;
    }
    const cheer = this.poseName === 'cheer' ? Math.sin(this.t * 10) * 0.2 : 0;
    for (const a of this.arms) {
      const v = a.side < 0 ? c.L : c.R;
      // POSES store "outward" as positive for the left arm and negative for the right
      a.sh.rotation.set(-v[0], 0, -v[1] + (a.side > 0 ? wave * 0.3 : 0) + a.side * cheer * 0.5 + a.side * clapOsc * 0.12);
      a.el.rotation.set(-v[2] + (a.side > 0 ? wave : 0), 0, 0);
    }
    // walking
    if (this.walk > 0.01) {
      this.walkPhase += dt * 7 * this.walk;
      const sw = Math.sin(this.walkPhase) * 0.45 * this.walk;
      this.legs[0].rotation.x = sw;
      this.legs[1].rotation.x = -sw;
      this.bob = Math.abs(Math.cos(this.walkPhase)) * 0.025 * this.walk;
    } else {
      this.legs[0].rotation.x = damp(this.legs[0].rotation.x, 0, 8, dt);
      this.legs[1].rotation.x = damp(this.legs[1].rotation.x, 0, 8, dt);
      this.bob = damp(this.bob, 0, 8, dt);
    }
    // little hops of joy
    if (this.hop > 0 || this.hopV !== 0) {
      this.hopV -= 9.8 * dt;
      this.hop += this.hopV * dt;
      if (this.hop <= 0) {
        this.hop = 0;
        this.hopV = 0;
      }
    }
    this.hips.position.y = 0.86 * this.s + this.bob + this.hop + br * 0.3;
    // blink
    this.blinkT -= dt;
    if (this.blinkT <= 0) {
      this.blink = 1;
      this.drawFace();
      this.blinkT = 2.5 + Math.random() * 3.5;
    } else if (this.blink > 0) {
      this.blink -= dt * 8;
      if (this.blink <= 0.5 && this.blink + dt * 8 > 0.5) this.drawFace();
    }
  }

  jump(v = 1.6) {
    if (this.hop <= 0.001) this.hopV = v;
  }
}

export function makeFamily(lights) {
  const mom = new Character(lights, {
    name: 'mom',
    height: 1.62,
    skin: '#f2c9a8',
    hair: '#4a2c20',
    hairStyle: 'bun',
    top: '#d9a43a',
    cuff: '#c48f2a',
    scarf: '#2f8a86',
    bag: '#c8693e',
    pants: '#2e3a5a',
    shoes: '#6b3a24',
    brow: '#3a2218',
  });
  const dad = new Character(lights, {
    name: 'dad',
    height: 1.8,
    skin: '#e8b892',
    hair: '#2a2420',
    hairStyle: 'beanie',
    hat: '#e2763a',
    top: '#2c4a6e',
    cuff: '#22405e',
    zip: true,
    hood: true,
    pants: '#3e5a86',
    shoes: '#3a3a3a',
    brow: '#2a2018',
  });
  const clerk = new Character(lights, {
    name: 'clerk',
    height: 1.7,
    skin: '#f0c4a0',
    hair: '#3a2a22',
    hairStyle: 'cap',
    hat: '#2f7a5a',
    top: '#f4efe2',
    cuff: '#2f7a5a',
    apron: '#2f7a5a',
    pants: '#3a3a40',
    shoes: '#2a2a2a',
  });
  return { mom, dad, clerk };
}

// A shopping cart, built from steel wire-ish bars, with a pile you can topple.
export function makeCart(lights) {
  const g = new THREE.Group();
  const steel = new THREE.MeshStandardMaterial({ color: '#c8ccd2', roughness: 0.3, metalness: 0.9 });
  patchStoreMaterial(steel, lights);
  const red = new THREE.MeshStandardMaterial({ color: '#d9573e', roughness: 0.5 });
  patchStoreMaterial(red, lights);
  const dark = new THREE.MeshStandardMaterial({ color: '#222', roughness: 0.6 });
  patchStoreMaterial(dark, lights);
  const bar = (len, r = 0.008) => new THREE.CylinderGeometry(r, r, len, 6);
  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, rz);
    m.castShadow = true;
    g.add(m);
    return m;
  };
  const W = 0.52;
  const L = 0.85;
  const y0 = 0.42;
  const y1 = 0.95;
  // basket wires: vertical
  for (let i = 0; i <= 10; i++) {
    const x = -L / 2 + (i / 10) * L;
    add(bar(y1 - y0), steel, x, (y0 + y1) / 2, W / 2);
    add(bar(y1 - y0), steel, x, (y0 + y1) / 2, -W / 2);
  }
  for (let i = 0; i <= 6; i++) {
    const z = -W / 2 + (i / 6) * W;
    add(bar(y1 - y0), steel, L / 2, (y0 + y1) / 2, z);
    add(bar(y1 - y0), steel, -L / 2, (y0 + y1) / 2, z);
  }
  // horizontal rims
  for (const y of [y0, (y0 + y1) / 2, y1]) {
    add(bar(L, 0.01), steel, 0, y, W / 2, 0, 0, Math.PI / 2);
    add(bar(L, 0.01), steel, 0, y, -W / 2, 0, 0, Math.PI / 2);
    add(bar(W, 0.01), steel, L / 2, y, 0, Math.PI / 2, 0, 0);
    add(bar(W, 0.01), steel, -L / 2, y, 0, Math.PI / 2, 0, 0);
  }
  // floor of the basket
  const floor = new THREE.Mesh(new THREE.BoxGeometry(L, 0.01, W), steel);
  floor.position.y = y0;
  g.add(floor);
  // handle with a red grip
  add(new THREE.CylinderGeometry(0.02, 0.02, W + 0.06, 12), red, -L / 2 - 0.12, y1 + 0.06, 0, Math.PI / 2, 0, 0);
  for (const z of [-W / 2, W / 2]) add(bar(0.2, 0.01), steel, -L / 2 - 0.06, y1 + 0.03, z, 0, 0, 1.0);
  // chassis and wheels
  for (const z of [-W / 2 + 0.04, W / 2 - 0.04]) add(bar(L, 0.012), steel, 0, 0.12, z, 0, 0, Math.PI / 2);
  for (const x of [-L / 2 + 0.06, L / 2 - 0.06]) add(bar(y0 - 0.1, 0.012), steel, x, (y0 + 0.1) / 2 + 0.03, 0);
  g.userData.wheels = [];
  for (const x of [-L / 2 + 0.06, L / 2 - 0.06]) {
    for (const z of [-W / 2 + 0.04, W / 2 - 0.04]) {
      const w = add(new THREE.CylinderGeometry(0.05, 0.05, 0.03, 14), dark, x, 0.05, z, Math.PI / 2, 0, 0);
      g.userData.wheels.push(w);
    }
  }
  g.userData.size = { L, W, y0, y1 };
  return g;
}

export { POSES };
