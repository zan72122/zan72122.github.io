'use strict';
/* ============================================================
   render.js — one frame, back to front, then additive light
   ============================================================ */

const Render = {
  fps: 60, fpsAcc: 0, fpsN: 0, debug: false,

  registerLights() {
    for (const s of G.stars) if (!s.hidden) s.registerLight();
    for (const p of G.allPlants()) p.registerLights();
    FX.veinLights();
    const fl = G.flower;
    if (fl && fl.bud > 0) {
      const c = fl.center();
      Lights.add(c.x, c.y, 0.4 + fl.core * 1.2 + fl.shine * 2, fl.size * 2.5, 'rose');
    }
    if (G.replay) Lights.add(G.replay.x, G.replay.y, 0.8, 2, 'warm');
  },

  groundPools(ctx) {
    for (const L of Lights.list) {
      if (L.i < 0.08) continue;
      if (L.x < Cam.left - 3 || L.x > Cam.right + 3) continue;
      const gy = terrainY(L.x);
      const h = L.y - gy;
      const reach = L.r * 2.2;
      if (h < -1.2 || h > reach) continue;
      const k = 1 - Math.max(0, h) / reach;
      const rx = L.r * (0.6 + Math.max(0, h) * 0.22), ry = rx * 0.42;
      const name = L.kind === 'plant' ? 'plant' : L.kind === 'rose' ? 'rose' : L.kind === 'window' ? 'window' : 'warm';
      ctx.globalAlpha = clamp01(L.i * 0.5 * k * k);
      ctx.drawImage(Glow.get(name), L.x - rx, gy - ry, rx * 2, ry * 2);
    }
    ctx.globalAlpha = 1;
  },

  drawClouds(ctx, front) {
    if (Cam.top < 13) return;
    for (const c of World.clouds) {
      if (!!c.front !== front) continue;
      const x = c.x + c.push;
      if (x + 9 < Cam.left || x - 9 > Cam.right || c.y + 4 < Cam.bottom || c.y - 4 > Cam.top) continue;
      const L = clamp01(Lights.at(x, c.y) * 0.5);
      ctx.fillStyle = css(mixc([118, 138, 170], [230, 214, 186], L), c.a);
      ctx.beginPath();
      for (const p of c.puffs) { ctx.moveTo(x + p.dx + p.r, c.y + p.dy); ctx.arc(x + p.dx, c.y + p.dy, p.r, 0, TAU); }
      ctx.fill();
      ctx.fillStyle = 'rgba(200,215,240,' + (c.a * 0.35).toFixed(3) + ')';
      ctx.beginPath();
      for (const p of c.puffs) { ctx.moveTo(x + p.dx + p.r * 0.6, c.y + p.dy + p.r * 0.3); ctx.arc(x + p.dx, c.y + p.dy + p.r * 0.3, p.r * 0.6, 0, TAU); }
      ctx.fill();
    }
  },

  drawReplay(ctx) {
    const r = G.replay;
    if (!r) return;
    const k = clamp01(r.t / 1.2);
    const pulse = 0.75 + 0.25 * Math.sin(G.time * 4);
    const sz = 22 / Cam.ppu;
    drawGlow(ctx, 'warm', r.x, r.y, sz * 5 * pulse, 0.8 * k);
    drawGlow(ctx, 'rose', r.x, r.y, sz * 2, 0.9 * k);
    ctx.globalAlpha = 1;
  },

  drawSeedBody(ctx) {
    const r = G.replay;
    if (!r) return;
    const sz = 16 / Cam.ppu;
    ctx.save();
    ctx.translate(r.x, r.y);
    ctx.rotate(G.time * 0.6);
    ctx.fillStyle = '#fff3cf';
    ctx.beginPath();
    for (let k = 0; k < 10; k++) {
      const a = PI / 2 + (k * PI) / 5, rr = k % 2 ? sz * 0.5 : sz;
      if (k) ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); else ctx.moveTo(Math.cos(a) * rr, Math.sin(a) * rr);
    }
    ctx.closePath(); ctx.fill();
    ctx.restore();
  },

  frame() {
    const ctx = View.ctx, t = G.time, g = G.gardener;
    Lights.clear();
    this.registerLights();

    // ---- sky (screen space) ----
    Cam.screen(ctx);
    ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
    Backdrop.drawSky(ctx, t);
    Backdrop.drawStars(ctx, t, G.wave ? { wave: G.wave, boost: 1 + (G.flower ? G.flower.shine * 0.6 : 0) } : null);
    Backdrop.drawMoon(ctx);
    Backdrop.drawHills(ctx, t);

    // ---- world ----
    Cam.world(ctx);
    World.buildPath();
    const far = clamp01((24 - Cam.ppu) / 14);
    World.drawAtmosphere(ctx, far);
    this.drawClouds(ctx, false);
    World.drawPlanet(ctx, far);
    World.drawHut(ctx, t);
    World.drawWaterBack(ctx);
    World.drawTerrain(ctx, t);
    World.drawPlanetLight(ctx, far);
    if (World.path) {
      ctx.save();
      ctx.clip(World.path);
      ctx.globalCompositeOperation = 'lighter';
      this.groundPools(ctx);
      FX.drawVeins(ctx);
      for (const s of G.stars) if (s.state === 'sinking' || s.state === 'planted') s.drawGlow(ctx);
      ctx.restore();
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    }
    World.drawRocks(ctx);
    const active = G.phase === 'carry' && G.primary ? G.primary.i : -1;
    World.drawSpots(ctx, t, active);
    FX.drawCracks(ctx);
    World.drawWaterFront(ctx, t);
    for (const r of G.roots) r.draw(ctx);
    for (let i = 0; i < G.plants.length; i++) G.plants[i].draw(ctx);
    if (G.giant) G.giant.draw(ctx);
    const movers = [{ x: g.x, y: g.y, r: 0.42, f: g.mode === 'route' ? 1 : 0 }];
    for (const s of G.stars) if (s.state === 'rest' || s.state === 'ground') movers.push({ x: s.x, y: s.y - s.R, r: 0.45, f: 0.9 });
    World.drawGrass(ctx, t, movers);
    for (const s of G.stars) if (!(s.state === 'carried' && g.carry === s)) s.draw(ctx);
    if (G.flower) G.flower.draw(ctx);
    g.draw(ctx);
    World.drawTufts(ctx, t);
    FX.drawSolid(ctx);
    this.drawSeedBody(ctx);
    this.drawClouds(ctx, true);

    // ---- light ----
    ctx.globalCompositeOperation = 'lighter';
    for (const p of G.allPlants()) p.drawAdd(ctx);
    for (const s of G.stars) if (s.state !== 'sinking' && s.state !== 'planted') s.drawGlow(ctx);
    const hx = HUT.x + 0.4, hy = terrainRaw(HUT.x) + 0.85;
    if (hx > Cam.left - 3 && hx < Cam.right + 3) drawGlow(ctx, 'window', hx, hy, 1.4, 0.45);
    FX.drawAdd(ctx);
    if (G.flower) G.flower.drawAdd(ctx);
    this.drawReplay(ctx);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;

    // ---- screen overlay ----
    Cam.screen(ctx);
    Backdrop.drawOverlay(ctx);
    if (G.fade > 0.001) {
      ctx.fillStyle = 'rgba(3,6,12,' + clamp01(G.fade).toFixed(3) + ')';
      ctx.fillRect(0, 0, View.W, View.H);
    }
    if (this.debug) {
      ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.font = '12px monospace';
      ctx.fillText(G.phase + ' ' + (G.cinema || '') + ' fps ' + this.fps.toFixed(0) + ' t ' + G.time.toFixed(1) + ' link ' + g.link + ':' + g.t.toFixed(2), 8, 16);
    }
  },
};
