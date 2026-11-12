// The crumpled snack bag: its print, barcode and creases are redrawn as it is smoothed.
import { drawIcon, INK } from './icons.js';
import { drawBarcode } from './products.js';
import { rng } from './util.js';

export function frontPanelForCrinkle(c, amount) {
  const g = c.getContext('2d');
  const w = c.width;
  const h = c.height;
  // printed bag
  g.fillStyle = '#7a3fc0';
  g.fillRect(0, 0, w, h);
  g.fillStyle = 'rgba(255,211,74,0.25)';
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    g.beginPath();
    g.moveTo(w / 2, h * 0.45);
    g.arc(w / 2, h * 0.45, h, a, a + Math.PI / 16);
    g.fill();
  }
  g.fillStyle = '#ffd34a';
  g.fillRect(0, h * 0.08, w, h * 0.14);
  g.strokeStyle = '#7a3fc0';
  g.lineWidth = 12;
  g.lineCap = 'round';
  g.beginPath();
  g.arc(w * 0.3, h * 0.15, 14, 0, Math.PI * 2);
  g.moveTo(w * 0.45, h * 0.1);
  g.lineTo(w * 0.45, h * 0.2);
  g.moveTo(w * 0.55, h * 0.1);
  g.quadraticCurveTo(w * 0.7, h * 0.15, w * 0.58, h * 0.2);
  g.stroke();
  g.fillStyle = 'rgba(255,255,255,0.9)';
  g.beginPath();
  g.arc(w / 2, h * 0.45, w * 0.3, 0, Math.PI * 2);
  g.fill();
  drawIcon(g, 'chips', w * 0.22, h * 0.25, w * 0.56);
  // seals
  g.fillStyle = 'rgba(0,0,0,0.15)';
  for (let i = 0; i < w; i += 8) {
    g.fillRect(i, 0, 4, h * 0.05);
    g.fillRect(i, h * 0.95, 4, h * 0.05);
  }
  // barcode patch: warped while crumpled
  drawBarcode(g, w * 0.3, h * 0.7, w * 0.42, h * 0.18, 4242, amount * 1.6);
  // creases: highlights and shadows
  if (amount > 0.01) {
    const r = rng(77);
    for (let i = 0; i < 26; i++) {
      const x0 = r() * w;
      const y0 = r() * h;
      const len = 30 + r() * 90;
      const a = r() * Math.PI;
      g.globalAlpha = amount * (0.35 + r() * 0.4);
      g.strokeStyle = r() > 0.5 ? '#ffffff' : INK;
      g.lineWidth = 1.5 + r() * 3;
      g.beginPath();
      g.moveTo(x0, y0);
      g.lineTo(x0 + Math.cos(a) * len * 0.5 + (r() - 0.5) * 20, y0 + Math.sin(a) * len * 0.5);
      g.lineTo(x0 + Math.cos(a) * len, y0 + Math.sin(a) * len);
      g.stroke();
    }
    g.globalAlpha = 1;
  }
}
