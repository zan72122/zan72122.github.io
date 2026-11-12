/**
 * Deterministic control surface used by screenshot and diagnostics tools.
 * Keeping it separate prevents production startup changes from bloating the
 * application shell.
 */
export function installHarness(app) {
  app._harnessDriven = true;
  const raf = () => new Promise(resolve => requestAnimationFrame(resolve));

  const game = {
    ready: false,
    app,

    async reset() {
      if (app.activity) {
        await app.activity.exit?.();
        app.activity.dispose?.();
        app.activity = null;
        app._auditDispose();
      }
      app.activityName = '';
      app.cameraRig.restorePresets();
      app.cameraRig.setSubject(null);
      app.state.reset();
      app.time = 0;
      app.baby.reset?.();
      app.room.reset?.();
      app.fx.clear();
      await this.setScene('play');
    },

    async setScene(name) {
      await app.setActivity(name);
    },

    async setState(patch) {
      app.state.patch(patch);
      app.activity?.onState?.(patch);
      app.baby.onState?.(patch);
      app.room.onState?.(patch);
    },

    async setCamera(preset) {
      app.cameraRig.goTo(preset, 0);
    },

    setHud(visible) {
      document.getElementById('hud')?.classList.toggle('harness-hidden', !visible);
      document.getElementById('title-screen')?.classList.add('hidden');
    },

    async warm(seconds) {
      const dt = 1 / 60;
      const count = Math.max(1, Math.round(seconds / dt));
      const renderAt = new Set([Math.max(0, count - 10), count - 1]);
      for (let index = 0; index < count; index++) {
        app.step(dt);
        if (renderAt.has(index)) app.render(dt, true);
      }
    },

    async settle() {
      for (let index = 0; index < 2; index++) {
        app.render(1 / 60, true);
        await raf();
      }
    },

    leaks() { return (app.leakLog || []).slice(); },

    stats() {
      const info = app.renderer.info;
      let nodes = 0;
      app.scene.traverse(() => nodes++);
      return {
        tier: app.tier,
        quality: app.quality,
        nodes,
        calls: info.render.calls,
        triangles: info.render.triangles,
        textures: info.memory.textures,
        geometries: info.memory.geometries,
        programs: app.renderer.info.programs?.length ?? 0
      };
    }
  };

  window.__GAME__ = game;
  requestAnimationFrame(() => { game.ready = true; });
}
