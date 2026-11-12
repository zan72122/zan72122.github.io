'use strict';
/* ---------- S15 clue geometry & hit regions ---------- */
function clueInfo(pl,a){
  const g=geom(pl); const s=g.s; const k=G.world==='shop'?wideK(pl):1;
  if(pl.type==='fan'){const f=fanGeom(); const sd=a===SN?1:(a===PC?-1:0.0);
    if(a===RB) return {bx:f.x,by:f.y-f.r*0.98,x:f.x,y:f.y-f.r*1.0,r:Math.max(30,f.r*0.2),back:true};
    return {bx:f.x+sd*f.r*0.95,by:f.y-f.r*0.06,x:f.x+sd*f.r*0.95,y:f.y-f.r*0.2,r:Math.max(30,f.r*0.22),back:a!==SN};}
  if(pl.type==='garland'){const sd=a===SN?1:(a===PC?-1:0);return {bx:g.x+sd*s*0.28,by:g.y+s*0.06,x:g.x+sd*s*0.3,y:g.y-s*0.12,r:Math.max(30,s*0.3),back:a!==SN};}
  const others=pl.occ.filter(o=>o.state==='hidden');
  if(a.kind==='snail'){
    if(a.where==='knot'&&g.knot){const sd=pl.peekSide||1;return {bx:g.knot.x+sd*s*0.13,by:g.knot.y+s*0.03,x:g.knot.x+sd*s*0.17,y:g.knot.y-s*0.18,r:Math.max(30,s*0.27),back:false};}
    if(a.where==='box'){const ly=pl.lift.v*s;return {bx:g.x+s*0.13,by:g.y-s*0.47-ly,x:g.x+s*0.15,y:g.y-s*0.66-ly,r:Math.max(30,s*0.28),back:false};}
    const sd=pl.peekSide||1;
    return {bx:g.x+sd*s*0.36*k,by:g.y-s*0.07,x:g.x+sd*s*0.4*k,y:g.y-s*0.27,r:Math.max(30,s*0.3),back:false};
  }
  const tx=g.top.x, ty=g.top.y+s*0.1;
  let ox=0; const hasR=others.indexOf(RB)>=0, hasP=others.indexOf(PC)>=0;
  if(a.kind==='peacock'&&hasR) ox=-0.13*s; if(a.kind==='rabbit'&&hasP) ox=0.15*s;
  if(pl.type==='box'){ return {bx:tx+ox,by:ty-s*0.02,x:tx+ox,y:ty-s*0.28,r:Math.max(30,s*0.3),back:true}; }
  return {bx:tx+ox,by:ty,x:tx+ox,y:ty-s*0.26,r:Math.max(30,s*0.3),back:true};
}
function visiblePlaces(){
  if(G.world==='show') return ALLPL;
  if(G.open>0.02) return HATS.concat([PL.fan,PL.garland]);
  return HATS;
}
function animalBody(a){const p=posOf(a);const s=asz();return {x:p.x,y:p.y-s*0.42,r:Math.max(30,s*0.45)};}
function fanTouchPt(){const p=posOf(PC);const s=asz();return {x:p.x,y:p.y-s*0.6,r:Math.max(36,s*0.75)};}
function perfPoint(i){
  const S=G.show; if(!S) return null; const pf=S.perf[i]; if(!pf) return null;
  if(pf.kind==='giant'){const gh=stageHat();if(!gh)return null;const g=geom(gh);return {x:g.x,y:g.y-g.s*0.3,r:Math.max(40,g.s*0.55)};}
  if(pf.kind==='duo'){const a=animalBody(pf.units[0]),b=animalBody(pf.units[1]);return {x:(a.x+b.x)/2,y:(a.y+b.y)/2-asz()*0.2,r:Math.max(44,dist(a.x,a.y,b.x,b.y)*0.5+asz()*0.4)};}
  const b=animalBody(pf.units[0]); return {x:b.x,y:b.y,r:Math.max(36,asz()*0.55)};
}
function hitTest(x,y){
  /* the show: performers first */
  if(G.phase==='show'&&G.show){ const S=G.show;
    for(let i=0;i<S.perf.length;i++){const p=perfPoint(i);if(p&&dist(x,y,p.x,p.y)<p.r) return {kind:'perf',idx:i,obj:{grab:null},key:'perf'+i};}
  }
  const vp=visiblePlaces();
  /* knots (small, precise) */
  let best=null,bd=1e9;
  for(const pl of vp){const g=geom(pl);if(!g.knot)continue;const r=Math.max(28,g.knot.r*1.15);const d=dist(x,y,g.knot.x,g.knot.y);if(d<r&&d<bd){bd=d;best={kind:'knot',pl:pl,obj:pl,key:'knot'+pl.type};}}
  if(best) return best;
  /* clues of hidden friends */
  for(const pl of vp){for(const a of pl.occ){if(a.state!=='hidden'||a.inbound)continue;const c=clueInfo(pl,a);const d=dist(x,y,c.x,c.y);if(d<c.r&&d<bd){bd=d;best={kind:'clue',pl:pl,a:a,obj:pl,key:'clue'+a.kind};}}}
  if(best) return best;
  /* the proud open fan of the peacock */
  if(PC.state==='out'&&PC.fan.v>0.45){const f=fanTouchPt();if(dist(x,y,f.x,f.y)<f.r) return {kind:'pfan',a:PC,obj:PC,key:'pfan'};}
  /* giant feather fan */
  if(G.world==='show'){const f=fanGeom();const d=dist(x,y,f.x,f.y);if(d<f.r*1.02&&y<f.y+f.r*0.08) {
    /* hats in front of the fan win */
    let onHat=null; for(const pl of HATS){const g=geom(pl);if(x>g.body.x1&&x<g.body.x2&&y>g.body.y1&&y<g.body.y2){onHat=pl;break;}}
    if(!onHat) return {kind:'gfan',pl:PL.fan,obj:PL.fan,key:'gfan'};}}
  /* hat bodies */
  for(const pl of vp){ if(!pl.isHat) continue; const g=geom(pl); const pad=(G.world==='show'&&pl.showKey&&pl.showKey[0]==='w')?g.s*0.12:6;
    if(x>g.body.x1-pad&&x<g.body.x2+pad&&y>g.body.y1-pad&&y<g.body.y2+pad){const d=dist(x,y,(g.body.x1+g.body.x2)/2,(g.body.y1+g.body.y2)/2);if(d<bd){bd=d;best={kind:'hat',pl:pl,obj:pl,key:'hat'+pl.type};}}}
  if(best) return best;
  /* friends standing around */
  for(const a of ANIMALS){ if(a.state!=='out'||a.alpha<0.5) continue; const b=animalBody(a); const d=dist(x,y,b.x,b.y); if(d<b.r&&d<bd){bd=d;best={kind:'animal',a:a,obj:a,key:'animal'+a.kind};}}
  if(best) return best;
  if(RB.state==='window'&&G.world==='shop'){const w=winGeom();if(dist(x,y,w.x,w.y)<w.r*1.1) return {kind:'window',obj:RB,key:'window'};}
  return null;
}
/* every touchable region (for tests and for the guide) */
function hitRegions(){
  const out=[];
  const vp=visiblePlaces();
  for(const pl of vp){const g=geom(pl);
    if(pl.isHat) out.push({id:'hat:'+pl.type,kind:'hat',x:(g.body.x1+g.body.x2)/2,y:(g.body.y1*0.4+g.body.y2*0.6),r:Math.min(g.body.x2-g.body.x1,g.body.y2-g.body.y1)/2,brimY:g.y-g.s*0.06,top:g.body.y1});
    if(g.knot) out.push({id:'knot:'+pl.type,kind:'knot',x:g.knot.x,y:g.knot.y,r:Math.max(28,g.knot.r*1.15)});
    for(const a of pl.occ){if(a.state!=='hidden')continue;const c=clueInfo(pl,a);out.push({id:'clue:'+a.kind,kind:'clue',place:pl.type,x:c.x,y:c.y,r:c.r});}
  }
  if(G.world==='show'){const f=fanGeom();out.push({id:'gfan',kind:'gfan',x:f.x,y:f.y-f.r*0.55,r:f.r*0.5});}
  if(PC.state==='out'&&PC.fan.v>0.45){const f=fanTouchPt();out.push({id:'pfan',kind:'pfan',x:f.x,y:f.y,r:f.r});}
  ANIMALS.forEach(a=>{if(a.state==='out'){const b=animalBody(a);out.push({id:'animal:'+a.kind,kind:'animal',x:b.x,y:b.y,r:b.r});}});
  if(G.show){G.show.perf.forEach((p,i)=>{const q=perfPoint(i);if(q) out.push({id:'perf:'+i,kind:'perf',x:q.x,y:q.y,r:q.r});});}
  return out;
}

