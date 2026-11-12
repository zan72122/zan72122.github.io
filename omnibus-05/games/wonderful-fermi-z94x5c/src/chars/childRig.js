// Child posing: FK pose library blended by weights, two-bone arm IK toward world
// targets, finger curl/spread, head look, blink, riding attachment.
import * as THREE from '../../lib/three.module.js';
import { clamp, lerp, damp, smoothstep, TAU } from '../core/math.js';

const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _q3 = new THREE.Quaternion();
const _e = new THREE.Euler();
const Y = new THREE.Vector3(0, 1, 0);

// pose: { hipsOff:[x,y,z], b: { bone: [x,y,z] } }
const P = (hipsOff, b) => ({ hipsOff, b });

export const CHILD_POSES = {
  stand: P([0, 0, 0], {
    uarmL: [-0.08, 0, 0.1], uarmR: [-0.08, 0, -0.1],
    farmL: [-0.25, 0, 0], farmR: [-0.25, 0, 0],
    spine: [0.03, 0, 0], neck: [0.03, 0, 0],
  }),
  squat: P([0, -0.3, -0.02], {
    hips: [0.3, 0, 0], spine: [0.32, 0, 0], chest: [0.25, 0, 0], neck: [0.25, 0, 0], head: [0.45, 0, 0],
    thighL: [-2.25, 0, -0.22], thighR: [-2.25, 0, 0.22],
    shinL: [2.75, 0, 0], shinR: [2.75, 0, 0],
    footL: [-0.45, 0, 0], footR: [-0.45, 0, 0],
    uarmL: [-0.9, 0, 0.2], uarmR: [-0.9, 0, -0.2], farmL: [-0.7, 0, 0], farmR: [-0.7, 0, 0],
  }),
  ride: P([0, 0, 0], {
    hips: [-0.05, 0, 0], spine: [0.08, 0, 0], chest: [0.08, 0, 0], neck: [-0.05, 0, 0], head: [-0.05, 0, 0],
    thighL: [-1.0, 0, -0.95], thighR: [-1.0, 0, 0.95],
    shinL: [1.05, 0, 0.35], shinR: [1.05, 0, -0.35],
    footL: [0.3, 0, 0], footR: [0.3, 0, 0],
    uarmL: [-0.7, 0, 0.15], uarmR: [-0.7, 0, -0.15], farmL: [-0.9, 0, 0], farmR: [-0.9, 0, 0],
  }),
  // lying across the back while climbing on (belly down)
  climb: P([0, 0, 0], {
    hips: [0.9, 0, 0], spine: [0.35, 0, 0], chest: [0.2, 0, 0], head: [-0.3, 0, 0],
    thighL: [0.2, 0, -0.1], thighR: [-0.6, 0, 0.5], shinL: [0.6, 0, 0], shinR: [1.2, 0, 0],
    uarmL: [-1.5, 0, 0.3], uarmR: [-1.5, 0, -0.3], farmL: [-0.4, 0, 0], farmR: [-0.4, 0, 0],
  }),
  // looking up with wonder
  lookUp: P([0, 0, 0], { spine: [-0.12, 0, 0], chest: [-0.1, 0, 0], neck: [-0.25, 0, 0], head: [-0.35, 0, 0] }),
};

export class ChildController {
  constructor(child) {
    this.c = child;
    this.b = child.bones;
    this.group = child.group;
    this.weights = { stand: 1 };
    this.wS = {}; // smoothed weights
    for (const k of Object.keys(CHILD_POSES)) this.wS[k] = k === 'stand' ? 1 : 0;
    this.arm = {
      L: { target: new THREE.Vector3(), w: 0, wS: 0, pole: new THREE.Vector3(0.3, -1, -0.6), palm: 0, palmS: 0 },
      R: { target: new THREE.Vector3(), w: 0, wS: 0, pole: new THREE.Vector3(-0.3, -1, -0.6), palm: 0, palmS: 0 },
    };
    this.curl = { L: 0.35, R: 0.35 };
    this.curlS = { L: 0.35, R: 0.35 };
    this.spread = { L: 0, R: 0 };
    this.look = { target: null, w: 0, yaw: 0, pitch: 0 };
    this.blinkT = 2;
    this.blink = 0;
    this.time = 0;
    this.attach = null; // { obj: Object3D, offset: Matrix4 }
    this.walk = 0; // walking phase speed
    this.walkPh = 0;
    this.breath = 0;
    this.extra = {}; // additive bone euler offsets for this frame
    this.hipsExtra = new THREE.Vector3();
    this.yaw = 0;
    this.pos = new THREE.Vector3();
  }

  setWeights(w) {
    this.weights = w;
  }

  placeAt(pos, yaw) {
    this.attach = null;
    this.pos.copy(pos);
    this.yaw = yaw;
  }

  attachTo(obj, offsetMatrix) {
    this.attach = { obj, offset: offsetMatrix.clone() };
  }

  update(dt) {
    this.time += dt;
    // root transform
    if (this.attach) {
      this.attach.obj.updateWorldMatrix(true, false);
      const m = new THREE.Matrix4().multiplyMatrices(this.attach.obj.matrixWorld, this.attach.offset);
      m.decompose(this.group.position, this.group.quaternion, this.group.scale);
      this.group.scale.set(1, 1, 1);
    } else {
      this.group.position.copy(this.pos);
      this.group.quaternion.setFromAxisAngle(Y, this.yaw);
    }
    this.group.updateMatrixWorld(true);
    // blend FK poses
    let tot = 0;
    for (const k of Object.keys(this.wS)) {
      this.wS[k] = damp(this.wS[k], this.weights[k] || 0, 4.5, dt);
      tot += this.wS[k];
    }
    const acc = {};
    const hip = _v3.set(0, 0, 0);
    for (const [k, w0] of Object.entries(this.wS)) {
      if (w0 < 1e-3) continue;
      const w = w0 / Math.max(tot, 1e-3);
      const pose = CHILD_POSES[k];
      hip.x += pose.hipsOff[0] * w;
      hip.y += pose.hipsOff[1] * w;
      hip.z += pose.hipsOff[2] * w;
      for (const [bn, e] of Object.entries(pose.b)) {
        const a = acc[bn] || (acc[bn] = [0, 0, 0]);
        a[0] += e[0] * w;
        a[1] += e[1] * w;
        a[2] += e[2] * w;
      }
    }
    // breathing & walking
    this.breath += dt * 0.35;
    const br = Math.sin(this.breath * TAU) * 0.015;
    (acc.chest || (acc.chest = [0, 0, 0]))[0] += br;
    if (this.walk > 0.01) {
      this.walkPh += dt * (1.8 + this.walk * 1.2);
      const s = Math.sin(this.walkPh * TAU) * 0.45 * this.walk;
      const k = Math.max(0, Math.sin(this.walkPh * TAU)) * 0.7 * this.walk;
      const k2 = Math.max(0, -Math.sin(this.walkPh * TAU)) * 0.7 * this.walk;
      (acc.thighL || (acc.thighL = [0, 0, 0]))[0] += -s;
      (acc.thighR || (acc.thighR = [0, 0, 0]))[0] += s;
      (acc.shinL || (acc.shinL = [0, 0, 0]))[0] += k;
      (acc.shinR || (acc.shinR = [0, 0, 0]))[0] += k2;
      (acc.uarmL || (acc.uarmL = [0, 0, 0]))[0] += s * 0.6;
      (acc.uarmR || (acc.uarmR = [0, 0, 0]))[0] += -s * 0.6;
      hip.y += -Math.abs(Math.cos(this.walkPh * TAU)) * 0.015 * this.walk;
    }
    for (const [bn, e] of Object.entries(this.extra)) {
      const a = acc[bn] || (acc[bn] = [0, 0, 0]);
      a[0] += e[0];
      a[1] += e[1];
      a[2] += e[2];
    }
    // apply FK
    for (const bone of this.c.skeleton.bones) {
      bone.quaternion.copy(bone.userData.restLocalQuat);
      bone.position.copy(bone.userData.restLocalPos);
      const e = acc[bone.name];
      if (e) bone.quaternion.multiply(_q.setFromEuler(_e.set(e[0], e[1], e[2], 'XYZ')));
    }
    this.b.hips.position.add(hip).add(this.hipsExtra);
    // head look
    const L = this.look;
    L.w = damp(L.w, L.target ? 1 : 0, 3, dt);
    this.group.updateMatrixWorld(true);
    if (L.target) {
      this.b.neck.getWorldPosition(_v);
      _v2.copy(L.target).sub(_v);
      // into body frame
      this.b.chest.getWorldQuaternion(_q).invert();
      _v2.applyQuaternion(_q);
      const yaw = clamp(Math.atan2(_v2.x, _v2.z), -1.1, 1.1);
      const pitch = clamp(Math.atan2(_v2.y, Math.hypot(_v2.x, _v2.z)), -0.7, 0.8);
      L.yaw = damp(L.yaw, yaw, 5, dt);
      L.pitch = damp(L.pitch, pitch, 5, dt);
    }
    if (L.w > 1e-3) {
      this.b.neck.quaternion.multiply(_q.setFromEuler(_e.set(-L.pitch * 0.4 * L.w, L.yaw * 0.45 * L.w, 0)));
      this.b.head.quaternion.multiply(_q.setFromEuler(_e.set(-L.pitch * 0.6 * L.w, L.yaw * 0.55 * L.w, 0)));
    }
    this.group.updateMatrixWorld(true);
    // arm IK
    for (const s of ['L', 'R']) {
      const A = this.arm[s];
      A.wS = damp(A.wS, A.w, 6, dt);
      A.palmS = damp(A.palmS, A.palm, 5, dt);
      if (A.wS > 1e-3) this._armIK(s, A);
    }
    // fingers
    for (const s of ['L', 'R']) {
      this.curlS[s] = damp(this.curlS[s], this.curl[s], 8, dt);
      const c = this.curlS[s];
      const sg = s === 'L' ? 1 : -1;
      const sp = this.spread[s];
      const fn = ['f1', 'f2', 'f3', 'f4'];
      fn.forEach((f, i) => {
        const a = this.b[f + 'a' + s], bb = this.b[f + 'b' + s];
        const spreadA = (i - 1.5) * 0.18 * sp;
        a.quaternion.copy(a.userData.restLocalQuat).multiply(_q.setFromEuler(_e.set(spreadA, 0, sg * c * 1.1)));
        bb.quaternion.copy(bb.userData.restLocalQuat).multiply(_q.setFromEuler(_e.set(0, 0, sg * c * 1.3)));
      });
      const ta = this.b['tha' + s], tb = this.b['thb' + s];
      ta.quaternion.copy(ta.userData.restLocalQuat).multiply(_q.setFromEuler(_e.set(-0.3 * sp, 0, sg * c * 0.5)));
      tb.quaternion.copy(tb.userData.restLocalQuat).multiply(_q.setFromEuler(_e.set(0, 0, sg * c * 0.6)));
    }
    // blink
    this.blinkT -= dt;
    if (this.blinkT < 0) {
      this.blink = 1;
      this.blinkT = 2 + Math.random() * 3.5;
    }
    this.blink = Math.max(0, this.blink - dt * 8);
    this.c.setBlink(Math.sin(this.blink * Math.PI));
    this.group.updateMatrixWorld(true);
    this.extra = {};
    this.hipsExtra.set(0, 0, 0);
  }

  _aim(bone, targetWorld, w) {
    bone.updateWorldMatrix(true, false);
    bone.getWorldPosition(_v);
    const d = _v2.copy(targetWorld).sub(_v);
    if (d.lengthSq() < 1e-8) return;
    d.normalize();
    bone.getWorldQuaternion(_q);
    const y0 = _v3.set(0, 1, 0).applyQuaternion(_q);
    _q2.setFromUnitVectors(y0, d);
    if (w < 1) _q2.slerp(_q3.identity(), 1 - w);
    const newWorld = _q2.multiply(_q);
    bone.parent.getWorldQuaternion(_q3).invert();
    bone.quaternion.copy(_q3.multiply(newWorld));
    bone.updateWorldMatrix(false, true);
  }

  _armIK(s, A) {
    const ua = this.b['uarm' + s], fa = this.b['farm' + s], hd = this.b['hand' + s];
    const L1 = ua.userData.length, L2 = fa.userData.length;
    const S = ua.getWorldPosition(new THREE.Vector3());
    const T = A.target.clone();
    let d = T.clone().sub(S);
    let D = d.length();
    const maxD = (L1 + L2) * 0.995;
    if (D > maxD) {
      d.multiplyScalar(maxD / D);
      T.copy(S).add(d);
      D = maxD;
    }
    D = Math.max(D, Math.abs(L1 - L2) + 0.01);
    const dir = d.clone().normalize();
    // pole direction in world (relative to body)
    const pole = A.pole.clone().applyQuaternion(this.group.getWorldQuaternion(new THREE.Quaternion())).normalize();
    const perp = pole.clone().addScaledVector(dir, -pole.dot(dir)).normalize();
    const a = (L1 * L1 + D * D - L2 * L2) / (2 * D);
    const h = Math.sqrt(Math.max(0, L1 * L1 - a * a));
    const E = S.clone().addScaledVector(dir, a).addScaledVector(perp, h);
    this._aim(ua, E, A.wS);
    this._aim(fa, T, A.wS);
    // hand: continue forearm, palm orientation tweak (palm 1 = palm up)
    if (A.palmS > 1e-3) {
      const sg = s === 'L' ? 1 : -1;
      hd.quaternion.copy(hd.userData.restLocalQuat).multiply(_q.setFromEuler(_e.set(-0.25 * A.palmS, sg * 1.5 * A.palmS, 0)));
    }
    hd.updateWorldMatrix(false, true);
  }

  handWorld(s, out) {
    return this.b['f2a' + s].getWorldPosition(out);
  }
  palmCenter(s, out) {
    const h = this.b['hand' + s];
    return h.localToWorld(out.set(0, h.userData.length * 0.7, 0));
  }
}
