// Overhead crane: a trolley on a monorail track bolted to the town. The track
// leaves the town street (z = pathZ) and curves out over the upper terrace, so
// one hook can reach the high road, the building yard, and the far half.
import * as THREE from 'three';
import { L } from './layout.js';
import { Rope, makeHook } from './rope.js';
import { MATS } from './world.js';
import { tl } from './town.js';
import { clamp, damp } from './util.js';
import { sound } from './audio.js';

export class Crane {
  constructor(game) {
    this.g = game; const grp = game.town.group; this.grp = grp;
    // track polyline (town-local), x monotonic
    const pts = [];
    const p0 = tl(L.gantryX0, 0, L.upZ), p1 = tl(11.6, 0, L.upZ), p2 = tl(16.8, 0, L.pathZ), p3 = tl(L.gantryX1, 0, L.pathZ);
    pts.push(p0.clone());
    for (let i = 0; i <= 24; i++) {
      const u = i / 24, a = 1 - u; // cubic with horizontal tangents
      const c1 = p1.clone().lerp(p2, 0.5).setZ(p1.z), c2 = p1.clone().lerp(p2, 0.5).setZ(p2.z);
      pts.push(new THREE.Vector3(
        a * a * a * p1.x + 3 * a * a * u * c1.x + 3 * a * u * u * c2.x + u * u * u * p2.x, 0,
        a * a * a * p1.z + 3 * a * a * u * c1.z + 3 * a * u * u * c2.z + u * u * u * p2.z));
    }
    pts.push(p3.clone());
    this.track = pts; this.y = L.gantryY + 0.3;
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], d = b.clone().sub(a), len = d.length();
      if (len < 1e-3) continue;
      const seg = new THREE.Mesh(new THREE.BoxGeometry(len + 0.05, 0.34, 0.3), MATS.iron);
      seg.position.copy(a).addScaledVector(d, 0.5).setY(this.y); seg.rotation.y = -Math.atan2(d.z, d.x); seg.castShadow = true; grp.add(seg);
    }
    const tie = (a, b) => { const d = new THREE.Vector3().subVectors(b, a); const t = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, d.length(), 5), MATS.iron); t.position.copy(a).addScaledVector(d, 0.5); t.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); t.castShadow = true; grp.add(t); };
    const top = tl(15.3, L.gantryY + 4.1, L.pathZ);
    tie(top, p0.clone().setY(this.y + 0.1)); tie(top, tl(11.6, this.y + 0.1, L.upZ)); tie(top, tl(25.0, this.y + 0.1, L.pathZ));
    // trolley + hook
    this.trolley = new THREE.Group(); grp.add(this.trolley);
    const tb = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.35, 0.5), MATS.darkWood); tb.position.y = -0.35; this.trolley.add(tb);
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.46, 12), MATS.iron); drum.rotation.x = Math.PI / 2; drum.position.y = -0.55; this.trolley.add(drum);
    this.trolley.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.rope = new Rope(grp, { width: 0.045, color: 0x4d4843, metal: true, segments: 6 });
    this.hook = makeHook(MATS.iron, 1.6); grp.add(this.hook);
    this.tx = 9.0 - L.seamX; this.len = 6.0; this.targetTx = this.tx; this.targetLen = this.len;
    this.minX = L.gantryX0 - L.seamX + 0.3; this.maxX = L.gantryX1 - L.seamX - 0.4;
    this.load = null; this.catchables = []; this.held = false; this.sway = 0; this.swayV = 0; this.prevTx = this.tx;
    this.hookLocal = new THREE.Vector3(); this.hookWorld = new THREE.Vector3(); this.minLen = 0.9;
  }
  trackAt(x, out = new THREE.Vector3()) {
    const P = this.track;
    if (x <= P[0].x) return out.copy(P[0]).setY(this.y);
    for (let i = 0; i < P.length - 1; i++) {
      if (x <= P[i + 1].x) { const u = (x - P[i].x) / Math.max(1e-4, P[i + 1].x - P[i].x); return out.lerpVectors(P[i], P[i + 1], u).setY(this.y); }
    }
    return out.copy(P[P.length - 1]).setY(this.y);
  }
  // Finger target in town-local coordinates -> trolley x + rope length.
  aim(local) {
    this.targetTx = clamp(local.x, this.minX, this.maxX);
    const floor = this.floorUnder ? this.floorUnder(this.targetTx) : 0;
    this.targetLen = clamp(this.y - local.y, this.minLen, this.y - floor - 0.35);
  }
  worldToLocal(p) { this.grp.updateWorldMatrix(true, false); return this.grp.worldToLocal(p.clone()); }
  localToWorld(p) { this.grp.updateWorldMatrix(true, false); return this.grp.localToWorld(p.clone()); }

  update(dt) {
    const rate = this.load ? 3.2 : 5;
    const prev = this.tx;
    this.tx = damp(this.tx, this.targetTx, rate, dt);
    this.len = damp(this.len, this.targetLen, rate * 0.9, dt);
    const tv = (this.tx - prev) / Math.max(dt, 1e-4);
    const top = this.trackAt(this.tx, new THREE.Vector3());
    this.trolley.position.copy(top);
    // travelling along the curve: orient trolley to the track tangent
    const ahead = this.trackAt(this.tx + 0.3, new THREE.Vector3());
    this.trolley.rotation.y = -Math.atan2(ahead.z - top.z, ahead.x - top.x);
    // empty hook swings a little; a loaded hook sits where the load's ring is
    this.swayV += (-5 * this.sway - 1.2 * this.swayV - (tv - (this.prevV || 0)) / Math.max(dt, 1e-3) * 0.02) * dt; this.sway += this.swayV * dt; this.prevV = tv;
    if (this.hookOverride) this.hookLocal.copy(this.hookOverride());
    else {
      // the hook hangs world-down from the trolley, even when the town tilts
      const tw = this.localToWorld(top.clone().setY(top.y - 0.55));
      tw.y -= this.len; tw.x += this.load ? 0 : Math.sin(this.sway) * 0.4;
      this.hookLocal.copy(this.worldToLocal(tw));
    }
    this.hookWorld.copy(this.localToWorld(this.hookLocal));
    if (this.load && this.load.update) this.load.update(dt, this);
    this.hook.position.copy(this.hookLocal);
    this.rope.set(top.clone().setY(top.y - 0.55), this.hookLocal.clone().add(new THREE.Vector3(0, 0.12, 0)), 0);
    // catch any enabled ring close to the hook
    if (!this.load) {
      for (const c of this.catchables) {
        if (c.enabled && !c.enabled()) continue;
        const r = c.ringWorld();
        if (r.distanceTo(this.hookWorld) < (c.radius || 0.75)) { this.attach(c); break; }
      }
    }
    const moving = Math.abs(tv) > 0.05;
    sound.loop('roll').set(moving ? Math.min(1, Math.abs(tv) * 0.4) : 0, this.g.pan(this.hookWorld));
    this.prevTx = this.tx;
  }
  attach(c) {
    this.load = c; c.onCatch && c.onCatch(this); sound.clink(this.g.pan(this.hookWorld), 0.9, 0.45);
  }
  detach() { const c = this.load; this.load = null; if (c && c.onDetach) c.onDetach(this); this.targetLen = Math.min(this.targetLen, 2.0); }
}
