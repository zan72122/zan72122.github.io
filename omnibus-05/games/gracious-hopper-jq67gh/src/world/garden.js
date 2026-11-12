// 朝の庭: 地面・花壇の土・家・木・柵・たらい・周囲の田畑と村
import * as THREE from '../vendor/three.module.min.js';
import { makeMaterial } from '../core/shared.js';
import { makeLit, ensureColor } from '../core/materials.js';
import { makeCanvas, canvasTexture, softDot } from '../core/canvas.js';
import { merge, colorize, colorizeGradient, blob } from '../core/geom.js';
import { mulberry32, fbm, vnoise, clamp, lerp } from '../core/util.js';

export const GARDEN = { x0: -24, z0: -27, size: 48 };
export const WORLD = { x0: -320, z0: -320, size: 640 };
export const PLOT = { w: 2.6, d: 1.8, hollowR: 0.2, hollowDepth: 0.09 };
export const TUB = { x: 1.55, z: -3.05, r: 0.46, h: 0.3 };
export const HOUSE = { x0: 1.5, x1: 10.5, z0: -13.5, z1: -6.5, wallH: 5.6, ridgeH: 8.4 };
export const TREE = { x: -7.2, z: -8.2 };

// ------------------------------------------------------------
// 地図の絵付け
// ------------------------------------------------------------
function paintGardenMap() {
  const S = 2048, { x0, z0, size } = GARDEN, k = S / size;
  const c = makeCanvas(S, S);
  const ctx = c.getContext('2d');
  ctx.setTransform(k, 0, 0, k, -x0 * k, -z0 * k);
  const r = mulberry32(42);
  // 芝生
  ctx.fillStyle = '#86ad4c'; ctx.fillRect(x0, z0, size, size);
  const greens = ['#7aa444', '#93b957', '#6f9a3d', '#9cbf5e', '#85ab4a', '#a3c264'];
  for (let i = 0; i < 5200; i++) {
    const x = x0 + r() * size, z = z0 + r() * size;
    softDot(ctx, x, z, 0.25 + r() * 1.4, greens[(r() * greens.length) | 0], 0.22, 0.2);
  }
  // 刈り込みの縞
  ctx.globalAlpha = 0.07;
  for (let x = -15; x < 15; x += 1.3) {
    ctx.fillStyle = ((x + 15) / 1.3 | 0) % 2 ? '#c8e090' : '#4e7a2a';
    ctx.fillRect(x, -18, 1.3, 29);
  }
  ctx.globalAlpha = 1;
  // クローバーの濃い群れ
  for (let i = 0; i < 160; i++) {
    const x = -14 + r() * 28, z = -17 + r() * 27;
    for (let j = 0; j < 12; j++) softDot(ctx, x + (r() - 0.5) * 0.8, z + (r() - 0.5) * 0.8, 0.07 + r() * 0.08, '#5d8f35', 0.5, 0.4);
  }
  // 道路 (柵の外)
  ctx.fillStyle = '#9aa0a2'; ctx.fillRect(x0, 13, size, 5.2);
  ctx.fillStyle = '#b9bcb6'; ctx.fillRect(x0, 12.6, size, 0.4); ctx.fillRect(x0, 18.2, size, 0.4);
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  for (let x = x0; x < x0 + size; x += 3) ctx.fillRect(x, 15.55, 1.6, 0.12);
  for (let i = 0; i < 900; i++) softDot(ctx, x0 + r() * size, 13 + r() * 5.2, 0.05 + r() * 0.2, r() < 0.5 ? '#8a8f92' : '#a8adae', 0.35);
  // 道路の向こうの田んぼ
  ctx.fillStyle = '#9cbf55'; ctx.fillRect(x0, 18.6, size, 3);
  // 隣家との境の植え込みの根元
  ctx.fillStyle = 'rgba(40,60,25,0.55)';
  ctx.fillRect(-15.9, -18.8, 1.8, 30); ctx.fillRect(14.1, -18.8, 1.8, 30); ctx.fillRect(-15.9, -19.2, 31.8, 1.6);
  // 木の下: 踏まれた土と落ち葉
  softDot(ctx, TREE.x, TREE.z, 2.4, '#8a7350', 0.75, 0.3);
  for (let i = 0; i < 260; i++) {
    const a = r() * 6.28, d = r() * 3.4;
    softDot(ctx, TREE.x + Math.cos(a) * d, TREE.z + Math.sin(a) * d, 0.05 + r() * 0.06, r() < 0.5 ? '#c09a3c' : '#9a6a2c', 0.8, 0.5);
  }
  // 家の基礎とテラス
  ctx.fillStyle = '#b5ada0'; ctx.fillRect(HOUSE.x0 - 0.35, HOUSE.z0 - 0.35, HOUSE.x1 - HOUSE.x0 + 0.7, HOUSE.z1 - HOUSE.z0 + 0.7);
  ctx.fillStyle = '#cfc5b3'; ctx.fillRect(5.3, -6.4, 3.4, 1.5);
  // 家の前の花壇
  ctx.fillStyle = '#6b4b2e'; ctx.fillRect(HOUSE.x0, -6.15, 3.6, 0.9); ctx.fillRect(8.9, -6.15, 1.6, 0.9);
  const fl = ['#f05a6e', '#ffd34a', '#ffffff', '#c86adf', '#ff8a3c', '#f7a1c4'];
  for (let i = 0; i < 260; i++) {
    const inA = r() < 0.7;
    const x = inA ? HOUSE.x0 + r() * 3.6 : 8.9 + r() * 1.6, z = -6.1 + r() * 0.8;
    softDot(ctx, x, z, 0.06 + r() * 0.06, '#3f7a2c', 0.9, 0.5);
    softDot(ctx, x + 0.02, z - 0.02, 0.035 + r() * 0.03, fl[(r() * fl.length) | 0], 1, 0.6);
  }
  // 飛び石の小道 (門→玄関)
  const path = [];
  for (let t = 0; t <= 1.0001; t += 1 / 15) {
    const x = lerp(0.2, 7, t) + Math.sin(t * Math.PI) * 2.8;
    const z = lerp(11, -5.0, t);
    path.push([x, z]);
  }
  for (const [x, z] of path) {
    ctx.save(); ctx.translate(x, z); ctx.rotate(r() * 0.6);
    ctx.fillStyle = 'rgba(40,50,25,0.35)'; ctx.beginPath(); ctx.ellipse(0.04, 0.05, 0.42, 0.32, 0, 0, 6.28); ctx.fill();
    const gs = ctx.createRadialGradient(-0.1, -0.1, 0.05, 0, 0, 0.45);
    gs.addColorStop(0, '#d8d3c6'); gs.addColorStop(1, '#a9a395');
    ctx.fillStyle = gs; ctx.beginPath(); ctx.ellipse(0, 0, 0.4, 0.3, 0, 0, 6.28); ctx.fill();
    ctx.restore();
  }
  // 花壇の周りの踏み跡
  softDot(ctx, 0, 0, 2.3, '#9b8a5a', 0.35, 0.5);
  // 小さな花 (たんぽぽ・しろつめくさ)
  for (let i = 0; i < 900; i++) {
    const x = -15 + r() * 30, z = -18 + r() * 29;
    const yellow = r() < 0.35;
    softDot(ctx, x, z, 0.03 + r() * 0.03, yellow ? '#ffe04a' : '#fbf8ee', 0.95, 0.55);
  }
  // 柵の影
  ctx.fillStyle = 'rgba(30,50,20,0.25)'; ctx.fillRect(-15, 11.0, 30, 0.35);
  // 物干しの下の踏み跡
  softDot(ctx, 12.4, -5.2, 1.6, '#a39a6c', 0.3, 0.4);
  return c;
}

function paintWorldMap() {
  const S = 2048, { x0, z0, size } = WORLD, k = S / size;
  const c = makeCanvas(S, S);
  const ctx = c.getContext('2d');
  ctx.setTransform(k, 0, 0, k, -x0 * k, -z0 * k);
  const r = mulberry32(1234);
  ctx.fillStyle = '#8fb25a'; ctx.fillRect(x0, z0, size, size);
  // 田畑のパッチワーク
  const fieldCols = ['#9cc35a', '#7fae4f', '#b7cf6a', '#a8c06a', '#8db860', '#c9cf7c', '#6f9e48', '#a7c88a', '#b9b27a'];
  for (let gx = x0; gx < x0 + size; gx += 26) {
    for (let gz = z0; gz < z0 + size; gz += 18) {
      if (Math.abs(gx + 13) < 30 && gz > -40 && gz < 20) continue;
      const w = 26 - 1.2, h = 18 - 1.2;
      const col = fieldCols[(r() * fieldCols.length) | 0];
      ctx.fillStyle = col; ctx.fillRect(gx + 0.6, gz + 0.6, w, h);
      // 畝の筋
      if (r() < 0.6) {
        ctx.strokeStyle = r() < 0.5 ? 'rgba(60,90,30,0.25)' : 'rgba(255,255,220,0.18)';
        ctx.lineWidth = 0.45;
        const vertical = r() < 0.5;
        for (let s = 0; s < (vertical ? w : h); s += 1.4) {
          ctx.beginPath();
          if (vertical) { ctx.moveTo(gx + 0.6 + s, gz + 0.6); ctx.lineTo(gx + 0.6 + s, gz + 0.6 + h); }
          else { ctx.moveTo(gx + 0.6, gz + 0.6 + s); ctx.lineTo(gx + 0.6 + w, gz + 0.6 + s); }
          ctx.stroke();
        }
      }
      // 水を張った田
      if (r() < 0.12) { ctx.fillStyle = 'rgba(150,200,210,0.55)'; ctx.fillRect(gx + 1.2, gz + 1.2, w - 1.2, h - 1.2); }
    }
  }
  // 住宅地の区画
  ctx.fillStyle = '#93b45e'; ctx.fillRect(-60, -50, 120, 64);
  for (let i = 0; i < 2400; i++) softDot(ctx, -60 + r() * 120, -50 + r() * 64, 0.5 + r() * 2, r() < 0.5 ? '#86ab4e' : '#9fc068', 0.3);
  // 川
  ctx.strokeStyle = '#7fb0c4'; ctx.lineWidth = 9; ctx.lineCap = 'round';
  ctx.beginPath();
  for (let x = x0; x <= x0 + size; x += 8) { const z = 92 + Math.sin(x * 0.012) * 26 + Math.sin(x * 0.031) * 8; x === x0 ? ctx.moveTo(x, z) : ctx.lineTo(x, z); }
  ctx.stroke();
  ctx.strokeStyle = 'rgba(210,235,240,0.5)'; ctx.lineWidth = 2;
  ctx.stroke();
  // 道路
  ctx.strokeStyle = '#a2a6a6'; ctx.lineWidth = 5.2; ctx.lineCap = 'butt';
  ctx.beginPath(); ctx.moveTo(x0, 15.6); ctx.lineTo(x0 + size, 15.6); ctx.stroke();
  ctx.lineWidth = 3.6;
  ctx.beginPath(); ctx.moveTo(40, 15); ctx.bezierCurveTo(60, 60, 30, 120, 70, 320); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-90, 15); ctx.bezierCurveTo(-110, -60, -80, -140, -140, -320); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-320, -120); ctx.bezierCurveTo(-200, -100, -120, -90, -98, -60); ctx.stroke();
  // 森
  for (let i = 0; i < 30; i++) {
    const x = x0 + r() * size, z = z0 + r() * size;
    if (Math.abs(x) < 70 && Math.abs(z) < 60) continue;
    for (let j = 0; j < 40; j++) softDot(ctx, x + (r() - 0.5) * 50, z + (r() - 0.5) * 35, 3 + r() * 5, r() < 0.5 ? '#4f7a35' : '#5e8a3c', 0.55, 0.4);
  }
  return c;
}

// ------------------------------------------------------------
// 地面
// ------------------------------------------------------------
function makeGrassDetail() {
  const S = 512;
  const c = makeCanvas(S, S);
  const ctx = c.getContext('2d');
  const r = mulberry32(8);
  ctx.fillStyle = 'rgb(128,128,128)'; ctx.fillRect(0, 0, S, S);
  for (let i = 0; i < 9000; i++) {
    const x = r() * S, y = r() * S;
    const len = 6 + r() * 14, a = -Math.PI / 2 + (r() - 0.5) * 1.2;
    const v = 90 + r() * 110;
    ctx.strokeStyle = `rgba(${v},${v},${v},0.55)`;
    ctx.lineWidth = 1 + r() * 1.5;
    for (const dx of [-S, 0, S]) for (const dy of [-S, 0, S]) {
      if (x + dx < -30 || x + dx > S + 30 || y + dy < -30 || y + dy > S + 30) continue;
      ctx.beginPath(); ctx.moveTo(x + dx, y + dy); ctx.lineTo(x + dx + Math.cos(a) * len, y + dy + Math.sin(a) * len); ctx.stroke();
    }
  }
  return canvasTexture(c, { repeat: true, srgb: false, anisotropy: 8 });
}

function createGround(G) {
  const gmap = canvasTexture(paintGardenMap(), { anisotropy: 8 });
  const wmap = canvasTexture(paintWorldMap(), { anisotropy: 8 });
  const detail = makeGrassDetail();
  const mat = makeMaterial(G, {
    uniforms: {
      uGMap: { value: gmap }, uWMap: { value: wmap }, uDetail: { value: detail },
      uG: { value: new THREE.Vector3(GARDEN.x0, GARDEN.z0, GARDEN.size) },
      uW: { value: new THREE.Vector3(WORLD.x0, WORLD.z0, WORLD.size) },
      uRipple: { value: new THREE.Vector4(0, 0, -100, 0) },
    },
    vertexShader: /* glsl */`
      varying vec3 vW;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */`
      uniform sampler2D uGMap; uniform sampler2D uWMap; uniform sampler2D uDetail;
      uniform vec3 uG; uniform vec3 uW;
      varying vec3 vW;
      vec3 farFields(vec2 p){
        vec2 cell = floor(p / vec2(34.0, 22.0));
        float h = hash12(cell);
        vec3 c = mix(vec3(0.38, 0.55, 0.20), vec3(0.62, 0.70, 0.30), h);
        c = mix(c, vec3(0.30, 0.42, 0.16), step(0.82, h));
        vec2 f = fract(p / vec2(34.0, 22.0));
        float edge = smoothstep(0.0, 0.03, f.x) * smoothstep(0.0, 0.04, f.y);
        c *= 0.8 + 0.2 * edge;
        float forest = smoothstep(0.55, 0.7, fbm2(p * 0.004));
        c = mix(c, vec3(0.18, 0.30, 0.13), forest);
        return c * c;
      }
      void main(){
        vec2 p = vW.xz;
        vec2 guv = (p - uG.xy) / uG.z; guv.y = 1.0 - guv.y;
        vec2 wuv = (p - uW.xy) / uW.z; wuv.y = 1.0 - wuv.y;
        vec3 far = farFields(p);
        vec3 wc = texture2D(uWMap, wuv).rgb;
        float wIn = smoothstep(0.0, 0.04, wuv.x) * smoothstep(1.0, 0.96, wuv.x) * smoothstep(0.0, 0.04, wuv.y) * smoothstep(1.0, 0.96, wuv.y);
        vec3 col = mix(far, wc, wIn);
        vec3 gc = texture2D(uGMap, guv).rgb;
        float gIn = smoothstep(0.0, 0.06, guv.x) * smoothstep(1.0, 0.94, guv.x) * smoothstep(0.0, 0.06, guv.y) * smoothstep(1.0, 0.94, guv.y);
        col = mix(col, gc, gIn);
        // 近距離の草の細部
        float dist = length(vW - cameraPosition);
        float grassy = smoothstep(0.02, 0.10, col.g - col.r) ;
        float d1 = texture2D(uDetail, p * 0.9).r;
        float d2 = texture2D(uDetail, p * 0.23 + 0.3).r;
        float det = mix(d2, d1, smoothstep(30.0, 6.0, dist));
        col *= mix(1.0, 0.55 + 0.9 * det, grassy * smoothstep(90.0, 10.0, dist));
        // 雲の影 (ゆっくり流れる)
        float cs = smoothstep(0.5, 0.75, fbm2((p + vec2(uTime * 0.9, uTime * 0.25)) * 0.018));
        vec3 n = vec3(0.0, 1.0, 0.0);
        float vis = sunVis(vW + vec3(0.0, 0.02, 0.0)) * (1.0 - cs * 0.35);
        float ndl = max(dot(n, uSunDir), 0.0);
        // 少し彩度を上げる (上空からも色が沈まないように)
        float lum = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(vec3(lum), col, 1.25);
        vec3 lit = col * (hemi(n) * 0.75 + uSunColor * ndl * vis);
        lit = applyFog(lit, vW);
        gl_FragColor = finish(lit, 1.0);
      }`,
  });
  const geo = new THREE.PlaneGeometry(5000, 5000, 1, 1);
  geo.rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geo, mat);
  G.scene.add(mesh);
  return { mesh, mat };
}

// ------------------------------------------------------------
// 花壇の土 (くぼみ・湿り・ひび割れ)
// ------------------------------------------------------------
function makeSoilTexture() {
  const S = 512;
  const c = makeCanvas(S, S);
  const ctx = c.getContext('2d');
  const r = mulberry32(31);
  ctx.fillStyle = '#6a4a30'; ctx.fillRect(0, 0, S, S);
  const wrapDot = (x, y, rad, col, a, h) => {
    for (const dx of [-S, 0, S]) for (const dy of [-S, 0, S]) {
      const X = x + dx, Y = y + dy;
      if (X < -rad || X > S + rad || Y < -rad || Y > S + rad) continue;
      softDot(ctx, X, Y, rad, col, a, h);
    }
  };
  for (let i = 0; i < 1400; i++) wrapDot(r() * S, r() * S, 4 + r() * 22, r() < 0.5 ? '#5a3c25' : '#7a5838', 0.25, 0.2);
  // 土の粒: 影→本体→ハイライト
  for (let i = 0; i < 2600; i++) {
    const x = r() * S, y = r() * S, rad = 1.5 + r() * 4.5;
    wrapDot(x + rad * 0.35, y + rad * 0.45, rad * 1.1, '#2e1c10', 0.55, 0.3);
    const v = r();
    wrapDot(x, y, rad, v < 0.33 ? '#8a6542' : v < 0.66 ? '#755234' : '#9a7650', 0.95, 0.55);
    wrapDot(x - rad * 0.3, y - rad * 0.35, rad * 0.45, '#b8956a', 0.6, 0.2);
  }
  // 小石
  for (let i = 0; i < 70; i++) {
    const x = r() * S, y = r() * S, rad = 3 + r() * 5;
    wrapDot(x + 2, y + 2.5, rad * 1.1, '#2a1c12', 0.6, 0.4);
    wrapDot(x, y, rad, r() < 0.5 ? '#b3aa9a' : '#a09484', 1, 0.75);
    wrapDot(x - rad * 0.3, y - rad * 0.3, rad * 0.4, '#e6e0d2', 0.7, 0.2);
  }
  // わら屑
  ctx.lineCap = 'round';
  for (let i = 0; i < 40; i++) {
    const x = r() * S, y = r() * S, a = r() * 6.28, l = 8 + r() * 14;
    ctx.strokeStyle = 'rgba(200,170,100,0.75)'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); ctx.stroke();
  }
  return canvasTexture(c, { repeat: true, anisotropy: 8 });
}

const SOIL_HEIGHT_GLSL = /* glsl */`
  uniform float uFill; uniform float uBulge; uniform float uHollowR; uniform float uHollowD; uniform vec2 uHalf;
  // 花壇の土の高さ (局所座標 x,z)
  float soilH(vec2 p){
    vec2 q = abs(p) / uHalf;
    float e = max(q.x, q.y);
    float rr = length(max(abs(p) - uHalf + 0.35, 0.0)) / 0.35;
    float edge = max(e, rr);
    float base = 0.13 - 0.05 * edge * edge;
    base += (vnoise2(p * 7.0) - 0.5) * 0.012 + (vnoise2(p * 23.0) - 0.5) * 0.004;
    float d = length(p);
    float hollow = -uHollowD * (1.0 - smoothstep(0.0, uHollowR, d)) * (1.0 - uFill);
    float rim = 0.012 * exp(-pow((d - uHollowR) / 0.05, 2.0)) * (1.0 - uFill);
    float mound = 0.035 * (1.0 - smoothstep(0.0, uHollowR * 1.3, d)) * uFill;
    float bulge = uBulge * 0.05 * (1.0 - smoothstep(0.0, 0.22, d));
    return base + hollow + rim + mound + bulge;
  }
`;

function createPlot(G) {
  const soilTex = makeSoilTexture();
  // 濡れ具合マップ (動的に塗る)
  const wetCanvas = makeCanvas(256, 256);
  const wctx = wetCanvas.getContext('2d');
  wctx.fillStyle = '#000'; wctx.fillRect(0, 0, 256, 256);
  const wetTex = canvasTexture(wetCanvas, { srgb: false, mipmaps: false });
  const half = new THREE.Vector2(PLOT.w / 2, PLOT.d / 2);
  const mat = makeMaterial(G, {
    uniforms: {
      uSoil: { value: soilTex }, uWet: { value: wetTex },
      uFill: { value: 0 }, uBulge: { value: 0 }, uCrack: { value: 0 },
      uHollowR: { value: PLOT.hollowR }, uHollowD: { value: PLOT.hollowDepth }, uHalf: { value: half },
      uPat: { value: new THREE.Vector4(0, 0, -10, 0) },
    },
    vertexShader: /* glsl */`
      uniform float uTime;
      ${'' /* vnoise2 は頂点側にも必要 */}
      float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      float vnoise2(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
        return mix(mix(hash12(i), hash12(i+vec2(1,0)), u.x), mix(hash12(i+vec2(0,1)), hash12(i+vec2(1,1)), u.x), u.y); }
      ${SOIL_HEIGHT_GLSL}
      uniform vec4 uPat;
      varying vec3 vW; varying vec3 vN; varying vec2 vP; varying float vEdge;
      void main(){
        vec2 p = position.xz;
        float h = soilH(p);
        // 手でたたいた時のへこみ
        float pt = uTime - uPat.z;
        float pd = length(p - uPat.xy);
        h -= 0.02 * exp(-pd * pd / 0.02) * exp(-pt * 5.0) * step(0.0, pt);
        float e = 0.01;
        float hx = soilH(p + vec2(e, 0.0)) - soilH(p - vec2(e, 0.0));
        float hz = soilH(p + vec2(0.0, e)) - soilH(p - vec2(0.0, e));
        vN = normalize(vec3(-hx, 2.0 * e, -hz));
        vec3 pos = vec3(p.x, h * step(-0.5, position.y) , p.y);
        if (position.y < -0.5) pos.y = -0.02;
        vec4 w = modelMatrix * vec4(pos, 1.0);
        vW = w.xyz; vP = p;
        vec2 q = abs(p) / uHalf; vEdge = max(q.x, q.y);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D uSoil; uniform sampler2D uWet; uniform float uCrack; uniform vec2 uHalf; uniform float uHollowR; uniform float uFill;
      varying vec3 vW; varying vec3 vN; varying vec2 vP; varying float vEdge;
      void main(){
        vec3 n = normalize(vN);
        vec3 alb = texture2D(uSoil, vP * 1.6).rgb;
        alb = mix(alb, texture2D(uSoil, vP * 0.47 + 0.37).rgb, 0.35);
        vec2 wuv = vP / (uHalf * 2.0) + 0.5; wuv.y = 1.0 - wuv.y;
        float wet = texture2D(uWet, wuv).r;
        float d = length(vP);
        // くぼみの中は少し暗く湿っている
        float inH = (1.0 - smoothstep(0.0, uHollowR, d)) * (1.0 - uFill);
        float rimL = exp(-pow((d - uHollowR * 1.05) / 0.05, 2.0)) * (1.0 - uFill);
        alb *= 1.0 - inH * 0.45;
        alb = mix(alb, alb * vec3(1.35, 1.28, 1.2), rimL * 0.6);
        alb = mix(alb, alb * vec3(0.45, 0.42, 0.42), wet);
        // 芽が土を割るひび
        float ang = atan(vP.y, vP.x);
        float crack = 0.0;
        if (uCrack > 0.0) {
          float rays = abs(sin(ang * 3.0 + sin(ang * 7.0) * 0.6));
          crack = smoothstep(0.05, 0.0, rays * d * 6.0 - 0.04) * smoothstep(0.24 * uCrack, 0.02, d) * uCrack;
        }
        alb *= 1.0 - crack * 0.7;
        vec3 col = shadeLambert(alb, n, vW, 0.2, 1.0);
        // 濡れた土のきらめき
        vec3 V = normalize(cameraPosition - vW);
        vec3 H = normalize(uSunDir + V);
        float sp = pow(max(dot(n, H), 0.0), 80.0) * wet;
        col += uSunColor * sp * 0.6 * sunVis(vW);
        col = applyFog(col, vW);
        gl_FragColor = finish(col, 1.0);
      }`,
  });
  // 角丸長方形の格子 (外周はスカートとして下に折り返す)
  const nx = 72, nz = 52;
  const pos = [], idx = [];
  for (let j = 0; j <= nz; j++) {
    for (let i = 0; i <= nx; i++) {
      let u = i / nx * 2 - 1, v = j / nz * 2 - 1;
      // 中心付近を細かく
      u = Math.sign(u) * Math.pow(Math.abs(u), 1.25); v = Math.sign(v) * Math.pow(Math.abs(v), 1.25);
      const skirt = (i === 0 || j === 0 || i === nx || j === nz);
      let x = u * half.x, z = v * half.y;
      // 角を丸める
      const cr = 0.35;
      const ax = Math.abs(x) - (half.x - cr), az = Math.abs(z) - (half.y - cr);
      if (ax > 0 && az > 0) {
        const l = Math.hypot(ax, az);
        if (l > cr) { x = Math.sign(x) * ((half.x - cr) + ax / l * cr); z = Math.sign(z) * ((half.y - cr) + az / l * cr); }
      }
      pos.push(x * (skirt ? 1.0 : 1), skirt ? -1 : 0, z);
    }
  }
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setIndex(idx);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  G.scene.add(mesh);

  // 縁石
  const r = mulberry32(55);
  const stones = [];
  const per = [];
  const cr = 0.35;
  // 角丸長方形の周に沿って石を置く
  const L = 2 * (PLOT.w + PLOT.d);
  for (let s = 0; s < L; s += 0.27 + r() * 0.06) per.push(s);
  for (const s of per) {
    let t = s, x, z;
    const W = PLOT.w / 2 + 0.12, D = PLOT.d / 2 + 0.12;
    if (t < 2 * W) { x = -W + t; z = -D; }
    else if ((t -= 2 * W) < 2 * D) { x = W; z = -D + t; }
    else if ((t -= 2 * D) < 2 * W) { x = W - t; z = D; }
    else { t -= 2 * W; x = -W; z = D - t; }
    // 角を内側へ丸める
    const ax = Math.abs(x) - (W - cr), az = Math.abs(z) - (D - cr);
    if (ax > 0 && az > 0) { const l = Math.hypot(ax, az); x = Math.sign(x) * (W - cr + ax / l * cr); z = Math.sign(z) * (D - cr + az / l * cr); }
    const sz = 0.13 + r() * 0.05;
    const g = blob(sz, 1, (d) => (vnoise(d.x * 3 + s, d.z * 3, 7) - 0.5) * 0.35, 0.62);
    g.rotateY(r() * 6.28);
    g.translate(x, sz * 0.32, z);
    const v = 0.22 + r() * 0.12;
    colorize(g, new THREE.Color(v, v * 0.95, v * 0.86), 0.12, r);
    stones.push(g);
  }
  const stoneMesh = new THREE.Mesh(merge(stones), makeLit(G, { wrap: 0.3, spec: 0.15 }));
  G.scene.add(stoneMesh);

  // 濡らす
  const plot = {
    mesh, mat, wetCanvas, wctx, wetTex,
    soilHeight(x, z) { return soilHeightJS(x, z, mat.uniforms); },
    wet(x, z, amount) {
      const u = (x / PLOT.w + 0.5) * 256, v = (z / PLOT.d + 0.5) * 256;
      if (u < -20 || u > 276 || v < -20 || v > 276) return;
      softDot(wctx, u, v, 10 + amount * 16, 'rgba(255,255,255,1)', 0.18 * amount, 0.2);
      plot._dirty = true;
    },
    dry(dt) { plot._dryT = (plot._dryT || 0) + dt; },
    update(dt) {
      plot._acc = (plot._acc || 0) + dt;
      if (plot._dirty && plot._acc > 0.06) { wetTex.needsUpdate = true; plot._dirty = false; plot._acc = 0; }
    },
    pat(x, z, t) { mat.uniforms.uPat.value.set(x, z, t, 0); },
  };
  return plot;
}

// JS 側の土の高さ (くぼみの深さなどの当たり判定用、ノイズは省略)
function soilHeightJS(x, z, u) {
  const hx = PLOT.w / 2, hz = PLOT.d / 2;
  const qx = Math.abs(x) / hx, qz = Math.abs(z) / hz;
  const e = Math.max(qx, qz);
  const base = 0.13 - 0.05 * e * e;
  const d = Math.hypot(x, z);
  const fill = u.uFill.value;
  const sm = (a, b, t) => { const k = clamp((t - a) / (b - a)); return k * k * (3 - 2 * k); };
  const hollow = -PLOT.hollowDepth * (1 - sm(0, PLOT.hollowR, d)) * (1 - fill);
  const rim = 0.012 * Math.exp(-Math.pow((d - PLOT.hollowR) / 0.05, 2)) * (1 - fill);
  const mound = 0.035 * (1 - sm(0, PLOT.hollowR * 1.3, d)) * fill;
  const bulge = u.uBulge.value * 0.05 * (1 - sm(0, 0.22, d));
  if (e > 1.05) return 0;
  return base + hollow + rim + mound + bulge;
}

// ------------------------------------------------------------
// 家
// ------------------------------------------------------------
function createHouse(G) {
  const H = HOUSE;
  const w = H.x1 - H.x0, d = H.z1 - H.z0, cx = (H.x0 + H.x1) / 2, cz = (H.z0 + H.z1) / 2;
  const walls = new THREE.BoxGeometry(w, H.wallH, d);
  walls.translate(cx, H.wallH / 2, cz);
  colorize(walls, 0xf6ecd8);
  // 切妻の三角壁
  const gable = new THREE.BufferGeometry();
  const gy0 = H.wallH, gy1 = H.ridgeH - 0.25;
  const gv = [];
  for (const x of [H.x0, H.x1]) {
    const s = x === H.x0 ? -1 : 1;
    if (s < 0) gv.push(x, gy0, H.z1, x, gy1, cz, x, gy0, H.z0);
    else gv.push(x, gy0, H.z0, x, gy1, cz, x, gy0, H.z1);
  }
  gable.setAttribute('position', new THREE.Float32BufferAttribute(gv, 3));
  gable.computeVertexNormals();
  colorize(gable, 0xf6ecd8);
  const wallMesh = new THREE.Mesh(merge([walls, gable]), makeLit(G, { mode: 3, wrap: 0.25 }));
  G.scene.add(wallMesh);

  // 屋根 (瓦、uv はメートル)
  const ov = 0.55, ridge = H.ridgeH, eaveY = H.wallH - 0.25;
  const rx0 = H.x0 - ov, rx1 = H.x1 + ov;
  const zf = H.z1 + ov, zb = H.z0 - ov;
  const slopeLen = Math.hypot(ridge - eaveY, zf - cz);
  const roof = new THREE.BufferGeometry();
  const rp = [], ru = [];
  const quad = (a, b, c, dd, ua, ub, uc, ud) => { rp.push(...a, ...b, ...c, ...a, ...c, ...dd); ru.push(...ua, ...ub, ...uc, ...ua, ...uc, ...ud); };
  quad([rx0, eaveY, zf], [rx1, eaveY, zf], [rx1, ridge, cz], [rx0, ridge, cz], [0, slopeLen], [rx1 - rx0, slopeLen], [rx1 - rx0, 0], [0, 0]);
  quad([rx1, eaveY, zb], [rx0, eaveY, zb], [rx0, ridge, cz], [rx1, ridge, cz], [0, slopeLen], [rx1 - rx0, slopeLen], [rx1 - rx0, 0], [0, 0]);
  roof.setAttribute('position', new THREE.Float32BufferAttribute(rp, 3));
  roof.setAttribute('uv', new THREE.Float32BufferAttribute(ru, 2));
  roof.computeVertexNormals();
  colorize(roof, 0xc8553d);
  // 屋根の厚み (軒先の板)
  const fascia1 = new THREE.BoxGeometry(rx1 - rx0, 0.18, 0.12); fascia1.translate((rx0 + rx1) / 2, eaveY - 0.05, zf);
  const fascia2 = fascia1.clone(); fascia2.translate(0, 0, zb - zf);
  const ridgeCap = new THREE.BoxGeometry(rx1 - rx0 + 0.1, 0.22, 0.32); ridgeCap.translate((rx0 + rx1) / 2, ridge + 0.04, cz);
  for (const g of [fascia1, fascia2]) colorize(g, 0xfaf6ee);
  colorize(ridgeCap, 0x9a3e2e);
  const roofMat = makeLit(G, { mode: 4, wrap: 0.2, side: THREE.DoubleSide });
  G.scene.add(new THREE.Mesh(roof, roofMat));
  G.scene.add(new THREE.Mesh(merge([fascia1, fascia2, ridgeCap]), makeLit(G, { wrap: 0.3 })));

  // 窓・扉・煙突・植木箱
  const parts = [];
  const r = mulberry32(3);
  const addBox = (sx, sy, sz, x, y, z, col) => { const g = new THREE.BoxGeometry(sx, sy, sz); g.translate(x, y, z); colorize(g, col); parts.push(g); };
  const windowAt = (x, y, z, face, ww = 1.1, wh = 1.25, curtain = 0xf2a7b5) => {
    // face: 'front' (z=H.z1), 'left' (x=H.x0)
    const t = 0.12;
    if (face === 'front') {
      addBox(ww + 0.22, wh + 0.22, t, x, y, z + 0.02, 0xffffff);
      addBox(ww, wh, t, x, y, z + 0.05, 0x5c86a6);
      addBox(ww * 0.36, wh * 0.95, t, x - ww * 0.3, y, z + 0.08, curtain);
      addBox(0.06, wh, t, x, y, z + 0.11, 0xffffff);
      addBox(ww, 0.06, t, x, y, z + 0.11, 0xffffff);
      addBox(ww + 0.35, 0.1, 0.25, x, y - wh / 2 - 0.12, z + 0.12, 0xfaf6ee);
      // 植木箱と花
      addBox(ww + 0.1, 0.22, 0.28, x, y - wh / 2 - 0.3, z + 0.18, 0x9a6a3e);
      for (let i = 0; i < 7; i++) {
        const g = blob(0.1 + r() * 0.05, 1, () => 0, 1);
        g.translate(x - ww / 2 + 0.1 + i * (ww - 0.2) / 6, y - wh / 2 - 0.12 + r() * 0.06, z + 0.2 + r() * 0.05);
        colorize(g, r() < 0.5 ? 0xe8394f : 0xff6f7d, 0.2, r); parts.push(g);
      }
    } else {
      addBox(t, wh + 0.22, ww + 0.22, x - 0.02, y, z, 0xffffff);
      addBox(t, wh, ww, x - 0.05, y, z, 0x5c86a6);
      addBox(t, wh * 0.95, ww * 0.36, x - 0.08, y, z + ww * 0.3, curtain);
      addBox(t, wh, 0.06, x - 0.11, y, z, 0xffffff);
      addBox(t, 0.06, ww, x - 0.11, y, z, 0xffffff);
      addBox(0.25, 0.1, ww + 0.35, x - 0.12, y - wh / 2 - 0.12, z, 0xfaf6ee);
    }
  };
  const zf0 = H.z1;
  windowAt(3.3, 1.7, zf0, 'front', 1.2, 1.3, 0xf7c96b);
  windowAt(9.4, 1.7, zf0, 'front', 1.0, 1.3, 0xf2a7b5);
  windowAt(3.3, 4.3, zf0, 'front', 1.0, 1.1, 0x9fd3e8);
  windowAt(6.0, 4.3, zf0, 'front', 1.0, 1.1, 0xf2a7b5);
  windowAt(8.8, 4.3, zf0, 'front', 1.0, 1.1, 0xf7c96b);
  windowAt(H.x0, 1.8, -8.6, 'left', 1.1, 1.2, 0x9fd3e8);
  windowAt(H.x0, 4.4, -10.0, 'left', 1.0, 1.1, 0xf2a7b5);
  windowAt(H.x0, 1.8, -11.8, 'left', 1.0, 1.2, 0xf7c96b);
  // 屋根裏の丸窓
  addBox(0.12, 0.8, 0.8, H.x0 - 0.03, 6.8, cz, 0xffffff);
  addBox(0.12, 0.6, 0.6, H.x0 - 0.06, 6.8, cz, 0x5c86a6);
  // 玄関
  addBox(1.2, 2.2, 0.12, 7.0, 1.1, zf0 + 0.03, 0x4f7f8a);
  addBox(1.45, 2.35, 0.08, 7.0, 1.15, zf0 + 0.01, 0xffffff);
  addBox(0.3, 0.45, 0.14, 7.0, 1.65, zf0 + 0.06, 0xe7c47a);
  addBox(0.08, 0.08, 0.12, 7.4, 1.05, zf0 + 0.12, 0xe0b040);
  addBox(2.0, 0.15, 1.1, 7.0, 0.08, zf0 + 0.55, 0xd0c8b8);
  addBox(2.0, 0.1, 1.1, 7.0, 2.65, zf0 + 0.5, 0xc8553d);
  // 煙突
  addBox(0.7, 2.2, 0.7, 8.6, ridge - 0.2, cz - 1.2, 0xa65a42);
  addBox(0.85, 0.18, 0.85, 8.6, ridge + 0.95, cz - 1.2, 0x8c4a36);
  // 土台
  addBox(w + 0.2, 0.35, d + 0.2, cx, 0.17, cz, 0xb8ab98);
  // 雨どい
  addBox(0.1, H.wallH, 0.1, H.x0 + 0.1, H.wallH / 2, H.z1 + 0.12, 0xe8e2d6);
  const deco = new THREE.Mesh(merge(parts.map((g) => ensureColor(g))), makeLit(G, { wrap: 0.3, spec: 0.25 }));
  G.scene.add(deco);
  return { wallMesh, deco };
}

// ------------------------------------------------------------
// 木
// ------------------------------------------------------------
function createTree(G) {
  const r = mulberry32(17);
  const trunkParts = [];
  const trunk = new THREE.CylinderGeometry(0.22, 0.42, 6.2, 12, 6);
  const tp = trunk.getAttribute('position');
  for (let i = 0; i < tp.count; i++) {
    const y = tp.getY(i);
    tp.setX(i, tp.getX(i) + Math.sin(y * 0.8) * 0.12);
  }
  trunk.translate(0, 3.1, 0);
  trunk.computeVertexNormals();
  trunkParts.push(trunk);
  const branch = (len, rad, ax, az, y) => {
    const b = new THREE.CylinderGeometry(rad * 0.5, rad, len, 8);
    b.translate(0, len / 2, 0);
    b.rotateZ(az); b.rotateX(ax);
    b.translate(0, y, 0);
    trunkParts.push(b);
  };
  branch(3.2, 0.18, 0.3, 0.7, 3.6);
  branch(3.0, 0.16, -0.5, -0.6, 4.0);
  branch(2.6, 0.14, 0.7, -0.2, 4.6);
  branch(2.4, 0.12, -0.2, 0.5, 5.2);
  // ブランコの枝
  branch(2.8, 0.15, 0.0, -1.25, 3.9);
  const tg = merge(trunkParts.map((g) => colorize(g, 0x7a5a40)));
  const trunkMesh = new THREE.Mesh(tg, makeLit(G, { mode: 2, wrap: 0.3 }));
  trunkMesh.position.set(TREE.x, 0, TREE.z);
  G.scene.add(trunkMesh);

  // 樹冠: 共有ユニフォームの球に合わせた塊 + 小さな塊
  const canopy = [];
  const cps = G.U.uCanopy.value;
  const addCrown = (cx, cy, cz, rad, n) => {
    const g = blob(rad, 3, (d) => (vnoise(d.x * 2.5 + cx, d.y * 2.5 + d.z * 2.5, 9) - 0.5) * 0.35, 0.86);
    colorizeGradient(g, 0x3e6b2a, 0x8dbb4c, -rad, rad);
    g.translate(cx - TREE.x, cy, cz - TREE.z);
    canopy.push(g);
  };
  for (const c of cps) addCrown(c.x, c.y, c.z, c.w * 0.92, 0);
  for (let i = 0; i < 9; i++) {
    const base = cps[i % 3];
    const a = r() * 6.28, el = (r() - 0.3) * 1.2;
    const rad = base.w * (0.35 + r() * 0.25);
    addCrown(base.x + Math.cos(a) * base.w * 0.7, base.y + el * base.w * 0.5, base.z + Math.sin(a) * base.w * 0.7, rad, 0);
  }
  const crownMesh = new THREE.Mesh(merge(canopy), makeLit(G, { mode: 1, wrap: 0.55, sway: 1 }));
  crownMesh.position.set(TREE.x, 0, TREE.z);
  G.scene.add(crownMesh);

  // ブランコ
  const swing = new THREE.Group();
  const ropeMat = makeLit(G, { wrap: 0.4 });
  const rope = new THREE.CylinderGeometry(0.015, 0.015, 2.6, 4); rope.translate(0, -1.3, 0);
  const r1 = rope.clone(); r1.translate(-0.25, 0, 0);
  const r2 = rope.clone(); r2.translate(0.25, 0, 0);
  colorize(r1, 0xd8c8a0); colorize(r2, 0xd8c8a0);
  const seat = new THREE.BoxGeometry(0.65, 0.06, 0.25); seat.translate(0, -2.6, 0); colorize(seat, 0xd04a3a);
  swing.add(new THREE.Mesh(merge([r1, r2, seat]), ropeMat));
  swing.position.set(TREE.x + 2.3, 5.4, TREE.z + 0.2);
  G.scene.add(swing);
  return { trunkMesh, crownMesh, swing, swingSpring: { a: 0, v: 0 } };
}

// ------------------------------------------------------------
// 柵・植え込み・たらい・支柱・物干し・郵便受け
// ------------------------------------------------------------
function createProps(G) {
  const r = mulberry32(99);
  const parts = [];
  // 白い柵 (正面)
  const picket = (x) => {
    const p = new THREE.BoxGeometry(0.09, 0.95, 0.035); p.translate(x, 0.475, 11);
    const tip = new THREE.ConeGeometry(0.064, 0.12, 4); tip.rotateY(Math.PI / 4); tip.scale(1, 1, 0.4); tip.translate(x, 1.01, 11);
    parts.push(colorize(p, 0xfbfaf4), colorize(tip, 0xfbfaf4));
  };
  for (let x = -15; x <= 15; x += 0.19) { if (Math.abs(x) < 1.0) continue; picket(x); }
  for (const y of [0.3, 0.75]) {
    for (const [a, b] of [[-15, -1.0], [1.0, 15]]) {
      const rail = new THREE.BoxGeometry(b - a, 0.07, 0.04); rail.translate((a + b) / 2, y, 10.97);
      parts.push(colorize(rail, 0xf0eee6));
    }
  }
  // 門柱と郵便受け
  for (const x of [-1.1, 1.1]) { const g = new THREE.BoxGeometry(0.18, 1.2, 0.18); g.translate(x, 0.6, 11); parts.push(colorize(g, 0xfbfaf4)); }
  const post = new THREE.BoxGeometry(0.08, 1.0, 0.08); post.translate(1.6, 0.5, 11.4); parts.push(colorize(post, 0x7a5a40));
  const box = new THREE.BoxGeometry(0.32, 0.26, 0.42); box.translate(1.6, 1.12, 11.4); parts.push(colorize(box, 0xd93b35));
  const flag = new THREE.BoxGeometry(0.03, 0.18, 0.06); flag.translate(1.78, 1.25, 11.5); parts.push(colorize(flag, 0xffd040));
  // 花壇の支柱 (朝顔の竹)
  const pole = new THREE.CylinderGeometry(0.02, 0.025, 1.7, 6); pole.translate(-2.35, 0.85, -1.45); parts.push(colorize(pole, 0xc8b070));
  const pole2 = new THREE.CylinderGeometry(0.02, 0.025, 1.5, 6); pole2.rotateZ(0.12); pole2.translate(-2.55, 0.75, -1.3); parts.push(colorize(pole2, 0xc8b070));
  // 物干し
  for (const z of [-2.2, -8.2]) {
    const p = new THREE.CylinderGeometry(0.04, 0.05, 2.0, 6); p.translate(12.4, 1.0, z); parts.push(colorize(p, 0xd8d8d0));
    const t = new THREE.BoxGeometry(0.06, 0.06, 0.7); t.translate(12.4, 1.95, z); parts.push(colorize(t, 0xd8d8d0));
  }
  const propsMesh = new THREE.Mesh(merge(parts), makeLit(G, { wrap: 0.35, spec: 0.1 }));
  G.scene.add(propsMesh);

  // 植え込み (横と奥)
  const hedges = [];
  const hedgeLine = (xa, za, xb, zb, h) => {
    const len = Math.hypot(xb - xa, zb - za);
    const n = Math.ceil(len / 1.1);
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const rad = 0.75 + r() * 0.35;
      const g = blob(rad, 2, (d) => (vnoise(d.x * 3 + i, d.y * 3, d.z * 3) - 0.5) * 0.3, 1.1 * h);
      colorizeGradient(g, 0x2f5a24, 0x7aa848, -rad, rad * h);
      g.translate(lerp(xa, xb, t), rad * 0.8, lerp(za, zb, t));
      hedges.push(g);
    }
  };
  hedgeLine(-15.2, -18.6, -15.2, 10.6, 1.0);
  hedgeLine(15.2, -18.6, 15.2, 10.6, 1.0);
  hedgeLine(-15.2, -18.8, 15.2, -18.8, 1.25);
  const hedgeMesh = new THREE.Mesh(merge(hedges), makeLit(G, { mode: 1, wrap: 0.5, sway: 0.3 }));
  G.scene.add(hedgeMesh);

  // たらい
  const tubPts = [];
  for (let i = 0; i <= 10; i++) {
    const t = i / 10;
    tubPts.push(new THREE.Vector2(TUB.r * (0.82 + 0.18 * t) + (i === 10 ? 0.02 : 0), TUB.h * t));
  }
  tubPts.push(new THREE.Vector2(TUB.r + 0.035, TUB.h + 0.01));
  tubPts.push(new THREE.Vector2(TUB.r - 0.015, TUB.h - 0.01));
  for (let i = 10; i >= 0; i--) {
    const t = i / 10;
    tubPts.push(new THREE.Vector2(TUB.r * (0.82 + 0.18 * t) - 0.02, Math.max(0.02, TUB.h * t)));
  }
  tubPts.unshift(new THREE.Vector2(0, 0.0));
  tubPts.push(new THREE.Vector2(0, 0.02));
  const tubGeo = new THREE.LatheGeometry(tubPts, 36);
  colorize(tubGeo, 0xb9c3c8);
  const tubMesh = new THREE.Mesh(tubGeo, makeLit(G, { wrap: 0.3, spec: 0.9 }));
  tubMesh.position.set(TUB.x, 0, TUB.z);
  G.scene.add(tubMesh);
  // 水面
  const waterMat = makeMaterial(G, {
    uniforms: { uRip: { value: [new THREE.Vector4(0, 0, -99, 0), new THREE.Vector4(0, 0, -99, 0), new THREE.Vector4(0, 0, -99, 0)] } },
    transparent: true,
    vertexShader: /* glsl */`
      varying vec3 vW; varying vec2 vL;
      void main(){ vL = position.xz; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */`
      uniform vec4 uRip[3];
      varying vec3 vW; varying vec2 vL;
      void main(){
        vec3 V = normalize(cameraPosition - vW);
        vec2 grad = vec2(0.0);
        for (int i = 0; i < 3; i++) {
          float t = uTime - uRip[i].z;
          if (t > 0.0 && t < 4.0) {
            vec2 d = vL - uRip[i].xy; float r = length(d) + 1e-4;
            float w = sin((r - t * 0.35) * 70.0) * exp(-t * 1.1) * exp(-abs(r - t * 0.35) * 18.0) * uRip[i].w;
            grad += d / r * w;
          }
        }
        grad += vec2(sin(vL.x * 20.0 + uTime * 1.7), cos(vL.y * 17.0 + uTime * 1.3)) * 0.02;
        vec3 n = normalize(vec3(-grad.x, 1.0, -grad.y));
        vec3 R = reflect(-V, n);
        float fres = 0.04 + 0.96 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
        vec3 sky = mix(uSkyHorizon, uSkyTop, clamp(R.y, 0.0, 1.0));
        vec3 deep = vec3(0.10, 0.16, 0.16);
        vec3 col = mix(deep, sky * 1.1, fres + 0.15);
        col += uSunColor * pow(max(dot(R, uSunDir), 0.0), 300.0) * 3.0 * sunVis(vW);
        col = applyFog(col, vW);
        gl_FragColor = finish(col, 0.92);
      }`,
  });
  const water = new THREE.Mesh(new THREE.CircleGeometry(TUB.r - 0.03, 36).rotateX(-Math.PI / 2), waterMat);
  water.position.set(TUB.x, TUB.h - 0.06, TUB.z);
  G.scene.add(water);
  let ripIdx = 0;
  const rippleTub = (x, z, strength = 1) => {
    waterMat.uniforms.uRip.value[ripIdx].set(x - TUB.x, z - TUB.z, G.U.uTime.value, strength);
    ripIdx = (ripIdx + 1) % 3;
  };

  // 洗濯物
  const clothes = new THREE.Group();
  const clothCols = [0xffffff, 0xf4b6c2, 0x8ec5e8, 0xffe08a, 0xffffff, 0xa8d8a0];
  const clothMat = makeMaterial(G, {
    uniforms: { uFlap: { value: 1 } },
    side: THREE.DoubleSide,
    vertexShader: /* glsl */`
      attribute vec3 color; uniform float uTime; uniform float uWind; uniform float uFlap;
      varying vec3 vW; varying vec3 vCol; varying vec3 vN;
      void main(){
        vCol = color;
        vec3 p = position;
        float hang = max(0.0, -p.y);
        p.x += sin(uTime * 3.0 + p.z * 4.0 + p.y * 3.0) * 0.08 * hang * (0.5 + uWind) * uFlap;
        p.z += sin(uTime * 2.3 + p.z * 2.0) * 0.03 * hang;
        vec4 w = modelMatrix * vec4(p, 1.0); vW = w.xyz;
        vN = normalize(mat3(modelMatrix) * vec3(1.0, 0.0, 0.0));
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: /* glsl */`
      varying vec3 vW; varying vec3 vCol; varying vec3 vN;
      void main(){
        vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n;
        vec3 col = shadeLambert(vCol, n, vW, 0.6, 1.0);
        col = applyFog(col, vW);
        gl_FragColor = finish(col, 1.0);
      }`,
  });
  const cgeos = [];
  let z = -2.6;
  clothCols.forEach((c, i) => {
    const h = 0.5 + r() * 0.35, wdt = 0.45 + r() * 0.3;
    const g = new THREE.PlaneGeometry(wdt, h, 1, 6);
    g.rotateY(Math.PI / 2);
    g.translate(0, -h / 2, z - wdt / 2);
    colorize(g, c);
    cgeos.push(g);
    z -= wdt + 0.25;
  });
  const lineG = new THREE.CylinderGeometry(0.008, 0.008, 6, 3); lineG.rotateX(Math.PI / 2); lineG.translate(0, 0, -5.2); colorize(lineG, 0xeeeeee);
  cgeos.push(lineG);
  const clothMesh = new THREE.Mesh(merge(cgeos), clothMat);
  clothMesh.position.set(12.4, 1.92, 0);
  G.scene.add(clothMesh);

  return { propsMesh, hedgeMesh, tubMesh, water, rippleTub, clothMat };
}

// ------------------------------------------------------------
// 草の葉 (インスタンス)
// ------------------------------------------------------------
function createGrass(G) {
  const blade = new THREE.BufferGeometry();
  const seg = 4;
  const bp = [], bh = [];
  for (let i = 0; i <= seg; i++) {
    const t = i / seg;
    const w = 0.5 * (1 - t) * (1 - t * 0.3);
    bp.push(-w, t, 0, w, t, 0);
    bh.push(t, t);
  }
  const bi = [];
  for (let i = 0; i < seg; i++) { const a = i * 2; bi.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  blade.setAttribute('position', new THREE.Float32BufferAttribute(bp, 3));
  blade.setIndex(bi);
  const igeo = new THREE.InstancedBufferGeometry();
  igeo.index = blade.index;
  igeo.setAttribute('position', blade.getAttribute('position'));
  const r = mulberry32(5150);
  const N = 14000;
  const inst = new Float32Array(N * 4), inst2 = new Float32Array(N * 4);
  let n = 0;
  for (let i = 0; i < N * 3 && n < N; i++) {
    const a = r() * 6.28, d = Math.pow(r(), 0.75) * 11;
    const x = Math.cos(a) * d * 1.2, z = Math.sin(a) * d + 2.0;
    // 花壇・道・たらい・家を避ける
    if (Math.abs(x) < PLOT.w / 2 + 0.3 && Math.abs(z) < PLOT.d / 2 + 0.3) continue;
    if (Math.hypot(x - TUB.x, z - TUB.z) < TUB.r + 0.1) continue;
    if (x > HOUSE.x0 - 0.5 && z < HOUSE.z1 + 1) continue;
    if (z > 10.8) continue;
    // 飛び石の周辺は短く
    const h = 0.05 + r() * 0.09 + (d > 5 ? r() * 0.04 : 0);
    inst.set([x, z, h, r() * 6.28], n * 4);
    inst2.set([0.006 + r() * 0.007, r(), (r() - 0.5) * 0.8, r()], n * 4);
    n++;
  }
  igeo.setAttribute('aI', new THREE.InstancedBufferAttribute(inst.subarray(0, n * 4), 4));
  igeo.setAttribute('aJ', new THREE.InstancedBufferAttribute(inst2.subarray(0, n * 4), 4));
  igeo.instanceCount = n;
  const mat = makeMaterial(G, {
    uniforms: { uPush: { value: new THREE.Vector4(0, 0, 0, 0) }, uRustle: { value: new THREE.Vector4(0, 0, -99, 0) } },
    side: THREE.DoubleSide,
    vertexShader: /* glsl */`
      attribute vec4 aI; attribute vec4 aJ;
      uniform float uTime; uniform float uWind; uniform vec4 uPush; uniform vec4 uRustle;
      varying vec3 vW; varying float vT; varying float vShade; varying vec3 vN;
      void main(){
        float t = position.y;
        float c = cos(aI.w), s = sin(aI.w);
        vec3 p = vec3(position.x * aJ.x * 2.0, t * aI.z, 0.0);
        p = vec3(c * p.x, p.y, s * p.x);
        vec3 base = vec3(aI.x, 0.0, aI.y);
        // 曲がり
        float bend = aJ.z + sin(uTime * (1.4 + aJ.w) + aI.x * 1.7 + aI.y * 1.3) * 0.18 * (0.5 + uWind);
        // 触れた所の揺れ
        float rt = uTime - uRustle.z;
        float rd = length(base.xz - uRustle.xy);
        bend += sin(rt * 14.0 - rd * 6.0) * exp(-rt * 2.5) * exp(-rd * 1.5) * 0.7 * step(0.0, rt) * uRustle.w;
        vec2 dir = vec2(cos(aJ.y * 6.28), sin(aJ.y * 6.28));
        // 足元を押し分ける
        vec2 pd = base.xz - uPush.xy;
        float pl = length(pd);
        float push = exp(-pl * pl / 0.08) * uPush.w;
        vec2 off = dir * bend * t * t * aI.z + normalize(pd + 1e-4) * push * t * aI.z * 1.5;
        p.xz += off; p.y *= 1.0 - push * 0.4;
        vec3 w = base + p;
        vW = w; vT = t; vShade = aJ.w;
        vN = normalize(vec3(-s, 0.4, c));
        gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
      }`,
    fragmentShader: /* glsl */`
      varying vec3 vW; varying float vT; varying float vShade; varying vec3 vN;
      void main(){
        vec3 base = mix(vec3(0.16, 0.28, 0.07), vec3(0.24, 0.38, 0.10), vShade);
        vec3 tip = mix(vec3(0.36, 0.55, 0.15), vec3(0.50, 0.64, 0.22), vShade);
        vec3 alb = mix(base, tip, vT);
        vec3 V = normalize(cameraPosition - vW);
        vec3 n = normalize(vN); if (dot(n, V) < 0.0) n = -n;
        vec3 col = shadeLambert(alb, normalize(n + vec3(0.0, 0.6, 0.0)), vW, 0.5, 0.6 + 0.4 * vT);
        // 逆光で透ける
        float back = pow(max(dot(-V, uSunDir), 0.0), 4.0);
        col += vec3(0.5, 0.75, 0.12) * uSunColor * back * vT * 0.35 * sunVis(vW);
        col = applyFog(col, vW);
        gl_FragColor = finish(col, 1.0);
      }`,
  });
  const mesh = new THREE.Mesh(igeo, mat);
  mesh.frustumCulled = false;
  G.scene.add(mesh);
  return { mesh, mat };
}

// ------------------------------------------------------------
// 周囲の家と森
// ------------------------------------------------------------
function createSurroundings(G) {
  const r = mulberry32(2024);
  const walls = [], roofs = [], trees = [];
  const roofCols = [0x4a5a6e, 0x7a3a30, 0x3e6a5a, 0x5a4e46, 0xb0563c, 0x6e7a86];
  const wallCols = [0xf4efe4, 0xe8dcc6, 0xf0e6d6, 0xdfe6e8, 0xf6e2cf];
  const addHouse = (x, z, w, d, h, rot) => {
    const g = new THREE.BoxGeometry(w, h, d); g.translate(0, h / 2, 0);
    colorize(g, wallCols[(r() * wallCols.length) | 0], 0.06, r);
    g.rotateY(rot); g.translate(x, 0, z); walls.push(g);
    const rh = Math.min(w, d) * 0.45;
    const roof = new THREE.CylinderGeometry(0.0001, Math.SQRT1_2 * 1, 1, 4, 1);
    roof.rotateY(Math.PI / 4);
    roof.scale(w * 1.12, rh, d * 1.12);
    roof.translate(0, h + rh / 2, 0);
    // 切妻風に: 寄棟 (四角錐) を少し引き伸ばす
    colorize(roof, roofCols[(r() * roofCols.length) | 0], 0.08, r);
    roof.rotateY(rot); roof.translate(x, 0, z); roofs.push(roof);
  };
  const near = [[-26, -9, 8, 7, 5.5, 0.1], [27, -7, 9, 7, 5.8, -0.05], [-24, 26, 8, 6, 5, 0.0], [5, 28, 10, 7, 5.5, 0.05], [30, 30, 7, 7, 5, 0.2], [-40, -30, 9, 8, 6, 0.1], [42, -28, 8, 8, 5.5, -0.1]];
  for (const h of near) addHouse(...h);
  for (let i = 0; i < 60; i++) {
    const a = r() * 6.28, d = 60 + r() * 260;
    const x = Math.cos(a) * d, z = Math.sin(a) * d;
    if (Math.abs(z - 15.6) < 6) continue;
    addHouse(x, z, 6 + r() * 6, 5 + r() * 5, 4 + r() * 3, (r() - 0.5) * 0.6);
  }
  const addTree = (x, z, s) => {
    const rad = (1.4 + r() * 1.4) * s;
    const g = blob(rad, 1, (d) => (vnoise(d.x * 2 + x, d.z * 2 + z, 3) - 0.5) * 0.4, 1.15);
    colorizeGradient(g, 0x2e5524, 0x6f9a40, -rad, rad);
    g.translate(x, rad * 1.1 + 1.0 * s, z);
    trees.push(g);
    const t = new THREE.CylinderGeometry(0.12 * s, 0.2 * s, 1.6 * s, 5); t.translate(x, 0.8 * s, z);
    colorize(t, 0x6a4a34); trees.push(t);
  };
  // 隣家の庭木
  for (const [x, z] of [[-30, -4], [-21, -14], [31, -1], [22, -13], [-28, 20], [12, 24], [35, 24], [-45, -20], [46, -36]]) addTree(x, z, 1.2);
  // 森の塊
  for (let i = 0; i < 26; i++) {
    const a = r() * 6.28, d = 80 + r() * 230;
    const cx = Math.cos(a) * d, cz = Math.sin(a) * d;
    for (let j = 0; j < 9; j++) addTree(cx + (r() - 0.5) * 30, cz + (r() - 0.5) * 22, 1.6 + r() * 1.2);
  }
  // 奥の雑木林 (庭の後ろ)
  for (let i = 0; i < 40; i++) addTree(-40 + r() * 80, -24 - r() * 30, 1.3 + r() * 1.0);
  const houseMesh = new THREE.Mesh(merge([...walls, ...roofs]), makeLit(G, { wrap: 0.3 }));
  const treeMesh = new THREE.Mesh(merge(trees), makeLit(G, { mode: 1, wrap: 0.5 }));
  G.scene.add(houseMesh); G.scene.add(treeMesh);
  return { houseMesh, treeMesh };
}

export function createGarden(G) {
  const ground = createGround(G);
  const plot = createPlot(G);
  const house = createHouse(G);
  const tree = createTree(G);
  const props = createProps(G);
  const grass = createGrass(G);
  const around = createSurroundings(G);
  return { ground, plot, house, tree, props, grass, around };
}
