// Shared drawing helpers & palette.  Light comes from the upper-left:
// highlights sit on the left/top, shadows fall to the lower-right.
import { TAU } from './util.js';

export const C = {
  line: '#4d3a2e',
  woodL: '#dcae74', wood: '#bd8753', woodD: '#8d5c35', woodDD: '#6a4326', woodNew: '#e7c28e',
  metalL: '#eef2f4', metal: '#b5bec5', metalD: '#7e8891',
  grass: '#a9d37e', grassD: '#8cbf66', grassL: '#c4e59f',
  path: '#eddcb2', pathD: '#dcc592', pathL: '#f6ead0',
  sand: '#ead5a3', sandD: '#d6bb82', soil: '#bf9364', soilD: '#9a7049',
  leaf: '#7cbc5b', leafD: '#5e9d45', leafL: '#a2d57d',
  stone: '#c9c4bb', stoneD: '#a39d93', stoneL: '#e3dfd8',
  shadow: 'rgba(70,55,35,0.20)',
};

export function rr(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export function ell(ctx, x, y, rx, ry, rot = 0) {
  ctx.beginPath();
  ctx.ellipse(x, y, Math.max(0.01, rx), Math.max(0.01, ry), rot, 0, TAU);
}

export function circ(ctx, x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, Math.max(0.01, r), 0, TAU);
}

export function fillStroke(ctx, fill, stroke = C.line, lw = 1.6) {
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.stroke(); }
}

// soft contact shadow (offset to the lower right, light from upper left)
export function shadow(ctx, x, y, rx, ry, a = 0.2) {
  ctx.save();
  ctx.fillStyle = `rgba(70,55,35,${a})`;
  ell(ctx, x + rx * 0.12, y + ry * 0.2, rx, ry);
  ctx.fill();
  ctx.restore();
}

// thick limb with outline
export function limb(ctx, x1, y1, x2, y2, w, color, line = C.line, lw = 1.5) {
  ctx.lineCap = 'round';
  if (line) {
    ctx.strokeStyle = line; ctx.lineWidth = w + lw * 2;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  }
  ctx.strokeStyle = color; ctx.lineWidth = w;
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
}

// polyline limb (elbow)
export function limb3(ctx, pts, w, color, line = C.line, lw = 1.5) {
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const path = () => { ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y); for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y); };
  if (line) { ctx.strokeStyle = line; ctx.lineWidth = w + lw * 2; path(); ctx.stroke(); }
  ctx.strokeStyle = color; ctx.lineWidth = w; path(); ctx.stroke();
}

// wood plank with grain, drawn in local coords (x,y,w,h)
export function plank(ctx, x, y, w, h, base = C.wood, seed = 1) {
  rr(ctx, x, y, w, h, Math.min(3, h / 3));
  ctx.fillStyle = base; ctx.fill();
  ctx.save();
  ctx.clip();
  ctx.strokeStyle = 'rgba(90,55,25,0.28)'; ctx.lineWidth = 0.9;
  const n = Math.max(1, Math.floor(h / 5));
  for (let i = 0; i < n; i++) {
    const yy = y + (h * (i + 0.5)) / n + Math.sin(seed * 7 + i * 3) * 1.2;
    ctx.beginPath();
    ctx.moveTo(x, yy);
    ctx.bezierCurveTo(x + w * 0.3, yy + Math.sin(seed + i) * 2, x + w * 0.6, yy - Math.cos(seed * 2 + i) * 2, x + w, yy + Math.sin(seed * 3 + i) * 1.5);
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(255,240,210,0.25)';
  ctx.fillRect(x, y, w, Math.max(1, h * 0.18));
  ctx.restore();
  rr(ctx, x, y, w, h, Math.min(3, h / 3));
  ctx.strokeStyle = C.woodDD; ctx.lineWidth = 1.2; ctx.stroke();
}

// a leafy clump made from circles
export function leafClump(ctx, x, y, r, rnd, dark = C.leafD, mid = C.leaf, light = C.leafL, sway = 0) {
  const n = 7;
  ctx.fillStyle = dark;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * TAU + rnd * 3;
    circ(ctx, x + Math.cos(a) * r * 0.55 + sway, y + Math.sin(a) * r * 0.45 + 2, r * 0.55);
    ctx.fill();
  }
  ctx.fillStyle = mid;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * TAU + rnd * 5;
    circ(ctx, x + Math.cos(a) * r * 0.45 + sway, y + Math.sin(a) * r * 0.35 - 2, r * 0.5);
    ctx.fill();
  }
  ctx.fillStyle = light;
  circ(ctx, x - r * 0.25 + sway, y - r * 0.3, r * 0.35); ctx.fill();
  circ(ctx, x + r * 0.1 + sway, y - r * 0.42, r * 0.22); ctx.fill();
}

// glint used for "reflection" attention cues
export function glint(ctx, x, y, s, a) {
  if (a <= 0.01) return;
  ctx.save();
  ctx.globalAlpha = Math.min(1, a);
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(x, y - s); ctx.quadraticCurveTo(x, y, x + s, y);
  ctx.quadraticCurveTo(x, y, x, y + s); ctx.quadraticCurveTo(x, y, x - s, y);
  ctx.quadraticCurveTo(x, y, x, y - s);
  ctx.fill();
  ctx.restore();
}

export function mixColor(a, b, t) {
  const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
  const r = Math.round(((pa >> 16) & 255) * (1 - t) + ((pb >> 16) & 255) * t);
  const g = Math.round(((pa >> 8) & 255) * (1 - t) + ((pb >> 8) & 255) * t);
  const bl = Math.round((pa & 255) * (1 - t) + (pb & 255) * t);
  return `rgb(${r},${g},${bl})`;
}
