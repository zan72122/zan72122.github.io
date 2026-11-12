// やわらかそざいあそび - googly eyes & mouth that live on the blob.
// Position/rotation/squash come from the shape metrics (centroid +
// covariance ellipse); pupils are little spring-mass systems so they jiggle
// with every poke. Expressions react to what the child is doing.
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const Face = {
    enabled: true,
    expression: 'idle', // idle | squish | stretch | happy | dizzy
    _blink: 0,          // 0..1 closed amount
    _blinkT: 2.5,
    _px: 0.5, _py: 0.4, // smoothed face center (world)
    _ang: 0,
    _p1x: 0, _p1y: 0, _p1vx: 0, _p1vy: 0, // pupil springs (offset in eye-local)
    _p2x: 0, _p2y: 0, _p2vx: 0, _p2vy: 0,
    _lastCx: 0.5, _lastCy: 0.4,
    _happy: 0,
    _exprT: 0,
  };

  Face.toggle = function () { Face.enabled = !Face.enabled; return Face.enabled; };

  Face.update = function (dt, metrics, events) {
    if (!Face.enabled || !metrics.count) return;

    // face rides a bit above the centroid
    const tx = metrics.cx;
    const ty = metrics.cy - metrics.minor * 0.14;
    Face._px = U.damp(Face._px, tx, 10, dt);
    Face._py = U.damp(Face._py, ty, 10, dt);
    // keep the face mostly upright, tilting a little with the blob
    let a = metrics.angle;
    if (a > Math.PI / 2) a -= Math.PI;
    if (a < -Math.PI / 2) a += Math.PI;
    Face._ang = U.damp(Face._ang, U.clamp(a * 0.35, -0.5, 0.5), 6, dt);

    // pupils: spring toward center, kicked by blob acceleration
    const ax = (metrics.cx - Face._lastCx) / Math.max(dt, 1e-3);
    const ay = (metrics.cy - Face._lastCy) / Math.max(dt, 1e-3);
    Face._lastCx = metrics.cx; Face._lastCy = metrics.cy;
    const kick = 3.2;
    for (const s of ['1', '2']) {
      let x = Face['_p' + s + 'x'], y = Face['_p' + s + 'y'];
      let vx = Face['_p' + s + 'vx'], vy = Face['_p' + s + 'vy'];
      vx += (-x * 120 - vx * 9) * dt - ax * kick * dt;
      vy += (-y * 120 - vy * 9) * dt - ay * kick * dt;
      x = U.clamp(x + vx * dt, -0.45, 0.45);
      y = U.clamp(y + vy * dt, -0.45, 0.45);
      Face['_p' + s + 'x'] = x; Face['_p' + s + 'y'] = y;
      Face['_p' + s + 'vx'] = vx; Face['_p' + s + 'vy'] = vy;
    }

    // blink timer
    Face._blinkT -= dt;
    if (Face._blinkT <= 0) {
      Face._blinkT = 1.8 + Math.random() * 3.4;
    }
    const closing = Face._blinkT < 0.12 ? 1 : 0;
    Face._blink = U.damp(Face._blink, closing, 22, dt);

    // expression logic
    Face._exprT -= dt;
    const squished = metrics.aspect > 2.0 && metrics.minor < 0.09;
    const stretched = metrics.aspect > 2.6;
    const busy = events.deformRate > 1.2;
    const petted = events.touching > 0.15 && events.deformRate < 0.9;
    if (petted) Face._happy = Math.min(1, Face._happy + dt * 2.5);
    else Face._happy = Math.max(0, Face._happy - dt * 0.8);

    if (GAME.Motion.shakeEnergy > 0.4) { Face.expression = 'dizzy'; Face._exprT = 0.6; }
    else if (squished && busy) { Face.expression = 'squish'; Face._exprT = 0.5; }
    else if (stretched) { Face.expression = 'stretch'; Face._exprT = 0.4; }
    else if (Face._happy > 0.5) { Face.expression = 'happy'; }
    else if (Face._exprT <= 0) { Face.expression = 'idle'; }
  };

  Face.render = function (ctx, metrics) {
    if (!Face.enabled || !metrics.count) return;
    const R = GAME.Renderer;
    const s = R.scaleCss; // css px per world
    const cx = Face._px * s, cy = Face._py * s;
    const size = U.clamp(metrics.minor * 0.5, 0.045, 0.11) * s;
    const gap = size * 1.15;
    const expr = Face.expression;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Face._ang);
    // squash eyes with the blob
    const sq = U.clamp(1 / Math.sqrt(metrics.aspect), 0.6, 1.05);
    ctx.scale(1, sq);

    const eyeH = size * (expr === 'stretch' ? 1.25 : 1) * (1 - Face._blink * 0.92);
    const eyeW = size * (expr === 'squish' ? 1.15 : 1);

    for (const side of [-1, 1]) {
      const ex = side * gap;
      const pox = side === -1 ? Face._p1x : Face._p2x;
      const poy = side === -1 ? Face._p1y : Face._p2y;
      // white
      ctx.fillStyle = 'rgba(255,255,255,0.96)';
      ctx.beginPath();
      ctx.ellipse(ex, 0, eyeW, Math.max(eyeH, size * 0.08), 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(60,40,60,0.18)';
      ctx.lineWidth = size * 0.08;
      ctx.stroke();
      if (Face._blink < 0.7) {
        // pupil (dizzy = swirly offset)
        let px = pox, py = poy;
        if (expr === 'dizzy') {
          const t = performance.now() * 0.02;
          px += Math.cos(t + side) * 0.3;
          py += Math.sin(t * 1.3 + side) * 0.3;
        }
        const pr = size * (expr === 'stretch' ? 0.32 : 0.42);
        ctx.fillStyle = '#3a2b3a';
        ctx.beginPath();
        ctx.arc(ex + px * size, py * size * 0.8, pr, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.beginPath();
        ctx.arc(ex + px * size - pr * 0.3, py * size * 0.8 - pr * 0.35, pr * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // blush when squished or happy
    if (expr === 'squish' || expr === 'happy') {
      ctx.fillStyle = 'rgba(255,120,150,0.35)';
      for (const side of [-1, 1]) {
        ctx.beginPath();
        ctx.ellipse(side * gap * 1.75, size * 0.75, size * 0.55, size * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // mouth
    const my = size * 1.15;
    ctx.strokeStyle = '#3a2b3a';
    ctx.lineCap = 'round';
    ctx.lineWidth = size * 0.16;
    ctx.beginPath();
    if (expr === 'stretch' || expr === 'dizzy') {
      // surprised o
      ctx.ellipse(0, my, size * 0.32, size * (expr === 'dizzy' ? 0.28 : 0.45), 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(90,50,70,0.75)';
      ctx.fill();
    } else if (expr === 'squish') {
      // puffed >w< mouth
      ctx.moveTo(-size * 0.5, my);
      ctx.quadraticCurveTo(0, my - size * 0.35, size * 0.5, my);
    } else if (expr === 'happy' || Face._happy > 0.3) {
      // big open smile
      ctx.moveTo(-size * 0.6, my - size * 0.1);
      ctx.quadraticCurveTo(0, my + size * 0.7, size * 0.6, my - size * 0.1);
    } else {
      // gentle smile
      ctx.moveTo(-size * 0.42, my);
      ctx.quadraticCurveTo(0, my + size * 0.35, size * 0.42, my);
    }
    ctx.stroke();
    ctx.restore();
  };

  GAME.Face = Face;
})();
