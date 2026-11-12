// player.js — プレイヤーキャラ「コロン」
// 状態機械(接地/空中/ノックバック/ダウン) + 簡易物理 + 手続きアニメ + ブロブ影
import * as THREE from 'three';
import { groundCast, pushOutAABB, pushOutCylinder } from './physics.js';

const GRAVITY = 22;
const FALL_MULT = 1.6;
const MAX_FALL = 30;
const WALK = 4.2;
const DASH = 7.2;
const R = 0.35; // 水平衝突の半径
const RAY_UP = 0.6; // 接地レイの撃ち出し高さ
const SNAP = 0.55; // 接地中に坂・段差へ吸い付く距離
const JUMP_VY = [8.5, 10, 12]; // 1段/2段/3段ジャンプの初速

function dampAngle(cur, target, lambda, dt) {
  let d = (target - cur) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return cur + d * (1 - Math.exp(-lambda * dt));
}

export class Player {
  constructor(scene, events) {
    this.events = events;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.grounded = false;
    this.groundObject = null;
    this.maxHp = 3;
    this.hp = this.maxHp;
    this.facing = Math.PI;
    this.dead = false;

    // タイマー類
    this.coyote = 0; // 接地を離れてからのジャンプ猶予
    this.jumpBuffer = 0; // 着地前のジャンプ先行入力
    this.chainTimer = 0; // 着地後の連続ジャンプ受付
    this.invincible = 0; // 被ダメ後の無敵
    this.noControl = 0; // ノックバック中の操作不能
    this.nextChain = 0; // 次のジャンプの段数 (0/1/2)
    this.cutDone = false; // 可変ジャンプのカット済みフラグ

    this.runPhase = 0;
    this.squash = 0;

    this.buildMesh(scene);
  }

  buildMesh(scene) {
    this.group = new THREE.Group();
    this.inner = new THREE.Group();
    this.group.add(this.inner);

    const matBody = new THREE.MeshLambertMaterial({ color: 0x4db5ff });
    const matWhite = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const matBlack = new THREE.MeshLambertMaterial({ color: 0x202531 });
    const matAccent = new THREE.MeshLambertMaterial({ color: 0xffd24a, emissive: 0x553f00 });
    const matFoot = new THREE.MeshLambertMaterial({ color: 0xff8c5a });

    const body = new THREE.Mesh(new THREE.SphereGeometry(0.34, 18, 14), matBody);
    body.position.y = 0.44;
    body.castShadow = true;
    this.inner.add(body);

    for (const sx of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), matWhite);
      eye.position.set(sx * 0.12, 0.52, 0.28);
      this.inner.add(eye);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), matBlack);
      pupil.position.set(sx * 0.12, 0.52, 0.345);
      this.inner.add(pupil);
    }

    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.22, 6), matBlack);
    stem.position.y = 0.86;
    this.inner.add(stem);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), matAccent);
    bulb.position.y = 0.99;
    this.inner.add(bulb);

    this.arms = [];
    for (const sx of [-1, 1]) {
      const arm = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), matBody);
      arm.position.set(sx * 0.37, 0.42, 0);
      this.inner.add(arm);
      this.arms.push(arm);
    }
    this.feet = [];
    for (const sx of [-1, 1]) {
      const foot = new THREE.Mesh(new THREE.SphereGeometry(0.115, 8, 6), matFoot);
      foot.position.set(sx * 0.14, 0.1, 0);
      foot.castShadow = true;
      this.inner.add(foot);
      this.feet.push(foot);
    }

    scene.add(this.group);

    // ブロブ影(着地点の目安)
    this.blob = new THREE.Mesh(
      new THREE.CircleGeometry(0.42, 20),
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.3,
        depthWrite: false,
      })
    );
    this.blob.rotation.x = -Math.PI / 2;
    scene.add(this.blob);
  }

  fullReset(spawn) {
    this.hp = this.maxHp;
    this.respawn(spawn);
  }

  respawn(spawn) {
    this.pos.copy(spawn);
    this.vel.set(0, 0, 0);
    this.grounded = false;
    this.groundObject = null;
    this.coyote = 0;
    this.jumpBuffer = 0;
    this.chainTimer = 0;
    this.invincible = 1.0;
    this.noControl = 0;
    this.nextChain = 0;
    this.dead = false;
    this.facing = Math.PI;
    this.inner.rotation.x = 0;
    this.group.position.copy(this.pos);
  }

  die() {
    this.dead = true;
    this.vel.x = 0;
    this.vel.z = 0;
  }

  // 敵接触。適用されたら true
  takeHit(srcX, srcZ) {
    if (this.invincible > 0 || this.dead) return false;
    this.hp--;
    this.invincible = 1.5;
    this.noControl = 0.4;
    let ax = this.pos.x - srcX;
    let az = this.pos.z - srcZ;
    const d = Math.hypot(ax, az) || 1;
    this.vel.x = (ax / d) * 5.5;
    this.vel.z = (az / d) * 5.5;
    this.vel.y = 4.5;
    this.grounded = false;
    this.groundObject = null;
    return true;
  }

  update(dt, input, camYaw, stage) {
    this.coyote = Math.max(0, this.coyote - dt);
    this.jumpBuffer = Math.max(0, this.jumpBuffer - dt);
    this.chainTimer = Math.max(0, this.chainTimer - dt);
    this.invincible = Math.max(0, this.invincible - dt);
    this.noControl = Math.max(0, this.noControl - dt);

    const control = this.noControl <= 0 && !this.dead;

    // --- カメラ基準の目標速度 ---
    const fx = Math.sin(camYaw);
    const fz = Math.cos(camYaw);
    const dirX = fx * input.moveZ + -fz * input.moveX;
    const dirZ = fz * input.moveZ + fx * input.moveX;
    const m = Math.hypot(dirX, dirZ);
    let tx = 0;
    let tz = 0;
    if (control && m > 1e-4) {
      const sp = (input.dash ? DASH : WALK) * Math.min(m, 1);
      tx = (dirX / m) * sp;
      tz = (dirZ / m) * sp;
    }
    const k = !control ? 0 : this.grounded ? 12 : 5;
    const a = 1 - Math.exp(-k * dt);
    this.vel.x += (tx - this.vel.x) * a;
    this.vel.z += (tz - this.vel.z) * a;

    // --- ジャンプ ---
    if (control) {
      const wantJump = input.jumpPressed || this.jumpBuffer > 0;
      if (wantJump && (this.grounded || this.coyote > 0)) {
        let chain = this.chainTimer > 0 ? this.nextChain : 0;
        // 3段目は十分な水平速度があるときだけ
        if (chain === 2 && Math.hypot(this.vel.x, this.vel.z) < 3.5) chain = 0;
        this.vel.y = JUMP_VY[chain];
        if (chain === 2) {
          const hf = Math.hypot(this.vel.x, this.vel.z) || 1;
          this.vel.x += (this.vel.x / hf) * 1.6;
          this.vel.z += (this.vel.z / hf) * 1.6;
        }
        this.grounded = false;
        this.groundObject = null;
        this.coyote = 0;
        this.jumpBuffer = 0;
        this.chainTimer = 0;
        this.cutDone = false;
        this.nextChain = chain >= 2 ? 0 : chain + 1;
        this.events.onJump(chain);
        input.jumpPressed = false;
      } else if (input.jumpPressed && !this.grounded) {
        this.jumpBuffer = 0.12;
        input.jumpPressed = false;
      }
      // 可変ジャンプ: 上昇中にボタンを離したら失速
      if (!this.grounded && this.vel.y > 0 && !input.jumpHeld && !this.cutDone) {
        this.vel.y *= 0.5;
        this.cutDone = true;
      }
    }

    // --- 重力(落下側は強めでキビキビと) ---
    const g = this.vel.y < 0 ? GRAVITY * FALL_MULT : GRAVITY;
    this.vel.y = Math.max(this.vel.y - g * dt, -MAX_FALL);

    // --- 積分 ---
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
    this.pos.z += this.vel.z * dt;

    // --- XZ 押し出し ---
    const foot = this.pos.y;
    const head = this.pos.y + 0.95;
    for (const b of stage.solidBoxes) pushOutAABB(this.pos, R, foot, head, b);
    for (const c of stage.solidCyls) pushOutCylinder(this.pos, R, foot, head, c);

    // --- 接地 ---
    const wasGrounded = this.grounded;
    if (this.vel.y <= 0.01) {
      const far = RAY_UP + (this.grounded ? SNAP : Math.max(0.06, -this.vel.y * dt + 0.06));
      const hit = groundCast(this.pos, RAY_UP, far, stage.walkables);
      if (hit) {
        this.pos.y = hit.point.y;
        if (hit.normal.y < 0.62) {
          // 急斜面: 法線方向に滑らせて登れなくする
          this.vel.x += hit.normal.x * 26 * dt;
          this.vel.z += hit.normal.z * 26 * dt;
          this.vel.y = -2;
          this.grounded = false;
          this.groundObject = null;
        } else {
          this.vel.y = 0;
          if (!wasGrounded) {
            this.chainTimer = 0.25;
            this.squash = 1;
            this.events.onLand();
          }
          this.grounded = true;
          this.groundObject = hit.object;
        }
      } else {
        if (wasGrounded) this.coyote = 0.1;
        this.grounded = false;
        this.groundObject = null;
      }
    } else {
      this.grounded = false;
      this.groundObject = null;
    }
    if (this.grounded && this.chainTimer <= 0) this.nextChain = 0;

    // --- 向き ---
    if (control && m > 0.15) {
      this.facing = dampAngle(this.facing, Math.atan2(dirX, dirZ), 12, dt);
    }

    this.updateMesh(dt, stage);
  }

  updateMesh(dt, stage) {
    this.group.position.copy(this.pos);
    this.group.rotation.y = this.facing;

    const speed = Math.hypot(this.vel.x, this.vel.z);
    const run = Math.min(speed / DASH, 1);

    if (this.dead) {
      this.inner.rotation.x = dampAngle(this.inner.rotation.x, -Math.PI / 2, 6, dt);
    } else if (this.grounded) {
      this.runPhase += speed * dt * 2.6;
      this.inner.rotation.x = run * 0.14;
    } else {
      this.inner.rotation.x = THREE.MathUtils.clamp(-this.vel.y * 0.02, -0.25, 0.3);
    }
    const swing = Math.sin(this.runPhase) * 0.2 * run * (this.grounded ? 1 : 0.3);
    this.feet[0].position.z = swing;
    this.feet[1].position.z = -swing;
    this.arms[0].position.z = -swing * 0.8;
    this.arms[1].position.z = swing * 0.8;

    // 着地スカッシュ
    this.squash = Math.max(0, this.squash - dt * 5);
    const sq = this.squash;
    this.inner.scale.set(1 + sq * 0.18, 1 - sq * 0.25, 1 + sq * 0.18);
    if (this.grounded && run > 0.05) {
      this.inner.position.y = Math.abs(Math.sin(this.runPhase)) * 0.06 * run;
    } else {
      this.inner.position.y = 0;
    }

    // 無敵中の点滅
    this.inner.visible = this.invincible <= 0 || Math.floor(performance.now() * 0.02) % 2 === 0;

    // ブロブ影
    const hit = groundCast(this.pos, 0.1, 30, stage.walkables);
    if (hit) {
      this.blob.position.set(this.pos.x, hit.point.y + 0.04, this.pos.z);
      const h = this.pos.y - hit.point.y;
      const s = THREE.MathUtils.clamp(1 - h * 0.05, 0.35, 1);
      this.blob.scale.setScalar(s);
      this.blob.material.opacity = 0.3 * s;
      this.blob.visible = true;
    } else {
      this.blob.visible = false;
    }
  }
}
