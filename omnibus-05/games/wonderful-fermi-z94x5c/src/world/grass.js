// Wet meadow grass: instanced blades wrapped around a moving focus, bending under wind,
// hooves and fingers, back-lit by the low sun; plus dew drops on the blade tips whose
// colours follow real raindrop optics (dew-bow at 42 degrees from the antisolar point).
import * as THREE from '../../lib/three.module.js';
import { shared, GLSL_NOISE, GLSL_SPECTRUM, LAYER_MAIN } from '../core/env.js';
import { litShaderMaterial, SHADOW_VERT_PARS, SHADOW_VERT, SHADOW_FRAG_PARS } from '../core/litShader.js';
import { PUDDLES, puddleShape } from './layout.js';
import { rng } from '../core/math.js';

export const MASK_RECT = { x0: -48, z0: -70, size: 120 };

export function makePuddleMask(N = 512) {
  const data = new Uint8Array(N * N * 4);
  const { x0, z0, size } = MASK_RECT;
  for (let j = 0; j < N; j++)
    for (let i = 0; i < N; i++) {
      const x = x0 + ((i + 0.5) / N) * size, z = z0 + ((j + 0.5) / N) * size;
      let d = 9;
      for (const p of PUDDLES) {
        if (Math.abs(x - p.c[0]) > 8 || Math.abs(z - p.c[1]) > 8) continue;
        const s = puddleShape(p, x, z) * Math.min(p.r[0], p.r[1]);
        if (s < d) d = s;
      }
      // R: 1 inside water, falls off over ~0.25 m outside (mud)
      const water = Math.max(0, Math.min(1, 0.5 - d / 0.08));
      const mud = Math.max(0, Math.min(1, 1 - d / 0.45));
      const k = (j * N + i) * 4;
      data[k] = water * 255;
      data[k + 1] = mud * 255;
      data[k + 2] = 0;
      data[k + 3] = 255;
    }
  const t = new THREE.DataTexture(data, N, N, THREE.RGBAFormat);
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearFilter;
  t.needsUpdate = true;
  return t;
}

function bladeGeometry(segs = 4) {
  const pos = [], idx = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    if (i < segs) {
      pos.push(-0.5, t, 0, 0.5, t, 0);
    } else pos.push(0, 1, 0);
  }
  for (let i = 0; i < segs - 1; i++) {
    const a = i * 2;
    idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
  }
  const a = (segs - 1) * 2;
  idx.push(a, a + 1, a + 2);
  const g = new THREE.InstancedBufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  return g;
}

const PUSHERS = 10;

export class Grass {
  constructor({ count = 26000, tile = 18, fade = 8.5, seed = 1, mask, heightScale = 1, widthScale = 1, fadeStart = 0.55 } = {}) {
    this.focus = new THREE.Vector2();
    this.pushers = [];
    for (let i = 0; i < PUSHERS; i++) this.pushers.push(new THREE.Vector4(0, -100, 0, 0.01));
    const g = bladeGeometry(4);
    const r = rng(seed);
    const off = new Float32Array(count * 2);
    const prm = new Float32Array(count * 4);
    const col = new Float32Array(count);
    // stratified jitter for even coverage
    const n = Math.ceil(Math.sqrt(count));
    let k = 0;
    for (let j = 0; j < n && k < count; j++)
      for (let i = 0; i < n && k < count; i++, k++) {
        off[k * 2] = ((i + r()) / n) * tile;
        off[k * 2 + 1] = ((j + r()) / n) * tile;
        const clump = Math.pow(r(), 0.6);
        prm[k * 4] = r() * Math.PI * 2; // facing
        prm[k * 4 + 1] = (0.09 + 0.17 * clump) * heightScale; // height
        prm[k * 4 + 2] = (0.006 + 0.008 * r()) * widthScale; // width
        prm[k * 4 + 3] = 0.15 + 0.5 * r(); // lean
        col[k] = r();
      }
    g.setAttribute('aOffset', new THREE.InstancedBufferAttribute(off, 2));
    g.setAttribute('aParams', new THREE.InstancedBufferAttribute(prm, 4));
    g.setAttribute('aColor', new THREE.InstancedBufferAttribute(col, 1));
    g.instanceCount = count;
    this.uniforms = {
      uFocus: { value: this.focus },
      uTile: { value: tile },
      uFade: { value: fade },
      uFadeStart: { value: fadeStart },
      uTime: shared.uTime,
      uWind: shared.uWind,
      uSunDir: shared.uSunDir,
      uSunColor: shared.uSunColor,
      uAmb: shared.uAmbient,
      uMask: { value: mask },
      uMaskRect: { value: new THREE.Vector3(MASK_RECT.x0, MASK_RECT.z0, MASK_RECT.size) },
      uPush: { value: this.pushers },
      uWet: shared.uWet,
    };
    this.material = litShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: /* glsl */ `
        ${SHADOW_VERT_PARS}
        attribute vec2 aOffset;
        attribute vec4 aParams;
        attribute float aColor;
        uniform vec2 uFocus;
        uniform float uTile, uFade, uTime, uFadeStart;
        uniform vec2 uWind;
        uniform sampler2D uMask;
        uniform vec3 uMaskRect;
        uniform vec4 uPush[${PUSHERS}];
        varying float vT;
        varying float vCol;
        varying vec3 vN;
        varying vec3 vW;
        varying float vMud;
        ${GLSL_NOISE}
        void main(){
          vec2 wp = aOffset + uTile * floor((uFocus - aOffset) / uTile + 0.5);
          float d = length(wp - uFocus);
          float fade = 1.0 - smoothstep(uFade * uFadeStart, uFade, d);
          vec2 muv = (wp - uMaskRect.xy) / uMaskRect.z;
          vec4 mk = texture2D(uMask, muv);
          float inMeadow = step(0.0, muv.x) * step(muv.x, 1.0) * step(0.0, muv.y) * step(muv.y, 1.0);
          float wet = mk.r * inMeadow;
          vMud = mk.g * inMeadow;
          float h = aParams.y * fade * (1.0 - smoothstep(0.05, 0.4, wet)) * (1.0 - 0.45 * vMud);
          float t = position.y;
          float rot = aParams.x;
          vec2 dir = vec2(cos(rot), sin(rot));
          vec2 side = vec2(-dir.y, dir.x);
          // wind gusts travel across the meadow
          float g1 = vnoise2(wp * 0.18 - uWind * uTime * 0.35);
          float g2 = vnoise2(wp * 1.3 + uTime * 1.7);
          vec2 wind = uWind * (0.35 + 0.9 * g1) * 0.32 + vec2(g2 - 0.5) * 0.08;
          vec2 push = vec2(0.0);
          for (int i = 0; i < ${PUSHERS}; i++) {
            vec4 P = uPush[i];
            vec2 dd = wp - P.xz;
            float r = length(dd) + 1e-4;
            float k = (1.0 - smoothstep(P.w * 0.35, P.w, r)) * step(P.y, 0.6);
            push += dd / r * k * 1.4;
          }
          vec2 bend = dir * aParams.w + wind + push;
          float bl = length(bend);
          float b2 = t * t;
          float width = aParams.z * (1.0 - t * 0.8);
          vec3 p = vec3(wp.x, 0.0, wp.y);
          p.xz += side * position.x * width;
          p.xz += bend * b2 * h * 0.9;
          p.y += h * t * (1.0 - 0.35 * min(bl, 1.2) * b2);
          vec3 bendDir = normalize(vec3(bend.x, 0.0, bend.y) + 1e-4);
          vec3 tang = normalize(vec3(0.0, 1.0, 0.0) + bendDir * 2.0 * t * min(bl, 1.0));
          vec3 sideV = vec3(side.x, 0.0, side.y);
          vec3 nrm = normalize(cross(sideV, tang));
          vN = normalize(mix(nrm, vec3(0.0, 1.0, 0.0), 0.35));
          vT = t;
          vCol = aColor;
          vW = p;
          vec4 worldPosition = vec4(p, 1.0);
          vec4 mvPosition = viewMatrix * worldPosition;
          vec3 transformedNormal = normalize((viewMatrix * vec4(vN, 0.0)).xyz);
          gl_Position = projectionMatrix * mvPosition;
          ${SHADOW_VERT}
        }`,
      fragmentShader: /* glsl */ `
        ${SHADOW_FRAG_PARS}
        uniform vec3 uSunDir, uSunColor, uAmb;
        uniform float uWet;
        varying float vT;
        varying float vCol;
        varying vec3 vN;
        varying vec3 vW;
        varying float vMud;
        void main(){
          vec3 N = normalize(vN);
          vec3 V = normalize(cameraPosition - vW);
          if (dot(N, V) < 0.0) N = -N;
          vec3 root = vec3(0.075, 0.13, 0.045);
          vec3 tip = mix(vec3(0.27, 0.43, 0.12), vec3(0.42, 0.5, 0.16), vCol);
          tip = mix(tip, vec3(0.22, 0.4, 0.16), step(0.8, vCol));
          vec3 base = mix(root, tip, smoothstep(0.0, 0.9, vT));
          base = mix(base, base * vec3(0.8, 0.75, 0.6), vMud * 0.5);
          float sh = getShadowMask();
          float ndl = max(dot(N, uSunDir), 0.0) * 0.7 + 0.3 * max(dot(vec3(0,1,0), uSunDir), 0.0);
          vec3 col = base * uAmb * (0.35 + 0.65 * vT) * 0.9;
          col += base * uSunColor * ndl * sh * 0.55;
          // translucency when looking toward the sun through the blades
          float tr = pow(max(dot(-V, uSunDir), 0.0), 3.0) * vT;
          col += vec3(0.55, 0.75, 0.15) * uSunColor * tr * sh * 0.45;
          // wet specular sheen
          vec3 H = normalize(uSunDir + V);
          float sp = pow(max(dot(N, H), 0.0), 90.0) * uWet;
          col += uSunColor * sp * sh * 0.6 * vT;
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(g, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.receiveShadow = true;
    this.mesh.name = 'grass';
    this.mesh.layers.set(LAYER_MAIN);
  }

  setPusher(i, x, y, z, r) {
    this.pushers[i].set(x, y, z, r);
  }
}

// Dew on blade tips, wrapped like the grass. Colour from droplet optics.
export class Dew {
  constructor({ count = 2600, tile = 9, fade = 4.5, seed = 9, mask } = {}) {
    const r = rng(seed);
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = r() * tile;
      pos[i * 3 + 1] = 0.05 + r() * 0.16;
      pos[i * 3 + 2] = r() * tile;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.focus = new THREE.Vector2();
    this.uniforms = {
      uFocus: { value: this.focus },
      uTile: { value: tile },
      uFade: { value: fade },
      uSunDir: shared.uSunDir,
      uSunColor: shared.uSunColor,
      uTime: shared.uTime,
      uMask: { value: mask },
      uMaskRect: { value: new THREE.Vector3(MASK_RECT.x0, MASK_RECT.z0, MASK_RECT.size) },
      uPx: { value: 1 },
      uWind: shared.uWind,
    };
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: /* glsl */ `
        uniform vec2 uFocus;
        uniform float uTile, uFade, uTime, uPx;
        uniform vec3 uSunDir;
        uniform sampler2D uMask;
        uniform vec3 uMaskRect;
        uniform vec2 uWind;
        varying vec3 vCol;
        varying float vA;
        ${GLSL_SPECTRUM}
        ${GLSL_NOISE}
        void main(){
          vec2 wp = position.xz + uTile * floor((uFocus - position.xz) / uTile + 0.5);
          float d = length(wp - uFocus);
          float fade = 1.0 - smoothstep(uFade * 0.5, uFade, d);
          vec2 muv = (wp - uMaskRect.xy) / uMaskRect.z;
          float wet = texture2D(uMask, muv).r;
          float g1 = vnoise2(wp * 0.18 - uWind * uTime * 0.35);
          vec3 p = vec3(wp.x, position.y, wp.y);
          p.xz += uWind * (0.35 + 0.9 * g1) * 0.32 * (position.y / 0.2) * position.y * 0.9;
          vec4 mv = viewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          vec3 view = normalize(p - cameraPosition);
          float ang = degrees(acos(clamp(dot(view, -uSunDir), -1.0, 1.0)));
          vec3 c = rainbowOptics(ang, 0.4) * 0.9;
          float tw = 0.6 + 0.4 * sin(uTime * 3.0 + position.x * 40.0);
          // glint of the sun on the droplet surface
          c += vec3(0.25) * tw;
          // strong forward scattering when looking toward the sun
          c += vec3(1.0, 0.95, 0.85) * pow(max(dot(view, uSunDir), 0.0), 6.0) * 2.5;
          vCol = c;
          vA = fade * (1.0 - step(0.3, wet));
          float size = clamp(0.006 / -mv.z * 900.0 * uPx, 1.2 * uPx, 5.0 * uPx);
          gl_PointSize = size * vA;
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uSunColor;
        varying vec3 vCol;
        varying float vA;
        void main(){
          vec2 c = gl_PointCoord - 0.5;
          float a = exp(-dot(c, c) * 14.0) * vA;
          if (a < 0.01) discard;
          gl_FragColor = vec4(vCol * uSunColor * 0.5 * a, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.mesh = new THREE.Points(g, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.name = 'dew';
    this.mesh.layers.set(LAYER_MAIN);
  }
}
