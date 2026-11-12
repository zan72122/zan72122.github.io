'use strict';
/* ---------- S3 canvas & layout ---------- */
const cv=document.getElementById('c');
const ctx=cv.getContext('2d',{alpha:false});
const saEl=document.getElementById('sa');
const L={W:0,H:0,dpr:1,sa:{t:0,r:0,b:0,l:0},port:true,x0:0,y0:0,w:390,h:844,hs:140,os:110,U:390};
function layout(){
  const de=document.documentElement;
  const W=Math.max(1,Math.round(window.innerWidth||de.clientWidth||390));
  const H=Math.max(1,Math.round(window.innerHeight||de.clientHeight||844));
  const dpr=Math.min(2,Math.max(1,window.devicePixelRatio||1));
  if(W!==L.W||H!==L.H||dpr!==L.dpr){cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);cv.style.width=W+'px';cv.style.height=H+'px';}
  L.W=W;L.H=H;L.dpr=dpr;
  let cs=null; try{cs=getComputedStyle(saEl);}catch(e){}
  const pf=v=>{const n=parseFloat(v);return isFinite(n)?n:0;};
  L.sa={t:cs?pf(cs.paddingTop):0,r:cs?pf(cs.paddingRight):0,b:cs?pf(cs.paddingBottom):0,l:cs?pf(cs.paddingLeft):0};
  L.x0=L.sa.l; L.y0=L.sa.t; L.w=Math.max(100,W-L.sa.l-L.sa.r); L.h=Math.max(100,H-L.sa.t-L.sa.b);
  L.port=L.h>=L.w;
  L.hs=L.port?Math.min(L.w*0.38,L.h*0.17):Math.min(L.w*0.21,L.h*0.29);
  L.os=L.hs*(L.port?0.82:0.74);
  L.U=Math.min(L.w,L.h);
}
const P=(u,v)=>({x:L.x0+u*L.w,y:L.y0+v*L.h});
const SHOP_POS={port:[[0.27,0.37],[0.73,0.37],[0.27,0.61],[0.73,0.61],[0.27,0.85],[0.73,0.85]],
                land:[[0.19,0.52],[0.81,0.52],[0.5,0.52],[0.5,0.88],[0.19,0.88],[0.81,0.88]]};
/* outdoor spots (u,v) and size factor relative to L.hs */
const SHOW_POS={
  port:{giant:[0.5,0.68,1.25],gshow:[0.5,0.93,1.0],gstage:[0.5,0.7,1.05],fan:[0.5,0.40,0],garland:[0.5,0.115,0],
        w0:[0.15,0.76,0.74],w1:[0.85,0.76,0.74],w2:[0.15,0.935,0.74],w3:[0.85,0.935,0.74],w4:[0.86,0.6,0.62],
        watchL:[0.13,0.55,0],watchR:[0.87,0.55,0],rollA:[0.36,0.5,0],rollB:[0.64,0.5,0],
        p0:[0.5,0.535,0],p1:[0.5,0.675,0],p2:[0.5,0.815,0],dl:[0.39,0.675,0],dr:[0.61,0.675,0],back:[0.5,0.44,0]},
  land:{giant:[0.5,0.93,1.25],gshow:[0.5,0.955,1.0],gstage:[0.5,0.74,0.95],fan:[0.5,0.50,0],garland:[0.5,0.10,0],
        w0:[0.1,0.57,0.72],w1:[0.9,0.57,0.72],w2:[0.2,0.935,0.72],w3:[0.8,0.935,0.72],w4:[0.9,0.78,0.62],
        watchL:[0.25,0.74,0],watchR:[0.75,0.74,0],rollA:[0.39,0.7,0],rollB:[0.61,0.7,0],
        p0:[0.36,0.7,0],p1:[0.5,0.67,0],p2:[0.64,0.7,0],dl:[0.44,0.69,0],dr:[0.56,0.69,0],back:[0.5,0.53,0]},
};
function shopPosOf(i){const a=SHOP_POS[L.port?'port':'land'][i];return P(a[0],a[1]);}
function showPos(key){const a=SHOW_POS[L.port?'port':'land'][key];return {x:L.x0+a[0]*L.w,y:L.y0+a[1]*L.h,f:a[2]};}
function fanGeom(){const p=showPos('fan');const r=L.port?L.w*0.4:Math.min(L.w*0.2,L.h*0.36);return {x:p.x,y:p.y,r:r};}
function garlandGeom(){const p=showPos('garland');return {x:p.x,y:p.y,s:L.hs*0.9,x1:L.x0+L.w*0.04,x2:L.x0+L.w*0.96};}
/* where each shop row's shelf sits (for drawing) */
function shelfRows(){const arr=SHOP_POS[L.port?'port':'land'];const ys=[];arr.forEach(a=>{if(ys.indexOf(a[1])<0)ys.push(a[1]);});return ys.map(v=>L.y0+v*L.h);}
function winGeom(){return {x:L.x0+L.w*0.5,y:L.y0+L.h*(L.port?0.185:0.2),r:L.hs*(L.port?0.34:0.28)};}

