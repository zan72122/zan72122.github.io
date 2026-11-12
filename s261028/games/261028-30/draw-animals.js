'use strict';
/* ---------- S8 drawing: animals ---------- */
const SNC={body:'#ffe3a3',bodyD:'#f8cf7c',shell:'#f7a8c8',shell2:'#ffd0e2',shell3:'#e98bb6'};
const PCC={body:'#7fb2f2',body2:'#9fd0f7',belly:'#cfe9ff',tail:'#8fd8c8',tail2:'#5fbfa8',eye1:'#3f7fd6',eye2:'#ffe08a',beak:'#ffc95a',crest:'#5fbfa8'};
const RBC={body:'#ffffff',in:'#ffc2d4',sh:'#f3ecf7'};

function drawSnail(a,x,y,s){
  const st=a.stretch.v, d=a.dir, sq=a.sq.v;
  ctx.save(); ctx.translate(x,y-a.hy.v*s); if(a.roll){ctx.translate(0,-s*0.3);ctx.rotate(a.roll);ctx.translate(0,s*0.3);}
  ctx.scale(d*(1+sq*0.15),1-sq*0.2);
  const tr=a.tremble>0?Math.sin(T*50)*s*0.01*a.tremble:0; ctx.translate(tr,0);
  /* foot */
  RR(-s*0.5,-s*0.15,s*0.95,s*0.15,s*0.075,SNC.body);
  /* neck & head */
  const hx=s*0.34, hy=-s*0.24-s*0.2*st;
  RR(s*0.2,hy,s*0.24,-hy,s*0.12,SNC.body);
  CC(hx,hy,s*0.15,SNC.body);
  /* antennae with eyes */
  const ant=0.55+0.45*Math.max(st,a.peek.v>0.9?1:0.7);
  const wv=Math.sin(T*3+a.wave)*s*0.03+a.waveT*Math.sin(T*12)*s*0.06;
  const t1x=hx-s*0.08+wv, t1y=hy-s*0.34*ant, t2x=hx+s*0.12+wv*0.8, t2y=hy-s*0.3*ant;
  QL(hx-s*0.05,hy-s*0.1,hx-s*0.07,hy-s*0.22*ant,t1x,t1y,s*0.04,SNC.bodyD);
  QL(hx+s*0.06,hy-s*0.1,hx+s*0.09,hy-s*0.2*ant,t2x,t2y,s*0.04,SNC.bodyD);
  /* shell (drawn after neck so it overlaps back) */
  const sr=s*0.29*(1+0.04*Math.sin(T*2));
  const scx=-s*0.1, scy=-s*0.3;
  ctx.save(); ctx.translate(scx,scy); ctx.rotate(a.spin);
  CC(0,0,sr,SNC.shell); CC(sr*0.12,-sr*0.08,sr*0.7,SNC.shell2); CC(sr*0.2,-sr*0.12,sr*0.46,SNC.shell); CC(sr*0.26,-sr*0.15,sr*0.24,SNC.shell2);
  CC(-sr*0.55,sr*0.35,sr*0.09,SNC.shell3); CC(-sr*0.2,sr*0.62,sr*0.08,SNC.shell3); CC(-sr*0.65,-sr*0.1,sr*0.07,SNC.shell3);
  ctx.restore();
  /* eyes on tips (in local flipped space: compute look in world) */
  const lk=lookVec(x+(t1x)*d,y+t1y,a);
  eye(t1x,t1y,s*0.075,lk.x*d,lk.y,a.blink,a.mood);
  eye(t2x,t2y,s*0.075,lk.x*d,lk.y,a.blink,a.mood);
  /* mouth & blush */
  if(a.mood==='surprised') CC(hx+s*0.1,hy+s*0.05,s*0.035,INK);
  else if(a.mood==='shy'||a.mood==='scared') LN(hx+s*0.05,hy+s*0.06,hx+s*0.12,hy+s*0.05,s*0.022,INK);
  else ARC(hx+s*0.07,hy+s*0.02,s*0.05,0.3,PI-0.3,s*0.022,INK);
  alpha(a.mood==='shy'||a.mood==='giggle'||a.mood==='happy'?0.95:0.6); E(hx+s*0.02,hy+s*0.08,s*0.045,s*0.028,0,BLUSH); alpha(1);
  ctx.restore();
}
function drawPeacock(a,x,y,s){
  const f=a.fan.v, sq=a.sq.v;
  ctx.save(); ctx.translate(x,y-a.hy.v*s); if(a.roll){ctx.translate(0,-s*0.35);ctx.rotate(a.roll);ctx.translate(0,s*0.35);}
  ctx.scale(1+sq*0.12,1-sq*0.15);
  const bx=0, by=-s*0.36;
  /* tail fan */
  const N=9, spread=lerp(0.1,1.0,f)*PI*0.5, len=s*lerp(0.6,0.9,f);
  const base=lerp(-PI/2+1.05,-PI/2,f)+Math.sin(T*1.3)*0.03;
  for(let i=0;i<N;i++){
    const k=i/(N-1)*2-1; const ang=base+k*spread+(f<0.2?PI:0)*0;
    const fold=1-f; const angF=lerp(ang,PI/2+k*0.18+0.0,0)*1; // keep upward bundle when folded
    const ca=Math.cos(angF), sa=Math.sin(angF);
    const tx=bx+ca*len, ty=by+sa*len*(f<0.25?0.9:1);
    LN(bx,by,tx,ty,s*0.02,PCC.tail2);
    ctx.save(); ctx.translate(bx+ca*len*0.72,by+sa*len*0.72); ctx.rotate(angF+PI/2);
    E(0,0,s*0.1*(0.55+0.45*f),len*0.3,0,PCC.tail); ctx.restore();
    const ex=bx+ca*len*0.86, ey=by+sa*len*0.86;
    CC(ex,ey,s*0.075*(0.6+0.4*f),PCC.eye2); CC(ex,ey,s*0.05*(0.6+0.4*f),PCC.tail2); CC(ex,ey,s*0.028*(0.6+0.4*f),PCC.eye1);
    void fold;
  }
  /* legs */
  LN(-s*0.07,-s*0.12,-s*0.08,0,s*0.03,PCC.beak); LN(s*0.07,-s*0.12,s*0.08,0,s*0.03,PCC.beak);
  /* body */
  E(bx,by+s*0.06,s*0.2,s*0.26,0,PCC.body);
  E(bx,by+s*0.12,s*0.12,s*0.16,0,PCC.belly);
  E(bx-s*0.19,by+s*0.08,s*0.07,s*0.15,0.35+Math.sin(T*2)*0.05,PCC.body2);
  E(bx+s*0.19,by+s*0.08,s*0.07,s*0.15,-0.35-Math.sin(T*2)*0.05,PCC.body2);
  /* head */
  const hx=bx+a.lean.v*s*0.08, hy=by-s*0.3;
  RR(hx-s*0.07,hy,s*0.14,s*0.2,s*0.07,PCC.body);
  CC(hx,hy,s*0.15,PCC.body);
  for(let i=-1;i<=1;i++){const cx=hx+i*s*0.06, cy=hy-s*0.22; LN(hx+i*s*0.02,hy-s*0.12,cx,cy,s*0.018,PCC.crest); CC(cx,cy,s*0.03,PCC.eye1);}
  const lk=lookVec(x+hx,y+hy,a);
  eye(hx-s*0.06,hy-s*0.01,s*0.05,lk.x,lk.y,a.blink,a.mood);
  eye(hx+s*0.06,hy-s*0.01,s*0.05,lk.x,lk.y,a.blink,a.mood);
  TRI(hx-s*0.035,hy+s*0.05,hx+s*0.035,hy+s*0.05,hx,hy+s*(a.mood==='surprised'?0.13:0.11),PCC.beak);
  alpha(a.mood==='shy'||a.mood==='happy'||a.mood==='proud'?0.9:0.5); E(hx-s*0.1,hy+s*0.05,s*0.03,s*0.02,0,BLUSH); E(hx+s*0.1,hy+s*0.05,s*0.03,s*0.02,0,BLUSH); alpha(1);
  ctx.restore();
}
function drawRabbit(a,x,y,s){
  const sq=a.sq.v, ef=a.ear.v;
  ctx.save(); ctx.translate(x,y-a.hy.v*s); if(a.roll){ctx.translate(0,-s*0.3);ctx.rotate(a.roll);ctx.translate(0,s*0.3);}
  ctx.scale(1+sq*0.15,1-sq*0.2);
  const hx=0, hy=-s*0.55;
  /* ears */
  for(const sd of [-1,1]){
    ctx.save(); ctx.translate(hx+sd*s*0.08,hy-s*0.12); ctx.rotate(sd*(0.12+ef*0.75)+Math.sin(T*2.3+sd)*0.05);
    E(0,-s*0.2,s*0.07,s*0.21,0,RBC.body); E(0,-s*0.19,s*0.035,s*0.15,0,RBC.in); ctx.restore();
  }
  /* body & feet */
  E(0,-s*0.22,s*0.2,s*0.22,0,RBC.body);
  E(0,-s*0.18,s*0.12,s*0.13,0,RBC.sh);
  E(-s*0.1,-s*0.02,s*0.08,s*0.04,0,RBC.body); E(s*0.1,-s*0.02,s*0.08,s*0.04,0,RBC.body);
  E(-s*0.17,-s*0.27,s*0.05,s*0.09,0.5,RBC.body); E(s*0.17,-s*0.27,s*0.05,s*0.09,-0.5,RBC.body);
  /* head */
  CC(hx,hy,s*0.19,RBC.body);
  const lk=lookVec(x+hx,y+hy,a);
  eye(hx-s*0.075,hy-s*0.02,s*0.05,lk.x,lk.y,a.blink,a.mood);
  eye(hx+s*0.075,hy-s*0.02,s*0.05,lk.x,lk.y,a.blink,a.mood);
  TRI(hx-s*0.025,hy+s*0.05,hx+s*0.025,hy+s*0.05,hx,hy+s*0.08,'#ff9fb8');
  if(a.mood==='surprised') CC(hx,hy+s*0.12,s*0.025,INK); else {ARC(hx-s*0.025,hy+s*0.09,s*0.025,0.2,PI-0.2,s*0.016,INK);ARC(hx+s*0.025,hy+s*0.09,s*0.025,0.2,PI-0.2,s*0.016,INK);}
  alpha(0.8); E(hx-s*0.12,hy+s*0.06,s*0.035,s*0.022,0,BLUSH); E(hx+s*0.12,hy+s*0.06,s*0.035,s*0.022,0,BLUSH); alpha(1);
  ctx.restore();
}
function drawAnimal(a,x,y,s){
  if(a.kind==='snail') drawSnail(a,x,y,s); else if(a.kind==='peacock') drawPeacock(a,x,y,s); else drawRabbit(a,x,y,s);
}

/* ---- hidden clues ---- */
function antennaClue(a,x,y,s,dir){
  const pk=clamp(a.peek.v,0.35,1.3); const d=dir||1;
  const wv=Math.sin(T*2.6+a.wave)*s*0.03+a.waveT*Math.sin(T*12)*s*0.05;
  /* head top peeking */
  ctx.save(); ctx.translate(x,y);
  E(0,0,s*0.11,s*0.07*pk,0,SNC.body);
  const t1x=d*(-s*0.05)+wv, t1y=-s*0.36*pk, t2x=d*(s*0.13)+wv*0.8, t2y=-s*0.31*pk;
  QL(-d*s*0.02,-s*0.02,d*(-s*0.05),-s*0.2*pk,t1x,t1y,s*0.045,SNC.bodyD);
  QL(d*s*0.05,-s*0.02,d*(s*0.09),-s*0.18*pk,t2x,t2y,s*0.045,SNC.bodyD);
  const lk=lookVec(x+t1x,y+t1y,a);
  eye(t1x,t1y,s*0.08,lk.x,lk.y,a.blink,a.mood==='giggle'?'giggle':(a.mood==='scared'?'neutral':a.mood));
  eye(t2x,t2y,s*0.08,lk.x,lk.y,a.blink,a.mood==='giggle'?'giggle':(a.mood==='scared'?'neutral':a.mood));
  ctx.restore();
}
function featherClue(a,x,y,s){
  const pk=clamp(a.peek.v,0.35,1.3);
  const n=5; const sp=0.42+0.3*clamp(a.fan.v,0,1);
  for(let i=0;i<n;i++){
    const k=i/(n-1)*2-1; const ang=-PI/2+k*sp+Math.sin(T*1.8+i)*0.07;
    const len=s*(0.24+0.24*pk);
    const tx=x+Math.cos(ang)*len, ty=y+Math.sin(ang)*len;
    LN(x,y,tx,ty,s*0.022,PCC.tail2);
    ctx.save(); ctx.translate(x+Math.cos(ang)*len*0.7,y+Math.sin(ang)*len*0.7); ctx.rotate(ang+PI/2); E(0,0,s*0.07,len*0.28,0,PCC.tail); ctx.restore();
    CC(tx,ty,s*0.06,PCC.eye2); CC(tx,ty,s*0.042,PCC.tail2); CC(tx,ty,s*0.024,PCC.eye1);
  }
}
function earClue(a,x,y,s){
  const pk=clamp(a.peek.v,0.35,1.3);
  for(const sd of [-1,1]){
    ctx.save(); ctx.translate(x+sd*s*0.07,y); ctx.rotate(sd*(0.15+a.ear.v*0.6)+Math.sin(T*3+sd*2)*0.08*(a.waveT>0?3:1));
    E(0,-s*0.18*pk,s*0.065,s*0.2*pk,0,RBC.body); E(0,-s*0.17*pk,s*0.032,s*0.14*pk,0,RBC.in); ctx.restore();
  }
}

