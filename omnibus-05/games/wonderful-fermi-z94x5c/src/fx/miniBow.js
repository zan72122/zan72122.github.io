// The little rainbow born in the child's palm when the horn touches it: a droplet
// left on the palm, lit by the low sun, spreads its light into a tiny arch.
import * as THREE from '../../lib/three.module.js';
import { shared, GLSL_SPECTRUM, GLSL_NOISE, LAYER_MAIN } from '../core/env.js';

export class MiniBow {
  constructor() {
    const segs = 48, rows = 6;
    const pos = [], uv = [], idx = [];
    for (let i = 0; i <= segs; i++)
      for (let j = 0; j <= rows; j++) {
        const a = (i / segs) * Math.PI;
        const r = 1 - (j / rows) * 0.28;
        pos.push(Math.cos(a) * r, Math.sin(a) * r, 0);
        uv.push(i / segs, j / rows);
      }
    for (let i = 0; i < segs; i++)
      for (let j = 0; j < rows; j++) {
        const a = i * (rows + 1) + j, b = a + rows + 1;
        idx.push(a, b, a + 1, b, b + 1, a + 1);
      }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    this.uniforms = { uBirth: { value: 0 }, uFade: { value: 1 }, uTime: shared.uTime };
    this.mesh = new THREE.Mesh(
      g,
      new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: /* glsl */ `
          uniform float uBirth, uFade, uTime;
          varying vec2 vUv;
          ${GLSL_SPECTRUM}
          ${GLSL_NOISE}
          void main(){
            // grows outward from the palm (both feet of the arch) toward the top
            float along = abs(vUv.x - 0.5) * 2.0; // 1 at the feet, 0 at the top
            float grow = smoothstep(1.0 - uBirth * 1.15, 1.0 - uBirth * 1.15 + 0.12, along);
            float edge = smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.8, vUv.y);
            vec3 c = spectral(1.0 - vUv.y) * 1.6;
            float tw = 0.85 + 0.15 * sin(uTime * 6.0 + vUv.x * 30.0);
            float n = vnoise2(vec2(vUv.x * 40.0, uTime * 2.0));
            float a = grow * edge * uFade * (0.75 + 0.25 * n);
            gl_FragColor = vec4(c * a * tw, a * 0.25);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.CustomBlending,
        blendSrc: THREE.OneFactor,
        blendDst: THREE.OneMinusSrcAlphaFactor,
      })
    );
    this.mesh.renderOrder = 8;
    this.mesh.visible = false;
    this.mesh.frustumCulled = false;
    this.mesh.layers.set(LAYER_MAIN);
    this.t = -1;
  }

  start(pos, facing, scale = 0.09) {
    this.mesh.position.copy(pos);
    this.mesh.scale.setScalar(scale);
    this.mesh.lookAt(pos.clone().add(facing));
    this.t = 0;
    this.mesh.visible = true;
  }

  update(dt) {
    if (this.t < 0) return false;
    this.t += dt;
    this.uniforms.uBirth.value = Math.min(1, this.t / 1.2);
    this.uniforms.uFade.value = this.t < 4.5 ? 1 : Math.max(0, 1 - (this.t - 4.5) / 1.8);
    if (this.t > 6.4) {
      this.mesh.visible = false;
      this.t = -1;
      return true;
    }
    return false;
  }
}
