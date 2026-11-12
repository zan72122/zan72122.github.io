// At the top of the bow the light hangs in thin layers, red above, blue below.
// They gather most densely just within the child's reach (a faint sheet spreads
// further out); a hand moving through them is tinted by the layer it is in.
import * as THREE from '../../lib/three.module.js';
import { shared, GLSL_SPECTRUM, GLSL_NOISE, LAYER_MAIN } from '../core/env.js';

export const LAYER_COUNT = 6;

export class LightLayers {
  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'lightLayers';
    this.base = new THREE.Vector3();
    this.spacing = 0.085;
    this.hand = new THREE.Vector3(0, -100, 0);
    this.uniforms = {
      uTime: shared.uTime,
      uHand: { value: this.hand },
      uOn: { value: 0 },
    };
    const SIZE = 2.4;
    const geo = new THREE.PlaneGeometry(SIZE, SIZE, 1, 1).rotateX(-Math.PI / 2);
    this.layers = [];
    for (let i = 0; i < LAYER_COUNT; i++) {
      const t = 1 - i / (LAYER_COUNT - 1); // top red (1) .. bottom violet (0)
      const m = new THREE.ShaderMaterial({
        uniforms: { ...this.uniforms, uT: { value: t }, uIdx: { value: i } },
        vertexShader: /* glsl */ `
          varying vec2 vUv; varying vec3 vW;
          void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
        fragmentShader: /* glsl */ `
          uniform float uTime, uOn, uT, uIdx;
          uniform vec3 uHand;
          varying vec2 vUv; varying vec3 vW;
          ${GLSL_SPECTRUM}
          ${GLSL_NOISE}
          void main(){
            float r = length(vUv - 0.5) * ${SIZE.toFixed(2)};
            float n = fbm2(vW.xz * 2.6 + vec2(uTime * 0.12, uIdx * 3.1));
            float a = max(smoothstep(0.22, 0.08, r + (n - 0.5) * 0.06), 0.22 * smoothstep(1.15, 0.3, r + (n - 0.5) * 0.4));
            float streak = 0.55 + 0.45 * sin(vW.x * 11.0 + n * 6.0 + uTime * 0.8 + uIdx);
            vec3 c = spectral(uT) * 1.3;
            // where the hand pierces the layer the light gathers and ripples outward
            float d = length(vW.xz - uHand.xz);
            float near = exp(-pow((vW.y - uHand.y) / 0.06, 2.0));
            float ring = exp(-pow(d - 0.08 - fract(uTime * 0.8) * 0.4, 2.0) / 0.002) * (1.0 - fract(uTime * 0.8));
            float pool = exp(-d * d / 0.01);
            float glow = (pool * 2.5 + ring * 1.5) * near;
            float alpha = a * (0.08 + 0.06 * streak) * uOn;
            vec3 col = c * (a * streak * 0.7 + glow) * uOn;
            gl_FragColor = vec4(col, alpha);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.CustomBlending,
        blendSrc: THREE.OneFactor,
        blendDst: THREE.OneMinusSrcAlphaFactor,
      });
      const mesh = new THREE.Mesh(geo, m);
      mesh.renderOrder = 7;
      mesh.layers.set(LAYER_MAIN);
      this.layers.push(mesh);
      this.group.add(mesh);
    }
    // each layer seen edge-on reads as a thin line of coloured light
    const bandGeo = new THREE.PlaneGeometry(0.42, 0.035, 1, 1);
    this.bands = [];
    for (let i = 0; i < LAYER_COUNT; i++) {
      const t = 1 - i / (LAYER_COUNT - 1);
      const m = new THREE.ShaderMaterial({
        uniforms: { uTime: shared.uTime, uOn: this.uniforms.uOn, uT: { value: t }, uIdx: { value: i } },
        vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: /* glsl */ `
          uniform float uTime, uOn, uT, uIdx;
          varying vec2 vUv;
          ${GLSL_SPECTRUM}
          ${GLSL_NOISE}
          void main(){
            float v = abs(vUv.y - 0.5) * 2.0;
            float core = exp(-v * v * 9.0);
            float ends = smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.75, vUv.x);
            float n = 0.7 + 0.3 * vnoise2(vec2(vUv.x * 9.0 - uTime * 0.4, uIdx * 4.0));
            vec3 c = spectral(uT) * 1.4 + vec3(0.12);
            float a = core * ends * n * uOn;
            gl_FragColor = vec4(c * a * 1.2, a * 0.2);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,
        transparent: true,
        depthWrite: false,
        blending: THREE.CustomBlending,
        blendSrc: THREE.OneFactor,
        blendDst: THREE.OneMinusSrcAlphaFactor,
      });
      const b = new THREE.Mesh(bandGeo, m);
      b.renderOrder = 7;
      b.layers.set(LAYER_MAIN);
      this.bands.push(b);
      this.group.add(b);
    }
    this.group.visible = false;
    this.on = 0;
  }

  // turn the edge-on bands toward the camera (about the vertical axis only)
  face(camera) {
    for (const b of this.bands) {
      const dx = camera.position.x - b.position.x, dz = camera.position.z - b.position.z;
      b.rotation.set(0, Math.atan2(dx, dz), 0);
    }
  }

  place(base) {
    this.base.copy(base);
    this.layers.forEach((m, i) => {
      m.position.set(base.x, base.y + (LAYER_COUNT - 1 - i) * this.spacing, base.z);
      if (this.bands) this.bands[i].position.copy(m.position);
    });
  }

  // returns layer index & weight at a height (and, if given, a horizontal position)
  layerAt(y, x = this.base.x, z = this.base.z) {
    const f = (y - this.base.y) / this.spacing; // 0 = violet (bottom)
    const i = Math.round(f);
    if (i < 0 || i > LAYER_COUNT - 1 || Math.hypot(x - this.base.x, z - this.base.z) > 0.3) return { index: -1, t: 0, w: 0 };
    const w = Math.max(0, 1 - Math.abs(f - i) * 1.6);
    return { index: LAYER_COUNT - 1 - i, t: i / (LAYER_COUNT - 1), w };
  }

  update(dt, on) {
    this.on += (on - this.on) * Math.min(1, dt * 1.5);
    this.uniforms.uOn.value = this.on;
    this.group.visible = this.on > 0.01;
    shared.uLayerOn.value = this.on;
    shared.uLayerBase.value.copy(this.base);
    shared.uLayerSpacing.value = this.spacing;
  }
}
