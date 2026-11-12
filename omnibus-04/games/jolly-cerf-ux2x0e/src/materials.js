import * as THREE from 'three';
import { H, HW, LIGHT_SPACING, LIGHT_Z0, DOOR_A, WINDOWS, WIN_Y0, WIN_Y1, HOLE_A, HOLE_B, SHAFT_H, SLOT_H } from './config.js';

// Uniforms shared by every lit material. Mutate .value to animate globally.
export const G = {
  uTime: { value: 0 },
  uH: { value: H },
  uHW: { value: HW },
  uLightSpacing: { value: LIGHT_SPACING },
  uLightZ0: { value: LIGHT_Z0 },
  uLightZMinUpper: { value: -25.0 },
  uLightZMinLower: { value: -45.0 },
  uLightColor: { value: new THREE.Color(1.0, 0.95, 0.86) },
  uLightInt: { value: 1.2 },
  uLightLevel: { value: 1.0 },          // global dimmer (night transition)
  uSwitch: { value: new THREE.Vector2(100, 1) }, // fixtures with z < x are lit (dir 1)
  uAmbUp: { value: new THREE.Color(0.44, 0.43, 0.40) },
  uAmbDown: { value: new THREE.Color(0.30, 0.28, 0.26) },
  uSunTo: { value: new THREE.Vector3(0.72, 0.52, -0.46).normalize() }, // direction toward the sun
  uSunColor: { value: new THREE.Color(1.0, 0.86, 0.62) },
  uSunUpper: { value: 1.25 },
  uSunLower: { value: 0.0 },
  uWarmPos: { value: new THREE.Vector3((HOLE_A.x0 + HOLE_A.x1) / 2, H + SHAFT_H - 0.35, (HOLE_A.z0 + HOLE_A.z1) / 2) }, // local (unmirrored) coords
  uWarmHole: { value: new THREE.Vector4(HOLE_A.x0, HOLE_A.x1, HOLE_A.z0, HOLE_A.z1) },
  uWarmColor: { value: new THREE.Color(1.0, 0.66, 0.34) },
  uWarm: { value: 0.0 },               // lower world only
  uLampPos: { value: new THREE.Vector3((HOLE_B.x0 + HOLE_B.x1) / 2, H + SLOT_H - 0.25, (HOLE_B.z0 + HOLE_B.z1) / 2) },
  uLampHole: { value: new THREE.Vector4(HOLE_B.x0, HOLE_B.x1, HOLE_B.z0, HOLE_B.z1) },
  uLampColor: { value: new THREE.Color(1.0, 0.82, 0.55) },
  uLamp: { value: 0.0 },               // lower world only
  uLowerTint: { value: new THREE.Color(1.0, 0.97, 0.93) },
  uFogColor: { value: new THREE.Color(0.09, 0.085, 0.08) },
  uFogDensity: { value: 0.022 },
  uDoorA: { value: new THREE.Vector3(DOOR_A.z, DOOR_A.hw, DOOR_A.h) },
  uWin: { value: WINDOWS.map(w => new THREE.Vector2(w.z0, w.z1)) },
  uWinY: { value: new THREE.Vector2(WIN_Y0, WIN_Y1) },
  uTwinClip: { value: 1.0 },           // twins discard fragments on this side (0 = none)
  uWorldClip: { value: 0.0 },          // far-side pass: discard everything on this side
};

export const LIGHT_GLSL = /* glsl */`
uniform float uTime;
uniform float uH;
uniform float uHW;
uniform float uLightSpacing;
uniform float uLightZ0;
uniform float uLightZMinUpper;
uniform float uLightZMinLower;
uniform vec3 uLightColor;
uniform float uLightInt;
uniform float uLightLevel;
uniform vec2 uSwitch;
uniform vec3 uAmbUp;
uniform vec3 uAmbDown;
uniform vec3 uSunTo;
uniform vec3 uSunColor;
uniform float uSunUpper;
uniform float uSunLower;
uniform vec3 uWarmPos;
uniform vec4 uWarmHole;
uniform vec3 uWarmColor;
uniform float uWarm;
uniform vec3 uLampPos;
uniform vec4 uLampHole;
uniform vec3 uLampColor;
uniform float uLamp;
uniform vec3 uLowerTint;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform vec3 uDoorA;
uniform vec2 uWin[3];
uniform vec2 uWinY;
uniform float uWorldClip;

float fixtureOn(float lz) {
  return uSwitch.y > 0.0 ? step(lz, uSwitch.x) : step(uSwitch.x, lz);
}

float inWindows(float y, float z) {
  float wy = smoothstep(uWinY.x - 0.04, uWinY.x + 0.04, y) * (1.0 - smoothstep(uWinY.y - 0.04, uWinY.y + 0.04, y));
  float wz = 0.0;
  for (int i = 0; i < 3; i++) {
    wz += smoothstep(uWin[i].x - 0.04, uWin[i].x + 0.04, z) * (1.0 - smoothstep(uWin[i].y - 0.04, uWin[i].y + 0.04, z));
  }
  return wy * clamp(wz, 0.0, 1.0);
}

// light from above the mirror ceiling reaches the corridor only through its opening
float holeGate(vec3 L, vec3 p, vec4 hole) {
  if (p.y >= uH - 0.01) return 1.0;
  float t = (uH - L.y) / (p.y - L.y);
  vec2 c = mix(L.xz, p.xz, t);
  return smoothstep(hole.x - 0.07, hole.x + 0.07, c.x) * (1.0 - smoothstep(hole.y - 0.07, hole.y + 0.07, c.x))
       * smoothstep(hole.z - 0.07, hole.z + 0.07, c.y) * (1.0 - smoothstep(hole.w - 0.07, hole.w + 0.07, c.y));
}

// lp/ln/lv are in "local" coords of the world the point belongs to (y mirrored for the lower world)
vec3 corridorLight(vec3 lp, vec3 ln, vec3 lv, float side, float spec, float gloss) {
  vec3 amb = mix(uAmbDown, uAmbUp, clamp(ln.y * 0.5 + 0.5, 0.0, 1.0));
  vec3 diff = vec3(0.0);
  vec3 sp = vec3(0.0);
  float zmin = side > 0.0 ? uLightZMinUpper : uLightZMinLower;
  float k = floor((uLightZ0 - lp.z) / uLightSpacing);
  for (int i = -1; i <= 2; i++) {
    float kk = k + float(i);
    float lz = uLightZ0 - kk * uLightSpacing;
    if (kk < 0.0 || lz < zmin - 0.01) continue;
    float on = fixtureOn(lz);
    if (on <= 0.0) continue;
    float cz = clamp(lp.z, lz - 0.55, lz + 0.55);
    vec3 L = vec3(0.0, uH - 0.04, cz) - lp;
    float d2 = dot(L, L);
    vec3 Ld = L * inversesqrt(d2);
    float emit = clamp(Ld.y * 1.25 + 0.08, 0.0, 1.0); // fixtures shine downward
    float ndl = clamp(dot(ln, Ld) * 0.8 + 0.2, 0.0, 1.0);
    float att = 1.0 / (1.0 + d2 * 0.2);
    diff += uLightColor * (ndl * att * emit * on);
    if (spec > 0.0) {
      vec3 hv = normalize(Ld + lv);
      sp += uLightColor * pow(max(dot(ln, hv), 0.0), gloss) * att * emit * on;
    }
  }
  diff *= uLightInt;
  sp *= uLightInt * spec;

  // daylight through the right-hand windows
  float sunS = side > 0.0 ? uSunUpper : uSunLower;
  if (sunS > 0.0 && lp.x < uHW + 0.01) {
    float t = (uHW - lp.x) / max(uSunTo.x, 1e-3);
    vec3 hit = lp + uSunTo * t;
    float w = inWindows(hit.y, hit.z);
    float ndl = max(dot(ln, uSunTo), 0.0);
    diff += uSunColor * (w * ndl * sunS);
  }

  if (side < 0.0) {
    // warm light down the open hatch, lamps along the corridor beyond the slot
    if (uWarm > 0.0) {
      vec3 L = uWarmPos - lp;
      float d2 = dot(L, L);
      vec3 Ld = L * inversesqrt(d2);
      float ndl = clamp(dot(ln, Ld) * 0.85 + 0.15, 0.0, 1.0);
      float emit = clamp(Ld.y * 0.8 + 0.4, 0.0, 1.0);
      diff += uWarmColor * (uWarm * emit * holeGate(uWarmPos, lp, uWarmHole) * ndl / (1.0 + d2 * 0.22));
    }
    if (uLamp > 0.0) {
      // a row of lamps: use the nearest point on a line along the slot
      vec3 Lp = vec3(uLampPos.x, uLampPos.y, clamp(lp.z, uLampHole.z - 0.8, uLampHole.w + 0.8));
      vec3 L = Lp - lp;
      float d2 = dot(L, L);
      vec3 Ld = L * inversesqrt(d2);
      float ndl = clamp(dot(ln, Ld) * 0.85 + 0.15, 0.0, 1.0);
      float emit = clamp(Ld.y * 1.1 + 0.15, 0.0, 1.0);
      diff += uLampColor * (uLamp * emit * holeGate(Lp, lp, uLampHole) * ndl / (1.0 + d2 * 0.45));
    }
  }
  float lvl = mix(0.12, 1.0, uLightLevel);
  // soft occlusion where walls meet the floor and the ceiling
  float vert = 1.0 - smoothstep(0.4, 0.8, abs(ln.y));
  float ao = mix(1.0, mix(0.62, 1.0, smoothstep(0.0, 0.45, lp.y)) * mix(0.8, 1.0, smoothstep(0.0, 0.35, uH - lp.y)), vert);
  return (amb * lvl + diff * uLightLevel) * ao + sp * uLightLevel;
}

vec3 applyFog(vec3 col, vec3 worldPos) {
  float d = length(cameraPosition - worldPos);
  float f = 1.0 - exp(-max(d - 4.0, 0.0) * uFogDensity);
  return mix(col, uFogColor, f);
}
`;

const LIT_VERT = /* glsl */`
#include <common>
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vColor;
varying vec2 vUv;
void main() {
#ifdef USE_INSTANCING
  mat4 mm = modelMatrix * instanceMatrix;
#else
  mat4 mm = modelMatrix;
#endif
  vec4 w = mm * vec4(position, 1.0);
  vWorld = w.xyz;
  mat3 nm = transpose(inverse(mat3(mm)));
  vNormalW = normalize(nm * normal);
#ifdef USE_VCOLOR
  vColor = color;
#else
  vColor = vec3(1.0);
#endif
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;

const LIT_FRAG = /* glsl */`
#include <common>
${LIGHT_GLSL}
uniform vec3 uColor;
uniform vec3 uEmissive;
uniform float uSpec;
uniform float uGloss;
uniform float uClip;
uniform float uOpacity;
#ifdef USE_TEX
uniform sampler2D uTex;
#endif
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vColor;
varying vec2 vUv;
void main() {
  if (uClip != 0.0 && vWorld.y * uClip > 0.0) discard;
  if (uWorldClip != 0.0 && vWorld.y * uWorldClip > 0.0) discard;
  float side = vWorld.y >= 0.0 ? 1.0 : -1.0;
  vec3 n = normalize(vNormalW);
  if (!gl_FrontFacing) n = -n;
  vec3 v = normalize(cameraPosition - vWorld);
  vec3 lp = vec3(vWorld.x, abs(vWorld.y), vWorld.z);
  vec3 ln = vec3(n.x, n.y * side, n.z);
  vec3 lv = vec3(v.x, v.y * side, v.z);
  vec3 albedo = uColor * vColor;
#ifdef USE_TEX
  vec4 tx = texture2D(uTex, vUv);
  albedo *= tx.rgb;
#endif
  vec3 emis = uEmissive * mix(0.15, 1.0, uLightLevel);
#ifdef FIXTURE
  float kk = floor((uLightZ0 - vWorld.z) / uLightSpacing + 0.5);
  emis *= mix(0.06, 1.0, fixtureOn(uLightZ0 - kk * uLightSpacing));
#endif
  vec3 col = albedo * corridorLight(lp, ln, lv, side, uSpec, uGloss) + emis;
  if (side < 0.0) col *= uLowerTint;
  col = applyFog(col, vWorld);
  gl_FragColor = vec4(col, uOpacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

const ZERO_CLIP = { value: 0 };

export function makeLit(opts = {}) {
  const defines = {};
  if (opts.vertexColors) defines.USE_VCOLOR = '';
  if (opts.map) defines.USE_TEX = '';
  if (opts.fixture) defines.FIXTURE = '';
  const uniforms = {
    ...G,
    uColor: { value: new THREE.Color(opts.color ?? 0xffffff) },
    uEmissive: { value: new THREE.Color(opts.emissive ?? 0x000000) },
    uSpec: { value: opts.spec ?? 0.0 },
    uGloss: { value: opts.gloss ?? 30.0 },
    uClip: ZERO_CLIP,
    uOpacity: { value: opts.opacity ?? 1.0 },
  };
  if (opts.map) uniforms.uTex = { value: opts.map };
  const m = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: LIT_VERT,
    fragmentShader: LIT_FRAG,
    defines,
    vertexColors: !!opts.vertexColors,
    side: opts.side ?? THREE.FrontSide,
    transparent: !!opts.transparent,
    depthWrite: opts.depthWrite ?? true,
  });
  m.userData.isLit = true;
  return m;
}

// Material clone for a mirror twin: identical but clipped to the far side of the floor.
const twinCache = new WeakMap();
export function twinMaterial(mat) {
  if (!mat || !mat.userData || !mat.userData.isLit) return mat;
  let t = twinCache.get(mat);
  if (!t) {
    t = mat.clone();
    t.uniforms = { ...mat.uniforms, uClip: G.uTwinClip };
    t.userData = { ...mat.userData, isTwin: true };
    twinCache.set(mat, t);
  }
  return t;
}
