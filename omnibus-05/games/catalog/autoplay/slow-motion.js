// Keep world motion and the displayed hand readable; restore speed on cancellation.
export function installSlowMotion(id){
 const wrap=(object,name,rate=.65)=>{
  if(!object||typeof object[name]!=='function')return;
  const original=object[name];object[name]=function(dt,...args){return original.call(this,dt*(window.__playGuide?.running?rate:1),...args);};
 };
 if(id==='bold-bardeen-uqx972')wrap(window.G,'step');
 if(id==='nice-brown-mcjsrp')wrap(window.__game,'update');
 if(id==='nice-clarke-0oj0sq')wrap(window.__game,'step');
 if(id==='nice-shannon-7co51m')wrap(window.__game,'frame');
 if(id==='nifty-hopper-mblja3'){
  const g=window.__game,original=g.frame;let elapsed=0,previous;
  g.frame=function(dt,t){if(previous===undefined)elapsed=t;else elapsed+=(t-previous)*(window.__playGuide?.running?.65:1);previous=t;return original.call(this,dt*(window.__playGuide?.running?.65:1),elapsed);};
 }
}
