// The shop interior backdrop: wallpapered back wall with shelves, bunting and the big
// window (whose sky follows the time of day), and the wooden counter everything sits on.
import { Texture, gl, blend } from '../core/gl.js';
import { canvas, counterTop, lacemat, rrect, heart, star, circle, ellipse, radial, linear, cloud } from '../art/paint.js';
import { rng, lerp, clamp } from '../core/math.js';

function wallpaper(S = 256) {
  const c = canvas(S, S);
  const g = c.getContext('2d');
  g.fillStyle = '#fff1e6';
  g.fillRect(0, 0, S, S);
  g.fillStyle = 'rgba(255,190,205,0.35)';
  for (let i = 0; i < 4; i++) g.fillRect(i * S / 4 + S / 16, 0, S / 16, S);
  g.fillStyle = 'rgba(255,170,190,0.55)';
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const x = i * S / 4 + S / 8 + S / 32 + ((j % 2) * S) / 8 - S / 16, y = j * S / 4 + S / 8;
      for (let k = 0; k < 5; k++) {
        const a = (k / 5) * Math.PI * 2;
        circle(g, x + Math.cos(a) * S * 0.012, y + Math.sin(a) * S * 0.012, S * 0.01);
        g.fill();
      }
    }
  }
  return c;
}

function shelfSprite(variant, w = 512, h = 220) {
  const c = canvas(w, h);
  const g = c.getContext('2d');
  const r = rng(variant * 13 + 5);
  // plank
  const py = h * 0.78;
  g.fillStyle = '#e9c3a0';
  rrect(g, w * 0.02, py, w * 0.96, h * 0.1, h * 0.03);
  g.fill();
  g.fillStyle = 'rgba(120,70,40,0.18)';
  g.fillRect(w * 0.03, py + h * 0.08, w * 0.94, h * 0.02);
  // brackets
  g.fillStyle = '#ffffff';
  for (const x of [0.15, 0.85]) { rrect(g, w * x - 6, py + h * 0.09, 12, h * 0.1, 4); g.fill(); }
  // items on the shelf
  let x = w * 0.06;
  while (x < w * 0.9) {
    const kind = Math.floor(r() * 4);
    const col = ['#ffb3c8', '#bfe3ff', '#ffe08a', '#c9b6ff', '#a8ebc9'][Math.floor(r() * 5)];
    if (kind === 0) {
      // glass jar with candy-like stickers
      const jw = w * 0.11, jh = h * 0.42;
      g.fillStyle = 'rgba(230,245,255,0.75)';
      rrect(g, x, py - jh, jw, jh, jw * 0.2);
      g.fill();
      for (let k = 0; k < 9; k++) {
        g.fillStyle = ['#ff8fb1', '#7fd0ff', '#ffd36b', '#b49cff', '#8fe3a8'][k % 5];
        circle(g, x + jw * (0.2 + r() * 0.6), py - jh * (0.1 + r() * 0.55), jw * 0.11);
        g.fill();
      }
      g.fillStyle = col;
      rrect(g, x - 2, py - jh - h * 0.06, jw + 4, h * 0.07, 5);
      g.fill();
      g.fillStyle = 'rgba(255,255,255,0.7)';
      rrect(g, x + jw * 0.12, py - jh * 0.92, jw * 0.12, jh * 0.6, 4);
      g.fill();
      x += jw + w * 0.04;
    } else if (kind === 1) {
      // washi tape rolls standing side by side (seen from the front: short cylinders)
      for (let k = 0; k < 2; k++) {
        const tw = w * 0.05, th = h * 0.16;
        const tx = x + k * (tw + 4), ty = py - th;
        g.fillStyle = ['#ffb3c8', '#bfe3ff', '#ffe08a', '#c9b6ff'][Math.floor(r() * 4)];
        rrect(g, tx, ty, tw, th, tw * 0.25);
        g.fill();
        g.fillStyle = 'rgba(255,255,255,0.55)';
        for (let q = 0; q < 3; q++) { circle(g, tx + tw * 0.5, ty + th * (0.25 + q * 0.25), tw * 0.12); g.fill(); }
      }
      x += w * 0.1 + 4 + w * 0.04;
    } else if (kind === 2) {
      // little potted plant
      const pw = w * 0.08;
      g.fillStyle = '#ffc9a8';
      rrect(g, x, py - h * 0.2, pw, h * 0.2, 6);
      g.fill();
      g.fillStyle = '#7fd38f';
      for (let k = 0; k < 5; k++) {
        ellipse(g, x + pw / 2 + (k - 2) * pw * 0.18, py - h * 0.3 - Math.abs(k - 2) * -h * 0.03, pw * 0.16, h * 0.13, (k - 2) * 0.4);
        g.fill();
      }
      x += pw + w * 0.05;
    } else {
      // stack of sticker books
      const bw = w * 0.13;
      for (let k = 0; k < 3; k++) {
        g.fillStyle = ['#ffc2d4', '#c6e6ff', '#fff0a8', '#d8c8ff'][(k + variant) % 4];
        rrect(g, x + k * 3, py - (k + 1) * h * 0.07, bw - k * 6, h * 0.065, 4);
        g.fill();
      }
      g.fillStyle = '#ff8fb1';
      heart(g, x + bw * 0.5, py - h * 0.27, h * 0.1, h * 0.09);
      g.fill();
      x += bw + w * 0.04;
    }
  }
  return c;
}

function bunting(w = 1024, h = 90) {
  const c = canvas(w, h);
  const g = c.getContext('2d');
  g.strokeStyle = '#f2a3b8';
  g.lineWidth = 3;
  g.beginPath();
  g.moveTo(0, h * 0.15);
  g.quadraticCurveTo(w / 2, h * 0.45, w, h * 0.15);
  g.stroke();
  const cols = ['#ffb3c8', '#bfe3ff', '#ffe08a', '#c9b6ff', '#a8ebc9'];
  const n = 11;
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    const x = t * w;
    const y = h * 0.15 + Math.sin(t * Math.PI) * h * 0.22;
    g.fillStyle = cols[i % cols.length];
    g.beginPath();
    g.moveTo(x - w / n * 0.35, y);
    g.lineTo(x + w / n * 0.35, y);
    g.lineTo(x, y + h * 0.55);
    g.closePath();
    g.fill();
    g.fillStyle = 'rgba(255,255,255,0.8)';
    circle(g, x, y + h * 0.18, h * 0.05);
    g.fill();
  }
  return c;
}

export function windowSprite(tod, w = 360, h = 300, rain = 0) {
  const c = canvas(w, h);
  const g = c.getContext('2d');
  const sunset = clamp((tod - 0.55) / 0.45, 0, 1);
  const top = mixc([150, 205, 255], [150, 130, 210], sunset);
  const mid = mixc([215, 236, 255], [255, 170, 140], sunset);
  const bot = mixc([240, 248, 255], [255, 205, 140], sunset);
  const fx = w * 0.06, fy = h * 0.06, fw = w * 0.88, fh = h * 0.88;
  // sky
  g.save();
  rrect(g, fx, fy, fw, fh, w * 0.06);
  g.clip();
  g.fillStyle = linear(g, 0, fy, 0, fy + fh, [[0, `rgb(${top})`], [0.6, `rgb(${mid})`], [1, `rgb(${bot})`]]);
  g.fillRect(fx, fy, fw, fh);
  // rainbow after rain (fades during the day)
  const rb = clamp(1 - tod * 1.6, 0, 1);
  if (rb > 0) {
    const cols = ['#ff8fa8', '#ffc07a', '#ffe98a', '#9fe6a6', '#8ccfff', '#bba3ff'];
    g.globalAlpha = 0.55 * rb;
    g.lineWidth = w * 0.022;
    cols.forEach((col, i) => {
      g.strokeStyle = col;
      g.beginPath();
      g.arc(w * 0.62, h * 0.95, w * (0.42 - i * 0.022), Math.PI * 1.05, Math.PI * 1.95);
      g.stroke();
    });
    g.globalAlpha = 1;
  }
  // sun
  if (sunset > 0) {
    g.fillStyle = radial(g, w * 0.66, h * 0.66, 0, w * 0.3, [[0, `rgba(255,236,170,${sunset})`], [0.25, `rgba(255,190,120,${0.7 * sunset})`], [1, 'rgba(255,160,120,0)']]);
    g.fillRect(fx, fy, fw, fh);
  }
  // clouds
  g.fillStyle = sunset > 0.5 ? 'rgba(255,200,190,0.85)' : 'rgba(255,255,255,0.9)';
  cloud(g, w * 0.3, h * 0.3, w * 0.28, h * 0.14); g.fill();
  cloud(g, w * 0.75, h * 0.22, w * 0.2, h * 0.1); g.fill();
  // street roofs silhouette
  g.fillStyle = sunset > 0.5 ? 'rgba(170,110,140,0.55)' : 'rgba(200,190,215,0.6)';
  g.beginPath();
  g.moveTo(fx, fy + fh);
  const roofs = [[0, 0.78], [0.12, 0.7], [0.24, 0.78], [0.3, 0.74], [0.42, 0.74], [0.48, 0.66], [0.6, 0.78], [0.7, 0.72], [0.82, 0.72], [0.9, 0.8], [1, 0.76]];
  for (const [x, y] of roofs) g.lineTo(fx + x * fw, fy + y * fh);
  g.lineTo(fx + fw, fy + fh);
  g.closePath();
  g.fill();
  // raindrops on glass
  if (rain > 0) {
    const r = rng(17);
    for (let i = 0; i < 40; i++) {
      const x = fx + r() * fw, y = fy + r() * fh, s = 2 + r() * 5;
      g.fillStyle = `rgba(255,255,255,${0.5 * rain})`;
      ellipse(g, x, y, s * 0.8, s);
      g.fill();
      g.fillStyle = `rgba(120,150,190,${0.25 * rain})`;
      ellipse(g, x + s * 0.2, y + s * 0.3, s * 0.5, s * 0.6);
      g.fill();
    }
  }
  g.restore();
  // frame: sakura pink
  g.strokeStyle = '#f7b7c8';
  g.lineWidth = w * 0.05;
  rrect(g, fx, fy, fw, fh, w * 0.06);
  g.stroke();
  g.lineWidth = w * 0.03;
  g.beginPath();
  g.moveTo(w / 2, fy);
  g.lineTo(w / 2, fy + fh);
  g.moveTo(fx, h * 0.5);
  g.lineTo(fx + fw, h * 0.5);
  g.stroke();
  g.strokeStyle = 'rgba(255,255,255,0.6)';
  g.lineWidth = w * 0.008;
  rrect(g, fx - w * 0.012, fy - w * 0.012, fw + w * 0.024, fh + w * 0.024, w * 0.07);
  g.stroke();
  // little curtain swags
  g.fillStyle = 'rgba(255,240,245,0.95)';
  for (const sx of [0, 1]) {
    g.beginPath();
    const x0 = sx ? w - fx * 0.2 : fx * 0.2;
    g.moveTo(x0, fy - h * 0.02);
    g.quadraticCurveTo(sx ? w - w * 0.2 : w * 0.2, fy + h * 0.1, sx ? w - w * 0.08 : w * 0.08, fy + fh * 0.75);
    g.lineTo(x0, fy + fh * 0.75);
    g.closePath();
    g.fill();
  }
  return c;
}

function mixc(a, b, t) {
  return a.map((v, i) => Math.round(lerp(v, b[i], t))).join(',');
}

function doorSprite(w = 260, h = 420) {
  const c = canvas(w, h);
  const g = c.getContext('2d');
  g.fillStyle = '#f9b9cb';
  rrect(g, w * 0.08, h * 0.04, w * 0.84, h * 0.96, w * 0.38);
  g.fill();
  g.fillStyle = 'rgba(230,246,255,0.9)';
  rrect(g, w * 0.22, h * 0.12, w * 0.56, h * 0.36, w * 0.25);
  g.fill();
  g.fillStyle = '#ffe9a8';
  circle(g, w * 0.76, h * 0.62, w * 0.05);
  g.fill();
  // bell
  g.fillStyle = '#ffd25e';
  g.beginPath();
  g.moveTo(w * 0.42, h * 0.07);
  g.quadraticCurveTo(w * 0.5, -h * 0.02, w * 0.58, h * 0.07);
  g.lineTo(w * 0.62, h * 0.12);
  g.lineTo(w * 0.38, h * 0.12);
  g.closePath();
  g.fill();
  return c;
}

export class Room {
  constructor(game) {
    this.game = game;
    this.tex = {
      wall: Texture.fromCanvas(wallpaper(), { wrap: gl.REPEAT, mip: true }),
      shelves: [0, 1, 2].map((v) => Texture.fromCanvas(shelfSprite(v), { mip: true })),
      bunting: Texture.fromCanvas(bunting(), { mip: true }),
      counter: Texture.fromCanvas(counterTop(512, 512), { wrap: gl.REPEAT, mip: true }),
      door: Texture.fromCanvas(doorSprite(), { mip: true }),
      lace: Texture.fromCanvas(lacemat(512, 512), { mip: true }),
    };
    this.winTod = -1;
    this.winTex = null;
  }

  updateWindow(tod, rain) {
    const key = Math.round(tod * 40) + Math.round(rain * 4) * 100;
    if (key === this.winTod) return;
    this.winTod = key;
    const c = windowSprite(tod, 360, 300, rain);
    if (this.winTex) this.winTex.updateCanvas(c);
    else this.winTex = Texture.fromCanvas(c, { mip: true });
  }

  // wall strip across the whole shop: x from left to right (world), y0..y1
  renderWall(R, L, x0, x1, y0, y1, stationXs, kinds) {
    const T = this.tex;
    const h = y1 - y0;
    const tile = 180;
    R.drawPaint({ art: T.wall, x: (x0 + x1) / 2, y: (y0 + y1) / 2, size: [x1 - x0, h], lit: 1, uvRect: [x0 / tile, 0, (x1 - x0) / tile, h / tile] });
    // wainscot rail
    R.drawPaint({ art: this.game.tex.white, x: (x0 + x1) / 2, y: y1 - h * 0.08, size: [x1 - x0, h * 0.16], lit: 1, mul: [1.0, 0.86, 0.9] });
    R.drawPaint({ art: this.game.tex.white, x: (x0 + x1) / 2, y: y1 - h * 0.17, size: [x1 - x0, Math.max(3, h * 0.025)], lit: 1, mul: [1, 1, 1] });
    // bunting near the ceiling
    const bw = Math.min(700, h * 4.2);
    for (let x = x0 - (x0 % bw) - bw; x < x1 + bw; x += bw) {
      R.drawPaint({ art: T.bunting, x: x + bw / 2, y: y0 + h * 0.12, size: [bw, h * 0.24], lit: 1 });
    }
    // per-station decorations
    stationXs.forEach((sx, i) => {
      const k = kinds[i];
      if (sx < x0 - 600 || sx > x1 + 600) return;
      if (k === 'window') {
        if (this.winTex) {
          const ww = Math.min(h * 1.35, 420);
          R.drawPaint({ art: this.winTex, x: sx, y: y0 + h * 0.5, size: [ww, ww * 0.83], lit: -1, mul: [1.0, 1.0, 1.0] });
        }
      } else if (k === 'door') {
        R.drawPaint({ art: T.door, x: sx, y: y0 + h * 0.55, size: [h * 0.55, h * 0.9], lit: 1 });
      } else {
        const sw = Math.min(h * 2.4, 560);
        R.drawPaint({ art: T.shelves[i % 3], x: sx, y: y0 + h * 0.56, size: [sw, sw * 0.43], lit: 1 });
      }
    });
  }

  renderCounter(R, x0, y0, x1, y1) {
    const tile = 420;
    R.drawPaint({ art: this.tex.counter, x: (x0 + x1) / 2, y: (y0 + y1) / 2, size: [x1 - x0, y1 - y0], lit: 1, uvRect: [0, 0, (x1 - x0) / tile, (y1 - y0) / tile] });
    // counter back edge (shadow line under the wall)
    R.drawPaint({ art: this.game.tex.white, x: (x0 + x1) / 2, y: y0 + 3, size: [x1 - x0, 6], lit: 1, mul: [0.85, 0.7, 0.68] });
  }

  // sunlight through the window lands on the counter as bright skewed patches
  renderSunPatches(R, L, x, y, w, h, strength) {
    if (strength <= 0.01) return;
    const d = L.dir;
    const len = clamp(1 / Math.max(d[2], 0.2), 1, 4);
    const ang = Math.atan2(-d[1], -d[0]);
    blend('add');
    const col = L.col.map((c) => c * 0.16 * strength);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        const px = x + w * (0.62 + i * 0.16) - d[0] * h * 0.3 * len;
        const py = y + h * (0.25 + j * 0.2) - d[1] * h * 0.2 * len;
        R.drawPaint({ art: this.game.tex.blob, x: px, y: py, rot: ang, size: [w * 0.15 * len, h * 0.16], lit: 0, mul: col });
      }
    }
    blend('alpha');
  }
}
