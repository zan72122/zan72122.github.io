// Cumulus clouds as clusters of lit, soft puffs (sphere impostors). White and
// cream on the sunlit side, cool grey-blue in their own shade, silver lining when
// back-lit. Puffs fade out when the camera passes through them.
import * as THREE from '../../lib/three.module.js';
import { shared, GLSL_NOISE, LAYER_MAIN, LAYER_REFLECT } from '../core/env.js';
import { rng } from '../core/math.js';

export class Clouds {
  constructor() {
    this.puffs = []; // {x,y,z,r,seed,b}
    this.clusters = [];
    const max = 900;
    const g = new THREE.InstancedBufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3));
    g.setIndex([0, 1, 2, 0, 2, 3]);
    this.aPuff = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    this.aCl = new THREE.InstancedBufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('aPuff', this.aPuff);
    g.setAttribute('aCl', this.aCl);
    g.instanceCount = 0;
    this.geo = g;
    this.max = max;
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uSunDir: shared.uSunDir,
        uSunColor: shared.uSunColor,
        uZenith: shared.uSkyZenith,
        uHorizon: shared.uSkyHorizon,
        uTime: shared.uTime,
        fogColor: { value: new THREE.Color() },
        fogDensity: { value: 0 },
        fogNear: { value: 1 },
        fogFar: { value: 1 },
      },
      vertexShader: /* glsl */ `
        attribute vec4 aPuff; // xyz centre, radius
        attribute vec4 aCl;   // cluster centre xyz, seed
        varying vec2 vUv;
        varying vec3 vC;
        varying vec3 vClC;
        varying float vR;
        varying float vSeed;
        varying float vFade;
        varying vec3 vWorld;
        varying float vFogDepth;
        void main(){
          vec3 c = aPuff.xyz;
          float r = aPuff.w;
          vec3 toCam = cameraPosition - c;
          float dist = length(toCam);
          vec3 f = toCam / dist;
          vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), f));
          vec3 up = cross(f, right);
          vec3 p = c + (right * position.x + up * position.y) * r * 1.25;
          vUv = position.xy * 1.25;
          vC = c;
          vClC = aCl.xyz;
          vR = r;
          vSeed = aCl.w;
          vFade = smoothstep(r * 0.35, r * 1.3, dist);
          vWorld = p;
          vec4 mv = viewMatrix * vec4(p, 1.0);
          vFogDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uSunDir, uSunColor, uZenith, uHorizon;
        uniform float uTime;
        uniform vec3 fogColor;
        uniform float fogDensity;
        varying vec2 vUv;
        varying vec3 vC;
        varying vec3 vClC;
        varying float vR;
        varying float vSeed;
        varying float vFade;
        varying vec3 vWorld;
        varying float vFogDepth;
        ${GLSL_NOISE}
        void main(){
          vec2 q = vUv;
          float n = fbm2(q * 1.6 + vSeed * 13.1 + uTime * 0.01);
          float rr = length(q) + (n - 0.5) * 0.55;
          float a = smoothstep(1.0, 0.55, rr);
          if (a < 0.01) discard;
          // impostor normal (view facing sphere, bumped by noise)
          vec3 f = normalize(cameraPosition - vC);
          vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), f));
          vec3 up = cross(f, right);
          float z = sqrt(max(0.0, 1.0 - min(dot(q, q), 1.0)));
          vec3 N = normalize(right * q.x + up * q.y + f * z + (vec3(n) - 0.5) * 0.6);
          // whole-cloud shading: lower parts darker, sun side bright
          vec3 fromC = normalize(vWorld - vClC + vec3(0.0, 0.2 * vR, 0.0));
          float sunSide = dot(normalize(N + fromC * 0.8), uSunDir);
          float lit = smoothstep(-0.6, 0.8, sunSide);
          float height = clamp((vWorld.y - vClC.y) / (vR * 2.5) + 0.5, 0.0, 1.0);
          vec3 shade = mix(vec3(0.62, 0.68, 0.78), vec3(0.8, 0.84, 0.9), height);
          vec3 sunlit = vec3(1.0, 0.95, 0.86);
          vec3 col = mix(shade, sunlit, lit);
          col *= 0.9 + 0.2 * height;
          // silver lining when sun behind the cloud
          vec3 V = normalize(vWorld - cameraPosition);
          float back = pow(max(dot(V, uSunDir), 0.0), 6.0);
          col += vec3(1.0, 0.9, 0.7) * back * (1.0 - a) * 3.0;
          col *= 1.15;
          float fogF = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth * 0.5);
          col = mix(col, fogColor, fogF);
          float alpha = a * vFade * 0.92;
          gl_FragColor = vec4(col * alpha, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      transparent: true,
      depthWrite: false,
      premultipliedAlpha: true,
      blending: THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
      fog: true,
    });
    this.mesh = new THREE.Mesh(g, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 3;
    this.mesh.name = 'clouds';
    this.mesh.layers.enable(LAYER_REFLECT);
    this._order = [];
  }

  addCluster(cx, cy, cz, size, seed, flat = 1) {
    const r = rng(seed);
    const cl = { x: cx, y: cy, z: cz, size, seed: r() * 10, start: this.puffs.length };
    const n = Math.round(8 + size / 6);
    for (let i = 0; i < n; i++) {
      const a = r() * Math.PI * 2;
      const d = Math.pow(r(), 0.7) * size * 0.9;
      const px = cx + Math.cos(a) * d;
      const pz = cz + Math.sin(a) * d * flat;
      const rad = size * (0.32 + r() * 0.3) * (1 - (d / size) * 0.45);
      const py = cy + rad * 0.55 + (1 - d / size) * size * 0.35 * r();
      this.puffs.push({ x: px, y: py, z: pz, r: rad, cl });
    }
    // flat base
    for (let i = 0; i < n / 2; i++) {
      const a = r() * Math.PI * 2, d = Math.pow(r(), 0.5) * size * 0.8;
      this.puffs.push({ x: cx + Math.cos(a) * d, y: cy + size * 0.08, z: cz + Math.sin(a) * d * flat, r: size * 0.3, cl });
    }
    cl.end = this.puffs.length;
    this.clusters.push(cl);
    return cl;
  }

  // nearest puff density at a point (0..1) for fog-in-cloud effects
  densityAt(p) {
    let d = 0;
    for (const q of this.puffs) {
      const dx = p.x - q.x, dy = p.y - q.y, dz = p.z - q.z;
      const r2 = q.r * q.r;
      const dd = dx * dx + dy * dy + dz * dz;
      if (dd < r2) d = Math.max(d, 1 - Math.sqrt(dd) / q.r);
    }
    return d;
  }

  update(camera) {
    // back-to-front sort
    const cp = camera.position;
    const n = Math.min(this.puffs.length, this.max);
    const ord = this._order;
    ord.length = n;
    for (let i = 0; i < n; i++) {
      const q = this.puffs[i];
      q.d = (q.x - cp.x) ** 2 + (q.y - cp.y) ** 2 + (q.z - cp.z) ** 2;
      ord[i] = q;
    }
    ord.sort((a, b) => b.d - a.d);
    const A = this.aPuff.array, B = this.aCl.array;
    for (let i = 0; i < n; i++) {
      const q = ord[i];
      A[i * 4] = q.x;
      A[i * 4 + 1] = q.y;
      A[i * 4 + 2] = q.z;
      A[i * 4 + 3] = q.r;
      B[i * 4] = q.cl.x;
      B[i * 4 + 1] = q.cl.y;
      B[i * 4 + 2] = q.cl.z;
      B[i * 4 + 3] = q.cl.seed;
    }
    this.aPuff.needsUpdate = true;
    this.aCl.needsUpdate = true;
    this.geo.instanceCount = n;
  }
}
