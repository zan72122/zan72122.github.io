// Canvas2D path helpers for cute sticker silhouettes. All take a context and build a path
// (beginPath included) in pixel coordinates. They do not fill.

export function heart(ctx, cx, cy, w, h) {
  ctx.beginPath();
  heartSub(ctx, cx, cy, w, h);
}

export function heartSub(ctx, cx, cy, w, h) {
  const top = cy - h * 0.5;
  const x = cx, hw = w * 0.5;
  ctx.moveTo(x, top + h * 0.28);
  ctx.bezierCurveTo(x - hw * 0.12, top + h * 0.02, x - hw * 0.62, top - h * 0.06, x - hw * 0.9, top + h * 0.16);
  ctx.bezierCurveTo(x - hw * 1.12, top + h * 0.36, x - hw * 1.02, top + h * 0.6, x - hw * 0.62, top + h * 0.8);
  ctx.bezierCurveTo(x - hw * 0.36, top + h * 0.92, x - hw * 0.1, top + h * 0.98, x, top + h * 1.0);
  ctx.bezierCurveTo(x + hw * 0.1, top + h * 0.98, x + hw * 0.36, top + h * 0.92, x + hw * 0.62, top + h * 0.8);
  ctx.bezierCurveTo(x + hw * 1.02, top + h * 0.6, x + hw * 1.12, top + h * 0.36, x + hw * 0.9, top + h * 0.16);
  ctx.bezierCurveTo(x + hw * 0.62, top - h * 0.06, x + hw * 0.12, top + h * 0.02, x, top + h * 0.28);
  ctx.closePath();
}

export function heartPoints(cx, cy, w, h, n = 24) {
  // polygonal heart outline in the same coordinates (for gem facets)
  const pts = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    pts.push([cx + (x / 34) * w, cy + ((y + 2.5) / 31) * h]);
  }
  return pts;
}

export function star(ctx, cx, cy, R, r, n = 5, round = 0.25, rot = -Math.PI / 2) {
  ctx.beginPath();
  const pts = [];
  for (let i = 0; i < n * 2; i++) {
    const a = rot + (i / (n * 2)) * Math.PI * 2;
    const rr = i % 2 === 0 ? R : r;
    pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
  }
  roundedPoly(ctx, pts, round);
}

// Polygon with rounded corners: round in 0..0.5 (fraction of edge length)
export function roundedPoly(ctx, pts, round) {
  const n = pts.length;
  const mid = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
  const start = mid(pts[0], pts[1], round);
  ctx.moveTo(start[0], start[1]);
  for (let i = 1; i <= n; i++) {
    const p = pts[i % n];
    const prev = pts[i - 1];
    const next = pts[(i + 1) % n];
    const a = mid(prev, p, 1 - round);
    const b = mid(p, next, round);
    ctx.lineTo(a[0], a[1]);
    ctx.quadraticCurveTo(p[0], p[1], b[0], b[1]);
  }
  ctx.closePath();
}

export function circle(ctx, cx, cy, r) {
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
}

export function ellipse(ctx, cx, cy, rx, ry, rot = 0) {
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, rot, 0, Math.PI * 2);
}

export function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  rrectSub(ctx, x, y, w, h, r);
}

export function rrectSub(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export function cloud(ctx, cx, cy, w, h) {
  ctx.beginPath();
  const bumps = [
    [-0.32, 0.12, 0.26], [-0.12, -0.12, 0.3], [0.16, -0.16, 0.28], [0.34, 0.06, 0.24], [0.08, 0.16, 0.3], [-0.2, 0.2, 0.24],
  ];
  for (const [x, y, r] of bumps) {
    ctx.moveTo(cx + x * w + r * w, cy + y * h);
    ctx.ellipse(cx + x * w, cy + y * h, r * w, r * h * 1.15, 0, 0, Math.PI * 2);
  }
}

export function drop(ctx, cx, cy, w, h) {
  ctx.beginPath();
  const top = cy - h * 0.5;
  ctx.moveTo(cx, top);
  ctx.bezierCurveTo(cx + w * 0.12, top + h * 0.2, cx + w * 0.5, top + h * 0.42, cx + w * 0.5, top + h * 0.68);
  ctx.bezierCurveTo(cx + w * 0.5, top + h * 0.88, cx + w * 0.28, top + h, cx, top + h);
  ctx.bezierCurveTo(cx - w * 0.28, top + h, cx - w * 0.5, top + h * 0.88, cx - w * 0.5, top + h * 0.68);
  ctx.bezierCurveTo(cx - w * 0.5, top + h * 0.42, cx - w * 0.12, top + h * 0.2, cx, top);
  ctx.closePath();
}

export function crescent(ctx, cx, cy, r, off = 0.42, rot = -0.5) {
  // outer circle minus offset circle, as a single path using evenodd-free construction
  ctx.beginPath();
  const ox = cx + Math.cos(rot) * r * off;
  const oy = cy + Math.sin(rot) * r * off;
  const r2 = r * 0.86;
  // intersection angles
  const d = Math.hypot(ox - cx, oy - cy);
  const a = (r * r - r2 * r2 + d * d) / (2 * d);
  const hh = Math.sqrt(Math.max(0, r * r - a * a));
  const bx = cx + (a * (ox - cx)) / d, by = cy + (a * (oy - cy)) / d;
  const p1 = [bx + (hh * (oy - cy)) / d, by - (hh * (ox - cx)) / d];
  const p2 = [bx - (hh * (oy - cy)) / d, by + (hh * (ox - cx)) / d];
  const a1 = Math.atan2(p1[1] - cy, p1[0] - cx), a2 = Math.atan2(p2[1] - cy, p2[0] - cx);
  const b1 = Math.atan2(p1[1] - oy, p1[0] - ox), b2 = Math.atan2(p2[1] - oy, p2[0] - ox);
  ctx.arc(cx, cy, r, a1, a2, true);
  ctx.arc(ox, oy, r2, b2, b1, false);
  ctx.closePath();
}

export function petal5(ctx, cx, cy, R, notch = 0.13, rot = -Math.PI / 2) {
  // sakura: five rounded petals, each with a small notch at the tip
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const a = rot + (i / 5) * Math.PI * 2;
    const ca = Math.cos(a), sa = Math.sin(a);
    const P = (r, t) => [cx + ca * r - sa * t, cy + sa * r + ca * t];
    const w = R * 0.4;
    const s0 = P(R * 0.05, 0);
    ctx.moveTo(s0[0], s0[1]);
    ctx.bezierCurveTo(...P(R * 0.35, -w * 1.15), ...P(R * 0.88, -w * 1.1), ...P(R, -w * 0.32));
    ctx.quadraticCurveTo(...P(R * 0.97, -w * 0.08), ...P(R * (1 - notch), 0));
    ctx.quadraticCurveTo(...P(R * 0.97, w * 0.08), ...P(R, w * 0.32));
    ctx.bezierCurveTo(...P(R * 0.88, w * 1.1), ...P(R * 0.35, w * 1.15), ...s0);
    ctx.closePath();
  }
}

export function polyPath(ctx, pts) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.closePath();
}

export function radial(ctx, x, y, r0, r1, stops) {
  const g = ctx.createRadialGradient(x, y, r0, x, y, r1);
  for (const [t, c] of stops) g.addColorStop(t, c);
  return g;
}

export function linear(ctx, x0, y0, x1, y1, stops) {
  const g = ctx.createLinearGradient(x0, y0, x1, y1);
  for (const [t, c] of stops) g.addColorStop(t, c);
  return g;
}

// cute face: two eyes, optional blush and mouth
export function face(ctx, cx, cy, s, opts = {}) {
  const eye = opts.eye || '#3a2a33';
  const gap = s * (opts.gap ?? 0.42);
  const er = s * (opts.eyeR ?? 0.085);
  ctx.fillStyle = eye;
  if (opts.sleepy) {
    ctx.strokeStyle = eye;
    ctx.lineWidth = s * 0.05;
    ctx.lineCap = 'round';
    for (const sx of [-1, 1]) {
      ctx.beginPath();
      ctx.arc(cx + sx * gap * 0.5, cy - er * 0.2, er * 1.1, 0.15 * Math.PI, 0.85 * Math.PI);
      ctx.stroke();
    }
  } else {
    for (const sx of [-1, 1]) {
      ctx.beginPath();
      ctx.ellipse(cx + sx * gap * 0.5, cy, er, er * 1.18, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(cx + sx * gap * 0.5 - er * 0.3, cy - er * 0.4, er * 0.36, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = eye;
    }
  }
  if (opts.blush !== false) {
    ctx.fillStyle = opts.blushCol || 'rgba(255,120,150,0.55)';
    for (const sx of [-1, 1]) {
      ctx.beginPath();
      ctx.ellipse(cx + sx * gap * 0.92, cy + er * 1.6, er * 1.3, er * 0.8, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  if (opts.mouth !== false) {
    ctx.strokeStyle = eye;
    ctx.lineWidth = s * 0.035;
    ctx.lineCap = 'round';
    ctx.beginPath();
    const my = cy + er * 1.7;
    const mw = s * 0.07;
    ctx.moveTo(cx - mw, my);
    ctx.quadraticCurveTo(cx - mw * 0.5, my + mw * 0.9, cx, my);
    ctx.quadraticCurveTo(cx + mw * 0.5, my + mw * 0.9, cx + mw, my);
    ctx.stroke();
  }
}
