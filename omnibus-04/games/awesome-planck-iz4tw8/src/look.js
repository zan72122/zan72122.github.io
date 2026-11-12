// Global shader tweaks that make the CG read as a photograph:
//  - ambient occlusion where walls meet the ground
//  - interiors get far less sky light than the street (like a real exposure)
//  - low-frequency grime & rain streaks break up clean CG surfaces
//  - background blocks get procedural windows (facade shader)
import * as THREE from 'three';

export const LOOK = {
  uRoomMin: { value: Array.from({ length: 12 }, () => new THREE.Vector3(1e5, 1e5, 1e5)) },
  uRoomMax: { value: Array.from({ length: 12 }, () => new THREE.Vector3(-1e5, -1e5, -1e5)) },
  uInterior: { value: 0.42 },
  uGrime: { value: 1.0 },
  uNight: { value: 0.0 },
};

export function setRooms(rooms) {
  rooms.slice(0, 12).forEach((r, i) => {
    LOOK.uRoomMin.value[i].set(r.rx0 - 0.02, r.y0 - 0.05, r.rz0 - 0.02);
    LOOK.uRoomMax.value[i].set(r.rx1 + 0.02, r.y1 + 0.05, r.rz1 + 0.02);
  });
}

const NOISE = /* glsl */`
float lk_h(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float lk_n(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(lk_h(i+vec3(0,0,0)), lk_h(i+vec3(1,0,0)), f.x), mix(lk_h(i+vec3(0,1,0)), lk_h(i+vec3(1,1,0)), f.x), f.y),
             mix(mix(lk_h(i+vec3(0,0,1)), lk_h(i+vec3(1,0,1)), f.x), mix(lk_h(i+vec3(0,1,1)), lk_h(i+vec3(1,1,1)), f.x), f.y), f.z); }
`;

function patch(shader, mat) {
  if (!shader.fragmentShader.includes('#include <lights_fragment_end>')) return;
  shader.uniforms.uRoomMin = LOOK.uRoomMin;
  shader.uniforms.uRoomMax = LOOK.uRoomMax;
  shader.uniforms.uInterior = LOOK.uInterior;
  shader.uniforms.uGrime = LOOK.uGrime;
  shader.uniforms.uNight = LOOK.uNight;
  const facade = !!mat.userData.facade;
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', '#include <common>\nvarying vec3 vLkW;')
    .replace('#include <fog_vertex>', `#include <fog_vertex>
      { vec4 lkw = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          lkw = instanceMatrix * lkw;
        #endif
        vLkW = (modelMatrix * lkw).xyz;
      }`);
  let frag = shader.fragmentShader
    .replace('#include <common>', `#include <common>
      varying vec3 vLkW;
      uniform vec3 uRoomMin[12]; uniform vec3 uRoomMax[12];
      uniform float uInterior; uniform float uGrime; uniform float uNight;
      ${NOISE}`)
    .replace('#include <color_fragment>', `#include <color_fragment>
      {
        vec3 wp = vLkW;
        float g = lk_n(wp * 0.55) * 0.6 + lk_n(wp * 1.9) * 0.4;
        float streak = lk_n(vec3(wp.x * 4.0, wp.y * 0.25, wp.z * 4.0));
        diffuseColor.rgb *= 1.0 - uGrime * (0.09 * g + 0.06 * streak * smoothstep(0.35, 0.9, streak));
        ${facade ? `
        // procedural facade: storeys, window bays, dark glass, balcony slabs
        vec3 an = abs(normalize(cross(dFdx(wp), dFdy(wp))));
        float u = an.x > an.z ? wp.z : wp.x;
        float fl = wp.y / 2.9, fy = fract(fl), fu = fract(u / 1.8);
        float bay = step(0.18, fu) * step(fu, 0.82) * step(0.28, fy) * step(fy, 0.82);
        float slab = step(0.9, fy);
        float lit = step(0.7, lk_h(floor(vec3(u / 1.8, fl, 3.0)))) * uNight;
        vec3 glass = mix(vec3(0.1, 0.13, 0.17) + 0.08 * lk_n(vec3(u, fl, 0.0) * 1.7), vec3(1.4, 1.1, 0.7), lit);
        if (an.y < 0.5 && wp.y > 0.6) diffuseColor.rgb = mix(diffuseColor.rgb, glass, bay * 0.9);
        if (an.y < 0.5) diffuseColor.rgb *= 1.0 - slab * 0.18;
        ` : ''}
      }`)
    .replace('#include <lights_fragment_end>', `#include <lights_fragment_end>
      {
        vec3 wN = normalize((vec4(normal, 0.0) * viewMatrix).xyz);
        float vert = 1.0 - abs(wN.y);
        float hAO = mix(0.5, 1.0, smoothstep(0.0, 1.3, vLkW.y));
        float ao = mix(1.0, hAO, vert);
        float inside = 0.0;
        for (int i = 0; i < 12; i++) {
          vec3 a = step(uRoomMin[i], vLkW) * step(vLkW, uRoomMax[i]);
          inside = max(inside, a.x * a.y * a.z);
        }
        float k = mix(1.0, uInterior, inside);
        reflectedLight.indirectDiffuse *= ao * k;
        reflectedLight.indirectSpecular *= mix(1.0, 0.5, inside) * ao;
      }`);
  shader.fragmentShader = frag;
}

export function installLook() {
  THREE.Material.prototype.onBeforeCompile = function (shader) { patch(shader, this); };
  THREE.Material.prototype.customProgramCacheKey = function () { return this.userData.facade ? 'lk-facade' : 'lk'; };
}
