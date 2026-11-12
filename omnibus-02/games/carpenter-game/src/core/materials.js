// 手続き的に作るテクスチャ群（外部画像を使わない）と、
// 「塗る / 磨く」状態を持つ木材用マテリアル。
import * as THREE from 'three';
import { mulberry32 } from './util.js';

function cv(size = 512, h = size) {
  const c = document.createElement('canvas');
  c.width = size; c.height = h;
  return c;
}

/** 木目テクスチャ。年輪 + 節 + 繊維の細い線。 */
export function makeWoodTexture(def, seed = 7) {
  const S = 512;
  const c = cv(S, S);
  const g = c.getContext('2d');
  const rnd = mulberry32(seed + def.seed);
  const base = def.base, dark = def.grain;

  g.fillStyle = base;
  g.fillRect(0, 0, S, S);

  // 年輪：横方向に流れる帯
  const bands = 26 + Math.floor(rnd() * 10);
  for (let i = 0; i < bands; i++) {
    const y = (i / bands) * S + (rnd() - 0.5) * 10;
    const th = 1.5 + rnd() * 6 * def.grainWeight;
    const a = 0.10 + rnd() * 0.30 * def.grainWeight;
    g.strokeStyle = dark;
    g.globalAlpha = a;
    g.lineWidth = th;
    g.beginPath();
    const amp = 5 + rnd() * 16;
    const ph = rnd() * Math.PI * 2;
    for (let x = 0; x <= S; x += 8) {
      const yy = y + Math.sin((x / S) * Math.PI * (1 + rnd() * 0.02) * 2 + ph) * amp
        + Math.sin(x * 0.05 + ph * 2) * 2.2;
      x === 0 ? g.moveTo(x, yy) : g.lineTo(x, yy);
    }
    g.stroke();
  }
  // 細い繊維
  g.globalAlpha = 0.09;
  g.strokeStyle = dark;
  g.lineWidth = 1;
  for (let i = 0; i < 260; i++) {
    const y = rnd() * S;
    const x0 = rnd() * S;
    const len = 30 + rnd() * 180;
    g.beginPath();
    g.moveTo(x0, y);
    g.lineTo(x0 + len, y + (rnd() - 0.5) * 4);
    g.stroke();
  }
  // 節
  const knots = def.knots ?? 2;
  for (let k = 0; k < knots; k++) {
    const kx = 60 + rnd() * (S - 120), ky = 60 + rnd() * (S - 120);
    const r = 10 + rnd() * 18;
    for (let i = 8; i >= 1; i--) {
      g.globalAlpha = 0.07 + (8 - i) * 0.03;
      g.strokeStyle = dark;
      g.lineWidth = 1.4;
      g.beginPath();
      g.ellipse(kx, ky, r * i * 0.34, r * i * 0.2, 0.4, 0, Math.PI * 2);
      g.stroke();
    }
    g.globalAlpha = 0.5;
    g.fillStyle = dark;
    g.beginPath();
    g.ellipse(kx, ky, r * 0.3, r * 0.18, 0.4, 0, Math.PI * 2);
    g.fill();
  }
  g.globalAlpha = 1;

  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/** 木材の凹凸（ラフネス）用。木目に沿った微細なムラ。 */
export function makeWoodRoughTexture(seed = 3) {
  const S = 256;
  const c = cv(S, S);
  const g = c.getContext('2d');
  const rnd = mulberry32(seed);
  g.fillStyle = '#b6b6b6';
  g.fillRect(0, 0, S, S);
  for (let i = 0; i < 900; i++) {
    const y = rnd() * S, x = rnd() * S;
    g.globalAlpha = 0.06 + rnd() * 0.1;
    g.fillStyle = rnd() > 0.5 ? '#ffffff' : '#8a8a8a';
    g.fillRect(x, y, 6 + rnd() * 60, 1 + rnd() * 2);
  }
  g.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

/** 巻き尺の目盛りテクスチャ（1マス = 10cm 相当のブロック） */
export function makeTapeTexture() {
  const W = 256, H = 64;
  const c = cv(W, H);
  const g = c.getContext('2d');
  g.fillStyle = '#ffe27a';
  g.fillRect(0, 0, W, H);
  g.fillStyle = '#ffd24a';
  g.fillRect(0, 0, W, 6);
  g.fillRect(0, H - 6, W, 6);
  // 目盛り
  for (let i = 0; i <= 10; i++) {
    const x = (i / 10) * W;
    const big = i % 5 === 0;
    g.strokeStyle = big ? '#4a3520' : '#7a5a34';
    g.lineWidth = big ? 4 : 2;
    g.beginPath();
    g.moveTo(x, H);
    g.lineTo(x, H - (big ? 30 : 16));
    g.stroke();
  }
  // 数字（読めなくても模様として楽しい）
  g.fillStyle = '#4a3520';
  g.font = 'bold 26px sans-serif';
  g.textAlign = 'center';
  g.fillText('1', W * 0.5, 32);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** 鉛筆の線（手描き風のかすれ） */
export function makePencilTexture() {
  const W = 64, H = 256;
  const c = cv(W, H);
  const g = c.getContext('2d');
  g.clearRect(0, 0, W, H);
  const rnd = mulberry32(11);
  for (let i = 0; i < 5; i++) {
    g.strokeStyle = `rgba(60,44,34,${0.5 - i * 0.07})`;
    g.lineWidth = 7 - i;
    g.beginPath();
    for (let y = 0; y <= H; y += 6) {
      const x = W / 2 + Math.sin(y * 0.08 + i) * 1.6 + (rnd() - 0.5) * 2.2;
      y === 0 ? g.moveTo(x, y) : g.lineTo(x, y);
    }
    g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** 太い点線ガイド */
export function makeDashTexture(color = '#ffffff') {
  // 縦（V 方向）に伸びる太い点線
  const W = 32, H = 128;
  const c = cv(W, H);
  const g = c.getContext('2d');
  g.clearRect(0, 0, W, H);
  g.fillStyle = color;
  const r = W * 0.42;
  for (let i = 0; i < 2; i++) {
    const y = 32 + i * 64;
    g.beginPath();
    g.roundRect(W / 2 - r, y - 22, r * 2, 44, r);
    g.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** ざらざらした切断面（紙やすりで消していく層） */
export function makeRoughFaceTexture() {
  const S = 256;
  const c = cv(S, S);
  const g = c.getContext('2d');
  const rnd = mulberry32(23);
  g.fillStyle = '#c9a878';
  g.fillRect(0, 0, S, S);
  for (let i = 0; i < 2600; i++) {
    const x = rnd() * S, y = rnd() * S;
    g.fillStyle = rnd() > 0.5 ? 'rgba(120,86,52,0.5)' : 'rgba(238,214,180,0.5)';
    g.fillRect(x, y, 1 + rnd() * 3, 1 + rnd() * 3);
  }
  // ささくれ
  g.strokeStyle = 'rgba(110,78,46,0.55)';
  for (let i = 0; i < 120; i++) {
    g.lineWidth = 0.6 + rnd() * 1.6;
    const x = rnd() * S, y = rnd() * S;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + (rnd() - 0.5) * 40, y + (rnd() - 0.5) * 12);
    g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

/** 柔らかい丸（粒子・接地影・光のにじみ） */
export function makeSoftCircleTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const S = 128;
  const c = cv(S, S);
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  grd.addColorStop(0, inner);
  grd.addColorStop(0.45, inner);
  grd.addColorStop(1, outer);
  g.fillStyle = grd;
  g.fillRect(0, 0, S, S);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** 接地影用のぼけた楕円 */
export function makeShadowTexture() {
  return makeSoftCircleTexture('rgba(40,26,14,0.55)', 'rgba(40,26,14,0)');
}

/** 星・花・ハートなどの飾り（シールとエプロン柄に使う） */
export function makeDecalTexture(kind, color = '#ff8ec6') {
  const S = 128;
  const c = cv(S, S);
  const g = c.getContext('2d');
  g.clearRect(0, 0, S, S);
  g.translate(S / 2, S / 2);
  g.fillStyle = color;
  const star = (spikes, rO, rI) => {
    g.beginPath();
    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? rO : rI;
      const a = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(a) * r, y = Math.sin(a) * r;
      i === 0 ? g.moveTo(x, y) : g.lineTo(x, y);
    }
    g.closePath(); g.fill();
  };
  if (kind === 'star') {
    star(5, 54, 24);
  } else if (kind === 'flower') {
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      g.beginPath();
      g.ellipse(Math.cos(a) * 26, Math.sin(a) * 26, 22, 15, a, 0, Math.PI * 2);
      g.fill();
    }
    g.fillStyle = '#fff3a8';
    g.beginPath(); g.arc(0, 0, 16, 0, Math.PI * 2); g.fill();
  } else if (kind === 'heart') {
    g.beginPath();
    g.moveTo(0, 40);
    g.bezierCurveTo(-62, -6, -28, -52, 0, -20);
    g.bezierCurveTo(28, -52, 62, -6, 0, 40);
    g.fill();
  } else if (kind === 'rainbow') {
    const cols = ['#ff7b7b', '#ffb457', '#ffe66d', '#7bd88f', '#6fc7ff', '#b58cff'];
    cols.forEach((col, i) => {
      g.strokeStyle = col; g.lineWidth = 9;
      g.beginPath();
      g.arc(0, 28, 54 - i * 9, Math.PI, 0);
      g.stroke();
    });
  } else if (kind === 'dot') {
    g.beginPath(); g.arc(0, 0, 44, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** エプロン / 道具箱の柄 */
export function makePatternTexture(kind, bg, fg) {
  const S = 256;
  const c = cv(S, S);
  const g = c.getContext('2d');
  g.fillStyle = bg; g.fillRect(0, 0, S, S);
  const drawAt = (x, y, s, fn) => { g.save(); g.translate(x, y); g.scale(s, s); fn(); g.restore(); };
  const star = () => {
    g.fillStyle = fg; g.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? 22 : 9;
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(a) * r, y = Math.sin(a) * r;
      i === 0 ? g.moveTo(x, y) : g.lineTo(x, y);
    }
    g.closePath(); g.fill();
  };
  const flower = () => {
    g.fillStyle = fg;
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      g.beginPath(); g.ellipse(Math.cos(a) * 11, Math.sin(a) * 11, 9, 6, a, 0, Math.PI * 2); g.fill();
    }
  };
  const stripe = () => { g.fillStyle = fg; g.fillRect(-30, -6, 60, 12); };
  const fn = kind === 'flower' ? flower : kind === 'stripe' ? stripe : star;
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      drawAt(32 + x * 64 + (y % 2) * 16, 32 + y * 64, 1, fn);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
