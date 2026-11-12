// やわらかそざいあそび - colliders: the play tray walls, finger capsules and
// tool shapes. Colliders are consumed inside the MPM grid update (mpm.js);
// this file owns their geometry and per-frame state.
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const Colliders = {
    tray: { x0: 0.05, y0: 0.05, x1: 0.95, y1: 0.95, r: 0.07 },
    // Active touch colliders for the current frame.
    // Each: {ax,ay,bx,by (frame path in world), r, stick, mode, vx, vy}
    active: [],
    _prev: new Map(), // pointerId -> {x, y}
  };

  Colliders.setTray = function (x0, y0, x1, y1) {
    const t = Colliders.tray;
    t.x0 = x0; t.y0 = y0; t.x1 = x1; t.y1 = y1;
    t.r = Math.min(0.09, (x1 - x0) * 0.18, (y1 - y0) * 0.18);
  };

  // Signed distance to the rounded-rect tray interior (negative inside).
  Colliders.traySdf = function (x, y) {
    const t = Colliders.tray;
    const cx = (t.x0 + t.x1) * 0.5, cy = (t.y0 + t.y1) * 0.5;
    const hx = (t.x1 - t.x0) * 0.5 - t.r, hy = (t.y1 - t.y0) * 0.5 - t.r;
    const qx = Math.abs(x - cx) - hx, qy = Math.abs(y - cy) - hy;
    const ox = Math.max(qx, 0), oy = Math.max(qy, 0);
    return Math.hypot(ox, oy) + Math.min(Math.max(qx, qy), 0) - t.r;
  };

  // ---- tool definitions -----------------------------------------------------
  // mode 'drag'  : capsule that carries material (finger, roller)
  // mode 'cut'   : thin blade pushing material away from its swipe line
  // mode 'ring'  : cookie-cutter outline carving a groove (star/heart/flower)
  const TOOLS = {
    finger:  { mode: 'drag', r: 0.055, stickMul: 1.0 },
    roller:  { mode: 'drag', r: 0.150, stickMul: 0.45 },
    cut:     { mode: 'cut',  r: 0.030, stickMul: 0 },
    star:    { mode: 'ring', r: 0.170, shape: 'star' },
    heart:   { mode: 'ring', r: 0.160, shape: 'heart' },
    flower:  { mode: 'ring', r: 0.165, shape: 'flower' },
    // These are handled outside the grid (particle recolor / tracer spawn),
    // but still get a soft finger capsule so touching feels alive.
    stamp:   { mode: 'drag', r: 0.05, stickMul: 0.25 },
    paint:   { mode: 'drag', r: 0.05, stickMul: 0.25 },
    sprinkle:{ mode: 'drag', r: 0.045, stickMul: 0.15 },
  };
  Colliders.TOOLS = TOOLS;

  // Local shape SDFs for cookie cutters, unit-sized (call with p/scale).
  function sdStar(x, y) {
    // 5-pointed star via polar wobble (soft but plenty for a groove).
    const a = Math.atan2(y, x);
    const rr = Math.hypot(x, y);
    const k = 0.62 + 0.38 * Math.cos(a * 5 + Math.PI / 2);
    return rr - k;
  }
  function sdHeart(x, y) {
    // Classic implicit heart, y up; flip because world y is down.
    const px = x * 1.25, py = -y * 1.25 + 0.28;
    const v = px * px + (py - 0.5 * Math.sqrt(Math.abs(px))) ** 2;
    return Math.sqrt(v) - 0.62;
  }
  function sdFlower(x, y) {
    const a = Math.atan2(y, x);
    const rr = Math.hypot(x, y);
    const k = 0.72 + 0.28 * Math.cos(a * 6);
    return rr - k;
  }
  const SHAPE_SDF = { star: sdStar, heart: sdHeart, flower: sdFlower };

  // Ring SDF value for a cutter at (cx,cy) with scale s: |shape| gives the
  // distance to the outline; mpm pushes material along its gradient.
  Colliders.ringSdf = function (shape, cx, cy, s, x, y) {
    return SHAPE_SDF[shape]((x - cx) / s, (y - cy) / s) * s;
  };
  // Inside test for stamps / quest IoU checks.
  Colliders.shapeInside = function (shape, cx, cy, s, x, y) {
    return SHAPE_SDF[shape]((x - cx) / s, (y - cy) / s) < 0;
  };

  // ---- per-frame state ------------------------------------------------------
  // pointersWorld: [{id, x, y}] in world units. subAdvance: sim seconds the
  // frame will advance (substeps * dtSub) so pointer velocity maps into sim time.
  Colliders.update = function (pointersWorld, toolId, stick, subAdvance) {
    const tool = TOOLS[toolId] || TOOLS.finger;
    Colliders.active.length = 0;
    const seen = new Set();
    for (const p of pointersWorld) {
      seen.add(p.id);
      const prev = Colliders._prev.get(p.id) || { x: p.x, y: p.y };
      const adv = Math.max(subAdvance, 1e-5);
      const c = {
        ax: prev.x, ay: prev.y, bx: p.x, by: p.y,
        r: tool.r,
        mode: tool.mode,
        shape: tool.shape || null,
        stick: U.clamp(stick * (tool.stickMul == null ? 1 : tool.stickMul), 0, 1),
        vx: U.clamp((p.x - prev.x) / adv, -30, 30),
        vy: U.clamp((p.y - prev.y) / adv, -30, 30),
      };
      Colliders.active.push(c);
      Colliders._prev.set(p.id, { x: p.x, y: p.y });
    }
    for (const id of Colliders._prev.keys()) {
      if (!seen.has(id)) Colliders._prev.delete(id);
    }
  };

  GAME.Colliders = Colliders;
})();
