import * as THREE from 'three';
import { mergeGeometries } from '../vendor/addons/BufferGeometryUtils.js';
import { mulberry32, fbm, vnoise, clamp, smoothstep } from './util.js';
import { GLSL_NOISE } from './util.js';
import { SUN_DIR } from './atmosphere.js';
import {
  PARK_R, PLAZA_R, RING_PATH_R, PATH_HALF, RADIAL_PATHS, ROAD_IN, ROAD_OUT,
  PARK_BUILDINGS, addCircle, addBox, insideBox, boxes,
} from './layout.js';

// ---------------------------------------------------------------------------
// geometry helpers
// ---------------------------------------------------------------------------
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();

function prep(geo, color, aoFloor = 0) {
  if (!geo.index) {
    const n = geo.attributes.position.count;
    const idx = new Uint32Array(n);
    for (let i = 0; i < n; i++) idx[i] = i;
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
  }
  geo.deleteAttribute('uv');
  geo.deleteAttribute('uv1');
  const pos = geo.attributes.position;
  const col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    let k = 1;
    if (aoFloor > 0) k = 0.62 + 0.38 * smoothstep(aoFloor - 0.02, aoFloor + 1.4, pos.getY(i));
    col[i * 3] = color[0] * k;
    col[i * 3 + 1] = color[1] * k;
    col[i * 3 + 2] = color[2] * k;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geo;
}

function place(geo, x, y, z, ry = 0, rx = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  _e.set(rx, ry, rz, 'YXZ');
  _q.setFromEuler(_e);
  _m.compose(_p.set(x, y, z), _q, _s.set(sx, sy, sz));
  geo.applyMatrix4(_m);
  return geo;
}

function box(w, h, d, segH = 1) {
  return new THREE.BoxGeometry(w, h, d, 1, segH, 1);
}

// transform a local offset of a rotated object into world
function rot2(x, z, c, s) {
  return [x * c + z * s, -x * s + z * c];
}

class Buckets {
  constructor() { this.map = new Map(); }
  add(name, geo) {
    if (!this.map.has(name)) this.map.set(name, []);
    this.map.get(name).push(geo);
  }
  merged(name) {
    const list = this.map.get(name);
    if (!list || !list.length) return null;
    return mergeGeometries(list, false);
  }
}

// ---------------------------------------------------------------------------
// Ground shader (wet asphalt plaza, paths, lawn, puddles, outer road)
// ---------------------------------------------------------------------------
function groundMaterial(env) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0, envMap: env, envMapIntensity: 1.0 });
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vGW;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvGW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    const radial = RADIAL_PATHS.map((a) => `vec2(${Math.cos(a).toFixed(5)}, ${Math.sin(a).toFixed(5)})`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec3 vGW;
${GLSL_NOISE}
float gRough; float gBumpH; float gWet;
vec3 gPerturb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection) {
  vec3 vSigmaX = normalize(dFdx(surf_pos.xyz));
  vec3 vSigmaY = normalize(dFdy(surf_pos.xyz));
  vec3 vN = surf_norm;
  vec3 R1 = cross(vSigmaY, vN);
  vec3 R2 = cross(vN, vSigmaX);
  float fDet = dot(vSigmaX, R1) * faceDirection;
  vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
  return normalize(abs(fDet) * surf_norm - vGrad);
}
float pathMask(vec2 p) {
  float r = length(p);
  float m = 1.0 - smoothstep(${PLAZA_R.toFixed(2)} - 0.05, ${PLAZA_R.toFixed(2)} + 0.05, r);
  m = max(m, 1.0 - smoothstep(${PATH_HALF.toFixed(2)} - 0.05, ${PATH_HALF.toFixed(2)} + 0.05, abs(r - ${RING_PATH_R.toFixed(2)})));
  vec2 dirs[3] = vec2[3](${radial.join(',')});
  for (int i = 0; i < 3; i++) {
    float along = dot(p, dirs[i]);
    float perp = abs(dirs[i].x * p.y - dirs[i].y * p.x);
    float inside = step(0.0, along) * (1.0 - smoothstep(${PATH_HALF.toFixed(2)} - 0.05, ${PATH_HALF.toFixed(2)} + 0.05, perp));
    inside *= 1.0 - smoothstep(${(RING_PATH_R + 60).toFixed(1)}, ${(RING_PATH_R + 61).toFixed(1)}, along);
    m = max(m, inside);
  }
  float road = smoothstep(${ROAD_IN.toFixed(2)} - 0.05, ${ROAD_IN.toFixed(2)} + 0.05, r) * (1.0 - smoothstep(${ROAD_OUT.toFixed(2)} - 0.05, ${ROAD_OUT.toFixed(2)} + 0.05, r));
  return max(m, road);
}`)
      .replace('#include <map_fragment>', `
{
  vec2 p = vGW.xz;
  float r = length(p);
  float camD = length(vGW - cameraPosition);
  float detail = 1.0 - smoothstep(12.0, 60.0, camD);
  float asphalt = pathMask(p);
  float sidewalk = smoothstep(${ROAD_OUT.toFixed(2)}, ${(ROAD_OUT + 0.1).toFixed(2)}, r) * (1.0 - smoothstep(${(ROAD_OUT + 3).toFixed(2)}, ${(ROAD_OUT + 3.1).toFixed(2)}, r));
  float curbLine = (1.0 - smoothstep(0.0, 0.18, abs(r - ${PLAZA_R.toFixed(2)}))) ;
  // asphalt
  float grain = (vnoise(p * 48.0) * 0.6 + vnoise(p * 97.0 + 3.0) * 0.4) * detail;
  float agg = smoothstep(0.72, 0.9, vnoise(p * 21.0 + 7.0)) * detail;
  float big = fbm3(p * 0.35);
  vec3 asp = vec3(0.072, 0.072, 0.074) * (0.82 + 0.3 * big + 0.22 * grain) + agg * 0.02;
  // puddles collect in low spots
  float pud = fbm3(p * 0.16 + vec2(3.1, 7.7));
  pud = smoothstep(0.58, 0.64, pud + 0.05 * vnoise(p * 3.0));
  gWet = mix(0.6, 1.0, pud);
  asp *= mix(0.72, 0.45, pud);
  // lawn
  float gn = fbm3(p * 0.6);
  float gn2 = vnoise(p * 7.0);
  vec3 grass = mix(vec3(0.075, 0.125, 0.035), vec3(0.13, 0.17, 0.05), gn);
  grass = mix(grass, vec3(0.16, 0.15, 0.07), smoothstep(0.65, 0.9, fbm3(p * 0.13 + 11.0)) * 0.6);
  grass *= 0.8 + 0.4 * gn2 * (0.3 + 0.7 * detail);
  // pale concrete sidewalk tiles
  vec2 tile = fract(p * 0.8);
  float joint = (1.0 - smoothstep(0.0, 0.03, min(min(tile.x, 1.0 - tile.x), min(tile.y, 1.0 - tile.y))));
  vec3 conc = vec3(0.34, 0.33, 0.31) * (0.9 + 0.2 * big) * (1.0 - 0.4 * joint);
  vec3 alb = mix(grass, asp, asphalt);
  alb = mix(alb, conc * 0.7, sidewalk);
  alb = mix(alb, vec3(0.3, 0.3, 0.29), curbLine * 0.9);
  // beyond the town edge: fields fade in
  alb = mix(alb, vec3(0.1, 0.13, 0.05), smoothstep(110.0, 145.0, r));
  diffuseColor.rgb = alb;
  gRough = mix(0.82, mix(0.3, 0.04, pud), asphalt);
  gRough = mix(gRough, 0.45, sidewalk);
  gRough = mix(gRough, 0.5, curbLine);
  gBumpH = (grain * 0.6 + agg) * asphalt * (1.0 - pud) * 0.004 + gn2 * (1.0 - asphalt) * 0.03 * detail;
}
`)
      .replace('#include <roughnessmap_fragment>', 'float roughnessFactor = gRough;')
      .replace('#include <normal_fragment_maps>', `
normal = gPerturb(-vViewPosition, normal, vec2(dFdx(gBumpH), dFdy(gBumpH)) * 1.0, faceDirection);
`);
  };
  return mat;
}

// ---------------------------------------------------------------------------
// Foliage: clusters of alpha-tested leaf cards. Normals are bent towards the
// canopy so light wraps the whole crown; leaves glow when backlit and sway.
// ---------------------------------------------------------------------------
function leafTexture() {
  const S = 256;
  const cv = document.createElement('canvas');
  cv.width = cv.height = S;
  const g = cv.getContext('2d');
  const rng = mulberry32(4242);
  g.clearRect(0, 0, S, S);
  for (let i = 0; i < 360; i++) {
    // denser towards the middle of the card
    let x, y, r;
    do {
      x = rng() * 2 - 1; y = rng() * 2 - 1; r = x * x + y * y;
    } while (r > 1 || rng() > 1.15 - r);
    const px = S / 2 + x * S * 0.46, py = S / 2 + y * S * 0.46;
    const len = 12 + rng() * 13, wid = 5 + rng() * 5;
    const a = rng() * Math.PI * 2;
    const l = 0.55 + rng() * 0.45;
    const hue = rng();
    const cr = Math.round((0.32 + hue * 0.18) * 255 * l);
    const cg = Math.round((0.55 + hue * 0.12) * 255 * l);
    const cb = Math.round((0.18 + hue * 0.06) * 255 * l);
    g.save();
    g.translate(px, py);
    g.rotate(a);
    g.fillStyle = `rgb(${cr},${cg},${cb})`;
    g.beginPath();
    g.moveTo(-len / 2, 0);
    g.quadraticCurveTo(0, -wid, len / 2, 0);
    g.quadraticCurveTo(0, wid, -len / 2, 0);
    g.fill();
    g.strokeStyle = `rgba(20,40,10,0.35)`;
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(-len / 2, 0);
    g.lineTo(len / 2, 0);
    g.stroke();
    g.restore();
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function leafCardGeometry() {
  const planes = [];
  for (let i = 0; i < 3; i++) {
    const p = new THREE.PlaneGeometry(1, 1);
    p.rotateY((i / 3) * Math.PI);
    p.rotateX((i - 1) * 0.35);
    planes.push(p);
  }
  const h = new THREE.PlaneGeometry(0.9, 0.9);
  h.rotateX(-Math.PI / 2);
  planes.push(h);
  return mergeGeometries(planes, false);
}

export function foliageMaterial(uniforms, map) {
  const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff, roughness: 0.8, metalness: 0, map, alphaTest: 0.42, side: THREE.DoubleSide,
  });
  mat.alphaToCoverage = true;
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = uniforms.uTime;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
uniform float uTime;
attribute vec4 aCanopy;
attribute vec3 aTint;
varying vec3 vTint;
varying float vInner;
`)
      .replace('#include <beginnormal_vertex>', `
vec3 instW = (instanceMatrix * vec4(position, 1.0)).xyz;
vec3 cdir = normalize(instW - aCanopy.xyz + vec3(0.0, aCanopy.w * 0.3, 0.0));
vec3 objectNormal = normalize(transpose(mat3(instanceMatrix)) * cdir);
vInner = clamp(length(instW - aCanopy.xyz) / aCanopy.w, 0.0, 1.3);
vTint = aTint;
`)
      .replace('#include <project_vertex>', `
vec4 mvPosition = vec4(transformed, 1.0);
mvPosition = instanceMatrix * mvPosition;
{
  float h = max(mvPosition.y - (aCanopy.y - aCanopy.w), 0.0);
  float ph = dot(aCanopy.xz, vec2(0.13, 0.17));
  float sway = sin(uTime * 1.1 + ph) * 0.5 + sin(uTime * 2.3 + ph * 2.0 + mvPosition.y) * 0.25;
  mvPosition.x += sway * h * 0.016;
  mvPosition.z += sway * h * 0.011;
  float flutter = sin(uTime * 4.1 + dot(mvPosition.xyz, vec3(3.1, 2.3, 2.7)));
  mvPosition.xyz += vec3(0.0, flutter * 0.03, 0.0);
}
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;
`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec3 vTint;
varying float vInner;
`)
      .replace('#include <map_fragment>', `#include <map_fragment>
diffuseColor.rgb *= vTint * mix(0.45, 1.0, smoothstep(0.35, 1.05, vInner));
`)
      .replace('#include <lights_fragment_end>', `#include <lights_fragment_end>
{
  vec3 sunV = normalize((viewMatrix * vec4(${SUN_DIR.x.toFixed(4)}, ${SUN_DIR.y.toFixed(4)}, ${SUN_DIR.z.toFixed(4)}, 0.0)).xyz);
  vec3 vdir = normalize(-vViewPosition);
  float back = pow(max(dot(vdir, sunV), 0.0), 3.0);
  reflectedLight.indirectDiffuse += diffuseColor.rgb * vec3(1.0, 0.95, 0.55) * back * 1.3 * smoothstep(0.55, 1.1, vInner);
}
`);
  };
  return mat;
}

// ---------------------------------------------------------------------------
export class World {
  constructor(scene, atmosphere, quality) {
    this.scene = scene;
    this.env = atmosphere.envMap;
    this.uniforms = { uTime: { value: 0 } };
    this.rng = mulberry32(20240923);
    this.whiteWalls = []; // positions of pale walls (for bounce light hints)
    this.treeSpots = [];  // {x, z, top, r} for birds & leaves
    this.buildGround();
    this.buildBuildings();
    this.buildTrees(quality);
    this.buildProps();
    this.buildOuterTown();
    this.buildTerrain();
    this.buildWindmill();
    this.buildContactShadows();
  }

  buildGround() {
    const g = new THREE.CircleGeometry(152, 128);
    g.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(g, groundMaterial(this.env));
    mesh.receiveShadow = true;
    mesh.name = 'ground';
    this.scene.add(mesh);
    this.ground = mesh;

    // Plaza curb + hedge ring around the park.
    const b = new Buckets();
    const n = 72;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const len = (2 * Math.PI * PLAZA_R) / n + 0.02;
      const geo = prep(box(len, 0.1, 0.2), [0.42, 0.41, 0.39]);
      place(geo, Math.cos(a) * PLAZA_R, 0.05, Math.sin(a) * PLAZA_R, -a + Math.PI / 2);
      // skip curb where radial paths leave the plaza
      if (RADIAL_PATHS.some((pa) => Math.abs(Math.atan2(Math.sin(a - pa), Math.cos(a - pa))) < 0.1)) continue;
      b.add('curb', geo);
    }
    const hedgeN = 120;
    const hedgeR = PARK_R + 1.6;
    for (let i = 0; i < hedgeN; i++) {
      const a = (i / hedgeN) * Math.PI * 2;
      if (RADIAL_PATHS.some((pa) => Math.abs(Math.atan2(Math.sin(a - pa), Math.cos(a - pa))) < 0.035)) continue;
      const len = (2 * Math.PI * hedgeR) / hedgeN + 0.1;
      const hh = 0.95 + this.rng() * 0.15;
      const geo = prep(box(len, hh, 1.0, 2), [0.08 + this.rng() * 0.02, 0.15 + this.rng() * 0.03, 0.05], 0.2);
      place(geo, Math.cos(a) * hedgeR, hh / 2, Math.sin(a) * hedgeR, -a + Math.PI / 2);
      b.add('hedge', geo);
    }
    const curb = new THREE.Mesh(b.merged('curb'), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7 }));
    curb.receiveShadow = true;
    this.scene.add(curb);
    const hedgeMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 });
    hedgeMat.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vHW;')
        .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvHW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\nvarying vec3 vHW;\n${GLSL_NOISE}`)
        .replace('#include <map_fragment>', `diffuseColor.rgb *= 0.55 + 0.9 * (vnoise(vHW.xz * 6.0 + vHW.y * 5.0) * 0.6 + vnoise(vHW.xy * 13.0 + vHW.zy * 9.0) * 0.4);`);
    };
    const hedge = new THREE.Mesh(b.merged('hedge'), hedgeMat);
    hedge.castShadow = true;
    hedge.receiveShadow = true;
    this.scene.add(hedge);
  }

  building(b, def, detail = 1) {
    const { x, z, w, d, h, rot } = def;
    const c = Math.cos(rot), s = Math.sin(rot);
    const wall = def.wall;
    const W = (geo, lx, ly, lz, extraRot = 0) => {
      const [wx, wz] = rot2(lx, lz, c, s);
      return place(geo, x + wx, ly, z + wz, rot + extraRot);
    };
    // walls
    b.add('wall', W(prep(box(w, h, d, 4), wall, 0.01), 0, h / 2, 0));
    // base plinth
    b.add('trim', W(prep(box(w + 0.08, 0.35, d + 0.08), [0.5, 0.49, 0.46]), 0, 0.175, 0));
    if (def.roof === 'flat') {
      b.add('roof', W(prep(box(w + 0.3, 0.18, d + 0.3), [0.55, 0.54, 0.52]), 0, h + 0.09, 0));
      b.add('trim', W(prep(box(w + 0.34, 0.06, d + 0.34), [0.75, 0.75, 0.73]), 0, h + 0.2, 0));
    } else {
      const rh = d * 0.42;
      const ov = 0.35;
      const geo = new THREE.BufferGeometry();
      const hw = w / 2 + ov, hd = d / 2 + ov;
      const pts = [
        // two slopes
        -hw, h - 0.05, hd, hw, h - 0.05, hd, hw, h + rh, 0,
        -hw, h - 0.05, hd, hw, h + rh, 0, -hw, h + rh, 0,
        hw, h - 0.05, -hd, -hw, h - 0.05, -hd, -hw, h + rh, 0,
        hw, h - 0.05, -hd, -hw, h + rh, 0, hw, h + rh, 0,
      ];
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
      geo.computeVertexNormals();
      b.add('roofTile', W(prep(geo, def.roofColor || [0.22, 0.12, 0.09]), 0, 0, 0));
      const gab = new THREE.BufferGeometry();
      const gw = w / 2, gd = d / 2;
      gab.setAttribute('position', new THREE.Float32BufferAttribute([
        -gw, h, -gd, -gw, h, gd, -gw, h + rh * (gd / hd) * 1.0, 0,
        gw, h, gd, gw, h, -gd, gw, h + rh * (gd / hd) * 1.0, 0,
      ], 3));
      gab.computeVertexNormals();
      b.add('wall', W(prep(gab, wall), 0, 0, 0));
      if (detail > 0) b.add('trim', W(prep(box(0.5, 1.6, 0.5), [0.45, 0.3, 0.25]), w * 0.25, h + rh * 0.7, -d * 0.1));
    }
    // windows on the long faces, door on the front
    const floors = Math.max(1, Math.floor(h / 2.9));
    const faces = [
      { len: w, nx: 0, nz: 1, off: d / 2 },
      { len: w, nx: 0, nz: -1, off: d / 2 },
      { len: d, nx: 1, nz: 0, off: w / 2 },
      { len: d, nx: -1, nz: 0, off: w / 2 },
    ];
    faces.forEach((f, fi) => {
      const cols = Math.max(1, Math.floor((f.len - 0.8) / 2.3));
      const faceRot = Math.atan2(f.nx, f.nz);
      for (let fl = 0; fl < floors; fl++) {
        for (let ci = 0; ci < cols; ci++) {
          const t = cols === 1 ? 0 : (ci / (cols - 1) - 0.5) * (f.len - 2.2);
          const isDoor = fi === 0 && fl === 0 && ci === Math.floor(cols / 2);
          const wy = isDoor ? 1.05 : fl * 2.9 + 1.55;
          const ww = isDoor ? 1.0 : 1.05, wh = isDoor ? 2.1 : 1.25;
          // local position on face (perp axis t)
          const lx = f.nz !== 0 ? t : f.nx * (f.off + 0.02);
          const lz = f.nz !== 0 ? f.nz * (f.off + 0.02) : t;
          const frame = prep(box(ww + 0.16, wh + 0.16, 0.06), [0.93, 0.93, 0.9]);
          b.add('trim', W(frame, lx, wy, lz, faceRot));
          const lx2 = f.nz !== 0 ? t : f.nx * (f.off + 0.045);
          const lz2 = f.nz !== 0 ? f.nz * (f.off + 0.045) : t;
          if (isDoor) {
            b.add('door', W(prep(box(ww, wh, 0.05), [0.28, 0.2, 0.13]), lx2, wy, lz2, faceRot));
          } else {
            b.add('glass', W(prep(box(ww, wh, 0.03), [1, 1, 1]), lx2, wy, lz2, faceRot));
            const lx3 = f.nz !== 0 ? t : f.nx * (f.off + 0.08);
            const lz3 = f.nz !== 0 ? f.nz * (f.off + 0.08) : t;
            b.add('trim', W(prep(box(ww + 0.3, 0.06, 0.14), [0.8, 0.8, 0.78]), lx3, wy - wh / 2 - 0.1, lz3, faceRot));
          }
        }
      }
    });
    if (def.awning) {
      // striped canvas awning over the kiosk front
      const stripes = 7;
      const aw = w * 0.9;
      for (let i = 0; i < stripes; i++) {
        const col = i % 2 ? [0.92, 0.9, 0.84] : [0.16, 0.38, 0.3];
        const sw = aw / stripes;
        const geo = prep(box(sw, 0.03, 1.6), col);
        place(geo, 0, 0, 0, 0, -0.32);
        const lx = -aw / 2 + sw * (i + 0.5);
        b.add('canvas', W(geo, lx, 2.55, d / 2 + 0.72));
      }
    }
  }

  buildBuildings() {
    const b = new Buckets();
    for (const def of PARK_BUILDINGS) {
      this.building(b, def, 1);
      this.whiteWalls.push(new THREE.Vector3(def.x, def.h * 0.5, def.z));
    }
    this.buildingBuckets = b;
  }

  finishBuildings() {
    const b = this.buildingBuckets;
    const mats = {
      wall: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.88 }),
      trim: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6 }),
      roof: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }),
      roofTile: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55 }),
      glass: new THREE.MeshStandardMaterial({ color: new THREE.Color(0.02, 0.03, 0.04), roughness: 0.04, metalness: 0.1, envMapIntensity: 1.6 }),
      door: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6 }),
      canvas: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, side: THREE.DoubleSide }),
    };
    for (const [name, mat] of Object.entries(mats)) {
      const geo = b.merged(name);
      if (!geo) continue;
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = name !== 'glass';
      mesh.receiveShadow = true;
      this.scene.add(mesh);
    }
  }

  tree(x, z, height, near, clumps, trunks) {
    const rng = this.rng;
    const trunkH = height * (0.38 + rng() * 0.1);
    const rBot = 0.12 + height * 0.022;
    const trunk = new THREE.CylinderGeometry(rBot * 0.55, rBot, trunkH + 0.6, near ? 9 : 5, near ? 5 : 1, false);
    trunk.translate(0, (trunkH + 0.6) / 2, 0);
    const pos = trunk.attributes.position;
    const lean = [(rng() - 0.5) * 0.25, (rng() - 0.5) * 0.25];
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const t = y / trunkH;
      pos.setX(i, pos.getX(i) + lean[0] * t * t + Math.sin(y * 2.1) * 0.03);
      pos.setZ(i, pos.getZ(i) + lean[1] * t * t + Math.cos(y * 1.7) * 0.03);
    }
    trunk.computeVertexNormals();
    const bark = [0.2 + rng() * 0.04, 0.16 + rng() * 0.03, 0.12];
    trunks.add('trunk', place(prep(trunk, bark, 0.01), x, 0, z));
    if (near) {
      for (let k = 0; k < 4; k++) {
        const a = rng() * Math.PI * 2;
        const len = height * (0.22 + rng() * 0.12);
        const br = new THREE.CylinderGeometry(rBot * 0.18, rBot * 0.4, len, 5, 1);
        br.translate(0, len / 2, 0);
        place(br, x + lean[0] * 0.8, trunkH * (0.75 + rng() * 0.2), z + lean[1] * 0.8, a, 0.75 + rng() * 0.3, 0);
        trunks.add('trunk', prep(br, bark));
      }
      addCircle(x, z, rBot + 0.08);
    }
    const rx = height * (0.3 + rng() * 0.06);
    const ry = height * (0.28 + rng() * 0.05);
    const cy = trunkH + ry * 0.75;
    const n = near ? Math.round(30 + height * 3.2) : 9;
    const baseG = 0.11 + rng() * 0.05;
    const hueShift = rng();
    for (let i = 0; i < n; i++) {
      // points biased to ellipsoid surface
      let px, py, pz, l;
      do {
        px = rng() * 2 - 1; py = rng() * 2 - 1; pz = rng() * 2 - 1;
        l = px * px + py * py + pz * pz;
      } while (l > 1 || l < 0.05);
      const k = Math.pow(rng(), 0.35) / Math.sqrt(l);
      px *= k; py *= k; pz *= k;
      const size = (near ? 1.5 + rng() * 1.0 : 3.6 + rng() * 1.8) * (height / 10);
      const tint = [
        0.62 + hueShift * 0.3 + rng() * 0.1,
        0.72 + baseG + rng() * 0.12,
        0.45 + rng() * 0.15,
      ];
      clumps.push({
        x: x + px * rx, y: cy + py * ry, z: z + pz * rx,
        s: size, cx: x, cy, cz: z, cr: Math.max(rx, ry), tint,
        ry: rng() * Math.PI * 2,
      });
    }
    this.treeSpots.push({ x, z, top: cy + ry, r: rx, cy });
  }

  buildTrees(quality) {
    const rng = this.rng;
    const trunks = new Buckets();
    const clumps = [];
    const spots = [];
    const tryPlace = (x, z) => {
      const r = Math.hypot(x, z);
      if (r < PLAZA_R + 3.5 || r > PARK_R - 1.5) return false;
      if (Math.abs(r - RING_PATH_R) < 3) return false;
      for (const a of RADIAL_PATHS) {
        const along = x * Math.cos(a) + z * Math.sin(a);
        const perp = Math.abs(Math.cos(a) * z - Math.sin(a) * x);
        if (along > 0 && perp < 3.2) return false;
      }
      for (const b of boxes) if (insideBox(b, x, z, 4)) return false;
      for (const s of spots) if (Math.hypot(s[0] - x, s[1] - z) < 7.5) return false;
      // keep the first view corridor (towards -Z) open
      if (z < -8 && z > -40 && Math.abs(x) < 7) return false;
      spots.push([x, z]);
      return true;
    };
    let tries = 0;
    while (spots.length < 26 && tries++ < 2000) {
      const a = rng() * Math.PI * 2;
      const r = PLAZA_R + 4 + Math.sqrt(rng()) * (PARK_R - PLAZA_R - 6);
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (tryPlace(x, z)) this.tree(x, z, 8 + rng() * 6, true, clumps, trunks);
    }
    // one large old tree near the plaza as a landmark
    this.tree(-17.5, 7, 15.5, true, clumps, trunks);
    // far trees around the town and fields
    for (let i = 0; i < 260; i++) {
      const a = rng() * Math.PI * 2;
      const r = 70 + rng() * 230;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (r < ROAD_OUT + 4) continue;
      this.tree(x, z, 7 + rng() * 7, false, clumps, trunks);
    }

    const trunkMesh = new THREE.Mesh(trunks.merged('trunk'), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92 }));
    trunkMesh.castShadow = true;
    trunkMesh.receiveShadow = true;
    this.scene.add(trunkMesh);

    const clumpGeo = leafCardGeometry();
    const count = clumps.length;
    const canopy = new Float32Array(count * 4);
    const tint = new Float32Array(count * 3);
    const mesh = new THREE.InstancedMesh(clumpGeo, foliageMaterial(this.uniforms, leafTexture()), count);
    clumps.forEach((c, i) => {
      _e.set(this.rng() * 6.28, c.ry, this.rng() * 6.28);
      _q.setFromEuler(_e);
      _m.compose(_p.set(c.x, c.y, c.z), _q, _s.set(c.s, c.s, c.s));
      mesh.setMatrixAt(i, _m);
      canopy.set([c.cx, c.cy, c.cz, c.cr], i * 4);
      tint.set(c.tint, i * 3);
    });
    clumpGeo.setAttribute('aCanopy', new THREE.InstancedBufferAttribute(canopy, 4));
    clumpGeo.setAttribute('aTint', new THREE.InstancedBufferAttribute(tint, 3));
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.scene.add(mesh);
    this.foliage = mesh;
  }

  buildProps() {
    const b = new Buckets();
    const rng = this.rng;
    const metal = [0.12, 0.15, 0.14];
    this.lamps = [];
    const lamp = (x, z, facing) => {
      b.add('metal', place(prep(new THREE.CylinderGeometry(0.055, 0.075, 4.6, 8), metal), x, 2.3, z));
      b.add('metal', place(prep(new THREE.CylinderGeometry(0.12, 0.14, 0.35, 8), metal), x, 0.175, z));
      const hx = x + Math.sin(facing) * 0.45, hz = z + Math.cos(facing) * 0.45;
      b.add('metal', place(prep(box(0.05, 0.05, 0.6), metal), x + Math.sin(facing) * 0.25, 4.55, z + Math.cos(facing) * 0.25, facing));
      b.add('metal', place(prep(new THREE.CylinderGeometry(0.1, 0.2, 0.18, 10), metal), hx, 4.5, hz));
      b.add('lampGlass', place(prep(new THREE.CylinderGeometry(0.16, 0.16, 0.06, 10), [1, 1, 1]), hx, 4.39, hz));
      addCircle(x, z, 0.12);
      this.lamps.push(new THREE.Vector3(x, 4.5, z));
    };
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + 0.2;
      const r = RING_PATH_R + PATH_HALF + 0.5;
      lamp(Math.cos(a) * r, Math.sin(a) * r, Math.atan2(-Math.cos(a), -Math.sin(a)));
    }
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + 0.9;
      const r = PLAZA_R + 0.6;
      lamp(Math.cos(a) * r, Math.sin(a) * r, Math.atan2(-Math.cos(a), -Math.sin(a)));
    }
    // outer street lamps
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2;
      const r = ROAD_OUT + 1.2;
      lamp(Math.cos(a) * r, Math.sin(a) * r, Math.atan2(-Math.cos(a), -Math.sin(a)));
    }
    // benches around the plaza facing the centre
    const wood = [0.36, 0.22, 0.13];
    const bench = (x, z, ry) => {
      const c = Math.cos(ry), s = Math.sin(ry);
      const P = (geo, lx, ly, lz, rx = 0) => {
        const [wx, wz] = rot2(lx, lz, c, s);
        return place(geo, x + wx, ly, z + wz, ry, rx);
      };
      for (let k = 0; k < 3; k++) b.add('wood', P(prep(box(1.7, 0.04, 0.11), wood), 0, 0.44, -0.14 + k * 0.14));
      for (let k = 0; k < 2; k++) b.add('wood', P(prep(box(1.7, 0.1, 0.035), wood), 0, 0.62 + k * 0.14, -0.26, -0.2));
      for (const sx of [-0.72, 0.72]) {
        b.add('metal', P(prep(box(0.05, 0.44, 0.05), metal), sx, 0.22, 0.12));
        b.add('metal', P(prep(box(0.05, 0.78, 0.05), metal), sx, 0.39, -0.24, -0.2));
        b.add('metal', P(prep(box(0.05, 0.04, 0.44), metal), sx, 0.4, -0.04));
      }
      addBox(x, z, 1.8, 0.62, ry, 0.9, false);
    };
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.55;
      if (RADIAL_PATHS.some((pa) => Math.abs(Math.atan2(Math.sin(a - pa), Math.cos(a - pa))) < 0.25)) continue;
      const r = PLAZA_R - 1.2;
      bench(Math.cos(a) * r, Math.sin(a) * r, Math.atan2(Math.cos(a), Math.sin(a)) + Math.PI);
    }
    // a red post box and a litter bin for scale
    b.add('red', place(prep(new THREE.CylinderGeometry(0.22, 0.22, 1.2, 12), [0.55, 0.05, 0.04]), 4.2, 0.6, 15.6));
    b.add('red', place(prep(new THREE.SphereGeometry(0.22, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), [0.55, 0.05, 0.04]), 4.2, 1.2, 15.6));
    addCircle(4.2, 15.6, 0.25);
    b.add('metal', place(prep(new THREE.CylinderGeometry(0.25, 0.22, 0.8, 12, 1, true), [0.2, 0.24, 0.22]), -6.5, 0.4, 14.9));
    addCircle(-6.5, 14.9, 0.27);

    const mats = {
      metal: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.45, metalness: 0.4 }),
      wood: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.7 }),
      red: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.35 }),
      lampGlass: new THREE.MeshStandardMaterial({ color: 0xfff3dc, emissive: new THREE.Color(0.25, 0.2, 0.14), roughness: 0.3 }),
    };
    for (const [name, mat] of Object.entries(mats)) {
      const geo = b.merged(name);
      if (!geo) continue;
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
    }
  }

  buildOuterTown() {
    const rng = this.rng;
    const b = this.buildingBuckets;
    const palette = [
      [0.76, 0.75, 0.72], [0.74, 0.68, 0.56], [0.66, 0.68, 0.68], [0.75, 0.7, 0.62], [0.6, 0.62, 0.6], [0.8, 0.79, 0.77],
    ];
    const roofs = [[0.2, 0.2, 0.22], [0.32, 0.14, 0.1], [0.18, 0.24, 0.3], [0.26, 0.24, 0.22]];
    let placed = 0;
    for (let i = 0; i < 400 && placed < 46; i++) {
      const a = rng() * Math.PI * 2;
      const r = 73 + rng() * 60;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      // leave the view to the windmill hill open
      const wmA = Math.atan2(-300, 70);
      if (Math.abs(Math.atan2(Math.sin(a - wmA), Math.cos(a - wmA))) < 0.12) continue;
      const w = 7 + rng() * 5, d = 6 + rng() * 3;
      const h = rng() < 0.2 ? 8.5 + rng() * 3 : 5 + rng() * 1.5;
      const rot = -a + Math.PI / 2 + (rng() - 0.5) * 0.15;
      let ok = true;
      for (const o of this.outer || []) if (Math.hypot(o[0] - x, o[1] - z) < 13) ok = false;
      if (!ok) continue;
      (this.outer ||= []).push([x, z]);
      this.building(b, {
        x, z, w, d, h, rot,
        wall: palette[Math.floor(rng() * palette.length)],
        roof: rng() < 0.8 ? 'gable' : 'flat',
        roofColor: roofs[Math.floor(rng() * roofs.length)],
      }, r < 100 ? 1 : 0);
      placed++;
    }
    this.finishBuildings();

    // distant city blocks on the horizon
    const city = new Buckets();
    for (let i = 0; i < 42; i++) {
      const a = 0.35 + rng() * 0.75;
      const r = 700 + rng() * 350;
      const w = 18 + rng() * 30, h = 20 + rng() * 70 * (rng() < 0.3 ? 2 : 1);
      const g = prep(box(w, h, w * (0.6 + rng() * 0.6)), [0.62 + rng() * 0.1, 0.64 + rng() * 0.1, 0.66 + rng() * 0.1]);
      city.add('c', place(g, Math.cos(a) * r, h / 2 - 2, -Math.sin(a) * r, rng() * 3));
    }
    const cityMesh = new THREE.Mesh(city.merged('c'), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.6 }));
    this.scene.add(cityMesh);
  }

  terrainHeight(x, z) {
    const r = Math.hypot(x, z);
    const ramp = smoothstep(150, 320, r);
    let h = (fbm(x * 0.004 + 10, z * 0.004 - 3, 4) - 0.35) * 70 * ramp;
    h += smoothstep(900, 1900, r) * (fbm(x * 0.0015, z * 0.0015, 5) * 520 - 120);
    // windmill hill
    const wx = x - 70, wz = z + 300;
    h += 26 * Math.exp(-(wx * wx + wz * wz) / (2 * 55 * 55)) * ramp;
    return Math.max(h, -2) - (1 - smoothstep(146, 156, r)) * 0.6;
  }

  buildTerrain() {
    const rings = 70, segs = 160;
    const pos = [], col = [], idx = [];
    const c = new THREE.Color();
    for (let i = 0; i <= rings; i++) {
      const t = i / rings;
      const r = 146 * Math.pow(3200 / 146, t * t * 0.55 + t * 0.45);
      for (let j = 0; j <= segs; j++) {
        const a = (j / segs) * Math.PI * 2;
        const x = Math.cos(a) * r, z = Math.sin(a) * r;
        const h = this.terrainHeight(x, z);
        pos.push(x, h, z);
        const field = fbm(x * 0.01, z * 0.01, 3);
        const forest = smoothstep(0.52, 0.6, fbm(x * 0.006 + 40, z * 0.006, 3));
        c.setRGB(0.1 + field * 0.08, 0.15 + field * 0.05, 0.05);
        if (field > 0.62) c.setRGB(0.23, 0.2, 0.08);
        c.lerp(new THREE.Color(0.03, 0.07, 0.03), forest);
        const rock = smoothstep(120, 330, h);
        c.lerp(new THREE.Color(0.2, 0.21, 0.23), rock);
        col.push(c.r, c.g, c.b);
      }
    }
    for (let i = 0; i < rings; i++) {
      for (let j = 0; j < segs; j++) {
        const a = i * (segs + 1) + j, b2 = a + segs + 1;
        idx.push(a, a + 1, b2, a + 1, b2 + 1, b2);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }));
    m.receiveShadow = false;
    this.scene.add(m);
  }

  buildWindmill() {
    const x = 70, z = -300;
    const y = this.terrainHeight(x, z) - 1;
    const g = new THREE.Group();
    g.position.set(x, y, z);
    const white = new THREE.MeshStandardMaterial({ color: 0xf2f0ea, roughness: 0.35, metalness: 0.05 });
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 2.2, 30, 16), white);
    tower.position.y = 15;
    tower.castShadow = true;
    g.add(tower);
    const nac = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.2, 5), white);
    nac.position.set(0, 30.5, 0.8);
    g.add(nac);
    const hub = new THREE.Group();
    hub.position.set(0, 30.5, 3.6);
    for (let i = 0; i < 3; i++) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(1.2, 17, 0.25), white);
      blade.geometry.translate(0.3, 8.5, 0);
      blade.rotation.z = (i / 3) * Math.PI * 2;
      hub.add(blade);
    }
    hub.add(new THREE.Mesh(new THREE.SphereGeometry(0.9, 12, 8), white));
    g.add(hub);
    g.rotation.y = 0.35;
    this.windmill = hub;
    this.scene.add(g);
  }

  buildContactShadows() {
    const items = [];
    for (const s of this.treeSpots) if (Math.hypot(s.x, s.z) < 150) items.push([s.x, s.z, s.r * 0.95, s.r * 0.95, 0, 0.5, s.r * 0.9]);
    for (const b of boxes) items.push([b.x, b.z, b.hw + 0.7, b.hd + 0.7, Math.atan2(b.s, b.c), 0.55, 0.8]);
    for (const o of this.outer || []) items.push([o[0], o[1], 5.2, 4.2, 0, 0.35, 1.2]);
    const geo = new THREE.PlaneGeometry(1, 1);
    geo.rotateX(-Math.PI / 2);
    const aData = new Float32Array(items.length * 4);
    const mat = new THREE.ShaderMaterial({
      vertexShader: /* glsl */ `
        attribute vec4 aShape;
        varying vec2 vL;
        varying vec4 vShape;
        void main() {
          vL = position.xz;
          vShape = aShape;
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        varying vec2 vL;
        varying vec4 vShape; // halfW, halfD, strength, soft
        void main() {
          vec2 p = vL * (vShape.xy * 2.0 + vShape.w * 2.0);
          vec2 q = abs(p) - vShape.xy + vShape.w;
          float r = min(vShape.x, vShape.y);
          float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - vShape.w;
          float a = 1.0 - smoothstep(-vShape.w, vShape.w, d);
          gl_FragColor = vec4(vec3(1.0 - a * vShape.z), 1.0);
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.CustomBlending,
      blendEquation: THREE.AddEquation,
      blendSrc: THREE.ZeroFactor,
      blendDst: THREE.SrcColorFactor,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    });
    const mesh = new THREE.InstancedMesh(geo, mat, items.length);
    items.forEach((it, i) => {
      const [x, z, hw, hd, rot, str, soft] = it;
      _q.setFromAxisAngle(_p.set(0, 1, 0), rot);
      _m.compose(_p.set(x, 0.015, z), _q, _s.set(hw * 2 + soft * 2, 1, hd * 2 + soft * 2));
      mesh.setMatrixAt(i, _m);
      aData.set([hw, hd, str, soft], i * 4);
    });
    geo.setAttribute('aShape', new THREE.InstancedBufferAttribute(aData, 4));
    mesh.renderOrder = 1;
    mesh.frustumCulled = false;
    this.scene.add(mesh);
  }

  update(dt, t) {
    this.uniforms.uTime.value = t;
    if (this.windmill) this.windmill.rotation.z -= dt * 0.55;
  }
}
