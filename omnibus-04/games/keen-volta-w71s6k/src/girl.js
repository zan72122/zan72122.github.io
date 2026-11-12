// The girl: a small procedural character who inhabits the world. She is never
// steered directly; the director gives her places to walk and things to look
// at, and she reacts physically (brace, push, hesitate, lean, ride...).
import * as THREE from 'three';
import { clamp, damp, lerp } from './util.js';
import { sound } from './audio.js';

const M = (c, r = 0.8) => new THREE.MeshStandardMaterial({ color: c, roughness: r });

export class Girl {
  constructor() {
    this.obj = new THREE.Group(); this.obj.name = 'girl';
    const skin = M(0xf0c4a2, 0.7), coat = M(0xd2462e, 0.75), hair = M(0x3a2317, 0.9),
      tights = M(0x2f3a55, 0.85), boots = M(0xe9b13a, 0.6), scarf = M(0xf1d36b, 0.9), dark = M(0x1b120c, 0.4);
    const cap = (r, l, m) => { const g = new THREE.CapsuleGeometry(r, l, 4, 8); const mesh = new THREE.Mesh(g, m); mesh.castShadow = true; return mesh; };
    const joint = (parent, x, y, z) => { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; };
    this.body = joint(this.obj, 0, 0, 0);
    this.pelvis = joint(this.body, 0, 0.43, 0);
    // legs
    this.legs = [1, -1].map((s) => {
      const hip = joint(this.pelvis, 0.068 * s, 0, 0);
      const th = cap(0.052, 0.12, tights); th.position.y = -0.1; hip.add(th);
      const knee = joint(hip, 0, -0.2, 0);
      const sh = cap(0.047, 0.1, tights); sh.position.y = -0.08; knee.add(sh);
      const boot = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.085, 0.16), boots); boot.position.set(0, -0.19, 0.025); boot.castShadow = true; knee.add(boot);
      return { hip, knee };
    });
    this.spine = joint(this.pelvis, 0, 0.02, 0);
    const coatMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.2, 0.5, 14), coat);
    coatMesh.position.y = 0.12; coatMesh.castShadow = true; this.spine.add(coatMesh);
    const buttons = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.26, 0.02), dark); buttons.position.set(0, 0.13, 0.15); buttons.rotation.x = -0.18; this.spine.add(buttons);
    const scarfRing = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.032, 6, 14), scarf); scarfRing.rotation.x = Math.PI / 2; scarfRing.position.y = 0.37; this.spine.add(scarfRing);
    this.scarfTail = joint(this.spine, 0.05, 0.36, -0.07);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.16, 0.025), scarf); tail.position.y = -0.08; this.scarfTail.add(tail);
    // head
    this.neck = joint(this.spine, 0, 0.39, 0);
    this.head = joint(this.neck, 0, 0.02, 0);
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.15, 18, 14), skin); skull.position.y = 0.13; skull.castShadow = true; this.head.add(skull);
    const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.162, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.58), hair);
    hairCap.position.set(0, 0.14, -0.012); hairCap.rotation.x = -0.35; this.head.add(hairCap);
    const bangs = new THREE.Mesh(new THREE.SphereGeometry(0.155, 14, 8, -1.2, 2.4, 0, 0.9), hair); bangs.position.set(0, 0.15, 0.012); this.head.add(bangs);
    this.tails = [1, -1].map((s) => {
      const j = joint(this.head, 0.15 * s, 0.17, -0.05);
      const t = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), hair); t.scale.set(0.8, 1.25, 0.8); t.position.y = -0.05; t.castShadow = true; j.add(t);
      return j;
    });
    for (const s of [1, -1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.019, 8, 6), dark); eye.position.set(0.052 * s, 0.14, 0.138); eye.scale.set(1, 1.3, 0.6); this.head.add(eye);
      const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), M(0xe8927a, 0.9)); cheek.position.set(0.085 * s, 0.095, 0.12); cheek.scale.set(1, 0.6, 0.4); this.head.add(cheek);
    }
    this.mouth = new THREE.Mesh(new THREE.SphereGeometry(0.014, 8, 6), M(0x7a2e22, 0.6)); this.mouth.position.set(0, 0.075, 0.145); this.mouth.scale.set(1.4, 0.7, 0.5); this.head.add(this.mouth);
    // arms
    this.arms = [1, -1].map((s) => {
      const sh = joint(this.spine, 0.14 * s, 0.33, 0);
      const up = cap(0.042, 0.11, coat); up.position.y = -0.085; sh.add(up);
      const el = joint(sh, 0, -0.18, 0);
      const fo = cap(0.038, 0.09, coat); fo.position.y = -0.07; el.add(fo);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 6), skin); hand.position.y = -0.16; el.add(hand);
      return { sh, el };
    });
    // animation state
    this.mode = 'idle'; this.modeT = 0; this.intensity = 0;
    this.path = null; this.speed = 1.55; this.onArrive = null; this.phase = 0; this.lastStepSign = 1;
    this.yaw = Math.PI / 2; this.targetYaw = Math.PI / 2;
    this.look = null; this.lookT = 0; this.headYaw = 0; this.headPitch = 0;
    this.emoteName = null; this.emoteT = 0; this.emoteDur = 0;
    this.lean = 0; this.worldUpBias = 0; this.surface = 'stone';
    this.p = { hipY: 0, lean: 0, hips: [0, 0], knees: [0, 0], sh: [0, 0], shR: [0, 0], el: [0, 0], headP: 0, bob: 0 };
    this._tmp = new THREE.Vector3(); this.t = 0;
  }

  get position() { return this.obj.position; }
  attachTo(parent) { parent.attach(this.obj); this.obj.rotation.x = 0; this.obj.rotation.z = 0; }
  place(p) { this.obj.position.copy(p); }

  // Walk along parent-space waypoints; speed in m/s.
  walk(points, onArrive, speed = 1.55) {
    this.path = points.map((p) => p.clone()); this.onArrive = onArrive || null; this.speed = speed; this.setMode('walk');
  }
  stop() { this.path = null; if (this.mode === 'walk') this.setMode('idle'); }
  setMode(m, intensity = 0) { if (m !== this.mode) { this.mode = m; this.modeT = 0; } this.intensity = intensity; }
  lookAt(getter, dur = 2.5) { this.look = getter; this.lookT = dur; }
  emote(name, dur = 1.2) { this.emoteName = name; this.emoteT = 0; this.emoteDur = dur; }
  faceWorldX(dir) { this.targetYaw = dir >= 0 ? Math.PI / 2 : -Math.PI / 2; }
  faceCamera() { this.targetYaw = 0.35; }

  update(dt) {
    this.t += dt; this.modeT += dt;
    // locomotion
    if (this.path && this.path.length) {
      const pos = this.obj.position, tgt = this.path[0];
      const d = this._tmp.copy(tgt).sub(pos); if (this.heightFn) d.y = 0; const dist = d.length();
      const step = this.speed * dt;
      if (dist <= step) {
        const y = pos.y; pos.copy(tgt); if (this.heightFn) pos.y = y; this.path.shift();
        if (!this.path.length) { this.path = null; if (this.mode === 'walk') this.setMode('idle'); const cb = this.onArrive; this.onArrive = null; cb && cb(); }
      } else {
        pos.addScaledVector(d, step / dist);
        if (Math.abs(d.x) + Math.abs(d.z) > 0.02) this.targetYaw = Math.atan2(d.x, d.z);
        this.phase += dt * this.speed * 5.2;
        const s = Math.sign(Math.sin(this.phase));
        if (s !== this.lastStepSign) { this.lastStepSign = s; sound.step(this._pan(), this.surface); }
      }
    }
    if (this.heightFn) { const h = this.heightFn(this.obj.position.x, this.obj.position.z); if (h != null) this.obj.position.y = h; }
    // yaw
    let dy = this.targetYaw - this.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
    this.yaw += dy * (1 - Math.exp(-8 * dt));
    this.obj.rotation.y = this.yaw;
    this._pose(dt);
  }
  _pan() {
    const w = this.obj.getWorldPosition(this._tmp);
    return clamp((w.x - (this.camX || w.x)) / 12, -1, 1);
  }

  _pose(dt) {
    const P = { hipY: 0, lean: 0.03, hips: [0, 0], knees: [0.05, 0.05], sh: [0.05, 0.05], shR: [0.08, 0.08], el: [0.15, 0.15], headP: 0, bob: 0 };
    const t = this.t, k = this.intensity;
    switch (this.mode) {
      case 'idle': {
        const br = Math.sin(t * 2.1) * 0.015; P.bob = br; P.sh = [0.05 + br, 0.05 - br]; break;
      }
      case 'walk': {
        const s = Math.sin(this.phase), c = Math.cos(this.phase);
        P.hips = [s * 0.55, -s * 0.55]; P.knees = [Math.max(0, -c) * 0.9 + 0.1, Math.max(0, c) * 0.9 + 0.1];
        P.sh = [-s * 0.5, s * 0.5]; P.el = [0.35, 0.35]; P.bob = Math.abs(s) * 0.035 - 0.015; P.lean = 0.1; break;
      }
      case 'brace': case 'push': {
        // hands on the object, weight forward; k = how hard the player pushes (0..1)
        const e = this.mode === 'push' ? 0.6 + k * 0.4 : 0.35;
        P.lean = 0.28 + e * 0.32; P.hips = [0.55 * e, -0.45 * e]; P.knees = [0.35, 0.25 + 0.2 * e];
        P.sh = [1.45, 1.45]; P.el = [0.35 - 0.2 * e, 0.35 - 0.2 * e]; P.headP = -0.25; P.hipY = -0.03 * e;
        P.bob = Math.sin(t * 18) * 0.004 * k; break;
      }
      case 'strain': {
        const w = Math.sin(t * 9) * 0.05;
        P.lean = 0.5 + w; P.hips = [0.5, -0.5]; P.knees = [0.4, 0.3]; P.sh = [1.5, 1.5]; P.el = [0.2, 0.2]; P.headP = -0.2 + w; P.hipY = -0.04; break;
      }
      case 'crouch': {
        P.hipY = -0.16; P.hips = [0.9, 0.9]; P.knees = [1.3, 1.3]; P.lean = 0.35 + this.lean; P.sh = [0.6, 0.6]; P.shR = [0.7, 0.7]; P.el = [0.5, 0.5]; break;
      }
      case 'balance': {
        const w = Math.sin(t * 5) * 0.12; P.hipY = -0.06; P.hips = [0.3, 0.3]; P.knees = [0.5, 0.5]; P.shR = [1.25 + w, 1.25 - w]; P.sh = [0.2, 0.2]; P.lean = this.lean; break;
      }
      case 'sit': {
        P.hipY = -0.3; P.hips = [1.45, 1.45]; P.knees = [0.25, 0.3]; P.lean = -0.08; P.sh = [0.35, 0.3]; P.el = [0.4, 0.4]; break;
      }
      case 'slide': {
        P.hipY = -0.3; P.hips = [1.35, 1.35]; P.knees = [0.1, 0.15]; P.lean = -0.25; P.shR = [0.9, 0.9]; P.sh = [0.6, 0.6]; P.el = [0.1, 0.1]; break;
      }
      case 'climb': {
        const s = Math.sin(t * 6);
        P.lean = 0.35; P.hips = [0.7 + s * 0.45, 0.7 - s * 0.45]; P.knees = [0.9 + s * 0.3, 0.9 - s * 0.3];
        P.sh = [2.4 + s * 0.35, 2.4 - s * 0.35]; P.el = [0.4, 0.4]; P.headP = -0.4; P.bob = Math.abs(s) * 0.02; break;
      }
      case 'pull': {
        const s = Math.sin(t * 3) * 0.1; P.lean = -0.15; P.sh = [2.6 + s, 2.6 - s]; P.el = [0.5, 0.5]; P.headP = -0.45; P.hips = [0.25, -0.2]; P.knees = [0.3, 0.2]; break;
      }
      case 'ride': {
        P.hipY = -0.04; P.knees = [0.3, 0.3]; P.hips = [0.15, 0.15]; P.shR = [0.4, 0.4]; P.sh = [0.3, 0.3]; P.lean = this.lean; break;
      }
    }
    // emotes are layered on top
    if (this.emoteName) {
      this.emoteT += dt; const u = this.emoteT / this.emoteDur;
      if (u >= 1) this.emoteName = null;
      else {
        const env = Math.sin(Math.min(1, u) * Math.PI);
        switch (this.emoteName) {
          case 'surprise': P.bob += Math.max(0, Math.sin(u * Math.PI * 2)) * 0.09 * (u < 0.5 ? 1 : 0); P.sh = [2.5 * env, 2.5 * env]; P.shR = [0.5 * env, 0.5 * env]; P.lean = -0.18 * env; P.el = [0.3, 0.3]; break;
          case 'cheer': P.bob += Math.abs(Math.sin(u * Math.PI * 4)) * 0.07; P.sh = [2.9 * env, 2.9 * env]; P.shR = [0.35, 0.35]; P.el = [0.2, 0.2]; break;
          case 'clap': { const c = Math.abs(Math.sin(u * Math.PI * 6)); P.sh = [1.2 * env, 1.2 * env]; P.shR = [-0.2 * c * env + 0.25, -0.2 * c * env + 0.25]; P.el = [1.0 * env, 1.0 * env]; break; }
          case 'point': P.sh = [1.7 * env, P.sh[1]]; P.el = [0.05, P.el[1]]; break;
          case 'flinch': P.lean = -0.3 * env; P.sh = [1.2 * env, 1.2 * env]; P.el = [1.6 * env, 1.6 * env]; P.hipY = -0.05 * env; break;
          case 'nod': P.headP = Math.sin(u * Math.PI * 4) * 0.25; break;
          case 'peer': P.lean = 0.35 * env; P.headP = 0.55 * env; P.sh = [0.4, 0.4]; break;
          case 'beckon': P.sh = [1.3 * env, P.sh[1]]; P.el = [0.9 + Math.sin(u * Math.PI * 6) * 0.5 * env, P.el[1]]; break;
        }
      }
    }
    // smooth toward target pose
    const p = this.p, r = 12;
    p.hipY = damp(p.hipY, P.hipY, r, dt); p.lean = damp(p.lean, P.lean, 8, dt); p.bob = damp(p.bob, P.bob, 20, dt); p.headP = damp(p.headP, P.headP, 8, dt);
    for (let i = 0; i < 2; i++) {
      p.hips[i] = damp(p.hips[i], P.hips[i], r, dt); p.knees[i] = damp(p.knees[i], P.knees[i], r, dt);
      p.sh[i] = damp(p.sh[i], P.sh[i], r, dt); p.shR[i] = damp(p.shR[i], P.shR[i], r, dt); p.el[i] = damp(p.el[i], P.el[i], r, dt);
    }
    this.pelvis.position.y = 0.43 + p.hipY + p.bob;
    this.spine.rotation.x = p.lean;
    this.legs.forEach((l, i) => { l.hip.rotation.x = -p.hips[i]; l.knee.rotation.x = p.knees[i]; });
    this.arms.forEach((a, i) => { a.sh.rotation.x = -p.sh[i]; a.sh.rotation.z = (i ? -1 : 1) * p.shR[i]; a.el.rotation.x = -p.el[i]; });
    // head look-at (in her local frame), otherwise gentle idle glances
    let hy = 0, hp = p.headP;
    if (this.look && this.lookT > 0) {
      this.lookT -= dt;
      const w = typeof this.look === 'function' ? this.look() : this.look;
      if (w) {
        const local = this.obj.worldToLocal(w.clone());
        local.y -= 0.95;
        hy = Math.atan2(local.x, local.z);
        hp = -Math.atan2(local.y, Math.hypot(local.x, local.z));
        if (Math.abs(hy) > 1.25) { // turn the whole body toward it
          const wy = this.yaw + hy; if (!this.path) this.targetYaw = wy; hy = clamp(hy, -1.25, 1.25);
        }
      }
    } else { hy = Math.sin(this.t * 0.37) * 0.15; }
    this.headYaw = damp(this.headYaw, clamp(hy, -1.2, 1.2), 7, dt);
    this.headPitch = damp(this.headPitch, clamp(hp - p.lean * 0.6, -0.8, 0.9), 7, dt);
    this.neck.rotation.y = this.headYaw; this.head.rotation.x = this.headPitch;
    // secondary motion: pigtails + scarf swing opposite to motion
    const sw = Math.sin(this.t * 7) * 0.08 * (this.mode === 'walk' ? 1 : 0.2);
    this.tails.forEach((j, i) => { j.rotation.z = (i ? -1 : 1) * 0.15 + sw; j.rotation.x = -p.lean * 0.5 + 0.2; });
    this.scarfTail.rotation.x = -0.4 - p.lean + Math.sin(this.t * 3.3) * 0.12; this.scarfTail.rotation.z = sw;
    this.mouth.scale.y = this.emoteName === 'surprise' ? 1.8 : this.mode === 'strain' ? 0.5 : 0.7;
  }
}
