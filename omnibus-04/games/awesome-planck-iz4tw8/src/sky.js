// Sky dome, sun, image-based lighting and time-of-day.
import * as THREE from 'three';

const skyVert = /* glsl */`
varying vec3 vDir;
void main(){
  vDir = normalize((modelMatrix * vec4(position,1.0)).xyz - cameraPosition);
  vec4 p = projectionMatrix * viewMatrix * vec4((modelMatrix*vec4(position,1.0)).xyz,1.0);
  gl_Position = p.xyww;
}`;

const skyFrag = /* glsl */`
uniform vec3 uSunDir;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uGround;
uniform vec3 uSunColor;
uniform float uSunSize;
uniform float uCloud;
uniform vec3 uCloudLit;
uniform vec3 uCloudShade;
uniform float uTime;
uniform float uStars;
varying vec3 vDir;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float noise(vec2 p){
  vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),u.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x), u.y);
}
float fbm(vec2 p){ float s=0.0,a=0.5; for(int i=0;i<5;i++){ s+=a*noise(p); p*=2.03; a*=0.5;} return s; }

void main(){
  vec3 d = normalize(vDir);
  float h = d.y;
  // base gradient
  float t = pow(clamp(h,0.0,1.0), 0.45);
  vec3 col = mix(uHorizon, uZenith, t);
  // below horizon: hazy ground-ish tone
  col = mix(col, uGround, smoothstep(0.0,-0.25,h));
  // sun + mie glow
  float cs = max(dot(d, uSunDir), 0.0);
  col += uSunColor * (pow(cs, 8.0)*0.10 + pow(cs, 64.0)*0.25);
  col += uSunColor * smoothstep(1.0-uSunSize, 1.0-uSunSize*0.6, cs) * 30.0;
  // horizon brightening (atmospheric haze)
  col += uHorizon * 0.12 * exp(-abs(h)*18.0);
  // clouds on a virtual plane
  if (h > 0.0) {
    vec2 uv = d.xz / (h + 0.08) * 0.9;
    uv += vec2(uTime*0.004, uTime*0.0015);
    float c = fbm(uv*1.2);
    c = smoothstep(0.52 - uCloud*0.25, 0.85, c);
    float fade = smoothstep(0.0, 0.18, h) ;
    float light = clamp(0.55 + 0.45*dot(normalize(vec3(uv.x,0.4,uv.y)), uSunDir), 0.0, 1.0);
    vec3 cc = mix(uCloudShade, uCloudLit, light);
    cc += uSunColor * pow(cs, 6.0) * 0.4;
    col = mix(col, cc, c*fade*0.85);
  }
  // stars (night)
  if (uStars > 0.0 && h > 0.0) {
    vec2 sp = d.xz / (h+0.3) * 220.0;
    float s = step(0.9975, hash(floor(sp)));
    col += vec3(s) * uStars * smoothstep(0.05,0.4,h) * 1.5;
  }
  gl_FragColor = vec4(col, 1.0);
}`;

export const PRESETS = {
  day: {
    sun: [-0.34, 0.62, 0.7], sunColor: [1.0, 0.93, 0.82], sunI: 5.6,
    zenith: [0.06, 0.19, 0.52], horizon: [0.48, 0.61, 0.79], ground: [0.44, 0.46, 0.47],
    hemiSky: [0.5, 0.63, 0.88], hemiGround: [0.4, 0.36, 0.3], hemiI: 0.24,
    fog: [0.56, 0.65, 0.77], fogD: 0.0024, cloud: 0.55, cloudLit: [1, 0.99, 0.96], cloudShade: [0.55, 0.6, 0.7],
    exposure: 0.86, lamps: 0.0, stars: 0, envI: 0.45,
  },
  morning: {
    sun: [0.72, 0.42, 0.55], sunColor: [1.0, 0.86, 0.68], sunI: 5.4,
    zenith: [0.07, 0.2, 0.52], horizon: [0.5, 0.62, 0.78], ground: [0.42, 0.44, 0.46],
    hemiSky: [0.5, 0.62, 0.85], hemiGround: [0.38, 0.33, 0.28], hemiI: 0.22,
    fog: [0.55, 0.64, 0.75], fogD: 0.0026, cloud: 0.5, cloudLit: [1.0, 0.96, 0.9], cloudShade: [0.5, 0.56, 0.68],
    exposure: 0.95, lamps: 0.0, stars: 0, envI: 0.42,
  },
  noon: {
    sun: [0.2, 0.9, 0.42], sunColor: [1.0, 0.97, 0.92], sunI: 5.2,
    zenith: [0.06, 0.2, 0.55], horizon: [0.52, 0.64, 0.8], ground: [0.45, 0.47, 0.48],
    hemiSky: [0.5, 0.64, 0.9], hemiGround: [0.42, 0.38, 0.32], hemiI: 0.24,
    fog: [0.58, 0.67, 0.78], fogD: 0.0024, cloud: 0.6, cloudLit: [1, 1, 1], cloudShade: [0.58, 0.62, 0.72],
    exposure: 0.85, lamps: 0.0, stars: 0, envI: 0.45,
  },
  evening: {
    sun: [-0.72, 0.2, 0.62], sunColor: [1.0, 0.55, 0.28], sunI: 4.4,
    zenith: [0.12, 0.17, 0.38], horizon: [0.95, 0.62, 0.42], ground: [0.4, 0.33, 0.3],
    hemiSky: [0.5, 0.5, 0.68], hemiGround: [0.38, 0.28, 0.22], hemiI: 0.22,
    fog: [0.8, 0.6, 0.48], fogD: 0.0032, cloud: 0.55, cloudLit: [1.0, 0.66, 0.45], cloudShade: [0.4, 0.34, 0.44],
    exposure: 1.05, lamps: 0.55, stars: 0, envI: 0.45,
  },
  night: {
    sun: [0.3, 0.55, 0.78], sunColor: [0.5, 0.62, 0.95], sunI: 0.5,
    zenith: [0.008, 0.014, 0.04], horizon: [0.05, 0.07, 0.12], ground: [0.02, 0.02, 0.03],
    hemiSky: [0.16, 0.22, 0.38], hemiGround: [0.06, 0.05, 0.05], hemiI: 0.3,
    fog: [0.05, 0.065, 0.1], fogD: 0.004, cloud: 0.3, cloudLit: [0.2, 0.23, 0.3], cloudShade: [0.05, 0.06, 0.09],
    exposure: 1.5, lamps: 1.0, stars: 1, envI: 0.35,
  },
};

export class Sky {
  constructor(renderer, scene) {
    this.renderer = renderer;
    this.scene = scene;
    this.uniforms = {
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uZenith: { value: new THREE.Color() },
      uHorizon: { value: new THREE.Color() },
      uGround: { value: new THREE.Color() },
      uSunColor: { value: new THREE.Color() },
      uSunSize: { value: 0.00012 },
      uCloud: { value: 0.5 },
      uCloudLit: { value: new THREE.Color() },
      uCloudShade: { value: new THREE.Color() },
      uTime: { value: 0 },
      uStars: { value: 0 },
    };
    const mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms, vertexShader: skyVert, fragmentShader: skyFrag,
      side: THREE.BackSide, depthWrite: false, fog: false,
    });
    this.mesh = new THREE.Mesh(new THREE.SphereGeometry(1500, 48, 24), mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 1000; // skip sky pixels already covered by opaque town geometry
    scene.add(this.mesh);

    this.sun = new THREE.DirectionalLight(0xffffff, 3);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.04;
    this.sun.shadow.radius = 3;
    const sc = this.sun.shadow.camera;
    sc.left = -22; sc.right = 22; sc.top = 22; sc.bottom = -22; sc.near = 1; sc.far = 220;
    scene.add(this.sun, this.sun.target);

    this.hemi = new THREE.HemisphereLight(0xbfd4ff, 0x6b6050, 0.5);
    scene.add(this.hemi);

    scene.fog = new THREE.FogExp2(0xcfd6dc, 0.004);
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.envScene = new THREE.Scene();
    this.envSky = new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), mat);
    this.envScene.add(this.envSky);
    this.cur = null;
    this.preset = 'morning';
  }

  set(name) {
    this.preset = name;
    const p = PRESETS[name];
    this.cur = JSON.parse(JSON.stringify(p));
    this.apply(this.cur);
    this.bakeEnv();
  }

  // blend from current to preset over time; call update(dt)
  blendTo(name, seconds = 4) {
    this.from = JSON.parse(JSON.stringify(this.cur));
    this.to = PRESETS[name];
    this.preset = name;
    this.blendT = 0; this.blendDur = seconds;
  }

  apply(p) {
    const u = this.uniforms;
    const sd = new THREE.Vector3(...p.sun).normalize();
    u.uSunDir.value.copy(sd);
    u.uZenith.value.setRGB(...p.zenith);
    u.uHorizon.value.setRGB(...p.horizon);
    u.uGround.value.setRGB(...p.ground);
    u.uSunColor.value.setRGB(...p.sunColor);
    u.uCloud.value = p.cloud;
    u.uCloudLit.value.setRGB(...p.cloudLit);
    u.uCloudShade.value.setRGB(...p.cloudShade);
    u.uStars.value = p.stars;
    this.sun.color.setRGB(...p.sunColor);
    this.sun.intensity = p.sunI;
    this.hemi.color.setRGB(...p.hemiSky);
    this.hemi.groundColor.setRGB(...p.hemiGround);
    this.hemi.intensity = p.hemiI;
    this.scene.fog.color.setRGB(...p.fog);
    this.scene.fog.density = p.fogD;
    this.scene.environmentIntensity = p.envI;
    this.sunDir = sd;
    this.exposure = p.exposure;
    this.lamps = p.lamps;
  }

  bakeEnv() {
    if (this.envRT) this.envRT.dispose();
    this.envRT = this.pmrem.fromScene(this.envScene, 0, 0.1, 100);
    this.scene.environment = this.envRT.texture;
  }

  update(dt, focus) {
    this.uniforms.uTime.value += dt;
    if (this.to) {
      this.blendT += dt / this.blendDur;
      const k = Math.min(1, this.blendT);
      const e = k * k * (3 - 2 * k);
      const out = {};
      for (const key in this.to) {
        const a = this.from[key], b = this.to[key];
        out[key] = Array.isArray(b) ? b.map((v, i) => a[i] + (v - a[i]) * e) : a + (b - a) * e;
      }
      this.cur = out;
      this.apply(out);
      this.envTick = (this.envTick || 0) + dt;
      if (this.envTick > 0.5 || k >= 1) { this.envTick = 0; this.bakeEnv(); }
      if (k >= 1) this.to = null;
    }
    // keep the shadow frustum centred on the action
    if (focus) {
      const d = this.sunDir;
      this.sun.target.position.copy(focus);
      this.sun.position.copy(focus).addScaledVector(d, 100);
      this.sun.target.updateMatrixWorld();
    }
    this.mesh.position.copy(focus || this.mesh.position);
  }
}
