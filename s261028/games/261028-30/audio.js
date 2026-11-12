'use strict';
/* ---------- S2 audio (Web Audio 合成のみ) ---------- */
const AU={ctx:null,master:null,sfx:null,mus:null,nb:null,ok:false,unlocked:false,musicMode:'shop',next:0,step:0,want:false,duck:1};
function audioInit(){
  if(AU.ctx) return;
  const AC=window.AudioContext||window.webkitAudioContext; if(!AC) return;
  try{AU.ctx=new AC();}catch(e){AU.ctx=null;return;}
  const c=AU.ctx;
  AU.master=c.createGain(); AU.master.gain.value=0.9;
  let comp=null; try{comp=c.createDynamicsCompressor(); comp.threshold.value=-14; comp.ratio.value=4;}catch(e){comp=null;}
  if(comp){AU.master.connect(comp);comp.connect(c.destination);} else AU.master.connect(c.destination);
  AU.sfx=c.createGain(); AU.sfx.gain.value=0.75; AU.sfx.connect(AU.master);
  AU.mus=c.createGain(); AU.mus.gain.value=0.0; AU.mus.connect(AU.master);
  const len=Math.floor(c.sampleRate*1.0); AU.nb=c.createBuffer(1,len,c.sampleRate);
  const d=AU.nb.getChannelData(0); for(let i=0;i<len;i++) d[i]=Math.random()*2-1;
  AU.ok=true;
}
function audioUnlock(){
  audioInit(); if(!AU.ok) return;
  const c=AU.ctx;
  if(c.state!=='running'){ try{const p=c.resume(); if(p&&p.catch) p.catch(()=>{});}catch(e){} }
  if(!AU.unlocked){
    try{const b=c.createBuffer(1,1,22050);const s=c.createBufferSource();s.buffer=b;s.connect(c.destination);s.start(0);}catch(e){}
    AU.unlocked=true; AU.want=true; AU.next=c.currentTime+0.1;
    try{AU.mus.gain.setTargetAtTime(0.32,c.currentTime,0.8);}catch(e){}
  }
}
const now=()=>AU.ctx?AU.ctx.currentTime:0;
function canPlay(){return AU.ok&&AU.ctx.state==='running';}
function tone(f,t0,dur,type,g,f2,dest,att){
  if(!canPlay()) return;
  const c=AU.ctx; const o=c.createOscillator(); const gn=c.createGain();
  o.type=type||'sine'; o.frequency.setValueAtTime(f,t0);
  if(f2) o.frequency.exponentialRampToValueAtTime(Math.max(20,f2),t0+dur);
  const a=att||0.006;
  gn.gain.setValueAtTime(0.0001,t0); gn.gain.exponentialRampToValueAtTime(Math.max(0.0002,g),t0+a);
  gn.gain.exponentialRampToValueAtTime(0.0001,t0+dur);
  o.connect(gn); gn.connect(dest||AU.sfx); o.start(t0); o.stop(t0+dur+0.03);
}
function noise(t0,dur,g,ff,q,ff2,type){
  if(!canPlay()) return;
  const c=AU.ctx; const s=c.createBufferSource(); s.buffer=AU.nb;
  const fl=c.createBiquadFilter(); fl.type=type||'bandpass'; fl.frequency.setValueAtTime(ff||1200,t0); fl.Q.value=q||1;
  if(ff2) fl.frequency.exponentialRampToValueAtTime(ff2,t0+dur);
  const gn=c.createGain(); gn.gain.setValueAtTime(0.0001,t0); gn.gain.exponentialRampToValueAtTime(Math.max(0.0002,g),t0+0.01);
  gn.gain.exponentialRampToValueAtTime(0.0001,t0+dur);
  s.connect(fl); fl.connect(gn); gn.connect(AU.sfx); s.start(t0,Math.random()*0.5); s.stop(t0+dur+0.05);
}
const PENTA=[0,2,4,7,9];
function noteF(i,base){const o=Math.floor(i/5), k=((i%5)+5)%5; return (base||261.63)*Math.pow(2,o+PENTA[k]/12);}
const SFX={
  pokon(pi,combo){const t=now(); const f=noteF(pi+Math.min(combo,7),392);
    tone(f*1.9,t,0.07,'sine',0.18,f*0.9); tone(f,t+0.005,0.22,'triangle',0.22,f*0.72); noise(t,0.04,0.06,2400,2);
    if(combo>2) tone(f*2,t+0.06,0.14,'sine',0.07,f*2.4);},
  squishEmpty(pi){const t=now(); const f=noteF(pi,330); tone(f,t,0.16,'triangle',0.16,f*0.8);},
  pushBack(){const t=now(); tone(180,t,0.18,'sine',0.25,360); tone(520,t+0.08,0.1,'triangle',0.08,700);},
  found(){const t=now(); [0,4,7,12,16].forEach((s,i)=>{const f=523.25*Math.pow(2,s/12); tone(f,t+i*0.075,0.5,'sine',0.17); tone(f*2,t+i*0.075,0.25,'triangle',0.05);});
    noise(t+0.3,0.4,0.05,6000,1.5,9000,'highpass');},
  joint(){const t=now(); [0,4,7,11,14,19].forEach((s,i)=>{const f=392*Math.pow(2,s/12); tone(f,t+i*0.07,0.6,'sine',0.15); tone(f*1.5,t+i*0.07+0.035,0.4,'triangle',0.06);});
    noise(t+0.35,0.5,0.06,6500,1.5,9500,'highpass');},
  untie(){const t=now(); tone(600,t,0.35,'sine',0.13,1300); noise(t,0.32,0.07,3000,3,6000);},
  knot(){const t=now(); tone(880,t,0.08,'sine',0.1,990);},
  giggle(){const t=now(); for(let i=0;i<5;i++){tone(1050+((i%2)?160:0)+i*30,t+i*0.085,0.07,'sine',0.11);}},
  fan(){const t=now(); noise(t,0.45,0.12,500,0.9,3500); [0,4,7].forEach((s,i)=>tone(659*Math.pow(2,s/12),t+0.15+i*0.06,0.3,'triangle',0.07));},
  fold(){const t=now(); noise(t,0.35,0.09,3000,0.9,500); tone(700,t+0.05,0.25,'sine',0.08,420);},
  call(){const t=now(); tone(660,t,0.18,'sine',0.14,880); tone(880,t+0.22,0.22,'sine',0.14,660);},
  peacockVoice(){const t=now(); tone(740,t,0.16,'triangle',0.1,1100); tone(1100,t+0.12,0.12,'triangle',0.06,900);},
  hop(){const t=now(); tone(300,t,0.14,'sine',0.16,620);},
  scared(){const t=now(); tone(900,t,0.12,'sine',0.08,600); tone(800,t+0.1,0.12,'sine',0.06,520);},
  huh(){const t=now(); tone(520,t,0.18,'sine',0.12,440); tone(440,t+0.2,0.28,'sine',0.12,560);},
  remember(){const t=now(); tone(1320,t,0.09,'sine',0.12); tone(1760,t+0.09,0.16,'sine',0.1);},
  swell(n){const t=now(); const f=261.63*Math.pow(2,(n*4)/12); [0,4,7].forEach((s,i)=>tone(f*Math.pow(2,s/12),t+i*0.02,0.6,'triangle',0.1,f*Math.pow(2,s/12)*1.02)); tone(110+n*30,t,0.4,'sine',0.2,160+n*40);},
  transform(){const t=now(); noise(t,1.6,0.12,300,0.7,5000); [0,4,7,12,16,19,24].forEach((s,i)=>tone(261.63*Math.pow(2,s/12),t+0.5+i*0.09,1.2,'triangle',0.08)); [0,4,7].forEach(s=>tone(130.81*Math.pow(2,s/12),t+1.1,1.6,'sine',0.12));},
  inflate(){const t=now(); tone(160,t,0.55,'sine',0.16,420); noise(t,0.5,0.05,800,1,2400);},
  roll(){const t=now(); for(let i=0;i<6;i++) tone(330+i*60,t+i*0.07,0.08,'triangle',0.08);},
  clap(){const t=now(); for(let i=0;i<8;i++) noise(t+i*0.11+Math.random()*0.04,0.06,0.07,1800,1.2);},
  tick(){const t=now(); tone(1400,t,0.03,'sine',0.03);},
  wake(){const t=now(); [0,7,12].forEach((s,i)=>tone(523.25*Math.pow(2,s/12),t+i*0.06,0.35,'sine',0.11));},
  doors(){const t=now(); tone(196,t,0.5,'triangle',0.12,262); tone(294,t+0.18,0.5,'triangle',0.1,392);},
  shimmer(){const t=now(); for(let i=0;i<4;i++) tone(1568*Math.pow(2,PENTA[i]/12),t+i*0.05,0.18,'sine',0.05);},
};
function sfx(name,a,b){ if(!canPlay()) return; guard(()=>SFX[name](a,b)); }

/* tiny music loops: shop = music box, show = brighter march */
const MEL_SHOP=[7,9,11,9, 7,4,5,4, 2,4,5,7, 4,2,1,null];
const MEL_SHOW=[5,7,9,10, 9,7,5,7, 9,10,12,10, 9,7,9,null];
function musicTick(){
  if(!canPlay()||!AU.want) return;
  const c=AU.ctx; const show=AU.musicMode==='show';
  const spb=show?0.25:0.32;
  if(AU.next<c.currentTime-0.5) AU.next=c.currentTime+0.05;
  while(AU.next<c.currentTime+0.2){
    const st=AU.step%16, t=AU.next;
    const mel=show?MEL_SHOW:MEL_SHOP;
    const m=mel[st];
    if(m!==null&&(show||st%2===0||st===15||m!==mel[st-1])) tone(noteF(m,261.63),t,show?0.22:0.45,show?'square':'triangle',show?0.035:0.06,null,AU.mus,0.01);
    if(st%4===0) tone(noteF((show?[0,3,4,3]:[0,2,3,2])[(AU.step>>2)%4],65.4),t,show?0.3:0.6,'sine',show?0.16:0.1,null,AU.mus,0.01);
    if(show&&(st%8===4)) {const s=c.createBufferSource(); s.buffer=AU.nb; const g=c.createGain(); const fl=c.createBiquadFilter(); fl.type='highpass'; fl.frequency.value=2500; g.gain.setValueAtTime(0.06,t); g.gain.exponentialRampToValueAtTime(0.0001,t+0.08); s.connect(fl); fl.connect(g); g.connect(AU.mus); s.start(t,Math.random()*0.5); s.stop(t+0.1);}
    AU.next+=spb; AU.step++;
  }
}
function setMusic(mode){ if(AU.musicMode!==mode){AU.musicMode=mode; AU.step=0;} }

