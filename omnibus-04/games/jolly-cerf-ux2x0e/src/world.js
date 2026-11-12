import * as THREE from 'three';
import { mergeGeometries } from 'three';
import { makeLit, G } from './materials.js';
import {
  HW, H, WALL_T, Z_START, Z_END, Z_LOWER_END, LIGHT_SPACING, LIGHT_Z0,
  PILLAR, DOOR_A, WINDOWS, WIN_Y0, WIN_Y1, COLORS, HOLE_A, HOLE_B, SHAFT_H, SLOT_H,
} from './config.js';

const tmpColor = new THREE.Color();

class GeoBuilder {
  constructor() { this.parts = []; }
  push(geo, color) {
    if (geo.index === null) geo = geo; // all primitives used here are indexed
    const n = geo.attributes.position.count;
    const c = new Float32Array(n * 3);
    tmpColor.set(color);
    for (let i = 0; i < n; i++) { c[i * 3] = tmpColor.r; c[i * 3 + 1] = tmpColor.g; c[i * 3 + 2] = tmpColor.b; }
    geo.setAttribute('color', new THREE.BufferAttribute(c, 3));
    for (const k of Object.keys(geo.attributes)) {
      if (!['position', 'normal', 'uv', 'color'].includes(k)) geo.deleteAttribute(k);
    }
    this.parts.push(geo);
    return geo;
  }
  box(w, h, d, x, y, z, color, rotY = 0) {
    const g = new THREE.BoxGeometry(w, h, d);
    if (rotY) g.rotateY(rotY);
    g.translate(x, y, z);
    return this.push(g, color);
  }
  // quad facing one of the axis directions
  quad(x, y, z, w, h, facing, color) {
    const g = new THREE.PlaneGeometry(w, h);
    switch (facing) {
      case '+x': g.rotateY(Math.PI / 2); break;
      case '-x': g.rotateY(-Math.PI / 2); break;
      case '+y': g.rotateX(-Math.PI / 2); break;
      case '-y': g.rotateX(Math.PI / 2); break;
      case '-z': g.rotateY(Math.PI); break;
      default: break;
    }
    g.translate(x, y, z);
    return this.push(g, color);
  }
  cyl(rt, rb, h, x, y, z, color, seg = 16, rotX = 0, rotZ = 0) {
    const g = new THREE.CylinderGeometry(rt, rb, h, seg);
    if (rotX) g.rotateX(rotX);
    if (rotZ) g.rotateZ(rotZ);
    g.translate(x, y, z);
    return this.push(g, color);
  }
  sphere(r, x, y, z, color, seg = 12) {
    const g = new THREE.SphereGeometry(r, seg, Math.max(6, seg >> 1));
    g.translate(x, y, z);
    return this.push(g, color);
  }
  disc(r, x, y, z, facing, color, seg = 32) {
    const g = new THREE.CircleGeometry(r, seg);
    switch (facing) {
      case '+x': g.rotateY(Math.PI / 2); break;
      case '-x': g.rotateY(-Math.PI / 2); break;
      case '-z': g.rotateY(Math.PI); break;
      case '+y': g.rotateX(-Math.PI / 2); break;
      case '-y': g.rotateX(Math.PI / 2); break;
      default: break;
    }
    g.translate(x, y, z);
    return this.push(g, color);
  }
  build(material) {
    if (!this.parts.length) return null;
    const geo = mergeGeometries(this.parts, false);
    this.parts.forEach(p => p.dispose());
    this.parts = [];
    const m = new THREE.Mesh(geo, material);
    m.frustumCulled = false;
    return m;
  }
}

const BANDS = [
  [0.0, 0.11, COLORS.base],
  [0.11, 1.05, COLORS.wallLower],
  [1.05, H, COLORS.wallUpper],
];

// A vertical wall rectangle on the plane x = sx*HW (facing the corridor) or z = const.
function wallRectX(b, sx, z0, z1, y0, y1) {
  const facing = sx < 0 ? '+x' : '-x';
  const x = sx * HW;
  for (const [a, c, col] of BANDS) {
    const lo = Math.max(a, y0), hi = Math.min(c, y1);
    if (hi - lo <= 1e-4) continue;
    b.quad(x, (lo + hi) / 2, (z0 + z1) / 2, Math.abs(z1 - z0), hi - lo, facing, col);
  }
  if (y0 <= 1.05 && y1 >= 1.07) {
    b.box(0.035, 0.05, Math.abs(z1 - z0), x - sx * 0.017, 1.06, (z0 + z1) / 2, COLORS.rail);
  }
}
function wallRectZ(b, zf, facing, x0, x1, y0, y1) {
  for (const [a, c, col] of BANDS) {
    const lo = Math.max(a, y0), hi = Math.min(c, y1);
    if (hi - lo <= 1e-4) continue;
    b.quad((x0 + x1) / 2, (lo + hi) / 2, zf, Math.abs(x1 - x0), hi - lo, facing, col);
  }
  if (y0 <= 1.05 && y1 >= 1.07) {
    const dz = facing === '+z' ? 0.017 : -0.017;
    b.box(Math.abs(x1 - x0), 0.05, 0.035, (x0 + x1) / 2, 1.06, zf + dz, COLORS.rail);
  }
}

function doorPanel(b, sx, zc, hw, h, color = COLORS.door) {
  const x = sx * (HW - 0.012);
  const facing = sx < 0 ? '+x' : '-x';
  b.quad(x, h / 2, zc, hw * 2, h, facing, color);
  // frame
  const fx = sx * (HW - 0.03);
  b.box(0.06, h + 0.08, 0.08, fx, (h + 0.08) / 2, zc - hw - 0.04, COLORS.doorFrame);
  b.box(0.06, h + 0.08, 0.08, fx, (h + 0.08) / 2, zc + hw + 0.04, COLORS.doorFrame);
  b.box(0.06, 0.08, hw * 2 + 0.16, fx, h + 0.04, zc, COLORS.doorFrame);
  // small window + handle + kick plate
  b.quad(sx * (HW - 0.016), h * 0.72, zc - hw * 0.35, hw * 0.55, h * 0.26, facing, 0x2c3336);
  b.box(0.05, 0.035, 0.16, sx * (HW - 0.05), 1.0, zc + hw * 0.7, 0xc9c3b5);
  b.quad(sx * (HW - 0.016), 0.14, zc, hw * 1.9, 0.2, facing, 0x9aa3a0);
}

function lockers(b, z0, z1) {
  const w = 0.42;
  const n = Math.floor((z0 - z1) / w);
  const x = -HW + 0.006;
  for (let i = 0; i < n; i++) {
    const zc = z0 - (i + 0.5) * w;
    const hue = i % 5 === 2 ? 0xc99a45 : COLORS.locker;
    b.quad(x, 1.05, zc, w - 0.018, 1.84, '+x', hue);
    for (let v = 0; v < 4; v++) b.quad(x + 0.002, 1.72 - v * 0.035, zc, w * 0.5, 0.012, '+x', 0x6b5323);
    b.box(0.03, 0.12, 0.04, x + 0.015, 1.1, zc + w * 0.3, 0x5b5a57);
  }
  b.quad(-HW + 0.004, 1.05, (z0 + z1) / 2, z0 - z1, 1.9, '+x', 0x5d4a26);
}

function noticeBoard(b, zc) {
  const x = HW - 0.012;
  b.box(0.03, 0.9, 1.5, x - 0.01, 1.55, zc, 0x8a6b44);
  b.quad(x - 0.03, 1.55, zc, 1.36, 0.78, '-x', 0xb88d5a);
  const papers = [
    [-0.45, 0.18, 0.32, 0.26, 0xf3efe3], [0.0, 0.2, 0.3, 0.3, 0xf6d7a1], [0.45, 0.16, 0.28, 0.24, 0xcfe3ea],
    [-0.35, -0.2, 0.36, 0.26, 0xe7f0d0], [0.2, -0.18, 0.3, 0.28, 0xf3efe3],
  ];
  for (const [dz, dy, w, h, c] of papers) b.quad(x - 0.035, 1.55 + dy, zc - dz, w, h, '-x', c);
  // simple kid drawings: a sun, a house
  b.disc(0.07, x - 0.04, 1.77, zc - 0.0, '-x', 0xe8a33a, 16);
  b.quad(x - 0.04, 1.31, zc + 0.2, 0.14, 0.1, '-x', 0xc8694e);
  b.quad(x - 0.04, 1.36, zc - 0.36, 0.2, 0.08, '-x', 0x6f9a5a);
}

function pillar(b) {
  const { x, z, hw } = PILLAR;
  const s = hw * 2;
  b.box(s + 0.02, 0.11, s + 0.02, x, 0.055, z, COLORS.base);
  b.box(s, 1.05 - 0.11, s, x, (0.11 + 1.05) / 2, z, COLORS.wallLower);
  b.box(s + 0.03, 0.05, s + 0.03, x, 1.06, z, COLORS.rail);
  b.box(s, H - 1.05, s, x, (1.05 + H) / 2, z, COLORS.wallUpper);
  b.quad(x, H + 0.003, z, s + 0.01, s + 0.01, '+y', 0x4a4540);
  // clock face on the side that looks back at the start
  b.cyl(0.2, 0.2, 0.04, x, 2.05, z + hw + 0.02, 0x3a3835, 24, Math.PI / 2);
  b.disc(0.18, x, 2.05, z + hw + 0.041, '+z', 0xf7f3ea, 24);
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    b.box(0.012, i % 3 === 0 ? 0.04 : 0.022, 0.004, x + Math.sin(a) * 0.15, 2.05 + Math.cos(a) * 0.15, z + hw + 0.044, 0x2d2b28, 0);
  }
}

function inHole(x, z, holes) {
  return holes.some(h => x > h.x0 + 1e-4 && x < h.x1 - 1e-4 && z > h.z0 + 1e-4 && z < h.z1 - 1e-4);
}
function ceiling(b, zFar, holes = []) {
  // split the ceiling into cells around any openings
  const xs = [-HW, HW], zs = [zFar, Z_START];
  for (const h of holes) { xs.push(h.x0, h.x1); zs.push(h.z0, h.z1); }
  xs.sort((a, c) => a - c); zs.sort((a, c) => a - c);
  for (let j = 0; j < zs.length - 1; j++) {
    const z0 = zs[j], z1 = zs[j + 1];
    if (z1 - z0 < 1e-4) continue;
    let run = null;
    for (let i = 0; i < xs.length - 1; i++) {
      const x0 = xs[i], x1 = xs[i + 1];
      if (x1 - x0 < 1e-4) continue;
      const open = inHole((x0 + x1) / 2, (z0 + z1) / 2, holes);
      if (!open) { if (!run) run = [x0, x1]; else run[1] = x1; }
      if (open || i === xs.length - 2) {
        if (run) { b.quad((run[0] + run[1]) / 2, H, (z0 + z1) / 2, run[1] - run[0], z1 - z0, '-y', COLORS.ceiling); run = null; }
      }
    }
  }
  // tile grid lines (not across openings)
  const seg = 0.3;
  for (let z = Z_START - 0.6; z > zFar; z -= 0.6) {
    for (let x = -HW; x < HW - 1e-3; x += seg) {
      if (!inHole(x + seg / 2, z, holes)) b.quad(x + seg / 2, H - 0.002, z, seg, 0.012, '-y', 0xcfc7b6);
    }
  }
  for (const xi of [-0.6, 0.6]) {
    for (let z = zFar; z < Z_START - 1e-3; z += seg) {
      if (!inHole(xi, z + seg / 2, holes)) b.quad(xi, H - 0.002, z + seg / 2, 0.012, seg, '-y', 0xcfc7b6);
    }
  }
}

// the open ceiling hatch of the mirror corridor: a tall, warm maintenance shaft with a ladder
function shaftA(b) {
  const { x0, x1, z0, z1 } = HOLE_A;
  const xc = (x0 + x1) / 2, zc = (z0 + z1) / 2, w = x1 - x0, d = z1 - z0;
  const yc = H + SHAFT_H / 2;
  const wall = 0xd9c49b, wall2 = 0xc9ae80;
  b.quad(x0, yc, zc, d, SHAFT_H, '+x', wall);
  b.quad(x1, yc, zc, d, SHAFT_H, '-x', wall2);
  b.quad(xc, yc, z0, w, SHAFT_H, '+z', wall2);
  b.quad(xc, yc, z1, w, SHAFT_H, '-z', wall);
  b.quad(xc, H + SHAFT_H, zc, w, d, '-y', 0xbfa67a);
  // ladder
  for (const dz of [-0.22, 0.22]) b.box(0.04, SHAFT_H, 0.04, x0 + 0.06, yc, zc + dz, 0x7d7a74);
  for (let y = H + 0.25; y < H + SHAFT_H; y += 0.3) b.box(0.03, 0.03, 0.44, x0 + 0.07, y, zc, 0x8e8a83);
  // pipes and a junction box
  b.cyl(0.035, 0.035, SHAFT_H, x1 - 0.08, yc, z0 + 0.1, 0x9b8f7c, 10);
  b.cyl(0.025, 0.025, SHAFT_H, x1 - 0.18, yc, z0 + 0.09, 0xb07a52, 10);
  b.box(0.2, 0.26, 0.08, x1 - 0.12, H + 1.4, z1 - 0.06, 0x6f7a78);
  // rim of the opening
  b.quad(xc, H - 0.004, z0 - 0.03, w + 0.12, 0.06, '-y', 0x8d8676);
  b.quad(xc, H - 0.004, z1 + 0.03, w + 0.12, 0.06, '-y', 0x8d8676);
  b.quad(x0 - 0.03, H - 0.004, zc, 0.06, d, '-y', 0x8d8676);
  b.quad(x1 + 0.03, H - 0.004, zc, 0.06, d, '-y', 0x8d8676);
  // the hatch panel hangs open from its hinge
  const g = new THREE.BoxGeometry(0.025, 1.05, d - 0.08);
  g.translate(0, -0.525, 0);
  g.rotateZ(-0.42);
  g.translate(x1 + 0.02, H, zc);
  b.push(g, COLORS.ceiling);
  b.cyl(0.006, 0.006, 0.35, xc, H + SHAFT_H - 0.18, zc, 0x333333, 6);
}

// a long slot in the mirror ceiling: beyond it runs another corridor, tiled and lamp-lit
function slotB(b) {
  const { x0, x1, z0, z1 } = HOLE_B;
  const px0 = 0.2, px1 = 1.78, pz0 = z0 - 1.4, pz1 = z1 + 1.4;
  const yc = H + SLOT_H / 2;
  const tile = 0x7fb3a9, tile2 = 0x6a9f95;
  b.quad(px0, yc, (pz0 + pz1) / 2, pz1 - pz0, SLOT_H, '+x', tile);
  b.quad(px1, yc, (pz0 + pz1) / 2, pz1 - pz0, SLOT_H, '-x', tile2);
  b.quad((px0 + px1) / 2, yc, pz0, px1 - px0, SLOT_H, '+z', tile2);
  b.quad((px0 + px1) / 2, yc, pz1, px1 - px0, SLOT_H, '-z', tile);
  b.quad((px0 + px1) / 2, H + SLOT_H, (pz0 + pz1) / 2, px1 - px0, pz1 - pz0, '-y', 0x9fb3ad);
  b.quad((px0 + px1) / 2, H + 0.002, (pz0 + pz1) / 2, px1 - px0, pz1 - pz0, '+y', 0x6f8f88);
  // tile courses
  for (let y = H + 0.3; y < H + SLOT_H; y += 0.3) {
    b.quad(px0 + 0.002, y, (pz0 + pz1) / 2, pz1 - pz0, 0.012, '+x', 0x6f9990);
    b.quad(px1 - 0.002, y, (pz0 + pz1) / 2, pz1 - pz0, 0.012, '-x', 0x6f9990);
  }
  // rim of the slot
  b.quad((x0 + x1) / 2, H - 0.004, z0 - 0.03, x1 - x0 + 0.12, 0.06, '-y', 0x7d8a86);
  b.quad((x0 + x1) / 2, H - 0.004, z1 + 0.03, x1 - x0 + 0.12, 0.06, '-y', 0x7d8a86);
  b.quad(x0 - 0.03, H - 0.004, (z0 + z1) / 2, 0.06, z1 - z0, '-y', 0x7d8a86);
  b.quad(x1 + 0.03, H - 0.004, (z0 + z1) / 2, 0.06, z1 - z0, '-y', 0x7d8a86);
}
function slotLamps(b) {
  const { z0, z1 } = HOLE_B;
  for (let z = z0 - 1.0; z <= z1 + 1.0; z += 1.2) b.quad(1.0, H + SLOT_H - 0.01, z, 0.22, 0.22, '-y', 0xffffff);
}

function fixtures(b, zFar) {
  for (let k = 0; ; k++) {
    const z = LIGHT_Z0 - k * LIGHT_SPACING;
    if (z < zFar + 0.6) break;
    b.quad(0, H - 0.012, z, 0.46, 1.36, '-y', 0x9c978c);
  }
}
function fixtureLamps(b, zFar) {
  for (let k = 0; ; k++) {
    const z = LIGHT_Z0 - k * LIGHT_SPACING;
    if (z < zFar + 0.6) break;
    b.quad(0, H - 0.02, z, 0.34, 1.22, '-y', 0xffffff);
  }
}

function slab(b, zFar) {
  const big = 9;
  const y = H + 0.001;
  const zc = (Z_START + zFar) / 2, len = Z_START - zFar + 2 * big;
  b.quad(-HW - big / 2, y, zc, big, len, '+y', COLORS.slab);
  b.quad(HW + big / 2, y, zc, big, len, '+y', COLORS.slab);
  b.quad(0, y, Z_START + big / 2, HW * 2, big, '+y', COLORS.slab);
  b.quad(0, y, zFar - big / 2, HW * 2, big, '+y', COLORS.slab);
  // a lighter lip on the wall tops so the cut reads as architecture
  b.quad(-HW - WALL_T / 2, y + 0.002, (Z_START + zFar) / 2, WALL_T, Z_START - zFar + WALL_T * 2, '+y', 0x4a4540);
  b.quad(HW + WALL_T / 2, y + 0.002, (Z_START + zFar) / 2, WALL_T, Z_START - zFar + WALL_T * 2, '+y', 0x4a4540);
  b.quad(0, y + 0.002, Z_START + WALL_T / 2, HW * 2, WALL_T, '+y', 0x4a4540);
  b.quad(0, y + 0.002, zFar - WALL_T / 2, HW * 2, WALL_T, '+y', 0x4a4540);
}

function startDoors(b) {
  const z = Z_START;
  wallRectZ(b, z, '-z', -HW, -1.0, 0, H);
  wallRectZ(b, z, '-z', 1.0, HW, 0, H);
  wallRectZ(b, z, '-z', -1.0, 1.0, 2.2, H);
  for (const s of [-1, 1]) {
    const cx = s * 0.49;
    b.quad(cx, 1.1, z - 0.01, 0.95, 2.2, '-z', COLORS.door);
    b.disc(0.15, cx, 1.55, z - 0.015, '-z', 0x27303a, 20);
    b.box(0.7, 0.05, 0.05, cx, 1.02, z - 0.05, 0xbdb7aa);
    b.quad(cx, 0.13, z - 0.015, 0.9, 0.2, '-z', 0x9aa3a0);
  }
  b.box(2.1, 0.08, 0.08, 0, 2.24, z - 0.03, COLORS.doorFrame);
  b.box(0.08, 2.28, 0.08, -1.04, 1.14, z - 0.03, COLORS.doorFrame);
  b.box(0.08, 2.28, 0.08, 1.04, 1.14, z - 0.03, COLORS.doorFrame);
  b.box(0.04, 2.2, 0.06, 0, 1.1, z - 0.03, 0x3b5f5c);
}

function farEndUpper(b) {
  const z = Z_END;
  wallRectZ(b, z, '+z', -HW, HW, 0, H);
  // bulletin board and a drinking fountain
  b.box(1.7, 1.0, 0.03, -0.3, 1.6, z + 0.02, 0x8a6b44);
  b.quad(-0.3, 1.6, z + 0.04, 1.55, 0.86, '+z', 0xb88d5a);
  const papers = [[-0.8, 1.78, 0.34, 0.26, 0xf3efe3], [-0.35, 1.72, 0.3, 0.34, 0xcfe3ea], [0.1, 1.8, 0.32, 0.24, 0xf6d7a1], [0.25, 1.42, 0.3, 0.28, 0xe7f0d0], [-0.65, 1.4, 0.36, 0.26, 0xf3efe3]];
  for (const [x, y, w, h, c] of papers) b.quad(x, y, z + 0.045, w, h, '+z', c);
  b.box(0.42, 0.34, 0.3, 1.2, 0.86, z + 0.15, 0xb7b9b6);
  b.box(0.1, 0.62, 0.1, 1.2, 0.36, z + 0.1, 0x9ea09d);
}

function windowsWall(b, lower) {
  // right wall with three window openings
  const x = HW;
  let zPrev = Z_START;
  const segs = [];
  for (const w of WINDOWS) { segs.push([w.z1, w.z0]); }
  // piers and full-height segments
  const bounds = [];
  let cursor = Z_START;
  for (const w of WINDOWS) {
    bounds.push([cursor, w.z1]); // (z high -> z low)
    cursor = w.z0;
  }
  bounds.push([cursor, lower ? Z_LOWER_END : Z_END]);
  for (const [za, zb] of bounds) {
    if (za - zb > 1e-3) wallRectX(b, 1, zb, za, 0, H);
  }
  for (const w of WINDOWS) {
    wallRectX(b, 1, w.z0, w.z1, 0, WIN_Y0);
    wallRectX(b, 1, w.z0, w.z1, WIN_Y1, H);
    const zc = (w.z0 + w.z1) / 2, len = w.z1 - w.z0;
    // reveals
    b.quad(x + WALL_T / 2, WIN_Y1, zc, WALL_T, len, '-y', 0xe0d8c6);
    b.box(WALL_T + 0.1, 0.045, len + 0.08, x + WALL_T / 2 - 0.05, WIN_Y0 - 0.02, zc, 0xe9e4d8);
    b.quad(x + WALL_T / 2, (WIN_Y0 + WIN_Y1) / 2, w.z0, WALL_T, WIN_Y1 - WIN_Y0, '+z', 0xd9d1bf);
    b.quad(x + WALL_T / 2, (WIN_Y0 + WIN_Y1) / 2, w.z1, WALL_T, WIN_Y1 - WIN_Y0, '-z', 0xd9d1bf);
    // frame
    const fx = x + 0.06;
    b.box(0.05, WIN_Y1 - WIN_Y0, 0.05, fx, (WIN_Y0 + WIN_Y1) / 2, zc, 0xf2efe8);
    b.box(0.05, 0.05, len, fx, WIN_Y0 + (WIN_Y1 - WIN_Y0) * 0.62, zc, 0xf2efe8);
    b.box(0.05, WIN_Y1 - WIN_Y0 + 0.06, 0.05, fx, (WIN_Y0 + WIN_Y1) / 2, w.z0 + 0.025, 0xf2efe8);
    b.box(0.05, WIN_Y1 - WIN_Y0 + 0.06, 0.05, fx, (WIN_Y0 + WIN_Y1) / 2, w.z1 - 0.025, 0xf2efe8);
    // radiator
    b.box(0.09, 0.5, len * 0.8, x - 0.07, 0.48, zc, 0xe7e2d6);
    for (let f = -0.5; f <= 0.5; f += 0.08) b.box(0.1, 0.46, 0.012, x - 0.075, 0.48, zc + f * len * 0.8, 0xd3cdbf);
  }
}

function rightWallProps(b) {
  noticeBoard(b, -5.4);
  // fire extinguisher cabinet
  b.box(0.16, 0.62, 0.36, HW - 0.08, 1.15, -21.6, 0xb93a2c);
  b.box(0.02, 0.5, 0.28, HW - 0.165, 1.15, -21.6, 0xe9e2d6);
}

function leftWall(b, lower) {
  const zFar = lower ? Z_LOWER_END : Z_END;
  const a0 = DOOR_A.z - DOOR_A.hw, a1 = DOOR_A.z + DOOR_A.hw;
  if (lower) {
    wallRectX(b, -1, a1, Z_START, 0, H);
    wallRectX(b, -1, zFar, a0, 0, H);
    wallRectX(b, -1, a0, a1, DOOR_A.h, H);
    // opening reveals and frame
    b.quad(-HW - WALL_T / 2, DOOR_A.h, DOOR_A.z, WALL_T, DOOR_A.hw * 2, '-y', 0xd8d0be);
    b.quad(-HW - WALL_T / 2, DOOR_A.h / 2, a0, WALL_T, DOOR_A.h, '+z', 0xd0c8b6);
    b.quad(-HW - WALL_T / 2, DOOR_A.h / 2, a1, WALL_T, DOOR_A.h, '-z', 0xd0c8b6);
    b.box(0.06, DOOR_A.h + 0.08, 0.08, -HW + 0.03, (DOOR_A.h + 0.08) / 2, a0 - 0.04, COLORS.doorFrame);
    b.box(0.06, DOOR_A.h + 0.08, 0.08, -HW + 0.03, (DOOR_A.h + 0.08) / 2, a1 + 0.04, COLORS.doorFrame);
    b.box(0.06, 0.08, DOOR_A.hw * 2 + 0.16, -HW + 0.03, DOOR_A.h + 0.04, DOOR_A.z, COLORS.doorFrame);
    b.quad(-HW - WALL_T / 2, 0.003, DOOR_A.z, WALL_T, DOOR_A.hw * 2, '+y', 0x8d8a82);
  } else {
    wallRectX(b, -1, zFar, Z_START, 0, H);
    doorPanel(b, -1, DOOR_A.z, DOOR_A.hw, DOOR_A.h);
  }
  doorPanel(b, -1, -0.9, 0.5, 2.1);
  doorPanel(b, -1, -21.4, 0.5, 2.1);
  lockers(b, -2.0, -12.6);
  lockers(b, -16.2, -20.3);
}

// ---- mirror-only spaces ----
function passageA(b) {
  // storeroom behind the open door: warm bulb, shelves, a crate of balls
  const x0 = -HW - WALL_T, x1 = -5.6;
  const z0 = DOOR_A.z - 1.9, z1 = DOOR_A.z + 1.9;
  b.quad((x0 + x1) / 2, 0, DOOR_A.z, x0 - x1, z1 - z0, '+y', 0x9a8c74);
  b.quad((x0 + x1) / 2, H, DOOR_A.z, x0 - x1, z1 - z0, '-y', 0xd9d0bd);
  b.quad(x1, H / 2, DOOR_A.z, z1 - z0, H, '+x', 0xcdbf9f);
  b.quad((x0 + x1) / 2, H / 2, z0, x0 - x1, H, '+z', 0xd6c8a8);
  b.quad((x0 + x1) / 2, H / 2, z1, x0 - x1, H, '-z', 0xd6c8a8);
  // wall behind the corridor wall (so the opening has depth)
  b.quad(x0, H / 2, (z0 + DOOR_A.z - DOOR_A.hw) / 2, (DOOR_A.z - DOOR_A.hw) - z0, H, '-x', 0xd6c8a8);
  b.quad(x0, H / 2, (z1 + DOOR_A.z + DOOR_A.hw) / 2, z1 - (DOOR_A.z + DOOR_A.hw), H, '-x', 0xd6c8a8);
  b.quad(x0, (DOOR_A.h + H) / 2, DOOR_A.z, DOOR_A.hw * 2, H - DOOR_A.h, '-x', 0xd6c8a8);
  // shelves along the back wall
  for (let s = 0; s < 3; s++) {
    const y = 0.55 + s * 0.62;
    b.box(0.42, 0.035, 3.0, x1 + 0.23, y, DOOR_A.z, 0x8c6f4a);
    for (let k = 0; k < 5; k++) {
      const c = [0xc9b28a, 0x9fb0a0, 0xd5a36a, 0xb7a58b, 0xa89276][(k + s) % 5];
      b.box(0.34, 0.24 + ((k * 7 + s) % 3) * 0.05, 0.36, x1 + 0.24, y + 0.15, DOOR_A.z - 1.2 + k * 0.6, c);
    }
  }
  // crate of balls near the doorway
  const cx = -3.1, cz = DOOR_A.z + 0.7;
  b.box(0.7, 0.4, 0.6, cx, 0.2, cz, 0x7b8f8a);
  const ballCols = [0xd9432f, 0xf0c230, 0x3f7fc1, 0x5ea35b, 0xf3efe3];
  for (let k = 0; k < 7; k++) b.sphere(0.13, cx - 0.22 + (k % 3) * 0.22, 0.44 + Math.floor(k / 3) * 0.1, cz - 0.15 + ((k * 5) % 3) * 0.15, ballCols[k % 5], 12);
  // mop sink
  b.box(0.6, 0.5, 0.5, -4.8, 0.25, DOOR_A.z - 1.3, 0xb9bcba);
  // bulb
  // open door leaf swung into the storeroom
  const hingeZ = DOOR_A.z + DOOR_A.hw;
  const g = new THREE.BoxGeometry(0.05, DOOR_A.h - 0.02, DOOR_A.hw * 2 - 0.04);
  g.translate(0, (DOOR_A.h - 0.02) / 2, -(DOOR_A.hw - 0.02));
  g.rotateY(1.75);
  g.translate(-HW - WALL_T - 0.03, 0, hingeZ);
  b.push(g, COLORS.door);
}

function passageB(b) {
  // a quiet parallel corridor behind the windows, lamp-lit
  const x0 = HW + WALL_T, x1 = 4.7;
  const z0 = -19.0, z1 = -11.2;
  b.quad((x0 + x1) / 2, 0, (z0 + z1) / 2, x1 - x0, z1 - z0, '+y', 0xb9ad98);
  b.quad((x0 + x1) / 2, H, (z0 + z1) / 2, x1 - x0, z1 - z0, '-y', 0xdcd3c1);
  b.quad(x1, H / 2, (z0 + z1) / 2, z1 - z0, H, '-x', 0xc6d0bb);
  b.quad((x0 + x1) / 2, H / 2, z0, x1 - x0, H, '+z', 0xd4d7c4);
  b.quad((x0 + x1) / 2, H / 2, z1, x1 - x0, H, '-z', 0xd4d7c4);
  b.quad(x0, H / 2, (z0 + z1) / 2, z1 - z0, H, '+x', 0xd4d7c4);
  // bench, coat hooks, a potted plant, and a lamp
  b.box(0.42, 0.06, 2.2, x1 - 0.3, 0.46, -15.0, 0x9a7650);
  b.box(0.38, 0.4, 0.06, x1 - 0.3, 0.23, -14.0, 0x7a5d3f);
  b.box(0.38, 0.4, 0.06, x1 - 0.3, 0.23, -16.0, 0x7a5d3f);
  for (let k = 0; k < 6; k++) b.cyl(0.02, 0.02, 0.12, x1 - 0.06, 1.75, -13.4 - k * 0.5, 0x5a5550, 6, 0, Math.PI / 2);
  b.cyl(0.18, 0.14, 0.34, x1 - 0.35, 0.17, -18.2, 0xb56a45, 14);
  b.sphere(0.36, x1 - 0.35, 0.62, -18.2, 0x5f8f55, 12);
}

function lowerExtension(b) {
  // corridor floor beyond the upper corridor's end (seen only from below)
  b.quad(0, 0, (Z_END + Z_LOWER_END) / 2, HW * 2, Z_END - Z_LOWER_END, '+y', 0xc2baab);
  wallRectZ(b, Z_LOWER_END, '+z', -HW, HW, 0, H);
}

export function buildWorld(kind) {
  const lower = kind === 'lower';
  const zFar = lower ? Z_LOWER_END : Z_END;
  const group = new THREE.Group();
  group.name = kind;
  const matte = makeLit({ vertexColors: true });
  const glossy = makeLit({ vertexColors: true, spec: 0.35, gloss: 40 });
  const glow = makeLit({ vertexColors: true, emissive: 0xfff4dc, color: 0x000000, fixture: true });

  const bm = new GeoBuilder();
  const bg = new GeoBuilder();
  const bl = new GeoBuilder();

  leftWall(bm, lower);
  windowsWall(bm, lower);
  rightWallProps(bm);
  startDoors(bm);
  if (!lower) farEndUpper(bm); else lowerExtension(bm);
  ceiling(bm, zFar, lower ? [HOLE_A, HOLE_B] : []);
  fixtures(bm, zFar);
  fixtureLamps(bl, zFar);
  slab(bm, zFar);
  pillar(bg);

  const extras = {};
  group.userData.basics = [];
  if (lower) {
    passageA(bm);
    passageB(bm);
    // the spaces beyond the mirror ceiling (hidden when the view is below them)
    const top = new THREE.Group();
    const bt = new GeoBuilder();
    shaftA(bt); slotB(bt);
    top.add(bt.build(makeLit({ vertexColors: true })));
    // quiet first anomaly: warm downlights that exist only in the mirror ceiling, one over each lane
    const dl = new GeoBuilder();
    for (const x of [-1.05, 1.05]) {
      dl.disc(0.16, x, H - 0.012, PILLAR.z - 0.2, '-y', 0xffffff, 24);
    }
    const dlr = new GeoBuilder();
    for (const x of [-1.05, 1.05]) dlr.disc(0.22, x, H - 0.008, PILLAR.z - 0.2, '-y', 0x8d8676, 24);
    group.add(dlr.build(makeLit({ vertexColors: true })));
    group.add(dl.build(makeLit({ vertexColors: true, color: 0x000000, emissive: 0xffcf8a })));
    const btl = new GeoBuilder();
    slotLamps(btl);
    top.add(btl.build(makeLit({ vertexColors: true, color: 0x000000, emissive: 0xffe2a8 })));
    group.add(top);
    extras.top = top;
    // bulbs (their brightness follows the anomaly uniforms)
    const warmBulb = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8), makeLit({ color: 0x000000, emissive: 0xffc27a }));
    warmBulb.position.set(G.uWarmPos.value.x, G.uWarmPos.value.y - 0.05, G.uWarmPos.value.z);
    group.add(warmBulb);
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 8), makeLit({ color: 0x000000, emissive: 0xffdca0 }));
    lamp.position.set(G.uLampPos.value.x, G.uLampPos.value.y - 0.05, G.uLampPos.value.z);
    group.add(lamp);
    extras.warmBulb = warmBulb; extras.lamp = lamp;
  }

  const m1 = bm.build(matte); if (m1) group.add(m1);
  const m2 = bg.build(glossy); if (m2) group.add(m2);
  const m3 = bl.build(glow); if (m3) group.add(m3);

  // clock hands (animated)
  const hands = new THREE.Group();
  const handMat = makeLit({ color: 0x24221f });
  const hh = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.09, 0.006).translate(0, 0.04, 0), handMat);
  const mh = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.14, 0.006).translate(0, 0.065, 0), handMat);
  hands.add(hh, mh);
  hands.position.set(PILLAR.x, 2.05, PILLAR.z + PILLAR.hw + 0.05);
  group.add(hands);
  extras.hands = { group: hands, hour: hh, minute: mh };

  if (!lower) {
    // bright courtyard beyond the windows
    const tex = makeCourtyardTexture();
    const bd = new THREE.Mesh(
      new THREE.PlaneGeometry(7.2, 2.6),
      new THREE.MeshBasicMaterial({ map: tex, toneMapped: true, fog: false }),
    );
    bd.rotation.y = -Math.PI / 2;
    bd.position.set(HW + 0.75, 1.65, (WINDOWS[0].z1 + WINDOWS[2].z0) / 2);
    group.add(bd);
    group.userData.basics.push(bd);
    // enclose the gap between wall and backdrop
    const enc = new GeoBuilder();
    const zA = WINDOWS[2].z0 - 0.3, zB = WINDOWS[0].z1 + 0.3;
    enc.quad(HW + 0.45, WIN_Y0 - 0.05, (zA + zB) / 2, 0.8, zB - zA, '+y', 0x8a9a7a);
    enc.quad(HW + 0.45, H, (zA + zB) / 2, 0.8, zB - zA, '-y', 0xcfd6d8);
    group.add(enc.build(makeLit({ vertexColors: true })));
    // faint glass
    for (const w of WINDOWS) {
      const glass = new THREE.Mesh(
        new THREE.PlaneGeometry(w.z1 - w.z0, WIN_Y1 - WIN_Y0),
        new THREE.MeshBasicMaterial({ color: 0xd9ecf2, transparent: true, opacity: 0.12, depthWrite: false }),
      );
      glass.rotation.y = -Math.PI / 2;
      glass.position.set(HW + 0.05, (WIN_Y0 + WIN_Y1) / 2, (w.z0 + w.z1) / 2);
      group.add(glass);
      group.userData.basics.push(glass);
    }
  }
  group.userData.extras = extras;
  return group;

}

function makeCourtyardTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 192;
  const g = c.getContext('2d');
  const sky = g.createLinearGradient(0, 0, 0, 192);
  sky.addColorStop(0, '#bcd6e3');
  sky.addColorStop(0.7, '#f2e6cc');
  sky.addColorStop(1, '#f2e2c0');
  g.fillStyle = sky; g.fillRect(0, 0, 512, 192);
  // building across the courtyard
  g.fillStyle = '#d9c7a7'; g.fillRect(0, 70, 512, 60);
  g.fillStyle = '#b9a484';
  for (let x = 12; x < 512; x += 46) g.fillRect(x, 84, 24, 30);
  // trees & hedge
  g.fillStyle = '#6f9458';
  for (let x = -20; x < 540; x += 70) { g.beginPath(); g.arc(x + 30, 118, 34, 0, Math.PI * 2); g.fill(); }
  g.fillStyle = '#5d7f49'; g.fillRect(0, 130, 512, 62);
  g.fillStyle = '#86a86a';
  for (let x = 0; x < 512; x += 18) { g.beginPath(); g.arc(x, 132, 12, 0, Math.PI * 2); g.fill(); }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
