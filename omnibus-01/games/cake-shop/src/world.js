/* 永続キッチン: 壁・カウンター・小物・ライト・環境光 */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import * as M from './materials.js';

export const COUNTER_Y = 0.92;
export const ST = {                       // ステーションのX座標
  mix: -1.25, oven: 0, deco: 1.25
};
export const CAKE = {                      // デコ対象ケーキの寸法
  x: ST.deco, r: 0.135, h: 0.095,
  standTop: COUNTER_Y + 0.105              // ケーキ底面の高さ
};
CAKE.topY = CAKE.standTop + CAKE.h;

export function buildWorld(scene, renderer) {
  // ---- 環境光(PBRの要) ----
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;
  scene.background = new THREE.Color('#ffd9e7');
  scene.fog = new THREE.Fog('#ffd9e7', 5.5, 10);

  // ---- ライト ----
  const hemi = new THREE.HemisphereLight('#fff4f8', '#ffb8cf', 0.5);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#fff2dd', 2.6);
  sun.position.set(1.6, 3.2, 2.2);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -2.2;
  sun.shadow.camera.right = 2.2;
  sun.shadow.camera.top = 2.2;
  sun.shadow.camera.bottom = -1.2;
  sun.shadow.camera.near = 0.5;
  sun.shadow.camera.far = 8;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.012;
  scene.add(sun);

  const g = new THREE.Group();
  scene.add(g);

  // ---- 床 ----
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(12, 8),
    M.physical({ map: M.floorTexture(), roughness: 0.8 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, 0, 1.5);
  floor.receiveShadow = true;
  g.add(floor);

  // ---- 背面のタイル壁 ----
  const wall = new THREE.Mesh(
    new THREE.PlaneGeometry(12, 4),
    M.physical({ map: M.tileTexture(), roughness: 0.35, clearcoat: 0.4 })
  );
  wall.position.set(0, 2, -0.62);
  wall.receiveShadow = true;
  g.add(wall);

  // ---- カウンター ----
  const top = new THREE.Mesh(
    new RoundedBoxGeometry(5.2, 0.07, 1.05, 3, 0.025),
    M.physical({ map: M.marbleTexture(), roughness: 0.25, clearcoat: 0.5, clearcoatRoughness: 0.25 })
  );
  top.position.set(0, COUNTER_Y - 0.035, -0.08);
  top.castShadow = true;
  top.receiveShadow = true;
  g.add(top);

  const cabinetMat = M.physical({ color: '#ff9ec0', roughness: 0.45, clearcoat: 0.35 });
  const cabinet = new THREE.Mesh(new THREE.BoxGeometry(5.1, 0.82, 0.95), cabinetMat);
  cabinet.position.set(0, 0.43, -0.1);
  cabinet.receiveShadow = true;
  g.add(cabinet);
  // 引き出しの取っ手と溝
  const knobMat = M.physical({ color: '#ffffff', roughness: 0.2, metalness: 0.1, clearcoat: 0.8 });
  for (let i = -2; i <= 2; i++) {
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.025, 12, 10), knobMat);
    knob.position.set(i * 0.95, 0.62, 0.38);
    g.add(knob);
    const line = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 0.012, 0.012),
      M.physical({ color: '#e96a9c', roughness: 0.6 })
    );
    line.position.set(i * 0.95, 0.44, 0.376);
    g.add(line);
  }

  // ---- 窓(壁の左) ----
  const winFrame = new THREE.Mesh(
    new RoundedBoxGeometry(1.0, 0.95, 0.07, 2, 0.03),
    M.physical({ color: '#ffffff', roughness: 0.4 })
  );
  winFrame.position.set(-1.7, 1.95, -0.6);
  g.add(winFrame);
  const sky = new THREE.Mesh(
    new THREE.PlaneGeometry(0.86, 0.8),
    new THREE.MeshBasicMaterial({ color: '#bfe8ff' })
  );
  sky.position.set(-1.7, 1.95, -0.555);
  g.add(sky);
  const cloudTex = M.softCircleTexture('rgba(255,255,255,0.95)');
  for (const [cx, cy, s] of [[-1.88, 2.08, 0.14], [-1.58, 1.82, 0.12], [-1.52, 2.12, 0.09]]) {
    const cl = new THREE.Sprite(new THREE.SpriteMaterial({ map: cloudTex, depthWrite: false }));
    cl.position.set(cx, cy, -0.55);
    cl.scale.setScalar(s);
    g.add(cl);
  }

  // ---- 棚と小物(壁の右) ----
  const shelf = new THREE.Mesh(
    new RoundedBoxGeometry(1.1, 0.05, 0.22, 2, 0.02),
    M.physical({ color: '#ffffff', roughness: 0.35 })
  );
  shelf.position.set(1.55, 1.85, -0.5);
  shelf.castShadow = true;
  g.add(shelf);
  const jarColors = ['#ffd2e2', '#c3e9f9', '#ffe9b8'];
  jarColors.forEach((c, i) => {
    const jar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.055, 0.06, 0.16, 18),
      M.physical({ color: c, roughness: 0.1, transparent: true, opacity: 0.85, clearcoat: 1 })
    );
    jar.position.set(1.25 + i * 0.3, 1.96, -0.5);
    g.add(jar);
    const lid = new THREE.Mesh(
      new THREE.CylinderGeometry(0.062, 0.062, 0.025, 18),
      M.physical({ color: '#ff6fa5', roughness: 0.3 })
    );
    lid.position.set(1.25 + i * 0.3, 2.05, -0.5);
    g.add(lid);
  });

  // ---- 壁のハート飾り ----
  const heartShape = new THREE.Shape();
  heartShape.moveTo(0, -0.5).bezierCurveTo(-1.1, 0.35, -0.6, 1.2, 0, 0.55)
            .bezierCurveTo(0.6, 1.2, 1.1, 0.35, 0, -0.5);
  const heartGeo = new THREE.ExtrudeGeometry(heartShape, {
    depth: 0.25, bevelEnabled: true, bevelSize: 0.08, bevelThickness: 0.06, bevelSegments: 3
  });
  heartGeo.scale(0.16, 0.16, 0.16);
  const heart = new THREE.Mesh(heartGeo, M.candy('#ff6fa5'));
  heart.position.set(0, 2.15, -0.58);
  g.add(heart);

  // ---- ケーキスタンド(デコ用回転台) ----
  const standPts = [];
  standPts.push(new THREE.Vector2(0.0, 0));
  standPts.push(new THREE.Vector2(0.085, 0));
  standPts.push(new THREE.Vector2(0.09, 0.012));
  standPts.push(new THREE.Vector2(0.032, 0.03));
  standPts.push(new THREE.Vector2(0.026, 0.085));
  standPts.push(new THREE.Vector2(0.17, 0.092));
  standPts.push(new THREE.Vector2(0.182, 0.1));
  standPts.push(new THREE.Vector2(0.178, 0.105));
  standPts.push(new THREE.Vector2(0.0, 0.105));
  const stand = new THREE.Mesh(
    new THREE.LatheGeometry(standPts, 48),
    M.physical({ color: '#ffffff', roughness: 0.12, clearcoat: 0.9, clearcoatRoughness: 0.1 })
  );
  stand.position.set(ST.deco, COUNTER_Y, 0);
  stand.castShadow = true;
  stand.receiveShadow = true;
  g.add(stand);

  return { sun, hemi, stand };
}
