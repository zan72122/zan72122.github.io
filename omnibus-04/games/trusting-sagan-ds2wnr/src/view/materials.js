// 主役の材質。three.js 標準の物理材質を onBeforeCompile で少しだけ拡張する。
import * as THREE from 'three';

// 共通の時間 uniform
export const shared = {
  uTime: { value: 0 },
  uFadeNear: { value: 21.0 },
  uFadeFar: { value: 27.0 },
};

// ---------- 粘液 / 滑り台 ----------
// aInfo = (硬化 c, 断面の種類 0=内面 1=縁 2=外面, 道に沿った距離)
const SLIME_VERT_PARS = /* glsl */ `
attribute vec4 aInfo;
varying vec4 vInfo;
varying vec3 vWPos;
uniform float uTime;
`;
const SLIME_VERT_MAIN = /* glsl */ `
#include <begin_vertex>
vInfo = aInfo;
{
  float soft = 1.0 - smoothstep(0.0, 1.0, aInfo.x);
  float s = aInfo.z;
  transformed += objectNormal * (sin(uTime * 1.25 + s * 2.3) * 0.010 * soft);
  transformed.y -= soft * (0.5 + 0.5 * sin(uTime * 0.85 + s * 1.7)) * 0.018;
}
`;
const SLIME_VERT_WORLD = /* glsl */ `
#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
`;
const SLIME_FRAG_PARS = /* glsl */ `
varying vec4 vInfo;
uniform float uTime;
varying vec3 vWPos;
uniform float uFadeNear;
uniform float uFadeFar;
uniform vec3 uSoftColor;
uniform vec3 uHardColor;
uniform vec3 uFarColor;
uniform float uOpaque;
float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
// 微細な擦れ: 道に沿った細い線を不規則に
float scratches(vec2 q) {
  float acc = 0.0;
  for (int k = 0; k < 3; k++) {
    float fk = float(k);
    vec2 p = q * vec2(1.3 + fk * 0.7, 9.0 + fk * 5.0);
    float a = 0.12 * (fk - 1.0);
    p = mat2(cos(a), -sin(a), sin(a), cos(a)) * p;
    vec2 cell = floor(p);
    float h = hash21(cell + fk * 17.0);
    float line = abs(fract(p.y) - (0.2 + 0.6 * h));
    float on = step(0.72, hash21(cell * 1.7 + 3.1 + fk));
    acc += on * smoothstep(0.035, 0.0, line);
  }
  return clamp(acc, 0.0, 1.0);
}
`;
const SLIME_FRAG_COLOR = /* glsl */ `
#include <color_fragment>
float cureF = smoothstep(0.0, 1.0, vInfo.x);
float isRim = 1.0 - smoothstep(0.35, 0.65, abs(vInfo.y - 1.0));
float isOuter = smoothstep(1.5, 1.9, vInfo.y);
vec3 sCol = mix(uSoftColor, uHardColor, cureF);
// 縁は厚みで少し色が濃く見える
sCol = mix(sCol, sCol * vec3(0.86, 0.95, 0.97), isRim * cureF);
vec3 vdir = normalize(vViewPosition);
float ndv = abs(dot(normalize(vNormal), vdir));
float fres = pow(1.0 - ndv, 2.2);
float streak = 0.5 + 0.5 * sin(vInfo.z * 7.3 + sin(vInfo.z * 2.1) * 2.0 + vUv2s.y * 2.5);
float aSoft = 0.42 + 0.45 * fres + isRim * 0.25 + 0.12 * streak;
float aHard = mix(0.16, 0.7, isRim) + fres * 0.36 + isOuter * 0.04;
float alphaV = mix(aSoft, aHard, cureF);
float dist = length(vWPos - cameraPosition);
float far = smoothstep(uFadeNear, uFadeFar, dist);
sCol = mix(sCol, uFarColor, far * 0.65 * cureF);
alphaV = mix(alphaV, 1.0, max(far, uOpaque));
// つながった道を上から下へ流れる淡い光
float flow = vInfo.w * pow(max(0.0, sin(vInfo.z * 0.9 - uTime * 1.7)), 14.0);
sCol += vec3(0.16, 0.2, 0.2) * flow;
alphaV += flow * 0.12;
diffuseColor.rgb = sCol;
diffuseColor.a = clamp(alphaV, 0.0, 1.0);
`;
const SLIME_FRAG_ROUGH = /* glsl */ `
#include <roughnessmap_fragment>
{
  float scr = scratches(vec2(vInfo.z, vUv2s.y * 6.0));
  float cureR = smoothstep(0.3, 1.0, vInfo.x);
  float farR = smoothstep(uFadeNear, uFadeFar, length(vWPos - cameraPosition));
  roughnessFactor = mix(0.035, 0.07, cureR) + scr * 0.32 * cureR + farR * 0.22;
}
`;

function slimeMaterial({ opaque }) {
  const m = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0.05,
    metalness: 0,
    clearcoat: 0.7,
    clearcoatRoughness: 0.05,
    transparent: !opaque,
    depthWrite: !!opaque,
    envMapIntensity: 0.9,
    ior: 1.45,
    specularIntensity: 1,
    side: THREE.FrontSide,
  });
  m.userData.uniforms = {
    uSoftColor: { value: new THREE.Color(0xd9d6b4) },
    uHardColor: { value: new THREE.Color(0xbfe3e6) },
    uFarColor: { value: new THREE.Color(0xa9bcc0) },
    uOpaque: { value: opaque ? 1 : 0 },
  };
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, m.userData.uniforms, shared);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\n' + SLIME_VERT_PARS)
      .replace('#include <begin_vertex>', SLIME_VERT_MAIN)
      .replace('#include <worldpos_vertex>', SLIME_VERT_WORLD);
    // vUv を常に使えるように
    sh.vertexShader = sh.vertexShader.replace('#include <uv_vertex>', '#include <uv_vertex>\nvUv2s = uv;');
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec2 vUv2s;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec2 vUv2s;\n' + SLIME_FRAG_PARS)
      .replace('#include <color_fragment>', SLIME_FRAG_COLOR)
      .replace('#include <roughnessmap_fragment>', SLIME_FRAG_ROUGH);
  };
  m.customProgramCacheKey = () => 'slime-' + (opaque ? 'o' : 't');
  return m;
}
export function createSlimeMaterials() {
  const depth = slimeMaterial({ opaque: false });
  depth.colorWrite = false;
  depth.depthWrite = true;
  depth.customProgramCacheKey = () => 'slime-depth';
  return { transparent: slimeMaterial({ opaque: false }), opaque: slimeMaterial({ opaque: true }), depth };
}

// 柔らかい粘液の小物(垂れ・付け根・乗り場・糸): 濡れた艶と少しの透け
export function createGooMaterial() {
  const m = new THREE.MeshPhysicalMaterial({
    color: 0xc8cc98,
    roughness: 0.06,
    clearcoat: 1,
    clearcoatRoughness: 0.03,
    transparent: true,
    opacity: 0.9,
    depthWrite: true,
    envMapIntensity: 1.3,
    sheen: 0.6,
    sheenColor: new THREE.Color(0xf4f1d0),
    sheenRoughness: 0.4,
  });
  return m;
}

// ---------- 皮膚(半透明感のある足) ----------
// aThin: 薄い所ほど光が透ける(足の縁・触角)
export function createSkinMaterial(maps) {
  const m = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    map: maps.map,
    bumpMap: maps.bump,
    bumpScale: 1.4,
    roughness: 0.42,
    clearcoat: 0.85,
    clearcoatRoughness: 0.12,
    sheen: 0.5,
    sheenRoughness: 0.5,
    sheenColor: new THREE.Color(0xd8c7ae),
    vertexColors: true,
    envMapIntensity: 1.0,
  });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, shared);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aThin;\nvarying float vThin;\nuniform float uTime;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvThin = aThin;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vThin;')
      .replace(
        '#include <lights_fragment_end>',
        `#include <lights_fragment_end>
        {
          // 透過散乱の近似: 縁や薄い所は背面からの光で明るく、黄みを帯びる
          vec3 vd = normalize(vViewPosition);
          float rim = pow(1.0 - abs(dot(normal, vd)), 1.6);
          vec3 sss = vec3(0.95, 0.78, 0.55) * (0.08 + 0.55 * vThin) * (0.35 + rim);
          reflectedLight.indirectDiffuse += sss * diffuseColor.rgb * 1.2;
        }`
      );
  };
  m.customProgramCacheKey = () => 'skin';
  return m;
}

// ---------- 殻 ----------
export function createShellMaterial(maps) {
  return new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    map: maps.map,
    bumpMap: maps.bump,
    bumpScale: 2.2,
    roughness: 0.5,
    clearcoat: 0.55,
    clearcoatRoughness: 0.28,
    envMapIntensity: 0.9,
  });
}

// ---------- 空気の玉 ----------
export function createBallMaterial() {
  const m = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0.02,
    metalness: 0,
    transparent: true,
    opacity: 1,
    depthWrite: true,
    envMapIntensity: 1.6,
    clearcoat: 1,
    iridescence: 0.6,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [180, 520],
  });
  m.onBeforeCompile = (sh) => {
    sh.fragmentShader = sh.fragmentShader.replace(
      '#include <opaque_fragment>',
      `{
        float ndv = abs(dot(normalize(vNormal), normalize(vViewPosition)));
        float edge = pow(1.0 - ndv, 1.8);
        diffuseColor.a = 0.3 + 0.7 * edge;
      }
      #include <opaque_fragment>`
    );
  };
  m.customProgramCacheKey = () => 'ball';
  return m;
}
