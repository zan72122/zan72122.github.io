// 階段室の実3D構築: 段・壁・天井・手すり・ドア・小物 と 手続き生成テクスチャ
import * as THREE from 'three';
import { OBB, Ground, DIRS } from './physics.js';

// ---------- テクスチャ ----------
function canvasTex(w, h, draw, opt = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = opt.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  t.anisotropy = 4;
  if (opt.repeat) t.repeat.set(opt.repeat[0], opt.repeat[1]);
  return t;
}
function noise(g, w, h, n, alpha, dark = true) {
  for (let i = 0; i < n; i++) {
    const v = Math.floor(Math.random() * 255);
    g.fillStyle = dark ? `rgba(0,0,0,${alpha * Math.random()})` : `rgba(${v},${v},${v},${alpha * Math.random()})`;
    const s = 1 + Math.random() * 3;
    g.fillRect(Math.random() * w, Math.random() * h, s, s);
  }
}
function scratches(g, w, h, n, color) {
  g.strokeStyle = color; g.lineWidth = 1;
  for (let i = 0; i < n; i++) {
    const x = Math.random() * w, y = Math.random() * h, a = Math.random() * Math.PI, l = 10 + Math.random() * 60;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); g.stroke();
  }
}

export const TEX = {};
export function buildTextures() {
  // 壁: 塗装のムラ + 小傷
  TEX.wall = canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = '#d9d2c3'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 400; i++) {
      g.fillStyle = `rgba(${200 + Math.random() * 40},${190 + Math.random() * 40},${170 + Math.random() * 40},0.25)`;
      g.beginPath(); g.arc(Math.random() * w, Math.random() * h, 10 + Math.random() * 40, 0, 7); g.fill();
    }
    noise(g, w, h, 6000, 0.08);
    scratches(g, w, h, 18, 'rgba(90,80,70,0.25)');
    scratches(g, w, h, 6, 'rgba(255,255,255,0.35)');
  }, { repeat: [1, 1] });
  // コンクリート
  TEX.concrete = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#9d9a94'; g.fillRect(0, 0, w, h);
    noise(g, w, h, 5000, 0.35, false);
    noise(g, w, h, 2000, 0.15);
  });
  // 踊り場の床タイル
  TEX.tile = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#a9a49b'; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#7d7972'; g.lineWidth = 3;
    for (let i = 0; i <= 2; i++) { g.beginPath(); g.moveTo(i * 128, 0); g.lineTo(i * 128, h); g.stroke(); g.beginPath(); g.moveTo(0, i * 128); g.lineTo(w, i * 128); g.stroke(); }
    noise(g, w, h, 4000, 0.25, false);
  });
  // 布地(織り目) 明度のみ、色は material.color
  TEX.fabric = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#d8d8d8'; g.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 2) for (let x = 0; x < w; x += 2) {
      const v = 190 + ((x + y) % 4 === 0 ? 40 : 0) + Math.random() * 30;
      g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(x, y, 2, 2);
    }
    // 擦れて薄くなった部分
    for (let i = 0; i < 6; i++) {
      g.fillStyle = 'rgba(255,255,255,0.18)';
      g.beginPath(); g.ellipse(Math.random() * w, Math.random() * h, 20 + Math.random() * 30, 10 + Math.random() * 20, Math.random() * 3, 0, 7); g.fill();
    }
  }, { repeat: [3, 3] });
  TEX.fabricBump = canvasTex(128, 128, (g, w, h) => {
    for (let y = 0; y < h; y += 2) for (let x = 0; x < w; x += 2) {
      const v = 100 + ((x + y) % 4 === 0 ? 100 : 0) + Math.random() * 40;
      g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(x, y, 2, 2);
    }
  }, { repeat: [12, 12], linear: true });
  // 木目
  TEX.wood = canvasTex(256, 64, (g, w, h) => {
    g.fillStyle = '#8b5a2b'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 40; i++) {
      g.strokeStyle = `rgba(60,30,10,${0.15 + Math.random() * 0.25})`; g.lineWidth = 1 + Math.random() * 2;
      const y = Math.random() * h;
      g.beginPath(); g.moveTo(0, y);
      for (let x = 0; x < w; x += 16) g.lineTo(x, y + Math.sin(x * 0.05 + i) * 3);
      g.stroke();
    }
  }, { repeat: [2, 1] });
  // 非常口サイン
  TEX.exit = canvasTex(256, 128, (g, w, h) => {
    g.fillStyle = '#2fb35a'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#ffffff'; g.fillRect(8, 8, 110, 112);
    g.fillStyle = '#2fb35a';
    g.beginPath(); g.arc(70, 34, 12, 0, 7); g.fill();
    g.lineWidth = 12; g.strokeStyle = '#2fb35a'; g.lineCap = 'round';
    g.beginPath(); g.moveTo(70, 46); g.lineTo(60, 80); g.lineTo(40, 110); g.moveTo(60, 80); g.lineTo(84, 96); g.lineTo(90, 116); g.moveTo(66, 60); g.lineTo(96, 66); g.moveTo(60, 60); g.lineTo(34, 78); g.stroke();
    g.fillStyle = '#fff'; g.font = 'bold 34px sans-serif'; g.fillText('EXIT', 140, 60);
    g.strokeStyle = '#fff'; g.beginPath(); g.moveTo(150, 92); g.lineTo(230, 92); g.lineTo(215, 78); g.moveTo(230, 92); g.lineTo(215, 106); g.stroke();
  });
  // 表札(部屋番号)
  TEX.plate = (num) => canvasTex(128, 64, (g, w, h) => {
    g.fillStyle = '#e8e4d8'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#333'; g.font = 'bold 40px sans-serif'; g.textAlign = 'center'; g.fillText(num, 64, 46);
  });
  // ガラス窓(明るい外光)
  TEX.window = canvasTex(128, 128, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, '#dfeefc'); gr.addColorStop(1, '#f3f1e6');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  });
}

// ---------- マテリアル ----------
export const MAT = {};
export function buildMaterials() {
  MAT.wall = new THREE.MeshStandardMaterial({ map: TEX.wall, roughness: 0.95, shadowSide: THREE.DoubleSide });
  MAT.wallDark = new THREE.MeshStandardMaterial({ color: 0x8f8a80, roughness: 0.95 }); // 巾木
  MAT.concrete = new THREE.MeshStandardMaterial({ map: TEX.concrete, roughness: 0.9 });
  MAT.tile = new THREE.MeshStandardMaterial({ map: TEX.tile, roughness: 0.8 });
  MAT.nonslip = new THREE.MeshStandardMaterial({ color: 0x3a3a3a, roughness: 1 });
  MAT.ceiling = new THREE.MeshStandardMaterial({ color: 0xe6e3dc, roughness: 1, shadowSide: THREE.DoubleSide });
  MAT.metal = new THREE.MeshStandardMaterial({ color: 0xb8bcc2, metalness: 0.85, roughness: 0.35 });
  MAT.wood = new THREE.MeshStandardMaterial({ map: TEX.wood, roughness: 0.6 });
  MAT.door = new THREE.MeshStandardMaterial({ color: 0x6b7f8a, metalness: 0.3, roughness: 0.55 });
  MAT.doorFrame = new THREE.MeshStandardMaterial({ color: 0x4d5a62, metalness: 0.4, roughness: 0.5 });
  MAT.exit = new THREE.MeshStandardMaterial({ map: TEX.exit, emissive: 0xffffff, emissiveMap: TEX.exit, emissiveIntensity: 0.9 });
  MAT.lamp = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2dd, emissiveIntensity: 1.2 });
  MAT.window = new THREE.MeshStandardMaterial({ map: TEX.window, emissive: 0xffffff, emissiveMap: TEX.window, emissiveIntensity: 0.8 });
  MAT.red = new THREE.MeshStandardMaterial({ color: 0xc8302a, roughness: 0.4, metalness: 0.2 });
  MAT.mailbox = new THREE.MeshStandardMaterial({ color: 0x9aa3a8, metalness: 0.6, roughness: 0.4 });
  MAT.goal = new THREE.MeshBasicMaterial({ color: 0xffe066, transparent: true, opacity: 0.35, depthWrite: false });
}

// ---------- ビルダー ----------
const HEADROOM = 2.05;  // 階段上の天井までの高さ(鉛直)
const CEIL = 2.6;       // 踊り場の天井高

export class Builder {
  constructor() {
    this.group = new THREE.Group();
    this.colliders = [];
    this.cutaway = [];      // カメラに被ると透ける壁
    this.ground = new Ground();
    this.goalRect = null;
    this.bounds = new THREE.Box3();
  }
  _add(mesh, o = {}) {
    mesh.castShadow = o.shadow !== false; mesh.receiveShadow = true;
    this.group.add(mesh);
    return mesh;
  }
  matWall() { return MAT.wall; }
  // 軸平行の箱 (中心 x,y,z, サイズ w,h,d)
  box(x, y, z, w, h, d, mat, o = {}) {
    const m = this._add(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat), o);
    m.position.set(x, y, z);
    if (o.collide !== false) this.colliders.push(Object.assign(new OBB().set(m.position, new THREE.Vector3(w / 2, h / 2, d / 2), m.quaternion), { tag: o.tag || 'wall' }));
    if (o.cutaway) { m.material = mat.clone(); m.material.transparent = true; this.cutaway.push(m); }
    this.bounds.expandByObject(m);
    return m;
  }
  // 片面パネル(内側向き)。外側から見ると裏面カリングで消えるので、カメラが壁の外にあっても中が見える
  _panel(x, y, z, w, h, dir, mat, o = {}) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
    m.position.set(x, y, z);
    if (dir === 'down') m.rotation.x = Math.PI / 2; else m.rotation.y = Math.atan2(dir[0], dir[1]);
    m.receiveShadow = true; m.castShadow = o.shadow !== false;
    if (o.cutaway) { m.material = mat.clone(); m.material.transparent = true; this.cutaway.push(m); }
    this.group.add(m);
    this.bounds.expandByObject(m);
    return m;
  }
  // 壁: 面の中心(x,z)と長さ、向き(axis 'x' or 'z')、床高 y0 から高さ h
  // 面は「床領域がある側」だけに作る(外側から見ると壁が消えて中が見える)
  wall(x, z, len, axis, y0, h = CEIL, o = {}) {
    const t = 0.16;
    const w = axis === 'x' ? len : t, d = axis === 'x' ? t : len;
    const c = new THREE.Vector3(x, y0 + h / 2, z);
    if (o.collide !== false) this.colliders.push(Object.assign(new OBB().set(c, new THREE.Vector3(w / 2, h / 2, d / 2), new THREE.Quaternion()), { tag: 'wall' }));
    const n = axis === 'x' ? [0, 1] : [1, 0], a = axis === 'x' ? [1, 0] : [0, 1];
    for (const sgn of [-1, 1]) {
      let inside = false;
      for (const k of [-0.4, 0, 0.4]) {
        const px = x + n[0] * sgn * 0.35 + a[0] * k * len, pz = z + n[1] * sgn * 0.35 + a[1] * k * len;
        if (this.ground.regionAt(px, pz, y0) && Math.abs(this.ground.heightAt(px, pz, y0) - y0) < 1.6) inside = true;
      }
      if (!inside) continue;
      const dir = [n[0] * sgn, n[1] * sgn];
      const mat = MAT.wall.clone(); mat.map = TEX.wall.clone(); mat.map.needsUpdate = true; mat.map.repeat.set(len / 2.2, h / 2.6);
      const m = this._panel(x + n[0] * sgn * t / 2, y0 + h / 2, z + n[1] * sgn * t / 2, len, h, dir, mat, { cutaway: true });
      m.userData.tag = 'wall';
      if (o.base !== false) this._panel(x + n[0] * sgn * (t / 2 + 0.008), y0 + 0.05, z + n[1] * sgn * (t / 2 + 0.008), len, 0.1, dir, MAT.wallDark, { shadow: false });
    }
  }
  // 平らな床(領域つき)
  floor(x0, x1, z0, z1, y0, o = {}) {
    const w = x1 - x0, d = z1 - z0;
    const mat = o.tile ? MAT.tile.clone() : MAT.concrete.clone();
    mat.map = mat.map.clone(); mat.map.needsUpdate = true; mat.map.repeat.set(w / 0.6, d / 0.6);
    this.box((x0 + x1) / 2, y0 - 0.1, (z0 + z1) / 2, w, 0.2, d, mat, { collide: false });
    const r = this.ground.add({ kind: 'flat', x0, x1, z0, z1, y0, cam: o.cam });
    if (o.ceiling !== false) {
      this._panel((x0 + x1) / 2, y0 + CEIL, (z0 + z1) / 2, w, d, 'down', MAT.ceiling, { cutaway: true, shadow: false }).userData.ceil = true;
      this.colliders.push(Object.assign(new OBB().set(new THREE.Vector3((x0 + x1) / 2, y0 + CEIL + 0.05, (z0 + z1) / 2), new THREE.Vector3(w / 2, 0.05, d / 2), new THREE.Quaternion()), { tag: 'ceiling' }));
    }
    return r;
  }
  // 階段: (x,z) は最下段の踏み込み側の中心, dir 0..3, n 段, 幅 w
  stairs(x, z, dir, n, w, y0, o = {}) {
    const rise = o.rise || 0.17, run = o.run || 0.27;
    const [dx, dz] = DIRS[dir];
    const rx = dz, rz = -dx; // 右方向
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) * run, h = (i + 1) * rise;
      const cx = x + dx * t, cz = z + dz * t;
      const bw = dir % 2 === 0 ? w : run, bd = dir % 2 === 0 ? run : w;
      this.box(cx, y0 + h / 2, cz, bw, h, bd, MAT.concrete, { collide: false, tag: 'step' });
      // ノンスリップ(鼻先近くの2本)
      for (const off of [0.05, 0.11]) {
        const tt = (i + 1) * run - off;
        const sw = dir % 2 === 0 ? w - 0.04 : 0.025, sd = dir % 2 === 0 ? 0.025 : w - 0.04;
        this.box(x + dx * tt, y0 + h + 0.004, z + dz * tt, sw, 0.008, sd, MAT.nonslip, { collide: false, shadow: false });
      }
    }
    const len = n * run;
    const x0 = Math.min(x, x + dx * len) - (dir % 2 === 0 ? w / 2 : 0), x1 = Math.max(x, x + dx * len) + (dir % 2 === 0 ? w / 2 : 0);
    const z0 = Math.min(z, z + dz * len) - (dir % 2 === 1 ? w / 2 : 0), z1 = Math.max(z, z + dz * len) + (dir % 2 === 1 ? w / 2 : 0);
    const region = this.ground.add({ kind: 'stairs', x0, x1, z0, z1, y0, dir, rise, run, n, cam: o.cam ?? { dir, side: 1 } });
    // 傾斜天井(上の階段の裏側): 鼻先ラインに平行
    if (o.ceiling !== false) {
      const slen = Math.hypot(len, n * rise);
      const f = new THREE.Vector3(dx * run, rise, dz * run).normalize();
      const r = new THREE.Vector3(rx, 0, rz);
      const up = new THREE.Vector3().crossVectors(f, r);
      const q = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(r, up, f));
      const tm = len / 2;
      const cy = y0 + rise + tm * (rise / run) + HEADROOM;
      const pq = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(r, f, up.clone().negate()));
      const m = this._panel(x + dx * tm, cy, z + dz * tm, w + 0.16, slen, [0, 1], MAT.ceiling, { cutaway: true, shadow: false });
      m.quaternion.copy(pq); m.userData.ceil = true;
      this.colliders.push(Object.assign(new OBB().set(new THREE.Vector3(x + dx * tm, cy + 0.12, z + dz * tm), new THREE.Vector3(w / 2 + 0.16, 0.12, slen / 2), q), { tag: 'ceiling' }));
    }
    // 側壁
    const top = y0 + n * rise, wallH = n * rise + CEIL;
    if (o.walls !== false) {
      for (const s of (o.walls || [1, -1])) {
        const cx = x + dx * len / 2 + rx * s * (w / 2 + 0.08), cz = z + dz * len / 2 + rz * s * (w / 2 + 0.08);
        this.wall(cx, cz, len, dir % 2 === 0 ? 'z' : 'x', y0, wallH);
      }
    }
    return { x: x + dx * len, z: z + dz * len, y: top, region };
  }
  // 手すり: (x1,y1,z1)→(x2,y2,z2) の線上に高さ h の柵
  rail(x1, y1, z1, x2, y2, z2, o = {}) {
    const h = o.h || 0.95;
    const a = new THREE.Vector3(x1, y1, z1), b = new THREE.Vector3(x2, y2, z2);
    const len = a.distanceTo(b), n = Math.max(2, Math.round(len / 0.32));
    for (let i = 0; i <= n; i++) {
      const p = a.clone().lerp(b, i / n);
      const post = this._add(new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, h, 8), MAT.metal));
      post.position.set(p.x, p.y + h / 2, p.z);
    }
    const f = b.clone().sub(a).normalize();
    const r = new THREE.Vector3(f.z, 0, -f.x).normalize();
    const up = new THREE.Vector3().crossVectors(f, r);
    const q = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(r, up, f));
    const mid = a.clone().lerp(b, 0.5);
    const top = this._add(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, len + 0.1, 12), o.wood ? MAT.wood : MAT.metal));
    top.rotation.x = Math.PI / 2; // 円柱の軸を z に
    const holder = new THREE.Group(); holder.position.set(mid.x, mid.y + h, mid.z); holder.quaternion.copy(q); holder.add(top); this.group.add(holder);
    const low = this._add(new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, len), MAT.metal));
    const holder2 = new THREE.Group(); holder2.position.set(mid.x, mid.y + 0.12, mid.z); holder2.quaternion.copy(q); holder2.add(low); this.group.add(holder2);
    // 親柱
    for (const p of [a, b]) {
      const np = this._add(new THREE.Mesh(new THREE.BoxGeometry(0.07, h + 0.1, 0.07), MAT.metal));
      np.position.set(p.x, p.y + (h + 0.1) / 2, p.z);
    }
    const c = new THREE.Vector3(mid.x, mid.y + h / 2, mid.z);
    this.colliders.push(Object.assign(new OBB().set(c, new THREE.Vector3(0.04, h / 2, len / 2 + 0.05), q), { tag: 'rail' }));
  }
  // 壁に付く手すり(木製)
  wallRail(x1, y1, z1, x2, y2, z2) {
    const a = new THREE.Vector3(x1, y1 + 0.85, z1), b = new THREE.Vector3(x2, y2 + 0.85, z2);
    const len = a.distanceTo(b), mid = a.clone().lerp(b, 0.5);
    const f = b.clone().sub(a).normalize();
    const r = new THREE.Vector3(f.z, 0, -f.x).normalize();
    const up = new THREE.Vector3().crossVectors(f, r);
    const q = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(r, up, f));
    const bar = this._add(new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, len, 10), MAT.wood));
    bar.rotation.x = Math.PI / 2;
    const g = new THREE.Group(); g.position.copy(mid); g.quaternion.copy(q); g.add(bar); this.group.add(g);
    this.colliders.push(Object.assign(new OBB().set(mid, new THREE.Vector3(0.05, 0.03, len / 2), q), { tag: 'rail' }));
  }
  // ドア: 壁面上の中心 (x,z), 壁の向き axis, 床高 y, 開口 w×h。 open=true で開いた扉+通れる
  door(x, z, axis, y, o = {}) {
    const w = o.w || 0.86, h = o.h || 2.0, t = 0.18;
    const jw = 0.06;
    const sx = axis === 'x' ? 1 : 0, sz = axis === 'x' ? 0 : 1; // 壁面に沿う方向
    // 縦枠・上枠 (衝突あり)
    for (const s of [-1, 1]) this.box(x + sx * s * (w / 2 + jw / 2), y + h / 2, z + sz * s * (w / 2 + jw / 2), axis === 'x' ? jw : t, h, axis === 'x' ? t : jw, MAT.doorFrame, { tag: 'wall' });
    this.box(x, y + h + 0.05, z, axis === 'x' ? w + jw * 2 : t, 0.1, axis === 'x' ? t : w + jw * 2, MAT.doorFrame, { tag: 'wall' });
    // 上の壁(まぐさ〜天井)
    this.wall(x, z, w + jw * 2, axis, y + h + 0.1, CEIL - h - 0.1, { base: false });
    // 表札
    const plate = this._add(new THREE.Mesh(new THREE.BoxGeometry(axis === 'x' ? 0.18 : 0.02, 0.09, axis === 'x' ? 0.02 : 0.18), new THREE.MeshStandardMaterial({ map: TEX.plate(o.num || '201') })), { shadow: false });
    const nrm = o.face || (axis === 'x' ? [0, -1] : [-1, 0]);
    plate.position.set(x + sx * (w / 2 + 0.25) + nrm[0] * (t / 2 + 0.01), y + 1.55, z + sz * (w / 2 + 0.25) + nrm[1] * (t / 2 + 0.01));
    if (o.open) {
      // 開いた扉(部屋側へ開いた状態)。ヒンジは開口の片端
      const hinge = new THREE.Group();
      hinge.position.set(x - sx * w / 2, y + h / 2, z - sz * w / 2);
      hinge.rotation.y = (axis === 'x' ? 0 : Math.PI / 2) + (o.openAngle ?? -1.75);
      const panel = this._add(new THREE.Mesh(new THREE.BoxGeometry(w - 0.02, h - 0.02, 0.04), MAT.door));
      panel.position.set((w - 0.02) / 2, 0, 0);
      hinge.add(panel); this.group.add(hinge);
      const knob = this._add(new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), MAT.metal), { shadow: false });
      knob.position.set((w - 0.02) / 2 - 0.1, 0, 0.045); panel.add(knob);
      hinge.updateMatrixWorld(true);
      const c = new THREE.Vector3(); panel.getWorldPosition(c);
      const q = new THREE.Quaternion(); panel.getWorldQuaternion(q);
      this.colliders.push(Object.assign(new OBB().set(c, new THREE.Vector3((w - 0.02) / 2, (h - 0.02) / 2, 0.02), q), { tag: 'wall' }));
    } else {
      this.box(x, y + h / 2, z, axis === 'x' ? w : 0.05, h, axis === 'x' ? 0.05 : w, MAT.door, { tag: 'wall' });
      const knob = this._add(new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), MAT.metal), { shadow: false });
      knob.position.set(x + sx * (w / 2 - 0.1) + nrm[0] * 0.06, y + 1.0, z + sz * (w / 2 - 0.1) + nrm[1] * 0.06);
    }
  }
  // 小物
  mailboxes(x, y, z, axis, n = 6) {
    for (let i = 0; i < n; i++) {
      const row = Math.floor(i / 3), col = i % 3;
      const px = axis === 'x' ? x + (col - 1) * 0.36 : x, pz = axis === 'x' ? z : z + (col - 1) * 0.36;
      const m = this.box(px, y + 1.25 - row * 0.32, pz, axis === 'x' ? 0.34 : 0.16, 0.3, axis === 'x' ? 0.16 : 0.34, MAT.mailbox, { collide: false, shadow: false });
      const slot = this._add(new THREE.Mesh(new THREE.BoxGeometry(axis === 'x' ? 0.22 : 0.01, 0.02, axis === 'x' ? 0.01 : 0.22), MAT.wallDark), { shadow: false });
      slot.position.set(px, m.position.y + 0.08, pz + (axis === 'x' ? 0.085 : 0)); if (axis !== 'x') slot.position.x += 0.085;
    }
  }
  exitLight(x, y, z, axis) {
    const m = this._add(new THREE.Mesh(new THREE.BoxGeometry(axis === 'x' ? 0.36 : 0.06, 0.18, axis === 'x' ? 0.06 : 0.36), MAT.exit), { shadow: false });
    m.position.set(x, y, z);
    if (axis !== 'x') m.rotation.y = Math.PI / 2;
  }
  lamp(x, y, z) {
    const m = this._add(new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.06, 20), MAT.lamp), { shadow: false });
    m.position.set(x, y - 0.03, z);
  }
  // 窓: 壁面(x,z)にある側の内向きの面として作る
  window(x, y, z, axis, w = 1.0, h = 0.9) {
    const n = axis === 'x' ? [0, 1] : [1, 0];
    for (const sgn of [-1, 1]) {
      const px = x + n[0] * sgn * 0.35, pz = z + n[1] * sgn * 0.35;
      if (!this.ground.regionAt(px, pz, y - 1.5)) continue;
      const dir = [n[0] * sgn, n[1] * sgn];
      this._panel(x + n[0] * sgn * 0.085, y, z + n[1] * sgn * 0.085, w + 0.1, h + 0.1, dir, MAT.doorFrame, { shadow: false });
      this._panel(x + n[0] * sgn * 0.09, y, z + n[1] * sgn * 0.09, w, h, dir, MAT.window, { shadow: false });
      const light = new THREE.PointLight(0xfff6e8, 0.9, 5, 1.5); light.position.set(px, y, pz); this.group.add(light);
    }
  }
  extinguisher(x, y, z) {
    const m = this._add(new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.5, 14), MAT.red));
    m.position.set(x, y + 0.25, z);
    const c = this._add(new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.08, 8), MAT.metal), { shadow: false });
    c.position.set(x, y + 0.53, z);
  }
  pipe(x, y0, z, h) {
    const m = this._add(new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, h, 10), MAT.metal));
    m.position.set(x, y0 + h / 2, z);
  }
  goal(x0, x1, z0, z1, y) {
    this.goalRect = { x0, x1, z0, z1 };
    const m = this._add(new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0), MAT.goal), { shadow: false });
    m.rotation.x = -Math.PI / 2; m.position.set((x0 + x1) / 2, y + 0.02, (z0 + z1) / 2); m.receiveShadow = false;
    this.goalMesh = m;
  }
}
