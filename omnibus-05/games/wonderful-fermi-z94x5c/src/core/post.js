// HDR render target -> soft bloom (progressive down/up sampling) -> tone mapping,
// gentle grade, cloud mist, vignette -> screen.
import * as THREE from '../../lib/three.module.js';

const FS_VERT = /* glsl */ `
  varying vec2 vUv;
  void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

function fsMaterial(frag, uniforms) {
  return new THREE.ShaderMaterial({
    uniforms,
    vertexShader: FS_VERT,
    fragmentShader: frag,
    depthTest: false,
    depthWrite: false,
  });
}

export class Post {
  constructor(renderer, { msaa = 4, bloom = true } = {}) {
    this.renderer = renderer;
    this.bloomOn = bloom;
    const isGL2 = renderer.capabilities.isWebGL2;
    this.sceneRT = new THREE.WebGLRenderTarget(4, 4, {
      type: THREE.HalfFloatType,
      samples: isGL2 ? msaa : 0,
      depthBuffer: true,
    });
    this.levels = [];
    for (let i = 0; i < 5; i++) {
      const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, depthBuffer: false });
      rt.texture.minFilter = THREE.LinearFilter;
      rt.texture.magFilter = THREE.LinearFilter;
      rt.texture.generateMipmaps = false;
      this.levels.push(rt);
    }
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2));
    this.quad.frustumCulled = false;
    this.scene = new THREE.Scene();
    this.scene.add(this.quad);
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.prefilter = fsMaterial(
      /* glsl */ `
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThreshold;
      varying vec2 vUv;
      void main(){
        vec3 c = vec3(0.0);
        c += texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
        c += texture2D(tSrc, vUv + uTexel * vec2( 1.0, -1.0)).rgb;
        c += texture2D(tSrc, vUv + uTexel * vec2(-1.0,  1.0)).rgb;
        c += texture2D(tSrc, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
        c *= 0.25;
        float br = max(c.r, max(c.g, c.b));
        float soft = clamp(br - uThreshold + 0.5, 0.0, 1.0);
        soft = soft * soft * 0.5;
        float contrib = max(soft, br - uThreshold) / max(br, 1e-4);
        gl_FragColor = vec4(min(c * contrib, vec3(30.0)), 1.0);
      }`,
      { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uThreshold: { value: 1.0 } }
    );
    this.down = fsMaterial(
      /* glsl */ `
      uniform sampler2D tSrc; uniform vec2 uTexel; varying vec2 vUv;
      void main(){
        vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
        c += texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
        c += texture2D(tSrc, vUv + uTexel * vec2( 1.0, -1.0)).rgb;
        c += texture2D(tSrc, vUv + uTexel * vec2(-1.0,  1.0)).rgb;
        c += texture2D(tSrc, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
        gl_FragColor = vec4(c / 8.0, 1.0);
      }`,
      { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() } }
    );
    this.up = fsMaterial(
      /* glsl */ `
      uniform sampler2D tSrc; uniform sampler2D tBase; uniform vec2 uTexel; uniform float uMix; varying vec2 vUv;
      void main(){
        vec3 c = vec3(0.0);
        c += texture2D(tSrc, vUv + uTexel * vec2(-1.0, 0.0)).rgb * 2.0;
        c += texture2D(tSrc, vUv + uTexel * vec2( 1.0, 0.0)).rgb * 2.0;
        c += texture2D(tSrc, vUv + uTexel * vec2(0.0, -1.0)).rgb * 2.0;
        c += texture2D(tSrc, vUv + uTexel * vec2(0.0,  1.0)).rgb * 2.0;
        c += texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
        c += texture2D(tSrc, vUv + uTexel * vec2( 1.0, -1.0)).rgb;
        c += texture2D(tSrc, vUv + uTexel * vec2(-1.0,  1.0)).rgb;
        c += texture2D(tSrc, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
        c /= 12.0;
        gl_FragColor = vec4(texture2D(tBase, vUv).rgb + c * uMix, 1.0);
      }`,
      { tSrc: { value: null }, tBase: { value: null }, uTexel: { value: new THREE.Vector2() }, uMix: { value: 1 } }
    );
    this.final = fsMaterial(
      /* glsl */ `
      uniform sampler2D tScene; uniform sampler2D tBloom;
      uniform float uBloom; uniform float uMist; uniform vec3 uMistColor; uniform float uVignette;
      uniform float uExposure; uniform float uFade; uniform vec3 uFadeColor; uniform float uTime;
      varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main(){
        vec3 c = texture2D(tScene, vUv).rgb;
        vec3 b = texture2D(tBloom, vUv).rgb;
        c += b * uBloom;
        c *= uExposure;
        // drifting mist when inside a cloud
        float m = uMist * (0.75 + 0.25 * sin(vUv.x * 6.0 + uTime * 0.7) * sin(vUv.y * 5.0 - uTime * 0.5));
        c = mix(c, uMistColor, clamp(m, 0.0, 0.95));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        // soft vignette & grain (display space)
        vec2 q = vUv - 0.5;
        float v = 1.0 - dot(q, q) * uVignette;
        gl_FragColor.rgb *= v;
        gl_FragColor.rgb += (hash(vUv * 731.0 + uTime) - 0.5) * 0.012;
        gl_FragColor.rgb = mix(gl_FragColor.rgb, uFadeColor, uFade);
      }`,
      {
        tScene: { value: null },
        tBloom: { value: null },
        uBloom: { value: 0.55 },
        uMist: { value: 0 },
        uMistColor: { value: new THREE.Color(1.15, 1.12, 1.08) },
        uVignette: { value: 0.55 },
        uExposure: { value: 1.0 },
        uFade: { value: 0 },
        uFadeColor: { value: new THREE.Color(0.86, 0.92, 0.95) },
        uTime: { value: 0 },
      }
    );
    this.final.toneMapped = true;
    this.black = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1);
    this.black.needsUpdate = true;
  }

  setSize(w, h) {
    this.w = w;
    this.h = h;
    this.sceneRT.setSize(w, h);
    let bw = Math.max(1, w >> 1), bh = Math.max(1, h >> 1);
    for (const rt of this.levels) {
      rt.setSize(bw, bh);
      bw = Math.max(1, bw >> 1);
      bh = Math.max(1, bh >> 1);
    }
  }

  _pass(mat, target) {
    this.quad.material = mat;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.scene, this.cam);
  }

  render(scene, camera, time) {
    const r = this.renderer;
    r.setRenderTarget(this.sceneRT);
    r.clear();
    r.render(scene, camera);
    let bloomTex = this.black;
    if (this.bloomOn) {
      const L = this.levels;
      this.prefilter.uniforms.tSrc.value = this.sceneRT.texture;
      this.prefilter.uniforms.uTexel.value.set(1 / this.w, 1 / this.h);
      this._pass(this.prefilter, L[0]);
      for (let i = 1; i < L.length; i++) {
        this.down.uniforms.tSrc.value = L[i - 1].texture;
        this.down.uniforms.uTexel.value.set(1 / L[i - 1].width, 1 / L[i - 1].height);
        this._pass(this.down, L[i]);
      }
      // upsample, accumulating into the larger levels (in place is not allowed: use ping)
      for (let i = L.length - 1; i > 0; i--) {
        this.up.uniforms.tSrc.value = L[i].texture;
        this.up.uniforms.tBase.value = L[i - 1].texture;
        this.up.uniforms.uTexel.value.set(1 / L[i].width, 1 / L[i].height);
        // write into level i-1 via a temp: reuse sceneRT is not possible; render to a scratch
        if (!this.scratch || this.scratch[i - 1].width !== L[i - 1].width || this.scratch[i - 1].height !== L[i - 1].height) this._mkScratch();
        this._pass(this.up, this.scratch[i - 1]);
        // swap textures
        const t = L[i - 1];
        L[i - 1] = this.scratch[i - 1];
        this.scratch[i - 1] = t;
      }
      bloomTex = L[0].texture;
    }
    this.final.uniforms.tScene.value = this.sceneRT.texture;
    this.final.uniforms.tBloom.value = bloomTex;
    this.final.uniforms.uTime.value = time;
    this._pass(this.final, null);
  }

  _mkScratch() {
    if (this.scratch) for (const s of this.scratch) s.dispose();
    this.scratch = this.levels.map((l) => {
      const rt = new THREE.WebGLRenderTarget(l.width, l.height, { type: THREE.HalfFloatType, depthBuffer: false });
      rt.texture.generateMipmaps = false;
      return rt;
    });
  }
}
