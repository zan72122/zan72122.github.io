'use strict';
/* ---------- S1 storage (端末内のみ) ---------- */
const SKEY='hhs30-v1';
const KINDS=['snail','peacock','rabbit'];
const HTYPES=['straw','feather','box','bonnet','wide','beret'];
function defMem(){
  const fav={}; KINDS.forEach(k=>{fav[k]={}; HTYPES.forEach(h=>fav[k][h]=0);});
  const wary={}; HTYPES.forEach(h=>wary[h]=0);
  return {v:1,plays:0,cycles:0,lastFirst:'',firstCounts:{snail:0,peacock:0,rabbit:0},gentle:0,
    bonds:{sp:0,sr:0,pr:0},fav:fav,wary:wary,rabbitJoined:0,shows:{duo:0,parade:0,ribbon:0,giant:0},pity:0,lastShow:''};
}
let MEM=defMem(), storeOK=true, storeState='first';
function sanitizeMem(d){
  if(!d||typeof d!=='object'||d.v!==1) throw new Error('bad');
  const n=(x,max)=>{x=Number(x);return isFinite(x)?clamp(Math.floor(x),0,max):0;};
  const o=defMem();
  o.plays=n(d.plays,99999); o.cycles=n(d.cycles,99999); o.gentle=n(d.gentle,99999); o.pity=n(d.pity,20);
  o.lastFirst=KINDS.indexOf(d.lastFirst)>=0?d.lastFirst:'';
  const fc=d.firstCounts&&typeof d.firstCounts==='object'?d.firstCounts:{};
  KINDS.forEach(k=>o.firstCounts[k]=n(fc[k],99999));
  const b=d.bonds&&typeof d.bonds==='object'?d.bonds:{};
  ['sp','sr','pr'].forEach(k=>o.bonds[k]=n(b[k],9));
  const f=d.fav&&typeof d.fav==='object'?d.fav:{};
  KINDS.forEach(k=>{const fk=f[k]&&typeof f[k]==='object'?f[k]:{}; HTYPES.forEach(h=>o.fav[k][h]=n(fk[h],999));});
  const w=d.wary&&typeof d.wary==='object'?d.wary:{};
  HTYPES.forEach(h=>o.wary[h]=n(w[h],9));
  o.rabbitJoined=d.rabbitJoined?1:0;
  const s=d.shows&&typeof d.shows==='object'?d.shows:{};
  ['duo','parade','ribbon','giant'].forEach(k=>o.shows[k]=n(s[k],99999));
  o.lastShow=['duo','parade','ribbon','giant'].indexOf(d.lastShow)>=0?d.lastShow:'';
  return o;
}
function loadMem(){
  let raw=null;
  try{raw=window.localStorage.getItem(SKEY);}catch(e){storeOK=false;storeState='denied';MEM=defMem();return;}
  if(raw===null){storeState='first';MEM=defMem();return;}
  try{MEM=sanitizeMem(JSON.parse(raw));storeState='restored';}
  catch(e){MEM=defMem();storeState='corrupt'; try{window.localStorage.removeItem(SKEY);}catch(e2){}}
}
let lastSave=-99;
function saveMem(force){
  if(!storeOK) return false;
  if(!force&&T-lastSave<0.8) {pendingSave=true;return false;}
  lastSave=T; pendingSave=false;
  try{window.localStorage.setItem(SKEY,JSON.stringify(MEM));return true;}
  catch(e){storeOK=false;storeState=storeState==='denied'?'denied':'save-failed';return false;}
}
let pendingSave=false;
loadMem();
MEM.plays++;
saveMem(true);

