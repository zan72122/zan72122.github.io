var Zu=Object.defineProperty;var ju=(s,t,e)=>t in s?Zu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Qi=(s,t,e)=>ju(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const $u="modulepreload",Ju=function(s,t){return new URL(s,t).href},ic={},Ku=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){let l=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");i=l(e.map(h=>{if(h=Ju(h,n),h in ic)return;ic[h]=!0;const u=h.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(n)for(let x=o.length-1;x>=0;x--){const m=o[x];if(m.href===h&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":$u,u||(d.as="script"),d.crossOrigin="",d.href=h,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((x,m)=>{d.addEventListener("load",x),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},ze=(s,t,e)=>s<t?t:s>e?e:s,Ie=(s,t,e)=>s+(t-s)*e,ce=(s,t,e,n)=>Ie(s,t,1-Math.exp(-e*n)),Ma=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2,Qu=s=>1-Math.pow(1-s,3),tf=(s,t,e,n,i,r)=>Math.hypot(n-s,i-t,r-e);function ef(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function wr(s,t,e,n){return n*(.075*Math.sin(1.25*s+.35*t-1.55*e)+.045*Math.sin(2.3*s-.6*t+2.1*e+1.3)+.022*Math.sin(4.1*s+1.1*t-3.2*e+.4))}function nf(s,t,e,n=4.5,i=11){const r=t.x-s.x,o=t.z-s.z,a=Math.max(.05,Math.hypot(r,o)),c=t.y-s.y,l=e*(c+Math.hypot(c,a)),h=ze(Math.sqrt(Math.max(l,0))*1.22,n,i),u=h*h,f=u*u-e*(e*a*a+2*c*u);let d;f>=0?d=Math.atan2(u-Math.sqrt(f),e*a):d=Math.PI/4;const x=Math.atan2(o,r);return{speed:h,elev:d,azim:x,time:a/(h*Math.cos(d))}}class he{constructor(t=0,{speed:e=1,accel:n=2}={}){this.value=t,this.target=t,this.vel=0,this.speed=e,this.accel=n}to(t,e){return this.target=t,e&&(e.speed!=null&&(this.speed=e.speed),e.accel!=null&&(this.accel=e.accel)),this}set(t){return this.value=t,this.target=t,this.vel=0,this}get done(){return this.value===this.target&&this.vel===0}update(t){const e=this.target-this.value;if(e===0&&this.vel===0)return;const n=this.accel,i=Math.sqrt(2*n*Math.abs(e))*Math.sign(e),r=ze(i,-this.speed,this.speed);this.vel+=ze(r-this.vel,-n*t,n*t);const o=this.vel*t;Math.sign(o)===Math.sign(e)&&Math.abs(o)>=Math.abs(e)?(this.value=this.target,this.vel=0):this.value+=o}}const sf={gas:1.5,pump:1.7,lever:1.3,attic:1.1,roof:1.4};class rf{constructor(){this.shutter=new he(0,{speed:.45,accel:.9}),this.backDoor=new he(0,{speed:.9,accel:1.8}),this.booth1=new he(0,{speed:1.1,accel:1.2}),this.booth2Rail=new he(0,{speed:2.4,accel:1.4}),this.booth2Hoist=new he(0,{speed:1.5,accel:1.6}),this.booth3Hatch=new he(0,{speed:1.8,accel:3.5}),this.booth3=new he(0,{speed:1,accel:1.2}),this.curtains=[0,1,2].map(()=>new he(0,{speed:2.2,accel:7})),this.boothShake=0,this.hooks=["fire","fish","space"],this.gasValve=new he(0,{speed:1.4,accel:3}),this.siren=new he(0,{speed:3,accel:8}),this.fireHatch=new he(0,{speed:1.5,accel:3}),this.houseLift=new he(0,{speed:1.1,accel:1.1}),this.cabinetDoor=new he(0,{speed:3,accel:10}),this.hosePressure=new he(0,{speed:.9,accel:3}),this.fans=new he(0,{speed:.6,accel:.8}),this.puddle=new he(0,{speed:.25,accel:.5}),this.pump=new he(0,{speed:.8,accel:.8}),this.spout=new he(0,{speed:1.2,accel:2}),this.water=new he(0,{speed:.26,accel:.18}),this.waves=new he(0,{speed:.35,accel:.4}),this.aquariumLid=new he(0,{speed:2,accel:5}),this.vortex=new he(0,{speed:.9,accel:1.2}),this.tank=new he(.95,{speed:.3,accel:.3}),this.plugOut=!1,this.lever=new he(0,{speed:2.2,accel:5}),this.iris=new he(0,{speed:.42,accel:.35}),this.gravity=new he(1,{speed:.6,accel:.8}),this.winch=new he(0,{speed:1.6,accel:2}),this.ring=new he(0,{speed:.55,accel:.6}),this.crane=new he(0,{speed:.45,accel:.4}),this.garmentDrop=new he(0,{speed:.4,accel:.4}),this.curtain=new he(0,{speed:1.4,accel:2.5}),this.zip=0,this.garmentOn=!1,this.wear=new he(0,{speed:.9,accel:1.5}),this.signals=[]}axes(){const t=[];for(const e of Object.values(this))e instanceof he&&t.push(e);for(const e of this.curtains)t.push(e);return t}signal(t){this.signals.push({path:t,t:0,age:0,dur:sf[t]??1.2})}signalDone(t){return!this.signals.some(e=>e.path===t&&e.t<1)}update(t){for(const e of this.axes())e.update(t);for(const e of this.signals)e.age+=t,e.t=Math.min(1,e.age/e.dur);this.signals=this.signals.filter(e=>e.age<e.dur+.6),this.boothShake=Math.max(0,this.boothShake-t*.5)}resetFor(t){const e=this,i=["intro","fire","fish","space","finale"].indexOf(t);for(const r of e.axes())r.set(0);e.signals=[],e.boothShake=0,e.gravity.set(1),e.tank.set(.95),e.plugOut=!1,e.zip=0,e.garmentOn=!1,e.shutter.set(i>=1?1:0),e.hooks=["fire","fish","space"],i>=2&&(e.booth1.set(1),e.hooks[0]="dress"),i===2&&(e.booth2Rail.set(1),e.booth2Hoist.set(1)),i>=3&&(e.hooks[1]="fire",e.booth3.set(1),e.booth3Hatch.set(1)),i>=4&&(e.hooks[2]="fish")}}class of{constructor(){this.reset()}reset(){this.x=0,this.y=0,this.z=0,this.vx=0,this.vy=0,this.facing=1,this.outfit="dress",this.holding=null,this.visible=!0,this.mode="ground",this.action="idle",this.actionTime=0,this.target=null,this.speed=1.8,this.walkDist=0,this.look=null,this.aimX=0,this.aimY=0,this.lean=0,this.helmetOpen=1}place(t,e,n=0){this.x=t,this.z=e,this.y=n,this.vx=0,this.vy=0,this.target=null}walkTo(t,e=this.z,n=1.8){this.target={x:t,z:e},this.speed=n}get arrived(){return this.target===null}setAction(t){this.action!==t&&(this.action=t,this.actionTime=0)}update(t){if(this.actionTime+=t,this.mode==="float"||!this.target)return;const e=this.target.x-this.x,n=this.target.z-this.z,i=Math.hypot(e,n),r=this.speed*t;i<=r?(this.x=this.target.x,this.z=this.target.z,this.target=null,this.action==="walk"&&this.setAction("idle")):(this.x+=e/i*r,this.z+=n/i*r,this.walkDist+=r,Math.abs(e)>.04&&(this.facing=Math.sign(e)),this.setAction("walk"))}}function af(s){let t=null,e=0,n=!1;function i(){const r=s.next();if(r.done){n=!0;return}t=r.value,e=typeof t=="number"?t:0}return i(),{get done(){return n},update(r){let o=64;for(;!n&&o-- >0;){if(typeof t=="number"){if(e-=r,r=0,e>1e-9)return}else if(typeof t=="function"&&!t())return;i()}}}}const ft={x0:-6,x1:6,wall:.3,ceil:6,attic:7.5,roof:8.7,back:-3.5,front:2.5,basement:-3.3,slab:.3,sidewalk:{z0:2.5,z1:4.6}},Tt={x:-4.3,z:-.8,w:1.6,d:1.3,h:2.4},ge={x:Tt.x+1.15,y:1.55,z:Tt.z+.45},je={x:-2.45,z:.95},lf={travel:4.4},vi={parkX:4.85,hangY:3.2,railY:5.8,z:Tt.z},cf={downY:-2.96},Ht={cabinet:{x:-2.2,y:1.3,z:-3.25},spray:{x:-.95,z:1.3},house:{x:1.6,w:2.3,wallH:1.9,roofH:.95,zFront:.45,depth:1.7},fireZ:.62,planeZ:.62,fires:[{x:.95,y:.62,r:.5},{x:2.2,y:1.12,r:.5},{x:1.6,y:2.3,r:.5}],hatch:{x:1.6,w:2.6,z:-.4,d:2},valve:{x:-1,y:-1.3,z:-1.05},siren:{x:.2,y:4.5,z:-3.3},downY:-2.95},gt={boat:{x:-1.55,z:.35,len:2.2,trolleyY:.32,draft:.2},level:1.45,sea:{x0:-2.6,x1:5.5,fishZ:1.15},drain:{x:3.55,z:.55},aquarium:{x:-1.55,y:3.05,w:1.9,h:1.05,z:-3.15},spout:{x:5.72,y:.9,z:-1.2},pump:{x:5.35,z:-2},tank:{x0:2.95,x1:4.75},planeZ:1.15},Ce={iris:{x:.8,r:2.4},lever:{x:-5.85,y:1.45,z:-1.4},winch:{x:-.05,y:.45,z:-2.1},items:[{kind:"scarf",x:1.3,y:1.45},{kind:"sock",x:2.55,y:1.05},{kind:"hat",x:4.35,y:1.95}],bounds:{x0:-5.4,x1:5.4,y0:.05,y1:4.75},holeTop:7,planeZ:0},hn={x0:Ce.iris.x-2.6,x1:Ce.iris.x+2.6},Me={ring:{cx:0,cz:-.65,a:7.75,b:4.4,n:6,y:10.6,low:9.25},pulley:{x:-8.9,y:11.2,z:3.3,r:.4},handle:{x:-9.3,top:2,bottom:.55,z:3.3},girl:{x:-9.85,z:3.2},zipper:{x:0,y0:.45,y1:6.2,z:2.95},crane:{x:0,baseY:8.7,z:-3,mast:4.6,jib:6},planeZ:3.2};class yr{constructor(t){this.game=t,this.phase="init",this.phaseTime=0,this.script=null,this.finished=!1}get id(){return this.constructor.id}setPhase(t){this.phase=t,this.phaseTime=0,this.game.emit("phase",{chapter:this.id,phase:t})}run(t){this.script=af(t.call(this))}update(t){this.phaseTime+=t,this.tick(t),this.script&&(this.script.update(t),this.script.done&&(this.finished=!0))}enter(){}tick(){}onDown(){}onMove(){}onUp(){}get planeZ(){return 0}get hint(){return null}}function yl(s){return Math.hypot(s.x-ge.x,s.y-ge.y)<1.5||Math.hypot(s.x-Tt.x,s.y-1.2)<1.3}function*_l(s,t,e){const{girl:n,store:i}=s,r=i.curtains[t];n.walkTo(ge.x-.15,ge.z+.55),yield()=>n.arrived,n.facing=-1,n.setAction("take"),yield .35,i.hooks[t]=null,n.holding="outfit:"+e,s.emit("take",{outfit:e}),yield .25,n.walkTo(Tt.x,Tt.z+1.05),yield()=>n.arrived,n.walkTo(Tt.x,Tt.z+.05,1.3),yield()=>n.arrived,n.visible=!1,r.to(1),s.emit("curtain",{booth:t,close:!0}),yield()=>r.done;const o=n.outfit;for(let a=0;a<4;a++)i.boothShake=1,s.emit("bump",{booth:t,i:a}),yield .34;n.outfit=e,n.holding=null,i.hooks[t]=o,s.emit("toss",{booth:t,outfit:o}),yield .35,r.to(0),s.emit("curtain",{booth:t,close:!1}),n.visible=!0,n.facing=1,n.walkTo(Tt.x+.1,Tt.z+1.1,1.6),yield()=>n.arrived,n.setAction("pose"),s.emit("tada",{outfit:e}),yield .95,n.setAction("idle")}class zh extends yr{enter(){const{store:t,girl:e}=this.game;t.resetFor("intro"),e.reset(),e.place(-2.2,3.1),e.facing=1,this.started=!1,this.run(this.main)}*main(){const{store:t,girl:e}=this.game;this.setPhase("title"),yield()=>this.started,this.setPhase("open"),this.game.emit("shutter"),t.shutter.to(1),e.look={x:0,y:4,z:2.5},yield()=>t.shutter.value>.55,e.look=null,e.walkTo(-1.2,1.6,1.6),yield()=>e.arrived,e.walkTo(je.x,je.z,1.6),yield()=>e.arrived&&t.shutter.done,e.facing=-1,yield .2}onDown(){this.phase==="title"&&this.phaseTime>.3&&(this.started=!0,this.game.emit("start"))}get planeZ(){return 2.5}get hint(){return this.phase==="title"?{x:0,y:2.6,z:2.6,gesture:"tap",delay:3}:null}}Qi(zh,"id","intro");const ba=9.8,hf=120,uf=.0085,ff=.1,df=1.4,pf=.1,mf=.3;class Lh extends yr{enter(){const{store:t,girl:e}=this.game;t.resetFor("fire"),e.reset(),e.place(je.x,je.z),e.facing=-1,this.fires=Ht.fires.map(n=>({x:n.x,y:n.y,z:Ht.fireZ,r:n.r,intensity:0,lit:!1,out:!1,igniting:!1,sinceHit:99,steam:0})),this.drops=[],this.nozzle={x:0,y:0,z:0,pressure:0,speed:0,elev:0,azim:0},this.aim={x:Ht.house.x,y:1,z:Ht.planeZ},this.aimV={x:0,y:0},this.valve=0,this.emitAcc=0,this.splashAcc=0,this.chosen=!1,this.run(this.main)}*main(){const t=this.game,{store:e,girl:n}=t;this.setPhase("choose"),yield()=>this.chosen,this.setPhase("changing"),yield*_l(t,0,"fire"),this.setPhase("trigger"),n.walkTo(je.x+.2,je.z+.2),e.signal("gas"),t.emit("signal",{path:"gas"}),yield()=>e.signalDone("gas"),e.gasValve.to(1),t.emit("valve"),yield .55,e.siren.to(1),t.emit("alarm"),e.fireHatch.to(1),t.emit("hatch",{which:"fire"}),yield()=>e.fireHatch.value>.92,e.houseLift.to(1),t.emit("lift",{which:"house"}),yield()=>e.houseLift.done,t.emit("clunk",{x:Ht.house.x,y:0});for(let i=0;i<this.fires.length;i++)yield .4,this.ignite(i);yield .9,this.setPhase("hose"),e.cabinetDoor.to(1),t.emit("cabinet",{open:!0}),yield .25,n.walkTo(Ht.cabinet.x+.15,Ht.cabinet.z+1,2.2),yield()=>n.arrived,n.facing=-1,n.setAction("take"),yield .3,n.holding="nozzle",t.emit("grab",{what:"nozzle"}),n.walkTo(Ht.spray.x,Ht.spray.z,1.9),yield()=>n.arrived,n.facing=1,e.hosePressure.to(1),t.emit("charge"),yield()=>e.hosePressure.done,this.setPhase("spray"),yield()=>this.fires.every(i=>i.out),this.setPhase("cleanup"),t.emit("allout"),e.siren.to(0),e.gasValve.to(0),e.fans.to(1),yield .3,n.setAction("cheer"),yield 1.2,e.houseLift.to(0),e.hosePressure.to(0),t.emit("lift",{which:"house"}),n.setAction("idle"),n.walkTo(Ht.cabinet.x+.15,Ht.cabinet.z+1,2.2),yield()=>n.arrived,n.holding=null,t.emit("stow"),e.cabinetDoor.to(0),t.emit("cabinet",{open:!1}),n.walkTo(je.x,je.z,2),yield()=>e.houseLift.done,e.fireHatch.to(0),t.emit("hatch",{which:"fire"}),e.puddle.to(0),yield()=>e.fireHatch.done,this.setPhase("next"),e.backDoor.to(1),t.emit("door"),yield()=>e.backDoor.value>.9,e.booth1.to(1),t.emit("rollout"),yield()=>e.booth1.value>.55,e.booth2Rail.to(1),t.emit("trolley"),yield()=>e.booth1.done,e.backDoor.to(0),t.emit("door"),yield()=>e.booth2Rail.done,e.booth2Hoist.to(1),t.emit("hoist"),yield()=>e.booth2Hoist.done,t.emit("clunk",{x:-4.3,y:0}),e.fans.to(0),yield()=>n.arrived&&e.fans.done&&e.backDoor.done&&e.puddle.done&&this.drops.length===0,n.facing=-1}ignite(t){const e=this.fires[t];e.lit=!0,e.igniting=!0,e.sinceHit=99,this.game.emit("ignite",{i:t,x:e.x,y:e.y,z:e.z})}get planeZ(){return this.phase==="choose"?ge.z:Ht.planeZ}get hint(){if(this.phase==="choose")return{x:ge.x,y:ge.y,z:ge.z,gesture:"tap",delay:2.5};if(this.phase==="spray"){const t=this.fires.find(e=>e.lit&&!e.out);if(t)return{x:t.x,y:t.y,z:t.z,gesture:"hold",delay:2.5}}return null}onDown(t){const e=this.game.girl;this.phase==="choose"&&(yl(t)||Math.hypot(t.x-e.x,t.y-.6)<1)&&(this.chosen=!0)}isInsideFacade(t,e){const n=Ht.house,i=Math.abs(t-n.x);if(e<0)return!1;if(e<=n.wallH)return i<=n.w/2;const r=n.w/2+.15;return i<=r&&e<=n.wallH+n.roofH*(1-i/r)}tick(t){const e=this.game,{girl:n,store:i,ptr:r}=e,o=this.nozzle;this.phase==="spray"&&r.down?this.valve=mf:this.valve=Math.max(0,this.valve-t);const a=this.phase==="spray"&&this.valve>0;if(o.x=n.x+.36*n.facing,o.y=n.y+.78,o.z=n.z+.05,a){let l=r.x,h=Math.max(.05,r.y),u=null,f=.95;for(const x of this.fires){if(!x.lit||x.out)continue;const m=Math.hypot(x.x-l,x.y-h);m<f&&(f=m,u=x)}u&&(l+=(u.x-l)*.5,h+=(u.y-h)*.5),this.wasSpraying||(this.aim.x=l,this.aim.y=h);const d=11;this.aimV.x+=(d*d*(l-this.aim.x)-2*d*this.aimV.x)*t,this.aimV.y+=(d*d*(h-this.aim.y)-2*d*this.aimV.y)*t,this.aim.x+=this.aimV.x*t,this.aim.y+=this.aimV.y*t,l<n.x-.3?n.facing=-1:l>n.x+.3&&(n.facing=1),n.aimX=this.aim.x,n.aimY=this.aim.y,n.setAction("spray")}else this.aimV.x=0,this.aimV.y=0,n.action==="spray"&&n.setAction("idle"),!a&&this.phase!=="spray"&&(this.aim.x=Ht.house.x,this.aim.y=1);this.wasSpraying=a,o.pressure=ce(o.pressure,a?1:0,a?6:12,t);const c=nf(o,this.aim,ba);if(o.speed=c.speed*(.6+.4*o.pressure),o.elev=c.elev,o.azim=c.azim,n.lean=o.pressure*.6,o.pressure>.04&&n.holding==="nozzle")for(this.emitAcc+=hf*o.pressure*t;this.emitAcc>=1;)this.emitAcc-=1,this.spawnDrop(c);this.updateDrops(t),this.updateFires(t)}spawnDrop(t){const e=this.nozzle,n=this.game.rng,i=e.speed*(1+(n()-.5)*.06),r=t.elev+(n()-.5)*.04,o=t.azim+(n()-.5)*.04,a=Math.cos(r),c=i*a*Math.cos(o),l=i*Math.sin(r),h=i*a*Math.sin(o),u=n()*.016;this.drops.push({x:e.x+c*u,y:e.y+l*u,z:e.z+h*u,vx:c,vy:l,vz:h,age:0,dead:!1})}updateDrops(t){const e=this.game,{store:n}=e,i=n.houseLift.value>.97,r=Ht.house.zFront;for(const o of this.drops){o.vy-=ba*t;const a=o.z;o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.age+=t;for(let c=0;c<this.fires.length;c++){const l=this.fires[c];if(!(!l.lit||l.out)&&tf(o.x,o.y,o.z,l.x,l.y,l.z)<l.r){this.hitFire(c),o.dead=!0;break}}if(!o.dead){if(i&&a>r&&o.z<=r&&this.isInsideFacade(o.x,o.y)){this.splash(o,"wall");continue}if(o.y<=0){o.y=0,this.splash(o,"floor"),n.puddle.set(Math.min(1,n.puddle.value+.0022));continue}(o.z<ft.back+.1||o.x<ft.x0||o.x>ft.x1||o.age>3)&&(o.dead=!0)}}this.drops=this.drops.filter(o=>!o.dead)}splash(t,e){t.dead=!0,this.splashAcc+=1,this.splashAcc>=3&&(this.splashAcc=0,this.game.emit("splash",{x:t.x,y:t.y,z:t.z,kind:e,vx:t.vx,vy:t.vy}))}hitFire(t){const e=this.fires[t];e.intensity-=uf,e.sinceHit=0,e.igniting=!1,e.steam+=1,e.steam>=5&&(e.steam=0,this.game.emit("steam",{i:t,x:e.x,y:e.y+.25,z:e.z})),e.intensity<=ff&&(e.intensity=0,e.out=!0,this.game.emit("extinguish",{i:t,x:e.x,y:e.y,z:e.z}))}updateFires(t){for(const e of this.fires)!e.lit||e.out||(e.sinceHit+=t,e.igniting?(e.intensity=Math.min(1,e.intensity+1.8*t),e.intensity>=1&&(e.igniting=!1)):e.sinceHit>df&&(e.intensity=Math.min(1,e.intensity+pf*t)))}}Qi(Lh,"id","fire");const sc=1.75,Co=1.15,gf=.35,xf=1.25,Ke=Math.sign(gt.drain.x-gt.boat.x)||1;class Dh extends yr{enter(){const{store:t,girl:e}=this.game;t.resetFor("fish"),e.reset(),e.place(je.x,je.z),e.outfit="fire",e.facing=-1;const n=gt.aquarium;this.fish=[0,1].map(i=>({id:i,x:n.x-.45+i*.9,y:n.y-.1,z:n.z+.35,vx:0,vy:0,dir:i?-1:1,state:"tank",t:0,tx:0,ty:0,jump:null})),this.home=0,this.boat={x:gt.boat.x,y:gt.boat.trolleyY,tilt:0,afloat:!1},this.line={state:"stowed",hx:0,hy:0,bx:0,by:0,depth:0,targetDepth:.6,t:0,dur:0,from:null,to:null,pending:null,fish:-1,tension:0,floatTime:0,reeled:0,strike:!1,tug:0},this.rodAng=1,this.tip={x:0,y:0},this.buoy={x:gt.drain.x-Ke*.3,y:.1,caught:!1},this.plug={x:gt.drain.x,y:0,out:!1,t:0},this.plugPull=0,this.chosen=!1,this.run(this.main)}get seaMin(){return Ke>0?gt.boat.x+1.3:gt.sea.x0+.35}get seaMax(){return Ke>0?gt.sea.x1-.35:gt.boat.x-1.3}*main(){const t=this.game,{store:e,girl:n}=t;this.setPhase("choose"),yield()=>this.chosen,this.setPhase("changing"),yield*_l(t,1,"fish"),n.holding="rod",this.setPhase("trigger"),n.walkTo(gt.boat.x,gt.boat.z+.85,1.9),e.signal("pump"),t.emit("signal",{path:"pump"}),yield()=>e.signalDone("pump"),e.pump.to(1),t.emit("pump",{on:!0}),yield .9,e.spout.to(1),t.emit("spout",{on:!0}),e.water.to(gt.level),e.tank.to(.28),yield()=>n.arrived&&e.water.value>.1,n.facing=Ke,yield .2,this.hopIntoBoat(),yield()=>e.water.value>.6,e.aquariumLid.to(1),t.emit("lid",{open:!0}),yield .45;for(const i of this.fish)this.jumpOut(i),yield .55;e.waves.to(1),t.emit("waves"),yield()=>e.water.done,e.spout.to(0),e.pump.to(0),t.emit("spout",{on:!1}),t.emit("pump",{on:!1}),this.line.state="ready",this.setPhase("fishing"),yield()=>this.home>=this.fish.length&&this.line.state==="ready",e.aquariumLid.to(0),t.emit("lid",{open:!1}),yield .5,this.setPhase("plug"),yield()=>this.plug.out,yield .35,this.setPhase("drain"),e.vortex.to(1),t.emit("drain"),e.waves.to(0),e.water.to(0,{speed:.36,accel:.25}),e.tank.to(.95,{speed:.3}),yield()=>e.water.done,e.vortex.to(0),yield()=>this.boat.y<=gt.boat.trolleyY+.001,this.hopOutOfBoat(),yield .5,this.setPhase("next"),n.walkTo(je.x,je.z,2),e.booth2Hoist.to(0),t.emit("hoist"),yield()=>e.booth2Hoist.done,e.booth2Rail.to(0),t.emit("trolley"),e.booth3Hatch.to(1),t.emit("hatch",{which:"booth3"}),yield()=>e.booth3Hatch.done,e.booth3.to(1),t.emit("lift",{which:"booth3"}),yield()=>e.booth3.done&&e.booth2Rail.done&&n.arrived&&e.tank.done,t.emit("clunk",{x:-4.3,y:0}),n.facing=-1,yield .2}hopIntoBoat(){const{girl:t}=this.game;t.mode="boat",t.target=null,t.x=gt.boat.x-Ke*.25,t.z=gt.boat.z,t.facing=Ke,t.setAction("hop"),this.game.emit("hop",{into:!0})}hopOutOfBoat(){const{girl:t}=this.game;t.mode="ground",t.holding=null,t.place(gt.boat.x,gt.boat.z+.85),t.setAction("hop"),this.game.emit("hop",{into:!1})}jumpOut(t){const e=gt.aquarium,n=Ie(this.seaMin,this.seaMax,t.id===0?.25:.6);t.state="jump",t.t=0,t.jump={x0:t.x,y0:e.y+e.h/2+.1,z0:t.z,x1:n,y1:gt.level-.45},this.game.emit("fishjump",{i:t.id})}surface(t){const e=this.game.store;return e.water.value+wr(t,gt.sea.fishZ,this.game.time,e.waves.value)}get planeZ(){return this.phase==="choose"?ge.z:gt.planeZ}get hint(){const t=this.line;if(this.phase==="choose")return{x:ge.x,y:ge.y,z:ge.z,gesture:"tap",delay:2.5};if(this.phase==="fishing"){if(t.state==="ready"){const e=this.nearestFreeFish();if(e)return{x:e.x,y:e.y,z:gt.sea.fishZ,gesture:"tap",delay:2.5}}if(t.state==="hooked")return{x:t.hx,y:t.hy,z:gt.sea.fishZ,gesture:"hold",delay:1.2};if(t.state==="float"&&this.fish.some(e=>e.state==="approach"||e.state==="nibble"))return{x:t.hx,y:t.hy,z:gt.sea.fishZ,gesture:"hold",delay:1.5}}if(this.phase==="plug"){if(t.state==="snag")return{x:this.buoy.x,y:this.buoy.y,z:gt.sea.fishZ,gesture:"hold",delay:1.2};if(t.state==="ready"||t.state==="float")return{x:this.buoy.x,y:this.buoy.y,z:gt.sea.fishZ,gesture:"tap",delay:2.5}}return null}nearestFreeFish(t=this.tip.x,e=this.tip.y){let n=null,i=1/0;for(const r of this.fish){if(r.state!=="swim"&&r.state!=="approach")continue;const o=Math.hypot(r.x-t,r.y-e);o<i&&(i=o,n=r)}return n}onDown(t){const e=this.game.girl;if(this.phase==="choose"){(yl(t)||Math.hypot(t.x-e.x,t.y-.6)<1)&&(this.chosen=!0);return}if(this.phase!=="fishing"&&this.phase!=="plug")return;const n=this.line;n.state==="hooked"||n.state==="snag"?n.tug=gf:n.state==="ready"?this.cast(t.x,t.y):n.state==="float"&&(this.fish.some(i=>i.state==="approach"||i.state==="nibble")?n.strike=!0:(this.phase==="plug"||n.floatTime>.6)&&this.cast(t.x,t.y))}cast(t,e){const n=this.line;let i=ze(t,this.seaMin,this.seaMax);const r=this.game.store.water.value;let o=ze(r-e,.35,r-.25);if(e>r&&(o=.6),this.phase==="fishing")for(const a of this.fish)(a.state==="swim"||a.state==="approach")&&Math.hypot(a.x-t,a.y-e)<.9&&(i=ze(a.x,this.seaMin,this.seaMax),o=ze(r-a.y,.35,r-.25));else this.phase==="plug"&&Math.abs(t-this.buoy.x)<2.4&&(i=this.buoy.x);n.pending={x:i,depth:o},n.t=0,n.strike=!1,n.state==="float"?(n.state="recall",n.from={x:n.hx,y:n.hy},this.game.emit("reeling")):this.startWindup()}startWindup(){const t=this.line;t.state="windup",t.t=0,t.to={x:t.pending.x},t.targetDepth=t.pending.depth,this.game.girl.setAction("cast"),this.game.emit("cast")}tick(t){const e=this.game,{store:n,girl:i}=e,r=e.time,o=gt.boat,a=n.waves.value,l=n.water.value+wr(o.x,o.z,r,a)-o.draft;this.boat.afloat=l>o.trolleyY,this.boat.y=Math.max(o.trolleyY,l);const h=(wr(o.x+.6,o.z,r,a)-wr(o.x-.6,o.z,r,a))/1.2,f=this.line.state==="snag"||this.line.state==="hooked"?Ke*.05*this.line.tension:0;this.boat.tilt=ce(this.boat.tilt,this.boat.afloat?Math.atan(h)-f:0,8,t),i.mode==="boat"&&(i.x=o.x-Ke*.25,i.y=this.boat.y+.14),this.updateRod(t);for(const d of this.fish)this.updateFish(d,t);this.updateLine(t),this.updateBuoy(t)}updateRod(t){const{girl:e}=this.game,n=this.line;let i=1.05;switch(n.state){case"windup":i=2;break;case"flying":i=.5;break;case"float":i=.62;break;case"hooked":case"snag":i=.85+.35*n.tension;break;case"lift":i=1.45;break;case"deliver":i=1.95;break;case"retrieve":i=1.4;break}this.rodAng=ce(this.rodAng,i,n.state==="flying"?22:9,t);const r=e.x+Ke*.18,o=e.y+.78;this.tip.x=r+Ke*Math.cos(this.rodAng)*sc,this.tip.y=o+Math.sin(this.rodAng)*sc}updateLine(t){const e=this.game,n=this.line,{girl:i,ptr:r}=e,o=r.down||n.tug>0;switch(n.tug=Math.max(0,n.tug-t),n.state){case"stowed":case"ready":n.hx=this.tip.x,n.hy=this.tip.y-.4,n.tension=ce(n.tension,0,6,t);break;case"recall":{n.t+=t/.28;const a=Math.min(1,n.t);n.hx=Ie(n.from.x,this.tip.x,a),n.hy=Ie(n.from.y,this.tip.y-.4,a)+Math.sin(a*Math.PI)*.4,n.t>=1&&this.startWindup();break}case"windup":if(n.t+=t,n.hx=this.tip.x,n.hy=this.tip.y-.4,n.t>.32){n.state="flying",n.t=0;const a=this.tip.x,c=this.tip.y,l=n.to.x,h=this.surface(l);n.from={x:a,y:c},n.to={x:l,y:h},n.dur=.45+Math.abs(l-a)*.1,e.emit("whoosh")}break;case"flying":{n.t+=t/n.dur;const a=Math.min(1,n.t),c=this.surface(n.to.x),l=Math.max(n.from.y,c)+.9;n.hx=Ie(n.from.x,n.to.x,a);const h=2*l-.5*(n.from.y+c);n.hy=(1-a)*(1-a)*n.from.y+2*(1-a)*a*h+a*a*c,n.t>=1&&(n.bx=n.to.x,n.by=c,n.depth=.05,n.floatTime=0,e.emit("splash",{x:n.bx,y:c,z:gt.sea.fishZ,kind:"hook"}),this.phase==="plug"&&Math.abs(n.bx-this.buoy.x)<.5?(n.state="snag",this.buoy.caught=!0,e.emit("snag")):n.state="float");break}case"float":{n.floatTime+=t,n.by=this.surface(n.bx),n.depth=Math.min(n.targetDepth,n.depth+.8*t),n.hx=n.bx,n.hy=n.by-n.depth,n.tension=ce(n.tension,.1,4,t);break}case"hooked":{const a=this.fish[n.fish],c=this.tip.x+Ke*.3,l={x:c,y:this.surface(c)-.1};let h=l.x-a.x,u=l.y-a.y;const f=Math.hypot(h,u)||1;h/=f,u/=f;const d=Math.sin(e.time*7.3+a.id*2)*.5;o?(n.reeled+=Co*t,a.x+=(h*Co-u*d*.5)*t,a.y+=(u*Co+h*d*.5)*t,n.tension=ce(n.tension,.8+.2*Math.abs(Math.sin(e.time*9)),10,t),i.setAction("reel"),e.emit("reeling")):(a.x-=h*.22*t,a.y-=u*.22*t,n.tension=ce(n.tension,.35,6,t),i.setAction("fishing")),a.x=Ke>0?ze(a.x,l.x,this.seaMax+.2):ze(a.x,this.seaMin-.2,l.x),a.y=ze(a.y,.22,this.surface(a.x)-.05),a.dir=h>0?1:-1,n.hx=a.x+a.dir*.2,n.hy=a.y,n.bx=n.hx,n.by=Math.min(this.surface(n.hx),n.hy+.3),Math.hypot(l.x-a.x,l.y-a.y)<.32&&(n.state="lift",n.t=0,n.from={x:a.x,y:a.y},a.state="air",i.setAction("lift"),e.emit("splash",{x:a.x,y:this.surface(a.x),z:gt.sea.fishZ,kind:"fish"}),e.emit("catch",{i:a.id}));break}case"lift":{const a=this.fish[n.fish];n.t+=t/.6;const c=Qu(Math.min(1,n.t)),l={x:i.x+Ke*.2,y:i.y+2.75};a.x=Ie(n.from.x,l.x,c),a.y=Ie(n.from.y,l.y,c)+Math.sin(c*Math.PI)*.3,n.hx=a.x,n.hy=a.y+.2,n.tension=ce(n.tension,.6,6,t),n.t>=1&&(n.state="deliver",n.t=0,n.from={x:a.x,y:a.y},i.setAction("swing"));break}case"deliver":{const a=this.fish[n.fish],c=gt.aquarium;n.t+=t/.8;const l=Ma(Math.min(1,n.t)),h=c.x-.35+a.id*.7,u=c.y+.05;a.x=Ie(n.from.x,h,l),a.y=Ie(n.from.y,u,l)+Math.sin(l*Math.PI)*.7,a.z=Ie(gt.sea.fishZ,c.z+.35,l),n.hx=a.x,n.hy=a.y+.2,n.t>=1&&(a.state="home",a.t=0,this.home+=1,n.fish=-1,n.state="ready",i.setAction("cheer"),e.emit("plop",{i:a.id,x:h,y:u}));break}case"snag":{const a=this.buoy;n.hx=a.x,n.hy=a.y,n.bx=a.x,n.by=a.y,o?(this.plugPull+=t/xf,n.tension=ce(n.tension,.95+.05*Math.sin(e.time*23),12,t),i.setAction("reel"),i.lean=1,e.emit("strain")):(n.tension=ce(n.tension,.5,6,t),i.setAction("fishing"),i.lean=.3),this.plugPull>=1&&(this.plug.out=!0,this.plug.t=0,this.game.store.plugOut=!0,n.state="retrieve",n.t=0,n.from={x:a.x,y:a.y},i.lean=0,e.emit("pop",{x:gt.drain.x}));break}case"retrieve":{n.t+=t/.9;const a=Ma(Math.min(1,n.t)),c={x:gt.boat.x+Ke*.4,y:this.boat.y+.5};this.buoy.x=Ie(n.from.x,c.x,a),this.buoy.y=Ie(n.from.y,c.y,a)+Math.sin(a*Math.PI)*1.1,this.plug.x=Ie(gt.drain.x,c.x+Ke*.1,a),this.plug.y=Ie(0,c.y-.2,a)+Math.sin(a*Math.PI)*1,n.hx=this.buoy.x,n.hy=this.buoy.y,n.tension=ce(n.tension,.2,4,t),n.t>=1&&(n.state="stowed",i.setAction("cheer"));break}}}updateFish(t,e){const n=this.game,i=gt.sea,r=gt.aquarium,o=this.line,a=n.rng;t.t+=e;const c=n.store.water.value;switch(t.state){case"tank":case"home":{const l=r.x-.35+t.id*.7;t.x=l+Math.sin(n.time*.9+t.id*2.1)*.35,t.y=r.y-.15+Math.sin(n.time*1.3+t.id)*.12,t.z=r.z+.35,t.dir=Math.cos(n.time*.9+t.id*2.1)>=0?1:-1;break}case"jump":{const l=t.jump,h=Math.min(1,t.t/.95);t.x=Ie(l.x0,l.x1,h),t.y=Ie(l.y0,l.y1,h)+Math.sin(h*Math.PI)*1.1,t.z=Ie(l.z0,i.fishZ,h),t.dir=l.x1>l.x0?1:-1,h>=1&&(t.state="swim",t.t=0,t.tx=t.x,t.ty=t.y,n.emit("splash",{x:t.x,y:c,z:i.fishZ,kind:"fish"}));break}case"swim":case"approach":{const l=this.seaMin,h=this.seaMax;t.state==="swim"&&((Math.hypot(t.tx-t.x,t.ty-t.y)<.2||t.t>3.2)&&(t.t=0,t.tx=Ie(l,h,a()),t.ty=Ie(.3,Math.max(.35,c-.35),a())),o.state==="float"&&o.depth>.25&&o.floatTime>.35&&!this.fish.some(p=>p.state==="approach"||p.state==="nibble")&&this.nearestFreeFish(o.hx,o.hy)===t&&(t.state="approach",t.t=0));let u=t.tx,f=t.ty,d=.55;if(t.state==="approach"){if(o.state!=="float"){t.state="swim",t.t=0;break}u=o.hx+(t.x<o.hx?-.22:.22),f=o.hy,d=ze(.9+.5*Math.hypot(u-t.x,f-t.y),.95,2.4),Math.hypot(u-t.x,f-t.y)<.12&&(t.state="nibble",t.t=0,n.emit("nibble",{i:t.id}))}const x=u-t.x,m=f-t.y,g=Math.hypot(x,m)||1;t.vx=ce(t.vx,x/g*d,3,e),t.vy=ce(t.vy,m/g*d*.7,3,e),t.x+=t.vx*e,t.y+=t.vy*e,t.x=ze(t.x,l-.2,h+.2),t.y=ze(t.y,.22,Math.max(.3,c-.2)),Math.abs(t.vx)>.05&&(t.dir=Math.sign(t.vx));break}case"nibble":{if(t.x=o.hx+(t.dir>0?-.22:.22)+Math.sin(t.t*30)*.03,t.y=o.hy,o.state!=="float"){t.state="swim",t.t=0;break}t.t>(o.strike?.12:.55)&&(t.state="hooked",o.state="hooked",o.strike=!1,o.fish=t.id,o.tension=.5,o.reeled=0,n.emit("bite",{i:t.id}));break}}}updateBuoy(t){const e=this.buoy;if(this.line.state==="snag"||this.line.state==="retrieve"||this.plug.out)return;const n=this.game.store.water.value,i=gt.drain.x-Ke*.3+Math.sin(this.game.time*.5)*.12;e.x=ce(e.x,i,2,t);const r=this.surface(e.x)-.05;e.y=n>.12?Math.max(.1,r):.1}}Qi(Dh,"id","fish");const rc=3.4,vf=.35,Po=2.6,yf=.85;class Uh extends yr{enter(){const{store:t,girl:e}=this.game;t.resetFor("space"),e.reset(),e.place(je.x,je.z),e.outfit="fish",e.facing=-1,this.items=Ce.items.map((n,i)=>({i,kind:n.kind,homeX:n.x,homeY:n.y,x:n.x,y:n.y,vx:0,vy:0,rot:0,spin:0,state:"rack",t:0,slot:-1})),this.tethered=!1,this.tetherLen=9,this.thrust={x:0,y:0,k:0},this.puff=0,this.puffX=0,this.puffY=0,this.collected=0,this.chosen=!1,this.run(this.main)}*main(){const t=this.game,{store:e,girl:n}=t;this.setPhase("choose"),yield()=>this.chosen,this.setPhase("changing"),yield*_l(t,2,"space"),this.setPhase("trigger"),n.helmetOpen=0,t.emit("helmet"),n.walkTo(Ce.winch.x+.55,Ce.winch.z+.9,1.9),yield()=>n.arrived,n.facing=-1,n.setAction("take"),yield .3,this.tethered=!0,t.emit("clip"),n.walkTo(Ce.iris.x-.4,.6,1.7),e.signal("lever"),t.emit("signal",{path:"lever"}),yield()=>e.signalDone("lever"),e.lever.to(1),t.emit("lever",{down:!0}),yield()=>e.lever.done,t.emit("clunk",{x:Ce.lever.x,y:Ce.lever.y}),e.signal("attic"),t.emit("signal",{path:"attic"}),yield()=>e.signalDone("attic"),e.iris.to(1),t.emit("iris",{open:!0}),yield()=>e.iris.value>.3&&n.arrived,n.facing=1,e.gravity.to(0),t.emit("zerog"),yield()=>e.gravity.value<.55,n.mode="float",n.vy=.55,n.setAction("float");for(const i of this.items)i.state="float",i.vx=(t.rng()-.5)*.3,i.vy=.12+t.rng()*.12,i.spin=(t.rng()-.5)*1.4;yield()=>e.iris.done&&e.gravity.done,this.setPhase("float"),yield()=>this.collected>=this.items.length,yield .4,this.setPhase("return"),t.emit("winch",{on:!0}),this.tetherLen=Math.hypot(n.x-Ce.winch.x,n.y+.55-Ce.winch.y),yield()=>this.tetherLen<=1.15,t.emit("winch",{on:!1}),e.gravity.to(1,{speed:.9}),e.iris.to(0),t.emit("iris",{open:!1}),yield()=>n.mode==="ground",t.emit("land"),e.lever.to(0),t.emit("lever",{down:!1}),n.helmetOpen=1;for(const i of this.items)i.state="return",i.t=0,i.fromX=i.x,i.fromY=i.y;t.emit("hang"),n.setAction("cheer"),yield 1.1,this.tethered=!1,t.emit("unclip"),n.setAction("idle"),n.walkTo(je.x,je.z,1.9),yield()=>e.iris.done&&e.gravity.done&&e.lever.done&&n.arrived,yield()=>this.items.every(i=>i.state==="rack"),n.facing=1,this.setPhase("next"),yield .3}get planeZ(){return this.phase==="choose"?ge.z:Ce.planeZ}get hint(){if(this.phase==="choose")return{x:ge.x,y:ge.y,z:ge.z,gesture:"tap",delay:2.5};if(this.phase==="float"){const t=this.nearestItem();if(t)return{x:t.x,y:t.y,z:0,gesture:"hold",delay:2.5}}return null}nearestItem(){const{girl:t}=this.game;let e=null,n=1/0;for(const i of this.items){if(i.state!=="float")continue;const r=Math.hypot(i.x-t.x,i.y-(t.y+.55));r<n&&(n=r,e=i)}return e}onDown(t){const e=this.game.girl;this.phase==="choose"&&(yl(t)||Math.hypot(t.x-e.x,t.y-.6)<1)&&(this.chosen=!0)}tick(t){const e=this.game,{girl:n,store:i,ptr:r}=e,o=9.8*i.gravity.value;if(n.mode==="float"){const a=n.y+.55;let c=0,l=-o;if(this.thrust.k=ce(this.thrust.k,0,8,t),r.down?(this.puff=vf,this.puffX=r.x,this.puffY=r.y):this.puff=Math.max(0,this.puff-t),this.phase==="float"&&this.puff>0){const f=this.puffX-n.x,d=this.puffY-a,x=Math.hypot(f,d);if(x>.15){const m=rc*Math.min(1,x/1.1);c+=f/x*m,l+=d/x*m,this.thrust.x=f/x,this.thrust.y=d/x,this.thrust.k=m/rc,Math.abs(f)>.2&&(n.facing=Math.sign(f))}}n.vx+=c*t,n.vy+=l*t;const h=Math.exp(-1.15*t);n.vx*=h,n.vy*=h;const u=Math.hypot(n.vx,n.vy);u>Po&&(n.vx*=Po/u,n.vy*=Po/u),n.x+=n.vx*t,n.y+=n.vy*t,this.collide(n),this.applyTether(n,t),this.phase==="return"&&i.gravity.value>.2&&n.y<=Ce.bounds.y0+.02&&(n.mode="ground",n.y=0,n.vx=0,n.vy=0,n.z=Ce.winch.z+.9,n.setAction("idle"))}for(const a of this.items)this.updateItem(a,t)}collide(t){const e=Ce.bounds,n=Ce.iris;t.x<e.x0&&(t.x=e.x0,t.vx=Math.abs(t.vx)*.4),t.x>e.x1&&(t.x=e.x1,t.vx=-Math.abs(t.vx)*.4),t.y<e.y0&&(t.y=e.y0,t.vy=Math.abs(t.vy)*.35);const i=this.game.store.iris.value,o=Math.abs(t.x-n.x)<n.r*i-.55?Ce.holeTop-1.2:e.y1;t.y>o&&(t.y=o,t.vy=-Math.abs(t.vy)*.35)}applyTether(t,e){if(!this.tethered)return;const n=Ce.winch;this.phase==="return"&&(this.tetherLen=Math.max(.9,this.tetherLen-1.5*e));const i=t.x,r=t.y+.55,o=i-n.x,a=r-n.y,c=Math.hypot(o,a);if(this.tetherTaut=c>this.tetherLen-.05,c>this.tetherLen){const l=o/c,h=a/c;t.x=n.x+l*this.tetherLen,t.y=n.y+h*this.tetherLen-.55;const u=t.vx*l+t.vy*h;u>0&&(t.vx-=u*l,t.vy-=u*h)}}updateItem(t,e){const n=this.game,{girl:i}=n,r=Ce.bounds;switch(t.t+=e,t.state){case"float":{t.vx+=(n.rng()-.5)*.25*e,t.vy+=((n.rng()-.5)*.25+.02)*e,t.vx=ze(t.vx,-.3,.3),t.vy=ze(t.vy,-.3,.3),t.x+=t.vx*e,t.y+=t.vy*e,t.rot+=t.spin*e,(t.x<r.x0+.4||t.x>r.x1-.4)&&(t.vx*=-1),t.y<.6&&(t.vy=Math.abs(t.vy)),t.y>4.9&&(t.vy=-Math.abs(t.vy)),t.x=ze(t.x,r.x0+.4,r.x1-.4),t.y=ze(t.y,.6,4.9),this.phase==="float"&&Math.hypot(t.x-i.x,t.y-(i.y+.55))<yf&&(t.state="carried",t.slot=this.collected,this.collected+=1,t.t=0,n.emit("collect",{i:t.i,kind:t.kind}));break}case"carried":{const o=-i.facing*(.45+t.slot*.28),a=.75-t.slot*.22;t.x=ce(t.x,i.x+o,6,e),t.y=ce(t.y,i.y+a,6,e),t.rot+=t.spin*.3*e;break}case"return":{const o=Ma(Math.min(1,t.t/1.3));t.x=Ie(t.fromX,t.homeX,o),t.y=Ie(t.fromY,t.homeY,o)+Math.sin(o*Math.PI)*.8,t.rot=Ie(t.rot,0,o),o>=1&&(t.state="rack",t.rot=0);break}}}}Qi(Uh,"id","space");const _f=.42,Mf=1.8,oc=.96;class Nh extends yr{enter(){const{store:t,girl:e}=this.game;t.resetFor("finale"),e.reset(),e.place(je.x,je.z),e.outfit="space",e.facing=1,this.handle={y:Me.handle.top,grab:null,auto:0,pulledTotal:0},this.openPull=0,this.openPulled=!1,this.zgrab=null,this.autoZip=0,this.pullSound=0,this.zipSound=0,this.fireworks=0,this.run(this.main)}*main(){const t=this.game,{store:e,girl:n}=t;this.setPhase("walkout"),n.walkTo(-1.4,1.9,2),yield()=>n.arrived,n.walkTo(-4,3.1,2),yield()=>n.arrived,n.walkTo(Me.girl.x,Me.girl.z,2),yield()=>n.arrived,n.facing=1,n.look={x:0,y:8,z:0},this.setPhase("reveal"),e.signal("roof"),t.emit("signal",{path:"roof"}),yield()=>e.signalDone("roof"),e.ring.to(1),t.emit("ring"),yield()=>e.ring.value>.5,e.crane.to(1),t.emit("crane"),yield()=>e.crane.done&&e.ring.done,n.look=null,n.holding="handle",this.setPhase("curtainClose"),yield()=>e.curtain.value>=1&&!this.handle.grab&&this.handle.auto<=0,t.emit("curtainclosed"),this.setPhase("dressing"),n.holding=null,yield .4,e.garmentDrop.to(1),t.emit("lower"),yield()=>e.garmentDrop.done,e.garmentOn=!0,t.emit("fit");for(let i=0;i<3;i++)t.emit("rustle",{i}),yield .45;e.garmentDrop.to(0),t.emit("raise"),yield()=>e.garmentDrop.value<.35,n.holding="handle",this.setPhase("curtainOpen"),yield()=>this.openPulled,e.curtain.to(0),t.emit("curtainopen"),yield()=>e.curtain.value<.02&&e.garmentDrop.done,n.holding=null,n.walkTo(-7.6,3.1,1.6),this.setPhase("zip"),yield()=>e.zip>=1,t.emit("zipped"),e.wear.to(1),n.setAction("cheer"),this.setPhase("celebrate"),e.crane.to(0),e.ring.to(0),yield 5.5,this.setPhase("end"),yield()=>!1}get planeZ(){return Me.planeZ}get hint(){const t=Me.handle;if(this.phase==="curtainClose"||this.phase==="curtainOpen")return{x:t.x,y:this.handle.y,z:t.z,gesture:"dragDown",delay:2.2,to:{x:t.x,y:t.bottom}};if(this.phase==="zip"){const e=Me.zipper,n=e.y0+(e.y1-e.y0)*this.game.store.zip;return{x:e.x,y:n,z:e.z,gesture:"dragUp",delay:2.2,to:{x:e.x,y:Math.min(e.y1,n+2.4)}}}return null}get zipY(){const t=Me.zipper;return t.y0+(t.y1-t.y0)*this.game.store.zip}onDown(t){this.phase==="curtainClose"||this.phase==="curtainOpen"?(this.handle.grab={id:t.id,lastY:t.y,travel:0},this.handle.auto=0):this.phase==="zip"?this.zgrab={id:t.id,lastY:t.y,travel:0}:(this.phase==="celebrate"||this.phase==="end")&&this.game.emit("firework",{x:ze(t.x,-9,9),y:Math.max(t.y,9.5),user:!0})}onMove(t){const e=this.handle;if(e.grab&&e.grab.id===t.id){const i=t.y-e.grab.lastY;e.grab.lastY=t.y,e.grab.travel+=Math.abs(i);const r=e.y;e.y=ze(e.y+i,Me.handle.bottom,Me.handle.top),e.y<r&&this.pulled(r-e.y)}const n=this.zgrab;if(n&&n.id===t.id){const i=t.y-n.lastY;n.lastY=t.y,n.travel+=Math.abs(i),i>0&&this.zipBy(i/(Me.zipper.y1-Me.zipper.y0))}}onUp(t){const e=this.handle;e.grab&&e.grab.id===t.id&&(e.grab.travel<.15&&(e.auto=.42),e.grab=null),this.zgrab&&this.zgrab.id===t.id&&(this.zgrab.travel<.15&&(this.autoZip+=.2),this.zgrab=null)}pulled(t){const e=this.game.store;if(this.handle.pulledTotal+=t,this.phase==="curtainClose"){const n=e.curtain.value+t*_f;e.curtain.set(n>oc?1:n)}else this.phase==="curtainOpen"&&(this.openPull+=t,this.openPull>.35&&(this.openPulled=!0));this.pullSound+=t,this.pullSound>.12&&(this.pullSound=0,this.game.emit("ratchet"))}zipBy(t){const e=this.game.store,n=e.zip,i=e.zip+t;e.zip=i>oc?1:i,this.zipSound+=e.zip-n,this.zipSound>.02&&(this.zipSound=0,this.game.emit("zip",{at:e.zip}))}tick(t){const e=this.handle;if(!e.grab)if(e.auto>0){e.auto-=t;const i=e.y;e.y=Math.max(Me.handle.bottom,e.y-2.6*t),e.y<i&&this.pulled(i-e.y)}else e.y=Math.min(Me.handle.top,e.y+Mf*t);if(this.autoZip>0&&this.phase==="zip"){const i=Math.min(this.autoZip,.55*t);this.autoZip-=i,this.zipBy(i)}const n=this.game.girl;this.phase==="curtainClose"||this.phase==="curtainOpen"?(n.setAction(e.y<Me.handle.top-.05?"pull":"idle"),n.lean=(Me.handle.top-e.y)/(Me.handle.top-Me.handle.bottom)):n.lean=0}}Qi(Nh,"id","finale");const oi=1/60,Io=["intro","fire","fish","space","finale"],bf={intro:zh,fire:Lh,fish:Dh,space:Uh,finale:Nh};class wf{constructor({seed:t=7,chapter:e="intro"}={}){this.seed=t,this.rng=ef(t),this.time=0,this.events=[],this.store=new rf,this.girl=new of,this.ptr={down:!1,id:null,x:0,y:0,sx:0,sy:0,held:0,travel:0},this.pointers=new Map,this.idle=0,this.acc=0,this.paused=!1,this.timeScale=1,this.startChapter(e)}startChapter(t){const e=bf[t];if(!e)throw new Error("unknown chapter "+t);this.releaseAll(),this.chapter=new e(this),this.chapter.enter(),this.idle=0,this.emit("chapter",{id:t})}nextChapter(){const t=Io.indexOf(this.chapter.id);t>=0&&t<Io.length-1&&this.startChapter(Io[t+1])}restart(){this.startChapter("intro"),this.emit("restart")}get phase(){return this.chapter.phase}get where(){return this.chapter.id+"."+this.chapter.phase}get planeZ(){return this.chapter.planeZ}get hint(){return this.chapter.hint}emit(t,e={}){this.events.push({type:t,t:this.time,...e}),this.events.length>400&&this.events.splice(0,this.events.length-400)}drainEvents(){const t=this.events;return this.events=[],t}update(t=oi){this.time+=t,this.idle+=t,this.ptr.down&&(this.ptr.held+=t),this.chapter.update(t),this.store.update(t),this.girl.update(t),this.chapter.finished&&this.nextChapter()}advance(t,e=4){if(this.paused||!(t>0))return 0;Number.isFinite(this.acc)||(this.acc=0),this.acc+=Math.min(t*this.timeScale,e*oi);let n=0;for(;this.acc>=oi;)this.update(oi),this.acc-=oi,n++;return n}pointerDown(t,e,n=0){this.pointers.set(n,{x:t,y:e});const i=this.ptr;i.down=!0,i.id=n,i.x=i.sx=t,i.y=i.sy=e,i.held=0,i.travel=0,this.idle=0,this.chapter.onDown(i)}pointerMove(t,e,n=0){const i=this.pointers.get(n);if(!i)return;i.x=t,i.y=e;const r=this.ptr;!r.down||r.id!==n||(r.travel+=Math.hypot(t-r.x,e-r.y),r.x=t,r.y=e,this.idle=0,this.chapter.onMove(r))}pointerUp(t,e,n=0){if(!this.pointers.delete(n))return;const i=this.ptr;!i.down||i.id!==n||(t!=null&&e!=null&&(i.x=t,i.y=e),i.down=!1,this.chapter.onUp(i),i.id=null)}pointerCancel(t=0){this.pointerUp(null,null,t)}releaseAll(){for(const t of[...this.pointers.keys()])this.pointerCancel(t);this.pointers.clear(),this.ptr.down=!1,this.ptr.id=null}snapshot(){const t=this.chapter,e=this.store,n={where:this.where,time:+this.time.toFixed(2),phaseTime:+t.phaseTime.toFixed(2),girl:{x:+this.girl.x.toFixed(2),y:+this.girl.y.toFixed(2),z:+this.girl.z.toFixed(2),outfit:this.girl.outfit,action:this.girl.action,mode:this.girl.mode,holding:this.girl.holding},pointer:this.ptr.down};return t.id==="fire"&&(n.fires=t.fires.map(i=>i.out?"out":i.lit?+i.intensity.toFixed(2):"unlit"),n.drops=t.drops.length),t.id==="fish"&&(n.water=+e.water.value.toFixed(2),n.line=t.line.state,n.home=t.home,n.plugPull=+t.plugPull.toFixed(2)),t.id==="space"&&(n.iris=+e.iris.value.toFixed(2),n.gravity=+e.gravity.value.toFixed(2),n.collected=t.collected),t.id==="finale"&&(n.curtain=+e.curtain.value.toFixed(2),n.zip=+e.zip.toFixed(2),n.garmentOn=e.garmentOn),n}}class Sf{constructor(t,{think:e=.05,id:n="bot"}={}){this.game=t,this.think=e,this.id=n,this.gesture=null,this.wait=0,this.lastWhere=""}step(t){const e=this.game;if(e.where!==this.lastWhere&&(this.lastWhere=e.where,this.wait=Math.max(this.wait,this.think)),this.gesture){this.runGesture(t);return}if(this.wait>0){this.wait-=t;return}this.decide()}runGesture(t){const e=this.gesture,n=this.game;if(!e.started){const r=e.pos(0);n.pointerDown(r.x,r.y,this.id),e.started=!0,e.t=0;return}e.t+=t;const i=e.pos(e.t);n.pointerMove(i.x,i.y,this.id),(e.done(e.t)||!n.ptr.down)&&(n.pointerUp(i.x,i.y,this.id),this.gesture=null,this.wait=this.think)}tap(t,e){this.gesture={pos:()=>({x:t,y:e}),done:n=>n>=.1}}press(t,e,n=8){this.gesture={pos:()=>t(),done:i=>e()||i>n}}drag(t,e,n,i,r){this.gesture={pos:o=>{const a=Math.min(1,o/r);return{x:Ie(t,n,a),y:Ie(e,i,a)}},done:o=>o>=r+.05}}release(){this.gesture&&this.gesture.started&&this.game.pointerCancel(this.id),this.gesture=null}decide(){const t=this.game,e=t.chapter;switch(t.where){case"intro.title":e.phaseTime>.4&&this.tap(0,2.6);break;case"fire.choose":case"fish.choose":case"space.choose":this.tap(ge.x,ge.y);break;case"fire.spray":{const n=e.fires.find(i=>i.lit&&!i.out);n&&this.press(()=>({x:n.x,y:n.y}),()=>n.out,6);break}case"fish.fishing":case"fish.plug":{const n=e.line;if(n.state==="ready")if(t.phase==="plug")this.tap(e.buoy.x,e.buoy.y);else{const i=e.nearestFreeFish();i&&this.tap(i.x,i.y)}else if(n.state==="hooked"||n.state==="snag")this.press(()=>({x:n.hx,y:n.hy}),()=>n.state!=="hooked"&&n.state!=="snag",12);else if(n.state==="float"&&n.floatTime>6){const i=e.nearestFreeFish();t.phase==="plug"?this.tap(e.buoy.x,e.buoy.y):i&&this.tap(i.x,i.y)}break}case"space.float":{const n=e.nearestItem();n&&this.press(()=>({x:n.x,y:n.y}),()=>n.state!=="float",10);break}case"finale.curtainClose":case"finale.curtainOpen":{const n=Me.handle;this.drag(n.x,e.handle.y,n.x,n.bottom-.25,.5);break}case"finale.zip":{const n=Me.zipper,i=e.zipY;this.drag(n.x,i,n.x,i+2.3,.6);break}}}}const Re=(s,t,e,n)=>({id:s,chapter:t,until:e,label:n}),an=(s,t=0)=>e=>e.where===s&&e.chapter.phaseTime>=t,wa=[Re("intro","intro",an("intro.title",.4),"開始画面"),Re("fire.before-wear","fire",an("fire.choose"),"消防士：着替える直前"),Re("fire.ignited","fire",s=>s.chapter.id==="fire"&&s.chapter.fires.every(t=>t.lit&&!t.igniting),"消防士：炎が発生した直後"),Re("fire.spray","fire",an("fire.spray"),"消防士：ホースを構えた"),Re("fire.extinguishing","fire",s=>s.where==="fire.spray"&&s.chapter.fires[0].out&&s.chapter.fires[1].intensity<.6,"消防士：消火中"),Re("fire.cleanup","fire",an("fire.cleanup",1.6),"消防士：鎮火・片付け"),Re("fire.next","fire",s=>s.where==="fire.next"&&s.store.booth2Rail.value>.4,"次の試着室が降りてくる"),Re("fish.before-wear","fish",an("fish.choose"),"漁師：着替える直前"),Re("fish.flooding","fish",s=>s.where==="fish.trigger"&&s.store.water.value>.55,"漁師：床が海になっていく"),Re("fish.flooded","fish",an("fish.fishing"),"漁師：水位上昇直後"),Re("fish.reeling","fish",s=>s.chapter.id==="fish"&&s.chapter.line.state==="hooked"&&s.chapter.line.reeled>.5,"漁師：釣り操作中"),Re("fish.plug","fish",an("fish.plug"),"漁師：栓のブイを釣る"),Re("fish.drain","fish",s=>s.where==="fish.drain"&&s.store.water.value<.95,"漁師：排水の渦"),Re("space.before-wear","space",an("space.choose"),"宇宙服：着替える直前"),Re("space.opening","space",s=>s.where==="space.trigger"&&s.store.iris.value>.45,"宇宙服：天井が開いていく"),Re("space.opened","space",an("space.float"),"宇宙服：天井開放直後"),Re("space.floating","space",s=>s.where==="space.float"&&s.chapter.collected>=1&&s.chapter.collected<3&&s.girl.y>.8,"宇宙服：浮遊操作中"),Re("space.return","space",an("space.return",.8),"宇宙服：ウインチで帰還"),Re("finale.before","finale",an("finale.curtainClose"),"最終：店を試着させる直前"),Re("finale.curtain","finale",s=>s.where==="finale.curtainClose"&&s.store.curtain.value>.45,"最終：巨大カーテンを引いている"),Re("finale.dressing","finale",s=>s.where==="finale.dressing"&&s.store.garmentDrop.value>.6,"最終：巨大衣装装着中"),Re("finale.reveal","finale",an("finale.curtainOpen"),"最終：カーテンを開く直前"),Re("finale.zipping","finale",s=>s.where==="finale.zip"&&s.store.zip>.4,"最終：ジッパーを上げている"),Re("finale.celebrate","finale",an("finale.celebrate",1.2),"最終：お祝い"),Re("end","finale",an("finale.end",.5),"終了")];function Tf(s){return wa.find(t=>t.id===s)||null}function Fh(s,t,{maxTime:e=200}={}){const n=Tf(t);if(!n)throw new Error("unknown checkpoint "+t);s.startChapter(n.chapter);const i=new Sf(s,{think:.05});let r=Math.round(e/oi);for(;!n.until(s);){if(r--<=0)throw new Error(`checkpoint ${t} not reached (stuck at ${s.where})`);i.step(oi),s.update(oi)}return i.release(),s.acc=0,n}const Ml="180",Ef=0,ac=1,Af=2,Oh=1,kh=2,si=3,Pi=0,Je=1,be=2,hi=0,Ai=1,fn=2,lc=3,cc=4,Rf=5,Vi=100,Cf=101,Pf=102,If=103,zf=104,Lf=200,Df=201,Uf=202,Nf=203,Sa=204,Ta=205,Ff=206,Of=207,kf=208,Bf=209,Hf=210,Vf=211,Gf=212,Wf=213,Xf=214,Ea=0,Aa=1,Ra=2,Es=3,Ca=4,Pa=5,Ia=6,za=7,bl=0,Yf=1,qf=2,Ri=0,Bh=1,Hh=2,Vh=3,wl=4,Gh=5,Wh=6,Xh=7,Yh=300,As=301,Rs=302,La=303,Da=304,vo=306,mi=1e3,Gn=1001,Ua=1002,Mn=1003,Zf=1004,Sr=1005,Wn=1006,zo=1007,Wi=1008,jn=1009,qh=1010,Zh=1011,cr=1012,Sl=1013,Zi=1014,Xn=1015,ui=1016,Tl=1017,El=1018,hr=1020,jh=35902,$h=35899,Jh=1021,Kh=1022,Un=1023,ur=1026,fr=1027,Al=1028,Rl=1029,Qh=1030,Cl=1031,Pl=1033,io=33776,so=33777,ro=33778,oo=33779,Na=35840,Fa=35841,Oa=35842,ka=35843,Ba=36196,Ha=37492,Va=37496,Ga=37808,Wa=37809,Xa=37810,Ya=37811,qa=37812,Za=37813,ja=37814,$a=37815,Ja=37816,Ka=37817,Qa=37818,tl=37819,el=37820,nl=37821,il=36492,sl=36494,rl=36495,ol=36283,al=36284,ll=36285,cl=36286,jf=3200,$f=3201,Il=0,Jf=1,Ei="",Ue="srgb",Cs="srgb-linear",uo="linear",pe="srgb",ts=7680,hc=519,Kf=512,Qf=513,td=514,tu=515,ed=516,nd=517,id=518,sd=519,hl=35044,Xi=35048,uc="300 es",Yn=2e3,fo=2001;class Ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fc=1234567;const nr=Math.PI/180,Ps=180/Math.PI;function qn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[s&255]+Qe[s>>8&255]+Qe[s>>16&255]+Qe[s>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function te(s,t,e){return Math.max(t,Math.min(e,s))}function zl(s,t){return(s%t+t)%t}function rd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function od(s,t,e){return s!==t?(e-s)/(t-s):0}function ir(s,t,e){return(1-e)*s+e*t}function ad(s,t,e,n){return ir(s,t,1-Math.exp(-e*n))}function ld(s,t=1){return t-Math.abs(zl(s,t*2)-t)}function cd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function hd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ud(s,t){return s+Math.floor(Math.random()*(t-s+1))}function fd(s,t){return s+Math.random()*(t-s)}function dd(s){return s*(.5-Math.random())}function pd(s){s!==void 0&&(fc=s);let t=fc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function md(s){return s*nr}function gd(s){return s*Ps}function xd(s){return(s&s-1)===0&&s!==0}function vd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _d(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),x=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*x,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*x,a*l);break;case"ZYZ":s.set(c*x,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Dn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Md={DEG2RAD:nr,RAD2DEG:Ps,generateUUID:qn,clamp:te,euclideanModulo:zl,mapLinear:rd,inverseLerp:od,lerp:ir,damp:ad,pingpong:ld,smoothstep:cd,smootherstep:hd,randInt:ud,randFloat:fd,randFloatSpread:dd,seededRandom:pd,degToRad:md,radToDeg:gd,isPowerOfTwo:xd,ceilPowerOfTwo:vd,floorPowerOfTwo:yd,setQuaternionFromProperEuler:_d,normalize:me,denormalize:Dn};class K{constructor(t=0,e=0){K.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],x=r[o+2],m=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=m;return}if(u!==m||c!==f||l!==d||h!==x){let g=1-a;const p=c*f+l*d+h*x+u*m,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),T=Math.atan2(S,p*v);g=Math.sin(g*T)/S,a=Math.sin(a*T)/S}const _=a*v;if(c=c*g+f*_,l=l*g+d*_,h=h*g+x*_,u=u*g+m*_,g===1-a){const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],x=r[o+3];return t[e]=a*x+h*u+c*d-l*f,t[e+1]=c*x+h*f+l*u-a*d,t[e+2]=l*x+h*d+a*f-c*u,t[e+3]=h*x-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),x=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u+f*d*x;break;case"YZX":this._x=f*h*u+l*d*x,this._y=l*d*u+f*h*x,this._z=l*h*x-f*d*u,this._w=l*h*u-f*d*x;break;case"XZY":this._x=f*h*u-l*d*x,this._y=l*d*u-f*h*x,this._z=l*h*x+f*d*u,this._w=l*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new A,dc=new fi;class Kt{constructor(t,e,n,i,r,o,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],m=i[0],g=i[3],p=i[6],v=i[1],y=i[4],_=i[7],S=i[2],T=i[5],E=i[8];return r[0]=o*m+a*v+c*S,r[3]=o*g+a*y+c*T,r[6]=o*p+a*_+c*E,r[1]=l*m+h*v+u*S,r[4]=l*g+h*y+u*T,r[7]=l*p+h*_+u*E,r[2]=f*m+d*v+x*S,r[5]=f*g+d*y+x*T,r[8]=f*p+d*_+x*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,x=e*u+n*f+i*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/x;return t[0]=u*m,t[1]=(i*l-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=f*m,t[4]=(h*e-i*c)*m,t[5]=(i*r-a*e)*m,t[6]=d*m,t[7]=(n*c-l*e)*m,t[8]=(o*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Do.makeScale(t,e)),this}rotate(t){return this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new Kt;function eu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function po(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bd(){const s=po("canvas");return s.style.display="block",s}const pc={};function dr(s){s in pc||(pc[s]=!0,console.warn(s))}function wd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const mc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sd(){const s={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(i.r=Ss(i.r),i.g=Ss(i.g),i.b=Ss(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ei?uo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return dr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return dr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Cs]:{primaries:t,whitePoint:n,transfer:uo,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),s}const ue=Sd();function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ss(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let es;class Td{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{es===void 0&&(es=po("canvas")),es.width=t.width,es.height=t.height;const i=es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=po("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ed=0;class Ll{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Uo(i[o].image)):r.push(Uo(i[o]))}else r=Uo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Uo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Td.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ad=0;const No=new A;class en extends Ds{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=Gn,i=Gn,r=Wn,o=Wi,a=Un,c=jn,l=en.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=qn(),this.name="",this.source=new Ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mi:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case Ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mi:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case Ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Yh;en.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],x=c[9],m=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(x+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,_=(d+1)/2,S=(p+1)/2,T=(h+f)/4,E=(u+m)/4,C=(x+g)/4;return y>_&&y>S?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=E/n):_>S?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=T/i,r=C/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=E/r,i=C/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-x)*(g-x)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(u-m)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rd extends Ds{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new en(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ll(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends Rd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nu extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cd extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),Er.subVectors(this.max,ks),ns.subVectors(t.a,ks),is.subVectors(t.b,ks),ss.subVectors(t.c,ks),yi.subVectors(is,ns),_i.subVectors(ss,is),Di.subVectors(ns,ss);let e=[0,-yi.z,yi.y,0,-_i.z,_i.y,0,-Di.z,Di.y,yi.z,0,-yi.x,_i.z,0,-_i.x,Di.z,0,-Di.x,-yi.y,yi.x,0,-_i.y,_i.x,0,-Di.y,Di.x,0];return!Fo(e,ns,is,ss,Er)||(e=[1,0,0,0,1,0,0,0,1],!Fo(e,ns,is,ss,Er))?!1:(Ar.crossVectors(yi,_i),e=[Ar.x,Ar.y,Ar.z],Fo(e,ns,is,ss,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qn=[new A,new A,new A,new A,new A,new A,new A,new A],Pn=new A,Tr=new $i,ns=new A,is=new A,ss=new A,yi=new A,_i=new A,Di=new A,ks=new A,Er=new A,Ar=new A,Ui=new A;function Fo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ui.fromArray(s,r);const a=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),c=t.dot(Ui),l=e.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Pd=new $i,Bs=new A,Oo=new A;class _r{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Pd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Oo)),this.expandByPoint(Bs.copy(t.center).sub(Oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ti=new A,ko=new A,Rr=new A,Mi=new A,Bo=new A,Cr=new A,Ho=new A;class iu{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ko.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(ko);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Rr),a=Mi.dot(this.direction),c=-Mi.dot(Rr),l=Mi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,x;if(h>0)if(u=o*c-a,f=o*a-c,x=r*h,u>=0)if(f>=-x)if(f<=x){const m=1/h;u*=m,f*=m,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ko).addScaledVector(Rr,f),d}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),i=ti.dot(ti)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,i,r){Bo.subVectors(e,t),Cr.subVectors(n,t),Ho.crossVectors(Bo,Cr);let o=this.direction.dot(Ho),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,t);const c=a*this.direction.dot(Cr.crossVectors(Mi,Cr));if(c<0)return null;const l=a*this.direction.dot(Bo.cross(Mi));if(l<0||c+l>o)return null;const h=-a*Mi.dot(Ho);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,x,m,g){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,x,m,g)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,x,m,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=x,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,x=a*h,m=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+x*l,e[5]=f-m*l,e[9]=-a*c,e[2]=m-f*l,e[6]=x+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,x=l*h,m=l*u;e[0]=f+m*a,e[4]=x*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-x,e[6]=m+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,x=l*h,m=l*u;e[0]=f-m*a,e[4]=-o*u,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*h,e[9]=m-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,x=a*h,m=a*u;e[0]=c*h,e[4]=x*l-d,e[8]=f*l+m,e[1]=c*u,e[5]=m*l+f,e[9]=d*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,x=a*c,m=a*l;e[0]=c*h,e[4]=m-f*u,e[8]=x*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+x,e[10]=f-m*u}else if(t.order==="XZY"){const f=o*c,d=o*l,x=a*c,m=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+m,e[5]=o*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=a*h,e[10]=m*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Id,t,zd)}lookAt(t,e,n){const i=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),bi.crossVectors(n,vn),bi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),bi.crossVectors(n,vn)),bi.normalize(),Pr.crossVectors(vn,bi),i[0]=bi.x,i[4]=Pr.x,i[8]=vn.x,i[1]=bi.y,i[5]=Pr.y,i[9]=vn.y,i[2]=bi.z,i[6]=Pr.z,i[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],m=n[6],g=n[10],p=n[14],v=n[3],y=n[7],_=n[11],S=n[15],T=i[0],E=i[4],C=i[8],b=i[12],M=i[1],P=i[5],z=i[9],N=i[13],U=i[2],D=i[6],F=i[10],Z=i[14],W=i[3],dt=i[7],yt=i[11],Et=i[15];return r[0]=o*T+a*M+c*U+l*W,r[4]=o*E+a*P+c*D+l*dt,r[8]=o*C+a*z+c*F+l*yt,r[12]=o*b+a*N+c*Z+l*Et,r[1]=h*T+u*M+f*U+d*W,r[5]=h*E+u*P+f*D+d*dt,r[9]=h*C+u*z+f*F+d*yt,r[13]=h*b+u*N+f*Z+d*Et,r[2]=x*T+m*M+g*U+p*W,r[6]=x*E+m*P+g*D+p*dt,r[10]=x*C+m*z+g*F+p*yt,r[14]=x*b+m*N+g*Z+p*Et,r[3]=v*T+y*M+_*U+S*W,r[7]=v*E+y*P+_*D+S*dt,r[11]=v*C+y*z+_*F+S*yt,r[15]=v*b+y*N+_*Z+S*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],m=t[7],g=t[11],p=t[15];return x*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+m*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+g*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],m=t[13],g=t[14],p=t[15],v=u*g*l-m*f*l+m*c*d-a*g*d-u*c*p+a*f*p,y=x*f*l-h*g*l-x*c*d+o*g*d+h*c*p-o*f*p,_=h*m*l-x*u*l+x*a*d-o*m*d-h*a*p+o*u*p,S=x*u*c-h*m*c-x*a*f+o*m*f+h*a*g-o*u*g,T=e*v+n*y+i*_+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=v*E,t[1]=(m*f*r-u*g*r-m*i*d+n*g*d+u*i*p-n*f*p)*E,t[2]=(a*g*r-m*c*r+m*i*l-n*g*l-a*i*p+n*c*p)*E,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*E,t[4]=y*E,t[5]=(h*g*r-x*f*r+x*i*d-e*g*d-h*i*p+e*f*p)*E,t[6]=(x*c*r-o*g*r-x*i*l+e*g*l+o*i*p-e*c*p)*E,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*d+e*c*d)*E,t[8]=_*E,t[9]=(x*u*r-h*m*r-x*n*d+e*m*d+h*n*p-e*u*p)*E,t[10]=(o*m*r-x*a*r+x*n*l-e*m*l-o*n*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*E,t[12]=S*E,t[13]=(h*m*i-x*u*i+x*n*f-e*m*f-h*n*g+e*u*g)*E,t[14]=(x*a*i-o*m*i-x*n*c+e*m*c+o*n*g-e*a*g)*E,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,x=r*u,m=o*h,g=o*u,p=a*u,v=c*l,y=c*h,_=c*u,S=n.x,T=n.y,E=n.z;return i[0]=(1-(m+p))*S,i[1]=(d+_)*S,i[2]=(x-y)*S,i[3]=0,i[4]=(d-_)*T,i[5]=(1-(f+p))*T,i[6]=(g+v)*T,i[7]=0,i[8]=(x+y)*E,i[9]=(g-v)*E,i[10]=(1-(f+m))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=rs.set(i[0],i[1],i[2]).length();const o=rs.set(i[4],i[5],i[6]).length(),a=rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],In.copy(this);const l=1/r,h=1/o,u=1/a;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,e.setFromRotationMatrix(In),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Yn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let x,m;if(c)x=r/(o-r),m=o*r/(o-r);else if(a===Yn)x=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===fo)x=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Yn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let x,m;if(c)x=1/(o-r),m=o/(o-r);else if(a===Yn)x=-2/(o-r),m=-(o+r)/(o-r);else if(a===fo)x=-1/(o-r),m=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=x,l[14]=m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const rs=new A,In=new ye,Id=new A(0,0,0),zd=new A(1,1,1),bi=new A,Pr=new A,vn=new A,xc=new ye,vc=new fi;class On{constructor(t=0,e=0,n=0,i=On.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ld=0;const yc=new A,os=new fi,ei=new ye,Ir=new A,Hs=new A,Dd=new A,Ud=new fi,_c=new A(1,0,0),Mc=new A(0,1,0),bc=new A(0,0,1),wc={type:"added"},Nd={type:"removed"},as={type:"childadded",child:null},Vo={type:"childremoved",child:null};class Fe extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new A,e=new On,n=new fi,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new Kt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(_c,t)}rotateY(t){return this.rotateOnAxis(Mc,t)}rotateZ(t){return this.rotateOnAxis(bc,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_c,t)}translateY(t){return this.translateOnAxis(Mc,t)}translateZ(t){return this.translateOnAxis(bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Hs,Ir,this.up):ei.lookAt(Ir,Hs,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),os.setFromRotationMatrix(ei),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wc),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nd),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wc),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,Dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Fe.DEFAULT_UP=new A(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new A,ni=new A,Go=new A,ii=new A,ls=new A,cs=new A,Sc=new A,Wo=new A,Xo=new A,Yo=new A,qo=new xe,Zo=new xe,jo=new xe;class Rn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),zn.subVectors(t,e),i.cross(zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){zn.subVectors(i,e),ni.subVectors(n,e),Go.subVectors(t,e);const o=zn.dot(zn),a=zn.dot(ni),c=zn.dot(Go),l=ni.dot(ni),h=ni.dot(Go),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,x=(o*h-a*c)*f;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(o,ii.y),c.addScaledVector(a,ii.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return qo.setScalar(0),Zo.setScalar(0),jo.setScalar(0),qo.fromBufferAttribute(t,e),Zo.fromBufferAttribute(t,n),jo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(qo,r.x),o.addScaledVector(Zo,r.y),o.addScaledVector(jo,r.z),o}static isFrontFacing(t,e,n,i){return zn.subVectors(n,e),ni.subVectors(t,e),zn.cross(ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),zn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ls.subVectors(i,n),cs.subVectors(r,n),Wo.subVectors(t,n);const c=ls.dot(Wo),l=cs.dot(Wo);if(c<=0&&l<=0)return e.copy(n);Xo.subVectors(t,i);const h=ls.dot(Xo),u=cs.dot(Xo);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ls,o);Yo.subVectors(t,r);const d=ls.dot(Yo),x=cs.dot(Yo);if(x>=0&&d<=x)return e.copy(r);const m=d*l-c*x;if(m<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(n).addScaledVector(cs,a);const g=h*x-d*u;if(g<=0&&u-h>=0&&d-x>=0)return Sc.subVectors(r,i),a=(u-h)/(u-h+(d-x)),e.copy(i).addScaledVector(Sc,a);const p=1/(g+m+f);return o=m*p,a=f*p,e.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function $o(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=zl(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$o(o,r,t+1/3),this.g=$o(o,r,t),this.b=$o(o,r,t-1/3)}return ue.colorSpaceToWorking(this,i),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=su[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return ue.workingToColorSpace(tn.copy(this),t),Math.round(te(tn.r*255,0,255))*65536+Math.round(te(tn.g*255,0,255))*256+Math.round(te(tn.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Ue){ue.workingToColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,i=tn.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(zr);const n=ir(wi.h,zr.h,e),i=ir(wi.s,zr.s,e),r=ir(wi.l,zr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Pt;Pt.NAMES=su;let Fd=0;class Ji extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Ai,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=Ta,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class kn extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new A,Lr=new K;let Od=0;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Od++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hl,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hl&&(t.usage=this.usage),t}}class ru extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ou extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let kd=0;const En=new ye,Jo=new Fe,hs=new A,yn=new $i,Vs=new $i,Ze=new A;class Oe extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eu(t)?ou:ru)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(yn.min,Vs.min),yn.expandByPoint(Ze),Ze.addVectors(yn.max,Vs.max),yn.expandByPoint(Ze)):(yn.expandByPoint(Vs.min),yn.expandByPoint(Vs.max))}yn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ze.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(t,l),Ze.add(hs)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new A,c[C]=new A;const l=new A,h=new A,u=new A,f=new K,d=new K,x=new K,m=new A,g=new A;function p(C,b,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,b),x.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),x.sub(f);const P=1/(d.x*x.y-x.x*d.y);isFinite(P)&&(m.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(P),a[C].add(m),a[b].add(m),a[M].add(m),c[C].add(g),c[b].add(g),c[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,b=v.length;C<b;++C){const M=v[C],P=M.start,z=M.count;for(let N=P,U=P+z;N<U;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new A,_=new A,S=new A,T=new A;function E(C){S.fromBufferAttribute(i,C),T.copy(S);const b=a[C];y.copy(b),y.sub(S.multiplyScalar(S.dot(b))).normalize(),_.crossVectors(T,b);const P=_.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,b=v.length;C<b;++C){const M=v[C],P=M.start,z=M.count;for(let N=P,U=P+z;N<U;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let f=0,d=t.count;f<d;f+=3){const x=t.getX(f+0),m=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,x=0;for(let m=0,g=c.length;m<g;m++){a.isInterleavedBufferAttribute?d=c[m]*a.data.stride+a.offset:d=c[m]*h;for(let p=0;p<h;p++)f[x++]=l[d++]}return new He(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new ye,Ni=new iu,Dr=new _r,Ec=new A,Ur=new A,Nr=new A,Fr=new A,Ko=new A,Or=new A,Ac=new A,kr=new A;class $ extends Fe{constructor(t=new Oe,e=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Or.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ko.fromBufferAttribute(u,t),o?Or.addScaledVector(Ko,h):Or.addScaledVector(Ko.sub(e),h))}e.add(Or)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(Dr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Dr,Ec)===null||Ni.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,m=f.length;x<m;x++){const g=f[x],p=o[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,S=y;_<S;_+=3){const T=a.getX(_),E=a.getX(_+1),C=a.getX(_+2);i=Br(this,p,t,n,l,h,u,T,E,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const x=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let g=x,p=m;g<p;g+=3){const v=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);i=Br(this,o,t,n,l,h,u,v,y,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,m=f.length;x<m;x++){const g=f[x],p=o[g.materialIndex],v=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let _=v,S=y;_<S;_+=3){const T=_,E=_+1,C=_+2;i=Br(this,p,t,n,l,h,u,T,E,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const x=Math.max(0,d.start),m=Math.min(c.count,d.start+d.count);for(let g=x,p=m;g<p;g+=3){const v=g,y=g+1,_=g+2;i=Br(this,o,t,n,l,h,u,v,y,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Bd(s,t,e,n,i,r,o,a){let c;if(t.side===Je?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Pi,a),c===null)return null;kr.copy(a),kr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(kr);return l<e.near||l>e.far?null:{distance:l,point:kr.clone(),object:s}}function Br(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Ur),s.getVertexPosition(c,Nr),s.getVertexPosition(l,Fr);const h=Bd(s,t,e,n,Ur,Nr,Fr,Ac);if(h){const u=new A;Rn.getBarycoord(Ac,Ur,Nr,Fr,u),i&&(h.uv=Rn.getInterpolatedAttribute(i,a,c,l,u,new K)),r&&(h.uv1=Rn.getInterpolatedAttribute(r,a,c,l,u,new K)),o&&(h.normal=Rn.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new A,materialIndex:0};Rn.getNormal(Ur,Nr,Fr,f.normal),h.face=f,h.barycoord=u}return h}class Xe extends Oe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,i,o,2),x("x","z","y",1,-1,t,n,-e,i,o,3),x("x","y","z",1,-1,t,e,n,i,r,4),x("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function x(m,g,p,v,y,_,S,T,E,C,b){const M=_/E,P=S/C,z=_/2,N=S/2,U=T/2,D=E+1,F=C+1;let Z=0,W=0;const dt=new A;for(let yt=0;yt<F;yt++){const Et=yt*P-N;for(let Yt=0;Yt<D;Yt++){const ne=Yt*M-z;dt[m]=ne*v,dt[g]=Et*y,dt[p]=U,l.push(dt.x,dt.y,dt.z),dt[m]=0,dt[g]=0,dt[p]=T>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(Yt/E),u.push(1-yt/C),Z+=1}}for(let yt=0;yt<C;yt++)for(let Et=0;Et<E;Et++){const Yt=f+Et+D*yt,ne=f+Et+D*(yt+1),le=f+(Et+1)+D*(yt+1),se=f+(Et+1)+D*yt;c.push(Yt,ne,se),c.push(ne,le,se),W+=6}a.addGroup(d,W,b),d+=W,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function rn(s){const t={};for(let e=0;e<s.length;e++){const n=Is(s[e]);for(const i in n)t[i]=n[i]}return t}function Hd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function au(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const pr={clone:Is,merge:rn};var Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lu extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new A,Rc=new K,Cc=new K;class un extends lu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,Rc,Cc),e.subVectors(Cc,Rc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,fs=1;class Wd extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(us,fs,t,e);i.layers=this.layers,this.add(i);const r=new un(us,fs,t,e);r.layers=this.layers,this.add(r);const o=new un(us,fs,t,e);o.layers=this.layers,this.add(o);const a=new un(us,fs,t,e);a.layers=this.layers,this.add(a);const c=new un(us,fs,t,e);c.layers=this.layers,this.add(c);const l=new un(us,fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class cu extends en{constructor(t=[],e=As,n,i,r,o,a,c,l,h){super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xd extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new cu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xe(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:hi});r.uniforms.tEquirect.value=e;const o=new $(i,r),a=e.minFilter;return e.minFilter===Wi&&(e.minFilter=Wn),new Wd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class at extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yd={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const m of t.hand.values()){const g=e.getJointPose(m,n),p=this._getHandJoint(l,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;l.inputState.pinching&&f>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new at;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class hu extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class qd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hl,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new A;class mo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new mo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yo extends Ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ds;const Gs=new A,ps=new A,ms=new A,gs=new K,Ws=new K,uu=new ye,Hr=new A,Xs=new A,Vr=new A,Pc=new K,ta=new K,Ic=new K;class go extends Fe{constructor(t=new yo){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new Oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qd(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new mo(n,3,0,!1)),ds.setAttribute("uv",new mo(n,2,3,!1))}this.geometry=ds,this.material=t,this.center=new K(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Gr(Hr.set(-.5,-.5,0),ms,o,ps,i,r),Gr(Xs.set(.5,-.5,0),ms,o,ps,i,r),Gr(Vr.set(.5,.5,0),ms,o,ps,i,r),Pc.set(0,0),ta.set(1,0),Ic.set(1,1);let a=t.ray.intersectTriangle(Hr,Xs,Vr,!1,Gs);if(a===null&&(Gr(Xs.set(-.5,.5,0),ms,o,ps,i,r),ta.set(0,1),a=t.ray.intersectTriangle(Hr,Vr,Xs,!1,Gs),a===null))return;const c=t.ray.origin.distanceTo(Gs);c<t.near||c>t.far||e.push({distance:c,point:Gs.clone(),uv:Rn.getInterpolation(Gs,Hr,Xs,Vr,Pc,ta,Ic,new K),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Gr(s,t,e,n,i,r){gs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ws.x=r*gs.x-i*gs.y,Ws.y=i*gs.x+r*gs.y):Ws.copy(gs),s.copy(t),s.x+=Ws.x,s.y+=Ws.y,s.applyMatrix4(uu)}class Zd extends en{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Mn,h=Mn,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zc extends He{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xs=new ye,Lc=new ye,Wr=[],Dc=new $i,jd=new ye,Ys=new $,qs=new _r;class Ul extends ${constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),Dc.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(Dc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _r),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),qs.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xs),Lc.multiplyMatrices(n,xs),Ys.matrixWorld=Lc,Ys.raycast(t,Wr);for(let o=0,a=Wr.length;o<a;o++){const c=Wr[o];c.instanceId=r,c.object=this,e.push(c)}Wr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zd(new Float32Array(i*this.count),i,this.count,Al,Xn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ea=new A,$d=new A,Jd=new Kt;class Ti{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ea.subVectors(n,e).cross($d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ea),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jd.getNormalMatrix(t),i=this.coplanarPoint(ea).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new _r,Kd=new K(.5,.5),Xr=new A;class Nl{constructor(t=new Ti,e=new Ti,n=new Ti,i=new Ti,r=new Ti,o=new Ti){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],x=r[8],m=r[9],g=r[10],p=r[11],v=r[12],y=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-o,d-h,p-x,S-v).normalize(),i[1].setComponents(l+o,d+h,p+x,S+v).normalize(),i[2].setComponents(l+a,d+u,p+m,S+y).normalize(),i[3].setComponents(l-a,d-u,p-m,S-y).normalize(),n)i[4].setComponents(c,f,g,_).normalize(),i[5].setComponents(l-c,d-f,p-g,S-_).normalize();else if(i[4].setComponents(l-c,d-f,p-g,S-_).normalize(),e===Yn)i[5].setComponents(l+c,d+f,p+g,S+_).normalize();else if(e===fo)i[5].setComponents(c,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);const e=Kd.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Xr.x=i.normal.x>0?t.max.x:t.min.x,Xr.y=i.normal.y>0?t.max.y:t.min.y,Xr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wn extends en{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fu extends en{constructor(t,e,n=Zi,i,r,o,a=Mn,c=Mn,l,h=ur,u=1){if(h!==ur&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ll(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class du extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Zn extends Oe{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,x=n*2+r,m=i+1,g=new A,p=new A;for(let v=0;v<=x;v++){let y=0,_=0,S=0,T=0;if(v<=n){const b=v/n,M=b*Math.PI/2;_=-h-t*Math.cos(M),S=t*Math.sin(M),T=-t*Math.cos(M),y=b*u}else if(v<=n+r){const b=(v-n)/r;_=-h+b*e,S=t,T=0,y=u+b*f}else{const b=(v-n-r)/n,M=b*Math.PI/2;_=h+t*Math.sin(M),S=t*Math.cos(M),T=t*Math.sin(M),y=u+f+b*u}const E=Math.max(0,Math.min(1,y/d));let C=0;v===0?C=.5/i:v===x&&(C=-.5/i);for(let b=0;b<=i;b++){const M=b/i,P=M*Math.PI*2,z=Math.sin(P),N=Math.cos(P);p.x=-S*N,p.y=_,p.z=S*z,a.push(p.x,p.y,p.z),g.set(-S*N,T,S*z),g.normalize(),c.push(g.x,g.y,g.z),l.push(M+C,E)}if(v>0){const b=(v-1)*m;for(let M=0;M<i;M++){const P=b+M,z=b+M+1,N=v*m+M,U=v*m+M+1;o.push(P,z,N),o.push(z,U,N)}}}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class _o extends Oe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new A,h=new K;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ee extends Oe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let x=0;const m=[],g=n/2;let p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(d,2));function v(){const _=new A,S=new A;let T=0;const E=(e-t)/n;for(let C=0;C<=r;C++){const b=[],M=C/r,P=M*(e-t)+t;for(let z=0;z<=i;z++){const N=z/i,U=N*c+a,D=Math.sin(U),F=Math.cos(U);S.x=P*D,S.y=-M*n+g,S.z=P*F,u.push(S.x,S.y,S.z),_.set(D,E,F).normalize(),f.push(_.x,_.y,_.z),d.push(N,1-M),b.push(x++)}m.push(b)}for(let C=0;C<i;C++)for(let b=0;b<r;b++){const M=m[b][C],P=m[b+1][C],z=m[b+1][C+1],N=m[b][C+1];(t>0||b!==0)&&(h.push(M,P,N),T+=3),(e>0||b!==r-1)&&(h.push(P,z,N),T+=3)}l.addGroup(p,T,0),p+=T}function y(_){const S=x,T=new K,E=new A;let C=0;const b=_===!0?t:e,M=_===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),x++;const P=x;for(let z=0;z<=i;z++){const U=z/i*c+a,D=Math.cos(U),F=Math.sin(U);E.x=b*F,E.y=g*M,E.z=b*D,u.push(E.x,E.y,E.z),f.push(0,M,0),T.x=D*.5+.5,T.y=F*.5*M+.5,d.push(T.x,T.y),x++}for(let z=0;z<i;z++){const N=S+z,U=P+z;_===!0?h.push(U,U+1,N):h.push(U+1,U,N),C+=3}l.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Us extends Ee{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Us(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fl extends Oe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new A,_=new A,S=new A;for(let T=0;T<e.length;T+=3)d(e[T+0],y),d(e[T+1],_),d(e[T+2],S),c(y,_,S,v)}function c(v,y,_,S){const T=S+1,E=[];for(let C=0;C<=T;C++){E[C]=[];const b=v.clone().lerp(_,C/T),M=y.clone().lerp(_,C/T),P=T-C;for(let z=0;z<=P;z++)z===0&&C===T?E[C][z]=b:E[C][z]=b.clone().lerp(M,z/P)}for(let C=0;C<T;C++)for(let b=0;b<2*(T-C)-1;b++){const M=Math.floor(b/2);b%2===0?(f(E[C][M+1]),f(E[C+1][M]),f(E[C][M])):(f(E[C][M+1]),f(E[C+1][M+1]),f(E[C+1][M]))}}function l(v){const y=new A;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const v=new A;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const _=g(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;o.push(_,1-S)}x(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],_=o[v+2],S=o[v+4],T=Math.max(y,_,S),E=Math.min(y,_,S);T>.9&&E<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,y){const _=v*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function x(){const v=new A,y=new A,_=new A,S=new A,T=new K,E=new K,C=new K;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),T.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),S.copy(v).add(y).add(_).divideScalar(3);const P=g(S);m(T,M+0,v,P),m(E,M+2,y,P),m(C,M+4,_,P)}}function m(v,y,_,S){S<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.vertices,t.indices,t.radius,t.details)}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new K:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new A,i=[],r=[],o=[],a=new A,c=new ye;for(let d=0;d<=t;d++){const x=d/t;i[d]=this.getTangentAt(x,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(te(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(te(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(i[x],d*x)),o[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ol extends Jn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new K){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qd extends Ol{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kl(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Yr=new A,na=new kl,ia=new kl,sa=new kl;class Ts extends Jn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Yr.subVectors(i[0],i[1]).add(i[0]),l=Yr);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Yr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Yr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),x<1e-4&&(x=m),g<1e-4&&(g=m),na.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,x,m,g),ia.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,x,m,g),sa.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,x,m,g)}else this.curveType==="catmullrom"&&(na.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ia.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),sa.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(na.calc(c),ia.calc(c),sa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Uc(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function tp(s,t){const e=1-s;return e*e*t}function ep(s,t){return 2*(1-s)*s*t}function np(s,t){return s*s*t}function sr(s,t,e,n){return tp(s,t)+ep(s,e)+np(s,n)}function ip(s,t){const e=1-s;return e*e*e*t}function sp(s,t){const e=1-s;return 3*e*e*s*t}function rp(s,t){return 3*(1-s)*s*s*t}function op(s,t){return s*s*s*t}function rr(s,t,e,n,i){return ip(s,t)+sp(s,e)+rp(s,n)+op(s,i)}class pu extends Jn{constructor(t=new K,e=new K,n=new K,i=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new K){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(t,i.x,r.x,o.x,a.x),rr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ap extends Jn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(t,i.x,r.x,o.x,a.x),rr(t,i.y,r.y,o.y,a.y),rr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mu extends Jn{constructor(t=new K,e=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new K){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ul extends Jn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gu extends Jn{constructor(t=new K,e=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new K){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(sr(t,i.x,r.x,o.x),sr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bl extends Jn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(sr(t,i.x,r.x,o.x),sr(t,i.y,r.y,o.y),sr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xu extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new K){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Uc(a,c.x,l.x,h.x,u.x),Uc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new K().fromArray(i))}return this}}var xo=Object.freeze({__proto__:null,ArcCurve:Qd,CatmullRomCurve3:Ts,CubicBezierCurve:pu,CubicBezierCurve3:ap,EllipseCurve:Ol,LineCurve:mu,LineCurve3:ul,QuadraticBezierCurve:gu,QuadraticBezierCurve3:Bl,SplineCurve:xu});class vu extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new xo[i.type]().fromJSON(i))}return this}}class pi extends vu{constructor(t){super(),this.type="Path",this.currentPoint=new K,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mu(this.currentPoint.clone(),new K(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new gu(this.currentPoint.clone(),new K(t,e),new K(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new pu(this.currentPoint.clone(),new K(t,e),new K(n,i),new K(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new Ol(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Cn extends pi{constructor(t){super(t),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new pi().fromJSON(i))}return this}}function lp(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=yu(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=dp(s,t,r,e)),s.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<i;f+=e){const d=s[f],x=s[f+1];d<a&&(a=d),x<c&&(c=x),d>h&&(h=d),x>u&&(u=x)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return mr(r,o,e,a,c,l,0),o}function yu(s,t,e,n,i){let r;if(i===Sp(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Nc(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Nc(o/n|0,s[o],s[o+1],r);return r&&zs(r,r.next)&&(xr(r),r=r.next),r}function ji(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(zs(e,e.next)||Ne(e.prev,e,e.next)===0)){if(xr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function mr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&vp(s,n,i,r);let a=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?hp(s,n,i,r):cp(s)){t.push(c.i,s.i,l.i),xr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=up(ji(s),t),mr(s,t,e,n,i,r,2)):o===2&&fp(s,t,e,n,i,r):mr(ji(s),t,e,n,i,r,1);break}}}function cp(s){const t=s.prev,e=s,n=s.next;if(Ne(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(i,r,o),u=Math.min(a,c,l),f=Math.max(i,r,o),d=Math.max(a,c,l);let x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&Qs(i,a,r,c,o,l,x.x,x.y)&&Ne(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function hp(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Ne(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,c,l),x=Math.min(h,u,f),m=Math.max(a,c,l),g=Math.max(h,u,f),p=fl(d,x,t,e,n),v=fl(m,g,t,e,n);let y=s.prevZ,_=s.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=d&&y.x<=m&&y.y>=x&&y.y<=g&&y!==i&&y!==o&&Qs(a,h,c,u,l,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=m&&_.y>=x&&_.y<=g&&_!==i&&_!==o&&Qs(a,h,c,u,l,f,_.x,_.y)&&Ne(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=m&&y.y>=x&&y.y<=g&&y!==i&&y!==o&&Qs(a,h,c,u,l,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=m&&_.y>=x&&_.y<=g&&_!==i&&_!==o&&Qs(a,h,c,u,l,f,_.x,_.y)&&Ne(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function up(s,t){let e=s;do{const n=e.prev,i=e.next.next;!zs(n,i)&&Mu(n,e,e.next,i)&&gr(n,i)&&gr(i,n)&&(t.push(n.i,e.i,i.i),xr(e),xr(e.next),e=s=i),e=e.next}while(e!==s);return ji(e)}function fp(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mp(o,a)){let c=bu(o,a);o=ji(o,o.next),c=ji(c,c.next),mr(o,t,e,n,i,r,0),mr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function dp(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=yu(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(_p(l))}i.sort(pp);for(let r=0;r<i.length;r++)e=mp(i[r],e);return e}function pp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function mp(s,t){const e=gp(s,t);if(!e)return t;const n=bu(e,s);return ji(n,n.next),ji(e,e.next)}function gp(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(zs(s,e))return e;do{if(zs(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&_u(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);gr(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&xp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function xp(s,t){return Ne(s.prev,s,t.prev)<0&&Ne(t.next,s,s.next)<0}function vp(s,t,e,n){let i=s;do i.z===0&&(i.z=fl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,yp(i)}function yp(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function fl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function _p(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function _u(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Qs(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&_u(s,t,e,n,i,r,o,a)}function Mp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!bp(s,t)&&(gr(s,t)&&gr(t,s)&&wp(s,t)&&(Ne(s.prev,s,t.prev)||Ne(s,t.prev,t))||zs(s,t)&&Ne(s.prev,s,s.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function zs(s,t){return s.x===t.x&&s.y===t.y}function Mu(s,t,e,n){const i=Zr(Ne(s,t,e)),r=Zr(Ne(s,t,n)),o=Zr(Ne(e,n,s)),a=Zr(Ne(e,n,t));return!!(i!==r&&o!==a||i===0&&qr(s,e,t)||r===0&&qr(s,n,t)||o===0&&qr(e,s,n)||a===0&&qr(e,t,n))}function qr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Zr(s){return s>0?1:s<0?-1:0}function bp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Mu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function gr(s,t){return Ne(s.prev,s,s.next)<0?Ne(s,t,s.next)>=0&&Ne(s,s.prev,t)>=0:Ne(s,t,s.prev)<0||Ne(s,s.next,t)<0}function wp(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function bu(s,t){const e=dl(s.i,s.x,s.y),n=dl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Nc(s,t,e,n){const i=dl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function dl(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sp(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Tp{static triangulate(t,e,n=2){return lp(t,e,n)}}class li{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return li.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Fc(t),Oc(n,t);let o=t.length;e.forEach(Fc);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Oc(n,e[c]);const a=Tp.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Fc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Oc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class $n extends Oe{constructor(t=new Cn([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new ee(i,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:d-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Ep;let y,_=!1,S,T,E,C;p&&(y=p.getSpacedPoints(h),_=!0,f=!1,S=p.computeFrenetFrames(h,!1),T=new A,E=new A,C=new A),f||(g=0,d=0,x=0,m=0);const b=a.extractPoints(l);let M=b.shape;const P=b.holes;if(!li.isClockWise(M)){M=M.reverse();for(let rt=0,nt=P.length;rt<nt;rt++){const et=P[rt];li.isClockWise(et)&&(P[rt]=et.reverse())}}function N(rt){const et=10000000000000001e-36;let tt=rt[0];for(let xt=1;xt<=rt.length;xt++){const lt=xt%rt.length,vt=rt[lt],Zt=vt.x-tt.x,qt=vt.y-tt.y,I=Zt*Zt+qt*qt,w=Math.max(Math.abs(vt.x),Math.abs(vt.y),Math.abs(tt.x),Math.abs(tt.y)),V=et*w*w;if(I<=V){rt.splice(lt,1),xt--;continue}tt=vt}}N(M),P.forEach(N);const U=P.length,D=M;for(let rt=0;rt<U;rt++){const nt=P[rt];M=M.concat(nt)}function F(rt,nt,et){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(nt,et)}const Z=M.length;function W(rt,nt,et){let tt,xt,lt;const vt=rt.x-nt.x,Zt=rt.y-nt.y,qt=et.x-rt.x,I=et.y-rt.y,w=vt*vt+Zt*Zt,V=vt*I-Zt*qt;if(Math.abs(V)>Number.EPSILON){const j=Math.sqrt(w),st=Math.sqrt(qt*qt+I*I),J=nt.x-Zt/j,Nt=nt.y+vt/j,mt=et.x-I/st,Lt=et.y+qt/st,Dt=((mt-J)*I-(Lt-Nt)*qt)/(vt*I-Zt*qt);tt=J+vt*Dt-rt.x,xt=Nt+Zt*Dt-rt.y;const ct=tt*tt+xt*xt;if(ct<=2)return new K(tt,xt);lt=Math.sqrt(ct/2)}else{let j=!1;vt>Number.EPSILON?qt>Number.EPSILON&&(j=!0):vt<-Number.EPSILON?qt<-Number.EPSILON&&(j=!0):Math.sign(Zt)===Math.sign(I)&&(j=!0),j?(tt=-Zt,xt=vt,lt=Math.sqrt(w)):(tt=vt,xt=Zt,lt=Math.sqrt(w/2))}return new K(tt/lt,xt/lt)}const dt=[];for(let rt=0,nt=D.length,et=nt-1,tt=rt+1;rt<nt;rt++,et++,tt++)et===nt&&(et=0),tt===nt&&(tt=0),dt[rt]=W(D[rt],D[et],D[tt]);const yt=[];let Et,Yt=dt.concat();for(let rt=0,nt=U;rt<nt;rt++){const et=P[rt];Et=[];for(let tt=0,xt=et.length,lt=xt-1,vt=tt+1;tt<xt;tt++,lt++,vt++)lt===xt&&(lt=0),vt===xt&&(vt=0),Et[tt]=W(et[tt],et[lt],et[vt]);yt.push(Et),Yt=Yt.concat(Et)}let ne;if(g===0)ne=li.triangulateShape(D,P);else{const rt=[],nt=[];for(let et=0;et<g;et++){const tt=et/g,xt=d*Math.cos(tt*Math.PI/2),lt=x*Math.sin(tt*Math.PI/2)+m;for(let vt=0,Zt=D.length;vt<Zt;vt++){const qt=F(D[vt],dt[vt],lt);kt(qt.x,qt.y,-xt),tt===0&&rt.push(qt)}for(let vt=0,Zt=U;vt<Zt;vt++){const qt=P[vt];Et=yt[vt];const I=[];for(let w=0,V=qt.length;w<V;w++){const j=F(qt[w],Et[w],lt);kt(j.x,j.y,-xt),tt===0&&I.push(j)}tt===0&&nt.push(I)}}ne=li.triangulateShape(rt,nt)}const le=ne.length,se=x+m;for(let rt=0;rt<Z;rt++){const nt=f?F(M[rt],Yt[rt],se):M[rt];_?(E.copy(S.normals[0]).multiplyScalar(nt.x),T.copy(S.binormals[0]).multiplyScalar(nt.y),C.copy(y[0]).add(E).add(T),kt(C.x,C.y,C.z)):kt(nt.x,nt.y,0)}for(let rt=1;rt<=h;rt++)for(let nt=0;nt<Z;nt++){const et=f?F(M[nt],Yt[nt],se):M[nt];_?(E.copy(S.normals[rt]).multiplyScalar(et.x),T.copy(S.binormals[rt]).multiplyScalar(et.y),C.copy(y[rt]).add(E).add(T),kt(C.x,C.y,C.z)):kt(et.x,et.y,u/h*rt)}for(let rt=g-1;rt>=0;rt--){const nt=rt/g,et=d*Math.cos(nt*Math.PI/2),tt=x*Math.sin(nt*Math.PI/2)+m;for(let xt=0,lt=D.length;xt<lt;xt++){const vt=F(D[xt],dt[xt],tt);kt(vt.x,vt.y,u+et)}for(let xt=0,lt=P.length;xt<lt;xt++){const vt=P[xt];Et=yt[xt];for(let Zt=0,qt=vt.length;Zt<qt;Zt++){const I=F(vt[Zt],Et[Zt],tt);_?kt(I.x,I.y+y[h-1].y,y[h-1].x+et):kt(I.x,I.y,u+et)}}}Q(),ot();function Q(){const rt=i.length/3;if(f){let nt=0,et=Z*nt;for(let tt=0;tt<le;tt++){const xt=ne[tt];zt(xt[2]+et,xt[1]+et,xt[0]+et)}nt=h+g*2,et=Z*nt;for(let tt=0;tt<le;tt++){const xt=ne[tt];zt(xt[0]+et,xt[1]+et,xt[2]+et)}}else{for(let nt=0;nt<le;nt++){const et=ne[nt];zt(et[2],et[1],et[0])}for(let nt=0;nt<le;nt++){const et=ne[nt];zt(et[0]+Z*h,et[1]+Z*h,et[2]+Z*h)}}n.addGroup(rt,i.length/3-rt,0)}function ot(){const rt=i.length/3;let nt=0;Rt(D,nt),nt+=D.length;for(let et=0,tt=P.length;et<tt;et++){const xt=P[et];Rt(xt,nt),nt+=xt.length}n.addGroup(rt,i.length/3-rt,1)}function Rt(rt,nt){let et=rt.length;for(;--et>=0;){const tt=et;let xt=et-1;xt<0&&(xt=rt.length-1);for(let lt=0,vt=h+g*2;lt<vt;lt++){const Zt=Z*lt,qt=Z*(lt+1),I=nt+tt+Zt,w=nt+xt+Zt,V=nt+xt+qt,j=nt+tt+qt;re(I,w,V,j)}}}function kt(rt,nt,et){c.push(rt),c.push(nt),c.push(et)}function zt(rt,nt,et){Se(rt),Se(nt),Se(et);const tt=i.length/3,xt=v.generateTopUV(n,i,tt-3,tt-2,tt-1);L(xt[0]),L(xt[1]),L(xt[2])}function re(rt,nt,et,tt){Se(rt),Se(nt),Se(tt),Se(nt),Se(et),Se(tt);const xt=i.length/3,lt=v.generateSideWallUV(n,i,xt-6,xt-3,xt-2,xt-1);L(lt[0]),L(lt[1]),L(lt[3]),L(lt[1]),L(lt[2]),L(lt[3])}function Se(rt){i.push(c[rt*3+0]),i.push(c[rt*3+1]),i.push(c[rt*3+2])}function L(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ap(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new xo[i.type]().fromJSON(i)),new $n(n,t.options)}}const Ep={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new K(r,o),new K(a,c),new K(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],x=t[i*3+2],m=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new K(o,1-c),new K(l,1-u),new K(f,1-x),new K(m,1-p)]:[new K(a,1-c),new K(h,1-u),new K(d,1-x),new K(g,1-p)]}};function Ap(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Hl extends Fl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hl(t.radius,t.detail)}}class Mo extends Oe{constructor(t=[new K(0,-.5),new K(.5,0),new K(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=te(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new A,f=new K,d=new A,x=new A,m=new A;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(m.x,m.y,m.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),c.push(d.x,d.y,d.z),m.copy(x)}for(let v=0;v<=e;v++){const y=n+v*h*i,_=Math.sin(y),S=Math.cos(y);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*_,u.y=t[T].y,u.z=t[T].x*S,o.push(u.x,u.y,u.z),f.x=v/e,f.y=T/(t.length-1),a.push(f.x,f.y);const E=c[3*T+0]*_,C=c[3*T+1],b=c[3*T+0]*S;l.push(E,C,b)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const _=y+v*t.length,S=_,T=_+t.length,E=_+t.length+1,C=_+1;r.push(S,T,C),r.push(E,C,T)}this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(a,2)),this.setAttribute("normal",new ee(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.points,t.segments,t.phiStart,t.phiLength)}}class bn extends Oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],x=[],m=[],g=[];for(let p=0;p<h;p++){const v=p*f-o;for(let y=0;y<l;y++){const _=y*u-r;x.push(_,-v,0),m.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,_=v+l*(p+1),S=v+1+l*(p+1),T=v+1+l*p;d.push(y,_,T),d.push(_,S,T)}this.setIndex(d),this.setAttribute("position",new ee(x,3)),this.setAttribute("normal",new ee(m,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Vl extends Oe{constructor(t=new Cn([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ee(i,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(o,2));function l(h){const u=i.length/3,f=h.extractPoints(e);let d=f.shape;const x=f.holes;li.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=x.length;g<p;g++){const v=x[g];li.isClockWise(v)===!0&&(x[g]=v.reverse())}const m=li.triangulateShape(d,x);for(let g=0,p=x.length;g<p;g++){const v=x[g];d=d.concat(v)}for(let g=0,p=d.length;g<p;g++){const v=d[g];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,p=m.length;g<p;g++){const v=m[g],y=v[0]+u,_=v[1]+u,S=v[2]+u;n.push(y,_,S),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Rp(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Vl(n,t.curveSegments)}}function Rp(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class $t extends Oe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,f=new A,d=[],x=[],m=[],g=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){const T=S/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+y*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),g.push(T+_,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=h[p][v+1],_=h[p][v],S=h[p+1][v],T=h[p+1][v+1];(p!==0||o>0)&&d.push(y,_,T),(p!==n-1||c<Math.PI)&&d.push(_,S,T)}this.setIndex(d),this.setAttribute("position",new ee(x,3)),this.setAttribute("normal",new ee(m,3)),this.setAttribute("uv",new ee(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pe extends Oe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new A,u=new A,f=new A;for(let d=0;d<=n;d++)for(let x=0;x<=i;x++){const m=x/i*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(m),u.y=(t+e*Math.cos(g))*Math.sin(m),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(m),h.y=t*Math.sin(m),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(x/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=i;x++){const m=(i+1)*d+x-1,g=(i+1)*(d-1)+x-1,p=(i+1)*(d-1)+x,v=(i+1)*d+x;o.push(m,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Yi extends Oe{constructor(t=new Bl(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new K;let h=new A;const u=[],f=[],d=[],x=[];m(),this.setIndex(x),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(d,2));function m(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),v(),p()}function g(y){h=t.getPointAt(y/e,h);const _=o.normals[y],S=o.binormals[y];for(let T=0;T<=i;T++){const E=T/i*Math.PI*2,C=Math.sin(E),b=-Math.cos(E);c.x=b*_.x+C*S.x,c.y=b*_.y+C*S.y,c.z=b*_.z+C*S.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let _=1;_<=i;_++){const S=(i+1)*(y-1)+(_-1),T=(i+1)*y+(_-1),E=(i+1)*y+_,C=(i+1)*(y-1)+_;x.push(S,T,C),x.push(T,E,C)}}function v(){for(let y=0;y<=e;y++)for(let _=0;_<=i;_++)l.x=y/e,l.y=_/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Yi(new xo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Cp extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ve extends Ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gi extends ve{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Pp extends Ji{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ip extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zp extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class bo extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Lp extends bo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ra=new ye,kc=new A,Bc=new A;class Gl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nl,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(kc),Bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bc),e.updateMatrixWorld(),ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Dp extends Gl{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Ps*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Up extends bo{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Hc=new ye,Zs=new A,oa=new A;class Np extends Gl{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Zs),oa.copy(n.position),oa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(oa),n.updateMatrixWorld(),i.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc,n.coordinateSystem,n.reversedDepth)}}class wu extends bo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Np}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wl extends lu{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fp extends Gl{constructor(){super(new Wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Op extends bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Fp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class kp extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Bp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Vc=new ye;class Hp{constructor(t,e,n=0,i=1/0){this.ray=new iu(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vc),this}intersectObject(t,e=!0,n=[]){return pl(t,this,n,e),n.sort(Gc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)pl(t[i],this,n,e);return n.sort(Gc),n}}function Gc(s,t){return s.distance-t.distance}function pl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)pl(r[o],t,e,!0)}}function Wc(s,t,e,n){const i=Vp(n);switch(e){case Jh:return s*t;case Al:return s*t/i.components*i.byteLength;case Rl:return s*t/i.components*i.byteLength;case Qh:return s*t*2/i.components*i.byteLength;case Cl:return s*t*2/i.components*i.byteLength;case Kh:return s*t*3/i.components*i.byteLength;case Un:return s*t*4/i.components*i.byteLength;case Pl:return s*t*4/i.components*i.byteLength;case io:case so:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ro:case oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fa:case ka:return Math.max(s,16)*Math.max(t,8)/4;case Na:case Oa:return Math.max(s,8)*Math.max(t,8)/2;case Ba:case Ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ja:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case tl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case el:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case nl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case il:case sl:case rl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ol:case al:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ll:case cl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vp(s){switch(s){case jn:case qh:return{byteLength:1,components:1};case cr:case Zh:case ui:return{byteLength:2,components:1};case Tl:case El:return{byteLength:2,components:4};case Zi:case Sl:case Xn:return{byteLength:4,components:1};case jh:case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);function Su(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Gp(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){const x=u[f],m=u[d];m.start<=x.start+x.count+1?x.count=Math.max(x.count,m.start+m.count-x.start):(++f,u[f]=m)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){const m=u[d];s.bufferSubData(l,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,s0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,d0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",M0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,N0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,F0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,V0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Om=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Km=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ug=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Wp,alphahash_pars_fragment:Xp,alphamap_fragment:Yp,alphamap_pars_fragment:qp,alphatest_fragment:Zp,alphatest_pars_fragment:jp,aomap_fragment:$p,aomap_pars_fragment:Jp,batching_pars_vertex:Kp,batching_vertex:Qp,begin_vertex:t0,beginnormal_vertex:e0,bsdfs:n0,iridescence_fragment:i0,bumpmap_pars_fragment:s0,clipping_planes_fragment:r0,clipping_planes_pars_fragment:o0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:l0,color_fragment:c0,color_pars_fragment:h0,color_pars_vertex:u0,color_vertex:f0,common:d0,cube_uv_reflection_fragment:p0,defaultnormal_vertex:m0,displacementmap_pars_vertex:g0,displacementmap_vertex:x0,emissivemap_fragment:v0,emissivemap_pars_fragment:y0,colorspace_fragment:_0,colorspace_pars_fragment:M0,envmap_fragment:b0,envmap_common_pars_fragment:w0,envmap_pars_fragment:S0,envmap_pars_vertex:T0,envmap_physical_pars_fragment:N0,envmap_vertex:E0,fog_vertex:A0,fog_pars_vertex:R0,fog_fragment:C0,fog_pars_fragment:P0,gradientmap_pars_fragment:I0,lightmap_pars_fragment:z0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:D0,lights_pars_begin:U0,lights_toon_fragment:F0,lights_toon_pars_fragment:O0,lights_phong_fragment:k0,lights_phong_pars_fragment:B0,lights_physical_fragment:H0,lights_physical_pars_fragment:V0,lights_fragment_begin:G0,lights_fragment_maps:W0,lights_fragment_end:X0,logdepthbuf_fragment:Y0,logdepthbuf_pars_fragment:q0,logdepthbuf_pars_vertex:Z0,logdepthbuf_vertex:j0,map_fragment:$0,map_pars_fragment:J0,map_particle_fragment:K0,map_particle_pars_fragment:Q0,metalnessmap_fragment:tm,metalnessmap_pars_fragment:em,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:sm,morphtarget_pars_vertex:rm,morphtarget_vertex:om,normal_fragment_begin:am,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:xm,packing:vm,premultiplied_alpha_fragment:ym,project_vertex:_m,dithering_fragment:Mm,dithering_pars_fragment:bm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Em,shadowmap_vertex:Am,shadowmask_pars_fragment:Rm,skinbase_vertex:Cm,skinning_pars_vertex:Pm,skinning_vertex:Im,skinnormal_vertex:zm,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Um,tonemapping_pars_fragment:Nm,transmission_fragment:Fm,transmission_pars_fragment:Om,uv_pars_fragment:km,uv_pars_vertex:Bm,uv_vertex:Hm,worldpos_vertex:Vm,background_vert:Gm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:Ym,cube_vert:qm,cube_frag:Zm,depth_vert:jm,depth_frag:$m,distanceRGBA_vert:Jm,distanceRGBA_frag:Km,equirect_vert:Qm,equirect_frag:tg,linedashed_vert:eg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:og,meshmatcap_vert:ag,meshmatcap_frag:lg,meshnormal_vert:cg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:fg,meshphysical_vert:dg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:xg,points_frag:vg,shadow_vert:yg,shadow_frag:_g,sprite_vert:Mg,sprite_frag:bg},Mt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Vn={basic:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:rn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:rn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:rn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:rn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:rn([Mt.points,Mt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:rn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:rn([Mt.common,Mt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:rn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:rn([Mt.sprite,Mt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:rn([Mt.common,Mt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:rn([Mt.lights,Mt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Vn.physical={uniforms:rn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const jr={r:0,b:0,g:0},Oi=new On,wg=new ye;function Sg(s,t,e,n,i,r,o){const a=new Pt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function x(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function m(y){let _=!1;const S=x(y);S===null?p(a,c):S&&S.isColor&&(p(S,1),_=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,_){const S=x(_);S&&(S.isCubeTexture||S.mapping===vo)?(h===void 0&&(h=new $(new Xe(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Is(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Oi.copy(_.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(Oi)),h.material.toneMapped=ue.getTransfer(S.colorSpace)!==pe,(u!==S||f!==S.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new $(new bn(2,2),new Ve({name:"BackgroundMaterial",uniforms:Is(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ue.getTransfer(S.colorSpace)!==pe,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,_){y.getRGB(jr,au(s)),n.buffers.color.setClear(jr.r,jr.g,jr.b,_,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:m,addToRenderList:g,dispose:v}}function Tg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(M,P,z,N,U){let D=!1;const F=u(N,z,P);r!==F&&(r=F,l(r.object)),D=d(M,N,z,U),D&&x(M,N,z,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,_(M,P,z,N),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,P,z){const N=z.wireframe===!0;let U=n[M.id];U===void 0&&(U={},n[M.id]=U);let D=U[P.id];D===void 0&&(D={},U[P.id]=D);let F=D[N];return F===void 0&&(F=f(c()),D[N]=F),F}function f(M){const P=[],z=[],N=[];for(let U=0;U<e;U++)P[U]=0,z[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:N,object:M,attributes:{},index:null}}function d(M,P,z,N){const U=r.attributes,D=P.attributes;let F=0;const Z=z.getAttributes();for(const W in Z)if(Z[W].location>=0){const yt=U[W];let Et=D[W];if(Et===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor)),yt===void 0||yt.attribute!==Et||Et&&yt.data!==Et.data)return!0;F++}return r.attributesNum!==F||r.index!==N}function x(M,P,z,N){const U={},D=P.attributes;let F=0;const Z=z.getAttributes();for(const W in Z)if(Z[W].location>=0){let yt=D[W];yt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor));const Et={};Et.attribute=yt,yt&&yt.data&&(Et.data=yt.data),U[W]=Et,F++}r.attributes=U,r.attributesNum=F,r.index=N}function m(){const M=r.newAttributes;for(let P=0,z=M.length;P<z;P++)M[P]=0}function g(M){p(M,0)}function p(M,P){const z=r.newAttributes,N=r.enabledAttributes,U=r.attributeDivisors;z[M]=1,N[M]===0&&(s.enableVertexAttribArray(M),N[M]=1),U[M]!==P&&(s.vertexAttribDivisor(M,P),U[M]=P)}function v(){const M=r.newAttributes,P=r.enabledAttributes;for(let z=0,N=P.length;z<N;z++)P[z]!==M[z]&&(s.disableVertexAttribArray(z),P[z]=0)}function y(M,P,z,N,U,D,F){F===!0?s.vertexAttribIPointer(M,P,z,U,D):s.vertexAttribPointer(M,P,z,N,U,D)}function _(M,P,z,N){m();const U=N.attributes,D=z.getAttributes(),F=P.defaultAttributeValues;for(const Z in D){const W=D[Z];if(W.location>=0){let dt=U[Z];if(dt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),dt!==void 0){const yt=dt.normalized,Et=dt.itemSize,Yt=t.get(dt);if(Yt===void 0)continue;const ne=Yt.buffer,le=Yt.type,se=Yt.bytesPerElement,Q=le===s.INT||le===s.UNSIGNED_INT||dt.gpuType===Sl;if(dt.isInterleavedBufferAttribute){const ot=dt.data,Rt=ot.stride,kt=dt.offset;if(ot.isInstancedInterleavedBuffer){for(let zt=0;zt<W.locationSize;zt++)p(W.location+zt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let zt=0;zt<W.locationSize;zt++)g(W.location+zt);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let zt=0;zt<W.locationSize;zt++)y(W.location+zt,Et/W.locationSize,le,yt,Rt*se,(kt+Et/W.locationSize*zt)*se,Q)}else{if(dt.isInstancedBufferAttribute){for(let ot=0;ot<W.locationSize;ot++)p(W.location+ot,dt.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let ot=0;ot<W.locationSize;ot++)g(W.location+ot);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let ot=0;ot<W.locationSize;ot++)y(W.location+ot,Et/W.locationSize,le,yt,Et*se,Et/W.locationSize*ot*se,Q)}}else if(F!==void 0){const yt=F[Z];if(yt!==void 0)switch(yt.length){case 2:s.vertexAttrib2fv(W.location,yt);break;case 3:s.vertexAttrib3fv(W.location,yt);break;case 4:s.vertexAttrib4fv(W.location,yt);break;default:s.vertexAttrib1fv(W.location,yt)}}}}v()}function S(){C();for(const M in n){const P=n[M];for(const z in P){const N=P[z];for(const U in N)h(N[U].object),delete N[U];delete P[z]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const z in P){const N=P[z];for(const U in N)h(N[U].object),delete N[U];delete P[z]}delete n[M.id]}function E(M){for(const P in n){const z=n[P];if(z[M.id]===void 0)continue;const N=z[M.id];for(const U in N)h(N[U].object),delete N[U];delete z[M.id]}}function C(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:m,enableAttribute:g,disableUnusedAttributes:v}}function Eg(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)o(l[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let x=0;for(let m=0;m<u;m++)x+=h[m]*f[m];e.update(x,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ag(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Un&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==jn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Xn&&!C)}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=x>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:S,maxSamples:T}}function Rg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Ti,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const x=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||x===null||x.length===0||r&&!g)r?h(null):l();else{const v=r?0:n,y=v*4;let _=p.clippingState||null;c.value=_,_=h(x,f,y,d);for(let S=0;S!==y;++S)_[S]=e[S];p.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,x){const m=u!==null?u.length:0;let g=null;if(m!==0){if(g=c.value,x!==!0||g===null){const p=d+m*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=d;y!==m;++y,_+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,g}}function Cg(s){let t=new WeakMap;function e(o,a){return a===La?o.mapping=As:a===Da&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===La||a===Da)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Xd(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ms=4,Xc=[.125,.215,.35,.446,.526,.582],Gi=20,aa=new Wl,Yc=new Pt;let la=null,ca=0,ha=0,ua=!1;const Bi=(1+Math.sqrt(5))/2,vs=1/Bi,qc=[new A(-Bi,vs,0),new A(Bi,vs,0),new A(-vs,0,Bi),new A(vs,0,Bi),new A(0,Bi,-vs),new A(0,Bi,vs),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Pg=new A;class ml{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Pg}=r;la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(la,ca,ha),this._renderer.xr.enabled=ua,t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ha=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:ui,format:Un,colorSpace:Cs,depthBuffer:!1},i=Zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ig(r)),this._blurMaterial=zg(r,t,e)}return i}_compileMaterial(t){const e=new $(this._lodPlanes[0],t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,i,r){const c=new un(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Yc),u.toneMapping=Ri,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const m=new kn({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new $(new Xe,m);let p=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(Yc),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):_===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const S=this._cubeSize;$r(i,_*S,y>2?S:0,S,S),u.setRenderTarget(i),p&&u.render(g,c),u.render(t,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===As||t.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new $(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;$r(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qc[(i-r-1)%qc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gi-1),m=r/x,g=isFinite(r)?1+Math.floor(h*m):Gi;g>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gi}`);const p=[];let v=0;for(let E=0;E<Gi;++E){const C=E/m,b=Math.exp(-C*C/2);p.push(b),E===0?v+=b:E<g&&(v+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-n;const _=this._sizeLods[i],S=3*_*(i>y-Ms?i-y+Ms:0),T=4*(this._cubeSize-_);$r(e,S,T,3*_,2*_),c.setRenderTarget(e),c.render(u,aa)}}function Ig(s){const t=[],e=[],n=[];let i=s;const r=s-Ms+1+Xc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ms?c=Xc[o-s+Ms-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,m=3,g=2,p=1,v=new Float32Array(m*x*d),y=new Float32Array(g*x*d),_=new Float32Array(p*x*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,C=T>2?0:-1,b=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];v.set(b,m*x*T),y.set(f,g*x*T);const M=[T,T,T,T,T,T];_.set(M,p*x*T)}const S=new Oe;S.setAttribute("position",new He(v,m)),S.setAttribute("uv",new He(y,g)),S.setAttribute("faceIndex",new He(_,p)),t.push(S),i>Ms&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zc(s,t,e){const n=new Nn(s,t,e);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function zg(s,t,e){const n=new Float32Array(Gi),i=new A(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function jc(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function $c(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===La||c===Da,h=c===As||c===Rs;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ml(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new ml(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ug(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,x=u.attributes.position;let m=0;if(d!==null){const v=d.array;m=d.version;for(let y=0,_=v.length;y<_;y+=3){const S=v[y+0],T=v[y+1],E=v[y+2];f.push(S,T,T,E,E,S)}}else if(x!==void 0){const v=x.array;m=x.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const S=y+0,T=y+1,E=y+2;f.push(S,T,T,E,E,S)}}else return;const g=new(eu(f)?ou:ru)(f,1);g.version=m;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ng(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,x){x!==0&&(s.drawElementsInstanced(n,d,r,f*o,x),e.update(d,n,x))}function h(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,x);let g=0;for(let p=0;p<x;p++)g+=d[p];e.update(g,n,1)}function u(f,d,x,m){if(x===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],m[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,m,0,x);let p=0;for(let v=0;v<x;v++)p+=d[v]*m[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Fg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Og(s,t,e){const n=new WeakMap,i=new xe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let b=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let _=a.attributes.position.count*y,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const T=new Float32Array(_*S*4*u),E=new nu(T,_,S,u);E.type=Xn,E.needsUpdate=!0;const C=y*4;for(let M=0;M<u;M++){const P=g[M],z=p[M],N=v[M],U=_*S*4*M;for(let D=0;D<P.count;D++){const F=D*C;d===!0&&(i.fromBufferAttribute(P,D),T[U+F+0]=i.x,T[U+F+1]=i.y,T[U+F+2]=i.z,T[U+F+3]=0),x===!0&&(i.fromBufferAttribute(z,D),T[U+F+4]=i.x,T[U+F+5]=i.y,T[U+F+6]=i.z,T[U+F+7]=0),m===!0&&(i.fromBufferAttribute(N,D),T[U+F+8]=i.x,T[U+F+9]=i.y,T[U+F+10]=i.z,T[U+F+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new K(_,S)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];const x=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function kg(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Tu=new en,Jc=new fu(1,1),Eu=new nu,Au=new Cd,Ru=new cu,Kc=[],Qc=[],th=new Float32Array(16),eh=new Float32Array(9),nh=new Float32Array(4);function Ns(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Kc[i];if(r===void 0&&(r=new Float32Array(i),Kc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function qe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function wo(s,t){let e=Qc[t];e===void 0&&(e=new Int32Array(t),Qc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Bg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2fv(this.addr,t),qe(e,t)}}function Vg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;s.uniform3fv(this.addr,t),qe(e,t)}}function Gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4fv(this.addr,t),qe(e,t)}}function Wg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;nh.set(n),s.uniformMatrix2fv(this.addr,!1,nh),qe(e,n)}}function Xg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;eh.set(n),s.uniformMatrix3fv(this.addr,!1,eh),qe(e,n)}}function Yg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;th.set(n),s.uniformMatrix4fv(this.addr,!1,th),qe(e,n)}}function qg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Zg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2iv(this.addr,t),qe(e,t)}}function jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3iv(this.addr,t),qe(e,t)}}function $g(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4iv(this.addr,t),qe(e,t)}}function Jg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Kg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2uiv(this.addr,t),qe(e,t)}}function Qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3uiv(this.addr,t),qe(e,t)}}function tx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4uiv(this.addr,t),qe(e,t)}}function ex(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Jc.compareFunction=tu,r=Jc):r=Tu,e.setTexture2D(t||r,i)}function nx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Au,i)}function ix(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ru,i)}function sx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Eu,i)}function rx(s){switch(s){case 5126:return Bg;case 35664:return Hg;case 35665:return Vg;case 35666:return Gg;case 35674:return Wg;case 35675:return Xg;case 35676:return Yg;case 5124:case 35670:return qg;case 35667:case 35671:return Zg;case 35668:case 35672:return jg;case 35669:case 35673:return $g;case 5125:return Jg;case 36294:return Kg;case 36295:return Qg;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}function ox(s,t){s.uniform1fv(this.addr,t)}function ax(s,t){const e=Ns(t,this.size,2);s.uniform2fv(this.addr,e)}function lx(s,t){const e=Ns(t,this.size,3);s.uniform3fv(this.addr,e)}function cx(s,t){const e=Ns(t,this.size,4);s.uniform4fv(this.addr,e)}function hx(s,t){const e=Ns(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ux(s,t){const e=Ns(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function fx(s,t){const e=Ns(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function dx(s,t){s.uniform1iv(this.addr,t)}function px(s,t){s.uniform2iv(this.addr,t)}function mx(s,t){s.uniform3iv(this.addr,t)}function gx(s,t){s.uniform4iv(this.addr,t)}function xx(s,t){s.uniform1uiv(this.addr,t)}function vx(s,t){s.uniform2uiv(this.addr,t)}function yx(s,t){s.uniform3uiv(this.addr,t)}function _x(s,t){s.uniform4uiv(this.addr,t)}function Mx(s,t,e){const n=this.cache,i=t.length,r=wo(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Tu,r[o])}function bx(s,t,e){const n=this.cache,i=t.length,r=wo(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Au,r[o])}function wx(s,t,e){const n=this.cache,i=t.length,r=wo(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ru,r[o])}function Sx(s,t,e){const n=this.cache,i=t.length,r=wo(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Eu,r[o])}function Tx(s){switch(s){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return xx;case 36294:return vx;case 36295:return yx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return Mx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Sx}}class Ex{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rx(e.type)}}class Ax{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tx(e.type)}}class Rx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function ih(s,t){s.seq.push(t),s.map[t.id]=t}function Cx(s,t,e){const n=s.name,i=n.length;for(fa.lastIndex=0;;){const r=fa.exec(n),o=fa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ih(e,l===void 0?new Ex(a,s,t):new Ax(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Rx(a),ih(e,u)),e=u}}}class ao{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Cx(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function sh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Px=37297;let Ix=0;function zx(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const rh=new Kt;function Lx(s){ue._getMatrix(rh,ue.workingColorSpace,s);const t=`mat3( ${rh.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(s)){case uo:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function oh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+zx(s.getShaderSource(t),a)}else return r}function Dx(s,t){const e=Lx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ux(s,t){let e;switch(t){case Bh:e="Linear";break;case Hh:e="Reinhard";break;case Vh:e="Cineon";break;case wl:e="ACESFilmic";break;case Wh:e="AgX";break;case Xh:e="Neutral";break;case Gh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Jr=new A;function Nx(){ue.getLuminanceCoefficients(Jr);const s=Jr.x.toFixed(4),t=Jr.y.toFixed(4),e=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function Ox(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kx(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function tr(s){return s!==""}function ah(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(s){return s.replace(Bx,Vx)}const Hx=new Map;function Vx(s,t){let e=Qt[t];if(e===void 0){const n=Hx.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gl(e)}const Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(s){return s.replace(Gx,Wx)}function Wx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function hh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Oh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===kh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function Yx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case As:case Rs:t="ENVMAP_TYPE_CUBE";break;case vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qx(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Rs&&(t="ENVMAP_MODE_REFRACTION"),t}function Zx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case bl:t="ENVMAP_BLENDING_MULTIPLY";break;case Yf:t="ENVMAP_BLENDING_MIX";break;case qf:t="ENVMAP_BLENDING_ADD";break}return t}function jx(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $x(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Xx(e),l=Yx(e),h=qx(e),u=Zx(e),f=jx(e),d=Fx(e),x=Ox(r),m=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(tr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(tr).join(`
`),p.length>0&&(p+=`
`)):(g=[hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),p=[hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?Ux("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),Nx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),o=gl(o),o=ah(o,e),o=lh(o,e),a=gl(a),a=ah(a,e),a=lh(a,e),o=ch(o),a=ch(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+o,_=v+p+a,S=sh(i,i.VERTEX_SHADER,y),T=sh(i,i.FRAGMENT_SHADER,_);i.attachShader(m,S),i.attachShader(m,T),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(P){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(m)||"",N=i.getShaderInfoLog(S)||"",U=i.getShaderInfoLog(T)||"",D=z.trim(),F=N.trim(),Z=U.trim();let W=!0,dt=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,S,T);else{const yt=oh(i,S,"vertex"),Et=oh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+yt+`
`+Et)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(F===""||Z==="")&&(dt=!1);dt&&(P.diagnostics={runnable:W,programLog:D,vertexShader:{log:F,prefix:g},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(S),i.deleteShader(T),C=new ao(i,m),b=kx(i,m)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(m,Px)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ix++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=T,this}let Jx=0;class Kx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Qx(t),e.set(t,n)),n}}class Qx{constructor(t){this.id=Jx++,this.code=t,this.usedTimes=0}}function tv(s,t,e,n,i,r,o){const a=new Dl,c=new Kx,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,M,P,z,N){const U=z.fog,D=N.geometry,F=b.isMeshStandardMaterial?z.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||F),W=Z&&Z.mapping===vo?Z.image.height:null,dt=x[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const yt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Et=yt!==void 0?yt.length:0;let Yt=0;D.morphAttributes.position!==void 0&&(Yt=1),D.morphAttributes.normal!==void 0&&(Yt=2),D.morphAttributes.color!==void 0&&(Yt=3);let ne,le,se,Q;if(dt){const de=Vn[dt];ne=de.vertexShader,le=de.fragmentShader}else ne=b.vertexShader,le=b.fragmentShader,c.update(b),se=c.getVertexShaderID(b),Q=c.getFragmentShaderID(b);const ot=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),kt=N.isInstancedMesh===!0,zt=N.isBatchedMesh===!0,re=!!b.map,Se=!!b.matcap,L=!!Z,rt=!!b.aoMap,nt=!!b.lightMap,et=!!b.bumpMap,tt=!!b.normalMap,xt=!!b.displacementMap,lt=!!b.emissiveMap,vt=!!b.metalnessMap,Zt=!!b.roughnessMap,qt=b.anisotropy>0,I=b.clearcoat>0,w=b.dispersion>0,V=b.iridescence>0,j=b.sheen>0,st=b.transmission>0,J=qt&&!!b.anisotropyMap,Nt=I&&!!b.clearcoatMap,mt=I&&!!b.clearcoatNormalMap,Lt=I&&!!b.clearcoatRoughnessMap,Dt=V&&!!b.iridescenceMap,ct=V&&!!b.iridescenceThicknessMap,St=j&&!!b.sheenColorMap,Wt=j&&!!b.sheenRoughnessMap,Ot=!!b.specularMap,bt=!!b.specularColorMap,Jt=!!b.specularIntensityMap,O=st&&!!b.transmissionMap,pt=st&&!!b.thicknessMap,_t=!!b.gradientMap,Ct=!!b.alphaMap,ht=b.alphaTest>0,it=!!b.alphaHash,Ut=!!b.extensions;let jt=Ri;b.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(jt=s.toneMapping);const Te={shaderID:dt,shaderType:b.type,shaderName:b.name,vertexShader:ne,fragmentShader:le,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:Q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:zt,batchingColor:zt&&N._colorsTexture!==null,instancing:kt,instancingColor:kt&&N.instanceColor!==null,instancingMorph:kt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Cs,alphaToCoverage:!!b.alphaToCoverage,map:re,matcap:Se,envMap:L,envMapMode:L&&Z.mapping,envMapCubeUVHeight:W,aoMap:rt,lightMap:nt,bumpMap:et,normalMap:tt,displacementMap:f&&xt,emissiveMap:lt,normalMapObjectSpace:tt&&b.normalMapType===Jf,normalMapTangentSpace:tt&&b.normalMapType===Il,metalnessMap:vt,roughnessMap:Zt,anisotropy:qt,anisotropyMap:J,clearcoat:I,clearcoatMap:Nt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Lt,dispersion:w,iridescence:V,iridescenceMap:Dt,iridescenceThicknessMap:ct,sheen:j,sheenColorMap:St,sheenRoughnessMap:Wt,specularMap:Ot,specularColorMap:bt,specularIntensityMap:Jt,transmission:st,transmissionMap:O,thicknessMap:pt,gradientMap:_t,opaque:b.transparent===!1&&b.blending===Ai&&b.alphaToCoverage===!1,alphaMap:Ct,alphaTest:ht,alphaHash:it,combine:b.combine,mapUv:re&&m(b.map.channel),aoMapUv:rt&&m(b.aoMap.channel),lightMapUv:nt&&m(b.lightMap.channel),bumpMapUv:et&&m(b.bumpMap.channel),normalMapUv:tt&&m(b.normalMap.channel),displacementMapUv:xt&&m(b.displacementMap.channel),emissiveMapUv:lt&&m(b.emissiveMap.channel),metalnessMapUv:vt&&m(b.metalnessMap.channel),roughnessMapUv:Zt&&m(b.roughnessMap.channel),anisotropyMapUv:J&&m(b.anisotropyMap.channel),clearcoatMapUv:Nt&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:mt&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:St&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&m(b.sheenRoughnessMap.channel),specularMapUv:Ot&&m(b.specularMap.channel),specularColorMapUv:bt&&m(b.specularColorMap.channel),specularIntensityMapUv:Jt&&m(b.specularIntensityMap.channel),transmissionMapUv:O&&m(b.transmissionMap.channel),thicknessMapUv:pt&&m(b.thicknessMap.channel),alphaMapUv:Ct&&m(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(tt||qt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(re||Ct),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Rt,skinning:N.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Yt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,decodeVideoTexture:re&&b.map.isVideoTexture===!0&&ue.getTransfer(b.map.colorSpace)===pe,decodeVideoTextureEmissive:lt&&b.emissiveMap.isVideoTexture===!0&&ue.getTransfer(b.emissiveMap.colorSpace)===pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===be,flipSided:b.side===Je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ut&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&b.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const M=x[b.type];let P;if(M){const z=Vn[M];P=pr.clone(z.uniforms)}else P=b.uniforms;return P}function S(b,M){let P;for(let z=0,N=h.length;z<N;z++){const U=h[z];if(U.cacheKey===M){P=U,++P.usedTimes;break}}return P===void 0&&(P=new $x(s,M,b,r),h.push(P)),P}function T(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function E(b){c.remove(b)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:C}}function ev(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function nv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function uh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,x,m,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=m,p.group=g),t++,p}function a(u,f,d,x,m,g){const p=o(u,f,d,x,m,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,x,m,g){const p=o(u,f,d,x,m,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||nv),n.length>1&&n.sort(f||uh),i.length>1&&i.sort(f||uh)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function iv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new fh,s.set(n,[o])):i>=r.length?(o=new fh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function sv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Pt};break;case"SpotLight":e={position:new A,direction:new A,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function rv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let ov=0;function av(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function lv(s){const t=new sv,e=rv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,r=new ye,o=new ye;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,x=0,m=0,g=0,p=0,v=0,y=0,_=0,S=0,T=0,E=0;l.sort(av);for(let b=0,M=l.length;b<M;b++){const P=l[b],z=P.color,N=P.intensity,U=P.distance,D=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*N,u+=z.g*N,f+=z.b*N;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],N);E++}else if(P.isDirectionalLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,W=e.get(P);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=D,n.directionalShadowMatrix[d]=P.shadow.matrix,v++}n.directional[d]=F,d++}else if(P.isSpotLight){const F=t.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(z).multiplyScalar(N),F.distance=U,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[m]=F;const Z=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,Z.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[m]=Z.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[m]=W,n.spotShadowMap[m]=D,_++}m++}else if(P.isRectAreaLight){const F=t.get(P);F.color.copy(z).multiplyScalar(N),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=F,g++}else if(P.isPointLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const Z=P.shadow,W=e.get(P);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=D,n.pointShadowMatrix[x]=P.shadow.matrix,y++}n.point[x]=F,x++}else if(P.isHemisphereLight){const F=t.get(P);F.skyColor.copy(P.color).multiplyScalar(N),F.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=F,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==x||C.spotLength!==m||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==_||C.numSpotMaps!==S||C.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=g,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,C.directionalLength=d,C.pointLength=x,C.spotLength=m,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=_,C.numSpotMaps=S,C.numLightProbes=E,n.version=ov++)}function c(l,h){let u=0,f=0,d=0,x=0,m=0;const g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const _=n.rectArea[x];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const _=n.hemi[m];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function dh(s){const t=new lv(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function cv(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new dh(s),t.set(i,[a])):r>=o.length?(a=new dh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fv(s,t,e){let n=new Nl;const i=new K,r=new K,o=new xe,a=new Ip({depthPacking:$f}),c=new zp,l={},h=e.maxTextureSize,u={[Pi]:Je,[Je]:Pi,[be]:be},f=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:hv,fragmentShader:uv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const x=new Oe;x.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new $(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oh;let p=this.type;this.render=function(T,E,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const b=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),z=s.state;z.setBlending(hi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=p!==si&&this.type===si,U=p===si&&this.type!==si;for(let D=0,F=T.length;D<F;D++){const Z=T[D],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const dt=W.getFrameExtents();if(i.multiply(dt),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/dt.x),i.x=r.x*dt.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/dt.y),i.y=r.y*dt.y,W.mapSize.y=r.y)),W.map===null||N===!0||U===!0){const Et=this.type!==si?{minFilter:Mn,magFilter:Mn}:{};W.map!==null&&W.map.dispose(),W.map=new Nn(i.x,i.y,Et),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const yt=W.getViewportCount();for(let Et=0;Et<yt;Et++){const Yt=W.getViewport(Et);o.set(r.x*Yt.x,r.y*Yt.y,r.x*Yt.z,r.y*Yt.w),z.viewport(o),W.updateMatrices(Z,Et),n=W.getFrustum(),_(E,C,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===si&&v(W,C),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,M,P)};function v(T,E){const C=t.update(m);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Nn(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,C,f,m,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,C,d,m,null)}function y(T,E,C,b){let M=null;const P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const z=M.uuid,N=E.uuid;let U=l[z];U===void 0&&(U={},l[z]=U);let D=U[N];D===void 0&&(D=M.clone(),U[N]=D,E.addEventListener("dispose",S)),M=D}if(M.visible=E.visible,M.wireframe=E.wireframe,b===si?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=s.properties.get(M);z.light=C}return M}function _(T,E,C,b,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===si)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const N=t.update(T),U=T.material;if(Array.isArray(U)){const D=N.groups;for(let F=0,Z=D.length;F<Z;F++){const W=D[F],dt=U[W.materialIndex];if(dt&&dt.visible){const yt=y(T,dt,b,M);T.onBeforeShadow(s,T,E,C,N,yt,W),s.renderBufferDirect(C,null,N,yt,T,W),T.onAfterShadow(s,T,E,C,N,yt,W)}}}else if(U.visible){const D=y(T,U,b,M);T.onBeforeShadow(s,T,E,C,N,D,null),s.renderBufferDirect(C,null,N,D,T,null),T.onAfterShadow(s,T,E,C,N,D,null)}}const z=T.children;for(let N=0,U=z.length;N<U;N++)_(z[N],E,C,b,M)}function S(T){T.target.removeEventListener("dispose",S);for(const C in l){const b=l[C],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const dv={[Ea]:Aa,[Ra]:Ia,[Ca]:za,[Es]:Pa,[Aa]:Ea,[Ia]:Ra,[za]:Ca,[Pa]:Es};function pv(s,t){function e(){let O=!1;const pt=new xe;let _t=null;const Ct=new xe(0,0,0,0);return{setMask:function(ht){_t!==ht&&!O&&(s.colorMask(ht,ht,ht,ht),_t=ht)},setLocked:function(ht){O=ht},setClear:function(ht,it,Ut,jt,Te){Te===!0&&(ht*=jt,it*=jt,Ut*=jt),pt.set(ht,it,Ut,jt),Ct.equals(pt)===!1&&(s.clearColor(ht,it,Ut,jt),Ct.copy(pt))},reset:function(){O=!1,_t=null,Ct.set(-1,0,0,0)}}}function n(){let O=!1,pt=!1,_t=null,Ct=null,ht=null;return{setReversed:function(it){if(pt!==it){const Ut=t.get("EXT_clip_control");it?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),pt=it;const jt=ht;ht=null,this.setClear(jt)}},getReversed:function(){return pt},setTest:function(it){it?ot(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(it){_t!==it&&!O&&(s.depthMask(it),_t=it)},setFunc:function(it){if(pt&&(it=dv[it]),Ct!==it){switch(it){case Ea:s.depthFunc(s.NEVER);break;case Aa:s.depthFunc(s.ALWAYS);break;case Ra:s.depthFunc(s.LESS);break;case Es:s.depthFunc(s.LEQUAL);break;case Ca:s.depthFunc(s.EQUAL);break;case Pa:s.depthFunc(s.GEQUAL);break;case Ia:s.depthFunc(s.GREATER);break;case za:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ct=it}},setLocked:function(it){O=it},setClear:function(it){ht!==it&&(pt&&(it=1-it),s.clearDepth(it),ht=it)},reset:function(){O=!1,_t=null,Ct=null,ht=null,pt=!1}}}function i(){let O=!1,pt=null,_t=null,Ct=null,ht=null,it=null,Ut=null,jt=null,Te=null;return{setTest:function(de){O||(de?ot(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(de){pt!==de&&!O&&(s.stencilMask(de),pt=de)},setFunc:function(de,Kn,Hn){(_t!==de||Ct!==Kn||ht!==Hn)&&(s.stencilFunc(de,Kn,Hn),_t=de,Ct=Kn,ht=Hn)},setOp:function(de,Kn,Hn){(it!==de||Ut!==Kn||jt!==Hn)&&(s.stencilOp(de,Kn,Hn),it=de,Ut=Kn,jt=Hn)},setLocked:function(de){O=de},setClear:function(de){Te!==de&&(s.clearStencil(de),Te=de)},reset:function(){O=!1,pt=null,_t=null,Ct=null,ht=null,it=null,Ut=null,jt=null,Te=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],x=null,m=!1,g=null,p=null,v=null,y=null,_=null,S=null,T=null,E=new Pt(0,0,0),C=0,b=!1,M=null,P=null,z=null,N=null,U=null;const D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Z=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=Z>=2);let dt=null,yt={};const Et=s.getParameter(s.SCISSOR_BOX),Yt=s.getParameter(s.VIEWPORT),ne=new xe().fromArray(Et),le=new xe().fromArray(Yt);function se(O,pt,_t,Ct){const ht=new Uint8Array(4),it=s.createTexture();s.bindTexture(O,it),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<_t;Ut++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,Ct,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(pt+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return it}const Q={};Q[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(s.DEPTH_TEST),o.setFunc(Es),et(!1),tt(ac),ot(s.CULL_FACE),rt(hi);function ot(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Rt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function kt(O,pt){return u[O]!==pt?(s.bindFramebuffer(O,pt),u[O]=pt,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function zt(O,pt){let _t=d,Ct=!1;if(O){_t=f.get(pt),_t===void 0&&(_t=[],f.set(pt,_t));const ht=O.textures;if(_t.length!==ht.length||_t[0]!==s.COLOR_ATTACHMENT0){for(let it=0,Ut=ht.length;it<Ut;it++)_t[it]=s.COLOR_ATTACHMENT0+it;_t.length=ht.length,Ct=!0}}else _t[0]!==s.BACK&&(_t[0]=s.BACK,Ct=!0);Ct&&s.drawBuffers(_t)}function re(O){return x!==O?(s.useProgram(O),x=O,!0):!1}const Se={[Vi]:s.FUNC_ADD,[Cf]:s.FUNC_SUBTRACT,[Pf]:s.FUNC_REVERSE_SUBTRACT};Se[If]=s.MIN,Se[zf]=s.MAX;const L={[Lf]:s.ZERO,[Df]:s.ONE,[Uf]:s.SRC_COLOR,[Sa]:s.SRC_ALPHA,[Hf]:s.SRC_ALPHA_SATURATE,[kf]:s.DST_COLOR,[Ff]:s.DST_ALPHA,[Nf]:s.ONE_MINUS_SRC_COLOR,[Ta]:s.ONE_MINUS_SRC_ALPHA,[Bf]:s.ONE_MINUS_DST_COLOR,[Of]:s.ONE_MINUS_DST_ALPHA,[Vf]:s.CONSTANT_COLOR,[Gf]:s.ONE_MINUS_CONSTANT_COLOR,[Wf]:s.CONSTANT_ALPHA,[Xf]:s.ONE_MINUS_CONSTANT_ALPHA};function rt(O,pt,_t,Ct,ht,it,Ut,jt,Te,de){if(O===hi){m===!0&&(Rt(s.BLEND),m=!1);return}if(m===!1&&(ot(s.BLEND),m=!0),O!==Rf){if(O!==g||de!==b){if((p!==Vi||_!==Vi)&&(s.blendEquation(s.FUNC_ADD),p=Vi,_=Vi),de)switch(O){case Ai:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fn:s.blendFunc(s.ONE,s.ONE);break;case lc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case lc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,y=null,S=null,T=null,E.set(0,0,0),C=0,g=O,b=de}return}ht=ht||pt,it=it||_t,Ut=Ut||Ct,(pt!==p||ht!==_)&&(s.blendEquationSeparate(Se[pt],Se[ht]),p=pt,_=ht),(_t!==v||Ct!==y||it!==S||Ut!==T)&&(s.blendFuncSeparate(L[_t],L[Ct],L[it],L[Ut]),v=_t,y=Ct,S=it,T=Ut),(jt.equals(E)===!1||Te!==C)&&(s.blendColor(jt.r,jt.g,jt.b,Te),E.copy(jt),C=Te),g=O,b=!1}function nt(O,pt){O.side===be?Rt(s.CULL_FACE):ot(s.CULL_FACE);let _t=O.side===Je;pt&&(_t=!_t),et(_t),O.blending===Ai&&O.transparent===!1?rt(hi):rt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Ct=O.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),lt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(O){M!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),M=O)}function tt(O){O!==Ef?(ot(s.CULL_FACE),O!==P&&(O===ac?s.cullFace(s.BACK):O===Af?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),P=O}function xt(O){O!==z&&(F&&s.lineWidth(O),z=O)}function lt(O,pt,_t){O?(ot(s.POLYGON_OFFSET_FILL),(N!==pt||U!==_t)&&(s.polygonOffset(pt,_t),N=pt,U=_t)):Rt(s.POLYGON_OFFSET_FILL)}function vt(O){O?ot(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function Zt(O){O===void 0&&(O=s.TEXTURE0+D-1),dt!==O&&(s.activeTexture(O),dt=O)}function qt(O,pt,_t){_t===void 0&&(dt===null?_t=s.TEXTURE0+D-1:_t=dt);let Ct=yt[_t];Ct===void 0&&(Ct={type:void 0,texture:void 0},yt[_t]=Ct),(Ct.type!==O||Ct.texture!==pt)&&(dt!==_t&&(s.activeTexture(_t),dt=_t),s.bindTexture(O,pt||Q[O]),Ct.type=O,Ct.texture=pt)}function I(){const O=yt[dt];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{s.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{s.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{s.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{s.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{s.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{s.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{s.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{s.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{s.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(O){ne.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ne.copy(O))}function Wt(O){le.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),le.copy(O))}function Ot(O,pt){let _t=l.get(pt);_t===void 0&&(_t=new WeakMap,l.set(pt,_t));let Ct=_t.get(O);Ct===void 0&&(Ct=s.getUniformBlockIndex(pt,O.name),_t.set(O,Ct))}function bt(O,pt){const Ct=l.get(pt).get(O);c.get(pt)!==Ct&&(s.uniformBlockBinding(pt,Ct,O.__bindingPointIndex),c.set(pt,Ct))}function Jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},dt=null,yt={},u={},f=new WeakMap,d=[],x=null,m=!1,g=null,p=null,v=null,y=null,_=null,S=null,T=null,E=new Pt(0,0,0),C=0,b=!1,M=null,P=null,z=null,N=null,U=null,ne.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Rt,bindFramebuffer:kt,drawBuffers:zt,useProgram:re,setBlending:rt,setMaterial:nt,setFlipSided:et,setCullFace:tt,setLineWidth:xt,setPolygonOffset:lt,setScissorTest:vt,activeTexture:Zt,bindTexture:qt,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:V,texImage2D:Dt,texImage3D:ct,updateUBOMapping:Ot,uniformBlockBinding:bt,texStorage2D:mt,texStorage3D:Lt,texSubImage2D:j,texSubImage3D:st,compressedTexSubImage2D:J,compressedTexSubImage3D:Nt,scissor:St,viewport:Wt,reset:Jt}}function mv(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,w){return d?new OffscreenCanvas(I,w):po("canvas")}function m(I,w,V){let j=1;const st=qt(I);if((st.width>V||st.height>V)&&(j=V/Math.max(st.width,st.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const J=Math.floor(j*st.width),Nt=Math.floor(j*st.height);u===void 0&&(u=x(J,Nt));const mt=w?x(J,Nt):u;return mt.width=J,mt.height=Nt,mt.getContext("2d").drawImage(I,0,0,J,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+J+"x"+Nt+")."),mt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,w,V,j,st=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let J=w;if(w===s.RED&&(V===s.FLOAT&&(J=s.R32F),V===s.HALF_FLOAT&&(J=s.R16F),V===s.UNSIGNED_BYTE&&(J=s.R8)),w===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.R8UI),V===s.UNSIGNED_SHORT&&(J=s.R16UI),V===s.UNSIGNED_INT&&(J=s.R32UI),V===s.BYTE&&(J=s.R8I),V===s.SHORT&&(J=s.R16I),V===s.INT&&(J=s.R32I)),w===s.RG&&(V===s.FLOAT&&(J=s.RG32F),V===s.HALF_FLOAT&&(J=s.RG16F),V===s.UNSIGNED_BYTE&&(J=s.RG8)),w===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RG8UI),V===s.UNSIGNED_SHORT&&(J=s.RG16UI),V===s.UNSIGNED_INT&&(J=s.RG32UI),V===s.BYTE&&(J=s.RG8I),V===s.SHORT&&(J=s.RG16I),V===s.INT&&(J=s.RG32I)),w===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGB8UI),V===s.UNSIGNED_SHORT&&(J=s.RGB16UI),V===s.UNSIGNED_INT&&(J=s.RGB32UI),V===s.BYTE&&(J=s.RGB8I),V===s.SHORT&&(J=s.RGB16I),V===s.INT&&(J=s.RGB32I)),w===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),V===s.UNSIGNED_INT&&(J=s.RGBA32UI),V===s.BYTE&&(J=s.RGBA8I),V===s.SHORT&&(J=s.RGBA16I),V===s.INT&&(J=s.RGBA32I)),w===s.RGB&&(V===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),w===s.RGBA){const Nt=st?uo:ue.getTransfer(j);V===s.FLOAT&&(J=s.RGBA32F),V===s.HALF_FLOAT&&(J=s.RGBA16F),V===s.UNSIGNED_BYTE&&(J=Nt===pe?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(I,w){let V;return I?w===null||w===Zi||w===hr?V=s.DEPTH24_STENCIL8:w===Xn?V=s.DEPTH32F_STENCIL8:w===cr&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zi||w===hr?V=s.DEPTH_COMPONENT24:w===Xn?V=s.DEPTH_COMPONENT32F:w===cr&&(V=s.DEPTH_COMPONENT16),V}function S(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Mn&&I.minFilter!==Wn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function T(I){const w=I.target;w.removeEventListener("dispose",T),C(w),w.isVideoTexture&&h.delete(w)}function E(I){const w=I.target;w.removeEventListener("dispose",E),M(w)}function C(I){const w=n.get(I);if(w.__webglInit===void 0)return;const V=I.source,j=f.get(V);if(j){const st=j[w.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(I),Object.keys(j).length===0&&f.delete(V)}n.remove(I)}function b(I){const w=n.get(I);s.deleteTexture(w.__webglTexture);const V=I.source,j=f.get(V);delete j[w.__cacheKey],o.memory.textures--}function M(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let st=0;st<w.__webglFramebuffer[j].length;st++)s.deleteFramebuffer(w.__webglFramebuffer[j][st]);else s.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)s.deleteFramebuffer(w.__webglFramebuffer[j]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const V=I.textures;for(let j=0,st=V.length;j<st;j++){const J=n.get(V[j]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(V[j])}n.remove(I)}let P=0;function z(){P=0}function N(){const I=P;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),P+=1,I}function U(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function D(I,w){const V=n.get(I);if(I.isVideoTexture&&vt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){const j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,I,w);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+w)}function F(I,w){const V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){Q(V,I,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+w)}function Z(I,w){const V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){Q(V,I,w);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+w)}function W(I,w){const V=n.get(I);if(I.version>0&&V.__version!==I.version){ot(V,I,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+w)}const dt={[mi]:s.REPEAT,[Gn]:s.CLAMP_TO_EDGE,[Ua]:s.MIRRORED_REPEAT},yt={[Mn]:s.NEAREST,[Zf]:s.NEAREST_MIPMAP_NEAREST,[Sr]:s.NEAREST_MIPMAP_LINEAR,[Wn]:s.LINEAR,[zo]:s.LINEAR_MIPMAP_NEAREST,[Wi]:s.LINEAR_MIPMAP_LINEAR},Et={[Kf]:s.NEVER,[sd]:s.ALWAYS,[Qf]:s.LESS,[tu]:s.LEQUAL,[td]:s.EQUAL,[id]:s.GEQUAL,[ed]:s.GREATER,[nd]:s.NOTEQUAL};function Yt(I,w){if(w.type===Xn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Wn||w.magFilter===zo||w.magFilter===Sr||w.magFilter===Wi||w.minFilter===Wn||w.minFilter===zo||w.minFilter===Sr||w.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,dt[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,dt[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,dt[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,yt[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,yt[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Et[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Mn||w.minFilter!==Sr&&w.minFilter!==Wi||w.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ne(I,w){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",T));const j=w.source;let st=f.get(j);st===void 0&&(st={},f.set(j,st));const J=U(w);if(J!==I.__cacheKey){st[J]===void 0&&(st[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),st[J].usedTimes++;const Nt=st[I.__cacheKey];Nt!==void 0&&(st[I.__cacheKey].usedTimes--,Nt.usedTimes===0&&b(w)),I.__cacheKey=J,I.__webglTexture=st[J].texture}return V}function le(I,w,V){return Math.floor(Math.floor(I/V)/w)}function se(I,w,V,j){const J=I.updateRanges;if(J.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,V,j,w.data);else{J.sort((ct,St)=>ct.start-St.start);let Nt=0;for(let ct=1;ct<J.length;ct++){const St=J[Nt],Wt=J[ct],Ot=St.start+St.count,bt=le(Wt.start,w.width,4),Jt=le(St.start,w.width,4);Wt.start<=Ot+1&&bt===Jt&&le(Wt.start+Wt.count-1,w.width,4)===bt?St.count=Math.max(St.count,Wt.start+Wt.count-St.start):(++Nt,J[Nt]=Wt)}J.length=Nt+1;const mt=s.getParameter(s.UNPACK_ROW_LENGTH),Lt=s.getParameter(s.UNPACK_SKIP_PIXELS),Dt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let ct=0,St=J.length;ct<St;ct++){const Wt=J[ct],Ot=Math.floor(Wt.start/4),bt=Math.ceil(Wt.count/4),Jt=Ot%w.width,O=Math.floor(Ot/w.width),pt=bt,_t=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Jt),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),e.texSubImage2D(s.TEXTURE_2D,0,Jt,O,pt,_t,V,j,w.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,mt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Dt)}}function Q(I,w,V){let j=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=s.TEXTURE_3D);const st=ne(I,w),J=w.source;e.bindTexture(j,I.__webglTexture,s.TEXTURE0+V);const Nt=n.get(J);if(J.version!==Nt.__version||st===!0){e.activeTexture(s.TEXTURE0+V);const mt=ue.getPrimaries(ue.workingColorSpace),Lt=w.colorSpace===Ei?null:ue.getPrimaries(w.colorSpace),Dt=w.colorSpace===Ei||mt===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ct=m(w.image,!1,i.maxTextureSize);ct=Zt(w,ct);const St=r.convert(w.format,w.colorSpace),Wt=r.convert(w.type);let Ot=y(w.internalFormat,St,Wt,w.colorSpace,w.isVideoTexture);Yt(j,w);let bt;const Jt=w.mipmaps,O=w.isVideoTexture!==!0,pt=Nt.__version===void 0||st===!0,_t=J.dataReady,Ct=S(w,ct);if(w.isDepthTexture)Ot=_(w.format===fr,w.type),pt&&(O?e.texStorage2D(s.TEXTURE_2D,1,Ot,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,Ot,ct.width,ct.height,0,St,Wt,null));else if(w.isDataTexture)if(Jt.length>0){O&&pt&&e.texStorage2D(s.TEXTURE_2D,Ct,Ot,Jt[0].width,Jt[0].height);for(let ht=0,it=Jt.length;ht<it;ht++)bt=Jt[ht],O?_t&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,bt.width,bt.height,St,Wt,bt.data):e.texImage2D(s.TEXTURE_2D,ht,Ot,bt.width,bt.height,0,St,Wt,bt.data);w.generateMipmaps=!1}else O?(pt&&e.texStorage2D(s.TEXTURE_2D,Ct,Ot,ct.width,ct.height),_t&&se(w,ct,St,Wt)):e.texImage2D(s.TEXTURE_2D,0,Ot,ct.width,ct.height,0,St,Wt,ct.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){O&&pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Ot,Jt[0].width,Jt[0].height,ct.depth);for(let ht=0,it=Jt.length;ht<it;ht++)if(bt=Jt[ht],w.format!==Un)if(St!==null)if(O){if(_t)if(w.layerUpdates.size>0){const Ut=Wc(bt.width,bt.height,w.format,w.type);for(const jt of w.layerUpdates){const Te=bt.data.subarray(jt*Ut/bt.data.BYTES_PER_ELEMENT,(jt+1)*Ut/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,jt,bt.width,bt.height,1,St,Te)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,bt.width,bt.height,ct.depth,St,bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,Ot,bt.width,bt.height,ct.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?_t&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,bt.width,bt.height,ct.depth,St,Wt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,Ot,bt.width,bt.height,ct.depth,0,St,Wt,bt.data)}else{O&&pt&&e.texStorage2D(s.TEXTURE_2D,Ct,Ot,Jt[0].width,Jt[0].height);for(let ht=0,it=Jt.length;ht<it;ht++)bt=Jt[ht],w.format!==Un?St!==null?O?_t&&e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,Ot,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?_t&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,bt.width,bt.height,St,Wt,bt.data):e.texImage2D(s.TEXTURE_2D,ht,Ot,bt.width,bt.height,0,St,Wt,bt.data)}else if(w.isDataArrayTexture)if(O){if(pt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Ot,ct.width,ct.height,ct.depth),_t)if(w.layerUpdates.size>0){const ht=Wc(ct.width,ct.height,w.format,w.type);for(const it of w.layerUpdates){const Ut=ct.data.subarray(it*ht/ct.data.BYTES_PER_ELEMENT,(it+1)*ht/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,ct.width,ct.height,1,St,Wt,Ut)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,St,Wt,ct.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,ct.width,ct.height,ct.depth,0,St,Wt,ct.data);else if(w.isData3DTexture)O?(pt&&e.texStorage3D(s.TEXTURE_3D,Ct,Ot,ct.width,ct.height,ct.depth),_t&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,St,Wt,ct.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,ct.width,ct.height,ct.depth,0,St,Wt,ct.data);else if(w.isFramebufferTexture){if(pt)if(O)e.texStorage2D(s.TEXTURE_2D,Ct,Ot,ct.width,ct.height);else{let ht=ct.width,it=ct.height;for(let Ut=0;Ut<Ct;Ut++)e.texImage2D(s.TEXTURE_2D,Ut,Ot,ht,it,0,St,Wt,null),ht>>=1,it>>=1}}else if(Jt.length>0){if(O&&pt){const ht=qt(Jt[0]);e.texStorage2D(s.TEXTURE_2D,Ct,Ot,ht.width,ht.height)}for(let ht=0,it=Jt.length;ht<it;ht++)bt=Jt[ht],O?_t&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,St,Wt,bt):e.texImage2D(s.TEXTURE_2D,ht,Ot,St,Wt,bt);w.generateMipmaps=!1}else if(O){if(pt){const ht=qt(ct);e.texStorage2D(s.TEXTURE_2D,Ct,Ot,ht.width,ht.height)}_t&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Wt,ct)}else e.texImage2D(s.TEXTURE_2D,0,Ot,St,Wt,ct);g(w)&&p(j),Nt.__version=J.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ot(I,w,V){if(w.image.length!==6)return;const j=ne(I,w),st=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+V);const J=n.get(st);if(st.version!==J.__version||j===!0){e.activeTexture(s.TEXTURE0+V);const Nt=ue.getPrimaries(ue.workingColorSpace),mt=w.colorSpace===Ei?null:ue.getPrimaries(w.colorSpace),Lt=w.colorSpace===Ei||Nt===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Dt=w.isCompressedTexture||w.image[0].isCompressedTexture,ct=w.image[0]&&w.image[0].isDataTexture,St=[];for(let it=0;it<6;it++)!Dt&&!ct?St[it]=m(w.image[it],!0,i.maxCubemapSize):St[it]=ct?w.image[it].image:w.image[it],St[it]=Zt(w,St[it]);const Wt=St[0],Ot=r.convert(w.format,w.colorSpace),bt=r.convert(w.type),Jt=y(w.internalFormat,Ot,bt,w.colorSpace),O=w.isVideoTexture!==!0,pt=J.__version===void 0||j===!0,_t=st.dataReady;let Ct=S(w,Wt);Yt(s.TEXTURE_CUBE_MAP,w);let ht;if(Dt){O&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,Jt,Wt.width,Wt.height);for(let it=0;it<6;it++){ht=St[it].mipmaps;for(let Ut=0;Ut<ht.length;Ut++){const jt=ht[Ut];w.format!==Un?Ot!==null?O?_t&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,jt.width,jt.height,Ot,jt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,Jt,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,jt.width,jt.height,Ot,bt,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,Jt,jt.width,jt.height,0,Ot,bt,jt.data)}}}else{if(ht=w.mipmaps,O&&pt){ht.length>0&&Ct++;const it=qt(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,Jt,it.width,it.height)}for(let it=0;it<6;it++)if(ct){O?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,St[it].width,St[it].height,Ot,bt,St[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,St[it].width,St[it].height,0,Ot,bt,St[it].data);for(let Ut=0;Ut<ht.length;Ut++){const Te=ht[Ut].image[it].image;O?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,Te.width,Te.height,Ot,bt,Te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,Jt,Te.width,Te.height,0,Ot,bt,Te.data)}}else{O?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,bt,St[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Jt,Ot,bt,St[it]);for(let Ut=0;Ut<ht.length;Ut++){const jt=ht[Ut];O?_t&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,Ot,bt,jt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,Jt,Ot,bt,jt.image[it])}}}g(w)&&p(s.TEXTURE_CUBE_MAP),J.__version=st.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Rt(I,w,V,j,st,J){const Nt=r.convert(V.format,V.colorSpace),mt=r.convert(V.type),Lt=y(V.internalFormat,Nt,mt,V.colorSpace),Dt=n.get(w),ct=n.get(V);if(ct.__renderTarget=w,!Dt.__hasExternalTextures){const St=Math.max(1,w.width>>J),Wt=Math.max(1,w.height>>J);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,J,Lt,St,Wt,w.depth,0,Nt,mt,null):e.texImage2D(st,J,Lt,St,Wt,0,Nt,mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),lt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,st,ct.__webglTexture,0,xt(w)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,st,ct.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(I,w,V){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){const j=w.depthTexture,st=j&&j.isDepthTexture?j.type:null,J=_(w.stencilBuffer,st),Nt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=xt(w);lt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,J,w.width,w.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,J,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,J,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Nt,s.RENDERBUFFER,I)}else{const j=w.textures;for(let st=0;st<j.length;st++){const J=j[st],Nt=r.convert(J.format,J.colorSpace),mt=r.convert(J.type),Lt=y(J.internalFormat,Nt,mt,J.colorSpace),Dt=xt(w);V&&lt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,Lt,w.width,w.height):lt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,Lt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Lt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),D(w.depthTexture,0);const st=j.__webglTexture,J=xt(w);if(w.depthTexture.format===ur)lt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,st,0);else if(w.depthTexture.format===fr)lt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function re(I){const w=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const j=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){const st=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",st)};j.addEventListener("dispose",st),w.__depthDisposeCallback=st}w.__boundDepthTexture=j}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const j=I.texture.mipmaps;j&&j.length>0?zt(w.__webglFramebuffer[0],I):zt(w.__webglFramebuffer,I)}else if(V){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=s.createRenderbuffer(),kt(w.__webglDepthbuffer[j],I,!1);else{const st=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,J)}}else{const j=I.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),kt(w.__webglDepthbuffer,I,!1);else{const st=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,J)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(I,w,V){const j=n.get(I);w!==void 0&&Rt(j.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&re(I)}function L(I){const w=I.texture,V=n.get(I),j=n.get(w);I.addEventListener("dispose",E);const st=I.textures,J=I.isWebGLCubeRenderTarget===!0,Nt=st.length>1;if(Nt||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=w.version,o.memory.textures++),J){V.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[mt]=[];for(let Lt=0;Lt<w.mipmaps.length;Lt++)V.__webglFramebuffer[mt][Lt]=s.createFramebuffer()}else V.__webglFramebuffer[mt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let mt=0;mt<w.mipmaps.length;mt++)V.__webglFramebuffer[mt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(Nt)for(let mt=0,Lt=st.length;mt<Lt;mt++){const Dt=n.get(st[mt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&lt(I)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let mt=0;mt<st.length;mt++){const Lt=st[mt];V.__webglColorRenderbuffer[mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[mt]);const Dt=r.convert(Lt.format,Lt.colorSpace),ct=r.convert(Lt.type),St=y(Lt.internalFormat,Dt,ct,Lt.colorSpace,I.isXRRenderTarget===!0),Wt=xt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,St,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,V.__webglColorRenderbuffer[mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),kt(V.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Yt(s.TEXTURE_CUBE_MAP,w);for(let mt=0;mt<6;mt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Lt=0;Lt<w.mipmaps.length;Lt++)Rt(V.__webglFramebuffer[mt][Lt],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Lt);else Rt(V.__webglFramebuffer[mt],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(w)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let mt=0,Lt=st.length;mt<Lt;mt++){const Dt=st[mt],ct=n.get(Dt);let St=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(St=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(St,ct.__webglTexture),Yt(St,Dt),Rt(V.__webglFramebuffer,I,Dt,s.COLOR_ATTACHMENT0+mt,St,0),g(Dt)&&p(St)}e.unbindTexture()}else{let mt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(mt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(mt,j.__webglTexture),Yt(mt,w),w.mipmaps&&w.mipmaps.length>0)for(let Lt=0;Lt<w.mipmaps.length;Lt++)Rt(V.__webglFramebuffer[Lt],I,w,s.COLOR_ATTACHMENT0,mt,Lt);else Rt(V.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,mt,0);g(w)&&p(mt),e.unbindTexture()}I.depthBuffer&&re(I)}function rt(I){const w=I.textures;for(let V=0,j=w.length;V<j;V++){const st=w[V];if(g(st)){const J=v(I),Nt=n.get(st).__webglTexture;e.bindTexture(J,Nt),p(J),e.unbindTexture()}}}const nt=[],et=[];function tt(I){if(I.samples>0){if(lt(I)===!1){const w=I.textures,V=I.width,j=I.height;let st=s.COLOR_BUFFER_BIT;const J=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=n.get(I),mt=w.length>1;if(mt)for(let Dt=0;Dt<w.length;Dt++)e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const Lt=I.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Dt=0;Dt<w.length;Dt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),mt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const ct=n.get(w[Dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,V,j,0,0,V,j,st,s.NEAREST),c===!0&&(nt.length=0,et.length=0,nt.push(s.COLOR_ATTACHMENT0+Dt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(nt.push(J),et.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,et)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),mt)for(let Dt=0;Dt<w.length;Dt++){e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,Nt.__webglColorRenderbuffer[Dt]);const ct=n.get(w[Dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Nt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,ct,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function xt(I){return Math.min(i.maxSamples,I.samples)}function lt(I){const w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function vt(I){const w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function Zt(I,w){const V=I.colorSpace,j=I.format,st=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==Cs&&V!==Ei&&(ue.getTransfer(V)===pe?(j!==Un||st!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.setTexture2D=D,this.setTexture2DArray=F,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Se,this.setupRenderTarget=L,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=lt}function gv(s,t){function e(n,i=Ei){let r;const o=ue.getTransfer(i);if(n===jn)return s.UNSIGNED_BYTE;if(n===Tl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===El)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===qh)return s.BYTE;if(n===Zh)return s.SHORT;if(n===cr)return s.UNSIGNED_SHORT;if(n===Sl)return s.INT;if(n===Zi)return s.UNSIGNED_INT;if(n===Xn)return s.FLOAT;if(n===ui)return s.HALF_FLOAT;if(n===Jh)return s.ALPHA;if(n===Kh)return s.RGB;if(n===Un)return s.RGBA;if(n===ur)return s.DEPTH_COMPONENT;if(n===fr)return s.DEPTH_STENCIL;if(n===Al)return s.RED;if(n===Rl)return s.RED_INTEGER;if(n===Qh)return s.RG;if(n===Cl)return s.RG_INTEGER;if(n===Pl)return s.RGBA_INTEGER;if(n===io||n===so||n===ro||n===oo)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Fa||n===Oa||n===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===Ha||n===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ba||n===Ha)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ga||n===Wa||n===Xa||n===Ya||n===qa||n===Za||n===ja||n===$a||n===Ja||n===Ka||n===Qa||n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===el)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===il)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===al||n===ll||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new du(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:xv,fragmentShader:vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _v extends Ds{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,x=null;const m=typeof XRWebGLBinding<"u",g=new yv,p={},v=e.getContextAttributes();let y=null,_=null;const S=[],T=[],E=new K;let C=null;const b=new un;b.viewport=new xe;const M=new un;M.viewport=new xe;const P=[b,M],z=new kp;let N=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ot=S[Q];return ot===void 0&&(ot=new Qo,S[Q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Q){let ot=S[Q];return ot===void 0&&(ot=new Qo,S[Q]=ot),ot.getGripSpace()},this.getHand=function(Q){let ot=S[Q];return ot===void 0&&(ot=new Qo,S[Q]=ot),ot.getHandSpace()};function D(Q){const ot=T.indexOf(Q.inputSource);if(ot===-1)return;const Rt=S[ot];Rt!==void 0&&(Rt.update(Q.inputSource,Q.frame,l||o),Rt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function F(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",Z);for(let Q=0;Q<S.length;Q++){const ot=T[Q];ot!==null&&(T[Q]=null,S[Q].disconnect(ot))}N=null,U=null,g.reset();for(const Q in p)delete p[Q];t.setRenderTarget(y),d=null,f=null,u=null,i=null,_=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",F),i.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,kt=null,zt=null;v.depth&&(zt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=v.stencil?fr:ur,kt=v.stencil?hr:Zi);const re={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(re),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new Nn(f.textureWidth,f.textureHeight,{format:Un,type:jn,depthTexture:new fu(f.textureWidth,f.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Rt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,Rt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Nn(d.framebufferWidth,d.framebufferHeight,{format:Un,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(Q){for(let ot=0;ot<Q.removed.length;ot++){const Rt=Q.removed[ot],kt=T.indexOf(Rt);kt>=0&&(T[kt]=null,S[kt].disconnect(Rt))}for(let ot=0;ot<Q.added.length;ot++){const Rt=Q.added[ot];let kt=T.indexOf(Rt);if(kt===-1){for(let re=0;re<S.length;re++)if(re>=T.length){T.push(Rt),kt=re;break}else if(T[re]===null){T[re]=Rt,kt=re;break}if(kt===-1)break}const zt=S[kt];zt&&zt.connect(Rt)}}const W=new A,dt=new A;function yt(Q,ot,Rt){W.setFromMatrixPosition(ot.matrixWorld),dt.setFromMatrixPosition(Rt.matrixWorld);const kt=W.distanceTo(dt),zt=ot.projectionMatrix.elements,re=Rt.projectionMatrix.elements,Se=zt[14]/(zt[10]-1),L=zt[14]/(zt[10]+1),rt=(zt[9]+1)/zt[5],nt=(zt[9]-1)/zt[5],et=(zt[8]-1)/zt[0],tt=(re[8]+1)/re[0],xt=Se*et,lt=Se*tt,vt=kt/(-et+tt),Zt=vt*-et;if(ot.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Zt),Q.translateZ(vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),zt[10]===-1)Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const qt=Se+vt,I=L+vt,w=xt-Zt,V=lt+(kt-Zt),j=rt*L/I*qt,st=nt*L/I*qt;Q.projectionMatrix.makePerspective(w,V,j,st,qt,I),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Et(Q,ot){ot===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ot.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let ot=Q.near,Rt=Q.far;g.texture!==null&&(g.depthNear>0&&(ot=g.depthNear),g.depthFar>0&&(Rt=g.depthFar)),z.near=M.near=b.near=ot,z.far=M.far=b.far=Rt,(N!==z.near||U!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,U=z.far),z.layers.mask=Q.layers.mask|6,b.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;const kt=Q.parent,zt=z.cameras;Et(z,kt);for(let re=0;re<zt.length;re++)Et(zt[re],kt);zt.length===2?yt(z,b,M):z.projectionMatrix.copy(b.projectionMatrix),Yt(Q,z,kt)};function Yt(Q,ot,Rt){Rt===null?Q.matrix.copy(ot.matrixWorld):(Q.matrix.copy(Rt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ot.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ps*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Q){return p[Q]};let ne=null;function le(Q,ot){if(h=ot.getViewerPose(l||o),x=ot,h!==null){const Rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let kt=!1;Rt.length!==z.cameras.length&&(z.cameras.length=0,kt=!0);for(let L=0;L<Rt.length;L++){const rt=Rt[L];let nt=null;if(d!==null)nt=d.getViewport(rt);else{const tt=u.getViewSubImage(f,rt);nt=tt.viewport,L===0&&(t.setRenderTargetTextures(_,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(_))}let et=P[L];et===void 0&&(et=new un,et.layers.enable(L),et.viewport=new xe,P[L]=et),et.matrix.fromArray(rt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(rt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(nt.x,nt.y,nt.width,nt.height),L===0&&(z.matrix.copy(et.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),kt===!0&&z.cameras.push(et)}const zt=i.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){u=n.getBinding();const L=u.getDepthInformation(Rt[0]);L&&L.isValid&&L.texture&&g.init(L,i.renderState)}if(zt&&zt.includes("camera-access")&&m){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<Rt.length;L++){const rt=Rt[L].camera;if(rt){let nt=p[rt];nt||(nt=new du,p[rt]=nt);const et=u.getCameraImage(rt);nt.sourceTexture=et}}}}for(let Rt=0;Rt<S.length;Rt++){const kt=T[Rt],zt=S[Rt];kt!==null&&zt!==void 0&&zt.update(kt,ot,l||o)}ne&&ne(Q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),x=null}const se=new Su;se.setAnimationLoop(le),this.setAnimationLoop=function(Q){ne=Q},this.dispose=function(){}}}const ki=new On,Mv=new ye;function bv(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,au(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),m(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,ki.copy(_),ki.x*=-1,ki.y*=-1,ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),g.envMapRotation.value.setFromMatrix4(Mv.makeRotationFromEuler(ki)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wv(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const _=y.program;n.uniformBlockBinding(v,_)}function l(v,y){let _=i[v.id];_===void 0&&(x(v),_=h(v),i[v.id]=_,v.addEventListener("dispose",g));const S=y.program;n.updateUBOMapping(v,S);const T=t.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function h(v){const y=u();v.__bindingPointIndex=y;const _=s.createBuffer(),S=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,S,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=i[v.id],_=v.uniforms,S=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,E=_.length;T<E;T++){const C=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,M=C.length;b<M;b++){const P=C[b];if(d(P,T,b,S)===!0){const z=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let D=0;D<N.length;D++){const F=N[D],Z=m(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,z+U,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,U),U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,y,_,S){const T=v.value,E=y+"_"+_;if(S[E]===void 0)return typeof T=="number"||typeof T=="boolean"?S[E]=T:S[E]=T.clone(),!0;{const C=S[E];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return S[E]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function x(v){const y=v.uniforms;let _=0;const S=16;for(let E=0,C=y.length;E<C;E++){const b=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,P=b.length;M<P;M++){const z=b[M],N=Array.isArray(z.value)?z.value:[z.value];for(let U=0,D=N.length;U<D;U++){const F=N[U],Z=m(F),W=_%S,dt=W%Z.boundary,yt=W+dt;_+=dt,yt!==0&&S-yt<Z.storage&&(_+=S-yt),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=Z.storage}}}const T=_%S;return T>0&&(_+=S-T),v.__size=_,v.__cache={},this}function m(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Sv{constructor(t={}){const{canvas:e=bd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const x=new Uint32Array(4),m=new Int32Array(4);let g=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let S=!1;this._outputColorSpace=Ue;let T=0,E=0,C=null,b=-1,M=null;const P=new xe,z=new xe;let N=null;const U=new Pt(0);let D=0,F=e.width,Z=e.height,W=1,dt=null,yt=null;const Et=new xe(0,0,F,Z),Yt=new xe(0,0,F,Z);let ne=!1;const le=new Nl;let se=!1,Q=!1;const ot=new ye,Rt=new A,kt=new xe,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Se(){return C===null?W:1}let L=n;function rt(R,B){return e.getContext(R,B)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ml}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",ht,!1),L===null){const B="webgl2";if(L=rt(B,R),L===null)throw rt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let nt,et,tt,xt,lt,vt,Zt,qt,I,w,V,j,st,J,Nt,mt,Lt,Dt,ct,St,Wt,Ot,bt,Jt;function O(){nt=new Dg(L),nt.init(),Ot=new gv(L,nt),et=new Ag(L,nt,t,Ot),tt=new pv(L,nt),et.reversedDepthBuffer&&f&&tt.buffers.depth.setReversed(!0),xt=new Fg(L),lt=new ev,vt=new mv(L,nt,tt,lt,et,Ot,xt),Zt=new Cg(_),qt=new Lg(_),I=new Gp(L),bt=new Tg(L,I),w=new Ug(L,I,xt,bt),V=new kg(L,w,I,xt),ct=new Og(L,et,vt),mt=new Rg(lt),j=new tv(_,Zt,qt,nt,et,bt,mt),st=new bv(_,lt),J=new iv,Nt=new cv(nt),Dt=new Sg(_,Zt,qt,tt,V,d,c),Lt=new fv(_,V,et),Jt=new wv(L,xt,et,tt),St=new Eg(L,nt,xt),Wt=new Ng(L,nt,xt),xt.programs=j.programs,_.capabilities=et,_.extensions=nt,_.properties=lt,_.renderLists=J,_.shadowMap=Lt,_.state=tt,_.info=xt}O();const pt=new _v(_,L);this.xr=pt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=nt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=nt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(F,Z,!1))},this.getSize=function(R){return R.set(F,Z)},this.setSize=function(R,B,Y=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,Z=B,e.width=Math.floor(R*W),e.height=Math.floor(B*W),Y===!0&&(e.style.width=R+"px",e.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(F*W,Z*W).floor()},this.setDrawingBufferSize=function(R,B,Y){F=R,Z=B,W=Y,e.width=Math.floor(R*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(Et)},this.setViewport=function(R,B,Y,q){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,B,Y,q),tt.viewport(P.copy(Et).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(Yt)},this.setScissor=function(R,B,Y,q){R.isVector4?Yt.set(R.x,R.y,R.z,R.w):Yt.set(R,B,Y,q),tt.scissor(z.copy(Yt).multiplyScalar(W).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(R){tt.setScissorTest(ne=R)},this.setOpaqueSort=function(R){dt=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(R=!0,B=!0,Y=!0){let q=0;if(R){let H=!1;if(C!==null){const ut=C.texture.format;H=ut===Pl||ut===Cl||ut===Rl}if(H){const ut=C.texture.type,wt=ut===jn||ut===Zi||ut===cr||ut===hr||ut===Tl||ut===El,It=Dt.getClearColor(),At=Dt.getClearAlpha(),Gt=It.r,Xt=It.g,Bt=It.b;wt?(x[0]=Gt,x[1]=Xt,x[2]=Bt,x[3]=At,L.clearBufferuiv(L.COLOR,0,x)):(m[0]=Gt,m[1]=Xt,m[2]=Bt,m[3]=At,L.clearBufferiv(L.COLOR,0,m))}else q|=L.COLOR_BUFFER_BIT}B&&(q|=L.DEPTH_BUFFER_BIT),Y&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Dt.dispose(),J.dispose(),Nt.dispose(),lt.dispose(),Zt.dispose(),qt.dispose(),V.dispose(),bt.dispose(),Jt.dispose(),j.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Hn),pt.removeEventListener("sessionend",Jl),zi.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=xt.autoReset,B=Lt.enabled,Y=Lt.autoUpdate,q=Lt.needsUpdate,H=Lt.type;O(),xt.autoReset=R,Lt.enabled=B,Lt.autoUpdate=Y,Lt.needsUpdate=q,Lt.type=H}function ht(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function it(R){const B=R.target;B.removeEventListener("dispose",it),Ut(B)}function Ut(R){jt(R),lt.remove(R)}function jt(R){const B=lt.get(R).programs;B!==void 0&&(B.forEach(function(Y){j.releaseProgram(Y)}),R.isShaderMaterial&&j.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,Y,q,H,ut){B===null&&(B=zt);const wt=H.isMesh&&H.matrixWorld.determinant()<0,It=Vu(R,B,Y,q,H);tt.setMaterial(q,wt);let At=Y.index,Gt=1;if(q.wireframe===!0){if(At=w.getWireframeAttribute(Y),At===void 0)return;Gt=2}const Xt=Y.drawRange,Bt=Y.attributes.position;let oe=Xt.start*Gt,_e=(Xt.start+Xt.count)*Gt;ut!==null&&(oe=Math.max(oe,ut.start*Gt),_e=Math.min(_e,(ut.start+ut.count)*Gt)),At!==null?(oe=Math.max(oe,0),_e=Math.min(_e,At.count)):Bt!=null&&(oe=Math.max(oe,0),_e=Math.min(_e,Bt.count));const ke=_e-oe;if(ke<0||ke===1/0)return;bt.setup(H,q,It,Y,At);let Ae,we=St;if(At!==null&&(Ae=I.get(At),we=Wt,we.setIndex(Ae)),H.isMesh)q.wireframe===!0?(tt.setLineWidth(q.wireframeLinewidth*Se()),we.setMode(L.LINES)):we.setMode(L.TRIANGLES);else if(H.isLine){let Vt=q.linewidth;Vt===void 0&&(Vt=1),tt.setLineWidth(Vt*Se()),H.isLineSegments?we.setMode(L.LINES):H.isLineLoop?we.setMode(L.LINE_LOOP):we.setMode(L.LINE_STRIP)}else H.isPoints?we.setMode(L.POINTS):H.isSprite&&we.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))we.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Vt=H._multiDrawStarts,Le=H._multiDrawCounts,fe=H._multiDrawCount,gn=At?I.get(At).bytesPerElement:1,Ki=lt.get(q).currentProgram.getUniforms();for(let xn=0;xn<fe;xn++)Ki.setValue(L,"_gl_DrawID",xn),we.render(Vt[xn]/gn,Le[xn])}else if(H.isInstancedMesh)we.renderInstances(oe,ke,H.count);else if(Y.isInstancedBufferGeometry){const Vt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Le=Math.min(Y.instanceCount,Vt);we.renderInstances(oe,ke,Le)}else we.render(oe,ke)};function Te(R,B,Y){R.transparent===!0&&R.side===be&&R.forceSinglePass===!1?(R.side=Je,R.needsUpdate=!0,br(R,B,Y),R.side=Pi,R.needsUpdate=!0,br(R,B,Y),R.side=be):br(R,B,Y)}this.compile=function(R,B,Y=null){Y===null&&(Y=R),p=Nt.get(Y),p.init(B),y.push(p),Y.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),R!==Y&&R.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const q=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ut=H.material;if(ut)if(Array.isArray(ut))for(let wt=0;wt<ut.length;wt++){const It=ut[wt];Te(It,Y,H),q.add(It)}else Te(ut,Y,H),q.add(ut)}),p=y.pop(),q},this.compileAsync=function(R,B,Y=null){const q=this.compile(R,B,Y);return new Promise(H=>{function ut(){if(q.forEach(function(wt){lt.get(wt).currentProgram.isReady()&&q.delete(wt)}),q.size===0){H(R);return}setTimeout(ut,10)}nt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let de=null;function Kn(R){de&&de(R)}function Hn(){zi.stop()}function Jl(){zi.start()}const zi=new Su;zi.setAnimationLoop(Kn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(R){de=R,pt.setAnimationLoop(R),R===null?zi.stop():zi.start()},pt.addEventListener("sessionstart",Hn),pt.addEventListener("sessionend",Jl),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(B),B=pt.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,B,C),p=Nt.get(R,y.length),p.init(B),y.push(p),ot.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),le.setFromProjectionMatrix(ot,Yn,B.reversedDepth),Q=this.localClippingEnabled,se=mt.init(this.clippingPlanes,Q),g=J.get(R,v.length),g.init(),v.push(g),pt.enabled===!0&&pt.isPresenting===!0){const ut=_.xr.getDepthSensingMesh();ut!==null&&Ao(ut,B,-1/0,_.sortObjects)}Ao(R,B,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(dt,yt),re=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,re&&Dt.addToRenderList(g,R),this.info.render.frame++,se===!0&&mt.beginShadows();const Y=p.state.shadowsArray;Lt.render(Y,R,B),se===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,H=g.transmissive;if(p.setupLights(),B.isArrayCamera){const ut=B.cameras;if(H.length>0)for(let wt=0,It=ut.length;wt<It;wt++){const At=ut[wt];Ql(q,H,R,At)}re&&Dt.render(R);for(let wt=0,It=ut.length;wt<It;wt++){const At=ut[wt];Kl(g,R,At,At.viewport)}}else H.length>0&&Ql(q,H,R,B),re&&Dt.render(R),Kl(g,R,B);C!==null&&E===0&&(vt.updateMultisampleRenderTarget(C),vt.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(_,R,B),bt.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],se===!0&&mt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Ao(R,B,Y,q){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||le.intersectsSprite(R)){q&&kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ot);const wt=V.update(R),It=R.material;It.visible&&g.push(R,wt,It,Y,kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||le.intersectsObject(R))){const wt=V.update(R),It=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),kt.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),kt.copy(wt.boundingSphere.center)),kt.applyMatrix4(R.matrixWorld).applyMatrix4(ot)),Array.isArray(It)){const At=wt.groups;for(let Gt=0,Xt=At.length;Gt<Xt;Gt++){const Bt=At[Gt],oe=It[Bt.materialIndex];oe&&oe.visible&&g.push(R,wt,oe,Y,kt.z,Bt)}}else It.visible&&g.push(R,wt,It,Y,kt.z,null)}}const ut=R.children;for(let wt=0,It=ut.length;wt<It;wt++)Ao(ut[wt],B,Y,q)}function Kl(R,B,Y,q){const H=R.opaque,ut=R.transmissive,wt=R.transparent;p.setupLightsView(Y),se===!0&&mt.setGlobalState(_.clippingPlanes,Y),q&&tt.viewport(P.copy(q)),H.length>0&&Mr(H,B,Y),ut.length>0&&Mr(ut,B,Y),wt.length>0&&Mr(wt,B,Y),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Ql(R,B,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Nn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ui:jn,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const ut=p.state.transmissionRenderTarget[q.id],wt=q.viewport||P;ut.setSize(wt.z*_.transmissionResolutionScale,wt.w*_.transmissionResolutionScale);const It=_.getRenderTarget(),At=_.getActiveCubeFace(),Gt=_.getActiveMipmapLevel();_.setRenderTarget(ut),_.getClearColor(U),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear(),re&&Dt.render(Y);const Xt=_.toneMapping;_.toneMapping=Ri;const Bt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),se===!0&&mt.setGlobalState(_.clippingPlanes,q),Mr(R,Y,q),vt.updateMultisampleRenderTarget(ut),vt.updateRenderTargetMipmap(ut),nt.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let _e=0,ke=B.length;_e<ke;_e++){const Ae=B[_e],we=Ae.object,Vt=Ae.geometry,Le=Ae.material,fe=Ae.group;if(Le.side===be&&we.layers.test(q.layers)){const gn=Le.side;Le.side=Je,Le.needsUpdate=!0,tc(we,Y,q,Vt,Le,fe),Le.side=gn,Le.needsUpdate=!0,oe=!0}}oe===!0&&(vt.updateMultisampleRenderTarget(ut),vt.updateRenderTargetMipmap(ut))}_.setRenderTarget(It,At,Gt),_.setClearColor(U,D),Bt!==void 0&&(q.viewport=Bt),_.toneMapping=Xt}function Mr(R,B,Y){const q=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ut=R.length;H<ut;H++){const wt=R[H],It=wt.object,At=wt.geometry,Gt=wt.group;let Xt=wt.material;Xt.allowOverride===!0&&q!==null&&(Xt=q),It.layers.test(Y.layers)&&tc(It,B,Y,At,Xt,Gt)}}function tc(R,B,Y,q,H,ut){R.onBeforeRender(_,B,Y,q,H,ut),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(_,B,Y,q,R,ut),H.transparent===!0&&H.side===be&&H.forceSinglePass===!1?(H.side=Je,H.needsUpdate=!0,_.renderBufferDirect(Y,B,q,H,R,ut),H.side=Pi,H.needsUpdate=!0,_.renderBufferDirect(Y,B,q,H,R,ut),H.side=be):_.renderBufferDirect(Y,B,q,H,R,ut),R.onAfterRender(_,B,Y,q,H,ut)}function br(R,B,Y){B.isScene!==!0&&(B=zt);const q=lt.get(R),H=p.state.lights,ut=p.state.shadowsArray,wt=H.state.version,It=j.getParameters(R,H.state,ut,B,Y),At=j.getProgramCacheKey(It);let Gt=q.programs;q.environment=R.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(R.isMeshStandardMaterial?qt:Zt).get(R.envMap||q.environment),q.envMapRotation=q.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Gt===void 0&&(R.addEventListener("dispose",it),Gt=new Map,q.programs=Gt);let Xt=Gt.get(At);if(Xt!==void 0){if(q.currentProgram===Xt&&q.lightsStateVersion===wt)return nc(R,It),Xt}else It.uniforms=j.getUniforms(R),R.onBeforeCompile(It,_),Xt=j.acquireProgram(It,At),Gt.set(At,Xt),q.uniforms=It.uniforms;const Bt=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Bt.clippingPlanes=mt.uniform),nc(R,It),q.needsLights=Wu(R),q.lightsStateVersion=wt,q.needsLights&&(Bt.ambientLightColor.value=H.state.ambient,Bt.lightProbe.value=H.state.probe,Bt.directionalLights.value=H.state.directional,Bt.directionalLightShadows.value=H.state.directionalShadow,Bt.spotLights.value=H.state.spot,Bt.spotLightShadows.value=H.state.spotShadow,Bt.rectAreaLights.value=H.state.rectArea,Bt.ltc_1.value=H.state.rectAreaLTC1,Bt.ltc_2.value=H.state.rectAreaLTC2,Bt.pointLights.value=H.state.point,Bt.pointLightShadows.value=H.state.pointShadow,Bt.hemisphereLights.value=H.state.hemi,Bt.directionalShadowMap.value=H.state.directionalShadowMap,Bt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Bt.spotShadowMap.value=H.state.spotShadowMap,Bt.spotLightMatrix.value=H.state.spotLightMatrix,Bt.spotLightMap.value=H.state.spotLightMap,Bt.pointShadowMap.value=H.state.pointShadowMap,Bt.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Xt,q.uniformsList=null,Xt}function ec(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=ao.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function nc(R,B){const Y=lt.get(R);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Vu(R,B,Y,q,H){B.isScene!==!0&&(B=zt),vt.resetTextureUnits();const ut=B.fog,wt=q.isMeshStandardMaterial?B.environment:null,It=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Cs,At=(q.isMeshStandardMaterial?qt:Zt).get(q.envMap||wt),Gt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Bt=!!Y.morphAttributes.position,oe=!!Y.morphAttributes.normal,_e=!!Y.morphAttributes.color;let ke=Ri;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ke=_.toneMapping);const Ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,we=Ae!==void 0?Ae.length:0,Vt=lt.get(q),Le=p.state.lights;if(se===!0&&(Q===!0||R!==M)){const nn=R===M&&q.id===b;mt.setState(q,R,nn)}let fe=!1;q.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Le.state.version||Vt.outputColorSpace!==It||H.isBatchedMesh&&Vt.batching===!1||!H.isBatchedMesh&&Vt.batching===!0||H.isBatchedMesh&&Vt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Vt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Vt.instancing===!1||!H.isInstancedMesh&&Vt.instancing===!0||H.isSkinnedMesh&&Vt.skinning===!1||!H.isSkinnedMesh&&Vt.skinning===!0||H.isInstancedMesh&&Vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Vt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Vt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Vt.instancingMorph===!1&&H.morphTexture!==null||Vt.envMap!==At||q.fog===!0&&Vt.fog!==ut||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==mt.numPlanes||Vt.numIntersection!==mt.numIntersection)||Vt.vertexAlphas!==Gt||Vt.vertexTangents!==Xt||Vt.morphTargets!==Bt||Vt.morphNormals!==oe||Vt.morphColors!==_e||Vt.toneMapping!==ke||Vt.morphTargetsCount!==we)&&(fe=!0):(fe=!0,Vt.__version=q.version);let gn=Vt.currentProgram;fe===!0&&(gn=br(q,B,H));let Ki=!1,xn=!1,Os=!1;const De=gn.getUniforms(),Sn=Vt.uniforms;if(tt.useProgram(gn.program)&&(Ki=!0,xn=!0,Os=!0),q.id!==b&&(b=q.id,xn=!0),Ki||M!==R){tt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),De.setValue(L,"projectionMatrix",R.projectionMatrix),De.setValue(L,"viewMatrix",R.matrixWorldInverse);const on=De.map.cameraPosition;on!==void 0&&on.setValue(L,Rt.setFromMatrixPosition(R.matrixWorld)),et.logarithmicDepthBuffer&&De.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&De.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,xn=!0,Os=!0)}if(H.isSkinnedMesh){De.setOptional(L,H,"bindMatrix"),De.setOptional(L,H,"bindMatrixInverse");const nn=H.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),De.setValue(L,"boneTexture",nn.boneTexture,vt))}H.isBatchedMesh&&(De.setOptional(L,H,"batchingTexture"),De.setValue(L,"batchingTexture",H._matricesTexture,vt),De.setOptional(L,H,"batchingIdTexture"),De.setValue(L,"batchingIdTexture",H._indirectTexture,vt),De.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&De.setValue(L,"batchingColorTexture",H._colorsTexture,vt));const Tn=Y.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&ct.update(H,Y,gn),(xn||Vt.receiveShadow!==H.receiveShadow)&&(Vt.receiveShadow=H.receiveShadow,De.setValue(L,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Sn.envMap.value=At,Sn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Sn.envMapIntensity.value=B.environmentIntensity),xn&&(De.setValue(L,"toneMappingExposure",_.toneMappingExposure),Vt.needsLights&&Gu(Sn,Os),ut&&q.fog===!0&&st.refreshFogUniforms(Sn,ut),st.refreshMaterialUniforms(Sn,q,W,Z,p.state.transmissionRenderTarget[R.id]),ao.upload(L,ec(Vt),Sn,vt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ao.upload(L,ec(Vt),Sn,vt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&De.setValue(L,"center",H.center),De.setValue(L,"modelViewMatrix",H.modelViewMatrix),De.setValue(L,"normalMatrix",H.normalMatrix),De.setValue(L,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const nn=q.uniformsGroups;for(let on=0,Ro=nn.length;on<Ro;on++){const Li=nn[on];Jt.update(Li,gn),Jt.bind(Li,gn)}}return gn}function Gu(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function Wu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,B,Y){const q=lt.get(R);q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),lt.get(R.texture).__webglTexture=B,lt.get(R.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,B){const Y=lt.get(R);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0};const Xu=L.createFramebuffer();this.setRenderTarget=function(R,B=0,Y=0){C=R,T=B,E=Y;let q=!0,H=null,ut=!1,wt=!1;if(R){const At=lt.get(R);if(At.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(At.__webglFramebuffer===void 0)vt.setupRenderTarget(R);else if(At.__hasExternalTextures)vt.rebindTextures(R,lt.get(R.texture).__webglTexture,lt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Bt=R.depthTexture;if(At.__boundDepthTexture!==Bt){if(Bt!==null&&lt.has(Bt)&&(R.width!==Bt.image.width||R.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(R)}}const Gt=R.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(wt=!0);const Xt=lt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[B])?H=Xt[B][Y]:H=Xt[B],ut=!0):R.samples>0&&vt.useMultisampledRTT(R)===!1?H=lt.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?H=Xt[Y]:H=Xt,P.copy(R.viewport),z.copy(R.scissor),N=R.scissorTest}else P.copy(Et).multiplyScalar(W).floor(),z.copy(Yt).multiplyScalar(W).floor(),N=ne;if(Y!==0&&(H=Xu),tt.bindFramebuffer(L.FRAMEBUFFER,H)&&q&&tt.drawBuffers(R,H),tt.viewport(P),tt.scissor(z),tt.setScissorTest(N),ut){const At=lt.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,At.__webglTexture,Y)}else if(wt){const At=B;for(let Gt=0;Gt<R.textures.length;Gt++){const Xt=lt.get(R.textures[Gt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Gt,Xt.__webglTexture,Y,At)}}else if(R!==null&&Y!==0){const At=lt.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,At.__webglTexture,Y)}b=-1},this.readRenderTargetPixels=function(R,B,Y,q,H,ut,wt,It=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){tt.bindFramebuffer(L.FRAMEBUFFER,At);try{const Gt=R.textures[It],Xt=Gt.format,Bt=Gt.type;if(!et.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-q&&Y>=0&&Y<=R.height-H&&(R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+It),L.readPixels(B,Y,q,H,Ot.convert(Xt),Ot.convert(Bt),ut))}finally{const Gt=C!==null?lt.get(C).__webglFramebuffer:null;tt.bindFramebuffer(L.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(R,B,Y,q,H,ut,wt,It=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At)if(B>=0&&B<=R.width-q&&Y>=0&&Y<=R.height-H){tt.bindFramebuffer(L.FRAMEBUFFER,At);const Gt=R.textures[It],Xt=Gt.format,Bt=Gt.type;if(!et.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,oe),L.bufferData(L.PIXEL_PACK_BUFFER,ut.byteLength,L.STREAM_READ),R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+It),L.readPixels(B,Y,q,H,Ot.convert(Xt),Ot.convert(Bt),0);const _e=C!==null?lt.get(C).__webglFramebuffer:null;tt.bindFramebuffer(L.FRAMEBUFFER,_e);const ke=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await wd(L,ke,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,oe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ut),L.deleteBuffer(oe),L.deleteSync(ke),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,B=null,Y=0){const q=Math.pow(2,-Y),H=Math.floor(R.image.width*q),ut=Math.floor(R.image.height*q),wt=B!==null?B.x:0,It=B!==null?B.y:0;vt.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,wt,It,H,ut),tt.unbindTexture()};const Yu=L.createFramebuffer(),qu=L.createFramebuffer();this.copyTextureToTexture=function(R,B,Y=null,q=null,H=0,ut=null){ut===null&&(H!==0?(dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=H,H=0):ut=0);let wt,It,At,Gt,Xt,Bt,oe,_e,ke;const Ae=R.isCompressedTexture?R.mipmaps[ut]:R.image;if(Y!==null)wt=Y.max.x-Y.min.x,It=Y.max.y-Y.min.y,At=Y.isBox3?Y.max.z-Y.min.z:1,Gt=Y.min.x,Xt=Y.min.y,Bt=Y.isBox3?Y.min.z:0;else{const Tn=Math.pow(2,-H);wt=Math.floor(Ae.width*Tn),It=Math.floor(Ae.height*Tn),R.isDataArrayTexture?At=Ae.depth:R.isData3DTexture?At=Math.floor(Ae.depth*Tn):At=1,Gt=0,Xt=0,Bt=0}q!==null?(oe=q.x,_e=q.y,ke=q.z):(oe=0,_e=0,ke=0);const we=Ot.convert(B.format),Vt=Ot.convert(B.type);let Le;B.isData3DTexture?(vt.setTexture3D(B,0),Le=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(vt.setTexture2DArray(B,0),Le=L.TEXTURE_2D_ARRAY):(vt.setTexture2D(B,0),Le=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const fe=L.getParameter(L.UNPACK_ROW_LENGTH),gn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ki=L.getParameter(L.UNPACK_SKIP_PIXELS),xn=L.getParameter(L.UNPACK_SKIP_ROWS),Os=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ae.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ae.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Bt);const De=R.isDataArrayTexture||R.isData3DTexture,Sn=B.isDataArrayTexture||B.isData3DTexture;if(R.isDepthTexture){const Tn=lt.get(R),nn=lt.get(B),on=lt.get(Tn.__renderTarget),Ro=lt.get(nn.__renderTarget);tt.bindFramebuffer(L.READ_FRAMEBUFFER,on.__webglFramebuffer),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ro.__webglFramebuffer);for(let Li=0;Li<At;Li++)De&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,lt.get(R).__webglTexture,H,Bt+Li),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,lt.get(B).__webglTexture,ut,ke+Li)),L.blitFramebuffer(Gt,Xt,wt,It,oe,_e,wt,It,L.DEPTH_BUFFER_BIT,L.NEAREST);tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||R.isRenderTargetTexture||lt.has(R)){const Tn=lt.get(R),nn=lt.get(B);tt.bindFramebuffer(L.READ_FRAMEBUFFER,Yu),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,qu);for(let on=0;on<At;on++)De?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tn.__webglTexture,H,Bt+on):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tn.__webglTexture,H),Sn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nn.__webglTexture,ut,ke+on):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nn.__webglTexture,ut),H!==0?L.blitFramebuffer(Gt,Xt,wt,It,oe,_e,wt,It,L.COLOR_BUFFER_BIT,L.NEAREST):Sn?L.copyTexSubImage3D(Le,ut,oe,_e,ke+on,Gt,Xt,wt,It):L.copyTexSubImage2D(Le,ut,oe,_e,Gt,Xt,wt,It);tt.bindFramebuffer(L.READ_FRAMEBUFFER,null),tt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Sn?R.isDataTexture||R.isData3DTexture?L.texSubImage3D(Le,ut,oe,_e,ke,wt,It,At,we,Vt,Ae.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Le,ut,oe,_e,ke,wt,It,At,we,Ae.data):L.texSubImage3D(Le,ut,oe,_e,ke,wt,It,At,we,Vt,Ae):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ut,oe,_e,wt,It,we,Vt,Ae.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ut,oe,_e,Ae.width,Ae.height,we,Ae.data):L.texSubImage2D(L.TEXTURE_2D,ut,oe,_e,wt,It,we,Vt,Ae);L.pixelStorei(L.UNPACK_ROW_LENGTH,fe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ki),L.pixelStorei(L.UNPACK_SKIP_ROWS,xn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Os),ut===0&&B.generateMipmaps&&L.generateMipmap(Le),tt.unbindTexture()},this.initRenderTarget=function(R){lt.get(R).__webglFramebuffer===void 0&&vt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?vt.setTextureCube(R,0):R.isData3DTexture?vt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?vt.setTexture2DArray(R,0):vt.setTexture2D(R,0),tt.unbindTexture()},this.resetState=function(){T=0,E=0,C=null,tt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}class Tv extends hu{constructor(){super();const t=new Xe;t.deleteAttribute("uv");const e=new ve({side:Je}),n=new ve,i=new wu(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new $(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Ul(t,n,6),a=new Fe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new $(t,ys(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new $(t,ys(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new $(t,ys(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new $(t,ys(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new $(t,ys(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new $(t,ys(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ys(s){return new Pp({color:0,emissive:16777215,emissiveIntensity:s})}const lo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ev=new Wl(-1,1,1,-1,0,1);class Av extends Oe{constructor(){super(),this.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ee([0,2,0,0,2,0],2))}}const Rv=new Av;class Yl{constructor(t){this._mesh=new $(Rv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ev)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Cv extends Fs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ve?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=pr.clone(t.uniforms),this.material=new Ve({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Yl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ph extends Fs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Pv extends Fs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Iv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new K);this._width=n.width,this._height=n.height,e=new Nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ui}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cv(lo),this.copyPass.material.blending=hi,this.clock=new Bp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ph!==void 0&&(o instanceof ph?n=!0:o instanceof Pv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class zv extends Fs{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Lv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ls extends Fs{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new K(t.x,t.y):new K(256,256),this.clearColor=new Pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Nn(r,o,{type:ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Nn(r,o,{type:ui});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Nn(r,o,{type:ui});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Lv;this.highPassUniforms=pr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ve({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new K(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=pr.clone(lo.uniforms),this.blendMaterial=new Ve({uniforms:this.copyUniforms,vertexShader:lo.vertexShader,fragmentShader:lo.fragmentShader,blending:fn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pt,this._oldClearAlpha=1,this._basic=new kn,this._fsQuad=new Yl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new K(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ls.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ls.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ve({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Ve({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ls.BlurDirectionX=new K(1,0);Ls.BlurDirectionY=new K(0,1);const Kr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Dv extends Fs{constructor(){super(),this.uniforms=pr.clone(Kr.uniforms),this.material=new Cp({name:Kr.name,uniforms:this.uniforms,vertexShader:Kr.vertexShader,fragmentShader:Kr.fragmentShader}),this._fsQuad=new Yl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Gh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Uv{constructor(t,{quality:e="auto"}={}){this.canvas=t;const n=new Sv({canvas:t,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});n.outputColorSpace=Ue,n.toneMapping=wl,n.toneMappingExposure=.95,n.shadowMap.enabled=!0,n.shadowMap.type=kh,this.renderer=n;const i=new hu;i.background=new Pt("#bfe3f7"),this.scene=i;const r=new ml(n);i.environment=r.fromScene(new Tv,.04).texture,i.environmentIntensity=.45,r.dispose(),this.camera=new un(30,1,.1,400),this.camera.position.set(0,3,30),this.hemi=new Lp("#eaf4ff","#b8906a",.85),i.add(this.hemi);const o=new Op("#fff2dc",2.4);o.position.set(-7,16,14),o.target.position.set(0,2,0),o.castShadow=!0,o.shadow.mapSize.set(2048,2048);const a=o.shadow.camera;a.left=-14,a.right=14,a.top=16,a.bottom=-8,a.near=1,a.far=50,o.shadow.bias=-6e-4,o.shadow.normalBias=.03,o.shadow.radius=3,i.add(o),i.add(o.target),this.sun=o,this.points=[0,1,2].map(()=>{const c=new wu("#ff8a3a",0,7,1.6);return c.position.set(0,-50,0),i.add(c),c}),this.spot=new Up("#ffffff",0,30,.5,.5,1.2),this.spot.position.set(0,-50,0),i.add(this.spot),i.add(this.spot.target),this.composer=new Iv(n),this.renderPass=new zv(i,this.camera),this.composer.addPass(this.renderPass),this.bloom=new Ls(new K(256,256),.42,.4,1.35),this.composer.addPass(this.bloom),this.composer.addPass(new Dv),this.quality=e,this.dprMax=Math.min(window.devicePixelRatio||1,2),this.dpr=this.dprMax,this.useBloom=!0,this.frameTimes=[],this.width=1,this.height=1,e==="low"&&this.setLow()}setLow(){this.dpr=Math.min(this.dprMax,1.25),this.useBloom=!1,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null),this.resize(this.width,this.height)}resize(t,e){this.width=t,this.height=e,this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(this.dpr),this.composer.setSize(t,e),this.bloom.setSize(Math.round(t*this.dpr/2),Math.round(e*this.dpr/2)),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}adapt(t){if(this.quality!=="auto"||(this.frameTimes.push(t),this.frameTimes.length<90))return;const e=[...this.frameTimes].sort((i,r)=>i-r),n=e[Math.floor(e.length/2)];this.frameTimes.length=0,n>24&&(this.dpr>1.3?(this.dpr=Math.max(1,this.dpr-.35),this.resize(this.width,this.height)):this.useBloom?this.useBloom=!1:this.dpr>1&&(this.dpr=1,this.resize(this.width,this.height)))}render(){this.useBloom?this.composer.render():this.renderer.render(this.scene,this.camera)}}const ie=(s,t,e,n,i={})=>({x0:s,x1:t,y0:e,y1:n,...i}),mh=ie(Tt.x-1.3,ge.x+1.4,-.3,3.2);function Nv(s,t){const e=s.chapter,n=s.where,i=s.store,r=s.girl,o=t<.9;switch(n){case"intro.title":return o?ie(-7,7,-3,11,{tilt:.06}):ie(-8.5,8.5,-2.6,10.6,{tilt:.06});case"intro.open":return i.shutter.value<.7?o?ie(-7,7,-3,11,{tilt:.06}):ie(-8.5,8.5,-2.6,10.6,{tilt:.06}):ie(-6.3,6.3,-3.4,7.8);case"fire.choose":case"fish.choose":case"space.choose":case"fire.changing":case"fish.changing":case"space.changing":return mh;case"fire.trigger":{const a=i.signals.find(c=>c.path==="gas");return a&&a.t<1?ie(-5,1.4,-2.4,3):i.houseLift.value<.05?ie(-2.8,4.6,-3.4,2.8):ie(-2.9,4.6,-3.2,5)}case"fire.hose":return ie(-3.4,3.4,-.3,4.2);case"fire.spray":return o?ie(-1.9,3.3,-.3,4):ie(-2.4,3.8,-.3,3.7);case"fire.cleanup":return ie(-3.2,4.2,-3.2,6.2);case"fire.next":return i.booth2Rail.value<.97?ie(-6,6,-.3,6.6):mh;case"fish.trigger":{const a=i.signals.find(c=>c.path==="pump");return a&&a.t<1?ie(-5,6,-3.4,3.4):i.water.value<.3?ie(-2.8,6.1,-3.4,3.2):ie(-3,6.1,-1,4.2)}case"fish.fishing":case"fish.plug":{const a=e.line;return a.state==="lift"||a.state==="deliver"?ie(-3.3,3.6,-.3,4.4):o?ie(-2.8,4.6,-.3,4):ie(-3.2,5.6,-.3,4)}case"fish.drain":return ie(-2.6,6,-3.4,4);case"fish.next":return ie(-6,6,-3.4,6.4);case"space.trigger":{const a=i.signals.find(c=>c.path==="lever");return a&&a.t<1||i.lever.value<1?ie(-6.3,-.8,-.3,3.4):i.iris.value<.02?ie(-6.3,4,.5,8.2):ie(-4.2,5.2,-.3,10.5,{tilt:-.04})}case"space.float":{if(!o){const g=e.nearestItem(),p=g?(r.x+g.x)/2:r.x,v=ze(p,-1.2,1.9);return ie(v-5.4,v+5.4,-.3,9.4)}const a=e.nearestItem();let c=r.x-2.2,l=r.x+2.2,h=r.y-1.2,u=r.y+2.6;a&&(c=Math.min(c,a.x-1.2),l=Math.max(l,a.x+1.2),h=Math.min(h,a.y-1.2),u=Math.max(u,a.y+1.2));const f=Math.max(5.2,l-c),d=Math.max(5.5,u-h),x=ze((c+l)/2,ft.x0+f/2-.6,ft.x1-f/2+.6),m=ze((h+u)/2,d/2-.4,10.2-d/2);return ie(x-f/2,x+f/2,m-d/2,m+d/2)}case"space.return":return ie(-4.5,4.5,-.3,8.2);case"space.next":return ie(-6.3,6.3,-3.4,7.8);case"finale.walkout":return ie(-11,8,-3.6,11);case"finale.reveal":case"finale.dressing":return o?ie(-10.6,8.4,-.8,20):ie(-11.2,9,-1,19.6);case"finale.curtainClose":case"finale.curtainOpen":return o?ie(-10.8,1.2,-.8,13.5):ie(-11.2,9,-1,19.6);case"finale.zip":return o?ie(-4.2,4.2,-.6,10.8):ie(-7.4,7.4,-.8,11.2);case"finale.celebrate":case"finale.end":return ie(-10.4,10.4,-1.8,21);default:return ie(-6.3,6.3,-3.4,7.8)}}class Fv{constructor(t){this.camera=t,this.cx=0,this.cy=3,this.dist=30,this.tilt=.08,this.shake=0,this.initialized=!1,this.target=new A,this.fovTan=Math.tan(Md.degToRad(t.fov/2))}fit(t,e){const n=t.x1-t.x0,i=t.y1-t.y0,r=1.08,a=i*1.16/2/this.fovTan,c=n*r/2/(this.fovTan*e);return Math.max(a,c)}update(t,e,n,i=!1){const r=Nv(t,n),o=(r.x0+r.x1)/2,a=(r.y0+r.y1)/2,c=this.fit(r,n),l=r.tilt??.08;if(i||!this.initialized)this.cx=o,this.cy=a,this.dist=c,this.tilt=l,this.initialized=!0;else{const m=t.chapter.id==="space"&&t.phase==="float"?1.4:1.7;this.cx=ce(this.cx,o,m,e),this.cy=ce(this.cy,a,m,e),this.dist=ce(this.dist,c,m*.9,e),this.tilt=ce(this.tilt,l,m,e)}this.shake=Math.max(0,this.shake-e*2.5);const h=this.shake*this.shake*.12,u=performance.now()/1e3,f=Math.sin(u*37)*h,d=Math.cos(u*41)*h,x=this.camera;x.position.set(this.cx+f,this.cy+this.dist*this.tilt+d,this.dist),this.target.set(this.cx+f*.5,this.cy+d*.5,0),x.lookAt(this.target)}kick(t){this.shake=Math.min(1,this.shake+t)}}const ql={uLevel:{value:-10},uTime:{value:0},uFront:{value:2.5},uWet:{value:0},uX0:{value:-6},uX1:{value:6}},Ov=`
uniform float uLevel;
uniform float uTime;
uniform float uFront;
uniform float uX0;
uniform float uX1;
varying vec3 vWPos;
float wCaustic(vec2 uv, float t) {
  vec2 p = mod(uv * 6.28318, 6.28318) - 250.0;
  vec2 i = p;
  float c = 1.0;
  float inten = 0.005;
  for (int n = 0; n < 3; n++) {
    float tt = t * (1.0 - (3.5 / float(n + 1)));
    i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
    c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
  }
  c /= 3.0;
  c = 1.17 - pow(c, 1.4);
  return clamp(pow(abs(c), 8.0), 0.0, 1.0);
}
`,kv=`
#include <opaque_fragment>
if (uLevel > -5.0 && vWPos.x > uX0 - 0.05 && vWPos.x < uX1 + 0.05 && vWPos.y > -0.05 && vWPos.z < uFront + 0.05) {
  float depth = uLevel - vWPos.y;
  if (depth > 0.0) {
    float path = max(uFront - vWPos.z, 0.0) + depth;
    vec3 absorb = exp(-vec3(0.22, 0.07, 0.055) * path);
    vec3 deep = vec3(0.05, 0.36, 0.45);
    float cz = wCaustic(vWPos.xz * 0.33 + vec2(0.0, vWPos.y * 0.2), uTime * 0.55);
    vec3 lit = gl_FragColor.rgb * (0.75 + 1.1 * cz * exp(-depth * 0.6));
    gl_FragColor.rgb = mix(deep, lit, absorb);
  } else if (depth > -2.6) {
    float k = exp(depth * 1.3);
    float cz = wCaustic(vWPos.xy * 0.22 + vWPos.zz * 0.1, uTime * 0.4);
    gl_FragColor.rgb += vec3(0.55, 0.8, 0.85) * cz * k * 0.35;
  }
}
`;function Cu(s){return s.onBeforeCompile=t=>{Object.assign(t.uniforms,ql),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <project_vertex>",`#include <project_vertex>
        vec4 wwp = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          wwp = instanceMatrix * wwp;
        #endif
        vWPos = (modelMatrix * wwp).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
`+Ov).replace("#include <opaque_fragment>",kv)},s.customProgramCacheKey=()=>"water1",s}const da=new Map;function G(s,{rough:t=.7,metal:e=0,map:n=null,water:i=!0,emissive:r=null,side:o}={}){const a=`p${s}|${t}|${e}|${n?.uuid}|${i}|${r}|${o}`;if(da.has(a))return da.get(a);const c=new ve({color:s,roughness:t,metalness:e,map:n});return r&&(c.emissive=new Pt(r)),o&&(c.side=o),i&&Cu(c),da.set(a,c),c}const $e={wall:"#f1dfc2",wainscot:"#3f8f8b",teal:"#2f8c85",tealDark:"#1f5f5b",red:"#d8433b",redDark:"#a92f2a",yellow:"#f3b634",gasYellow:"#f0c02e",pipeBlue:"#2f79c9",brass:"#c9a24a",iron:"#40464c",steel:"#9aa5ad",white:"#f7f4ee",wood:"#b07a45",woodDark:"#7a5230",rubber:"#2c2c30"},k={};function Bv(){return k.wall=G($e.wall,{rough:.9}),k.wainscot=G($e.wainscot,{rough:.8}),k.teal=G($e.teal,{rough:.55,metal:.2}),k.tealDark=G($e.tealDark,{rough:.6,metal:.2}),k.red=G($e.red,{rough:.45,metal:.1}),k.redDark=G($e.redDark,{rough:.5,metal:.1}),k.yellow=G($e.yellow,{rough:.5,metal:.05}),k.gas=G($e.gasYellow,{rough:.4,metal:.25}),k.pipeBlue=G($e.pipeBlue,{rough:.4,metal:.25}),k.brass=G($e.brass,{rough:.3,metal:.9}),k.iron=G($e.iron,{rough:.55,metal:.6}),k.steel=G($e.steel,{rough:.35,metal:.85}),k.white=G($e.white,{rough:.6}),k.wood=G($e.wood,{rough:.75}),k.woodDark=G($e.woodDark,{rough:.8}),k.rubber=G($e.rubber,{rough:.9}),k.black=G("#1c1d20",{rough:.6}),k.chrome=G("#dfe6ea",{rough:.15,metal:1}),k.glass=new gi({color:"#dff4ff",roughness:.05,metalness:0,transparent:!0,opacity:.22,depthWrite:!1,envMapIntensity:1.2}),k.lampOn=new ve({color:"#fff3d0",emissive:"#ffd98a",emissiveIntensity:2.2}),k}const js=new A;function An(s,t,e,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;js.copy(t),js[n]=0,js.normalize();const l=.5*o/(o+a),h=1-js.angleTo(s)/c;return Math.sign(js[e])===1?h*l:a/(o+a)+l+l*(1-h)}class Zl extends Xe{constructor(t=1,e=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new A,l=new A,h=new A(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,x=u.length/6,m=new A,g=.5/o;for(let p=0,v=0;p<u.length;p+=3,v+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/x)){case 0:m.set(1,0,0),d[v+0]=An(m,l,"z","y",r,n),d[v+1]=1-An(m,l,"y","z",r,e);break;case 1:m.set(-1,0,0),d[v+0]=1-An(m,l,"z","y",r,n),d[v+1]=1-An(m,l,"y","z",r,e);break;case 2:m.set(0,1,0),d[v+0]=1-An(m,l,"x","z",r,t),d[v+1]=An(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),d[v+0]=1-An(m,l,"x","z",r,t),d[v+1]=1-An(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),d[v+0]=1-An(m,l,"x","y",r,t),d[v+1]=1-An(m,l,"y","x",r,e);break;case 5:m.set(0,0,-1),d[v+0]=An(m,l,"x","y",r,t),d[v+1]=1-An(m,l,"y","x",r,e);break}}static fromJSON(t){return new Zl(t.width,t.height,t.depth,t.segments,t.radius)}}function Pu(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Oe;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=gh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let m=0;m<o[h].length;++m)d.push(o[h][m][f]);const x=gh(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function gh(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new He(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<e;x++){const m=h.getComponent(f,x);a.setComponent(f+u,x,m)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Iu(s,t,e,n=.04,i=2){return new Zl(s,t,e,i,Math.min(n,s/2-.001,t/2-.001,e/2-.001))}function ae(s,t,{x:e=0,y:n=0,z:i=0,rx:r=0,ry:o=0,rz:a=0,shadow:c=!0,receive:l=!0}={}){const h=new $(s,t);return h.position.set(e,n,i),h.rotation.set(r,o,a),h.castShadow=c,h.receiveShadow=l,h}function X(s,t,e,n,i={}){return ae(i.r?Iu(s,t,e,i.r):new Xe(s,t,e),n,i)}function Ft(s,t,e,n,i={}){return ae(new Ee(s,t,e,i.seg??20,1,i.open??!1),n,i)}function qi(s,t,e={}){return ae(new $t(s,e.seg??20,e.seg2??14),t,e)}function Hv(s,t=.18){const e=s.map(r=>r.isVector3?r:new A(r[0],r[1],r[2])),n=new vu;let i=e[0].clone();for(let r=1;r<e.length;r++){const o=e[r],a=e[r+1];if(!a){n.add(new ul(i,o.clone()));break}const c=o.clone().sub(i),l=a.clone().sub(o),h=Math.min(t,c.length()*.45,l.length()*.45),u=o.clone().sub(c.normalize().multiplyScalar(h)),f=o.clone().add(l.normalize().multiplyScalar(h));u.distanceTo(i)>1e-4&&n.add(new ul(i,u)),n.add(new Bl(u,o.clone(),f)),i=f}return n}function ai(s,t,e,{bend:n=.2,seg:i=10,radial:r=12}={}){const o=Hv(s,n),a=o.getLength(),c=new Yi(o,Math.max(8,Math.ceil(a*i)),t,r,!1),l=new $(c,e);return l.castShadow=!0,l.receiveShadow=!0,l.userData.path=o,l}function co(s,t,e,{hole:n=.25,toothDepth:i=null}={}){const r=i??Math.min(t*.18,Math.PI*2*t/s/2.2),o=new Cn,a=s*4;for(let l=0;l<=a;l++){const h=l/a*Math.PI*2,u=l%4,f=u===1||u===2?t:t-r,d=Math.cos(h)*f,x=Math.sin(h)*f;l===0?o.moveTo(d,x):o.lineTo(d,x)}if(n>0){const l=new pi;l.absarc(0,0,t*n,0,Math.PI*2,!0),o.holes.push(l)}if(t>.3)for(let l=0;l<5;l++){const h=l/5*Math.PI*2,u=t*.55,f=new pi;f.absarc(Math.cos(h)*u,Math.sin(h)*u,t*.14,0,Math.PI*2,!0),o.holes.push(f)}const c=new $n(o,{depth:e,bevelEnabled:!0,bevelThickness:e*.12,bevelSize:e*.1,bevelSegments:1,curveSegments:6});return c.translate(0,0,-e/2),c}function Vv(s,t){const e=[[.02,-t/2],[s,-t/2],[s,-t*.32],[s*.82,-t*.1],[s*.82,t*.1],[s,t*.32],[s,t/2],[.02,t/2]].map(([i,r])=>new K(i,r)),n=new Mo(e,28);return n.rotateX(Math.PI/2),n}function zu(s,t,e,n){const i=new at,r=new $(new Pe(s,t,10,36),n);i.add(r);for(let a=0;a<e;a++){const c=new $(new Ee(t*.6,t*.6,s*2,8),n);c.rotation.z=a/e*Math.PI,i.add(c)}const o=new $(new Ee(t*1.8,t*1.8,t*3,12),n);return o.rotation.x=Math.PI/2,i.add(o),i.traverse(a=>{a.castShadow=!0,a.receiveShadow=!0}),i}function dn(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,[e,e.getContext("2d")]}function Ii(s){let t=s>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function pn(s,{repeat:t=[1,1],srgb:e=!0,aniso:n=4}={}){const i=new wn(s);return i.wrapS=i.wrapT=mi,i.repeat.set(t[0],t[1]),i.anisotropy=n,e&&(i.colorSpace=Ue),i.needsUpdate=!0,i}const pa=new Map;function mn(s,t){return pa.has(s)||pa.set(s,t()),pa.get(s)}function Gv(){return mn("wood",()=>{const[s,t]=dn(1024,1024),e=Ii(7),n=8,i=1024/n;for(let r=0;r<n;r++){let o=-e()*300;for(;o<1024;){const a=260+e()*260,c=150+e()*40;t.fillStyle=`rgb(${c+55},${c+5},${c-55})`,t.fillRect(o,r*i,a,i);for(let l=0;l<16;l++){t.strokeStyle=`rgba(90,50,20,${.05+e()*.08})`,t.lineWidth=1+e()*2,t.beginPath();const h=r*i+e()*i;t.moveTo(o,h),t.bezierCurveTo(o+a*.3,h+(e()-.5)*12,o+a*.7,h+(e()-.5)*12,o+a,h),t.stroke()}t.fillStyle="rgba(60,30,10,0.55)",t.fillRect(o,r*i,3,i),o+=a}t.fillStyle="rgba(60,30,10,0.5)",t.fillRect(0,r*i,1024,3)}return pn(s,{repeat:[3,2]})})}function Wv(){return mn("wallpaper",()=>{const[s,t]=dn(512,512);t.fillStyle="#f4e6cc",t.fillRect(0,0,512,512);for(let e=0;e<512;e+=64)t.fillStyle="rgba(214,170,120,0.18)",t.fillRect(e,0,28,512);t.strokeStyle="rgba(190,120,90,0.35)",t.lineWidth=3;for(let e=32;e<512;e+=128)for(let n=46;n<512;n+=128){const i=e/128%2?64:0,r=n+i;t.beginPath(),t.moveTo(r-18,e+16),t.lineTo(r,e+2),t.lineTo(r+18,e+16),t.closePath(),t.stroke(),t.beginPath(),t.arc(r,e-4,5,Math.PI*.9,Math.PI*2.4),t.stroke()}return pn(s,{repeat:[4,2]})})}function xh(s="#d9d0c1",t="rgba(120,105,90,0.35)"){return mn("hatch"+s,()=>{const[e,n]=dn(256,256);n.fillStyle=s,n.fillRect(0,0,256,256);const i=Ii(3);for(let r=0;r<400;r++)n.fillStyle=`rgba(100,90,80,${i()*.18})`,n.fillRect(i()*256,i()*256,2,2);n.strokeStyle=t,n.lineWidth=3;for(let r=-256;r<512;r+=32)n.beginPath(),n.moveTo(r,256),n.lineTo(r+256,0),n.stroke();return pn(e,{repeat:[1,1]})})}function Xv(){return mn("soil",()=>{const[s,t]=dn(512,512),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#8a5d36"),e.addColorStop(.5,"#7a4f2d"),e.addColorStop(1,"#5f3c22"),t.fillStyle=e,t.fillRect(0,0,512,512);const n=Ii(11);for(let i=0;i<12;i++){t.fillStyle=`rgba(${40+n()*40},${25+n()*20},10,0.18)`;const r=n()*512;t.fillRect(0,r,512,6+n()*20)}for(let i=0;i<160;i++){const r=n()*512,o=n()*512,a=3+n()*9,c=120+n()*80;t.fillStyle=`rgb(${c},${c*.85},${c*.7})`,t.beginPath(),t.ellipse(r,o,a,a*(.6+n()*.4),n()*3,0,Math.PI*2),t.fill(),t.fillStyle="rgba(0,0,0,0.2)",t.beginPath(),t.ellipse(r+1.5,o+1.5,a,a*.6,0,0,Math.PI*2),t.fill()}return pn(s,{repeat:[3,1]})})}function Yv(){return mn("brick",()=>{const[s,t]=dn(512,512);t.fillStyle="#e8d2b6",t.fillRect(0,0,512,512);const e=Ii(5),n=32;for(let i=0;i<16;i++){const r=i%2?32:0;for(let o=-64;o<512;o+=64){const a=225+e()*20;t.fillStyle=`rgb(${a},${a*.8},${a*.62})`,t.fillRect(o+r+3,i*n+3,58,n-6)}}return pn(s,{repeat:[6,3]})})}function qv(s,t,e=8,n=""){return mn(`stripes${s}${t}${e}${n}`,()=>{const[i,r]=dn(256,64);for(let a=0;a<e;a++)r.fillStyle=a%2?t:s,r.fillRect(a*256/e,0,256/e+1,64);const o=Ii(9);for(let a=0;a<600;a++)r.fillStyle=`rgba(255,255,255,${o()*.06})`,r.fillRect(o()*256,o()*64,1,3);return pn(i,{repeat:[1,1]})})}function Zv(s="#b3202c"){return mn("velvet"+s,()=>{const[t,e]=dn(256,256);e.fillStyle=s,e.fillRect(0,0,256,256);const n=Ii(21);for(let i=0;i<256;i+=2)e.fillStyle=`rgba(255,255,255,${.02+n()*.04})`,e.fillRect(i,0,1,256);for(let i=0;i<1500;i++)e.fillStyle=`rgba(0,0,0,${n()*.08})`,e.fillRect(n()*256,n()*256,1,1);return pn(t,{repeat:[4,1]})})}function jl(){return mn("puff",()=>{const[s,t]=dn(128,128),e=Ii(13);for(let i=0;i<28;i++){const r=e()*Math.PI*2,o=e()*26,a=64+Math.cos(r)*o,c=64+Math.sin(r)*o,l=18+e()*22,h=t.createRadialGradient(a,c,0,a,c,l);h.addColorStop(0,"rgba(255,255,255,0.32)"),h.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=h,t.fillRect(0,0,128,128)}const n=pn(s,{srgb:!1});return n.wrapS=n.wrapT=Gn,n})}function Bn(){return mn("glow",()=>{const[s,t]=dn(64,64),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=pn(s,{srgb:!1});return n.wrapS=n.wrapT=Gn,n})}function vr(s="#e3c48f",t="#9b7a45"){return mn("rope"+s,()=>{const[e,n]=dn(64,64);n.fillStyle=s,n.fillRect(0,0,64,64),n.strokeStyle=t,n.lineWidth=7;for(let r=-64;r<128;r+=16)n.beginPath(),n.moveTo(r,0),n.lineTo(r+40,64),n.stroke();return pn(e,{repeat:[1,1]})})}function Qr(s="#e8543f"){return mn("knit"+s,()=>{const[t,e]=dn(256,256);e.fillStyle=s,e.fillRect(0,0,256,256);const n=Ii(33);for(let i=0;i<256;i+=8)for(let r=0;r<256;r+=8)e.fillStyle=`rgba(255,255,255,${.03+n()*.05})`,e.beginPath(),e.ellipse(r+2,i+4,2,3.5,.5,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(0,0,0,${.03+n()*.05})`,e.beginPath(),e.ellipse(r+6,i+4,2,3.5,-.5,0,Math.PI*2),e.fill();return pn(t,{repeat:[6,6]})})}function vh(s="#e9e3d6",t="#cfc6b3"){return mn("tiles"+s+t,()=>{const[e,n]=dn(256,256);for(let i=0;i<4;i++)for(let r=0;r<4;r++)n.fillStyle=(r+i)%2?s:t,n.fillRect(r*64,i*64,64,64);n.strokeStyle="rgba(0,0,0,0.12)",n.lineWidth=2;for(let i=0;i<=256;i+=64)n.beginPath(),n.moveTo(i,0),n.lineTo(i,256),n.moveTo(0,i),n.lineTo(256,i),n.stroke();return pn(e,{repeat:[6,3]})})}function jv(){return mn("clothStack",()=>{const[s,t]=dn(128,128),e=["#e76f51","#f4a261","#e9c46a","#2a9d8f","#8ab17d","#6d9dc5","#c77dff","#f28482"];for(let n=0;n<8;n++)t.fillStyle=e[n],t.fillRect(0,n*16,128,14),t.fillStyle="rgba(0,0,0,0.12)",t.fillRect(0,n*16+13,128,3);return pn(s)})}function $v(){return mn("mural",()=>{const[s,t]=dn(1024,640),e=1024,n=640,i=["#ffc6d3","#ffeec8","#c6ebe0","#ffeec8"];for(let l=0;l<16;l++)t.fillStyle=i[l%4],t.fillRect(l*e/16,0,e/16+1,n);const r=(l,h,u,f)=>{t.fillStyle=f,t.beginPath(),t.moveTo(l-30*u,h),t.lineTo(l+30*u,h),t.lineTo(l+38*u,h+40*u),t.lineTo(l+80*u,h+170*u),t.lineTo(l-80*u,h+170*u),t.lineTo(l-38*u,h+40*u),t.closePath(),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(l,h+4*u,22*u,0,Math.PI),t.fill()},o=(l,h,u)=>{t.strokeStyle="#8a5a3a",t.lineWidth=7*u,t.lineJoin="round",t.beginPath(),t.moveTo(l-60*u,h+38*u),t.lineTo(l,h),t.lineTo(l+60*u,h+38*u),t.stroke(),t.beginPath(),t.arc(l,h-16*u,12*u,Math.PI*.9,Math.PI*2.4),t.stroke()},a=(l,h,u,f)=>{t.beginPath();for(let d=0;d<10;d++){const x=-Math.PI/2+d*Math.PI/5,m=d%2?u*.45:u;t.lineTo(l+Math.cos(x)*m,h+Math.sin(x)*m)}t.closePath(),t.fillStyle=f,t.fill()};o(200,150,1),r(200,185,1,"#7cc6ea"),o(512,120,1.1),t.fillStyle="#e8543f",t.beginPath(),t.moveTo(420,175),t.lineTo(604,175),t.lineTo(680,250),t.lineTo(640,290),t.lineTo(610,262),t.lineTo(610,420),t.lineTo(414,420),t.lineTo(414,262),t.lineTo(384,290),t.lineTo(344,250),t.closePath(),t.fill(),t.beginPath(),t.ellipse(512,170,70,55,0,Math.PI,Math.PI*2),t.fill(),a(512,285,46,"#ffd23f"),t.fillStyle="#c63f2e",t.fillRect(414,400,196,20),o(824,150,1),r(824,185,1,"#f7c51e");for(let l=0;l<24;l++)a(40+l*173%950,40+l*97%560,9+l%3*4,l%2?"#ffc2d1":"#9ad8c8");for(let l=0;l<n;l+=10)t.fillStyle="rgba(0,0,0,0.13)",t.fillRect(0,l,e,2),t.fillStyle="rgba(255,255,255,0.25)",t.fillRect(0,l+2,e,2);const c=pn(s,{repeat:[1,1]});return c.wrapS=c.wrapT=Gn,c})}function Jv(s){const t=new at;t.name="building",s.add(t);const e=ft,n=e.x1-e.x0,i=G("#e2d7c4",{map:xh("#e2d7c4"),rough:.95}),r=G("#7a4f2d",{map:Xv(),rough:1});r.map.repeat.set(3,4);const o=30,a=-14;for(const F of[-1,1]){const Z=F<0?-40:e.x1+e.wall,W=F<0?e.x0-e.wall:40;t.add(X(W-Z,o,e.front-a,r,{x:(Z+W)/2,y:-o/2,z:(e.front+a)/2,shadow:!1}))}t.add(X(n+e.wall*2,o+e.basement,e.front-a,r,{x:0,y:(e.basement-.35-o)/2,z:(e.front+a)/2,shadow:!1})),t.add(X(n+e.wall*2,3.3+.35,a-(e.back-e.wall),r,{x:0,y:e.basement/2-.17,z:(a+e.back-e.wall)/2,shadow:!1}));const c=G("#7cc26b",{rough:1});for(const F of[-1,1]){const Z=F<0?-40:e.x1+e.wall,W=F<0?e.x0-e.wall:40;t.add(X(W-Z,.08,e.front-a-1.2,c,{x:(Z+W)/2,y:.04,z:(e.front-1.2+a)/2,shadow:!1}))}const l=G("#d8d2c6",{map:vh("#dcd6ca","#cbc4b6"),rough:.9});l.map.repeat.set(24,1),t.add(X(80,.18,e.sidewalk.z1-e.sidewalk.z0+1.2,l,{x:0,y:-.09,z:(e.sidewalk.z0-1.2+e.sidewalk.z1)/2,shadow:!1})),t.add(X(80,.2,.12,G("#bdb6a8",{rough:.9}),{x:0,y:-.08,z:e.sidewalk.z1+.06,shadow:!1}));const h=G("#bdb3a2",{map:vh("#c9bfad","#b3a996"),rough:.9});h.map.repeat.set(6,2),t.add(X(n,.3,e.front-e.back,h,{x:0,y:e.basement-.15,z:(e.front+e.back)/2}));const u=G("#cfc7b8",{map:xh("#cfc7b8","rgba(120,105,90,0.12)"),rough:.95});t.add(X(n,3.3-e.slab,.3,u,{x:0,y:(e.basement-e.slab)/2,z:e.back-.15}));const f=G("#c8925a",{map:Gv(),rough:.62});f.map.repeat.set(4,2);const d=X(n,e.slab,e.front-e.back,f,{x:0,y:-.3/2,z:(e.front+e.back)/2});d.name="floor",t.add(d),t.add(X(n+.02,e.slab-.04,.05,i,{x:0,y:-.3/2-.02,z:e.front+.02,shadow:!1}));const x=G($e.wall,{map:Wv(),rough:.9});x.map.repeat.set(5,2.5);const m=Tt.x-1,g=Tt.x+1,p=2.85,v=(F,Z,W,dt)=>{const yt=X(Z-F,dt-W,.3,x,{x:(F+Z)/2,y:(W+dt)/2,z:e.back-.15});t.add(yt)};v(e.x0,m,0,e.ceil),v(g,e.x1,0,e.ceil),v(m,g,p,e.ceil);for(const[F,Z]of[[e.x0,m],[g,e.x1]])t.add(X(Z-F,.9,.06,k.wainscot,{x:(F+Z)/2,y:.45,z:e.back+.03})),t.add(X(Z-F,.07,.1,k.woodDark,{x:(F+Z)/2,y:.92,z:e.back+.05}));t.add(X(g-m+.2,.12,.12,k.woodDark,{x:Tt.x,y:p+.06,z:e.back+.02}));for(const F of[e.x0-e.wall/2,e.x1+e.wall/2])t.add(X(e.wall,e.attic-e.basement,e.front-e.back+.3,G("#efe2cc",{rough:.9}),{x:F,y:(e.attic+e.basement)/2,z:(e.front+e.back-.3)/2})),t.add(X(e.wall+.02,e.attic-e.basement,.05,i,{x:F,y:(e.attic+e.basement)/2,z:e.front+.02,shadow:!1}));const y=.3,_=G("#f4ead8",{rough:.95}),S=Ce.iris,T=new Cn;T.moveTo(e.x0,e.back),T.lineTo(e.x1,e.back),T.lineTo(e.x1,e.front),T.lineTo(e.x0,e.front),T.lineTo(e.x0,e.back);const E=new pi;E.absarc(S.x,-.6,S.r+.05,0,Math.PI*2,!0),T.holes.push(E);const C=new $n(T,{depth:y,bevelEnabled:!1,curveSegments:48});C.rotateX(Math.PI/2);const b=ae(C,_,{y:e.ceil+y});t.add(b),t.add(X(n+.02,y-.02,.05,i,{x:0,y:e.ceil+y/2,z:e.front+.02,shadow:!1}));const M=G("#c9b08a",{rough:.9}),P=e.attic-e.ceil-y,z=(e.attic+e.ceil+y)/2;t.add(X(hn.x0-e.x0,P,.3,M,{x:(e.x0+hn.x0)/2,y:z,z:e.back-.15})),t.add(X(e.x1-hn.x1,P,.3,M,{x:(e.x1+hn.x1)/2,y:z,z:e.back-.15}));for(let F=e.x0+.6;F<e.x1;F+=1.6)F>hn.x0-.1&&F<hn.x1+.1||t.add(X(.14,P,.14,k.woodDark,{x:F,y:z,z:e.back+.1}));const N=.6,U=G("#c8563e",{rough:.7});for(const F of[-1,1]){const Z=new Cn,W=F<0?e.x0-e.wall-N:e.x1+e.wall+N,dt=F<0?e.x0+1.2:e.x1-1.2,yt=F<0?hn.x0:hn.x1;Z.moveTo(W,e.attic),Z.lineTo(yt,e.attic),Z.lineTo(yt,e.roof),Z.lineTo(dt,e.roof),Z.lineTo(W,e.attic+.28),Z.closePath();const Et=new $n(Z,{depth:e.front-e.back+1,bevelEnabled:!1});Et.translate(0,0,e.back-.6),t.add(ae(Et,U))}t.add(X(n+2*e.wall+2*N,.12,.08,G("#fff4e0",{rough:.6}),{x:0,y:e.attic+.06,z:e.front+.45,shadow:!1}));const D=G("#e8cfae",{map:Yv(),rough:.9});for(const F of[e.x0-e.wall-.01,e.x1+e.wall+.01]){const Z=X(.02,e.attic,e.front-e.back,D,{x:F,y:e.attic/2,z:(e.front+e.back)/2,shadow:!1});t.add(Z)}return Kv(t),Qv(t),ty(t),ey(t),ny(s),t}function Kv(s){const t=ft,e=G("#e9dcc4",{rough:.8}),n=G("#ffffff",{map:jv(),rough:.9});for(const[i,r]of[[4.95,5.85]]){const o=r-i,a=(i+r)/2;s.add(X(o,3.6,.55,G("#d7c4a3",{rough:.85}),{x:a,y:1.8,z:t.back+.3}));for(let c=0;c<5;c++){const l=.35+c*.72;s.add(X(o+.06,.06,.62,e,{x:a,y:l,z:t.back+.34}));for(let h=0;h<2;h++){const u=X(o*.38,.32,.4,n,{x:a+(h-.5)*o*.45,y:l+.19,z:t.back+.36,r:.03});u.material=n,s.add(u)}}}}function Qv(s){const t=k.chrome,e=["#e76f51","#2a9d8f","#e9c46a","#6d9dc5","#f28482","#8ab17d","#c77dff"],n=[{x0:.45,x1:2.75,z:-2.75,y:1.75}];for(const i of n){const r=i.x1-i.x0,o=(i.x0+i.x1)/2;s.add(Ft(.025,.025,r,t,{x:o,y:i.y,z:i.z,rz:Math.PI/2}));for(const c of[i.x0,i.x1])s.add(Ft(.025,.025,i.y,t,{x:c,y:i.y/2,z:i.z})),s.add(X(.5,.03,.05,t,{x:c,y:.015,z:i.z}));let a=0;for(let c=i.x0+.18;c<i.x1-.1;c+=.24){const l=e[((a*3+Math.round(c*7))%e.length+e.length)%e.length],h=new at,u=new $(new Pe(.04,.008,6,12,Math.PI*1.4),k.chrome);u.position.y=.02,u.rotation.z=Math.PI*.8,h.add(u);const f=X(.34,.02,.02,k.woodDark,{y:-.06});h.add(f);const d=ae(Iu(.36,.62,.05,.02),G(l,{rough:.9}),{y:-.38});h.add(d),h.position.set(c,i.y,i.z),h.rotation.y=1.25,s.add(h),a++}}}function ty(s){for(const t of[-4.2,-1.5,3.4]){s.add(Ft(.01,.01,.8,k.black,{x:t,y:ft.ceil-.4,z:-1.2,shadow:!1}));const e=ae(new Us(.32,.26,20,1,!0),G("#2f6f6b",{rough:.5,side:be}),{x:t,y:ft.ceil-.9,z:-1.2});s.add(e),s.add(ae(new $t(.1,12,8),k.lampOn,{x:t,y:ft.ceil-1,z:-1.2,shadow:!1}))}}function ey(s){const t=G("#6b4a2c",{rough:.8}),e=Ht.hatch,n=.012,i=(r,o,a,c)=>{s.add(X(o,n,.03,t,{x:r,y:n/2,z:a-c/2,shadow:!1,receive:!1})),s.add(X(o,n,.03,t,{x:r,y:n/2,z:a+c/2,shadow:!1,receive:!1})),s.add(X(.03,n,c,t,{x:r-o/2,y:n/2,z:a,shadow:!1,receive:!1})),s.add(X(.03,n,c,t,{x:r+o/2,y:n/2,z:a,shadow:!1,receive:!1}))};i(e.x,e.w,e.z,e.d),i(Tt.x,Tt.w+.2,Tt.z,Tt.d+.2)}function ny(s){const t=new at;t.name="town";const e=["#f2c6a0","#cfe3c1","#f5dfa6","#bcd6ee","#f0b8b0","#d9c7ef"];let n=0;for(let c=-60;c<60;c+=6.5){if(Math.abs(c)<9)continue;const l=5+n*37%7,h=4.5+n*13%3,u=X(h,l,4,G(e[n%e.length],{rough:.95,water:!1}),{x:c,y:l/2,z:-20-n%3*2.5,shadow:!1});t.add(u);for(let f=1.2;f<l-.8;f+=1.6)for(let d=-h/2+.9;d<h/2-.5;d+=1.3)t.add(X(.6,.8,.05,G("#7fa6c6",{rough:.3,water:!1}),{x:c+d,y:f,z:u.position.z+2.03,shadow:!1}));n++}for(let c=0;c<10;c++){const l=-38+c*8.4+c*17%5;if(Math.abs(l)<10)continue;const h=Ft(.18,.25,1.8,G("#7a5230",{water:!1}),{x:l,y:.9,z:-8-c%3,shadow:!1}),u=ae(new Hl(1.5,1),G("#5daa5a",{rough:1,water:!1}),{x:l,y:2.8,z:-8-c%3,shadow:!1});t.add(h,u)}s.add(t);const i=new $t(180,32,16),r=new Ve({side:Je,depthWrite:!1,uniforms:{uNight:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform float uNight;
      void main(){
        float h = normalize(vP).y;
        // Linear values chosen so that, after ACES tone mapping, the few degrees of sky the
        // dollhouse camera sees read as a clear blue (pale at the horizon, deeper above).
        vec3 day = mix(vec3(0.11, 0.95, 4.0), vec3(0.022, 0.58, 2.9), smoothstep(-0.03, 0.08, h));
        day = mix(day, vec3(0.028, 0.32, 1.72), smoothstep(0.08, 0.3, h));
        vec3 dusk = mix(vec3(0.98,0.62,0.42), vec3(0.16,0.14,0.36), smoothstep(-0.05, 0.45, h));
        gl_FragColor = vec4(mix(day, dusk, uNight), 1.0);
      }`}),o=new $(i,r);o.name="sky",s.add(o),s.userData.sky=r;const a=G("#ffffff",{rough:1,water:!1});for(let c=0;c<7;c++){const l=new at;for(let h=0;h<4;h++)l.add(ae(new $t(1.2+h%2*.6,12,8),a,{x:h*1.3,y:h%2*.5,shadow:!1}));l.position.set(-45+c*15,16+c%3*3,-40-c%2*10),l.scale.setScalar(1.4),s.add(l)}}const iy=new A(0,-1,0),ma=new A,yh=new fi,bs="#f7cdb4",sy="#5b3a29",$s={dress:{body:"#7cc6ea",sleeve:"#7cc6ea",fore:bs,hand:bs,thigh:bs,shin:"#ffffff",shoe:"#e0474c"},fire:{body:"#d7b064",sleeve:"#d7b064",fore:"#d7b064",hand:"#3b3b3b",thigh:"#d7b064",shin:"#d7b064",shoe:"#232323"},fish:{body:"#f7c51e",sleeve:"#f7c51e",fore:"#f7c51e",hand:bs,thigh:"#2f4f6f",shin:"#3f8a4f",shoe:"#3f8a4f"},space:{body:"#f4f4f2",sleeve:"#f4f4f2",fore:"#f4f4f2",hand:"#e87a2e",thigh:"#f4f4f2",shin:"#f4f4f2",shoe:"#9aa1a8"}};function to(s,t,e){const n=new $(new Zn(s,t,4,10),e);return n.position.y=-t/2,n.castShadow=!0,n}class ry{constructor(t){this.root=new at,this.root.name="girl",t.add(this.root),this.body=new at,this.root.add(this.body),this.mats={};for(const e of["sleeve","fore","hand","thigh","shin","shoe"])this.mats[e]=new ve({color:bs,roughness:.7});this.skin=G(bs,{rough:.65}),this.buildHead(),this.buildLimbs(),this.buildOutfits(),this.buildProps(),this.yaw=.5,this.pose={},this.blink=0,this.nextBlink=2,this.outfit=null,this.hopT=1,this.time=0,this.root.traverse(e=>{e.isMesh&&(e.geometry.computeBoundingSphere(),e.castShadow=e.geometry.boundingSphere.radius>.06)})}buildHead(){const t=new at;t.position.y=.735,this.body.add(t),this.head=t;const e=new $(new $t(.205,32,24),this.skin);e.position.y=.195,e.castShadow=!0,t.add(e);const n=G(sy,{rough:.55}),i=new $(new $t(.218,32,20,0,Math.PI*2,0,Math.PI*.62),n);i.position.y=.2,i.rotation.x=-.42,t.add(i);const r=new $(new $t(.214,24,12,-Math.PI*.36,Math.PI*.72,Math.PI*.22,Math.PI*.16),n);r.position.y=.195,t.add(r),this.pigtails=[];for(const l of[-1,1]){const h=new at;h.position.set(l*.2,.2,-.04);const u=new $(new $t(.075,16,12),n);u.position.set(l*.06,-.06,0),u.scale.set(.9,1.25,.9),h.add(u);const f=new $(new Pe(.03,.012,8,14),G("#ff6b8b",{rough:.5}));f.rotation.y=Math.PI/2,f.position.set(l*.012,0,0),h.add(f),t.add(h),this.pigtails.push(h)}const o=G("#231815",{rough:.3}),a=new kn({color:"#ffffff"});this.eyes=[];for(const l of[-1,1]){const h=new at;h.position.set(l*.072,.205,.178),h.rotation.y=l*.3;const u=new $(new $t(.03,14,10),o);u.scale.set(.85,1.25,.5),h.add(u);const f=new $(new $t(.009,8,6),a);f.position.set(.01,.014,.014),h.add(f),t.add(h),this.eyes.push(h);const d=new $(new Zn(.006,.035,2,6),n);d.rotation.z=Math.PI/2+l*.12,d.position.set(l*.075,.27,.17),t.add(d);const x=new $(new _o(.03,16),new kn({color:"#ff8fa3",transparent:!0,opacity:.55,depthWrite:!1}));x.position.set(l*.12,.15,.162),x.rotation.y=l*.62,t.add(x)}const c=G("#b0413e",{rough:.5});this.smile=new $(new Pe(.03,.0065,6,16,Math.PI),c),this.smile.rotation.z=Math.PI,this.smile.position.set(0,.135,.19),t.add(this.smile),this.oMouth=new $(new $t(.02,12,8),c),this.oMouth.scale.set(1,1.2,.5),this.oMouth.position.set(0,.125,.192),this.oMouth.visible=!1,t.add(this.oMouth)}buildLimbs(){const t=this.mats;this.arms=[];for(const e of[-1,1]){const n=new at;n.position.set(e*.135,.655,0);const i=to(.042,.13,t.sleeve);n.add(i);const r=new at;r.position.y=-.17,n.add(r),r.add(to(.037,.12,t.fore));const o=new $(new $t(.043,12,10),t.hand);o.position.y=-.17,r.add(o),this.body.add(n),this.arms.push({sh:n,el:r,hand:o,side:e})}this.legs=[];for(const e of[-1,1]){const n=new at;n.position.set(e*.07,.4,0),n.add(to(.05,.13,t.thigh));const i=new at;i.position.y=-.2,n.add(i),i.add(to(.045,.12,t.shin));const r=new $(new Zn(.05,.07,4,8),t.shoe);r.rotation.x=Math.PI/2,r.position.set(0,-.18,.03),r.scale.set(1.05,1,.8),i.add(r),this.root.add(n),this.legs.push({hip:n,knee:i,side:e})}}lathe(t,e,n=28){const i=new Mo(t.map(([o,a])=>new K(o,a)),n),r=new $(i,e);return r.castShadow=!0,r}buildOutfits(){const t={},e=new at;e.add(this.lathe([[0,.3],[.27,.3],[.25,.36],[.19,.5],[.135,.64],[.1,.72],[0,.73]],G($s.dress.body,{rough:.8})));const n=new $(new Pe(.085,.022,8,20),G("#ffffff",{rough:.8}));n.rotation.x=Math.PI/2,n.position.y=.71,e.add(n);const i=new $(new $t(.03,10,8),G("#ff6b8b",{rough:.6}));i.position.set(0,.68,.09),i.scale.set(1.6,.8,.6),e.add(i),t.dress=e;const r=new at,o=G($s.fire.body,{rough:.85});r.add(this.lathe([[0,.26],[.2,.26],[.2,.3],[.18,.5],[.16,.66],[.11,.73],[0,.74]],o));const a=new ve({color:"#f5f06a",emissive:"#6a6a20",roughness:.3,metalness:.2}),c=new ve({color:"#e8eef2",emissive:"#555",roughness:.2,metalness:.6});for(const[U,D]of[[.33,.198],[.5,.183]]){const F=new $(new Ee(D+.004,D+.006,.05,28,1,!0),a);F.position.y=U,r.add(F);const Z=new $(new Ee(D+.006,D+.007,.018,28,1,!0),c);Z.position.y=U,r.add(Z)}const l=new at;l.position.y=.2;const h=G("#d8322c",{rough:.3,metal:.1}),u=new $(new $t(.235,24,14,0,Math.PI*2,0,Math.PI*.52),h);u.position.y=.02,l.add(u);const f=new $(new Ee(.3,.33,.03,28),h);f.position.set(0,0,-.05),f.scale.set(1,1,1.15),l.add(f);const d=new $(new Pe(.22,.02,8,24,Math.PI),h);d.rotation.y=Math.PI/2,d.position.y=.03,l.add(d);const x=new $(new Ee(.06,.06,.02,6),G("#f4c542",{rough:.3,metal:.7}));x.rotation.x=Math.PI/2-.35,x.position.set(0,.13,.2),l.add(x),t.fire=r,t.fireHat=l;const m=new at,g=G($s.fish.body,{rough:.35});m.add(this.lathe([[0,.24],[.23,.24],[.22,.29],[.18,.5],[.155,.66],[.11,.73],[0,.74]],g));for(let U=0;U<3;U++){const D=new $(new Zn(.01,.035,2,6),G("#5a3b22",{rough:.6}));D.rotation.z=Math.PI/2,D.position.set(0,.36+U*.12,.2-U*.025),m.add(D)}const p=new at;p.position.y=.2;const v=new $(new $t(.23,24,14,0,Math.PI*2,0,Math.PI*.5),g);v.position.y=.03,p.add(v);const y=this.lathe([[.2,.04],[.34,-.03],[.35,-.045],[.2,.025]],g,32);y.rotation.x=-.18,p.add(y),t.fish=m,t.fishHat=p;const _=new at,S=G($s.space.body,{rough:.75});_.add(this.lathe([[0,.28],[.19,.28],[.21,.34],[.2,.42],[.215,.5],[.2,.58],[.17,.68],[.11,.74],[0,.75]],S));const T=G("#ef7d2d",{rough:.6}),E=new $(new Pe(.205,.018,8,28),T);E.rotation.x=Math.PI/2,E.position.y=.4,_.add(E);const C=new $(new Xe(.14,.09,.04),G("#cfd6dc",{rough:.4,metal:.3}));C.position.set(0,.56,.2),_.add(C);for(let U=0;U<3;U++){const D=new $(new $t(.012,8,6),new ve({color:["#ff5a5a","#5ad17a","#5aa0ff"][U],emissive:["#aa2020","#20aa40","#2050aa"][U]}));D.position.set(-.04+U*.04,.56,.222),_.add(D)}const b=new at;b.position.set(0,.52,-.2);const M=new $(new Xe(.3,.34,.14),G("#e3e6e8",{rough:.5}));b.add(M),this.thrusters=[];for(const U of[-1,1]){const D=new $(new Ee(.03,.045,.07,12),G("#5d646b",{rough:.4,metal:.7}));D.position.set(U*.1,-.2,-.02),b.add(D),this.thrusters.push(D)}_.add(b),this.pack=b;const P=new at;P.position.y=.19;const z=new $(new $t(.3,32,24),new gi({color:"#e8f6ff",roughness:.02,metalness:0,transparent:!0,opacity:.18,clearcoat:1,envMapIntensity:2.5,depthWrite:!1}));z.renderOrder=5,P.add(z);const N=new $(new Pe(.17,.04,10,28),G("#bfc6cc",{rough:.35,metal:.8}));N.rotation.x=Math.PI/2,N.position.y=-.23,P.add(N),this.visor=new $(new $t(.305,32,16,-Math.PI*.42,Math.PI*.84,Math.PI*.18,Math.PI*.42),new gi({color:"#f3c34a",metalness:1,roughness:.12,transparent:!0,opacity:.45,depthWrite:!1})),this.visor.renderOrder=6,P.add(this.visor),t.space=_,t.spaceHat=P;for(const[U,D]of Object.entries(t))D.visible=!1,U.endsWith("Hat")?this.head.add(D):this.body.add(D);this.outfits=t}buildProps(){this.bundle=new $(new Xe(.34,.12,.24),G("#ffffff",{rough:.9})),this.bundle.visible=!1,this.body.add(this.bundle);const t=new at,e=new $(new Ee(.035,.06,.32,14),G("#caa24c",{rough:.25,metal:.95}));e.rotation.x=Math.PI/2,e.position.z=.1,t.add(e);const n=new $(new Ee(.03,.03,.12,10),G("#222",{rough:.8}));n.position.set(0,-.06,-.02),t.add(n);const i=new $(new Pe(.06,.012,6,12,Math.PI),G("#d23a31",{rough:.4}));i.position.set(0,.04,.02),t.add(i),t.visible=!1,this.nozzle=t,this.root.parent.add(t),this.rod=new at,this.rodSegs=[];const r=G("#3a2a1f",{rough:.5,metal:.2});for(let o=0;o<8;o++){const a=.018-o*.0018,c=new $(new Ee(a*.9,a,.225,8),o===0?G("#1f1f1f",{rough:.8}):r);c.castShadow=!0,this.rod.add(c),this.rodSegs.push(c)}this.reel=new $(new Ee(.05,.05,.04,16),G("#c0c6cc",{rough:.3,metal:.9})),this.rod.add(this.reel),this.rod.visible=!1,this.root.parent.add(this.rod),this.rodTip=new A}setOutfit(t){if(this.outfit===t)return;this.outfit=t;for(const[n,i]of Object.entries(this.outfits))i.visible=n===t||n===t+"Hat";const e=$s[t];for(const n of["sleeve","fore","hand","thigh","shin","shoe"])this.mats[n].color.set(e[n]);for(const n of this.pigtails)n.visible=t!=="space"&&t!=="fire";if(t==="space")for(const n of["sleeve","fore","thigh","shin"])this.mats[n].roughness=.75}handWorld(t,e=new A){return this.arms[t].hand.getWorldPosition(e)}aimArm(t,e,n=.2,i=14,r=1/60){const o=this.arms[t];ma.copy(e).normalize(),yh.setFromUnitVectors(iy,ma),o.sh.quaternion.slerp(yh,1-Math.exp(-i*r)),o.el.rotation.x=ce(o.el.rotation.x,-n,i,r)}update(t,e,n){const i=e.girl;this.time+=t,this.root.visible=i.visible,this.setOutfit(i.outfit);const r=this.time,o=i.action,a=i.actionTime;let c=i.y;o==="hop"&&(c+=Math.max(0,Math.sin(Math.min(1,a/.45)*Math.PI))*.35),(o==="pose"||o==="cheer")&&i.mode!=="float"&&(c+=Math.abs(Math.sin(a*7))*(o==="pose"?.08:.14)*(a<1.6?1:0)),this.root.position.set(i.x,c,i.z);let l=i.facing*.55;if(o==="walk"&&i.target){const E=i.target.x-i.x,C=i.target.z-i.z;l=Math.atan2(E,C),Math.abs(E)>Math.abs(C)*1.5&&(l=i.facing*1.15)}else["spray","cast","reel","fishing","lift","swing","pull"].includes(o)||i.holding==="rod"?l=i.facing*1.05:i.mode==="float"?l=i.facing*.8:o==="take"&&(l=i.facing*1.2);let h=l-this.yaw;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;this.yaw+=h*(1-Math.exp(-10*t)),this.root.rotation.y=this.yaw;const u=o==="walk",f=i.walkDist*9.5,d=u?Math.abs(Math.sin(f))*.035:Math.sin(r*2.2)*.006;this.body.position.y=d;let x=0;o==="spray"&&(x=-.12*i.lean),(o==="reel"||o==="pull")&&(x=-.1-.12*i.lean),i.mode==="float"&&(x=Math.sin(r*1.3)*.08),this.body.rotation.x=ce(this.body.rotation.x,x,8,t),this.body.rotation.z=ce(this.body.rotation.z,i.mode==="float"?Math.sin(r*.9)*.12:0,5,t);for(const E of this.legs){let C=0,b=0,M=0;u?(C=Math.sin(f+(E.side>0?0:Math.PI))*.55,b=Math.max(0,-Math.cos(f+(E.side>0?0:Math.PI)))*.7):i.mode==="float"?(C=Math.sin(r*1.6+E.side)*.35-.2,b=.35+Math.sin(r*1.6+E.side+1)*.25,M=E.side*.15):o==="hop"?(C=-.4,b=.8*Math.sin(Math.min(1,a/.45)*Math.PI)):o==="reel"||o==="pull"?(C=E.side>0?.35:-.2,b=.25):o==="spray"&&(C=E.side>0?.3:-.25,b=.15),E.hip.rotation.x=ce(E.hip.rotation.x,-C,14,t),E.hip.rotation.z=ce(E.hip.rotation.z,M,8,t),E.knee.rotation.x=ce(E.knee.rotation.x,b,14,t)}this.arms;const m=(E,C,b)=>ma.set(E,C,b),g=i.holding&&i.holding.startsWith("outfit:");if(this.bundle.visible=!!g,g){const E={fire:"#d7b064",fish:"#f7c51e",space:"#f4f4f2"}[i.holding.slice(7)]||"#fff";this.bundle.material.color.set(E),this.bundle.position.set(0,.5,.22)}this.nozzle.visible=i.holding==="nozzle",this.rod.visible=i.holding==="rod";const p=r*3;if(g)this.aimArm(0,m(.25,-.35,1),1,12,t),this.aimArm(1,m(-.25,-.35,1),1,12,t);else if(o==="spray"||i.holding==="nozzle")this.poseNozzle(e,n,t);else if(i.holding==="rod")this.poseRod(e,n,t);else if(o==="pull"||i.holding==="handle"){const E=i.lean;this.aimArm(0,m(.1,1-E*.8,.5+E*.4),.4+E*.6,14,t),this.aimArm(1,m(-.1,.9-E*.8,.6+E*.4),.4+E*.6,14,t)}else if(o==="pose"||o==="cheer"){const E=Math.sin(a*9)*.25;this.aimArm(0,m(.8,1+E,.2),.2,12,t),this.aimArm(1,m(-.8,1-E,.2),.2,12,t)}else if(o==="take")this.aimArm(0,m(.2,.3,1),.3,12,t),this.aimArm(1,m(-.3,-.4,.6),.5,12,t);else if(i.mode==="float"){const E=n&&n.thrustK?n.thrustK:0;this.aimArm(0,m(.9,.4+Math.sin(r*1.7)*.3+E*.4,.5),.3,8,t),this.aimArm(1,m(-.9,.4+Math.cos(r*1.5)*.3+E*.4,.5),.3,8,t)}else if(u){const E=Math.sin(f);this.aimArm(0,m(.18,-1,E*.5),.25,16,t),this.aimArm(1,m(-.18,-1,-E*.5),.25,16,t)}else this.aimArm(0,m(.2,-1,.05+Math.sin(p*.3)*.03),.15,8,t),this.aimArm(1,m(-.2,-1,.05+Math.cos(p*.3)*.03),.15,8,t);let v=0,y=0;i.look&&(v=-ze((i.look.y-(i.y+1))*.08,-.4,.4)),o==="spray"&&(v=-ze((i.aimY-1)*.15,-.4,.3)),i.mode==="float"&&(v=Math.sin(r*.8)*.1),this.head.rotation.x=ce(this.head.rotation.x,v,8,t),this.head.rotation.y=ce(this.head.rotation.y,y,8,t),this.head.rotation.z=ce(this.head.rotation.z,u?Math.sin(f)*.04:Math.sin(r*1.1)*.03,8,t),this.nextBlink-=t,this.nextBlink<=0&&(this.blink=.14,this.nextBlink=2+Math.random()*2.5),this.blink=Math.max(0,this.blink-t);const _=this.blink>0?.12:1;for(const E of this.eyes)E.scale.y=ce(E.scale.y,_,40,t);const S=n&&n.surprise>0;this.oMouth.visible=!!S,this.smile.visible=!S;const T=o==="cheer"||o==="pose";this.smile.scale.setScalar(ce(this.smile.scale.x,T?1.5:1,8,t));for(const E of this.pigtails)E.rotation.z=ce(E.rotation.z,(u?Math.sin(f)*.3:0)+(i.mode==="float"?Math.sin(r*2)*.4:0),6,t);if(this.visor){const E=i.outfit==="space"&&i.helmetOpen<.5;this.visor.material.opacity=ce(this.visor.material.opacity,E?.5:0,6,t),this.visor.visible=this.visor.material.opacity>.02}}poseNozzle(t,e,n){const i=t.girl,o=t.chapter.nozzle,a=new A(Math.cos(o.elev)*Math.cos(o.azim),Math.sin(o.elev),Math.cos(o.elev)*Math.sin(o.azim));(!o.pressure||o.pressure<.05)&&(i.action==="walk"||i.action!=="spray")&&a.set(i.facing,-.25,.3).normalize(),this.root.updateMatrixWorld();const c=new fi().copy(this.root.quaternion).invert(),h=a.clone().applyQuaternion(c).clone().add(new A(0,-.35,0)).normalize();this.aimArm(0,h.clone().add(new A(.12,0,0)),.45,18,n),this.aimArm(1,h.clone().add(new A(-.12,0,0)),.9,18,n);const u=this.handWorld(0,new A);this.nozzle.position.copy(u);const f=new fi().setFromUnitVectors(new A(0,0,1),a.normalize());this.nozzle.quaternion.slerp(f,1-Math.exp(-20*n)),this.nozzleTip=this.nozzle.localToWorld(new A(0,0,.26))}poseRod(t,e,n){const i=t.girl,r=t.chapter,o=new fi().copy(this.root.quaternion).invert(),a=r.tip?new A(r.tip.x,r.tip.y,i.z):new A(i.x+i.facing,i.y+1.8,i.z),c=Math.sign(a.x-i.x)||i.facing,l=new A(i.x+c*.18,i.y+.78,i.z+.05),h=a.clone().sub(l),u=h.clone().normalize().applyQuaternion(o),f=i.action==="reel",d=f?Math.sin(this.time*14)*.25:0;this.aimArm(0,u.clone().add(new A(.2,-1,0)).normalize(),.9,16,n),this.aimArm(1,u.clone().add(new A(-.1,-1.2+d,d)).normalize(),1.2,16,n);const x=r.line?r.line.tension:0,m=h.length()/this.rodSegs.length,g=h.clone().normalize(),p=new A().crossVectors(g,new A(0,-1,0)).normalize();let v=l.clone();const y=new A(0,1,0);for(let _=0;_<this.rodSegs.length;_++){const S=_/this.rodSegs.length,T=x*.9*S*S,E=g.clone().applyAxisAngle(p,T),C=this.rodSegs[_];C.position.copy(v).addScaledVector(E,m/2),C.quaternion.setFromUnitVectors(y,E),C.scale.y=m/.225,v.addScaledVector(E,m)}this.rodTip.copy(v),this.reel.position.copy(l).addScaledVector(g,.12).add(new A(0,-.05,0)),this.reel.rotation.set(0,0,Math.PI/2),f&&(this.reel.rotation.x=this.time*12)}}function Lu(s){const t=s.p;let e=0;for(let n=0;n<t.length;n++)e+=t[n];return Number.isFinite(e)?((s.good||(s.good=new Float32Array(t.length))).set(t),!0):(s.good?(t.set(s.good),s.q.set(s.good)):(t.fill(0),s.q.fill(0)),!1)}class Ci{constructor(t,e,{gravity:n=-9.8,damping:i=.985,iterations:r=20}={}){this.n=t,this.seg=e/(t-1),this.p=new Float32Array(t*3),this.q=new Float32Array(t*3),this.pinned=new Uint8Array(t),this.gravity=n,this.damping=i,this.iterations=r,this.floorY=-1/0,this.spheres=[]}setLength(t){this.seg=Math.max(.001,t/(this.n-1))}lay(t,e){for(let n=0;n<this.n;n++){const i=n/(this.n-1);for(let r=0;r<3;r++)this.p[n*3+r]=this.q[n*3+r]=t[r]+(e[r]-t[r])*i}}pin(t,e,n,i){this.pinned[t]=1,this.p[t*3]=e,this.p[t*3+1]=n,this.p[t*3+2]=i}free(t){this.pinned[t]=0}step(t){if(!(t>0))return;const{p:e,q:n,n:i}=this,r=this.gravity*t*t,o=this.damping;for(let c=0;c<i;c++){if(this.pinned[c]){n[c*3]=e[c*3],n[c*3+1]=e[c*3+1],n[c*3+2]=e[c*3+2];continue}for(let l=0;l<3;l++){const h=c*3+l,u=(e[h]-n[h])*o;n[h]=e[h],e[h]+=u+(l===1?r:0)}}const a=this.seg;for(let c=0;c<this.iterations;c++){for(let l=0;l<i-1;l++){const h=l*3,u=h+3,f=e[u]-e[h],d=e[u+1]-e[h+1],x=e[u+2]-e[h+2],m=Math.sqrt(f*f+d*d+x*x)||1e-6,g=(m-a)/m,p=this.pinned[l]?0:1,v=this.pinned[l+1]?0:1,y=p+v;if(!y)continue;const _=p/y*g,S=v/y*g;e[h]+=f*_,e[h+1]+=d*_,e[h+2]+=x*_,e[u]-=f*S,e[u+1]-=d*S,e[u+2]-=x*S}for(let l=0;l<i;l++)if(!this.pinned[l]){e[l*3+1]<this.floorY&&(e[l*3+1]=this.floorY);for(const h of this.spheres){const u=e[l*3]-h.x,f=e[l*3+1]-h.y,d=e[l*3+2]-h.z,x=Math.sqrt(u*u+f*f+d*d);if(x<h.r&&x>1e-6){const m=h.r/x;e[l*3]=h.x+u*m,e[l*3+1]=h.y+f*m,e[l*3+2]=h.z+d*m}}}}Lu(this)}point(t,e=new A){return e.set(this.p[t*3],this.p[t*3+1],this.p[t*3+2])}points(t=[]){for(let e=0;e<this.n;e++)t[e]||(t[e]=new A),t[e].set(this.p[e*3],this.p[e*3+1],this.p[e*3+2]);return t.length=this.n,t}stretch(){let t=0;for(let e=0;e<this.n-1;e++){const n=e*3;t+=Math.hypot(this.p[n+3]-this.p[n],this.p[n+4]-this.p[n+1],this.p[n+5]-this.p[n+2])}return t/(this.seg*(this.n-1))}}class or{constructor(t,e,n,i,{gravity:r=-9.8,damping:o=.97,iterations:a=8,stiffness:c=1,bendX:l=.25}={}){this.cols=t,this.rows=e,this.n=t*e,this.p=new Float32Array(this.n*3),this.q=new Float32Array(this.n*3),this.pinned=new Uint8Array(this.n),this.gravity=r,this.damping=o,this.iterations=a,this.wind=new A,this.links=[];const h=n/(t-1),u=i/(e-1);this.offsets=[];const f=(d,x,m,g,p)=>{this.links.push([d,x,Math.hypot(m*h,g*u),p]),this.offsets.push(m,g)};for(let d=0;d<e;d++)for(let x=0;x<t;x++){const m=d*t+x;x<t-1&&f(m,m+1,1,0,c),d<e-1&&f(m,m+t,0,1,c),x<t-1&&d<e-1&&(f(m,m+t+1,1,1,.5*c),f(m+1,m+t,-1,1,.5*c)),x<t-2&&l>0&&f(m,m+2,2,0,l*c),d<e-2&&f(m,m+t*2,0,2,.25*c)}this.colliders=[],this.baseDx=this.dx=h,this.baseDy=this.dy=u}setRestSize(t,e){const n=t/(this.cols-1),i=e/(this.rows-1);if(Math.abs(n-this.dx)<1e-5&&Math.abs(i-this.dy)<1e-5)return;this.dx=n,this.dy=i;const r=this.offsets;for(let o=0;o<this.links.length;o++)this.links[o][2]=Math.hypot(r[o*2]*n,r[o*2+1]*i)}idx(t,e){return e*this.cols+t}set(t,e,n,i){this.p[t*3]=this.q[t*3]=e,this.p[t*3+1]=this.q[t*3+1]=n,this.p[t*3+2]=this.q[t*3+2]=i}pin(t,e,n,i){this.pinned[t]=1,this.p[t*3]=e,this.p[t*3+1]=n,this.p[t*3+2]=i}free(t){this.pinned[t]=0}impulse(t,e,n,i,r,o,a,c=1/60){const l=i*i;for(let h=0;h<this.n;h++){if(this.pinned[h])continue;const u=this.p[h*3]-t,f=this.p[h*3+1]-e,d=this.p[h*3+2]-n,x=u*u+f*f+d*d;if(x<l){const m=1-Math.sqrt(x)/i;this.q[h*3]-=r*c*m,this.q[h*3+1]-=o*c*m,this.q[h*3+2]-=a*c*m}}}step(t){if(!(t>0))return;const{p:e,q:n,n:i}=this,r=this.gravity*t*t,o=this.wind,a=this.damping;for(let l=0;l<i;l++){if(this.pinned[l]){n[l*3]=e[l*3],n[l*3+1]=e[l*3+1],n[l*3+2]=e[l*3+2];continue}const h=l*3,u=(e[h]-n[h])*a,f=(e[h+1]-n[h+1])*a,d=(e[h+2]-n[h+2])*a;n[h]=e[h],n[h+1]=e[h+1],n[h+2]=e[h+2],e[h]+=u+o.x*t*t,e[h+1]+=f+r+o.y*t*t,e[h+2]+=d+o.z*t*t}const c=this.links;for(let l=0;l<this.iterations;l++){for(let h=0;h<c.length;h++){const[u,f,d,x]=c[h],m=u*3,g=f*3,p=e[g]-e[m],v=e[g+1]-e[m+1],y=e[g+2]-e[m+2],_=Math.sqrt(p*p+v*v+y*y)||1e-6,S=(_-d)/_*x,T=this.pinned[u]?0:1,E=this.pinned[f]?0:1,C=T+E;if(!C)continue;const b=T/C*S,M=E/C*S;e[m]+=p*b,e[m+1]+=v*b,e[m+2]+=y*b,e[g]-=p*M,e[g+1]-=v*M,e[g+2]-=y*M}for(const h of this.colliders)h(e,this.pinned,i)}Lu(this)}}function ar(s,t,{uvRepeat:e=[1,1]}={}){const n=new bn(1,1,s.cols-1,s.rows-1),i=n.attributes.uv;for(let a=0;a<i.count;a++)i.setXY(a,i.getX(a)*e[0],i.getY(a)*e[1]);const r=n.attributes.position;r.setUsage(Xi);const o=new $(n,t);return o.castShadow=!0,o.receiveShadow=!0,o.userData.sync=()=>{r.array.set(s.p),r.needsUpdate=!0,n.computeVertexNormals(),n.computeBoundingSphere()},o.userData.sync(),o}class We{constructor(t,e,n,i,{uvScale:r=1}={}){this.n=t,this.radial=n,this.radius=e,this.uvScale=r;const o=t*(n+1),a=new Float32Array(o*3),c=new Float32Array(o*3),l=new Float32Array(o*2),h=[];for(let f=0;f<t-1;f++)for(let d=0;d<n;d++){const x=f*(n+1)+d,m=x+n+1;h.push(x,m,x+1,m,m+1,x+1)}const u=new Oe;u.setAttribute("position",new He(a,3).setUsage(Xi)),u.setAttribute("normal",new He(c,3).setUsage(Xi)),u.setAttribute("uv",new He(l,2).setUsage(Xi)),u.setIndex(h),this.geo=u,this.mesh=new $(u,i),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.radii=null,this._t=new A,this._n=new A(0,1,0),this._b=new A,this.offset=0}update(t,e=null){const{n,radial:i}=this,r=this.geo.attributes.position.array,o=this.geo.attributes.normal.array,a=this.geo.attributes.uv.array,c=this._t,l=this._n,h=this._b;let u=0;c.subVectors(t[1],t[0]).normalize(),Math.abs(c.y)<.9?l.set(0,1,0):l.set(1,0,0),h.crossVectors(c,l).normalize(),l.crossVectors(h,c).normalize();for(let f=0;f<n;f++){const d=t[f];f>0&&(u+=d.distanceTo(t[f-1]));const x=t[Math.max(0,f-1)],m=t[Math.min(n-1,f+1)],g=this._t2||(this._t2=new A);g.subVectors(m,x),g.lengthSq()>1e-12&&(g.normalize(),h.crossVectors(g,l),h.lengthSq()<1e-10&&h.crossVectors(g,new A(0,0,1)),h.normalize(),l.crossVectors(h,g).normalize(),c.copy(g));const p=this.radius*(e?e(f/(n-1)):1);for(let v=0;v<=i;v++){const y=v/i*Math.PI*2,_=Math.cos(y),S=Math.sin(y),T=l.x*_+h.x*S,E=l.y*_+h.y*S,C=l.z*_+h.z*S,b=(f*(i+1)+v)*3;r[b]=d.x+T*p,r[b+1]=d.y+E*p,r[b+2]=d.z+C*p,o[b]=T,o[b+1]=E,o[b+2]=C;const M=(f*(i+1)+v)*2;a[M]=v/i,a[M+1]=u*this.uvScale+this.offset}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,this.geo.attributes.uv.needsUpdate=!0,this.geo.computeBoundingSphere(),this.mesh.frustumCulled=!0}}const oy={dress:"#7cc6ea",fire:"#d7b064",fish:"#f7c51e",space:"#f4f4f2"};function ay(s,t,e=.16,n=.04){const i=new Cn,r=s/2;return i.moveTo(-r*.45,t),i.quadraticCurveTo(0,t-.07,r*.45,t),i.lineTo(r+e,t-.1),i.lineTo(r+e*.9,t-.32),i.lineTo(r,t-.26),i.lineTo(r+n,0),i.lineTo(-r-n,0),i.lineTo(-r,t-.26),i.lineTo(-r-e*.9,t-.32),i.lineTo(-r-e,t-.1),i.closePath(),i}function _h(s){const t=new at,e=new at,n=G("#b98a55",{rough:.6}),i=new $(new Zn(.018,.4,3,8),n);i.rotation.z=Math.PI/2,e.add(i);const r=new $(new Pe(.045,.008,6,14,Math.PI*1.3),G("#d9dde0",{rough:.2,metal:1}));r.position.set(0,.1,0),r.rotation.z=-Math.PI*.15,e.add(r);const o=new $(new Ee(.006,.006,.06,6),r.material);o.position.y=.035,e.add(o),t.add(e);const a=oy[s]||"#ccc",c=G(a,{rough:s==="fish"?.35:.85}),l=(u,f=.05)=>{const d=new $n(u,{depth:f,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2});return d.translate(0,0,-f/2),d},h=new at;if(s==="dress"){const u=new Cn;u.moveTo(-.12,.62),u.lineTo(.12,.62),u.lineTo(.16,.45),u.lineTo(.3,0),u.lineTo(-.3,0),u.lineTo(-.16,.45),u.closePath(),h.add(new $(l(u),c));const f=new $(new Pe(.08,.02,6,16,Math.PI),G("#ffffff",{rough:.8}));f.rotation.z=Math.PI,f.position.set(0,.62,.035),h.add(f)}else{const u=s==="space"?.72:.68;if(h.add(new $(l(ay(.42,u,s==="space"?.2:.17,s==="fish"?.07:.04)),c)),s==="fire"){const f=new ve({color:"#f5f06a",emissive:"#6a6a20",roughness:.3});for(const m of[.16,.36]){const g=new $(new Xe(.47,.05,.08),f);g.position.set(0,m,0),h.add(g)}const d=new $(new $t(.16,16,10,0,Math.PI*2,0,Math.PI*.55),G("#d8322c",{rough:.3}));d.position.set(0,.9,0);const x=new $(new Ee(.2,.22,.02,20),d.material);x.position.set(0,.88,-.02),t.add(d,x)}else if(s==="fish"){for(let m=0;m<3;m++){const g=new $(new Zn(.01,.04,2,6),G("#5a3b22"));g.rotation.z=Math.PI/2,g.position.set(0,.2+m*.14,.045),h.add(g)}const f=new $(new $t(.15,16,10,0,Math.PI*2,0,Math.PI*.5),c);f.position.set(0,.88,0);const d=new $(new Ee(.24,.26,.02,20),c);d.position.set(0,.87,0),d.rotation.x=-.15,t.add(f,d);const x=new $(new Ee(.008,.014,1.3,6),G("#3a2a1f"));x.position.set(.3,.2,.05),x.rotation.z=-.25,t.add(x)}else if(s==="space"){const f=new $(new Xe(.46,.05,.08),G("#ef7d2d",{rough:.6}));f.position.y=.28,h.add(f);const d=new $(new $t(.19,20,14),new gi({color:"#e8f6ff",transparent:!0,opacity:.35,roughness:.05,clearcoat:1,depthWrite:!1}));d.position.set(0,.98,0);const x=new $(new $t(.192,20,10,-1.2,2.4,.5,1.2),new ve({color:"#f0c040",metalness:1,roughness:.15}));x.position.copy(d.position),t.add(d,x)}}return h.position.y=-.72,t.add(h),t.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),t}function xl(s){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n={fire:"#d8433b",fish:"#2f79c9",space:"#2b2d5c",store:"#e8543f"}[s]||"#888";e.fillStyle=n,e.beginPath(),e.arc(128,128,124,0,Math.PI*2),e.fill(),e.lineWidth=12,e.strokeStyle="#fff4d6",e.stroke(),e.fillStyle="#fff4d6",e.strokeStyle="#fff4d6",s==="fire"?(e.beginPath(),e.arc(128,150,70,Math.PI,0),e.fill(),e.fillRect(40,146,176,22),e.fillStyle=n,e.beginPath(),e.arc(128,118,18,0,Math.PI*2),e.fill()):s==="fish"?(e.beginPath(),e.ellipse(118,128,62,38,0,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(170,128),e.lineTo(214,92),e.lineTo(214,164),e.closePath(),e.fill(),e.fillStyle=n,e.beginPath(),e.arc(90,120,9,0,Math.PI*2),e.fill()):s==="space"?(e.beginPath(),e.moveTo(128,34),e.quadraticCurveTo(178,90,160,170),e.lineTo(96,170),e.quadraticCurveTo(78,90,128,34),e.fill(),e.beginPath(),e.moveTo(96,140),e.lineTo(66,196),e.lineTo(100,176),e.moveTo(160,140),e.lineTo(190,196),e.lineTo(156,176),e.fill(),e.fillStyle="#ffb347",e.beginPath(),e.moveTo(108,176),e.lineTo(128,226),e.lineTo(148,176),e.fill(),e.fillStyle=n,e.beginPath(),e.arc(128,100,16,0,Math.PI*2),e.fill()):s==="store"&&(e.lineWidth=16,e.lineJoin="round",e.beginPath(),e.moveTo(40,176),e.lineTo(128,112),e.lineTo(216,176),e.closePath(),e.stroke(),e.beginPath(),e.arc(128,84,22,Math.PI*.95,Math.PI*2.45),e.stroke());const i=new wn(t);return i.colorSpace=Ue,i}class Du{constructor(t,e,n,i=k.teal){this.group=new at,this.stages=t,this.armLen=e,this.arms=[];for(let r=0;r<t;r++){for(const a of[-1,1])for(const c of[-1,1]){const l=X(e,.08,.05,i,{r:.02});l.position.z=a*n/2,this.group.add(l),this.arms.push({arm:l,i:r,sgn:c})}const o=Ft(.035,.035,n+.12,k.steel,{rx:Math.PI/2});this.group.add(o),this.arms.push({pin:o,i:r})}this.base=X(e+.2,.1,n+.2,k.iron),this.group.add(this.base),this.top=X(e+.2,.08,n+.2,k.iron),this.group.add(this.top),this.set(.5)}set(t){const e=this.stages,n=this.armLen,i=Math.max(.12,Math.min(t-.18,e*n*.98)),r=i/e,o=Math.asin(Math.min(.999,r/n));for(const a of this.arms){const c=.09+r*(a.i+.5);a.arm?(a.arm.position.y=c,a.arm.rotation.z=a.sgn*o):a.pin.position.y=c}this.base.position.y=.05,this.top.position.y=i+.14,this.width=n*Math.cos(o)}}class Mh{constructor(t=1.2){this.a=0,this.v=0,this.damping=t,this.lastX=null,this.lastV=0}update(t,e,n){this.lastX===null&&(this.lastX=0,this.lastV=e);const i=(e-this.lastV)/Math.max(t,1e-4);this.lastV=e;const r=Math.max(.3,n),o=-9.8/r*Math.sin(this.a)-Math.max(-6,Math.min(6,i))/r*Math.cos(this.a)-this.damping*this.v;return this.v+=o*t,this.a+=this.v*t,this.a=Math.max(-.6,Math.min(.6,this.a)),this.a}}const ly=[{panel:"#d8433b",trim:"#fff1d6",a:"#e24c43",b:"#fff1d6",sign:"fire"},{panel:"#2f79c9",trim:"#e9f3ff",a:"#2f79c9",b:"#f4f8ff",sign:"fish"},{panel:"#34366e",trim:"#f7d56b",a:"#3b3d7c",b:"#f7d56b",sign:"space"}],Hi=12,ga=10;function cy(s){const t=ly[s],{w:e,d:n,h:i}=Tt,r=new at,o=G(t.panel,{rough:.55}),a=G(t.trim,{rough:.6});r.add(X(e+.12,.1,n+.12,k.woodDark,{y:.05,r:.02}));for(const x of[-1,1]){r.add(X(.05,i-.1,n,o,{x:x*(e-.05)/2,y:i/2,r:.01}));for(const m of[-1,1])r.add(X(.08,i,.08,a,{x:x*e/2,y:i/2,z:m*n/2,r:.02}))}r.add(X(e,i-.1,.05,o,{y:i/2,z:-n/2+.03})),r.add(X(.7,1.4,.02,k.chrome,{y:1.25,z:-n/2+.07,shadow:!1})),r.add(X(e+.24,.2,n+.24,a,{y:i+.1,r:.04})),r.add(X(e+.28,.05,n+.28,o,{y:i+.22,r:.02}));const c=new ve({map:xl(t.sign),roughness:.5,emissive:"#ffffff",emissiveMap:xl(t.sign),emissiveIntensity:.05}),l=new $(new Ee(.3,.3,.06,32),[G(t.trim),c,G(t.trim)]);l.rotation.x=Math.PI/2,l.position.set(0,i+.58,n/2-.08),l.castShadow=!0,r.add(l),r.add(X(.08,.2,.05,k.iron,{y:i+.32,z:n/2-.1})),r.add(Ft(.02,.02,e+.1,k.chrome,{y:i-.08,z:n/2+.06,rz:Math.PI/2}));const h=ge.x-Tt.x,u=ge.z-Tt.z;r.add(Ft(.02,.02,h-e/2+.05,k.brass,{x:(e/2+h)/2,y:ge.y+.18,z:u,rz:Math.PI/2})),r.add(ae(new Pe(.05,.012,6,12,Math.PI),k.brass,{x:h,y:ge.y+.13,z:u,rz:Math.PI}));const f=[];for(let x=0;x<Hi;x++){const m=ae(new Pe(.035,.009,6,12),k.chrome,{shadow:!1});r.add(m),f.push(m)}const d=G("#ffffff",{map:qv(t.a,t.b,10,"booth"+s),rough:.85,side:be});return{g:r,rings:f,sign:l,signMat:c,curtainMat:d}}class hy{constructor(t){const e=t.scene;this.view=t,this.group=new at,this.group.name="booths",e.add(this.group),this.booths=[0,1,2].map(n=>{const i=cy(n);this.group.add(i.g);const r=new or(Hi,ga,Tt.w-.1,Tt.h-.3,{damping:.965,iterations:6});return i.cloth=r,i.mesh=ar(r,i.curtainMat),e.add(i.mesh),i.hookItems={},i.hookGroup=new at,i.g.add(i.hookGroup),i.hookGroup.position.set(ge.x-Tt.x,ge.y+.14,ge.z-Tt.z),i.shake=0,i.inited=!1,i}),this.buildRails(e),this.buildCeilingRail(e),this.buildBooth3Lift(e),this.tmp=new A,this.pend=new Mh(1.4),this.tosses=[]}buildRails(t){const e=new at,n=Tt.z+Tt.d/2+.1,i=ft.back-5.3;for(const f of[-.5,.5])e.add(X(.07,.025,n-i,k.steel,{x:Tt.x+f,y:.012,z:(n+i)/2,shadow:!1}));this.wheels=[];for(const f of[-.5,.5])for(const d of[-.45,.45]){const x=Ft(.07,.07,.05,k.iron,{rz:Math.PI/2,seg:14});x.position.set(f,.07,d),this.booths[0].g.add(x),this.wheels.push(x)}const r=new at,o=G("#6b5a48",{rough:.95}),a=2.4;r.add(X(a,.1,5.4,G("#8a7258",{rough:.9}),{x:Tt.x,y:-.05,z:ft.back-3})),r.add(X(a,3.1,.1,o,{x:Tt.x,y:1.55,z:ft.back-5.65})),r.add(X(a,.1,5.4,o,{x:Tt.x,y:3.05,z:ft.back-3}));for(const f of[-1,1])r.add(X(.1,3.1,5.4,o,{x:Tt.x+f*a/2,y:1.55,z:ft.back-3}));const c=ae(new $t(.08,10,8),k.lampOn,{x:Tt.x,y:2.85,z:ft.back-2.5,shadow:!1});r.add(c);for(let f=0;f<3;f++)r.add(X(.5,.4,.4,G("#c49a64",{rough:.9}),{x:Tt.x+.75,y:.2+f*.42,z:ft.back-5.2+f%2*.1,r:.02}));e.add(r);const l=new at,h=G("#8c5a3a",{rough:.7});l.add(X(2,2.85,.07,h,{y:1.425,r:.02}));for(let f=0;f<5;f++)l.add(X(1.9,.05,.03,G("#6e4429",{rough:.7}),{y:.3+f*.55,z:.05}));l.position.set(Tt.x,0,ft.back+.06),e.add(l),this.door=l;for(const f of[-1.05,1.05])e.add(X(.05,5.7,.05,k.steel,{x:Tt.x+f,y:2.95,z:ft.back+.05}));const u=Ft(.12,.12,.06,k.steel,{x:Tt.x+1.05,y:5.75,z:ft.back+.1,rx:Math.PI/2,seg:16});e.add(u),this.doorPulley=u,t.add(e)}buildCeilingRail(t){const e=new at,n=vi.railY,i=vi.z,r=ft.x0+.4,o=ft.x1-.4;e.add(X(o-r,.16,.03,k.iron,{x:(r+o)/2,y:n,z:i})),e.add(X(o-r,.03,.16,k.iron,{x:(r+o)/2,y:n-.08,z:i})),e.add(X(o-r,.03,.16,k.iron,{x:(r+o)/2,y:n+.08,z:i}));for(let l=r+.3;l<o;l+=2.2)e.add(Ft(.02,.02,ft.ceil-n,k.iron,{x:l,y:(ft.ceil+n)/2,z:i}));t.add(e);const a=new at;a.add(X(.5,.18,.3,G("#f0b534",{rough:.5}),{y:-.2,r:.03})),this.trolleyWheels=[];for(const l of[-.18,.18])for(const h of[-.09,.09]){const u=Ft(.05,.05,.03,k.steel,{x:l,y:-.04,z:h,rx:Math.PI/2,seg:12});a.add(u),this.trolleyWheels.push(u)}const c=Ft(.1,.1,.28,k.iron,{y:-.36,rx:Math.PI/2,seg:16});a.add(c),this.drum=c,a.position.set(vi.parkX,n,i),t.add(a),this.trolley=a,this.hoistRopes=[0,1].map(()=>{const l=new We(2,.018,6,G("#e3c48f",{map:vr(),rough:.9}),{uvScale:4});return t.add(l.mesh),l}),this.booths[1].g.add(X(Tt.w*.8,.06,.08,k.iron,{y:Tt.h+.35}))}buildBooth3Lift(t){const e=new Du(3,1.3,.9);e.group.position.set(Tt.x,ft.basement,Tt.z),t.add(e.group),this.lift3=e;const n=Tt.w/2+.1;this.hatch3=[-1,1].map(i=>{const r=new at;r.position.set(Tt.x+i*n,0,Tt.z);const o=X(n,.06,Tt.d+.2,G("#c8925a",{rough:.7}),{x:-i*(n/2),y:-.03});return r.add(o),r.add(X(.05,.05,Tt.d+.2,k.iron,{y:-.03})),t.add(r),{pivot:r,sx:i}})}boothWorld(t,e){const n=e.store,i={x:Tt.x,y:0,z:Tt.z,rz:0,visible:!0};return t===0?i.z=Tt.z-lf.travel*n.booth1.value:t===1?(i.x=vi.parkX+(Tt.x-vi.parkX)*n.booth2Rail.value,i.y=vi.hangY*(1-n.booth2Hoist.value)):i.y=cf.downY*(1-n.booth3.value),i}reset(t){for(const e of this.booths)e.inited=!1;this.pend=new Mh(1.4),this.tosses.length=0}onEvent(t,e,n){if(t.type==="bump"){const i=this.booths[t.booth],r=i.g.matrixWorld,o=new A((Math.random()-.5)*.9,.7+Math.random()*1,Tt.d/2).applyMatrix4(r);i.cloth.impulse(o.x,o.y,o.z,.45,0,.4,3.2),i.shake=1}if(t.type==="toss"){const i=this.booths[t.booth],r=_h(t.outfit);r.scale.setScalar(.9),n.scene.add(r),this.tosses.push({item:r,b:i,t:0})}}update(t,e,n){const i=e.store,r=n.time,o=this.boothWorld(0,e),a=this.booths[0];a.g.position.set(o.x,0,o.z);for(const y of this.wheels)y.rotation.x=-((o.z-Tt.z)/.07);this.door.position.y=2.85*i.backDoor.value,this.doorPulley.rotation.z=-i.backDoor.value*20,a.g.visible=i.booth1.value<.999||e.chapter.id==="fire";const c=this.boothWorld(1,e),l=this.booths[1];this.trolley.position.x=c.x;for(const y of this.trolleyWheels)y.rotation.z=-c.x/.05;const h=vi.railY-.36,u=c.y+Tt.h+.35,f=h-u;this.drum.rotation.y=f/.1;const d=i.booth2Rail.vel*(Tt.x-vi.parkX),x=i.booth2Hoist.value>.98?0:this.pend.update(t,d,f+Tt.h*.6),m=new A(c.x,h,c.z);if(l.g.position.set(c.x,c.y,c.z),l.g.rotation.set(0,0,0),Math.abs(x)>1e-4){const y=new A(0,c.y-h,0).applyAxisAngle(new A(0,0,1),x);l.g.position.set(m.x+y.x,m.y+y.y,c.z),l.g.rotation.z=x}l.g.updateMatrixWorld();for(let y=0;y<2;y++){const _=new A(c.x+(y?.1:-.1),h,c.z),S=new A((y?.5:-.5)*Tt.w*.8,Tt.h+.38,0).applyMatrix4(l.g.matrixWorld);this.hoistRopes[y].offset=-f*4,this.hoistRopes[y].update([_,S])}const g=this.boothWorld(2,e),p=this.booths[2];p.g.position.set(g.x,g.y,g.z);const v=Math.min(1,Math.max(0,(i.booth3.value-.85)/.15));p.sign.rotation.x=Math.PI/2-(1-v)*Math.PI*.5,p.sign.position.y=Tt.h+.58-(1-v)*.3,this.lift3.set(g.y-ft.basement);for(const y of this.hatch3)y.pivot.rotation.z=-y.sx*i.booth3Hatch.value*Math.PI*.49;for(let y=0;y<3;y++){const _=this.booths[y];_.shake=Math.max(0,_.shake-t*2.2),_.shake>0&&y!==1&&(_.g.rotation.z=Math.sin(r*38)*.018*_.shake);const T=(e.chapter.id==="fire"&&y===0||e.chapter.id==="fish"&&y===1||e.chapter.id==="space"&&y===2)&&["choose","changing"].includes(e.phase)?.7+.3*Math.sin(r*4):.05;_.signMat.emissiveIntensity=T,_.g.updateMatrixWorld(),this.updateCurtain(_,i.curtains[y].value,t),this.updateHook(_,i.hooks[y])}for(const y of this.tosses){y.t+=t/.55;const _=Math.min(1,y.t),S=new A(0,Tt.h+.3,0).applyMatrix4(y.b.g.matrixWorld),T=new A(ge.x-Tt.x,ge.y+.14,ge.z-Tt.z).applyMatrix4(y.b.g.matrixWorld);y.item.position.lerpVectors(S,T,_),y.item.position.y+=Math.sin(_*Math.PI)*.6,y.item.rotation.z=(1-_)*4,_>=1&&y.item.parent?.remove(y.item)}this.tosses=this.tosses.filter(y=>y.t<1)}updateHook(t,e){const n=this.tosses.some(r=>r.b===t),i=t.g.position.y<-.25;for(const[r,o]of Object.entries(t.hookItems))o.visible=r===e&&!n&&!i;if(e&&!t.hookItems[e]){const r=_h(e);t.hookGroup.add(r),t.hookItems[e]=r}for(const r of Object.values(t.hookItems))r.visible&&(r.rotation.y=Math.sin(performance.now()/900)*.08+.2)}updateCurtain(t,e,n){const{w:i,d:r,h:o}=Tt,a=t.cloth,c=t.g.matrixWorld,l=.32+(i-.14-.32)*e;for(let u=0;u<Hi;u++){const f=-i/2+.07+l*u/(Hi-1),d=r/2+.06+(u%2?.035:-.035)*(1-e);this.tmp.set(f,o-.12,d).applyMatrix4(c),a.pin(u,this.tmp.x,this.tmp.y,this.tmp.z),t.rings[u].position.set(f,o-.08,r/2+.06)}if(!t.inited){for(let u=0;u<ga;u++)for(let f=0;f<Hi;f++){const d=u*Hi+f,x=-i/2+.07+l*f/(Hi-1),m=r/2+.06+(f%2?.035:-.035)*(1-e);this.tmp.set(x,o-.12-u*(o-.3)/(ga-1),m).applyMatrix4(c),a.set(d,this.tmp.x,this.tmp.y,this.tmp.z)}t.inited=!0;for(let u=0;u<30;u++)a.step(1/60)}const h=this.view.substeps(6);for(let u=0;u<h.n;u++)a.step(h.h);t.mesh.userData.sync()}}class uy{constructor(t){this.view=t,this.paths=new Map,this.group=new at,t.scene.add(this.group),this.sprites=[];const e=new yo({map:Bn(),color:new Pt(3,2.6,1.2),blending:fn,transparent:!0,depthWrite:!1,depthTest:!1});for(let n=0;n<24;n++){const i=new go(e.clone());i.visible=!1,i.renderOrder=30,this.group.add(i),this.sprites.push(i)}this.flash=new go(e.clone()),this.flash.visible=!1,this.flash.renderOrder=31,this.group.add(this.flash)}register(t,e,n=null){this.paths.set(t,{curve:e,color:n})}update(t,e){let n=0;this.flash.visible=!1;for(const i of e.store.signals){const r=this.paths.get(i.path);if(!r)continue;const o=r.curve.getLength();for(let a=0;a<6&&n<this.sprites.length;a++){const c=i.t-a*(.35/o);if(c<0||i.t>=1)continue;const l=this.sprites[n++];l.visible=!0,l.position.copy(r.curve.getPointAt(Math.min(1,c)));const h=(a===0?.55:.4-a*.05)*(1+.15*Math.sin(i.age*30));l.scale.set(h,h,1),l.material.opacity=a===0?1:.7-a*.1,r.color&&l.material.color.copy(r.color)}if(i.t>=1){const a=(i.age-i.dur)/.6;this.flash.visible=!0,this.flash.position.copy(r.curve.getPointAt(1));const c=.6+a*1.6;this.flash.scale.set(c,c,1),this.flash.material.opacity=1-a}}for(let i=n;i<this.sprites.length;i++)this.sprites[i].visible=!1}}function fy(){const s=document.createElement("canvas");s.width=256,s.height=256;const t=s.getContext("2d");t.fillStyle="#f6e3a6",t.fillRect(0,0,256,256);for(let n=0;n<256;n+=21)t.fillStyle="rgba(150,110,40,0.28)",t.fillRect(0,n,256,3),t.fillStyle="rgba(255,255,255,0.25)",t.fillRect(0,n+3,256,2);const e=new wn(s);return e.colorSpace=Ue,e.wrapS=e.wrapT=mi,e}function dy(){const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d");for(let e=0;e<14;e++){const n=64+(Math.random()-.5)*50,i=50+Math.random()*40,r=20+Math.random()*30,o=t.createRadialGradient(n,i,0,n,i,r);o.addColorStop(0,"rgba(20,14,10,0.35)"),o.addColorStop(1,"rgba(20,14,10,0)"),t.fillStyle=o,t.fillRect(0,0,128,128)}return new wn(s)}function py(){const s=Ht.house,t=new at,e=s.w/2,n=new Cn;n.moveTo(-e,0),n.lineTo(e,0),n.lineTo(e,s.wallH),n.lineTo(e+.12,s.wallH),n.lineTo(0,s.wallH+s.roofH),n.lineTo(-e-.12,s.wallH),n.lineTo(-e,s.wallH),n.closePath();const i=C=>Ht.fires[C].x-s.x,r=new pi,o=i(0);r.moveTo(o-.31,.08),r.lineTo(o+.31,.08),r.lineTo(o+.31,1.18),r.lineTo(o-.31,1.18),r.closePath();const a=new pi,c=i(1);a.moveTo(c-.3,.82),a.lineTo(c+.3,.82),a.lineTo(c+.3,1.44),a.lineTo(c-.3,1.44),a.closePath();const l=new pi;l.absarc(i(2),Ht.fires[2].y-.02,.26,0,Math.PI*2,!0),n.holes.push(r,a,l);const h=fy();h.repeat.set(1.2,1.2);const u=G("#f3dca0",{map:h,rough:.85}),f=new $n(n,{depth:.12,bevelEnabled:!1,curveSegments:24}),d=f.attributes.uv;for(let C=0;C<d.count;C++)d.setXY(C,d.getX(C)/2,d.getY(C)/2);const x=new $(f,u);x.position.z=s.zFront-.12,x.castShadow=!0,x.receiveShadow=!0,t.add(x);const m=s.depth,g=s.zFront-m/2,p=G("#e9d28f",{rough:.85});t.add(X(.1,s.wallH,m-.12,p,{x:-e+.05,y:s.wallH/2,z:g-.06})),t.add(X(.1,s.wallH,m-.12,p,{x:e-.05,y:s.wallH/2,z:g-.06})),t.add(X(s.w,s.wallH,.1,p,{y:s.wallH/2,z:s.zFront-m+.05})),t.add(X(s.w-.2,s.wallH-.1,m-.3,G("#2a1c16",{rough:1}),{y:s.wallH/2,z:g-.1,shadow:!1}));const v=G("#c9463a",{rough:.6}),y=Math.hypot(e+.2,s.roofH),_=Math.atan2(s.roofH,e+.2);for(const C of[-1,1]){const b=X(y+.08,.08,m+.3,v,{r:.02});b.position.set(C*(e+.2)/2,s.wallH+s.roofH/2+.04,g),b.rotation.z=-C*_,t.add(b)}t.add(X(.26,.55,.26,G("#9b4a3a",{rough:.8}),{x:.62,y:s.wallH+s.roofH*.62,z:g-.2}));const S=G("#fffaf0",{rough:.6}),T=(C,b,M,P)=>{t.add(X(P+.1,.06,.06,S,{x:C,y:M+.03,z:s.zFront+.02})),t.add(X(.06,M-b,.06,S,{x:C-P/2-.03,y:(b+M)/2,z:s.zFront+.02})),t.add(X(.06,M-b,.06,S,{x:C+P/2+.03,y:(b+M)/2,z:s.zFront+.02}))};T(o,.08,1.18,.62),T(c,.82,1.44,.6),t.add(X(.72,.05,.12,S,{x:c,y:.8,z:s.zFront+.04})),t.add(ae(new Pe(.27,.035,8,24),S,{x:i(2),y:Ht.fires[2].y-.02,z:s.zFront+.01}));for(let C=0;C<3;C++){const b=i(C),M=C===0?.2:C===1?.86:Ht.fires[2].y-.24;t.add(Ft(.035,.035,.5,k.iron,{x:b,y:M,z:s.zFront-.25,rx:Math.PI/2})),t.add(Ft(.08,.06,.05,k.iron,{x:b,y:M+.03,z:s.zFront-.05}))}const E=[0,1,2].map(C=>{const b=new $(new bn(1.1,1),new kn({map:dy(),transparent:!0,opacity:0,depthWrite:!1}));return b.position.set(i(C),Ht.fires[C].y+.55,s.zFront+.005),t.add(b),b});return t.add(X(s.w+.3,.1,m+.3,k.iron,{y:-.05,z:g})),t.traverse(C=>{C.isMesh&&C.castShadow!==!1&&(C.castShadow=!0)}),{g:t,soots:E}}class my{constructor(t){const e=t.scene;this.view=t;const n=Ht.house,i=Tt.x+.95,r=Tt.z-.55,o=Ht.valve,a=[[i,.06,r],[i,-.8,r],[o.x,-.8,r],[o.x,-.8,o.z-.35],[o.x,o.y,o.z-.35],[o.x,-1.95,o.z-.35],[.15,-1.95,o.z-.35]],c=ai(a,.055,k.gas,{bend:.15});e.add(c),t.signals.register("gas",c.userData.path),e.add(Ft(.12,.12,.05,k.brass,{x:i,y:.02,z:r})),e.add(Ft(.1,.1,.32,k.gas,{x:o.x,y:o.y,z:o.z-.35})),e.add(Ft(.03,.03,.32,k.steel,{x:o.x,y:o.y,z:o.z-.18,rx:Math.PI/2})),this.valve=zu(.24,.03,4,k.red),this.valve.position.set(o.x,o.y,o.z),e.add(this.valve);const l=new at;l.position.set(o.x+.36,o.y+.1,o.z-.3),l.add(Ft(.13,.13,.05,k.chrome,{rx:Math.PI/2})),l.add(Ft(.11,.11,.052,G("#fffdf4",{rough:.4}),{rx:Math.PI/2})),this.needle=X(.015,.1,.01,k.red,{y:.04,z:.03,shadow:!1});const h=new at;h.position.z=.02,h.add(this.needle),l.add(h),this.needlePivot=h,e.add(l),e.add(ai([[o.x+.1,o.y+.1,o.z-.35],[o.x+.36,o.y+.1,o.z-.35]],.02,k.brass)),this.flex=new We(12,.04,8,G("#3b3b3b",{rough:.8})),e.add(this.flex.mesh),this.flexRope=new Ci(12,3.2,{iterations:12});const u=Ht.hatch,f=u.w/2;this.leaves=[-1,1].map(z=>{const N=new at;N.position.set(u.x+z*u.w/2,0,u.z);const U=X(f,.07,u.d,G("#c8925a",{rough:.7}),{x:-z*(f/2),y:-.035});return N.add(U),N.add(X(f-.1,.02,.06,k.iron,{x:-z*(f/2),y:-.075,z:u.d/2-.2})),e.add(N),{pivot:N,s:z}});const d=G("#5d4633",{rough:.9});e.add(X(u.w,.3,.04,d,{x:u.x,y:-.15,z:u.z-u.d/2})),this.lift=new Du(3,1.3,1.2,k.red),this.lift.group.position.set(n.x,ft.basement,n.zFront-n.depth/2),e.add(this.lift.group);const x=py();this.house=x.g,this.soots=x.soots,this.house.position.set(n.x,Ht.downY,0),e.add(this.house),this.burn=[0,0,0];const m=Ht.siren,g=new at;g.position.set(m.x,m.y,m.z),g.add(X(.5,.32,.06,k.iron,{y:-.3,z:.03,r:.02})),g.add(X(.08,.08,.34,k.iron,{y:-.3,z:.2})),g.add(Ft(.2,.22,.1,k.iron,{y:-.22,z:.36})),this.sirenDome=new $(new Ee(.17,.17,.3,24,1,!0),new ve({color:"#ff4a3a",emissive:"#ff2010",emissiveIntensity:.1,transparent:!0,opacity:.7,roughness:.15,side:be,depthWrite:!1})),this.sirenDome.position.set(0,-.02,.36),g.add(this.sirenDome);const p=ae(new $t(.17,24,10,0,Math.PI*2,0,Math.PI/2),this.sirenDome.material,{y:.13,z:.36,shadow:!1});g.add(p),this.reflector=new at,this.reflector.position.set(0,-.03,.36),this.reflector.add(X(.2,.2,.02,k.chrome,{z:-.04,shadow:!1})),this.reflector.add(ae(new $t(.05,10,8),k.lampOn,{shadow:!1})),g.add(this.reflector),this.beam=new at;const v=new kn({color:"#ff3020",transparent:!0,opacity:0,blending:fn,depthWrite:!1,side:be}),y=new $(new Us(1,5,24,1,!0),v);y.rotation.x=-Math.PI/2,y.position.z=2.5,y.renderOrder=18,this.beam.add(y),this.beam.position.set(0,-.03,.36),g.add(this.beam),this.beamMat=v;const _=new at;_.position.set(.75,-.2,.05),_.add(Ft(.05,.05,.12,k.iron,{rx:Math.PI/2,z:.05}));const S=ae(new $t(.24,24,10,0,Math.PI*2,0,Math.PI*.32),k.brass,{rx:Math.PI/2,z:.02});_.add(S),this.striker=new at,this.striker.position.set(0,-.3,.12),this.striker.add(X(.02,.2,.02,k.iron,{y:.1})),this.striker.add(qi(.035,k.iron,{y:.2})),_.add(this.striker),g.add(_),this.bell=S,e.add(g);const T=Ht.cabinet,E=new at;E.position.set(T.x,T.y,T.z);const C=k.red;E.add(X(.95,1.15,.06,C,{z:-.17})),E.add(X(.06,1.15,.4,C,{x:-.445})),E.add(X(.06,1.15,.4,C,{x:.445})),E.add(X(.95,.06,.4,C,{y:.545})),E.add(X(.95,.06,.4,C,{y:-.545})),this.reel=new at,this.reel.position.set(0,.05,0),this.reel.add(Ft(.36,.36,.04,k.redDark,{z:-.1,rx:Math.PI/2,seg:24})),this.reel.add(Ft(.36,.36,.04,k.redDark,{z:.12,rx:Math.PI/2,seg:24})),this.reel.add(Ft(.12,.12,.24,k.steel,{z:.01,rx:Math.PI/2})),this.coil=ae(new Pe(.22,.09,10,28),G("#e0d8c4",{rough:.8}),{z:.01}),this.reel.add(this.coil);for(let z=0;z<4;z++)this.reel.add(X(.03,.66,.02,k.steel,{z:.14,rz:z*Math.PI/4}));E.add(this.reel);const b=new at;b.position.set(-.475,0,.2);const M=new at;M.add(X(.95,1.15,.04,C,{x:.475}));const P=ae(new bn(.72,.9),k.glass,{x:.475,z:.025,shadow:!1});M.add(P),M.add(X(.04,.2,.05,k.chrome,{x:.85,z:.05})),b.add(M),E.add(b),this.cabDoor=b,M.children[0].material=C,e.add(E),e.add(ai([[T.x+.35,T.y-.57,T.z],[T.x+.35,.3,T.z],[T.x+.35,.3,T.z+.05],[T.x+.35,-.6,T.z+.05]],.05,k.red)),this.hose=new Ci(30,6,{iterations:26,damping:.97}),this.hose.floorY=.04,this.hoseTube=new We(30,.04,10,G("#e7d3a8",{rough:.8})),this.hoseTube.mesh.visible=!1,e.add(this.hoseTube.mesh),this.hoseOut=!1,this.hosePts=[],this.fans=[-2.6,3.6].map(z=>{const N=new at;N.position.set(z,5.1,ft.back+.08),N.add(ae(new Pe(.42,.06,10,32),k.steel)),N.add(Ft(.44,.44,.08,G("#3a3f44",{rough:.7}),{rx:Math.PI/2,z:-.05}));const U=new at;for(let D=0;D<5;D++){const F=X(.08,.36,.015,k.steel,{y:.18,rx:.3}),Z=new at;Z.rotation.z=D/5*Math.PI*2,Z.add(F),U.add(Z)}U.position.z=.03,N.add(U),N.add(Ft(.07,.07,.08,k.iron,{rx:Math.PI/2,z:.05}));for(let D=0;D<4;D++)N.add(X(.86,.02,.02,k.chrome,{z:.08,rz:D*Math.PI/4}));return e.add(N),U}),this.fanAngle=0,this.tmp=new A}reset(){this.hoseOut=!1,this.burn=[0,0,0]}onEvent(t,e,n){t.type==="clunk"&&n.rig.kick(.35)}update(t,e,n){const i=e.store,r=n.time;this.valve.rotation.z=-i.gasValve.value*Math.PI*2.5,this.needlePivot.rotation.z=1.2-i.gasValve.value*2.2+(i.gasValve.value>.5?Math.sin(r*30)*.03:0);for(const x of this.leaves)x.pivot.rotation.z=-x.s*i.fireHatch.value*Math.PI*.47;const o=Ht.downY*(1-i.houseLift.value);this.house.position.y=o,this.lift.set(o-ft.basement),this.house.visible=!0;const a=this.tmp.set(.15,-1.95,Ht.valve.z-.35),c=new A(Ht.house.x-.6,o-.05,Ht.house.zFront-Ht.house.depth/2-.3),l=a.distanceTo(c);this.flexRope.setLength(Math.max(l*1.08,2.2)),this.flexRope.pin(0,a.x,a.y,a.z),this.flexRope.pin(this.flexRope.n-1,c.x,c.y,c.z),this.flexRope.floorY=ft.basement+.05;for(let x=0;x<2;x++)this.flexRope.step(t/2);if(this.flex.update(this.flexRope.points(this.flexPts||(this.flexPts=[]))),e.chapter.id==="fire"){const x=e.chapter.fires;for(let m=0;m<3;m++)x[m].lit&&!x[m].out&&(this.burn[m]=Math.min(1,this.burn[m]+t*.12*x[m].intensity)),this.soots[m].material.opacity=this.burn[m]*.85}else for(let x=0;x<3;x++)this.soots[x].material.opacity=0;const h=i.siren.value,u=r*5;this.reflector.rotation.y=u,this.beam.rotation.y=u;const f=Math.max(0,Math.cos(u));this.beamMat.opacity=.12*h*(.3+.7*f),this.sirenDome.material.emissiveIntensity=.1+2.2*h*(.5+.5*f),this.striker.rotation.z=h>.5?Math.sin(r*50)*.25:0;const d=n.stage.spot;e.chapter.id==="fire"&&(d.color.set("#ff2a1a"),d.intensity=60*h,d.angle=.35,d.penumbra=.6,d.distance=16,d.position.set(Ht.siren.x,Ht.siren.y-.03,Ht.siren.z+.36),d.target.position.set(Ht.siren.x+Math.sin(u)*6,Ht.siren.y-1.2,Ht.siren.z+.36+Math.cos(u)*6)),this.fanAngle+=t*i.fans.value*22;for(const x of this.fans)x.rotation.z=this.fanAngle;this.cabDoor.rotation.y=-i.cabinetDoor.value*1.9,this.updateHose(t,e,n)}updateHose(t,e,n){const r=e.girl.holding==="nozzle",o=Ht.cabinet,a=this.tmp.set(o.x+.05,o.y-.25,o.z+.22);if(!r){this.hoseTube.mesh.visible=!1,this.hoseOut=!1,this.coil.scale.setScalar(1);return}const c=n.girl.nozzle;c.updateMatrixWorld();const l=new A(0,0,-.08).applyMatrix4(c.matrixWorld);this.hoseOut||(this.hose.lay([a.x,a.y,a.z],[l.x,l.y,l.z]),this.hoseOut=!0);const h=a.distanceTo(l),u=Math.max(1.2,h*1.25+.6);this.hose.setLength(u),this.hose.pin(0,a.x,a.y,a.z),this.hose.pin(this.hose.n-1,l.x,l.y,l.z);const f=2;for(let x=0;x<f;x++)this.hose.step(t/f);this.reel.rotation.z=-u/.3,this.coil.scale.setScalar(Math.max(.55,1-u/12));const d=e.store.hosePressure.value;this.hoseTube.mesh.visible=!0,this.hoseTube.radius=.042,this.hoseTube.update(this.hose.points(this.hosePts),x=>(x<d*1.05?1:.55)*(1+.04*Math.sin(x*40-n.time*20)*d))}}const ln=new A,cn=new A,xa=new A;class Fn{constructor(t,e,{blending:n=Ai,stretch:i=!1,depthTest:r=!0,renderOrder:o=10,fog:a=!1}={}){this.max=t,this.list=[],this.stretch=i;const c=new Oe;this.pos=new Float32Array(t*4*3),this.uv=new Float32Array(t*4*2),this.col=new Float32Array(t*4*4);const l=new Uint16Array(t*6);for(let u=0;u<t;u++)l.set([u*4,u*4+1,u*4+2,u*4,u*4+2,u*4+3],u*6),this.uv.set([0,0,1,0,1,1,0,1],u*8);c.setAttribute("position",new He(this.pos,3).setUsage(Xi)),c.setAttribute("uv",new He(this.uv,2)),c.setAttribute("color",new He(this.col,4).setUsage(Xi)),c.setIndex(new He(l,1)),c.setDrawRange(0,0),this.geo=c;const h=new kn({map:e,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:r,blending:n,fog:a,side:be,toneMapped:n!==fn});this.mesh=new $(c,h),this.mesh.frustumCulled=!1,this.mesh.renderOrder=o,this.material=h}add(t){return this.list.length>=this.max&&this.list.shift(),this.list.push(t),t}clear(){this.list.length=0}write(t){const e=t.matrixWorld.elements;ln.set(e[0],e[1],e[2]),cn.set(e[4],e[5],e[6]);const n=Math.min(this.list.length,this.max),i=this.pos,r=this.col;for(let o=0;o<n;o++){const a=this.list[o];let c,l,h,u,f,d;const x=a.size*.5;if(this.stretch&&(a.vx||a.vy||a.vz)){xa.set(a.vx,a.vy,a.vz||0);const p=xa.dot(ln),v=xa.dot(cn),y=Math.hypot(p,v)||1,_=p/y,S=v/y,T=x*(a.stretch??3);u=(ln.x*_+cn.x*S)*T,f=(ln.y*_+cn.y*S)*T,d=(ln.z*_+cn.z*S)*T,c=(ln.x*S-cn.x*_)*x*.35,l=(ln.y*S-cn.y*_)*x*.35,h=(ln.z*S-cn.z*_)*x*.35}else{const p=Math.cos(a.rot||0),v=Math.sin(a.rot||0);c=(ln.x*p+cn.x*v)*x,l=(ln.y*p+cn.y*v)*x,h=(ln.z*p+cn.z*v)*x,u=(-ln.x*v+cn.x*p)*x,f=(-ln.y*v+cn.y*p)*x,d=(-ln.z*v+cn.z*p)*x}const m=o*12;i[m]=a.x-c-u,i[m+1]=a.y-l-f,i[m+2]=a.z-h-d,i[m+3]=a.x+c-u,i[m+4]=a.y+l-f,i[m+5]=a.z+h-d,i[m+6]=a.x+c+u,i[m+7]=a.y+l+f,i[m+8]=a.z+h+d,i[m+9]=a.x-c+u,i[m+10]=a.y-l+f,i[m+11]=a.z-h+d;const g=o*16;for(let p=0;p<4;p++)r[g+p*4]=a.r??1,r[g+p*4+1]=a.g??1,r[g+p*4+2]=a.b??1,r[g+p*4+3]=a.a??1}this.geo.setDrawRange(0,n*6),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}const gy=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,xy=`
uniform float uTime;
uniform float uI;
uniform float uSeed;
uniform float uLayer;
varying vec2 vUv;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
  return v;
}
void main() {
  float I = uI;
  float x = vUv.x * 2.0 - 1.0;
  float y = vUv.y;
  float t = uTime;
  float n1 = fbm(vec2(x * 1.7 + uSeed, y * 2.1 - t * 2.4));
  float n2 = fbm(vec2(x * 3.4 - uSeed * 1.3, y * 4.2 - t * 3.9));
  float sway = (n1 - 0.5) * 1.0 * y;
  float w = mix(0.92, 0.1, pow(y, 0.75));
  float d = abs(x + sway) / w;
  float body = 1.0 - smoothstep(0.4, 1.0, d);
  float top = 1.0 - smoothstep(0.2 + 0.62 * I, 0.98, y + (n2 - 0.5) * 0.55);
  float bottom = smoothstep(0.0, 0.1, y);
  float f = body * top * bottom * (0.6 + 0.8 * n2);
  float heat = clamp(f * (1.35 - y * 0.85), 0.0, 1.0);
  vec3 c1 = vec3(0.7, 0.07, 0.01);
  vec3 c2 = vec3(1.0, 0.4, 0.04);
  vec3 c3 = vec3(1.0, 0.8, 0.38);
  vec3 c4 = vec3(1.0, 0.98, 0.88);
  vec3 col = mix(c1, c2, smoothstep(0.06, 0.32, heat));
  col = mix(col, c3, smoothstep(0.32, 0.62, heat));
  col = mix(col, c4, smoothstep(0.65, 0.95, heat) * uLayer);
  if (uLayer < 0.99) {
    // Outer tongues: opaque-ish, saturated, so fire reads even against a bright wall.
    float a = smoothstep(0.04, 0.3, f) * I * (0.82 + 0.1 * uLayer);
    vec3 outer = mix(vec3(0.85, 0.16, 0.02), vec3(1.0, 0.52, 0.06), smoothstep(0.1, 0.6, heat + uLayer * 0.3));
    outer = mix(outer, vec3(1.0, 0.82, 0.3), smoothstep(0.55, 0.9, heat) * uLayer);
    gl_FragColor = vec4(outer * (1.0 + uLayer * 0.25), a);
  } else {
    // Hot core glows (additive, above bloom threshold).
    float a = smoothstep(0.05, 0.4, f) * I;
    gl_FragColor = vec4(col * 1.7, a);
  }
}`;class vy{constructor(t){this.view=t;const e=t.scene;this.group=new at,e.add(this.group);const n=new bn(1,1);n.translate(0,.5,0),this.fires=Ht.fires.map((i,r)=>{const o=new at;o.position.set(i.x,i.y-.28,Ht.fireZ);const a=[{w:1.05,h:1.75,layer:0,z:0},{w:.75,h:1.3,layer:.5,z:.02},{w:.42,h:.8,layer:1,z:.04}].map((l,h)=>{const u=new Ve({vertexShader:gy,fragmentShader:xy,uniforms:{uTime:{value:0},uI:{value:0},uSeed:{value:r*3.7+h*1.3},uLayer:{value:l.layer}},transparent:!0,depthWrite:!1,blending:l.layer>=.99?fn:Ai,side:be}),f=new $(n,u);return f.scale.set(l.w,l.h,1),f.position.z=l.z,f.renderOrder=20,o.add(f),f}),c=new go(new yo({map:Bn(),color:"#ff7a2a",blending:fn,transparent:!0,depthWrite:!1,opacity:0}));return c.scale.set(2.2,2.2,1),c.position.y=.45,c.renderOrder=19,o.add(c),this.group.add(o),{g:o,layers:a,halo:c,seed:r*1.7,soot:0}}),this.smoke=new Fn(260,jl(),{renderOrder:12}),e.add(this.smoke.mesh),this.embers=new Fn(160,Bn(),{blending:fn,stretch:!0,renderOrder:21}),e.add(this.embers.mesh),this.emberAcc=0,this.smokeAcc=[0,0,0],this.time=0}reset(){this.smoke.clear(),this.embers.clear()}puff(t,e,n,{steam:i=!1,size:r=.6,vy:o=.8,n:a=1,spread:c=.2}={}){for(let l=0;l<a;l++){const h=i?.95:.22+Math.random()*.1;this.smoke.add({x:t+(Math.random()-.5)*c,y:e+(Math.random()-.5)*c,z:n+(Math.random()-.5)*c,vx:(Math.random()-.5)*.3,vy:o*(.7+Math.random()*.6),vz:(Math.random()-.5)*.2+.1,size:r*(.7+Math.random()*.6),grow:i?1.6:.7,rot:Math.random()*6.28,spin:(Math.random()-.5)*.8,r:h,g:h,b:h*(i?1.02:.98),a:0,a0:i?.32:.85,life:0,max:i?1.2+Math.random()*.5:3.2+Math.random()*1.5,steam:i})}}onEvent(t){if(t.type==="steam"&&this.puff(t.x,t.y,t.z+.05,{steam:!0,size:.45,vy:1.3,n:1}),t.type==="extinguish"&&(this.puff(t.x,t.y+.1,t.z+.05,{steam:!0,size:.9,vy:1.6,n:10,spread:.5}),this.view.rig.kick(.25)),t.type==="ignite"){for(let e=0;e<18;e++)this.embers.add({x:t.x,y:t.y-.2,z:t.z+.05,vx:(Math.random()-.5)*3,vy:1+Math.random()*3,vz:Math.random(),size:.06,stretch:4,r:1,g:.7,b:.3,a:1,life:0,max:.6+Math.random()*.5});this.view.rig.kick(.3)}}update(t,e,n){this.time+=t;const i=n.stage.points,r=n.camera.position,o=e.chapter.id==="fire",a=o?e.chapter.fires:null,c=e.store,l=Ht.downY*(1-c.houseLift.value);for(let u=0;u<this.fires.length;u++){const f=this.fires[u],d=a?a[u]:null,x=d&&d.lit&&!d.out?d.intensity:0;f.g.visible=x>.01,f.g.position.y=Ht.fires[u].y-.28+l;const m=.85+.15*Math.sin(this.time*17+u)*Math.sin(this.time*7.3+u*2);for(const v of f.layers)v.material.uniforms.uTime.value=this.time,v.material.uniforms.uI.value=Math.min(1,x*1.15);const g=.55+.45*x;f.g.scale.set(g,g*(.9+.1*m),g),f.g.rotation.y=Math.atan2(r.x-f.g.position.x,r.z-f.g.position.z),f.halo.material.opacity=.35*x*m;const p=i[u];if(o&&x>.01?(p.position.set(Ht.fires[u].x,Ht.fires[u].y+.45+l,Ht.fireZ+.9),p.color.set("#ff7a2a"),p.intensity=2.6*x*m,p.distance=7):o&&(p.intensity=0),x>.02){this.smokeAcc[u]+=t*(3+5*x);const v=d.sinceHit<.3;for(;this.smokeAcc[u]>1;)this.smokeAcc[u]-=1,this.puff(Ht.fires[u].x,Ht.fires[u].y+.9*x+l,Ht.fireZ-.05,{steam:v,size:.55+.4*x,vy:.9});for(this.emberAcc+=t*14*x;this.emberAcc>1;)this.emberAcc-=1,this.embers.add({x:Ht.fires[u].x+(Math.random()-.5)*.5,y:Ht.fires[u].y+.2+l,z:Ht.fireZ+.05,vx:(Math.random()-.5)*.6,vy:1.2+Math.random()*1.6,vz:(Math.random()-.5)*.3,size:.035+Math.random()*.03,stretch:3,r:1,g:.55+Math.random()*.3,b:.2,a:1,life:0,max:.8+Math.random()*.9})}}const h=c.fans.value;for(const u of this.smoke.list){u.life+=t;const f=u.life/u.max;if(u.vy+=(u.steam?.3:.15)*t,u.y>5.4&&(u.vy*=.9,u.vx+=(u.x>0?.25:-.25)*t),h>.05){const x=u.x>.5?3.6:-2.6;u.vx+=(x-u.x)*.6*h*t,u.vy+=(5.1-u.y)*.5*h*t,u.vz+=(-3.4-u.z)*.5*h*t,Math.hypot(u.x-x,u.y-5.1)<.5&&u.z<-2.8&&(u.life=Math.max(u.life,u.max-.2))}u.vx*=.995,u.x+=u.vx*t,u.y=Math.min(5.9,u.y+u.vy*t),u.z+=u.vz*t,u.size+=u.grow*t,u.rot+=u.spin*t;const d=Math.min(1,u.life/.35)*(1-f);if(u.a=u.a0*d*(h>.05&&u.y>5.2?.6:1),!u.steam){const x=.22+.25*f;u.r=u.g=x,u.b=x*1.02}}this.smoke.list=this.smoke.list.filter(u=>u.life<u.max);for(const u of this.embers.list)u.life+=t,u.vx+=(Math.random()-.5)*4*t,u.vy+=.5*t,u.x+=u.vx*t,u.y+=u.vy*t,u.z+=u.vz*t,u.a=1-u.life/u.max,u.g*=.995;this.embers.list=this.embers.list.filter(u=>u.life<u.max),this.smoke.write(n.camera),this.embers.write(n.camera)}}const Js=18;function yy(){const s=document.createElement("canvas");s.width=64,s.height=256;const t=s.getContext("2d");t.fillStyle="#d8f0ff",t.fillRect(0,0,64,256);for(let n=0;n<60;n++){const i=Math.random()*64,r=Math.random()*256,o=20+Math.random()*70;t.fillStyle=Math.random()<.5?"rgba(255,255,255,0.85)":"rgba(120,180,230,0.55)",t.fillRect(i,r,2+Math.random()*4,o)}const e=new wn(s);return e.wrapS=e.wrapT=mi,e.colorSpace=Ue,e}function _y(){const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,10,64,64,62);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.7,"rgba(255,255,255,0.85)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath();for(let i=0;i<=24;i++){const r=i/24*Math.PI*2,o=52+Math.sin(i*2.3)*7+Math.cos(i*1.7)*5;t.lineTo(64+Math.cos(r)*o,64+Math.sin(r)*o)}return t.fill(),new wn(s)}class My{constructor(t){this.view=t;const e=t.scene;this.drops=new Fn(700,Bn(),{stretch:!0,renderOrder:14}),this.drops.material.color.set("#ffffff"),e.add(this.drops.mesh),this.mist=new Fn(160,jl(),{renderOrder:13}),e.add(this.mist.mesh),this.splash=new Fn(300,Bn(),{stretch:!0,renderOrder:14}),e.add(this.splash.mesh);const n=new gi({color:"#bfe6ff",map:yy(),roughness:.08,metalness:0,transparent:!0,opacity:.9,clearcoat:1,envMapIntensity:1.8,emissive:"#6fb6e6",emissiveIntensity:.35,depthWrite:!1});this.jetTex=n.map,this.jet=new We(Js,.05,10,n,{uvScale:.8}),this.jet.mesh.castShadow=!1,this.jet.mesh.renderOrder=15,e.add(this.jet.mesh),this.jetPts=Array.from({length:Js},()=>new A);const i=Cu(new ve({color:"#6f5236",roughness:.06,metalness:.1,transparent:!0,opacity:.55,alphaMap:_y(),depthWrite:!1,envMapIntensity:1.4}));this.puddleMat=i,this.puddles=[],this.puddleGroup=new at,e.add(this.puddleGroup),this.pgeo=new bn(1,1),this.pgeo.rotateX(-Math.PI/2)}reset(){this.drops.clear(),this.mist.clear(),this.splash.clear();for(const t of this.puddles)this.puddleGroup.remove(t.mesh);this.puddles=[]}onEvent(t){if(t.type!=="splash"||t.kind!=="wall"&&t.kind!=="floor")return;const e=t.kind==="wall"?4:3;for(let n=0;n<e;n++){const i=t.kind==="floor";this.splash.add({x:t.x,y:t.y+.02,z:t.z,vx:(Math.random()-.5)*2.2-(t.vx||0)*.12,vy:i?.8+Math.random()*1.4:Math.random()*1.2,vz:i?(Math.random()-.5)*1.2:.6+Math.random()*1,size:.06+Math.random()*.05,stretch:2.2,r:.7,g:.88,b:1,a:.9,life:0,max:.5+Math.random()*.3})}Math.random()<.5&&this.mist.add({x:t.x,y:t.y+.1,z:t.z+.05,vx:0,vy:.3,vz:.2,size:.4,grow:.9,rot:Math.random()*6,r:.95,g:.98,b:1,a:.45,a0:.45,life:0,max:.9}),t.kind==="floor"&&this.addPuddle(t.x,t.z)}addPuddle(t,e){for(const i of this.puddles)if(Math.hypot(i.x-t,i.z-e)<i.r*.8+.2){i.target=Math.min(1.5,i.target+.02);return}if(this.puddles.length>14)return;const n=new $(this.pgeo,this.puddleMat);n.position.set(t,.012+this.puddles.length*6e-4,e),n.rotation.y=Math.random()*6,n.renderOrder=2,this.puddleGroup.add(n),this.puddles.push({x:t,z:e,r:.05,target:.35,mesh:n})}update(t,e,n){const i=e.chapter.id==="fire",r=i?e.chapter:null;if(this.drops.clear(),r)for(let h=0;h<r.drops.length;h++){const u=r.drops[h],f=u.age;this.drops.add({x:u.x,y:u.y,z:u.z,vx:u.vx,vy:u.vy,vz:u.vz,size:.09+Math.min(.06,f*.08),stretch:2.8,r:.55,g:.8,b:1,a:.9});const d=h*.618%1,x=.03+f*.12;this.drops.add({x:u.x+(d-.5)*x*2,y:u.y+(d*7%1-.5)*x,z:u.z+(d*13%1-.5)*x,vx:u.vx,vy:u.vy,vz:u.vz,size:.06,stretch:2.2,r:.85,g:.95,b:1,a:.8})}this.drops.write(n.camera);const o=n.girl,a=r?r.nozzle:null,c=a?a.pressure:0;if(this.jet.mesh.visible=!!(r&&c>.06&&o.nozzleTip),this.jet.mesh.visible){const h=o.nozzleTip,u=Math.cos(a.elev),f=a.speed*u*Math.cos(a.azim),d=a.speed*Math.sin(a.elev),x=a.speed*u*Math.sin(a.azim),m=.06+.16*c;for(let g=0;g<Js;g++){const p=g/(Js-1)*m;this.jetPts[g].set(h.x+f*p,h.y+d*p-.5*ba*p*p,h.z+x*p)}if(this.jet.radius=.045*(.6+.4*c),this.jetTex.offset.y-=t*a.speed*.8,this.jet.update(this.jetPts,g=>1-g*.35+Math.sin(g*30-n.time*35)*.06*g),Math.random()<c*.6){const g=this.jetPts[Js-1];this.mist.add({x:g.x,y:g.y,z:g.z,vx:f*.3,vy:d*.3,vz:x*.3,size:.2,grow:.9,rot:Math.random()*6,r:.95,g:.98,b:1,a:.18,a0:.18,life:0,max:.7})}}for(const h of this.splash.list)h.life+=t,h.vy-=9.8*t,h.x+=h.vx*t,h.y+=h.vy*t,h.z+=h.vz*t,h.y<.01&&(h.y=.01,h.vy*=-.2,h.vx*=.5),h.a=.85*(1-h.life/h.max);this.splash.list=this.splash.list.filter(h=>h.life<h.max),this.splash.write(n.camera);for(const h of this.mist.list)h.life+=t,h.x+=h.vx*t,h.y+=h.vy*t,h.z+=h.vz*t,h.vx*=.97,h.vy*=.97,h.size+=h.grow*t,h.a=h.a0*(1-h.life/h.max);this.mist.list=this.mist.list.filter(h=>h.life<h.max),this.mist.write(n.camera);const l=e.store.puddle.value;for(const h of this.puddles){h.r+=(h.target-h.r)*Math.min(1,t*1.5);const u=Math.max(.001,h.r*2*Math.min(1,l*3));h.mesh.scale.set(u,1,u*.8),h.mesh.visible=l>.005}!i&&this.puddles.length&&this.reset()}}const bh=`
uniform float uLevel;
uniform float uAmp;
uniform float uTime;
uniform float uVortex;
uniform vec2 uDrain;
uniform vec4 uRip[6];
float waveY(vec2 p, float t, float amp) {
  return amp * (0.075 * sin(1.25 * p.x + 0.35 * p.y - 1.55 * t)
    + 0.045 * sin(2.3 * p.x - 0.6 * p.y + 2.1 * t + 1.3)
    + 0.022 * sin(4.1 * p.x + 1.1 * p.y - 3.2 * t + 0.4));
}
float seaH(vec2 p) {
  float h = uLevel + waveY(p, uTime, uAmp);
  vec2 d = p - uDrain;
  float r2 = dot(d, d);
  h -= uVortex * 0.6 / (1.0 + r2 * 7.0) * min(1.0, uLevel * 1.5);
  for (int i = 0; i < 6; i++) {
    vec4 R = uRip[i];
    float age = uTime - R.z;
    if (age > 0.0 && age < 2.4) {
      float r = length(p - R.xy);
      h += R.w * sin(r * 13.0 - age * 11.0) * exp(-age * 1.7) * exp(-abs(r - age * 1.1) * 5.0);
    }
  }
  return h;
}
`;function wh(){const s=document.createElement("canvas");s.width=64,s.height=256;const t=s.getContext("2d");t.fillStyle="#cdeaf5",t.fillRect(0,0,64,256);for(let n=0;n<70;n++)t.fillStyle=Math.random()<.55?"rgba(255,255,255,0.9)":"rgba(70,140,170,0.5)",t.fillRect(Math.random()*64,Math.random()*256,2+Math.random()*5,25+Math.random()*80);const e=new wn(s);return e.wrapS=e.wrapT=mi,e.colorSpace=Ue,e}class by{constructor(t){this.view=t;const e=t.scene;this.u={uLevel:{value:0},uAmp:{value:0},uTime:{value:0},uVortex:{value:0},uDrain:{value:new K(gt.drain.x,gt.drain.z)},uRip:{value:Array.from({length:6},()=>new xe(0,0,-99,0))},uSpread:{value:0},uSpout:{value:new K(gt.spout.x,gt.spout.z)}},this.ripIndex=0;const n=ft.x1-ft.x0,i=ft.front-ft.back,r=new bn(n,i,128,64);r.rotateX(-Math.PI/2),r.translate(0,0,(ft.front+ft.back)/2);const o=new gi({color:"#2a8fa6",roughness:.04,metalness:0,transparent:!0,opacity:.8,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.5,depthWrite:!1}),a=this.u;o.onBeforeCompile=f=>{Object.assign(f.uniforms,a),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
`+bh+`
varying vec3 vSea;`).replace("#include <beginnormal_vertex>",`vec3 wp0 = (modelMatrix * vec4(position, 1.0)).xyz;
           float e = 0.06;
           float h0 = seaH(wp0.xz);
           float hx = seaH(wp0.xz + vec2(e, 0.0));
           float hz = seaH(wp0.xz + vec2(0.0, e));
           vec3 objectNormal = normalize(vec3(-(hx - h0) / e, 1.0, -(hz - h0) / e));`).replace("#include <begin_vertex>","vec3 transformed = vec3(position); transformed.y = h0; vSea = vec3(wp0.x, h0, wp0.z);"),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
           uniform float uTime; uniform float uVortex; uniform vec2 uDrain; uniform float uSpread; uniform vec2 uSpout; uniform float uLevel; uniform float uAmp;
           varying vec3 vSea;`).replace("#include <color_fragment>",`#include <color_fragment>
           vec2 dd = vSea.xz - uDrain;
           float rr = length(dd);
           float ang = atan(dd.y, dd.x);
           float spiral = sin(ang * 3.0 + rr * 11.0 - uTime * 9.0);
           float foam = uVortex * smoothstep(0.55, 1.0, spiral) * exp(-rr * 1.3);
           foam += smoothstep(0.07, 0.13, vSea.y - uLevel) * uAmp * 0.6;
           float sd = length(vSea.xz - uSpout);
           foam += smoothstep(1.6, 0.0, sd) * 0.5 * uSpread * (1.0 - smoothstep(0.9, 1.0, uLevel)) * (0.6 + 0.4 * sin(uTime * 12.0 + sd * 9.0));
           if (uSpread < 1.0) {
             float edge = uSpread * 16.0 + sin(atan(vSea.z - uSpout.y, vSea.x - uSpout.x) * 7.0 + uTime) * 0.25;
             if (sd > edge) discard;
             foam += smoothstep(edge - 0.35, edge, sd) * 0.8;
           }
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.95, 0.98, 1.0), clamp(foam, 0.0, 1.0));
           diffuseColor.a = mix(diffuseColor.a, 0.95, clamp(foam, 0.0, 1.0));`)},this.surface=new $(r,o),this.surface.renderOrder=6,this.surface.receiveShadow=!0,this.surface.frustumCulled=!1,e.add(this.surface);const c=new bn(n,1,128,1);c.translate(0,.5,ft.front+.03);const l=new Ve({uniforms:{...a,uTop:{value:0}},transparent:!0,depthWrite:!1,vertexShader:bh+`
        uniform float uSpread; uniform vec2 uSpout;
        varying float vDepth; varying float vTopDist; varying float vX;
        void main() {
          vec3 p = position;
          float top = seaH(vec2(p.x, p.z));
          float k = p.y;
          p.y = mix(0.0, top, k);
          vDepth = top - p.y;
          vTopDist = (1.0 - k) * max(top, 0.001);
          vX = p.x;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }`,fragmentShader:`
        uniform float uTime; uniform float uSpread; uniform vec2 uSpout; uniform float uLevel;
        varying float vDepth; varying float vTopDist; varying float vX;
        void main() {
          if (uSpread < 1.0 && abs(vX - uSpout.x) > uSpread * 16.0) discard;
          vec3 shallow = vec3(0.35, 0.78, 0.86);
          vec3 deep = vec3(0.03, 0.3, 0.42);
          float d = clamp(vDepth / 1.6, 0.0, 1.0);
          vec3 col = mix(shallow, deep, d);
          float a = 0.3 + 0.35 * d;
          // Meniscus: a bright line where the surface meets the glass.
          float line = smoothstep(0.035, 0.0, vTopDist);
          col = mix(col, vec3(0.92, 0.98, 1.0), line * 0.9);
          a = max(a, line * 0.85);
          // Light shafts from the surface.
          float shaft = pow(max(0.0, sin(vX * 3.1 + uTime * 0.6) * sin(vX * 1.7 - uTime * 0.4)), 3.0);
          col += vec3(0.18, 0.28, 0.3) * shaft * (1.0 - d);
          gl_FragColor = vec4(col, a);
        }`});this.front=new $(c,l),this.front.renderOrder=7,this.front.frustumCulled=!1,e.add(this.front);const h=new gi({color:"#c9ecf7",map:wh(),roughness:.05,transparent:!0,opacity:.88,clearcoat:1,envMapIntensity:1.6,emissive:"#3d7f99",emissiveIntensity:.3,depthWrite:!1});this.spoutTex=h.map,this.spoutJet=new We(16,.13,12,h,{uvScale:.6}),this.spoutJet.mesh.renderOrder=8,e.add(this.spoutJet.mesh),this.spoutPts=Array.from({length:16},()=>new A);const u=h.clone();u.map=wh(),this.cascTex=u.map,this.cascade=new We(8,.11,10,u,{uvScale:.6}),e.add(this.cascade.mesh),this.cascPts=Array.from({length:8},()=>new A),this.bubbles=new Fn(220,Bn(),{renderOrder:9}),e.add(this.bubbles.mesh),this.spray=new Fn(220,Bn(),{stretch:!0,renderOrder:9}),e.add(this.spray.mesh),this.spoutAcc=0}ripple(t,e,n=.05){this.u.uRip.value[this.ripIndex].set(t,e,this.u.uTime.value,n),this.ripIndex=(this.ripIndex+1)%6}splash(t,e,n,i=10,r=1.5){for(let o=0;o<i;o++){const a=Math.random()*Math.PI*2,c=(.4+Math.random())*r*.6;this.spray.add({x:t,y:e+.02,z:n,vx:Math.cos(a)*c,vy:(1+Math.random()*1.5)*r*.8,vz:Math.sin(a)*c,size:.06+Math.random()*.05,stretch:2,r:.85,g:.95,b:1,a:.9,life:0,max:.9})}}reset(){this.bubbles.clear(),this.spray.clear();for(const t of this.u.uRip.value)t.set(0,0,-99,0)}onEvent(t,e){if(e.chapter.id==="fish"){if(t.type==="splash"&&(t.kind==="hook"||t.kind==="fish")&&(this.ripple(t.x,t.z??gt.sea.fishZ,t.kind==="fish"?.06:.035),this.splash(t.x,t.y,t.z??gt.sea.fishZ,t.kind==="fish"?14:6,t.kind==="fish"?1.6:1)),t.type==="bite"||t.type==="nibble"){const n=e.chapter;this.ripple(n.line.bx,gt.sea.fishZ,t.type==="bite"?.05:.02)}if(t.type==="pop"){this.ripple(gt.drain.x,gt.drain.z,.08);for(let n=0;n<30;n++)this.bubbles.add({x:gt.drain.x+(Math.random()-.5)*.3,y:.05,z:gt.drain.z+(Math.random()-.5)*.3,vy:.8+Math.random(),size:.05+Math.random()*.05,r:1,g:1,b:1,a:.7,life:0,max:2})}}}update(t,e,n){const i=e.store,r=e.chapter.id==="fish",o=r?i.water.value:0,a=o>.004,c=e.time;this.u.uTime.value=c,this.u.uLevel.value=o,this.u.uAmp.value=i.waves.value,this.u.uVortex.value=i.vortex.value;const l=Math.min(1,o/.12);this.u.uSpread.value=l,ql.uLevel.value=a?o+.001:-10,this.surface.visible=a,this.front.visible=a&&o>.03;const h=r?i.spout.value:0;if(this.spoutJet.mesh.visible=h>.02,this.spoutJet.mesh.visible){const f=gt.spout,d=-2.6*h,x=Math.max(.02,o),m=Math.max(.05,f.y-x),g=Math.sqrt(2*m/9.8);for(let v=0;v<16;v++){const y=v/15*g;this.spoutPts[v].set(f.x-.2+d*y,f.y-4.9*y*y,f.z)}this.spoutJet.radius=.11*Math.min(1,h*1.5),this.spoutTex.offset.y-=t*3,this.spoutJet.update(this.spoutPts,v=>1+v*.5);const p=this.spoutPts[15];for(this.spoutAcc+=t*40*h;this.spoutAcc>1;)this.spoutAcc-=1,this.splash(p.x,x,p.z+(Math.random()-.5)*.3,1,1.4),o>.2&&this.bubbles.add({x:p.x+(Math.random()-.5)*.4,y:x-.1-Math.random()*.3,z:p.z,vy:.4,size:.04+Math.random()*.05,r:1,g:1,b:1,a:.6,life:0,max:1.5});Math.random()<t*3&&this.ripple(p.x,p.z,.03)}const u=r?i.vortex.value:0;if(this.cascade.mesh.visible=u>.05&&o>.01,this.cascade.mesh.visible){const f=ft.basement+.15+i.tank.value*2.35;for(let d=0;d<8;d++){const x=-.72-d/7*Math.max(.1,-.72-f);this.cascPts[d].set(gt.drain.x+Math.sin(d+c*20)*.01,x,gt.drain.z-.35)}if(this.cascade.radius=.09*u,this.cascTex.offset.y-=t*4,this.cascade.update(this.cascPts),Math.random()<t*30&&this.bubbles.add({x:gt.drain.x+(Math.random()-.5)*.5,y:f-Math.random()*.8,z:gt.drain.z-.35+(Math.random()-.5)*.4,vy:.5,size:.05,r:1,g:1,b:1,a:.6,life:0,max:1.2,tank:!0}),Math.random()<t*20*u){const d=Math.random()*Math.PI*2,x=.2+Math.random()*.6;this.bubbles.add({x:gt.drain.x+Math.cos(d)*x,y:Math.random()*o,z:gt.drain.z+Math.sin(d)*x,vy:.1,swirl:d,sr:x,size:.04,r:1,g:1,b:1,a:.6,life:0,max:1.4})}}for(const f of this.bubbles.list){if(f.life+=t,f.swirl!==void 0)f.swirl+=t*(3+2/Math.max(.15,f.sr)),f.sr=Math.max(.05,f.sr-t*.35),f.x=gt.drain.x+Math.cos(f.swirl)*f.sr,f.z=gt.drain.z+Math.sin(f.swirl)*f.sr,f.y=Math.max(.02,f.y-t*.4);else{f.y+=f.vy*t,f.x+=Math.sin(f.life*9+f.size*50)*.1*t;const d=f.tank?ft.basement+.15+i.tank.value*2.35:o;f.y>d&&(f.life=f.max)}f.a=.7*(1-f.life/f.max)}this.bubbles.list=this.bubbles.list.filter(f=>f.life<f.max),this.bubbles.write(n.camera);for(const f of this.spray.list)f.life+=t,f.vy-=9.8*t,f.x+=f.vx*t,f.y+=f.vy*t,f.z+=f.vz*t,f.y<o&&(f.life=f.max),f.a=.9*(1-f.life/f.max);this.spray.list=this.spray.list.filter(f=>f.life<f.max),this.spray.write(n.camera)}}function Sh(s,t,e=6){const n=document.createElement("canvas");n.width=64,n.height=64;const i=n.getContext("2d");for(let o=0;o<e;o++)i.fillStyle=o%2?t:s,i.fillRect(0,o*64/e,64,64/e+1);const r=new wn(n);return r.colorSpace=Ue,r}function wy(){const s=document.createElement("canvas");s.width=256,s.height=128;const t=s.getContext("2d");t.fillStyle="#f8f5ee",t.fillRect(0,0,256,128),t.fillStyle="#2f79c9",t.fillRect(0,70,256,58),t.fillStyle="#d8433b",t.fillRect(0,58,256,10);for(let n=0;n<256;n+=32)t.fillStyle="rgba(0,0,0,0.06)",t.fillRect(n,0,2,128);const e=new wn(s);return e.colorSpace=Ue,e}function Sy(s,t,e,n){const o=p=>{const v=(p+1)/2;return t/2*(v<.55?.78+.22*Math.sin(v/.55*Math.PI*.5):Math.cos((v-.55)/.45*Math.PI*.5)**.9)},a=p=>e*(1-.35*p*p)*(p>.8?1-(p-.8)*1.5:1),c=p=>{const v=[],y=[],_=[];for(let T=0;T<=28;T++){const E=-1+2*T/28,C=Math.max(.001,o(E)-p),b=Math.max(.02,a(E)-p);for(let M=0;M<=14;M++){const P=-1+2*M/14,z=E*s/2*n,N=P*C,U=-b*(1-Math.pow(Math.abs(P),2.4))+(E>.5?(E-.5)*.25:0);v.push(z,U,N),y.push(T/28,1-(U+b)/(b+.001))}}for(let T=0;T<28;T++)for(let E=0;E<14;E++){const C=T*15+E,b=C+14+1;_.push(C,b,C+1,b,b+1,C+1)}const S=new Oe;return S.setAttribute("position",new ee(v,3)),S.setAttribute("uv",new ee(y,2)),S.setIndex(_),S.computeVertexNormals(),S},l=new $(c(0)),h=new $(c(.035));l.castShadow=!0;const u=o(-1),f=a(-1),d=new Cn;for(let p=0;p<=14;p++){const v=-1+2*p/14,y=-f*(1-Math.pow(Math.abs(v),2.4));p===0?d.moveTo(v*u,y):d.lineTo(v*u,y)}d.closePath();const x=new Vl(d);x.rotateY(Math.PI/2*n),x.translate(-s/2*n,0,0);const m=new $(x);m.castShadow=!0;const g=[];for(let p=0;p<=28;p++){const v=-1+2*p/28;g.push(new A(v*s/2*n,v>.5?(v-.5)*.25:0,o(v)))}for(let p=28;p>=0;p--){const v=-1+2*p/28;g.push(new A(v*s/2*n,v>.5?(v-.5)*.25:0,-o(v)))}return{outer:l,inner:h,rim:g,transom:m}}function Ty(s){const t=new at,e=s===0?"#ff8a2a":"#3a8fe0",n=s===0?"#ffd27a":"#bfe4ff",i=new $(new $t(.2,20,14),G(e,{rough:.35}));i.scale.set(1.25,.8,.55),t.add(i);const r=new $(new $t(.19,16,10),G(n,{rough:.4}));r.scale.set(1.1,.55,.5),r.position.y=-.05,t.add(r);const o=new at;o.position.x=-.22;const a=new Cn;a.moveTo(0,0),a.lineTo(-.2,.14),a.quadraticCurveTo(-.15,0,-.2,-.14),a.closePath();const c=new $(new $n(a,{depth:.02,bevelEnabled:!1}),G(e,{rough:.4,side:be}));c.position.z=-.01,o.add(c),t.add(o);const l=new $(new Us(.07,.12,3),G(e,{rough:.4}));l.position.set(-.02,.16,0),l.scale.z=.3,t.add(l);for(const h of[-1,1]){const u=new $(new $t(.04,10,8),G("#ffffff",{rough:.3}));u.position.set(.14,.04,h*.085),t.add(u);const f=new $(new $t(.024,8,6),G("#1a1a1a",{rough:.3}));f.position.set(.165,.045,h*.1),t.add(f)}return t.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),{g:t,tail:o}}class Ey{constructor(t){const e=t.scene;this.view=t;const n=Tt.x+.95,i=Tt.z+.45,r=gt.pump,o=[[n,.06,i],[n,-.5,i],[n,-.5,1.9],[r.x-.9,-.5,1.9],[r.x-.9,-.5,r.z+.4],[r.x-.9,-1.6,r.z+.4],[r.x-.45,-1.6,r.z+.4]],a=ai(o,.05,k.pipeBlue,{bend:.16});e.add(a),t.signals.register("pump",a.userData.path,new Pt(1.2,2.2,3.2)),e.add(Ft(.12,.12,.05,k.brass,{x:n,y:.02,z:i}));const c=new at;c.position.set(r.x,ft.basement,r.z),c.add(X(1,.25,1,k.iron,{y:.125})),c.add(Ft(.22,.22,.6,k.pipeBlue,{x:-.1,y:.55,rz:Math.PI/2})),this.fly=zu(.42,.05,6,k.red),this.fly.position.set(-.1,.95,.42),c.add(this.fly),c.add(Ft(.045,.045,.55,k.steel,{x:-.1,y:.95,z:.2,rx:Math.PI/2})),this.piston=X(.16,.5,.16,k.steel,{x:.28,y:1.7,z:.42}),c.add(this.piston),c.add(Ft(.14,.14,.5,k.pipeBlue,{x:.28,y:2.05,z:.42})),this.rod=X(.05,.8,.04,k.steel,{z:.5}),c.add(this.rod),e.add(c),this.pumpGroup=c,this.flyAngle=0;const l=gt.spout;e.add(ai([[r.x+.28,ft.basement+2.3,r.z+.42],[r.x+.28,-.3,r.z+.42],[5.72,-.3,r.z+.42],[5.72,l.y,l.z],[5.5,l.y,l.z]],.075,k.pipeBlue,{bend:.2}));const h=ae(new Ee(.1,.17,.3,16,1,!0),G("#c9a24a",{rough:.3,metal:.9,side:be}),{x:5.45,y:l.y,z:l.z,rz:Math.PI/2});e.add(h),e.add(ae(new Pe(.17,.03,8,20),k.brass,{x:5.3,y:l.y,z:l.z,ry:Math.PI/2}));const u=gt.tank,f=u.x1-u.x0,d=(u.x0+u.x1)/2,x=-1.3,m=1.1;this.tankH=2.35;const g=ft.basement+.15;e.add(X(f+.2,.15,m-x+.2,k.iron,{x:d,y:ft.basement+.075,z:(x+m)/2}));for(const D of[u.x0,u.x1])for(const F of[x,m])e.add(X(.08,this.tankH+.1,.08,k.iron,{x:D,y:g+this.tankH/2,z:F}));for(const[D,F,Z,W]of[[u.x0,u.x1,x,x],[u.x0,u.x0,x,m],[u.x1,u.x1,x,m]]){const dt=Math.max(.02,F-D),yt=Math.max(.02,W-Z);e.add(ae(new Xe(dt,this.tankH,yt),k.glass,{x:(D+F)/2,y:g+this.tankH/2,z:(Z+W)/2,shadow:!1}))}const p=ae(new Xe(f,this.tankH,.02),k.glass,{x:d,y:g+this.tankH/2,z:m,shadow:!1});e.add(p),this.tankWater=ae(new Xe(f-.06,1,m-x-.06),new gi({color:"#2f95ad",transparent:!0,opacity:.62,roughness:.1,depthWrite:!1}),{x:d,z:(x+m)/2,shadow:!1}),this.tankWater.renderOrder=3,e.add(this.tankWater),this.tankBase=g,e.add(ai([[u.x1-.2,g+.2,x+.3],[r.x-.45,g+.2,x+.3],[r.x-.45,g+.2,r.z],[r.x-.3,g+.2,r.z]],.07,k.pipeBlue)),e.add(ai([[gt.drain.x,-.02,gt.drain.z],[gt.drain.x,-.72,gt.drain.z],[gt.drain.x,-.72,gt.drain.z-.35],[gt.drain.x,-.85,gt.drain.z-.35]],.11,k.steel,{bend:.12}));const v=gt.drain,y=new at;y.position.set(v.x,.004,v.z),y.add(ae(new Pe(.3,.04,8,28),k.steel,{rx:Math.PI/2})),this.hole=ae(new _o(.28,28),G("#101214",{rough:1,water:!1}),{rx:-Math.PI/2,y:.002,shadow:!1}),y.add(this.hole),this.grateBars=new at;for(let D=-2;D<=2;D++)this.grateBars.add(X(.035,.02,.5-Math.abs(D)*.08,k.steel,{x:D*.1,y:.01,shadow:!1}));y.add(this.grateBars),e.add(y),this.plug=new at,this.plug.add(Ft(.2,.16,.16,G("#262626",{rough:.8}),{y:.08})),this.plug.add(ae(new Pe(.07,.018,8,16),k.chrome,{y:.2})),e.add(this.plug),this.buoy=new at;const _=new $(new $t(.15,20,14),new ve({map:Sh("#e53935","#ffffff",4),roughness:.35}));_.scale.set(1,.8,1),_.castShadow=!0,this.buoy.add(_),this.buoy.add(ae(new Pe(.05,.012,6,12),k.chrome,{y:.13})),e.add(this.buoy),this.chain=new Ci(14,1.6,{iterations:16,damping:.95}),this.chainTube=new We(14,.018,6,G("#9aa1a8",{rough:.35,metal:.8})),e.add(this.chainTube.mesh),this.chainPts=[];const S=new at;S.position.set(5.55,.05,-.4);const T=X(.08,1.1,3.6,G("#f0b534",{rough:.5}),{y:.55});S.add(T),S.add(X(.1,.1,3.8,k.iron,{y:.03})),e.add(S),this.paddle=S,this.paddleArm=X(.06,.06,.9,k.steel,{x:5.75,y:1,z:-.4}),e.add(this.paddleArm),e.add(Ft(.18,.18,.1,k.iron,{x:5.85,y:1.05,z:-.4,rz:Math.PI/2}));const E=gt.boat,C=new at;C.position.set(E.x,0,E.z);for(const D of[-.65,.65]){C.add(X(.06,.3,.7,k.woodDark,{x:D,y:.17})),C.add(X(.1,.05,.75,k.woodDark,{x:D,y:.3}));for(const F of[-.33,.33])C.add(Ft(.06,.06,.04,k.iron,{x:D,y:.06,z:F,rx:Math.PI/2}))}C.add(X(1.4,.05,.08,k.woodDark,{y:.12})),e.add(C);const b=new at,M=Sy(E.len,.95,.42,1);M.outer.material=new ve({map:wy(),roughness:.55,side:be}),M.inner.material=G("#a8784a",{rough:.8,side:be}),M.transom.material=M.outer.material,M.outer.position.y=M.inner.position.y=M.transom.position.y=.44,b.add(M.outer,M.inner,M.transom);const P=new $(new Yi(new Ts(M.rim,!0),80,.035,8,!0),G("#8c5a3a",{rough:.6}));P.position.y=.44,P.castShadow=!0,b.add(P),b.add(X(.12,.05,.85,G("#b98a55",{rough:.7}),{x:.35,y:.3})),b.add(X(.12,.05,.85,G("#b98a55",{rough:.7}),{x:-.45,y:.3}));for(const D of[-1,1]){const F=new at;F.add(Ft(.02,.02,1.4,G("#b98a55"),{rz:Math.PI/2})),F.add(X(.35,.02,.12,G("#b98a55"),{x:.8})),F.position.set(0,.45,D*.32),F.rotation.y=D*.12,b.add(F)}e.add(b),this.boat=b;const z=gt.aquarium,N=new at;N.position.set(z.x,z.y,z.z),N.add(X(z.w+.2,.1,.62,k.woodDark,{y:-1.05/2-.05})),N.add(X(z.w+.1,.12,.55,G("#d9c9a2",{rough:.9}),{y:-1.05/2+.06}));for(let D=0;D<5;D++){const F=new $(new Us(.06,.5+D%3*.15,5),G("#4caf50",{rough:.8}));F.position.set(-1.9/2+.2+D*.38,-1.05/2+.35,-.1+D%2*.12),N.add(F)}this.aqWater=ae(new Xe(z.w-.04,z.h-.18,.5),new gi({color:"#58b8d8",transparent:!0,opacity:.35,roughness:.1,depthWrite:!1}),{y:-.06,shadow:!1}),this.aqWater.renderOrder=4,N.add(this.aqWater),N.add(ae(new Xe(z.w,z.h,.56),k.glass,{shadow:!1}));for(const D of[-1,1])N.add(X(.05,z.h,.58,k.iron,{x:D*z.w/2}));this.lid=new at,this.lid.position.set(0,z.h/2,-.28),this.lid.add(X(z.w+.08,.05,.6,G("#2f79c9",{rough:.5}),{z:.3})),N.add(this.lid),e.add(ai([[z.x+z.w/2-.15,z.y-z.h/2-.1,z.z],[z.x+z.w/2-.15,-.3,z.z]],.04,k.pipeBlue)),e.add(N),this.aq=N,this.fish=[0,1].map(D=>{const F=Ty(D);return e.add(F.g),{...F,yaw:0,flop:0}}),this.line=new Ci(26,2,{iterations:20,damping:.96,gravity:-6}),this.lineTube=new We(26,.007,4,new kn({color:"#f4f4f4"})),this.lineTube.mesh.castShadow=!1,e.add(this.lineTube.mesh),this.linePts=[],this.sinker=new We(2,.006,4,new kn({color:"#e8e8e8"})),e.add(this.sinker.mesh),this.bobber=new at;const U=new $(new $t(.07,14,10),new ve({map:Sh("#ff3b30","#ffffff",2),roughness:.3}));this.bobber.add(U),this.bobber.add(Ft(.008,.008,.12,G("#222"),{y:.08})),e.add(this.bobber),this.hook=ae(new Pe(.03,.006,6,12,Math.PI*1.4),k.chrome,{shadow:!1}),e.add(this.hook),this.lineInit=!1,this.tmp=new A}reset(){this.lineInit=!1}update(t,e,n){const i=e.store,o=e.chapter.id==="fish"?e.chapter:null,a=n.time;this.flyAngle+=t*i.pump.value*9,this.fly.rotation.z=-this.flyAngle;const c=Math.cos(this.flyAngle)*.3,l=Math.sin(this.flyAngle)*.3;this.piston.position.y=1.7+l*.4,this.rod.position.set(-.1+c*.5+.2,1.3+l*.5,.5),this.rod.rotation.z=-c*.5,this.pumpGroup.position.x=gt.pump.x+(i.pump.value>.3?Math.sin(a*60)*.004:0);const h=Math.max(.02,i.tank.value)*this.tankH;this.tankWater.scale.y=h,this.tankWater.position.y=this.tankBase+h/2,this.paddle.rotation.x=0,this.paddle.rotation.z=Math.sin(e.time*1.55)*.18*i.waves.value,this.paddleArm.position.x=5.75-Math.sin(e.time*1.55)*.12*i.waves.value,this.lid.rotation.x=-i.aquariumLid.value*1.25;const u=o?o.boat.y:gt.boat.trolleyY,f=o?o.boat.tilt:0;this.boat.position.set(gt.boat.x,u-.06,gt.boat.z),this.boat.rotation.z=f,this.boat.rotation.x=o&&o.boat.afloat?Math.sin(e.time*1.3)*.03:0;for(let S=0;S<2;S++){const T=this.fish[S],E=o?o.fish[S]:null;if(!E){const z=gt.aquarium,N=z.x-.35+S*.7+Math.sin(a*.9+S*2.1)*.35;T.g.position.set(N,z.y-.15+Math.sin(a*1.3+S)*.1,z.z+.1),T.g.rotation.set(0,Math.cos(a*.9+S*2.1)>=0?0:Math.PI,0),T.tail.rotation.y=Math.sin(a*8+S)*.4,T.g.scale.setScalar(.8);continue}T.g.scale.setScalar(E.state==="tank"||E.state==="home"?.8:1.3),T.g.position.set(E.x,E.y,E.z??gt.sea.fishZ);const C=E.dir>=0?0:Math.PI;T.yaw+=(C-T.yaw)*Math.min(1,t*6);let b=0,M=0,P=Math.sin(a*10+S)*.35;E.state==="hooked"?(P=Math.sin(a*22+S)*.7,b=Math.sin(a*13)*.25):E.state==="air"||E.state==="jump"?(P=Math.sin(a*28+S)*.9,b=Math.sin(a*17)*.5,M=E.state==="jump"?.6*Math.cos(Math.min(1,E.t/.95)*Math.PI):Math.sin(a*9)*.5):E.state==="nibble"&&(P=Math.sin(a*30)*.5),T.g.rotation.set(b,T.yaw,M*(E.dir>=0?1:-1)),T.tail.rotation.y=P}const d=gt.drain,x=o?o.plug.out:!1,m=o?o.plug.x:d.x,g=o?o.plug.y:0;this.plug.position.set(m,g,d.z),this.plug.rotation.z=x?Math.sin(a*6)*.3:0,this.hole.visible=x,this.grateBars.visible=!0;const p=o?o.buoy.x:d.x-.3,v=o?o.buoy.y:.1;this.buoy.position.set(p,v,d.z),this.buoy.rotation.z=Math.sin(a*1.7)*.15*i.waves.value;const y=this.tmp.set(m,g+.2,d.z),_=new A(p,v-.1,d.z);this.chain.setLength(1.6),this.chain.floorY=.02,this.chain.pin(0,y.x,y.y,y.z),this.chain.pin(this.chain.n-1,_.x,_.y,_.z),this.chain.gravity=i.water.value>.3?-3:-9.8,this.chain.step(t),this.chainTube.update(this.chain.points(this.chainPts)),this.updateLine(t,e,n,o)}updateLine(t,e,n,i){const r=e.girl,o=!!(i&&r.holding==="rod"&&i.line.state!=="stowed");if(this.lineTube.mesh.visible=o,this.bobber.visible=o&&["float","hooked","snag"].includes(i.line.state),this.hook.visible=o,this.sinker.mesh.visible=!1,!o){this.lineInit=!1;return}const a=i.line,c=n.girl.rodTip.clone(),l=gt.sea.fishZ,h=a.state==="float",u=h?new A(a.bx,a.by+.05,l):new A(a.hx,a.hy,l);this.lineInit||(this.line.lay([c.x,c.y,c.z],[u.x,u.y,u.z]),this.lineInit=!0);const f=c.distanceTo(u),d=a.state==="flying"?1.02:1+.18*(1-Math.min(1,a.tension*1.2));this.line.setLength(Math.max(.2,f*d)),this.line.pin(0,c.x,c.y,c.z),this.line.pin(this.line.n-1,u.x,u.y,u.z),this.line.floorY=e.store.water.value>.05?-5:.01;for(let x=0;x<2;x++)this.line.step(t/2);this.lineTube.update(this.line.points(this.linePts)),h?(this.bobber.position.set(a.bx,a.by+.02,l),this.sinker.mesh.visible=!0,this.sinker.update([new A(a.bx,a.by,l),new A(a.hx,a.hy,l)]),this.hook.position.set(a.hx,a.hy-.03,l)):(this.bobber.position.set(a.bx,a.by,l),this.hook.position.set(u.x,u.y-.03,l)),a.state==="hooked"&&(this.bobber.position.y=Math.min(a.by,a.hy+.3)+Math.sin(n.time*20)*.02,this.bobber.position.x=a.hx)}}const Th=ft.ceil+.02,_s=-.6,eo=9;function va(s,t,e,n=!1){const i=document.createElement("canvas");i.width=i.height=64;const r=i.getContext("2d");for(let a=0;a<e;a++)r.fillStyle=a%2?t:s,n?r.fillRect(a*64/e,0,64/e+1,64):r.fillRect(0,a*64/e,64,64/e+1);const o=new wn(i);return o.colorSpace=Ue,o.wrapS=o.wrapT=mi,o}class Ay{constructor(t){const e=t.scene;this.view=t;const n=Ce.iris,i=Ce.lever,r=[[Tt.x-.95,.03,Tt.z-.55],[i.x+.08,.03,Tt.z-.55],[i.x+.08,.03,i.z],[i.x+.08,i.y-.35,i.z]],o=ai(r,.03,G("#6a3fb5",{rough:.6}),{bend:.1});e.add(o),t.signals.register("lever",o.userData.path,new Pt(2.6,1.6,3.2)),e.add(Ft(.1,.1,.04,k.brass,{x:Tt.x-.95,y:.02,z:Tt.z-.55}));const a=new at;a.position.set(i.x+.1,i.y,i.z),a.add(X(.06,.8,.6,k.iron,{x:-.05,r:.02})),a.add(Ft(.09,.09,.2,k.steel,{rx:Math.PI/2})),this.leverArm=new at,this.leverArm.add(X(.9,.08,.08,k.red,{x:.45,r:.03})),this.leverArm.add(qi(.1,G("#1c1c1c",{rough:.4}),{x:.92})),this.leverArm.add(X(.12,.25,.05,k.steel,{x:-.06,y:.08})),a.add(this.leverArm),e.add(a),this.rod=X(.05,ft.ceil+.8-i.y,.05,k.steel,{x:i.x+.05,z:i.z-.4}),e.add(this.rod),this.rodBaseY=(ft.ceil+.8+i.y)/2;for(let U=i.y+.6;U<ft.ceil;U+=1.2)e.add(X(.1,.05,.12,k.iron,{x:i.x+.05,y:U,z:i.z-.4}));const c=ft.ceil+.95,l=ft.back+.55,h=[{x:-5.35,r:.36,n:12},{x:-4.43,r:.54,n:18},{x:-3.6,r:.27,n:9},{x:-2.83,r:.48,n:16},{x:-2.05,r:.28,n:9}],u=[k.brass,G("#b5462f",{rough:.45,metal:.6}),k.brass,G("#3f7f9a",{rough:.45,metal:.6}),k.brass];this.gears=h.map((U,D)=>{const F=new $(co(U.n,U.r,.09),u[D]);return F.position.set(U.x,c+(D%2?.02:-.02),l),F.castShadow=!0,e.add(F),e.add(Ft(.05,.05,.4,k.iron,{x:U.x,y:F.position.y,z:l-.15,rx:Math.PI/2})),e.add(X(.08,F.position.y-ft.ceil-.3,.08,k.iron,{x:U.x,y:(F.position.y+ft.ceil+.3)/2,z:l-.3})),{mesh:F,...U}}),e.add(Ft(.04,.04,1.6,k.steel,{x:-1.25,y:c,z:l+.1,rz:Math.PI/2})),this.shaft=Ft(.12,.05,.2,k.brass,{x:-.45,y:c,z:l+.1,rz:-Math.PI/2}),e.add(this.shaft),e.add(Ft(.04,.04,_s-l+.2,k.steel,{x:-.3,y:c-.3,z:(l+_s)/2,rx:Math.PI/2})),this.crank=X(.5,.05,.05,k.steel,{x:-5.6,y:c-.3,z:l+.12}),e.add(this.crank);const f=[[i.x+.05,ft.ceil+.75,i.z-.4],[i.x+.05,ft.ceil+.75,l],[-5.35,c,l],[-2.05,c,l],[-.45,c,l+.1],[-.3,c-.3,_s-1],[n.x-n.r-.2,Th+.15,_s]],d=new Ts(f.map(U=>new A(U[0],U[1],U[2])),!1,"catmullrom",.2);t.signals.register("attic",d,new Pt(3.2,2.4,1));const x=new at;x.position.set(n.x,Th,_s);const m=new Cn;m.absarc(0,0,n.r+.75,0,Math.PI*2,!1);const g=new pi;g.absarc(0,0,n.r-.02,0,Math.PI*2,!0),m.holes.push(g);const p=new $n(m,{depth:.08,bevelEnabled:!1,curveSegments:64});p.rotateX(Math.PI/2);const v=new $(p,G("#3c4450",{rough:.5,metal:.6}));v.position.y=-.02,v.receiveShadow=!0,x.add(v);for(let U=0;U<16;U++){const D=U/16*Math.PI*2;x.add(Ft(.035,.035,.04,k.brass,{x:Math.cos(D)*(n.r+.4),y:-.1,z:Math.sin(D)*(n.r+.4),shadow:!1}))}this.ringGear=new $(co(72,n.r+.95,.1,{hole:.9,toothDepth:.07}),k.brass),this.ringGear.rotation.x=Math.PI/2,this.ringGear.position.y=.28,x.add(this.ringGear),this.blades=[];const y=new ve({map:va("#f2c230","#2b2b2b",8,!0),roughness:.45,metalness:.4,side:be});for(let U=0;U<eo;U++){const D=U/eo*Math.PI*2,F=n.r+.12,Z=new K(Math.cos(D)*F,Math.sin(D)*F),W=[];for(let le=0;le<=8;le++){const se=D+le/8*(Math.PI*2/eo)*2.2;W.push(new K(Math.cos(se)*F,Math.sin(se)*F))}const dt=D+Math.PI*2/eo*1.5;W.push(new K(Math.cos(dt)*.35,Math.sin(dt)*.35)),W.push(new K(Math.cos(D+.6)*-.25,Math.sin(D+.6)*-.25));const yt=new Cn(W.map(le=>le.clone().sub(Z))),Et=new $n(yt,{depth:.025,bevelEnabled:!1,curveSegments:4});Et.rotateX(Math.PI/2);const Yt=new $(Et,y);Yt.castShadow=!0;const ne=new at;ne.position.set(Z.x,.04+U*.004,Z.y),ne.add(Yt),x.add(ne),this.blades.push(ne)}e.add(x),this.iris=x;const _=G("#c8563e",{rough:.7}),S=G("#c9b08a",{rough:.9}),T=(hn.x1-hn.x0)/2,E=ft.back-.6,C=ft.front+.4;this.clam=[-1,1].map(U=>{const D=new at,F=U<0?hn.x0:hn.x1;D.position.set(F,ft.roof,0);const Z=-U*(T/2);D.add(X(T,ft.roof-ft.attic,C-E,_,{x:Z,y:-1.1999999999999993/2,z:(E+C)/2})),D.add(X(T,ft.attic-ft.ceil-.3,.3,S,{x:Z,y:-1.1999999999999993-(ft.attic-ft.ceil-.3)/2,z:ft.back-.15}));for(const W of[E+.5,(E+C)/2,C-.5])D.add(Ft(.09,.09,.4,k.iron,{z:W,rx:Math.PI/2}));return D.add(X(.12,.14,C-E,k.iron,{x:Z,y:.07,z:(E+C)/2})),e.add(D),{hinge:D,sx:U}}),this.rams=[-1,1].map(U=>{const D=X(.08,1.2,.08,k.chrome,{});return e.add(D),{r:D,sx:U}});const b=new Ee(n.r-.1,n.r+.6,ft.ceil,40,1,!0),M=new Ve({transparent:!0,depthWrite:!1,blending:fn,side:be,uniforms:{uA:{value:0},uT:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uA; uniform float uT; varying vec2 vUv;
        void main(){
          float streak = 0.6 + 0.4 * sin(vUv.x * 60.0 + uT * 0.5) * sin(vUv.x * 23.0 - uT * 0.3);
          float a = uA * pow(vUv.y, 1.6) * streak * 0.22;
          gl_FragColor = vec4(vec3(0.6, 0.75, 1.0) * a, a);
        }`});this.beam=new $(b,M),this.beam.position.set(n.x,ft.ceil/2,_s),this.beam.renderOrder=16,e.add(this.beam);const P=Ce.winch,z=new at;z.position.set(P.x,0,P.z);for(const U of[-.3,.3])z.add(X(.08,.7,.08,k.teal,{x:-.2,y:.33,z:U,rz:.3})),z.add(X(.08,.7,.08,k.teal,{x:.2,y:.33,z:U,rz:-.3}));z.add(X(.8,.06,.8,k.iron,{y:.03})),this.drum=new at,this.drum.position.y=.62,this.drum.add(Ft(.22,.22,.04,k.teal,{rx:Math.PI/2,z:-.26})),this.drum.add(Ft(.22,.22,.04,k.teal,{rx:Math.PI/2,z:.26})),this.coil=Ft(.16,.16,.48,G("#e3c48f",{map:vr(),rough:.9}),{rx:Math.PI/2}),this.drum.add(this.coil),this.drum.add(X(.03,.4,.03,k.steel,{z:.3,y:0})),z.add(this.drum),this.crankHandle=new at,this.crankHandle.position.set(0,.62,.36),this.crankHandle.add(X(.05,.35,.04,k.steel,{y:.16})),this.crankHandle.add(Ft(.03,.03,.15,k.red,{y:.33,z:.07,rx:Math.PI/2})),z.add(this.crankHandle),z.add(ae(co(14,.14,.03),k.brass,{y:.62,z:-.33})),e.add(z),this.tether=new Ci(34,6,{iterations:24,damping:.985}),this.tetherTube=new We(34,.022,6,G("#f2e4c6",{map:vr("#f4e8cc","#c9a86a"),rough:.85}),{uvScale:5}),this.tetherTube.mesh.visible=!1,e.add(this.tetherTube.mesh),this.tetherPts=[],this.tetherOn=!1;const N=Ce.items;e.add(X(.8,.05,.5,k.woodDark,{x:N[1].x,y:N[1].y-.14,z:-2.2}));for(const U of[-.35,.35])e.add(X(.05,N[1].y-.16,.05,k.woodDark,{x:N[1].x+U,y:(N[1].y-.16)/2,z:-2.2}));e.add(Ft(.03,.03,N[2].y-.1,k.chrome,{x:N[2].x,y:(N[2].y-.1)/2,z:-2.3})),e.add(Ft(.22,.22,.04,k.chrome,{x:N[2].x,y:.02,z:-2.3})),e.add(qi(.14,G("#e9dcc4",{rough:.8}),{x:N[2].x,y:N[2].y-.1,z:-2.3})),this.items=N.map((U,D)=>this.buildItem(U.kind,D,e)),this.puffs=new Fn(160,jl(),{renderOrder:12}),e.add(this.puffs.mesh),this.flames=new Fn(60,Bn(),{blending:fn,stretch:!0,renderOrder:13}),e.add(this.flames.mesh),this.dust=new Fn(120,Bn(),{renderOrder:11}),e.add(this.dust.mesh);for(let U=0;U<110;U++)this.dust.add({x:ft.x0+Math.random()*12,y:Math.random()*5.8,z:ft.back+Math.random()*5.5,size:.03+Math.random()*.03,r:1,g:.97,b:.85,a:0,vx:(Math.random()-.5)*.1,vy:(Math.random()-.5)*.1,ph:Math.random()*6});this.gearAngle=0,this.tmp=new A}buildItem(t,e,n){const i=new at;let r=null;if(t==="scarf"){r=new or(3,12,.24,1.1,{gravity:-9.8,damping:.97,iterations:6});const o=ar(r,G("#ffffff",{map:va("#e53935","#fff4e0",8),rough:.9,side:be}));return n.add(o),{kind:t,g:i,cloth:r,mesh:o,inited:!1}}if(t==="sock"){const o=new ve({map:va("#2a9d8f","#f4e04d",6),roughness:.9}),a=new $(new Zn(.075,.28,4,12),o);a.position.y=.1,i.add(a);const c=new $(new Zn(.07,.18,4,12),o);c.rotation.z=Math.PI/2,c.position.set(.1,-.1,0),i.add(c)}else{const o=G("#7b5cd6",{rough:.9}),a=new $(new $t(.2,18,12,0,Math.PI*2,0,Math.PI/2),o);i.add(a),i.add(ae(new Pe(.19,.045,8,20),G("#f7d56b",{rough:.9}),{rx:Math.PI/2})),i.add(qi(.07,G("#f7d56b",{rough:1}),{y:.22}))}return i.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),n.add(i),{kind:t,g:i,cloth:null,mesh:null}}reset(){this.tetherOn=!1;for(const t of this.items)t.inited=!1;this.puffs.clear(),this.flames.clear()}update(t,e,n){const i=e.store,r=e.chapter.id==="space",o=r?e.chapter:null,a=n.time;this.leverArm.rotation.z=.8-i.lever.value*1.6,this.rod.position.y=this.rodBaseY+i.lever.value*.22,this.crank.rotation.z=i.lever.value*.5;const c=i.iris.value*Math.PI*3.2;let l=c;for(let m=0;m<this.gears.length;m++){const g=this.gears[m];m>0&&(l=-l*this.gears[m-1].n/g.n),g.mesh.rotation.z=l+(m%2?Math.PI/g.n:0)}this.shaft.rotation.x=c*2,this.ringGear.rotation.z=i.iris.value*.35;for(const m of this.blades)m.rotation.y=i.iris.value*1.05;const h=i.iris.value;for(const m of this.clam)m.hinge.rotation.z=-m.sx*h*1.75;for(const m of this.rams){const g=m.sx<0?hn.x0:hn.x1,p=h*1.75,v=g-m.sx*Math.cos(p)*1.3,y=ft.roof+Math.sin(p)*1.3,_=g+m.sx*.9,S=ft.roof-.05;m.r.position.set((v+_)/2,(y+S)/2,ft.front-.2),m.r.scale.y=Math.max(.1,Math.hypot(v-_,y-S)/1.2),m.r.rotation.z=Math.atan2(v-_,-(y-S))}this.beam.material.uniforms.uA.value=h*(e.chapter.id==="space"?1:0),this.beam.material.uniforms.uT.value=a,this.beam.visible=h>.02;const u=Ce.winch,f=e.girl,d=o&&o.tethered;if(this.tetherTube.mesh.visible=!!d,d){const m=new A(u.x,.78,u.z+.1),g=new A(f.x-f.facing*.2,f.y+.55,f.z-.15),p=n.girl.pack;p&&p.parent&&f.outfit==="space"&&(p.updateMatrixWorld(),g.copy(new A(0,0,-.08).applyMatrix4(p.matrixWorld))),this.tetherOn||(this.tether.lay([m.x,m.y,m.z],[g.x,g.y,g.z]),this.tetherOn=!0);const v=m.distanceTo(g),_=o.phase==="return"||o.tetherTaut?v*1.005:Math.max(v*1.15,v+.6);this.tether.setLength(_),this.tether.gravity=-9.8*i.gravity.value-.3,this.tether.floorY=.02,this.tether.pin(0,m.x,m.y,m.z),this.tether.pin(this.tether.n-1,g.x,g.y,g.z);for(let S=0;S<2;S++)this.tether.step(t/2);this.tetherTube.offset=-_*5,this.tetherTube.update(this.tether.points(this.tetherPts)),this.drum.rotation.z=-_/.16,this.crankHandle.rotation.z=-_/.16,this.coil.scale.set(Math.max(.6,1-_/20),1,Math.max(.6,1-_/20))}else this.tetherOn=!1;for(let m=0;m<this.items.length;m++){const g=this.items[m],p=Ce.items[m],v=o?o.items[m]:null,y=v?v.x:p.x,_=v?v.y:p.y,S=v?v.rot:0,T=v&&(v.state==="float"||v.state==="carried"),E=m===0?-2.75:-2.25;if(g.z=g.z??E,g.z+=((T?.25:E)-g.z)*Math.min(1,t*1.5),g.cloth){const C=g.cloth,b=y+Math.cos(S)*.12,M=_+.45+Math.sin(S)*.12;for(let P=0;P<3;P++)C.pin(P,b-.12+P*.12,M,g.z);if(!g.inited){for(let P=0;P<12;P++)for(let z=0;z<3;z++)C.set(P*3+z,b-.12+z*.12,M-P*.1,g.z);g.inited=!0}C.gravity=-9.8*i.gravity.value,C.wind.set(Math.sin(a*1.3)*1.5*(1-i.gravity.value),Math.cos(a*.9)*1.2*(1-i.gravity.value),0),C.step(Math.min(t,1/40)),g.mesh.userData.sync()}else g.g.position.set(y,_,g.z),g.g.rotation.set(S*.4,S,S*.7)}if(o&&f.mode==="float"&&o.thrust.k>.05){const m=n.girl.pack;m.updateMatrixWorld();const g=new A(0,-.22,-.02).applyMatrix4(m.matrixWorld),p=-o.thrust.x,v=-o.thrust.y;for(let y=0;y<2;y++)this.puffs.add({x:g.x,y:g.y,z:g.z,vx:p*1.6+(Math.random()-.5)*.4,vy:v*1.6+(Math.random()-.5)*.4,vz:(Math.random()-.5)*.3,size:.18,grow:1.4,rot:Math.random()*6,r:1,g:1,b:1,a:.5,a0:.5,life:0,max:.8});this.flames.add({x:g.x,y:g.y,z:g.z+.02,vx:p,vy:v,vz:0,size:.16*o.thrust.k+.05,stretch:3,r:.6,g:.8,b:1,a:1,life:0,max:.06})}for(const m of this.puffs.list)m.life+=t,m.x+=m.vx*t,m.y+=m.vy*t,m.z+=m.vz*t,m.vx*=.96,m.vy*=.96,m.size+=m.grow*t,m.a=m.a0*(1-m.life/m.max);this.puffs.list=this.puffs.list.filter(m=>m.life<m.max);for(const m of this.flames.list)m.life+=t;this.flames.list=this.flames.list.filter(m=>m.life<m.max),this.puffs.write(n.camera),this.flames.write(n.camera);const x=1-i.gravity.value;for(const m of this.dust.list)m.x+=m.vx*t,m.y+=m.vy*t+Math.sin(a+m.ph)*.02*t,m.y>5.8&&(m.y=.1),m.y<0&&(m.y=5.7),m.x>ft.x1&&(m.x=ft.x0),m.x<ft.x0&&(m.x=ft.x1),m.a=x*(.35+.35*Math.sin(a*2+m.ph));if(this.dust.write(n.camera),r){const m=n.stage.spot,g=f.outfit==="space"&&i.iris.value>.05?1:0;m.color.set("#fff3d6"),m.intensity=25*g,m.angle=.45,m.penumbra=.7,m.distance=12;const p=n.girl.head;p.updateMatrixWorld();const v=new A(0,.25,.25).applyMatrix4(p.matrixWorld);m.position.copy(v),m.target.position.set(v.x+f.facing*2.5,v.y-.5,v.z+1.5)}}}function Ry(){const s=document.createElement("canvas");s.width=512,s.height=256;const t=s.getContext("2d");t.fillStyle="#1f6fc0",t.fillRect(0,0,512,256);const e=["#4caf50","#6dbb4f","#a5a55a"];for(let i=0;i<26;i++){t.fillStyle=e[i%3],t.beginPath();const r=Math.random()*512,o=40+Math.random()*170;for(let a=0;a<9;a++){const c=a/9*Math.PI*2,l=18+Math.random()*38;t.lineTo(r+Math.cos(c)*l*1.4,o+Math.sin(c)*l)}t.fill()}t.fillStyle="rgba(255,255,255,0.85)";for(let i=0;i<40;i++)t.beginPath(),t.ellipse(Math.random()*512,Math.random()*256,20+Math.random()*50,5+Math.random()*9,Math.random()*.4,0,Math.PI*2),t.fill();t.fillStyle="#f4f8ff",t.fillRect(0,0,512,16),t.fillRect(0,240,512,16);const n=new wn(s);return n.colorSpace=Ue,n}class Cy{constructor(t){const e=t.scene;this.view=t,this.daySky=e.userData.sky,this.town=e.getObjectByName("town"),this.u={uSpace:{value:0},uTime:{value:0}};const n=new $t(160,48,24),i=new Ve({side:Je,transparent:!0,depthWrite:!1,uniforms:this.u,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform float uSpace; uniform float uTime; varying vec3 vD;
        float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
        void main() {
          vec3 d = normalize(vD);
          vec3 base = mix(vec3(0.01, 0.015, 0.05), vec3(0.03, 0.02, 0.1), d.y * 0.5 + 0.5);
          // Nebula band.
          // A faint Milky Way band, kept dim so the sky through the roof reads as deep space.
          float neb = exp(-pow((d.y - 0.42 + 0.2 * sin(d.x * 3.0)) * 3.5, 2.0));
          base += vec3(0.25, 0.08, 0.35) * neb * 0.16 + vec3(0.05, 0.15, 0.3) * neb * 0.14 * (0.5 + 0.5 * sin(d.x * 7.0 + d.z * 5.0));
          // Stars at three scales, twinkling.
          vec3 col = base;
          for (int i = 0; i < 3; i++) {
            float sc = 90.0 + float(i) * 110.0;
            vec3 g = floor(d * sc);
            float h = hash(g + float(i) * 17.0);
            if (h > 0.985) {
              vec3 f = fract(d * sc) - 0.5;
              float s = smoothstep(0.35, 0.0, length(f)) * (0.6 + 0.4 * sin(uTime * (2.0 + h * 5.0) + h * 40.0));
              col += vec3(0.9, 0.95, 1.0) * s * (1.4 - float(i) * 0.3);
            }
          }
          gl_FragColor = vec4(col, uSpace);
        }`});this.space=new $(n,i),this.space.renderOrder=-1,this.space.frustumCulled=!1,e.add(this.space),this.earth=new $(new $t(16,48,32),new ve({map:Ry(),roughness:.9,transparent:!0,opacity:0})),this.earth.position.set(-38,26,-95),this.earth.rotation.z=.3,e.add(this.earth);const r=new $(new $t(17,48,32),new Ve({transparent:!0,depthWrite:!1,blending:fn,uniforms:{uA:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vN = normalize(normalMatrix*normal); vec4 mv = modelViewMatrix*vec4(position,1.0); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform float uA; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0 - max(dot(vN, vV), 0.0), 3.0); gl_FragColor = vec4(vec3(0.3,0.6,1.0)*f*1.5*uA, f*uA); }"}));r.position.copy(this.earth.position),e.add(r),this.atm=r,this.moon=new $(new $t(4,24,16),new ve({color:"#cfcfd6",roughness:1,transparent:!0,opacity:0})),this.moon.position.set(45,40,-110),e.add(this.moon),this.sunGlare=new go(new yo({map:Bn(),color:new Pt(3,2.8,2.4),blending:fn,transparent:!0,depthWrite:!1,opacity:0})),this.sunGlare.scale.set(30,30,1),this.sunGlare.position.set(55,30,-120),e.add(this.sunGlare),this.clouds=e.children.filter(o=>o.isGroup&&o.children.length===4&&o.position.y>10),this.dusk=0,this.spaceK=0}spaceTarget(t){return t.chapter.id==="space"?Math.min(1,Math.max(0,(t.store.iris.value-.08)/.4)):0}duskTarget(t){return t.chapter.id!=="finale"?0:["celebrate","end"].includes(t.phase)?1:t.phase==="zip"?.6:.35}reset(t){this.spaceK=this.spaceTarget(t),this.dusk=this.duskTarget(t)}update(t,e,n){const i=n.stage;this.u.uTime.value=n.time,this.spaceK+=(this.spaceTarget(e)-this.spaceK)*Math.min(1,t*4);const r=this.spaceK;this.u.uSpace.value=r,this.space.visible=r>.002,this.earth.material.opacity=r,this.earth.rotation.y+=t*.02,this.atm.material.uniforms.uA.value=r,this.moon.material.opacity=r,this.sunGlare.material.opacity=r;const o=r<.3;this.town&&(this.town.visible=o);for(const h of this.clouds)h.visible=o;this.dusk+=(this.duskTarget(e)-this.dusk)*Math.min(1,t*.6),this.daySky&&(this.daySky.uniforms.uNight.value=this.dusk);const a=new Pt("#fff2dc"),c=new Pt("#ffb27a"),l=new Pt("#dfe8ff");if(i.sun.color.copy(a).lerp(c,this.dusk).lerp(l,r),i.sun.intensity=2.4*(1-.35*this.dusk)*(1-.5*r),i.hemi.color.set("#eaf4ff").lerp(new Pt("#ffc9a0"),this.dusk*.6).lerp(new Pt("#6f7fc0"),r),i.hemi.groundColor.set("#b8906a").lerp(new Pt("#2a2440"),r),i.hemi.intensity=.85*(1-.45*r)*(1-.25*this.dusk),e.chapter.id==="space"){const h=[-4.2,-1.5,3.4];for(let u=0;u<3;u++){const f=i.points[u];f.position.set(h[u],4.9,-1.2),f.color.set("#ffd9a0"),f.distance=9,f.intensity=3.2*r}}i.scene.background.set("#bfe3f7").lerp(new Pt("#0a0c1a"),r).lerp(new Pt("#e89a7a"),this.dusk*(1-r)*.5)}}const Be=Me.ring,Ln=18,ya=15,Eh=.004,er="#e8543f",Ah=(s,t)=>Math.sign(s)*Math.pow(Math.abs(s),t);function ri(s,t,e=new A,n=0){const i=2/Be.n;return e.set(Be.cx+(Be.a-n)*Ah(Math.cos(s),i),t,Be.cz+(Be.b-n)*Ah(Math.sin(s),i))}const Uu=(()=>{const t=new Float64Array(513),e=new Float64Array(513),n=ri(0,0),i=new A;for(let r=1;r<=512;r++){const o=r/512;e[r]=r===512?Math.PI/2:(o-Math.sin(2*Math.PI*o)/(2*Math.PI))*(Math.PI/2),ri(e[r],0,i),t[r]=t[r-1]+n.distanceTo(i),n.copy(i)}return{N:512,len:t,ang:e,total:t[512]}})();function ws(s){const{N:t,len:e,ang:n,total:i}=Uu,r=Math.min(1,Math.max(0,s))*i;let o=0,a=t;for(;a-o>1;){const l=o+a>>1;e[l]<r?o=l:a=l}const c=Math.min(1,(r-e[o])/Math.max(1e-12,e[a]-e[o]));return n[o]+(n[a]-n[o])*c}function Py(s){const t=(s%1+1)%1*4,e=Math.min(3,Math.floor(t)),n=t-e;return e===0?ws(n):e===1?Math.PI-ws(1-n):e===2?Math.PI+ws(n):2*Math.PI-ws(1-n)}function lr(s,t,e,n=new A){const i=s<0?Math.PI-ws(t):ws(t);return ri(i,e,n)}const Ks=new A,_a=new A;function Rh(s,t,e=new A){return lr(s,Math.max(0,t-.004),0,Ks),lr(s,Math.min(1,t+.004),0,_a),e.set(_a.z-Ks.z,0,-(_a.x-Ks.x)).normalize(),e.x*(Ks.x-Be.cx)+e.z*(Ks.z-Be.cz)<0&&e.negate(),e}function Ch(){const s=document.createElement("canvas");s.width=1024,s.height=512;const t=s.getContext("2d");t.fillStyle=er,t.fillRect(0,0,1024,512);for(let i=0;i<512;i+=6)for(let r=i/6%2?3:0;r<1024;r+=6)t.fillStyle="rgba(255,255,255,0.05)",t.fillRect(r,i,3,4);t.fillStyle="#c63f2e",t.fillRect(0,470,1024,42);for(let i=0;i<1024;i+=10)t.fillStyle="rgba(0,0,0,0.12)",t.fillRect(i,470,3,42);t.strokeStyle="rgba(120,20,10,0.55)",t.lineWidth=8,t.beginPath(),t.moveTo(290,455),t.lineTo(250,330),t.lineTo(774,330),t.lineTo(734,455),t.stroke(),t.setLineDash([12,10]),t.lineWidth=3,t.strokeStyle="rgba(255,230,200,0.6)",t.strokeRect(262,340,500,110),t.setLineDash([]),((i,r,o,a)=>{t.beginPath();for(let c=0;c<10;c++){const l=-Math.PI/2+c*Math.PI/5,h=c%2?a:o;t.lineTo(i+Math.cos(l)*h,r+Math.sin(l)*h)}t.closePath()})(512,170,120,52),t.fillStyle="#ffd23f",t.fill(),t.lineWidth=10,t.strokeStyle="#fff4c2",t.stroke();const n=new wn(s);return n.colorSpace=Ue,n.anisotropy=4,n}function Iy(){const s=document.createElement("canvas");s.width=32,s.height=64;const t=s.getContext("2d");t.fillStyle="#3a3a40",t.fillRect(0,0,32,64),t.fillStyle="#d9dee2";for(let n=0;n<64;n+=16)t.fillRect(4,n+2,24,8);const e=new wn(s);return e.wrapS=e.wrapT=mi,e}class zy{constructor(t){const e=t.scene;this.view=t,this.buildShutter(e),this.buildRing(e),this.buildRigging(e),this.buildCrane(e),this.buildHangingHoodie(e),this.buildWornHoodie(e),this.tmp=new A,this.curtainActive=!1,this.bounce=0}buildShutter(t){const e=ft.attic-.05,n=ft.x1-ft.x0+2*ft.wall;this.shutterTop=e;const i=$v();this.shutterTex=i;const r=new ve({map:i,roughness:.75,metalness:0,envMapIntensity:.4});this.shutter=new $(new bn(n,1),r),this.shutter.position.z=ft.front+.12,this.shutter.castShadow=!0,t.add(this.shutter),this.shutterBar=X(n,.1,.1,k.iron,{z:ft.front+.14}),t.add(this.shutterBar);const o=X(n+.2,.5,.5,G("#e8d7b8",{rough:.7}),{y:e+.25,z:ft.front+.2,r:.05});t.add(o),this.drumShutter=Ft(.18,.18,n,k.steel,{y:e+.2,z:ft.front+.15,rz:Math.PI/2}),t.add(this.drumShutter);const a=new ve({map:xl("store"),roughness:.5}),c=new $(new Ee(.62,.62,.08,40),[G("#fff4e0"),a,G("#fff4e0")]);c.rotation.x=Math.PI/2,c.position.set(0,e+.95,ft.front+.3),t.add(c),t.add(X(.1,.5,.1,k.iron,{y:e+.5,z:ft.front+.28})),this.storeSign=a}buildRing(t){const e=[];for(let c=0;c<128;c++)e.push(ri(c/128*Math.PI*2,0));const n=new Ts(e,!0);this.ring=new $(new Yi(n,160,.09,10,!0),k.brass),this.ring.castShadow=!0,t.add(this.ring),this.bulbCount=40,this.bulbs=new Ul(new $t(.09,10,8),new kn({color:"#ffffff",toneMapped:!1}),this.bulbCount),this.bulbs.frustumCulled=!1;for(let c=0;c<this.bulbCount;c++)this.bulbs.setColorAt(c,new Pt(.9,.85,.7));t.add(this.bulbs),this.bulbDummy=new Fe,this.bulbColor=new Pt,this.masts=[];for(const[c,l]of[[-5.9,-3.2],[5.9,-3.2],[-5.9,2.2],[5.9,2.2]]){t.add(Ft(.12,.12,.8,k.iron,{x:c,y:ft.roof+.4,z:l}));const h=Ft(.08,.08,1,k.steel,{x:c,z:l});t.add(h);const u=new $(new Xe(1,.08,.08),k.steel);t.add(u),this.masts.push({x:c,z:l,upper:h,arm:u})}const i=G("#ffffff",{map:Zv("#b3202c"),rough:.85,side:be});i.map.repeat.set(3,1);let r=0;const o=new A,a=new A;for(let c=0;c<64;c++)ri(c/64*(Math.PI/2),0,o),ri((c+1)/64*(Math.PI/2),0,a),r+=o.distanceTo(a);this.curtains=[-1,1].map(c=>{const l=r*1.06,h=Be.y-.08,u=new or(Ln,ya,l,h,{damping:.975,iterations:7,gravity:-9.8,bendX:0}),f=ar(u,i,{uvRepeat:[1,1]});t.add(f),u.colliders.push((x,m,g)=>this.collideCurtain(x,m,g));const d=new We(Ln,.07,6,G("#e9c35a",{rough:.4,metal:.6}));return t.add(d.mesh),{side:c,cl:u,width:l,mesh:f,hem:d,inited:!1,hemPts:[]}}),this.curtainOpen=1}collideCurtain(t,e,n){const i=Be.a-.1,r=Be.b-.28,o=Be.n;for(let a=0;a<n;a++){if(e[a])continue;const c=a*3;if(t[c+1]<.03&&(t[c+1]=.03),t[c+1]>10.4)continue;const l=t[c]-Be.cx,h=t[c+2]-Be.cz,u=Math.pow(Math.abs(l/i),o)+Math.pow(Math.abs(h/r),o);if(u<1){const d=1/Math.pow(Math.max(u,1e-6),1/o);t[c]=Be.cx+l*d,t[c+2]=Be.cz+h*d}const f=a%Ln*3;t[c]+=(t[f]-t[c])*Eh,t[c+2]+=(t[f+2]-t[c+2])*Eh}}buildRigging(t){const e=Me.pulley,n=Me.handle,i=new at;i.position.set(e.x,0,e.z-.35),i.add(X(.2,e.y+.2,.2,G("#3f4a52",{rough:.5,metal:.6}),{y:(e.y+.2)/2}));for(let h=1;h<e.y;h+=1.4)i.add(X(.5,.06,.06,k.iron,{y:h,z:.12,rz:.5}));i.add(X(.8,.12,.8,k.iron,{y:.06})),t.add(i),this.pulley=new $(Vv(e.r,.14),k.steel),this.pulley.position.set(e.x,e.y,e.z),this.pulley.castShadow=!0,t.add(this.pulley),this.spokes=new at;for(let h=0;h<3;h++)this.spokes.add(X(.06,e.r*1.7,.03,k.red,{rz:h*Math.PI/3}));this.spokes.position.set(e.x,e.y,e.z+.09),t.add(this.spokes),this.ratchet=new $(co(16,e.r*.7,.05),k.brass),this.ratchet.position.set(e.x,e.y,e.z-.12),t.add(this.ratchet),this.pawl=X(.28,.05,.05,k.iron,{x:e.x+.3,y:e.y+.3,z:e.z-.12}),t.add(this.pawl);const r=ri(Math.PI*.775,Be.y),o=new A(e.x,e.y,e.z),a=X(.07,.07,1,k.steel,{});a.position.copy(o).add(r).multiplyScalar(.5),a.scale.z=o.distanceTo(r),a.lookAt(r),t.add(a),this.driveBar=a;const c=G("#e3c48f",{map:vr(),rough:.9});c.map=vr().clone(),c.map.needsUpdate=!0,this.ropeTex=c.map,this.ropeL=new We(2,.035,8,c,{uvScale:3}),this.ropeR=new We(2,.035,8,c,{uvScale:3}),this.ropeTop=new We(12,.035,8,c,{uvScale:3}),t.add(this.ropeL.mesh,this.ropeR.mesh,this.ropeTop.mesh);const l=new at;l.add(Ft(.05,.05,.55,G("#d8433b",{rough:.5}),{rz:Math.PI/2})),l.add(qi(.07,G("#f3d36b",{rough:.4,metal:.4}),{x:.3})),l.add(qi(.07,G("#f3d36b",{rough:.4,metal:.4}),{x:-.3})),l.add(Ft(.02,.02,.15,k.iron,{y:.08})),t.add(l),this.handle=l,this.counter=X(.36,.6,.36,G("#4a4f55",{rough:.6,metal:.5}),{r:.04}),t.add(this.counter),this.ropeTravel=0,this.lastHandleY=n.top}buildCrane(t){const e=Me.crane,n=new at;n.position.set(e.x,e.baseY,e.z);const i=G("#f0b534",{rough:.5,metal:.3});for(const[h,u]of[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]])n.add(X(.1,e.mast,.1,i,{x:h,y:e.mast/2,z:u}));for(let h=.4;h<e.mast;h+=.7)n.add(X(.7,.05,.05,i,{y:h,z:.3,rz:h%1.4<.7?.7:-.7})),n.add(X(.05,.05,.7,i,{y:h,x:.3,rx:h%1.4<.7?.7:-.7}));n.add(X(1.2,.3,1.2,k.iron,{y:.15})),n.add(X(.9,.6,.9,G("#3f7f9a",{rough:.5}),{y:e.mast+.2})),t.add(n),this.jib=new at,this.jib.position.set(e.x,e.baseY+e.mast+.4,e.z);const r=new at;for(const h of[-.18,.18])r.add(X(.08,.08,e.jib,i,{x:h,z:e.jib/2}));r.add(X(.08,.08,e.jib,i,{y:.3,z:e.jib/2}));for(let h=.3;h<e.jib;h+=.6)r.add(X(.36,.3,.04,i,{z:h,y:.15,rx:.5}));r.add(Ft(.2,.2,.5,k.steel,{z:e.jib,rz:Math.PI/2})),this.jib.add(r),t.add(this.jib),this.cable=new We(2,.04,6,G("#2c2c30",{rough:.5,metal:.6})),t.add(this.cable.mesh);const o=new at,a=[];for(let h=0;h<=20;h++){const u=h/20-.5;a.push(new A(u*13.6,-Math.abs(u)*1.6-u*u*1.2,0))}const c=new $(new Yi(new Ts(a),60,.2,12),G("#c99356",{rough:.55}));c.castShadow=!0,o.add(c);const l=ae(new Pe(.55,.09,10,28,Math.PI*1.35),k.chrome,{y:1.05,rz:-Math.PI*.2});o.add(l),o.add(Ft(.08,.08,.6,k.chrome,{y:.3})),t.add(o),this.hanger=o,this.hangerSwing=0,this.hangerSwingV=0}buildHangingHoodie(t){const e=Ch(),n=new ve({map:e,roughness:.92,side:be});this.hangCloth=new or(14,10,11.6,7.4,{damping:.97,iterations:6}),this.hangMesh=ar(this.hangCloth,n),t.add(this.hangMesh),this.hangInit=!1;const i=G("#ffffff",{map:Qr(er),rough:.95});this.hangSleeves=[-1,1].map(()=>{const r=new Ci(7,5.2,{iterations:10,damping:.97}),o=new We(7,.72,14,i);return t.add(o.mesh),{r,t:o,pts:[],init:!1}}),this.hangHood=ae(new $t(2.2,24,14,0,Math.PI*2,0,Math.PI*.6),G("#ffffff",{map:Qr(er),rough:.95,side:be}),{}),this.hangHood.scale.set(1.15,.9,.55),t.add(this.hangHood)}buildWornHoodie(t){const e=new at;t.add(e),this.worn=e;const n=G("#ffffff",{map:Qr(er),rough:.95});n.map.repeat.set(8,8);const i=1.25,r=new $t(1,48,20,Math.PI/2+i/2,Math.PI*2-i,0,Math.PI/2);this.hood=new $(r,G("#ffffff",{map:Qr(er),rough:.95,side:be})),this.hood.scale.set(7.25,3.1,4),this.hood.position.set(0,ft.attic-.25,-.6),this.hood.castShadow=!0,e.add(this.hood);const o=h=>{const u=[],f=Math.PI/2+h*i/2;for(let d=0;d<=24;d++){const x=d/24*(Math.PI/2),m=-Math.cos(f)*Math.sin(x),g=Math.cos(x),p=Math.sin(f)*Math.sin(x);u.push(new A(m*7.25,ft.attic-.25+g*3.1,-.6+p*4))}return u},a=G("#f6ede2",{rough:.9});for(const h of[-1,1]){const u=o(h);e.add(new $(new Yi(new Ts(u),40,.22,10),a))}for(const h of[-1,1]){const u=X(.14,7.3,6.9,n,{x:h*6.5,y:3.9,z:-.5});e.add(u),e.add(X(.2,.4,7,G("#c63f2e",{rough:.9}),{x:h*6.52,y:.45,z:-.5}))}const c=Ch();this.fronts=[-1,1].map(h=>{const d=new or(10,12,6.5,7.2,{damping:.96,iterations:8}),x=new ve({map:c,roughness:.92,side:be}),m=ar(d,x),g=m.geometry.attributes.uv;for(let v=0;v<g.count;v++){const y=g.getX(v);g.setX(v,h<0?y*.5:.5+y*.5)}g.needsUpdate=!0,e.add(m);const p=new We(12,.07,4,new ve({map:Iy(),roughness:.4,metalness:.5}),{uvScale:3});return e.add(p.mesh),{side:h,cl:d,mesh:m,zip:p,cols:10,rows:12,zipPts:[],inited:!1}});const l=new at;l.add(X(.36,.42,.16,k.chrome,{r:.05})),this.pullTab=new at,this.pullTab.position.set(0,-.12,.1),this.pullTab.add(X(.2,.5,.05,k.chrome,{y:-.25,r:.03})),this.pullTab.add(qi(.07,G("#ffd23f",{rough:.4}),{y:-.52})),l.add(this.pullTab),e.add(l),this.slider=l,this.sleeves=[-1,1].map(h=>{const u=new Ci(7,5,{iterations:12,damping:.97}),f=new We(7,.65,16,n);e.add(f.mesh);const d=Ft(.58,.58,.45,G("#c63f2e",{rough:.9}),{});return e.add(d),{sx:h,r:u,t:f,cuff:d,pts:[],init:!1}}),this.strings=[-1,1].map(h=>{const u=new Ci(10,2.6,{iterations:12,damping:.96}),f=new We(10,.07,6,G("#fbf6ec",{rough:.9}));e.add(f.mesh);const d=Ft(.09,.07,.3,k.chrome,{});return e.add(d),{sx:h,r:u,t:f,aglet:d,pts:[],init:!1}}),e.visible=!1}reset(t){this.curtainActive=!1;for(const e of this.curtains)e.inited=!1;for(const e of this.fronts)e.inited=!1;for(const e of this.sleeves)e.init=!1;for(const e of this.strings)e.init=!1;for(const e of this.hangSleeves)e.init=!1;this.hangInit=!1,this.lastHandleY=Me.handle.top}onEvent(t,e,n){if(t.type==="rustle"){for(const i of this.curtains){const r=lr(i.side,.3+Math.random()*.6,3+Math.random()*5);i.cl.impulse(r.x,r.y,r.z,3.2,-i.side*1.5,1,5.5)}n.rig.kick(.3)}t.type==="fit"&&n.rig.kick(.5),t.type==="zipped"&&(this.bounce=1,n.rig.kick(.4))}update(t,e,n){const i=e.store,r=n.time,o=e.chapter.id==="finale",a=o?e.chapter:null,c=this.shutterTop,l=i.shutter.value,h=Math.max(.001,c*(1-l));this.shutter.scale.y=h,this.shutter.position.y=c-h/2,this.shutter.visible=l<.999,this.shutterTex.repeat.set(1,h/c),this.shutterTex.offset.y=0,this.shutterBar.position.y=c-h,this.shutterBar.visible=this.shutter.visible,this.drumShutter.rotation.x=l*24,this.storeSign.emissive=this.storeSign.emissive||new Pt,this.storeSign.emissive.set("#ffffff"),this.storeSign.emissiveIntensity=o?.3+.3*Math.sin(r*3):.05;const u=Be.low+(Be.y-Be.low)*i.ring.value;this.ring.position.y=u;for(const d of this.masts){const x=u,m=ft.roof+.7;d.upper.scale.y=Math.max(.05,x-m+.2),d.upper.position.y=(x+m)/2;const g=ri(Math.atan2((d.z-Be.cz)/Be.b,d.x/Be.a),x,new A),p=new A(d.x,x,d.z);d.arm.position.copy(p).add(g).multiplyScalar(.5),d.arm.scale.x=p.distanceTo(g),d.arm.rotation.y=-Math.atan2(g.z-p.z,g.x-p.x)}const f=o&&["zip","celebrate","end"].includes(e.phase)?1:o?.25:0;for(let d=0;d<this.bulbCount;d++){const x=this.bulbDummy;ri(Py(d/this.bulbCount),u-.18,x.position,-.12),x.updateMatrix(),this.bulbs.setMatrixAt(d,x.matrix);const m=.5+.5*Math.sin(r*6-d*.8),g=.55+f*(.4+2.2*m);this.bulbs.setColorAt(d,this.bulbColor.setRGB(g,g*.86,g*.55))}this.bulbs.instanceMatrix.needsUpdate=!0,this.bulbs.instanceColor.needsUpdate=!0,this.updateRigging(t,e,a),this.updateCurtains(t,e,u,a),this.updateCrane(t,e,n,a),this.updateWorn(t,e,n,a)}updateRigging(t,e,n){const i=Me.pulley,r=Me.handle,o=n?n.handle.y:r.top,a=this.lastHandleY-o;this.lastHandleY=o,this.ropeTravel+=a,this.pulley.rotation.z=this.ropeTravel/i.r,this.spokes.rotation.z=this.pulley.rotation.z,this.ratchet.rotation.z=-e.store.curtain.value*9,this.pawl.rotation.z=.2+Math.max(0,Math.sin(this.ratchet.rotation.z*8))*.15,this.ropeTex.offset.y=-this.ropeTravel*3;const c=i.x-i.r,l=i.x+i.r;this.handle.position.set(c,o-.08,r.z),this.ropeL.update([new A(c,i.y,r.z),new A(c,o,r.z)]);const h=3.2+(r.top-o);this.counter.position.set(l,h-.32,i.z),this.ropeR.update([new A(l,i.y,i.z),new A(l,h,i.z)]);const u=[];for(let f=0;f<12;f++){const d=Math.PI-f/11*Math.PI;u.push(new A(i.x+Math.cos(d)*(i.r+.02),i.y+Math.sin(d)*(i.r+.02),i.z))}this.ropeTop.update(u)}updateCurtains(t,e,n,i){const r=e.store.curtain.value,o=e.chapter.id==="finale"||!this.curtainActive;for(const a of this.curtains){const c=a.cl;c.setRestSize(a.width,Math.max(2,n-.25));const l=.1+.9*r,h=l*Uu.total/(Ln-1),u=.5*Math.sqrt(Math.max(0,c.dx*c.dx-h*h)),f=this.tmpN||(this.tmpN=new A);for(let d=0;d<Ln;d++){const x=d/(Ln-1)*l,m=lr(a.side,x,n-.05,this.tmp);Rh(a.side,x,f).multiplyScalar(d%2?u:-u),c.pin(d,m.x+f.x,m.y,m.z+f.z)}if(!a.inited){for(let d=0;d<ya;d++)for(let x=0;x<Ln;x++){const m=x/(Ln-1)*l,g=lr(a.side,m,n-.05-d*c.dy,this.tmp);Rh(a.side,m,f).multiplyScalar(x%2?u:-u),c.set(d*Ln+x,g.x+f.x,Math.max(.05,g.y),g.z+f.z)}a.inited=!0;for(let d=0;d<60;d++)c.step(1/60)}if(o){const{n:d,h:x}=this.view.substeps(8);for(let m=0;m<d;m++)c.step(x);a.mesh.userData.sync();for(let m=0;m<Ln;m++){const g=(ya-1)*Ln+m;a.hemPts[m]||(a.hemPts[m]=new A),a.hemPts[m].set(c.p[g*3],c.p[g*3+1]+.05,c.p[g*3+2])}a.hem.update(a.hemPts)}}this.curtainActive=!0}updateCrane(t,e,n,i){const r=e.store,o=Me.crane,a=-2.35+(.95+2.35)*r.crane.value;this.jib.rotation.x=-a;const l=new A(o.x,o.baseY+o.mast+.4,o.z).clone().add(new A(0,Math.sin(a)*o.jib,Math.cos(a)*o.jib)),h=1+3.2*(1-r.crane.value)+r.garmentDrop.value*7.6,u=-9.8/Math.max(1,h)*Math.sin(this.hangerSwing)-.9*this.hangerSwingV+Math.sin(n.time*.7)*.05;this.hangerSwingV+=u*t,this.hangerSwing+=this.hangerSwingV*t;const f=l.clone().add(new A(Math.sin(this.hangerSwing)*h,-Math.cos(this.hangerSwing)*h,0));this.cable.update([l,f]),this.hanger.position.copy(f).add(new A(0,-1.3,0)),this.hanger.rotation.z=this.hangerSwing*.6;const x=!r.garmentOn&&e.chapter.id==="finale";this.hangMesh.visible=x,this.hangHood.visible=x;for(const v of this.hangSleeves)v.t.mesh.visible=x;if(!x)return;const m=this.hangCloth;this.hanger.updateMatrixWorld();for(let v=0;v<14;v++){const y=v/13-.5,_=new A(y*11.4,-Math.abs(y)*1.45-y*y*1-.25,.1).applyMatrix4(this.hanger.matrixWorld);m.pin(v,_.x,_.y,_.z)}if(!this.hangInit){for(let v=0;v<10;v++)for(let y=0;y<14;y++){const _=y/13-.5,S=new A(_*11.4,-.3-v*.82,.1).applyMatrix4(this.hanger.matrixWorld);m.set(v*14+y,S.x,S.y,S.z)}this.hangInit=!0}m.wind.set(Math.sin(n.time*.8)*.8,0,Math.cos(n.time*.6)*1.2);const g=n.substeps(6);for(let v=0;v<g.n;v++)m.step(g.h);this.hangMesh.userData.sync();for(const[v,y]of this.hangSleeves.entries()){const _=v===0?-1:1,S=new A(_*6.35,-1.9,.35).applyMatrix4(this.hanger.matrixWorld);y.init||(y.r.lay([S.x,S.y,S.z],[S.x+_*.6,S.y-5,S.z]),y.init=!0),y.r.pin(0,S.x,S.y,S.z);for(let T=1;T<y.r.n;T++)_*y.r.p[T*3]<_*S.x+.1&&(y.r.p[T*3]=S.x+_*.1);y.r.step(Math.min(t,1/30)),y.t.update(y.r.points(y.pts),T=>1-T*.25)}const p=new A(0,-.5,-.35).applyMatrix4(this.hanger.matrixWorld);this.hangHood.position.copy(p),this.hangHood.rotation.set(-Math.PI*.62,0,0)}updateWorn(t,e,n,i){const r=e.store,o=r.garmentOn;if(this.worn.visible=o,!o)return;const a=n.time,c=r.zip,l=Me.zipper,h=l.y0+(l.y1-l.y0)*c,u=7.45,f=.25,d=ft.front+.42,x=.05+(1-c)*2.6;this.bounce=Math.max(0,this.bounce-t*1.4);const m=1+Math.sin((1-this.bounce)*Math.PI*3)*.04*this.bounce;this.worn.scale.set(m,1+(m-1)*.5,m);for(const v of this.fronts){const y=v.cl,{cols:_,rows:S}=v,T=v.side*6.5,E=v.side<0?_-1:0,C=v.side<0?0:_-1;for(let M=0;M<S;M++){const P=u-M/(S-1)*(u-f);y.pin(M*_+C,T,P,d-.05);let z;if(P<=h?z=v.side*.05:z=v.side*(.05+(x-.05)*Math.min(1,(P-h)/Math.max(.3,u-h))),P<=h||M===0)y.pin(M*_+E,z,P,d+.02);else{y.free(M*_+E);const N=(M*_+E)*3;y.p[N]+=(z-y.p[N])*.2}}for(let M=0;M<_;M++){const P=M/(_-1),z=v.side<0?-6.5+P*(6.5-x):x+P*(6.5-x);y.pin(M,z,u,d)}if(!v.inited){for(let M=0;M<S;M++)for(let P=0;P<_;P++){const z=P/(_-1),N=v.side<0?-6.5+z*6.45:.05+z*6.45;y.set(M*_+P,N,u-M/(S-1)*(u-f),d)}v.inited=!0}y.colliders.length=0,y.colliders.push((M,P,z)=>{for(let N=0;N<z;N++){if(P[N])continue;const U=N*3+2;M[U]<d-.1?M[U]=d-.1:M[U]>d+.45&&(M[U]=d+.45)}}),y.wind.set(0,0,e.phase==="celebrate"?Math.sin(a*3)*3:0);const b=n.substeps(6);for(let M=0;M<b.n;M++)y.step(b.h);v.mesh.userData.sync();for(let M=0;M<S;M++){const P=M*_+E;v.zipPts[M]||(v.zipPts[M]=new A),v.zipPts[M].set(y.p[P*3]+v.side*.04,y.p[P*3+1],y.p[P*3+2]+.04)}v.zip.update(v.zipPts)}this.slider.position.set(0,h+.1,d+.12),this.pullTab.rotation.x=Math.sin(a*3)*.1;const g=["celebrate","end"].includes(e.phase);for(const v of this.sleeves){const y=new A(v.sx*6.95,7,-.4);if(v.init||(v.r.lay([y.x,y.y,y.z],[y.x+v.sx*.4,y.y-5,y.z+.3]),v.init=!0),v.r.pin(0,y.x,y.y,y.z),v.r.gravity=-9.8,g){const T=Math.sin(a*2.2+v.sx)*.03;for(let E=1;E<v.r.n;E++)v.r.p[E*3+2]+=T*(E/v.r.n)}for(let T=0;T<v.r.n;T++)v.r.p[T*3]=v.sx*Math.min(7,Math.max(6.95,Math.abs(v.r.p[T*3])));v.r.step(Math.min(t,1/30)),v.t.update(v.r.points(v.pts),T=>1-T*.15);const _=v.pts[v.pts.length-1],S=v.pts[v.pts.length-2];v.cuff.position.copy(_),v.cuff.quaternion.setFromUnitVectors(new A(0,1,0),_.clone().sub(S).normalize())}const p=r.wear.value;for(const v of this.strings){const y=new A(v.sx*2.5,ft.attic-.35+p*.3,d+.35);v.init||(v.r.lay([y.x,y.y,y.z],[y.x,y.y-2.6,y.z]),v.init=!0),v.r.setLength(2.6-p*.6),v.r.pin(0,y.x,y.y,y.z);for(let S=0;S<v.r.n;S++)v.r.p[S*3+2]<d+.1&&(v.r.p[S*3+2]=d+.1);v.r.step(Math.min(t,1/30)),v.t.update(v.r.points(v.pts));const _=v.pts[v.pts.length-1];v.aglet.position.copy(_).add(new A(0,-.1,0))}this.hood.scale.set(7.25-p*.15,3.1-p*.05,4-p*.1)}}const no=[[1,.35,.3],[1,.82,.25],[.35,.8,1],[.55,1,.45],[1,.45,.85],[.8,.6,1]];class Ly{constructor(t){this.view=t;const e=t.scene;this.sparks=new Fn(1400,Bn(),{blending:fn,stretch:!0,renderOrder:25}),e.add(this.sparks.mesh),this.rockets=[];const n=500,i=new bn(.16,.1),r=new ve({side:be,roughness:.7});this.confetti=new Ul(i,r,n),this.confetti.instanceMatrix.setUsage(Xi),this.confetti.count=0,this.confetti.frustumCulled=!1,e.add(this.confetti),this.pieces=[],this.N=n,this.dummy=new Fe,this.col=new Pt,this.autoT=0,this.flash=0,this.flashColor=new Pt,this.flashPos=new A,this.cannons=[-1,1].map(o=>{const a=new at;a.position.set(o*7.3,0,3.35);const c=new $(new Ee(.16,.22,.8,16),new ve({color:"#e8543f",roughness:.4}));c.position.y=.45,c.rotation.z=o*.45,c.castShadow=!0,a.add(c);const l=new $(new Ee(.3,.34,.16,16),new ve({color:"#3a3f44",roughness:.6}));return l.position.y=.08,a.add(l),a.visible=!1,e.add(a),a})}reset(){this.sparks.clear(),this.rockets.length=0,this.pieces.length=0,this.confetti.count=0}launch(t,e,n=null){const i=n||no[Math.floor(Math.random()*no.length)],r=t<0?-5.8:5.8;this.rockets.push({x:r,y:9,z:-.5,vx:(t-r)/1.1,vy:(e-9)/1.1+5.4,t:0,c:i,target:e})}burst(t){const n=t.c;for(let i=0;i<90;i++){const r=Math.random()*2-1,o=Math.random()*Math.PI*2,a=Math.sqrt(1-r*r),c=5+Math.random()*1.5;this.sparks.add({x:t.x,y:t.y,z:t.z,vx:a*Math.cos(o)*c,vy:r*c,vz:a*Math.sin(o)*c*.6,size:.22,stretch:2.2,r:n[0]*2.2,g:n[1]*2.2,b:n[2]*2.2,a:1,life:0,max:1.3+Math.random()*.6,spark:!0})}this.flash=1,this.flashColor.setRGB(n[0],n[1],n[2]),this.flashPos.set(t.x,t.y,t.z+3),this.view.audioHint?.("boom")}fireConfetti(){for(const t of this.cannons){const e=Math.sign(t.position.x);for(let n=0;n<180;n++){this.pieces.length>=this.N&&this.pieces.shift();const i=no[n%no.length];this.pieces.push({x:t.position.x-e*.3,y:.9,z:t.position.z,vx:-e*(3+Math.random()*4),vy:9+Math.random()*6,vz:(Math.random()-.5)*3,rx:Math.random()*6,ry:Math.random()*6,wx:(Math.random()-.5)*12,wy:(Math.random()-.5)*12,ph:Math.random()*6,c:i,life:0})}}}onEvent(t,e){if(e.chapter.id==="finale"){if(t.type==="zipped"){this.fireConfetti();for(let n=0;n<3;n++)this.launch(-4+n*4,16+n)}t.type==="firework"&&this.launch(t.x,Math.min(22,Math.max(13,t.y)))}}update(t,e,n){const i=e.chapter.id==="finale",r=i&&["celebrate","end"].includes(e.phase);for(const l of this.cannons)l.visible=i&&["zip","celebrate","end"].includes(e.phase);r&&(this.autoT-=t,this.autoT<=0&&(this.autoT=.7+Math.random()*.8,this.launch(-8+Math.random()*16,14+Math.random()*6)));for(const l of this.rockets)l.t+=t,l.vy-=4.9*t,l.x+=l.vx*t,l.y+=l.vy*t,this.sparks.add({x:l.x,y:l.y,z:l.z,vx:-l.vx*.1,vy:-1,vz:0,size:.12,stretch:2,r:2,g:1.6,b:1,a:1,life:0,max:.35}),(l.vy<=.5||l.y>=l.target)&&(this.burst(l),l.done=!0);this.rockets=this.rockets.filter(l=>!l.done);for(const l of this.sparks.list){l.life+=t,l.spark&&(l.vx*=.975,l.vy=l.vy*.975-2.2*t,l.vz*=.975),l.x+=l.vx*t,l.y+=l.vy*t,l.z+=(l.vz||0)*t;const h=l.life/l.max;l.a=(1-h)*(l.spark?.75+.25*Math.sin(l.life*40+l.x):1)}this.sparks.list=this.sparks.list.filter(l=>l.life<l.max),this.sparks.write(n.camera);const o=n.stage.points[0];i&&(this.flash=Math.max(0,this.flash-t*2.5),o.position.copy(this.flashPos),o.color.copy(this.flashColor),o.distance=40,o.intensity=60*this.flash*this.flash);const a=this.dummy;let c=0;for(const l of this.pieces)l.life+=t,l.vx*=.985,l.vz*=.985,l.vy=Math.max(l.vy-9.8*t,-1.2+Math.sin(l.life*3+l.ph)*.4),l.x+=(l.vx+Math.sin(l.life*2+l.ph)*.6)*t,l.y+=l.vy*t,l.z+=l.vz*t,l.y<.02&&(l.y=.02,l.vx=l.vz=0,l.wx*=.9,l.wy*=.9),l.rx+=l.wx*t,l.ry+=l.wy*t,a.position.set(l.x,l.y,l.z),a.rotation.set(l.rx,l.ry,0),a.updateMatrix(),this.confetti.setMatrixAt(c,a.matrix),this.confetti.setColorAt(c,this.col.setRGB(l.c[0],l.c[1],l.c[2])),c++;this.confetti.count=c,this.confetti.instanceMatrix.needsUpdate=!0,this.confetti.instanceColor&&(this.confetti.instanceColor.needsUpdate=!0),!i&&this.pieces.length&&this.reset()}}function Nu(s,t=new Set){const e=new Set,n=new Map,i=(r,o)=>{if(!(!r||o>5||typeof r!="object"||t.has(r))&&!(n.has(r)&&n.get(r)<=o)&&(n.set(r,o),!r.isScene)){if(r.isObject3D){e.add(r);return}if(Array.isArray(r)){for(const a of r)i(a,o+1);return}if(!(ArrayBuffer.isView(r)||r.isMaterial||r.isBufferGeometry||r.isTexture||r.isVector3||r.isColor||r.isMatrix4||r.isQuaternion))for(const a of Object.values(r))i(a,o+1)}};for(const r of s)for(const o of Object.values(r))i(o,0);return e}function Fu(s){if(!s.isMesh||s.isInstancedMesh||s.isSkinnedMesh||Array.isArray(s.material))return!1;const t=s.material.type;if(t!=="MeshStandardMaterial"&&t!=="MeshPhysicalMaterial"&&t!=="MeshBasicMaterial"||s.material.transparent||!s.visible||s.frustumCulled===!1)return!1;const e=s.geometry;return!!(e&&e.attributes.position&&e.attributes.normal)}function Ou(s){let t=s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone();t.attributes.uv||t.setAttribute("uv",new He(new Float32Array(t.attributes.position.count*2),2));for(const e of Object.keys(t.attributes))["position","normal","uv"].includes(e)||t.deleteAttribute(e);return t.morphAttributes={},t.clearGroups(),s.updateWorldMatrix(!0,!1),t.applyMatrix4(s.matrixWorld),t}function Dy(s,t,e=Nu(t,new Set([s]))){const n=new Map,i=[],r=a=>{for(const c of[...a.children])if(!e.has(c))if(c.isMesh){if(c.children.length===0&&Fu(c)){const l=c.geometry.boundingSphere||(c.geometry.computeBoundingSphere(),c.geometry.boundingSphere),h=c.getWorldScale(new A),u=l.radius*Math.max(h.x,h.y,h.z)<.12,f=c.castShadow&&!u,d=`${c.material.uuid}|${f}|${c.receiveShadow}`;n.has(d)||n.set(d,{material:c.material,cast:f,receive:c.receiveShadow,geos:[]}),n.get(d).geos.push(Ou(c)),i.push(c)}}else(c.isGroup||c.type==="Object3D")&&r(c)};r(s);for(const a of i)a.parent.remove(a);let o=0;for(const a of n.values()){const c=Pu(a.geos,!1);if(!c)continue;c.computeBoundingSphere();const l=new $(c,a.material);l.castShadow=a.cast,l.receiveShadow=a.receive,l.name="merged",s.add(l),o++;for(const h of a.geos)h.dispose()}return{removed:i.length,merged:o}}function ku(s,t=new Set){const e=new Map,n=[];s.updateWorldMatrix(!0,!0);const i=new ye().copy(s.matrixWorld).invert(),r=o=>{for(const a of[...o.children])if(!t.has(a))if(a.isMesh){if(a.children.length===0&&Fu(a)){const c=`${a.material.uuid}|${a.castShadow}`;e.has(c)||e.set(c,{material:a.material,cast:a.castShadow,geos:[]});const l=Ou(a);l.applyMatrix4(i),e.get(c).geos.push(l),n.push(a)}}else(a.isGroup||a.type==="Object3D")&&r(a)};if(r(s),n.length<2)return 0;for(const o of n)o.parent.remove(o);for(const o of e.values()){const a=Pu(o.geos,!1);if(!a)continue;a.computeBoundingSphere();const c=new $(a,o.material);c.castShadow=o.cast,c.receiveShadow=!0,s.add(c);for(const l of o.geos)l.dispose()}return n.length}function Uy(s,t,e=[]){const n=Nu(t,new Set([s,...e])),i=Dy(s,t,n);let r=0;for(const o of n)!o.isMesh&&o.children.length>1&&(r+=ku(o,n));return i.inner=r,i}class Ny{constructor(t,e){this.canvas=t,this.game=e;const n=new URLSearchParams(location.search).get("quality")||"auto";this.stage=new Uv(t,{quality:n}),Bv(),this.scene=this.stage.scene,this.camera=this.stage.camera,this.rig=new Fv(this.camera),this.building=Jv(this.scene),this.girl=new ry(this.scene),this.parts=[],this.signals=this.addPart(new uy(this)),this.booths=this.addPart(new hy(this)),this.fireKit=this.addPart(new my(this)),this.fireFx=this.addPart(new vy(this)),this.spray=this.addPart(new My(this)),this.fishKit=this.addPart(new Ey(this)),this.water=this.addPart(new by(this)),this.spaceKit=this.addPart(new Ay(this)),this.sky=this.addPart(new Cy(this)),this.finaleKit=this.addPart(new zy(this)),this.party=this.addPart(new Ly(this));const i=this.scene.getObjectByName("town");i&&ku(i),this.mergeInfo=Uy(this.scene,[...this.parts,this.girl,this.sky],[this,this.game,this.stage,this.rig]),this.surprise=0,this.thrustK=0,this.time=0,this.ray=new Hp,this.ndc=new K,this.plane=new Ti(new A(0,0,1),0),this.hit=new A,this.v=new A,this.snapNext=!0}addPart(t){return this.parts.push(t),t}setGame(t){this.game=t,this.snapNext=!0;for(const e of this.parts)e.reset?.(t,this)}resync(){this.snapNext=!0;for(const t of this.parts)t.reset?.(this.game,this)}resize(t,e){this.stage.resize(t,e)}screenToWorld(t,e,n=0){const i=this.stage.width,r=this.stage.height;this.ndc.set(t/i*2-1,-(e/r)*2+1),this.ray.setFromCamera(this.ndc,this.camera),this.plane.constant=-n;const o=this.ray.ray.intersectPlane(this.plane,this.hit);return o?{x:o.x,y:o.y}:null}worldToScreen(t,e,n=0){return this.v.set(t,e,n).project(this.camera),{x:(this.v.x+1)/2*this.stage.width,y:(1-this.v.y)/2*this.stage.height}}touchFeedback(){}substeps(t=6){const e=this.frameDt||.016666666666666666,n=Math.max(1,Math.min(t,Math.ceil(e/(1/60)-.01)));return{n,h:Math.min(1/45,e/n)}}update(t,e=[]){const n=this.game;t>=0||(t=0);const i=Math.min(t,1/30);this.frameDt=Math.min(t,.5),this.time+=i,ql.uTime.value=this.time;for(const o of e){["ignite","zerog","iris","bite","pop","spout"].includes(o.type)&&(this.surprise=1.2);for(const a of this.parts)a.onEvent?.(o,n,this)}this.surprise=Math.max(0,this.surprise-i);const r=this.stage.width/this.stage.height;this.rig.update(n,i,r,this.snapNext),this.snapNext=!1,this.camera.updateMatrixWorld(),this.girl.update(i,n,this);for(const o of this.parts)o.update(i,n,this);this.stage.render()}}function Fy(s,t,e,{onFirstTouch:n}={}){let i=!0;const r=u=>{const f=s.getBoundingClientRect(),d=t();return e.screenToWorld(u.clientX-f.left,u.clientY-f.top,d.planeZ)},o=u=>{u.preventDefault(),i&&(i=!1,n?.());try{s.setPointerCapture(u.pointerId)}catch{}const f=r(u);f&&t().pointerDown(f.x,f.y,u.pointerId),e.touchFeedback(u.clientX,u.clientY)},a=u=>{const f=r(u);f&&t().pointerMove(f.x,f.y,u.pointerId)},c=u=>{const f=r(u);t().pointerUp(f?f.x:null,f?f.y:null,u.pointerId)},l=u=>t().pointerCancel(u.pointerId);s.addEventListener("pointerdown",o,{passive:!1}),s.addEventListener("pointermove",a,{passive:!0}),s.addEventListener("pointerup",c),s.addEventListener("pointercancel",l),s.addEventListener("lostpointercapture",l);const h=u=>u.preventDefault();document.addEventListener("gesturestart",h,{passive:!1}),document.addEventListener("gesturechange",h,{passive:!1}),document.addEventListener("dblclick",h,{passive:!1}),document.addEventListener("contextmenu",h),document.addEventListener("touchmove",u=>{(u.touches.length>1||u.target===s)&&u.preventDefault()},{passive:!1}),window.addEventListener("blur",()=>t().releaseAll())}class Oy{constructor(t){this.view=t,this.play=document.getElementById("play"),this.again=document.getElementById("again"),this.hand=document.getElementById("hand"),this.ring=document.getElementById("ring"),this.t=0,this.shownHint=null,this.onPlay=null,this.onAgain=null;const e=(n,i)=>{n.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),n.classList.contains("show")&&i?.()})};e(this.play,()=>this.onPlay?.()),e(this.again,()=>this.onAgain?.())}ripple(t,e){const n=document.createElement("div");n.className="ripple",n.style.setProperty("--p",`translate(${t}px, ${e}px)`),document.getElementById("hud").appendChild(n),setTimeout(()=>n.remove(),550)}update(t,e){this.t+=t;const n=e.where;this.play.style.top="62%",this.play.classList.toggle("show",n==="intro.title"&&e.chapter.phaseTime>.5),this.again.style.top="68%",this.again.classList.toggle("show",n==="finale.end"&&e.chapter.phaseTime>1.2);const i=e.hint,r=e.idle,o=i&&n!=="intro.title"&&!e.ptr.down,a=i&&r>(i.delay??2.5)&&!e.ptr.down&&n!=="intro.title";if(i&&(o||a)){const c=this.view.worldToScreen(i.x,i.y,i.z??0),l=this.t%1.6/1.6;let h=c.x,u=c.y,f=1;if(i.gesture==="tap")f=l<.3?1-l*.6:1,u+=l<.3?0:-8*Math.sin((l-.3)/.7*Math.PI);else if(i.gesture==="hold")f=.85+.04*Math.sin(this.t*10);else if(i.to){const x=this.view.worldToScreen(i.to.x,i.to.y,i.z??0),m=Math.min(1,l/.75),g=m*m*(3-2*m);h=c.x+(x.x-c.x)*g,u=c.y+(x.y-c.y)*g,f=.88}this.hand.style.transform=`translate(${h}px, ${u}px) scale(${f})`,this.hand.style.opacity=a?"0.95":"0";const d=1+.12*Math.sin(this.t*5);this.ring.style.transform=`translate(${c.x}px, ${c.y}px) scale(${d})`,this.ring.style.opacity=o?i.gesture==="hold"&&e.ptr.down?"0":"0.9":"0"}else this.hand.style.opacity="0",this.ring.style.opacity="0"}}function ky(s,t,e){const n={get game(){return s.game},view:t,checkpoints:wa.map(m=>({id:m.id,label:m.label})),state:()=>s.game.snapshot(),where:()=>s.game.where,hint:()=>s.game.hint,screenOf:(m,g,p=0)=>t.worldToScreen(m,g,p),worldOf:(m,g)=>t.screenToWorld(m,g,s.game.planeZ),jump(m){const g=new URL(location.href);g.searchParams.set("scene",m),location.href=g.toString()},jumpInPlace(m){Fh(s.game,m),s.game.drainEvents(),t.resync()},pause(){s.game.paused=!0},resume(){s.game.paused=!1},step(m=1){for(let g=0;g<m;g++)s.game.update(oi)},setTimeScale(m){s.game.timeScale=m},quality:()=>({dpr:t.stage.dpr,bloom:t.stage.useBloom}),stats(){const m=t.stage.renderer;m.info.autoReset=!1,m.info.reset(),t.stage.render();const g={calls:m.info.render.calls,triangles:m.info.render.triangles,geometries:m.info.memory.geometries,textures:m.info.memory.textures,programs:m.info.programs.length};m.info.autoReset=!0;let p=0;return t.scene.traverse(v=>{v.isMesh&&v.visible&&p++}),g.meshes=p,g}};window.__game=n;const i=Number(e.get("speed"));if(i>0&&(s.game.timeScale=i),e.has("paused")&&(s.game.paused=!0),!e.has("debug"))return n;const r=document.createElement("div");r.style.cssText="position:fixed;left:6px;top:6px;z-index:9;max-width:46vw;font:11px/1.35 ui-monospace,monospace;color:#fff;background:rgba(0,0,0,.6);padding:6px 8px;border-radius:6px;white-space:pre;pointer-events:auto;";const o=document.createElement("select");o.style.cssText="display:block;margin-bottom:4px;max-width:100%;font-size:12px";const a=e.get("scene");o.innerHTML='<option value="">— scene —</option>'+wa.map(m=>`<option value="${m.id}" ${m.id===a?"selected":""}>${m.id}  ${m.label}</option>`).join(""),o.onchange=()=>o.value&&n.jump(o.value);const c=document.createElement("div");for(const[m,g]of[["⏸",()=>s.game.paused=!s.game.paused],["+1",()=>n.step(1)],["×½",()=>s.game.timeScale=.5],["×1",()=>s.game.timeScale=1],["×3",()=>s.game.timeScale=3]]){const p=document.createElement("button");p.textContent=m,p.style.cssText="margin-right:3px;font-size:12px",p.onclick=g,c.appendChild(p)}const l=document.createElement("div");r.append(o,c,l),document.body.appendChild(r);let h=0,u=0,f=0,d=performance.now();const x=()=>{const m=performance.now();u+=m-d,d=m,h++,u>500&&(f=Math.round(h*1e3/u),h=0,u=0);const g=s.game.snapshot();l.textContent=`fps ${f}  dpr ${t.stage.dpr.toFixed(2)} bloom ${t.stage.useBloom}
`+JSON.stringify(g,null,1).slice(0,900),requestAnimationFrame(x)};return requestAnimationFrame(x),n}const So=new URLSearchParams(location.search),Bu=document.getElementById("c"),_n={game:new wf({seed:Number(So.get("seed"))||7})},xi=new Ny(Bu,_n.game),To=new Oy(xi);xi.touchFeedback=(s,t)=>To.ripple(s,t);let ci=null;async function By(){if(ci)return ci;const s=await Ku(()=>import("./audio-BGYTz96S.js"),[],import.meta.url);return ci=new s.AudioFX,ci}function Eo(){ci&&ci.ctx&&ci.ctx.state==="running"||By().then(s=>s.unlock())}Fy(Bu,()=>_n.game,xi,{onFirstTouch:Eo});for(const s of["pointerup","touchend","click"])document.addEventListener(s,Eo,{passive:!0});To.onPlay=()=>{Eo(),_n.game.pointerDown(0,2.6,"ui"),_n.game.pointerUp(0,2.6,"ui")};To.onAgain=()=>{Eo(),_n.game.restart(),xi.resync()};function $l(){const s=window.innerWidth,t=window.innerHeight;xi.resize(s,t)}window.addEventListener("resize",$l);window.visualViewport?.addEventListener("resize",$l);$l();const Ph=So.get("scene");Ph&&(Fh(_n.game,Ph),_n.game.drainEvents(),xi.resync());ky(_n,xi,So);let vl=performance.now(),ho=!0;document.addEventListener("visibilitychange",()=>{ho=!document.hidden,vl=performance.now(),ho||_n.game.releaseAll(),ci?.setSuspended(!ho)});const Ih=Math.max(1,Number(So.get("timewarp"))||1);function Hu(s){if(requestAnimationFrame(Hu),!ho)return;const t=(s-vl)/1e3,e=Number.isFinite(t)?Math.min(.1*Ih,Math.max(0,t)):0;vl=s,_n.game.advance(e,4*Ih);const n=_n.game.drainEvents();xi.update(e,n),To.update(e,_n.game),ci?.update(e,_n.game,n),xi.stage.adapt(e*1e3)}requestAnimationFrame(Hu);
