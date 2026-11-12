// 道路・縁石・歩道・街並み・動物園ゲート・小物・軌跡
import * as THREE from '../vendor/three.module.min.js';
import { makePath, buildRibbon, mergeGeometries, dirOf, leftOf, mulberry32, clamp } from './geom.js';
import * as TEX from './textures.js';

export function createEnvironment(renderer) {
  const pm = new THREE.PMREMGenerator(renderer);
  const s = new THREE.Scene();
  const skyG = new THREE.SphereGeometry(50, 24, 16);
  const cols = [];
  const p = skyG.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i) / 50;
    const c = new THREE.Color();
    if (y > 0) c.lerpColors(new THREE.Color(0xbfe0f8), new THREE.Color(0x3f8fe0), Math.pow(y, 0.7));
    else c.lerpColors(new THREE.Color(0xb7b4ac), new THREE.Color(0x4d7a35), Math.pow(-y, 0.6));
    cols.push(c.r, c.g, c.b);
  }
  skyG.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  s.add(new THREE.Mesh(skyG, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide })));
  const sun = new THREE.Mesh(new THREE.SphereGeometry(4, 12, 12), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  sun.position.set(20, 30, 15); s.add(sun);
  const env = pm.fromScene(s, 0.04).texture;
  pm.dispose();
  return env;
}

export class World {
  constructor(scene, env) {
    this.scene = scene;
    this.env = env;
    this.root = new THREE.Group();
    scene.add(this.root);
    this.tex = {
      asphalt: TEX.asphaltTexture(), asphaltR: TEX.asphaltRoughness(), paver: TEX.paverTexture(), grass: TEX.grassTexture(), concrete: TEX.concreteTexture(),
    };
    this.tex.grass.repeat.set(80, 80);
    this.tex.paver.repeat.set(1, 1);
    this.matAsphalt = new THREE.MeshStandardMaterial({ map: this.tex.asphalt, roughnessMap: this.tex.asphaltR, roughness: 0.95, metalness: 0.0, color: 0xbdbdbd });
    this.matLine = new THREE.MeshStandardMaterial({ color: 0xf2f2ee, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    this.matCurb = new THREE.MeshStandardMaterial({ map: this.tex.concrete, roughness: 0.8, color: 0xd8d6cf, side: THREE.DoubleSide });
    this.matPaver = new THREE.MeshStandardMaterial({ map: this.tex.paver, roughness: 0.9, color: 0xcfcbc2 });
    this.matGrass = new THREE.MeshStandardMaterial({ map: this.tex.grass, roughness: 1 });
    this.matTrunk = new THREE.MeshStandardMaterial({ color: 0x6b4a2b, roughness: 0.9 });
    this.matLeaf = new THREE.MeshStandardMaterial({ color: 0x3f9a3a, roughness: 0.85, flatShading: true });
    this.matLeaf2 = new THREE.MeshStandardMaterial({ color: 0x6fb64a, roughness: 0.85, flatShading: true });
    this.matPole = new THREE.MeshStandardMaterial({ color: 0x8e9299, roughness: 0.45, metalness: 0.7, envMap: env });
    this.matCone = new THREE.MeshStandardMaterial({ color: 0xff5a1f, roughness: 0.55 });
    this.matConeBand = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
    this.matBrick = new THREE.MeshStandardMaterial({ color: 0xb4614a, roughness: 0.9 });
    this.matWood = new THREE.MeshStandardMaterial({ color: 0x9c6b3c, roughness: 0.8 });
    this.matFence = new THREE.MeshStandardMaterial({ color: 0x3d6b3a, roughness: 0.6, metalness: 0.3 });
    this.levelRoot = null;
    this._buildStatic();
  }

  _buildStatic() {
    // 地面（芝）
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), this.matGrass);
    ground.rotation.x = -Math.PI / 2; ground.position.y = -0.03; ground.receiveShadow = true;
    this.root.add(ground);
    // 空
    const skyTex = TEX.skyGradientTexture();
    const sky = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), new THREE.MeshBasicMaterial({ map: skyTex, side: THREE.BackSide, fog: false }));
    this.root.add(sky);
    // 雲
    const cloudMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, fog: false });
    const rnd = mulberry32(5);
    for (let i = 0; i < 14; i++) {
      const g = new THREE.Group();
      const n = 3 + Math.floor(rnd() * 4);
      for (let k = 0; k < n; k++) {
        const m = new THREE.Mesh(new THREE.SphereGeometry(6 + rnd() * 8, 10, 8), cloudMat);
        m.position.set((k - n / 2) * 8, rnd() * 3, rnd() * 4); g.add(m);
      }
      const a = rnd() * Math.PI * 2, r = 180 + rnd() * 120;
      g.position.set(Math.cos(a) * r, 70 + rnd() * 30, Math.sin(a) * r);
      this.root.add(g);
    }
  }

  clearLevel() {
    if (this.levelRoot) { this.root.remove(this.levelRoot); this.levelRoot.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }
    this.levelRoot = new THREE.Group();
    this.root.add(this.levelRoot);
    this.cones = [];
    this.gateInfo = null;
  }

  buildLevel(level) {
    this.clearLevel();
    const rnd = mulberry32(level.seed);
    const path = makePath(level.segments, 0.5);
    this.path = path;
    this.roadWidth = level.width;
    const hw = level.width / 2;
    const S = path.samples;
    const L = this.levelRoot;
    const up = 0;
    const off = (smp, lat, y = 0) => { const l = leftOf(smp.theta); return new THREE.Vector3(smp.p.x + l.x * lat, y, smp.p.z + l.z * lat); };

    // 路面
    const road = new THREE.Mesh(buildRibbon(S, s => off(s, hw), s => off(s, -hw), { vScale: 1 / 6, uRange: 1.4 }), this.matAsphalt);
    road.receiveShadow = true; L.add(road);
    // 白線：外側の実線・中央の破線
    const lineGeos = [];
    lineGeos.push(buildRibbon(S, s => off(s, hw - 0.35, 0.01), s => off(s, hw - 0.2, 0.01)));
    lineGeos.push(buildRibbon(S, s => off(s, -hw + 0.2, 0.01), s => off(s, -hw + 0.35, 0.01)));
    for (let i = 0; i < S.length - 1; i++) {
      if (Math.floor(S[i].s / 3) % 2 === 0) {
        lineGeos.push(buildRibbon([S[i], S[i + 1]], s => off(s, 0.08, 0.01), s => off(s, -0.08, 0.01)));
      }
    }
    const lines = new THREE.Mesh(mergeGeometries(lineGeos), this.matLine);
    lines.receiveShadow = true; L.add(lines);
    // 縁石（内側の面・上面）と歩道
    const curbH = 0.16, curbW = 0.35, walkW = 3.0;
    const curbGeos = [];
    for (const side of [1, -1]) {
      const a = hw * side, bq = (hw + curbW) * side;
      curbGeos.push(buildRibbon(S, s => off(s, a, 0), s => off(s, a, curbH), { vScale: 0.5 }));       // 内側の立ち上がり
      curbGeos.push(buildRibbon(S, s => off(s, a, curbH), s => off(s, bq, curbH), { vScale: 0.5 }));   // 上面
      const walk = new THREE.Mesh(buildRibbon(S, s => off(s, bq, curbH), s => off(s, (hw + curbW + walkW) * side, curbH), { vScale: 1 / 2, uRange: 1.5 }), this.matPaver);
      walk.receiveShadow = true; L.add(walk);
      const drop = new THREE.Mesh(buildRibbon(S, s => off(s, (hw + curbW + walkW) * side, curbH), s => off(s, (hw + curbW + walkW + 0.05) * side, -0.05)), this.matCurb);
      L.add(drop);
    }
    const curbMesh = new THREE.Mesh(mergeGeometries(curbGeos), this.matCurb);
    curbMesh.receiveShadow = true; curbMesh.castShadow = true; L.add(curbMesh);
    this.curbTop = curbH;
    this.walkOuter = hw + curbW + walkW;

    // ---- 小物 ----
    const arc = path.arcs[0];
    const lastArc = path.arcs[path.arcs.length - 1];
    // コーン：最初のカーブの内側の歩道に等間隔（軌道の差を測る目盛り）
    for (let i = 0; i < level.coneCount; i++) {
      const t = (i + 0.5) / level.coneCount;
      const sm = path.at(arc.s0 + (arc.s1 - arc.s0) * t);
      const p = off(sm, arc.dir * (hw + curbW + 0.45), curbH);
      this.addCone(p);
    }
    // 曲がり角の外側に誘導板（チェブロン）
    {
      const sm = path.at((arc.s0 + arc.s1) / 2);
      const p = off(sm, -arc.dir * (hw + curbW + 1.4), curbH);
      this.addChevron(p, sm.theta, arc.dir);
    }
    // カーブ注意の標識：カーブ手前の左歩道
    {
      const sm = path.at(Math.max(4, arc.s0 - 9));
      const p = off(sm, hw + curbW + 0.7, curbH);
      this.addCurveSign(p, sm.theta, arc.dir);
    }
    // 街灯：外側歩道に一定間隔
    for (let s = 12; s < path.total - 6; s += 16) {
      const sm = path.at(s);
      const side = (Math.floor(s / 16) % 2 === 0) ? -1 : 1;
      this.addLamp(off(sm, side * (hw + curbW + 2.4), curbH), sm.theta - side * Math.PI / 2);
    }
    // 始点と終点のバス停
    {
      const smE = path.at(path.total - 4);
      this.addBusStop(off(smE, hw + curbW + 1.0, curbH), smE.theta, true);
      const smS = path.at(6);
      this.addBusStop(off(smS, hw + curbW + 1.0, curbH), smS.theta, false);
    }
    // 動物園ゲート（終点の道路をまたぐ）
    {
      const smG = path.at(path.total - 13);
      this.addGate(smG, hw + curbW + walkW);
      this.gateInfo = { s: path.total - 13 };
    }
    // 柵：最後の直線の両側
    {
      const s0 = lastArc.s1 + 3, s1 = path.total - 14;
      this.addFence(path, s0, s1, hw + curbW + walkW + 0.3);
    }
    // 動物たち（ゲートの奥）
    {
      const smA = path.at(path.total - 6);
      const l = leftOf(smA.theta), d = dirOf(smA.theta);
      const pg = off(smA, hw + curbW + walkW + 6, 0).addScaledVector(d, -2);
      this.addGiraffe(pg, smA.theta + Math.PI * 0.9);
      const pe = off(smA, -(hw + curbW + walkW + 7), 0).addScaledVector(d, -3);
      this.addElephant(pe, smA.theta + Math.PI * 1.15);
    }
    // 樹木（インスタンス）
    this.addTrees(path, rnd, hw + curbW + walkW);
    // 遠景の建物
    this.addBuildings(path, rnd);
  }

  addCone(p) {
    const g = new THREE.Group();
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.72, 16), this.matCone);
    cone.position.y = 0.36; cone.castShadow = true;
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.135, 0.165, 0.12, 16), this.matConeBand);
    band.position.y = 0.42;
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.04, 0.44), this.matCone);
    base.position.y = 0.02;
    g.add(cone, band, base);
    g.position.copy(p);
    this.levelRoot.add(g);
    this.cones.push({ node: g, p: p.clone(), fallen: false, t: 0, axis: new THREE.Vector3(1, 0, 0) });
  }

  addChevron(p, theta, dir) {
    const g = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.4, 8), this.matPole);
    pole.position.y = 0.7; g.add(pole);
    const board = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.6), new THREE.MeshStandardMaterial({ map: TEX.chevronTexture(dir), roughness: 0.5, side: THREE.DoubleSide }));
    board.position.y = 1.55; board.castShadow = true; g.add(board);
    g.position.copy(p); g.rotation.y = theta + Math.PI;
    this.levelRoot.add(g);
  }

  addCurveSign(p, theta, dir) {
    const g = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.6, 8), this.matPole);
    pole.position.y = 1.3; pole.castShadow = true; g.add(pole);
    const board = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.1), new THREE.MeshStandardMaterial({ map: TEX.curveSignTexture(dir), transparent: true, roughness: 0.4, side: THREE.DoubleSide }));
    board.position.y = 2.6; g.add(board);
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.72, 0.03), this.matPole);
    back.position.set(0, 2.6, 0.02); back.rotation.z = Math.PI / 4; g.add(back);
    g.position.copy(p); g.rotation.y = theta + Math.PI;
    this.levelRoot.add(g);
  }

  addLamp(p, theta) {
    const g = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.11, 6.5, 10), this.matPole);
    pole.position.y = 3.25; pole.castShadow = true; g.add(pole);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 1.6), this.matPole);
    arm.position.set(0, 6.4, 0.6); g.add(arm);
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.14, 0.7), new THREE.MeshStandardMaterial({ color: 0xeeeeee, emissive: 0xfff2c0, emissiveIntensity: 0.4 }));
    lamp.position.set(0, 6.35, 1.3); g.add(lamp);
    g.position.copy(p); g.rotation.y = theta;
    this.levelRoot.add(g);
  }

  addBusStop(p, theta, withShelter) {
    const g = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.6, 8), this.matPole);
    pole.position.y = 1.3; pole.castShadow = true; g.add(pole);
    const sign = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.05, 32), new THREE.MeshStandardMaterial({ map: TEX.signTexture({ w: 256, h: 256, bg: '#ffffff', fg: '#1a4fbf', text: 'バス', font: 88, border: '#1a4fbf', radius: 120 }), roughness: 0.4 }));
    sign.rotation.x = Math.PI / 2; sign.position.y = 2.65; g.add(sign);
    if (withShelter) {
      const sh = new THREE.Group();
      for (const dx of [-2, 2]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.6, 0.12), this.matPole);
        post.position.set(dx, 1.3, 0); sh.add(post);
      }
      const roof = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.12, 2.0), new THREE.MeshStandardMaterial({ color: 0x2a6fb8, roughness: 0.4, metalness: 0.4 }));
      roof.position.set(0, 2.66, -0.6); roof.castShadow = true; sh.add(roof);
      const back = new THREE.Mesh(new THREE.BoxGeometry(4.4, 2.0, 0.06), new THREE.MeshPhysicalMaterial({ color: 0x9fc4dc, transparent: true, opacity: 0.45, roughness: 0.1, metalness: 0.2 }));
      back.position.set(0, 1.5, -1.5); sh.add(back);
      const bench = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.1, 0.45), this.matWood);
      bench.position.set(0, 0.5, -1.1); sh.add(bench);
      sh.position.set(0, 0, 1.4);
      g.add(sh);
    }
    g.position.copy(p); g.rotation.y = theta + Math.PI / 2;
    this.levelRoot.add(g);
  }

  addGate(sm, halfSpan) {
    const g = new THREE.Group();
    const d = dirOf(sm.theta);
    for (const side of [-1, 1]) {
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(1.4, 6.0, 1.4), this.matBrick);
      pillar.position.set(side * (halfSpan + 0.9), 3.0, 0); pillar.castShadow = true; g.add(pillar);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.3, 1.7), this.matCurb);
      cap.position.set(side * (halfSpan + 0.9), 6.15, 0); g.add(cap);
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 12), new THREE.MeshStandardMaterial({ color: 0xf0c020, metalness: 0.7, roughness: 0.3, envMap: this.env }));
      ball.position.set(side * (halfSpan + 0.9), 6.8, 0); g.add(ball);
    }
    const beam = new THREE.Mesh(new THREE.BoxGeometry(halfSpan * 2 + 1.8, 1.4, 0.5), new THREE.MeshStandardMaterial({ color: 0x2f7a3a, roughness: 0.5 }));
    beam.position.set(0, 6.6, 0); beam.castShadow = true; g.add(beam);
    const board = new THREE.Mesh(new THREE.PlaneGeometry(halfSpan * 1.6, 1.15), new THREE.MeshStandardMaterial({ map: TEX.signTexture({ w: 1024, h: 256, bg: '#fff8e1', fg: '#2a6f2f', text: 'どうぶつえん  🦁 🐘 🦒', font: 120, border: '#2a6f2f', radius: 40 }), roughness: 0.45 }));
    board.position.set(0, 6.6, -0.27); board.rotation.y = Math.PI; g.add(board);
    g.position.copy(sm.p); g.rotation.y = sm.theta;
    this.levelRoot.add(g);
  }

  addFence(path, s0, s1, lat) {
    const railGeos = [];
    const posts = [];
    for (const side of [1, -1]) {
      const samples = [];
      for (let s = s0; s <= s1; s += 1.0) samples.push(path.at(s));
      const offp = (sm, y) => { const l = leftOf(sm.theta); return new THREE.Vector3(sm.p.x + l.x * lat * side, y, sm.p.z + l.z * lat * side); };
      for (const y of [0.5, 0.95]) {
        railGeos.push(buildRibbon(samples, sm => offp(sm, y - 0.03), sm => offp(sm, y + 0.03)));
      }
      for (let s = s0; s <= s1; s += 2.5) {
        const sm = path.at(s);
        posts.push(offp(sm, 0));
      }
    }
    const rails = new THREE.Mesh(mergeGeometries(railGeos), new THREE.MeshStandardMaterial({ color: 0x3d6b3a, roughness: 0.6, metalness: 0.3, side: THREE.DoubleSide }));
    this.levelRoot.add(rails);
    const postG = new THREE.CylinderGeometry(0.05, 0.05, 1.1, 8);
    const inst = new THREE.InstancedMesh(postG, this.matFence, posts.length);
    const m = new THREE.Matrix4();
    posts.forEach((p, i) => { m.makeTranslation(p.x, 0.55, p.z); inst.setMatrixAt(i, m); });
    inst.castShadow = true;
    this.levelRoot.add(inst);
  }

  addTrees(path, rnd, minLat) {
    const trunkG = new THREE.CylinderGeometry(0.16, 0.26, 2.4, 8);
    const leafG = new THREE.IcosahedronGeometry(1.8, 1);
    const N = 110;
    const trunks = new THREE.InstancedMesh(trunkG, this.matTrunk, N);
    const leaves = new THREE.InstancedMesh(leafG, this.matLeaf, N);
    const leaves2 = new THREE.InstancedMesh(leafG, this.matLeaf2, N);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), pos = new THREE.Vector3();
    let placed = 0, tries = 0;
    // パスの外接範囲
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const s of path.samples) { minX = Math.min(minX, s.p.x); maxX = Math.max(maxX, s.p.x); minZ = Math.min(minZ, s.p.z); maxZ = Math.max(maxZ, s.p.z); }
    while (placed < N && tries < 4000) {
      tries++;
      const x = minX - 45 + rnd() * (maxX - minX + 90);
      const z = minZ - 45 + rnd() * (maxZ - minZ + 90);
      const nr = path.nearest(new THREE.Vector3(x, 0, z));
      if (nr.dist < minLat + 4.5) continue;
      // ゲート周りは空ける
      const gs = path.at(path.total - 13);
      if (Math.hypot(x - gs.p.x, z - gs.p.z) < 20 && nr.dist < 16) continue;
      const scale = 0.7 + rnd() * 0.6;
      pos.set(x, 1.2 * scale, z);
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * Math.PI * 2);
      sc.set(scale, scale, scale);
      m.compose(pos, q, sc); trunks.setMatrixAt(placed, m);
      pos.set(x, 3.0 * scale, z);
      sc.set(scale * (0.9 + rnd() * 0.3), scale * (0.9 + rnd() * 0.4), scale * (0.9 + rnd() * 0.3));
      m.compose(pos, q, sc);
      if (rnd() < 0.5) { leaves.setMatrixAt(placed, m); leaves2.setMatrixAt(placed, new THREE.Matrix4().makeScale(0, 0, 0)); }
      else { leaves2.setMatrixAt(placed, m); leaves.setMatrixAt(placed, new THREE.Matrix4().makeScale(0, 0, 0)); }
      placed++;
    }
    trunks.count = placed; leaves.count = placed; leaves2.count = placed;
    trunks.castShadow = true; leaves.castShadow = true; leaves2.castShadow = true;
    this.levelRoot.add(trunks, leaves, leaves2);
  }

  addBuildings(path, rnd) {
    const mid = path.at(path.total / 2).p;
    const n = 16;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + rnd() * 0.3;
      const r = 95 + rnd() * 50;
      const x = mid.x + Math.cos(a) * r, z = mid.z + Math.sin(a) * r;
      const w = 12 + rnd() * 16, h = 14 + rnd() * 26, dpt = 10 + rnd() * 12;
      const tex = TEX.buildingTexture(rnd() * 360);
      tex.repeat.set(w / 12, h / 24);
      const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.8 });
      const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, dpt), mat);
      b.position.set(x, h / 2, z); b.rotation.y = rnd() * Math.PI;
      this.levelRoot.add(b);
    }
  }

  addGiraffe(p, yaw) {
    const g = new THREE.Group();
    const spot = new THREE.MeshStandardMaterial({ color: 0xe8b647, roughness: 0.8 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x8a5a24, roughness: 0.8 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, 1.9), spot); body.position.y = 2.2; body.castShadow = true; g.add(body);
    for (const [x, z] of [[-0.35, 0.7], [0.35, 0.7], [-0.35, -0.7], [0.35, -0.7]]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.22, 1.8, 0.22), spot); leg.position.set(x, 0.9, z); g.add(leg);
    }
    const neck = new THREE.Mesh(new THREE.BoxGeometry(0.4, 2.6, 0.4), spot); neck.position.set(0, 3.8, 0.9); neck.rotation.x = -0.25; neck.castShadow = true; g.add(neck);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.42, 0.8), spot); head.position.set(0, 5.1, 1.45); g.add(head);
    for (const x of [-0.12, 0.12]) { const h = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 6), dark); h.position.set(x, 5.45, 1.25); g.add(h); }
    for (let i = 0; i < 9; i++) {
      const s = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 0.02), dark);
      const side = i % 2 ? 1 : -1;
      s.position.set(side * 0.5, 1.9 + (i % 3) * 0.3, -0.7 + Math.floor(i / 3) * 0.6); s.rotation.y = Math.PI / 2; g.add(s);
    }
    g.position.copy(p); g.rotation.y = yaw;
    this.levelRoot.add(g);
  }

  addElephant(p, yaw) {
    const g = new THREE.Group();
    const grey = new THREE.MeshStandardMaterial({ color: 0x8f8f94, roughness: 0.9 });
    const body = new THREE.Mesh(new THREE.SphereGeometry(1.5, 20, 14), grey); body.scale.set(1, 0.85, 1.3); body.position.y = 2.0; body.castShadow = true; g.add(body);
    for (const [x, z] of [[-0.7, 0.9], [0.7, 0.9], [-0.7, -0.9], [0.7, -0.9]]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.36, 1.6, 10), grey); leg.position.set(x, 0.8, z); g.add(leg);
    }
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 12), grey); head.position.set(0, 2.6, 2.0); head.castShadow = true; g.add(head);
    for (const x of [-1, 1]) { const ear = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 10), grey); ear.scale.set(0.25, 1, 0.9); ear.position.set(x * 0.85, 2.7, 1.8); g.add(ear); }
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.24, 1.8, 10), grey); trunk.position.set(0, 1.9, 2.7); trunk.rotation.x = 0.35; g.add(trunk);
    for (const x of [-1, 1]) { const eye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), new THREE.MeshStandardMaterial({ color: 0x111111 })); eye.position.set(x * 0.4, 2.85, 2.7); g.add(eye); }
    g.position.copy(p); g.rotation.y = yaw;
    this.levelRoot.add(g);
  }

  // コーンの当たり判定（車体の矩形に入ったら倒れる）
  updateCones(dt, corners, onKnock) {
    const inRect = (pt, rect) => {
      // rect: 4 corners in order; 凸多角形内判定
      let sign = 0;
      for (let i = 0; i < 4; i++) {
        const a = rect[i], b = rect[(i + 1) % 4];
        const cross = (b.x - a.x) * (pt.z - a.z) - (b.z - a.z) * (pt.x - a.x);
        const s = Math.sign(cross);
        if (s === 0) continue;
        if (sign === 0) sign = s; else if (s !== sign) return false;
      }
      return true;
    };
    for (const c of this.cones) {
      if (!c.fallen) {
        for (const key of ['front', 'rear']) {
          const rect = corners[key];
          if (inRect(c.p, rect)) {
            c.fallen = true; c.t = 0;
            const cx = (rect[0].x + rect[2].x) / 2, cz = (rect[0].z + rect[2].z) / 2;
            // 車体中心から外向きに倒れる
            const dx = c.p.x - cx, dz = c.p.z - cz;
            c.axis.set(-dz, 0, dx).normalize();
            c.pushDir = new THREE.Vector3(dx, 0, dz).normalize();
            onKnock && onKnock(key);
            break;
          }
        }
      } else if (c.t < 1) {
        c.t = Math.min(1, c.t + dt * 2.2);
        const e = 1 - Math.pow(1 - c.t, 3);
        c.node.quaternion.setFromAxisAngle(c.axis, -e * Math.PI / 2 * 0.95);
        c.node.position.copy(c.p).addScaledVector(c.pushDir, e * 0.6);
      }
    }
  }
  resetCones() {
    for (const c of this.cones) { c.fallen = false; c.t = 0; c.node.quaternion.identity(); c.node.position.copy(c.p); }
  }
}

// 地面に描く軌跡（前輪・後輪）
export class Trail {
  constructor(scene, color, width = 0.26, capacity = 3000, y = 0.03) {
    this.cap = capacity; this.width = width; this.y = y;
    const pos = new Float32Array(capacity * 2 * 3);
    const idx = new Uint32Array((capacity - 1) * 6);
    for (let i = 0; i < capacity - 1; i++) {
      const k = i * 2;
      idx.set([k, k + 1, k + 2, k + 1, k + 3, k + 2], i * 6);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.setDrawRange(0, 0);
    this.geo = g;
    this.mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    this.mesh = new THREE.Mesh(g, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 2;
    scene.add(this.mesh);
    this.n = 0;
    this.last = null;
    this.lastDir = new THREE.Vector3(0, 0, 1);
  }
  clear() { this.n = 0; this.last = null; this.geo.setDrawRange(0, 0); }
  push(p, heading) {
    if (this.last && this.last.distanceTo(p) < 0.22) return;
    if (this.n >= this.cap) return;
    const l = leftOf(heading);
    const arr = this.geo.attributes.position.array;
    const k = this.n * 6;
    const w = this.width / 2;
    arr[k] = p.x + l.x * w; arr[k + 1] = this.y; arr[k + 2] = p.z + l.z * w;
    arr[k + 3] = p.x - l.x * w; arr[k + 4] = this.y; arr[k + 5] = p.z - l.z * w;
    this.n++;
    this.last = p.clone();
    this.geo.attributes.position.needsUpdate = true;
    this.geo.setDrawRange(0, Math.max(0, (this.n - 1) * 6));
  }
  // 別の軌跡（ゴースト）へ内容をコピー
  copyTo(other) {
    other.geo.attributes.position.array.set(this.geo.attributes.position.array);
    other.n = this.n; other.last = this.last ? this.last.clone() : null;
    other.geo.attributes.position.needsUpdate = true;
    other.geo.setDrawRange(0, Math.max(0, (this.n - 1) * 6));
  }
}

// 目標マーカー（リング＋矢印＋点線）
export class TargetMarker {
  constructor(scene) {
    this.group = new THREE.Group();
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.95, depthWrite: false });
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.25, 40), ringMat);
    this.ring.rotation.x = -Math.PI / 2; this.ring.position.y = 0.05; this.ring.renderOrder = 3;
    this.ring2 = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.45, 24), ringMat);
    this.ring2.rotation.x = -Math.PI / 2; this.ring2.position.y = 0.05; this.ring2.renderOrder = 3;
    // 立体の矢印（浮かんでゆれる）
    const arrowMat = new THREE.MeshStandardMaterial({ color: 0xffd23f, emissive: 0xff9a00, emissiveIntensity: 0.5, roughness: 0.4 });
    this.arrow = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.2, 4), arrowMat);
    this.arrow.rotation.x = Math.PI; this.arrow.position.y = 2.2; this.arrow.castShadow = true;
    this.group.add(this.ring, this.ring2, this.arrow);
    this.group.visible = false;
    scene.add(this.group);
    // 点線
    const dotG = new THREE.CircleGeometry(0.16, 12); dotG.rotateX(-Math.PI / 2);
    this.dots = new THREE.InstancedMesh(dotG, new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.8, depthWrite: false }), 24);
    this.dots.renderOrder = 3; this.dots.frustumCulled = false; this.dots.visible = false;
    scene.add(this.dots);
    this._m = new THREE.Matrix4();
    this.t = 0;
  }
  set(p) { this.group.position.set(p.x, 0, p.z); this.group.visible = true; this.dots.visible = true; }
  hide() { this.group.visible = false; this.dots.visible = false; }
  update(dt, from) {
    if (!this.group.visible) return;
    this.t += dt;
    const s = 1 + Math.sin(this.t * 5) * 0.08;
    this.ring.scale.set(s, s, 1);
    this.arrow.position.y = 2.0 + Math.sin(this.t * 4) * 0.25;
    this.arrow.rotation.y += dt * 1.5;
    if (from) {
      const to = this.group.position;
      const dist = Math.hypot(to.x - from.x, to.z - from.z);
      const n = clamp(Math.floor(dist / 1.4), 0, 24);
      for (let i = 0; i < 24; i++) {
        if (i < n) {
          const t = (i + 0.5 + ((this.t * 1.2) % 1)) / (n + 1);
          this._m.makeTranslation(from.x + (to.x - from.x) * t, 0.04, from.z + (to.z - from.z) * t);
        } else this._m.makeScale(0, 0, 0);
        this.dots.setMatrixAt(i, this._m);
      }
      this.dots.instanceMatrix.needsUpdate = true;
    }
  }
}
