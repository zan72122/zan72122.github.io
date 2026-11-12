// Material patches for organic surfaces (fur coat, skin, hair) on top of three's
// physically based materials so that shadows, fog and the environment still work.
import * as THREE from '../../lib/three.module.js';
import { GLSL_NOISE, GLSL_SPECTRUM, shared } from '../core/env.js';

/**
 * Short dense coat: sheen lobe + fine fur-flow normal streaks + soft wrap lighting +
 * back-lit rim translucency + baked SDF ambient occlusion.
 */
export function makeCoatMaterial({
  color = '#f4ede1',
  roughness = 0.62,
  sheen = 1.0,
  sheenColor = '#fff1e2',
  sheenRoughness = 0.42,
  furStrength = 0.22,
  furScale = 900,
  rim = 0.55,
  wrap = 0.42,
  scatter = new THREE.Color('#ffd9c4'),
  skinned = true,
  extra = null,
} = {}) {
  const m = new THREE.MeshPhysicalMaterial({
    color,
    roughness,
    metalness: 0,
    sheen,
    sheenColor: new THREE.Color(sheenColor),
    sheenRoughness,
    vertexColors: true,
    envMapIntensity: 0.9,
  });
  const uniforms = {
    uFur: { value: furStrength },
    uFurScale: { value: furScale },
    uRim: { value: rim },
    uWrap: { value: wrap },
    uScatter: { value: scatter },
    uWetSheen: { value: 0.0 },
    uLayerOn: shared.uLayerOn,
    uLayerBase: shared.uLayerBase,
    uLayerSpacing: shared.uLayerSpacing,
  };
  m.userData.uniforms = uniforms;
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
attribute float ao;
attribute vec3 flow;
attribute float region;
varying float vAo;
varying vec3 vFlowV;
varying vec3 vRest;
varying vec3 vRestFlow;
varying float vRegion;
varying vec3 vWPos;
`
      )
      .replace('#include <project_vertex>', '#include <project_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;')
      .replace(
        '#include <skinnormal_vertex>',
        `#include <skinnormal_vertex>
vec3 objFlow = flow;
#ifdef USE_SKINNING
objFlow = (skinMatrix * vec4(flow, 0.0)).xyz;
#endif
vFlowV = normalize(normalMatrix * objFlow);
vAo = ao;
vRest = position;
vRestFlow = flow;
vRegion = region;
`
      );
    sh.fragmentShader = sh.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
uniform float uFur;
uniform float uFurScale;
uniform float uRim;
uniform float uWrap;
uniform vec3 uScatter;
uniform float uWetSheen;
varying float vAo;
varying vec3 vFlowV;
varying vec3 vRest;
varying vec3 vRestFlow;
varying float vRegion;
varying vec3 vWPos;
uniform float uLayerOn;
uniform vec3 uLayerBase;
uniform float uLayerSpacing;
${GLSL_NOISE}
${GLSL_SPECTRUM}
`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
{
  // fine fur streaks: noise compressed along the hair flow direction
  vec3 rf = normalize(vRestFlow + 1e-5);
  vec3 q = vRest * uFurScale;
  q -= rf * dot(q, rf) * 0.92;
  float fw = length(fwidth(q));
  float fade = (1.0 - smoothstep(0.6, 2.2, fw)) * (1.0 - vRegion * 0.85);
  float n1 = vnoise3(q) - 0.5;
  float n2 = vnoise3(q * 0.37 + 11.0) - 0.5;
  vec3 ft = normalize(vFlowV - normal * dot(vFlowV, normal) + 1e-5);
  vec3 fb = cross(normal, ft);
  normal = normalize(normal + (fb * (n1 * 0.8 + n2 * 0.6) + ft * n2 * 0.25) * uFur * fade);
}
`
      )
      .replace(
        '#include <aomap_fragment>',
        `#include <aomap_fragment>
{
  float aoK = vAo;
  reflectedLight.indirectDiffuse *= aoK;
  reflectedLight.indirectSpecular *= aoK * aoK;
  reflectedLight.directDiffuse *= mix(1.0, aoK, 0.35);
  #if defined( USE_SHEEN )
  sheenSpecularIndirect *= aoK;
  sheenSpecularDirect *= mix(1.0, aoK, 0.5) * (1.0 - vRegion * 0.7);
  #endif
#if NUM_DIR_LIGHTS > 0
  vec3 L = directionalLights[0].direction;
  vec3 Lc = directionalLights[0].color;
  vec3 V = normalize(vViewPosition);
  float ndl = dot(normal, L);
  // wrapped diffuse: light bleeding through the soft coat at the terminator
  float w = max(0.0, (ndl + uWrap) / (1.0 + uWrap)) - max(0.0, ndl);
  reflectedLight.directDiffuse += Lc * diffuseColor.rgb * uScatter * w * 0.55 * aoK;
  // back-lit fur rim (sun behind the subject)
  float ndv = saturate(dot(normal, V));
  float back = pow(saturate(dot(-V, L)), 2.0);
  float rimK = pow(1.0 - ndv, 3.0);
  reflectedLight.directDiffuse += Lc * uScatter * rimK * (back * 0.9 + 0.12) * uRim * aoK;
#endif
  // coloured light layers at the top of the rainbow
  if (uLayerOn > 0.001) {
    float f = (vWPos.y - uLayerBase.y) / uLayerSpacing;
    float span = 5.0;
    float inside = smoothstep(-1.2, 0.0, f) * smoothstep(span + 1.2, span, f);
    vec2 dxz = vWPos.xz - uLayerBase.xz;
    // strongest where the layers gather (within arm's reach), faint further out
    float horiz = exp(-dot(dxz, dxz) / 0.03) + 0.1 * exp(-dot(dxz, dxz) / 0.8);
    float tt = clamp(f / span, 0.0, 1.0);
    float band = 0.5 + 0.5 * pow(abs(cos(f * 3.14159)), 4.0);
    vec3 lc = spectral(tt) * 1.5;
    vec3 Vv = normalize(vViewPosition);
    float k = inside * horiz * band * uLayerOn;
    reflectedLight.directDiffuse += diffuseColor.rgb * lc * k * 1.1;
    reflectedLight.directSpecular += lc * k * (0.15 + pow(1.0 - saturate(dot(normal, Vv)), 2.0) * 0.6);
  }
}
`
      );
    if (extra) extra(sh);
  };
  m.customProgramCacheKey = () => 'coat' + (skinned ? 's' : 'n') + (extra ? extra.key || 'x' : '');
  return m;
}

// Adds the default per-vertex attributes expected by the coat material to a plain geometry.
export function addCoatAttributes(geo, tint = [1, 1, 1], aoVal = 1, regionVal = 0) {
  const n = geo.attributes.position.count;
  if (!geo.attributes.color) {
    const c = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) c.set(tint, i * 3);
    geo.setAttribute('color', new THREE.BufferAttribute(c, 3));
  }
  if (!geo.attributes.ao) geo.setAttribute('ao', new THREE.BufferAttribute(new Float32Array(n).fill(aoVal), 1));
  if (!geo.attributes.region) geo.setAttribute('region', new THREE.BufferAttribute(new Float32Array(n).fill(regionVal), 1));
  if (!geo.attributes.flow) {
    const f = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) f.set([0, 1, 0], i * 3);
    geo.setAttribute('flow', new THREE.BufferAttribute(f, 3));
  }
  return geo;
}
