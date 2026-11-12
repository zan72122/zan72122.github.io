(function () {
  const hexA = (hex, a) => window.Laws.hexA(hex, a);
  function drawFlow(ctx, f, now, S) {
    ctx.save();
    ctx.translate(f.x, f.y); ctx.rotate(Math.atan2(f.dirY, f.dirX));
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    ctx.beginPath(); ctx.roundRect(-f.len / 2, -f.wid / 2, f.len, f.wid, f.wid / 2); ctx.fill();
    const n = Math.max(6, Math.round(f.len / (0.045 * S)));
    for (let i = 0; i < n; i++) {
      const p = ((now * f.speed * S / f.len) + i / n) % 1;
      const x = -f.len / 2 + p * f.len;
      const y = Math.sin(i * 12.9898) * f.wid * 0.36;
      const a = Math.sin(p * Math.PI) * 0.7;
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.beginPath(); ctx.ellipse(x, y, 0.014 * S, 0.006 * S, 0, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  }
  function drawWarp(ctx, w, now) {
    ctx.save(); ctx.translate(w.x, w.y);
    ctx.fillStyle = hexA(w.color, 0.12);
    ctx.beginPath(); ctx.arc(0, 0, w.r, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = hexA(w.color, 0.85); ctx.lineWidth = w.r * 0.14; ctx.lineCap = 'round';
    for (let k = 0; k < 2; k++) {
      ctx.beginPath();
      for (let i = 0; i <= 24; i++) {
        const t = i / 24, a = -now * 3 + k * Math.PI + t * Math.PI * 1.6, rr = w.r * (0.15 + 0.8 * t);
        const x = Math.cos(a) * rr, y = Math.sin(a) * rr;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.restore();
  }
  function drawSign(ctx, e, now) {
    if (e.type === 'orbit' && !e.free) {
      ctx.strokeStyle = hexA(e.color, 0.35); ctx.lineWidth = 2; ctx.setLineDash([6, 8]);
      ctx.beginPath(); ctx.arc(e.ox, e.oy, e.orbitR, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = '#101637';
      ctx.beginPath(); ctx.arc(e.ox, e.oy, e.r * 0.22, 0, Math.PI * 2); ctx.fill();
    }
    if (e.type === 'paint') {
      const b = 1 + 0.06 * Math.sin(now * 3 + e.x);
      ctx.strokeStyle = hexA(e.color, 0.35); ctx.lineWidth = e.r * 0.1;
      ctx.beginPath(); ctx.arc(e.x, e.y, e.r * 1.25 * b, 0, Math.PI * 2); ctx.stroke();
    }
    if (e.ripple > 0) {
      ctx.strokeStyle = hexA(e.color, e.ripple * 0.7); ctx.lineWidth = e.r * 0.12;
      ctx.beginPath(); ctx.arc(e.x, e.y, e.r * (1 + (1 - e.ripple) * 1.5), 0, Math.PI * 2); ctx.stroke();
    }
    if (e.type === 'grow' || e.type === 'shrink') {
      const out = e.type === 'grow';
      for (let i = 0; i < 3; i++) {
        const p = ((now * 0.45 + i / 3) % 1);
        const rr = out ? e.r * (1 + p * 1.4) : e.r * (2.4 - p * 1.4);
        const a = (out ? (1 - p) : p) * 0.45 * (0.5 + 0.5 * e.pop);
        ctx.strokeStyle = hexA(e.color, a); ctx.lineWidth = e.r * 0.12;
        ctx.beginPath(); ctx.arc(e.x, e.y, rr, 0, Math.PI * 2); ctx.stroke();
      }
    }
  }

  // 円本体の上に描くもの (分裂の区切り線など)
  function drawOverlay(ctx, e, now) {
    if (e.type === 'split') {
      ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = e.r * 0.06;
      for (let i = 0; i < 3; i++) {
        const a = -Math.PI / 2 + i * (Math.PI * 2 / 3) + Math.PI / 3;
        ctx.beginPath(); ctx.moveTo(e.x, e.y); ctx.lineTo(e.x + Math.cos(a) * e.r * 0.92, e.y + Math.sin(a) * e.r * 0.92); ctx.stroke();
      }
    }
  }

  // くっつく円の糸
  function drawThread(ctx, e, player) {
    if (e.type !== 'sticky' || e.attached || e.captured || !(e.pull > 0)) return;
    ctx.strokeStyle = hexA(e.color, e.pull * 0.6); ctx.lineWidth = 2 + e.pull * 3;
    ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(e.x, e.y); ctx.lineTo(player.x, player.y); ctx.stroke();
  }

  window.LawDrawing = { drawFlow, drawWarp, drawSign, drawOverlay, drawThread };
})();
