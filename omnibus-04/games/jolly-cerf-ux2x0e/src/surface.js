import * as THREE from 'three';
import { G, LIGHT_GLSL } from './materials.js';
import { MAP_RES, MAP_X0, MAP_X1, MAP_Z0, MAP_Z1, HW, COLORS } from './config.js';
import { makeFbm, mulberry32 } from './noise.js';

const MAX_RIPPLES = 10;
const MAX_SHADOWS = 8;

const SURF_VERT = /* glsl */`
varying vec3 vWorld;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vWorld = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;

const SURF_FRAG = /* glsl */`
#include <common>
${LIGHT_GLSL}
uniform sampler2D uMap;
uniform sampler2D uNoise;
uniform vec4 uMapRect;
uniform vec3 uFloorColor;
uniform vec3 uGrimeColor;
uniform vec3 uBrass;
uniform vec4 uRipples[${MAX_RIPPLES}];
uniform vec4 uShadows[${MAX_SHADOWS}];
uniform vec4 uPress;
uniform float uCamSide;
uniform float uSeeThrough;
uniform sampler2D uFar;
uniform vec2 uScreenInv;
uniform float uFarOn;
varying vec3 vWorld;

void main() {
  vec2 xz = vWorld.xz;
  vec2 uv = vec2((xz.x - uMapRect.x) * uMapRect.z, (xz.y - uMapRect.y) * uMapRect.w);
  vec4 m = texture2D(uMap, uv);
  float dirt = m.r, pol = m.g, wet = m.b, mem = m.a;

  vec4 nA = texture2D(uNoise, xz * 0.21);
  vec4 nB = texture2D(uNoise, xz * 0.83 + vec2(0.37, 0.11));
  vec4 nC = texture2D(uNoise, xz * 2.9 + vec2(0.71, 0.53));
  vec4 nD = texture2D(uNoise, xz * 9.7 + vec2(0.13, 0.91));

  // grime edge: threshold the smooth map against layered noise for a ragged, organic boundary.
  // Uniform dirt (>= 0.5) never dips below the threshold, so only cleaned edges get ragged.
  float d = dirt + (nB.g - 0.5) * 0.18 + (nC.b - 0.5) * 0.14 + (nD.r - 0.5) * 0.08;
  float dv = smoothstep(0.14, 0.36, d);
  float heavy = smoothstep(0.66, 1.0, dirt + (nC.r - 0.5) * 0.1);
  float haze = smoothstep(0.06, 0.4, dirt);

  vec3 v = normalize(cameraPosition - vWorld);
  float cosT = abs(v.y);
  float side = uCamSide;
  vec3 lp = vec3(xz.x, 0.0, xz.y);
  vec3 lv = vec3(v.x, abs(v.y), v.z);
  vec3 light = corridorLight(lp, vec3(0.0, 1.0, 0.0), lv, side, 0.0, 1.0);
  vec3 sheen = corridorLight(lp, vec3(0.0, 1.0, 0.0), lv, side, 1.0, 14.0) - light;

  // terrazzo
  float chipL = step(0.80, nD.a) * 0.10;
  float chipD = step(0.83, nD.g) * 0.16;
  vec3 base = uFloorColor * (0.94 + 0.10 * (nA.r - 0.5)) * (1.0 + chipL - chipD);
  // dull dusty film over the terrazzo, darker where it is ground in
  vec3 dusty = base * 0.58 + vec3(0.05, 0.045, 0.036) * (0.8 + 0.4 * nA.g);
  vec3 grime = mix(dusty, uGrimeColor * (0.85 + 0.3 * nA.g) * (0.9 + 0.2 * nC.r), heavy);
  grime *= 0.93 + 0.1 * (nB.b - 0.5);

  // divider strips every 1.2 m
  vec2 g = abs(fract(xz / 1.2 + 0.5) - 0.5) * 1.2;
  float seam = 1.0 - smoothstep(0.006, 0.014, min(g.x, g.y));

  // contact shadows / ambient occlusion
  float sh = 1.0;
  for (int i = 0; i < ${MAX_SHADOWS}; i++) {
    vec4 s = uShadows[i];
    if (s.w <= 0.0) continue;
    vec2 dp = (xz - s.xy) / s.z;
    sh *= 1.0 - s.w * exp(-dot(dp, dp) * 2.2);
  }
  float ao = 1.0 - 0.38 * exp(-(uHW - abs(xz.x)) * 6.5);

  vec3 col = mix(base, grime, dv);
  col = mix(col, uBrass, seam * (1.0 - dv * 0.8) * (1.0 - mem) * 0.85);
  col *= light * sh * ao;

  // reflectance of the floor (the view into the other corridor)
  float R = mix(0.34, 0.82, pol);
  R = mix(R, 0.975, mem);
  float fres = pow(1.0 - cosT, 5.0);
  R += (1.0 - R) * fres * 0.75;
  float clean = (1.0 - dv) * (1.0 - 0.85 * haze);
  R *= clean;
  R = max(R, uSeeThrough * (0.6 + 0.4 * fres));   // even dull floor gives back a little
  R *= mix(1.0, 0.72, sh < 1.0 ? (1.0 - sh) : 0.0);

  // wet film: darker, milky, glossy, and it muddies the reflection until it dries
  float film = wet * (0.55 + 0.45 * nB.r);
  R *= 1.0 - 0.5 * film * (1.0 - mem);
  col = mix(col, col * 0.78 + light * vec3(0.05, 0.055, 0.06), film * 0.6);

  // ripples on wet / thin / membrane areas
  float rippleable = (1.0 - dv) * clamp(max(mem, max(wet * 0.8, smoothstep(0.7, 1.0, pol) * 0.5)), 0.0, 1.0);
  float wave = 0.0;
  for (int i = 0; i < ${MAX_RIPPLES}; i++) {
    vec4 r = uRipples[i];
    float age = uTime - r.z;
    if (r.w <= 0.0 || age < 0.0 || age > 3.5) continue;
    float dd = length(xz - r.xy);
    float front = age * 0.9;
    float env = exp(-pow((dd - front) * 3.2, 2.0)) * exp(-age * 1.1);
    wave += sin((dd - front) * 24.0) * env * r.w;
  }
  // tool pressing into a thin surface: a ring of surface tension around it
  if (uPress.w > 0.0) {
    float dd = length(xz - uPress.xy);
    float ring = exp(-pow((dd - uPress.z) * 9.0, 2.0));
    wave += (ring * 0.9 - smoothstep(uPress.z, 0.0, dd) * 0.25) * uPress.w;
  }
  wave *= rippleable * 0.55;
  float shimmer = mem * (0.5 + 0.5 * sin(uTime * 1.3 + nB.r * 9.0 + nA.b * 6.0)) * 0.06;

  float alpha = 1.0 - R;
  alpha = clamp(alpha + max(-wave, 0.0) * 0.07, 0.0, 1.0);
  // the divider strips and fine swirl marks sit ON the glossy floor, over whatever is seen in it
  float swirl = pow(abs(sin(length(fract(xz * 0.9) - 0.5) * 80.0 + nC.g * 14.0)), 24.0) * pol * (1.0 - dv) * (1.0 - mem);
  alpha = max(alpha, seam * 0.9 * (1.0 - mem));
  alpha = clamp(alpha + swirl * 0.05 + (nD.a - 0.5) * 0.05 * (1.0 - mem), 0.0, 1.0);

  // sparkles along unfinished grime edges
  float edge = dv * (1.0 - dv) * 4.0;
  float spark = edge * pow(nD.b, 10.0) * (0.5 + 0.5 * sin(uTime * 2.7 + nA.r * 40.0)) * 0.8;

  vec3 hl = light * (max(wave, 0.0) * 0.30 + shimmer + spark) + sheen * (film * 0.9 + 0.12 * (1.0 - dv) * pol);

  // where the surface is wet, thin or rippling, show the far side through a wobbling lens
  float wob = clamp(film * 1.3 + mem * 0.8 + abs(wave) * 2.5, 0.0, 1.0) * uFarOn * (1.0 - dv);
  vec3 farC = vec3(0.0);
  if (wob > 0.01) {
    vec2 suv = gl_FragCoord.xy * uScreenInv;
    vec2 gw = vec2(dFdx(wave), dFdy(wave));
    vec2 off = gw * 0.35 + (vec2(nB.r, nB.g) - 0.5) * (0.006 * mem + 0.004 * film) * vec2(sin(uTime * 1.1 + nA.b * 6.0), cos(uTime * 0.9 + nA.r * 6.0));
    float br = film * 0.007 + mem * 0.0015;
    farC = texture2D(uFar, suv + off).rgb * 2.0;
    farC += texture2D(uFar, suv + off + vec2(br, 0.0)).rgb;
    farC += texture2D(uFar, suv + off - vec2(br, 0.0)).rgb;
    farC += texture2D(uFar, suv + off + vec2(0.0, br)).rgb;
    farC += texture2D(uFar, suv + off - vec2(0.0, br)).rgb;
    farC /= 6.0;
  }

  vec3 outCol = col;
#ifdef TONE_MAPPING
  outCol = toneMapping(outCol);
  hl = toneMapping(hl);
  farC = toneMapping(farC);
#endif
  outCol = linearToOutputTexel(vec4(outCol, 1.0)).rgb;
  hl = linearToOutputTexel(vec4(hl, 1.0)).rgb;
  farC = linearToOutputTexel(vec4(farC, 1.0)).rgb;
  float tw = (1.0 - alpha) * wob;
  gl_FragColor = vec4(outCol * alpha + farC * tw + hl, alpha + tw);
}
`;

export class Surface {
  constructor(noiseTex) {
    this.nx = Math.ceil((MAP_X1 - MAP_X0) * MAP_RES);
    this.nz = Math.ceil((MAP_Z1 - MAP_Z0) * MAP_RES);
    const n = this.nx * this.nz;
    this.dirt = new Float32Array(n);
    this.polish = new Float32Array(n);
    this.wet = new Float32Array(n);
    this.mem = new Float32Array(n);
    this.firstClean = new Float32Array(n); // time a cell first became clean (-1 = never)
    this.bytes = new Uint8Array(n * 4);
    this.tex = new THREE.DataTexture(this.bytes, this.nx, this.nz, THREE.RGBAFormat);
    this.tex.magFilter = THREE.LinearFilter;
    this.tex.minFilter = THREE.LinearFilter;
    this.tex.generateMipmaps = false;
    this.tex.needsUpdate = true;
    this.rowMin = 0; this.rowMax = this.nz - 1;
    this.wetMin = this.nz; this.wetMax = -1;

    this.ripples = [];
    for (let i = 0; i < MAX_RIPPLES; i++) this.ripples.push(new THREE.Vector4(0, 0, -99, 0));
    this.rippleIdx = 0;
    this.shadows = [];
    for (let i = 0; i < MAX_SHADOWS; i++) this.shadows.push(new THREE.Vector4(0, 0, 1, 0));

    this.uniforms = {
      ...G,
      uMap: { value: this.tex },
      uNoise: { value: noiseTex },
      uMapRect: { value: new THREE.Vector4(MAP_X0, MAP_Z0, 1 / (MAP_X1 - MAP_X0), 1 / (MAP_Z1 - MAP_Z0)) },
      uFloorColor: { value: new THREE.Color(COLORS.floor) },
      uGrimeColor: { value: new THREE.Color(COLORS.grime) },
      uBrass: { value: new THREE.Color(0xb39a66) },
      uRipples: { value: this.ripples },
      uShadows: { value: this.shadows },
      uPress: { value: new THREE.Vector4(0, 0, 0.4, 0) },
      uCamSide: { value: 1 },
      uSeeThrough: { value: 0.07 },
      uFar: { value: null },
      uScreenInv: { value: new THREE.Vector2(1, 1) },
      uFarOn: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: SURF_VERT,
      fragmentShader: SURF_FRAG,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.CustomBlending,
      blendSrc: THREE.OneFactor,
      blendDst: THREE.OneMinusSrcAlphaFactor,
      blendSrcAlpha: THREE.OneFactor,
      blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
    });
    const geo = new THREE.PlaneGeometry(MAP_X1 - MAP_X0, MAP_Z1 - MAP_Z0, 1, 1);
    geo.rotateX(-Math.PI / 2);
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.position.set((MAP_X0 + MAP_X1) / 2, 0, (MAP_Z0 + MAP_Z1) / 2);
    this.mesh.renderOrder = 10;
    this.mesh.frustumCulled = false;
  }

  idx(i, j) { return j * this.nx + i; }
  cellX(i) { return MAP_X0 + (i + 0.5) / MAP_RES; }
  cellZ(j) { return MAP_Z0 + (j + 0.5) / MAP_RES; }
  toI(x) { return Math.floor((x - MAP_X0) * MAP_RES); }
  toJ(z) { return Math.floor((z - MAP_Z0) * MAP_RES); }

  // Paint a fresh layer of grime. `layout` steers where the tempting smudges are.
  reset(layout, seed, history) {
    const fbm = makeFbm(seed);
    const rnd = mulberry32(seed * 31 + 5);
    const { nx, nz } = this;
    for (let j = 0; j < nz; j++) {
      const z = this.cellZ(j);
      for (let i = 0; i < nx; i++) {
        const x = this.cellX(i);
        const k = this.idx(i, j);
        let d = 0.6 + 0.2 * (fbm(x * 0.55 + 3.1, z * 0.55) - 0.5) * 2;
        d += 0.24 * smoothstep(1.25, 1.8, Math.abs(x));
        this.dirt[k] = d;
        this.polish[k] = history ? history[k] * 0.3 : 0;
        this.wet[k] = 0;
        this.mem[k] = 0;
        this.firstClean[k] = -1;
      }
    }
    const blob = (cx, cz, rx, rz, amt, rot = 0) => {
      const c = Math.cos(rot), s = Math.sin(rot);
      const r = Math.max(rx, rz) + 0.05;
      const i0 = Math.max(0, this.toI(cx - r)), i1 = Math.min(nx - 1, this.toI(cx + r));
      const j0 = Math.max(0, this.toJ(cz - r)), j1 = Math.min(nz - 1, this.toJ(cz + r));
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
        const dx = this.cellX(i) - cx, dz = this.cellZ(j) - cz;
        const u = (dx * c - dz * s) / rx, w = (dx * s + dz * c) / rz;
        const q = u * u + w * w;
        if (q < 1) {
          const k = this.idx(i, j);
          this.dirt[k] = Math.max(this.dirt[k], this.dirt[k] + amt * (1 - q) * (1 - q));
        }
      }
    };
    // broad faint stains
    for (let n = 0; n < 26; n++) {
      const cx = (rnd() * 2 - 1) * (HW - 0.3);
      const cz = MAP_Z0 + rnd() * (MAP_Z1 - MAP_Z0);
      blob(cx, cz, 0.45 + rnd() * 0.6, 0.35 + rnd() * 0.5, 0.12 + rnd() * 0.1, rnd() * 3);
    }
    // medium smudges, some in little clusters
    for (let n = 0; n < 22; n++) {
      const cx = (rnd() * 2 - 1) * (HW - 0.3);
      const cz = MAP_Z0 + rnd() * (MAP_Z1 - MAP_Z0);
      const k = 1 + Math.floor(rnd() * 3);
      for (let q = 0; q < k; q++) {
        blob(cx + (rnd() - 0.5) * 0.5, cz + (rnd() - 0.5) * 0.5, 0.12 + rnd() * 0.25, 0.1 + rnd() * 0.18, 0.18 + rnd() * 0.22, rnd() * 3);
      }
    }
    // a few dried drips
    for (let n = 0; n < 14; n++) {
      const cx = (rnd() * 2 - 1) * (HW - 0.3);
      const cz = MAP_Z0 + rnd() * (MAP_Z1 - MAP_Z0);
      blob(cx, cz, 0.05 + rnd() * 0.07, 0.05 + rnd() * 0.07, 0.45, 0);
    }
    // rubber scuffs: thin curved streaks
    for (let n = 0; n < 38; n++) {
      let cx = (rnd() * 2 - 1) * (HW - 0.3);
      let cz = MAP_Z0 + rnd() * (MAP_Z1 - MAP_Z0);
      let a = rnd() * 3.14;
      const len = 3 + Math.floor(rnd() * 4);
      for (let q = 0; q < len; q++) {
        blob(cx, cz, 0.09, 0.018, 0.42, a);
        cx += Math.cos(a) * 0.07; cz -= Math.sin(a) * 0.07; a += (rnd() - 0.5) * 0.5;
      }
    }
    // dust gathered along the skirting
    for (let z = MAP_Z0 + 0.3; z < MAP_Z1 - 0.3; z += 0.35 + rnd() * 0.4) {
      for (const sx of [-1, 1]) blob(sx * (HW - 0.08), z, 0.14, 0.25 + rnd() * 0.3, 0.2 + rnd() * 0.2, 0);
    }
    // two lines of shoe prints walking down the corridor
    for (const [x0, drift] of [[-0.35, 0.03], [0.55, -0.02]]) {
      let px = x0, pz = 2.0, step = 0;
      while (pz > MAP_Z0 + 0.5) {
        px += (rnd() - 0.5) * 0.08 + Math.sin(pz * 0.21) * drift;
        px = Math.max(-1.3, Math.min(1.3, px));
        const side = step % 2 ? 0.1 : -0.1;
        blob(px + side, pz, 0.05, 0.1, 0.32, 0);
        blob(px + side, pz + 0.11, 0.045, 0.04, 0.3, 0);
        pz -= 0.34 + rnd() * 0.04; step++;
      }
    }
    // the first, very tempting smudge right in front of the scrubber
    const s = layout.start;
    blob(s.x + 0.05, s.z - 1.05, 0.62, 0.42, 0.55, 0.3);
    blob(s.x - 0.35, s.z - 1.55, 0.3, 0.22, 0.5, -0.6);
    // replay: a trail of smudges leading into the lane not taken last time
    if (layout.invite === 'A' || layout.invite === 'B') {
      const sx = layout.invite === 'A' ? -1 : 1;
      for (let t = 0; t < 7; t++) {
        blob(s.x + sx * (0.15 + t * 0.14), s.z - 1.8 - t * 0.7, 0.3, 0.24, 0.45, t * 0.7);
      }
    }
    for (let k = 0; k < this.dirt.length; k++) this.dirt[k] = Math.min(1, Math.max(0.5, this.dirt[k]));
    this.wetMin = nz; this.wetMax = -1;
    this.rowMin = 0; this.rowMax = nz - 1;
    for (const r of this.ripples) { r.set(0, 0, -99, 0); }
    this.writeAll();
  }

  writeAll() {
    const b = this.bytes;
    for (let k = 0; k < this.dirt.length; k++) {
      b[k * 4] = this.dirt[k] * 255;
      b[k * 4 + 1] = this.polish[k] * 255;
      b[k * 4 + 2] = this.wet[k] * 255;
      b[k * 4 + 3] = this.mem[k] * 255;
    }
    this.tex.needsUpdate = true;
  }

  markRows(j0, j1) {
    this.rowMin = Math.min(this.rowMin, j0);
    this.rowMax = Math.max(this.rowMax, j1);
  }

  // One step of brush travel. Returns amount of grime lifted.
  scrub(cx, cz, dirx, dirz, ds, now, r = 0.37, strength = 1) {
    const { nx, nz } = this;
    const R = r + 0.12;
    const i0 = Math.max(0, this.toI(cx - R)), i1 = Math.min(nx - 1, this.toI(cx + R));
    const j0 = Math.max(0, this.toJ(cz - R)), j1 = Math.min(nz - 1, this.toJ(cz + R));
    if (i0 > i1 || j0 > j1) return 0;
    let lifted = 0;
    const kClean = 1.45 * strength, kPol = 0.5 * strength;
    const pushRing = [];
    for (let j = j0; j <= j1; j++) {
      const dz = this.cellZ(j) - cz;
      for (let i = i0; i <= i1; i++) {
        const dx = this.cellX(i) - cx;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const k = this.idx(i, j);
        if (dist < r) {
          const w = smoothstep(r, r * 0.72, dist);
          const before = this.dirt[k];
          const after = Math.max(0, before - w * kClean * ds);
          this.dirt[k] = after;
          lifted += before - after;
          this.polish[k] = Math.min(1, this.polish[k] + w * kPol * ds * (1 - after));
          this.wet[k] = Math.max(this.wet[k], w);
          if (after < 0.3 && this.firstClean[k] < 0) this.firstClean[k] = now;
        } else if (dist < R) {
          // the bow wave: a little of the lifted grime is shoved ahead of the brush
          const fwd = (dx * dirx + dz * dirz) / dist;
          if (fwd > 0.35) pushRing.push(k, fwd);
        }
      }
    }
    if (pushRing.length && lifted > 0) {
      const per = (lifted * 0.10) / (pushRing.length / 2);
      for (let p = 0; p < pushRing.length; p += 2) {
        const k = pushRing[p];
        this.dirt[k] = Math.min(1, this.dirt[k] + per * pushRing[p + 1]);
      }
    }
    this.markRows(j0, j1);
    this.wetMin = Math.min(this.wetMin, j0);
    this.wetMax = Math.max(this.wetMax, j1);
    return lifted;
  }

  // Small dirty marks (wet footprints)
  smudge(cx, cz, rx, rz, amt, rot) {
    const c = Math.cos(rot), s = Math.sin(rot);
    const r = Math.max(rx, rz) + 0.03;
    const i0 = Math.max(0, this.toI(cx - r)), i1 = Math.min(this.nx - 1, this.toI(cx + r));
    const j0 = Math.max(0, this.toJ(cz - r)), j1 = Math.min(this.nz - 1, this.toJ(cz + r));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const dx = this.cellX(i) - cx, dz = this.cellZ(j) - cz;
      const u = (dx * c - dz * s) / rx, w = (dx * s + dz * c) / rz;
      const q = u * u + w * w;
      if (q < 1) {
        const k = this.idx(i, j);
        this.dirt[k] = Math.min(0.62, this.dirt[k] + amt * (1 - q));
      }
    }
    this.markRows(j0, j1);
  }

  // Set membrane strength by a shape function f(x,z) -> 0..1 (max-combined)
  paintMembrane(fn, x0, x1, z0, z1) {
    const i0 = Math.max(0, this.toI(x0)), i1 = Math.min(this.nx - 1, this.toI(x1));
    const j0 = Math.max(0, this.toJ(z0)), j1 = Math.min(this.nz - 1, this.toJ(z1));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const k = this.idx(i, j);
      const v = fn(this.cellX(i), this.cellZ(j));
      if (v > this.mem[k]) {
        this.mem[k] = v;
        if (v > 0.3) { this.dirt[k] = Math.min(this.dirt[k], 0.05 * (1 - v)); this.polish[k] = Math.max(this.polish[k], v); }
      }
    }
    this.markRows(j0, j1);
  }

  sample(arr, x, z) {
    const i = this.toI(x), j = this.toJ(z);
    if (i < 0 || j < 0 || i >= this.nx || j >= this.nz) return arr === this.dirt ? 1 : 0;
    return arr[this.idx(i, j)];
  }

  // average cleanliness (1 - dirt) in a disc
  cleanIn(cx, cz, r) {
    let sum = 0, n = 0;
    const i0 = Math.max(0, this.toI(cx - r)), i1 = Math.min(this.nx - 1, this.toI(cx + r));
    const j0 = Math.max(0, this.toJ(cz - r)), j1 = Math.min(this.nz - 1, this.toJ(cz + r));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const dx = this.cellX(i) - cx, dz = this.cellZ(j) - cz;
      if (dx * dx + dz * dz > r * r) continue;
      sum += this.dirt[this.idx(i, j)] < 0.3 ? 1 : 0; n++;
    }
    return n ? sum / n : 0;
  }

  coverage(rect) {
    let c = 0, n = 0;
    const i0 = Math.max(0, this.toI(rect.x0)), i1 = Math.min(this.nx - 1, this.toI(rect.x1));
    const j0 = Math.max(0, this.toJ(rect.z0)), j1 = Math.min(this.nz - 1, this.toJ(rect.z1));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      if (this.dirt[this.idx(i, j)] < 0.3) c++;
      n++;
    }
    return n ? c / n : 0;
  }

  addRipple(x, z, strength, now) {
    const r = this.ripples[this.rippleIdx];
    r.set(x, z, now, strength);
    this.rippleIdx = (this.rippleIdx + 1) % this.ripples.length;
  }

  setShadow(i, x, z, radius, strength) {
    this.shadows[i].set(x, z, radius, strength);
  }

  update(dt) {
    // dry the wet film
    if (this.wetMax >= this.wetMin) {
      const { nx } = this;
      let newMin = this.nz, newMax = -1;
      const dec = dt * 0.62;
      for (let j = this.wetMin; j <= this.wetMax; j++) {
        let any = false;
        for (let i = 0; i < nx; i++) {
          const k = j * nx + i;
          if (this.wet[k] > 0) {
            this.wet[k] = Math.max(0, this.wet[k] - dec);
            any = true;
          }
        }
        if (any) { newMin = Math.min(newMin, j); newMax = Math.max(newMax, j); }
      }
      this.markRows(this.wetMin, this.wetMax);
      this.wetMin = newMin; this.wetMax = newMax;
    }
    if (this.rowMax >= this.rowMin) {
      const { nx } = this;
      const b = this.bytes;
      for (let j = this.rowMin; j <= this.rowMax; j++) {
        for (let i = 0; i < nx; i++) {
          const k = j * nx + i;
          b[k * 4] = this.dirt[k] * 255;
          b[k * 4 + 1] = this.polish[k] * 255;
          b[k * 4 + 2] = this.wet[k] * 255;
          b[k * 4 + 3] = this.mem[k] * 255;
        }
      }
      const rows = this.rowMax - this.rowMin + 1;
      if (rows < 90) {
        for (let j = this.rowMin; j <= this.rowMax; j++) this.tex.addUpdateRange(j * nx * 4, nx * 4);
      } else {
        this.tex.clearUpdateRanges();
      }
      this.tex.needsUpdate = true;
      this.rowMin = this.nz; this.rowMax = -1;
    }
  }
}

export function smoothstep(e0, e1, x) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}
