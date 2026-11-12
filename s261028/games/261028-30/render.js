'use strict';
/* ---------- S20 render ---------- */
function drawShopInterior(){
  const W=L.W,H=L.H,hs=L.hs;
  ctx.fillStyle='#ffe9d6'; ctx.fillRect(0,0,W,H);
  /* wallpaper: breathing diamonds & dots */
  const st=hs*0.46;
  for(let y=L.y0+L.h*0.08,r=0;y<H;y+=st,r++){for(let x=(r%2?st/2:0);x<W+st;x+=st){
    const k=0.75+0.25*Math.sin(T*1.3+x*0.013+y*0.017);
    if((r+Math.round(x/st))%3===0){ctx.save();ctx.translate(x,y);ctx.rotate(PI/4);RR(-hs*0.035*k,-hs*0.035*k,hs*0.07*k,hs*0.07*k,hs*0.01,'#ffd8c2');ctx.restore();}
    else CC(x,y,hs*0.028*k,'#ffdcca');}}
  /* side wall frames */
  const fw=Math.max(10,L.x0+L.w*0.03);
  RR(-4,0,fw+4,H,0,'#ffcfb3'); RR(W-fw,0,fw+4,H,0,'#ffcfb3');
  for(let y=0;y<H;y+=hs*0.3){CC(fw*0.55,y+((T*8)%(hs*0.3)),fw*0.18,'#ffe9d6');CC(W-fw*0.55,y+((T*8)%(hs*0.3)),fw*0.18,'#ffe9d6');}
  /* window with the sky */
  const w=winGeom();
  CC(w.x,w.y,w.r*1.14,'#ffffff'); CC(w.x,w.y,w.r,'#bfe6ff');
  CC(w.x-w.r*0.35,w.y-w.r*0.15,w.r*0.22,'#ffffff'); CC(w.x-w.r*0.15,w.y-w.r*0.2,w.r*0.26,'#ffffff');
  if(RB.state==='window'){
    ctx.save(); ctx.beginPath(); ctx.arc(w.x,w.y,w.r,0,TAU); ctx.clip();
    const pk=clamp(RB.peek.v,0,1.2);
    drawRabbit(RB,w.x,w.y+w.r*(2.05-1.25*pk),w.r*1.55);
    ctx.restore();
  }
  RR(w.x-w.r*1.2,w.y+w.r*0.92,w.r*2.4,w.r*0.22,w.r*0.1,'#ffc2d4');
  /* shelves */
  const rows=shelfRows();
  rows.forEach(y=>{RR(L.x0+L.w*0.05,y-hs*0.005,L.w*0.9,hs*0.075,hs*0.035,'#cdb4f6');RR(L.x0+L.w*0.05,y+hs*0.045,L.w*0.9,hs*0.03,hs*0.015,'#b597ee');});
  /* floor */
  const fy=rows[rows.length-1]+hs*0.2;
  if(fy<H){ ctx.fillStyle='#ffd3de'; ctx.fillRect(0,fy,W,H-fy);
    const cs=hs*0.3; for(let y=fy,r=0;y<H;y+=cs,r++){for(let x=(r%2?cs:0);x<W;x+=cs*2){const k=0.86+0.1*Math.sin(T*1.5+r+x*0.01);RR(x+cs*(1-k)/2,y+cs*(1-k)/2,cs*k,cs*k,cs*0.12,'#ffe6ee');}} }
  /* awning */
  const ah=L.y0+Math.min(L.h*0.065,hs*0.3); const n=Math.max(6,Math.round(W/(hs*0.42))); const sw=W/n;
  for(let i=0;i<n;i++){ctx.fillStyle=i%2?'#fff6ea':'#ff9ec4';ctx.fillRect(i*sw,0,sw+1,ah);CC(i*sw+sw/2,ah,sw/2,i%2?'#fff6ea':'#ff9ec4');}
}
function drawShop(open){
  if(open<=0.001){drawShopInterior();return;}
  const off=open*L.W*0.62;
  ctx.save(); ctx.translate(-off,0); ctx.beginPath(); ctx.rect(-2,0,L.W/2+2,L.H); ctx.clip(); drawShopInterior();
  for(let y=0;y<L.H;y+=L.hs*0.24){TRI(L.W/2,y,L.W/2+L.hs*0.1,y+L.hs*0.12,L.W/2,y+L.hs*0.24,'#ff9ec4');} ctx.restore();
  ctx.save(); ctx.translate(off,0); ctx.beginPath(); ctx.rect(L.W/2,0,L.W/2+2,L.H); ctx.clip(); drawShopInterior();
  for(let y=0;y<L.H;y+=L.hs*0.24){TRI(L.W/2,y,L.W/2-L.hs*0.1,y+L.hs*0.12,L.W/2,y+L.hs*0.24,'#8fd3ff');} ctx.restore();
}
function drawShowBG(){
  const W=L.W,H=L.H,hs=L.hs; const S=G.show;
  ctx.fillStyle='#bfe6ff'; ctx.fillRect(0,0,W,H);
  /* sun with geometric rays */
  const sx=L.x0+L.w*0.13, sy=L.y0+L.h*(L.port?0.2:0.24), sr=hs*0.22;
  for(let i=0;i<10;i++){const a=T*0.4+i*TAU/10;const r1=sr*1.25,r2=sr*(1.7+0.15*Math.sin(T*2+i));TRI(sx+Math.cos(a-0.12)*r1,sy+Math.sin(a-0.12)*r1,sx+Math.cos(a+0.12)*r1,sy+Math.sin(a+0.12)*r1,sx+Math.cos(a)*r2,sy+Math.sin(a)*r2,'#fff1a8');}
  CC(sx,sy,sr,'#ffe08a');
  /* clouds */
  for(let i=0;i<3;i++){const cx=((T*12*(i+1)*0.4+i*W*0.37)%(W+hs*2))-hs; const cy=L.y0+L.h*(0.2+i*0.07);CC(cx,cy,hs*0.16,'#ffffff');CC(cx+hs*0.17,cy-hs*0.05,hs*0.2,'#ffffff');CC(cx+hs*0.36,cy,hs*0.15,'#ffffff');}
  /* stage */
  const f=fanGeom(); const sy0=f.y-hs*0.02;
  ctx.fillStyle=S?S.col:'#ffe0ef'; ctx.fillRect(0,sy0,W,H-sy0);
  /* runway */
  const rw=L.w*(L.port?0.42:0.3); const rx=L.x0+L.w/2-rw/2;
  RR(rx,sy0,rw,H-sy0+10,0,'#fff7fb');
  for(let y=sy0,i=0;y<H;y+=hs*0.2,i++){const k=0.5+0.5*Math.sin(T*3-i*0.6);TRI(rx,y,rx+hs*0.08*k+hs*0.03,y+hs*0.1,rx,y+hs*0.2,'#ff9ec4');TRI(rx+rw,y,rx+rw-hs*0.08*k-hs*0.03,y+hs*0.1,rx+rw,y+hs*0.2,'#8fd3ff');}
  for(let y=sy0+hs*0.1,i=0;y<H;y+=hs*0.32,i++){const k=0.6+0.4*Math.sin(T*2.2+i);CC(L.x0+L.w/2,y,hs*0.035*k,'#ffd36e');}
  /* stamps from the child's taps during the show */
  if(S){ S.stamps.forEach((st,i)=>{const x=L.x0+st.x*L.w,y=L.y0+st.y*L.h+hs*0.05;const age=T-st.t;const k=Math.min(1,age*3)*(0.85+0.15*Math.sin(T*3+i));alpha(0.55);
      if(st.sh===0)CC(x,y,hs*0.2*k,st.col);else if(st.sh===1)star4(x,y,hs*0.24*k,T*0.5,st.col);else if(st.sh===2)heart(x,y,hs*0.18*k,st.col);else {ctx.save();ctx.translate(x,y);ctx.rotate(T*0.3);RR(-hs*0.15*k,-hs*0.15*k,hs*0.3*k,hs*0.3*k,hs*0.05,st.col);ctx.restore();}
      alpha(1);}); }
  /* each friendship show has its own decoration */
  if(S){
    if(S.v==='ribbon'){ const g=garlandGeom(); for(let i=0;i<6;i++){const x0=lerp(g.x1,g.x2,(i+0.5)/6);const y0=g.y+hs*0.05;ctx.strokeStyle=CONF[i];ctx.lineWidth=hs*0.05;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x0,y0);
      for(let k=1;k<=8;k++){const yy=y0+k*hs*0.13;ctx.lineTo(x0+Math.sin(T*2.5+k*0.8+i)*hs*0.09,yy);} ctx.stroke();} }
    else if(S.v==='duo'){ for(let i=0;i<5;i++){const x=L.x0+L.w*(0.12+0.19*i);const y=sy0+((T*30+i*97)%(H-sy0));alpha(0.35);heart(x,H-(y-sy0),hs*0.12,'#ff9ec4');alpha(1);} }
    else if(S.v==='parade'){ for(let i=0;i<10;i++){const u=((T*0.25+i/10)%1);const y=sy0+u*(H-sy0);const x=L.x0+L.w/2+(i%2?1:-1)*hs*0.08;alpha(0.4);ctx.save();ctx.translate(x,y);CC(0,0,hs*0.045,'#cdb4f6');CC(-hs*0.03,-hs*0.06,hs*0.02,'#cdb4f6');CC(hs*0.03,-hs*0.06,hs*0.02,'#cdb4f6');ctx.restore();alpha(1);} }
    else if(S.v==='giant'){ for(let i=0;i<7;i++){const a=T*0.6+i*TAU/7;alpha(0.5);star4(L.x0+L.w/2+Math.cos(a)*L.w*0.38,sy0+(H-sy0)*0.45+Math.sin(a)*(H-sy0)*0.35,hs*0.1,T+i,'#fff1a8');alpha(1);} }
  }
  /* soft spotlights */
  for(let i=0;i<3;i++){const x=L.x0+L.w*(0.5+0.32*Math.sin(T*0.5+i*2.1)),y=sy0+(H-sy0)*(0.35+0.2*Math.sin(T*0.7+i));alpha(0.18);CC(x,y,hs*0.55,['#fff6b0','#ffd0e8','#d6f0ff'][i]);alpha(1);}
}
function drawFan(){
  const f=fanGeom(); const pl=PL.fan; const N=13; const ru=pl.rustle;
  const hidden=pl.occ.filter(a=>a.state==='hidden');
  const part=pl.part||0;
  if(Math.abs(part)>0.01||G.phase==='cut'&&C&&C.d4==='done'){ }
  /* feathers */
  for(let i=0;i<N;i++){
    const u=(i+0.5)/N; let a=PI+u*PI;
    a+=Math.sin(T*2.2+i*0.7)*0.025*(1+ru*2);
    if(part) a+=part*(u<0.5?-1:1)*0.0+(part>0?(u>0.5?0.22:0):(u<0.5?-0.22:0))*Math.abs(part);
    const len=f.r*(0.92+0.06*Math.sin(T*1.7+i));
    const ex=f.x+Math.cos(a)*len, ey=f.y+Math.sin(a)*len;
    LN(f.x,f.y,ex,ey,f.r*0.025,'#5fbfa8');
    ctx.save(); ctx.translate(f.x+Math.cos(a)*len*0.66,f.y+Math.sin(a)*len*0.66); ctx.rotate(a+PI/2);
    E(0,0,f.r*0.11,len*0.3,0,i%2?'#8fd8c8':'#a5e3d6'); ctx.restore();
    CC(ex,ey,f.r*0.09,'#ffe08a'); CC(ex,ey,f.r*0.062,'#5fbfa8'); CC(ex,ey,f.r*0.035,'#3f7fd6');
  }
  E(f.x,f.y,f.r*0.22,f.r*0.12,0,'#7fd0bf');
  /* clues of friends hiding behind */
  for(const a of hidden){ const c=clueInfo(pl,a);
    if(a===SN) antennaClue(a,c.bx,c.by,L.hs*0.8,1);
    else if(a===PC){ /* crest balls peeking at the left edge */ const pk=clamp(a.peek.v,0.35,1.2); for(let k=-1;k<=1;k++){const cx=c.bx+k*L.hs*0.05,cy=c.by-L.hs*0.12*pk-Math.abs(k)*(-L.hs*0.03);LN(c.bx+k*L.hs*0.02,c.by,cx,cy,L.hs*0.015,'#5fbfa8');CC(cx,cy,L.hs*0.03,'#3f7fd6');} }
    else earClue(a,c.bx,c.by,L.hs*0.8);
  }
}
function drawGarland(){
  const g=garlandGeom(); const pl=PL.garland; const s=g.s;
  const sag=s*0.3;
  ctx.strokeStyle=pl.col?pl.col.r:'#ff9ec4'; ctx.lineWidth=s*0.06; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(g.x1,g.y-s*0.18); ctx.quadraticCurveTo((g.x1+g.x)/2,g.y+sag*0.4,g.x,g.y); ctx.quadraticCurveTo((g.x+g.x2)/2,g.y+sag*0.4,g.x2,g.y-s*0.18); ctx.stroke();
  for(let i=1;i<10;i++){const u=i/10;const xx=lerp(g.x1,g.x2,u);if(Math.abs(xx-g.x)<s*0.35)continue;const yy=g.y-s*0.18+Math.sin(u*PI)*s*0.36-0.0;const sw=Math.sin(T*2+i)*0.15;
    ctx.save();ctx.translate(xx,yy);ctx.rotate(sw);TRI(-s*0.09,0,s*0.09,0,0,s*0.2,CONF[i%CONF.length]);ctx.restore();}
  for(const a of pl.occ){ if(a.state!=='hidden') continue; const c=clueInfo(pl,a); if(a===SN) antennaClue(a,c.bx,c.by,s*0.9,1); else if(a===RB) earClue(a,c.bx,c.by,s*0.9); else featherClue(a,c.bx,c.by,s*0.9); }
  const kn=pl.knot;
  bow(g.x,g.y,s*2.0,pl.col?pl.col.r:'#ff9ec4',pl.col?pl.col.k:'#ff7fb0',kn.tied,kn.dir,kn.wig,kn.pull);
}
function drawPlace(pl){
  const g=geom(pl); const s=g.s;
  const hid=pl.occ.filter(a=>a.state==='hidden'&&!a.travel);
  ctx.save(); ctx.translate(0,-pl.hop.v*s*0.6);
  const lifted=pl.lift.v>0.06;
  /* behind the crown: feathers & ears */
  for(const a of hid){ if(a.kind==='snail') continue; if(lifted&&pl.type!=='box'&&pl.lift.v>0.3) continue; const c=clueInfo(pl,a);
    if(a.kind==='peacock') featherClue(a,c.bx,c.by,s*0.95); else earClue(a,c.bx,c.by,s*0.95); }
  /* friends visible under a lifted hat */
  if(lifted&&hid.length){
    if(pl.type==='box'){ hid.forEach((a,i)=>drawAnimal(a,g.x+(i-(hid.length-1)/2)*s*0.28,g.y-s*0.3,s*0.48)); }
    else hid.forEach((a,i)=>drawAnimal(a,g.x+(i-(hid.length-1)/2)*s*0.32,g.y,s*0.55));
  }
  /* legs for walking hats (and the giant hat in the giant show) */
  if(G.world==='show'&&pl.showKey&&pl.showKey[0]==='w'&&pl.showKey!=='w4'){
    const ph=pl.walk*2.2; const lg=s*0.12;
    for(const sd of [-1,1]){const st=Math.sin(ph+(sd>0?PI:0));RR(g.x+sd*s*0.16-lg*0.3+st*s*0.04,g.y-lg*0.3-Math.max(0,st)*s*0.05,lg*0.6,lg*0.9,lg*0.3,'#ffb38a');}
  }
  if(G.show&&G.show.v==='giant'&&pl===stageHat()&&!G.show.bowed){
    const ph=T*5; for(let i=0;i<6;i++){const x=g.x+(i-2.5)*s*0.11;const st=Math.sin(ph+i*PI);RR(x-s*0.03,g.y-s*0.03-Math.max(0,st)*s*0.04,s*0.06,s*0.1,s*0.03,i<2?SNC.body:(i<4?PCC.beak:'#ffffff'));}
    if(G.show.gl&&G.show.gl.v>0.05){ const lv=G.show.gl.v; drawRabbit(RB,g.x,g.y,s*0.5); drawPeacock(PC,g.x,g.y-s*0.42,s*0.45); drawSnail(SN,g.x,g.y-s*0.88,s*0.4); void lv; }
  }
  drawHatBody(pl,g);
  /* spiral print left by the snail that remembered */
  if(pl.print>0.01){ const sd=pl.peekSide||1; alpha(0.75*pl.print); ctx.strokeStyle='#e98bb6'; ctx.lineWidth=s*0.02; ctx.beginPath();
    for(let i=0;i<40;i++){const a=i*0.42,r=s*0.008*i*0.5;const x=g.x-sd*s*0.12+Math.cos(a)*r,y=g.y-s*0.24+Math.sin(a)*r;i?ctx.lineTo(x,y):ctx.moveTo(x,y);} ctx.stroke(); alpha(1); }
  /* antennae in front */
  for(const a of hid){ if(a.kind!=='snail') continue; if(lifted&&pl.type!=='box') continue; const c=clueInfo(pl,a); antennaClue(a,c.bx,c.by+(a.tremble?Math.sin(T*40)*s*0.008:0),s*0.95,(c.bx<g.x)?-1:1); }
  if(g.knot){ const kn=pl.knot; bow(g.knot.x,g.knot.y,s,pl.col.r,pl.col.k,kn.tied,kn.dir,kn.wig,kn.pull); }
  ctx.restore();
}
function costumePoint(a,p,s){
  if(a.kind==='snail') return {x:p.x-s*0.1*a.dir,y:p.y-s*0.56-a.hy.v*s};
  if(a.kind==='peacock') return {x:p.x+a.lean.v*s*0.08,y:p.y-s*0.84-a.hy.v*s};
  return {x:p.x,y:p.y-s*0.72-a.hy.v*s};
}
function drawCostume(a,p,s){
  const c=COST[a.kind]; if(!c) return; const cp=costumePoint(a,p,s);
  drawHatBody(c,{x:cp.x,y:cp.y,s:s*0.48,pl:c});
}
function drawAnimals(){
  const list=ANIMALS.filter(a=>a.state==='out'||a.travel).sort((p,q)=>posOf(p).y-posOf(q).y);
  const S=G.show;
  for(const a of list){
    if(a.alpha<=0.01) continue;
    const p=posOf(a); let s=asz();
    if(a.inbound&&a.travel){const k=sat((T-a.travel.t0)/a.travel.dur);s*=1-0.45*k*k;}
    alpha(a.alpha); drawAnimal(a,p.x,p.y,s);
    if(S&&a.state==='out'&&!(S.v==='duo'&&S.pair.indexOf(a)>=0)) drawCostume(a,p,s);
    alpha(1);
  }
  /* duo: two friends share one hat */
  if(S&&S.v==='duo'&&S.pair.every(a=>a.state==='out')){
    const p1=posOf(S.pair[0]),p2=posOf(S.pair[1]); const s=asz();
    const c1=costumePoint(S.pair[0],p1,s),c2=costumePoint(S.pair[1],p2,s);
    const lift=(S.sl?S.sl.v:0)*s*0.7;
    const w=Math.max(s*1.1,Math.abs(p2.x-p1.x)+s*0.75);
    drawHatBody(SHARED,{x:(c1.x+c2.x)/2,y:Math.min(c1.y,c2.y)+s*0.08-lift,s:w,pl:SHARED});
  }
}
function drawParticles(){
  for(const p of PT){
    const k=p.life/p.max; alpha(k<0.7?1:1-(k-0.7)/0.3);
    const s=p.sz;
    switch(p.shape){
      case 'tri':ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);TRI(-s,s*0.8,s,s*0.8,0,-s,p.col);ctx.restore();break;
      case 'sq':ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);RR(-s*0.7,-s*0.7,s*1.4,s*1.4,s*0.2,p.col);ctx.restore();break;
      case 'zig':ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.strokeStyle=p.col;ctx.lineWidth=s*0.45;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-s,0);ctx.lineTo(-s*0.33,-s*0.6);ctx.lineTo(s*0.33,s*0.6);ctx.lineTo(s,0);ctx.stroke();ctx.restore();break;
      case 'heart':heart(p.x,p.y,s*1.3,p.col);break;
      case 'star':star4(p.x,p.y,s*1.5,p.rot,p.col);break;
      case 'flower':for(let i=0;i<5;i++){const a=p.rot+i*TAU/5;CC(p.x+Math.cos(a)*s*0.7,p.y+Math.sin(a)*s*0.7,s*0.55,p.col);}CC(p.x,p.y,s*0.45,'#ffe08a');break;
      case 'ring':alpha((1-k)*0.8);ctx.strokeStyle=p.col;ctx.lineWidth=s*0.15;ctx.beginPath();ctx.arc(p.x,p.y,s*(0.3+k*1.2),0,TAU);ctx.stroke();break;
      default:CC(p.x,p.y,s*0.8,p.col);
    }
  }
  alpha(1);
}
function drawTrails(){
  for(const tr of TR){
    const age=T-tr.born; const prog=sat(age/tr.dur);
    const a=tr.from(), b=tr.to(); const mx=(a.x+b.x)/2, my=Math.min(a.y,b.y)-dist(a.x,a.y,b.x,b.y)*0.18;
    const N=16; const fade=tr.strong?1:Math.max(0,1-(age-tr.dur)/(tr.life-tr.dur));
    for(let i=0;i<=N;i++){const u=i/N; if(u>prog) break; const x=(1-u)*(1-u)*a.x+2*(1-u)*u*mx+u*u*b.x, y=(1-u)*(1-u)*a.y+2*(1-u)*u*my+u*u*b.y;
      alpha(fade*(tr.strong?0.9:0.7)); const r=L.hs*(tr.strong?0.032:0.024)*(1+0.3*Math.sin(T*4-i*0.8));
      if(tr.strong&&i%3===0) star4(x,y,r*2.2,T+i,'#ffffff'); else CC(x,y,r,tr.strong?'#a5e3d6':'#ffe3a3'); }
    alpha(1);
  }
}
function drawHalo(){
  const tp=targetPoint(); if(!tp) return;
  if(G.phase==='cut') return;
  const pulse=(T*0.9)%1; const r=Math.max(34,tp.r);
  alpha(0.16); CC(tp.x,tp.y,r*1.05,'#fffbe0');
  alpha(0.6*(1-pulse)); ctx.strokeStyle='#fff3a0'; ctx.lineWidth=Math.max(3,L.hs*0.035); ctx.beginPath(); ctx.arc(tp.x,tp.y,r*(0.85+0.55*pulse),0,TAU); ctx.stroke();
  alpha(0.9); for(let i=0;i<3;i++){const a=T*1.6+i*TAU/3;star4(tp.x+Math.cos(a)*r*1.05,tp.y+Math.sin(a)*r*1.05,L.hs*0.05,T*2,'#fff6c0');}
  alpha(1);
}
function drawFinger(){
  if(HINT.t<0) return;
  const t=HINT.t;
  let x=HINT.x, y=HINT.y, press=0, a=1;
  const sx=HINT.x+L.hs*0.55, sy=HINT.y+L.hs*0.7;
  if(t<0.55){const k=eOut(t/0.55);x=lerp(sx,HINT.x,k);y=lerp(sy,HINT.y,k);a=k;}
  else if(t<0.8){press=Math.sin((t-0.55)/0.25*PI);}
  else if(t<1.6){ if(HINT.kind!=='tap'){const k=eIO((t-0.8)/0.8);x=HINT.x+HINT.dx*k;y=HINT.y+HINT.dy*k;press=0.6;} }
  else { if(HINT.kind!=='tap'){x=HINT.x+HINT.dx;y=HINT.y+HINT.dy;} a=1-(t-1.6)/0.6; }
  if(t>0.6&&t<1.1){const k=(t-0.6)/0.5;alpha(a*(1-k)*0.8);ctx.strokeStyle='#ffffff';ctx.lineWidth=4;ctx.beginPath();ctx.arc(HINT.x,HINT.y,L.hs*(0.08+0.25*k),0,TAU);ctx.stroke();}
  alpha(a*0.95);
  const s=L.hs*(0.5-press*0.05);
  ctx.save(); ctx.translate(x,y); ctx.rotate(-0.45);
  ctx.fillStyle='#ffffff'; ctx.strokeStyle='#b597ee'; ctx.lineWidth=Math.max(2,s*0.05);
  rrPath(-s*0.11,-s*0.02,s*0.22,s*0.62,s*0.11); ctx.fill(); ctx.stroke();
  rrPath(-s*0.24,s*0.38,s*0.5,s*0.46,s*0.18); ctx.fill(); ctx.stroke();
  rrPath(-s*0.11,0,s*0.22,s*0.5,s*0.11); ctx.fill();
  CC(0,s*0.04,s*0.07,'#ffd0e2');
  ctx.restore(); alpha(1);
}
function render(){
  ctx.setTransform(L.dpr,0,0,L.dpr,0,0);
  if(G.world==='show'||G.open>0.001) drawShowBG();
  if(G.world==='show'||G.open>0.001){ drawFan(); drawGarland(); }
  if(G.world==='shop'&&G.open<0.999) drawShop(G.open);
  drawTrails();
  const places=HATS.slice().sort((p,q)=>(placeBase(p).y+(p.cen.v>0.05?1e5:0))-(placeBase(q).y+(q.cen.v>0.05?1e5:0)));
  for(const pl of places) drawPlace(pl);
  drawAnimals();
  drawParticles();
  drawHalo();
  drawFinger();
}

