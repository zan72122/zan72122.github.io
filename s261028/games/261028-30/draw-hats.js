'use strict';
/* ---------- S7 drawing: hats ---------- */
function brimPath(rx,ry,bend,cy){
  ctx.beginPath();
  for(let i=0;i<=28;i++){const th=i/28*TAU;const c=Math.cos(th);const px=c*rx;const py=cy+Math.sin(th)*ry+bend*c*c*ry*1.6;i?ctx.lineTo(px,py):ctx.moveTo(px,py);}
  ctx.closePath();
}
function bow(x,y,s,c1,c2,tied,dir,wig,pull){
  /* ribbon bow; tied 1 = neat, 0 = undone (tails slide away) */
  const w=Math.sin(T*9)*wig*0.25;
  const lp=s*0.13*(0.35+0.65*tied);
  if(tied>0.05){
    E(x-lp*0.95,y+w*s*0.1,lp,lp*0.62,-0.35+w,c1);
    E(x+lp*0.95,y-w*s*0.1,lp,lp*0.62,0.35-w,c1);
  }
  const tl=s*(0.16+0.28*(1-tied))+pull*s*0.4;
  const sway=Math.sin(T*2.4)*0.12+(1-tied)*0.5*dir;
  ctx.strokeStyle=c1; ctx.lineWidth=s*0.055; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(x,y); ctx.quadraticCurveTo(x-s*0.06+dir*pull*s*0.2,y+tl*0.6,x-s*0.09+Math.sin(sway)*tl*0.6+dir*pull*s*0.3,y+tl); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x,y); ctx.quadraticCurveTo(x+s*0.05+dir*pull*s*0.2,y+tl*0.5,x+s*0.1+Math.sin(sway+0.8)*tl*0.5+dir*pull*s*0.3,y+tl*0.9); ctx.stroke();
  CC(x,y,s*0.05*(0.6+0.4*tied),c2);
}
function polka(x1,y1,x2,y2,step,r,c,ph){
  ctx.fillStyle=c;
  for(let yy=y1,row=0;yy<y2+step;yy+=step,row++){for(let xx=x1+(row%2?step/2:0);xx<x2+step;xx+=step){const rr=r*(0.8+0.25*Math.sin(T*1.8+xx*0.05+yy*0.07+ph));ctx.beginPath();ctx.arc(xx,yy,Math.max(0.3,rr),0,TAU);ctx.fill();}}
}
function drawHatBody(pl,g){
  const s=g.s, col=pl.col; const k=wideK(pl);
  const sq=pl.sq.v, bend=pl.bend.v, lift=pl.lift.v*s;
  ctx.save();
  ctx.translate(g.x,g.y);
  ctx.rotate(pl.tilt.v+(pl.shake>0?Math.sin(T*40)*0.04*pl.shake:0));
  ctx.scale(1+0.22*sq,1-0.3*sq);
  const ty=-lift;
  switch(pl.type){
    case 'straw':{
      brimPath(s*0.52,s*0.105,bend,ty-s*0.05); ctx.fillStyle=col.a; ctx.fill();
      ctx.save(); brimPath(s*0.52,s*0.105,bend,ty-s*0.05); ctx.clip();
      ctx.strokeStyle=col.b; ctx.lineWidth=s*0.012;
      for(let i=1;i<4;i++){ctx.beginPath();ctx.ellipse(0,ty-s*0.05,s*0.52*i/4.2,s*0.105*i/4.2,0,0,TAU);ctx.stroke();}
      ctx.restore();
      rrPath(-s*0.27,ty-s*0.46,s*0.54,s*0.42,s*0.2); ctx.fillStyle=col.a; ctx.fill();
      ctx.save(); rrPath(-s*0.27,ty-s*0.46,s*0.54,s*0.42,s*0.2); ctx.clip();
      ctx.fillStyle=col.b; const ph=T*1.6;
      for(let r=0;r<5;r++){for(let c2=0;c2<6;c2++){const xx=-s*0.27+(c2+(r%2)*0.5)*s*0.1, yy=ty-s*0.43+r*s*0.075; const ww=s*0.045*(0.75+0.3*Math.sin(ph+r+c2));RR(xx,yy,ww,s*0.018,s*0.009,col.b);}}
      RR(-s*0.3,ty-s*0.17,s*0.6,s*0.09,0,col.r);
      ctx.restore();
      break;}
    case 'feather':{
      brimPath(s*0.44,s*0.09,bend+0.35,ty-s*0.06); ctx.fillStyle=col.b; ctx.fill();
      ctx.beginPath(); ctx.ellipse(0,ty-s*0.2,s*0.31,s*0.28,0,PI,TAU); ctx.lineTo(s*0.31,ty-s*0.06); ctx.lineTo(-s*0.31,ty-s*0.06); ctx.closePath(); ctx.fillStyle=col.a; ctx.fill();
      ctx.save(); ctx.beginPath(); ctx.ellipse(0,ty-s*0.2,s*0.31,s*0.28,0,PI,TAU); ctx.lineTo(s*0.31,ty-s*0.06); ctx.lineTo(-s*0.31,ty-s*0.06); ctx.closePath(); ctx.clip();
      for(let i=0;i<5;i++){const yy=ty-s*0.42+i*s*0.085; const amp=s*0.02*(1+0.4*Math.sin(T*2+i)); ctx.strokeStyle=col.b; ctx.lineWidth=s*0.022; ctx.beginPath(); for(let j=0;j<=10;j++){const xx=-s*0.32+j*s*0.064; const yv=yy+(j%2?amp:-amp); j?ctx.lineTo(xx,yv):ctx.moveTo(xx,yv);} ctx.stroke();}
      RR(-s*0.32,ty-s*0.16,s*0.64,s*0.07,0,col.r);
      ctx.restore();
      /* little feather pin */
      ctx.save(); ctx.translate(-s*0.22,ty-s*0.17); ctx.rotate(-0.5+Math.sin(T*2.2)*0.08);
      E(0,-s*0.14,s*0.05,s*0.14,0,'#8fd3d8'); CC(0,-s*0.22,s*0.035,'#5aa6e6'); ctx.restore();
      CC(-s*0.22,ty-s*0.13,s*0.04,col.k);
      break;}
    case 'box':{
      /* box body (does not lift); lid lifts */
      ctx.save(); ctx.translate(0,lift);
      E(0,-s*0.05,s*0.31,s*0.07,0,col.a);
      RR(-s*0.31,-s*0.44,s*0.62,s*0.39,0,col.a);
      ctx.save(); rrPath(-s*0.31,-s*0.44,s*0.62,s*0.39,0); ctx.clip();
      for(let i=0;i<7;i++){const xx=-s*0.31+i*s*0.1+((T*0.02)%0.1)*0; const ww=s*0.045*(0.85+0.2*Math.sin(T*1.5+i)); RR(xx,-s*0.46,ww,s*0.44,0,col.b);} ctx.restore();
      ctx.restore();
      const ly=-lift*1.0;
      E(0,ly-s*0.44,s*0.33,s*0.075,0,col.r);
      RR(-s*0.33,ly-s*0.51,s*0.66,s*0.08,s*0.02,col.r);
      E(0,ly-s*0.51,s*0.33,s*0.075,0,col.k);
      break;}
    case 'bonnet':{
      /* frilly brim */
      for(let i=0;i<9;i++){const a=PI*(0.05+0.9*i/8); CC(Math.cos(a)*s*0.4,ty-s*0.06+Math.sin(a)*s*0.07+bend*s*0.05*Math.cos(a)*Math.cos(a),s*0.085,col.b);}
      ctx.beginPath(); ctx.ellipse(0,ty-s*0.16,s*0.36,s*0.29,0,PI,TAU); ctx.lineTo(s*0.4,ty-s*0.06); ctx.lineTo(-s*0.4,ty-s*0.06); ctx.closePath(); ctx.fillStyle=col.a; ctx.fill();
      ctx.save(); ctx.beginPath(); ctx.ellipse(0,ty-s*0.16,s*0.36,s*0.29,0,PI,TAU); ctx.lineTo(s*0.4,ty-s*0.06); ctx.lineTo(-s*0.4,ty-s*0.06); ctx.closePath(); ctx.clip();
      polka(-s*0.4,ty-s*0.45,s*0.4,ty,s*0.12,s*0.026,col.b,0);
      RR(-s*0.4,ty-s*0.17,s*0.8,s*0.065,0,col.r);
      ctx.restore();
      break;}
    case 'wide':{
      const inf=clamp(pl.inf.v,0,2.5);
      const ch=s*(0.13+0.27*Math.min(inf,1.4)); const cw=s*(0.26+0.15*Math.min(inf,1.3))*1.0;
      brimPath(s*0.53*k,s*(0.1+0.02*inf),bend,ty-s*0.05); ctx.fillStyle=col.a; ctx.fill();
      rrPath(-cw,ty-s*0.06-ch,cw*2,ch,s*0.06*(1+inf)); ctx.fillStyle=col.a; ctx.fill();
      ctx.save(); rrPath(-cw,ty-s*0.06-ch,cw*2,ch,s*0.06*(1+inf)); ctx.clip();
      polka(-cw,ty-s*0.06-ch,cw,ty,s*0.11,s*0.026*(0.6+0.4*Math.min(inf,1)),col.b,1.3);
      RR(-cw-2,ty-s*0.06-s*0.08,cw*2+4,s*0.07,0,col.r);
      ctx.restore();
      E(0,ty-s*0.06-ch,cw,s*0.04*(1+inf*0.3),0,col.b);
      break;}
    case 'beret':{
      ctx.save(); ctx.rotate(-0.08);
      E(0,ty-s*0.17,s*0.37,s*0.17,0,col.a);
      ctx.save(); ctx.beginPath(); ctx.ellipse(0,ty-s*0.17,s*0.37,s*0.17,0,0,TAU); ctx.clip();
      ctx.strokeStyle=col.b; ctx.lineWidth=s*0.025;
      for(let i=0;i<5;i++){ctx.beginPath(); ctx.arc(0,ty-s*0.17,s*(0.07+i*0.07)*(1+0.06*Math.sin(T*2+i)),PI*1.05,PI*1.95); ctx.stroke();}
      ctx.restore();
      RR(-s*0.26,ty-s*0.06,s*0.52,s*0.06,s*0.03,col.b);
      LN(0,ty-s*0.33,s*0.03,ty-s*0.39,s*0.04,col.a);
      ctx.restore();
      break;}
  }
  ctx.restore();
}

