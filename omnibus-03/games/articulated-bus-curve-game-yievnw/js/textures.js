// キャンバスで作る手続きテクスチャ（外部画像なし）
import * as THREE from '../vendor/three.module.min.js';

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}
function finish(c, repeat = true) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.anisotropy = 8;
  return t;
}
function noiseFill(ctx, w, h, base, amp, count) {
  ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < count; i++) {
    const v = Math.floor(Math.random() * amp - amp / 2);
    ctx.fillStyle = `rgba(${128 + v},${128 + v},${128 + v},0.18)`;
    ctx.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 1 + Math.random() * 2);
  }
}

export function asphaltTexture() {
  const w = 256, h = 256, c = canvas(w, h), ctx = c.getContext('2d');
  noiseFill(ctx, w, h, '#4a4a4c', 90, 9000);
  // 細かい骨材のきらめき
  for (let i = 0; i < 900; i++) {
    ctx.fillStyle = `rgba(200,200,205,${0.06 + Math.random() * 0.12})`;
    ctx.fillRect(Math.random() * w, Math.random() * h, 1, 1);
  }
  const t = finish(c); t.repeat.set(1, 1);
  return t;
}

export function asphaltRoughness() {
  const w = 128, h = 128, c = canvas(w, h), ctx = c.getContext('2d');
  noiseFill(ctx, w, h, '#c8c8c8', 100, 4000);
  const t = finish(c); t.colorSpace = THREE.NoColorSpace;
  return t;
}

export function paverTexture() {
  const w = 256, h = 256, c = canvas(w, h), ctx = c.getContext('2d');
  noiseFill(ctx, w, h, '#b9b6ae', 60, 5000);
  ctx.strokeStyle = 'rgba(70,70,70,0.45)'; ctx.lineWidth = 3;
  const cell = 64;
  for (let y = 0; y <= h; y += cell) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  for (let y = 0; y < h; y += cell) {
    const off = ((y / cell) % 2) * cell / 2;
    for (let x = off; x <= w; x += cell) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + cell); ctx.stroke(); }
  }
  return finish(c);
}

export function grassTexture() {
  const w = 256, h = 256, c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#5d9a3a'; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 14000; i++) {
    const g = 120 + Math.random() * 70, r = 60 + Math.random() * 50;
    ctx.fillStyle = `rgba(${r},${g},40,0.35)`;
    ctx.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 1 + Math.random() * 3);
  }
  return finish(c);
}

export function concreteTexture() {
  const w = 128, h = 128, c = canvas(w, h), ctx = c.getContext('2d');
  noiseFill(ctx, w, h, '#c9c7c0', 50, 3000);
  return finish(c);
}

export function buildingTexture(hue) {
  const w = 256, h = 512, c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = `hsl(${hue}, 18%, 72%)`; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 1500; i++) {
    ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.08})`;
    ctx.fillRect(Math.random() * w, Math.random() * h, 2, 2);
  }
  const cols = 6, rows = 12;
  for (let r = 0; r < rows; r++) for (let col = 0; col < cols; col++) {
    const x = 14 + col * 40, y = 20 + r * 40;
    const lit = Math.random() < 0.3;
    ctx.fillStyle = lit ? '#f4e6b0' : '#2b3644';
    ctx.fillRect(x, y, 26, 24);
    ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillRect(x, y, 26, 5);
  }
  return finish(c);
}

export function skyGradientTexture() {
  const c = canvas(4, 256), ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, '#2f7bd6'); g.addColorStop(0.45, '#7fb8ec'); g.addColorStop(0.7, '#cfe6f7'); g.addColorStop(1, '#e8f0e0');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 4, 256);
  const t = finish(c, false); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

// 文字看板（太い丸ゴシック）
export function signTexture({ w = 512, h = 256, bg = '#ffffff', fg = '#222', text = '', emoji = '', font = 88, border = '#222', radius = 30 }) {
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = bg;
  rr(ctx, 4, 4, w - 8, h - 8, radius); ctx.fill();
  if (border) { ctx.lineWidth = 10; ctx.strokeStyle = border; rr(ctx, 8, 8, w - 16, h - 16, radius - 4); ctx.stroke(); }
  ctx.fillStyle = fg;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = `bold ${font}px "Hiragino Maru Gothic ProN", "Hiragino Sans", "Noto Sans JP", "Yu Gothic", sans-serif`;
  if (emoji) {
    ctx.fillText(emoji, w / 2, h * 0.36);
    ctx.fillText(text, w / 2, h * 0.75);
  } else {
    ctx.fillText(text, w / 2, h / 2);
  }
  const t = finish(c, false); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

// 黄色いひし形の「カーブ注意」標識
export function curveSignTexture(dir) {
  const s = 256, c = canvas(s, s), ctx = c.getContext('2d');
  ctx.clearRect(0, 0, s, s);
  ctx.translate(s / 2, s / 2); ctx.rotate(Math.PI / 4);
  ctx.fillStyle = '#f4c20d'; rr(ctx, -80, -80, 160, 160, 14); ctx.fill();
  ctx.lineWidth = 8; ctx.strokeStyle = '#222'; rr(ctx, -76, -76, 152, 152, 10); ctx.stroke();
  ctx.rotate(-Math.PI / 4);
  ctx.strokeStyle = '#222'; ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(0, 60); ctx.lineTo(0, 0); ctx.quadraticCurveTo(0, -40, dir * 40, -40); ctx.lineTo(dir * 60, -40);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(dir * 40, -60); ctx.lineTo(dir * 62, -40); ctx.lineTo(dir * 40, -20); ctx.stroke();
  const t = finish(c, false); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

// 黒地に黄色の矢印（カーブ外側の誘導板）
export function chevronTexture(dir) {
  const w = 512, h = 128, c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#1e1e1e'; rr(ctx, 0, 0, w, h, 12); ctx.fill();
  ctx.strokeStyle = '#ffd400'; ctx.lineWidth = 16; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  for (let i = 0; i < 4; i++) {
    const x = 70 + i * 120;
    ctx.beginPath();
    ctx.moveTo(x - dir * 30, 24); ctx.lineTo(x + dir * 30, 64); ctx.lineTo(x - dir * 30, 104);
    ctx.stroke();
  }
  const t = finish(c, false); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

// バスの側面バナー
export function busBannerTexture() {
  const w = 1024, h = 256, c = canvas(w, h), ctx = c.getContext('2d');
  ctx.clearRect(0, 0, w, h);
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = `120px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`;
  ctx.fillText('🦒', 150, 128); ctx.fillText('🐘', 870, 128);
  ctx.fillStyle = '#1f5c2e';
  ctx.font = `bold 96px "Hiragino Maru Gothic ProN", "Hiragino Sans", "Noto Sans JP", sans-serif`;
  ctx.fillText('どうぶつえん', 512, 128);
  const t = finish(c, false); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

// 行き先表示（LED風）
export function destinationTexture(text) {
  const w = 512, h = 128, c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#111'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ffb02e'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = `bold 78px "Hiragino Maru Gothic ProN", "Hiragino Sans", "Noto Sans JP", sans-serif`;
  ctx.fillText(text, w / 2, h / 2 + 4);
  const t = finish(c, false); t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

// 蛇腹ゴムの細かな凹凸（法線の代わりのバンプ）
export function rubberBumpTexture() {
  const w = 128, h = 128, c = canvas(w, h), ctx = c.getContext('2d');
  noiseFill(ctx, w, h, '#808080', 80, 6000);
  const t = finish(c); t.colorSpace = THREE.NoColorSpace;
  return t;
}

function rr(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
