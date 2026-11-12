// やわらかそざいあそび - boot, layout and the main loop.
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const Game = {
    state: 'title',
    time: 0,
    fps: 60,
    simMs: 0,
  };

  let canvas = null, fxCanvas = null, fxCtx = null;
  let lastT = 0;
  let prevPointerIds = new Set();
  let touchMaxAspect = 1;
  let sprinkleT = 0;
  let govFrames = 0;
  let debugEl = null;

  function layout() {
    // If anything scrolled the (overflow:hidden) document, pin it back:
    // a scrolled page shifts every absolutely-positioned layer off-screen.
    if (window.scrollX || window.scrollY) window.scrollTo(0, 0);
    if (document.documentElement.scrollTop) document.documentElement.scrollTop = 0;
    const cssW = window.innerWidth;
    const cssH = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    const R = GAME.Renderer;
    R.resize(cssW, cssH, dpr);

    fxCanvas.width = Math.round(cssW * Math.min(dpr, 2));
    fxCanvas.height = Math.round(cssH * Math.min(dpr, 2));
    fxCtx.setTransform(Math.min(dpr, 2), 0, 0, Math.min(dpr, 2), 0, 0);

    const s = R.scaleCss;
    const worldW = cssW / s, worldH = cssH / s;
    const res = GAME.Sim.setWorld(worldW, worldH);

    // tray between the top bar and the dock
    const topPx = GAME.HUD.topHeight() + 10;
    const dockPx = GAME.HUD.dockHeight() + 12;
    const sidePx = 10;
    GAME.Colliders.setTray(
      sidePx / s,
      topPx / s,
      worldW - sidePx / s,
      worldH - dockPx / s
    );
    if (res.changed && GAME.Sim.n > 0) {
      GAME.Sim.remapParticles(res.oldTray);
    }
    GAME.DEBUG.layout = cssW >= cssH ? 'landscape' : 'portrait';
  }

  // Fired on every fresh touch (event-driven so even the fastest taps count).
  function onPointerDown(e) {
    if (Game.state !== 'play') return;
    const HUD = GAME.HUD;
    const tool = HUD.tool;
    GAME.FX.ripple(e.clientX, e.clientY);
    const w = GAME.Renderer.toWorld(e.clientX, e.clientY);
    if (tool === 'finger') GAME.Quests.notify('poke');
    if (tool === 'star' || tool === 'heart' || tool === 'flower') {
      const r = GAME.Colliders.TOOLS[tool].r;
      if (GAME.Shapes.countInShape(tool, w.x, w.y, r) > 80) {
        GAME.Quests.notify('cutter', tool);
        GAME.Audio.pluck(5, 0.14);
      }
    }
  }

  // ---- per-frame tool actions (outside the grid solver) ---------------------
  function toolActions(dt, pointersWorld) {
    const HUD = GAME.HUD;
    const Sim = GAME.Sim;
    const tool = HUD.tool;

    const currentIds = new Set();
    for (const p of GAME.Input.pointers.values()) currentIds.add(p.id);

    // released everything? maybe boing
    if (prevPointerIds.size > 0 && currentIds.size === 0) {
      const snd = Sim.material.sound.type;
      if ((snd === 'bounce' || snd === 'slime') && touchMaxAspect > 1.7) {
        GAME.Squish.boing((touchMaxAspect - 1.7) / 1.3);
      }
      touchMaxAspect = 1;
    }
    prevPointerIds = currentIds;

    // continuous tools
    for (const pw of pointersWorld) {
      if (tool === 'paint') {
        const hits = GAME.Shapes.paintBrush(pw.x, pw.y, 0.078, HUD.colorRgb);
        if (hits) GAME.Quests.notify('painted', hits);
      } else if (tool === 'sprinkle') {
        sprinkleT -= dt;
        if (sprinkleT <= 0) {
          sprinkleT = 0.05;
          const hueList = ['#ff6f9c', '#ffd24d', '#6fd3ff', '#8ce88a', '#c99cff', '#ff9c6f'];
          const rgb = U.hexToRgb(hueList[(Math.random() * hueList.length) | 0]);
          const jx = (Math.random() - 0.5) * 0.06;
          const jy = (Math.random() - 0.5) * 0.06;
          if (Sim.addTopping(pw.x + jx, pw.y + jy, rgb)) {
            GAME.Quests.notify('sprinkle');
          }
        }
      }
    }

    // sparkles fly while kneading hard
    if (Sim.events.deformRate > 1.4 && pointersWorld.length && Math.random() < dt * 9) {
      const pw = pointersWorld[(Math.random() * pointersWorld.length) | 0];
      const css = GAME.Renderer.toCss(pw.x, pw.y);
      GAME.FX.sparkle(css.x + (Math.random() - 0.5) * 50, css.y - 20 - Math.random() * 40);
    }
  }

  function loop(t) {
    requestAnimationFrame(loop);
    const dt = U.clamp((t - lastT) / 1000, 0.001, 0.05);
    lastT = t;
    Game.time += dt;
    Game.fps = U.damp(Game.fps, 1 / dt, 2, dt);

    GAME.Input.update(dt);
    GAME.Motion.update(dt);

    const Sim = GAME.Sim;

    if (Game.state === 'play') {
      // pointer -> world colliders
      const pointersWorld = [];
      for (const p of GAME.Input.pointers.values()) {
        const w = GAME.Renderer.toWorld(p.x, p.y);
        pointersWorld.push({ id: p.id, x: w.x, y: w.y });
      }
      const subAdvance = Sim.substeps * Sim.dtSub;
      GAME.Colliders.update(pointersWorld, GAME.HUD.tool,
        Sim.material.phys.stick, subAdvance);

      const t0 = performance.now();
      Sim.frame();
      Game.simMs = U.damp(Game.simMs, performance.now() - t0, 4, dt);

      toolActions(dt, pointersWorld);

      const metrics = GAME.Shapes.metrics();
      if (GAME.Input.pointers.size > 0) {
        touchMaxAspect = Math.max(touchMaxAspect, metrics.aspect);
      }
      GAME.Face.update(dt, metrics, Sim.events);
      GAME.Squish.update(dt, Game.time);
      GAME.Quests.update(dt);

      // perf governor: keep sim under ~8ms, recover when idle
      if (++govFrames >= 90) {
        govFrames = 0;
        if (Game.simMs > 8.5 && Sim.governor > 0.55) {
          Sim.governor = Math.max(0.55, Sim.governor - 0.12);
          Sim.retime();
        } else if (Game.simMs < 4.5 && Sim.governor < 1.0) {
          Sim.governor = Math.min(1.0, Sim.governor + 0.08);
          Sim.retime();
        }
      }
    }

    // draw
    GAME.Renderer.render(Game.time);
    fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
    if (Game.state === 'play') {
      GAME.FX.update(dt);
      GAME.FX.render(fxCtx);
      GAME.Face.render(fxCtx, GAME.Shapes.lastMetrics);
    }

    if (debugEl && (Sim.frameCount & 15) === 0) {
      debugEl.textContent =
        'fps ' + Game.fps.toFixed(0) +
        ' | sim ' + Game.simMs.toFixed(1) + 'ms' +
        ' | n ' + Sim.n +
        ' | sub ' + Sim.substeps + '@' + (Sim.dtSub * 1e4).toFixed(1) + 'e-4' +
        ' | gov ' + Sim.governor.toFixed(2) +
        ' | ' + Sim.material.id;
    }
  }

  GAME.boot = function () {
    try {
      canvas = document.getElementById('game-canvas');
      fxCanvas = document.getElementById('fx-canvas');
      fxCtx = fxCanvas.getContext('2d');
      const uiRoot = document.getElementById('ui-root');

      const quality = U.params.quality === 'low' ? 'low' : 'high';
      const seed = parseInt(U.params.seed || '0', 10) || ((Math.random() * 1e9) | 0);

      GAME.Sim.init(seed, quality);
      GAME.Renderer.init(canvas);
      GAME.Input.attach(canvas);
      GAME.Motion.init();
      GAME.HUD.build(uiRoot);
      GAME.Screens.build(uiRoot, () => { Game.state = 'play'; layout(); });
      window.addEventListener('scroll', () => {
        if (window.scrollX || window.scrollY) window.scrollTo(0, 0);
      }, { passive: true });
      GAME.Quests.init();

      layout();
      GAME.HUD.selectMaterial('jelly');

      window.addEventListener('resize', () => { layout(); });
      if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', () => { layout(); });
      }
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) GAME.Audio.resume();
      });
      GAME.Input.onFirstPointer(() => {
        GAME.Audio.resume();
        GAME.Squish.start();
      });
      GAME.Input.onAnyPointer(onPointerDown);

      if (U.params.debug) {
        debugEl = document.createElement('div');
        debugEl.style.cssText =
          'position:absolute;left:8px;bottom:2px;font:11px monospace;' +
          'color:#7a4a66;background:rgba(255,255,255,.7);padding:2px 6px;' +
          'border-radius:6px;z-index:50;pointer-events:none;';
        uiRoot.appendChild(debugEl);
      }

      GAME.Game = Game;
      GAME.ready = true;
      requestAnimationFrame((t) => { lastT = t; requestAnimationFrame(loop); });
    } catch (err) {
      console.error('boot failed:', err);
      if (GAME.Screens && GAME.Screens.showError) GAME.Screens.showError(err.message);
      throw err;
    }
  };
})();
