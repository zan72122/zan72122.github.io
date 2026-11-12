'use strict';
/* ---------- S23 test hooks (no UI) ---------- */
window.__hhs={
  state:()=>({ready:G.ready,world:G.world,phase:G.phase,lock:G.lock,step:C.step,cycle:G.cycle,bonds:Object.assign({},C.bonds),gentle:C.gentle,order:C.order.slice(),
    roundOrder:C.roundOrder.slice(),rabbitMember:G.rabbitMember,d2:C.d2,d3:C.d3,d4:C.d4,variant:C.variant,swell:G.swell,open:+G.open.toFixed(3),target:G.tkey,
    store:storeState,canSave:storeOK,sw:Object.assign({},SW),finds:G.finds,idle:+G.idle.toFixed(2),hint:HINT.t>=0?HINT.kind:'',fps:Math.round(fps),particles:PT.length,
    animals:ANIMALS.map(a=>({kind:a.kind,state:a.state,place:a.pl?a.pl.type:null,where:a.where,mood:a.mood,fan:+a.fan.v.toFixed(2),peek:+a.peek.v.toFixed(2)})),
    places:ALLPL.map(p=>({type:p.type,occ:p.occ.map(a=>a.kind),shopPos:p.shopPos,showKey:p.showKey,lift:+p.lift.v.toFixed(2),tied:+p.knot.tied.toFixed(2),print:p.print})),
    show:G.show?{v:G.show.v,idx:G.show.idx,taps:G.show.taps.slice(),bowed:G.show.bowed}:null,layoutV:G.layoutV,T:+T.toFixed(2),
    audio:AU.ctx?AU.ctx.state:'none',seed:SEED,dseen:Object.assign({},DSEEN)}),
  points:()=>hitRegions(),
  target:()=>targetPoint(),
  log:LOG, errors:ERR,
  mem:()=>JSON.parse(JSON.stringify(MEM)),
  setTimeScale:k=>{timeScale=clamp(+k||1,0.1,8);return timeScale;},
};
