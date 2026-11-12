'use strict';
/* ---------- S12 finding ---------- */
function noteFind(a,pl,how,joint){
  G.finds++; C.lastFindT=T; C.reloc=false;
  if(C.order.indexOf(a.kind)<0) C.order.push(a.kind);
  C.roundOrder.push(a.kind);
  if(!C.first){C.first=a.kind;MEM.firstCounts[a.kind]++;MEM.lastFirst=a.kind;}
  if(pl&&pl.isHat){MEM.fav[a.kind][pl.type]=Math.min(999,MEM.fav[a.kind][pl.type]+1);
    if(a===SN){SW[pl.type]++; MEM.wary[pl.type]=Math.min(9,Math.max(MEM.wary[pl.type],SW[pl.type])); C.habit=pl; if(!joint) C.soloHat=pl;}}
  if(a===SN){HATS.forEach(h=>h.print=0); clearStrongTrails();}
  if(!joint&&(how==='knot'||how==='lift')){C.gentle++;MEM.gentle++;}
  evlog('find',a.kind+':'+how+':'+(pl?pl.type:''));
  saveMem();
}
function noteOpen(pl){
  pl.opens++;
  if(pl.opens===3&&pl.isHat){SW[pl.type]++;MEM.wary[pl.type]=Math.min(9,Math.max(MEM.wary[pl.type],SW[pl.type]));evlog('opens3',pl.type);}
}
/* pop an animal out of its place */
function* popOut(a,how,to,opt){
  const pl=a.pl; if(!pl) return;
  const gentle=(how==='knot'||how==='lift'||how==='stroke'||how==='soft');
  if(pl.isHat){ if(pl.type==='box'){pl.lift.t=0.45;} else {pl.hop.vel+=gentle?4:10;pl.tilt.vel+=fx(-4,4);} pl.sq.vel-=6; }
  release(a); a.alpha=1; a.peek.t=0.7;
  const p=placeBase(pl);
  if(!(opt&&opt.quiet)){ if(gentle){hearts(p.x,p.y-p.s*0.4,10);flowers(p.x,p.y-p.s*0.3,8);} else {sparks(p.x,p.y-p.s*0.4,14);burst(p.x,p.y-p.s*0.3,16,CONF);} }
  mood(a,gentle?'giggle':'surprised',0.8);
  yield* goA(a,to||standBy(pl,opt&&opt.slot),gentle?0.55:0.42,gentle?0.6:1.0);
  a.sq.vel+=7; if(pl.type==='box') pl.lift.t=0;
  mood(a,'happy',1.4);
}
function tryFind(pl,how,who){
  if(G.phase!=='seek'||G.lock>0) return false;
  const occ=pl.occ.filter(a=>a.state==='hidden'&&!a.inbound);
  if(!occ.length) return false;
  /* D2: while the proud fan is open the snail is too shy to come out */
  if(C.d2==='open'&&occ.indexOf(SN)>=0&&occ.length===1){
    SN.tremble=1; SN.peek.t=0.36; mood(SN,'scared',1.2); sfx('scared'); pl.shake=1; lookAtA(SN,PC,1.5); lookAtPl(PC,pl,1.5);
    C.d2box++; evlog('d2-shy',String(C.d2box));
    if(C.d2box>=2) co(seqFold('self'),'scene');
    return true;
  }
  if(G.world==='show'&&pl.type==='fan'&&C.d4&&C.d4!=='done'){co(seqRollOut(pl,how,occ),'scene');return true;}
  if(occ.length>=2){co(seqJoint(occ,pl,how),'scene');return true;}
  const a=occ[0];
  if(G.world==='shop'){
    if(a===SN){
      if(PC.state==='hidden'&&PC.pl!==pl&&C.step==='R1'){ if(how==='knot') co(seqD3(pl),'scene'); else co(seqD1(pl,how),'scene'); }
      else if(C.d2==='folded') co(seqReassure(pl,how),'scene');
      else co(seqSimple(a,pl,how),'scene');
    } else if(a===PC){
      if(C.d3==='peek') co(seqPeacockGentle(pl,how),'scene');
      else if(SN.state==='hidden'&&C.step==='R1'&&!C.d2) co(seqD2(pl,how),'scene');
      else co(seqSimple(a,pl,how),'scene');
    } else co(seqRabbitFound(pl,how),'scene');
  } else {
    if(a===RB) co(seqRabbitFound(pl,how),'scene'); else co(seqSimple(a,pl,how),'scene');
  }
  return true;
}
function done(){ G.lock=Math.max(0,G.lock-1); if(G.lock===0) afterSeq(); }
function afterSeq(){
  if(G.phase==='swell'||G.phase==='show'||G.phase==='ret') return;
  if(anyHidden()){G.phase='seek';return;}
  co(seqNextRound(),'scene');
}

/* D1: antennae first -> snail feels safe, calls the peacock, they choose a wide hat */
function* seqD1(pl,how){
  G.lock++; G.phase='cut';
  noteFind(SN,pl,how); noteOpen(pl); C.r1Hat=pl;
  sfx('found');
  yield* popOut(SN,how);
  SN.stretch.t=1; mood(SN,'happy',2); SN.waveT=1.4; sfx('call');
  const sp=posOf(SN); hearts(sp.x,sp.y-asz()*0.7,6);
  lookAtPl(SN,PC.pl,2); rabbitMimic('stretch');
  yield 0.5;
  const ppl=PC.pl; PC.fan.t=0; PC.peek.t=0.45; ppl.hop.vel+=5; sfx('peacockVoice');
  yield 0.3;
  yield* popOut(PC,'soft',nextTo(SN),{quiet:true});
  mood(PC,'shy',1.5); lookAtA(PC,SN,1.5); lookAtA(SN,PC,1.5); bondUp(SN,PC,1);
  evlog('D1',pl.type);
  SN.stretch.t=0;
  /* the wide hat puffs up into a two-animal hat */
  const W=PL.wide; W.inf.t=1; sfx('inflate'); puff(W,14); lookAtPl(SN,W,1.5); lookAtPl(PC,W,1.5);
  yield 0.6;
  co(goHide(PC,W,'top',0.6),'scene');
  yield 0.12;
  yield* goHide(SN,W,'brim',0.65);
  C.step='R2'; C.pairHat=W; C.roundOrder=[];
  sfx('shimmer');
  G.phase='seek'; done();
}
/* D2: feathers first -> proud fan, snail flees into the hat box */
function* seqD2(pl,how){
  G.lock++; G.phase='cut';
  noteFind(PC,pl,how); noteOpen(pl);
  sfx('found');
  yield* popOut(PC,how);
  PC.fan.t=1; mood(PC,'proud',3); sfx('fan'); const pp=posOf(PC); sparks(pp.x,pp.y-asz()*0.7,14); rabbitMimic('fan');
  mood(SN,'scared',2); SN.peek.t=0.36; sfx('scared'); SN.tremble=1;
  yield 0.45;
  const from=SN.pl; let dest=PL.box;
  if(dest===from||dest.occ.length) dest=nearHats(from).find(h=>h.occ.length===0&&h!==PL.wide)||PL.bonnet;
  release(SN); SN.anchor=inPlace(from); SN.state='out';
  yield* goA(SN,standBy(from),0.25,0.4);
  addTrail(inPlace(from),inPlace(dest),0.7,false);
  commitHide(SN,dest,dest.type==='box'?'box':'brim'); SN.inbound=true;
  yield* goA(SN,inPlace(dest),0.7,0.3);
  SN.inbound=false; SN.anchor=inPlace(dest); dest.sq.vel+=6; if(dest.type==='box') dest.shake=1;
  SN.peek.t=0.36; SN.tremble=1; mood(SN,'scared',99);
  C.d2='open'; C.d2box=0; C.r1Hat=from;
  lookAtPl(PC,dest,2); evlog('D2-open',dest.type);
  G.phase='seek'; done();
}
function* seqFold(by){
  if(C.d2!=='open') return; C.d2='folding';
  G.lock++; G.phase='cut';
  PC.fan.t=0; sfx('fold'); mood(PC,'shy',2); bondUp(SN,PC,1);
  if(SN.pl) lookAtPl(PC,SN.pl,2);
  rabbitMimic('fold'); evlog('D2-fold',by);
  yield 0.45;
  SN.tremble=0; SN.peek.t=1.0; mood(SN,'neutral',0.5); SN.waveT=1; if(SN.pl){SN.pl.hop.vel+=3;SN.pl.shake=0;}
  sfx('shimmer');
  C.d2='folded';
  G.phase='seek'; done();
}
function* seqReassure(pl,how){
  G.lock++; G.phase='cut';
  noteFind(SN,pl,how); noteOpen(pl); C.habit=pl;
  sfx('found');
  yield* popOut(SN,how);
  yield* goA(SN,nextTo(PC),0.6,0.3);
  lookAtA(SN,PC,2); lookAtA(PC,SN,2); mood(SN,'happy',2); mood(PC,'happy',2);
  const p=posOf(SN); hearts(p.x,p.y-asz()*0.6,12); sfx('joint'); bondUp(SN,PC,1);
  SN.sq.vel+=6; PC.sq.vel+=6;
  C.d2='done'; evlog('D2','reassured');
  yield 0.7;
  G.phase='seek'; done();
}
/* D3: ribbon first -> the snail is tickled, the peacock imitates the gentle play */
function* seqD3(pl){
  G.lock++; G.phase='cut';
  noteFind(SN,pl,'knot'); noteOpen(pl); C.r1Hat=pl; C.lastKnot=pl;
  mood(SN,'giggle',2.2); sfx('giggle');
  yield 0.25;
  yield* popOut(SN,'knot');
  mood(SN,'giggle',1.6); sfx('giggle'); rabbitMimic('giggle');
  for(let i=0;i<4;i++){SN.sq.vel+=5*(i%2?-1:1);yield 0.12;}
  lookAtPl(SN,PC.pl,2);
  /* the peacock lifts its own hat softly, feathers folded */
  const ppl=PC.pl; ppl.lift.t=0.24; PC.fan.t=0; PC.peek.t=0.6; mood(PC,'shy',99);
  C.d3='peek'; evlog('D3-peek',ppl.type);
  sfx('shimmer');
  G.phase='seek'; done();
}
function* seqPeacockGentle(pl,how){
  G.lock++; G.phase='cut';
  noteFind(PC,pl,how); noteOpen(pl);
  pl.lift.t=0.55; sfx('found');
  yield 0.15;
  yield* popOut(PC,'soft');
  pl.lift.t=0;
  /* a little bow */
  mood(PC,'happy',2); PC.sq.vel+=8; yield 0.2; PC.lean.t=0.8; yield 0.35; PC.lean.t=0;
  if(SN.state==='out'){ yield* goA(SN,nextTo(PC),0.5,0.3); lookAtA(SN,PC,2); lookAtA(PC,SN,2); }
  const p=posOf(PC); hearts(p.x,p.y-asz()*0.7,10); bondUp(SN,PC,1);
  C.d3='done'; evlog('D3','peacock-gentle');
  yield 0.4;
  G.phase='seek'; done();
}
/* friends found together */
function* seqJoint(list,pl,how){
  G.lock++; G.phase='cut';
  list.forEach(a=>noteFind(a,pl,how,true)); noteOpen(pl);
  if(how==='knot'||how==='lift'){C.gentle++;MEM.gentle++;}
  if(list.indexOf(SN)>=0) C.habit=C.habit||pl;
  sfx('joint');
  const p=placeBase(pl); burst(p.x,p.y-p.s*0.5,20,CONF); hearts(p.x,p.y-p.s*0.6,12);
  const ts=list.map((a,i)=>popOut(a,how==='knot'?'knot':'soft',standBy(pl,i),{quiet:true}));
  const subs=ts.map(t=>co(t,'scene'));
  yield ()=>subs.every(s=>s.dead);
  /* they look at each other, happy spin */
  for(let i=0;i<list.length;i++) for(let j=0;j<list.length;j++) if(i!==j){bondUp(list[i],list[j],1);}
  list.forEach((a,i)=>{lookAtA(a,list[(i+1)%list.length],2);mood(a,'happy',2);});
  rabbitMimic('spin');
  for(let i=0;i<10;i++){list.forEach(a=>{a.spin+=TAU/10;});yield 0.04;}
  list.forEach(a=>{a.spin=0;a.hy.vel+=5;});
  evlog('JOINT',list.map(a=>a.kind).join('+'));
  if(list.indexOf(RB)>=0&&list.length>=2){ C.rabbitCopied=true; const fr=list.find(a=>a!==RB); evlog('mimic',fr.kind); }
  if(pl.type==='garland'||pl.type==='fan'){}
  yield 0.5;
  /* first joint find in a cycle where the rabbit is still watching: it copies them and hides; the snail goes back */
  if(G.world==='shop'&&!G.rabbitMember&&C.step==='R2'){
    yield* seqR3();
  }
  G.phase='seek'; done();
}
function* seqR3(){
  C.step='R3'; C.roundOrder=[];
  RB.peek.t=1; mood(RB,'happy',2); RB.hy.vel+=6; sfx('hop');
  yield 0.35;
  /* rabbit hops from the window into the beret */
  RB.state='out'; RB.anchor=winSpot();
  const bh=PL.beret.occ.length?HATS.find(h=>h.occ.length===0&&h!==PL.wide):PL.beret;
  yield* goHide(RB,bh,'top',0.75);
  RB.ear.t=0.2; sfx('hop');
  /* the snail goes back to the hat it was found in first (unless it remembers that hat is watched) */
  const sh=C.soloHat||C.r1Hat;
  const home=sh&&sh.occ.length===0&&sh!==bh?sh:(HATS.find(h=>h.occ.length===0&&h!==PL.wide&&h!==bh)||PL.bonnet);
  yield* snailGo(home,bh);
  lookAtPl(PC,SN.pl,3); mood(PC,'happy',2);
  evlog('R3',(SN.pl?SN.pl.type:'')+'/'+bh.type);
}
/* snail heads for a hat; if it remembers being found there, it turns to a friend's side (D6) */
function* snailGo(dest,friendPl,pairWith){
  const red=d6Redirect(dest,friendPl);
  if(red){
    /* approach the old hat, remember, turn away */
    const old=dest;
    if(SN.state==='hidden'&&SN.pl){ release(SN); SN.anchor=inPlace(old); }
    SN.state='out';
    yield* goA(SN,standBy(old),0.55,0.25);
    mood(SN,'surprised',1); SN.waveT=1.2; sfx('remember'); old.print=1; old.hop.vel+=3;
    for(let i=0;i<3;i++){SN.dir=-SN.dir;yield 0.14;}
    SN.dir=1;
    const tgt=pairWith||red;
    addTrail(inPlace(old),inPlace(tgt),99,true);
    commitHide(SN,tgt,tgt.type==='box'?'box':'brim'); SN.inbound=true;
    yield* goA(SN,inPlace(tgt),0.9,0.2);
    SN.inbound=false; SN.anchor=inPlace(tgt); tgt.sq.vel+=6;
    C.d6pending=false; evlog('D6',old.type+'>'+tgt.type);
    /* friend gazes at the snail's new hat */
    members().forEach(o=>{if(o!==SN){lookAtPl(o,tgt,2.5);}});
    return true;
  }
  if(SN.state==='hidden'&&SN.pl===dest) return false;
  if(SN.state==='hidden'&&SN.pl){release(SN);SN.anchor=inPlace(SN.lastPl);SN.state='out';}
  yield* goHide(SN,dest,(pairWith||dest).type==='box'?'box':'brim',0.8);
  return false;
}
function* seqSimple(a,pl,how){
  G.lock++; G.phase='cut';
  noteFind(a,pl,how); noteOpen(pl);
  sfx('found');
  const ho=(how==='knot'||how==='lift'||how==='stroke')?how:'clue';
  yield* popOut(a,ho);
  /* friendship reactions depend on who is already out */
  const outs=members().filter(o=>o!==a&&o.state==='out');
  if(a===PC){ PC.fan.t=1; sfx('fan'); mood(PC,'proud',1.5); if(SN.state==='hidden'){ SN.peek.t=1.05; SN.waveT=1; lookAtPl(PC,SN.pl,1.5); if(G.world==='show'||C.bonds.sp>=2){ yield 0.5; PC.fan.t=0; sfx('fold'); mood(PC,'shy',1.2);} } else {yield 0.6;PC.fan.t=0;} }
  else if(a===SN){ SN.stretch.t=1; SN.waveT=1; sfx('call'); yield 0.5; SN.stretch.t=0; members().forEach(o=>{if(o.state==='hidden'&&o.pl){o.peek.t=1.05;o.pl.hop.vel+=3;}}); }
  outs.forEach(o=>{lookAtA(o,a,1.5);mood(o,'happy',1.5);bondUp(o,a,G.world==='show'?1:0);});
  if(outs[0]){ yield* goA(a,nextTo(outs[0]),0.5,0.3); }
  if(a===SN) C.habit=pl;
  yield 0.3;
  G.phase='seek'; done();
}
function lastFriendFound(){for(let i=C.roundOrder.length-1;i>=0;i--){const k=C.roundOrder[i];if(k!=='rabbit')return k==='snail'?SN:PC;}return null;}
function* seqRabbitFound(pl,how){
  G.lock++; G.phase='cut';
  const fr=lastFriendFound();
  noteFind(RB,pl,how); noteOpen(pl);
  sfx('found');
  yield* popOut(RB,how);
  /* copies the friend that was found just before */
  const cp=fr||(SN.state==='out'?SN:(PC.state==='out'?PC:null));
  if(cp){
    lookAtA(RB,cp,1.5);
    yield 0.25;
    if(cp===PC){RB.ear.t=1;mood(RB,'proud',1.5);sfx('fan');yield 0.9;RB.ear.t=0;}
    else {RB.stretch.t=1;RB.hy.vel+=5;mood(RB,'happy',1.5);sfx('call');yield 0.8;RB.stretch.t=0;}
    bondUp(RB,cp,1); evlog('mimic',cp.kind);
    if(fr) C.rabbitCopied=true;
  } else { RB.hy.vel+=7; sfx('hop'); yield 0.6; }
  if(!G.rabbitMember){
    G.rabbitMember=true; MEM.rabbitJoined=1; evlog('D5','joined');
    sfx('joint');
    const p=posOf(RB); hearts(p.x,p.y-asz()*0.7,14);
    members().forEach(o=>{if(o!==RB&&o.state==='out'){lookAtA(o,RB,2);mood(o,'happy',2);}});
    if(SN.state==='hidden') lookAtPl(RB,SN.pl,2.5);
    saveMem(true);
  }
  if(cp&&cp.state==='out') yield* goA(RB,nextTo(cp),0.5,0.7);
  yield 0.3;
  G.phase='seek'; done();
}

