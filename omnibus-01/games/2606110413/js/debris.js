import * as THREE from 'three';
import { CONFIG } from './config.js';

const C = CONFIG.colors;

// 的ごとの専用破片。InstancedMesh プール5本(計200インスタンス)を
// SoA配列+リングカーソルで回す(effects.jsのバーストと同じパターン)。
// 破片は重力で落ち、舞台/地面で1〜2回バウンドして縮んで消える。

function chunkGeo() {
  // 不規則なかけら(つぶした12面体)
  const geo = new THREE.DodecahedronGeometry(0.15);
  geo.scale(1, 0.7, 0.9);
  return geo;
}

function shardGeo() {
  // 薄いキャンディ片
  return new THREE.BoxGeometry(0.2, 0.04, 0.26);
}

function starPieceGeo() {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? 0.2 : 0.09;
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    if (i === 0) shape.moveTo(Math.cos(a) * r, -Math.sin(a) * r);
    else shape.lineTo(Math.cos(a) * r, -Math.sin(a) * r);
  }
  shape.closePath();
  return new THREE.ShapeGeometry(shape);
}

class Pool {
  constructor(scene, geo, material, count) {
    this.count = count;
    this.mesh = new THREE.InstancedMesh(geo, material, count);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = false;
    scene.add(this.mesh);

    this.pos = new Float32Array(count * 3);
    this.vel = new Float32Array(count * 3);
    this.rot = new Float32Array(count * 3);   // 回転位相
    this.angVel = new Float32Array(count * 3);
    this.life = new Float32Array(count);
    this.maxLife = new Float32Array(count);
    this.size = new Float32Array(count);
    this.bounces = new Float32Array(count);
    this.cursor = 0;

    this._zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < count; i++) this.mesh.setMatrixAt(i, this._zero);
  }

  spawn(point, color, { speed = 4.5, up = 2.5, size = 1, life = 1.4 } = {}) {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.count;
    this.pos[i * 3] = point.x;
    this.pos[i * 3 + 1] = point.y;
    this.pos[i * 3 + 2] = point.z;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(THREE.MathUtils.randFloat(-1, 1));
    const v = speed * THREE.MathUtils.randFloat(0.35, 1);
    this.vel[i * 3] = Math.sin(phi) * Math.cos(theta) * v;
    this.vel[i * 3 + 1] = Math.abs(Math.cos(phi)) * v * 0.7 + up;
    this.vel[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * v + 1.0; // 少し手前へ
    this.rot[i * 3] = Math.random() * Math.PI * 2;
    this.rot[i * 3 + 1] = Math.random() * Math.PI * 2;
    this.rot[i * 3 + 2] = 0;
    this.angVel[i * 3] = THREE.MathUtils.randFloatSpread(14);
    this.angVel[i * 3 + 1] = THREE.MathUtils.randFloatSpread(14);
    this.angVel[i * 3 + 2] = THREE.MathUtils.randFloatSpread(8);
    this.maxLife[i] = this.life[i] = life * THREE.MathUtils.randFloat(0.75, 1.15);
    this.size[i] = size * THREE.MathUtils.randFloat(0.7, 1.4);
    this.bounces[i] = 0;
    this.mesh.setColorAt(i, color);
    if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
  }

  update(dt, dummy) {
    let dirty = false;
    for (let i = 0; i < this.count; i++) {
      if (this.life[i] <= 0) continue;
      dirty = true;
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this.mesh.setMatrixAt(i, this._zero);
        continue;
      }
      this.vel[i * 3 + 1] -= 22 * dt;
      let x = this.pos[i * 3] += this.vel[i * 3] * dt;
      let y = this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      let z = this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      // 床(舞台 or 地面)でバウンド — projectiles.js と同じ床判定式
      const floorY = (Math.abs(x) < 12 && z > -8.4 && z < 3.6) ? 0.5 : 0;
      if (y < floorY + 0.08 && this.vel[i * 3 + 1] < 0) {
        if (this.bounces[i] < 2) {
          this.bounces[i]++;
          this.pos[i * 3 + 1] = y = floorY + 0.08;
          this.vel[i * 3 + 1] *= -0.35;
          this.vel[i * 3] *= 0.6;
          this.vel[i * 3 + 2] *= 0.6;
          this.angVel[i * 3] *= -0.7;
        } else {
          this.pos[i * 3 + 1] = y = floorY + 0.08;
          this.vel[i * 3] *= 0.9;
          this.vel[i * 3 + 2] *= 0.9;
          this.vel[i * 3 + 1] = 0;
        }
      }
      this.rot[i * 3] += this.angVel[i * 3] * dt;
      this.rot[i * 3 + 1] += this.angVel[i * 3 + 1] * dt;
      // 最後の0.25秒で縮んで消える
      const k = Math.min(this.life[i] / 0.25, 1);
      dummy.position.set(x, y, z);
      dummy.rotation.set(this.rot[i * 3], this.rot[i * 3 + 1], this.rot[i * 3 + 2]);
      dummy.scale.setScalar(this.size[i] * k);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(i, dummy.matrix);
    }
    if (dirty) this.mesh.instanceMatrix.needsUpdate = true;
  }

  clear() {
    this.life.fill(0);
    for (let i = 0; i < this.count; i++) this.mesh.setMatrixAt(i, this._zero);
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

export class Debris {
  constructor(scene) {
    const lambert = () => new THREE.MeshLambertMaterial();
    this.chunk = new Pool(scene, chunkGeo(), lambert(), 48);
    this.crumb = new Pool(scene, new THREE.TetrahedronGeometry(0.07), lambert(), 64);
    this.shard = new Pool(scene, shardGeo(), lambert(), 48);
    this.blob = new Pool(scene, new THREE.SphereGeometry(0.13, 8, 6), lambert(), 24);
    const starMat = new THREE.MeshBasicMaterial({ toneMapped: false, side: THREE.DoubleSide });
    starMat.color.setScalar(1.5); // instanceColor(金色)×1.5でBloomに乗せる
    this.starPiece = new Pool(scene, starPieceGeo(), starMat, 16);
    this.pools = [this.chunk, this.crumb, this.shard, this.blob, this.starPiece];
    this.reduced = false; // Stage 3 で破片半減
    this._dummy = new THREE.Object3D();
    this._color = new THREE.Color();
  }

  _n(n) { return this.reduced ? Math.ceil(n / 2) : n; }

  _burst(pool, point, colorHex, n, opts = {}) {
    const c = this._color;
    for (let i = 0; i < this._n(n); i++) {
      c.setHex(colorHex).offsetHSL(0, 0, THREE.MathUtils.randFloatSpread(0.12));
      pool.spawn(point, c, opts);
    }
  }

  // 的の種類ごとの壊れ方レシピ
  spawnFor(target, point) {
    switch (target.type) {
      case 'cookie':
        this._burst(this.chunk, point, C.cookie, 5, { speed: 4.5 });
        this._burst(this.crumb, point, C.darkChoco, 8, { speed: 5, size: 1.1 });
        break;
      case 'cupcake':
        this._burst(this.blob, point, C.cream, 3, { speed: 4, size: 1.3 });
        this._burst(this.blob, point, C.cherry, 1, { speed: 3, up: 5, size: 1.5, life: 1.8 });
        this._burst(this.shard, point, target.burstColor, 4, { speed: 4.5 });
        break;
      case 'lollipop':
        this._burst(this.shard, point, target.burstColor, 5, { speed: 5.5 });
        this._burst(this.shard, point, C.white, 4, { speed: 5 });
        break;
      case 'donut':
        this._burst(this.chunk, point, C.chocolate, 5, { speed: 5, size: 1.3 });
        this._burst(this.shard, point, C.pink, 4, { speed: 4.5 });
        this._burst(this.crumb, point, C.lemon, 6, { speed: 6 });
        break;
      case 'star':
        this._burst(this.starPiece, point, 0xffd24d, 6, { speed: 6, up: 3.5, life: 1.7 });
        this._burst(this.crumb, point, C.gold, 8, { speed: 6.5 });
        break;
    }
  }

  update(dt) {
    for (const p of this.pools) p.update(dt, this._dummy);
  }

  clear() {
    for (const p of this.pools) p.clear();
  }
}
