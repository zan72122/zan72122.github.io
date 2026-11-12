// 人物（子供・パパ・ママ・係員）：プリミティブで組んだ表情のある人形
import * as THREE from '../vendor/three.module.min.js';
import { mergeStatic } from './util.js';

const lerp = (a, b, t) => a + (b - a) * t;
const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));

export class Person {
  constructor(o) {
    this.o = o;
    const H = o.height;
    this.H = H;
    const g = new THREE.Group();
    this.root = g;
    const mat = (c, r = 0.7) => new THREE.MeshStandardMaterial({ color: c, roughness: r });
    const skin = mat(o.skin, 0.6);
    const shirt = mat(o.shirt);
    const pants = mat(o.pants);
    const shoe = mat(o.shoes || 0x3a3a40, 0.5);
    const hairM = mat(o.hair, 0.8);
    const black = new THREE.MeshStandardMaterial({ color: 0x1b1b1f, roughness: 0.3 });
    const white = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    const S = H / 1.7; // 大人基準の縮尺
    const headR = o.headR || 0.115 * (o.child ? 1.45 : 1) * S;
    this.headR = headR;
    const legL = (o.child ? 0.4 : 0.8) * S;
    const torsoL = (o.child ? 0.5 : 0.62) * S;
    this.legL = legL;
    this.torsoL = torsoL;
    const sh = (m) => { m.castShadow = true; return m; };

    // 腰（ここが原点の高さ legL）
    this.hips = new THREE.Group();
    this.hips.position.y = legL;
    g.add(this.hips);
    const hipW = 0.1 * S * (o.child ? 1.1 : 1);
    const legR = 0.055 * S * (o.child ? 1.25 : 1);
    this.legs = [];
    for (const sx of [-1, 1]) {
      const thigh = new THREE.Group();
      thigh.position.set(sx * hipW, 0, 0);
      this.hips.add(thigh);
      const tm = sh(new THREE.Mesh(new THREE.CapsuleGeometry(legR, legL * 0.42, 4, 10), pants));
      tm.position.y = -legL * 0.25;
      thigh.add(tm);
      const knee = new THREE.Group();
      knee.position.y = -legL * 0.5;
      thigh.add(knee);
      const sm = sh(new THREE.Mesh(new THREE.CapsuleGeometry(legR * 0.9, legL * 0.4, 4, 10), o.shortPants ? skin : pants));
      sm.position.y = -legL * 0.24;
      knee.add(sm);
      const foot = sh(new THREE.Mesh(new THREE.CapsuleGeometry(legR * 1.0, legR * 1.6, 4, 8), shoe));
      foot.rotation.x = Math.PI / 2;
      foot.position.set(0, -legL * 0.5 + legR * 0.6, legR * 0.9);
      knee.add(foot);
      this.legs.push({ thigh, knee });
    }
    // 胴体
    this.torso = new THREE.Group();
    this.hips.add(this.torso);
    const tw = (o.child ? 0.15 : 0.17) * S;
    const tb = sh(new THREE.Mesh(new THREE.CapsuleGeometry(tw, torsoL - tw * 1.2, 6, 14), shirt));
    tb.position.y = torsoL * 0.48;
    tb.scale.set(1, 1, 0.75);
    this.torso.add(tb);
    if (o.vest) {
      const vm = sh(new THREE.Mesh(new THREE.CapsuleGeometry(tw * 1.06, (torsoL - tw * 1.2) * 0.7, 6, 14), mat(o.vest, 0.6)));
      vm.position.y = torsoL * 0.5;
      vm.scale.set(1, 1, 0.8);
      this.torso.add(vm);
    }
    if (o.skirt) {
      const sk = sh(new THREE.Mesh(new THREE.ConeGeometry(tw * 1.5, torsoL * 0.55, 16, 1, true), mat(o.skirt)));
      sk.position.y = -torsoL * 0.08;
      sk.material.side = THREE.DoubleSide;
      this.torso.add(sk);
    }
    // 腕
    this.arms = [];
    const armL = (o.child ? 0.3 : 0.56) * S;
    const armR = 0.045 * S * (o.child ? 1.3 : 1);
    for (const sx of [-1, 1]) {
      const shoulder = new THREE.Group();
      shoulder.position.set(sx * (tw + armR * 0.6), torsoL * 0.86, 0);
      this.torso.add(shoulder);
      const up = sh(new THREE.Mesh(new THREE.CapsuleGeometry(armR, armL * 0.4, 4, 8), shirt));
      up.position.y = -armL * 0.24;
      shoulder.add(up);
      const elbow = new THREE.Group();
      elbow.position.y = -armL * 0.5;
      shoulder.add(elbow);
      const lo = sh(new THREE.Mesh(new THREE.CapsuleGeometry(armR * 0.9, armL * 0.36, 4, 8), o.shortSleeve ? skin : shirt));
      lo.position.y = -armL * 0.22;
      elbow.add(lo);
      const hand = sh(new THREE.Mesh(new THREE.SphereGeometry(armR * 1.25, 10, 8), skin));
      hand.position.y = -armL * 0.48;
      elbow.add(hand);
      this.arms.push({ shoulder, elbow, sx });
    }
    // 頭
    this.neck = new THREE.Group();
    this.neck.position.y = torsoL * 0.93;
    this.torso.add(this.neck);
    this.head = new THREE.Group();
    this.head.position.y = headR * 0.95;
    this.neck.add(this.head);
    const hm = sh(new THREE.Mesh(new THREE.SphereGeometry(headR, 24, 18), skin));
    this.head.add(hm);
    this.headMesh = hm;
    // 髪
    const hairG = new THREE.SphereGeometry(headR * 1.06, 24, 14, 0, Math.PI * 2, 0, Math.PI * 0.55);
    const hair = sh(new THREE.Mesh(hairG, hairM));
    hair.rotation.x = -0.35;
    hair.position.set(0, headR * 0.05, -headR * 0.08);
    this.head.add(hair);
    if (o.bun) {
      const bun = sh(new THREE.Mesh(new THREE.SphereGeometry(headR * 0.45, 14, 10), hairM));
      bun.position.set(0, headR * 0.6, -headR * 0.85);
      this.head.add(bun);
    }
    if (o.cap) {
      const capM = mat(o.cap, 0.6);
      const cap = sh(new THREE.Mesh(new THREE.SphereGeometry(headR * 1.1, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), capM));
      cap.position.y = headR * 0.12;
      this.head.add(cap);
      const brim = sh(new THREE.Mesh(new THREE.CylinderGeometry(headR * 0.75, headR * 0.75, headR * 0.08, 20, 1, false, -Math.PI / 2, Math.PI), capM));
      brim.position.set(0, headR * 0.18, headR * 0.7);
      brim.scale.set(1, 1, 0.9);
      this.head.add(brim);
      const btn = new THREE.Mesh(new THREE.SphereGeometry(headR * 0.12, 8, 6), capM);
      btn.position.y = headR * 1.2;
      this.head.add(btn);
    }
    // 目・眉・口
    this.eyes = [];
    for (const sx of [-1, 1]) {
      const eg = new THREE.Group();
      eg.position.set(sx * headR * 0.36, headR * 0.12, headR * 0.86);
      this.head.add(eg);
      const wh = new THREE.Mesh(new THREE.SphereGeometry(headR * 0.2, 14, 10), white);
      wh.scale.set(1, 1.15, 0.5);
      eg.add(wh);
      const pu = new THREE.Mesh(new THREE.SphereGeometry(headR * 0.13, 12, 10), black);
      pu.position.z = headR * 0.06;
      pu.scale.set(1, 1.15, 0.6);
      eg.add(pu);
      const hl = new THREE.Mesh(new THREE.SphereGeometry(headR * 0.04, 6, 6), white);
      hl.position.set(headR * 0.04, headR * 0.05, headR * 0.13);
      eg.add(hl);
      const brow = new THREE.Mesh(new THREE.CapsuleGeometry(headR * 0.035, headR * 0.22, 3, 6), hairM);
      brow.rotation.z = Math.PI / 2;
      brow.position.set(sx * headR * 0.36, headR * 0.42, headR * 0.86);
      this.head.add(brow);
      this.eyes.push({ g: eg, wh, pu, brow, sx });
    }
    if (o.glasses) {
      const gm = new THREE.MeshStandardMaterial({ color: 0x22252c, roughness: 0.3, metalness: 0.5 });
      for (const sx of [-1, 1]) {
        const r = new THREE.Mesh(new THREE.TorusGeometry(headR * 0.25, headR * 0.03, 6, 20), gm);
        r.position.set(sx * headR * 0.36, headR * 0.12, headR * 0.98);
        this.head.add(r);
      }
      const br = new THREE.Mesh(new THREE.BoxGeometry(headR * 0.22, headR * 0.03, headR * 0.03), gm);
      br.position.set(0, headR * 0.16, headR * 1.0);
      this.head.add(br);
    }
    const nose = new THREE.Mesh(new THREE.SphereGeometry(headR * 0.12, 10, 8), skin);
    nose.position.set(0, -headR * 0.05, headR * 0.98);
    this.head.add(nose);
    if (o.cheeks) {
      const ck = new THREE.MeshStandardMaterial({ color: 0xff9aa8, roughness: 0.8, transparent: true, opacity: 0.6 });
      for (const sx of [-1, 1]) {
        const c = new THREE.Mesh(new THREE.CircleGeometry(headR * 0.15, 12), ck);
        c.position.set(sx * headR * 0.6, -headR * 0.2, headR * 0.8);
        c.rotation.y = sx * 0.6;
        this.head.add(c);
      }
    }
    const mouthM = new THREE.MeshStandardMaterial({ color: 0x8a2a2a, roughness: 0.5 });
    this.mSmile = new THREE.Mesh(new THREE.TorusGeometry(headR * 0.25, headR * 0.045, 6, 16, Math.PI), mouthM);
    this.mSmile.rotation.z = Math.PI;
    this.mSmile.position.set(0, -headR * 0.32, headR * 0.92);
    this.head.add(this.mSmile);
    this.mO = new THREE.Mesh(new THREE.SphereGeometry(headR * 0.15, 12, 10), mouthM);
    this.mO.scale.set(0.8, 1.1, 0.4);
    this.mO.position.set(0, -headR * 0.4, headR * 0.9);
    this.head.add(this.mO);
    const laughG = new THREE.CircleGeometry(headR * 0.28, 16, Math.PI, Math.PI);
    this.mLaugh = new THREE.Mesh(laughG, mouthM);
    this.mLaugh.position.set(0, -headR * 0.24, headR * 0.97);
    this.mLaugh.rotation.x = -0.25;
    this.head.add(this.mLaugh);

    if (o.remote) {
      const rm = new THREE.Group();
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.1, 0.03), black);
      rm.add(box);
      const bt = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.01, 10), new THREE.MeshStandardMaterial({ color: 0xff2020, emissive: 0xff0000, emissiveIntensity: 0.5 }));
      bt.rotation.x = Math.PI / 2;
      bt.position.set(0, 0.02, 0.018);
      rm.add(bt);
      const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.003, 0.12, 4), black);
      ant.position.set(0.015, 0.1, 0);
      rm.add(ant);
      rm.position.set(0, -armL * 0.52, 0.03);
      this.arms[0].elbow.add(rm);
    }

    // 顔の動かない部品（髪・帽子・鼻・眼鏡など）をまとめる
    mergeStatic(this.head, new Set([hm, ...this.eyes.map((e) => e.g), ...this.eyes.map((e) => e.brow), this.mSmile, this.mO, this.mLaugh]));

    // 状態
    this.expr = 'smile';
    this.exprTimer = 0;
    this.pose = 'stand';
    this.walkPhase = 0;
    this.lookTarget = null;
    this.lookYaw = 0; this.lookPitch = 0;
    this.action = null; // 'wave' | 'cheer' | 'clap' | 'point' | 'hold' | 'grip'
    this.actionT = 0;
    this.actionDur = 0;
    this.bob = 0;
    this.blinkT = 2 + Math.random() * 3;
    this.surprise = 0;
    this.lean = 0;
    this.steer = 0; // 運転中のハンドル角（子供の腕）
    this.hop = 0;
    this.setExpr('smile');
    this.pickMesh = hm;
  }

  setExpr(e, dur = 0) {
    this.expr = e;
    this.exprTimer = dur;
    this.mSmile.visible = e === 'smile' || e === 'neutral';
    this.mSmile.scale.set(1, e === 'neutral' ? 0.4 : 1, 1);
    this.mO.visible = e === 'surprised' || e === 'wow';
    this.mLaugh.visible = e === 'laugh';
  }

  do(action, dur = 1.5) {
    this.action = action;
    this.actionT = 0;
    this.actionDur = dur;
  }

  lookAt(v) { this.lookTarget = v; }

  update(dt, time) {
    const L = this.legs, A = this.arms;
    if (this.exprTimer > 0) {
      this.exprTimer -= dt;
      if (this.exprTimer <= 0) this.setExpr('smile');
    }
    const wide = this.expr === 'surprised' || this.expr === 'wow' ? 1 : 0;
    this.surprise = damp(this.surprise, wide, 10, dt);
    // まばたき
    this.blinkT -= dt;
    let blink = 1;
    if (this.blinkT < 0) {
      blink = 0.1;
      if (this.blinkT < -0.12) this.blinkT = 2 + Math.random() * 4;
    }
    for (const e of this.eyes) {
      const s = 1 + this.surprise * 0.45;
      e.g.scale.set(s, s * blink, s);
      e.pu.scale.set(1 - this.surprise * 0.25, (1.15 - this.surprise * 0.25), 0.6);
      e.brow.position.y = this.headR * (0.42 + this.surprise * 0.16);
      e.brow.rotation.z = Math.PI / 2 + e.sx * (this.expr === 'laugh' ? -0.2 : 0);
    }

    // 基本姿勢
    let thighX = 0, kneeX = 0, armX = [0, 0], armZ = [0, 0], elbowX = [0, 0];
    let torsoX = 0, hipY = this.legL;
    if (this.pose === 'stand') {
      armZ = [-0.12, 0.12];
      elbowX = [-0.15, -0.15];
      this.bob += dt;
      hipY = this.legL + Math.sin(this.bob * 2) * 0.004;
    } else if (this.pose === 'walk') {
      this.walkPhase += dt * 8;
      const s = Math.sin(this.walkPhase);
      L[0].thigh.rotation.x = s * 0.6;
      L[1].thigh.rotation.x = -s * 0.6;
      L[0].knee.rotation.x = Math.max(0, -s) * 0.8;
      L[1].knee.rotation.x = Math.max(0, s) * 0.8;
      armX = [-s * 0.5, s * 0.5];
      armZ = [-0.1, 0.1];
      elbowX = [-0.3, -0.3];
      hipY = this.legL + Math.abs(Math.cos(this.walkPhase)) * 0.03;
    } else if (this.pose === 'sit' || this.pose === 'drive') {
      const knees = this.o.child ? 1.45 : 1.15;
      thighX = -knees;
      kneeX = this.o.child ? 1.35 : 1.75;
      hipY = 0;
      torsoX = -0.08;
      if (this.pose === 'drive') {
        // ハンドルを握る腕。ハンドル角に合わせて左右の腕が上下する
        const s = this.steer;
        armX = [-1.0 - s * 0.35, -1.0 + s * 0.35];
        armZ = [-0.18, 0.18];
        elbowX = [-0.5, -0.5];
      } else {
        armX = [-0.35, -0.35];
        armZ = [-0.18, 0.18];
        elbowX = [-0.9, -0.9];
      }
    }
    if (this.pose !== 'walk') {
      for (const l of L) { l.thigh.rotation.x = thighX; l.knee.rotation.x = kneeX; }
    }

    // 動作（手を振る・万歳・拍手・指さし）
    if (this.action) {
      this.actionT += dt;
      const t = this.actionT;
      const fade = Math.min(1, t * 5, (this.actionDur - t) * 4);
      if (t > this.actionDur) this.action = null;
      else if (this.action === 'wave') {
        armX[1] = lerp(armX[1], -0.2, fade);
        armZ[1] = lerp(armZ[1], 2.5 + Math.sin(t * 12) * 0.35, fade);
        elbowX[1] = lerp(elbowX[1], -0.3, fade);
      } else if (this.action === 'cheer') {
        const j = Math.abs(Math.sin(t * 7));
        armZ = [lerp(armZ[0], -2.6 - j * 0.2, fade), lerp(armZ[1], 2.6 + j * 0.2, fade)];
        armX = [lerp(armX[0], -0.2, fade), lerp(armX[1], -0.2, fade)];
        elbowX = [lerp(elbowX[0], -0.2, fade), lerp(elbowX[1], -0.2, fade)];
        if (this.pose === 'stand') hipY += j * 0.08 * fade;
      } else if (this.action === 'clap') {
        const c = Math.sin(t * 16) * 0.25;
        armX = [lerp(armX[0], -1.2, fade), lerp(armX[1], -1.2, fade)];
        armZ = [lerp(armZ[0], 0.45 + c, fade), lerp(armZ[1], -0.45 - c, fade)];
        elbowX = [lerp(elbowX[0], -0.6, fade), lerp(elbowX[1], -0.6, fade)];
      } else if (this.action === 'point') {
        armX[1] = lerp(armX[1], -1.5, fade);
        armZ[1] = lerp(armZ[1], -0.2, fade);
        elbowX[1] = lerp(elbowX[1], 0, fade);
      } else if (this.action === 'grip') {
        armX[1] = lerp(armX[1], -0.5, fade);
        armZ[1] = lerp(armZ[1], 0.9, fade);
        elbowX[1] = lerp(elbowX[1], -0.3, fade);
      } else if (this.action === 'mime') {
        // パパがハンドルを回す身振り（触らない）
        const s = Math.sin(t * 4) * 0.4;
        armX = [lerp(armX[0], -1.1 - s, fade), lerp(armX[1], -1.1 + s, fade)];
        armZ = [lerp(armZ[0], 0.25, fade), lerp(armZ[1], -0.25, fade)];
        elbowX = [lerp(elbowX[0], -0.7, fade), lerp(elbowX[1], -0.7, fade)];
      } else if (this.action === 'reach') {
        armX[1] = lerp(armX[1], -1.4, fade);
        armZ[1] = lerp(armZ[1], -0.5, fade);
        elbowX[1] = lerp(elbowX[1], -0.2, fade);
      }
    }
    for (let i = 0; i < 2; i++) {
      A[i].shoulder.rotation.x = armX[i];
      A[i].shoulder.rotation.z = armZ[i];
      A[i].elbow.rotation.x = elbowX[i];
    }
    this.hips.position.y = hipY + this.hop;
    this.torso.rotation.x = torsoX;
    this.lean = damp(this.lean, 0, 3, dt);
    this.torso.rotation.z = this.lean;

    // 視線
    let ty = 0, tp = 0;
    if (this.lookTarget) {
      const p = new THREE.Vector3();
      this.head.getWorldPosition(p);
      const d = this.lookTarget.clone().sub(p);
      const inv = new THREE.Quaternion();
      this.neck.getWorldQuaternion(inv).invert();
      d.applyQuaternion(inv);
      ty = Math.atan2(d.x, d.z);
      tp = -Math.atan2(d.y, Math.hypot(d.x, d.z));
      ty = Math.max(-1.2, Math.min(1.2, ty));
      tp = Math.max(-0.6, Math.min(0.5, tp));
    }
    this.lookYaw = damp(this.lookYaw, ty, 6, dt);
    this.lookPitch = damp(this.lookPitch, tp, 6, dt);
    this.head.rotation.set(this.lookPitch, this.lookYaw, 0, 'YXZ');
    void time;
  }
}

export function makeChild() {
  return new Person({
    height: 1.08, child: true, skin: 0xffd9bd, hair: 0x5b3a22, shirt: 0x5fb8ff, pants: 0x2d4f8a,
    shoes: 0xff5a5a, cap: 0xffd23f, cheeks: true, shortPants: true, shortSleeve: true,
  });
}
export function makePapa() {
  return new Person({
    height: 1.78, skin: 0xf2c9a8, hair: 0x2a2320, shirt: 0x3aa7a0, pants: 0xcdb48c, shoes: 0x6b4a32,
    glasses: true, shortSleeve: true,
  });
}
export function makeMama() {
  return new Person({
    height: 1.62, skin: 0xf6d2b8, hair: 0x6b3b22, shirt: 0xff8f8f, pants: 0xffffff, skirt: 0xffffff,
    shoes: 0xffffff, bun: true, cheeks: true,
  });
}
export function makeStaff() {
  return new Person({
    height: 1.7, skin: 0xeec2a0, hair: 0x2a2a2a, shirt: 0xffffff, pants: 0x3a3f4a, vest: 0x35c26b,
    cap: 0x35c26b, remote: true,
  });
}
