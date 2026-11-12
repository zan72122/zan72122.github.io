'use strict';
/* ---------- S6 entities ---------- */
let HID=0;
function mkPlace(type){
  return {id:++HID,type:type,isHat:HTYPES.indexOf(type)>=0,shopPos:0,showKey:'',col:PAL[type]?PAL[type][0]:null,
    sq:spring(0),lift:spring(0),hop:spring(0),bend:spring(0),tilt:spring(0),inf:spring(0),
    knot:{has:false,tied:1,dir:1,wig:0,pull:0,re:0},
    occ:[],taps:0,lastTap:-9,combo:0,grab:null,print:0,printT:0,walk:rv(0,TAU),freeze:0,travel:null,
    glow:0,shake:0,lastOpen:-9,opens:0,empty:0,peekSide:1,rustle:0,part:0,partDir:1,prom:spring(1),cen:spring(0),lastDown:-9,firstTapT:-9,lifting:false};
}
const PL={}; HTYPES.forEach(t=>PL[t]=mkPlace(t)); PL.fan=mkPlace('fan'); PL.garland=mkPlace('garland');
PL.straw.knot.has=true; PL.box.knot.has=true; PL.bonnet.knot.has=true; PL.garland.knot.has=true;
const HATS=HTYPES.map(t=>PL[t]);
const ALLPL=HATS.concat([PL.fan,PL.garland]);

function mkAnimal(kind){
  return {kind:kind,state:'hidden',pl:null,where:'brim',anchor:null,travel:null,dir:1,
    mood:'neutral',moodT:0,blink:0,nextBlink:rv(1,4),look:{x:0,y:0},lookHold:0,
    peek:spring(0.7),stretch:spring(0),fan:spring(0),ear:spring(0),sq:spring(0),hy:spring(0),
    spin:0,roll:0,wave:0,waveT:0,alpha:1,visible:true,lean:spring(0),pose:'',scale:1,
    idleT:rv(3,7),gestureT:0,hint:0,x:0,y:0,s:0,tremble:0};
}
const SN=mkAnimal('snail'), PC=mkAnimal('peacock'), RB=mkAnimal('rabbit');
const ANIMALS=[SN,PC,RB];
RB.state='window'; RB.peek.v=RB.peek.t=0.3;

/* place geometry (screen space) */
function placeBase(pl){
  if(pl.travel){
    const tr=pl.travel; const k=sat((T-tr.t0)/tr.dur); const e=eIO(k);
    const a=tr.from(), b=tr.to();
    return {x:lerp(a.x,b.x,e),y:lerp(a.y,b.y,e)-Math.sin(k*PI)*tr.arc*L.hs,s:lerp(a.s,b.s,e)};
  }
  return placeHome(pl,G.world);
}
function placeHome(pl,world){
  if(pl.type==='fan'){const f=fanGeom();return {x:f.x,y:f.y,s:f.r};}
  if(pl.type==='garland'){const g=garlandGeom();return {x:g.x,y:g.y,s:g.s};}
  if(world==='show'&&pl.showKey){
    const p=showPos(pl.showKey); let x=p.x;
    if(pl.showKey[0]==='w'){ x+=Math.sin(pl.walk)*L.w*(L.port?0.035:0.03); }
    return {x:x,y:p.y,s:L.hs*p.f};
  }
  const p0=shopPosOf(pl.shopPos); const p={x:p0.x,y:p0.y};
  const isPair=C&&pl===C.pairHat;
  if(G.open>0.001&&!isPair) p.x+=(p.x<L.x0+L.w*0.5-1?-1:1)*G.open*L.W*0.62;
  if(pl.cen&&pl.cen.v>0.001){const c=P(0.5,L.port?0.955:0.715);p.x=lerp(p.x,c.x,pl.cen.v);p.y=lerp(p.y,c.y,pl.cen.v);}
  let s=L.hs*(pl.prom?pl.prom.v:1);
  if(G.phase==='swell'&&C&&pl===C.pairHat) s*=1+0.035*Math.sin(T*3.2);
  return {x:p.x,y:p.y,s:s};
}
/* visual size multiplier for the wide hat (inflate) */
function wideK(pl){if(G.world==='show'&&!pl.travel)return 1;if(pl.travel&&pl.showKey)return 1;return pl.type==='wide'?1+0.42*clamp(pl.inf.v,0,1.2)+0.25*Math.max(0,pl.inf.v-1.2):1;}
function knotLocal(pl){
  const k=wideK(pl);
  switch(pl.type){
    case 'straw':return {x:-0.2*(pl.peekSide||1),y:-0.13};
    case 'box':return {x:0,y:-0.47};
    case 'bonnet':return {x:-0.22*(pl.peekSide||1),y:-0.15};
    case 'wide':return {x:0.21*k,y:-0.1-0.05*pl.inf.v};
    default:return null;
  }
}
function crownTop(pl){
  switch(pl.type){case 'straw':return -0.46;case 'feather':return -0.47;case 'box':return -0.5;case 'bonnet':return -0.45;
    case 'wide':return -(0.19+0.27*clamp(pl.inf.v,0,1.4));case 'beret':return -0.36;default:return -0.4;}
}
function geom(pl){
  const b=placeBase(pl); const s=b.s;
  const g={x:b.x,y:b.y,s:s,pl:pl};
  if(pl.type==='fan'){g.body={x1:b.x-s,y1:b.y-s,x2:b.x+s,y2:b.y+s*0.1};return g;}
  if(pl.type==='garland'){g.knot={x:b.x,y:b.y,r:s*0.36};g.body={x1:b.x-s*0.5,y1:b.y-s*0.4,x2:b.x+s*0.5,y2:b.y+s*0.4};return g;}
  const k=wideK(pl); const lift=pl.lift.v*s;
  g.body={x1:b.x-s*0.52*k,y1:b.y+crownTop(pl)*s-lift-s*0.05,x2:b.x+s*0.52*k,y2:b.y+s*0.12};
  const kl=knotLocal(pl);
  if(kl&&pl.knot.has){g.knot={x:b.x+kl.x*s,y:b.y+kl.y*s-(pl.type==='box'||true?lift:0),r:s*0.17};}
  g.top={x:b.x,y:b.y+crownTop(pl)*s-lift};
  return g;
}

