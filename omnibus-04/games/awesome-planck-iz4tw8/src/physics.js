// Rapier 3D rigid bodies under sideways gravity (+x).
import * as THREE from 'three';
import RAPIER from '../vendor/rapier.es.js';
import { G } from './level.js';

export const P = {
  R: null, world: null, bodies: [], statics: new Map(), stepDt: 1 / 60, acc: 0, alpha: 0,
};

export async function initPhysics() {
  try {
    if (/[?&]nophys/.test(location.search)) throw new Error('forced');
    await RAPIER.init();
    P.R = RAPIER;
    P.world = new RAPIER.World({ x: G, y: 0, z: 0 });
    P.world.integrationParameters.numSolverIterations = 4;
  } catch (e) {
    // no WebAssembly here: things still fall sideways, they just don't collide
    console.warn('physics fallback', e);
    P.fallback = true;
  }
  return P;
}

// static axis-aligned box (min/max corners). Returns the collider.
export function staticBox(x0, y0, z0, x1, y1, z1, opts = {}) {
  if (P.fallback) return null;
  const R = P.R;
  const hx = Math.abs(x1 - x0) / 2, hy = Math.abs(y1 - y0) / 2, hz = Math.abs(z1 - z0) / 2;
  if (hx < 1e-3 || hy < 1e-3 || hz < 1e-3) return null;
  const d = R.ColliderDesc.cuboid(hx, hy, hz).setTranslation((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2)
    .setFriction(opts.friction ?? 0.6).setRestitution(opts.restitution ?? 0.1);
  const c = P.world.createCollider(d);
  if (opts.id) { if (!P.statics.has(opts.id)) P.statics.set(opts.id, []); P.statics.get(opts.id).push(c); }
  return c;
}

export function staticConvex(points, opts = {}) {
  if (P.fallback) return null;
  const R = P.R;
  const arr = new Float32Array(points.length * 3);
  points.forEach((p, i) => { arr[i * 3] = p.x; arr[i * 3 + 1] = p.y; arr[i * 3 + 2] = p.z; });
  const d = R.ColliderDesc.convexHull(arr);
  if (!d) return null;
  d.setFriction(opts.friction ?? 0.5).setRestitution(0.05);
  return P.world.createCollider(d);
}

export function staticCylinder(x, y0, y1, z, r, opts = {}) {
  if (P.fallback) return null;
  const R = P.R;
  const d = R.ColliderDesc.cylinder((y1 - y0) / 2, r).setTranslation(x, (y0 + y1) / 2, z).setFriction(opts.friction ?? 0.5);
  return P.world.createCollider(d);
}

export function setStaticEnabled(id, on) {
  if (P.fallback) return;
  const list = P.statics.get(id);
  if (list) list.forEach(c => c.setEnabled(on));
}

// shape: {kind:'box', hx,hy,hz} | {kind:'ball', r} | {kind:'cyl', hh, r} | {kind:'hull', points:Float32Array}
// parts: optional array of shapes with offsets {shape, offset:[x,y,z]}
export function dynamicBody(obj, parts, { mass = 10, friction = 0.6, restitution = 0.15, linDamp = 0.02, angDamp = 0.05, vel, angvel, sleep = false, ccd = false, gravityScale = 1 } = {}) {
  const R = P.R;
  const p = obj.position, q = obj.quaternion;
  if (P.fallback) {
    const rec = { body: null, obj, born: performance.now(), fb: { v: new THREE.Vector3(vel?.x || 0, vel?.y || 0, vel?.z || 0), w: new THREE.Vector3(angvel?.x || 0, angvel?.y || 0, angvel?.z || 0), gs: gravityScale, damp: linDamp, still: !vel } };
    P.bodies.push(rec);
    return rec;
  }
  const bd = R.RigidBodyDesc.dynamic().setTranslation(p.x, p.y, p.z).setRotation({ x: q.x, y: q.y, z: q.z, w: q.w })
    .setLinearDamping(linDamp).setAngularDamping(angDamp).setCanSleep(true).setCcdEnabled(ccd).setGravityScale(gravityScale);
  if (sleep) bd.setSleeping(true);
  const body = P.world.createRigidBody(bd);
  let vol = 0;
  const descs = parts.map(({ shape: s, offset = [0, 0, 0] }) => {
    let d, v;
    if (s.kind === 'box') { d = R.ColliderDesc.cuboid(s.hx, s.hy, s.hz); v = 8 * s.hx * s.hy * s.hz; }
    else if (s.kind === 'ball') { d = R.ColliderDesc.ball(s.r); v = 4.19 * s.r ** 3; }
    else if (s.kind === 'cyl') { d = R.ColliderDesc.cylinder(s.hh, s.r); v = 6.28 * s.hh * s.r * s.r; }
    else if (s.kind === 'hull') { d = R.ColliderDesc.convexHull(s.points); v = s.vol || 0.05; }
    d.setTranslation(offset[0], offset[1], offset[2]);
    if (s.rot) d.setRotation(s.rot);
    vol += v;
    return d;
  });
  for (const d of descs) {
    d.setDensity(mass / Math.max(vol, 1e-6)).setFriction(friction).setRestitution(restitution);
    P.world.createCollider(d, body);
  }
  if (vel) body.setLinvel(vel, true);
  if (angvel) body.setAngvel(angvel, true);
  const rec = { body, obj, prevP: p.clone(), prevQ: q.clone(), curP: p.clone(), curQ: q.clone(), born: performance.now() };
  P.bodies.push(rec);
  return rec;
}

export function isSleeping(rec) { return rec.body ? rec.body.isSleeping() : !!rec.fb?.still; }

export function removeBody(rec) {
  const i = P.bodies.indexOf(rec);
  if (i >= 0) P.bodies.splice(i, 1);
  if (rec.body) P.world.removeRigidBody(rec.body);
  if (rec.obj.parent) rec.obj.parent.remove(rec.obj);
}

export function kinematicCapsule(halfLen, r) {
  if (P.fallback) return null;
  const R = P.R;
  const body = P.world.createRigidBody(R.RigidBodyDesc.kinematicPositionBased());
  P.world.createCollider(R.ColliderDesc.capsule(halfLen, r).setFriction(0.3), body);
  return body;
}

// fixed-step simulation with interpolated rendering
const _e = new THREE.Euler(), _q = new THREE.Quaternion();
function stepFallback(dt) {
  for (const b of P.bodies) {
    const f = b.fb;
    if (!f || f.still) continue;
    f.v.x += G * f.gs * dt;
    f.v.multiplyScalar(Math.exp(-f.damp * dt));
    b.obj.position.addScaledVector(f.v, dt);
    _q.setFromEuler(_e.set(f.w.x * dt, f.w.y * dt, f.w.z * dt));
    b.obj.quaternion.multiply(_q);
  }
}

export function stepPhysics(dt, maxSteps = 3) {
  if (P.fallback) return stepFallback(Math.min(dt, 0.05));
  P.acc += Math.min(dt, 0.1);
  let n = 0;
  while (P.acc >= P.stepDt && n < maxSteps) {
    for (const b of P.bodies) { b.prevP.copy(b.curP); b.prevQ.copy(b.curQ); }
    P.world.step();
    for (const b of P.bodies) {
      const t = b.body.translation(), r = b.body.rotation();
      b.curP.set(t.x, t.y, t.z); b.curQ.set(r.x, r.y, r.z, r.w);
    }
    P.acc -= P.stepDt; n++;
  }
  if (n === maxSteps) P.acc = 0;
  const a = P.acc / P.stepDt;
  for (const b of P.bodies) {
    b.obj.position.lerpVectors(b.prevP, b.curP, a);
    b.obj.quaternion.slerpQuaternions(b.prevQ, b.curQ, a);
  }
}

// run the world forward without rendering (used to let rooms settle at load)
export function settle(steps) {
  if (P.fallback) return;
  for (let i = 0; i < steps; i++) P.world.step();
  for (const b of P.bodies) {
    const t = b.body.translation(), r = b.body.rotation();
    b.curP.set(t.x, t.y, t.z); b.curQ.set(r.x, r.y, r.z, r.w);
    b.prevP.copy(b.curP); b.prevQ.copy(b.curQ);
    b.obj.position.copy(b.curP); b.obj.quaternion.copy(b.curQ);
  }
}
