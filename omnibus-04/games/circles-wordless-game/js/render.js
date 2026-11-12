(function () {
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  const easeInOut = t => t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;
  function draw(g) {
    const { ctx, W, H, now, lastTouch, level, levelIndex, ents, player, rings, ghost,
      bgColor, box, phase, particles, pointer, detached, starColors } = g;
    const Laws = window.Laws, hexA = Laws.hexA;
  // ---------- 描画 ----------
  function drawCircle(e, scale, dent) {
    const r = e.r * (scale == null ? 1 : scale);
    if (r <= 0.5) return;
    ctx.save();
    ctx.translate(e.x, e.y);
    if (dent && dent.amt > 0) { // 壁の凹み: 押された方向に少し潰れる
      const a = Math.atan2(dent.ny, dent.nx);
      ctx.rotate(a); ctx.scale(1 - dent.amt * 0.08, 1 + dent.amt * 0.04); ctx.rotate(-a);
    }
    ctx.shadowColor = 'rgba(0,0,0,0.16)'; ctx.shadowBlur = r * 0.5; ctx.shadowOffsetY = r * 0.18;
    ctx.fillStyle = e.color;
    ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
    ctx.shadowColor = 'transparent';
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.beginPath(); ctx.ellipse(-r * 0.3, -r * 0.35, r * 0.38, r * 0.26, -0.6, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  function drawRing(rg) {
    const breath = rg.filled ? 1 : 1 + 0.035 * Math.sin(now * 2.2);
    const r = rg.r * breath;
    const col = rg.filled ? rg.filled.color : ringTargetColor(rg);
    ctx.save();
    if (rg.glow > 0.01) { ctx.shadowColor = hexA(col, rg.glow); ctx.shadowBlur = r * 0.9 * rg.glow; }
    ctx.lineWidth = r * 0.16 * (1 + 0.3 * rg.glow);
    ctx.strokeStyle = hexA(col, 0.55 + 0.45 * rg.glow);
    ctx.beginPath(); ctx.arc(rg.x, rg.y, r, 0, Math.PI * 2); ctx.stroke();
    ctx.restore();
    ctx.fillStyle = hexA(col, 0.06 + 0.1 * rg.glow);
    ctx.beginPath(); ctx.arc(rg.x, rg.y, r * 0.92, 0, Math.PI * 2); ctx.fill();
  }
  function ringTargetColor(rg) {
    const t = rg.def.target;
    if (t === 'player') return player.color;
    if (t.color) return t.color;
    if (typeof t === 'string') { const e = ents.find(e => e.id === t); return e ? e.color : player.color; }
    const e = ents.find(e => e.type === t.type) || ents.find(e => t.type === 'piece' && e.type === 'split');
    return e ? e.color : starColors[levelIndex];
  }

  function drawLevel() {
    ctx.fillStyle = bgColor; ctx.fillRect(0, 0, W, H);
    if (!level) return;
    for (const e of ents) if (e.type === 'flow') Laws.drawFlow(ctx, e, now, box.s);
    for (const e of ents) if (e.type === 'warp') Laws.drawWarp(ctx, e, now);
    for (const e of ents) if(e.type==='rotor')RotatingWall.draw(ctx,e,now);
    for (const rg of rings) drawRing(rg);

    if (ghost.active) { // デモのゴースト (レベル1)
      const t = easeInOut(ghost.t), rg = rings[0];
      const a = Math.sin(ghost.t * Math.PI) * 0.45;
      ctx.fillStyle = hexA(player.color, a);
      ctx.beginPath(); ctx.arc(lerp(player.x, rg.x, t), lerp(player.y, rg.y, t), player.r, 0, Math.PI * 2); ctx.fill();
    }

    const idle = now - lastTouch;
    // 壁 (一番下)
    for (const e of ents) if (Laws.isWall(e)) {
      const w=e.type==='rotor'?{...e,x:e.x+Math.sin(now*2.3)*e.r*.014}:e;
      drawCircle(w,easeOut(e.pop),e.dentT>0?{nx:e.dent.nx,ny:e.dent.ny,amt:e.dent.amt*e.dentT}:null);
      if(e.type==='rotor')RotatingWall.overlay(ctx,w,now);
    }
    for (const e of ents) Laws.drawThread(ctx, e, player);
    for (const e of ents) {
      if (e === player || Laws.isWall(e) || e.type === 'flow' || e.type === 'warp') continue;
      const s = easeOut(e.pop);
      Laws.drawSign(ctx, e, now);
      let jx = 0, jy = 0;
      if ((e.type === 'flee' || e.type === 'split' || e.type === 'merge') && e.wobble > 0) {
        jx = Math.sin(now * 40) * e.r * 0.08 * e.wobble; jy = Math.cos(now * 37) * e.r * 0.08 * e.wobble;
      }
      const tmp = { x: e.x + jx, y: e.y + jy, r: e.r, color: e.color, type: e.type };
      drawCircle(tmp, s);
      if (e.type === 'dye' && e.color === window.COLORS.dye) { // 白い円の縁 (背景と区別)
        ctx.strokeStyle = 'rgba(0,0,0,0.12)'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(tmp.x, tmp.y, tmp.r * s, 0, Math.PI * 2); ctx.stroke();
      }
      Laws.drawOverlay(ctx, tmp, now);
    }
    let ps = easeOut(player.pop);
    if (phase === 'play' && ((!pointer.down && idle > 2.5) || detached)) ps *= 1 + 0.06 * Math.sin(now * 5);
    drawCircle(player, ps);

    for (const rg of rings) if (rg.fill > 0) {
      ctx.fillStyle = hexA(rg.filled.color, rg.fill);
      ctx.beginPath(); ctx.arc(rg.x, rg.y, rg.r * 1.08, 0, Math.PI * 2); ctx.fill();
    }
    if (phase === 'celebrate') for (const p of particles) {
      if (p.life <= 0) continue;
      ctx.fillStyle = hexA(p.color, clamp(p.life, 0, 1));
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
  }

    drawLevel();
  }
  window.GameRender = { draw };
})();
