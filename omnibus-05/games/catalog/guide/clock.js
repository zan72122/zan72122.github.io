// A game-owned clock. Browser timers and browser APIs remain untouched.
(() => {
  const timers = new Map(), connections = new Set(), runningAudio = new Set(), runningAnimations = new Set();
  let sequence = 0, stoppedAt = 0, excludedTime = 0, open = false;
  const nativeSet = window.setTimeout.bind(window), nativeClear = window.clearTimeout.bind(window);
  const guide = window.GameGuide = {
    get open() { return open; },
    get paused() { return open || document.hidden; },
    now() { return (stoppedAt || performance.now()) - excludedTime; },
    connect(connection) { connections.add(connection); return () => connections.delete(connection); },
    inspect() { return [...connections].map(c => ({time:c.time?.(), audio:c.audio?.()?.state || 'unstarted'})); },
    setOpen(value) { open = value; synchronize(); },
  };
  function arm(timer) {
    timer.start = performance.now();
    timer.handle = nativeSet(() => {
      if (guide.paused) { timer.remaining = 0; return; }
      if (!timer.repeat) timers.delete(timer.id);
      timer.callback.apply(window,timer.args);
      if (timer.repeat && timers.has(timer.id)) { timer.remaining = timer.delay; arm(timer); }
    }, timer.remaining);
  }
  function schedule(callback, delay = 0, repeat = false, args = []) {
    const id = ++sequence;
    const timer = { id, callback, delay: Math.max(0, delay), remaining: Math.max(0, delay), repeat, args };
    timers.set(id, timer);
    if (!guide.paused) arm(timer);
    return id;
  }
  function cancel(id) {
    const timer = timers.get(id);
    if (timer) { nativeClear(timer.handle); timers.delete(id); }
  }
  guide.clock = {
    setTimeout: (fn, ms, ...args) => schedule(fn, ms, false, args),
    clearTimeout: cancel,
    setInterval: (fn, ms, ...args) => schedule(fn, Math.max(1, ms), true, args),
    clearInterval: cancel,
  };
  function synchronize() {
    const now = performance.now();
    if (guide.paused && !stoppedAt) {
      stoppedAt = now;
      for (const timer of timers.values()) {
        nativeClear(timer.handle);
        timer.remaining = Math.max(0, timer.remaining - (now - timer.start));
      }
      for (const connection of connections) {
        connection.cancelInput?.();
        const context = connection.audio?.();
        if (context?.state === 'running') { runningAudio.add(context); context.suspend().catch(() => {}); }
      }
      for (const animation of document.getAnimations?.() || []) {
        if (animation.playState === 'running') { runningAnimations.add(animation); animation.pause(); }
      }
    } else if (!guide.paused && stoppedAt) {
      excludedTime += now - stoppedAt;
      stoppedAt = 0;
      for (const timer of timers.values()) arm(timer);
      for (const context of runningAudio) if (context.state === 'suspended') context.resume().catch(() => {});
      runningAudio.clear();
      for (const animation of runningAnimations) animation.play();
      runningAnimations.clear();
    }
  }
  // Registered before the game's listeners: returning to a guide must not restart audio.
  document.addEventListener('visibilitychange', event => {
    synchronize();
    if (open) event.stopImmediatePropagation();
  }, true);
})();
