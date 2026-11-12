// キャンバスで生成するテクスチャ群（外部画像は使わない）
import * as THREE from '../vendor/three.module.min.js';

// 古い iOS Safari（15 以前）向け：roundRect がなければ補う
if (typeof CanvasRenderingContext2D !== 'undefined' && !CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    const rr = Array.isArray(r) ? r : [r, r, r, r];
    const [tl, tr, br, bl] = rr.length === 4 ? rr : [rr[0], rr[0], rr[0], rr[0]];
    this.moveTo(x + tl, y);
    this.lineTo(x + w - tr, y);
    this.quadraticCurveTo(x + w, y, x + w, y + tr);
    this.lineTo(x + w, y + h - br);
    this.quadraticCurveTo(x + w, y + h, x + w - br, y + h);
    this.lineTo(x + bl, y + h);
    this.quadraticCurveTo(x, y + h, x, y + h - bl);
    this.lineTo(x, y + tl);
    this.quadraticCurveTo(x, y, x + tl, y);
    return this;
  };
}

export function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function cv(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return [c, c.getContext('2d')];
}

function toTex(c, { repeat = null, srgb = true, aniso = 4 } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(repeat[0], repeat[1]);
  }
  t.anisotropy = aniso;
  return t;
}

function speckle(g, w, h, n, colors, rmin, rmax, r) {
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[(r() * colors.length) | 0];
    const s = rmin + r() * (rmax - rmin);
    g.fillRect(r() * w, r() * h, s, s);
  }
}

export function grassTexture() {
  const [c, g] = cv(256, 256);
  const r = rng(11);
  g.fillStyle = '#74c25a';
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 2600; i++) {
    const x = r() * 256, y = r() * 256;
    const l = 40 + r() * 22;
    g.strokeStyle = `hsl(${92 + r() * 22},${45 + r() * 20}%,${l}%)`;
    g.lineWidth = 1 + r() * 1.5;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + (r() - 0.5) * 3, y - 3 - r() * 4);
    g.stroke();
  }
  for (let i = 0; i < 26; i++) {
    g.fillStyle = r() < 0.5 ? '#ffffff' : '#ffe14d';
    g.beginPath();
    g.arc(r() * 256, r() * 256, 1.4, 0, Math.PI * 2);
    g.fill();
  }
  return toTex(c, { repeat: [1, 1] });
}

// u: 道幅方向（端に白線）、v: 進行方向
export function roadTexture() {
  const [c, g] = cv(256, 256);
  const r = rng(5);
  g.fillStyle = '#6a6e76';
  g.fillRect(0, 0, 256, 256);
  speckle(g, 256, 256, 5000, ['#5c6068', '#767a82', '#62666e', '#808590'], 1, 2.4, r);
  g.fillStyle = '#f4f4f0';
  g.fillRect(12, 0, 9, 256);
  g.fillRect(235, 0, 9, 256);
  return toTex(c, { repeat: [1, 1] });
}

export function asphaltTexture() {
  const [c, g] = cv(256, 256);
  const r = rng(6);
  g.fillStyle = '#6a6e76';
  g.fillRect(0, 0, 256, 256);
  speckle(g, 256, 256, 5000, ['#5c6068', '#767a82', '#62666e', '#808590'], 1, 2.4, r);
  return toTex(c, { repeat: [1, 1] });
}

export function pavingTexture(base = '#f3cfd9', alt = '#f7dfe6', line = '#d8a9b8') {
  const [c, g] = cv(256, 256);
  const r = rng(9);
  g.fillStyle = line;
  g.fillRect(0, 0, 256, 256);
  const rows = 8;
  for (let y = 0; y < rows; y++) {
    const off = (y % 2) * 16;
    for (let x = -1; x < 8; x++) {
      g.fillStyle = r() < 0.5 ? base : alt;
      g.fillRect(x * 32 + off + 2, y * 32 + 2, 28, 28);
    }
  }
  return toTex(c, { repeat: [1, 1] });
}

export function stripeTexture(a = '#e8303a', b = '#ffffff', n = 2) {
  const [c, g] = cv(64, 8);
  for (let i = 0; i < n; i++) {
    g.fillStyle = i % 2 ? b : a;
    g.fillRect((i * 64) / n, 0, 64 / n, 8);
  }
  return toTex(c, { repeat: [1, 1] });
}

export function leatherTexture(base = '#f6ecd9', stitch = '#b8875a', grid = 2) {
  const [c, g] = cv(256, 256);
  const r = rng(3);
  g.fillStyle = base;
  g.fillRect(0, 0, 256, 256);
  speckle(g, 256, 256, 3000, ['rgba(0,0,0,0.035)', 'rgba(255,255,255,0.05)'], 1, 3, r);
  // パイピング（縫い目の溝）
  g.strokeStyle = 'rgba(0,0,0,0.12)';
  g.lineWidth = 3;
  for (let i = 1; i < grid; i++) {
    g.beginPath(); g.moveTo((i * 256) / grid, 0); g.lineTo((i * 256) / grid, 256); g.stroke();
  }
  g.strokeStyle = stitch;
  g.lineWidth = 2;
  g.setLineDash([6, 5]);
  const inset = 10;
  g.strokeRect(inset, inset, 256 - inset * 2, 256 - inset * 2);
  for (let i = 1; i < grid; i++) {
    const x = (i * 256) / grid;
    g.beginPath(); g.moveTo(x - 6, 0); g.lineTo(x - 6, 256); g.stroke();
    g.beginPath(); g.moveTo(x + 6, 0); g.lineTo(x + 6, 256); g.stroke();
  }
  g.setLineDash([]);
  return toTex(c);
}

export function treadTexture() {
  const [c, g] = cv(256, 64);
  g.fillStyle = '#7a7a7a';
  g.fillRect(0, 0, 256, 64);
  // 外周面（v 0.3〜0.7）にブロックパターン
  g.fillStyle = '#202020';
  for (let i = 0; i < 24; i++) {
    const x = (i * 256) / 24;
    g.fillRect(x, 18, 4, 28);
    g.beginPath();
    g.moveTo(x + 5, 18); g.lineTo(x + 9, 18); g.lineTo(x + 4, 32); g.lineTo(x, 32);
    g.fill();
  }
  g.fillRect(0, 31, 256, 2);
  // 側面の細い同心リング
  g.fillStyle = '#555';
  g.fillRect(0, 6, 256, 2);
  g.fillRect(0, 56, 256, 2);
  return toTex(c, { srgb: false });
}

export function plankTexture() {
  const [c, g] = cv(128, 256);
  const r = rng(21);
  const n = 8;
  for (let i = 0; i < n; i++) {
    const l = 52 + r() * 10;
    g.fillStyle = `hsl(28,45%,${l}%)`;
    g.fillRect(0, (i * 256) / n, 128, 256 / n);
    g.strokeStyle = 'rgba(80,40,10,0.18)';
    for (let k = 0; k < 4; k++) {
      g.beginPath();
      const y = (i * 256) / n + 4 + r() * 24;
      g.moveTo(0, y);
      g.bezierCurveTo(40, y + r() * 4, 80, y - r() * 4, 128, y);
      g.stroke();
    }
    g.fillStyle = '#5a3a20';
    g.fillRect(0, ((i + 1) * 256) / n - 3, 128, 3);
  }
  return toTex(c, { repeat: [1, 1] });
}

export function brickTexture(base = '#f6a9c6', mortar = '#fbd6e4') {
  const [c, g] = cv(256, 256);
  const r = rng(31);
  g.fillStyle = mortar;
  g.fillRect(0, 0, 256, 256);
  const bh = 32, bw = 64;
  for (let y = 0; y < 8; y++) {
    const off = (y % 2) * (bw / 2);
    for (let x = -1; x < 5; x++) {
      const l = 78 + r() * 6;
      g.fillStyle = `hsl(335,78%,${l}%)`;
      g.fillRect(x * bw + off + 2, y * bh + 2, bw - 4, bh - 4);
    }
  }
  g.globalAlpha = 0.25;
  g.fillStyle = base;
  g.fillRect(0, 0, 256, 256);
  g.globalAlpha = 1;
  return toTex(c, { repeat: [1, 1] });
}

export function awningTexture(a = '#ffd23f', b = '#ffffff', n = 8) {
  const [c, g] = cv(256, 32);
  for (let i = 0; i < n; i++) {
    g.fillStyle = i % 2 ? b : a;
    g.fillRect((i * 256) / n, 0, 256 / n + 1, 32);
  }
  return toTex(c);
}

export function rubberMatTexture() {
  const [c, g] = cv(128, 128);
  g.fillStyle = '#2a2c30';
  g.fillRect(0, 0, 128, 128);
  for (let y = 0; y < 128; y += 16) {
    g.fillStyle = '#3a3d42';
    g.fillRect(0, y + 2, 128, 7);
    g.fillStyle = '#1e2023';
    g.fillRect(0, y + 9, 128, 2);
  }
  return toTex(c, { repeat: [1, 1] });
}

export function padTexture(accent) {
  const [c, g] = cv(128, 192);
  g.fillStyle = accent;
  g.fillRect(0, 0, 128, 192);
  g.fillStyle = '#3b3e45';
  g.beginPath(); g.roundRect(12, 12, 104, 168, 16); g.fill();
  for (let y = 26; y < 172; y += 16) {
    g.fillStyle = '#5a5e67';
    g.beginPath(); g.roundRect(22, y, 84, 8, 4); g.fill();
    g.fillStyle = '#25272c';
    g.fillRect(22, y + 8, 84, 3);
  }
  return toTex(c);
}

// スピードメーターの文字盤：数字は使わず、カメとウサギ、緑の巡航帯
export function dialTexture() {
  const S = 512;
  const [c, g] = cv(S, S);
  const cx = S / 2, cy = S / 2;
  const grd = g.createRadialGradient(cx, cy * 0.8, 20, cx, cy, S / 2);
  grd.addColorStop(0, '#2c3442');
  grd.addColorStop(1, '#141820');
  g.fillStyle = grd;
  g.beginPath(); g.arc(cx, cy, S / 2, 0, Math.PI * 2); g.fill();
  const a0 = Math.PI * 0.75, a1 = Math.PI * 2.25;
  // 巡航帯（緑）
  g.lineWidth = 26;
  g.strokeStyle = 'rgba(70,220,120,0.85)';
  g.beginPath(); g.arc(cx, cy, S * 0.38, a0 + (a1 - a0) * 0.18, a0 + (a1 - a0) * 0.82); g.stroke();
  g.strokeStyle = 'rgba(255,255,255,0.18)';
  g.beginPath(); g.arc(cx, cy, S * 0.38, a0, a1); g.stroke();
  // 目盛り
  for (let i = 0; i <= 20; i++) {
    const a = a0 + ((a1 - a0) * i) / 20;
    const big = i % 5 === 0;
    g.strokeStyle = big ? '#ffffff' : 'rgba(255,255,255,0.6)';
    g.lineWidth = big ? 8 : 4;
    const r0 = S * (big ? 0.27 : 0.3), r1 = S * 0.34;
    g.beginPath();
    g.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
    g.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
    g.stroke();
  }
  // カメ（遅い側）
  const turtle = (x, y, s) => {
    g.fillStyle = '#7fe08a';
    g.beginPath(); g.ellipse(x, y, 30 * s, 20 * s, 0, Math.PI, 0); g.fill();
    g.fillRect(x - 32 * s, y - 2 * s, 64 * s, 6 * s);
    g.beginPath(); g.arc(x + 38 * s, y - 6 * s, 10 * s, 0, Math.PI * 2); g.fill();
    g.fillRect(x - 24 * s, y + 2 * s, 9 * s, 12 * s);
    g.fillRect(x + 14 * s, y + 2 * s, 9 * s, 12 * s);
    g.fillStyle = '#3d9a4d';
    g.beginPath(); g.arc(x, y - 8 * s, 8 * s, 0, Math.PI * 2); g.fill();
  };
  const rabbit = (x, y, s) => {
    g.fillStyle = '#ffd0e0';
    g.beginPath(); g.ellipse(x, y, 26 * s, 18 * s, 0, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.arc(x + 24 * s, y - 14 * s, 13 * s, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.ellipse(x + 20 * s, y - 40 * s, 5 * s, 16 * s, -0.2, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.ellipse(x + 31 * s, y - 38 * s, 5 * s, 16 * s, 0.25, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.arc(x - 26 * s, y - 4 * s, 7 * s, 0, Math.PI * 2); g.fill();
  };
  turtle(cx - S * 0.2, cy + S * 0.31, 1.15);
  rabbit(cx + S * 0.2, cy + S * 0.33, 1.15);
  return toTex(c, { aniso: 8 });
}

// 黄色いひし形の道路標識（絵だけ）
export function signTexture(kind) {
  const S = 256;
  const [c, g] = cv(S, S);
  g.translate(S / 2, S / 2);
  g.rotate(Math.PI / 4);
  g.fillStyle = '#1a1a1a';
  g.fillRect(-88, -88, 176, 176);
  g.fillStyle = '#ffd400';
  g.fillRect(-80, -80, 160, 160);
  g.strokeStyle = '#1a1a1a';
  g.lineWidth = 5;
  g.strokeRect(-70, -70, 140, 140);
  g.setTransform(1, 0, 0, 1, 0, 0);
  g.translate(S / 2, S / 2);
  g.fillStyle = '#1a1a1a';
  g.strokeStyle = '#1a1a1a';
  if (kind === 'car') {
    g.beginPath();
    g.roundRect(-52, -6, 104, 30, 10); g.fill();
    g.beginPath();
    g.roundRect(-28, -30, 52, 30, 10); g.fill();
    g.fillStyle = '#ffd400';
    g.beginPath(); g.arc(-30, 26, 13, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.arc(30, 26, 13, 0, Math.PI * 2); g.fill();
    g.fillStyle = '#1a1a1a';
    g.beginPath(); g.arc(-30, 26, 9, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.arc(30, 26, 9, 0, Math.PI * 2); g.fill();
  } else if (kind === 'curve') {
    g.lineWidth = 18;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(14, 56);
    g.lineTo(14, 4);
    g.quadraticCurveTo(14, -30, -26, -30);
    g.stroke();
    g.beginPath();
    g.moveTo(-50, -30); g.lineTo(-22, -54); g.lineTo(-22, -6); g.closePath();
    g.fill();
  } else if (kind === 'signal') {
    g.beginPath(); g.roundRect(-22, -58, 44, 116, 12); g.fill();
    const cols = ['#ff4040', '#ffd400', '#20c080'];
    cols.forEach((col, i) => {
      g.fillStyle = col;
      g.beginPath(); g.arc(0, -34 + i * 34, 13, 0, Math.PI * 2); g.fill();
    });
  } else if (kind === 'hump') {
    g.lineWidth = 14;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(-60, 30);
    g.quadraticCurveTo(0, -60, 60, 30);
    g.stroke();
    g.fillRect(-62, 34, 124, 10);
  } else if (kind === 'duck') {
    g.beginPath(); g.ellipse(0, 14, 40, 26, 0, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.arc(28, -22, 20, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.moveTo(44, -24); g.lineTo(64, -18); g.lineTo(44, -12); g.fill();
  }
  return toTex(c, { aniso: 8 });
}

// 小さな絵記号（クラクション・ハートなど）
export function iconTexture(kind, fg = '#ffffff', bg = null) {
  const S = 128;
  const [c, g] = cv(S, S);
  if (bg) { g.fillStyle = bg; g.fillRect(0, 0, S, S); }
  g.translate(S / 2, S / 2);
  g.fillStyle = fg;
  g.strokeStyle = fg;
  if (kind === 'horn') {
    g.beginPath();
    g.moveTo(-34, -10); g.lineTo(-14, -10); g.lineTo(18, -32); g.lineTo(18, 32); g.lineTo(-14, 10); g.lineTo(-34, 10);
    g.closePath(); g.fill();
    g.lineWidth = 7; g.lineCap = 'round';
    g.beginPath(); g.arc(18, 0, 18, -0.9, 0.9); g.stroke();
    g.beginPath(); g.arc(18, 0, 32, -0.8, 0.8); g.stroke();
  } else if (kind === 'heart') {
    g.beginPath();
    g.moveTo(0, 34);
    g.bezierCurveTo(-60, -6, -28, -52, 0, -20);
    g.bezierCurveTo(28, -52, 60, -6, 0, 34);
    g.fill();
  } else if (kind === 'star') {
    g.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5;
      const r = i % 2 ? 22 : 50;
      g.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    g.closePath(); g.fill();
  } else if (kind === 'candy') {
    g.beginPath(); g.arc(0, 0, 40, 0, Math.PI * 2); g.fill();
    g.strokeStyle = '#ff5fa2'; g.lineWidth = 10;
    g.beginPath();
    for (let a = 0; a < 12; a += 0.1) g.lineTo(Math.cos(a) * a * 3.2, Math.sin(a) * a * 3.2);
    g.stroke();
  }
  return toTex(c, { aniso: 8 });
}

export function chevronTexture() {
  const [c, g] = cv(256, 32);
  g.fillStyle = '#1d1d1d';
  g.fillRect(0, 0, 256, 32);
  g.fillStyle = '#ffcc00';
  for (let i = -1; i < 9; i++) {
    g.beginPath();
    g.moveTo(i * 32, 0); g.lineTo(i * 32 + 16, 0); g.lineTo(i * 32 + 32, 32); g.lineTo(i * 32 + 16, 32);
    g.closePath(); g.fill();
  }
  return toTex(c);
}

export function radialGlowTexture(color = '255,255,255') {
  const [c, g] = cv(128, 128);
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, `rgba(${color},1)`);
  grd.addColorStop(0.35, `rgba(${color},0.45)`);
  grd.addColorStop(1, `rgba(${color},0)`);
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  return toTex(c);
}

export function shadowBlobTexture() {
  const [c, g] = cv(128, 128);
  const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(0,0,0,0.55)');
  grd.addColorStop(0.6, 'rgba(0,0,0,0.22)');
  grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  return toTex(c, { srgb: false });
}

export function waterTexture() {
  const [c, g] = cv(256, 256);
  const r = rng(77);
  g.fillStyle = '#4fb3e8';
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 90; i++) {
    g.strokeStyle = `rgba(255,255,255,${0.15 + r() * 0.25})`;
    g.lineWidth = 2;
    const x = r() * 256, y = r() * 256, w = 10 + r() * 26;
    g.beginPath();
    g.moveTo(x, y);
    g.quadraticCurveTo(x + w / 2, y - 4, x + w, y);
    g.stroke();
  }
  return toTex(c, { repeat: [1, 1] });
}

export function windowTexture(lit = false) {
  const [c, g] = cv(64, 64);
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, 64, 64);
  g.fillStyle = lit ? '#ffe9a8' : '#8fc6e8';
  g.beginPath(); g.roundRect(8, 6, 48, 52, [24, 24, 4, 4]); g.fill();
  g.fillStyle = '#ffffff';
  g.fillRect(30, 6, 4, 52);
  g.fillRect(8, 30, 48, 4);
  return toTex(c);
}
