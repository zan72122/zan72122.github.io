// Procedural Japanese houses with interiors. Registers gameplay solids (2D) and
// physics colliders (3D) from the same geometry so visuals and play agree.
import * as THREE from 'three';
import { Batcher, wallPieces, mergeStatic } from './geo.js';
import { M, texMat, color } from './materials.js';
import { T } from './textures.js';
import { F, C, EAVE, FOUND } from './level.js';
import { staticBox, staticConvex } from './physics.js';

const WT = 0.15;                  // wall thickness
const SIDE_WIN_Z = [-1.35, 0.55]; // side window span in z (gameplay plane z=0 inside)
const SIDE_DOOR_Z = [-0.5, 0.45];

export function openingZ(o) { return o.kind === 'door' ? SIDE_DOOR_Z : SIDE_WIN_Z; }

function wallMaterial(spec) {
  const tex = T[spec.wall.tex] || T.siding;
  return texMat('wall-' + spec.wall.tex, tex, [1, 1], { color: spec.wall.color, roughness: 0.88 });
}

// frame (+ fixed sliding panes) for a rectangular opening.
// axis: 'x' (opening in a wall facing ±x, spans z) or 'z' (wall facing ±z, spans x)
function windowUnit(B, axis, fixed, a0, a1, y0, y1, { open = false, outward = 1, frameMat = M.aluminum, frosted = false, door = false, glass = true } = {}) {
  const fw = 0.05, fd = 0.1;
  const P = (a0_, a1_, b0, b1, d0, d1, mat, opts) => {
    const lo = Math.min(fixed + d0 * outward, fixed + d1 * outward), hi = Math.max(fixed + d0 * outward, fixed + d1 * outward);
    if (axis === 'x') B.aabb(mat, lo, b0, a0_, hi, b1, a1_, 1, opts);
    else B.aabb(mat, a0_, b0, lo, a1_, b1, hi, 1, opts);
  };
  P(a0, a1, y1, y1 + fw, -0.02, fd, frameMat);
  P(a0, a1, y0 - fw, y0, -0.02, fd, frameMat);
  P(a0 - fw, a0, y0, y1, -0.02, fd, frameMat);
  P(a1, a1 + fw, y0, y1, -0.02, fd, frameMat);
  if (!door) P(a0 - 0.06, a1 + 0.06, y0 - fw - 0.04, y0 - fw, -0.02, fd + 0.05, frameMat);
  if (!glass) return;
  const mid = (a0 + a1) / 2;
  const gm = frosted ? M.glassFrost : M.glass;
  const pane = (p0, p1, depth) => {
    P(p0, p1, y0, y1, depth, depth + 0.012, gm, { noShadow: true });
    P(p0, p0 + 0.03, y0, y1, depth - 0.01, depth + 0.025, frameMat);
    P(p1 - 0.03, p1, y0, y1, depth - 0.01, depth + 0.025, frameMat);
  };
  pane(a0, mid + 0.02, 0.03); pane(mid - 0.02, a1, 0.06);
}

// Movable leaf of a gameplay opening in a wall facing ±x (spans z0..z1).
// Windows: the outer pane slides over the inner one. Doors: the leaf slides back.
function openingLeaves(face, out, z0, z1, y0, y1, kind, frameMat) {
  const g = new THREE.Group();
  const fixed = new THREE.Group(), moving = new THREE.Group();
  moving.userData.dynamic = true;
  g.add(fixed, moving);
  const mid = (z0 + z1) / 2;
  const slab = (grp, za, zb, depth, mat, t = 0.012) => {
    const x = face + out * depth;
    const m = new THREE.Mesh(new THREE.BoxGeometry(t, y1 - y0, zb - za), mat);
    m.position.set(x, (y0 + y1) / 2, (za + zb) / 2);
    m.castShadow = !mat.transparent; m.receiveShadow = true;
    grp.add(m);
    return m;
  };
  let travel;
  if (kind === 'door') {
    const leafM = color(0x6b5440, 0.55);
    slab(moving, z0, z1, 0.05, leafM, 0.04);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), M.aluminum);
    knob.position.set(face + out * 0.09, y0 + 1.0, z1 - 0.12); moving.add(knob);
    travel = -(z1 - z0) + 0.05;
  } else {
    for (const [a, b, d, grp] of [[z0, mid + 0.02, 0.03, fixed], [mid - 0.02, z1, 0.065, moving]]) {
      slab(grp, a, b, d, M.glass);
      slab(grp, a, a + 0.035, d, frameMat, 0.03);
      slab(grp, b - 0.035, b, d, frameMat, 0.03);
    }
    travel = -(z1 - mid) + 0.02;
  }
  mergeStatic(fixed); mergeStatic(moving);
  return { group: g, moving, travel, t: 0 };
}

export function setLeaf(rec, t) {
  rec.leaves.t = t;
  rec.leaves.moving.position.z = rec.leaves.travel * t;
}

export function buildHouse(spec, ctx) {
  const { w2d } = ctx;
  const { x0, x1, zf, zb } = spec;
  const group = new THREE.Group(); group.name = spec.id;
  const ext = new Batcher(), int = new Batcher(), front = new Batcher();
  const wallM = wallMaterial(spec);
  const trimM = color(spec.trim ?? 0x3a3836, 0.6, 0.1);
  const isShop = spec.type === 'shop';
  const topY = isShop ? EAVE + 0.3 : EAVE;
  const info = { spec, rooms: [], openings: [], group, windows: [], curtains: [], frontWalls: [], lamps: [] };

  // ---------- foundation
  ext.aabb(M.concrete, x0 - 0.02, 0, zb - 0.02, x1 + 0.02, FOUND, zf + 0.02, 1.5);
  w2d.solid(x0, -2, x1, FOUND, 'found');
  staticBox(x0, -1, zb, x1, FOUND, zf);

  // ---------- side walls (west / east) with gameplay openings
  const sideOpenings = (side) => spec.openings.filter(o => o.wall === side);
  for (const side of ['west', 'east']) {
    const xa = side === 'west' ? x0 : x1 - WT, xb = xa + WT;
    const ops = sideOpenings(side).map(o => { const [z0, z1] = openingZ(o); return { u0: z0, u1: z1, v0: o.y0, v1: o.y1, o }; });
    // decorative closed windows in the back part of the wall
    const deco = [];
    if (!isShop) {
      deco.push({ u0: -5.4, u1: -4.3, v0: F[0] + 0.9, v1: F[0] + 1.9 });
      deco.push({ u0: -5.4, u1: -4.3, v0: F[1] + 0.9, v1: F[1] + 1.9 });
    }
    for (const p of wallPieces(zb, zf, FOUND, topY, [...ops, ...deco])) {
      ext.aabb(wallM, xa, p.v0, p.u0, xb, p.v1, p.u1, 2);
      staticBox(xa, p.v0, p.u0, xb, p.v1, p.u1);
    }
    // 2D cross-section at z=0: wall pieces split by the gameplay openings only
    for (const p of wallPieces(-0.01, 0.01, FOUND, topY, ops)) w2d.solid(xa, p.v0, xb, p.v1, 'wall');
    const out = side === 'west' ? -1 : 1;
    const face = side === 'west' ? x0 : x1;
    for (const d of ops) {
      const o = d.o;
      // the closable part (glass/door) is a toggleable solid
      w2d.solid(xa, o.y0, xb, o.y1, o.kind === 'door' ? 'door' : 'window', o.id);
      w2d.setOpen(o.id, o.open);
      staticBox(xa, o.y0, d.u0, xb, o.y1, d.u1, { id: o.id });
      windowUnit(ext, 'x', face, d.u0, d.u1, o.y0, o.y1, { outward: out, door: o.kind === 'door', glass: false, frameMat: o.kind === 'door' ? trimM : M.aluminum });
      const lv = openingLeaves(face, out, d.u0, d.u1, o.y0, o.y1, o.kind, M.aluminum);
      group.add(lv.group);
      const rec = { ...o, face, out, z0: d.u0, z1: d.u1, leaves: lv, house: spec.id };
      setLeaf(rec, o.open ? 1 : 0);
      info.openings.push(rec);
    }
    for (const d of deco) windowUnit(ext, 'x', face, d.u0, d.u1, d.v0, d.v1, { outward: out, frosted: true });
  }

  // ---------- south (front) & north walls
  const frontOps = [];
  const roomsByStorey = [0, 1].map(s => spec.rooms.filter(r => r.storey === s));
  const doorX = spec.front?.door?.x;
  if (isShop) {
    frontOps.push({ u0: x0 + 0.35, u1: x1 - 0.35, v0: FOUND, v1: C[0] - 0.05, kind: 'shopfront' });
    frontOps.push({ u0: x0 + 1.2, u1: x0 + 3.4, v0: F[1] + 0.8, v1: F[1] + 1.9 });
    frontOps.push({ u0: x1 - 3.4, u1: x1 - 1.2, v0: F[1] + 0.8, v1: F[1] + 1.9 });
  } else {
    for (const s of [0, 1]) for (const r of roomsByStorey[s]) {
      // In sideways gravity everyone gathers at the east end of a room, so the
      // front windows are wide and reach that end (so we can see who lives there).
      let a0 = r.x0 + 0.55, a1 = r.x1 - 0.3;
      if (doorX !== undefined && s === 0 && doorX > a0 - 0.6 && doorX < a1 + 0.6) {
        if (doorX - r.x0 > r.x1 - doorX) a1 = Math.min(a1, doorX - 0.75); else a0 = Math.max(a0, doorX + 0.75);
      }
      if (a1 - a0 < 0.8) continue;
      const big = s === 0 && spec.front?.bigWindow;
      frontOps.push({ u0: a0, u1: a1, v0: big ? F[s] + 0.05 : F[s] + 0.45, v1: F[s] + 2.05, room: r });
    }
    if (doorX !== undefined) frontOps.push({ u0: doorX - 0.45, u1: doorX + 0.45, v0: FOUND, v1: FOUND + 2.05, kind: 'door' });
  }
  for (const p of wallPieces(x0, x1, FOUND, topY, frontOps)) {
    front.aabb(wallM, p.u0, p.v0, zf - WT, p.u1, p.v1, zf, 2);
  }
  staticBox(x0, FOUND, zf - WT, x1, topY, zf);
  for (const o of frontOps) {
    if (o.kind === 'shopfront') continue;
    if (o.room && o.u1 - o.u0 > 2.4) {
      const n = Math.round((o.u1 - o.u0) / 1.8);
      for (let i = 0; i < n; i++) {
        const a = o.u0 + (o.u1 - o.u0) * i / n, b = o.u0 + (o.u1 - o.u0) * (i + 1) / n;
        windowUnit(front, 'z', zf, a + (i ? 0.03 : 0), b - (i < n - 1 ? 0.03 : 0), o.v0, o.v1, { outward: 1 });
      }
      continue;
    }
    windowUnit(front, 'z', zf, o.u0, o.u1, o.v0, o.v1, { outward: 1, door: o.kind === 'door', glass: o.kind !== 'door', frameMat: o.kind === 'door' ? trimM : M.aluminum });
    if (o.kind === 'door') {
      front.aabb(color(0x5b4634, 0.55), o.u0, o.v0, zf - 0.08, o.u1, o.v1, zf - 0.02, 1);
      front.aabb(M.aluminum, o.u1 - 0.14, o.v0 + 0.95, zf - 0.02, o.u1 - 0.1, o.v0 + 1.15, zf + 0.05, 1);
      // canopy + step
      ext.aabb(trimM, o.u0 - 0.4, o.v1 + 0.25, zf, o.u1 + 0.4, o.v1 + 0.33, zf + 0.9, 1);
      ext.aabb(M.concrete, o.u0 - 0.5, 0, zf, o.u1 + 0.5, FOUND - 0.15, zf + 1.0, 1);
    }
  }
  info.frontOps = frontOps;
  // north wall (plain, a couple of small windows)
  ext.aabb(wallM, x0, FOUND, zb, x1, topY, zb + WT, 2);
  staticBox(x0, FOUND, zb, x1, topY, zb + WT);

  // storey trim band and eave line
  if (!isShop) {
    ext.aabb(trimM, x0 - 0.03, C[0] + 0.05, zb - 0.03, x1 + 0.03, C[0] + 0.2, zf + 0.03, 1);
  }

  // ---------- slabs, interior rooms
  const stairs = spec.stairs;
  const slabHoles = stairs ? [{ u0: stairs.x0, u1: stairs.x1, v0: -1.1, v1: 0.9 }] : [];
  for (const p of wallPieces(x0 + WT, x1 - WT, zb + WT, zf - WT, slabHoles)) {
    int.aabb(M.concrete, p.u0, C[0], p.v0, p.u1, F[1], p.v1, 1.5);
    staticBox(p.u0, C[0], p.v0, p.u1, F[1], p.v1);
  }
  // 2D slab cross-section at z=0
  for (const p of wallPieces(x0 + WT, x1 - WT, -0.01, 0.01, slabHoles)) w2d.solid(p.u0, C[0], p.u1, F[1], 'slab');
  // top: ceiling of storey 2 / roof deck
  int.aabb(M.white, x0 + WT, C[1], zb + WT, x1 - WT, topY, zf - WT, 1);
  w2d.solid(x0, C[1], x1, topY + 0.01, 'deck');
  staticBox(x0, C[1], zb, x1, topY, zf);

  // partitions (between rooms of the same storey)
  for (const s of [0, 1]) {
    const rs = roomsByStorey[s];
    for (let i = 0; i < rs.length - 1; i++) {
      const xp = rs[i].x1;
      const ops = spec.openings.filter(o => o.wall === xp && o.storey === s)
        .map(o => { const [z0, z1] = openingZ(o); return { u0: z0, u1: z1, v0: o.y0, v1: o.y1, o }; });
      const realDoor = { u0: -5.2, u1: -4.3, v0: F[s], v1: F[s] + 2.0 };
      for (const p of wallPieces(zb + WT, zf - WT, F[s], C[s], [...ops, realDoor])) {
        int.aabb(M.wallpaper, xp - WT / 2, p.v0, p.u0, xp + WT / 2, p.v1, p.u1, 2);
        staticBox(xp - WT / 2, p.v0, p.u0, xp + WT / 2, p.v1, p.u1);
      }
      for (const p of wallPieces(-0.01, 0.01, F[s], C[s], ops)) w2d.solid(xp - WT / 2, p.v0, xp + WT / 2, p.v1, 'wall');
      for (const d of ops) {
        const o = d.o;
        w2d.solid(xp - WT / 2, o.y0, xp + WT / 2, o.y1, 'door', o.id);
        w2d.setOpen(o.id, o.open);
        staticBox(xp - WT / 2, o.y0, d.u0, xp + WT / 2, o.y1, d.u1, { id: o.id });
        const lv = openingLeaves(xp - WT / 2, -1, d.u0, d.u1, o.y0, o.y1, 'door', trimM);
        lv.group.position.x += 0.01;
        group.add(lv.group);
        const rec = { ...o, face: xp - WT / 2, out: -1, z0: d.u0, z1: d.u1, leaves: lv, interior: true, house: spec.id };
        setLeaf(rec, o.open ? 1 : 0);
        info.openings.push(rec);
      }
    }
  }

  // room linings
  for (const r of spec.rooms) {
    const s = r.storey;
    const rx0 = r.x0 + (r.x0 === x0 ? WT : WT / 2), rx1 = r.x1 - (r.x1 === x1 ? WT : WT / 2);
    const rz0 = zb + WT, rz1 = zf - WT;
    const floorM = r.kind === 'washitsu' ? M.tatami : r.kind === 'shop' ? M.concrete : M.wood;
    int.aabb(floorM, rx0, F[s] - 0.02, rz0, rx1, F[s], rz1, r.kind === 'washitsu' ? 1.8 : 1.6);
    int.aabb(M.wallpaper, rx0, F[s], rz0, rx1, C[s], rz0 + 0.015, 2.2);   // back wall lining
    const room = { ...r, s, rx0, rx1, rz0, rz1, y0: F[s], y1: C[s] };
    info.rooms.push(room);
    // ceiling lamp: cord hangs sideways (towards +x)
    info.lamps.push({ x: (rx0 + rx1) / 2, y: C[s], z: (rz0 + rz1) / 2 + 0.6, room });
  }

  // stairs (visual): steps rising towards +x, which become ladder rungs in sideways gravity
  if (stairs) {
    const n = 12, run = (stairs.x1 - stairs.x0) / n, rise = (F[1] - F[0]) / n;
    for (let i = 0; i < n; i++) {
      int.aabb(M.wood, stairs.x0 + i * run, F[0], -1.05, stairs.x0 + (i + 1) * run, F[0] + (i + 1) * rise, -0.2, 1);
    }
  }

  // ---------- roof
  buildRoof(spec, ext, w2d, info, topY);

  // ---------- balcony
  const bal = spec.front?.balcony;
  if (bal) {
    const by = F[bal.storey];
    ext.aabb(M.concrete, bal.x0, by - 0.18, zf, bal.x1, by, zf + 1.05, 1);
    const railM = M.aluminum;
    ext.aabb(railM, bal.x0, by + 1.05, zf + 1.0, bal.x1, by + 1.1, zf + 1.07, 1);
    ext.aabb(railM, bal.x0, by, zf + 0.98, bal.x0 + 0.05, by + 1.1, zf + 1.07, 1);
    ext.aabb(railM, bal.x1 - 0.05, by, zf + 0.98, bal.x1, by + 1.1, zf + 1.07, 1);
    for (let x = bal.x0 + 0.12; x < bal.x1 - 0.08; x += 0.11) ext.aabb(railM, x, by + 0.05, zf + 1.02, x + 0.02, by + 1.05, zf + 1.04, 1, { noShadow: false });
    ext.aabb(railM, bal.x0 + 0.3, by + 1.55, zf + 0.35, bal.x0 + 0.34, by + 1.9, zf + 0.39, 1);
    ext.aabb(railM, bal.x1 - 0.34, by + 1.55, zf + 0.35, bal.x1 - 0.3, by + 1.9, zf + 0.39, 1);
    info.laundryPole = { x0: bal.x0 + 0.3, x1: bal.x1 - 0.3, y: by + 1.82, z: zf + 0.55 };
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, bal.x1 - bal.x0 - 0.4, 8), M.aluminum);
    pole.rotation.z = Math.PI / 2; pole.position.set((bal.x0 + bal.x1) / 2, by + 1.82, zf + 0.55); pole.castShadow = true;
    group.add(pole);
  }
  // bay window-ish canopy box for variety
  if (spec.front?.bay) {
    const o = frontOps.find(f => f.room && f.room.storey === 0);
    if (o) ext.aabb(trimM, o.u0 - 0.2, o.v1 + 0.1, zf, o.u1 + 0.2, o.v1 + 0.22, zf + 0.55, 1);
  }
  // shutter boxes over upstairs front windows
  for (const o of frontOps) if (o.room && o.room.storey === 1) ext.aabb(color(0x9c9a95, 0.5, 0.3), o.u0 - 0.05, o.v1 + 0.06, zf, o.u1 + 0.05, o.v1 + 0.3, zf + 0.18, 1);

  // downpipes on the front corners
  const pipeM = color(0x8a8780, 0.5, 0.1);
  for (const px of [x0 + 0.12, x1 - 0.12]) {
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, topY, 10), pipeM);
    pipe.position.set(px, topY / 2, zf + 0.09); pipe.castShadow = true;
    group.add(pipe);
  }

  mergeStatic(group);
  const extMeshes = ext.build(group);
  int.build(group, { cast: true, receive: true });
  const fm = front.build(group);
  info.frontWalls = fm;
  info.extMeshes = extMeshes;
  ctx.scene.add(group);
  return info;
}

function buildRoof(spec, ext, w2d, info, topY) {
  const { x0, x1, zf, zb } = spec;
  const r = spec.roof;
  const roofTex = T[r.tex] || T.slate;
  const roofM = texMat('roof-' + r.tex + r.color, roofTex, [1, 1], { color: r.color, roughness: r.tex === 'kawara' ? 0.55 : 0.75, metalness: r.tex === 'kawara' ? 0.15 : 0.05 });
  const wallM = wallMaterial(spec);
  const trimM = color(spec.trim ?? 0x3a3836, 0.6, 0.1);
  const gutterM = color(0x8a8780, 0.45, 0.2);
  if (r.ridge === 'flat') {
    ext.aabb(M.concrete, x0 - 0.05, topY, zb - 0.05, x1 + 0.05, topY + 0.55, zb + 0.15, 1);
    ext.aabb(M.concrete, x0 - 0.05, topY, zf - 0.15, x1 + 0.05, topY + 0.55, zf + 0.05, 1);
    ext.aabb(M.concrete, x0 - 0.05, topY, zb, x0 + 0.15, topY + 0.55, zf, 1);
    ext.aabb(M.concrete, x1 - 0.15, topY, zb, x1 + 0.05, topY + 0.55, zf, 1);
    w2d.solid(x0, topY, x1, topY + 0.55, 'roof');
    staticBox(x0, topY, zb, x1, topY + 0.55, zf);
    info.ridgeY = topY + 0.55;
    return;
  }
  const ov = r.overhang, th = 0.14;
  if (r.ridge === 'z') {
    // slopes face west & east; gable triangles on south & north
    const xm = (x0 + x1) / 2, half = (x1 - x0) / 2 + ov;
    const rise = half * r.pitch, ridgeY = topY - ov * r.pitch + rise;
    const ang = Math.atan(r.pitch), L = half / Math.cos(ang);
    const zA = zb - ov * 0.6, zB = zf + ov;
    for (const s of [-1, 1]) {
      const cx = xm + s * half / 2, cy = topY - ov * r.pitch + rise / 2;
      const m = new THREE.Matrix4().makeRotationZ(-s * ang); m.setPosition(cx, cy + th / 2, (zA + zB) / 2);
      ext.add(roofM, new THREE.BoxGeometry(L + 0.02, th, zB - zA), m, 1.6);
      // fascia + gutter along the eave
      const ex = xm + s * half;
      ext.aabb(trimM, ex - 0.04, topY - ov * r.pitch - 0.16, zA, ex + 0.04, topY - ov * r.pitch + 0.06, zB, 1);
      const g = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, zB - zA, 10, 1, false, 0, Math.PI), gutterM);
      g.rotation.x = Math.PI / 2; g.rotation.y = Math.PI / 2;
      g.position.set(ex + s * 0.08, topY - ov * r.pitch - 0.05, (zA + zB) / 2); info.group.add(g);
    }
    // ridge cap
    ext.aabb(trimM, xm - 0.12, ridgeY + th * 0.6, zA, xm + 0.12, ridgeY + th * 0.6 + 0.12, zB, 1);
    // gable triangles (south & north)
    const tri = new THREE.Shape();
    tri.moveTo(x0, topY); tri.lineTo(x1, topY); tri.lineTo(xm, topY + (x1 - x0) / 2 * r.pitch); tri.closePath();
    for (const z of [zf - WT, zb]) {
      const g = new THREE.ExtrudeGeometry(tri, { depth: WT, bevelEnabled: false });
      g.translate(0, 0, z);
      ext.add(wallM, g, null, 2);
    }
    // 2D: stepped approximation of the triangle; 3D: convex prism
    const steps = 6;
    for (let i = 0; i < steps; i++) {
      const y0 = topY + (ridgeY - topY) * i / steps, y1 = topY + (ridgeY - topY) * (i + 1) / steps;
      const w = half * (1 - (i + 0.5) / steps);
      w2d.solid(xm - w, y0, xm + w, y1, 'roof');
    }
    const pts = [];
    for (const z of [zA, zB]) {
      pts.push(new THREE.Vector3(x0 - ov, topY - ov * r.pitch, z), new THREE.Vector3(x1 + ov, topY - ov * r.pitch, z), new THREE.Vector3(xm, ridgeY + th, z));
      pts.push(new THREE.Vector3(x0 - ov, topY - ov * r.pitch + th, z), new THREE.Vector3(x1 + ov, topY - ov * r.pitch + th, z));
    }
    staticConvex(pts, { friction: 0.35 });
    info.ridgeY = ridgeY;
  } else {
    // ridge along x: slopes face south & north, gables on west & east
    const zm = (zb + zf) / 2, half = (zf - zb) / 2 + ov;
    const rise = half * r.pitch, ridgeY = topY - ov * r.pitch + rise;
    const ang = Math.atan(r.pitch), L = half / Math.cos(ang);
    const xA = x0 - 0.35, xB = x1 + 0.35;
    for (const s of [-1, 1]) {
      const cz = zm + s * half / 2, cy = topY - ov * r.pitch + rise / 2;
      const m = new THREE.Matrix4().makeRotationX(s * ang); m.setPosition((xA + xB) / 2, cy + th / 2, cz);
      ext.add(roofM, new THREE.BoxGeometry(xB - xA, th, L + 0.02), m, 1.6);
      const ez = zm + s * half;
      ext.aabb(trimM, xA, topY - ov * r.pitch - 0.16, ez - 0.04, xB, topY - ov * r.pitch + 0.06, ez + 0.04, 1);
      const g = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, xB - xA, 10, 1, false, 0, Math.PI), gutterM);
      g.rotation.z = Math.PI / 2; g.rotation.x = s > 0 ? -Math.PI / 2 : Math.PI / 2;
      g.position.set((xA + xB) / 2, topY - ov * r.pitch - 0.05, ez + s * 0.08); info.group.add(g);
    }
    ext.aabb(trimM, xA, ridgeY + th * 0.6, zm - 0.12, xB, ridgeY + th * 0.6 + 0.12, zm + 0.12, 1);
    const tri = new THREE.Shape();
    tri.moveTo(zb, topY); tri.lineTo(zf, topY); tri.lineTo(zm, topY + (zf - zb) / 2 * r.pitch); tri.closePath();
    for (const x of [x0, x1 - WT]) {
      const g = new THREE.ExtrudeGeometry(tri, { depth: WT, bevelEnabled: false });
      g.rotateY(-Math.PI / 2); g.translate(x + WT, 0, 0);
      ext.add(wallM, g, null, 2);
    }
    // cross-section at z=0
    const yAt0 = topY + Math.max(0, (zf - 0)) * r.pitch;
    w2d.solid(xA, topY, xB, Math.min(ridgeY, yAt0) + th, 'roof');
    const pts = [];
    for (const x of [xA, xB]) {
      pts.push(new THREE.Vector3(x, topY - ov * r.pitch, zb - ov), new THREE.Vector3(x, topY - ov * r.pitch, zf + ov), new THREE.Vector3(x, ridgeY + th, zm));
    }
    staticConvex(pts, { friction: 0.35 });
    info.ridgeY = ridgeY;
  }
}
