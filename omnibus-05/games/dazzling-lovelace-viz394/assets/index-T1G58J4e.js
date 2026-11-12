var Od=Object.defineProperty;var zd=(i,t,e)=>t in i?Od(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var L=(i,t,e)=>zd(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const rc="186",Bd=0,Vc=1,Gd=2,Do=1,Su=2,Mr=3,Ni=0,xn=1,Fe=2,xi=0,Tr=1,Nr=2,Wc=3,Xc=4,Hd=5,Us=100,Vd=101,Wd=102,Xd=103,qd=104,Yd=200,Kd=201,Zd=202,Jd=203,Eu=204,Tu=205,$d=206,Qd=207,jd=208,tf=209,ef=210,nf=211,sf=212,rf=213,of=214,el=0,nl=1,il=2,Ur=3,sl=4,rl=5,ol=6,al=7,oc=0,af=1,lf=2,si=0,Au=1,Pu=2,Ru=3,ac=4,Cu=5,Iu=6,Du=7,Lu=300,ns=301,Gs=302,da=303,fa=304,ea=306,Vo=1e3,An=1001,ll=1002,on=1003,cf=1004,Qr=1005,un=1006,pa=1007,Ji=1008,Tn=1009,Nu=1010,Uu=1011,Fr=1012,lc=1013,ri=1014,Wn=1015,Yn=1016,cc=1017,hc=1018,kr=1020,Fu=35902,ku=35899,Ou=1021,zu=1022,Xn=1023,Mi=1026,$i=1027,uc=1028,dc=1029,is=1030,fc=1031,pc=1033,Lo=33776,No=33777,Uo=33778,Fo=33779,cl=35840,hl=35841,ul=35842,dl=35843,fl=36196,pl=37492,ml=37496,gl=37488,xl=37489,Wo=37490,vl=37491,_l=37808,yl=37809,Ml=37810,wl=37811,bl=37812,Sl=37813,El=37814,Tl=37815,Al=37816,Pl=37817,Rl=37818,Cl=37819,Il=37820,Dl=37821,Ll=36492,Nl=36494,Ul=36495,Fl=36283,kl=36284,Xo=36285,Ol=36286,hf=3200,qo=0,uf=1,Ii="",rn="srgb",Yo="srgb-linear",Ko="linear",Pe="srgb",ma=7680,df=519,ff=512,pf=513,mf=514,mc=515,gf=516,xf=517,gc=518,vf=519,_f=35044,qc="300 es",ni=2e3,Or=2001;function yf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mf(){const i=zr("canvas");return i.style.display="block",i}const Yc={};function Kc(...i){const t="THREE."+i.shift();console.log(t,...i)}function Bu(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ee(...i){i=Bu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Me(...i){i=Bu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Os(...i){const t=i.join(" ");t in Yc||(Yc[t]=!0,ee(...i))}function wf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const bf={[el]:nl,[il]:ol,[sl]:al,[Ur]:rl,[nl]:el,[ol]:il,[al]:sl,[rl]:Ur};class rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zc=1234567;const Ar=Math.PI/180,Br=180/Math.PI;function os(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function xc(i,t){return(i%t+t)%t}function Sf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ef(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function Tf(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function Af(i,t=1){return t-Math.abs(xc(i,t*2)-t)}function Pf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function If(i,t){return i+Math.random()*(t-i)}function Df(i){return i*(.5-Math.random())}function Lf(i){i!==void 0&&(Zc=i);let t=Zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nf(i){return i*Ar}function Uf(i){return i*Br}function Ff(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function kf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Of(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Di={DEG2RAD:Ar,RAD2DEG:Br,generateUUID:os,clamp:pe,euclideanModulo:xc,mapLinear:Sf,inverseLerp:Ef,lerp:Pr,damp:Tf,pingpong:Af,smoothstep:Pf,smootherstep:Rf,randInt:Cf,randFloat:If,randFloatSpread:Df,seededRandom:Lf,degToRad:Nf,radToDeg:Uf,isPowerOfTwo:Ff,ceilPowerOfTwo:kf,floorPowerOfTwo:Of,setQuaternionFromProperEuler:zf,normalize:pn,denormalize:Fs},Oc=class Oc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Oc.prototype.isVector2=!0;let ut=Oc;class Ks{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){const _=Math.acos(m),w=Math.sin(_);p=Math.sin(p*_)/w,a=Math.sin(a*_)/w,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+x*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+x*a;const _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zc=class zc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zc.prototype.isVector3=!0;let T=zc;const ga=new T,Jc=new Ks,Bc=class Bc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],_=s[1],w=s[4],v=s[7],S=s[2],A=s[5],R=s[8];return r[0]=o*x+a*_+l*S,r[3]=o*m+a*w+l*A,r[6]=o*p+a*v+l*R,r[1]=c*x+h*_+d*S,r[4]=c*m+h*w+d*A,r[7]=c*p+h*v+d*R,r[2]=u*x+f*_+g*S,r[5]=u*m+f*w+g*A,r[8]=u*p+f*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xa.makeScale(t,e)),this}rotate(t){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xa.makeRotation(-t)),this}translate(t,e){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bc.prototype.isMatrix3=!0;let le=Bc;const xa=new le,$c=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bf(){const i={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Pe&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pe&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Ko:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yo]:{primaries:t,whitePoint:n,transfer:Ko,toXYZ:$c,fromXYZ:Qc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:Pe,toXYZ:$c,fromXYZ:Qc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const ve=Bf();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ds;class Gf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=zr("canvas")),ds.width=t.width,ds.height=t.height;const s=ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vi(e[n]/255)*255):e[n]=vi(e[n]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hf=0;class vc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(va(s[o].image)):r.push(va(s[o]))}else r=va(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let Vf=0;const _a=new T;class an extends rs{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=An,s=An,r=un,o=Ji,a=Xn,l=Tn,c=an.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=os(),this.name="",this.source=new vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vo:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vo:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Lu;an.DEFAULT_ANISOTROPY=1;const Gc=class Gc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,v=(f+1)/2,S=(p+1)/2,A=(h+u)/4,R=(d+x)/4,y=(g+m)/4;return w>v&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=A/n,r=R/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=y/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=y/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gc.prototype.isVector4=!0;let ke=Gc;class Wf extends rs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new an(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new vc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Wf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gu extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xf extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ta=class ta{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ta().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qf,t,Yf)}lookAt(t,e,n){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Si.crossVectors(n,Sn),Si.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Si.crossVectors(n,Sn)),Si.normalize(),jr.crossVectors(Sn,Si),s[0]=Si.x,s[4]=jr.x,s[8]=Sn.x,s[1]=Si.y,s[5]=jr.y,s[9]=Sn.y,s[2]=Si.z,s[6]=jr.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],w=n[7],v=n[11],S=n[15],A=s[0],R=s[4],y=s[8],b=s[12],C=s[1],N=s[5],U=s[9],G=s[13],z=s[2],V=s[6],tt=s[10],Y=s[14],H=s[3],O=s[7],X=s[11],et=s[15];return r[0]=o*A+a*C+l*z+c*H,r[4]=o*R+a*N+l*V+c*O,r[8]=o*y+a*U+l*tt+c*X,r[12]=o*b+a*G+l*Y+c*et,r[1]=h*A+d*C+u*z+f*H,r[5]=h*R+d*N+u*V+f*O,r[9]=h*y+d*U+u*tt+f*X,r[13]=h*b+d*G+u*Y+f*et,r[2]=g*A+x*C+m*z+p*H,r[6]=g*R+x*N+m*V+p*O,r[10]=g*y+x*U+m*tt+p*X,r[14]=g*b+x*G+m*Y+p*et,r[3]=_*A+w*C+v*z+S*H,r[7]=_*R+w*N+v*V+S*O,r[11]=_*y+w*U+v*tt+S*X,r[15]=_*b+w*G+v*Y+S*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],_=l*f-c*u,w=a*f-c*d,v=a*u-l*d,S=o*f-c*h,A=o*u-l*h,R=o*d-a*h;return e*(x*_-m*w+p*v)-n*(g*_-m*S+p*A)+s*(g*w-x*S+p*R)-r*(g*v-x*A+m*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=e*a-n*o,w=e*l-s*o,v=e*c-r*o,S=n*l-s*a,A=n*c-r*a,R=s*c-r*l,y=h*x-d*g,b=h*m-u*g,C=h*p-f*g,N=d*m-u*x,U=d*p-f*x,G=u*p-f*m,z=_*G-w*U+v*N+S*C-A*b+R*y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/z;return t[0]=(a*G-l*U+c*N)*V,t[1]=(s*U-n*G-r*N)*V,t[2]=(x*R-m*A+p*S)*V,t[3]=(u*A-d*R-f*S)*V,t[4]=(l*C-o*G-c*b)*V,t[5]=(e*G-s*C+r*b)*V,t[6]=(m*v-g*R-p*w)*V,t[7]=(h*R-u*v+f*w)*V,t[8]=(o*U-a*C+c*y)*V,t[9]=(n*C-e*U-r*y)*V,t[10]=(g*A-x*v+p*_)*V,t[11]=(d*v-h*A-f*_)*V,t[12]=(a*b-o*N-l*y)*V,t[13]=(e*N-n*b+s*y)*V,t[14]=(x*w-g*S-m*_)*V,t[15]=(h*S-d*w+u*_)*V,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,x=o*h,m=o*d,p=a*d,_=l*c,w=l*h,v=l*d,S=n.x,A=n.y,R=n.z;return s[0]=(1-(x+p))*S,s[1]=(f+v)*S,s[2]=(g-w)*S,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(u+p))*A,s[6]=(m+_)*A,s[7]=0,s[8]=(g+w)*R,s[9]=(m-_)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=fs.set(s[0],s[1],s[2]).length();const a=fs.set(s[4],s[5],s[6]).length(),l=fs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),zn.copy(this);const c=1/o,h=1/a,d=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,e.setFromRotationMatrix(zn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=ni,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===ni)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Or)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ni,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===ni)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Or)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ta.prototype.isMatrix4=!0;let Ee=ta;const fs=new T,zn=new Ee,qf=new T(0,0,0),Yf=new T(1,1,1),Si=new T,jr=new T,Sn=new T,jc=new Ee,th=new Ks;class wi{constructor(t=0,e=0,n=0,s=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return th.setFromEuler(this),this.setFromQuaternion(th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kf=0;const eh=new T,ps=new Ks,ci=new Ee,to=new T,ir=new T,Zf=new T,Jf=new Ks,nh=new T(1,0,0),ih=new T(0,1,0),sh=new T(0,0,1),rh={type:"added"},$f={type:"removed"},ms={type:"childadded",child:null},ya={type:"childremoved",child:null};class Ge extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new T,e=new wi,n=new Ks,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new le}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(nh,t)}rotateY(t){return this.rotateOnAxis(ih,t)}rotateZ(t){return this.rotateOnAxis(sh,t)}translateOnAxis(t,e){return eh.copy(t).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nh,t)}translateY(t){return this.translateOnAxis(ih,t)}translateZ(t){return this.translateOnAxis(sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?to.copy(t):to.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(ir,to,this.up):ci.lookAt(to,ir,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(ci),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rh),ms.child=t,this.dispatchEvent(ms),ms.child=null):Me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($f),ya.child=t,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rh),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,Zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ge.DEFAULT_UP=new T(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Mt extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qf={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},eo={h:0,s:0,l:0};function wa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=xc(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wa(o,r,t+1/3),this.g=wa(o,r,t),this.b=wa(o,r,t-1/3)}return ve.colorSpaceToWorking(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=Hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return ve.workingToColorSpace(cn.copy(this),t),Math.round(pe(cn.r*255,0,255))*65536+Math.round(pe(cn.g*255,0,255))*256+Math.round(pe(cn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(cn.copy(this),e);const n=cn.r,s=cn.g,r=cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=rn){ve.workingToColorSpace(cn.copy(this),t);const e=cn.r,n=cn.g,s=cn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(eo);const n=Pr(Ei.h,eo.h,e),s=Pr(Ei.s,eo.s,e),r=Pr(Ei.l,eo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Dt;Dt.NAMES=Hu;class Vu extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Bn=new T,hi=new T,ba=new T,ui=new T,gs=new T,xs=new T,oh=new T,Sa=new T,Ea=new T,Ta=new T,Aa=new ke,Pa=new ke,Ra=new ke;class Vn{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),hi.subVectors(n,e),ba.subVectors(t,e);const o=Bn.dot(Bn),a=Bn.dot(hi),l=Bn.dot(ba),c=hi.dot(hi),h=hi.dot(ba),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Aa.setScalar(0),Pa.setScalar(0),Ra.setScalar(0),Aa.fromBufferAttribute(t,e),Pa.fromBufferAttribute(t,n),Ra.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Aa,r.x),o.addScaledVector(Pa,r.y),o.addScaledVector(Ra,r.z),o}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),hi.subVectors(t,e),Bn.cross(hi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Bn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,n),xs.subVectors(r,n),Sa.subVectors(t,n);const l=gs.dot(Sa),c=xs.dot(Sa);if(l<=0&&c<=0)return e.copy(n);Ea.subVectors(t,s);const h=gs.dot(Ea),d=xs.dot(Ea);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(gs,o);Ta.subVectors(t,r);const f=gs.dot(Ta),g=xs.dot(Ta);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(xs,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return oh.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(oh,a);const p=1/(m+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(gs,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class oi{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),no.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),no.copy(n.boundingBox)),no.applyMatrix4(t.matrixWorld),this.union(no)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),io.subVectors(this.max,sr),vs.subVectors(t.a,sr),_s.subVectors(t.b,sr),ys.subVectors(t.c,sr),Ti.subVectors(_s,vs),Ai.subVectors(ys,_s),Wi.subVectors(vs,ys);let e=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-Wi.z,Wi.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,Wi.z,0,-Wi.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-Wi.y,Wi.x,0];return!Ca(e,vs,_s,ys,io)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,vs,_s,ys,io))?!1:(so.crossVectors(Ti,Ai),e=[so.x,so.y,so.z],Ca(e,vs,_s,ys,io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const di=[new T,new T,new T,new T,new T,new T,new T,new T],Gn=new T,no=new oi,vs=new T,_s=new T,ys=new T,Ti=new T,Ai=new T,Wi=new T,sr=new T,io=new T,so=new T,Xi=new T;function Ca(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xi.fromArray(i,r);const a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=t.dot(Xi),c=e.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const qe=new T,ro=new ut;let jf=0;class Mn extends rs{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_f,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ro.fromBufferAttribute(this,e),ro.applyMatrix3(t),this.setXY(e,ro.x,ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),s=pn(s,this.array),r=pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Wu extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xu extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const tp=new oi,rr=new T,Ia=new T;class as{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);const e=rr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(Ia)),this.expandByPoint(rr.copy(t.center).sub(Ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ep=0;const Dn=new Ee,Da=new Ge,Ms=new T,En=new oi,or=new oi,tn=new T;class Oe extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yf(t)?Xu:Wu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return Da.lookAt(t),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(En.min,or.min),En.expandByPoint(tn),tn.addVectors(En.max,or.max),En.expandByPoint(tn)):(En.expandByPoint(or.min),En.expandByPoint(or.max))}En.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),tn.add(Ms)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new T,l[y]=new T;const c=new T,h=new T,d=new T,u=new ut,f=new ut,g=new ut,x=new T,m=new T;function p(y,b,C){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),a[y].add(x),a[b].add(x),a[C].add(x),l[y].add(m),l[b].add(m),l[C].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let y=0,b=_.length;y<b;++y){const C=_[y],N=C.start,U=C.count;for(let G=N,z=N+U;G<z;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const w=new T,v=new T,S=new T,A=new T;function R(y){S.fromBufferAttribute(s,y),A.copy(S);const b=a[y];w.copy(b),w.sub(S.multiplyScalar(S.dot(b))).normalize(),v.crossVectors(A,b);const N=v.dot(l[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,N)}for(let y=0,b=_.length;y<b;++y){const C=_[y],N=C.start,U=C.count;for(let G=N,z=N+U;G<z;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new T,r=new T,o=new T,a=new T,l=new T,c=new T,h=new T,d=new T;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Mn(u,h,d)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const La=new T,np=new T,ip=new le;class Hn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=La.subVectors(n,e).cross(np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(La),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ip.getNormalMatrix(t),s=this.coplanarPoint(La).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let sp=0;class Fi extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=os(),this.name="",this.type="Material",this.blending=Tr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eu,this.blendDst=Tu,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const fi=new T,Na=new T,oo=new T,ao=new T;class na{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Na.copy(t).add(e).multiplyScalar(.5),oo.copy(e).sub(t).normalize(),ao.copy(this.origin).sub(Na);const r=t.distanceTo(e)*.5,o=-this.direction.dot(oo),a=ao.dot(this.direction),l=-ao.dot(oo),c=ao.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Na).addScaledVector(oo,u),f}intersectSphere(t,e){if(t.radius<0)return null;fi.subVectors(t.center,this.origin);const n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,_=n.y-o.y,w=n.z-o.z,v=Math.abs(l),S=Math.abs(c),A=Math.abs(h);let R,y,b,C,N,U,G,z,V,tt,Y,H;if(v>=S&&v>=A?(b=l,U=d,V=g,H=p,l>=0?(R=c,y=h,C=u,N=f,G=x,z=m,tt=_,Y=w):(R=h,y=c,C=f,N=u,G=m,z=x,tt=w,Y=_)):S>=A?(b=c,U=u,V=x,H=_,c>=0?(R=h,y=l,C=f,N=d,G=m,z=g,tt=w,Y=p):(R=l,y=h,C=d,N=f,G=g,z=m,tt=p,Y=w)):(b=h,U=f,V=m,H=w,h>=0?(R=l,y=c,C=d,N=u,G=g,z=x,tt=p,Y=_):(R=c,y=l,C=u,N=d,G=x,z=g,tt=_,Y=p)),b===0)return null;const O=R/b,X=y/b,et=1/b,dt=C-O*U,At=N-X*U,de=G-O*V,$t=z-X*V,re=tt-O*H,Q=Y-X*H,rt=re*$t-Q*de,vt=dt*Q-At*re,Kt=de*At-$t*dt;if(s){if(rt<0||vt<0||Kt<0)return null}else if((rt<0||vt<0||Kt<0)&&(rt>0||vt>0||Kt>0))return null;const Et=rt+vt+Kt;if(Et===0)return null;const Lt=et*(rt*U+vt*V+Kt*H);return(Et>0?Lt<0:Lt>0)?null:this.at(Lt/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ah=new Ee,qi=new na,lo=new as,lh=new T,co=new T,ho=new T,uo=new T,Ua=new T,fo=new T,ch=new T,po=new T;class D extends Ge{constructor(t=new Oe,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Ua.fromBufferAttribute(d,t),o?fo.addScaledVector(Ua,h):fo.addScaledVector(Ua.sub(e),h))}e.add(fo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(lo.containsPoint(qi.origin)===!1&&(qi.intersectSphere(lo,lh)===null||qi.origin.distanceToSquared(lh)>(t.far-t.near)**2))&&(ah.copy(r).invert(),qi.copy(t.ray).applyMatrix4(ah),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,S=w;v<S;v+=3){const A=a.getX(v),R=a.getX(v+1),y=a.getX(v+2);s=mo(this,p,t,n,c,h,d,A,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=mo(this,o,t,n,c,h,d,_,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,S=w;v<S;v+=3){const A=v,R=v+1,y=v+2;s=mo(this,p,t,n,c,h,d,A,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=m,w=m+1,v=m+2;s=mo(this,o,t,n,c,h,d,_,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function rp(i,t,e,n,s,r,o,a){let l;if(t.side===xn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ni,a),l===null)return null;po.copy(a),po.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(po);return c<e.near||c>e.far?null:{distance:c,point:po.clone(),object:i}}function mo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,co),i.getVertexPosition(l,ho),i.getVertexPosition(c,uo);const h=rp(i,t,e,n,co,ho,uo,ch);if(h){const d=new T;Vn.getBarycoord(ch,co,ho,uo,d),s&&(h.uv=Vn.getInterpolatedAttribute(s,a,l,c,d,new ut)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,a,l,c,d,new ut)),o&&(h.normal=Vn.getInterpolatedAttribute(o,a,l,c,d,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new T,materialIndex:0};Vn.getNormal(co,ho,uo,u.normal),h.face=u,h.barycoord=d}return h}class qu extends an{constructor(t=null,e=1,n=1,s,r,o,a,l,c=on,h=on,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hh extends Mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ws=new Ee,uh=new Ee,go=[],dh=new oi,op=new Ee,ar=new D,lr=new as;class Yu extends D{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,op)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),dh.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(dh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new as),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),lr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),t.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),uh.multiplyMatrices(n,ws),ar.matrixWorld=uh,ar.raycast(t,go);for(let o=0,a=go.length;o<a;o++){const l=go[o];l.instanceId=r,l.object=this,e.push(l)}go.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new hh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qu(new Float32Array(s*this.count),s,this.count,uc,Wn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yi=new as,ap=new ut(.5,.5),xo=new T;class yc{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],_=r[12],w=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,p-g,S-_).normalize(),s[1].setComponents(c+o,f+h,p+g,S+_).normalize(),s[2].setComponents(c+a,f+d,p+x,S+w).normalize(),s[3].setComponents(c-a,f-d,p-x,S-w).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,f-u,p-m,S-v).normalize();else if(s[4].setComponents(c-l,f-u,p-m,S-v).normalize(),e===ni)s[5].setComponents(c+l,f+u,p+m,S+v).normalize();else if(e===Or)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){Yi.center.set(0,0,0);const e=ap.distanceTo(t.center);return Yi.radius=.7071067811865476+e,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xo.x=s.normal.x>0?t.max.x:t.min.x,xo.y=s.normal.y>0?t.max.y:t.min.y,xo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ku extends Fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zo=new T,Jo=new T,fh=new Ee,cr=new na,vo=new as,Fa=new T,ph=new T;class lp extends Ge{constructor(t=new Oe,e=new Ku){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Zo.fromBufferAttribute(e,s-1),Jo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Zo.distanceTo(Jo);t.setAttribute("lineDistance",new ce(n,1))}else ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;fh.copy(s).invert(),cr.copy(t.ray).applyMatrix4(fh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),_=h.getX(x+1),w=_o(this,t,cr,l,p,_,x);w&&e.push(w)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=_o(this,t,cr,l,x,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){const p=_o(this,t,cr,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){const x=_o(this,t,cr,l,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _o(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Zo.fromBufferAttribute(a,s),Jo.fromBufferAttribute(a,r),e.distanceSqToSegment(Zo,Jo,Fa,ph)>n)return;Fa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fa);if(!(c<t.near||c>t.far))return{distance:c,point:ph.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const mh=new T,gh=new T;class cp extends lp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)mh.fromBufferAttribute(e,s),gh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mh.distanceTo(gh);t.setAttribute("lineDistance",new ce(n,1))}else ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zu extends Fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xh=new Ee,zl=new na,yo=new as,Mo=new T;class hp extends Ge{constructor(t=new Oe,e=new Zu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),yo.radius+=r,t.ray.intersectsSphere(yo)===!1)return;xh.copy(s).invert(),zl.copy(t.ray).applyMatrix4(xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,x=f;g<x;g++){const m=c.getX(g);Mo.fromBufferAttribute(d,m),vh(Mo,m,l,s,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)Mo.fromBufferAttribute(d,g),vh(Mo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vh(i,t,e,n,s,r,o){const a=zl.distanceSqToPoint(i);if(a<e){const l=new T;zl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ju extends an{constructor(t=[],e=ns,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class up extends an{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gr extends an{constructor(t,e,n=ri,s,r,o,a=on,l=on,c,h=Mi,d=1){if(h!==Mi&&h!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class dp extends Gr{constructor(t,e=ri,n=ns,s,r,o=on,a=on,l,c=Mi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class $u extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ne extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function g(x,m,p,_,w,v,S,A,R,y,b){const C=v/R,N=S/y,U=v/2,G=S/2,z=A/2,V=R+1,tt=y+1;let Y=0,H=0;const O=new T;for(let X=0;X<tt;X++){const et=X*N-G;for(let dt=0;dt<V;dt++){const At=dt*C-U;O[x]=At*_,O[m]=et*w,O[p]=z,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[p]=A>0?1:-1,h.push(O.x,O.y,O.z),d.push(dt/R),d.push(1-X/y),Y+=1}}for(let X=0;X<y;X++)for(let et=0;et<R;et++){const dt=u+et+V*X,At=u+et+V*(X+1),de=u+(et+1)+V*(X+1),$t=u+(et+1)+V*X;l.push(dt,At,$t),l.push(At,de,$t),H+=6}a.addGroup(f,H,b),f+=H,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Qi extends Oe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=n*2+r,x=s+1,m=new T,p=new T;for(let _=0;_<=g;_++){let w=0,v=0,S=0,A=0;if(_<=n){const b=_/n,C=b*Math.PI/2;v=-h-t*Math.cos(C),S=t*Math.sin(C),A=-t*Math.cos(C),w=b*d}else if(_<=n+r){const b=(_-n)/r;v=-h+b*e,S=t,A=0,w=d+b*u}else{const b=(_-n-r)/n,C=b*Math.PI/2;v=h+t*Math.sin(C),S=t*Math.cos(C),A=t*Math.sin(C),w=d+u+b*d}const R=Math.max(0,Math.min(1,w/f));let y=0;_===0?y=.5/s:_===g&&(y=-.5/s);for(let b=0;b<=s;b++){const C=b/s,N=C*Math.PI*2,U=Math.sin(N),G=Math.cos(N);p.x=-S*G,p.y=v,p.z=S*U,a.push(p.x,p.y,p.z),m.set(-S*G,A,S*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+y,R)}if(_>0){const b=(_-1)*x;for(let C=0;C<s;C++){const N=b+C,U=b+C+1,G=_*x+C,z=_*x+C+1;o.push(N,U,G),o.push(U,z,G)}}}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Be extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new T,h=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class we extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const x=[],m=n/2;let p=0;_(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function _(){const v=new T,S=new T;let A=0;const R=(e-t)/n;for(let y=0;y<=r;y++){const b=[],C=y/r,N=C*(e-t)+t;for(let U=0;U<=s;U++){const G=U/s,z=G*l+a,V=Math.sin(z),tt=Math.cos(z);S.x=N*V,S.y=-C*n+m,S.z=N*tt,d.push(S.x,S.y,S.z),v.set(V,R,tt).normalize(),u.push(v.x,v.y,v.z),f.push(G,1-C),b.push(g++)}x.push(b)}for(let y=0;y<s;y++)for(let b=0;b<r;b++){const C=x[b][y],N=x[b+1][y],U=x[b+1][y+1],G=x[b][y+1];(t>0||b!==0)&&(h.push(C,N,G),A+=3),(e>0||b!==r-1)&&(h.push(N,U,G),A+=3)}c.addGroup(p,A,0),p+=A}function w(v){const S=g,A=new ut,R=new T;let y=0;const b=v===!0?t:e,C=v===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;const N=g;for(let U=0;U<=s;U++){const z=U/s*l+a,V=Math.cos(z),tt=Math.sin(z);R.x=b*tt,R.y=m*C,R.z=b*V,d.push(R.x,R.y,R.z),u.push(0,C,0),A.x=V*.5+.5,A.y=tt*.5*C+.5,f.push(A.x,A.y),g++}for(let U=0;U<s;U++){const G=S+U,z=N+U;v===!0?h.push(z,z+1,G):h.push(z+1,z,G),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _i extends we{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new _i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mc extends Oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const w=new T,v=new T,S=new T;for(let A=0;A<e.length;A+=3)f(e[A+0],w),f(e[A+1],v),f(e[A+2],S),l(w,v,S,_)}function l(_,w,v,S){const A=S+1,R=[];for(let y=0;y<=A;y++){R[y]=[];const b=_.clone().lerp(v,y/A),C=w.clone().lerp(v,y/A),N=A-y;for(let U=0;U<=N;U++)U===0&&y===A?R[y][U]=b:R[y][U]=b.clone().lerp(C,U/N)}for(let y=0;y<A;y++)for(let b=0;b<2*(A-y)-1;b++){const C=Math.floor(b/2);b%2===0?(u(R[y][C+1]),u(R[y+1][C]),u(R[y][C])):(u(R[y][C+1]),u(R[y+1][C+1]),u(R[y+1][C]))}}function c(_){const w=new T;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(_),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){const _=new T;for(let w=0;w<r.length;w+=3){_.x=r[w+0],_.y=r[w+1],_.z=r[w+2];const v=m(_)/2/Math.PI+.5,S=p(_)/Math.PI+.5;o.push(v,1-S)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){const w=o[_+0],v=o[_+2],S=o[_+4],A=Math.max(w,v,S),R=Math.min(w,v,S);A>.9&&R<.1&&(w<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,w){const v=_*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){const _=new T,w=new T,v=new T,S=new T,A=new ut,R=new ut,y=new ut;for(let b=0,C=0;b<r.length;b+=9,C+=6){_.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),A.set(o[C+0],o[C+1]),R.set(o[C+2],o[C+3]),y.set(o[C+4],o[C+5]),S.copy(_).add(w).add(v).divideScalar(3);const N=m(S);x(A,C+0,_,N),x(R,C+2,w,N),x(y,C+4,v,N)}}function x(_,w,v,S){S<0&&_.x===1&&(o[w]=_.x-1),v.x===0&&v.z===0&&(o[w]=S/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.vertices,t.indices,t.radius,t.detail)}}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new T,s=[],r=[],o=[],a=new T,l=new Ee;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(pe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(pe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ia extends ai{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class fp extends ia{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const _h=new T,yh=new T,ka=new wc,Oa=new wc,za=new wc;class bc extends ai{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(yh.subVectors(s[0],s[1]).add(s[0]),c=yh);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(_h.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_h),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ka.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),Oa.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),za.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Oa.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),za.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ka.calc(l),Oa.calc(l),za.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function pp(i,t){const e=1-i;return e*e*t}function mp(i,t){return 2*(1-i)*i*t}function gp(i,t){return i*i*t}function Rr(i,t,e,n){return pp(i,t)+mp(i,e)+gp(i,n)}function xp(i,t){const e=1-i;return e*e*e*t}function vp(i,t){const e=1-i;return 3*e*e*i*t}function _p(i,t){return 3*(1-i)*i*i*t}function yp(i,t){return i*i*i*t}function Cr(i,t,e,n,s){return xp(i,t)+vp(i,e)+_p(i,n)+yp(i,s)}class Qu extends ai{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mp extends ai{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y),Cr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ju extends ai{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wp extends ai{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class td extends ai{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(t,s.x,r.x,o.x),Rr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $o extends ai{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(t,s.x,r.x,o.x),Rr(t,s.y,r.y,o.y),Rr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ed extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Mh(a,l.x,c.x,h.x,d.x),Mh(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var Qo=Object.freeze({__proto__:null,ArcCurve:fp,CatmullRomCurve3:bc,CubicBezierCurve:Qu,CubicBezierCurve3:Mp,EllipseCurve:ia,LineCurve:ju,LineCurve3:wp,QuadraticBezierCurve:td,QuadraticBezierCurve3:$o,SplineCurve:ed});class bp extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Qo[s.type]().fromJSON(s))}return this}}class Hs extends bp{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ju(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new td(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Qu(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ed(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new ia(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yn extends Hs{constructor(t){super(t),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Hs().fromJSON(s))}return this}}function Sp(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=nd(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Rp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){const f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Hr(r,o,e,a,l,c,0),o}function nd(i,t,e,n,s){let r;if(s===Bp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=wh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=wh(o/n|0,i[o],i[o+1],r);return r&&Vs(r,r.next)&&(Wr(r),r=r.next),r}function ss(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vs(e,e.next)||Ve(e.prev,e,e.next)===0)){if(Wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Np(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Tp(i,n,s,r):Ep(i)){t.push(l.i,i.i,c.i),Wr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Ap(ss(i),t),Hr(i,t,e,n,s,r,2)):o===2&&Pp(i,t,e,n,s,r):Hr(ss(i),t,e,n,s,r,1);break}}}function Ep(i){const t=i.prev,e=i,n=i.next;if(Ve(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&wr(s,a,r,l,o,c,g.x,g.y)&&Ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Tp(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ve(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),x=Math.max(a,l,c),m=Math.max(h,d,u),p=Bl(f,g,t,e,n),_=Bl(x,m,t,e,n);let w=i.prevZ,v=i.nextZ;for(;w&&w.z>=p&&v&&v.z<=_;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&wr(a,h,l,d,c,u,w.x,w.y)&&Ve(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&wr(a,h,l,d,c,u,v.x,v.y)&&Ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&wr(a,h,l,d,c,u,w.x,w.y)&&Ve(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&wr(a,h,l,d,c,u,v.x,v.y)&&Ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ap(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Vs(n,s)&&sd(n,e,e.next,s)&&Vr(n,s)&&Vr(s,n)&&(t.push(n.i,e.i,s.i),Wr(e),Wr(e.next),e=i=s),e=e.next}while(e!==i);return ss(e)}function Pp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&kp(o,a)){let l=rd(o,a);o=ss(o,o.next),l=ss(l,l.next),Hr(o,t,e,n,s,r,0),Hr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Rp(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=nd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Fp(c))}s.sort(Cp);for(let r=0;r<s.length;r++)e=Ip(s[r],e);return e}function Cp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ip(i,t){const e=Dp(i,t);if(!e)return t;const n=rd(e,i);return ss(n,n.next),ss(e,e.next)}function Dp(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Vs(i,e))return e;do{if(Vs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&id(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Vr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Lp(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Lp(i,t){return Ve(i.prev,i,t.prev)<0&&Ve(t.next,i,i.next)<0}function Np(i,t,e,n){let s=i;do s.z===0&&(s.z=Bl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Up(s)}function Up(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Bl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function id(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function wr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&id(i,t,e,n,s,r,o,a)}function kp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Op(i,t)&&(Vr(i,t)&&Vr(t,i)&&zp(i,t)&&(Ve(i.prev,i,t.prev)||Ve(i,t.prev,t))||Vs(i,t)&&Ve(i.prev,i,i.next)>0&&Ve(t.prev,t,t.next)>0)}function Ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vs(i,t){return i.x===t.x&&i.y===t.y}function sd(i,t,e,n){const s=bo(Ve(i,t,e)),r=bo(Ve(i,t,n)),o=bo(Ve(e,n,i)),a=bo(Ve(e,n,t));return!!(s!==r&&o!==a||s===0&&wo(i,e,t)||r===0&&wo(i,n,t)||o===0&&wo(e,i,n)||a===0&&wo(e,t,n))}function wo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function bo(i){return i>0?1:i<0?-1:0}function Op(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&sd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vr(i,t){return Ve(i.prev,i,i.next)<0?Ve(i,t,i.next)>=0&&Ve(i,i.prev,t)>=0:Ve(i,t,i.prev)<0||Ve(i,i.next,t)<0}function zp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function rd(i,t){const e=Gl(i.i,i.x,i.y),n=Gl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wh(i,t,e,n){const s=Gl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Gp{static triangulate(t,e,n=2){return Sp(t,e,n)}}class gi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return gi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];bh(t),Sh(n,t);let o=t.length;e.forEach(bh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Sh(n,e[l]);const a=Gp.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function bh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ki extends Oe{constructor(t=new yn([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Hp;let w,v=!1,S,A,R,y;if(p){w=p.getSpacedPoints(h),v=!0,u=!1;const st=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,st),A=new T,R=new T,y=new T}u||(m=0,f=0,g=0,x=0);const b=a.extractPoints(c);let C=b.shape;const N=b.holes;if(!gi.isClockWise(C)){C=C.reverse();for(let st=0,ht=N.length;st<ht;st++){const pt=N[st];gi.isClockWise(pt)&&(N[st]=pt.reverse())}}function G(st){const pt=10000000000000001e-36;let mt=st[0];for(let gt=1;gt<=st.length;gt++){const Yt=gt%st.length,Zt=st[Yt],te=Zt.x-mt.x,se=Zt.y-mt.y,k=te*te+se*se,me=Math.max(Math.abs(Zt.x),Math.abs(Zt.y),Math.abs(mt.x),Math.abs(mt.y)),Wt=pt*me*me;if(k<=Wt){st.splice(Yt,1),gt--;continue}mt=Zt}}G(C),N.forEach(G);const z=N.length,V=C;for(let st=0;st<z;st++){const ht=N[st];C=C.concat(ht)}function tt(st,ht,pt){return ht||Me("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ht,pt)}const Y=C.length;function H(st,ht,pt){let mt,gt,Yt;const Zt=st.x-ht.x,te=st.y-ht.y,se=pt.x-st.x,k=pt.y-st.y,me=Zt*Zt+te*te,Wt=Zt*k-te*se;if(Math.abs(Wt)>Number.EPSILON){const I=Math.sqrt(me),M=Math.sqrt(se*se+k*k),W=ht.x-te/I,Z=ht.y+Zt/I,nt=pt.x-k/M,xt=pt.y+se/M,_t=((nt-W)*k-(xt-Z)*se)/(Zt*k-te*se);mt=W+Zt*_t-st.x,gt=Z+te*_t-st.y;const it=mt*mt+gt*gt;if(it<=2)return new ut(mt,gt);Yt=Math.sqrt(it/2)}else{let I=!1;Zt>Number.EPSILON?se>Number.EPSILON&&(I=!0):Zt<-Number.EPSILON?se<-Number.EPSILON&&(I=!0):Math.sign(te)===Math.sign(k)&&(I=!0),I?(mt=-te,gt=Zt,Yt=Math.sqrt(me)):(mt=Zt,gt=te,Yt=Math.sqrt(me/2))}return new ut(mt/Yt,gt/Yt)}const O=[];for(let st=0,ht=V.length,pt=ht-1,mt=st+1;st<ht;st++,pt++,mt++)pt===ht&&(pt=0),mt===ht&&(mt=0),O[st]=H(V[st],V[pt],V[mt]);const X=[];let et,dt=O.concat();for(let st=0,ht=z;st<ht;st++){const pt=N[st];et=[];for(let mt=0,gt=pt.length,Yt=gt-1,Zt=mt+1;mt<gt;mt++,Yt++,Zt++)Yt===gt&&(Yt=0),Zt===gt&&(Zt=0),et[mt]=H(pt[mt],pt[Yt],pt[Zt]);X.push(et),dt=dt.concat(et)}let At;if(m===0)At=gi.triangulateShape(V,N);else{const st=[],ht=[];for(let pt=0;pt<m;pt++){const mt=pt/m,gt=f*Math.cos(mt*Math.PI/2),Yt=g*Math.sin(mt*Math.PI/2)+x;for(let Zt=0,te=V.length;Zt<te;Zt++){const se=tt(V[Zt],O[Zt],Yt);vt(se.x,se.y,-gt),mt===0&&st.push(se)}for(let Zt=0,te=z;Zt<te;Zt++){const se=N[Zt];et=X[Zt];const k=[];for(let me=0,Wt=se.length;me<Wt;me++){const I=tt(se[me],et[me],Yt);vt(I.x,I.y,-gt),mt===0&&k.push(I)}mt===0&&ht.push(k)}}At=gi.triangulateShape(st,ht)}const de=At.length,$t=g+x;for(let st=0;st<Y;st++){const ht=u?tt(C[st],dt[st],$t):C[st];v?(R.copy(S.normals[0]).multiplyScalar(ht.x),A.copy(S.binormals[0]).multiplyScalar(ht.y),y.copy(w[0]).add(R).add(A),vt(y.x,y.y,y.z)):vt(ht.x,ht.y,0)}for(let st=1;st<=h;st++)for(let ht=0;ht<Y;ht++){const pt=u?tt(C[ht],dt[ht],$t):C[ht];v?(R.copy(S.normals[st]).multiplyScalar(pt.x),A.copy(S.binormals[st]).multiplyScalar(pt.y),y.copy(w[st]).add(R).add(A),vt(y.x,y.y,y.z)):vt(pt.x,pt.y,d/h*st)}for(let st=m-1;st>=0;st--){const ht=st/m,pt=f*Math.cos(ht*Math.PI/2),mt=g*Math.sin(ht*Math.PI/2)+x;for(let gt=0,Yt=V.length;gt<Yt;gt++){const Zt=tt(V[gt],O[gt],mt);vt(Zt.x,Zt.y,d+pt)}for(let gt=0,Yt=N.length;gt<Yt;gt++){const Zt=N[gt];et=X[gt];for(let te=0,se=Zt.length;te<se;te++){const k=tt(Zt[te],et[te],mt);v?vt(k.x,k.y+w[h-1].y,w[h-1].x+pt):vt(k.x,k.y,d+pt)}}}re(),Q();function re(){const st=s.length/3;if(u){let ht=0,pt=Y*ht;for(let mt=0;mt<de;mt++){const gt=At[mt];Kt(gt[2]+pt,gt[1]+pt,gt[0]+pt)}ht=h+m*2,pt=Y*ht;for(let mt=0;mt<de;mt++){const gt=At[mt];Kt(gt[0]+pt,gt[1]+pt,gt[2]+pt)}}else{for(let ht=0;ht<de;ht++){const pt=At[ht];Kt(pt[2],pt[1],pt[0])}for(let ht=0;ht<de;ht++){const pt=At[ht];Kt(pt[0]+Y*h,pt[1]+Y*h,pt[2]+Y*h)}}n.addGroup(st,s.length/3-st,0)}function Q(){const st=s.length/3;let ht=0;rt(V,ht),ht+=V.length;for(let pt=0,mt=N.length;pt<mt;pt++){const gt=N[pt];rt(gt,ht),ht+=gt.length}n.addGroup(st,s.length/3-st,1)}function rt(st,ht){let pt=st.length;for(;--pt>=0;){const mt=pt;let gt=pt-1;gt<0&&(gt=st.length-1);for(let Yt=0,Zt=h+m*2;Yt<Zt;Yt++){const te=Y*Yt,se=Y*(Yt+1),k=ht+mt+te,me=ht+gt+te,Wt=ht+gt+se,I=ht+mt+se;Et(k,me,Wt,I)}}}function vt(st,ht,pt){l.push(st),l.push(ht),l.push(pt)}function Kt(st,ht,pt){Lt(st),Lt(ht),Lt(pt);const mt=s.length/3,gt=_.generateTopUV(n,s,mt-3,mt-2,mt-1);he(gt[0]),he(gt[1]),he(gt[2])}function Et(st,ht,pt,mt){Lt(st),Lt(ht),Lt(mt),Lt(ht),Lt(pt),Lt(mt);const gt=s.length/3,Yt=_.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);he(Yt[0]),he(Yt[1]),he(Yt[3]),he(Yt[1]),he(Yt[2]),he(Yt[3])}function Lt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function he(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Vp(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qo[s.type]().fromJSON(s)),new ki(n,t.options)}}const Hp={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-d),new ut(u,1-g),new ut(x,1-p)]:[new ut(a,1-l),new ut(h,1-d),new ut(f,1-g),new ut(m,1-p)]}};function Vp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ui extends Oe{constructor(t=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=pe(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new T,u=new ut,f=new T,g=new T,x=new T;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=e;_++){const w=n+_*h*s,v=Math.sin(w),S=Math.cos(w);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*v,d.y=t[A].y,d.z=t[A].x*S,o.push(d.x,d.y,d.z),u.x=_/e,u.y=A/(t.length-1),a.push(u.x,u.y);const R=l[3*A+0]*v,y=l[3*A+1],b=l[3*A+0]*S;c.push(R,y,b)}}for(let _=0;_<e;_++)for(let w=0;w<t.length-1;w++){const v=w+_*t.length,S=v,A=v+t.length,R=v+t.length+1,y=v+1;r.push(S,A,y),r.push(R,y,A)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.points,t.segments,t.phiStart,t.phiLength)}}class Sc extends Mc{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sc(t.radius,t.detail)}}class be extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const _=p*u-o;for(let w=0;w<c;w++){const v=w*d-r;g.push(v,-_,0),x.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const w=_+c*p,v=_+c*(p+1),S=_+1+c*(p+1),A=_+1+c*p;f.push(w,v,A),f.push(v,S,A)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ec extends Oe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new T,g=new ut;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const _=p+m,w=_,v=_+n+1,S=_+n+2,A=_+1;a.push(w,v,A),a.push(v,S,A)}}this.setIndex(a),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ec(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ji extends Oe{constructor(t=new yn([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ce(s,3)),this.setAttribute("normal",new ce(r,3)),this.setAttribute("uv",new ce(o,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;gi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];gi.isClockWise(_)===!0&&(g[m]=_.reverse())}const x=gi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){const _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=x.length;m<p;m++){const _=x[m],w=_[0]+d,v=_[1]+d,S=_[2]+d;n.push(w,v,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Wp(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new ji(n,t.curveSegments)}}function Wp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class kt extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new T,u=new T,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const _=[],w=p/n,v=o+w*a,S=t*Math.cos(v),A=Math.sqrt(t*t-S*S);let R=0;p===0&&o===0?R=.5/e:p===n&&l===Math.PI&&(R=-.5/e);for(let y=0;y<=e;y++){const b=y/e,C=s+b*r;d.x=-A*Math.cos(C),d.y=S,d.z=A*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(b+R,1-w),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const w=h[p][_+1],v=h[p][_],S=h[p+1][_],A=h[p+1][_+1];(p!==0||o>0)&&f.push(w,v,A),(p!==n-1||l<Math.PI)&&f.push(v,S,A)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ze extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new T,f=new T,g=new T;for(let x=0;x<=n;x++){const m=o+x/n*a;for(let p=0;p<=s;p++){const _=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){const p=(s+1)*x+m-1,_=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,v=(s+1)*x+m;l.push(p,_,v),l.push(_,w,v)}this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Xr extends Oe{constructor(t=new $o(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,l=new T,c=new ut;let h=new T;const d=[],u=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function x(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),_(),p()}function m(w){h=t.getPointAt(w/e,h);const v=o.normals[w],S=o.binormals[w];for(let A=0;A<=s;A++){const R=A/s*Math.PI*2,y=Math.sin(R),b=-Math.cos(R);l.x=b*v.x+y*S.x,l.y=b*v.y+y*S.y,l.z=b*v.z+y*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=e;w++)for(let v=1;v<=s;v++){const S=(s+1)*(w-1)+(v-1),A=(s+1)*w+(v-1),R=(s+1)*w+v,y=(s+1)*(w-1)+v;g.push(S,A,y),g.push(A,R,y)}}function _(){for(let w=0;w<=e;w++)for(let v=0;v<=s;v++)c.x=w/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Xr(new Qo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Eh(s))s.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Eh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function mn(i){const t={};for(let e=0;e<i.length;e++){const n=Ws(i[e]);for(const s in n)t[s]=n[s]}return t}function Eh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function od(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const ad={clone:Ws,merge:mn};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=Xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new T().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m3":this.uniforms[n].value=new le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ee().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Kp extends Kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xe extends Fi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _e extends Xe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Zp extends Fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qo,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=oc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jp extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $p extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ba={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Th(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Th(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Th(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Qp{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const jp=new Qp;class Tc{constructor(t){this.manager=t!==void 0?t:jp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Tc.DEFAULT_MATERIAL_NAME="__DEFAULT";const bs=new WeakMap;class t0 extends Tc{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ba.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=bs.get(o);d===void 0&&(d=[],bs.set(o,d)),d.push({onLoad:e,onError:s})}return o}const a=zr("img");function l(){h(),e&&e(this);const d=bs.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}bs.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),Ba.remove(`image:${t}`);const u=bs.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}bs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ba.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Ah extends Tc{constructor(t){super(t)}load(t,e,n,s){const r=new an,o=new t0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Ac extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class e0 extends Ac{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ga=new Ee,Ph=new T,Rh=new T;class ld{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yc,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ph),Rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ga,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Or||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const So=new T,Eo=new Ks,Qn=new T;class cd extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(So,Eo,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Eo,Qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(So,Eo,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Eo,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new T,Ch=new ut,Ih=new ut;class _n extends cd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Ih),e.subVectors(Ih,Ch)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class n0 extends ld{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}}class hd extends Ac{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new n0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Pc extends cd{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class i0 extends ld{constructor(){super(new Pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dh extends Ac{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new i0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const Ss=-90,Es=1;class s0 extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Ss,Es,t,e);s.layers=this.layers,this.add(s);const r=new _n(Ss,Es,t,e);r.layers=this.layers,this.add(r);const o=new _n(Ss,Es,t,e);o.layers=this.layers,this.add(o);const a=new _n(Ss,Es,t,e);a.layers=this.layers,this.add(a);const l=new _n(Ss,Es,t,e);l.layers=this.layers,this.add(l);const c=new _n(Ss,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class r0 extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Lh=new Ee;class o0{constructor(t,e,n=0,s=1/0){this.ray=new na(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Me("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lh),this}intersectObject(t,e=!0,n=[]){return Hl(t,this,n,e),n.sort(Nh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Hl(t[s],this,n,e);return n.sort(Nh),n}}function Nh(i,t){return i.distance-t.distance}function Hl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Hl(r[o],t,e,!0)}}const Hc=class Hc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Hc.prototype.isMatrix2=!0;let Uh=Hc;function Fh(i,t,e,n){const s=a0(n);switch(e){case Ou:return i*t;case uc:return i*t/s.components*s.byteLength;case dc:return i*t/s.components*s.byteLength;case is:return i*t*2/s.components*s.byteLength;case fc:return i*t*2/s.components*s.byteLength;case zu:return i*t*3/s.components*s.byteLength;case Xn:return i*t*4/s.components*s.byteLength;case pc:return i*t*4/s.components*s.byteLength;case Lo:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Uo:case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hl:case dl:return Math.max(i,16)*Math.max(t,8)/4;case cl:case ul:return Math.max(i,8)*Math.max(t,8)/2;case fl:case pl:case gl:case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ml:case Wo:case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ll:case Nl:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fl:case kl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xo:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a0(i){switch(i){case Tn:case Nu:return{byteLength:1,components:1};case Fr:case Uu:case Yn:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case ri:case lc:case Wn:return{byteLength:4,components:1};case Fu:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);function ud(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function l0(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h0=`#ifdef USE_ALPHAHASH
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
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
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
#endif`,g0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
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
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,b0=`#ifdef USE_BUMPMAP
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,D0=`#define PI 3.141592653589793
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
} // validated`,L0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N0=`vec3 transformedNormal = objectNormal;
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
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",B0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
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
#endif`,am=`uniform sampler2D dfgLUT;
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
}`,lm=`
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_m=`#if defined( USE_POINTS_UV )
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
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
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
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
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
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ym=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Km=`float getShadowMask() {
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
}`,Zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,$m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ig=`#ifdef USE_TRANSMISSION
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
#endif`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hg=`uniform sampler2D t2D;
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`#include <common>
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
}`,gg=`#if DEPTH_PACKING == 3200
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
}`,xg=`#define DISTANCE
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
}`,vg=`#define DISTANCE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Eg=`#define LAMBERT
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
}`,Tg=`#define LAMBERT
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
}`,Ag=`#define MATCAP
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
}`,Pg=`#define MATCAP
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
}`,Rg=`#define NORMAL
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
}`,Cg=`#define NORMAL
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
}`,Ig=`#define PHONG
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
}`,Dg=`#define PHONG
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
}`,Lg=`#define STANDARD
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
}`,Ng=`#define STANDARD
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
}`,Ug=`#define TOON
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
}`,Fg=`#define TOON
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
}`,kg=`uniform float size;
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
}`,Og=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Bg=`uniform vec3 color;
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
}`,Gg=`uniform float rotation;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:c0,alphahash_pars_fragment:h0,alphamap_fragment:u0,alphamap_pars_fragment:d0,alphatest_fragment:f0,alphatest_pars_fragment:p0,aomap_fragment:m0,aomap_pars_fragment:g0,batching_pars_vertex:x0,batching_vertex:v0,begin_vertex:_0,beginnormal_vertex:y0,bsdfs:M0,iridescence_fragment:w0,bumpmap_pars_fragment:b0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:E0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:A0,color_fragment:P0,color_pars_fragment:R0,color_pars_vertex:C0,color_vertex:I0,common:D0,cube_uv_reflection_fragment:L0,defaultnormal_vertex:N0,displacementmap_pars_vertex:U0,displacementmap_vertex:F0,emissivemap_fragment:k0,emissivemap_pars_fragment:O0,colorspace_fragment:z0,colorspace_pars_fragment:B0,envmap_fragment:G0,envmap_common_pars_fragment:H0,envmap_pars_fragment:V0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:em,envmap_vertex:X0,fog_vertex:q0,fog_pars_vertex:Y0,fog_fragment:K0,fog_pars_fragment:Z0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:$0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:j0,lights_pars_begin:tm,lights_toon_fragment:nm,lights_toon_pars_fragment:im,lights_phong_fragment:sm,lights_phong_pars_fragment:rm,lights_physical_fragment:om,lights_physical_pars_fragment:am,lights_fragment_begin:lm,lights_fragment_maps:cm,lights_fragment_end:hm,lightprobes_pars_fragment:um,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:xm,map_particle_fragment:vm,map_particle_pars_fragment:_m,metalnessmap_fragment:ym,metalnessmap_pars_fragment:Mm,morphinstance_vertex:wm,morphcolor_vertex:bm,morphnormal_vertex:Sm,morphtarget_pars_vertex:Em,morphtarget_vertex:Tm,normal_fragment_begin:Am,normal_fragment_maps:Pm,normal_pars_fragment:Rm,normal_pars_vertex:Cm,normal_vertex:Im,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Nm,clearcoat_pars_fragment:Um,iridescence_pars_fragment:Fm,opaque_fragment:km,packing:Om,premultiplied_alpha_fragment:zm,project_vertex:Bm,dithering_fragment:Gm,dithering_pars_fragment:Hm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:Xm,shadowmap_pars_vertex:qm,shadowmap_vertex:Ym,shadowmask_pars_fragment:Km,skinbase_vertex:Zm,skinning_pars_vertex:Jm,skinning_vertex:$m,skinnormal_vertex:Qm,specularmap_fragment:jm,specularmap_pars_fragment:tg,tonemapping_fragment:eg,tonemapping_pars_fragment:ng,transmission_fragment:ig,transmission_pars_fragment:sg,uv_pars_fragment:rg,uv_pars_vertex:og,uv_vertex:ag,worldpos_vertex:lg,background_vert:cg,background_frag:hg,backgroundCube_vert:ug,backgroundCube_frag:dg,cube_vert:fg,cube_frag:pg,depth_vert:mg,depth_frag:gg,distance_vert:xg,distance_frag:vg,equirect_vert:_g,equirect_frag:yg,linedashed_vert:Mg,linedashed_frag:wg,meshbasic_vert:bg,meshbasic_frag:Sg,meshlambert_vert:Eg,meshlambert_frag:Tg,meshmatcap_vert:Ag,meshmatcap_frag:Pg,meshnormal_vert:Rg,meshnormal_frag:Cg,meshphong_vert:Ig,meshphong_frag:Dg,meshphysical_vert:Lg,meshphysical_frag:Ng,meshtoon_vert:Ug,meshtoon_frag:Fg,points_vert:kg,points_frag:Og,shadow_vert:zg,shadow_frag:Bg,sprite_vert:Gg,sprite_frag:Hg},It={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},ei={basic:{uniforms:mn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:mn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:mn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:mn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:mn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Dt(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:mn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:mn([It.points,It.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:mn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:mn([It.common,It.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:mn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:mn([It.sprite,It.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:mn([It.common,It.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:mn([It.lights,It.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};ei.physical={uniforms:mn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const To={r:0,b:0,g:0},Vg=new Ee,dd=new le;dd.set(-1,0,0,0,1,0,0,0,1);function Wg(i,t,e,n,s,r){const o=new Dt(0);let a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){const v=_.backgroundBlurriness>0;w=t.get(w,v)}return w}function g(_){let w=!1;const v=f(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,w){const v=f(w);v&&(v.isCubeTexture||v.mapping===ea)?(c===void 0&&(c=new D(new Ne(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ws(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dd),c.material.toneMapped=ve.getTransfer(v.colorSpace)!==Pe,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new D(new be(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ws(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ve.getTransfer(v.colorSpace)!==Pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,w){_.getRGB(To,od(i)),e.buffers.color.setClear(To.r,To.g,To.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,w=1){o.set(_),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:g,addToRenderList:x,dispose:p}}function Xg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(N,U,G,z,V){let tt=!1;const Y=d(N,z,G,U);r!==Y&&(r=Y,c(r.object)),tt=f(N,z,G,V),tt&&g(N,z,G,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,v(N,U,G,z),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,U,G,z){const V=z.wireframe===!0;let tt=n[U.id];tt===void 0&&(tt={},n[U.id]=tt);const Y=N.isInstancedMesh===!0?N.id:0;let H=tt[Y];H===void 0&&(H={},tt[Y]=H);let O=H[G.id];O===void 0&&(O={},H[G.id]=O);let X=O[V];return X===void 0&&(X=u(l()),O[V]=X),X}function u(N){const U=[],G=[],z=[];for(let V=0;V<e;V++)U[V]=0,G[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:z,object:N,attributes:{},index:null}}function f(N,U,G,z){const V=r.attributes,tt=U.attributes;let Y=0;const H=G.getAttributes();for(const O in H)if(H[O].location>=0){const et=V[O];let dt=tt[O];if(dt===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(dt=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(dt=N.instanceColor)),et===void 0||et.attribute!==dt||dt&&et.data!==dt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function g(N,U,G,z){const V={},tt=U.attributes;let Y=0;const H=G.getAttributes();for(const O in H)if(H[O].location>=0){let et=tt[O];et===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(et=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(et=N.instanceColor));const dt={};dt.attribute=et,et&&et.data&&(dt.data=et.data),V[O]=dt,Y++}r.attributes=V,r.attributesNum=Y,r.index=z}function x(){const N=r.newAttributes;for(let U=0,G=N.length;U<G;U++)N[U]=0}function m(N){p(N,0)}function p(N,U){const G=r.newAttributes,z=r.enabledAttributes,V=r.attributeDivisors;G[N]=1,z[N]===0&&(i.enableVertexAttribArray(N),z[N]=1),V[N]!==U&&(i.vertexAttribDivisor(N,U),V[N]=U)}function _(){const N=r.newAttributes,U=r.enabledAttributes;for(let G=0,z=U.length;G<z;G++)U[G]!==N[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function w(N,U,G,z,V,tt,Y){Y===!0?i.vertexAttribIPointer(N,U,G,V,tt):i.vertexAttribPointer(N,U,G,z,V,tt)}function v(N,U,G,z){x();const V=z.attributes,tt=G.getAttributes(),Y=U.defaultAttributeValues;for(const H in tt){const O=tt[H];if(O.location>=0){let X=V[H];if(X===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(X=N.instanceColor)),X!==void 0){const et=X.normalized,dt=X.itemSize,At=t.get(X);if(At===void 0)continue;const de=At.buffer,$t=At.type,re=At.bytesPerElement,Q=$t===i.INT||$t===i.UNSIGNED_INT||X.gpuType===lc;if(X.isInterleavedBufferAttribute){const rt=X.data,vt=rt.stride,Kt=X.offset;if(rt.isInstancedInterleavedBuffer){for(let Et=0;Et<O.locationSize;Et++)p(O.location+Et,rt.meshPerAttribute);N.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Et=0;Et<O.locationSize;Et++)m(O.location+Et);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Et=0;Et<O.locationSize;Et++)w(O.location+Et,dt/O.locationSize,$t,et,vt*re,(Kt+dt/O.locationSize*Et)*re,Q)}else{if(X.isInstancedBufferAttribute){for(let rt=0;rt<O.locationSize;rt++)p(O.location+rt,X.meshPerAttribute);N.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let rt=0;rt<O.locationSize;rt++)m(O.location+rt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let rt=0;rt<O.locationSize;rt++)w(O.location+rt,dt/O.locationSize,$t,et,dt*re,dt/O.locationSize*rt*re,Q)}}else if(Y!==void 0){const et=Y[H];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(O.location,et);break;case 3:i.vertexAttrib3fv(O.location,et);break;case 4:i.vertexAttrib4fv(O.location,et);break;default:i.vertexAttrib1fv(O.location,et)}}}}_()}function S(){b();for(const N in n){const U=n[N];for(const G in U){const z=U[G];for(const V in z){const tt=z[V];for(const Y in tt)h(tt[Y].object),delete tt[Y];delete z[V]}}delete n[N]}}function A(N){if(n[N.id]===void 0)return;const U=n[N.id];for(const G in U){const z=U[G];for(const V in z){const tt=z[V];for(const Y in tt)h(tt[Y].object),delete tt[Y];delete z[V]}}delete n[N.id]}function R(N){for(const U in n){const G=n[U];for(const z in G){const V=G[z];if(V[N.id]===void 0)continue;const tt=V[N.id];for(const Y in tt)h(tt[Y].object),delete tt[Y];delete V[N.id]}}}function y(N){for(const U in n){const G=n[U],z=N.isInstancedMesh===!0?N.id:0,V=G[z];if(V!==void 0){for(const tt in V){const Y=V[tt];for(const H in Y)h(Y[H].object),delete Y[H];delete V[tt]}delete G[z],Object.keys(G).length===0&&delete n[U]}}}function b(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function qg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Yg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const y=R===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Tn&&R!==Wn&&!y&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(ee("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:v,maxSamples:S,samples:A}}function Kg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Hn,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const _=r?0:n,w=_*4;let v=p.clippingState||null;l.value=v,v=h(g,u,w,f);for(let S=0;S!==w;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==x;++w,v+=4)o.copy(d[w]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}const ks=4,Zg=6,Jg=20,$g=256,hr=new Pc,kh=new Dt;let Ha=null,Va=0,Wa=0,Xa=!1;const Qg=new T,Ki=new T;class Vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Qg}=r;Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,Va,Wa),this._renderer.xr.enabled=Xa,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Yn,format:Xn,colorSpace:Yo,depthBuffer:!1},s=Oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jg(r)),this._blurMaterial=ex(r,t,e),this._ggxMaterial=tx(r,t,e)}return s}_compileMaterial(t){const e=new D(new Oe,t);this._renderer.compile(e,hr)}_sceneToCubeUV(t,e,n,s,r){const l=new _n(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(kh),d.toneMapping=si,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new D(new Ne,new Ue({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const _=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,p=!0):(m.color.copy(kh),p=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const S=this._cubeSize;Ts(s,v*S,w>2?S:0,S,S),d.setRenderTarget(s),p&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ns||t.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ts(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,hr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-ks?n-g+ks:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Ts(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,hr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ts(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,hr)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-ks?s-this._lodMax+ks:0),u=4*(this._cubeSize-h);Ts(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,hr)}}function jg(i){const t=[],e=[];let n=i;const s=i-ks+1+Zg;for(let r=0;r<s;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){const _=p%3*2/3-1,w=p>2?0:-1,v=[_,w,0,_+2/3,w,0,_+2/3,w+1,0,_,w,0,_+2/3,w+1,0,_,w+1,0];g.set(v,f*u*p);for(let S=0;S<u;S++){const A=h[S*2]*2-1,R=h[S*2+1]*2-1;p===0?Ki.set(1,R,A):p===1?Ki.set(-A,1,-R):p===2?Ki.set(-A,R,1):p===3?Ki.set(-1,R,-A):p===4?Ki.set(-A,-1,R):Ki.set(A,R,-1),Ki.toArray(x,(p*u+S)*f)}}const m=new Oe;m.setAttribute("position",new Mn(g,f)),m.setAttribute("outputDirection",new Mn(x,f)),e.push(new D(m,null)),n>ks&&n--}return{lodMeshes:e,sizeLods:t}}function Oh(i,t,e){const n=new Rn(i,t,e);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function tx(i,t,e){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$g,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sa(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ex(i,t,e){return new Kn({name:"SphericalGaussianBlur",defines:{SAMPLES:Jg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sa(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function zh(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Bh(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function sa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class fd extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ju(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ne(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:xi});r.uniforms.tEquirect.value=e;const o=new D(s,r),a=e.minFilter;return e.minFilter===Ji&&(e.minFilter=un),new s0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function nx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===da||f===fa)if(t.has(u)){const g=t.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new fd(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,g=f===da||f===fa,x=f===ns||f===Gs;if(g||x){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Vl(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const _=u.image;return g&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Vl(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===da?u.mapping=ns:f===fa&&(u.mapping=Gs),u}function l(u){let f=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function ix(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Os("WebGLRenderer: "+n+" extension not supported."),s}}}function sx(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const _=f.array;x=f.version;for(let w=0,v=_.length;w<v;w+=3){const S=_[w+0],A=_[w+1],R=_[w+2];u.push(S,A,A,R,R,S)}}else{const _=g.array;x=g.version;for(let w=0,v=_.length/3-1;w<v;w+=3){const S=w+0,A=w+1,R=w+2;u.push(S,A,A,R,R,S)}}const m=new(g.count>=65535?Xu:Wu)(u,1);m.version=x;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function rx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ox(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Me("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ax(i,t,e){const n=new WeakMap,s=new ke;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let C=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var f=C;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let S=a.attributes.position.count*v,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const R=new Float32Array(S*A*4*d),y=new Gu(R,S,A,d);y.type=Wn,y.needsUpdate=!0;const b=v*4;for(let N=0;N<d;N++){const U=p[N],G=_[N],z=w[N],V=S*A*4*N;for(let tt=0;tt<U.count;tt++){const Y=tt*b;g===!0&&(s.fromBufferAttribute(U,tt),R[V+Y+0]=s.x,R[V+Y+1]=s.y,R[V+Y+2]=s.z,R[V+Y+3]=0),x===!0&&(s.fromBufferAttribute(G,tt),R[V+Y+4]=s.x,R[V+Y+5]=s.y,R[V+Y+6]=s.z,R[V+Y+7]=0),m===!0&&(s.fromBufferAttribute(z,tt),R[V+Y+8]=s.x,R[V+Y+9]=s.y,R[V+Y+10]=s.z,R[V+Y+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:y,size:new ut(S,A)},n.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function lx(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const cx={[Au]:"LINEAR_TONE_MAPPING",[Pu]:"REINHARD_TONE_MAPPING",[Ru]:"CINEON_TONE_MAPPING",[ac]:"ACES_FILMIC_TONE_MAPPING",[Iu]:"AGX_TONE_MAPPING",[Du]:"NEUTRAL_TONE_MAPPING",[Cu]:"CUSTOM_TONE_MAPPING"};function hx(i,t,e,n,s,r){const o=new Rn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Oe;c.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ce([0,2,0,0,2,0],2));const h=new Kp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new D(c,h),u=new Pc(-1,1,1,-1,0,1);let f=null,g=null,x=!1,m,p=null,_=[],w=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let A=0;A<_.length;A++){const R=_[A];R.setSize&&R.setSize(v,S)}},this.setEffects=function(v){_=v,w=_.length>0&&_[0].isRenderPass===!0;const S=o.width,A=o.height;_.length>0&&a===null&&(a=new Rn(S,A,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(S,A,{type:Yn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<_.length;R++){const y=_[R];y.setSize&&y.setSize(S,A)}},this.begin=function(v,S){if(x||v.toneMapping===si&&_.length===0)return!1;if(p=S,S!==null){const A=S.width,R=S.height;(o.width!==A||o.height!==R)&&this.setSize(A,R)}return w===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=si,!0},this.hasRenderPass=function(){return w},this.end=function(v,S){v.toneMapping=m,x=!0;let A=o,R=a;for(let y=0;y<_.length;y++){const b=_[y];b.enabled!==!1&&(b.render(v,R,A,S),b.needsSwap!==!1&&(A=R,R=R===a?l:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},ve.getTransfer(f)===Pe&&(h.defines.SRGB_TRANSFER="");const y=cx[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(p),v.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const pd=new an,Wl=new Gr(1,1),md=new Gu,gd=new Xf,xd=new Ju,Gh=[],Hh=[],Vh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function Zs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ra(i,t){let e=Hh[t];e===void 0&&(e=new Int32Array(t),Hh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ux(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function fx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function px(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function mx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,n))return;Xh.set(n),i.uniformMatrix2fv(this.addr,!1,Xh),Qe(e,n)}}function gx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,n))return;Wh.set(n),i.uniformMatrix3fv(this.addr,!1,Wh),Qe(e,n)}}function xx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if($e(e,n))return;Vh.set(n),i.uniformMatrix4fv(this.addr,!1,Vh),Qe(e,n)}}function vx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _x(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function yx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function Mx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function wx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function Sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function Ex(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function Tx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wl.compareFunction=e.isReversedDepthBuffer()?gc:mc,r=Wl):r=pd,e.setTexture2D(t||r,s)}function Ax(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gd,s)}function Px(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xd,s)}function Rx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||md,s)}function Cx(i){switch(i){case 5126:return ux;case 35664:return dx;case 35665:return fx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return vx;case 35667:case 35671:return _x;case 35668:case 35672:return yx;case 35669:case 35673:return Mx;case 5125:return wx;case 36294:return bx;case 36295:return Sx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Rx}}function Ix(i,t){i.uniform1fv(this.addr,t)}function Dx(i,t){const e=Zs(t,this.size,2);i.uniform2fv(this.addr,e)}function Lx(i,t){const e=Zs(t,this.size,3);i.uniform3fv(this.addr,e)}function Nx(i,t){const e=Zs(t,this.size,4);i.uniform4fv(this.addr,e)}function Ux(i,t){const e=Zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fx(i,t){const e=Zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kx(i,t){const e=Zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ox(i,t){i.uniform1iv(this.addr,t)}function zx(i,t){i.uniform2iv(this.addr,t)}function Bx(i,t){i.uniform3iv(this.addr,t)}function Gx(i,t){i.uniform4iv(this.addr,t)}function Hx(i,t){i.uniform1uiv(this.addr,t)}function Vx(i,t){i.uniform2uiv(this.addr,t)}function Wx(i,t){i.uniform3uiv(this.addr,t)}function Xx(i,t){i.uniform4uiv(this.addr,t)}function qx(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Wl:o=pd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Yx(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gd,r[o])}function Kx(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xd,r[o])}function Zx(i,t,e){const n=this.cache,s=t.length,r=ra(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||md,r[o])}function Jx(i){switch(i){case 5126:return Ix;case 35664:return Dx;case 35665:return Lx;case 35666:return Nx;case 35674:return Ux;case 35675:return Fx;case 35676:return kx;case 5124:case 35670:return Ox;case 35667:case 35671:return zx;case 35668:case 35672:return Bx;case 35669:case 35673:return Gx;case 5125:return Hx;case 36294:return Vx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Zx}}class $x{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cx(e.type)}}class Qx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jx(e.type)}}class jx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function qh(i,t){i.seq.push(t),i.map[t.id]=t}function tv(i,t,e){const n=i.name,s=n.length;for(qa.lastIndex=0;;){const r=qa.exec(n),o=qa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qh(e,c===void 0?new $x(a,i,t):new Qx(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new jx(a),qh(e,d)),e=d}}}class ko{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);tv(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Yh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ev=37297;let nv=0;function iv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Kh=new le;function sv(i){ve._getMatrix(Kh,ve.workingColorSpace,i);const t=`mat3( ${Kh.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case Ko:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+iv(i.getShaderSource(t),a)}else return r}function rv(i,t){const e=sv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ov={[Au]:"Linear",[Pu]:"Reinhard",[Ru]:"Cineon",[ac]:"ACESFilmic",[Iu]:"AgX",[Du]:"Neutral",[Cu]:"Custom"};function av(i,t){const e=ov[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ao=new T;function lv(){ve.getLuminanceCoefficients(Ao);const i=Ao.x.toFixed(4),t=Ao.y.toFixed(4),e=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function hv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function uv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function br(i){return i!==""}function Jh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(i){return i.replace(dv,pv)}const fv=new Map;function pv(i,t){let e=fe[t];if(e===void 0){const n=fv.get(t);if(n!==void 0)e=fe[n],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xl(e)}const mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace(mv,gv)}function gv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const xv={[Do]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function vv(i){return xv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _v={[ns]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE_UV"};function yv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":_v[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mv={[Gs]:"ENVMAP_MODE_REFRACTION"};function wv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Mv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bv={[oc]:"ENVMAP_BLENDING_MULTIPLY",[af]:"ENVMAP_BLENDING_MIX",[lf]:"ENVMAP_BLENDING_ADD"};function Sv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":bv[i.combine]||"ENVMAP_BLENDING_NONE"}function Ev(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Tv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=vv(e),c=yv(e),h=wv(e),d=Sv(e),u=Ev(e),f=cv(e),g=hv(r),x=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),p.length>0&&(p+=`
`)):(m=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?fe.tonemapping_pars_fragment:"",e.toneMapping!==si?av("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,rv("linearToOutputTexel",e.outputColorSpace),lv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),o=Xl(o),o=Jh(o,e),o=$h(o,e),a=Xl(a),a=Jh(a,e),a=$h(a,e),o=Qh(o),a=Qh(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=_+m+o,v=_+p+a,S=Yh(s,s.VERTEX_SHADER,w),A=Yh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(N){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(S)||"",z=s.getShaderInfoLog(A)||"",V=U.trim(),tt=G.trim(),Y=z.trim();let H=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,A);else{const X=Zh(s,S,"vertex"),et=Zh(s,A,"fragment");Me("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+X+`
`+et)}else V!==""?ee("WebGLProgram: Program Info Log:",V):(tt===""||Y==="")&&(O=!1);O&&(N.diagnostics={runnable:H,programLog:V,vertexShader:{log:tt,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(S),s.deleteShader(A),y=new ko(s,x),b=uv(s,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,ev)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=A,this}let Av=0;class Pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Rv(t),e.set(t,n)),n}}class Rv{constructor(t){this.id=Av++,this.code=t,this.usedTimes=0}}function Cv(i){return i===is||i===Wo||i===Xo}function Iv(i,t,e,n,s,r){const o=new _c,a=new Pv,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,b,C,N,U,G){const z=N.fog,V=U.geometry,tt=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,H=t.get(y.envMap||tt,Y),O=H&&H.mapping===ea?H.image.height:null,X=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&ee("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const et=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dt=et!==void 0?et.length:0;let At=0;V.morphAttributes.position!==void 0&&(At=1),V.morphAttributes.normal!==void 0&&(At=2),V.morphAttributes.color!==void 0&&(At=3);let de,$t,re,Q;if(X){const Ae=ei[X];de=Ae.vertexShader,$t=Ae.fragmentShader}else{de=y.vertexShader,$t=y.fragmentShader;const Ae=a.getVertexShaderStage(y),ge=a.getFragmentShaderStage(y);a.update(y,Ae,ge),re=Ae.id,Q=ge.id}const rt=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Kt=U.isInstancedMesh===!0,Et=U.isBatchedMesh===!0,Lt=!!y.map,he=!!y.matcap,st=!!H,ht=!!y.aoMap,pt=!!y.lightMap,mt=!!y.bumpMap&&y.wireframe===!1,gt=!!y.normalMap,Yt=!!y.displacementMap,Zt=!!y.emissiveMap,te=!!y.metalnessMap,se=!!y.roughnessMap,k=y.anisotropy>0,me=y.clearcoat>0,Wt=y.dispersion>0,I=y.retroreflectivity>0,M=y.iridescence>0,W=y.sheen>0,Z=y.transmission>0,nt=k&&!!y.anisotropyMap,xt=me&&!!y.clearcoatMap,_t=me&&!!y.clearcoatNormalMap,it=me&&!!y.clearcoatRoughnessMap,at=M&&!!y.iridescenceMap,yt=M&&!!y.iridescenceThicknessMap,Vt=W&&!!y.sheenColorMap,Tt=W&&!!y.sheenRoughnessMap,bt=!!y.specularMap,zt=!!y.specularColorMap,Qt=!!y.specularIntensityMap,oe=Z&&!!y.transmissionMap,B=Z&&!!y.thicknessMap,ft=!!y.gradientMap,ot=!!y.alphaMap,wt=y.alphaTest>0,Pt=!!y.alphaHash,ct=!!y.extensions;let Xt=si;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const Ht={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:de,fragmentShader:$t,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Et,batchingColor:Et&&U._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&U.instanceColor!==null,instancingMorph:Kt&&U.morphTexture!==null,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Lt,matcap:he,envMap:st,envMapMode:st&&H.mapping,envMapCubeUVHeight:O,aoMap:ht,lightMap:pt,bumpMap:mt,normalMap:gt,displacementMap:Yt,emissiveMap:Zt,normalMapObjectSpace:gt&&y.normalMapType===uf,normalMapTangentSpace:gt&&y.normalMapType===qo,packedNormalMap:gt&&y.normalMapType===qo&&Cv(y.normalMap.format),metalnessMap:te,roughnessMap:se,anisotropy:k,anisotropyMap:nt,clearcoat:me,clearcoatMap:xt,clearcoatNormalMap:_t,clearcoatRoughnessMap:it,dispersion:Wt,retroreflection:I,iridescence:M,iridescenceMap:at,iridescenceThicknessMap:yt,sheen:W,sheenColorMap:Vt,sheenRoughnessMap:Tt,specularMap:bt,specularColorMap:zt,specularIntensityMap:Qt,transmission:Z,transmissionMap:oe,thicknessMap:B,gradientMap:ft,opaque:y.transparent===!1&&y.blending===Tr&&y.alphaToCoverage===!1,alphaMap:ot,alphaTest:wt,alphaHash:Pt,combine:y.combine,mapUv:Lt&&g(y.map.channel),aoMapUv:ht&&g(y.aoMap.channel),lightMapUv:pt&&g(y.lightMap.channel),bumpMapUv:mt&&g(y.bumpMap.channel),normalMapUv:gt&&g(y.normalMap.channel),displacementMapUv:Yt&&g(y.displacementMap.channel),emissiveMapUv:Zt&&g(y.emissiveMap.channel),metalnessMapUv:te&&g(y.metalnessMap.channel),roughnessMapUv:se&&g(y.roughnessMap.channel),anisotropyMapUv:nt&&g(y.anisotropyMap.channel),clearcoatMapUv:xt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:_t&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(y.sheenRoughnessMap.channel),specularMapUv:bt&&g(y.specularMap.channel),specularColorMapUv:zt&&g(y.specularColorMap.channel),specularIntensityMapUv:Qt&&g(y.specularIntensityMap.channel),transmissionMapUv:oe&&g(y.transmissionMap.channel),thicknessMapUv:B&&g(y.thicknessMap.channel),alphaMapUv:ot&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(gt||k),vertexNormals:!!V.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(Lt||ot),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||V.attributes.normal===void 0&&gt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:At,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Lt&&y.map.isVideoTexture===!0&&ve.getTransfer(y.map.colorSpace)===Pe,decodeVideoTextureEmissive:Zt&&y.emissiveMap.isVideoTexture===!0&&ve.getTransfer(y.emissiveMap.colorSpace)===Pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fe,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&y.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function m(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)b.push(C),b.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(p(b,y),_(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function p(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function _(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function w(y){const b=f[y.type];let C;if(b){const N=ei[b];C=ad.clone(N.uniforms)}else C=y.uniforms;return C}function v(y,b){let C=h.get(b);return C!==void 0?++C.usedTimes:(C=new Tv(i,b,y,s),c.push(C),h.set(b,C)),C}function S(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function A(y){a.remove(y)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:R}}function Dv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Lv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function tu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function eu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,x,m,p){let _=i[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},i[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=g,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=m,_.group=p),t++,_}function l(u,f,g,x,m,p,_){_.reversedDepth===!0&&(m=-m);const w=a(u,f,g,x,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(u,f,g,x,m,p){const _=a(u,f,g,x,m,p);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function h(u,f){e.length>1&&e.sort(u||Lv),n.length>1&&n.sort(f||tu),s.length>1&&s.sort(f||tu)}function d(){for(let u=t,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Nv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new eu,i.set(n,[o])):s>=r.length?(o=new eu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Uv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new T,color:new Dt};break;case"SpotLight":e={position:new T,direction:new T,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Fv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let kv=0;function Ov(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zv(i){const t=new Uv,e=Fv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new Ee,o=new Ee;function a(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,w=0,v=0,S=0,A=0,R=0,y=0,b=0,C=0;c.sort(Ov);for(let U=0,G=c.length;U<G;U++){const z=c[U],V=z.color,tt=z.intensity,Y=z.distance;let H=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===is?H=z.shadow.map.texture:H=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)h+=V.r*tt,d+=V.g*tt,u+=V.b*tt;else if(z.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(z.sh.coefficients[O],tt);C++}else if(z.isSunLight){const O=t.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const X=z.shadow,et=e.get(z);et.shadowIntensity=X.intensity,et.shadowBias=X.bias,et.shadowNormalBias=X.normalBias,et.shadowRadius=X.radius,et.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=H;const dt=X.getViewportCount();for(let At=0;At<dt;At++)n.sunShadowMatrix[x+At]=X.getMatrix(At),n.sunShadowCascade[x+At]=X._cascadeData[At];x+=dt,g++}n.sun[f]=O,f++}else if(z.isDirectionalLight){const O=t.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const X=z.shadow,et=e.get(z);et.shadowIntensity=X.intensity,et.shadowBias=X.bias,et.shadowNormalBias=X.normalBias,et.shadowRadius=X.radius,et.shadowMapSize=X.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=z.shadow.matrix,S++}n.directional[m]=O,m++}else if(z.isSpotLight){const O=t.get(z);O.position.setFromMatrixPosition(z.matrixWorld),O.color.copy(V).multiplyScalar(tt),O.distance=Y,O.coneCos=Math.cos(z.angle),O.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),O.decay=z.decay,n.spot[_]=O;const X=z.shadow;if(z.map&&(n.spotLightMap[y]=z.map,y++,X.updateMatrices(z),z.castShadow&&b++),n.spotLightMatrix[_]=X.matrix,z.castShadow){const et=e.get(z);et.shadowIntensity=X.intensity,et.shadowBias=X.bias,et.shadowNormalBias=X.normalBias,et.shadowRadius=X.radius,et.shadowMapSize=X.mapSize,n.spotShadow[_]=et,n.spotShadowMap[_]=H,R++}_++}else if(z.isRectAreaLight){const O=t.get(z);O.color.copy(V).multiplyScalar(tt),O.halfWidth.set(z.width*.5,0,0),O.halfHeight.set(0,z.height*.5,0),n.rectArea[w]=O,w++}else if(z.isPointLight){const O=t.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),O.distance=z.distance,O.decay=z.decay,z.castShadow){const X=z.shadow,et=e.get(z);et.shadowIntensity=X.intensity,et.shadowBias=X.bias,et.shadowNormalBias=X.normalBias,et.shadowRadius=X.radius,et.shadowMapSize=X.mapSize,et.shadowCameraNear=X.camera.near,et.shadowCameraFar=X.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=z.shadow.matrix,A++}n.point[p]=O,p++}else if(z.isHemisphereLight){const O=t.get(z);O.skyColor.copy(z.color).multiplyScalar(tt),O.groundColor.copy(z.groundColor).multiplyScalar(tt),n.hemi[v]=O,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==_||N.rectAreaLength!==w||N.hemiLength!==v||N.numSunShadows!==g||N.numDirectionalShadows!==S||N.numPointShadows!==A||N.numSpotShadows!==R||N.numSpotMaps!==y||N.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=w,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=_,N.rectAreaLength=w,N.hemiLength=v,N.numSunShadows=g,N.numDirectionalShadows=S,N.numPointShadows=A,N.numSpotShadows=R,N.numSpotMaps=y,N.numLightProbes=C,n.version=kv++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,m=0;const p=h.matrixWorldInverse;for(let _=0,w=c.length;_<w;_++){const v=c[_];if(v.isSunLight){const S=n.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),d++}else if(v.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(v.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function nu(i){const t=new zv(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Bv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new nu(i),t.set(s,[a])):r>=o.length?(a=new nu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hv=`uniform sampler2D shadow_pass;
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
}`,Vv=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],Wv=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],iu=new Ee,ur=new T,Ya=new T;function Xv(i,t,e){let n=new yc;const s=new ut,r=new ut,o=new ke,a=new Jp,l=new $p,c={},h=e.maxTextureSize,d={[Ni]:xn,[xn]:Ni,[Fe]:Fe},u=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Gv,fragmentShader:Hv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new D(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do;let p=this.type;this.render=function(A,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Su&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Do);const b=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),U=i.state;U.setBlending(xi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const G=p!==this.type;G&&R.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(V=>V.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,V=A.length;z<V;z++){const tt=A[z],Y=tt.shadow;if(Y===void 0){ee("WebGLShadowMap:",tt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const H=Y.getFrameExtents();s.multiply(H),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,Y.mapSize.y=r.y));const O=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=O,Y.map===null||G===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Mr){if(tt.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Rn(s.x,s.y,{format:is,type:Yn,minFilter:un,magFilter:un,generateMipmaps:!1}),Y.map.texture.name=tt.name+".shadowMap",Y.map.depthTexture=new Gr(s.x,s.y,Wn),Y.map.depthTexture.name=tt.name+".shadowMapDepth",Y.map.depthTexture.format=Mi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=on,Y.map.depthTexture.magFilter=on}else tt.isPointLight?(Y.map=new fd(s.x),Y.map.depthTexture=new dp(s.x,ri)):(Y.map=new Rn(s.x,s.y),Y.map.depthTexture=new Gr(s.x,s.y,ri)),Y.map.depthTexture.name=tt.name+".shadowMap",Y.map.depthTexture.format=Mi,this.type===Do?(Y.map.depthTexture.compareFunction=O?gc:mc,Y.map.depthTexture.minFilter=un,Y.map.depthTexture.magFilter=un):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=on,Y.map.depthTexture.magFilter=on);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);const X=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();tt.isPointLight!==!0&&Y.updateMatrices(tt,y);for(let et=0;et<X;et++){const dt=Y.getCamera(et);if(tt.isPointLight){const At=Y.camera,de=Y.matrix,$t=tt.distance||At.far;$t!==At.far&&(At.far=$t,At.updateProjectionMatrix()),ur.setFromMatrixPosition(tt.matrixWorld),At.position.copy(ur),Ya.copy(At.position),Ya.add(Vv[et]),At.up.copy(Wv[et]),At.lookAt(Ya),At.updateMatrixWorld(),de.makeTranslation(-ur.x,-ur.y,-ur.z),iu.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(iu,At.coordinateSystem,At.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,et),i.clear();else{et===0&&(i.setRenderTarget(Y.map),i.clear());const At=Y.getViewport(et);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),U.viewport(o)}n=Y.getFrustum(et),v(R,y,dt,tt,this.type)}Y.isPointLightShadow!==!0&&this.type===Mr&&_(Y,y),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,C,N)};function _(A,R){const y=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Rn(s.x,s.y,{format:is,type:Yn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,y,u,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,y,f,x,null)}function w(A,R,y,b){let C=null;const N=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)C=N;else if(C=y.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=C.uuid,G=R.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let V=z[G];V===void 0&&(V=C.clone(),z[G]=V,R.addEventListener("dispose",S)),C=V}if(C.visible=R.visible,C.wireframe=R.wireframe,b===Mr?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=i.properties.get(C);U.light=y}return C}function v(A,R,y,b,C){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===Mr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const G=t.update(A),z=A.material;if(Array.isArray(z)){const V=G.groups;for(let tt=0,Y=V.length;tt<Y;tt++){const H=V[tt],O=z[H.materialIndex];if(O&&O.visible){const X=w(A,O,b,C);A.onBeforeShadow(i,A,R,y,G,X,H),i.renderBufferDirect(y,null,G,X,A,H),A.onAfterShadow(i,A,R,y,G,X,H)}}}else if(z.visible){const V=w(A,z,b,C);A.onBeforeShadow(i,A,R,y,G,V,null),i.renderBufferDirect(y,null,G,V,A,null),A.onAfterShadow(i,A,R,y,G,V,null)}}const U=A.children;for(let G=0,z=U.length;G<z;G++)v(U[G],R,y,b,C)}function S(A){A.target.removeEventListener("dispose",S);for(const y in c){const b=c[y],C=A.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function qv(i,t){function e(){let B=!1;const ft=new ke;let ot=null;const wt=new ke(0,0,0,0);return{setMask:function(Pt){ot!==Pt&&!B&&(i.colorMask(Pt,Pt,Pt,Pt),ot=Pt)},setLocked:function(Pt){B=Pt},setClear:function(Pt,ct,Xt,Ht,Ae){Ae===!0&&(Pt*=Ht,ct*=Ht,Xt*=Ht),ft.set(Pt,ct,Xt,Ht),wt.equals(ft)===!1&&(i.clearColor(Pt,ct,Xt,Ht),wt.copy(ft))},reset:function(){B=!1,ot=null,wt.set(-1,0,0,0)}}}function n(){let B=!1,ft=!1,ot=null,wt=null,Pt=null;return{setReversed:function(ct){if(ft!==ct){const Xt=t.get("EXT_clip_control");ct?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),ft=ct;const Ht=Pt;Pt=null,this.setClear(Ht)}},getReversed:function(){return ft},setTest:function(ct){ct?rt(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(ct){ot!==ct&&!B&&(i.depthMask(ct),ot=ct)},setFunc:function(ct){if(ft&&(ct=bf[ct]),wt!==ct){switch(ct){case el:i.depthFunc(i.NEVER);break;case nl:i.depthFunc(i.ALWAYS);break;case il:i.depthFunc(i.LESS);break;case Ur:i.depthFunc(i.LEQUAL);break;case sl:i.depthFunc(i.EQUAL);break;case rl:i.depthFunc(i.GEQUAL);break;case ol:i.depthFunc(i.GREATER);break;case al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=ct}},setLocked:function(ct){B=ct},setClear:function(ct){Pt!==ct&&(Pt=ct,ft&&(ct=1-ct),i.clearDepth(ct))},reset:function(){B=!1,ot=null,wt=null,Pt=null,ft=!1}}}function s(){let B=!1,ft=null,ot=null,wt=null,Pt=null,ct=null,Xt=null,Ht=null,Ae=null;return{setTest:function(ge){B||(ge?rt(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(ge){ft!==ge&&!B&&(i.stencilMask(ge),ft=ge)},setFunc:function(ge,Ce,vn){(ot!==ge||wt!==Ce||Pt!==vn)&&(i.stencilFunc(ge,Ce,vn),ot=ge,wt=Ce,Pt=vn)},setOp:function(ge,Ce,vn){(ct!==ge||Xt!==Ce||Ht!==vn)&&(i.stencilOp(ge,Ce,vn),ct=ge,Xt=Ce,Ht=vn)},setLocked:function(ge){B=ge},setClear:function(ge){Ae!==ge&&(i.clearStencil(ge),Ae=ge)},reset:function(){B=!1,ft=null,ot=null,wt=null,Pt=null,ct=null,Xt=null,Ht=null,Ae=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,_=null,w=null,v=null,S=null,A=null,R=null,y=new Dt(0,0,0),b=0,C=!1,N=null,U=null,G=null,z=null,V=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,H=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(O)[1]),Y=H>=1):O.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),Y=H>=2);let X=null,et={};const dt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),de=new ke().fromArray(dt),$t=new ke().fromArray(At);function re(B,ft,ot,wt){const Pt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(B,ct),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<ot;Xt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(ft+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return ct}const Q={};Q[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(Ur),mt(!1),gt(Vc),rt(i.CULL_FACE),ht(xi);function rt(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function vt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Kt(B,ft){return u[B]!==ft?(i.bindFramebuffer(B,ft),u[B]=ft,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Et(B,ft){let ot=g,wt=!1;if(B){ot=f.get(ft),ot===void 0&&(ot=[],f.set(ft,ot));const Pt=B.textures;if(ot.length!==Pt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Xt=Pt.length;ct<Xt;ct++)ot[ct]=i.COLOR_ATTACHMENT0+ct;ot.length=Pt.length,wt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,wt=!0);wt&&i.drawBuffers(ot)}function Lt(B){return x!==B?(i.useProgram(B),x=B,!0):!1}const he={[Us]:i.FUNC_ADD,[Vd]:i.FUNC_SUBTRACT,[Wd]:i.FUNC_REVERSE_SUBTRACT};he[Xd]=i.MIN,he[qd]=i.MAX;const st={[Yd]:i.ZERO,[Kd]:i.ONE,[Zd]:i.SRC_COLOR,[Eu]:i.SRC_ALPHA,[ef]:i.SRC_ALPHA_SATURATE,[jd]:i.DST_COLOR,[$d]:i.DST_ALPHA,[Jd]:i.ONE_MINUS_SRC_COLOR,[Tu]:i.ONE_MINUS_SRC_ALPHA,[tf]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[nf]:i.CONSTANT_COLOR,[sf]:i.ONE_MINUS_CONSTANT_COLOR,[rf]:i.CONSTANT_ALPHA,[of]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(B,ft,ot,wt,Pt,ct,Xt,Ht,Ae,ge){if(B===xi){m===!0&&(vt(i.BLEND),m=!1);return}if(m===!1&&(rt(i.BLEND),m=!0),B!==Hd){if(B!==p||ge!==C){if((_!==Us||S!==Us)&&(i.blendEquation(i.FUNC_ADD),_=Us,S=Us),ge)switch(B){case Tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nr:i.blendFunc(i.ONE,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Me("WebGLState: Invalid blending: ",B);break}else switch(B){case Tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wc:Me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xc:Me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Me("WebGLState: Invalid blending: ",B);break}w=null,v=null,A=null,R=null,y.set(0,0,0),b=0,p=B,C=ge}return}Pt=Pt||ft,ct=ct||ot,Xt=Xt||wt,(ft!==_||Pt!==S)&&(i.blendEquationSeparate(he[ft],he[Pt]),_=ft,S=Pt),(ot!==w||wt!==v||ct!==A||Xt!==R)&&(i.blendFuncSeparate(st[ot],st[wt],st[ct],st[Xt]),w=ot,v=wt,A=ct,R=Xt),(Ht.equals(y)===!1||Ae!==b)&&(i.blendColor(Ht.r,Ht.g,Ht.b,Ae),y.copy(Ht),b=Ae),p=B,C=!1}function pt(B,ft){B.side===Fe?vt(i.CULL_FACE):rt(i.CULL_FACE);let ot=B.side===xn;ft&&(ot=!ot),mt(ot),B.blending===Tr&&B.transparent===!1?ht(xi):ht(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const wt=B.stencilWrite;a.setTest(wt),wt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Zt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(B){N!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),N=B)}function gt(B){B!==Bd?(rt(i.CULL_FACE),B!==U&&(B===Vc?i.cullFace(i.BACK):B===Gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),U=B}function Yt(B){B!==G&&(Y&&i.lineWidth(B),G=B)}function Zt(B,ft,ot){B?(rt(i.POLYGON_OFFSET_FILL),(z!==ft||V!==ot)&&(z=ft,V=ot,o.getReversed()&&(ft=-ft),i.polygonOffset(ft,ot))):vt(i.POLYGON_OFFSET_FILL)}function te(B){B?rt(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function se(B){B===void 0&&(B=i.TEXTURE0+tt-1),X!==B&&(i.activeTexture(B),X=B)}function k(B,ft,ot){ot===void 0&&(X===null?ot=i.TEXTURE0+tt-1:ot=X);let wt=et[ot];wt===void 0&&(wt={type:void 0,texture:void 0},et[ot]=wt),(wt.type!==B||wt.texture!==ft)&&(X!==ot&&(i.activeTexture(ot),X=ot),i.bindTexture(B,ft||Q[B]),wt.type=B,wt.texture=ft)}function me(){const B=et[X];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Wt(){try{i.compressedTexImage2D(...arguments)}catch(B){Me("WebGLState:",B)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(B){Me("WebGLState:",B)}}function M(){try{i.texSubImage2D(...arguments)}catch(B){Me("WebGLState:",B)}}function W(){try{i.texSubImage3D(...arguments)}catch(B){Me("WebGLState:",B)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Me("WebGLState:",B)}}function nt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Me("WebGLState:",B)}}function xt(){try{i.texStorage2D(...arguments)}catch(B){Me("WebGLState:",B)}}function _t(){try{i.texStorage3D(...arguments)}catch(B){Me("WebGLState:",B)}}function it(){try{i.texImage2D(...arguments)}catch(B){Me("WebGLState:",B)}}function at(){try{i.texImage3D(...arguments)}catch(B){Me("WebGLState:",B)}}function yt(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function Vt(B,ft){d[B]!==ft&&(i.pixelStorei(B,ft),d[B]=ft)}function Tt(B){de.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),de.copy(B))}function bt(B){$t.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),$t.copy(B))}function zt(B,ft){let ot=c.get(ft);ot===void 0&&(ot=new WeakMap,c.set(ft,ot));let wt=ot.get(B);wt===void 0&&(wt=i.getUniformBlockIndex(ft,B.name),ot.set(B,wt))}function Qt(B,ft){const wt=c.get(ft).get(B);l.get(ft)!==wt&&(i.uniformBlockBinding(ft,wt,B.__bindingPointIndex),l.set(ft,wt))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,et={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,_=null,w=null,v=null,S=null,A=null,R=null,y=new Dt(0,0,0),b=0,C=!1,N=null,U=null,G=null,z=null,V=null,de.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:vt,bindFramebuffer:Kt,drawBuffers:Et,useProgram:Lt,setBlending:ht,setMaterial:pt,setFlipSided:mt,setCullFace:gt,setLineWidth:Yt,setPolygonOffset:Zt,setScissorTest:te,activeTexture:se,bindTexture:k,unbindTexture:me,compressedTexImage2D:Wt,compressedTexImage3D:I,texImage2D:it,texImage3D:at,pixelStorei:Vt,getParameter:yt,updateUBOMapping:zt,uniformBlockBinding:Qt,texStorage2D:xt,texStorage3D:_t,texSubImage2D:M,texSubImage3D:W,compressedTexSubImage2D:Z,compressedTexSubImage3D:nt,scissor:Tt,viewport:bt,reset:oe}}function Yv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,M){return g?new OffscreenCanvas(I,M):zr("canvas")}function m(I,M,W){let Z=1;const nt=Wt(I);if((nt.width>W||nt.height>W)&&(Z=W/Math.max(nt.width,nt.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const xt=Math.floor(Z*nt.width),_t=Math.floor(Z*nt.height);u===void 0&&(u=x(xt,_t));const it=M?x(xt,_t):u;return it.width=xt,it.height=_t,it.getContext("2d").drawImage(I,0,0,xt,_t),ee("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+xt+"x"+_t+")."),it}else return"data"in I&&ee("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function p(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(I,M,W,Z,nt,xt=!1){if(I!==null){if(i[I]!==void 0)return i[I];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _t;Z&&(_t=t.get("EXT_texture_norm16"),_t||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=M;if(M===i.RED&&(W===i.FLOAT&&(it=i.R32F),W===i.HALF_FLOAT&&(it=i.R16F),W===i.UNSIGNED_BYTE&&(it=i.R8),W===i.UNSIGNED_SHORT&&_t&&(it=_t.R16_EXT),W===i.SHORT&&_t&&(it=_t.R16_SNORM_EXT)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.R8UI),W===i.UNSIGNED_SHORT&&(it=i.R16UI),W===i.UNSIGNED_INT&&(it=i.R32UI),W===i.BYTE&&(it=i.R8I),W===i.SHORT&&(it=i.R16I),W===i.INT&&(it=i.R32I)),M===i.RG&&(W===i.FLOAT&&(it=i.RG32F),W===i.HALF_FLOAT&&(it=i.RG16F),W===i.UNSIGNED_BYTE&&(it=i.RG8),W===i.UNSIGNED_SHORT&&_t&&(it=_t.RG16_EXT),W===i.SHORT&&_t&&(it=_t.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RG8UI),W===i.UNSIGNED_SHORT&&(it=i.RG16UI),W===i.UNSIGNED_INT&&(it=i.RG32UI),W===i.BYTE&&(it=i.RG8I),W===i.SHORT&&(it=i.RG16I),W===i.INT&&(it=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGB8UI),W===i.UNSIGNED_SHORT&&(it=i.RGB16UI),W===i.UNSIGNED_INT&&(it=i.RGB32UI),W===i.BYTE&&(it=i.RGB8I),W===i.SHORT&&(it=i.RGB16I),W===i.INT&&(it=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),W===i.UNSIGNED_INT&&(it=i.RGBA32UI),W===i.BYTE&&(it=i.RGBA8I),W===i.SHORT&&(it=i.RGBA16I),W===i.INT&&(it=i.RGBA32I)),M===i.RGB&&(W===i.UNSIGNED_SHORT&&_t&&(it=_t.RGB16_EXT),W===i.SHORT&&_t&&(it=_t.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),M===i.RGBA){const at=xt?Ko:ve.getTransfer(nt);W===i.FLOAT&&(it=i.RGBA32F),W===i.HALF_FLOAT&&(it=i.RGBA16F),W===i.UNSIGNED_BYTE&&(it=at===Pe?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&_t&&(it=_t.RGBA16_EXT),W===i.SHORT&&_t&&(it=_t.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(I,M){let W;return I?M===null||M===ri||M===kr?W=i.DEPTH24_STENCIL8:M===Wn?W=i.DEPTH32F_STENCIL8:M===Fr&&(W=i.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ri||M===kr?W=i.DEPTH_COMPONENT24:M===Wn?W=i.DEPTH_COMPONENT32F:M===Fr&&(W=i.DEPTH_COMPONENT16),W}function A(I,M){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==on&&I.minFilter!==un?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function R(I){const M=I.target;M.removeEventListener("dispose",R),b(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function y(I){const M=I.target;M.removeEventListener("dispose",y),N(M)}function b(I){const M=n.get(I);if(M.__webglInit===void 0)return;const W=I.source,Z=f.get(W);if(Z){const nt=Z[M.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&C(I),Object.keys(Z).length===0&&f.delete(W)}n.remove(I)}function C(I){const M=n.get(I);i.deleteTexture(M.__webglTexture);const W=I.source,Z=f.get(W);delete Z[M.__cacheKey],o.memory.textures--}function N(I){const M=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let nt=0;nt<M.__webglFramebuffer[Z].length;nt++)i.deleteFramebuffer(M.__webglFramebuffer[Z][nt]);else i.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[Z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=I.textures;for(let Z=0,nt=W.length;Z<nt;Z++){const xt=n.get(W[Z]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(W[Z])}n.remove(I)}let U=0;function G(){U=0}function z(){return U}function V(I){U=I}function tt(){const I=U;return I>=s.maxTextures&&ee("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,I}function Y(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function H(I,M){const W=n.get(I);if(I.isVideoTexture&&k(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){const Z=I.image;if(Z===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(W,I,M);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function O(I,M){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){vt(W,I,M);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function X(I,M){const W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){vt(W,I,M);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function et(I,M){const W=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&W.__version!==I.version){Kt(W,I,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}const dt={[Vo]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[ll]:i.MIRRORED_REPEAT},At={[on]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},de={[ff]:i.NEVER,[vf]:i.ALWAYS,[pf]:i.LESS,[mc]:i.LEQUAL,[mf]:i.EQUAL,[gc]:i.GEQUAL,[gf]:i.GREATER,[xf]:i.NOTEQUAL};function $t(I,M){if(M.type===Wn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===un||M.magFilter===pa||M.magFilter===Qr||M.magFilter===Ji||M.minFilter===un||M.minFilter===pa||M.minFilter===Qr||M.minFilter===Ji)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,dt[M.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,dt[M.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,dt[M.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,At[M.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,At[M.minFilter]),M.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,de[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===on||M.minFilter!==Qr&&M.minFilter!==Ji||M.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function re(I,M){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",R));const Z=M.source;let nt=f.get(Z);nt===void 0&&(nt={},f.set(Z,nt));const xt=Y(M);if(xt!==I.__cacheKey){nt[xt]===void 0&&(nt[xt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),nt[xt].usedTimes++;const _t=nt[I.__cacheKey];_t!==void 0&&(nt[I.__cacheKey].usedTimes--,_t.usedTimes===0&&C(M)),I.__cacheKey=xt,I.__webglTexture=nt[xt].texture}return W}function Q(I,M,W){return Math.floor(Math.floor(I/W)/M)}function rt(I,M,W,Z){const xt=I.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,W,Z,M.data);else{xt.sort((Vt,Tt)=>Vt.start-Tt.start);let _t=0;for(let Vt=1;Vt<xt.length;Vt++){const Tt=xt[_t],bt=xt[Vt],zt=Tt.start+Tt.count,Qt=Q(bt.start,M.width,4),oe=Q(Tt.start,M.width,4);bt.start<=zt+1&&Qt===oe&&Q(bt.start+bt.count-1,M.width,4)===Qt?Tt.count=Math.max(Tt.count,bt.start+bt.count-Tt.start):(++_t,xt[_t]=bt)}xt.length=_t+1;const it=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Vt=0,Tt=xt.length;Vt<Tt;Vt++){const bt=xt[Vt],zt=Math.floor(bt.start/4),Qt=Math.ceil(bt.count/4),oe=zt%M.width,B=Math.floor(zt/M.width),ft=Qt,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,oe,B,ft,ot,W,Z,M.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function vt(I,M,W){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);const nt=re(I,M),xt=M.source;e.bindTexture(Z,I.__webglTexture,i.TEXTURE0+W);const _t=n.get(xt);if(xt.version!==_t.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ot=ve.getPrimaries(ve.workingColorSpace),wt=M.colorSpace===Ii?null:ve.getPrimaries(M.colorSpace),Pt=M.colorSpace===Ii||ot===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let at=m(M.image,!1,s.maxTextureSize);at=me(M,at);const yt=r.convert(M.format,M.colorSpace),Vt=r.convert(M.type);let Tt=v(M.internalFormat,yt,Vt,M.normalized,M.colorSpace,M.isVideoTexture);$t(Z,M);let bt;const zt=M.mipmaps,Qt=M.isVideoTexture!==!0,oe=_t.__version===void 0||nt===!0,B=xt.dataReady,ft=A(M,at);if(M.isDepthTexture)Tt=S(M.format===$i,M.type),oe&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,Tt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Tt,at.width,at.height,0,yt,Vt,null));else if(M.isDataTexture)if(zt.length>0){Qt&&oe&&e.texStorage2D(i.TEXTURE_2D,ft,Tt,zt[0].width,zt[0].height);for(let ot=0,wt=zt.length;ot<wt;ot++)bt=zt[ot],Qt?B&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt.width,bt.height,yt,Vt,bt.data):e.texImage2D(i.TEXTURE_2D,ot,Tt,bt.width,bt.height,0,yt,Vt,bt.data);M.generateMipmaps=!1}else Qt?(oe&&e.texStorage2D(i.TEXTURE_2D,ft,Tt,at.width,at.height),B&&rt(M,at,yt,Vt)):e.texImage2D(i.TEXTURE_2D,0,Tt,at.width,at.height,0,yt,Vt,at.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Tt,zt[0].width,zt[0].height,at.depth);for(let ot=0,wt=zt.length;ot<wt;ot++)if(bt=zt[ot],M.format!==Xn)if(yt!==null)if(Qt){if(B)if(M.layerUpdates.size>0){const Pt=Fh(bt.width,bt.height,M.format,M.type);for(const ct of M.layerUpdates){const Xt=bt.data.subarray(ct*Pt/bt.data.BYTES_PER_ELEMENT,(ct+1)*Pt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,ct,bt.width,bt.height,1,yt,Xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,bt.width,bt.height,at.depth,yt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Tt,bt.width,bt.height,at.depth,0,bt.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,bt.width,bt.height,at.depth,yt,Vt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Tt,bt.width,bt.height,at.depth,0,yt,Vt,bt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Qt&&oe&&e.texStorage2D(i.TEXTURE_2D,ft,Tt,zt[0].width,zt[0].height);for(let ot=0,wt=zt.length;ot<wt;ot++)bt=zt[ot],M.format!==Xn?yt!==null?Qt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,bt.width,bt.height,yt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Tt,bt.width,bt.height,0,bt.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?B&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt.width,bt.height,yt,Vt,bt.data):e.texImage2D(i.TEXTURE_2D,ot,Tt,bt.width,bt.height,0,yt,Vt,bt.data)}else if(M.isDataArrayTexture)if(Qt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Tt,at.width,at.height,at.depth),B)if(M.layerUpdates.size>0){const ot=Fh(at.width,at.height,M.format,M.type);for(const wt of M.layerUpdates){const Pt=at.data.subarray(wt*ot/at.data.BYTES_PER_ELEMENT,(wt+1)*ot/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,at.width,at.height,1,yt,Vt,Pt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,yt,Vt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,at.width,at.height,at.depth,0,yt,Vt,at.data);else if(M.isData3DTexture)Qt?(oe&&e.texStorage3D(i.TEXTURE_3D,ft,Tt,at.width,at.height,at.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,yt,Vt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,at.width,at.height,at.depth,0,yt,Vt,at.data);else if(M.isFramebufferTexture){if(oe)if(Qt)e.texStorage2D(i.TEXTURE_2D,ft,Tt,at.width,at.height);else{let ot=at.width,wt=at.height;for(let Pt=0;Pt<ft;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Tt,ot,wt,0,yt,Vt,null),ot>>=1,wt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),at.parentNode!==ot){ot.appendChild(at),d.add(M),ot.onpaint=wt=>{const Pt=wt.changedElements;for(const ct of d)Pt.includes(ct.image)&&(ct.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{const Pt=i.RGBA,ct=i.RGBA,Xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,ct,Xt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Qt&&oe){const ot=Wt(zt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Tt,ot.width,ot.height)}for(let ot=0,wt=zt.length;ot<wt;ot++)bt=zt[ot],Qt?B&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,yt,Vt,bt):e.texImage2D(i.TEXTURE_2D,ot,Tt,yt,Vt,bt);M.generateMipmaps=!1}else if(Qt){if(oe){const ot=Wt(at);e.texStorage2D(i.TEXTURE_2D,ft,Tt,ot.width,ot.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Vt,at)}else e.texImage2D(i.TEXTURE_2D,0,Tt,yt,Vt,at);p(M)&&_(Z),_t.__version=xt.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Kt(I,M,W){if(M.image.length!==6)return;const Z=re(I,M),nt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);const xt=n.get(nt);if(nt.version!==xt.__version||Z===!0){e.activeTexture(i.TEXTURE0+W);const _t=ve.getPrimaries(ve.workingColorSpace),it=M.colorSpace===Ii?null:ve.getPrimaries(M.colorSpace),at=M.colorSpace===Ii||_t===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const yt=M.isCompressedTexture||M.image[0].isCompressedTexture,Vt=M.image[0]&&M.image[0].isDataTexture,Tt=[];for(let ct=0;ct<6;ct++)!yt&&!Vt?Tt[ct]=m(M.image[ct],!0,s.maxCubemapSize):Tt[ct]=Vt?M.image[ct].image:M.image[ct],Tt[ct]=me(M,Tt[ct]);const bt=Tt[0],zt=r.convert(M.format,M.colorSpace),Qt=r.convert(M.type),oe=v(M.internalFormat,zt,Qt,M.normalized,M.colorSpace),B=M.isVideoTexture!==!0,ft=xt.__version===void 0||Z===!0,ot=nt.dataReady;let wt=A(M,bt);$t(i.TEXTURE_CUBE_MAP,M);let Pt;if(yt){B&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,oe,bt.width,bt.height);for(let ct=0;ct<6;ct++){Pt=Tt[ct].mipmaps;for(let Xt=0;Xt<Pt.length;Xt++){const Ht=Pt[Xt];M.format!==Xn?zt!==null?B?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt,0,0,Ht.width,Ht.height,zt,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt,oe,Ht.width,Ht.height,0,Ht.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt,0,0,Ht.width,Ht.height,zt,Qt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt,oe,Ht.width,Ht.height,0,zt,Qt,Ht.data)}}}else{if(Pt=M.mipmaps,B&&ft){Pt.length>0&&wt++;const ct=Wt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,oe,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Vt){B?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Tt[ct].width,Tt[ct].height,zt,Qt,Tt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,oe,Tt[ct].width,Tt[ct].height,0,zt,Qt,Tt[ct].data);for(let Xt=0;Xt<Pt.length;Xt++){const Ae=Pt[Xt].image[ct].image;B?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt+1,0,0,Ae.width,Ae.height,zt,Qt,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt+1,oe,Ae.width,Ae.height,0,zt,Qt,Ae.data)}}else{B?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,zt,Qt,Tt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,oe,zt,Qt,Tt[ct]);for(let Xt=0;Xt<Pt.length;Xt++){const Ht=Pt[Xt];B?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt+1,0,0,zt,Qt,Ht.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt+1,oe,zt,Qt,Ht.image[ct])}}}p(M)&&_(i.TEXTURE_CUBE_MAP),xt.__version=nt.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Et(I,M,W,Z,nt,xt){const _t=r.convert(W.format,W.colorSpace),it=r.convert(W.type),at=v(W.internalFormat,_t,it,W.normalized,W.colorSpace),yt=n.get(M),Vt=n.get(W);if(Vt.__renderTarget=M,!yt.__hasExternalTextures){const Tt=Math.max(1,M.width>>xt),bt=Math.max(1,M.height>>xt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,xt,at,Tt,bt,M.depth,0,_t,it,null):e.texImage2D(nt,xt,at,Tt,bt,0,_t,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),se(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,nt,Vt.__webglTexture,0,te(M)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,nt,Vt.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(I,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),M.depthBuffer){const Z=M.depthTexture,nt=Z&&Z.isDepthTexture?Z.type:null,xt=S(M.stencilBuffer,nt),_t=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;se(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te(M),xt,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,te(M),xt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,xt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,I)}else{const Z=M.textures;for(let nt=0;nt<Z.length;nt++){const xt=Z[nt],_t=r.convert(xt.format,xt.colorSpace),it=r.convert(xt.type),at=v(xt.internalFormat,_t,it,xt.normalized,xt.colorSpace);se(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te(M),at,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,te(M),at,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,at,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(I,M,W){const Z=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const nt=n.get(M.depthTexture);if(nt.__renderTarget=M,(!nt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),nt.__webglTexture===void 0){nt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),$t(i.TEXTURE_CUBE_MAP,M.depthTexture);const yt=r.convert(M.depthTexture.format),Vt=r.convert(M.depthTexture.type);let Tt;M.depthTexture.format===Mi?Tt=i.DEPTH_COMPONENT24:M.depthTexture.format===$i&&(Tt=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,Tt,M.width,M.height,0,yt,Vt,null)}}else H(M.depthTexture,0);const xt=nt.__webglTexture,_t=te(M),it=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,at=M.depthTexture.format===$i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Mi)se(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,xt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,xt,0);else if(M.depthTexture.format===$i)se(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,xt,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,at,it,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(I){const M=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const nt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",nt)};Z.addEventListener("dispose",nt),M.__depthDisposeCallback=nt}M.__boundDepthTexture=Z}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let Z=0;Z<6;Z++)he(M.__webglFramebuffer[Z],I,Z);else{const Z=I.texture.mipmaps;Z&&Z.length>0?he(M.__webglFramebuffer[0],I,0):he(M.__webglFramebuffer,I,0)}else if(W){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=i.createRenderbuffer(),Lt(M.__webglDepthbuffer[Z],I,!1);else{const nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=M.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,xt)}}else{const Z=I.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Lt(M.__webglDepthbuffer,I,!1);else{const nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,xt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(I,M,W){const Z=n.get(I);M!==void 0&&Et(Z.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&st(I)}function pt(I){const M=I.texture,W=n.get(I),Z=n.get(M);I.addEventListener("dispose",y);const nt=I.textures,xt=I.isWebGLCubeRenderTarget===!0,_t=nt.length>1;if(_t||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,o.memory.textures++),xt){W.__webglFramebuffer=[];for(let it=0;it<6;it++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[it]=[];for(let at=0;at<M.mipmaps.length;at++)W.__webglFramebuffer[it][at]=i.createFramebuffer()}else W.__webglFramebuffer[it]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let it=0;it<M.mipmaps.length;it++)W.__webglFramebuffer[it]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(_t)for(let it=0,at=nt.length;it<at;it++){const yt=n.get(nt[it]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&se(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let it=0;it<nt.length;it++){const at=nt[it];W.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[it]);const yt=r.convert(at.format,at.colorSpace),Vt=r.convert(at.type),Tt=v(at.internalFormat,yt,Vt,at.normalized,at.colorSpace,I.isXRRenderTarget===!0),bt=te(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,Tt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,W.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(W.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),$t(i.TEXTURE_CUBE_MAP,M);for(let it=0;it<6;it++)if(M.mipmaps&&M.mipmaps.length>0)for(let at=0;at<M.mipmaps.length;at++)Et(W.__webglFramebuffer[it][at],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,at);else Et(W.__webglFramebuffer[it],I,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(M)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let it=0,at=nt.length;it<at;it++){const yt=nt[it],Vt=n.get(yt);let Tt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Tt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,Vt.__webglTexture),$t(Tt,yt),Et(W.__webglFramebuffer,I,yt,i.COLOR_ATTACHMENT0+it,Tt,0),p(yt)&&_(Tt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(it=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,Z.__webglTexture),$t(it,M),M.mipmaps&&M.mipmaps.length>0)for(let at=0;at<M.mipmaps.length;at++)Et(W.__webglFramebuffer[at],I,M,i.COLOR_ATTACHMENT0,it,at);else Et(W.__webglFramebuffer,I,M,i.COLOR_ATTACHMENT0,it,0);p(M)&&_(it),e.unbindTexture()}I.depthBuffer&&st(I)}function mt(I){const M=I.textures;for(let W=0,Z=M.length;W<Z;W++){const nt=M[W];if(p(nt)){const xt=w(I),_t=n.get(nt).__webglTexture;e.bindTexture(xt,_t),_(xt),e.unbindTexture()}}}const gt=[],Yt=[];function Zt(I){if(I.samples>0){if(se(I)===!1){const M=I.textures,W=I.width,Z=I.height;let nt=i.COLOR_BUFFER_BIT;const xt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(I),it=M.length>1;if(it)for(let yt=0;yt<M.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);const at=I.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let yt=0;yt<M.length;yt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[yt]);const Vt=n.get(M[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,W,Z,0,0,W,Z,nt,i.NEAREST),l===!0&&(gt.length=0,Yt.length=0,gt.push(i.COLOR_ATTACHMENT0+yt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(gt.push(xt),Yt.push(xt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Yt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let yt=0;yt<M.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[yt]);const Vt=n.get(M[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const M=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function te(I){return Math.min(s.maxSamples,I.samples)}function se(I){const M=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function k(I){const M=o.render.frame;h.get(I)!==M&&(h.set(I,M),I.update())}function me(I,M){const W=I.colorSpace,Z=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==Yo&&W!==Ii&&(ve.getTransfer(W)===Pe?(Z!==Xn||nt!==Tn)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Me("WebGLTextures: Unsupported texture color space:",W)),M}function Wt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=tt,this.resetTextureUnits=G,this.getTextureUnits=z,this.setTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=O,this.setTexture3D=X,this.setTextureCube=et,this.rebindTextures=ht,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Kv(i,t){function e(n,s=Ii){let r;const o=ve.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nu)return i.BYTE;if(n===Uu)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===Ou)return i.ALPHA;if(n===zu)return i.RGB;if(n===Xn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===is)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===Lo||n===No||n===Uo||n===Fo)if(o===Pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===hl||n===ul||n===dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fl||n===pl||n===ml||n===gl||n===xl||n===Wo||n===vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fl||n===pl)return o===Pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ml)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===gl)return r.COMPRESSED_R11_EAC;if(n===xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wo)return r.COMPRESSED_RG11_EAC;if(n===vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_l||n===yl||n===Ml||n===wl||n===bl||n===Sl||n===El||n===Tl||n===Al||n===Pl||n===Rl||n===Cl||n===Il||n===Dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_l)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ml)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Al)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return o===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ll||n===Nl||n===Ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ll)return o===Pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fl||n===kl||n===Xo||n===Ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jv=`
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

}`;class $v{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new $u(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:Zv,fragmentShader:Jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qv extends rs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new $v,p={},_=e.getContextAttributes();let w=null,v=null;const S=[],A=[],R=new ut;let y=null,b=null;const C=new _n;C.viewport=new ke;const N=new _n;N.viewport=new ke;const U=[C,N],G=new r0;let z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let rt=S[Q];return rt===void 0&&(rt=new Ma,S[Q]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Q){let rt=S[Q];return rt===void 0&&(rt=new Ma,S[Q]=rt),rt.getGripSpace()},this.getHand=function(Q){let rt=S[Q];return rt===void 0&&(rt=new Ma,S[Q]=rt),rt.getHandSpace()};function tt(Q){const rt=A.indexOf(Q.inputSource);if(rt===-1)return;const vt=S[rt];vt!==void 0&&(vt.update(Q.inputSource,Q.frame,c||o),vt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",H);for(let Q=0;Q<S.length;Q++){const rt=A[Q];rt!==null&&(A[Q]=null,S[Q].disconnect(rt))}z=null,V=null,m.reset();for(const Q in p)delete p[Q];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,v=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),b!==null){const Q=b.camera;Q.fov=b.fov,Q.zoom=b.zoom,Q.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Kt=null,Et=null;_.depth&&(Et=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=_.stencil?$i:Mi,Kt=_.stencil?kr:ri);const Lt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Rn(u.textureWidth,u.textureHeight,{format:Xn,type:Tn,depthTexture:new Gr(u.textureWidth,u.textureHeight,Kt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const vt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Rn(f.framebufferWidth,f.framebufferHeight,{format:Xn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(Q){for(let rt=0;rt<Q.removed.length;rt++){const vt=Q.removed[rt],Kt=A.indexOf(vt);Kt>=0&&(A[Kt]=null,S[Kt].disconnect(vt))}for(let rt=0;rt<Q.added.length;rt++){const vt=Q.added[rt];let Kt=A.indexOf(vt);if(Kt===-1){for(let Lt=0;Lt<S.length;Lt++)if(Lt>=A.length){A.push(vt),Kt=Lt;break}else if(A[Lt]===null){A[Lt]=vt,Kt=Lt;break}if(Kt===-1)break}const Et=S[Kt];Et&&Et.connect(vt)}}const O=new T,X=new T;function et(Q,rt,vt){O.setFromMatrixPosition(rt.matrixWorld),X.setFromMatrixPosition(vt.matrixWorld);const Kt=O.distanceTo(X),Et=rt.projectionMatrix.elements,Lt=vt.projectionMatrix.elements,he=Et[14]/(Et[10]-1),st=Et[14]/(Et[10]+1),ht=(Et[9]+1)/Et[5],pt=(Et[9]-1)/Et[5],mt=(Et[8]-1)/Et[0],gt=(Lt[8]+1)/Lt[0],Yt=he*mt,Zt=he*gt,te=Kt/(-mt+gt),se=te*-mt;if(rt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(se),Q.translateZ(te),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Et[10]===-1)Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const k=he+te,me=st+te,Wt=Yt-se,I=Zt+(Kt-se),M=ht*st/me*k,W=pt*st/me*k;Q.projectionMatrix.makePerspective(Wt,I,M,W,k,me),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function dt(Q,rt){rt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(rt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let rt=Q.near,vt=Q.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),G.near=N.near=C.near=rt,G.far=N.far=C.far=vt,(z!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),z=G.near,V=G.far),G.layers.mask=Q.layers.mask|6,C.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;const Kt=Q.parent,Et=G.cameras;dt(G,Kt);for(let Lt=0;Lt<Et.length;Lt++)dt(Et[Lt],Kt);Et.length===2?et(G,C,N):G.projectionMatrix.copy(C.projectionMatrix),b===null&&Q.isPerspectiveCamera&&(b={camera:Q,fov:Q.fov,zoom:Q.zoom}),At(Q,G,Kt)};function At(Q,rt,vt){vt===null?Q.matrix.copy(rt.matrixWorld):(Q.matrix.copy(vt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(rt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(rt.projectionMatrix),Q.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Br*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Q){return p[Q]};let de=null;function $t(Q,rt){if(h=rt.getViewerPose(c||o),g=rt,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Kt=!1;vt.length!==G.cameras.length&&(G.cameras.length=0,Kt=!0);for(let st=0;st<vt.length;st++){const ht=vt[st];let pt=null;if(f!==null)pt=f.getViewport(ht);else{const gt=d.getViewSubImage(u,ht);pt=gt.viewport,st===0&&(t.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(v))}let mt=U[st];mt===void 0&&(mt=new _n,mt.layers.enable(st),mt.viewport=new ke,U[st]=mt),mt.matrix.fromArray(ht.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(ht.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(pt.x,pt.y,pt.width,pt.height),st===0&&(G.matrix.copy(mt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Kt===!0&&G.cameras.push(mt)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const st=d.getDepthInformation(vt[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let st=0;st<vt.length;st++){const ht=vt[st].camera;if(ht){let pt=p[ht];pt||(pt=new $u,p[ht]=pt);const mt=d.getCameraImage(ht);pt.sourceTexture=mt}}}}for(let vt=0;vt<S.length;vt++){const Kt=A[vt],Et=S[vt];Kt!==null&&Et!==void 0&&Et.update(Kt,rt,c||o)}de&&de(Q,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const re=new ud;re.setAnimationLoop($t),this.setAnimationLoop=function(Q){de=Q},this.dispose=function(){}}}const jv=new Ee,vd=new le;vd.set(-1,0,0,0,1,0,0,0,1);function t_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,od(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),w=_.envMap,v=_.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function e_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const A=S.program;n.uniformBlockBinding(v,A)}function c(v,S){let A=s[v.id];A===void 0&&(m(v),A=h(v),s[v.id]=A,v.addEventListener("dispose",_));const R=S.program;n.updateUBOMapping(v,R);const y=t.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function h(v){const S=d();v.__bindingPointIndex=S;const A=i.createBuffer(),R=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,A),A}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const S=s[v.id],A=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,b=A.length;y<b;y++){const C=A[y];if(Array.isArray(C))for(let N=0,U=C.length;N<U;N++)f(C[N],y,N,R);else f(C,y,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,S,A,R){if(x(v,S,A,R)===!0){const y=v.__offset,b=v.value;if(Array.isArray(b)){let C=0;for(let N=0;N<b.length;N++){const U=b[N],G=p(U);g(U,v.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function g(v,S,A){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,A)}function x(v,S,A,R){const y=v.value,b=S+"_"+A;if(R[b]===void 0)return typeof y=="number"||typeof y=="boolean"?R[b]=y:ArrayBuffer.isView(y)?R[b]=y.slice():R[b]=y.clone(),!0;{const C=R[b];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return R[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function m(v){const S=v.uniforms;let A=0;const R=16;for(let b=0,C=S.length;b<C;b++){const N=Array.isArray(S[b])?S[b]:[S[b]];for(let U=0,G=N.length;U<G;U++){const z=N[U],V=Array.isArray(z.value)?z.value:[z.value];for(let tt=0,Y=V.length;tt<Y;tt++){const H=V[tt],O=p(H),X=A%R,et=X%O.boundary,dt=X+et;A+=et,dt!==0&&R-dt<O.storage&&(A+=R-dt),z.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=A,A+=O.storage}}}const y=A%R;return y>0&&(A+=R-y),v.__size=A,v.__cache={},this}function p(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",v),S}function _(v){const S=v.target;S.removeEventListener("dispose",_);const A=o.indexOf(S.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function w(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}const n_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function i_(){return jn===null&&(jn=new qu(n_,16,16,is,Yn),jn.name="DFG_LUT",jn.minFilter=un,jn.magFilter=un,jn.wrapS=An,jn.wrapT=An,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class s_{constructor(t={}){const{canvas:e=Mf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Tn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const x=f,m=new Set([pc,fc,dc]),p=new Set([Tn,ri,Fr,kr,cc,hc]),_=new Uint32Array(4),w=new Int32Array(4),v=new T;let S=null,A=null;const R=[],y=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,U=null,G=null,z=null,V=null;this._outputColorSpace=rn;let tt=0,Y=0,H=null,O=-1,X=null;const et=new ke,dt=new ke;let At=null;const de=new Dt(0);let $t=0,re=e.width,Q=e.height,rt=1,vt=null,Kt=null;const Et=new ke(0,0,re,Q),Lt=new ke(0,0,re,Q);let he=!1;const st=new yc;let ht=!1,pt=!1;const mt=new Ee,gt=new T,Yt=new ke,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function se(){return H===null?rt:1}let k=n;function me(E,F){return e.getContext(E,F)}let Wt,I,M,W,Z,nt,xt,_t,it,at,yt,Vt,Tt,bt,zt,Qt,oe,B,ft,ot,wt,Pt,ct;try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rc}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),k===null){const F="webgl2";if(k=me(F,E),k===null)throw me(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(E){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),Me("WebGLRenderer: "+E.message),E}function Xt(){Wt=new ix(k),Wt.init(),wt=new Kv(k,Wt),I=new Yg(k,Wt,t,wt),M=new qv(k,Wt),I.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),G=k.createFramebuffer(),z=k.createFramebuffer(),V=k.createFramebuffer(),W=new ox(k),Z=new Dv,nt=new Yv(k,Wt,M,Z,I,wt,W),xt=new nx(C),_t=new l0(k),Pt=new Xg(k,_t),it=new sx(k,_t,W,Pt),at=new lx(k,it,_t,Pt,W),B=new ax(k,I,nt),zt=new Kg(Z),yt=new Iv(C,xt,Wt,I,Pt,zt),Vt=new t_(C,Z),Tt=new Nv,bt=new Bv(Wt),oe=new Wg(C,xt,M,at,g,l),Qt=new Xv(C,at,I),ct=new e_(k,W,I,M),ft=new qg(k,Wt,W),ot=new rx(k,Wt,W),W.programs=yt.programs,C.capabilities=I,C.extensions=Wt,C.properties=Z,C.renderLists=Tt,C.shadowMap=Qt,C.state=M,C.info=W}x!==Tn&&(b=new hx(x,e.width,e.height,a,s,r));const Ht=new Qv(C,k);this.xr=Ht,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=Wt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Wt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(E){E!==void 0&&(rt=E,this.setSize(re,Q,!1))},this.getSize=function(E){return E.set(re,Q)},this.setSize=function(E,F,J=!0){if(Ht.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}re=E,Q=F,e.width=Math.floor(E*rt),e.height=Math.floor(F*rt),J===!0&&(e.style.width=E+"px",e.style.height=F+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(re*rt,Q*rt).floor()},this.setDrawingBufferSize=function(E,F,J){re=E,Q=F,rt=J,e.width=Math.floor(E*J),e.height=Math.floor(F*J),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(x===Tn){Me("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(et)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,F,J,q){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,F,J,q),M.viewport(et.copy(Et).multiplyScalar(rt).round())},this.getScissor=function(E){return E.copy(Lt)},this.setScissor=function(E,F,J,q){E.isVector4?Lt.set(E.x,E.y,E.z,E.w):Lt.set(E,F,J,q),M.scissor(dt.copy(Lt).multiplyScalar(rt).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(E){M.setScissorTest(he=E)},this.setOpaqueSort=function(E){vt=E},this.setTransparentSort=function(E){Kt=E},this.getClearColor=function(E){return E.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,J=!0){let q=0;if(E){let K=!1;if(H!==null){const Rt=H.texture.format;K=m.has(Rt)}if(K){const Rt=H.texture.type,Ft=p.has(Rt),St=oe.getClearColor(),Ot=oe.getClearAlpha(),Gt=St.r,ae=St.g,ue=St.b;Ft?(_[0]=Gt,_[1]=ae,_[2]=ue,_[3]=Ot,k.clearBufferuiv(k.COLOR,0,_)):(w[0]=Gt,w[1]=ae,w[2]=ue,w[3]=Ot,k.clearBufferiv(k.COLOR,0,w))}else q|=k.COLOR_BUFFER_BIT}F&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),oe.dispose(),Tt.dispose(),bt.dispose(),Z.dispose(),xt.dispose(),at.dispose(),Pt.dispose(),ct.dispose(),yt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",$s),Ht.removeEventListener("sessionend",cs),kn.stop()};function Ae(E){E.preventDefault(),Kc("WebGLRenderer: Context Lost."),N=!0}function ge(){Kc("WebGLRenderer: Context Restored."),N=!1;const E=W.autoReset,F=Qt.enabled,J=Qt.autoUpdate,q=Qt.needsUpdate,K=Qt.type;Xt(),W.autoReset=E,Qt.enabled=F,Qt.autoUpdate=J,Qt.needsUpdate=q,Qt.type=K}function Ce(E){Me("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function vn(E){const F=E.target;F.removeEventListener("dispose",vn),Jn(F)}function Jn(E){ha(E),Z.remove(E)}function ha(E){const F=Z.get(E).programs;F!==void 0&&(F.forEach(function(J){yt.releaseProgram(J)}),E.isShaderMaterial&&yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,J,q,K,Rt){F===null&&(F=Zt);const Ft=K.isMesh&&K.matrixWorld.determinantAffine()<0,St=hs(E,F,J,q,K);M.setMaterial(q,Ft);let Ot=J.index,Gt=1;if(q.wireframe===!0){if(Ot=it.getWireframeAttribute(J),Ot===void 0)return;Gt=2}const ae=J.drawRange,ue=J.attributes.position;let Bt=ae.start*Gt,ye=(ae.start+ae.count)*Gt;Rt!==null&&(Bt=Math.max(Bt,Rt.start*Gt),ye=Math.min(ye,(Rt.start+Rt.count)*Gt)),Ot!==null?(Bt=Math.max(Bt,0),ye=Math.min(ye,Ot.count)):ue!=null&&(Bt=Math.max(Bt,0),ye=Math.min(ye,ue.count));const Ie=ye-Bt;if(Ie<0||Ie===1/0)return;Pt.setup(K,q,St,J,Ot);let De,Te=ft;if(Ot!==null&&(De=_t.get(Ot),Te=ot,Te.setIndex(De)),K.isMesh)q.wireframe===!0?(M.setLineWidth(q.wireframeLinewidth*se()),Te.setMode(k.LINES)):Te.setMode(k.TRIANGLES);else if(K.isLine){let He=q.linewidth;He===void 0&&(He=1),M.setLineWidth(He*se()),K.isLineSegments?Te.setMode(k.LINES):K.isLineLoop?Te.setMode(k.LINE_LOOP):Te.setMode(k.LINE_STRIP)}else K.isPoints?Te.setMode(k.POINTS):K.isSprite&&Te.setMode(k.TRIANGLES);if(K.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))Te.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const He=K._multiDrawStarts,Nt=K._multiDrawCounts,je=K._multiDrawCount,xe=Ot?_t.get(Ot).bytesPerElement:1,dn=Z.get(q).currentProgram.getUniforms();for(let wn=0;wn<je;wn++)dn.setValue(k,"_gl_DrawID",wn),Te.render(He[wn]/xe,Nt[wn])}else if(K.isInstancedMesh)Te.renderInstances(Bt,Ie,K.count);else if(J.isInstancedBufferGeometry){const He=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Nt=Math.min(J.instanceCount,He);Te.renderInstances(Bt,Ie,Nt)}else Te.render(Bt,Ie)};function ls(E,F,J,q){U!==null&&E.isNodeMaterial&&U.setObject(q,E),ht===!0&&zt.setState(E,J,!1),E.transparent===!0&&E.side===Fe&&E.forceSinglePass===!1?(E.side=xn,E.needsUpdate=!0,Hi(E,F,q),E.side=Ni,E.needsUpdate=!0,Hi(E,F,q),E.side=Fe):Hi(E,F,q)}this.compile=function(E,F,J=null){J===null&&(J=E),U!==null&&U.renderStart(E,F,J),A=bt.get(J),A.init(F),y.push(A),J.traverseVisible(function(K){K.isLight&&K.layers.test(F.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),E!==J&&E.traverseVisible(function(K){K.isLight&&K.layers.test(F.layers)&&(A.pushLight(K),K.castShadow&&A.pushShadow(K))}),A.setupLights(),U!==null&&U.updateLights(A.state.lightsArray),pt=this.localClippingEnabled,ht=zt.init(this.clippingPlanes,pt),ht===!0&&zt.setGlobalState(this.clippingPlanes,F),U!==null&&Qt.render(A.state.shadowsArray,J,F);const q=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Rt=K.material;if(Rt)if(Array.isArray(Rt))for(let Ft=0;Ft<Rt.length;Ft++){const St=Rt[Ft];ls(St,J,F,K),q.add(St)}else ls(Rt,J,F,K),q.add(Rt)}),A=y.pop(),U!==null&&U.renderEnd(),q},this.compileAsync=function(E,F,J=null){const q=this.compile(E,F,J);return new Promise(K=>{function Rt(){if(q.forEach(function(Ft){const Ot=Z.get(Ft).currentProgram;(Ot===void 0||Ot.isReady())&&q.delete(Ft)}),q.size===0){K(E);return}setTimeout(Rt,10)}Wt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Oi=null;function Jr(E){Oi&&Oi(E)}function $s(){kn.stop()}function cs(){kn.start()}const kn=new ud;kn.setAnimationLoop(Jr),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(E){Oi=E,Ht.setAnimationLoop(E),E===null?kn.stop():kn.start()},Ht.addEventListener("sessionstart",$s),Ht.addEventListener("sessionend",cs),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(E,F);const J=Ht.enabled===!0&&Ht.isPresenting===!0,q=b!==null&&(H===null||J)&&b.begin(C,H);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(F),F=Ht.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,F,H),A=bt.get(E,y.length),A.init(F),A.state.textureUnits=nt.getTextureUnits(),y.push(A),mt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),st.setFromProjectionMatrix(mt,ni,F.reversedDepth),pt=this.localClippingEnabled,ht=zt.init(this.clippingPlanes,pt),S=Tt.get(E,R.length),S.init(),R.push(S),Ht.enabled===!0&&Ht.isPresenting===!0){const Ft=C.xr.getDepthSensingMesh();Ft!==null&&zi(Ft,F,-1/0,C.sortObjects)}zi(E,F,0,C.sortObjects),S.finish(),U!==null&&U.updateLights(A.state.lightsArray),C.sortObjects===!0&&S.sort(vt,Kt),te=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,te&&oe.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&zt.beginShadows();const K=A.state.shadowsArray;if(Qt.render(K,E,F),ht===!0&&zt.endShadows(),(q&&b.hasRenderPass())===!1){const Ft=S.opaque,St=S.transmissive;if(A.setupLights(),F.isArrayCamera){const Ot=F.cameras;if(St.length>0)for(let Gt=0,ae=Ot.length;Gt<ae;Gt++){const ue=Ot[Gt];js(Ft,St,E,ue)}te&&oe.render(E);for(let Gt=0,ae=Ot.length;Gt<ae;Gt++){const ue=Ot[Gt];Qs(S,E,ue,ue.viewport)}}else St.length>0&&js(Ft,St,E,F),te&&oe.render(E),Qs(S,E,F)}H!==null&&Y===0&&(nt.updateMultisampleRenderTarget(H),nt.updateRenderTargetMipmap(H)),q&&b.end(C),E.isScene===!0&&E.onAfterRender(C,E,F),Pt.resetDefaultState(),O=-1,X=null,y.pop(),y.length>0?(A=y[y.length-1],nt.setTextureUnits(A.state.textureUnits),ht===!0&&zt.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,U!==null&&U.renderEnd()};function zi(E,F,J,q){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)A.pushLightProbeGrid(E);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(st)){q&&Yt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(mt);const Ft=at.update(E),St=E.material;St.visible&&S.push(E,Ft,St,J,Yt.z,null,F)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(st))){const Ft=at.update(E),St=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Yt.copy(E.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Yt.copy(Ft.boundingSphere.center)),Yt.applyMatrix4(E.matrixWorld).applyMatrix4(mt)),Array.isArray(St)){const Ot=Ft.groups;for(let Gt=0,ae=Ot.length;Gt<ae;Gt++){const ue=Ot[Gt],Bt=St[ue.materialIndex];Bt&&Bt.visible&&S.push(E,Ft,Bt,J,Yt.z,ue,F)}}else St.visible&&S.push(E,Ft,St,J,Yt.z,null,F)}}const Rt=E.children;for(let Ft=0,St=Rt.length;Ft<St;Ft++)zi(Rt[Ft],F,J,q)}function Qs(E,F,J,q){const{opaque:K,transmissive:Rt,transparent:Ft}=E;A.setupLightsView(J),ht===!0&&zt.setGlobalState(C.clippingPlanes,J),q&&M.viewport(et.copy(q)),K.length>0&&Bi(K,F,J),Rt.length>0&&Bi(Rt,F,J),Ft.length>0&&Bi(Ft,F,J),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function js(E,F,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[q.id]===void 0){const Bt=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[q.id]=new Rn(1,1,{generateMipmaps:!0,type:Bt?Yn:Tn,minFilter:Ji,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ve.workingColorSpace})}const Rt=A.state.transmissionRenderTarget[q.id],Ft=q.viewport||et;Rt.setSize(Ft.z*C.transmissionResolutionScale,Ft.w*C.transmissionResolutionScale);const St=C.getRenderTarget(),Ot=C.getActiveCubeFace(),Gt=C.getActiveMipmapLevel();C.setRenderTarget(Rt),C.getClearColor(de),$t=C.getClearAlpha(),$t<1&&C.setClearColor(16777215,.5),C.clear(),te&&oe.render(J);const ae=C.toneMapping;C.toneMapping=si;const ue=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),A.setupLightsView(q),ht===!0&&zt.setGlobalState(C.clippingPlanes,q),Bi(E,J,q),nt.updateMultisampleRenderTarget(Rt),nt.updateRenderTargetMipmap(Rt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ye=0,Ie=F.length;ye<Ie;ye++){const De=F[ye],{object:Te,geometry:He,material:Nt,group:je}=De;if(Nt.side===Fe&&Te.layers.test(q.layers)){const xe=Nt.side;Nt.side=xn,Nt.needsUpdate=!0,Gi(Te,J,q,He,Nt,je),Nt.side=xe,Nt.needsUpdate=!0,Bt=!0}}Bt===!0&&(nt.updateMultisampleRenderTarget(Rt),nt.updateRenderTargetMipmap(Rt))}C.setRenderTarget(St,Ot,Gt),C.setClearColor(de,$t),ue!==void 0&&(q.viewport=ue),C.toneMapping=ae}function Bi(E,F,J){const q=F.isScene===!0?F.overrideMaterial:null;for(let K=0,Rt=E.length;K<Rt;K++){const Ft=E[K],{object:St,geometry:Ot,group:Gt}=Ft;let ae=Ft.material;ae.allowOverride===!0&&q!==null&&(ae=q),St.layers.test(J.layers)&&Gi(St,F,J,Ot,ae,Gt)}}function Gi(E,F,J,q,K,Rt){U!==null&&K.isNodeMaterial&&U.setObject(E,K),E.onBeforeRender(C,F,J,q,K,Rt),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(C,F,J,q,E,Rt),K.transparent===!0&&K.side===Fe&&K.forceSinglePass===!1?(K.side=xn,K.needsUpdate=!0,C.renderBufferDirect(J,F,q,K,E,Rt),K.side=Ni,K.needsUpdate=!0,C.renderBufferDirect(J,F,q,K,E,Rt),K.side=Fe):C.renderBufferDirect(J,F,q,K,E,Rt),E.onAfterRender(C,F,J,q,K,Rt)}function Hi(E,F,J){F.isScene!==!0&&(F=Zt);const q=Z.get(E),K=A.state.lights,Rt=A.state.shadowsArray,Ft=K.state.version,St=yt.getParameters(E,K.state,Rt,F,J,A.state.lightProbeGridArray),Ot=yt.getProgramCacheKey(St);let Gt=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,q.fog=F.fog;const ae=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=xt.get(E.envMap||q.environment,ae),q.envMapRotation=q.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",vn),Gt=new Map,q.programs=Gt);let ue=Gt.get(Ot);if(ue!==void 0){if(q.currentProgram===ue&&q.lightsStateVersion===Ft)return er(E,St),ue}else St.uniforms=yt.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,J,St),E.onBeforeCompile(St,C),ue=yt.acquireProgram(St,Ot),Gt.set(Ot,ue),q.uniforms=St.uniforms;const Bt=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=zt.uniform),er(E,St),q.needsLights=us(E),q.lightsStateVersion=Ft,q.needsLights&&(Bt.ambientLightColor.value=K.state.ambient,Bt.lightProbe.value=K.state.probe,Bt.sunLights.value=K.state.sun,Bt.sunLightShadows.value=K.state.sunShadow,Bt.directionalLights.value=K.state.directional,Bt.directionalLightShadows.value=K.state.directionalShadow,Bt.spotLights.value=K.state.spot,Bt.spotLightShadows.value=K.state.spotShadow,Bt.rectAreaLights.value=K.state.rectArea,Bt.ltc_1.value=K.state.rectAreaLTC1,Bt.ltc_2.value=K.state.rectAreaLTC2,Bt.pointLights.value=K.state.point,Bt.pointLightShadows.value=K.state.pointShadow,Bt.hemisphereLights.value=K.state.hemi,Bt.sunShadowMatrix.value=K.state.sunShadowMatrix,Bt.sunShadowCascade.value=K.state.sunShadowCascade,Bt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Bt.spotLightMatrix.value=K.state.spotLightMatrix,Bt.spotLightMap.value=K.state.spotLightMap,Bt.pointShadowMatrix.value=K.state.pointShadowMatrix),q.lightProbeGrid=A.state.lightProbeGridArray.length>0,q.currentProgram=ue,q.uniformsList=null,ue}function tr(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=ko.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function er(E,F){const J=Z.get(E);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function ua(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let J=0,q=E.length;J<q;J++){const K=E[J];if(K.texture!==null&&K.boundingBox.containsPoint(v))return K}return null}function hs(E,F,J,q,K){F.isScene!==!0&&(F=Zt),nt.resetTextureUnits();const Rt=F.fog,Ft=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?F.environment:null,St=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ve.workingColorSpace,Ot=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Gt=xt.get(q.envMap||Ft,Ot),ae=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ue=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Bt=!!J.morphAttributes.position,ye=!!J.morphAttributes.normal,Ie=!!J.morphAttributes.color;let De=si;q.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(De=C.toneMapping);const Te=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,He=Te!==void 0?Te.length:0,Nt=Z.get(q),je=A.state.lights;if(ht===!0&&(pt===!0||E!==X)){const Jt=E===X&&q.id===O;zt.setState(q,E,Jt)}let xe=!1;q.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==je.state.version||Nt.outputColorSpace!==St||K.isBatchedMesh&&Nt.batching===!1||!K.isBatchedMesh&&Nt.batching===!0||K.isBatchedMesh&&Nt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Nt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Nt.instancing===!1||!K.isInstancedMesh&&Nt.instancing===!0||K.isSkinnedMesh&&Nt.skinning===!1||!K.isSkinnedMesh&&Nt.skinning===!0||K.isInstancedMesh&&Nt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Nt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Nt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Nt.instancingMorph===!1&&K.morphTexture!==null||Nt.envMap!==Gt||q.fog===!0&&Nt.fog!==Rt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==zt.numPlanes||Nt.numIntersection!==zt.numIntersection)||Nt.vertexAlphas!==ae||Nt.vertexTangents!==ue||Nt.morphTargets!==Bt||Nt.morphNormals!==ye||Nt.morphColors!==Ie||Nt.toneMapping!==De||Nt.morphTargetsCount!==He||!!Nt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Nt.__version=q.version);let dn=Nt.currentProgram;xe===!0&&(dn=Hi(q,F,K),U&&q.isNodeMaterial&&U.onUpdateProgram(q,dn,Nt));let wn=!1,$n=!1,j=!1;const $=dn.getUniforms(),lt=Nt.uniforms;if(M.useProgram(dn.program)&&(wn=!0,$n=!0,j=!0),q.id!==O&&(O=q.id,$n=!0),Nt.needsLights){const Jt=ua(A.state.lightProbeGridArray,K);Nt.lightProbeGrid!==Jt&&(Nt.lightProbeGrid=Jt,$n=!0)}if(wn||X!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),$.setValue(k,"projectionMatrix",E.projectionMatrix),$.setValue(k,"viewMatrix",E.matrixWorldInverse);const bn=$.map.cameraPosition;bn!==void 0&&bn.setValue(k,gt.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&$.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&$.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,$n=!0,j=!0)}if(Nt.needsLights&&(je.state.sunShadowMap.length>0&&$.setValue(k,"sunShadowMap",je.state.sunShadowMap,nt),je.state.directionalShadowMap.length>0&&$.setValue(k,"directionalShadowMap",je.state.directionalShadowMap,nt),je.state.spotShadowMap.length>0&&$.setValue(k,"spotShadowMap",je.state.spotShadowMap,nt),je.state.pointShadowMap.length>0&&$.setValue(k,"pointShadowMap",je.state.pointShadowMap,nt)),K.isSkinnedMesh){$.setOptional(k,K,"bindMatrix"),$.setOptional(k,K,"bindMatrixInverse");const Jt=K.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),$.setValue(k,"boneTexture",Jt.boneTexture,nt))}K.isBatchedMesh&&($.setOptional(k,K,"batchingTexture"),$.setValue(k,"batchingTexture",K._matricesTexture,nt),$.setOptional(k,K,"batchingIdTexture"),$.setValue(k,"batchingIdTexture",K._indirectTexture,nt),$.setOptional(k,K,"batchingColorTexture"),K._colorsTexture!==null&&$.setValue(k,"batchingColorTexture",K._colorsTexture,nt));const Ut=J.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&B.update(K,J,dn),($n||Nt.receiveShadow!==K.receiveShadow)&&(Nt.receiveShadow=K.receiveShadow,$.setValue(k,"receiveShadow",K.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&F.environment!==null&&(lt.envMapIntensity.value=F.environmentIntensity),lt.dfgLUT!==void 0&&(lt.dfgLUT.value=i_()),$n){if($.setValue(k,"toneMappingExposure",C.toneMappingExposure),Nt.needsLights&&Vi(lt,j),Rt&&q.fog===!0&&Vt.refreshFogUniforms(lt,Rt),Vt.refreshMaterialUniforms(lt,q,rt,Q,A.state.transmissionRenderTarget[E.id]),Nt.needsLights&&Nt.lightProbeGrid){const Jt=Nt.lightProbeGrid;lt.probesSH.value=Jt.texture,lt.probesMin.value.copy(Jt.boundingBox.min),lt.probesMax.value.copy(Jt.boundingBox.max),lt.probesResolution.value.copy(Jt.resolution)}ko.upload(k,tr(Nt),lt,nt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ko.upload(k,tr(Nt),lt,nt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&$.setValue(k,"center",K.center),$.setValue(k,"modelViewMatrix",K.modelViewMatrix),$.setValue(k,"normalMatrix",K.normalMatrix),$.setValue(k,"modelMatrix",K.matrixWorld),q.uniformsGroups!==void 0){const Jt=q.uniformsGroups;for(let bn=0,On=Jt.length;bn<On;bn++){const nr=Jt[bn];ct.update(nr,dn),ct.bind(nr,dn)}}return dn}function Vi(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function us(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,F,J){const q=Z.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(E.texture).__webglTexture=F,Z.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const J=Z.get(E);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,J=0){H=E,tt=F,Y=J;let q=null,K=!1,Rt=!1;if(E){const St=Z.get(E);if(St.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(k.FRAMEBUFFER,St.__webglFramebuffer),et.copy(E.viewport),dt.copy(E.scissor),At=E.scissorTest,M.viewport(et),M.scissor(dt),M.setScissorTest(At),O=-1;return}else if(St.__webglFramebuffer===void 0)nt.setupRenderTarget(E);else if(St.__hasExternalTextures)nt.rebindTextures(E,Z.get(E.texture).__webglTexture,Z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ae=E.depthTexture;if(St.__boundDepthTexture!==ae){if(ae!==null&&Z.has(ae)&&(E.width!==ae.image.width||E.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(E)}}const Ot=E.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Rt=!0);const Gt=Z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?q=Gt[F][J]:q=Gt[F],K=!0):E.samples>0&&nt.useMultisampledRTT(E)===!1?q=Z.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?q=Gt[J]:q=Gt,et.copy(E.viewport),dt.copy(E.scissor),At=E.scissorTest}else et.copy(Et).multiplyScalar(rt).floor(),dt.copy(Lt).multiplyScalar(rt).floor(),At=he;if(J!==0&&(q=G),M.bindFramebuffer(k.FRAMEBUFFER,q)&&M.drawBuffers(E,q),M.viewport(et),M.scissor(dt),M.setScissorTest(At),K){const St=Z.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,St.__webglTexture,J)}else if(Rt){const St=F;for(let Ot=0;Ot<E.textures.length;Ot++){const Gt=Z.get(E.textures[Ot]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ot,Gt.__webglTexture,J,St)}}else if(E!==null&&J!==0){const St=Z.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,St.__webglTexture,J)}O=-1};function $r(E){const F=Z.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=I.textureFormatReadable(E.format),F.__typeReadable=I.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,J,q,K,Rt,Ft,St=0){if(!(E&&E.isWebGLRenderTarget)){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot){M.bindFramebuffer(k.FRAMEBUFFER,Ot);try{const Gt=E.textures[St],ae=Gt.format,ue=Gt.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+St);const Bt=$r(Gt);if(Bt.__formatReadable===!1){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){Me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-q&&J>=0&&J<=E.height-K&&k.readPixels(F,J,q,K,wt.convert(ae),wt.convert(ue),Rt)}finally{const Gt=H!==null?Z.get(H).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(E,F,J,q,K,Rt,Ft,St=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot)if(F>=0&&F<=E.width-q&&J>=0&&J<=E.height-K){M.bindFramebuffer(k.FRAMEBUFFER,Ot);const Gt=E.textures[St],ae=Gt.format,ue=Gt.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+St);const Bt=$r(Gt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ye),k.bufferData(k.PIXEL_PACK_BUFFER,Rt.byteLength,k.STREAM_READ),k.readPixels(F,J,q,K,wt.convert(ae),wt.convert(ue),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Ie=H!==null?Z.get(H).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,Ie);const De=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await wf(k,De,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ye),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Rt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ye),k.deleteSync(De),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,J=0){const q=Math.pow(2,-J),K=Math.floor(E.image.width*q),Rt=Math.floor(E.image.height*q),Ft=F!==null?F.x:0,St=F!==null?F.y:0;nt.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Ft,St,K,Rt),M.unbindTexture()},this.copyTextureToTexture=function(E,F,J=null,q=null,K=0,Rt=0){let Ft,St,Ot,Gt,ae,ue,Bt,ye,Ie;const De=E.isCompressedTexture?E.mipmaps[Rt]:E.image;if(J!==null)Ft=J.max.x-J.min.x,St=J.max.y-J.min.y,Ot=J.isBox3?J.max.z-J.min.z:1,Gt=J.min.x,ae=J.min.y,ue=J.isBox3?J.min.z:0;else{const lt=Math.pow(2,-K);Ft=Math.floor(De.width*lt),St=Math.floor(De.height*lt),E.isDataArrayTexture?Ot=De.depth:E.isData3DTexture?Ot=Math.floor(De.depth*lt):Ot=1,Gt=0,ae=0,ue=0}q!==null?(Bt=q.x,ye=q.y,Ie=q.z):(Bt=0,ye=0,Ie=0);const Te=wt.convert(F.format),He=wt.convert(F.type);let Nt;F.isData3DTexture?(nt.setTexture3D(F,0),Nt=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(nt.setTexture2DArray(F,0),Nt=k.TEXTURE_2D_ARRAY):(nt.setTexture2D(F,0),Nt=k.TEXTURE_2D),M.activeTexture(k.TEXTURE0),M.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);const je=M.getParameter(k.UNPACK_ROW_LENGTH),xe=M.getParameter(k.UNPACK_IMAGE_HEIGHT),dn=M.getParameter(k.UNPACK_SKIP_PIXELS),wn=M.getParameter(k.UNPACK_SKIP_ROWS),$n=M.getParameter(k.UNPACK_SKIP_IMAGES);M.pixelStorei(k.UNPACK_ROW_LENGTH,De.width),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,De.height),M.pixelStorei(k.UNPACK_SKIP_PIXELS,Gt),M.pixelStorei(k.UNPACK_SKIP_ROWS,ae),M.pixelStorei(k.UNPACK_SKIP_IMAGES,ue);const j=E.isDataArrayTexture||E.isData3DTexture,$=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const lt=Z.get(E),Ut=Z.get(F),Jt=Z.get(lt.__renderTarget),bn=Z.get(Ut.__renderTarget);M.bindFramebuffer(k.READ_FRAMEBUFFER,Jt.__webglFramebuffer),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let On=0;On<Ot;On++)j&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(E).__webglTexture,K,ue+On),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(F).__webglTexture,Rt,Ie+On)),k.blitFramebuffer(Gt,ae,Ft,St,Bt,ye,Ft,St,k.DEPTH_BUFFER_BIT,k.NEAREST);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||Z.has(E)){const lt=Z.get(E),Ut=Z.get(F);M.bindFramebuffer(k.READ_FRAMEBUFFER,z),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,V);for(let Jt=0;Jt<Ot;Jt++)j?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,lt.__webglTexture,K,ue+Jt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,lt.__webglTexture,K),$?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ut.__webglTexture,Rt,Ie+Jt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ut.__webglTexture,Rt),K!==0?k.blitFramebuffer(Gt,ae,Ft,St,Bt,ye,Ft,St,k.COLOR_BUFFER_BIT,k.NEAREST):$?k.copyTexSubImage3D(Nt,Rt,Bt,ye,Ie+Jt,Gt,ae,Ft,St):k.copyTexSubImage2D(Nt,Rt,Bt,ye,Gt,ae,Ft,St);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else $?E.isDataTexture||E.isData3DTexture?k.texSubImage3D(Nt,Rt,Bt,ye,Ie,Ft,St,Ot,Te,He,De.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(Nt,Rt,Bt,ye,Ie,Ft,St,Ot,Te,De.data):k.texSubImage3D(Nt,Rt,Bt,ye,Ie,Ft,St,Ot,Te,He,De):E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Rt,Bt,ye,Ft,St,Te,He,De.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Rt,Bt,ye,De.width,De.height,Te,De.data):k.texSubImage2D(k.TEXTURE_2D,Rt,Bt,ye,Ft,St,Te,He,De);M.pixelStorei(k.UNPACK_ROW_LENGTH,je),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xe),M.pixelStorei(k.UNPACK_SKIP_PIXELS,dn),M.pixelStorei(k.UNPACK_SKIP_ROWS,wn),M.pixelStorei(k.UNPACK_SKIP_IMAGES,$n),Rt===0&&F.generateMipmaps&&k.generateMipmap(Nt),M.unbindTexture()},this.initRenderTarget=function(E){Z.get(E).__webglFramebuffer===void 0&&nt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?nt.setTextureCube(E,0):E.isData3DTexture?nt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?nt.setTexture2DArray(E,0):nt.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){tt=0,Y=0,H=null,M.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}}function _d(i,t,e,n,s,r=.3){const o=i.createGain();return o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(r,e+n),o.gain.exponentialRampToValueAtTime(1e-4,e+n+s),o.connect(t),o}function Ke(i,t,e,n,s,r="sine",o=.2,a){const l=i.createOscillator();l.type=r,l.frequency.setValueAtTime(n,e),a&&l.frequency.exponentialRampToValueAtTime(a,e+s);const c=_d(i,t,e,.005,s,o);l.connect(c),l.start(e),l.stop(e+s+.05)}let Li=null;function en(i,t,e,n,s,r=1,o=.2,a="bandpass",l){if(!Li){Li=i.createBuffer(1,i.sampleRate,i.sampleRate);const u=Li.getChannelData(0);for(let f=0;f<u.length;f++)u[f]=Math.random()*2-1}const c=i.createBufferSource();c.buffer=Li,c.loop=!0;const h=i.createBiquadFilter();h.type=a,h.frequency.setValueAtTime(s,e),l&&h.frequency.exponentialRampToValueAtTime(l,e+n),h.Q.value=r;const d=_d(i,t,e,.008,n,o);c.connect(h),h.connect(d),c.start(e,Math.random()*.5),c.stop(e+n+.05)}function Ln(i,t,e,n,s=.12){for(const[r,o]of[[1,1],[2.76,.5],[5.4,.25]])Ke(i,t,e,n*r,.35/r+.08,"sine",s*o)}const r_={tink:(i,t,e,n)=>Ln(i,t,e,880*n),lift:(i,t,e,n)=>Ln(i,t,e,660*n,.08),thunk:(i,t,e)=>{Ke(i,t,e,140,.18,"sine",.25,90),Ln(i,t,e+.01,420,.06)},clink:(i,t,e,n)=>{Ke(i,t,e,2500*n,.4,"sine",.1),Ke(i,t,e,3720*n,.25,"sine",.05)},cloth:(i,t,e)=>en(i,t,e,.28,900,.7,.12,"bandpass",2600),step:(i,t,e)=>en(i,t,e,.05,1600,2,.035),sit:(i,t,e)=>en(i,t,e,.18,500,.8,.12,"lowpass",200),land:(i,t,e)=>{en(i,t,e,.12,700,.8,.12,"lowpass",200),Ln(i,t,e,520,.04)},boing:(i,t,e)=>Ke(i,t,e,180,.35,"sine",.22,360),squeak:(i,t,e)=>Ke(i,t,e,900,.18,"triangle",.08,1300),giggle:(i,t,e)=>{for(let n=0;n<4;n++)Ke(i,t,e+n*.09,900+n%2*180,.07,"triangle",.06,1100)},hum:(i,t,e)=>{[523,587,659,587].forEach((s,r)=>Ke(i,t,e+r*.22,s,.2,"triangle",.05))},yawn:(i,t,e)=>Ke(i,t,e,520,.8,"triangle",.06,260),gasp:(i,t,e)=>Ke(i,t,e,600,.15,"triangle",.07,900),hmm:(i,t,e)=>Ke(i,t,e,420,.35,"triangle",.05,520),clap:(i,t,e)=>{for(let n=0;n<4;n++)en(i,t,e+n*.2,.06,1800,1.2,.16)},cheer:(i,t,e)=>{[523,659,784,1046].forEach((n,s)=>Ke(i,t,e+s*.09,n,.25,"triangle",.07))},blow:(i,t,e)=>en(i,t,e,.5,1200,.6,.14,"bandpass",600),sip:(i,t,e)=>en(i,t,e,.25,500,3,.06),rub:(i,t,e)=>{for(let n=0;n<6;n++)en(i,t,e+n*.2,.15,2200,1,.07)},jump:(i,t,e)=>Ke(i,t,e,300,.2,"sine",.12,600),splash:(i,t,e)=>{en(i,t,e,.5,1400,.6,.2,"bandpass",400);for(let n=0;n<5;n++)Ke(i,t,e+.05+n*.05,1200+Math.random()*800,.08,"sine",.04)},stomp:(i,t,e)=>{for(let n=0;n<4;n++)en(i,t,e+n*.23,.08,300,1,.12,"lowpass")},twirl:(i,t,e)=>en(i,t,e,.6,800,.5,.08,"bandpass",3e3),shake:(i,t,e)=>{for(let n=0;n<5;n++)en(i,t,e+n*.08,.06,3e3,1,.05)},door:(i,t,e)=>{Ke(i,t,e,220,.5,"sawtooth",.025,330),Ln(i,t,e+.45,380,.05)},lid:(i,t,e)=>{Ln(i,t,e,300,.08),Ke(i,t,e,110,.15,"sine",.12)},lamp:(i,t,e)=>{Ln(i,t,e,1500,.05),en(i,t,e,.03,4e3,1,.05)},shutter:(i,t,e)=>{en(i,t,e,.04,3e3,1,.2),en(i,t,e+.07,.05,2400,1,.16),Ke(i,t,e+.12,1600,.4,"sine",.03,900)},page:(i,t,e)=>en(i,t,e,.2,2600,.8,.08,"highpass"),dial:(i,t,e)=>{for(let n=0;n<5;n++)Ln(i,t,e+n*.06,1200+n*60,.03)},chime:(i,t,e)=>{[784,988,1175,1568].forEach((n,s)=>Ln(i,t,e+s*.12,n,.06))},curtain:(i,t,e)=>en(i,t,e,1,500,.5,.12,"lowpass",1500),stick:(i,t,e)=>{en(i,t,e,.08,900,1,.12),Ln(i,t,e+.02,700,.04)},knock:(i,t,e)=>{Ln(i,t,e,500,.08),Ln(i,t,e+.16,500,.08)}},As=[[0,784],[.5,659],[1,784],[1.5,1046],[2,988],[2.5,880],[3,784],[3.75,659],[4,698],[4.5,784],[5,880],[5.5,784],[6,659],[6.5,587],[7,523]];class o_{constructor(){L(this,"ctx",null);L(this,"master",null);L(this,"muted",!1);L(this,"rainNode",null);L(this,"boxTimer",0);L(this,"boxStep",0);L(this,"boxPlaying",!1);L(this,"boxSpeed",1)}unlock(){try{if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}catch{this.ctx=null}}setMuted(t){this.muted=t,this.master&&this.ctx&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.05)}play(t,e=1){const n=this.ctx;if(!n||!this.master||this.muted||n.state!=="running")return;const s=r_[t];if(s)try{s(n,this.master,n.currentTime+.005,e)}catch{}}musicBox(t,e,n){if(!t){this.boxPlaying=!1;return}if(this.boxPlaying||(this.boxPlaying=!0,this.boxStep=0,this.boxTimer=0),this.boxSpeed=e<6?.45+e/11:1,this.boxTimer-=n*this.boxSpeed,this.boxTimer<=0){const s=this.ctx,[,r]=As[this.boxStep%As.length],o=As[(this.boxStep+1)%As.length][0],a=As[this.boxStep%As.length][0],l=o>a?o-a:.5+.5;if(this.boxTimer+=l*.42,this.boxStep++,s&&this.master&&!this.muted&&s.state==="running"){const c=s.currentTime+.01;Ke(s,this.master,c,r,.9,"sine",.07),Ke(s,this.master,c,r*3.01,.3,"sine",.02),this.boxStep%2&&Ke(s,this.master,c,r/2,.8,"sine",.03)}}}rain(t,e){const n=this.ctx;if(!(!n||!this.master)){if(t&&!this.rainNode){if(!Li){Li=n.createBuffer(1,n.sampleRate,n.sampleRate);const a=Li.getChannelData(0);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1}const s=n.createBufferSource();s.buffer=Li,s.loop=!0;const r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=1800;const o=n.createGain();o.gain.value=0,s.connect(r),r.connect(o),o.connect(this.master),s.start(),this.rainNode={src:s,gain:o}}if(this.rainNode&&(this.rainNode.gain.gain.setTargetAtTime(t?e?.07:.03:0,n.currentTime,.4),!t)){const s=this.rainNode;this.rainNode=null,setTimeout(()=>{try{s.src.stop()}catch{}},1500)}}}}const Ct={W:6,D:4.6,H:4},hn={x0:.1,x1:1.5,depth:.62,h:2.6,cx:.8},Ir={x0:1.68,x1:2.38,depth:.3,cx:2.03},Se={x0:2.6,x1:3.5,h:2.4,cx:3.05},ne={x0:3.8,x1:5.8,sill:.95,top:2.9,cx:4.8},qn={x0:3.6,x1:6,z0:0,z1:2.05},Oo={x0:2.2,x1:3.75,z0:0,z1:1.6},Ka={x:Ir.cx,z:1.15},dr={x:hn.cx,z:1.15},Sr={x:Se.cx,z:.62},Bs={x:Se.cx,z:-.9},fr={x:4.75,z:-3.6},jo={x:5.55,z:-4.2},Po=[Bs,{x:3.6,z:-2},{x:4.35,z:-3.35}],a_=[{x0:Se.x0-.05,x1:Se.x1+.05,z0:0,z1:.9},{x0:hn.x0,x1:hn.x1,z0:hn.depth,z1:hn.depth+.45}],Rc=[{x0:hn.x0,x1:hn.x1,z0:0,z1:hn.depth},{x0:Ir.x0,x1:Ir.x1,z0:0,z1:Ir.depth}],Cn={chair:{w:.66,d:.66,h:1.32},table:{w:1.6,d:1,h:.88},bed:{w:2.3,d:1.12,h:.62},lamp:{w:.5,d:.5,h:1.75}},Dr={table:.88,bed:.64,chair:.56},Js={table:{l:{x:-.42,z:.14},r:{x:.42,z:.14},c:{x:0,z:-.04},bl:{x:-.46,z:-.3},br:{x:.46,z:-.3},gl:{x:-.68,z:-.06},gr:{x:.68,z:-.06}},bed:{pillow:{x:.72,z:-.12},mid:{x:0,z:0},foot:{x:-.78,z:.05}},chair:{seat:{x:0,z:.02}}},l_=.24;function Fn(i,t){return i.x>=t.x0&&i.x<=t.x1&&i.z>=t.z0&&i.z<=t.z1}function Za(i,t,e=0){return i.x0<t.x1+e&&i.x1+e>t.x0&&i.z0<t.z1+e&&i.z1+e>t.z0}function ql(i,t){const e=Math.max(t.x0-i.x,0,i.x-t.x1),n=Math.max(t.z0-i.z,0,i.z-t.z1);return Math.hypot(e,n)}function c_(i){const t=Date.UTC(i.getFullYear(),0,1),e=Date.UTC(i.getFullYear(),i.getMonth(),i.getDate());return Math.min(364,Math.max(0,Math.round((e-t)/864e5)))}function Cc(i){const t=(i%365+365)%365;return t>=59&&t<151?"spring":t>=151&&t<243?"summer":t>=243&&t<334?"autumn":"winter"}function h_(i,t=Math.random){const e=Cc(i),n=t();return e==="winter"?n<.45?"snow":n<.6?"rain":"sun":e==="spring"?n<.3?"rain":"sun":e==="summer"?n<.25?"rain":"sun":n<.35?"rain":n<.4?"snow":"sun"}const Ic=1;function Dc(i=c_(new Date)){return{v:Ic,time:"morning",weather:"sun",outfit:"day",story:"free",day:i,dayCount:0,furniture:{table:{x:1.55,z:3,yaw:0},chair:{x:2.77,z:3,yaw:-Math.PI/2},bed:{x:4.85,z:3.92,yaw:0},lamp:{x:5.72,z:2.2,yaw:0}},props:{musicBox:{loc:{at:"surface",on:"table",slot:"bl"},flags:{open:!1,tune:0}},book:{loc:{at:"surface",on:"table",slot:"br"},flags:{open:!1}},cupA:{loc:{at:"surface",on:"table",slot:"r"},flags:{full:!0}},plush:{loc:{at:"floor",x:2.6,z:4.15},flags:{}},cupB:{loc:{at:"shelf",slot:0},flags:{full:!0}},cake:{loc:{at:"shelf",slot:1},flags:{candles:"unlit",slices:0}},towel:{loc:{at:"shelf",slot:2},flags:{wet:0}},boots:{loc:{at:"shelf",slot:3},flags:{wet:0}},umbrella:{loc:{at:"shelf",slot:4},flags:{open:!1,wet:0}}},fixtures:{wardrobeOpen:.16,doorOpen:!1,curtainsOpen:!0,lamp:0,floorWet:0,snowman:0,bunting:!1},doll:{x:3.3,z:3.55,yaw:-.55,posture:"stand",seat:null,holding:null,activity:"idle",outside:!1,asleep:!1},rev:{},touch:{},tick:0,fired:{},wetCount:0,gift:null,playerTick:0}}function qr(i,t){i.tick+=1,i.rev[t]=(i.rev[t]??0)+1,i.touch[t]=i.tick}function Yl(i,t){return i.rev[t]??0}function Lc(i,t){const e=Cn[i],n=Math.abs(Math.cos(t.yaw)),s=Math.abs(Math.sin(t.yaw)),r=(e.w*n+e.d*s)/2,o=(e.w*s+e.d*n)/2;return{x0:t.x-r,x1:t.x+r,z0:t.z-o,z1:t.z+o}}function Je(i,t){return Lc(t,i.furniture[t])}function yd(i,t){const e=Math.cos(t),n=Math.sin(t);return{x:i.x*e+i.z*n,z:-i.x*n+i.z*e}}function su(i){return{x:Math.sin(i),z:Math.cos(i)}}function u_(i,t,e){const n=i.furniture[t],s=Js[t][e]??{x:0,z:0},r=yd(s,n.yaw);return{x:n.x+r.x,y:Dr[t],z:n.z+r.z}}function d_(i,t){const e=i.props[t].loc;switch(e.at){case"floor":return{x:e.x,y:0,z:e.z};case"surface":return u_(i,e.on,e.slot);case"held":case"worn":return{x:i.doll.x,y:e.at==="held"?1:0,z:i.doll.z};default:return null}}function Un(i,t){const e=i.props[t].loc.at;return e==="floor"||e==="surface"?!0:e==="held"||e==="worn"?!i.doll.outside:!1}function bi(i,t,e){const n=i.props[t].loc;return n.at==="surface"&&n.on===e}function Xs(i,t,e){for(const n of Object.keys(i.props)){const s=i.props[n].loc;if(s.at==="surface"&&s.on===t&&s.slot===e)return n}return null}function Kl(i,t){for(const e of Object.keys(i.props)){const n=i.props[e].loc;if(n.at==="shelf"&&n.slot===t)return e}return null}const Zl=8;function Md(i,t=0){if(!Kl(i,t))return t;for(let e=1;e<Zl;e++)for(const n of[t+e,t-e])if(n>=0&&n<Zl&&!Kl(i,n))return n;return-1}const wd=["chair","table","bed","lamp"],ru=Math.PI/2-.35;function f_(i){return i.x0>=.02&&i.x1<=Ct.W-.02&&i.z0>=.02&&i.z1<=Ct.D-.02}function Jl(i,t,e){const n=Lc(t,e);if(!f_(n))return!0;for(const s of Rc)if(Za(n,s,.02))return!0;for(const s of a_)if(Za(n,s))return!0;for(const s of wd)if(s!==t&&Za(n,Je(i,s),.04))return!0;return!1}function ou(i,t){const e=Lc(i,t),n=(e.x1-e.x0)/2,s=(e.z1-e.z0)/2;return{x:Math.min(Ct.W-.03-n,Math.max(.03+n,t.x)),z:Math.min(Ct.D-.03-s,Math.max(.03+s,t.z)),yaw:t.yaw}}function Yr(i,t,e,n=3){const s=ou(t,e);if(!Jl(i,t,s))return s;for(let r=.08;r<=n;r+=.08){const o=Math.max(12,Math.round(r*24));let a=null,l=1/0;for(let c=0;c<o;c++){const h=c/o*Math.PI*2,d=ou(t,{x:s.x+Math.cos(h)*r,z:s.z+Math.sin(h)*r,yaw:e.yaw});if(Jl(i,t,d))continue;const u=Math.hypot(d.x-e.x,d.z-e.z);u<l&&(l=u,a=d)}if(a)return a}return null}function bd(i){const t=i.furniture.table,e=Cn.table.w/2,n=Cn.table.d/2,s=.42;return[{side:"right",pose:{x:t.x+e+s,z:t.z,yaw:-Math.PI/2}},{side:"left",pose:{x:t.x-e-s,z:t.z,yaw:Math.PI/2}},{side:"back",pose:{x:t.x,z:t.z-n-s,yaw:0}}]}function Sd(i){const t=i.furniture.chair;let e=null,n=.5;for(const r of bd(i)){const o=Math.hypot(r.pose.x-t.x,r.pose.z-t.z);o<n&&(n=o,e=r.side)}if(e)return e;const s=i.furniture.table;return t.z<s.z-Cn.table.d/2?"back":t.x>s.x?"right":"left"}function p_(i,t,e){const n=Je(i,"table"),s={x:t,z:e};if(ql(s,n)<.95){const o=bd(i).map(a=>({...a,d:Math.hypot(a.pose.x-t,a.pose.z-e)})).sort((a,l)=>a.d-l.d);for(const a of o)if(!Jl(i,"chair",a.pose))return a.pose}if(Fn(s,{...qn,x0:qn.x0-.15,z1:qn.z1+.2})){const o=Math.min(ne.x1-.2,Math.max(ne.x0+.2,t)),a=o<ne.cx?ru:-ru,l={x:o,z:Math.min(1.75,Math.max(1.05,e)),yaw:a},c=Yr(i,"chair",l,1.2);if(c&&Fn(c,qn))return c}return Yr(i,"chair",{x:t,z:e,yaw:0})??i.furniture.chair}function m_(i,t,e){const n=Cn.bed.w/2,s=Cn.bed.d/2;if(e<qn.z1-.2&&t>qn.x0-.3){const l={x:Math.min(Ct.W-.04-n,Math.max(4.72,t)),z:s+.05,yaw:0},c=Yr(i,"bed",l,1);if(c)return c}let r=t,o=e;return t+n>Ct.W-.6&&(r=Ct.W-.04-n),t-n<.6&&(r=.04+n),e-s<.5&&(o=s+.05),Yr(i,"bed",{x:r,z:o,yaw:0})??i.furniture.bed}function g_(i,t,e,n){return t==="chair"?p_(i,e,n):t==="bed"?m_(i,e,n):Yr(i,t,{x:e,z:n,yaw:i.furniture[t].yaw})??i.furniture[t]}function x_(i,t){const e=Je(i,t),n=[];for(const s of Object.keys(i.props)){const r=i.props[s].loc;if(r.at!=="floor"||!Fn(r,{x0:e.x0-.1,x1:e.x1+.1,z0:e.z0-.1,z1:e.z1+.1}))continue;const o=[{x:r.x,z:e.z1+.28},{x:e.x0-.28,z:r.z},{x:e.x1+.28,z:r.z},{x:r.x,z:e.z0-.28}].filter(l=>l.x>.15&&l.x<Ct.W-.15&&l.z>.15&&l.z<Ct.D-.15);o.sort((l,c)=>Math.hypot(l.x-r.x,l.z-r.z)-Math.hypot(c.x-r.x,c.z-r.z));const a=o[0]??{x:r.x,z:Math.min(Ct.D-.2,e.z1+.3)};i.props[s].loc={at:"floor",x:a.x,z:a.z},n.push(s)}return n}function v_(i,t,e){const n=i.furniture[t],s=Js[t][e],r=yd(s,n.yaw);return{x:n.x+r.x,z:n.z+r.z}}function __(i,t,e){return Object.keys(Js[t]).filter(n=>{const s=Xs(i,t,n);return!(s&&s!==e||t==="chair"&&i.doll.seat==="chair")})}function $l(i,t,e,n,s){let r=null,o=1/0;for(const a of __(i,t,s)){const l=v_(i,t,a),c=Math.hypot(l.x-e,l.z-n);c<o&&(o=c,r=a)}return r}function Ed(i,t){for(const e of["table","bed","chair"]){const n=Je(i,e);if(Fn(t,{x0:n.x0-.05,x1:n.x1+.05,z0:n.z0-.05,z1:n.z1+.05}))return e}return null}function pr(i,t,e){if(e.kind==="shelf"){const r=Kl(i,e.slot),o=!r||r===t?e.slot:Md(i,e.slot);return o>=0?{at:"shelf",slot:o}:i.props[t].loc}let n=e.kind==="surface"?e.on:Ed(i,e);if(n){const r=$l(i,n,e.x,e.z,t);if(r)return{at:"surface",on:n,slot:r}}let s={x:Math.min(Ct.W-.18,Math.max(.18,e.x)),z:Math.min(Ct.D-.15,Math.max(.18,e.z))};for(let r=0;r<4;r++){let o=!1;for(const a of[...Rc,...wd.map(l=>Je(i,l))])if(Fn(s,{x0:a.x0-.12,x1:a.x1+.12,z0:a.z0-.12,z1:a.z1+.12})){const l=[{x:s.x,z:a.z1+.2},{x:a.x0-.2,z:s.z},{x:a.x1+.2,z:s.z},{x:s.x,z:a.z0-.2}].filter(c=>c.x>.15&&c.x<Ct.W-.15&&c.z>.15&&c.z<Ct.D-.12);l.sort((c,h)=>Math.hypot(c.x-s.x,c.z-s.z)-Math.hypot(h.x-s.x,h.z-s.z)),l[0]&&(s=l[0],o=!0)}if(!o)break}return{at:"floor",x:s.x,z:s.z}}const sn=(i,t)=>i.doll.holding===t?[]:[{k:"walk",to:{thing:t},standoff:.5},{k:"pick",id:t}];function nn(i){return i.doll.asleep?[{k:"do",fx:"wake"},{k:"stand"}]:i.doll.posture!=="stand"?[{k:"stand"}]:[]}function y_(i){return bi(i,"plush","table")?[{k:"look",at:{thing:"plush"},dur:.5}]:!Un(i,"plush")||bi(i,"plush","bed")?[{k:"look",at:{spot:"guestSeat"},dur:.8}]:[{k:"look",at:{spot:"guestSeat"},dur:.6},{k:"look",at:{thing:"plush"},dur:.6},...sn(i,"plush"),{k:"walk",to:{spot:"guestSeat"},standoff:.45},{k:"put",id:"plush",dest:{surface:"table",slot:"guest"}}]}function au(){return[{k:"walk",to:{thing:"chair"},seat:"chair"},{k:"sit",on:"chair"}]}function Td(i,t){const e=i.behavior,n=t.doll.posture==="sit"||t.doll.posture==="lie";switch(e){case"wearReact":{const s=i.params.outfit??t.outfit,r={dress:"curtsyTwirl",pajamas:"yawnStretch",rainwear:"stompHood",day:"hopHappy"}[s];return n&&!t.doll.asleep?{behavior:e,overlay:!0,steps:[{k:"anim",name:"lookDownDress",dur:1},{k:"anim",name:"giggle",dur:.8}]}:{behavior:e,steps:[...nn(t),{k:"anim",name:"lookDownDress",dur:.9},{k:"anim",name:r,dur:2},{k:"settle",activity:"idle"}]}}case"receive":{const s=i.params.id,r=[{k:"do",fx:"clearGift"},...nn(t),{k:"look",at:{thing:s},dur:.35}];return s==="plush"?{behavior:e,steps:[...r,...sn(t,s),{k:"anim",name:"hug",dur:1.3},{k:"settle",activity:"cuddle"}]}:s==="towel"?(t.props.boots.flags.wet??0)>.05&&Un(t,"boots")?{behavior:e,steps:[...r,...sn(t,s),{k:"look",at:{thing:"boots"},dur:.6}]}:{behavior:e,steps:[...r,...sn(t,s),{k:"anim",name:"dabFace",dur:1.5},{k:"put",id:s,dest:{tableOrFloor:!0}},{k:"settle",activity:"idle"}]}:s==="book"?{behavior:e,steps:[...r,...sn(t,s),{k:"do",fx:"openBook"},{k:"anim",name:"readPage",dur:2.6},{k:"do",fx:"closeBook"},{k:"put",id:s,dest:{tableOrFloor:!0}},{k:"settle",activity:"idle"}]}:s==="cupA"||s==="cupB"?{behavior:e,steps:[...r,...sn(t,s),{k:"anim",name:"sip",dur:1.6},{k:"put",id:s,dest:{tableOrFloor:!0}},{k:"settle",activity:"idle"}]}:s==="cake"?{behavior:e,steps:[...r,...sn(t,s),{k:"anim",name:"admire",dur:1},{k:"walk",to:{thing:"table"},standoff:.55},{k:"put",id:s,dest:{surface:"table",slot:"c"}},{k:"settle",activity:"idle"}]}:s==="umbrella"?{behavior:e,steps:[...r,...sn(t,s),{k:"do",fx:"umbrellaOpen"},{k:"anim",name:"twirlUmbrella",dur:2},{k:"do",fx:"umbrellaClose"},{k:"walk",to:{spot:"doorIn"}},{k:"put",id:s,dest:{floorNear:"door"}},{k:"settle",activity:"idle"}]}:s==="boots"?{behavior:e,steps:[...r,...sn(t,s),{k:"sit",on:"floor"},{k:"anim",name:"putOnBoots",dur:1.2},{k:"put",id:s,dest:{worn:!0}},{k:"stand"},{k:"anim",name:"stomp",dur:1.4},{k:"walk",to:{spot:"doorIn"}},{k:"anim",name:"takeOffBoots",dur:.9},{k:"put",id:s,dest:{floorNear:"door"}},{k:"settle",activity:"idle"}]}:s==="musicBox"?{behavior:e,steps:[...r,...sn(t,s),{k:"put",id:s,dest:{tableOrFloor:!0}},{k:"do",fx:"musicOpen"}]}:{behavior:e,steps:[...r,{k:"settle",activity:"idle"}]}}case"hugPlush":return{behavior:e,steps:[...nn(t),{k:"look",at:{thing:"plush"},dur:.45},...sn(t,"plush"),{k:"anim",name:"hug",dur:1.3},{k:"settle",activity:"cuddle"}]};case"dollDrop":{const s=i.params.where;return s==="bed"?t.time==="night"&&t.outfit==="pajamas"?{behavior:e,steps:[{k:"anim",name:"yawn",dur:1.1},{k:"lie"},{k:"do",fx:"sleep"},{k:"settle",activity:"sleeping"}]}:{behavior:e,steps:[{k:"anim",name:"bounce",dur:1.4},{k:"settle",activity:"restBed"}]}:s==="chair"?{behavior:e,steps:[{k:"anim",name:"swingLegs",dur:1.6},{k:"settle",activity:"sitting"}]}:s==="mirror"?{behavior:e,steps:[{k:"look",at:{spot:"mirror"},dur:.5},{k:"anim",name:"mirrorPose",dur:2.4},{k:"settle",activity:"mirror"}]}:{behavior:e,steps:[{k:"anim",name:"shakeOff",dur:.8},{k:"settle",activity:"idle"}]}}case"wipeBoots":{const s=[...nn(t),{k:"look",at:{thing:"boots"},dur:.6}];return t.doll.holding!=="towel"&&s.push({k:"look",at:{thing:"towel"},dur:.4},...sn(t,"towel")),s.push({k:"walk",to:{thing:"boots"},standoff:.5},{k:"sit",on:"floor"},{k:"anim",name:"wipe",dur:2.4},{k:"do",fx:"dryBoots"}),(t.props.umbrella.flags.wet??0)>.05&&Un(t,"umbrella")&&s.push({k:"anim",name:"wipe",dur:1.4},{k:"do",fx:"dryUmbrella"}),s.push({k:"do",fx:"cleanFloor"},{k:"stand"},{k:"put",id:"towel",dest:{floorNear:"doll"}},{k:"pick",id:"boots"},{k:"walk",to:{spot:"wardrobe"}},{k:"do",fx:"wardrobeOpen"},{k:"put",id:"boots",dest:{wardrobe:!0}}),Un(t,"umbrella")&&s.push({k:"walk",to:{thing:"umbrella"},standoff:.5},{k:"pick",id:"umbrella"},{k:"walk",to:{spot:"wardrobe"}},{k:"put",id:"umbrella",dest:{wardrobe:!0}}),s.push({k:"do",fx:"wardrobeClose"},{k:"anim",name:"stretchStand",dur:1},{k:"do",fx:"tidy"},{k:"settle",activity:"idle"}),{behavior:e,steps:s}}case"changeForBed":return{behavior:e,steps:[...nn(t),{k:"anim",name:"yawn",dur:1.3},{k:"walk",to:{spot:"wardrobe"}},{k:"do",fx:"wardrobeOpen"},{k:"look",at:{spot:"wardrobe"},dur:.5},{k:"wear",outfit:"pajamas"},{k:"do",fx:"wardrobeClose"},{k:"settle",activity:"idle"}]};case"danceElegant":return{behavior:e,steps:[...nn(t),{k:"look",at:{thing:"musicBox"},dur:.6},{k:"anim",name:"listen",dur:1},{k:"walk",to:{spot:"mirror"}},{k:"look",at:{spot:"mirror"},dur:.4},{k:"anim",name:"curtsy",dur:1},{k:"settle",activity:"danceElegant"}]};case"danceSmall":case"danceHop":case"danceStomp":{const s=Un(t,"musicBox")?[{k:"walk",to:{thing:"musicBox"},standoff:.95}]:[];return{behavior:e,steps:[...nn(t),{k:"look",at:{thing:"musicBox"},dur:.6},{k:"anim",name:"listen",dur:e==="danceSmall"?1.2:.7},...s,{k:"settle",activity:e}]}}case"plushBed":{const s=[...nn(t),{k:"look",at:{thing:"plush"},dur:.6},{k:"walk",to:{thing:"plush"},standoff:.5},{k:"anim",name:"reach",dur:.5},{k:"pick",id:"plush"},{k:"anim",name:"hug",dur:1.1},{k:"walk",to:{thing:"bed"},seat:"bed"},{k:"sit",on:"bed"},{k:"lie"}];return i.params.night?s.push({k:"do",fx:"sleep"},{k:"settle",activity:"sleeping"}):s.push({k:"settle",activity:"restBed"}),{behavior:e,steps:s}}case"plushPlay":return{behavior:e,steps:[...nn(t),{k:"look",at:{thing:"plush"},dur:.5},{k:"walk",to:{thing:"bed"},seat:"bed"},{k:"sit",on:"bed"},{k:"pick",id:"plush"},{k:"anim",name:"plushBounce",dur:2},{k:"settle",activity:"restBed"}]};case"readAtWindow":case"gazeAtWindow":{const s=[...nn(t),{k:"look",at:{thing:"chair"},dur:.55},{k:"look",at:{spot:"window"},dur:.6}];return e==="readAtWindow"&&s.push(...sn(t,"book")),s.push({k:"walk",to:{thing:"chair"},seat:"chair"},{k:"sit",on:"chair"},{k:"anim",name:"gazeOut",dur:1.6}),e==="readAtWindow"?s.push({k:"do",fx:"openBook"},{k:"anim",name:"readPage",dur:1.2},{k:"settle",activity:"reading"}):s.push({k:"settle",activity:"gazing"}),{behavior:e,steps:s}}case"teaAlone":{const s=t.doll.seat==="chair";return{behavior:e,steps:[...s?[]:nn(t),{k:"look",at:{thing:"table"},dur:.5},...s?[]:au(),{k:"anim",name:"sip",dur:1.6},{k:"do",fx:"drink"},{k:"look",at:{spot:"emptyPlacemat"},dur:1},{k:"look",at:{spot:"guestSeat"},dur:.8},{k:"settle",activity:"tea"}]}}case"teaParty":case"birthday":{const s=[...nn(t)];return e==="birthday"?s.push({k:"look",at:{thing:"cake"},dur:.6},{k:"anim",name:"gasp",dur:.7}):s.push({k:"look",at:{spot:"emptyPlacemat"},dur:.5}),s.push(...y_(t)),e==="birthday"&&s.push({k:"walk",to:{thing:"cake"},standoff:.5},{k:"pick",id:"cake"},{k:"put",id:"cake",dest:{surface:"table",slot:"c"}},{k:"do",fx:"candlesLit"}),s.push(...au(),{k:"anim",name:"offerCup",dur:1.2},{k:"do",fx:"passCup"},{k:"anim",name:"sip",dur:1.4},{k:"do",fx:"drink"}),e==="birthday"?s.push({k:"anim",name:"clap",dur:1.6},{k:"anim",name:"blow",dur:1},{k:"do",fx:"candlesOut"},{k:"anim",name:"cheer",dur:1.3},{k:"do",fx:"eatCake"},{k:"settle",activity:"birthday"}):s.push({k:"anim",name:"giggle",dur:.9},{k:"settle",activity:"party"}),{behavior:e,steps:s}}case"rainOuting":case"snowOuting":{const s=e==="rainOuting",r=[...nn(t),{k:"look",at:{spot:"window"},dur:.9},{k:"look",at:{thing:"boots"},dur:.5},...sn(t,"boots"),{k:"sit",on:"floor"},{k:"anim",name:"putOnBoots",dur:1.3},{k:"put",id:"boots",dest:{worn:!0}},{k:"stand"}];if(s&&r.push(...sn(t,"umbrella")),r.push({k:"walk",to:{spot:"doorIn"}},{k:"do",fx:"doorOpen"},{k:"garden",path:[Bs]}),s){const o=i.params.big?"jumpSplashBig":"jumpSplash";r.push({k:"do",fx:"umbrellaOpen"},{k:"garden",path:Po.slice(1)},{k:"anim",name:o,dur:1.1},{k:"do",fx:"splash"},{k:"anim",name:o,dur:1.1},{k:"do",fx:"splash"},{k:"do",fx:"soakGear"},{k:"anim",name:"lookUpRain",dur:1.2},{k:"garden",path:[...Po.slice(0,2)].reverse()},{k:"do",fx:"umbrellaClose"})}else r.push({k:"garden",path:[Po[1],{x:jo.x-.55,z:jo.z+.35}]},{k:"anim",name:"buildSnow",dur:2.6},{k:"do",fx:"buildSnowman"},{k:"anim",name:"cheer",dur:1.2},{k:"do",fx:"soakGear"},{k:"garden",path:[Po[1],Bs]});return r.push({k:"enter"},{k:"do",fx:"doorClose"}),s&&r.push({k:"put",id:"umbrella",dest:{floorNear:"door"}}),r.push({k:"sit",on:"floor"},{k:"anim",name:"takeOffBoots",dur:1},{k:"put",id:"boots",dest:{floorNear:"door"}},{k:"do",fx:"floorWet"},{k:"stand"},{k:"do",fx:"advanceTime"},{k:"look",at:{thing:"boots"},dur:.8},{k:"anim",name:"shakeOff",dur:.8},{k:"settle",activity:"idle"}),{behavior:e,steps:r}}case"wakeSun":return{behavior:e,steps:[{k:"anim",name:"squint",dur:1.3},{k:"anim",name:"stretchBed",dur:1.5},{k:"do",fx:"wake"},{k:"sit",on:"bed"},{k:"stand"},{k:"do",fx:"curtainsOpen"},{k:"walk",to:{spot:"window"}},{k:"anim",name:"stretchStand",dur:1.3},{k:"settle",activity:"watching"}]};case"wakeLamp":{const s=[{k:"anim",name:"stirDark",dur:1.2},{k:"do",fx:"wake"},{k:"sit",on:"bed"}];return s.push({k:"anim",name:"reach",dur:.6},{k:"do",fx:"lampOn"}),Un(t,"book")&&t.doll.holding!=="book"&&s.push({k:"stand"},...sn(t,"book"),{k:"walk",to:{thing:"bed"},seat:"bed"},{k:"sit",on:"bed"}),Un(t,"book")?s.push({k:"do",fx:"openBook"},{k:"settle",activity:"readingBed"}):s.push({k:"anim",name:"stretchBed",dur:1.2},{k:"settle",activity:"restBed"}),{behavior:e,steps:s}}case"bedtime":{const s=[...nn(t),{k:"anim",name:"rubEyes",dur:1.2},{k:"anim",name:"yawn",dur:1.1}];return(t.fixtures.lamp===2||t.fixtures.lamp===0)&&s.push({k:"walk",to:{thing:"lamp"},standoff:.6},{k:"anim",name:"reach",dur:.5},{k:"do",fx:"lampDim"}),i.params.plush&&t.doll.holding!=="plush"&&!bi(t,"plush","bed")&&s.push(...sn(t,"plush")),s.push({k:"walk",to:{thing:"bed"},seat:"bed"},{k:"sit",on:"bed"},{k:"lie"},{k:"do",fx:"sleep"},{k:"settle",activity:"sleeping"}),{behavior:e,steps:s}}case"lampOn":return{behavior:e,steps:[...nn(t),{k:"look",at:{thing:"lamp"},dur:.5},{k:"walk",to:{thing:"lamp"},standoff:.6},{k:"anim",name:"reach",dur:.5},{k:"do",fx:"lampOn"},{k:"settle",activity:"idle"}]};case"watchWeather":return{behavior:e,steps:[...nn(t),{k:"look",at:{spot:"window"},dur:.8},{k:"walk",to:{spot:"window"}},{k:"anim",name:"handsOnGlass",dur:2},{k:"settle",activity:"watching"}]};case"sitChair":return{behavior:e,steps:[...nn(t),{k:"look",at:{thing:"chair"},dur:.5},{k:"walk",to:{thing:"chair"},seat:"chair"},{k:"sit",on:"chair"},{k:"anim",name:"swingLegs",dur:1.8},{k:"settle",activity:"sitting"}]}}}function M_(i,t){const e=t.doll,n=e.posture==="sit"&&e.seat==="chair";switch(i.behavior){case"readAtWindow":if(n&&e.holding==="book")return{behavior:i.behavior,steps:[{k:"do",fx:"openBook"},{k:"settle",activity:"reading"}]};break;case"gazeAtWindow":if(n)return{behavior:i.behavior,steps:[{k:"settle",activity:"gazing"}]};break;case"teaAlone":if(n)return{behavior:i.behavior,steps:[{k:"settle",activity:"tea"}]};break;case"teaParty":if(n&&bi(t,"plush","table"))return{behavior:i.behavior,steps:[{k:"settle",activity:"party"}]};break;case"birthday":if(n&&bi(t,"plush","table"))return{behavior:i.behavior,steps:[{k:"settle",activity:"birthday"}]};break;case"sitChair":if(n)return{behavior:i.behavior,steps:[{k:"settle",activity:"sitting"}]};break}return Td(i,t)}function Ad(i){return Sd(i)==="left"?"gr":"gl"}function Ql(i){const t=Sd(i);return t==="left"?{mine:"l",guest:"r"}:t==="back"?{mine:"r",guest:"l"}:{mine:"r",guest:"l"}}function Ja(i){const t=i.furniture.chair;return ql(t,Je(i,"table"))<.8?"table":Fn(t,qn)?"window":ql(t,Je(i,"bed"))<.55?"bedside":"free"}function w_(i){const t=Je(i,"bed"),e=Math.max(0,Math.min(t.x1,qn.x1)-Math.max(t.x0,qn.x0)),n=Math.max(0,Math.min(t.z1,qn.z1)-Math.max(t.z0,qn.z0)),s=(t.x1-t.x0)*(t.z1-t.z0);return e*n/s>.45}function Pd(i){return(bi(i,"cupA","table")?1:0)+(bi(i,"cupB","table")?1:0)}function lu(i){const t=i.props.plush.loc;return t.at==="surface"&&t.on==="bed"&&t.slot==="pillow"}function cu(i){return bi(i,"plush","bed")}function $a(i,t){const e=i.props[t].loc;return e.at!=="floor"?!1:Fn(e,Oo)}function jl(i){const t=i.props.musicBox.flags;return!!t.open&&(t.tune??0)>0}function b_(i,t){if(i.doll.outside)return 1/0;const e=d_(i,t);return!e||!Un(i,t)?1/0:Math.hypot(e.x-i.doll.x,e.z-i.doll.z)}const fn=i=>!i.doll.asleep&&!i.doll.outside,mr=(i,t)=>Un(i,t),Ro=(i,t)=>(i.props[t].flags.wet??0)<.05,S_=[{rule:"R01",tier:0,deps:()=>["outfit"],when:i=>Yl(i,"outfit")>0&&!i.doll.outside?{behavior:"wearReact",params:{outfit:i.outfit}}:null},{rule:"G01",tier:0,deps:i=>["give",...i.gift?[i.gift]:[]],when:i=>i.gift&&fn(i)&&mr(i,i.gift)?{behavior:"receive",params:{id:i.gift}}:null},{rule:"G02",tier:0,deps:()=>["plush"],when:i=>i.props.plush.loc.at!=="floor"||!fn(i)||i.doll.holding==="plush"||i.gift||i.touch.plush!==(i.playerTick??i.tick)?null:b_(i,"plush")<1.7?{behavior:"hugPlush"}:null},{rule:"G03",tier:0,deps:()=>["dollPlace"],when:i=>{if(Yl(i,"dollPlace")===0||i.doll.outside)return null;const t=i.doll.seat==="bed"?"bed":i.doll.seat==="chair"?"chair":"floor",e=Math.hypot(i.doll.x-2.03,i.doll.z-1)<.9;return{behavior:"dollDrop",params:{where:t==="floor"&&e?"mirror":t}}}},{rule:"R09",tier:1,deps:()=>["boots","towel"],extra:i=>`wet${i.wetCount}`,when:i=>!fn(i)||Ro(i,"boots")||!mr(i,"boots")||!mr(i,"towel")?null:{behavior:"wipeBoots",specificity:2}},{rule:"R02",tier:2,deps:()=>["musicBox","outfit"],when:i=>!fn(i)||!jl(i)?null:{behavior:{dress:"danceElegant",pajamas:"danceSmall",day:"danceHop",rainwear:"danceStomp"}[i.outfit],specificity:2}},{rule:"R04",tier:2,deps:()=>["plush","outfit","bed"],when:i=>fn(i)&&i.outfit==="pajamas"&&lu(i)?{behavior:"plushBed",specificity:3,params:{night:i.time==="night"}}:null},{rule:"R04b",tier:2,deps:()=>["plush","bed"],when:i=>fn(i)&&cu(i)&&!lu(i)&&i.doll.holding!=="plush"?{behavior:"plushPlay",specificity:2}:null},{rule:"R05",tier:2,deps:()=>["chair","book"],when:i=>!fn(i)||Ja(i)!=="window"?null:mr(i,"book")?{behavior:"readAtWindow",specificity:2}:{behavior:"gazeAtWindow",specificity:1}},{rule:"R06",tier:2,deps:()=>["chair","table","cupA","cupB","cake","plush"],when:i=>{if(!fn(i)||Ja(i)!=="table")return null;const t=Pd(i),e=bi(i,"cake","table"),n=["chair","table","cupA","cupB","cake"],s=cu(i)?[]:["plush"];return t>=2&&e?{behavior:"birthday",specificity:4,deps:[...n,...s]}:t>=2?{behavior:"teaParty",specificity:3,deps:[...n,...s]}:t===1?{behavior:"teaAlone",specificity:2,params:{cake:e},deps:n}:null}},{rule:"R08",tier:2,deps:()=>["weather","umbrella","boots"],when:i=>!fn(i)||i.weather!=="rain"||i.time==="night"||!$a(i,"umbrella")||!$a(i,"boots")||!Ro(i,"boots")||!Ro(i,"umbrella")?null:{behavior:"rainOuting",specificity:3,params:{big:i.outfit==="rainwear"}}},{rule:"R08s",tier:2,deps:()=>["weather","boots"],when:i=>!fn(i)||i.weather!=="snow"||i.time==="night"||!$a(i,"boots")||!Ro(i,"boots")?null:{behavior:"snowOuting",specificity:2}},{rule:"R11",tier:2,deps:()=>["time","bed"],when:i=>!i.doll.asleep||i.time!=="morning"?null:w_(i)?{behavior:"wakeSun",specificity:2}:{behavior:"wakeLamp",specificity:2}},{rule:"X01",tier:3,deps:()=>["time","tidy"],when:i=>{if(!fn(i)||i.outfit==="pajamas")return null;const t=(i.touch.tidy??-1)>(i.touch.time??-1);return i.time==="night"||i.time==="evening"&&t?{behavior:"changeForBed"}:null}},{rule:"X02",tier:3,deps:()=>["time","lamp"],when:i=>fn(i)&&(i.time==="night"||i.time==="evening")&&i.fixtures.lamp===0?{behavior:"lampOn"}:null},{rule:"R10",tier:3,deps:()=>["time","outfit","bed","dollPlace"],when:i=>fn(i)&&i.time==="night"&&i.outfit==="pajamas"?{behavior:"bedtime",specificity:2,params:{plush:mr(i,"plush")}}:null},{rule:"X03",tier:4,deps:()=>["weather"],when:i=>fn(i)&&i.weather!=="sun"?{behavior:"watchWeather"}:null},{rule:"X04",tier:4,deps:()=>["chair"],when:i=>{if(!fn(i))return null;const t=Ja(i);return t==="free"||t==="bedside"?{behavior:"sitChair"}:null}}];function E_(i,t,e){const n=e.map(s=>`${s}:${Yl(i,s)}`);return t.extra&&n.push(t.extra(i)),`${t.rule}|${n.join(",")}`}function Nc(i,t,e={}){const n=[];for(const s of S_){const r=s.when(i);if(!r)continue;const o=r.deps??s.deps(i),a=E_(i,s,o);if(!e.includeFired&&i.fired[s.rule]===a)continue;let l=Math.max(-1,...o.map(c=>i.touch[c]??-1));n.push({rule:s.rule,behavior:r.behavior,tier:s.tier,deps:o,signature:a,novelty:l,specificity:r.specificity??1,params:r.params??{}})}return n}function T_(i){return[...i].sort((t,e)=>t.tier-e.tier||e.novelty-t.novelty||e.specificity-t.specificity||t.rule.localeCompare(e.rule))}function hu(i,t=[]){for(const e of Nc(i,void 0,{includeFired:!0}))t.includes(e.rule)||(i.fired[e.rule]=e.signature)}function A_(i,t){i.fired[t.rule]=t.signature}function P_(i,t){return Nc(i,void 0,{includeFired:!0}).find(e=>e.behavior===t)??null}class R_{constructor(){L(this,"pending",!0);L(this,"deferred",!1);L(this,"dragging",!1);L(this,"evaluations",0)}markDirty(){this.pending=!0}setDragging(t){this.dragging=t,t||(this.pending=!0)}actionEnded(){this.pending=!0,this.deferred=!1}isPending(){return this.pending||this.deferred}poll(t,e){if(this.dragging||!this.pending)return null;this.pending=!1,this.evaluations+=1;const n=T_(Nc(t))[0];if(!n)return null;if(e&&!e.settled){const s=t.playerTick??t.tick,r=n.novelty>=s&&(e.startTick??-1)<s;if(!e.interruptible||!(n.tier<e.tier||r))return this.deferred=!0,null}return n}}const P={teal:"#195C68",tealDark:"#103F4B",porcelain:"#F1F6F4",mint:"#B9DFD6",mintDeep:"#8CC7BA",berry:"#CC456A",berryDark:"#9C2F50",coral:"#E56861",gold:"#F0C951",goldDark:"#C99A2E",lavender:"#AC9ED9",lavenderDeep:"#8A79C4",sky:"#9FD3E8",skin:"#F5D4C0",blush:"#F29AA6",hair:"#6B3428",hairLight:"#8E4A35",ink:"#2B2233",rainCoat:"#F0C951",pajama:"#CFE3F5",pajamaDeep:"#7FA6D6",leaf:"#4FA37E",grass:"#6DBE96"},pi=(i,t,e,n=0)=>t>=i.x-n&&t<=i.x+i.w+n&&e>=i.y-n&&e<=i.y+i.h+n;class C_{constructor(t,e,n,s){L(this,"canvas");L(this,"store");L(this,"sfx");L(this,"getDay");L(this,"open",!1);L(this,"ctx");L(this,"w",1);L(this,"h",1);L(this,"dpr",1);L(this,"imgs",new Map);L(this,"page",-1);L(this,"drag",null);L(this,"pointer",null);L(this,"downAt",{x:0,y:0});L(this,"stripScroll",0);L(this,"stripDrag",null);L(this,"stamp",0);L(this,"openT",0);L(this,"t",0);L(this,"layoutCache",null);L(this,"onClose",null);L(this,"onSaved",null);L(this,"down",t=>{if(t.preventDefault(),this.sfx.unlock(),this.pointer!==null)return;this.pointer=t.pointerId;try{this.canvas.setPointerCapture(t.pointerId)}catch{}const{x:e,y:n}=this.pos(t);this.downAt={x:e,y:n};const s=this.layout();if(this.page===-1){for(let r=0;r<3;r++){const o=this.store.draft[r];if(o&&pi(s.frames[r],e,n,6)){this.drag={src:{from:"frame",index:r,id:o},x:e,y:n},this.sfx.play("lift");return}}for(const r of this.stripRects())if(pi(r.r,e,n,8)){this.drag={src:{from:"strip",id:r.id},x:e,y:n},this.sfx.play("lift");return}}pi(s.strip,e,n)&&(this.stripDrag={x:e,s:this.stripScroll})});L(this,"move",t=>{if(t.pointerId!==this.pointer)return;const{x:e,y:n}=this.pos(t);this.drag?(this.drag.x=e,this.drag.y=n):this.stripDrag&&(this.stripScroll=this.stripDrag.s-(e-this.stripDrag.x))});L(this,"up",t=>{if(t.pointerId!==this.pointer)return;this.pointer=null;const{x:e,y:n}=this.pos(t),s=this.layout(),r=Math.hypot(e-this.downAt.x,n-this.downAt.y)>8;if(this.stripDrag=null,this.drag){const o=this.drag.src;this.drag=null;const a=s.frames.findIndex(l=>pi(l,e,n,20));if(a>=0&&this.page===-1){const l=this.store.draft;if(o.from==="frame"){const c=l[a];l[a]=o.id,l[o.index]=c}else l[a]=o.id;this.sfx.play("stick"),this.store.saveDraft(),this.maybeCommit();return}if(o.from==="frame"&&r){this.store.draft[o.index]=null,this.sfx.play("page"),this.store.saveDraft();return}if(!r&&o.from==="strip"){const l=this.store.draft.indexOf(null);l>=0&&(this.store.draft[l]=o.id,this.sfx.play("stick"),this.store.saveDraft(),this.maybeCommit())}return}if(!r){if(pi(s.ribbon,e,n,10)||!pi(s.book,e,n)&&!pi(s.strip,e,n)){this.sfx.play("page"),this.hide();return}if(pi(s.prev,e,n,10)&&this.store.diaries.length){this.page=this.page===-1?this.store.diaries.length-1:Math.max(0,this.page-1),this.sfx.play("page");return}pi(s.next,e,n,10)&&this.page!==-1&&(this.page=this.page+1>=this.store.diaries.length?-1:this.page+1,this.sfx.play("page"))}});L(this,"cancel",t=>{t.pointerId===this.pointer&&(this.pointer=null,this.drag=null,this.stripDrag=null)});this.canvas=t,this.store=e,this.sfx=n,this.getDay=s,this.ctx=t.getContext("2d"),t.addEventListener("pointerdown",this.down),t.addEventListener("pointermove",this.move),t.addEventListener("pointerup",this.up),t.addEventListener("pointercancel",this.cancel),t.addEventListener("touchstart",r=>r.preventDefault(),{passive:!1})}show(){this.open=!0,this.page=-1,this.openT=0,this.canvas.style.display="block",this.resize()}hide(){this.open=!1,this.drag=null,this.pointer=null,this.canvas.style.display="none",this.onClose?.()}resize(){this.dpr=Math.min(window.devicePixelRatio||1,2),this.w=window.innerWidth,this.h=window.innerHeight,this.canvas.width=Math.round(this.w*this.dpr),this.canvas.height=Math.round(this.h*this.dpr),this.canvas.style.width=this.w+"px",this.canvas.style.height=this.h+"px",this.layoutCache=null,this.drag=null}img(t){let e=this.imgs.get(t.id);return e||(e=new Image,e.src=t.url,this.imgs.set(t.id,e)),e}layout(){if(this.layoutCache)return this.layoutCache;const t=this.w/this.h<.9,e=getComputedStyle(document.documentElement),n=(parseFloat(e.getPropertyValue("--sat"))||0)+10,s=(parseFloat(e.getPropertyValue("--sab"))||0)+10,r=t?Math.min(150,this.h*.18):Math.min(150,this.h*.2),o=Math.min(this.w-24,t?380:980),a=this.h-n-s-r-20,l={x:(this.w-o)/2,y:n,w:o,h:a},c={x:l.x+16,y:l.y+16,w:l.w-32,h:l.h-32},h=[];if(t){const p=Math.min((c.h-60)/3,(c.w-50)*3/4),_=p*4/3;for(let w=0;w<3;w++)h.push({x:c.x+(c.w-_)/2,y:c.y+18+w*(p+14),w:_,h:p})}else{const p=Math.min((c.w-90)/3,(c.h-90)*4/3),_=p*3/4,w=c.y+(c.h-_)/2;for(let v=0;v<3;v++)h.push({x:c.x+25+v*(p+20),y:w,w:p,h:_})}const d={x:0,y:this.h-s-r,w:this.w,h:r},u=Math.min((r-30)*4/3,(this.w-32-28)/3),f=u*3/4,g={x:c.x-6,y:c.y+c.h-64,w:64,h:64},x={x:c.x+c.w-58,y:c.y+c.h-64,w:64,h:64},m={x:l.x+l.w-70,y:l.y-4,w:44,h:70};return this.layoutCache={portrait:t,book:l,page:c,frames:h,strip:d,thumbW:u,thumbH:f,prev:g,next:x,ribbon:m},this.layoutCache}stripRects(){const t=this.layout(),e=this.store.loosePhotos().filter(o=>!this.store.draft.includes(o.id)).slice().reverse(),n=14,s=e.length*(t.thumbW+n),r=Math.max(0,s-this.w+30);return this.stripScroll=Math.max(0,Math.min(r,this.stripScroll)),e.map((o,a)=>({id:o.id,r:{x:16+a*(t.thumbW+n)-this.stripScroll,y:t.strip.y+(t.strip.h-t.thumbH)/2+2,w:t.thumbW,h:t.thumbH}}))}pos(t){return{x:t.clientX,y:t.clientY}}maybeCommit(){if(this.store.draft.every(Boolean)){const{day:t,season:e}=this.getDay();this.stamp=1,setTimeout(()=>{this.store.commitDraft(t,e).then(n=>{n&&(this.sfx.play("chime"),this.page=this.store.diaries.length-1,this.onSaved?.(this.store.diaries.length))})},700)}}photoRect(t,e,n,s=0){if(t.save(),t.translate(e.x+e.w/2,e.y+e.h/2),t.rotate(s),t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=8,t.shadowOffsetY=3,t.fillStyle="#ffffff",t.fillRect(-e.w/2-6,-e.h/2-6,e.w+12,e.h+12),t.shadowColor="transparent",n){const r=this.img(n);r.complete&&r.naturalWidth?t.drawImage(r,-e.w/2,-e.h/2,e.w,e.h):(t.fillStyle=P.mint,t.fillRect(-e.w/2,-e.h/2,e.w,e.h))}t.restore()}emptyFrame(t,e,n){t.save(),t.fillStyle="rgba(185,223,214,0.35)",t.fillRect(e.x,e.y,e.w,e.h),t.strokeStyle=P.mintDeep,t.setLineDash([10,8]),t.lineWidth=3,t.strokeRect(e.x+3,e.y+3,e.w-6,e.h-6),t.setLineDash([]);const s=.6+.4*Math.max(0,Math.sin(this.t*2-n*.9));t.fillStyle=`rgba(240,201,81,${s})`;const r=Math.min(26,e.w*.12);for(const[o,a,l,c]of[[e.x,e.y,1,1],[e.x+e.w,e.y,-1,1],[e.x,e.y+e.h,1,-1],[e.x+e.w,e.y+e.h,-1,-1]])t.beginPath(),t.moveTo(o,a),t.lineTo(o+l*r,a),t.lineTo(o,a+c*r),t.closePath(),t.fill();t.fillStyle=P.mintDeep;for(let o=0;o<=n;o++)t.beginPath(),t.arc(e.x+e.w/2+(o-n/2)*14,e.y+e.h-16,4.5,0,Math.PI*2),t.fill();t.restore()}seal(t,e,n,s,r){t.save(),t.translate(e,n),t.scale(r,r),t.fillStyle=P.gold,t.beginPath();for(let o=0;o<24;o++){const a=o/24*Math.PI*2,l=o%2?30:36;t.lineTo(Math.cos(a)*l,Math.sin(a)*l)}if(t.closePath(),t.fill(),t.fillStyle=P.berry,t.beginPath(),t.arc(0,0,24,0,Math.PI*2),t.fill(),t.fillStyle="#fff",t.strokeStyle="#fff",t.lineWidth=3,s==="spring")for(let o=0;o<5;o++){const a=o/5*Math.PI*2;t.beginPath(),t.arc(Math.cos(a)*8,Math.sin(a)*8,6,0,Math.PI*2),t.fill()}else if(s==="summer"){t.beginPath(),t.arc(0,0,8,0,Math.PI*2),t.fill();for(let o=0;o<8;o++){const a=o/8*Math.PI*2;t.beginPath(),t.moveTo(Math.cos(a)*11,Math.sin(a)*11),t.lineTo(Math.cos(a)*17,Math.sin(a)*17),t.stroke()}}else if(s==="autumn")t.beginPath(),t.moveTo(0,-15),t.quadraticCurveTo(15,-2,0,15),t.quadraticCurveTo(-15,-2,0,-15),t.fill();else for(let o=0;o<6;o++){const a=o/6*Math.PI*2;t.beginPath(),t.moveTo(0,0),t.lineTo(Math.cos(a)*15,Math.sin(a)*15),t.stroke()}t.restore()}draw(t){if(!this.open)return;this.t+=t,this.openT=Math.min(1,this.openT+t*4);const e=this.ctx,n=this.layout();e.setTransform(this.dpr,0,0,this.dpr,0,0),e.clearRect(0,0,this.w,this.h),e.fillStyle=`rgba(8,30,38,${.72*this.openT})`,e.fillRect(0,0,this.w,this.h);const s=.85+.15*this.openT;if(e.save(),e.translate(this.w/2,n.book.y+n.book.h/2),e.scale(s,s),e.translate(-this.w/2,-(n.book.y+n.book.h/2)),e.fillStyle=P.teal,e.beginPath(),e.roundRect(n.book.x,n.book.y,n.book.w,n.book.h,18),e.fill(),e.strokeStyle="rgba(185,223,214,0.6)",e.setLineDash([8,6]),e.lineWidth=2,e.beginPath(),e.roundRect(n.book.x+7,n.book.y+7,n.book.w-14,n.book.h-14,14),e.stroke(),e.setLineDash([]),e.fillStyle=P.porcelain,e.beginPath(),e.roundRect(n.page.x,n.page.y,n.page.w,n.page.h,10),e.fill(),n.portrait||(e.fillStyle="rgba(16,63,75,0.08)",e.fillRect(n.page.x+n.page.w/2-3,n.page.y,6,n.page.h)),e.fillStyle=P.berry,e.beginPath(),e.moveTo(n.ribbon.x,n.ribbon.y),e.lineTo(n.ribbon.x+n.ribbon.w,n.ribbon.y),e.lineTo(n.ribbon.x+n.ribbon.w,n.ribbon.y+n.ribbon.h),e.lineTo(n.ribbon.x+n.ribbon.w/2,n.ribbon.y+n.ribbon.h-14),e.lineTo(n.ribbon.x,n.ribbon.y+n.ribbon.h),e.closePath(),e.fill(),this.page===-1){for(let o=0;o<3;o++){const a=this.store.draft[o],l=this.drag?.src.from==="frame"&&this.drag.src.index===o;a&&!l?this.photoRect(e,n.frames[o],this.store.photo(a),(o-1)*.015):this.emptyFrame(e,n.frames[o],o)}if(this.stamp>0){this.stamp=Math.max(0,this.stamp-t*.8);const o=n.frames[2];this.seal(e,o.x+o.w-10,o.y+o.h-10,this.getDay().season,1+this.stamp*1.5)}}else{const o=this.store.diaries[this.page];if(o){o.photos.forEach((l,c)=>this.photoRect(e,n.frames[c],this.store.photo(l),(c-1)*.02));const a=n.frames[2];this.seal(e,a.x+a.w-10,a.y+a.h-10,o.season,1),e.fillStyle=P.mintDeep;for(let l=0;l<=Math.min(6,this.store.diaries.length-1-this.page);l++)e.beginPath(),e.arc(n.page.x+24+l*14,n.page.y+18,4,0,Math.PI*2),e.fill()}}const r=(o,a,l)=>{l&&(e.save(),e.fillStyle=P.mint,e.beginPath(),a<0?(e.moveTo(o.x+6,o.y+o.h),e.lineTo(o.x+6,o.y+18),e.quadraticCurveTo(o.x+30,o.y+30,o.x+o.w-10,o.y+o.h)):(e.moveTo(o.x+o.w,o.y+o.h),e.lineTo(o.x+o.w,o.y+18),e.quadraticCurveTo(o.x+o.w-24,o.y+30,o.x+10,o.y+o.h)),e.closePath(),e.fill(),e.strokeStyle=P.mintDeep,e.lineWidth=2,e.stroke(),e.restore())};if(r(n.prev,-1,this.store.diaries.length>0&&(this.page===-1||this.page>0)),r(n.next,1,this.page!==-1),e.restore(),e.fillStyle="rgba(16,63,75,0.85)",e.fillRect(n.strip.x,n.strip.y,n.strip.w,n.strip.h),e.fillStyle=P.berry,e.fillRect(n.strip.x,n.strip.y,n.strip.w,5),this.page===-1)for(const o of this.stripRects()){if(this.drag?.src.from==="strip"&&this.drag.src.id===o.id)continue;const a=this.openT<1||this.store.draft.includes(null)?Math.sin(this.t*3+o.r.x*.05)*.02:0;this.photoRect(e,o.r,this.store.photo(o.id),a)}if(this.drag){const o=this.store.photo(this.drag.src.id),a={x:this.drag.x-n.thumbW*.6,y:this.drag.y-n.thumbH*.6,w:n.thumbW*1.2,h:n.thumbH*1.2};this.photoRect(e,a,o,.05)}}debugRects(){const t=this.layout();return{frames:t.frames,strip:this.stripRects(),ribbon:t.ribbon,prev:t.prev,next:t.next}}}const I_="dollhouse365",D_=30;function Qa(i){return new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)})}class L_{constructor(){L(this,"photos",[]);L(this,"diaries",[]);L(this,"draft",[null,null,null]);L(this,"persistent",!1);L(this,"db",null)}async init(){try{if(!("indexedDB"in globalThis))return;this.db=await new Promise((n,s)=>{const r=indexedDB.open(I_,1);r.onupgradeneeded=()=>{const o=r.result;o.objectStoreNames.contains("photos")||o.createObjectStore("photos",{keyPath:"id"}),o.objectStoreNames.contains("diaries")||o.createObjectStore("diaries",{keyPath:"id"}),o.objectStoreNames.contains("meta")||o.createObjectStore("meta",{keyPath:"k"})},r.onsuccess=()=>n(r.result),r.onerror=()=>s(r.error),setTimeout(()=>s(new Error("idb timeout")),4e3)});const t=this.db.transaction(["photos","diaries","meta"],"readonly");this.photos=(await Qa(t.objectStore("photos").getAll())).sort((n,s)=>n.created-s.created),this.diaries=(await Qa(t.objectStore("diaries").getAll())).sort((n,s)=>n.created-s.created);const e=await Qa(t.objectStore("meta").get("draft"));e&&Array.isArray(e.v)&&e.v.length===3&&(this.draft=e.v.map(n=>n&&this.photo(n)?n:null)),this.persistent=!0}catch{this.db=null,this.persistent=!1}}photo(t){return this.photos.find(e=>e.id===t)}async put(t,e){if(this.db)try{const n=this.db.transaction(t,"readwrite");n.objectStore(t).put(e),await new Promise((s,r)=>{n.oncomplete=()=>s(),n.onerror=()=>r(n.error),n.onabort=()=>r(n.error)})}catch{this.persistent=!1}}async del(t,e){if(this.db)try{this.db.transaction(t,"readwrite").objectStore(t).delete(e)}catch{}}async addPhoto(t,e){const n={id:`p${Date.now()}${Math.floor(Math.random()*1e3)}`,url:t,created:Date.now(),day:e};this.photos.push(n);const s=new Set([...this.diaries.flatMap(r=>r.photos),...this.draft.filter(Boolean)]);for(;this.photos.length>D_;){const r=this.photos.find(o=>!s.has(o.id));if(!r)break;this.photos=this.photos.filter(o=>o!==r),this.del("photos",r.id)}return await this.put("photos",n),n}async saveDraft(){await this.put("meta",{k:"draft",v:this.draft})}async commitDraft(t,e){if(this.draft.some(s=>!s))return null;const n={id:`d${Date.now()}`,photos:this.draft.slice(),created:Date.now(),day:t,season:e};return this.diaries.push(n),this.draft=[null,null,null],await this.put("diaries",n),await this.saveDraft(),n}loosePhotos(){const t=new Set(this.diaries.flatMap(e=>e.photos));return this.photos.filter(e=>!t.has(e.id))}}const ii=.15,We=Math.ceil(Ct.W/ii),qs=Math.ceil(Ct.D/ii);function N_(i,t){const e=new Uint8Array(We*qs),n=[...Rc];for(const r of["chair","table","bed","lamp"])t.ignore?.includes(r)||n.push(Je(i,r));const s=l_*.85;for(let r=0;r<qs;r++)for(let o=0;o<We;o++){const a=(o+.5)*ii,l=(r+.5)*ii;let c=a<s*.6||a>Ct.W-s*.6||l<s*.6||l>Ct.D-.05;if(!c){for(const h of n)if(a>h.x0-s&&a<h.x1+s&&l>h.z0-s&&l<h.z1+s){c=!0;break}}e[r*We+o]=c?1:0}return e}function tc(i){return[Math.min(We-1,Math.max(0,Math.floor(i.x/ii))),Math.min(qs-1,Math.max(0,Math.floor(i.z/ii)))]}function uu(i,t,e){if(!i[e*We+t])return[t,e];for(let n=1;n<12;n++){let s=null,r=1/0;for(let o=-n;o<=n;o++)for(let a=-n;a<=n;a++){if(Math.max(Math.abs(o),Math.abs(a))!==n)continue;const l=t+a,c=e+o;if(l<0||c<0||l>=We||c>=qs||i[c*We+l])continue;const h=a*a+o*o;h<r&&(r=h,s=[l,c])}if(s)return s}return null}function du(i,t,e){const n=Math.hypot(e.x-t.x,e.z-t.z),s=Math.max(2,Math.ceil(n/.05));for(let r=1;r<s;r++){const o=r/s,[a,l]=tc({x:t.x+(e.x-t.x)*o,z:t.z+(e.z-t.z)*o});if(i[l*We+a])return!1}return!0}function ec(i,t,e,n={}){const s=N_(i,n),[r,o]=tc(t),[a,l]=tc(e),c=uu(s,r,o),h=uu(s,a,l);if(!c||!h)return null;const d=h[0]===a&&h[1]===l?e:{x:(h[0]+.5)*ii,z:(h[1]+.5)*ii};if(du(s,t,d)&&!s[l*We+a])return[d];const u=We*qs,f=new Float32Array(u).fill(1/0),g=new Float32Array(u).fill(1/0),x=new Int32Array(u).fill(-1),m=new Uint8Array(u),p=[],_=c[1]*We+c[0],w=h[1]*We+h[0],v=b=>{const C=Math.abs(b%We-h[0]),N=Math.abs(Math.floor(b/We)-h[1]);return Math.max(C,N)+(Math.SQRT2-1)*Math.min(C,N)};for(f[_]=0,g[_]=v(_),p.push(_);p.length;){let b=0;for(let G=1;G<p.length;G++)g[p[G]]<g[p[b]]&&(b=G);const C=p[b];if(p.splice(b,1),C===w)break;if(m[C])continue;m[C]=1;const N=C%We,U=Math.floor(C/We);for(let G=-1;G<=1;G++)for(let z=-1;z<=1;z++){if(!G&&!z)continue;const V=N+z,tt=U+G;if(V<0||tt<0||V>=We||tt>=qs)continue;const Y=tt*We+V;if(s[Y]||m[Y]||G&&z&&(s[U*We+V]||s[tt*We+N]))continue;const H=f[C]+(G&&z?Math.SQRT2:1);H<f[Y]&&(f[Y]=H,g[Y]=H+v(Y),x[Y]=C,p.push(Y))}}if(x[w]===-1&&w!==_)return null;const S=[];for(let b=w;b!==-1&&b!==_;b=x[b])S.push({x:(b%We+.5)*ii,z:(Math.floor(b/We)+.5)*ii});S.reverse(),S[S.length-1]=d;const A=[];let R=t,y=0;for(;y<S.length;){let b=S.length-1;for(;b>y&&!du(s,R,S[b]);)b--;A.push(S[b]),R=S[b],y=b+1}return A}const Ps=i=>Math.sin(Math.min(1,Math.max(0,i))*Math.PI),fu=i=>i*i*(3-2*i),jt=(i,t)=>Math.sin(i*Math.PI*2*t);function Ri(i,t){i.lArmPitch+=(2.7-i.lArmPitch)*t,i.rArmPitch+=(2.7-i.rArmPitch)*t,i.lElbow+=(.3-i.lElbow)*t,i.rElbow+=(.3-i.rElbow)*t,i.lArmOut+=(.35-i.lArmOut)*t,i.rArmOut+=(.35-i.rArmOut)*t}function Rs(i,t,e){e!=="l"&&(i.rArmPitch+=(1.55-i.rArmPitch)*t,i.rElbow+=(2.35-i.rElbow)*t,i.rArmOut+=(.05-i.rArmOut)*t),e!=="r"&&(i.lArmPitch+=(1.55-i.lArmPitch)*t,i.lElbow+=(2.35-i.lElbow)*t,i.lArmOut+=(.05-i.lArmOut)*t)}function pu(i,t){i.lArmOut+=(.75-i.lArmOut)*t,i.rArmOut+=(.75-i.rArmOut)*t,i.lArmPitch+=(.15-i.lArmPitch)*t,i.rArmPitch+=(.15-i.rArmPitch)*t,i.lElbow+=(.25-i.lElbow)*t,i.rElbow+=(.25-i.rElbow)*t}function nc(i,t,e,n){const s=jt(t,e);i.lLegPitch+=Math.max(0,s)*n,i.lKnee+=Math.max(0,s)*n*1.6,i.rLegPitch+=Math.max(0,-s)*n,i.rKnee+=Math.max(0,-s)*n*1.6,i.lArmPitch+=-s*.6,i.rArmPitch+=s*.6,i.lElbow+=.6,i.rElbow+=.6,i.y+=Math.abs(s)*.03}function ic(i,t,e,n,s){const r=Ps(t);switch(i){case"lookDownDress":n.headPitch+=.45*r,n.lArmOut+=.45*r,n.rArmOut+=.45*r,n.lElbow+=.3*r,n.rElbow+=.3*r,n.flare+=.25*r,n.gazeY-=.8*r,n.happy=Math.max(n.happy,r*.3);break;case"curtsyTwirl":if(t<.45){const o=Ps(t/.45);pu(n,o),n.lKnee+=.45*o,n.rKnee+=.3*o,n.lLegPitch-=.15*o,n.y-=.08*o,n.headPitch+=.25*o,n.flare+=.35*o}else{const o=(t-.45)/.55;s.spin=fu(o)*Math.PI*2,n.flare+=.9*Ps(o),Ri(n,.5*Ps(o)),n.happy=Math.max(n.happy,Ps(o))}break;case"yawnStretch":Ri(n,r),n.mouth=Math.max(n.mouth,r),n.eye=Math.min(n.eye,1-.75*r),n.lean-=.12*r,n.headPitch-=.2*r;break;case"stompHood":nc(n,e,2.2,.55),s.hood=r,n.happy=Math.max(n.happy,.6*r);break;case"hopHappy":s.lift+=Math.abs(jt(t,1.5))*.16*r,n.lKnee+=.25*r,n.rKnee+=.25*r,Ri(n,.35*r),n.happy=Math.max(n.happy,r);break;case"hug":n.headRoll+=.25*r,n.roll+=jt(e,.6)*.06*r,n.happy=Math.max(n.happy,r);break;case"dabFace":Rs(n,r,"both"),n.headRoll+=jt(e,2)*.12*r,n.eye=Math.min(n.eye,1-r*.9);break;case"sip":Rs(n,r,"r"),n.headPitch-=.18*r,n.eye=Math.min(n.eye,1-.5*r);break;case"admire":n.lean+=.15*r,n.headPitch+=.35*r,n.happy=Math.max(n.happy,r),n.brow+=.6*r;break;case"twirlUmbrella":s.spin=fu(t)*Math.PI*2,n.happy=Math.max(n.happy,r),n.flare+=.4*r;break;case"putOnBoots":case"takeOffBoots":n.lean+=.45*r,n.lArmPitch+=1.1*r,n.rArmPitch+=1.1*r,n.lElbow-=.1*r,n.rElbow-=.1*r,n.lKnee+=(jt(t,2)>0?.9:.2)*r,n.rKnee+=(jt(t,2)>0?.2:.9)*r,n.headPitch+=.4*r;break;case"stomp":nc(n,e,2.4,.6),n.happy=Math.max(n.happy,r);break;case"bounce":s.lift+=Math.abs(jt(t,2))*.12*r,Ri(n,.3*r),n.happy=Math.max(n.happy,r);break;case"swingLegs":n.lKnee+=jt(e,1.2)*.35*r,n.rKnee-=jt(e,1.2)*.35*r,n.happy=Math.max(n.happy,.5*r);break;case"mirrorPose":s.spin=Math.sin(t*Math.PI*2)*.5,n.rArmOut+=.7*r,n.rElbow+=1.5*r,n.rArmPitch-=.2*r,n.headRoll+=.25*r,n.flare+=.3*r,n.happy=Math.max(n.happy,r);break;case"shakeOff":n.roll+=jt(e,5)*.12*r,n.headRoll+=jt(e,5)*.2*r,n.eye=Math.min(n.eye,1-r),n.happy=Math.max(n.happy,r*.7),n.flare+=.25*r;break;case"wipe":n.lean+=.4*r,n.rArmPitch+=(1+jt(e,2.5)*.25)*r,n.rElbow+=(.8+jt(e,2.5)*.4)*r,n.lArmPitch+=.9*r,n.lElbow+=.5*r,n.headPitch+=.45*r;break;case"yawn":Rs(n,.8*r,"r"),n.mouth=Math.max(n.mouth,r),n.eye=Math.min(n.eye,1-.8*r),n.headPitch-=.15*r;break;case"rubEyes":Rs(n,r,"both"),n.lElbow+=jt(e,3)*.15*r,n.rElbow-=jt(e,3)*.15*r,n.eye=Math.min(n.eye,1-r),n.headPitch+=.15*r;break;case"listen":n.headRoll+=.3*r,n.rArmPitch+=1*r,n.rElbow+=2.1*r,n.rArmOut+=.55*r,n.brow+=.7*r,n.gazeY+=.4*r;break;case"curtsy":pu(n,r),n.lKnee+=.5*r,n.rKnee+=.35*r,n.y-=.1*r,n.headPitch+=.3*r,n.lean+=.12*r,n.flare+=.35*r,n.happy=Math.max(n.happy,r);break;case"reach":n.rArmPitch+=1.3*r,n.rElbow-=.1*r,n.lean+=.12*r;break;case"plushBounce":n.lArmPitch+=(1.2+jt(e,1.5)*.4)*r,n.rArmPitch+=(1.2+jt(e,1.5)*.4)*r,n.happy=Math.max(n.happy,r);break;case"gazeOut":n.headRoll+=.12*r,n.brow+=.3*r;break;case"readPage":n.rArmOut+=jt(t,1)*.4*r,n.headPitch+=.35*r;break;case"offerCup":n.rArmPitch+=1.2*r,n.rArmOut-=.2*r,n.rElbow-=.1*r,n.happy=Math.max(n.happy,r*.7),n.lean+=.15*r;break;case"gasp":Rs(n,r,"both"),n.lArmOut+=.3*r,n.rArmOut+=.3*r,n.mouth=Math.max(n.mouth,r),n.brow+=r,s.lift+=r*.06;break;case"clap":{const o=(jt(e,2.5)+1)/2;n.lArmPitch+=1.25*r,n.rArmPitch+=1.25*r,n.lArmOut+=(-.25+o*.45)*r,n.rArmOut+=(-.25+o*.45)*r,n.lElbow+=.5*r,n.rElbow+=.5*r,n.happy=Math.max(n.happy,r);break}case"blow":n.lean+=.3*r,n.mouth=Math.max(n.mouth,r),n.headPitch+=.2*r,n.eye=Math.min(n.eye,1-.5*r);break;case"cheer":Ri(n,r),s.lift+=Math.abs(jt(t,1))*(s.seated?.04:.15)*r,n.happy=Math.max(n.happy,r),n.mouth=Math.max(n.mouth,.6*r);break;case"jumpSplash":case"jumpSplashBig":{const o=i==="jumpSplashBig"?1.5:1,a=Ps(Math.min(1,Math.max(0,(t-.2)/.6)));s.lift+=a*.32*o,n.lKnee+=a*.9,n.rKnee+=a*.9,n.lLegPitch+=a*.4,n.rLegPitch+=a*.4,o>1&&Ri(n,a),n.happy=Math.max(n.happy,r),n.flare+=a*.5;break}case"lookUpRain":n.headPitch-=.5*r,n.mouth=Math.max(n.mouth,.7*r),n.happy=Math.max(n.happy,.5*r);break;case"buildSnow":n.lean+=.55*r,n.lKnee+=.6*r,n.rKnee+=.6*r,n.lLegPitch+=.3*r,n.rLegPitch+=.3*r,n.y-=.12*r,n.lArmPitch+=(1+jt(e,1.5)*.3)*r,n.rArmPitch+=(1-jt(e,1.5)*.3)*r,n.happy=Math.max(n.happy,r);break;case"squint":n.eye=Math.min(n.eye,.25),n.headYaw+=.4*r,n.lArmPitch+=1*r,n.lElbow+=1.5*r,n.brow-=.4*r;break;case"stretchBed":Ri(n,r),n.mouth=Math.max(n.mouth,.8*r),n.eye=Math.min(n.eye,1-.5*r);break;case"stretchStand":Ri(n,r),n.lean-=.12*r,n.happy=Math.max(n.happy,r);break;case"stirDark":n.eye=Math.min(n.eye,t),n.headRoll+=jt(e,.8)*.1*r;break;case"handsOnGlass":n.lArmPitch+=1.35*r,n.rArmPitch+=1.35*r,n.lElbow+=.5*r,n.rElbow+=.5*r,n.lean+=.12*r,n.headRoll+=jt(e,.4)*.15*r;break;case"puzzled":n.headRoll+=.35*r,n.brow+=.8*r,n.lArmOut+=.35*r,n.rArmOut+=.35*r,n.lElbow+=1*r,n.rElbow+=1*r;break;case"wave":n.rArmPitch+=2.4*r,n.rArmOut+=.35*r,n.rElbow+=(.6+jt(e,2.5)*.4)*r,n.happy=Math.max(n.happy,r);break;case"bow":n.lean+=.45*r,n.headPitch+=.3*r;break;case"giggle":n.roll+=jt(e,4)*.05*r,Rs(n,.6*r,"both"),n.happy=Math.max(n.happy,r);break}}function U_(i,t,e,n,s){switch(i){case"reading":case"readingBed":e.headPitch+=.4+jt(t,.07)*.05,e.gazeY-=.8,t%7>5.6&&i==="reading"&&(e.headPitch-=.45,e.gazeY+=.9);break;case"gazing":case"watching":e.headRoll+=jt(t,.15)*.1,e.brow+=.2,i==="watching"&&(e.lArmPitch+=1.2,e.rArmPitch+=1.2,e.lElbow+=.6,e.rElbow+=.6),n.seated&&(e.lKnee+=jt(t,.6)*.18,e.rKnee-=jt(t,.6)*.18);break;case"tea":case"party":case"birthday":{const r=t%6;if(r>4.4&&r<5.6){const o=(r-4.4)/1.2;ic("sip",o,t,e,n)}i!=="tea"&&(e.happy=Math.max(e.happy,.4+.4*Math.max(0,jt(t,.2)))),e.lKnee+=jt(t,.5)*.12,e.rKnee-=jt(t,.5)*.12;break}case"sleeping":e.eye=0,e.lean+=jt(t,.22)*.02,e.mouth=0;break;case"cuddle":case"restBed":e.roll+=jt(t,.3)*.05,e.happy=Math.max(e.happy,.5+.5*Math.max(0,jt(t,.12)));break;case"danceElegant":{n.spin=t*2.6%(Math.PI*2),e.flare+=1;const r=.5+.5*jt(t,.25);e.lArmPitch+=.4+r*1.8,e.lArmOut+=.6,e.rArmOut+=1.1-r*.4,e.rElbow+=.3,e.headRoll+=.2,e.happy=1,n.lift+=Math.abs(jt(t,.83))*.05;break}case"danceSmall":e.roll+=jt(t,.35)*.13,e.headRoll+=jt(t,.35)*.2,e.eye=Math.min(e.eye,.35),e.lArmPitch+=.7,e.rArmPitch+=.7,e.lArmOut-=.12,e.rArmOut-=.12,e.lElbow+=1.2,e.rElbow+=1.2,e.lKnee+=Math.max(0,jt(t,.35))*.15,e.rKnee+=Math.max(0,-jt(t,.35))*.15,e.mouth=.25+.15*Math.max(0,jt(t,.7)),e.flare+=.08*Math.abs(jt(t,.35));break;case"danceHop":{n.lift+=Math.abs(jt(t,1.1))*.14;const r=(jt(t,2.2)+1)/2;e.lArmPitch+=1.3,e.rArmPitch+=1.3,e.lArmOut+=-.2+r*.5,e.rArmOut+=-.2+r*.5,e.lElbow+=.5,e.rElbow+=.5,e.lKnee+=.3*Math.abs(jt(t,1.1)),e.rKnee+=.3*Math.abs(jt(t,1.1)),e.happy=1,e.flare+=.25*Math.abs(jt(t,1.1));break}case"danceStomp":nc(e,t,1.7,.7),e.happy=.8,n.spin=Math.sin(t*.8)*.4;break;case"sitting":e.lKnee+=jt(t,.7)*.3,e.rKnee-=jt(t,.7)*.3,e.headYaw+=jt(t,.08)*.4;break;case"mirror":n.spin=Math.sin(t*.5)*.35,e.headRoll+=.15,e.happy=.6,e.rArmOut+=.5,e.rElbow+=1.2;break;default:e.roll+=jt(t,.18)*.015,e.headRoll+=jt(t,.11)*.05;break}s==="plush"&&(i==="cuddle"||i==="restBed"||i==="idle"||i==="danceSmall")&&(e.lArmPitch=.85,e.rArmPitch=.85,e.lElbow=1.7,e.rElbow=1.7,e.lArmOut=-.05,e.rArmOut=-.05)}function F_(i,t,e){const n=Math.sin(t);i.lLegPitch+=n*.5*e,i.rLegPitch-=n*.5*e,i.lKnee+=Math.max(0,-Math.sin(t-.6))*.7*e,i.rKnee+=Math.max(0,Math.sin(t-.6))*.7*e,i.lArmPitch-=n*.4*e,i.rArmPitch+=n*.4*e,i.y+=Math.abs(Math.cos(t))*.025*e-.01*e,i.roll+=n*.03*e,i.flare+=.08*e}const Rd=["y","lean","roll","twist","headYaw","headPitch","headRoll","lArmPitch","lArmOut","lElbow","rArmPitch","rArmOut","rElbow","lLegPitch","lLegOut","lKnee","rLegPitch","rLegOut","rKnee","flare","sit","eye","happy","mouth","brow","gazeX","gazeY"];function ja(){return{y:0,lean:0,roll:0,twist:0,headYaw:0,headPitch:0,headRoll:0,lArmPitch:.05,lArmOut:.14,lElbow:.18,rArmPitch:.05,rArmOut:.14,rElbow:.18,lLegPitch:0,lLegOut:.02,lKnee:0,rLegPitch:0,rLegOut:.02,rKnee:0,flare:0,sit:0,eye:1,happy:0,mouth:0,brow:0,gazeX:0,gazeY:0}}function mu(i,t){for(const e of Rd)i[e]=t[e];return i}function k_(i,t,e,n=10){const s=1-Math.exp(-n*e);for(const r of Rd){const o=r==="eye"?Math.min(1,s*2.2):s;i[r]+=(t[r]-i[r])*o}}function gu(i,t){i.y=t+.07-.86,i.lLegPitch=i.rLegPitch=1.5,i.lKnee=i.rKnee=1.45,i.lLegOut=.06,i.rLegOut=.06,i.sit=1,i.lean=.05}function O_(i){i.y=.16-.86,i.lLegPitch=i.rLegPitch=1.45,i.lKnee=.25,i.rKnee=.15,i.lLegOut=.12,i.rLegOut=.12,i.sit=1,i.lean=.18}const xu=1.75,z_=.64,B_=.56;function Ci(i,t){return Math.atan2(Math.sin(i-t),Math.cos(i-t))}class G_{constructor(t,e){L(this,"rig");L(this,"world");L(this,"pose",ja());L(this,"target",ja());L(this,"pos",new T);L(this,"yaw",0);L(this,"roll",0);L(this,"rollTarget",0);L(this,"spin",0);L(this,"lift",0);L(this,"hood",0);L(this,"plan",null);L(this,"cand",null);L(this,"idx",0);L(this,"stepT",0);L(this,"data",{});L(this,"anim",null);L(this,"overlay",[]);L(this,"lookPt",null);L(this,"lookUntil",0);L(this,"attendPt",null);L(this,"wanderPt",null);L(this,"wanderNext",0);L(this,"blinkNext",2);L(this,"blinkT",-1);L(this,"walkPhase",0);L(this,"walking",0);L(this,"trans",null);L(this,"vel",new T);L(this,"lastPos",new T);L(this,"lastYaw",0);L(this,"held",!1);L(this,"heldTarget",new T);L(this,"now",0);L(this,"startTick",-1);L(this,"onPlanEnd",null);L(this,"trace",[]);this.rig=t,this.world=e;const n=e.state.doll;this.syncFromState(),this.lastPos.copy(this.pos),this.lastYaw=n.yaw}get s(){return this.world.state}syncFromState(){const t=this.s.doll;if(this.plan=null,this.cand=null,this.anim=null,this.overlay=[],this.trans=null,this.held=!1,this.yaw=t.yaw,this.pos.set(t.x,0,t.z),this.roll=this.rollTarget=0,t.posture==="lie"&&t.seat==="bed"){const e=this.liePos();this.pos.copy(e),this.yaw=0,this.roll=this.rollTarget=-Math.PI/2+.12}else if(t.posture==="sit"&&t.seat==="chair"){const e=this.s.furniture.chair;this.pos.set(e.x,0,e.z),this.yaw=e.yaw}else t.posture==="sit"&&t.seat==="bed"&&(this.pos.copy(this.bedSitPos()),this.yaw=0);this.rig.setOutfit(this.s.outfit),this.rig.setBoots(this.s.props.boots.loc.at==="worn",this.s.props.boots.flags.wet??0),mu(this.pose,this.target)}start(t,e){if(this.trace.push(`${t.rule}:${t.behavior}`),this.trace.length>60&&this.trace.shift(),this.world.log(`start ${t.behavior} (${t.rule}) cause=${t.deps.join("+")}`),e.overlay){for(const n of e.steps)n.k==="anim"&&this.overlay.push({name:n.name,dur:n.dur});return}this.finishTransition(),this.startTick=this.s.tick,this.plan=e,this.cand=t,this.idx=0,this.stepT=0,this.data={},this.anim=null,this.s.doll.activity="idle"}cancel(){if(!this.plan)return;this.world.log(`cancel ${this.plan.behavior}`),this.finishTransition(),this.plan=null,this.cand=null,this.anim=null,this.walking=0;const t=this.s.doll;t.activity=t.posture==="lie"?t.asleep?"sleeping":"restBed":t.posture==="sit"&&t.seat==="chair"?"sitting":"idle",t.posture==="sit"&&t.seat==="floor"&&this.standNow()}isBusy(){return!!this.plan}canInterrupt(){if(!this.plan)return!0;if(this.s.doll.outside)return!1;const t=this.plan.steps[this.idx];return!(t&&(t.k==="wear"||t.k==="garden"||t.k==="enter"))}runningInfo(){return!this.plan||!this.cand?null:{tier:this.cand.tier,interruptible:this.canInterrupt(),settled:!1,startTick:this.startTick}}glance(t,e=1.2){this.s.doll.asleep||(this.lookPt=t.clone(),this.lookUntil=this.now+e)}attend(t){this.attendPt=t?t.clone():null}bedSitPos(){const t=this.s.furniture.bed;return new T(t.x+.25,0,t.z+Cn.bed.d/2-.2)}liePos(){const t=this.s.furniture.bed;return new T(t.x-.94,.8,t.z-.04)}chairSeatPos(){const t=this.s.furniture.chair,e=su(t.yaw);return new T(t.x+e.x*.03,0,t.z+e.z*.03)}blocked(t,e=[]){if(t.x<.2||t.x>Ct.W-.2||t.z<.25||t.z>Ct.D-.1)return!0;for(const n of["chair","table","bed","lamp"]){if(e.includes(n))continue;const s=Je(this.s,n);if(Fn(t,{x0:s.x0-.15,x1:s.x1+.15,z0:s.z0-.15,z1:s.z1+.15}))return!0}return t.x<1.55&&t.z<.75}besideRect(t,e,n=.36,s=[]){const r={x:this.pos.x,z:this.pos.z},o=Math.min(t.x1,Math.max(t.x0,e.x)),a=Math.min(t.z1,Math.max(t.z0,e.z)),l=[{x:o,z:t.z1+n},{x:t.x0-n,z:a},{x:t.x1+n,z:a},{x:o,z:t.z0-n}],c=[0,.45,.45,.9],h=l.map((u,f)=>({c:u,ok:!this.blocked(u,s),score:Math.hypot(u.x-e.x,u.z-e.z)*2+Math.hypot(u.x-r.x,u.z-r.z)*.6+c[f]})),d=h.some(u=>u.ok)?h.filter(u=>u.ok):h;return d.sort((u,f)=>u.score-f.score),d[0].c}chairApproach(){const t=this.s.furniture.chair,e=su(t.yaw),n={x:e.z,z:-e.x},s=[{x:t.x+e.x*.55,z:t.z+e.z*.55},{x:t.x+n.x*.6,z:t.z+n.z*.6},{x:t.x-n.x*.6,z:t.z-n.z*.6},{x:t.x-e.x*.6,z:t.z-e.z*.6}],r={x:this.pos.x,z:this.pos.z},o=s.filter(l=>!this.blocked(l,["chair"])),a=o.length?o:s;return a.sort((l,c)=>Math.hypot(l.x-r.x,l.z-r.z)-Math.hypot(c.x-r.x,c.z-r.z)),o.length&&o[0]!==s[0]&&o.includes(s[0])?s[0]:a[0]}bedApproach(){const t=this.s.furniture.bed,e={x:t.x+.25,z:t.z+Cn.bed.d/2+.3};return this.blocked(e,["bed"])?this.besideRect(Je(this.s,"bed"),{x:t.x+.4,z:t.z}):e}spotPoint(t){switch(t){case"window":{const e={x:ne.cx,z:1.15};if(this.blocked(e))for(const n of[.6,-.6,1,-1,0]){const s={x:ne.cx+n,z:n===0?2.3:1.2};if(!this.blocked(s))return new T(s.x,1.6,s.z)}return new T(e.x,1.6,e.z)}case"mirror":return new T(Ka.x,1.3,Ka.z);case"doorIn":return new T(Sr.x,1.2,Sr.z+.2);case"wardrobe":return new T(dr.x,1.6,dr.z);case"guestSeat":return this.world.guestSeatWorld();case"emptyPlacemat":return this.world.emptyPlacematWorld();case"outside":return new T(Bs.x,1,Bs.z);default:return new T(this.pos.x,1.5,Ct.D+3)}}lookPoint(t){if("point"in t)return new T(t.point.x,.8,t.point.z);if("spot"in t){const s=this.spotPoint(t.spot);return t.spot==="window"?new T(ne.cx,1.8,-1.5):t.spot==="mirror"?new T(Ka.x,1.4,.2):t.spot==="wardrobe"?new T(dr.x,1.5,.3):s}const e=t.thing;if(e==="chair"||e==="table"||e==="bed"||e==="lamp"){const s=this.s.furniture[e];return new T(s.x,e==="lamp"?1.3:.6,s.z)}const n=this.world.propWorld(e);return n?n.clone().setY(n.y+.15):null}walkGoal(t){const e=t.to;if(t.seat==="chair")return{goal:this.chairApproach(),ignore:[],face:null};if(t.seat==="bed")return{goal:this.bedApproach(),ignore:[],face:null};if("spot"in e){const d=this.spotPoint(e.spot);if(e.spot==="guestSeat"){const u=Je(this.s,"table");return{goal:this.besideRect(u,{x:d.x,z:d.z}),ignore:[],face:d}}return{goal:{x:d.x,z:d.z},ignore:[],face:this.lookPoint(e)}}if("point"in e)return{goal:e.point,ignore:[],face:null};const n=e.thing;if(n==="chair"||n==="table"||n==="bed"||n==="lamp"){const d=Je(this.s,n),u=this.s.furniture[n];return{goal:this.besideRect(d,{x:u.x,z:u.z},t.standoff??.4),ignore:[],face:new T(u.x,.6,u.z)}}const s=this.world.propWorld(n);if(!s)return null;const r=this.s.props[n].loc;if(r.at==="surface"){const d=Je(this.s,r.on);return{goal:this.besideRect(d,{x:s.x,z:s.z},.34),ignore:[],face:s}}if(r.at==="held"||r.at==="worn")return{goal:{x:this.pos.x,z:this.pos.z},ignore:[],face:null};const o=this.pos.x-s.x,a=this.pos.z-s.z,l=Math.hypot(o,a)||1,c=t.standoff??.5;let h={x:s.x+o/l*c,z:s.z+a/l*c};if(this.blocked(h))for(let d=0;d<Math.PI*2;d+=Math.PI/6){const u={x:s.x+Math.cos(d)*c,z:s.z+Math.sin(d)*c};if(!this.blocked(u)){h=u;break}}return{goal:h,ignore:[],face:s}}nextStep(){this.idx+=1,this.stepT=0,this.data={},this.anim=null}endPlan(t){const e=this.cand;if(this.plan=null,this.cand=null,this.anim=null,this.walking=0,!t){this.anim=null,this.overlay.push({name:"puzzled",dur:1});const n=this.s.doll;n.activity=n.posture==="sit"&&n.seat==="chair"?"sitting":n.posture==="lie"?"restBed":"idle",n.posture==="sit"&&n.seat==="floor"&&this.standNow()}this.onPlanEnd?.(e,t)}runStep(t,e){const n=this.s.doll;switch(t.k){case"look":{if(this.stepT===0){const r=this.lookPoint(t.at);r&&this.glance(r,t.dur+.4)}const s=this.lookPt;if(s&&n.posture==="stand"){const r=Math.atan2(s.x-this.pos.x,s.z-this.pos.z),o=Ci(r,this.yaw);Math.abs(o)>1.2&&(this.yaw+=Math.sign(o)*Math.min(Math.abs(o)-1,e*4))}return this.stepT>=t.dur?"done":"run"}case"walk":{if(n.posture!=="stand"&&this.standNow(),!this.data.path){const o=this.walkGoal(t);if(!o)return"fail";const a=ec(this.s,{x:this.pos.x,z:this.pos.z},o.goal,{ignore:o.ignore});if(!a)return"fail";this.data.path=a,this.data.i=0,this.data.face=o.face,this.data.goal=o.goal,this.data.recheck=.6}const s=this.data.path;if(this.data.recheck-=e,this.data.recheck<0){this.data.recheck=.6;const o=this.walkGoal(t);if(o&&Math.hypot(o.goal.x-this.data.goal.x,o.goal.z-this.data.goal.z)>.3){const a=ec(this.s,{x:this.pos.x,z:this.pos.z},o.goal,{ignore:o.ignore});if(a)return this.data.path=a,this.data.i=0,this.data.goal=o.goal,this.data.face=o.face,"run"}}if(this.data.i<s.length){const o=s[this.data.i],a=o.x-this.pos.x,l=o.z-this.pos.z,c=Math.hypot(a,l),h=Math.atan2(a,l),d=Ci(h,this.yaw);this.yaw+=Math.sign(d)*Math.min(Math.abs(d),e*9);const u=xu*(Math.abs(d)>1.2?.25:1),f=Math.min(c,u*e);return c>1e-4&&(this.pos.x+=a/c*f,this.pos.z+=l/c*f),this.walking=Math.min(1,this.walking+e*6),this.walkPhase+=f*5.2,c<.04&&(this.data.i+=1),Math.floor(this.walkPhase/Math.PI)!==Math.floor((this.walkPhase-f*5.2)/Math.PI)&&this.world.sfx("step",this.pos),"run"}this.walking=Math.max(0,this.walking-e*6);const r=this.data.face;if(r){const o=Math.atan2(r.x-this.pos.x,r.z-this.pos.z),a=Ci(o,this.yaw);if(this.yaw+=Math.sign(a)*Math.min(Math.abs(a),e*7),Math.abs(a)>.08&&this.stepT<3)return"run"}return"done"}case"pick":{const s=t.id;if(n.holding===s)return"done";const r=this.world.propWorld(s),o=this.s.props[s].loc;if(!r||!(o.at==="floor"||o.at==="surface"))return"fail";if(this.stepT===0){if(Math.hypot(r.x-this.pos.x,r.z-this.pos.z)>1.25)return this.plan.steps.splice(this.idx,0,{k:"walk",to:{thing:s},standoff:.5}),this.data={},"run";n.holding&&this.world.put(n.holding,{floorNear:"doll"}),this.data.low=r.y<.45&&n.posture==="stand",this.glance(r,.8)}return!this.data.taken&&this.stepT>.3&&(this.data.taken=!0,!this.world.pick(s))?"fail":this.stepT>.55?"done":"run"}case"put":{const s=this.s.props[t.id].loc.at;if(n.holding!==t.id&&s!=="held"&&s!=="worn")return"done";if(this.stepT===0&&"surface"in t.dest){const r=t.dest.surface,o=Je(this.s,r);if(Math.hypot(Math.max(o.x0-this.pos.x,0,this.pos.x-o.x1),Math.max(o.z0-this.pos.z,0,this.pos.z-o.z1))>.7&&n.posture==="stand")return this.plan.steps.splice(this.idx,0,{k:"walk",to:{thing:r},standoff:.38}),this.data={},"run"}return this.stepT===0&&"wardrobe"in t.dest&&Math.hypot(this.pos.x-dr.x,this.pos.z-dr.z)>.8?(this.plan.steps.splice(this.idx,0,{k:"walk",to:{spot:"wardrobe"}}),this.data={},"run"):(!this.data.done&&this.stepT>.28&&(this.data.done=!0,this.world.put(t.id,t.dest),"worn"in t.dest&&this.rig.setBoots(!0,this.s.props.boots.flags.wet??0)),this.stepT>.5?"done":"run")}case"sit":{if(this.stepT===0){if(t.on==="chair"){const s=this.chairSeatPos();this.beginTrans(s,this.s.furniture.chair.yaw,.5,.12),this.world.sfx("sit",s)}else if(t.on==="bed"){const s=this.bedSitPos();this.beginTrans(s,0,.5,.15),this.world.sfx("boing",s)}else this.beginTrans(this.pos.clone(),this.yaw,.45,0);n.posture="sit",n.seat=t.on}return this.trans?"run":"done"}case"lie":{if(this.stepT===0){if(n.seat!=="bed"){const s=this.bedSitPos();this.pos.copy(s)}this.beginTrans(this.liePos(),0,.9,.1),this.rollTarget=-Math.PI/2+.12,n.posture="lie",n.seat="bed"}return this.trans?"run":"done"}case"stand":return n.posture==="stand"?"done":(this.stepT===0&&this.beginStand(),this.trans?"run":"done");case"anim":return this.stepT===0&&(this.anim={name:t.name,t:0,dur:t.dur},this.animSfx(t.name)),this.stepT>=t.dur?"done":"run";case"do":return this.world.fx(t.fx),t.fx==="wake"&&(n.asleep=!1),"done";case"wear":return this.stepT===0&&(this.anim={name:"twirlUmbrella",t:0,dur:1.1},this.world.sfx("cloth",this.pos)),!this.data.done&&this.stepT>.5&&(this.data.done=!0,this.world.wear(t.outfit),this.rig.setOutfit(t.outfit)),this.stepT>1.1?"done":"run";case"garden":{this.data.i||(this.data.i=0);const s=t.path;if(this.data.i>=s.length)return this.walking=Math.max(0,this.walking-e*6),"done";const r=s[this.data.i];return this.moveToward(r,e),Math.hypot(r.x-this.pos.x,r.z-this.pos.z)<.05&&this.data.i++,n.outside=this.pos.z<-.05,"run"}case"enter":{this.data.i||(this.data.i=0);const s=[Bs,{x:Sr.x,z:-.05},{x:Sr.x,z:.95}];if(this.data.i>=s.length)return this.walking=0,n.outside=!1,"done";const r=s[this.data.i];return this.moveToward(r,e),Math.hypot(r.x-this.pos.x,r.z-this.pos.z)<.05&&this.data.i++,n.outside=this.pos.z<-.05,"run"}case"settle":return n.activity=t.activity,"done"}}moveToward(t,e){const n=t.x-this.pos.x,s=t.z-this.pos.z,r=Math.hypot(n,s);if(r<1e-4)return;const o=Math.atan2(n,s),a=Ci(o,this.yaw);this.yaw+=Math.sign(a)*Math.min(Math.abs(a),e*9);const l=Math.min(r,xu*.85*e);this.pos.x+=n/r*l,this.pos.z+=s/r*l,this.walking=Math.min(1,this.walking+e*6),this.walkPhase+=l*5.2}animSfx(t){const n={hug:"squeak",giggle:"giggle",yawn:"yawn",yawnStretch:"yawn",clap:"clap",cheer:"cheer",gasp:"gasp",blow:"blow",sip:"sip",wipe:"rub",listen:"hum",jumpSplash:"jump",jumpSplashBig:"jump",bounce:"boing",stomp:"stomp",stompHood:"stomp",curtsyTwirl:"twirl",hopHappy:"giggle",puzzled:"hmm",shakeOff:"shake"}[t];n&&this.world.sfx(n,this.pos)}beginTrans(t,e,n,s){this.trans={from:this.pos.clone(),to:t.clone(),fy:this.yaw,ty:e,t:0,dur:n,arc:s}}finishTransition(){this.trans&&(this.pos.copy(this.trans.to),this.yaw=this.trans.ty,this.trans=null,this.roll=this.rollTarget)}beginStand(){const t=this.s.doll;let e=this.pos.clone().setY(0),n=this.yaw;if(t.seat==="chair"){const s=this.chairApproach();e=new T(s.x,0,s.z)}else if(t.seat==="bed"){const s=this.bedApproach();e=new T(s.x,0,s.z),n=0}this.rollTarget=0,this.beginTrans(e,n,t.posture==="lie"?.8:.45,.1),t.posture="stand",t.seat=null,t.asleep=!1}standNow(){this.s.doll.posture!=="stand"&&this.beginStand()}grab(){const t=this.s.doll;return t.outside?!1:(this.plan&&this.cancel(),this.finishTransition(),this.held=!0,this.overlay=[],t.posture!=="stand"&&(t.posture="stand",t.seat=null,this.rollTarget=0,this.roll=0,this.pos.y=0),t.asleep=!1,t.activity="idle",this.heldTarget.copy(this.pos),!0)}dragTo(t){this.heldTarget.copy(t)}release(t){const e=this.s.doll;if(this.held=!1,t.kind==="chair"){const n=this.s.furniture.chair;this.pos.set(n.x,0,n.z),this.yaw=n.yaw,e.posture="sit",e.seat="chair",e.activity="sitting"}else t.kind==="bed"?(this.pos.copy(this.bedSitPos()),this.yaw=0,e.posture="sit",e.seat="bed",e.activity="restBed"):(this.pos.set(t.x,0,t.z),e.posture="stand",e.seat=null,e.activity="idle");this.world.sfx(t.kind==="bed"?"boing":"land",this.pos)}holdPose(t){const e=this.rig.anchors,n=this.s.doll,s=this.yaw+this.spin,r=new T;switch(t){case"plush":return e.hug.getWorldPosition(r),r.y-=.22,{pos:r,yaw:s};case"book":return n.activity==="reading"||n.activity==="readingBed"||this.s.props.book.flags.open?(e.front.getWorldPosition(r),r.y-=.06,{pos:r,yaw:s,tilt:-.75}):(e.handR.getWorldPosition(r),r.y-=.04,{pos:r,yaw:s,tilt:-1.4});case"cake":case"musicBox":case"boots":return e.front.getWorldPosition(r),r.y-=.15,{pos:r,yaw:s};case"umbrella":return e.handR.getWorldPosition(r),r.y-=.08,{pos:r,yaw:s};case"towel":return e.handR.getWorldPosition(r),{pos:r,yaw:s};default:return e.handR.getWorldPosition(r),r.y-=.06,{pos:r,yaw:s}}}update(t,e){this.now=e;const n=this.s.doll,s={spin:0,lift:0,hood:0,seated:n.posture==="sit"};if(this.trans){const x=this.trans;x.t+=t;const m=Math.min(1,x.t/x.dur),p=m*m*(3-2*m);this.pos.lerpVectors(x.from,x.to,p),this.pos.y+=Math.sin(m*Math.PI)*x.arc,this.yaw=x.fy+Ci(x.ty,x.fy)*p,m>=1&&(this.trans=null)}if(this.roll+=(this.rollTarget-this.roll)*Math.min(1,t*5),this.plan&&!this.held){let x=0;for(;this.plan&&x++<6;){const m=this.plan.steps[this.idx];if(!m){this.endPlan(!0);break}const p=this.runStep(m,t);if(p==="fail"){this.world.log(`step failed: ${m.k}`),this.endPlan(!1);break}if(p==="done"){this.nextStep();continue}this.stepT+=t;break}}const r=this.target;mu(r,ja()),n.posture==="sit"?n.seat==="chair"?gu(r,B_):n.seat==="bed"?gu(r,z_):O_(r):n.posture==="lie"&&(r.lLegPitch=.35,r.rLegPitch=.45,r.lKnee=.5,r.rKnee=.6,r.lArmPitch=.6,r.rArmPitch=.9,r.lElbow=1.2,r.rElbow=1.4,r.headRoll=.1);const o=n.holding;if(o==="book"&&(n.activity==="reading"||n.activity==="readingBed"||this.s.props.book.flags.open)?(r.lArmPitch=r.rArmPitch=1.05,r.lElbow=r.rElbow=1.05,r.lArmOut=r.rArmOut=.05):o==="cake"||o==="musicBox"||o==="boots"?(r.lArmPitch=r.rArmPitch=.95,r.lElbow=r.rElbow=.9,r.lArmOut=r.rArmOut=0):o==="plush"?(r.lArmPitch=r.rArmPitch=.85,r.lElbow=r.rElbow=1.75,r.lArmOut=r.rArmOut=-.05):o==="umbrella"?(r.rArmPitch=this.s.props.umbrella.flags.open?1.25:.5,r.rElbow=this.s.props.umbrella.flags.open?1.1:.6):o&&(r.rArmPitch=.55,r.rElbow=.9),this.held?(r.lLegPitch=.25+Math.sin(e*7)*.25,r.rLegPitch=.25-Math.sin(e*7)*.25,r.lKnee=.4,r.rKnee=.4,r.lArmOut=r.rArmOut=.9,r.lElbow=r.rElbow=.4,r.mouth=.5,r.brow=.6,r.flare=.3,this.pos.lerp(this.heldTarget,Math.min(1,t*16)),s.lift=.55):(!this.plan||this.plan.steps[this.idx]?.k==="settle")&&U_(n.activity,e,r,s,o),this.walking>.01&&F_(r,this.walkPhase,this.walking),this.anim)this.anim.t+=t,ic(this.anim.name,Math.min(1,this.anim.t/this.anim.dur),e,r,s);else if(this.overlay.length){const x=this.overlay[0];x.t=(x.t??0)+t,x.t===t&&this.animSfx(x.name),ic(x.name,Math.min(1,x.t/x.dur),e,r,s),x.t>=x.dur&&this.overlay.shift()}n.asleep&&(r.eye=0);let a=null;if(this.attendPt&&!n.asleep)a=this.attendPt;else if(this.lookPt&&e<this.lookUntil)a=this.lookPt;else if(this.walking>.3&&this.plan)a=null;else if(!n.asleep&&!this.held){if(e>this.wanderNext){const x=this.world.interest().filter(m=>Math.abs(Ci(Math.atan2(m.x-this.pos.x,m.z-this.pos.z),this.yaw))<1.3);this.wanderPt=x.length&&Math.random()<.85?x[Math.floor(Math.random()*x.length)]:null,this.wanderNext=e+2.2+Math.random()*2.5}(n.activity==="idle"||n.activity==="sitting"||n.activity==="cuddle")&&(a=this.wanderPt)}if(a&&n.posture!=="lie"){const x=(n.posture==="sit"?1.35:1.65)+this.pos.y,m=a.x-this.pos.x,p=a.z-this.pos.z,_=Ci(Math.atan2(m,p),this.yaw+s.spin),w=Math.hypot(m,p),v=Math.atan2(x-a.y,Math.max(.3,w)),S=Di.clamp(_,-1.05,1.05);r.headYaw+=S,r.twist+=Di.clamp(_-S,-.5,.5),r.headPitch+=Di.clamp(v,-.5,.55)*.8,r.gazeX+=Di.clamp((_-S)*1.5+S*.3,-1,1),r.gazeY+=Di.clamp(-v*1.2,-1,1),Math.abs(_)>1.6&&n.posture==="stand"&&!this.plan&&!this.held&&a!==this.wanderPt&&(this.yaw+=Math.sign(_)*Math.min(Math.abs(_)-1.2,t*3))}n.asleep||(e>this.blinkNext&&this.blinkT<0&&(this.blinkT=0,this.blinkNext=e+2+Math.random()*3.5),this.blinkT>=0&&(this.blinkT+=t,r.eye=Math.min(r.eye,Math.abs(this.blinkT-.07)/.07),this.blinkT>.14&&(this.blinkT=-1))),k_(this.pose,r,t,this.held?14:10),this.spin+=(s.spin-this.spin)*Math.min(1,t*(Math.abs(s.spin-this.spin)>3?1e3:12)),this.lift+=(s.lift-this.lift)*Math.min(1,t*14),this.hood+=(s.hood-this.hood)*Math.min(1,t*6);const l=this.rig.root;l.position.set(this.pos.x,this.pos.y+this.lift,this.pos.z),l.rotation.set(0,this.yaw+this.spin,0),this.rig.body.rotation.z=this.roll;const c=this.vel.set(this.pos.x-this.lastPos.x,0,this.pos.z-this.lastPos.z).divideScalar(Math.max(t,.001)),h=Math.cos(-this.yaw),d=Math.sin(-this.yaw),u={x:c.x*h+c.z*d,z:-c.x*d+c.z*h},f=Ci(this.yaw+this.spin,this.lastYaw)/Math.max(t,.001);this.rig.apply(this.pose,e,t,u,f),this.rig.setHood(this.hood),this.lastPos.copy(this.pos),this.lastYaw=this.yaw+this.spin,this.rig.shadow.position.set(this.pos.x,.006+(n.posture==="lie"?.6:(n.seat==="chair",0)),this.pos.z),this.rig.shadow.visible=n.posture!=="lie";const g=1-Math.min(.5,(this.lift+(this.held?.2:0))*.8);if(this.rig.shadow.scale.setScalar(g),n.posture!=="lie"&&!this.trans)n.x=this.pos.x,n.z=this.pos.z;else if(n.posture==="lie"){const x=this.s.furniture.bed;n.x=x.x,n.z=x.z}n.yaw=this.yaw}}const gr=new T;function Nn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;gr.copy(t),gr[n]=0,gr.normalize();const c=.5*o/(o+a),h=1-gr.angleTo(i)/l;return Math.sign(gr[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Pn extends Ne{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new T,c=new T,h=new T(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new T,m=.5/o;for(let p=0,_=0;p<d.length;p+=3,_+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),f[_+0]=Nn(x,c,"z","y",r,n),f[_+1]=1-Nn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),f[_+0]=1-Nn(x,c,"z","y",r,n),f[_+1]=1-Nn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),f[_+0]=1-Nn(x,c,"x","z",r,t),f[_+1]=Nn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[_+0]=1-Nn(x,c,"x","z",r,t),f[_+1]=1-Nn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[_+0]=1-Nn(x,c,"x","y",r,t),f[_+1]=1-Nn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),f[_+0]=Nn(x,c,"x","y",r,t),f[_+1]=1-Nn(x,c,"y","x",r,e);break}}static fromJSON(t){return new Pn(t.width,t.height,t.depth,t.segments,t.radius)}}function li(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Re(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function Le(i,t={}){const e=new up(i);return t.color!==!1&&(e.colorSpace=rn),e.wrapS=e.wrapT=Vo,t.repeat&&e.repeat.set(t.repeat[0],t.repeat[1]),e.anisotropy=4,e.needsUpdate=!0,e}function Kr(i,t=2){const e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,[r,o]=Re(e,n),a=o.createImageData(e,n),l=(c,h)=>s[((h+n)%n*e+(c+e)%e)*4]/255;for(let c=0;c<n;c++)for(let h=0;h<e;h++){const d=(l(h+1,c)-l(h-1,c))*t,u=(l(h,c-1)-l(h,c+1))*t,f=Math.hypot(d,u,1),g=(c*e+h)*4;a.data[g]=(-d/f*.5+.5)*255,a.data[g+1]=(-u/f*.5+.5)*255,a.data[g+2]=(1/f*.5+.5)*255,a.data[g+3]=255}return o.putImageData(a,0,0),r}function Ys(i,t,e,n,s,r,o){i.fillStyle=s;for(let a=0;a<5;a++){const l=a/5*Math.PI*2;i.beginPath(),i.ellipse(t+Math.cos(l)*n*.62,e+Math.sin(l)*n*.62,n*.48,n*.3,l,0,Math.PI*2),i.fill()}i.fillStyle=r,i.beginPath(),i.arc(t,e,n*.3,0,Math.PI*2),i.fill(),i.fillStyle=o,i.beginPath(),i.arc(t+n*.05,e-n*.05,n*.12,0,Math.PI*2),i.fill()}function oa(i,t,e,n,s,r){i.strokeStyle=r,i.lineWidth=.7;for(let o=0;o<s;o++){const a=n()*t,l=n()*e,c=(n()-.5)*.6+(n()<.5?0:Math.PI/2),h=6+n()*26;i.globalAlpha=.08+n()*.12,i.beginPath(),i.moveTo(a,l),i.lineTo(a+Math.cos(c)*h,l+Math.sin(c)*h),i.stroke()}i.globalAlpha=1}function H_(i=1){const e=li(i),[n,s]=Re(512,512);s.fillStyle=P.teal,s.fillRect(0,0,512,512);for(let a=0;a<40;a++)s.fillStyle=`rgba(255,255,255,${.012+e()*.015})`,s.fillRect(0,e()*512,512,2+e()*10);s.strokeStyle="rgba(185,223,214,0.22)",s.lineWidth=2;for(let a=-512;a<512*2;a+=128)s.beginPath(),s.moveTo(a,0),s.lineTo(a+512,512),s.moveTo(a+512,0),s.lineTo(a,512),s.stroke();for(let a=0;a<4;a++)for(let l=0;l<4;l++){const c=l*128+64,h=a*128+(l%2?0:64),d=1.6;Ys(s,c+d,h+d*.5,17,"rgba(204,69,106,0.35)","rgba(0,0,0,0)","rgba(0,0,0,0)"),Ys(s,c,h,17,P.mint,P.porcelain,P.gold),s.strokeStyle=P.mintDeep,s.lineWidth=3,s.beginPath(),s.moveTo(c,h+14),s.quadraticCurveTo(c+10,h+30,c+22,h+34),s.stroke(),s.fillStyle=P.mintDeep,s.beginPath(),s.ellipse(c+16,h+26,7,3.5,.6,0,Math.PI*2),s.fill()}s.fillStyle=P.gold;for(let a=0;a<8;a++)for(let l=0;l<8;l++)(l+a)%2||(s.beginPath(),s.arc(l*64+32,a*64+32,2.4,0,Math.PI*2),s.fill());oa(s,512,512,e,70,"#dff3ee"),s.fillStyle="rgba(0,0,0,0.18)",s.fillRect(0,0,3,512),s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(3,0,2,512);const[r,o]=Re(512,512);o.fillStyle="#808080",o.fillRect(0,0,512,512),o.fillStyle="#3a3a3a",o.fillRect(0,0,4,512);for(let a=16;a<512;a+=64){const l=o.createRadialGradient(14,a,0,14,a,6);l.addColorStop(0,"#ffffff"),l.addColorStop(1,"#808080"),o.fillStyle=l,o.beginPath(),o.arc(14,a,6,0,Math.PI*2),o.fill(),s.fillStyle="rgba(240,201,81,0.85)",s.beginPath(),s.arc(14,a,4,0,Math.PI*2),s.fill(),s.fillStyle="rgba(255,255,255,0.7)",s.beginPath(),s.arc(12.8,a-1.4,1.3,0,Math.PI*2),s.fill()}return{map:Le(n),normalMap:Le(Kr(r,3),{color:!1})}}function V_(i=2){const n=li(i),[s,r]=Re(256,128);r.fillStyle=P.mint,r.fillRect(0,0,256,128);const[o,a]=Re(256,128);a.fillStyle="#808080",a.fillRect(0,0,256,128);for(let l=0;l<256;l+=32){const c=a.createLinearGradient(l,0,l+32,0);c.addColorStop(0,"#606060"),c.addColorStop(.5,"#c8c8c8"),c.addColorStop(1,"#606060"),a.fillStyle=c,a.fillRect(l+6,10,20,108),r.fillStyle="rgba(255,255,255,0.18)",r.fillRect(l+12,10,4,108),r.fillStyle="rgba(16,63,75,0.12)",r.fillRect(l+24,10,3,108)}return r.fillStyle=P.berry,r.fillRect(0,2,256,4),oa(r,256,128,n,30,"#ffffff"),{map:Le(s),normalMap:Le(Kr(o,4),{color:!1})}}function W_(i=3){const e=li(i),[n,s]=Re(512,512),r=512/2;for(let c=0;c<2;c++)for(let h=0;h<2;h++)s.fillStyle=(h+c)%2?P.mint:P.porcelain,s.fillRect(h*r,c*r,r,r),s.strokeStyle=(h+c)%2?"rgba(255,255,255,0.5)":"rgba(140,199,186,0.6)",s.lineWidth=3,s.strokeRect(h*r+18,c*r+18,r-36,r-36),s.fillStyle=(h+c)%2?"rgba(255,255,255,0.45)":"rgba(185,223,214,0.7)",s.beginPath(),s.moveTo(h*r+r/2,c*r+r/2-26),s.lineTo(h*r+r/2+26,c*r+r/2),s.lineTo(h*r+r/2,c*r+r/2+26),s.lineTo(h*r+r/2-26,c*r+r/2),s.closePath(),s.fill();const o=(c,h,d)=>{s.fillStyle=P.teal,s.beginPath();for(let u=0;u<8;u++){const f=u/8*Math.PI*2,g=u%2?d*.38:d;s.lineTo(c+Math.cos(f)*g,h+Math.sin(f)*g)}s.closePath(),s.fill()};for(const[c,h]of[[0,0],[r,0],[0,r],[r,r],[512,0],[0,512],[512,512],[r,512],[512,r]])o(c,h,16);oa(s,512,512,e,90,"#7aa79d");const[a,l]=Re(512,512);l.fillStyle="#808080",l.fillRect(0,0,512,512),l.fillStyle="#404040";for(const c of[0,r])l.fillRect(c,0,3,512),l.fillRect(0,c,512,3);s.fillStyle="rgba(16,63,75,0.35)";for(const c of[0,r])s.fillRect(c,0,2,512),s.fillRect(0,c,512,2);return{map:Le(n),normalMap:Le(Kr(a,3),{color:!1})}}function Uc(i,t,e,n=7,s=256){const r=s,o=li(n),[a,l]=Re(r,r);switch(l.fillStyle=t,l.fillRect(0,0,r,r),i){case"gingham":{l.fillStyle=e,l.globalAlpha=.45;for(let u=0;u<r;u+=32)l.fillRect(u,0,16,r),l.fillRect(0,u,r,16);l.globalAlpha=1;break}case"check":{l.strokeStyle=e,l.lineWidth=3;for(let u=0;u<r;u+=32)l.beginPath(),l.moveTo(u+8,0),l.lineTo(u+8,r),l.moveTo(0,u+8),l.lineTo(r,u+8),l.stroke();break}case"dots":l.fillStyle=e;for(let u=0;u<8;u++)for(let f=0;f<8;f++)l.beginPath(),l.arc(f*32+(u%2?16:0)+8,u*32+8,4.5,0,Math.PI*2),l.fill();break;case"stripes":l.fillStyle=e;for(let u=0;u<r;u+=32)l.fillRect(0,u,r,14);break;case"stars":l.fillStyle=e;for(let u=0;u<4;u++)for(let f=0;f<4;f++){const g=f*64+(u%2?32:0)+16,x=u*64+20;l.beginPath();for(let m=0;m<10;m++){const p=m/10*Math.PI*2-Math.PI/2,_=m%2?4:10;l.lineTo(g+Math.cos(p)*_,x+Math.sin(p)*_)}l.closePath(),l.fill()}break;case"flowers":for(let u=0;u<4;u++)for(let f=0;f<4;f++)Ys(l,f*64+(u%2?32:0)+16,u*64+24,9,e,P.porcelain,P.gold);break;case"velvet":{for(let u=0;u<300;u++)l.fillStyle=`rgba(0,0,0,${o()*.05})`,l.fillRect(o()*r,0,1+o()*3,r);break}}l.globalAlpha=i==="velvet"?.05:.09;for(let u=0;u<r;u+=2)l.fillStyle=u%4?"#000":"#fff",l.fillRect(0,u,r,1),l.fillRect(u,0,1,r);l.globalAlpha=1;const[c,h]=Re(64,64);for(let u=0;u<64;u++)for(let f=0;f<64;f++){const g=128+50*Math.sin(f/2*Math.PI)*((u>>1)%2?1:-1);h.fillStyle=`rgb(${g},${g},${g})`,h.fillRect(f,u,1,1)}const d=Le(Kr(c,1.2),{color:!1});return d.repeat.set(r/64,r/64),{map:Le(a),normalMap:d}}function X_(i=11){const e=li(i),[n,s]=Re(512,512),r=[P.berry,P.mint,P.lavender,P.porcelain,P.coral,P.mintDeep],o=4,a=512/o;for(let u=0;u<o;u++)for(let f=0;f<o;f++){const g=r[Math.floor(e()*r.length)];s.fillStyle=g,s.fillRect(f*a,u*a,a,a);const x=Math.floor(e()*3);if(s.fillStyle="rgba(255,255,255,0.35)",x===0)for(let m=0;m<4;m++)for(let p=0;p<4;p++)s.beginPath(),s.arc(f*a+16+m*32,u*a+16+p*32,5,0,Math.PI*2),s.fill();else if(x===1)for(let m=0;m<a;m+=20)s.fillRect(f*a,u*a+m,a,8);else Ys(s,f*a+a/2,u*a+a/2,30,"rgba(255,255,255,0.45)",P.gold,P.gold)}s.strokeStyle="rgba(255,255,255,0.9)",s.setLineDash([7,6]),s.lineWidth=2.5;for(let u=0;u<=o;u++)s.beginPath(),s.moveTo(u*a+6,0),s.lineTo(u*a+6,512),s.moveTo(0,u*a+6),s.lineTo(512,u*a+6),s.stroke();s.setLineDash([]);const[l,c]=Re(128,128),h=c.createRadialGradient(64,64,10,64,64,80);h.addColorStop(0,"#b0b0b0"),h.addColorStop(1,"#505050"),c.fillStyle=h,c.fillRect(0,0,128,128);const d=Le(Kr(l,2),{color:!1});return d.repeat.set(o,o),{map:Le(n),normalMap:d}}function q_(i,t,e,n=5){const r=li(n),[o,a]=Re(256,256);if(a.fillStyle=i,a.fillRect(0,0,256,256),a.fillStyle=e,a.strokeStyle=e,t==="scallop")for(let l=0;l<256;l+=32)for(let c=0;c<256;c+=32)a.beginPath(),a.arc(c+(l%64?16:0),l,16,0,Math.PI),a.lineWidth=2,a.stroke();else if(t==="dots")for(let l=0;l<256;l+=32)for(let c=0;c<256;c+=32)a.beginPath(),a.arc(c+(l%64?16:0)+8,l+8,3.5,0,Math.PI*2),a.fill();else if(t==="lace"){a.lineWidth=2;for(let l=0;l<256;l+=64)for(let c=0;c<256;c+=64){for(let h=0;h<8;h++){const d=h/8*Math.PI*2;a.beginPath(),a.arc(c+32+Math.cos(d)*16,l+32+Math.sin(d)*16,8,0,Math.PI*2),a.stroke()}a.beginPath(),a.arc(c+32,l+32,6,0,Math.PI*2),a.fill()}}else if(t==="stripe")for(let l=0;l<256;l+=32)a.fillRect(l,0,10,256);return oa(a,256,256,r,30,"#ffffff"),Le(o)}function Y_(i=13){const e=li(i),[n,s]=Re(256,256);s.fillStyle=P.grass,s.fillRect(0,0,256,256);for(let r=0;r<260;r++){const o=e()*256,a=e()*256;s.strokeStyle=e()<.5?P.leaf:"#8fd3ae",s.lineWidth=2,s.beginPath(),s.moveTo(o,a),s.lineTo(o+(e()-.5)*6,a-8-e()*6),s.stroke()}for(let r=0;r<14;r++)Ys(s,e()*256,e()*256,5,e()<.5?P.porcelain:P.gold,P.berry,P.berry);return Le(n)}function K_(){const[i,t]=Re(256,128);return t.fillStyle=P.porcelain,t.fillRect(0,0,256,128),t.fillStyle=P.sky,t.fillRect(10,10,108,70),t.fillStyle=P.gold,t.beginPath(),t.arc(95,30,12,0,Math.PI*2),t.fill(),t.fillStyle=P.berry,t.beginPath(),t.moveTo(28,52),t.lineTo(52,32),t.lineTo(76,52),t.fill(),t.fillStyle=P.mint,t.fillRect(32,52,40,28),t.fillStyle=P.grass,t.fillRect(10,80,108,16),t.fillStyle=P.lavender,t.beginPath(),t.ellipse(180,70,26,18,0,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(205,52,13,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(196,42),t.lineTo(199,30),t.lineTo(205,41),t.moveTo(206,41),t.lineTo(213,31),t.lineTo(215,44),t.fill(),Ys(t,150,36,12,P.coral,P.gold,P.gold),t.fillStyle="rgba(0,0,0,0.12)",t.fillRect(126,0,4,128),Le(i)}function Z_(){const[t,e]=Re(512,512),n=512/2,s=[["#F7C9A8","#F4E3B5"],["#8FD0EA","#CDEFF7"],["#F08A5D","#F6B78A"],["#1F3566","#2E4A80"]];for(let r=0;r<4;r++){const o=-Math.PI/2-Math.PI/4+r*Math.PI/2,a=e.createRadialGradient(n,n,20,n,n,n);a.addColorStop(0,s[r][1]),a.addColorStop(1,s[r][0]),e.fillStyle=a,e.beginPath(),e.moveTo(n,n),e.arc(n,n,n,o,o+Math.PI/2),e.closePath(),e.fill();const l=o+Math.PI/4,c=n+Math.cos(l)*n*.62,h=n+Math.sin(l)*n*.62;if(e.save(),e.translate(c,h),e.rotate(l+Math.PI/2),r===3){e.fillStyle="#F6EFC8",e.beginPath(),e.arc(0,0,40,0,Math.PI*2),e.fill(),e.fillStyle="#2E4A80",e.beginPath(),e.arc(16,-10,36,0,Math.PI*2),e.fill(),e.fillStyle="#F6EFC8";for(const[d,u]of[[-60,30],[50,40],[-30,-50]])e.beginPath(),e.arc(d,u,5,0,Math.PI*2),e.fill()}else{const d=r===1?44:38;e.fillStyle=r===2?"#F45B3C":P.gold,e.beginPath(),e.arc(0,r===1?0:14,d,r===1?0:Math.PI,Math.PI*2),e.fill(),e.strokeStyle=e.fillStyle,e.lineWidth=8;for(let u=0;u<7;u++){const f=Math.PI+u/6*Math.PI;e.beginPath(),e.moveTo(Math.cos(f)*(d+10),(r===1?0:14)+Math.sin(f)*(d+10)),e.lineTo(Math.cos(f)*(d+28),(r===1?0:14)+Math.sin(f)*(d+28)),e.stroke()}r!==1&&(e.fillStyle=r===0?"#9ED3B8":"#C66A4E",e.fillRect(-70,14,140,26))}e.restore()}return e.strokeStyle=P.gold,e.lineWidth=10,e.beginPath(),e.arc(n,n,n-6,0,Math.PI*2),e.stroke(),Le(t)}function J_(){const[e,n]=Re(384,128),s=[P.sky,"#7E97B5","#DDEBF4"];for(let r=0;r<3;r++){n.fillStyle=s[r],n.fillRect(r*128,0,128,128);const o=r*128+64,a=64;if(r===0){n.fillStyle=P.gold,n.beginPath(),n.arc(o,a,26,0,Math.PI*2),n.fill(),n.strokeStyle=P.gold,n.lineWidth=7;for(let l=0;l<8;l++){const c=l/8*Math.PI*2;n.beginPath(),n.moveTo(o+Math.cos(c)*34,a+Math.sin(c)*34),n.lineTo(o+Math.cos(c)*48,a+Math.sin(c)*48),n.stroke()}}else if(r===1){n.fillStyle="#F1F6F4";for(const[l,c,h]of[[-20,-6,20],[6,-16,24],[28,-4,18],[0,2,22]])n.beginPath(),n.arc(o+l,a+c,h,0,Math.PI*2),n.fill();n.strokeStyle="#2E6FB0",n.lineWidth=6,n.lineCap="round";for(const l of[-22,0,22])n.beginPath(),n.moveTo(o+l,a+30),n.lineTo(o+l-6,a+50),n.stroke()}else{n.strokeStyle="#4C8FC8",n.lineWidth=7,n.lineCap="round";for(let l=0;l<6;l++){const c=l/6*Math.PI*2;n.beginPath(),n.moveTo(o,a),n.lineTo(o+Math.cos(c)*40,a+Math.sin(c)*40),n.stroke(),n.beginPath(),n.moveTo(o+Math.cos(c)*24,a+Math.sin(c)*24),n.lineTo(o+Math.cos(c+.5)*34,a+Math.sin(c+.5)*34),n.moveTo(o+Math.cos(c)*24,a+Math.sin(c)*24),n.lineTo(o+Math.cos(c-.5)*34,a+Math.sin(c-.5)*34),n.stroke()}}}return Le(e)}let Cs=null;function Cd(){if(Cs)return Cs;const[i,t]=Re(128,128),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(8,30,38,0.75)"),e.addColorStop(.45,"rgba(8,30,38,0.42)"),e.addColorStop(1,"rgba(8,30,38,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Cs=Le(i),Cs.wrapS=Cs.wrapT=An,Cs}function Id(i,t,e=!1,n=21){const[s,r]=Re(64,256),o=r.createLinearGradient(0,0,0,256);if(o.addColorStop(0,i),o.addColorStop(1,t),r.fillStyle=o,r.fillRect(0,0,64,256),e){const l=li(n);r.fillStyle="#F6EFC8";for(let c=0;c<26;c++)r.fillRect(l()*64,l()*150,1.5,1.5)}const a=Le(s);return a.wrapS=a.wrapT=An,a}function qt(i,t={}){const e=new _e({color:t.map?"#ffffff":i,map:t.map??null,normalMap:t.normalMap??null,roughness:t.rough??.38,metalness:.12,clearcoat:1,clearcoatRoughness:.09,side:t.side??Ni});return t.normalMap&&e.normalScale.set(.6,.6),e}function yi(i,t,e,n=1,s=5){const r=q_(i,t,e,s);return r.repeat.set(n,n),qt(i,{map:r})}const tl=new Map;function ie(i=P.gold,t=.28){const e=i+t;return tl.has(e)||tl.set(e,new Xe({color:i,metalness:.85,roughness:t})),tl.get(e)}function gn(i,t,e,n=1,s=7){const r=Uc(i,t,e,s);r.map.repeat.set(n,n),r.normalMap.repeat.multiplyScalar(n);const o=new _e({color:"#ffffff",map:r.map,normalMap:r.normalMap,roughness:.92,metalness:0,sheen:.7,sheenRoughness:.6,sheenColor:new Dt(t).lerp(new Dt("#ffffff"),.5),side:Fe});return o.normalScale.set(.45,.45),o}function ze(i){return new _e({color:i,roughness:.9,sheen:.6,sheenRoughness:.5,sheenColor:new Dt(i).lerp(new Dt("#ffffff"),.5),side:Fe})}function zo(i="#FBFDFC"){return new _e({color:i,roughness:.14,metalness:0,clearcoat:1,clearcoatRoughness:.05})}function $_(){return new _e({color:P.skin,roughness:.58,sheen:.35,sheenColor:new Dt("#ffe3d6"),clearcoat:.25,clearcoatRoughness:.5})}function Bo(i,t=.8){return new Xe({color:i,roughness:t,metalness:0})}function vu(i=.18){return new _e({color:"#DDF2F5",roughness:.04,metalness:0,transparent:!0,opacity:i,clearcoat:1,depthWrite:!1})}function Zr(i,t=1){return new Xe({color:i,emissive:i,emissiveIntensity:t,roughness:.6})}const _u=.86;function Is(i,t,e,n=12){const s=new Qi(i,t,6,n);s.translate(0,-t/2,0);const r=new D(s,e);return r.castShadow=!0,r}function Co(i,t,e){const n=new bc(i);return new D(new Xr(n,16,t,6,!1),e)}function sc(i,t,e){return new T(i*Math.cos(t)*Math.sin(e),i*Math.sin(t),i*Math.cos(t)*Math.cos(e))}function mi(i,t,e,n){i.position.copy(sc(t,e,n));const s=sc(1,e,n);i.lookAt(i.position.clone().add(s))}function Q_(){const[i,t]=Re(128,128),e=t.createRadialGradient(64,70,6,64,64,64);e.addColorStop(0,"#120c16"),e.addColorStop(.32,"#1c1220"),e.addColorStop(.55,"#4a3360"),e.addColorStop(.8,"#2d1f38"),e.addColorStop(1,"#170f1c"),t.fillStyle=e,t.beginPath(),t.arc(64,64,64,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.ellipse(44,40,16,20,-.5,0,Math.PI*2),t.fill(),t.globalAlpha=.8,t.beginPath(),t.arc(84,86,8,0,Math.PI*2),t.fill(),t.globalAlpha=1;const n=Le(i);return n.wrapS=n.wrapT=An,n}function j_(){const[i,t]=Re(256,128),e=li(31);t.fillStyle=P.hair,t.fillRect(0,0,256,128);for(let n=0;n<220;n++){const s=e()*256;t.strokeStyle=e()<.5?P.hairLight:"#55281f",t.globalAlpha=.35+e()*.4,t.lineWidth=1+e()*1.5,t.beginPath(),t.moveTo(s,0),t.bezierCurveTo(s+(e()-.5)*8,40,s+(e()-.5)*8,80,s+(e()-.5)*6,128),t.stroke()}return t.globalAlpha=1,Le(i)}function Io(i,t,e,n,s,r){const o=Uc(i,t,e,r,256),[a,l]=Re(512,256),c=o.map.image;for(let d=0;d<512;d+=256)l.drawImage(c,d,0,256,256);if(s==="lace"){l.fillStyle=n,l.fillRect(0,222,512,34),l.fillStyle=t;for(let d=0;d<512;d+=16)l.beginPath(),l.arc(d+8,236,4,0,Math.PI*2),l.fill();l.strokeStyle=n,l.lineWidth=2,l.beginPath(),l.moveTo(0,214),l.lineTo(512,214),l.stroke()}else if(s==="band")l.fillStyle=n,l.fillRect(0,226,512,14),l.setLineDash([6,5]),l.strokeStyle="rgba(255,255,255,0.9)",l.lineWidth=2,l.beginPath(),l.moveTo(0,220),l.lineTo(512,220),l.stroke(),l.setLineDash([]);else if(s==="ruffle"){l.fillStyle=n;for(let d=0;d<512;d+=24)l.beginPath(),l.ellipse(d+12,246,13,12,0,0,Math.PI*2),l.fill()}const h=Le(a);return h.wrapT=An,{map:h,normalMap:o.normalMap}}function Zi(i,t,e,n=7,s=1){const r=Uc(i,t,e,n);r.map.repeat.set(s,s);const o=new _e({map:r.map,normalMap:r.normalMap,roughness:.9,sheen:.8,sheenRoughness:.55,sheenColor:new Dt(t).lerp(new Dt("#fff"),.55),side:Fe});return o.normalScale.set(.5,.5),o}function xr(i){return new _e({color:i,roughness:.3,clearcoat:1,clearcoatRoughness:.15,sheen:0})}class vr{constructor(t,e,n,s,r=.84,o=.02){L(this,"top");L(this,"bottom");L(this,"len");L(this,"depth");L(this,"y0");L(this,"mesh");L(this,"geo");L(this,"rings",8);L(this,"segs",40);this.top=e,this.bottom=n,this.len=s,this.depth=r,this.y0=o;const a=this.rings,l=this.segs,c=new Float32Array((a+1)*(l+1)*3),h=new Float32Array((a+1)*(l+1)*2),d=[];for(let u=0;u<=a;u++)for(let f=0;f<=l;f++){const g=u*(l+1)+f;if(h[g*2]=f/l*2,h[g*2+1]=1-u/a,u<a&&f<l){const x=g,m=g+l+1;d.push(x,m,x+1,m,m+1,x+1)}}this.geo=new Oe,this.geo.setAttribute("position",new Mn(c,3)),this.geo.setAttribute("uv",new Mn(h,2)),this.geo.setIndex(d),this.mesh=new D(this.geo,t),this.mesh.castShadow=!0,this.update(0,0,0,0,0)}update(t,e,n,s,r){const o=this.geo.getAttribute("position"),a=this.rings,l=this.segs,c=Math.max(0,Math.min(1.2,t));for(let h=0;h<=a;h++){const d=h/a,u=1-Math.pow(1-d,1.7),f=this.top+(this.bottom*(1+.8*c)-this.top)*u,g=this.y0-this.len*d*(1-.38*c*d);for(let x=0;x<=l;x++){const m=x/l*Math.PI*2,p=(.012*Math.sin(9*m+n*1.5*c)+c*.03*Math.sin(5*m-n*7))*d;let _=(f+p)*Math.sin(m),w=(f+p)*Math.cos(m)*this.depth,v=g;if(_+=s*d*d,w+=r*d*d,e>0){const R=Math.max(0,Math.cos(m))*e;w+=R*this.len*d*1.05,v+=(this.y0-.05-.05*d-v)*R,_*=1+e*.25*d}const S=(h*(l+1)+x)*3;o.array[S]=_,o.array[S+1]=v,o.array[S+2]=w}}o.needsUpdate=!0,this.geo.computeVertexNormals(),this.geo.computeBoundingSphere()}}class ty{constructor(t){L(this,"root",new Mt);L(this,"body",new Mt);L(this,"pelvis",new Mt);L(this,"spine",new Mt);L(this,"headPivot",new Mt);L(this,"head",new Mt);L(this,"shoulderL",new Mt);L(this,"shoulderR",new Mt);L(this,"elbowL",new Mt);L(this,"elbowR",new Mt);L(this,"handL",new Mt);L(this,"handR",new Mt);L(this,"hipL",new Mt);L(this,"hipR",new Mt);L(this,"kneeL",new Mt);L(this,"kneeR",new Mt);L(this,"ankleL",new Mt);L(this,"ankleR",new Mt);L(this,"anchors",{handR:new Ge,handL:new Ge,front:new Ge,hug:new Ge});L(this,"outfit","day");L(this,"outfits",{});L(this,"eyes",[]);L(this,"mouthSmile");L(this,"mouthO");L(this,"brows",[]);L(this,"braids",[]);L(this,"braidVel",[0,0]);L(this,"braidAng",[0,0]);L(this,"boots",[]);L(this,"bootsMat",xr(P.gold));L(this,"nightcap");L(this,"bow");L(this,"hood");L(this,"bootsOn",!1);L(this,"shadow");L(this,"meshes",[]);const e=$_();this.root.add(this.body),this.body.add(this.pelvis),this.pelvis.position.y=_u,this.pelvis.add(this.spine),this.spine.position.y=.02,this.spine.rotation.order="YXZ";for(const[o,a,l,c]of[[this.hipL,this.kneeL,this.ankleL,1],[this.hipR,this.kneeR,this.ankleR,-1]])o.position.set(.095*c,-.02,0),this.pelvis.add(o),o.add(Is(.066,.3,e)),a.position.y=-.38,o.add(a),a.add(Is(.056,.28,e)),l.position.y=-.36,a.add(l);const n=new D(new kt(.16,20,14),e);n.scale.set(1.05,.7,.85),this.pelvis.add(n);for(const[o,a,l,c]of[[this.shoulderL,this.elbowL,this.handL,1],[this.shoulderR,this.elbowR,this.handR,-1]]){o.position.set(.205*c,.385,0),this.spine.add(o),o.add(Is(.048,.2,e)),a.position.y=-.265,o.add(a),a.add(Is(.043,.18,e)),l.position.y=-.25,a.add(l);const h=new D(new kt(.066,16,12),e);h.scale.set(.82,1,.62),h.position.y=-.02,h.castShadow=!0,l.add(h);const d=new D(new kt(.026,10,8),e);d.position.set(-.04*c,0,.03),l.add(d)}this.anchors.handR.position.set(0,-.06,.04),this.handR.add(this.anchors.handR),this.anchors.handL.position.set(0,-.06,.04),this.handL.add(this.anchors.handL),this.anchors.front.position.set(0,.16,.34),this.spine.add(this.anchors.front),this.anchors.hug.position.set(0,.22,.24),this.spine.add(this.anchors.hug);const s=new D(new we(.055,.06,.12,12),e);s.position.y=.47,this.spine.add(s),this.headPivot.position.y=.46,this.headPivot.rotation.order="YXZ",this.spine.add(this.headPivot),this.head.position.y=.3,this.headPivot.add(this.head),this.buildHead(e),this.buildOutfits(),this.buildBoots(),this.setOutfit("day");const r=new D(new be(.95,.75),new Ue({map:t,transparent:!0,depthWrite:!1,opacity:.8}));r.rotation.x=-Math.PI/2,r.position.y=.006,r.renderOrder=1,this.shadow=r,this.root.traverse(o=>{o.isMesh&&(o.castShadow=!0,this.meshes.push(o))})}buildHead(t){const n=new D(new kt(.31,40,30),t);n.scale.set(1,.97,.95),this.head.add(n);const s=new Xe({color:P.ink,roughness:.5}),r=new _e({map:Q_(),roughness:.15,clearcoat:1,clearcoatRoughness:.03});for(const w of[1,-1]){const v=new Mt;mi(v,.31*.955,-.07,.37*w);const S=new D(new kt(1,20,14),r);S.scale.set(.058,.072,.02),S.position.z=.004,v.add(S);const A=new Mt,R=Co([new T(-.07,-.004,.006),new T(-.03,.058,.016),new T(.03,.06,.016),new T(.072,0,.006)],.0085,s);A.add(R);for(let N=0;N<2;N++){const U=new D(new _i(.008,.045,5),s);U.position.set(.066*w-.004*w*N*4,.012+N*.03,.012),U.rotation.z=-w*(.9-N*.35),A.add(U)}A.position.y=.012,v.add(A);const y=Co([new T(-.06,0,.01),new T(0,-.03,.016),new T(.06,0,.01)],.008,s);y.visible=!1,v.add(y),this.head.add(v),this.eyes.push({group:v,iris:S,lid:A,sleep:y,side:w});const b=Co([new T(-.045,-.005,0),new T(0,.012,.004),new T(.045,-.002,0)],.007,new Xe({color:P.hair,roughness:.7}));mi(b,.31*.985,.2,.36*w),this.head.add(b),this.brows.push(b);const C=new D(new Be(.052,20),new Ue({color:P.blush,transparent:!0,opacity:.45,depthWrite:!1}));mi(C,.31*.958,-.24,.53*w),this.head.add(C)}const o=new D(new kt(.03,14,10),new _e({color:"#F2C2AE",roughness:.45,clearcoat:.4}));o.scale.set(1,.85,1.05),mi(o,.31*.955,-.19,0),this.head.add(o);const a=new Xe({color:"#B8405E",roughness:.5});this.mouthSmile=Co([new T(-.045,.008,0),new T(0,-.018,.006),new T(.045,.008,0)],.0085,a),mi(this.mouthSmile,.31*.955,-.33,0),this.head.add(this.mouthSmile),this.mouthO=new D(new Be(.03,18),new Xe({color:"#7A2440",roughness:.6})),mi(this.mouthO,.31*.952,-.35,0),this.mouthO.scale.set(1,.001,1),this.head.add(this.mouthO);const l=new _e({map:j_(),roughness:.62,sheen:.8,sheenColor:new Dt("#c07a5a"),sheenRoughness:.4}),c=new D(new kt(.31*1.06,40,20,0,Math.PI*2,0,1.18),l);c.position.set(0,.012,-.012),this.head.add(c);const h=new D(new kt(.31*1.07,36,20,Math.PI/2+1.35,Math.PI*2-2.7,.9,1.55),l);h.position.set(0,0,-.02),this.head.add(h);for(let w=-2;w<=2;w++){const v=new D(new kt(.1,16,12),l);v.scale.set(1.05,.62,.55),mi(v,.31*1,.36-Math.abs(w)*.03,w*.27),v.position.multiplyScalar(1),this.head.add(v)}for(const w of[1,-1]){const v=new D(new kt(.09,14,12),l);v.scale.set(.5,1.5,.7),mi(v,.31*1,-.06,1.45*w),this.head.add(v);const S=new Mt;S.position.copy(sc(.31*.95,-.38,2.05*w)),this.head.add(S);for(let y=0;y<5;y++){const b=new D(new kt(.062-y*.005,14,10),l);b.position.set(.012*w*y,-.075*y-.02,.006*y),b.scale.set(1,.95,.9),b.rotation.z=(y%2?.4:-.4)*w,S.add(b)}const A=ze(P.berry);for(const y of[1,-1]){const b=new D(new kt(.045,12,8),A);b.scale.set(1.1,.6,.5),b.position.set(.012*w*5+.035*y,-.4,.04),S.add(b)}const R=new D(new _i(.04,.09,10),l);R.position.set(.012*w*5,-.47,.03),R.rotation.x=Math.PI,S.add(R),this.braids.push(S)}const d=new Mt,u=ze(P.berry);for(const w of[1,-1]){const v=new D(new kt(.075,14,10),u);v.scale.set(1.1,.7,.45),v.position.set(.075*w,0,0),v.rotation.z=.35*w,d.add(v)}const f=new D(new kt(.035,10,8),u);d.add(f),mi(d,.31*1.05,.72,.62),this.head.add(d),this.bow=d;const g=Zi("stars",P.pajama,P.porcelain,41),x=new Mt,m=new D(new _i(.29,.48,24,1,!0),g);m.position.set(0,.32,-.05),m.rotation.set(-.5,0,.35),x.add(m);const p=new D(new Ze(.29,.04,10,28),ze(P.porcelain));p.position.set(0,.17,-.02),p.rotation.x=Math.PI/2-.35,x.add(p);const _=new D(new kt(.06,12,10),ze(P.porcelain));_.position.set(.17,.48,-.25),x.add(_),x.visible=!1,this.head.add(x),this.nightcap=x}torso(t,e=.8,n=1){const s=[[.15,-.04],[.163,.04],[.17,.14],[.178,.24],[.18,.31],[.165,.37],[.12,.42],[.07,.45],[.055,.46]].map(([o,a])=>new ut(o*n,a)),r=new D(new Ui(s,28),t);return r.scale.z=e,r.castShadow=!0,r}sleeve(t,e,n,s){const r=[];for(const[o,a]of[[this.shoulderL,this.elbowL],[this.shoulderR,this.elbowR]]){const l=Is(e,.2,t,14);if(o.add(l),r.push(l),n){const c=new D(new we(n,n*1.12,.2,14,1,!0),t);if(c.position.y=-.1,a.add(c),r.push(c),s){const h=new D(new Ze(n*1.1,.016,8,16),s);h.rotation.x=Math.PI/2,h.position.y=-.2,a.add(h),r.push(h)}}}return r}legCover(t,e,n,s=.3,r=0){const o=[];for(const[a,l]of[[this.hipL,this.kneeL],[this.hipR,this.kneeR]]){if(e){const h=Is(e,.3,t,14);a.add(h),o.push(h)}const c=new D(new we(n,n*.95,s,14),t);c.position.y=-r-s/2,l.add(c),o.push(c)}return o}shoes(t,e,n=!1){const s=[];for(const r of[this.ankleL,this.ankleR]){const o=new Mt,a=new D(new Pn(.13,n?.1:.08,.22,3,n?.045:.035),t);if(a.position.set(0,-.045,.04),o.add(a),e){const l=new D(new Ze(.062,.012,6,16,Math.PI),t);l.position.set(0,-.02,0),l.rotation.y=Math.PI/2,o.add(l);const c=new D(new kt(.014,8,6),ie(P.gold));c.position.set(.066,-.02,0),o.add(c)}if(n){const l=new D(new kt(.045,12,8),ze(P.porcelain));l.position.set(0,-0,.12),o.add(l)}r.add(o),s.push(o)}return s}collar(t,e){const n=new Mt;if(e==="piping"){const r=new D(new Ze(.085,.016,8,24),t);return r.rotation.x=Math.PI/2,r.position.y=.445,n.add(r),n}const s=e==="lace"?12:2;for(let r=0;r<s;r++){const o=new yn;e==="lace"?o.absarc(0,0,.05,0,Math.PI*2,!1):e==="pointed"?(o.moveTo(0,.04),o.lineTo(.13,-.02),o.lineTo(.02,-.1),o.lineTo(-.02,-.02)):o.absellipse(0,0,.1,.065,0,Math.PI*2,!1,0);const a=new D(new ji(o,12),t);if(e==="lace"){const l=r/s*Math.PI*2;a.position.set(Math.sin(l)*.12,.43,Math.cos(l)*.1),a.lookAt(a.position.clone().multiplyScalar(2).setY(.9))}else{const l=r===0?1:-1;a.position.set(.07*l,.42,.115),a.rotation.set(-.95,.35*l,e==="pointed"?l>0?0:Math.PI:0),e==="pointed"&&l<0&&(a.scale.x=-1)}n.add(a)}return n}buttons(t,e,n,s=.016,r=.148){const o=new Mt;for(let a=0;a<e;a++){const l=new D(new kt(s,10,8),t);l.scale.z=.5,l.position.set(0,n-a*.075,r),o.add(l)}return o}buildOutfits(){const t=ze(P.porcelain),e=ie(P.gold);{const n=Zi("stripes",P.porcelain,P.coral,51,2),s=Io("dots","#2A8090",P.mint,P.porcelain,"band",52),r=new _e({map:s.map,normalMap:s.normalMap,roughness:.9,sheen:.6,sheenColor:new Dt("#9fd6d9"),side:Fe}),o=this.torso(n);this.spine.add(o);const a=new D(new Pn(.22,.2,.05,3,.02),Zi("dots","#2A8090",P.mint,53,.6));a.position.set(0,.16,.135),this.spine.add(a);const l=[];for(const m of[1,-1]){const p=new D(new Ne(.045,.2,.3),Zi("plain","#2A8090",P.mint,54));p.position.set(.09*m,.33,0),p.rotation.x=0,p.scale.z=1,this.spine.add(p),l.push(p)}const c=this.buttons(e,1,.24,.018,.165),h=c.children[0].clone();c.children[0].position.x=.07,h.position.x=-.07,c.add(h),this.spine.add(c);const d=new vr(r,.17,.31,.34);this.pelvis.add(d.mesh);const u=this.collar(t,"peter");this.spine.add(u);const f=this.sleeve(n,.06,.054,t),g=this.legCover(Zi("check",P.porcelain,P.mint,55),null,.062,.26,.05),x=this.shoes(new _e({color:P.berry,roughness:.25,clearcoat:1}),!0);this.outfits.day={objects:[o,a,...l,c,d.mesh,u,...f,...g,...x],skirts:[d],shoes:x}}{const n=Io("dots",P.berry,"#F7D6A0",P.porcelain,"lace",61),s=new _e({map:n.map,normalMap:n.normalMap,roughness:.75,sheen:1,sheenColor:new Dt("#ffd0de"),sheenRoughness:.35,side:Fe}),r=Zi("dots",P.berry,"#F7D6A0",62,1.5),o=this.torso(r,.8,.98);this.spine.add(o);const a=Io("plain",P.lavender,P.lavender,P.lavenderDeep,"ruffle",63),l=new _e({map:a.map,roughness:.85,sheen:1,sheenColor:new Dt("#e6e0ff"),side:Fe}),c=new vr(l,.16,.44,.56),h=new vr(s,.17,.43,.5);this.pelvis.add(c.mesh,h.mesh);const d=new D(new Ze(.162,.03,8,28),ze(P.lavender));d.rotation.x=Math.PI/2,d.scale.y=.82,d.position.y=.03,this.spine.add(d);const u=new Mt;for(const _ of[1,-1]){const w=new D(new kt(.07,12,8),ze(P.lavender));w.scale.set(1.2,.7,.4),w.position.set(.08*_,.05,-.15),u.add(w);const v=new D(new Ne(.05,.22,.015),ze(P.lavender));v.position.set(.04*_,-.08,-.16),v.rotation.z=.25*_,u.add(v)}this.spine.add(u);const f=this.collar(t,"lace");this.spine.add(f);const g=[];for(const _ of[this.shoulderL,this.shoulderR]){const w=new D(new kt(.095,16,12),r);w.scale.set(1,.85,1),w.position.y=-.04,_.add(w),g.push(w);const v=new D(new Ze(.056,.014,6,16),t);v.rotation.x=Math.PI/2,v.position.y=-.12,_.add(v),g.push(v)}const x=this.legCover(ze("#FBFBFF"),.07,.06,.32,0),m=this.buttons(ie(P.gold),3,.33,.014,.142);this.spine.add(m);const p=this.shoes(new _e({color:P.berryDark,roughness:.2,clearcoat:1}),!0);this.outfits.dress={objects:[o,c.mesh,h.mesh,d,u,f,...g,...x,m,...p],skirts:[c,h],shoes:p}}{const n=Zi("stars",P.pajama,P.porcelain,71,1.4),s=this.torso(n,.86,1.08);this.spine.add(s);const r=Io("stars",P.pajama,P.porcelain,P.pajamaDeep,"band",72),o=new vr(new _e({map:r.map,roughness:.9,sheen:.7,sheenColor:new Dt("#ffffff"),side:Fe}),.18,.23,.14,.86,.06);this.pelvis.add(o.mesh);const a=this.sleeve(n,.066,.064,ze(P.pajamaDeep)),l=this.legCover(n,.082,.072,.34,0),c=[];for(const f of[this.kneeL,this.kneeR]){const g=new D(new Ze(.074,.016,8,16),ze(P.pajamaDeep));g.rotation.x=Math.PI/2,g.position.y=-.33,f.add(g),c.push(g)}const h=this.collar(ze(P.pajamaDeep),"piping");this.spine.add(h);const d=this.buttons(t,3,.36,.017,.152);this.spine.add(d);const u=this.shoes(ze(P.mint),!1,!0);this.outfits.pajamas={objects:[s,o.mesh,...a,...l,...c,h,d,...u],skirts:[o],shoes:u}}{const n=xr(P.rainCoat),s=this.torso(n,.86,1.1);this.spine.add(s);const r=new vr(n,.19,.33,.46,.86,.04);this.pelvis.add(r.mesh);const o=this.sleeve(n,.068,.066,xr(P.teal)),a=new D(new kt(.26,24,14,0,Math.PI*2,0,Math.PI/2),n);a.position.set(0,.47,-.14),a.rotation.x=-1.2,a.scale.set(1,.8,.9),this.spine.add(a),this.hood=a;const l=this.collar(xr("#E0B53A"),"pointed");this.spine.add(l);const c=new Mt;for(let u=0;u<3;u++){const f=new D(new Qi(.012,.04,4,6),ey());f.rotation.z=Math.PI/2,f.position.set(0,.3-u*.12,.158),c.add(f)}this.spine.add(c);const h=this.legCover(ze(P.porcelain),null,.062,.2,.1),d=this.shoes(new _e({color:P.berry,roughness:.25,clearcoat:1}),!0);this.outfits.rainwear={objects:[s,r.mesh,...o,a,l,c,...h,...d],skirts:[r],shoes:d}}}buildBoots(){for(const[t,e]of[[this.kneeL,this.ankleL],[this.kneeR,this.ankleR]]){const n=new D(new we(.075,.07,.24,16),this.bootsMat);n.position.y=-.24,t.add(n);const s=new D(new Pn(.15,.1,.24,3,.045),this.bootsMat);s.position.set(0,-.045,.04),e.add(s);const r=new D(new Ze(.076,.012,6,16),xr(P.teal));r.rotation.x=Math.PI/2,r.position.y=-.12,t.add(r),this.boots.push(n,s,r)}for(const t of this.boots)t.visible=!1}setOutfit(t){this.outfit=t;for(const e of Object.keys(this.outfits))for(const n of this.outfits[e].objects)n.visible=e===t;this.nightcap.visible=t==="pajamas",this.bow.visible=t!=="pajamas",this.setBoots(this.bootsOn)}setBoots(t,e=0){this.bootsOn=t;for(const n of this.boots)n.visible=t;for(const n of this.outfits[this.outfit].shoes)n.visible=!t;this.bootsMat.color.set(P.gold).lerp(new Dt("#B8862A"),e*.6)}setHood(t){this.hood.rotation.x=-1.2+t*1.25,this.hood.position.y=.47+t*.12}apply(t,e,n,s,r){this.pelvis.position.y=_u+t.y,this.spine.rotation.set(t.lean,t.twist,t.roll),this.headPivot.rotation.set(t.headPitch,t.headYaw,t.headRoll),this.shoulderL.rotation.set(-t.lArmPitch,0,t.lArmOut),this.shoulderR.rotation.set(-t.rArmPitch,0,-t.rArmOut),this.elbowL.rotation.x=-t.lElbow,this.elbowR.rotation.x=-t.rElbow,this.hipL.rotation.set(-t.lLegPitch,0,t.lLegOut),this.hipR.rotation.set(-t.rLegPitch,0,-t.rLegOut),this.kneeL.rotation.x=t.lKnee,this.kneeR.rotation.x=t.rKnee,this.ankleL.rotation.x=-Math.min(.6,t.lKnee*.3)+(t.sit>.5?.25:0),this.ankleR.rotation.x=-Math.min(.6,t.rKnee*.3)+(t.sit>.5?.25:0);const o=Math.max(-.12,Math.min(.12,-s.x*.05)),a=Math.max(-.12,Math.min(.12,-s.z*.05));for(const d of this.outfits[this.outfit].skirts)d.update(t.flare,t.sit,e,o,a);const l=Math.max(0,Math.min(1,t.eye)),c=Math.max(0,Math.min(1,t.happy));for(const d of this.eyes){const u=l*(1-c);d.iris.scale.y=.072*Math.max(.02,u),d.iris.position.x=t.gazeX*.02,d.iris.position.y=t.gazeY*.016-(1-u)*.02,d.iris.visible=u>.06,d.lid.position.y=.012-(1-u)*.05+c*0,d.lid.scale.y=c>.5?1.15:1,d.sleep.visible=u<.08&&c<.5,d.lid.visible=!d.sleep.visible}for(const d of this.brows)d.position.y=d.userData.y0??(d.userData.y0=d.position.y);for(const d of this.brows)d.position.y=d.userData.y0+t.brow*.025;const h=Math.max(0,Math.min(1,t.mouth));this.mouthO.scale.set(.8+h*.3,Math.max(.001,h),1),this.mouthO.visible=h>.05,this.mouthSmile.visible=h<.5;for(let d=0;d<2;d++){const u=Math.max(-.6,Math.min(.6,-r*.12*(d?-1:1)+s.z*.05+Math.sin(e*1.3+d)*.02)),f=40,g=6;let x=Math.min(n,.25);for(;x>1e-6;){const m=Math.min(x,.016666666666666666);this.braidVel[d]+=(f*(u-this.braidAng[d])-g*this.braidVel[d])*m,this.braidAng[d]+=this.braidVel[d]*m,x-=m}this.braidAng[d]=Math.max(-.9,Math.min(.9,this.braidAng[d])),this.braids[d].rotation.z=this.braidAng[d]-t.headRoll*.5,this.braids[d].rotation.x=-t.headPitch*.6+Math.abs(r)*.1}}}function ey(){return new Xe({color:"#7A4B2A",roughness:.6})}const ny=9;class iy{constructor(t,e){L(this,"el");L(this,"h");L(this,"active",null);L(this,"handle",null);L(this,"sx",0);L(this,"sy",0);L(this,"dragging",!1);L(this,"enabled",!0);L(this,"down",t=>{if(t.preventDefault(),this.h.any(),!this.enabled||this.active!==null)return;this.active=t.pointerId;try{this.el.setPointerCapture(t.pointerId)}catch{}const e=this.pos(t);this.sx=e.x,this.sy=e.y,this.dragging=!1,this.handle=this.h.press(e.x,e.y)});L(this,"move",t=>{if(t.pointerId!==this.active)return;t.preventDefault();const e=this.pos(t);if(!this.dragging){if(Math.hypot(e.x-this.sx,e.y-this.sy)<ny||!this.handle)return;this.dragging=!0,this.h.dragStart(this.handle,e.x,e.y)}this.h.dragMove(this.handle,e.x,e.y)});L(this,"up",t=>{if(t.pointerId!==this.active)return;t.preventDefault();const e=this.pos(t),n=this.handle,s=this.dragging;this.reset(),s?this.h.dragEnd(n,e.x,e.y):this.h.tap(n,e.x,e.y)});L(this,"cancelEv",t=>{if(t.pointerId!==this.active)return;const e=this.handle,n=this.dragging;this.reset(),e&&this.h.cancel(e)});L(this,"lost",t=>{});this.el=t,this.h=e,t.addEventListener("pointerdown",this.down,{passive:!1}),t.addEventListener("pointermove",this.move,{passive:!1}),t.addEventListener("pointerup",this.up,{passive:!1}),t.addEventListener("pointercancel",this.cancelEv,{passive:!1}),t.addEventListener("lostpointercapture",this.lost),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("touchstart",n=>n.preventDefault(),{passive:!1}),t.addEventListener("gesturestart",n=>n.preventDefault())}pos(t){const e=this.el.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}}abort(){if(this.active===null)return;const t=this.handle;try{this.el.releasePointerCapture(this.active)}catch{}this.reset(),t&&this.h.cancel(t)}isBusy(){return this.active!==null}reset(){this.active=null,this.handle=null,this.dragging=!1}}function sy(i,t){return i/t<.9?"portrait":"landscape"}const ry={x0:-.35,x1:Ct.W+.35,y0:-.45,y1:Ct.H+.75,z0:0,z1:Ct.D};function oy(i){if(i==="portrait"){const e={x:Ct.W/2,y:-5.7,z:Ct.D+1,w:Ct.W-.5,tiers:3,tierGap:1.65,depth:.8,cols:4,itemScale:2},n=Ct.W;return{orientation:i,pitchDeg:31,fovDeg:34,frame:[{x0:.12,x1:n-.12,y0:-.45,y1:Ct.H,z0:0,z1:Ct.D},{x0:.12,x1:n-.12,y0:Ct.H,y1:Ct.H+.75,z0:Ct.D,z1:Ct.D+.3},{x0:n/2-.6,x1:n/2+.6,y0:Ct.H+.75,y1:Ct.H+1.38,z0:Ct.D+.25,z1:Ct.D+.25},{x0:e.x-e.w/2+.2,x1:e.x+e.w/2-.2,y0:e.y-.1,y1:e.y+e.tiers*e.tierGap,z0:e.z-e.depth/2,z1:e.z+e.depth/2}],shelf:e}}const t={x:Ct.W+1.75,y:-.4,z:Ct.D+.75,w:2.6,tiers:4,tierGap:1.08,depth:.85,cols:3,itemScale:1.35};return{orientation:i,pitchDeg:14,fovDeg:28,frame:[ry,{x0:t.x-t.w/2,x1:t.x+t.w/2,y0:t.y-.1,y1:t.y+t.tiers*t.tierGap+.35,z0:t.z-t.depth/2,z1:t.z+t.depth/2}],shelf:t}}function Dd(i,t){const e=t.x-i.x,n=t.y-i.y,s=t.z-i.z,r=Math.sin(i.pitch),o=Math.cos(i.pitch),a=-n*r-s*o,l=n*o-s*r,c=Math.tan(i.fov/2),h=e/(a*c*i.aspect),d=l/(a*c);return{x:(h+1)/2*i.width,y:(1-d)/2*i.height,depth:a}}function ay(i,t,e,n=0){const s=Math.tan(i.fov/2),r=t/i.width*2-1,o=1-e/i.height*2,a=Math.sin(i.pitch),l=Math.cos(i.pitch),c=r*s*i.aspect,h=o*s,d={x:c,y:-a+h*l,z:-l-h*a};if(Math.abs(d.y)<1e-6)return null;const u=(n-i.y)/d.y;return u<=0?null:{x:i.x+d.x*u,z:i.z+d.z*u}}function ly(i){const t=[];for(const e of[i.x0,i.x1])for(const n of[i.y0,i.y1])for(const s of[i.z0,i.z1])t.push({x:e,y:n,z:s});return t}function cy(i,t,e,n){const s=i.frame.flatMap(ly),r={x:0,y:0,z:0,pitch:i.pitchDeg*Math.PI/180,fov:i.fovDeg*Math.PI/180,aspect:t/e,width:t,height:e},o={x0:n.left+6,x1:t-n.right-6,y0:n.top+6,y1:e-n.bottom-6},a=Math.max(50,o.x1-o.x0),l=Math.max(50,o.y1-o.y0),c=s.reduce((p,_)=>p+_.x,0)/s.length,h=s.reduce((p,_)=>p+_.y,0)/s.length,d=s.reduce((p,_)=>p+_.z,0)/s.length;let u=18;const f=Math.sin(r.pitch),g=Math.cos(r.pitch);let x=0,m=0;for(let p=0;p<60;p++){r.x=c+x,r.y=h+m*g+u*f,r.z=d-m*f+u*g;let _=1/0,w=-1/0,v=1/0,S=-1/0;for(const C of s){const N=Dd(r,C);_=Math.min(_,N.x),w=Math.max(w,N.x),v=Math.min(v,N.y),S=Math.max(S,N.y)}const A=Math.max((w-_)/a,(S-v)/l),R=e/(2*Math.tan(r.fov/2)*u),y=((_+w)/2-(o.x0+o.x1)/2)/R,b=((v+S)/2-(o.y0+o.y1)/2)/R;if(x+=y*.8,m-=b*.8,u*=1+(A-1)*.6,Math.abs(A-1)<.002&&Math.abs(y)<.002&&Math.abs(b)<.002)break}return r}function hy(i,t){const e=i.width/i.height<.9,n=17*Math.PI/180,s=e?4.5:4.25,r=1.55,o=e?3:5.4,a=e?3.2:3.8,l=Math.tan(i.fov/2),c=l*i.aspect,h=Math.max(50,i.width-t.left-t.right)/i.width,d=Math.max(50,i.height-t.top-t.bottom)/i.height,u=Math.max(o/2/(c*h),a/2/(l*d));return{...i,pitch:n,x:s,y:r+u*Math.sin(n),z:u*Math.cos(n)}}class uy extends Vu{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new Ne;t.deleteAttribute("uv");const e=new Xe({side:xn}),n=new Xe,s=new hd(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new D(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Yu(t,n,6),a=new Ge;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new D(t,Ds(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new D(t,Ds(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new D(t,Ds(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const d=new D(t,Ds(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const u=new D(t,Ds(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const f=new D(t,Ds(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ds(i){return new Zp({color:0,emissive:16777215,emissiveIntensity:i})}function dy(i){const t=i.shelf,e=t.w/t.cols,n=(a,l)=>new T(t.x-t.w/2+(a+.5)*e,t.y+l*t.tierGap+.07,t.z),s=[];let r;if(i.orientation==="portrait"){for(let a=0;a<4;a++)s.push(n(a,2));for(let a=0;a<4;a++)s.push(n(a,1));r={cards:n(0,0),camera:n(1,0),album:n(2.5,0)}}else{for(let a=2;a>=0;a--)for(let l=0;l<3;l++)s.push(n(l,a));r={camera:n(0,3),album:n(1,3),cards:n(2,3)}}s.length=Zl;const o=new oi(new T(t.x-t.w/2,t.y-.1,t.z-t.depth/2),new T(t.x+t.w/2,t.y+t.tiers*t.tierGap+.2,t.z+t.depth/2));return{slots:s,tools:r,box:o}}function fy(i){const t=i.shelf,e=new Mt,n=qt(P.mint,{rough:.3}),s=qt(P.berry,{rough:.3}),r=yi(P.tealDark,"dots",P.goldDark,i.orientation==="portrait"?6:3,221),o=t.tiers*t.tierGap+.1,a=new D(new Pn(t.w,o,.05,2,.02),r);a.position.set(t.x,t.y+o/2-.05,t.z-t.depth/2),a.receiveShadow=!0,e.add(a);for(let l=0;l<=t.tiers;l++){if(l===t.tiers&&i.orientation==="portrait")continue;const c=t.y+l*t.tierGap,h=new D(new Pn(t.w,.08,t.depth,2,.03),l===t.tiers?s:n);h.position.set(t.x,c+.03,t.z),h.receiveShadow=!0,h.castShadow=!0,e.add(h);const d=Math.round(t.w/.22);for(let u=0;u<d;u++){const f=new D(new Be(.11,14,Math.PI,Math.PI),s);f.position.set(t.x-t.w/2+(u+.5)*(t.w/d),c-.01,t.z+t.depth/2+.002),e.add(f)}for(let u=0;u<2;u++){const f=new D(new kt(.02,8,6),ie(P.gold));f.position.set(t.x+(u?1:-1)*(t.w/2-.08),c+.03,t.z+t.depth/2+.01),e.add(f)}}for(const l of[-1,1]){const c=new D(new Pn(.08,o+.12,t.depth+.04,2,.03),s);c.position.set(t.x+l*(t.w/2+.04),t.y+o/2-.02,t.z),c.castShadow=!0,e.add(c);const h=new D(new kt(.06,12,10),ie(P.gold));h.position.set(t.x+l*(t.w/2+.04),t.y+o+.06,t.z),e.add(h)}if(i.orientation==="landscape"){const l=new D(new Pn(t.w+.3,.14,t.depth+.12,2,.04),s);l.position.set(t.x,t.y+o+.02,t.z),e.add(l)}return e}function py(){const i=getComputedStyle(document.documentElement),t=e=>parseFloat(i.getPropertyValue(e))||0;return{top:Math.max(t("--sat"),4),right:t("--sar"),bottom:Math.max(t("--sab"),4),left:t("--sal")}}class my{constructor(t){L(this,"container");L(this,"renderer");L(this,"scene",new Vu);L(this,"camera",new _n(30,1,.1,80));L(this,"cam");L(this,"baseCam");L(this,"focusCam");L(this,"focus",0);L(this,"layout");L(this,"orientation",null);L(this,"shelf");L(this,"shelfGroup",null);L(this,"width",1);L(this,"height",1);L(this,"dprCap",2);L(this,"lowgfx",new URLSearchParams(location.search).has("lowgfx"));L(this,"slowFrames",0);L(this,"onLayout",null);this.container=t,this.renderer=new s_({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.renderer.outputColorSpace=rn,this.renderer.toneMapping=ac,this.renderer.shadowMap.enabled=!this.lowgfx,this.lowgfx&&(this.dprCap=.5),this.renderer.shadowMap.type=Su,this.renderer.domElement.setAttribute("aria-label","dollhouse"),t.appendChild(this.renderer.domElement);const e=new Vl(this.renderer);this.scene.environment=e.fromScene(new uy,.04).texture,this.scene.environmentIntensity=.55;const[n,s]=Re(64,64);s.fillStyle="#16505C",s.fillRect(0,0,64,64),s.fillStyle="rgba(185,223,214,0.10)",s.fillRect(0,31,64,2),s.fillStyle="rgba(240,201,81,0.35)",s.beginPath(),s.arc(16,16,2.5,0,Math.PI*2),s.arc(48,48,2.5,0,Math.PI*2),s.fill();const r=Le(n);r.repeat.set(30,20);const o=new D(new be(60,40),new Ue({map:r}));o.position.set(3,2,-13.5),o.name="backdrop",this.scene.background=new Dt("#16505C");const a=new yn;a.moveTo(-30,-30),a.lineTo(36,-30),a.lineTo(36,30),a.lineTo(-30,30);const l=new Hs;l.moveTo(.02,-.05),l.lineTo(.02,Ct.H+.1),l.lineTo(Ct.W-.02,Ct.H+.1),l.lineTo(Ct.W-.02,-.05),a.holes.push(l);const c=new ji(a),h=c.getAttribute("uv");for(let f=0;f<h.count;f++)h.setXY(f,h.getX(f)/2,h.getY(f)/2);const d=r.clone();d.repeat.set(2.4,2.4),d.needsUpdate=!0;const u=new D(c,new Ue({map:d,color:"#ffffff"}));u.position.z=Ct.D-.02,u.name="facade",this.scene.add(u),this.camera.rotation.order="YXZ",this.resize()}resize(){const t=Math.max(1,this.container.clientWidth),e=Math.max(1,this.container.clientHeight);this.width=t,this.height=e;const n=sy(t,e);n!==this.orientation&&(this.orientation=n,this.layout=oy(n),this.shelf=dy(this.layout),this.shelfGroup&&this.scene.remove(this.shelfGroup),this.shelfGroup=fy(this.layout),this.scene.add(this.shelfGroup));const s=py();this.baseCam=cy(this.layout,t,e,s),this.focusCam=hy(this.baseCam,s),this.cam={...this.baseCam},this.camera.fov=this.cam.fov*180/Math.PI,this.camera.aspect=t/e,this.applyCam(),this.renderer.setPixelRatio(this.lowgfx?this.dprCap:Math.min(window.devicePixelRatio||1,this.dprCap)),this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px",this.onLayout?.()}applyCam(){const t=this.focus,e=t*t*(3-2*t);this.cam.x=this.baseCam.x+(this.focusCam.x-this.baseCam.x)*e,this.cam.y=this.baseCam.y+(this.focusCam.y-this.baseCam.y)*e,this.cam.z=this.baseCam.z+(this.focusCam.z-this.baseCam.z)*e,this.cam.pitch=this.baseCam.pitch+(this.focusCam.pitch-this.baseCam.pitch)*e,this.camera.position.set(this.cam.x,this.cam.y,this.cam.z),this.camera.rotation.set(-this.cam.pitch,0,0),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}updateFocus(t,e){const n=t?1:0;Math.abs(n-this.focus)<1e-4||(this.focus+=Math.sign(n-this.focus)*Math.min(Math.abs(n-this.focus),e*.8),this.applyCam())}setQuality(t,e=1){this.lowgfx=!t,this.renderer.shadowMap.enabled=t,this.dprCap=t?e:.5,this.renderer.setPixelRatio(this.dprCap),this.renderer.setSize(this.width,this.height,!1),this.scene.traverse(n=>{const s=n.material;if(s)for(const r of Array.isArray(s)?s:[s])r.needsUpdate=!0})}watchFrame(t){this.lowgfx||(t>1/24?this.slowFrames++:this.slowFrames=Math.max(0,this.slowFrames-1),this.slowFrames>90&&this.dprCap>1.25&&(this.dprCap=Math.max(1.25,this.dprCap-.5),this.slowFrames=0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.dprCap)),this.renderer.setSize(this.width,this.height,!1)))}project(t){return Dd(this.cam,t)}ray(t,e){const n=new o0;return n.setFromCamera(new ut(t/this.width*2-1,-(e/this.height)*2+1),this.camera),n}render(){this.renderer.render(this.scene,this.camera)}photo(t,e=640,n=480){const s=new _n(30,e/n,.1,80),r=Math.min(4.2,Math.max(1.8,t.x));s.position.set(r,4.3,t.z+9.2),s.lookAt(r,1.25,Math.max(1,t.z-.4));const o=new Rn(e,n,{samples:4,colorSpace:rn}),a=this.renderer.getRenderTarget();this.renderer.setRenderTarget(o),this.renderer.render(this.scene,s);const l=new Uint8Array(e*n*4);this.renderer.readRenderTargetPixels(o,0,0,e,n,l),this.renderer.setRenderTarget(a),o.dispose();const[c,h]=Re(e,n),d=h.createImageData(e,n);for(let u=0;u<n;u++)d.data.set(l.subarray((n-1-u)*e*4,(n-u)*e*4),u*e*4);return h.putImageData(d,0,0),c.toDataURL("image/jpeg",.82)}}function _r(i,t){i.fillStyle=P.porcelain,i.fillRect(0,0,256,360),i.fillStyle=t,i.beginPath(),i.roundRect(14,14,228,332,18),i.fill(),i.strokeStyle=P.gold,i.lineWidth=6,i.beginPath(),i.roundRect(8,8,240,344,22),i.stroke()}function yu(i,t,e,n,s=!1){i.fillStyle=P.hair,i.beginPath(),i.arc(t,e-n*.05,n*1.08,0,Math.PI*2),i.fill(),i.fillStyle=P.skin,i.beginPath(),i.arc(t,e+n*.08,n*.9,0,Math.PI*2),i.fill(),i.fillStyle=P.hair,i.beginPath(),i.ellipse(t,e-n*.55,n*.85,n*.4,0,Math.PI,Math.PI*2),i.fill(),i.fillStyle=P.ink,i.strokeStyle=P.ink,i.lineWidth=n*.08;for(const r of[-1,1])s?(i.beginPath(),i.arc(t+r*n*.35,e+n*.1,n*.16,.1,Math.PI-.1),i.stroke()):(i.beginPath(),i.ellipse(t+r*n*.35,e+n*.1,n*.12,n*.16,0,0,Math.PI*2),i.fill());i.fillStyle=P.blush;for(const r of[-1,1])i.beginPath(),i.arc(t+r*n*.55,e+n*.4,n*.14,0,Math.PI*2),i.fill();i.strokeStyle=P.berry,i.beginPath(),i.arc(t,e+n*.42,n*.18,.2,Math.PI-.2),i.stroke()}function Ld(i){const[t,e]=Re(256,360);switch(i){case"free":{_r(e,"#BFE6F3"),e.fillStyle=P.gold,e.beginPath(),e.arc(190,80,34,0,Math.PI*2),e.fill(),e.fillStyle=P.mint,e.fillRect(14,250,228,96),yu(e,128,190,50);break}case"rain":{_r(e,"#8FA6BC"),e.fillStyle="#F1F6F4";for(const[n,s,r]of[[80,70,34],[125,55,42],[170,72,34],[125,85,36]])e.beginPath(),e.arc(n,s,r,0,Math.PI*2),e.fill();e.strokeStyle="#2E6FB0",e.lineWidth=6,e.lineCap="round";for(let n=0;n<9;n++){const s=40+n*22,r=130+n%3*28;e.beginPath(),e.moveTo(s,r),e.lineTo(s-6,r+18),e.stroke()}e.fillStyle=P.gold,e.beginPath(),e.arc(128,250,70,Math.PI,Math.PI*2),e.fill(),e.fillStyle=P.berry,e.beginPath(),e.moveTo(128,180),e.lineTo(100,250),e.lineTo(156,250),e.fill(),e.strokeStyle=P.ink,e.lineWidth=6,e.beginPath(),e.moveTo(128,250),e.lineTo(128,310),e.arc(116,310,12,0,Math.PI),e.stroke(),e.fillStyle="#6FA9CF",e.beginPath(),e.ellipse(128,328,90,12,0,0,Math.PI*2),e.fill();break}case"birthday":{_r(e,"#F6D0DA");const n=[P.berry,P.gold,P.mint,P.coral,P.lavender];for(let s=0;s<6;s++)e.fillStyle=n[s%n.length],e.beginPath(),e.moveTo(24+s*36,40),e.lineTo(60+s*36,40),e.lineTo(42+s*36,78),e.fill();e.fillStyle="#F6E1B8",e.fillRect(58,200,140,70),e.fillStyle=P.berry,e.fillRect(58,225,140,12),e.fillStyle="#FFF7FA",e.beginPath(),e.ellipse(128,200,72,18,0,0,Math.PI*2),e.fill();for(let s=0;s<3;s++)e.fillStyle=[P.mint,P.lavender,P.gold][s],e.fillRect(96+s*30,140,10,50),e.fillStyle="#FFB43B",e.beginPath(),e.ellipse(101+s*30,128,8,14,0,0,Math.PI*2),e.fill();e.fillStyle=P.porcelain,e.beginPath(),e.ellipse(128,280,100,14,0,0,Math.PI*2),e.fill();break}case"sleepover":{_r(e,"#2E4A80"),e.fillStyle="#F6EFC8",e.beginPath(),e.arc(180,80,36,0,Math.PI*2),e.fill(),e.fillStyle="#2E4A80",e.beginPath(),e.arc(196,68,32,0,Math.PI*2),e.fill(),e.fillStyle="#F6EFC8";for(const[n,s]of[[50,60],[90,110],[60,160],[210,150]])e.beginPath(),e.arc(n,s,5,0,Math.PI*2),e.fill();e.fillStyle=P.porcelain,e.beginPath(),e.roundRect(30,240,196,70,20),e.fill(),yu(e,92,236,34,!0),e.fillStyle=P.lavender,e.beginPath(),e.arc(170,236,30,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(158,196,9,24,-.2,0,Math.PI*2),e.ellipse(182,196,9,24,.2,0,Math.PI*2),e.fill(),e.fillStyle=P.berry,e.beginPath(),e.roundRect(30,270,196,50,12),e.fill();break}case"snow":{_r(e,"#CFE3EF"),e.fillStyle="#FFFFFF";for(let n=0;n<30;n++)e.beginPath(),e.arc(30+n*53%200,30+n*37%200,5+n%3*2,0,Math.PI*2),e.fill();e.fillRect(14,270,228,76),e.beginPath(),e.arc(128,250,44,0,Math.PI*2),e.arc(128,185,32,0,Math.PI*2),e.fill(),e.fillStyle=P.ink,e.beginPath(),e.arc(116,180,5,0,Math.PI*2),e.arc(140,180,5,0,Math.PI*2),e.fill(),e.fillStyle=P.coral,e.beginPath(),e.moveTo(128,190),e.lineTo(156,196),e.lineTo(128,198),e.fill(),e.fillStyle=P.berry,e.fillRect(96,210,64,12);break}}return Le(t)}const gy=["free","rain","birthday","sleepover","snow"];class xy{constructor(t){L(this,"camera");L(this,"group",new Mt);L(this,"cards",[]);L(this,"dim");L(this,"open",!1);L(this,"k",0);L(this,"chosen",null);L(this,"chosenT",0);this.camera=t,t.add(this.group),this.dim=new D(new be(30,30),new Ue({color:"#081E26",transparent:!0,opacity:0,depthTest:!1,depthWrite:!1})),this.dim.position.z=-2.2,this.dim.renderOrder=50,this.group.add(this.dim);for(const e of gy){const n=new Ue({color:"#CC456A",depthTest:!1}),s=new Ue({map:Ld(e),depthTest:!1}),r=new D(new Ne(.5,.7,.01),[n,n,n,n,s,n]);r.renderOrder=51,r.userData.storyCard=e,this.group.add(r),this.cards.push({id:e,mesh:r,home:new T,rot:0})}this.group.visible=!1}layout(t,e){const s=2*Math.tan(Di.degToRad(this.camera.fov/2))*2,r=s*e,o=this.cards.length,a=t?Math.min(1,r/1.75):Math.min(1,s/1.3);this.cards.forEach((l,c)=>{if(t){const h=c<3?0:1,d=h===0?c-1:c-3.5;l.home.set(d*.56*a,(h===0?.42:-.42)*a,-2),l.rot=-d*.05}else{const h=c-(o-1)/2;l.home.set(h*.58*a,-Math.abs(h)*.05*a,-2),l.rot=-h*.08}l.mesh.scale.setScalar(a)})}show(t,e){this.layout(t,e),this.open=!0,this.chosen=null,this.group.visible=!0}hide(){this.open=!1}pick(t){if(!this.open||this.chosen)return null;const e=t.intersectObjects(this.cards.map(n=>n.mesh),!1);return e.length?e[0].object.userData.storyCard:"backdrop"}choose(t){this.chosen=t,this.chosenT=0}update(t,e){const n=this.open?1:0;if(this.k+=(n-this.k)*Math.min(1,t*6),this.k<.01&&!this.open){this.group.visible=!1;return}this.dim.material.opacity=this.k*.55,this.chosen&&(this.chosenT+=t),this.cards.forEach((s,r)=>{const a=new T(s.home.x*.2,-1.2,-2.2).lerp(s.home,this.k);a.y+=Math.sin(e*1.5+r)*.01*this.k;let l=0,c=1;if(this.chosen)if(s.id===this.chosen){const h=Math.min(1,this.chosenT/.6);a.lerp(new T(0,0,-1.7),h),l=h*Math.PI*2,c=1+h*.4}else a.y-=this.chosenT*3;s.mesh.position.copy(a),s.mesh.rotation.set(0,l,s.rot*this.k),s.mesh.scale.setScalar(s.mesh.scale.x/(s.mesh.userData.s??1)*c),s.mesh.userData.s=c})}}const vy=["day","dress","pajamas","rainwear"],_y=["morning","day","evening","night"],Go=["sun","rain","snow"],yy=["free","rain","birthday","sleepover","snow"],Lr=["chair","table","bed","lamp"],ts=["musicBox","plush","book","cupA","cupB","cake","umbrella","boots","towel"];function es(i,t,e,n,s=.03){const r=new D(new Pn(i,t,e,3,Math.min(s,i/2.01,t/2.01,e/2.01)),n);return r.castShadow=!0,r.receiveShadow=!0,r}function Fc(i,t,e,n=.03){const s=new Mt,r=new D(new we(n,n*.9,i,10),t);r.position.y=i/2,r.castShadow=!0,s.add(r);const o=new D(new kt(n*1.6,12,8),e);return o.position.y=n*1.2,o.castShadow=!0,s.add(o),s}function Ho(i,t,e,n,s="z",r=.018){const o=new D(new kt(r,8,6,0,Math.PI*2,0,Math.PI/2),ie(P.gold));o.position.set(t,e,n),s==="z"?o.rotation.x=Math.PI/2:o.rotation.z=-Math.PI/2,i.add(o)}function aa(i,t,e){const n=new D(new be(t,e),new Ue({map:i,transparent:!0,depthWrite:!1,opacity:.85}));return n.rotation.x=-Math.PI/2,n.position.y=.007,n.renderOrder=1,n}function la(i,t,e){const n=new D(new Ne(i,t,e),new Ue({visible:!1}));return n.position.y=t/2,n}function My(i){const t=new yn,e=0,n=0;return t.moveTo(e,n-i*.6),t.bezierCurveTo(e-i*1.2,n+i*.1,e-i*.5,n+i*.9,e,n+i*.4),t.bezierCurveTo(e+i*.5,n+i*.9,e+i*1.2,n+i*.1,e,n-i*.6),t}function wy(i){const t=new Mt,e=new Mt;t.add(e);const n=ie(P.gold,.3),s=qt(P.teal);for(const[f,g]of[[-.26,-.26],[.26,-.26],[-.26,.26],[.26,.26]]){const x=Fc(.5,n,s,.03);x.position.set(f,0,g),e.add(x)}const r=es(.64,.08,.64,qt(P.mint,{rough:.3}),.03);r.position.y=.52,e.add(r);const o=es(.54,.09,.54,gn("gingham",P.porcelain,P.berry,2,131),.04);o.position.y=.6,e.add(o);for(const f of[-.27,.27]){const g=new D(new we(.03,.03,.8,10),n);g.position.set(f,.92,-.28),g.castShadow=!0,e.add(g);const x=new D(new kt(.05,12,10),ie(P.gold));x.position.set(f,1.34,-.28),e.add(x)}const a=new yn;a.moveTo(-.27,0),a.lineTo(.27,0),a.lineTo(.27,.36),a.quadraticCurveTo(0,.56,-.27,.36),a.lineTo(-.27,0);const l=My(.1),c=new Hs(l.getPoints(24).map(f=>new ut(f.x,f.y+.2)).reverse());a.holes.push(c);const h=new D(new ki(a,{depth:.04,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2}),qt(P.berry,{rough:.28}));h.position.set(0,.8,-.3),h.castShadow=!0,e.add(h),Ho(e,-.2,.86,-.25),Ho(e,.2,.86,-.25),Ho(e,0,1.05,-.25);const d=aa(i,1,1);t.add(d);const u=la(.9,1.4,.9);return t.add(u),{id:"chair",group:t,body:e,shadow:d,hit:u,parts:{cushion:o}}}function by(i){const{w:t,d:e,h:n}=Cn.table,s=new Mt,r=new Mt;s.add(r);const o=yi(P.mint,"lace",P.porcelain,2,141),a=es(t,.07,e,o,.03);a.position.y=n-.035,r.add(a);const l=es(t+.04,.025,e+.04,ie(P.gold,.3),.012);l.position.y=n-.075,r.add(l);const c=qt(P.berry,{rough:.3}),h=p=>{const _=new yn;_.moveTo(0,0),_.lineTo(p,0),_.lineTo(p,-.08);const w=Math.max(3,Math.round(p/.2));for(let S=w-1;S>=0;S--)_.absarc((S+.5)*(p/w),-.08,p/w/2,0,Math.PI,!0);_.lineTo(0,0);const v=new ki(_,{depth:.02,bevelEnabled:!1});return v.translate(-p/2,0,0),new D(v,c)};for(const[p,_,w,v]of[[t-.1,0,e/2-.06,0],[t-.1,0,-e/2+.06,Math.PI],[e-.1,t/2-.06,0,Math.PI/2],[e-.1,-t/2+.06,0,-Math.PI/2]]){const S=h(p);S.position.set(_,n-.09,w),S.rotation.y=v,r.add(S)}const d=qt(P.teal,{rough:.3});for(const[p,_]of[[-t/2+.1,-e/2+.1],[t/2-.1,-e/2+.1],[-t/2+.1,e/2-.1],[t/2-.1,e/2-.1]]){const w=Fc(n-.08,d,ie(P.gold),.04);w.position.set(p,0,_),r.add(w)}const[u,f]=Re(128,128);f.fillStyle=P.porcelain,f.beginPath();for(let p=0;p<24;p++){const _=p/24*Math.PI*2,w=p%2?56:64;f.lineTo(64+Math.cos(_)*w,64+Math.sin(_)*w)}f.fill(),f.strokeStyle=P.coral,f.lineWidth=3,f.beginPath(),f.arc(64,64,40,0,Math.PI*2),f.stroke(),f.setLineDash([4,4]),f.beginPath(),f.arc(64,64,30,0,Math.PI*2),f.stroke();const g=Le(u);for(const p of["l","r"]){const _=Js.table[p],w=new D(new Be(.2,24),new Xe({map:g,transparent:!0,roughness:.9}));w.rotation.x=-Math.PI/2,w.position.set(_.x,n+.003,_.z),w.receiveShadow=!0,r.add(w)}const x=aa(i,t+.6,e+.6);s.add(x);const m=la(t+.1,n+.05,e+.1);return s.add(m),{id:"table",group:s,body:r,shadow:x,hit:m,parts:{top:a}}}class Sy{constructor(t,e){L(this,"mesh");L(this,"geo");L(this,"base");L(this,"occupied",0);L(this,"occTarget",0);L(this,"breath",0);const n=X_();this.geo=new be(t,e+.5,30,16),this.geo.rotateX(-Math.PI/2),this.base=new Float32Array(this.geo.getAttribute("position").array);const s=new _e({map:n.map,normalMap:n.normalMap,roughness:.92,sheen:.7,sheenColor:new Dt("#ffffff"),side:Fe});this.mesh=new D(this.geo,s),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.shape(0)}setOccupied(t){this.occTarget=t?1:0}shape(t){const e=this.geo.getAttribute("position"),n=.53;for(let s=0;s<e.count;s++){const r=this.base[s*3],o=this.base[s*3+2];let a=.03*Math.exp(-(o*o/.2)),l=o;if(Math.abs(o)>n){const d=Math.abs(o)-n;a-=d*1.1,l=Math.sign(o)*(n+d*.12)}const c=Math.max(0,Math.min(1,(r+1)/1.7)),h=Math.sin(c*Math.PI)*.26*Math.exp(-((o+.02)**2)/.07);a+=h*this.occupied*(1+.04*Math.sin(t*1.6)*this.occupied),a+=.008*Math.sin(r*9+o*4),e.setXYZ(s,r,a,l)}e.needsUpdate=!0,this.geo.computeVertexNormals()}update(t,e){const n=this.occupied;this.occupied+=(this.occTarget-this.occupied)*Math.min(1,e*3),this.breath+=e,(Math.abs(n-this.occupied)>.001||this.occupied>.01)&&this.shape(t)}}function Ey(i){const{w:t,d:e}=Cn.bed,n=new Mt,s=new Mt;n.add(s);const r=qt(P.teal,{rough:.3}),o=ie(P.gold,.25);for(const p of[-e/2+.04,e/2-.04]){const _=es(t-.1,.14,.06,r,.02);_.position.set(0,.3,p),s.add(_);for(let w=0;w<5;w++)Ho(s,-t/2+.35+w*.4,.3,p+Math.sign(p)*.035,"z",.016)}for(const[p,_]of[[-t/2+.06,-e/2+.06],[t/2-.06,-e/2+.06],[-t/2+.06,e/2-.06],[t/2-.06,e/2-.06]]){const w=Fc(.3,r,o,.045);w.position.set(p,0,_),s.add(w)}const a=(p,_)=>{const w=new yn;w.moveTo(-e/2,0),w.lineTo(e/2,0),w.lineTo(e/2,p),w.quadraticCurveTo(0,p+_,-e/2,p),w.lineTo(-e/2,0);const v=new ki(w,{depth:.06,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:2});v.translate(0,0,-.03);const S=new D(v,r);return S.castShadow=!0,S},l=a(1.05,.35);l.position.set(t/2-.04,.12,0),l.rotation.y=Math.PI/2,s.add(l);const c=new D(new Be(.28,28),yi(P.berry,"dots",P.gold,1,151));c.position.set(t/2-.08,.95,0),c.rotation.y=-Math.PI/2,s.add(c);const h=a(.62,.2);h.position.set(-t/2+.04,.12,0),h.rotation.y=Math.PI/2,s.add(h);for(const[p,_]of[[t/2-.04,1.2],[-t/2+.04,.78]])for(const w of[-e/2,e/2]){const v=new D(new kt(.06,12,10),o);v.position.set(p,_,w),s.add(v)}const d=es(t-.14,.2,e-.1,ze("#EAF3F6"),.07);d.position.y=.48,s.add(d);const u=es(.5,.15,e-.22,gn("dots",P.porcelain,P.lavender,1,152),.07);u.position.set(t/2-.36,.66,0),u.scale.set(1,1,1),s.add(u);const f=new D(new Ze(.06,.012,6,18),ze(P.porcelain));f.position.set(t/2-.36,.66,e/2-.1),s.add(f);const g=new Sy(t-.6,e-.1);g.mesh.position.set(-.24,.6,0),s.add(g.mesh);const x=aa(i,t+.5,e+.6);n.add(x);const m=la(t+.1,.9,e+.1);return n.add(m),{id:"bed",group:n,body:s,shadow:x,hit:m,parts:{pillow:u,quilt:g.mesh,mattress:d},update:(p,_)=>g.update(p,_),quilt:g}}function Ty(i){const t=new Mt,e=new Mt;t.add(e);const n=new D(new Ui([.22,.22,.2,.13,.05,.04].map((m,p)=>new ut(m,[0,.03,.06,.1,.14,.16][p])),28),qt(P.teal,{rough:.28}));n.castShadow=!0,e.add(n);const s=new D(new we(.025,.025,1.3,10),ie(P.gold));s.position.y=.8,e.add(s);const r=qt(P.berry,{rough:.3,side:Fe}),o=new D(new Ui([.32,.31,.26,.19,.12,.1].map((m,p)=>new ut(m,p*.07)),32,0,Math.PI*2),r);o.position.y=1.32,o.castShadow=!0,e.add(o);for(let m=0;m<14;m++){const p=m/14*Math.PI*2,_=new D(new kt(.05,8,6,0,Math.PI*2,Math.PI/2,Math.PI/2),r);_.position.set(Math.cos(p)*.31,1.32,Math.sin(p)*.31),e.add(_)}const a=new D(new kt(.05,10,8),ie(P.gold));a.position.y=1.72,e.add(a);const l=Zr("#FFE3A3",0),c=new D(new kt(.085,14,10),l);c.position.y=1.36,e.add(c);const h=new D(new kt(.5,16,12),new Ue({color:"#FFD98A",transparent:!0,opacity:0,depthWrite:!1,blending:Nr}));h.position.y=1.3,e.add(h);const d=new D(new we(.006,.006,.22,4),ie(P.gold));d.position.set(.18,1.22,.1),e.add(d);const u=new D(new kt(.03,8,6),ie(P.gold));u.position.set(.18,1.1,.1),e.add(u);const f=aa(i,.8,.8);t.add(f);const g=la(.7,1.8,.7);t.add(g);const x=m=>{l.emissiveIntensity=m*2.2,h.material.opacity=m*.22,r.emissive=new Dt(P.berry),r.emissiveIntensity=m*.35};return x(0),{id:"lamp",group:t,body:e,shadow:f,hit:g,parts:{bead:u,chain:d},setLight:x,glow:h}}const Mu={morning:{sun:5,sunColor:"#FFD9A0",sunDir:[1.4,1.25,2],hemiSky:"#CFE8F2",hemiGround:"#3C5C60",hemi:.8,fill:.9,fillColor:"#FFF4E6",exposure:1,skyTop:"#93CDEA",skyBottom:"#F8D9B9"},day:{sun:3.6,sunColor:"#FFF6E2",sunDir:[.5,2.4,1.6],hemiSky:"#E2F4FA",hemiGround:"#406468",hemi:1.05,fill:1.1,fillColor:"#FFFFFF",exposure:1.04,skyTop:"#6DBDE6",skyBottom:"#D3F0F7"},evening:{sun:4,sunColor:"#FF9E5E",sunDir:[-1.5,1,2],hemiSky:"#F2C3A8",hemiGround:"#4A3D52",hemi:.7,fill:.8,fillColor:"#FFE1C8",exposure:1,skyTop:"#5C6DB2",skyBottom:"#F59A6B"},night:{sun:.25,sunColor:"#8FA8E0",sunDir:[.4,2,1.4],hemiSky:"#4B5E96",hemiGround:"#151E33",hemi:.42,fill:.42,fillColor:"#B9C6F2",exposure:.95,skyTop:"#0D1A38",skyBottom:"#253A6E"}};class Ay{constructor(t){L(this,"sun");L(this,"hemi");L(this,"fill");L(this,"lamp");L(this,"target",{...Mu.day});L(this,"cur",{sun:0,hemi:0,fill:0,exposure:1,sunColor:new Dt,hemiSky:new Dt,hemiGround:new Dt,fillColor:new Dt,dir:new T(0,1,1)});L(this,"lampLevel",0);L(this,"lampTarget",0);L(this,"first",!0);this.hemi=new e0("#ffffff","#335555",1),t.add(this.hemi),this.sun=new Dh("#ffffff",2),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.bias=-8e-4,this.sun.shadow.normalBias=.02;const e=this.sun.shadow.camera;e.left=-6,e.right=6,e.top=6,e.bottom=-6,e.near=.5,e.far=30,this.sun.target.position.set(ne.cx,0,1.6),t.add(this.sun,this.sun.target),this.fill=new Dh("#ffffff",1),this.fill.position.set(Ct.W/2-1,7,Ct.D+9),this.fill.target.position.set(Ct.W/2,1,Ct.D/2),t.add(this.fill,this.fill.target),this.lamp=new hd("#FFC97A",0,7,1.6),t.add(this.lamp)}set(t,e,n){const s={...Mu[t]};e!=="sun"&&(s.sun*=t==="night"?1:.25,s.hemi*=1.05,s.fill*=.92,s.skyTop=e==="rain"?t==="night"?"#141E30":"#6F8598":t==="night"?"#1E2A44":"#A9BCCB",s.skyBottom=e==="rain"?t==="night"?"#2A3A52":"#B3C2CC":t==="night"?"#3A4C6E":"#E8F0F4",s.hemiSky=e==="rain"?"#B9C9D4":"#DDE9F0"),this.target=s,this.lampTarget=n===2?1:n===1?.45:0}get skyColors(){return[this.target.skyTop,this.target.skyBottom]}update(t,e){const n=this.first?1:Math.min(1,t*1.6);this.first=!1;const s=this.target,r=this.cur;r.sun+=(s.sun-r.sun)*n,r.hemi+=(s.hemi-r.hemi)*n,r.fill+=(s.fill-r.fill)*n,r.exposure+=(s.exposure-r.exposure)*n,r.sunColor.lerp(new Dt(s.sunColor),n),r.hemiSky.lerp(new Dt(s.hemiSky),n),r.hemiGround.lerp(new Dt(s.hemiGround),n),r.fillColor.lerp(new Dt(s.fillColor),n),r.dir.lerp(new T(...s.sunDir).normalize(),n);const o=this.sun.target.position;this.sun.position.set(o.x+r.dir.x*8,r.dir.y*8,o.z-r.dir.z*8-2),this.sun.intensity=r.sun,this.sun.color.copy(r.sunColor),this.hemi.intensity=r.hemi,this.hemi.color.copy(r.hemiSky),this.hemi.groundColor.copy(r.hemiGround),this.fill.intensity=r.fill,this.fill.color.copy(r.fillColor),this.lampLevel+=(this.lampTarget-this.lampLevel)*Math.min(1,t*4),this.lamp.intensity=this.lampLevel*9,e.toneMappingExposure=r.exposure}}function In(i,t,e,n,s=.02){const r=new D(new Pn(i,t,e,3,Math.min(s,i/2.01,t/2.01,e/2.01)),n);return r.castShadow=!0,r}function Py(i,t,e){const n=new D(new be(t,e),new Ue({map:i,transparent:!0,depthWrite:!1,opacity:.7}));return n.rotation.x=-Math.PI/2,n.position.y=.008,n.renderOrder=1,n}function Ry(i,t){const e=new D(new kt(i,10,8),new Ue({visible:!1}));return e.position.y=t,e}function Zn(i,t,e,n,s,r){const o=new Mt,a=new Mt;o.add(a);const l=Py(t,e,n);o.add(l);const c=Ry(s,r);return o.add(c),{id:i,group:o,body:a,shadow:l,hit:c,parts:{}}}function Cy(i){const t=new Mt,e=new D(new kt(.035,10,8),i);e.scale.set(1.25,.9,.6),t.add(e);const n=new D(new Ne(.012,.12,.012),i);n.position.set(.035,.06,0),t.add(n);const s=new D(new Ne(.05,.015,.012),i);return s.position.set(.055,.11,0),s.rotation.z=-.5,t.add(s),t}function Iy(i){const t=Zn("musicBox",i,.6,.5,.34,.15),e=yi(P.berry,"lace",P.gold,1.2,161),n=.38,s=.18,r=.27,o=In(n,s,r,e,.025);o.position.y=s/2+.02,t.body.add(o);for(const[b,C]of[[-n/2+.04,-r/2+.04],[n/2-.04,-r/2+.04],[-n/2+.04,r/2-.04],[n/2-.04,r/2-.04]]){const N=new D(new kt(.03,10,8),ie(P.gold));N.position.set(b,.02,C),t.body.add(N)}const a=In(n+.01,.025,r+.01,ie(P.gold),.01);a.position.y=s+.01,t.body.add(a);const l=new D(new be(n-.05,r-.05),ze(P.mintDeep));l.rotation.x=-Math.PI/2,l.position.y=s+.012,t.body.add(l);const c=new D(new we(.035,.035,.2,14),ie(P.goldDark,.35));c.rotation.z=Math.PI/2,c.position.set(0,s+.03,-.03),t.body.add(c);const h=new Mt;for(let b=0;b<9;b++){const C=new D(new Ne(.012,.006,.07),ie("#E8E2D0",.2));C.position.set(-.08+b*.02,s+.04,.035),h.add(C)}t.body.add(h);const d=new Mt,u=new D(new Sc(.045),ie(P.gold,.2));u.position.y=.06,d.add(u);const f=new D(new we(.006,.006,.06,6),ie(P.gold));f.position.y=.03,d.add(f),d.position.set(.12,s+.02,.05),t.body.add(d);const g=new Mt;g.position.set(0,s+.025,-r/2);const x=In(n+.02,.04,r+.02,e,.02);x.position.set(0,.02,r/2),g.add(x);const m=new D(new be(n-.08,r-.08),new _e({color:"#dfeff0",roughness:.05,metalness:.9}));m.rotation.x=Math.PI/2,m.position.set(0,-.001,r/2),g.add(m);const p=new D(new Ne(.06,.05,.015),ie(P.gold));p.position.set(0,0,r+.01),g.add(p),t.body.add(g);const _=new Mt,w=new D(new we(.012,.012,.08,8),ie(P.gold));w.rotation.z=Math.PI/2,w.position.x=.04,_.add(w);for(const b of[-1,1]){const C=new D(new kt(.04,10,8),ie(P.gold));C.scale.set(.3,1,.6),C.position.set(.085,b*.04,0),_.add(C)}_.position.set(n/2,s/2+.02,0),t.body.add(_);const v=new Mt,S=Zr(P.gold,.4);for(let b=0;b<4;b++){const C=Cy(S);C.visible=!1,v.add(C)}t.group.add(v),t.parts={hinge:g,key:_,spinner:d,notes:v,cyl:c};let A=0,R=!1;t.setFlags=b=>{A=b.open?1:0,R=!!b.open&&(b.tune??0)>0};let y=0;return t.update=(b,C)=>{y+=(A*1.9-y)*Math.min(1,C*7),g.rotation.x=-y,R&&(_.rotation.x+=C*2.2,d.rotation.y+=C*3,c.rotation.x+=C*1.5,h.position.y=Math.sin(b*30)*.002),v.children.forEach((N,U)=>{const G=(b*.6+U/4)%1;N.visible=R,N.position.set(Math.sin(G*6+U)*.12,.25+G*.6,Math.cos(U)*.05),N.scale.setScalar(Math.sin(G*Math.PI)*1.2)})},t}function Dy(i){const t=Zn("plush",i,.55,.45,.36,.28),e=gn("plain",P.lavender,P.lavender,1,171),n=gn("flowers",P.porcelain,P.coral,1,172),s=new D(new kt(.16,20,16),e);s.scale.set(1,1.1,.9),s.position.y=.17,t.body.add(s);const r=new D(new kt(.1,16,12),n);r.scale.set(1,1.1,.35),r.position.set(0,.16,.12),t.body.add(r);const o=new D(new kt(.14,20,16),e);o.position.y=.4,t.body.add(o);for(const c of[-1,1]){const h=new D(new Qi(.045,.18,4,10),e);h.position.set(c*.07,.6,-.02),h.rotation.z=-c*.25,t.body.add(h);const d=new D(new Qi(.022,.13,4,8),ze(P.blush));d.position.set(c*.07,.6,.025),d.rotation.z=-c*.25,t.body.add(d);const u=new D(new kt(.022,10,8),new _e({color:P.ink,roughness:.1,clearcoat:1}));u.position.set(c*.055,.42,.125),t.body.add(u);const f=new D(new Qi(.045,.08,4,8),e);f.position.set(c*.15,.2,.04),f.rotation.z=c*.7,t.body.add(f);const g=new D(new kt(.06,12,10),e);g.scale.set(1,.8,1.3),g.position.set(c*.09,.04,.07),t.body.add(g)}const a=new D(new kt(.022,10,8),ze(P.berry));a.position.set(0,.38,.14),t.body.add(a);const l=new D(new Ze(.05,.018,6,12),ze(P.gold));return l.position.set(0,.3,.1),l.scale.set(1.4,.7,1),t.body.add(l),t}function Ly(i){const t=Zn("book",i,.5,.4,.3,.1),e=gn("plain",P.coral,P.coral,1,181),n=K_(),s=new Xe({map:n,roughness:.85}),r=.17,o=.24,a=.022,l=new Mt,c=new Mt,h=In(r,a,o,e,.008);h.position.set(-r/2,a/2,0),l.add(h);const d=In(r,a,o,e,.008);d.position.set(r/2,a/2,0),c.add(d);const u=new D(new Be(.045,16),ie(P.gold));u.rotation.x=-Math.PI/2,u.position.set(r/2,a+.002,0),c.add(u);const f=new D(new be(r-.01,o-.02),s.clone());f.material.map=n.clone(),f.material.map.repeat.set(.5,1),f.material.map.needsUpdate=!0,f.rotation.x=Math.PI/2,f.position.set(-r/2,-.001,0),l.add(f);const g=new D(new be(r-.01,o-.02),s.clone());g.material.map=n.clone(),g.material.map.repeat.set(.5,1),g.material.map.offset.set(.5,0),g.material.map.needsUpdate=!0,g.rotation.x=Math.PI/2,g.position.set(r/2,-.001,0),c.add(g);const x=In(r*2-.02,.03,o-.02,Bo("#F7F7F2",.9),.006);x.position.set(0,-.015,0);const m=new Mt;m.add(l,c,x),t.body.add(m),t.parts={left:l,right:c,spine:m,block:x};let p=0;t.setFlags=w=>{p=w.open?1:0};let _=0;return t.update=(w,v)=>{_+=(p-_)*Math.min(1,v*6),l.rotation.z=(1-_)*0,c.rotation.z=(1-_)*Math.PI,c.position.y=(1-_)*a*2.2,x.visible=_>.3,m.position.y=.03+_*.02,m.rotation.x=_*0,g.rotation.y=_>.9?Math.sin(w*.9)*.03:0},t}function Ny(i,t){const e=Zn(i,t,.4,.4,.26,.1),n=i==="cupA"?P.coral:P.lavender,s=new D(new Ui([0,.1,.13,.15,.155].map((c,h)=>new ut(c,[0,0,.012,.022,.03][h])),32),zo());s.castShadow=!0,e.body.add(s);const r=new D(new Ui([0,.045,.05,.07,.085,.09,.087].map((c,h)=>new ut(c,[.02,.02,.03,.06,.1,.13,.135][h])),32),zo());r.castShadow=!0,e.body.add(r);const o=new D(new we(.0895,.087,.02,32,1,!0),qt(n));o.position.y=.112,e.body.add(o);const a=new D(new Ze(.035,.011,8,16,Math.PI*1.3),zo());a.position.set(.095,.08,0),a.rotation.z=-Math.PI*.65,e.body.add(a);const l=new D(new Be(.08,24),new _e({color:"#B5653A",roughness:.1,clearcoat:1}));return l.rotation.x=-Math.PI/2,l.position.y=.11,e.body.add(l),e.parts={tea:l,cup:r},e.setFlags=c=>{l.visible=!!c.full},e}function Uy(i){const t=Zn("cake",i,.6,.6,.34,.15),e=new D(new we(.25,.23,.025,32),zo());e.position.y=.012,t.body.add(e);const n=new Xe({color:"#F6E1B8",roughness:.8}),s=new _e({color:"#FFF7FA",roughness:.4,clearcoat:.6}),r=new Xe({color:P.berry,roughness:.6}),o=[];for(let u=0;u<4;u++){const f=new Mt,g=u*Math.PI/2,x=new D(new we(.19,.19,.08,16,1,!1,g,Math.PI/2),n);x.position.y=.065,f.add(x);const m=new D(new we(.19,.19,.025,16,1,!1,g,Math.PI/2),r);m.position.y=.117,f.add(m);const p=new D(new we(.19,.19,.07,16,1,!1,g,Math.PI/2),s);p.position.y=.165,f.add(p);const _=new D(new kt(.035,10,8),qt(P.berry));_.position.set(Math.sin(g+Math.PI/4)*.12,.215,Math.cos(g+Math.PI/4)*.12),f.add(_),f.traverse(w=>w.castShadow=!0),t.body.add(f),o.push(f)}const a=[],l=Zr("#FFB43B",2.5);for(let u=0;u<3;u++){const f=new Mt,g=new D(new we(.012,.012,.11,8),qt([P.mint,P.lavender,P.gold][u]));g.position.y=.055,f.add(g);const x=new D(new _i(.018,.05,8),l);x.position.y=.14,x.name="flame",f.add(x);const m=u/3*Math.PI*2+.4;f.position.set(Math.sin(m)*.06,.2,Math.cos(m)*.06),t.body.add(f),a.push(f)}const c=new D(new kt(.05,8,6),new Ue({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));c.position.y=.42,t.body.add(c);let h=!1,d=0;return t.setFlags=u=>{const f=u.slices??0;o.forEach((x,m)=>x.visible=m>=f);const g=u.candles==="lit";h&&!g&&(d=1),h=g},t.update=(u,f)=>{for(const g of a){const x=g.getObjectByName("flame");x.visible=h,x.scale.set(1+Math.sin(u*13+g.position.x*40)*.12,1+Math.sin(u*17)*.2,1)}d=Math.max(0,d-f*.6),c.material.opacity=d*.5,c.position.y=.42+(1-d)*.3,c.scale.setScalar(1+(1-d)*2)},t}function Fy(i){const t=Zn("umbrella",i,.5,.35,.4,.4),e=new D(new we(.014,.014,.95,8),ie(P.gold));e.position.y=.47,t.body.add(e);const n=new D(new Ze(.06,.02,8,16,Math.PI),qt(P.berryDark));n.position.set(.06,.02,0),n.rotation.z=Math.PI,t.body.add(n);const s=new Mt;s.position.y=.9;const r=[qt(P.gold,{side:Fe}),qt(P.berry,{side:Fe})];for(let u=0;u<8;u++){const f=new D(new kt(.5,6,8,u/8*Math.PI*2,Math.PI/4,0,Math.PI/2.6),r[u%2]);f.castShadow=!0,s.add(f)}const o=new D(new kt(.03,8,6),ie(P.gold));o.position.y=.5,s.add(o),t.body.add(s);const a=new Mt,l=new _e({color:"#CFEAF5",roughness:.05,transparent:!0,opacity:.85,clearcoat:1});for(let u=0;u<8;u++){const f=new D(new kt(.018,6,6),l);f.scale.y=1.6,a.add(f)}t.group.add(a),t.parts={canopy:s,shaft:e,drips:a};let c=0,h=0;t.setFlags=u=>{c=u.open?1:0,h=u.wet??0};let d=0;return t.update=(u,f)=>{d+=(c-d)*Math.min(1,f*6),s.scale.set(.2+d*.8,1.45-d*.6,.2+d*.8),s.position.y=.86-(1-d)*.28,a.children.forEach((g,x)=>{const m=(u*.8+x*.37)%1,p=x/8*Math.PI*2,_=.07+d*.38;g.visible=h>.05,g.position.set(Math.cos(p)*_,.75+(1-d)*.1-m*.6,Math.sin(p)*_)})},t}function ky(i){const t=Zn("boots",i,.55,.4,.3,.15),e=new _e({color:P.gold,roughness:.3,clearcoat:1,clearcoatRoughness:.15}),n=qt(P.teal);for(const l of[-1,1]){const c=new Mt,h=new D(new we(.07,.066,.26,16),e);h.position.y=.17,h.castShadow=!0,c.add(h);const d=new D(new Pn(.14,.09,.23,3,.04),e);d.position.set(0,.045,.045),d.castShadow=!0,c.add(d);const u=new D(new Ze(.072,.014,6,16),n);u.rotation.x=Math.PI/2,u.position.y=.3,c.add(u);const f=new D(new Be(.03,12),qt(P.berry));f.position.set(0,.17,.069),c.add(f),c.position.x=l*.09,c.rotation.y=l*.12,t.body.add(c)}const s=new Mt,r=new _e({color:"#E6F6FB",roughness:.02,transparent:!0,opacity:.85,clearcoat:1});for(let l=0;l<12;l++){const c=new D(new kt(.014+l%3*.004,6,6),r),h=l/12*Math.PI*2;c.position.set((l%2?.09:-.09)+Math.cos(h)*.072,.08+l*7%10*.022,Math.sin(h)*.072),s.add(c)}t.body.add(s);const o=new D(new Be(.28,20),new _e({color:"#9FD0E2",roughness:.02,transparent:!0,opacity:.6,clearcoat:1,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.y=.01,t.group.add(o),t.parts={drops:s,puddle:o};let a=0;return t.setFlags=l=>{a=l.wet??0,e.color.set(P.gold).lerp(new Dt("#A87A22"),a*.55),e.clearcoatRoughness=.15-a*.13},t.update=l=>{s.visible=a>.05,o.visible=a>.05,s.children.forEach((c,h)=>{c.position.y-=0,c.scale.y=1.2+Math.sin(l*2+h)*.2})},t}function Oy(i){const t=Zn("towel",i,.5,.4,.3,.08),[e,n]=Re(128,128);n.fillStyle=P.porcelain,n.fillRect(0,0,128,128),n.fillStyle=P.coral,n.fillRect(0,16,128,12),n.fillRect(0,100,128,12),n.fillStyle=P.gold,n.fillRect(0,32,128,4),n.fillRect(0,92,128,4);for(let h=0;h<128;h+=3)n.fillStyle="rgba(0,0,0,0.04)",n.fillRect(0,h,128,1);const s=new _e({map:Le(e),roughness:.95,sheen:1,sheenColor:new Dt("#ffffff"),side:Fe}),r=In(.34,.09,.26,s,.035);r.position.y=.05,t.body.add(r);const o=In(.34,.05,.24,s,.025);o.position.y=.11,o.rotation.y=.06,t.body.add(o);const a=new be(.32,.48,6,10),l=a.getAttribute("position");for(let h=0;h<l.count;h++)l.setZ(h,Math.sin(l.getY(h)*6)*.03);a.translate(0,-.22,0);const c=new D(a,s);return c.visible=!1,t.body.add(c),t.parts={folded:r,fold2:o,hang:c},t.setFlags=h=>{s.color.set("#ffffff").lerp(new Dt("#B9C9CF"),(h.wet??0)*.6)},t}function zy(i){const t=Zn("camera",i,.6,.45,.38,.18),e=In(.42,.26,.2,yi(P.berry,"stripe",P.berryDark,2,191),.04);e.position.y=.15,t.body.add(e);const n=In(.18,.08,.14,qt(P.teal),.02);n.position.set(-.08,.31,0),t.body.add(n);const s=new D(new we(.09,.1,.08,24),ie(P.gold,.25));s.rotation.x=Math.PI/2,s.position.set(.03,.15,.12),t.body.add(s);const r=new D(new Be(.07,24),new _e({color:"#1E3A4A",roughness:.02,clearcoat:1,metalness:.4}));r.position.set(.03,.15,.161),t.body.add(r);const o=In(.1,.08,.06,Zr("#FFFFFF",.05),.015);o.position.set(.14,.33,0),t.body.add(o);const a=new D(new we(.03,.03,.04,12),qt(P.gold));return a.position.set(.1,.3,.02),t.body.add(a),t.parts={flash:o,button:a},t}function By(i){const t=Zn("album",i,.7,.5,.42,.12),e=gn("check",P.teal,P.mint,1,201),n=In(.5,.12,.38,e,.02);n.position.y=.07,n.rotation.y=-.1,t.body.add(n);for(const[a,l]of[[-.22,-.16],[.22,-.16],[-.22,.16],[.22,.16]]){const c=new D(new Ne(.07,.125,.07),ie(P.gold));c.position.set(a,.07,l),n.add(c)}const s=new Mt;for(let a=0;a<3;a++){const l=new D(new be(.1,.08),qt(P.porcelain));l.rotation.x=-Math.PI/2,l.position.set(-.13+a*.13,.062,0),s.add(l)}n.add(s);const r=new D(new Ne(.04,.005,.3),ze(P.berry));r.position.set(.18,0,.25),r.rotation.x=.5,n.add(r);const o=new Mt;return o.position.set(0,.135,0),t.body.add(o),t.parts={book:n,stack:o,frames:s},t}function Gy(i,t){const e=Zn("cards",i,.6,.45,.4,.2),n=In(.4,.16,.28,yi(P.gold,"dots",P.berry,1.5,211),.03);n.position.y=.08,e.body.add(n);const s=new Mt;return t.forEach((r,o)=>{const a=new D(new be(.2,.28),new Xe({map:r,roughness:.6,side:Fe}));a.position.set(-.12+o*.06,.28,-.04+o*.008),a.rotation.z=.3-o*.15,s.add(a)}),e.body.add(s),e.parts={cards:s},e}function Hy(i,t){switch(i){case"musicBox":return Iy(t);case"plush":return Dy(t);case"book":return Ly(t);case"cupA":case"cupB":return Ny(i,t);case"cake":return Uy(t);case"umbrella":return Fy(t);case"boots":return ky(t);case"towel":return Oy(t)}}class ca extends D{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;const n=this,s=e.color!==void 0?new Dt(e.color):new Dt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||ca.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new Hn,d=new T,u=new T,f=new T,g=new Ee,x=new T(0,0,-1),m=new ke,p=new T,_=new T,w=new ke,v=new Ee,S=new Rn(r,o,{samples:c,type:Yn}),A=new Kn({name:l.name!==void 0?l.name:"unspecified",uniforms:ad.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});A.uniforms.tDiffuse.value=S.texture,A.uniforms.color.value=s,A.uniforms.textureMatrix.value=v,this.material=A,this.onBeforeRender=function(R,y,b){const C=this.getReflectionCamera(b);if(u.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(b.matrixWorld),g.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(g),p.subVectors(u,f),p.dot(d)>0===!0&&this.forceUpdate===!1)return;p.reflect(d).negate(),p.add(u),g.extractRotation(b.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(f),_.subVectors(u,x),_.reflect(d).negate(),_.add(u),C.position.copy(p),C.up.set(0,1,0),C.up.applyMatrix4(g),C.up.reflect(d),C.lookAt(_),C.far=b.far,C.updateMatrixWorld(),C.projectionMatrix.copy(b.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(C.projectionMatrix),v.multiply(C.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(d,u),h.applyMatrix4(C.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const U=C.projectionMatrix;C.isOrthographicCamera?(w.x=(Math.sign(m.x)+U.elements[8])/U.elements[0],w.y=(Math.sign(m.y)+U.elements[9])/U.elements[5],w.z=-b.far,w.w=1):(w.x=(Math.sign(m.x)+U.elements[8])/U.elements[0],w.y=(Math.sign(m.y)+U.elements[9])/U.elements[5],w.z=-1,w.w=(1+U.elements[10])/U.elements[14]),m.multiplyScalar(2/m.dot(w)),U.elements[2]=m.x,U.elements[6]=m.y,C.isOrthographicCamera?(U.elements[10]=m.z-a,U.elements[14]=m.w-1):(U.elements[10]=m.z+1-a,U.elements[14]=m.w),n.visible=!1;const G=R.getRenderTarget(),z=R.xr.enabled,V=R.shadowMap.autoUpdate;R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(S),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(y,C),R.xr.enabled=z,R.shadowMap.autoUpdate=V,R.setRenderTarget(G);const tt=b.viewport;tt!==void 0&&R.state.viewport(tt),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),n.material.dispose()},this.getReflectionCamera=function(R){let y=this._reflectionCameras.get(R);return y===void 0&&(y=R.clone(),this._reflectionCameras.set(R,y)),y}}}ca.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Er=.14;function Ye(i,t,e,n,s=.02){const r=new D(s>0?new Pn(i,t,e,2,Math.min(s,i/2,t/2,e/2)):new Ne(i,t,e),n);return r.castShadow=!0,r.receiveShadow=!0,r}function Ls(i,t,e,n,s=.022){const r=ie(P.gold,.25),o=new kt(s,8,6,0,Math.PI*2,0,Math.PI/2);for(let a=0;a<n;a++){const l=new D(o,r);l.position.lerpVectors(t,e,n===1?.5:a/(n-1)),l.rotation.x=Math.PI/2,i.add(l)}}function Vy(i,t,e,n){const s=new yn;s.moveTo(0,0),s.lineTo(i,0),s.lineTo(i,t),s.lineTo(0,t),s.lineTo(0,0);for(const c of e){const h=new Hs;h.moveTo(c.x0,c.y0),h.lineTo(c.x0,c.y1),h.lineTo(c.x1,c.y1),h.lineTo(c.x1,c.y0),h.lineTo(c.x0,c.y0),s.holes.push(h)}const r=new ki(s,{depth:Er,bevelEnabled:!1}),o=r.getAttribute("uv"),a=r.getAttribute("position");for(let c=0;c<o.count;c++)o.setXY(c,a.getX(c)/1.6,a.getY(c)/1.6);const l=new D(r,n);return l.receiveShadow=!0,l.castShadow=!0,l}function Wy(i){const t=new Mt,e=new D(new Ze(.05,.008,6,12,Math.PI*1.4),ie(P.gold));e.position.y=.05,e.rotation.z=-.3,t.add(e);const n=new D(new we(.008,.008,.4,6),ie(P.gold));n.rotation.z=Math.PI/2,t.add(n);const s=new yn;let r,o=null;if(i==="dress"){s.moveTo(-.1,0),s.lineTo(.1,0),s.lineTo(.12,-.2),s.quadraticCurveTo(.34,-.55,.32,-.7),s.quadraticCurveTo(0,-.76,-.32,-.7),s.quadraticCurveTo(-.34,-.55,-.12,-.2),s.lineTo(-.1,0),r=gn("dots",P.berry,"#F7D6A0",2,61);const h=new D(new Ze(.3,.02,6,30,Math.PI),ze(P.porcelain));h.scale.set(1.05,.12,1),h.rotation.z=Math.PI,h.position.set(0,-.7,.02),o=h}else if(i==="pajamas")s.moveTo(-.16,0),s.lineTo(.16,0),s.lineTo(.2,-.3),s.lineTo(.14,-.3),s.lineTo(.13,-.7),s.lineTo(.02,-.7),s.lineTo(0,-.36),s.lineTo(-.02,-.7),s.lineTo(-.13,-.7),s.lineTo(-.14,-.3),s.lineTo(-.2,-.3),s.lineTo(-.16,0),r=gn("stars",P.pajama,P.porcelain,2.5,71);else if(i==="rainwear"){s.moveTo(-.13,0),s.lineTo(.13,0),s.lineTo(.26,-.66),s.lineTo(-.26,-.66),s.lineTo(-.13,0),r=new _e({color:P.rainCoat,roughness:.3,clearcoat:1,side:Fe});const h=new D(new Be(.12,20,0,Math.PI),r);h.position.set(0,0,-.01),o=h}else{s.moveTo(-.12,0),s.lineTo(.12,0),s.lineTo(.14,-.22),s.lineTo(.27,-.55),s.lineTo(-.27,-.55),s.lineTo(-.14,-.22),s.lineTo(-.12,0),r=gn("dots","#2A8090",P.mint,2,52);const h=new D(new be(.42,.18),gn("stripes",P.porcelain,P.coral,1,51));h.position.set(0,-.06,-.01),o=h}const a=new ki(s,{depth:.04,bevelEnabled:!0,bevelSize:.015,bevelThickness:.015,bevelSegments:2});a.translate(0,-.02,-.02);const l=a.getAttribute("uv");for(let h=0;h<l.count;h++)l.setXY(h,l.getX(h)*1.6,l.getY(h)*1.6);const c=new D(a,r);return c.castShadow=!0,t.add(c),o&&t.add(o),t}function Xy(){const i=new Mt,t=[],e=(j,$)=>j.traverse(lt=>{lt.isMesh&&!t.some(Ut=>Ut.mesh===lt)&&t.push({mesh:lt,kind:"fixture",id:$})}),n=Ct.W,s=Ct.D,r=Ct.H,o=W_();o.map.repeat.set(n/1.1,s/1.1),o.normalMap.repeat.set(n/1.1,s/1.1);const a=qt(P.porcelain,{map:o.map,normalMap:o.normalMap,rough:.32}),l=new D(new be(n,s),a);l.rotation.x=-Math.PI/2,l.position.set(n/2,0,s/2),l.receiveShadow=!0,i.add(l);const c=(()=>{const[j,$]=Re(256,256),lt=[P.coral,P.porcelain,P.berry,P.mint,P.gold,P.berry];for(let Ut=0;Ut<12;Ut++)$.strokeStyle=lt[Ut%lt.length],$.lineWidth=11,$.setLineDash([8,3]),$.beginPath(),$.ellipse(128,128,122-Ut*10,122-Ut*10,0,0,Math.PI*2),$.stroke();return Le(j)})(),h=new D(new Be(1,48),new Xe({map:c,roughness:.95}));h.rotation.x=-Math.PI/2,h.scale.set(1.15,.8,1),h.position.set(2.95,.004,2.6),h.receiveShadow=!0,i.add(h);const d=new D(new Be(.5,24),new _e({color:"#8CC4DA",roughness:.02,transparent:!0,opacity:0,clearcoat:1,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.scale.set(1.4,.8,1),d.position.set(Se.cx,.006,.95),i.add(d);const u=H_(),f=qt(P.teal,{map:u.map,normalMap:u.normalMap,rough:.36});u.map.repeat.set(1,1);const g=qt(P.teal,{map:u.map,normalMap:u.normalMap,rough:.4}),x=Vy(n,r,[{x0:Se.x0,x1:Se.x1,y0:0,y1:Se.h},{x0:ne.x0,x1:ne.x1,y0:ne.sill,y1:ne.top}],[f,qt(P.tealDark)]);x.position.set(0,0,-Er),i.add(x);const m=V_(),p=qt(P.mint,{map:m.map,normalMap:m.normalMap,rough:.33}),_=.86;for(const[j,$]of[[0,Se.x0],[Se.x1,n]]){const lt=$-j,Ut=new D(new Ne(lt,_,.03),p);m.map.repeat.set(1,1),Ut.position.set(j+lt/2,_/2,.015),Ut.receiveShadow=!0,i.add(Ut);const Jt=Ye(lt,.07,.07,qt(P.berry),.02);Jt.position.set(j+lt/2,_+.02,.035),i.add(Jt)}const w=Ye(n,.12,.08,qt(P.berry),.02);w.position.set(n/2,r-.06,.04),i.add(w),Ls(i,new T(.2,r-.06,.085),new T(n-.2,r-.06,.085),18,.018);for(const j of[0,n]){const $=new D(new Ne(Er,r,s),g);$.position.set(j===0?-Er/2:n+Er/2,r/2,s/2),$.receiveShadow=!0,i.add($);const lt=new D(new Ne(.03,_,s),p);lt.position.set(j===0?.015:n-.015,_/2,s/2),i.add(lt);const Ut=Ye(.07,.07,s,qt(P.berry),.02);Ut.position.set(j===0?.035:n-.035,_+.02,s/2),i.add(Ut)}for(const[j,$,lt]of[[.02,2.4,P.gold],[n-.02,1.4,P.coral]]){const Ut=Ye(.04,.6,.5,qt(P.berry),.015);Ut.position.set(j,2.3,$),i.add(Ut);const Jt=new D(new be(.4,.5),Bo(lt));Jt.position.set(j+(j<1?.025:-.025),2.3,$),Jt.rotation.y=j<1?Math.PI/2:-Math.PI/2,i.add(Jt)}const v=new Mt;i.add(v);const S=qt(P.berry,{rough:.3}),A=ne.x1-ne.x0,R=ne.top-ne.sill,y=ne.cx,b=(ne.top+ne.sill)/2;for(const[j,$,lt,Ut]of[[A+.18,.12,y,ne.top+.04],[A+.3,.12,y,ne.sill-.02],[.12,R,ne.x0-.02,b],[.12,R,ne.x1+.02,b],[.06,R,y,b],[A,.06,y,b+.1]]){const Jt=Ye(j,$,.1,S,.02);Jt.position.set(lt,Ut,0),v.add(Jt)}const C=Ye(A+.45,.07,.34,qt(P.mint),.02);C.position.set(y,ne.sill-.08,.12),v.add(C),Ls(v,new T(ne.x0+.05,ne.top+.04,.06),new T(ne.x1-.05,ne.top+.04,.06),9,.016);const N=new D(new we(.1,.075,.16,16),qt(P.coral));N.position.set(ne.x1-.08,ne.sill+.03,.18),v.add(N);for(let j=0;j<3;j++){const $=new D(new kt(.05,10,8),qt(j===1?P.gold:P.porcelain));$.position.set(ne.x1-.12+j*.05,ne.sill+.18+j%2*.05,.18),v.add($)}const U=new D(new be(A,R),vu(.14));U.position.set(y,b,-.03),U.renderOrder=2,v.add(U);const G=new D(new be(A,R),new Ue({color:"#FFF1C9",transparent:!0,opacity:0,depthWrite:!1,blending:Nr}));G.position.set(y,b,-.02),v.add(G);const z=new D(new be(A,R),new Ue({map:(()=>{const[j,$]=Re(256,256),lt=$.createRadialGradient(128,128,60,128,128,180);return lt.addColorStop(0,"rgba(255,255,255,0)"),lt.addColorStop(1,"rgba(255,255,255,0.85)"),$.fillStyle=lt,$.fillRect(0,0,256,256),Le(j)})(),transparent:!0,opacity:0,depthWrite:!1}));z.position.set(y,b,-.025),v.add(z);const V=new _e({color:"#E8F6FA",roughness:.02,transmission:0,transparent:!0,opacity:.75,clearcoat:1}),tt=new Yu(new kt(.022,8,6),V,60);tt.count=0,tt.position.set(0,0,-.01),v.add(tt);const Y=gn("dots",P.mint,P.berry,2,81),H=[];for(const j of[-1,1]){const $=new be(1,R+.5,24,1),lt=$.getAttribute("position");for(let Jt=0;Jt<lt.count;Jt++)lt.setZ(Jt,Math.sin(lt.getX(Jt)*Math.PI*7)*.045);$.computeVertexNormals(),$.translate(-j*.5,0,0);const Ut=new D($,Y);Ut.position.set(j<0?ne.x0-.35:ne.x1+.35,b+.1,.16),Ut.scale.x=.45,Ut.castShadow=!0,Ut.userData.side=j,v.add(Ut),H.push(Ut),t.push({mesh:Ut,kind:"fixture",id:"curtains"})}const O=new D(new we(.025,.025,A+1.1,10),ie(P.gold));O.rotation.z=Math.PI/2,O.position.set(y,ne.top+.36,.17),v.add(O);for(const j of[-1,1]){const $=new D(new kt(.055,12,10),ie(P.gold));$.position.set(y+j*(A/2+.58),ne.top+.36,.17),v.add($)}const X=new D(new Be(.42,32,0,Math.PI),qt(P.berry));X.position.set(y,ne.top+.12,.06),v.add(X);const et=J_(),dt=new D(new we(.2,.2,.42,30,1,!1),[new _e({map:et,roughness:.3,clearcoat:1}),qt(P.gold),qt(P.gold)]);dt.rotation.order="ZXY",dt.rotation.z=Math.PI/2,dt.position.set(y,ne.top+.3,.16),v.add(dt);const At=new D(new kt(.07,14,10),ie(P.gold));At.position.set(y+.27,ne.top+.3,.16),v.add(At);for(const j of[dt,At,X])e(j,"weather");t.push({mesh:U,kind:"fixture",id:"window"});const de=new Mt;for(const[j,$,lt,Ut]of[[.12,Se.h+.06,Se.x0-.04,Se.h/2],[.12,Se.h+.06,Se.x1+.04,Se.h/2],[Se.x1-Se.x0+.2,.12,Se.cx,Se.h+.04]]){const Jt=Ye(j,$,.12,S,.02);Jt.position.set(lt,Ut,0),de.add(Jt)}i.add(de);const $t=new Mt;$t.position.set(Se.x0,0,-.06);const re=Se.x1-Se.x0,Q=Ye(re-.02,Se.h-.02,.07,qt(P.mint,{rough:.3}),.02);Q.position.set(re/2,Se.h/2,0),$t.add(Q);for(const[j,$]of[[.55,.7]]){const lt=Ye(re-.26,$,.02,qt(P.teal),.02);lt.position.set(re/2,j,.045),$t.add(lt)}const rt=new D(new Ze(.2,.035,10,28),qt(P.berry));rt.position.set(re/2,1.62,.05),$t.add(rt);const vt=new D(new Be(.2,24),vu(.25));vt.position.set(re/2,1.62,.04),$t.add(vt);const Kt=new D(new kt(.06,14,10),ie(P.gold));Kt.position.set(re-.14,1.05,.08),$t.add(Kt),Ls($t,new T(.08,.15,.04),new T(.08,Se.h-.15,.04),6),i.add($t),e($t,"door");const Et=new D(new be(1,.5),gn("stripes",P.coral,P.gold,1,91));Et.rotation.x=-Math.PI/2,Et.position.set(Se.cx,.005,.5),Et.receiveShadow=!0,i.add(Et);const Lt=new Mt;Lt.position.set(Ir.cx,0,.16),i.add(Lt);const he=.58,st=1.5,ht=new ca(new be(he,st),{textureWidth:256,textureHeight:512,color:new Dt("#c9e4e2"),clipBias:.003});ht.position.set(0,1.25,.02),Lt.add(ht);const mt=new ia(0,0,he/2+.04,st/2+.04,0,Math.PI*2,!1,0).getPoints(48).map(j=>new T(j.x,j.y,0)),gt=new D(new Xr(new bc(mt,!0),64,.055,10,!0),qt(P.berry));gt.position.set(0,1.25,.03),Lt.add(gt);const Yt=new yn;Yt.moveTo(-he/2-.05,-st/2-.05),Yt.lineTo(he/2+.05,-st/2-.05),Yt.lineTo(he/2+.05,st/2+.05),Yt.lineTo(-he/2-.05,st/2+.05);const Zt=new Hs;Zt.absellipse(0,0,he/2+.01,st/2+.01,0,Math.PI*2,!0,0),Yt.holes.push(Zt);const te=new D(new ji(Yt,32),qt(P.berry));te.position.set(0,1.25,.025),Lt.add(te);const se=new D(new Be(.16,20,0,Math.PI),qt(P.gold));se.position.set(0,1.25+st/2+.05,.04),Lt.add(se);for(const j of[-1,1]){const $=new D(new we(.025,.03,.55,10),ie(P.gold));$.position.set(j*.22,.26,0),$.rotation.z=j*.12,Lt.add($);const lt=new D(new kt(.05,10,8),ie(P.gold));lt.position.set(j*.25,.04,.02),Lt.add(lt)}const k=new D(new be(.12,st*1.1),new Ue({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1,blending:Nr}));k.rotation.z=-.5,k.position.set(-.4,1.25,.035),Lt.add(k),e(Lt,"mirror");const me=new Mt;me.position.set(hn.x0,0,0),i.add(me);const Wt=hn.x1-hn.x0,I=hn.h,M=hn.depth,W=qt(P.teal,{rough:.32}),Z=yi(P.mint,"dots",P.porcelain,2,9);for(const[j,$,lt,Ut,Jt,bn,On]of[[Wt,I,.05,Wt/2,I/2,.03,Z],[.07,I,M,.035,I/2,M/2,W],[.07,I,M,Wt-.035,I/2,M/2,W],[Wt,.08,M,Wt/2,I-.04,M/2,W],[Wt,.14,M,Wt/2,.07,M/2,W],[Wt-.1,.03,M-.08,Wt/2,.55,M/2,qt(P.mint)]]){const nr=Ye(j,$,lt,On,.015);nr.position.set(Ut,Jt,bn),me.add(nr)}const nt=new yn;nt.moveTo(0,0);for(let j=0;j<7;j++)nt.absarc(.1+j*.2,0,.1,Math.PI,0,!0);nt.lineTo(Wt,.18),nt.lineTo(0,.18);const xt=new ki(nt,{depth:.05,bevelEnabled:!1}),_t=new D(xt,qt(P.berry));_t.rotation.x=Math.PI,_t.position.set(0,I+.12,M+.03),me.add(_t);const it=Ye(Wt+.12,.1,M+.1,qt(P.berry),.02);it.position.set(Wt/2,I+.12,M/2),me.add(it),Ls(me,new T(.12,I+.12,M+.06),new T(Wt-.12,I+.12,M+.06),7,.018);const at=new D(new we(.02,.02,Wt-.12,10),ie(P.gold));at.rotation.z=Math.PI/2,at.position.set(Wt/2,I-.45,M*.45),me.add(at);const yt=Wt/2-.02,Vt=[],Tt=yi(P.mint,"lace",P.porcelain,1.5,12);for(const j of[-1,1]){const $=new Mt;$.position.set(j<0?.02:Wt-.02,0,M+.01);const lt=new Mt;lt.position.x=j<0?yt/2:-yt/2,$.add(lt);const Ut=Ye(yt,I-.3,.05,W,.02);Ut.position.set(0,I/2+.03,0),lt.add(Ut);const Jt=Ye(yt-.18,I-.75,.02,Tt,.02);Jt.position.set(0,I/2+.05,.032),lt.add(Jt);const bn=new D(new kt(.05,12,10),ie(P.gold));bn.position.set(j<0?yt/2-.1:-yt/2+.1,1.25,.06),lt.add(bn);const On=Ye(yt-.04,I-.34,.01,Z,.005);On.position.set(0,I/2+.03,-.03),lt.add(On),$.userData.side=j,me.add($),Vt.push($),e($,"wardrobe")}const bt=new Mt;i.add(bt);const zt=new Mt,Qt=new D(new we(.022,.022,Wt-.16,10),ie(P.gold));Qt.rotation.z=Math.PI/2,zt.add(Qt);for(const j of[-1,1]){const $=new D(new Ne(.03,.03,.75),ie(P.gold));$.position.set(j*(Wt/2-.1),0,-.36),zt.add($);const lt=new D(new kt(.035,10,8),ie(P.gold));lt.position.set(j*(Wt/2-.07),0,0),zt.add(lt)}zt.position.set(hn.x0+Wt/2,I-.4,M*.45),zt.userData.home=zt.position.clone(),i.add(zt);const oe={rainwear:.34,day:.6,dress:.92,pajamas:1.2},B={};for(const j of["rainwear","day","dress","pajamas"]){const $=Wy(j),lt=new T(hn.x0+oe[j],I-.42,M*.45+(j==="dress"?.06:0));$.position.copy(lt),$.rotation.y=j==="dress"?.12:0,bt.add($),B[j]={outfit:j,group:$,home:lt,sway:Math.random()*6},$.traverse(Ut=>{Ut.isMesh&&t.push({mesh:Ut,kind:"garment",id:j})})}const ft=new Mt;i.add(ft);const ot=Y_();ot.repeat.set(8,6);const wt=new D(new be(16,14),qt(P.grass,{map:ot,rough:.5}));wt.rotation.x=-Math.PI/2,wt.position.set(3,-.01,-7.2),wt.receiveShadow=!0,ft.add(wt);const Pt=new D(new be(16,14),new Xe({color:"#F4FAFC",roughness:.9,transparent:!0,opacity:0}));Pt.rotation.x=-Math.PI/2,Pt.position.set(3,.005,-7.2),ft.add(Pt);for(let j=0;j<4;j++){const $=new D(new we(.22,.24,.05,16),qt("#D9E6E2"));$.position.set(Se.cx+(fr.x-Se.cx)*(j/4)+.1,.02,-1-j*.65),ft.add($)}const ct=new D(new Be(1,40),new _e({color:"#6FA9CF",roughness:.05,metalness:.2,clearcoat:1,clearcoatRoughness:.02}));ct.rotation.x=-Math.PI/2,ct.scale.set(.8,.5,1),ct.position.set(fr.x,.012,fr.z),ft.add(ct);const Xt=[];for(let j=0;j<4;j++){const $=new D(new Ec(.9,1,32),new Ue({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));$.rotation.x=-Math.PI/2,$.position.set(fr.x,.02,fr.z),ft.add($),Xt.push($)}const Ht=qt(P.porcelain);for(let j=-1.8;j<=8.4;j+=.42){const $=new D(new Ne(.2,1.2,.06),Ht);$.position.set(j,.6,-6.2),ft.add($);const lt=new D(new _i(.14,.2,4),Ht);lt.rotation.y=Math.PI/4,lt.position.set(j,1.3,-6.2),ft.add(lt)}for(const j of[.35,.95]){const $=new D(new Ne(10.4,.1,.05),Ht);$.position.set(3.3,j,-6.24),ft.add($)}const Ae=new D(new we(.16,.24,2.4,12),qt("#8A5A44"));Ae.position.set(6.6,1.2,-4.8),ft.add(Ae);const ge=new Mt;ge.position.set(6.6,2.9,-4.8);const Ce=li(77);for(let j=0;j<7;j++){const $=new D(new kt(.65+Ce()*.3,18,14),qt(P.leaf,{rough:.45}));$.position.set((Ce()-.5)*1.6,(Ce()-.3)*1,(Ce()-.5)*.8),ge.add($)}ft.add(ge);const vn=new Mt;for(let j=0;j<40;j++){const $=new D(new kt(.07,8,6),qt("#F7C6D4")),lt=Ce()*Math.PI*2,Ut=.9+Ce()*.5;$.position.set(Math.cos(lt)*Ut,(Ce()-.3)*1.2,Math.sin(lt)*Ut*.6+.4),vn.add($)}ge.add(vn);for(const[j,$]of[[1.2,-3],[2,-5.3],[8,-3.4]]){const lt=new Mt;for(let Ut=0;Ut<3;Ut++){const Jt=new D(new kt(.4,14,10),qt(P.leaf,{rough:.5}));Jt.position.set((Ut-1)*.35,.3,0),lt.add(Jt)}lt.position.set(j,0,$),ft.add(lt)}const Jn=new Mt,ha=new Xe({color:"#F6FBFD",roughness:.85});for(const[j,$]of[[.42,.38],[.3,.98]]){const lt=new D(new kt(j,18,14),ha);lt.position.y=$,Jn.add(lt)}const ls=new D(new _i(.05,.22,8),qt(P.coral));ls.rotation.x=Math.PI/2,ls.position.set(0,1,.33),Jn.add(ls);for(const j of[-1,1]){const $=new D(new kt(.035,8,6),Bo(P.ink));$.position.set(j*.1,1.08,.26),Jn.add($)}const Oi=new D(new Ze(.26,.06,8,20),ze(P.berry));Oi.rotation.x=Math.PI/2,Oi.position.y=.76,Jn.add(Oi),Jn.position.set(jo.x,0,jo.z),Jn.scale.setScalar(.001),ft.add(Jn);const Jr=new Ue({map:Id(P.sky,"#E6F5F8")}),$s=new D(new be(40,18),Jr);$s.position.set(3,6,-12),ft.add($s);const cs=new D(new Be(.7,32),new Ue({color:"#FFE08A"}));cs.position.set(7,6,-11.8),ft.add(cs);const kn=new D(new Be(.55,32),new Ue({color:"#F6EFC8"}));kn.position.set(1.5,6.5,-11.8),ft.add(kn);const zi=new Mt;for(let j=0;j<4;j++){const $=new Mt;for(let lt=0;lt<4;lt++){const Ut=new D(new kt(.5+Ce()*.3,14,10),new Xe({color:"#FFFFFF",roughness:.9}));Ut.position.set(lt*.55-.8,Ce()*.3,0),Ut.scale.z=.4,$.add(Ut)}$.position.set(-2+j*3.4,5.2+Ce()*1.6,-11),zi.add($)}ft.add(zi);const Qs=700,js=new Float32Array(Qs*6);for(let j=0;j<Qs;j++){const $=-1+Ce()*9,lt=Ce()*7,Ut=-.4-Ce()*8;js.set([$,lt,Ut,$-.03,lt-.28,Ut],j*6)}const Bi=new Oe;Bi.setAttribute("position",new Mn(js,3));const Gi=new cp(Bi,new Ku({color:"#D8ECF6",transparent:!0,opacity:.7}));Gi.visible=!1,Gi.frustumCulled=!1,ft.add(Gi);const Hi=500,tr=new Float32Array(Hi*3);for(let j=0;j<Hi;j++)tr.set([-1+Ce()*9,Ce()*7,-.4-Ce()*8],j*3);const er=new Oe;er.setAttribute("position",new Mn(tr,3));const ua=(()=>{const[j,$]=Re(32,32),lt=$.createRadialGradient(16,16,0,16,16,16);return lt.addColorStop(0,"rgba(255,255,255,1)"),lt.addColorStop(1,"rgba(255,255,255,0)"),$.fillStyle=lt,$.fillRect(0,0,32,32),Le(j)})(),hs=new hp(er,new Zu({size:.12,map:ua,transparent:!0,depthWrite:!1}));hs.visible=!1,hs.frustumCulled=!1,ft.add(hs);const Vi=new Mt,us=[P.berry,P.gold,P.mint,P.coral,P.lavender],$r=new D(new Xr(new $o(new T(.2,3.65,.12),new T(n/2,3.25,.12),new T(n-.2,3.65,.12)),30,.012,5),Bo(P.porcelain));Vi.add($r);const E=new $o(new T(.2,3.65,.12),new T(n/2,3.25,.12),new T(n-.2,3.65,.12));for(let j=1;j<16;j++){const $=E.getPoint(j/16),lt=new yn;lt.moveTo(-.13,0),lt.lineTo(.13,0),lt.lineTo(0,-.28);const Ut=new D(new ji(lt),gn("plain",us[j%us.length],us[j%us.length],1,100+j));Ut.position.copy($),Vi.add(Ut)}Vi.visible=!1,i.add(Vi);const F=new Mt;i.add(F);const J=yi(P.tealDark,"scallop",P.goldDark,3,15),q=qt(P.berry,{rough:.3});for(const j of[-1,1]){const $=Ye(.36,r+1.2,.3,q,.04);$.position.set(j<0?-.18:n+.18,(r+1.2)/2-.45,s+.1),F.add($);const lt=Ye(.2,r+.6,.02,J,.01);lt.position.set(j<0?-.18:n+.18,(r+1.2)/2-.45,s+.26),F.add(lt),Ls(F,new T(j<0?-.06:n+.06,-.3,s+.27),new T(j<0?-.06:n+.06,r+.6,s+.27),12,.02),Ls(F,new T(j<0?-.3:n+.3,-.3,s+.27),new T(j<0?-.3:n+.3,r+.6,s+.27),12,.02)}const K=Ye(n+.72,.62,.3,q,.04);K.position.set(n/2,r+.44,s+.1),F.add(K);const Rt=Ye(n+.4,.36,.02,J,.01);Rt.position.set(n/2,r+.44,s+.26),F.add(Rt);const Ft=gn("velvet",P.berryDark,P.berryDark,1,120);for(let j=0;j<12;j++){const $=new D(new kt(.28,16,10,0,Math.PI*2,Math.PI/2,Math.PI/2),Ft);$.scale.set(1,.6,.35),$.position.set(.25+j*((n-.5)/11),r+.14,s+.02),F.add($);const lt=new D(new _i(.03,.12,6),ie(P.gold));lt.position.set(.25+j*((n-.5)/11),r-.06,s+.08),lt.rotation.x=Math.PI,F.add(lt)}const St=new D(new Be(.62,40,0,Math.PI),qt(P.berry));St.position.set(n/2,r+.75,s+.24),F.add(St);const Ot=new D(new Be(.5,40),new _e({map:Z_(),roughness:.3,clearcoat:1}));Ot.position.set(n/2,r+.74,s+.255),F.add(Ot);const Gt=new yn;Gt.moveTo(-.75,-.62),Gt.lineTo(.75,-.62),Gt.lineTo(.75,0),Gt.lineTo(-.75,0);const ae=new D(new ji(Gt),q);ae.position.set(n/2,r+.74,s+.262),F.add(ae);const ue=new D(new Ze(.52,.04,8,40,Math.PI),ie(P.gold));ue.position.set(n/2,r+.74,s+.27),F.add(ue);const Bt=new D(new kt(.09,14,10),ie(P.gold));Bt.position.set(n/2,r+.74,s+.3),F.add(Bt);const ye=new D(new Ne(.035,.44,.02),ie(P.gold));ye.position.set(n/2,r+.95,s+.285),F.add(ye);for(const j of[Ot,Bt,St,ae,ue,ye])e(j,"time");const Ie=new Mt,De=new Ui([.02,.025,.04,.07,.12,.2,.26].map((j,$)=>new ut(j,$*.07)),24),Te=new D(De,ie(P.gold,.22));Te.rotation.x=Math.PI/2-.4,Ie.add(Te);const He=new Mt,Nt=new D(new Be(.27,24),qt(P.berry));Nt.position.set(0,0,0),He.add(Nt),He.position.set(0,.17,.39),He.rotation.x=-.4,He.visible=!1,Ie.add(He),Ie.position.set(-.05,r+.5,s+.32),Ie.rotation.z=.5,F.add(Ie),e(Ie,"horn");const je=Ye(n+.72,.5,.3,q,.03);je.position.set(n/2,-.22,s+.1),F.add(je);const xe=Ye(n+.3,.26,.02,J,.01);xe.position.set(n/2,-.24,s+.26),F.add(xe);const dn=[];for(let j=0;j<9;j++){const $=new D(new kt(.06,12,8,0,Math.PI*2,0,Math.PI/2),Zr("#FFE6A8",.2));$.position.set(.4+j*((n-.8)/8),.03,s+.16),F.add($),dn.push($)}const wn=[],$n=gn("velvet",P.berry,P.berry,1,121);for(const j of[-1,1]){const $=new be(1,r+.2,40,1),lt=$.getAttribute("position");for(let Jt=0;Jt<lt.count;Jt++)lt.setZ(Jt,Math.sin(lt.getX(Jt)*Math.PI*12)*.05);$.computeVertexNormals(),$.translate(j<0?.5:-.5,0,0);const Ut=new D($,$n);Ut.position.set(j<0?0:n,(r+.2)/2-.1,s+.06),Ut.userData.side=j,Ut.castShadow=!1,F.add(Ut),wn.push(Ut)}return{group:i,doorLeaf:$t,curtains:H,stageCurtains:wn,wardrobeDoors:Vt,garments:B,garmentGroup:bt,pullRail:zt,weatherDrum:dt,timeDial:Ot,hornFlap:He,sky:Jr,sunDisc:cs,moonDisc:kn,clouds:zi,puddle:ct,ripples:Xt,rain:Gi,snow:hs,snowGround:Pt,snowman:Jn,treeCrown:ge,blossoms:vn,windowDrops:tt,windowFrost:z,bunting:Vi,floorWater:d,mirrorGlass:ht,mirrorSheen:k,footlights:dn,pickables:t,windowLight:G}}const Ns=(i,t)=>{let n=Math.min(t,.25);for(;n>1e-6;){const s=Math.min(n,.008333333333333333);i.squashV+=(-160*i.squash-9*i.squashV)*s,i.squash+=i.squashV*s,i.wobV+=(-160*.7*i.wob-9*i.wobV)*s,i.wob+=i.wobV*s,n-=s}i.squash=Math.max(-2,Math.min(2,i.squash)),i.wob=Math.max(-2,Math.min(2,i.wob))};class qy{constructor(t){L(this,"stage");L(this,"room");L(this,"lighting");L(this,"furniture",{});L(this,"props",{});L(this,"tools",{});L(this,"pickables",[]);L(this,"springs",new Map);L(this,"lifted",new Map);L(this,"dragPos",new Map);L(this,"holdPose",null);L(this,"skyKey","");L(this,"skyCache",new Map);L(this,"ripplesT",[0,0,0,0]);L(this,"splash",0);L(this,"mirrorSweep",-1);L(this,"dialAngle",0);L(this,"drumAngle",0);L(this,"curtainOpen",1);L(this,"doorAngle",0);L(this,"wardrobeL",0);L(this,"wardrobeR",0);L(this,"stageCurtain",0);L(this,"stageCurtainTarget",0);L(this,"hush",!1);L(this,"propPos",new Map);L(this,"propYaw",new Map);L(this,"garmentDrag",null);L(this,"garmentDragPos",new T);L(this,"garmentHome",new T);L(this,"photoCount",0);L(this,"photoStack",[]);L(this,"preciseMeshes",[]);this.stage=t;const e=t.scene,n=Cd();this.room=Xy(),e.add(this.room.group);const s=this.room.mirrorGlass,r=s.onBeforeRender.bind(s);let o=0;s.onBeforeRender=(...l)=>{t.lowgfx||o++%2===0&&r(...l)},this.lighting=new Ay(e),this.furniture.chair=wy(n),this.furniture.table=by(n),this.furniture.bed=Ey(n),this.furniture.lamp=Ty(n);for(const l of Lr)e.add(this.furniture[l].group),this.pickables.push({object:this.furniture[l].hit,kind:"furniture",id:l,priority:1});for(const l of ts){const c=Hy(l,n);this.props[l]=c,e.add(c.group),this.pickables.push({object:c.hit,kind:"prop",id:l,priority:3})}this.tools.camera=zy(n),this.tools.album=By(n),this.tools.cards=Gy(n,["free","rain","birthday","sleepover","snow"].map(Ld));for(const l of["camera","album","cards"])e.add(this.tools[l].group),this.pickables.push({object:this.tools[l].hit,kind:"tool",id:l,priority:3});for(const l of this.room.pickables)this.pickables.push({object:l.mesh,kind:l.kind==="garment"?"garment":"fixture",id:l.id,priority:l.kind==="garment"?2.6:.5});const a=(l,c,h,d=[])=>l.traverse(u=>{u.isMesh&&!d.includes(u)&&(u.userData.pick={kind:c,id:h},this.preciseMeshes.push(u))});for(const l of Lr)a(this.furniture[l].body,"furniture",l);for(const l of ts)a(this.props[l].body,"prop",l);for(const l of["camera","album","cards"])a(this.tools[l].body,"tool",l);for(const l of this.room.pickables)l.mesh.userData.pick={kind:l.kind==="garment"?"garment":"fixture",id:l.id},this.preciseMeshes.push(l.mesh);this.room.pullRail.traverse(l=>l.userData.pick={kind:"ignore",id:""}),this.room.group.traverse(l=>{l.isMesh&&!l.userData.pick&&(l.userData.pick={kind:"blocker",id:""},this.preciseMeshes.push(l))})}spring(t){let e=this.springs.get(t);return e||(e={squash:0,squashV:0,wob:0,wobV:0},this.springs.set(t,e)),e}poke(t,e=1){const n=this.spring(t);n.squashV+=2.2*e,n.wobV+=(Math.random()<.5?-1:1)*3*e}setLifted(t,e){e?this.lifted.set(t,this.lifted.get(t)??0):this.lifted.delete(t)}sweepMirror(){this.mirrorSweep=0}splashPuddle(){this.splash=1,this.ripplesT=[0,.15,.3,.45]}dragGarment(t){this.garmentDrag=t}restPosition(t,e){const n=t.props[e].loc;switch(n.at){case"floor":return new T(n.x,0,n.z);case"surface":return this.surfaceWorld(n.on,n.slot);case"shelf":{const s=this.stage.shelf.slots[n.slot];return s?s.clone():null}case"wardrobe":return new T(hn.x0+(e==="umbrella"?1.05:e==="boots"?.45:.75),.16,.32);default:return null}}surfaceWorld(t,e){const n=this.furniture[t].group,s=Js[t][e]??{x:0,z:0};return n.localToWorld(new T(s.x,Dr[t],s.z))}skyFor(t,e){const n=t+e;let s=this.skyCache.get(n);if(!s){const[r,o]=this.lighting.skyColors;s=Id(r,o,t==="night"&&e==="sun"),this.skyCache.set(n,s)}return s}update(t,e,n){const s=Math.min(1,n*10);for(const H of Lr){const O=this.furniture[H],X=t.furniture[H],et=this.dragPos.get(H),dt=O.group,At=et?et.x:X.x,de=et?et.z:X.z,$t=dt.position.x,re=dt.position.z;dt.position.x+=(At-dt.position.x)*(et?Math.min(1,n*18):s*.8),dt.position.z+=(de-dt.position.z)*(et?Math.min(1,n*18):s*.8);let Q=X.yaw-dt.rotation.y;Q=Math.atan2(Math.sin(Q),Math.cos(Q)),dt.rotation.y+=Q*s*.7;const rt=this.lifted.has(H)?1:0,vt=(this.lifted.get(H)??0)+(rt-(this.lifted.get(H)??0))*Math.min(1,n*14);this.lifted.has(H)&&this.lifted.set(H,vt);const Kt=(dt.position.x-$t)/Math.max(n,.001),Et=(dt.position.z-re)/Math.max(n,.001),Lt=this.spring(H);Ns(Lt,n),O.body.position.y=vt*.12+Math.max(0,Lt.squash)*.02,O.body.rotation.z=Di.clamp(-Kt*.03,-.12,.12)*vt+Lt.wob*.03,O.body.rotation.x=Di.clamp(Et*.03,-.12,.12)*vt,O.body.scale.y=1-Lt.squash*.03,O.shadow.scale.setScalar(1+vt*.25),O.shadow.material.opacity=.85-vt*.35,O.update?.(e,n)}this.furniture.bed.quilt.setOccupied(t.doll.posture==="lie"&&t.doll.seat==="bed");const r=this.furniture.chair.parts.cushion;r.scale.y+=((t.doll.seat==="chair"?.55:1)-r.scale.y)*s,this.furniture.lamp.setLight(this.lighting.lampLevel),this.lighting.lamp.position.copy(this.furniture.lamp.group.position).setY(1.38);for(const H of ts){const O=this.props[H],X=t.props[H].loc;O.setFlags?.(t.props[H].flags,e),O.update?.(e,n);const et=this.dragPos.get(H);let dt=null,At=0,de=0,$t=!1;if(et)dt=et,$t=!0;else if(X.at==="held"){const gt=this.holdPose?.(H);gt&&(dt=gt.pos,At=gt.yaw,de=gt.tilt??0,$t=!0)}else{if(dt=this.restPosition(t,H),X.at==="surface"&&H==="plush"&&X.on==="table"&&(X.slot==="gl"||X.slot==="gr")){const gt=this.furniture.chair.group.position;At=Math.atan2(gt.x-dt.x,gt.z-dt.z)}else X.at==="wardrobe"&&H==="umbrella"&&(de=.25);H==="umbrella"&&X.at==="shelf"&&dt&&(dt=dt.clone(),dt.x-=.32,dt.y+=.08)}const re=!!dt&&X.at!=="worn";if(O.group.visible=re,!dt||!re)continue;let Q=this.propPos.get(H);if(Q||(Q=dt.clone(),this.propPos.set(H,Q)),$t)Q.lerp(dt,Math.min(1,n*(et?22:16)));else{const gt=Q.distanceTo(dt);Q.lerp(dt,Math.min(1,n*7)),gt>.05&&(Q.y+=Math.min(.25,gt*.25)*n*6)}O.group.position.copy(Q);const rt=this.propYaw.get(H)??At;let vt=Math.atan2(Math.sin(At-rt),Math.cos(At-rt));const Kt=rt+vt*Math.min(1,n*8);this.propYaw.set(H,Kt);const Et=H==="umbrella"&&X.at==="shelf"&&!et?-Math.PI/2+.1:0;O.group.rotation.set(de,Kt,Et,"YXZ");const Lt=this.spring(H);Ns(Lt,n);const he=this.lifted.has(H)||!!et;O.body.position.y=he?.12:0,O.body.scale.set(1+Lt.squash*.06+(he?.06:0),1-Lt.squash*.08+(he?.06:0),1+Lt.squash*.06+(he?.06:0));const st=this.stage.layout.shelf.itemScale,ht=X.at==="shelf"&&!et?H==="umbrella"?.75*st/1.35:st:1,pt=O.group.scale.x+(ht-O.group.scale.x)*Math.min(1,n*8);O.group.scale.setScalar(pt),O.body.rotation.z=Lt.wob*.08;const mt=!$t&&(X.at==="floor"||X.at==="surface"||X.at==="shelf"||X.at==="wardrobe");O.shadow.visible=mt||!!et,O.shadow.position.y=.008}const a=this.props.towel,l=t.props.towel.loc.at==="held";a.parts.hang.visible=l,a.parts.folded.visible=!l,a.parts.fold2.visible=!l;for(const H of["camera","album","cards"]){const O=this.tools[H];O.group.position.copy(this.stage.shelf.tools[H]),O.group.scale.setScalar(this.stage.layout.shelf.itemScale);const X=this.spring(H);Ns(X,n),O.body.scale.set(1+X.squash*.06,1-X.squash*.08,1+X.squash*.06),O.body.rotation.z=X.wob*.06}this.updatePhotoStack();const c=this.room,h=t.fixtures;this.doorAngle+=((h.doorOpen?1.45:0)-this.doorAngle)*Math.min(1,n*4),c.doorLeaf.rotation.y=this.doorAngle+this.spring("door").wob*.04,Ns(this.spring("door"),n);const d=h.wardrobeOpen,u=Math.min(2,d*3.2),f=d>.3?2*(d-.3)/.7:0;this.wardrobeR+=(u-this.wardrobeR)*Math.min(1,n*5),this.wardrobeL+=(f-this.wardrobeL)*Math.min(1,n*5);const g=this.spring("wardrobe");Ns(g,n);for(const H of c.wardrobeDoors){const O=H.userData.side;H.rotation.y=O<0?-(this.wardrobeL+g.wob*.03):this.wardrobeR+g.wob*.03}const x=d>.5?Math.min(1,(d-.5)*2):0,m=c.pullRail.userData.home;c.pullRail.position.z+=(m.z+.62*x-c.pullRail.position.z)*Math.min(1,n*6),c.pullRail.position.y+=(m.y-.06*x-c.pullRail.position.y)*Math.min(1,n*6);for(const H of Object.keys(c.garments)){const O=c.garments[H],X=t.outfit===H;if(this.garmentDrag===H){O.group.visible=!0,O.group.position.lerp(this.garmentDragPos,Math.min(1,n*20)),O.group.rotation.z=Math.sin(e*6)*.08,O.group.scale.setScalar(1.25);continue}O.group.scale.setScalar(1),O.group.visible=!X;const et=d>.5?Math.min(1,(d-.5)*2):0;this.garmentHome.copy(O.home).add(new T(0,-.06*et,.62*et)),O.group.position.lerp(this.garmentHome,Math.min(1,n*6));const dt=H==="dress"?.06+.04*Math.sin(e*.7):.02;O.group.rotation.z=Math.sin(e*1.6+O.sway)*dt,O.group.rotation.x=H==="dress"&&d<.3?-.12+Math.sin(e*1.1)*.05:0}this.curtainOpen+=((h.curtainsOpen?1:0)-this.curtainOpen)*Math.min(1,n*4);for(const H of c.curtains){const O=this.spring("curtains");H.scale.x=.45+(1-this.curtainOpen)*.9+O.wob*.01,H.rotation.y=Math.sin(e*.8+H.userData.side)*.02+O.wob*.02}Ns(this.spring("curtains"),n);let _={sun:0,rain:1,snow:2}[t.weather]*(Math.PI*2/3)-this.drumAngle;for(;_<-Math.PI;)_+=Math.PI*2;for(;_>Math.PI;)_-=Math.PI*2;this.drumAngle+=_*Math.min(1,n*5),c.weatherDrum.rotation.y=this.drumAngle+Math.PI/2;let v={morning:0,day:1,evening:2,night:3}[t.time]*(Math.PI/2)-this.dialAngle;for(;v<-Math.PI;)v+=Math.PI*2;for(;v>Math.PI;)v-=Math.PI*2;this.dialAngle+=v*Math.min(1,n*4),c.timeDial.rotation.z=this.dialAngle,c.hornFlap.visible=this.hush,this.lighting.set(t.time,t.weather,h.lamp),this.lighting.update(n,this.stage.renderer);const S=t.time+t.weather;S!==this.skyKey&&(this.skyKey=S,c.sky.map=this.skyFor(t.time,t.weather),c.sky.needsUpdate=!0),c.sunDisc.visible=t.weather==="sun"&&t.time!=="night";const A={morning:[8.5,3.6],day:[5.5,8.5],evening:[-1.5,3.4],night:[0,0]}[t.time];c.sunDisc.position.x+=(A[0]-c.sunDisc.position.x)*s*.3,c.sunDisc.position.y+=(A[1]-c.sunDisc.position.y)*s*.3,c.sunDisc.material.color.set(t.time==="evening"?"#FF9A5C":t.time==="morning"?"#FFD38A":"#FFF0B0"),c.moonDisc.visible=t.time==="night"&&t.weather==="sun",c.clouds.visible=t.time!=="night"||t.weather!=="sun",c.clouds.children.forEach((H,O)=>{H.position.x=((H.position.x+n*.12*(1+O*.2)+4)%14+14)%14-4,H.children.forEach(X=>X.material.color.set(t.weather==="sun"?"#FFFFFF":t.weather==="rain"?"#9AA8B5":"#E4ECF0"))});const R=c.windowLight.material;R.opacity+=(((t.time==="morning"||t.time==="evening")&&t.weather==="sun"?.16:0)-R.opacity)*s*.3;const y=t.weather==="rain";if(c.rain.visible=y,y){const H=c.rain.geometry.getAttribute("position"),O=H.array;for(let X=0;X<O.length;X+=6)O[X+1]-=n*9,O[X+4]-=n*9,O[X+4]<0&&(O[X+1]+=7,O[X+4]+=7);H.needsUpdate=!0}const b=c.windowDrops;if(b.count=y?40:0,y){const H=new Ee;for(let O=0;O<40;O++){const X=(e*(.08+O%5*.03)+O*.137)%1,et=3.85+O*.618%1*1.9,dt=2.85-X*1.85;H.makeScale(1,1.6,.5).setPosition(et,dt,-.02),b.setMatrixAt(O,H)}b.instanceMatrix.needsUpdate=!0}const C=t.weather==="snow";if(c.snow.visible=C,C){const H=c.snow.geometry.getAttribute("position"),O=H.array;for(let X=0;X<O.length;X+=3)O[X+1]-=n*.8,O[X]+=Math.sin(e+X)*n*.2,O[X+1]<0&&(O[X+1]+=7);H.needsUpdate=!0}const N=c.snowGround.material;N.opacity+=((C?.9:0)-N.opacity)*Math.min(1,n*.8);const U=c.windowFrost.material;U.opacity+=((C?.75:0)-U.opacity)*Math.min(1,n),c.snowman.scale.setScalar(c.snowman.scale.x+((h.snowman?1:.001)-c.snowman.scale.x)*Math.min(1,n*2));for(let H=0;H<c.ripples.length;H++){this.ripplesT[H]+=n*(this.splash>0?.9:.6),this.ripplesT[H]>1&&(this.ripplesT[H]=y||this.splash>0?0:2);const O=this.ripplesT[H],X=c.ripples[H],et=O<=1&&(y||this.splash>0);X.visible=et,et&&(X.scale.setScalar(.08+O*(this.splash>0?.6:.3)),X.material.opacity=(1-O)*.7,!this.splash&&O<.02&&X.position.set(4.75+(Math.random()-.5)*.9,.02,-3.6+(Math.random()-.5)*.5),this.splash&&X.position.set(4.75,.02,-3.6))}this.splash=Math.max(0,this.splash-n*.8);const G=Cc(t.day),z={spring:"#6FBF86",summer:"#3E9A6A",autumn:"#E0863A",winter:"#DCE8EC"}[G];c.treeCrown.children.forEach(H=>{H.isMesh&&H.material.color.set(z)}),c.blossoms.visible=G==="spring",c.bunting.visible=h.bunting;const V=c.floorWater.material;V.opacity+=(h.floorWet*.55-V.opacity)*Math.min(1,n*2),this.mirrorSweep>=0&&(this.mirrorSweep+=n*1.4,c.mirrorSheen.position.x=-.4+this.mirrorSweep*.8,c.mirrorSheen.material.opacity=Math.sin(Math.min(1,this.mirrorSweep)*Math.PI)*.35,this.mirrorSweep>1&&(this.mirrorSweep=-1));const tt=t.time==="night"||t.time==="evening";for(const H of c.footlights){const O=H.material;O.emissiveIntensity+=((tt?1.4:.25)-O.emissiveIntensity)*s*.3}this.stageCurtain+=(this.stageCurtainTarget-this.stageCurtain)*Math.min(1,n*3.2);const Y=this.stage.orientation==="portrait"?.3:.5;for(const H of c.stageCurtains)H.scale.x=Y+this.stageCurtain*(Ct.W/2-Y+.05)}stageCurtainClosed(){return this.stageCurtain>.97}updatePhotoStack(){const t=this.tools.album.parts.stack,e=Math.min(6,this.photoCount);for(;this.photoStack.length<e;){const n=new Xe({color:"#FFFFFF",roughness:.6}),s=new Xe({color:"#FFFFFF",roughness:.5}),r=new D(new Ne(.16,.006,.12),[n,n,s,n,n,n]);t.add(r),this.photoStack.push(r)}this.photoStack.forEach((n,s)=>{n.visible=s<e,n.position.set(.12+s%2*.02,s*.008,-.02+s*.01),n.rotation.y=s%3*.2-.2})}setPhotoTexture(t,e){const n=this.photoStack[t];if(!n)return;const s=n.material,r=Array.isArray(s)?s[2]:s;r.map=e,r.needsUpdate=!0}doorWorld(){return new T(Se.cx,1.2,0)}}const Nd={morning:"day",day:"evening",evening:"night",night:"morning"};function kc(i,t){i.time!==t&&(i.time=t,qr(i,"time"))}function wu(i,t=Math.random){i.day=(i.day+1)%365,i.dayCount+=1;const e=h_(i.day,t);e!==i.weather&&(i.weather=e,qr(i,"weather")),i.weather!=="snow"&&(i.fixtures.snowman=0),i.props.cupA.flags.full=!0,i.props.cupB.flags.full=!0,i.props.cake.flags={candles:"unlit",slices:0},i.fixtures.floorWet=0,i.fixtures.bunting=i.story==="birthday"&&i.fixtures.bunting,kc(i,"morning")}function yr(i,t){const e=Xs(i,"table",t);return e==="cupA"||e==="cupB"?e:null}function Yy(i,t){const e=i.props;switch(t){case"openBook":e.book.flags.open=!0;break;case"closeBook":e.book.flags.open=!1;break;case"lampOn":i.fixtures.lamp=2;break;case"lampDim":i.fixtures.lamp=1;break;case"doorOpen":i.fixtures.doorOpen=!0;break;case"doorClose":i.fixtures.doorOpen=!1;break;case"umbrellaOpen":e.umbrella.flags.open=!0;break;case"umbrellaClose":e.umbrella.flags.open=!1;break;case"soakGear":e.boots.flags.wet=1,i.weather==="rain"&&(e.umbrella.flags.wet=1),i.wetCount+=1;break;case"dryBoots":e.boots.flags.wet=0,e.towel.flags.wet=.6;break;case"dryUmbrella":e.umbrella.flags.wet=0;break;case"cleanFloor":i.fixtures.floorWet=0;break;case"floorWet":i.fixtures.floorWet=1;break;case"tidy":qr(i,"tidy");break;case"candlesLit":e.cake.flags.candles="lit";break;case"candlesOut":e.cake.flags.candles="out";break;case"eatCake":e.cake.flags.slices=Math.min(3,(e.cake.flags.slices??0)+1);break;case"drink":{const n=Ql(i),s=yr(i,n.mine)??(e.cupA.loc.at==="surface"?"cupA":"cupB");e[s].flags.full=!1;break}case"passCup":{if(Pd(i)<2)break;const n=Ql(i),s=yr(i,n.mine),r=yr(i,n.guest);if(s&&r)break;const o=["cupA","cupB"];if(!s){const l=o.find(c=>c!==r&&e[c].loc.at==="surface");l&&!Xs(i,"table",n.mine)&&(e[l].loc={at:"surface",on:"table",slot:n.mine})}const a=yr(i,n.mine);if(!yr(i,n.guest)){const l=o.find(c=>c!==a&&e[c].loc.at==="surface");l&&!Xs(i,"table",n.guest)&&(e[l].loc={at:"surface",on:"table",slot:n.guest})}break}case"wardrobeOpen":i.fixtures.wardrobeOpen=1;break;case"wardrobeClose":i.fixtures.wardrobeOpen=.16;break;case"sleep":i.doll.asleep=!0,i.doll.activity="sleeping";break;case"wake":i.doll.asleep=!1;break;case"curtainsOpen":i.fixtures.curtainsOpen=!0;break;case"splash":break;case"advanceTime":i.time!=="night"&&kc(i,Nd[i.time]);break;case"buildSnowman":i.fixtures.snowman=1;break;case"clearGift":i.gift=null;break;case"musicOpen":e.musicBox.flags.open=!0,e.musicBox.flags.tune=45,qr(i,"musicBox");break}}function Ky(i,t,e){const n=t==="guest"?Ad(i):t??"c",s=Xs(i,"table",n);if(!s||s===e)return n;for(const r of["c","bl","br","l","r","gl","gr"]){const o=Xs(i,"table",r);if(!o||o===e)return r}return null}function bu(i,t){const e=t==="umbrella"?{x:Oo.x1-.25,z:1}:{x:Oo.x0+.42,z:1.05};return{x:e.x,z:Math.min(Oo.z1-.15,Math.max(Sr.z+.2,e.z))}}const Ud="dollhouse365.room.v1";function Zy(i){const t=JSON.parse(JSON.stringify(i));return t.doll.outside&&(t.doll.outside=!1,t.doll.x=3.05,t.doll.z=1),t.gift=null,JSON.stringify({v:Ic,savedAt:Date.now(),state:t})}const ti=(i,t,e)=>typeof i=="number"&&isFinite(i)&&i>=t&&i<=e;function Jy(i){if(!i)return null;let t;try{t=JSON.parse(i)}catch{return null}if(!t||t.v!==Ic||typeof t.state!="object")return null;const e=t.state,n=Dc();try{if(!_y.includes(e.time)||!Go.includes(e.weather)||!vy.includes(e.outfit))return null;yy.includes(e.story)||(e.story="free");for(const s of Lr){const r=e.furniture?.[s];if(!r||!ti(r.x,-1,8)||!ti(r.z,-1,6)||!ti(r.yaw,-10,10))return null}for(const s of ts){const r=e.props?.[s];if(!r||!r.loc||typeof r.loc.at!="string")return null;r.loc.at==="held"&&e.doll.holding!==s&&(r.loc={at:"floor",x:e.doll.x,z:Math.min(4.4,e.doll.z+.3)}),r.flags=r.flags??{}}return!e.doll||!ti(e.doll.x,-1,8)||!ti(e.doll.z,-6,6)?null:(e.fixtures={...n.fixtures,...e.fixtures??{}},e.rev=e.rev??{},e.touch=e.touch??{},e.fired=e.fired??{},e.tick=ti(e.tick,0,1e9)?e.tick:0,e.wetCount=ti(e.wetCount,0,1e9)?e.wetCount:0,e.day=ti(e.day,0,364)?Math.round(e.day):n.day,e.dayCount=ti(e.dayCount,0,1e7)?e.dayCount:0,e.gift=null,e.playerTick=ti(e.playerTick,0,1e9)?e.playerTick:e.tick,e.doll.outside=!1,e.props.musicBox.flags.tune=0,e)}catch{return null}}function Fd(){try{const i=globalThis.localStorage,t="__dh365_probe";return i.setItem(t,"1"),i.removeItem(t),i}catch{return null}}function $y(i,t=Fd()){if(!t)return!1;try{return t.setItem(Ud,Zy(i)),!0}catch{return!1}}function Qy(i=Fd()){if(!i)return null;try{return Jy(i.getItem(Ud))}catch{return null}}function jy(i,t){const e=Dc(t.day);switch(e.day=t.day,e.dayCount=t.dayCount,e.fixtures.snowman=t.fixtures.snowman,e.story=i,e.tick=t.tick+1,e.playerTick=e.tick,i){case"free":break;case"rain":e.weather="rain",e.time="day",e.props.boots.loc={at:"floor",x:2.72,z:1.15},e.props.umbrella.loc={at:"shelf",slot:0},e.props.cupB.loc={at:"shelf",slot:3},e.props.towel.loc={at:"shelf",slot:2},e.props.book.loc={at:"surface",on:"table",slot:"br"},e.doll.x=3.1,e.doll.z=2.2,e.doll.yaw=-.3;break;case"birthday":e.weather="sun",e.time="day",e.fixtures.bunting=!0,e.fixtures.wardrobeOpen=.55,e.props.cupB.loc={at:"surface",on:"table",slot:"l"},e.props.cake.loc={at:"shelf",slot:0},e.props.cake.flags={candles:"unlit",slices:0},e.props.musicBox.loc={at:"shelf",slot:5},e.props.plush.loc={at:"floor",x:.9,z:4.05},e.doll.x=3.4,e.doll.z=3.9;break;case"sleepover":e.time="evening",e.weather="sun",e.fixtures.lamp=1,e.fixtures.wardrobeOpen=.6,e.props.plush.loc={at:"surface",on:"bed",slot:"foot"},e.props.book.loc={at:"surface",on:"bed",slot:"mid"},e.props.musicBox.loc={at:"floor",x:3.45,z:2.25},e.props.cupA.loc={at:"shelf",slot:5},e.doll.x=2.9,e.doll.z=3.9;break;case"snow":e.time="morning",e.weather="snow",e.outfit="pajamas",e.fixtures.lamp=2,e.furniture.chair={x:4.35,z:1.4,yaw:Math.PI/2-.35},e.props.book.loc={at:"shelf",slot:5},e.props.boots.loc={at:"shelf",slot:3},e.props.towel.loc={at:"shelf",slot:2},e.doll.x=2.6,e.doll.z=3.9;break}return e}const tM=["reading","gazing","tea","party","birthday","cuddle","watching","readingBed","sitting","mirror"];class eM{constructor(t,e){L(this,"stage");L(this,"view");L(this,"rig");L(this,"actor");L(this,"scheduler",new R_);L(this,"sfx",new o_);L(this,"store",new L_);L(this,"album");L(this,"fan");L(this,"input");L(this,"state");L(this,"t",0);L(this,"last",performance.now());L(this,"drag",null);L(this,"pressed",null);L(this,"lastInput",0);L(this,"hintNext",14);L(this,"hintIdx",0);L(this,"sleepT",0);L(this,"lastSettle",null);L(this,"saveDirty",!1);L(this,"saveT",0);L(this,"storyPending",null);L(this,"timeScale",1);L(this,"prevActivity","idle");L(this,"dollHit");L(this,"flying",[]);L(this,"logLines",[]);L(this,"frames",0);L(this,"errors",[]);L(this,"stackTextures",new Map);this.stage=new my(t),this.stage.scene.add(this.stage.camera),this.view=new qy(this.stage);const n=Qy();this.state=n??Dc(),n||hu(this.state),this.sanitizeLoaded(),this.rig=new ty(Cd()),this.stage.scene.add(this.rig.root,this.rig.shadow),this.actor=new G_(this.rig,{state:this.state,fx:s=>this.effect(s),sfx:s=>this.sfx.play(s),pick:s=>this.dollPick(s),put:(s,r)=>this.dollPut(s,r),wear:s=>this.dollWear(s),propWorld:s=>this.propWorld(s),guestSeatWorld:()=>this.guestSeatWorld(),emptyPlacematWorld:()=>this.emptyPlacematWorld(),interest:()=>this.interestPoints(),log:s=>this.log(s)}),this.actor.onPlanEnd=(s,r)=>this.planEnded(s,r),this.view.holdPose=s=>this.actor.holdPose(s),this.dollHit=new D(new we(.42,.42,2.1,10),new Ue({visible:!1})),this.dollHit.position.y=1.05,this.rig.root.add(this.dollHit),this.view.pickables.push({object:this.dollHit,kind:"doll",id:"doll",priority:2.5});for(const s of this.rig.meshes)s.userData.pick={kind:"doll",id:"doll"},this.view.preciseMeshes.push(s);this.fan=new xy(this.stage.camera),this.album=new C_(e,this.store,this.sfx,()=>({day:this.state.day,season:Cc(this.state.day)})),this.album.onClose=()=>{this.input.enabled=!0,this.view.photoCount=this.store.loosePhotos().length,requestAnimationFrame(()=>this.refreshPhotoStack())},this.album.onSaved=()=>this.log(`diary saved (${this.store.diaries.length})`),this.input=new iy(this.stage.renderer.domElement,{press:(s,r)=>this.onPress(s,r),dragStart:(s,r,o)=>this.onDragStart(s,r,o),dragMove:(s,r,o)=>this.onDragMove(s,r,o),dragEnd:(s,r,o)=>this.onDragEnd(s,r,o),tap:(s,r,o)=>this.onTap(s,r,o),cancel:s=>this.onCancel(s),any:()=>{this.sfx.unlock(),this.lastInput=this.t}}),this.stage.onLayout=()=>{this.input?.abort(),this.album?.resize(),this.fan?.open&&this.fan.layout(this.stage.orientation==="portrait",this.stage.width/this.stage.height)},window.addEventListener("resize",()=>this.stage.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.stage.resize(),120)),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&this.save(!0),this.last=performance.now()}),window.addEventListener("pagehide",()=>this.save(!0)),this.store.init().then(()=>{this.view.photoCount=this.store.loosePhotos().length,requestAnimationFrame(()=>requestAnimationFrame(()=>this.refreshPhotoStack()))})}sanitizeLoaded(){const t=this.state;t.props.boots.loc.at==="worn"&&(t.props.boots.loc={at:"floor",...bu(t,"boots")}),t.doll.holding&&t.props[t.doll.holding].loc.at!=="held"&&(t.doll.holding=null);for(const e of ts)t.props[e].loc.at==="held"&&t.doll.holding!==e&&(t.props[e].loc={at:"floor",x:t.doll.x,z:Math.min(Ct.D-.2,t.doll.z+.3)});t.fixtures.doorOpen=!1}log(t){const e=`${this.t.toFixed(1)}s ${t}`;this.logLines.push(e),this.logLines.length>200&&this.logLines.shift(),window.__dhDebug&&console.debug("[dollhouse]",e)}start(){const t=e=>{try{this.frame(e)}catch(n){this.errors.push(String(n?.stack??n)),console.error(n)}requestAnimationFrame(t)};requestAnimationFrame(t)}frame(t){const e=Math.min(this.stage.lowgfx?.1:.05,Math.max(0,(t-this.last)/1e3));this.last=t;const n=Math.min(.3,e*this.timeScale);this.t+=n,this.frames++;const s=this.state;s.doll.activity!==this.prevActivity&&(this.log(`activity changed outside the actor: ${this.prevActivity} -> ${s.doll.activity}`),this.prevActivity=s.doll.activity),this.stage.watchFrame(e);const r=s.props.musicBox.flags;if(r.open&&(r.tune??0)>0&&(r.tune=Math.max(0,(r.tune??0)-n),r.tune===0&&this.scheduler.markDirty()),s.doll.asleep&&s.time==="night"?(this.sleepT+=n,this.sleepT>16&&(this.sleepT=0,wu(s),this.log(`night passed: day ${s.day}, weather ${s.weather}`),this.sfx.play("chime"),this.scheduler.markDirty(),this.saveDirty=!0)):this.sleepT=0,this.storyPending&&this.view.stageCurtainClosed()&&this.applyStory(this.storyPending),this.scheduler.setDragging(!!this.drag&&this.drag.hit.kind!=="tool"),!this.actor.held&&!this.storyPending){const o=this.scheduler.poll(s,this.actor.runningInfo());if(o)this.startCandidate(o);else if(!this.actor.isBusy()&&s.doll.activity==="idle"&&this.lastSettle&&!this.scheduler.isPending()){const a=P_(s,this.lastSettle.behavior),l=this.lastSettle;this.lastSettle=null,a&&l.tier>=2&&(this.log(`resume ${a.behavior}`),this.actor.start(a,M_(a,s)))}}s.doll.activity.startsWith("dance")&&!jl(s)&&!this.actor.isBusy()&&(s.doll.activity="idle",this.lastSettle=null,this.actor.start({rule:"END",behavior:"wearReact",tier:4,deps:[],signature:"",novelty:0,specificity:0,params:{}},{behavior:"wearReact",steps:[{k:"anim",name:"curtsy",dur:1},{k:"settle",activity:"idle"}]})),this.actor.update(n,this.t),this.drag||this.stage.updateFocus(s.doll.outside,n),s.doll.activity!==this.prevActivity&&(this.log(`activity ${this.prevActivity} -> ${s.doll.activity}`),this.prevActivity=s.doll.activity),this.idleHints(),this.view.update(s,this.t,n),this.updateFlying(n),this.fan.update(n,this.t),this.sfx.musicBox(jl(s),r.tune??0,n),this.sfx.rain(s.weather==="rain",s.fixtures.doorOpen),this.album.draw(n),this.stage.render(),this.saveT+=n,this.saveDirty&&this.saveT>2.5&&this.save()}save(t=!1){!t&&!this.saveDirty||(this.saveDirty=!1,this.saveT=0,$y(this.state))}startCandidate(t){const e=this.state;this.actor.isBusy()&&this.actor.cancel(),A_(e,t);const n=Td(t,e);this.actor.start(t,n),this.saveDirty=!0}planEnded(t,e){this.scheduler.actionEnded();const n=this.state.doll.activity;e&&t&&tM.includes(n)&&(this.lastSettle=t),e||this.log(`plan failed ${t?.behavior}`),this.saveDirty=!0}propWorld(t){const e=this.state.props[t].loc;return e.at==="shelf"||e.at==="worn"?null:e.at==="held"?this.view.props[t].group.position.clone():this.view.restPosition(this.state,t)}guestSeatWorld(){const t=Ad(this.state);return this.view.surfaceWorld("table",t)}emptyPlacematWorld(){const t=Ql(this.state);return this.view.surfaceWorld("table",t.guest)}interestPoints(){const t=this.state,e=[],n=Object.entries(t.touch).filter(([,r])=>r>t.tick-3).map(([r])=>r);for(const r of n)if(ts.includes(r)){const o=this.propWorld(r);o&&e.push(o,o)}else if(Lr.includes(r)){const o=t.furniture[r];e.push(new T(o.x,.6,o.z))}t.fixtures.wardrobeOpen<.5&&e.push(new T(.9,1.6,.6)),e.push(new T(ne.cx,1.8,-1)),e.push(new T(this.actor.pos.x,1.5,Ct.D+6));const s=this.propWorld("cupA");if(s&&e.push(s),Un(t,"musicBox")){const r=this.propWorld("musicBox");r&&e.push(r)}return e}effect(t){const e=this.state;switch(Yy(e,t),this.actor.pos,t){case"doorOpen":case"doorClose":this.sfx.play("door");break;case"openBook":case"closeBook":this.sfx.play("page");break;case"lampOn":case"lampDim":this.sfx.play("lamp");break;case"umbrellaOpen":case"umbrellaClose":this.sfx.play("cloth");break;case"splash":this.view.splashPuddle(),this.sfx.play("splash");break;case"candlesLit":this.sfx.play("tink",1.6);break;case"candlesOut":this.sfx.play("blow");break;case"wardrobeOpen":case"wardrobeClose":this.sfx.play("lid");break;case"musicOpen":this.sfx.play("lid");break;case"drink":this.sfx.play("clink",1.1);break;case"passCup":this.sfx.play("clink");break;case"advanceTime":this.sfx.play("dial");break;case"soakGear":this.rig.setBoots(this.state.props.boots.loc.at==="worn",1);break;case"dryBoots":this.sfx.play("rub");break;case"tidy":this.sfx.play("chime");break;case"sleep":this.sfx.play("yawn");break}this.saveDirty=!0}dollPick(t){const e=this.state,n=e.props[t].loc;return n.at==="floor"||n.at==="surface"?(e.props[t].loc={at:"held"},e.doll.holding=t,this.sfx.play(t==="cupA"||t==="cupB"?"clink":t==="plush"?"squeak":"lift"),!0):!1}dollPut(t,e){const n=this.state,s=n.doll;let r=null;if("surface"in e)if(e.surface==="table"){const o=Ky(n,e.slot,t);o&&(r={at:"surface",on:"table",slot:o})}else{const o=e.slot&&!Object.values(n.props).some(a=>a.loc.at==="surface"&&a.loc.on===e.surface&&a.loc.slot===e.slot)?e.slot:$l(n,e.surface,s.x,s.z,t);o&&(r={at:"surface",on:e.surface,slot:o})}else if("floorNear"in e)if(e.floorNear==="door")r={at:"floor",...bu(n,t)};else{const o={x:Math.sin(s.yaw),z:Math.cos(s.yaw)};r=pr(n,t,{kind:"floor",x:s.x+o.x*.45+.15,z:s.z+o.z*.45})}else if("wardrobe"in e)r={at:"wardrobe"};else if("worn"in e)r={at:"worn"};else if("tableOrFloor"in e){const o=Je(n,"table");if(Math.hypot(Math.max(o.x0-s.x,0,s.x-o.x1),Math.max(o.z0-s.z,0,s.z-o.z1))<1){const l=$l(n,"table",s.x,s.z,t);l&&(r={at:"surface",on:"table",slot:l})}r||(r=pr(n,t,{kind:"floor",x:s.x+Math.sin(s.yaw)*.45,z:s.z+Math.cos(s.yaw)*.45}))}return r||(r=pr(n,t,{kind:"floor",x:s.x,z:s.z+.4})),n.props[t].loc=r,s.holding===t&&(s.holding=null),t==="boots"&&r.at!=="worn"&&this.rig.setBoots(!1),this.sfx.play(t==="cupA"||t==="cupB"?"clink":"tink",.8),!0}dollWear(t){const e=this.state.outfit;this.state.outfit=t,this.sfx.play("cloth"),this.garmentFromDoll(e)}garmentFromDoll(t){this.view.room.garments[t].group.position.set(this.actor.pos.x,1.2,this.actor.pos.z)}floorAt(t,e,n=0){return ay(this.stage.cam,t,e,n)}pick(t,e){const n=this.stage.ray(t,e);if(this.fan.open){const g=this.fan.pick(n);return g?{kind:"card",id:g}:null}const s=this.state,r=g=>{for(let x=g;x;x=x.parent)if(!x.visible)return!1;return!0},o=(g,x)=>{if(g==="prop"){const m=x,p=s.props[m].loc;return p.at==="worn"||!this.view.props[m].group.visible||p.at==="held"&&!this.canSnatch(m)?null:{kind:"prop",id:m}}if(g==="garment"){const m=x;return s.outfit===m?null:{kind:"garment",id:m}}return g==="doll"?s.doll.outside?null:{kind:"doll"}:g==="furniture"?{kind:"furniture",id:x}:g==="tool"?{kind:"tool",id:x}:g==="fixture"?{kind:"fixture",id:x}:null};let a=null,l=1/0;for(const g of n.intersectObjects(this.view.preciseMeshes,!1)){if(!isFinite(g.distance)||!r(g.object))continue;const x=g.object.userData.pick;if(!x||x.kind==="ignore")continue;if(x.kind==="blocker")break;if(x.kind==="doll"&&s.doll.seat==="chair"&&g.point.y<Dr.chair+.32){a={kind:"furniture",id:"chair"},l=g.distance;break}const m=o(x.kind,x.id);if(m){a=m,l=g.distance;break}}const c=[],h=new Set;for(const g of n.intersectObjects(this.view.pickables.map(x=>x.object),!1)){if(!isFinite(g.distance)||h.has(g.object))continue;h.add(g.object);const x=this.view.pickables.find(p=>p.object===g.object);if(!x||x.kind!=="prop"&&x.kind!=="tool"||x.kind==="prop"&&s.props[x.id].loc.at==="held")continue;const m=o(x.kind,x.id);m&&c.push({hit:m,dist:g.distance,pr:x.priority})}if(a){if(a.kind==="furniture"||a.kind==="fixture"){const g=c.filter(x=>x.dist<l+.6).sort((x,m)=>x.dist-m.dist)[0];if(g)return g.hit}return a}if(c.length)return c.sort((g,x)=>g.dist-x.dist)[0].hit;let d=null,u=40;const f=(g,x)=>{if(!x)return;const m=this.stage.project(x),p=Math.hypot(m.x-t,m.y-e);p<u&&(u=p,d=g)};for(const g of ts){const x=this.view.props[g];!x.group.visible||s.props[g].loc.at==="worn"||f({kind:"prop",id:g},x.group.position.clone().setY(x.group.position.y+.15))}for(const g of["camera","album","cards"])f({kind:"tool",id:g},this.view.tools[g].group.position.clone().setY(this.view.tools[g].group.position.y+.15));return s.doll.outside||f({kind:"doll"},this.actor.pos.clone().setY(1)),d}canSnatch(t){return this.state.doll.holding===t}onPress(t,e){if(this.storyPending)return null;const n=this.pick(t,e);if(this.pressed=n,this.log(`press ${n?n.kind+("id"in n?":"+n.id:""):"nothing"}`),!n)return null;switch(n.kind){case"furniture":this.view.setLifted(n.id,!0),this.sfx.play("lift",n.id==="bed"?.6:.9);break;case"prop":this.view.setLifted(n.id,!0),this.sfx.play("lift",1.2);break;case"tool":this.view.poke(n.id,.6);break;case"garment":this.view.poke("wardrobe",.4),this.sfx.play("cloth");break}const s=this.hitPoint(n);return s&&n.kind!=="tool"&&n.kind!=="card"&&this.actor.glance(s,1),n}hitPoint(t){switch(t.kind){case"furniture":{const e=this.state.furniture[t.id];return new T(e.x,.6,e.z)}case"prop":return this.view.props[t.id].group.position.clone();case"garment":return this.view.room.garments[t.id].group.position.clone();case"doll":return null;case"fixture":return this.fixturePoint(t.id);default:return null}}fixturePoint(t){switch(t){case"door":return new T(Se.cx,1.2,0);case"window":return new T(ne.cx,1.9,0);case"curtains":return new T(ne.x0-.25,1.9,.2);case"weather":return new T(ne.cx,ne.top+.3,.2);case"mirror":return new T(2.03,1.3,.2);case"wardrobe":return new T(.8,1.4,.62);case"time":return new T(Ct.W/2,Ct.H+.95,Ct.D+.26);case"horn":return new T(-.05,Ct.H+.55,Ct.D+.35);default:return new T(Ct.W/2,1,Ct.D)}}onDragStart(t,e,n){const s=this.state;switch(this.log(`drag ${t.kind}${"id"in t?":"+t.id:""}`),this.drag={hit:t,offset:{x:0,z:0}},this.scheduler.setDragging(!0),t.kind){case"furniture":{const r=s.doll;(r.seat===t.id||t.id==="bed"&&r.seat==="bed")&&(this.actor.isBusy()&&this.actor.cancel(),this.actor.standNow(),r.activity="idle");const o=this.floorAt(e,n),a=s.furniture[t.id];o&&(this.drag.offset={x:a.x-o.x,z:a.z-o.z});break}case"prop":{s.props[t.id].loc.at==="held"&&(s.doll.holding=null,this.actor.isBusy()&&this.actor.cancel(),s.doll.activity=s.doll.posture==="sit"&&s.doll.seat==="chair"?"sitting":"idle");break}case"garment":s.fixtures.wardrobeOpen<.9&&(s.fixtures.wardrobeOpen=1),this.view.dragGarment(t.id),this.sfx.play("lid");break;case"doll":if(!this.actor.grab()){this.drag=null;return}this.sfx.play("giggle");break}}propDragTarget(t,e,n){const s=this.state,r=this.stage.shelf,o=r.box,a=[new T(o.min.x,o.min.y,o.max.z),new T(o.max.x,o.min.y,o.max.z),new T(o.min.x,o.max.y,o.max.z),new T(o.max.x,o.max.y,o.max.z)].map(p=>this.stage.project(p)),l=Math.min(...a.map(p=>p.x))-10,c=Math.max(...a.map(p=>p.x))+10,h=Math.min(...a.map(p=>p.y))-10,d=Math.max(...a.map(p=>p.y))+10;if(e>=l&&e<=c&&n>=h&&n<=d){let p=-1,_=1/0;if(r.slots.forEach((w,v)=>{if(Object.entries(s.props).find(([y,b])=>y!==t&&b.loc.at==="shelf"&&b.loc.slot===v))return;const A=this.stage.project(w.clone().setY(w.y+.2)),R=Math.hypot(A.x-e,A.y-n);R<_&&(_=R,p=v)}),p>=0)return{target:{kind:"shelf",slot:p},pos:r.slots[p].clone()}}if(!s.doll.outside&&!this.actor.held){const p=this.stage.project(this.actor.pos.clone().setY(s.doll.posture==="sit"?.9:1.1)),_=this.stage.project(this.actor.pos.clone().setY(2)),w=Math.max(30,Math.abs(p.y-_.y)*.7);if(Math.hypot(p.x-e,p.y-n)<w){const v=this.actor.pos.clone().add(new T(Math.sin(this.actor.yaw)*.35,.9,Math.cos(this.actor.yaw)*.35));return{target:{kind:"doll"},pos:v}}}const u=this.stage.ray(e,n);let f=null;for(const p of["table","bed","chair"]){const _=new Hn(new T(0,1,0),-Dr[p]),w=new T;if(!u.ray.intersectPlane(_,w))continue;const v=Je(s,p);if(!Fn(w,{x0:v.x0-.08,x1:v.x1+.08,z0:v.z0-.08,z1:v.z1+.08})||p==="chair"&&s.doll.seat==="chair")continue;const S=w.distanceTo(this.stage.camera.position);(!f||S<f.d)&&(f={on:p,p:w,d:S})}if(f)return{target:{kind:"surface",on:f.on,x:f.p.x,z:f.p.z},pos:f.p};const g=this.floorAt(e,n);if(!g)return null;const x=Math.min(Ct.W-.15,Math.max(.15,g.x)),m=Math.min(Ct.D-.1,Math.max(.15,g.z));return{target:{kind:"floor",x,z:m},pos:new T(x,0,m)}}onDragMove(t,e,n){if(this.drag)switch(this.state,t.kind){case"furniture":{const s=this.floorAt(e,n);if(!s)return;const r=Cn[t.id],o=r.w/2,a=r.d/2,l=Math.min(Ct.W-o*.6,Math.max(o*.6,s.x+this.drag.offset.x)),c=Math.min(Ct.D-a*.4,Math.max(a*.6,s.z+this.drag.offset.z)),h=new T(l,0,c);this.view.dragPos.set(t.id,h),this.actor.attend(h.clone().setY(.6));break}case"prop":{const s=this.propDragTarget(t.id,e,n);if(!s)return;this.drag.target=s.target,this.view.dragPos.set(t.id,s.pos);const r=s.target.kind==="doll";r&&!this.drag.overDoll&&this.actor.glance(s.pos,1),this.drag.overDoll=r,this.actor.attend(s.pos);break}case"garment":{const s=this.floorAt(e,n,0),r=this.stage.ray(e,n),o=new Hn(new T(0,0,1),-Math.min(Ct.D-.3,Math.max(.8,this.actor.pos.z+.25))),a=new T;r.ray.intersectPlane(o,a)?this.view.garmentDragPos.copy(a):s&&this.view.garmentDragPos.set(s.x,1.3,s.z);const l=this.overDoll(e,n);l&&!this.drag.overDoll&&this.actor.glance(this.view.garmentDragPos,1.2),this.drag.overDoll=l,this.actor.attend(this.view.garmentDragPos);break}case"doll":{const s=this.floorAt(e,n);if(!s)return;this.actor.dragTo(new T(Math.min(Ct.W-.2,Math.max(.2,s.x)),0,Math.min(Ct.D-.15,Math.max(.3,s.z))));break}}}overDoll(t,e){if(this.state.doll.outside)return!1;const n=this.stage.project(this.actor.pos.clone().setY(1)),s=this.stage.project(this.actor.pos.clone().setY(2)),r=Math.max(36,Math.abs(n.y-s.y)*1);return Math.hypot(n.x-t,n.y-e)<r}onDragEnd(t,e,n){const s=this.state,r=this.drag;if(this.drag=null,this.actor.attend(null),!!r){switch(t.kind){case"furniture":{const o=this.view.dragPos.get(t.id);if(this.view.dragPos.delete(t.id),this.view.setLifted(t.id,!1),!o)break;const a=g_(s,t.id,o.x,o.z);s.furniture[t.id]=a,x_(s,t.id),this.keepDollClear(t.id),this.view.poke(t.id,1),this.sfx.play("thunk"),this.commit([t.id],new T(a.x,.6,a.z)),this.log(`player moved ${t.id} to (${a.x.toFixed(2)},${a.z.toFixed(2)})`);break}case"prop":{this.view.dragPos.delete(t.id),this.view.setLifted(t.id,!1);const o=r.target;if(!o)break;const a=t.id;if(o.kind==="doll"){const l={x:this.actor.pos.x+Math.sin(this.actor.yaw)*.4,z:this.actor.pos.z+Math.cos(this.actor.yaw)*.4};s.props[a].loc=pr(s,a,{kind:"floor",...l}),s.gift=a,this.commit(["give",a],this.view.props[a].group.position.clone()),this.sfx.play("tink",1.3)}else{s.props[a].loc=pr(s,a,o),s.props[a].loc.at==="shelf"&&((a==="cupA"||a==="cupB")&&(s.props[a].flags.full=!0),a==="musicBox"&&(s.props[a].flags={open:!1,tune:0}),a==="book"&&(s.props[a].flags.open=!1),a==="umbrella"&&(s.props[a].flags.open=!1)),this.view.poke(a,.8),this.sfx.play(a==="cupA"||a==="cupB"?"clink":"tink",.9);const l=this.view.restPosition(s,a);this.commit([a],l??void 0),this.log(`player put ${a} -> ${JSON.stringify(s.props[a].loc)}`)}break}case"garment":{if(this.view.dragGarment(null),this.overDoll(e,n)&&!s.doll.outside){const o=s.outfit;s.outfit=t.id,this.rig.setOutfit(t.id),this.garmentFromDoll(o),this.sfx.play("cloth"),s.doll.asleep&&(s.doll.asleep=!1),this.commit(["outfit"],this.actor.pos.clone().setY(1)),this.log(`player dressed doll: ${t.id}`)}else this.sfx.play("cloth");break}case"doll":{const o=this.actor.pos,a={x:o.x,z:o.z},l=Je(s,"bed"),c=Je(s,"chair");let h;Fn(a,{x0:l.x0-.1,x1:l.x1+.1,z0:l.z0-.15,z1:l.z1+.15})?h={kind:"bed",...a}:Fn(a,{x0:c.x0-.15,x1:c.x1+.15,z0:c.z0-.15,z1:c.z1+.15})?h={kind:"chair",...a}:h={kind:"floor",...this.freeFloorNear(a)},this.actor.release(h),this.commit(["dollPlace"]),this.log(`player put doll on ${h.kind}`);break}}this.scheduler.setDragging(!1)}}freeFloorNear(t){const e=ec(this.state,t,t);return e&&e.length?e[e.length-1]:{x:Math.min(Ct.W-.3,Math.max(.3,t.x)),z:Math.min(Ct.D-.3,Math.max(.9,t.z))}}keepDollClear(t){const e=this.state;if(e.doll.posture!=="stand"||e.doll.outside)return;const n=Je(e,t),s={x:this.actor.pos.x,z:this.actor.pos.z};if(Fn(s,{x0:n.x0-.2,x1:n.x1+.2,z0:n.z0-.2,z1:n.z1+.2})){const r=this.freeFloorNear(s);this.actor.pos.set(r.x,0,r.z),this.actor.rig.root.position.set(r.x,0,r.z),e.doll.x=r.x,e.doll.z=r.z,this.sfx.play("jump")}}onCancel(t){if(this.drag,this.drag=null,this.actor.attend(null),!!t){if((t.kind==="furniture"||t.kind==="prop")&&(this.view.dragPos.delete(t.id),this.view.setLifted(t.id,!1)),t.kind==="garment"&&this.view.dragGarment(null),t.kind==="doll"&&this.actor.held){const e=this.freeFloorNear({x:this.actor.pos.x,z:this.actor.pos.z});this.actor.release({kind:"floor",...e})}this.scheduler.setDragging(!1),this.scheduler.markDirty()}}onTap(t,e,n){const s=this.state;if(this.log(`tap ${t?t.kind+("id"in t?":"+t.id:""):"nothing"}`),this.pressed&&(this.pressed.kind==="furniture"||this.pressed.kind==="prop")&&this.view.setLifted(this.pressed.id,!1),this.pressed=null,!!t)switch(t.kind){case"card":t.id==="backdrop"?(this.fan.hide(),this.sfx.play("page")):this.chooseStory(t.id);return;case"furniture":this.view.poke(t.id,1),t.id==="lamp"?(s.fixtures.lamp=s.fixtures.lamp?0:2,this.sfx.play("lamp"),this.commit(["lamp"],new T(s.furniture.lamp.x,1.3,s.furniture.lamp.z))):t.id==="bed"?(this.sfx.play("boing"),s.doll.asleep||this.actor.glance(new T(s.furniture.bed.x,.6,s.furniture.bed.z),1)):(this.sfx.play("tink",t.id==="chair"?1.1:.8),this.actor.glance(new T(s.furniture[t.id].x,.7,s.furniture[t.id].z),1));return;case"prop":this.tapProp(t.id);return;case"tool":this.view.poke(t.id,1),t.id==="camera"?this.takePhoto():t.id==="album"?(this.sfx.play("page"),this.input.enabled=!1,this.album.show()):(this.sfx.play("page"),this.fan.show(this.stage.orientation==="portrait",this.stage.width/this.stage.height));return;case"garment":this.view.poke("wardrobe",1),s.fixtures.wardrobeOpen<.9?(s.fixtures.wardrobeOpen=1,this.sfx.play("lid"),this.commit(["wardrobe"],this.fixturePoint("wardrobe"))):this.sfx.play("cloth");return;case"doll":s.doll.asleep?(s.doll.asleep=!1,s.doll.activity="restBed",this.actor.start({rule:"TAP",behavior:"wearReact",tier:0,deps:[],signature:"",novelty:0,specificity:0,params:{}},{behavior:"wearReact",steps:[{k:"anim",name:"stirDark",dur:1},{k:"sit",on:"bed"},{k:"anim",name:"rubEyes",dur:1},{k:"settle",activity:"restBed"}]}),this.sfx.play("yawn")):(this.actor.glance(this.stage.camera.position.clone(),1.2),this.actor.start({rule:"TAP",behavior:"wearReact",tier:4,deps:[],signature:"",novelty:0,specificity:0,params:{}},{behavior:"wearReact",overlay:!0,steps:[{k:"anim",name:Math.random()<.5?"wave":"giggle",dur:1.1}]}),this.sfx.play("giggle"));return;case"fixture":this.tapFixture(t.id);return}}tapProp(t){const e=this.state,n=e.props[t].flags,s=this.view.props[t];this.view.poke(t,1);const r=s.group.position.clone();switch(t){case"musicBox":n.open?(n.open=!1,n.tune=0):(n.open=!0,n.tune=45),this.sfx.play("lid"),this.commit(["musicBox"],r);break;case"book":e.props.book.loc.at!=="held"&&(n.open=!n.open,this.sfx.play("page"),this.commit(["book"],r));break;case"umbrella":n.open=!n.open,this.sfx.play("cloth"),this.commit(["umbrella"],r);break;case"cake":e.props.cake.loc.at!=="held"&&(n.candles=n.candles==="lit"?"out":"lit",this.sfx.play(n.candles==="lit"?"tink":"blow",1.6),this.actor.glance(r,1.2));break;case"plush":this.sfx.play("squeak"),this.actor.glance(r,1.2);break;case"cupA":case"cupB":this.sfx.play("clink",t==="cupA"?1:1.12),this.actor.glance(r,1);break;case"boots":this.sfx.play("stomp"),this.actor.glance(r,1);break;case"towel":this.sfx.play("cloth"),this.actor.glance(r,1);break}}tapFixture(t){const e=this.state,n=e.fixtures,s=this.fixturePoint(t);switch(t){case"door":n.doorOpen=!n.doorOpen,this.sfx.play("door"),this.view.poke("door",1),this.commit(["door"],s);break;case"curtains":n.curtainsOpen=!n.curtainsOpen,this.view.poke("curtains",1),this.sfx.play("cloth"),this.commit(["curtains"],s);break;case"window":this.sfx.play("knock"),this.actor.glance(new T(ne.cx,1.8,-2),1.4);break;case"weather":{const r=Go.indexOf(e.weather);e.weather=Go[(r+1)%Go.length],this.sfx.play("dial"),this.commit(["weather"],new T(ne.cx,1.8,-2)),this.log(`player set weather ${e.weather}`);break}case"time":{e.time==="night"?wu(e):kc(e,Nd[e.time]),this.sfx.play("dial"),this.commit([],new T(ne.cx,1.8,-2)),this.log(`player set time ${e.time}`);break}case"mirror":this.view.sweepMirror(),this.sfx.play("tink",1.5),this.actor.glance(s,1.2);break;case"wardrobe":n.wardrobeOpen=n.wardrobeOpen>.5?.16:1,this.view.poke("wardrobe",1),this.sfx.play("lid"),this.commit(["wardrobe"],s);break;case"horn":this.view.hush=!this.view.hush,this.sfx.setMuted(this.view.hush),this.view.hush||this.sfx.play("chime");break}}commit(t,e){for(const n of t)qr(this.state,n);this.state.playerTick=this.state.tick,e&&this.actor.glance(e,1.4),this.scheduler.markDirty(),this.lastInput=this.t,this.saveDirty=!0}chooseStory(t){this.fan.choose(t),this.storyPending=t,this.view.stageCurtainTarget=1,this.sfx.play("curtain"),this.actor.isBusy()&&this.actor.canInterrupt()&&this.actor.cancel(),this.log(`story chosen: ${t}`)}applyStory(t){if(this.actor.isBusy()){if(!this.actor.canInterrupt())return;this.actor.cancel()}if(this.actor.held)return;this.storyPending=null;const e=jy(t,this.state);hu(e,["X03"]),Object.assign(this.state,e),this.actor.syncFromState(),this.view.dragPos.clear(),this.lastSettle=null,this.fan.hide(),this.view.stageCurtainTarget=0,this.sfx.play("chime"),this.scheduler.markDirty(),this.saveDirty=!0,this.save(!0)}takePhoto(){const t=this.state;this.sfx.play("tink",1.4),!t.doll.asleep&&!t.doll.outside&&this.actor.glance(this.stage.camera.position.clone(),1),setTimeout(()=>{const e=document.getElementById("flash");this.sfx.play("shutter");const n=t.doll.outside?new T(4.6,1,1.2):this.actor.pos.clone();let s="";try{s=this.stage.photo(n)}catch(r){this.errors.push("photo: "+String(r));return}e&&(e.style.transition="none",e.style.opacity="0.85",requestAnimationFrame(()=>{e.style.transition="opacity 0.45s ease-out",e.style.opacity="0"})),this.store.addPhoto(s,t.day).then(()=>{this.view.photoCount=this.store.loosePhotos().length,this.refreshPhotoStack(),this.log(`photo taken (${this.store.photos.length})`)}),this.flyPhoto(s)},380)}refreshPhotoStack(){this.view.updatePhotoStack(),this.store.loosePhotos().slice(-6).forEach((e,n)=>{let s=this.stackTextures.get(e.id);s||(s=new Ah().load(e.url),s.colorSpace=rn,this.stackTextures.set(e.id,s)),this.view.setPhotoTexture(n,s)})}flyPhoto(t){const e=new Ah().load(t);e.colorSpace=rn;const n=new D(new be(.6,.45),new Ue({map:e,side:Fe})),s=new D(new be(.68,.53),new Ue({color:"#ffffff",side:Fe}));s.position.z=-.003,n.add(s);const r=this.stage.shelf.tools.camera.clone().add(new T(0,.6,.3)),o=this.stage.shelf.tools.album.clone().add(new T(0,.2,0));n.position.copy(r),this.stage.scene.add(n),this.flying.push({mesh:n,t:0,from:r,to:o})}updateFlying(t){for(const e of this.flying){e.t+=t;const n=Math.min(1,e.t/1.1),s=e.t<.5?0:(e.t-.5)/.6,r=e.from.clone().lerp(e.to,Math.min(1,s)**2);r.y+=Math.sin(Math.min(1,s)*Math.PI)*.6+(e.t<.5?e.t*.4:.2*(1-s)),e.mesh.position.copy(r),e.mesh.lookAt(this.stage.camera.position),e.mesh.scale.setScalar(1-Math.max(0,s)*.7),n>=1&&(this.stage.scene.remove(e.mesh),this.view.poke("album",1),this.sfx.play("stick"))}this.flying=this.flying.filter(e=>e.t<1.1)}idleHints(){const t=this.state;if(this.t-this.lastInput<12||this.t<this.hintNext||this.actor.isBusy()||t.doll.asleep||t.doll.outside||this.album.open||this.fan.open)return;const e=[];t.fixtures.wardrobeOpen<.5&&t.outfit!=="dress"&&e.push({look:new T(.95,1.4,.6),poke:"wardrobe"}),t.props.cupB.loc.at==="shelf"&&e.push({look:this.view.props.cupB.group.position.clone(),poke:"cupB"}),Un(t,"musicBox")&&!t.props.musicBox.flags.open&&e.push({look:this.view.props.musicBox.group.position.clone(),poke:"musicBox"}),e.push({look:new T(t.furniture.chair.x,.7,t.furniture.chair.z),poke:"chair"}),e.push({look:new T(ne.cx,1.8,-1),poke:"curtains"}),Un(t,"plush")&&e.push({look:this.view.props.plush.group.position.clone(),poke:"plush"});const n=e[this.hintIdx%e.length];this.hintIdx++,this.actor.glance(n.look,1.8),setTimeout(()=>this.view.poke(n.poke,.5),700),this.hintNext=this.t+9}debugApi(){const t=this,e=n=>{const s=t.stage.project(n);return{x:s.x,y:s.y}};return{get state(){return t.state},trace:()=>t.actor.trace.slice(),log:()=>t.logLines.slice(),errors:()=>t.errors.slice(),busy:()=>t.actor.isBusy(),activity:()=>t.state.doll.activity,frames:()=>t.frames,orientation:()=>t.stage.orientation,setTimeScale:n=>{t.timeScale=Math.max(.1,Math.min(8,n))},screenOf:(n,s)=>{const r=t.state;if(n==="furniture"&&s){const o=r.furniture[s],a=s==="chair"?.6:s==="bed"?.55:s==="lamp"?1:.85;return e(new T(o.x,a,o.z))}if(n==="furnitureLeg"&&s){const o=r.furniture[s],a=Cn[s];let l=null;for(const[c,h]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const d=c*(a.w/2-.06),u=h*(a.d/2-.06),f=Math.cos(o.yaw),g=Math.sin(o.yaw),x=new T(o.x+d*f+u*g,.18,o.z-d*g+u*f);(!l||x.z>l.z)&&(l=x)}return e(l)}if(n==="prop"&&s){const o=t.view.props[s];if(!o.group.visible)return null;const a=new oi().setFromObject(o.body);return e(a.getCenter(new T))}return n==="tool"&&s?e(t.view.tools[s].group.position.clone().setY(t.view.tools[s].group.position.y+.15)):n==="garment"&&s?e(t.view.room.garments[s].group.position.clone().setY(t.view.room.garments[s].group.position.y-.35)):n==="doll"?e(t.actor.pos.clone().setY(1)):n==="fixture"&&s?e(s==="time"?new T(Ct.W/2,Ct.H+.95,Ct.D+.3):s==="weather"?new T(ne.cx,ne.top+.3,.2):s==="door"?new T(Se.cx+.2,1,.05):s==="wardrobe"?new T(.45,1.3,.66):s==="horn"?new T(-.05,Ct.H+.55,Ct.D+.35):t.fixturePoint(s)):null},grabPoint:(n,s)=>{const r=t.state,o=[];if(n==="prop"){const h=t.view.props[s],d=new oi().setFromObject(h.body),u=d.getCenter(new T),f=d.getSize(new T);for(const g of[0,.25,-.25,.4])for(const x of[0,.25,-.25,.4,-.4])o.push(new T(u.x+x*f.x,u.y+g*f.y,u.z+f.z*.3))}if(n==="fixture"){const h=t.fixturePoint(s);for(const d of[0,.15,-.15,.3,-.3])for(const u of[0,.15,-.15,.3,-.3])o.push(new T(h.x+u,h.y+d,h.z+.05))}if(n==="garment"){const d=t.view.room.garments[s].group.position;for(const u of[-.45,-.55,-.35,-.25,-.62])for(const f of[0,.08,-.08,.15,-.15])o.push(new T(d.x+f,d.y+u,d.z+.03))}if(n==="furniture"){const h=r.furniture[s],d=Cn[s];for(const u of[d.h*.95,d.h*.85,d.h*.6,d.h*.42,.3,.12])for(const[f,g]of[[0,0],[-.4,0],[.4,0],[0,-.4],[0,.4],[-.4,-.4],[.4,-.4],[-.4,.4],[.4,.4]]){const x=Math.cos(h.yaw),m=Math.sin(h.yaw),p=f*d.w,_=g*d.d;o.push(new T(h.x+p*x+_*m,u,h.z-p*m+_*x))}}const a=(h,d)=>{const u=t.pick(h,d);return!!u&&u.kind===n&&"id"in u&&u.id===s},l=e(t.actor.pos.clone().setY(1)),c=h=>{const d=e(h);return Math.hypot(d.x-l.x,d.y-l.y)};o.sort((h,d)=>c(d)-c(h));for(const h of[10,6,0])for(const d of o){const u=e(d);if(a(u.x,u.y)&&a(u.x+h,u.y)&&a(u.x-h,u.y)&&a(u.x,u.y+h)&&a(u.x,u.y-h))return u}return null},pickAt:(n,s)=>t.pick(n,s),camInfo:()=>({cam:t.stage.cam,w:t.stage.width,h:t.stage.height,orientation:t.stage.orientation}),floorDropScreen:(n,s,r)=>{for(const o of[0,.15,.3,.45])for(const[a,l]of[[0,0],[o,0],[-o,0],[0,o],[0,-o],[o,o],[-o,o]]){const c=e(new T(s+a,.05,r+l)),h=t.propDragTarget(n,c.x,c.y)?.target;if(h&&h.kind==="floor"&&Math.hypot(h.x-s,h.z-r)<.5)return c}return null},setQuality:(n,s=1)=>t.stage.setQuality(n,s),floorToScreen:(n,s,r=0)=>e(new T(n,r,s)),shelfSlotScreen:n=>e(t.stage.shelf.slots[n].clone().setY(t.stage.shelf.slots[n].y+.15)),surfaceSlotScreen:(n,s)=>e(t.view.surfaceWorld(n,s).setY(Dr[n]+.05)),album:()=>t.album.open?t.album.debugRects():null,photos:()=>t.store.photos.length,diaries:()=>t.store.diaries.length,draft:()=>t.store.draft.slice(),storeReady:()=>t.store.persistent,fanCards:()=>t.fan.open?t.fan.cards.map(n=>{const s=n.mesh.getWorldPosition(new T);return{id:n.id,...e(s)}}):null,save:()=>t.save(!0),tableSlots:()=>Object.keys(Js.table),freeShelf:()=>Md(t.state,0),surfaceAt:(n,s)=>Ed(t.state,{x:n,z:s})}}}const nM=document.getElementById("app"),iM=document.getElementById("overlay"),kd=new eM(nM,iM);kd.start();window.__dollhouse=kd.debugApi();window.__ready=!0;
