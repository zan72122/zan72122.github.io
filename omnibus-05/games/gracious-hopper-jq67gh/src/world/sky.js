// 空・太陽・雲・遠景の山並み
import * as THREE from '../vendor/three.module.min.js';
import { makeMaterial } from '../core/shared.js';
import { makeCanvas, canvasTexture, softDot } from '../core/canvas.js';
import { mulberry32, fbm, lerp } from '../core/util.js';

export function createSky(G) {
  const group = new THREE.Group();
  // --- 空のドーム ---
  const skyMat = makeMaterial(G, {
    uniforms: { uSkyDeep: { value: 0 } },
    side: THREE.BackSide, depthWrite: false, depthTest: true,
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w * 0.99999; }`,
    fragmentShader: /* glsl */`
      uniform float uSkyDeep;
      varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);
        float h = d.y;
        float sd = max(dot(d, uSunDir), 0.0);
        vec3 top = mix(uSkyTop, uSkyTop * vec3(0.72, 0.85, 1.08), uSkyDeep);
        vec3 col = mix(uSkyHorizon, top, pow(clamp(h, 0.0, 1.0), mix(0.42, 0.32, uSkyDeep)));
        // 地平線のすぐ上だけ明るく霞む
        col = mix(col, uSkyHorizon * 1.05, (1.0 - smoothstep(0.0, 0.08, h)) * 0.45);
        // 太陽側の暖かい霞
        col += vec3(1.0, 0.72, 0.45) * pow(sd, 3.0) * 0.32 * (1.0 - clamp(h * 1.5, 0.0, 1.0));
        // 地平線下は霧色へ
        col = mix(col, uFogColor, smoothstep(0.0, -0.08, h));
        // 太陽
        col += uSunColor * (pow(sd, 1600.0) * 18.0 + pow(sd, 120.0) * 0.6 + pow(sd, 12.0) * 0.12);
        // うっすら高い巻雲
        vec2 q = d.xz / max(h + 0.25, 0.05);
        float ci = fbm2(q * 1.1 + vec2(uTime * 0.004, 0.0));
        ci = smoothstep(0.55, 0.85, ci) * smoothstep(0.03, 0.3, h) * 0.22;
        col = mix(col, vec3(1.0, 0.98, 0.95) * 1.1, ci);
        gl_FragColor = finish(col, 1.0);
      }`,
  });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(4000, 48, 24), skyMat);
  dome.frustumCulled = false;
  // 不透明物の後に描く (深度テストで空いた所だけ塗る)
  dome.renderOrder = 1000;
  group.add(dome);
  G.skyMat = skyMat;

  // --- 遠景の山並み (帯状テクスチャの円筒) ---
  const mc = makeCanvas(2048, 256);
  const mctx = mc.getContext('2d');
  const layers = [
    { base: 0.42, amp: 0.35, freq: 5, col: [150, 175, 196], seed: 3 },
    { base: 0.60, amp: 0.25, freq: 9, col: [126, 158, 160], seed: 7 },
    { base: 0.78, amp: 0.14, freq: 17, col: [112, 148, 120], seed: 11 },
  ];
  for (const L of layers) {
    mctx.fillStyle = `rgb(${L.col.join(',')})`;
    mctx.beginPath(); mctx.moveTo(0, 256);
    for (let x = 0; x <= 2048; x += 4) {
      const n = fbm(x / 2048 * L.freq, L.seed, 5, L.seed, L.freq);
      const y = (L.base - n * L.amp) * 256;
      mctx.lineTo(x, y);
    }
    mctx.lineTo(2048, 256); mctx.closePath(); mctx.fill();
  }
  const mtex = canvasTexture(mc, { repeat: true });
  mtex.wrapT = THREE.ClampToEdgeWrapping;
  const mountMat = makeMaterial(G, {
    uniforms: { map: { value: mtex } },
    transparent: true, depthWrite: false, side: THREE.BackSide,
    vertexShader: /* glsl */`
      varying vec2 vUv; varying vec3 vW;
      void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */`
      uniform sampler2D map; varying vec2 vUv; varying vec3 vW;
      void main(){
        vec2 uv = vec2(vUv.x * 2.0, vUv.y);
        vec4 t = texture2D(map, uv);
        if (t.a < 0.02) discard;
        vec3 c = t.rgb * t.rgb; // 近似リニア
        c = mix(c, uFogColor, 0.55);
        gl_FragColor = finish(c, t.a);
      }`,
  });
  const mount = new THREE.Mesh(new THREE.CylinderGeometry(2400, 2400, 260, 64, 1, true), mountMat);
  mount.position.y = 70;
  mount.renderOrder = -9;
  group.add(mount);

  // --- 雲 (インスタンスのビルボード) ---
  const cloudTex = makeCloudTexture();
  const rand = mulberry32(77);
  const puffs = [];
  const addCluster = (cx, cy, cz, scale, n) => {
    for (let i = 0; i < n; i++) {
      const a = rand() * Math.PI * 2;
      const r = rand() * scale * 0.9;
      const ox = Math.cos(a) * r * 1.4, oz = Math.sin(a) * r * 0.8;
      const oy = (rand() - 0.3) * scale * 0.35;
      const s = scale * (0.55 + rand() * 0.55) * (1 - r / (scale * 1.6));
      puffs.push({ x: cx + ox, y: cy + oy + s * 0.15, z: cz + oz, s, ox: ox / scale, oy: oy / scale, rot: rand() * 6.28, sh: 0 });
    }
  };
  // 上昇中にすれ違う低い雲と、頂上から見下ろす雲
  const cr = mulberry32(5);
  const clusterDefs = [];
  for (let i = 0; i < 26; i++) {
    const ang = cr() * Math.PI * 2;
    const dist = 18 + cr() * 140;
    const y = 34 + cr() * 32;
    clusterDefs.push([Math.cos(ang) * dist, y, Math.sin(ang) * dist, 4 + cr() * 6, 5 + (cr() * 5 | 0)]);
  }
  // 茎のすぐ近くを通る雲 (上昇の手がかり)
  clusterDefs.push([7, 46, -6, 6, 8]);
  // 太陽と茎の間に浮かぶ雲 (上昇中、つぼみに影を落とす)
  clusterDefs.push([-8.5, 43.5, -8.8, 4.5, 7]);
  clusterDefs.push([-6.2, 62, -6.6, 3.8, 6]);
  clusterDefs.push([-9, 58, 5, 5, 7]);
  clusterDefs.push([4, 64, 9, 4, 6]);
  // 遠く高い積雲
  for (let i = 0; i < 22; i++) {
    const ang = cr() * Math.PI * 2;
    const dist = 300 + cr() * 900;
    clusterDefs.push([Math.cos(ang) * dist, 120 + cr() * 160, Math.sin(ang) * dist, 40 + cr() * 60, 7]);
  }
  for (const d of clusterDefs) addCluster(...d);

  const quad = new THREE.PlaneGeometry(1, 1);
  const igeo = new THREE.InstancedBufferGeometry();
  igeo.index = quad.index;
  igeo.setAttribute('position', quad.getAttribute('position'));
  igeo.setAttribute('uv', quad.getAttribute('uv'));
  const off = new Float32Array(puffs.length * 4);
  const ext = new Float32Array(puffs.length * 4);
  puffs.forEach((p, i) => {
    off.set([p.x, p.y, p.z, p.s], i * 4);
    ext.set([p.ox, p.oy, p.rot, rand()], i * 4);
  });
  igeo.setAttribute('aOff', new THREE.InstancedBufferAttribute(off, 4));
  igeo.setAttribute('aExt', new THREE.InstancedBufferAttribute(ext, 4));
  igeo.instanceCount = puffs.length;
  const cloudMat = makeMaterial(G, {
    uniforms: { map: { value: cloudTex }, uCloudFade: { value: 1 } },
    transparent: true, depthWrite: false,
    vertexShader: /* glsl */`
      attribute vec4 aOff; attribute vec4 aExt;
      uniform float uTime;
      varying vec2 vUv; varying vec3 vW; varying vec2 vExt; varying float vSeed;
      void main(){
        vUv = uv; vExt = aExt.xy; vSeed = aExt.w;
        vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
        vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
        float c = cos(aExt.z), s = sin(aExt.z);
        vec2 p = vec2(c * position.x - s * position.y, s * position.x + c * position.y);
        // 茎の近くの雲はほとんど流れない
        float drift = smoothstep(14.0, 40.0, length(aOff.xz));
        vec3 center = aOff.xyz + vec3((uTime * 0.25) * drift + sin(uTime*0.05 + aExt.w*6.0)*(0.4 + 1.6 * drift), 0.0, uTime * 0.08 * drift);
        vec3 w = center + (right * p.x + up * p.y) * aOff.w * 2.2;
        vW = w;
        gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D map; uniform float uCloudFade;
      varying vec2 vUv; varying vec3 vW; varying vec2 vExt; varying float vSeed;
      void main(){
        vec4 t = texture2D(map, vUv);
        float a = t.a;
        if (a < 0.01) discard;
        // 塊内の位置から擬似法線で陰影
        vec3 n = normalize(vec3(vExt.x, vExt.y + 0.3, 0.6));
        float lit = clamp(0.55 + 0.45 * dot(n, uSunDir), 0.0, 1.0) * (0.6 + 0.4 * t.r);
        vec3 shade = mix(vec3(0.62, 0.68, 0.80), vec3(0.98, 0.96, 0.94), lit);
        vec3 col = shade * 1.15 + uSunColor * 0.12 * t.r;
        float dist = length(vW - cameraPosition);
        a *= smoothstep(3.0, 12.0, dist) * uCloudFade;
        col = applyFog(col, mix(cameraPosition, vW, 0.6));
        gl_FragColor = finish(col, a * 0.92);
      }`,
  });
  const clouds = new THREE.Mesh(igeo, cloudMat);
  clouds.frustumCulled = false;
  clouds.renderOrder = 5;
  group.add(clouds);
  G.cloudMat = cloudMat;

  G.scene.add(group);
  return { group, dome, clouds, puffs };
}

function makeCloudTexture() {
  const c = makeCanvas(256, 256);
  const ctx = c.getContext('2d');
  const r = mulberry32(9);
  // アルファ用の柔らかいふくらみ
  for (let i = 0; i < 26; i++) {
    const a = r() * Math.PI * 2, d = r() * 62;
    const x = 128 + Math.cos(a) * d * 1.1, y = 140 + Math.sin(a) * d * 0.6 - r() * 20;
    const rad = 40 + r() * 40;
    softDot(ctx, x, y, rad, 'rgba(255,255,255,1)', 0.55, 0.35);
  }
  // 上側を明るく (R に陰影を入れる)
  const img = ctx.getImageData(0, 0, 256, 256);
  const d = img.data;
  for (let y = 0; y < 256; y++) {
    for (let x = 0; x < 256; x++) {
      const i = (y * 256 + x) * 4;
      const a = d[i + 3] / 255;
      const n = fbm(x / 40, y / 40, 4, 3);
      const shade = Math.max(0, Math.min(1, 1.15 - y / 230 + (n - 0.5) * 0.5));
      d[i] = shade * 255; d[i + 1] = shade * 255; d[i + 2] = 255;
      d[i + 3] = Math.max(0, Math.min(1, a * 1.25 * (0.75 + n * 0.5) - 0.05)) * 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const t = canvasTexture(c, { srgb: false });
  return t;
}

// 太陽のまぶしさ・光のあふれ (画面全体のオーバーレイ)
export function createGlare(G) {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uSunScreen: { value: new THREE.Vector3() },
      uAspect: { value: 1 },
      uGlare: { value: 0.4 },
      uFlood: { value: 0 },
      uFloodColor: { value: new THREE.Color(1.0, 0.92, 0.78) },
      uVignette: { value: 0.0 },
      uVignetteColor: { value: new THREE.Color(0.35, 0.05, 0.12) },
      uFade: { value: 0 },
      uFadeColor: { value: new THREE.Color(1, 0.97, 0.9) },
    },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy*2.0, 0.0, 1.0); }`,
    fragmentShader: /* glsl */`
      uniform vec3 uSunScreen; uniform float uAspect; uniform float uGlare; uniform float uFlood; uniform vec3 uFloodColor;
      uniform float uVignette; uniform vec3 uVignetteColor; uniform float uFade; uniform vec3 uFadeColor;
      varying vec2 vUv;
      void main(){
        vec2 p = vUv * 2.0 - 1.0;
        vec2 s = uSunScreen.xy;
        vec2 d = p - s; d.x *= uAspect;
        float r = length(d);
        float vis = uSunScreen.z;
        vec3 add = vec3(1.0, 0.86, 0.62) * (exp(-r * 3.2) * 0.35 + exp(-r * 12.0) * 0.5) * uGlare * vis;
        // 光の筋
        float ang = atan(d.y, d.x);
        float rays = pow(abs(sin(ang * 6.0 + 0.3)), 18.0) + pow(abs(sin(ang * 4.0 + 1.1)), 30.0) * 0.6;
        add += vec3(1.0, 0.9, 0.7) * rays * exp(-r * 4.5) * 0.18 * uGlare * vis;
        // 光があふれる瞬間
        add += uFloodColor * uFlood * (0.55 + 0.45 * exp(-r * 1.2));
        gl_FragColor = vec4(add, 1.0);
      }`,
    transparent: true, depthTest: false, depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = 1000;
  // ビネットとフェードは別マテリアル (通常合成)
  const vmat = new THREE.ShaderMaterial({
    uniforms: { uVignette: mat.uniforms.uVignette, uVignetteColor: mat.uniforms.uVignetteColor, uFade: mat.uniforms.uFade, uFadeColor: mat.uniforms.uFadeColor, uAspect: mat.uniforms.uAspect },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy*2.0, 0.0, 1.0); }`,
    fragmentShader: /* glsl */`
      uniform float uVignette; uniform vec3 uVignetteColor; uniform float uFade; uniform vec3 uFadeColor; uniform float uAspect;
      varying vec2 vUv;
      void main(){
        vec2 p = vUv * 2.0 - 1.0;
        float v = smoothstep(0.35, 1.5, length(p * vec2(min(uAspect,1.4), 1.0) * 0.85)) * uVignette;
        vec3 c = mix(uVignetteColor, uFadeColor, uFade / max(uFade + v, 1e-4));
        float a = clamp(v + uFade, 0.0, 1.0);
        gl_FragColor = vec4(c, a);
      }`,
    transparent: true, depthTest: false, depthWrite: false,
  });
  const vmesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), vmat);
  vmesh.frustumCulled = false;
  vmesh.renderOrder = 1001;
  const scene = new THREE.Scene();
  scene.add(mesh); scene.add(vmesh);
  const tmp = new THREE.Vector3();
  return {
    scene, uniforms: mat.uniforms,
    update(camera, aspect) {
      tmp.copy(G.U.uSunDir.value).multiplyScalar(1000).add(camera.position);
      tmp.project(camera);
      const camDir = camera.getWorldDirection(new THREE.Vector3());
      const facing = camDir.dot(G.U.uSunDir.value);
      mat.uniforms.uSunScreen.value.set(tmp.x, tmp.y, Math.max(0, facing) * (tmp.z < 1 ? 1 : 0));
      mat.uniforms.uAspect.value = aspect;
    },
  };
}
