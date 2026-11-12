'use strict';
/* ---------- S19 update ---------- */
let bounceT=0;
function stepPhys(dt){
  for(const pl of ALLPL){
    pl.sq.t=0; stepSpring(pl.sq,320,13,dt);
    pl.bend.t=0; stepSpring(pl.bend,200,9,dt);
    pl.hop.t=0; stepSpring(pl.hop,140,11,dt);
    pl.tilt.t=0; stepSpring(pl.tilt,160,12,dt);
    stepSpring(pl.lift,pl.lifting?420:90,pl.lifting?32:13,dt);
    stepSpring(pl.inf,45,8,dt);
    stepSpring(pl.prom,60,13,dt); stepSpring(pl.cen,30,9,dt);
  }
  for(const a of ANIMALS){
    stepSpring(a.peek,70,11,dt); stepSpring(a.stretch,90,12,dt); stepSpring(a.fan,60,11,dt); stepSpring(a.ear,90,11,dt);
    a.sq.t=0; stepSpring(a.sq,320,12,dt); a.hy.t=0; stepSpring(a.hy,150,10,dt); stepSpring(a.lean,70,12,dt);
  }
  if(G.show){const S=G.show; S.sl=S.sl||spring(0); S.sl.t=S.sharedLift||0; stepSpring(S.sl,90,12,dt); S.gl=S.gl||spring(0); S.gl.t=S.giantLift||0; stepSpring(S.gl,70,11,dt);}
}
function update(dt){
  T+=dt;
  runTasks(dt);
  const n=Math.min(40,Math.ceil(dt/(1/120)));
  const h=dt/n; for(let i=0;i<n;i++) stepPhys(h);
  G.open+=(G.openT-G.open)*Math.min(1,dt*(G.openT>G.open?2.4:1.8));
  if(Math.abs(G.open-G.openT)<0.001) G.open=G.openT;
  for(const pl of ALLPL){
    const kn=pl.knot; const tgt=kn.re>T?0:1;
    kn.tied+=(tgt-kn.tied)*Math.min(1,dt*(tgt<kn.tied?8:2.5)); kn.wig=Math.max(0,kn.wig-dt*1.5);
    if(!PTRS.size) kn.pull=Math.max(0,kn.pull-dt*2);
    pl.shake=Math.max(0,pl.shake-dt*(C&&C.d2==='open'&&pl===SN.pl?0.2:1.2));
    pl.rustle=Math.max(0,pl.rustle-dt*0.9);
    if(G.world==='show'&&pl.showKey&&pl.showKey[0]==='w'&&pl.showKey!=='w4'&&T>pl.freeze){ pl.walk+=dt*((G.target&&G.target.pl===pl)?0.35:0.75); }
    let pr=1;
    if(G.world==='shop'&&pl.isHat){ const has=pl.occ.length>0; const isT=G.target&&G.target.pl===pl; pr=(G.phase==='swell'&&C&&pl!==C.pairHat)?0.7:((has||isT||(C&&pl===C.pairHat&&G.phase==='swell'))?1:0.84); }
    pl.prom.t=pr;
  }
  for(const a of ANIMALS){
    a.moodT-=dt; if(a.moodT<=0&&a.mood!=='neutral'){ if(!(a.mood==='scared'&&C&&C.d2==='open'&&a===SN)) a.mood='neutral'; }
    a.nextBlink-=dt; if(a.nextBlink<=0){a.blink=1;a.nextBlink=fx(2,5.2);}
    a.blink=Math.max(0,a.blink-dt*7);
    a.waveT=Math.max(0,a.waveT-dt);
    if(!(C&&C.d2==='open'&&a===SN)) a.tremble=Math.max(0,a.tremble-dt*2);
    if(a.state==='hidden'){ a.peekHold=(a.peekHold||0)-dt; if(a.peekHold<=0){ a.peek.t=(C&&C.d2==='open'&&a===SN)?0.38:(C&&C.d3==='peek'&&a===PC?0.6:0.72); } }
    a.lookHold-=dt;
    if(a.lookHold<=0){
      if(T-touchT<1.0&&touchPt){a.look={x:touchPt.x,y:touchPt.y};}
      else { const tp=targetPoint(); const me=posOf(a);
        if(tp&&!(G.target&&G.target.a===a)) a.look={x:tp.x,y:tp.y};
        else a.look={x:me.x+Math.sin(T*0.4+a.kind.length)*80,y:me.y+30}; }
    }
  }
  autonomy(dt);
  /* particles */
  for(let i=PT.length-1;i>=0;i--){const p=PT[i];p.life+=dt;if(p.life>p.max){PT.splice(i,1);continue;}p.vy+=p.g*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vx*=1-dt*1.2;p.rot+=p.vr*dt;}
  for(let i=TR.length-1;i>=0;i--){if(T-TR[i].born>TR[i].life)TR.splice(i,1);}
  updateGuide(dt);
  /* the guided thing bounces gently */
  bounceT+=dt; if(bounceT>1.3){bounceT=0; const t=G.target; if(t){ if(t.kind==='perf'){const pf=G.show&&G.show.perf[t.idx];if(pf)pf.units.forEach(a=>{a.hy.vel+=2.4;});} else if(t.kind==='pfan'){PC.sq.vel+=3;} else if(t.pl&&!t.pl.lifting){t.pl.hop.vel+=2.2;t.pl.sq.vel+=2;} } }
  if(G.phase==='swell'&&C&&C.pairHat){ C.pairHat.sq.vel+=Math.sin(T*3.2)*dt*30; }
  if(pendingSave&&T-lastSave>1.2) saveMem(true);
  musicTick();
}

