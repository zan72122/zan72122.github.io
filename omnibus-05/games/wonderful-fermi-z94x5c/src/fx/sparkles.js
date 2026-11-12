// Small specks of coloured light: the rainbow's droplets condensing at its growing
// front, dissolving at its tail, bursting at hoof contacts.
import * as THREE from '../../lib/three.module.js';
import { shared, GLSL_SPECTRUM, LAYER_MAIN } from '../core/env.js';

export class Sparkles {
  constructor(max = 3000) {
    this.max = max;
    this.n = 0;
    this.p = new Float32Array(max * 3);
    this.v = new Float32Array(max * 3);
    this.c = new Float32Array(max * 2); // hue t, brightness
    this.life = new Float32Array(max);
    this.life0 = new Float32Array(max);
    this.size = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.attr = new Float32Array(max * 4); // hue, alpha, size, unused
    const g = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(this.p, 3).setUsage(THREE.DynamicDrawUsage);
    this.aAttr = new THREE.BufferAttribute(this.attr, 4).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.posAttr);
    g.setAttribute('aInfo', this.aAttr);
    g.setDrawRange(0, 0);
    this.material = new THREE.ShaderMaterial({
      uniforms: { uPx: { value: 1 }, uScale: { value: 800 }, uTime: shared.uTime },
      vertexShader: /* glsl */ `
        attribute vec4 aInfo;
        uniform float uPx, uScale, uTime;
        varying vec3 vCol;
        varying float vA;
        ${GLSL_SPECTRUM}
        void main(){
          vec4 mv = viewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          float hue = aInfo.x;
          vec3 c = hue < 0.0 ? vec3(1.0, 0.97, 0.9) : mix(spectral(hue) * 1.6, vec3(1.0), 0.18);
          vCol = c;
          vA = aInfo.y * (0.75 + 0.25 * sin(uTime * 13.0 + position.x * 31.0 + position.z * 17.0));
          float px = aInfo.z * uScale / max(-mv.z, 0.05);
          gl_PointSize = clamp(px, 1.5 * uPx, 22.0 * uPx);
        }`,
      fragmentShader: /* glsl */ `
        varying vec3 vCol;
        varying float vA;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float r2 = dot(c, c);
          float a = exp(-r2 * 18.0) + 0.5 * exp(-r2 * 80.0);
          a *= vA;
          if (a < 0.01) discard;
          gl_FragColor = vec4(vCol * a, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.mesh = new THREE.Points(g, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 6;
    this.mesh.name = 'sparkles';
    this.mesh.layers.set(LAYER_MAIN);
    this.attract = null; // {p: Vector3, k}
  }

  spawn(x, y, z, vx, vy, vz, hue, life = 1.2, size = 0.03, bright = 1, grav = 0) {
    if (this.n >= this.max) return;
    const i = this.n++;
    this.p[i * 3] = x;
    this.p[i * 3 + 1] = y;
    this.p[i * 3 + 2] = z;
    this.v[i * 3] = vx;
    this.v[i * 3 + 1] = vy;
    this.v[i * 3 + 2] = vz;
    this.c[i * 2] = hue;
    this.c[i * 2 + 1] = bright;
    this.life[i] = life;
    this.life0[i] = life;
    this.size[i] = size;
    this.grav[i] = grav;
  }

  burst(x, y, z, n, speed, hueFn, life = 0.9, size = 0.025, bright = 1.2) {
    for (let k = 0; k < n; k++) {
      const a = Math.random() * Math.PI * 2, b = Math.random() * 0.9;
      const sp = speed * (0.4 + Math.random() * 0.8);
      this.spawn(x, y, z, Math.cos(a) * Math.cos(b) * sp, Math.sin(b) * sp * 0.8 + 0.2, Math.sin(a) * Math.cos(b) * sp, hueFn ? hueFn(k) : Math.random(), life * (0.6 + Math.random() * 0.8), size, bright, 0.6);
    }
  }

  update(dt) {
    for (let i = 0; i < this.n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        this._kill(i);
        i--;
        continue;
      }
      const drag = Math.exp(-1.6 * dt);
      this.v[i * 3] *= drag;
      this.v[i * 3 + 1] = this.v[i * 3 + 1] * drag - this.grav[i] * dt;
      this.v[i * 3 + 2] *= drag;
      this.p[i * 3] += this.v[i * 3] * dt;
      this.p[i * 3 + 1] += this.v[i * 3 + 1] * dt;
      this.p[i * 3 + 2] += this.v[i * 3 + 2] * dt;
      const f = this.life[i] / this.life0[i];
      this.attr[i * 4] = this.c[i * 2];
      this.attr[i * 4 + 1] = this.c[i * 2 + 1] * Math.min(1, f * 3) * Math.min(1, (1 - f) * 8 + 0.2);
      this.attr[i * 4 + 2] = this.size[i];
    }
    this.posAttr.needsUpdate = true;
    this.aAttr.needsUpdate = true;
    this.mesh.geometry.setDrawRange(0, this.n);
  }

  _kill(i) {
    const j = --this.n;
    if (i === j) return;
    for (let k = 0; k < 3; k++) {
      this.p[i * 3 + k] = this.p[j * 3 + k];
      this.v[i * 3 + k] = this.v[j * 3 + k];
    }
    this.c[i * 2] = this.c[j * 2];
    this.c[i * 2 + 1] = this.c[j * 2 + 1];
    this.life[i] = this.life[j];
    this.life0[i] = this.life0[j];
    this.size[i] = this.size[j];
    this.grav[i] = this.grav[j];
  }

  setViewport(heightPx, fovDeg, dpr) {
    this.material.uniforms.uScale.value = heightPx / (2 * Math.tan((fovDeg * Math.PI) / 360));
    this.material.uniforms.uPx.value = dpr;
  }
}
