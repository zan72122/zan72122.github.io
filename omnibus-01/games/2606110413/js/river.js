import * as THREE from 'three';
import { CONFIG } from './config.js';
import { mergeColored, mat4 } from './materials.js';

const C = CONFIG.colors;

// 舞台の奥を横切る、流れるチョコレートの川。
// 頂点シェーダで波のうねり(法線は解析微分)、フラグメントで
// 流れるミルクチョコの帯 + 擬似フレネル + 偽スペキュラ(Bloomが拾って光る)。
export function createRiver(scene, M) {
  const geo = new THREE.PlaneGeometry(90, 7, 96, 12);
  geo.rotateX(-Math.PI / 2);

  const mat = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.merge([
      THREE.UniformsLib.fog,
      {
        uTime: { value: 0 },
        uDeep: { value: new THREE.Color(C.darkChoco) },
        uMilk: { value: new THREE.Color(0xa86b3e) },
        uRim: { value: new THREE.Color(0xffe8d0) },
      },
    ]),
    fog: true,
    vertexShader: /* glsl */`
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vWorldPos;
      varying vec2 vUv;
      #include <fog_pars_vertex>
      void main() {
        vUv = uv;
        vec3 p = position;
        float a1 = p.x * 0.55 + uTime * 1.2;
        float a2 = p.x * 1.7 - uTime * 2.1 + p.z * 2.0;
        p.y += sin(a1) * 0.10 + sin(a2) * 0.05;
        float dydx = cos(a1) * 0.55 * 0.10 + cos(a2) * 1.7 * 0.05;
        float dydz = cos(a2) * 2.0 * 0.05;
        vNormal = normalize(vec3(-dydx, 1.0, -dydz));
        vec4 wp = modelMatrix * vec4(p, 1.0);
        vWorldPos = wp.xyz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: /* glsl */`
      uniform float uTime;
      uniform vec3 uDeep;
      uniform vec3 uMilk;
      uniform vec3 uRim;
      varying vec3 vNormal;
      varying vec3 vWorldPos;
      varying vec2 vUv;
      #include <fog_pars_fragment>
      void main() {
        vec3 N = normalize(vNormal);
        // 表面の細かい揺らぎ
        N.xz += vec2(
          sin(vUv.x * 140.0 + uTime * 2.0),
          sin(vUv.y * 30.0 - uTime * 1.5)
        ) * 0.05;
        N = normalize(N);
        vec3 V = normalize(cameraPosition - vWorldPos);

        // 流れるミルクチョコの渦帯
        float band = sin(vUv.x * 46.0 - uTime * 0.55 + sin(vUv.y * 7.0 + uTime * 0.5) * 1.6);
        float band2 = sin(vUv.x * 105.0 - uTime * 1.2 + vUv.y * 14.0);
        float swirl = smoothstep(0.35, 0.95, band * 0.6 + band2 * 0.4);
        vec3 col = mix(uDeep, uMilk, swirl * 0.65);
        // 岸に近いほど明るく(浅瀬)
        float edge = abs(vUv.y - 0.5) * 2.0;
        col = mix(col, uMilk, pow(edge, 3.0) * 0.5);

        // 擬似フレネルのクリーム色リム
        float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
        col += uRim * fres * 0.3;
        // 偽スペキュラ(太陽方向固定)。ACES後も白く残りBloomが光る
        vec3 L = normalize(vec3(8.0, 16.0, 10.0));
        vec3 H = normalize(L + V);
        col += vec3(1.0, 0.95, 0.85) * pow(max(dot(N, H), 0.0), 70.0) * 0.9;

        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,
  });

  const river = new THREE.Mesh(geo, mat);
  river.position.set(0, 0.06, -14.5);
  scene.add(river);

  // 両岸のアイシング土手とマシュマロ石
  const bankParts = [];
  for (const zSide of [-3.8, 3.8]) {
    bankParts.push({
      geo: new THREE.CylinderGeometry(0.45, 0.55, 60, 10),
      color: C.cream,
      matrix: mat4(0, 0.18, zSide, 0, 0, Math.PI / 2),
    });
    for (let i = 0; i < 9; i++) {
      const x = -28 + i * 7 + (zSide > 0 ? 3 : 0);
      bankParts.push({
        geo: new THREE.SphereGeometry(0.55, 10, 8),
        color: i % 3 === 0 ? C.pink : C.white,
        matrix: mat4(x, 0.3, zSide + (i % 2 === 0 ? 0.5 : -0.4), 0, 0, 0, 1, 0.7, 1),
      });
    }
  }
  const banks = new THREE.Mesh(mergeColored(bankParts), M.vertexCandyMatte);
  banks.position.set(0, 0, -14.5);
  scene.add(banks);

  return {
    update(t) {
      mat.uniforms.uTime.value = t;
    },
  };
}
