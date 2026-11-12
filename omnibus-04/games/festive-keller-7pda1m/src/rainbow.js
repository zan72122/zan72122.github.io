import * as THREE from 'three';
import { GLSL_NOISE, GLSL_SPECTRAL, clamp, smoothstep, spectral } from './util.js';
import { GLSL_ATMO, SUN_DIR } from './atmosphere.js';

// ---------------------------------------------------------------------------
// The one impossible law of this world:
//   the path you walk becomes a rainbow, and a little later it lifts into the sky.
//
// A walk is recorded as a chain of evenly spaced stamps. Each stamp lies on
// whatever it was painted on (ground, roof or another rainbow). After a delay
// it is "released" in order from the oldest end, trembles, peels off with a
// little adhesion, and then springs towards a height that grows with the
// distance walked since. The newest end stays attached where the walker is,
// so every rainbow is also a ramp you can climb.
// ---------------------------------------------------------------------------

export const HALF_W = 0.88;
export const SPACING = 0.2;
export const K_SLOPE = 0.42;
const K_PEEL = 0.75;
const L_CAP = 26;
const DELAY = 2.3;
const COLS = 7;
const LAYER_EPS = 0.045;
const MAX_STAMPS = 5200;
const MAX_CHAINS = 34;
const W0 = 2.1;       // spring natural frequency
const ZETA = 0.55;
const TENSION = 38;
const VISC = 5;

const tmpC = new THREE.Color();

// Upload only the stamps that changed.
function markRange(attr, from, to) {
  if (to <= from) return;
  attr.addUpdateRange(from * COLS * 4, (to - from) * COLS * 4);
  attr.needsUpdate = true;
}

// Shared GLSL: rebuilds the world position of a ribbon vertex.
const GLSL_RIBBON_VERT = /* glsl */ `
attribute vec4 aA; // x, z, s, v
attribute vec4 aB; // tx, tz, tCreated, tRelease
attribute vec4 aD; // y, lift, slope, bank
attribute float aOn; // 1 when painted on top of another rainbow
uniform float uTime;
const float HALF_W = ${HALF_W.toFixed(3)};
vec3 ribbonPos(out vec3 N) {
  vec2 T = aB.xy;
  vec2 S = vec2(-T.y, T.x);
  float v = aA.w;
  float y = aD.x;
  float lift = aD.y;
  float lf = smoothstep(0.03, 0.8, lift);
  float sway = min(max(y, 0.0) * 0.008, 0.14) * sin(uTime * 0.8 + aA.x * 0.13 + aA.y * 0.11);
  float lat = v * HALF_W + sway;
  float droop = -0.06 * v * v * lf;
  vec3 p = vec3(aA.x + S.x * lat, y + droop + aD.w * v * HALF_W, aA.y + S.y * lat);
  float rel = aB.w;
  float tr = smoothstep(rel - 1.25, rel, uTime) * (1.0 - smoothstep(rel + 0.35, rel + 1.6, uTime));
  p.y += tr * (0.002 + 0.011 * v * v) * sin(uTime * 57.0 + aA.z * 19.0 + v * 3.0);
  vec3 t3 = normalize(vec3(T.x, aD.z, T.y));
  vec3 s3 = normalize(vec3(S.x, aD.w, S.y));
  N = normalize(cross(s3, t3) + s3 * (0.17 * v * lf));
  return p;
}
`;

const RIBBON_VS = /* glsl */ `
      ${GLSL_RIBBON_VERT}
      varying vec3 vW;
      varying vec3 vN;
      varying vec4 vInfo;
      varying float vOnRibbon;
      #include <fog_pars_vertex>
      void main() {
        vec3 N;
        vec3 p = ribbonPos(N);
        vW = p;
        vN = N;
        vOnRibbon = aOn;
        vInfo = vec4(aA.w, aA.z, aD.y, uTime - aB.z);
        vec4 mvPosition = viewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`;

// Shared fragment helpers: how much of the band is present at this fragment.
const GLSL_RIBBON_MASK = /* glsl */ `
float ribbonMask(float v, float s, float lift, float age, float headS, float fade, float seed, out float lf) {
  lf = smoothstep(0.02, 0.9, lift);
  float spread = 1.0 - exp(-age * 2.2);
  float n1 = vnoise(vec2(s * 2.7 + seed, v * 1.3));
  float n2 = vnoise(vec2(s * 9.0 + 3.0, v * 4.0 + seed));
  float radius = mix(0.14, 1.03, spread) + (n1 - 0.5) * 0.3 * spread + (n2 - 0.5) * 0.07;
  float edgeSoft = mix(0.05, 0.16, spread);
  float reveal = 1.0 - smoothstep(radius - edgeSoft, radius, abs(v));
  float bandEdge = 1.0 - smoothstep(0.88, 1.0, abs(v));
  reveal = mix(reveal, bandEdge, lf);
  float ends = smoothstep(0.0, 0.55, s) * smoothstep(-0.15, 0.5, headS - s);
  return reveal * ends * fade;
}
vec3 ribbonSpec(float v) {
  vec3 spec = spectralColor((v * 0.5 + 0.5) * 1.08 - 0.04);
  spec = spec / max(max(spec.r, max(spec.g, spec.b)), 0.05);
  return mix(vec3(dot(spec, vec3(0.3, 0.5, 0.2))), spec, 0.82);
}
`;

// Colour filtering pass: the film absorbs part of what is behind it, so the
// bands stay saturated even against a bright sky.
function tintMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.merge([
      THREE.UniformsLib.fog,
      { uHeadS: { value: 0 }, uFade: { value: 1 }, uSeed: { value: 0 } },
    ]),
    vertexShader: RIBBON_VS,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform float uHeadS;
      uniform float uFade;
      uniform float uSeed;
      varying vec3 vW;
      varying vec3 vN;
      varying vec4 vInfo;
      varying float vOnRibbon;
      #include <fog_pars_fragment>
      ${GLSL_NOISE}
      ${GLSL_SPECTRAL}
      ${GLSL_RIBBON_MASK}
      void main() {
        float lf;
        float mask = ribbonMask(vInfo.x, vInfo.y, vInfo.z, vInfo.w, uHeadS, uFade, uSeed, lf);
        if (mask < 0.003) discard;
        vec3 spec = ribbonSpec(vInfo.x);
        float bandLum = 0.55 + 0.45 * smoothstep(1.0, 0.25, abs(vInfo.x));
        vec3 V = normalize(cameraPosition - vW);
        float ndv = abs(dot(normalize(vN), V));
        float fres = pow(1.0 - ndv, 4.0);
        // on the ground: a wetter, darker patch; in the air: a coloured filter
        vec3 tGround = vec3(0.78) * mix(vec3(1.0), spec, 0.25);
        vec3 tAir = mix(vec3(1.0), spec * 0.9, 0.42 * bandLum) * (1.0 - 0.18 * fres);
        if (vOnRibbon > 0.5) tGround = mix(vec3(1.0), spec, 0.12);
        vec3 T = mix(tGround, tAir, lf);
        float k = mask;
        #ifdef USE_FOG
          k *= 1.0 - atmoFogAmount(vW);
        #endif
        gl_FragColor = vec4(mix(vec3(1.0), T, k), 1.0);
      }`,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    fog: true,
    blending: THREE.CustomBlending,
    blendEquation: THREE.AddEquation,
    blendSrc: THREE.DstColorFactor,
    blendDst: THREE.ZeroFactor,
  });
}

// Light pass: the spectral glow, sky reflection in the film, droplets.
function ribbonMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.merge([
      THREE.UniformsLib.fog,
      { uHeadS: { value: 0 }, uFade: { value: 1 }, uSeed: { value: 0 } },
    ]),
    vertexShader: RIBBON_VS,
    fragmentShader: /* glsl */ `
      uniform float uTime;
      uniform float uHeadS;
      uniform float uFade;
      uniform float uSeed;
      varying vec3 vW;
      varying vec3 vN;
      varying vec4 vInfo;
      varying float vOnRibbon;
      #include <fog_pars_fragment>
      ${GLSL_NOISE}
      ${GLSL_SPECTRAL}
      ${GLSL_RIBBON_MASK}
      void main() {
        float v = vInfo.x, s = vInfo.y, lift = vInfo.z, age = vInfo.w;
        float lf;
        float mask = ribbonMask(v, s, lift, age, uHeadS, uFade, uSeed, lf);
        if (mask < 0.003) discard;
        vec3 V = normalize(cameraPosition - vW);
        vec3 N = normalize(vN);
        if (dot(N, V) < 0.0) N = -N;
        float NdV = clamp(dot(N, V), 0.0, 1.0);
        vec3 spec = ribbonSpec(v);
        float bandLum = 0.55 + 0.45 * smoothstep(1.0, 0.25, abs(v));

        vec3 R = reflect(-V, N);
        vec3 sky = atmoSky(R, fogColor);
        sky = sky / (1.0 + max(dot(sky, vec3(0.33)) - 0.8, 0.0));
        float fres = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);
        float sunSpec = pow(max(dot(R, ATMO_SUN), 0.0), 260.0);
        float swirl = fbm3(vW.xz * 0.9 + vec2(uSeed, s * 0.03) + uTime * 0.012);
        vec3 film = thinFilm(380.0 + 320.0 * swirl, NdV);

        // --- on the ground: light split in a thin water film on wet asphalt
        vec3 sheen = sky * (0.1 + 0.45 * fres) * mix(vec3(1.0), film * 1.6, 0.55);
        vec3 gCol = spec * bandLum * (0.22 + 0.1 * swirl) + sheen * 0.3 + sunSpec * 2.0 * mix(vec3(1.0), film, 0.6);
        if (vOnRibbon > 0.5) gCol = spec * bandLum * 0.1 + sheen * 0.08;

        // --- lifted: a sheet of light that is also a film of water
        float back = pow(max(dot(-V, ATMO_SUN), 0.0), 4.0);
        float front = max(dot(N, ATMO_SUN), 0.0);
        float lum = 0.7 + 0.6 * fbm3(vec2(s * 0.22 - uTime * 0.06, v * 0.8 + uSeed));
        vec3 aCol = spec * bandLum * lum * (0.16 + 0.22 * back + 0.06 * front);
        aCol += sky * (0.02 + fres * 0.26) * mix(vec3(1.0), film * 1.7, 0.6);
        aCol += sunSpec * 1.2 * mix(vec3(1.0), film, 0.7);
        // droplets clinging to the film: tiny glints
        vec2 cell = vec2(s * 17.0, v * 11.0);
        vec2 ci = floor(cell);
        float h = hash12(ci + floor(uSeed * 7.0));
        vec2 f = fract(cell) - 0.5 - (vec2(hash12(ci + 3.1), hash12(ci + 7.7)) - 0.5) * 0.5;
        float dotm = smoothstep(0.16, 0.0, length(f));
        float tw = pow(max(dot(R, ATMO_SUN), 0.0), 4.0) * (0.4 + 0.6 * sin(uTime * 2.3 + h * 40.0));
        aCol += vec3(1.0, 0.97, 0.92) * step(0.9, h) * dotm * (tw * 2.2 + 0.06);
        // faint filaments of light running along the band
        float fil = pow(0.5 + 0.5 * sin(v * 26.0 + vnoise(vec2(s * 0.45 - uTime * 0.25, v * 3.0)) * 5.0), 12.0);
        aCol += spec * fil * 0.06;
        // water gathering along the rim, beaded
        float rim = smoothstep(0.8, 0.94, abs(v)) * (1.0 - smoothstep(0.94, 1.0, abs(v)));
        float beads = rim * (0.35 + 0.65 * smoothstep(0.3, 0.95, sin(s * 41.0 + v * 2.0)));
        aCol += beads * (sky * 0.2 + back * 0.2 + sunSpec * 2.0);

        vec3 col = mix(gCol, aCol, lf) * mask;
        float alpha = mix(0.0, 0.04 + 0.1 * fres + beads * 0.08, lf) * mask;
        gl_FragColor = vec4(col, alpha);
        #ifdef USE_FOG
          gl_FragColor *= 1.0 - atmoFogAmount(vW);
        #endif
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    transparent: true,
    premultipliedAlpha: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    fog: true,
  });
}

function shadowMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uHeadS: { value: 0 }, uFade: { value: 1 } },
    vertexShader: /* glsl */ `
      ${GLSL_RIBBON_VERT}
      const vec3 SUN = vec3(${SUN_DIR.x.toFixed(5)}, ${SUN_DIR.y.toFixed(5)}, ${SUN_DIR.z.toFixed(5)});
      varying vec3 vInfo;
      varying float vGroundY;
      void main() {
        vec3 N;
        vec3 p = ribbonPos(N);
        float gy = 0.012;
        vec3 g = p - SUN * ((p.y - gy) / SUN.y);
        vInfo = vec3(aA.w, aA.z, max(p.y - gy, 0.0));
        vGroundY = aD.x - aD.y;
        gl_Position = projectionMatrix * viewMatrix * vec4(g, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform float uHeadS;
      uniform float uFade;
      varying vec3 vInfo;
      varying float vGroundY;
      ${GLSL_SPECTRAL}
      void main() {
        float v = vInfo.x, s = vInfo.y, h = vInfo.z;
        // only rainbows actually above the ground cast here
        float lifted = smoothstep(0.004, 0.04, h) * (1.0 - smoothstep(0.3, 1.2, vGroundY));
        float str = lifted * mix(0.62, 0.14, smoothstep(0.8, 28.0, h));
        float softV = clamp((0.03 + h * 0.014) / ${HALF_W.toFixed(3)}, 0.02, 0.6);
        float edge = 1.0 - smoothstep(1.0 - softV * 1.6, 1.0, abs(v));
        float ends = smoothstep(0.0, 0.55, s) * smoothstep(-0.15, 0.5, uHeadS - s);
        float k = str * edge * ends * uFade;
        vec3 spec = spectralColor(v * 0.53 + 0.5);
        spec = spec / max(max(spec.r, max(spec.g, spec.b)), 0.05);
        vec3 tint = mix(vec3(0.5), spec * 0.55 + 0.12, 0.6);
        vec3 m = mix(vec3(1.0), tint, k);
        float fringe = smoothstep(0.72, 0.92, abs(v)) * (1.0 - smoothstep(0.92, 1.0, abs(v)));
        m += spec * fringe * lifted * (1.0 - smoothstep(0.1, 3.0, h)) * 0.35 * ends * uFade;
        gl_FragColor = vec4(m * 0.5, 1.0);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.CustomBlending,
    blendEquation: THREE.AddEquation,
    blendSrc: THREE.DstColorFactor,
    blendDst: THREE.SrcColorFactor,
    side: THREE.DoubleSide,
    polygonOffset: true,
    polygonOffsetFactor: -3,
    polygonOffsetUnits: -3,
  });
}

// ---------------------------------------------------------------------------
class Chain {
  constructor(sys, id, first) {
    this.sys = sys;
    this.id = id;
    this.first = first;
    this.n = 0;
    this.cap = 0;
    this.headS = 0;
    this.ended = false;
    this.frontStart = -1;
    // peel front: starts slowly at the oldest end and accelerates
    this.vPeel = first ? 0.7 : 2.6;
    this.aPeel = first ? 0.7 : 1.2;
    this.frontIdx = 0;
    this.adhesion = first ? 1.35 : 0.5;
    this.t0 = sys.time;
    this.fade = 1;
    this.dying = false;
    this.dead = false;
    this.settled = false;
    this.seed = Math.random() * 50;
    this.minX = 1e9; this.maxX = -1e9; this.minZ = 1e9; this.maxZ = -1e9;
    this.minY = 0; this.maxY = 0;
    this.loadIdx = -1;
    this.peelCount = 0;

    this.mat = ribbonMaterial();
    this.tmat = tintMaterial();
    this.tmat.uniforms.uSeed.value = 0;
    this.tmat.uniforms.uTime = sys.uTime;
    this.mat.uniforms.uSeed.value = this.seed;
    this.tmat.uniforms.uSeed.value = this.seed;
    this.mat.uniforms.uTime = sys.uTime;
    this.smat = shadowMaterial();
    this.smat.uniforms.uTime = sys.uTime;
    this.mesh = null;
    this.smesh = null;
    this.alloc(160);
  }

  alloc(cap) {
    const old = this;
    const grow = (A, T = Float32Array) => {
      const a = new T(cap);
      if (A) a.set(A.subarray(0, Math.min(A.length, cap)));
      return a;
    };
    this.x = grow(this.x); this.z = grow(this.z);
    this.tx = grow(this.tx); this.tz = grow(this.tz);
    this.t = grow(this.t); this.rel = grow(this.rel);
    this.baseStatic = grow(this.baseStatic);
    this.baseIdx = grow(this.baseIdx);
    this.baseY = grow(this.baseY);
    this.lift = grow(this.lift); this.vel = grow(this.vel);
    this.y = grow(this.y); this.slope = grow(this.slope);
    this.bankS = grow(this.bankS);
    const bc = new Array(cap).fill(null);
    if (this.baseChain) for (let i = 0; i < this.n; i++) bc[i] = this.baseChain[i];
    this.baseChain = bc;

    const nv = cap * COLS;
    const geo = new THREE.BufferGeometry();
    const aA = new Float32Array(nv * 4);
    const aB = new Float32Array(nv * 4);
    const aD = new Float32Array(nv * 4);
    const aOn = new Float32Array(nv);
    if (old.geo) {
      const pn = this.n * COLS * 4;
      aA.set(old.geo.attributes.aA.array.subarray(0, pn));
      aB.set(old.geo.attributes.aB.array.subarray(0, pn));
      aD.set(old.geo.attributes.aD.array.subarray(0, pn));
      aOn.set(old.geo.attributes.aOn.array.subarray(0, this.n * COLS));
    }
    const pos = new Float32Array(nv * 3); // unused by shaders, keeps three happy
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aA', new THREE.BufferAttribute(aA, 4));
    const bAttr = new THREE.BufferAttribute(aB, 4);
    bAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('aB', bAttr);
    const dAttr = new THREE.BufferAttribute(aD, 4);
    dAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('aD', dAttr);
    geo.setAttribute('aOn', new THREE.BufferAttribute(aOn, 1));
    const idx = new Uint32Array((cap - 1) * (COLS - 1) * 6);
    let k = 0;
    for (let i = 0; i < cap - 1; i++) {
      for (let c = 0; c < COLS - 1; c++) {
        const a = i * COLS + c, b = a + 1, d = a + COLS, e = d + 1;
        idx[k++] = a; idx[k++] = b; idx[k++] = d;
        idx[k++] = b; idx[k++] = e; idx[k++] = d;
      }
    }
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e5);
    if (old.geo) old.geo.dispose();
    this.geo = geo;
    this.cap = cap;
    if (this.mesh) {
      this.mesh.geometry = geo;
      this.smesh.geometry = geo;
      this.tmesh.geometry = geo;
    } else {
      this.mesh = new THREE.Mesh(geo, this.mat);
      this.mesh.frustumCulled = false;
      this.mesh.renderOrder = 3.5;
      this.smesh = new THREE.Mesh(geo, this.smat);
      this.smesh.frustumCulled = false;
      this.smesh.renderOrder = 2;
      this.sys.group.add(this.smesh);
      this.tmesh = new THREE.Mesh(geo, this.tmat);
      this.tmesh.frustumCulled = false;
      this.tmesh.renderOrder = 3;
      this.sys.group.add(this.tmesh);
      this.sys.group.add(this.mesh);
    }
    this.updateDrawRange();
  }

  updateDrawRange() {
    const quads = Math.max(0, this.n - 1) * (COLS - 1);
    this.geo.setDrawRange(0, quads * 6);
  }

  // Height of the ribbon centre at fractional stamp index f.
  yAt(f) {
    const n = this.n;
    if (n === 0) return 0;
    if (f <= 0) return this.y[0];
    if (f >= n - 1) return this.y[n - 1];
    const i = Math.floor(f), u = f - i;
    return this.y[i] + (this.y[i + 1] - this.y[i]) * u;
  }
  liftAt(f) {
    const n = this.n;
    if (n === 0) return 0;
    const i = clamp(Math.floor(f), 0, n - 1);
    const j = Math.min(i + 1, n - 1);
    const u = clamp(f - i, 0, 1);
    return this.lift[i] + (this.lift[j] - this.lift[i]) * u;
  }
  centerAt(f, out) {
    const n = this.n;
    const i = clamp(Math.floor(f), 0, Math.max(0, n - 2));
    const j = Math.min(i + 1, n - 1);
    const u = clamp(f - i, 0, 1);
    out.set(
      this.x[i] + (this.x[j] - this.x[i]) * u,
      this.y[i] + (this.y[j] - this.y[i]) * u,
      this.z[i] + (this.z[j] - this.z[i]) * u,
    );
    return out;
  }
  tangentAt(f, out) {
    const i = clamp(Math.round(f), 0, this.n - 1);
    out.set(this.tx[i], 0, this.tz[i]);
    return out;
  }
  sway(i) {
    const y = this.y[i];
    return Math.min(Math.max(y, 0) * 0.008, 0.14) * Math.sin(this.sys.time * 0.8 + this.x[i] * 0.13 + this.z[i] * 0.11);
  }

  writeStatic(i) {
    const aA = this.geo.attributes.aA.array;
    const aB = this.geo.attributes.aB.array;
    const s = i * SPACING;
    for (let c = 0; c < COLS; c++) {
      const v = (c / (COLS - 1)) * 2 - 1;
      const o = (i * COLS + c) * 4;
      aA[o] = this.x[i]; aA[o + 1] = this.z[i]; aA[o + 2] = s; aA[o + 3] = v;
      aB[o] = this.tx[i]; aB[o + 1] = this.tz[i]; aB[o + 2] = this.t[i]; aB[o + 3] = this.rel[i];
    }
    markRange(this.geo.attributes.aA, i, i + 1);
    markRange(this.geo.attributes.aB, i, i + 1);
    const on = this.geo.attributes.aOn;
    for (let c = 0; c < COLS; c++) on.array[i * COLS + c] = this.baseChain[i] ? 1 : 0;
    on.addUpdateRange(i * COLS, COLS);
    on.needsUpdate = true;
  }

  writeRelease(from, to) {
    const aB = this.geo.attributes.aB.array;
    for (let i = from; i < to; i++) {
      for (let c = 0; c < COLS; c++) aB[(i * COLS + c) * 4 + 3] = this.rel[i];
    }
    markRange(this.geo.attributes.aB, from, to);
  }

  writeDynamic(from, to) {
    const aD = this.geo.attributes.aD.array;
    for (let i = from; i < to; i++) {
      const bank = this.bankS[i] * smoothstep(0.3, 3.0, this.lift[i]);
      for (let c = 0; c < COLS; c++) {
        const o = (i * COLS + c) * 4;
        aD[o] = this.y[i]; aD[o + 1] = this.lift[i]; aD[o + 2] = this.slope[i]; aD[o + 3] = bank;
      }
    }
    markRange(this.geo.attributes.aD, from, to);
  }

  addStamp(x, z, base, tx, tz) {
    if (this.n >= this.cap) this.alloc(this.cap * 2);
    const i = this.n++;
    const sys = this.sys;
    this.x[i] = x; this.z[i] = z;
    this.t[i] = sys.time;
    this.tx[i] = tx; this.tz[i] = tz;
    if (i > 0) {
      const dx = x - this.x[i - 1], dz = z - this.z[i - 1];
      const l = Math.hypot(dx, dz) || 1;
      this.tx[i] = dx / l; this.tz[i] = dz / l;
      if (i > 1) {
        const px = this.x[i - 1] - this.x[i - 2], pz = this.z[i - 1] - this.z[i - 2];
        const pl = Math.hypot(px, pz) || 1;
        let ax = px / pl + dx / l, az = pz / pl + dz / l;
        const al = Math.hypot(ax, az) || 1;
        this.tx[i - 1] = ax / al; this.tz[i - 1] = az / al;
        // signed curvature -> gentle banking once airborne
        const cross = (px / pl) * (dz / l) - (pz / pl) * (dx / l);
        this.bankS[i - 1] = clamp(-cross * 1.4, -0.14, 0.14);
      } else {
        this.tx[0] = this.tx[1]; this.tz[0] = this.tz[1];
      }
    }
    if (base.chain) {
      this.baseChain[i] = base.chain;
      this.baseIdx[i] = base.idx;
      this.baseY[i] = base.chain.yAt(base.idx);
    } else {
      this.baseChain[i] = null;
      this.baseStatic[i] = base.y;
      this.baseY[i] = base.y;
    }
    this.lift[i] = 0;
    this.vel[i] = 0;
    this.y[i] = this.baseY[i] + (base.chain ? LAYER_EPS : 0.006);
    this.slope[i] = 0;
    this.bankS[i] = 0;
    this.rel[i] = this.frontStart >= 0 ? Math.max(this.t[i] + DELAY, this.frontStart + this.frontTime(i * SPACING)) : 1e6;
    this.headS = i * SPACING;
    this.mat.uniforms.uHeadS.value = this.headS;
    this.smat.uniforms.uHeadS.value = this.headS;
    this.tmat.uniforms.uHeadS.value = this.headS;
    this.minX = Math.min(this.minX, x); this.maxX = Math.max(this.maxX, x);
    this.minZ = Math.min(this.minZ, z); this.maxZ = Math.max(this.maxZ, z);
    if (i > 0) this.writeStatic(i - 1);
    this.writeStatic(i);
    this.writeDynamic(Math.max(0, i - 1), i + 1);
    this.updateDrawRange();
    if (i > 0) sys.hashSegment(this, i - 1);
    this.settled = false;
  }

  // time for the peel front to travel s metres from the oldest end
  frontTime(s) {
    const v = this.vPeel, a = this.aPeel;
    return (-v + Math.sqrt(v * v + 2 * a * s)) / a;
  }

  // position of the peel front (metres from the oldest end) at time t
  frontS(t) {
    if (this.frontStart < 0 || t < this.frontStart) return 0;
    const dt = t - this.frontStart;
    return this.vPeel * dt + 0.5 * this.aPeel * dt * dt;
  }

  startFront(delay) {
    this.frontStart = this.sys.time + delay;
    for (let i = 0; i < this.n; i++) {
      this.rel[i] = Math.max(this.t[i] + DELAY, this.frontStart + this.frontTime(i * SPACING));
    }
    this.writeRelease(0, this.n);
  }

  update(dt) {
    const sys = this.sys;
    const time = sys.time;
    const n = this.n;
    if (n < 2) return;

    if (this.dying) {
      this.fade -= dt / 2.6;
      this.mat.uniforms.uFade.value = Math.max(this.fade, 0);
      this.smat.uniforms.uFade.value = Math.max(this.fade, 0);
      this.tmat.uniforms.uFade.value = Math.max(this.fade, 0);
      if (this.fade <= 0) { sys.removeChain(this); return; }
      if (sys.particles && Math.random() < 0.8) {
        const i = Math.floor(Math.random() * n);
        sys.emitMist(this, i, 2);
      }
    }

    // Peel front: begins at the oldest end once enough has been walked.
    if (this.frontStart < 0) {
      const age = time - this.t[0];
      let ok = age >= DELAY;
      if (this.first) {
        // The very first time, wait until the walker has made a real path and
        // paused to look at it (or has kept going for a long while).
        const idle = sys.walkerIdle;
        ok = (this.headS >= 4.0 && age >= 3.4 && (idle || age > 14)) ||
          (this.headS >= 1.2 && age >= 8 && idle);
      }
      if (ok) {
        this.startFront(this.first ? 1.25 : 0.2);
        if (this.first && sys.onFirstPeel) sys.onFirstPeel(this);
      }
    }

    // Resolve bases (a rainbow painted on another rainbow rides on it).
    let baseMoved = false;
    for (let i = 0; i < n; i++) {
      const bc = this.baseChain[i];
      if (bc) {
        if (bc.dead) {
          this.baseStatic[i] = this.baseY[i];
          this.baseChain[i] = null;
        } else {
          const y = bc.yAt(this.baseIdx[i]);
          if (Math.abs(y - this.baseY[i]) > 1e-5) baseMoved = true;
          this.baseY[i] = y;
          if (!bc.settled) baseMoved = true;
        }
      }
    }

    const active = !this.settled || baseMoved || this.loadIdx >= 0 || !this.ended;
    if (!active) return;

    const H = this.headS;
    const w2 = W0 * W0, c2 = 2 * ZETA * W0;
    // the attached boundary: stamps before it have been released (a prefix)
    let k = this.frontIdx;
    while (k < n && time >= this.rel[k]) k++;
    this.frontIdx = k;
    const attachedS = k * SPACING;
    const headBase = this.baseY[n - 1];
    let maxDelta = 0;
    let peel = 0;
    let tension = 0;
    let rising = 0;
    const lift = this.lift, vel = this.vel;
    const load = this.loadIdx;
    const steps = dt > 1 / 45 ? 2 : 1;
    const h = dt / steps;
    for (let st = 0; st < steps; st++) {
      for (let i = 0; i < n; i++) {
        const r = this.rel[i];
        // the newest end stays stuck where it was drawn: every rainbow keeps a foot
        if (time < r || i >= n - 2) { lift[i] = 0; vel[i] = 0; continue; }
        const s = i * SPACING;
        // final height grows with the distance walked since; near the
        // attached boundary the film can only lift at a peeling angle
        let tgt = Math.min(L_CAP, K_SLOPE * (H - s), K_PEEL * (attachedS - s) + 0.04);
        // painted on a sloping rainbow: never steeper than a walkable ramp
        // measured from where the foot is stuck
        tgt = Math.min(tgt, Math.max(0, headBase + K_SLOPE * (H - s) - this.baseY[i]));
        const age = time - r;
        if (age < this.adhesion) {
          tgt = Math.min(tgt, 0.045 * (age / this.adhesion));
          peel++;
        }
        if (load >= 0) {
          const d = (i - load) * SPACING;
          tgt -= 0.075 * Math.exp(-(d * d) / 0.5) * smoothstep(0.05, 0.6, lift[i]);
        }
        const lp = i > 0 ? lift[i - 1] : lift[i];
        const ln = i < n - 1 ? lift[i + 1] : lift[i];
        const vp = i > 0 ? vel[i - 1] : vel[i];
        const vn = i < n - 1 ? vel[i + 1] : vel[i];
        let a = w2 * (tgt - lift[i]) - c2 * vel[i] + TENSION * (lp + ln - 2 * lift[i]) + VISC * (vp + vn - 2 * vel[i]);
        let v = vel[i] + a * h;
        if (v > 2.8) v = 2.8; else if (v < -2.8) v = -2.8;
        vel[i] = v;
        lift[i] = Math.max(0, lift[i] + v * h);
        if (st === 0) {
          const dl = Math.abs(tgt - lift[i]);
          if (dl > maxDelta) maxDelta = dl;
          tension += Math.abs(a) * 0.01;
          if (v > 0.35) rising++;
        }
      }
    }
    // apply and derive slope; upload only the stretch that moved
    let minY = 1e9, maxY = -1e9;
    let d0 = n, d1 = -1;
    for (let i = 0; i < n; i++) {
      const eps = this.baseChain[i] ? LAYER_EPS : 0.006;
      const y = this.baseY[i] + lift[i] + eps;
      if (Math.abs(y - this.y[i]) > 2e-4) { if (i < d0) d0 = i; d1 = i; }
      this.y[i] = y;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
    this.minY = minY; this.maxY = maxY;
    if (d1 >= d0) {
      const a0 = Math.max(0, d0 - 1), a1 = Math.min(n, d1 + 2);
      for (let i = a0; i < a1; i++) {
        const a = Math.max(0, i - 1), b = Math.min(n - 1, i + 1);
        this.slope[i] = (this.y[b] - this.y[a]) / (Math.max(1, b - a) * SPACING);
      }
      this.writeDynamic(a0, a1);
    }

    // droplets shaken from edges while lifting fast
    if (rising > 0 && sys.particles) {
      const count = Math.min(3, rising * dt * 0.9 + Math.random() * 0.5) | 0;
      for (let k = 0; k < count; k++) {
        const i = Math.floor(Math.random() * n);
        if (vel[i] > 0.3) sys.emitDrip(this, i);
      }
    }

    // unsticking film releases a faint coloured mist at the peel front
    if (peel > 0 && sys.particles && Math.random() < dt * 6) {
      const i = Math.min(n - 1, Math.max(0, this.frontIdx - 1));
      sys.emitMist(this, i, 1);
    }
    this.peelCount = peel;
    sys.peelActivity += peel;
    sys.tension += rising;
    const fullyReleased = this.frontStart >= 0 && time > this.rel[n - 1] + this.adhesion;
    this.settled = this.ended && fullyReleased && maxDelta < 0.003 && load < 0 && !baseMoved;
  }
}

// ---------------------------------------------------------------------------
export class RainbowSystem {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.chains = [];
    this.nextId = 1;
    this.time = 0;
    this.uTime = { value: 0 };
    this.current = null;
    this.walkerIdle = false;
    this.firstDone = false;
    this.onFirstPeel = null;
    this.particles = null;
    this.hash = new Map();
    this.peelActivity = 0;
    this.tension = 0;
    this.presence = 0;
    this.lightColor = new THREE.Color(1, 1, 1);
    this.lastPaint = new THREE.Vector3();
    this.footprints = new Footprints(scene, this.uTime);
  }

  // ---- spatial hash of segments (xz only; xz never changes) ----
  key(ix, iz) { return (ix + 4096) * 8192 + (iz + 4096); }
  hashSegment(chain, i) {
    const x0 = chain.x[i], z0 = chain.z[i], x1 = chain.x[i + 1], z1 = chain.z[i + 1];
    const cs = 2;
    const pad = HALF_W + 0.2;
    const ax = Math.floor((Math.min(x0, x1) - pad) / cs), bx = Math.floor((Math.max(x0, x1) + pad) / cs);
    const az = Math.floor((Math.min(z0, z1) - pad) / cs), bz = Math.floor((Math.max(z0, z1) + pad) / cs);
    for (let ix = ax; ix <= bx; ix++) {
      for (let iz = az; iz <= bz; iz++) {
        const k = this.key(ix, iz);
        let list = this.hash.get(k);
        if (!list) { list = []; this.hash.set(k, list); }
        list.push(chain, i);
      }
    }
  }
  rebuildHash() {
    this.hash.clear();
    for (const c of this.chains) for (let i = 0; i < c.n - 1; i++) this.hashSegment(c, i);
  }

  // All ribbon surfaces under (x, z). Returns [{chain, idx, y, v, lift}]
  querySupport(x, z, out, exclude = null) {
    out.length = 0;
    const list = this.hash.get(this.key(Math.floor(x / 2), Math.floor(z / 2)));
    if (!list) return out;
    // A rainbow can pass over the same spot more than once (a hairpin or a
    // loop), so keep one hit per separate pass, not one per rainbow.
    for (let k = 0; k < list.length; k += 2) {
      const c = list[k], i = list[k + 1];
      if (c === exclude || c.dead || (c.dying && c.fade < 0.5)) continue;
      if (i >= c.n - 1) continue;
      const ax = c.x[i], az = c.z[i];
      const dx = c.x[i + 1] - ax, dz = c.z[i + 1] - az;
      const l2 = dx * dx + dz * dz || 1e-6;
      let u = ((x - ax) * dx + (z - az) * dz) / l2;
      if (u < -0.15 || u > 1.15) continue;
      u = clamp(u, 0, 1);
      const l = Math.sqrt(l2);
      const sx = -dz / l, sz = dx / l;
      const d = (x - ax) * sx + (z - az) * sz;
      const f = i + u;
      const sway = c.sway(i);
      const v = (d - sway) / HALF_W;
      if (Math.abs(v) > 0.97) continue;
      const s = f * SPACING;
      if (s < 0.25 || s > c.headS - 0.05) continue;
      const lift = c.lift[i] + (c.lift[i + 1] - c.lift[i]) * u;
      const lfk = smoothstep(0.03, 0.8, lift);
      const bank = c.bankS[i] * smoothstep(0.3, 3.0, lift);
      const y = c.yAt(f) - 0.06 * v * v * lfk + bank * v * HALF_W;
      let merged = false;
      for (const r of out) {
        if (r.chain === c && Math.abs(r.idx - f) < 3) {
          if (Math.abs(v) < Math.abs(r.v)) { r.idx = f; r.y = y; r.v = v; r.lift = lift; }
          merged = true;
          break;
        }
      }
      if (!merged) out.push({ chain: c, idx: f, y, v, lift });
    }
    return out;
  }

  // Ray pick with generous width for small fingers.
  pick(ray, maxT = 400) {
    let best = null;
    const o = ray.origin, d = ray.direction;
    const A = new THREE.Vector3(), B = new THREE.Vector3(), C = new THREE.Vector3(), D = new THREE.Vector3();
    const tri = new THREE.Triangle();
    const hit = new THREE.Vector3();
    const inflate = 1.7;
    for (const c of this.chains) {
      if (c.dead || c.dying || c.n < 3) continue;
      // coarse AABB
      const box = new THREE.Box3(
        new THREE.Vector3(c.minX - 2, c.minY - 1, c.minZ - 2),
        new THREE.Vector3(c.maxX + 2, c.maxY + 1, c.maxZ + 2),
      );
      if (!ray.intersectsBox(box)) continue;
      for (let i = 1; i < c.n - 2; i++) {
        // only rainbows visibly lifted are pickable as rainbows
        if (c.lift[i] < 0.12 && c.lift[i + 1] < 0.12) continue;
        const w0 = HALF_W * inflate;
        const s0x = -c.tz[i] * w0, s0z = c.tx[i] * w0;
        const s1x = -c.tz[i + 1] * w0, s1z = c.tx[i + 1] * w0;
        A.set(c.x[i] - s0x, c.y[i], c.z[i] - s0z);
        B.set(c.x[i] + s0x, c.y[i], c.z[i] + s0z);
        C.set(c.x[i + 1] - s1x, c.y[i + 1], c.z[i + 1] - s1z);
        D.set(c.x[i + 1] + s1x, c.y[i + 1], c.z[i + 1] + s1z);
        let r = ray.intersectTriangle(A, B, C, false, hit);
        if (!r) r = ray.intersectTriangle(B, D, C, false, hit);
        if (r) {
          const t = hit.distanceTo(o);
          if (t < maxT && (!best || t < best.t)) {
            best = { chain: c, idx: i + 0.5, t, point: hit.clone() };
          }
        }
      }
    }
    return best;
  }

  // Nearest stamp of chain c that is reachable from height y (for stepping on).
  // Only parts that have finished peeling count (a moving peel front is no
  // place to step on).
  entryPoint(c, x, y, z, maxDy = 0.4, minLift = 0.1) {
    let best = -1, bd = 1e9;
    const settled = this.time - c.adhesion - 0.3;
    for (let i = 3; i < c.n - 2; i++) {
      // a rainbow lying on another rainbow can be stepped onto anywhere
      const ml = c.baseChain[i] ? 0 : minLift;
      if (Math.abs(c.y[i] - y) > maxDy || c.lift[i] < ml || c.rel[i] > settled) continue;
      const d = (c.x[i] - x) ** 2 + (c.z[i] - z) ** 2;
      if (d < bd) { bd = d; best = i; }
    }
    return best;
  }

  // ---- painting ----
  paint(x, z, base, heading) {
    let c = this.current;
    if (!c) {
      if (this.chains.length >= MAX_CHAINS) this.cull(true);
      c = new Chain(this, this.nextId++, !this.firstDone);
      this.firstDone = true;
      this.chains.push(c);
      this.current = c;
      c.addStamp(x, z, base, Math.sin(heading), Math.cos(heading));
      this.lastPaint.set(x, 0, z);
      return c;
    }
    let lx = c.x[c.n - 1], lz = c.z[c.n - 1];
    let dx = x - lx, dz = z - lz;
    let d = Math.hypot(dx, dz);
    let guard = 0;
    while (d >= SPACING && guard++ < 20) {
      const k = SPACING / d;
      lx += dx * k; lz += dz * k;
      c.addStamp(lx, lz, base, 0, 0);
      dx = x - lx; dz = z - lz;
      d = Math.hypot(dx, dz);
    }
    this.cull(false);
    return c;
  }

  endChain() {
    if (this.current) {
      this.current.ended = true;
      if (this.current.n < 3) {
        // a single step: let it fade instead of lingering as a speck
        this.current.dying = true;
      }
    }
    this.current = null;
  }

  total() {
    let t = 0;
    for (const c of this.chains) if (!c.dead) t += c.n;
    return t;
  }

  cull(force) {
    let over = this.total() - MAX_STAMPS;
    if (!force && over <= 0) return;
    for (const c of this.chains) {
      if (c === this.current || c.dying || c.dead || c.loadIdx >= 0) continue;
      c.dying = true;
      over -= c.n;
      if (over <= 0 && !force) break;
      if (force) break;
    }
  }

  removeChain(c) {
    c.dead = true;
    this.group.remove(c.mesh);
    this.group.remove(c.smesh);
    this.group.remove(c.tmesh);
    c.tmat.dispose();
    c.geo.dispose();
    c.mat.dispose();
    c.smat.dispose();
    const i = this.chains.indexOf(c);
    if (i >= 0) this.chains.splice(i, 1);
    this.rebuildHash();
  }

  emitDrip(c, i) {
    const side = Math.random() < 0.5 ? -1 : 1;
    const v = side * (0.85 + Math.random() * 0.15);
    const x = c.x[i] - c.tz[i] * v * HALF_W, z = c.z[i] + c.tx[i] * v * HALF_W;
    spectral(v * 0.5 + 0.5, tmpC);
    this.particles.drip(x, c.y[i] - 0.05, z, tmpC);
  }
  emitMist(c, i, n) {
    for (let k = 0; k < n; k++) {
      const v = Math.random() * 2 - 1;
      const x = c.x[i] - c.tz[i] * v * HALF_W, z = c.z[i] + c.tx[i] * v * HALF_W;
      spectral(v * 0.5 + 0.5, tmpC);
      this.particles.mist(x, c.y[i], z, tmpC, 0.6);
    }
  }

  update(dt, time, loadChain, loadIdx) {
    this.time = time;
    this.uTime.value = time;
    this.peelActivity = 0;
    this.tension = 0;
    for (const c of this.chains) c.loadIdx = c === loadChain ? loadIdx : -1;
    // update in creation order so bases resolve before the layers on them
    const list = this.chains.slice();
    for (const c of list) if (!c.dead) c.update(dt);
    let lifted = 0;
    for (const c of this.chains) {
      for (let i = 0; i < c.n; i += 4) if (c.lift[i] > 0.4) lifted += 4;
    }
    this.presence = clamp(lifted / 500, 0, 1);
    this.footprints.update(time);
  }

  // Place the three coloured bounce lights on the rainbow nearest to `p`.
  updateBounceLights(lights, p, dt) {
    let best = null, bi = -1, bd = 14 * 14;
    for (const c of this.chains) {
      if (c.dead || c.n < 4) continue;
      if (p.x < c.minX - 14 || p.x > c.maxX + 14 || p.z < c.minZ - 14 || p.z > c.maxZ + 14) continue;
      for (let i = 1; i < c.n - 1; i += 2) {
        if (c.lift[i] < 1.0) continue;
        const dx = c.x[i] - p.x, dy = c.y[i] - p.y, dz = c.z[i] - p.z;
        const d = dx * dx + dy * dy * 0.5 + dz * dz;
        if (d < bd) { bd = d; best = c; bi = i; }
      }
    }
    const vs = [-0.8, 0.0, 0.8];
    const offs = [0, 12, -12];
    let avg = this.lightColor.setRGB(0, 0, 0);
    for (let k = 0; k < 3; k++) {
      const L = lights[k];
      let target = 0;
      if (best) {
        const i = clamp(bi + offs[k], 1, best.n - 2);
        const v = vs[k];
        const x = best.x[i] - best.tz[i] * v * HALF_W, z = best.z[i] + best.tx[i] * v * HALF_W;
        L.position.set(x, best.y[i] - 0.35, z);
        spectral(v * 0.5 + 0.5, tmpC);
        const m = Math.max(tmpC.r, tmpC.g, tmpC.b) || 1;
        L.color.setRGB(tmpC.r / m, tmpC.g / m, tmpC.b / m);
        const dist = Math.sqrt(bd);
        target = 1.5 * smoothstep(1.0, 3.0, best.lift[i]) * (1 - smoothstep(6, 14, dist)) * best.fade;
        avg.r += L.color.r; avg.g += L.color.g; avg.b += L.color.b;
      }
      L.intensity += (target - L.intensity) * (1 - Math.exp(-3 * dt));
    }
    if (best) avg.multiplyScalar(1 / 3); else avg.setRGB(1, 1, 1);
  }
}

// ---------------------------------------------------------------------------
// Boot prints: the instant the sole meets the ground, colour blooms there.
// ---------------------------------------------------------------------------
class Footprints {
  constructor(scene, uTime) {
    this.max = 24;
    this.i = 0;
    const geo = new THREE.PlaneGeometry(0.2, 0.3);
    geo.rotateX(-Math.PI / 2);
    this.data = new Float32Array(this.max * 4);
    for (let k = 0; k < this.max; k++) this.data[k * 4 + 2] = -100;
    this.attr = new THREE.InstancedBufferAttribute(this.data, 4);
    this.attr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('aF', this.attr);
    const mat = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {}]),
      vertexShader: /* glsl */ `
        attribute vec4 aF; // side, heading, time, y
        uniform float uTime;
        varying vec2 vL;
        varying float vAge;
        varying float vSide;
        varying vec3 vW;
        #include <fog_pars_vertex>
        void main() {
          vL = position.xz;
          vAge = uTime - aF.z;
          vSide = aF.x;
          vec4 w = instanceMatrix * vec4(position, 1.0);
          vW = w.xyz;
          vec4 mvPosition = viewMatrix * w;
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        varying vec2 vL;
        varying float vAge;
        varying float vSide;
        varying vec3 vW;
        #include <fog_pars_fragment>
        ${GLSL_NOISE}
        ${GLSL_SPECTRAL}
        float sdSole(vec2 p) {
          p.x *= vSide;
          float heel = length(p - vec2(0.004, -0.058)) - 0.032;
          float ball = length((p - vec2(-0.004, 0.045)) * vec2(1.0, 0.8)) - 0.037;
          float k = 0.035;
          float h = clamp(0.5 + 0.5 * (ball - heel) / k, 0.0, 1.0);
          return mix(ball, heel, h) - k * h * (1.0 - h);
        }
        void main() {
          if (vAge < 0.0 || vAge > 1.4) discard;
          float d = sdSole(vL);
          float grow = 1.0 - exp(-vAge * 14.0);
          float print = smoothstep(0.006, -0.004, d);
          float bleed = smoothstep(0.03 + vAge * 0.04, -0.01, d) * 0.5;
          float tread = 0.7 + 0.3 * step(0.5, fract(vL.y * 60.0));
          float a = max(print * tread, bleed) * grow * (1.0 - smoothstep(0.3, 1.4, vAge));
          vec3 V = normalize(cameraPosition - vW);
          vec3 film = thinFilm(360.0 + 300.0 * vnoise(vW.xz * 18.0) + vAge * 60.0, abs(V.y));
          vec3 spec = spectralColor(0.5 + vL.x * 6.0 * vSide);
          spec = spec / max(max(spec.r, max(spec.g, spec.b)), 0.05);
          vec3 col = spec * 0.3 + film * 0.12;
          gl_FragColor = vec4(col * a, a * 0.3);
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
      polygonOffset: true,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
    });
    mat.uniforms.uTime = uTime;
    this.mesh = new THREE.InstancedMesh(geo, mat, this.max);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 4;
    const m = new THREE.Matrix4();
    for (let k = 0; k < this.max; k++) this.mesh.setMatrixAt(k, m.makeTranslation(0, -100, 0));
    scene.add(this.mesh);
    this.m = new THREE.Matrix4();
    this.q = new THREE.Quaternion();
    this.up = new THREE.Vector3(0, 1, 0);
    this.one = new THREE.Vector3(1, 1, 1);
    this.p = new THREE.Vector3();
  }
  add(x, y, z, heading, side, time) {
    const k = this.i++ % this.max;
    this.q.setFromAxisAngle(this.up, heading);
    this.m.compose(this.p.set(x, y + 0.012, z), this.q, this.one);
    this.mesh.setMatrixAt(k, this.m);
    this.mesh.instanceMatrix.needsUpdate = true;
    this.data[k * 4] = side;
    this.data[k * 4 + 1] = heading;
    this.data[k * 4 + 2] = time;
    this.data[k * 4 + 3] = y;
    this.attr.needsUpdate = true;
  }
  update() {}
}
