// Canvas 2D による手描き風テクスチャ生成の基礎
import * as THREE from '../vendor/three.module.min.js';

export function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

export function canvasTexture(c, opts = {}) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = opts.srgb === false ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = opts.repeat ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  t.anisotropy = opts.anisotropy || 4;
  t.generateMipmaps = opts.mipmaps !== false;
  t.minFilter = opts.mipmaps === false ? THREE.LinearFilter : THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.needsUpdate = true;
  return t;
}

// 柔らかい円 (放射グラデーション)
export function softDot(ctx, x, y, r, color, alpha = 1, hard = 0) {
  const g = ctx.createRadialGradient(x, y, r * hard, x, y, r);
  g.addColorStop(0, color);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.globalAlpha = alpha;
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 1;
}

export function rgba(r, g, b, a = 1) {
  return `rgba(${r | 0},${g | 0},${b | 0},${a})`;
}

// ImageData に関数で画素を書き込む
export function fillPixels(c, fn) {
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(c.width, c.height);
  const d = img.data;
  const out = [0, 0, 0, 255];
  for (let y = 0; y < c.height; y++) {
    for (let x = 0; x < c.width; x++) {
      out[3] = 255;
      fn(x, y, out);
      const i = (y * c.width + x) * 4;
      d[i] = out[0]; d[i + 1] = out[1]; d[i + 2] = out[2]; d[i + 3] = out[3];
    }
  }
  ctx.putImageData(img, 0, 0);
  return c;
}
