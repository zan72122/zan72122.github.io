// Sticker designs. Every design draws its silhouette, printed art and optional relief /
// material regions on a 256px canvas. Shapes keep ~10% padding for shadows and blur.
import {
  heart, heartSub, heartPoints, star, circle, ellipse, rrect, rrectSub, cloud, drop, crescent, petal5,
  polyPath, radial, linear, face, roundedPoly,
} from './shapes.js';

const reg = (code, param = 0) => `rgb(${code * 16},${param},0)`;

function seeds(ctx, S, pts, col) {
  ctx.fillStyle = col;
  for (const [x, y, a] of pts) {
    ctx.save();
    ctx.translate(x * S, y * S);
    ctx.rotate(a || 0);
    ctx.beginPath();
    ctx.ellipse(0, 0, S * 0.012, S * 0.022, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function strawberryBody(ctx, S) {
  const c = S / 2;
  ctx.moveTo(c, S * 0.9);
  ctx.bezierCurveTo(S * 0.34, S * 0.82, S * 0.13, S * 0.58, S * 0.16, S * 0.4);
  ctx.bezierCurveTo(S * 0.19, S * 0.24, S * 0.38, S * 0.2, c, S * 0.24);
  ctx.bezierCurveTo(S * 0.62, S * 0.2, S * 0.81, S * 0.24, S * 0.84, S * 0.4);
  ctx.bezierCurveTo(S * 0.87, S * 0.58, S * 0.66, S * 0.82, c, S * 0.9);
  ctx.closePath();
}

function leaves(ctx, S, cx, cy, r, n = 5) {
  for (let i = 0; i < n; i++) {
    const a = -Math.PI / 2 + ((i - (n - 1) / 2) / n) * Math.PI * 1.1;
    ctx.moveTo(cx, cy);
    const tx = cx + Math.cos(a) * r, ty = cy + Math.sin(a) * r * 0.75 + r * 0.1;
    ctx.quadraticCurveTo(cx + Math.cos(a - 0.5) * r * 0.7, cy + Math.sin(a - 0.5) * r * 0.5, tx, ty);
    ctx.quadraticCurveTo(cx + Math.cos(a + 0.5) * r * 0.7, cy + Math.sin(a + 0.5) * r * 0.5, cx, cy);
  }
}

const bowGeom = {
  loops: [
    { cx: 0.29, cy: 0.42, rx: 0.2, ry: 0.15, rot: -0.28 },
    { cx: 0.71, cy: 0.42, rx: 0.2, ry: 0.15, rot: 0.28 },
  ],
  tails: [
    [[0.46, 0.5], [0.38, 0.62], [0.27, 0.82], [0.35, 0.86], [0.42, 0.8], [0.52, 0.56]],
    [[0.54, 0.5], [0.62, 0.62], [0.73, 0.82], [0.65, 0.86], [0.58, 0.8], [0.48, 0.56]],
  ],
  knot: { x: 0.43, y: 0.36, w: 0.14, h: 0.18 },
};

function bowPath(ctx, S) {
  ctx.beginPath();
  for (const l of bowGeom.loops) {
    ctx.moveTo(l.cx * S + l.rx * S, l.cy * S);
    ctx.ellipse(l.cx * S, l.cy * S, l.rx * S, l.ry * S, l.rot, 0, Math.PI * 2);
  }
  for (const t of bowGeom.tails) {
    ctx.moveTo(t[0][0] * S, t[0][1] * S);
    for (let i = 1; i < t.length; i++) ctx.lineTo(t[i][0] * S, t[i][1] * S);
    ctx.closePath();
  }
  const k = bowGeom.knot;
  rrectSub(ctx, k.x * S, k.y * S, k.w * S, k.h * S, S * 0.04);
}

function bunnyPath(ctx, S) {
  ctx.beginPath();
  ctx.ellipse(S * 0.5, S * 0.6, S * 0.31, S * 0.26, 0, 0, Math.PI * 2);
  ctx.moveTo(S * 0.47, S * 0.34);
  ctx.ellipse(S * 0.38, S * 0.27, S * 0.085, S * 0.19, -0.18, 0, Math.PI * 2);
  ctx.moveTo(S * 0.71, S * 0.34);
  ctx.ellipse(S * 0.62, S * 0.27, S * 0.085, S * 0.19, 0.18, 0, Math.PI * 2);
}

function bearPath(ctx, S) {
  ctx.beginPath();
  ctx.ellipse(S * 0.5, S * 0.56, S * 0.33, S * 0.29, 0, 0, Math.PI * 2);
  ctx.moveTo(S * 0.36, S * 0.28);
  ctx.arc(S * 0.26, S * 0.28, S * 0.11, 0, Math.PI * 2);
  ctx.moveTo(S * 0.85, S * 0.28);
  ctx.arc(S * 0.74, S * 0.28, S * 0.11, 0, Math.PI * 2);
}

function catPath(ctx, S) {
  ctx.beginPath();
  ctx.ellipse(S * 0.5, S * 0.58, S * 0.34, S * 0.27, 0, 0, Math.PI * 2);
  roundedPoly(ctx, [[S * 0.2, S * 0.5], [S * 0.22, S * 0.16], [S * 0.44, S * 0.36]], 0.22);
  roundedPoly(ctx, [[S * 0.8, S * 0.5], [S * 0.78, S * 0.16], [S * 0.56, S * 0.36]], 0.22);
}

function puddingPath(ctx, S) {
  ctx.beginPath();
  ctx.moveTo(S * 0.3, S * 0.3);
  ctx.bezierCurveTo(S * 0.36, S * 0.24, S * 0.64, S * 0.24, S * 0.7, S * 0.3);
  ctx.lineTo(S * 0.79, S * 0.74);
  ctx.bezierCurveTo(S * 0.7, S * 0.8, S * 0.3, S * 0.8, S * 0.21, S * 0.74);
  ctx.closePath();
  ctx.moveTo(S * 0.92, S * 0.78);
  ctx.ellipse(S * 0.5, S * 0.78, S * 0.42, S * 0.09, 0, 0, Math.PI * 2);
  // cream + cherry
  ctx.moveTo(S * 0.62, S * 0.24);
  ctx.ellipse(S * 0.5, S * 0.24, S * 0.12, S * 0.08, 0, 0, Math.PI * 2);
  ctx.moveTo(S * 0.58, S * 0.13);
  ctx.arc(S * 0.52, S * 0.13, S * 0.065, 0, Math.PI * 2);
}

function cherryPath(ctx, S) {
  ctx.beginPath();
  ctx.arc(S * 0.34, S * 0.66, S * 0.17, 0, Math.PI * 2);
  ctx.moveTo(S * 0.83, S * 0.62);
  ctx.arc(S * 0.67, S * 0.62, S * 0.16, 0, Math.PI * 2);
  // stems + leaf as thick strokes converted to fills
  ctx.moveTo(S * 0.5, S * 0.18);
  ctx.ellipse(S * 0.62, S * 0.2, S * 0.13, S * 0.06, -0.4, 0, Math.PI * 2);
}

function cherryStems(ctx, S, col, width) {
  ctx.strokeStyle = col;
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(S * 0.36, S * 0.52);
  ctx.quadraticCurveTo(S * 0.4, S * 0.3, S * 0.52, S * 0.2);
  ctx.moveTo(S * 0.66, S * 0.48);
  ctx.quadraticCurveTo(S * 0.62, S * 0.3, S * 0.52, S * 0.2);
  ctx.stroke();
}

function donutPath(ctx, S) {
  ctx.beginPath();
  ctx.arc(S * 0.5, S * 0.5, S * 0.38, 0, Math.PI * 2);
  ctx.moveTo(S * 0.5 + S * 0.11, S * 0.5);
  ctx.arc(S * 0.5, S * 0.5, S * 0.11, 0, Math.PI * 2, true);
}

function iceCreamPath(ctx, S) {
  ctx.beginPath();
  ctx.moveTo(S * 0.31, S * 0.52);
  ctx.lineTo(S * 0.5, S * 0.92);
  ctx.lineTo(S * 0.69, S * 0.52);
  ctx.closePath();
  ctx.moveTo(S * 0.72, S * 0.5);
  ctx.arc(S * 0.5, S * 0.5, S * 0.22, 0, Math.PI * 2);
  ctx.moveTo(S * 0.68, S * 0.3);
  ctx.arc(S * 0.5, S * 0.3, S * 0.18, 0, Math.PI * 2);
  ctx.moveTo(S * 0.56, S * 0.12);
  ctx.arc(S * 0.5, S * 0.12, S * 0.06, 0, Math.PI * 2);
}

function candyPath(ctx, S) {
  ctx.beginPath();
  ctx.arc(S * 0.5, S * 0.5, S * 0.25, 0, Math.PI * 2);
  for (const sx of [-1, 1]) {
    const x0 = S * 0.5 + sx * S * 0.22;
    ctx.moveTo(x0, S * 0.5);
    ctx.lineTo(S * 0.5 + sx * S * 0.43, S * 0.33);
    ctx.quadraticCurveTo(S * 0.5 + sx * S * 0.38, S * 0.5, S * 0.5 + sx * S * 0.43, S * 0.67);
    ctx.closePath();
  }
}

function crownPath(ctx, S) {
  ctx.beginPath();
  const pts = [
    [0.16, 0.74], [0.12, 0.34], [0.32, 0.5], [0.5, 0.24], [0.68, 0.5], [0.88, 0.34], [0.84, 0.74],
  ].map(([x, y]) => [x * S, y * S]);
  roundedPoly(ctx, pts, 0.12);
  for (const [x, y] of [[0.12, 0.31], [0.5, 0.2], [0.88, 0.31]]) {
    ctx.moveTo(x * S + S * 0.05, y * S);
    ctx.arc(x * S, y * S, S * 0.05, 0, Math.PI * 2);
  }
  rrectSub(ctx, S * 0.15, S * 0.68, S * 0.7, S * 0.12, S * 0.04);
}

function butterflyPath(ctx, S) {
  ctx.beginPath();
  for (const sx of [-1, 1]) {
    ctx.moveTo(S * 0.5, S * 0.45);
    ctx.ellipse(S * (0.5 + sx * 0.2), S * 0.36, S * 0.2, S * 0.17, sx * -0.5, 0, Math.PI * 2);
    ctx.moveTo(S * 0.5, S * 0.6);
    ctx.ellipse(S * (0.5 + sx * 0.16), S * 0.64, S * 0.14, S * 0.13, sx * 0.5, 0, Math.PI * 2);
  }
  ctx.moveTo(S * 0.535, S * 0.5);
  ctx.ellipse(S * 0.5, S * 0.5, S * 0.035, S * 0.2, 0, 0, Math.PI * 2);
}

function shellPath(ctx, S) {
  ctx.beginPath();
  const cx = S * 0.5, cy = S * 0.8;
  ctx.moveTo(cx - S * 0.1, cy);
  const n = 7;
  for (let i = 0; i <= n; i++) {
    const a = Math.PI + (i / n) * Math.PI;
    const r = S * 0.4;
    const x = cx + Math.cos(a) * r, y = cy - S * 0.08 + Math.sin(a) * r * 1.05;
    if (i === 0) ctx.lineTo(x, y);
    else {
      const am = Math.PI + ((i - 0.5) / n) * Math.PI;
      ctx.quadraticCurveTo(cx + Math.cos(am) * r * 1.12, cy - S * 0.08 + Math.sin(am) * r * 1.17, x, y);
    }
  }
  ctx.lineTo(cx + S * 0.1, cy);
  ctx.lineTo(cx + S * 0.12, cy + S * 0.08);
  ctx.lineTo(cx - S * 0.12, cy + S * 0.08);
  ctx.closePath();
}

function rainbowPath(ctx, S) {
  ctx.beginPath();
  ctx.arc(S * 0.5, S * 0.68, S * 0.38, Math.PI, 0);
  ctx.lineTo(S * 0.72, S * 0.68);
  ctx.arc(S * 0.5, S * 0.68, S * 0.2, 0, Math.PI, true);
  ctx.closePath();
  cloudSub(ctx, S * 0.22, S * 0.7, S * 0.2);
  cloudSub(ctx, S * 0.78, S * 0.7, S * 0.2);
}

function cloudSub(ctx, cx, cy, w) {
  for (const [x, y, r] of [[-0.35, 0.1, 0.32], [0, -0.12, 0.4], [0.35, 0.08, 0.32], [0, 0.18, 0.3]]) {
    ctx.moveTo(cx + x * w + r * w, cy + y * w);
    ctx.arc(cx + x * w, cy + y * w, r * w, 0, Math.PI * 2);
  }
}

function macaronPath(ctx, S) {
  ctx.beginPath();
  ellipseSub(ctx, S * 0.5, S * 0.38, S * 0.37, S * 0.17);
  rrectSub(ctx, S * 0.15, S * 0.44, S * 0.7, S * 0.12, S * 0.05);
  ellipseSub(ctx, S * 0.5, S * 0.62, S * 0.37, S * 0.17);
}

function ellipseSub(ctx, cx, cy, rx, ry) {
  ctx.moveTo(cx + rx, cy);
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
}

function cloverPath(ctx, S) {
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    ctx.save();
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const cx = S * 0.5 + Math.cos(a) * S * 0.15, cy = S * 0.44 + Math.sin(a) * S * 0.15;
    // small heart pointing to centre
    const pts = 24;
    for (let k = 0; k <= pts; k++) {
      const t = (k / pts) * Math.PI * 2;
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      const rr = S * 0.0096;
      const lx = x * rr, ly = (y + 2) * rr;
      const rot = a + Math.PI / 2;
      const px = cx + lx * Math.cos(rot) - ly * Math.sin(rot);
      const py = cy + lx * Math.sin(rot) + ly * Math.cos(rot);
      if (k === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.restore();
  }
  ctx.moveTo(S * 0.5, S * 0.5);
  ctx.lineTo(S * 0.53, S * 0.5);
  ctx.quadraticCurveTo(S * 0.56, S * 0.75, S * 0.66, S * 0.9);
  ctx.lineTo(S * 0.6, S * 0.92);
  ctx.quadraticCurveTo(S * 0.5, S * 0.75, S * 0.47, S * 0.5);
  ctx.closePath();
}

function polyRound(cx, cy, r, n, rot = 0, sy = 1) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = rot + (i / n) * Math.PI * 2;
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r * sy]);
  }
  return pts;
}

function pearPoints(n = 18) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const r = 0.3 * (1 - 0.32 * Math.sin(t)) ;
    pts.push([0.5 + Math.cos(t) * r * 0.85, 0.53 + Math.sin(t) * r * 1.15]);
  }
  return pts;
}

export const DESIGNS = {
  strawberry: {
    mat: 'resin', dome: 0.14, rim: 0.16, size: 1.0,
    shape(ctx, S) {
      ctx.beginPath();
      strawberryBody(ctx, S);
      leaves(ctx, S, S * 0.5, S * 0.26, S * 0.2);
      ctx.moveTo(S * 0.5, S * 0.1);
      ctx.arc(S * 0.5, S * 0.12, S * 0.035, 0, Math.PI * 2);
      ctx.fill();
    },
    art(ctx, S) {
      ctx.beginPath();
      strawberryBody(ctx, S);
      ctx.fillStyle = radial(ctx, S * 0.42, S * 0.42, S * 0.05, S * 0.5, [[0, '#ff6f86'], [0.6, '#f23d5c'], [1, '#d81f45']]);
      ctx.fill();
      const pts = [];
      for (let j = 0; j < 6; j++) for (let i = 0; i < 6; i++) {
        const x = 0.24 + i * 0.105 + (j % 2) * 0.05, y = 0.36 + j * 0.085;
        const dx = (x - 0.5) / (0.36 - (y - 0.3) * 0.5);
        if (Math.abs(dx) < 0.85 && y < 0.82 && !(y > 0.44 && y < 0.62 && Math.abs(x - 0.5) < 0.16)) pts.push([x, y, dx * 0.4]);
      }
      seeds(ctx, S, pts, '#ffe68a');
      ctx.beginPath();
      leaves(ctx, S, S * 0.5, S * 0.26, S * 0.2);
      ctx.fillStyle = '#5fc46d';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(S * 0.5, S * 0.12, S * 0.035, 0, Math.PI * 2);
      ctx.fillStyle = '#4fae5e';
      ctx.fill();
      face(ctx, S * 0.5, S * 0.52, S * 0.36, { eyeR: 0.07 });
    },
    relief(ctx, S) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, S, S);
      ctx.beginPath();
      leaves(ctx, S, S * 0.5, S * 0.26, S * 0.2);
      ctx.fillStyle = '#888';
      ctx.fill();
    },
    reliefScale: 0.12,
  },

  heartPink: {
    mat: 'jelly', dome: 0.16, rim: 0.2, size: 0.95, tint: [1, 0.5, 0.68], param: [1.15, 0.06, 1.0, 1.0],
    shape(ctx, S) { heart(ctx, S * 0.5, S * 0.52, S * 0.8, S * 0.72); ctx.fill(); },
    art(ctx, S) {
      heart(ctx, S * 0.5, S * 0.52, S * 0.8, S * 0.72);
      ctx.fillStyle = radial(ctx, S * 0.5, S * 0.5, 0, S * 0.45, [[0, '#ff8fb5'], [1, '#ff9fc2']]);
      ctx.fill();
    },
  },

  heartGlitter: {
    mat: 'liquid', dome: 0.15, rim: 0.2, size: 1.0, tint: [1.0, 0.78, 0.9], param: [0.5, 0.06, 1.0, 0],
    glitter: { count: 140, hues: [0.0, 0.08, 0.95, 0.5], sequins: 'heart' },
    shape(ctx, S) { heart(ctx, S * 0.5, S * 0.52, S * 0.82, S * 0.74); ctx.fill(); },
    art(ctx, S) {
      heart(ctx, S * 0.5, S * 0.52, S * 0.82, S * 0.74);
      ctx.fillStyle = linear(ctx, 0, S * 0.2, 0, S * 0.9, [[0, '#ffe3ef'], [1, '#ffc6dc']]);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      for (let i = 0; i < 9; i++) {
        const a = i * 2.4, r = 0.12 + (i % 3) * 0.08;
        ctx.beginPath();
        ctx.arc(S * (0.5 + Math.cos(a) * r), S * (0.5 + Math.sin(a) * r * 0.8), S * 0.012, 0, Math.PI * 2);
        ctx.fill();
      }
    },
  },

  heartClear: {
    mat: 'clear', dome: 0.16, rim: 0.22, size: 0.85, param: [0.3, 0.08, 1.2, 0.5],
    shape(ctx, S) { heart(ctx, S * 0.5, S * 0.52, S * 0.78, S * 0.7); ctx.fill(); },
    art(ctx, S) {
      heart(ctx, S * 0.5, S * 0.52, S * 0.78, S * 0.7);
      ctx.fillStyle = '#ffc9dc';
      ctx.fill();
    },
  },

  ribbon: {
    mat: 'satin', dome: 0.12, rim: 0.1, crown: 0.35, size: 1.1, border: 0.0,
    shape(ctx, S) { bowPath(ctx, S); ctx.fill(); },
    art(ctx, S, v) {
      const c = v.color || ['#ff9ec2', '#f27ba6'];
      bowPath(ctx, S);
      ctx.fillStyle = c[0];
      ctx.fill();
      const k = bowGeom.knot;
      rrect(ctx, k.x * S, k.y * S, k.w * S, k.h * S, S * 0.04);
      ctx.fillStyle = c[1];
      ctx.fill();
    },
    relief(ctx, S) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, S, S);
      for (const l of bowGeom.loops) {
        const gx = l.cx * S + (l.cx < 0.5 ? -1 : 1) * S * 0.05;
        ctx.fillStyle = radial(ctx, gx, l.cy * S, 0, l.rx * S * 1.1, [[0, '#ffffff'], [0.65, '#999999'], [1, '#000000']]);
        ellipse(ctx, l.cx * S, l.cy * S, l.rx * S, l.ry * S, l.rot);
        ctx.fill();
      }
      ctx.strokeStyle = 'rgba(0,0,0,0.85)';
      ctx.lineWidth = S * 0.018;
      ctx.lineCap = 'round';
      for (const sx of [-1, 1]) {
        for (const dy of [-0.06, 0.0, 0.07]) {
          ctx.beginPath();
          ctx.moveTo(S * (0.5 + sx * 0.08), S * (0.44 + dy * 0.3));
          ctx.quadraticCurveTo(S * (0.5 + sx * 0.17), S * (0.43 + dy), S * (0.5 + sx * 0.26), S * (0.42 + dy * 1.3));
          ctx.stroke();
        }
      }
      const k = bowGeom.knot;
      ctx.fillStyle = radial(ctx, (k.x + k.w / 2) * S, (k.y + k.h / 2) * S, 0, k.h * S * 0.7, [[0, '#ffffff'], [1, '#666666']]);
      rrect(ctx, k.x * S, k.y * S, k.w * S, k.h * S, S * 0.04);
      ctx.fill();
      for (const t of bowGeom.tails) {
        ctx.fillStyle = '#7a7a7a';
        polyPath(ctx, t.map(([x, y]) => [x * S, y * S]));
        ctx.fill();
      }
    },
    reliefScale: 0.9,
    cavityAO: 4.0,
    ao(ctx, S) {
      const k = bowGeom.knot;
      ctx.fillStyle = radial(ctx, S * 0.5, S * 0.45, S * 0.06, S * 0.2, [[0, 'rgba(120,120,120,1)'], [1, 'rgba(255,255,255,1)']]);
      ctx.fillRect(0, 0, S, S);
      ctx.fillStyle = '#fff';
      rrect(ctx, k.x * S + 2, k.y * S + 2, k.w * S - 4, k.h * S - 4, S * 0.03);
      ctx.fill();
    },
    fiber(u, v) {
      const k = bowGeom.knot;
      if (u > k.x && u < k.x + k.w && v > k.y && v < k.y + k.h) return Math.PI / 2;
      if (v > 0.52) {
        const left = u < 0.5;
        return left ? Math.atan2(0.3, -0.17) : Math.atan2(0.3, 0.17);
      }
      const l = u < 0.5 ? bowGeom.loops[0] : bowGeom.loops[1];
      const dx = (u - (u < 0.5 ? 0.5 : 0.5)) , dy = v - 0.44;
      // fibres fan out from the knot along the loop
      void l;
      return Math.atan2(dy * 0.6, dx) ;
    },
  },

  pearl: {
    mat: 'pearl', dome: 0.32, rim: 1.0, crown: 0.0, size: 0.62, border: 0.0,
    shape(ctx, S) { circle(ctx, S * 0.5, S * 0.5, S * 0.38); ctx.fill(); },
    art(ctx, S, v) {
      circle(ctx, S * 0.5, S * 0.5, S * 0.38);
      ctx.fillStyle = radial(ctx, S * 0.45, S * 0.42, 0, S * 0.4, [[0, '#fffdfb'], [1, v.edge || '#f6e7ee']]);
      ctx.fill();
    },
  },

  shell: {
    mat: 'pearl', dome: 0.12, rim: 0.25, size: 0.95, border: 0.0,
    shape(ctx, S) { shellPath(ctx, S); ctx.fill(); },
    art(ctx, S) {
      shellPath(ctx, S);
      ctx.fillStyle = radial(ctx, S * 0.5, S * 0.75, 0, S * 0.5, [[0, '#fff6f4'], [1, '#ffd7e1']]);
      ctx.fill();
    },
    relief(ctx, S) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, S, S);
      ctx.save();
      shellPath(ctx, S);
      ctx.clip();
      for (let i = 0; i < 8; i++) {
        const a = Math.PI + ((i + 0.5) / 8) * Math.PI;
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = S * 0.05;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(S * 0.5, S * 0.78);
        ctx.lineTo(S * 0.5 + Math.cos(a) * S * 0.45, S * 0.72 + Math.sin(a) * S * 0.47);
        ctx.stroke();
      }
      ctx.restore();
    },
    reliefScale: 0.35,
  },

  bunny: {
    mat: 'fur', dome: 0.12, rim: 0.2, size: 1.05, border: 0.0,
    shape(ctx, S) { bunnyPath(ctx, S); ctx.fill(); },
    art(ctx, S, v) {
      const fur = v.fur || '#fbf7f4';
      bunnyPath(ctx, S);
      ctx.fillStyle = fur;
      ctx.fill();
      ctx.fillStyle = '#ffb3c8';
      ellipse(ctx, S * 0.38, S * 0.28, S * 0.04, S * 0.13, -0.18); ctx.fill();
      ellipse(ctx, S * 0.62, S * 0.28, S * 0.04, S * 0.13, 0.18); ctx.fill();
      ctx.fillStyle = '#2b2026';
      ellipse(ctx, S * 0.39, S * 0.58, S * 0.035, S * 0.042); ctx.fill();
      ellipse(ctx, S * 0.61, S * 0.58, S * 0.035, S * 0.042); ctx.fill();
      ctx.fillStyle = '#ff8fab';
      ellipse(ctx, S * 0.5, S * 0.645, S * 0.028, S * 0.02); ctx.fill();
      ctx.fillStyle = 'rgba(255,140,170,0.45)';
      ellipse(ctx, S * 0.31, S * 0.66, S * 0.05, S * 0.03); ctx.fill();
      ellipse(ctx, S * 0.69, S * 0.66, S * 0.05, S * 0.03); ctx.fill();
      ctx.strokeStyle = '#d58a9c';
      ctx.lineWidth = S * 0.012;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(S * 0.5, S * 0.665);
      ctx.quadraticCurveTo(S * 0.47, S * 0.7, S * 0.45, S * 0.69);
      ctx.moveTo(S * 0.5, S * 0.665);
      ctx.quadraticCurveTo(S * 0.53, S * 0.7, S * 0.55, S * 0.69);
      ctx.stroke();
    },
    regions(ctx, S) {
      ctx.fillStyle = reg(4);
      ellipse(ctx, S * 0.38, S * 0.28, S * 0.04, S * 0.13, -0.18); ctx.fill();
      ellipse(ctx, S * 0.62, S * 0.28, S * 0.04, S * 0.13, 0.18); ctx.fill();
      ctx.fillStyle = reg(3);
      ellipse(ctx, S * 0.39, S * 0.58, S * 0.037, S * 0.044); ctx.fill();
      ellipse(ctx, S * 0.61, S * 0.58, S * 0.037, S * 0.044); ctx.fill();
      ellipse(ctx, S * 0.5, S * 0.645, S * 0.03, S * 0.022); ctx.fill();
    },
    relief(ctx, S) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, S, S);
      ctx.fillStyle = radial(ctx, S * 0.5, S * 0.58, 0, S * 0.3, [[0, '#ffffff'], [1, '#202020']]);
      ellipse(ctx, S * 0.5, S * 0.6, S * 0.3, S * 0.25); ctx.fill();
      ctx.fillStyle = '#555';
      ellipse(ctx, S * 0.39, S * 0.58, S * 0.04, S * 0.048); ctx.fill();
      ellipse(ctx, S * 0.61, S * 0.58, S * 0.04, S * 0.048); ctx.fill();
    },
    reliefScale: 0.45,
  },

  bear: {
    mat: 'fur', dome: 0.12, rim: 0.22, size: 1.0, border: 0.0,
    shape(ctx, S) { bearPath(ctx, S); ctx.fill(); },
    art(ctx, S, v) {
      bearPath(ctx, S);
      ctx.fillStyle = v.fur || '#c98d62';
      ctx.fill();
      ctx.fillStyle = v.inner || '#f3c9a6';
      circle(ctx, S * 0.26, S * 0.28, S * 0.055); ctx.fill();
      circle(ctx, S * 0.74, S * 0.28, S * 0.055); ctx.fill();
      ellipse(ctx, S * 0.5, S * 0.66, S * 0.12, S * 0.09); ctx.fill();
      ctx.fillStyle = '#2b2026';
      circle(ctx, S * 0.38, S * 0.53, S * 0.032); ctx.fill();
      circle(ctx, S * 0.62, S * 0.53, S * 0.032); ctx.fill();
      ellipse(ctx, S * 0.5, S * 0.625, S * 0.04, S * 0.028); ctx.fill();
      ctx.fillStyle = 'rgba(255,130,150,0.5)';
      ellipse(ctx, S * 0.3, S * 0.64, S * 0.045, S * 0.028); ctx.fill();
      ellipse(ctx, S * 0.7, S * 0.64, S * 0.045, S * 0.028); ctx.fill();
    },
    regions(ctx, S) {
      ctx.fillStyle = reg(4);
      circle(ctx, S * 0.26, S * 0.28, S * 0.055); ctx.fill();
      circle(ctx, S * 0.74, S * 0.28, S * 0.055); ctx.fill();
      ctx.fillStyle = reg(3);
      circle(ctx, S * 0.38, S * 0.53, S * 0.034); ctx.fill();
      circle(ctx, S * 0.62, S * 0.53, S * 0.034); ctx.fill();
      ellipse(ctx, S * 0.5, S * 0.625, S * 0.042, S * 0.03); ctx.fill();
    },
    relief(ctx, S) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, S, S);
      ctx.fillStyle = radial(ctx, S * 0.5, S * 0.66, 0, S * 0.13, [[0, '#ffffff'], [1, '#000000']]);
      ellipse(ctx, S * 0.5, S * 0.66, S * 0.13, S * 0.1); ctx.fill();
    },
    reliefScale: 0.35,
  },

  pudding: {
    mat: 'jelly', dome: 0.14, rim: 0.16, size: 1.05, border: 0.03, param: [0.8, 0.05, 1.0, 1.0],
    shape(ctx, S) { puddingPath(ctx, S); ctx.fill(); },
    art(ctx, S) {
      ellipse(ctx, S * 0.5, S * 0.78, S * 0.42, S * 0.09);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(S * 0.3, S * 0.3);
      ctx.bezierCurveTo(S * 0.36, S * 0.24, S * 0.64, S * 0.24, S * 0.7, S * 0.3);
      ctx.lineTo(S * 0.79, S * 0.74);
      ctx.bezierCurveTo(S * 0.7, S * 0.8, S * 0.3, S * 0.8, S * 0.21, S * 0.74);
      ctx.closePath();
      ctx.fillStyle = '#ffd866';
      ctx.fill();
      ctx.save();
      ctx.clip();
      ctx.fillStyle = '#c0692b';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(S, 0);
      ctx.lineTo(S, S * 0.36);
      for (let i = 0; i <= 6; i++) {
        const x = S * (0.8 - i * 0.1);
        ctx.quadraticCurveTo(x + S * 0.05, S * (0.44 + (i % 2) * 0.03), x, S * 0.37);
      }
      ctx.lineTo(0, S * 0.36);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ellipse(ctx, S * 0.5, S * 0.24, S * 0.12, S * 0.08);
      ctx.fillStyle = '#fffaf5';
      ctx.fill();
      circle(ctx, S * 0.52, S * 0.13, S * 0.065);
      ctx.fillStyle = '#ff3d5e';
      ctx.fill();
      face(ctx, S * 0.5, S * 0.58, S * 0.36, { eyeR: 0.075 });
    },
    regions(ctx, S) {
      ctx.fillStyle = reg(5);
      ellipse(ctx, S * 0.5, S * 0.78, S * 0.42, S * 0.09); ctx.fill();
      ellipse(ctx, S * 0.5, S * 0.24, S * 0.12, S * 0.08); ctx.fill();
      // face printed opaque
      for (const sx of [-1, 1]) { ellipse(ctx, S * 0.5 + sx * S * 0.0756, S * 0.58, S * 0.03, S * 0.035); ctx.fill(); }
    },
    relief(ctx, S) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, S, S);
      ctx.fillStyle = '#fff';
      ellipse(ctx, S * 0.5, S * 0.24, S * 0.12, S * 0.08); ctx.fill();
      circle(ctx, S * 0.52, S * 0.13, S * 0.065); ctx.fill();
    },
    reliefScale: 0.25,
  },

  moon: {
    mat: 'resin', dome: 0.14, rim: 0.2, size: 1.0,
    shape(ctx, S) { crescent(ctx, S * 0.48, S * 0.5, S * 0.38, 0.42, -0.6); ctx.fill(); },
    art(ctx, S) {
      crescent(ctx, S * 0.48, S * 0.5, S * 0.38, 0.42, -0.6);
      ctx.fillStyle = linear(ctx, S * 0.2, S * 0.2, S * 0.7, S * 0.9, [[0, '#ffe58f'], [1, '#f2b84b']]);
      ctx.fill();
      face(ctx, S * 0.3, S * 0.56, S * 0.3, { sleepy: true, gap: 0.5, eyeR: 0.09 });
    },
    regions(ctx, S) {
      ctx.fillStyle = reg(1);
      crescent(ctx, S * 0.48, S * 0.5, S * 0.38, 0.42, -0.6);
      ctx.fill();
      ctx.fillStyle = reg(0);
      ctx.fillRect(S * 0.16, S * 0.5, S * 0.28, S * 0.14);
    },
  },

  gemHeart: {
    mat: 'holo', dome: 0.13, size: 0.95, border: 0.0,
    gem: { outline: heartPoints(0.5, 0.52, 0.8, 0.74, 20).map(([x, y]) => [x, y]), table: 0.45, height: 0.14 },
    shape(ctx, S) {
      const p = heartPoints(0.5, 0.52, 0.8, 0.74, 20).map(([x, y]) => [x * S, y * S]);
      polyPath(ctx, p);
      ctx.fill();
    },
    art(ctx, S, v) {
      ctx.fillStyle = v.base || '#f6c8e4';
      ctx.fillRect(0, 0, S, S);
    },
  },

  gemRound: {
    mat: 'holo', dome: 0.13, size: 0.85, border: 0.0,
    gem: { outline: polyRound(0.5, 0.5, 0.39, 16, 0.1963), table: 0.48, height: 0.16 },
    shape(ctx, S) { polyPath(ctx, polyRound(S * 0.5, S * 0.5, S * 0.39, 16, 0.1963)); ctx.fill(); },
    art(ctx, S, v) { ctx.fillStyle = v.base || '#d8d0ff'; ctx.fillRect(0, 0, S, S); },
  },

  gemDrop: {
    mat: 'holo', dome: 0.13, size: 0.85, border: 0.0,
    gem: { outline: pearPoints(18), table: 0.42, height: 0.16 },
    shape(ctx, S) { polyPath(ctx, pearPoints(18).map(([x, y]) => [x * S, y * S])); ctx.fill(); },
    art(ctx, S, v) { ctx.fillStyle = v.base || '#c9f0ff'; ctx.fillRect(0, 0, S, S); },
  },

  starBlue: {
    mat: 'clear', dome: 0.16, rim: 0.2, size: 0.95, param: [1.0, 0.08, 1.2, 0.7],
    shape(ctx, S) { star(ctx, S * 0.5, S * 0.53, S * 0.42, S * 0.21, 5, 0.22); ctx.fill(); },
    art(ctx, S) {
      star(ctx, S * 0.5, S * 0.53, S * 0.42, S * 0.21, 5, 0.22);
      ctx.fillStyle = '#7fd0ff';
      ctx.fill();
    },
  },

  drop: {
    mat: 'clear', dome: 0.2, rim: 0.3, size: 0.75, param: [0.12, 0.1, 1.3, 0.3],
    shape(ctx, S) { drop(ctx, S * 0.5, S * 0.52, S * 0.62, S * 0.8); ctx.fill(); },
    art(ctx, S) { drop(ctx, S * 0.5, S * 0.52, S * 0.62, S * 0.8); ctx.fillStyle = '#d9f6ff'; ctx.fill(); },
  },

  cloud: {
    mat: 'jelly', dome: 0.14, rim: 0.24, size: 1.05, param: [2.6, 0.04, 0.9, 1.3],
    shape(ctx, S) { cloud(ctx, S * 0.5, S * 0.52, S * 0.78, S * 0.6); ctx.fill(); },
    art(ctx, S) {
      cloud(ctx, S * 0.5, S * 0.52, S * 0.78, S * 0.6);
      ctx.fillStyle = '#eef6ff';
      ctx.fill();
      face(ctx, S * 0.5, S * 0.56, S * 0.34, { eyeR: 0.07, blushCol: 'rgba(255,150,180,0.7)' });
    },
    regions(ctx, S) {
      ctx.fillStyle = reg(5);
      for (const sx of [-1, 1]) { ellipse(ctx, S * 0.5 + sx * S * 0.0714, S * 0.56, S * 0.028, S * 0.032); ctx.fill(); }
      ctx.fillRect(S * 0.47, S * 0.59, S * 0.06, S * 0.03);
    },
  },

  rainbow: {
    mat: 'resin', dome: 0.13, rim: 0.12, size: 1.1,
    shape(ctx, S) { rainbowPath(ctx, S); ctx.fill(); },
    art(ctx, S) {
      const cols = ['#ff7b9c', '#ffb36b', '#ffe37a', '#8fe39a', '#7cc8ff', '#b79cff'];
      for (let i = 0; i < cols.length; i++) {
        ctx.beginPath();
        ctx.arc(S * 0.5, S * 0.68, S * (0.38 - i * 0.03), Math.PI, 0);
        ctx.arc(S * 0.5, S * 0.68, S * (0.35 - i * 0.03), 0, Math.PI, true);
        ctx.closePath();
        ctx.fillStyle = cols[i];
        ctx.fill();
      }
      ctx.beginPath();
      cloudSub(ctx, S * 0.22, S * 0.7, S * 0.2);
      cloudSub(ctx, S * 0.78, S * 0.7, S * 0.2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    },
  },

  cherry: {
    mat: 'resin', dome: 0.14, rim: 0.2, size: 0.95,
    shape(ctx, S) {
      cherryPath(ctx, S);
      ctx.fill();
      cherryStems(ctx, S, '#fff', S * 0.07);
    },
    art(ctx, S) {
      cherryStems(ctx, S, '#7a4a2a', S * 0.03);
      ctx.fillStyle = '#58c26a';
      ellipse(ctx, S * 0.62, S * 0.2, S * 0.13, S * 0.06, -0.4); ctx.fill();
      for (const [x, y, r] of [[0.34, 0.66, 0.17], [0.67, 0.62, 0.16]]) {
        circle(ctx, S * x, S * y, S * r);
        ctx.fillStyle = radial(ctx, S * (x - 0.05), S * (y - 0.05), 0, S * r, [[0, '#ff6b81'], [1, '#d6153c']]);
        ctx.fill();
      }
      face(ctx, S * 0.34, S * 0.68, S * 0.22, { eyeR: 0.09 });
    },
  },

  donut: {
    mat: 'resin', dome: 0.13, rim: 0.12, crown: 0.0, size: 1.0,
    shape(ctx, S) { donutPath(ctx, S); ctx.fill('evenodd'); },
    art(ctx, S, v) {
      donutPath(ctx, S);
      ctx.fillStyle = '#e9b27a';
      ctx.fill('evenodd');
      ctx.beginPath();
      for (let i = 0; i <= 24; i++) {
        const a = (i / 24) * Math.PI * 2;
        const r = S * (0.33 + (i % 2) * 0.025);
        const x = S * 0.5 + Math.cos(a) * r, y = S * 0.5 + Math.sin(a) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.moveTo(S * 0.5 + S * 0.14, S * 0.5);
      ctx.arc(S * 0.5, S * 0.5, S * 0.14, 0, Math.PI * 2, true);
      ctx.fillStyle = v.icing || '#ff9ec4';
      ctx.fill('evenodd');
      const sp = ['#ffffff', '#7cd6ff', '#ffe066', '#9be38f', '#c59bff'];
      for (let i = 0; i < 22; i++) {
        const a = i * 2.39996, r = S * (0.19 + ((i * 7) % 11) / 11 * 0.12);
        ctx.save();
        ctx.translate(S * 0.5 + Math.cos(a) * r, S * 0.5 + Math.sin(a) * r);
        ctx.rotate(a * 3);
        ctx.fillStyle = sp[i % sp.length];
        rrect(ctx, -S * 0.022, -S * 0.007, S * 0.044, S * 0.014, S * 0.007);
        ctx.fill();
        ctx.restore();
      }
    },
  },

  iceCream: {
    mat: 'resin', dome: 0.14, rim: 0.16, size: 1.05,
    shape(ctx, S) { iceCreamPath(ctx, S); ctx.fill(); },
    art(ctx, S) {
      ctx.beginPath();
      ctx.moveTo(S * 0.31, S * 0.52);
      ctx.lineTo(S * 0.5, S * 0.92);
      ctx.lineTo(S * 0.69, S * 0.52);
      ctx.closePath();
      ctx.fillStyle = '#f0b86e';
      ctx.fill();
      ctx.save();
      ctx.clip();
      ctx.strokeStyle = '#d18d45';
      ctx.lineWidth = S * 0.012;
      for (let i = -6; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(S * (0.5 + i * 0.07), S * 0.5);
        ctx.lineTo(S * (0.5 + i * 0.07 + 0.4), S * 0.95);
        ctx.moveTo(S * (0.5 + i * 0.07), S * 0.5);
        ctx.lineTo(S * (0.5 + i * 0.07 - 0.4), S * 0.95);
        ctx.stroke();
      }
      ctx.restore();
      circle(ctx, S * 0.5, S * 0.5, S * 0.22);
      ctx.fillStyle = '#9ee6c4';
      ctx.fill();
      circle(ctx, S * 0.5, S * 0.3, S * 0.18);
      ctx.fillStyle = '#ffa8c6';
      ctx.fill();
      circle(ctx, S * 0.5, S * 0.12, S * 0.06);
      ctx.fillStyle = '#ff3d5e';
      ctx.fill();
      face(ctx, S * 0.5, S * 0.32, S * 0.26, { eyeR: 0.08 });
    },
  },

  macaron: {
    mat: 'resin', dome: 0.13, rim: 0.15, size: 0.95,
    shape(ctx, S) { macaronPath(ctx, S); ctx.fill(); },
    art(ctx, S, v) {
      const c = v.color || ['#c8b5ff', '#fff4f9'];
      ellipse(ctx, S * 0.5, S * 0.38, S * 0.37, S * 0.17); ctx.fillStyle = c[0]; ctx.fill();
      ellipse(ctx, S * 0.5, S * 0.62, S * 0.37, S * 0.17); ctx.fill();
      rrect(ctx, S * 0.15, S * 0.44, S * 0.7, S * 0.12, S * 0.05); ctx.fillStyle = c[1]; ctx.fill();
      face(ctx, S * 0.5, S * 0.36, S * 0.3, { eyeR: 0.07 });
    },
  },

  candy: {
    mat: 'liquid', dome: 0.15, rim: 0.18, size: 1.0, tint: [1.0, 0.95, 0.7], param: [0.6, 0.06, 1.0, 0],
    glitter: { count: 120, hues: [0.12, 0.15, 0.55, 0.0], sequins: 'star' },
    shape(ctx, S) { candyPath(ctx, S); ctx.fill(); },
    art(ctx, S) {
      candyPath(ctx, S);
      ctx.fillStyle = '#ffe9a8';
      ctx.fill();
      ctx.fillStyle = '#ffd36b';
      for (const sx of [-1, 1]) {
        ctx.beginPath();
        ctx.moveTo(S * 0.5 + sx * S * 0.22, S * 0.5);
        ctx.lineTo(S * 0.5 + sx * S * 0.43, S * 0.33);
        ctx.quadraticCurveTo(S * 0.5 + sx * S * 0.38, S * 0.5, S * 0.5 + sx * S * 0.43, S * 0.67);
        ctx.closePath();
        ctx.fill();
      }
      circle(ctx, S * 0.5, S * 0.5, S * 0.25);
      ctx.fillStyle = '#fff6d6';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,170,100,0.5)';
      ctx.lineWidth = S * 0.03;
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.arc(S * 0.5, S * 0.5, S * 0.16, i * 1.047, i * 1.047 + 0.5);
        ctx.stroke();
      }
    },
  },

  glitterStar: {
    mat: 'liquid', dome: 0.15, rim: 0.2, size: 1.0, tint: [0.75, 0.88, 1.0], param: [0.55, 0.06, 1.0, 0],
    glitter: { count: 150, hues: [0.55, 0.6, 0.12, 0.75], sequins: 'star' },
    shape(ctx, S) { star(ctx, S * 0.5, S * 0.53, S * 0.42, S * 0.22, 5, 0.25); ctx.fill(); },
    art(ctx, S) {
      star(ctx, S * 0.5, S * 0.53, S * 0.42, S * 0.22, 5, 0.25);
      ctx.fillStyle = linear(ctx, 0, S * 0.1, 0, S * 0.9, [[0, '#d9efff'], [1, '#b5dcff']]);
      ctx.fill();
    },
  },

  kitty: {
    mat: 'resin', dome: 0.13, rim: 0.18, size: 1.0,
    shape(ctx, S) { catPath(ctx, S); ctx.fill(); },
    art(ctx, S) {
      catPath(ctx, S);
      ctx.fillStyle = '#fff8ef';
      ctx.fill();
      ctx.fillStyle = '#ffc0d2';
      polyPath(ctx, [[S * 0.25, S * 0.42], [S * 0.26, S * 0.24], [S * 0.39, S * 0.36]]); ctx.fill();
      polyPath(ctx, [[S * 0.75, S * 0.42], [S * 0.74, S * 0.24], [S * 0.61, S * 0.36]]); ctx.fill();
      ctx.fillStyle = '#ffd08a';
      ellipse(ctx, S * 0.66, S * 0.42, S * 0.1, S * 0.07, 0.3); ctx.fill();
      face(ctx, S * 0.5, S * 0.58, S * 0.4, { eyeR: 0.07 });
      ctx.strokeStyle = '#8a6a70';
      ctx.lineWidth = S * 0.01;
      for (const sx of [-1, 1]) {
        for (const dy of [-0.02, 0.02]) {
          ctx.beginPath();
          ctx.moveTo(S * (0.5 + sx * 0.2), S * (0.64 + dy));
          ctx.lineTo(S * (0.5 + sx * 0.32), S * (0.62 + dy * 2.5));
          ctx.stroke();
        }
      }
      ctx.fillStyle = '#ff7fa0';
      rrect(ctx, S * 0.62, S * 0.3, S * 0.12, S * 0.06, S * 0.03); ctx.fill();
    },
  },

  clover: {
    mat: 'jelly', dome: 0.14, rim: 0.12, size: 0.95, param: [2.2, 0.06, 1.0, 1.2],
    shape(ctx, S) { cloverPath(ctx, S); ctx.fill(); },
    art(ctx, S) { cloverPath(ctx, S); ctx.fillStyle = '#86e6a0'; ctx.fill(); },
  },

  sakura: {
    mat: 'jelly', dome: 0.13, rim: 0.18, size: 0.95, param: [0.9, 0.06, 1.0, 1.0],
    shape(ctx, S) { petal5(ctx, S * 0.5, S * 0.52, S * 0.42); ctx.fill(); circle(ctx, S * 0.5, S * 0.52, S * 0.16); ctx.fill(); },
    art(ctx, S) {
      petal5(ctx, S * 0.5, S * 0.52, S * 0.42);
      ctx.fillStyle = '#ffb1cb';
      ctx.fill();
      circle(ctx, S * 0.5, S * 0.52, S * 0.16);
      ctx.fill();
      circle(ctx, S * 0.5, S * 0.52, S * 0.08);
      ctx.fillStyle = '#ffe680';
      ctx.fill();
    },
    regions(ctx, S) { ctx.fillStyle = reg(5); circle(ctx, S * 0.5, S * 0.52, S * 0.08); ctx.fill(); },
  },

  crown: {
    mat: 'resin', dome: 0.12, rim: 0.12, size: 1.0,
    shape(ctx, S) { crownPath(ctx, S); ctx.fill(); },
    art(ctx, S) {
      crownPath(ctx, S);
      ctx.fillStyle = '#ffd25e';
      ctx.fill();
      const gems = [[0.3, 0.74, '#ff6fa8'], [0.5, 0.74, '#7fd6ff'], [0.7, 0.74, '#b48cff'], [0.5, 0.48, '#ff6fa8']];
      for (const [x, y, c] of gems) { circle(ctx, S * x, S * y, S * 0.045); ctx.fillStyle = c; ctx.fill(); }
    },
    regions(ctx, S) {
      ctx.fillStyle = reg(1);
      crownPath(ctx, S);
      ctx.fill();
      ctx.fillStyle = reg(3);
      for (const [x, y] of [[0.3, 0.74], [0.5, 0.74], [0.7, 0.74], [0.5, 0.48]]) { circle(ctx, S * x, S * y, S * 0.047); ctx.fill(); }
      ctx.fillStyle = reg(7);
      for (const [x, y] of [[0.12, 0.31], [0.5, 0.2], [0.88, 0.31]]) { circle(ctx, S * x, S * y, S * 0.05); ctx.fill(); }
    },
    relief(ctx, S) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, S, S);
      for (const [x, y] of [[0.3, 0.74], [0.5, 0.74], [0.7, 0.74], [0.5, 0.48], [0.12, 0.31], [0.5, 0.2], [0.88, 0.31]]) {
        ctx.fillStyle = radial(ctx, S * x, S * y, 0, S * 0.05, [[0, '#fff'], [1, '#000']]);
        circle(ctx, S * x, S * y, S * 0.05);
        ctx.fill();
      }
    },
    reliefScale: 0.3,
  },

  butterfly: {
    mat: 'resin', dome: 0.12, rim: 0.14, size: 1.05,
    shape(ctx, S) { butterflyPath(ctx, S); ctx.fill(); },
    art(ctx, S) {
      butterflyPath(ctx, S);
      ctx.fillStyle = '#e8d4ff';
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      for (const sx of [-1, 1]) {
        circle(ctx, S * (0.5 + sx * 0.24), S * 0.34, S * 0.05); ctx.fill();
        circle(ctx, S * (0.5 + sx * 0.18), S * 0.66, S * 0.035); ctx.fill();
      }
      ellipse(ctx, S * 0.5, S * 0.5, S * 0.03, S * 0.19);
      ctx.fillStyle = '#7b5a8a';
      ctx.fill();
    },
    regions(ctx, S) {
      ctx.fillStyle = reg(6);
      butterflyPath(ctx, S);
      ctx.fill();
      ctx.fillStyle = reg(0);
      ellipse(ctx, S * 0.5, S * 0.5, S * 0.035, S * 0.2); ctx.fill();
    },
  },

  starGold: {
    mat: 'resin', dome: 0.16, rim: 0.2, size: 0.8,
    shape(ctx, S) { star(ctx, S * 0.5, S * 0.53, S * 0.42, S * 0.2, 5, 0.25); ctx.fill(); },
    art(ctx, S) {
      star(ctx, S * 0.5, S * 0.53, S * 0.42, S * 0.2, 5, 0.25);
      ctx.fillStyle = linear(ctx, 0, S * 0.1, S, S * 0.9, [[0, '#ffe9a0'], [1, '#f2b84b']]);
      ctx.fill();
    },
    regions(ctx, S) { ctx.fillStyle = reg(1); star(ctx, S * 0.5, S * 0.53, S * 0.42, S * 0.2, 5, 0.25); ctx.fill(); },
  },

  heartCharm: {
    mat: 'resin', dome: 0.2, rim: 0.3, size: 0.8,
    shape(ctx, S) { heart(ctx, S * 0.5, S * 0.52, S * 0.8, S * 0.72); ctx.fill(); },
    art(ctx, S) {
      heart(ctx, S * 0.5, S * 0.52, S * 0.8, S * 0.72);
      ctx.fillStyle = radial(ctx, S * 0.4, S * 0.38, 0, S * 0.5, [[0, '#ffa6c6'], [1, '#ff6f9f']]);
      ctx.fill();
    },
  },
};

// Sticker catalogue entries: design key + variant + display scale.
export const VARIANTS = {
  ribbonPink: ['ribbon', { color: ['#ff9ec2', '#f27ba6'] }],
  ribbonLilac: ['ribbon', { color: ['#c9b2ff', '#a98bf0'] }],
  ribbonMint: ['ribbon', { color: ['#9fe8cf', '#6fd0b0'] }],
  ribbonRed: ['ribbon', { color: ['#ff6f86', '#e04866'] }],
  pearlCream: ['pearl', { edge: '#f3e4d6' }],
  pearlPink: ['pearl', { edge: '#ffc9dc' }],
  bunnyWhite: ['bunny', { fur: '#fbf7f4' }],
  bunnyPink: ['bunny', { fur: '#ffd6e4' }],
  bearBrown: ['bear', {}],
  bearCream: ['bear', { fur: '#f2dcc0', inner: '#ffd6e0' }],
  gemPink: ['gemHeart', { base: '#f6c8e4' }],
  gemLilac: ['gemRound', { base: '#d8d0ff' }],
  gemAqua: ['gemDrop', { base: '#c9f0ff' }],
  donutPink: ['donut', { icing: '#ff9ec4' }],
  donutChoco: ['donut', { icing: '#9a5a3a' }],
  macaronLilac: ['macaron', { color: ['#c8b5ff', '#fff4f9'] }],
  macaronMint: ['macaron', { color: ['#a8ecd2', '#fff4f9'] }],
};

export function resolveDesign(id) {
  if (VARIANTS[id]) return { key: VARIANTS[id][0], variant: VARIANTS[id][1] };
  return { key: id, variant: {} };
}
