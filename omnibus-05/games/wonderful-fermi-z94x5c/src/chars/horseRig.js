// Unicorn animation: pose application, two-bone leg IK, gaits with planted hooves,
// lying down / rising, jumping, head look and small life motions.
import * as THREE from '../../lib/three.module.js';
import { clamp, lerp, damp, smoothstep, TAU, DEG, easeInOut } from '../core/math.js';

const _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion();
const _e = new THREE.Euler();
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3();
const AX = new THREE.Vector3(1, 0, 0), AY = new THREE.Vector3(0, 1, 0), AZ = new THREE.Vector3(0, 0, 1);

const FRONT = ['scap', 'hum', 'fore', 'fcan', 'fpas', 'fhoof'];
const HIND = ['fem', 'tib', 'hcan', 'hpas', 'hhoof'];
export const LEGS = ['FL', 'FR', 'HL', 'HR'];

const dir2 = (a) => [Math.sin(a), -Math.cos(a)]; // (z, y) of a bone with sagittal angle a

export class HorseRig {
  constructor(u) {
    this.u = u;
    this.b = u.bones;
    this.sk = u.sk;
    const RP = u.sk.restObjPos;
    this.bodyRest = RP.body.clone();
    this.leg = {};
    for (const id of LEGS) {
      const front = id[0] === 'F';
      const side = id[1];
      const names = (front ? FRONT : HIND).map((n) => n + side);
      const L = [], a0 = [];
      for (const n of names) {
        const b = this.b[n];
        const h = b.userData.head, t = b.userData.tail;
        const dz = t.z - h.z, dy = t.y - h.y;
        L.push(Math.hypot(dz, dy));
        a0.push(Math.atan2(dz, -dy));
      }
      // rest root joint (scapula head / femur head) relative to body origin
      const rootRest = this.b[names[0]].userData.head.clone().sub(this.bodyRest);
      const jointRest = this.b[names[front ? 1 : 0]].userData.head.clone().sub(this.bodyRest);
      const tip = this.b[names[names.length - 1]].userData.tail.clone().sub(this.bodyRest);
      const lineRest = Math.atan2(tip.z - jointRest.z, jointRest.y - tip.y);
      this.leg[id] = { id, front, side, names, L, a0, rootRest, jointRest, lineRest, x: this.b[names[0]].userData.head.x };
    }
    this.objQ = {};
  }

  restPose() {
    const legs = {};
    for (const id of LEGS) legs[id] = this.leg[id].a0.slice();
    return {
      off: new THREE.Vector3(),
      pitch: 0,
      roll: 0,
      yaw: 0,
      chest: 0,
      hips: 0,
      neck: [
        [0, 0],
        [0, 0],
        [0, 0],
      ],
      head: [0, 0, 0],
      ears: [
        [0, 0],
        [0, 0],
      ],
      tail: [
        [0, 0],
        [0, 0],
      ],
      legs,
      splay: { FL: 0, FR: 0, HL: 0, HR: 0 },
    };
  }

  static copyPose(dst, src) {
    dst.off.copy(src.off);
    dst.pitch = src.pitch;
    dst.roll = src.roll;
    dst.yaw = src.yaw;
    dst.chest = src.chest;
    dst.hips = src.hips;
    for (let i = 0; i < 3; i++) {
      dst.neck[i][0] = src.neck[i][0];
      dst.neck[i][1] = src.neck[i][1];
    }
    for (let i = 0; i < 3; i++) dst.head[i] = src.head[i];
    for (let i = 0; i < 2; i++) {
      dst.ears[i][0] = src.ears[i][0];
      dst.ears[i][1] = src.ears[i][1];
      dst.tail[i][0] = src.tail[i][0];
      dst.tail[i][1] = src.tail[i][1];
    }
    for (const id of LEGS) {
      for (let i = 0; i < src.legs[id].length; i++) dst.legs[id][i] = src.legs[id][i];
      dst.splay[id] = src.splay[id];
    }
    return dst;
  }

  static copyBody(dst, src) {
    const legs = dst.legs, splay = dst.splay;
    const saveL = {}, saveS = {};
    for (const id of LEGS) {
      saveL[id] = legs[id].slice();
      saveS[id] = splay[id];
    }
    HorseRig.copyPose(dst, src);
    for (const id of LEGS) {
      for (let i = 0; i < saveL[id].length; i++) legs[id][i] = saveL[id][i];
      splay[id] = saveS[id];
    }
    return dst;
  }

  // dst = lerp(dst, src, t) (in place)
  static blendPose(dst, src, t, legsOnly = false, legMask = null) {
    if (t <= 0) return dst;
    if (!legsOnly) {
      dst.off.lerp(src.off, t);
      dst.pitch = lerp(dst.pitch, src.pitch, t);
      dst.roll = lerp(dst.roll, src.roll, t);
      dst.yaw = lerp(dst.yaw, src.yaw, t);
      dst.chest = lerp(dst.chest, src.chest, t);
      dst.hips = lerp(dst.hips, src.hips, t);
      for (let i = 0; i < 3; i++) {
        dst.neck[i][0] = lerp(dst.neck[i][0], src.neck[i][0], t);
        dst.neck[i][1] = lerp(dst.neck[i][1], src.neck[i][1], t);
        dst.head[i] = lerp(dst.head[i], src.head[i], t);
      }
      for (let i = 0; i < 2; i++)
        for (let j = 0; j < 2; j++) {
          dst.ears[i][j] = lerp(dst.ears[i][j], src.ears[i][j], t);
          dst.tail[i][j] = lerp(dst.tail[i][j], src.tail[i][j], t);
        }
    }
    for (const id of LEGS) {
      const w = legMask ? t * legMask[id] : t;
      for (let i = 0; i < src.legs[id].length; i++) dst.legs[id][i] = lerp(dst.legs[id][i], src.legs[id][i], w);
      dst.splay[id] = lerp(dst.splay[id], src.splay[id], w);
    }
    return dst;
  }

  // Leg IK in the body frame. target: (z,y) of hoof ground contact in body space.
  // aCan, aPas, aHoof: body-frame angles of the distal bones. rootAngle: scapula/femur angle (front only)
  solveLeg(id, pose, tz, ty, aCan, aPas, aHoof, aScap) {
    const g = this.leg[id];
    const A = pose.legs[id];
    let sz, sy, k; // shoulder (humerus head) or hip (femur head)
    if (g.front) {
      const d = dir2(aScap);
      sz = g.rootRest.z + d[0] * g.L[0];
      sy = g.rootRest.y + d[1] * g.L[0];
      A[0] = aScap;
      k = 1;
    } else {
      sz = g.rootRest.z;
      sy = g.rootRest.y;
      k = 0;
    }
    const n = g.L.length;
    // distal chain upward from the hoof tip
    let hz = tz, hy = ty;
    let d = dir2(aHoof);
    hz -= d[0] * g.L[n - 1];
    hy -= d[1] * g.L[n - 1];
    d = dir2(aPas);
    hz -= d[0] * g.L[n - 2];
    hy -= d[1] * g.L[n - 2];
    d = dir2(aCan);
    const kz = hz - d[0] * g.L[n - 3];
    const ky = hy - d[1] * g.L[n - 3];
    // two bone IK from (sz,sy) to (kz,ky)
    const L1 = g.L[k], L2 = g.L[k + 1];
    let dz = kz - sz, dy = ky - sy;
    let D = Math.hypot(dz, dy);
    const Dmax = (L1 + L2) * 0.999, Dmin = Math.abs(L1 - L2) + 0.02;
    const reach = D / Dmax;
    D = clamp(D, Dmin, Dmax);
    const beta = Math.atan2(dz, -dy);
    const cosA = clamp((L1 * L1 + D * D - L2 * L2) / (2 * L1 * D), -1, 1);
    const Aang = Math.acos(cosA);
    const a1 = g.front ? beta - Aang : beta + Aang;
    const ez = sz + Math.sin(a1) * L1, ey = sy - Math.cos(a1) * L1;
    const a2 = Math.atan2(kz - ez, -(ky - ey));
    // if target was out of reach, distal angles stay but chain falls short (handled by caller)
    A[k] = a1;
    A[k + 1] = a2;
    A[k + 2] = aCan;
    A[k + 3] = aPas;
    A[k + 4] = aHoof;
    return reach;
  }

  // Apply pose to bones.
  apply(p) {
    const b = this.b;
    const RQ = this.sk.restObjQuat;
    const O = this.objQ;
    O.root = new THREE.Quaternion();
    // body
    const Qb = _q.setFromEuler(_e.set(p.pitch, p.yaw, p.roll, 'YXZ')).clone();
    this.Qb = Qb;
    O.body = Qb.clone().multiply(RQ.body);
    b.body.position.copy(b.body.userData.restLocalPos).add(p.off);
    b.body.quaternion.copy(O.body);
    // chest / hips relative pitch about lateral axis
    O.chest = Qb.clone().multiply(_q2.setFromAxisAngle(AX, p.chest)).multiply(RQ.chest);
    O.hips = Qb.clone().multiply(_q2.setFromAxisAngle(AX, p.hips)).multiply(RQ.hips);
    b.chest.quaternion.copy(O.body.clone().invert().multiply(O.chest));
    b.hips.quaternion.copy(O.body.clone().invert().multiply(O.hips));
    // neck/head/ears/tail: local deltas
    const loc = (name, rx, rz, ry = 0) => {
      const bn = b[name];
      bn.quaternion.copy(bn.userData.restLocalQuat);
      if (rx) bn.quaternion.multiply(_q2.setFromAxisAngle(AX, rx));
      if (rz) bn.quaternion.multiply(_q2.setFromAxisAngle(AZ, rz));
      if (ry) bn.quaternion.multiply(_q2.setFromAxisAngle(AY, ry));
    };
    loc('neck1', p.neck[0][0], p.neck[0][1]);
    loc('neck2', p.neck[1][0], p.neck[1][1]);
    loc('neck3', p.neck[2][0], p.neck[2][1]);
    loc('head', p.head[0], p.head[1], p.head[2]);
    loc('earL', p.ears[0][0], p.ears[0][1]);
    loc('earR', p.ears[1][0], -p.ears[1][1]);
    loc('tail1', p.tail[0][0], p.tail[0][1]);
    loc('tail2', p.tail[1][0], p.tail[1][1]);
    // legs (object-space orientation from body-frame sagittal angles)
    for (const id of LEGS) {
      const g = this.leg[id];
      const parentName = g.front ? 'chest' : 'hips';
      let parentQ = O[parentName];
      const sp = _q2.setFromAxisAngle(AZ, p.splay[id] * (g.side === 'L' ? 1 : -1)).clone();
      for (let i = 0; i < g.names.length; i++) {
        const n = g.names[i];
        const delta = new THREE.Quaternion().setFromAxisAngle(AX, g.a0[i] - p.legs[id][i]);
        const q = Qb.clone().multiply(sp).multiply(delta).multiply(RQ[n]);
        O[n] = q;
        b[n].quaternion.copy(parentQ.clone().invert().multiply(q));
        parentQ = q;
      }
    }
  }

  // body-space (rest-aligned, relative to body origin) -> root frame given pose
  bodyToRoot(pose, z, y, out) {
    _v.set(0, y, z).applyQuaternion(_q.setFromEuler(_e.set(pose.pitch, 0, 0)));
    out.set(0, this.bodyRest.y + pose.off.y + _v.y, this.bodyRest.z + pose.off.z + _v.z);
    return out;
  }
  rootToBody(pose, rz, ry, out) {
    _v.set(0, ry - this.bodyRest.y - pose.off.y, rz - this.bodyRest.z - pose.off.z);
    _v.applyQuaternion(_q.setFromEuler(_e.set(-pose.pitch, 0, 0)));
    out.set(0, _v.y, _v.z);
    return out;
  }
}

// ------------------------------------------------------------------ poses
function legPose(rig, id, angles) {
  return angles.map((a) => a * DEG);
}

export function makePoseLibrary(rig) {
  const P = {};
  const base = () => rig.restPose();
  // lying (sternal), legs tucked
  const lie = base();
  lie.off.set(0, -0.56, -0.02);
  lie.pitch = 0.0;
  lie.legs.FL = legPose(rig, 'FL', [38, -20, 82, -95, -125, -150]);
  lie.legs.FR = legPose(rig, 'FR', [38, -10, 76, -92, -120, -150]);
  lie.legs.HL = legPose(rig, 'HL', [44, -64, 86, 100, 112]);
  lie.legs.HR = legPose(rig, 'HR', [42, -68, 82, 98, 108]);
  lie.splay = { FL: 0.06, FR: 0.06, HL: 0.22, HR: 0.22 };
  lie.neck = [
    [0.12, 0],
    [0.08, 0],
    [0.04, 0],
  ];
  lie.head = [0.0, 0, 0];
  lie.tail = [
    [-0.25, 0.25],
    [-0.2, 0],
  ];
  P.lie = lie;
  // kneeling in front (front knees down, hind still standing)
  const kf = base();
  kf.off.set(0, -0.3, 0.02);
  kf.pitch = 0.32; // nose down
  kf.legs.FL = legPose(rig, 'FL', [30, -32, 62, -88, -120, -150]);
  kf.legs.FR = legPose(rig, 'FR', [30, -28, 58, -86, -118, -150]);
  kf.neck = [
    [0.05, 0],
    [0.0, 0],
    [-0.1, 0],
  ];
  kf.head = [-0.15, 0, 0];
  P.kneelFront = kf;
  // rising: front legs forward, hind still folded
  const rf = base();
  rf.off.set(0, -0.32, 0.05);
  rf.pitch = -0.32; // nose up
  rf.legs.FL = legPose(rig, 'FL', [40, -10, 40, 40, 50, 30]);
  rf.legs.FR = legPose(rig, 'FR', [34, -30, 20, 10, 40, 20]);
  rf.legs.HL = legPose(rig, 'HL', [48, -70, 80, 96, 104]);
  rf.legs.HR = legPose(rig, 'HR', [46, -72, 78, 94, 100]);
  rf.splay = { FL: 0.03, FR: 0.03, HL: 0.18, HR: 0.18 };
  rf.neck = [
    [-0.15, 0],
    [-0.1, 0],
    [0.05, 0],
  ];
  P.riseFront = rf;
  // jump: gather, push, reach, flight
  const gather = base();
  gather.off.set(0, -0.1, -0.05);
  gather.pitch = -0.18;
  gather.legs.FL = legPose(rig, 'FL', [42, -45, 30, -80, -60, -40]);
  gather.legs.FR = legPose(rig, 'FR', [42, -50, 20, -70, -50, -30]);
  gather.legs.HL = legPose(rig, 'HL', [62, -55, 15, 30, 25]);
  gather.legs.HR = legPose(rig, 'HR', [60, -50, 18, 32, 25]);
  gather.neck = [
    [-0.15, 0],
    [-0.1, 0],
    [0.1, 0],
  ];
  gather.tail = [
    [-0.3, 0],
    [-0.2, 0],
  ];
  P.gather = gather;
  const push = base();
  push.off.set(0, 0.05, 0.05);
  push.pitch = -0.3;
  push.legs.FL = legPose(rig, 'FL', [48, -62, 20, -115, -80, -60]);
  push.legs.FR = legPose(rig, 'FR', [48, -66, 12, -105, -70, -50]);
  push.legs.HL = legPose(rig, 'HL', [10, -60, -40, -10, 10]);
  push.legs.HR = legPose(rig, 'HR', [8, -58, -38, -12, 8]);
  push.neck = [
    [-0.2, 0],
    [-0.12, 0],
    [0.12, 0],
  ];
  push.tail = [
    [-0.6, 0],
    [-0.3, 0],
  ];
  P.push = push;
  // reaching forward into the air (the key moment)
  const reach = base();
  reach.off.set(0, 0.02, 0.0);
  reach.pitch = -0.12;
  reach.legs.FL = legPose(rig, 'FL', [52, 12, 72, 66, 70, 52]); // lead leg extended forward
  reach.legs.FR = legPose(rig, 'FR', [48, -40, 34, -55, -40, -20]);
  reach.legs.HL = legPose(rig, 'HL', [-4, -48, -62, -40, -20]);
  reach.legs.HR = legPose(rig, 'HR', [-8, -44, -66, -45, -25]);
  reach.neck = [
    [-0.12, 0],
    [-0.04, 0],
    [0.04, 0],
  ];
  reach.tail = [
    [-0.8, 0],
    [-0.4, 0],
  ];
  P.reach = reach;
  return P;
}

// ------------------------------------------------------------------ gaits
const GAITS = {
  walk: { off: { HL: 0, FL: 0.25, HR: 0.5, FR: 0.75 }, duty: 0.64, lift: [0.1, 0.12], bob: 0.012, rock: 0.012, bobN: 2, fold: [70, 45] },
  trot: { off: { FL: 0, HR: 0.02, FR: 0.5, HL: 0.52 }, duty: 0.44, lift: [0.16, 0.16], bob: 0.03, rock: 0.01, bobN: 2, fold: [110, 70] },
  canter: { off: { HR: 0, HL: 0.22, FR: 0.27, FL: 0.48 }, duty: 0.38, lift: [0.26, 0.24], bob: 0.06, rock: 0.07, bobN: 1, fold: [125, 85] },
  gallop: { off: { HR: 0, HL: 0.11, FR: 0.43, FL: 0.55 }, duty: 0.3, lift: [0.3, 0.26], bob: 0.07, rock: 0.05, bobN: 1, fold: [135, 95] },
};

function gaitFor(v) {
  if (v < 1.8) return 'walk';
  if (v < 3.6) return 'trot';
  if (v < 7.5) return 'canter';
  return 'gallop';
}
function freqFor(g, v) {
  if (g === 'walk') return 0.62 + 0.22 * v;
  if (g === 'trot') return 1.25 + 0.06 * v;
  if (g === 'canter') return 1.5 + 0.05 * v;
  return 1.75 + 0.045 * v;
}

// ------------------------------------------------------------------ controller
/**
 * The controller owns the world transform of the horse (group), the locomotion
 * along a track, hoof planting and secondary motion.
 * track = { pos(s, out), tangent(s, out), height(x, z, legId) -> y, surfaceAt(s) -> 'ground'|'rainbow' }
 */
export class HorseController {
  constructor(unicorn) {
    this.u = unicorn;
    this.rig = new HorseRig(unicorn);
    this.lib = makePoseLibrary(this.rig);
    this.pose = this.rig.restPose();
    this.tmpPose = this.rig.restPose();
    this.restP = this.rig.restPose();
    this.group = unicorn.group;
    this.pos = new THREE.Vector3();
    this.heading = 0; // yaw
    this.track = null;
    this.s = 0;
    this.speed = 0;
    this.targetSpeed = 0;
    this.accel = 2.5;
    this.phase = 0;
    this.gaitName = 'walk';
    this.gaitOff = { ...GAITS.walk.off };
    this.gaitDuty = GAITS.walk.duty;
    this.down = 0; // 0 stand .. 1 lying
    this.downTarget = 0;
    this.downDir = 1;
    this.feet = {};
    for (const id of LEGS)
      this.feet[id] = { planted: true, pos: new THREE.Vector3(), lift: new THREE.Vector3(), target: new THREE.Vector3(), load: 0, justPlanted: false, airborne: false };
    this.groundFn = () => 0;
    this.listeners = { plant: [], lift: [] };
    this.look = { target: null, weight: 0, w: 0, yaw: 0, pitch: 0 };
    this.headLower = 0; // extra neck lowering (0..1)
    this.headLowerS = 0;
    this.lean = 0;
    this.blinkT = 2;
    this.blink = 0;
    this.eyeClose = 0; // contentment
    this.earTwitch = [0, 0];
    this.earTarget = [0, 0];
    this.tailSwish = 0;
    this.time = 0;
    this.jump = null;
    this.headShake = 0;
    this.nuzzle = 0;
    this.breath = 0;
    this.slope = 0;
    this.bodyY = 0;
    this.bodyPitch = 0;
    this.rootY = 0;
    this.extraPitch = 0;
    this.stomp = null;
    this.fromPose = this.rig.restPose();
    this.fromW = 0;
    this.rootYOff = 0;
  }

  on(ev, fn) {
    this.listeners[ev].push(fn);
  }
  _emit(ev, ...a) {
    for (const f of this.listeners[ev]) f(...a);
  }

  placeAt(pos, heading) {
    this.pos.copy(pos);
    this.heading = heading;
    this.track = null;
    this.speed = 0;
    this._updateGroup();
    this._resetFeet();
  }

  setTrack(track, s) {
    this.track = track;
    this.s = s;
    track.pos(s, this.pos);
    const t = track.tangent(s, _v);
    this.heading = Math.atan2(t.x, t.z);
    this._updateGroup();
    this._resetFeet();
  }

  _updateGroup() {
    this.group.position.copy(this.pos);
    this.group.rotation.set(0, this.heading, 0);
    this.group.updateMatrixWorld(true);
  }

  // world position of a leg's rest hoof contact for current root transform
  _restFoot(id, out, fwd = 0) {
    const g = this.rig.leg[id];
    const head = this.u.bones[g.names[g.names.length - 1]].userData;
    out.set(head.tail.x, 0, head.tail.z + fwd);
    out.applyAxisAngle(AY, this.heading).add(this.pos);
    out.y = this.groundFn(out.x, out.z, id);
    return out;
  }

  _resetFeet() {
    for (const id of LEGS) {
      const f = this.feet[id];
      this._restFoot(id, f.pos);
      f.planted = true;
      f.lift.copy(f.pos);
      f.target.copy(f.pos);
    }
  }

  update(dt) {
    this.time += dt;
    const P = this.pose;
    HorseRig.copyPose(P, this.restP);
    if (this.jump) this._updateJump(dt, P);
    else this._updateLocomotion(dt, P);
    if (this.fromW > 0) {
      HorseRig.blendPose(P, this.fromPose, this.fromW);
      this.fromW = Math.max(0, this.fromW - dt / 0.35);
    }
    if (Math.abs(this.rootYOff) > 1e-4) {
      this.pos.y += this.rootYOff;
      this.rootYOff *= Math.exp(-dt * 7);
      this._updateGroup();
    }
    this._secondary(dt, P);
    this.rig.apply(P);
    this.group.updateMatrixWorld(true);
    this.u.updateColliders();
  }

  // ---------------------------------------------------------------- locomotion
  _updateLocomotion(dt, P) {
    // speed
    const tv = this.down > 0.01 ? 0 : this.targetSpeed;
    if (this.speed < tv) this.speed = Math.min(tv, this.speed + this.accel * dt);
    else this.speed = Math.max(tv, this.speed - this.accel * 1.4 * dt);
    const v = this.speed;
    // advance along the track
    if (this.track && v > 0) {
      this.s += v * dt;
      if (this.track.length !== undefined && this.s > this.track.length) this.s = this.track.length;
      this.track.pos(this.s, this.pos);
      const t = this.track.tangent(this.s, _v);
      const hd = Math.atan2(t.x, t.z);
      this.heading = hd;
    }
    // ground under body
    const fwd = _v.set(Math.sin(this.heading), 0, Math.cos(this.heading));
    const yF = this.groundFn(this.pos.x + fwd.x * 0.55, this.pos.z + fwd.z * 0.55, 'F');
    const yH = this.groundFn(this.pos.x - fwd.x * 0.6, this.pos.z - fwd.z * 0.6, 'H');
    const slope = Math.atan2(yF - yH, 1.15);
    this.slope = damp(this.slope, slope, 12, dt);
    const yMid = (yF + yH) * 0.5;
    this.pos.y = yMid;
    this._updateGroup();

    // gait selection & phase
    const moving = v > 0.05 || this._anySwing();
    let gname = gaitFor(Math.max(v, 0.3));
    if (gname !== this.gaitName) this.gaitName = gname;
    const G = GAITS[this.gaitName];
    for (const id of LEGS) {
      let d = G.off[id] - this.gaitOff[id];
      d -= Math.round(d);
      this.gaitOff[id] += d * (1 - Math.exp(-3 * dt));
    }
    this.gaitDuty = damp(this.gaitDuty, G.duty, 3, dt);
    const f = freqFor(this.gaitName, Math.max(v, 0.6));
    this.freq = f;
    if (moving) this.phase = (this.phase + f * dt) % 1;
    const duty = this.gaitDuty;
    const gaitW = smoothstep(0.0, 0.6, v);

    // body pose
    P.pitch = -this.slope;
    const bobPh = this.phase * TAU * G.bobN;
    P.off.y = -0.02 * gaitW - G.bob * gaitW * (0.5 + 0.5 * Math.cos(bobPh - 0.6));
    P.pitch += G.rock * gaitW * Math.sin(this.phase * TAU - 0.4);
    P.off.z = 0;
    // legs
    const stride = v / Math.max(f, 0.01);
    for (const id of LEGS) {
      const ft = this.feet[id];
      const g = this.rig.leg[id];
      const psi = (((this.phase + this.gaitOff[id]) % 1) + 1) % 1;
      const inStance = !moving || psi < duty;
      ft.justPlanted = false;
      if (inStance) {
        if (!ft.planted) {
          ft.planted = true;
          ft.pos.copy(ft.target);
          ft.pos.y = this.groundFn(ft.pos.x, ft.pos.z, id);
          ft.justPlanted = true;
          this._emit('plant', id, ft.pos, v);
        }
        // keep planted hoof on (possibly moving) surface
        ft.pos.y = this.groundFn(ft.pos.x, ft.pos.z, id);
        ft.load = moving ? Math.sin(Math.PI * clamp(psi / duty)) : 0.6;
      } else {
        if (ft.planted) {
          ft.planted = false;
          ft.lift.copy(ft.pos);
          this._emit('lift', id, ft.pos, v);
        }
        ft.load = 0;
        // predicted touchdown
        const sw = (psi - duty) / (1 - duty);
        const tRemain = (1 - psi) / f;
        const ahead = v * tRemain + stride * duty * 0.5;
        if (this.track) {
          const sPred = this.s + ahead + (g.front ? 0.56 : -0.6);
          this.track.pos(sPred, _v2);
          const tan = this.track.tangent(sPred, _v);
          // lateral offset
          const lx = (g.side === 'L' ? 1 : -1) * 0.13;
          ft.target.set(_v2.x + tan.z * lx, 0, _v2.z - tan.x * lx);
        } else {
          this._restFoot(id, ft.target, ahead);
        }
        ft.target.y = this.groundFn(ft.target.x, ft.target.z, id);
        const e = easeInOut(clamp(sw * 1.08));
        ft.pos.lerpVectors(ft.lift, ft.target, e);
        ft.pos.y += G.lift[g.front ? 0 : 1] * Math.sin(Math.PI * clamp(sw)) * smoothstep(0.2, 1.2, v);
        ft.swing = sw;
      }
      ft.psi = psi;
      ft.inStance = inStance;
    }
    this._applyDown(P, false);
    this._solveLegs(P, G, moving);
    this._applyDown(P, true);
  }

  _anySwing() {
    for (const id of LEGS) if (!this.feet[id].planted) return true;
    return false;
  }

  _solveLegs(P, G, moving) {
    const rig = this.rig;
    const inv = _q.setFromAxisAngle(AY, -this.heading);
    for (const id of LEGS) {
      const ft = this.feet[id];
      const g = rig.leg[id];
      // hoof world -> root frame (z forward, y up)
      _v.copy(ft.pos).sub(this.pos).applyQuaternion(inv);
      const rz = _v.z, ry = _v.y;
      rig.rootToBody(P, rz, ry, _v2);
      const tz = _v2.z, ty = _v2.y;
      // distal angles
      const n = g.a0.length;
      const restCan = g.a0[n - 3], restPas = g.a0[n - 2], restHoof = g.a0[n - 1];
      let aCan, aPas, aHoof;
      const bodyP = P.pitch; // ground->body conversion
      if (ft.inStance || !moving) {
        // cannon follows the leg line (shoulder/hip joint -> hoof)
        const lineA = Math.atan2(tz - g.jointRest.z, g.jointRest.y - ty);
        aCan = restCan + (lineA - g.lineRest) * 0.85;
        const load = ft.load * smoothstep(0.3, 3, this.speed);
        aPas = restPas + (g.front ? 0.2 : 0.22) * load + (aCan - restCan) * 0.45;
        aHoof = restHoof + this.slope + P.pitch;
        if (moving) {
          // break-over at end of stance: heel lifts first
          const late = smoothstep(0.72, 1.0, ft.psi / this.gaitDuty);
          aHoof -= late * 0.55;
          aPas -= late * 0.35;
        }
      } else {
        const sw = ft.swing ?? 0;
        const fold = Math.sin(Math.PI * Math.min(1, sw * 1.1)) * G.fold[g.front ? 0 : 1] * DEG * smoothstep(0.2, 1.4, this.speed);
        const reachF = smoothstep(0.65, 1.0, sw);
        aCan = restCan - fold + reachF * (g.front ? 0.25 : 0.12) * smoothstep(1, 6, this.speed);
        aPas = restPas - fold * 0.8 + reachF * 0.2;
        aHoof = restHoof - fold * 1.0 + reachF * 0.3;
      }
      const scap = g.front ? g.a0[0] + (ft.inStance ? -0.12 * (ft.psi / this.gaitDuty - 0.5) : 0.1 * Math.sin(Math.PI * (ft.swing ?? 0))) * smoothstep(0.5, 4, this.speed) : 0;
      const reach = rig.solveLeg(id, P, tz, ty, aCan, aPas, aHoof, scap);
      ft.reach = reach;
    }
  }

  // ---------------------------------------------------------------- lying down / getting up
  _applyDown(P, legs) {
    const d = this.down;
    if (d <= 0.0001) return;
    const L = this.lib;
    const tmp = this.tmpPose;
    const F = { FL: 1, FR: 1, HL: 0, HR: 0 };
    const H = { FL: 0, FR: 0, HL: 1, HR: 1 };
    if (this.downDir > 0) {
      // going down: front knees first, then hind
      const a = smoothstep(0.0, 0.55, d);
      const b = smoothstep(0.45, 1.0, d);
      HorseRig.copyPose(tmp, P);
      if (!legs) {
        HorseRig.blendPose(tmp, L.kneelFront, a);
        HorseRig.blendPose(tmp, L.lie, b);
        HorseRig.copyBody(P, tmp);
      } else {
        HorseRig.blendPose(tmp, L.kneelFront, a, true, F);
        HorseRig.blendPose(tmp, L.lie, b, true);
        HorseRig.copyPose(P, tmp);
      }
    } else {
      const u = 1 - d;
      const a = smoothstep(0.0, 0.55, u);
      const b = smoothstep(0.45, 1.0, u);
      HorseRig.copyPose(tmp, L.lie);
      if (!legs) {
        HorseRig.blendPose(tmp, L.riseFront, a);
        HorseRig.blendPose(tmp, P, b);
        HorseRig.copyBody(P, tmp);
      } else {
        HorseRig.blendPose(tmp, L.riseFront, a, true, F);
        HorseRig.blendPose(tmp, P, b, true);
        HorseRig.copyPose(P, tmp);
      }
    }
  }

  // ---------------------------------------------------------------- jump
  startJump({ to, apexTime = 0.55, onContact }) {
    // body follows a ballistic arc from current position to `to` (world point of body root)
    this.jump = {
      t: 0,
      from: this.pos.clone(),
      to: to.clone(),
      T: apexTime,
      v0: this.speed,
      onContact,
      contacted: false,
      heading0: this.heading,
    };
  }

  _updateJump(dt, P) {
    const J = this.jump;
    J.t += dt;
    const u = clamp(J.t / J.T);
    // horizontal: constant speed; vertical: ballistic rise to apex
    this.pos.lerpVectors(J.from, J.to, u);
    const rise = J.to.y - J.from.y;
    // y(u) with zero vertical speed at apex: y = from + rise * (2u - u^2)
    this.pos.y = J.from.y + rise * (2 * u - u * u);
    this._updateGroup();
    const L = this.lib;
    const tmp = this.tmpPose;
    HorseRig.copyPose(tmp, this.rig.restPose());
    // gather 0-0.18, push 0.18-0.4, reach 0.4-1
    const g1 = smoothstep(0.0, 0.18, u), g2 = smoothstep(0.15, 0.42, u), g3 = smoothstep(0.38, 0.85, u);
    HorseRig.blendPose(tmp, L.gather, g1);
    HorseRig.blendPose(tmp, L.push, g2);
    HorseRig.blendPose(tmp, L.reach, g3);
    HorseRig.copyPose(P, tmp);
    // keep feet records in sync (for effects)
    for (const id of LEGS) {
      const ft = this.feet[id];
      ft.planted = false;
      ft.load = 0;
    }
    if (u >= 1 && !J.contacted) {
      J.contacted = true;
      if (J.onContact) J.onContact();
    }
  }

  endJump(track, s, contact = null) {
    // land on track at s: feet re-planted by locomotion
    HorseRig.copyPose(this.fromPose, this.pose);
    this.fromW = 1;
    const yJump = this.pos.y;
    this.jump = null;
    this.track = track;
    this.s = s;
    this.phase = 0.45; // lead foreleg (FL) about to plant
    for (const id of LEGS) {
      const ft = this.feet[id];
      this.hoofWorld(id, ft.pos);
      ft.lift.copy(ft.pos);
      ft.target.copy(ft.pos);
      ft.planted = false;
    }
    // the reaching foreleg lands exactly where the light was born
    if (contact) this.feet.FL.target.copy(contact);
    track.pos(s, this.pos);
    const yLoco = (this.groundFn(this.pos.x, this.pos.z, 'F') + this.groundFn(this.pos.x, this.pos.z, 'H')) * 0.5;
    this.rootYOff = yJump - yLoco;
  }

  // hoof tip offset (horse group frame) for a given library pose
  measurePoseHoof(poseName, id) {
    const save = this.rig.restPose();
    HorseRig.copyPose(save, this.pose);
    const gp = this.group.position.clone(), gq = this.group.quaternion.clone();
    this.group.position.set(0, 0, 0);
    this.group.quaternion.identity();
    this.rig.apply(this.lib[poseName]);
    this.group.updateMatrixWorld(true);
    const out = this.hoofWorld(id, new THREE.Vector3());
    this.group.position.copy(gp);
    this.group.quaternion.copy(gq);
    this.rig.apply(save);
    this.group.updateMatrixWorld(true);
    return out;
  }

  // ---------------------------------------------------------------- secondary motion
  _secondary(dt, P) {
    const t = this.time;
    // breathing
    this.breath += dt * (0.25 + this.speed * 0.05);
    const br = Math.sin(this.breath * TAU);
    // head look
    const L = this.look;
    L.w = damp(L.w, L.target ? L.weight : 0, 3, dt);
    if (L.target) {
      const head = this.u.bones.head;
      head.getWorldPosition(_v);
      _v2.copy(L.target).sub(_v);
      const inv = _q.setFromAxisAngle(AY, -this.heading);
      _v2.applyQuaternion(inv);
      const yaw = clamp(Math.atan2(_v2.x, _v2.z), -1.3, 1.3);
      const pitch = clamp(Math.atan2(_v2.y, Math.hypot(_v2.x, _v2.z)), -0.9, 0.5);
      L.yaw = damp(L.yaw, yaw, 4, dt);
      L.pitch = damp(L.pitch, pitch, 4, dt);
    } else {
      L.yaw = damp(L.yaw, 0, 2, dt);
      L.pitch = damp(L.pitch, 0, 2, dt);
    }
    const w = L.w;
    const yawSplit = [0.22, 0.3, 0.28];
    for (let i = 0; i < 3; i++) P.neck[i][1] += L.yaw * w * yawSplit[i];
    P.head[1] += L.yaw * w * 0.2;
    // pitch: neck lowers, head angles (negative pitch about X lifts? apply on neck2/3)
    const lp = -L.pitch * w;
    P.neck[0][0] += lp * 0.25;
    P.neck[1][0] += lp * 0.25;
    P.head[0] += lp * 0.35;
    // lower the head toward the ground / child
    this.headLowerS = damp(this.headLowerS, this.headLower, 2.5, dt);
    const hl = this.headLowerS;
    P.neck[0][0] += 0.38 * hl;
    P.neck[1][0] += 0.28 * hl;
    P.neck[2][0] += 0.1 * hl;
    P.head[0] -= 0.25 * hl;
    // gait head nod
    if (!this.jump) {
      const G = GAITS[this.gaitName];
      const gw = smoothstep(0.3, 3, this.speed);
      P.neck[0][0] += Math.sin(this.phase * TAU * G.bobN + 1.0) * 0.06 * gw;
      P.head[0] += Math.sin(this.phase * TAU * G.bobN + 1.8) * 0.06 * gw;
      // gallop: neck stretches forward
      P.neck[0][0] += smoothstep(4, 10, this.speed) * 0.12;
      P.head[0] -= smoothstep(4, 10, this.speed) * 0.1;
    }
    // idle life
    P.neck[0][0] += br * 0.012;
    P.head[0] += Math.sin(t * 0.37) * 0.03 * (1 - w);
    P.head[2] += Math.sin(t * 0.23) * 0.04;
    // head shake (throws droplets from mane)
    if (this.headShake > 0) {
      const k = this.headShake;
      const s = Math.sin(t * 26) * k;
      P.neck[0][1] += s * 0.12;
      P.neck[1][1] += s * 0.2;
      P.neck[2][1] += s * 0.22;
      P.head[2] += s * 0.3;
      this.headShake = Math.max(0, this.headShake - dt * 0.9);
    }
    // nuzzle (rubbing head)
    if (this.nuzzle > 0) {
      P.neck[2][0] += Math.sin(t * 5) * 0.05 * this.nuzzle;
      P.head[2] += Math.sin(t * 3.3) * 0.12 * this.nuzzle;
      this.nuzzle = Math.max(0, this.nuzzle - dt * 0.4);
    }
    P.pitch += this.extraPitch;
    // ears
    for (let i = 0; i < 2; i++) {
      if (Math.random() < dt * 0.25) this.earTarget[i] = (Math.random() - 0.5) * 1.2;
      this.earTwitch[i] = damp(this.earTwitch[i], this.earTarget[i], 6, dt);
      P.ears[i][0] += -0.15 + this.earTwitch[i] * 0.25 + this.eyeClose * 0.4;
      P.ears[i][1] += this.earTwitch[i] * 0.5;
    }
    if (this.speed > 4) {
      P.ears[0][0] += 0.25;
      P.ears[1][0] += 0.25;
    }
    // tail
    this.tailSwish += dt;
    P.tail[0][1] += Math.sin(this.tailSwish * 0.9) * 0.12 + Math.sin(this.tailSwish * 2.3) * 0.05;
    P.tail[0][0] += smoothstep(3, 10, this.speed) * 0.35;
    // blink
    this.blinkT -= dt;
    if (this.blinkT < 0) {
      this.blink = 1;
      this.blinkT = 2.5 + Math.random() * 4;
    }
    this.blink = Math.max(0, this.blink - dt * 7);
    const bl = Math.max(Math.sin(this.blink * Math.PI), this.eyeClose * 0.85);
    this.u.setBlink(bl);
    this.eyeClose = Math.max(0, this.eyeClose - dt * 0.3);
  }

  hoofWorld(id, out) {
    const g = this.rig.leg[id];
    const b = this.u.bones[g.names[g.names.length - 1]];
    return b.localToWorld(out.set(0, b.userData.length, 0));
  }
}
