// Swept circle movement for the new stages only. No endpoint teleport through walls.
(function () {
  function first(e, dx, dy, walls) {
    let result = null, best = 1;
    const a = dx * dx + dy * dy;
    if (a < 1e-10) return null;
    for (const w of walls) {
      const x = e.x - w.x, y = e.y - w.y, r = e.r + w.r + .15;
      const b = x * dx + y * dy, c = x*x + y*y - r*r;
      if (b >= 0) continue;
      const disc = b*b - a*c;
      if (disc < 0) continue;
      const t = Math.max(0, (-b - Math.sqrt(disc)) / a);
      if (t <= best) { best = t; result = { w, t }; }
    }
    return result;
  }
  function move(e, x, y, walls, box, onHit) {
    let dx = x - e.x, dy = y - e.y;
    const pushed = new Set();
    for (let pass = 0; pass < 6; pass++) {
      let hit = first(e, dx, dy, walls);
      if (!hit) { e.x += dx; e.y += dy; break; }
      if (onHit && !pushed.has(hit.w)) {
        pushed.add(hit.w);
        if (onHit(hit.w, dx, dy)) { pass--; continue; }
      }
      const t = Math.max(0, hit.t - .0001);
      e.x += dx*t; e.y += dy*t;
      let nx = e.x - hit.w.x, ny = e.y - hit.w.y;
      const d = Math.hypot(nx, ny) || 1; nx /= d; ny /= d;
      dx *= 1-t; dy *= 1-t;
      const inward = Math.min(0, dx*nx + dy*ny);
      dx -= inward*nx; dy -= inward*ny;
      const vn = Math.min(0, e.vx*nx + e.vy*ny);
      e.vx -= vn*nx; e.vy -= vn*ny;
      if (Math.hypot(dx, dy) < .001) break;
    }
    e.x = Math.max(box.x0+e.r, Math.min(box.x1-e.r, e.x));
    e.y = Math.max(box.y0+e.r, Math.min(box.y1-e.r, e.y));
  }
  function settle(e, walls, box) {
    for (let i=0;i<4;i++) for (const w of walls) {
      const dx=e.x-w.x,dy=e.y-w.y,d=Math.hypot(dx,dy),r=e.r+w.r+.15;
      if (d>1e-6 && d<r) {e.x+=dx/d*(r-d);e.y+=dy/d*(r-d);}
    }
    e.x=Math.max(box.x0+e.r,Math.min(box.x1-e.r,e.x));
    e.y=Math.max(box.y0+e.r,Math.min(box.y1-e.r,e.y));
  }
  function reconcile(ents, previous, box) {
    const walls=ents.filter(window.Laws.isWall);
    for (const e of ents) {
      if (window.Laws.isWall(e)||window.Laws.isField(e)||e.dead||e.captured) continue;
      if (e.warped) { if(e.type!=='player') e.warped=false; continue; }
      const old=previous.get(e); if(!old) {settle(e,walls,box);continue;}
      const x=e.x,y=e.y;e.x=old.x;e.y=old.y;
      settle(e,walls,box);move(e,x,y,walls,box);
    }
    separatePlayer(ents,box);
  }
  function separatePlayer(ents,box){
    const player=ents.find(e=>e.type==='player');if(!player||player.captured||player.warped)return;
    const walls=ents.filter(window.Laws.isWall);
    for(let pass=0;pass<3;pass++)for(const e of ents){
      if(e.captured||e.dead||!['push','dye','merge','orbit'].includes(e.type)||(e.type==='orbit'&&!e.free))continue;
      let dx=player.x-e.x,dy=player.y-e.y,d=Math.hypot(dx,dy),min=player.r+e.r;
      if(d>=min-.05)continue;if(d<.01){dx=0;dy=1;d=1;}
      move(player,player.x+dx/d*(min-d+.1),player.y+dy/d*(min-d+.1),walls,box);
      const vn=Math.min(0,player.vx*dx/d+player.vy*dy/d);
      player.vx-=vn*dx/d;player.vy-=vn*dy/d;
    }
  }
  function releaseSpace(ents,player,box,dt){
    const walls=ents.filter(window.Laws.isWall);
    for(const e of ents){
      if(e.captured||e.dead||!['push','merge','dye','orbit'].includes(e.type)||(e.type==='orbit'&&!e.free))continue;
      if(Math.hypot(e.x-player.x,e.y-player.y)<e.r+player.r+box.s*.06)continue;
      for(const w of walls){
        const dx=e.x-w.x,dy=e.y-w.y,d=Math.hypot(dx,dy),space=player.r*2.3;
        const gap=d-e.r-w.r;if(d<.01||gap>=space)continue;
        const f=Math.max(0,1-gap/space)*.85*box.s*dt;
        e.vx+=dx/d*f;e.vy+=dy/d*f;
      }
    }
  }
  window.SolidMove={move,settle,reconcile,releaseSpace};
})();
