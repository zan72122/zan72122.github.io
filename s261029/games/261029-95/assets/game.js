(()=>{var $s="gf261029-95-animal-taxi";var pa={tauSec:.12,deadzoneDeg:3,gapSec:.25,staleMs:1e3,firstSampleTimeoutMs:1e3,maxMagnitude:30,minMagnitude:2,flatBelow:6,flatForMs:500,uprightAbove:6.5,uprightForMs:300,calibWindowMs:400,calibToleranceDeg:5,calibGiveUpMs:2e3,fastTurnOmegaDps:80,fastTurnOffsetDeg:8,fastTurnSustainMs:80,fastTurnCooldownMs:1200,neutralEasePerSec:3},Ks={ipad11:{fullLockDeg:24},ipad129:{fullLockDeg:20},phone:{fullLockDeg:24}},gi={maxSpeed:6,accel:3.6,brakeDecel:9,coastConst:1.6,coastLin:.3,restSpeed:.06,grassFactor:.6,flatFactor:.3,maxYawDps:35,yawFullSpeed:2,wheelRate:9,maxWheelDeg:28,RENDER_YAW_SIGN:-1},ma={maxSpeed:.3,dwellSec:.5,alongRange:7.5,brakeHintDist:26},ue={halfWidth:4,bayDepth:4,boundary:10,assistBand:.9,assistMax:.22},js={dragFullTurnPx:60,corridorPadX:110,corridorPadY:70,returnPerSec:4},Qs={tiltDeg:30,rampDps:60,reverseRampDps:130,returnDps:90},oe={boardSec:3.2,alightSec:2.6,thanksSec:3.4,washIntroSec:1,washShowerSec:1.6,washRinseSec:3,paradeSec:18,decoFitSec:2.2,fixedDt:1/60,maxFrameSec:.1},_i={maxDpr:1.5,minDpr:.75,shadowSize:1024};var Hn={castle:{id:"castle",color:"#FF7FB6",dark:"#D94F8E",shape:"turret"},dome:{id:"dome",color:"#4FA8F0",dark:"#2A76C2",shape:"dome"},bakery:{id:"bakery",color:"#FF9A3C",dark:"#D46A12",shape:"triangle"},water:{id:"water",color:"#FFD35A",dark:"#D9A21F",shape:"arch"}},Ve={rabbit:{id:"rabbit",dest:"castle",body:"#FFFFFF",accent:"#FFB8CF"},penguin:{id:"penguin",dest:"dome",body:"#2F3A56",accent:"#FFFFFF"},bear:{id:"bear",dest:"bakery",body:"#B97A4B",accent:"#F2D2B0"},duck:{id:"duck",dest:"water",body:"#FFE066",accent:"#FF9F2E"}},Qn=["rabbit","penguin","bear","duck"],xn={sunshine:"#FFD35A",coral:"#FF8E94",mint:"#83D9B0",lavender:"#B5A2EE",sky:"#7CCBF0",peach:"#FFB27A"},_a=Object.keys(xn),Gf=[{id:"trumpet",kind:"horn",slot:"hood"},{id:"bulb",kind:"horn",slot:"hood"},{id:"pennant",kind:"flag",slot:"back"},{id:"starflag",kind:"flag",slot:"back"},{id:"string",kind:"lights",slot:"roof"},{id:"globes",kind:"lights",slot:"roof"},{id:"pinwheel",kind:"flag",slot:"side"},{id:"heart",kind:"lights",slot:"side"}],Qh=["#FF8E94","#83D9B0","#B5A2EE","#7CCBF0","#FFD35A"],ga=[];for(let i=0;i<Qh.length;i++)for(let t of Gf)ga.push({id:`${t.id}-${i}`,design:t.id,kind:t.kind,slot:t.slot,color:Qh[i]});var yn=new Map(ga.map(i=>[i.id,i]));function Kl(i,t,e=3){let n=new Set(i),s=new Set(i.map(u=>yn.get(u)?.design)),r=ga.filter(u=>!n.has(u.id));r.length===0&&(r=ga.slice());let a=r.filter(u=>!s.has(u.design)),o=a.length>=e?a:r,l=[],c=new Set,h=o.slice();for(;l.length<e&&h.length;){let u=Math.floor(t()*h.length),d=h.splice(u,1)[0];c.has(d.design)&&h.some(f=>!c.has(f.design))||(c.add(d.design),l.push(d.id))}return l}var Wf=["SEEK_PASSENGER","BOARDING","DRIVE_TO_HOUSE","ALIGHT_AND_THANK","WASH_CHOICE","WASH_FINISH","PARADE","DECORATION_CHOICE","READY_FOR_NEXT_SET"];function tr(){return{v:1,seq:2,totals:{deliveries:0,washes:0,sets:0,collected:0,byAnimal:{rabbit:0,penguin:0,bear:0,duck:0}},set:{id:"s1",n:0,delivered:[]},phase:"SEEK_PASSENGER",pending:null,wash:null,reward:null,carColor:"sunshine",deco:{owned:[],equipped:{}},queue:{order:[],pos:0,last:null},settings:{volume:.8,muted:!1,profile:"auto"},doneDeliveries:[],grantedSets:[],checkpoint:null,firstRunDone:!1}}var vn=i=>i&&typeof i=="object"&&!Array.isArray(i),ns=i=>Array.isArray(i)&&i.every(t=>typeof t=="string");function Xf(i){let t=tr();if(!vn(i)||i.v!==1)return t;let e={...t};if(Number.isInteger(i.seq)&&i.seq>0&&(e.seq=i.seq),vn(i.totals)){for(let n of["deliveries","washes","sets","collected"])Number.isInteger(i.totals[n])&&i.totals[n]>=0&&(e.totals[n]=i.totals[n]);if(vn(i.totals.byAnimal))for(let n of Qn)Number.isInteger(i.totals.byAnimal[n])&&(e.totals.byAnimal[n]=i.totals.byAnimal[n])}if(vn(i.set)&&typeof i.set.id=="string"&&Number.isInteger(i.set.n)&&i.set.n>=0&&i.set.n<=3&&ns(i.set.delivered)&&(e.set={id:i.set.id,n:i.set.n,delivered:i.set.delivered.filter(n=>Qn.includes(n)).slice(0,3)}),Wf.includes(i.phase)&&(e.phase=i.phase),vn(i.pending)&&Qn.includes(i.pending.animal)&&typeof i.pending.deliveryId=="string"&&(e.pending={deliveryId:i.pending.deliveryId,animal:i.pending.animal,bayId:typeof i.pending.bayId=="string"?i.pending.bayId:null,boarded:!!i.pending.boarded}),vn(i.wash)&&typeof i.wash.deliveryId=="string"&&(e.wash={deliveryId:i.wash.deliveryId,color:xn[i.wash.color]?i.wash.color:null,bayId:typeof i.wash.bayId=="string"?i.wash.bayId:null}),vn(i.reward)&&typeof i.reward.setId=="string"&&ns(i.reward.offers)&&(e.reward={setId:i.reward.setId,offers:i.reward.offers.filter(n=>yn.has(n)),granted:yn.has(i.reward.granted)?i.reward.granted:null}),xn[i.carColor]&&(e.carColor=i.carColor),vn(i.deco)&&(ns(i.deco.owned)&&(e.deco.owned=i.deco.owned.filter(n=>yn.has(n))),vn(i.deco.equipped)))for(let[n,s]of Object.entries(i.deco.equipped))yn.get(s)?.slot===n&&(e.deco.equipped[n]=s);if(vn(i.queue)&&ns(i.queue.order)&&i.queue.order.every(n=>Qn.includes(n))&&Number.isInteger(i.queue.pos)&&(e.queue={order:i.queue.order.slice(0,4),pos:Math.max(0,i.queue.pos),last:Qn.includes(i.queue.last)?i.queue.last:null}),vn(i.settings)){let n=i.settings;e.settings={volume:typeof n.volume=="number"&&n.volume>=0&&n.volume<=1?n.volume:.8,muted:!!n.muted,profile:["auto","ipad11","ipad129","phone"].includes(n.profile)?n.profile:"auto"}}return ns(i.doneDeliveries)&&(e.doneDeliveries=i.doneDeliveries.slice(-30)),ns(i.grantedSets)&&(e.grantedSets=i.grantedSets.slice(-30)),vn(i.checkpoint)&&typeof i.checkpoint.roadId=="string"&&Number.isFinite(i.checkpoint.s)&&(e.checkpoint={roadId:i.checkpoint.roadId,s:i.checkpoint.s}),e.firstRunDone=!!i.firstRunDone,["WASH_CHOICE","WASH_FINISH"].includes(e.phase)&&!e.wash&&(e.phase=e.set.n>=3?"PARADE":"SEEK_PASSENGER"),e.phase==="ALIGHT_AND_THANK"&&(e.phase=e.wash?"WASH_CHOICE":"SEEK_PASSENGER"),e.phase==="BOARDING"&&(e.phase="SEEK_PASSENGER"),e.phase==="DRIVE_TO_HOUSE"&&!(e.pending&&e.pending.boarded)&&(e.phase="SEEK_PASSENGER"),e.phase==="DECORATION_CHOICE"&&!e.reward&&(e.phase="PARADE"),e.phase==="PARADE"&&e.grantedSets.includes(e.set.id)&&(e.phase="READY_FOR_NEXT_SET"),e.phase==="DECORATION_CHOICE"&&e.grantedSets.includes(e.set.id)&&(e.phase="READY_FOR_NEXT_SET"),e.phase==="PARADE"&&e.set.n<3&&(e.phase="SEEK_PASSENGER"),e}var xa=class{constructor(t,e=$s){this.key=e,this.memoryOnly=!1,this.errors=[],this.writes=0;try{if(this.storage=t(),!this.storage)throw new Error("no storage")}catch{this.storage=null,this.memoryOnly=!0,this.errors.push("access")}}load(){if(!this.storage)return tr();let t=null;try{t=this.storage.getItem(this.key)}catch{return this.memoryOnly=!0,this.errors.push("read"),tr()}if(t==null)return tr();try{return Xf(JSON.parse(t))}catch{return this.errors.push("parse"),tr()}}save(t){if(!this.storage)return!1;try{return this.storage.setItem(this.key,JSON.stringify(t)),this.writes++,!0}catch{return this.memoryOnly=!0,this.errors.push("write"),!1}}clear(){try{this.storage&&this.storage.removeItem(this.key)}catch{}}};var is=180/Math.PI;function ss(i){return((i+180)%360+360)%360-180}function Ue(i,t,e){return i<t?t:i>e?e:i}function er(i,t,e,n){return e<=0?t:t+(i-t)*Math.exp(-n/e)}function ti(i,t,e){return i<t?Math.min(t,i+e):Math.max(t,i-e)}function xi(i){return typeof i=="number"&&Number.isFinite(i)}function jl(i){return xi(i)?(Math.round(i/90)*90%360+360)%360:0}function eu(i,t,e){let n=Ue((Math.abs(i)-t)/(e-t),0,1);return Math.sign(i)*(.7*n+.3*n*n)}function nr(i){let t=i>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var ya=class{constructor(t=gi){this.cfg=t,this.x=0,this.z=0,this.heading=0,this.speed=0,this.wheel=0,this.yawRate=0,this.needFresh=!1,this.locked=!1,this.throttleOn=!1,this.odometer=0}place(t,e,n){this.x=t,this.z=e,this.heading=n,this.speed=0,this.wheel=0,this.yawRate=0}clearDrive(){this.needFresh=!0,this.throttleOn=!1}forward(){return{x:Math.sin(this.heading),z:Math.cos(this.heading)}}right(){return{x:-Math.cos(this.heading),z:Math.sin(this.heading)}}step(t,e){let n=this.cfg,s=!!e.throttle;s||(this.needFresh=!1);let r=!!e.brake||this.locked||!!e.stopNow,a=s&&!r&&!this.needFresh;this.throttleOn=a;let o=e.speedCap??n.maxSpeed,l=this.speed;if(r)l=Math.max(0,l-n.brakeDecel*t);else if(a&&l<o){let d=n.accel*(.35+.65*(1-l/o));l=Math.min(o,l+d*t)}else if(a)l=Math.max(o,l-(n.coastConst+3)*t);else{let d=n.coastConst+n.coastLin*l+(l>o?3:0);l=l-d*t,l<n.restSpeed&&(l=0)}l<n.restSpeed&&!a&&(l=0),this.speed=Math.max(0,l);let c=Ue((e.steer||0)+(e.assist||0),-1,1);this.wheel=ti(this.wheel,this.locked?0:c,n.wheelRate*t);let h=Ue(this.speed/n.yawFullSpeed,0,1);this.yawRate=n.RENDER_YAW_SIGN*this.wheel*(n.maxYawDps*Math.PI/180)*h,this.heading+=this.yawRate*t;let u=this.speed*t;this.x+=Math.sin(this.heading)*u,this.z+=Math.cos(this.heading)*u,this.odometer+=u}};var Lu=0,Oc=1,Du=2;var Ji=1,Nu=2,Ns=3,Li=0,nn=1,bn=2,Jn=0,Us=1,Bc=2,kc=3,zc=4,Uu=5;var $i=100,Ou=101,Bu=102,ku=103,zu=104,Hu=200,Vu=201,Gu=202,Wu=203,Hc=204,Vc=205,Xu=206,qu=207,Yu=208,Zu=209,Ju=210,$u=211,Ku=212,ju=213,Qu=214,Ya=0,Za=1,Ja=2,Es=3,$a=4,Ka=5,ja=6,Qa=7,Lo=0,td=1,ed=2,Un=0,Gc=1,Wc=2,Xc=3,qc=4,Yc=5,Zc=6,Jc=7;var $c=300,Di=301,Ki=302,Do=303,No=304,Zr=306,to=1e3,Wn=1001,eo=1002,We=1003,nd=1004;var Jr=1005;var qe=1006,Uo=1007;var Ni=1008;var an=1009,Kc=1010,jc=1011,Os=1012,Oo=1013,On=1014,En=1015,Bn=1016,Bo=1017,ko=1018,Bs=1020,Qc=35902,th=35899,eh=1021,nh=1022,wn=1023,Xn=1026,Ui=1027,zo=1028,Ho=1029,Oi=1030,Vo=1031;var Go=1033,$r=33776,Kr=33777,jr=33778,Qr=33779,Wo=35840,Xo=35841,qo=35842,Yo=35843,Zo=36196,Jo=37492,$o=37496,Ko=37488,jo=37489,ta=37490,Qo=37491,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,al=37814,ol=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,pl=36492,ml=36494,gl=36495,_l=36283,xl=36284,ea=36285,yl=36286;var mr=2300,no=2301,Xa=2302,Tc=2303,Ac=2400,Rc=2401,Cc=2402;var id=3200;var vl=0,sd=1,di="",Xe="srgb",gr="srgb-linear",_r="linear",xe="srgb";var qa=7680;var rd=519,ad=512,od=513,ld=514,Ml=515,cd=516,hd=517,Sl=518,ud=519,ih=35044;var sh="300 es",Dn=2e3,ws=2001;function qf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){let i=xr("canvas");return i.style.display="block",i}var nu={},Ts=null;function yr(...i){let t="THREE."+i.shift();Ts?Ts("log",t,...i):console.log(t,...i)}function fd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=fd(i);let t="THREE."+i.shift();if(Ts)Ts("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Vt(...i){i=fd(i);let t="THREE."+i.shift();if(Ts)Ts("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Xi(...i){let t=i.join(" ");t in nu||(nu[t]=!0,Gt(...i))}function pd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var md={[Ya]:Za,[Ja]:ja,[$a]:Qa,[Es]:Ka,[Za]:Ya,[ja]:Ja,[Qa]:$a,[Ka]:Es},qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ql=Math.PI/180,io=180/Math.PI;function oi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Zf(i,t){return(i%t+t)%t}function tc(i,t,e){return(1-e)*i+e*t}function Gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var hh=class hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;var ut=hh,cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(u!==_||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);p=Math.sin(p*S)/A,o=Math.sin(o*S)/A,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uh=class uh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ec.copy(this).projectOnVector(t),this.sub(ec)}reflect(t){return this.sub(ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;var C=uh,ec=new C,iu=new cn,dh=class dh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],S=s[1],A=s[4],v=s[7],b=s[2],E=s[5],I=s[8];return r[0]=a*_+o*S+l*b,r[3]=a*m+o*A+l*E,r[6]=a*p+o*v+l*I,r[1]=c*_+h*S+u*b,r[4]=c*m+h*A+u*E,r[7]=c*p+h*v+u*I,r[2]=d*_+f*S+g*b,r[5]=d*m+f*A+g*E,r[8]=d*p+f*v+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nc.makeScale(t,e)),this}rotate(t){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nc.makeRotation(-t)),this}translate(t,e){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dh.prototype.isMatrix3=!0;var Zt=dh,nc=new Zt,su=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ru=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jf(){let i={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===di?_r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gr]:{primaries:t,whitePoint:n,transfer:_r,toXYZ:su,fromXYZ:ru,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:su,fromXYZ:ru,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}var re=Jf();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,so=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=xr("canvas")),rs.width=t.width,rs.height=t.height;let s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$f=0,As=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ic(s[a].image)):r.push(ic(s[a]))}else r=ic(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ic(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?so.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var Kf=0,sc=new C,en=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=qe,a=Ni,o=wn,l=an,c=i.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=oi(),this.name="",this.source=new As(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sc).x}get height(){return this.source.getSize(sc).y}get depth(){return this.source.getSize(sc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case to:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case to:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=$c;en.DEFAULT_ANISOTROPY=1;var fh=class fh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,v=(f+1)/2,b=(p+1)/2,E=(h+d)/4,I=(u+_)/4,y=(g+m)/4;return A>v&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=I/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=I/r,s=y/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fh.prototype.isVector4=!0;var Ce=fh,ro=class extends qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new en(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new As(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends ro{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},vr=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ao=class extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Fo=class Fo{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/as.setFromMatrixColumn(t,0).length(),r=1/as.setFromMatrixColumn(t,1).length(),a=1/as.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jf,t,Qf)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),yi.crossVectors(n,on),yi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),yi.crossVectors(n,on)),yi.normalize(),va.crossVectors(on,yi),s[0]=yi.x,s[4]=va.x,s[8]=on.x,s[1]=yi.y,s[5]=va.y,s[9]=on.y,s[2]=yi.z,s[6]=va.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],A=n[7],v=n[11],b=n[15],E=s[0],I=s[4],y=s[8],w=s[12],R=s[1],L=s[5],U=s[9],k=s[13],F=s[2],B=s[6],q=s[10],Y=s[14],at=s[3],Z=s[7],tt=s[11],it=s[15];return r[0]=a*E+o*R+l*F+c*at,r[4]=a*I+o*L+l*B+c*Z,r[8]=a*y+o*U+l*q+c*tt,r[12]=a*w+o*k+l*Y+c*it,r[1]=h*E+u*R+d*F+f*at,r[5]=h*I+u*L+d*B+f*Z,r[9]=h*y+u*U+d*q+f*tt,r[13]=h*w+u*k+d*Y+f*it,r[2]=g*E+_*R+m*F+p*at,r[6]=g*I+_*L+m*B+p*Z,r[10]=g*y+_*U+m*q+p*tt,r[14]=g*w+_*k+m*Y+p*it,r[3]=S*E+A*R+v*F+b*at,r[7]=S*I+A*L+v*B+b*Z,r[11]=S*y+A*U+v*q+b*tt,r[15]=S*w+A*k+v*Y+b*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],S=l*f-c*d,A=o*f-c*u,v=o*d-l*u,b=a*f-c*h,E=a*d-l*h,I=a*u-o*h;return e*(_*S-m*A+p*v)-n*(g*S-m*b+p*E)+s*(g*A-_*b+p*I)-r*(g*v-_*E+m*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=e*o-n*a,A=e*l-s*a,v=e*c-r*a,b=n*l-s*o,E=n*c-r*o,I=s*c-r*l,y=h*_-u*g,w=h*m-d*g,R=h*p-f*g,L=u*m-d*_,U=u*p-f*_,k=d*p-f*m,F=S*k-A*U+v*L+b*R-E*w+I*y;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/F;return t[0]=(o*k-l*U+c*L)*B,t[1]=(s*U-n*k-r*L)*B,t[2]=(_*I-m*E+p*b)*B,t[3]=(d*E-u*I-f*b)*B,t[4]=(l*R-a*k-c*w)*B,t[5]=(e*k-s*R+r*w)*B,t[6]=(m*v-g*I-p*A)*B,t[7]=(h*I-d*v+f*A)*B,t[8]=(a*U-o*R+c*y)*B,t[9]=(n*R-e*U-r*y)*B,t[10]=(g*E-_*v+p*S)*B,t[11]=(u*v-h*E-f*S)*B,t[12]=(o*w-a*L-l*y)*B,t[13]=(e*L-n*w+s*y)*B,t[14]=(_*A-g*b-m*S)*B,t[15]=(h*b-u*A+d*S)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,S=l*c,A=l*h,v=l*u,b=n.x,E=n.y,I=n.z;return s[0]=(1-(_+p))*b,s[1]=(f+v)*b,s[2]=(g-A)*b,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(d+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+A)*I,s[9]=(m-S)*I,s[10]=(1-(d+_))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=as.set(s[0],s[1],s[2]).length(),o=as.set(s[4],s[5],s[6]).length(),l=as.set(s[8],s[9],s[10]).length();r<0&&(a=-a),In.copy(this);let c=1/a,h=1/o,u=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,e.setFromRotationMatrix(In),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Dn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Dn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ws)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Dn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Dn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ws)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Fo.prototype.isMatrix4=!0;var pe=Fo,as=new C,In=new pe,jf=new C(0,0,0),Qf=new C(1,1,1),yi=new C,va=new C,on=new C,au=new pe,ou=new cn,ci=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ou.setFromEuler(this),this.setFromQuaternion(ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Mr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tp=0,lu=new C,os=new cn,ei=new pe,Ma=new C,ir=new C,ep=new C,np=new cn,cu=new C(1,0,0),hu=new C(0,1,0),uu=new C(0,0,1),du={type:"added"},ip={type:"removed"},ls={type:"childadded",child:null},rc={type:"childremoved",child:null},ke=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new ci,n=new cn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Zt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(hu,t)}rotateZ(t){return this.rotateOnAxis(uu,t)}translateOnAxis(t,e){return lu.copy(t).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(hu,t)}translateZ(t){return this.translateOnAxis(uu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ma.copy(t):Ma.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ir,Ma,this.up):ei.lookAt(Ma,ir,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),os.setFromRotationMatrix(ei),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(du),ls.child=t,this.dispatchEvent(ls),ls.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ip),rc.child=t,this.dispatchEvent(rc),rc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(du),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ke.DEFAULT_UP=new C(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},sp={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function ac(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Zf(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ac(a,r,t+1/3),this.g=ac(a,r,t),this.b=ac(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=gd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return re.workingToColorSpace(Je.copy(this),t),Math.round(se(Je.r*255,0,255))*65536+Math.round(se(Je.g*255,0,255))*256+Math.round(se(Je.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Xe){re.workingToColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Sa);let n=tc(vi.h,Sa.h,e),s=tc(vi.s,Sa.s,e),r=tc(vi.l,Sa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new Kt;Kt.NAMES=gd;var Sr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},br=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pn=new C,ni=new C,oc=new C,ii=new C,cs=new C,hs=new C,fu=new C,lc=new C,cc=new C,hc=new C,uc=new Ce,dc=new Ce,fc=new Ce,ai=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),ni.subVectors(n,e),oc.subVectors(t,e);let a=Pn.dot(Pn),o=Pn.dot(ni),l=Pn.dot(oc),c=ni.dot(ni),h=ni.dot(oc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return uc.setScalar(0),dc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(t,e),dc.fromBufferAttribute(t,n),fc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(uc,r.x),a.addScaledVector(dc,r.y),a.addScaledVector(fc,r.z),a}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),ni.subVectors(t,e),Pn.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Pn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;cs.subVectors(s,n),hs.subVectors(r,n),lc.subVectors(t,n);let l=cs.dot(lc),c=hs.dot(lc);if(l<=0&&c<=0)return e.copy(n);cc.subVectors(t,s);let h=cs.dot(cc),u=hs.dot(cc);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(cs,a);hc.subVectors(t,r);let f=cs.dot(hc),g=hs.dot(hc);if(g>=0&&f<=g)return e.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(hs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return fu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(fu,o);let p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(cs,a).addScaledVector(hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ba.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(t.matrixWorld),this.union(ba)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),Ea.subVectors(this.max,sr),us.subVectors(t.a,sr),ds.subVectors(t.b,sr),fs.subVectors(t.c,sr),Mi.subVectors(ds,us),Si.subVectors(fs,ds),zi.subVectors(us,fs);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-zi.z,zi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,zi.z,0,-zi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-zi.y,zi.x,0];return!pc(e,us,ds,fs,Ea)||(e=[1,0,0,0,1,0,0,0,1],!pc(e,us,ds,fs,Ea))?!1:(wa.crossVectors(Mi,Si),e=[wa.x,wa.y,wa.z],pc(e,us,ds,fs,Ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},si=[new C,new C,new C,new C,new C,new C,new C,new C],Fn=new C,ba=new Yn,us=new C,ds=new C,fs=new C,Mi=new C,Si=new C,zi=new C,sr=new C,Ea=new C,wa=new C,Hi=new C;function pc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hi.fromArray(i,r);let o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Oe=new C,Ta=new ut,rp=0,sn=class extends qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ih,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ta.fromBufferAttribute(this,e),Ta.applyMatrix3(t),this.setXY(e,Ta.x,Ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Er=class extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wr=class extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},ap=new Yn,rr=new C,mc=new C,Ei=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ap.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);let e=rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(mc)),this.expandByPoint(rr.copy(t.center).sub(mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},op=0,Mn=new pe,gc=new ke,ps=new C,ln=new Yn,ar=new Yn,Ge=new C,Be=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qf(t)?wr:Er)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return gc.lookAt(t),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(ln.min,ar.min),ln.expandByPoint(Ge),Ge.addVectors(ln.max,ar.max),ln.expandByPoint(Ge)):(ln.expandByPoint(ar.min),ln.expandByPoint(ar.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ge.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(t,c),Ge.add(ps)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new C,l[y]=new C;let c=new C,h=new C,u=new C,d=new ut,f=new ut,g=new ut,_=new C,m=new C;function p(y,w,R){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[y].add(_),o[w].add(_),o[R].add(_),l[y].add(m),l[w].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let y=0,w=S.length;y<w;++y){let R=S[y],L=R.start,U=R.count;for(let k=L,F=L+U;k<F;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let A=new C,v=new C,b=new C,E=new C;function I(y){b.fromBufferAttribute(s,y),E.copy(b);let w=o[y];A.copy(w),A.sub(b.multiplyScalar(b.dot(w))).normalize(),v.crossVectors(E,w);let L=v.dot(l[y])<0?-1:1;a.setXYZW(y,A.x,A.y,A.z,L)}for(let y=0,w=S.length;y<w;++y){let R=S[y],L=R.start,U=R.count;for(let k=L,F=L+U;k<F;k+=3)I(t.getX(k+0)),I(t.getX(k+1)),I(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new sn(d,h,u)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},oo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ih,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},tn=new C,Tr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_c=new C,lp=new C,cp=new Zt,Ln=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=_c.subVectors(n,e).cross(lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(_c),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cp.getNormalMatrix(t),s=this.coplanarPoint(_c).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},hp=0,hi=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Us,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Vc,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qa,this.stencilZFail=qa,this.stencilZPass=qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Sn=class extends hi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ms,or=new C,gs=new C,_s=new C,xs=new ut,lr=new ut,_d=new pe,Aa=new C,cr=new C,Ra=new C,pu=new ut,xc=new ut,mu=new ut,Nn=class extends ke{constructor(t=new Sn){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new Be;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oo(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new Tr(n,3,0,!1)),ms.setAttribute("uv",new Tr(n,2,3,!1))}this.geometry=ms,this.material=t,this.center=new ut(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),_d.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-_s.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ca(Aa.set(-.5,-.5,0),_s,a,gs,s,r),Ca(cr.set(.5,-.5,0),_s,a,gs,s,r),Ca(Ra.set(.5,.5,0),_s,a,gs,s,r),pu.set(0,0),xc.set(1,0),mu.set(1,1);let o=t.ray.intersectTriangle(Aa,cr,Ra,!1,or);if(o===null&&(Ca(cr.set(-.5,.5,0),_s,a,gs,s,r),xc.set(0,1),o=t.ray.intersectTriangle(Aa,Ra,cr,!1,or),o===null))return;let l=t.ray.origin.distanceTo(or);l<t.near||l>t.far||e.push({distance:l,point:or.clone(),uv:ai.getInterpolation(or,Aa,cr,Ra,pu,xc,mu,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ca(i,t,e,n,s,r){xs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(lr.x=r*xs.x-s*xs.y,lr.y=s*xs.x+r*xs.y):lr.copy(xs),i.copy(t),i.x+=lr.x,i.y+=lr.y,i.applyMatrix4(_d)}var ri=new C,yc=new C,Ia=new C,Pa=new C,lo=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yc.copy(t).add(e).multiplyScalar(.5),Ia.copy(e).sub(t).normalize(),Pa.copy(this.origin).sub(yc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ia),o=Pa.dot(this.direction),l=-Pa.dot(Ia),c=Pa.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yc).addScaledVector(Ia,d),f}intersectSphere(t,e){if(t.radius<0)return null;ri.subVectors(t.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,g=e.x-a.x,_=e.y-a.y,m=e.z-a.z,p=n.x-a.x,S=n.y-a.y,A=n.z-a.z,v=Math.abs(l),b=Math.abs(c),E=Math.abs(h),I,y,w,R,L,U,k,F,B,q,Y,at;if(v>=b&&v>=E?(w=l,U=u,B=g,at=p,l>=0?(I=c,y=h,R=d,L=f,k=_,F=m,q=S,Y=A):(I=h,y=c,R=f,L=d,k=m,F=_,q=A,Y=S)):b>=E?(w=c,U=d,B=_,at=S,c>=0?(I=h,y=l,R=f,L=u,k=m,F=g,q=A,Y=p):(I=l,y=h,R=u,L=f,k=g,F=m,q=p,Y=A)):(w=h,U=f,B=m,at=A,h>=0?(I=l,y=c,R=u,L=d,k=g,F=_,q=p,Y=S):(I=c,y=l,R=d,L=u,k=_,F=g,q=S,Y=p)),w===0)return null;let Z=I/w,tt=y/w,it=1/w,Dt=R-Z*U,Rt=L-tt*U,fe=k-Z*B,ee=F-tt*B,ce=q-Z*at,K=Y-tt*at,et=ce*ee-K*fe,Mt=Dt*K-Rt*ce,Wt=fe*Rt-ee*Dt;if(s){if(et<0||Mt<0||Wt<0)return null}else if((et<0||Mt<0||Wt<0)&&(et>0||Mt>0||Wt>0))return null;let wt=et+Mt+Wt;if(wt===0)return null;let Xt=it*(et*U+Mt*B+Wt*at);return(wt>0?Xt<0:Xt>0)?null:this.at(Xt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hn=class extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gu=new pe,Vi=new lo,Fa=new Ei,_u=new C,La=new C,Da=new C,Na=new C,vc=new C,Ua=new C,xu=new C,Oa=new C,we=class extends ke{constructor(t=new Be,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(vc.fromBufferAttribute(u,t),a?Ua.addScaledVector(vc,h):Ua.addScaledVector(vc.sub(e),h))}e.add(Ua)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(Fa.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Fa,_u)===null||Vi.origin.distanceToSquared(_u)>(t.far-t.near)**2))&&(gu.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(gu),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,b=A;v<b;v+=3){let E=o.getX(v),I=o.getX(v+1),y=o.getX(v+2);s=Ba(this,p,t,n,c,h,u,E,I,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=o.getX(m),A=o.getX(m+1),v=o.getX(m+2);s=Ba(this,a,t,n,c,h,u,S,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,b=A;v<b;v+=3){let E=v,I=v+1,y=v+2;s=Ba(this,p,t,n,c,h,u,E,I,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let S=m,A=m+1,v=m+2;s=Ba(this,a,t,n,c,h,u,S,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function up(i,t,e,n,s,r,a,o){let l;if(t.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Li,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oa);return c<e.near||c>e.far?null:{distance:c,point:Oa.clone(),object:i}}function Ba(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,La),i.getVertexPosition(l,Da),i.getVertexPosition(c,Na);let h=up(i,t,e,n,La,Da,Na,xu);if(h){let u=new C;ai.getBarycoord(xu,La,Da,Na,u),s&&(h.uv=ai.getInterpolatedAttribute(s,o,l,c,u,new ut)),r&&(h.uv1=ai.getInterpolatedAttribute(r,o,l,c,u,new ut)),a&&(h.normal=ai.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};ai.getNormal(La,Da,Na,d.normal),h.face=d,h.barycoord=u}return h}var Ar=class extends en{constructor(t=null,e=1,n=1,s,r,a,o,l,c=We,h=We,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=class extends sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ys=new pe,yu=new pe,ka=[],vu=new Yn,dp=new pe,hr=new we,ur=new Ei,wi=class extends we{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),vu.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(vu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ys),ur.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),yu.multiplyMatrices(n,ys),hr.matrixWorld=yu,hr.raycast(t,ka);for(let a=0,o=ka.length;a<o;a++){let l=ka[a];l.instanceId=r,l.object=this,e.push(l)}ka.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ar(new Float32Array(s*this.count),s,this.count,zo,En));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new Ei,fp=new ut(.5,.5),za=new C,Cs=class{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],A=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-a,f-h,p-g,b-S).normalize(),s[1].setComponents(c+a,f+h,p+g,b+S).normalize(),s[2].setComponents(c+o,f+u,p+_,b+A).normalize(),s[3].setComponents(c-o,f-u,p-_,b-A).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,b-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,b-v).normalize(),e===Dn)s[5].setComponents(c+l,f+d,p+m,b+v).normalize();else if(e===ws)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=fp.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(za.x=s.normal.x>0?t.max.x:t.min.x,za.y=s.normal.y>0?t.max.y:t.min.y,za.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cr=class extends en{constructor(t=[],e=Di,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ir=class extends en{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ti=class extends en{constructor(t,e,n=On,s,r,a,o=We,l=We,c,h=Xn,u=1){if(h!==Xn&&h!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new As(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},co=class extends Ti{constructor(t,e=On,n=Di,s,r,a=We,o=We,l,c=Xn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Pr=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zn=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function g(_,m,p,S,A,v,b,E,I,y,w){let R=v/I,L=b/y,U=v/2,k=b/2,F=E/2,B=I+1,q=y+1,Y=0,at=0,Z=new C;for(let tt=0;tt<q;tt++){let it=tt*L-k;for(let Dt=0;Dt<B;Dt++){let Rt=Dt*R-U;Z[_]=Rt*S,Z[m]=it*A,Z[p]=F,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(Dt/I),u.push(1-tt/y),Y+=1}}for(let tt=0;tt<y;tt++)for(let it=0;it<I;it++){let Dt=d+it+B*tt,Rt=d+it+B*(tt+1),fe=d+(it+1)+B*(tt+1),ee=d+(it+1)+B*tt;l.push(Dt,Rt,ee),l.push(Rt,fe,ee),at+=6}o.addGroup(f,at,w),f+=at,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Fr=class i extends Be{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=n*2+r,_=s+1,m=new C,p=new C;for(let S=0;S<=g;S++){let A=0,v=0,b=0,E=0;if(S<=n){let w=S/n,R=w*Math.PI/2;v=-h-t*Math.cos(R),b=t*Math.sin(R),E=-t*Math.cos(R),A=w*u}else if(S<=n+r){let w=(S-n)/r;v=-h+w*e,b=t,E=0,A=u+w*d}else{let w=(S-n-r)/n,R=w*Math.PI/2;v=h+t*Math.sin(R),b=t*Math.cos(R),E=t*Math.sin(R),A=u+d+w*u}let I=Math.max(0,Math.min(1,A/f)),y=0;S===0?y=.5/s:S===g&&(y=-.5/s);for(let w=0;w<=s;w++){let R=w/s,L=R*Math.PI*2,U=Math.sin(L),k=Math.cos(L);p.x=-b*k,p.y=v,p.z=b*U,o.push(p.x,p.y,p.z),m.set(-b*k,E,b*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+y,I)}if(S>0){let w=(S-1)*_;for(let R=0;R<s;R++){let L=w+R,U=w+R+1,k=S*_+R,F=S*_+R+1;a.push(L,U,k),a.push(U,F,k)}}}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ai=class i extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new C,h=new ut;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ri=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;S(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function S(){let v=new C,b=new C,E=0,I=(e-t)/n;for(let y=0;y<=r;y++){let w=[],R=y/r,L=R*(e-t)+t;for(let U=0;U<=s;U++){let k=U/s,F=k*l+o,B=Math.sin(F),q=Math.cos(F);b.x=L*B,b.y=-R*n+m,b.z=L*q,u.push(b.x,b.y,b.z),v.set(B,I,q).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-R),w.push(g++)}_.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let R=_[w][y],L=_[w+1][y],U=_[w+1][y+1],k=_[w][y+1];(t>0||w!==0)&&(h.push(R,L,k),E+=3),(e>0||w!==r-1)&&(h.push(L,U,k),E+=3)}c.addGroup(p,E,0),p+=E}function A(v){let b=g,E=new ut,I=new C,y=0,w=v===!0?t:e,R=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),g++;let L=g;for(let U=0;U<=s;U++){let F=U/s*l+o,B=Math.cos(F),q=Math.sin(F);I.x=w*q,I.y=m*R,I.z=w*B,u.push(I.x,I.y,I.z),d.push(0,R,0),E.x=B*.5+.5,E.y=q*.5*R+.5,f.push(E.x,E.y),g++}for(let U=0;U<s;U++){let k=b+U,F=L+U;v===!0?h.push(F,F+1,k):h.push(F+1,F,k),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Lr=class i extends Ri{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ut:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new pe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Is=class extends un{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ho=class extends Is{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Mu=new C,Su=new C,Mc=new rh,Sc=new rh,bc=new rh,qi=class extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Su.subVectors(s[0],s[1]).add(s[0]),c=Su);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Mu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Mu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Mc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Sc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),bc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Mc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),bc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Mc.calc(l),Sc.calc(l),bc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function pp(i,t){let e=1-i;return e*e*t}function mp(i,t){return 2*(1-i)*i*t}function gp(i,t){return i*i*t}function fr(i,t,e,n){return pp(i,t)+mp(i,e)+gp(i,n)}function _p(i,t){let e=1-i;return e*e*e*t}function xp(i,t){let e=1-i;return 3*e*e*i*t}function yp(i,t){return 3*(1-i)*i*i*t}function vp(i,t){return i*i*i*t}function pr(i,t,e,n,s){return _p(i,t)+xp(i,e)+yp(i,n)+vp(i,s)}var Dr=class extends un{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pr(t,s.x,r.x,a.x,o.x),pr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},uo=class extends un{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pr(t,s.x,r.x,a.x,o.x),pr(t,s.y,r.y,a.y,o.y),pr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nr=class extends un{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fo=class extends un{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ur=class extends un{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fr(t,s.x,r.x,a.x),fr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends un{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(fr(t,s.x,r.x,a.x),fr(t,s.y,r.y,a.y),fr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(bu(o,l.x,c.x,h.x,u.x),bu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ut().fromArray(s))}return this}},Ic=Object.freeze({__proto__:null,ArcCurve:ho,CatmullRomCurve3:qi,CubicBezierCurve:Dr,CubicBezierCurve3:uo,EllipseCurve:Is,LineCurve:Nr,LineCurve3:fo,QuadraticBezierCurve:Ur,QuadraticBezierCurve3:po,SplineCurve:Or}),mo=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ic[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ic[s.type]().fromJSON(s))}return this}},Br=class extends mo{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Nr(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ur(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Dr(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Or(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Is(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ci=class extends Br{constructor(t){super(t),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Br().fromJSON(s))}return this}};function Mp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=xd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Tp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return kr(r,a,e,o,l,c,0),a}function xd(i,t,e,n,s){let r;if(s===Op(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Eu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Eu(a/n|0,i[a],i[a+1],r);return r&&Ps(r,r.next)&&(Hr(r),r=r.next),r}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ps(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Hr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function kr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Pp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?bp(i,n,s,r):Sp(i)){t.push(l.i,i.i,c.i),Hr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ep(Yi(i),t),kr(i,t,e,n,s,r,2)):a===2&&wp(i,t,e,n,s,r):kr(Yi(i),t,e,n,s,r,1);break}}}function Sp(i){let t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&dr(s,o,r,l,a,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Pe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),p=Pc(f,g,t,e,n),S=Pc(_,m,t,e,n),A=i.prevZ,v=i.nextZ;for(;A&&A.z>=p&&v&&v.z<=S;){if(A.x>=f&&A.x<=_&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&dr(o,h,l,u,c,d,A.x,A.y)&&Pe(A.prev,A,A.next)>=0||(A=A.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&dr(o,h,l,u,c,d,v.x,v.y)&&Pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=_&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&dr(o,h,l,u,c,d,A.x,A.y)&&Pe(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&dr(o,h,l,u,c,d,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ep(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ps(n,s)&&vd(n,e,e.next,s)&&zr(n,s)&&zr(s,n)&&(t.push(n.i,e.i,s.i),Hr(e),Hr(e.next),e=i=s),e=e.next}while(e!==i);return Yi(e)}function wp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dp(a,o)){let l=Md(a,o);a=Yi(a,a.next),l=Yi(l,l.next),kr(a,t,e,n,s,r,0),kr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Tp(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=xd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Lp(c))}s.sort(Ap);for(let r=0;r<s.length;r++)e=Rp(s[r],e);return e}function Ap(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Rp(i,t){let e=Cp(i,t);if(!e)return t;let n=Md(e,i);return Yi(n,n.next),Yi(e,e.next)}function Cp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ps(i,e))return e;do{if(Ps(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&yd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);zr(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Ip(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Ip(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function Pp(i,t,e,n){let s=i;do s.z===0&&(s.z=Pc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fp(s)}function Fp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Pc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Lp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function yd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function dr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&yd(i,t,e,n,s,r,a,o)}function Dp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Np(i,t)&&(zr(i,t)&&zr(t,i)&&Up(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||Ps(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ps(i,t){return i.x===t.x&&i.y===t.y}function vd(i,t,e,n){let s=Va(Pe(i,t,e)),r=Va(Pe(i,t,n)),a=Va(Pe(e,n,i)),o=Va(Pe(e,n,t));return!!(s!==r&&a!==o||s===0&&Ha(i,e,t)||r===0&&Ha(i,n,t)||a===0&&Ha(e,i,n)||o===0&&Ha(e,t,n))}function Ha(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Va(i){return i>0?1:i<0?-1:0}function Np(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function zr(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function Up(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Md(i,t){let e=Fc(i.i,i.x,i.y),n=Fc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Eu(i,t,e,n){let s=Fc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Op(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Lc=class{static triangulate(t,e,n=2){return Mp(t,e,n)}},Wi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];wu(t),Tu(n,t);let a=t.length;e.forEach(wu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Tu(n,e[l]);let o=Lc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function wu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Zi=class i extends Be{constructor(t=new Ci([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Bp,A,v=!1,b,E,I,y;if(p){A=p.getSpacedPoints(h),v=!0,d=!1;let nt=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,nt),E=new C,I=new C,y=new C}d||(m=0,f=0,g=0,_=0);let w=o.extractPoints(c),R=w.shape,L=w.holes;if(!Wi.isClockWise(R)){R=R.reverse();for(let nt=0,ot=L.length;nt<ot;nt++){let lt=L[nt];Wi.isClockWise(lt)&&(L[nt]=lt.reverse())}}function k(nt){let lt=10000000000000001e-36,ct=nt[0];for(let ft=1;ft<=nt.length;ft++){let zt=ft%nt.length,Bt=nt[zt],qt=Bt.x-ct.x,Jt=Bt.y-ct.y,P=qt*qt+Jt*Jt,me=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(ct.x),Math.abs(ct.y)),ne=lt*me*me;if(P<=ne){nt.splice(zt,1),ft--;continue}ct=Bt}}k(R),L.forEach(k);let F=L.length,B=R;for(let nt=0;nt<F;nt++){let ot=L[nt];R=R.concat(ot)}function q(nt,ot,lt){return ot||Vt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ot,lt)}let Y=R.length;function at(nt,ot,lt){let ct,ft,zt,Bt=nt.x-ot.x,qt=nt.y-ot.y,Jt=lt.x-nt.x,P=lt.y-nt.y,me=Bt*Bt+qt*qt,ne=Bt*P-qt*Jt;if(Math.abs(ne)>Number.EPSILON){let T=Math.sqrt(me),x=Math.sqrt(Jt*Jt+P*P),O=ot.x-qt/T,G=ot.y+Bt/T,J=lt.x-P/x,ht=lt.y+Jt/x,dt=((J-O)*P-(ht-G)*Jt)/(Bt*P-qt*Jt);ct=O+Bt*dt-nt.x,ft=G+qt*dt-nt.y;let $=ct*ct+ft*ft;if($<=2)return new ut(ct,ft);zt=Math.sqrt($/2)}else{let T=!1;Bt>Number.EPSILON?Jt>Number.EPSILON&&(T=!0):Bt<-Number.EPSILON?Jt<-Number.EPSILON&&(T=!0):Math.sign(qt)===Math.sign(P)&&(T=!0),T?(ct=-qt,ft=Bt,zt=Math.sqrt(me)):(ct=Bt,ft=qt,zt=Math.sqrt(me/2))}return new ut(ct/zt,ft/zt)}let Z=[];for(let nt=0,ot=B.length,lt=ot-1,ct=nt+1;nt<ot;nt++,lt++,ct++)lt===ot&&(lt=0),ct===ot&&(ct=0),Z[nt]=at(B[nt],B[lt],B[ct]);let tt=[],it,Dt=Z.concat();for(let nt=0,ot=F;nt<ot;nt++){let lt=L[nt];it=[];for(let ct=0,ft=lt.length,zt=ft-1,Bt=ct+1;ct<ft;ct++,zt++,Bt++)zt===ft&&(zt=0),Bt===ft&&(Bt=0),it[ct]=at(lt[ct],lt[zt],lt[Bt]);tt.push(it),Dt=Dt.concat(it)}let Rt;if(m===0)Rt=Wi.triangulateShape(B,L);else{let nt=[],ot=[];for(let lt=0;lt<m;lt++){let ct=lt/m,ft=f*Math.cos(ct*Math.PI/2),zt=g*Math.sin(ct*Math.PI/2)+_;for(let Bt=0,qt=B.length;Bt<qt;Bt++){let Jt=q(B[Bt],Z[Bt],zt);Mt(Jt.x,Jt.y,-ft),ct===0&&nt.push(Jt)}for(let Bt=0,qt=F;Bt<qt;Bt++){let Jt=L[Bt];it=tt[Bt];let P=[];for(let me=0,ne=Jt.length;me<ne;me++){let T=q(Jt[me],it[me],zt);Mt(T.x,T.y,-ft),ct===0&&P.push(T)}ct===0&&ot.push(P)}}Rt=Wi.triangulateShape(nt,ot)}let fe=Rt.length,ee=g+_;for(let nt=0;nt<Y;nt++){let ot=d?q(R[nt],Dt[nt],ee):R[nt];v?(I.copy(b.normals[0]).multiplyScalar(ot.x),E.copy(b.binormals[0]).multiplyScalar(ot.y),y.copy(A[0]).add(I).add(E),Mt(y.x,y.y,y.z)):Mt(ot.x,ot.y,0)}for(let nt=1;nt<=h;nt++)for(let ot=0;ot<Y;ot++){let lt=d?q(R[ot],Dt[ot],ee):R[ot];v?(I.copy(b.normals[nt]).multiplyScalar(lt.x),E.copy(b.binormals[nt]).multiplyScalar(lt.y),y.copy(A[nt]).add(I).add(E),Mt(y.x,y.y,y.z)):Mt(lt.x,lt.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){let ot=nt/m,lt=f*Math.cos(ot*Math.PI/2),ct=g*Math.sin(ot*Math.PI/2)+_;for(let ft=0,zt=B.length;ft<zt;ft++){let Bt=q(B[ft],Z[ft],ct);Mt(Bt.x,Bt.y,u+lt)}for(let ft=0,zt=L.length;ft<zt;ft++){let Bt=L[ft];it=tt[ft];for(let qt=0,Jt=Bt.length;qt<Jt;qt++){let P=q(Bt[qt],it[qt],ct);v?Mt(P.x,P.y+A[h-1].y,A[h-1].x+lt):Mt(P.x,P.y,u+lt)}}}ce(),K();function ce(){let nt=s.length/3;if(d){let ot=0,lt=Y*ot;for(let ct=0;ct<fe;ct++){let ft=Rt[ct];Wt(ft[2]+lt,ft[1]+lt,ft[0]+lt)}ot=h+m*2,lt=Y*ot;for(let ct=0;ct<fe;ct++){let ft=Rt[ct];Wt(ft[0]+lt,ft[1]+lt,ft[2]+lt)}}else{for(let ot=0;ot<fe;ot++){let lt=Rt[ot];Wt(lt[2],lt[1],lt[0])}for(let ot=0;ot<fe;ot++){let lt=Rt[ot];Wt(lt[0]+Y*h,lt[1]+Y*h,lt[2]+Y*h)}}n.addGroup(nt,s.length/3-nt,0)}function K(){let nt=s.length/3,ot=0;et(B,ot),ot+=B.length;for(let lt=0,ct=L.length;lt<ct;lt++){let ft=L[lt];et(ft,ot),ot+=ft.length}n.addGroup(nt,s.length/3-nt,1)}function et(nt,ot){let lt=nt.length;for(;--lt>=0;){let ct=lt,ft=lt-1;ft<0&&(ft=nt.length-1);for(let zt=0,Bt=h+m*2;zt<Bt;zt++){let qt=Y*zt,Jt=Y*(zt+1),P=ot+ct+qt,me=ot+ft+qt,ne=ot+ft+Jt,T=ot+ct+Jt;wt(P,me,ne,T)}}}function Mt(nt,ot,lt){l.push(nt),l.push(ot),l.push(lt)}function Wt(nt,ot,lt){Xt(nt),Xt(ot),Xt(lt);let ct=s.length/3,ft=S.generateTopUV(n,s,ct-3,ct-2,ct-1);ye(ft[0]),ye(ft[1]),ye(ft[2])}function wt(nt,ot,lt,ct){Xt(nt),Xt(ot),Xt(ct),Xt(ot),Xt(lt),Xt(ct);let ft=s.length/3,zt=S.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);ye(zt[0]),ye(zt[1]),ye(zt[3]),ye(zt[1]),ye(zt[2]),ye(zt[3])}function Xt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function ye(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return kp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ic[s.type]().fromJSON(s)),new i(n,t.options)}},Bp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,a),new ut(o,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ut(a,1-l),new ut(c,1-u),new ut(d,1-g),new ut(_,1-p)]:[new ut(o,1-l),new ut(h,1-u),new ut(f,1-g),new ut(m,1-p)]}};function kp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var dn=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*d-a;for(let A=0;A<c;A++){let v=A*u-r;g.push(v,-S,0),_.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let A=S+c*p,v=S+c*(p+1),b=S+1+c*(p+1),E=S+1+c*p;f.push(A,v,E),f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Fs=class i extends Be{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new C,g=new ut;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let S=p+m,A=S,v=S+n+1,b=S+n+2,E=S+1;o.push(A,v,E),o.push(v,b,E)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ls=class i extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let S=[],A=p/n,v=a+A*o,b=t*Math.cos(v),E=Math.sqrt(t*t-b*b),I=0;p===0&&a===0?I=.5/e:p===n&&l===Math.PI&&(I=-.5/e);for(let y=0;y<=e;y++){let w=y/e,R=s+w*r;u.x=-E*Math.cos(R),u.y=b,u.z=E*Math.sin(R),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+I,1-A),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let A=h[p][S+1],v=h[p][S],b=h[p+1][S],E=h[p+1][S+1];(p!==0||a>0)&&f.push(A,v,E),(p!==n-1||l<Math.PI)&&f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vr=class i extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new C,f=new C,g=new C;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(S),f.y=(t+e*Math.cos(m))*Math.sin(S),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),d.x=t*Math.cos(S),d.y=t*Math.sin(S),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let p=(s+1)*_+m-1,S=(s+1)*(_-1)+m-1,A=(s+1)*(_-1)+m,v=(s+1)*_+m;l.push(p,S,v),l.push(S,A,v)}this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Au(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Au(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=ji(i[e]);for(let s in n)t[s]=n[s]}return t}function Au(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ah(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var Sd={clone:ji,merge:Ke},Hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},go=class extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ui=class extends hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Lo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_o=class extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xo=class extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ec(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ii=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yo=class extends Ii{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ac,endingEnd:Ac}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rc:r=t,o=2*e-n;break;case Cc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rc:a=t,l=2*n-e;break;case Cc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,A=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+S*a[c+b]+A*a[l+b]+v*a[u+b];return r}},vo=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Mo=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},So=class extends Ii{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let d=o*2,f=t-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],p=f*d+g*2,S=u[p],A=u[p+1],v=t*d+g*2,b=h[v],E=h[v+1],I=Wp(n,e,S,b,s);r[g]=bd(I,_,A,E,m)}return r}};function bd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Gp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Wp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=bd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Gp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vs(e,this.TimeBufferType),this.values=vs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vs(t.times,Array),values:vs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ec(t.settings)&&(n.settings={inTangents:vs(t.settings.inTangents,Array),outTangents:vs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new So(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case mr:e=this.InterpolantFactoryMethodDiscrete;break;case no:e=this.InterpolantFactoryMethodLinear;break;case Xa:e=this.InterpolantFactoryMethodSmooth;break;case Tc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return Xa;case this.InterpolantFactoryMethodBezier:return Tc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ec(this.settings)&&(Ru(this.settings.inTangents,t),Ru(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Vt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Yf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ec(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ru(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=no;var Pi=class extends pn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=mr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};bo.prototype.ValueTypeName="color";var Eo=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};Eo.prototype.ValueTypeName="number";var wo=class extends Ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Gr=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new wo(this.times,this.values,this.getValueSize(),t)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends pn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=mr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};To.prototype.ValueTypeName="vector";var Ao=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ed=new Ao,Ro=class{constructor(t){this.manager=t!==void 0?t:Ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Xr=class extends Wr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},wc=new pe,Cu=new C,Iu=new C,Co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cu),Iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Iu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(wc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ws||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ga=new C,Wa=new cn,Vn=new C,qr=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ga,Wa,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Wa,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ga,Wa,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Wa,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bi=new C,Pu=new ut,Fu=new ut,$e=class extends qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ql*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return io*2*Math.atan(Math.tan(Ql*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,Pu,Fu),e.subVectors(Fu,Pu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ql*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ds=class extends qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Dc=class extends Co{constructor(){super(new Ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends Wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Dc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ms=-90,Ss=1,Io=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(Ms,Ss,t,e);s.layers=this.layers,this.add(s);let r=new $e(Ms,Ss,t,e);r.layers=this.layers,this.add(r);let a=new $e(Ms,Ss,t,e);a.layers=this.layers,this.add(a);let o=new $e(Ms,Ss,t,e);o.layers=this.layers,this.add(o);let l=new $e(Ms,Ss,t,e);l.layers=this.layers,this.add(l);let c=new $e(Ms,Ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Po=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var oh="\\[\\]\\.:\\/",Xp=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",qp="[^"+oh.replace("\\.","")+"]",Yp=/((?:WC+[\/:])*)/.source.replace("WC",lh),Zp=/(WCOD+)?/.source.replace("WCOD",qp),Jp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),$p=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),Kp=new RegExp("^"+Yp+Zp+Jp+$p+"$"),jp=["material","materials","bones","map"],Nc=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xp,"")}static parseTrackName(t){let e=Kp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Nc;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var my=new Float32Array(1);var ph=class ph{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ph.prototype.isMatrix2=!0;var Uc=ph;function ch(i,t,e,n){let s=Qp(n);switch(e){case eh:return i*t;case zo:return i*t/s.components*s.byteLength;case Ho:return i*t/s.components*s.byteLength;case Oi:return i*t*2/s.components*s.byteLength;case Vo:return i*t*2/s.components*s.byteLength;case nh:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case Go:return i*t*4/s.components*s.byteLength;case $r:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:case Yo:return Math.max(i,16)*Math.max(t,8)/4;case Wo:case qo:return Math.max(i,8)*Math.max(t,8)/2;case Zo:case Jo:case Ko:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $o:case ta:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pl:case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _l:case xl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qp(i){switch(i){case an:case Kc:return{byteLength:1,components:1};case Os:case jc:case Bn:return{byteLength:2,components:1};case Bo:case ko:return{byteLength:2,components:4};case On:case Oo:case En:return{byteLength:4,components:1};case Qc:case th:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function em(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,im=`#ifdef USE_ALPHAHASH
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
#endif`,sm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
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
#endif`,cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mm=`#ifdef USE_IRIDESCENCE
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
#endif`,gm=`#ifdef USE_BUMPMAP
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Am=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gm=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Zm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Jm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,t0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e0=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,M0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w0=`#ifdef USE_NORMALMAP
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
#endif`,T0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,H0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,V0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ig=`uniform sampler2D t2D;
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`#include <common>
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
}`,cg=`#if DEPTH_PACKING == 3200
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
}`,hg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`uniform float scale;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,_g=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,vg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Eg=`#define PHONG
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
}`,wg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Tg=`#define STANDARD
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
}`,Ag=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Rg=`#define TOON
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
}`,Cg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Ig=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Lg=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Dg=`uniform float rotation;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:nm,alphahash_pars_fragment:im,alphamap_fragment:sm,alphamap_pars_fragment:rm,alphatest_fragment:am,alphatest_pars_fragment:om,aomap_fragment:lm,aomap_pars_fragment:cm,batching_pars_vertex:hm,batching_vertex:um,begin_vertex:dm,beginnormal_vertex:fm,bsdfs:pm,iridescence_fragment:mm,bumpmap_pars_fragment:gm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:ym,clipping_planes_vertex:vm,color_fragment:Mm,color_pars_fragment:Sm,color_pars_vertex:bm,color_vertex:Em,common:wm,cube_uv_reflection_fragment:Tm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Im,emissivemap_pars_fragment:Pm,colorspace_fragment:Fm,colorspace_pars_fragment:Lm,envmap_fragment:Dm,envmap_common_pars_fragment:Nm,envmap_pars_fragment:Um,envmap_pars_vertex:Om,envmap_physical_pars_fragment:Zm,envmap_vertex:Bm,fog_vertex:km,fog_pars_vertex:zm,fog_fragment:Hm,fog_pars_fragment:Vm,gradientmap_pars_fragment:Gm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Jm,lights_toon_pars_fragment:$m,lights_phong_fragment:Km,lights_phong_pars_fragment:jm,lights_physical_fragment:Qm,lights_physical_pars_fragment:t0,lights_fragment_begin:e0,lights_fragment_maps:n0,lights_fragment_end:i0,lightprobes_pars_fragment:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:o0,logdepthbuf_vertex:l0,map_fragment:c0,map_pars_fragment:h0,map_particle_fragment:u0,map_particle_pars_fragment:d0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:p0,morphinstance_vertex:m0,morphcolor_vertex:g0,morphnormal_vertex:_0,morphtarget_pars_vertex:x0,morphtarget_vertex:y0,normal_fragment_begin:v0,normal_fragment_maps:M0,normal_pars_fragment:S0,normal_pars_vertex:b0,normal_vertex:E0,normalmap_pars_fragment:w0,clearcoat_normal_fragment_begin:T0,clearcoat_normal_fragment_maps:A0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:C0,opaque_fragment:I0,packing:P0,premultiplied_alpha_fragment:F0,project_vertex:L0,dithering_fragment:D0,dithering_pars_fragment:N0,roughnessmap_fragment:U0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:B0,shadowmap_pars_vertex:k0,shadowmap_vertex:z0,shadowmask_pars_fragment:H0,skinbase_vertex:V0,skinning_pars_vertex:G0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:q0,specularmap_pars_fragment:Y0,tonemapping_fragment:Z0,tonemapping_pars_fragment:J0,transmission_fragment:$0,transmission_pars_fragment:K0,uv_pars_fragment:j0,uv_pars_vertex:Q0,uv_vertex:tg,worldpos_vertex:eg,background_vert:ng,background_frag:ig,backgroundCube_vert:sg,backgroundCube_frag:rg,cube_vert:ag,cube_frag:og,depth_vert:lg,depth_frag:cg,distance_vert:hg,distance_frag:ug,equirect_vert:dg,equirect_frag:fg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:gg,meshbasic_frag:_g,meshlambert_vert:xg,meshlambert_frag:yg,meshmatcap_vert:vg,meshmatcap_frag:Mg,meshnormal_vert:Sg,meshnormal_frag:bg,meshphong_vert:Eg,meshphong_frag:wg,meshphysical_vert:Tg,meshphysical_frag:Ag,meshtoon_vert:Rg,meshtoon_frag:Cg,points_vert:Ig,points_frag:Pg,shadow_vert:Fg,shadow_frag:Lg,sprite_vert:Dg,sprite_frag:Ng},yt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Kn={basic:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ke([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ke([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ke([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ke([yt.points,yt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ke([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ke([yt.common,yt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ke([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ke([yt.sprite,yt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Ke([yt.common,yt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Ke([yt.lights,yt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Kn.physical={uniforms:Ke([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var bl={r:0,b:0,g:0},Ug=new pe,Yd=new Zt;Yd.set(-1,0,0,0,1,0,0,0,1);function Og(i,t,e,n,s,r){let a=new Kt(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let v=S.backgroundBlurriness>0;A=t.get(A,v)}return A}function g(S){let A=!1,v=f(S);v===null?m(a,o):v&&v.isColor&&(m(v,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===Zr)?(c===void 0&&(c=new we(new Zn(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:ji(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yd),c.material.toneMapped=re.getTransfer(v.colorSpace)!==xe,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new we(new dn(2,2),new fn({name:"BackgroundMaterial",uniforms:ji(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=re.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(bl,ah(i)),e.buffers.color.setClear(bl.r,bl.g,bl.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:_,dispose:p}}function Bg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(L,U,k,F,B){let q=!1,Y=u(L,F,k,U);r!==Y&&(r=Y,c(r.object)),q=f(L,F,k,B),q&&g(L,F,k,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(L,U,k,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,U,k,F){let B=F.wireframe===!0,q=n[U.id];q===void 0&&(q={},n[U.id]=q);let Y=L.isInstancedMesh===!0?L.id:0,at=q[Y];at===void 0&&(at={},q[Y]=at);let Z=at[k.id];Z===void 0&&(Z={},at[k.id]=Z);let tt=Z[B];return tt===void 0&&(tt=d(l()),Z[B]=tt),tt}function d(L){let U=[],k=[],F=[];for(let B=0;B<e;B++)U[B]=0,k[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:F,object:L,attributes:{},index:null}}function f(L,U,k,F){let B=r.attributes,q=U.attributes,Y=0,at=k.getAttributes();for(let Z in at)if(at[Z].location>=0){let it=B[Z],Dt=q[Z];if(Dt===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(Dt=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(Dt=L.instanceColor)),it===void 0||it.attribute!==Dt||Dt&&it.data!==Dt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==F}function g(L,U,k,F){let B={},q=U.attributes,Y=0,at=k.getAttributes();for(let Z in at)if(at[Z].location>=0){let it=q[Z];it===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));let Dt={};Dt.attribute=it,it&&it.data&&(Dt.data=it.data),B[Z]=Dt,Y++}r.attributes=B,r.attributesNum=Y,r.index=F}function _(){let L=r.newAttributes;for(let U=0,k=L.length;U<k;U++)L[U]=0}function m(L){p(L,0)}function p(L,U){let k=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;k[L]=1,F[L]===0&&(i.enableVertexAttribArray(L),F[L]=1),B[L]!==U&&(i.vertexAttribDivisor(L,U),B[L]=U)}function S(){let L=r.newAttributes,U=r.enabledAttributes;for(let k=0,F=U.length;k<F;k++)U[k]!==L[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function A(L,U,k,F,B,q,Y){Y===!0?i.vertexAttribIPointer(L,U,k,B,q):i.vertexAttribPointer(L,U,k,F,B,q)}function v(L,U,k,F){_();let B=F.attributes,q=k.getAttributes(),Y=U.defaultAttributeValues;for(let at in q){let Z=q[at];if(Z.location>=0){let tt=B[at];if(tt===void 0&&(at==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),at==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),tt!==void 0){let it=tt.normalized,Dt=tt.itemSize,Rt=t.get(tt);if(Rt===void 0)continue;let fe=Rt.buffer,ee=Rt.type,ce=Rt.bytesPerElement,K=ee===i.INT||ee===i.UNSIGNED_INT||tt.gpuType===Oo;if(tt.isInterleavedBufferAttribute){let et=tt.data,Mt=et.stride,Wt=tt.offset;if(et.isInstancedInterleavedBuffer){for(let wt=0;wt<Z.locationSize;wt++)p(Z.location+wt,et.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let wt=0;wt<Z.locationSize;wt++)m(Z.location+wt);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let wt=0;wt<Z.locationSize;wt++)A(Z.location+wt,Dt/Z.locationSize,ee,it,Mt*ce,(Wt+Dt/Z.locationSize*wt)*ce,K)}else{if(tt.isInstancedBufferAttribute){for(let et=0;et<Z.locationSize;et++)p(Z.location+et,tt.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let et=0;et<Z.locationSize;et++)m(Z.location+et);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let et=0;et<Z.locationSize;et++)A(Z.location+et,Dt/Z.locationSize,ee,it,Dt*ce,Dt/Z.locationSize*et*ce,K)}}else if(Y!==void 0){let it=Y[at];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(Z.location,it);break;case 3:i.vertexAttrib3fv(Z.location,it);break;case 4:i.vertexAttrib4fv(Z.location,it);break;default:i.vertexAttrib1fv(Z.location,it)}}}}S()}function b(){w();for(let L in n){let U=n[L];for(let k in U){let F=U[k];for(let B in F){let q=F[B];for(let Y in q)h(q[Y].object),delete q[Y];delete F[B]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let k in U){let F=U[k];for(let B in F){let q=F[B];for(let Y in q)h(q[Y].object),delete q[Y];delete F[B]}}delete n[L.id]}function I(L){for(let U in n){let k=n[U];for(let F in k){let B=k[F];if(B[L.id]===void 0)continue;let q=B[L.id];for(let Y in q)h(q[Y].object),delete q[Y];delete B[L.id]}}}function y(L){for(let U in n){let k=n[U],F=L.isInstancedMesh===!0?L.id:0,B=k[F];if(B!==void 0){for(let q in B){let Y=B[q];for(let at in Y)h(Y[at].object),delete Y[at];delete B[q]}delete k[F],Object.keys(k).length===0&&delete n[U]}}}function w(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function kg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function zg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==wn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let y=I===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==an&&I!==En&&!y&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:v,maxSamples:b,samples:E}}function Hg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ln,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,A=S*4,v=p.clippingState||null;l.value=v,v=h(g,d,A,f);for(let b=0;b!==A;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,v=f;A!==_;++A,v+=4)a.copy(u[A]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var zs=4,Vg=6,Gg=20,Wg=256,na=new Ds,wd=new Kt,mh=null,gh=0,_h=0,xh=!1,Xg=new C,Qi=new C,wl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Xg}=r;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,_h),this._renderer.xr.enabled=xh,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:Bn,format:wn,colorSpace:gr,depthBuffer:!1},s=Td(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Td(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qg(r)),this._blurMaterial=Zg(r,t,e),this._ggxMaterial=Yg(r,t,e)}return s}_compileMaterial(t){let e=new we(new Be,t);this._renderer.compile(e,na)}_sceneToCubeUV(t,e,n,s,r){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(wd),u.toneMapping=Un,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new Zn,new hn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(wd),p=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let b=this._cubeSize;ks(s,v*b,A>2?b:0,b,b),u.setRenderTarget(s),p&&u.render(_,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Di||t.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,na)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-zs?n-g+zs:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,ks(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,na),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ks(t,m,p,3*_,2*_),s.setRenderTarget(t),s.render(o,na)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-zs?s-this._lodMax+zs:0),d=4*(this._cubeSize-h);ks(e,u,d,3*h,2*h),a.setRenderTarget(e),a.render(l,na)}};function qg(i){let t=[],e=[],n=i,s=i-zs+1+Vg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),_=new Float32Array(f*d*u);for(let p=0;p<u;p++){let S=p%3*2/3-1,A=p>2?0:-1,v=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];g.set(v,f*d*p);for(let b=0;b<d;b++){let E=h[b*2]*2-1,I=h[b*2+1]*2-1;p===0?Qi.set(1,I,E):p===1?Qi.set(-E,1,-I):p===2?Qi.set(-E,I,1):p===3?Qi.set(-1,I,-E):p===4?Qi.set(-E,-1,I):Qi.set(E,I,-1),Qi.toArray(_,(p*d+b)*f)}}let m=new Be;m.setAttribute("position",new sn(g,f)),m.setAttribute("outputDirection",new sn(_,f)),e.push(new we(m,null)),n>zs&&n--}return{lodMeshes:e,sizeLods:t}}function Td(i,t,e){let n=new rn(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yg(i,t,e){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Zg(i,t,e){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:Gg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ad(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Rd(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Rl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tl=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zn(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Jn});r.uniforms.tEquirect.value=e;let a=new we(s,r),o=e.minFilter;return e.minFilter===Ni&&(e.minFilter=qe),new Io(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Jg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Do||f===No)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new Tl(g.height);return _.fromEquirectangularTexture(i,d),t.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Do||f===No,_=f===Di||f===Ki;if(g||_){let m=e.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new wl(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let S=d.image;return g&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new wl(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Do?d.mapping=Di:f===No&&(d.mapping=Ki),d}function l(d){let f=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function $g(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function Kg(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(g===void 0)return;if(f!==null){let S=f.array;_=f.version;for(let A=0,v=S.length;A<v;A+=3){let b=S[A+0],E=S[A+1],I=S[A+2];d.push(b,E,E,I,I,b)}}else{let S=g.array;_=g.version;for(let A=0,v=S.length/3-1;A<v;A+=3){let b=A+0,E=A+1,I=A+2;d.push(b,E,E,I,I,b)}}let m=new(g.count>=65535?wr:Er)(d,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function jg(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Qg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function t_(i,t,e){let n=new WeakMap,s=new Ce;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let w=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let v=o.attributes.position.count*A,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*b*4*u),I=new vr(E,v,b,u);I.type=En,I.needsUpdate=!0;let y=A*4;for(let R=0;R<u;R++){let L=m[R],U=p[R],k=S[R],F=v*b*4*R;for(let B=0;B<L.count;B++){let q=B*y;f===!0&&(s.fromBufferAttribute(L,B),E[F+q+0]=s.x,E[F+q+1]=s.y,E[F+q+2]=s.z,E[F+q+3]=0),g===!0&&(s.fromBufferAttribute(U,B),E[F+q+4]=s.x,E[F+q+5]=s.y,E[F+q+6]=s.z,E[F+q+7]=0),_===!0&&(s.fromBufferAttribute(k,B),E[F+q+8]=s.x,E[F+q+9]=s.y,E[F+q+10]=s.z,E[F+q+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new ut(v,b)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function e_(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var n_={[Gc]:"LINEAR_TONE_MAPPING",[Wc]:"REINHARD_TONE_MAPPING",[Xc]:"CINEON_TONE_MAPPING",[qc]:"ACES_FILMIC_TONE_MAPPING",[Zc]:"AGX_TONE_MAPPING",[Jc]:"NEUTRAL_TONE_MAPPING",[Yc]:"CUSTOM_TONE_MAPPING"};function i_(i,t,e,n,s,r){let a=new rn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Be;c.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new le([0,2,0,0,2,0],2));let h=new go({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new we(c,h),d=new Ds(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,S=[],A=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let E=0;E<S.length;E++){let I=S[E];I.setSize&&I.setSize(v,b)}},this.setEffects=function(v){S=v,A=S.length>0&&S[0].isRenderPass===!0;let b=a.width,E=a.height;S.length>0&&o===null&&(o=new rn(b,E,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(b,E,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<S.length;I++){let y=S[I];y.setSize&&y.setSize(b,E)}},this.begin=function(v,b){if(_||v.toneMapping===Un&&S.length===0)return!1;if(p=b,b!==null){let E=b.width,I=b.height;(a.width!==E||a.height!==I)&&this.setSize(E,I)}return A===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Un,!0},this.hasRenderPass=function(){return A},this.end=function(v,b){v.toneMapping=m,_=!0;let E=a,I=o;for(let y=0;y<S.length;y++){let w=S[y];w.enabled!==!1&&(w.render(v,I,E,b),w.needsSwap!==!1&&(E=I,I=I===o?l:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},re.getTransfer(f)===xe&&(h.defines.SRGB_TRANSFER="");let y=n_[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(p),v.render(u,d),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Zd=new en,Mh=new Ti(1,1),Jd=new vr,$d=new ao,Kd=new Cr,Cd=[],Id=[],Pd=new Float32Array(16),Fd=new Float32Array(9),Ld=new Float32Array(4);function Vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Cd[s];if(r===void 0&&(r=new Float32Array(s),Cd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cl(i,t){let e=Id[t];e===void 0&&(e=new Int32Array(t),Id[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function s_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function l_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;Ld.set(n),i.uniformMatrix2fv(this.addr,!1,Ld),He(e,n)}}function c_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;Fd.set(n),i.uniformMatrix3fv(this.addr,!1,Fd),He(e,n)}}function h_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ze(e,n))return;Pd.set(n),i.uniformMatrix4fv(this.addr,!1,Pd),He(e,n)}}function u_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function f_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function p_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function m_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function g_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function __(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function x_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function y_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mh.compareFunction=e.isReversedDepthBuffer()?Sl:Ml,r=Mh):r=Zd,e.setTexture2D(t||r,s)}function v_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$d,s)}function M_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Kd,s)}function S_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jd,s)}function b_(i){switch(i){case 5126:return s_;case 35664:return r_;case 35665:return a_;case 35666:return o_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}function E_(i,t){i.uniform1fv(this.addr,t)}function w_(i,t){let e=Vs(t,this.size,2);i.uniform2fv(this.addr,e)}function T_(i,t){let e=Vs(t,this.size,3);i.uniform3fv(this.addr,e)}function A_(i,t){let e=Vs(t,this.size,4);i.uniform4fv(this.addr,e)}function R_(i,t){let e=Vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function C_(i,t){let e=Vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function I_(i,t){let e=Vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function P_(i,t){i.uniform1iv(this.addr,t)}function F_(i,t){i.uniform2iv(this.addr,t)}function L_(i,t){i.uniform3iv(this.addr,t)}function D_(i,t){i.uniform4iv(this.addr,t)}function N_(i,t){i.uniform1uiv(this.addr,t)}function U_(i,t){i.uniform2uiv(this.addr,t)}function O_(i,t){i.uniform3uiv(this.addr,t)}function B_(i,t){i.uniform4uiv(this.addr,t)}function k_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Mh:a=Zd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function z_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$d,r[a])}function H_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Kd,r[a])}function V_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Jd,r[a])}function G_(i){switch(i){case 5126:return E_;case 35664:return w_;case 35665:return T_;case 35666:return A_;case 35674:return R_;case 35675:return C_;case 35676:return I_;case 5124:case 35670:return P_;case 35667:case 35671:return F_;case 35668:case 35672:return L_;case 35669:case 35673:return D_;case 5125:return N_;case 36294:return U_;case 36295:return O_;case 36296:return B_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return z_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return V_}}var Sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=b_(e.type)}},bh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G_(e.type)}},Eh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},yh=/(\w+)(\])?(\[|\.)?/g;function Dd(i,t){i.seq.push(t),i.map[t.id]=t}function W_(i,t,e){let n=i.name,s=n.length;for(yh.lastIndex=0;;){let r=yh.exec(n),a=yh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Dd(e,c===void 0?new Sh(o,i,t):new bh(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Eh(o),Dd(e,u)),e=u}}}var Hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);W_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Nd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var X_=37297,q_=0;function Y_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ud=new Zt;function Z_(i){re._getMatrix(Ud,re.workingColorSpace,i);let t=`mat3( ${Ud.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case _r:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Od(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Y_(i.getShaderSource(t),o)}else return r}function J_(i,t){let e=Z_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var $_={[Gc]:"Linear",[Wc]:"Reinhard",[Xc]:"Cineon",[qc]:"ACESFilmic",[Zc]:"AgX",[Jc]:"Neutral",[Yc]:"Custom"};function K_(i,t){let e=$_[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var El=new C;function j_(){re.getLuminanceCoefficients(El);let i=El.x.toFixed(4),t=El.y.toFixed(4),e=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function tx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ex(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function sa(i){return i!==""}function Bd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(i){return i.replace(nx,sx)}var ix=new Map;function sx(i,t){let e=te[t];if(e===void 0){let n=ix.get(t);if(n!==void 0)e=te[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return wh(e)}var rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(i){return i.replace(rx,ax)}function ax(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ox={[Ji]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function lx(i){return ox[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cx={[Di]:"ENVMAP_TYPE_CUBE",[Ki]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE_UV"};function hx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":cx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ux={[Ki]:"ENVMAP_MODE_REFRACTION"};function dx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ux[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fx={[Lo]:"ENVMAP_BLENDING_MULTIPLY",[td]:"ENVMAP_BLENDING_MIX",[ed]:"ENVMAP_BLENDING_ADD"};function px(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fx[i.combine]||"ENVMAP_BLENDING_NONE"}function mx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=lx(e),c=hx(e),h=dx(e),u=px(e),d=mx(e),f=Q_(e),g=tx(r),_=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sa).join(`
`),p.length>0&&(p+=`
`)):(m=[Hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),p=[Hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?te.tonemapping_pars_fragment:"",e.toneMapping!==Un?K_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,J_("linearToOutputTexel",e.outputColorSpace),j_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sa).join(`
`)),a=wh(a),a=Bd(a,e),a=kd(a,e),o=wh(o),o=Bd(o,e),o=kd(o,e),a=zd(a),o=zd(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=S+m+a,v=S+p+o,b=Nd(s,s.VERTEX_SHADER,A),E=Nd(s,s.FRAGMENT_SHADER,v);s.attachShader(_,b),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(L){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(b)||"",F=s.getShaderInfoLog(E)||"",B=U.trim(),q=k.trim(),Y=F.trim(),at=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,E);else{let tt=Od(s,b,"vertex"),it=Od(s,E,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+tt+`
`+it)}else B!==""?Gt("WebGLProgram: Program Info Log:",B):(q===""||Y==="")&&(Z=!1);Z&&(L.diagnostics={runnable:at,programLog:B,vertexShader:{log:q,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(b),s.deleteShader(E),y=new Hs(s,_),w=ex(s,_)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,X_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}var _x=0,Th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ah(t),e.set(t,n)),n}},Ah=class{constructor(t){this.id=_x++,this.code=t,this.usedTimes=0}};function xx(i){return i===Oi||i===ta||i===ea}function yx(i,t,e,n,s,r){let a=new Mr,o=new Th,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,w,R,L,U,k){let F=L.fog,B=U.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,at=t.get(y.envMap||q,Y),Z=at&&at.mapping===Zr?at.image.height:null,tt=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Gt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Dt=it!==void 0?it.length:0,Rt=0;B.morphAttributes.position!==void 0&&(Rt=1),B.morphAttributes.normal!==void 0&&(Rt=2),B.morphAttributes.color!==void 0&&(Rt=3);let fe,ee,ce,K;if(tt){let be=Kn[tt];fe=be.vertexShader,ee=be.fragmentShader}else{fe=y.vertexShader,ee=y.fragmentShader;let be=o.getVertexShaderStage(y),ge=o.getFragmentShaderStage(y);o.update(y,be,ge),ce=be.id,K=ge.id}let et=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Wt=U.isInstancedMesh===!0,wt=U.isBatchedMesh===!0,Xt=!!y.map,ye=!!y.matcap,nt=!!at,ot=!!y.aoMap,lt=!!y.lightMap,ct=!!y.bumpMap&&y.wireframe===!1,ft=!!y.normalMap,zt=!!y.displacementMap,Bt=!!y.emissiveMap,qt=!!y.metalnessMap,Jt=!!y.roughnessMap,P=y.anisotropy>0,me=y.clearcoat>0,ne=y.dispersion>0,T=y.retroreflectivity>0,x=y.iridescence>0,O=y.sheen>0,G=y.transmission>0,J=P&&!!y.anisotropyMap,ht=me&&!!y.clearcoatMap,dt=me&&!!y.clearcoatNormalMap,$=me&&!!y.clearcoatRoughnessMap,Q=x&&!!y.iridescenceMap,pt=x&&!!y.iridescenceThicknessMap,Nt=O&&!!y.sheenColorMap,xt=O&&!!y.sheenRoughnessMap,mt=!!y.specularMap,Ut=!!y.specularColorMap,Ht=!!y.specularIntensityMap,$t=G&&!!y.transmissionMap,N=G&&!!y.thicknessMap,gt=!!y.gradientMap,j=!!y.alphaMap,_t=y.alphaTest>0,Et=!!y.alphaHash,rt=!!y.extensions,Ot=Un;y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ot=i.toneMapping);let Ft={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:fe,fragmentShader:ee,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:wt,batchingColor:wt&&U._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&U.instanceColor!==null,instancingMorph:Wt&&U.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:ye,envMap:nt,envMapMode:nt&&at.mapping,envMapCubeUVHeight:Z,aoMap:ot,lightMap:lt,bumpMap:ct,normalMap:ft,displacementMap:zt,emissiveMap:Bt,normalMapObjectSpace:ft&&y.normalMapType===sd,normalMapTangentSpace:ft&&y.normalMapType===vl,packedNormalMap:ft&&y.normalMapType===vl&&xx(y.normalMap.format),metalnessMap:qt,roughnessMap:Jt,anisotropy:P,anisotropyMap:J,clearcoat:me,clearcoatMap:ht,clearcoatNormalMap:dt,clearcoatRoughnessMap:$,dispersion:ne,retroreflection:T,iridescence:x,iridescenceMap:Q,iridescenceThicknessMap:pt,sheen:O,sheenColorMap:Nt,sheenRoughnessMap:xt,specularMap:mt,specularColorMap:Ut,specularIntensityMap:Ht,transmission:G,transmissionMap:$t,thicknessMap:N,gradientMap:gt,opaque:y.transparent===!1&&y.blending===Us&&y.alphaToCoverage===!1,alphaMap:j,alphaTest:_t,alphaHash:Et,combine:y.combine,mapUv:Xt&&g(y.map.channel),aoMapUv:ot&&g(y.aoMap.channel),lightMapUv:lt&&g(y.lightMap.channel),bumpMapUv:ct&&g(y.bumpMap.channel),normalMapUv:ft&&g(y.normalMap.channel),displacementMapUv:zt&&g(y.displacementMap.channel),emissiveMapUv:Bt&&g(y.emissiveMap.channel),metalnessMapUv:qt&&g(y.metalnessMap.channel),roughnessMapUv:Jt&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:ht&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(y.sheenRoughnessMap.channel),specularMapUv:mt&&g(y.specularMap.channel),specularColorMapUv:Ut&&g(y.specularColorMap.channel),specularIntensityMapUv:Ht&&g(y.specularIntensityMap.channel),transmissionMapUv:$t&&g(y.transmissionMap.channel),thicknessMapUv:N&&g(y.thicknessMap.channel),alphaMapUv:j&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ft||P),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(Xt||j),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&ft===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Rt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===xe,decodeVideoTextureEmissive:Bt&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===xe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bn,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:rt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&y.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)w.push(R),w.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(w,y),S(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function A(y){let w=f[y.type],R;if(w){let L=Kn[w];R=Sd.clone(L.uniforms)}else R=y.uniforms;return R}function v(y,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new gx(i,w,y,s),c.push(R),h.set(w,R)),R}function b(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function I(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:I}}function vx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Mx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Vd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,_,m,p){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},i[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=g,S.materialVariant=a(d),S.groupOrder=_,S.renderOrder=d.renderOrder,S.z=m,S.group=p),t++,S}function l(d,f,g,_,m,p,S){S.reversedDepth===!0&&(m=-m);let A=o(d,f,g,_,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function c(d,f,g,_,m,p){let S=o(d,f,g,_,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||Mx),n.length>1&&n.sort(f||Vd),s.length>1&&s.sort(f||Vd)}function u(){for(let d=t,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Sx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Gd,i.set(n,[a])):s>=r.length?(a=new Gd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function bx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Kt};break;case"SpotLight":e={position:new C,direction:new C,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Ex(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var wx=0;function Tx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ax(i){let t=new bx,e=Ex(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new pe,a=new pe;function o(c){let h=0,u=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,A=0,v=0,b=0,E=0,I=0,y=0,w=0,R=0;c.sort(Tx);for(let U=0,k=c.length;U<k;U++){let F=c[U],B=F.color,q=F.intensity,Y=F.distance,at=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Oi?at=F.shadow.map.texture:at=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=B.r*q,u+=B.g*q,d+=B.b*q;else if(F.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(F.sh.coefficients[Z],q);R++}else if(F.isSunLight){let Z=t.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let tt=F.shadow,it=e.get(F);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[g]=it,n.sunShadowMap[g]=at;let Dt=tt.getViewportCount();for(let Rt=0;Rt<Dt;Rt++)n.sunShadowMatrix[_+Rt]=tt.getMatrix(Rt),n.sunShadowCascade[_+Rt]=tt._cascadeData[Rt];_+=Dt,g++}n.sun[f]=Z,f++}else if(F.isDirectionalLight){let Z=t.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let tt=F.shadow,it=e.get(F);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=at,n.directionalShadowMatrix[m]=F.shadow.matrix,b++}n.directional[m]=Z,m++}else if(F.isSpotLight){let Z=t.get(F);Z.position.setFromMatrixPosition(F.matrixWorld),Z.color.copy(B).multiplyScalar(q),Z.distance=Y,Z.coneCos=Math.cos(F.angle),Z.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Z.decay=F.decay,n.spot[S]=Z;let tt=F.shadow;if(F.map&&(n.spotLightMap[y]=F.map,y++,tt.updateMatrices(F),F.castShadow&&w++),n.spotLightMatrix[S]=tt.matrix,F.castShadow){let it=e.get(F);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,n.spotShadow[S]=it,n.spotShadowMap[S]=at,I++}S++}else if(F.isRectAreaLight){let Z=t.get(F);Z.color.copy(B).multiplyScalar(q),Z.halfWidth.set(F.width*.5,0,0),Z.halfHeight.set(0,F.height*.5,0),n.rectArea[A]=Z,A++}else if(F.isPointLight){let Z=t.get(F);if(Z.color.copy(F.color).multiplyScalar(F.intensity),Z.distance=F.distance,Z.decay=F.decay,F.castShadow){let tt=F.shadow,it=e.get(F);it.shadowIntensity=tt.intensity,it.shadowBias=tt.bias,it.shadowNormalBias=tt.normalBias,it.shadowRadius=tt.radius,it.shadowMapSize=tt.mapSize,it.shadowCameraNear=tt.camera.near,it.shadowCameraFar=tt.camera.far,n.pointShadow[p]=it,n.pointShadowMap[p]=at,n.pointShadowMatrix[p]=F.shadow.matrix,E++}n.point[p]=Z,p++}else if(F.isHemisphereLight){let Z=t.get(F);Z.skyColor.copy(F.color).multiplyScalar(q),Z.groundColor.copy(F.groundColor).multiplyScalar(q),n.hemi[v]=Z,v++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==S||L.rectAreaLength!==A||L.hemiLength!==v||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==I||L.numSpotMaps!==y||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=S,L.rectAreaLength=A,L.hemiLength=v,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=I,L.numSpotMaps=y,L.numLightProbes=R,n.version=wx++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let v=c[S];if(v.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(v.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Wd(i){let t=new Ax(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Rx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Wd(i),t.set(s,[o])):r>=a.length?(o=new Wd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Px=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Fx=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Xd=new pe,ia=new C,vh=new C;function Lx(i,t,e){let n=new Cs,s=new ut,r=new ut,a=new Ce,o=new _o,l=new xo,c={},h=e.maxTextureSize,u={[Li]:nn,[nn]:Li,[bn]:bn},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Cx,fragmentShader:Ix}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Be;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new we(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ji;let p=this.type;this.render=function(E,I,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Nu&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ji);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Jn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=p!==this.type;k&&I.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(B=>B.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,B=E.length;F<B;F++){let q=E[F],Y=q.shadow;if(Y===void 0){Gt("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let at=Y.getFrameExtents();s.multiply(at),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,Y.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=Z,Y.map===null||k===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ns){if(q.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new rn(s.x,s.y,{format:Oi,type:Bn,minFilter:qe,magFilter:qe,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new Ti(s.x,s.y,En),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=Xn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=We,Y.map.depthTexture.magFilter=We}else q.isPointLight?(Y.map=new Tl(s.x),Y.map.depthTexture=new co(s.x,On)):(Y.map=new rn(s.x,s.y),Y.map.depthTexture=new Ti(s.x,s.y,On)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=Xn,this.type===Ji?(Y.map.depthTexture.compareFunction=Z?Sl:Ml,Y.map.depthTexture.minFilter=qe,Y.map.depthTexture.magFilter=qe):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=We,Y.map.depthTexture.magFilter=We);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let tt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();q.isPointLight!==!0&&Y.updateMatrices(q,y);for(let it=0;it<tt;it++){let Dt=Y.getCamera(it);if(q.isPointLight){let Rt=Y.camera,fe=Y.matrix,ee=q.distance||Rt.far;ee!==Rt.far&&(Rt.far=ee,Rt.updateProjectionMatrix()),ia.setFromMatrixPosition(q.matrixWorld),Rt.position.copy(ia),vh.copy(Rt.position),vh.add(Px[it]),Rt.up.copy(Fx[it]),Rt.lookAt(vh),Rt.updateMatrixWorld(),fe.makeTranslation(-ia.x,-ia.y,-ia.z),Xd.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Xd,Rt.coordinateSystem,Rt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,it),i.clear();else{it===0&&(i.setRenderTarget(Y.map),i.clear());let Rt=Y.getViewport(it);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),U.viewport(a)}n=Y.getFrustum(it),v(I,y,Dt,q,this.type)}Y.isPointLightShadow!==!0&&this.type===Ns&&S(Y,y),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,L)};function S(E,I){let y=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new rn(s.x,s.y,{format:Oi,type:Bn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,y,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,y,f,_,null)}function A(E,I,y,w){let R=null,L=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)R=L;else if(R=y.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let U=R.uuid,k=I.uuid,F=c[U];F===void 0&&(F={},c[U]=F);let B=F[k];B===void 0&&(B=R.clone(),F[k]=B,I.addEventListener("dispose",b)),R=B}if(R.visible=I.visible,R.wireframe=I.wireframe,w===Ns?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:u[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=y}return R}function v(E,I,y,w,R){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===Ns)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let k=t.update(E),F=E.material;if(Array.isArray(F)){let B=k.groups;for(let q=0,Y=B.length;q<Y;q++){let at=B[q],Z=F[at.materialIndex];if(Z&&Z.visible){let tt=A(E,Z,w,R);E.onBeforeShadow(i,E,I,y,k,tt,at),i.renderBufferDirect(y,null,k,tt,E,at),E.onAfterShadow(i,E,I,y,k,tt,at)}}}else if(F.visible){let B=A(E,F,w,R);E.onBeforeShadow(i,E,I,y,k,B,null),i.renderBufferDirect(y,null,k,B,E,null),E.onAfterShadow(i,E,I,y,k,B,null)}}let U=E.children;for(let k=0,F=U.length;k<F;k++)v(U[k],I,y,w,R)}function b(E){E.target.removeEventListener("dispose",b);for(let y in c){let w=c[y],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function Dx(i,t){function e(){let N=!1,gt=new Ce,j=null,_t=new Ce(0,0,0,0);return{setMask:function(Et){j!==Et&&!N&&(i.colorMask(Et,Et,Et,Et),j=Et)},setLocked:function(Et){N=Et},setClear:function(Et,rt,Ot,Ft,be){be===!0&&(Et*=Ft,rt*=Ft,Ot*=Ft),gt.set(Et,rt,Ot,Ft),_t.equals(gt)===!1&&(i.clearColor(Et,rt,Ot,Ft),_t.copy(gt))},reset:function(){N=!1,j=null,_t.set(-1,0,0,0)}}}function n(){let N=!1,gt=!1,j=null,_t=null,Et=null;return{setReversed:function(rt){if(gt!==rt){let Ot=t.get("EXT_clip_control");rt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),gt=rt;let Ft=Et;Et=null,this.setClear(Ft)}},getReversed:function(){return gt},setTest:function(rt){rt?et(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(rt){j!==rt&&!N&&(i.depthMask(rt),j=rt)},setFunc:function(rt){if(gt&&(rt=md[rt]),_t!==rt){switch(rt){case Ya:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case Ka:i.depthFunc(i.GEQUAL);break;case ja:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=rt}},setLocked:function(rt){N=rt},setClear:function(rt){Et!==rt&&(Et=rt,gt&&(rt=1-rt),i.clearDepth(rt))},reset:function(){N=!1,j=null,_t=null,Et=null,gt=!1}}}function s(){let N=!1,gt=null,j=null,_t=null,Et=null,rt=null,Ot=null,Ft=null,be=null;return{setTest:function(ge){N||(ge?et(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(ge){gt!==ge&&!N&&(i.stencilMask(ge),gt=ge)},setFunc:function(ge,Cn,kn){(j!==ge||_t!==Cn||Et!==kn)&&(i.stencilFunc(ge,Cn,kn),j=ge,_t=Cn,Et=kn)},setOp:function(ge,Cn,kn){(rt!==ge||Ot!==Cn||Ft!==kn)&&(i.stencilOp(ge,Cn,kn),rt=ge,Ot=Cn,Ft=kn)},setLocked:function(ge){N=ge},setClear:function(ge){be!==ge&&(i.clearStencil(ge),be=ge)},reset:function(){N=!1,gt=null,j=null,_t=null,Et=null,rt=null,Ot=null,Ft=null,be=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,A=null,v=null,b=null,E=null,I=null,y=new Kt(0,0,0),w=0,R=!1,L=null,U=null,k=null,F=null,B=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,at=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=at>=1):Z.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=at>=2);let tt=null,it={},Dt=i.getParameter(i.SCISSOR_BOX),Rt=i.getParameter(i.VIEWPORT),fe=new Ce().fromArray(Dt),ee=new Ce().fromArray(Rt);function ce(N,gt,j,_t){let Et=new Uint8Array(4),rt=i.createTexture();i.bindTexture(N,rt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<j;Ot++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(gt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return rt}let K={};K[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(Es),ct(!1),ft(Oc),et(i.CULL_FACE),ot(Jn);function et(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Mt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Wt(N,gt){return d[N]!==gt?(i.bindFramebuffer(N,gt),d[N]=gt,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=gt),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function wt(N,gt){let j=g,_t=!1;if(N){j=f.get(gt),j===void 0&&(j=[],f.set(gt,j));let Et=N.textures;if(j.length!==Et.length||j[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Ot=Et.length;rt<Ot;rt++)j[rt]=i.COLOR_ATTACHMENT0+rt;j.length=Et.length,_t=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,_t=!0);_t&&i.drawBuffers(j)}function Xt(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let ye={[$i]:i.FUNC_ADD,[Ou]:i.FUNC_SUBTRACT,[Bu]:i.FUNC_REVERSE_SUBTRACT};ye[ku]=i.MIN,ye[zu]=i.MAX;let nt={[Hu]:i.ZERO,[Vu]:i.ONE,[Gu]:i.SRC_COLOR,[Hc]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[Yu]:i.DST_COLOR,[Xu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[Vc]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[Qu]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(N,gt,j,_t,Et,rt,Ot,Ft,be,ge){if(N===Jn){m===!0&&(Mt(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),N!==Uu){if(N!==p||ge!==R){if((S!==$i||b!==$i)&&(i.blendEquation(i.FUNC_ADD),S=$i,b=$i),ge)switch(N){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFunc(i.ONE,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Vt("WebGLState: Invalid blending: ",N);break}else switch(N){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case kc:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",N);break}A=null,v=null,E=null,I=null,y.set(0,0,0),w=0,p=N,R=ge}return}Et=Et||gt,rt=rt||j,Ot=Ot||_t,(gt!==S||Et!==b)&&(i.blendEquationSeparate(ye[gt],ye[Et]),S=gt,b=Et),(j!==A||_t!==v||rt!==E||Ot!==I)&&(i.blendFuncSeparate(nt[j],nt[_t],nt[rt],nt[Ot]),A=j,v=_t,E=rt,I=Ot),(Ft.equals(y)===!1||be!==w)&&(i.blendColor(Ft.r,Ft.g,Ft.b,be),y.copy(Ft),w=be),p=N,R=!1}function lt(N,gt){N.side===bn?Mt(i.CULL_FACE):et(i.CULL_FACE);let j=N.side===nn;gt&&(j=!j),ct(j),N.blending===Us&&N.transparent===!1?ot(Jn):ot(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let _t=N.stencilWrite;o.setTest(_t),_t&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Bt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(N){L!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),L=N)}function ft(N){N!==Lu?(et(i.CULL_FACE),N!==U&&(N===Oc?i.cullFace(i.BACK):N===Du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),U=N}function zt(N){N!==k&&(Y&&i.lineWidth(N),k=N)}function Bt(N,gt,j){N?(et(i.POLYGON_OFFSET_FILL),(F!==gt||B!==j)&&(F=gt,B=j,a.getReversed()&&(gt=-gt),i.polygonOffset(gt,j))):Mt(i.POLYGON_OFFSET_FILL)}function qt(N){N?et(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Jt(N){N===void 0&&(N=i.TEXTURE0+q-1),tt!==N&&(i.activeTexture(N),tt=N)}function P(N,gt,j){j===void 0&&(tt===null?j=i.TEXTURE0+q-1:j=tt);let _t=it[j];_t===void 0&&(_t={type:void 0,texture:void 0},it[j]=_t),(_t.type!==N||_t.texture!==gt)&&(tt!==j&&(i.activeTexture(j),tt=j),i.bindTexture(N,gt||K[N]),_t.type=N,_t.texture=gt)}function me(){let N=it[tt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ne(){try{i.compressedTexImage2D(...arguments)}catch(N){Vt("WebGLState:",N)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(N){Vt("WebGLState:",N)}}function x(){try{i.texSubImage2D(...arguments)}catch(N){Vt("WebGLState:",N)}}function O(){try{i.texSubImage3D(...arguments)}catch(N){Vt("WebGLState:",N)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Vt("WebGLState:",N)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Vt("WebGLState:",N)}}function ht(){try{i.texStorage2D(...arguments)}catch(N){Vt("WebGLState:",N)}}function dt(){try{i.texStorage3D(...arguments)}catch(N){Vt("WebGLState:",N)}}function $(){try{i.texImage2D(...arguments)}catch(N){Vt("WebGLState:",N)}}function Q(){try{i.texImage3D(...arguments)}catch(N){Vt("WebGLState:",N)}}function pt(N){return u[N]!==void 0?u[N]:i.getParameter(N)}function Nt(N,gt){u[N]!==gt&&(i.pixelStorei(N,gt),u[N]=gt)}function xt(N){fe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),fe.copy(N))}function mt(N){ee.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ee.copy(N))}function Ut(N,gt){let j=c.get(gt);j===void 0&&(j=new WeakMap,c.set(gt,j));let _t=j.get(N);_t===void 0&&(_t=i.getUniformBlockIndex(gt,N.name),j.set(N,_t))}function Ht(N,gt){let _t=c.get(gt).get(N);l.get(gt)!==_t&&(i.uniformBlockBinding(gt,_t,N.__bindingPointIndex),l.set(gt,_t))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},tt=null,it={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,S=null,A=null,v=null,b=null,E=null,I=null,y=new Kt(0,0,0),w=0,R=!1,L=null,U=null,k=null,F=null,B=null,fe.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:Mt,bindFramebuffer:Wt,drawBuffers:wt,useProgram:Xt,setBlending:ot,setMaterial:lt,setFlipSided:ct,setCullFace:ft,setLineWidth:zt,setPolygonOffset:Bt,setScissorTest:qt,activeTexture:Jt,bindTexture:P,unbindTexture:me,compressedTexImage2D:ne,compressedTexImage3D:T,texImage2D:$,texImage3D:Q,pixelStorei:Nt,getParameter:pt,updateUBOMapping:Ut,uniformBlockBinding:Ht,texStorage2D:ht,texStorage3D:dt,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:J,scissor:xt,viewport:mt,reset:$t}}function Nx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return g?new OffscreenCanvas(T,x):xr("canvas")}function m(T,x,O){let G=1,J=ne(T);if((J.width>O||J.height>O)&&(G=O/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ht=Math.floor(G*J.width),dt=Math.floor(G*J.height);d===void 0&&(d=_(ht,dt));let $=x?_(ht,dt):d;return $.width=ht,$.height=dt,$.getContext("2d").drawImage(T,0,0,ht,dt),Gt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ht+"x"+dt+")."),$}else return"data"in T&&Gt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function p(T){return T.generateMipmaps}function S(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(T,x,O,G,J,ht=!1){if(T!==null){if(i[T]!==void 0)return i[T];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let dt;G&&(dt=t.get("EXT_texture_norm16"),dt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8),O===i.UNSIGNED_SHORT&&dt&&($=dt.R16_EXT),O===i.SHORT&&dt&&($=dt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),x===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8),O===i.UNSIGNED_SHORT&&dt&&($=dt.RG16_EXT),O===i.SHORT&&dt&&($=dt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&dt&&($=dt.RGB16_EXT),O===i.SHORT&&dt&&($=dt.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),x===i.RGBA){let Q=ht?_r:re.getTransfer(J);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Q===xe?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&dt&&($=dt.RGBA16_EXT),O===i.SHORT&&dt&&($=dt.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function b(T,x){let O;return T?x===null||x===On||x===Bs?O=i.DEPTH24_STENCIL8:x===En?O=i.DEPTH32F_STENCIL8:x===Os&&(O=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===On||x===Bs?O=i.DEPTH_COMPONENT24:x===En?O=i.DEPTH_COMPONENT32F:x===Os&&(O=i.DEPTH_COMPONENT16),O}function E(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==We&&T.minFilter!==qe?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function I(T){let x=T.target;x.removeEventListener("dispose",I),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function y(T){let x=T.target;x.removeEventListener("dispose",y),L(x)}function w(T){let x=n.get(T);if(x.__webglInit===void 0)return;let O=T.source,G=f.get(O);if(G){let J=G[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(T),Object.keys(G).length===0&&f.delete(O)}n.remove(T)}function R(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let O=T.source,G=f.get(O);delete G[x.__cacheKey],a.memory.textures--}function L(T){let x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let J=0;J<x.__webglFramebuffer[G].length;J++)i.deleteFramebuffer(x.__webglFramebuffer[G][J]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=T.textures;for(let G=0,J=O.length;G<J;G++){let ht=n.get(O[G]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(O[G])}n.remove(T)}let U=0;function k(){U=0}function F(){return U}function B(T){U=T}function q(){let T=U;return T>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function Y(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function at(T,x){let O=n.get(T);if(T.isVideoTexture&&P(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){let G=T.image;if(G===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(O,T,x);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function Z(T,x){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Mt(O,T,x);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function tt(T,x){let O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Mt(O,T,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function it(T,x){let O=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&O.__version!==T.version){Wt(O,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let Dt={[to]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},Rt={[We]:i.NEAREST,[nd]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[Uo]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},fe={[ad]:i.NEVER,[ud]:i.ALWAYS,[od]:i.LESS,[Ml]:i.LEQUAL,[ld]:i.EQUAL,[Sl]:i.GEQUAL,[cd]:i.GREATER,[hd]:i.NOTEQUAL};function ee(T,x){if(x.type===En&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===qe||x.magFilter===Uo||x.magFilter===Jr||x.magFilter===Ni||x.minFilter===qe||x.minFilter===Uo||x.minFilter===Jr||x.minFilter===Ni)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Dt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Dt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Dt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Rt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Rt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,fe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===We||x.minFilter!==Jr&&x.minFilter!==Ni||x.type===En&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ce(T,x){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",I));let G=x.source,J=f.get(G);J===void 0&&(J={},f.set(G,J));let ht=Y(x);if(ht!==T.__cacheKey){J[ht]===void 0&&(J[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[ht].usedTimes++;let dt=J[T.__cacheKey];dt!==void 0&&(J[T.__cacheKey].usedTimes--,dt.usedTimes===0&&R(x)),T.__cacheKey=ht,T.__webglTexture=J[ht].texture}return O}function K(T,x,O){return Math.floor(Math.floor(T/O)/x)}function et(T,x,O,G){let ht=T.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,G,x.data);else{ht.sort((Nt,xt)=>Nt.start-xt.start);let dt=0;for(let Nt=1;Nt<ht.length;Nt++){let xt=ht[dt],mt=ht[Nt],Ut=xt.start+xt.count,Ht=K(mt.start,x.width,4),$t=K(xt.start,x.width,4);mt.start<=Ut+1&&Ht===$t&&K(mt.start+mt.count-1,x.width,4)===Ht?xt.count=Math.max(xt.count,mt.start+mt.count-xt.start):(++dt,ht[dt]=mt)}ht.length=dt+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Nt=0,xt=ht.length;Nt<xt;Nt++){let mt=ht[Nt],Ut=Math.floor(mt.start/4),Ht=Math.ceil(mt.count/4),$t=Ut%x.width,N=Math.floor(Ut/x.width),gt=Ht,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,$t,N,gt,j,O,G,x.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,pt)}}function Mt(T,x,O){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);let J=ce(T,x),ht=x.source;e.bindTexture(G,T.__webglTexture,i.TEXTURE0+O);let dt=n.get(ht);if(ht.version!==dt.__version||J===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let j=re.getPrimaries(re.workingColorSpace),_t=x.colorSpace===di?null:re.getPrimaries(x.colorSpace),Et=x.colorSpace===di||j===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=m(x.image,!1,s.maxTextureSize);Q=me(x,Q);let pt=r.convert(x.format,x.colorSpace),Nt=r.convert(x.type),xt=v(x.internalFormat,pt,Nt,x.normalized,x.colorSpace,x.isVideoTexture);ee(G,x);let mt,Ut=x.mipmaps,Ht=x.isVideoTexture!==!0,$t=dt.__version===void 0||J===!0,N=ht.dataReady,gt=E(x,Q);if(x.isDepthTexture)xt=b(x.format===Ui,x.type),$t&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,xt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,xt,Q.width,Q.height,0,pt,Nt,null));else if(x.isDataTexture)if(Ut.length>0){Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,gt,xt,Ut[0].width,Ut[0].height);for(let j=0,_t=Ut.length;j<_t;j++)mt=Ut[j],Ht?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,mt.width,mt.height,pt,Nt,mt.data):e.texImage2D(i.TEXTURE_2D,j,xt,mt.width,mt.height,0,pt,Nt,mt.data);x.generateMipmaps=!1}else Ht?($t&&e.texStorage2D(i.TEXTURE_2D,gt,xt,Q.width,Q.height),N&&et(x,Q,pt,Nt)):e.texImage2D(i.TEXTURE_2D,0,xt,Q.width,Q.height,0,pt,Nt,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ht&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,xt,Ut[0].width,Ut[0].height,Q.depth);for(let j=0,_t=Ut.length;j<_t;j++)if(mt=Ut[j],x.format!==wn)if(pt!==null)if(Ht){if(N)if(x.layerUpdates.size>0){let Et=ch(mt.width,mt.height,x.format,x.type);for(let rt of x.layerUpdates){let Ot=mt.data.subarray(rt*Et/mt.data.BYTES_PER_ELEMENT,(rt+1)*Et/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,rt,mt.width,mt.height,1,pt,Ot)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,xt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,mt.width,mt.height,Q.depth,pt,Nt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,xt,mt.width,mt.height,Q.depth,0,pt,Nt,mt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,gt,xt,Ut[0].width,Ut[0].height);for(let j=0,_t=Ut.length;j<_t;j++)mt=Ut[j],x.format!==wn?pt!==null?Ht?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,xt,mt.width,mt.height,0,mt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,mt.width,mt.height,pt,Nt,mt.data):e.texImage2D(i.TEXTURE_2D,j,xt,mt.width,mt.height,0,pt,Nt,mt.data)}else if(x.isDataArrayTexture)if(Ht){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,xt,Q.width,Q.height,Q.depth),N)if(x.layerUpdates.size>0){let j=ch(Q.width,Q.height,x.format,x.type);for(let _t of x.layerUpdates){let Et=Q.data.subarray(_t*j/Q.data.BYTES_PER_ELEMENT,(_t+1)*j/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,Q.width,Q.height,1,pt,Nt,Et)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Nt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,Q.width,Q.height,Q.depth,0,pt,Nt,Q.data);else if(x.isData3DTexture)Ht?($t&&e.texStorage3D(i.TEXTURE_3D,gt,xt,Q.width,Q.height,Q.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Nt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,xt,Q.width,Q.height,Q.depth,0,pt,Nt,Q.data);else if(x.isFramebufferTexture){if($t)if(Ht)e.texStorage2D(i.TEXTURE_2D,gt,xt,Q.width,Q.height);else{let j=Q.width,_t=Q.height;for(let Et=0;Et<gt;Et++)e.texImage2D(i.TEXTURE_2D,Et,xt,j,_t,0,pt,Nt,null),j>>=1,_t>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),u.add(x),j.onpaint=_t=>{let Et=_t.changedElements;for(let rt of u)Et.includes(rt.image)&&(rt.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Et=i.RGBA,rt=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,rt,Ot,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Ht&&$t){let j=ne(Ut[0]);e.texStorage2D(i.TEXTURE_2D,gt,xt,j.width,j.height)}for(let j=0,_t=Ut.length;j<_t;j++)mt=Ut[j],Ht?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,pt,Nt,mt):e.texImage2D(i.TEXTURE_2D,j,xt,pt,Nt,mt);x.generateMipmaps=!1}else if(Ht){if($t){let j=ne(Q);e.texStorage2D(i.TEXTURE_2D,gt,xt,j.width,j.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Nt,Q)}else e.texImage2D(i.TEXTURE_2D,0,xt,pt,Nt,Q);p(x)&&S(G),dt.__version=ht.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Wt(T,x,O){if(x.image.length!==6)return;let G=ce(T,x),J=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let ht=n.get(J);if(J.version!==ht.__version||G===!0){e.activeTexture(i.TEXTURE0+O);let dt=re.getPrimaries(re.workingColorSpace),$=x.colorSpace===di?null:re.getPrimaries(x.colorSpace),Q=x.colorSpace===di||dt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let pt=x.isCompressedTexture||x.image[0].isCompressedTexture,Nt=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let rt=0;rt<6;rt++)!pt&&!Nt?xt[rt]=m(x.image[rt],!0,s.maxCubemapSize):xt[rt]=Nt?x.image[rt].image:x.image[rt],xt[rt]=me(x,xt[rt]);let mt=xt[0],Ut=r.convert(x.format,x.colorSpace),Ht=r.convert(x.type),$t=v(x.internalFormat,Ut,Ht,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,gt=ht.__version===void 0||G===!0,j=J.dataReady,_t=E(x,mt);ee(i.TEXTURE_CUBE_MAP,x);let Et;if(pt){N&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,$t,mt.width,mt.height);for(let rt=0;rt<6;rt++){Et=xt[rt].mipmaps;for(let Ot=0;Ot<Et.length;Ot++){let Ft=Et[Ot];x.format!==wn?Ut!==null?N?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,Ft.width,Ft.height,Ut,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,$t,Ft.width,Ft.height,0,Ft.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,Ft.width,Ft.height,Ut,Ht,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,$t,Ft.width,Ft.height,0,Ut,Ht,Ft.data)}}}else{if(Et=x.mipmaps,N&&gt){Et.length>0&&_t++;let rt=ne(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,$t,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Nt){N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,xt[rt].width,xt[rt].height,Ut,Ht,xt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,$t,xt[rt].width,xt[rt].height,0,Ut,Ht,xt[rt].data);for(let Ot=0;Ot<Et.length;Ot++){let be=Et[Ot].image[rt].image;N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,be.width,be.height,Ut,Ht,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,$t,be.width,be.height,0,Ut,Ht,be.data)}}else{N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ut,Ht,xt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,$t,Ut,Ht,xt[rt]);for(let Ot=0;Ot<Et.length;Ot++){let Ft=Et[Ot];N?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,Ut,Ht,Ft.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,$t,Ut,Ht,Ft.image[rt])}}}p(x)&&S(i.TEXTURE_CUBE_MAP),ht.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function wt(T,x,O,G,J,ht){let dt=r.convert(O.format,O.colorSpace),$=r.convert(O.type),Q=v(O.internalFormat,dt,$,O.normalized,O.colorSpace),pt=n.get(x),Nt=n.get(O);if(Nt.__renderTarget=x,!pt.__hasExternalTextures){let xt=Math.max(1,x.width>>ht),mt=Math.max(1,x.height>>ht);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ht,Q,xt,mt,x.depth,0,dt,$,null):e.texImage2D(J,ht,Q,xt,mt,0,dt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Jt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,J,Nt.__webglTexture,0,qt(x)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,J,Nt.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(T,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let G=x.depthTexture,J=G&&G.isDepthTexture?G.type:null,ht=b(x.stencilBuffer,J),dt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Jt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(x),ht,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(x),ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,T)}else{let G=x.textures;for(let J=0;J<G.length;J++){let ht=G[J],dt=r.convert(ht.format,ht.colorSpace),$=r.convert(ht.type),Q=v(ht.internalFormat,dt,$,ht.normalized,ht.colorSpace);Jt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(x),Q,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(x),Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(T,x,O){let G=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",I)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ee(i.TEXTURE_CUBE_MAP,x.depthTexture);let pt=r.convert(x.depthTexture.format),Nt=r.convert(x.depthTexture.type),xt;x.depthTexture.format===Xn?xt=i.DEPTH_COMPONENT24:x.depthTexture.format===Ui&&(xt=i.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,xt,x.width,x.height,0,pt,Nt,null)}}else at(x.depthTexture,0);let ht=J.__webglTexture,dt=qt(x),$=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Q=x.depthTexture.format===Ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Xn)Jt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,ht,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,ht,0);else if(x.depthTexture.format===Ui)Jt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,ht,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(T){let x=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let G=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=G}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)ye(x.__webglFramebuffer[G],T,G);else{let G=T.texture.mipmaps;G&&G.length>0?ye(x.__webglFramebuffer[0],T,0):ye(x.__webglFramebuffer,T,0)}else if(O){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),Xt(x.__webglDepthbuffer[G],T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ht)}}else{let G=T.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Xt(x.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(T,x,O){let G=n.get(T);x!==void 0&&wt(G.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&nt(T)}function lt(T){let x=T.texture,O=n.get(T),G=n.get(x);T.addEventListener("dispose",y);let J=T.textures,ht=T.isWebGLCubeRenderTarget===!0,dt=J.length>1;if(dt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,a.memory.textures++),ht){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let Q=0;Q<x.mipmaps.length;Q++)O.__webglFramebuffer[$][Q]=i.createFramebuffer()}else O.__webglFramebuffer[$]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)O.__webglFramebuffer[$]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(dt)for(let $=0,Q=J.length;$<Q;$++){let pt=n.get(J[$]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Jt(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){let Q=J[$];O.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[$]);let pt=r.convert(Q.format,Q.colorSpace),Nt=r.convert(Q.type),xt=v(Q.internalFormat,pt,Nt,Q.normalized,Q.colorSpace,T.isXRRenderTarget===!0),mt=qt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,xt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,O.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),ee(i.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)wt(O.__webglFramebuffer[$][Q],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else wt(O.__webglFramebuffer[$],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(x)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let $=0,Q=J.length;$<Q;$++){let pt=J[$],Nt=n.get(pt),xt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,Nt.__webglTexture),ee(xt,pt),wt(O.__webglFramebuffer,T,pt,i.COLOR_ATTACHMENT0+$,xt,0),p(pt)&&S(xt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,G.__webglTexture),ee($,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)wt(O.__webglFramebuffer[Q],T,x,i.COLOR_ATTACHMENT0,$,Q);else wt(O.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,$,0);p(x)&&S($),e.unbindTexture()}T.depthBuffer&&nt(T)}function ct(T){let x=T.textures;for(let O=0,G=x.length;O<G;O++){let J=x[O];if(p(J)){let ht=A(T),dt=n.get(J).__webglTexture;e.bindTexture(ht,dt),S(ht),e.unbindTexture()}}}let ft=[],zt=[];function Bt(T){if(T.samples>0){if(Jt(T)===!1){let x=T.textures,O=T.width,G=T.height,J=i.COLOR_BUFFER_BIT,ht=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(T),$=x.length>1;if($)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let Q=T.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[pt]);let Nt=n.get(x[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,O,G,0,0,O,G,J,i.NEAREST),l===!0&&(ft.length=0,zt.length=0,ft.push(i.COLOR_ATTACHMENT0+pt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(ft.push(ht),zt.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[pt]);let Nt=n.get(x[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function qt(T){return Math.min(s.maxSamples,T.samples)}function Jt(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function P(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function me(T,x){let O=T.colorSpace,G=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==gr&&O!==di&&(re.getTransfer(O)===xe?(G!==wn||J!==an)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",O)),x}function ne(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.getTextureUnits=F,this.setTextureUnits=B,this.setTexture2D=at,this.setTexture2DArray=Z,this.setTexture3D=tt,this.setTextureCube=it,this.rebindTextures=ot,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ux(i,t){function e(n,s=di){let r,a=re.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Bo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ko)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kc)return i.BYTE;if(n===jc)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===Oo)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===eh)return i.ALPHA;if(n===nh)return i.RGB;if(n===wn)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===zo)return i.RED;if(n===Ho)return i.RED_INTEGER;if(n===Oi)return i.RG;if(n===Vo)return i.RG_INTEGER;if(n===Go)return i.RGBA_INTEGER;if(n===$r||n===Kr||n===jr||n===Qr)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===Jo||n===$o||n===Ko||n===jo||n===ta||n===Qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zo||n===Jo)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$o)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ko)return r.COMPRESSED_R11_EAC;if(n===jo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===Qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ml||n===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pl)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===xl||n===ea||n===yl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bx=`
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

}`,Rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Pr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fn({vertexShader:Ox,fragmentShader:Bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ch=class extends qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Rh,p={},S=e.getContextAttributes(),A=null,v=null,b=[],E=[],I=new ut,y=null,w=null,R=new $e;R.viewport=new Ce;let L=new $e;L.viewport=new Ce;let U=[R,L],k=new Po,F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=b[K];return et===void 0&&(et=new Rs,b[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=b[K];return et===void 0&&(et=new Rs,b[K]=et),et.getGripSpace()},this.getHand=function(K){let et=b[K];return et===void 0&&(et=new Rs,b[K]=et),et.getHandSpace()};function q(K){let et=E.indexOf(K.inputSource);if(et===-1)return;let Mt=b[et];Mt!==void 0&&(Mt.update(K.inputSource,K.frame,c||a),Mt.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",at);for(let K=0;K<b.length;K++){let et=E[K];et!==null&&(E[K]=null,b[K].disconnect(et))}F=null,B=null,m.reset();for(let K in p)delete p[K];if(t.setRenderTarget(A),f=null,d=null,u=null,s=null,v=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(I.width,I.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",at),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Wt=null,wt=null;S.depth&&(wt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=S.stencil?Ui:Xn,Wt=S.stencil?Bs:On);let Xt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new rn(d.textureWidth,d.textureHeight,{format:wn,type:an,depthTexture:new Ti(d.textureWidth,d.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new rn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:an,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ce.setContext(s),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(K){for(let et=0;et<K.removed.length;et++){let Mt=K.removed[et],Wt=E.indexOf(Mt);Wt>=0&&(E[Wt]=null,b[Wt].disconnect(Mt))}for(let et=0;et<K.added.length;et++){let Mt=K.added[et],Wt=E.indexOf(Mt);if(Wt===-1){for(let Xt=0;Xt<b.length;Xt++)if(Xt>=E.length){E.push(Mt),Wt=Xt;break}else if(E[Xt]===null){E[Xt]=Mt,Wt=Xt;break}if(Wt===-1)break}let wt=b[Wt];wt&&wt.connect(Mt)}}let Z=new C,tt=new C;function it(K,et,Mt){Z.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(Mt.matrixWorld);let Wt=Z.distanceTo(tt),wt=et.projectionMatrix.elements,Xt=Mt.projectionMatrix.elements,ye=wt[14]/(wt[10]-1),nt=wt[14]/(wt[10]+1),ot=(wt[9]+1)/wt[5],lt=(wt[9]-1)/wt[5],ct=(wt[8]-1)/wt[0],ft=(Xt[8]+1)/Xt[0],zt=ye*ct,Bt=ye*ft,qt=Wt/(-ct+ft),Jt=qt*-ct;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Jt),K.translateZ(qt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),wt[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let P=ye+qt,me=nt+qt,ne=zt-Jt,T=Bt+(Wt-Jt),x=ot*nt/me*P,O=lt*nt/me*P;K.projectionMatrix.makePerspective(ne,T,x,O,P,me),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Dt(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let et=K.near,Mt=K.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),k.near=L.near=R.near=et,k.far=L.far=R.far=Mt,(F!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),F=k.near,B=k.far),k.layers.mask=K.layers.mask|6,R.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;let Wt=K.parent,wt=k.cameras;Dt(k,Wt);for(let Xt=0;Xt<wt.length;Xt++)Dt(wt[Xt],Wt);wt.length===2?it(k,R,L):k.projectionMatrix.copy(R.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),Rt(K,k,Wt)};function Rt(K,et,Mt){Mt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(Mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=io*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return p[K]};let fe=null;function ee(K,et){if(h=et.getViewerPose(c||a),g=et,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Wt=!1;Mt.length!==k.cameras.length&&(k.cameras.length=0,Wt=!0);for(let nt=0;nt<Mt.length;nt++){let ot=Mt[nt],lt=null;if(f!==null)lt=f.getViewport(ot);else{let ft=u.getViewSubImage(d,ot);lt=ft.viewport,nt===0&&(t.setRenderTargetTextures(v,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(v))}let ct=U[nt];ct===void 0&&(ct=new $e,ct.layers.enable(nt),ct.viewport=new Ce,U[nt]=ct),ct.matrix.fromArray(ot.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(ot.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(lt.x,lt.y,lt.width,lt.height),nt===0&&(k.matrix.copy(ct.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Wt===!0&&k.cameras.push(ct)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let nt=u.getDepthInformation(Mt[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let nt=0;nt<Mt.length;nt++){let ot=Mt[nt].camera;if(ot){let lt=p[ot];lt||(lt=new Pr,p[ot]=lt);let ct=u.getCameraImage(ot);lt.sourceTexture=ct}}}}for(let Mt=0;Mt<b.length;Mt++){let Wt=E[Mt],wt=b[Mt];Wt!==null&&wt!==void 0&&wt.update(Wt,et,c||a)}fe&&fe(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let ce=new qd;ce.setAnimationLoop(ee),this.setAnimationLoop=function(K){fe=K},this.dispose=function(){}}},kx=new pe,jd=new Zt;jd.set(-1,0,0,0,1,0,0,0,1);function zx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ah(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,A,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),A=S.envMap,v=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(jd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hx(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let E=b.program;n.uniformBlockBinding(v,E)}function c(v,b){let E=s[v.id];E===void 0&&(m(v),E=h(v),s[v.id]=E,v.addEventListener("dispose",S));let I=b.program;n.updateUBOMapping(v,I);let y=t.render.frame;r[v.id]!==y&&(d(v),r[v.id]=y)}function h(v){let b=u();v.__bindingPointIndex=b;let E=i.createBuffer(),I=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,I,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let b=s[v.id],E=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,w=E.length;y<w;y++){let R=E[y];if(Array.isArray(R))for(let L=0,U=R.length;L<U;L++)f(R[L],y,L,I);else f(R,y,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,E,I){if(_(v,b,E,I)===!0){let y=v.__offset,w=v.value;if(Array.isArray(w)){let R=0;for(let L=0;L<w.length;L++){let U=w[L],k=p(U);g(U,v.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function g(v,b,E){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,E)}function _(v,b,E,I){let y=v.value,w=b+"_"+E;if(I[w]===void 0)return typeof y=="number"||typeof y=="boolean"?I[w]=y:ArrayBuffer.isView(y)?I[w]=y.slice():I[w]=y.clone(),!0;{let R=I[w];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return I[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(v){let b=v.uniforms,E=0,I=16;for(let w=0,R=b.length;w<R;w++){let L=Array.isArray(b[w])?b[w]:[b[w]];for(let U=0,k=L.length;U<k;U++){let F=L[U],B=Array.isArray(F.value)?F.value:[F.value];for(let q=0,Y=B.length;q<Y;q++){let at=B[q],Z=p(at),tt=E%I,it=tt%Z.boundary,Dt=tt+it;E+=it,Dt!==0&&I-Dt<Z.storage&&(E+=I-Dt),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=Z.storage}}}let y=E%I;return y>0&&(E+=I-y),v.__size=E,v.__cache={},this}function p(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",v),b}function S(v){let b=v.target;b.removeEventListener("dispose",S);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var Vx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function Gx(){return $n===null&&($n=new Ar(Vx,16,16,Oi,Bn),$n.name="DFG_LUT",$n.minFilter=qe,$n.magFilter=qe,$n.wrapS=Wn,$n.wrapT=Wn,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var Al=class{constructor(t={}){let{canvas:e=dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=an}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,m=new Set([Go,Vo,Ho]),p=new Set([an,On,Os,Bs,Bo,ko]),S=new Uint32Array(4),A=new Int32Array(4),v=new C,b=null,E=null,I=[],y=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,U=null,k=null,F=null,B=null;this._outputColorSpace=Xe;let q=0,Y=0,at=null,Z=-1,tt=null,it=new Ce,Dt=new Ce,Rt=null,fe=new Kt(0),ee=0,ce=e.width,K=e.height,et=1,Mt=null,Wt=null,wt=new Ce(0,0,ce,K),Xt=new Ce(0,0,ce,K),ye=!1,nt=new Cs,ot=!1,lt=!1,ct=new pe,ft=new C,zt=new Ce,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Jt(){return at===null?et:1}let P=n;function me(M,D){return e.getContext(M,D)}let ne,T,x,O,G,J,ht,dt,$,Q,pt,Nt,xt,mt,Ut,Ht,$t,N,gt,j,_t,Et,rt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Cn,!1),P===null){let D="webgl2";if(P=me(D,M),P===null)throw me(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(M){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),Vt("WebGLRenderer: "+M.message),M}function Ot(){ne=new $g(P),ne.init(),_t=new Ux(P,ne),T=new zg(P,ne,t,_t),x=new Dx(P,ne),T.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),k=P.createFramebuffer(),F=P.createFramebuffer(),B=P.createFramebuffer(),O=new Qg(P),G=new vx,J=new Nx(P,ne,x,G,T,_t,O),ht=new Jg(R),dt=new em(P),Et=new Bg(P,dt),$=new Kg(P,dt,O,Et),Q=new e_(P,$,dt,Et,O),N=new t_(P,T,J),Ut=new Hg(G),pt=new yx(R,ht,ne,T,Et,Ut),Nt=new zx(R,G),xt=new Sx,mt=new Rx(ne),$t=new Og(R,ht,x,Q,g,l),Ht=new Lx(R,Q,T),rt=new Hx(P,O,T,x),gt=new kg(P,ne,O),j=new jg(P,ne,O),O.programs=pt.programs,R.capabilities=T,R.extensions=ne,R.properties=G,R.renderLists=xt,R.shadowMap=Ht,R.state=x,R.info=O}_!==an&&(w=new i_(_,e.width,e.height,o,s,r));let Ft=new Ch(R,P);this.xr=Ft,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=ne.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ne.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(M){M!==void 0&&(et=M,this.setSize(ce,K,!1))},this.getSize=function(M){return M.set(ce,K)},this.setSize=function(M,D,X=!0){if(Ft.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=M,K=D,e.width=Math.floor(M*et),e.height=Math.floor(D*et),X===!0&&(e.style.width=M+"px",e.style.height=D+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(ce*et,K*et).floor()},this.setDrawingBufferSize=function(M,D,X){ce=M,K=D,et=X,e.width=Math.floor(M*X),e.height=Math.floor(D*X),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(_===an){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(it)},this.getViewport=function(M){return M.copy(wt)},this.setViewport=function(M,D,X,z){M.isVector4?wt.set(M.x,M.y,M.z,M.w):wt.set(M,D,X,z),x.viewport(it.copy(wt).multiplyScalar(et).round())},this.getScissor=function(M){return M.copy(Xt)},this.setScissor=function(M,D,X,z){M.isVector4?Xt.set(M.x,M.y,M.z,M.w):Xt.set(M,D,X,z),x.scissor(Dt.copy(Xt).multiplyScalar(et).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(M){x.setScissorTest(ye=M)},this.setOpaqueSort=function(M){Mt=M},this.setTransparentSort=function(M){Wt=M},this.getClearColor=function(M){return M.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,X=!0){let z=0;if(M){let H=!1;if(at!==null){let bt=at.texture.format;H=m.has(bt)}if(H){let bt=at.texture.type,At=p.has(bt),St=$t.getClearColor(),Ct=$t.getClearAlpha(),Lt=St.r,Qt=St.g,ie=St.b;At?(S[0]=Lt,S[1]=Qt,S[2]=ie,S[3]=Ct,P.clearBufferuiv(P.COLOR,0,S)):(A[0]=Lt,A[1]=Qt,A[2]=ie,A[3]=Ct,P.clearBufferiv(P.COLOR,0,A))}else z|=P.COLOR_BUFFER_BIT}D&&(z|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Cn,!1),$t.dispose(),xt.dispose(),mt.dispose(),G.dispose(),ht.dispose(),Q.dispose(),Et.dispose(),rt.dispose(),pt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Wh),Ft.removeEventListener("sessionend",Xh),ki.stop()};function be(M){M.preventDefault(),yr("WebGLRenderer: Context Lost."),L=!0}function ge(){yr("WebGLRenderer: Context Restored."),L=!1;let M=O.autoReset,D=Ht.enabled,X=Ht.autoUpdate,z=Ht.needsUpdate,H=Ht.type;Ot(),O.autoReset=M,Ht.enabled=D,Ht.autoUpdate=X,Ht.needsUpdate=z,Ht.type=H}function Cn(M){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function kn(M){let D=M.target;D.removeEventListener("dispose",kn),Uf(D)}function Uf(M){Of(M),G.remove(M)}function Of(M){let D=G.get(M).programs;D!==void 0&&(D.forEach(function(X){pt.releaseProgram(X)}),M.isShaderMaterial&&pt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,X,z,H,bt){D===null&&(D=Bt);let At=H.isMesh&&H.matrixWorld.determinantAffine()<0,St=zf(M,D,X,z,H);x.setMaterial(z,At);let Ct=X.index,Lt=1;if(z.wireframe===!0){if(Ct=$.getWireframeAttribute(X),Ct===void 0)return;Lt=2}let Qt=X.drawRange,ie=X.attributes.position,It=Qt.start*Lt,_e=(Qt.start+Qt.count)*Lt;bt!==null&&(It=Math.max(It,bt.start*Lt),_e=Math.min(_e,(bt.start+bt.count)*Lt)),Ct!==null?(It=Math.max(It,0),_e=Math.min(_e,Ct.count)):ie!=null&&(It=Math.max(It,0),_e=Math.min(_e,ie.count));let Ne=_e-It;if(Ne<0||Ne===1/0)return;Et.setup(H,z,St,X,Ct);let Ae,Se=gt;if(Ct!==null&&(Ae=dt.get(Ct),Se=j,Se.setIndex(Ae)),H.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*Jt()),Se.setMode(P.LINES)):Se.setMode(P.TRIANGLES);else if(H.isLine){let Ye=z.linewidth;Ye===void 0&&(Ye=1),x.setLineWidth(Ye*Jt()),H.isLineSegments?Se.setMode(P.LINES):H.isLineLoop?Se.setMode(P.LINE_LOOP):Se.setMode(P.LINE_STRIP)}else H.isPoints?Se.setMode(P.POINTS):H.isSprite&&Se.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))Se.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ye=H._multiDrawStarts,Tt=H._multiDrawCounts,Qe=H._multiDrawCount,he=Ct?dt.get(Ct).bytesPerElement:1,_n=G.get(z).currentProgram.getUniforms();for(let zn=0;zn<Qe;zn++)_n.setValue(P,"_gl_DrawID",zn),Se.render(Ye[zn]/he,Tt[zn])}else if(H.isInstancedMesh)Se.renderInstances(It,Ne,H.count);else if(X.isInstancedBufferGeometry){let Ye=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Tt=Math.min(X.instanceCount,Ye);Se.renderInstances(It,Ne,Tt)}else Se.render(It,Ne)};function Gh(M,D,X,z){U!==null&&M.isNodeMaterial&&U.setObject(z,M),ot===!0&&Ut.setState(M,X,!1),M.transparent===!0&&M.side===bn&&M.forceSinglePass===!1?(M.side=nn,M.needsUpdate=!0,fa(M,D,z),M.side=Li,M.needsUpdate=!0,fa(M,D,z),M.side=bn):fa(M,D,z)}this.compile=function(M,D,X=null){X===null&&(X=M),U!==null&&U.renderStart(M,D,X),E=mt.get(X),E.init(D),y.push(E),X.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),M!==X&&M.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),lt=this.localClippingEnabled,ot=Ut.init(this.clippingPlanes,lt),ot===!0&&Ut.setGlobalState(this.clippingPlanes,D),U!==null&&Ht.render(E.state.shadowsArray,X,D);let z=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let bt=H.material;if(bt)if(Array.isArray(bt))for(let At=0;At<bt.length;At++){let St=bt[At];Gh(St,X,D,H),z.add(St)}else Gh(bt,X,D,H),z.add(bt)}),E=y.pop(),U!==null&&U.renderEnd(),z},this.compileAsync=function(M,D,X=null){let z=this.compile(M,D,X);return new Promise(H=>{function bt(){if(z.forEach(function(At){let Ct=G.get(At).currentProgram;(Ct===void 0||Ct.isReady())&&z.delete(At)}),z.size===0){H(M);return}setTimeout(bt,10)}ne.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Jl=null;function Bf(M){Jl&&Jl(M)}function Wh(){ki.stop()}function Xh(){ki.start()}let ki=new qd;ki.setAnimationLoop(Bf),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(M){Jl=M,Ft.setAnimationLoop(M),M===null?ki.stop():ki.start()},Ft.addEventListener("sessionstart",Wh),Ft.addEventListener("sessionend",Xh),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(M,D);let X=Ft.enabled===!0&&Ft.isPresenting===!0,z=w!==null&&(at===null||X)&&w.begin(R,at);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(D),D=Ft.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,D,at),E=mt.get(M,y.length),E.init(D),E.state.textureUnits=J.getTextureUnits(),y.push(E),ct.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),nt.setFromProjectionMatrix(ct,Dn,D.reversedDepth),lt=this.localClippingEnabled,ot=Ut.init(this.clippingPlanes,lt),b=xt.get(M,I.length),b.init(),I.push(b),Ft.enabled===!0&&Ft.isPresenting===!0){let At=R.xr.getDepthSensingMesh();At!==null&&$l(At,D,-1/0,R.sortObjects)}$l(M,D,0,R.sortObjects),b.finish(),U!==null&&U.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(Mt,Wt),qt=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,qt&&$t.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Ut.beginShadows();let H=E.state.shadowsArray;if(Ht.render(H,M,D),ot===!0&&Ut.endShadows(),(z&&w.hasRenderPass())===!1){let At=b.opaque,St=b.transmissive;if(E.setupLights(),D.isArrayCamera){let Ct=D.cameras;if(St.length>0)for(let Lt=0,Qt=Ct.length;Lt<Qt;Lt++){let ie=Ct[Lt];Yh(At,St,M,ie)}qt&&$t.render(M);for(let Lt=0,Qt=Ct.length;Lt<Qt;Lt++){let ie=Ct[Lt];qh(b,M,ie,ie.viewport)}}else St.length>0&&Yh(At,St,M,D),qt&&$t.render(M),qh(b,M,D)}at!==null&&Y===0&&(J.updateMultisampleRenderTarget(at),J.updateRenderTargetMipmap(at)),z&&w.end(R),M.isScene===!0&&M.onAfterRender(R,M,D),Et.resetDefaultState(),Z=-1,tt=null,y.pop(),y.length>0?(E=y[y.length-1],J.setTextureUnits(E.state.textureUnits),ot===!0&&Ut.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,I.pop(),I.length>0?b=I[I.length-1]:b=null,U!==null&&U.renderEnd()};function $l(M,D,X,z){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(nt)){z&&zt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ct);let At=Q.update(M),St=M.material;St.visible&&b.push(M,At,St,X,zt.z,null,D)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(nt))){let At=Q.update(M),St=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),zt.copy(M.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),zt.copy(At.boundingSphere.center)),zt.applyMatrix4(M.matrixWorld).applyMatrix4(ct)),Array.isArray(St)){let Ct=At.groups;for(let Lt=0,Qt=Ct.length;Lt<Qt;Lt++){let ie=Ct[Lt],It=St[ie.materialIndex];It&&It.visible&&b.push(M,At,It,X,zt.z,ie,D)}}else St.visible&&b.push(M,At,St,X,zt.z,null,D)}}let bt=M.children;for(let At=0,St=bt.length;At<St;At++)$l(bt[At],D,X,z)}function qh(M,D,X,z){let{opaque:H,transmissive:bt,transparent:At}=M;E.setupLightsView(X),ot===!0&&Ut.setGlobalState(R.clippingPlanes,X),z&&x.viewport(it.copy(z)),H.length>0&&da(H,D,X),bt.length>0&&da(bt,D,X),At.length>0&&da(At,D,X),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Yh(M,D,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let It=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new rn(1,1,{generateMipmaps:!0,type:It?Bn:an,minFilter:Ni,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let bt=E.state.transmissionRenderTarget[z.id],At=z.viewport||it;bt.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);let St=R.getRenderTarget(),Ct=R.getActiveCubeFace(),Lt=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(fe),ee=R.getClearAlpha(),ee<1&&R.setClearColor(16777215,.5),R.clear(),qt&&$t.render(X);let Qt=R.toneMapping;R.toneMapping=Un;let ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),ot===!0&&Ut.setGlobalState(R.clippingPlanes,z),da(M,X,z),J.updateMultisampleRenderTarget(bt),J.updateRenderTargetMipmap(bt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let _e=0,Ne=D.length;_e<Ne;_e++){let Ae=D[_e],{object:Se,geometry:Ye,material:Tt,group:Qe}=Ae;if(Tt.side===bn&&Se.layers.test(z.layers)){let he=Tt.side;Tt.side=nn,Tt.needsUpdate=!0,Zh(Se,X,z,Ye,Tt,Qe),Tt.side=he,Tt.needsUpdate=!0,It=!0}}It===!0&&(J.updateMultisampleRenderTarget(bt),J.updateRenderTargetMipmap(bt))}R.setRenderTarget(St,Ct,Lt),R.setClearColor(fe,ee),ie!==void 0&&(z.viewport=ie),R.toneMapping=Qt}function da(M,D,X){let z=D.isScene===!0?D.overrideMaterial:null;for(let H=0,bt=M.length;H<bt;H++){let At=M[H],{object:St,geometry:Ct,group:Lt}=At,Qt=At.material;Qt.allowOverride===!0&&z!==null&&(Qt=z),St.layers.test(X.layers)&&Zh(St,D,X,Ct,Qt,Lt)}}function Zh(M,D,X,z,H,bt){U!==null&&H.isNodeMaterial&&U.setObject(M,H),M.onBeforeRender(R,D,X,z,H,bt),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(R,D,X,z,M,bt),H.transparent===!0&&H.side===bn&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,R.renderBufferDirect(X,D,z,H,M,bt),H.side=Li,H.needsUpdate=!0,R.renderBufferDirect(X,D,z,H,M,bt),H.side=bn):R.renderBufferDirect(X,D,z,H,M,bt),M.onAfterRender(R,D,X,z,H,bt)}function fa(M,D,X){D.isScene!==!0&&(D=Bt);let z=G.get(M),H=E.state.lights,bt=E.state.shadowsArray,At=H.state.version,St=pt.getParameters(M,H.state,bt,D,X,E.state.lightProbeGridArray),Ct=pt.getProgramCacheKey(St),Lt=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let Qt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=ht.get(M.envMap||z.environment,Qt),z.envMapRotation=z.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Lt===void 0&&(M.addEventListener("dispose",kn),Lt=new Map,z.programs=Lt);let ie=Lt.get(Ct);if(ie!==void 0){if(z.currentProgram===ie&&z.lightsStateVersion===At)return $h(M,St),ie}else St.uniforms=pt.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,X,St),M.onBeforeCompile(St,R),ie=pt.acquireProgram(St,Ct),Lt.set(Ct,ie),z.uniforms=St.uniforms;let It=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(It.clippingPlanes=Ut.uniform),$h(M,St),z.needsLights=Vf(M),z.lightsStateVersion=At,z.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.sunLights.value=H.state.sun,It.sunLightShadows.value=H.state.sunShadow,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.sunShadowMatrix.value=H.state.sunShadowMatrix,It.sunShadowCascade.value=H.state.sunShadowCascade,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=ie,z.uniformsList=null,ie}function Jh(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=Hs.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function $h(M,D){let X=G.get(M);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function kf(M,D){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(D.matrixWorld);for(let X=0,z=M.length;X<z;X++){let H=M[X];if(H.texture!==null&&H.boundingBox.containsPoint(v))return H}return null}function zf(M,D,X,z,H){D.isScene!==!0&&(D=Bt),J.resetTextureUnits();let bt=D.fog,At=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,St=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:re.workingColorSpace,Ct=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Lt=ht.get(z.envMap||At,Ct),Qt=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ie=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),It=!!X.morphAttributes.position,_e=!!X.morphAttributes.normal,Ne=!!X.morphAttributes.color,Ae=Un;z.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ae=R.toneMapping);let Se=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ye=Se!==void 0?Se.length:0,Tt=G.get(z),Qe=E.state.lights;if(ot===!0&&(lt===!0||M!==tt)){let Ee=M===tt&&z.id===Z;Ut.setState(z,M,Ee)}let he=!1;z.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Qe.state.version||Tt.outputColorSpace!==St||H.isBatchedMesh&&Tt.batching===!1||!H.isBatchedMesh&&Tt.batching===!0||H.isBatchedMesh&&Tt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Tt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Tt.instancing===!1||!H.isInstancedMesh&&Tt.instancing===!0||H.isSkinnedMesh&&Tt.skinning===!1||!H.isSkinnedMesh&&Tt.skinning===!0||H.isInstancedMesh&&Tt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Tt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Tt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Tt.instancingMorph===!1&&H.morphTexture!==null||Tt.envMap!==Lt||z.fog===!0&&Tt.fog!==bt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ut.numPlanes||Tt.numIntersection!==Ut.numIntersection)||Tt.vertexAlphas!==Qt||Tt.vertexTangents!==ie||Tt.morphTargets!==It||Tt.morphNormals!==_e||Tt.morphColors!==Ne||Tt.toneMapping!==Ae||Tt.morphTargetsCount!==Ye||!!Tt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Tt.__version=z.version);let _n=Tt.currentProgram;he===!0&&(_n=fa(z,D,H),U&&z.isNodeMaterial&&U.onUpdateProgram(z,_n,Tt));let zn=!1,fi=!1,ts=!1,ve=_n.getUniforms(),Le=Tt.uniforms;if(x.useProgram(_n.program)&&(zn=!0,fi=!0,ts=!0),z.id!==Z&&(Z=z.id,fi=!0),Tt.needsLights){let Ee=kf(E.state.lightProbeGridArray,H);Tt.lightProbeGrid!==Ee&&(Tt.lightProbeGrid=Ee,fi=!0)}if(zn||tt!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ve.setValue(P,"projectionMatrix",M.projectionMatrix),ve.setValue(P,"viewMatrix",M.matrixWorldInverse);let mi=ve.map.cameraPosition;mi!==void 0&&mi.setValue(P,ft.setFromMatrixPosition(M.matrixWorld)),T.logarithmicDepthBuffer&&ve.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ve.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),tt!==M&&(tt=M,fi=!0,ts=!0)}if(Tt.needsLights&&(Qe.state.sunShadowMap.length>0&&ve.setValue(P,"sunShadowMap",Qe.state.sunShadowMap,J),Qe.state.directionalShadowMap.length>0&&ve.setValue(P,"directionalShadowMap",Qe.state.directionalShadowMap,J),Qe.state.spotShadowMap.length>0&&ve.setValue(P,"spotShadowMap",Qe.state.spotShadowMap,J),Qe.state.pointShadowMap.length>0&&ve.setValue(P,"pointShadowMap",Qe.state.pointShadowMap,J)),H.isSkinnedMesh){ve.setOptional(P,H,"bindMatrix"),ve.setOptional(P,H,"bindMatrixInverse");let Ee=H.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),ve.setValue(P,"boneTexture",Ee.boneTexture,J))}H.isBatchedMesh&&(ve.setOptional(P,H,"batchingTexture"),ve.setValue(P,"batchingTexture",H._matricesTexture,J),ve.setOptional(P,H,"batchingIdTexture"),ve.setValue(P,"batchingIdTexture",H._indirectTexture,J),ve.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&ve.setValue(P,"batchingColorTexture",H._colorsTexture,J));let pi=X.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&N.update(H,X,_n),(fi||Tt.receiveShadow!==H.receiveShadow)&&(Tt.receiveShadow=H.receiveShadow,ve.setValue(P,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Le.envMapIntensity.value=D.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=Gx()),fi){if(ve.setValue(P,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&Hf(Le,ts),bt&&z.fog===!0&&Nt.refreshFogUniforms(Le,bt),Nt.refreshMaterialUniforms(Le,z,et,K,E.state.transmissionRenderTarget[M.id]),Tt.needsLights&&Tt.lightProbeGrid){let Ee=Tt.lightProbeGrid;Le.probesSH.value=Ee.texture,Le.probesMin.value.copy(Ee.boundingBox.min),Le.probesMax.value.copy(Ee.boundingBox.max),Le.probesResolution.value.copy(Ee.resolution)}Hs.upload(P,Jh(Tt),Le,J)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Hs.upload(P,Jh(Tt),Le,J),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ve.setValue(P,"center",H.center),ve.setValue(P,"modelViewMatrix",H.modelViewMatrix),ve.setValue(P,"normalMatrix",H.normalMatrix),ve.setValue(P,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let Ee=z.uniformsGroups;for(let mi=0,es=Ee.length;mi<es;mi++){let jh=Ee[mi];rt.update(jh,_n),rt.bind(jh,_n)}}return _n}function Hf(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Vf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(M,D,X){let z=G.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=D,G.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let X=G.get(M);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,X=0){at=M,q=D,Y=X;let z=null,H=!1,bt=!1;if(M){let St=G.get(M);if(St.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(P.FRAMEBUFFER,St.__webglFramebuffer),it.copy(M.viewport),Dt.copy(M.scissor),Rt=M.scissorTest,x.viewport(it),x.scissor(Dt),x.setScissorTest(Rt),Z=-1;return}else if(St.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(St.__hasExternalTextures)J.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Qt=M.depthTexture;if(St.__boundDepthTexture!==Qt){if(Qt!==null&&G.has(Qt)&&(M.width!==Qt.image.width||M.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}let Ct=M.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(bt=!0);let Lt=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Lt[D])?z=Lt[D][X]:z=Lt[D],H=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?z=G.get(M).__webglMultisampledFramebuffer:Array.isArray(Lt)?z=Lt[X]:z=Lt,it.copy(M.viewport),Dt.copy(M.scissor),Rt=M.scissorTest}else it.copy(wt).multiplyScalar(et).floor(),Dt.copy(Xt).multiplyScalar(et).floor(),Rt=ye;if(X!==0&&(z=k),x.bindFramebuffer(P.FRAMEBUFFER,z)&&x.drawBuffers(M,z),x.viewport(it),x.scissor(Dt),x.setScissorTest(Rt),H){let St=G.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,St.__webglTexture,X)}else if(bt){let St=D;for(let Ct=0;Ct<M.textures.length;Ct++){let Lt=G.get(M.textures[Ct]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,X,St)}}else if(M!==null&&X!==0){let St=G.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,St.__webglTexture,X)}Z=-1};function Kh(M){let D=G.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=T.textureFormatReadable(M.format),D.__typeReadable=T.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,X,z,H,bt,At,St=0){if(!(M&&M.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct){x.bindFramebuffer(P.FRAMEBUFFER,Ct);try{let Lt=M.textures[St],Qt=Lt.format,ie=Lt.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+St);let It=Kh(Lt);if(It.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-z&&X>=0&&X<=M.height-H&&P.readPixels(D,X,z,H,_t.convert(Qt),_t.convert(ie),bt)}finally{let Lt=at!==null?G.get(at).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(M,D,X,z,H,bt,At,St=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct)if(D>=0&&D<=M.width-z&&X>=0&&X<=M.height-H){x.bindFramebuffer(P.FRAMEBUFFER,Ct);let Lt=M.textures[St],Qt=Lt.format,ie=Lt.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+St);let It=Kh(Lt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _e=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,_e),P.bufferData(P.PIXEL_PACK_BUFFER,bt.byteLength,P.STREAM_READ),P.readPixels(D,X,z,H,_t.convert(Qt),_t.convert(ie),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ne=at!==null?G.get(at).__webglFramebuffer:null;x.bindFramebuffer(P.FRAMEBUFFER,Ne);let Ae=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await pd(P,Ae,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,_e),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,bt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(_e),P.deleteSync(Ae),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,X=0){let z=Math.pow(2,-X),H=Math.floor(M.image.width*z),bt=Math.floor(M.image.height*z),At=D!==null?D.x:0,St=D!==null?D.y:0;J.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,At,St,H,bt),x.unbindTexture()},this.copyTextureToTexture=function(M,D,X=null,z=null,H=0,bt=0){let At,St,Ct,Lt,Qt,ie,It,_e,Ne,Ae=M.isCompressedTexture?M.mipmaps[bt]:M.image;if(X!==null)At=X.max.x-X.min.x,St=X.max.y-X.min.y,Ct=X.isBox3?X.max.z-X.min.z:1,Lt=X.min.x,Qt=X.min.y,ie=X.isBox3?X.min.z:0;else{let Le=Math.pow(2,-H);At=Math.floor(Ae.width*Le),St=Math.floor(Ae.height*Le),M.isDataArrayTexture?Ct=Ae.depth:M.isData3DTexture?Ct=Math.floor(Ae.depth*Le):Ct=1,Lt=0,Qt=0,ie=0}z!==null?(It=z.x,_e=z.y,Ne=z.z):(It=0,_e=0,Ne=0);let Se=_t.convert(D.format),Ye=_t.convert(D.type),Tt;D.isData3DTexture?(J.setTexture3D(D,0),Tt=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(J.setTexture2DArray(D,0),Tt=P.TEXTURE_2D_ARRAY):(J.setTexture2D(D,0),Tt=P.TEXTURE_2D),x.activeTexture(P.TEXTURE0),x.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let Qe=x.getParameter(P.UNPACK_ROW_LENGTH),he=x.getParameter(P.UNPACK_IMAGE_HEIGHT),_n=x.getParameter(P.UNPACK_SKIP_PIXELS),zn=x.getParameter(P.UNPACK_SKIP_ROWS),fi=x.getParameter(P.UNPACK_SKIP_IMAGES);x.pixelStorei(P.UNPACK_ROW_LENGTH,Ae.width),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ae.height),x.pixelStorei(P.UNPACK_SKIP_PIXELS,Lt),x.pixelStorei(P.UNPACK_SKIP_ROWS,Qt),x.pixelStorei(P.UNPACK_SKIP_IMAGES,ie);let ts=M.isDataArrayTexture||M.isData3DTexture,ve=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let Le=G.get(M),pi=G.get(D),Ee=G.get(Le.__renderTarget),mi=G.get(pi.__renderTarget);x.bindFramebuffer(P.READ_FRAMEBUFFER,Ee.__webglFramebuffer),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let es=0;es<Ct;es++)ts&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,G.get(M).__webglTexture,H,ie+es),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,G.get(D).__webglTexture,bt,Ne+es)),P.blitFramebuffer(Lt,Qt,At,St,It,_e,At,St,P.DEPTH_BUFFER_BIT,P.NEAREST);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||G.has(M)){let Le=G.get(M),pi=G.get(D);x.bindFramebuffer(P.READ_FRAMEBUFFER,F),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,B);for(let Ee=0;Ee<Ct;Ee++)ts?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Le.__webglTexture,H,ie+Ee):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Le.__webglTexture,H),ve?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,pi.__webglTexture,bt,Ne+Ee):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pi.__webglTexture,bt),H!==0?P.blitFramebuffer(Lt,Qt,At,St,It,_e,At,St,P.COLOR_BUFFER_BIT,P.NEAREST):ve?P.copyTexSubImage3D(Tt,bt,It,_e,Ne+Ee,Lt,Qt,At,St):P.copyTexSubImage2D(Tt,bt,It,_e,Lt,Qt,At,St);x.bindFramebuffer(P.READ_FRAMEBUFFER,null),x.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ve?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Tt,bt,It,_e,Ne,At,St,Ct,Se,Ye,Ae.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Tt,bt,It,_e,Ne,At,St,Ct,Se,Ae.data):P.texSubImage3D(Tt,bt,It,_e,Ne,At,St,Ct,Se,Ye,Ae):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,bt,It,_e,At,St,Se,Ye,Ae.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,bt,It,_e,Ae.width,Ae.height,Se,Ae.data):P.texSubImage2D(P.TEXTURE_2D,bt,It,_e,At,St,Se,Ye,Ae);x.pixelStorei(P.UNPACK_ROW_LENGTH,Qe),x.pixelStorei(P.UNPACK_IMAGE_HEIGHT,he),x.pixelStorei(P.UNPACK_SKIP_PIXELS,_n),x.pixelStorei(P.UNPACK_SKIP_ROWS,zn),x.pixelStorei(P.UNPACK_SKIP_IMAGES,fi),bt===0&&D.generateMipmaps&&P.generateMipmap(Tt),x.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){q=0,Y=0,at=null,x.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var Wx=[[0,-46],[26,-45],[48,-38],[64,-20],[68,2],[63,24],[46,42],[22,52],[-4,54],[-30,50],[-52,38],[-66,16],[-68,-8],[-58,-30],[-30,-44]];function tf(i,t,e){let n=Math.max(8,Math.round(t)),s=[];for(let r=0;r<=n&&!(e&&r===n);r++){let a=r/n,o=i.getPointAt(a);s.push({x:o.x,z:o.z})}return Xx(s,e)}function Xx(i,t){let e=0;for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],a=i[(n-1+i.length)%i.length],o=t||n<i.length-1?r:s,l=t||n>0?a:s,c=o.x-l.x,h=o.z-l.z,u=Math.hypot(c,h)||1;s.tx=c/u,s.tz=h/u,s.s=e,(n<i.length-1||t)&&(e+=Math.hypot(r.x-s.x,r.z-s.z))}return{pts:i,length:e}}var Il=class{constructor(t,e,n,s,r){this.id=t,this.pts=e,this.length=n,this.closed=s,this.halfWidth=ue.halfWidth,this.region=r}segCount(){return this.closed?this.pts.length:this.pts.length-1}at(t){let e=this.length;this.closed?t=(t%e+e)%e:t=Math.max(0,Math.min(e,t));let n=this.pts,s=0,r=n.length-1;for(;s<r;){let _=s+r+1>>1;n[_].s<=t?s=_:r=_-1}let a=n[s],o=n[(s+1)%n.length],l=this.closed&&s===n.length-1?e-a.s:o.s-a.s,c=l>0?Math.min(1,(t-a.s)/l):0,h=a.x+(o.x-a.x)*c,u=a.z+(o.z-a.z)*c,d=a.tx+(o.tx-a.tx)*c,f=a.tz+(o.tz-a.tz)*c,g=Math.hypot(d,f)||1;return d/=g,f/=g,{x:h,z:u,tx:d,tz:f,rx:-f,rz:d,s:t}}nearest(t,e){let n=this.pts,s=null,r=this.segCount();for(let l=0;l<r;l++){let c=n[l],h=n[(l+1)%n.length],u=h.x-c.x,d=h.z-c.z,f=u*u+d*d||1,g=((t-c.x)*u+(e-c.z)*d)/f;g=g<0?0:g>1?1:g;let _=c.x+u*g,m=c.z+d*g,p=(t-_)**2+(e-m)**2;if(!s||p<s.d2){let S=Math.sqrt(f);s={d2:p,i:l,f:g,px:_,pz:m,s:c.s+S*g,tx:u/S,tz:d/S}}}let a=Math.sqrt(s.d2),o=(t-s.px)*-s.tz+(e-s.pz)*s.tx;return{road:this,s:s.s,dist:a,lateral:o,px:s.px,pz:s.pz,tx:s.tx,tz:s.tz}}};function ef(){let i=new qi(Wx.map(([A,v])=>new C(A,0,v)),!0,"centripetal"),t=i.getLength(),{pts:e,length:n}=tf(i,t,!0),s=new Il("loop",e,n,!0),r=[],a=(A,v,b,E)=>{let I=[],y=(b-v+n)%n,w=9;for(let k=0;k<=w;k++){let F=k/w,B=s.at(v+y*F),q=-E*Math.sin(Math.PI*F)**1.6;I.push(new C(B.x+B.rx*q,0,B.z+B.rz*q))}let R=new qi(I,!1,"centripetal"),L=tf(R,R.getLength(),!1),U=new Il(A,L.pts,L.length,!1);return r.push({id:A,road:U,fromS:v,toS:b}),U},o=n,l={id:"A",fromS:o*.035,toS:o*.215},c={id:"B",fromS:o*.395,toS:o*.565};a("A",l.fromS,l.toS,30),a("B",c.fromS,c.toS,28);let h=[s,...r.map(A=>A.road)],u=[],d=(A,v,b,E,I={})=>{let y=b.at(E),w=ue.halfWidth+ue.bayDepth*.5;u.push({id:A,kind:v,road:b,s:E,...I,x:y.x,z:y.z,tx:y.tx,tz:y.tz,rx:y.rx,rz:y.rz,padX:y.x+y.rx*w,padZ:y.z+y.rz*w})},f=r[0].road,g=r[1].road;d("h-castle","house",s,(l.fromS+l.toS)/2,{dest:"castle"}),d("h-bakery","house",f,f.length*.52,{dest:"bakery"}),d("h-dome","house",s,(c.fromS+c.toS)/2,{dest:"dome"}),d("h-water","house",g,g.length*.5,{dest:"water"}),[.255,.33,.62,.7,.8,.9,.975].forEach((A,v)=>d("p"+v,"pickup",s,o*A));let _=[l,c].map((A,v)=>{let b=r[v],E=s.at(A.fromS),I=s.at(A.toS),y=v===0?"bakery":"water",w=v===0?"castle":"dome";return{...A,branch:b,split:E,merge:I,signS:A.fromS-16,destOnBranch:y,destOnLoop:w}}),m=u.find(A=>A.id==="p4"),p={road:s,s:m.s-72,firstBayId:m.id};return{loop:s,branches:r,roads:h,bays:u,forks:_,start:p,regionAt:(A,v)=>{let E=s.nearest(A,v).s/o;return E>=.92||E<.25?"town":E<.6?"sea":"wood"},length:o}}var Pl=class{constructor(t){this.layout=t,this.loop=t.loop,this.branchById=new Map(t.branches.map(e=>[e.road.id,e]))}locate(t,e,n){let s=null;for(let r of this.layout.roads){let a=r.nearest(t,e);if(n&&r===n.road&&a.dist<=r.halfWidth+.5){s=a;break}(!s||a.dist<s.dist)&&(s=a)}return s}distance(t,e){let n=this.loop.length,s=a=>(a%n+n)%n;if(t.road===this.loop){if(e.road===this.loop)return s(e.s-t.s);let a=this.branchById.get(e.road.id);return s(a.fromS-t.s)+e.s}let r=this.branchById.get(t.road.id);return e.road===t.road&&e.s>=t.s-1?Math.max(0,e.s-t.s):r.road.length-t.s+this.distance({road:this.loop,s:r.toS},e)}walk(t,e,n){let s=[],r={road:t.road,s:t.s},a=this.distance(t,e),o=0;for(;a>0&&o++<2e3;){let l=Math.min(n,a);a-=l,r=this.advance(r,l,e);let c=r.road.at(r.s);s.push({...c,road:r.road})}return s}advance(t,e,n){let s=this.loop.length;if(t.road===this.loop){if(n&&n.road!==this.loop){let a=this.branchById.get(n.road.id),o=((a.fromS-t.s)%s+s)%s;if(o<=e)return{road:a.road,s:e-o}}return{road:this.loop,s:(t.s+e)%s}}let r=this.branchById.get(t.road.id);return t.s+e<=r.road.length?{road:t.road,s:t.s+e}:this.advance({road:this.loop,s:r.toS},t.s+e-r.road.length,n)}};function nf(i,t){let e=`${t}${i.seq}`;return i.seq+=1,e}function sf(i,t,e=[]){let n=i.queue;if(!n.order.length||n.pos>=n.order.length){let r;for(let a=0;a<8;a++){r=Qn.slice();for(let o=r.length-1;o>0;o--){let l=Math.floor(t()*(o+1));[r[o],r[l]]=[r[l],r[o]]}if(r[0]!==n.last)break}r[0]===n.last&&r.push(r.shift()),n.order=r,n.pos=0}if(e.includes(n.order[n.pos])){for(let r=n.pos+1;r<n.order.length;r++)if(!e.includes(n.order[r])){[n.order[n.pos],n.order[r]]=[n.order[r],n.order[n.pos]];break}if(e.includes(n.order[n.pos])){let r=Qn.filter(a=>!e.includes(a));r.length&&(n.order[n.pos]=r[Math.floor(t()*r.length)])}}let s=n.order[n.pos];return n.pos+=1,n.last=s,s}function rf(i,t,e){return i.pending={deliveryId:nf(i,"d"),animal:t,bayId:e,boarded:!1},i.phase="SEEK_PASSENGER",i.pending}function af(i,t){return!i.pending||i.pending.deliveryId!==t?!1:(i.pending.boarded=!0,i.phase="DRIVE_TO_HOUSE",!0)}function of(i,t,e){if(i.doneDeliveries.includes(t)||!i.pending||i.pending.deliveryId!==t||!i.pending.boarded)return!1;let n=i.pending.animal;return i.doneDeliveries.push(t),i.doneDeliveries.length>30&&i.doneDeliveries.shift(),i.totals.deliveries+=1,i.totals.byAnimal[n]=(i.totals.byAnimal[n]||0)+1,i.set.n=Math.min(3,i.set.n+1),i.set.delivered.push(n),i.pending=null,i.wash={deliveryId:t,color:null,bayId:e||null},i.phase="ALIGHT_AND_THANK",!0}function lf(i,t){return i.wash?(i.wash.color=t,i.carColor=t,i.phase="WASH_FINISH",!0):!1}function cf(i,t){return!i.wash||i.wash.deliveryId!==t?!1:(i.totals.washes+=1,i.wash=null,i.phase=i.set.n>=3?"PARADE":"SEEK_PASSENGER",!0)}function hf(i,t){return i.grantedSets.includes(i.set.id)?(i.phase="READY_FOR_NEXT_SET",!1):((!i.reward||i.reward.setId!==i.set.id)&&(i.reward={setId:i.set.id,offers:t,granted:null}),i.phase="DECORATION_CHOICE",!0)}function uf(i,t){if(i.grantedSets.includes(i.set.id))return!1;let e=yn.get(t);return!e||!i.reward||!i.reward.offers.includes(t)?!1:(i.deco.owned.includes(t)||i.deco.owned.push(t),i.deco.equipped[e.slot]=t,i.grantedSets.push(i.set.id),i.grantedSets.length>30&&i.grantedSets.shift(),i.reward.granted=t,i.totals.sets+=1,i.phase="READY_FOR_NEXT_SET",!0)}function df(i){return i.phase!=="READY_FOR_NEXT_SET"?!1:(i.set={id:nf(i,"s"),n:0,delivered:[]},i.reward=null,i.phase="SEEK_PASSENGER",!0)}var Bi=new Set(["SEEK_PASSENGER","DRIVE_TO_HOUSE","READY_FOR_NEXT_SET"]),Fl=class{constructor({store:t,rng:e=Math.random,audio:n=null,layout:s=null}){this.store=t,this.rng=e,this.audio=n,this.layout=s||ef(),this.graph=new Pl(this.layout),this.bayById=new Map(this.layout.bays.map(r=>[r.id,r])),this.houseBayByDest=new Map(this.layout.bays.filter(r=>r.kind==="house").map(r=>[r.dest,r])),this.rec=t.load(),this.vehicle=new ya,this.phase="READY",this.phaseT=0,this.time=0,this.events=[],this.dwell=0,this.loc=null,this.onRoad=!0,this.collectibles=[],this.traffic=[],this.fastTurns=0,this.washCount=0,this.honks=0,this.bumpCooldown=0,this.passenger=null,this.washRig=null,this.paradeAnimals=[],this.decoFitT=0,this.offers=[],this.stats={boardings:0,deliveries:0,relocations:0,collisions:0,yields:0,grassTime:0,setStart:null,setDurations:[]},this.idleT=0,this.everThrottled=!1,this.firstDriveT=null,this.grassT=0,this.paused=!1,this._initTraffic(),this.placeAtStart()}emit(t,e={}){this.events.push({type:t,t:this.time,...e})}drainEvents(){let t=this.events;return this.events=[],t}save(){this.store.save(this.rec)}placeAtStart(){let t=this.layout.start,e=t.road.at(t.s);this.vehicle.place(e.x+e.rx*1.2,e.z+e.rz*1.2,Math.atan2(e.tx,e.tz)),this.loc=this.graph.locate(this.vehicle.x,this.vehicle.z,null)}placeAtRoad(t,e,n=1.2){let r=(this.layout.roads.find(a=>a.id===t)||this.layout.loop).at(e);this.vehicle.place(r.x+r.rx*n,r.z+r.rz*n,Math.atan2(r.tx,r.tz)),this.loc=this.graph.locate(this.vehicle.x,this.vehicle.z,null)}placeAtBay(t){this.vehicle.place(t.x+t.rx*2.2,t.z+t.rz*2.2,Math.atan2(t.tx,t.tz)),this.loc=this.graph.locate(this.vehicle.x,this.vehicle.z,null)}checkpoint(){let t=this.graph.locate(this.vehicle.x,this.vehicle.z,this.loc);this.rec.checkpoint={roadId:t.road.id,s:t.s}}setPhase(t){(!Bi.has(t)||!Bi.has(this.phase))&&this.vehicle.clearDrive(),this.phase=t,this.phaseT=0,this.dwell=0,this.emit("phase",{phase:t})}beginPlay(){let t=this.rec,e=t.phase;if(t.checkpoint&&e!=="WASH_CHOICE"&&e!=="WASH_FINISH"&&this.placeAtRoad(t.checkpoint.roadId,t.checkpoint.s),this.vehicle.speed=0,this.stats.setStart=this.time,e==="WASH_CHOICE"||e==="WASH_FINISH"){let n=this.bayById.get(t.wash&&t.wash.bayId)||this.layout.bays.find(s=>s.kind==="house");this.placeAtBay(n),this.washBay=n,this._enterWash(e==="WASH_FINISH"&&t.wash.color?"finish":"choice")}else e==="PARADE"?this._enterParade():e==="DECORATION_CHOICE"?(this.offers=t.reward?t.reward.offers.slice():Kl(t.deco.owned,this.rng),this.setPhase("DECORATION_CHOICE")):e==="READY_FOR_NEXT_SET"?this.setPhase("READY_FOR_NEXT_SET"):e==="DRIVE_TO_HOUSE"&&t.pending&&t.pending.boarded?(this.passenger={animal:t.pending.animal,state:"riding"},this.setPhase("DRIVE_TO_HOUSE"),this._spawnCollectibles()):(this._ensurePending(!t.firstRunDone),this.setPhase("SEEK_PASSENGER"));t.firstRunDone=!0,this.save()}_ensurePending(t){let e=this.rec;if(!e.pending){let s=sf(e,this.rng,e.set.delivered),r=t?this.bayById.get(this.layout.start.firstBayId):this._chooseBay(s);rf(e,s,r.id)}let n=this.bayById.get(e.pending.bayId);(!n||n.kind!=="pickup")&&(n=this._chooseBay(e.pending.animal),e.pending.bayId=n.id),this.passenger={animal:e.pending.animal,state:"waiting",bayId:n.id},this.save()}_chooseBay(t,e=38){let n=this._pos(),s=this.houseBayByDest.get(Ve[t].dest),r=this.layout.bays.filter(o=>o.kind==="pickup").map(o=>({b:o,d:this.graph.distance(n,{road:o.road,s:o.s})})).sort((o,l)=>o.d-l.d);return(r.filter(o=>o.d>=e&&this.graph.distance({road:o.b.road,s:o.b.s},{road:s.road,s:s.s})>=110)[0]||r.find(o=>o.d>=e)||r[0]).b}_pos(){let t=this.loc||this.graph.locate(this.vehicle.x,this.vehicle.z,null);return{road:t.road,s:t.s}}update(t,e){this.time+=t,this.phaseT+=t,this.bumpCooldown>0&&(this.bumpCooldown-=t);let n=this.vehicle,s=Bi.has(this.phase)&&!this.paused&&!e.blocked;n.locked=!s,this.loc=this.graph.locate(n.x,n.z,this.loc);let r=this._onBayPad(n.x,n.z);this.onRoad=this.loc.dist<=this.loc.road.halfWidth+.3||r;let a=gi.maxSpeed;this.onRoad||(a*=gi.grassFactor),e.flat&&(a*=gi.flatFactor),!this.onRoad&&n.speed>.5?this.grassT+=t:this.grassT=0;let o=s?this._laneAssist(e.steer,r):0;n.step(t,{throttle:s&&e.throttle,brake:e.brake,steer:s?e.steer:0,speedCap:a,assist:o}),n.speed>2&&this.firstDriveT===null&&(this.firstDriveT=this.time),n.throttleOn?(this.everThrottled=!0,this.idleT=0):n.speed<.2?this.idleT+=t:this.idleT=0,this._boundary(t),this._houseObstacles(),this._updateTraffic(t),this._updateCollectibles(t),this._phaseLogic(t)}_onBayPad(t,e){for(let n of this.layout.bays){let s=t-n.x,r=e-n.z,a=s*n.tx+r*n.tz,o=s*n.rx+r*n.rz;if(Math.abs(a)<8&&o>0&&o<ue.halfWidth+ue.bayDepth+.5)return n}return null}_nearFork(t,e){for(let n of this.layout.forks)for(let s of[n.split,n.merge])if((t-s.x)**2+(e-s.z)**2<484)return!0;return!1}_laneAssist(t,e){let n=this.loc,s=this.vehicle;if(e||s.speed<.5||n.dist>n.road.halfWidth+.3||this._nearFork(s.x,s.z))return 0;let r=n.road.halfWidth-ue.assistBand,a=n.lateral;if(Math.abs(a)<r)return 0;let o=s.forward();if((o.x*-n.tz+o.z*n.tx)*Math.sign(a)<=0||Math.sign(t)===Math.sign(a)&&Math.abs(t)>.3)return 0;let c=Ue((Math.abs(a)-r)/ue.assistBand,0,1);return-Math.sign(a)*ue.assistMax*c}_boundary(t){let e=this.vehicle,n=this.graph.locate(e.x,e.z,null),s=n.dist-ue.boundary;if(s<=0)return;let r=(n.px-e.x)/n.dist,a=(n.pz-e.z)/n.dist,o=Math.min(s,s*4*t+.02);e.x+=r*o,e.z+=a*o;let l=e.forward(),c=l.x*n.tx+l.z*n.tz>=0?1:-1,h=Math.atan2(n.tx*c,n.tz*c),u=Math.atan2(Math.sin(h-e.heading),Math.cos(h-e.heading));e.heading+=Ue(u,-.7*t,.7*t),s>3&&(e.speed*=.97)}_houseObstacles(){let t=this.vehicle;for(let e of this.layout.bays){if(e.kind!=="house")continue;let n=ue.halfWidth+ue.bayDepth+4.2,s=e.x+e.rx*n,r=e.z+e.rz*n,a=t.x-s,o=t.z-r,l=Math.hypot(a,o);l<3.6&&l>.001&&(t.x=s+a/l*3.6,t.z=r+o/l*3.6,t.speed*=.9)}}_initTraffic(){let t=this.layout.loop.length;this.traffic=[.15,.48,.83].map((e,n)=>({id:n,s:t*e,lat:-2.2,latTarget:-2.2,speed:2.4,honkT:0,waitT:0,x:0,z:0,heading:0,wave:0}));for(let e of this.traffic)this._placeTraffic(e)}_placeTraffic(t){let e=this.layout.loop.at(t.s);t.x=e.x+e.rx*t.lat,t.z=e.z+e.rz*t.lat,t.heading=Math.atan2(-e.tx,-e.tz)}_updateTraffic(t){let e=this.vehicle,n=this.layout.loop.length;for(let s of this.traffic){let r=Math.sin(s.heading),a=Math.cos(s.heading),o=-a,l=r,c=e.x-s.x,h=e.z-s.z,u=c*r+h*a,d=c*o+h*l,f=2.4,g=-2.2,_=u>0&&u<10&&Math.abs(d)<2.8;if(s.honkT>0&&(s.honkT-=t,g=s.dodgeTo),_){let A=this.loc&&this.loc.road===this.layout.loop?this.loc.lateral:0;g=A>-1?-5.2:3.6,f=u<5?0:1.2,s.waitT+=t,s.waitT>3&&(f=1,g=A>-1?-6.5:4.5)}else s.waitT=Math.max(0,s.waitT-t);s.latTarget=g,s.lat+=Ue(s.latTarget-s.lat,-2*t,2*t),s.speed+=Ue(f-s.speed,-4*t,1.5*t),s.s=((s.s-s.speed*t)%n+n)%n,this._placeTraffic(s),s.wave>0&&(s.wave-=t);let m=e.x-s.x,p=e.z-s.z,S=Math.hypot(m,p);if(S<2.1&&S>.001){let A=2.1-S;e.x+=m/S*A*.7,e.z+=p/S*A*.7,s.lat+=(s.lat>-2?1:-1)*A*.3,e.speed*=.6,this.bumpCooldown<=0&&(this.bumpCooldown=.7,this.stats.collisions++,this.emit("bump",{car:s.id}))}}}honk(){this.honks++,this.emit("honk",{x:this.vehicle.x,z:this.vehicle.z});let t=this.vehicle,e=t.forward(),n=null;for(let s of this.traffic){let r=s.x-t.x,a=s.z-t.z,o=r*e.x+a*e.z,l=Math.hypot(r,a);o>-2&&l<32&&(!n||l<n.d)&&(n={c:s,d:l})}if(n){let s=this.loc&&this.loc.road===this.layout.loop?this.loc.lateral:0;n.c.dodgeTo=s>-1?-5.4:3.8,n.c.honkT=4,n.c.wave=1.5,this.stats.yields++,this.emit("yield",{car:n.c.id})}this.passenger&&this.passenger.state==="riding"&&this.emit("animalRide",{animal:this.passenger.animal,reason:"honk"}),this.phase==="PARADE"&&this.emit("paradeHop")}_spawnCollectibles(){this.collectibles=[];let t=this.houseBayByDest.get(Ve[this.passenger.animal].dest),e=this._pos(),n={road:t.road,s:t.s},s=this.graph.distance(e,n),r=this.graph.walk(e,n,2),a=Math.min(10,Math.max(3,Math.floor(s/22)));for(let o=0;o<a;o++){let l=Math.floor((o+1)/(a+1)*r.length),c=r[Math.min(r.length-1,Math.max(0,l))];if(!c)continue;let h=(this.rng()*2-1)*2.2;this.collectibles.push({id:o,kind:o%2?"star":"balloon",x:c.x+c.rx*h,z:c.z+c.rz*h,alive:!0,popT:0})}}_updateCollectibles(t){let e=this.vehicle;for(let n of this.collectibles){if(!n.alive){n.popT+=t;continue}let s=e.x-n.x,r=e.z-n.z,a=Math.hypot(s,r);if(a<3.2&&a>.001){let o=Math.min(a,9*t);n.x+=s/a*o,n.z+=r/a*o}a<1.3&&(n.alive=!1,n.popT=0,this.rec.totals.collected++,this.emit("collect",{kind:n.kind,x:n.x,z:n.z}))}}_inBay(t){let e=this.vehicle,n=e.x-t.x,s=e.z-t.z,r=n*t.tx+s*t.tz,a=n*t.rx+s*t.rz;return Math.abs(r)<ma.alongRange&&a>-ue.halfWidth-.6&&a<ue.halfWidth+ue.bayDepth+1.2}_stopped(t,e){return this._inBay(t)&&this.vehicle.speed<ma.maxSpeed?this.dwell+=e:this.dwell=0,this.dwell>=ma.dwellSec}bayAhead(t){let e={road:t.road,s:t.s};return this.graph.distance(this.routePos(e),e)}routePos(t){let e=this.vehicle,n=null;for(let s of this.layout.roads){let r=s.nearest(e.x,e.z);if(r.dist>s.halfWidth+1)continue;let a={road:s,s:r.s},o=this.graph.distance(a,t);(!n||o<n.d)&&(n={pos:a,d:o})}return n?n.pos:this._pos()}targetBay(){return this.phase==="SEEK_PASSENGER"&&this.passenger&&this.passenger.bayId?this.bayById.get(this.passenger.bayId):this.phase==="DRIVE_TO_HOUSE"&&this.passenger?this.houseBayByDest.get(Ve[this.passenger.animal].dest):null}_phaseLogic(t){let e=this.rec;switch(this.phase){case"SEEK_PASSENGER":{(!this.passenger||this.passenger.state!=="waiting")&&this._ensurePending(!1);let n=this.bayById.get(this.passenger.bayId);if(this._stopped(n,t)){this.passenger.state="boarding",this.boardBay=n,this.stats.boardings++,this.setPhase("BOARDING"),this.emit("animal",{animal:this.passenger.animal,kind:"board"});break}let s=this.bayAhead(n),r=this.layout.loop.length;if(s>r-70&&s<r-14&&this.vehicle.speed>.5){let a=this._chooseBay(this.passenger.animal,45);a.id!==n.id&&(this.passenger.bayId=a.id,e.pending.bayId=a.id,this.stats.relocations++,this.emit("relocate",{from:n.id,to:a.id}),this.save())}break}case"BOARDING":this.phaseT>=oe.boardSec&&(af(e,e.pending.deliveryId),this.passenger.state="riding",this.checkpoint(),this.save(),this.setPhase("DRIVE_TO_HOUSE"),this._spawnCollectibles(),this.emit("animalRide",{animal:this.passenger.animal,reason:"start"}));break;case"DRIVE_TO_HOUSE":{let n=this.targetBay();if(this._stopped(n,t)){let s=e.pending.deliveryId;of(e,s,n.id),this.stats.deliveries++,this.washBay=n,this.passenger.state="alighting",this.alightBay=n,this.collectibles=[],this.checkpoint(),this.save(),this.setPhase("ALIGHT_AND_THANK"),this.emit("animal",{animal:this.passenger.animal,kind:"alight"})}break}case"ALIGHT_AND_THANK":this.passenger&&this.phaseT>=oe.alightSec&&this.passenger.state==="alighting"&&(this.passenger.state="thanks",this.emit("animal",{animal:this.passenger.animal,kind:"thanks"})),this.phaseT>=oe.alightSec+oe.thanksSec&&this._enterWash("choice");break;case"WASH_CHOICE":break;case"WASH_FINISH":if(this.phaseT>=oe.washShowerSec+oe.washRinseSec){let n=e.wash?e.wash.deliveryId:null;n&&cf(e,n)&&this.washCount++,this.washRig=null,this.passenger=null,e.phase==="PARADE"?this._enterParade():(this._ensurePending(!1),this.setPhase("SEEK_PASSENGER")),this.save(),this.emit("washDone")}break;case"PARADE":if(this.phaseT>=oe.paradeSec){let n=e.reward&&e.reward.setId===e.set.id?e.reward.offers:Kl(e.deco.owned,this.rng);hf(e,n),this.offers=e.reward?e.reward.offers.slice():[],this.paradeAnimals=[],this.save(),this.setPhase(e.phase==="DECORATION_CHOICE"?"DECORATION_CHOICE":"READY_FOR_NEXT_SET")}break;case"DECORATION_CHOICE":break;case"READY_FOR_NEXT_SET":this.decoFitT>0&&(this.decoFitT-=t),this.vehicle.throttleOn&&(this.stats.setStart!==null&&this.stats.setDurations.push(Math.round(this.time-this.stats.setStart)),this.stats.setStart=this.time,df(e),this.passenger=null,this._ensurePending(!1),this.phase="SEEK_PASSENGER",this.phaseT=0,this.emit("phase",{phase:"SEEK_PASSENGER"}),this.save());break;default:break}}_enterWash(t){this.washRig={x:this.vehicle.x,z:this.vehicle.z,heading:this.vehicle.heading},t==="finish"?(this.setPhase("WASH_FINISH"),this.phaseT=oe.washShowerSec*.5,this.emit("washColor",{color:this.rec.carColor})):(this.rec.phase="WASH_CHOICE",this.setPhase("WASH_CHOICE"),this.emit("washStart")),this.save()}chooseShower(t){return this.phase!=="WASH_CHOICE"||!_a.includes(t)?!1:(lf(this.rec,t),this.save(),this.setPhase("WASH_FINISH"),this.emit("washColor",{color:t}),!0)}_enterParade(){this.paradeAnimals=this.rec.set.delivered.slice(0,3),this.passenger=null,this.rec.phase="PARADE",this.checkpoint(),this.save(),this.setPhase("PARADE"),this.emit("parade",{animals:this.paradeAnimals})}chooseDecoration(t){if(this.phase!=="DECORATION_CHOICE")return!1;let e=uf(this.rec,t);return this.save(),e&&(this.decoFitT=oe.decoFitSec,this.emit("decoration",{id:t})),this.setPhase("READY_FOR_NEXT_SET"),e}pause(){this.paused=!0,this.vehicle.speed=0,this.vehicle.clearDrive(),(Bi.has(this.phase)||this.phase==="BOARDING")&&this.checkpoint(),this.save()}resume(){this.paused=!1,this.vehicle.speed=0,this.vehicle.clearDrive()}hint(t){let e=this.vehicle,n=this.phase;if(["BOARDING","ALIGHT_AND_THANK","WASH_FINISH","PARADE"].includes(n)){let r=n==="BOARDING"?oe.boardSec:n==="ALIGHT_AND_THANK"?oe.alightSec+oe.thanksSec:n==="PARADE"?oe.paradeSec:oe.washShowerSec+oe.washRinseSec;return{id:"progress",progress:Ue(this.phaseT/r,0,1)}}if(t.calibrating)return{id:"calibrate"};if(t.flat)return{id:"upright"};if(n==="WASH_CHOICE")return{id:this.phaseT>1.2?"shower":"none"};if(n==="DECORATION_CHOICE")return{id:this.phaseT>.8?"deco":"none"};if(this.paused)return{id:"none"};let s=this.targetBay();if(s&&e.speed>.8){let r=this.bayAhead(s);if(r<26&&r>-4)return{id:"brake"}}return s&&e.speed<.3&&this._inBay(s)?{id:"none"}:e.speed<.2&&!e.throttleOn&&this.idleT>(this.everThrottled?2.5:.6)?{id:"accel"}:e.speed>2&&(this.grassT>1.5||this.time-this.firstDriveT<5)?{id:t.mode==="motion"?"tilt":"drag"}:{id:"none"}}snapshot(){let t=this.vehicle,e=this.rec;return{phase:this.phase,phaseT:Math.round(this.phaseT*100)/100,paused:this.paused,speed:Math.round(t.speed*1e3)/1e3,x:Math.round(t.x*100)/100,z:Math.round(t.z*100)/100,heading:Math.round(t.heading*1e3)/1e3,wheel:Math.round(t.wheel*1e3)/1e3,needFresh:t.needFresh,throttleOn:t.throttleOn,onRoad:this.onRoad,road:this.loc?this.loc.road.id:null,s:this.loc?Math.round(this.loc.s*10)/10:null,lateral:this.loc?Math.round(this.loc.lateral*100)/100:null,passenger:this.passenger?{...this.passenger}:null,targetBay:this.targetBay()?this.targetBay().id:null,targetAhead:this.targetBay()?Math.round(this.bayAhead(this.targetBay())):null,deliveries:e.totals.deliveries,washes:e.totals.washes,washCount:this.washCount,sets:e.totals.sets,setN:e.set.n,setId:e.set.id,setDelivered:e.set.delivered.slice(),carColor:e.carColor,rewardId:e.reward?e.reward.granted:null,rewardCount:e.deco.owned.length,equipped:{...e.deco.equipped},offers:this.offers.slice(),fastTurns:this.fastTurns,honks:this.honks,collected:e.totals.collected,collectiblesAlive:this.collectibles.filter(n=>n.alive).length,byAnimal:{...e.totals.byAnimal},pending:e.pending?{...e.pending}:null,savedPhase:e.phase,stats:{...this.stats,setDurations:this.stats.setDurations.slice()},traffic:this.traffic.map(n=>({s:Math.round(n.s),lat:Math.round(n.lat*10)/10,speed:Math.round(n.speed*10)/10}))}}};var Ll=class{constructor(){this.ctx=null,this.ok=!1,this.voices=0,this.peakVoices=0,this.started=!1,this.volume=.8,this.muted=!1,this.musicStep=0,this.nextMusicTime=0,this.musicBright=0,this.duckUntil=0,this.createdContexts=0,this.lastHorn=0}unlock(){try{if(!this.ctx){let s=window.AudioContext||window.webkitAudioContext;if(!s)return;this.ctx=new s,this.createdContexts++,this._build()}let t=this.ctx;if(t.state!=="running"){let s=t.resume&&t.resume();s&&s.catch&&s.catch(()=>{})}let e=t.createBuffer(1,1,22050),n=t.createBufferSource();n.buffer=e,n.connect(t.destination),n.start(0),this.ok=!0}catch{this.ok=!1}}get running(){return!!this.ctx&&this.ctx.state==="running"}_build(){let t=this.ctx;this.master=t.createGain(),this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.knee.value=12,this.comp.ratio.value=4,this.comp.attack.value=.01,this.comp.release.value=.25,this.master.connect(this.comp),this.comp.connect(t.destination),this.engineBus=t.createGain(),this.engineBus.gain.value=.55,this.engineBus.connect(this.master),this.sfxBus=t.createGain(),this.sfxBus.gain.value=.9,this.sfxBus.connect(this.master),this.musicBus=t.createGain(),this.musicBus.gain.value=.16,this.musicBus.connect(this.master),this._applyVolume(),this.engFilter=t.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=420,this.engFilter.Q.value=.7,this.engGain=t.createGain(),this.engGain.gain.value=0,this.engOsc1=t.createOscillator(),this.engOsc1.type="triangle",this.engOsc1.frequency.value=75,this.engOsc2=t.createOscillator(),this.engOsc2.type="sine",this.engOsc2.frequency.value=150;let e=t.createGain();e.gain.value=.35,this.engOsc1.connect(this.engFilter),this.engOsc2.connect(e),e.connect(this.engFilter),this.noiseBuf=this._noise(1.5);let n=t.createBufferSource();n.buffer=this.noiseBuf,n.loop=!0;let s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=180;let r=t.createGain();r.gain.value=.25,n.connect(s),s.connect(r),r.connect(this.engFilter),this.engFilter.connect(this.engGain),this.engGain.connect(this.engineBus),this.engOsc1.start(),this.engOsc2.start(),n.start();let a=t.createBufferSource();a.buffer=this.noiseBuf,a.loop=!0;let o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=2400,o.Q.value=.8,this.rustleGain=t.createGain(),this.rustleGain.gain.value=0,a.connect(o),o.connect(this.rustleGain),this.rustleGain.connect(this.sfxBus),a.start(),this.nextMusicTime=t.currentTime+.3}_noise(t){let e=this.ctx,n=e.createBuffer(1,Math.floor(e.sampleRate*t),e.sampleRate),s=n.getChannelData(0),r=0;for(let a=0;a<s.length;a++){let o=Math.random()*2-1;r=(r+.02*o)/1.02,s[a]=o*.5+r*3}return n}setVolume(t,e){this.volume=t,this.muted=e,this._applyVolume()}_applyVolume(){if(!this.master)return;let t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(this.muted?0:.7*this.volume,t,.05)}updateEngine(t,e,n){if(!this.ctx||!this.engGain)return;let s=this.ctx.currentTime,r=75+85*Math.min(1,t);this.engOsc1.frequency.setTargetAtTime(r,s,.1),this.engOsc2.frequency.setTargetAtTime(r*2,s,.1),this.engFilter.frequency.setTargetAtTime(380+500*t,s,.12),this.engGain.gain.setTargetAtTime(e?.16+.22*t:0,s,.12),this.rustleGain.gain.setTargetAtTime(n&&t>.05?.05+.08*t:0,s,.1)}_voice(t){if(!this.running||this.voices>=10)return null;this.voices++,this.peakVoices=Math.max(this.peakVoices,this.voices);let e=this.ctx.createGain();return e.gain.value=0,e.connect(this.sfxBus),setTimeout(()=>{this.voices=Math.max(0,this.voices-1);try{e.disconnect()}catch{}},(t+.15)*1e3),e}_tone({type:t="sine",f0:e,f1:n,dur:s,gain:r=.3,at:a=0,attack:o=.015,vib:l=0,filter:c=null}){let h=this._voice(s+a);if(!h)return;let u=this.ctx,d=u.currentTime+a,f=u.createOscillator();f.type=t,f.frequency.setValueAtTime(e,d),n&&f.frequency.exponentialRampToValueAtTime(n,d+s);let g=f;if(c){let _=u.createBiquadFilter();_.type=c.type||"lowpass",_.frequency.value=c.f,_.Q.value=c.q||1,f.connect(_),g=_}if(l){let _=u.createOscillator();_.frequency.value=l;let m=u.createGain();m.gain.value=e*.03,_.connect(m),m.connect(f.frequency),_.start(d),_.stop(d+s)}g.connect(h),h.gain.setValueAtTime(0,d),h.gain.linearRampToValueAtTime(r,d+o),h.gain.setTargetAtTime(0,d+Math.max(o,s*.6),s*.18),f.start(d),f.stop(d+s+.1)}_noiseBurst({dur:t,f:e,q:n=1,gain:s=.25,at:r=0,type:a="bandpass"}){let o=this._voice(t+r);if(!o)return;let l=this.ctx,c=l.currentTime+r,h=l.createBufferSource();h.buffer=this.noiseBuf;let u=l.createBiquadFilter();u.type=a,u.frequency.value=e,u.Q.value=n,h.connect(u),u.connect(o),o.gain.setValueAtTime(0,c),o.gain.linearRampToValueAtTime(s,c+.01),o.gain.setTargetAtTime(0,c+t*.3,t*.25),h.start(c,Math.random()),h.stop(c+t+.1)}duck(t=1){this.ctx&&(this.duckUntil=this.ctx.currentTime+t)}horn(){if(!this.running)return;let t=this.ctx.currentTime;t-this.lastHorn<.18||(this.lastHorn=t,this._tone({type:"triangle",f0:220,dur:.38,gain:.22,filter:{f:1400}}),this._tone({type:"triangle",f0:330,dur:.38,gain:.18,filter:{f:1600}}))}bump(){this._noiseBurst({dur:.18,f:220,q:.8,gain:.25,type:"lowpass"}),this._tone({f0:140,f1:90,dur:.16,gain:.18})}pop(){this._noiseBurst({dur:.08,f:1800,q:1.5,gain:.2}),this._tone({f0:900,f1:1500,dur:.12,gain:.12})}chime(){[1046,1318,1568].forEach((t,e)=>this._tone({f0:t,dur:.35,gain:.1,at:e*.07}))}squeal(){this._tone({type:"sine",f0:1500,f1:1100,dur:.32,gain:.07,vib:18}),this._noiseBurst({dur:.3,f:3200,q:3,gain:.05})}wash(){this._noiseBurst({dur:1.2,f:1600,q:.5,gain:.12})}rinse(){this._noiseBurst({dur:1.6,f:2600,q:.4,gain:.1});for(let t=0;t<5;t++)this._tone({f0:1200+t*220,dur:.18,gain:.05,at:.3+t*.2})}sparkle(){[1568,1976,2349,2637].forEach((t,e)=>this._tone({f0:t,dur:.3,gain:.07,at:e*.09}))}click(){this._tone({f0:660,f1:880,dur:.08,gain:.1})}fanfare(){[523,659,784,1046].forEach((t,e)=>this._tone({type:"triangle",f0:t,dur:.4,gain:.12,at:e*.14,filter:{f:2400}})),this.duck(1.4)}splash(){this._noiseBurst({dur:.5,f:900,q:.6,gain:.18})}stomp(){this._tone({f0:110,f1:60,dur:.2,gain:.2})}drum(){this._noiseBurst({dur:.08,f:700,q:2,gain:.16}),this._tone({f0:240,f1:160,dur:.1,gain:.12})}bubble(){this._tone({f0:500,f1:1100,dur:.1,gain:.06})}animal(t,e){if(!this.running)return;this.duck(1.2);let n=e==="thanks"?1.25:1;switch(t){case"rabbit":this._tone({f0:1100,f1:1700,dur:.12,gain:.14*n}),this._tone({f0:1300,f1:2e3,dur:.12,gain:.12*n,at:.15}),e==="thanks"&&this._tone({f0:1500,f1:2300,dur:.18,gain:.12,at:.32});break;case"penguin":this._tone({type:"square",f0:700,f1:520,dur:.14,gain:.07*n,filter:{f:1600}}),this._tone({type:"square",f0:760,f1:560,dur:.14,gain:.07*n,at:.18,filter:{f:1600}}),e!=="board"&&this.drum();break;case"bear":this._tone({type:"triangle",f0:180,f1:e==="thanks"?260:200,dur:.6,gain:.2*n,vib:5,filter:{f:700}}),this._tone({type:"sine",f0:270,dur:.5,gain:.08,at:.1,vib:5});break;default:for(let s=0;s<(e==="thanks"?3:2);s++)this._tone({type:"square",f0:620,f1:420,dur:.12,gain:.08*n,at:s*.17,filter:{type:"bandpass",f:900,q:2}})}}updateMusic(t){if(!this.running||!this.musicBus)return;let n=this.ctx.currentTime;this.musicBright+=((t?1:0)-this.musicBright)*.02;let s=n<this.duckUntil?.35:1;this.musicBus.gain.setTargetAtTime((.12+.06*this.musicBright)*s,n,.15),this.nextMusicTime<n-.5&&(this.nextMusicTime=n+.05);let r=.3,a=[[262,330,392],[220,262,330],[175,220,262],[196,247,294]],o=[523,587,659,784,659,587,523,440,523,659,784,880,784,659,587,523];for(;this.nextMusicTime<n+.25;){let l=this.musicStep++,c=this.nextMusicTime-n,h=a[Math.floor(l/8)%4];l%4===0&&this._mtone(h[0]/2,r*3.5,.18,c,"triangle"),l%2===0&&this._mtone(h[l/2%3],r*.9,.06,c,"sine"),(l%2===1||this.musicBright>.5)&&this._mtone(o[l%16],r*.8,.07,c,"sine"),this.nextMusicTime+=r}}_mtone(t,e,n,s,r){let a=this.ctx,o=a.currentTime+Math.max(0,s),l=a.createOscillator();l.type=r,l.frequency.value=t;let c=a.createGain();c.gain.value=0,l.connect(c),c.connect(this.musicBus),c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(n,o+.02),c.gain.setTargetAtTime(0,o+e*.4,e*.25),l.start(o),l.stop(o+e+.2),l.onended=()=>{try{c.disconnect()}catch{}}}suspend(){try{this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}catch{}}snapshot(){return{state:this.ctx?this.ctx.state:"none",voices:this.voices,peakVoices:this.peakVoices,contexts:this.createdContexts,volume:this.volume,muted:this.muted}}};function ff(i,t,e){return{l:i.left-t,r:i.right+t,t:i.top-e,b:i.bottom+e}}function pf(i,t,e){return t>=i.l&&t<=i.r&&e>=i.t&&e<=i.b}var Dl=class{constructor({accel:t,brake:e,horn:n,field:s,win:r=window}){this.el={accel:t,brake:e,horn:n,field:s},this.win=r,this.enabled={drive:!1,horn:!1},this.touchSteerAllowed=!1,this.accel=null,this.brake=null,this.steerOwner=null,this.field=new Map,this.touchSteerTarget=0,this.touchSteer=0,this.keys=new Set,this.keyTilt=0,this.hornQueue=0,this.recenterQueue=0,this.lastTouchSteerUse=-1/0,this.dragFullPx=js.dragFullTurnPx,this.counters={downs:0,cancels:0,releases:0},this.blockKeys=()=>!1,this._bind()}_bind(){let{accel:t,brake:e,horn:n,field:s}=this.el,r={passive:!1};t.addEventListener("pointerdown",a=>this._accelDown(a),r),e.addEventListener("pointerdown",a=>this._brakeDown(a),r),n.addEventListener("pointerdown",a=>this._hornDown(a),r),s.addEventListener("pointerdown",a=>this._fieldDown(a),r);for(let a of[t,e,n,s])a.addEventListener("pointermove",o=>this._move(o),r),a.addEventListener("pointerup",o=>this._end(o,"up")),a.addEventListener("pointercancel",o=>this._end(o,"cancel")),a.addEventListener("lostpointercapture",o=>this._end(o,"lost")),a.addEventListener("contextmenu",o=>o.preventDefault());this.win.addEventListener("keydown",a=>this._key(a,!0)),this.win.addEventListener("keyup",a=>this._key(a,!1))}_capture(t){try{t.currentTarget.setPointerCapture(t.pointerId)}catch{}}_accelDown(t){if(t.preventDefault(),this.counters.downs++,!this.enabled.drive||this.accel)return;this._capture(t);let e=this.el.accel.getBoundingClientRect();this.accel={id:t.pointerId,x0:t.clientX,y0:t.clientY,corridor:ff(e,js.corridorPadX,js.corridorPadY)}}_brakeDown(t){t.preventDefault(),this.counters.downs++,!(!this.enabled.drive||this.brake)&&(this._capture(t),this.brake={id:t.pointerId,corridor:ff(this.el.brake.getBoundingClientRect(),40,40)})}_hornDown(t){t.preventDefault(),this.counters.downs++,this.enabled.horn&&(this._capture(t),this.hornQueue++,this.el.horn.classList.add("pressed"),this._hornId=t.pointerId)}_fieldDown(t){t.target===this.el.field&&(t.preventDefault(),this.counters.downs++,this._capture(t),this.field.set(t.pointerId,{x0:t.clientX}),this.enabled.drive&&this.touchSteerAllowed&&!this.steerOwner&&(this.steerOwner={id:t.pointerId,x0:t.clientX,src:"field"}))}_move(t){let e=t.pointerId;if(this.accel&&this.accel.id===e){if(!pf(this.accel.corridor,t.clientX,t.clientY)){this._releaseAccel();return}!this.steerOwner&&this.touchSteerAllowed&&Math.abs(t.clientX-this.accel.x0)>8&&(this.steerOwner={id:e,x0:this.accel.x0,src:"accel"})}this.brake&&this.brake.id===e&&(pf(this.brake.corridor,t.clientX,t.clientY)||(this.brake=null,this.counters.releases++)),this.steerOwner&&this.steerOwner.id===e&&(t.preventDefault(),this.touchSteerTarget=Ue((t.clientX-this.steerOwner.x0)/this.dragFullPx,-1,1),Math.abs(this.touchSteerTarget)>.1&&(this.lastTouchSteerUse=performance.now()))}_releaseAccel(){this.steerOwner&&this.accel&&this.steerOwner.id===this.accel.id&&(this.steerOwner=null,this.touchSteerTarget=0),this.accel=null,this.counters.releases++}_end(t,e){let n=t.pointerId;e==="cancel"&&this.counters.cancels++,this.accel&&this.accel.id===n&&this._releaseAccel(),this.brake&&this.brake.id===n&&(this.brake=null,this.counters.releases++),this.steerOwner&&this.steerOwner.id===n&&(this.steerOwner=null,this.touchSteerTarget=0),this._hornId===n&&(this.el.horn.classList.remove("pressed"),this._hornId=null),this.field.delete(n)}_key(t,e){let n=t.target;if(n&&(n.tagName==="INPUT"||n.tagName==="SELECT"||n.tagName==="TEXTAREA"||n.isContentEditable)||this.blockKeys())return;let s=t.key.length===1?t.key.toLowerCase():t.key,a={ArrowLeft:"left",a:"left",ArrowRight:"right",d:"right",ArrowUp:"up",w:"up",ArrowDown:"down",s:"down"," ":"horn",c:"center"}[s];if(a){if(t.preventDefault(),a==="horn"){e&&!t.repeat&&this.enabled.horn&&this.hornQueue++;return}if(a==="center"){e&&!t.repeat&&this.recenterQueue++;return}e?(this.keys.add(a),this.usedKeyboard=!0):this.keys.delete(a)}}clearAll(){for(let t of[this.accel,this.brake,this.steerOwner])if(t)try{this.el.accel.releasePointerCapture(t.id)}catch{}this.accel=null,this.brake=null,this.steerOwner=null,this.touchSteerTarget=0,this.keys.clear(),this.field.clear(),this.el.horn.classList.remove("pressed")}setDriveEnabled(t){this.enabled.drive&&!t&&this.clearAll(),this.enabled.drive=t}update(t){this.steerOwner?this.touchSteer=ti(this.touchSteer,this.touchSteerTarget,12*t):this.touchSteer=ti(this.touchSteer,0,js.returnPerSec*t);let e=(this.keys.has("right")?1:0)-(this.keys.has("left")?1:0),n=e*Qs.tiltDeg,s=Qs.rampDps;e===0?s=Qs.returnDps:Math.sign(this.keyTilt)===-e&&Math.abs(this.keyTilt)>2&&(s=Qs.reverseRampDps),this.keyTilt=ti(this.keyTilt,n,s*t)}get throttle(){return!!this.accel||this.keys.has("up")}get braking(){return!!this.brake||this.keys.has("down")}get touchSteering(){return!!this.steerOwner}snapshot(){return{accel:!!this.accel,brake:!!this.brake,steerOwner:this.steerOwner?this.steerOwner.src:null,touchSteer:Math.round(this.touchSteer*1e3)/1e3,keyTilt:Math.round(this.keyTilt*10)/10,keys:[...this.keys],...this.counters}}};var Te={IDLE:"idle",CALIBRATING:"calibrating",READY:"ready",FLAT:"flat",STALE:"stale",FAILED:"failed"},aa=class{constructor({fullLockDeg:t=24,config:e=pa}={}){this.cfg=e,this.fullLockDeg=t,this.events=[],this.counters={accepted:0,rejected:0,fastTurns:0,epochs:0,calibrations:0},this.hardReset()}setFullLock(t){this.fullLockDeg=t}hardReset(){this.status=Te.IDLE,this.g=null,this.lastT=null,this.lastWall=null,this.epochAngle=null,this.centre=null,this.theta=0,this.prevTheta=null,this.omega=0,this.steer=0,this.projection=0,this.phi=0,this.calib=null,this.flatSince=null,this.uprightSince=null,this.fastSince=null,this.fastArmed=!0,this.lastFastT=-1/0,this.wantCalibration=!1}startCalibration(){this.status=Te.CALIBRATING,this.calib={window:[],firstT:null},this.prevTheta=null,this.omega=0,this.fastSince=null,this.centre=null,this.counters.calibrations++}_emit(t,e={}){this.events.push({type:t,...e})}drainEvents(){let t=this.events;return this.events=[],t}push(t,e){let n=this.cfg;if(!t)return this.counters.rejected++,!1;let{x:s,y:r}=t,a=xi(t.z)?t.z:0,o=t.timeMs;if(!xi(s)||!xi(r)||!xi(o))return this.counters.rejected++,!1;if(this.lastT!==null&&o<=this.lastT)return this.counters.rejected++,!1;let l=Math.hypot(s,r,a);if(l>n.maxMagnitude||l<n.minMagnitude)return this.counters.rejected++,!1;let c=jl(t.screenAngleDeg),h=this.lastT===null?1/0:(o-this.lastT)/1e3,u=!(h<=n.gapSec)||this.g===null;if(this.epochAngle!==null&&c!==this.epochAngle&&(this.counters.epochs++,this._emit("epoch",{from:this.epochAngle,to:c}),u=!0,this.flatSince=null,this.uprightSince=null,this.startCalibration()),this.epochAngle=c,u)this.g={x:s,y:r},this.prevTheta=null,this.omega=0,this.fastSince=null;else{let _=1-Math.exp(-h/n.tauSec);this.g.x+=_*(s-this.g.x),this.g.y+=_*(r-this.g.y)}this.lastT=o,this.lastWall=xi(e)?e:o,this.counters.accepted++,(this.status===Te.IDLE||this.status===Te.STALE)&&(this.status===Te.STALE&&this._emit("resumed"),this.startCalibration()),this.wantCalibration&&(this.wantCalibration=!1,this.startCalibration());let d=Math.hypot(this.g.x,this.g.y);this.projection=d;let f=Math.atan2(this.g.y,this.g.x)*is,g=ss(f-c);switch(this.phi=g,this.status){case Te.CALIBRATING:u&&this.calib&&(this.calib.window=[],this.calib.firstT=null),this._calibrate(o,g,d);break;case Te.READY:this._ready(o,g,d,u?null:h);break;case Te.FLAT:this._flat(o,d);break;case Te.FAILED:break;default:break}if(this.status!==Te.READY){let _=n.neutralEasePerSec*(isFinite(h)?Math.min(h,.1):.016);this.steer=ti(this.steer,0,_)}return!0}_calibrate(t,e,n){let s=this.cfg,r=this.calib;r.firstT===null&&(r.firstT=t);let a=n>=s.uprightAbove;if(!a)r.window=[];else{let o=r.window;if(o.length){let l=mf(o);Math.abs(ss(e-l))>s.calibToleranceDeg&&(o.length=0)}for(o.push({t,phi:e});o.length>2&&t-o[1].t>=s.calibWindowMs;)o.shift();if(o.length>=3&&t-o[0].t>=s.calibWindowMs){this.centre=mf(o),this.status=Te.READY,this.theta=ss(e-this.centre),this.prevTheta=null,this.flatSince=null,this.calib=null,this.steer=0,this._emit("calibrated",{centre:this.centre});return}}t-r.firstT>=s.calibGiveUpMs&&(this.status=Te.FAILED,this.calib=null,this._emit("calibFailed",{flat:!a}))}_ready(t,e,n,s){let r=this.cfg;if(n<r.flatBelow){if(this.flatSince===null&&(this.flatSince=t),t-this.flatSince>=r.flatForMs){this.status=Te.FLAT,this.uprightSince=null,this.prevTheta=null,this.fastSince=null,this._emit("flat");return}this.prevTheta=null;return}this.flatSince=null;let a=ss(e-this.centre);this.prevTheta!==null&&s&&s>0?this.omega=ss(a-this.prevTheta)/s:this.omega=0,this.prevTheta=a,this.theta=a,this.steer=eu(a,r.deadzoneDeg,this.fullLockDeg),this._fastTurn(t)}_fastTurn(t){let e=this.cfg;if(!(Math.abs(this.omega)>=e.fastTurnOmegaDps&&Math.abs(this.theta)>=e.fastTurnOffsetDeg)){this.fastSince=null,this.fastArmed=!0;return}this.fastSince===null&&(this.fastSince=t),this.fastArmed&&t-this.fastSince>=e.fastTurnSustainMs&&t-this.lastFastT>=e.fastTurnCooldownMs&&(this.lastFastT=t,this.fastArmed=!1,this.counters.fastTurns++,this._emit("fastTurn",{dir:Math.sign(this.theta)}))}_flat(t,e){let n=this.cfg;e>n.uprightAbove?(this.uprightSince===null&&(this.uprightSince=t),t-this.uprightSince>=n.uprightForMs&&(this._emit("upright"),this.startCalibration())):this.uprightSince=null}update(t,e){let n=this.cfg;this.lastWall!==null&&this.status!==Te.IDLE&&this.status!==Te.STALE&&t-this.lastWall>n.staleMs&&(this.status=Te.STALE,this.prevTheta=null,this.fastSince=null,this.g=null,this._emit("stale")),this.status!==Te.READY&&xi(e)&&(this.steer=ti(this.steer,0,n.neutralEasePerSec*Math.min(e,.1)))}recenter(){if(this.status===Te.IDLE||this.status===Te.STALE){this.wantCalibration=!0;return}this.startCalibration()}snapshot(){return{status:this.status,theta:ra(this.theta),steer:ra(this.steer,3),omega:ra(this.omega),centre:this.centre===null?null:ra(this.centre),projection:ra(this.projection,2),epochAngle:this.epochAngle,fullLockDeg:this.fullLockDeg,...this.counters}}};function mf(i){let t=0,e=0;for(let n of i)t+=Math.cos(n.phi/is),e+=Math.sin(n.phi/is);return Math.atan2(e,t)*is}function ra(i,t=1){let e=10**t;return Math.round(i*e)/e}function Nl(i,t=0,{flat:e=!1,refDeg:n=0}={}){if(e)return{x:0,y:0,z:9.81};let s=(90+jl(t)+n+i)/is;return{x:9.81*Math.cos(s),y:9.81*Math.sin(s),z:0}}function gf(i=window){try{let t=i.screen&&i.screen.orientation;if(t&&typeof t.angle=="number")return t.angle}catch{}return typeof i.orientation=="number"?i.orientation:null}function _f(i=window){try{let t=i.screen.width,e=i.screen.height,n=Math.min(t,e),s=Math.max(t,e);return(i.navigator.maxTouchPoints||0)>0?n===834&&s===1194?"ipad11":n===1024&&s===1366||n>=700?"ipad129":"phone":"phone"}catch{return"phone"}}var Ul=class{constructor({now:t,win:e=window,profile:n="phone"}){this.now=t,this.win=e,this.profile=n;let s=Ks[n].fullLockDeg;this.sensor=new aa({fullLockDeg:s}),this.keyMotion=new aa({fullLockDeg:s}),this.mode="pending",this.sensorState="unknown",this.listening=!1,this.injecting=!1,this.permissionAsked=!1,this.requestedInGesture=!1,this.waitStart=null,this.requestStart=null,this.events=[],this.lastAngle=null,this.aspectPortrait=null,this.keyClock=0,this.validSamples=0,this.lateSensorOffer=!1,this.log=[],this._onMotion=r=>this._deviceMotion(r)}setProfile(t){Ks[t]&&(this.profile=t,this.sensor.setFullLock(Ks[t].fullLockDeg),this.keyMotion.setFullLock(Ks[t].fullLockDeg))}_emit(t,e={}){this.events.push({type:t,...e})}drainEvents(){let t=this.events;return this.events=[],t}installListener(){if(!this.listening)try{"DeviceMotionEvent"in this.win&&(this.win.addEventListener("devicemotion",this._onMotion),this.listening=!0)}catch{}}startFromGesture(){this.startedAt=this.now(),this.installListener();let t=this.win.DeviceMotionEvent,e=this.win.isSecureContext!==!1;if(!t||!e){this.sensorState="unavailable",this._toTouch("unavailable");return}if(typeof t.requestPermission=="function"){this.permissionAsked=!0,this.requestedInGesture=!0,this.sensorState="requesting",this.requestStart=this.now();let n;try{n=t.requestPermission()}catch{this.sensorState="error",this._toTouch("throw");return}Promise.resolve(n).then(s=>{this.injecting||(s==="granted"?this._beginWaiting():(this.sensorState="denied",this._toTouch("denied")))},()=>{this.injecting||(this.sensorState="error",this._toTouch("rejected"))});return}this._beginWaiting()}_beginWaiting(){this.sensorState!=="streaming"&&(this.sensorState="waiting",this.waitStart=this.now(),this.mode==="touch"&&this.provisionalTouch&&(this.lateSensorOffer=!0))}_toTouch(t){this.log.push(t),this.mode!=="touch"&&this.mode!=="keyboard"&&(this.mode="touch",this._emit("mode",{mode:"touch",reason:t}))}_deviceMotion(t){if(this.injecting)return;let e=t&&t.accelerationIncludingGravity;if(!e)return;let n=this.currentAngle(),s=this.now(),r=t.timeStamp,a=typeof r=="number"&&r>0&&r<=s+1&&r>s-5e3&&!this.manualClock?r:s;this.handleSample({x:e.x,y:e.y,z:e.z,timeMs:a,screenAngleDeg:n})}currentAngle(){let t=gf(this.win);return t!==null?t:this.win.innerHeight>=this.win.innerWidth?0:90}handleSample(t){if(!this.sensor.push(t,this.now()))return!1;if(this.validSamples++,this.sensorState!=="streaming"){let n=this.sensorState;(["waiting","unknown","silent","dropped","requesting"].includes(n)||this.injecting)&&(this.sensorState="streaming",this.mode==="pending"?(this.mode="motion",this._emit("mode",{mode:"motion",reason:"stream"})):this.mode==="touch"&&!this.injecting&&(this.lateSensorOffer=!0))}return!0}tryMotion(){return(this.sensorState==="denied"||this.sensorState==="unavailable"||this.sensorState==="error")&&!this.injecting?!1:(this.mode="motion",this.lateSensorOffer=!1,this.provisionalTouch=!1,this.sensor.recenter(),this.sensorState!=="streaming"&&this._beginWaiting(),this._emit("mode",{mode:"motion",reason:"user"}),!0)}setMode(t){t==="motion"?(this.mode="motion",this.sensor.recenter(),this.sensorState!=="streaming"&&this._beginWaiting()):this.mode=t,this.lateSensorOffer=!1,this.provisionalTouch=!1,this._emit("mode",{mode:this.mode,reason:"set"})}recenter(){this.sensor.recenter(),this.keyMotion.recenter()}checkOrientation(){let t=gf(this.win),e=!1;if(t!==null)this.lastAngle!==null&&((t-this.lastAngle)%360+360)%360!==0&&(e=!0),this.lastAngle=t;else{let n=this.win.innerHeight>=this.win.innerWidth;this.aspectPortrait!==null&&n!==this.aspectPortrait&&(e=!0),this.aspectPortrait=n}return e&&this._emit("orientation"),e}update(t,e){let n=this.now();if(this.lastUpdate!==void 0&&n-this.lastUpdate>400){let r=n-this.lastUpdate-16;this.sensor.lastWall!==null&&(this.sensor.lastWall+=r),this.waitStart!==null&&(this.waitStart+=r),this.stallsIgnored=(this.stallsIgnored||0)+1,this.stallMs=(this.stallMs||0)+r}this.lastUpdate=n,this.injecting||this.sensor.update(n,t),this.sensorState==="waiting"&&this.waitStart!==null&&n-this.waitStart>pa.firstSampleTimeoutMs&&(this.sensorState="silent",this._toTouch("silent")),this.sensorState==="requesting"&&this.requestStart!==null&&n-this.requestStart>4e3&&this.mode==="pending"&&(this.provisionalTouch=!0,this._toTouch("unresolved")),this.usableAt===void 0&&this.startedAt!==void 0&&this.resolved&&(this.usableAt=n-this.startedAt);for(let r of this.sensor.drainEvents())this.mode==="motion"&&this._emit("motion",{source:"sensor",ev:r}),r.type==="stale"&&this.mode==="motion"&&(this.sensorState="dropped",this._toTouch("stale")),r.type==="stale"&&this.mode!=="motion"&&(this.sensorState="dropped"),r.type==="calibFailed"&&this.mode==="motion"&&this._toTouch("calibFailed");this.keyClock=n;let s=Nl(e||0,0);this.keyMotion.status===Te.IDLE&&this.keyMotion.startCalibration(),this.keyMotion.push({...s,timeMs:n,screenAngleDeg:0},n);for(let r of this.keyMotion.drainEvents())this.mode!=="motion"&&this._emit("motion",{source:"key",ev:r})}get motionStatus(){return this.sensor.status}get blocksDriving(){return this.mode==="pending"?!0:this.mode!=="motion"?!1:this.sensor.status===Te.CALIBRATING||this.sensor.status===Te.IDLE}get resolved(){return this.mode==="touch"||this.mode==="keyboard"?!0:this.mode==="motion"&&(this.sensor.status===Te.READY||this.sensor.status===Te.FLAT)}get flat(){return this.mode==="motion"&&this.sensor.status===Te.FLAT}steer(t){return this.mode==="motion"?this.sensor.steer:t.touchSteering||Math.abs(t.touchSteer)>.001?t.touchSteer:this.keyMotion.steer}snapshot(){return{mode:this.mode,sensorState:this.sensorState,profile:this.profile,permissionAsked:this.permissionAsked,requestedInGesture:this.requestedInGesture,injecting:this.injecting,validSamples:this.validSamples,lateSensorOffer:this.lateSensorOffer,log:this.log.slice(-6),usableAtMs:this.usableAt===void 0?null:Math.round(this.usableAt),stallsIgnored:this.stallsIgnored||0,stallMs:Math.round(this.stallMs||0),sensorAgeMs:this.sensor.lastWall===null?null:Math.round(this.now()-this.sensor.lastWall),motion:this.sensor.snapshot(),key:{status:this.keyMotion.status,theta:Math.round(this.keyMotion.theta*10)/10,steer:Math.round(this.keyMotion.steer*1e3)/1e3,fastTurns:this.keyMotion.counters.fastTurns}}}};function Tn(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function De(i,t,e,n=10){i.fillStyle=t,i.fill(),i.lineWidth=n,i.strokeStyle=e,i.lineJoin="round",i.stroke()}function oa(i,t,e=256,{plate:n=!0}={}){let s=Hn[t];i.save(),i.clearRect(0,0,e,e),i.scale(e/256,e/256),n&&(Tn(i,8,8,240,240,56),De(i,"#FFFDF5",s.color,14));let r=s.color,a=s.dark;if(i.lineCap="round",t==="castle"){Tn(i,70,120,116,90,10),De(i,r,a),Tn(i,46,92,44,118,10),De(i,r,a),Tn(i,166,92,44,118,10),De(i,r,a);for(let o of[68,188])i.beginPath(),i.moveTo(o-30,96),i.lineTo(o,34),i.lineTo(o+30,96),i.closePath(),De(i,a,a,8);for(let o=0;o<3;o++)Tn(i,86+o*32,104,20,20,4),De(i,r,a,8);i.beginPath(),i.moveTo(110,210),i.lineTo(110,175),i.arc(128,175,18,Math.PI,0),i.lineTo(146,210),i.closePath(),De(i,"#FFFFFF",a,8)}else if(t==="dome")Tn(i,50,140,156,72,12),De(i,r,a),i.beginPath(),i.moveTo(56,146),i.arc(128,146,72,Math.PI,0),i.closePath(),De(i,r,a),i.beginPath(),i.arc(128,66,14,0,Math.PI*2),De(i,"#FFFFFF",a,8),i.beginPath(),i.arc(128,116,20,0,Math.PI*2),De(i,"#FFFFFF",a,8),Tn(i,110,166,36,46,14),De(i,"#FFFFFF",a,8);else if(t==="bakery")Tn(i,60,122,136,90,10),De(i,r,a),Tn(i,158,44,24,50,6),De(i,a,a,6),i.beginPath(),i.moveTo(34,130),i.lineTo(128,40),i.lineTo(222,130),i.closePath(),De(i,a,a,10),i.beginPath(),i.moveTo(56,124),i.lineTo(128,58),i.lineTo(200,124),i.closePath(),De(i,r,r,2),i.beginPath(),i.arc(128,100,14,0,Math.PI*2),De(i,"#FFFFFF",a,7),Tn(i,112,160,32,52,8),De(i,"#FFFFFF",a,8);else{i.beginPath(),i.moveTo(56,196),i.lineTo(56,112),i.quadraticCurveTo(56,44,128,44),i.quadraticCurveTo(200,44,200,112),i.lineTo(200,196),i.closePath(),De(i,r,a),i.beginPath(),i.moveTo(106,196),i.lineTo(106,140),i.arc(128,140,22,Math.PI,0),i.lineTo(150,196),i.closePath(),De(i,"#FFFFFF",a,8),i.beginPath(),i.arc(128,90,13,0,Math.PI*2),De(i,"#FFFFFF",a,7),i.lineWidth=12,i.strokeStyle="#4FB6E8";for(let o of[214,236]){i.beginPath();for(let l=36;l<=220;l+=4){let c=o+Math.sin(l/14)*6;l===36?i.moveTo(l,c):i.lineTo(l,c)}i.stroke()}}i.restore()}function Ih(i,t,e=256){let n=Ve[t];i.save(),i.clearRect(0,0,e,e),i.scale(e/256,e/256);let s="#3B3350";i.lineWidth=9,i.strokeStyle=s;let r=(a,o,l,c)=>{i.beginPath(),i.arc(a,o,l,0,Math.PI*2),i.fillStyle=c,i.fill(),i.stroke()};if(t==="rabbit"){for(let a of[-34,34])i.beginPath(),i.ellipse(128+a,66,20,56,a*.004,0,Math.PI*2),i.fillStyle=n.body,i.fill(),i.stroke(),i.beginPath(),i.ellipse(128+a,70,9,38,0,0,Math.PI*2),i.fillStyle=n.accent,i.fill();r(128,150,74,n.body)}else t==="bear"?(r(70,92,28,n.body),r(186,92,28,n.body),r(128,146,80,n.body),i.beginPath(),i.ellipse(128,176,34,26,0,0,Math.PI*2),i.fillStyle=n.accent,i.fill()):t==="penguin"?(r(128,140,84,n.body),i.beginPath(),i.ellipse(128,160,58,56,0,0,Math.PI*2),i.fillStyle="#FFFFFF",i.fill()):(r(128,136,80,n.body),i.beginPath(),i.moveTo(120,52),i.quadraticCurveTo(128,30,142,46),i.stroke());i.fillStyle=s;for(let a of[-28,28])i.beginPath(),i.arc(128+a,132,10,0,Math.PI*2),i.fill();i.fillStyle="#FFFFFF";for(let a of[-25,31])i.beginPath(),i.arc(128+a,128,3.5,0,Math.PI*2),i.fill();i.fillStyle="rgba(255,120,150,0.55)";for(let a of[-50,50])i.beginPath(),i.ellipse(128+a,160,14,9,0,0,Math.PI*2),i.fill();t==="duck"||t==="penguin"?(i.beginPath(),i.ellipse(128,166,30,14,0,0,Math.PI*2),i.fillStyle="#FF9F2E",i.fill(),i.lineWidth=6,i.stroke()):(i.fillStyle=s,i.beginPath(),i.ellipse(128,156,10,7,0,0,Math.PI*2),i.fill(),i.lineWidth=6,i.beginPath(),i.arc(116,166,12,.1,Math.PI-.6),i.stroke(),i.beginPath(),i.arc(140,166,12,.6,Math.PI-.1),i.stroke()),i.restore()}function Yx(i,t,e=256){let n=yn.get(t);i.save(),i.clearRect(0,0,e,e),i.scale(e/256,e/256);let s="#3B3350";i.lineWidth=9,i.strokeStyle=s,i.lineJoin="round",i.lineCap="round";let r=n.color,a=(o,l,c,h)=>{i.beginPath(),i.arc(o,l,c,0,Math.PI*2),i.fillStyle=h,i.fill(),i.stroke()};switch(n.design){case"trumpet":i.beginPath(),i.moveTo(50,116),i.lineTo(150,108),i.lineTo(214,60),i.lineTo(214,196),i.lineTo(150,148),i.lineTo(50,140),i.closePath(),i.fillStyle=r,i.fill(),i.stroke(),a(46,128,18,"#FFD35A");break;case"bulb":i.beginPath(),i.moveTo(110,140),i.lineTo(190,100),i.lineTo(206,160),i.closePath(),i.fillStyle="#FFD35A",i.fill(),i.stroke(),a(80,140,46,r);break;case"pennant":i.beginPath(),i.moveTo(70,220),i.lineTo(70,36),i.stroke(),i.beginPath(),i.moveTo(74,40),i.lineTo(214,82),i.lineTo(74,124),i.closePath(),i.fillStyle=r,i.fill(),i.stroke();break;case"starflag":i.beginPath(),i.moveTo(60,220),i.lineTo(60,36),i.stroke(),Tn(i,64,40,140,96,14),i.fillStyle=r,i.fill(),i.stroke(),Ph(i,134,88,30,13),i.fillStyle="#FFFFFF",i.fill();break;case"string":i.beginPath(),i.moveTo(30,90),i.quadraticCurveTo(128,170,226,90),i.stroke();for(let o=0;o<5;o++){let l=(o+.5)/5,c=30+196*l,h=90+160*l*(1-l)*1;a(c,h+20,16,o%2?r:"#FFF3A0")}break;case"globes":Tn(i,40,150,176,30,12),i.fillStyle="#FFFFFF",i.fill(),i.stroke();for(let o=0;o<3;o++)a(76+o*52,118,26,o===1?"#FFF3A0":r);break;case"pinwheel":i.beginPath(),i.moveTo(128,128),i.lineTo(128,236),i.stroke();for(let o=0;o<4;o++)i.save(),i.translate(128,112),i.rotate(o*Math.PI/2),i.beginPath(),i.moveTo(0,0),i.lineTo(0,-80),i.lineTo(64,-20),i.closePath(),i.fillStyle=o%2?r:"#FFFFFF",i.fill(),i.stroke(),i.restore();a(128,112,10,"#FFD35A");break;default:Fh(i,128,132,86),i.fillStyle=r,i.fill(),i.stroke(),a(98,104,12,"#FFFFFF")}i.restore()}function Ph(i,t,e,n,s,r=5){i.beginPath();for(let a=0;a<r*2;a++){let o=a%2?s:n,l=-Math.PI/2+a*Math.PI/r,c=t+Math.cos(l)*o,h=e+Math.sin(l)*o;a?i.lineTo(c,h):i.moveTo(c,h)}i.closePath()}function Fh(i,t,e,n){i.beginPath(),i.moveTo(t,e+n*.7),i.bezierCurveTo(t-n*1.3,e-n*.1,t-n*.5,e-n*.95,t,e-n*.35),i.bezierCurveTo(t+n*.5,e-n*.95,t+n*1.3,e-n*.1,t,e+n*.7),i.closePath()}var Zx=i=>{let t=document.createElement("canvas");return t.width=i,t.height=i,t};function Jx(i,t){let e=Zx(i);return t(e.getContext("2d"),i),e}function Lh(i,t,e=192){let n=Jx(e,s=>{i==="house"?oa(s,t,e):i==="animal"?Ih(s,t,e):i==="deco"&&Yx(s,t,e)});return n.setAttribute("aria-hidden","true"),n}var Fe={accel:'<svg viewBox="0 0 120 200" aria-hidden="true"><rect x="10" y="10" width="100" height="180" rx="34" fill="#83D9B0" stroke="#3E8F6C" stroke-width="8"/><path d="M60 46 L92 82 H74 V104 H46 V82 H28 Z" fill="#fff"/><path d="M60 100 L92 136 H74 V158 H46 V136 H28 Z" fill="#fff" opacity=".75"/></svg>',brake:'<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M38 8 H82 L112 38 V82 L82 112 H38 L8 82 V38 Z" fill="#FF8E94" stroke="#C9545C" stroke-width="8" stroke-linejoin="round"/><rect x="28" y="50" width="64" height="20" rx="10" fill="#fff"/></svg>',horn:'<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="54" fill="#FFD35A" stroke="#D9A21F" stroke-width="8"/><path d="M30 50 H48 L74 32 V88 L48 70 H30 Z" fill="#fff" stroke="#B9851A" stroke-width="5" stroke-linejoin="round"/><path d="M84 46 Q94 60 84 74" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M93 38 Q108 60 93 82" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round" opacity=".8"/></svg>',reset:'<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="22" fill="#fff" stroke="#7FB6D8" stroke-width="5"/><circle cx="30" cy="30" r="7" fill="#FF8E94"/><path d="M30 4 V14 M30 46 V56 M4 30 H14 M46 30 H56" stroke="#7FB6D8" stroke-width="5" stroke-linecap="round"/></svg>',soundOn:'<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="26" fill="#fff" stroke="#B5A2EE" stroke-width="4"/><path d="M14 25 H22 L32 16 V44 L22 35 H14 Z" fill="#B5A2EE"/><path d="M38 23 Q43 30 38 37 M43 18 Q51 30 43 42" stroke="#B5A2EE" stroke-width="4" fill="none" stroke-linecap="round"/></svg>',soundOff:'<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="26" fill="#fff" stroke="#B5A2EE" stroke-width="4"/><path d="M14 25 H22 L32 16 V44 L22 35 H14 Z" fill="#B5A2EE"/><path d="M38 24 L48 36 M48 24 L38 36" stroke="#FF8E94" stroke-width="5" stroke-linecap="round"/></svg>',tablet:'<svg viewBox="0 0 60 60" aria-hidden="true"><rect x="10" y="16" width="40" height="28" rx="6" fill="#fff" stroke="#5AA9D8" stroke-width="4"/><circle cx="30" cy="30" r="5" fill="#FFD35A"/><path d="M6 48 Q30 58 54 48" stroke="#5AA9D8" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M50 44 L55 48 L49 52" stroke="#5AA9D8" stroke-width="4" fill="none" stroke-linecap="round"/></svg>',finger:'<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="26" fill="#fff" stroke="#83D9B0" stroke-width="4"/><path d="M26 46 V22 a4 4 0 0 1 8 0 V32 l8 2 a4 4 0 0 1 3 5 l-3 9 Z" fill="#FFE2C6" stroke="#3E8F6C" stroke-width="3" stroke-linejoin="round"/><path d="M12 22 L18 18 M12 22 L18 26 M48 22 L42 18 M48 22 L42 26" stroke="#3E8F6C" stroke-width="3" stroke-linecap="round"/></svg>',parent:'<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="24" fill="#fff" stroke="#C8C2D8" stroke-width="3"/><circle cx="24" cy="24" r="6" fill="#C8C2D8"/><circle cx="38" cy="28" r="4.5" fill="#C8C2D8"/><path d="M14 44 q10 -14 20 0 M32 44 q6 -9 12 0" stroke="#C8C2D8" stroke-width="4" fill="none"/></svg>',hand:'<svg viewBox="0 0 80 80" aria-hidden="true"><path d="M30 74 V30 a6 6 0 0 1 12 0 V46 l14 3 a6 6 0 0 1 5 7 l-4 18 Z" fill="#FFE2C6" stroke="#6B5A7A" stroke-width="4" stroke-linejoin="round"/><circle cx="36" cy="14" r="8" fill="none" stroke="#fff" stroke-width="4" opacity=".9"/></svg>',engine:'<svg viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="92" fill="#FFD35A" stroke="#fff" stroke-width="10"/><rect x="40" y="88" width="120" height="50" rx="20" fill="#FF8E94" stroke="#B94F58" stroke-width="6"/><path d="M62 90 Q70 58 100 58 Q130 58 138 90 Z" fill="#BFE8FA" stroke="#B94F58" stroke-width="6" stroke-linejoin="round"/><circle cx="68" cy="140" r="16" fill="#4A4060"/><circle cx="132" cy="140" r="16" fill="#4A4060"/><circle cx="68" cy="140" r="6" fill="#fff"/><circle cx="132" cy="140" r="6" fill="#fff"/><circle cx="52" cy="108" r="7" fill="#FFF7C2"/><circle cx="148" cy="108" r="7" fill="#FFF7C2"/><path d="M100 22 l6 14 l15 1 l-11 10 l4 15 l-14 -8 l-14 8 l4 -15 l-11 -10 l15 -1 z" fill="#fff"/></svg>',resume:'<svg viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="92" fill="#83D9B0" stroke="#fff" stroke-width="10"/><path d="M80 58 L146 100 L80 142 Z" fill="#fff" stroke="#3E8F6C" stroke-width="6" stroke-linejoin="round"/></svg>',retry:'<svg viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="92" fill="#94DDF4" stroke="#fff" stroke-width="10"/><path d="M140 100 a40 40 0 1 1 -12 -28" stroke="#fff" stroke-width="16" fill="none" stroke-linecap="round"/><path d="M118 52 L146 64 L134 92 Z" fill="#fff"/></svg>',openWindow:'<svg viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="92" fill="#B5A2EE" stroke="#fff" stroke-width="10"/><rect x="48" y="66" width="86" height="80" rx="12" fill="#fff"/><path d="M110 50 H152 V92" stroke="#fff" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M150 52 L104 98" stroke="#fff" stroke-width="14" stroke-linecap="round"/></svg>',upright:'<svg viewBox="0 0 200 160" aria-hidden="true"><rect x="10" y="118" width="180" height="16" rx="8" fill="#C8E9B0"/><g class="flat-tab"><rect x="40" y="104" width="120" height="12" rx="6" fill="#D6D1E4"/></g><path d="M100 104 Q140 90 132 50" stroke="#FFB27A" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M120 44 L134 36 L142 52" stroke="#FFB27A" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g class="up-tab"><rect x="70" y="14" width="60" height="90" rx="10" fill="#fff" stroke="#5AA9D8" stroke-width="7"/><circle cx="100" cy="59" r="9" fill="#FFD35A"/></g></svg>',tilt:'<svg viewBox="0 0 200 140" aria-hidden="true"><g class="tilt-tab"><rect x="40" y="30" width="120" height="80" rx="14" fill="#fff" stroke="#5AA9D8" stroke-width="8"/><circle cx="100" cy="70" r="12" fill="#FFD35A"/><circle cx="34" cy="70" r="12" fill="#FFE2C6" stroke="#6B5A7A" stroke-width="4"/><circle cx="166" cy="70" r="12" fill="#FFE2C6" stroke="#6B5A7A" stroke-width="4"/></g><path d="M30 18 Q100 -8 170 18" stroke="#FFB27A" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M160 6 L172 19 L156 26" stroke="#FFB27A" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M40 6 L28 19 L44 26" stroke="#FFB27A" stroke-width="7" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',dragArc:'<svg viewBox="0 0 200 80" aria-hidden="true"><path d="M30 60 Q100 10 170 60" stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round" stroke-dasharray="2 16"/><path d="M18 46 L28 62 L44 54" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M182 46 L172 62 L156 54" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',arrow:'<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 8 L90 60 H66 V92 H34 V60 H10 Z" fill="#fff" stroke="#FF8E94" stroke-width="7" stroke-linejoin="round"/></svg>'};function xf(i){let t=xn[i];return`<svg viewBox="0 0 160 160" aria-hidden="true"><circle cx="80" cy="80" r="74" fill="#fff" stroke="${t}" stroke-width="10"/><path d="M40 62 Q80 22 120 62 Z" fill="${t}" stroke="#6B5A7A" stroke-width="5" stroke-linejoin="round"/><rect x="74" y="20" width="12" height="22" rx="5" fill="#6B5A7A"/>`+[[52,86],[80,92],[108,86],[64,116],[96,116],[80,136]].map(([e,n])=>`<path d="M${e} ${n-12} Q${e+8} ${n} ${e} ${n+6} Q${e-8} ${n} ${e} ${n-12} Z" fill="${t}" stroke="#6B5A7A" stroke-width="3"/>`).join("")+"</svg>"}var Ie=i=>document.getElementById(i),Ol=class{constructor(){this.el={app:Ie("app"),field:Ie("field"),accel:Ie("accel"),brake:Ie("brake"),horn:Ie("horn"),reset:Ie("reset"),mode:Ie("mode"),sound:Ie("sound"),parentBtn:Ie("parentBtn"),start:Ie("start"),engine:Ie("engine"),embed:Ie("embed"),pause:Ie("pause"),resumeBtn:Ie("resumeBtn"),gl:Ie("gl"),glRetry:Ie("glRetry"),hint:Ie("hint"),progress:Ie("progress"),bubble:Ie("bubble"),wash:Ie("wash"),deco:Ie("deco"),pointer:Ie("pointer"),parent:Ie("parent"),upright:Ie("upright")};let t=this.el;t.accel.innerHTML=Fe.accel+`<div class="drag-arc">${Fe.dragArc}</div>`,t.brake.innerHTML=Fe.brake,t.horn.innerHTML=Fe.horn,t.reset.innerHTML=`<span class="mini">${Fe.reset}</span>`,t.sound.innerHTML=`<span class="mini">${Fe.soundOn}</span>`,t.parentBtn.innerHTML=`<span class="mini tiny">${Fe.parent}</span><svg class="hold-ring" viewBox="0 0 60 60"><circle cx="30" cy="30" r="26"/></svg>`,t.engine.innerHTML=Fe.engine,t.resumeBtn.innerHTML=Fe.resume,t.glRetry.innerHTML=Fe.retry,t.pointer.innerHTML=Fe.arrow,t.upright.innerHTML=Fe.upright,this.hintId=null,this.mode=null,this.washBuilt=!1,this.decoOffersKey="",this.handlers={}}on(t,e){this.handlers[t]=e}fire(t,...e){let n=this.handlers[t];n&&n(...e)}bind(){let t=this.el;t.engine.addEventListener("click",s=>{s.preventDefault(),this.fire("engine",s)}),t.resumeBtn.addEventListener("click",s=>{s.preventDefault(),this.fire("resume",s)}),t.glRetry.addEventListener("click",()=>this.fire("glRetry")),t.reset.addEventListener("click",()=>this.fire("recenter")),t.mode.addEventListener("click",()=>this.fire("mode")),t.sound.addEventListener("click",()=>this.fire("sound"));let e=null,n=()=>{clearTimeout(e),e=null,t.parentBtn.classList.remove("holding")};t.parentBtn.addEventListener("pointerdown",s=>{s.preventDefault(),t.parentBtn.classList.add("holding"),e=setTimeout(()=>{n(),this.fire("parent")},1200)});for(let s of["pointerup","pointercancel","pointerleave"])t.parentBtn.addEventListener(s,n);t.parentBtn.addEventListener("keydown",s=>{s.key==="Enter"&&this.fire("parent")})}setEmbedded(t){let e=this.el.embed;e.href=t,e.innerHTML=Fe.openWindow,e.hidden=!1}showStart(t){this.el.start.hidden=!t}showPause(t){this.el.pause.hidden=!t}showGL(t,e=!1){this.el.gl.hidden=!t,this.el.gl.classList.toggle("failed",e)}setSound(t){this.el.sound.querySelector(".mini").innerHTML=t?Fe.soundOff:Fe.soundOn}setMode(t){t!==this.mode&&(this.mode=t,this.el.mode.innerHTML=`<span class="mini">${t==="motion"?Fe.finger:Fe.tablet}</span>`,this.el.app.dataset.mode=t)}layout(){let t=window.innerWidth,e=window.innerHeight,n=Math.min(t,e),s=n>=600,r=e>t,a,o,l,c,h;if(s)a=130,o=r?210:230,l=130,c=150,h=100;else{let f=Math.max(.62,Math.min(1,n/430));a=Math.max(72,112*f),o=Math.max(110,(r?170:150)*f),l=Math.max(72,112*f),c=Math.max(80,116*f),h=Math.max(64,86*f)}let u=(t-h-48)/2;a=Math.min(a,u),l=Math.min(l,u);let d=this.el.app.style;return d.setProperty("--aw",a+"px"),d.setProperty("--ah",o+"px"),d.setProperty("--bw",l+"px"),d.setProperty("--bh",c+"px"),d.setProperty("--horn",h+"px"),d.setProperty("--pedal-top",(r?64:62)+"%"),this.el.app.dataset.layout=(s?"tablet":"phone")+(r?"-portrait":"-landscape"),{aw:a,ah:o,bw:l,bh:c,horn:h,tablet:s,portrait:r,dragFullPx:s?60:46}}setDriveVisible(t){this.el.app.dataset.drive=t}setBubble(t,e){let n=t+":"+e;if(this.bubbleKey===n)return;this.bubbleKey=n;let s=this.el.bubble;if(!t){s.hidden=!0;return}s.hidden=!1,s.innerHTML="",s.appendChild(Lh(t,e,160))}setHint(t){let e=t.id,n=this.el;if(e!==this.hintId){this.hintId=e,n.app.dataset.hint=e,n.hint.className="hint hint-"+e;let s="";e==="accel"||e==="brake"||e==="shower"||e==="deco"?s=`<div class="hand">${Fe.hand}</div>`:e==="tilt"?s=`<div class="pic tilt">${Fe.tilt}</div>`:e==="drag"?s=`<div class="hand slide">${Fe.hand}</div>`:e==="calibrate"&&(s=`<div class="pic calib">${Fe.upright}<div class="dots"><i></i><i></i><i></i></div></div>`),n.hint.innerHTML=s,n.upright.hidden=e!=="upright",e==="upright"&&n.upright.classList.remove("context"),n.progress.hidden=e!=="progress",this._placeHint(e)}if(e==="progress"){let s=2*Math.PI*34;n.progress.firstChild||(n.progress.innerHTML=`<svg viewBox="0 0 80 80"><circle class="bg" cx="40" cy="40" r="34"/><circle class="fg" cx="40" cy="40" r="34" stroke-dasharray="${s}" stroke-dashoffset="${s}"/><path class="heart" d="M40 54 C20 40 26 24 40 32 C54 24 60 40 40 54 Z"/></svg>`),n.progress.querySelector(".fg").setAttribute("stroke-dashoffset",String(s*(1-t.progress)))}(e==="shower"||e==="deco"||e==="accel"||e==="brake"||e==="drag")&&this._placeHint(e)}_placeHint(t){let e=this.el,n=null;if(t==="accel"||t==="drag"?n=e.accel:t==="brake"?n=e.brake:t==="shower"?n=e.wash.querySelector("button"):t==="deco"&&(n=e.deco.querySelector("button")),!n){e.hint.style.left="",e.hint.style.top="";return}let s=n.getBoundingClientRect(),r=e.app.getBoundingClientRect();e.hint.style.left=s.left-r.left+s.width/2+"px",e.hint.style.top=s.top-r.top+s.height*(t==="shower"||t==="deco"?.35:.55)+"px"}showWash(t,e,n){let s=this.el.wash;if(t&&!this.washBuilt){s.innerHTML="";for(let r of e){let a=document.createElement("button");a.className="shower",a.dataset.color=r,a.setAttribute("aria-label","shower "+r),a.innerHTML=xf(r),a.addEventListener("pointerdown",o=>{o.preventDefault(),o.stopPropagation(),n(r),a.classList.add("chosen")}),s.appendChild(a)}this.washBuilt=!0}t||(this.washBuilt=!1,s.innerHTML=""),s.hidden=!t}showDeco(t,e){let n=this.el.deco,s=t?t.join(","):"";if(s!==this.decoOffersKey&&(this.decoOffersKey=s,n.innerHTML="",n.hidden=!t,!!t))for(let r of t){let a=document.createElement("button");a.className="deco-card",a.dataset.deco=r,a.setAttribute("aria-label","decoration "+r),a.appendChild(Lh("deco",r,192)),a.addEventListener("pointerdown",o=>{o.preventDefault(),o.stopPropagation(),e(r)}),n.appendChild(a)}}setPointer(t){let e=this.el.pointer;if(!t){e.hidden=!0;return}e.hidden=!1,e.style.left=t.x+"px",e.style.top=t.y+"px",e.style.transform=`translate(-50%,-50%) rotate(${t.angle}rad)`}showUprightContext(t){this.hintId!=="upright"&&(this.el.upright.hidden=!t,this.el.upright.classList.toggle("context",!!t))}pulseMode(t){this.el.mode.classList.toggle("offer",!!t)}openParent(t,e){let n=this.el.parent,s=t.settings;n.innerHTML=`
      <div class="panel" role="dialog" aria-label="\u4FDD\u8B77\u8005\u5411\u3051\u8A2D\u5B9A">
        <h1>\u3069\u3046\u3076\u3064\u30BF\u30AF\u30B7\u30FC\uFF08\u4FDD\u8B77\u8005\u5411\u3051\uFF09</h1>
        <p>\u30BF\u30D6\u30EC\u30C3\u30C8\u3092\u4E21\u624B\u3067\u6301\u3061\u3001\u30CF\u30F3\u30C9\u30EB\u306E\u3088\u3046\u306B\u56DE\u3057\u3066\u904B\u8EE2\u3057\u307E\u3059\u3002\u53F3\u306E\u7DD1\u306E\u30DA\u30C0\u30EB\u3067\u9032\u307F\u3001\u5DE6\u306E\u8D64\u3044\u30DA\u30C0\u30EB\u3067\u6B62\u307E\u308A\u307E\u3059\u3002\u771F\u3093\u4E2D\u306E\u9EC4\u8272\u3044\u30DC\u30BF\u30F3\u306F\u30AF\u30E9\u30AF\u30B7\u30E7\u30F3\u3067\u3059\u3002</p>
        <p>\u6700\u521D\u306E\u300C\u52D5\u304D\u3068\u5411\u304D\u300D\u306E\u8A31\u53EF\u306F\u4FDD\u8B77\u8005\u304C\u300C\u8A31\u53EF\u300D\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u8A31\u53EF\u3057\u306A\u3044\u5834\u5408\u3084\u53CD\u5FDC\u304C\u306A\u3044\u5834\u5408\u306F\u3001\u7DD1\u306E\u30DA\u30C0\u30EB\u3092\u62BC\u3057\u305F\u307E\u307E\u5DE6\u53F3\u306B\u6307\u3092\u305A\u3089\u3057\u3066\u904B\u8EE2\u3067\u304D\u307E\u3059\u3002</p>
        <p>\u5FEB\u9069\u306B\u904A\u3076\u305F\u3081\u3001\u7AEF\u672B\u306E\u753B\u9762\u306E\u5411\u304D\u306E\u30ED\u30C3\u30AF\u3092\u304A\u3059\u3059\u3081\u3057\u307E\u3059\uFF08\u5FC5\u9808\u3067\u306F\u3042\u308A\u307E\u305B\u3093\uFF09\u3002</p>
        <label>\u611F\u5EA6\uFF08\u7AEF\u672B\u30B5\u30A4\u30BA\uFF09
          <select id="pProfile">
            <option value="auto">\u81EA\u52D5\uFF08\u63A8\u5B9A: ${t.guess}\uFF09</option>
            <option value="ipad11">iPad Pro 11\u30A4\u30F3\u30C1\uFF08\xB124\xB0\uFF09</option>
            <option value="ipad129">iPad Pro 12.9\u30A4\u30F3\u30C1\uFF08\xB120\xB0\uFF09</option>
            <option value="phone">iPhone \u306A\u3069\uFF08\xB124\xB0\uFF09</option>
          </select></label>
        <label>\u97F3\u91CF <input id="pVol" type="range" min="0" max="1" step="0.05" value="${s.volume}"></label>
        <label><input id="pMute" type="checkbox" ${s.muted?"checked":""}> \u6D88\u97F3</label>
        <p class="small">\u73FE\u5728\u306E\u64CD\u4F5C: ${t.mode} \uFF0F \u30BB\u30F3\u30B5\u30FC: ${t.sensor} \uFF0F \u914D\u9054\u5408\u8A08: ${t.deliveries} \uFF0F \u98FE\u308A: ${t.decos}</p>
        <div class="row">
          <button id="pLock">\u753B\u9762\u306E\u5411\u304D\u3092\u56FA\u5B9A\u3057\u3066\u307F\u308B</button>
          <button id="pMotion">\u50BE\u304D\u64CD\u4F5C\u3092\u518D\u8A66\u884C</button>
          <button id="pReset">\u9032\u307F\u5177\u5408\u3092\u6D88\u3059</button>
        </div>
        <button id="pClose" class="close">\u9589\u3058\u308B</button>
      </div>`,n.hidden=!1;let r=n.querySelector("#pProfile");r.value=s.profile,r.addEventListener("change",()=>e.profile(r.value)),n.querySelector("#pVol").addEventListener("input",a=>e.volume(parseFloat(a.target.value))),n.querySelector("#pMute").addEventListener("change",a=>e.mute(a.target.checked)),n.querySelector("#pLock").addEventListener("click",()=>e.lock()),n.querySelector("#pMotion").addEventListener("click",()=>e.motion()),n.querySelector("#pReset").addEventListener("click",()=>{window.confirm("\u9032\u307F\u5177\u5408\uFF08\u914D\u9054\u6570\u30FB\u98FE\u308A\uFF09\u3092\u6D88\u3057\u307E\u3059\u304B\uFF1F")&&e.reset()}),n.querySelector("#pClose").addEventListener("click",()=>{n.hidden=!0,n.innerHTML="",e.close()})}get parentOpen(){return!this.el.parent.hidden}};var la=new C;function An(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;la.copy(t),la[n]=0,la.normalize();let c=.5*a/(a+o),h=1-la.angleTo(i)/l;return Math.sign(la[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Bl=class i extends Zn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new C,c=new C,h=new C(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,_=new C,m=.5/a;for(let p=0,S=0;p<u.length;p+=3,S+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[S+0]=An(_,c,"z","y",r,n),f[S+1]=1-An(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[S+0]=1-An(_,c,"z","y",r,n),f[S+1]=1-An(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[S+0]=1-An(_,c,"x","z",r,t),f[S+1]=An(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[S+0]=1-An(_,c,"x","z",r,t),f[S+1]=1-An(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[S+0]=1-An(_,c,"x","y",r,t),f[S+1]=1-An(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[S+0]=An(_,c,"x","y",r,t),f[S+1]=1-An(_,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Dh=new Map;function st(i,t={}){let e=i+JSON.stringify(t);if(Dh.has(e))return Dh.get(e);let n=new ui({color:i,...t});return Dh.set(e,n),n}var Nh=new Map;function mn(i,t){return Nh.has(i)||Nh.set(i,t()),Nh.get(i)}var W={sphere:()=>mn("sphere",()=>new Ls(1,20,14)),sphereLo:()=>mn("sphereLo",()=>new Ls(1,10,8)),cyl:()=>mn("cyl",()=>new Ri(1,1,1,20)),cone:()=>mn("cone",()=>new Lr(1,1,18)),box:()=>mn("box",()=>new Zn(1,1,1)),capsule:()=>mn("capsule",()=>new Fr(1,2,6,12)),rbox:(i,t,e,n)=>mn(`rb${i},${t},${e},${n}`,()=>new Bl(i,t,e,3,n)),torus:()=>mn("torus",()=>new Vr(1,.12,8,24,Math.PI)),wheel:()=>mn("wheel",()=>new Ri(.42,.42,.34,20).rotateZ(Math.PI/2))};function V(i,t,{p:e,s:n,r:s,shadow:r=!0}={}){let a=new we(i,t);return e&&a.position.set(e[0],e[1],e[2]),n!==void 0&&(typeof n=="number"?a.scale.setScalar(n):a.scale.set(n[0],n[1],n[2])),s&&a.rotation.set(s[0],s[1],s[2]),a.castShadow=r,a}var Uh=new Map;function Rn(i,t,e){if(Uh.has(i))return Uh.get(i);let n=document.createElement("canvas");n.width=t,n.height=t,e(n.getContext("2d"),t);let s=new Ir(n);return s.colorSpace=Xe,s.anisotropy=4,Uh.set(i,s),s}function yf(){let i=new Pt,t=new Pt;i.add(t);let e=new ui({color:"#FFD35A"}),n=st("#FFF8EA"),s=st("#4A4060"),r=V(W.rbox(1.9,.72,3.3,.3),e,{p:[0,.66,0]});t.add(r);let a=V(W.rbox(1.7,.3,1.1,.14),e,{p:[0,1.06,1]});t.add(a);let o=V(W.rbox(1.7,.36,.7,.14),e,{p:[0,1.08,-1.25]});t.add(o),t.add(V(W.rbox(1.5,.3,.9,.12),st("#FF8E94"),{p:[0,1.08,-.35]})),t.add(V(W.rbox(1.5,.55,.18,.08),st("#FF8E94"),{p:[0,1.36,-.85]}));for(let _ of[.8,-.8])t.add(V(W.cyl(),n,{p:[_,1.55,-1.02],s:[.08,1,.08]}));t.add(V(W.rbox(1.78,.14,.18,.06),n,{p:[0,2.06,-1.02]})),t.add(V(W.rbox(1.62,.1,.1,.04),n,{p:[0,1.5,.42]}));for(let _ of[.78,-.78])t.add(V(W.cyl(),n,{p:[_,1.3,.42],s:[.05,.4,.05]}));for(let _ of[-.45,.45])t.add(V(W.sphere(),st("#FFFFFF"),{p:[_,.78,1.62],s:[.2,.2,.08]})),t.add(V(W.sphere(),s,{p:[_,.78,1.69],s:[.09,.11,.04],shadow:!1}));t.add(V(W.torus(),st("#B94F58"),{p:[0,.52,1.64],s:[.22,.22,.22],r:[0,0,Math.PI],shadow:!1}));for(let _ of[-.7,.7])t.add(V(W.sphere(),st("#FFF7C2",{emissive:"#665c22"}),{p:[_,.55,1.6],s:.12,shadow:!1}));for(let _ of[-.72,.72])t.add(V(W.sphere(),st("#FF8E94"),{p:[_,.7,-1.66],s:.1,shadow:!1}));let l=new Sn({color:"#ffffff",depthWrite:!1}),c=new Nn(l);c.position.set(0,3.75,-1.02),c.scale.set(1.25,1.25,1),c.visible=!1,t.add(c);let h=new Pt;for(let _ of[-.62,.62])h.add(V(W.cyl(),n,{p:[_,2.65,-1.02],s:[.05,1.1,.05]}));h.add(V(W.cyl(),n,{p:[0,3.2,-1.02],s:[.05,1.24,.05],r:[0,0,Math.PI/2]})),h.visible=!1,t.add(h);let u=[],d=[];for(let[_,m]of[[.95,1.08],[-.95,1.08],[.95,-1.08],[-.95,-1.08]]){let p=new Pt;p.position.set(_,.42,m);let S=V(W.wheel(),s),A=V(W.cyl(),st("#FFFFFF"),{s:[.18,.36,.18],r:[0,0,Math.PI/2],shadow:!1});S.add(A),p.add(S),i.add(p),u.push(S),m>0&&d.push(p)}let f={hood:new Pt,roof:new Pt,back:new Pt,side:new Pt};f.hood.position.set(.55,1.22,1.15),f.roof.position.set(0,2.14,-1.02),f.back.position.set(-.55,1.25,-1.35),f.side.position.set(-.98,1.2,.3);for(let _ of Object.values(f))t.add(_);let g=new ke;return g.position.set(0,1.18,-.35),t.add(g),{root:i,body:t,paint:e,sign:c,post:h,wheels:u,front:d,slots:f,seat:g}}function vf(i){let t=yn.get(i),e=new Pt,n=st(t.color),s=st("#FFD35A"),r=st("#FFFFFF");switch(t.design){case"trumpet":e.add(V(W.cyl(),s,{p:[0,.1,0],s:[.05,.2,.05]})),e.add(V(W.cone(),n,{p:[0,.26,.12],s:[.16,.36,.16],r:[Math.PI/2,0,0]}));break;case"bulb":e.add(V(W.sphere(),n,{p:[0,.2,-.05],s:.17})),e.add(V(W.cone(),s,{p:[0,.22,.18],s:[.1,.3,.1],r:[Math.PI/2,0,0]}));break;case"pennant":{e.add(V(W.cyl(),r,{p:[0,.5,0],s:[.03,1,.03]}));let a=V(W.cone(),n,{p:[0,.82,-.25],s:[.16,.5,.04],r:[0,0,Math.PI/2]});a.rotation.set(Math.PI/2,0,Math.PI/2),e.add(a),e.userData.flutter=a;break}case"starflag":{e.add(V(W.cyl(),r,{p:[0,.5,0],s:[.03,1,.03]}));let a=V(W.box(),n,{p:[0,.82,-.22],s:[.03,.3,.42]});a.add(V(W.sphere(),r,{p:[.6,0,0],s:[.5,.35,.25],shadow:!1})),e.add(a),e.userData.flutter=a;break}case"string":for(let a=0;a<6;a++){let o=-.8+a*.32,l=V(W.sphere(),st(a%2?t.color:"#FFF3A0",{emissive:a%2?t.color:"#FFF3A0",emissiveIntensity:.35}),{p:[o,.08-Math.sin(a/5*Math.PI)*.06,0],s:.09,shadow:!1});e.add(l)}e.userData.twinkle=!0;break;case"globes":for(let a=0;a<3;a++)e.add(V(W.sphere(),st(a===1?"#FFF3A0":t.color,{emissive:a===1?"#FFF3A0":t.color,emissiveIntensity:.3}),{p:[-.45+a*.45,.16,0],s:.15,shadow:!1}));e.userData.twinkle=!0;break;case"pinwheel":{e.add(V(W.cyl(),r,{p:[0,.3,0],s:[.03,.6,.03]}));let a=new Pt;a.position.set(-.05,.62,0);for(let o=0;o<4;o++){let l=V(W.box(),o%2?n:r,{s:[.02,.3,.12]});l.position.set(0,Math.cos(o*Math.PI/2)*.15,Math.sin(o*Math.PI/2)*.15),l.rotation.x=o*Math.PI/2,a.add(l)}e.add(a),e.userData.spin=a;break}default:{let a=new Pt;a.add(V(W.sphere(),n,{p:[0,.1,.09],s:.12})),a.add(V(W.sphere(),n,{p:[0,.1,-.09],s:.12})),a.add(V(W.cone(),n,{p:[0,-.04,0],s:[.17,.22,.17],r:[Math.PI,0,0]})),a.position.y=.25,e.add(a),e.userData.bob=a}}return e.scale.setScalar(1.5),e}function ca(i,t,e,n,s=1){let r=st("#3B3350");for(let a of[-n,n]){let o=V(W.sphere(),r,{p:[a,t,e],s:[.055*s,.07*s,.04*s],shadow:!1});o.add(V(W.sphereLo(),st("#FFFFFF"),{p:[.3,.35,.6],s:.3,shadow:!1})),i.add(o)}for(let a of[-n*1.7,n*1.7])i.add(V(W.sphereLo(),st("#FFB0C4"),{p:[a,t-.08,e-.03],s:[.06,.035,.02],shadow:!1}))}function Mf(i){let t=Ve[i],e=new Pt,n=new Pt;e.add(n);let s=new Pt;n.add(s);let r={root:e,body:n,head:s},a=st(t.body),o=st(t.accent);if(i==="rabbit"){n.add(V(W.sphere(),a,{p:[0,.42,0],s:[.36,.4,.34]})),n.add(V(W.sphere(),st("#FFF0F5"),{p:[0,.38,.2],s:[.22,.26,.16]})),s.position.set(0,.92,.04),s.add(V(W.sphere(),a,{s:[.3,.27,.28]})),ca(s,.03,.25,.1),s.add(V(W.sphere(),st("#FF8EB0"),{p:[0,-.05,.28],s:.04,shadow:!1}));for(let c of[-1,1]){let h=new Pt;h.position.set(.12*c,.2,-.02),h.add(V(W.capsule(),a,{p:[0,.28,0],s:[.07,.13,.05]})),h.add(V(W.capsule(),o,{p:[0,.28,.03],s:[.035,.1,.03],shadow:!1})),s.add(h),r[c<0?"earL":"earR"]=h}for(let c of[-1,1]){let h=V(W.sphere(),a,{p:[.3*c,.52,.12],s:[.08,.14,.08]});n.add(h),r[c<0?"armL":"armR"]=h}n.add(V(W.sphere(),st("#FFFFFF"),{p:[0,.3,-.34],s:.1}))}else if(i==="penguin"){n.add(V(W.sphere(),a,{p:[0,.5,0],s:[.36,.48,.34]})),n.add(V(W.sphere(),o,{p:[0,.45,.14],s:[.27,.38,.22]})),s.position.set(0,1,.02),s.add(V(W.sphere(),a,{s:[.27,.25,.26]})),s.add(V(W.sphere(),o,{p:[0,-.02,.12],s:[.2,.17,.16]})),ca(s,.04,.26,.08),s.add(V(W.cone(),st("#FF9F2E"),{p:[0,-.06,.3],s:[.07,.14,.05],r:[Math.PI/2,0,0]}));for(let h of[-1,1]){let u=new Pt;u.position.set(.33*h,.72,0),u.add(V(W.sphere(),a,{p:[.03*h,-.18,0],s:[.07,.24,.12]})),n.add(u),r[h<0?"armL":"armR"]=u,n.add(V(W.sphere(),st("#FF9F2E"),{p:[.14*h,.04,.12],s:[.1,.04,.14]}))}let c=new Pt;c.position.set(0,.42,.42),c.add(V(W.cyl(),st("#FF8E94"),{s:[.2,.14,.2]})),c.add(V(W.cyl(),st("#FFFFFF"),{p:[0,.075,0],s:[.19,.01,.19],shadow:!1})),n.add(c),r.prop=c}else if(i==="bear"){n.add(V(W.sphere(),a,{p:[0,.48,0],s:[.42,.46,.38]})),n.add(V(W.sphere(),o,{p:[0,.44,.18],s:[.26,.3,.2]})),s.position.set(0,1.02,.02),s.add(V(W.sphere(),a,{s:[.32,.29,.3]}));for(let u of[-1,1])s.add(V(W.sphere(),a,{p:[.22*u,.22,-.02],s:.1}));s.add(V(W.sphere(),o,{p:[0,-.07,.24],s:[.13,.1,.08]})),s.add(V(W.sphere(),st("#3B3350"),{p:[0,-.03,.31],s:.04,shadow:!1})),ca(s,.06,.26,.11);for(let u of[-1,1]){let d=V(W.sphere(),a,{p:[.36*u,.6,.16],s:[.11,.17,.11]});n.add(d),r[u<0?"armL":"armR"]=d}for(let u of[-1,1])n.add(V(W.sphere(),a,{p:[.17*u,.08,.1],s:[.13,.08,.16]}));let c=new Pt;c.position.set(0,.62,.44),c.add(V(W.rbox(.42,.3,.32,.04),st("#FFFFFF"))),c.add(V(W.box(),st("#FF8EC8"),{s:[.44,.06,.06],p:[0,0,0],shadow:!1})),c.add(V(W.box(),st("#FF8EC8"),{s:[.06,.32,.34],shadow:!1}));let h=new Pt;h.position.set(0,.2,0),h.add(V(W.sphere(),st("#FF3B5C"),{s:[.08,.1,.08]})),h.add(V(W.cone(),st("#4CC26A"),{p:[0,.09,0],s:[.06,.05,.06],shadow:!1})),c.add(h),n.add(c),r.prop=c,r.berry=h}else{n.add(V(W.sphere(),a,{p:[0,.4,0],s:[.36,.33,.42]})),s.position.set(0,.86,.14),s.add(V(W.sphere(),a,{s:[.26,.25,.25]})),ca(s,.05,.22,.09);let c=new Pt;c.position.set(0,-.04,.25),c.add(V(W.sphere(),o,{s:[.13,.04,.12]})),s.add(c),r.bill=c,s.add(V(W.sphere(),a,{p:[0,.27,-.02],s:[.04,.09,.04]}));for(let h of[-1,1]){let u=new Pt;u.position.set(.32*h,.48,-.02),u.add(V(W.sphere(),st("#FFD43B"),{p:[.03*h,-.04,-.06],s:[.06,.15,.24]})),n.add(u),r[h<0?"armL":"armR"]=u,n.add(V(W.sphere(),o,{p:[.13*h,.04,.12],s:[.1,.035,.14]}))}n.add(V(W.cone(),a,{p:[0,.5,-.42],s:[.12,.2,.1],r:[-1.1,0,0]}))}let l=new we(mn("blob",()=>new Ai(.45,20).rotateX(-Math.PI/2)),Oh());return l.position.y=.03,l.renderOrder=1,e.add(l),r.blob=l,e.userData.parts=r,e}var kl=null;function Oh(){if(kl)return kl;let i=Rn("blob",64,(t,e)=>{let n=t.createRadialGradient(e/2,e/2,2,e/2,e/2,e/2);n.addColorStop(0,"rgba(60,50,90,0.35)"),n.addColorStop(1,"rgba(60,50,90,0)"),t.fillStyle=n,t.fillRect(0,0,e,e)});return kl=new hn({map:i,transparent:!0,depthWrite:!1}),kl}function Sf(i,t){let e=Hn[i],n=new Pt,s=st(e.color),r=st(e.dark),a=st("#FFFFFF"),o=st("#FFF3D6"),l={};if(i==="castle"){n.add(V(W.rbox(4.2,3,3.2,.25),s,{p:[0,1.5,0]}));for(let d of[-2.3,2.3])n.add(V(W.cyl(),s,{p:[d,2.1,0],s:[.85,4.2,.85]})),n.add(V(W.cone(),r,{p:[d,4.9,0],s:[1.1,1.6,1.1]}));for(let d=0;d<3;d++)n.add(V(W.box(),s,{p:[-1.2+d*1.2,3.25,1.3],s:[.6,.6,.5]}));n.add(V(W.cyl(),a,{p:[2.3,6.1,0],s:[.04,.9,.04]})),n.add(V(W.box(),st("#FFD35A"),{p:[2.3,6.35,.3],s:[.04,.35,.55]}));let u=new Pt;u.position.set(0,0,3.2),u.add(V(W.torus(),st("#83D9B0"),{p:[0,0,0],s:[1.4,1.8,1.4]}));for(let d=0;d<=8;d++){let f=d/8*Math.PI;u.add(V(W.sphereLo(),st(d%2?"#FF8EC8":"#FFFFFF"),{p:[Math.cos(f)*1.4,Math.sin(f)*1.8,0],s:.22,shadow:!1}))}u.scale.setScalar(.001),u.visible=!1,n.add(u),l.arch=u}else if(i==="dome"){n.add(V(W.cyl(),s,{p:[0,1,0],s:[2.6,2,2.6]}));let u=V(W.sphere(),s,{p:[0,2,0],s:[2.6,2.3,2.6]});n.add(u),n.add(V(W.sphere(),a,{p:[0,4.45,0],s:.35})),n.add(V(W.cyl(),r,{p:[0,2.05,0],s:[2.66,.25,2.66]}))}else if(i==="bakery"){n.add(V(W.rbox(4.2,2.8,3.4,.2),s,{p:[0,1.4,0]}));let u=V(mn("prism",()=>{let f=new Ci;return f.moveTo(-1,0),f.lineTo(1,0),f.lineTo(0,1),f.closePath(),new Zi(f,{depth:1,bevelEnabled:!1}).translate(0,0,-.5)}),r,{p:[0,2.75,0],s:[2.7,2.2,3.7]});n.add(u),n.add(V(W.box(),r,{p:[1.2,4.6,-.6],s:[.5,1.2,.5]}));let d=V(W.box(),st("#FFFFFF"),{p:[0,2.2,1.85],s:[3.2,.12,.8],r:[.35,0,0]});n.add(d),n.add(V(W.rbox(.9,1.5,.2,.08),a,{p:[0,.75,1.72]})),n.add(V(W.capsule(),st("#E9A35A"),{p:[-1.3,1.6,1.8],s:[.14,.18,.14],r:[0,0,Math.PI/2]}))}else{n.add(V(W.rbox(3.8,2.4,3.2,.2),s,{p:[0,1.2,0]}));let u=V(mn("halfcyl",()=>new Ri(1,1,1,24,1,!1,-Math.PI/2,Math.PI).rotateX(-Math.PI/2)),r,{p:[0,2.35,0],s:[1.95,1.7,3.3]});n.add(u),n.add(V(W.rbox(1,1.6,.2,.3),a,{p:[0,.8,1.62]}));let d=V(W.cyl(),st("#7CCBF0"),{p:[3.4,.08,1.2],s:[1.4,.16,1.4],shadow:!1});n.add(d);let f=new Pt;f.position.set(3.4,.2,1.2);for(let g=0;g<7;g++)f.add(V(W.sphereLo(),st("#DDF5FF"),{p:[0,0,0],s:.14,shadow:!1}));f.visible=!1,n.add(f),l.fountain=f}let c=new we(mn("plaque",()=>new dn(1.6,1.6)),new hn({map:t,transparent:!0}));c.position.set(-2.6,1.6,2.2);let h=V(W.cyl(),st("#FFFFFF"),{p:[-2.6,.5,2.15],s:[.06,1,.06]});return n.add(h),n.add(c),n.userData.parts=l,n.traverse(u=>{u.isMesh&&u.castShadow&&(u.receiveShadow=!0)}),n}function bf(i){let t=new Pt,e=new Pt;t.add(e),e.add(V(W.rbox(1.6,.6,2.6,.26),st(i),{p:[0,.6,0]})),e.add(V(W.rbox(1.3,.55,1.2,.22),st("#FFFFFF"),{p:[0,1.15,-.15]}));let n=new Pt;n.position.set(0,1.45,-.1),n.add(V(W.sphere(),st("#FFE2C6"),{s:.32})),ca(n,.04,.28,.1,.9),n.add(V(W.sphere(),st(i),{p:[0,.22,-.02],s:[.3,.14,.3]}));let s=V(W.sphere(),st("#FFE2C6"),{p:[.5,.15,.1],s:.1});n.add(s),e.add(n);for(let[r,a]of[[.8,.85],[-.8,.85],[.8,-.85],[-.8,-.85]])t.add(V(W.wheel(),st("#4A4060"),{p:[r,.42,a],s:.85}));for(let r of[-.45,.45])e.add(V(W.sphere(),st("#FFF7C2"),{p:[r,.62,1.3],s:.12,shadow:!1}));return t.userData={body:e,hand:s,driver:n},t}var Ef=new C(0,1,0),Hl=class{constructor(t,e){this.canvas=t,this.game=e,this.layout=e.layout,this.reactions={pinwheel:0,awning:0,shell:0,fountain:0,squirrel:0,mushroom:0},this.frameTimes=[],this.quality={dpr:Math.min(_i.maxDpr,window.devicePixelRatio||1),shadows:!0,changes:0},this.time=0,this.contextLost=!1,this._initRenderer(),this._build()}_initRenderer(){let t=new Al({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",alpha:!1});t.setPixelRatio(this.quality.dpr),t.shadowMap.enabled=!0,t.shadowMap.type=Ji,t.outputColorSpace=Xe,t.setClearColor("#94DDF4"),this.renderer=t,this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),this.contextLost=!0,this.onContextLost&&this.onContextLost()}),this.canvas.addEventListener("webglcontextrestored",()=>{this.contextLost=!1,this._restore(),this.onContextRestored&&this.onContextRestored()})}_restore(){this.scene.traverse(t=>{let e=t.material;if(e)for(let n of Array.isArray(e)?e:[e])n.map&&(n.map.needsUpdate=!0),n.needsUpdate=!0}),this.resize(this.w,this.h)}_build(){let t=new br;this.scene=t,t.background=new Kt("#94DDF4"),t.fog=new Sr("#C8EEFA",70,190);let e=new Xr("#FFFFFF","#9BD48A",1.55);t.add(e);let n=new Yr("#FFF6E0",1.7);n.castShadow=!0,n.shadow.mapSize.set(_i.shadowSize,_i.shadowSize);let s=n.shadow.camera;s.left=-26,s.right=26,s.top=26,s.bottom=-26,s.near=1,s.far=90,n.shadow.bias=-8e-4,t.add(n),t.add(n.target),this.sun=n,this.camera=new $e(52,1,.3,260),this.camera.up.copy(Ef),this.cam={yaw:0,pos:new C,look:new C,init:!1,far:0},this._ground(),this._roads(),this._bays(),this._houses(),this._signs(),this._scenery(),this._particles(),this._taxi(),this._animals(),this._traffic(),this._collectibles(),this._washRig(),this._beacons()}_ground(){let t=V(new dn(520,520).rotateX(-Math.PI/2),st("#A6E58C"),{shadow:!1});t.receiveShadow=!0,this.scene.add(t);let e=V(new Ai(1,48).rotateX(-Math.PI/2),st("#FFE9B0"),{p:[8,.01,74],s:[70,1,26],shadow:!1});e.receiveShadow=!0,this.scene.add(e);let n=V(new dn(520,200).rotateX(-Math.PI/2),st("#7CCBF0"),{p:[0,.02,196],shadow:!1});this.scene.add(n),this.water=n;let s=V(new Ai(1,40).rotateX(-Math.PI/2),st("#95D987"),{p:[-78,.008,4],s:[30,1,60],shadow:!1});s.receiveShadow=!0,this.scene.add(s);let r=nr(7),a=st("#FFFFFF",{emissive:"#ffffff",emissiveIntensity:.25});for(let o=0;o<9;o++){let l=new Pt,c=o/9*Math.PI*2;l.position.set(Math.cos(c)*140,34+r()*12,Math.sin(c)*140);for(let h=0;h<4;h++)l.add(V(W.sphereLo(),a,{p:[h*5-8,r()*2,r()*3],s:4+r()*3,shadow:!1}));this.scene.add(l)}}_ribbon(t,e,n,s){let r=t.pts,a=r.length,o=[],l=[];for(let g=0;g<a;g++){let _=r[g],m=-_.tz,p=_.tx;o.push(_.x-m*e,n,_.z-p*e,_.x+m*e,n,_.z+p*e)}let c=t.closed?a:a-1;for(let g=0;g<c;g++){let _=g*2,m=(g+1)%a*2;l.push(_,m,_+1,_+1,m,m+1)}let h=g=>new C(o[l[g]*3],o[l[g]*3+1],o[l[g]*3+2]);if(new C().subVectors(h(1),h(0)).cross(new C().subVectors(h(2),h(0))).y<0)for(let g=0;g<l.length;g+=3){let _=l[g+1];l[g+1]=l[g+2],l[g+2]=_}let d=new Be;d.setAttribute("position",new le(o,3)),d.setIndex(l),d.computeVertexNormals();let f=new we(d,s);return f.receiveShadow=!0,f}_roads(){let t=st("#FFF3D6"),e=st("#F4E2B8"),n=st("#FFFFFF");this.layout.roads.forEach((s,r)=>{let a=.03+r*.006;this.scene.add(this._ribbon(s,ue.halfWidth+.5,a-.01,e)),this.scene.add(this._ribbon(s,ue.halfWidth,a,t));let o=new wi(W.cyl(),st("#FFD9B8"),Math.ceil(s.length/5)),l=0;for(let c=2;c<s.length-1&&l<o.count;c+=5){let h=s.at(c),u=new pe().compose(new C(h.x,a+.012,h.z),new cn,new C(.35,.01,.35));o.setMatrixAt(l++,u)}o.count=l,this.scene.add(o)})}_bays(){this.bayMeshes=new Map;for(let t of this.layout.bays){let e=new Pt,n=t.kind==="house"?Hn[t.dest].color:"#C9BCF5",s=V(W.rbox(15,.06,ue.bayDepth+.5,.03),st("#FFF8E6"),{p:[0,.04,0],shadow:!1});s.receiveShadow=!0,e.add(s);let r=V(W.rbox(15.4,.04,ue.bayDepth+.9,.02),st(n),{p:[0,.03,0],shadow:!1});e.add(r);for(let o of[-4,0,4])e.add(V(W.cyl(),st(n),{p:[o,.09,0],s:[.45,.02,.45],shadow:!1}));let a=ue.halfWidth+ue.bayDepth*.5;if(e.position.set(t.x+t.rx*a,0,t.z+t.rz*a),e.rotation.y=Math.atan2(t.rx,t.rz),t.kind==="pickup"){let o=new Pt;o.add(V(W.cyl(),st("#FFFFFF"),{p:[0,1,0],s:[.08,2,.08]}));let l=V(W.cyl(),st("#C9BCF5"),{p:[0,2.2,0],s:[.55,.1,.55],r:[Math.PI/2,0,0]});o.add(l);for(let[c,h,u]of[[0,-.08,.2],[-.2,.15,.09],[0,.22,.09],[.2,.15,.09]])o.add(V(W.sphereLo(),st("#FFFFFF"),{p:[c,2.2+h,.07],s:[u,u,.03],shadow:!1}));o.position.set(7.2,0,ue.bayDepth*.5+.4),e.add(o)}this.scene.add(e),this.bayMeshes.set(t.id,e)}}_houses(){this.houses=new Map;for(let t of this.layout.bays.filter(e=>e.kind==="house")){let e=Rn("house-"+t.dest,256,(r,a)=>oa(r,t.dest,a)),n=Sf(t.dest,e),s=ue.halfWidth+ue.bayDepth+4.2;n.position.set(t.x+t.rx*s,0,t.z+t.rz*s),n.rotation.y=Math.atan2(-t.rx,-t.rz),this.scene.add(n),this.houses.set(t.dest,{group:n,bay:t,parts:n.userData.parts})}}_signs(){this.signs=[];for(let t of this.layout.forks){let e=this.layout.loop.at(t.signS),n=Math.atan2(-e.tx,-e.tz),s=(r,a)=>{let o=new Pt;o.add(V(W.cyl(),st("#FFFFFF"),{p:[0,1.4,0],s:[.12,2.8,.12]}));let l=V(W.rbox(2.6,2.6,.24,.3),new ui({color:"#FFFFFF",emissive:Hn[r].color,emissiveIntensity:0}),{p:[0,3.6,0]});o.add(l);let c=Rn("house-"+r,256,(g,_)=>oa(g,r,_)),h=new we(new dn(2.3,2.3),new hn({map:c,transparent:!0}));h.position.set(0,3.6,.13),o.add(h);let u=V(W.cone(),st(Hn[r].color),{p:[a*.9,5.4,0],s:[.45,.9,.2],r:[0,0,-a*.75]});o.add(u);let d=new Nn(new Sn({map:this._softTex(),color:Hn[r].color,transparent:!0,depthWrite:!1,opacity:0}));d.position.set(0,3.6,-.3),d.scale.set(5,5,1),o.add(d);let f=(ue.halfWidth+1.6)*a;o.position.set(e.x+e.rx*f,0,e.z+e.rz*f),o.rotation.y=n,this.scene.add(o),this.signs.push({dest:r,group:o,board:l,halo:d,arrow:u,fork:t.id})};s(t.destOnBranch,-1),s(t.destOnLoop,1)}}_softTex(){return Rn("soft",64,(t,e)=>{let n=t.createRadialGradient(e/2,e/2,1,e/2,e/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.5,"rgba(255,255,255,0.6)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,e,e)})}_farFromRoads(t,e,n){for(let s of this.layout.roads)if(s.nearest(t,e).dist<n)return!1;for(let s of this.houses.values())if(s.group.position.distanceTo(new C(t,0,e))<7)return!1;for(let s of this.signs)if(s.group.position.distanceTo(new C(t,0,e))<3)return!1;return!0}_scatter(t,e,n,s,r){let a=[],o=0;for(;a.length<e&&o++<e*80;){let l=this.layout.roads[Math.floor(t()*this.layout.roads.length)],c=l.at(t()*l.length),h=t()<.5?-1:1,u=s+t()*(r-s),d=c.x+c.rx*u*h,f=c.z+c.rz*u*h;n&&this.layout.regionAt(d,f)!==n||this._farFromRoads(d,f,s)&&(a.some(g=>(g.x-d)**2+(g.z-f)**2<9)||a.push({x:d,z:f,face:Math.atan2(-c.rx*h,-c.rz*h)}))}return a}_scenery(){let t=nr(2610);this.pinwheels=[],this.awnings=[],this.shells=[],this.squirrels=[],this.mushrooms=[],this.fountains=[];let e=this.scene,n=["#FFB8C6","#BDE7FF","#C9F2D8","#E3D7FF","#FFE3A8"];for(let h of this._scatter(t,14,"town",12,26)){let u=new Pt,d=3+t()*2,f=2.5+t()*2;u.add(V(W.rbox(d,f,3,.2),st(n[Math.floor(t()*5)]),{p:[0,f/2,0]})),u.add(V(W.cone(),st("#FF8E94"),{p:[0,f+.8,0],s:[d*.75,1.6,2.2],r:[0,Math.PI/4,0]})),u.add(V(W.rbox(.8,1.2,.1,.1),st("#FFFFFF"),{p:[0,.6,1.52]})),u.position.set(h.x,0,h.z),u.rotation.y=h.face,e.add(u)}for(let h of this._scatter(t,6,"town",8.5,11)){let u=new Pt;u.add(V(W.cyl(),st("#FFFFFF"),{p:[0,1.2,0],s:[.08,2.4,.08]}));let d=new Pt;d.position.set(0,2.5,.12);let f=["#FF8E94","#FFD35A","#83D9B0","#B5A2EE"];for(let g=0;g<4;g++){let _=V(W.box(),st(f[g]),{s:[.5,.9,.04]}),m=new Pt;m.rotation.z=g*Math.PI/2,_.position.set(.22,.42,0),_.rotation.z=.5,m.add(_),d.add(m)}u.add(d),u.position.set(h.x,0,h.z),u.rotation.y=h.face,e.add(u),this.pinwheels.push({g:u,wheel:d,spin:1,boost:0})}for(let h of this._scatter(t,4,"town",10,13)){let u=new Pt;u.add(V(W.rbox(3.2,2.6,2.4,.2),st("#FFF3D6"),{p:[0,1.3,0]}));let d=new Pt;d.position.set(0,2.3,1.2);for(let f=0;f<5;f++)d.add(V(W.box(),st(f%2?"#FFFFFF":"#FF8E94"),{p:[-1.28+f*.64,-.15,.4],s:[.64,.08,.9],r:[.4,0,0]}));u.add(d),u.add(V(W.sphere(),st("#FFD35A"),{p:[.9,1.1,1.25],s:.25})),u.position.set(h.x,0,h.z),u.rotation.y=h.face,e.add(u),this.awnings.push({g:u,awn:d,flap:0})}for(let h of this._scatter(t,6,"sea",7.5,9.5)){let u=new Pt,d=st(["#FFB8C6","#FFE3A8","#E3D7FF"][Math.floor(t()*3)]);u.add(V(W.sphere(),d,{p:[0,.15,0],s:[.7,.18,.6]}));let f=V(W.sphere(),st("#FFFFFF",{emissive:"#ffffff",emissiveIntensity:.4}),{p:[0,.3,0],s:.18});u.add(f);let g=new Pt;g.position.set(0,.25,-.5),g.add(V(W.sphere(),d,{p:[0,.05,.5],s:[.72,.22,.62]})),u.add(g),u.position.set(h.x,0,h.z),u.rotation.y=h.face,e.add(u),this.shells.push({g:u,lid:g,open:0,isOpen:!1})}for(let h of this._scatter(t,1,"sea",9,12)){let u=new Pt;u.add(V(W.cyl(),st("#BDE7FF"),{p:[0,.35,0],s:[1.6,.7,1.6]})),u.add(V(W.cyl(),st("#7CCBF0"),{p:[0,.72,0],s:[1.4,.05,1.4],shadow:!1})),u.add(V(W.cyl(),st("#FFFFFF"),{p:[0,1.2,0],s:[.25,1.2,.25]})),u.position.set(h.x,0,h.z),e.add(u),this.fountains.push({g:u,spray:0,emitT:0})}for(let h of this._scatter(t,7,"sea",12,24)){let u=new Pt;u.add(V(W.cyl(),st("#D9A66B"),{p:[0,2,0],s:[.2,4,.2],r:[.1,0,.05]}));for(let d=0;d<5;d++)u.add(V(W.sphere(),st("#5FCB7E"),{p:[Math.cos(d*1.25)*1,4.1,Math.sin(d*1.25)*1],s:[1.2,.25,.5],r:[0,-d*1.25,.3]}));u.position.set(h.x,0,h.z),e.add(u)}for(let h of this._scatter(t,3,"sea",13,20)){let u=new Pt;u.add(V(W.cyl(),st("#FFFFFF"),{p:[0,1.2,0],s:[.06,2.4,.06]})),u.add(V(W.cone(),st(["#FF8E94","#83D9B0","#B5A2EE"][Math.floor(t()*3)]),{p:[0,2.6,0],s:[1.6,.7,1.6]})),u.position.set(h.x,0,h.z),e.add(u)}let s=this._scatter(t,46,"wood",10,34).concat(this._scatter(t,12,"town",14,30)),r=new wi(W.cyl(),st("#C98E5C"),s.length),a=new wi(W.sphereLo(),st("#62C774"),s.length),o=new wi(W.sphereLo(),st("#86DB8A"),s.length);r.castShadow=a.castShadow=!0;let l=new pe,c=new cn;s.forEach((h,u)=>{let d=.8+t()*.6;r.setMatrixAt(u,l.compose(new C(h.x,1.2*d,h.z),c,new C(.3*d,2.4*d,.3*d))),a.setMatrixAt(u,l.compose(new C(h.x,3.4*d,h.z),c,new C(1.8*d,1.7*d,1.8*d))),o.setMatrixAt(u,l.compose(new C(h.x+.6*d,4.4*d,h.z+.3*d),c,new C(1.1*d,1*d,1.1*d)))}),e.add(r,a,o);for(let h of this._scatter(t,8,"wood",6.5,9)){let u=new Pt;u.add(V(W.cyl(),st("#FFF3D6"),{p:[0,.35,0],s:[.22,.7,.22]}));let d=V(W.sphere(),st(t()<.5?"#FF8E94":"#FFB27A"),{p:[0,.75,0],s:[.6,.35,.6]});u.add(d);for(let f=0;f<3;f++)d.add(V(W.sphereLo(),st("#FFFFFF"),{p:[Math.cos(f*2.1)*.55,.6,Math.sin(f*2.1)*.55],s:.18,shadow:!1}));u.position.set(h.x,0,h.z),e.add(u),this.mushrooms.push({g:u,bob:0,near:!1})}for(let h of this._scatter(t,4,"wood",7.5,10)){let u=new Pt;u.add(V(W.cyl(),st("#C98E5C"),{p:[0,.3,0],s:[.6,.6,.6]}));let d=new Pt;d.position.y=.6,d.add(V(W.sphere(),st("#D98A4E"),{p:[0,.35,0],s:[.25,.32,.22]})),d.add(V(W.sphere(),st("#D98A4E"),{p:[0,.78,.05],s:.2})),$x(d,.82,.22),d.add(V(W.sphere(),st("#E8A266"),{p:[0,.6,-.3],s:[.16,.45,.14],r:[-.4,0,0]}));let f=new Pt;f.position.set(.22,.5,.05),f.add(V(W.cyl(),st("#FFFFFF"),{p:[0,.4,0],s:[.025,.8,.025]})),f.add(V(W.box(),st(["#FF8E94","#83D9B0","#B5A2EE","#FFD35A"][this.squirrels.length%4]),{p:[0,.7,-.2],s:[.03,.26,.38]})),d.add(f),u.add(d),u.position.set(h.x,0,h.z),u.rotation.y=h.face,e.add(u),this.squirrels.push({g:u,arm:f,wave:0,near:!1})}this.butterflies=[];for(let h=0;h<6;h++){let u=new Pt,d=st(["#FFB8C6","#FFE066","#B5A2EE"][h%3],{side:bn}),f=V(W.box(),d,{p:[-.18,0,0],s:[.34,.02,.26],shadow:!1}),g=V(W.box(),d,{p:[.18,0,0],s:[.34,.02,.26],shadow:!1}),_=new Pt;_.add(f);let m=new Pt;m.add(g),u.add(_,m),e.add(u);let p=this.layout.loop,S=p.at(t()*p.length);this.butterflies.push({b:u,pl:_,pr:m,cx:S.x+S.rx*6,cz:S.z+S.rz*6,ph:t()*6})}}_particles(){let t=this._softTex(),e=Rn("star",64,(l,c)=>{Ph(l,c/2,c/2,c*.46,c*.2),l.fillStyle="#fff",l.fill()}),n=Rn("heart",64,(l,c)=>{Fh(l,c/2,c/2,c*.36),l.fillStyle="#fff",l.fill()}),s=Rn("sq",32,(l,c)=>{l.fillStyle="#fff",l.fillRect(4,8,c-8,c-16)}),r=Rn("bubble",64,(l,c)=>{l.strokeStyle="rgba(255,255,255,0.95)",l.lineWidth=5,l.beginPath(),l.arc(c/2,c/2,c*.38,0,7),l.stroke(),l.fillStyle="rgba(200,240,255,0.35)",l.fill(),l.fillStyle="#fff",l.beginPath(),l.arc(c*.38,c*.36,c*.08,0,7),l.fill()});this.ptex={soft:t,star:e,heart:n,sq:s,bubble:r},this.pmats=new Map,this.pool=[];for(let l=0;l<180;l++){let c=new Nn(new Sn({map:t,transparent:!0,depthWrite:!1}));c.visible=!1,this.scene.add(c),this.pool.push({s:c,life:0,max:1,vx:0,vy:0,vz:0,g:0,size:.3,grow:0,fade:!0})}this.marks=[];let a=new dn(.32,.8).rotateX(-Math.PI/2),o=["#FF8E94","#FFB27A","#FFD35A","#83D9B0","#7CCBF0","#B5A2EE"];for(let l=0;l<36;l++){let c=new we(a,new hn({color:o[l%6],transparent:!0,opacity:0,depthWrite:!1}));c.visible=!1,this.scene.add(c),this.marks.push({m:c,life:0})}this.markIdx=0}emit(t,e,n,s,{color:r="#ffffff",n:a=1,speed:o=2,up:l=2,g:c=-3,life:h=1,size:u=.35,grow:d=0,spread:f=.3}={}){for(let g=0;g<a;g++){let _=this.pool.find(S=>S.life<=0);if(!_)return;_.s.material.map=this.ptex[t]||this.ptex.soft,_.s.material.color.set(r),_.s.material.opacity=1,_.s.material.rotation=Math.random()*6,_.s.position.set(e+(Math.random()-.5)*f,n+(Math.random()-.5)*f,s+(Math.random()-.5)*f);let m=Math.random()*Math.PI*2,p=o*(.4+Math.random()*.6);_.vx=Math.cos(m)*p,_.vz=Math.sin(m)*p,_.vy=l*(.6+Math.random()*.6),_.g=c,_.life=h*(.7+Math.random()*.5),_.max=_.life,_.size=u,_.grow=d,_.s.scale.setScalar(u),_.s.visible=!0}}_updateParticles(t){for(let e of this.pool){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.s.visible=!1;continue}e.vy+=e.g*t,e.s.position.x+=e.vx*t,e.s.position.y+=e.vy*t,e.s.position.z+=e.vz*t,e.s.position.y<.05&&(e.s.position.y=.05,e.vy=0,e.vx*=.9,e.vz*=.9);let n=e.life/e.max;e.s.material.opacity=Math.min(1,n*2),e.s.scale.setScalar(e.size*(1+e.grow*(1-n)))}for(let e of this.marks)e.life<=0||(e.life-=t,e.m.material.opacity=Ue(e.life/2.5,0,.8),e.life<=0&&(e.m.visible=!1))}_taxi(){this.taxi=yf(),this.scene.add(this.taxi.root);let t=new we(new dn(2.6,4).rotateX(-Math.PI/2),Oh());t.position.y=.06,this.taxi.root.add(t),this.paintTarget=new Kt(xn.sunshine),this.equippedKey="",this.decoMeshes=[],this.signDest=null}_animals(){this.animalModels={};for(let t of Object.keys(Ve)){let e=Mf(t);e.visible=!1,this.scene.add(e),this.animalModels[t]=e}}_traffic(){let t=["#83D9B0","#B5A2EE","#7CCBF0"];this.trafficModels=this.game.traffic.map((e,n)=>{let s=bf(t[n%3]);return this.scene.add(s),s})}_collectibles(){this.collectModels=[];let t=(()=>{let n=new Ci;for(let s=0;s<10;s++){let r=s%2?.22:.5,a=-Math.PI/2+s*Math.PI/5,o=Math.cos(a)*r,l=Math.sin(a)*r;s?n.lineTo(o,l):n.moveTo(o,l)}return n.closePath(),new Zi(n,{depth:.16,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1}).translate(0,0,-.08)})(),e=["#FF8E94","#83D9B0","#B5A2EE","#7CCBF0","#FFB27A"];for(let n=0;n<10;n++){let s=new Pt,r=new Pt;r.add(V(W.sphere(),st(e[n%5]),{p:[0,0,0],s:[.42,.5,.42]})),r.add(V(W.cone(),st(e[n%5]),{p:[0,-.52,0],s:[.08,.1,.08],r:[Math.PI,0,0]})),r.add(V(W.cyl(),st("#FFFFFF"),{p:[0,-1,0],s:[.012,.9,.012],shadow:!1}));let a=new we(t,st("#FFD35A",{emissive:"#8a6a00",emissiveIntensity:.3}));a.castShadow=!0,s.add(r,a),s.visible=!1,this.scene.add(s),this.collectModels.push({g:s,bal:r,st:a})}}_washRig(){let t=new Pt,e=st("#FF8E94");for(let a of[-2.2,2.2])t.add(V(W.cyl(),e,{p:[a,1.9,0],s:[.18,3.8,.18]}));t.add(V(W.rbox(4.8,.4,.5,.18),e,{p:[0,3.9,0]}));let n=Rn("brush",64,(a,o)=>{let l=["#83D9B0","#FFFFFF","#B5A2EE","#FFFFFF"];for(let c=0;c<8;c++)a.fillStyle=l[c%4],a.fillRect(0,c*o/8,o,o/8)}),s=new ui({map:n});this.brushes=[];for(let a of[-1.6,1.6]){let o=V(W.cyl(),s,{p:[a,1.4,0],s:[.45,2.4,.45]});t.add(o),this.brushes.push(o)}let r=V(W.cyl(),s,{p:[0,2.85,0],s:[.35,3.4,.35],r:[0,0,Math.PI/2]});t.add(r),this.brushes.push(r),t.visible=!1,this.scene.add(t),this.wash={g:t,t:0,color:null}}_beacons(){let t=new Pt,e={};for(let c of Object.keys(Ve))e[c]=Rn("face-"+c,256,(h,u)=>Ih(h,c,u));this.faceTexes=e;let n=new Nn(new Sn({map:this._softTex(),color:"#FFFFFF",transparent:!0,depthWrite:!1}));n.scale.set(3.4,3.4,1);let s=new Nn(new Sn({map:e.rabbit,transparent:!0,depthWrite:!1}));s.scale.set(2.3,2.3,1),t.add(n,s);let r=new Fs(1.6,2.1,36).rotateX(-Math.PI/2),a=new we(r,new hn({color:"#FFFFFF",transparent:!0,opacity:.8,depthWrite:!1}));this.scene.add(t),this.scene.add(a),this.beacon={g:t,face:s,bubble:n,ring:a};let o=new Nn(new Sn({map:this.ptex.star,color:"#FFD35A",transparent:!0,depthWrite:!1}));o.scale.set(2.6,2.6,1);let l=new we(new Fs(3.4,4,40).rotateX(-Math.PI/2),new hn({color:"#FFD35A",transparent:!0,opacity:.8,depthWrite:!1}));this.scene.add(o,l),this.destBeacon={star:o,ring:l}}handleEvent(t){let e=this.game.vehicle;switch(t.type){case"honk":this._honkReactions(t.x,t.z),this.taxi.body.userData.honkT=.35;break;case"collect":{let n=t.kind==="star"?"#FFD35A":"#FF8E94";this.emit(t.kind==="star"?"star":"soft",t.x,1.5,t.z,{color:n,n:10,speed:3,up:2.5,life:.8,size:.45}),this.bounce=.35;break}case"bump":this.emit("soft",e.x,.8,e.z,{color:"#FFFFFF",n:6,speed:1.5,up:1,life:.6,size:.6}),this.bounce=.25;break;case"fastTurn":{for(let n=0;n<6;n++)this._mark(e,n*.12);this.bounce=.2;break}case"washColor":this.paintTarget.set(xn[t.color]),this.wash.color=xn[t.color];break;case"decoration":this.fitSparkle=2;break;default:break}}_mark(t,e){let n=this.marks[this.markIdx++%this.marks.length],s=t.right(),r=t.forward(),a=(this.markIdx%2?1:-1)*.95;n.m.position.set(t.x+s.x*a-r.x*(1.1+e*3),.05,t.z+s.z*a-r.z*(1.1+e*3)),n.m.rotation.y=t.heading,n.m.visible=!0,n.life=2.5}_honkReactions(t,e){let n=(s,r)=>(s.g.position.x-t)**2+(s.g.position.z-e)**2<r*r;for(let s of this.pinwheels)n(s,30)&&(s.boost=14,this.reactions.pinwheel++);for(let s of this.awnings)n(s,30)&&(s.flap=1.6,this.reactions.awning++);for(let s of this.mushrooms)n(s,30)&&(s.bob=1.2,this.reactions.mushroom++);for(let s of this.fountains)n(s,30)&&(s.spray=2.5,this.reactions.fountain++);for(let s of this.squirrels)n(s,30)&&(s.wave=2,this.reactions.squirrel++)}update(t){this.time+=t;let e=this.game,n=e.vehicle,s=this.time,r=this.taxi;r.root.position.set(n.x,0,n.z),r.root.rotation.y=n.heading;for(let u of r.wheels)u.rotation.x+=n.speed*t/.42;for(let u of r.front)u.rotation.y=-n.wheel*(28*Math.PI/180);this.bounce=Math.max(0,(this.bounce||0)-t);let a=Math.sin(s*18)*.03*Math.min(1,n.speed/6)+Math.sin(this.bounce*20)*this.bounce*.25;r.body.position.y=a;let o=Ue(n.yawRate*n.speed*.012,-.05,.05);r.body.rotation.z=er(r.body.rotation.z,-o,.15,t);let l=r.body.userData.honkT||0;l>0?(r.body.userData.honkT=l-t,r.body.scale.set(1+l*.08,1-l*.06,1+l*.08)):r.body.scale.set(1,1,1),r.paint.color.lerp(this.paintTarget,Math.min(1,t*3)),this.paintInit||(this.paintTarget.set(xn[e.rec.carColor]),r.paint.color.copy(this.paintTarget),this.paintInit=!0),e.phase!=="WASH_FINISH"&&e.phase!=="WASH_CHOICE"&&this.paintTarget.set(xn[e.rec.carColor]),this._updateDecorations(t);let c=e.passenger,h=c&&(c.state==="riding"||c.state==="boarding")?Ve[c.animal].dest:null;h!==this.signDest&&(this.signDest=h,r.sign.visible=r.post.visible=!!h,h&&(r.sign.material.map=Rn("house-"+h,256,(u,d)=>oa(u,h,d)),r.sign.material.needsUpdate=!0)),h&&r.sign.scale.setScalar(1.25+Math.sin(s*3)*.05),this._updatePassenger(t),this._updateTraffic(t),this._updateCollectibles(t),this._updateSigns(t),this._updateBeacons(t),this._updateScenery(t),this._updateWash(t),this._updateParade(t),this._updateParticles(t),this._updateCamera(t),this.sun.position.set(n.x+18,34,n.z+8),this.sun.target.position.set(n.x,0,n.z)}_updateDecorations(t){let e=this.game.rec.deco.equipped,n=JSON.stringify(e);if(n!==this.equippedKey){this.equippedKey=n;for(let r of this.decoMeshes)r.parent&&r.parent.remove(r);this.decoMeshes=[];for(let[r,a]of Object.entries(e)){let o=vf(a);this.taxi.slots[r].add(o),this.decoMeshes.push(o)}}let s=this.time;for(let r of this.decoMeshes){let a=r.userData;a.flutter&&(a.flutter.rotation.y=Math.sin(s*8)*.25),a.spin&&(a.spin.rotation.x+=t*(2+this.game.vehicle.speed)),a.bob&&(a.bob.position.y=.25+Math.sin(s*4)*.05),a.twinkle&&r.children.forEach((o,l)=>{o.userData.s0||(o.userData.s0=o.scale.x),o.scale.setScalar(o.userData.s0*(1+.15*Math.sin(s*6+l)))})}if(this.fitSparkle>0){this.fitSparkle-=t;let r=this.game.vehicle;Math.random()<.5&&this.emit("star",r.x,2.4,r.z,{color:"#FFD35A",n:1,speed:1.6,up:1.5,g:-1,life:.9,size:.4,spread:2})}}_seatWorld(t){return this.taxi.root.updateMatrixWorld(),this.taxi.seat.getWorldPosition(t)}_updatePassenger(t){let e=this.game,n=this.time,s=e.passenger,r=e.phase==="PARADE";for(let[h,u]of Object.entries(this.animalModels)){let d=r&&e.paradeAnimals.includes(h);!(s&&s.animal===h)&&!d&&(u.parent!==this.scene&&this.scene.add(u),u.visible=!1)}if(!s||r)return;let a=this.animalModels[s.animal],o=a.userData.parts;a.visible=!0,wf(o);let l=e.vehicle,c=this._seatWorld(new C);if(s.state==="waiting"||s.state==="boarding"){let h=e.bayById.get(s.bayId)||e.boardBay,u=ue.halfWidth+ue.bayDepth-.4,d=h.x+h.rx*u,f=h.z+h.rz*u,g=Math.atan2(-h.rx,-h.rz);if(a.parent!==this.scene&&this.scene.add(a),s.state==="waiting")a.position.set(d,0,f),a.rotation.set(0,g,0),Kx(s.animal,o,n),this._waitEffects(s.animal,a,n,t);else{let _=Ue(e.phaseT/oe.boardSec,0,1),m=l.right(),p=new C(l.x+m.x*1.5,0,l.z+m.z*1.5);if(_<.72){let S=_/.72,A=new C(d,0,f).lerp(p,zl(S));a.position.copy(A),a.rotation.set(0,Math.atan2(p.x-d,p.z-f),0),Tf(s.animal,o,S,n,a)}else{let S=(_-.72)/.28;a.position.lerpVectors(p,c,zl(S)),a.position.y=c.y*S+Math.sin(S*Math.PI)*.8,a.rotation.set(0,l.heading,0),Af(s.animal,o,S,n)}}}else if(s.state==="riding")a.parent!==this.taxi.seat&&this.taxi.seat.add(a),a.position.set(0,0,0),a.rotation.set(0,0,0),jx(s.animal,o,n,e.vehicle,this);else if(s.state==="alighting"||s.state==="thanks"){a.parent!==this.scene&&this.scene.add(a);let h=this.houses.get(Ve[s.animal].dest),u=h.bay,d=ue.halfWidth+ue.bayDepth-.2,f=u.x+u.rx*d+u.tx*1.5,g=u.z+u.rz*d+u.tz*1.5;if(s.state==="alighting"){let _=Ue(e.phaseT/oe.alightSec,0,1),m=l.right(),p=new C(l.x+m.x*1.5,0,l.z+m.z*1.5);if(_<.3){let S=_/.3;a.position.lerpVectors(c,p,zl(S)),a.position.y=c.y*(1-S)+Math.sin(S*Math.PI)*.8,a.rotation.set(0,l.heading-Math.PI/2,0),Af(s.animal,o,S,n)}else{let S=(_-.3)/.7;a.position.copy(p).lerp(new C(f,0,g),zl(S)),a.rotation.set(0,Math.atan2(f-p.x,g-p.z),0),Tf(s.animal,o,S,n,a,!0)}}else{let _=Ue((e.phaseT-oe.alightSec)/oe.thanksSec,0,1);a.position.set(f,0,g),a.rotation.set(0,Math.atan2(l.x-f,l.z-g),0),Rf(s.animal,o,_,n,a),this._thanksEffects(s.animal,h,_,t,f,g)}}for(let h of this.houses.values())if(h.parts.arch){let u=s.animal==="rabbit"&&s.state==="thanks";h.parts.arch.visible=u||h.parts.arch.scale.x>.01;let d=u?1:.001;h.parts.arch.scale.setScalar(er(h.parts.arch.scale.x,d,.25,t))}}_waitEffects(t,e,n,s){Math.random()<s*1.2&&this.emit("heart",e.position.x,1.6,e.position.z,{color:"#FF8EB6",n:1,speed:.3,up:1,g:.2,life:1.4,size:.35})}_thanksEffects(t,e,n,s,r,a){if(Math.random()<s*6&&this.emit("heart",r,1.8,a,{color:"#FF8EB6",n:1,speed:.8,up:1.4,g:.1,life:1.2,size:.4}),t==="duck"){let o=e.parts.fountain;o&&(o.visible=!0,o.children.forEach((l,c)=>{let h=(this.time*1.6+c/7)%1;l.position.set(Math.cos(c)*h*.6,Math.sin(h*Math.PI)*1.8,Math.sin(c)*h*.6)})),Math.random()<s*10&&this.emit("soft",r+.5,.3,a,{color:"#BDE7FF",n:2,speed:1.5,up:2.5,g:-6,life:.6,size:.25})}t==="penguin"&&Math.random()<s*4&&this.emit("star",r,1.6,a,{color:"#7CCBF0",n:1,speed:1,up:1,life:.9,size:.3}),t==="bear"&&Math.random()<s*3&&this.emit("soft",r,.2,a,{color:"#F4E2B8",n:3,speed:1.2,up:.4,g:-1,life:.6,size:.5})}_updateTraffic(t){this.game.traffic.forEach((e,n)=>{let s=this.trafficModels[n];s.position.set(e.x,0,e.z),s.rotation.y=e.heading;let r=s.userData;r.body.position.y=Math.sin(this.time*9+n)*.02,r.hand.position.y=.15+(e.wave>0?Math.abs(Math.sin(this.time*12))*.35:0)})}_updateCollectibles(){let t=this.game.collectibles;this.collectModels.forEach((e,n)=>{let s=t[n];if(!s||!s.alive){e.g.visible=!1;return}e.g.visible=!0,e.bal.visible=s.kind==="balloon",e.st.visible=s.kind==="star",e.g.position.set(s.x,1.5+Math.sin(this.time*2.5+n)*.2,s.z),e.st.rotation.y=this.time*2})}_updateSigns(){let t=this.game,e=t.passenger,n=t.phase==="DRIVE_TO_HOUSE"&&e?Ve[e.animal].dest:null,s=.5+.5*Math.sin(this.time*4);for(let r of this.signs){let a=r.dest===n;r.board.material.emissiveIntensity=a?.25+.35*s:0,r.halo.material.opacity=a?.45+.4*s:0,r.halo.scale.setScalar(a?5+s:4),r.arrow.position.y=5.4+(a?s*.3:0)}this.signGlow=this.signs.filter(r=>r.board.material.emissiveIntensity>0).map(r=>r.dest)}_updateBeacons(){let t=this.game,e=this.time,n=this.beacon,s=t.passenger,r=t.phase==="SEEK_PASSENGER"&&s&&s.state==="waiting";if(n.g.visible=n.ring.visible=!!r,r){let l=t.bayById.get(s.bayId),c=ue.halfWidth+ue.bayDepth-.4,h=l.x+l.rx*c,u=l.z+l.rz*c;n.g.position.set(h,4.6+Math.sin(e*2.2)*.3,u),n.face.material.map!==this.faceTexes[s.animal]&&(n.face.material.map=this.faceTexes[s.animal],n.face.material.needsUpdate=!0),n.ring.position.set(l.x+l.rx*2.5,.12,l.z+l.rz*2.5);let d=1+.12*Math.sin(e*4);n.ring.scale.set(d*2.4,1,d*1.4),n.ring.rotation.y=Math.atan2(l.tx,l.tz),n.ring.material.color.set("#B5A2EE")}let a=this.destBeacon,o=t.phase==="DRIVE_TO_HOUSE"&&s;if(a.star.visible=a.ring.visible=!!o,o){let l=this.houses.get(Ve[s.animal].dest);a.star.position.set(l.group.position.x,8.4+Math.sin(e*2)*.4,l.group.position.z),a.star.material.rotation=Math.sin(e)*.3;let c=l.bay;a.ring.position.set(c.x+c.rx*2.5,.12,c.z+c.rz*2.5);let h=1+.1*Math.sin(e*4);a.ring.scale.set(h*1.5,1,h*.9),a.ring.material.color.set(Hn[c.dest].color)}}_updateScenery(t){let e=this.game.vehicle,n=this.time,s=r=>(r.g.position.x-e.x)**2+(r.g.position.z-e.z)**2;for(let r of this.pinwheels)r.boost=Math.max(0,r.boost-t*5),r.wheel.rotation.z+=t*(1+r.boost);for(let r of this.awnings)r.flap=Math.max(0,r.flap-t),r.awn.rotation.x=Math.sin(n*14)*.25*r.flap;for(let r of this.shells){let a=s(r)<144;a&&!r.isOpen&&this.reactions.shell++,r.isOpen=a,r.open=er(r.open,a?1:0,.25,t),r.lid.rotation.x=-r.open*1.1}for(let r of this.fountains){let a=s(r)<225;a&&!r.near&&(r.spray=Math.max(r.spray,1.5),this.reactions.fountain++),r.near=a,r.spray=Math.max(0,r.spray-t*.4),r.emitT-=t,r.spray>0&&r.emitT<=0&&(r.emitT=.05,this.emit("soft",r.g.position.x,2.4,r.g.position.z,{color:"#CFF1FF",n:2,speed:1.2*(.5+r.spray),up:4*(.6+r.spray*.5),g:-9,life:.9,size:.3}))}for(let r of this.squirrels){let a=s(r)<196;a&&!r.near&&(r.wave=2,this.reactions.squirrel++),r.near=a,r.wave=Math.max(0,r.wave-t),r.arm.rotation.z=r.wave>0?Math.sin(n*10)*.6:.1,r.g.children[1].position.y=.6+(r.wave>0?Math.abs(Math.sin(n*6))*.15:0)}for(let r of this.mushrooms){let a=s(r)<36;a&&!r.near&&(r.bob=1.2,this.reactions.mushroom++),r.near=a,r.bob=Math.max(0,r.bob-t);let o=Math.sin(n*12)*.15*r.bob;r.g.scale.set(1+o,1-o,1+o)}for(let r of this.butterflies){let a=n*.5+r.ph;r.b.position.set(r.cx+Math.cos(a)*3,1.6+Math.sin(n*2+r.ph)*.5,r.cz+Math.sin(a*1.3)*3),r.b.rotation.y=-a;let o=Math.sin(n*16+r.ph)*.9;r.pl.rotation.z=o,r.pr.rotation.z=-o}this.water.position.y=.02+Math.sin(n)*.02}_updateWash(t){let e=this.game,n=this.wash,s=(e.phase==="WASH_CHOICE"||e.phase==="WASH_FINISH")&&e.washRig;if(n.g.visible=!!s,!s){n.color=null;return}let r=e.washRig;n.g.position.set(r.x,0,r.z),n.g.rotation.y=r.heading;let a=this.time,o=Math.sin(a*1.6)*1.4;this.brushes[0].position.z=o,this.brushes[1].position.z=-o,this.brushes[2].position.z=Math.sin(a*1.2)*1.3;for(let u of this.brushes.slice(0,2))u.rotation.y+=t*9;this.brushes[2].rotation.x+=t*9;let l=e.vehicle.forward(),c=r.x,h=r.z;(e.phase==="WASH_CHOICE"||e.phaseT<oe.washShowerSec)&&Math.random()<t*14&&this.emit("bubble",c+(Math.random()-.5)*2.4,.6+Math.random()*1.4,h+(Math.random()-.5)*3.4,{color:"#FFFFFF",n:1,speed:.3,up:.6,g:.3,life:1.4,size:.45}),e.phase==="WASH_FINISH"&&(e.phaseT<oe.washShowerSec?Math.random()<t*40&&this.emit("soft",c+(Math.random()-.5)*3,3.6,h+(Math.random()-.5)*3.6,{color:n.color||"#ffffff",n:1,speed:.2,up:-1,g:-9,life:.5,size:.28}):(Math.random()<t*30&&this.emit("soft",c+(Math.random()-.5)*3,3.6,h+(Math.random()-.5)*3.6,{color:"#DDF5FF",n:1,speed:.2,up:-1,g:-9,life:.5,size:.22}),Math.random()<t*8&&this.emit("star",c+(Math.random()-.5)*2.6,.8+Math.random()*1.6,h+(Math.random()-.5)*3.4,{color:"#FFF3A0",n:1,speed:.4,up:.3,g:0,life:.7,size:.35})))}_updateParade(t){let e=this.game;if(e.phase!=="PARADE"){this.paradeHopT=0;return}let n=e.vehicle,s=this.time,r=e.paradeAnimals.length;if(this.paradeHopPending&&(this.paradeHopT=.6,this.paradeHopPending=!1),this.paradeHopT=Math.max(0,(this.paradeHopT||0)-t),e.paradeAnimals.forEach((a,o)=>{let l=this.animalModels[a];l.parent!==this.scene&&this.scene.add(l),l.visible=!0;let c=l.userData.parts;wf(c);let h=s*.55+o/Math.max(1,r)*Math.PI*2,u=4.4;l.position.set(n.x+Math.cos(h)*u,Math.abs(Math.sin(s*6+o))*.15+(this.paradeHopT>0?Math.sin(this.paradeHopT/.6*Math.PI)*.9:0),n.z+Math.sin(h)*u),l.rotation.set(0,-h,0),Rf(a,c,s*.3%1,s,l),l.position.y=Math.max(l.position.y,0)}),Math.random()<t*25){let a=["#FF8E94","#FFD35A","#83D9B0","#B5A2EE","#7CCBF0"];this.emit("sq",n.x+(Math.random()-.5)*10,6+Math.random()*2,n.z+(Math.random()-.5)*10,{color:a[Math.floor(Math.random()*5)],n:1,speed:.6,up:0,g:-1.5,life:3,size:.3})}Math.random()<t*1.5&&this.emit("soft",n.x+(Math.random()-.5)*8,.5,n.z+(Math.random()-.5)*8,{color:["#FF8E94","#83D9B0","#B5A2EE"][Math.floor(Math.random()*3)],n:1,speed:.1,up:1.6,g:.4,life:4,size:.9})}_updateCamera(t){let e=this.game.vehicle,n=this.cam,s=this.h>this.w,r=this.game.phase,a=["WASH_CHOICE","WASH_FINISH","PARADE","DECORATION_CHOICE","ALIGHT_AND_THANK","BOARDING"].includes(r)?1:0;n.far=er(n.far,a,.8,t);let o=(s?9.4:7.6)+n.far*2.4,l=(s?4.9:3.9)+n.far*1.4;n.init||(n.yaw=e.heading);let c=Math.atan2(Math.sin(e.heading-n.yaw),Math.cos(e.heading-n.yaw));n.yaw+=c*(1-Math.exp(-t/.32));let h=Math.sin(n.yaw),u=Math.cos(n.yaw),d=new C(e.x-h*o,l,e.z-u*o),f=new C(e.x+h*5,1.2,e.z+u*5);n.init||(n.pos.copy(d),n.look.copy(f),n.init=!0);let g=1-Math.exp(-t/.14);n.pos.lerp(d,g),n.look.lerp(f,g),this.camera.position.copy(n.pos),this.camera.up.copy(Ef),this.camera.lookAt(n.look);let _=s?66:52;Math.abs(this.camera.fov-_)>.01&&(this.camera.fov=_,this.camera.updateProjectionMatrix())}resetCamera(){this.cam.init=!1}precompile(){let t=[];this.scene.traverse(e=>{e.visible||(t.push(e),e.visible=!0)}),this.update(0),this.renderer.compile(this.scene,this.camera),this.renderer.render(this.scene,this.camera);for(let e of t)e.visible=!1}resize(t,e){this.w=t,this.h=e,this.renderer.setPixelRatio(this.quality.dpr),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}render(t){this.contextLost||(this.renderer.render(this.scene,this.camera),t!==void 0&&this._adapt(t))}_adapt(t){if(this.frameTimes.push(t),this.frameTimes.length<90)return;let e=this.frameTimes.slice().sort((r,a)=>r-a),n=e[Math.floor(e.length/2)];this.frameTimes=[],this.lastMedianMs=n;let s=this.quality;n>24?s.dpr>_i.minDpr+.01?(s.dpr=Math.max(_i.minDpr,s.dpr-.25),s.changes++,this.resize(this.w,this.h)):s.shadows&&(s.shadows=!1,this.renderer.shadowMap.enabled=!1,this.sun.castShadow=!1,s.changes++):n<13&&s.dpr<Math.min(_i.maxDpr,window.devicePixelRatio||1)-.01&&(s.dpr=Math.min(_i.maxDpr,s.dpr+.25),s.changes++,this.resize(this.w,this.h))}project(t,e,n){let s=new C(t,e,n).project(this.camera);return{x:(s.x+1)/2*this.w,y:(1-s.y)/2*this.h,behind:s.z>1}}stats(){let t=this.renderer.info,e=0;for(let s of this.pool)s.life>0&&e++;let n=0;return this.scene.traverse(()=>n++),{geometries:t.memory.geometries,textures:t.memory.textures,calls:t.render.calls,triangles:t.render.triangles,programs:t.programs?t.programs.length:null,objects:n,particles:e,dpr:this.quality.dpr,shadows:this.quality.shadows,qualityChanges:this.quality.changes,medianFrameMs:this.lastMedianMs??null,reactions:{...this.reactions},signGlow:this.signGlow||[],decoMeshes:this.decoMeshes.length}}};function $x(i,t,e){for(let n of[-.07,.07])i.add(V(W.sphereLo(),st("#3B3350"),{p:[n,t,e-.05+.08],s:.035,shadow:!1}))}function zl(i){return i<.5?2*i*i:1-(-2*i+2)**2/2}function wf(i){for(let t of["armL","armR","prop"]){let e=i[t];e&&(e.userData.base||(e.userData.base=e.position.clone()),e.position.copy(e.userData.base))}i.bill&&(i.bill.scale.y=1),i.body.position.set(0,0,0),i.body.rotation.set(0,0,0),i.body.scale.set(1,1,1),i.head.rotation.set(0,0,0);for(let t of["armL","armR","earL","earR"])i[t]&&i[t].rotation.set(0,0,0);i.prop&&i.prop.rotation.set(0,0,0),i.blob&&(i.blob.visible=!0)}function Kx(i,t,e){i==="rabbit"?(t.earL.rotation.z=Math.sin(e*6)*.5,t.earR.rotation.z=-Math.sin(e*6+1)*.5,t.armR.rotation.z=.6+Math.sin(e*8)*.4,t.armR.position.y=.62):i==="penguin"?(t.body.rotation.z=Math.sin(e*6)*.12,t.armL.rotation.z=-.4-Math.abs(Math.sin(e*6))*.5,t.armR.rotation.z=.4+Math.abs(Math.sin(e*6))*.5):i==="bear"?(t.armR.rotation.z=0,t.armR.position.set(.42,.9+Math.sin(e*5)*.08,.1),t.armL.position.set(-.3,.6,.35),t.head.rotation.z=Math.sin(e*2)*.08):(t.armL.rotation.z=-Math.abs(Math.sin(e*12))*.9,t.armR.rotation.z=Math.abs(Math.sin(e*12))*.9,t.body.position.y=Math.abs(Math.sin(e*3))*.06)}function Tf(i,t,e,n,s,r=!1){if(i==="rabbit"){let o=e*2%1;t.body.position.y=Math.sin(o*Math.PI)*.8,t.body.scale.set(1,1+Math.sin(o*Math.PI)*.12,1),t.earL.rotation.x=t.earR.rotation.x=-Math.sin(o*Math.PI)*.4,r&&e>.85&&(t.body.rotation.x=Math.sin((e-.85)/.15*Math.PI)*.5)}else i==="penguin"?(t.body.rotation.z=Math.sin(n*12)*.18,t.armL.rotation.z=-.5,t.armR.rotation.z=.5,!r&&e>.75&&(t.body.rotation.x=1.2,t.body.position.y=.2)):i==="bear"?(t.body.position.y=Math.abs(Math.sin(n*5))*.05,t.body.rotation.z=Math.sin(n*5)*.05,t.armL.position.set(-.3,.6,.35),t.armR.position.set(.3,.6,.35),t.prop.rotation.z=Math.sin(n*5)*.04):(t.armL.rotation.z=-Math.abs(Math.sin(n*16))*1,t.armR.rotation.z=Math.abs(Math.sin(n*16))*1,t.body.position.y=e>.7?Math.sin((e-.7)/.3*Math.PI)*.5:Math.abs(Math.sin(n*8))*.05)}function Af(i,t,e,n){i==="bear"?(t.body.rotation.x=-.2*Math.sin(e*Math.PI),t.armL.position.set(-.3,.6,.35),t.armR.position.set(.3,.6,.35)):i==="penguin"?t.body.rotation.x=1*(1-e):i==="duck"?(t.armL.rotation.z=-Math.abs(Math.sin(n*18)),t.armR.rotation.z=Math.abs(Math.sin(n*18))):t.earL.rotation.x=t.earR.rotation.x=-.4,t.blob&&(t.blob.visible=!1)}function jx(i,t,e,n,s){t.blob&&(t.blob.visible=!1);let r=n.yawRate,a=s.rideReactT>0;if(i==="rabbit")t.earL.rotation.z=Math.sin(e*3)*.25+r*.6,t.earR.rotation.z=Math.sin(e*3+1)*.25+r*.6,a&&(t.body.position.y=Math.abs(Math.sin(e*14))*.15);else if(i==="penguin"){let o=Math.sin(e*8);t.armL.rotation.x=-.8+Math.max(0,o)*.6,t.armR.rotation.x=-.8+Math.max(0,-o)*.6,a&&(t.armL.rotation.z=-1.2),t.head.rotation.z=Math.sin(e*4)*.1}else i==="bear"?(t.armL.position.set(-.3,.6,.35),t.armR.position.set(.3,.6,.35),t.prop.rotation.z=Ue(r*.6,-.2,.2),t.berry.rotation.z=Math.sin(e*9)*Ue(Math.abs(r)*1.5+.05,0,.5),t.head.rotation.z=Math.sin(e*1.5)*.12):(t.body.position.x=-Math.sin(e*.8)*.2,t.head.rotation.y=-.6+Math.sin(e*.8)*.3,a?t.bill.scale.y=1+Math.abs(Math.sin(e*20))*1.5:t.bill.scale.y=1)}function Rf(i,t,e,n,s){i==="rabbit"?e<.25?t.body.rotation.x=Math.sin(e/.25*Math.PI)*.6:(t.body.position.y=Math.abs(Math.sin(n*7))*.5,t.body.rotation.y=Math.sin(n*3.5)*.6,t.armL.rotation.z=-.8,t.armR.rotation.z=.8):i==="penguin"?(t.body.rotation.z=Math.sin(n*7)*.25,t.armL.rotation.z=-.5-Math.abs(Math.sin(n*7))*1,t.armR.rotation.z=.5+Math.abs(Math.sin(n*7+1.5))*1,t.body.position.y=Math.abs(Math.sin(n*7))*.12):i==="bear"?(t.prop.position.set(0,.16,.6),t.body.position.y=Math.abs(Math.sin(n*4))*.25,t.body.rotation.z=Math.sin(n*4)*.15,t.armL.position.set(-.45,.95,.1),t.armR.position.set(.45,.95,.1)):(t.armL.rotation.z=-Math.abs(Math.sin(n*14))*1.1,t.armR.rotation.z=Math.abs(Math.sin(n*14))*1.1,t.body.position.y=Math.abs(Math.sin(n*5))*.35,t.body.rotation.y=n*3),i!=="bear"&&t.prop&&t.prop.position.set(0,.42,.42)}var qs=new URLSearchParams(location.search),Js=qs.get("debug")==="1",Cf=Js?$s+"-debug":$s,Ys={manual:!1,t:0,now(){return this.manual?this.t:performance.now()}},ha=()=>Ys.now(),Yt=new Ol;Yt.bind();var ql=!1;try{ql=window.top!==window.self}catch{ql=!0}ql&&Yt.setEmbedded(location.href);var Xs=new xa(()=>window.localStorage,Cf);Js&&qs.get("fresh")==="1"&&Xs.clear();var If=Js&&qs.get("seed")?parseInt(qs.get("seed"),10):Date.now()&65535,Qx=nr(If),ae=new Ll,vt=new Fl({store:Xs,rng:Qx,audio:ae}),je=vt.rec.settings,kh=_f(),Yl=Js&&qs.get("profile")?qs.get("profile"):je.profile==="auto"?kh:je.profile,kt=new Ul({now:ha,profile:Yl});kt.installListener();ae.setVolume(je.volume,je.muted);Yt.setSound(je.muted);var de=new Dl({accel:Yt.el.accel,brake:Yt.el.brake,horn:Yt.el.horn,field:Yt.el.field});de.blockKeys=()=>Yt.parentOpen;var jt=null,zh=!1;try{jt=new Hl(document.getElementById("scene"),vt),jt.onContextLost=()=>{Yt.showGL(!0),ua("glLost")},jt.onContextRestored=()=>{Yt.showGL(!1)}}catch{zh=!0,Yt.showGL(!0,!0)}var gn=!1,Hh=0,jn=!1,Zs={pauses:0,resumes:0,orientationChanges:0,recenters:0,interruptions:[]};function Zl(){let i=Yt.layout();de.dragFullPx=i.dragFullPx,jt&&jt.resize(window.innerWidth,window.innerHeight),Pf=i}var Pf=null;Zl();window.addEventListener("resize",Zl);window.visualViewport&&window.visualViewport.addEventListener("resize",Zl);function Ff(){kt.checkOrientation()&&(Zs.orientationChanges++,de.clearAll(),vt.vehicle.clearDrive(),Gs=1.2,Zl(),jt&&jt.resetCamera())}try{screen.orientation&&screen.orientation.addEventListener("change",Ff)}catch{}window.addEventListener("orientationchange",Ff);var Gs=0;Yt.showStart(!0);Yt.on("engine",()=>{ae.unlock(),gn||(gn=!0,kt.startFromGesture(),Hh=ha(),vt.phase="STARTING",Yt.showStart(!1),jt&&jt.resetCamera())});Yt.on("resume",()=>{ae.unlock(),jn&&(jn=!1,Zs.resumes++,Yt.showPause(!1),de.clearAll(),vt.resume(),kt.mode==="motion"&&kt.recenter())});Yt.on("glRetry",()=>{location.reload()});Yt.on("recenter",()=>Vh());function Vh(){vt.vehicle.speed>.05||(Zs.recenters++,de.keyTilt=0,de.keys.delete("left"),de.keys.delete("right"),kt.recenter())}Yt.on("mode",()=>{vt.vehicle.speed>.05||(de.clearAll(),vt.vehicle.clearDrive(),kt.mode==="motion"?kt.setMode("touch"):kt.tryMotion()||(Yt.el.mode.classList.add("nope"),setTimeout(()=>Yt.el.mode.classList.remove("nope"),500)))});Yt.on("sound",()=>{ae.unlock(),je.muted=!je.muted,ae.setVolume(je.volume,je.muted),Yt.setSound(je.muted),vt.save()});Yt.on("parent",()=>{de.clearAll(),vt.vehicle.clearDrive(),Yt.openParent({settings:je,guess:kh,mode:kt.mode,sensor:kt.sensorState,deliveries:vt.rec.totals.deliveries,decos:vt.rec.deco.owned.length},{profile:i=>{je.profile=i,Yl=i==="auto"?kh:i,kt.setProfile(Yl),vt.save()},volume:i=>{je.volume=i,ae.setVolume(i,je.muted),vt.save()},mute:i=>{je.muted=i,ae.setVolume(je.volume,i),Yt.setSound(i),vt.save()},lock:()=>{try{let i=screen.orientation&&screen.orientation.lock&&screen.orientation.lock(screen.orientation.type);i&&i.catch&&i.catch(()=>{})}catch{}},motion:()=>{kt.tryMotion()},reset:()=>{Xs.clear(),location.reload()},close:()=>{}})});function ua(i){if(de.clearAll(),!gn||vt.phase==="STARTING"){vt.vehicle.clearDrive();return}Zs.interruptions.push(i),jn||(jn=!0,Zs.pauses++),vt.pause(),Yt.showPause(!0)}document.addEventListener("visibilitychange",()=>{document.hidden&&(ua("hidden"),ae.suspend())});window.addEventListener("pagehide",()=>ua("pagehide"));window.addEventListener("blur",()=>{de.clearAll(),Js||ua("blur")});function ty(i){de.update(i),kt.update(i,de.keyTilt),de.touchSteerAllowed=kt.mode!=="motion",Yt.setMode(kt.mode==="pending"?"touch":kt.mode);for(let n of kt.drainEvents())n.type==="mode"&&(de.clearAll(),vt.vehicle.clearDrive()),n.type==="motion"&&ey(n.ev);for(vt.phase==="STARTING"&&kt.resolved&&ha()-Hh>1200&&vt.beginPlay(),kt.lateSensorOffer&&kt.mode==="touch"?de.lastTouchSteerUse===-1/0&&!de.throttle&&vt.vehicle.speed===0&&!de.touchSteering?kt.tryMotion():Yt.pulseMode(!0):Yt.pulseMode(!1);de.recenterQueue>0;)de.recenterQueue--,Vh();let t=gn&&vt.phase!=="STARTING"&&!jn&&!["WASH_CHOICE","DECORATION_CHOICE"].includes(vt.phase);for(de.enabled.horn=t;de.hornQueue>0;)de.hornQueue--,t&&(ae.unlock(),ae.horn(),vt.honk());let e=gn&&Bi.has(vt.phase)&&!jn;de.setDriveEnabled(e),Gs>0&&(Gs-=i),vt.update(i,{throttle:de.throttle&&Gs<=0,brake:de.braking||Gs>0,steer:kt.steer(de),flat:kt.flat,blocked:!gn||vt.phase==="STARTING"||kt.blocksDriving||Yt.parentOpen});for(let n of vt.drainEvents())ny(n);ae.updateEngine(vt.vehicle.speed/gi.maxSpeed,gn&&vt.phase!=="READY",!vt.onRoad),ae.updateMusic(["ALIGHT_AND_THANK","PARADE","DECORATION_CHOICE"].includes(vt.phase))}function ey(i){i.type==="fastTurn"?Bi.has(vt.phase)&&!jn&&vt.vehicle.speed>1&&(vt.fastTurns++,ae.squeal(),jt&&jt.handleEvent({type:"fastTurn"})):i.type==="epoch"&&(de.clearAll(),vt.vehicle.clearDrive(),Gs=1)}function ny(i){switch(jt&&jt.handleEvent(i),i.type){case"collect":i.kind==="star"?ae.chime():ae.pop();break;case"bump":ae.bump();break;case"animal":ae.animal(i.animal,i.kind==="board"?"board":"thanks"),i.animal==="duck"&&i.kind==="thanks"&&ae.splash(),i.animal==="bear"&&i.kind==="thanks"&&(ae.stomp(),setTimeout(()=>ae.stomp(),400));break;case"animalRide":if(jt&&(jt.rideReactT=1.2),setTimeout(()=>ae.animal(i.animal,"ride"),i.reason==="honk"?380:50),i.animal==="rabbit"&&jt){let t=vt.vehicle;jt.emit("bubble",t.x,2.2,t.z,{color:"#ffffff",n:5,speed:.6,up:1.2,g:.3,life:1.6,size:.35}),ae.bubble()}break;case"washStart":ae.wash();break;case"washColor":ae.splash(),setTimeout(()=>ae.rinse(),oe.washShowerSec*1e3),setTimeout(()=>ae.sparkle(),(oe.washShowerSec+1.6)*1e3);break;case"parade":ae.fanfare();break;case"paradeHop":jt&&(jt.paradeHopPending=!0),vt.paradeAnimals.forEach((t,e)=>setTimeout(()=>ae.animal(t,"ride"),e*160));break;case"decoration":ae.fanfare(),ae.sparkle();break;case"relocate":break;default:break}}var Bh=6;function iy(i){let t=vt.passenger;if(!(!t||t.state!=="riding"||vt.phase!=="DRIVE_TO_HOUSE")&&(Bh-=i,Bh<=0&&(Bh=7+Math.random()*5,jt&&(jt.rideReactT=1),ae.animal(t.animal,"ride"),t.animal==="rabbit"&&jt))){let e=vt.vehicle;jt.emit("bubble",e.x,2.2,e.z,{color:"#ffffff",n:4,speed:.6,up:1.2,g:.3,life:1.6,size:.35})}}var Ws=0,Vl=null,Lf=0,Wl=[],Xl=[];function Df(i){Ws+=Math.min(i,oe.maxFrameSec);let t=0;for(;Ws>=oe.fixedDt&&t<8;)Ys.manual&&(Ys.t+=oe.fixedDt*1e3),ty(oe.fixedDt),Ws-=oe.fixedDt,t++;t===8&&(Ws=0),iy(i),jt&&(jt.rideReactT>0&&(jt.rideReactT-=i),jt.update(Math.min(i,oe.maxFrameSec))),ry()}var Gl=null;function sy(){let i=vt.rec.wash?vt.rec.wash.deliveryId:null;if(!Gl||Gl.key!==i){let t=vt.rec.wash&&vt.rec.wash.color?null:vt.rec.carColor;Gl={key:i,list:_a.filter(e=>e!=="peach"&&e!==t).slice(0,4)}}return Gl.list}function ry(){let i=vt.phase,t=vt.vehicle,e=gn&&Bi.has(i)&&!jn;Yt.setDriveVisible(gn?e&&!kt.blocksDriving?"on":i==="WASH_CHOICE"||i==="DECORATION_CHOICE"?"off":"dim":"off");let n={calibrating:gn&&kt.mode==="motion"&&(kt.motionStatus==="calibrating"||kt.motionStatus==="idle"),flat:kt.flat,mode:kt.mode},s=gn&&i!=="STARTING"?vt.hint(n):{id:i==="STARTING"?n.calibrating?"calibrate":"progress":"none",progress:Math.min(1,(ha()-Hh)/1200)};jn&&(s={id:"none"}),Yt.setHint(s);let r=kt.log[kt.log.length-1];Yt.showUprightContext(s.id!=="upright"&&gn&&kt.mode!=="motion"&&r==="calibFailed"&&kt.sensorState==="streaming"&&kt.sensor.projection<6.5),Yt.showWash(i==="WASH_CHOICE"||i==="WASH_FINISH",sy(),l=>{vt.chooseShower(l)&&ae.click()}),i==="WASH_FINISH"?Yt.el.wash.classList.add("done"):Yt.el.wash.classList.remove("done"),Yt.showDeco(i==="DECORATION_CHOICE"?vt.offers:null,l=>{ae.unlock(),vt.chooseDecoration(l)});let a=vt.passenger;i==="DRIVE_TO_HOUSE"&&a?Yt.setBubble("house",Ve[a.animal].dest):i==="SEEK_PASSENGER"&&a?Yt.setBubble("animal",a.animal):Yt.setBubble(null);let o=vt.targetBay();if(jt&&o&&e){let c=o.x+o.rx*4,h=o.z+o.rz*4,u=jt.project(c,1,h),d=window.innerWidth,f=window.innerHeight;if(!u.behind&&u.x>40&&u.x<d-40&&u.y>40&&u.y<f-40)Yt.setPointer(null);else{let _=t.forward(),m=c-t.x,p=h-t.z,S=m*-Math.cos(t.heading)+p*Math.sin(t.heading),A=m*_.x+p*_.z,v=Math.atan2(S,A);Yt.setPointer({x:d/2+Math.sin(v)*Math.min(d,f)*.32,y:f*.42-Math.cos(v)*Math.min(d,f)*.22,angle:v})}}else Yt.setPointer(null)}function Nf(i){requestAnimationFrame(Nf),Vl===null&&(Vl=i);let t=(i-Vl)/1e3;Vl=i,Lf++,Wl.length>600&&Wl.shift(),Wl.push(t*1e3);let e=performance.now();Ys.manual||Df(t);let n=performance.now();jt&&!zh&&jt.render(t*1e3);let s=performance.now();s-e>150&&(Xl.push({phase:vt.phase,sim:Math.round(n-e),render:Math.round(s-n)}),Xl.length>20&&Xl.shift())}requestAnimationFrame(Nf);jt&&setTimeout(()=>{try{jt.precompile()}catch{}},50);Js&&(window.__animalTaxiDebug={setInputMode(i){de.clearAll(),vt.vehicle.clearDrive(),i==="motion"?(kt.injecting=!0,kt.sensorState="streaming",kt.setMode("motion")):kt.setMode(i)},setProfile(i){kt.setProfile(i),Yl=i},injectMotion(i){kt.injecting=!0,kt.handleSample({x:i.x,y:i.y,z:i.z,timeMs:i.timeMs,screenAngleDeg:i.screenAngleDeg})},injectTilt(i){kt.injecting=!0;let t=Nl(i.degrees,i.screenAngleDeg,{flat:!!i.flat,refDeg:i.refDeg||0});kt.handleSample({...t,timeMs:i.timeMs,screenAngleDeg:i.screenAngleDeg})},recenter(){Vh()},snapshot(){return JSON.parse(JSON.stringify({...vt.snapshot(),started:gn,interrupted:jn,inputMode:kt.mode,calibration:kt.motionStatus,theta:kt.sensor.theta,steer:kt.steer(de),sensorAgeMs:kt.snapshot().sensorAgeMs,controller:kt.snapshot(),input:de.snapshot(),audio:ae.snapshot(),view:jt?jt.stats():null,hint:Yt.hintId,layout:Pf,lifecycle:Zs,storage:{memoryOnly:Xs.memoryOnly,errors:Xs.errors.slice(-5),writes:Xs.writes},fastTurnCount:vt.fastTurns,deliveriesTotal:vt.rec.totals.deliveries,washCountTotal:vt.rec.totals.washes,rewardId:vt.rec.reward?vt.rec.reward.granted:null,rewardCount:vt.rec.deco.owned.length,frames:Lf,slowFrames:Xl,seed:If,embedded:ql,renderFailed:zh}))},manual(i){Ys.manual=!!i,i&&(Ys.t=performance.now()),Ws=0},now(){return ha()},step(i,{render:t=!1}={}){let e=Math.round(i/(oe.fixedDt*1e3));for(let n=0;n<e;n++)Ws=0,Df(oe.fixedDt);t&&jt&&jt.render()},render(){jt&&jt.render()},route(){let i=vt.targetBay(),t=i?vt.routePos({road:i.road,s:i.s}):vt._pos(),e=i?vt.graph.walk(t,{road:i.road,s:i.s},3).slice(0,12).map(n=>({x:n.x,z:n.z})):[];return{bay:i?{id:i.id,x:i.x,z:i.z,rx:i.rx,rz:i.rz,tx:i.tx,tz:i.tz}:null,ahead:i?vt.bayAhead(i):null,pts:e}},roadFrame(){let i=vt.graph.locate(vt.vehicle.x,vt.vehicle.z,vt.loc);return{tx:i.tx,tz:i.tz,lateral:i.lateral,dist:i.dist,road:i.road.id,s:i.s}},forks(){return vt.layout.forks.map(i=>({id:i.id,split:i.split,destOnBranch:i.destOnBranch,destOnLoop:i.destOnLoop}))},loseContext(){let i=jt.renderer.getContext().getExtension("WEBGL_lose_context");return i.loseContext(),i},simulateInterrupt(i="hidden"){ua(i)},frameLog(){return Wl.slice()},saveKey:Cf,game:vt,controller:kt,input:de,audio:ae,view:jt,ui:Yt});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
