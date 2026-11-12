import { createView } from './view.js';
const resolve = p => typeof p === 'function' ? p() : p;
export function installGuide(adapter) {
  const view = createView(adapter.color);
  let key = '', checkpoint='', bestScore=-Infinity, progress, lastProgress = performance.now(), nextOffer = 0, offeredUntil = 0;
  let running = false, cancelled = false, pressed = false, current = null, lastInput = 0, second=null;
  const fingers=new Set();
  let attempts = [], effort = 0, lastPoint = null, candidate = null, lastResult = null, raf, stopped = false, lastSample=0;
  const done = new Set();
  const input = adapter.input;
  function cancel() { cancelled = true; release(true); }
  const blocked = () => !!window.GameGuide?.paused;
  function activity(e) {
    if (e.composedPath().includes(view.root) || !e.isTrusted) return;
    if (running) { e.stopImmediatePropagation(); e.preventDefault(); return; }
    if(e.type==='pointermove'&&!e.buttons)return;
    lastInput = performance.now();
    if (e.type === 'pointerdown') {attempts.push(lastInput);fingers.add(e.pointerId);}
    if(e.type==='pointerup'||e.type==='pointercancel')fingers.delete(e.pointerId);
    if (e.type === 'pointermove' && e.buttons && lastPoint) effort += Math.hypot(e.clientX-lastPoint.x,e.clientY-lastPoint.y);
    lastPoint={x:e.clientX,y:e.clientY};
  }
  for (const type of ['pointerdown','pointermove','pointerup','pointercancel']) window.addEventListener(type, activity, {capture:true,passive:false});
  function release(abort=false) { if (pressed) { (abort&&input.cancel?input.cancel:input.up)(current); pressed = false; } if(second){adapter.secondInput.up(second);second=null;view.second(null);} }
  function check() { if (cancelled || document.hidden || blocked()) throw new Error('guide-cancelled'); }
  async function animate(ms, fn) {
    let elapsed = 0, prev = performance.now();
    while (elapsed < ms) {
      check();
      await new Promise(requestAnimationFrame);
      const now = performance.now(); elapsed += Math.min(60,now-prev); prev = now;
      if(fn)fn(Math.min(1, elapsed/ms));else if(current)view.point(current,pressed,resolve(adapter.actor));
    }
  }
  function point(p, down) {
    current = resolve(p);
    if (!current || !Number.isFinite(current.x+current.y)) throw Error('guide-target-missing');
    if(current.x<0||current.x>innerWidth||current.y<0||current.y>innerHeight)throw Error(`guide-target-offscreen:${Math.round(current.x)},${Math.round(current.y)}`);
    view.point({...current}, down, resolve(adapter.actor));
    return current;
  }
  const ctx = {
    wait: ms => animate(ms),
    async press(p) { await ctx.focus(p); input.down(point(p,true)); pressed=true; await animate(250); },
    async move(p,ms=1700) {
      const a={...current};
      await animate(ms,t=>{const b=resolve(p);input.move(point({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t},true));});
    },
    async hold(ms=600,p=()=>current) { await animate(ms,()=>input.move(point(p,true))); },
    async lift(delay=450) { release(); await animate(delay,()=>point(current,false)); },
    async pair(path,ms=4200) {
      await ctx.focus(()=>path(0)[0]);
      const a=path(0);input.down(point(a[0],true));pressed=true;
      second=a[1];adapter.secondInput.down(second);view.second(second);
      await animate(350);
      await animate(ms,t=>{const a=path(t);input.move(point(a[0],true));second=a[1];adapter.secondInput.move(second);view.second(second);});
      await animate(650);release();await animate(700);
    },
    async focus(p, ms=650) { view.clearTrail(); await animate(ms,()=>point(p,false)); },
    async tap(p, hold=180, focus=650) {
      await ctx.focus(p,focus); const touch={...point(p,true)}; input.down(touch); pressed = true;
      await animate(hold,()=>point(touch,true)); release();
      await animate(500,()=>point(touch,false));
    },
    async stroke(path, ms=2200, hold=200, settle=250) {
      let start;
      const at = t => typeof path === 'function' ? path(t) : (()=>{
        if(t===0)return start||resolve(path[0]);
        if(t===1)return resolve(path.at(-1));
        const x=t*(path.length-1), i=Math.min(path.length-2,Math.floor(x));
        const a=i===0&&start?start:resolve(path[i]), b=resolve(path[i+1]), f=x-i;
        return {x:a.x+(b.x-a.x)*f,y:a.y+(b.y-a.y)*f};
      })();
      if(Array.isArray(path))view.destination(resolve(path.at(-1)));
      await ctx.focus(()=>at(0));start={...at(0)}; input.down(point(start,true)); pressed = true;
      await animate(hold,()=>input.move(point(()=>at(0),true)));
      await animate(ms,t=>{if(Array.isArray(path))view.destination(resolve(path.at(-1)));input.move(point(()=>at(t),true));});
      if(settle) await animate(settle,()=>input.move(point(()=>at(1),true)));const end={...current};release();view.destination(null);
      await animate(550,()=>point(end,false));
    },
    async until(test, ms=10000) {
      let elapsed=0; while(!test()&&elapsed<ms){await animate(150);elapsed+=150;} return !!test();
    },
    done: id=>done.add(id), has: id=>done.has(id),
    get position(){return current?{...current}:null;},
    get cancelled(){return cancelled;}
  };
  async function run() {
    if (running || !candidate || blocked()) return;
    const chosen=candidate; running=true; cancelled=false; view.active(true);
    const before = adapter.read(done);
    adapter.setSlow?.(true);
    const timer=setTimeout(cancel,adapter.maxMs||90000);
    try {
      adapter.unlock?.();
      await adapter.run(ctx,chosen,done);
      lastResult={key:chosen.key,status:'finished',before:before?.progress,after:adapter.read(done)?.progress,afterKey:adapter.read(done)?.key};
    } catch(e) {
      lastResult={key:chosen.key,status:e.message==='guide-cancelled'?'cancelled':'failed',reason:e.message};
      if (lastResult.status==='failed') console.warn('Play guide:', chosen.key, e);
    } finally {
      clearTimeout(timer); release();view.destination(null); adapter.setSlow?.(false); running=false; view.active(false);
      lastProgress=performance.now(); nextOffer=lastProgress+20000; attempts=[];
    }
  }
  function control(button,action){
    button.onpointerdown=e=>{e.preventDefault();e.stopPropagation();button.setPointerCapture(e.pointerId);};
    button.onpointerup=e=>{e.preventDefault();e.stopPropagation();action();};
    button.onclick=e=>{if(e.detail===0)action();};
  }
  control(view.button,run);control(view.cancel,cancel);
  for(const type of ['touchstart','touchmove','touchend'])view.root.addEventListener(type,e=>e.stopPropagation(),{passive:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel();fingers.clear();attempts=[];view.offer(null);lastProgress=performance.now();nextOffer=lastProgress+12000;});
  window.addEventListener('resize',cancel);
  const initialTime=performance.now();
  function tick(now) {
    if(stopped)return;
    if(!running && !document.hidden && now-lastSample>=200){
      lastSample=now;
      candidate=blocked() ? null : adapter.read(done);
      const checkpointNow=`${candidate?.key||''}:${candidate?.checkpoint||''}`;
      const scored=Number.isFinite(candidate?.score);
      if(checkpointNow!==checkpoint || (scored ? candidate.score>bestScore+.01 : candidate?.progress!==progress)){
        if(checkpointNow!==checkpoint)bestScore=-Infinity;
        checkpoint=checkpointNow;key=candidate?.key||'';bestScore=scored?Math.max(bestScore,candidate.score):-Infinity;
        lastProgress=now;offeredUntil=0;attempts=[];effort=0;
      }
      progress=candidate?.progress;
      attempts=attempts.filter(t=>now-t<18000);
      const stagnant=now-lastProgress;
      const idle=now-lastInput>10000;
      const struggling=(attempts.length>=4 || effort>innerWidth*2) && stagnant>10000;
      if(candidate && !fingers.size && now-initialTime>8000 && now>nextOffer && stagnant>12000 && (idle||struggling||offeredUntil>now)){
        if(!offeredUntil)offeredUntil=now+7000;
        if(now<offeredUntil)view.offer(resolve(candidate.anchor));
        else {view.offer(null);nextOffer=now+18000;offeredUntil=0;}
      }else {view.offer(null);if(!candidate)offeredUntil=0;}
    }
    raf=requestAnimationFrame(tick);
  }
  raf=requestAnimationFrame(tick);
  const api={get running(){return running;},get status(){return {key,progress,running,lastResult,effort,bestScore,lastProgress,nextOffer,offered:!view.button.hidden,attempts:attempts.length};}};
  // Read-only diagnostics. Tests click the same displayed button as a child.
  window.__playGuide=api;
  window.addEventListener('pagehide',()=>{cancel();stopped=true;cancelAnimationFrame(raf);});
  window.addEventListener('pageshow',()=>{if(stopped){stopped=false;lastProgress=performance.now();raf=requestAnimationFrame(tick);}});
  return api;
}
