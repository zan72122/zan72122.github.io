// Painted (Canvas2D) textures for the world: book cover/board/film prints, sticker sheets,
// counter, wall, props. Everything is drawn procedurally; no image assets.
import { rrect, rrectSub, heart, star, circle, ellipse, radial, linear, cloud, face } from './shapes.js';
import { rng } from '../core/math.js';

export function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(w));
  c.height = Math.max(1, Math.round(h));
  return c;
}

// ---------------- book ----------------
export function bookBoard(theme = 'pink', S = 512) {
  const c = canvas(S, S);
  const g = c.getContext('2d');
  const base = theme === 'pink' ? '#f8c9d4' : '#bfe3f6';
  const deep = theme === 'pink' ? '#f2a9bb' : '#93cdec';
  const pale = theme === 'pink' ? '#fde8ee' : '#e6f5fd';
  g.fillStyle = base;
  g.fillRect(0, 0, S, S);
  // soft gingham
  g.globalAlpha = 0.35;
  g.fillStyle = pale;
  const step = S / 12;
  for (let i = 0; i < 12; i += 2) g.fillRect(i * step, 0, step, S);
  for (let j = 0; j < 12; j += 2) g.fillRect(0, j * step, S, step);
  g.globalAlpha = 1;
  // tiny hearts / stars scattered
  const r = rng(theme === 'pink' ? 11 : 23);
  for (let i = 0; i < 26; i++) {
    const x = r() * S, y = r() * S, s = S * (0.025 + r() * 0.02);
    g.fillStyle = i % 3 === 0 ? '#ffffff' : deep;
    g.globalAlpha = 0.6;
    if (theme === 'pink') heart(g, x, y, s, s * 0.9);
    else star(g, x, y, s * 0.55, s * 0.26, 5, 0.2);
    g.fill();
  }
  g.globalAlpha = 1;
  // inner frame stitch
  g.strokeStyle = 'rgba(255,255,255,0.7)';
  g.lineWidth = S * 0.006;
  g.setLineDash([S * 0.016, S * 0.012]);
  rrect(g, S * 0.035, S * 0.035, S * 0.93, S * 0.93, S * 0.05);
  g.stroke();
  g.setLineDash([]);
  return c;
}

export function bookCover(theme = 'pink', w = 512, h = 512) {
  const c = canvas(w, h);
  const g = c.getContext('2d');
  const top = theme === 'pink' ? '#fbd3dd' : '#cdeafb';
  const bot = theme === 'pink' ? '#f4b3c4' : '#a6d6f2';
  g.fillStyle = linear(g, 0, 0, w, h, [[0, top], [1, bot]]);
  rrect(g, 0, 0, w, h, w * 0.06);
  g.fill();
  // milky vinyl sheen
  g.fillStyle = 'rgba(255,255,255,0.25)';
  rrect(g, w * 0.02, h * 0.02, w * 0.96, h * 0.3, w * 0.05);
  g.fill();
  g.strokeStyle = 'rgba(255,255,255,0.85)';
  g.lineWidth = w * 0.007;
  g.setLineDash([w * 0.018, w * 0.012]);
  rrect(g, w * 0.022, h * 0.022, w * 0.956, h * 0.956, w * 0.045);
  g.stroke();
  g.setLineDash([]);
  return c;
}

// printed decoration on a clear film page (white ink); alpha = ink coverage
export function filmPrint(kind, S = 512) {
  const c = canvas(S, S);
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(255,255,255,0.9)';
  const r = rng(kind * 31 + 7);
  if (kind % 4 === 0) {
    for (let y = 0; y < 14; y++) for (let x = 0; x < 14; x++) {
      if ((x + y) % 2) continue;
      circle(g, (x + 0.5) * S / 14, (y + 0.5) * S / 14, S * 0.006);
      g.fill();
    }
  } else if (kind % 4 === 1) {
    for (let i = 0; i < 30; i++) {
      const x = r() * S, y = r() * S;
      star(g, x, y, S * 0.014, S * 0.006, 5, 0.1, r() * 3);
      g.fill();
    }
  } else if (kind % 4 === 2) {
    for (let i = 0; i < 22; i++) {
      const x = r() * S, y = r() * S;
      heart(g, x, y, S * 0.022, S * 0.02);
      g.globalAlpha = 0.7;
      g.fill();
    }
    g.globalAlpha = 1;
  } else {
    g.lineWidth = S * 0.004;
    g.strokeStyle = 'rgba(255,255,255,0.8)';
    for (let i = 1; i < 10; i++) {
      g.beginPath();
      g.moveTo(0, (i * S) / 10);
      g.lineTo(S, (i * S) / 10);
      g.stroke();
    }
  }
  // lace border
  g.fillStyle = 'rgba(255,255,255,0.85)';
  const n = 24;
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    for (const [x, y] of [[t * S, S * 0.012], [t * S, S * 0.988], [S * 0.988, t * S]]) {
      circle(g, x, y, S * 0.016);
      g.fill();
    }
  }
  // punched holes for the rings are rendered by the film shader edge; draw reinforcement rings
  g.strokeStyle = 'rgba(255,255,255,0.9)';
  g.lineWidth = S * 0.006;
  for (const y of ringYs()) {
    circle(g, S * 0.035, y * S, S * 0.018);
    g.stroke();
  }
  return c;
}

export function ringYs() {
  return [0.2, 0.5, 0.8];
}

// generic soft blob (for shadows / glows)
export function softBlob(S = 128, roundRect = false) {
  const c = canvas(S, S);
  const g = c.getContext('2d');
  if (roundRect) {
    g.filter = `blur(${S * 0.06}px)`;
    g.fillStyle = '#fff';
    rrect(g, S * 0.15, S * 0.15, S * 0.7, S * 0.7, S * 0.08);
    g.fill();
  } else {
    g.fillStyle = radial(g, S / 2, S / 2, 0, S / 2, [[0, 'rgba(255,255,255,1)'], [0.5, 'rgba(255,255,255,0.5)'], [1, 'rgba(255,255,255,0)']]);
    g.fillRect(0, 0, S, S);
  }
  return c;
}

// ---------------- sticker sheets ----------------
export function sheetCard(theme, w, h) {
  const c = canvas(w, h);
  const g = c.getContext('2d');
  const s = Math.min(w, h);
  g.fillStyle = theme.bg;
  rrect(g, 0, 0, w, h, s * 0.05);
  g.fill();
  // header band with pattern (no text)
  g.save();
  rrect(g, 0, 0, w, h, s * 0.05);
  g.clip();
  g.fillStyle = theme.band;
  g.fillRect(0, 0, w, h * 0.1);
  g.fillStyle = 'rgba(255,255,255,0.75)';
  const r = rng(theme.seed || 3);
  for (let i = 0; i < 9; i++) {
    const x = ((i + 0.5) / 9) * w, y = h * 0.05;
    if (theme.motif === 'heart') heart(g, x, y, s * 0.04, s * 0.036);
    else if (theme.motif === 'star') star(g, x, y, s * 0.022, s * 0.01, 5, 0.15);
    else circle(g, x, y, s * 0.012);
    g.fill();
  }
  // scalloped edge below band
  g.fillStyle = theme.band;
  for (let i = 0; i < 18; i++) {
    circle(g, ((i + 0.5) / 18) * w, h * 0.1, w / 36);
    g.fill();
  }
  // faint pattern on the release paper
  g.globalAlpha = 0.18;
  g.fillStyle = theme.dot;
  for (let i = 0; i < 70; i++) {
    const x = r() * w, y = h * 0.14 + r() * h * 0.84;
    circle(g, x, y, s * 0.006 + r() * s * 0.005);
    g.fill();
  }
  g.globalAlpha = 1;
  g.restore();
  // glossy release paper sheen
  g.fillStyle = linear(g, 0, 0, w, h, [[0, 'rgba(255,255,255,0.0)'], [0.45, 'rgba(255,255,255,0.22)'], [0.55, 'rgba(255,255,255,0.0)']]);
  rrect(g, 0, 0, w, h, s * 0.05);
  g.fill();
  return c;
}

// die-cut ghost outline left on a sheet when a sticker is taken
export function ghostFromArt(artCanvas) {
  const S = artCanvas.width;
  const c = canvas(S, S);
  const g = c.getContext('2d');
  g.drawImage(artCanvas, 0, 0);
  g.globalCompositeOperation = 'source-in';
  g.fillStyle = 'rgba(255,255,255,1)';
  g.fillRect(0, 0, S, S);
  return c;
}

// ---------------- room ----------------
export function counterTop(w, h, seed = 5) {
  const c = canvas(w, h);
  const g = c.getContext('2d');
  // warm cream wood with soft planks
  g.fillStyle = '#f3dcc6';
  g.fillRect(0, 0, w, h);
  const r = rng(seed);
  const plank = h / 5;
  for (let i = 0; i < 6; i++) {
    const y = i * plank;
    g.fillStyle = i % 2 ? 'rgba(232,196,168,0.45)' : 'rgba(250,228,206,0.4)';
    g.fillRect(0, y, w, plank);
    g.strokeStyle = 'rgba(190,140,110,0.25)';
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(0, y);
    g.lineTo(w, y);
    g.stroke();
    for (let k = 0; k < 14; k++) {
      g.strokeStyle = `rgba(200,150,115,${0.06 + r() * 0.08})`;
      g.lineWidth = 1 + r() * 2;
      g.beginPath();
      const yy = y + r() * plank;
      g.moveTo(0, yy);
      g.bezierCurveTo(w * 0.3, yy + (r() - 0.5) * 10, w * 0.6, yy + (r() - 0.5) * 10, w, yy + (r() - 0.5) * 6);
      g.stroke();
    }
  }
  return c;
}

export function lacemat(w, h, col = '#fff7fb') {
  const c = canvas(w, h);
  const g = c.getContext('2d');
  g.fillStyle = col;
  const r = Math.min(w, h) * 0.06;
  rrect(g, r, r, w - 2 * r, h - 2 * r, r);
  g.fill();
  const n = Math.round((w + h) / (r * 1.6));
  for (let i = 0; i < n; i++) {
    const t = i / n;
    const per = 2 * (w + h - 4 * r);
    let d = t * per;
    let x, y;
    const iw = w - 2 * r, ih = h - 2 * r;
    if (d < iw) { x = r + d; y = r; } else if ((d -= iw) < ih) { x = w - r; y = r + d; } else if ((d -= ih) < iw) { x = w - r - d; y = h - r; } else { d -= iw; x = r; y = h - r - d; }
    circle(g, x, y, r * 0.75);
    g.fill();
  }
  g.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    const per = 2 * (w + h - 4 * r);
    let d = t * per;
    let x, y;
    const iw = w - 2 * r, ih = h - 2 * r;
    if (d < iw) { x = r + d; y = r; } else if ((d -= iw) < ih) { x = w - r; y = r + d; } else if ((d -= ih) < iw) { x = w - r - d; y = h - r; } else { d -= iw; x = r; y = h - r - d; }
    circle(g, x, y, r * 0.18);
    g.fill();
  }
  return c;
}

export { rrect, rrectSub, heart, star, circle, ellipse, radial, linear, cloud, face };

// Spectral streak: a soft, slightly curved rainbow arc (red outside .. violet inside),
// fading at both ends. Used for rainbow light thrown by clear stickers.
export function rainbowStreak(w = 256, h = 96) {
  const c = canvas(w, h);
  const g = c.getContext('2d');
  const img = g.createImageData(w, h);
  const stops = [[255, 40, 70], [255, 130, 30], [255, 225, 40], [40, 220, 90], [40, 140, 255], [150, 70, 255]];
  const spec = (t) => {
    const x = Math.max(0, Math.min(0.9999, t)) * (stops.length - 1);
    const i = Math.floor(x), f = x - i;
    return stops[i].map((v, k) => v + (stops[i + 1][k] - v) * f);
  };
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const u = x / (w - 1);
      const t = y / (h - 1);
      const env = Math.pow(Math.sin(Math.PI * u), 1.4);
      const center = 0.5 + 0.2 * Math.sin(Math.PI * u) - 0.1;
      const half = 0.12 + 0.2 * env;
      const d = (t - center) / half;
      const k = (y * w + x) * 4;
      if (Math.abs(d) >= 1) { img.data[k + 3] = 0; continue; }
      const col = spec((d + 1) / 2);
      const a = Math.sqrt(1 - d * d) * env;
      img.data[k] = col[0];
      img.data[k + 1] = col[1];
      img.data[k + 2] = col[2];
      img.data[k + 3] = a * 255;
    }
  }
  g.putImageData(img, 0, 0);
  return c;
}
