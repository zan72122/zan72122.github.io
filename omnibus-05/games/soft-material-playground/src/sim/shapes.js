// やわらかそざいあそび - blob spawning, shape metrics (drives face/quests),
// region counting and particle painting. Operates directly on GAME.Sim's SoA
// arrays (mpm.js exposes them).
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const Shapes = {};

  // Fill a disc with grid-jittered particles (~4 per cell like classic MPM).
  // Returns the number of particles written starting at Sim.n.
  Shapes.spawnBlob = function (cx, cy, radius, colors, rand) {
    const Sim = GAME.Sim;
    const spacing = Sim.dx * 0.5;
    let count = 0;
    const rgb = colors.map((h) => U.hexToRgb(h));
    for (let y = -radius; y <= radius; y += spacing) {
      for (let x = -radius; x <= radius; x += spacing) {
        if (x * x + y * y > radius * radius) continue;
        if (Sim.n >= Sim.cap) return count;
        const i = Sim.n++;
        Sim.px[i] = cx + x + (rand() - 0.5) * spacing * 0.8;
        Sim.py[i] = cy + y + (rand() - 0.5) * spacing * 0.8;
        Sim.pvx[i] = 0; Sim.pvy[i] = 0;
        Sim.resetParticleState(i);
        // Base color with a whisper of per-particle variation (kept small:
        // large variation reads as speckle noise on the shaded surface).
        const c = rgb[0];
        const shade = 0.975 + rand() * 0.05;
        Sim.pr[i] = U.clamp(c[0] * shade, 0, 1);
        Sim.pg[i] = U.clamp(c[1] * shade, 0, 1);
        Sim.pb[i] = U.clamp(c[2] * shade, 0, 1);
        Sim.pKind[i] = 0;
        count++;
      }
    }
    return count;
  };

  // ---- metrics: centroid + covariance ellipse + speed ----------------------
  const metrics = {
    count: 0, cx: 0.5, cy: 0.5,
    major: 0.1, minor: 0.1, angle: 0, aspect: 1,
    speed: 0, area: 0,
  };

  Shapes.metrics = function () {
    const Sim = GAME.Sim;
    let n = 0, mx = 0, my = 0, sp = 0;
    for (let i = 0; i < Sim.n; i += 3) {
      if (Sim.pKind[i]) continue;
      mx += Sim.px[i]; my += Sim.py[i];
      sp += Math.abs(Sim.pvx[i]) + Math.abs(Sim.pvy[i]);
      n++;
    }
    if (!n) { metrics.count = 0; return metrics; }
    mx /= n; my /= n;
    let sxx = 0, sxy = 0, syy = 0;
    for (let i = 0; i < Sim.n; i += 3) {
      if (Sim.pKind[i]) continue;
      const dx = Sim.px[i] - mx, dy = Sim.py[i] - my;
      sxx += dx * dx; sxy += dx * dy; syy += dy * dy;
    }
    sxx /= n; sxy /= n; syy /= n;
    const t = (sxx + syy) / 2, d = (sxx - syy) / 2;
    const rr = Math.hypot(d, sxy);
    const l0 = Math.max(t + rr, 1e-8), l1 = Math.max(t - rr, 1e-8);
    metrics.count = n;
    metrics.cx = mx; metrics.cy = my;
    metrics.major = 2 * Math.sqrt(l0);
    metrics.minor = 2 * Math.sqrt(l1);
    metrics.angle = 0.5 * Math.atan2(2 * sxy, sxx - syy);
    metrics.aspect = metrics.major / metrics.minor;
    metrics.speed = sp / n;
    metrics.area = Math.PI * metrics.major * metrics.minor;
    return metrics;
  };
  Shapes.lastMetrics = metrics;

  // ---- connected regions (did the scissors really split it?) ---------------
  // Coarse occupancy grid + iterative flood fill; called on demand only.
  Shapes.countRegions = function () {
    const Sim = GAME.Sim;
    const cell = Sim.dx * 2.2;
    const gw = Math.ceil(Sim.worldW / cell) + 2;
    const gh = Math.ceil(Sim.worldH / cell) + 2;
    const occ = new Uint8Array(gw * gh);
    for (let i = 0; i < Sim.n; i++) {
      if (Sim.pKind[i]) continue;
      const gx = U.clamp((Sim.px[i] / cell) | 0, 0, gw - 1);
      const gy = U.clamp((Sim.py[i] / cell) | 0, 0, gh - 1);
      occ[gy * gw + gx] = 1;
    }
    const stack = [];
    let regions = 0;
    const minCells = 5;
    for (let s = 0; s < occ.length; s++) {
      if (occ[s] !== 1) continue;
      let size = 0;
      stack.length = 0;
      stack.push(s);
      occ[s] = 2;
      while (stack.length) {
        const c = stack.pop();
        size++;
        const cx = c % gw, cy = (c / gw) | 0;
        if (cx > 0 && occ[c - 1] === 1) { occ[c - 1] = 2; stack.push(c - 1); }
        if (cx < gw - 1 && occ[c + 1] === 1) { occ[c + 1] = 2; stack.push(c + 1); }
        if (cy > 0 && occ[c - gw] === 1) { occ[c - gw] = 2; stack.push(c - gw); }
        if (cy < gh - 1 && occ[c + gw] === 1) { occ[c + gw] = 2; stack.push(c + gw); }
        // diagonals: keep blobs connected across corners
        if (cx > 0 && cy > 0 && occ[c - gw - 1] === 1) { occ[c - gw - 1] = 2; stack.push(c - gw - 1); }
        if (cx < gw - 1 && cy > 0 && occ[c - gw + 1] === 1) { occ[c - gw + 1] = 2; stack.push(c - gw + 1); }
        if (cx > 0 && cy < gh - 1 && occ[c + gw - 1] === 1) { occ[c + gw - 1] = 2; stack.push(c + gw - 1); }
        if (cx < gw - 1 && cy < gh - 1 && occ[c + gw + 1] === 1) { occ[c + gw + 1] = 2; stack.push(c + gw + 1); }
      }
      if (size >= minCells) regions++;
    }
    return Math.max(regions, 1);
  };

  // ---- painting -------------------------------------------------------------
  Shapes.paintBrush = function (x, y, r, rgb) {
    const Sim = GAME.Sim;
    const r2 = r * r;
    let hit = 0;
    for (let i = 0; i < Sim.n; i++) {
      const dx = Sim.px[i] - x, dy = Sim.py[i] - y;
      const d2 = dx * dx + dy * dy;
      if (d2 > r2) continue;
      const w = 1 - Math.sqrt(d2) / r;
      const k = Math.min(1, w * 1.6);
      Sim.pr[i] = U.lerp(Sim.pr[i], rgb[0], k);
      Sim.pg[i] = U.lerp(Sim.pg[i], rgb[1], k);
      Sim.pb[i] = U.lerp(Sim.pb[i], rgb[2], k);
      hit++;
    }
    return hit;
  };

  Shapes.paintShape = function (shape, cx, cy, s, rgb) {
    const Sim = GAME.Sim;
    let hit = 0;
    for (let i = 0; i < Sim.n; i++) {
      if (Sim.pKind[i]) continue;
      const dx = Sim.px[i] - cx, dy = Sim.py[i] - cy;
      if (dx * dx + dy * dy > s * s * 1.3) continue;
      if (!GAME.Colliders.shapeInside(shape, cx, cy, s, Sim.px[i], Sim.py[i])) continue;
      Sim.pr[i] = rgb[0]; Sim.pg[i] = rgb[1]; Sim.pb[i] = rgb[2];
      hit++;
    }
    return hit;
  };

  // How many material particles sit inside a cutter shape right now.
  Shapes.countInShape = function (shape, cx, cy, s) {
    const Sim = GAME.Sim;
    let hit = 0;
    for (let i = 0; i < Sim.n; i += 2) {
      if (Sim.pKind[i]) continue;
      if (GAME.Colliders.shapeInside(shape, cx, cy, s, Sim.px[i], Sim.py[i])) hit++;
    }
    return hit * 2;
  };

  GAME.Shapes = Shapes;
})();
