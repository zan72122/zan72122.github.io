'use strict';
/* ---------- S14 the show (spotlight one performer at a time) ---------- */
const VAR_COL={duo:'#ffd6e7',parade:'#dff5cf',ribbon:'#fff0c9',giant:'#eadcff'};
function chooseVariant(){
  if(FORCE_SHOW) return FORCE_SHOW;
  const pr=Math.min(0.35,0.1+0.05*MEM.pity);
  if(G.rabbitMember&&rng()<pr) return 'giant';
  if(C.gentle>=2) return 'ribbon';
  if(C.rabbitCopied) return 'parade';
  return 'duo';
}
function favType(a){let b='straw',bv=-1;HTYPES.forEach(h=>{const v=MEM.fav[a.kind][h];if(v>bv){bv=v;b=h;}});return b;}
const COST={}; KINDS.forEach(k=>{COST[k]=mkPlace('straw');});
let SHARED=mkPlace('wide');
function* seqShowStart(){
  const v=chooseVariant(); C.variant=v; G.variantsSeen[v]=1;
  MEM.shows[v]++; MEM.pity=v==='giant'?0:Math.min(20,MEM.pity+1); MEM.lastShow=v; saveMem(true);
  evlog('D7',v);
  const pair=bestPair(); const third=members().filter(a=>pair.indexOf(a)<0)[0]||null;
  const leader=C.first==='snail'?SN:(C.first==='peacock'?PC:RB);
  /* costumes: every friend wears its favourite hat */
  ANIMALS.forEach(a=>{const t=favType(a);const c=mkPlace(t);c.col=PL[t].col;COST[a.kind]=c;});
  SHARED=mkPlace(favType(pair[0])==='beret'?'wide':favType(pair[0])); SHARED.col=PL[SHARED.type]?PL[SHARED.type].col:PAL.wide[0]; SHARED.knot.has=false;
  const gh=HATS.find(h=>h.showKey==='giant');
  if(gh){gh.travel={from:()=>placeHome(gh,'show'),to:()=>{const p=showPos('gshow');return {x:p.x,y:p.y,s:L.hs*p.f};},t0:T,dur:0.8,arc:0.6};}
  yield 0.8;
  if(gh){gh.showKey='gshow';gh.travel=null;}
  const S={v:v,pair:pair,third:third,leader:leader,perf:[],idx:0,taps:[],bowed:false,col:VAR_COL[v],t0:T,stamps:[],ribbons:v==='ribbon'};
  G.show=S;
  members().forEach(a=>{a.travel=null;a.anchor=spot('back');a.alpha=1;});
  if(v==='giant'){
    /* three friends inside one walking giant hat */
    members().forEach(a=>{a.state='inGiant';a.travel=null;});
    if(gh){const g2=gh;g2.travel={from:()=>placeHome(g2,'show'),to:()=>{const p=showPos('gstage');return {x:p.x,y:p.y,s:L.hs*p.f};},t0:T,dur:1.6,arc:0.2};
      co((function*(){yield 1.6;g2.showKey='gstage';g2.travel=null;})(),'scene');}
    S.perf=[{kind:'giant',units:members()}];
  } else if(v==='duo'){
    pair.forEach((a,i)=>{a.anchor=spot('back');co(goA(a,spot(i?'dr':'dl'),1.0,0.2),'scene');});
    if(third) co(goA(third,spot('p0'),1.0,0.3),'scene');
    S.perf=[{kind:'duo',units:pair}].concat(third?[{kind:'one',units:[third]}]:[]);
  } else if(v==='parade'){
    const order=[leader].concat(members().filter(a=>a!==leader));
    /* rabbit marches right behind the friend it copies */
    const cp=bestFriendOf(RB)||PC; const line=[cp,RB].concat(order.filter(a=>a!==cp&&a!==RB));
    S.line=line; S.copyOf=cp;
    line.forEach((a,i)=>{co((function*(){yield i*0.35;yield* goA(a,spot(['p0','p1','p2'][i]),1.0,0.5);})(),'scene');});
    S.perf=line.filter(a=>a!==RB).map(a=>({kind:'one',units:[a]}));
  } else {
    const order=[leader].concat(members().filter(a=>a!==leader));
    order.forEach((a,i)=>{co((function*(){yield i*0.3;yield* goA(a,spot(['p1','p0','p2'][i]),1.0,0.2);})(),'scene');});
    S.perf=order.map(a=>({kind:'one',units:[a]}));
  }
  S.taps=S.perf.map(()=>0);
  G.phase='show';
  yield 1.2;
  showFocus();
}
function showFocus(){const S=G.show;if(!S)return;const pf=S.perf[S.idx];if(!pf)return;pf.units.forEach(a=>{mood(a,'beg',2.5);a.hy.vel+=4;});}
function showTap(pi){
  const S=G.show; if(!S||S.bowed) return;
  const pf=S.perf[pi]; if(!pf) return;
  S.taps[pi]++; const big=S.taps[pi]>=2;
  stamp(pf);
  if(pf.kind==='giant'){
    co((function*(){ if(S.taps[pi]===1){S.giantLift=1;sfx('joint');const g=geom(stageHat()||PL.wide);burst(g.x,g.y-g.s*0.5,20,CONF);yield 0.5;members().forEach(a=>{a.hy.vel+=6;mood(a,'happy',2);});}
      else {members().forEach((a,i)=>co(signature(a,true),'fx'));yield 1.2;} })(),'fx');
  } else if(pf.kind==='duo'){
    co((function*(){S.sharedLift=1;sfx('joint');yield 0.25;for(const a of pf.units) co(signature(a,big),'fx');yield 1.0;S.sharedLift=0;})(),'fx');
  } else {
    const a=pf.units[0];
    co(signature(a,big),'fx');
    if(S.v==='parade'&&a===S.copyOf){ co((function*(){yield 0.6;yield* signature(RB,big);})(),'fx'); }
    if(S.v==='parade'&&a!==S.copyOf&&a!==RB){ co((function*(){yield 0.6;RB.hy.vel+=5;mood(RB,'happy',1);})(),'fx'); }
    if(S.v==='ribbon'){ co((function*(){a.lean.t=0.8;yield 0.4;a.lean.t=0;})(),'fx'); const p=posOf(a); flowers(p.x,p.y-asz()*0.8,10); }
  }
  evlog('show-tap',pf.kind+':'+pf.units.map(a=>a.kind).join('+'));
  if(S.taps[pi]>=2){
    if(S.idx<S.perf.length-1){S.idx++; co((function*(){yield 1.1;showFocus();})(),'fx');}
    else if(S.taps.every(n=>n>=2)) co(seqBow(),'scene');
  }
}
function stamp(pf){const S=G.show;const a=pf.units[0];const p=a.state==='inGiant'?placeBase(stageHat()||PL.wide):posOf(a);
  S.stamps.push({x:(p.x-L.x0)/L.w,y:(p.y-L.y0)/L.h,t:T,sh:Math.floor(Math.random()*4),col:CONF[S.stamps.length%CONF.length]}); if(S.stamps.length>14) S.stamps.shift();}
function* seqBow(){
  const S=G.show; S.bowed=true; G.lock++;
  yield 1.0;
  sfx('clap'); members().forEach(a=>{if(a.state!=='inGiant'){a.lean.t=0.9;mood(a,'happy',2);}});
  for(let i=0;i<6;i++){burst(L.x0+fx(0.1,0.9)*L.w,L.y0+fx(0.2,0.6)*L.h,10,CONF);yield 0.15;}
  members().forEach(a=>{a.lean.t=0;});
  if(S.v==='giant'){S.giantLift=1;members().forEach(a=>{a.state='out';});const gh=stageHat();members().forEach((a,i)=>{a.anchor=()=>{const b=placeBase(gh);return {x:b.x+(i-1)*asz()*0.8,y:b.y-b.s*0.05};};});S.giantLift=0;}
  evlog('show-bow',S.v);
  G.lock--; G.phase='ret';
}
/* tap the giant hat -> everybody jumps in, walls slide back, a new round in the shop */
function* seqReturn(){
  G.lock++; G.phase='cut';
  const gh=stageHat();
  evlog('RETURN','');
  sfx('doors'); setMusic('shop');
  for(const a of members()){ if(a.state!=='out'){a.state='out';} co(goA(a,inPlace(gh),0.6,1.0),'scene'); yield 0.15; }
  yield 0.6;
  members().forEach(a=>{a.alpha=0;});
  /* end of cycle: remember friendship */
  ['sp','sr','pr'].forEach(k=>{MEM.bonds[k]=clamp(Math.round((MEM.bonds[k]+C.bonds[k])/2+0.4),0,9);});
  MEM.cycles++; saveMem(true);
  G.cycle++; G.show=null;
  const prevHat=gh;
  newCycle();
  assignShopPositions(false);
  /* walls close, hats hop back to the shelves */
  G.openT=0;
  HATS.forEach((h,i)=>{const hh=h;h.travel={from:()=>placeHome(hh,'show'),to:()=>placeHome(hh,'shop'),t0:T+0.06*i,dur:1.2,arc:1.1};});
  yield 0.9;
  G.world='shop';
  yield 0.6;
  HATS.forEach(h=>{h.travel=null;h.showKey='';h.inf.t=0;h.lift.t=0;h.cen.t=0;h.cen.v=0;});
  G.open=0;
  /* friends hop out of the hat they came back in and hide for a new round */
  members().forEach(a=>{a.alpha=1;a.state='out';a.anchor=standBy(prevHat,0);a.pl=null;});
  RB.state=G.rabbitMember?'out':'window';
  G.lock--;
  yield* seqHideR1(true);
  G.phase='seek';
}
function* seqHideR1(animated){
  const plan=planR1();
  C.roundOrder=[]; C.roundStart=T; C.lastFindT=T;
  if(!animated){ plan.forEach(p=>commitHide(p[0],p[1],p[2])); return; }
  G.lock++; G.phase='cut';
  /* the snail remembers the hat it was found in most and avoids it (memory) */
  let favT='',fv=0; HTYPES.forEach(h=>{if(MEM.fav.snail[h]>fv){fv=MEM.fav.snail[h];favT=h;}});
  for(const [a,pl,w] of plan){
    if(a===SN&&favT&&isWary(PL[favT])&&PL[favT]!==pl){ const fr=plan.find(q=>q[0]!==SN); co(snailGo(PL[favT],fr?fr[1]:null,pl),'scene'); yield 0.2; continue; }
    co(goHide(a,pl,w,0.8),'scene'); yield 0.2;
  }
  yield 0.9;
  evlog('R1',plan.map(p=>p[0].kind+'@'+p[1].type).join(','));
  G.lock--;
}

