'use strict';
/* ---------- S4 draw primitives ---------- */
function CC(x,y,r,c){ctx.fillStyle=c;ctx.beginPath();ctx.arc(x,y,Math.max(0.1,r),0,TAU);ctx.fill();}
function E(x,y,rx,ry,rot,c){ctx.fillStyle=c;ctx.beginPath();ctx.ellipse(x,y,Math.max(0.1,Math.abs(rx)),Math.max(0.1,Math.abs(ry)),rot||0,0,TAU);ctx.fill();}
function rrPath(x,y,w,h,r){r=Math.max(0,Math.min(r,Math.abs(w)/2,Math.abs(h)/2));ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.arcTo(x+w,y,x+w,y+r,r);ctx.lineTo(x+w,y+h-r);ctx.arcTo(x+w,y+h,x+w-r,y+h,r);ctx.lineTo(x+r,y+h);ctx.arcTo(x,y+h,x,y+h-r,r);ctx.lineTo(x,y+r);ctx.arcTo(x,y,x+r,y,r);ctx.closePath();}
function RR(x,y,w,h,r,c){ctx.fillStyle=c;rrPath(x,y,w,h,r);ctx.fill();}
function LN(x1,y1,x2,y2,w,c){ctx.strokeStyle=c;ctx.lineWidth=Math.max(0.5,w);ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();}
function QL(x1,y1,cx,cy,x2,y2,w,c){ctx.strokeStyle=c;ctx.lineWidth=Math.max(0.5,w);ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x1,y1);ctx.quadraticCurveTo(cx,cy,x2,y2);ctx.stroke();}
function ARC(x,y,r,a0,a1,w,c){ctx.strokeStyle=c;ctx.lineWidth=Math.max(0.5,w);ctx.lineCap='round';ctx.beginPath();ctx.arc(x,y,Math.max(0.1,r),a0,a1);ctx.stroke();}
function TRI(x1,y1,x2,y2,x3,y3,c){ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.lineTo(x3,y3);ctx.closePath();ctx.fill();}
function heart(x,y,r,c){ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(x,y+r*0.9);ctx.bezierCurveTo(x-r*1.3,y,x-r*0.7,y-r*1.0,x,y-r*0.35);ctx.bezierCurveTo(x+r*0.7,y-r*1.0,x+r*1.3,y,x,y+r*0.9);ctx.fill();}
function star4(x,y,r,rot,c){ctx.fillStyle=c;ctx.beginPath();for(let i=0;i<8;i++){const a=rot+i*PI/4;const rr=i%2?r*0.32:r;const px=x+Math.cos(a)*rr,py=y+Math.sin(a)*rr;i?ctx.lineTo(px,py):ctx.moveTo(px,py);}ctx.closePath();ctx.fill();}
function alpha(a){ctx.globalAlpha=clamp(a,0,1);}

const INK='#5b4a6e', WHITE='#ffffff', BLUSH='#ffb3c7';
/* eyes: look = {x,y} unit-ish vector; mood shapes */
function eye(x,y,r,lx,ly,bl,mood){
  if(mood==='happy'||mood==='giggle'||mood==='proud'&&bl>0.3){ARC(x,y+r*0.25,r*0.75,PI*1.12,PI*1.88,r*0.42,INK);return;}
  if(bl>0.55){LN(x-r*0.75,y,x+r*0.75,y,r*0.35,INK);return;}
  const sy=1-bl*0.9;
  E(x,y,r,r*sy,0,WHITE);
  const big=mood==='surprised'?0.42:(mood==='beg'?0.62:0.55);
  const px=x+clamp(lx,-1,1)*r*0.38, py=y+clamp(ly,-1,1)*r*0.32*sy;
  E(px,py,r*big,r*big*sy,0,INK);
  CC(px-r*0.18,py-r*0.2*sy,r*0.17,WHITE);
  if(mood==='beg') CC(px+r*0.2,py+r*0.15*sy,r*0.09,WHITE);
}
function lookVec(ax,ay,a){const t=a.look;const dx=t.x-ax,dy=t.y-ay;const d=Math.hypot(dx,dy)||1;const k=Math.min(1,d/80);return {x:dx/d*k,y:dy/d*k};}

