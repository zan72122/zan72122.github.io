// The receipt: one continuous strip of thermal paper laid along a path that leaves the
// printer, spills over the counter, and runs through the aisles. The shader prints every
// item the child scanned (icon + price) and a music-box strip of the notes they played.
import * as THREE from 'three';
import { PRINTER, COUNTER_TOP, MAIN_AISLE_Z, BACK_AISLE_Z } from './layout.js';
import { drawIcon, ICON_NAMES } from './icons.js';
import { makeCanvas } from './textures.js';

const WIDTH = 0.15;
// the print is laid out for a 10cm roll and scaled up with the paper
const K = 0.15 / 0.1;
const HEADER = 0.3 * K;
const FOOTER = 0.5 * K;

// ---- path ----
function buildPath() {
  const pts = [];
  const nrm = [];
  const x = PRINTER.x;
  const z = PRINTER.z - 0.05;
  const y = COUNTER_TOP + 0.14;
  // out of the slot, up and over the far edge, down to the floor
  const arc = [
    [x, y, z, 0, 0, 1],
    [x, y + 0.05, z - 0.02, 0, 0.5, 0.8],
    [x, y + 0.075, z - 0.07, 0, 1, 0.1],
    [x, y + 0.05, z - 0.12, 0, 0.6, -0.8],
    [x, y - 0.05, z - 0.15, 0, 0.1, -1],
    [x, COUNTER_TOP - 0.1, z - 0.16, 0, 0, -1],
    [x, 0.5, z - 0.17, 0, 0, -1],
    [x, 0.12, z - 0.2, 0, 0.3, -1],
    [x, 0.02, z - 0.3, 0, 0.85, -0.5],
    [x, 0.009, z - 0.48, 0, 1, 0],
  ];
  for (const a of arc) {
    pts.push(new THREE.Vector3(a[0], a[1], a[2]));
    nrm.push(new THREE.Vector3(a[3], a[4], a[5]).normalize());
  }
  // the floor journey: corners are rounded later by Catmull-Rom
  const F = 0.009;
  const floorPts = [
    [x - 0.1, -1.6],
    [x - 0.5, -2.4],
    [-1.0, MAIN_AISLE_Z - 0.3],
    [-1.4, -4.6],
    [-1.3, -7],
    [-1.5, -10],
    [-1.35, -13],
    [-1.4, -15.0],
    [-2.8, BACK_AISLE_Z],
    [-4.2, -15.0],
    [-4.3, -12],
    [-4.1, -9],
    [-4.25, -6],
    [-4.2, -4.4],
    [-3.0, MAIN_AISLE_Z + 0.1],
    [-0.4, MAIN_AISLE_Z - 0.2],
    [1.4, -4.6],
    [1.5, -7],
    [1.3, -10],
    [1.45, -13],
    [1.4, -15.0],
    [2.8, BACK_AISLE_Z],
    [4.2, -15.0],
    [4.1, -12],
    [4.3, -9],
    [4.2, -6],
    [4.2, -4.4],
    [3.0, MAIN_AISLE_Z + 0.2],
    [1.9, MAIN_AISLE_Z + 0.9],
  ];
  const floorCurve = new THREE.CatmullRomCurve3(
    [new THREE.Vector3(x, F, z - 0.48), ...floorPts.map(([px, pz]) => new THREE.Vector3(px, F, pz))],
    false,
    'centripetal',
    0.5,
  );
  const L = floorCurve.getLength();
  const n = Math.ceil(L / 0.05);
  for (let i = 1; i <= n; i++) {
    const p = floorCurve.getPointAt(i / n);
    pts.push(p);
    nrm.push(new THREE.Vector3(0, 1, 0));
  }
  // densify the arc part
  const out = [];
  const outN = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i];
    const b = pts[i + 1];
    const d = a.distanceTo(b);
    const steps = Math.max(1, Math.ceil(d / 0.02));
    for (let k = 0; k < steps; k++) {
      const t = k / steps;
      out.push(new THREE.Vector3().lerpVectors(a, b, t));
      outN.push(new THREE.Vector3().lerpVectors(nrm[i], nrm[i + 1], t).normalize());
    }
  }
  out.push(pts[pts.length - 1]);
  outN.push(nrm[nrm.length - 1]);
  // smooth the arc portion a little
  for (let it = 0; it < 3; it++) {
    for (let i = 1; i < 60 && i < out.length - 1; i++) out[i].lerp(new THREE.Vector3().addVectors(out[i - 1], out[i + 1]).multiplyScalar(0.5), 0.5);
  }
  return { pts: out, nrm: outN };
}

// ---- icon atlas for the print ----
function iconAtlas() {
  const n = ICON_NAMES.length;
  const cols = 8;
  const rows = Math.ceil(n / cols);
  const S = 96;
  const c = makeCanvas(cols * S, rows * S);
  const g = c.getContext('2d');
  g.fillStyle = '#fff';
  g.fillRect(0, 0, c.width, c.height);
  ICON_NAMES.forEach((name, i) => drawIcon(g, name, (i % cols) * S + 6, Math.floor(i / cols) * S + 6, S - 12));
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  t.flipY = false;
  return { tex: t, cols, rows };
}

const VERT = /* glsl */ `
attribute float aS;
attribute float aAcross;
uniform float uLen;
uniform float uTime;
uniform float uFlutter;
varying float vS;
varying float vAcross;
varying vec3 vN;
varying vec3 vW;
void main() {
  vS = aS;
  vAcross = aAcross;
  vec3 p = position;
  float c = uLen - aS; // distance from the head
  float air = 1.0;
  // ripples that travel with the paper
  float rip = sin(c * 9.0) * 0.0025 + sin(c * 23.0 + aAcross * 3.0) * 0.0012;
  // the leading edge curls up
  float curl = smoothstep(0.25, 0.0, c) * 0.06 * (0.5 + 0.5 * sin(uTime * 2.0));
  // wind/voice flutter
  float fl = sin(aS * 3.0 - uTime * 6.0 + aAcross * 2.0) * 0.012 * uFlutter;
  p += normal * (rip + curl + fl) * air;
  // bow across the width
  p += normal * (1.0 - aAcross * aAcross) * 0.004;
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vW = wp.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const FRAG = /* glsl */ `
precision highp float;
uniform float uLen;
uniform float uHeader;
uniform float uSpacing;
uniform float uCount;
uniform float uTotal;
uniform float uPaperEnd;
uniform sampler2D uItems;
uniform float uItemsW;
uniform sampler2D uIcons;
uniform vec2 uIconGrid;
uniform sampler2D uStoreLight;
uniform vec4 uStoreBounds;
uniform vec3 uNight;
uniform float uGlow;
uniform float uStamp;
varying float vS;
varying float vAcross;
varying vec3 vN;
varying vec3 vW;

float box(vec2 p, vec2 b) { vec2 d = abs(p) - b; return max(d.x, d.y); }

// seven-segment digit, p in [0,1]^2 (x right, y up)
float seg(vec2 p, int d) {
  int m = 0;
  if (d == 0) m = 119; else if (d == 1) m = 36; else if (d == 2) m = 93; else if (d == 3) m = 109; else if (d == 4) m = 46;
  else if (d == 5) m = 107; else if (d == 6) m = 123; else if (d == 7) m = 37; else if (d == 8) m = 127; else if (d == 9) m = 111;
  float on = 0.0;
  float t = 0.09;
  // bits: 1 top, 2 upper-left, 4 upper-right, 8 middle, 16 lower-left, 32 lower-right, 64 bottom
  if ((m / 1) % 2 == 1) on = max(on, step(box(p - vec2(0.5, 0.92), vec2(0.32, t)), 0.0));
  if ((m / 2) % 2 == 1) on = max(on, step(box(p - vec2(0.12, 0.71), vec2(t, 0.2)), 0.0));
  if ((m / 4) % 2 == 1) on = max(on, step(box(p - vec2(0.88, 0.71), vec2(t, 0.2)), 0.0));
  if ((m / 8) % 2 == 1) on = max(on, step(box(p - vec2(0.5, 0.5), vec2(0.32, t)), 0.0));
  if ((m / 16) % 2 == 1) on = max(on, step(box(p - vec2(0.12, 0.29), vec2(t, 0.2)), 0.0));
  if ((m / 32) % 2 == 1) on = max(on, step(box(p - vec2(0.88, 0.29), vec2(t, 0.2)), 0.0));
  if ((m / 64) % 2 == 1) on = max(on, step(box(p - vec2(0.5, 0.08), vec2(0.32, t)), 0.0));
  return on;
}

// print a number right-aligned inside a box; q in box coords [0,1]^2
float number(vec2 q, float value, float digits) {
  float cell = floor(q.x * digits);
  if (q.x < 0.0 || q.x >= 1.0 || q.y < 0.0 || q.y > 1.0) return 0.0;
  float place = digits - 1.0 - cell;
  float v = floor(value / pow(10.0, place) + 0.001);
  if (v < 1.0 && place > 0.0) return 0.0;
  int d = int(mod(v, 10.0));
  vec2 lp = vec2(fract(q.x * digits) * 1.25 - 0.12, q.y);
  return seg(lp, d);
}

// uv: x to the right, y downward from the icon's top edge
float iconInk(vec2 uv, float idx) {
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;
  vec2 cell = vec2(mod(idx, uIconGrid.x), floor(idx / uIconGrid.x));
  vec2 tuv = (cell + uv) / uIconGrid;
  vec3 c = texture2D(uIcons, tuv).rgb;
  float lum = dot(c, vec3(0.299, 0.587, 0.114));
  return smoothstep(0.92, 0.35, lum);
}

void main() {
  float c = uLen - vS;
  if (vS > uLen) discard;
  // x across the paper in metres (0 .. width), y along from the head
  float x = (vAcross * 0.5 + 0.5) * 0.1;
  float ink = 0.0;
  float red = 0.0;
  float W = 0.1;
  float K = ${(0.15 / 0.1).toFixed(4)};
  if (c < uHeader) {
    // header: shop mark and moon, the date, a dotted rule
    float hc = c / K;
    ink += iconInk(vec2((x - 0.012) / 0.05, (hc - 0.03) / 0.05), ${ICON_NAMES.indexOf('basket')}.0);
    ink += iconInk(vec2((x - 0.06) / 0.034, (hc - 0.04) / 0.034), ${ICON_NAMES.indexOf('star')}.0);
    vec2 dq = vec2((x - 0.012) / 0.076, (hc - 0.105) / 0.013);
    ink += number(vec2(dq.x, 1.0 - dq.y), 20261013.0, 8.0);
    ink += step(abs(hc - 0.15), 0.0012) * step(0.5, fract(x * 120.0));
    ink += step(abs(hc - 0.27), 0.0008) * step(0.5, fract(x * 60.0)) * 0.6;
  } else if (c < uHeader + uSpacing * uCount) {
    float lc = c - uHeader;
    float i = floor(lc / uSpacing);
    float fm = lc - i * uSpacing; // metres into this item block
    float f = fm / K;
    vec4 it = texture2D(uItems, vec2((i + 0.5) / uItemsW, 0.5));
    float icon = floor(it.r * 255.0 + 0.5);
    float price = floor(it.g * 255.0 + 0.5) * 256.0 + floor(it.b * 255.0 + 0.5);
    float note = floor(it.a * 255.0 + 0.5);
    // icon at the left
    vec2 iq = vec2((x - 0.004) / 0.042, (f - 0.012) / 0.042);
    ink += iconInk(iq, icon);
    // price at the right, 7-seg
    vec2 pq = vec2((x - 0.048) / 0.046, (f - 0.022) / 0.016);
    ink += number(vec2(pq.x, 1.0 - pq.y), price, 4.0);
    // dotted leader
    ink += step(abs(f - 0.05), 0.0012) * step(0.6, fract(x * 160.0)) * step(0.045, x);
    // music box strip: this item's note as a dot on a faint line
    float lane = (note / 32.0);
    vec2 nd = vec2(x - (0.006 + lane * (W - 0.012)), f - 0.065);
    ink += smoothstep(0.0042, 0.0034, length(nd));
    ink += step(abs(f - 0.065), 0.0005) * 0.25;
    // separators
    ink += step(abs(fm - uSpacing + 0.004), 0.0008) * step(0.5, fract(x * 60.0)) * 0.6;
    // faint music-box staff running the whole length of the list
    ink += 0.1 * step(abs(fract(x / 0.02 + 0.5) - 0.5), 0.025) * step(0.012, x) * step(x, 0.088);
  } else {
    float fcm = c - uHeader - uSpacing * uCount;
    // the footer is laid out from the cut end, turned to read upright where it hangs over the counter
    float fc = ${(0.5).toFixed(2)} - fcm / K;
    x = W - x;
    // TOTAL: a thick rule, the big star, the big number, the stamp
    ink += step(abs(fc - 0.04), 0.002) + step(abs(fc - 0.05), 0.001);
    vec2 sq = vec2((x - 0.004) / 0.05, (fc - 0.08) / 0.05);
    ink += iconInk(sq, ${ICON_NAMES.indexOf('star')}.0);
    vec2 tq = vec2((x - 0.003) / 0.094, (fc - 0.16) / 0.03);
    ink += number(vec2(tq.x, 1.0 - tq.y), uTotal, 7.0);
    // the stamp: a red ring with a smiling face
    vec2 sp = vec2(x - W * 0.5, fc - 0.36);
    float r = length(sp);
    red += smoothstep(0.034, 0.032, r) * smoothstep(0.026, 0.028, r);
    red += smoothstep(0.004, 0.003, length(sp - vec2(-0.009, -0.006))) + smoothstep(0.004, 0.003, length(sp - vec2(0.009, -0.006)));
    red += smoothstep(0.0025, 0.0015, abs(length(sp - vec2(0.0, -0.004)) - 0.013)) * step(0.002, sp.y);
    // the cut: zigzag end
    float zz = abs(fract(x * 80.0) - 0.5) * 0.006;
    if (fcm > uPaperEnd - uHeader - uSpacing * uCount - zz) discard;
  }
  ink = clamp(ink, 0.0, 1.0);
  red = clamp(red, 0.0, 1.0) * uStamp;
  vec3 paper = vec3(0.985, 0.972, 0.94);
  // edge shading and slight curl darkening
  float edge = smoothstep(1.0, 0.82, abs(vAcross));
  paper *= mix(0.88, 1.0, edge);
  vec3 col = mix(paper, vec3(0.16, 0.16, 0.22), ink * 0.92);
  col = mix(col, vec3(0.85, 0.18, 0.15), red * 0.85);
  // light: simple wrap diffuse + the store light map
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;
  float dif = 0.6 + 0.4 * max(0.0, dot(N, normalize(vec3(0.2, 1.0, 0.3))));
  vec2 luv = (vW.xz - uStoreBounds.xy) * uStoreBounds.zw;
  vec3 L = uNight + texture2D(uStoreLight, luv).rgb * 1.3;
  col *= dif * L;
  col += vec3(1.0, 0.98, 0.9) * uGlow * 0.25;
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

export class Receipt {
  constructor(scene, lights) {
    this.scene = scene;
    this.lights = lights;
    const { pts, nrm } = buildPath();
    this.pts = pts;
    this.nrm = nrm;
    // arc lengths
    const s = new Float32Array(pts.length);
    for (let i = 1; i < pts.length; i++) s[i] = s[i - 1] + pts[i].distanceTo(pts[i - 1]);
    this.s = s;
    this.pathLen = s[pts.length - 1];
    // tangents & width vectors
    const tan = pts.map((p, i) => {
      const a = pts[Math.max(0, i - 1)];
      const b = pts[Math.min(pts.length - 1, i + 1)];
      return new THREE.Vector3().subVectors(b, a).normalize();
    });
    this.tan = tan;
    const across = [-1, -0.3, 0.3, 1];
    const nA = across.length;
    const pos = new Float32Array(pts.length * nA * 3);
    const nor = new Float32Array(pts.length * nA * 3);
    const aS = new Float32Array(pts.length * nA);
    const aA = new Float32Array(pts.length * nA);
    const wv = new THREE.Vector3();
    for (let i = 0; i < pts.length; i++) {
      const N = nrm[i];
      wv.crossVectors(tan[i], N).normalize();
      const Nn = new THREE.Vector3().crossVectors(wv, tan[i]).normalize();
      for (let k = 0; k < nA; k++) {
        const o = (i * nA + k) * 3;
        const off = across[k] * WIDTH * 0.5;
        pos[o] = pts[i].x + wv.x * off;
        pos[o + 1] = pts[i].y + wv.y * off;
        pos[o + 2] = pts[i].z + wv.z * off;
        nor[o] = Nn.x;
        nor[o + 1] = Nn.y;
        nor[o + 2] = Nn.z;
        aS[i * nA + k] = s[i];
        aA[i * nA + k] = across[k];
      }
    }
    const idx = [];
    for (let i = 0; i < pts.length - 1; i++) {
      for (let k = 0; k < nA - 1; k++) {
        const a = i * nA + k;
        const b = a + 1;
        const c = a + nA;
        const d = c + 1;
        idx.push(a, c, b, b, c, d);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setAttribute('aS', new THREE.BufferAttribute(aS, 1));
    geo.setAttribute('aAcross', new THREE.BufferAttribute(aA, 1));
    geo.setIndex(idx);
    geo.computeBoundingSphere();

    this.maxItems = 256;
    this.itemData = new Uint8Array(this.maxItems * 4);
    this.itemTex = new THREE.DataTexture(this.itemData, this.maxItems, 1, THREE.RGBAFormat);
    this.itemTex.needsUpdate = true;
    const atlas = iconAtlas();
    this.uniforms = {
      uLen: { value: 0 },
      uTime: { value: 0 },
      uFlutter: { value: 0 },
      uHeader: { value: HEADER },
      uSpacing: { value: 0.3 },
      uCount: { value: 0 },
      uTotal: { value: 0 },
      uPaperEnd: { value: 1e9 },
      uItems: { value: this.itemTex },
      uItemsW: { value: this.maxItems },
      uIcons: { value: atlas.tex },
      uIconGrid: { value: new THREE.Vector2(atlas.cols, atlas.rows) },
      uStoreLight: lights.uniforms.uStoreLight,
      uStoreBounds: lights.uniforms.uStoreBounds,
      uNight: lights.uniforms.uNight,
      uGlow: { value: 0 },
      uStamp: { value: 0 },
    };
    this.mat = new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: VERT, fragmentShader: FRAG, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
    this.mesh.renderOrder = 2;
    scene.add(this.mesh);
    // a soft shadow under the strip so it reads on any floor
    const sgeo = geo.clone();
    // widen the shadow strip
    const sp = sgeo.attributes.position;
    for (let i = 0; i < pts.length; i++) {
      for (let k = 0; k < nA; k++) {
        const o = i * nA + k;
        const c = pts[i];
        sp.setXYZ(o, c.x + (sp.getX(o) - c.x) * 1.9 + 0.012, Math.min(sp.getY(o), 0.006), c.z + (sp.getZ(o) - c.z) * 1.9 + 0.012);
      }
    }
    this.shadow = new THREE.Mesh(sgeo, new THREE.ShaderMaterial({
      uniforms: { uLen: this.uniforms.uLen },
      vertexShader: /* glsl */ `
        attribute float aS; attribute float aAcross; varying float vS; varying float vA; varying float vY;
        void main(){ vS = aS; vA = aAcross; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: /* glsl */ `
        uniform float uLen; varying float vS; varying float vA; varying float vY;
        void main(){ if (vS > uLen - 0.05) discard; float a = (1.0 - vA * vA); gl_FragColor = vec4(0.05, 0.03, 0.02, a * 0.42); }`,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    }));
    this.shadow.frustumCulled = false;
    this.shadow.visible = false;
    this.shadow.renderOrder = 1;
    scene.add(this.shadow);

    this.len = 0;
    this.feed = 0;
    this.items = [];
    this.total = 0;
    this.paperLen = 0;
    this.printedIdx = -1;
    this.state = 'idle';
    this.onLine = null; // (i, item) printed
    this.onTotal = null;
    this.onCut = null;
    this.onHead = null; // (s) head moved
    this.time = 0;
  }

  // items: [{icon, price, note}]
  setItems(items, total) {
    this.items = items.slice(0, this.maxItems);
    this.total = total;
    for (let i = 0; i < this.items.length; i++) {
      const it = this.items[i];
      const ii = Math.max(0, ICON_NAMES.indexOf(it.icon));
      this.itemData[i * 4] = ii;
      this.itemData[i * 4 + 1] = Math.floor(it.price / 256) & 255;
      this.itemData[i * 4 + 2] = it.price % 256;
      this.itemData[i * 4 + 3] = (it.note ?? 0) % 32;
    }
    this.itemTex.needsUpdate = true;
    const n = Math.max(1, this.items.length);
    // spread the items so the strip reaches the end of the route
    const usable = this.pathLen - HEADER - FOOTER - 0.5;
    const sp = Math.max(0.2, Math.min(0.9, usable / n));
    this.uniforms.uSpacing.value = sp;
    this.uniforms.uCount.value = this.items.length;
    this.uniforms.uTotal.value = total;
    this.paperLen = HEADER + sp * this.items.length + FOOTER;
    this.uniforms.uPaperEnd.value = this.paperLen;
  }

  start() {
    this.mesh.visible = true;
    this.shadow.visible = true;
    this.uniforms.uGlow.value = 0.35;
    this.state = 'printing';
    this.len = 0.001;
    this.feed = 0.25;
  }

  pull(amount) {
    if (this.state !== 'printing') return;
    this.feed = Math.min(6, this.feed + amount);
  }

  // position & tangent along the path at arc length s
  at(sv, outP = new THREE.Vector3(), outT = new THREE.Vector3()) {
    const s = this.s;
    let lo = 0;
    let hi = s.length - 1;
    sv = Math.max(0, Math.min(this.pathLen, sv));
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (s[mid] < sv) lo = mid;
      else hi = mid;
    }
    const t = (sv - s[lo]) / Math.max(1e-6, s[hi] - s[lo]);
    outP.lerpVectors(this.pts[lo], this.pts[hi], t);
    outT.lerpVectors(this.tan[lo], this.tan[hi], t).normalize();
    return outP;
  }

  get head() {
    return this.len;
  }

  update(dt, minCrawl = 0.12) {
    this.time += dt;
    this.uniforms.uTime.value = this.time;
    if (this.state !== 'printing') return;
    const before = this.len;
    this.feed = Math.max(minCrawl, this.feed * Math.exp(-0.9 * dt));
    this.len = Math.min(this.paperLen, this.len + this.feed * dt);
    this.uniforms.uLen.value = this.len;
    // which lines just came out of the printer?
    const sp = this.uniforms.uSpacing.value;
    const n = this.items.length;
    const printed = Math.floor((this.len - HEADER) / sp);
    while (this.printedIdx < Math.min(n - 1, printed)) {
      this.printedIdx++;
      if (this.onLine) this.onLine(this.printedIdx, this.items[this.printedIdx]);
    }
    if (before < HEADER + sp * n + 0.1 && this.len >= HEADER + sp * n + 0.1 && this.onTotal) this.onTotal();
    if (this.onHead) this.onHead(this.len, before);
    if (this.len >= this.paperLen - 1e-4) {
      this.state = 'done';
      if (this.onCut) this.onCut();
    }
  }
}

