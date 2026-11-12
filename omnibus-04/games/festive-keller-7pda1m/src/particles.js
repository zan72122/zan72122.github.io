import * as THREE from 'three';
import { GLSL_NOISE } from './util.js';

// GPU-integrated particles: water drips, splashes, coloured mist, leaves.
// The CPU only writes a particle once at birth.
export class Particles {
  constructor(scene, capacity = 1600) {
    this.cap = capacity;
    this.i = 0;
    this.budget = 1;
    this.time = 0;
    const geo = new THREE.BufferGeometry();
    this.p0 = new Float32Array(capacity * 3);
    this.v0 = new Float32Array(capacity * 3);
    this.tt = new Float32Array(capacity * 4);
    this.cc = new Float32Array(capacity * 3);
    for (let k = 0; k < capacity; k++) this.tt[k * 4] = -1000;
    const mk = (arr, n) => {
      const a = new THREE.BufferAttribute(arr, n);
      a.setUsage(THREE.DynamicDrawUsage);
      return a;
    };
    geo.setAttribute('position', mk(this.p0, 3));
    geo.setAttribute('aV0', mk(this.v0, 3));
    geo.setAttribute('aT', mk(this.tt, 4));
    geo.setAttribute('aC', mk(this.cc, 3));
    this.geo = geo;
    this.uniforms = {
      uTime: { value: 0 },
      uScale: { value: 800 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, this.uniforms]),
      vertexShader: /* glsl */ `
        attribute vec3 aV0;
        attribute vec4 aT;   // birth, life, size, kind
        attribute vec3 aC;
        uniform float uTime;
        uniform float uScale;
        varying vec3 vC;
        varying float vA;
        varying float vKind;
        varying float vRot;
        varying vec3 vW;
        #include <fog_pars_vertex>
        void main() {
          float age = uTime - aT.x;
          float life = aT.y;
          vKind = aT.w;
          vC = aC;
          vRot = aT.x * 13.0 + age * 3.0;
          if (age < 0.0 || age > life) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            gl_PointSize = 0.0;
            vA = 0.0;
            return;
          }
          float t = age / life;
          vec3 p;
          float size = aT.z;
          if (vKind < 0.5) {
            // falling water drop
            p = position + aV0 * age + vec3(0.0, -4.9, 0.0) * age * age;
            vA = (1.0 - t) * step(-0.02, p.y);
          } else if (vKind < 1.5) {
            // mist: decelerating drift, slowly rising and growing
            float drag = (1.0 - exp(-age * 1.3)) / 1.3;
            p = position + aV0 * drag + vec3(0.0, 0.06 * age, 0.0);
            size *= 1.0 + age * 0.7;
            vA = smoothstep(0.0, 0.15, t) * (1.0 - smoothstep(0.45, 1.0, t));
          } else if (vKind < 2.5) {
            // leaf fluttering down
            float ph = aT.x * 7.0;
            p = position + aV0 * (1.0 - exp(-age)) + vec3(sin(age * 2.6 + ph) * 0.35, -0.85 * age, cos(age * 2.1 + ph) * 0.3);
            vA = (1.0 - smoothstep(0.8, 1.0, t)) * step(0.0, p.y);
          } else {
            // splash droplet: short hop
            p = position + aV0 * age + vec3(0.0, -4.9, 0.0) * age * age;
            vA = (1.0 - t);
          }
          vW = p;
          vec4 mvPosition = viewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = clamp(size * uScale / -mvPosition.z, 1.0, 180.0);
          #include <fog_vertex>
        }`,
      fragmentShader: /* glsl */ `
        varying vec3 vC;
        varying float vA;
        varying float vKind;
        varying float vRot;
        varying vec3 vW;
        #include <fog_pars_fragment>
        void main() {
          if (vA <= 0.0) discard;
          vec2 q = gl_PointCoord * 2.0 - 1.0;
          float r2 = dot(q, q);
          vec4 o;
          if (vKind < 0.5 || vKind > 2.5) {
            float core = exp(-r2 * 5.0);
            float glint = exp(-r2 * 30.0);
            o = vec4(vC * core * 0.45 + vec3(1.0) * glint * 0.35, core * 0.08) * vA;
          } else if (vKind < 1.5) {
            float a = exp(-r2 * 2.6) * 0.16 * vA;
            o = vec4(vC * a * 1.4, a * 0.6);
          } else {
            float c = cos(vRot), s = sin(vRot);
            vec2 l = mat2(c, -s, s, c) * q;
            float leaf = 1.0 - smoothstep(0.7, 0.9, length(l * vec2(1.0, 2.2)));
            o = vec4(vC * leaf, leaf) * vA;
          }
          if (o.a < 0.002 && dot(o.rgb, vec3(1.0)) < 0.004) discard;
          gl_FragColor = o;
          #ifdef USE_FOG
            gl_FragColor *= 1.0 - atmoFogAmount(vW);
          #endif
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      transparent: true,
      premultipliedAlpha: true,
      depthWrite: false,
      fog: true,
    });
    mat.uniforms.uTime = this.uniforms.uTime;
    mat.uniforms.uScale = this.uniforms.uScale;
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 6;
    scene.add(this.points);
    this.dirtyFrom = capacity;
    this.dirtyTo = 0;

    this.ripples = new Ripples(scene, this.uniforms.uTime);
  }

  spawn(x, y, z, vx, vy, vz, life, size, kind, r, g, b) {
    const k = this.i;
    this.i = (this.i + 1) % this.cap;
    this.p0[k * 3] = x; this.p0[k * 3 + 1] = y; this.p0[k * 3 + 2] = z;
    this.v0[k * 3] = vx; this.v0[k * 3 + 1] = vy; this.v0[k * 3 + 2] = vz;
    this.tt[k * 4] = this.time; this.tt[k * 4 + 1] = life; this.tt[k * 4 + 2] = size; this.tt[k * 4 + 3] = kind;
    this.cc[k * 3] = r; this.cc[k * 3 + 1] = g; this.cc[k * 3 + 2] = b;
    if (k < this.dirtyFrom) this.dirtyFrom = k;
    if (k + 1 > this.dirtyTo) this.dirtyTo = k + 1;
  }

  drip(x, y, z, col) {
    if (Math.random() > this.budget) return;
    this.spawn(x, y, z, (Math.random() - 0.5) * 0.2, -0.2, (Math.random() - 0.5) * 0.2, 1.4 + Math.random(), 0.025, 0, col.r * 0.8 + 0.2, col.g * 0.8 + 0.2, col.b * 0.8 + 0.2);
  }

  mist(x, y, z, col, strength = 1) {
    if (Math.random() > this.budget) return;
    const a = Math.random() * Math.PI * 2;
    const sp = 0.2 + Math.random() * 0.4;
    this.spawn(x, y, z, Math.cos(a) * sp, 0.1 + Math.random() * 0.2, Math.sin(a) * sp, 2.2 + Math.random() * 1.8, 0.5 * strength + Math.random() * 0.4, 1, col.r, col.g, col.b);
  }

  splash(x, y, z, n, wet = 1, col = null) {
    const count = Math.round(n * this.budget);
    for (let k = 0; k < count; k++) {
      const a = Math.random() * Math.PI * 2;
      const sp = (0.3 + Math.random() * 0.9) * wet;
      const r = col ? col.r * 0.6 + 0.4 : 0.85, g = col ? col.g * 0.6 + 0.4 : 0.9, b = col ? col.b * 0.6 + 0.4 : 0.95;
      this.spawn(x, y + 0.02, z, Math.cos(a) * sp, 0.9 + Math.random() * 1.2 * wet, Math.sin(a) * sp, 0.35 + Math.random() * 0.25, 0.012 + Math.random() * 0.01, 3, r, g, b);
    }
  }

  leaves(x, y, z, n) {
    const count = Math.round(n * this.budget);
    for (let k = 0; k < count; k++) {
      const a = Math.random() * Math.PI * 2;
      const g = 0.25 + Math.random() * 0.25;
      this.spawn(x + (Math.random() - 0.5) * 1.5, y + (Math.random() - 0.5) * 1.5, z + (Math.random() - 0.5) * 1.5,
        Math.cos(a) * 1.2, 0.5, Math.sin(a) * 1.2, 3 + Math.random() * 3, 0.07, 2, 0.14 + Math.random() * 0.2, g, 0.04);
    }
  }

  update(dt, time, renderer, camera) {
    this.time = time;
    this.uniforms.uTime.value = time;
    const h = renderer.getDrawingBufferSize(_v2).y;
    this.uniforms.uScale.value = h / (2 * Math.tan((camera.fov * Math.PI) / 360));
    if (this.dirtyTo > this.dirtyFrom) {
      const from = this.dirtyFrom, cnt = this.dirtyTo - this.dirtyFrom;
      for (const [name, n] of [['position', 3], ['aV0', 3], ['aT', 4], ['aC', 3]]) {
        const a = this.geo.attributes[name];
        a.clearUpdateRanges();
        a.addUpdateRange(from * n, cnt * n);
        a.needsUpdate = true;
      }
      this.dirtyFrom = this.cap;
      this.dirtyTo = 0;
    }
    this.ripples.update(time);
  }
}
const _v2 = new THREE.Vector2();

// Expanding rings on wet surfaces (footsteps, touches, landings).
class Ripples {
  constructor(scene, uTime) {
    this.max = 20;
    this.i = 0;
    const geo = new THREE.PlaneGeometry(1, 1);
    geo.rotateX(-Math.PI / 2);
    this.data = new Float32Array(this.max * 4);
    for (let k = 0; k < this.max; k++) this.data[k * 4] = -100;
    this.attr = new THREE.InstancedBufferAttribute(this.data, 4);
    this.attr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('aR', this.attr);
    const mat = new THREE.ShaderMaterial({
      uniforms: { uTime: uTime },
      vertexShader: /* glsl */ `
        attribute vec4 aR; // birth, size, strength, rainbow
        uniform float uTime;
        varying vec2 vL;
        varying vec4 vR;
        varying float vAge;
        void main() {
          vL = position.xz * 2.0;
          vR = aR;
          vAge = uTime - aR.x;
          vec3 p = position * aR.y;
          gl_Position = projectionMatrix * viewMatrix * instanceMatrix * vec4(p, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        varying vec2 vL;
        varying vec4 vR;
        varying float vAge;
        void main() {
          float life = 1.1;
          if (vAge < 0.0 || vAge > life) discard;
          float t = vAge / life;
          float r = length(vL);
          float rad = 0.15 + 0.85 * (1.0 - pow(1.0 - t, 2.2));
          float ring = exp(-pow((r - rad) / (0.035 + 0.05 * t), 2.0));
          float ring2 = exp(-pow((r - rad * 0.62) / 0.03, 2.0)) * 0.5;
          float a = (ring + ring2) * (1.0 - t) * vR.z * step(r, 1.0);
          vec3 col = mix(vec3(0.55, 0.62, 0.7), 0.5 + 0.5 * cos(6.2831 * (r * 1.3 + vec3(0.0, 0.33, 0.67))), vR.w * 0.6);
          gl_FragColor = vec4(col * a * 0.16, 0.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      transparent: true,
      premultipliedAlpha: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -5,
      polygonOffsetUnits: -5,
    });
    this.mesh = new THREE.InstancedMesh(geo, mat, this.max);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 5;
    const m = new THREE.Matrix4();
    for (let k = 0; k < this.max; k++) this.mesh.setMatrixAt(k, m.makeTranslation(0, -100, 0));
    scene.add(this.mesh);
    this.m = new THREE.Matrix4();
  }
  add(x, y, z, size, strength, rainbow, time) {
    const k = this.i++ % this.max;
    this.m.makeTranslation(x, y + 0.01, z);
    this.mesh.setMatrixAt(k, this.m);
    this.mesh.instanceMatrix.needsUpdate = true;
    this.data[k * 4] = time; this.data[k * 4 + 1] = size; this.data[k * 4 + 2] = strength; this.data[k * 4 + 3] = rainbow;
    this.attr.needsUpdate = true;
  }
  update() {}
}
