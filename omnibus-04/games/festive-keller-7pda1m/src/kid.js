import * as THREE from 'three';
import { clamp, lerp, damp, dampAngle, smoothstep, wrapAngle } from './util.js';

// A small child (about 1 m tall) in a white shirt, navy shorts and
// glossy yellow rubber boots. Fully procedural: IK legs with real foot
// planting, counter-swinging arms, a lagging shirt hem, a head that looks at
// interesting things.

const ANKLE_H = 0.075;
const SHIN = 0.2;
const THIGH = 0.215;
const LEG = SHIN + THIGH;
const HIP_W = 0.056;
const STAND_H = 0.468;
const UP = new THREE.Vector3(0, 1, 0);

const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _c = new THREE.Vector3();
const _d = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _q2 = new THREE.Quaternion();
const _e = new THREE.Euler();
const _m = new THREE.Matrix4();

function segment(mesh, from, to) {
  mesh.position.copy(from);
  _d.subVectors(to, from).normalize();
  mesh.quaternion.setFromUnitVectors(UP, _d);
}

function capsule(r, len, mat, radial = 10) {
  const g = new THREE.CapsuleGeometry(r, Math.max(0.001, len), 4, radial);
  g.translate(0, len / 2, 0);
  const m = new THREE.Mesh(g, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function lathe(profile, mat, segs = 18) {
  const pts = profile.map(([r, y]) => new THREE.Vector2(r, y));
  const g = new THREE.LatheGeometry(pts, segs);
  const m = new THREE.Mesh(g, mat);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function makeBoot(mats) {
  const g = new THREE.Group();
  // shaft
  const shaft = lathe([
    [0.001, -0.035], [0.039, -0.035], [0.041, -0.01], [0.042, 0.03], [0.043, 0.07], [0.046, 0.1], [0.043, 0.103], [0.039, 0.1], [0.038, 0.07],
  ], mats.boot, 20);
  g.add(shaft);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.0445, 0.0045, 6, 22), mats.bootRim);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.101;
  rim.castShadow = true;
  g.add(rim);
  // pull tab at the back
  const tab = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.024, 0.005), mats.bootRim);
  tab.position.set(0, 0.106, -0.044);
  g.add(tab);
  // foot
  const foot = new THREE.Mesh(new THREE.CapsuleGeometry(0.036, 0.075, 6, 14), mats.boot);
  foot.rotation.x = Math.PI / 2;
  foot.scale.set(1.0, 1.0, 0.8);
  foot.position.set(0, -0.038, 0.026);
  foot.castShadow = true;
  g.add(foot);
  // toe cap line
  const toe = new THREE.Mesh(new THREE.SphereGeometry(0.036, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), mats.bootRim);
  toe.rotation.x = Math.PI / 2;
  toe.scale.set(1.02, 0.9, 0.84);
  toe.position.set(0, -0.04, 0.064);
  g.add(toe);
  // sole
  const shape = new THREE.Shape();
  const L = 0.082, W = 0.039, r = 0.034;
  shape.moveTo(-W + 0.004, -L + r);
  shape.quadraticCurveTo(-W, -L, -W + r * 0.6, -L);
  shape.lineTo(W - r * 0.6, -L);
  shape.quadraticCurveTo(W, -L, W - 0.004, -L + r);
  shape.lineTo(W + 0.002, L - r);
  shape.quadraticCurveTo(W, L + 0.004, 0, L + 0.006);
  shape.quadraticCurveTo(-W, L + 0.004, -W - 0.002, L - r);
  shape.closePath();
  const sg = new THREE.ExtrudeGeometry(shape, { depth: 0.017, bevelEnabled: true, bevelThickness: 0.003, bevelSize: 0.003, bevelSegments: 1, curveSegments: 6 });
  sg.rotateX(Math.PI / 2);
  const sole = new THREE.Mesh(sg, mats.sole);
  sole.position.set(0, -ANKLE_H + 0.02, 0.024);
  sole.castShadow = true;
  g.add(sole);
  return g;
}

export class Kid {
  constructor(scene) {
    const mats = {
      skin: new THREE.MeshStandardMaterial({ color: '#efc3a0', roughness: 0.55 }),
      shirt: new THREE.MeshStandardMaterial({ color: '#f3f1ea', roughness: 0.92 }),
      shorts: new THREE.MeshStandardMaterial({ color: '#2d4568', roughness: 0.86 }),
      hair: new THREE.MeshStandardMaterial({ color: '#3a291e', roughness: 0.5 }),
      eye: new THREE.MeshStandardMaterial({ color: '#15100c', roughness: 0.12 }),
      boot: new THREE.MeshPhysicalMaterial({ color: '#f5c318', roughness: 0.32, clearcoat: 0.7, clearcoatRoughness: 0.12, envMapIntensity: 1.1 }),
      bootRim: new THREE.MeshPhysicalMaterial({ color: '#e6ab08', roughness: 0.38, clearcoat: 0.5, clearcoatRoughness: 0.2 }),
      sole: new THREE.MeshStandardMaterial({ color: '#34322f', roughness: 0.85 }),
      cheek: new THREE.MeshStandardMaterial({ color: '#f0a894', roughness: 0.6, transparent: true, opacity: 0.35, depthWrite: false }),
    };
    this.mats = mats;
    const root = new THREE.Group();
    this.root = root;
    scene.add(root);

    // --- body parts ---------------------------------------------------------
    this.pelvisMesh = lathe([
      [0.001, -0.075], [0.07, -0.07], [0.1, -0.04], [0.105, -0.005], [0.098, 0.02], [0.09, 0.03], [0.001, 0.032],
    ], mats.shorts);
    this.pelvisMesh.scale.set(1, 1, 0.8);
    root.add(this.pelvisMesh);

    this.torso = lathe([
      [0.001, -0.02], [0.108, -0.02], [0.112, 0.05], [0.113, 0.11], [0.106, 0.18], [0.097, 0.23], [0.077, 0.265], [0.04, 0.285], [0.001, 0.288],
    ], mats.shirt);
    this.torso.scale.set(1, 1, 0.78);
    root.add(this.torso);

    // hem: a short flared skirt of the shirt that lags behind the body
    this.hem = lathe([[0.108, 0.03], [0.116, -0.01], [0.121, -0.04], [0.118, -0.045], [0.11, -0.01], [0.104, 0.03]], mats.shirt, 20);
    this.hem.scale.set(1, 1, 0.8);
    root.add(this.hem);
    this.hemRot = new THREE.Vector2();
    this.hemVel = new THREE.Vector2();

    this.neck = capsule(0.028, 0.03, mats.skin, 8);
    root.add(this.neck);

    const head = new THREE.Group();
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.094, 24, 18), mats.skin);
    skull.scale.set(0.96, 1.02, 0.98);
    skull.castShadow = true;
    head.add(skull);
    const jaw = new THREE.Mesh(new THREE.SphereGeometry(0.07, 18, 12), mats.skin);
    jaw.position.set(0, -0.032, 0.022);
    jaw.scale.set(1.05, 0.9, 1);
    head.add(jaw);
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.62), mats.hair);
    hair.rotation.x = -0.42;
    hair.position.set(0, 0.012, -0.008);
    hair.scale.set(1.0, 1.0, 1.02);
    hair.castShadow = true;
    head.add(hair);
    const back = new THREE.Mesh(new THREE.SphereGeometry(0.097, 20, 12, 0, Math.PI * 2, Math.PI * 0.35, Math.PI * 0.4), mats.hair);
    back.rotation.x = 0.9;
    back.position.set(0, -0.005, -0.012);
    head.add(back);
    // a little tuft on top that bobs
    this.tuft = new THREE.Mesh(new THREE.ConeGeometry(0.018, 0.05, 6), mats.hair);
    this.tuft.position.set(0.01, 0.1, -0.01);
    this.tuft.rotation.z = -0.4;
    head.add(this.tuft);
    for (const s of [-1, 1]) {
      const ear = new THREE.Mesh(new THREE.SphereGeometry(0.02, 10, 8), mats.skin);
      ear.position.set(s * 0.09, -0.005, 0.0);
      ear.scale.set(0.5, 1, 0.8);
      head.add(ear);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.0105, 10, 8), mats.eye);
      eye.position.set(s * 0.034, 0.002, 0.086);
      eye.scale.set(1, 1.15, 0.6);
      head.add(eye);
      const cheek = new THREE.Mesh(new THREE.CircleGeometry(0.016, 12), mats.cheek);
      cheek.position.set(s * 0.05, -0.028, 0.083);
      cheek.rotation.y = s * 0.45;
      head.add(cheek);
    }
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.011, 8, 6), mats.skin);
    nose.position.set(0, -0.016, 0.094);
    head.add(nose);
    root.add(head);
    this.head = head;

    // legs
    this.legs = [];
    for (const side of [-1, 1]) {
      const thigh = capsule(0.045, THIGH, mats.skin);
      const shortsLeg = lathe([[0.062, 0.0], [0.064, 0.05], [0.062, 0.1], [0.055, 0.105], [0.05, 0.0]], mats.shorts, 14);
      const shin = capsule(0.036, SHIN, mats.skin);
      const boot = makeBoot(mats);
      root.add(thigh, shortsLeg, shin, boot);
      this.legs.push({
        side, thigh, shortsLeg, shin, boot,
        foot: new THREE.Vector3(side * 0.07, 0, 0), // planted sole position
        yaw: Math.PI,
        planted: true,
        swingT: 0,
        swingDur: 0.3,
        from: new THREE.Vector3(),
        to: new THREE.Vector3(),
        fromYaw: 0,
        toYaw: 0,
        pitch: 0,
        lift: 0.05,
        knee: new THREE.Vector3(),
        ankle: new THREE.Vector3(),
        hip: new THREE.Vector3(),
        lastContact: 0,
      });
    }
    // arms
    this.arms = [];
    for (const side of [-1, 1]) {
      const upper = capsule(0.034, 0.135, mats.shirt);
      const fore = capsule(0.029, 0.12, mats.shirt);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.03, 12, 10), mats.skin);
      hand.scale.set(0.85, 1.1, 1);
      hand.castShadow = true;
      root.add(upper, fore, hand);
      this.arms.push({ side, upper, fore, hand, swing: 0, raise: 0, bend: 0.3, reach: 0 });
    }

    // --- state --------------------------------------------------------------
    this.pos = new THREE.Vector3();
    this.heading = Math.PI;
    this.pelvis = new THREE.Vector3(0, STAND_H, 0);
    this.pelvisVel = new THREE.Vector3();
    this.lean = 0;
    this.twist = 0;
    this.sway = 0;
    this.headYaw = 0;
    this.headPitch = 0;
    this.poseFall = 0;
    this.poseBubble = 0;
    this.poseEdge = 0;
    this.poseLand = 0;
    this.poseCheer = 0;
    this.posePoint = 0;
    this.pointDir = new THREE.Vector3();
    this.kick = 0;
    this.kickLeg = 1;
    this.time = 0;
    this.headWorld = new THREE.Vector3();
    this.chest = new THREE.Vector3();
    this.grounded = true;
    this.stepCount = 0;
    this.lastStepSide = 1;
  }

  // Place feet under the body instantly (after landing / spawning).
  resetFeet(pos, heading, supportY) {
    const fx = Math.cos(heading), fz = -Math.sin(heading);
    for (const L of this.legs) {
      const x = pos.x + fx * L.side * 0.07, z = pos.z + fz * L.side * 0.07;
      L.foot.set(x, supportY(x, z, pos.y), z);
      L.planted = true;
      L.yaw = heading;
    }
    this.pelvis.set(pos.x, pos.y + STAND_H, pos.z);
  }

  startSwing(L, target, yaw, dur, lift) {
    L.planted = false;
    L.swingT = 0;
    L.swingDur = dur;
    L.from.copy(L.foot);
    L.to.copy(target);
    L.fromYaw = L.yaw;
    L.toYaw = yaw;
    L.lift = lift;
  }

  update(dt, s) {
    this.time += dt;
    const t = this.time;
    this.pos.copy(s.pos);
    this.heading = s.heading;
    const fwdX = Math.sin(s.heading), fwdZ = Math.cos(s.heading);
    const sideX = Math.cos(s.heading), sideZ = -Math.sin(s.heading); // +side = kid's left? (see resetFeet)
    const speed = s.speed;
    const grounded = s.grounded;
    this.grounded = grounded;

    // pose blend weights
    this.poseFall = damp(this.poseFall, s.mode === 'fall' ? 1 : 0, 6, dt);
    this.poseBubble = damp(this.poseBubble, s.mode === 'bubble' ? 1 : 0, 4, dt);
    this.poseEdge = damp(this.poseEdge, s.mode === 'edge' ? 1 : 0, 8, dt);
    this.poseLand = Math.max(0, this.poseLand - dt * 2.2);
    this.poseCheer = Math.max(0, this.poseCheer - dt * 0.7);
    this.posePoint = damp(this.posePoint, s.point ? 1 : 0, 3, dt);
    if (s.point) this.pointDir.copy(s.point);
    this.kick = Math.max(0, this.kick - dt * 3.2);
    const air = Math.max(this.poseFall, this.poseBubble);

    // --- feet -----------------------------------------------------------------
    const stepLen = clamp(0.2 + speed * 0.12, 0.2, 0.5);
    const swingDur = clamp(0.82 * stepLen / Math.max(speed, 0.3), 0.19, 0.34);
    const lift = 0.04 + Math.min(speed, 3) * 0.022;
    let anySwing = false;
    for (const L of this.legs) if (!L.planted) anySwing = true;

    if (grounded && air < 0.5) {
      // advance swings
      for (const L of this.legs) {
        if (L.planted) {
          // follow a moving surface (rising rainbow) under the planted sole
          const y = s.supportY(L.foot.x, L.foot.z, s.pos.y);
          if (Math.abs(y - L.foot.y) < 0.6) L.foot.y = y;
          continue;
        }
        L.swingT += dt / L.swingDur;
        // retarget towards where the body will be (keeps curved walks tidy)
        if (L.swingT < 0.7 && speed > 0.1) {
          const remain = (1 - L.swingT) * L.swingDur;
          const tx = s.pos.x + s.vel.x * remain + fwdX * stepLen * 0.5 + sideX * L.side * 0.068;
          const tz = s.pos.z + s.vel.z * remain + fwdZ * stepLen * 0.5 + sideZ * L.side * 0.068;
          L.to.x = lerp(L.to.x, tx, 0.35);
          L.to.z = lerp(L.to.z, tz, 0.35);
          L.toYaw = s.heading;
        }
        const u = clamp(L.swingT, 0, 1);
        const e = u * u * (3 - 2 * u);
        L.to.y = s.supportY(L.to.x, L.to.z, s.pos.y);
        L.foot.lerpVectors(L.from, L.to, e);
        L.foot.y += Math.sin(Math.PI * u) * L.lift + Math.max(0, L.to.y - L.from.y) * Math.sin(Math.PI * u) * 0.6;
        L.yaw = L.fromYaw + wrapAngle(L.toYaw - L.fromYaw) * e;
        // heel-off then toe-up before strike
        L.pitch = u < 0.3 ? lerp(0.45, 0, u / 0.3) * Math.min(1, speed) : u > 0.7 ? -0.3 * Math.sin((u - 0.7) / 0.3 * Math.PI) * Math.min(1, speed + 0.3) : 0;
        if (L.swingT >= 1) {
          L.planted = true;
          L.foot.copy(L.to);
          L.pitch = 0;
          L.yaw = L.toYaw;
          this.stepCount++;
          this.lastStepSide = L.side;
          if (s.onContact) s.onContact(L, L.foot, L.yaw, L.side, speed);
        }
      }
      // start a new step?
      anySwing = this.legs.some((L) => !L.planted);
      if (!anySwing) {
        let pick = null, worst = 0;
        for (const L of this.legs) {
          // ideal spot for this foot under/ahead of the body
          const ix = s.pos.x + sideX * L.side * 0.068, iz = s.pos.z + sideZ * L.side * 0.068;
          const dx = L.foot.x - ix, dz = L.foot.z - iz;
          const behind = -(dx * fwdX + dz * fwdZ);
          const off = Math.hypot(dx, dz);
          const yawOff = Math.abs(wrapAngle(L.yaw - s.heading));
          let need = 0;
          if (speed > 0.12) need = behind - stepLen * 0.22 + (L.side === this.lastStepSide ? -0.05 : 0.05);
          else need = Math.max(off - 0.09, yawOff > 0.6 ? 0.01 : -1);
          if (need > worst) { worst = need; pick = L; }
        }
        if (pick) {
          const moving = speed > 0.12;
          const dur = moving ? swingDur : 0.26;
          const ahead = moving ? stepLen * 0.5 + speed * dur * 0.9 : 0;
          const tx = s.pos.x + fwdX * ahead + sideX * pick.side * 0.068;
          const tz = s.pos.z + fwdZ * ahead + sideZ * pick.side * 0.068;
          _a.set(tx, s.supportY(tx, tz, s.pos.y), tz);
          this.startSwing(pick, _a, s.heading, dur, moving ? lift : 0.03);
        }
      }
    } else {
      // airborne: legs dangle / tuck relative to the pelvis
      for (const L of this.legs) {
        L.planted = false;
        L.swingT = 0;
        const tuck = this.poseBubble;
        const dangle = Math.sin(t * 7 + L.side) * 0.03 * this.poseFall;
        const tx = this.pelvis.x + sideX * L.side * 0.075 + fwdX * (0.05 + tuck * 0.16 + dangle);
        const tz = this.pelvis.z + sideZ * L.side * 0.075 + fwdZ * (0.05 + tuck * 0.16 + dangle);
        const ty = this.pelvis.y - lerp(0.42, 0.26, tuck) + dangle;
        L.foot.x = damp(L.foot.x, tx, 14, dt);
        L.foot.y = damp(L.foot.y, ty, 14, dt);
        L.foot.z = damp(L.foot.z, tz, 14, dt);
        L.yaw = dampAngle(L.yaw, s.heading, 8, dt);
        L.pitch = damp(L.pitch, 0.2 + tuck * 0.2, 6, dt);
      }
    }

    // --- pelvis ---------------------------------------------------------------
    let swingPhase = 0, stanceSide = 0;
    for (const L of this.legs) {
      if (!L.planted) { swingPhase = Math.sin(Math.PI * clamp(L.swingT, 0, 1)); stanceSide = -L.side; }
    }
    const run = smoothstep(1.6, 2.8, speed);
    let hipH = STAND_H - 0.012 * run + swingPhase * (0.016 + 0.01 * run) - this.poseLand * 0.12 - this.poseEdge * 0.02;
    hipH -= this.poseBubble * 0.05;
    const targetSway = stanceSide * 0.012 * Math.min(speed, 1.5);
    this.sway = damp(this.sway, targetSway, 10, dt);
    let px = s.pos.x + sideX * this.sway;
    let pz = s.pos.z + sideZ * this.sway;
    let py = s.pos.y + hipH;
    if (air < 0.5) {
      // keep both feet reachable
      for (const L of this.legs) {
        const hx = px + sideX * L.side * HIP_W, hz = pz + sideZ * L.side * HIP_W;
        const horiz = Math.hypot(L.foot.x - hx, L.foot.z - hz);
        const reach = LEG * 0.985;
        if (horiz < reach) {
          const maxY = L.foot.y + ANKLE_H + Math.sqrt(reach * reach - horiz * horiz);
          if (py > maxY) py = maxY;
        }
      }
    }
    if (air > 0.5 || !grounded) {
      this.pelvis.set(px, s.pos.y + STAND_H, pz);
    } else {
      this.pelvis.x = px;
      this.pelvis.z = pz;
      this.pelvis.y = damp(this.pelvis.y, py, 22, dt);
    }

    // twist of pelvis follows the swinging leg
    let twistT = 0;
    for (const L of this.legs) {
      const dx = L.foot.x - s.pos.x, dz = L.foot.z - s.pos.z;
      twistT += (dx * fwdX + dz * fwdZ) * L.side;
    }
    this.twist = damp(this.twist, clamp(twistT * 0.9, -0.25, 0.25), 12, dt);
    const leanT = 0.06 + Math.min(speed, 3) * 0.05 + (s.slope || 0) * 0.35 - this.poseEdge * 0.25 + this.poseFall * -0.1 + this.poseBubble * -0.2 + this.poseLand * 0.35;
    this.lean = damp(this.lean, leanT, 6, dt);

    const pelvisYaw = s.heading + this.twist;
    _e.set(0, pelvisYaw, this.sway * -2, 'YXZ');
    this.pelvisMesh.position.copy(this.pelvis);
    this.pelvisMesh.quaternion.setFromEuler(_e);

    // torso: lean and counter-twist; breathing when still
    const breath = Math.sin(t * 2.2) * 0.004 * (1 - Math.min(speed, 1));
    const torsoYaw = s.heading - this.twist * 0.7;
    _e.set(this.lean, torsoYaw, this.sway * 1.5, 'YXZ');
    this.torso.quaternion.setFromEuler(_e);
    this.torso.position.copy(this.pelvis).addScaledVector(UP, 0.035);
    this.torso.scale.set(1 + breath, 1, 0.78 + breath);

    // hem spring (lags behind accelerations)
    this.pelvisVel.subVectors(this.pelvis, this._lastPelvis || this.pelvis).divideScalar(Math.max(dt, 1e-3));
    this._lastPelvis = (this._lastPelvis || new THREE.Vector3()).copy(this.pelvis);
    const lvF = this.pelvisVel.x * fwdX + this.pelvisVel.z * fwdZ;
    const lvS = this.pelvisVel.x * sideX + this.pelvisVel.z * sideZ;
    const hemTX = clamp(-lvF * 0.06 + this.pelvisVel.y * 0.1, -0.35, 0.35) - air * 0.2;
    const hemTZ = clamp(lvS * 0.08, -0.3, 0.3);
    this.hemVel.x += ((hemTX - this.hemRot.x) * 90 - this.hemVel.x * 9) * dt;
    this.hemVel.y += ((hemTZ - this.hemRot.y) * 90 - this.hemVel.y * 9) * dt;
    this.hemRot.x += this.hemVel.x * dt;
    this.hemRot.y += this.hemVel.y * dt;
    _e.set(this.lean * 0.6 + this.hemRot.x, torsoYaw, this.hemRot.y, 'YXZ');
    this.hem.quaternion.setFromEuler(_e);
    this.hem.position.copy(this.pelvis).addScaledVector(UP, 0.038);

    // chest top (neck base) in world
    _a.set(0, 0.275, 0).applyQuaternion(this.torso.quaternion);
    _a.y *= 1;
    this.chest.copy(this.torso.position).add(_a);
    this.neck.position.copy(this.chest);
    this.neck.quaternion.copy(this.torso.quaternion);

    // --- head look --------------------------------------------------------------
    let wantYaw = 0, wantPitch = -0.05 - Math.min(speed, 2) * 0.04;
    if (s.look) {
      _a.subVectors(s.look, this.chest);
      const yawTo = Math.atan2(_a.x, _a.z);
      wantYaw = clamp(wrapAngle(yawTo - torsoYaw), -1.15, 1.15);
      wantPitch = clamp(-Math.atan2(_a.y - 0.1, Math.hypot(_a.x, _a.z)), -0.75, 0.55);
    }
    wantPitch += this.poseEdge * 0.5 + this.poseBubble * 0.15;
    if (this.poseFall > 0.5) wantPitch = 0.45;
    this.headYaw = damp(this.headYaw, wantYaw, 5, dt);
    this.headPitch = damp(this.headPitch, wantPitch, 5, dt);
    _e.set(this.headPitch - this.lean * 0.7, torsoYaw + this.headYaw, -this.sway * 2 + Math.sin(t * 0.7) * 0.02, 'YXZ');
    this.head.quaternion.setFromEuler(_e);
    _a.set(0, 0.095, 0.004).applyQuaternion(this.head.quaternion);
    this.head.position.copy(this.chest).addScaledVector(UP, 0.028).add(_a);
    this.headWorld.copy(this.head.position);
    this.tuft.rotation.x = Math.sin(t * 9) * 0.06 * Math.min(speed, 1.5) + this.pelvisVel.y * -0.2;

    // --- legs IK --------------------------------------------------------------
    for (const L of this.legs) {
      const hip = L.hip;
      _a.set(L.side * HIP_W, -0.02, 0).applyQuaternion(this.pelvisMesh.quaternion);
      hip.copy(this.pelvis).add(_a);
      // ankle from sole position + foot pitch
      const ankle = L.ankle;
      ankle.copy(L.foot);
      ankle.y += ANKLE_H + Math.max(0, L.pitch) * 0.06;
      // kick: lift the kicking foot forward
      if (this.kick > 0 && L.side === this.kickLeg) {
        const k = Math.sin(this.kick * Math.PI);
        ankle.x += fwdX * k * 0.2;
        ankle.z += fwdZ * k * 0.2;
        ankle.y += k * 0.07;
      }
      _b.subVectors(ankle, hip);
      let d = _b.length();
      const maxD = LEG * 0.999;
      if (d > maxD) {
        _b.multiplyScalar(maxD / d);
        ankle.copy(hip).add(_b);
        d = maxD;
      }
      d = Math.max(d, 0.08);
      _b.normalize();
      const a = (THIGH * THIGH - SHIN * SHIN + d * d) / (2 * d);
      const h = Math.sqrt(Math.max(THIGH * THIGH - a * a, 0));
      // knee points forward (and a little outward)
      _c.set(fwdX + sideX * L.side * 0.12, 0, fwdZ + sideZ * L.side * 0.12);
      _c.addScaledVector(_b, -_c.dot(_b)).normalize();
      L.knee.copy(hip).addScaledVector(_b, a).addScaledVector(_c, h);
      segment(L.thigh, hip, L.knee);
      segment(L.shin, L.knee, ankle);
      // shorts leg sleeve over the top of the thigh
      segment(L.shortsLeg, _d.copy(hip).addScaledVector(UP, 0.01), L.knee);
      L.shortsLeg.position.copy(hip).addScaledVector(UP, 0.01);
      // boot
      _e.set(L.pitch, L.yaw, 0, 'YXZ');
      L.boot.quaternion.setFromEuler(_e);
      L.boot.position.copy(ankle);
    }

    // --- arms -----------------------------------------------------------------
    for (const A of this.arms) {
      _a.set(A.side * 0.098, 0.245, 0).applyQuaternion(this.torso.quaternion);
      const shoulder = _c.copy(this.torso.position).add(_a);
      // swing opposite to same-side leg
      const leg = this.legs[A.side === -1 ? 0 : 1];
      const lf = (leg.foot.x - s.pos.x) * fwdX + (leg.foot.z - s.pos.z) * fwdZ;
      const swingT = clamp(-lf / Math.max(stepLen * 0.5, 0.1), -1.2, 1.2) * (0.3 + Math.min(speed, 3) * 0.16);
      A.swing = damp(A.swing, grounded && air < 0.5 ? swingT : 0, 14, dt);
      let raise = 0.12 + this.poseEdge * 1.0 + this.poseFall * 2.3 + this.poseBubble * 1.2 + this.poseCheer * 2.6 + this.poseLand * 0.5;
      raise += Math.sin(t * 11 + A.side) * 0.25 * this.poseEdge + Math.sin(t * 8 + A.side * 2) * 0.2 * this.poseFall;
      let bend = 0.35 + Math.min(speed, 3) * 0.28 + this.poseBubble * 0.4 - this.poseFall * 0.2;
      // upper arm direction: down, rotated forward by swing, outward by raise
      _b.set(0, -1, 0);
      _e.set(-A.swing, torsoYaw, A.side * raise, 'YXZ');
      _q.setFromEuler(_e);
      _b.applyQuaternion(_q);
      // pointing / reaching overrides
      if (this.posePoint > 0.01 && A.side === 1) {
        _d.copy(this.pointDir).sub(shoulder).normalize();
        _b.lerp(_d, this.posePoint).normalize();
        bend *= 1 - this.posePoint * 0.8;
      }
      const elbow = _a.copy(shoulder).addScaledVector(_b, 0.135);
      segment(A.upper, shoulder, elbow);
      // forearm bends forward
      const fwd = _d.set(fwdX, 0, fwdZ);
      const axis = new THREE.Vector3().crossVectors(_b, fwd);
      if (axis.lengthSq() < 1e-4) axis.set(sideX, 0, sideZ);
      axis.normalize();
      _q2.setFromAxisAngle(axis, bend);
      const foreDir = _b.clone().applyQuaternion(_q2);
      const wrist = elbow.clone().addScaledVector(foreDir, 0.12);
      segment(A.fore, elbow, wrist);
      A.hand.position.copy(wrist).addScaledVector(foreDir, 0.022);
      A.hand.quaternion.copy(A.fore.quaternion);
    }
  }

  cheer() { this.poseCheer = 1; }
  land(strength) { this.poseLand = Math.min(1, strength); }
  doKick(side) { this.kick = 1; this.kickLeg = side; }
}
