// 無人の空港ターミナル(幅18m・奥行12m・高さ8m)。窓枠・梁・柱は簡素な反復形状、外の空は固定の背景。
import * as THREE from 'three';
import { merge, box, colorize, roomAO } from './geo.js';
import { terrazzo, skyTexture, ceilingTexture } from './textures.js';

export function createTerminal(scene) {
  const group = new THREE.Group();
  group.name = 'terminal';

  // 床
  const floorTex = terrazzo();
  // 床はホールの手前の通路まで続く(カメラは通路側からホールを見る)
  floorTex.repeat.set(22 / 4, 28 / 4);
  const floorGeo = new THREE.PlaneGeometry(22, 28, 22, 28);
  floorGeo.rotateX(-Math.PI / 2);
  floorGeo.translate(0, 0, 7);
  colorize(floorGeo, 0xffffff, (x, y, z) => roomAO(x, 0.6, z));
  const floor = new THREE.Mesh(
    floorGeo,
    new THREE.MeshStandardMaterial({ color: 0xc4beb4, map: floorTex, roughness: 0.42, metalness: 0, vertexColors: true, envMapIntensity: 0.75 })
  );
  floor.receiveShadow = true;
  floor.name = 'floor';
  group.add(floor);

  // 天井(下向き)
  const ceilTex = ceilingTexture();
  ceilTex.repeat.set(18 / 1.5, 12 / 1.5);
  const ceilGeo = new THREE.PlaneGeometry(18, 12, 36, 24);
  ceilGeo.rotateX(Math.PI / 2);
  ceilGeo.translate(0, 8, 0);
  colorize(ceilGeo, 0xffffff, (x, y, z) => roomAO(x, 7.4, z) * (0.9 + 0.1 * Math.min(1, (6 - z) / 3)));
  const ceiling = new THREE.Mesh(ceilGeo, new THREE.MeshStandardMaterial({ map: ceilTex, roughness: 0.75, vertexColors: true, envMapIntensity: 0.6 }));
  ceiling.receiveShadow = true;
  ceiling.name = 'ceiling';
  group.add(ceiling);

  // 天窓の帯(発光)
  const sky = [];
  for (let i = -2; i <= 2; i++) {
    if (i === 0) continue;
    const g = new THREE.PlaneGeometry(0.9, 10.4);
    g.rotateX(Math.PI / 2);
    g.translate(i * 3.6, 7.985, -0.4);
    sky.push(g);
  }
  const skylights = new THREE.Mesh(merge(sky), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.7, 1.72, 1.68) }));
  group.add(skylights);

  // 静的な構造(壁・腰壁・窓枠・梁・柱・縁)を一つに
  const parts = [];
  const WALL = 0xd9d6cf, FRAME = 0x55606a, BEAM = 0xbcc0c2, EDGE = 0x8d8a84;
  // 奥: 腰壁 + カーテンウォール
  parts.push(box(18, 0.9, 0.3, 0, 0.45, -6.15, WALL, 0, roomAO));
  parts.push(box(18, 0.5, 0.3, 0, 7.75, -6.15, WALL, 0, roomAO));
  for (let k = 0; k <= 10; k++) parts.push(box(0.12, 6.6, 0.22, -9 + k * 1.8, 4.2, -6.05, FRAME));
  for (const y of [0.95, 3.3, 5.6, 7.5]) parts.push(box(18, 0.1, 0.2, 0, y, -6.05, FRAME));
  // 左: 窓
  parts.push(box(0.3, 1.0, 12, -9.15, 0.5, 0, WALL, 0, roomAO));
  parts.push(box(0.3, 0.8, 12, -9.15, 7.6, 0, WALL, 0, roomAO));
  for (let k = 0; k <= 6; k++) parts.push(box(0.22, 6.2, 0.12, -9.05, 4.1, -6 + k * 2, FRAME));
  for (const y of [1.05, 4.0, 7.15]) parts.push(box(0.2, 0.1, 12, -9.05, y, 0, FRAME));
  // 右: 壁と付け柱
  parts.push(box(0.3, 8, 12, 9.15, 4, 0, WALL, 0, roomAO));
  for (let k = 0; k < 4; k++) parts.push(box(0.5, 8, 0.6, 8.75, 4, -5.2 + k * 3.4, 0xcfccc4, 0, roomAO));
  // 天井の周囲の梁と、奥行き方向の梁(天井の縁だけ)
  parts.push(box(18, 0.45, 0.35, 0, 7.78, -5.82, BEAM));
  parts.push(box(0.35, 0.45, 12, -8.82, 7.78, 0, BEAM));
  parts.push(box(0.35, 0.45, 12, 8.82, 7.78, 0, BEAM));
  for (let k = 0; k < 4; k++) parts.push(box(0.5, 7.6, 0.5, -8.7, 3.8, -4.5 + k * 3.0, 0xc4c6c6, 0, roomAO));
  // 手前の切断面(床・天井・壁の厚み)
  // 手前の通路側の壁(開口の外側)
  parts.push(box(0.3, 8.9, 14, -9.6, 4.0, 13.2, 0xcfcbc3, 0, roomAO));
  parts.push(box(0.3, 8.9, 14, 9.6, 4.0, 13.2, 0xcfcbc3, 0, roomAO));
  parts.push(box(18.6, 0.5, 0.45, 0, 8.25, 6.02, EDGE));
  parts.push(box(0.45, 8.9, 0.45, -9.15, 4.0, 6.02, EDGE));
  parts.push(box(0.45, 8.9, 0.45, 9.15, 4.0, 6.02, EDGE));
  // 床の縁石(幅木)
  parts.push(box(17.4, 0.12, 0.06, 0, 0.06, -5.97, 0x6d6b66));
  parts.push(box(0.06, 0.12, 12, 8.87, 0.06, 0, 0x6d6b66));
  // 奥の待合いす(大きさの手がかり)
  for (let k = 0; k < 6; k++) {
    const x = -2.8 + k * 0.62;
    parts.push(box(0.55, 0.06, 0.5, x, 0.45, -5.1, 0x3c5560));
    parts.push(box(0.55, 0.5, 0.06, x, 0.72, -5.35, 0x3c5560));
    parts.push(box(0.05, 0.45, 0.05, x - 0.22, 0.22, -5.0, 0x777b7e));
    parts.push(box(0.05, 0.45, 0.05, x + 0.22, 0.22, -5.0, 0x777b7e));
  }
  parts.push(box(3.9, 0.05, 0.08, -1.25, 0.32, -5.1, 0x777b7e));
  const structure = new THREE.Mesh(merge(parts), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.62, metalness: 0.05, envMapIntensity: 0.7 }));
  structure.receiveShadow = true;
  structure.castShadow = true; // 窓枠・梁・柱の影(光は窓から入る)
  structure.name = 'structure';
  group.add(structure);

  // 窓の外の空(固定の背景)
  const skyTex = skyTexture();
  const skyMat = new THREE.MeshBasicMaterial({ map: skyTex, depthWrite: false, fog: false });
  const skyGeoB = new THREE.PlaneGeometry(64, 30);
  skyGeoB.translate(0, 6, -26);
  const skyGeoL = new THREE.PlaneGeometry(50, 30);
  skyGeoL.rotateY(Math.PI / 2);
  skyGeoL.translate(-30, 6, 4);
  const skyMesh = new THREE.Mesh(merge([skyGeoB, skyGeoL]), skyMat);
  skyMesh.renderOrder = -10;
  group.add(skyMesh);
  // 外の地面(滑走路側)
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 60).rotateX(-Math.PI / 2).translate(-10, -0.3, -30), new THREE.MeshBasicMaterial({ color: 0x7d8778 }));
  group.add(ground);

  scene.add(group);
  return { group, floor, ceiling };
}
