// 主人公: 麦わら帽子の小さな子ども (手続き的アニメーション)
import * as THREE from '../vendor/three.module.min.js';
import { makeLit } from '../core/materials.js';
import { colorize, merge } from '../core/geom.js';
import { clamp, lerp, damp, angleDiff, smooth, Spring } from '../core/util.js';

const SKIN = 0xf7c9a6, HAIR = 0x4a2e1e, SHIRT = 0xfff6e0, OVERALL = 0x4f8fd0, SHOE = 0xe0463a, HAT = 0xf2d58a, RIBBON = 0xe2504a;

function part(geo, color, x = 0, y = 0, z = 0) {
  geo.translate(x, y, z);
  colorize(geo, color);
  return geo;
}

export function createCharacter(G) {
  const mat = makeLit(G, { mode: 5, spec: 0.0 });
  const root = new THREE.Group();     // 位置と向き
  const body = new THREE.Group();     // 上下動
  root.add(body);
  const hips = new THREE.Group(); hips.position.y = 0.36; body.add(hips);
  const torso = new THREE.Group(); hips.add(torso);
  // 胴 (シャツ + オーバーオール)
  const torsoGeo = merge([
    part(new THREE.CapsuleGeometry(0.15, 0.12, 6, 14), SHIRT, 0, 0.17, 0),
    part(new THREE.CylinderGeometry(0.158, 0.17, 0.2, 14), OVERALL, 0, 0.06, 0),
    part(new THREE.BoxGeometry(0.16, 0.12, 0.05), OVERALL, 0, 0.2, 0.13),
    part(new THREE.BoxGeometry(0.035, 0.18, 0.03), OVERALL, -0.07, 0.26, 0.12),
    part(new THREE.BoxGeometry(0.035, 0.18, 0.03), OVERALL, 0.07, 0.26, 0.12),
    part(new THREE.SphereGeometry(0.018, 8, 6), 0xffd34a, -0.07, 0.22, 0.155),
    part(new THREE.SphereGeometry(0.018, 8, 6), 0xffd34a, 0.07, 0.22, 0.155),
  ]);
  torso.add(new THREE.Mesh(torsoGeo, mat));
  // 頭
  const neck = new THREE.Group(); neck.position.y = 0.36; torso.add(neck);
  const head = new THREE.Group(); head.position.y = 0.17; neck.add(head);
  const headGeo = merge([
    part(new THREE.SphereGeometry(0.2, 24, 18), SKIN),
    // 髪 (後ろと上)
    part(new THREE.SphereGeometry(0.212, 24, 18, 0, Math.PI * 2, 0, Math.PI * 0.58), HAIR, 0, 0.012, -0.012),
    part(new THREE.SphereGeometry(0.06, 10, 8), HAIR, -0.15, -0.08, -0.06),
    part(new THREE.SphereGeometry(0.06, 10, 8), HAIR, 0.15, -0.08, -0.06),
    // 耳
    part(new THREE.SphereGeometry(0.04, 10, 8), SKIN, -0.198, -0.02, 0),
    part(new THREE.SphereGeometry(0.04, 10, 8), SKIN, 0.198, -0.02, 0),
    // ほっぺ
    part(new THREE.SphereGeometry(0.042, 12, 8).scale(1, 0.6, 0.3), 0xff8a8a, -0.11, -0.06, 0.165),
    part(new THREE.SphereGeometry(0.042, 12, 8).scale(1, 0.6, 0.3), 0xff8a8a, 0.11, -0.06, 0.165),
    // 鼻
    part(new THREE.SphereGeometry(0.018, 8, 6), 0xf5b590, 0, -0.03, 0.198),
  ]);
  head.add(new THREE.Mesh(headGeo, mat));
  // 目 (まばたき用に別)
  const eyeGeo = merge([
    part(new THREE.SphereGeometry(0.026, 12, 10).scale(0.85, 1.15, 0.5), 0x2a1a14),
    part(new THREE.SphereGeometry(0.008, 8, 6), 0xffffff, 0.008, 0.012, 0.014),
  ]);
  const eyeL = new THREE.Mesh(eyeGeo, mat); eyeL.position.set(-0.07, 0.0, 0.183);
  const eyeR = new THREE.Mesh(eyeGeo, mat); eyeR.position.set(0.07, 0.0, 0.183);
  head.add(eyeL); head.add(eyeR);
  // 口 (形を変えられるように)
  const mouth = new THREE.Mesh(part(new THREE.TorusGeometry(0.03, 0.009, 6, 12, Math.PI), 0xb8484a).rotateZ(Math.PI), mat);
  mouth.position.set(0, -0.09, 0.18);
  mouth.rotation.x = -0.25;
  head.add(mouth);
  const mouthO = new THREE.Mesh(part(new THREE.SphereGeometry(0.026, 10, 8).scale(1, 1.2, 0.4), 0x8a2a30), mat);
  mouthO.position.set(0, -0.095, 0.182);
  mouthO.visible = false;
  head.add(mouthO);
  // 麦わら帽子
  const hat = new THREE.Group(); hat.position.set(0, 0.12, -0.01); hat.rotation.x = -0.18; head.add(hat);
  const brim = new THREE.CylinderGeometry(0.33, 0.35, 0.02, 28);
  const crown = new THREE.CylinderGeometry(0.15, 0.18, 0.12, 22); crown.translate(0, 0.07, 0);
  const crownTop = new THREE.SphereGeometry(0.15, 20, 8, 0, Math.PI * 2, 0, Math.PI / 2); crownTop.scale(1, 0.35, 1); crownTop.translate(0, 0.13, 0);
  const band = new THREE.CylinderGeometry(0.182, 0.185, 0.045, 22, 1, true); band.translate(0, 0.035, 0);
  const tail = new THREE.BoxGeometry(0.04, 0.12, 0.012); tail.rotateZ(0.3); tail.translate(0.13, -0.02, -0.12);
  const hatGeo = merge([colorize(brim, HAT), colorize(crown, HAT), colorize(crownTop, HAT), colorize(band, RIBBON), colorize(tail, RIBBON)]);
  const hatMesh = new THREE.Mesh(hatGeo, makeLit(G, { mode: 5 }));
  hatMesh.material.side = THREE.DoubleSide;
  hat.add(hatMesh);
  // 腕
  const mkArm = (s) => {
    const sh = new THREE.Group(); sh.position.set(0.17 * s, 0.27, 0); torso.add(sh);
    const g = merge([
      part(new THREE.CapsuleGeometry(0.05, 0.08, 4, 10), SHIRT, 0, -0.06, 0),
      part(new THREE.CapsuleGeometry(0.04, 0.14, 4, 10), SKIN, 0, -0.17, 0),
      part(new THREE.SphereGeometry(0.048, 10, 8), SKIN, 0, -0.27, 0.01),
    ]);
    sh.add(new THREE.Mesh(g, mat));
    return sh;
  };
  const armL = mkArm(-1), armR = mkArm(1);
  // 脚
  const mkLeg = (s) => {
    const hip = new THREE.Group(); hip.position.set(0.075 * s, 0.0, 0); hips.add(hip);
    const thigh = merge([
      part(new THREE.CapsuleGeometry(0.06, 0.06, 4, 10), OVERALL, 0, -0.05, 0),
      part(new THREE.CapsuleGeometry(0.048, 0.1, 4, 10), SKIN, 0, -0.16, 0),
    ]);
    hip.add(new THREE.Mesh(thigh, mat));
    const knee = new THREE.Group(); knee.position.y = -0.2; hip.add(knee);
    const shin = merge([
      part(new THREE.CapsuleGeometry(0.045, 0.07, 4, 10), SKIN, 0, -0.06, 0),
      part(new THREE.SphereGeometry(0.068, 12, 8).scale(1, 0.7, 1.45), SHOE, 0, -0.14, 0.03),
    ]);
    knee.add(new THREE.Mesh(shin, mat));
    return { hip, knee };
  };
  const legL = mkLeg(-1), legR = mkLeg(1);
  // 足元の影
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.28, 20).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.18, depthWrite: false }));
  shadow.position.y = 0.006;
  shadow.renderOrder = 2;
  root.add(shadow);

  G.scene.add(root);

  const ch = {
    root, body, hips, torso, head, neck, armL, armR, legL, legR, eyeL, eyeR, mouth, mouthO, hat, shadow,
    pos: root.position, yaw: 0, targetYaw: 0,
    walkTarget: null, walkSpeed: 1.1, speed: 0, phase: 0,
    pose: 'stand',       // stand | sit | slide | crouch
    poseW: { sit: 0, slide: 0, crouch: 0, awe: 0, cheer: 0, reach: 0, point: 0, dangle: 0, lie: 0, peek: 0 },
    poseT: { sit: 0, slide: 0, crouch: 0, awe: 0, cheer: 0, reach: 0, point: 0, dangle: 0, lie: 0, peek: 0 },
    lookAt: null, lookW: 0, headYaw: 0, headPitch: 0,
    blinkT: 2, jump: new Spring(0, 60, 9), squash: new Spring(0, 90, 8),
    groundFn: null,       // (x,z) => y  (親ローカル座標)
    sneezeT: -10, giggleT: -10, mouthOpen: 0,
    reachDir: new THREE.Vector3(0, 0, 1),
    set(name, w) { this.poseT[name] = w; },
    clearPoses() { for (const k in this.poseT) this.poseT[k] = 0; },
    walkTo(x, z, speed = 1.1) { this.walkTarget = new THREE.Vector3(x, 0, z); this.walkSpeed = speed; },
    face(yaw) { this.targetYaw = yaw; },
    faceToward(x, z) { this.targetYaw = Math.atan2(x - this.pos.x, z - this.pos.z); },
    hop(v = 2.2) { this.jump.kick(v); },
    sneeze() { this.sneezeT = G.time; },
    // 親を付け替えてもワールド位置を保つ
    attach(parent) {
      root.updateMatrixWorld();
      const wp = new THREE.Vector3(); root.getWorldPosition(wp);
      parent.updateMatrixWorld();
      parent.attach(root);
      this.yaw = root.rotation.y; this.targetYaw = this.yaw;
    },
    worldPos(out = new THREE.Vector3()) { root.updateWorldMatrix(true, false); return root.getWorldPosition(out); },
    headWorld(out = new THREE.Vector3()) { head.updateWorldMatrix(true, false); return head.getWorldPosition(out); },

    update(dt) {
      // 歩行
      let moving = 0;
      if (this.walkTarget) {
        const dx = this.walkTarget.x - this.pos.x, dz = this.walkTarget.z - this.pos.z;
        const d = Math.hypot(dx, dz);
        if (d < 0.04) { this.walkTarget = null; }
        else {
          this.targetYaw = Math.atan2(dx, dz);
          const sp = Math.min(this.walkSpeed, d * 3 + 0.2);
          this.speed = damp(this.speed, sp, 8, dt);
          const turn = Math.abs(angleDiff(this.yaw, this.targetYaw));
          const k = this.speed * dt * (turn > 1.2 ? 0.3 : 1);
          this.pos.x += dx / d * k; this.pos.z += dz / d * k;
          moving = 1;
        }
      }
      if (!moving) this.speed = damp(this.speed, 0, 10, dt);
      this.yaw += angleDiff(this.yaw, this.targetYaw) * (1 - Math.exp(-8 * dt));
      root.rotation.y = this.yaw;
      if (this.groundFn) this.pos.y = this.groundFn(this.pos.x, this.pos.z);
      // ポーズの重み
      for (const k in this.poseW) this.poseW[k] = damp(this.poseW[k], this.poseT[k], 6, dt);
      const W = this.poseW;
      const run = clamp(this.speed / 1.1);
      this.phase += dt * (2 + this.speed * 7);
      const ph = this.phase;
      // 跳ね
      this.jump.update(dt); this.squash.update(dt);
      const t = G.time;
      const breathe = Math.sin(t * 2.2) * 0.008;
      const bob = Math.abs(Math.sin(ph)) * 0.035 * run;
      const crouch = W.crouch * 0.12 + W.sit * 0.2 + W.slide * 0.2 + W.dangle * 0.2;
      body.position.y = bob - crouch + Math.max(0, this.jump.x) * 0.25 + W.lie * -0.1;
      body.scale.set(1 + this.squash.x * 0.1, 1 - this.squash.x * 0.1 + breathe, 1 + this.squash.x * 0.1);
      // 胴の傾き
      torso.rotation.x = 0.08 * run + W.crouch * 0.35 - W.awe * 0.18 + W.slide * -0.25 + W.reach * 0.25 - W.cheer * 0.1 + W.peek * 0.2;
      torso.rotation.z = Math.sin(ph) * 0.04 * run;
      hips.rotation.x = W.lie * -1.3;
      // 脚
      const sw = Math.sin(ph) * 0.65 * run;
      const sitLeg = W.sit + W.slide + W.dangle;
      const dangleSwing = W.dangle * Math.sin(t * 2.6) * 0.35;
      legL.hip.rotation.x = sw - sitLeg * 1.45 - W.crouch * 0.9 + dangleSwing;
      legR.hip.rotation.x = -sw - sitLeg * 1.45 - W.crouch * 0.9 - dangleSwing;
      legL.knee.rotation.x = Math.max(0, -Math.sin(ph)) * 0.9 * run + sitLeg * 1.35 * (1 - W.slide * 0.9) - W.dangle * 0.3 + W.crouch * 1.5;
      legR.knee.rotation.x = Math.max(0, Math.sin(ph)) * 0.9 * run + sitLeg * 1.35 * (1 - W.slide * 0.9) - W.dangle * 0.3 + W.crouch * 1.5;
      legL.hip.rotation.z = -W.slide * 0.15; legR.hip.rotation.z = W.slide * 0.15;
      // 腕
      const armSw = -Math.sin(ph) * 0.7 * run;
      const upArms = W.cheer * 2.6 + W.slide * 2.4 + W.awe * 0.5;
      armL.rotation.x = armSw - W.reach * 1.3 - W.point * 0.0 - upArms * 0.25 + W.sit * -0.3;
      armR.rotation.x = -armSw - W.reach * 1.3 - W.point * 1.9 - upArms * 0.25 + W.sit * -0.3;
      armL.rotation.z = -0.12 - upArms * 0.75 - W.crouch * 0.5 + Math.sin(t * 9) * 0.25 * W.cheer;
      armR.rotation.z = 0.12 + upArms * 0.75 + W.crouch * 0.5 - Math.sin(t * 9 + 1) * 0.25 * W.cheer;
      // 頭: 注視
      let ty = 0, tp = 0;
      if (this.lookAt && this.lookW > 0.01) {
        head.updateWorldMatrix(true, false);
        const hp = new THREE.Vector3(); head.getWorldPosition(hp);
        const d = this.lookAt.clone().sub(hp);
        const inv = new THREE.Quaternion(); root.getWorldQuaternion(inv); inv.invert();
        d.applyQuaternion(inv);
        ty = clamp(Math.atan2(d.x, d.z), -1.1, 1.1) * this.lookW;
        tp = clamp(Math.atan2(d.y, Math.hypot(d.x, d.z)), -0.8, 0.9) * this.lookW;
      }
      tp += W.awe * 0.45;
      this.headYaw = damp(this.headYaw, ty, 6, dt);
      this.headPitch = damp(this.headPitch, tp, 6, dt);
      neck.rotation.y = this.headYaw * 0.6;
      head.rotation.y = this.headYaw * 0.4;
      head.rotation.x = -this.headPitch + Math.sin(t * 1.3) * 0.02;
      // くしゃみ
      const sn = t - this.sneezeT;
      if (sn > 0 && sn < 1.2) {
        head.rotation.x += sn < 0.5 ? -smooth(sn / 0.5) * 0.3 : Math.exp(-(sn - 0.5) * 8) * 0.55;
      }
      // まばたき
      this.blinkT -= dt;
      let eyeS = 1;
      if (this.blinkT < 0) { eyeS = 0.12; if (this.blinkT < -0.12) this.blinkT = 1.8 + Math.random() * 3; }
      eyeL.scale.y = eyeR.scale.y = eyeS;
      // 口
      const o = clamp(W.awe + this.mouthOpen + W.slide + W.cheer * 0.6);
      mouthO.visible = o > 0.5; mouth.visible = o <= 0.5;
      // 影
      shadow.visible = W.lie < 0.5 && !this.noShadow;
      shadow.scale.setScalar(1 - Math.min(0.6, Math.max(0, this.jump.x) * 0.2));
    },
  };
  return ch;
}
