// Assembles the town: ground, streets, buildings, distant scenery.
import * as THREE from 'three';
import { Batcher } from './geo.js';
import { M, texMat, color } from './materials.js';
import { T, rand, setSeed } from './textures.js';
import { LEVEL } from './level.js';
import { buildHouse } from './building.js';
import { buildMansion, buildBlock } from './bigbuildings.js';
import { staticBox } from './physics.js';

export function buildTown(ctx) {
  const { scene, w2d } = ctx;
  const town = { houses: {}, openings: new Map(), rooms: [], mansion: null };
  buildGround(ctx);
  for (const b of LEVEL.buildings) {
    let info;
    if (b.type === 'house' || b.type === 'shop') info = buildHouse(b, ctx);
    else if (b.type === 'mansion') info = buildMansion(b, ctx);
    else if (b.type === 'block') info = buildBlock(b, ctx);
    town.houses[b.id] = info;
    if (b.type === 'mansion') town.mansion = info;
    for (const o of info.openings || []) town.openings.set(o.id, o);
    for (const r of info.rooms || []) town.rooms.push({ ...r, house: b.id });
  }
  buildBackdrop(ctx);
  return town;
}

function buildGround(ctx) {
  const { scene, w2d } = ctx;
  const B = new Batcher();
  const edge = LEVEL.edgeX;
  const asph = texMat('asph', T.asphalt, [1, 1], { roughness: 0.94, color: 0xd8d8d8 });
  const lotM = texMat('lot', T.concrete, [1, 1], { roughness: 0.92, color: 0xcfcbc2 });
  const lineM = color(0xe9e7df, 0.7);
  // front street (east-west) and far north lots
  B.aabb(asph, -80, -0.3, 1.6, edge, 0, 10.5, 6);
  B.aabb(lineM, -80, 0, 2.05, edge, 0.004, 2.17, 1, { noShadow: true });
  B.aabb(lineM, -80, 0, 9.9, edge, 0.004, 10.02, 1, { noShadow: true });
  // curb + sidewalk on the camera side
  B.aabb(M.concrete, -80, -0.3, 10.5, edge, 0.14, 12.5, 2);
  // foreground lots toward the camera
  B.aabb(lotM, -80, -0.3, 12.5, edge, 0.12, 140, 3);
  // behind / between buildings
  for (const s of LEVEL.streets) {
    const mat = s.kind === 'road' ? asph : s.kind === 'park' ? M.soil : lotM;
    B.aabb(mat, s.x0, -0.3, -30, s.x1, 0.001, 1.6, s.kind === 'road' ? 6 : 3);
  }
  // lots under buildings
  for (const b of LEVEL.buildings) B.aabb(lotM, b.x0 - 0.01, -0.3, -30, b.x1 + 0.01, 0.0, 1.6, 3);
  B.aabb(asph, -80, -0.3, -30, -30, 0, 1.6, 6);
  // gutter grating along the front street
  const grate = color(0x3b3a38, 0.6, 0.6);
  B.aabb(grate, -80, -0.02, 1.62, edge, 0.005, 1.9, 1, { noShadow: true });
  B.build(scene, { cast: false, receive: true });

  // ground in gameplay terms: it is parallel to gravity, so it's a side wall
  w2d.solid(-200, -5, edge, 0, 'ground');
  staticBox(-200, -3, -60, edge, 0, 60, { friction: 0.2 });

  // east edge: the embankment falls away to a wide river valley
  const G2 = new Batcher();
  const grassM = texMat('bankgrass', T.grass, [1, 1], { roughness: 0.96, color: 0xb9c79a });
  const slope = new THREE.Matrix4().makeRotationZ(-0.62);
  slope.setPosition(edge + 5.2, -3.6, -10);
  G2.add(grassM, new THREE.BoxGeometry(13.5, 0.5, 90), slope, 4);
  G2.aabb(M.concrete, edge - 0.2, -0.4, -60, edge + 0.4, 0.05, 60, 2);
  // river flats, far bank
  G2.aabb(texMat('flats', T.grass, [1, 1], { roughness: 0.97, color: 0x8f9a74 }), edge + 10, -7.5, -200, edge + 140, -7.2, 200, 10);
  G2.build(scene, { cast: false, receive: true });
  const river = new THREE.Mesh(new THREE.PlaneGeometry(90, 400), new THREE.MeshStandardMaterial({ color: 0x5d7480, roughness: 0.12, metalness: 0.4 }));
  river.rotation.x = -Math.PI / 2; river.position.set(edge + 75, -7.15, 0);
  scene.add(river);
}

// distant town & hills (low detail, fogged)
function buildBackdrop(ctx) {
  const { scene } = ctx;
  setSeed(99);
  const box = new THREE.BoxGeometry(1, 1, 1);
  box.translate(0, 0.5, 0);
  const tints = [0xcfc6b6, 0xb9ad9a, 0xd9d4ca, 0xa39a8c, 0xb4bcc2, 0x9c948a, 0xc7b8a2, 0x8f97a0];
  const mats = tints.map(c => { const m = new THREE.MeshStandardMaterial({ color: c, roughness: 0.9 }); m.userData.facade = true; return m; });
  const roofs = [0x3e4148, 0x5a4e46, 0x4b5057].map(c => color(c, 0.8));
  const n = 900;
  const bodies = mats.map(m => new THREE.InstancedMesh(box, m, n));
  const caps = roofs.map(m => new THREE.InstancedMesh(box, m, n));
  const cnt = new Array(mats.length).fill(0), ccnt = new Array(roofs.length).fill(0);
  const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  const place = (x, z, w, d, h, roof = true) => {
    const i = Math.floor(rand() * mats.length);
    if (cnt[i] >= n) return;
    mtx.compose(p.set(x, 0, z), q.identity(), s.set(w, h, d));
    bodies[i].setMatrixAt(cnt[i]++, mtx);
    if (roof) {
      const j = Math.floor(rand() * roofs.length);
      if (ccnt[j] >= n) return;
      mtx.compose(p.set(x, h, z), q.identity(), s.set(w + 0.6, 0.35 + rand() * 0.6, d + 0.6));
      caps[j].setMatrixAt(ccnt[j]++, mtx);
    }
  };
  // rows of houses behind the playable strip
  for (let row = 0; row < 7; row++) {
    const z = -16 - row * 11 - rand() * 2;
    for (let x = -120; x < LEVEL.edgeX - 2; x += 8 + rand() * 4) {
      const tall = rand() < 0.08;
      place(x + rand() * 2, z, 6 + rand() * 3, 7 + rand() * 2, tall ? 12 + rand() * 18 : 5.5 + rand() * 2.5, !tall);
    }
  }
  // across the valley: a hazy far town
  for (let i = 0; i < 420; i++) {
    const x = LEVEL.edgeX + 150 + rand() * 500, z = -300 + rand() * 520;
    place(x, z, 8 + rand() * 12, 8 + rand() * 12, 6 + rand() * (rand() < 0.15 ? 40 : 10), false);
  }
  // upstream side (behind the mansion)
  for (let i = 0; i < 80; i++) place(-40 - rand() * 120, -10 + rand() * 30, 8 + rand() * 6, 8 + rand() * 6, 6 + rand() * 20, rand() < 0.5);
  bodies.forEach((b, i) => { b.count = cnt[i]; b.receiveShadow = true; b.castShadow = false; scene.add(b); });
  caps.forEach((b, i) => { b.count = ccnt[i]; scene.add(b); });

  // hills on the horizon
  const hillM = new THREE.MeshStandardMaterial({ color: 0x7d8f80, roughness: 1 });
  for (let i = 0; i < 9; i++) {
    const r = 160 + rand() * 220;
    const h = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 12), hillM);
    h.scale.y = 0.09 + rand() * 0.07;
    h.position.set(500 + rand() * 800, -12, -900 + rand() * 1300);
    scene.add(h);
  }
  for (let i = 0; i < 7; i++) {
    const r = 180 + rand() * 200;
    const h = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 12), hillM);
    h.scale.y = 0.1 + rand() * 0.06;
    h.position.set(-300 + rand() * 1100, -12, -900 - rand() * 300);
    scene.add(h);
  }
}
