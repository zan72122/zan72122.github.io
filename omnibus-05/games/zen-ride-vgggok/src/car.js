// 子供用の赤い電動自動車：3Dモデルと低速の運動（自転車モデル）
import * as THREE from '../vendor/three.module.min.js';
import { RoundedBoxGeometry } from '../vendor/addons/RoundedBoxGeometry.js';
import { treadTexture, leatherTexture, iconTexture, stripeTexture, radialGlowTexture } from './textures.js';
import { mergeStatic } from './util.js';

export const CAR = {
  wheelbase: 1.5,
  track: 1.12,
  wheelR: 0.25,
  maxSteer: 0.66, // 約38度
  circleOffset: 0.55,
  circleR: 0.64,
};

const RB = (w, h, d, r, seg = 3) => new RoundedBoxGeometry(w, h, d, seg, r);

export function makeMaterials() {
  const paint = new THREE.MeshPhysicalMaterial({
    color: 0xd9182b, metalness: 0.25, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.3,
  });
  const chrome = new THREE.MeshStandardMaterial({ color: 0xf4f4f8, metalness: 1, roughness: 0.12, envMapIntensity: 1.4 });
  const tread = treadTexture();
  tread.wrapS = THREE.RepeatWrapping;
  const rubber = new THREE.MeshStandardMaterial({ color: 0x1d1d20, roughness: 0.9, metalness: 0, bumpMap: tread, bumpScale: 3 });
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x232327, roughness: 0.88, map: tread, bumpMap: tread, bumpScale: 4 });
  const black = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.6 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x2b2d33, roughness: 0.7 });
  const seat = new THREE.MeshStandardMaterial({ map: leatherTexture('#f7ecd6', '#c0884f', 2), roughness: 0.55 });
  const interior = new THREE.MeshStandardMaterial({ color: 0xefe2c8, roughness: 0.65 });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0xd8f0ff, metalness: 0, roughness: 0.03, transparent: true, opacity: 0.25, envMapIntensity: 2.2, depthWrite: false,
  });
  const lens = new THREE.MeshStandardMaterial({ color: 0xfffbe8, emissive: 0xfff3c0, emissiveIntensity: 0.15, roughness: 0.1, metalness: 0.1 });
  const amberOff = new THREE.MeshStandardMaterial({ color: 0xffa21f, emissive: 0xff8a00, emissiveIntensity: 0.05, roughness: 0.25 });
  const amberL = amberOff.clone();
  const amberR = amberOff.clone();
  const tail = new THREE.MeshStandardMaterial({ color: 0xff2a2a, emissive: 0xff0000, emissiveIntensity: 0.15, roughness: 0.25 });
  const yellow = new THREE.MeshStandardMaterial({ color: 0xffcc1a, roughness: 0.4, metalness: 0.2 });
  return { paint, chrome, rubber, tireMat, black, dark, seat, interior, glass, lens, amberL, amberR, tail, yellow };
}

function makeWheel(m, side) {
  const R = CAR.wheelR;
  const g = new THREE.Group();
  // タイヤ：丸い肩を持つ断面を回転させる
  const pts = [];
  const w = 0.1, ri = 0.13, sh = 0.055;
  pts.push(new THREE.Vector2(ri, -w));
  pts.push(new THREE.Vector2(R - sh, -w));
  for (let i = 1; i <= 6; i++) {
    const a = -Math.PI / 2 + (i / 6) * (Math.PI / 2);
    pts.push(new THREE.Vector2(R - sh + Math.cos(a) * sh, -w + sh + Math.sin(a) * sh));
  }
  for (let i = 0; i <= 6; i++) {
    const a = (i / 6) * (Math.PI / 2);
    pts.push(new THREE.Vector2(R - sh + Math.cos(a) * sh, w - sh + Math.sin(a) * sh));
  }
  pts.push(new THREE.Vector2(ri, w));
  const tg = new THREE.LatheGeometry(pts, 40);
  tg.rotateZ(Math.PI / 2);
  const tire = new THREE.Mesh(tg, m.tireMat);
  tire.castShadow = true;
  g.add(tire);
  // ホイール
  const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.17, 28), m.chrome);
  rim.rotation.z = Math.PI / 2;
  g.add(rim);
  const capG = new THREE.SphereGeometry(0.1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2);
  const cap = new THREE.Mesh(capG, m.chrome);
  cap.rotation.z = side * -Math.PI / 2;
  cap.position.x = side * 0.085;
  cap.scale.set(1, 0.45, 1);
  g.add(cap);
  const dot = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.02, 16), m.paint);
  dot.rotation.z = Math.PI / 2;
  dot.position.x = side * 0.13;
  g.add(dot);
  // ボルト（回転が見えるように）
  const boltG = new THREE.CylinderGeometry(0.014, 0.014, 0.03, 8);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const b = new THREE.Mesh(boltG, m.black);
    b.rotation.z = Math.PI / 2;
    b.position.set(side * 0.095, Math.cos(a) * 0.075, Math.sin(a) * 0.075);
    g.add(b);
  }
  // スポーク模様の窓
  const holeG = new THREE.CylinderGeometry(0.025, 0.025, 0.02, 12);
  for (let i = 0; i < 5; i++) {
    const a = ((i + 0.5) / 5) * Math.PI * 2;
    const h = new THREE.Mesh(holeG, m.dark);
    h.rotation.z = Math.PI / 2;
    h.position.set(side * 0.084, Math.cos(a) * 0.115, Math.sin(a) * 0.115);
    g.add(h);
  }
  return g;
}

function roundRectShape(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

export class RedCar {
  constructor(course) {
    this.course = course;
    this.m = makeMaterials();
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.root.add(this.body);
    this.pickables = [];
    this._build();

    // 運動状態
    this.x = 0; this.z = 4; this.h = 0;
    this.v = 0; this.steer = 0;
    this.y = 0; this.pitch = 0; this.roll = 0;
    this.vy = 0; this.heave = 0; this.heaveV = 0;
    this.pitchDyn = 0; this.pitchDynV = 0;
    this.rollDyn = 0; this.rollDynV = 0;
    this.spin = 0;
    this.lastAccel = 0;
    this.contact = 0;
    this.contactTimer = 0;
    this.pushing = 0;
    this.lockedOnPlate = false;
    this.load = 0;
    this.doorOpen = 0;
    this.handlePull = 0;
    this.latch = 0;
    this.wiper = 0;
    this.wiperT = -1;
    this.headOn = 0;
    this.blinkL = false; this.blinkR = false;
    this.brakeLight = 0;
    this.flagPhase = 0;
    this.distance = 0;
  }

  _build() {
    const m = this.m;
    const B = this.body;
    const add = (geo, mat, x, y, z, parent = B, shadow = true) => {
      const me = new THREE.Mesh(geo, mat);
      me.position.set(x, y, z);
      if (shadow) { me.castShadow = true; me.receiveShadow = true; }
      parent.add(me);
      return me;
    };

    // 車体：前（ボンネット）、後ろ（トランク）、左側壁、右ドア
    const shells = [
      add(RB(1.24, 0.4, 0.98, 0.17, 4), m.paint, 0, 0.5, 0.71),
      add(RB(1.24, 0.5, 0.62, 0.17, 4), m.paint, 0, 0.45, -0.89),
      add(RB(0.1, 0.46, 0.9, 0.045), m.paint, 0.57, 0.45, -0.15),
    ];
    for (const sh of shells) { sh.userData.kind = 'carBody'; this.pickables.push(sh); }
    // 下まわり
    add(RB(1.06, 0.12, 1.5, 0.05), m.dark, 0, 0.22, -0.15);
    add(new THREE.BoxGeometry(1.04, 0.05, 0.86), m.interior, 0, 0.29, -0.15);
    // 室内の壁（クリーム色）
    add(new THREE.BoxGeometry(1.0, 0.36, 0.04), m.interior, 0, 0.48, -0.58, B, false);
    add(new THREE.BoxGeometry(1.0, 0.3, 0.04), m.interior, 0, 0.5, 0.23, B, false);

    // ドア（右側＝運転席側）。前端の蝶番で開く
    this.door = new THREE.Group();
    this.door.position.set(-0.57, 0, 0.29);
    B.add(this.door);
    const doorPanel = add(RB(0.1, 0.46, 0.88, 0.045), m.paint, 0, 0.45, -0.44, this.door);
    doorPanel.name = 'door';
    // ドアの内張り
    add(new THREE.BoxGeometry(0.02, 0.36, 0.78), m.interior, 0.05, 0.47, -0.44, this.door, false);
    // 銀色のドアノブ（引きたくなる形）
    this.handle = new THREE.Group();
    this.handle.position.set(-0.058, 0.56, -0.72);
    this.door.add(this.handle);
    const hBase = add(RB(0.03, 0.06, 0.2, 0.014), m.chrome, -0.005, 0, 0, this.handle);
    hBase.castShadow = false;
    this.handleGrip = new THREE.Group();
    this.handleGrip.position.set(0, 0, 0.08);
    this.handle.add(this.handleGrip);
    const grip = add(new THREE.CapsuleGeometry(0.022, 0.16, 6, 12), m.chrome, -0.035, 0, -0.08, this.handleGrip);
    grip.rotation.x = Math.PI / 2;
    // ラッチの窓（中の機構が見える）
    const win = new THREE.Group();
    win.position.set(-0.056, 0.42, -0.72);
    this.door.add(win);
    const back = new THREE.Mesh(new THREE.CircleGeometry(0.085, 28), m.dark);
    back.rotation.y = -Math.PI / 2;
    win.add(back);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.088, 0.012, 8, 32), m.chrome);
    ring.rotation.y = -Math.PI / 2;
    ring.position.x = -0.006;
    win.add(ring);
    this.latchRod = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.11, 8), m.chrome);
    this.latchRod.position.set(-0.008, 0.045, 0.0);
    win.add(this.latchRod);
    this.latchHook = new THREE.Group();
    this.latchHook.position.set(-0.01, -0.012, -0.02);
    win.add(this.latchHook);
    const hookShape = new THREE.Shape();
    hookShape.moveTo(0, 0);
    hookShape.absarc(0, 0, 0.042, -Math.PI * 0.2, Math.PI * 1.1, false);
    hookShape.lineTo(-0.02, 0.005);
    hookShape.absarc(0, 0, 0.022, Math.PI * 1.1, -Math.PI * 0.2, true);
    const hook = new THREE.Mesh(new THREE.ExtrudeGeometry(hookShape, { depth: 0.008, bevelEnabled: false }), m.yellow);
    hook.rotation.y = -Math.PI / 2;
    this.latchHook.add(hook);
    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.02, 10), m.chrome);
    pin.rotation.z = Math.PI / 2;
    pin.position.set(-0.004, -0.0, 0.05);
    win.add(pin);
    const wglass = new THREE.Mesh(new THREE.CircleGeometry(0.084, 28), m.glass);
    wglass.rotation.y = -Math.PI / 2;
    wglass.position.x = -0.014;
    win.add(wglass);
    // ドアノブのタッチ判定（少し大きめ）
    const hit = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.set(-0.08, 0.5, -0.66);
    this.door.add(hit);
    this.handleHit = hit;
    this.doorHit = doorPanel;

    // 左側（助手席側）のドアノブ（飾り）
    const lh = add(new THREE.CapsuleGeometry(0.022, 0.16, 6, 12), m.chrome, 0.63, 0.56, -0.42);
    lh.rotation.x = Math.PI / 2;

    // フェンダー
    const fenderG = new THREE.TorusGeometry(0.29, 0.06, 10, 20, Math.PI);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const f = add(fenderG, m.paint, sx * 0.6, 0.27, sz * CAR.wheelbase / 2);
      f.rotation.y = Math.PI / 2;
      f.scale.set(1.15, 1.0, 1.6);
    }

    // フロント：丸いヘッドライト、笑顔のグリル、バンパー
    this.lensMats = [];
    for (const sx of [-1, 1]) {
      const rg = add(new THREE.TorusGeometry(0.1, 0.026, 12, 28), m.chrome, sx * 0.36, 0.58, 1.2);
      const ln = add(new THREE.SphereGeometry(0.1, 24, 12), m.lens, sx * 0.36, 0.58, 1.19);
      ln.scale.set(1, 1, 0.5);
      const pupil = add(new THREE.CircleGeometry(0.035, 16), new THREE.MeshStandardMaterial({ color: 0xfff6d0, emissive: 0xffeeaa, emissiveIntensity: 0.3 }), sx * 0.36, 0.58, 1.245, B, false);
      void rg; void pupil;
      this.pickables.push(ln);
      ln.userData.kind = 'headlight';
    }
    const grille = add(new THREE.TorusGeometry(0.24, 0.022, 8, 24, Math.PI * 0.7), m.chrome, 0, 0.5, 1.2, B, false);
    grille.rotation.z = Math.PI + Math.PI * 0.15;
    add(new THREE.CapsuleGeometry(0.055, 1.12, 6, 12), m.chrome, 0, 0.32, 1.24).rotation.z = Math.PI / 2;
    add(new THREE.CapsuleGeometry(0.055, 1.12, 6, 12), m.chrome, 0, 0.3, -1.22).rotation.z = Math.PI / 2;
    // ナンバープレート（星の絵）
    const plateMat = new THREE.MeshStandardMaterial({ map: iconTexture('star', '#ffcc1a', '#ffffff'), roughness: 0.4 });
    add(new THREE.PlaneGeometry(0.26, 0.13), plateMat, 0, 0.42, 1.205, B, false);
    const pb = add(new THREE.PlaneGeometry(0.26, 0.13), plateMat, 0, 0.45, -1.205, B, false);
    pb.rotation.y = Math.PI;

    // ウインカー（前後・ミラー）
    this.blinkersL = [];
    this.blinkersR = [];
    const glowTex = radialGlowTexture('255,170,40');
    this.blinkGlowL = [];
    this.blinkGlowR = [];
    const bl = (x, y, z, left, r = 0.05) => {
      const me = add(new THREE.SphereGeometry(r, 14, 10), left ? m.amberL : m.amberR, x, y, z, B, false);
      me.scale.set(1, 0.8, 0.6);
      (left ? this.blinkersL : this.blinkersR).push(me);
      // 点灯したときの光のにじみ
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
      sp.position.set(x, y, z);
      sp.scale.setScalar(r * 9);
      sp.visible = false;
      B.add(sp);
      (left ? this.blinkGlowL : this.blinkGlowR).push(sp);
    };
    bl(0.55, 0.48, 1.16, true); bl(-0.55, 0.48, 1.16, false);
    bl(0.5, 0.5, -1.19, true); bl(-0.5, 0.5, -1.19, false);
    // テールランプ
    for (const sx of [-1, 1]) {
      const tl = add(new THREE.SphereGeometry(0.075, 18, 10), m.tail, sx * 0.3, 0.55, -1.19, B, false);
      tl.scale.set(1, 1, 0.45);
      add(new THREE.TorusGeometry(0.075, 0.018, 8, 20), m.chrome, sx * 0.3, 0.55, -1.2, B, false);
    }

    // サイドミラー
    for (const sx of [-1, 1]) {
      const mg = new THREE.Group();
      mg.position.set(sx * 0.62, 0.7, 0.22);
      B.add(mg);
      add(new THREE.CylinderGeometry(0.012, 0.012, 0.12, 8), m.chrome, sx * 0.04, 0.03, 0, mg).rotation.z = sx * 1.1;
      const hous = add(RB(0.16, 0.1, 0.06, 0.03), m.paint, sx * 0.1, 0.07, 0, mg);
      void hous;
      add(new THREE.PlaneGeometry(0.13, 0.075), m.chrome, sx * 0.1, 0.07, -0.032, mg, false).rotation.y = Math.PI;
      bl(sx * 0.17, 0.77, 0.22, sx > 0, 0.025);
    }

    // フロントガラス、枠、ワイパー
    const ws = new THREE.Group();
    ws.position.set(0, 0.69, 0.26);
    ws.rotation.x = -0.42;
    B.add(ws);
    const frameShape = roundRectShape(1.12, 0.46, 0.08);
    frameShape.holes.push(roundRectShape(1.0, 0.36, 0.05));
    const frame = add(new THREE.ExtrudeGeometry(frameShape, { depth: 0.035, bevelEnabled: true, bevelSize: 0.008, bevelThickness: 0.008, bevelSegments: 2 }), m.paint, 0, 0.23, -0.02, ws);
    void frame;
    const glassMesh = add(new THREE.ShapeGeometry(roundRectShape(1.0, 0.36, 0.05)), m.glass, 0, 0.23, 0.0, ws, false);
    glassMesh.renderOrder = 2;
    this.wipers = [];
    for (const px of [-0.3, 0.16]) {
      const wg = new THREE.Group();
      wg.position.set(px, 0.06, 0.04);
      ws.add(wg);
      const arm = add(new THREE.BoxGeometry(0.34, 0.016, 0.012), m.black, 0.17, 0, 0, wg);
      void arm;
      add(new THREE.BoxGeometry(0.3, 0.012, 0.022), m.black, 0.19, 0.012, 0.004, wg);
      add(new THREE.CylinderGeometry(0.018, 0.018, 0.03, 10), m.black, 0, 0, 0, wg).rotation.x = Math.PI / 2;
      wg.rotation.z = 0.05;
      this.wipers.push(wg);
    }
    this.windshield = glassMesh;
    this.pickables.push(glassMesh);
    glassMesh.userData.kind = 'wiper';

    // ダッシュボードと小さなハンドル（大きなハンドルと連動）
    add(RB(1.06, 0.14, 0.2, 0.05), m.dark, 0, 0.66, 0.18);
    const col = add(new THREE.CylinderGeometry(0.025, 0.03, 0.22, 10), m.black, -0.29, 0.63, 0.06);
    col.rotation.x = -1.0;
    this.miniWheel = new THREE.Group();
    this.miniWheel.position.set(-0.29, 0.68, -0.03);
    this.miniWheel.rotation.x = 0.55;
    B.add(this.miniWheel);
    this.miniWheelSpin = new THREE.Group();
    this.miniWheel.add(this.miniWheelSpin);
    const mw = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.02, 10, 32), m.rubber);
    this.miniWheelSpin.add(mw);
    for (const a of [0, Math.PI * 0.5 + Math.PI, Math.PI]) {
      const sp = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.016, 0.012), m.chrome);
      sp.position.set(Math.cos(a) * 0.065, Math.sin(a) * 0.065, 0);
      sp.rotation.z = a;
      this.miniWheelSpin.add(sp);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.02, 16), m.paint);
    hub.rotation.x = Math.PI / 2;
    this.miniWheelSpin.add(hub);
    const mark = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.03, 0.03), m.yellow);
    mark.position.set(0, 0.13, 0);
    this.miniWheelSpin.add(mark);

    // シート（縫い目のある革）
    for (const sx of [-0.29, 0.29]) {
      add(RB(0.44, 0.12, 0.44, 0.05), m.seat, sx, 0.38, -0.22);
      const back = add(RB(0.44, 0.46, 0.1, 0.05), m.seat, sx, 0.62, -0.47);
      back.rotation.x = -0.12;
    }

    // 運転席のブースタークッション（子供の目線を上げる）
    add(RB(0.4, 0.13, 0.38, 0.05), m.seat, -0.29, 0.5, -0.2);

    // 安全旗（車速で揺れる）
    const pole = add(new THREE.CylinderGeometry(0.008, 0.008, 1.0, 6), m.black, 0.5, 1.05, -1.05);
    void pole;
    this.flag = new THREE.Group();
    this.flag.position.set(0.5, 1.48, -1.05);
    B.add(this.flag);
    const flagGeo = new THREE.PlaneGeometry(0.3, 0.18, 6, 2);
    flagGeo.translate(-0.15, 0, 0);
    this.flagGeo = flagGeo;
    this.flagBase = Float32Array.from(flagGeo.attributes.position.array);
    const flagMat = new THREE.MeshStandardMaterial({ map: stripeTexture('#ff8a00', '#ffd23f', 2), side: THREE.DoubleSide, roughness: 0.7 });
    const fm = new THREE.Mesh(flagGeo, flagMat);
    fm.rotation.y = -Math.PI / 2;
    fm.castShadow = true;
    this.flag.add(fm);

    // 車輪：前輪は操舵ナックル付き、タイロッドで連結（操舵機構が見える）
    this.wheels = [];
    const hz = CAR.wheelbase / 2, hx = CAR.track / 2;
    for (const [sx, sz, front] of [[1, 1, true], [-1, 1, true], [1, -1, false], [-1, -1, false]]) {
      const mount = new THREE.Group();
      mount.position.set(sx * (hx + 0.04), CAR.wheelR, sz * hz);
      B.add(mount);
      const steer = new THREE.Group();
      mount.add(steer);
      const spinner = makeWheel(m, sx);
      steer.add(spinner);
      this.wheels.push({ mount, steer, spinner, sx, sz, front, baseY: CAR.wheelR, off: 0 });
      if (front) {
        // ナックルアーム
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.16), m.chrome);
        arm.position.set(-sx * 0.12, -0.03, 0.08);
        steer.add(arm);
      }
    }
    this.tieRod = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.92, 10), m.chrome);
    this.tieRod.rotation.z = Math.PI / 2;
    this.tieRod.position.set(0, CAR.wheelR - 0.03, hz + 0.16);
    B.add(this.tieRod);
    const rack = add(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 12), m.dark, 0, CAR.wheelR + 0.02, hz + 0.08);
    rack.rotation.z = Math.PI / 2;
    // 車軸
    const axle = new THREE.CylinderGeometry(0.025, 0.025, CAR.track, 10);
    const ra = add(axle, m.dark, 0, CAR.wheelR, -hz);
    ra.rotation.z = Math.PI / 2;
    // モーターケース
    add(RB(0.3, 0.16, 0.2, 0.04), m.dark, 0.18, CAR.wheelR, -hz + 0.05);

    this.pickables.push(doorPanel);
    doorPanel.userData.kind = 'door';
    hit.userData.kind = 'handle';
    this.pickables.push(hit);

    // 動かない部品をまとめる（車輪のボルトなどは車輪ごとに）
    for (const w of this.wheels) mergeStatic(w.spinner);
    const keep = new Set([
      this.door, ...this.wheels.map((w) => w.mount), this.tieRod, this.miniWheel, this.flag, ...this.wipers,
      ...this.pickables,
    ]);
    mergeStatic(this.body, keep);
  }

  // 乗員を座らせる位置（車体ローカル）
  seatPos(driver) {
    return new THREE.Vector3(driver ? -0.29 : 0.29, 0.44, -0.24);
  }

  setPose(x, z, h) {
    this.x = x; this.z = z; this.h = h;
    this.root.position.set(x, 0, z);
    this.root.rotation.y = h;
  }

  forward() { return { x: Math.sin(this.h), z: Math.cos(this.h) }; }

  // 1 フレームの運動。input: { steer(-1..1), target(m/s), brake(bool), power(bool) }
  update(dt, input) {
    const c = this.course;
    this.steer = input.steer * CAR.maxSteer;

    // 縦方向：低速巡航補助。目標速度に向かって穏やかに加減速
    const prevV = this.v;
    const slope = Math.sin(this.pitch); // 上り坂で正
    this.load = slope;
    let target = input.target;
    if (slope > 0.03) target *= 1 - Math.min(slope, 0.3) * 0.9;
    else if (slope < -0.03) target *= 1 + Math.min(-slope, 0.3) * 0.4;
    if (this.lockedOnPlate) target = 0;
    if (input.brake) {
      this.v = Math.max(0, this.v - 3.2 * dt);
    } else if (this.v < target) {
      this.v = Math.min(target, this.v + (1.3 - slope * 2.5) * dt);
    } else {
      const dec = target === 0 ? 1.1 : 0.9;
      this.v = Math.max(target, this.v - dec * dt);
    }
    if (this.lockedOnPlate) this.v = 0;
    this.lastAccel = (this.v - prevV) / Math.max(dt, 1e-3);

    // 横方向：前輪の角度と移動距離から旋回（自転車モデル）
    const ds = this.v * dt;
    const pushV = input.target > 0 && !input.brake ? Math.max(this.v, this.pushing * 0.6) : this.v;
    const dh = ((this.pushing > 0 ? pushV : this.v) * dt / CAR.wheelbase) * Math.tan(this.steer);
    const hm = this.h + dh * 0.5;
    this.x += Math.sin(hm) * ds;
    this.z += Math.cos(hm) * ds;
    this.h += dh;
    this.distance += ds;

    // 柔らかいガード：前後 2 つの円で押し戻す
    let contactN = null, contactPen = 0;
    for (let iter = 0; iter < 3; iter++) {
      const fx = Math.sin(this.h), fz = Math.cos(this.h);
      const lx = fz, lz = -fx; // 左方向
      const a = CAR.circleOffset;
      const rf = c.resolveCircle(this.x + fx * a, this.z + fz * a, CAR.circleR);
      const rr = c.resolveCircle(this.x - fx * a, this.z - fz * a, CAR.circleR);
      if (!rf && !rr) break;
      const pf = rf ? [rf.px, rf.pz] : [0, 0];
      const pr = rr ? [rr.px, rr.pz] : [0, 0];
      this.x += (pf[0] + pr[0]) * 0.5;
      this.z += (pf[1] + pr[1]) * 0.5;
      const dth = (((pf[0] - pr[0]) * lx + (pf[1] - pr[1]) * lz) / (2 * a)) * 0.6;
      this.h += dth;
      const n = rf || rr;
      contactN = n;
      contactPen = Math.max(rf ? rf.pen : 0, rr ? rr.pen : 0);
      // 押し戻しの不足分を直接補う
      this.x += (pf[0] + pr[0]) * 0.25;
      this.z += (pf[1] + pr[1]) * 0.25;
    }
    let impact = 0;
    if (contactN) {
      const fx = Math.sin(this.h), fz = Math.cos(this.h);
      const into = -(fx * contactN.nx + fz * contactN.nz); // 壁に向かう成分
      if (this.contact === 0 && this.v > 0.5 && into > 0.15) impact = this.v * into;
      if (into > 0) this.v *= 1 - Math.min(1, into * 2.2 * dt * 4);
      // 壁に沿うように車体をそっと向ける（摩擦）
      const tx = -contactN.nz, tz = contactN.nx;
      const along = fx * tx + fz * tz;
      const desired = Math.atan2(along >= 0 ? tx : -tx, along >= 0 ? tz : -tz);
      let dd = desired - this.h;
      dd = Math.atan2(Math.sin(dd), Math.cos(dd));
      this.h += dd * Math.min(1, dt * 1.6) * Math.min(1, into + 0.2) * (this.v > 0.05 || input.target > 0 ? 1 : 0);
      this.contact = 1;
      this.contactTimer = 0.15;
      this.pushing = input.target > 0 && into > 0.5 ? input.target : 0;
      if (impact > 0.4) {
        // 少し跳ね返る
        this.x += contactN.nx * 0.12;
        this.z += contactN.nz * 0.12;
        this.v *= 0.45;
        this.heaveV += 0.5 * impact;
        this.rollDynV += (Math.random() - 0.5) * impact;
      }
    } else {
      this.contactTimer -= dt;
      if (this.contactTimer <= 0) { this.contact = 0; this.pushing = 0; }
    }
    void contactPen;

    // 4 輪の接地高さから車体の姿勢を求める
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    const lx = fz, lz = -fx;
    const hz = CAR.wheelbase / 2, hx = CAR.track / 2;
    const hgt = (sx, sz) => c.groundHeight(this.x + fx * sz * hz + lx * sx * hx, this.z + fz * sz * hz + lz * sx * hx);
    const hFL = hgt(1, 1), hFR = hgt(-1, 1), hRL = hgt(1, -1), hRR = hgt(-1, -1);
    const hF = (hFL + hFR) / 2, hR = (hRL + hRR) / 2;
    const hL = (hFL + hRL) / 2, hRt = (hFR + hRR) / 2;
    const tPitch = Math.atan2(hF - hR, CAR.wheelbase);
    const tRoll = Math.atan2(hL - hRt, CAR.track);
    const tY = (hF + hR) / 2;
    const k = 1 - Math.exp(-dt * 18);
    this.pitch += (tPitch - this.pitch) * k;
    this.roll += (tRoll - this.roll) * k;
    this.y += (tY - this.y) * (1 - Math.exp(-dt * 22));

    // サスペンション：加減速でのピッチ、段差での上下、旋回でのロール
    const spring = (x, v, target, kk, d) => {
      const a = (target - x) * kk - v * d;
      v += a * dt;
      x += v * dt;
      return [x, v];
    };
    [this.pitchDyn, this.pitchDynV] = spring(this.pitchDyn, this.pitchDynV, -this.lastAccel * 0.012, 120, 9);
    const lat = this.v * this.v / CAR.wheelbase * Math.tan(this.steer);
    [this.rollDyn, this.rollDynV] = spring(this.rollDyn, this.rollDynV, -lat * 0.02, 120, 8);
    const dy = tY - this.y;
    [this.heave, this.heaveV] = spring(this.heave, this.heaveV, dy * 0.0, 160, 7);

    this.root.position.set(this.x, this.y, this.z);
    this.root.rotation.y = this.h;
    this.body.rotation.order = 'XZY';
    this.body.rotation.x = -(this.pitch + this.pitchDyn);
    this.body.rotation.z = this.roll + this.rollDyn;
    this.body.position.y = this.heave;

    // 車輪：転がり、操舵、接地
    this.spin += ds / CAR.wheelR;
    const hs = [hFL, hFR, hRL, hRR];
    for (let i = 0; i < 4; i++) {
      const w = this.wheels[i];
      w.spinner.rotation.x = this.spin;
      if (w.front) w.steer.rotation.y = this.steer;
      // 車体平面からのずれ（橋の継ぎ目などで個別に上下）
      const plane = tY + w.sz * hz * Math.tan(tPitch) + w.sx * hx * Math.tan(tRoll);
      w.off += ((hs[i] - plane) - w.off) * k;
      w.mount.position.y = w.baseY + w.off - this.heave;
    }
    this.tieRod.position.x = Math.sin(this.steer) * 0.12;
    this.miniWheelSpin.rotation.z = -(input.wheelAngle || 0);

    return impact;
  }

  // 見た目の小物（ドア、ウインカー、旗、ワイパー）
  updateVisual(dt, time) {
    this.door.rotation.y = this.doorOpen * 1.15;
    this.handleGrip.rotation.y = this.handlePull * 0.55;
    this.latchRod.position.y = 0.045 - this.handlePull * 0.02;
    this.latchHook.rotation.x = -this.latch * 1.2;

    const on = (v) => (v ? 2.6 : 0.04);
    this.m.amberL.emissiveIntensity = on(this.blinkL);
    this.m.amberR.emissiveIntensity = on(this.blinkR);
    for (const sp of this.blinkGlowL) sp.visible = this.blinkL;
    for (const sp of this.blinkGlowR) sp.visible = this.blinkR;
    this.m.tail.emissiveIntensity = 0.15 + this.brakeLight * 2.2;
    this.m.lens.emissiveIntensity = 0.15 + this.headOn * 1.6;

    // 旗：速度に応じてはためく
    this.flagPhase += dt * (3 + this.v * 5);
    const pos = this.flagGeo.attributes.position;
    const base = this.flagBase;
    const amp = 0.012 + Math.min(this.v, 3.5) * 0.012;
    for (let i = 0; i < pos.count; i++) {
      const x = base[i * 3];
      const t = -x / 0.3;
      pos.array[i * 3 + 2] = Math.sin(this.flagPhase - t * 5) * amp * t * 2.2;
    }
    pos.needsUpdate = true;
    this.flag.rotation.y = -Math.min(this.v, 3.5) * 0.08;

    // ワイパー（タップで一往復）
    if (this.wiperT >= 0) {
      this.wiperT += dt;
      const p = this.wiperT / 1.0;
      const a = p < 1 ? Math.sin(p * Math.PI) : 0;
      for (const w of this.wipers) w.rotation.z = 0.05 + a * 1.9;
      if (p >= 1) this.wiperT = -1;
    }
    void time;
  }
}
