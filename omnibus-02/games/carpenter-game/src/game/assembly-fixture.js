import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const fixtureMaterial = () => new THREE.MeshPhysicalMaterial({
  color: '#8fd8c3',
  roughness: 0.42,
  metalness: 0.02,
  transparent: true,
  opacity: 0.72,
  transmission: 0.08,
});

function block(size, material) {
  const r = Math.min(0.006, Math.min(...size) * 0.25);
  const mesh = new THREE.Mesh(new RoundedBoxGeometry(...size, 2, r), material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/**
 * 釘打ちが終わるまで部品を支える組立治具。
 * 浮く水平部品には支柱を、立つ部品には根元の押さえを置く。
 */
export function makeAssemblyFixture(project) {
  const group = new THREE.Group();
  group.userData.assemblyFixture = true;
  const mat = fixtureMaterial();
  const radius = project.view.radius;
  const base = block([radius * 1.65, 0.014, radius * 1.25], mat);
  base.position.y = 0.007;
  group.add(base);

  for (const part of project.parts) {
    const [w, h, d] = part.size;
    const [x, y, z] = part.pos;
    const bottom = y - h / 2;
    if (bottom > 0.035) {
      const postHeight = bottom - 0.014;
      const offsets = w > 0.12 ? [-Math.min(w * 0.28, 0.06), Math.min(w * 0.28, 0.06)] : [0];
      for (const ox of offsets) {
        const post = block([0.018, postHeight, 0.018], mat);
        post.position.set(x + ox, 0.014 + postHeight / 2, z - Math.min(0.035, d * 0.3));
        group.add(post);
      }
    } else if (h > w || h > d) {
      for (const ox of [-0.018, 0.018]) {
        const pad = block([0.014, 0.04, 0.028], mat);
        pad.position.set(x + ox, 0.027, z);
        group.add(pad);
      }
    }
  }
  return group;
}
