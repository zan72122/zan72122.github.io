'use strict';
/* ---------- S21 loop & lifecycle ---------- */
let rafId=0,lastTs=0,running=false,fpsAcc=0,fpsN=0,fps=60;
function frame(ts){
  rafId=0; if(!running) return;
  const raw=lastTs?(ts-lastTs)/1000:1/60; lastTs=ts;
  const dtr=Math.min(0.05,Math.max(0,raw)); fpsAcc+=raw; fpsN++; if(fpsAcc>1){fps=fpsN/fpsAcc;fpsAcc=0;fpsN=0;}
  guard(()=>update(dtr*timeScale));
  guard(render);
  rafId=requestAnimationFrame(frame);
}
function startLoop(){if(running)return;running=true;lastTs=0;rafId=requestAnimationFrame(frame);}
function stopLoop(){running=false;if(rafId)cancelAnimationFrame(rafId);rafId=0;}
function relayout(){layout();G.layoutV++;PT.length=0;}
function scheduleLayout(){requestAnimationFrame(()=>guard(relayout));setTimeout(()=>guard(relayout),120);setTimeout(()=>guard(relayout),350);}
window.addEventListener('resize',scheduleLayout);
window.addEventListener('orientationchange',scheduleLayout);
if(window.visualViewport) window.visualViewport.addEventListener('resize',scheduleLayout);
cv.addEventListener('pointerdown',onDown,{passive:false});
cv.addEventListener('pointermove',onMove,{passive:false});
cv.addEventListener('pointerup',onUp,{passive:false});
cv.addEventListener('pointercancel',onCancel);
cv.addEventListener('lostpointercapture',e=>{if(PTRS.has(e.pointerId))onCancel(e);});
const stop=e=>{if(e.cancelable)e.preventDefault();};
['touchstart','touchmove','touchend','gesturestart','gesturechange','gestureend','dblclick','contextmenu','selectstart'].forEach(n=>document.addEventListener(n,stop,{passive:false}));
document.addEventListener('touchend',()=>audioUnlock(),{passive:true});
document.addEventListener('visibilitychange',()=>{
  if(document.hidden){ stopLoop(); clearPointers(); saveMem(true); if(AU.ctx&&AU.ctx.state==='running'){try{AU.ctx.suspend();}catch(e){}} evlog('hidden',''); }
  else { startLoop(); if(AU.ctx&&AU.unlocked){try{const p=AU.ctx.resume();if(p&&p.catch)p.catch(()=>{});}catch(e){}} evlog('visible',''); scheduleLayout(); }
});
window.addEventListener('pagehide',()=>{saveMem(true);stopLoop();});
window.addEventListener('pageshow',e=>{if(e.persisted){startLoop();scheduleLayout();}});
window.addEventListener('blur',clearPointers);

