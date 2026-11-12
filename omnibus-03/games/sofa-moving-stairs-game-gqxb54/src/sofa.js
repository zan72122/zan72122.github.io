// ソファ本体のメッシュと、追従する作業員2人
import * as THREE from 'three';
import { TEX, MAT } from './world.js';

function roundedBox(w, h, d, r) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  const g = new THREE.ExtrudeGeometry(s, { depth: d - r * 2, bevelEnabled: true, bevelThickness: r, bevelSize: r, bevelSegments: 3, curveSegments: 4 });
  g.translate(0, 0, -(d - r * 2) / 2);
  return g;
}

// ポーズ: 0=ねかせる(通常) 1=よこだおし(背もたれを下に) 2=たてる(長さが縦)
export const POSES = [
  new THREE.Quaternion(),
  new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2),
  new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2),
];
export const POSE_NAMES = ['ねかせる', 'よこだおし', 'たてる'];

export function buildSofa(spec) {
  const { L, D, H } = spec;
  const g = new THREE.Group();
  let mat;
  if (spec.kind === 'leather') {
    mat = new THREE.MeshStandardMaterial({ color: spec.color, roughness: 0.42, metalness: 0.05, bumpMap: TEX.fabricBump, bumpScale: 0.002 });
  } else {
    mat = new THREE.MeshStandardMaterial({ color: spec.color, map: TEX.fabric, bumpMap: TEX.fabricBump, bumpScale: 0.006, roughness: 0.95 });
  }
  const worn = mat.clone(); worn.color = mat.color.clone().lerp(new THREE.Color(0xffffff), 0.12);
  const add = (geo, m, x, y, z) => { const mesh = new THREE.Mesh(geo, m); mesh.position.set(x, y, z); mesh.castShadow = mesh.receiveShadow = true; g.add(mesh); return mesh; };
  const arm = 0.2, legH = 0.06, baseH = H * 0.42;
  const bottom = -H / 2 + legH;
  // 脚
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) add(new THREE.CylinderGeometry(0.03, 0.025, legH, 8), MAT.wood, sx * (L / 2 - 0.12), -H / 2 + legH / 2, sz * (D / 2 - 0.1));
  // 台座
  add(new THREE.BoxGeometry(L, baseH, D), mat, 0, bottom + baseH / 2, 0);
  // 座面クッション(2つ、真ん中がやや潰れて沈む)
  const cw = (L - arm * 2) / 2 - 0.02, cd = D - 0.22, ct = 0.15;
  for (const s of [-1, 1]) {
    const c = add(roundedBox(cw, ct, cd, 0.045), mat, s * (cw / 2 + 0.01), bottom + baseH + ct / 2 - 0.02, 0.05);
    c.scale.set(1, 0.9, 1);
  }
  // 背もたれ + 背クッション
  const bh = H - legH - baseH + 0.02;
  add(roundedBox(L - arm * 2, bh, 0.16, 0.03), mat, 0, H / 2 - bh / 2, -D / 2 + 0.1);
  for (const s of [-1, 1]) {
    const b = add(roundedBox(cw, bh * 0.75, 0.12, 0.04), mat, s * (cw / 2 + 0.01), bottom + baseH + ct + bh * 0.75 / 2 - 0.05, -D / 2 + 0.24);
    b.rotation.x = -0.08;
  }
  // ひじ掛け(角が擦れて薄くなった色)
  for (const s of [-1, 1]) add(roundedBox(arm, H * 0.8, D, 0.05), worn, s * (L / 2 - arm / 2), bottom + (H * 0.8) / 2, 0);
  return g;
}

// 作業員: 簡易ヒューマノイド。手がグリップ点に追従し、足は床に着く
export class Worker {
  constructor(color) {
    this.g = new THREE.Group();
    const skin = new THREE.MeshStandardMaterial({ color: 0xf1c9a5, roughness: 0.8 });
    const cloth = new THREE.MeshStandardMaterial({ color, roughness: 0.85 });
    const pants = new THREE.MeshStandardMaterial({ color: 0x3b4a5c, roughness: 0.9 });
    const cap = new THREE.MeshStandardMaterial({ color: 0xe8b23a, roughness: 0.7 });
    const mk = (geo, m, parent = this.g) => { const mesh = new THREE.Mesh(geo, m); mesh.castShadow = true; parent.add(mesh); return mesh; };
    this.hip = new THREE.Group(); this.g.add(this.hip);
    this.legs = [-1, 1].map((s) => { const l = mk(new THREE.CylinderGeometry(0.06, 0.05, 0.78, 8), pants, this.hip); l.position.set(s * 0.1, -0.39, 0); return l; });
    this.torso = new THREE.Group(); this.hip.add(this.torso);
    mk(new THREE.CylinderGeometry(0.16, 0.13, 0.55, 12), cloth, this.torso).position.y = 0.28;
    mk(new THREE.SphereGeometry(0.16, 12, 10), cloth, this.torso).position.y = 0.55;
    this.head = new THREE.Group(); this.head.position.y = 0.78; this.torso.add(this.head);
    mk(new THREE.SphereGeometry(0.12, 14, 12), skin, this.head);
    const c = mk(new THREE.CylinderGeometry(0.125, 0.125, 0.07, 14), cap, this.head); c.position.y = 0.08;
    const brim = mk(new THREE.BoxGeometry(0.12, 0.015, 0.1), cap, this.head); brim.position.set(0, 0.05, 0.14);
    this.arms = [-1, 1].map((s) => { const a = mk(new THREE.CylinderGeometry(0.04, 0.035, 1, 8), cloth); a.geometry.translate(0, -0.5, 0); const h = mk(new THREE.SphereGeometry(0.045, 8, 8), skin); return { a, h, s }; });
    this.bubble = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthTest: false }));
    this.bubble.scale.set(0.6, 0.3, 1); this.bubble.visible = false; this.bubble.renderOrder = 10; this.g.add(this.bubble);
    this.bubbleT = 0; this.walk = 0; this.hop = 0;
    this.pos = new THREE.Vector3(); this.prev = new THREE.Vector3();
    this.tex = {};
  }
  say(text, dur = 1.2) {
    if (!this.tex[text]) {
      const cv = document.createElement('canvas'); cv.width = 256; cv.height = 128;
      const g = cv.getContext('2d');
      g.fillStyle = 'rgba(255,255,255,0.95)'; g.beginPath(); g.roundRect(8, 8, 240, 96, 30); g.fill();
      g.fillStyle = '#333'; g.font = 'bold 44px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, 128, 58);
      const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; this.tex[text] = t;
    }
    this.bubble.material.map = this.tex[text]; this.bubble.material.needsUpdate = true;
    this.bubble.visible = true; this.bubbleT = dur;
  }
  // stand: 立ち位置(床上), face: 向く方向(水平), hands: 手の目標[2], floorY, dt, moving
  update(stand, face, hands, dt, moving, celebrate) {
    this.prev.copy(this.pos);
    this.pos.lerp(stand, 1 - Math.exp(-dt * 10));
    this.g.position.copy(this.pos);
    const yaw = Math.atan2(face.x, face.z);
    this.g.rotation.y = yaw;
    // しゃがみ: 手の高さが低いほど膝を曲げる
    const handY = (hands[0].y + hands[1].y) / 2 - this.pos.y;
    const crouch = THREE.MathUtils.clamp((0.95 - handY) / 0.6, 0, 1);
    const legScale = 1 - 0.35 * crouch;
    this.legs.forEach((l) => { l.scale.y = legScale; l.position.y = -0.39 * legScale; });
    if (celebrate) this.hop += dt * 9; else this.hop = 0;
    const hopY = celebrate ? Math.abs(Math.sin(this.hop)) * 0.12 : 0;
    this.hip.position.y = 0.78 * legScale + hopY;
    this.torso.rotation.x = 0.12 + 0.55 * crouch;
    // 歩き: 足を交互に上げる
    const moved = this.prev.distanceTo(this.pos);
    if (moving && moved > 1e-4) this.walk += moved * 9;
    this.legs[0].position.z = Math.sin(this.walk) * 0.1 * (moving ? 1 : 0);
    this.legs[1].position.z = -Math.sin(this.walk) * 0.1 * (moving ? 1 : 0);
    // 腕: 肩からグリップへ
    const shoulder = new THREE.Vector3();
    this.g.updateMatrixWorld(true);
    this.arms.forEach(({ a, h, s }, i) => {
      shoulder.set(s * 0.17, 0.5, 0.04).applyMatrix4(this.torso.matrixWorld);
      const target = celebrate ? shoulder.clone().add(new THREE.Vector3(s * 0.25, 0.55, 0.1)) : hands[i];
      const local = this.g.worldToLocal(shoulder.clone());
      a.position.copy(local);
      const tl = this.g.worldToLocal(target.clone());
      const dir = tl.clone().sub(local);
      const len = Math.max(0.2, Math.min(0.62, dir.length()));
      a.scale.set(1, len, 1);
      a.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), dir.normalize());
      h.position.copy(local).addScaledVector(dir, len);
    });
    // 頭はソファ側(少し下)を見る
    this.head.rotation.x = 0.25 * crouch + (celebrate ? -0.3 : 0.1);
    if (this.bubbleT > 0) {
      this.bubbleT -= dt;
      this.bubble.position.set(0, this.hip.position.y + 1.05, 0);
      if (this.bubbleT <= 0) this.bubble.visible = false;
    }
  }
}
