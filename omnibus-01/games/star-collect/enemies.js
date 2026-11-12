// enemies.js — 敵キャラ
// てくてくむし: 2点間を往復 / ぷちゴーレム: ホーム周辺を徘徊
// 上から踏むと倒せる。横から触れるとプレイヤーがダメージ。
import * as THREE from 'three';
import { groundCast } from './physics.js';
import { input } from './input.js';

const PLAYER_R = 0.35;

const matBugBody = new THREE.MeshLambertMaterial({ color: 0xe0455a });
const matBugDot = new THREE.MeshLambertMaterial({ color: 0x57222c });
const matWhite = new THREE.MeshLambertMaterial({ color: 0xffffff });
const matBlack = new THREE.MeshLambertMaterial({ color: 0x202531 });
const matGolem = new THREE.MeshLambertMaterial({ color: 0x8d93a0 });
const matGolemDark = new THREE.MeshLambertMaterial({ color: 0x6b707c });
const matEyeGlow = new THREE.MeshLambertMaterial({ color: 0x9ef3ff, emissive: 0x3fc8e0 });

function buildBugMesh() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.45, 14, 10), matBugBody);
  body.scale.set(1, 0.65, 1.15);
  body.position.y = 0.32;
  body.castShadow = true;
  g.add(body);
  for (const [x, z] of [[-0.18, -0.05], [0.18, -0.05], [0, 0.22]]) {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 5), matBugDot);
    dot.position.set(x, 0.56, z);
    g.add(dot);
  }
  for (const sx of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), matWhite);
    eye.position.set(sx * 0.16, 0.38, 0.42);
    g.add(eye);
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 5), matBlack);
    pupil.position.set(sx * 0.16, 0.38, 0.48);
    g.add(pupil);
  }
  return g;
}

function buildGolemMesh() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.7, 0.6), matGolem);
  body.position.y = 0.45;
  body.castShadow = true;
  g.add(body);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.4, 0.46), matGolemDark);
  head.position.y = 1.0;
  head.castShadow = true;
  g.add(head);
  for (const sx of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.04), matEyeGlow);
    eye.position.set(sx * 0.11, 1.02, 0.24);
    g.add(eye);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.52, 0.22), matGolemDark);
    arm.position.set(sx * 0.5, 0.42, 0);
    g.add(arm);
  }
  return g;
}

class Enemy {
  constructor(scene, spot) {
    this.spot = spot;
    this.type = spot.type;
    this.pos = new THREE.Vector3();
    this.heading = 0;
    this.alive = true;
    this.squashT = 0;
    this.bob = Math.random() * 6;
    if (this.type === 'bug') {
      this.mesh = buildBugMesh();
      this.radius = 0.58;
      this.height = 0.7;
      this.speed = 1.6;
      this.t = 0; // 0..1 (a→b)
      this.dir = 1;
      this.pause = 0;
      this.pathLen = spot.a.distanceTo(spot.b);
    } else {
      this.mesh = buildGolemMesh();
      this.radius = 0.52;
      this.height = 1.15;
      this.speed = 1.1;
      this.turnTimer = 0;
    }
    scene.add(this.mesh);
    this.reset();
  }

  reset() {
    this.alive = true;
    this.squashT = 0;
    this.mesh.visible = true;
    this.mesh.scale.set(1, 1, 1);
    if (this.type === 'bug') {
      this.t = 0;
      this.dir = 1;
      this.pause = 0;
      this.pos.copy(this.spot.a);
    } else {
      this.pos.copy(this.spot.home);
      this.heading = Math.random() * Math.PI * 2;
      this.turnTimer = 0;
    }
    this.mesh.position.copy(this.pos);
  }

  ai(dt) {
    if (this.type === 'bug') {
      if (this.pause > 0) {
        this.pause -= dt;
        return;
      }
      this.t += (this.dir * this.speed * dt) / this.pathLen;
      if (this.t >= 1) {
        this.t = 1;
        this.dir = -1;
        this.pause = 0.8;
      } else if (this.t <= 0) {
        this.t = 0;
        this.dir = 1;
        this.pause = 0.8;
      }
      const prevX = this.pos.x;
      const prevZ = this.pos.z;
      this.pos.lerpVectors(this.spot.a, this.spot.b, this.t);
      const dx = this.pos.x - prevX;
      const dz = this.pos.z - prevZ;
      if (dx * dx + dz * dz > 1e-8) this.heading = Math.atan2(dx, dz);
    } else {
      this.turnTimer -= dt;
      if (this.turnTimer <= 0) {
        this.turnTimer = 2 + Math.random() * 2;
        this.heading = Math.random() * Math.PI * 2;
      }
      const hx = this.spot.home.x - this.pos.x;
      const hz = this.spot.home.z - this.pos.z;
      if (Math.hypot(hx, hz) > this.spot.radius) {
        this.heading = Math.atan2(hx, hz);
        this.turnTimer = 1.5;
      }
      this.pos.x += Math.sin(this.heading) * this.speed * dt;
      this.pos.z += Math.cos(this.heading) * this.speed * dt;
    }
  }
}

export class Enemies {
  constructor(scene, stage, events) {
    this.stage = stage;
    this.events = events;
    this.list = stage.enemySpots.map((s) => new Enemy(scene, s));
  }

  reset() {
    for (const e of this.list) e.reset();
  }

  // player は null 可(タイトル画面ではAIだけ動かす)
  update(dt, player) {
    for (const e of this.list) {
      if (!e.alive) {
        if (e.mesh.visible) {
          e.squashT -= dt;
          if (e.squashT <= 0) e.mesh.visible = false;
        }
        continue;
      }

      e.ai(dt);
      const hit = groundCast(e.pos, 1.2, 4, this.stage.walkables);
      if (hit) e.pos.y = hit.point.y;
      e.bob += dt * 7;
      e.mesh.position.copy(e.pos);
      e.mesh.position.y += Math.abs(Math.sin(e.bob)) * 0.05;
      e.mesh.rotation.y = e.heading;

      if (!player || player.dead) continue;

      const dx = player.pos.x - e.pos.x;
      const dz = player.pos.z - e.pos.z;
      const rr = e.radius + PLAYER_R;
      if (dx * dx + dz * dz >= rr * rr) continue;

      const stomping =
        player.vel.y < -2 && player.pos.y > e.pos.y + e.height * 0.55;
      if (stomping) {
        e.alive = false;
        e.squashT = 0.45;
        e.mesh.scale.set(1.35, 0.18, 1.35);
        e.mesh.position.y = e.pos.y + 0.05;
        player.vel.y = input.jumpHeld ? 9.5 : 8;
        player.pos.y = Math.max(player.pos.y, e.pos.y + 0.2);
        this.events.onStomp(e.mesh.position);
      } else if (
        player.pos.y < e.pos.y + e.height &&
        player.pos.y > e.pos.y - 1.2 &&
        player.takeHit(e.pos.x, e.pos.z)
      ) {
        this.events.onHurt();
      }
    }
  }
}
