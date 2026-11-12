import * as THREE from 'three';
import { CONFIG } from './config.js';
import { mergeColored, mat4 } from './materials.js';

const C = CONFIG.colors;
const POOL = CONFIG.projectilePoolSize;
const R = CONFIG.projectileRadius;

// 画面下中央のキャンディ砲
function buildCannon(M) {
  const group = new THREE.Group();
  const base = new THREE.Mesh(mergeColored([
    { geo: new THREE.SphereGeometry(0.85, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2), color: C.deepPink },
    { geo: new THREE.TorusGeometry(0.85, 0.14, 10, 24), color: C.white, matrix: mat4(0, 0.02, 0, Math.PI / 2) },
    { geo: new THREE.SphereGeometry(0.2, 10, 8), color: C.lemon, matrix: mat4(0, 0.88, 0) },
  ]), M.vertexCandy);
  group.add(base);

  const barrel = new THREE.Group();
  const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.42, 1.7, 14), M.stripesRed);
  tube.position.y = 0.85;
  barrel.add(tube);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.1, 8, 18), M.candyLemon);
  lip.rotation.x = Math.PI / 2;
  lip.position.y = 1.7;
  barrel.add(lip);
  barrel.position.y = 0.35;
  barrel.rotation.x = -0.55; // 最初から舞台のほうへ傾けておく
  group.add(barrel);
  group.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return { group, barrel };
}

export class ProjectileManager {
  constructor(scene, M, T) {
    this.scene = scene;
    this.onHit = null; // (target, point) => void
    this.onMissBounce = null; // (point) => void

    // キャンディ砲
    const cannon = buildCannon(M);
    cannon.group.position.set(0, 0.1, 8.4);
    scene.add(cannon.group);
    this.cannon = cannon;
    this.aimQuat = new THREE.Quaternion();
    this.recoil = 0;

    // 発射体(ストライプキャンディボール)を InstancedMesh で
    const geo = new THREE.SphereGeometry(R, 18, 14);
    this.mesh = new THREE.InstancedMesh(geo, M.stripesMint, POOL);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);

    // ブロブ影
    const shadowGeo = new THREE.PlaneGeometry(1, 1);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: T.blobShadow, transparent: true, depthWrite: false,
    });
    this.shadowMesh = new THREE.InstancedMesh(shadowGeo, shadowMat, POOL);
    this.shadowMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.shadowMesh.frustumCulled = false;
    this.shadowMesh.renderOrder = 1;
    scene.add(this.shadowMesh);

    this.pool = [];
    for (let i = 0; i < POOL; i++) {
      this.pool.push({
        active: false,
        pos: new THREE.Vector3(),
        vel: new THREE.Vector3(),
        spin: Math.random() * 8 + 4,
        life: 0,
        bounced: false,
        assist: null, // エイムアシスト対象(判定がさらに甘くなる)
      });
    }

    this._dummy = new THREE.Object3D();
    this._zero = new THREE.Matrix4().makeScale(0, 0, 0);
    this._muzzle = new THREE.Vector3();
    this._aimDir = new THREE.Vector3();
    this._up = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i < POOL; i++) {
      this.mesh.setMatrixAt(i, this._zero);
      this.shadowMesh.setMatrixAt(i, this._zero);
    }
  }

  muzzleWorld(out) {
    // 砲身の先端のワールド座標
    this.cannon.barrel.updateWorldMatrix(true, false);
    return out.set(0, 1.9, 0).applyMatrix4(this.cannon.barrel.matrixWorld);
  }

  // point: 着弾させたいワールド座標 / assistTarget: スナップ対象(null可)
  fire(point, assistTarget) {
    const slot = this.pool.find((p) => !p.active) || this.pool[0];
    const T = CONFIG.flightTime;
    const g = CONFIG.gravity;
    const muzzle = this.muzzleWorld(this._muzzle);

    slot.active = true;
    slot.pos.copy(muzzle);
    slot.life = 3;
    slot.bounced = false;
    slot.assist = assistTarget || null;
    // 放物線の初速を逆算: v0 = (P - O - 0.5*g*T^2) / T
    slot.vel.copy(point).sub(muzzle);
    slot.vel.y -= 0.5 * g * T * T;
    slot.vel.divideScalar(T);

    // 砲をタップ方向へ向けて反動(発射方向と上方向の中間にくいっと傾く)
    this._aimDir.copy(slot.vel).normalize();
    this._aimDir.y += 1.1;
    this._aimDir.normalize();
    this.cannon.barrel.quaternion.setFromUnitVectors(this._up, this._aimDir);
    this.recoil = 1;
    return slot;
  }

  update(time, dt, targetManager, effects) {
    const d = this._dummy;
    const hitScale = CONFIG.hitRadiusScale;
    const alive = targetManager ? targetManager.aliveTargets() : [];

    // 反動アニメ
    if (this.recoil > 0) {
      this.recoil = Math.max(0, this.recoil - dt * 6);
      const squash = 1 - this.recoil * 0.18;
      this.cannon.group.scale.set(2 - squash, squash, 2 - squash);
    } else {
      this.cannon.group.scale.setScalar(1);
    }

    for (let i = 0; i < POOL; i++) {
      const p = this.pool[i];
      if (!p.active) continue;

      p.vel.y += CONFIG.gravity * dt;
      p.pos.addScaledVector(p.vel, dt);
      p.life -= dt;

      // 的との判定(球同士の距離・総当たり)
      let hit = false;
      for (const t of alive) {
        const bonus = t === p.assist ? CONFIG.assistBonusScale : 1;
        const rr = R + t.radius * hitScale * bonus;
        if (p.pos.distanceToSquared(t.position) < rr * rr) {
          targetManager.hitTarget(t, p.pos);
          if (this.onHit) this.onHit(t, p.pos.clone());
          hit = true;
          break;
        }
      }

      // 地面/舞台でぽよんと1回はねて消える
      const floorY = (Math.abs(p.pos.x) < 12 && p.pos.z > -8.4 && p.pos.z < 3.6) ? 0.5 : 0;
      if (!hit && p.pos.y < floorY + R && p.vel.y < 0) {
        if (!p.bounced) {
          p.bounced = true;
          p.pos.y = floorY + R;
          p.vel.y *= -0.38;
          p.vel.x *= 0.6;
          p.vel.z *= 0.6;
          if (this.onMissBounce) this.onMissBounce(p.pos);
          if (effects) effects.burst(p.pos, 0xffffff, { count: 4, speed: 1.5, life: 0.4, size: 0.6 });
        } else {
          hit = true; // 2回目の接地で消滅
        }
      }

      if (hit || p.life <= 0) {
        p.active = false;
        this.mesh.setMatrixAt(i, this._zero);
        this.shadowMesh.setMatrixAt(i, this._zero);
        continue;
      }

      d.position.copy(p.pos);
      d.rotation.set(time * p.spin, 0, time * p.spin * 0.6);
      d.scale.setScalar(1);
      d.updateMatrix();
      this.mesh.setMatrixAt(i, d.matrix);

      // ブロブ影
      const h = Math.max(p.pos.y - floorY, 0);
      const shadowScale = THREE.MathUtils.clamp(1.1 - h * 0.06, 0.35, 1.1);
      d.position.set(p.pos.x, floorY + 0.02, p.pos.z);
      d.rotation.set(0, 0, 0);
      d.scale.setScalar(shadowScale);
      d.updateMatrix();
      this.shadowMesh.setMatrixAt(i, d.matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this.shadowMesh.instanceMatrix.needsUpdate = true;
  }

  clear() {
    for (let i = 0; i < POOL; i++) {
      this.pool[i].active = false;
      this.mesh.setMatrixAt(i, this._zero);
      this.shadowMesh.setMatrixAt(i, this._zero);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this.shadowMesh.instanceMatrix.needsUpdate = true;
  }
}
