// Main loop and draw order of the diorama.
(function () {
  'use strict';
  const G = K.girl;

  K.restartWorld = function () {
    K.clearTimers();
    K.P.list.length = 0;
    K.world.puddles.length = 0; K.world.prints.length = 0;
    K.world.build();
    G.reset();
    K.plaza.reset(); K.fire.reset(); K.mech.reset(); K.cook.reset(); K.lake.reset();
    K.Spray.detach();
    K.world.under = false;
    K.sfx.stopLoops();
    K.cam.rate = 2.2;
    K.plaza.slow = false;
  };

  K.update = function (dt) {
    K.time += dt;
    K.runTimers();
    K.story.update(dt);
    G.update(dt);
    K.world.update(dt);
    K.plaza.update(dt); K.fire.update(dt); K.mech.update(dt); K.cook.update(dt); K.lake.update(dt);
    K.Spray.update(dt);
    K.P.update(dt);
    K.cam.update(dt);
  };

  function held() {
    return [K.fire.coat, K.mech.suit, K.cook.jacket, K.cook.wetsuit].filter((it) => it && (it.state === 'drag' || it.state === 'fly'));
  }

  K.render = function () {
    const ctx = K.ctx;
    K.world.drawSky(ctx);
    K.cam.apply(ctx);
    K.world.drawBackdrop(ctx);
    K.world.drawSoil(ctx);
    K.world.drawTunnel(ctx);
    K.plaza.drawBack(ctx); K.fire.drawBack(ctx); K.mech.drawBack(ctx); K.cook.drawBack(ctx); K.lake.drawBack(ctx);
    K.world.drawFloors(ctx);
    K.world.drawMarks(ctx);
    K.world.drawProps(ctx);
    K.P.draw(ctx, 'back');
    K.fire.drawMid(ctx); K.mech.drawMid(ctx); K.cook.drawMid(ctx); K.lake.drawMid(ctx);
    G.draw(ctx);
    K.Spray.draw(ctx);
    K.mech.drawFront(ctx);
    K.plaza.drawFront(ctx); K.fire.drawFront(ctx); K.lake.drawFront(ctx);
    K.P.draw(ctx, 'front');
    for (const it of held()) it.draw(ctx);
    if (K.fade > 0.005) {
      ctx.setTransform(K.dpr, 0, 0, K.dpr, 0, 0);
      ctx.fillStyle = 'rgba(28,20,16,' + K.fade.toFixed(3) + ')';
      ctx.fillRect(0, 0, K.W, K.H);
    }
    K.drawGrain(ctx);
    if (K.debug) {
      ctx.setTransform(K.dpr, 0, 0, K.dpr, 0, 0);
      ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(0, 0, 250, 54);
      ctx.fillStyle = '#fff'; ctx.font = '12px monospace';
      ctx.fillText(K.story.name + '  t=' + K.story.t.toFixed(1), 8, 16);
      ctx.fillText('mass=' + G.mass.toFixed(0) + ' T=' + G.T.toFixed(1) + ' fps=' + fps.toFixed(0), 8, 32);
      ctx.fillText('plate=' + K.plaza.d.toFixed(1) + ' rise=' + K.plaza.rise.toFixed(0), 8, 48);
    }
  };

  // ---- test hooks (used by the automated playthrough) ----
  K.test = {
    beat: () => K.story.name,
    scr: (x, y) => K.cam.toScreen(x, y),
    girl: () => { const c = G.center(); return K.cam.toScreen(c.x, c.y); },
  };

  let last = performance.now(), fps = 60;
  function frame(now) {
    let dt = (now - last) / 1000;
    last = now;
    if (dt > 0) fps = K.follow(fps, 1 / dt, 3, dt);
    dt = Math.min(dt, 1 / 15) * K.timeScale;
    const n = Math.max(1, Math.ceil(dt / (1 / 60)));
    for (let i = 0; i < n; i++) K.update(dt / n);
    K.render();
    requestAnimationFrame(frame);
  }
  K.story.go('intro');
  requestAnimationFrame(frame);
})();
