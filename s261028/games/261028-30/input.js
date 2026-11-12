'use strict';
/* ---------- S16 touch reactions ---------- */
function hatPress(pl,strength){
  const now2=T; if(now2-pl.lastDown<0.07) return; pl.lastDown=now2;
  pl.combo=(now2-pl.lastTap<0.7)?pl.combo+1:0;
  const c=Math.min(pl.combo,7);
  pl.sq.vel+=(9+c*1.6)*(strength||1); pl.bend.vel+=(c%2?-1:1)*(4+c*0.8); pl.hop.vel+=1.2+c*0.35;
  if(pl.type==='box'){ sfx('pokon',PITCH.box-3,c); pl.lift.vel+=2.5; }
  else if(pl.type==='fan'){ sfx('fan'); }
  else sfx('pokon',PITCH[pl.type]||0,c);
  const g=geom(pl);
  burst(g.x+fx(-0.2,0.2)*g.s,g.y-g.s*0.12,Math.min(8,4+c),[pl.col?pl.col.a:'#fff',pl.col?pl.col.r:'#fff',pl.col?pl.col.k:'#fff'],null,0.45+c*0.04);
  pl.occ.forEach(a=>{ if(a.state==='hidden'){ a.peek.t=a===SN&&C.d2==='open'?0.38:1.15; a.peekHold=0.9; mood(a,C.d2==='open'&&a===SN?'scared':(c>2?'giggle':'surprised'),0.9); a.blink=0; } });
  pl.lastTap=now2;
}
function wake(p){
  sfx('wake');
  const tgt=G.target&&G.target.pl;
  HATS.forEach(pl=>{const g=placeBase(pl);const d=dist(p.x,p.y,g.x,g.y);const f=Math.max(0.15,1-d/(L.U*0.9));
    co((function*(){yield d/(L.U*2.2);pl.hop.vel+=(pl===tgt?9:6*f);pl.sq.vel+=4*f;})(),'fx');});
  burst(p.x,p.y,10,CONF,null,0.5);
  ANIMALS.forEach(a=>{if(a.state==='hidden'){a.peek.t=1.1;a.peekHold=1.2;}});
  evlog('wake','');
}
let touchPt=null, touchT=-9;
const PTRS=new Map();
function toLocal(e){const r=cv.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top};}
function onDown(e){
  if(e.cancelable) e.preventDefault();
  audioUnlock();
  if(PTRS.size>=4) return;
  const p=toLocal(e);
  G.idle=0; G.lastInputT=T; G.hintT=-1; G.charHint=false; touchPt=p; touchT=T;
  const firstEver=!G.firstTouch;
  if(firstEver){G.firstTouch=true;wake(p);}
  const h=hitTest(p.x,p.y);
  const rec={id:e.pointerId,x0:p.x,y0:p.y,x:p.x,y:p.y,t0:T,h:h,mode:'tap',path:0};
  if(h&&h.obj){ if(h.obj.grab!=null&&h.obj.grab!==e.pointerId&&PTRS.has(h.obj.grab)) rec.mode='juice'; else h.obj.grab=e.pointerId; }
  PTRS.set(e.pointerId,rec);
  try{cv.setPointerCapture(e.pointerId);}catch(_){}
  guard(()=>juiceDown(rec,firstEver));
}
function juiceDown(rec,firstEver){
  const h=rec.h;
  if(!h){ if(!firstEver){ addP({x:rec.x0,y:rec.y0,vx:0,vy:0,g:0,life:0,max:0.45,rot:0,vr:0,sz:L.hs*0.12,col:'#ffffff',shape:'ring'}); } return; }
  switch(h.kind){
    case 'hat': case 'clue': hatPress(h.pl); if(h.pl.type==='fan'){h.pl.rustle=1;} break;
    case 'knot': h.pl.knot.wig=1; h.pl.knot.pull=0.25; sfx('knot'); h.pl.sq.vel+=3; h.pl.occ.forEach(a=>{if(a.state==='hidden'){a.peek.t=1.05;a.peekHold=0.6;mood(a,'giggle',0.8);}}); break;
    case 'pfan': PC.fan.vel-=1.5; PC.sq.vel+=3; noise(now(),0.2,0.06,2000,1); sfx('shimmer'); break;
    case 'gfan': PL.fan.rustle=1.2; sfx('shimmer'); PL.fan.occ.forEach(a=>{a.peek.t=Math.max(a.peek.t,0.9);}); break;
    case 'animal': { const a=h.a; a.sq.vel+=8; a.hy.vel+=3; mood(a,rpickV(['happy','giggle','surprised']),0.8);
      if(a.kind==='snail') sfx('giggle'); else if(a.kind==='peacock') sfx('peacockVoice'); else sfx('hop'); break; }
    case 'perf': { const pf=G.show.perf[h.idx]; pf.units.forEach(a=>{a.sq.vel+=6;}); sfx('tick'); break; }
    case 'window': RB.peek.t=1; RB.hy.vel+=3; mood(RB,'surprised',0.8); sfx('hop'); co((function*(){yield 1.2;if(RB.state==='window'&&G.phase==='seek')RB.peek.t=0.3;})(),'fx'); break;
  }
}
function onMove(e){
  const rec=PTRS.get(e.pointerId); if(!rec) return;
  if(e.cancelable) e.preventDefault();
  const p=toLocal(e); rec.path+=dist(p.x,p.y,rec.x,rec.y); rec.x=p.x; rec.y=p.y;
  const h=rec.h; if(!h||rec.mode==='juice') return;
  const dx=rec.x-rec.x0, dy=rec.y-rec.y0;
  guard(()=>{
  if((h.kind==='hat'||h.kind==='clue')&&h.pl&&h.pl.isHat){
    const g=geom(h.pl);
    if(rec.mode==='tap'&&-dy>16&&Math.abs(dy)>Math.abs(dx)*0.8){rec.mode='lift';h.pl.lifting=true;}
    if(rec.mode==='lift'){h.pl.lift.t=clamp(-dy/g.s,0,h.pl.type==='box'?0.8:0.95);}
  }
  if(h.kind==='knot'&&rec.mode==='tap'){ const d=Math.hypot(dx,dy); h.pl.knot.pull=clamp(d/(L.hs*0.6),0,0.6); h.pl.knot.dir=dx>=0?1:-1; if(d>24){rec.mode='pulled';commitKnot(h.pl,dx>=0?1:-1);} }
  const fanClue=h.kind==='clue'&&h.pl&&h.pl.type==='fan';
  if((h.kind==='pfan'||h.kind==='gfan'||fanClue)&&rec.mode==='tap'&&rec.path>40){ rec.mode='stroked'; commitStroke(fanClue?{kind:'gfan',pl:PL.fan}:h,dx>=0?1:-1); }
  });
}
function endPtr(e,cancel){
  const rec=PTRS.get(e.pointerId); if(!rec) return;
  PTRS.delete(e.pointerId);
  const h=rec.h;
  if(h&&h.obj&&h.obj.grab===e.pointerId) h.obj.grab=null;
  guard(()=>{
  if(rec.mode==='lift'){
    const pl=h.pl; pl.lifting=false; const g=geom(pl);
    if(!cancel&&pl.lift.v*g.s>=Math.max(30,0.25*g.s*0.5)) commitLift(pl); else {pl.lift.t=0;pl.hop.vel+=2;}
    return;
  }
  if(cancel||rec.mode!=='tap'||!h) return;
  if(Math.hypot(rec.x-rec.x0,rec.y-rec.y0)>14) return;
  commitTap(rec);
  });
}
function onUp(e){if(e.cancelable)e.preventDefault();audioUnlock();endPtr(e,false);}
function onCancel(e){endPtr(e,true);}
function clearPointers(){PTRS.forEach((rec,id)=>{const h=rec.h;if(h&&h.obj&&h.obj.grab===id)h.obj.grab=null;if(rec.mode==='lift'&&h.pl){h.pl.lifting=false;h.pl.lift.t=0;}});PTRS.clear();}

function commitTap(rec){
  const h=rec.h;
  if(h.kind==='perf'){ showTap(h.idx); return; }
  if(G.phase==='swell'&&h.pl&&h.pl===C.pairHat){ swellTap(); return; }
  if(G.phase==='ret'){ const gh=stageHat(); if(h.pl&&h.pl===gh&&G.lock===0){co(seqReturn(),'scene');} return; }
  if(G.phase==='show'){ if(h.kind==='animal') co(signature(h.a,false),'fx'); return; }
  switch(h.kind){
    case 'clue':
      if(h.pl.type==='fan'){ if(!tryFind(PL.fan,'clue',h.a)) PL.fan.rustle=1; return; }
      if(C.d2==='open'&&h.a===SN){ tryFind(h.pl,'clue',h.a); return; }
      if(C.d3==='peek'&&h.pl===PC.pl){ tryFind(h.pl,'clue',PC); return; }
      if(!tryFind(h.pl,'clue',h.a)) {}
      return;
    case 'hat': {
      const pl=h.pl;
      if(G.world==='show'&&C.d4==='hat'&&pl.showKey==='giant'&&G.phase==='seek'){ emptyGiant(pl,'tap'); return; }
      if(pl.showKey&&pl.showKey[0]==='w') pl.freeze=T+1.6;
      const hid=pl.occ.filter(a=>a.state==='hidden'&&!a.inbound);
      if(!hid.length){ pl.empty++; if(pl.empty%2===0) noteOpen(pl); return; }
      if(C.d3==='peek'&&pl===PC.pl){ tryFind(pl,'clue'); return; }
      if(C.d2==='open'&&hid.indexOf(SN)>=0){ tryFind(pl,'body'); return; }
      if(pl.taps>=1&&T-pl.firstTapT<1.5){
        hid.forEach(a=>{a.peek.t=1.3;});
        pl.hop.vel+=7; sfx('pushBack'); pl.taps=0;
        co((function*(){yield 0.16; tryFind(pl,'body');})(),'fx');
      } else { pl.taps=1; pl.firstTapT=T; }
      return; }
    case 'knot': commitKnot(h.pl,1); return;
    case 'pfan': if(C.d2==='open') co(seqFold('child'),'scene'); else {PC.fan.t=PC.fan.t>0.5?0:1; sfx(PC.fan.t?'fan':'fold');} return;
    case 'gfan': if(PL.fan.occ.some(a=>a.state==='hidden')) tryFind(PL.fan,'clue'); else PL.fan.rustle=1.4; return;
    case 'animal': { const a=h.a; if(a===PC&&C.d2==='open'){co(seqFold('child'),'scene');return;} if(G.lock===0&&!a.busy){a.busy=true;co((function*(){yield* signature(a,false);a.busy=false;})(),'fx');} return; }
  }
}
function commitKnot(pl,dir){
  const kn=pl.knot; if(kn.tied<0.5&&kn.re>T) return;
  kn.dir=dir; kn.re=T+3.2; kn.pull=0; sfx('untie');
  const g=geom(pl); if(g.knot) burst(g.knot.x,g.knot.y,8,[pl.col?pl.col.r:'#ff9ec4','#ffffff'],'zig',0.4);
  noteOpen(pl);
  const hid=pl.occ.filter(a=>a.state==='hidden'&&!a.inbound);
  if(hid.length){ if(G.phase==='swell'&&pl===C.pairHat){swellTap();return;} if(C.d3==='peek'&&pl===PC.pl){tryFind(pl,'knot');return;} tryFind(pl,'knot'); }
}
function commitLift(pl){
  sfx('pokon',(PITCH[pl.type]||0)+2,2);
  noteOpen(pl);
  if(G.phase==='swell'&&pl===C.pairHat){pl.lift.t=0;swellTap();return;}
  if(G.phase==='ret'){const gh=stageHat();pl.lift.t=0;if(pl===gh&&G.lock===0)co(seqReturn(),'scene');return;}
  if(G.world==='show'&&C.d4==='hat'&&pl.showKey==='giant'){emptyGiant(pl,'lift');return;}
  const hid=pl.occ.filter(a=>a.state==='hidden'&&!a.inbound);
  if(hid.length&&tryFind(pl,'lift')){ pl.lift.t=0.5; co((function*(){yield 0.7;if(!pl.lifting)pl.lift.t=0;})(),'fx'); }
  else { pl.lift.t=0; pl.hop.vel+=2; }
}
function commitStroke(h,dir){
  if(h.kind==='pfan'){ if(C.d2==='open') co(seqFold('child'),'scene'); else {PC.fan.t=dir>0?1:0;} return; }
  if(h.kind==='gfan'){ PL.fan.partDir=dir; PL.fan.rustle=1.5; sfx('fan');
    if(PL.fan.occ.some(a=>a.state==='hidden')) tryFind(PL.fan,'stroke'); }
}

