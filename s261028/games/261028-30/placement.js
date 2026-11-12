'use strict';
/* ---------- S10 placement ---------- */
function shopHats(){return HATS.slice();}
function nearHats(pl,excl){const b=placeHome(pl,'shop');return shopHats().filter(h=>h!==pl&&(!excl||excl.indexOf(h)<0)).sort((p,q)=>{const a=placeHome(p,'shop'),c=placeHome(q,'shop');return dist(a.x,a.y,b.x,b.y)-dist(c.x,c.y,b.x,b.y);});}
function knotHats(){return HATS.filter(h=>h.knot.has);}
function isWary(pl){return pl&&pl.isHat&&SW[pl.type]>=2;}
function snailHabit(){return C.soloHat||C.r1Hat||null;}
function assignShopPositions(first){
  let order;
  if(first){ const rest=shuffle([0,1,4,5]); order={straw:2,feather:3}; ['box','bonnet','wide','beret'].forEach((t,i)=>order[t]=rest[i]); }
  else { const p=shuffle([0,1,2,3,4,5]); order={}; HTYPES.forEach((t,i)=>order[t]=p[i]); }
  HTYPES.forEach(t=>{PL[t].shopPos=order[t]; PL[t].col=first&&G.cycle===0?PAL[t][0]:rpick(PAL[t]);});
}
/* choose round-1 spots using memory (favourite / wary / gentle / friends) */
function planR1(){
  const plan=[]; const used=[];
  const fresh=!RESTORED&&G.cycle===0;
  if(fresh){ plan.push([SN,PL.straw,'brim']); plan.push([PC,PL.feather,'top']); return plan; }
  /* snail: favourite hat that is not 'watched'; ribbon preference after gentle play */
  const gentleP=Math.min(0.85,0.25+0.2*(MEM.gentle+(C?C.gentle:0)));
  let sh=null, where='brim';
  const available=HATS.filter(h=>h!==PL.wide&&h!==PL.beret);
  const unwatched=available.filter(h=>!isWary(h));
  const cand=unwatched.length?unwatched:available;
  if(rng()<gentleP){ const ks=cand.filter(h=>h.knot.has&&h!==(C.lastKnot||null)); if(ks.length){sh=rpick(ks);where='knot';} }
  if(!sh){ let bv=-1; cand.forEach(h=>{const v=MEM.fav.snail[h.type]+rng()*1.5;if(v>bv){bv=v;sh=h;}}); where=sh.type==='box'?'box':'brim'; }
  plan.push([SN,sh,where]); used.push(sh);
  /* peacock: next to snail if they were good friends last time */
  const longSP=MEM.bonds.sp;
  const pcC=nearHats(sh,used.concat([PL.wide])).filter(h=>h!==PL.beret||!G.rabbitMember);
  const ph=longSP>=2?pcC[0]:pcC[Math.min(pcC.length-1,2+Math.floor(rng()*2))];
  plan.push([PC,ph,'top']); used.push(ph);
  if(G.rabbitMember){
    const bf=(MEM.bonds.sr>=MEM.bonds.pr)?SN:PC; const bfh=bf===SN?sh:ph;
    const rc=nearHats(bfh,used.concat([PL.wide])); plan.push([RB,rc[0]||PL.beret,'top']);
  }
  return plan;
}
function pickKnotHat(not){
  const pref=[PL.bonnet,PL.box,PL.straw].filter(h=>h!==not&&!isWary(h)&&h.occ.length===0);
  return pref[0]||PL.wide;
}
function choosePairHat(pair){
  if(pair.indexOf(SN)>=0&&isWary(PL.wide)){ const fr=pair[0]===SN?pair[1]:pair[0]; const h=(fr.lastPl&&fr.lastPl.isHat&&!isWary(fr.lastPl))?fr.lastPl:PL.bonnet; return h; }
  return PL.wide;
}
/* D6: if the snail is about to go back to a watched hat, it remembers and goes next to a friend */
function d6Redirect(dest,friendPl){
  if(!isWary(dest)) return null;
  let tgt=null;
  if(friendPl){ tgt=nearHats(friendPl,[dest]).find(h=>h.occ.length===0&&!isWary(h)&&h!==PL.wide); }
  if(!tgt) tgt=HATS.find(h=>h.occ.length===0&&!isWary(h)&&h!==dest);
  return tgt;
}

