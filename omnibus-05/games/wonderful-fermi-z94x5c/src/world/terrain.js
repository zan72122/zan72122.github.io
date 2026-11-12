// Ground: large terrain with a painted landscape (meadow, fields, roads, river, village
// yards), procedural micro detail near the camera, and wet sheen on roads/river.
import * as THREE from '../../lib/three.module.js';
import { terrainHeight, MEADOW_C, VILLAGE, LOOP_CENTER, RUN_X, JUMP_Z } from './layout.js';
import { fbm2, rng, smoothstep } from '../core/math.js';
import { GLSL_NOISE, shared, LAYER_MAIN, LAYER_REFLECT } from '../core/env.js';

export const TERRAIN = { x0: -1640, z0: -1460, size: 3000 };

const W2P = (x, z, N) => [((x - TERRAIN.x0) / TERRAIN.size) * N, ((z - TERRAIN.z0) / TERRAIN.size) * N];

export function makeRoads() {
  // polylines in world metres
  const R = [];
  // main village road (east-west, gently curving)
  R.push({ w: 6, pts: [[-520, 140], [-360, 110], [-250, 80], [-160, 58], [-90, 72], [-40, 95], [30, 130], [160, 190], [420, 230]] });
  // lane to the meadow
  R.push({ w: 4, pts: [[-160, 58], [-130, 20], [-95, -20], [-60, -48], [-30, -70], [10, -95], [60, -150], [120, -260]] });
  // north road
  R.push({ w: 5, pts: [[-150, 58], [-170, 120], [-190, 190], [-240, 300], [-320, 460]] });
  // south farm road
  R.push({ w: 4, pts: [[-250, 80], [-290, 0], [-300, -80], [-260, -170], [-200, -260], [-180, -400]] });
  return R;
}

export function makeRiver() {
  return { w: 14, pts: [[-900, -380], [-700, -300], [-520, -210], [-420, -150], [-360, -60], [-330, 40], [-360, 160], [-330, 260], [-260, 330], [-120, 380], [60, 360], [240, 420], [520, 520], [900, 600]] };
}

function smoothPath(ctx, pts, N) {
  ctx.beginPath();
  const p = pts.map(([x, z]) => W2P(x, z, N));
  ctx.moveTo(p[0][0], p[0][1]);
  for (let i = 1; i < p.length - 1; i++) {
    const mx = (p[i][0] + p[i + 1][0]) / 2, my = (p[i][1] + p[i + 1][1]) / 2;
    ctx.quadraticCurveTo(p[i][0], p[i][1], mx, my);
  }
  ctx.lineTo(p[p.length - 1][0], p[p.length - 1][1]);
}

export function paintTerrain(N = 2048) {
  const c = document.createElement('canvas');
  c.width = c.height = N;
  const g = c.getContext('2d');
  const r = rng(5);
  const mpp = TERRAIN.size / N; // metres per pixel
  const px = (m) => m / mpp;
  // base
  g.fillStyle = '#58803c';
  g.fillRect(0, 0, N, N);
  // large scale tint from a small noise canvas
  {
    const n = 256;
    const cc = document.createElement('canvas');
    cc.width = cc.height = n;
    const cg = cc.getContext('2d');
    const img = cg.createImageData(n, n);
    for (let j = 0; j < n; j++)
      for (let i = 0; i < n; i++) {
        const x = TERRAIN.x0 + (i / n) * TERRAIN.size, z = TERRAIN.z0 + (j / n) * TERRAIN.size;
        const a = fbm2(x / 220, z / 220, 4);
        const b = fbm2(x / 90 + 7, z / 90 - 3, 3);
        const k = (j * n + i) * 4;
        img.data[k] = 70 + a * 60 + b * 20;
        img.data[k + 1] = 115 + a * 50 + b * 25;
        img.data[k + 2] = 45 + a * 25;
        img.data[k + 3] = 255;
      }
    cg.putImageData(img, 0, 0);
    g.imageSmoothingEnabled = true;
    g.globalAlpha = 0.85;
    g.drawImage(cc, 0, 0, N, N);
    g.globalAlpha = 1;
  }
  // fields
  const fieldCols = ['#6f9c3f', '#86a94a', '#9fb257', '#c6b762', '#b9a85a', '#7f9a44', '#8c7a52', '#a07f55', '#7ba646', '#d1c57a'];
  for (let i = 0; i < 520; i++) {
    const ang = r() * Math.PI * 2;
    const rad = 70 + Math.pow(r(), 0.7) * 900;
    const x = LOOP_CENTER.x + Math.cos(ang) * rad, z = LOOP_CENTER.z + Math.sin(ang) * rad;
    const dm = Math.hypot(x - MEADOW_C.x, (z - MEADOW_C.y) * 0.8);
    if (dm < 105) continue;
    if (Math.hypot(x - VILLAGE.x, z - VILLAGE.y) < 40) continue;
    const w = 28 + r() * 70, h = 22 + r() * 60;
    const [cx, cy] = W2P(x, z, N);
    g.save();
    g.translate(cx, cy);
    g.rotate(0.35 + (r() - 0.5) * 0.5 + (r() < 0.3 ? Math.PI / 2 : 0));
    const col = fieldCols[Math.floor(r() * fieldCols.length)];
    g.fillStyle = col;
    g.fillRect(-px(w) / 2, -px(h) / 2, px(w), px(h));
    // furrows
    g.strokeStyle = r() < 0.5 ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,230,0.08)';
    g.lineWidth = 1;
    const sp = px(2.5 + r() * 2);
    for (let s = -px(w) / 2; s < px(w) / 2; s += sp) {
      g.beginPath();
      g.moveTo(s, -px(h) / 2);
      g.lineTo(s, px(h) / 2);
      g.stroke();
    }
    // hedgerow on some edges
    if (r() < 0.55) {
      g.strokeStyle = 'rgba(34,62,26,0.85)';
      g.lineWidth = px(2.2);
      g.strokeRect(-px(w) / 2, -px(h) / 2, px(w), px(h));
    }
    g.restore();
  }
  // meadow: lush blob
  {
    const [cx, cy] = W2P(MEADOW_C.x, MEADOW_C.y, N);
    const grd = g.createRadialGradient(cx, cy, px(20), cx, cy, px(115));
    grd.addColorStop(0, 'rgba(84,124,52,1)');
    grd.addColorStop(0.7, 'rgba(86,128,54,0.95)');
    grd.addColorStop(1, 'rgba(86,128,54,0)');
    g.fillStyle = grd;
    g.beginPath();
    g.ellipse(cx, cy, px(115), px(140), 0.2, 0, Math.PI * 2);
    g.fill();
  }
  // river
  const river = makeRiver();
  g.lineCap = 'round';
  g.lineJoin = 'round';
  smoothPath(g, river.pts, N);
  g.strokeStyle = '#7a8a5a';
  g.lineWidth = px(river.w + 8);
  g.stroke();
  smoothPath(g, river.pts, N);
  g.strokeStyle = '#3f6a74';
  g.lineWidth = px(river.w);
  g.stroke();
  // roads
  for (const rd of makeRoads()) {
    smoothPath(g, rd.pts, N);
    g.strokeStyle = 'rgba(120,110,90,0.9)';
    g.lineWidth = px(rd.w + 1.5);
    g.stroke();
    smoothPath(g, rd.pts, N);
    g.strokeStyle = '#cfc2a2';
    g.lineWidth = px(rd.w);
    g.stroke();
  }
  // village yards
  const [vx, vy] = W2P(VILLAGE.x, VILLAGE.y, N);
  for (let i = 0; i < 70; i++) {
    const a = r() * Math.PI * 2, d = px(8 + r() * 70);
    g.fillStyle = r() < 0.5 ? 'rgba(150,170,90,0.7)' : 'rgba(170,160,120,0.5)';
    g.fillRect(vx + Math.cos(a) * d - 4, vy + Math.sin(a) * d - 4, px(10 + r() * 12), px(8 + r() * 10));
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.flipY = false;
  tex.anisotropy = 8;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;

  // mask: R = water, G = road
  const M = 1024;
  const mc = document.createElement('canvas');
  mc.width = mc.height = M;
  const mg = mc.getContext('2d');
  mg.fillStyle = '#000';
  mg.fillRect(0, 0, M, M);
  mg.lineCap = 'round';
  mg.lineJoin = 'round';
  smoothPath(mg, river.pts, M);
  mg.strokeStyle = '#f00';
  mg.lineWidth = (river.w / TERRAIN.size) * M;
  mg.stroke();
  mg.globalCompositeOperation = 'lighter';
  for (const rd of makeRoads()) {
    smoothPath(mg, rd.pts, M);
    mg.strokeStyle = '#0f0';
    mg.lineWidth = Math.max(1, (rd.w / TERRAIN.size) * M);
    mg.stroke();
  }
  const mask = new THREE.CanvasTexture(mc);
  mask.flipY = false;
  mask.colorSpace = THREE.NoColorSpace;
  return { tex, mask };
}

export class Terrain {
  constructor() {
    const seg = 200;
    const S = TERRAIN.size;
    const pos = new Float32Array((seg + 1) * (seg + 1) * 3);
    const uv = new Float32Array((seg + 1) * (seg + 1) * 2);
    const idx = [];
    for (let j = 0; j <= seg; j++)
      for (let i = 0; i <= seg; i++) {
        // denser near the meadow: warp grid toward centre
        const u = i / seg, v = j / seg;
        const x = TERRAIN.x0 + u * S, z = TERRAIN.z0 + v * S;
        const k = j * (seg + 1) + i;
        pos[k * 3] = x;
        pos[k * 3 + 1] = terrainHeight(x, z);
        pos[k * 3 + 2] = z;
        uv[k * 2] = u;
        uv[k * 2 + 1] = v;
      }
    for (let j = 0; j < seg; j++)
      for (let i = 0; i < seg; i++) {
        const a = j * (seg + 1) + i, b = a + 1, c = a + seg + 1, d = c + 1;
        idx.push(a, c, b, b, c, d);
      }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    const { tex, mask } = paintTerrain(2048);
    this.material = new THREE.MeshLambertMaterial({ map: tex });
    const uniforms = {
      uMask: { value: mask },
      uSkyZenith: shared.uSkyZenith,
      uSkyHorizon: shared.uSkyHorizon,
      uSunDir: shared.uSunDir,
      uWet: shared.uWet,
    };
    this.material.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, uniforms);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
        .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>
varying vec3 vWPos;
uniform sampler2D uMask;
uniform vec3 uSkyZenith, uSkyHorizon, uSunDir;
uniform float uWet;
${GLSL_NOISE}`
        )
        .replace(
          '#include <map_fragment>',
          `#include <map_fragment>
{
  float dist = length(vWPos - cameraPosition);
  float near = 1.0 - smoothstep(30.0, 140.0, dist);
  float n1 = fbm2(vWPos.xz * 0.35);
  float n2 = vnoise2(vWPos.xz * 2.7);
  float n3 = vnoise2(vWPos.xz * 11.0);
  vec3 c = diffuseColor.rgb;
  c *= mix(1.0, 0.82 + 0.36 * n1, 0.8);
  c *= mix(1.0, 0.85 + 0.3 * n2 * n3 + 0.1 * n3, near);
  diffuseColor.rgb = c;
}`
        )
        .replace(
          '#include <opaque_fragment>',
          `{
  vec4 mk = texture2D(uMask, vMapUv);
  vec3 V = normalize(cameraPosition - vWPos);
  float fres = 0.04 + 0.96 * pow(1.0 - max(V.y, 0.0), 5.0);
  vec3 R = reflect(-V, vec3(0.0, 1.0, 0.0));
  vec3 sky = mix(uSkyHorizon, uSkyZenith, pow(max(R.y, 0.0), 0.5));
  float spec = pow(max(dot(R, uSunDir), 0.0), 200.0) * 6.0;
  float water = mk.r;
  float road = mk.g * uWet * 0.55;
  outgoingLight = mix(outgoingLight, sky * 1.05 + spec, clamp(water * (0.35 + 0.65 * fres), 0.0, 1.0));
  outgoingLight = mix(outgoingLight, sky * 0.9 + spec * 0.5, road * fres);
}
#include <opaque_fragment>`
        );
    };
    this.mesh = new THREE.Mesh(g, this.material);
    this.mesh.receiveShadow = true;
    this.mesh.name = 'terrain';
    this.mesh.layers.enable(LAYER_REFLECT);
  }
}
