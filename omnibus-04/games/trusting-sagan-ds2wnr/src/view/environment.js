// 固定の環境光(屋内+窓の外の空)と主光源。画面全体の反射は使わず、PMREM の環境マップだけで艶を出す。
import * as THREE from 'three';

function buildEnvScene() {
  const scene = new THREE.Scene();
  const box = new THREE.BoxGeometry(1, 1, 1);
  const mat = (r, g, b) => new THREE.MeshBasicMaterial({ color: new THREE.Color(r, g, b), side: THREE.BackSide });
  const room = new THREE.Mesh(box, mat(0.42, 0.41, 0.39));
  room.scale.set(18, 8, 12);
  room.position.set(0, 4, 0);
  scene.add(room);
  const add = (w, h, d, x, y, z, c) => {
    const m = new THREE.Mesh(box, new THREE.MeshBasicMaterial({ color: c }));
    m.scale.set(w, h, d);
    m.position.set(x, y, z);
    scene.add(m);
  };
  // 奥の大窓(空)
  add(16, 3.2, 0.1, 0, 5.4, -5.9, new THREE.Color(1.6, 2.0, 2.6));
  add(16, 2.0, 0.1, 0, 2.6, -5.9, new THREE.Color(2.1, 2.2, 2.2));
  // 左の窓
  add(0.1, 3.5, 8, -8.9, 4.5, 0, new THREE.Color(1.3, 1.6, 2.0));
  // 天窓の帯
  for (let i = -2; i <= 2; i++) add(1.2, 0.1, 9, i * 3.4, 7.95, -0.5, new THREE.Color(2.4, 2.35, 2.2));
  // 床(明るめのテラゾー)
  add(18, 0.1, 12, 0, 0.05, 0, new THREE.Color(0.85, 0.82, 0.76));
  // 手前(通路側): 柔らかな照明と明るい壁
  add(18, 8, 0.1, 0, 4, 5.95, new THREE.Color(0.55, 0.55, 0.56));
  for (let i = -2; i <= 2; i++) add(2.2, 0.8, 0.1, i * 3.6, 6.2, 5.9, new THREE.Color(2.2, 2.1, 1.9));
  add(16, 1.2, 0.1, 0, 2.2, 5.9, new THREE.Color(1.2, 1.25, 1.3));
  return scene;
}

export function createEnvironment(renderer) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = buildEnvScene();
  const rt = pmrem.fromScene(envScene, 0.035);
  pmrem.dispose();
  envScene.traverse((o) => { if (o.material) o.material.dispose(); if (o.geometry) o.geometry.dispose(); });
  return rt;
}

export function createLights(scene) {
  const sun = new THREE.DirectionalLight(0xfff1dc, 2.4);
  // 奥(左寄り)の大窓から差し込む朝の光。窓枠の影が床に落ちる
  sun.position.set(-8.5, 12.5, -16);
  sun.target.position.set(0.5, 0, 1.5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  const cam = sun.shadow.camera;
  cam.left = -13; cam.right = 13; cam.top = 12; cam.bottom = -12;
  cam.near = 4; cam.far = 48;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.03;
  sun.shadow.radius = 3;
  scene.add(sun, sun.target);
  const hemi = new THREE.HemisphereLight(0xdfe9f2, 0xd8cfc0, 0.75);
  scene.add(hemi);
  return { sun, hemi };
}
