// The colossal domino (6|1, red band, brass ring - the same identity as D1) and
// everything built on it. All of it lives in one group whose origin is the
// pivot under the seam, so the whole town can tilt as a single rigid body.
import * as THREE from 'three';
import { L, DOM, TOWN_Y } from './layout.js';
import { noiseTex, slateTex } from './textures.js';
import { MATS } from './world.js';
import { Domino, brassMat } from './domino.js';
import { AXIS_X, makeRng } from './util.js';

const PX = L.seamX; // town-local x = world x - PX
export const tl = (x, y, z) => new THREE.Vector3(x - PX, y, z);

// The colossal slab: a rounded rectangle in plan (big domino corners) with a
// soft bevelled edge, extruded upward. Top uses world-scaled paving UVs.
export const CD_BEVEL = 0.6, CD_CORNER = 2.6;
function colossalSlab(topMat, sideMat) {
  const b = CD_BEVEL, hx = (L.cd.x1 - L.cd.x0) / 2 - b, hz = (L.cd.z1 - L.cd.z0) / 2 - b, r = CD_CORNER - b;
  const sh = new THREE.Shape();
  sh.moveTo(-hx + r, -hz); sh.lineTo(hx - r, -hz); sh.quadraticCurveTo(hx, -hz, hx, -hz + r);
  sh.lineTo(hx, hz - r); sh.quadraticCurveTo(hx, hz, hx - r, hz); sh.lineTo(-hx + r, hz);
  sh.quadraticCurveTo(-hx, hz, -hx, hz - r); sh.lineTo(-hx, -hz + r); sh.quadraticCurveTo(-hx, -hz, -hx + r, -hz);
  const T = L.cd.y1 - L.cd.y0;
  const g = new THREE.ExtrudeGeometry(sh, { depth: T - 2 * b, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelSegments: 4, curveSegments: 10 });
  g.rotateX(-Math.PI / 2); g.translate(0, b, 0);
  const m = new THREE.Mesh(g, [topMat, sideMat]);
  m.position.set((L.cd.x0 + L.cd.x1) / 2 - PX, L.cd.y0, 0);
  m.castShadow = true; m.receiveShadow = true;
  return m;
}

export function buildTown(scene, rng = makeRng(5)) {
  const group = new THREE.Group(); group.name = 'town';
  group.position.set(PX, 0, 0); scene.add(group);
  const add = (o) => { group.add(o); return o; };
  const Y = TOWN_Y;

  const paving = noiseTex({ base: '#f0e6cf', seed: 21, size: 256, spots: [{ n: 30, r: [8, 22], c: 'rgba(205,190,160,0.22)' }, { n: 160, r: [1, 2.5], c: 'rgba(255,255,245,0.45)' }] });
  // faint joint lines every tile -> reads as a paved ivory ground up close
  const pc = paving.image.getContext('2d'); pc.strokeStyle = 'rgba(150,130,100,0.25)'; pc.lineWidth = 2; pc.strokeRect(1, 1, 254, 254); paving.needsUpdate = true;
  paving.repeat.set(0.25, 0.25);
  const topMat = new THREE.MeshStandardMaterial({ map: paving, roughness: 0.55 });
  const sideTex = noiseTex({ base: '#eee4cc', seed: 22, size: 256, streaks: 10, spots: [{ n: 24, r: [10, 30], c: 'rgba(215,200,170,0.18)' }, { n: 260, r: [0.8, 1.6], c: 'rgba(140,120,90,0.18)' }] });
  sideTex.repeat.set(0.2, 0.2);
  const sideMat = new THREE.MeshStandardMaterial({ map: sideTex, roughness: 0.55 });
  const slab = add(colossalSlab(topMat, sideMat));
  const left = slab, right = slab;
  // D1's red band, 14%..24% from its top end (the top end of the colossus is x1), on both long sides
  const bx0 = L.cd.x1 - 0.24 * (L.cd.x1 - L.cd.x0), bx1 = L.cd.x1 - 0.14 * (L.cd.x1 - L.cd.x0);
  const bandMat = new THREE.MeshStandardMaterial({ color: 0xc43a28, roughness: 0.6 });
  for (const zz of [L.cd.z1 + 0.012, L.cd.z0 - 0.012]) { const band = new THREE.Mesh(new THREE.PlaneGeometry(bx1 - bx0, (L.cd.y1 - L.cd.y0) - 2 * CD_BEVEL), bandMat); band.position.set((bx0 + bx1) / 2 - PX, 2.5, zz); if (zz < 0) band.rotation.y = Math.PI; add(band); }
  // the centre bar: an engraved hinge line across the whole width (and down the sides)
  const lineMat = new THREE.MeshStandardMaterial({ color: 0x6d5d45, roughness: 0.9 });
  const hiMat = new THREE.MeshStandardMaterial({ color: 0xfbf4e2, roughness: 0.6 });
  const bar = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.03, 21.2), lineMat); bar.position.set(0, Y + 0.005, 0); bar.receiveShadow = true; add(bar);
  const hi = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.03, 21.2), hiMat); hi.position.set(0.26, Y + 0.004, 0); add(hi);
  for (const zz of [L.cd.z1 + 0.014, L.cd.z0 - 0.014]) { const sb = new THREE.Mesh(new THREE.BoxGeometry(0.34, 3.6, 0.02), lineMat); sb.position.set(0, 2.5, zz); add(sb); }
  // the colossal lifting ring on the top end
  const ringG = new THREE.Group(); ringG.position.set(L.cd.x1 - PX, 2.5, 0); add(ringG);
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.35, 0.35, 24), brassMat()); plate.rotation.z = Math.PI / 2; plate.position.x = 0.1; ringG.add(plate);
  const bigRing = new THREE.Mesh(new THREE.TorusGeometry(1.75, 0.36, 12, 40), brassMat()); bigRing.position.x = 2.0; bigRing.castShadow = true; ringG.add(bigRing);

  // Pip plazas: round, dark, slightly sunk-looking. From far away they are pips.
  const slate = new THREE.MeshStandardMaterial({ map: slateTex(4), roughness: 0.8 });
  const rim = new THREE.MeshStandardMaterial({ color: 0xd9ccb0, roughness: 0.7 });
  const plaza = (x, z, r, feature) => {
    const d = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.06, 40), slate); d.position.set(x - PX, Y + 0.02, z); d.receiveShadow = true; add(d);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r + 0.06, 0.09, 6, 48), rim); ring.rotation.x = Math.PI / 2; ring.position.set(x - PX, Y + 0.06, z); ring.receiveShadow = true; add(ring);
    if (feature === 'tree') {
      const t = new THREE.Group(); const tr = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.14, 1.4, 7), MATS.darkWood); tr.position.y = 0.7; t.add(tr);
      const cr = new THREE.Mesh(new THREE.IcosahedronGeometry(r * 0.42, 0), MATS.leaf); cr.position.y = 1.7; cr.scale.y = 1.1; t.add(cr);
      t.traverse((o) => { o.castShadow = true; }); t.position.set(x - PX, Y, z); add(t); return t;
    }
    if (feature === 'well') {
      const w = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.6, 0.55, 16, 1, true), rim); w.position.set(x - PX, Y + 0.3, z); w.castShadow = true; add(w);
      const water = new THREE.Mesh(new THREE.CircleGeometry(0.52, 20), new THREE.MeshStandardMaterial({ color: 0x5c7d86, roughness: 0.15 })); water.rotation.x = -Math.PI / 2; water.position.set(x - PX, Y + 0.4, z); add(water);
    }
    return d;
  };
  const feats = ['tree', null, 'well', 'tree', 'well', null];
  L.pips6.forEach(([x, z], i) => plaza(x, z, L.pipR, feats[i]));
  const bigTree = plaza(L.pip1[0], L.pip1[1], L.pip1R, 'tree');
  bigTree.scale.setScalar(1.4);

  // Rails along the street, with a steel span over the seam
  const railMat = MATS.iron;
  for (const dz of [-0.42, 0.42]) {
    const r = new THREE.Mesh(new THREE.BoxGeometry(L.cd.x1 - L.cd.x0 - 1.2, 0.08, 0.07), railMat);
    r.position.set((L.cd.x0 + L.cd.x1) / 2 - PX, Y + 0.13, L.pathZ + dz); r.receiveShadow = true; add(r);
  }
  const sleeper = new THREE.InstancedMesh(new THREE.BoxGeometry(0.22, 0.09, 1.25), MATS.darkWood, 70);
  const m4 = new THREE.Matrix4(); let n = 0;
  for (let x = L.cd.x0 + 1.4; x < L.cd.x1 - 1.0 && n < 70; x += 0.62) { m4.makeTranslation(x - PX, Y + 0.05, L.pathZ); sleeper.setMatrixAt(n++, m4); }
  sleeper.count = n; sleeper.receiveShadow = true; add(sleeper);
  const buffer = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.6, 1.3), MATS.darkWood); buffer.position.set(L.cd.x1 - 0.9 - PX, Y + 0.3, L.pathZ); buffer.castShadow = true; add(buffer);
  // footbridge planks over the groove for the path

  // Gantry (overhead crane rail) spanning the whole town: portal frames + beam.
  const gantry = new THREE.Group(); add(gantry);
  const postXs = [15.3, 25.0, 34.4, 43.0, 52.0];
  // single posts behind the street with cantilever arms, so the street stays open to view
  for (const x of postXs) {
    const p = new THREE.Mesh(new THREE.BoxGeometry(0.26, L.gantryY - Y + 0.4, 0.26), MATS.darkWood);
    p.position.set(x - PX, (L.gantryY + Y) / 2 + 0.2, L.pathZ - 1.9); p.castShadow = true; gantry.add(p);
    const cb = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.26, 2.3), MATS.darkWood); cb.position.set(x - PX, L.gantryY + 0.55, L.pathZ - 0.85); cb.castShadow = true; gantry.add(cb);
    const br = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.4, 5), MATS.iron); br.position.set(x - PX, L.gantryY - 0.3, L.pathZ - 1.1); br.rotation.x = -0.75; gantry.add(br);
  }
  const mast = new THREE.Mesh(new THREE.BoxGeometry(0.3, 4.2, 0.3), MATS.wood); mast.position.set(15.3 - PX, L.gantryY + 2.1, L.pathZ); gantry.add(mast);

  // Ropeway station: mast + wheel where the long cable from the ditch ends.
  const st = new THREE.Group(); add(st);
  const sm = new THREE.Mesh(new THREE.BoxGeometry(0.34, L.ropeB.y - Y + 0.6, 0.34), MATS.wood); sm.position.set(L.ropeB.x - PX, (L.ropeB.y + Y) / 2 + 0.3, 0.9); sm.castShadow = true; st.add(sm);
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.26, 2.6), MATS.wood); arm.position.set(L.ropeB.x - PX, L.ropeB.y + 0.45, 2.0); st.add(arm);
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.08, 6, 20), MATS.iron); wheel.position.set(L.ropeB.x - PX + 0.3, L.ropeB.y, L.pathZ); st.add(wheel);

  // Loose objects that will react when the whole town tilts.
  const loose = [];
  const barrelMat = new THREE.MeshStandardMaterial({ color: 0x9a6a3c, roughness: 0.8 });
  const crateMat = MATS.wood;
  const addLoose = (kind, x, z) => {
    let m;
    if (kind === 'barrel') { m = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.75, 12), barrelMat); m.rotation.x = Math.PI / 2; m.position.set(x - PX, Y + 0.32, z); }
    else if (kind === 'ball') { m = new THREE.Mesh(new THREE.SphereGeometry(0.28, 14, 10), new THREE.MeshStandardMaterial({ color: 0xd9a33b, roughness: 0.6 })); m.position.set(x - PX, Y + 0.28, z); }
    else { m = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.6, 0.7), crateMat); m.position.set(x - PX, Y + 0.3, z); }
    m.castShadow = true; m.receiveShadow = true; add(m);
    loose.push({ m, kind, x: x - PX, v: 0, z, r: kind === 'crate' ? 0.35 : 0.3, y0: m.position.y, spin: 0 });
  };
  addLoose('barrel', 41.2, 5.6); addLoose('crate', 44.0, -4.8); addLoose('ball', 39.0, -6.0); addLoose('barrel', 49.8, 5.4);
  addLoose('crate', 51.5, -6.5); addLoose('crate', 22.5, 7.2); addLoose('barrel', 27.0, 7.5); addLoose('ball', 24.2, -9.0);
  // lamp posts along the street with hanging lanterns (they swing to stay vertical)
  const lanterns = [];
  const lampMat = new THREE.MeshStandardMaterial({ color: 0xffd79a, emissive: 0xffb84d, emissiveIntensity: 0.6, roughness: 0.4 });
  for (const x of [23.0, 29.0, 40.0, 46.0, 54.0]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 2.6, 6), MATS.iron); post.position.set(x - PX, Y + 1.3, L.pathZ + 2.2); post.castShadow = true; add(post);
    const hang = new THREE.Group(); hang.position.set(x - PX + 0.35, Y + 2.55, L.pathZ + 2.2); add(hang);
    const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 4), MATS.iron); chain.position.y = -0.15; hang.add(chain);
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.28, 0.2), lampMat); lamp.position.y = -0.42; hang.add(lamp);
    const arm2 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.04, 0.04), MATS.iron); arm2.position.set(x - PX + 0.17, Y + 2.57, L.pathZ + 2.2); add(arm2);
    lanterns.push({ g: hang, a: 0, v: 0 });
  }
  return { group, left, right, loose, lanterns, ringG, gantry, station: st, wheel, topMat };
}
