// A wall on a visible arc: only the player's contact moves it; no inertia.
(function () {
  function layout(w, posOf, pr) {
    const c=posOf(w.def);w.ox=c.x;w.oy=c.y;w.orbitR=pr(w.def.orbitR);
    w.angle=w.angle==null?w.def.phase:w.angle;
    w.x=w.ox+Math.cos(w.angle)*w.orbitR;w.y=w.oy+Math.sin(w.angle)*w.orbitR;
  }
  function push(w, dx, dy, g) {
    if(w.type!=='rotor')return false;
    const tangent=dx*-Math.sin(w.angle)+dy*Math.cos(w.angle);
    const delta=Math.max(-1.45*g.dt,Math.min(1.45*g.dt,tangent/w.orbitR));
    const angle=Math.max(w.def.minAngle,Math.min(w.def.maxAngle,w.angle+delta));
    if(Math.abs(angle-w.angle)<1e-7)return false;
    const x=w.ox+Math.cos(angle)*w.orbitR,y=w.oy+Math.sin(angle)*w.orbitR;
    if(x-w.r<g.box.x0||x+w.r>g.box.x1||y-w.r<g.box.y0||y+w.r>g.box.y1)return false;
    // Stop the wall when another body would be squeezed; never shove it away.
    for(const e of g.ents){
      if(e===w||e===g.player||e.dead||(window.Laws.isField(e)&&e.type!=='paint'))continue;
      if(Math.hypot(x-e.x,y-e.y)<w.r+e.r+.25)return false;
    }
    for(const r of g.rings)if(Math.hypot(x-r.x,y-r.y)<w.r+r.r+.5)return false;
    w.angle=angle;w.x=x;w.y=y;w.moving=1;
    if(!w.soundAt||g.now-w.soundAt>.18){g.A.wall();w.soundAt=g.now;}
    return true;
  }
  function draw(ctx,w,now){
    ctx.save();ctx.strokeStyle='rgba(73,85,114,.30)';ctx.lineWidth=Math.max(1.5,w.r*.045);
    ctx.beginPath();ctx.arc(w.ox,w.oy,w.orbitR,w.def.minAngle,w.def.maxAngle);ctx.stroke();
    for(const a of [w.def.minAngle,w.def.maxAngle]){
      ctx.fillStyle='rgba(73,85,114,.40)';ctx.beginPath();ctx.arc(w.ox+Math.cos(a)*w.orbitR,w.oy+Math.sin(a)*w.orbitR,w.r*.07,0,Math.PI*2);ctx.fill();
    }
    ctx.fillStyle='#667087';ctx.beginPath();ctx.arc(w.ox,w.oy,w.r*.09,0,Math.PI*2);ctx.fill();
    ctx.restore();
  }
  function overlay(ctx,w,now){
    ctx.save();
    // A light shimmer invites contact; the collision body stays still.
    const a=w.angle+Math.sin(now*2.3)*.025;
    ctx.strokeStyle='rgba(255,255,255,.8)';ctx.lineWidth=w.r*.055;
    ctx.beginPath();ctx.arc(w.x,w.y,w.r*.82,a-.32,a+.32);ctx.stroke();ctx.restore();
  }
  window.RotatingWall={layout,push,draw,overlay};
})();
