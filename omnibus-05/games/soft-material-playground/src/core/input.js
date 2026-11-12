// やわらかそざいあそび - multi-touch input (Pointer Events).
// Tracks up to 6 simultaneous pointers with smoothed velocities in CSS pixels.
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const Input = {
    // Map<pointerId, pointer>
    pointers: new Map(),
    maxPointers: 6,
    _firstCbs: [],
    _anyCbs: [],
  };

  function makePointer(id, x, y) {
    return {
      id, x, y, px: x, py: y,       // current / previous CSS px
      vx: 0, vy: 0,                 // smoothed CSS px/sec
      downX: x, downY: y,
      down: true,
      age: 0,
      moved: 0,                     // accumulated travel px
    };
  }

  // Called by GAME.boot once the canvas exists.
  Input.attach = function (el) {
    let firstFired = false;

    const onDown = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (Input.pointers.size >= Input.maxPointers) return;
      el.setPointerCapture && el.setPointerCapture(e.pointerId);
      Input.pointers.set(e.pointerId, makePointer(e.pointerId, e.clientX, e.clientY));
      if (!firstFired) {
        firstFired = true;
        for (const cb of Input._firstCbs) cb();
      }
      for (const cb of Input._anyCbs) cb(e);
      e.preventDefault();
    };
    const onMove = (e) => {
      const p = Input.pointers.get(e.pointerId);
      if (!p) return;
      // Coalesced events give us the fine-grained touch path on iOS.
      const evts = e.getCoalescedEvents ? e.getCoalescedEvents() : null;
      const last = evts && evts.length ? evts[evts.length - 1] : e;
      p.moved += Math.hypot(last.clientX - p.x, last.clientY - p.y);
      p.x = last.clientX;
      p.y = last.clientY;
      e.preventDefault();
    };
    const onUp = (e) => {
      Input.pointers.delete(e.pointerId);
    };

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove, { passive: false });
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
    el.addEventListener('lostpointercapture', onUp);

    // Kill iOS pinch-zoom / double-tap zoom on the whole app.
    document.addEventListener('gesturestart', (e) => e.preventDefault());
    document.addEventListener('dblclick', (e) => e.preventDefault());
    el.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  };

  // Per-frame velocity bookkeeping.
  Input.update = function (dt) {
    if (dt <= 0) return;
    for (const p of Input.pointers.values()) {
      const nvx = (p.x - p.px) / dt;
      const nvy = (p.y - p.py) / dt;
      p.vx = U.damp(p.vx, nvx, 26, dt);
      p.vy = U.damp(p.vy, nvy, 26, dt);
      p.px = p.x;
      p.py = p.y;
      p.age += dt;
    }
  };

  // Synthetic pointers for the smoke test (bypasses DOM events).
  Input.injectForTest = function (id, x, y, down) {
    if (down) {
      const p = Input.pointers.get(id);
      if (p) { p.x = x; p.y = y; }
      else {
        Input.pointers.set(id, makePointer(id, x, y));
        for (const cb of Input._anyCbs) cb({ clientX: x, clientY: y });
      }
    } else {
      Input.pointers.delete(id);
    }
  };

  Input.onFirstPointer = (cb) => Input._firstCbs.push(cb);
  Input.onAnyPointer = (cb) => Input._anyCbs.push(cb);

  GAME.Input = Input;
})();
