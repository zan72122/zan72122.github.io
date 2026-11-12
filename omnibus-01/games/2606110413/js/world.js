import * as THREE from 'three';
import { CONFIG } from './config.js';
import { mergeColored, mat4 } from './materials.js';
import { createRiver } from './river.js';
import { createCastle } from './castle.js';

const C = CONFIG.colors;

// ロリポップ型の街灯(グロー付き)
function lollipopLamp(M, T, x, z, color, swirlMat) {
  const group = new THREE.Group();
  const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 3.6, 10), M.stripesRed);
  stick.position.y = 1.8;
  stick.castShadow = true;
  group.add(stick);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.85, 24, 18), swirlMat);
  head.scale.z = 0.55;
  head.position.y = 3.9;
  head.castShadow = true;
  group.add(head);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: T.glow, color, blending: THREE.AdditiveBlending,
    transparent: true, depthWrite: false, opacity: 0.85,
  }));
  glow.scale.setScalar(3.2);
  glow.position.y = 3.9;
  group.add(glow);
  group.position.set(x, 0, z);
  return { group, glow, head };
}

// ドーナツ観覧車
function ferrisWheel(M) {
  const group = new THREE.Group();
  const wheel = new THREE.Group();

  const rim = new THREE.Mesh(new THREE.TorusGeometry(4, 0.18, 10, 40), M.candyLavender);
  wheel.add(rim);

  // スポーク(マージして1メッシュ)
  const spokes = [];
  for (let i = 0; i < 8; i++) {
    spokes.push({
      geo: new THREE.CylinderGeometry(0.08, 0.08, 8, 6),
      color: C.white,
      matrix: mat4(0, 0, 0, 0, 0, (i * Math.PI) / 8),
    });
  }
  spokes.push({ geo: new THREE.SphereGeometry(0.5, 14, 10), color: C.lemon });
  const spokeMesh = new THREE.Mesh(mergeColored(spokes), M.vertexCandy);
  wheel.add(spokeMesh);

  // ゴンドラのドーナツ(InstancedMesh・色違い)
  const donutGeo = new THREE.TorusGeometry(0.62, 0.3, 10, 18);
  const donuts = new THREE.InstancedMesh(donutGeo, M.vertexCandy.clone(), 8);
  donuts.material.vertexColors = false;
  const donutColors = [C.pink, C.mint, C.lemon, C.sky, C.lavender, C.cherry, C.cream, C.chocolate];
  const dummy = new THREE.Object3D();
  for (let i = 0; i < 8; i++) {
    donuts.setColorAt(i, new THREE.Color(donutColors[i]));
    const a = (i / 8) * Math.PI * 2;
    dummy.position.set(Math.cos(a) * 4, Math.sin(a) * 4, 0.1);
    dummy.updateMatrix();
    donuts.setMatrixAt(i, dummy.matrix);
  }
  donuts.instanceColor.needsUpdate = true;
  donuts.instanceMatrix.needsUpdate = true;
  wheel.add(donuts);

  // 支柱
  const legs = new THREE.Mesh(mergeColored([
    { geo: new THREE.CylinderGeometry(0.16, 0.22, 5.4, 8), color: C.deepPink, matrix: mat4(-1.4, -3.4, 0, 0, 0, 0.28) },
    { geo: new THREE.CylinderGeometry(0.16, 0.22, 5.4, 8), color: C.deepPink, matrix: mat4(1.4, -3.4, 0, 0, 0, -0.28) },
  ]), M.vertexCandy);
  group.add(legs);
  group.add(wheel);

  return {
    group, wheel,
    update(t) {
      wheel.rotation.z = t * 0.18;
    },
  };
}

// マカロン雲
function macaronCloud(M, color) {
  const geo = mergeColored([
    { geo: new THREE.SphereGeometry(1, 18, 12), color, matrix: mat4(0, 0.32, 0, Math.PI / 2, 0, 0, 1, 1, 0.62) },
    { geo: new THREE.SphereGeometry(1, 18, 12), color, matrix: mat4(0, -0.32, 0, Math.PI / 2, 0, 0, 1, 1, 0.62) },
    { geo: new THREE.CylinderGeometry(0.92, 0.92, 0.34, 18), color: C.cream },
  ]);
  return new THREE.Mesh(geo, M.vertexCandyMatte);
}

// 奥のキャンディ山脈(ソフトクリーム/キャンディドロップ)
function candyHills(M) {
  const parts = [];
  const palette = [C.pink, C.mint, C.lemon, C.sky, C.lavender];
  const spots = [
    [-16, -24, 5.5], [-8, -28, 7], [-7, -30, 5.5], [13, -27, 7.5], [18, -23, 5],
    [-22, -20, 4], [23, -19, 4.5],
  ];
  spots.forEach(([x, z, h], i) => {
    const color = palette[i % palette.length];
    // ソフトクリーム型: コーン + ぐるぐる
    parts.push({ geo: new THREE.ConeGeometry(h * 0.55, h, 12), color, matrix: mat4(x, h / 2, z) });
    parts.push({ geo: new THREE.SphereGeometry(h * 0.3, 12, 8), color: C.cream, matrix: mat4(x, h + h * 0.05, z) });
  });
  const mesh = new THREE.Mesh(mergeColored(parts), M.vertexCandyMatte);
  return mesh;
}

// にじ
function rainbow() {
  const colors = [0xff5fa2, 0xffb648, 0xfff35e, 0x58d36b, 0x4d9ad6];
  const parts = [];
  colors.forEach((color, i) => {
    parts.push({
      geo: new THREE.TorusGeometry(9 - i * 0.62, 0.32, 8, 40, Math.PI),
      color,
    });
  });
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true, fog: true });
  const mesh = new THREE.Mesh(mergeColored(parts), mat);
  return mesh;
}

// 舞台手前のキャンディ柵
function candyFence(M) {
  const parts = [];
  const palette = [C.pink, C.mint, C.lemon, C.sky];
  for (let i = 0; i < 12; i++) {
    const x = -11 + i * 2;
    parts.push({ geo: new THREE.CylinderGeometry(0.09, 0.09, 1.1, 8), color: C.white, matrix: mat4(x, 0.55, 0) });
    parts.push({ geo: new THREE.SphereGeometry(0.24, 12, 8), color: palette[i % 4], matrix: mat4(x, 1.18, 0) });
  }
  parts.push({ geo: new THREE.CylinderGeometry(0.09, 0.09, 23, 8), color: C.white, matrix: mat4(0, 0.85, 0, 0, 0, Math.PI / 2) });
  const mesh = new THREE.Mesh(mergeColored(parts), M.vertexCandy);
  return mesh;
}

export function createWorld(scene, M, T) {
  // 地面
  T.ground.repeat.set(14, 14);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(220, 220), M.ground);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // 舞台(ビスケットの台)
  const stage = new THREE.Mesh(
    new THREE.BoxGeometry(24, 0.5, 12, 1, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0xeec98a, roughness: 0.7 })
  );
  stage.position.set(0, 0.25, -2.4);
  stage.receiveShadow = true;
  stage.castShadow = true;
  scene.add(stage);

  // 舞台の縁(ピンクのアイシング)
  const icing = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 24, 10), M.candyPink);
  icing.rotation.z = Math.PI / 2;
  icing.position.set(0, 0.55, 3.55);
  icing.castShadow = true;
  scene.add(icing);

  // ストライプの天蓋(屋根): x方向に伸びる半パイプをアーチ状に被せる
  const awningGeo = new THREE.CylinderGeometry(3.4, 3.4, 23, 24, 1, true, 0, Math.PI);
  awningGeo.rotateZ(Math.PI / 2);  // 軸をx方向へ
  awningGeo.rotateX(-Math.PI / 2); // アーチが上を向くように
  const awning = new THREE.Mesh(awningGeo, M.awning);
  awning.scale.set(1, 0.34, 0.36);
  awning.position.set(0, 8.8, -7.4);
  awning.material.side = THREE.DoubleSide;
  scene.add(awning);

  const poles = new THREE.Mesh(mergeColored([
    { geo: new THREE.CylinderGeometry(0.18, 0.22, 9.2, 10), color: C.white, matrix: mat4(-11.2, 4.6, -7.4) },
    { geo: new THREE.CylinderGeometry(0.18, 0.22, 9.2, 10), color: C.white, matrix: mat4(11.2, 4.6, -7.4) },
    { geo: new THREE.SphereGeometry(0.4, 12, 8), color: C.lemon, matrix: mat4(-11.2, 9.3, -7.4) },
    { geo: new THREE.SphereGeometry(0.4, 12, 8), color: C.lemon, matrix: mat4(11.2, 9.3, -7.4) },
  ]), M.vertexCandy);
  poles.castShadow = true;
  scene.add(poles);

  // 旗のガーランド(天蓋の下に2本、たるんだ曲線で)
  const flagParts = [];
  const flagPalette = [C.pink, C.lemon, C.mint, C.sky, C.lavender];
  for (let row = 0; row < 1; row++) {
    const z = -7.0;
    const y0 = 8.2;
    const n = 15;
    for (let i = 0; i < n; i++) {
      const u = i / (n - 1);
      const x = -10.5 + u * 21;
      const sag = Math.sin(u * Math.PI) * 1.0; // 中央がたるむ
      // thetaStart で平らな面がカメラ(+z)を向くようにする
      const tri = new THREE.ConeGeometry(0.5, 1.1, 3, 1, false, Math.PI / 3);
      flagParts.push({
        geo: tri,
        color: flagPalette[(i + row * 2) % flagPalette.length],
        matrix: mat4(x, y0 - sag - 0.55, z, Math.PI, 0, 0, 1, 1, 0.22),
      });
    }
  }
  const flags = new THREE.Mesh(mergeColored(flagParts), M.vertexCandyMatte);
  scene.add(flags);

  // キャンディ柵
  const fence = candyFence(M);
  fence.position.set(0, 0, 4.6);
  scene.add(fence);

  // ロリポップ街灯
  const lampL = lollipopLamp(M, T, -9.4, 4.4, 0xff9ecf, M.swirlPink);
  const lampR = lollipopLamp(M, T, 9.4, 4.4, 0x8fe9d8, M.swirlMint);
  scene.add(lampL.group, lampR.group);

  // 観覧車
  const wheel = ferrisWheel(M);
  wheel.group.position.set(-13.5, 6.2, -19);
  scene.add(wheel.group);

  // にじ
  const bow = rainbow();
  bow.position.set(13, 0.5, -24);
  scene.add(bow);

  // マカロン雲
  const cloudColors = [C.pink, C.sky, C.lemon, C.lavender, C.mint];
  const clouds = [];
  const cloudSpots = [
    [-17, 12, -26, 1.6], [-6, 14.5, -30, 2.0], [5, 12.5, -27, 1.5],
    [15, 15, -30, 2.2], [22, 11, -24, 1.4],
  ];
  cloudSpots.forEach(([x, y, z, s], i) => {
    const cloud = macaronCloud(M, cloudColors[i % cloudColors.length]);
    cloud.position.set(x, y, z);
    cloud.scale.setScalar(s);
    cloud.userData.baseY = y;
    cloud.userData.phase = i * 1.7;
    scene.add(cloud);
    clouds.push(cloud);
  });

  // キャンディ山脈
  scene.add(candyHills(M));

  // チョコの川とお菓子のお城
  const river = createRiver(scene, M);
  const castle = createCastle(scene, M, T);

  return {
    update(t) {
      river.update(t);
      castle.update(t);
      wheel.update(t);
      for (const cloud of clouds) {
        cloud.position.y = cloud.userData.baseY + Math.sin(t * 0.4 + cloud.userData.phase) * 0.5;
        cloud.position.x += Math.sin(t * 0.13 + cloud.userData.phase) * 0.002;
      }
      // 街灯の明滅
      const tw = 0.75 + Math.sin(t * 2.1) * 0.12;
      lampL.glow.material.opacity = tw;
      lampR.glow.material.opacity = 0.95 - tw * 0.2;
      lampL.head.rotation.y = t * 0.4;
      lampR.head.rotation.y = -t * 0.4;
    },
  };
}
