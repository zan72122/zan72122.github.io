// Procedural canvas textures for the building and machines.
import * as THREE from 'three';
import { rng } from './util.js';

export function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

export function canvasTex(c, { repeat = null, srgb = true, mips = true, aniso = 4 } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  if (repeat) {
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(repeat[0], repeat[1]);
  }
  t.generateMipmaps = mips;
  t.minFilter = mips ? THREE.LinearMipmapLinearFilter : THREE.LinearFilter;
  t.anisotropy = aniso;
  return t;
}

export function speckle(g, w, h, n, colors, rmin, rmax, seed = 7) {
  const r = rng(seed);
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[Math.floor(r() * colors.length)];
    const rr = rmin + r() * (rmax - rmin);
    g.beginPath();
    g.arc(r() * w, r() * h, rr, 0, Math.PI * 2);
    g.fill();
  }
}

// Large terrazzo-like vinyl tiles, two tones, with faint wax streaks.
export function floorTexture() {
  const S = 1024;
  const c = makeCanvas(S, S);
  const g = c.getContext('2d');
  const r = rng(11);
  const n = 4; // 4x4 tiles per texture repeat
  const ts = S / n;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const alt = (x + y) % 2 === 0;
      const base = alt ? [182, 170, 152] : [168, 157, 140];
      const v = (r() - 0.5) * 8;
      g.fillStyle = `rgb(${base[0] + v},${base[1] + v},${base[2] + v})`;
      g.fillRect(x * ts, y * ts, ts, ts);
    }
  }
  speckle(g, S, S, 9000, ['rgba(120,105,90,0.35)', 'rgba(255,255,255,0.5)', 'rgba(160,140,120,0.3)', 'rgba(90,110,120,0.25)'], 0.6, 2.2, 3);
  // grout
  g.strokeStyle = 'rgba(120,108,95,0.55)';
  g.lineWidth = 3;
  for (let i = 0; i <= n; i++) {
    g.beginPath();
    g.moveTo(i * ts, 0);
    g.lineTo(i * ts, S);
    g.moveTo(0, i * ts);
    g.lineTo(S, i * ts);
    g.stroke();
  }
  // wax swirls
  g.globalAlpha = 0.05;
  for (let i = 0; i < 40; i++) {
    g.strokeStyle = r() > 0.5 ? '#fff' : '#8a7a68';
    g.lineWidth = 10 + r() * 30;
    g.beginPath();
    g.arc(r() * S, r() * S, 60 + r() * 200, r() * 6, r() * 6 + 1.5);
    g.stroke();
  }
  g.globalAlpha = 1;
  return c;
}

// Conveyor belt rubber with fine ribs.
export function beltTexture() {
  const c = makeCanvas(256, 512);
  const g = c.getContext('2d');
  g.fillStyle = '#26272a';
  g.fillRect(0, 0, 256, 512);
  for (let y = 0; y < 512; y += 8) {
    g.fillStyle = 'rgba(255,255,255,0.045)';
    g.fillRect(0, y, 256, 3);
    g.fillStyle = 'rgba(0,0,0,0.35)';
    g.fillRect(0, y + 3, 256, 1);
  }
  speckle(g, 256, 512, 1800, ['rgba(255,255,255,0.06)', 'rgba(0,0,0,0.3)'], 0.4, 1.4, 5);
  // seam
  g.fillStyle = 'rgba(0,0,0,0.5)';
  g.fillRect(0, 250, 256, 4);
  g.fillStyle = 'rgba(255,255,255,0.08)';
  g.fillRect(0, 254, 256, 2);
  return c;
}

// Brushed steel streaks (used as a roughness-ish albedo modulation).
export function brushedTexture() {
  const c = makeCanvas(256, 256);
  const g = c.getContext('2d');
  g.fillStyle = '#b9bec4';
  g.fillRect(0, 0, 256, 256);
  const r = rng(4);
  for (let i = 0; i < 900; i++) {
    const v = 150 + r() * 90;
    g.fillStyle = `rgba(${v},${v + 4},${v + 8},0.25)`;
    g.fillRect(0, r() * 256, 256, 0.6 + r() * 1.2);
  }
  return c;
}

// The scanner glass: dark glass with a rotating star of red laser lines (redrawn live).
export function drawScannerGlass(g, w, h, t, intensity, flash, err) {
  g.fillStyle = '#0c0d10';
  g.fillRect(0, 0, w, h);
  // faint grid
  g.strokeStyle = 'rgba(255,255,255,0.05)';
  g.lineWidth = 1;
  for (let x = 0; x < w; x += 16) {
    g.beginPath();
    g.moveTo(x, 0);
    g.lineTo(x, h);
    g.stroke();
  }
  const cx = w / 2;
  const cy = h / 2;
  g.globalCompositeOperation = 'lighter';
  const col = err > 0 ? [255, 150, 30] : flash > 0 ? [120, 255, 140] : [255, 30, 30];
  const a = intensity * (0.55 + 0.45 * Math.max(flash, err));
  for (let i = 0; i < 9; i++) {
    const ang = t * 0.7 + (i * Math.PI) / 9 + Math.sin(t * 1.3 + i) * 0.08;
    const dx = Math.cos(ang) * w;
    const dy = Math.sin(ang) * w;
    const grad = g.createLinearGradient(cx - dx, cy - dy, cx + dx, cy + dy);
    grad.addColorStop(0, `rgba(${col[0]},${col[1]},${col[2]},0)`);
    grad.addColorStop(0.5, `rgba(${col[0]},${col[1]},${col[2]},${a})`);
    grad.addColorStop(1, `rgba(${col[0]},${col[1]},${col[2]},0)`);
    g.strokeStyle = grad;
    g.lineWidth = 2.2;
    g.beginPath();
    g.moveTo(cx - dx, cy - dy);
    g.lineTo(cx + dx, cy + dy);
    g.stroke();
  }
  const rg = g.createRadialGradient(cx, cy, 0, cx, cy, w * 0.45);
  rg.addColorStop(0, `rgba(${col[0]},${col[1]},${col[2]},${0.35 * a})`);
  rg.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = rg;
  g.fillRect(0, 0, w, h);
  g.globalCompositeOperation = 'source-over';
  // glass sheen
  const sg = g.createLinearGradient(0, 0, w, h);
  sg.addColorStop(0, 'rgba(255,255,255,0.10)');
  sg.addColorStop(0.4, 'rgba(255,255,255,0.0)');
  sg.addColorStop(0.62, 'rgba(255,255,255,0.06)');
  sg.addColorStop(1, 'rgba(255,255,255,0.0)');
  g.fillStyle = sg;
  g.fillRect(0, 0, w, h);
}

// Night outside the front windows.
export function nightTexture() {
  const W = 2048;
  const H = 512;
  const c = makeCanvas(W, H);
  const g = c.getContext('2d');
  const sky = g.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, '#060a1c');
  sky.addColorStop(0.55, '#14224a');
  sky.addColorStop(0.8, '#2a3560');
  sky.addColorStop(1, '#1a1d2c');
  g.fillStyle = sky;
  g.fillRect(0, 0, W, H);
  const r = rng(21);
  for (let i = 0; i < 260; i++) {
    const a = r() * 0.8 + 0.2;
    g.fillStyle = `rgba(255,255,240,${a * 0.8})`;
    const s = r() < 0.06 ? 2.2 : 1.1;
    g.fillRect(r() * W, r() * H * 0.6, s, s);
  }
  // moon
  const mx = W * 0.72;
  const my = H * 0.22;
  const halo = g.createRadialGradient(mx, my, 10, mx, my, 120);
  halo.addColorStop(0, 'rgba(255,250,220,0.35)');
  halo.addColorStop(1, 'rgba(255,250,220,0)');
  g.fillStyle = halo;
  g.fillRect(mx - 130, my - 130, 260, 260);
  g.fillStyle = '#fff7da';
  g.beginPath();
  g.arc(mx, my, 30, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#14224a';
  g.beginPath();
  g.arc(mx + 14, my - 8, 27, 0, Math.PI * 2);
  g.fill();
  // distant houses and trees
  g.fillStyle = '#0b0f1e';
  let x = 0;
  while (x < W) {
    const w = 60 + r() * 140;
    const h = 40 + r() * 90;
    if (r() > 0.4) {
      g.fillRect(x, H * 0.78 - h, w, h + 200);
      g.beginPath();
      g.moveTo(x - 8, H * 0.78 - h);
      g.lineTo(x + w / 2, H * 0.78 - h - 30 - r() * 20);
      g.lineTo(x + w + 8, H * 0.78 - h);
      g.fill();
      for (let k = 0; k < 3; k++) {
        if (r() > 0.55) {
          g.fillStyle = 'rgba(255,200,120,0.85)';
          g.fillRect(x + 10 + r() * (w - 30), H * 0.78 - h + 14 + r() * (h - 30), 10, 12);
          g.fillStyle = '#0b0f1e';
        }
      }
    } else {
      g.beginPath();
      g.arc(x + w / 2, H * 0.78 - 30, 40 + r() * 20, 0, Math.PI * 2);
      g.fill();
    }
    x += w + r() * 30;
  }
  // parking lot
  g.fillStyle = '#16161c';
  g.fillRect(0, H * 0.8, W, H * 0.2);
  g.strokeStyle = 'rgba(255,255,255,0.25)';
  g.lineWidth = 3;
  for (let i = 0; i < 24; i++) {
    g.beginPath();
    g.moveTo(i * 90, H * 0.86);
    g.lineTo(i * 90 + 30, H);
    g.stroke();
  }
  for (const lx of [300, 1000, 1700]) {
    g.fillStyle = '#222';
    g.fillRect(lx - 3, H * 0.35, 6, H * 0.5);
    const lg = g.createRadialGradient(lx, H * 0.36, 2, lx, H * 0.36, 90);
    lg.addColorStop(0, 'rgba(255,190,110,0.9)');
    lg.addColorStop(1, 'rgba(255,190,110,0)');
    g.fillStyle = lg;
    g.fillRect(lx - 90, H * 0.36 - 90, 180, 180);
    const pool = g.createRadialGradient(lx, H * 0.9, 2, lx, H * 0.9, 160);
    pool.addColorStop(0, 'rgba(255,190,110,0.35)');
    pool.addColorStop(1, 'rgba(255,190,110,0)');
    g.fillStyle = pool;
    g.fillRect(lx - 160, H * 0.8, 320, 120);
  }
  return c;
}

// A soft round glow for sprites / points.
export function glowTexture(size = 128, inner = 0.0) {
  const c = makeCanvas(size, size);
  const g = c.getContext('2d');
  const h = size / 2;
  const grad = g.createRadialGradient(h, h, size * inner, h, h, h);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.25, 'rgba(255,255,255,0.55)');
  grad.addColorStop(0.6, 'rgba(255,255,255,0.12)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  return c;
}

// Wall paint with a subtle plaster grain and a coloured dado band.
export function wallTexture(band = '#e35a3e') {
  const c = makeCanvas(512, 512);
  const g = c.getContext('2d');
  g.fillStyle = '#efe6d6';
  g.fillRect(0, 0, 512, 512);
  speckle(g, 512, 512, 3000, ['rgba(0,0,0,0.035)', 'rgba(255,255,255,0.25)'], 0.5, 1.8, 9);
  g.fillStyle = band;
  g.fillRect(0, 380, 512, 36);
  g.fillStyle = '#f3c74a';
  g.fillRect(0, 420, 512, 10);
  g.fillStyle = '#cfc4b2';
  g.fillRect(0, 470, 512, 42);
  return c;
}

// Ceiling: acoustic tiles.
export function ceilingTexture() {
  const c = makeCanvas(512, 512);
  const g = c.getContext('2d');
  // corrugated deck, exposed: long ribs
  g.fillStyle = '#d8d8d8';
  g.fillRect(0, 0, 512, 512);
  for (let x = 0; x < 512; x += 32) {
    const gr = g.createLinearGradient(x, 0, x + 32, 0);
    gr.addColorStop(0, '#bdbdbd');
    gr.addColorStop(0.3, '#e6e6e6');
    gr.addColorStop(0.6, '#cfcfcf');
    gr.addColorStop(1, '#a9a9a9');
    g.fillStyle = gr;
    g.fillRect(x, 0, 32, 512);
  }
  speckle(g, 512, 512, 2000, ['rgba(0,0,0,0.06)'], 0.5, 1.5, 12);
  return c;
}

// Price-tag rail strip on shelf edges.
export function railTexture() {
  const c = makeCanvas(512, 32);
  const g = c.getContext('2d');
  g.fillStyle = '#f5f1e6';
  g.fillRect(0, 0, 512, 32);
  const r = rng(5);
  let x = 6;
  while (x < 500) {
    const w = 34 + r() * 20;
    g.fillStyle = r() > 0.82 ? '#ffd84a' : '#ffffff';
    g.fillRect(x, 4, w, 24);
    g.fillStyle = r() > 0.85 ? '#e94f37' : '#3a2a22';
    g.fillRect(x + 4, 16, w * 0.6, 7);
    g.fillStyle = 'rgba(58,42,34,0.4)';
    g.fillRect(x + 4, 8, w * 0.8, 3);
    x += w + 10 + r() * 30;
  }
  g.fillStyle = 'rgba(0,0,0,0.15)';
  g.fillRect(0, 30, 512, 2);
  return c;
}

// Generic seven-segment digit drawing (for VFD / LED readouts).
const SEG = {
  0: 'abcdef',
  1: 'bc',
  2: 'abged',
  3: 'abgcd',
  4: 'fgbc',
  5: 'afgcd',
  6: 'afgedc',
  7: 'abc',
  8: 'abcdefg',
  9: 'abcdfg',
  '-': 'g',
  ' ': '',
};
export function drawSeg(g, ch, x, y, w, h, on, off) {
  const t = w * 0.18;
  const segs = {
    a: [x + t, y, w - 2 * t, t],
    b: [x + w - t, y + t, t, h / 2 - t * 1.5],
    c: [x + w - t, y + h / 2 + t * 0.5, t, h / 2 - t * 1.5],
    d: [x + t, y + h - t, w - 2 * t, t],
    e: [x, y + h / 2 + t * 0.5, t, h / 2 - t * 1.5],
    f: [x, y + t, t, h / 2 - t * 1.5],
    g: [x + t, y + h / 2 - t / 2, w - 2 * t, t],
  };
  const lit = SEG[ch] || '';
  for (const k of 'abcdefg') {
    const s = segs[k];
    const isOn = lit.includes(k);
    if (!isOn && !off) continue;
    g.fillStyle = isOn ? on : off;
    g.beginPath();
    const [sx, sy, sw, sh] = s;
    const rr = Math.min(sw, sh) * 0.5;
    if (sw >= sh) {
      g.moveTo(sx + rr, sy);
      g.lineTo(sx + sw - rr, sy);
      g.lineTo(sx + sw, sy + sh / 2);
      g.lineTo(sx + sw - rr, sy + sh);
      g.lineTo(sx + rr, sy + sh);
      g.lineTo(sx, sy + sh / 2);
    } else {
      g.moveTo(sx, sy + rr);
      g.lineTo(sx + sw / 2, sy);
      g.lineTo(sx + sw, sy + rr);
      g.lineTo(sx + sw, sy + sh - rr);
      g.lineTo(sx + sw / 2, sy + sh);
      g.lineTo(sx, sy + sh - rr);
    }
    g.closePath();
    g.fill();
  }
}
