// ピンクのお城：機械式プレート → ロッド → ケーブル → 歯車 → 閂（かんぬき）→ 城門 → 城下町の目覚め
// さらに、はね橋とお菓子屋さん（もう一つのプレートで動くガムボール機）
import * as THREE from '../vendor/three.module.min.js';
import { RoundedBoxGeometry } from '../vendor/addons/RoundedBoxGeometry.js';
import { mergeGeometries } from '../vendor/addons/BufferGeometryUtils.js';
import {
  brickTexture, pavingTexture, chevronTexture, awningTexture, stripeTexture, windowTexture, radialGlowTexture,
  plankTexture, iconTexture, rng,
} from './textures.js';
import { PLATE, SHOP_PLATE } from './course.js';
import { mergeStatic } from './util.js';

const smooth = (u) => (u <= 0 ? 0 : u >= 1 ? 1 : u * u * (3 - 2 * u));
const seg = (t, a, b) => smooth((t - a) / (b - a));

function gearGeometry(r, teeth, h = 0.1, depth = 0.12, hole = 0.3) {
  const s = new THREE.Shape();
  const step = (Math.PI * 2) / teeth;
  for (let k = 0; k < teeth; k++) {
    const a0 = k * step;
    const pts = [[a0, r], [a0 + step * 0.12, r + h], [a0 + step * 0.42, r + h], [a0 + step * 0.54, r]];
    for (const [a, rr] of pts) {
      const x = Math.cos(a) * rr, y = Math.sin(a) * rr;
      if (k === 0 && a === a0) s.moveTo(x, y); else s.lineTo(x, y);
    }
  }
  s.closePath();
  // 肉抜き穴（回転が見やすい）
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + 0.4;
    const hp = new THREE.Path();
    hp.absarc(Math.cos(a) * r * 0.55, Math.sin(a) * r * 0.55, r * hole * 0.6, 0, Math.PI * 2, true);
    s.holes.push(hp);
  }
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelSize: 0.015, bevelThickness: 0.015, bevelSegments: 1, curveSegments: 6 });
  g.translate(0, 0, -depth / 2);
  return g;
}

function rrShape(w, h, r, cx = 0, cy = 0) {
  const s = new THREE.Shape();
  const x = cx - w / 2, y = cy - h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

export class Castle {
  constructor(scene, course, sound) {
    this.scene = scene;
    this.course = course;
    this.sound = sound;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.pickables = [];

    this.m = {
      wall: new THREE.MeshStandardMaterial({ map: brickTexture(), roughness: 0.85 }),
      wallPlain: new THREE.MeshStandardMaterial({ color: 0xf7b3cd, roughness: 0.8 }),
      roofPink: new THREE.MeshStandardMaterial({ color: 0xff6fa8, roughness: 0.45 }),
      gold: new THREE.MeshStandardMaterial({ color: 0xffc94a, metalness: 1, roughness: 0.28, envMapIntensity: 1.2 }),
      brass: new THREE.MeshStandardMaterial({ color: 0xe0a83a, metalness: 0.9, roughness: 0.35 }),
      steel: new THREE.MeshStandardMaterial({ color: 0xb9c0c8, metalness: 0.85, roughness: 0.3 }),
      dark: new THREE.MeshStandardMaterial({ color: 0x24262b, roughness: 0.9 }),
      wood: new THREE.MeshStandardMaterial({ color: 0xa8673a, roughness: 0.75 }),
      white: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 }),
      flag: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7, side: THREE.DoubleSide }),
      glass: new THREE.MeshPhysicalMaterial({ color: 0xe8f6ff, roughness: 0.05, transparent: true, opacity: 0.3, envMapIntensity: 2, depthWrite: false }),
      stone: new THREE.MeshStandardMaterial({ color: 0xdcd6cc, roughness: 0.9 }),
      water: new THREE.MeshStandardMaterial({ color: 0x6cc6f0, roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.88 }),
      yellow: new THREE.MeshStandardMaterial({ color: 0xffd21f, roughness: 0.45 }),
      chev: new THREE.MeshStandardMaterial({ map: chevronTexture(), roughness: 0.5 }),
    };
    this.m.wall.map.repeat.set(1, 1);

    this._plaza();
    this._mechanism();
    this._walls();
    this._gate();
    this._court();
    this._keep();
    this._moatAndDrawbridge();
    this._shop();

    // 動かない部品をまとめる（描画回数を減らす）
    const keep = new Set([
      this.plate, this.rodMesh, this.crank, this.pulley, ...this.beads, this.upBead, ...this.gears.map((g) => g.g),
      this.chainV, ...this.chainDrops, this.doorL, this.doorR, this.barMesh, this.fWater, this.carousel,
      ...this.flags.map((f) => f.fg), this.bell, this.bridgePivot,
      ...this.dbChains.map((c) => c.ch), this.winch, this.lolly, this.shopPlate, this.bigCandy, ...this.rollers,
    ]);
    mergeStatic(this.group, keep);

    // 状態
    this.state = 'closed'; // 'closed' | 'opening' | 'open'
    this.t = 0;
    this.load = 0;
    this.sinkV = 0;
    this.rod = 0;
    this.cable = 0;
    this.bar = 0;
    this.doors = 0;
    this.wake = 0;
    this.drawbridge = 0;
    this.chocks = 0;
    this.gearAngle = 0;
    this.lastTick = 0;
    this.events = [];
    this.celebrate = 0;
    this.shopT = -1;
    this.shopLoad = 0;
  }

  // ---------------------------------------------------------------- 広場
  _plaza() {
    const P = this.course.plaza;
    // 穴（プレートの穴・ロッドの溝・ケーブルの溝）を開けた石畳
    const s = rrShape(P.hx * 2 + 0.4, P.hz * 2 + 0.4, 3, P.cx, -P.cz);
    const hole = new THREE.Path();
    hole.absarc(PLATE.x, -PLATE.z, PLATE.r + 0.06, 0, Math.PI * 2, true);
    s.holes.push(hole);
    const slot = rrShape(0.34, 5.65, 0.08, PLATE.x, -131.625);
    s.holes.push(new THREE.Path(slot.getPoints(4).reverse()));
    const pit = rrShape(0.9, 0.9, 0.1, 54, -134.95);
    s.holes.push(new THREE.Path(pit.getPoints(4).reverse()));
    const chan = rrShape(5.2, 0.3, 0.06, 51.9, -135.62);
    s.holes.push(new THREE.Path(chan.getPoints(4).reverse()));
    const g = new THREE.ShapeGeometry(s, 8);
    const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 4, uv.getY(i) / 4);
    g.rotateX(-Math.PI / 2);
    const pave = new THREE.MeshStandardMaterial({ map: pavingTexture(), roughness: 0.8 });
    const mesh = new THREE.Mesh(g, pave);
    mesh.position.y = 0.025;
    mesh.receiveShadow = true;
    this.group.add(mesh);
  }

  _mechanism() {
    const m = this.m;
    const G = this.group;
    // プレートの穴（暗い内壁と底）
    const pitWall = new THREE.Mesh(new THREE.CylinderGeometry(PLATE.r + 0.06, PLATE.r + 0.06, 0.6, 40, 1, true), new THREE.MeshStandardMaterial({ color: 0x3a3c42, roughness: 0.9, side: THREE.BackSide }));
    pitWall.position.set(PLATE.x, -0.27, PLATE.z);
    G.add(pitWall);
    const pitBottom = new THREE.Mesh(new THREE.CircleGeometry(PLATE.r + 0.06, 40), m.dark);
    pitBottom.rotation.x = -Math.PI / 2;
    pitBottom.position.set(PLATE.x, -0.55, PLATE.z);
    G.add(pitBottom);
    // プレート本体
    this.plate = new THREE.Group();
    this.plate.position.set(PLATE.x, 0, PLATE.z);
    G.add(this.plate);
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(PLATE.r, PLATE.r, 0.12, 48), m.steel);
    disc.position.y = -0.03;
    disc.receiveShadow = true;
    this.plate.add(disc);
    const ringG = new THREE.RingGeometry(PLATE.r - 0.32, PLATE.r - 0.02, 48, 1);
    // ストライプの UV（円周方向）
    const ruv = ringG.attributes.uv, rpos = ringG.attributes.position;
    for (let i = 0; i < ruv.count; i++) {
      const a = Math.atan2(rpos.getY(i), rpos.getX(i));
      const rr = Math.hypot(rpos.getX(i), rpos.getY(i));
      ruv.setXY(i, (a / (Math.PI * 2)) * 6, (rr - (PLATE.r - 0.32)) / 0.3);
    }
    const ringMat = m.chev.clone();
    ringMat.map = m.chev.map.clone();
    ringMat.map.wrapS = THREE.RepeatWrapping;
    ringMat.map.needsUpdate = true;
    const ring = new THREE.Mesh(ringG, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.035;
    ring.receiveShadow = true;
    this.plate.add(ring);
    // 中央の丸い模様と、ボルト
    const center = new THREE.Mesh(new THREE.CircleGeometry(0.42, 32), m.yellow);
    center.rotation.x = -Math.PI / 2;
    center.position.y = 0.034;
    this.plate.add(center);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.03, 8), m.steel);
      b.position.set(Math.cos(a) * (PLATE.r - 0.45), 0.04, Math.sin(a) * (PLATE.r - 0.45));
      this.plate.add(b);
    }
    // 車止め（沈むと出てくる）
    this.chockMeshes = [];
    for (const [cx, cz, rot] of [[0, 1.12, 0], [0, -1.12, Math.PI]]) {
      const ch = new THREE.Mesh(new RoundedBoxGeometry(1.5, 0.14, 0.2, 2, 0.05), m.yellow);
      ch.position.set(cx, -0.1, cz);
      ch.rotation.y = rot;
      this.plate.add(ch);
      this.chockMeshes.push(ch);
    }

    // ロッドの溝（地面の隙間）
    const slotLen = 6.0;
    const sz0 = PLATE.z + PLATE.r - 0.1;
    const slotIn = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.5, slotLen), new THREE.MeshStandardMaterial({ color: 0x33353a, roughness: 0.9, side: THREE.BackSide }));
    slotIn.position.set(PLATE.x, -0.24, sz0 + slotLen / 2);
    G.add(slotIn);
    // ロッド（黄黒のしま）
    this.rodMesh = new THREE.Group();
    this.rodMesh.position.set(PLATE.x, -0.14, sz0 - 0.4);
    G.add(this.rodMesh);
    // 黄黒の帯（輪切りの縞なので、動くと分かる）
    const rc = document.createElement('canvas');
    rc.width = 8; rc.height = 64;
    const rg = rc.getContext('2d');
    rg.fillStyle = '#ffcc00'; rg.fillRect(0, 0, 8, 32);
    rg.fillStyle = '#1d1d1d'; rg.fillRect(0, 32, 8, 32);
    const rt = new THREE.CanvasTexture(rc);
    rt.colorSpace = THREE.SRGBColorSpace;
    rt.wrapS = rt.wrapT = THREE.RepeatWrapping;
    rt.repeat.set(1, 14);
    const rodMat = new THREE.MeshStandardMaterial({ map: rt, metalness: 0.4, roughness: 0.4 });
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 5.4, 12), rodMat);
    rod.rotation.x = Math.PI / 2;
    rod.position.z = 2.7;
    this.rodMesh.add(rod);
    // プレート下のベルクランク（隙間から見える）
    this.crank = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.5, 0.12), m.brass);
    this.crank.position.set(PLATE.x, -0.3, sz0);
    G.add(this.crank);

    // 滑車の穴
    const pitIn = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.5, 0.9), new THREE.MeshStandardMaterial({ color: 0x33353a, roughness: 0.9, side: THREE.BackSide }));
    pitIn.position.set(54, -0.24, 134.95);
    G.add(pitIn);
    this.pulley = new THREE.Group();
    this.pulley.position.set(54, -0.15, 134.95);
    G.add(this.pulley);
    const pw = new THREE.Mesh(gearGeometry(0.3, 10, 0.05, 0.08, 0.35), m.gold);
    pw.rotation.x = Math.PI / 2;
    this.pulley.add(pw);
    // 格子のふた
    const grateG = [];
    for (let i = -3; i <= 3; i++) {
      const b = new THREE.BoxGeometry(0.04, 0.03, 0.9);
      b.translate(i * 0.12, 0, 0);
      grateG.push(b);
    }
    const grate = new THREE.Mesh(mergeGeometries(grateG), m.dark);
    grate.position.set(54, 0.02, 134.95);
    G.add(grate);

    // ケーブルの溝（ガラスのふた）
    const chIn = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.4, 0.3), new THREE.MeshStandardMaterial({ color: 0x33353a, roughness: 0.9, side: THREE.BackSide }));
    chIn.position.set(51.9, -0.19, 135.62);
    G.add(chIn);
    const cover = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 0.3), m.glass);
    cover.rotation.x = -Math.PI / 2;
    cover.position.set(51.9, 0.02, 135.62);
    G.add(cover);
    const cableMat = new THREE.MeshStandardMaterial({ color: 0x2c2c30, roughness: 0.5, metalness: 0.5 });
    const cab = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 5.0, 8), cableMat);
    cab.rotation.z = Math.PI / 2;
    cab.position.set(51.75, -0.1, 135.62);
    G.add(cab);
    // ロッドから滑車へのケーブル
    const cab2 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.6, 8), cableMat);
    cab2.rotation.x = Math.PI / 2;
    cab2.position.set(54, -0.12, 134.6);
    G.add(cab2);
    // ケーブル上の赤い目印（動きが見える）
    this.beads = [];
    const beadM = new THREE.MeshStandardMaterial({ color: 0xff3040, emissive: 0xff2030, emissiveIntensity: 0.4, roughness: 0.3 });
    for (let i = 0; i < 8; i++) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), beadM);
      b.position.set(49.3 + i * 0.6, -0.1, 135.62);
      G.add(b);
      this.beads.push(b);
    }
    // 壁を上るケーブル
    const up = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.1, 8), cableMat);
    up.position.set(49.15, 0.45, 136.45);
    G.add(up);
    this.upBead = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), beadM);
    this.upBead.position.set(49.15, 0.2, 136.45);
    G.add(this.upBead);

    // 歯車の列（城門の西の壁面）
    const plateBack = new THREE.Mesh(new RoundedBoxGeometry(3.4, 4.2, 0.12, 2, 0.1), new THREE.MeshStandardMaterial({ color: 0x7a4a6a, roughness: 0.7 }));
    plateBack.position.set(48.9, 2.4, 136.5);
    plateBack.receiveShadow = true;
    G.add(plateBack);
    const gz = 136.3;
    this.gears = [];
    const mk = (x, y, r, teeth, dir, ratio) => {
      const g = new THREE.Group();
      g.position.set(x, y, gz);
      const mesh = new THREE.Mesh(gearGeometry(r, teeth, 0.09, 0.14), m.gold);
      mesh.castShadow = true;
      g.add(mesh);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.24, 14), m.steel);
      cap.rotation.x = Math.PI / 2;
      g.add(cap);
      // 赤い印（どれだけ回ったか見える）
      const dot = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.16, 10), new THREE.MeshStandardMaterial({ color: 0xff3a5a, roughness: 0.4 }));
      dot.rotation.x = Math.PI / 2;
      dot.position.set(0, r * 0.8, -0.02);
      g.add(dot);
      G.add(g);
      this.gears.push({ g, dir, ratio, r });
      return g;
    };
    const r1 = 0.6, r2 = 0.45, r3 = 0.35;
    const g1 = { x: 48.4, y: 1.0 };
    const a2 = (60 * Math.PI) / 180;
    const g2 = { x: g1.x + (r1 + r2 + 0.09) * Math.cos(a2), y: g1.y + (r1 + r2 + 0.09) * Math.sin(a2) };
    const a3 = (25 * Math.PI) / 180;
    const g3 = { x: g2.x + (r2 + r3 + 0.09) * Math.cos(a3), y: g2.y + (r2 + r3 + 0.09) * Math.sin(a3) };
    mk(g1.x, g1.y, r1, 16, 1, 1);
    mk(g2.x, g2.y, r2, 12, -1, r1 / r2);
    mk(g3.x, g3.y, r3, 9, 1, r1 / r3);
    this.g3 = g3;
    // 巻き上げドラムと鎖
    this.chainMat = new THREE.MeshStandardMaterial({ map: stripeTexture('#c9cfd6', '#6d737a', 2), metalness: 0.8, roughness: 0.35 });
    this.chainMat.map.repeat.set(1, 12);
    const chainV = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1, 6), this.chainMat);
    chainV.position.set(g3.x + r3, 0, gz - 0.05);
    G.add(chainV);
    this.chainV = chainV;
    const topY = 5.05;
    const chainH = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 56.6 - (g3.x + r3), 6), this.chainMat);
    chainH.rotation.z = Math.PI / 2;
    chainH.position.set((56.6 + g3.x + r3) / 2, topY, 136.5);
    G.add(chainH);
    this.chainDrops = [];
    for (const x of [51.6, 56.4]) {
      const pul = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.1, 14), m.steel);
      pul.rotation.x = Math.PI / 2;
      pul.position.set(x, topY, 136.5);
      G.add(pul);
      const d = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1, 6), this.chainMat);
      d.position.set(x, 0, 136.5);
      G.add(d);
      this.chainDrops.push(d);
    }
    this.chainTopY = topY;
    const pul0 = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.1, 14), m.steel);
    pul0.rotation.x = Math.PI / 2;
    pul0.position.set(g3.x + r3, topY, 136.5);
    G.add(pul0);
  }

  _walls() {
    const m = this.m;
    const G = this.group;
    const z0 = 136.6, z1 = 138.0;
    const H = 6.2;
    const wallPiece = (xa, xb, ya = 0, yb = H) => {
      const w = xb - xa;
      const g = new THREE.BoxGeometry(w, yb - ya, z1 - z0);
      scaleUV(g, w / 3, (yb - ya) / 3);
      const me = new THREE.Mesh(g, m.wall);
      me.position.set((xa + xb) / 2, (ya + yb) / 2, (z0 + z1) / 2);
      me.castShadow = true;
      me.receiveShadow = true;
      G.add(me);
    };
    wallPiece(34, 51);
    wallPiece(57, 74);
    wallPiece(51, 57, 4.7, H);
    // 胸壁
    const crenG = [];
    for (let x = 34.4; x < 74; x += 1.2) {
      const g = new THREE.BoxGeometry(0.7, 0.7, 1.5);
      g.translate(x, H + 0.35, (z0 + z1) / 2);
      crenG.push(g);
    }
    const cren = new THREE.Mesh(mergeGeometries(crenG), m.wallPlain);
    cren.castShadow = true;
    G.add(cren);
    // 塔
    this.flags = [];
    const tower = (x, z, r, h, roofH) => {
      const tg = new THREE.CylinderGeometry(r, r * 1.05, h, 24);
      scaleUV(tg, (r * 6.28) / 3, h / 3);
      const t = new THREE.Mesh(tg, m.wall);
      t.position.set(x, h / 2, z);
      t.castShadow = true;
      t.receiveShadow = true;
      G.add(t);
      const band = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.12, r * 1.12, 0.5, 24), m.wallPlain);
      band.position.set(x, h, z);
      G.add(band);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(r * 1.25, roofH, 24), m.roofPink);
      roof.position.set(x, h + roofH / 2 + 0.25, z);
      roof.castShadow = true;
      G.add(roof);
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8), m.gold);
      ball.position.set(x, h + roofH + 0.3, z);
      G.add(ball);
      this.addFlag(x, h + roofH + 0.3, z, 2.2, true);
      // 窓
      if (!this.towerWinMat) this.towerWinMat = new THREE.MeshStandardMaterial({ map: windowTexture(false), roughness: 0.3 });
      const win = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.2), this.towerWinMat);
      win.position.set(x, h * 0.7, z - r - 0.02);
      win.rotation.y = Math.PI;
      G.add(win);
      return t;
    };
    tower(34, 137.3, 2.6, 10, 5);
    tower(74, 137.3, 2.6, 10, 5);
    tower(42, 137.3, 1.8, 8, 4);
    tower(66, 137.3, 1.8, 8, 4);
    // 中庭の左右の壁
    for (const x of [35, 73]) {
      const g = new THREE.BoxGeometry(1.4, 4.5, 26);
      const me = new THREE.Mesh(g, m.wallPlain);
      me.position.set(x, 2.25, 151);
      me.castShadow = true;
      me.receiveShadow = true;
      G.add(me);
    }
  }

  addFlag(x, y, z, poleH, onTop = false, color = 0xffffff) {
    const G = this.group;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, poleH, 6), this.m.steel);
    pole.position.set(x, y + poleH / 2, z);
    G.add(pole);
    const geo = new THREE.PlaneGeometry(1.3, 0.8, 10, 4);
    geo.translate(0.65, -0.4, 0);
    const mat = color === 0xffffff ? this.m.flag : new THREE.MeshStandardMaterial({ color, roughness: 0.7, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    const fg = new THREE.Group();
    fg.add(mesh);
    G.add(fg);
    const top = y + poleH;
    const bottom = y + 0.9;
    const f = { fg, geo, base: Float32Array.from(geo.attributes.position.array), x, z, top, bottom, phase: Math.random() * 6, onTop };
    // 塔の上の旗は最初から掲げられている（遠くから見える白い旗）。中庭の旗は下で巻かれている
    f.hoist = onTop ? 1 : 0;
    this.flags.push(f);
    return f;
  }

  _gate() {
    const m = this.m;
    const G = this.group;
    // 門のアーチの縁
    const arch = new THREE.Mesh(new THREE.TorusGeometry(3.05, 0.22, 10, 32, Math.PI), m.wallPlain);
    arch.position.set(54, 4.05, 136.55);
    arch.scale.set(1, 0.25, 1);
    G.add(arch);
    for (const x of [50.9, 57.1]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.4, 4.7, 0.3), m.wallPlain);
      post.position.set(x, 2.35, 136.5);
      post.castShadow = true;
      G.add(post);
    }
    // 扉（木と金の鋲）
    this.doorL = new THREE.Group();
    this.doorR = new THREE.Group();
    this.doorL.position.set(51.05, 0, 137.3);
    this.doorR.position.set(56.95, 0, 137.3);
    G.add(this.doorL, this.doorR);
    const plank = plankTexture();
    plank.repeat.set(1, 1);
    const doorMat = new THREE.MeshStandardMaterial({ map: plank, color: 0xffd6c0, roughness: 0.7 });
    for (const [door, dir] of [[this.doorL, 1], [this.doorR, -1]]) {
      const d = new THREE.Mesh(new RoundedBoxGeometry(2.95, 4.5, 0.26, 2, 0.06), doorMat);
      d.position.set(dir * 1.475, 2.25, 0);
      d.castShadow = true;
      d.receiveShadow = true;
      door.add(d);
      // 金の帯と鋲
      for (const y of [0.8, 3.7]) {
        const band = new THREE.Mesh(new THREE.BoxGeometry(2.9, 0.18, 0.04), m.gold);
        band.position.set(dir * 1.475, y, -0.15);
        door.add(band);
        for (let i = 0; i < 6; i++) {
          const st = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), m.gold);
          st.position.set(dir * (0.25 + i * 0.5), y, -0.18);
          door.add(st);
        }
      }
      // 閂の受け金具（上が開いたコの字）
      const bx = dir * (dir > 0 ? 1.2 : 1.2);
      for (const sx of [-0.18, 0.18]) {
        const hook = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.5, 0.2), m.steel);
        hook.position.set(bx + sx, 1.95, -0.25);
        door.add(hook);
      }
      const hb = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.08, 0.2), m.steel);
      hb.position.set(bx, 1.72, -0.25);
      door.add(hb);
      // 大きな金の取っ手
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.04, 8, 20), m.gold);
      ring.position.set(dir * 2.6, 2.4, -0.2);
      door.add(ring);
    }
    // 閂（金の太い棒）
    this.barMesh = new THREE.Mesh(new RoundedBoxGeometry(5.6, 0.28, 0.22, 2, 0.08), m.gold);
    this.barMesh.position.set(54, 2.05, 136.85);
    this.barMesh.castShadow = true;
    G.add(this.barMesh);
    this.barBaseY = 2.05;
  }

  _court() {
    const m = this.m;
    const G = this.group;
    const c = this.course;
    // 中庭と門の通路の石畳（ピンクと金）
    const pave = new THREE.MeshStandardMaterial({ map: pavingTexture('#ffd7e6', '#ffe9a8', '#e8b7c8'), roughness: 0.8 });
    const C = c.court;
    const cs = rrShape(C.hx * 2 + 4, 24, 2.5, C.cx, -149.6);
    const cg = new THREE.ShapeGeometry(cs, 6);
    const uv = cg.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 2, uv.getY(i) / 2);
    cg.rotateX(-Math.PI / 2);
    const cm = new THREE.Mesh(cg, pave);
    cm.position.y = 0.025;
    cm.receiveShadow = true;
    G.add(cm);
    const gw = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 3.4), pave);
    gw.rotation.x = -Math.PI / 2;
    gw.position.set(54, 0.026, 137.9);
    G.add(gw);

    // 噴水
    const F = { x: 54, z: 152 };
    this.fountainPos = new THREE.Vector3(F.x, 0, F.z);
    const basin = new THREE.Mesh(new THREE.TorusGeometry(2.9, 0.32, 12, 40), m.stone);
    basin.rotation.x = Math.PI / 2;
    basin.position.set(F.x, 0.38, F.z);
    basin.castShadow = true;
    G.add(basin);
    const wallB = new THREE.Mesh(new THREE.CylinderGeometry(2.9, 3.0, 0.7, 40, 1, true), m.stone);
    wallB.position.set(F.x, 0.35, F.z);
    G.add(wallB);
    const floorB = new THREE.Mesh(new THREE.CircleGeometry(2.9, 40), new THREE.MeshStandardMaterial({ color: 0x8fb7c8, roughness: 0.6 }));
    floorB.rotation.x = -Math.PI / 2;
    floorB.position.set(F.x, 0.08, F.z);
    G.add(floorB);
    this.fWater = new THREE.Mesh(new THREE.CircleGeometry(2.85, 40), m.water);
    this.fWater.rotation.x = -Math.PI / 2;
    this.fWater.position.set(F.x, 0.1, F.z);
    G.add(this.fWater);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.4, 2.2, 16), m.stone);
    col.position.set(F.x, 1.1, F.z);
    G.add(col);
    const bowl = new THREE.Mesh(new THREE.SphereGeometry(1.0, 24, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), m.gold);
    bowl.position.set(F.x, 2.2, F.z);
    bowl.scale.set(1, 0.4, 1);
    G.add(bowl);
    const top = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), m.gold);
    top.position.set(F.x, 2.7, F.z);
    G.add(top);
    // 水しぶき（点群）
    const N = 640;
    this.fN = N;
    const pg = new THREE.BufferGeometry();
    pg.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(N * 3), 3));
    this.fPts = new THREE.Points(pg, new THREE.PointsMaterial({ map: radialGlowTexture('200,235,255'), size: 0.55, transparent: true, depthWrite: false, color: 0xcfefff }));
    this.fPts.frustumCulled = false;
    this.fPts.visible = false;
    G.add(this.fPts);
    const r = rng(5);
    this.fSeeds = Array.from({ length: N }, (_, i) => ({ ph: r(), ang: r() * Math.PI * 2, kind: i % 3, sp: 0.8 + r() * 0.4 }));
    this.fountain = 0;

    // メリーゴーラウンド
    const carX = 45.5, carZ = 156.5;
    c.addDisc(carX, carZ, 3.0);
    this.carousel = new THREE.Group();
    this.carousel.position.set(carX, 0, carZ);
    G.add(this.carousel);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(2.7, 2.8, 0.35, 32), m.wallPlain);
    base.position.y = 0.17;
    base.castShadow = true;
    this.carousel.add(base);
    this.carRot = new THREE.Group();
    this.carousel.add(this.carRot);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 3.6, 12), m.gold);
    pole.position.y = 2.0;
    this.carRot.add(pole);
    const canopyMat = new THREE.MeshStandardMaterial({ map: awningTexture('#ff7ab0', '#ffffff', 16), roughness: 0.55 });
    const canopy = new THREE.Mesh(new THREE.ConeGeometry(3.2, 1.6, 32, 1), canopyMat);
    canopy.position.y = 4.1;
    canopy.castShadow = true;
    this.carRot.add(canopy);
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 0.4, 32, 1, true), m.gold);
    rim.position.y = 3.2;
    this.carRot.add(rim);
    this.carLights = new THREE.MeshStandardMaterial({ color: 0xfff2c0, emissive: 0xffd36b, emissiveIntensity: 0.05 });
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      const l = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), this.carLights);
      l.position.set(Math.cos(a) * 3.22, 3.1, Math.sin(a) * 3.22);
      this.carRot.add(l);
    }
    this.horses = [];
    const horseCols = [0xffffff, 0xffd6e8, 0xd8ecff, 0xfff0b0, 0xe8d8ff, 0xd8ffe8];
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const hg = new THREE.Group();
      hg.position.set(Math.cos(a) * 2.0, 0, Math.sin(a) * 2.0);
      hg.rotation.y = -a;
      this.carRot.add(hg);
      const rodH = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.9, 6), m.gold);
      rodH.position.y = 1.8;
      hg.add(rodH);
      const horse = new THREE.Group();
      hg.add(horse);
      const hm = new THREE.MeshStandardMaterial({ color: horseCols[i], roughness: 0.4 });
      const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.55, 6, 12), hm);
      body.rotation.x = Math.PI / 2;
      horse.add(body);
      const neck = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.3, 4, 8), hm);
      neck.position.set(0, 0.25, 0.35);
      neck.rotation.x = -0.6;
      horse.add(neck);
      const head = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.18, 4, 8), hm);
      head.position.set(0, 0.42, 0.5);
      head.rotation.x = Math.PI / 2 - 0.3;
      horse.add(head);
      const mane = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.12, 0.35), new THREE.MeshStandardMaterial({ color: 0xff7ab0, roughness: 0.6 }));
      mane.position.set(0, 0.35, 0.3);
      mane.rotation.x = -0.6;
      horse.add(mane);
      for (const [lx, lz] of [[-0.1, 0.25], [0.1, 0.25], [-0.1, -0.25], [0.1, -0.25]]) {
        const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.04, 0.3, 3, 6), hm);
        leg.position.set(lx, -0.28, lz);
        horse.add(leg);
      }
      const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.06, 0.25), m.gold);
      saddle.position.y = 0.21;
      horse.add(saddle);
      this.horses.push({ horse, ph: i * 1.1 });
    }
    this.carouselSpeed = 0;
    for (const h of this.horses) mergeStatic(h.horse);
    mergeStatic(this.carRot, new Set(this.horses.map((h) => h.horse)));

    // 花のオブジェ（閉じたつぼみ → 開く）
    this.flowers = [];
    const petalCols = [0xff6fa8, 0xffd23f, 0xb78cff, 0xff8f6b, 0xffffff, 0x6fd3ff];
    const spots = [
      [48.5, 141.8], [59.5, 141.8], [41.6, 146], [66.4, 146], [41.6, 152], [66.4, 152], [50, 161], [58, 161], [62, 157.5],
      [42.6, 113.6], [65.4, 113.6], [42.6, 134.6], [65.4, 134.6], [47.5, 135.2], [60.5, 135.2],
    ];
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x4caf50, roughness: 0.7 });
    const FS = 1.55;
    const petalG = new THREE.SphereGeometry(0.32, 12, 8);
    petalG.scale(0.55, 0.1, 1);
    petalG.translate(0, 0, 0.3);
    this.petals = new THREE.InstancedMesh(petalG, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.45, side: THREE.DoubleSide }), spots.length * 6);
    this.petals.castShadow = true;
    this.petals.frustumCulled = false;
    this.flowerCenters = new THREE.InstancedMesh(new THREE.SphereGeometry(0.17, 12, 10), m.yellow, spots.length);
    this.flowerCenters.frustumCulled = false;
    G.add(this.petals, this.flowerCenters);
    const pcol = new THREE.Color();
    spots.forEach(([x, z], i) => {
      // 動かない茎と鉢
      const f = new THREE.Group();
      f.position.set(x, 0, z);
      f.scale.setScalar(FS);
      G.add(f);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 1.4, 8), stemMat);
      stem.position.y = 0.7;
      f.add(stem);
      for (const sx of [-1, 1]) {
        const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 6), stemMat);
        leaf.scale.set(1, 0.2, 0.5);
        leaf.position.set(sx * 0.22, 0.5, 0);
        leaf.rotation.z = sx * 0.4;
        f.add(leaf);
      }
      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.3, 0.5, 16), m.gold);
      pot.position.y = 0.25;
      pot.castShadow = true;
      f.add(pot);
      for (let k = 0; k < 6; k++) this.petals.setColorAt(i * 6 + k, pcol.setHex(petalCols[i % petalCols.length]));
      // 走れる場所にある花には、柔らかい当たり判定を付ける
      for (const reg of c.regions) if (reg.sd(x, z) < 1.0) { c.addDisc(x, z, 0.75); break; }
      const dist = Math.hypot(x - 54, z - 137.5);
      this.flowers.push({ x, z, headY: 1.45 * FS, open: 0, delay: dist * 0.12, bounce: 0, spin: i * 0.7 });
    });
    this.flowerCenters.userData.kind = 'flower';
    this.flowerCenters.userData.flowers = this.flowers;
    this.pickables.push(this.flowerCenters);
    this._mtx = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._sv = new THREE.Vector3();

    // 城下町の小さな家
    const houseMats = [0xffd6e6, 0xfff0c8, 0xffe0ef].map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 }));
    const roofMat = new THREE.MeshStandardMaterial({ color: 0xffbf3a, metalness: 0.5, roughness: 0.35 });
    this.windows = [];
    const winOff = windowTexture(false), winOn = windowTexture(true);
    this.winOn = winOn;
    this.winOff = winOff;
    this.winMat = new THREE.MeshStandardMaterial({ map: winOff, roughness: 0.3, emissive: 0xffd36b, emissiveIntensity: 0, emissiveMap: winOn });
    const house = (x, z, rotY, w, h, i) => {
      const hg = new THREE.Group();
      hg.position.set(x, 0, z);
      hg.rotation.y = rotY;
      G.add(hg);
      const body = new THREE.Mesh(new RoundedBoxGeometry(w, h, 3, 2, 0.15), houseMats[i % 3]);
      body.position.y = h / 2;
      body.castShadow = true;
      body.receiveShadow = true;
      hg.add(body);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, 3) * 0.75, 1.8, 4), roofMat);
      roof.rotation.y = Math.PI / 4;
      roof.position.y = h + 0.9;
      roof.scale.set(w / 3, 1, 1);
      roof.castShadow = true;
      hg.add(roof);
      for (const ox of [-w / 4, w / 4]) {
        const win = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.9), this.winMat);
        win.position.set(ox, h * 0.55, 1.52);
        hg.add(win);
      }
      const door = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1.2), new THREE.MeshStandardMaterial({ color: 0xc0784a, roughness: 0.7 }));
      door.position.set(0, 0.6, 1.53);
      hg.add(door);
    };
    for (let i = 0; i < 4; i++) {
      house(39.2, 142.5 + i * 5.5, Math.PI / 2, 3.6, 3.2 + (i % 2) * 0.8, i);
      house(68.8, 142.5 + i * 5.5, -Math.PI / 2, 3.6, 3.2 + ((i + 1) % 2) * 0.8, i + 1);
    }
    // 中庭の旗（巻かれている → 掲げられてなびく）
    const fcols = [0xff6fa8, 0xffd23f, 0xffffff, 0xff6fa8, 0xffd23f, 0xffffff];
    [[44.5, 141.2], [63.5, 141.2], [43.2, 160.5], [64.8, 160.5], [50.5, 140.3], [57.5, 140.3]].forEach(([x, z], i) => this.addFlag(x, 0, z, 5, false, fcols[i]));
    // 街灯
    this.lampMat = new THREE.MeshStandardMaterial({ color: 0xfff6d0, emissive: 0xffd36b, emissiveIntensity: 0.05 });
    for (const [x, z] of [[47, 143.5], [61, 143.5], [47, 158.5], [61, 158.5], [44, 116], [64, 116], [44, 132], [64, 132]]) {
      for (const reg of c.regions) if (reg.sd(x, z) < 0.6) { c.addDisc(x, z, 0.3); break; }
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 3, 8), m.gold);
      p.position.set(x, 1.5, z);
      G.add(p);
      const l = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 10), this.lampMat);
      l.position.set(x, 3.15, z);
      G.add(l);
    }
  }

  _keep() {
    const m = this.m;
    const G = this.group;
    const mg = new THREE.BoxGeometry(24, 10, 12);
    scaleUV(mg, 8, 3.3);
    const main = new THREE.Mesh(mg, m.wall);
    main.position.set(54, 5, 169);
    main.castShadow = true;
    main.receiveShadow = true;
    G.add(main);
    const crenG = [];
    for (let x = 42.5; x < 66; x += 1.3) {
      const g = new THREE.BoxGeometry(0.7, 0.8, 0.7);
      g.translate(x, 10.4, 163.3);
      crenG.push(g);
    }
    G.add(new THREE.Mesh(mergeGeometries(crenG), m.wallPlain));
    const tw = (x, z, r, h, roofH, flag = true) => {
      const tg = new THREE.CylinderGeometry(r, r * 1.04, h, 28);
      scaleUV(tg, (r * 6.28) / 3, h / 3);
      const t = new THREE.Mesh(tg, m.wall);
      t.position.set(x, h / 2, z);
      t.castShadow = true;
      G.add(t);
      const band = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.12, r * 1.12, 0.6, 28), m.wallPlain);
      band.position.set(x, h, z);
      G.add(band);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(r * 1.28, roofH, 28), m.roofPink);
      roof.position.set(x, h + roofH / 2 + 0.3, z);
      roof.castShadow = true;
      G.add(roof);
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 8), m.gold);
      ball.position.set(x, h + roofH + 0.35, z);
      G.add(ball);
      if (flag) this.addFlag(x, h + roofH + 0.35, z, 2.8, true);
      for (let k = 0; k < 3; k++) {
        const win = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.4), this.winMat);
        win.position.set(x, h * (0.45 + k * 0.17), z - r - 0.02);
        win.rotation.y = Math.PI;
        G.add(win);
      }
    };
    tw(54, 170, 4.2, 20, 8);
    tw(44, 166, 2.6, 14, 5.5);
    tw(64, 166, 2.6, 14, 5.5);
    tw(40, 174, 2.2, 12, 4.5);
    tw(68, 174, 2.2, 12, 4.5);
    // 鐘楼の鐘
    this.bell = new THREE.Group();
    this.bell.position.set(54, 15.5, 165.6);
    G.add(this.bell);
    const belfry = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.2, 8, 24, Math.PI), m.wallPlain);
    belfry.position.set(54, 15.2, 165.7);
    G.add(belfry);
    const bellMesh = new THREE.Mesh(new THREE.LatheGeometry([
      new THREE.Vector2(0.05, 0), new THREE.Vector2(0.35, -0.1), new THREE.Vector2(0.45, -0.5), new THREE.Vector2(0.6, -0.95), new THREE.Vector2(0.62, -1.05), new THREE.Vector2(0.0, -1.0),
    ], 24), m.gold);
    this.bell.add(bellMesh);
    this.bellSwing = 0;
    // 大きな窓（ハート）
    const heart = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.6), new THREE.MeshStandardMaterial({ map: iconTexture('heart', '#ff4f8b'), transparent: true, roughness: 0.4, emissive: 0xff4f8b, emissiveIntensity: 0 }));
    heart.position.set(54, 7.2, 162.94);
    heart.rotation.y = Math.PI;
    G.add(heart);
    this.heart = heart;
  }

  _moatAndDrawbridge() {
    const m = this.m;
    const G = this.group;
    // 東の堀
    const water = new THREE.Mesh(new THREE.PlaneGeometry(7.2, 76), m.water);
    water.rotation.x = -Math.PI / 2;
    water.position.set(71.5, -0.5, 142);
    G.add(water);
    for (const x of [67.7, 75.3]) {
      const w = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.8, 76), m.stone);
      w.position.set(x, -0.8, 142);
      w.receiveShadow = true;
      G.add(w);
    }
    // はね橋（広場側の蝶番で立ち上がっている）
    this.bridgePivot = new THREE.Group();
    this.bridgePivot.position.set(67.5, 0.05, 124);
    G.add(this.bridgePivot);
    const plank = plankTexture();
    plank.repeat.set(1, 3);
    plank.rotation = Math.PI / 2;
    const deckMat = new THREE.MeshStandardMaterial({ map: plank, roughness: 0.8 });
    const deck = new THREE.Mesh(new THREE.BoxGeometry(8.6, 0.22, 6.6), deckMat);
    deck.position.set(4.3, 0, 0);
    deck.castShadow = true;
    deck.receiveShadow = true;
    this.bridgePivot.add(deck);
    for (const sz of [-3.3, 3.3]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(8.6, 0.6, 0.15), m.wood);
      rail.position.set(4.3, 0.4, sz);
      this.bridgePivot.add(rail);
    }
    this.bridgePivot.rotation.z = Math.PI / 2 * 0.98;
    // 鎖の柱と巻き上げ機
    this.dbChains = [];
    for (const sz of [120.4, 127.6]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.9, 7.5, 0.9), m.wallPlain);
      post.position.set(66.7, 3.75, sz);
      post.castShadow = true;
      G.add(post);
      const cap = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.4, 4), m.roofPink);
      cap.position.set(66.7, 8.2, sz);
      cap.rotation.y = Math.PI / 4;
      G.add(cap);
      this.course.addDisc(66.7, sz, 0.65);
      const ch = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1, 6), this.chainMat);
      G.add(ch);
      this.dbChains.push({ ch, top: new THREE.Vector3(66.9, 7.0, sz + (sz < 124 ? 0.55 : -0.55)) });
    }
    this.winch = new THREE.Group();
    this.winch.position.set(66.7, 6.2, 124);
    G.add(this.winch);
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 6.4, 16), m.wood);
    drum.rotation.x = Math.PI / 2;
    this.winch.add(drum);
    const wg = new THREE.Mesh(gearGeometry(0.6, 12, 0.09, 0.12), m.gold);
    wg.position.z = -3.3;
    this.winch.add(wg);
  }

  _shop() {
    const m = this.m;
    const G = this.group;
    const sx = 88, sz = 168;
    this.candyMats = [0xff4f7a, 0xffd23f, 0x6fd3ff, 0x7be07b, 0xb78cff, 0xff9f43].map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.25 }));
    const ballG = new THREE.SphereGeometry(0.16, 10, 8);
    const shop = new THREE.Group();
    shop.position.set(sx, 0, sz);
    G.add(shop);
    const body = new THREE.Mesh(new RoundedBoxGeometry(10, 4.4, 7, 3, 0.3), new THREE.MeshStandardMaterial({ color: 0xfff4e0, roughness: 0.8 }));
    body.position.y = 2.2;
    body.castShadow = true;
    body.receiveShadow = true;
    shop.add(body);
    // 黄色い屋根
    const roofMat = new THREE.MeshStandardMaterial({ map: awningTexture('#ff9f00', '#ffffff', 12), roughness: 0.5 });
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 6.4, 3.2, 4, 1), new THREE.MeshStandardMaterial({ color: 0xffa800, roughness: 0.35 }));
    roof.rotation.y = Math.PI / 4;
    roof.scale.set(1.15, 1, 0.82);
    roof.position.y = 4.4 + 1.6;
    roof.castShadow = true;
    shop.add(roof);
    roofMat.map.repeat.set(1, 1);
    const aw = new THREE.Mesh(new THREE.BoxGeometry(10.4, 0.08, 1.8), roofMat);
    aw.rotation.x = 0.38;
    aw.position.set(0, 3.5, -4.25);
    aw.castShadow = true;
    shop.add(aw);
    // 窓とキャンディ
    for (const ox of [-3, 3]) {
      const w = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.6), new THREE.MeshStandardMaterial({ color: 0xbfe6ff, roughness: 0.1, metalness: 0.2 }));
      w.position.set(ox, 1.9, -3.52);
      w.rotation.y = Math.PI;
      shop.add(w);
      for (let k = 0; k < 3; k++) {
        const jar = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 10), this.candyMats[[0, 2, 1][k]]);
        jar.position.set(ox - 0.7 + k * 0.7, 1.5, -3.4);
        shop.add(jar);
      }
    }
    const door = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 2.4), new THREE.MeshStandardMaterial({ color: 0xff8fb8, roughness: 0.6 }));
    door.position.set(0, 1.2, -3.53);
    door.rotation.y = Math.PI;
    shop.add(door);
    // 屋根の上の大きな棒付きキャンディ
    this.lolly = new THREE.Group();
    this.lolly.position.set(0, 8.2, 0);
    shop.add(this.lolly);
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3, 8), m.white);
    stick.position.y = -1.5;
    shop.add(stick);
    stick.position.set(0, 6.7, 0);
    const candy = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.35, 32), new THREE.MeshStandardMaterial({ map: iconTexture('candy', '#ffffff'), roughness: 0.3 }));
    candy.rotation.x = Math.PI / 2;
    this.lolly.add(candy);

    // ガムボール機（ガラス玉と、らせんの線路）
    const gx = 96, gz = 162;
    this.gumPos = new THREE.Vector3(gx, 0, gz);
    const gbase = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 1.2, 20), new THREE.MeshStandardMaterial({ color: 0xff4f7a, roughness: 0.4 }));
    gbase.position.set(gx, 0.6, gz);
    gbase.castShadow = true;
    G.add(gbase);
    const globe = new THREE.Mesh(new THREE.SphereGeometry(1.1, 24, 18), m.glass);
    globe.position.set(gx, 2.3, gz);
    G.add(globe);
    const balls = [];
    const r = rng(8);
    for (let i = 0; i < 40; i++) {
      const b = new THREE.Mesh(ballG, this.candyMats[i % 6]);
      const a = r() * Math.PI * 2, rr = r() * 0.8, y = r() * 1.2 - 0.6;
      b.position.set(gx + Math.cos(a) * rr, 2.1 + y * 0.8, gz + Math.sin(a) * rr);
      G.add(b);
      balls.push(b);
    }
    // らせんの線路
    const helix = [];
    for (let i = 0; i <= 80; i++) {
      const t = i / 80;
      const a = t * Math.PI * 4;
      helix.push(new THREE.Vector3(gx + 1.6 * Math.cos(a), 1.5 - t * 1.2, gz + 1.6 * Math.sin(a)));
    }
    this.helix = new THREE.CatmullRomCurve3(helix);
    const track = new THREE.Mesh(new THREE.TubeGeometry(this.helix, 120, 0.05, 6, false), m.gold);
    G.add(track);
    const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.7, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, side: THREE.DoubleSide }));
    bowl.position.set(gx + 1.6, 0.6, gz);
    G.add(bowl);
    this.rollers = [];
    for (let i = 0; i < 8; i++) {
      const b = new THREE.Mesh(ballG, this.candyMats[i % 6]);
      b.visible = false;
      G.add(b);
      this.rollers.push(b);
    }
    // お菓子屋さんの前のプレート（小さめ）
    this.shopPlate = new THREE.Group();
    this.shopPlate.position.set(SHOP_PLATE.x, 0, SHOP_PLATE.z);
    G.add(this.shopPlate);
    const sp = new THREE.Mesh(new THREE.CylinderGeometry(SHOP_PLATE.r, SHOP_PLATE.r, 0.08, 40), new THREE.MeshStandardMaterial({ color: 0xffc0d8, metalness: 0.4, roughness: 0.35 }));
    sp.position.y = 0.03;
    this.shopPlate.add(sp);
    const spr = new THREE.Mesh(new THREE.RingGeometry(SHOP_PLATE.r - 0.25, SHOP_PLATE.r - 0.05, 40), m.yellow);
    spr.rotation.x = -Math.PI / 2;
    spr.position.y = 0.075;
    this.shopPlate.add(spr);
    // パイプ：プレート → ガムボール機（中を玉が流れるのではなく、色の帯が流れる）
    const pipeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(SHOP_PLATE.x + SHOP_PLATE.r, 0.06, SHOP_PLATE.z),
      new THREE.Vector3(91, 0.06, 159.2),
      new THREE.Vector3(gx - 0.6, 0.06, gz - 0.4),
      new THREE.Vector3(gx - 0.6, 0.8, gz - 0.2),
    ]);
    this.pipeMat = new THREE.MeshStandardMaterial({ map: stripeTexture('#ff6fa8', '#ffffff', 2), roughness: 0.4 });
    this.pipeMat.map.repeat.set(14, 1);
    const pipe = new THREE.Mesh(new THREE.TubeGeometry(pipeCurve, 40, 0.09, 8, false), this.pipeMat);
    G.add(pipe);

    // 飴の像（前庭の中央）
    const st = new THREE.Group();
    st.position.set(88, 0, 152);
    G.add(st);
    const bed = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.6, 0.5, 32), new THREE.MeshStandardMaterial({ color: 0x7bd07a, roughness: 0.8 }));
    bed.position.y = 0.25;
    st.add(bed);
    const sstick = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 3.4, 10), m.white);
    sstick.position.y = 2.0;
    st.add(sstick);
    this.bigCandy = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.3, 32), new THREE.MeshStandardMaterial({ map: iconTexture('candy', '#ffe14d'), roughness: 0.3 }));
    this.bigCandy.rotation.x = Math.PI / 2;
    this.bigCandy.position.y = 4.4;
    st.add(this.bigCandy);
    this.gumballs = balls;
  }

  // ---------------------------------------------------------------- 更新
  // car: { x, z, h, v }。戻り値でイベントを返す
  update(dt, time, car) {
    const ev = [];
    const d = Math.hypot(car.x - PLATE.x, car.z - PLATE.z);
    const overlap = Math.max(0, 1 - d / (PLATE.r + 0.9));
    const stopped = Math.abs(car.v) < 0.04;
    const align = Math.abs(Math.cos(car.h)); // +Z または -Z を向いているほど 1
    let sinkTarget = 0;
    if (this.state === 'closed' || this.state === 'open') {
      this.load += ((stopped ? 1 : 0.4) * overlap - this.load) * Math.min(1, dt * 4);
      sinkTarget = this.load * 0.07;
      // 正しく止まった：中心から 1.15m 以内、向きがほぼまっすぐ、停止
      if (stopped && d < 1.15 && align > 0.72) {
        this.stillT = (this.stillT || 0) + dt;
        if (this.stillT > 0.45 && !this.cooldown) {
          if (this.state === 'closed') {
            this.state = 'opening';
            this.t = 0;
            ev.push('trigger');
          } else {
            this.t = 0;
            this.state = 'celebrate';
            ev.push('celebrate');
          }
        }
      } else {
        this.stillT = 0;
      }
      if (d > PLATE.r + 1.5) this.cooldown = false;
    }

    if (this.state === 'opening' || this.state === 'celebrate') {
      this.t += dt;
      const t = this.t;
      const full = this.state === 'opening';
      // 0.0〜1.0 プレートが沈む
      sinkTarget = 0.22 * seg(t, 0, 1.0);
      if (t > 12.0) sinkTarget = 0.22 * (1 - seg(t, 12.0, 13.0));
      this.chocks = seg(t, 0.1, 0.5) * (1 - seg(t, 12.4, 12.8));
      // 0.8〜2.6 ロッドがケーブルを引く
      const rodT = seg(t, 0.8, 2.6) * (1 - seg(t, 12.0, 13.0));
      this.rod = rodT * 0.7;
      if (full) {
        this.cable = Math.max(this.cable, seg(t, 0.8, 2.6) * 0.7);
        this.bar = seg(t, 2.0, 2.9);
        this.doors = seg(t, 3.3, 7.4);
        this.wake = seg(t, 4.0, 9.0);
        this.drawbridge = seg(t, 7.0, 10.6);
      } else {
        this.cable = 0.7 + seg(t, 0.8, 2.6) * 0.25 - seg(t, 6, 8) * 0.25;
        this.celebrate = Math.sin(seg(t, 2.0, 8.5) * Math.PI);
      }
      const once = (name, at) => {
        if (t >= at && !this._fired[name]) { this._fired[name] = true; ev.push(name); }
      };
      if (!this._fired || t < dt * 1.5) this._fired = {};
      once('sink', 0.02);
      once('cable', 0.85);
      if (full) {
        once('gears', 1.3);
        once('unlock', 2.9);
        once('doors', 3.3);
        once('reveal', 4.6);
        once('bells', 5.2);
        once('cheer', 5.6);
        once('drawbridge', 7.1);
        once('bridgeDown', 10.6);
        once('release', 12.8);
      } else {
        once('burst', 2.4);
        once('release', 12.8);
      }
      if (t > 13.4) {
        this.state = 'open';
        this.cooldown = true;
        this.celebrate = 0;
      }
    }
    this.course.plateSink += (sinkTarget - this.course.plateSink) * Math.min(1, dt * 6);

    // 見た目の連動
    const sink = this.course.plateSink;
    this.plate.position.y = -sink;
    for (const ch of this.chockMeshes) ch.position.y = -0.1 + this.chocks * 0.17;
    const partialRod = this.state === 'closed' ? sink * 2.0 : 0;
    const rodPos = Math.max(this.rod, partialRod);
    this.rodMesh.position.z = PLATE.z + PLATE.r - 0.1 - 0.4 + rodPos;
    this.crank.rotation.x = -rodPos * 1.2;
    // ケーブルは開門後も歯車の位置を保つ（ラチェット）
    const cablePos = Math.max(this.cable, partialRod);
    const dCable = cablePos - (this._lastCable || 0);
    this._lastCable = cablePos;
    this.pulley.rotation.y -= dCable / 0.3;
    for (const [i, b] of this.beads.entries()) {
      let x = 49.3 + ((i * 0.6 + cablePos * 1.0) % 4.8);
      b.position.x = x;
    }
    this.upBead.position.y = 0.2 + ((cablePos * 1.0) % 0.9);
    this.gearAngle = cablePos / 0.6;
    for (const g of this.gears) g.g.rotation.z = -this.gearAngle * g.ratio * g.dir;
    if (Math.abs(this.gearAngle - this.lastTick) > 0.18) {
      this.lastTick = this.gearAngle;
      ev.push('gearTick');
    }
    // 閂が上がる
    const barY = this.barBaseY + this.bar * 1.25;
    this.barMesh.position.y = barY;
    const top = this.chainTopY;
    this.chainV.scale.y = Math.max(0.01, top - (this.g3.y));
    this.chainV.position.y = (top + this.g3.y) / 2;
    for (const dr of this.chainDrops) {
      const len = top - (barY + 0.14);
      dr.scale.y = len;
      dr.position.y = barY + 0.14 + len / 2;
    }
    this.chainMat.map.offset.y = cablePos * 2.0;
    // 扉
    this.doorL.rotation.y = -this.doors * 1.65;
    this.doorR.rotation.y = this.doors * 1.65;
    // はね橋
    this.bridgePivot.rotation.z = (Math.PI / 2) * 0.98 * (1 - this.drawbridge);
    this.winch.rotation.z = this.drawbridge * 12;
    for (const c of this.dbChains) {
      const a = this.bridgePivot.rotation.z;
      const end = new THREE.Vector3(67.5 + Math.cos(a) * 8.4, 0.05 + Math.sin(a) * 8.4, c.top.z);
      const mid = end.clone().add(c.top).multiplyScalar(0.5);
      const len = end.distanceTo(c.top);
      c.ch.position.copy(mid);
      c.ch.scale.set(1, len, 1);
      c.ch.lookAt(end);
      c.ch.rotateX(Math.PI / 2);
    }

    // 城下町
    const w = this.wake;
    const M = this._mtx, Q = this._q, E = this._e, P = this._v, S = this._sv;
    this.flowers.forEach((f, i) => {
      const target = Math.max(0, Math.min(1, (w * 6 - f.delay * 1.0) / 1.2));
      f.open += (target - f.open) * Math.min(1, dt * 4);
      f.bounce = Math.max(0, f.bounce - dt * 2);
      const o = f.open;
      f.spin += dt * 0.3 * o;
      const hs = (0.8 + 0.25 * o + Math.sin(f.bounce * 12) * 0.15 * f.bounce) * 1.55;
      const ang = -1.35 * (1 - o) + 0.1 * o + Math.sin(time * 2 + f.delay) * 0.04 * o;
      for (let k = 0; k < 6; k++) {
        E.set(ang, f.spin + (k / 6) * Math.PI * 2, 0, 'YXZ');
        Q.setFromEuler(E);
        M.compose(P.set(f.x, f.headY, f.z), Q, S.set(hs, hs, hs));
        this.petals.setMatrixAt(i * 6 + k, M);
      }
      M.compose(P.set(f.x, f.headY + 0.05 * hs, f.z), Q.identity(), S.set(hs, hs, hs));
      this.flowerCenters.setMatrixAt(i, M);
    });
    this.petals.instanceMatrix.needsUpdate = true;
    this.flowerCenters.instanceMatrix.needsUpdate = true;
    const fTarget = Math.min(1, w * 2.2) + this.celebrate * 0.8;
    this.fountain += (fTarget - this.fountain) * Math.min(1, dt * 1.5);
    this._updateFountain(time);
    const cs = (w > 0.15 ? 0.45 : 0) + this.celebrate * 0.5;
    this.carouselSpeed += (cs - this.carouselSpeed) * Math.min(1, dt * 0.7);
    this.carRot.rotation.y += this.carouselSpeed * dt;
    for (const h of this.horses) h.horse.position.y = 1.2 + Math.sin(time * 2.4 * Math.min(1, this.carouselSpeed * 3) + h.ph) * 0.25 * Math.min(1, this.carouselSpeed * 3);
    this.carLights.emissiveIntensity = 0.05 + w * 2.0 * (0.7 + 0.3 * Math.sin(time * 6));
    this.lampMat.emissiveIntensity = 0.05 + w * 1.6;
    this.winMat.emissiveIntensity = w * 1.1;
    this.heart.material.emissiveIntensity = w * 0.9;
    for (const f of this.flags) {
      if (!f.onTop) f.hoist += ((w > 0.05 ? 1 : 0) - f.hoist) * Math.min(1, dt * 0.9);
      const y = f.bottom + (f.top - f.bottom) * f.hoist;
      f.fg.position.set(f.x + 0.05, y, f.z);
      const pos = f.geo.attributes.position;
      const wind = f.onTop ? 1 : f.hoist;
      for (let i = 0; i < pos.count; i++) {
        const x = f.base[i * 3];
        const tt = x / 1.3;
        pos.array[i * 3 + 2] = Math.sin(time * 5 + f.phase - tt * 4) * 0.12 * tt * wind;
        pos.array[i * 3 + 1] = f.base[i * 3 + 1] - (1 - wind) * tt * 0.6;
      }
      pos.needsUpdate = true;
      f.fg.rotation.y = -0.4 + Math.sin(time * 0.5 + f.phase) * 0.2;
    }
    this.bellSwing = Math.max(0, this.bellSwing - dt * 0.15);
    this.bell.rotation.z = Math.sin(time * 5) * 0.5 * this.bellSwing;

    // お菓子屋さん
    this._updateShop(dt, time, car, ev);
    return ev;
  }

  _updateFountain(time) {
    const f = this.fountain;
    this.fWater.position.y = 0.1 + f * 0.38;
    this.fPts.visible = f > 0.02;
    if (!this.fPts.visible) return;
    const pos = this.fPts.geometry.attributes.position;
    const F = this.fountainPos;
    for (let i = 0; i < this.fN; i++) {
      const s = this.fSeeds[i];
      const life = s.kind === 0 ? 1.6 : 1.0;
      let t = ((time * s.sp + s.ph * life) % life);
      let x, y, z;
      if (s.kind === 0) {
        // 中央の噴き上げ
        const v = 7.4 * f;
        const r = t * 1.3 * f;
        x = F.x + Math.cos(s.ang) * r;
        z = F.z + Math.sin(s.ang) * r;
        y = 2.8 + v * t - 4.9 * t * t;
        if (y < 0.5) y = -10;
      } else {
        // 縁から内側へ弧を描く水
        const a = (Math.floor(s.ang / (Math.PI / 4)) * Math.PI) / 4;
        const r = 2.6 - t * 2.2;
        x = F.x + Math.cos(a) * r;
        z = F.z + Math.sin(a) * r;
        y = 0.6 + (3.4 * t - 4.9 * t * t) * f * 1.1;
        if (y < 0.45) y = -10;
      }
      pos.setXYZ(i, x, y, z);
    }
    pos.needsUpdate = true;
  }

  _updateShop(dt, time, car, ev) {
    const d = Math.hypot(car.x - SHOP_PLATE.x, car.z - SHOP_PLATE.z);
    const overlap = Math.max(0, 1 - d / (SHOP_PLATE.r + 0.8));
    this.shopLoad += (overlap - this.shopLoad) * Math.min(1, dt * 4);
    let sink = this.shopLoad * 0.05;
    if (this.shopT < 0) {
      if (Math.abs(car.v) < 0.04 && d < 1.1 && this.course.forecourt.enabled) {
        this.shopStill = (this.shopStill || 0) + dt;
        if (this.shopStill > 0.45 && !this.shopCool) {
          this.shopT = 0;
          ev.push('shop');
        }
      } else this.shopStill = 0;
      if (d > SHOP_PLATE.r + 1.5) this.shopCool = false;
    }
    if (this.shopT >= 0) {
      this.shopT += dt;
      const t = this.shopT;
      sink = 0.12 * seg(t, 0, 0.6) * (1 - seg(t, 5.5, 6.5));
      this.pipeMat.map.offset.x = -seg(t, 0.3, 2.0) * 4;
      this.lolly.rotation.z = -seg(t, 1.6, 6) * Math.PI * 6;
      this.bigCandy.rotation.y = seg(t, 1.6, 6) * Math.PI * 4;
      for (const [i, b] of this.rollers.entries()) {
        const u = (t - 1.8 - i * 0.35) / 1.6;
        b.visible = u > 0 && u < 1.15;
        if (u > 0 && u <= 1) b.position.copy(this.helix.getPointAt(Math.min(1, u))).add(new THREE.Vector3(0, 0.12, 0));
        if (u > 1 && u < 1.15) b.position.y = 0.75;
        if (u > 0.98 && !b.userData.popped) { b.userData.popped = true; ev.push('gumball'); }
      }
      if (t > 7) {
        this.shopT = -1;
        this.shopCool = true;
        for (const b of this.rollers) { b.visible = false; b.userData.popped = false; }
      }
    }
    this.shopPlate.position.y = -sink;
  }
}

function scaleUV(g, su, sv) {
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
}
