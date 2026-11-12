// 種とじょうろ: 手で触れて動かす道具
import * as THREE from '../vendor/three.module.min.js';
import { makeLit } from '../core/materials.js';
import { makeMaterial } from '../core/shared.js';
import { colorize, merge } from '../core/geom.js';
import { clamp, lerp, damp, Spring, smooth } from '../core/util.js';
import { PLOT } from './garden.js';

const _v = new THREE.Vector3(), _p = new THREE.Plane(), _n = new THREE.Vector3();

// ------------------------------------------------------------
// 種
// ------------------------------------------------------------
export function createSeed(G) {
  // しずく形の旋盤 + 縞模様
  const pts = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    const r = Math.sin(Math.PI * Math.pow(t, 0.8)) * (0.42 + 0.58 * (1 - t) * 0.9) * 0.05;
    pts.push(new THREE.Vector2(Math.max(0.0005, r), (t - 0.45) * 0.13));
  }
  const geo = new THREE.LatheGeometry(pts, 24);
  geo.rotateZ(Math.PI / 2);
  geo.scale(1, 0.8, 1);
  const p = geo.getAttribute('position');
  const col = new Float32Array(p.count * 3);
  const dark = new THREE.Color(0x4a2a16), light = new THREE.Color(0x9a6a3a), stripe = new THREE.Color(0xe8d2a0);
  const c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const a = Math.atan2(z, y);
    const s = Math.pow(Math.max(0, Math.cos(a * 4)), 14);
    c.copy(dark).lerp(light, 0.4 + 0.3 * Math.sin(x * 60)).lerp(stripe, s * 0.85);
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const mesh = new THREE.Mesh(geo, makeLit(G, { spec: 1.2, wrap: 0.4 }));
  const group = new THREE.Group();
  group.add(mesh);
  G.scene.add(group);
  // 光る点 (気づきのきらめき)
  const seed = {
    group, mesh,
    pos: new THREE.Vector3(0.14, 0.0, 0.6),
    vel: new THREE.Vector3(),
    held: false, target: new THREE.Vector3(), planted: false, enabled: true,
    spin: 0, spinV: 0, roll: 0,
    lastMove: 0,
    ground(x, z) {
      if (Math.abs(x) < PLOT.w / 2 + 0.05 && Math.abs(z) < PLOT.d / 2 + 0.05) return G.garden.plot.soilHeight(x, z);
      return 0;
    },
    update(dt) {
      if (this.planted) {
        // くぼみの底に収まる
        const gy = this.ground(0, 0);
        this.pos.lerp(_v.set(0, gy + 0.018, 0), 1 - Math.exp(-6 * dt));
        group.position.copy(this.pos);
        group.rotation.set(0, 0.3, Math.PI / 2 * 0.15);
        return;
      }
      if (this.held) {
        const prev = this.pos.clone();
        this.pos.lerp(this.target, 1 - Math.exp(-18 * dt));
        this.vel.copy(this.pos).sub(prev).divideScalar(Math.max(dt, 1e-3));
        this.spinV = damp(this.spinV, this.vel.x * 6, 5, dt);
      } else {
        this.vel.y -= 9.8 * dt;
        this.pos.addScaledVector(this.vel, dt);
        const gy = this.ground(this.pos.x, this.pos.z) + 0.03;
        if (this.pos.y <= gy) {
          this.pos.y = gy;
          if (this.vel.y < -0.8) { G.audio && G.audio.play('seedTap', { pan: this.pan(), vol: Math.min(1, -this.vel.y / 3) }); }
          this.vel.y = Math.abs(this.vel.y) * 0.35;
          if (this.vel.y < 0.15) this.vel.y = 0;
          // 地面での転がり: 摩擦 + くぼみへ向かう斜面
          const fr = Math.exp(-2.2 * dt);
          this.vel.x *= fr; this.vel.z *= fr;
          const d = Math.hypot(this.pos.x, this.pos.z);
          const inPlot = Math.abs(this.pos.x) < PLOT.w / 2 && Math.abs(this.pos.z) < PLOT.d / 2;
          // くぼみの周りの土は内側へ傾いている (成功に近い所は自然に助ける)
          const sp = Math.hypot(this.vel.x, this.vel.z);
          // くぼみの斜面の中は自然に転がり込む。外では、転がっている時だけ少し寄せる
          const pull = d < PLOT.hollowR * 1.8 ? 3.2 : (inPlot && d < 0.9 && sp > 0.06) ? 1.6 : 0;
          if (pull > 0 && d > 0.01) { this.vel.x -= this.pos.x / d * pull * dt; this.vel.z -= this.pos.z / d * pull * dt; }
          if (d < PLOT.hollowR * 0.55 && Math.hypot(this.vel.x, this.vel.z) < 0.5) {
            this.planted = true;
            this.onPlanted && this.onPlanted();
          }
          this.spinV = damp(this.spinV, -Math.hypot(this.vel.x, this.vel.z) * 12 * Math.sign(this.vel.x || 1), 6, dt);
        }
      }
      this.roll += this.spinV * dt;
      group.position.copy(this.pos);
      group.rotation.set(0, Math.atan2(-this.vel.z, this.vel.x) * 0.2, this.roll);
    },
    pan() { const s = G.input.project(this.pos); return clamp(s.x / G.viewW * 2 - 1, -1, 1); },
    hopToward(tx, tz, power = 1) {
      const dx = tx - this.pos.x, dz = tz - this.pos.z;
      const d = Math.max(0.01, Math.hypot(dx, dz));
      const sp = Math.min(1.6, d * 2.2 + 0.25) * power;
      this.vel.set(dx / d * sp, 1.6 * power, dz / d * sp);
      this.spinV = 14 * Math.sign(dx || 1);
    },
  };
  seed.pos.y = seed.ground(seed.pos.x, seed.pos.z) + 0.03;
  // 入力
  seed.input = G.input.add({
    enabled: () => seed.enabled && !seed.planted,
    pick: (ptr) => { const d = G.input.screenDist(seed.pos, ptr); return d < G.input.fingerR * 1.4 ? d * 0.5 : null; },
    down: (ptr) => {
      seed.held = true; seed.grabT = G.time;
      seed.target.copy(seed.pos).add(_v.set(0, 0.06, 0));
      G.audio && G.audio.play('pick', { pan: seed.pan() });
      seed.onTouch && seed.onTouch();
    },
    move: (ptr) => {
      // 地面から少し上の水平面に指の位置を写す
      _p.set(_n.set(0, 1, 0), -0.22);
      const hit = ptr.ray.intersectPlane(_p, _v);
      if (hit) {
        hit.x = clamp(hit.x, -2.5, 2.5); hit.z = clamp(hit.z, -1.6, 2.2);
        seed.target.set(hit.x, Math.max(0.16, seed.ground(hit.x, hit.z) + 0.12), hit.z);
      }
    },
    up: (ptr, info) => {
      seed.held = false;
      if (info.tap) {
        // 軽く弾く: くぼみの方へ跳ねる
        seed.hopToward(0, 0, 0.8);
        G.audio && G.audio.play('seedTap', { pan: seed.pan() });
      } else {
        // 離した場所がくぼみに近ければ、そっと吸い込まれる
        const d = Math.hypot(seed.pos.x, seed.pos.z);
        if (d < 0.6) seed.vel.set(-seed.pos.x * 1.2, 0.2, -seed.pos.z * 1.2);
        else seed.vel.multiplyScalar(0.5);
      }
    },
  });
  return seed;
}

// ------------------------------------------------------------
// じょうろ
// ------------------------------------------------------------
export function createCan(G) {
  const BODY = 0x78c6bd, RIM = 0xf4f2ea, ROSE = 0xffcf3e;
  const parts = [];
  const body = new THREE.CylinderGeometry(0.12, 0.13, 0.22, 26, 1); body.translate(0, 0.11, 0); parts.push(colorize(body, BODY));
  const top = new THREE.SphereGeometry(0.12, 26, 8, 0, Math.PI * 2, 0, Math.PI / 2); top.scale(1, 0.35, 1); top.translate(0, 0.22, 0); parts.push(colorize(top, BODY));
  const rim = new THREE.TorusGeometry(0.125, 0.012, 6, 26); rim.rotateX(Math.PI / 2); rim.translate(0, 0.005, 0); parts.push(colorize(rim, RIM));
  const rim2 = rim.clone(); rim2.translate(0, 0.21, 0); parts.push(rim2);
  // 注ぎ口 (前 = +X に向かって斜め上)
  const spoutLen = 0.36;
  const spout = new THREE.CylinderGeometry(0.014, 0.026, spoutLen, 12); spout.translate(0, spoutLen / 2, 0); spout.rotateZ(-0.95); spout.translate(0.09, 0.05, 0);
  parts.push(colorize(spout, BODY));
  const tipX = 0.09 + Math.sin(0.95) * spoutLen, tipY = 0.05 + Math.cos(0.95) * spoutLen;
  const rose = new THREE.CylinderGeometry(0.04, 0.016, 0.05, 16); rose.translate(0, 0.025, 0); rose.rotateZ(-0.95); rose.translate(tipX, tipY, 0);
  parts.push(colorize(rose, ROSE));
  // 取っ手 (上〜後ろ)
  const handle = new THREE.TorusGeometry(0.1, 0.016, 8, 20, Math.PI * 1.1); handle.rotateZ(Math.PI * 0.35); handle.translate(-0.03, 0.24, 0); parts.push(colorize(handle, BODY));
  const geo = merge(parts);
  const mesh = new THREE.Mesh(geo, makeLit(G, { spec: 0.9, wrap: 0.4 }));
  const pivot = new THREE.Group(); // 底の前寄りを支点に傾く
  pivot.add(mesh);
  mesh.position.set(-0.1, 0, 0);
  const group = new THREE.Group();
  group.add(pivot);
  pivot.position.set(0.1, 0, 0);
  G.scene.add(group);
  // 注ぎ口の先 (ローカル)
  const roseLocal = new THREE.Vector3(tipX + Math.sin(0.95) * 0.05 - 0.1, tipY + Math.cos(0.95) * 0.05, 0);
  const home = new THREE.Vector3(0.88, 0, 1.08);
  const can = {
    group, pivot, mesh, home,
    pos: home.clone(), target: home.clone(), vel: new THREE.Vector3(),
    yaw: Math.atan2(1.08, -0.88) + 0.1,
    tilt: new Spring(0.0, 40, 6), held: false, enabled: true,
    pouring: 0, emitAcc: 0, totalPoured: 0,
    roseWorld(out) { pivot.updateWorldMatrix(true, false); return out.copy(roseLocal).applyMatrix4(pivot.matrixWorld); },
    spoutDir(out) {
      pivot.updateWorldMatrix(true, false);
      const a = new THREE.Vector3(Math.sin(0.95), Math.cos(0.95), 0).transformDirection(pivot.matrixWorld);
      return out.copy(a);
    },
    pan() { const s = G.input.project(this.pos); return clamp(s.x / G.viewW * 2 - 1, -1, 1); },
    update(dt) {
      const prev = this.pos.clone();
      if (this.held) {
        this.pos.lerp(this.target, 1 - Math.exp(-12 * dt));
      } else if (this.autoPour > 0) {
        // 子どもが持ち上げて傾けてみせる
        this.pos.lerp(new THREE.Vector3(0.5, 0.42, 0.62), 1 - Math.exp(-5 * dt));
        this.restX = this.home.x; this.restZ = this.home.z;
      } else {
        // 地面に戻る
        this.pos.x = damp(this.pos.x, this.restX ?? this.pos.x, 3, dt);
        this.pos.z = damp(this.pos.z, this.restZ ?? this.pos.z, 3, dt);
        this.pos.y = damp(this.pos.y, 0, 7, dt);
      }
      this.vel.copy(this.pos).sub(prev).divideScalar(Math.max(dt, 1e-3));
      // 注ぎ口が花壇の上にあれば、自然に傾いて注ぐ
      const rose = this.roseWorld(_v);
      const overPlot = Math.abs(rose.x) < PLOT.w / 2 + 0.25 && Math.abs(rose.z) < PLOT.d / 2 + 0.3;
      let want = 0.0;
      if (this.held) want = overPlot ? 0.95 : 0.25 + clamp(-this.vel.y * 0.2, -0.2, 0.3);
      if (this.tapPour > 0) { want = Math.max(want, 1.0); this.tapPour -= dt; }
      if (this.autoPour > 0) { want = Math.max(want, 1.05); this.autoPour -= dt; }
      this.tilt.target = want;
      this.tilt.update(dt);
      // 注ぎ口を花の方へ向ける
      if (this.held || this.tapPour > 0 || this.autoPour > 0) {
        const wantYaw = Math.atan2(-(0 - this.pos.z), (0 - this.pos.x));
        this.yaw = lerpAngle(this.yaw, wantYaw, 1 - Math.exp(-3 * dt));
      }
      group.position.copy(this.pos);
      group.rotation.y = this.yaw;
      pivot.rotation.z = -Math.max(-0.2, this.tilt.x) * 0.9 + clamp(this.vel.x * 0.05, -0.15, 0.15);
      // 水
      const pour = clamp((this.tilt.x - 0.45) / 0.45);
      this.pouring = pour;
      if (pour > 0) {
        this.emitAcc += dt * 110 * pour;
        const dir = this.spoutDir(new THREE.Vector3());
        while (this.emitAcc > 1) {
          this.emitAcc -= 1;
          const sp = 1.1 + Math.random() * 0.5;
          const jx = (Math.random() - 0.5) * 0.35, jz = (Math.random() - 0.5) * 0.35;
          G.particles.emit({
            x: rose.x + (Math.random() - 0.5) * 0.03, y: rose.y, z: rose.z + (Math.random() - 0.5) * 0.03,
            vx: dir.x * sp + jx, vy: dir.y * sp, vz: dir.z * sp + jz,
            life: 2.2, size: 0.022 + Math.random() * 0.016, color: [0.82, 0.92, 1.0], alpha: 0.9, drag: 0.15,
            kind: 'water', onGround: (p, gy) => { this.onDrop && this.onDrop(p, gy); return true; },
            update: (p, dt2) => {
              // 植物の近くでは、そちらへ少し寄る (成功に近い操作の補助)
              if (this.magnet && p.y > 0.05) {
                const dx = this.magnet.x - p.x, dz = this.magnet.z - p.z;
                const d = Math.hypot(dx, dz);
                if (d < 1.5 && d > 0.01) { p.vx += dx / d * 2.2 * dt2; p.vz += dz / d * 2.2 * dt2; }
              }
            },
          });
          this.totalPoured += 1;
        }
      }
    },
  };
  can.group.position.copy(home);
  can.input = G.input.add({
    enabled: () => can.enabled,
    pick: (ptr) => {
      const c = can.pos.clone().add(_v.set(0, 0.15, 0));
      const d = G.input.screenDist(c, ptr);
      const d2 = G.input.screenDist(can.roseWorld(new THREE.Vector3()), ptr);
      const m = Math.min(d, d2 * 1.2);
      return m < G.input.fingerR * 1.6 ? m * 0.6 : null;
    },
    down: (ptr) => {
      can.held = true; can.downT = G.time; can.dragged = false;
      can.target.copy(can.pos);
      G.audio && G.audio.play('canLift', { pan: can.pan() });
      can.onTouch && can.onTouch();
    },
    move: (ptr) => {
      // カメラに向いた縦の面に指を写す (左右と高さ)
      const cam = G.camera;
      cam.getWorldDirection(_n); _n.y = 0; _n.normalize();
      _p.setFromNormalAndCoplanarPoint(_n, _v.set(0, 0, 0.55));
      const hit = ptr.ray.intersectPlane(_p, new THREE.Vector3());
      if (hit) {
        can.dragged = true;
        hit.x = clamp(hit.x, -1.8, 2.0);
        hit.y = clamp(hit.y - 0.25, 0.25, 1.3);
        can.target.copy(hit);
      }
    },
    up: (ptr, info) => {
      can.held = false;
      if (info.tap || !can.dragged) {
        can.tapPour = 1.1;
        G.audio && G.audio.play('canTip', { pan: can.pan() });
      }
      // 置いた場所 (花壇の上なら脇へ)
      let x = can.pos.x, z = can.pos.z;
      if (Math.abs(x) < PLOT.w / 2 + 0.25 && Math.abs(z) < PLOT.d / 2 + 0.25) { x = can.home.x; z = can.home.z; }
      can.restX = x; can.restZ = z;
    },
  });
  return can;
}

function lerpAngle(a, b, t) {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}
