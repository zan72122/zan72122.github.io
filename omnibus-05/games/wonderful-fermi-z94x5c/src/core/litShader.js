// Helper to build ShaderMaterials that receive the sun's shadow map and scene fog.
import * as THREE from '../../lib/three.module.js';

export function litShaderMaterial({ uniforms = {}, vertexShader, fragmentShader, ...rest }) {
  const u = THREE.UniformsUtils.merge([THREE.UniformsLib.lights, THREE.UniformsLib.fog]);
  // keep shared uniform objects (merge clones them, so re-assign afterwards)
  Object.assign(u, uniforms);
  return new THREE.ShaderMaterial({
    uniforms: u,
    vertexShader,
    fragmentShader,
    lights: true,
    fog: true,
    ...rest,
  });
}

// Vertex prelude/epilogue to compute shadow coords given vec4 worldPosition, vec4 mvPosition, vec3 transformedNormal.
export const SHADOW_VERT_PARS = /* glsl */ `
#include <common>
#include <shadowmap_pars_vertex>
#include <fog_pars_vertex>
`;
export const SHADOW_VERT = /* glsl */ `
#include <shadowmap_vertex>
#include <fog_vertex>
`;
export const SHADOW_FRAG_PARS = /* glsl */ `
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
`;
