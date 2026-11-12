// 植物用シェーダー: 花びら・葉・茎・やわらかな器官
import * as THREE from '../vendor/three.module.min.js';
import { makeMaterial } from '../core/shared.js';

// ---- 花びら: 透過光・葉脈・繊維の光沢・起毛・押した所の明るみ ----
export function makePetalMaterial(G, veinTex) {
  const touch = [], amp = [];
  for (let i = 0; i < 4; i++) { touch.push(new THREE.Vector4(0, -999, 0, -99)); amp.push(0); }
  const mat = makeMaterial(G, {
    uniforms: {
      uVein: { value: veinTex },
      uTouch: { value: touch },
      uTouchAmp: { value: amp },
      uDeep: { value: new THREE.Color(0.55, 0.02, 0.10) },
      uMid: { value: new THREE.Color(1.0, 0.22, 0.34) },
      uPale: { value: new THREE.Color(1.0, 0.52, 0.60) },
      uEye: { value: new THREE.Color(1.0, 0.78, 0.25) },
      uAlbIn: { value: new THREE.Color(0.90, 0.40, 0.50) },
      uAlbOut: { value: new THREE.Color(0.94, 0.42, 0.52) },
      uGlowBoost: { value: 1.0 },
    },
    side: THREE.DoubleSide,
    vertexShader: /* glsl */`
      attribute vec3 aTan; attribute vec4 aMeta;
      uniform float uTime; uniform vec4 uTouch[4]; uniform float uTouchAmp[4];
      varying vec3 vW; varying vec3 vN; varying vec3 vT; varying vec2 vUv; varying vec4 vMeta; varying float vTouch;
      void main(){
        vec4 w = modelMatrix * vec4(position, 1.0);
        float touch = 0.0;
        vec3 disp = vec3(0.0);
        for (int i = 0; i < 4; i++) {
          float t = uTime - uTouch[i].w;
          if (t > 0.0 && t < 3.5) {
            float d = length(w.xyz - uTouch[i].xyz);
            float g = exp(-d * d / 0.10);
            float a = t < 0.15 ? t / 0.15 : exp(-(t - 0.15) * 3.5) * cos((t - 0.15) * 15.0);
            float ring = exp(-pow(d - (t * 1.5 + 0.1), 2.0) / 0.025) * exp(-t * 2.2) * 0.35;
            float k = (g * a + ring) * uTouchAmp[i];
            touch += (g * max(a, 0.0) + ring * 0.6) * uTouchAmp[i];
            vec3 away = normalize(w.xyz - cameraPosition);
            disp += away * k * 0.085;
          }
        }
        w.xyz += disp;
        vW = w.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        vT = normalize(mat3(modelMatrix) * aTan);
        vUv = uv; vMeta = aMeta; vTouch = min(touch, 1.5);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D uVein;
      uniform vec3 uDeep, uMid, uPale, uEye, uAlbIn, uAlbOut;
      uniform float uGlowBoost;
      varying vec3 vW; varying vec3 vN; varying vec3 vT; varying vec2 vUv; varying vec4 vMeta; varying float vTouch;
      void main(){
        float v = vUv.y;
        float x = vUv.x * 2.0 - 1.0;
        float openv = vMeta.x;
        vec3 Nin = normalize(vN);
        vec3 V = normalize(cameraPosition - vW);
        bool innerView = dot(Nin, V) > 0.0;
        vec3 nv = innerView ? Nin : -Nin;
        vec3 nb = -nv;
        vec3 tex = texture2D(uVein, vUv).rgb;
        float veinBlur = texture2D(uVein, vUv, 3.5).r;
        float vein = tex.r, fiber = tex.g, pig = tex.b;
        float ax = abs(x);

        // 透過色: 厚い根元は深紅、薄い縁は淡い桃色
        float thick = smoothstep(0.0, 0.75, v);
        vec3 tcol = mix(uDeep, uMid, smoothstep(0.0, 0.35, v));
        tcol = mix(tcol, uPale, clamp(smoothstep(0.35, 1.0, v) * 0.6 + ax * ax * 0.3, 0.0, 1.0));
        tcol *= 0.82 + 0.36 * pig;
        // 根元の黄色い「目」
        float eye = (1.0 - smoothstep(0.03, 0.13, v)) * (1.0 - ax * 0.4);
        tcol = mix(tcol, uEye, eye * (innerView ? 0.85 : 0.3));
        float T = mix(0.30, 1.0, thick) * (1.0 + 0.6 * pow(ax, 4.0));
        // 葉脈: くっきりした筋と、その周りの柔らかな明るみ
        T *= mix(1.0, 0.55, vein) * (1.0 + 0.45 * veinBlur);
        // 重なった花びら (閉じている時) は二枚分暗い
        T *= mix(1.0, 0.5, smoothstep(0.74, 0.97, ax) * (1.0 - smoothstep(0.1, 0.5, openv)) * step(0.08, v));
        // 押されて薄くなった所は光が通る
        T *= 1.0 + vTouch * 1.1;
        tcol = mix(tcol, uPale * vec3(1.0, 0.9, 0.85), clamp(vTouch * 0.35, 0.0, 0.5));

        float vis = sunVis(vW);
        // 裏側から来る光 (透過)
        float ins = innerView ? uBudClosed : 0.0;
        // 外から見た閉じたつぼみ: 裏 (内側) には直射が届かず、内部の柔らかい光だけ
        vec3 sunBack = uSunColor * max(dot(nb, uSunDir), 0.0) * vis;
        vec3 backLight = innerView ? (sunBack + hemi(nb) * 0.35) : mix(sunBack + hemi(nb) * 0.35, uBudGlow * 1.1 + vec3(0.08, 0.04, 0.03), uBudClosed);
        vec3 trans = tcol * T * backLight * uGlowBoost;
        // 表側の反射
        vec3 alb = innerView ? uAlbIn : uAlbOut;
        // 根元は濃く、縁へ向かって淡く
        alb = mix(alb * vec3(0.82, 0.48, 0.62), alb, smoothstep(0.02, 0.4, v));
        alb = mix(alb, uPale * vec3(1.0, 1.05, 1.02), smoothstep(0.45, 1.0, v) * 0.45 + ax * ax * 0.2);
        alb = mix(alb, uEye, eye * (innerView ? 0.7 : 0.0));
        alb *= mix(1.0, 0.74, vein) * (0.82 + 0.36 * pig);
        // 根元の蜜標 (濃い筋)
        alb *= 1.0 - (1.0 - smoothstep(0.0, 0.3, v)) * vein * 0.35;
        vec3 frontAmb = mix(hemi(nv), uBudGlow * 1.2, ins);
        vec3 frontLight = uSunColor * max(dot(nv, uSunDir), 0.0) * vis * (1.0 - ins) + frontAmb;
        vec3 col = trans * 0.92 + alb * frontLight * 0.42;
        // 絹の光沢: 繊維に沿った異方性ハイライト
        vec3 Ls = normalize(mix(uSunDir, normalize(uSunDir + vec3(0.0, 1.5, 0.0)), ins));
        vec3 H = normalize(Ls + V);
        float th = dot(normalize(vT), H);
        float sinTH = sqrt(max(0.0, 1.0 - th * th));
        float sheen = pow(sinTH, 48.0) * (0.25 + 1.4 * fiber);
        float lightAmt = innerView ? mix(max(dot(nv, uSunDir), 0.0) * vis, 0.35, ins) : max(dot(nv, uSunDir), 0.0) * vis;
        col += mix(vec3(1.0, 0.86, 0.9), tcol, 0.25) * uSunColor * sheen * 0.28 * (lightAmt + 0.15);
        // 起毛: 根元の内側にビロードのような縁光
        float ndv = abs(dot(nv, V));
        float velvet = (1.0 - smoothstep(0.0, 0.3, v)) * pow(1.0 - ndv, 2.0) * (innerView ? 1.0 : 0.2);
        col += vec3(1.0, 0.8, 0.75) * velvet * (frontAmb + backLight * 0.3) * 0.45;
        // 縁の逆光の輪郭
        float rim = pow(1.0 - ndv, 4.0);
        col += tcol * uSunColor * rim * max(dot(-V, uSunDir), 0.0) * vis * 0.35;
        col = applyFog(col, vW);
        gl_FragColor = finish(col, 1.0);
      }`,
  });
  // 触れた所の管理
  let slot = 0;
  mat.touchAt = (p, strength = 1, time = G.U.uTime.value) => {
    const i = slot; slot = (slot + 1) % 4;
    mat.uniforms.uTouch.value[i].set(p.x, p.y, p.z, time);
    mat.uniforms.uTouchAmp.value[i] = strength;
    return i;
  };
  mat.holdTouch = (i, p, strength = 1) => {
    mat.uniforms.uTouch.value[i].set(p.x, p.y, p.z, G.U.uTime.value - 0.15);
    mat.uniforms.uTouchAmp.value[i] = strength;
  };
  return mat;
}

// ---- 葉・がく: 緑の透過 + 葉脈 + 表面のつや ----
export function makeLeafMaterial(G, leafTex, opts = {}) {
  return makeMaterial(G, {
    uniforms: {
      uLeafTex: { value: leafTex },
      uTop: { value: new THREE.Color(opts.top || 0x4f8f2c) },
      uBottom: { value: new THREE.Color(opts.bottom || 0x86b85a) },
      uTrans: { value: new THREE.Color(opts.trans || 0x9ed048) },
      uYoung: { value: 0 },
      uTouch: { value: new THREE.Vector4(0, -999, 0, -99) },
    },
    side: THREE.DoubleSide,
    vertexShader: /* glsl */`
      attribute vec3 aTan; attribute vec4 aMeta;
      uniform float uTime; uniform vec4 uTouch;
      varying vec3 vW; varying vec3 vN; varying vec3 vT; varying vec2 vUv; varying vec4 vMeta;
      void main(){
        vec4 w = modelMatrix * vec4(position, 1.0);
        float t = uTime - uTouch.w;
        if (t > 0.0 && t < 3.0) {
          float d = length(w.xyz - uTouch.xyz);
          w.y -= exp(-d * d / 0.3) * sin(t * 12.0) * exp(-t * 3.0) * 0.06;
        }
        vW = w.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        vT = normalize(mat3(modelMatrix) * aTan);
        vUv = uv; vMeta = aMeta;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D uLeafTex; uniform vec3 uTop, uBottom, uTrans; uniform float uYoung;
      varying vec3 vW; varying vec3 vN; varying vec3 vT; varying vec2 vUv; varying vec4 vMeta;
      void main(){
        vec3 n = normalize(vN);
        vec3 V = normalize(cameraPosition - vW);
        bool top = gl_FrontFacing;
        vec3 nv = dot(n, V) > 0.0 ? n : -n;
        vec4 tx = texture2D(uLeafTex, vUv);
        float vein = tx.r, nz = tx.g;
        float young = max(uYoung, vMeta.y);
        vec3 alb = (dot(n, V) > 0.0) ? uTop : uBottom;
        alb = mix(alb, vec3(0.62, 0.80, 0.30), young * 0.6);
        alb *= 0.85 + 0.3 * nz;
        alb = mix(alb, alb * vec3(1.25, 1.2, 0.85), vein * 0.55);
        float vis = sunVis(vW);
        vec3 col = shadeLambert(alb, nv, vW, 0.25, 1.0);
        // 逆光で透ける葉
        float back = max(dot(-nv, uSunDir), 0.0);
        vec3 tr = uTrans * (0.7 + 0.3 * nz) * mix(1.0, 0.55, vein);
        col += tr * uSunColor * back * vis * 0.45 * (1.0 - budInside(vW) * 0.5);
        // ワックスのつや
        vec3 H = normalize(uSunDir + V);
        float sp = pow(max(dot(nv, H), 0.0), 40.0);
        col += uSunColor * sp * 0.18 * vis * (0.5 + 0.5 * nz);
        col = applyFog(col, vW);
        gl_FragColor = finish(col, 1.0);
      }`,
  });
}

// ---- 茎: 縦の筋・節・産毛の縁光 ----
export function makeStemMaterial(G) {
  return makeMaterial(G, {
    uniforms: { uCol: { value: new THREE.Color(0x5f9a32) } },
    vertexShader: /* glsl */`
      attribute vec2 aSV;
      varying vec3 vW; varying vec3 vN; varying vec2 vSV;
      void main(){
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vSV = aSV;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vSV;
      void main(){
        vec3 n = normalize(vN);
        vec3 V = normalize(cameraPosition - vW);
        float a = vSV.x; // 周方向 0..1
        float s = vSV.y; // 長さ (m)
        float stri = 0.5 + 0.5 * sin(a * 6.2831 * 18.0 + vnoise2(vec2(a * 30.0, s * 0.3)) * 2.0);
        vec3 alb = uCol * (0.82 + 0.25 * stri) * (0.9 + 0.2 * vnoise2(vec2(a * 8.0, s * 0.8)));
        vec3 col = shadeLambert(alb, n, vW, 0.4, 1.0);
        float rim = pow(1.0 - max(dot(n, V), 0.0), 2.5);
        float vis = sunVis(vW);
        col += vec3(0.6, 0.85, 0.3) * uSunColor * rim * (0.15 + 0.5 * max(dot(-V, uSunDir), 0.0)) * vis * 0.35;
        vec3 H = normalize(uSunDir + V);
        col += uSunColor * pow(max(dot(n, H), 0.0), 30.0) * 0.12 * vis;
        col = applyFog(col, vW);
        gl_FragColor = finish(col, 1.0);
      }`,
  });
}

// ---- やわらかな器官 (雄しべ・雌しべ・花床) ----
// mode: 0=花床(ビロード) 1=花糸(半透明) 2=葯(花粉の粒) 3=柱頭(粘り) 4=蜜
export function makeOrganMaterial(G, mode, color, opts = {}) {
  return makeMaterial(G, {
    uniforms: { uMode: { value: mode }, uCol: { value: new THREE.Color(color) }, uGlint: { value: opts.glint || 0 } },
    transparent: !!opts.transparent,
    depthWrite: opts.transparent ? false : true,
    vertexShader: /* glsl */`
      varying vec3 vW; varying vec3 vN; varying vec3 vL;
      void main(){
        vec4 w = modelMatrix * vec4(position, 1.0);
        #ifdef USE_INSTANCING
          w = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
        #else
          vN = normalize(mat3(modelMatrix) * normal);
        #endif
        vW = w.xyz; vL = position;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */`
      uniform float uMode; uniform vec3 uCol; uniform float uGlint;
      varying vec3 vW; varying vec3 vN; varying vec3 vL;
      void main(){
        vec3 n = normalize(vN);
        vec3 V = normalize(cameraPosition - vW);
        if (dot(n, V) < 0.0 && uMode < 0.5) n = -n;
        float ndv = max(dot(n, V), 0.0);
        vec3 alb = uCol;
        vec3 col;
        float vis = sunVis(vW);
        vec3 H = normalize(uSunDir + V);
        if (uMode < 0.5) {
          // 花床: 放射状の筋とビロード
          float ang = atan(vL.z, vL.x);
          float r = length(vL.xz);
          float rays = 0.5 + 0.5 * sin(ang * 40.0 + vnoise2(vec2(r * 9.0, ang * 3.0)) * 3.0);
          alb *= 0.82 + 0.25 * rays * smoothstep(0.1, 0.6, r);
          alb *= 0.9 + 0.2 * vnoise2(vL.xz * 30.0);
          col = shadeLambert(alb, n, vW, 0.5, 1.0);
          col += alb * pow(1.0 - ndv, 2.0) * 0.5 * (hemi(n) + uBudGlow);
        } else if (uMode < 1.5) {
          col = shadeLambert(alb, n, vW, 0.7, 1.0);
          col += alb * uSunColor * pow(max(dot(-V, uSunDir), 0.0), 2.0) * 0.4 * vis * pow(1.0 - ndv, 1.5);
        } else if (uMode < 2.5) {
          // 葯: 花粉粒の凹凸ときらめき
          float g1 = vnoise3(vL * 90.0), g2 = vnoise3(vL * 37.0 + 2.0);
          alb *= 0.75 + 0.45 * g1 * g2;
          vec3 nn = normalize(n + (vec3(g1, g2, vnoise3(vL * 61.0)) - 0.5) * 0.8);
          col = shadeLambert(alb, nn, vW, 0.5, 1.0);
          vec3 cell = floor(vL * 120.0);
          float tw = step(0.9, hash13(cell + floor(uTime * 2.0 + hash13(cell) * 3.0)));
          float dotm = smoothstep(0.45, 0.1, length(fract(vL * 120.0) - 0.5));
          col += vec3(1.0, 0.95, 0.7) * tw * dotm * 0.7 * (uGlint + 0.3);
          col += alb * pow(1.0 - ndv, 2.0) * 0.4 * (hemi(n) + uBudGlow);
        } else if (uMode < 3.5) {
          // 雌しべ: みずみずしい組織は内側から少し光る
          col = shadeLambert(alb, n, vW, 0.5, 1.0) + alb * (0.18 + 0.25 * budInside(vW));
          float sp = pow(max(dot(n, H), 0.0), 120.0);
          vec3 R = reflect(-V, n);
          col += uSunColor * sp * 1.2 * vis + mix(uBudGlow, hemi(R), 0.5) * pow(1.0 - ndv, 3.0) * 0.8;
        } else {
          // 蜜: 琥珀色の厚みとつや
          float thick = ndv;
          vec3 inside = mix(vec3(0.9, 0.45, 0.05), vec3(1.0, 0.85, 0.35), thick);
          col = inside * (hemi(n) * 0.6 + uBudGlow * 1.2 + uSunColor * 0.3 * vis);
          vec3 R = reflect(-V, n);
          float fres = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);
          col = mix(col, mix(uBudGlow * 2.0, hemi(R) * 1.5, 0.5), fres);
          col += uSunColor * pow(max(dot(n, H), 0.0), 200.0) * 3.0 * vis + vec3(1.0, 0.9, 0.7) * pow(max(dot(n, normalize(V + vec3(0.0, 1.0, 0.0))), 0.0), 60.0) * 0.6;
          col = applyFog(col, vW);
          gl_FragColor = finish(col, 0.82 + 0.18 * fres);
          return;
        }
        col = applyFog(col, vW);
        gl_FragColor = finish(col, 1.0);
      }`,
  });
}
