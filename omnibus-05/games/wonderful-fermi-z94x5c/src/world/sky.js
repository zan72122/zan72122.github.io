// Rain-washed sky: pale blue dome, low warm sun, and the ordinary rainbow that
// appears 42 degrees around the antisolar point.
import * as THREE from '../../lib/three.module.js';
import { shared, GLSL_SPECTRUM, GLSL_NOISE, LAYER_MAIN, LAYER_REFLECT } from '../core/env.js';

export function makeSkyMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uSunDir: shared.uSunDir,
      uZenith: shared.uSkyZenith,
      uHorizon: shared.uSkyHorizon,
      uGround: shared.uSkyGround,
      uRainbow: shared.uRainbowSky,
      uTime: shared.uTime,
      uCloudCover: { value: 1.0 },
    },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main(){
        vDir = normalize((modelMatrix * vec4(position, 0.0)).xyz);
        vec4 p = projectionMatrix * viewMatrix * vec4((modelMatrix * vec4(position,1.0)).xyz, 1.0);
        gl_Position = vec4(p.xy, p.w * 0.99999, p.w);
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uSunDir, uZenith, uHorizon, uGround;
      uniform float uRainbow, uTime, uCloudCover;
      varying vec3 vDir;
      ${GLSL_SPECTRUM}
      ${GLSL_NOISE}
      void main(){
        vec3 d = normalize(vDir);
        float y = d.y;
        float h = clamp(y, 0.0, 1.0);
        vec3 col = mix(uHorizon, uZenith, pow(h, 0.55));
        // warm band toward the low sun
        float sd = dot(d, uSunDir);
        float sunSide = 0.5 + 0.5 * sd;
        col = mix(col, vec3(1.0, 0.9, 0.74) * 1.15, pow(sunSide, 6.0) * (1.0 - h) * 0.8);
        col += vec3(1.0, 0.82, 0.6) * pow(max(sd, 0.0), 24.0) * 0.9;
        col += vec3(1.0, 0.9, 0.75) * pow(max(sd, 0.0), 300.0) * 5.0;
        col += vec3(1.0, 0.97, 0.9) * smoothstep(0.99955, 0.99975, sd) * 14.0;
        // high thin cloud veils
        vec2 cp = d.xz / (y + 0.12);
        float cir = fbm2(cp * 1.4 + vec2(uTime * 0.004, 0.0));
        cir = smoothstep(0.52, 0.85, cir) * smoothstep(0.02, 0.25, y) * uCloudCover;
        vec3 cirCol = mix(vec3(0.98, 0.97, 0.95), vec3(1.0, 0.9, 0.78), pow(sunSide, 3.0));
        col = mix(col, cirCol * 1.1, cir * 0.35);
        // ordinary rainbow around the antisolar point (in the distant shower)
        float ang = degrees(acos(clamp(dot(d, -uSunDir), -1.0, 1.0)));
        vec3 bow = rainbowOptics(ang, 0.6);
        float rainMask = smoothstep(-0.01, 0.06, y) * (0.55 + 0.45 * smoothstep(0.55, 0.1, y));
        col += bow * uRainbow * rainMask * 0.32;
        // below horizon: distant haze
        col = mix(col, uGround, smoothstep(0.0, -0.08, y));
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: true,
  });
}

export class Sky {
  constructor() {
    this.material = makeSkyMaterial();
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 24), this.material);
    this.mesh.scale.setScalar(5000);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = -1000;
    this.mesh.layers.enable(LAYER_MAIN);
    this.mesh.layers.enable(LAYER_REFLECT);
    this.mesh.onBeforeRender = (r, s, cam) => {
      this.mesh.position.copy(cam.position);
      this.mesh.updateMatrixWorld();
    };
  }

  // Environment map for image based lighting (rendered once).
  makeEnvironment(renderer) {
    const scene = new THREE.Scene();
    const m = makeSkyMaterial();
    m.uniforms.uRainbow = { value: 0 };
    const sky = new THREE.Mesh(new THREE.SphereGeometry(100, 32, 16), m);
    scene.add(sky);
    // green ground bounce
    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(90, 32).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: new THREE.Color('#5d7a3c') })
    );
    ground.position.y = -2;
    scene.add(ground);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const rt = pmrem.fromScene(scene, 0.02);
    pmrem.dispose();
    return rt.texture;
  }
}
