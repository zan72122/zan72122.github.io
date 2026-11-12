'use strict';
/* ---------- S0 utils ---------- */
const TAU=Math.PI*2, PI=Math.PI;
const clamp=(v,a,b)=>v<a?a:(v>b?b:v);
const lerp=(a,b,t)=>a+(b-a)*t;
const sat=t=>clamp(t,0,1);
const dist=(ax,ay,bx,by)=>Math.hypot(ax-bx,ay-by);
const eOut=t=>1-(1-t)*(1-t);
const eIn=t=>t*t;
const eIO=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
const eBack=t=>{const c1=1.70158,c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);};
const eEl=t=>t<=0?0:t>=1?1:Math.pow(2,-10*t)*Math.sin((t*10-.75)*TAU/3)+1;
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
let SEED=0;
(function(){
  let s=0;
  try{const q=new URLSearchParams(location.search).get('seed'); if(q!==null&&q!==''&&isFinite(+q)) s=(+q)|0;}catch(e){}
  if(!s){ try{const a=new Uint32Array(1); crypto.getRandomValues(a); s=a[0]|0;}catch(e){ s=(Math.random()*4294967296)|0; } }
  SEED=s||1;
})();
const rng=mulberry32(SEED);
const rv=(a,b)=>a+rng()*(b-a);
const rpick=arr=>arr[Math.floor(rng()*arr.length)%arr.length];
function shuffle(arr){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));const t=a[i];a[i]=a[j];a[j]=t;}return a;}
const fx=(a,b)=>a+Math.random()*(b-a); // visual-only jitter (does not affect game logic)

const ERR=[];
function guard(fn){try{return fn();}catch(e){ERR.push(String(e&&e.stack||e)); return undefined;}}

/* game time & coroutines (driven by rAF only) */
let T=0, timeScale=1;
const tasks=[];
function co(gen,tag){const t={g:gen,w:0,c:null,dead:false,tag:tag||'',sub:null};tasks.push(t);adv(t);return t;}
function adv(t){
  let r;
  try{r=t.g.next();}catch(e){ERR.push(String(e&&e.stack||e));t.dead=true;return;}
  if(r.done){t.dead=true;return;}
  const v=r.value;
  if(typeof v==='number'){t.w=v;}
  else if(typeof v==='function'){t.c=v;}
  else if(v&&v.g){const s=v;t.c=()=>s.dead;}
  else t.w=0.0001;
}
function runTasks(dt){
  for(let i=0;i<tasks.length;i++){
    const t=tasks[i]; if(t.dead) continue;
    if(t.w>0){t.w-=dt; if(t.w>0) continue;}
    if(t.c){ let ok=false; try{ok=t.c();}catch(e){ok=true;} if(!ok) continue; t.c=null; }
    adv(t);
  }
  for(let i=tasks.length-1;i>=0;i--) if(tasks[i].dead) tasks.splice(i,1);
}
function killTag(tag){for(const t of tasks) if(t.tag===tag) t.dead=true;}
function* wait(sec){yield sec;}
function* waitUntil(fn){yield fn;}

const LOG=[]; const DSEEN={};
function evlog(id,info){LOG.push({t:+T.toFixed(2),id:id,info:info||''}); if(LOG.length>600)LOG.shift(); if(/^D[1-7]$/.test(id)) DSEEN[id]=(DSEEN[id]||0)+1;}

/* simple critically-damped-ish spring */
function spring(v){return {v:v||0,t:v||0,vel:0};}
function stepSpring(s,k,d,dt){const a=(s.t-s.v)*k-s.vel*d; s.vel+=a*dt; s.v+=s.vel*dt;}

