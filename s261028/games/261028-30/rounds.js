'use strict';
/* ---------- S13 rounds ---------- */
function* pairHide(a,b,ph){
  if(ph===PL.wide&&ph.inf.t<1){ph.inf.t=1;sfx('inflate');puff(ph,14);yield 0.5;}
  ph.inf.t=Math.max(ph.inf.t,ph===PL.wide?1:0);
  const other=a===SN?b:(b===SN?a:null);
  if(other){
    co(goHide(other,ph,other.kind==='snail'?'brim':'top',0.65),'scene');
    yield 0.2;
    const habit=snailHabit();
    if(habit&&habit!==ph&&isWary(habit)){ yield* snailGo(habit,ph,ph); }
    else yield* goHide(SN,ph,ph===C.lastKnot||(C.d3==='done'&&ph.knot.has&&ph!==PL.wide)?'knot':'brim',0.75);
  } else {
    co(goHide(a,ph,'top',0.65),'scene'); yield 0.2; yield* goHide(b,ph,'top',0.65);
  }
}
function* seqNextRound(){
  G.lock++; G.phase='cut';
  yield 0.5;
  C.roundOrder=[]; C.roundStart=T; C.lastFindT=T; HATS.forEach(h=>h.opens=0);
  if(G.world==='shop'){
    if(!G.rabbitMember&&C.step==='R1'){
      const ph=C.d3==='done'?pickKnotHat(C.lastKnot):PL.wide;
      yield* pairHide(SN,PC,ph); C.step='R2'; C.pairHat=ph;
      evlog('R2',ph.type);
    } else {
      yield* seqSwellSetup();
    }
  } else {
    if(C.step==='O1'){ yield* seqTrioOutdoor(); }
    else if(C.step==='O2'){ yield* seqShowStart(); }
  }
  if(G.phase==='cut') G.phase='seek';
  done();
}
function* seqSwellSetup(){
  const pair=bestPair(); const third=members().filter(a=>pair.indexOf(a)<0);
  const ph=choosePairHat(pair);
  yield* pairHide(pair[0],pair[1],ph);
  third.forEach(t=>{co(goA(t,standBy(ph,0),0.6,0.6),'scene');lookAtPl(t,ph,3);mood(t,'happy',2);});
  C.pairHat=ph; ph.cen.t=1; C.step='R4'; G.swell=0; G.phase='swell'; evlog('SWELL',ph.type+':'+pair.map(a=>a.kind).join('+'));
  yield 0.6;
}
function swellTap(){
  if(G.phase!=='swell'||G.lock>0) return;
  const ph=C.pairHat; G.swell++;
  ph.inf.t=(ph===PL.wide?1:0)+0.45*G.swell; ph.sq.vel+=10; ph.hop.vel+=4;
  sfx('swell',G.swell); puff(ph,12);
  ph.occ.forEach(a=>{a.peek.t=1.2;mood(a,'happy',1);});
  G.openT=[0,0.15,0.4,1][Math.min(3,G.swell)];
  evlog('swell-tap',String(G.swell));
  if(G.swell>=3) co(seqTransform(),'scene');
}
/* the brim pushes the walls apart: shop -> outdoor fashion show */
function* seqTransform(){
  G.lock++; G.phase='cut';
  const ph=C.pairHat; const pair=ph.occ.slice();
  sfx('transform'); setMusic('show'); evlog('TRANSFORM',ph.type);
  ph.inf.t=(ph===PL.wide?1:0)+1.6;
  yield 0.5;
  /* hats hop off the shelves and become walking hats */
  const rest=shuffle(HATS.filter(h=>h!==ph)); const keys=['w0','w1','w2','w3','w4'];
  ph.showKey='giant'; rest.forEach((h,i)=>h.showKey=keys[i]);
  HATS.forEach((h,i)=>{const fromShop=(()=>{const hh=h;return ()=>placeHome(hh,'shop');})();
    const toShow=(()=>{const hh=h;return ()=>placeHome(hh,'show');})();
    h.travel={from:()=>{const p=fromShop();return {x:p.x,y:p.y,s:p.s};},to:toShow,t0:T+0.08*i,dur:1.3,arc:1.0};});
  for(let i=0;i<10;i++){const x=L.x0+fx(0.1,0.9)*L.w;burst(x,L.y0+fx(0.2,0.8)*L.h,8,CONF);yield 0.12;}
  yield 0.6;
  G.world='show'; G.open=1; G.openT=1;
  HATS.forEach(h=>h.travel=null);
  ph.inf.t=ph===PL.wide?1:0; ph.inf.v=ph.inf.t; ph.cen.t=0; ph.cen.v=0;
  /* the pair sneaks behind the big feather fan; the giant hat will be empty */
  pair.forEach(a=>{commitHide(a,PL.fan,'fan'); a.anchor=inPlace(PL.fan); a.peek.t=0.45; a.peek.v=0.45;});
  members().filter(a=>pair.indexOf(a)<0).forEach((a,i)=>{a.anchor=spot(i?'watchR':'watchL');a.travel=null;mood(a,'giggle',2);lookAtPl(a,PL.fan,4);});
  C.step='O1'; C.d4='hat'; C.roundOrder=[]; C.lastFindT=T;
  yield 0.3;
  G.phase='seek'; done();
}
/* D4: the giant hat is empty... they are behind the feathers */
function emptyGiant(pl,how){
  if(G.lock>0) return;
  co((function*(){
    G.lock++; G.phase='cut';
    pl.lift.t=0.9; sfx('huh'); noteOpen(pl);
    members().filter(a=>a.state==='out').forEach(a=>{mood(a,'giggle',2);a.sq.vel+=6;lookAtPl(a,PL.fan,3);});
    yield 0.35;
    addTrail(inPlace(pl),inPlace(PL.fan),0.8,true);
    PL.fan.rustle=1.5; SN.peek.t=1.1; PC.peek.t=1.0; sfx('giggle');
    C.d4='fan'; evlog('D4-empty',pl.type);
    yield 0.6; pl.lift.t=0;
    G.phase='seek'; done();
  })(),'scene');
}
function* seqRollOut(pl,how,occ){
  G.lock++; G.phase='cut';
  occ.forEach(a=>noteFind(a,pl,how==='stroke'?'stroke':'clue',true));
  PL.fan.part=(PL.fan.partDir||1); sfx('roll'); sfx('joint');
  const f=fanGeom();
  occ.forEach((a,i)=>{release(a); a.anchor=()=>({x:f.x+(i?0.12:-0.12)*f.r,y:f.y});});
  clearStrongTrails();
  const dir=PL.fan.partDir||1;
  const subs=occ.map((a,i)=>co((function*(){
    const to=spot(i===0?'rollA':'rollB');
    a.travel=null;
    const tr={from:a.anchor,to:to,t0:T,dur:1.0,arc:0.15,lin:true}; a.travel=tr;
    for(let k=0;k<25;k++){a.roll+=dir*TAU/12;yield 0.04;}
    a.roll=0; if(a.travel===tr){a.travel=null;a.anchor=to;}
    a.sq.vel+=8; mood(a,'happy',2);
  })(),'scene'));
  yield ()=>subs.every(s=>s.dead);
  PL.fan.part=0;
  occ.forEach((a,i)=>{lookAtA(a,occ[(i+1)%occ.length],2);});
  const p=posOf(occ[0]); hearts(p.x,p.y-asz()*0.6,14);
  for(let i=0;i<occ.length;i++)for(let j=i+1;j<occ.length;j++) bondUp(occ[i],occ[j],1);
  evlog('D4','roll:'+occ.map(a=>a.kind).join('+'));
  /* the third friend copies the roll */
  const third=members().filter(a=>occ.indexOf(a)<0);
  third.forEach(t=>{co((function*(){yield 0.5;mood(t,'happy',1.5);for(let k=0;k<16;k++){t.roll+=TAU/16;yield 0.035;}t.roll=0;t.hy.vel+=5;})(),'scene');});
  if(third.length) evlog('copy-roll',third.map(a=>a.kind).join(','));
  C.d4='done';
  yield 1.0;
  G.phase='seek'; done();
}
function stageHat(){return HATS.find(h=>h.showKey==='gshow'||h.showKey==='gstage')||HATS.find(h=>h.showKey==='giant')||null;}
function showHats(){return HATS.filter(h=>h.showKey&&h.showKey[0]==='w');}
function* seqTrioOutdoor(){
  C.step='O2'; C.rabbitCopied=false; C.roundOrder=[];
  const used=[]; const walkers=shuffle(showHats().filter(h=>h.showKey!=='w4'));
  const plan=[];
  const rbF=bestFriendOf(RB); const pairUp=rbF&&bond(RB,rbF)>=2;
  if(pairUp){
    const h=walkers.find(x=>used.indexOf(x)<0); used.push(h); plan.push([RB,h,'top']); plan.push([rbF,h,rbF===SN?'brim':'top']);
    const other=rbF===SN?PC:SN;
    if(other===SN&&(C.gentle>0||rng()<0.5)) plan.push([SN,PL.garland,'knot']);
    else if(other===PC) plan.push([PC,PL.fan,'fan']);
    else {const h2=walkers.find(x=>used.indexOf(x)<0);used.push(h2);plan.push([other,h2,defWhere(other,h2)]);}
  } else {
    const sPl=(C.gentle>0&&rng()<0.6)?PL.garland:walkers[0]; if(sPl!==PL.garland) used.push(sPl);
    plan.push([SN,sPl,sPl===PL.garland?'knot':'brim']);
    const h1=walkers.find(x=>used.indexOf(x)<0&&!isWary(x))||walkers.find(x=>used.indexOf(x)<0); used.push(h1); plan.push([RB,h1,'top']);
    const h2=walkers.find(x=>used.indexOf(x)<0); used.push(h2); plan.push([PC,h2,'top']);
  }
  /* snail remembers watched hats outdoors too */
  plan.forEach(p=>{if(p[0]===SN&&isWary(p[1])){const alt=walkers.find(x=>!isWary(x)&&used.indexOf(x)<0);if(alt){p[1]=alt;p[2]='brim';}}});
  for(const [a,pl,w] of plan){ co(goHide(a,pl,w,0.75),'scene'); yield 0.18; }
  yield 0.9;
  for(let i=0;i<6;i++) puff(rpick(showHats()),4);
  evlog('O2',plan.map(p=>p[0].kind+'@'+p[1].type).join(','));
}

