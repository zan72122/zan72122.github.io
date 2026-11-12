// Paper-diorama drawing kit: cut-paper shapes with a soft offset shadow, an ink
// outline, and a paper grain over the whole frame.
(function () {
  'use strict';
  K.C = {
    ink: '#3b2a24',
    skin: '#f4c9a8', skinD: '#d9a07f', hair: '#4b2e22', cheek: '#f39a88',
    dress: '#f0857a', dressD: '#c9645b', sock: '#fbf4e4', shoe: '#c0453b',
    fire: '#d7a23f', fireD: '#9e7426', reflect: '#e7f06a', silver: '#e9e8e0', helmet: '#d63b30',
    mech: '#3f6fb5', mechD: '#2b4d82', denim: '#35609f',
    cook: '#f7f3e8', cookD: '#c9bfa8', scarf: '#d9463b', check: '#2f2f35',
    diver: '#243b5f', diverD: '#162640', diverHi: '#5c7fb0', yellow: '#f2c230',
    wood: '#c98c55', woodD: '#8e5d33', woodL: '#e0ae78',
    stone: '#c2b8a6', stoneD: '#8f8575', stoneL: '#dcd3c1',
    iron: '#5e646d', ironD: '#383c43', ironL: '#8a919b', rust: '#9c5a3c',
    cable: '#2f2a27', brass: '#c9a045',
    soil: '#8b5e3c', soil2: '#774f31', soil3: '#5f3e27', soil4: '#4a2f1e',
    grass: '#93b55c', grassD: '#6c8f41',
    water: '#5ea9cc', waterD: '#2f6f96', waterL: '#a6d8ec',
    ice: '#e3f3f8', iceD: '#a9d0de', snow: '#f8f8f4', snowD: '#d9dfe3',
    flame: '#f7902e', flameY: '#ffd65a', flameR: '#e4502b',
    brick: '#b8573f', brickD: '#8a3c2b',
    white: '#fffdf6', black: '#2a2522',
    pup: '#e3b77e', pupD: '#b98652',
  };

  // hex -> shaded hex (amt -1..1)
  const cache = {};
  K.shade = function (hex, amt) {
    const key = hex + amt;
    if (cache[key]) return cache[key];
    let c = hex.replace('#', '');
    if (c.length === 3) c = c.split('').map((ch) => ch + ch).join('');
    let r = parseInt(c.substr(0, 2), 16), g = parseInt(c.substr(2, 2), 16), b = parseInt(c.substr(4, 2), 16);
    if (amt < 0) { r *= 1 + amt; g *= 1 + amt; b *= 1 + amt; }
    else { r += (255 - r) * amt; g += (255 - g) * amt; b += (255 - b) * amt; }
    const out = '#' + [r, g, b].map((v) => Math.round(K.clamp(v, 0, 255)).toString(16).padStart(2, '0')).join('');
    cache[key] = out;
    return out;
  };
  K.mix = function (a, b, t) {
    const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
    const r = ((pa >> 16) & 255) * (1 - t) + ((pb >> 16) & 255) * t;
    const g = ((pa >> 8) & 255) * (1 - t) + ((pb >> 8) & 255) * t;
    const bl = (pa & 255) * (1 - t) + (pb & 255) * t;
    return '#' + [r, g, bl].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
  };

  // ---------- paths ----------
  K.rr = function (x, y, w, h, r) {
    const p = new Path2D();
    r = Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2);
    p.moveTo(x + r, y);
    p.arcTo(x + w, y, x + w, y + h, r);
    p.arcTo(x + w, y + h, x, y + h, r);
    p.arcTo(x, y + h, x, y, r);
    p.arcTo(x, y, x + w, y, r);
    p.closePath();
    return p;
  };
  K.ell = function (cx, cy, rx, ry, rot = 0) {
    const p = new Path2D();
    p.ellipse(cx, cy, Math.max(rx, 0.1), Math.max(ry, 0.1), rot, 0, K.TAU);
    return p;
  };
  K.poly = function (pts, close = true) {
    const p = new Path2D();
    p.moveTo(pts[0], pts[1]);
    for (let i = 2; i < pts.length; i += 2) p.lineTo(pts[i], pts[i + 1]);
    if (close) p.closePath();
    return p;
  };
  // smooth closed blob through points (Catmull-Rom -> Bezier)
  K.blob = function (pts) {
    const p = new Path2D();
    const n = pts.length / 2;
    const P = (i) => [pts[((i + n) % n) * 2], pts[((i + n) % n) * 2 + 1]];
    const s = P(0);
    p.moveTo(s[0], s[1]);
    for (let i = 0; i < n; i++) {
      const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
      p.bezierCurveTo(p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6,
        p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6, p2[0], p2[1]);
    }
    p.closePath();
    return p;
  };

  // ---------- paper shape ----------
  // fill a Path2D like a paper cut-out: shadow underneath, fill, ink edge.
  K.paper = function (ctx, path, fill, o) {
    o = o || {};
    const d = o.depth === undefined ? 3 : o.depth;
    if (d) {
      ctx.save();
      ctx.translate(d * 0.4, d);
      ctx.fillStyle = o.shadow || 'rgba(70,40,20,0.22)';
      ctx.fill(path);
      ctx.restore();
    }
    ctx.fillStyle = fill;
    ctx.fill(path);
    if (o.line !== false) {
      ctx.lineWidth = o.lw || 1.6;
      ctx.lineJoin = 'round';
      ctx.strokeStyle = o.line || K.shade(typeof fill === 'string' ? fill : '#888888', -0.4);
      ctx.stroke(path);
    }
  };
  // thick rounded polyline (limbs, hoses, cables) with ink edge
  K.limb = function (ctx, pts, w, color, o) {
    o = o || {};
    const path = new Path2D();
    path.moveTo(pts[0], pts[1]);
    if (pts.length === 6 && o.curve) path.quadraticCurveTo(pts[2], pts[3], pts[4], pts[5]);
    else for (let i = 2; i < pts.length; i += 2) path.lineTo(pts[i], pts[i + 1]);
    ctx.lineCap = o.cap || 'round';
    ctx.lineJoin = 'round';
    const d = o.depth === undefined ? 2 : o.depth;
    if (d) {
      ctx.save(); ctx.translate(d * 0.4, d);
      ctx.strokeStyle = 'rgba(70,40,20,0.2)'; ctx.lineWidth = w + 2; ctx.stroke(path);
      ctx.restore();
    }
    if (o.line !== false) {
      ctx.strokeStyle = o.line || K.shade(color, -0.42);
      ctx.lineWidth = w + (o.lw || 1.6) * 2;
      ctx.stroke(path);
    }
    ctx.strokeStyle = color; ctx.lineWidth = w; ctx.stroke(path);
    return path;
  };
  K.line = function (ctx, pts, w, color, cap) {
    ctx.beginPath();
    ctx.moveTo(pts[0], pts[1]);
    for (let i = 2; i < pts.length; i += 2) ctx.lineTo(pts[i], pts[i + 1]);
    ctx.lineCap = cap || 'round'; ctx.lineJoin = 'round';
    ctx.lineWidth = w; ctx.strokeStyle = color; ctx.stroke();
  };
  K.circle = function (ctx, x, y, r, fill, o) { K.paper(ctx, K.ell(x, y, r, r), fill, o); };
  K.dot = function (ctx, x, y, r, fill) { ctx.beginPath(); ctx.arc(x, y, Math.max(r, 0.1), 0, K.TAU); ctx.fillStyle = fill; ctx.fill(); };

  // Pulley / wheel with spokes that visibly rotate.
  K.wheel = function (ctx, x, y, r, ang, o) {
    o = o || {};
    const col = o.color || K.C.iron;
    K.paper(ctx, K.ell(x, y, r, r), col, { depth: o.depth === undefined ? 3 : o.depth });
    ctx.beginPath(); ctx.arc(x, y, r * 0.78, 0, K.TAU);
    ctx.strokeStyle = K.shade(col, -0.3); ctx.lineWidth = Math.max(1.2, r * 0.08); ctx.stroke();
    const n = o.spokes || 5;
    ctx.lineWidth = Math.max(1.5, r * 0.12); ctx.lineCap = 'round';
    ctx.strokeStyle = K.shade(col, 0.18);
    for (let i = 0; i < n; i++) {
      const a = ang + (i / n) * K.TAU;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * r * 0.74, y + Math.sin(a) * r * 0.74); ctx.stroke();
    }
    if (o.mark !== false) K.dot(ctx, x + Math.cos(ang) * r * 0.88, y + Math.sin(ang) * r * 0.88, Math.max(1.5, r * 0.09), o.markColor || K.C.yellow);
    K.dot(ctx, x, y, r * 0.2, K.shade(col, -0.35));
    K.dot(ctx, x, y, r * 0.09, K.shade(col, 0.4));
  };

  // coil spring between two y's (vertical), n turns: back half darker, front half bright
  K.coil = function (ctx, x, y0, y1, w, n, color) {
    const len = y1 - y0;
    const step = len / n;
    ctx.save();
    ctx.lineCap = 'round';
    for (let i = 0; i < n; i++) {
      const a = y0 + i * step;
      // back strand (right to left, rising)
      K.line(ctx, [x + w / 2, a + step * 0.5, x - w / 2, a + step], 5, K.shade(color, -0.45));
      K.line(ctx, [x + w / 2, a + step * 0.5, x - w / 2, a + step], 2.6, K.shade(color, -0.2));
    }
    for (let i = 0; i < n; i++) {
      const a = y0 + i * step;
      // front strand (left to right, descending)
      K.line(ctx, [x - w / 2, a, x + w / 2, a + step * 0.5], 6, K.shade(color, -0.5));
      K.line(ctx, [x - w / 2, a, x + w / 2, a + step * 0.5], 3.4, color);
    }
    ctx.restore();
  };

  // cable with little moving tick marks so a child can see it travel
  K.cable = function (ctx, pts, travel, o) {
    o = o || {};
    const w = o.w || 3.2;
    K.line(ctx, pts, w + 2, 'rgba(0,0,0,0.25)');
    K.line(ctx, pts, w, o.color || K.C.cable);
    // paint marks on the cable (alternating yellow / red) so its travel is easy to follow
    let acc = 0;
    const gap = o.gap || 30;
    for (let i = 0; i < pts.length - 2; i += 2) {
      const ax = pts[i], ay = pts[i + 1], bx = pts[i + 2], by = pts[i + 3];
      const L = Math.hypot(bx - ax, by - ay);
      if (L < 0.01) continue;
      const ux = (bx - ax) / L, uy = (by - ay) / L;
      const start = ((travel - acc) % gap + gap) % gap;
      for (let d = start; d < L; d += gap) {
        const k = Math.floor((d + acc - travel) / gap);
        ctx.strokeStyle = (k & 1) ? '#e0503a' : (o.tick || K.C.yellow);
        ctx.lineWidth = w + 2.5; ctx.lineCap = 'butt';
        const cx = ax + ux * d, cy = ay + uy * d;
        ctx.beginPath(); ctx.moveTo(cx - ux * 4, cy - uy * 4); ctx.lineTo(cx + ux * 4, cy + uy * 4); ctx.stroke();
      }
      acc += L;
    }
  };

  // ---------- paper grain (screen space) ----------
  let grain = null, vig = null, vigKey = '';
  function makeGrain() {
    const c = document.createElement('canvas');
    c.width = c.height = 160;
    const g = c.getContext('2d');
    const r = K.srand(7);
    for (let i = 0; i < 2600; i++) {
      const v = r();
      g.fillStyle = v < 0.5 ? 'rgba(90,60,30,' + (0.05 + r() * 0.08) + ')' : 'rgba(255,250,235,' + (0.05 + r() * 0.08) + ')';
      g.fillRect(r() * 160, r() * 160, 1 + r() * 1.6, 1 + r() * 1.6);
    }
    for (let i = 0; i < 40; i++) {
      g.strokeStyle = 'rgba(120,90,50,0.05)';
      g.lineWidth = 0.6;
      g.beginPath();
      const x = r() * 160, y = r() * 160;
      g.moveTo(x, y); g.lineTo(x + (r() - 0.5) * 30, y + (r() - 0.5) * 8); g.stroke();
    }
    return c;
  }
  K.drawGrain = function (ctx) {
    if (!grain) grain = ctx.createPattern(makeGrain(), 'repeat');
    ctx.setTransform(K.dpr, 0, 0, K.dpr, 0, 0);
    ctx.fillStyle = grain;
    ctx.fillRect(0, 0, K.W, K.H);
    // soft vignette like the inside of a paper theatre
    const key = K.W + 'x' + K.H;
    if (vigKey !== key) {
      vigKey = key;
      vig = ctx.createRadialGradient(K.W / 2, K.H / 2, Math.min(K.W, K.H) * 0.35, K.W / 2, K.H / 2, Math.max(K.W, K.H) * 0.75);
      vig.addColorStop(0, 'rgba(60,35,15,0)');
      vig.addColorStop(1, 'rgba(60,35,15,0.22)');
    }
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, K.W, K.H);
  };

  // sparkle used as the world's only "hint": a glint on the thing to touch
  K.sparkle = function (ctx, x, y, r, a) {
    if (a <= 0) return;
    ctx.save();
    ctx.globalAlpha = K.sat(a);
    ctx.translate(x, y);
    ctx.rotate(K.time * 0.8);
    ctx.fillStyle = '#fffbe6';
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const rr = i % 2 === 0 ? r : r * 0.28;
      const an = (i / 8) * K.TAU;
      ctx.lineTo(Math.cos(an) * rr, Math.sin(an) * rr);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };
})();
