// stage.js — 浮島の箱庭ステージ
// walkables: 接地レイキャスト対象のメッシュ群
// solidBoxes/solidCyls: XZ押し出し用の衝突形状
// movers: 動くプラットフォーム(差分deltaをキャリー処理に使う)
import * as THREE from 'three';

export const KILL_Y = -10;
export const TOTAL_STARS = 5;

const HALF = 52; // 島の半径(正方形の半辺)

// 地形の高さ関数。地面メッシュの頂点もこれで生成するので、
// 配置計算・カメラの床クランプにも同じ関数を使える。
export function groundHeight(x, z) {
  let h =
    Math.sin(x * 0.09) * Math.cos(z * 0.075) * 1.7 +
    Math.sin((x + z) * 0.05) * 1.1;
  const d = Math.hypot(x, z);
  h *= THREE.MathUtils.smoothstep(d, 7, 16); // スポーン周辺は平坦
  h += 6.5 * Math.exp(-((x + 32) ** 2 + (z + 28) ** 2) / 130); // 丘
  return h;
}

class Mover {
  constructor(mesh, pA, pB, period, phase = 0) {
    this.mesh = mesh;
    this.pA = pA.clone();
    this.pB = pB.clone();
    this.period = period;
    this.phase = phase;
    this.prev = new THREE.Vector3().copy(pA);
    this.delta = new THREE.Vector3();
    mesh.position.copy(pA);
  }
  update(t) {
    this.prev.copy(this.mesh.position);
    const s = 0.5 - 0.5 * Math.cos((t / this.period + this.phase) * Math.PI * 2);
    this.mesh.position.lerpVectors(this.pA, this.pB, s);
    this.delta.subVectors(this.mesh.position, this.prev);
    this.mesh.updateMatrixWorld(); // 直後のレイキャストのため必須
  }
}

export function createStage(scene) {
  const root = new THREE.Group();
  scene.add(root);

  const walkables = [];
  const solidBoxes = [];
  const solidCyls = [];
  const movers = [];
  const occluders = [];
  const coinSpots = [];
  const starSpots = [];
  const enemySpots = [];

  const matGrass = new THREE.MeshLambertMaterial({ color: 0x6fc25e });
  const matDirt = new THREE.MeshLambertMaterial({ color: 0x8a6a45, side: THREE.DoubleSide });
  const matStone = new THREE.MeshLambertMaterial({ color: 0x9aa0ab });
  const matPlat = new THREE.MeshLambertMaterial({ color: 0xd9824f });
  const matWood = new THREE.MeshLambertMaterial({ color: 0x7d5230 });
  const matLeaf = new THREE.MeshLambertMaterial({ color: 0x3f9e4d });
  const matRock = new THREE.MeshLambertMaterial({ color: 0x7e8087 });
  const matSea = new THREE.MeshLambertMaterial({ color: 0x3f8fd2 });
  const matCloud = new THREE.MeshBasicMaterial({ color: 0xffffff });

  // --- 地面(起伏付きの島) ---
  const groundGeo = new THREE.PlaneGeometry(HALF * 2, HALF * 2, 72, 72);
  groundGeo.rotateX(-Math.PI / 2);
  {
    const p = groundGeo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      p.setY(i, groundHeight(p.getX(i), p.getZ(i)));
    }
    groundGeo.computeVertexNormals();
  }
  const ground = new THREE.Mesh(groundGeo, matGrass);
  ground.receiveShadow = true;
  root.add(ground);
  walkables.push(ground);

  // 島のスカート(浮島の岩肌)
  const skirtGeo = new THREE.CylinderGeometry(HALF * 1.42, 24, 18, 4, 1, true);
  skirtGeo.rotateY(Math.PI / 4);
  const skirt = new THREE.Mesh(skirtGeo, matDirt);
  skirt.position.y = -8.4;
  root.add(skirt);

  // 海(遠景。KILL_Y より下なので触れない)
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(800, 800), matSea);
  sea.rotation.x = -Math.PI / 2;
  sea.position.y = -16;
  root.add(sea);

  // --- 汎用ヘルパー ---
  // 上面の中心 (x, topY, z)・半径 r の円形プラットフォーム
  function addPlatform(x, topY, z, r = 1.7) {
    const geo = new THREE.CylinderGeometry(r, r * 0.8, 0.5, 9);
    const mesh = new THREE.Mesh(geo, matPlat);
    mesh.position.set(x, topY - 0.25, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);
    walkables.push(mesh);
    solidCyls.push({ x, z, r: r * 0.92, minY: topY - 0.5, maxY: topY });
    return mesh;
  }

  // (x0,z0,y0)の低い側から(x1,z1,y1)の高い側へ渡るスロープ
  function addRamp(x0, z0, y0, x1, z1, y1, w = 3.4) {
    const len = Math.hypot(x1 - x0, z1 - z0);
    const slope = Math.atan2(y1 - y0, len);
    const geo = new THREE.BoxGeometry(len + 1.0, 0.5, w);
    const mesh = new THREE.Mesh(geo, matStone);
    mesh.position.set((x0 + x1) / 2, (y0 + y1) / 2 - 0.28, (z0 + z1) / 2);
    mesh.quaternion.setFromEuler(
      new THREE.Euler(0, Math.atan2(-(z1 - z0), x1 - x0), slope, 'YZX')
    );
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);
    walkables.push(mesh);
    return mesh;
  }

  function addMover(size, pA, pB, period, phase = 0) {
    const geo = new THREE.BoxGeometry(size, 0.5, size);
    const mesh = new THREE.Mesh(geo, matWood);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);
    walkables.push(mesh);
    const mover = new Mover(mesh, pA, pB, period, phase);
    movers.push(mover);
    return mover;
  }

  function addTree(x, z) {
    const g = groundHeight(x, z);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.42, 2.4, 7), matWood);
    trunk.position.set(x, g + 1.2, z);
    trunk.castShadow = true;
    root.add(trunk);
    const c1 = new THREE.Mesh(new THREE.ConeGeometry(1.6, 2.2, 8), matLeaf);
    c1.position.set(x, g + 3.1, z);
    c1.castShadow = true;
    root.add(c1);
    const c2 = new THREE.Mesh(new THREE.ConeGeometry(1.15, 1.8, 8), matLeaf);
    c2.position.set(x, g + 4.3, z);
    c2.castShadow = true;
    root.add(c2);
    solidCyls.push({ x, z, r: 0.55, minY: g - 0.5, maxY: g + 2.4 });
  }

  function addRock(x, z, s = 1) {
    const g = groundHeight(x, z);
    const mesh = new THREE.Mesh(new THREE.DodecahedronGeometry(0.9 * s, 0), matRock);
    mesh.position.set(x, g + 0.55 * s, z);
    mesh.rotation.set(Math.random() * 3, Math.random() * 3, 0);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);
    walkables.push(mesh);
    solidCyls.push({ x, z, r: 0.8 * s, minY: g - 0.5, maxY: g + 0.9 * s });
  }

  function addFlower(x, z) {
    const g = groundHeight(x, z);
    const colors = [0xff7fae, 0xffd24a, 0xff8c5a, 0xc78aff, 0xffffff];
    const stem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.34, 5),
      matLeaf
    );
    stem.position.set(x, g + 0.17, z);
    root.add(stem);
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.13, 6, 5),
      new THREE.MeshLambertMaterial({ color: colors[Math.floor(Math.random() * colors.length)] })
    );
    head.position.set(x, g + 0.38, z);
    root.add(head);
  }

  function coin(x, y, z) {
    coinSpots.push(new THREE.Vector3(x, y, z));
  }
  function coinOnGround(x, z) {
    coin(x, groundHeight(x, z) + 0.65, z);
  }

  // ============================================================
  // レイアウト
  // ============================================================

  // --- スター1: 丘の頂上(歩いて登れる) ---
  {
    const g = groundHeight(-32, -28);
    starSpots.push(new THREE.Vector3(-32, g + 1.2, -28));
    coinOnGround(-27, -23);
    coinOnGround(-29.5, -25.5);
    coinOnGround(-34, -30);
  }

  // --- スター2: 石の塔(スロープで登る) ---
  {
    const g0 = groundHeight(20, -14);
    const top = g0 + 4.0;
    const tower = new THREE.Mesh(new THREE.BoxGeometry(6, 4.4, 6), matStone);
    tower.position.set(20, top - 2.2, -14);
    tower.castShadow = true;
    tower.receiveShadow = true;
    root.add(tower);
    walkables.push(tower);
    occluders.push(tower);
    solidBoxes.push({ minX: 17, maxX: 23, minZ: -17, maxZ: -11, minY: g0 - 0.4, maxY: top });
    // 西側からのスロープ
    const g1 = groundHeight(6.5, -14);
    addRamp(6.5, -14, g1, 17.2, -14, top + 0.08, 3.2);
    starSpots.push(new THREE.Vector3(20, top + 1.0, -14));
    for (let i = 0; i < 5; i++) {
      const f = i / 4;
      coin(6.5 + (16.9 - 6.5) * f, g1 + (top - g1) * f + 0.7, -14);
    }
  }

  // --- スター3: 空中の足場階段(連続ジャンプの腕試し) ---
  {
    const gA = groundHeight(12, 22);
    const ys = [gA + 1.3];
    const pts = [
      [12, 22],
      [15, 25],
      [12.5, 28.5],
      [9, 31],
      [5.5, 33.5],
    ];
    const rises = [0, 1.4, 1.5, 1.6, 1.6];
    let y = ys[0];
    pts.forEach((p, i) => {
      y += rises[i];
      addPlatform(p[0], y, p[1], i === pts.length - 1 ? 2.1 : 1.7);
      if (i > 0) coin(p[0], y + 0.7, p[1]);
    });
    starSpots.push(new THREE.Vector3(5.5, y + 1.1, 33.5));
  }

  // --- スター4: 渡し舟(動く足場)の先の浮島 ---
  {
    const g = groundHeight(0, -46);
    const deck = g + 1.3;
    addPlatform(0, deck, -47, 2.2); // 乗り場
    addMover(
      3.2,
      new THREE.Vector3(0, deck + 0.05, -51.5),
      new THREE.Vector3(0, deck + 0.05, -61.5),
      6.5
    );
    // 浮島
    const isleTop = deck + 0.7;
    const isle = new THREE.Mesh(new THREE.CylinderGeometry(5.5, 4.6, 1.4, 12), matGrass);
    isle.position.set(0, isleTop - 0.7, -68);
    isle.castShadow = true;
    isle.receiveShadow = true;
    root.add(isle);
    walkables.push(isle);
    solidCyls.push({ x: 0, z: -68, r: 5.3, minY: isleTop - 1.4, maxY: isleTop });
    const under = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 1.2, 5, 8), matDirt);
    under.position.set(0, isleTop - 3.9, -68);
    root.add(under);
    starSpots.push(new THREE.Vector3(0, isleTop + 1.1, -68));
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      coin(Math.cos(a) * 3.1, isleTop + 0.65, -68 + Math.sin(a) * 3.1);
    }
    coinOnGround(0, -42);
  }

  // --- スター5: エレベーターで登る高台 ---
  {
    const g = groundHeight(34, 10);
    addMover(
      2.6,
      new THREE.Vector3(34, g + 0.8, 10),
      new THREE.Vector3(34, g + 8.8, 10),
      7,
      0.5
    );
    const perchTop = g + 9.0;
    addPlatform(38.5, perchTop, 10, 2.6);
    starSpots.push(new THREE.Vector3(38.5, perchTop + 1.1, 10));
    coin(38.5, perchTop + 0.7, 8.5);
    coinOnGround(31, 7);
  }

  // --- スポーン広場のコインリング ---
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    coinOnGround(Math.cos(a) * 5.5, Math.sin(a) * 5.5);
  }

  // --- 装飾 ---
  [
    [8, 7],
    [-10, 3],
    [-5, -17],
    [25, 5],
    [-22, 18],
    [13, -30],
    [-40, 6],
    [-16, 33],
  ].forEach(([x, z]) => addTree(x, z));
  addRock(-14, -8, 1.1);
  addRock(28, 24, 1.0);
  addRock(-36, 22, 1.3);
  addRock(5, -36, 0.9);
  for (let i = 0; i < 16; i++) {
    const a = Math.random() * Math.PI * 2;
    const r = 6 + Math.random() * 38;
    addFlower(Math.cos(a) * r, Math.sin(a) * r);
  }

  // 雲
  for (let i = 0; i < 7; i++) {
    const cloud = new THREE.Group();
    for (let j = 0; j < 3; j++) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(2.2 + Math.random() * 1.4, 8, 6), matCloud);
      s.position.set(j * 2.6 - 2.6, Math.random() * 0.6, Math.random() * 1.4);
      s.scale.y = 0.55;
      cloud.add(s);
    }
    const a = (i / 7) * Math.PI * 2;
    cloud.position.set(Math.cos(a) * (40 + i * 7), 22 + (i % 3) * 5, Math.sin(a) * (40 + i * 7));
    root.add(cloud);
  }

  // --- 敵の配置 ---
  enemySpots.push(
    { type: 'bug', a: new THREE.Vector3(8, 0, -6), b: new THREE.Vector3(16, 0, -6) },
    { type: 'bug', a: new THREE.Vector3(-14, 0, 10), b: new THREE.Vector3(-21, 0, 15) },
    { type: 'golem', home: new THREE.Vector3(-26, 0, -18), radius: 6 },
    { type: 'golem', home: new THREE.Vector3(16, 0, 14), radius: 6 },
    { type: 'golem', home: new THREE.Vector3(28, 0, 2), radius: 5 }
  );
  for (const s of enemySpots) {
    if (s.a) {
      s.a.y = groundHeight(s.a.x, s.a.z);
      s.b.y = groundHeight(s.b.x, s.b.z);
    } else {
      s.home.y = groundHeight(s.home.x, s.home.z);
    }
  }

  root.updateMatrixWorld(true);

  return {
    walkables,
    solidBoxes,
    solidCyls,
    movers,
    occluders,
    coinSpots,
    starSpots,
    enemySpots,
    groundHeight,
    spawn: new THREE.Vector3(0, groundHeight(0, 3) + 0.3, 3),
    update(t) {
      for (const m of movers) m.update(t);
    },
  };
}
