// A loose flock of small white birds circling below the rainbow.
import * as THREE from '../../lib/three.module.js';
import { shared, LAYER_MAIN } from '../core/env.js';
import { rng } from '../core/math.js';

function birdGeometry() {
  const P = [], W = [];
  const tri = (a, b, c, wa, wb, wc) => {
    P.push(...a, ...b, ...c);
    W.push(wa, wb, wc);
  };
  // body (a thin diamond prism)
  const n = [0, 0, 0.16], t = [0, 0, -0.14], u = [0, 0.03, 0], d = [0, -0.03, 0.02], l = [0.03, 0, 0], r = [-0.03, 0, 0];
  tri(n, u, l, 0, 0, 0); tri(n, r, u, 0, 0, 0); tri(n, l, d, 0, 0, 0); tri(n, d, r, 0, 0, 0);
  tri(t, l, u, 0, 0, 0); tri(t, u, r, 0, 0, 0); tri(t, d, l, 0, 0, 0); tri(t, r, d, 0, 0, 0);
  // tail
  tri([0, 0, -0.12], [0.06, 0, -0.24], [-0.06, 0, -0.24], 0, 0, 0);
  // wings (two segments each)
  for (const s of [1, -1]) {
    tri([0.02 * s, 0.01, 0.06], [0.02 * s, 0.01, -0.06], [0.18 * s, 0.01, 0.0], 0, 0, 0.5 * s);
    tri([0.18 * s, 0.01, 0.0], [0.02 * s, 0.01, 0.06], [0.2 * s, 0.01, 0.07], 0.5 * s, 0, 0.55 * s);
    tri([0.18 * s, 0.01, 0.0], [0.2 * s, 0.01, 0.07], [0.36 * s, 0.01, -0.03], 0.5 * s, 0.55 * s, 1.0 * s);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('wing', new THREE.Float32BufferAttribute(W, 1));
  g.computeVertexNormals();
  return g;
}

export class Birds {
  constructor(n = 16) {
    this.n = n;
    const r = rng(17);
    this.birds = [];
    for (let i = 0; i < n; i++)
      this.birds.push({
        off: new THREE.Vector3((r() - 0.5) * 14, (r() - 0.5) * 5, (r() - 0.5) * 14),
        ph: r() * 10,
        f: 7 + r() * 3,
        flutter: 0,
        pos: new THREE.Vector3(),
        vel: new THREE.Vector3(),
        heading: 0,
      });
    this.center = new THREE.Vector3(-70, 58, 95);
    this.radius = 42;
    this.speed = 9;
    this.t = r() * 100;
    const g = birdGeometry();
    const phase = new Float32Array(n);
    for (let i = 0; i < n; i++) phase[i] = this.birds[i].ph;
    g.setAttribute('aPhase', new THREE.InstancedBufferAttribute(phase, 1));
    this.flapAttr = new THREE.InstancedBufferAttribute(new Float32Array(n).fill(1), 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('aFlap', this.flapAttr);
    const mat = new THREE.MeshLambertMaterial({ color: '#f4f2ee', side: THREE.DoubleSide });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = shared.uTime;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float wing;\nattribute float aPhase;\nattribute float aFlap;\nuniform float uTime;\nvarying float vWing;')
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          float fl = sin(uTime * (7.0 + aFlap * 6.0) + aPhase) * (0.35 + 0.65 * aFlap);
          float ang = fl * 0.9 * abs(wing);
          float sgn = sign(wing);
          float c = cos(ang), s = sin(ang);
          transformed.xy = vec2(transformed.x * c, abs(transformed.x) * s + transformed.y);
          vWing = abs(wing);`
        );
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying float vWing;')
        .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= mix(1.0, 0.45, smoothstep(0.75, 1.0, vWing));');
    };
    this.mesh = new THREE.InstancedMesh(g, mat, n);
    this.mesh.frustumCulled = false;
    this.mesh.name = 'birds';
    this.mesh.layers.set(LAYER_MAIN);
    this.mesh.scale.setScalar(1);
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this.update(0);
  }

  scare(i) {
    this.birds[i].flutter = 1.5;
  }

  update(dt) {
    this.t += dt;
    const m = this._m;
    for (let i = 0; i < this.n; i++) {
      const b = this.birds[i];
      const a = (this.t * this.speed) / this.radius + i * 0.05;
      const wob = Math.sin(this.t * 0.5 + b.ph) * 2.5;
      const prev = b.pos.clone();
      b.pos.set(
        this.center.x + Math.cos(a) * (this.radius + b.off.x + wob),
        this.center.y + b.off.y + Math.sin(this.t * 0.7 + b.ph) * 1.5 + b.flutter * 3,
        this.center.z + Math.sin(a) * (this.radius + b.off.z)
      );
      if (dt > 0) b.vel.subVectors(b.pos, prev).divideScalar(dt);
      b.flutter = Math.max(0, b.flutter - dt * 0.6);
      const dir = b.vel.lengthSq() > 1e-4 ? b.vel.clone().normalize() : new THREE.Vector3(0, 0, 1);
      this._q.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
      const s = 1.4;
      m.compose(b.pos, this._q, new THREE.Vector3(s, s, s));
      this.mesh.setMatrixAt(i, m);
      this.flapAttr.array[i] = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(this.t * 0.4 + b.ph)) + b.flutter;
    }
    this.flapAttr.needsUpdate = true;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}
