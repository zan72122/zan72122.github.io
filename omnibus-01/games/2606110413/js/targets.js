import * as THREE from 'three';
import { CONFIG } from './config.js';
import { mergeColored, mat4 } from './materials.js';

const C = CONFIG.colors;
const STAGE_Y = 0.5; // 舞台の上面

function enableShadow(obj) {
  obj.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return obj;
}

// ---- 的のモデル(プリミティブ合成) ----

function buildCookie(M) {
  const geo = new THREE.CylinderGeometry(0.85, 0.85, 0.28, 24);
  const mesh = new THREE.Mesh(geo, M.cookie);
  mesh.rotation.x = Math.PI / 2;
  const group = new THREE.Group();
  group.add(mesh);
  return enableShadow(group);
}

function buildCupcake(M, cupColor, creamColor) {
  const geo = mergeColored([
    { geo: new THREE.CylinderGeometry(0.6, 0.42, 0.72, 18), color: cupColor, matrix: mat4(0, 0.36, 0) },
    { geo: new THREE.SphereGeometry(0.62, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2), color: creamColor, matrix: mat4(0, 0.72, 0) },
    { geo: new THREE.SphereGeometry(0.4, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), color: creamColor, matrix: mat4(0, 1.02, 0) },
    { geo: new THREE.SphereGeometry(0.17, 12, 8), color: C.cherry, matrix: mat4(0, 1.42, 0) },
  ]);
  const group = new THREE.Group();
  group.add(new THREE.Mesh(geo, M.vertexCandy));
  return enableShadow(group);
}

function buildLollipop(M, swirlMat, rimMat) {
  const group = new THREE.Group();
  const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1.7, 8), M.stick);
  stick.position.y = -0.85;
  group.add(stick);
  // 渦巻きは平面UVの円盤で見せる(球面UVだと渦が崩れる)
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.92, 24, 16), rimMat);
  body.scale.z = 0.3;
  group.add(body);
  const faceGeo = new THREE.CircleGeometry(0.86, 28);
  const faceF = new THREE.Mesh(faceGeo, swirlMat);
  faceF.position.z = 0.255;
  group.add(faceF);
  const faceB = new THREE.Mesh(faceGeo, swirlMat);
  faceB.rotation.y = Math.PI;
  faceB.position.z = -0.255;
  group.add(faceB);
  return enableShadow(group);
}

function buildDonut(M) {
  const group = new THREE.Group();
  const base = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.68, 16, 36), M.chocolate);
  group.add(base);
  const icing = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.58, 14, 36), M.candyPink);
  icing.position.z = 0.22;
  icing.scale.z = 0.7;
  group.add(icing);
  return enableShadow(group);
}

function buildStar(M, T) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? 1 : 0.46;
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(a) * r;
    const y = -Math.sin(a) * r;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.3, bevelEnabled: true, bevelThickness: 0.12, bevelSize: 0.1, bevelSegments: 2,
  });
  geo.center();
  const group = new THREE.Group();
  group.add(new THREE.Mesh(geo, M.gold));
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: T.glow, color: 0xffd24d, blending: THREE.AdditiveBlending,
    transparent: true, depthWrite: false, opacity: 0.9,
  }));
  glow.scale.setScalar(4.2);
  group.add(glow);
  return enableShadow(group);
}

// ---- 的の管理 ----

class Target {
  constructor(group, type, radius, burstColor) {
    this.group = group;
    this.type = type;
    this.score = CONFIG.scores[type];
    this.radius = radius;
    this.burstColor = burstColor;
    this.state = 'inactive'; // inactive | alive | dying | dead | spawning
    this.timer = 0;
    this.vel = new THREE.Vector3();
    this.prevPos = new THREE.Vector3();
    this.baseScale = 1;
    this.movement = null; // (t, dt, target) => void
    group.visible = false;
  }

  get position() { return this.group.position; }

  activate() {
    this.state = 'spawning';
    this.timer = 0;
    this.group.visible = true;
    this.group.scale.setScalar(0.01);
    this.prevPos.copy(this.group.position);
  }

  deactivate() {
    this.state = 'inactive';
    this.group.visible = false;
  }
}

export class TargetManager {
  constructor(scene, M, T) {
    this.scene = scene;
    this.targets = [];
    this.onHit = null;       // (target, point) => void  game が設定する
    this.fever = false;
    this.speedScale = 1;
    this.starTimer = 4;      // 最初の金スターまでの秒数
    this.starActive = false;

    // クッキー行進(手前レーン z=1.2)— 4体 + フィーバー2体
    this.cookies = [];
    for (let i = 0; i < 6; i++) {
      const t = new Target(buildCookie(M), 'cookie', 0.95, C.cookie);
      t.fever = i >= 4;
      t.marchOffset = i * 4.2;
      t.movement = (time, dt, tg) => {
        tg.position.x += 1.7 * this.speedScale * dt;
        if (tg.position.x > 13.5) tg.position.x = -13.5;
        tg.position.y = STAGE_Y + 0.88 + Math.abs(Math.sin(time * 5 + tg.marchOffset)) * 0.18;
        tg.group.rotation.z = Math.sin(time * 5 + tg.marchOffset) * 0.14;
      };
      t.position.set(-13.5 + i * 4.5, STAGE_Y + 0.88, 1.2);
      scene.add(t.group);
      this.cookies.push(t);
      this.targets.push(t);
    }

    // カップケーキ(中レーン z=-1.6)ぽよんと跳ねる — 4体 + フィーバー2体
    const cupColors = [
      [C.pink, C.cream], [C.mint, C.pink], [C.sky, C.cream],
      [C.lavender, C.lemon], [C.lemon, C.pink], [C.cherry, C.cream],
    ];
    const cupX = [-6.5, -2.2, 2.2, 6.5, -4.4, 4.4];
    this.cupcakes = [];
    for (let i = 0; i < 6; i++) {
      const t = new Target(buildCupcake(M, cupColors[i][0], cupColors[i][1]), 'cupcake', 0.95, cupColors[i][0]);
      t.fever = i >= 4;
      t.phase = i * 1.3;
      t.baseX = cupX[i];
      t.movement = (time, dt, tg) => {
        const hop = Math.abs(Math.sin(time * (2.2 * this.speedScale) + tg.phase));
        tg.position.y = STAGE_Y + 0.1 + hop * hop * 1.9;
        tg.group.scale.y = tg.group.scale.x * (1 - (1 - hop) * 0.12); // 着地でぷにっと潰れる
      };
      t.position.set(cupX[i], STAGE_Y + 0.1, -1.6);
      scene.add(t.group);
      this.cupcakes.push(t);
      this.targets.push(t);
    }

    // ロリポップ(中奥レーン z=-3.4)左右にゆらゆら回る — 4体
    const swirls = [M.swirlPink, M.swirlMint, M.swirlGrape, M.swirlPink];
    const rims = [M.candyPink, M.candyMint, M.candyLavender, M.candyPink];
    const lolliColors = [C.pink, C.mint, C.lavender, C.pink];
    for (let i = 0; i < 4; i++) {
      const t = new Target(buildLollipop(M, swirls[i], rims[i]), 'lollipop', 1.0, lolliColors[i]);
      t.phase = i * 1.9;
      t.baseX = -7.5 + i * 5;
      t.baseY = STAGE_Y + 2.2 + (i % 2) * 0.9;
      t.movement = (time, dt, tg) => {
        tg.position.x = tg.baseX + Math.sin(time * 0.9 * this.speedScale + tg.phase) * 2.0;
        tg.position.y = tg.baseY + Math.sin(time * 1.7 + tg.phase) * 0.25;
        tg.group.rotation.z = time * 2.2 + tg.phase;
      };
      t.position.set(t.baseX, t.baseY, -3.4);
      scene.add(t.group);
      this.targets.push(t);
    }

    // 巨大チョコドーナツ(必ず当たる救済・ほぼ静止)
    const donut = new Target(buildDonut(M), 'donut', 2.3, C.chocolate);
    donut.movement = (time, dt, tg) => {
      tg.position.y = STAGE_Y + 2.6 + Math.sin(time * 0.8) * 0.25;
      tg.group.rotation.z = time * 0.35;
    };
    donut.position.set(0, STAGE_Y + 2.6, -5.2);
    this.scene.add(donut.group);
    this.donut = donut;
    this.targets.push(donut);

    // 金色スター(ボーナス・たまに横切る)
    const star = new Target(buildStar(M, T), 'star', 1.15, C.gold);
    star.movement = (time, dt, tg) => {
      tg.position.x += tg.starDir * 5.5 * dt;
      tg.position.y = 4.6 + Math.sin(time * 3 + 1) * 0.5;
      tg.group.rotation.z = time * 3;
      if ((tg.starDir > 0 && tg.position.x > 14) || (tg.starDir < 0 && tg.position.x < -14)) {
        tg.deactivate();
        this.starActive = false;
        this.starTimer = THREE.MathUtils.randFloat(5, 8);
      }
    };
    star.position.set(-14, 4.6, -6.0);
    this.scene.add(star.group);
    this.star = star;
    this.targets.push(star);
  }

  // ラウンド開始: 通常の的を全部出す
  reset() {
    for (const t of this.targets) t.deactivate();
    for (const t of this.targets) {
      if (t === this.star || t.fever) continue;
      t.activate();
    }
    // クッキーを等間隔に再配置
    this.cookies.forEach((t, i) => { t.position.x = -13.5 + i * 4.5; });
    this.setFever(false);
    this.starTimer = 4;
    this.starActive = false;
  }

  setFever(on) {
    this.fever = on;
    this.speedScale = on ? 1.35 : 1;
    for (const t of this.targets) {
      if (!t.fever) continue;
      if (on && t.state === 'inactive') t.activate();
      if (!on && t.state !== 'inactive') t.deactivate();
    }
  }

  aliveTargets() {
    return this.targets.filter((t) => t.state === 'alive');
  }

  // 命中処理(発射体から呼ばれる)
  hitTarget(target, point) {
    if (target.state !== 'alive') return;
    target.state = 'dying';
    target.timer = 0;
    if (target === this.star) {
      this.starActive = false;
      this.starTimer = THREE.MathUtils.randFloat(5, 8);
    }
    if (this.onHit) this.onHit(target, point);
  }

  launchStar() {
    const dir = Math.random() < 0.5 ? 1 : -1;
    this.star.starDir = dir;
    this.star.position.set(-14 * dir, 4.6, -6.0);
    this.star.activate();
    this.starActive = true;
  }

  update(time, dt, playing) {
    // 金スターの出現管理
    if (playing && !this.starActive && this.star.state === 'inactive') {
      this.starTimer -= dt;
      if (this.starTimer <= 0) this.launchStar();
    }

    for (const t of this.targets) {
      switch (t.state) {
        case 'alive':
          t.prevPos.copy(t.position);
          t.movement(time, dt, t);
          t.vel.subVectors(t.position, t.prevPos).divideScalar(Math.max(dt, 1e-4));
          break;
        case 'spawning': {
          t.timer += dt;
          const k = Math.min(t.timer / 0.35, 1);
          // ぽよんと弾んで登場
          const s = k < 1 ? 1.15 * Math.sin(k * Math.PI * 0.6) / Math.sin(Math.PI * 0.6) : 1;
          t.group.scale.setScalar(Math.max(s, 0.01));
          if (k >= 1) {
            t.group.scale.setScalar(1);
            t.state = 'alive';
            t.prevPos.copy(t.position);
          }
          break;
        }
        case 'dying': {
          t.timer += dt;
          const k = t.timer / 0.22;
          if (k >= 1) {
            t.group.visible = false;
            t.state = 'dead';
            t.timer = 0;
          } else {
            // ぷくっと膨らんで弾ける
            const s = k < 0.4 ? 1 + k * 0.9 : (1.36) * (1 - (k - 0.4) / 0.6);
            t.group.scale.setScalar(Math.max(s, 0.01));
          }
          break;
        }
        case 'dead': {
          t.timer += dt;
          if (t.timer >= 1.0 && t !== this.star && playing) {
            if (t.type === 'cookie') t.position.x = -13.5; // 横からまた行進
            t.activate();
          }
          break;
        }
      }
    }
  }
}
