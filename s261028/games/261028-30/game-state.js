'use strict';
/* ---------- S9 game state ---------- */
const Q=(()=>{try{return new URLSearchParams(location.search);}catch(e){return null;}})();
const FRESH=!!(Q&&Q.get('fresh')==='1');
const FORCE_SHOW=(Q&&['duo','parade','ribbon','giant'].indexOf(Q.get('forceShow'))>=0)?Q.get('forceShow'):'';
if(FRESH){MEM=defMem();MEM.plays=1;storeState=storeOK?'first':storeState;saveMem(true);}
const RESTORED=MEM.plays>1&&!FRESH;
/* session memory of the snail (which hats feel 'watched') */
const SW={}; HTYPES.forEach(h=>SW[h]=0);
(function(){const arr=HTYPES.map(h=>[h,MEM.wary[h]]).filter(x=>x[1]>=2).sort((a,b)=>b[1]-a[1]).slice(0,2);
  arr.forEach(x=>SW[x[0]]=2); HTYPES.forEach(h=>MEM.wary[h]=Math.max(0,MEM.wary[h]-1));})();

const G={world:'shop',open:0,openT:0,phase:'boot',lock:0,cycle:0,rabbitMember:!!MEM.rabbitJoined&&!FRESH,
  target:null,tkey:'',idle:0,hintT:-1,hintKind:'tap',hintN:0,charHint:false,finds:0,swell:0,show:null,
  firstTouch:false,lastInputT:0,variantsSeen:{},layoutV:0,ready:false,stamps:[]};
let C=null;
function newCycle(){
  C={bonds:{sp:0,sr:0,pr:0},gentle:0,order:[],roundOrder:[],first:'',step:'R1',r1Hat:null,lastKnot:null,
     d2:'',d2box:0,d3:'',d4:'',reloc:false,lastFound:null,rabbitCopied:false,variant:'',pairHat:null,
     roundStart:T,lastFindT:T,habit:null,d6pending:false};
  HATS.forEach(h=>{h.opens=0;h.print=0;});
}
const asz=()=>L.hs*0.62;
function members(){return G.rabbitMember?[SN,PC,RB]:[SN,PC];}
function hiddenList(){return ANIMALS.filter(a=>a.state==='hidden');}
function anyHidden(){return ANIMALS.some(a=>a.state==='hidden');}
function bkey(a,b){const k=[a.kind,b.kind].sort().join(',');return k==='peacock,snail'?'sp':(k==='rabbit,snail'?'sr':'pr');}
function bondUp(a,b,n){if(!a||!b||a===b)return;const k=bkey(a,b);C.bonds[k]=Math.min(9,C.bonds[k]+(n||1));}
function bond(a,b){return C.bonds[bkey(a,b)];}
function bestPair(){
  const m=members(); if(m.length<3) return [SN,PC];
  const cands=[[SN,PC],[SN,RB],[PC,RB]];
  let best=cands[0],bv=-1;
  cands.forEach(p=>{let v=bond(p[0],p[1])*10; const fi=C.order.indexOf(p[0].kind),fj=C.order.indexOf(p[1].kind);
    v+=(fi>=0&&fi<2?2:0)+(fj>=0&&fj<2?2:0)+(p[0]===SN&&p[1]===PC?1:0); if(v>bv){bv=v;best=p;}});
  return best;
}
function bestFriendOf(a){let b=null,bv=-1;members().forEach(o=>{if(o!==a){const v=bond(a,o)+MEM.bonds[bkey(a,o)]*0.1;if(v>bv){bv=v;b=o;}}});return b;}

/* anchors */
function inPlace(pl){return ()=>{const b=placeBase(pl);return {x:b.x,y:b.y};};}
function sideOf(x){return x<L.x0+L.w*0.5?1:-1;}
function standBy(pl,slot){
  return ()=>{const b=placeBase(pl);const sd=sideOf(b.x);const k=(G.world==='shop'?wideK(pl):1);
    const off=(0.55*k+(slot||0)*0.42)*b.s; let x=b.x+sd*off;
    x=clamp(x,L.x0+asz()*0.45,L.x0+L.w-asz()*0.45);
    return {x:x,y:b.y+(slot?b.s*0.04:0)};};
}
function nextTo(a,side){return ()=>{const p=posOf(a);const sd=side||(p.x<L.x0+L.w*0.5?1:-1);return {x:clamp(p.x+sd*asz()*0.75,L.x0+asz()*0.45,L.x0+L.w-asz()*0.45),y:p.y};};}
function spot(key){return ()=>{const p=showPos(key);return {x:p.x,y:p.y};};}
function winSpot(){return ()=>{const w=winGeom();return {x:w.x,y:w.y+w.r*0.55};};}
function posOf(a){
  if(a.travel){const tr=a.travel;const k=sat((T-tr.t0)/tr.dur);const e=tr.lin?k:eIO(k);const p0=tr.from(),p1=tr.to();
    return {x:lerp(p0.x,p1.x,e),y:lerp(p0.y,p1.y,e)-Math.sin(k*PI)*tr.arc*L.hs};}
  if(a.anchor) return a.anchor();
  return {x:L.x0+L.w/2,y:L.y0+L.h*0.7};
}
function frozenAt(a){const p=posOf(a);const u=(p.x-L.x0)/L.w,v=(p.y-L.y0)/L.h;return ()=>({x:L.x0+u*L.w,y:L.y0+v*L.h});}
function* goA(a,to,dur,arc,lin){
  const from=a.travel?frozenAt(a):(a.anchor||frozenAt(a));
  const tr={from:from,to:to,t0:T,dur:dur,arc:arc||0,lin:!!lin};
  a.travel=tr; yield dur; if(a.travel===tr){a.travel=null;a.anchor=to;}
}
function lookAtPl(a,pl,hold){const b=placeBase(pl);a.look={x:b.x,y:b.y-b.s*0.3};a.lookHold=hold||1.5;}
function lookAtA(a,o,hold){const p=posOf(o);a.look={x:p.x,y:p.y-asz()*0.5};a.lookHold=hold||1.5;}
function mood(a,m,dur){a.mood=m;a.moodT=dur||1.6;}

/* logical hide commit */
function defWhere(a,pl){
  if(pl.type==='fan') return 'fan';
  if(pl.type==='garland') return 'knot';
  if(a.kind==='snail') return pl.type==='box'?'box':'brim';
  return 'top';
}
function commitHide(a,pl,where){
  if(a.pl){const i=a.pl.occ.indexOf(a);if(i>=0)a.pl.occ.splice(i,1);}
  a.pl=pl; if(pl.occ.indexOf(a)<0) pl.occ.push(a);
  a.state='hidden'; a.where=where||defWhere(a,pl); a.peek.t=0.7; a.peek.v=Math.max(a.peek.v,0.4);
  a.fan.t=0; a.stretch.t=0; a.tremble=0; a.roll=0; a.spin=0;
  pl.taps=0; pl.empty=0;
  if(a.kind==='snail'&&pl.isHat&&where!=='knot'){const b=placeBase(pl);pl.peekSide=sideOf(b.x);}
}
function release(a){
  if(a.pl){const i=a.pl.occ.indexOf(a);if(i>=0)a.pl.occ.splice(i,1);a.lastPl=a.pl;}
  a.pl=null; a.state='out';
}
/* hop/slide into a place (logical commit at start; finds are locked meanwhile) */
function* goHide(a,pl,where,dur){
  const to=inPlace(pl);
  commitHide(a,pl,where); a.inbound=true;
  if(a.kind==='snail'){ addTrail(a.anchor||frozenAt(a),to,dur,false); yield* goA(a,to,dur||0.8,0.25); }
  else yield* goA(a,to,dur||0.6,a.kind==='rabbit'?1.1:0.8);
  a.inbound=false; a.anchor=to;
  pl.hop.vel+=5; pl.sq.vel+=7; puff(pl,8);
}

