// カメラ：固定・追従・演出の 3 種類を、途切れずに滑らかにつなぐ
import * as THREE from '../vendor/three.module.min.js';

const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const smooth = (u) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

export class CameraRig {
  constructor(camera) {
    this.cam = camera;
    this.gen = null;
    this.prevGen = null;
    this.blend = 1;
    this.blendDur = 1;
    this.camH = 0;
    this.camPitch = 0;
    this.carY = 0;
    this.fp = null; // 追従パラメータ（現在値）
    this.fpFrom = null;
    this.fpTo = null;
    this.fpT = 1;
    this.fpDur = 1;
    this.shake = 0;
    this.out = { pos: V(), look: V(), fov: 50 };
    this.occluders = []; // [x0, x1, y0, y1, z0, z1]：カメラが壁の中に入らないように
    this.occK = 1;
    this.car = null;
    this._tmp = V();
  }

  attach(car) {
    this.car = car;
    this.camH = car.h;
  }

  _switch(gen, dur) {
    if (this.gen && dur > 0) {
      const last = { pos: this.out.pos.clone(), look: this.out.look.clone(), fov: this.out.fov };
      const prev = this.gen;
      // 直前のモードは「生きたまま」評価し続けて混ぜる
      this.prevGen = prev || (() => last);
      this.blend = 0;
      this.blendDur = dur;
    } else {
      this.blend = 1;
    }
    this.gen = gen;
  }

  setFixed(pos, look, fov, dur = 0) {
    const p = pos.clone(), l = look.clone();
    this._switch(() => ({ pos: p, look: l, fov }), dur);
  }

  setFollow(params, dur = 0) {
    const P = { ...params, look: params.look.clone() };
    if (this.gen === this._followGen && this.fp) {
      this.fpFrom = { ...this.fp, look: this.fp.look.clone() };
      this.fpTo = P;
      this.fpT = 0;
      this.fpDur = dur;
      return;
    }
    this.fp = { ...P, look: P.look.clone() };
    this.fpFrom = null;
    this.fpTo = P;
    this.fpT = 1;
    if (!this._followGen) this._followGen = (dt) => this._follow(dt);
    this._switch(this._followGen, dur);
  }

  // keys: [{t, pos: Vector3, look: Vector3, fov}]
  setCine(keys, dur = 0) {
    let t = 0;
    const gen = (dt) => {
      t += dt;
      return sampleKeys(keys, t);
    };
    this._switch(gen, dur);
  }

  _follow(dt) {
    const car = this.car;
    if (this.fpT < 1) {
      this.fpT = Math.min(1, this.fpT + dt / this.fpDur);
      const u = smooth(this.fpT);
      const a = this.fpFrom, b = this.fpTo;
      this.fp.az = a.az + wrap(b.az - a.az) * u;
      this.fp.el = a.el + (b.el - a.el) * u;
      this.fp.dist = a.dist + (b.dist - a.dist) * u;
      this.fp.ahead = a.ahead + (b.ahead - a.ahead) * u;
      this.fp.fov = a.fov + (b.fov - a.fov) * u;
      this.fp.lag = a.lag + (b.lag - a.lag) * u;
      this.fp.pitchFollow = a.pitchFollow + (b.pitchFollow - a.pitchFollow) * u;
      this.fp.look.lerpVectors(a.look, b.look, u);
    }
    const p = this.fp;
    const k = 1 - Math.exp(-dt * (p.lag + Math.abs(car.v) * 0.4));
    this.camH += wrap(car.h - this.camH) * k;
    this.camPitch += (car.pitch * p.pitchFollow - this.camPitch) * (1 - Math.exp(-dt * 4));
    this.carY += (car.y - this.carY) * (1 - Math.exp(-dt * 8));
    const off = V(-Math.sin(p.az) * Math.cos(p.el) * p.dist, Math.sin(p.el) * p.dist, -Math.cos(p.az) * Math.cos(p.el) * p.dist);
    const lk = p.look.clone().add(V(0, 0, p.ahead));
    const e = new THREE.Euler(-this.camPitch, this.camH, 0, 'YXZ');
    off.applyEuler(e);
    lk.applyEuler(e);
    const base = V(car.x, this.carY, car.z);
    const pos = base.clone().add(off);
    // 壁や建物がカメラと車のあいだに入ったら、車に近づく
    const from = base.clone().add(V(0, 1.0, 0));
    let tMin = 1;
    for (const b of this.occluders) {
      const t = segBox(from, pos, b);
      if (t !== null && t < tMin) tMin = t;
    }
    const want = tMin < 1 ? Math.max(0.2, tMin - 0.08) : 1;
    this.occK += (want - this.occK) * (1 - Math.exp(-dt * (want < this.occK ? 14 : 2)));
    pos.lerpVectors(from, pos, this.occK);
    return { pos, look: base.clone().add(lk), fov: p.fov };
  }

  update(dt) {
    if (!this.gen) return;
    let o = this.gen(dt);
    if (this.blend < 1 && this.prevGen) {
      this.blend = Math.min(1, this.blend + dt / this.blendDur);
      const a = this.prevGen(dt);
      const u = smooth(this.blend);
      o = {
        pos: a.pos.clone().lerp(o.pos, u),
        look: a.look.clone().lerp(o.look, u),
        fov: a.fov + (o.fov - a.fov) * u,
      };
      if (this.blend >= 1) this.prevGen = null;
    }
    this.out.pos.copy(o.pos);
    this.out.look.copy(o.look);
    this.out.fov = o.fov;
    // 小さな揺れ（ガードに当たったとき）
    this.shake = Math.max(0, this.shake - dt * 2.5);
    const s = this.shake * this.shake * 0.08;
    this.cam.position.copy(o.pos).add(V((Math.random() - 0.5) * s, (Math.random() - 0.5) * s, (Math.random() - 0.5) * s));
    this.cam.lookAt(o.look);
  }
}

export function sampleKeys(keys, t) {
  if (t <= keys[0].t) return { pos: keys[0].pos.clone(), look: keys[0].look.clone(), fov: keys[0].fov };
  const n = keys.length;
  if (t >= keys[n - 1].t) return { pos: keys[n - 1].pos.clone(), look: keys[n - 1].look.clone(), fov: keys[n - 1].fov };
  let i = 0;
  while (i < n - 2 && t > keys[i + 1].t) i++;
  const k0 = keys[Math.max(0, i - 1)], k1 = keys[i], k2 = keys[i + 1], k3 = keys[Math.min(n - 1, i + 2)];
  const u = smooth((t - k1.t) / (k2.t - k1.t));
  const cr = (a, b, c, d) => {
    // Catmull-Rom（滑らかな通過）
    const u2 = u * u, u3 = u2 * u;
    return 0.5 * (2 * b + (-a + c) * u + (2 * a - 5 * b + 4 * c - d) * u2 + (-a + 3 * b - 3 * c + d) * u3);
  };
  const vec = (key) => V(
    cr(k0[key].x, k1[key].x, k2[key].x, k3[key].x),
    cr(k0[key].y, k1[key].y, k2[key].y, k3[key].y),
    cr(k0[key].z, k1[key].z, k2[key].z, k3[key].z),
  );
  return { pos: vec('pos'), look: vec('look'), fov: k1.fov + (k2.fov - k1.fov) * u };
}

// 線分 a→b が箱に入る位置（0..1）。入らなければ null
function segBox(a, b, box) {
  let t0 = 0, t1 = 1;
  const d = [b.x - a.x, b.y - a.y, b.z - a.z];
  const o = [a.x, a.y, a.z];
  for (let i = 0; i < 3; i++) {
    const lo = box[i * 2], hi = box[i * 2 + 1];
    if (Math.abs(d[i]) < 1e-9) {
      if (o[i] < lo || o[i] > hi) return null;
    } else {
      let ta = (lo - o[i]) / d[i], tb = (hi - o[i]) / d[i];
      if (ta > tb) [ta, tb] = [tb, ta];
      t0 = Math.max(t0, ta);
      t1 = Math.min(t1, tb);
      if (t0 > t1) return null;
    }
  }
  return t0;
}
