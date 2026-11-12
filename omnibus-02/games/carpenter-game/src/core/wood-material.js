import * as THREE from 'three';
import { clamp } from './util.js';
import { paintSystem } from './paint-system.js';

const registered = new Set();

export function createWoodMaterial(wood) {
  const mat = new THREE.MeshPhysicalMaterial({
    map: wood.map,
    color: 0xffffff,
    roughness: 0.84,
    metalness: 0,
    clearcoat: 0,
    envMapIntensity: 0.62,
  });
  mat.userData.isWood = true;
  patchWoodMaterial(mat, { triplanar: true, grainScale: wood.grainScale ?? 3.2 });
  return mat;
}

export function patchWoodMaterial(mat, { triplanar = false, grainScale = 3.0 } = {}) {
  if (mat.userData.painted) return mat;
  mat.userData.painted = true;
  mat.userData.triplanar = triplanar;
  mat.userData.uniforms = {
    uGrainScale: { value: grainScale },
    uPaintMask: { value: paintSystem.emptyTexture },
    uObjectSize: { value: new THREE.Vector3(1, 1, 1) },
    uPaintColor: { value: paintSystem.color },
    uPaintColor2: { value: paintSystem.color2 },
    uPaintOn: { value: 0 },
    uPaintGloss: { value: 0 },
    uRainbow: { value: 0 },
    uSand: { value: 0 },
  };
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, mat.userData.uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nvarying vec3 vObjPos;\nvarying vec3 vObjNrm;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvWPos = (modelMatrix * vec4(transformed,1.0)).xyz;\nvObjPos = position;\nvObjNrm = normal;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vWPos;
        varying vec3 vObjPos;
        varying vec3 vObjNrm;
        uniform float uGrainScale;
        uniform sampler2D uPaintMask;
        uniform vec3 uObjectSize;
        uniform vec3 uPaintColor;
        uniform vec3 uPaintColor2;
        uniform float uPaintOn;
        uniform float uPaintGloss;
        uniform float uRainbow;
        uniform float uSand;
        float paintAmount(){
          if(uPaintOn < 0.5) return 0.0;
          vec3 n = normalize(vObjNrm);
          vec3 an = abs(n);
          vec3 p = vObjPos / max(uObjectSize, vec3(0.0001)) + 0.5;
          vec2 uv;
          vec2 tile;
          if(an.x >= an.y && an.x >= an.z){
            uv = vec2(n.x >= 0.0 ? p.z : 1.0 - p.z, p.y);
            tile = n.x >= 0.0 ? vec2(0.0,0.0) : vec2(1.0,0.0);
          } else if(an.y >= an.z){
            uv = vec2(n.y >= 0.0 ? p.x : 1.0 - p.x, p.z);
            tile = n.y >= 0.0 ? vec2(2.0,0.0) : vec2(0.0,1.0);
          } else {
            uv = vec2(n.z >= 0.0 ? p.x : 1.0 - p.x, p.y);
            tile = n.z >= 0.0 ? vec2(1.0,1.0) : vec2(2.0,1.0);
          }
          float m = texture2D(uPaintMask, (tile + clamp(uv,0.0,1.0)) / vec2(3.0,2.0)).r;
          return clamp(smoothstep(0.16, 0.62, m), 0.0, 1.0);
        }
        vec3 rainbowCol(vec3 p){
          float t = clamp(p.y * 1.6 + p.x * 0.5 + 0.35, 0.0, 1.0);
          vec3 a = vec3(1.0,0.48,0.52), b = vec3(1.0,0.83,0.42), c = vec3(0.55,0.86,0.62), d = vec3(0.45,0.76,1.0), e=vec3(0.76,0.6,1.0);
          vec3 col = mix(a,b,smoothstep(0.0,0.25,t));
          col = mix(col,c,smoothstep(0.25,0.5,t));
          col = mix(col,d,smoothstep(0.5,0.75,t));
          return mix(col,e,smoothstep(0.75,1.0,t));
        }`)
      .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\n float _paint = paintAmount();');
    if (triplanar) {
      shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', `
        {
          vec3 n = abs(normalize(vObjNrm));
          vec3 w = pow(n, vec3(6.0));
          w /= max(0.0001, (w.x + w.y + w.z));
          vec3 p = vObjPos * uGrainScale;
          vec4 cx = texture2D(map, vec2(p.z, p.y));
          vec4 cy = texture2D(map, vec2(p.x, p.z));
          vec4 cz = texture2D(map, vec2(p.x, p.y));
          diffuseColor *= cx * w.x + cy * w.y + cz * w.z;
        }`);
    }
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <color_fragment>', `#include <color_fragment>
        {
          vec3 pcol = mix(uPaintColor, rainbowCol(vWPos), uRainbow);
          vec3 painted = mix(pcol, diffuseColor.rgb * pcol * 1.35, uPaintGloss * 0.55);
          diffuseColor.rgb = mix(diffuseColor.rgb, painted, _paint);
          diffuseColor.rgb *= mix(1.0, 1.06, uSand);
        }`)
      .replace('#include <roughnessmap_fragment>', `#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, mix(0.42, 0.12, uPaintGloss), _paint);
        roughnessFactor = mix(roughnessFactor, roughnessFactor * 0.55, uSand);`);
    mat.userData.shader = shader;
  };
  mat.customProgramCacheKey = () => (triplanar ? 'woodpaint-tp' : 'woodpaint');
  registered.add(mat);
  return mat;
}

export function syncPaintUniforms() {
  for (const mat of registered) {
    const uniforms = mat.userData.uniforms;
    if (!uniforms) continue;
    uniforms.uPaintColor.value = paintSystem.color;
    uniforms.uPaintColor2.value = paintSystem.color2;
    uniforms.uPaintOn.value = paintSystem.enabled;
    uniforms.uPaintGloss.value = paintSystem.gloss;
    uniforms.uRainbow.value = paintSystem.rainbow;
  }
}

export function setMaterialSand(mat, value) {
  if (mat.userData.uniforms) mat.userData.uniforms.uSand.value = clamp(value, 0, 1);
}
