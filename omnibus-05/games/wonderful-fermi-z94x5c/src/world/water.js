// Puddles: shallow water with a wave-equation height field (ripples reflect off the
// muddy rim), planar mirror reflection of the sky / unicorn / child, sun glints and a
// soft wet-mud margin.
import * as THREE from '../../lib/three.module.js';
import { PUDDLES, puddleShape } from './layout.js';
import { shared, GLSL_NOISE, LAYER_REFLECT, LAYER_MAIN } from '../core/env.js';

export const WATER_Y = 0.012;

class PuddleSim {
  constructor(def) {
    this.def = def;
    const ext = Math.max(def.r[0], def.r[1]) * 1.35 + 0.15;
    this.x0 = def.c[0] - ext;
    this.z0 = def.c[1] - ext;
    this.size = ext * 2;
    const dx = Math.max(0.022, Math.min(0.06, this.size / (def.res || 96)));
    this.n = Math.ceil(this.size / dx);
    this.dx = this.size / this.n;
    const N = this.n * this.n;
    this.h = new Float32Array(N);
    this.hp = new Float32Array(N);
    this.mask = new Uint8Array(N);
    this.tex = new Uint8Array(N * 4);
    for (let j = 0; j < this.n; j++)
      for (let i = 0; i < this.n; i++) {
        const x = this.x0 + (i + 0.5) * this.dx, z = this.z0 + (j + 0.5) * this.dx;
        const s = puddleShape(def, x, z) * Math.min(def.r[0], def.r[1]);
        const k = j * this.n + i;
        this.mask[k] = s < -0.01 ? 1 : 0;
        // alpha: water 255 inside, mud ramp outside
        const a = Math.max(0, Math.min(1, 0.5 - s / 0.05));
        const mud = Math.max(0, Math.min(1, 1 - s / 0.35));
        this.tex[k * 4] = 128;
        this.tex[k * 4 + 1] = 128;
        this.tex[k * 4 + 2] = Math.round(a * 255);
        this.tex[k * 4 + 3] = Math.round(mud * 255);
      }
    this.texture = new THREE.DataTexture(this.tex, this.n, this.n, THREE.RGBAFormat);
    this.texture.magFilter = THREE.LinearFilter;
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.needsUpdate = true;
    this.energy = 0;
    this.acc = 0;
    this.c2 = 0.07; // (c dt / dx)^2
  }

  contains(x, z, margin = 0) {
    return puddleShape(this.def, x, z) * Math.min(this.def.r[0], this.def.r[1]) < margin;
  }

  // displace water surface: amp in metres (negative = depression)
  disturb(x, z, radius, amp) {
    const n = this.n;
    const ci = (x - this.x0) / this.dx - 0.5, cj = (z - this.z0) / this.dx - 0.5;
    const rc = Math.max(1.2, radius / this.dx);
    const i0 = Math.max(1, Math.floor(ci - rc * 2)), i1 = Math.min(n - 2, Math.ceil(ci + rc * 2));
    const j0 = Math.max(1, Math.floor(cj - rc * 2)), j1 = Math.min(n - 2, Math.ceil(cj + rc * 2));
    for (let j = j0; j <= j1; j++)
      for (let i = i0; i <= i1; i++) {
        const k = j * n + i;
        if (!this.mask[k]) continue;
        const d2 = ((i - ci) ** 2 + (j - cj) ** 2) / (rc * rc);
        const w = Math.exp(-d2 * 2.0);
        this.h[k] += amp * w;
        this.hp[k] += amp * w * 0.6;
      }
    this.energy = Math.max(this.energy, Math.abs(amp) * 400 + 0.2);
  }

  step() {
    const n = this.n, h = this.h, hp = this.hp, m = this.mask, c2 = this.c2;
    const damp = 0.992;
    let e = 0;
    for (let j = 1; j < n - 1; j++) {
      let k = j * n + 1;
      for (let i = 1; i < n - 1; i++, k++) {
        if (!m[k]) {
          hp[k] = 0;
          continue;
        }
        const lap = h[k - 1] + h[k + 1] + h[k - n] + h[k + n] - 4 * h[k];
        const nv = h[k] + (h[k] - hp[k]) * damp + c2 * lap;
        hp[k] = nv;
        e += Math.abs(nv);
      }
    }
    // swap
    this.h = hp;
    this.hp = h;
    this.energy = e / (n * n) * 4000;
  }

  upload() {
    const n = this.n, h = this.h, t = this.tex;
    const sc = 0.5 / this.dx * 22;
    for (let j = 1; j < n - 1; j++) {
      let k = j * n + 1;
      for (let i = 1; i < n - 1; i++, k++) {
        const sx = (h[k - 1] - h[k + 1]) * sc;
        const sz = (h[k - n] - h[k + n]) * sc;
        t[k * 4] = Math.max(0, Math.min(255, 128 + sx * 127));
        t[k * 4 + 1] = Math.max(0, Math.min(255, 128 + sz * 127));
      }
    }
    this.texture.needsUpdate = true;
  }

  heightAt(x, z) {
    const i = Math.round((x - this.x0) / this.dx - 0.5), j = Math.round((z - this.z0) / this.dx - 0.5);
    if (i < 0 || j < 0 || i >= this.n || j >= this.n) return 0;
    return this.h[j * this.n + i];
  }
}

export class Puddles {
  constructor(renderer) {
    this.renderer = renderer;
    this.sims = PUDDLES.map((d) => new PuddleSim(d));
    this.byId = {};
    for (const s of this.sims) this.byId[s.def.id] = s;
    this.group = new THREE.Group();
    this.group.name = 'puddles';
    this.reflectRT = new THREE.WebGLRenderTarget(512, 512, { type: THREE.HalfFloatType, samples: 0 });
    this.reflectRT.texture.generateMipmaps = false;
    this.textureMatrix = new THREE.Matrix4();
    this.mirrorCam = new THREE.PerspectiveCamera();
    this.mirrorCam.layers.set(LAYER_REFLECT);
    this.reflectEnabled = true;
    this.visible = true;
    for (const s of this.sims) {
      const geo = new THREE.PlaneGeometry(s.size, s.size, 1, 1).rotateX(-Math.PI / 2);
      const mat = this._material(s);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(s.x0 + s.size / 2, WATER_Y, s.z0 + s.size / 2);
      mesh.renderOrder = 2;
      mesh.layers.set(LAYER_MAIN);
      mesh.name = 'puddle-' + s.def.id;
      s.mesh = mesh;
      this.group.add(mesh);
    }
    this._acc = 0;
    this.dripT = 1.5;
  }

  _material(s) {
    return new THREE.ShaderMaterial({
      uniforms: {
        uState: { value: s.texture },
        uRefl: { value: this.reflectRT.texture },
        uTexMat: { value: this.textureMatrix },
        uSunDir: shared.uSunDir,
        uSunColor: shared.uSunColor,
        uZenith: shared.uSkyZenith,
        uHorizon: shared.uSkyHorizon,
        uAmb: shared.uAmbient,
        uReflOn: { value: 1 },
        uTime: shared.uTime,
        uRect: { value: new THREE.Vector3(s.x0, s.z0, s.size) },
        fogColor: { value: new THREE.Color() },
        fogNear: { value: 1 },
        fogFar: { value: 1000 },
        fogDensity: { value: 0 },
      },
      vertexShader: /* glsl */ `
        uniform mat4 uTexMat;
        uniform vec3 uRect;
        varying vec4 vRefl;
        varying vec3 vW;
        varying vec2 vUv;
        #include <fog_pars_vertex>
        void main(){
          vec4 w = modelMatrix * vec4(position, 1.0);
          vW = w.xyz;
          vUv = (w.xz - uRect.xy) / uRect.z;
          vRefl = uTexMat * w;
          vec4 mvPosition = viewMatrix * w;
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,
      fragmentShader: /* glsl */ `
        uniform sampler2D uState;
        uniform sampler2D uRefl;
        uniform vec3 uSunDir, uSunColor, uZenith, uHorizon, uAmb;
        uniform float uReflOn, uTime;
        varying vec4 vRefl;
        varying vec3 vW;
        varying vec2 vUv;
        #include <common>
        #include <fog_pars_fragment>
        ${GLSL_NOISE}
        void main(){
          vec4 st = texture2D(uState, vUv);
          float water = st.b;
          float mud = st.a;
          if (mud < 0.01) discard;
          vec2 sl = (st.rg - 0.5) * 2.0;
          vec3 N = normalize(vec3(sl.x, 1.0, sl.y));
          vec3 V = normalize(cameraPosition - vW);
          float ndv = max(dot(N, V), 0.0);
          float fres = 0.02 + 0.98 * pow(1.0 - ndv, 5.0);
          // reflection: mirror render distorted by ripples
          vec4 rc = vRefl;
          rc.xy += sl * 0.05 * rc.w;
          vec3 refl = texture2DProj(uRefl, rc).rgb;
          vec3 R = reflect(-V, N);
          vec3 skyR = mix(uHorizon, uZenith, pow(max(R.y, 0.0), 0.5));
          refl = mix(skyR, refl, uReflOn);
          refl = min(refl, vec3(2.2));
          // muddy bottom seen through shallow water
          float shallow = smoothstep(0.0, 1.0, 1.0 - water) ;
          vec3 bottom = mix(vec3(0.05, 0.045, 0.03), vec3(0.16, 0.13, 0.08), shallow);
          bottom *= 0.7 + 0.5 * vnoise2(vW.xz * 9.0);
          bottom *= uAmb * 0.6 + uSunColor * 0.12;
          // dark muddy water acts like a mirror
          float k = clamp(fres + 0.32, 0.0, 1.0);
          vec3 col = mix(bottom, refl, k * water);
          // sun glints on ripples
          vec3 H = normalize(uSunDir + V);
          float sp = min(pow(max(dot(N, H), 0.0), 1200.0) * 5.0, 4.0) + pow(max(dot(N, H), 0.0), 60.0) * 0.12;
          col += uSunColor * sp * water;
          // wet mud margin
          vec3 mudCol = vec3(0.16, 0.13, 0.08) * (0.7 + 0.5 * vnoise2(vW.xz * 14.0));
          mudCol = mudCol * (uAmb * 0.55 + uSunColor * 0.3 * max(uSunDir.y, 0.0) * 2.0);
          mudCol += skyR * 0.12 * fres;
          col = mix(mudCol, col, water);
          float alpha = max(water, mud * 0.85);
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,
      transparent: true,
      depthWrite: false,
      fog: true,
    });
  }

  simAt(x, z, margin = 0) {
    for (const s of this.sims) if (s.contains(x, z, margin)) return s;
    return null;
  }

  disturb(x, z, radius, amp) {
    const s = this.simAt(x, z, 0.02);
    if (!s) return null;
    s.disturb(x, z, radius, amp);
    return s;
  }

  update(dt, camera, scene) {
    // fixed 60Hz sim, only for energetic puddles
    this._acc += dt;
    let steps = 0;
    while (this._acc > 1 / 60 && steps < 3) {
      this._acc -= 1 / 60;
      steps++;
      for (const s of this.sims) if (s.energy > 0.002) s.step();
    }
    for (const s of this.sims) {
      if (s.energy > 0.002 || s.dirty) {
        s.upload();
        s.dirty = s.energy > 0.002;
      }
    }
  }

  // Render mirror view for the water surface.
  renderReflection(renderer, scene, camera) {
    if (!this.reflectEnabled) return;
    const normal = new THREE.Vector3(0, 1, 0);
    const pos = new THREE.Vector3(0, WATER_Y, 0);
    const camPos = new THREE.Vector3().setFromMatrixPosition(camera.matrixWorld);
    if (camPos.y < WATER_Y) return;
    pos.x = camPos.x;
    pos.z = camPos.z;
    const view = pos.clone().sub(camPos).reflect(normal).negate().add(pos);
    const rot = new THREE.Matrix4().extractRotation(camera.matrixWorld);
    const look = new THREE.Vector3(0, 0, -1).applyMatrix4(rot).add(camPos);
    const target = pos.clone().sub(look).reflect(normal).negate().add(pos);
    const vc = this.mirrorCam;
    vc.position.copy(view);
    vc.up.set(0, 1, 0).applyMatrix4(rot).reflect(normal);
    vc.lookAt(target);
    vc.far = camera.far;
    vc.near = camera.near;
    vc.updateMatrixWorld();
    vc.projectionMatrix.copy(camera.projectionMatrix);
    this.textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    this.textureMatrix.multiply(vc.projectionMatrix);
    this.textureMatrix.multiply(vc.matrixWorldInverse);
    // oblique near plane
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(normal, pos);
    plane.applyMatrix4(vc.matrixWorldInverse);
    const clip = new THREE.Vector4(plane.normal.x, plane.normal.y, plane.normal.z, plane.constant);
    const pm = vc.projectionMatrix;
    const q = new THREE.Vector4();
    q.x = (Math.sign(clip.x) + pm.elements[8]) / pm.elements[0];
    q.y = (Math.sign(clip.y) + pm.elements[9]) / pm.elements[5];
    q.z = -1.0;
    q.w = (1.0 + pm.elements[10]) / pm.elements[14];
    clip.multiplyScalar(2.0 / clip.dot(q));
    pm.elements[2] = clip.x;
    pm.elements[6] = clip.y;
    pm.elements[10] = clip.z + 1.0 - 0.003;
    pm.elements[14] = clip.w;
    vc.projectionMatrixInverse.copy(pm).invert();
    const old = renderer.getRenderTarget();
    this.group.visible = false;
    renderer.setRenderTarget(this.reflectRT);
    renderer.clear();
    renderer.render(scene, vc);
    renderer.setRenderTarget(old);
    this.group.visible = true;
  }

  setReflectSize(w, h) {
    this.reflectRT.setSize(Math.max(64, Math.round(w)), Math.max(64, Math.round(h)));
  }
}
