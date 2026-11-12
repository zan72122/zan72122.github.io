'use strict';
/* ============================================================
   main.js — boot, input, loop
   ============================================================ */

(function () {
  const params = new URLSearchParams(location.search);
  G.speed = clamp(parseFloat(params.get('speed')) || 1, 0.1, 8);
  Render.debug = params.has('debug');

  Glow.init();
  View.init();
  World.init();
  Backdrop.rebuild();
  View.onResize.push(() => Backdrop.rebuild());
  G.init();

  /* ---------- input: one finger, forgiving ---------- */
  const cv = View.cv;
  let down = null;
  cv.addEventListener('pointerdown', e => {
    e.preventDefault();
    Sound.init();
    if (down && down.id !== e.pointerId) return;   // ignore extra fingers
    try { cv.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    down = { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now(), moved: false, acc: 0, ly: e.clientY };
    G.tap(e.clientX, e.clientY);
  }, { passive: false });
  cv.addEventListener('pointermove', e => {
    if (!down || e.pointerId !== down.id) return;
    const dx = e.clientX - down.x, dy = e.clientY - down.y;
    if (!down.moved && Math.hypot(dx, dy) > 14) down.moved = true;
    if (down.moved) {
      down.acc += down.ly - e.clientY;
      down.ly = e.clientY;
      if (down.acc > 55) { down.acc = 0; G.dragStep(); }
    }
  });
  const up = e => {
    if (!down || e.pointerId !== down.id) return;
    const dx = e.clientX - down.x, dy = e.clientY - down.y, dt = performance.now() - down.t;
    if (down.moved) {
      G.drag(down.x, down.y, e.clientX, e.clientY, dt);
      if (dt < 420 && Math.hypot(dx, dy) > 40) G.swipe(dx, dy);
    }
    down = null;
  };
  cv.addEventListener('pointerup', up);
  cv.addEventListener('pointercancel', () => { down = null; });
  for (const ev of ['touchend', 'click', 'keydown']) window.addEventListener(ev, () => Sound.init(), { passive: true });
  document.addEventListener('visibilitychange', () => { if (document.hidden) Sound.suspend(); else Sound.resume(); });
  document.addEventListener('gesturestart', e => e.preventDefault());
  document.addEventListener('dblclick', e => e.preventDefault());
  document.addEventListener('contextmenu', e => e.preventDefault());

  /* ---------- loop ---------- */
  let last = performance.now();
  function frame(now) {
    let dt = (now - last) / 1000;
    last = now;
    if (!(dt > 0)) dt = 1 / 60;
    dt = Math.min(dt, 0.05) * G.speed;
    let rem = dt;
    while (rem > 1e-6) { const s = Math.min(rem, 0.05); G.update(s); rem -= s; }
    Render.fpsAcc += (now - (frame.prev || now)); Render.fpsN++;
    frame.prev = now;
    if (Render.fpsN >= 30) { Render.fps = 1000 / (Render.fpsAcc / Render.fpsN); Render.fpsAcc = 0; Render.fpsN = 0; }
    Render.frame();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  /* ---------- hooks for automated play-testing ---------- */
  window.SFG = {
    G, Cam, View, Route, SPOTS,
    tapWorld(x, y) { const s = Cam.toScreen(x, y); G.tap(s.x, s.y); return s; },
    state() {
      const g = G.gardener;
      const tp = G.primaryPos();
      return {
        phase: G.phase, cinema: G.cinema, t: G.time, fps: Render.fps, layout: View.layout,
        g: { x: g.x, y: g.y, link: g.link, t: g.t, mode: g.mode, busy: g.busy, carry: !!g.carry, act: !!g.act, goal: g.goal ? g.goal.link + ':' + g.goal.t.toFixed(2) : null, hop: !!g.hop },
        target: tp ? Object.assign({ wx: tp.x, wy: tp.y }, Cam.toScreen(tp.x, tp.y)) : null,
        gscreen: Cam.toScreen(g.x, g.y + 0.6),
        stars: G.stars.map(s => ({ state: s.state, x: s.x, y: s.y, small: s.small, big: s.big })),
        replayReady: !!(G.replay && G.replay.ready),
        round: G.round,
      };
    },
  };
})();
