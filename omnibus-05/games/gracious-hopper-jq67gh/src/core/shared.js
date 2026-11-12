// 全シェーダーで共有する光・空気・霧のユニフォームとGLSL部品
import * as THREE from '../vendor/three.module.min.js';

export function createSharedUniforms() {
  const sun = new THREE.Vector3(-0.605, 0.453, -0.655).normalize();
  return {
    uTime: { value: 0 },
    uSunDir: { value: sun },
    uSunColor: { value: new THREE.Color(1.0, 0.86, 0.66).multiplyScalar(2.1) },
    uSkyColor: { value: new THREE.Color(0.42, 0.58, 0.78) },
    uGroundColor: { value: new THREE.Color(0.32, 0.36, 0.22) },
    uSkyTop: { value: new THREE.Color(0.07, 0.24, 0.70) },
    uSkyHorizon: { value: new THREE.Color(0.52, 0.66, 0.86) },
    uFogColor: { value: new THREE.Color(0.48, 0.62, 0.82) },
    uFogDensity: { value: 0.0032 },
    uExposure: { value: 1.0 },
    uWind: { value: 0.3 },
    uAltitude: { value: 0 },
    // 庭の木の樹冠 (xyz=中心, w=半径)
    uCanopy: { value: [new THREE.Vector4(-7.2, 7.6, -8.2, 3.6), new THREE.Vector4(-5.6, 6.6, -6.9, 2.6), new THREE.Vector4(-8.8, 6.4, -6.8, 2.5)] },
    // 家の影ボックス (min.xyz, max.xyz)
    uBoxMin: { value: new THREE.Vector3(1.5, 0, -13.5) },
    uBoxMax: { value: new THREE.Vector3(10.5, 7.4, -6.5) },
    // 茎のそばを流れる雲 (上昇中に影を落とす)
    uCloudSph: { value: [new THREE.Vector4(-8.5, 44, -8.8, 6), new THREE.Vector4(-6.2, 62.5, -6.6, 5), new THREE.Vector4(7, 46.5, -6, 7)] },
    // つぼみの内部: 花びらを透過した光
    uBudCenter: { value: new THREE.Vector3(0, -100, 0) },
    uBudAxis: { value: new THREE.Vector3(0, 1, 0) },
    uBudRadii: { value: new THREE.Vector2(1.6, 1.8) },
    uBudClosed: { value: 0 },
    uBudTint: { value: new THREE.Color(0.85, 0.40, 0.50) },
    uBudGlow: { value: new THREE.Color(0.50, 0.24, 0.30) },
  };
}

export const GLSL_COMMON = /* glsl */`
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyColor;
uniform vec3 uGroundColor;
uniform vec3 uSkyTop;
uniform vec3 uSkyHorizon;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform float uExposure;
uniform float uWind;
uniform float uAltitude;
uniform vec4 uCanopy[3];
uniform vec3 uBoxMin;
uniform vec3 uBoxMax;
uniform vec4 uCloudSph[3];
uniform vec3 uBudCenter;
uniform vec3 uBudAxis;
uniform vec2 uBudRadii;
uniform float uBudClosed;
uniform vec3 uBudTint;
uniform vec3 uBudGlow;

float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash13(vec3 p3){ p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
float vnoise2(vec2 p){
  vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i+vec2(1,0)), u.x), mix(hash12(i+vec2(0,1)), hash12(i+vec2(1,1)), u.x), u.y);
}
float vnoise3(vec3 p){
  vec3 i = floor(p), f = fract(p); vec3 u = f*f*(3.0-2.0*f);
  float a = mix(mix(hash13(i), hash13(i+vec3(1,0,0)), u.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), u.x), u.y);
  float b = mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), u.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), u.x), u.y);
  return mix(a, b, u.z);
}
float fbm2(vec2 p){ float s=0.0, a=0.5; for(int i=0;i<4;i++){ s+=a*vnoise2(p); p*=2.03; a*=0.5; } return s/0.9375; }

// 木漏れ日: 太陽方向への光線が樹冠を通る長さと、葉の隙間ノイズ
float canopyShadow(vec3 p){
  float vis = 1.0;
  for (int i = 0; i < 3; i++) {
    vec3 oc = p - uCanopy[i].xyz; float r = uCanopy[i].w;
    float b = dot(oc, uSunDir); float c = dot(oc, oc) - r*r;
    float h = b*b - c;
    if (h > 0.0) {
      h = sqrt(h);
      float t0 = -b - h, t1 = -b + h;
      if (t1 > 0.0) {
        float len = t1 - max(t0, 0.0);
        vec3 q = p + uSunDir * max(t0, 0.0);
        float n = vnoise3(q * 1.6 + vec3(uTime*0.35, 0.0, uTime*0.2)) * 0.6 + vnoise3(q * 3.7 - vec3(0.0, uTime*0.3, 0.0)) * 0.4;
        float gaps = smoothstep(0.52, 0.62, n);
        float dens = 1.0 - exp(-len * 0.75);
        float edge = smoothstep(0.0, 0.25, h / r);
        vis *= 1.0 - dens * edge * (1.0 - gaps) * 0.88;
      }
    }
  }
  return vis;
}
// 家の影 (ボックス)
float boxShadow(vec3 p){
  vec3 inv = 1.0 / uSunDir;
  vec3 t0 = (uBoxMin - p) * inv, t1 = (uBoxMax - p) * inv;
  vec3 tmin = min(t0, t1), tmax = max(t0, t1);
  float tn = max(max(tmin.x, tmin.y), tmin.z), tf = min(min(tmax.x, tmax.y), tmax.z);
  return (tf > max(tn, 0.0)) ? 0.0 : 1.0;
}
// 近くの雲の影 (やわらかく)
float cloudShadow(vec3 p){
  float vis = 1.0;
  for (int i = 0; i < 3; i++) {
    vec3 c = uCloudSph[i].xyz;
    vec3 oc = p - c; float r = uCloudSph[i].w;
    float b = dot(oc, uSunDir); float cc = dot(oc, oc) - r * r;
    float h = b * b - cc;
    if (h > 0.0 && -b + sqrt(h) > 0.0) vis *= 1.0 - 0.55 * smoothstep(0.0, r * r * 0.6, h);
  }
  return vis;
}
float sunVis(vec3 p){ return canopyShadow(p) * mix(0.18, 1.0, boxShadow(p)) * cloudShadow(p); }

vec3 hemi(vec3 n){ return mix(uGroundColor, uSkyColor, clamp(n.y * 0.5 + 0.5, 0.0, 1.0)); }

// つぼみの内側にいるか (0..1) × 閉じ具合
float budInside(vec3 p){
  vec3 d = p - uBudCenter;
  float y = dot(d, uBudAxis);
  vec3 r = d - uBudAxis * y;
  float e = length(vec2(length(r) / uBudRadii.x, y / uBudRadii.y));
  return (1.0 - smoothstep(0.9, 1.04, e)) * uBudClosed;
}

vec3 shadeLambert(vec3 albedo, vec3 n, vec3 wpos, float wrap, float ao){
  float ndl = dot(n, uSunDir);
  float diff = clamp((ndl + wrap) / (1.0 + wrap), 0.0, 1.0);
  float ins = budInside(wpos);
  // 閉じたつぼみの中では、光は花びらを透過して赤く柔らかく回り込む
  float diffIn = clamp((ndl + 0.8) / 1.8, 0.0, 1.0);
  vec3 sunL = uSunColor * mix(vec3(diff), uBudTint * diffIn, ins) * sunVis(wpos);
  vec3 amb = mix(hemi(n), uBudGlow * (0.75 + 0.25 * n.y), ins) * ao;
  return albedo * (amb + sunL);
}

vec3 applyFog(vec3 col, vec3 wpos){
  vec3 d = wpos - cameraPosition;
  float dist = length(d);
  vec3 dir = d / max(dist, 1e-4);
  float f = 1.0 - exp(-dist * uFogDensity);
  vec3 fc = uFogColor + uSunColor * 0.05 * pow(max(dot(dir, uSunDir), 0.0), 6.0);
  return mix(col, fc, clamp(f, 0.0, 1.0));
}

vec3 tonemap(vec3 c){
  vec3 x = max(vec3(0.0), c * uExposure);
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}
vec4 finish(vec3 col, float a){
  vec4 o = linearToOutputTexel(vec4(tonemap(col), a));
  o.rgb += (hash12(gl_FragCoord.xy + fract(uTime) * 61.0) - 0.5) / 255.0;
  return o;
}
`;

// 共有ユニフォームを持つ ShaderMaterial を作る
export function makeMaterial(G, opts) {
  const uniforms = Object.assign({}, G.U, opts.uniforms || {});
  const m = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: opts.vertexShader,
    fragmentShader: GLSL_COMMON + opts.fragmentShader,
    transparent: !!opts.transparent,
    depthWrite: opts.depthWrite !== undefined ? opts.depthWrite : true,
    depthTest: opts.depthTest !== undefined ? opts.depthTest : true,
    side: opts.side !== undefined ? opts.side : THREE.FrontSide,
    blending: opts.blending !== undefined ? opts.blending : THREE.NormalBlending,
    defines: opts.defines || {},
    vertexColors: !!opts.vertexColors,
  });
  if (opts.extensions) m.extensions = opts.extensions;
  return m;
}
