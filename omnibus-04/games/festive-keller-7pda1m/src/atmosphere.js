import * as THREE from 'three';
import { GLSL_NOISE } from './util.js';

// Morning after rain. The sun sits to the front-left of the starting view.
export const SUN_DIR = new THREE.Vector3(-0.72, 0.52, -0.46).normalize();
export const SUN_COLOR = new THREE.Color(1.0, 0.93, 0.82);
export const SKY_ZENITH = new THREE.Color(0.1, 0.27, 0.66);
export const SKY_HORIZON = new THREE.Color(0.56, 0.7, 0.86);
export const SUN_GLOW = new THREE.Color(1.0, 0.82, 0.6);
export const GROUND_HAZE = new THREE.Color(0.42, 0.47, 0.5);

const v3 = (c) => `vec3(${c.x.toFixed(5)}, ${c.y.toFixed(5)}, ${c.z.toFixed(5)})`;
const c3 = (c) => `vec3(${c.r.toFixed(5)}, ${c.g.toFixed(5)}, ${c.b.toFixed(5)})`;

// Shared GLSL used by the sky dome and by fog: a function of view direction.
export const GLSL_ATMO = /* glsl */ `
const vec3 ATMO_SUN = ${v3(SUN_DIR)};
const vec3 ATMO_SUNGLOW = ${c3(SUN_GLOW)};
const vec3 ATMO_ZENITH = ${c3(SKY_ZENITH)};
const vec3 ATMO_GROUNDHAZE = ${c3(GROUND_HAZE)};
vec3 atmoFog(vec3 dir, vec3 horizon) {
  float sd = max(dot(dir, ATMO_SUN), 0.0);
  vec3 c = horizon;
  c = mix(c, ATMO_GROUNDHAZE, smoothstep(0.0, -0.5, dir.y) * 0.55);
  c += ATMO_SUNGLOW * (pow(sd, 5.0) * 0.35);
  return c;
}
vec3 atmoSky(vec3 dir, vec3 horizon) {
  float y = dir.y;
  float up = max(y, 0.0);
  vec3 c = mix(horizon, ATMO_ZENITH, pow(up, 0.5));
  c = mix(c, atmoFog(dir, horizon), smoothstep(0.02, -0.12, y));
  float sd = max(dot(dir, ATMO_SUN), 0.0);
  c += ATMO_SUNGLOW * (pow(sd, 6.0) * 0.28 + pow(sd, 90.0) * 0.55);
  c += vec3(0.05, 0.05, 0.045) * exp(-abs(y) * 14.0);
  return c;
}
`;

// Height-dependent aerial perspective replacing three's built-in fog.
// fogColor acts as the horizon colour, fogDensity as ground-level density.
function patchFogChunks() {
  const C = THREE.ShaderChunk;
  C.fog_pars_vertex = /* glsl */ `
#ifdef USE_FOG
  varying vec3 vFogWPos;
#endif`;
  C.fog_vertex = /* glsl */ `
#ifdef USE_FOG
  vFogWPos = cameraPosition + (vec4(mvPosition.xyz, 0.0) * viewMatrix).xyz;
#endif`;
  C.fog_pars_fragment = /* glsl */ `
#ifdef USE_FOG
  uniform vec3 fogColor;
  varying vec3 vFogWPos;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
  ${GLSL_ATMO}
  float atmoFogAmount(vec3 wpos) {
    #ifdef FOG_EXP2
      float dens = fogDensity;
    #else
      float dens = 0.004;
    #endif
    vec3 ray = wpos - cameraPosition;
    float dist = length(ray);
    float H = 42.0;
    float h0 = max(cameraPosition.y, 0.0);
    float h1 = max(wpos.y, 0.0);
    float dh = h1 - h0;
    float e0 = exp(-h0 / H);
    float avg = abs(dh) > 0.05 ? (e0 - exp(-h1 / H)) * H / dh : e0;
    float od = dens * dist * avg + 0.00016 * dist;
    return 1.0 - exp(-od);
  }
#endif`;
  C.fog_fragment = /* glsl */ `
#ifdef USE_FOG
  {
    vec3 fray = vFogWPos - cameraPosition;
    vec3 fdir = normalize(fray);
    float ff = atmoFogAmount(vFogWPos);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, atmoFog(fdir, fogColor), ff);
  }
#endif`;
}

export class Atmosphere {
  constructor(renderer, scene) {
    patchFogChunks();
    this.renderer = renderer;
    this.scene = scene;
    this.baseHorizon = SKY_HORIZON.clone();
    this.baseDensity = 0.0028;
    scene.fog = new THREE.FogExp2(SKY_HORIZON.clone(), this.baseDensity);
    this.cloudFog = 0; // 0..1 while the camera is inside a cloud
    this.rainbowTint = new THREE.Color(0, 0, 0);

    // --- sky dome -----------------------------------------------------------
    this.skyUniforms = {
      uHorizon: { value: SKY_HORIZON.clone() },
      uEnvMode: { value: 0 },
      uTime: { value: 0 },
    };
    const skyMat = new THREE.ShaderMaterial({
      uniforms: this.skyUniforms,
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() {
          vDir = normalize((modelMatrix * vec4(position, 0.0)).xyz);
          vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = p.xyww;
        }`,
      fragmentShader: /* glsl */ `
        uniform vec3 uHorizon;
        uniform float uEnvMode;
        varying vec3 vDir;
        ${GLSL_ATMO}
        ${GLSL_NOISE}
        void main() {
          vec3 d = normalize(vDir);
          vec3 c = atmoSky(d, uHorizon);
          // Faint high cirrus streaks for depth in the upper sky.
          if (d.y > 0.0) {
            vec2 p = d.xz / (d.y + 0.15) * 1.6;
            float ci = fbm3(p * vec2(1.0, 3.5) + vec2(0.3, 0.0));
            ci = smoothstep(0.55, 0.85, ci) * smoothstep(0.02, 0.25, d.y) * 0.22;
            c = mix(c, vec3(0.95, 0.96, 1.0), ci);
          }
          // Sun disc (kept out of the environment map to avoid fireflies).
          float sd = dot(d, ATMO_SUN);
          c += vec3(1.0, 0.95, 0.85) * smoothstep(0.99965, 0.99988, sd) * 18.0 * (1.0 - uEnvMode);
          // Environment map: darker lower hemisphere (wet ground + trees).
          if (uEnvMode > 0.5 && d.y < 0.0) {
            c = mix(c, vec3(0.10, 0.12, 0.10), smoothstep(0.0, -0.15, d.y));
          }
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(10, 48, 24), skyMat);
    this.sky.frustumCulled = false;
    this.sky.renderOrder = -10;
    scene.add(this.sky);

    // --- lights -------------------------------------------------------------
    this.sun = new THREE.DirectionalLight(SUN_COLOR, 3.1);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.03;
    this.sun.shadow.radius = 2;
    const sc = this.sun.shadow.camera;
    sc.left = -22; sc.right = 22; sc.top = 22; sc.bottom = -22;
    sc.near = 1; sc.far = 220;
    scene.add(this.sun);
    scene.add(this.sun.target);
    this.shadowExtent = 22;

    this.hemi = new THREE.HemisphereLight(new THREE.Color(0.62, 0.74, 0.95), new THREE.Color(0.34, 0.33, 0.28), 1.05);
    scene.add(this.hemi);
    this.hemiSkyBase = this.hemi.color.clone();

    this.envMap = null;
    this.buildEnvironment();
  }

  buildEnvironment() {
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const envScene = new THREE.Scene();
    const envSky = this.sky.clone();
    envSky.material = this.sky.material.clone();
    envSky.material.uniforms = {
      uHorizon: { value: SKY_HORIZON.clone() },
      uEnvMode: { value: 1 },
      uTime: { value: 0 },
    };
    envSky.scale.setScalar(50);
    envScene.add(envSky);
    // A soft bright sun blob so glossy things get a believable highlight.
    const blob = new THREE.Mesh(
      new THREE.SphereGeometry(4, 16, 8),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(9, 8.2, 7) })
    );
    blob.position.copy(SUN_DIR).multiplyScalar(45);
    envScene.add(blob);
    const rt = pmrem.fromScene(envScene, 0.02, 0.1, 100);
    this.envMap = rt.texture;
    this.scene.environment = this.envMap;
    this.scene.environmentIntensity = 0.75;
    pmrem.dispose();
  }

  setShadowQuality(size, extent) {
    const s = this.sun.shadow;
    if (s.mapSize.x !== size) {
      s.mapSize.set(size, size);
      if (s.map) { s.map.dispose(); s.map = null; }
    }
    this.shadowExtent = extent;
    const c = s.camera;
    c.left = -extent; c.right = extent; c.top = extent; c.bottom = -extent;
    c.updateProjectionMatrix();
  }

  // Keep the shadow frustum centred on what the camera is looking at,
  // snapped to texels to avoid shimmering.
  update(dt, camera, focus, rainbowPresence, rainbowColor) {
    this.sky.position.copy(camera.position);
    this.sky.scale.setScalar(camera.far * 0.9);

    const ext = this.shadowExtent;
    const texel = (ext * 2) / this.sun.shadow.mapSize.x;
    const cx = Math.round(focus.x / texel) * texel;
    const cz = Math.round(focus.z / texel) * texel;
    const cy = Math.max(0, focus.y * 0.5);
    this.sun.target.position.set(cx, cy, cz);
    this.sun.position.set(cx + SUN_DIR.x * 110, cy + SUN_DIR.y * 110, cz + SUN_DIR.z * 110);
    this.sun.target.updateMatrixWorld();

    // Rainbows subtly change the light of the whole world.
    const p = Math.min(rainbowPresence, 1);
    const hz = this.scene.fog.color;
    hz.copy(this.baseHorizon);
    if (rainbowColor) hz.lerp(rainbowColor, 0.06 * p);
    // Inside a cloud: white, dense.
    hz.lerp(new THREE.Color(0.86, 0.88, 0.9), this.cloudFog * 0.9);
    this.scene.fog.density = this.baseDensity + this.cloudFog * 0.16;
    this.skyUniforms.uHorizon.value.copy(this.baseHorizon);
    this.hemi.color.copy(this.hemiSkyBase);
    if (rainbowColor) this.hemi.color.lerp(rainbowColor, 0.08 * p);
  }
}
