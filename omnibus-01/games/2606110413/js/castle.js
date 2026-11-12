import * as THREE from 'three';
import { CONFIG } from './config.js';
import { mergeColored, mat4 } from './materials.js';

const C = CONFIG.colors;

// 奥にそびえるお菓子のお城。
// 本体(クッキー壁・塔・屋根・狭間・門・旗)を頂点カラーで1メッシュに、
// キャンディケイン塔はUV付きマージでストライプ、窓は高輝度でBloomに乗せる。
export function createCastle(scene, M, T) {
  const group = new THREE.Group();

  const parts = [];
  const wallColor = 0xe0b276;     // クッキー壁
  const wallLight = 0xedc890;
  const roofColors = [C.pink, C.mint, C.lavender, C.pink];

  // 土台ビスケット
  parts.push({ geo: new THREE.BoxGeometry(15, 1.2, 9), color: 0xd9a05b, matrix: mat4(0, 0.6, 0) });
  // 本体壁
  parts.push({ geo: new THREE.BoxGeometry(10, 4.8, 6), color: wallColor, matrix: mat4(0, 3.6, 0) });
  // 壁上の狭間(クレネル)
  for (let i = 0; i < 6; i++) {
    parts.push({
      geo: new THREE.BoxGeometry(0.9, 0.8, 0.9),
      color: wallLight,
      matrix: mat4(-4.4 + i * 1.76, 6.4, 3.0),
    });
  }
  // 四隅の塔 + コーン屋根
  const towerSpots = [[-5.2, 3.2], [5.2, 3.2], [-5.2, -3.2], [5.2, -3.2]];
  towerSpots.forEach(([x, z], i) => {
    parts.push({ geo: new THREE.CylinderGeometry(1.15, 1.3, 7, 12), color: wallLight, matrix: mat4(x, 3.7, z) });
    parts.push({ geo: new THREE.CylinderGeometry(1.45, 1.45, 0.5, 12), color: C.cream, matrix: mat4(x, 7.3, z) });
    parts.push({ geo: new THREE.ConeGeometry(1.5, 2.6, 12), color: roofColors[i], matrix: mat4(x, 8.8, z) });
    // 旗
    parts.push({ geo: new THREE.CylinderGeometry(0.05, 0.05, 1.2, 6), color: C.white, matrix: mat4(x, 10.6, z) });
    parts.push({
      geo: new THREE.ConeGeometry(0.32, 0.7, 3, 1, false, Math.PI / 3),
      color: roofColors[(i + 1) % 4],
      matrix: mat4(x, 10.9, z, Math.PI, 0, Math.PI / 2, 1, 1, 0.3),
    });
  });
  // 中央の大塔 + 屋根
  parts.push({ geo: new THREE.CylinderGeometry(1.7, 1.9, 9.5, 14), color: wallColor, matrix: mat4(0, 5.5, -1) });
  parts.push({ geo: new THREE.CylinderGeometry(2.1, 2.1, 0.6, 14), color: C.cream, matrix: mat4(0, 10.4, -1) });
  parts.push({ geo: new THREE.ConeGeometry(2.2, 3.4, 14), color: C.pink, matrix: mat4(0, 12.4, -1) });
  parts.push({ geo: new THREE.CylinderGeometry(0.06, 0.06, 1.6, 6), color: C.white, matrix: mat4(0, 14.7, -1) });
  parts.push({
    geo: new THREE.ConeGeometry(0.4, 0.9, 3, 1, false, Math.PI / 3),
    color: C.lemon,
    matrix: mat4(0, 15.1, -1, Math.PI, 0, Math.PI / 2, 1, 1, 0.3),
  });
  // チョコの門 + アーチ
  parts.push({ geo: new THREE.BoxGeometry(2.6, 3.2, 0.6), color: C.darkChoco, matrix: mat4(0, 2.4, 3.0) });
  parts.push({
    geo: new THREE.TorusGeometry(1.3, 0.35, 8, 16, Math.PI),
    color: C.chocolate,
    matrix: mat4(0, 4.0, 3.2),
  });
  // キャンディケインの飾り塔(ストライプテクスチャ・UV付きマージ)
  const caneParts = [
    { geo: new THREE.CylinderGeometry(0.5, 0.5, 8, 10), matrix: mat4(-2.8, 4.6, 3.1) },
    { geo: new THREE.CylinderGeometry(0.5, 0.5, 8, 10), matrix: mat4(2.8, 4.6, 3.1) },
    { geo: new THREE.SphereGeometry(0.72, 12, 9), matrix: mat4(-2.8, 8.9, 3.1) },
    { geo: new THREE.SphereGeometry(0.72, 12, 9), matrix: mat4(2.8, 8.9, 3.1) },
  ];
  const canes = new THREE.Mesh(mergeColored(caneParts, { uv: true }), M.stripesMint);
  group.add(canes);

  // 光る窓(高輝度・toneMapped:false → Bloomが灯りを拾う)
  const winParts = [];
  const winSpots = [
    [-3.2, 4.2, 3.06], [0, 5.4, 3.06], [3.2, 4.2, 3.06],
    [-5.2, 5.4, 4.46], [5.2, 5.4, 4.46],
    [0, 8.4, 0.75],
  ];
  for (const [x, y, z] of winSpots) {
    // チョコの窓枠(壁とのコントラスト用)を本体メッシュへ
    parts.push({
      geo: new THREE.BoxGeometry(1.0, 1.3, 0.12),
      color: C.chocolate,
      matrix: mat4(x, y, z - 0.05),
    });
    winParts.push({
      geo: new THREE.PlaneGeometry(0.66, 0.96),
      color: 0xffc23d,
      matrix: mat4(x, y, z + 0.04),
    });
  }
  const winMat = new THREE.MeshBasicMaterial({
    vertexColors: true, toneMapped: false, fog: false, side: THREE.DoubleSide,
  });
  winMat.color.setScalar(1.6); // 頂点カラー×1.6でBloom閾値を超えさせる
  const windows = new THREE.Mesh(mergeColored(winParts), winMat);
  group.add(windows);

  // 本体(窓枠まで含めて1メッシュ)
  const body = new THREE.Mesh(mergeColored(parts), M.vertexCandyMatte);
  group.add(body);

  // グロースプライト(中央塔の頂と門の上)
  const glowMat = new THREE.SpriteMaterial({
    map: T.glow, color: 0xffd98a, blending: THREE.AdditiveBlending,
    transparent: true, depthWrite: false, opacity: 0.7,
  });
  const glowTop = new THREE.Sprite(glowMat);
  glowTop.scale.setScalar(5);
  glowTop.position.set(0, 13, -1);
  group.add(glowTop);
  const glowGate = new THREE.Sprite(glowMat.clone());
  glowGate.scale.setScalar(3.4);
  glowGate.position.set(0, 4.2, 3.4);
  group.add(glowGate);

  group.position.set(-7.5, 0, -25);
  group.rotation.y = 0.18; // 少しだけカメラへ向ける
  group.scale.setScalar(1.35);
  scene.add(group);

  return {
    update(t) {
      // 窓あかりと門のゆらめき
      glowTop.material.opacity = 0.62 + Math.sin(t * 1.7) * 0.12;
      glowGate.material.opacity = 0.55 + Math.sin(t * 2.3 + 1.2) * 0.12;
    },
  };
}
