// The delivery courier. One finger: touching = hold on / move along what you hold,
// lifting = let go. Gravity is +x, so letting go always means falling sideways.
import * as THREE from 'three';
import { Human, POSE, runPose, climbPose } from './human.js';
import { closestOnSeg } from './world2d.js';
import { G } from './level.js';
import { makeParcel } from './parcel.js';

export const LEG = 0.95, HEAD = 0.82, HW = 0.22, ARM = 1.12;
const RUN = 3.4, CLIMB = 1.7;

const V2 = (x = 0, y = 0) => new THREE.Vector2(x, y);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export class Courier {
  constructor(game) {
    this.game = game;
    this.w = game.w2d;
    this.h = new Human('courier');
    game.scene.add(this.h.root);
    this.pos = V2(); this.vel = V2();
    this.state = 'hang';
    this.face = null;       // x of the floor face while standing
    this.hold = null;       // {hold, t, x, y}
    this.phi = 0; this.omega = 0; this.len = ARM;
    this.runPh = 0; this.runAmt = 0;
    this.yaw = 0; this.yawT = 0;
    this.bodyAng = 0;       // rotation of the body axis around z
    this.z = 0;
    this.parcel = makeParcel();
    this.h.j.chest.add(this.parcel);
    this.parcel.position.set(0, -0.12, 0.26);
    this.hasParcel = true;
    this.hopT = 0;
    this.landT = 0;
    this.air = 0;
    this.lastEvent = null;
    this.events = [];
    this.cool = 0;
    this.swingPump = 0;
  }

  emit(e, data) { this.events.push({ e, ...data }); }

  place(x, y) { this.pos.set(x, y); this.vel.set(0, 0); }

  grab(hold, px, py, keepVel = true) {
    this.wantRelease = false;
    const p = closestOnSeg(hold, px, py);
    this.hold = { hold, t: p.t, x: p.x, y: p.y };
    this.state = hold.kind === 'swing' ? 'swing' : 'hang';
    // convert velocity into pendulum motion around the hand
    const rx = this.pos.x - p.x, ry = this.pos.y - p.y;
    this.len = hold.kind === 'swing' ? hold.swing.L + ARM : ARM;
    this.phi = Math.atan2(ry, Math.max(0.1, rx));
    if (hold.kind === 'swing') {
      const pv = hold.swing.pivot;
      this.phi = Math.atan2(this.pos.y - pv.y, Math.max(0.1, this.pos.x - pv.x));
    }
    this.omega = keepVel ? clamp((this.vel.y * Math.cos(this.phi) - this.vel.x * Math.sin(this.phi)) / this.len, -3, 3) : 0;
    this.vel.set(0, 0);
    this.emit('grab', { kind: hold.kind });
  }

  letGo(push = 0.6) {
    const wasSwing = this.state === 'swing';
    // tangential velocity of the pendulum
    const vt = this.omega * this.len;
    this.vel.set(-Math.sin(this.phi) * vt + push * 0.3, Math.cos(this.phi) * vt);
    if (!wasSwing) this.vel.y *= 0.6;
    this.hold = null;
    this.state = 'fall';
    this.air = 0;
    this.cool = 0.25;
    this.emit('letgo', {});
  }

  // --- main update. input: {down, target:Vector3|null, released:bool, pressed:bool}
  update(dt, input) {
    this.cool = Math.max(0, this.cool - dt);
    const st = this.state;
    if (st === 'hang' || st === 'swing') this.updHang(dt, input);
    else if (st === 'stand') this.updStand(dt, input);
    else if (st === 'fall') this.updFall(dt, input);
    else if (st === 'script') this.updScript(dt);
    this.pose(dt, input);
  }

  updHang(dt, input) {
    const H = this.hold;
    const isSwing = this.state === 'swing';
    const pivot = isSwing ? H.hold.swing.pivot : V2(H.x, H.y);
    // climb along the hold towards the finger
    if (!isSwing && input.down && input.target) {
      const h = H.hold;
      const p = closestOnSeg(h, input.target.x, input.target.y);
      const L = Math.hypot(h.bx - h.ax, h.by - h.ay) || 1;
      const dt_ = clamp(p.t - H.t, -CLIMB * dt / L, CLIMB * dt / L);
      if (Math.abs(p.t - H.t) > 0.01) { H.t += dt_; this.runPh += dt * 7; this.climbing = 0.25; }
      H.x = h.ax + (h.bx - h.ax) * H.t; H.y = h.ay + (h.by - h.ay) * H.t;
      pivot.set(H.x, H.y);
    }
    if (this.climbing > 0) this.climbing -= dt;
    // pendulum: gravity along +x, angle measured from +x
    const acc = -(G / this.len) * Math.sin(this.phi);
    this.omega += acc * dt;
    // pumping on a swing: move the finger along the swing's motion
    if (isSwing && input.down && input.target) {
      const dir = Math.sign(input.target.y - this.pos.y) || 0;
      if (dir !== 0 && Math.sign(this.omega) === dir) this.omega += dir * 1.4 * dt;
    }
    this.omega *= Math.exp(-dt * (isSwing ? 0.15 : 1.6));
    this.phi += this.omega * dt;
    this.phi = clamp(this.phi, -2.4, 2.4);
    this.pos.set(pivot.x + Math.cos(this.phi) * this.len, pivot.y + Math.sin(this.phi) * this.len);
    if (isSwing) H.hold.swing.seats[1].angle = this.phi;
    if (input.released) this.wantRelease = true;
    if (input.pressed) this.wantRelease = false;
    if (this.wantRelease && !input.down && this.cool <= 0) { this.wantRelease = false; this.letGo(); }
  }

  updStand(dt, input) {
    const w = this.w;
    // standing on a low step in front of the wall (futon, mat...)? stand on its top
    for (const s2 of w.solids) {
      if (s2.on && s2.x0 >= this.face - 0.4 && s2.x0 < this.face - 0.01 && s2.x1 >= this.face - 0.02 && s2.y0 < this.pos.y + HW * 0.4 && s2.y1 > this.pos.y - HW * 0.4) this.face = s2.x0;
    }
    const fx = this.face;
    this.pos.x = fx - LEG;
    if (this.landT <= 0) this.lastSafe = { face: fx, y: this.pos.y };
    // bouncy floor (futon): bounce, pumping while the finger is held
    const b = w.bouncyAt(fx, this.pos.y);
    // bounce when the finger points up into the open air (upstream), or keep bouncing out
    const wantsUp = input.down && input.target && input.target.x < fx - 1.0;
    if (b && this.landT <= 0 && (wantsUp || this.bounceV > 1.2)) {
      const base = Math.max(this.bounceV || 0, 2.2);
      const v = wantsUp ? Math.min(base * b.k + 1.4, 7.2) : base * b.k;
      this.bounceV = v;
      this.vel.set(-v, 0);
      this.state = 'fall'; this.air = 0; this.face = null;
      this.emit('bounce', { v, b });
      return;
    }
    this.landT = Math.max(0, this.landT - dt);
    let want = 0;
    if (input.down && input.target) {
      // pointing into the house (through this floor): head for the nearest opening
      let goalY = input.target.y;
      if (input.target.x > fx - 0.3) {
        const { spans } = w.floorSpan(fx, this.pos.y);
        let bd = 1e9;
        for (let i = 0; i < spans.length - 1; i++) {
          const a = spans[i][1], b2 = spans[i + 1][0];
          if (b2 - a < 0.55 || b2 - a > 5.5) continue;
          const c = (a + b2) / 2, d = Math.abs(c - input.target.y);
          if (d < bd && d < 3.5) { bd = d; goalY = c; }
        }
      }
      const dy = goalY - this.pos.y;
      if (Math.abs(dy) > 0.15) want = Math.sign(dy);
      // a hand-hold near the finger and within reach: reach for it
      const near = w.nearestHold(input.target.x, input.target.y, 0.9);
      if (near && input.pressed && Math.hypot(near.x - (this.pos.x - 0.4), near.y - this.pos.y) < 1.4 && near.x < fx - 0.2) {
        this.grab(near.hold, near.x, near.y, false);
        return;
      }
    } else if (this.autoWalk != null) {
      const dy = this.autoWalk - this.pos.y;
      if (Math.abs(dy) > 0.1) want = Math.sign(dy); else this.autoWalk = null;
    }
    // hop in progress over a small hole
    if (this.hopT > 0) {
      this.hopT -= dt;
      this.pos.y += this.hopV * dt;
      this.runAmt = 0.6;
      if (this.hopT <= 0) {
        if (!w.floorAt(fx, this.pos.y, HW * 0.6)) this.startFall(0.8, 0);
      }
      return;
    }
    const acc = 14;
    const vt = want * RUN * (this.landT > 0 ? 0.3 : 1);
    this.vel.y += clamp(vt - this.vel.y, -acc * dt, acc * dt);
    let ny = this.pos.y + this.vel.y * dt;
    // ceilings / slabs in the direction of travel (don't count the floor face itself)
    const xa = this.pos.x - HEAD, xb = fx - 0.06;
    let blocked = null;
    if (this.vel.y > 0) { const s = w.castUp(this.pos.y + HW, ny + HW, xa, xb); if (s) { blocked = s; ny = s.y0 - HW - 0.001; } }
    else if (this.vel.y < 0) { const s = w.castDown(this.pos.y - HW, ny - HW, xa, xb); if (s) { blocked = s; ny = s.y1 + HW + 0.001; } }
    if (blocked) {
      // a low step (a futon, a mat, a pile): climb onto it instead of stopping
      if (blocked.x0 >= fx - 0.4 && blocked.x0 < fx - 0.02) {
        this.face = blocked.x0; this.pos.x = this.face - LEG;
        ny = this.pos.y + this.vel.y * dt;
        return this.pos.y = ny, undefined;
      }
      this.vel.y = 0;
    }
    // is there floor at the new height?
    let sup = w.floorAt(fx, ny, HW * 0.55);
    if (!sup) {
      // stepping down off a low step back to the wall behind it
      for (const s2 of w.solids) {
        if (s2.on && s2.x0 > fx + 0.02 && s2.x0 <= fx + 0.4 && s2.y0 < ny + HW * 0.5 && s2.y1 > ny - HW * 0.5) {
          this.face = s2.x0; this.pos.x = this.face - LEG; this.pos.y = ny; return;
        }
      }
    }
    if (!sup) {
      // a hole (open window/door) or the end of the floor
      const span = this.holeAt(fx, ny, Math.sign(this.vel.y) || want || 1);
      const tgt = input.down && input.target ? input.target : (this.autoWalk != null ? { x: fx - 1.5, y: this.autoWalk } : null);
      // drop into the hole only if the finger points into it / through it
      const intoHole = !tgt ||
        (span && tgt.x > fx - 0.3 && tgt.y > span.y0 - 1.2 && tgt.y < span.y1 + 1.2) ||
        (span && Math.abs(tgt.x - fx) < 1.2 && tgt.y > span.y0 - 0.2 && tgt.y < span.y1 + 0.2);
      if (span && span.size >= 0.55 && intoHole) {
        this.pos.y = clamp(ny, span.y0 + HW + 0.02, span.y1 - HW - 0.02);
        this.startFall(1.2, 0);
        this.emit('drop', { hole: span });
        return;
      }
      if (span && span.size < 2.2 && span.far) {
        // hop across the gap
        this.hopT = 0.32; this.hopV = (span.far - this.pos.y) / 0.32;
        this.emit('hop', {});
        return;
      }
      if (!span) {
        // ran off the end of the floor (e.g. top of a tree trunk)
        this.pos.y = ny;
        this.startFall(0.8, this.vel.y * 0.5);
        return;
      }
      this.vel.y = 0; ny = this.pos.y;
    }
    this.pos.y = ny;
    this.runAmt += ((Math.abs(this.vel.y) > 0.3 ? 1 : 0) - this.runAmt) * Math.min(1, dt * 8);
    this.runPh += Math.abs(this.vel.y) * dt * 3.3;
    if (this.runAmt > 0.5 && Math.floor(this.runPh / Math.PI) !== this._lastStep) { this._lastStep = Math.floor(this.runPh / Math.PI); this.emit('step', {}); }
    if (Math.abs(this.vel.y) > 0.3) this.yawT = this.vel.y > 0 ? 80 : -80;
    else this.yawT = 0;
  }

  // describe the hole around y on face fx: its span and the far side of the floor
  holeAt(fx, y, dir) {
    const w = this.w;
    let y0 = y, y1 = y;
    const step = 0.05;
    let n = 0;
    while (!w.floorAt(fx, y0 - step, 0.001) && n++ < 120) y0 -= step;
    n = 0;
    while (!w.floorAt(fx, y1 + step, 0.001) && n++ < 120) y1 += step;
    const openBelow = n >= 120;
    const size = y1 - y0;
    if (size > 5.9) return null; // not a hole: the floor just ends
    const far = dir > 0 ? y1 + HW + 0.05 : y0 - HW - 0.05;
    return { y0, y1, size, far: w.floorAt(fx, far, 0.05) ? far : null };
  }

  startFall(vx, vy) {
    this.state = 'fall';
    this.face = null;
    this.vel.set(vx, vy);
    this.air = 0;
    this.cool = 0.12;
  }

  updFall(dt, input) {
    const w = this.w;
    this.air += dt;
    // grab something within reach while the finger is down
    if (input.down && this.cool <= 0) {
      const hand = V2(this.pos.x - 0.55, this.pos.y);
      const near = w.nearestHold(hand.x, hand.y, 0.95);
      if (near) { this.grab(near.hold, near.x, near.y, true); return; }
    }
    // integrate (sideways gravity + air drag)
    const water = w.waterAt(this.pos.x, this.pos.y);
    this.vel.x += G * dt;
    if (water) { this.vel.x -= G * 1.15 * dt; this.vel.multiplyScalar(Math.exp(-dt * 3)); }
    const sp = this.vel.length();
    this.vel.multiplyScalar(1 / (1 + 0.004 * sp * dt));
    let nx = this.pos.x + this.vel.x * dt, ny = this.pos.y + this.vel.y * dt;
    // vertical collisions (body spans x from head to feet)
    const xa = Math.min(this.pos.x, nx) - HEAD, xb = Math.max(this.pos.x, nx) + LEG - 0.05;
    if (this.vel.y > 0) { const s = w.castUp(this.pos.y + HW, ny + HW, xa, xb); if (s) { ny = s.y0 - HW - 0.001; this.vel.y *= -0.1; } }
    else if (this.vel.y < 0) { const s = w.castDown(this.pos.y - HW, ny - HW, xa, xb); if (s) { ny = s.y1 + HW + 0.001; this.vel.y *= -0.1; } }
    // horizontal: land on west faces, bump the head on east faces
    if (this.vel.x > 0) {
      const s = w.castEast(this.pos.x + LEG, nx + LEG, ny - HW, ny + HW);
      if (s) {
        this.pos.set(s.x0 - LEG, ny);
        this.land(s);
        return;
      }
    } else if (this.vel.x < 0) {
      const s = w.castWest(this.pos.x - HEAD, nx - HEAD, ny - HW, ny + HW);
      if (s) { nx = s.x1 + HEAD + 0.001; this.vel.x *= -0.2; this.emit('bump', {}); }
    }
    this.pos.set(nx, ny);
    if (this.pos.x > 90 || this.pos.y < -2 || this.pos.y > 30) this.emit('lost', {});
  }

  land(s) {
    const impact = this.vel.x;
    this.face = s.x0;
    this.state = 'stand';
    this.vel.set(0, 0);
    this.landT = impact > 4 ? 0.28 : 0.12;
    this.autoWalk = null;
    this.emit('land', { impact, solid: s });
    if (s.kind === 'futon') this.bounceV = impact;
  }

  updScript(dt) {
    if (this.script) this.script(dt);
  }

  // ---- visuals
  pose(dt, input) {
    const h = this.h;
    const st = this.state;
    let bodyAng; // angle of body axis (feet->head direction) in world, measured from +y ccw
    if (st === 'stand' || st === 'script') {
      bodyAng = Math.PI / 2; // head towards -x
      if (this.hopT > 0) h.setPose({ ...POSE.jumpUp });
      else if (this.runAmt > 0.2) h.setPose(runPose(this.runPh, this.runAmt));
      else if (this.landT > 0) h.setPose(POSE.crouch);
      else h.setPose(POSE.stand);
      if (this.hasParcel) h.addPose(POSE.holdBox);
      else if (st === 'stand' && this.runAmt < 0.2 && !this.landT) h.addPose({ shoulderR: [-10, 0, -8] });
    } else if (st === 'hang' || st === 'swing') {
      bodyAng = Math.PI / 2 + this.phi;
      if (this.climbing > 0) h.setPose(climbPose(this.runPh));
      else h.setPose(st === 'swing' ? POSE.sitHold : POSE.hang);
      if (this.hasParcel && !(this.climbing > 0)) h.addPose({ shoulderR: [5, 0, 0], elbowR: [-5] });
      this.yawT = 0;
    } else {
      // falling: feet first along the velocity, a bit of tumble
      const va = Math.atan2(this.vel.y, Math.max(0.3, this.vel.x));
      bodyAng = Math.PI / 2 + va * 0.5;
      h.setPose(POSE.fall);
      if (this.hasParcel) h.addPose({ shoulderR: [0, 0, 0], elbowR: [0] });
      this.yawT = 0;
    }
    if (this.overridePose) { h.setPose(this.overridePose); }
    // smooth body rotation
    if (this.bodyAng === undefined || isNaN(this.bodyAng)) this.bodyAng = bodyAng;
    let d = bodyAng - this.bodyAng; d = Math.atan2(Math.sin(d), Math.cos(d));
    this.bodyAng += d * Math.min(1, dt * (st === 'fall' ? 5 : 12));
    this.yaw += (this.yawT - this.yaw) * Math.min(1, dt * 8);
    const r = h.root;
    r.position.set(this.pos.x, this.pos.y, this.z);
    r.rotation.set(0, 0, 0);
    r.rotateZ(this.bodyAng);
    r.rotateY(this.yaw * Math.PI / 180);
    // pelvis offset so feet touch the floor (the rig's hip is its origin)
    h.update(dt, 12);
  }
}
