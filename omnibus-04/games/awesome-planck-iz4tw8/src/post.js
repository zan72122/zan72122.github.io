// Minimal photographic post pipeline:
// HDR scene -> bloom (dual filter) -> composite (exposure, ACES, grade, vignette, CA, grain).
import * as THREE from 'three';

const quadVert = /* glsl */`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const brightFrag = /* glsl */`
uniform sampler2D tDiffuse; uniform float uThreshold; uniform vec2 uTexel;
varying vec2 vUv;
void main(){
  vec3 c = vec3(0.0);
  c += texture2D(tDiffuse, vUv + uTexel*vec2(-1.0,-1.0)).rgb;
  c += texture2D(tDiffuse, vUv + uTexel*vec2( 1.0,-1.0)).rgb;
  c += texture2D(tDiffuse, vUv + uTexel*vec2(-1.0, 1.0)).rgb;
  c += texture2D(tDiffuse, vUv + uTexel*vec2( 1.0, 1.0)).rgb;
  c *= 0.25;
  float l = dot(c, vec3(0.2126,0.7152,0.0722));
  float k = max(l - uThreshold, 0.0) / max(l, 1e-4);
  gl_FragColor = vec4(min(c * k, vec3(40.0)), 1.0);
}`;

const downFrag = /* glsl */`
uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec3 s = texture2D(tDiffuse, vUv).rgb * 4.0;
  s += texture2D(tDiffuse, vUv - uTexel).rgb;
  s += texture2D(tDiffuse, vUv + uTexel).rgb;
  s += texture2D(tDiffuse, vUv + vec2(uTexel.x, -uTexel.y)).rgb;
  s += texture2D(tDiffuse, vUv - vec2(uTexel.x, -uTexel.y)).rgb;
  gl_FragColor = vec4(s / 8.0, 1.0);
}`;

const upFrag = /* glsl */`
uniform sampler2D tDiffuse; uniform sampler2D tPrev; uniform vec2 uTexel; varying vec2 vUv;
void main(){
  vec2 h = uTexel * 0.5;
  vec3 s = texture2D(tDiffuse, vUv + vec2(-h.x*2.0, 0.0)).rgb;
  s += texture2D(tDiffuse, vUv + vec2(-h.x, h.y)).rgb * 2.0;
  s += texture2D(tDiffuse, vUv + vec2(0.0, h.y*2.0)).rgb;
  s += texture2D(tDiffuse, vUv + vec2(h.x, h.y)).rgb * 2.0;
  s += texture2D(tDiffuse, vUv + vec2(h.x*2.0, 0.0)).rgb;
  s += texture2D(tDiffuse, vUv + vec2(h.x, -h.y)).rgb * 2.0;
  s += texture2D(tDiffuse, vUv + vec2(0.0, -h.y*2.0)).rgb;
  s += texture2D(tDiffuse, vUv + vec2(-h.x, -h.y)).rgb * 2.0;
  gl_FragColor = vec4(s / 12.0 + texture2D(tPrev, vUv).rgb, 1.0);
}`;

const compFrag = /* glsl */`
uniform sampler2D tScene; uniform sampler2D tBloom;
uniform float uExposure; uniform float uBloom; uniform float uTime;
uniform vec2 uRes; uniform float uGrain; uniform float uVignette; uniform float uCA;
uniform vec3 uLift; uniform vec3 uGain; uniform float uSat; uniform float uFade;
uniform sampler2D tDepth; uniform sampler2D tBlur; uniform float uNear; uniform float uFar; uniform float uFocus; uniform float uDof;
varying vec2 vUv;
float viewZ(float d){ return (uNear * uFar) / ((uFar - uNear) * d - uFar); }

vec3 aces(vec3 x){
  const float a=2.51, b=0.03, c=2.43, d=0.59, e=0.14;
  return clamp((x*(a*x+b))/(x*(c*x+d)+e), 0.0, 1.0);
}
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
vec3 toSRGB(vec3 c){ return mix(c*12.92, 1.055*pow(c, vec3(1.0/2.4)) - 0.055, step(0.0031308, c)); }

void main(){
  vec2 uv = vUv;
  vec2 cc = uv - 0.5;
  float r2 = dot(cc, cc);
  // slight barrel distortion like a real lens
  uv = 0.5 + cc * (1.0 - 0.018 * r2);
  // chromatic aberration grows to the edges
  vec2 off = cc * uCA * r2;
  vec3 col;
  col.r = texture2D(tScene, uv + off).r;
  col.g = texture2D(tScene, uv).g;
  col.b = texture2D(tScene, uv - off).b;
  // depth of field of a long lens: soft background, soft near foreground
  if (uDof > 0.0) {
    float z = -viewZ(texture2D(tDepth, uv).r);
    float coc = clamp(abs(1.0 / uFocus - 1.0 / max(z, 0.1)) * uDof, 0.0, 1.0);
    coc = smoothstep(0.08, 0.9, coc);
    col = mix(col, texture2D(tBlur, uv).rgb, coc);
  }
  col += texture2D(tBloom, uv).rgb * uBloom;
  col *= uExposure;
  col = aces(col);
  // grade (in display-ish space)
  col = pow(col, vec3(0.97));
  col = mix(col, col * col * (3.0 - 2.0 * col), 0.18); // gentle S-curve
  float l = dot(col, vec3(0.2126,0.7152,0.0722));
  col = mix(vec3(l), col, uSat);
  col = col * uGain + uLift * (1.0 - col);
  // vignette
  float v = smoothstep(0.9, 0.18, sqrt(r2) * (0.9 + uVignette));
  col *= mix(1.0, v, 0.55);
  col = toSRGB(clamp(col, 0.0, 1.0));
  // film grain (luma-weighted) + dithering
  float g = hash(vUv * uRes + fract(uTime * 13.7)) - 0.5;
  col += g * uGrain * (1.0 - l * 0.6);
  col = mix(col, vec3(0.93,0.95,0.96), uFade);
  gl_FragColor = vec4(col, 1.0);
}`;

function rt(w, h, type, samples = 0) {
  return new THREE.WebGLRenderTarget(w, h, {
    type, samples: Math.max(0, samples), depthBuffer: samples >= 0,
    minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
    colorSpace: THREE.LinearSRGBColorSpace,
  });
}

export class Post {
  constructor(renderer) {
    this.r = renderer;
    this.type = THREE.HalfFloatType;
    this.levels = 5;
    this.samples = 4;
    this.scene = null; this.bright = null; this.down = []; this.up = [];
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
    this.quad.frustumCulled = false;
    this.qScene = new THREE.Scene(); this.qScene.add(this.quad);
    this.qCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const mk = (frag, uniforms) => new THREE.ShaderMaterial({ vertexShader: quadVert, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false });
    this.mBright = mk(brightFrag, { tDiffuse: { value: null }, uThreshold: { value: 1.6 }, uTexel: { value: new THREE.Vector2() } });
    this.mDown = mk(downFrag, { tDiffuse: { value: null }, uTexel: { value: new THREE.Vector2() } });
    this.mUp = mk(upFrag, { tDiffuse: { value: null }, tPrev: { value: null }, uTexel: { value: new THREE.Vector2() } });
    this.mComp = mk(compFrag, {
      tScene: { value: null }, tBloom: { value: null }, uExposure: { value: 1 }, uBloom: { value: 0.22 },
      uTime: { value: 0 }, uRes: { value: new THREE.Vector2() }, uGrain: { value: 0.045 }, uVignette: { value: 0.25 },
      uCA: { value: 0.006 }, uLift: { value: new THREE.Vector3(0.012, 0.013, 0.02) }, uGain: { value: new THREE.Vector3(1.0, 0.99, 0.97) },
      uSat: { value: 1.06 }, uFade: { value: 0 },
      tDepth: { value: null }, tBlur: { value: null }, uNear: { value: 0.3 }, uFar: { value: 2500 }, uFocus: { value: 40 }, uDof: { value: 38 },
    });
    this.dof = true;
    this.black = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1); this.black.needsUpdate = true;
  }

  setSize(w, h, pixelRatio) {
    const W = Math.max(1, Math.floor(w * pixelRatio)), H = Math.max(1, Math.floor(h * pixelRatio));
    this.W = W; this.H = H;
    [this.scene, this.bright, ...this.down, ...this.up].forEach(t => t && t.dispose());
    this.scene = rt(W, H, this.type, this.samples);
    this.scene.depthBuffer = true;
    this.scene.depthTexture = new THREE.DepthTexture(W, H);
    this.scene.depthTexture.type = THREE.UnsignedIntType;
    [this.dofA, this.dofB, this.dofC].forEach(t => t && t.dispose());
    this.dofA = rt(Math.max(1, W >> 1), Math.max(1, H >> 1), this.type, -1);
    this.dofB = rt(Math.max(1, W >> 2), Math.max(1, H >> 2), this.type, -1);
    this.dofC = rt(Math.max(1, W >> 1), Math.max(1, H >> 1), this.type, -1);
    let bw = W >> 1, bh = H >> 1;
    this.bright = rt(bw, bh, this.type, -1);
    this.down = []; this.up = [];
    for (let i = 0; i < this.levels; i++) {
      bw = Math.max(1, bw >> 1); bh = Math.max(1, bh >> 1);
      this.down.push(rt(bw, bh, this.type, -1));
      this.up.push(rt(bw, bh, this.type, -1));
    }
    this.mComp.uniforms.uRes.value.set(W, H);
  }

  pass(mat, target) {
    this.quad.material = mat;
    this.r.setRenderTarget(target);
    this.r.render(this.qScene, this.qCam);
  }

  render(scene, camera, dt, opts = {}) {
    const r = this.r;
    r.setRenderTarget(this.scene);
    r.render(scene, camera);

    const bloomOn = opts.bloom !== false;
    if (bloomOn) {
      this.mBright.uniforms.tDiffuse.value = this.scene.texture;
      this.mBright.uniforms.uTexel.value.set(1 / this.W, 1 / this.H);
      this.pass(this.mBright, this.bright);
      let src = this.bright;
      for (let i = 0; i < this.levels; i++) {
        this.mDown.uniforms.tDiffuse.value = src.texture;
        this.mDown.uniforms.uTexel.value.set(1 / src.width, 1 / src.height);
        this.pass(this.mDown, this.down[i]);
        src = this.down[i];
      }
      let prev = this.black;
      for (let i = this.levels - 1; i >= 0; i--) {
        const s = i === this.levels - 1 ? this.down[i] : this.up[i + 1];
        this.mUp.uniforms.tDiffuse.value = s.texture;
        this.mUp.uniforms.tPrev.value = i === this.levels - 1 ? this.black : this.down[i].texture;
        this.mUp.uniforms.uTexel.value.set(1 / s.width, 1 / s.height);
        this.pass(this.mUp, this.up[i]);
        prev = this.up[i];
      }
      this.mComp.uniforms.tBloom.value = this.up[0].texture;
    } else {
      this.mComp.uniforms.tBloom.value = this.black;
    }
    const u = this.mComp.uniforms;
    if (this.dof && opts.focus) {
      // blurred copy of the frame for depth of field
      this.mDown.uniforms.tDiffuse.value = this.scene.texture;
      this.mDown.uniforms.uTexel.value.set(1 / this.W, 1 / this.H);
      this.pass(this.mDown, this.dofA);
      this.mDown.uniforms.tDiffuse.value = this.dofA.texture;
      this.mDown.uniforms.uTexel.value.set(1 / this.dofA.width, 1 / this.dofA.height);
      this.pass(this.mDown, this.dofB);
      this.mUp.uniforms.tDiffuse.value = this.dofB.texture;
      this.mUp.uniforms.tPrev.value = this.black;
      this.mUp.uniforms.uTexel.value.set(1 / this.dofB.width, 1 / this.dofB.height);
      this.pass(this.mUp, this.dofC);
      u.tBlur.value = this.dofC.texture;
      u.tDepth.value = this.scene.depthTexture;
      u.uNear.value = camera.near; u.uFar.value = camera.far; u.uFocus.value = opts.focus;
      u.uDof.value = opts.dof ?? 28;
    } else u.uDof.value = 0;
    u.tScene.value = this.scene.texture;
    u.uTime.value += dt;
    if (opts.exposure !== undefined) u.uExposure.value = opts.exposure;
    if (opts.fade !== undefined) u.uFade.value = opts.fade;
    this.pass(this.mComp, null);
  }
}
