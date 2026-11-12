import { PrimaryPointer } from './primary-pointer.js';

function bindPointer(app, canvas) {
  const primary = new PrimaryPointer();
  let lastEvent = null;

  const send = (type, event) => {
    const pointer = { x: event.clientX, y: event.clientY, type, raw: event };
    app.ui.onPointer?.(pointer);
    // A demonstration owns the semantic step until it settles. Mixing a real
    // drag into it can double rewards or leave an object half-held.
    if (!app.ui?.assistRunner?.busy) app.activity?.onPointer?.(pointer);
  };
  const finish = (type, event) => {
    if (!primary.owns(event)) return;
    send(type, event);
    primary.release(event);
    if (canvas.hasPointerCapture?.(event.pointerId)) {
      canvas.releasePointerCapture?.(event.pointerId);
    }
    lastEvent = null;
  };
  const cancelActive = () => {
    if (lastEvent && primary.owns(lastEvent)) send('cancel', lastEvent);
    const pointerId = primary.pointerId;
    primary.reset();
    if (pointerId !== null && canvas.hasPointerCapture?.(pointerId)) {
      canvas.releasePointerCapture?.(pointerId);
    }
    lastEvent = null;
  };

  canvas.addEventListener('pointerdown', event => {
    if (!primary.claim(event)) return;
    lastEvent = event;
    canvas.setPointerCapture?.(event.pointerId);
    send('down', event);
  });
  canvas.addEventListener('pointermove', event => {
    if (!primary.owns(event)) return;
    lastEvent = event;
    send('move', event);
  });
  canvas.addEventListener('pointerup', event => finish('up', event));
  canvas.addEventListener('pointercancel', event => finish('cancel', event));
  canvas.addEventListener('lostpointercapture', event => {
    if (!primary.owns(event)) return;
    send('cancel', event);
    primary.release(event);
    lastEvent = null;
  });

  return cancelActive;
}

function bindContextRecovery(app, canvas) {
  canvas.addEventListener('webglcontextlost', event => {
    event.preventDefault();
    document.documentElement.dataset.webglRecovery = 'lost';
    app._contextLost = true;
    app._paused = true;
    app.performanceTelemetry?.noteContextLost?.();
    app.ui?.showRecovery?.('がめんを なおしているよ…');
    clearTimeout(app._contextRecoveryTimer);
    app._contextRecoveryTimer = setTimeout(() => {
      if (!app._contextLost) return;
      document.documentElement.dataset.webglRecovery = 'timeout';
      app.ui?.showRecovery?.('がめんを なおせませんでした', { reload: true });
    }, 4000);
  });
  canvas.addEventListener('webglcontextrestored', async () => {
    clearTimeout(app._contextRecoveryTimer);
    try {
      app.pipeline.recover();
      app.fx.setDepthTexture?.(
        app.pipeline.depthResolve.texture, app.camera.near, app.camera.far);
      await app.renderer.compileAsync(app.scene, app.camera);
      app.ui?.hideRecovery?.();
    } catch (error) {
      document.documentElement.dataset.webglRecovery = 'failed';
      console.error('[webgl] recovery failed', error);
      app.ui?.showRecovery?.('もういちど よみこんでね', { reload: true });
      return;
    }
    app._contextLost = false;
    app._paused = app._pageHidden;
    app.clock.getDelta();
    document.documentElement.dataset.webglRecovery = 'restored';
  });
}

function bindStallWatchdog(app) {
  if (!app.touchEnvironment) return;
  app._stallWatchdog = setInterval(() => {
    if (app.mode !== 'play' || app._pageHidden || app._contextLost || app._paused) return;
    const stalledFor = performance.now() - app._lastFrameCompletedAt;
    if (stalledFor >= 2000) app._reportRenderStall?.(stalledFor);
  }, 750);
}

/** Connect pointer, page/audio and WebGL lifecycle contracts to one canvas. */
export function installAppLifecycle(app, canvas) {
  const cancelPointer = bindPointer(app, canvas);
  bindContextRecovery(app, canvas);
  bindStallWatchdog(app);

  const pausePage = () => {
    app._pageHidden = true;
    app._paused = true;
    cancelPointer();
    Promise.resolve(app.audio?.suspend?.()).catch(() => {});
  };
  const resumePage = () => {
    app._pageHidden = Boolean(document.hidden);
    app._paused = app._pageHidden || app._contextLost;
    if (app._pageHidden) return;
    app.clock.getDelta();
    Promise.resolve(app.audio?.resume?.()).catch(() => {});
  };
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pausePage();
    else resumePage();
  });
  addEventListener('pagehide', pausePage);
  addEventListener('pageshow', resumePage);
}
