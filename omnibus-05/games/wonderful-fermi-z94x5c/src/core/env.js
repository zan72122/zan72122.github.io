// Shared world constants: sun, sky palette, render layers, shared uniforms and GLSL snippets.
import * as THREE from '../../lib/three.module.js';

// Low afternoon sun, behind-left of a child facing +Z.
export const SUN_DIR = new THREE.Vector3(-0.45, 0.245, -0.86).normalize();
export const ANTISOLAR = SUN_DIR.clone().negate();
export const SUN_COLOR = new THREE.Color(1.0, 0.86, 0.7);

export const LAYER_MAIN = 0; // seen by main camera
export const LAYER_REFLECT = 1; // also seen by puddle reflection camera

export const shared = {
  uTime: { value: 0 },
  uSunDir: { value: SUN_DIR.clone() },
  uSunColor: { value: new THREE.Color(1.0, 0.88, 0.72).multiplyScalar(3.0) },
  uSkyZenith: { value: new THREE.Color('#7ab6e6') },
  uSkyHorizon: { value: new THREE.Color('#d6e9ef') },
  uSkyGround: { value: new THREE.Color('#b9c8b2') },
  uAmbient: { value: new THREE.Color('#a9c7e6') },
  uCameraPos: { value: new THREE.Vector3() },
  uRainbowSky: { value: 0.35 }, // strength of the ordinary rainbow in the sky
  uWind: { value: new THREE.Vector2(0.6, 0.3) },
  uWet: { value: 1.0 },
  uLayerOn: { value: 0 },
  uLayerBase: { value: new THREE.Vector3(0, -100, 0) },
  uLayerSpacing: { value: 0.085 },
};

// Light dispersion in water droplets.
// The deviation of sunlight leaving a raindrop clusters around 40.6deg (violet)
// .. 42.3deg (red) from the antisolar point for the primary bow, and 50-53deg
// (reversed) for the secondary bow.
export const GLSL_SPECTRUM = /* glsl */ `
vec3 bump3y(vec3 x, vec3 yoffset){ vec3 y = vec3(1.0) - x*x; return clamp(y - yoffset, 0.0, 1.0); }
// t: 0 = violet (400nm) .. 1 = red (700nm)
vec3 spectral(float t){
  float x = clamp(t, 0.0, 1.0);
  const vec3 c1 = vec3(3.54585104, 2.93225262, 2.41593945);
  const vec3 x1 = vec3(0.69549072, 0.49228336, 0.27699880);
  const vec3 y1 = vec3(0.02312639, 0.15225084, 0.52607955);
  const vec3 c2 = vec3(3.90307140, 3.21182957, 3.96587128);
  const vec3 x2 = vec3(0.11748627, 0.86755042, 0.66077860);
  const vec3 y2 = vec3(0.84897130, 0.88445281, 0.73949448);
  vec3 c = bump3y(c1 * (x - x1), y1) + bump3y(c2 * (x - x2), y2);
  return pow(c, vec3(1.6));
}
// Brightness and color of the light a droplet sends toward the eye, given the
// angle (degrees) between the view ray and the antisolar direction.
vec3 rainbowOptics(float ang, float widen){
  float w = widen;
  // primary bow 40.4..42.4 deg, red outside
  float tp = (ang - (40.2 - w)) / (2.4 + 2.0*w);
  float prim = smoothstep(-0.25, 0.05, tp) * smoothstep(1.25, 0.95, tp);
  vec3 c = spectral(tp) * prim * 1.6;
  // secondary bow 50..53.5 deg, reversed, fainter
  float ts = 1.0 - (ang - (50.0 - w)) / (3.4 + 2.0*w);
  float sec = smoothstep(-0.2, 0.05, ts) * smoothstep(1.2, 0.95, ts);
  c += spectral(ts) * sec * 0.45;
  // light scattered inside the primary bow is brighter than outside (Alexander's band)
  c += vec3(0.16) * (1.0 - smoothstep(36.0, 40.8, ang));
  c += vec3(0.05) * smoothstep(53.0, 58.0, ang);
  return c;
}
`;

export const GLSL_NOISE = /* glsl */ `
float hash11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash13(vec3 p3){ p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec3 hash33(vec3 p3){ p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yxx) * p3.zyx); }
float vnoise2(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash12(i), hash12(i+vec2(1,0)), u.x), mix(hash12(i+vec2(0,1)), hash12(i+vec2(1,1)), u.x), u.y);
}
float vnoise3(vec3 p){
  vec3 i = floor(p); vec3 f = fract(p); vec3 u = f*f*(3.0-2.0*f);
  return mix(mix(mix(hash13(i), hash13(i+vec3(1,0,0)), u.x), mix(hash13(i+vec3(0,1,0)), hash13(i+vec3(1,1,0)), u.x), u.y),
             mix(mix(hash13(i+vec3(0,0,1)), hash13(i+vec3(1,0,1)), u.x), mix(hash13(i+vec3(0,1,1)), hash13(i+vec3(1,1,1)), u.x), u.y), u.z);
}
float fbm2(vec2 p){ float s = 0.0, a = 0.5; for(int i=0;i<4;i++){ s += a*vnoise2(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
float fbm3(vec3 p){ float s = 0.0, a = 0.5; for(int i=0;i<4;i++){ s += a*vnoise3(p); p = p*2.03 + 17.1; a *= 0.5; } return s; }
`;

export function setLayers(obj, main = true, reflect = true) {
  obj.traverse((o) => {
    o.layers.disableAll();
    if (main) o.layers.enable(LAYER_MAIN);
    if (reflect) o.layers.enable(LAYER_REFLECT);
  });
}
