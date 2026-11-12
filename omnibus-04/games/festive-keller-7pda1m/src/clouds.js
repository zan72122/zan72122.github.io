import * as THREE from 'three';
import { GLSL_NOISE, mulberry32, smoothstep, clamp } from './util.js';
import { SUN_DIR, SUN_COLOR } from './atmosphere.js';

// Volumetric-looking cumulus built from lit, sorted billboard puffs. They
// scatter the colour of nearby rainbows.
export class Clouds {
  constructor(scene, rainbowLights, budget = 1) {
    this.scene = scene;
    this.lights = rainbowLights;
    const rng = mulberry32(9);
    this.clusters = [];
    const puffs = [];
    const addCluster = (x, y, z, w, h, n, dens = 1, flat = 0.35) => {
      const c = { x, y, z, w, h, dens };
      this.clusters.push(c);
      for (let i = 0; i < n; i++) {
        // dome with a flat base
        const a = rng() * Math.PI * 2;
        const r = Math.sqrt(rng());
        const px = x + Math.cos(a) * r * w;
        const pz = z + Math.sin(a) * r * w * 0.8;
        const dome = Math.sqrt(Math.max(0, 1 - r * r));
        const py = y + dome * h * (0.3 + rng() * 0.7);
        const size = (0.45 + rng() * 0.5) * (w * 0.55 + h * 0.4) * (0.6 + dome * 0.6);
        puffs.push({ x: px, y: py, z: pz, size, cx: x, cy: y, cz: z, ch: h, seed: rng(), dens });
      }
    };
    // near clouds, reachable heights
    addCluster(-14, 30, -34, 12, 7, 18);
    addCluster(22, 36, -12, 14, 8, 20);
    addCluster(-30, 42, 18, 16, 9, 22);
    addCluster(8, 48, 30, 13, 8, 18);
    addCluster(34, 54, -40, 18, 10, 22);
    addCluster(-40, 62, -52, 20, 10, 22);
    addCluster(0, 72, 0, 22, 9, 22);
    // far ring of clouds
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2 + rng() * 0.3;
      const r = 180 + rng() * 420;
      addCluster(Math.cos(a) * r, 70 + rng() * 90, Math.sin(a) * r, 30 + rng() * 40, 14 + rng() * 14, Math.round((12 + rng() * 10) * budget));
    }
    this.mistStart = puffs.length;
    this.puffs = puffs;
    const n = puffs.length;
    this.count = n;

    const geo = new THREE.PlaneGeometry(1, 1);
    this.aPuff = new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4);
    this.aCloud = new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4);
    this.aExtra = new THREE.InstancedBufferAttribute(new Float32Array(n * 2), 2);
    for (const a of [this.aPuff, this.aCloud, this.aExtra]) a.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('aPuff', this.aPuff);
    geo.setAttribute('aCloud', this.aCloud);
    geo.setAttribute('aExtra', this.aExtra);

    this.uniforms = {
      uTime: { value: 0 },
      uLightPos: { value: [new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()] },
      uLightCol: { value: [new THREE.Color(), new THREE.Color(), new THREE.Color()] },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, this.uniforms]),
      vertexShader: /* glsl */ `
        attribute vec4 aPuff;   // xyz, size
        attribute vec4 aCloud;  // cloud centre xyz, cloud height
        attribute vec2 aExtra;  // seed, density
        varying vec2 vQ;
        varying vec3 vW;
        varying vec3 vCenter;
        varying vec4 vCloud;
        varying vec2 vExtra;
        varying float vNear;
        #include <fog_pars_vertex>
        void main() {
          vQ = position.xy * 2.0;
          vCloud = aCloud;
          vExtra = aExtra;
          vCenter = aPuff.xyz;
          vec4 mvPosition = viewMatrix * vec4(aPuff.xyz, 1.0);
          float d = -mvPosition.z;
          vNear = smoothstep(aPuff.w * 0.25, aPuff.w * 0.9, d);
          mvPosition.xy += position.xy * aPuff.w;
          vW = (vec4(mvPosition.xyz, 0.0) * viewMatrix).xyz + cameraPosition;
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        uniform vec3 uLightPos[3];
        uniform vec3 uLightCol[3];
        varying vec2 vQ;
        varying vec3 vW;
        varying vec3 vCenter;
        varying vec4 vCloud;
        varying vec2 vExtra;
        varying float vNear;
        #include <fog_pars_fragment>
        ${GLSL_NOISE}
        const vec3 SUN = vec3(${SUN_DIR.x.toFixed(4)}, ${SUN_DIR.y.toFixed(4)}, ${SUN_DIR.z.toFixed(4)});
        const vec3 SUNC = vec3(${SUN_COLOR.r.toFixed(3)}, ${SUN_COLOR.g.toFixed(3)}, ${SUN_COLOR.b.toFixed(3)});
        void main() {
          float r = length(vQ);
          float n = fbm3(vQ * 1.6 + vExtra.x * 17.0 + uTime * 0.008);
          float n2 = vnoise(vQ * 5.0 + vExtra.x * 31.0);
          float dens = smoothstep(1.0, 0.35, r + (n - 0.5) * 0.75 + (n2 - 0.5) * 0.15);
          if (dens < 0.01) discard;
          // sphere-ish normal in world space
          vec3 nv = vec3(vQ, sqrt(max(1.0 - r * r, 0.0)));
          vec3 nw = normalize((vec4(nv, 0.0) * viewMatrix).xyz);
          vec3 cn = normalize(vCenter - vCloud.xyz + vec3(0.0, vCloud.w * 0.5, 0.0));
          vec3 N = normalize(mix(nw, cn, 0.55));
          float hIn = clamp((vW.y - vCloud.y) / max(vCloud.w, 1.0), 0.0, 1.0);
          float sunL = clamp(dot(N, SUN) * 0.55 + 0.45, 0.0, 1.0);
          vec3 amb = mix(vec3(0.42, 0.48, 0.58), vec3(0.78, 0.84, 0.95), hIn);
          vec3 V = normalize(vW - cameraPosition);
          float fwd = pow(max(dot(V, SUN), 0.0), 8.0);
          float edge = 1.0 - dens;
          vec3 col = amb * 0.75 + SUNC * sunL * (0.9 + 0.5 * hIn);
          col += SUNC * fwd * edge * 2.5;
          // rainbow colour scattering in the droplets
          for (int i = 0; i < 3; i++) {
            float d = length(vW - uLightPos[i]);
            col += uLightCol[i] * exp(-d * d / 60.0) * 0.9;
          }
          float a = dens * vExtra.y * vNear;
          a *= 0.92;
          gl_FragColor = vec4(col * a, a);
          #ifdef USE_FOG
            float ff = atmoFogAmount(vW) * 0.85;
            gl_FragColor.rgb = mix(gl_FragColor.rgb, atmoFog(V, fogColor) * a, ff);
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
    mat.uniforms.uLightPos = this.uniforms.uLightPos;
    mat.uniforms.uLightCol = this.uniforms.uLightCol;
    this.mesh = new THREE.InstancedMesh(geo, mat, n);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 2.5;
    scene.add(this.mesh);
    this.order = puffs.map((_, i) => i);
    this.sortT = 0;
    this.drift = new THREE.Vector3();
    this.writeAll(new THREE.Vector3(0, 2, 10));
  }

  writeAll(cam) {
    const P = this.puffs;
    const d = this.drift;
    for (const p of P) p.dist = (p.x + d.x - cam.x) ** 2 + (p.y - cam.y) ** 2 + (p.z + d.z - cam.z) ** 2;
    this.order.sort((a, b) => P[b].dist - P[a].dist);
    const A = this.aPuff.array, C = this.aCloud.array, E = this.aExtra.array;
    for (let k = 0; k < this.order.length; k++) {
      const p = P[this.order[k]];
      A[k * 4] = p.x + d.x; A[k * 4 + 1] = p.y; A[k * 4 + 2] = p.z + d.z; A[k * 4 + 3] = p.size;
      C[k * 4] = p.cx + d.x; C[k * 4 + 1] = p.cy; C[k * 4 + 2] = p.cz + d.z; C[k * 4 + 3] = p.ch;
      E[k * 2] = p.seed; E[k * 2 + 1] = p.dens;
    }
    this.aPuff.needsUpdate = true;
    this.aCloud.needsUpdate = true;
    this.aExtra.needsUpdate = true;
  }

  // How deep inside a cloud a point is (0..1).
  insideAmount(p) {
    let best = 0;
    for (const c of this.clusters) {
      if (c.dens < 0.5) continue;
      const dx = (p.x - (c.x + this.drift.x)) / (c.w * 0.9);
      const dz = (p.z - (c.z + this.drift.z)) / (c.w * 0.75);
      const dy = (p.y - (c.y + c.h * 0.35)) / (c.h * 0.75);
      const d = dx * dx + dy * dy + dz * dz;
      best = Math.max(best, 1 - smoothstep(0.35, 1.0, d));
    }
    return best;
  }

  update(dt, time, camera, lights) {
    this.uniforms.uTime.value = time;
    // clouds drift slowly with the wind
    this.drift.x = Math.sin(time * 0.004) * 12;
    this.drift.z = Math.cos(time * 0.0033) * 8;
    this.sortT -= dt;
    if (this.sortT <= 0) {
      this.writeAll(camera.position);
      this.sortT = 0.25;
    }
    for (let i = 0; i < 3; i++) {
      this.uniforms.uLightPos.value[i].copy(lights[i].position);
      this.uniforms.uLightCol.value[i].copy(lights[i].color).multiplyScalar(lights[i].intensity * 0.12);
    }
  }
}
