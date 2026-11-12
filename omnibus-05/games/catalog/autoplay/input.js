export function pointerInput(canvas,id=731) {
  // Synthetic guide pointers have no browser capture; real pointers retain native capture.
  const nativeCapture=canvas.setPointerCapture.bind(canvas);
  canvas.setPointerCapture=n=>{if(n!==id)nativeCapture(n);};
  const send=(type,p)=>canvas.dispatchEvent(new PointerEvent(type,{
    pointerId:id,pointerType:'touch',isPrimary:id===731,button:0,buttons:['pointerup','pointercancel'].includes(type)?0:1,
    clientX:p?.x||0,clientY:p?.y||0,bubbles:true,cancelable:true,pressure:['pointerup','pointercancel'].includes(type)?0:.5
  }));
  return {down:p=>send('pointerdown',p),move:p=>send('pointermove',p),up:p=>send('pointerup',p),cancel:p=>send('pointercancel',p)};
}
export const mix=(a,b,t)=>({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t});
export function slowMethod(object,method,guide,scale=.65){
  const original=object[method];
  if(typeof original!=='function')throw Error(`Missing update method: ${method}`);
  object[method]=function(dt,...args){return original.call(this,guide.running?dt*scale:dt,...args);};
}
