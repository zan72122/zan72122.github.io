import * as THREE from 'three';
import { CONFIG } from './config.js';

// 軽量自作Bloom。
// シーンを sRGB8 + MSAA のRTへリニアのまま描き(threeはRT描画時に
// トーンマップ/sRGB符号化を行わない)、1/4解像度のブライトパス→
// ガウスブラーH/V→最終合成シェーダで bloom加算 + ACES + sRGB符号化を行う。
// OFF時は従来どおり画面へ直描き(canvasのMSAAが効く)。

const BLUR_GLSL = /* glsl */`
  uniform sampler2D tInput;
  uniform vec2 uTexel;
  uniform vec2 uDir;
  varying vec2 vUv;
  void main() {
    // 9タップ相当(リニアサンプリング5フェッチ)
    vec2 off1 = uDir * uTexel * 1.3846153846;
    vec2 off2 = uDir * uTexel * 3.2307692308;
    vec3 c = texture2D(tInput, vUv).rgb * 0.2270270270;
    c += texture2D(tInput, vUv + off1).rgb * 0.3162162162;
    c += texture2D(tInput, vUv - off1).rgb * 0.3162162162;
    c += texture2D(tInput, vUv + off2).rgb * 0.0702702703;
    c += texture2D(tInput, vUv - off2).rgb * 0.0702702703;
    gl_FragColor = vec4(c, 1.0);
  }`;

const FULLSCREEN_VERT = /* glsl */`
  varying vec2 vUv;
  void main() {
    vUv = position.xy * 0.5 + 0.5;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }`;

export class PostFX {
  constructor(renderer) {
    this.renderer = renderer;
    this.enabled = renderer.capabilities.isWebGL2; // WebGL1ではBloom不可

    // フルスクリーン三角形
    const triGeo = new THREE.BufferGeometry();
    triGeo.setAttribute('position', new THREE.Float32BufferAttribute(
      [-1, -1, 0, 3, -1, 0, -1, 3, 0], 3
    ));
    this._quad = new THREE.Mesh(triGeo);
    this._quad.frustumCulled = false;
    this._quadScene = new THREE.Scene();
    this._quadScene.add(this._quad);
    this._quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // シーンRT(sRGB8でリニア値を高精度格納、MSAA 4x)
    this.sceneRT = new THREE.WebGLRenderTarget(2, 2, {
      samples: 4,
      depthBuffer: true,
      stencilBuffer: false,
    });
    this.sceneRT.texture.colorSpace = THREE.SRGBColorSpace;
    this.sceneRT.texture.minFilter = THREE.LinearFilter;
    this.sceneRT.texture.generateMipmaps = false;

    const quarterOpts = { depthBuffer: false, stencilBuffer: false };
    this.brightRT = new THREE.WebGLRenderTarget(2, 2, quarterOpts);
    this.blurRT = new THREE.WebGLRenderTarget(2, 2, quarterOpts);
    for (const rt of [this.brightRT, this.blurRT]) {
      rt.texture.minFilter = THREE.LinearFilter;
      rt.texture.generateMipmaps = false;
    }

    this.brightMat = new THREE.ShaderMaterial({
      uniforms: {
        tInput: { value: null },
        uThreshold: { value: CONFIG.bloom.threshold },
        uKnee: { value: CONFIG.bloom.knee },
      },
      vertexShader: FULLSCREEN_VERT,
      fragmentShader: /* glsl */`
        uniform sampler2D tInput;
        uniform float uThreshold;
        uniform float uKnee;
        varying vec2 vUv;
        void main() {
          vec3 c = texture2D(tInput, vUv).rgb;
          float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
          float w = smoothstep(uThreshold, uThreshold + uKnee, luma);
          gl_FragColor = vec4(c * w, 1.0);
        }`,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    });

    this.blurMat = new THREE.ShaderMaterial({
      uniforms: {
        tInput: { value: null },
        uTexel: { value: new THREE.Vector2() },
        uDir: { value: new THREE.Vector2(1, 0) },
      },
      vertexShader: FULLSCREEN_VERT,
      fragmentShader: BLUR_GLSL,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    });

    // 合成: bloomをリニアで加算 → ACES → sRGB符号化(threeのACES実装を再現)
    this.compositeMat = new THREE.ShaderMaterial({
      uniforms: {
        tScene: { value: null },
        tBloom: { value: null },
        uStrength: { value: CONFIG.bloom.strength },
        uExposure: { value: 1.0 },
      },
      vertexShader: FULLSCREEN_VERT,
      fragmentShader: /* glsl */`
        uniform sampler2D tScene;
        uniform sampler2D tBloom;
        uniform float uStrength;
        uniform float uExposure;
        varying vec2 vUv;
        vec3 acesFit(vec3 v) {
          vec3 a = v * (v + 0.0245786) - 0.000090537;
          vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
          return a / b;
        }
        vec3 acesTonemap(vec3 color) {
          const mat3 ACESInputMat = mat3(
            vec3(0.59719, 0.07600, 0.02840),
            vec3(0.35458, 0.90834, 0.13383),
            vec3(0.04823, 0.01566, 0.83777));
          const mat3 ACESOutputMat = mat3(
            vec3(1.60475, -0.10208, -0.00327),
            vec3(-0.53108, 1.10813, -0.07276),
            vec3(-0.07367, -0.00605, 1.07602));
          color *= uExposure / 0.6;
          color = ACESInputMat * color;
          color = acesFit(color);
          color = ACESOutputMat * color;
          return clamp(color, 0.0, 1.0);
        }
        void main() {
          vec3 c = texture2D(tScene, vUv).rgb;
          c += texture2D(tBloom, vUv).rgb * uStrength;
          c = acesTonemap(c);
          // リニア→sRGB符号化
          c = mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
          gl_FragColor = vec4(c, 1.0);
        }`,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    });
  }

  setSize(w, h, dpr) {
    const pw = Math.max(2, Math.round(w * dpr));
    const ph = Math.max(2, Math.round(h * dpr));
    this.sceneRT.setSize(pw, ph);
    const qw = Math.max(2, Math.round(pw / 4));
    const qh = Math.max(2, Math.round(ph / 4));
    this.brightRT.setSize(qw, qh);
    this.blurRT.setSize(qw, qh);
    this.blurMat.uniforms.uTexel.value.set(1 / qw, 1 / qh);
  }

  _pass(material, target) {
    this._quad.material = material;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this._quadScene, this._quadCam);
  }

  render(scene, camera) {
    const r = this.renderer;
    if (!this.enabled) {
      r.setRenderTarget(null);
      r.render(scene, camera);
      return;
    }
    // 1) シーン → MSAA RT(リニア)
    r.setRenderTarget(this.sceneRT);
    r.render(scene, camera);
    // 2) ブライトパス → 1/4
    this.brightMat.uniforms.tInput.value = this.sceneRT.texture;
    this._pass(this.brightMat, this.brightRT);
    // 3) ブラー H(bright→blur)→ V(blur→bright を再利用)
    this.blurMat.uniforms.tInput.value = this.brightRT.texture;
    this.blurMat.uniforms.uDir.value.set(1, 0);
    this._pass(this.blurMat, this.blurRT);
    this.blurMat.uniforms.tInput.value = this.blurRT.texture;
    this.blurMat.uniforms.uDir.value.set(0, 1);
    this._pass(this.blurMat, this.brightRT);
    // 4) 合成 → 画面
    this.compositeMat.uniforms.tScene.value = this.sceneRT.texture;
    this.compositeMat.uniforms.tBloom.value = this.brightRT.texture;
    this.compositeMat.uniforms.uExposure.value = r.toneMappingExposure;
    this._pass(this.compositeMat, null);
  }

  // 起動時に両パスのシェーダを温めて、品質切替時のヒッチを防ぐ
  prewarm(scene, camera) {
    if (!this.renderer.capabilities.isWebGL2) return;
    const was = this.enabled;
    this.enabled = true;
    this.render(scene, camera);
    this.enabled = false;
    this.render(scene, camera);
    this.enabled = was;
  }
}
