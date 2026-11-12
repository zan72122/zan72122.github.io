'use strict';
/* ---------- S17 guide (one target, finger demo, gentle character hint) ---------- */
function computeTarget(){
  if(!C) return null;
  if(G.phase==='swell'&&C.pairHat) return {kind:'hat',pl:C.pairHat,key:'swell'};
  if(G.phase==='ret'){const gh=stageHat();return gh?{kind:'hat',pl:gh,key:'ret'}:null;}
  if(G.phase==='show'){const S=G.show;if(!S||S.bowed)return null;return {kind:'perf',idx:S.idx,key:'perf'+S.idx};}
  if(G.phase!=='seek'||G.lock>0) return null;
  if(C.d2==='open') return {kind:'pfan',a:PC,key:'pfan'};
  if(C.d3==='peek'&&PC.pl) return {kind:'hat',pl:PC.pl,key:'d3'};
  if(G.world==='show'&&C.d4==='hat'){const gh=HATS.find(h=>h.showKey==='giant');if(gh)return {kind:'hat',pl:gh,key:'giant'};}
  if(G.world==='show'&&C.d4==='fan') return {kind:'gfan',pl:PL.fan,key:'gfan'};
  const hid=hiddenList().filter(a=>!a.inbound&&a.pl);
  if(!hid.length) return null;
  /* group by place, prefer: together > rabbit (new) > memory-suggested > snail */
  const groups=new Map(); hid.forEach(a=>{const g=groups.get(a.pl)||[];g.push(a);groups.set(a.pl,g);});
  let pick=null;
  groups.forEach((list,pl)=>{if(list.length>=2&&!pick) pick={pl:pl,a:list[0]};});
  if(!pick&&C.step==='R3'&&RB.state==='hidden') pick={pl:RB.pl,a:RB};
  if(!pick&&C.step==='O2'&&RB.state==='hidden'&&(G.variantsSeen.parade||MEM.lastShow==='parade')&&!G.variantsSeen.duo) pick={pl:RB.pl,a:RB};
  if(!pick&&C.step==='R1'&&G.world==='shop'){
    let pref='snail';
    if(G.cycle===0&&RESTORED){ pref=MEM.lastFirst==='snail'?'peacock':(MEM.lastFirst==='peacock'?'knot':'snail'); }
    if(G.cycle>0){ pref=!DSEEN.D2?'peacock':(!DSEEN.D3?'knot':(!DSEEN.D1?'snail':'snail')); }
    if(pref==='peacock'&&PC.state==='hidden') pick={pl:PC.pl,a:PC};
    else if(pref==='knot'&&SN.state==='hidden'&&SN.pl&&SN.pl.knot.has) return {kind:'knot',pl:SN.pl,key:'knot'+SN.pl.type};
    else if(SN.state==='hidden') pick={pl:SN.pl,a:SN};
  }
  if(!pick){ const order=[SN,PC,RB]; for(const a of order){ if(a.state==='hidden'&&!a.inbound&&a.pl){pick={pl:a.pl,a:a};break;} } }
  if(!pick) return null;
  if(pick.a.where==='knot'&&pick.pl.knot.has&&pick.pl.type!=='garland') return {kind:'knot',pl:pick.pl,key:'knot'+pick.pl.type};
  if(pick.pl.type==='garland') return {kind:'knot',pl:pick.pl,key:'knotgarland'};
  return {kind:'clue',pl:pick.pl,a:pick.a,key:'clue'+pick.a.kind+pick.pl.type};
}
function targetPoint(t){
  t=t||G.target; if(!t) return null;
  if(t.kind==='perf') return perfPoint(t.idx);
  if(t.kind==='pfan') return fanTouchPt();
  if(t.kind==='gfan'){const f=fanGeom();const tip=PL.fan.occ.find(a=>a===SN);if(tip&&tip.state==='hidden'){const c=clueInfo(PL.fan,SN);return {x:c.x,y:c.y,r:c.r};}return {x:f.x,y:f.y-f.r*0.55,r:f.r*0.45};}
  if(t.kind==='knot'){const g=geom(t.pl);if(g.knot)return {x:g.knot.x,y:g.knot.y,r:Math.max(28,g.knot.r*1.15)};}
  if(t.kind==='clue'&&t.a&&t.a.state==='hidden'&&t.a.pl===t.pl){const c=clueInfo(t.pl,t.a);return {x:c.x,y:c.y,r:c.r};}
  if(t.pl){const g=geom(t.pl);return {x:(g.body.x1+g.body.x2)/2,y:(g.body.y1+g.body.y2)/2,r:(g.body.x2-g.body.x1)*0.5};}
  return null;
}
const HINT={t:-1,kind:'tap',x:0,y:0,dx:0,dy:0,pl:null};
function updateGuide(dt){
  const t=computeTarget();
  const key=t?t.key:'';
  if(key!==G.tkey){G.tkey=key;G.target=t;HINT.t=-1;G.hintN=0;}
  else G.target=t;
  if(PTRS.size===0) G.idle+=dt; else G.idle=0;
  const firstScreen=!G.firstTouch&&G.finds===0;
  const thr=firstScreen?2.5:4;
  if(t&&G.idle>thr&&HINT.t<0&&(G.idle-thr)%5<dt*1.5+0.02){
    const tp=targetPoint(t); if(tp){
      HINT.t=0; HINT.x=tp.x; HINT.y=tp.y; HINT.pl=t.pl||null; HINT.kind='tap'; HINT.dx=0; HINT.dy=0; G.hintN++;
      if(t.kind==='knot'){HINT.kind='drag';HINT.dx=L.hs*0.45;HINT.dy=L.hs*0.05;}
      else if(t.kind==='pfan'||t.kind==='gfan'){HINT.kind='drag';HINT.dx=L.hs*0.6;HINT.dy=-L.hs*0.05;}
      else if(t.kind==='hat'&&G.finds>=2&&G.hintN%2===0&&G.phase==='seek'&&t.pl.isHat){HINT.kind='lift';const g=geom(t.pl);HINT.x=g.x;HINT.y=g.y-g.s*0.1;HINT.dx=0;HINT.dy=-g.s*0.45;}
      else if(t.kind==='clue'&&G.finds>=2&&G.hintN%3===0&&t.pl.isHat&&G.world==='shop'){HINT.kind='lift';const g=geom(t.pl);HINT.x=g.x;HINT.y=g.y-g.s*0.1;HINT.dx=0;HINT.dy=-g.s*0.45;HINT.pl=t.pl;}
      evlog('hint',HINT.kind+':'+key);
      HATS.forEach(h=>{if(h.showKey&&h.showKey[0]==='w')h.freeze=Math.max(h.freeze,T+2.2);});
    }
  }
  if(HINT.t>=0){HINT.t+=dt; if(HINT.kind==='lift'&&HINT.pl&&HINT.t>0.6&&HINT.t<1.5&&!HINT.pl.lifting&&HINT.pl.occ.length&&G.phase==='seek') HINT.pl.lift.t=0.12; else if(HINT.kind==='lift'&&HINT.pl&&HINT.t>=1.5&&!HINT.pl.lifting&&HINT.pl.lift.t===0.12) HINT.pl.lift.t=0;
    if(HINT.t>2.2)HINT.t=-1;}
  /* a character gives one natural cue when the child seems stuck */
  if(t&&!G.charHint&&G.idle>9){
    G.charHint=true; evlog('charhint',key);
    if(t.pl&&t.pl.occ.length&&(t.kind==='clue'||t.kind==='hat'||t.kind==='knot')){
      const pl=t.pl; pl.hop.vel+=8; sfx('pushBack'); pl.occ.forEach(a=>{a.peek.t=1.3;a.peekHold=1.6;mood(a,'beg',2);});
    } else if(t.kind==='pfan'){ if(SN.pl){SN.pl.shake=1.2;SN.peek.t=0.5;SN.peekHold=1;} lookAtA(SN,PC,2); mood(PC,'surprised',1.5); }
    else if(t.kind==='gfan'){ PL.fan.rustle=2; SN.peek.t=1.3; SN.peekHold=1.5; sfx('giggle'); }
    else if(t.kind==='perf'){ const pf=G.show.perf[t.idx]; pf.units.forEach(a=>{a.hy.vel+=7;mood(a,'beg',2);}); }
    else if(t.pl){ t.pl.hop.vel+=8; }
    members().forEach(a=>{if(a.state==='out'){const tp=targetPoint(t);if(tp){a.look={x:tp.x,y:tp.y};a.lookHold=2.5;a.lean.t=0.4;co((function*(){yield 1.2;a.lean.t=0;})(),'fx');}}});
  }
}

