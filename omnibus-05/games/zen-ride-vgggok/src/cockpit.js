// 操縦部：ハンドル、アクセル／ブレーキ（低速巡航のラチェット付き）、ウインカーレバー、メーター
// 正射影カメラで「画面のピクセル＝ワールド単位」として描く。縦画面と横画面で配置を変える。
import * as THREE from '../vendor/three.module.min.js';
import { RoundedBoxGeometry } from '../vendor/addons/RoundedBoxGeometry.js';
import { leatherTexture, padTexture, dialTexture, iconTexture, rubberMatTexture, shadowBlobTexture } from './textures.js';

const WHEEL_MAX = Math.PI * 0.8; // ハンドルの最大回転（約145度）
export const NOTCH_SPEED = [0, 1.25, 2.1, 3.0];

const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));
const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));

function rrShape(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

export class Cockpit {
  constructor(env, sound) {
    this.sound = sound;
    this.scene = new THREE.Scene();
    this.scene.environment = env;
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -2000, 2000);
    this.camera.position.z = 1000;
    const hemi = new THREE.HemisphereLight(0xffffff, 0x8a8f99, 1.4);
    this.scene.add(hemi);
    const key = new THREE.DirectionalLight(0xfff4e6, 2.2);
    key.position.set(-0.4, 0.9, 1.0);
    this.scene.add(key);
    // 次に触るものを照らす、ゆっくり動くきらめき
    this.glint = new THREE.PointLight(0xffffff, 0, 300, 2);
    this.scene.add(this.glint);
    this.glintTarget = null;
    this.glintT = 0;

    this.m = {
      rubber: new THREE.MeshStandardMaterial({ color: 0x1e1f23, roughness: 0.82 }),
      grip: new THREE.MeshStandardMaterial({ color: 0x26272c, roughness: 0.95 }),
      chrome: new THREE.MeshStandardMaterial({ color: 0xf2f3f7, metalness: 1, roughness: 0.14 }),
      paint: new THREE.MeshPhysicalMaterial({ color: 0xd9182b, metalness: 0.2, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.06 }),
      dark: new THREE.MeshStandardMaterial({ color: 0x2a2c31, roughness: 0.7 }),
      darker: new THREE.MeshStandardMaterial({ color: 0x17181b, roughness: 0.6 }),
      yellow: new THREE.MeshStandardMaterial({ color: 0xffcc1a, roughness: 0.4, metalness: 0.2 }),
      brass: new THREE.MeshStandardMaterial({ color: 0xe8b04a, metalness: 0.9, roughness: 0.3 }),
      dash: new THREE.MeshStandardMaterial({ map: leatherTexture('#f4e6cc', '#c0884f', 3), roughness: 0.6 }),
      dashRed: new THREE.MeshPhysicalMaterial({ color: 0xd9182b, metalness: 0.2, roughness: 0.32, clearcoat: 1, clearcoatRoughness: 0.08 }),
      mat: new THREE.MeshStandardMaterial({ map: rubberMatTexture(), roughness: 0.95 }),
      shadow: new THREE.MeshBasicMaterial({ map: shadowBlobTexture(), transparent: true, depthWrite: false }),
    };
    this.m.dash.map.wrapS = this.m.dash.map.wrapT = THREE.RepeatWrapping;

    this._buildDash();
    this._buildWheel();
    this._buildMeter();
    this._buildLever();
    this._buildPedals();

    // 状態
    this.wheelAngle = 0;
    this.wheelHeld = false;
    this.accelHeld = false;
    this.brakeHeld = false;
    this.notch = 0;
    this.holdT = 0;
    this.accelDepth = 0;
    this.brakeDepth = 0;
    this.signal = 0; // 1=左, -1=右
    this.leverAngle = 0;
    this.hornT = 0;
    this.blinkOn = false;
    this.needle = 0;
    this.sweep = -1;
    this.power = false;
    this.pawl = 0;
    this.show = { dash: 0, wheel: 0, meter: 0, pedals: 0, lever: 0 };
    this.target = { dash: 0, wheel: 0, meter: 0, pedals: 0, lever: 0 };
    this.enabled = { wheel: false, pedals: false, lever: false };
    this.pointers = new Map();
    this.events = [];
    this.steerRate = 0;
    this._lastTickAngle = 0;
    this.speed = 0;
    this.W = 1; this.H = 1;
    this.layout = null;
    this.signalSteerPeak = 0;
    this.cineHide = false;
  }

  emit(e) { this.events.push(e); }

  // -------------------------------------------------------------- 造形
  _buildDash() {
    this.dash = new THREE.Group();
    this.scene.add(this.dash);
    this.dashMesh = new THREE.Mesh(new THREE.BufferGeometry(), this.m.dash);
    this.dash.add(this.dashMesh);
    this.dashLip = new THREE.Mesh(new THREE.BufferGeometry(), this.m.dashRed);
    this.dash.add(this.dashLip);
    this.floor = new THREE.Mesh(new THREE.BufferGeometry(), this.m.mat);
  }

  _buildWheel() {
    const m = this.m;
    this.wheel = new THREE.Group();
    this.scene.add(this.wheel);
    this.wheelShadow = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 2.8), m.shadow);
    this.wheelShadow.position.set(0.12, -0.2, -0.6);
    this.wheel.add(this.wheelShadow);
    // コラム（回らない）
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.42, 0.7, 24), m.darker);
    col.rotation.x = Math.PI / 2;
    col.position.z = -0.45;
    this.wheel.add(col);
    this.wheelTilt = new THREE.Group();
    this.wheelTilt.rotation.x = -0.32;
    this.wheel.add(this.wheelTilt);
    this.wheelSpin = new THREE.Group();
    this.wheelTilt.add(this.wheelSpin);
    // 黒いゴムのリム（太く、握りやすい）
    const rim = new THREE.Mesh(new THREE.TorusGeometry(1, 0.13, 24, 96), m.rubber);
    this.wheelSpin.add(rim);
    // 指がかりのこぶ（握る場所が分かる）
    for (const a of [Math.PI * 0.8, Math.PI * 0.2]) {
      const g = new THREE.Mesh(new THREE.TorusGeometry(1, 0.155, 20, 24, 0.7), m.grip);
      g.rotation.z = a - 0.35;
      this.wheelSpin.add(g);
    }
    for (let i = 0; i < 28; i++) {
      const a = (i / 28) * Math.PI * 2;
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), m.grip);
      b.position.set(Math.cos(a) * 0.9, Math.sin(a) * 0.9, 0.06);
      this.wheelSpin.add(b);
    }
    // 12時の黄色い印（回した量が見える）
    const mark = new THREE.Mesh(new THREE.TorusGeometry(1, 0.138, 16, 12, 0.16), m.yellow);
    mark.rotation.z = Math.PI / 2 - 0.08;
    this.wheelSpin.add(mark);
    // 銀色のスポーク
    for (const a of [0, Math.PI, -Math.PI / 2]) {
      const sp = new THREE.Mesh(new RoundedBoxGeometry(0.66, 0.2, 0.09, 2, 0.04), m.chrome);
      sp.position.set(Math.cos(a) * 0.6, Math.sin(a) * 0.6, -0.02);
      sp.rotation.z = a;
      this.wheelSpin.add(sp);
    }
    // 中央：クラクション（押せる）
    this.hornPad = new THREE.Group();
    this.wheelSpin.add(this.hornPad);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.38, 0.2, 40), m.paint);
    hub.rotation.x = Math.PI / 2;
    hub.position.z = 0.04;
    this.hornPad.add(hub);
    const hubRing = new THREE.Mesh(new THREE.TorusGeometry(0.37, 0.035, 10, 40), m.chrome);
    hubRing.position.z = 0.14;
    this.hornPad.add(hubRing);
    const icon = new THREE.Mesh(new THREE.CircleGeometry(0.2, 24), new THREE.MeshStandardMaterial({ map: iconTexture('horn', '#ffffff'), transparent: true, roughness: 0.4 }));
    icon.position.z = 0.15;
    this.hornPad.add(icon);
  }

  _buildMeter() {
    const m = this.m;
    this.meter = new THREE.Group();
    this.scene.add(this.meter);
    const pod = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.3, 0.4, 48), m.darker);
    pod.rotation.x = Math.PI / 2;
    pod.position.z = -0.25;
    this.meter.add(pod);
    const bezel = new THREE.Mesh(new THREE.TorusGeometry(1.05, 0.09, 14, 64), m.chrome);
    this.meter.add(bezel);
    this.faceMat = new THREE.MeshStandardMaterial({ map: dialTexture(), roughness: 0.5, emissive: 0xffffff, emissiveMap: null, emissiveIntensity: 0 });
    this.faceMat.emissiveMap = this.faceMat.map;
    const face = new THREE.Mesh(new THREE.CircleGeometry(1.0, 64), this.faceMat);
    face.position.z = -0.02;
    this.meter.add(face);
    this.needleG = new THREE.Group();
    this.meter.add(this.needleG);
    const needle = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.78, 0.03), new THREE.MeshStandardMaterial({ color: 0xff5a2a, emissive: 0xff3a10, emissiveIntensity: 0.6 }));
    needle.position.y = 0.36;
    this.needleG.add(needle);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 20), m.chrome);
    cap.rotation.x = Math.PI / 2;
    cap.position.z = 0.04;
    this.meter.add(cap);
    // 緑の矢印（ウインカー）
    const arrowShape = (dir) => {
      const s = new THREE.Shape();
      s.moveTo(dir * 0.3, 0);
      s.lineTo(0, 0.25); s.lineTo(0, 0.1); s.lineTo(-dir * 0.25, 0.1);
      s.lineTo(-dir * 0.25, -0.1); s.lineTo(0, -0.1); s.lineTo(0, -0.25);
      s.closePath();
      return new THREE.ShapeGeometry(s);
    };
    this.arrowL = new THREE.MeshStandardMaterial({ color: 0x0e3a1c, emissive: 0x2dff6a, emissiveIntensity: 0 });
    this.arrowR = this.arrowL.clone();
    const aL = new THREE.Mesh(arrowShape(-1), this.arrowL);
    aL.position.set(-1.55, 0.55, 0);
    this.meter.add(aL);
    const aR = new THREE.Mesh(arrowShape(1), this.arrowR);
    aR.position.set(1.55, 0.55, 0);
    this.meter.add(aR);
    for (const a of [aL, aR]) {
      const back = new THREE.Mesh(new THREE.CircleGeometry(0.36, 24), m.darker);
      back.position.set(a.position.x, a.position.y, -0.05);
      this.meter.add(back);
    }
    // 巡航の段数ランプ（3つ）
    this.notchMats = [];
    for (let i = 0; i < 3; i++) {
      const mm = new THREE.MeshStandardMaterial({ color: 0x14361e, emissive: 0x4dff8a, emissiveIntensity: 0 });
      const l = new THREE.Mesh(new THREE.CircleGeometry(0.075, 16), mm);
      l.position.set(-0.22 + i * 0.22, -0.3, 0.01);
      this.meter.add(l);
      this.notchMats.push(mm);
    }
    // ブレーキ灯（赤）
    this.brakeLamp = new THREE.MeshStandardMaterial({ color: 0x3a0a0a, emissive: 0xff2a2a, emissiveIntensity: 0 });
    const bl = new THREE.Mesh(new THREE.CircleGeometry(0.075, 16), this.brakeLamp);
    bl.position.set(0, -0.52, 0.01);
    this.meter.add(bl);
  }

  _buildLever() {
    const m = this.m;
    this.lever = new THREE.Group();
    this.scene.add(this.lever);
    const housing = new THREE.Mesh(new THREE.SphereGeometry(0.22, 20, 14), m.darker);
    this.lever.add(housing);
    this.leverArm = new THREE.Group();
    this.lever.add(this.leverArm);
    const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 1.6, 16), m.darker);
    stalk.rotation.z = -Math.PI / 2;
    stalk.position.x = 0.8;
    this.leverArm.add(stalk);
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.105, 0.22, 16), new THREE.MeshStandardMaterial({ color: 0x1a7a3a, roughness: 0.4 }));
    band.rotation.z = -Math.PI / 2;
    band.position.x = 1.25;
    this.leverArm.add(band);
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.15, 20, 14), m.chrome);
    tip.position.x = 1.62;
    tip.scale.set(1.3, 1, 1);
    this.leverArm.add(tip);
    // 上下の目盛り（レバーが止まる位置の小さな溝）
    for (const y of [-1, 1]) {
      const n = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.05), m.dark);
      n.position.set(0.32, y * 0.17, -0.1);
      this.lever.add(n);
    }
  }

  _buildPedals() {
    const m = this.m;
    this.pedals = new THREE.Group();
    this.scene.add(this.pedals);
    this.pedals.add(this.floor);
    const mkPedal = (w, h, accent) => {
      const root = new THREE.Group();
      const hinge = new THREE.Group();
      root.add(hinge);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.9, 0.08), m.darker);
      arm.position.set(0, h + 0.3, -0.35);
      root.add(arm);
      const plate = new THREE.Mesh(new RoundedBoxGeometry(w, h, 0.16, 3, 0.1), m.chrome);
      plate.position.set(0, h / 2, 0);
      hinge.add(plate);
      const pad = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.9, h * 0.92), new THREE.MeshStandardMaterial({ map: padTexture(accent), roughness: 0.75 }));
      pad.position.set(0, h / 2, 0.085);
      hinge.add(pad);
      const sh = new THREE.Mesh(new THREE.PlaneGeometry(w * 1.6, h * 1.4), m.shadow);
      sh.position.set(0.06, h / 2 - 0.12, -0.3);
      root.add(sh);
      hinge.rotation.x = -0.5;
      return { root, hinge, w, h, sh };
    };
    this.brake = mkPedal(1.25, 0.95, '#ff4a3a');
    this.accel = mkPedal(0.78, 1.45, '#3ad16a');
    this.pedals.add(this.brake.root, this.accel.root);
    // ラチェット（歯）と黄色い爪：アクセルが踏まれたまま止まる仕組みが見える
    this.rack = new THREE.Group();
    this.accel.root.add(this.rack);
    const rackBar = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.3, 0.12), m.brass);
    rackBar.position.set(0, 0, 0);
    this.rack.add(rackBar);
    for (let i = 0; i < 4; i++) {
      const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.16, 3), m.brass);
      tooth.rotation.z = -Math.PI / 2;
      tooth.position.set(0.12, 0.45 - i * 0.3, 0);
      this.rack.add(tooth);
    }
    this.rack.position.set(-0.66, 0.75, -0.05);
    this.pawlG = new THREE.Group();
    this.pawlG.position.set(-0.3, 0.75 + 0.6, 0.02);
    this.accel.root.add(this.pawlG);
    const pawl = new THREE.Mesh(new RoundedBoxGeometry(0.3, 0.12, 0.08, 2, 0.04), m.yellow);
    pawl.position.x = -0.12;
    this.pawlG.add(pawl);
    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.12, 12), m.chrome);
    pin.rotation.x = Math.PI / 2;
    this.pawlG.add(pin);
  }

  // -------------------------------------------------------------- 配置
  resize(W, H, safe) {
    this.W = W; this.H = H;
    const cam = this.camera;
    cam.left = 0; cam.right = W; cam.top = 0; cam.bottom = -H;
    cam.updateProjectionMatrix();
    const portrait = H >= W;
    const sb = safe.bottom, sl = safe.left, sr = safe.right;
    const L = { portrait };
    if (portrait) {
      const panelH = Math.min(H * 0.43, Math.max(300, W * 0.95));
      L.panelTop = H - panelH;
      const usableW = W - sl - sr;
      L.wheelR = Math.min(usableW * 0.27, panelH * 0.31);
      L.wheel = [sl + usableW * 0.33, H - sb - panelH * 0.42 + 6];
      L.meterR = Math.min(panelH * 0.11, 62);
      L.meter = [L.wheel[0], L.panelTop + L.meterR + 12];
      L.pedalScale = Math.min(usableW * 0.19, panelH * 0.26);
      L.brake = [sl + usableW * 0.71, H - sb - 14];
      L.accel = [sl + usableW * 0.905, H - sb - 10];
      L.leverScale = L.wheelR * 0.42;
      L.lever = [L.wheel[0] + L.wheelR * 0.98, L.wheel[1] - L.wheelR * 0.62];
      L.worldBottom = L.panelTop + 26;
    } else {
      const s = Math.min(H, W * 0.62);
      L.wheelR = Math.min(s * 0.24, 190);
      L.wheel = [sl + L.wheelR * 1.45 + 10, H - sb - L.wheelR * 1.12];
      L.meterR = Math.min(L.wheelR * 0.36, 58);
      L.meter = [L.wheel[0] + L.wheelR * 1.85, H - sb - L.meterR * 1.5];
      L.pedalScale = Math.min(s * 0.16, 108);
      L.accel = [W - sr - L.pedalScale * 0.8 - 18, H - sb - 16];
      L.brake = [L.accel[0] - L.pedalScale * 1.25, H - sb - 20];
      L.leverScale = L.wheelR * 0.42;
      L.lever = [L.wheel[0] + L.wheelR * 1.02, L.wheel[1] - L.wheelR * 0.55];
      L.panelTop = H - Math.max(L.wheelR * 0.9, L.pedalScale * 2.0) - sb;
      L.worldBottom = H - (H - L.panelTop) * 0.55;
    }
    this.layout = L;
    this._layoutDash();
  }

  _layoutDash() {
    const L = this.layout, W = this.W, H = this.H;
    const old = [this.dashMesh.geometry, this.dashLip.geometry, this.floor.geometry];
    if (L.portrait) {
      const ph = H - L.panelTop;
      const s = rrShape(W + 40, ph + 60, 34);
      const g = new THREE.ExtrudeGeometry(s, { depth: 20, bevelEnabled: true, bevelThickness: 14, bevelSize: 14, bevelSegments: 4, curveSegments: 10 });
      this._uvPlanar(g, 160);
      this.dashMesh.geometry = g;
      this.dashMesh.position.set(W / 2, -(L.panelTop + (ph + 60) / 2) + 6, -200);
      this.dashMesh.material = this.m.dash;
      // 上の赤い縁（車内らしさ）
      const lip = rrShape(W + 40, 34, 17);
      const lg = new THREE.ExtrudeGeometry(lip, { depth: 10, bevelEnabled: true, bevelThickness: 10, bevelSize: 8, bevelSegments: 4, curveSegments: 8 });
      this._uvPlanar(lg, 120);
      this.dashLip.geometry = lg;
      this.dashLip.position.set(W / 2, -L.panelTop - 4, -170);
      this.dashLip.visible = true;
      // 足元のマット
      const fw = W - L.brake[0] + L.pedalScale * 0.9;
      const fh = (H - L.accel[1]) + L.pedalScale * 1.75;
      const fs = rrShape(fw + 30, fh + 30, 24);
      const fg = new THREE.ExtrudeGeometry(fs, { depth: 6, bevelEnabled: true, bevelThickness: 6, bevelSize: 6, bevelSegments: 2 });
      this._uvPlanar(fg, 60);
      this.floor.geometry = fg;
      this.floor.position.set(W - fw / 2 + 10, -(H - fh / 2 + 10), -150);
      this.floor.visible = true;
    } else {
      // 横画面：ハンドルの後ろの小さなダッシュボードと、ペダルの下のマット
      const dw = (L.meter[0] + L.meterR * 2.2);
      const dh = H - L.wheel[1] - L.wheelR * 0.05;
      const s = rrShape(dw + 40, dh + 40, 40);
      const g = new THREE.ExtrudeGeometry(s, { depth: 20, bevelEnabled: true, bevelThickness: 14, bevelSize: 14, bevelSegments: 4, curveSegments: 10 });
      this._uvPlanar(g, 160);
      this.dashMesh.geometry = g;
      this.dashMesh.position.set(dw / 2 - 20, -(H - dh / 2 + 20), -200);
      const lip = rrShape(dw + 40, 30, 15);
      const lg = new THREE.ExtrudeGeometry(lip, { depth: 10, bevelEnabled: true, bevelThickness: 10, bevelSize: 8, bevelSegments: 4 });
      this._uvPlanar(lg, 120);
      this.dashLip.geometry = lg;
      this.dashLip.position.set(dw / 2 - 20, -(H - dh) + 2, -170);
      const fw = (W - L.brake[0]) + L.pedalScale * 0.9;
      const fh = (H - L.accel[1]) + L.pedalScale * 1.75;
      const fs = rrShape(fw + 30, fh + 30, 28);
      const fg = new THREE.ExtrudeGeometry(fs, { depth: 6, bevelEnabled: true, bevelThickness: 6, bevelSize: 6, bevelSegments: 2 });
      this._uvPlanar(fg, 60);
      this.floor.geometry = fg;
      this.floor.position.set(W - fw / 2 + 10, -(H - fh / 2 + 10), -150);
    }
    old.forEach((g) => g.dispose());
  }

  _uvPlanar(g, scale) {
    const p = g.attributes.position, uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i) / scale, p.getY(i) / scale);
  }

  // スクリーン座標 → この場の座標（y 反転）
  _place(obj, xy, scale, z, slide) {
    obj.position.set(xy[0], -xy[1] - slide, z);
    obj.scale.setScalar(scale);
  }

  // -------------------------------------------------------------- 入力
  // 戻り値：この操作部が指を受け取ったら true
  pointerDown(id, x, y) {
    const L = this.layout;
    if (!L) return false;
    const hit = this._hit(x, y);
    if (!hit) return false;
    const p = { id, kind: hit, x0: x, y0: y, x, y, t0: performance.now(), moved: 0 };
    if (hit === 'wheel' || hit === 'horn') {
      const a = Math.atan2(-(y - L.wheel[1]), x - L.wheel[0]);
      p.prevA = a;
      p.prevX = x;
      this.wheelHeld = true;
      this.emit({ type: 'touch', what: 'wheel' });
    } else if (hit === 'accel') {
      this.accelHeld = true;
      this.holdT = 0;
      this._addNotch();
      this.sound.thunk(0.6);
      this.emit({ type: 'accel' });
    } else if (hit === 'brake') {
      this.brakeHeld = true;
      if (this.notch > 0) { this.sound.pawlRelease(); this.pawl = 1; }
      this.notch = 0;
      this.sound.thunk(0.8);
      this.sound.brakeHiss();
      this.emit({ type: 'brake' });
    } else if (hit === 'lever') {
      p.leverStart = this.signal;
      this.emit({ type: 'touch', what: 'lever' });
    } else if (hit === 'meter') {
      this.emit({ type: 'meter' });
      this.sound.click(0.6, 1800);
      this.meterTap = 0.5;
    }
    this.pointers.set(id, p);
    return true;
  }

  pointerMove(id, x, y) {
    const p = this.pointers.get(id);
    if (!p) return;
    const L = this.layout;
    p.moved = Math.max(p.moved, Math.hypot(x - p.x0, y - p.y0));
    if (p.kind === 'wheel' || p.kind === 'horn') {
      if (p.kind === 'horn' && p.moved < 10) { p.x = x; p.y = y; return; }
      const dx = x - L.wheel[0], dy = y - L.wheel[1];
      const r = Math.hypot(dx, dy);
      let delta;
      if (r > L.wheelR * 0.3) {
        const a = Math.atan2(-dy, dx);
        delta = wrap(a - p.prevA);
        p.prevA = a;
      } else {
        // 中心付近では左右のドラッグで回す（指を左へ＝左へ回す）
        delta = -(x - p.prevX) / L.wheelR;
        p.prevA = Math.atan2(-dy, dx);
      }
      p.prevX = x;
      const before = this.wheelAngle;
      this.wheelAngle = Math.max(-WHEEL_MAX, Math.min(WHEEL_MAX, this.wheelAngle + delta));
      if (Math.abs(before) < WHEEL_MAX - 0.01 && Math.abs(this.wheelAngle) >= WHEEL_MAX - 0.01) {
        this.sound.thunk(0.4);
        this.emit({ type: 'wheelEnd' });
      }
    } else if (p.kind === 'lever') {
      const dy = y - p.y0;
      let want = p.leverStart;
      if (dy < -14) want = p.leverStart === -1 ? 0 : 1;
      else if (dy > 14) want = p.leverStart === 1 ? 0 : -1;
      if (want !== this.signal) this._setSignal(want);
    }
    p.x = x; p.y = y;
  }

  pointerUp(id) {
    const p = this.pointers.get(id);
    if (!p) return;
    this.pointers.delete(id);
    if (p.kind === 'wheel' || p.kind === 'horn') {
      if (p.kind === 'horn' && p.moved < 10) {
        this.hornT = 0.25;
        this.sound.horn();
        this.emit({ type: 'horn' });
      }
      this.wheelHeld = [...this.pointers.values()].some((q) => q.kind === 'wheel' || q.kind === 'horn');
    } else if (p.kind === 'accel') {
      this.accelHeld = [...this.pointers.values()].some((q) => q.kind === 'accel');
      if (!this.accelHeld && this.notch > 0) this.sound.ratchet(1);
    } else if (p.kind === 'brake') {
      this.brakeHeld = [...this.pointers.values()].some((q) => q.kind === 'brake');
    } else if (p.kind === 'lever') {
      if (p.moved < 14) {
        // タップ：上半分なら上（左）、下半分なら下（右）、点いていれば戻す
        const L = this.layout;
        const up = p.y0 < L.lever[1];
        if (this.signal !== 0) this._setSignal(0);
        else this._setSignal(up ? 1 : -1);
      }
    }
  }

  cancelAll() {
    for (const id of [...this.pointers.keys()]) this.pointerUp(id);
  }

  _setSignal(v) {
    this.signal = v;
    this.sound.click(1, 1500);
    this.signalSteerPeak = 0;
    this.emit({ type: 'signal', value: v });
  }

  _addNotch() {
    if (this.notch < 3) {
      this.notch++;
      this.sound.ratchet(1);
      this.emit({ type: 'notch', value: this.notch });
    } else {
      this.sound.click(0.5, 900);
    }
  }

  _hit(x, y) {
    const L = this.layout;
    const sh = this.show;
    if (this.enabled.lever && sh.lever > 0.9) {
      // レバー：根元から右へ伸びる棒（太めの判定）
      const s = L.leverScale;
      const lx = x - L.lever[0], ly = y - L.lever[1];
      const ax = Math.cos(this.leverAngle), ay = -Math.sin(this.leverAngle);
      const along = lx * ax + ly * ay;
      const perp = Math.abs(-lx * ay + ly * ax);
      if (along > s * 0.1 && along < s * 1.9 && perp < Math.max(26, s * 0.45)) return 'lever';
    }
    if (this.enabled.pedals && sh.pedals > 0.9) {
      const ps = L.pedalScale;
      const inRect = (c, w, h) => x > c[0] - (w / 2) * ps - 14 && x < c[0] + (w / 2) * ps + 14 && y > c[1] - h * ps - 14 && y < c[1] + 16;
      if (inRect(L.accel, this.accel.w, this.accel.h)) return 'accel';
      if (inRect(L.brake, this.brake.w, this.brake.h)) return 'brake';
    }
    if (this.enabled.wheel && sh.wheel > 0.9) {
      const r = Math.hypot(x - L.wheel[0], y - L.wheel[1]);
      if (r < L.wheelR * 0.36) return 'horn';
      if (r < L.wheelR * 1.3) return 'wheel';
    }
    if (sh.meter > 0.9) {
      const r = Math.hypot(x - L.meter[0], y - L.meter[1]);
      if (r < L.meterR * 1.1) return 'meter';
    }
    if (sh.dash > 0.5 && y > L.panelTop && L.portrait) return 'dash';
    return null;
  }

  // -------------------------------------------------------------- 更新
  update(dt, time, car) {
    const L = this.layout;
    if (!L) return;
    this.speed = car.v;
    for (const k of Object.keys(this.show)) {
      // 横画面では、お城の仕掛けを見せるあいだ操縦部を下げる（縦画面は別の場所なので下げない）
      const t = this.cineHide && !L.portrait ? 0 : this.target[k];
      const s = this.show[k];
      const ns = t > s ? Math.min(t, s + dt * 1.6) : Math.max(t, s - dt * 2.5);
      if (s < 1 && ns >= 1 && !this.cineReturn) this.sound.clunkUp();
      this.show[k] = ns;
    }
    const ease = (v) => {
      const c1 = 1.70158, c3 = c1 + 1;
      return v <= 0 ? 0 : v >= 1 ? 1 : 1 + c3 * Math.pow(v - 1, 3) + c1 * Math.pow(v - 1, 2);
    };
    const slide = (k, dist) => (1 - ease(this.show[k])) * dist;
    const offH = this.H * 0.6;

    // ダッシュ
    this.dash.position.y = -slide('dash', this.H - L.panelTop + 60);
    this.dash.visible = this.show.dash > 0.001;

    // ハンドル：指を離して走っていると、ゆっくり真ん中へ戻る（キャスター効果）
    if (!this.wheelHeld && Math.abs(car.v) > 0.05) {
      this.wheelAngle *= Math.exp(-dt * Math.min(car.v, 3) * 0.32);
    }
    const prev = this._prevWheel ?? this.wheelAngle;
    this.steerRate = (this.wheelAngle - prev) / Math.max(dt, 1e-3);
    this._prevWheel = this.wheelAngle;
    if (Math.abs(this.wheelAngle - this._lastTickAngle) > 0.35) {
      this._lastTickAngle = this.wheelAngle;
      if (this.wheelHeld) this.sound.tick(this.wheelAngle > 0);
    }
    this._place(this.wheel, L.wheel, L.wheelR, 0, slide('wheel', offH));
    this.wheel.visible = this.show.wheel > 0.001;
    this.wheelSpin.rotation.z = this.wheelAngle;
    this.hornT = Math.max(0, this.hornT - dt);
    this.hornPad.position.z = -this.hornT * 0.25;

    // メーター
    this._place(this.meter, L.meter, L.meterR, 10, slide('meter', offH));
    this.meter.visible = this.show.meter > 0.001;
    let nTarget = Math.min(1, Math.abs(car.v) / 3.4);
    if (this.sweep >= 0) {
      this.sweep += dt;
      nTarget = Math.sin(Math.min(1, this.sweep / 1.4) * Math.PI);
      if (this.sweep > 1.4) this.sweep = -1;
    }
    this.meterTap = Math.max(0, (this.meterTap || 0) - dt);
    this.needle = damp(this.needle, nTarget + Math.sin(this.meterTap * 30) * 0.05 * this.meterTap, 10, dt);
    const a0 = Math.PI * 0.75; // 文字盤の 0 の角度（左下）
    this.needleG.rotation.z = -(a0 + this.needle * Math.PI * 1.5) + Math.PI / 2 + Math.PI;
    this.faceMat.emissiveIntensity = damp(this.faceMat.emissiveIntensity, this.power ? 0.35 : 0, 4, dt);
    for (let i = 0; i < 3; i++) this.notchMats[i].emissiveIntensity = this.power && this.notch > i ? 2.2 : 0;
    this.brakeLamp.emissiveIntensity = this.brakeHeld ? 2.5 : 0;
    const bl = this.blinkOn ? 3 : 0;
    this.arrowL.emissiveIntensity = this.signal === 1 ? bl : 0;
    this.arrowR.emissiveIntensity = this.signal === -1 ? bl : 0;

    // レバー
    this.leverAngle = damp(this.leverAngle, this.signal * 0.32, 18, dt);
    this._place(this.lever, L.lever, L.leverScale, 30, slide('lever', offH));
    this.lever.visible = this.show.lever > 0.001;
    this.leverArm.rotation.z = this.leverAngle;
    // 曲がり終わってハンドルが戻ると、ウインカーが自動で戻る
    if (this.signal !== 0) {
      const sw = this.wheelAngle * this.signal;
      this.signalSteerPeak = Math.max(this.signalSteerPeak, sw);
      if (this.signalSteerPeak > 1.6 && sw < 0.35) {
        this._setSignal(0);
      }
    }

    // ペダル
    const accelTargetDepth = this.accelHeld ? 1 : this.notch / 3;
    if (this.accelHeld) {
      this.holdT += dt;
      if (this.holdT > 0.55) { this.holdT = 0.0; this._addNotch(); }
    }
    this.accelDepth = damp(this.accelDepth, accelTargetDepth, this.accelHeld ? 14 : 9, dt);
    this.brakeDepth = damp(this.brakeDepth, this.brakeHeld ? 1 : 0, 16, dt);
    this.accel.hinge.rotation.x = -0.5 - this.accelDepth * 0.75;
    this.brake.hinge.rotation.x = -0.5 - this.brakeDepth * 0.75;
    this.accel.hinge.position.y = -this.accelDepth * 0.12;
    this.brake.hinge.position.y = -this.brakeDepth * 0.12;
    this.accel.sh.scale.setScalar(1 - this.accelDepth * 0.15);
    this.brake.sh.scale.setScalar(1 - this.brakeDepth * 0.15);
    // 爪：段に掛かっている間は下がって歯を押さえる。ブレーキで跳ね上がる
    this.pawl = Math.max(0, this.pawl - dt * 3);
    const engaged = this.notch > 0 ? 1 : 0;
    this.pawlG.rotation.z = engaged ? 0.3 : -0.45 - this.pawl * 0.6;
    this.pawlG.position.y = 0.75 + 0.6 - (this.notch > 0 ? this.notch * 0.28 : 0);
    const ps = L.pedalScale;
    this._place(this.accel.root, L.accel, ps, 20, 0);
    this._place(this.brake.root, L.brake, ps, 20, 0);
    this.accel.root.position.x -= this.pedals.position.x;
    this.pedals.position.y = -slide('pedals', offH);
    this.pedals.visible = this.show.pedals > 0.001;

    // きらめき：次に発見してほしい物の上を、光がゆっくり横切る
    this.glintT += dt;
    if (this.glintTarget && this.show[this.glintTarget.k] > 0.95) {
      const c = L[this.glintTarget.at];
      const period = 3.2;
      const ph = (this.glintT % period) / period;
      const span = this.glintTarget.span * (this.glintTarget.k === 'wheel' ? L.wheelR : ps);
      this.glint.position.set(c[0] - span + ph * span * 2, -c[1] + span * 0.5, 160);
      this.glint.intensity = Math.sin(ph * Math.PI) * 4e4 * (span / 120) * (span / 120);
      this.glint.distance = span * 2.5;
    } else {
      this.glint.intensity = 0;
    }
  }

  setGlint(k, at, span) { this.glintTarget = k ? { k, at, span } : null; this.glintT = 0; }

  targetSpeed() { return NOTCH_SPEED[this.notch]; }
  steerNorm() { return this.wheelAngle / WHEEL_MAX; }
}
