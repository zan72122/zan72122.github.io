'use strict';
/* ---------- S11 effects helpers ---------- */
const PT=[]; const PMAX=160;
function addP(p){if(PT.length>=PMAX)PT.shift();PT.push(p);}
const CONF=['#ff9ec4','#ffd36e','#8fd3ff','#b9f2a1','#cdb4f6','#ffb38a'];
function burst(x,y,n,cols,shape,spd,grav){
  n=Math.min(n,24);
  for(let i=0;i<n;i++){const a=fx(0,TAU),v=fx(0.4,1)*(spd||1)*L.hs*2.2;
    addP({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-L.hs*(shape==='heart'?0.8:1.2),g:(grav===undefined?1:grav)*L.hs*4,life:0,max:fx(0.7,1.2),rot:fx(0,TAU),vr:fx(-8,8),sz:L.hs*fx(0.035,0.06),col:cols[i%cols.length],shape:shape||rpickV(['tri','dot','sq','zig'])});}
}
function rpickV(arr){return arr[Math.floor(Math.random()*arr.length)];}
function puff(pl,n){const b=placeBase(pl);burst(b.x,b.y-b.s*0.25,n,[pl.col?pl.col.a:'#fff',pl.col?pl.col.r:'#fff','#ffffff'],null,0.6);}
function hearts(x,y,n){burst(x,y,n,['#ff9ec4','#ff7fb0','#ffc2d4'],'heart',0.5,-0.2);}
function sparks(x,y,n){burst(x,y,n,['#ffe08a','#ffffff','#8fd3ff'],'star',0.8,0.3);}
function flowers(x,y,n){burst(x,y,n,['#ffd0e2','#fff1a8','#c8f2e1'],'flower',0.55,0.1);}
const TR=[];
function addTrail(from,to,dur,strong){TR.push({from:from,to:to,t0:T,dur:Math.max(0.2,dur||0.8),life:strong?999:2.5,strong:!!strong,born:T});if(TR.length>8)TR.shift();}
function clearStrongTrails(){TR.forEach(t=>{if(t.strong){t.strong=false;t.life=(T-t.born)+1.5;}});}

/* rabbit (before joining) copies gestures from the window, a beat late */
function rabbitMimic(kind){
  const d=0.6;
  co((function*(){yield d;
    if(RB.state==='window'){RB.peek.t=1.0;}
    switch(kind){
      case 'fan':RB.ear.t=1;mood(RB,'proud',1.4);yield 1.2;RB.ear.t=0;break;
      case 'fold':RB.ear.t=-0.2;mood(RB,'shy',1);yield 0.8;RB.ear.t=0;break;
      case 'stretch':RB.stretch.t=1;RB.hy.vel+=4;mood(RB,'happy',1.2);yield 1;RB.stretch.t=0;break;
      case 'giggle':mood(RB,'giggle',1.4);RB.sq.vel+=6;yield 0.3;RB.sq.vel+=6;break;
      case 'spin':RB.hy.vel+=6;mood(RB,'happy',1.4);for(let i=0;i<12;i++){RB.spin+=TAU/12;yield 0.04;}RB.spin=0;break;
      case 'roll':mood(RB,'happy',1.4);for(let i=0;i<16;i++){RB.roll+=TAU/16;yield 0.035;}RB.roll=0;break;
      case 'hop':RB.hy.vel+=7;break;
    }
    if(RB.state==='window'){yield 1.2; if(G.lock===0&&G.phase==='seek') RB.peek.t=0.3;}
  })(),'fx');
}
/* signature moves (also used by the show) */
function* signature(a,big){
  const k=big?1.4:1;
  if(a.kind==='peacock'){a.fan.t=1;sfx('fan');mood(a,'proud',1.6);const p=posOf(a);sparks(p.x,p.y-asz()*0.6,big?14:8);yield 1.1;a.fan.t=0;sfx('fold');}
  else if(a.kind==='snail'){a.stretch.t=1;a.waveT=1;mood(a,'happy',1.4);sfx('call');a.hy.vel+=4*k;yield 0.9;a.stretch.t=0;}
  else {a.hy.vel+=7*k;sfx('hop');mood(a,'happy',1.2);a.ear.t=0.6;yield 0.5;a.hy.vel+=6*k;sfx('hop');yield 0.4;a.ear.t=0;}
}

