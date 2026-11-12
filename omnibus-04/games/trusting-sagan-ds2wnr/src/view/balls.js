// 小さな空気の玉(9個、インスタンス描画)
import * as THREE from 'three';
import { BALL_R } from '../core/shape.js';
import { createBallMaterial } from './materials.js';

export function createBalls(scene, count) {
  const geo = new THREE.SphereGeometry(BALL_R, 14, 10);
  const mat = createBallMaterial();
  const mesh = new THREE.InstancedMesh(geo, mat, count);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.frustumCulled = false;
  mesh.renderOrder = 4; // 滑り台の奥行き前処理より先に描き、透けて見えるようにする
  mesh.name = 'balls';
  scene.add(mesh);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const positions = [];
  for (let i = 0; i < count; i++) positions.push(new THREE.Vector3());
  // pos(i) は view 側で求めた位置
  function update(balls, posOf, time) {
    for (let i = 0; i < balls.length; i++) {
      const b = balls[i];
      posOf(b, p);
      positions[i].copy(p);
      const wob = 1 + 0.04 * Math.sin(time * 5 + i * 1.7);
      const sc = Math.max(0.0001, b.scale);
      s.set(sc * wob, (sc / wob), sc * wob);
      m.compose(p, q.identity(), s);
      mesh.setMatrixAt(i, m);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }
  return { mesh, update, positions };
}
