// Drawing the girl: every garment is drawn in order, inner to outer, and each
// outer layer is thicker, so older clothes stay visible at cuffs, collars and hems.
(function () {
  'use strict';
  const C = K.C;
  const G = K.girl;
  G.walkBlend = 0;

  function wetCol(c) { return G.wet > 0.01 ? K.mix(c, '#27303b', 0.28 * G.wet) : c; }

  // point at fraction t along polyline a->b->c
  function along(a, b, c, t) {
    const l1 = Math.hypot(b[0] - a[0], b[1] - a[1]), l2 = Math.hypot(c[0] - b[0], c[1] - b[1]);
    const d = t * (l1 + l2);
    if (d <= l1) { const u = d / Math.max(l1, 1e-6); return [[a[0], a[1]], [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u]]; }
    const u = (d - l1) / Math.max(l2, 1e-6);
    return [[a[0], a[1], b[0], b[1]], [b[0] + (c[0] - b[0]) * u, b[1] + (c[1] - b[1]) * u]];
  }
  function limbTo(ctx, a, b, c, t, w, col, o) {
    if (t <= 0) return null;
    const r = along(a, b, c, t);
    const pts = r[0].concat(r[1]);
    K.limb(ctx, pts, w, col, o || { depth: 1.5 });
    return r[1];
  }

  function torsoPath(cx, top, bot, w, hem, flare) {
    const hw = w / 2, bw = hw + flare;
    const p = new Path2D();
    p.moveTo(cx - hw * 0.72, top);
    p.bezierCurveTo(cx - hw * 1.02, top, cx - hw * 1.06, top + (bot - top) * 0.35, cx - hw, top + (bot - top) * 0.55);
    p.lineTo(cx - bw, bot + hem);
    p.quadraticCurveTo(cx, bot + hem + 4, cx + bw, bot + hem);
    p.lineTo(cx + hw, top + (bot - top) * 0.55);
    p.bezierCurveTo(cx + hw * 1.06, top + (bot - top) * 0.35, cx + hw * 1.02, top, cx + hw * 0.72, top);
    p.quadraticCurveTo(cx, top - 5, cx - hw * 0.72, top);
    p.closePath();
    return p;
  }

  G.draw = function (ctx) {
    if (G.hidden) return;
    const f = G.face, T = G.T, Tl = G.Tl;
    const heavy = G.heavy;
    G.walkBlend = K.follow(G.walkBlend, G.mode === 'walk' ? 1 : 0, 8, 1 / 60);
    const wb = G.walkBlend;
    const ph = G.walkPh;

    ctx.save();
    ctx.translate(G.x, G.y);
    const roll = Math.sin(ph) * (0.015 + heavy * 0.1) * wb + Math.sin(G.wobble * 1.3) * 0.006;
    const sq = K.clamp(G.squish.x, -0.28, 0.28);
    ctx.rotate(roll + G.lean);
    ctx.scale(1 - sq * 0.55, 1 + sq);
    if (G.clipBelow !== null) {
      ctx.beginPath(); ctx.rect(-300, -600, 600, 600 + G.clipBelow - G.y); ctx.clip();
    }

    const bob = Math.abs(Math.sin(ph)) * (2.5 - 1.8 * heavy) * wb + Math.sin(G.wobble * 2.2) * 0.6;
    const hipY = -34 - Tl * 0.3 - bob;
    const top = hipY - 34 - T * 0.55;
    const bot = hipY + 6 + T * 0.15;
    const cx = f * 1.2;
    const headCY = top - 19 + T * 0.18;
    const armW = 9.5, legW = 11;

    // ---- skeleton ----
    const legs = [-1, 1].map((s) => {
      const lift = Math.max(0, s * Math.sin(ph)) * (6.5 - 3.5 * heavy) * wb;
      const hip = [s * (5 + T * 0.42), hipY + 4];
      const ank = [s * (7 + Tl * 0.62) + f * Math.cos(ph) * s * 2.5 * wb, -5 - lift];
      const knee = [(hip[0] + ank[0]) / 2 + s * (1 + Tl * 0.12), (hip[1] + ank[1]) / 2];
      return { s, hip, knee, ank };
    });
    const sw = 32 + 2 * T;
    const arms = [-1, 1].map((s) => {
      const sh = [s * (sw / 2 - 4 - T * 0.18), top + 8 + T * 0.18];
      const upper = 14 + T * 0.08, lower = 13;
      const tgt = s === f ? G.handF : G.handB;
      let el, hd;
      if (tgt) {
        // reach toward a world point
        const tx = (tgt.x - G.x) / (1 - sq * 0.55), ty = (tgt.y - G.y) / (1 + sq);
        let dx = tx - sh[0], dy = ty - sh[1];
        const L = Math.hypot(dx, dy) || 1;
        const reach = Math.min(L, upper + lower + 6);
        dx /= L; dy /= L;
        el = [sh[0] + dx * reach * 0.5 - dy * s * 2, sh[1] + dy * reach * 0.5 + dx * s * 2];
        hd = [sh[0] + dx * reach, sh[1] + dy * reach];
      } else {
        const spread = 0.2 + Math.min(G.Ta, 26) * 0.036;
        const swing = Math.sin(ph) * s * 0.28 * (1 - heavy * 0.6) * wb;
        const idle = Math.sin(K.time * 1.7 + s) * 0.03;
        const up = K.easeOut(G.armsUp);
        const a1 = K.lerp(spread + swing + idle, 2.75, up);
        const a2 = a1 - 0.18 + up * 0.1;
        el = [sh[0] + s * Math.sin(a1) * upper, sh[1] + Math.cos(a1) * upper];
        hd = [el[0] + s * Math.sin(a2) * lower, el[1] + Math.cos(a2) * lower];
      }
      return { s, sh, el, hd };
    });
    G.handPos = {};
    for (const a of arms) {
      const cs = Math.cos(roll + G.lean), sn = Math.sin(roll + G.lean);
      const lx = a.hd[0] * (1 - sq * 0.55), ly = a.hd[1] * (1 + sq);
      G.handPos[a.s === f ? 'F' : 'B'] = { x: G.x + lx * cs - ly * sn, y: G.y + lx * sn + ly * cs };
    }

    // ---- behind the body: tank, hose coil, back hair ----
    if (G.tools.tank && !G.back) {
      K.paper(ctx, K.rr(-f * 8 - 13, top - 16, 26, 70, 12), C.yellow, { depth: 3 });
      K.paper(ctx, K.rr(-f * 8 - 4, top - 24, 8, 10, 2), C.ironL, { depth: 1 });
    }
    if (G.tools.hose) {
      const rx = sw / 2 + 12, ry = 30 + T * 0.4;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath(); ctx.ellipse(-f * 4, top + 30, rx - i * 5, ry - i * 4, -0.25 * f, 0, K.TAU);
        ctx.lineWidth = 8; ctx.strokeStyle = K.shade(C.helmet, -0.45); ctx.stroke();
        ctx.lineWidth = 5.5; ctx.strokeStyle = wetCol(i % 2 ? '#c8372d' : '#dc4a3a'); ctx.stroke();
      }
    }
    K.paper(ctx, K.ell(cx, headCY + 7, 27, 25), C.hair, { depth: 2 });

    // ---- body (skin) ----
    for (const L of legs) K.limb(ctx, L.hip.concat(L.knee, L.ank), legW, C.skin, { depth: 1.5 });
    for (const L of legs) K.limb(ctx, [L.knee[0], L.knee[1] + 3, L.ank[0], L.ank[1]], legW + 0.5, C.sock, { depth: 0 });
    // footwear: shoes, then boots, then fins over them
    for (const L of legs) {
      const [x, y] = L.ank;
      if (G.layers.indexOf('diver') >= 0) {
        K.paper(ctx, K.poly([x - 7, y - 3, x + f * 34, y + 2, x + f * 36, y + 7, x - 8 * f, y + 6]), wetCol(C.yellow), { depth: 2 });
        K.paper(ctx, K.ell(x + f * 3, y + 1, 11, 6), '#2b2b30', { depth: 0 });
      } else if (G.layers.indexOf('fire') >= 0) {
        K.paper(ctx, K.rr(x - 9 + f * 2, y - 14, 18, 20, 4), '#2b2724', { depth: 2 });
        K.paper(ctx, K.ell(x + f * 6, y + 3, 13, 5.5), '#2b2724', { depth: 0 });
        ctx.fillStyle = C.reflect; ctx.fillRect(x - 9 + f * 2, y - 7, 18, 3);
      } else {
        K.paper(ctx, K.ell(x + f * 4, y + 1.5, 9.5, 5.5), C.shoe, { depth: 1.5 });
      }
    }
    for (const A of arms) K.limb(ctx, A.sh.concat(A.el, A.hd), armW, C.skin, { depth: 1.5 });

    // ---- garments, inner to outer ----
    const n = G.cum.length;
    const outerId = G.layers[n - 1];
    for (let i = 0; i < n; i++) {
      const c = G.cum[i];
      const g = K.GAR[c.id];
      const z = G.zip[c.id] === undefined ? 1 : G.zip[c.id];
      const loose = i === n - 1 && c.id !== 'base' ? (1 - z) : 0;
      const col = wetCol(g.color);
      // legs
      if (g.leg > 0) {
        for (const L of legs) {
          const end = limbTo(ctx, L.hip, L.knee, L.ank, g.leg, legW + 1 + 2 * c.l + loose * 3, wetCol(g.legColor || g.color));
          if (end && g.stripes) { K.dot(ctx, end[0], end[1] - 4, (legW + 2 * c.l) / 2, C.reflect); }
        }
      }
      // torso
      const w = sw - 2 * (T - c.t) + loose * g.thick.t * 1.3;
      const flare = c.id === 'base' ? 9 : 2 + c.t * 0.15 + loose * 3;
      const hem = g.hem;
      const tp = top + (T - c.t) * 0.35;
      const path = torsoPath(cx, tp, bot, w, hem, flare);
      if (i === n - 1 && z < 1 && g.zip && !G.back === (g.zip === 'front')) {
        drawOpen(ctx, path, cx, tp, bot + hem, w, z, col, g);
      } else {
        K.paper(ctx, path, col, { depth: 2.5 });
        torsoDetails(ctx, g, c, cx, tp, bot, w, hem, path);
        if (g.zip === 'front' && !G.back && c.id !== 'base') {
          K.line(ctx, [cx + f * 3, tp + 4, cx + f * 3, bot + hem - 1], 1.4, K.shade(col, -0.35));
        }
      }
      // sleeves
      for (const A of arms) {
        const end = limbTo(ctx, A.sh, A.el, A.hd, g.sleeve, armW + 1 + 2 * c.a + loose * 3, col);
        if (end && g.stripes) K.dot(ctx, end[0], end[1], (armW + 2 * c.a) / 2 - 1, C.reflect);
        if (end && c.id !== 'base') K.dot(ctx, end[0], end[1], (armW + 2 * c.a) / 2 - 2.5, K.shade(col, -0.12));
      }
    }
    // ---- front accessories ----
    const waistY = hipY - 6;
    if (G.tools.hose) K.limb(ctx, [-f * (sw / 2 - 2), top + 6, f * (sw / 2 - 4), waistY - 2], 6, wetCol('#d8443a'), { depth: 1 });
    if (G.tools.belt) {
      K.paper(ctx, K.rr(cx - sw / 2 - 1, waistY - 5, sw + 2, 10, 3), wetCol('#7a4a2a'), { depth: 1.5 });
      K.paper(ctx, K.rr(cx - 5, waistY - 6, 10, 12, 2), C.brass, { depth: 0 });
      K.paper(ctx, K.rr(cx - f * (sw / 2 - 2) - 7, waistY + 2, 14, 16, 3), wetCol('#8c5a33'), { depth: 1.5 });
      if (!G.usingWrench) K.drawWrench(ctx, cx + f * (sw / 2 - 6), waistY + 12, 1.4, 0.15 * f);
    }
    if (G.tools.pan) {
      const px = cx - f * (sw / 2 + 4);
      K.limb(ctx, [px, waistY + 4, px, waistY + 18], 3, C.ironD, { depth: 1 });
      K.paper(ctx, K.ell(px, waistY + 26, 10, 9), '#34373d', { depth: 2 });
      K.limb(ctx, [cx + f * (sw / 2 - 12), waistY + 2, cx + f * (sw / 2 - 10), waistY + 26], 2.5, C.ironL, { depth: 1 });
      K.paper(ctx, K.ell(cx + f * (sw / 2 - 10), waistY + 28, 5, 4), C.ironL, { depth: 1 });
    }
    if (G.tools.pot) {
      const px = cx + f * (sw / 2 + 10);
      K.paper(ctx, K.rr(px - 16, waistY - 2, 32, 26, 5), '#9aa3ab', { depth: 2.5 });
      K.paper(ctx, K.rr(px - 19, waistY - 5, 38, 6, 3), '#b8c0c6', { depth: 1 });
    }
    if (G.tools.weights) {
      K.paper(ctx, K.rr(cx - sw / 2 - 2, hipY - 1, sw + 4, 8, 3), '#232427', { depth: 1.5 });
      for (let k = -2; k <= 2; k++) K.paper(ctx, K.rr(cx + k * (sw / 5) - 5, hipY - 3, 10, 12, 2), '#8d9096', { depth: 1 });
    }

    // ---- head ----
    if (G.back) {
      K.paper(ctx, K.ell(cx, headCY, 25, 24.5), C.hair, { depth: 2 });
      ctx.strokeStyle = K.shade(C.hair, 0.2); ctx.lineWidth = 1.5;
      for (let k = -2; k <= 2; k++) { ctx.beginPath(); ctx.moveTo(cx + k * 7, headCY - 18); ctx.quadraticCurveTo(cx + k * 9, headCY + 4, cx + k * 8, headCY + 22); ctx.stroke(); }
    } else {
      K.paper(ctx, K.ell(cx, headCY, 24, 23.5), C.skin, { depth: 2 });
      drawFace(ctx, cx, headCY, f);
      // bangs
      const b = new Path2D();
      b.moveTo(cx - 25, headCY + 4);
      b.bezierCurveTo(cx - 28, headCY - 30, cx + 28, headCY - 30, cx + 25, headCY + 4);
      b.quadraticCurveTo(cx + 20, headCY - 6, cx + 12, headCY - 9);
      b.quadraticCurveTo(cx + 3, headCY - 5, cx - 2, headCY - 11);
      b.quadraticCurveTo(cx - 10, headCY - 5, cx - 16, headCY - 10);
      b.quadraticCurveTo(cx - 22, headCY - 4, cx - 25, headCY + 4);
      K.paper(ctx, b, C.hair, { depth: 0 });
      if (G.zip.diver >= 1) { if (G.maskUp) drawMaskUp(ctx, cx, headCY, f); else drawMaskOn(ctx, cx, headCY, f); }
    }
    // collars stack under the chin like a ruff: outer ones lower and wider, inner ones on top
    if (!G.back) {
      const chin = headCY + 21;
      for (let i = n - 1; i >= 1; i--) {
        const c = G.cum[i], g = K.GAR[c.id];
        if (!g.collar) continue;
        const z = G.zip[c.id] === undefined ? 1 : G.zip[c.id];
        if (z < 1) continue;
        const y = chin - 3 + (i - 1) * 3.6;
        const w = 17 + i * 5.5;
        const band = new Path2D();
        band.ellipse(cx, y, w, 7.5, 0, 0.05, Math.PI - 0.05);
        band.ellipse(cx, y - 1, w * 0.86, 4, 0, Math.PI - 0.1, 0.1, true);
        band.closePath();
        K.paper(ctx, band, wetCol(g.collar.color), { depth: 1.2, lw: 1.2 });
      }
    }
    // hat stack
    let hy = headCY - 13;
    for (const h of G.hats()) {
      K.drawHat(ctx, h, cx + f * 1, hy, 0.95, f);
      hy -= h === 'helmet' ? 17 : h === 'cap' ? 10 : 34;
    }
    // hands last
    for (const A of arms) K.circle(ctx, A.hd[0], A.hd[1], 5.4, C.skin, { depth: 1 });

    ctx.restore();
  };

  // the outermost garment while it is still open: a V gap shows everything underneath
  function drawOpen(ctx, path, cx, tp, bottom, w, z, col, g) {
    const f = G.face;
    const zx = cx + (G.back ? -f * 2 : f * 3);
    const ys = K.lerp(bottom - 2, tp + 4, z);
    const gap = (w / 2) * 0.62 * Math.sqrt(1 - z) + 1;
    const vee = new Path2D();
    vee.moveTo(zx, ys);
    vee.lineTo(zx - gap, tp - 8);
    vee.lineTo(zx + gap, tp - 8);
    vee.closePath();
    ctx.save();
    const clip = new Path2D();
    clip.rect(cx - 400, tp - 200, 800, 600);
    clip.addPath(vee);
    ctx.clip(clip, 'evenodd');
    K.paper(ctx, path, col, { depth: 2.5 });
    torsoDetails(ctx, g, null, cx, tp, bottom - g.hem, w, g.hem, path);
    ctx.restore();
    // zipper teeth: closed below the slider, two open rows above
    ctx.strokeStyle = '#d9d4c5'; ctx.lineWidth = 2.2; ctx.setLineDash([2, 2]);
    ctx.beginPath(); ctx.moveTo(zx, bottom - 1); ctx.lineTo(zx, ys); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(zx, ys); ctx.lineTo(zx - gap + 1, tp - 6); ctx.moveTo(zx, ys); ctx.lineTo(zx + gap - 1, tp - 6); ctx.stroke();
    ctx.setLineDash([]);
    // slider + pull (or, on a wetsuit, a long cord)
    K.paper(ctx, K.rr(zx - 4, ys - 3, 8, 8, 2), '#c9c4b6', { depth: 1 });
    let px = zx, py = ys + 12;
    if (g.zip === 'back') {
      py = Math.max(ys + 50, -6);
      const sway = Math.sin(K.time * 2) * 3;
      K.line(ctx, [zx, ys + 3, zx + sway, (ys + py) / 2, px + sway * 1.5, py], 2.4, '#1c1c20');
      px += sway * 1.5;
      K.paper(ctx, K.rr(px - 7, py - 3, 14, 12, 5), C.yellow, { depth: 1.5 });
      py += 3;
    } else {
      K.paper(ctx, K.rr(zx - 4, ys + 3, 8, 13, 3), '#e6e0cf', { depth: 1 });
    }
    // world position of the pull, for touch
    const cs = Math.cos(G.lean), sn = Math.sin(G.lean);
    G.zipPt = { x: G.x + px * cs - py * sn, y: G.y + px * sn + py * cs, top: G.y + tp + 4, bottom: G.y + bottom - 2 };
    G.zipGlint = G.zipGlint || 0;
    if (G.zipGlint > 0) K.sparkle(ctx, px + 7, py - 2, 9, Math.sin(G.zipGlint * Math.PI));
  }

  function torsoDetails(ctx, g, c, cx, tp, bot, w, hem, path) {
    const f = G.face;
    ctx.save();
    ctx.clip(path);
    if (g.stripes) {
      for (const y of [bot + hem - 10, bot - 10]) {
        ctx.fillStyle = C.reflect; ctx.fillRect(cx - w, y, w * 2, 6);
        ctx.fillStyle = C.silver; ctx.fillRect(cx - w, y + 2, w * 2, 2);
      }
    }
    if (g.pockets) {
      K.paper(ctx, K.rr(cx - w * 0.36 - 5, tp + 12, 12, 10, 2), C.mechD, { depth: 0 });
      K.paper(ctx, K.rr(cx + w * 0.24 - 5, tp + 12, 12, 10, 2), C.mechD, { depth: 0 });
    }
    if (g.buttons) {
      for (let k = 0; k < 3; k++) {
        K.dot(ctx, cx - 6 + f * 2, tp + 12 + k * 9, 2.2, C.cookD);
        K.dot(ctx, cx + 8 + f * 2, tp + 12 + k * 9, 2.2, C.cookD);
      }
    }
    if (g.sheen) {
      ctx.fillStyle = 'rgba(170,200,240,0.22)';
      ctx.fillRect(cx - w * 0.32, tp, 6, bot - tp + hem);
      ctx.fillStyle = C.yellow;
      ctx.fillRect(cx - w / 2 - 2, tp + 10, 6, bot - tp + hem);
      ctx.fillRect(cx + w / 2 - 4, tp + 10, 6, bot - tp + hem);
    }
    ctx.restore();
    if (g.apron) {
      const aw = w * 0.36;
      K.paper(ctx, K.poly([cx - aw, bot - 12, cx + aw, bot - 12, cx + aw + 6, bot + hem + 16, cx - aw - 6, bot + hem + 16]), wetCol('#efe7d4'), { depth: 2, line: C.cookD });
      K.line(ctx, [cx - aw - 2, bot - 12, cx + aw + 2, bot - 12], 3, wetCol(C.cookD));
    }
  }

  function drawFace(ctx, cx, cy, f) {
    let ex = cx + f * 5;
    let ey = 0;
    if (G.lookPt) {
      ex += K.clamp((G.lookPt.x - G.x) / 90, -1, 1) * 2.4;
      ey = K.clamp((G.lookPt.y - (G.y + cy)) / 120, -1, 1) * 1.6;
    }
    cy += ey;
    const e = G.expr;
    const bl = G.blink > 0;
    for (const s of [-1, 1]) {
      const x = ex + s * 8.5, y = cy + 1;
      if (bl || e === 'strain' || e === 'joy') {
        ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.lineCap = 'round';
        ctx.beginPath();
        if (e === 'strain') { ctx.moveTo(x - 3.5, y - 2 * s * f * 0 - 1); ctx.lineTo(x + 3.5, y + 1); }
        else if (e === 'joy') { ctx.arc(x, y + 1.5, 3.5, Math.PI * 1.1, Math.PI * 1.9); }
        else { ctx.moveTo(x - 3, y); ctx.lineTo(x + 3, y); }
        ctx.stroke();
      } else {
        K.paper(ctx, K.ell(x, y, 2.9, 3.8), C.ink, { depth: 0, line: false });
        K.dot(ctx, x + 0.9, y - 1.3, 1.1, '#fff');
      }
      if (e === 'determined') K.line(ctx, [x - 4, y - 8 + s * f * 1.5, x + 4, y - 8 - s * f * 1.5], 1.8, C.hair);
    }
    ctx.fillStyle = 'rgba(243,154,136,0.7)';
    ctx.beginPath(); ctx.ellipse(ex - 14, cy + 8, 4.5, 2.8, 0, 0, K.TAU); ctx.ellipse(ex + 14, cy + 8, 4.5, 2.8, 0, 0, K.TAU); ctx.fill();
    ctx.strokeStyle = C.ink; ctx.lineWidth = 1.8; ctx.lineCap = 'round';
    ctx.beginPath();
    if (e === 'o') { ctx.fillStyle = '#7a3b35'; ctx.ellipse(ex, cy + 11, 2.8, 3.5, 0, 0, K.TAU); ctx.fill(); }
    else if (e === 'sad') { ctx.arc(ex, cy + 14, 4, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke(); }
    else if (e === 'strain') { ctx.moveTo(ex - 4, cy + 11); ctx.lineTo(ex + 4, cy + 11); ctx.stroke(); }
    else if (e === 'joy') { ctx.fillStyle = '#7a3b35'; ctx.arc(ex, cy + 9, 5, 0.1, Math.PI - 0.1); ctx.closePath(); ctx.fill(); }
    else { ctx.arc(ex, cy + 8, 4, 0.25, Math.PI - 0.25); ctx.stroke(); }
  }

  // back on land she pushes the mask up onto her forehead, like divers do
  function drawMaskUp(ctx, cx, cy, f) {
    K.line(ctx, [cx - 25, cy - 16, cx + 25, cy - 16], 4, '#222');
    K.paper(ctx, K.rr(cx + f * 3 - 15, cy - 26, 30, 16, 7), '#2b2b30', { depth: 1.5 });
    ctx.fillStyle = 'rgba(170,220,240,0.75)';
    ctx.fill(K.rr(cx + f * 3 - 12, cy - 23.5, 24, 11, 5));
    K.limb(ctx, [cx + f * 16, cy + 14, cx + f * 22, cy + 30, cx - f * 10, cy + 34], 3, '#2b2b30', { depth: 0, curve: true });
    K.paper(ctx, K.rr(cx - f * 10 - 5, cy + 30, 10, 8, 3), '#2b2b30', { depth: 1 });
  }
  function drawMaskOn(ctx, cx, cy, f) {
    K.line(ctx, [cx - 25, cy - 2, cx + 25, cy - 2], 4, '#222');
    K.paper(ctx, K.rr(cx + f * 5 - 16, cy - 10, 32, 19, 8), '#2b2b30', { depth: 1.5 });
    ctx.fillStyle = 'rgba(170,220,240,0.55)';
    ctx.fill(K.rr(cx + f * 5 - 13, cy - 7.5, 26, 14, 6));
    ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.fillRect(cx + f * 5 - 9, cy - 6, 5, 3);
    // regulator in the mouth, hose to the tank
    K.paper(ctx, K.rr(cx + f * 5 - 5, cy + 8, 10, 8, 3), '#2b2b30', { depth: 1 });
    K.limb(ctx, [cx + f * 5, cy + 14, cx - f * 18, cy + 22, cx - f * 22, cy - 10], 3, '#2b2b30', { depth: 0, curve: true });
  }
})();
