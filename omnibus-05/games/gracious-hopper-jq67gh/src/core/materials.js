// 汎用の「絵本調」ライティング・マテリアル群
import * as THREE from '../vendor/three.module.min.js';
import { makeMaterial } from './shared.js';

const VS_LIT = /* glsl */`
  attribute vec3 color;
  varying vec3 vN; varying vec3 vW; varying vec3 vCol; varying vec2 vUv; varying vec3 vLocal;
  uniform float uTime; uniform float uWind; uniform float uSway;
  void main(){
    vCol = color; vUv = uv; vLocal = position;
    vec3 p = position;
    #ifdef USE_INSTANCING
      vec4 w = modelMatrix * instanceMatrix * vec4(p, 1.0);
    #else
      vec4 w = modelMatrix * vec4(p, 1.0);
    #endif
    // 葉群のそよぎ
    w.xyz += uSway * vec3(sin(uTime*1.3 + w.y*0.6 + w.x*0.3), 0.0, cos(uTime*1.1 + w.z*0.5)) * 0.06 * (0.4 + uWind) * max(w.y - 1.0, 0.0) / 6.0;
    vW = w.xyz;
    #ifdef USE_INSTANCING
      vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
    #else
      vN = normalize(mat3(modelMatrix) * normal);
    #endif
    gl_Position = projectionMatrix * viewMatrix * w;
  }`;

// mode: 0=一般, 1=葉群, 2=樹皮, 3=壁/屋根(テクスチャ)
const FS_LIT = /* glsl */`
  uniform float uMode; uniform float uWrap; uniform sampler2D uMap; uniform float uUseMap; uniform vec3 uTint; uniform float uSpec;
  varying vec3 vN; varying vec3 vW; varying vec3 vCol; varying vec2 vUv; varying vec3 vLocal;
  void main(){
    vec3 n = normalize(vN);
    if (!gl_FrontFacing) n = -n;
    vec3 V = normalize(cameraPosition - vW);
    vec3 albedo = vCol * uTint;
    if (uUseMap > 0.5) { vec4 t = texture2D(uMap, vUv); albedo *= t.rgb; }
    float ao = 1.0;
    vec3 col;
    if (uMode > 0.5 && uMode < 1.5) {
      // 葉群: 細かな葉の塊ノイズ + 逆光の透過
      float n1 = vnoise3(vW * 2.2), n2 = vnoise3(vW * 5.3 + 3.1);
      float leaf = n1 * 0.6 + n2 * 0.4;
      albedo *= 0.72 + 0.55 * leaf;
      ao = 0.55 + 0.45 * smoothstep(0.25, 0.75, leaf);
      vec3 nn = normalize(n + (vec3(n1, n2, vnoise3(vW*3.7)) - 0.5) * 0.9);
      col = shadeLambert(albedo, nn, vW, 0.5, ao);
      float back = pow(max(dot(-V, uSunDir), 0.0), 3.0);
      float rim = pow(1.0 - max(dot(n, V), 0.0), 2.0);
      col += vec3(0.55, 0.75, 0.15) * uSunColor * back * rim * 0.55 * sunVis(vW + uSunDir * 0.5);
    } else if (uMode > 1.5 && uMode < 2.5) {
      float s = vnoise2(vec2(atan(vLocal.x, vLocal.z) * 6.0, vLocal.y * 2.5));
      float s2 = vnoise2(vec2(atan(vLocal.x, vLocal.z) * 20.0, vLocal.y * 9.0));
      albedo *= 0.65 + 0.5 * s * (0.7 + 0.3 * s2);
      col = shadeLambert(albedo, n, vW, 0.3, 1.0);
    } else if (uMode > 2.5 && uMode < 3.5) {
      // 板張りの壁
      float board = fract(vW.y * 4.2);
      float line = smoothstep(0.0, 0.08, board) * smoothstep(1.0, 0.9, board);
      float grain = vnoise2(vec2((vW.x + vW.z) * 1.3, vW.y * 4.2 + floor(vW.y*4.2) * 7.0));
      albedo *= (0.78 + 0.22 * line) * (0.95 + 0.08 * grain);
      col = shadeLambert(albedo, n, vW, uWrap, 1.0);
    } else if (uMode > 3.5 && uMode < 4.5) {
      // 瓦屋根 (uv はメートル単位)
      float row = vUv.y * 3.2;
      float r = fract(row);
      float off = mod(floor(row), 2.0) * 0.5;
      float c = fract(vUv.x * 2.6 + off);
      float scallop = smoothstep(0.0, 0.25, r) * (0.75 + 0.25 * sin(c * 3.14159));
      float var = hash12(floor(vec2(vUv.x * 2.6 + off, row)));
      albedo *= (0.62 + 0.38 * scallop) * (0.88 + 0.2 * var);
      col = shadeLambert(albedo, n, vW, uWrap, 1.0);
      vec3 H = normalize(uSunDir + V);
      col += uSunColor * pow(max(dot(n, H), 0.0), 30.0) * 0.08 * scallop;
    } else if (uMode > 4.5 && uMode < 5.5) {
      // 子ども: やわらかい陰影 + 輪郭光
      col = shadeLambert(albedo, n, vW, 0.6, 1.0);
      float rim = pow(1.0 - max(dot(n, V), 0.0), 2.5);
      col += albedo * rim * (hemi(n) * 0.6 + mix(vec3(0.0), uBudGlow, budInside(vW)) + uSunColor * 0.35 * max(dot(-V, uSunDir), 0.0) * sunVis(vW));
    } else {
      col = shadeLambert(albedo, n, vW, uWrap, ao);
      if (uSpec > 0.0) {
        vec3 H = normalize(uSunDir + V);
        col += uSunColor * pow(max(dot(n, H), 0.0), 60.0) * uSpec * sunVis(vW);
      }
    }
    col = applyFog(col, vW);
    gl_FragColor = finish(col, 1.0);
  }`;

export function makeLit(G, opts = {}) {
  return makeMaterial(G, {
    uniforms: {
      uMode: { value: opts.mode || 0 },
      uWrap: { value: opts.wrap !== undefined ? opts.wrap : 0.35 },
      uMap: { value: opts.map || null },
      uUseMap: { value: opts.map ? 1 : 0 },
      uTint: { value: new THREE.Color(opts.tint !== undefined ? opts.tint : 0xffffff) },
      uSpec: { value: opts.spec || 0 },
      uSway: { value: opts.sway || 0 },
    },
    vertexShader: VS_LIT,
    fragmentShader: FS_LIT,
    side: opts.side !== undefined ? opts.side : THREE.FrontSide,
  });
}

// 頂点色が無いジオメトリ用に白を入れる
export function ensureColor(geo, hex = 0xffffff) {
  if (geo.getAttribute('color')) return geo;
  const n = geo.getAttribute('position').count;
  const c = new Float32Array(n * 3);
  const col = new THREE.Color(hex);
  for (let i = 0; i < n; i++) { c[i * 3] = col.r; c[i * 3 + 1] = col.g; c[i * 3 + 2] = col.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(c, 3));
  return geo;
}
