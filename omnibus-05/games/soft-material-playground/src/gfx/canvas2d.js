// やわらかそざいあそび - Canvas2D fallback renderer (no WebGL2).
// CPU metaballs: particles splat into a small density/color buffer, a
// threshold turns it into a blob with simple two-tone shading, and the result
// is scaled up with image smoothing. Headless/ancient-device safety net.
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const Canvas2D = {};
  let ctx = null, canvas = null;
  let off = null, offCtx = null, img = null;
  let dens = null, colR = null, colG = null, colB = null;
  let ow = 0, oh = 0;
  const RES = 150; // low-res field long side

  Canvas2D.init = function (c) {
    canvas = c;
    ctx = canvas.getContext('2d');
    off = document.createElement('canvas');
    offCtx = off.getContext('2d');
  };

  Canvas2D.resize = function () {
    const R = GAME.Renderer;
    const aspect = R.cssW / R.cssH;
    if (aspect >= 1) { ow = RES; oh = Math.max(2, Math.round(RES / aspect)); }
    else { oh = RES; ow = Math.max(2, Math.round(RES * aspect)); }
    off.width = ow; off.height = oh;
    img = offCtx.createImageData(ow, oh);
    const n = ow * oh;
    dens = new Float32Array(n);
    colR = new Float32Array(n);
    colG = new Float32Array(n);
    colB = new Float32Array(n);
  };

  Canvas2D.render = function () {
    if (!ctx || !dens) return;
    const R = GAME.Renderer;
    const Sim = GAME.Sim;
    const worldW = R.worldW(), worldH = R.worldH();
    const sx = ow / worldW, sy = oh / worldH;

    dens.fill(0); colR.fill(0); colG.fill(0); colB.fill(0);

    // splat particles as 3x3 tent kernels
    for (let i = 0; i < Sim.n; i++) {
      if (Sim.pKind[i]) continue;
      const fx = Sim.px[i] * sx, fy = Sim.py[i] * sy;
      const cx = fx | 0, cy = fy | 0;
      for (let dy = -1; dy <= 1; dy++) {
        const yy = cy + dy;
        if (yy < 0 || yy >= oh) continue;
        for (let dx = -1; dx <= 1; dx++) {
          const xx = cx + dx;
          if (xx < 0 || xx >= ow) continue;
          const wx = 1 - Math.abs(fx - (xx + 0.5));
          const wy = 1 - Math.abs(fy - (yy + 0.5));
          const w = Math.max(0, wx) * Math.max(0, wy) * 1.4;
          if (w <= 0) continue;
          const idx = yy * ow + xx;
          dens[idx] += w;
          colR[idx] += w * Sim.pr[i];
          colG[idx] += w * Sim.pg[i];
          colB[idx] += w * Sim.pb[i];
        }
      }
    }

    // threshold + shade into the ImageData
    const data = img.data;
    const t = GAME.Colliders.tray;
    const bg = R.bgTint;
    for (let y = 0; y < oh; y++) {
      const wy = (y + 0.5) / sy;
      for (let x = 0; x < ow; x++) {
        const idx = y * ow + x;
        const o = idx * 4;
        const d = dens[idx];
        if (d > 0.55) {
          const inv = 1 / d;
          // edge darkening from local density (cheap normal-ish shading)
          const up = y > 0 ? dens[idx - ow] : 0;
          const shade = U.clamp(0.85 + (d - up) * 0.18, 0.7, 1.1);
          data[o] = U.clamp(colR[idx] * inv * shade, 0, 1) * 255;
          data[o + 1] = U.clamp(colG[idx] * inv * shade, 0, 1) * 255;
          data[o + 2] = U.clamp(colB[idx] * inv * shade, 0, 1) * 255;
          data[o + 3] = 255;
        } else {
          const wx = (x + 0.5) / sx;
          const inTray = wx > t.x0 && wx < t.x1 && wy > t.y0 && wy < t.y1;
          const k = inTray ? 1.12 : 0.94;
          data[o] = U.clamp(bg[0] * k, 0, 1) * 255;
          data[o + 1] = U.clamp(bg[1] * k, 0, 1) * 255;
          data[o + 2] = U.clamp(bg[2] * k, 0, 1) * 255;
          data[o + 3] = 255;
        }
      }
    }
    offCtx.putImageData(img, 0, 0);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'medium';
    ctx.drawImage(off, 0, 0, ow, oh, 0, 0, canvas.width, canvas.height);
  };

  GAME.Canvas2D = Canvas2D;
})();
