/**
 * diver.js — ダイバーの見た目。
 *
 *  - 通常時: 簡易ボーン階層を「姿勢テーブル」で補間して動かす(抱え型/えび型/伸型…)。
 *  - 失敗時: 同じ関節位置から Verlet ラグドールに切り替え、水面と暴れて笑いを取る。
 *
 * 物理(速度・角運動量)は player.js が持ち、ここは純粋に表現層。
 */

import * as THREE from 'three';

const P = (x, y, z) => [x, y, z];

/** 姿勢テーブル。値は各関節のオイラー角(rad)。+X は「後ろ向きに曲がる」。 */
export const POSES = {
  stand: {
    chest: P(0.02, 0, 0), head: P(0, 0, 0),
    upperArmL: P(0.05, 0, 0.14), upperArmR: P(0.05, 0, -0.14),
    lowerArmL: P(0.1, 0, 0), lowerArmR: P(0.1, 0, 0),
    thighL: P(0, 0, 0.04), thighR: P(0, 0, -0.04),
    shinL: P(0.06, 0, 0), shinR: P(0.06, 0, 0),
    footL: P(-0.2, 0, 0), footR: P(-0.2, 0, 0),
  },
  crouch: {
    chest: P(-0.42, 0, 0), head: P(0.3, 0, 0),
    upperArmL: P(1.2, 0, 0.3), upperArmR: P(1.2, 0, -0.3),
    lowerArmL: P(-0.5, 0, 0), lowerArmR: P(-0.5, 0, 0),
    thighL: P(-1.0, 0, 0.1), thighR: P(-1.0, 0, -0.1),
    shinL: P(1.7, 0, 0), shinR: P(1.7, 0, 0),
    footL: P(-0.75, 0, 0), footR: P(-0.75, 0, 0),
  },
  launch: {
    chest: P(-0.12, 0, 0), head: P(-0.15, 0, 0),
    upperArmL: P(-2.7, 0, 0.25), upperArmR: P(-2.7, 0, -0.25),
    lowerArmL: P(-0.15, 0, 0), lowerArmR: P(-0.15, 0, 0),
    thighL: P(0.15, 0, 0.05), thighR: P(0.15, 0, -0.05),
    shinL: P(0.1, 0, 0), shinR: P(0.1, 0, 0),
    footL: P(-0.5, 0, 0), footR: P(-0.5, 0, 0),
  },
  tuck: {
    chest: P(-0.55, 0, 0), head: P(-0.3, 0, 0),
    upperArmL: P(-1.5, 0, 0.5), upperArmR: P(-1.5, 0, -0.5),
    lowerArmL: P(-1.5, 0, 0), lowerArmR: P(-1.5, 0, 0),
    thighL: P(-2.15, 0, 0.28), thighR: P(-2.15, 0, -0.28),
    shinL: P(2.5, 0, 0), shinR: P(2.5, 0, 0),
    footL: P(-0.5, 0, 0), footR: P(-0.5, 0, 0),
  },
  pike: {
    chest: P(-0.75, 0, 0), head: P(-0.2, 0, 0),
    upperArmL: P(-2.35, 0, 0.16), upperArmR: P(-2.35, 0, -0.16),
    lowerArmL: P(-0.1, 0, 0), lowerArmR: P(-0.1, 0, 0),
    thighL: P(-1.65, 0, 0.06), thighR: P(-1.65, 0, -0.06),
    shinL: P(0.12, 0, 0), shinR: P(0.12, 0, 0),
    footL: P(-0.95, 0, 0), footR: P(-0.95, 0, 0),
  },
  layout: {
    chest: P(0.06, 0, 0), head: P(-0.05, 0, 0),
    upperArmL: P(-1.62, 0, 0.9), upperArmR: P(-1.62, 0, -0.9),
    lowerArmL: P(-0.05, 0, 0), lowerArmR: P(-0.05, 0, 0),
    thighL: P(0.05, 0, 0.03), thighR: P(0.05, 0, -0.03),
    shinL: P(0.03, 0, 0), shinR: P(0.03, 0, 0),
    footL: P(-1.0, 0, 0), footR: P(-1.0, 0, 0),
  },
  entry: {
    chest: P(0.02, 0, 0), head: P(0.02, 0, 0),
    upperArmL: P(-3.02, 0, 0.11), upperArmR: P(-3.02, 0, -0.11),
    lowerArmL: P(-0.06, 0, 0), lowerArmR: P(-0.06, 0, 0),
    thighL: P(0.01, 0, 0.015), thighR: P(0.01, 0, -0.015),
    shinL: P(0.0, 0, 0), shinR: P(0.0, 0, 0),
    footL: P(-1.25, 0, 0), footR: P(-1.25, 0, 0),
  },
  flare: {
    chest: P(0.1, 0, 0), head: P(-0.2, 0, 0),
    upperArmL: P(-1.55, 0, 1.45), upperArmR: P(-1.55, 0, -1.45),
    lowerArmL: P(-0.2, 0, 0), lowerArmR: P(-0.2, 0, 0),
    thighL: P(-0.15, 0, 0.3), thighR: P(-0.15, 0, -0.3),
    shinL: P(0.2, 0, 0), shinR: P(0.2, 0, 0),
    footL: P(-0.6, 0, 0), footR: P(-0.6, 0, 0),
  },
  cheer: {
    chest: P(-0.1, 0, 0), head: P(-0.25, 0, 0),
    upperArmL: P(-2.9, 0, 0.55), upperArmR: P(-2.9, 0, -0.55),
    lowerArmL: P(-0.35, 0, 0), lowerArmR: P(-0.35, 0, 0),
    thighL: P(-0.1, 0, 0.12), thighR: P(-0.1, 0, -0.12),
    shinL: P(0.15, 0, 0), shinR: P(0.15, 0, 0),
    footL: P(-0.4, 0, 0), footR: P(-0.4, 0, 0),
  },
};

const BUILDS = {
  normal: { torso: 1.0, limb: 1.0, width: 1.0, head: 1.0 },
  slim:   { torso: 0.94, limb: 1.04, width: 0.86, head: 0.96 },
  bulk:   { torso: 1.06, limb: 0.98, width: 1.34, head: 1.02 },
  round:  { torso: 0.9,  limb: 0.82, width: 1.42, head: 1.14 },
};

function capsule(len, rad, mat) {
  const g = new THREE.CapsuleGeometry(rad, Math.max(0.01, len - rad * 2), 4, 10);
  const m = new THREE.Mesh(g, mat);
  m.castShadow = true;
  return m;
}

export class Diver {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();     // 重心。ここを player.js が動かす
    this.rig = new THREE.Group();      // ボーン階層のルート
    this.root.add(this.rig);
    scene.add(this.root);

    this.joints = {};
    this.mats = {};
    this.ragdoll = null;
    this.ragdollGroup = null;
    this.isRagdoll = false;
    this._pose = {};
    this._target = {};
    this.build = BUILDS.normal;
    this.char = null;

    this._buildRig();
    this.applyPose('stand', 1);
  }

  _buildRig() {
    const skin = new THREE.MeshLambertMaterial({ color: 0xf3c9a0 });
    const suit = new THREE.MeshLambertMaterial({ color: 0x2f6fd0 });
    const hair = new THREE.MeshLambertMaterial({ color: 0x3a2a1c });
    this.mats = { skin, suit, hair };

    const J = (name, parent, pos) => {
      const g = new THREE.Group();
      g.position.set(pos[0], pos[1], pos[2]);
      parent.add(g);
      this.joints[name] = g;
      this._pose[name] = [0, 0, 0];
      this._target[name] = [0, 0, 0];
      return g;
    };

    // 骨盤(rig 原点) → 胴 → 頭 / 腕 / 脚
    const hips = new THREE.Group();
    this.rig.add(hips);
    this.hips = hips;
    const hipMesh = capsule(0.26, 0.155, suit);
    hipMesh.position.y = 0.02;
    hips.add(hipMesh);

    const chest = J('chest', hips, [0, 0.16, 0]);
    const chestMesh = capsule(0.5, 0.165, skin);
    chestMesh.position.y = 0.24;
    chest.add(chestMesh);
    this.chestMesh = chestMesh;
    // 胸のふくらみ(ガタイ表現用の板)
    const pecs = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.2, 0.14), skin);
    pecs.position.set(0, 0.36, 0.06);
    chest.add(pecs);
    this.pecs = pecs;

    const head = J('head', chest, [0, 0.52, 0]);
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.135, 14, 12), skin);
    skull.position.y = 0.13;
    skull.castShadow = true;
    head.add(skull);
    this.skull = skull;
    const hairMesh = new THREE.Mesh(new THREE.SphereGeometry(0.142, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), hair);
    hairMesh.position.y = 0.14;
    head.add(hairMesh);
    this.hairMesh = hairMesh;
    // 目(前方 +Z)
    const eyeG = new THREE.SphereGeometry(0.026, 8, 6);
    const eyeM = new THREE.MeshBasicMaterial({ color: 0x1a1a22 });
    for (const s of [-1, 1]) {
      const e = new THREE.Mesh(eyeG, eyeM);
      e.position.set(0.05 * s, 0.145, 0.118);
      head.add(e);
    }

    for (const s of [['L', 1], ['R', -1]]) {
      const [side, sign] = s;
      const ua = J('upperArm' + side, chest, [0.19 * sign, 0.44, 0]);
      const uam = capsule(0.3, 0.058, skin); uam.position.y = -0.15; ua.add(uam);
      const la = J('lowerArm' + side, ua, [0, -0.3, 0]);
      const lam = capsule(0.29, 0.05, skin); lam.position.y = -0.145; la.add(lam);
      const hand = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.11, 0.05), skin);
      hand.position.y = -0.325; la.add(hand);

      const th = J('thigh' + side, hips, [0.095 * sign, -0.04, 0]);
      const thm = capsule(0.44, 0.078, suit); thm.position.y = -0.22; th.add(thm);
      const sh = J('shin' + side, th, [0, -0.44, 0]);
      const shm = capsule(0.42, 0.062, skin); shm.position.y = -0.21; sh.add(shm);
      const ft = J('foot' + side, sh, [0, -0.42, 0]);
      const ftm = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.05, 0.19), skin);
      ftm.position.set(0, -0.025, 0.055); ft.add(ftm);
    }
  }

  setCharacter(c) {
    this.char = c;
    this.mats.skin.color.setHex(c.skin);
    this.mats.suit.color.setHex(c.suit);
    this.mats.hair.color.setHex(c.hair);
    const b = BUILDS[c.build] || BUILDS.normal;
    this.build = b;
    this.chestMesh.scale.set(b.width, b.torso, b.width * 0.92);
    this.pecs.scale.set(b.width, 1, b.width);
    this.pecs.visible = b.width > 1.1;
    this.skull.scale.setScalar(b.head);
    this.hairMesh.scale.setScalar(b.head);
    this.hips.scale.set(b.width * 0.96, 1, b.width * 0.96);
  }

  /** 目標姿勢を設定(即時 or 補間) */
  applyPose(name, immediate = 0) {
    const pose = POSES[name] || POSES.stand;
    for (const k of Object.keys(this._target)) {
      const v = pose[k] || [0, 0, 0];
      this._target[k] = v;
      if (immediate) { this._pose[k] = v.slice(); this._write(k); }
    }
  }

  /** 2つの姿勢のブレンドを目標にする(TUCK→LAYOUT の途中など) */
  blendPose(a, b, t) {
    const pa = POSES[a], pb = POSES[b];
    for (const k of Object.keys(this._target)) {
      const va = pa[k] || [0, 0, 0], vb = pb[k] || [0, 0, 0];
      this._target[k] = [
        va[0] + (vb[0] - va[0]) * t,
        va[1] + (vb[1] - va[1]) * t,
        va[2] + (vb[2] - va[2]) * t,
      ];
    }
  }

  _write(k) {
    const j = this.joints[k];
    if (j) j.rotation.set(this._pose[k][0], this._pose[k][1], this._pose[k][2]);
  }

  /** 姿勢の補間を進める。rate が大きいほどキビキビ動く。 */
  update(dt, rate = 14) {
    if (this.isRagdoll) return;
    const a = 1 - Math.exp(-rate * dt);
    for (const k of Object.keys(this._pose)) {
      const c = this._pose[k], t = this._target[k];
      c[0] += (t[0] - c[0]) * a;
      c[1] += (t[1] - c[1]) * a;
      c[2] += (t[2] - c[2]) * a;
      this._write(k);
    }
  }

  // ---------------------------------------------------------------
  //  ラグドール
  // ---------------------------------------------------------------

  /** 現在のリグ姿勢からラグドールを生成し、速度を引き継いで暴れさせる。 */
  startRagdoll(linVel, angVel) {
    if (this.isRagdoll) return;
    this.root.updateMatrixWorld(true);

    const pick = [
      ['head', this.joints.head, new THREE.Vector3(0, 0.14, 0)],
      ['neck', this.joints.chest, new THREE.Vector3(0, 0.5, 0)],
      ['chest', this.joints.chest, new THREE.Vector3(0, 0.26, 0)],
      ['hips', this.hips, new THREE.Vector3(0, 0, 0)],
      ['shoulderL', this.joints.upperArmL, new THREE.Vector3(0, 0, 0)],
      ['elbowL', this.joints.lowerArmL, new THREE.Vector3(0, 0, 0)],
      ['handL', this.joints.lowerArmL, new THREE.Vector3(0, -0.31, 0)],
      ['shoulderR', this.joints.upperArmR, new THREE.Vector3(0, 0, 0)],
      ['elbowR', this.joints.lowerArmR, new THREE.Vector3(0, 0, 0)],
      ['handR', this.joints.lowerArmR, new THREE.Vector3(0, -0.31, 0)],
      ['kneeL', this.joints.shinL, new THREE.Vector3(0, 0, 0)],
      ['footL', this.joints.footL, new THREE.Vector3(0, 0, 0)],
      ['kneeR', this.joints.shinR, new THREE.Vector3(0, 0, 0)],
      ['footR', this.joints.footR, new THREE.Vector3(0, 0, 0)],
    ];

    const parts = [];
    const index = {};
    const center = this.root.position.clone();
    pick.forEach(([name, obj, off], i) => {
      const p = off.clone().applyMatrix4(obj.matrixWorld);
      // 角速度による接線速度を初速に足す(そのまま吹っ飛ぶ)
      const r = p.clone().sub(center);
      const tangential = new THREE.Vector3(
        angVel.y * r.z - angVel.z * r.y,
        angVel.z * r.x - angVel.x * r.z,
        angVel.x * r.y - angVel.y * r.x,
      );
      const v = linVel.clone().add(tangential);
      parts.push({
        name, p, prev: p.clone().sub(v.clone().multiplyScalar(1 / 60)),
        mass: name === 'hips' || name === 'chest' ? 2.4 : name === 'head' ? 1.2 : 0.8,
      });
      index[name] = i;
    });

    const link = (a, b, stiff = 1) => {
      const i = index[a], j = index[b];
      return { i, j, rest: parts[i].p.distanceTo(parts[j].p), stiff };
    };
    const links = [
      link('head', 'neck'), link('neck', 'chest'), link('chest', 'hips'),
      link('head', 'chest', 0.6),
      link('neck', 'shoulderL'), link('neck', 'shoulderR'),
      link('shoulderL', 'shoulderR', 0.9),
      link('shoulderL', 'hips', 0.7), link('shoulderR', 'hips', 0.7),
      link('shoulderL', 'elbowL'), link('elbowL', 'handL'),
      link('shoulderR', 'elbowR'), link('elbowR', 'handR'),
      link('hips', 'kneeL'), link('kneeL', 'footL'),
      link('hips', 'kneeR'), link('kneeR', 'footR'),
      link('kneeL', 'kneeR', 0.25),
      link('chest', 'kneeL', 0.18), link('chest', 'kneeR', 0.18),
    ];

    this.ragdoll = { parts, links, index, spin: angVel.length() };
    this._buildRagdollMeshes();
    this.rig.visible = false;
    this.isRagdoll = true;
  }

  _buildRagdollMeshes() {
    const g = new THREE.Group();
    this.scene.add(g);
    this.ragdollGroup = g;
    const { index } = this.ragdoll;
    const seg = (a, b, rad, mat) => {
      const m = capsule(1, rad, mat);
      m.userData.pair = [index[a], index[b]];
      m.userData.rad = rad;
      g.add(m);
      return m;
    };
    const { skin, suit, hair } = this.mats;
    const w = this.build.width;
    this.ragSegs = [
      seg('neck', 'hips', 0.17 * w, skin),
      seg('shoulderL', 'elbowL', 0.058, skin),
      seg('elbowL', 'handL', 0.05, skin),
      seg('shoulderR', 'elbowR', 0.058, skin),
      seg('elbowR', 'handR', 0.05, skin),
      seg('hips', 'kneeL', 0.078, suit),
      seg('kneeL', 'footL', 0.062, skin),
      seg('hips', 'kneeR', 0.078, suit),
      seg('kneeR', 'footR', 0.062, skin),
    ];
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.135 * this.build.head, 14, 12), skin);
    skull.castShadow = true;
    g.add(skull);
    this.ragSkull = skull;
    const hm = new THREE.Mesh(new THREE.SphereGeometry(0.142 * this.build.head, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), hair);
    g.add(hm);
    this.ragHair = hm;
  }

  /** Verlet 積分 + 距離拘束 + 水中挙動。 */
  updateRagdoll(dt, waterLevel, gravity, onSplash) {
    if (!this.isRagdoll) return;
    const rd = this.ragdoll;
    const h = Math.min(dt, 1 / 50);
    for (const p of rd.parts) {
      const vx = (p.p.x - p.prev.x), vy = (p.p.y - p.prev.y), vz = (p.p.z - p.prev.z);
      let ax = 0, ay = gravity, az = 0;
      let damp = 0.995;
      if (p.p.y < waterLevel) {
        const depth = Math.min(2.5, waterLevel - p.p.y);
        ay = gravity + 34 * depth;          // 浮力
        damp = 0.86;                        // 水の抵抗
        if (!p.wet) { p.wet = true; if (onSplash) onSplash(p.p, Math.hypot(vx, vy, vz) / h); }
      }
      p.prev.copy(p.p);
      p.p.x += vx * damp + ax * h * h;
      p.p.y += vy * damp + ay * h * h;
      p.p.z += vz * damp + az * h * h;
    }
    // 距離拘束(数回反復して剛性を出す)
    for (let it = 0; it < 6; it++) {
      for (const l of rd.links) {
        const a = rd.parts[l.i], b = rd.parts[l.j];
        const dx = b.p.x - a.p.x, dy = b.p.y - a.p.y, dz = b.p.z - a.p.z;
        const d = Math.hypot(dx, dy, dz) || 1e-6;
        const diff = ((d - l.rest) / d) * 0.5 * l.stiff;
        const wa = b.mass / (a.mass + b.mass), wb = 1 - wa;
        a.p.x += dx * diff * 2 * wa; a.p.y += dy * diff * 2 * wa; a.p.z += dz * diff * 2 * wa;
        b.p.x -= dx * diff * 2 * wb; b.p.y -= dy * diff * 2 * wb; b.p.z -= dz * diff * 2 * wb;
      }
    }
    this._syncRagdollMeshes();
    // 重心を root にも反映(カメラ追従用)
    const hips = rd.parts[rd.index.hips].p;
    this.root.position.copy(hips);
  }

  _syncRagdollMeshes() {
    const parts = this.ragdoll.parts;
    const a = new THREE.Vector3(), b = new THREE.Vector3(), mid = new THREE.Vector3(), dir = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    const q = new THREE.Quaternion();
    for (const m of this.ragSegs) {
      const [i, j] = m.userData.pair;
      a.copy(parts[i].p); b.copy(parts[j].p);
      mid.addVectors(a, b).multiplyScalar(0.5);
      dir.subVectors(b, a);
      const len = dir.length() || 0.001;
      dir.divideScalar(len);
      m.position.copy(mid);
      // capsule() は全長 1 で生成しているので、Y スケール = 実際の長さ。
      q.setFromUnitVectors(up, dir);
      m.quaternion.copy(q);
      m.scale.set(1, len, 1);
    }
    const head = parts[this.ragdoll.index.head].p;
    const neck = parts[this.ragdoll.index.neck].p;
    this.ragSkull.position.copy(head);
    this.ragHair.position.copy(head);
    dir.subVectors(head, neck).normalize();
    q.setFromUnitVectors(up, dir);
    this.ragHair.quaternion.copy(q);
  }

  /** ラグドール解除 → 通常リグへ戻す */
  clearRagdoll() {
    if (this.ragdollGroup) {
      this.scene.remove(this.ragdollGroup);
      this.ragdollGroup.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
      this.ragdollGroup = null;
    }
    this.ragdoll = null;
    this.isRagdoll = false;
    this.rig.visible = true;
  }

  /** 頭の位置(入水判定に使う) */
  headWorld(out = new THREE.Vector3()) {
    this.root.updateMatrixWorld(true);
    return out.setFromMatrixPosition(this.joints.head.matrixWorld);
  }
}
