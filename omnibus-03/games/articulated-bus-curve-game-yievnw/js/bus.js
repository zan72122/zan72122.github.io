// 連節バス：見た目（前半車体・蛇腹・後半車体）と運動モデル
import * as THREE from '../vendor/three.module.min.js';
import { dirOf, leftOf, wrapAngle, clamp, roundedRectProfile, roundedBox } from './geom.js';
import { busBannerTexture, destinationTexture, rubberBumpTexture } from './textures.js';

// 寸法（m）: 実車の連節バス（全長 ≒ 18.4m）に近い比率
export const DIM = {
  W1: 5.5,     // 前半車体のホイールベース（前輪〜駆動軸）
  h: 1.8,      // 駆動軸〜連節ピン
  b: 0.9,      // 蛇腹の半分の長さ（前後の車体端面〜ピン）
  L2: 6.0,     // 連節ピン〜後半車体の車軸
  width: 2.5,
  floorY: 0.62,
  roofY: 3.25,
  frontOverhang: 2.6, // 前輪〜前バンパー
  rearOverhang: 2.7,  // 後車軸〜後バンパー
  wheelR: 0.52,
  steerMax: (42 * Math.PI) / 180,
  steerRate: 1.35,     // rad/s
  phiMax: (52 * Math.PI) / 180,
};

export class Bus {
  constructor(scene, env) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    // 状態
    this.x = 0; this.z = 0; this.th1 = 0; this.th2 = 0;
    this.delta = 0; this.v = 0; this.phi = 0; this.phiRate = 0;
    this.roll1 = 0; this.roll2 = 0; this.rollVel1 = 0; this.rollVel2 = 0;
    this.wheelSpin = 0;
    this.blinkTimer = 0; this.blinkOn = false; this.blinkSide = 0;
    this._buildMaterials(env);
    this._buildFront();
    this._buildRear();
    this._buildBellows();
  }

  _buildMaterials(env) {
    this.matPaint = new THREE.MeshPhysicalMaterial({
      color: 0xffb400, metalness: 0.25, roughness: 0.32, clearcoat: 1.0, clearcoatRoughness: 0.12, envMap: env, envMapIntensity: 0.9,
    });
    this.matStripe = new THREE.MeshPhysicalMaterial({
      color: 0x1f8a3a, metalness: 0.25, roughness: 0.32, clearcoat: 1.0, clearcoatRoughness: 0.12, envMap: env, envMapIntensity: 0.9,
    });
    this.matGlass = new THREE.MeshPhysicalMaterial({
      color: 0x142230, metalness: 0.6, roughness: 0.06, envMap: env, envMapIntensity: 1.4, clearcoat: 1, transparent: true, opacity: 0.94,
    });
    this.matRubber = new THREE.MeshStandardMaterial({
      color: 0x2c2c30, roughness: 0.58, metalness: 0.08, envMap: env, envMapIntensity: 0.6, side: THREE.DoubleSide,
      bumpMap: rubberBumpTexture(), bumpScale: 0.004,
    });
    this.matRubber.bumpMap.repeat.set(4, 2);
    this.matTire = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.92, metalness: 0.0 });
    this.matHub = new THREE.MeshStandardMaterial({ color: 0xb8bcc2, roughness: 0.35, metalness: 0.8, envMap: env });
    this.matDark = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.7, metalness: 0.2 });
    this.matGrey = new THREE.MeshStandardMaterial({ color: 0x9a9da3, roughness: 0.5, metalness: 0.5, envMap: env });
    this.matHead = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff6d0, emissiveIntensity: 1.2, roughness: 0.2 });
    this.matTail = new THREE.MeshStandardMaterial({ color: 0xff2020, emissive: 0xff1010, emissiveIntensity: 0.6, roughness: 0.3 });
    this.matBlinkL = new THREE.MeshStandardMaterial({ color: 0xffa020, emissive: 0xff8000, emissiveIntensity: 0.0, roughness: 0.3 });
    this.matBlinkR = new THREE.MeshStandardMaterial({ color: 0xffa020, emissive: 0xff8000, emissiveIntensity: 0.0, roughness: 0.3 });
  }

  // 車体ひとつ分の共通部品（窓・ドア・ルーフ機器・車輪）
  _bodyShell(len, zCenter, { front = false, rear = false, doorsZ = [] }) {
    const D = DIM;
    const g = new THREE.Group();
    const bodyH = D.roofY - D.floorY;
    const body = new THREE.Mesh(roundedBox(D.width, bodyH, len, 0.16), this.matPaint);
    body.position.set(0, D.floorY + bodyH / 2, zCenter);
    body.castShadow = true; body.receiveShadow = true;
    g.add(body);
    // 緑のストライプ（下部）
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(D.width + 0.02, 0.32, len - 0.4), this.matStripe);
    stripe.position.set(0, D.floorY + 0.55, zCenter);
    g.add(stripe);
    // 側面窓帯（左右）
    const winY = 1.62, winH = 1.28;
    for (const side of [-1, 1]) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.06, winH, len - 0.7), this.matGlass);
      win.position.set(side * (D.width / 2 - 0.01), winY + winH / 2, zCenter);
      g.add(win);
      // 窓の桟
      const nP = Math.max(2, Math.round((len - 0.7) / 1.5));
      for (let i = 1; i < nP; i++) {
        const p = new THREE.Mesh(new THREE.BoxGeometry(0.08, winH + 0.04, 0.07), this.matPaint);
        p.position.set(side * (D.width / 2 + 0.005), winY + winH / 2, zCenter - (len - 0.7) / 2 + ((len - 0.7) * i) / nP);
        g.add(p);
      }
      // ドア（枠だけ濃く）
      for (const dz of doorsZ) {
        const door = new THREE.Mesh(new THREE.BoxGeometry(0.05, D.roofY - D.floorY - 0.5, 1.3), this.matDark);
        door.position.set(side * (D.width / 2 + 0.01), D.floorY + (D.roofY - D.floorY - 0.5) / 2 + 0.1, dz);
        // ドアは左側だけ（日本の左側通行）
        if (side === 1) g.add(door);
        const dg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.5, 1.1), this.matGlass);
        dg.position.set(side * (D.width / 2 + 0.02), 1.75, dz);
        if (side === 1) g.add(dg);
      }
    }
    // ルーフの空調ユニット
    const ac = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.28, Math.min(2.4, len * 0.3)), this.matGrey);
    ac.position.set(0, D.roofY + 0.14, zCenter + (front ? -1.0 : 0.5));
    ac.castShadow = true;
    g.add(ac);
    // 側面バナー
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(1.76, 0.44), this.matBanner);
    for (const side of [-1, 1]) {
      const bm = banner.clone();
      bm.position.set(side * (D.width / 2 + 0.012), 1.38, zCenter + (front ? -0.8 : 0.4));
      bm.rotation.y = side > 0 ? Math.PI / 2 : -Math.PI / 2;
      g.add(bm);
    }
    if (front) {
      const zf = zCenter + len / 2;
      // フロントガラス（少し寝かせる）
      const ws = new THREE.Mesh(new THREE.BoxGeometry(D.width - 0.3, 1.75, 0.06), this.matGlass);
      ws.position.set(0, 2.15, zf + 0.01); ws.rotation.x = -0.09;
      g.add(ws);
      // 行き先表示
      const dest = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 0.42), this.matDest);
      dest.position.set(0, D.roofY - 0.32, zf + 0.04);
      g.add(dest);
      // バンパー・ライト
      const bumper = new THREE.Mesh(new THREE.BoxGeometry(D.width, 0.32, 0.24), this.matDark);
      bumper.position.set(0, D.floorY + 0.05, zf - 0.02); g.add(bumper);
      for (const side of [-1, 1]) {
        const hl = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.22, 0.08), this.matHead);
        hl.position.set(side * 0.9, 1.05, zf + 0.02); g.add(hl);
        const bl = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.14, 0.08), side < 0 ? this.matBlinkR : this.matBlinkL);
        bl.position.set(side * 1.14, 1.32, zf + 0.02); g.add(bl);
        // ミラー
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.55), this.matDark);
        arm.position.set(side * (D.width / 2 + 0.28), 2.25, zf - 0.1); g.add(arm);
        const mir = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.42, 0.1), this.matDark);
        mir.position.set(side * (D.width / 2 + 0.36), 2.2, zf + 0.15); g.add(mir);
      }
      // ワイパー
      const wp = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.03, 0.02), this.matDark);
      wp.position.set(-0.4, 1.35, zf + 0.05); wp.rotation.z = 0.4; g.add(wp);
    }
    if (rear) {
      const zr = zCenter - len / 2;
      const rw = new THREE.Mesh(new THREE.BoxGeometry(D.width - 0.5, 1.2, 0.06), this.matGlass);
      rw.position.set(0, 2.25, zr - 0.01); g.add(rw);
      const bumper = new THREE.Mesh(new THREE.BoxGeometry(D.width, 0.32, 0.24), this.matDark);
      bumper.position.set(0, D.floorY + 0.05, zr + 0.02); g.add(bumper);
      for (const side of [-1, 1]) {
        const tl = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.34, 0.08), this.matTail);
        tl.position.set(side * 1.0, 1.15, zr - 0.02); g.add(tl);
        const bl = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.16, 0.08), side < 0 ? this.matBlinkR : this.matBlinkL);
        bl.position.set(side * 1.0, 1.42, zr - 0.02); g.add(bl);
      }
      // エンジンの排気管
      const ex = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 10), this.matGrey);
      ex.rotation.x = Math.PI / 2; ex.position.set(-0.9, 0.5, zr - 0.05); g.add(ex);
    }
    return g;
  }

  _wheelPair(z, steerable) {
    const D = DIM;
    const grp = new THREE.Group();
    grp.position.set(0, D.wheelR, z);
    const tireG = new THREE.CylinderGeometry(D.wheelR, D.wheelR, 0.32, 28);
    tireG.rotateZ(Math.PI / 2);
    const hubG = new THREE.CylinderGeometry(D.wheelR * 0.62, D.wheelR * 0.62, 0.34, 20);
    hubG.rotateZ(Math.PI / 2);
    const wheels = [];
    for (const side of [-1, 1]) {
      const w = new THREE.Group();
      w.position.x = side * (D.width / 2 - 0.2);
      const t = new THREE.Mesh(tireG, this.matTire); t.castShadow = true; w.add(t);
      const hb = new THREE.Mesh(hubG, this.matHub); w.add(hb);
      // ホイールアーチ（黒い覆い）
      const arch = new THREE.Mesh(new THREE.BoxGeometry(0.42, D.wheelR * 1.5, D.wheelR * 2.4), this.matDark);
      arch.position.set(side * (D.width / 2 - 0.19), D.wheelR + 0.45, z);
      grp.parent?.add(arch);
      wheels.push({ node: w, arch });
      grp.add(w);
    }
    grp.userData.steerable = steerable;
    grp.userData.wheels = wheels;
    return grp;
  }

  _buildFront() {
    const D = DIM;
    this.front = new THREE.Group();     // 原点＝駆動軸（前半車体の後車軸）中心
    this.matBanner = new THREE.MeshStandardMaterial({ map: busBannerTexture(), transparent: true, roughness: 0.4, metalness: 0.1, depthWrite: false });
    this.matDest = new THREE.MeshStandardMaterial({ map: destinationTexture('どうぶつえん'), emissive: 0xffffff, emissiveMap: destinationTexture('どうぶつえん'), emissiveIntensity: 0.9, roughness: 0.4 });
    const zFront = D.W1 + D.frontOverhang;   // 前バンパー
    const zBack = -D.h + D.b;                // 蛇腹に接する後端面
    const len = zFront - zBack;
    this.frontLen = len; this.frontZBack = zBack; this.frontZFront = zFront;
    this.frontShell = this._bodyShell(len, (zFront + zBack) / 2, { front: true, doorsZ: [D.W1 - 1.8, -0.2 + 1.9] });
    this.front.add(this.frontShell);
    this.frontWheelsF = this._wheelPair(D.W1, true);
    this.frontWheelsR = this._wheelPair(0, false);
    this.front.add(this.frontWheelsF, this.frontWheelsR);
    for (const wp of [this.frontWheelsF, this.frontWheelsR]) for (const w of wp.userData.wheels) this.frontShell.add(w.arch);
    // ターンテーブル（連節部の床板）
    const tt = new THREE.Mesh(new THREE.CylinderGeometry(1.22, 1.22, 0.1, 40), this.matDark);
    tt.position.set(0, D.floorY - 0.02, -D.h);
    this.front.add(tt);
    // 下回りのシャシー
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(D.width - 0.6, 0.25, len - 1.0), this.matDark);
    chassis.position.set(0, D.floorY - 0.08, (zFront + zBack) / 2);
    this.front.add(chassis);
    this.group.add(this.front);
  }

  _buildRear() {
    const D = DIM;
    this.rear = new THREE.Group();      // 原点＝後半車体の車軸中心
    const zFront = D.L2 - D.b;          // 蛇腹に接する前端面
    const zBack = -D.rearOverhang;
    const len = zFront - zBack;
    this.rearLen = len; this.rearZFront = zFront; this.rearZBack = zBack;
    this.rearShell = this._bodyShell(len, (zFront + zBack) / 2, { rear: true, doorsZ: [zFront - 2.0] });
    this.rear.add(this.rearShell);
    this.rearWheels = this._wheelPair(0, false);
    this.rear.add(this.rearWheels);
    for (const w of this.rearWheels.userData.wheels) this.rearShell.add(w.arch);
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(D.width - 0.6, 0.25, len - 1.0), this.matDark);
    chassis.position.set(0, D.floorY - 0.08, (zFront + zBack) / 2);
    this.rear.add(chassis);
    this.group.add(this.rear);
  }

  // 蛇腹：折り目ごとに独立した頂点を持つバンド列（折り目が鋭く出る）
  _buildBellows() {
    const D = DIM;
    this.profile = roundedRectProfile(D.width - 0.14, D.floorY + 0.03, D.roofY - 0.14, 0.34, 5);
    this.folds = 9;
    this.rings = this.folds * 2 + 1;
    const P = this.profile.length;
    const bands = this.rings - 1;
    const vertsPerBand = P * 2;
    const count = bands * vertsPerBand;
    const pos = new Float32Array(count * 3);
    const uv = new Float32Array(count * 2);
    const idx = [];
    for (let b = 0; b < bands; b++) {
      const base = b * vertsPerBand;
      for (let i = 0; i < P; i++) {
        uv.set([i / (P - 1) * 4, b / bands * 2], (base + i) * 2);
        uv.set([i / (P - 1) * 4, (b + 1) / bands * 2], (base + P + i) * 2);
        if (i < P - 1) {
          const a = base + i, c = base + P + i;
          idx.push(a, a + 1, c, a + 1, c + 1, c);
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    this.bellowsGeo = g;
    this.bellows = new THREE.Mesh(g, this.matRubber);
    this.bellows.castShadow = true; this.bellows.receiveShadow = true;
    this.bellows.frustumCulled = false;
    this.group.add(this.bellows);
    // 蛇腹の内側の暗い芯（すき間から見える）
    this.bellowsCore = new THREE.Mesh(new THREE.BoxGeometry(D.width - 0.7, D.roofY - D.floorY - 0.5, D.b * 2 - 0.2), new THREE.MeshStandardMaterial({ color: 0x0c0c0c, roughness: 1 }));
    this.group.add(this.bellowsCore);
    this._ringPos = new Array(this.rings).fill(0).map(() => ({ c: new THREE.Vector3(), th: 0, inset: 0 }));
  }

  reset(x, z, theta) {
    this.x = x; this.z = z; this.th1 = theta; this.th2 = theta;
    this.delta = 0; this.v = 0; this.phi = 0; this.phiRate = 0;
    this.roll1 = this.roll2 = this.rollVel1 = this.rollVel2 = 0;
    this.blinkSide = 0; this.blinkOn = false; this.blinkTimer = 0;
    this.updateVisual(0);
  }

  // ワールド座標の要所
  hinge() { const d = dirOf(this.th1); return new THREE.Vector3(this.x - d.x * DIM.h, 0, this.z - d.z * DIM.h); }
  frontAxle() { const d = dirOf(this.th1); return new THREE.Vector3(this.x + d.x * DIM.W1, 0, this.z + d.z * DIM.W1); }
  driveAxle() { return new THREE.Vector3(this.x, 0, this.z); }
  frontEnd() { const d = dirOf(this.th1); const zf = DIM.W1 + DIM.frontOverhang; return new THREE.Vector3(this.x + d.x * zf, 0, this.z + d.z * zf); }
  rearAxle() { const H = this.hinge(); const d = dirOf(this.th2); return H.addScaledVector(d, -DIM.L2); }
  rearEnd() { const R = this.rearAxle(); const d = dirOf(this.th2); return R.addScaledVector(d, -DIM.rearOverhang); }
  // 車体の四隅（当たり用）: 前半・後半それぞれ [Vector3 x4]
  bodyCorners() {
    const D = DIM, hw = D.width / 2;
    const rect = (origin, th, z0, z1) => {
      const d = dirOf(th), l = leftOf(th);
      return [
        origin.clone().addScaledVector(d, z1).addScaledVector(l, hw),
        origin.clone().addScaledVector(d, z1).addScaledVector(l, -hw),
        origin.clone().addScaledVector(d, z0).addScaledVector(l, -hw),
        origin.clone().addScaledVector(d, z0).addScaledVector(l, hw),
      ];
    };
    return {
      front: rect(this.driveAxle(), this.th1, this.frontZBack, this.frontZFront),
      rear: rect(this.rearAxle(), this.th2, this.rearZBack, this.rearZFront),
    };
  }
  // 6輪の接地点 [{p, name}]
  wheelPoints() {
    const D = DIM, hw = D.width / 2 - 0.2;
    const out = [];
    const add = (origin, th, z, name) => {
      const d = dirOf(th), l = leftOf(th);
      const c = origin.clone().addScaledVector(d, z);
      out.push({ p: c.clone().addScaledVector(l, hw), name: name + 'L' });
      out.push({ p: c.clone().addScaledVector(l, -hw), name: name + 'R' });
    };
    add(this.driveAxle(), this.th1, D.W1, 'f');
    add(this.driveAxle(), this.th1, 0, 'm');
    add(this.rearAxle(), this.th2, 0, 'r');
    return out;
  }

  /** 運動更新。desiredDelta: 目標操舵角, targetSpeed: 目標速度 */
  step(dt, desiredDelta, targetSpeed) {
    const D = DIM;
    const dd = clamp(desiredDelta, -D.steerMax, D.steerMax) - this.delta;
    this.delta += clamp(dd, -D.steerRate * dt, D.steerRate * dt);
    const acc = targetSpeed > this.v ? 1.1 : 2.2;
    this.v += clamp(targetSpeed - this.v, -acc * dt, acc * dt);
    const Hprev = this.hinge();
    const th1dot = (this.v * Math.tan(this.delta)) / D.W1;
    this.th1 += th1dot * dt;
    const d1 = dirOf(this.th1);
    this.x += d1.x * this.v * dt; this.z += d1.z * this.v * dt;
    const Hnew = this.hinge();
    // 連節ピンの速度の、後半車体の横方向成分が後半の向きを変える（横滑りしない）
    const n2 = leftOf(this.th2);
    const vHx = (Hnew.x - Hprev.x) / Math.max(dt, 1e-6), vHz = (Hnew.z - Hprev.z) / Math.max(dt, 1e-6);
    const th2dot = (vHx * n2.x + vHz * n2.z) / D.L2;
    const prevPhi = this.phi;
    this.th2 += th2dot * dt;
    let phi = wrapAngle(this.th1 - this.th2);
    // 実車の連節角リミッタ
    if (Math.abs(phi) > D.phiMax) { phi = Math.sign(phi) * D.phiMax; this.th2 = this.th1 - phi; }
    this.phi = phi;
    this.phiRate = dt > 0 ? wrapAngle(phi - prevPhi) / dt : 0;
    this.wheelSpin += (this.v * dt) / D.wheelR;
    // ロール（横加速度に対するバネ）
    const latAcc1 = this.v * th1dot;
    const latAcc2 = this.v * th2dot;
    const spring = 18, damp = 5.5;
    this.rollVel1 += (-spring * this.roll1 - damp * this.rollVel1 - latAcc1 * 0.9) * dt;
    this.roll1 += this.rollVel1 * dt;
    this.rollVel2 += (-spring * this.roll2 - damp * this.rollVel2 - latAcc2 * 1.1) * dt;
    this.roll2 += this.rollVel2 * dt;
    // ウインカー
    const wantSide = Math.abs(desiredDelta) > 0.12 || Math.abs(this.delta) > 0.12 ? Math.sign(this.delta || desiredDelta) : 0;
    if (wantSide !== this.blinkSide) { this.blinkSide = wantSide; this.blinkTimer = 0; this.blinkOn = wantSide !== 0; this._blinkEvent = wantSide !== 0; }
    if (this.blinkSide !== 0) {
      this.blinkTimer += dt;
      if (this.blinkTimer >= 0.42) { this.blinkTimer -= 0.42; this.blinkOn = !this.blinkOn; this._blinkEvent = true; }
    } else this.blinkOn = false;
  }

  bumpImpulse(which, side) {
    if (which === 'front') this.rollVel1 += side * 0.9; else this.rollVel2 += side * 0.9;
  }

  // 連節角に応じた前後の「後端」の振れの大きさなど、UI 表示用
  consumeBlinkEvent() { const e = !!this._blinkEvent; this._blinkEvent = false; return e; }

  updateVisual(dt) {
    const D = DIM;
    this.front.position.set(this.x, 0, this.z);
    this.front.rotation.y = this.th1;
    this.frontShell.rotation.z = this.roll1 * 0.06;
    const R = this.rearAxle();
    this.rear.position.set(R.x, 0, R.z);
    this.rear.rotation.y = this.th2;
    this.rearShell.rotation.z = this.roll2 * 0.06;
    // 車輪
    for (const wp of [this.frontWheelsF, this.frontWheelsR, this.rearWheels]) {
      wp.rotation.y = wp.userData.steerable ? this.delta : 0;
      for (const w of wp.userData.wheels) w.node.rotation.x = this.wheelSpin;
    }
    // ウインカーの点滅
    const on = this.blinkOn ? 2.2 : 0.0;
    this.matBlinkL.emissiveIntensity = this.blinkSide > 0 ? on : 0;
    this.matBlinkR.emissiveIntensity = this.blinkSide < 0 ? on : 0;
    this._updateBellows();
  }

  _updateBellows() {
    const D = DIM;
    const d1 = dirOf(this.th1), d2 = dirOf(this.th2);
    const H = this.hinge();
    // 前半の後端面中心 A と後半の前端面中心 B、制御点はピン H
    const A = H.clone().addScaledVector(d1, D.b);
    const B = H.clone().addScaledVector(d2, -D.b);
    const P = this.profile.length;
    const pos = this.bellowsGeo.attributes.position.array;
    const rings = this.rings;
    const insetAmt = 0.2;
    for (let r = 0; r < rings; r++) {
      const t = r / (rings - 1);
      const rp = this._ringPos[r];
      // 2次ベジェ
      const mt = 1 - t;
      rp.c.set(
        mt * mt * A.x + 2 * mt * t * H.x + t * t * B.x, 0,
        mt * mt * A.z + 2 * mt * t * H.z + t * t * B.z,
      );
      rp.th = this.th1 - this.phi * t;
      const isEnd = r === 0 || r === rings - 1;
      rp.inset = isEnd ? -0.02 : (r % 2 === 1 ? -insetAmt : 0.04);
    }
    const bands = rings - 1;
    let k = 0;
    for (let b = 0; b < bands; b++) {
      for (let which = 0; which < 2; which++) {
        const rp = this._ringPos[b + which];
        const lx = Math.cos(rp.th), lz = -Math.sin(rp.th);
        for (let i = 0; i < P; i++) {
          const pr = this.profile[i];
          const px = pr.x + pr.nx * rp.inset, py = pr.y + pr.ny * rp.inset;
          pos[k++] = rp.c.x + lx * px;
          pos[k++] = py;
          pos[k++] = rp.c.z + lz * px;
        }
      }
    }
    this.bellowsGeo.attributes.position.needsUpdate = true;
    this.bellowsGeo.computeVertexNormals();
    // 内側の芯
    this.bellowsCore.position.set(H.x, (D.floorY + D.roofY) / 2 - 0.1, H.z);
    this.bellowsCore.rotation.y = this.th1 - this.phi / 2;
  }
}
