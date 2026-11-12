'use strict';
/* ---------- S18 autonomy (idle life) ---------- */
function autonomy(dt){
  for(const a of ANIMALS){
    a.idleT-=dt;
    if(a.idleT>0) continue;
    a.idleT=rv(4.5,8.5);
    const isTgt=G.target&&G.target.a===a;
    if(a.state==='hidden'&&a.pl&&G.phase!=='show'){
      const r=Math.random();
      if(C.d2==='open'&&a===SN){ a.peek.t=0.42; a.peekHold=0.5; continue; }
      if(r<0.4){ a.peek.t=1.08; a.peekHold=1.2; }
      else if(r<0.7){ /* peek at a friend's spot / invite */
        const fr=members().find(o=>o!==a&&o.state==='hidden'&&o.pl&&o.pl!==a.pl);
        if(fr){ lookAtPl(a,fr.pl,2); a.waveT=isTgt?0.6:1; a.peek.t=1.0; a.peekHold=1; }
        else { const o=members().find(o2=>o2.state==='out'); if(o) lookAtA(a,o,2); }
      } else { if(a.kind==='peacock'){a.fan.t=0.6;co((function*(){yield 0.9;if(a.state==='hidden')a.fan.t=0;})(),'fx');} else if(a.kind==='rabbit'){a.ear.t=0.4;co((function*(){yield 0.6;a.ear.t=0;})(),'fx');} else {a.waveT=1;} }
    } else if(a.state==='out'&&G.lock===0&&G.phase==='seek'){
      const r=Math.random();
      if(r<0.35){ a.hy.vel+=3; }
      else if(r<0.75){ const fr=members().find(o=>o!==a&&o.state==='hidden'&&o.pl); if(fr){lookAtPl(a,fr.pl,2.2);a.lean.t=0.3;co((function*(){yield 1;a.lean.t=0;})(),'fx');} }
      else mood(a,'happy',1);
    }
  }
  /* once per round, after a long quiet time, a hidden friend sneaks to a neighbouring hat (never the guided one) */
  if(C&&G.phase==='seek'&&G.lock===0&&G.world==='shop'&&!C.reloc&&!C.d2&&C.d3!=='peek'&&T-C.lastFindT>25&&G.idle>8&&(C.step==='R1'||C.step==='R3')){
    const cands=hiddenList().filter(a=>a.pl&&a.pl.isHat&&a.pl.occ.length===1&&!(G.target&&G.target.a===a)&&!(G.target&&G.target.pl===a.pl));
    if(cands.length){ C.reloc=true; co(seqReloc(cands[0]),'scene'); }
  }
}
function* seqReloc(a){
  G.lock++; G.phase='cut';
  const from=a.pl; const to=nearHats(from).find(h=>h.occ.length===0&&h!==PL.wide&&!(a===SN&&isWary(h)));
  if(!to){G.phase='seek';done();return;}
  evlog('reloc',a.kind+':'+from.type+'>'+to.type);
  from.hop.vel+=5; release(a); a.anchor=inPlace(from); mood(a,'giggle',1.5);
  if(a===SN) addTrail(inPlace(from),inPlace(to),0.8,false);
  commitHide(a,to,a===SN?(to.type==='box'?'box':'brim'):'top'); a.inbound=true;
  yield* goA(a,inPlace(to),0.75,a===SN?0.2:0.9);
  a.inbound=false; a.anchor=inPlace(to); to.sq.vel+=6; puff(to,6);
  G.phase='seek'; done();
}

