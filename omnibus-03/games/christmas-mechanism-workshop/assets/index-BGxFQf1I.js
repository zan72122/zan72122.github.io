var tu=Object.defineProperty;var eu=(s,t,e)=>t in s?tu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var E=(s,t,e)=>eu(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Zo="185",nu=0,Ic=1,iu=2,Hr=1,Ql=2,ks=3,Ei=0,on=1,ze=2,ci=0,bi=1,qs=2,Uc=3,Nc=4,su=5,Ni=100,ru=101,au=102,ou=103,cu=104,lu=200,hu=201,uu=202,du=203,Ka=204,$a=205,fu=206,pu=207,mu=208,gu=209,_u=210,xu=211,vu=212,Mu=213,Su=214,Qa=0,ja=1,to=2,gs=3,eo=4,no=5,io=6,so=7,jl=0,yu=1,wu=2,Gn=0,th=1,eh=2,nh=3,ih=4,sh=5,Jo=6,rh=7,ah=300,ki=301,_s=302,ua=303,da=304,ea=306,zi=1e3,oi=1001,ro=1002,Je=1003,bu=1004,or=1005,Xe=1006,fa=1007,Oi=1008,pn=1009,oh=1010,ch=1011,Ys=1012,Ko=1013,Wn=1014,Tn=1015,Xn=1016,$o=1017,Qo=1018,Zs=1020,lh=35902,hh=35899,uh=1021,dh=1022,An=1023,hi=1026,Bi=1027,jo=1028,tc=1029,Hi=1030,ec=1031,nc=1033,Gr=33776,Vr=33777,Wr=33778,Xr=33779,ao=35840,oo=35841,co=35842,lo=35843,ho=36196,uo=37492,fo=37496,po=37488,mo=37489,Zr=37490,go=37491,_o=37808,xo=37809,vo=37810,Mo=37811,So=37812,yo=37813,wo=37814,bo=37815,Eo=37816,To=37817,Ao=37818,Ro=37819,Co=37820,Po=37821,Lo=36492,Do=36494,Io=36495,Uo=36283,No=36284,Jr=36285,Fo=36286,Eu=3200,Oo=0,Tu=1,Bn="",Ne="srgb",Js="srgb-linear",Kr="linear",de="srgb",Yi=7680,Fc=519,Au=512,Ru=513,Cu=514,ic=515,Pu=516,Lu=517,sc=518,Du=519,Oc=35044,Bc="300 es",kn=2e3,Ks=2001;function Iu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function $r(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Uu(){const s=$r("canvas");return s.style.display="block",s}const kc={};function zc(...s){const t="THREE."+s.shift();console.log(t,...s)}function fh(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Gt(...s){s=fh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function se(...s){s=fh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function fs(...s){const t=s.join(" ");t in kc||(kc[t]=!0,Gt(...s))}function Nu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Fu={[Qa]:ja,[to]:io,[eo]:so,[gs]:no,[ja]:Qa,[io]:to,[so]:eo,[no]:gs};class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hc=1234567;const Gs=Math.PI/180,xs=180/Math.PI;function Wi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[s&255]+Qe[s>>8&255]+Qe[s>>16&255]+Qe[s>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function Qt(s,t,e){return Math.max(t,Math.min(e,s))}function rc(s,t){return(s%t+t)%t}function Ou(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Bu(s,t,e){return s!==t?(e-s)/(t-s):0}function Vs(s,t,e){return(1-e)*s+e*t}function ku(s,t,e,n){return Vs(s,t,1-Math.exp(-e*n))}function zu(s,t=1){return t-Math.abs(rc(s,t*2)-t)}function Hu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Gu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Vu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Wu(s,t){return s+Math.random()*(t-s)}function Xu(s){return s*(.5-Math.random())}function qu(s){s!==void 0&&(Hc=s);let t=Hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yu(s){return s*Gs}function Zu(s){return s*xs}function Ju(s){return(s&s-1)===0&&s!==0}function Ku(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $u(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qu(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ls(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Bo={DEG2RAD:Gs,RAD2DEG:xs,generateUUID:Wi,clamp:Qt,euclideanModulo:rc,mapLinear:Ou,inverseLerp:Bu,lerp:Vs,damp:ku,pingpong:zu,smoothstep:Hu,smootherstep:Gu,randInt:Vu,randFloat:Wu,randFloatSpread:Xu,seededRandom:qu,degToRad:Yu,radToDeg:Zu,isPowerOfTwo:Ju,ceilPowerOfTwo:Ku,floorPowerOfTwo:$u,setQuaternionFromProperEuler:Qu,normalize:nn,denormalize:ls},vc=class vc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vc.prototype.isVector2=!0;let nt=vc;class be{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||c!==u||l!==f||h!==g){let p=c*u+l*f+h*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const b=Math.acos(p),y=Math.sin(b);m=Math.sin(m*b)/y,o=Math.sin(o*b)/y,c=c*m+u*o,l=l*m+f*o,h=h*m+g*o,d=d*m+_*o}else{c=c*m+u*o,l=l*m+f*o,h=h*m+g*o,d=d*m+_*o;const b=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=b,l*=b,h*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-o*f,t[e+2]=l*g+h*f+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Mc=class Mc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pa.copy(this).projectOnVector(t),this.sub(pa)}reflect(t){return this.sub(pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mc.prototype.isVector3=!0;let w=Mc;const pa=new w,Gc=new be,Sc=class Sc{constructor(t,e,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],b=i[1],y=i[4],M=i[7],A=i[2],T=i[5],P=i[8];return r[0]=a*_+o*b+c*A,r[3]=a*p+o*y+c*T,r[6]=a*m+o*M+c*P,r[1]=l*_+h*b+d*A,r[4]=l*p+h*y+d*T,r[7]=l*m+h*M+d*P,r[2]=u*_+f*b+g*A,r[5]=u*p+f*y+g*T,r[8]=u*m+f*M+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ma.makeScale(t,e)),this}rotate(t){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Sc.prototype.isMatrix3=!0;let Yt=Sc;const ma=new Yt,Vc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ju(){const s={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(i.r=ps(i.r),i.g=ps(i.g),i.b=ps(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bn?Kr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Js]:{primaries:t,whitePoint:n,transfer:Kr,toXYZ:Vc,fromXYZ:Wc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Vc,fromXYZ:Wc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),s}const re=ju();function li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zi;class td{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zi===void 0&&(Zi=$r("canvas")),Zi.width=t.width,Zi.height=t.height;const i=Zi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$r("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ed=0;class ac{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ga(i[a].image)):r.push(ga(i[a]))}else r=ga(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ga(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?td.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let nd=0;const _a=new w;class tn extends Vi{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=oi,i=oi,r=Xe,a=Oi,o=An,c=pn,l=tn.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Wi(),this.name="",this.source=new ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zi:t.x=t.x-Math.floor(t.x);break;case oi:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zi:t.y=t.y-Math.floor(t.y);break;case oi:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=ah;tn.DEFAULT_ANISOTROPY=1;const yc=class yc{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,M=(f+1)/2,A=(m+1)/2,T=(h+u)/4,P=(d+_)/4,v=(g+p)/4;return y>M&&y>A?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=P/n):M>A?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=v/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=P/r,i=v/r),this.set(n,i,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yc.prototype.isVector4=!0;let Se=yc;class id extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new tn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ac(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends id{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ph extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sd extends tn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ta=class ta{constructor(t,e,n,i,r,a,o,c,l,h,d,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,u,f,g,_,p)}set(t,e,n,i,r,a,o,c,l,h,d,u,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ta().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rd,t,ad)}lookAt(t,e,n){const i=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),mi.crossVectors(n,hn),mi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),mi.crossVectors(n,hn)),mi.normalize(),cr.crossVectors(hn,mi),i[0]=mi.x,i[4]=cr.x,i[8]=hn.x,i[1]=mi.y,i[5]=cr.y,i[9]=hn.y,i[2]=mi.z,i[6]=cr.z,i[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],b=n[3],y=n[7],M=n[11],A=n[15],T=i[0],P=i[4],v=i[8],R=i[12],L=i[1],D=i[5],U=i[9],W=i[13],J=i[2],O=i[6],q=i[10],k=i[14],j=i[3],it=i[7],ct=i[11],ht=i[15];return r[0]=a*T+o*L+c*J+l*j,r[4]=a*P+o*D+c*O+l*it,r[8]=a*v+o*U+c*q+l*ct,r[12]=a*R+o*W+c*k+l*ht,r[1]=h*T+d*L+u*J+f*j,r[5]=h*P+d*D+u*O+f*it,r[9]=h*v+d*U+u*q+f*ct,r[13]=h*R+d*W+u*k+f*ht,r[2]=g*T+_*L+p*J+m*j,r[6]=g*P+_*D+p*O+m*it,r[10]=g*v+_*U+p*q+m*ct,r[14]=g*R+_*W+p*k+m*ht,r[3]=b*T+y*L+M*J+A*j,r[7]=b*P+y*D+M*O+A*it,r[11]=b*v+y*U+M*q+A*ct,r[15]=b*R+y*W+M*k+A*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15],b=c*f-l*u,y=o*f-l*d,M=o*u-c*d,A=a*f-l*h,T=a*u-c*h,P=a*d-o*h;return e*(_*b-p*y+m*M)-n*(g*b-p*A+m*T)+i*(g*y-_*A+m*P)-r*(g*M-_*T+p*P)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],b=e*o-n*a,y=e*c-i*a,M=e*l-r*a,A=n*c-i*o,T=n*l-r*o,P=i*l-r*c,v=h*_-d*g,R=h*p-u*g,L=h*m-f*g,D=d*p-u*_,U=d*m-f*_,W=u*m-f*p,J=b*W-y*U+M*D+A*L-T*R+P*v;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/J;return t[0]=(o*W-c*U+l*D)*O,t[1]=(i*U-n*W-r*D)*O,t[2]=(_*P-p*T+m*A)*O,t[3]=(u*T-d*P-f*A)*O,t[4]=(c*L-a*W-l*R)*O,t[5]=(e*W-i*L+r*R)*O,t[6]=(p*M-g*P-m*y)*O,t[7]=(h*P-u*M+f*y)*O,t[8]=(a*U-o*L+l*v)*O,t[9]=(n*L-e*U-r*v)*O,t[10]=(g*T-_*M+m*b)*O,t[11]=(d*M-h*T-f*b)*O,t[12]=(o*R-a*D-c*v)*O,t[13]=(e*D-n*R+i*v)*O,t[14]=(_*y-g*A-p*b)*O,t[15]=(h*A-d*y+u*b)*O,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,_=a*h,p=a*d,m=o*d,b=c*l,y=c*h,M=c*d,A=n.x,T=n.y,P=n.z;return i[0]=(1-(_+m))*A,i[1]=(f+M)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(f-M)*T,i[5]=(1-(u+m))*T,i[6]=(p+b)*T,i[7]=0,i[8]=(g+y)*P,i[9]=(p-b)*P,i[10]=(1-(u+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ji.set(i[0],i[1],i[2]).length();const o=Ji.set(i[4],i[5],i[6]).length(),c=Ji.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Sn.copy(this);const l=1/a,h=1/o,d=1/c;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,e.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,r,a,o=kn,c=!1){const l=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===kn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ks)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=kn,c=!1){const l=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===kn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ks)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ta.prototype.isMatrix4=!0;let jt=ta;const Ji=new w,Sn=new jt,rd=new w(0,0,0),ad=new w(1,1,1),mi=new w,cr=new w,hn=new w,Xc=new jt,qc=new be;class ye{constructor(t=0,e=0,n=0,i=ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qc.setFromEuler(this),this.setFromQuaternion(qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ye.DEFAULT_ORDER="XYZ";class oc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let od=0;const Yc=new w,Ki=new be,Zn=new jt,lr=new w,Es=new w,cd=new w,ld=new be,Zc=new w(1,0,0),Jc=new w(0,1,0),Kc=new w(0,0,1),$c={type:"added"},hd={type:"removed"},$i={type:"childadded",child:null},xa={type:"childremoved",child:null};class Te extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new w,e=new ye,n=new be,i=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new Yt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis(Kc,t)}translateOnAxis(t,e){return Yc.copy(t).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis(Kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Es,lr,this.up):Zn.lookAt(lr,Es,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),Ki.setFromRotationMatrix(Zn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($c),$i.child=t,this.dispatchEvent($i),$i.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hd),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($c),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Te.DEFAULT_UP=new w(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oe extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ud={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ud)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Ma(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=re.workingColorSpace){if(t=rc(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ma(a,r,t+1/3),this.g=Ma(a,r,t),this.b=Ma(a,r,t-1/3)}return re.colorSpaceToWorking(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=mh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return re.workingToColorSpace(je.copy(this),t),Math.round(Qt(je.r*255,0,255))*65536+Math.round(Qt(je.g*255,0,255))*256+Math.round(Qt(je.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(je.copy(this),e);const n=je.r,i=je.g,r=je.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Ne){re.workingToColorSpace(je.copy(this),t);const e=je.r,n=je.g,i=je.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(hr);const n=Vs(gi.h,hr.h,e),i=Vs(gi.s,hr.s,e),r=Vs(gi.l,hr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Kt;Kt.NAMES=mh;class cc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Kt(t),this.density=e}clone(){return new cc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class lc extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ye,this.environmentIntensity=1,this.environmentRotation=new ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const yn=new w,Jn=new w,Sa=new w,Kn=new w,Qi=new w,ji=new w,Qc=new w,ya=new w,wa=new w,ba=new w,Ea=new Se,Ta=new Se,Aa=new Se;class En{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yn.subVectors(t,e),i.cross(yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){yn.subVectors(i,e),Jn.subVectors(n,e),Sa.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(Jn),c=yn.dot(Sa),l=Jn.dot(Jn),h=Jn.dot(Sa),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Kn.x),c.addScaledVector(a,Kn.y),c.addScaledVector(o,Kn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Ea.setScalar(0),Ta.setScalar(0),Aa.setScalar(0),Ea.fromBufferAttribute(t,e),Ta.fromBufferAttribute(t,n),Aa.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ea,r.x),a.addScaledVector(Ta,r.y),a.addScaledVector(Aa,r.z),a}static isFrontFacing(t,e,n,i){return yn.subVectors(n,e),Jn.subVectors(t,e),yn.cross(Jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),yn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Qi.subVectors(i,n),ji.subVectors(r,n),ya.subVectors(t,n);const c=Qi.dot(ya),l=ji.dot(ya);if(c<=0&&l<=0)return e.copy(n);wa.subVectors(t,i);const h=Qi.dot(wa),d=ji.dot(wa);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Qi,a);ba.subVectors(t,r);const f=Qi.dot(ba),g=ji.dot(ba);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ji,o);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return Qc.subVectors(r,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(Qc,o);const m=1/(p+_+u);return a=_*m,o=u*m,e.copy(n).addScaledVector(Qi,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ui{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),dr.subVectors(this.max,Ts),ts.subVectors(t.a,Ts),es.subVectors(t.b,Ts),ns.subVectors(t.c,Ts),_i.subVectors(es,ts),xi.subVectors(ns,es),Ci.subVectors(ts,ns);let e=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-Ci.z,Ci.y,_i.z,0,-_i.x,xi.z,0,-xi.x,Ci.z,0,-Ci.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-Ci.y,Ci.x,0];return!Ra(e,ts,es,ns,dr)||(e=[1,0,0,0,1,0,0,0,1],!Ra(e,ts,es,ns,dr))?!1:(fr.crossVectors(_i,xi),e=[fr.x,fr.y,fr.z],Ra(e,ts,es,ns,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new w,new w,new w,new w,new w,new w,new w,new w],wn=new w,ur=new ui,ts=new w,es=new w,ns=new w,_i=new w,xi=new w,Ci=new w,Ts=new w,dr=new w,fr=new w,Pi=new w;function Ra(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Pi.fromArray(s,r);const o=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),c=t.dot(Pi),l=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ue=new w,pr=new nt;let dd=0;class qe extends Vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oc&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class gh extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _h extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const fd=new ui,As=new w,Ca=new w;class qn{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(As,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Ca)),this.expandByPoint(As.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let pd=0;const _n=new jt,Pa=new Te,is=new w,un=new ui,Rs=new ui,Ve=new w;class Pe extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Iu(t)?_h:gh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(un.min,Rs.min),un.expandByPoint(Ve),Ve.addVectors(un.max,Rs.max),un.expandByPoint(Ve)):(un.expandByPoint(Rs.min),un.expandByPoint(Rs.max))}un.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ve.fromBufferAttribute(o,l),c&&(is.fromBufferAttribute(t,l),Ve.add(is)),i=Math.max(i,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new w,c[v]=new w;const l=new w,h=new w,d=new w,u=new nt,f=new nt,g=new nt,_=new w,p=new w;function m(v,R,L){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,L),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,R),g.fromBufferAttribute(r,L),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[v].add(_),o[R].add(_),o[L].add(_),c[v].add(p),c[R].add(p),c[L].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,R=b.length;v<R;++v){const L=b[v],D=L.start,U=L.count;for(let W=D,J=D+U;W<J;W+=3)m(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const y=new w,M=new w,A=new w,T=new w;function P(v){A.fromBufferAttribute(i,v),T.copy(A);const R=o[v];y.copy(R),y.sub(A.multiplyScalar(A.dot(R))).normalize(),M.crossVectors(T,R);const D=M.dot(c[v])<0?-1:1;a.setXYZW(v,y.x,y.y,y.z,D)}for(let v=0,R=b.length;v<R;++v){const L=b[v],D=L.start,U=L.count;for(let W=D,J=D+U;W<J;W+=3)P(t.getX(W+0)),P(t.getX(W+1)),P(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new w,r=new w,a=new w,o=new w,c=new w,l=new w,h=new w,d=new w;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let m=0;m<h;m++)u[g++]=l[f++]}return new qe(u,h,d)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let md=0;class ws extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=bi,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=$a,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qn=new w,La=new w,mr=new w,vi=new w,Da=new w,gr=new w,Ia=new w;class hc{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){La.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(La);const r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=vi.dot(this.direction),c=-vi.dot(mr),l=vi.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(La).addScaledVector(mr,u),f}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),i=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,i,r){Da.subVectors(e,t),gr.subVectors(n,t),Ia.crossVectors(Da,gr);let a=this.direction.dot(Ia),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,t);const c=o*this.direction.dot(gr.crossVectors(vi,gr));if(c<0)return null;const l=o*this.direction.dot(Da.cross(vi));if(l<0||c+l>a)return null;const h=-o*vi.dot(Ia);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ti extends ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ye,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const jc=new jt,Li=new hc,_r=new qn,tl=new w,xr=new w,vr=new w,Mr=new w,Ua=new w,Sr=new w,el=new w,yr=new w;class V extends Te{constructor(t=new Pe,e=new Ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Sr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Ua.fromBufferAttribute(d,t),a?Sr.addScaledVector(Ua,h):Sr.addScaledVector(Ua.sub(e),h))}e.add(Sr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(_r.containsPoint(Li.origin)===!1&&(Li.intersectSphere(_r,tl)===null||Li.origin.distanceToSquared(tl)>(t.far-t.near)**2))&&(jc.copy(r).invert(),Li.copy(t.ray).applyMatrix4(jc),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,A=y;M<A;M+=3){const T=o.getX(M),P=o.getX(M+1),v=o.getX(M+2);i=wr(this,m,t,n,l,h,d,T,P,v),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const b=o.getX(p),y=o.getX(p+1),M=o.getX(p+2);i=wr(this,a,t,n,l,h,d,b,y,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),y=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,A=y;M<A;M+=3){const T=M,P=M+1,v=M+2;i=wr(this,m,t,n,l,h,d,T,P,v),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const b=p,y=p+1,M=p+2;i=wr(this,a,t,n,l,h,d,b,y,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function gd(s,t,e,n,i,r,a,o){let c;if(t.side===on?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Ei,o),c===null)return null;yr.copy(o),yr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(yr);return l<e.near||l>e.far?null:{distance:l,point:yr.clone(),object:s}}function wr(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,xr),s.getVertexPosition(c,vr),s.getVertexPosition(l,Mr);const h=gd(s,t,e,n,xr,vr,Mr,el);if(h){const d=new w;En.getBarycoord(el,xr,vr,Mr,d),i&&(h.uv=En.getInterpolatedAttribute(i,o,c,l,d,new nt)),r&&(h.uv1=En.getInterpolatedAttribute(r,o,c,l,d,new nt)),a&&(h.normal=En.getInterpolatedAttribute(a,o,c,l,d,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new w,materialIndex:0};En.getNormal(xr,vr,Mr,u.normal),h.face=u,h.barycoord=d}return h}class xh extends tn{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Je,h=Je,d,u){super(null,a,o,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi extends qe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ss=new jt,nl=new jt,br=[],il=new ui,_d=new jt,Cs=new V,Ps=new qn;class zn extends V{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_d)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),il.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(il)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Ps.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),t.ray.intersectsSphere(Ps)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ss),nl.multiplyMatrices(n,ss),Cs.matrixWorld=nl,Cs.raycast(t,br);for(let a=0,o=br.length;a<o;a++){const c=br[a];c.instanceId=r,c.object=this,e.push(c)}br.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xh(new Float32Array(i*this.count),i,this.count,jo,Tn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Na=new w,xd=new w,vd=new Yt;class Nn{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Na.subVectors(n,e).cross(xd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Na),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vd.getNormalMatrix(t),i=this.coplanarPoint(Na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new qn,Md=new nt(.5,.5),Er=new w;class uc{constructor(t=new Nn,e=new Nn,n=new Nn,i=new Nn,r=new Nn,a=new Nn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],b=r[12],y=r[13],M=r[14],A=r[15];if(i[0].setComponents(l-a,f-h,m-g,A-b).normalize(),i[1].setComponents(l+a,f+h,m+g,A+b).normalize(),i[2].setComponents(l+o,f+d,m+_,A+y).normalize(),i[3].setComponents(l-o,f-d,m-_,A-y).normalize(),n)i[4].setComponents(c,u,p,M).normalize(),i[5].setComponents(l-c,f-u,m-p,A-M).normalize();else if(i[4].setComponents(l-c,f-u,m-p,A-M).normalize(),e===kn)i[5].setComponents(l+c,f+u,m+p,A+M).normalize();else if(e===Ks)i[5].setComponents(c,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);const e=Md.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Er.x=i.normal.x>0?t.max.x:t.min.x,Er.y=i.normal.y>0?t.max.y:t.min.y,Er.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sd extends ws{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sl=new jt,ko=new hc,Tr=new qn,Ar=new w;class vh extends Te{constructor(t=new Pe,e=new Sd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(i),Tr.radius+=r,t.ray.intersectsSphere(Tr)===!1)return;sl.copy(i).invert(),ko.copy(t.ray).applyMatrix4(sl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const p=l.getX(g);Ar.fromBufferAttribute(d,p),rl(Ar,p,c,i,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)Ar.fromBufferAttribute(d,g),rl(Ar,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rl(s,t,e,n,i,r,a){const o=ko.distanceSqToPoint(s);if(o<e){const c=new w;ko.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Mh extends tn{constructor(t=[],e=ki,n,i,r,a,o,c,l,h){super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ai extends tn{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vs extends tn{constructor(t,e,n=Wn,i,r,a,o=Je,c=Je,l,h=hi,d=1){if(h!==hi&&h!==Bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ac(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class yd extends vs{constructor(t,e=Wn,n=ki,i,r,a=Je,o=Je,c,l=hi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Sh extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vn extends Pe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function g(_,p,m,b,y,M,A,T,P,v,R){const L=M/P,D=A/v,U=M/2,W=A/2,J=T/2,O=P+1,q=v+1;let k=0,j=0;const it=new w;for(let ct=0;ct<q;ct++){const ht=ct*D-W;for(let wt=0;wt<O;wt++){const te=wt*L-U;it[_]=te*b,it[p]=ht*y,it[m]=J,l.push(it.x,it.y,it.z),it[_]=0,it[p]=0,it[m]=T>0?1:-1,h.push(it.x,it.y,it.z),d.push(wt/P),d.push(1-ct/v),k+=1}}for(let ct=0;ct<v;ct++)for(let ht=0;ht<P;ht++){const wt=u+ht+O*ct,te=u+ht+O*(ct+1),ge=u+(ht+1)+O*(ct+1),ae=u+(ht+1)+O*ct;c.push(wt,te,ae),c.push(te,ge,ae),j+=6}o.addGroup(f,j,R),f+=j,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class we extends Pe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],p=n/2;let m=0;b(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2));function b(){const M=new w,A=new w;let T=0;const P=(e-t)/n;for(let v=0;v<=r;v++){const R=[],L=v/r,D=L*(e-t)+t;for(let U=0;U<=i;U++){const W=U/i,J=W*c+o,O=Math.sin(J),q=Math.cos(J);A.x=D*O,A.y=-L*n+p,A.z=D*q,d.push(A.x,A.y,A.z),M.set(O,P,q).normalize(),u.push(M.x,M.y,M.z),f.push(W,1-L),R.push(g++)}_.push(R)}for(let v=0;v<i;v++)for(let R=0;R<r;R++){const L=_[R][v],D=_[R+1][v],U=_[R+1][v+1],W=_[R][v+1];(t>0||R!==0)&&(h.push(L,D,W),T+=3),(e>0||R!==r-1)&&(h.push(D,U,W),T+=3)}l.addGroup(m,T,0),m+=T}function y(M){const A=g,T=new nt,P=new w;let v=0;const R=M===!0?t:e,L=M===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,p*L,0),u.push(0,L,0),f.push(.5,.5),g++;const D=g;for(let U=0;U<=i;U++){const J=U/i*c+o,O=Math.cos(J),q=Math.sin(J);P.x=R*q,P.y=p*L,P.z=R*O,d.push(P.x,P.y,P.z),u.push(0,L,0),T.x=O*.5+.5,T.y=q*.5*L+.5,f.push(T.x,T.y),g++}for(let U=0;U<i;U++){const W=A+U,J=D+U;M===!0?h.push(J,J+1,W):h.push(J+1,J,W),v+=3}l.addGroup(m,v,M===!0?1:2),m+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class er extends we{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new er(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new nt:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new w,i=[],r=[],a=[],o=new w,c=new jt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Qt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Qt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class dc extends Yn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new nt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class wd extends dc{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function fc(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const al=new w,ol=new w,Fa=new fc,Oa=new fc,Ba=new fc;class yh extends Yn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new w){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(ol.subVectors(i[0],i[1]).add(i[0]),l=ol);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(al.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=al),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Fa.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,_,p),Oa.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,_,p),Ba.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Oa.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Ba.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Fa.calc(c),Oa.calc(c),Ba.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new w().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cl(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function bd(s,t){const e=1-s;return e*e*t}function Ed(s,t){return 2*(1-s)*s*t}function Td(s,t){return s*s*t}function Ws(s,t,e,n){return bd(s,t)+Ed(s,e)+Td(s,n)}function Ad(s,t){const e=1-s;return e*e*e*t}function Rd(s,t){const e=1-s;return 3*e*e*s*t}function Cd(s,t){return 3*(1-s)*s*s*t}function Pd(s,t){return s*s*s*t}function Xs(s,t,e,n,i){return Ad(s,t)+Rd(s,e)+Cd(s,n)+Pd(s,i)}class wh extends Yn{constructor(t=new nt,e=new nt,n=new nt,i=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new nt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(t,i.x,r.x,a.x,o.x),Xs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ld extends Yn{constructor(t=new w,e=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new w){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(t,i.x,r.x,a.x,o.x),Xs(t,i.y,r.y,a.y,o.y),Xs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bh extends Yn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dd extends Yn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eh extends Yn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ws(t,i.x,r.x,a.x),Ws(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Th extends Yn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ws(t,i.x,r.x,a.x),Ws(t,i.y,r.y,a.y),Ws(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ah extends Yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(cl(o,c.x,l.x,h.x,d.x),cl(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new nt().fromArray(i))}return this}}var Qr=Object.freeze({__proto__:null,ArcCurve:wd,CatmullRomCurve3:yh,CubicBezierCurve:wh,CubicBezierCurve3:Ld,EllipseCurve:dc,LineCurve:bh,LineCurve3:Dd,QuadraticBezierCurve:Eh,QuadraticBezierCurve3:Th,SplineCurve:Ah});class Id extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Qr[i.type]().fromJSON(i))}return this}}class ll extends Id{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new bh(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Eh(this.currentPoint.clone(),new nt(t,e),new nt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new wh(this.currentPoint.clone(),new nt(t,e),new nt(n,i),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ah(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new dc(t,e,n,i,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class pc extends ll{constructor(t){super(t),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ll().fromJSON(i))}return this}}function Ud(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Rh(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=kd(s,t,r,e)),s.length>80*e){o=s[0],c=s[1];let h=o,d=c;for(let u=e;u<i;u+=e){const f=s[u],g=s[u+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return $s(r,a,e,o,c,l,0),a}function Rh(s,t,e,n,i){let r;if(i===Kd(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=hl(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=hl(a/n|0,s[a],s[a+1],r);return r&&Ms(r,r.next)&&(js(r),r=r.next),r}function Gi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ms(e,e.next)||Ee(e.prev,e,e.next)===0)){if(js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $s(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Wd(s,n,i,r);let o=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?Fd(s,n,i,r):Nd(s)){t.push(c.i,s.i,l.i),js(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=Od(Gi(s),t),$s(s,t,e,n,i,r,2)):a===2&&Bd(s,t,e,n,i,r):$s(Gi(s),t,e,n,i,r,1);break}}}function Nd(s){const t=s.prev,e=s,n=s.next;if(Ee(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(i,r,a),d=Math.min(o,c,l),u=Math.max(i,r,a),f=Math.max(o,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&zs(i,o,r,c,a,l,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fd(s,t,e,n){const i=s.prev,r=s,a=s.next;if(Ee(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,d=r.y,u=a.y,f=Math.min(o,c,l),g=Math.min(h,d,u),_=Math.max(o,c,l),p=Math.max(h,d,u),m=zo(f,g,t,e,n),b=zo(_,p,t,e,n);let y=s.prevZ,M=s.nextZ;for(;y&&y.z>=m&&M&&M.z<=b;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==a&&zs(o,h,c,d,l,u,y.x,y.y)&&Ee(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==a&&zs(o,h,c,d,l,u,M.x,M.y)&&Ee(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==i&&y!==a&&zs(o,h,c,d,l,u,y.x,y.y)&&Ee(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=b;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==a&&zs(o,h,c,d,l,u,M.x,M.y)&&Ee(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Od(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Ms(n,i)&&Ph(n,e,e.next,i)&&Qs(n,i)&&Qs(i,n)&&(t.push(n.i,e.i,i.i),js(e),js(e.next),e=s=i),e=e.next}while(e!==s);return Gi(e)}function Bd(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Yd(a,o)){let c=Lh(a,o);a=Gi(a,a.next),c=Gi(c,c.next),$s(a,t,e,n,i,r,0),$s(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function kd(s,t,e,n){const i=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=Rh(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(qd(l))}i.sort(zd);for(let r=0;r<i.length;r++)e=Hd(i[r],e);return e}function zd(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Hd(s,t){const e=Gd(s,t);if(!e)return t;const n=Lh(e,s);return Gi(n,n.next),Gi(e,e.next)}function Gd(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,a;if(Ms(s,e))return e;do{if(Ms(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Ch(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);Qs(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Vd(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Vd(s,t){return Ee(s.prev,s,t.prev)<0&&Ee(t.next,s,s.next)<0}function Wd(s,t,e,n){let i=s;do i.z===0&&(i.z=zo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Xd(i)}function Xd(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function zo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function qd(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ch(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function zs(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Ch(s,t,e,n,i,r,a,o)}function Yd(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Zd(s,t)&&(Qs(s,t)&&Qs(t,s)&&Jd(s,t)&&(Ee(s.prev,s,t.prev)||Ee(s,t.prev,t))||Ms(s,t)&&Ee(s.prev,s,s.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ms(s,t){return s.x===t.x&&s.y===t.y}function Ph(s,t,e,n){const i=Cr(Ee(s,t,e)),r=Cr(Ee(s,t,n)),a=Cr(Ee(e,n,s)),o=Cr(Ee(e,n,t));return!!(i!==r&&a!==o||i===0&&Rr(s,e,t)||r===0&&Rr(s,n,t)||a===0&&Rr(e,s,n)||o===0&&Rr(e,t,n))}function Rr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Cr(s){return s>0?1:s<0?-1:0}function Zd(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Ph(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Qs(s,t){return Ee(s.prev,s,s.next)<0?Ee(s,t,s.next)>=0&&Ee(s,s.prev,t)>=0:Ee(s,t,s.prev)<0||Ee(s,s.next,t)<0}function Jd(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Lh(s,t){const e=Ho(s.i,s.x,s.y),n=Ho(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hl(s,t,e,n){const i=Ho(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function js(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ho(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kd(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class $d{static triangulate(t,e,n=2){return Ud(t,e,n)}}class hs{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return hs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];ul(t),dl(n,t);let a=t.length;e.forEach(ul);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,dl(n,e[c]);const o=$d.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function ul(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function dl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class na extends Pe{constructor(t=new pc([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new me(i,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Qd;let y,M=!1,A,T,P,v;if(m){y=m.getSpacedPoints(h),M=!0,u=!1;const tt=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,tt),T=new w,P=new w,v=new w}u||(p=0,f=0,g=0,_=0);const R=o.extractPoints(l);let L=R.shape;const D=R.holes;if(!hs.isClockWise(L)){L=L.reverse();for(let tt=0,rt=D.length;tt<rt;tt++){const st=D[tt];hs.isClockWise(st)&&(D[tt]=st.reverse())}}function W(tt){const st=10000000000000001e-36;let vt=tt[0];for(let gt=1;gt<=tt.length;gt++){const Bt=gt%tt.length,Lt=tt[Bt],Wt=Lt.x-vt.x,qt=Lt.y-vt.y,I=Wt*Wt+qt*qt,fe=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(vt.x),Math.abs(vt.y)),ie=st*fe*fe;if(I<=ie){tt.splice(Bt,1),gt--;continue}vt=Lt}}W(L),D.forEach(W);const J=D.length,O=L;for(let tt=0;tt<J;tt++){const rt=D[tt];L=L.concat(rt)}function q(tt,rt,st){return rt||se("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(rt,st)}const k=L.length;function j(tt,rt,st){let vt,gt,Bt;const Lt=tt.x-rt.x,Wt=tt.y-rt.y,qt=st.x-tt.x,I=st.y-tt.y,fe=Lt*Lt+Wt*Wt,ie=Lt*I-Wt*qt;if(Math.abs(ie)>Number.EPSILON){const C=Math.sqrt(fe),x=Math.sqrt(qt*qt+I*I),B=rt.x-Wt/C,G=rt.y+Lt/C,Y=st.x-I/x,ot=st.y+qt/x,lt=((Y-B)*I-(ot-G)*qt)/(Lt*I-Wt*qt);vt=B+Lt*lt-tt.x,gt=G+Wt*lt-tt.y;const Z=vt*vt+gt*gt;if(Z<=2)return new nt(vt,gt);Bt=Math.sqrt(Z/2)}else{let C=!1;Lt>Number.EPSILON?qt>Number.EPSILON&&(C=!0):Lt<-Number.EPSILON?qt<-Number.EPSILON&&(C=!0):Math.sign(Wt)===Math.sign(I)&&(C=!0),C?(vt=-Wt,gt=Lt,Bt=Math.sqrt(fe)):(vt=Lt,gt=Wt,Bt=Math.sqrt(fe/2))}return new nt(vt/Bt,gt/Bt)}const it=[];for(let tt=0,rt=O.length,st=rt-1,vt=tt+1;tt<rt;tt++,st++,vt++)st===rt&&(st=0),vt===rt&&(vt=0),it[tt]=j(O[tt],O[st],O[vt]);const ct=[];let ht,wt=it.concat();for(let tt=0,rt=J;tt<rt;tt++){const st=D[tt];ht=[];for(let vt=0,gt=st.length,Bt=gt-1,Lt=vt+1;vt<gt;vt++,Bt++,Lt++)Bt===gt&&(Bt=0),Lt===gt&&(Lt=0),ht[vt]=j(st[vt],st[Bt],st[Lt]);ct.push(ht),wt=wt.concat(ht)}let te;if(p===0)te=hs.triangulateShape(O,D);else{const tt=[],rt=[];for(let st=0;st<p;st++){const vt=st/p,gt=f*Math.cos(vt*Math.PI/2),Bt=g*Math.sin(vt*Math.PI/2)+_;for(let Lt=0,Wt=O.length;Lt<Wt;Lt++){const qt=q(O[Lt],it[Lt],Bt);Ut(qt.x,qt.y,-gt),vt===0&&tt.push(qt)}for(let Lt=0,Wt=J;Lt<Wt;Lt++){const qt=D[Lt];ht=ct[Lt];const I=[];for(let fe=0,ie=qt.length;fe<ie;fe++){const C=q(qt[fe],ht[fe],Bt);Ut(C.x,C.y,-gt),vt===0&&I.push(C)}vt===0&&rt.push(I)}}te=hs.triangulateShape(tt,rt)}const ge=te.length,ae=g+_;for(let tt=0;tt<k;tt++){const rt=u?q(L[tt],wt[tt],ae):L[tt];M?(P.copy(A.normals[0]).multiplyScalar(rt.x),T.copy(A.binormals[0]).multiplyScalar(rt.y),v.copy(y[0]).add(P).add(T),Ut(v.x,v.y,v.z)):Ut(rt.x,rt.y,0)}for(let tt=1;tt<=h;tt++)for(let rt=0;rt<k;rt++){const st=u?q(L[rt],wt[rt],ae):L[rt];M?(P.copy(A.normals[tt]).multiplyScalar(st.x),T.copy(A.binormals[tt]).multiplyScalar(st.y),v.copy(y[tt]).add(P).add(T),Ut(v.x,v.y,v.z)):Ut(st.x,st.y,d/h*tt)}for(let tt=p-1;tt>=0;tt--){const rt=tt/p,st=f*Math.cos(rt*Math.PI/2),vt=g*Math.sin(rt*Math.PI/2)+_;for(let gt=0,Bt=O.length;gt<Bt;gt++){const Lt=q(O[gt],it[gt],vt);Ut(Lt.x,Lt.y,d+st)}for(let gt=0,Bt=D.length;gt<Bt;gt++){const Lt=D[gt];ht=ct[gt];for(let Wt=0,qt=Lt.length;Wt<qt;Wt++){const I=q(Lt[Wt],ht[Wt],vt);M?Ut(I.x,I.y+y[h-1].y,y[h-1].x+st):Ut(I.x,I.y,d+st)}}}$(),ut();function $(){const tt=i.length/3;if(u){let rt=0,st=k*rt;for(let vt=0;vt<ge;vt++){const gt=te[vt];Vt(gt[2]+st,gt[1]+st,gt[0]+st)}rt=h+p*2,st=k*rt;for(let vt=0;vt<ge;vt++){const gt=te[vt];Vt(gt[0]+st,gt[1]+st,gt[2]+st)}}else{for(let rt=0;rt<ge;rt++){const st=te[rt];Vt(st[2],st[1],st[0])}for(let rt=0;rt<ge;rt++){const st=te[rt];Vt(st[0]+k*h,st[1]+k*h,st[2]+k*h)}}n.addGroup(tt,i.length/3-tt,0)}function ut(){const tt=i.length/3;let rt=0;at(O,rt),rt+=O.length;for(let st=0,vt=D.length;st<vt;st++){const gt=D[st];at(gt,rt),rt+=gt.length}n.addGroup(tt,i.length/3-tt,1)}function at(tt,rt){let st=tt.length;for(;--st>=0;){const vt=st;let gt=st-1;gt<0&&(gt=tt.length-1);for(let Bt=0,Lt=h+p*2;Bt<Lt;Bt++){const Wt=k*Bt,qt=k*(Bt+1),I=rt+vt+Wt,fe=rt+gt+Wt,ie=rt+gt+qt,C=rt+vt+qt;Ot(I,fe,ie,C)}}}function Ut(tt,rt,st){c.push(tt),c.push(rt),c.push(st)}function Vt(tt,rt,st){le(tt),le(rt),le(st);const vt=i.length/3,gt=b.generateTopUV(n,i,vt-3,vt-2,vt-1);Xt(gt[0]),Xt(gt[1]),Xt(gt[2])}function Ot(tt,rt,st,vt){le(tt),le(rt),le(vt),le(rt),le(st),le(vt);const gt=i.length/3,Bt=b.generateSideWallUV(n,i,gt-6,gt-3,gt-2,gt-1);Xt(Bt[0]),Xt(Bt[1]),Xt(Bt[3]),Xt(Bt[1]),Xt(Bt[2]),Xt(Bt[3])}function le(tt){i.push(c[tt*3+0]),i.push(c[tt*3+1]),i.push(c[tt*3+2])}function Xt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Qr[i.type]().fromJSON(i)),new na(n,t.options)}}const Qd={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new nt(r,a),new nt(o,c),new nt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new nt(a,1-c),new nt(l,1-d),new nt(u,1-g),new nt(_,1-m)]:[new nt(o,1-c),new nt(h,1-d),new nt(f,1-g),new nt(p,1-m)]}};function jd(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class mc extends Pe{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Qt(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,d=new w,u=new nt,f=new w,g=new w,_=new w;let p=0,m=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:p=t[b+1].x-t[b].x,m=t[b+1].y-t[b].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let b=0;b<=e;b++){const y=n+b*h*i,M=Math.sin(y),A=Math.cos(y);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*M,d.y=t[T].y,d.z=t[T].x*A,a.push(d.x,d.y,d.z),u.x=b/e,u.y=T/(t.length-1),o.push(u.x,u.y);const P=c[3*T+0]*M,v=c[3*T+1],R=c[3*T+0]*A;l.push(P,v,R)}}for(let b=0;b<e;b++)for(let y=0;y<t.length-1;y++){const M=y+b*t.length,A=M,T=M+t.length,P=M+t.length+1,v=M+1;r.push(A,T,v),r.push(P,v,T)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("uv",new me(o,2)),this.setAttribute("normal",new me(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.points,t.segments,t.phiStart,t.phiLength)}}class Ze extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,u=e/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const b=m*u-a;for(let y=0;y<l;y++){const M=y*d-r;g.push(M,-b,0),_.push(0,0,1),p.push(y/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<o;b++){const y=b+l*m,M=b+l*(m+1),A=b+1+l*(m+1),T=b+1+l*m;f.push(y,M,T),f.push(M,A,T)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mn extends Pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new w,u=new w,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const b=[],y=m/n,M=a+y*o,A=t*Math.cos(M),T=Math.sqrt(t*t-A*A);let P=0;m===0&&a===0?P=.5/e:m===n&&c===Math.PI&&(P=-.5/e);for(let v=0;v<=e;v++){const R=v/e,L=i+R*r;d.x=-T*Math.cos(L),d.y=A,d.z=T*Math.sin(L),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(R+P,1-y),b.push(l++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){const y=h[m][b+1],M=h[m][b],A=h[m+1][b],T=h[m+1][b+1];(m!==0||a>0)&&f.push(y,M,T),(m!==n-1||c<Math.PI)&&f.push(M,A,T)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vn extends Pe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],h=[],d=[],u=new w,f=new w,g=new w;for(let _=0;_<=n;_++){const p=a+_/n*o;for(let m=0;m<=i;m++){const b=m/i*r;f.x=(t+e*Math.cos(p))*Math.cos(b),f.y=(t+e*Math.cos(p))*Math.sin(b),f.z=e*Math.sin(p),l.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=i;p++){const m=(i+1)*_+p-1,b=(i+1)*(_-1)+p-1,y=(i+1)*(_-1)+p,M=(i+1)*_+p;c.push(m,b,M),c.push(b,y,M)}this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class gc extends Pe{constructor(t=new Th(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,c=new w,l=new nt;let h=new w;const d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(f,2));function _(){for(let y=0;y<e;y++)p(y);p(r===!1?e:0),b(),m()}function p(y){h=t.getPointAt(y/e,h);const M=a.normals[y],A=a.binormals[y];for(let T=0;T<=i;T++){const P=T/i*Math.PI*2,v=Math.sin(P),R=-Math.cos(P);c.x=R*M.x+v*A.x,c.y=R*M.y+v*A.y,c.z=R*M.z+v*A.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function m(){for(let y=1;y<=e;y++)for(let M=1;M<=i;M++){const A=(i+1)*(y-1)+(M-1),T=(i+1)*y+(M-1),P=(i+1)*y+M,v=(i+1)*(y-1)+M;g.push(A,T,v),g.push(T,P,v)}}function b(){for(let y=0;y<=e;y++)for(let M=0;M<=i;M++)l.x=y/e,l.y=M/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new gc(new Qr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Ss(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(fl(i))i.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(fl(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function sn(s){const t={};for(let e=0;e<s.length;e++){const n=Ss(s[e]);for(const i in n)t[i]=n[i]}return t}function fl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function tf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Dh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const ef={clone:Ss,merge:sn};var nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nf,this.fragmentShader=sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new w().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new jt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class rf extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class We extends ws{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ye,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class af extends We{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class of extends ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cf extends ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ia extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class lf extends ia{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ka=new jt,pl=new w,ml=new w;class _c{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;pl.setFromMatrixPosition(t.matrixWorld),e.position.copy(pl),ml.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ml),e.updateMatrixWorld(),ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ks||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Pr=new w,Lr=new be,In=new w;class Ih extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Pr,Lr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,In.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Pr,Lr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pr,Lr,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new w,gl=new nt,_l=new nt;class an extends Ih{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,gl,_l),e.subVectors(_l,gl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class hf extends _c{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=xs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class uf extends ia{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new hf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class df extends _c{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}}class tr extends ia{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new df}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class sa extends Ih{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ff extends _c{constructor(){super(new sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pf extends ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new ff}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Uh extends Pe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}const rs=-90,as=1;class mf extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new an(rs,as,t,e);i.layers=this.layers,this.add(i);const r=new an(rs,as,t,e);r.layers=this.layers,this.add(r);const a=new an(rs,as,t,e);a.layers=this.layers,this.add(a);const o=new an(rs,as,t,e);o.layers=this.layers,this.add(o);const c=new an(rs,as,t,e);c.layers=this.layers,this.add(c);const l=new an(rs,as,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gf extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const xl=new jt;class _f{constructor(t,e,n=0,i=1/0){this.ray=new hc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xl),this}intersectObject(t,e=!0,n=[]){return Go(t,this,n,e),n.sort(vl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Go(t[i],this,n,e);return n.sort(vl),n}}function vl(s,t){return s.distance-t.distance}function Go(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Go(r[a],t,e,!0)}}const wc=class wc{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};wc.prototype.isMatrix2=!0;let Ml=wc;function Sl(s,t,e,n){const i=xf(n);switch(e){case uh:return s*t;case jo:return s*t/i.components*i.byteLength;case tc:return s*t/i.components*i.byteLength;case Hi:return s*t*2/i.components*i.byteLength;case ec:return s*t*2/i.components*i.byteLength;case dh:return s*t*3/i.components*i.byteLength;case An:return s*t*4/i.components*i.byteLength;case nc:return s*t*4/i.components*i.byteLength;case Gr:case Vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case oo:case lo:return Math.max(s,16)*Math.max(t,8)/4;case ao:case co:return Math.max(s,8)*Math.max(t,8)/2;case ho:case uo:case po:case mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fo:case Zr:case go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case vo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case yo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case wo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case bo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Co:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Po:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Lo:case Do:case Io:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Uo:case No:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Jr:case Fo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xf(s){switch(s){case pn:case oh:return{byteLength:1,components:1};case Ys:case ch:case Xn:return{byteLength:2,components:1};case $o:case Qo:return{byteLength:2,components:4};case Wn:case Ko:case Tn:return{byteLength:4,components:1};case lh:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);function Nh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function vf(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,If=`#ifdef USE_IRIDESCENCE
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
#endif`,Uf=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vf=`#define PI 3.141592653589793
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
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",$f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,op=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_p=`PhysicalMaterial material;
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
#endif`,xp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,vp=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pp=`#if defined( USE_POINTS_UV )
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
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`#ifdef USE_MORPHTARGETS
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
#endif`,Op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,r0=`float getShadowMask() {
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
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,h0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S0=`uniform sampler2D t2D;
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`#include <common>
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
}`,A0=`#if DEPTH_PACKING == 3200
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
}`,R0=`#define DISTANCE
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
}`,C0=`#define DISTANCE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`uniform float scale;
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
}`,I0=`uniform vec3 diffuse;
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
}`,U0=`#include <common>
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
}`,N0=`uniform vec3 diffuse;
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
}`,F0=`#define LAMBERT
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
}`,O0=`#define LAMBERT
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
}`,B0=`#define MATCAP
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
}`,k0=`#define MATCAP
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
}`,z0=`#define NORMAL
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
}`,H0=`#define NORMAL
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
}`,G0=`#define PHONG
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
}`,V0=`#define PHONG
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
}`,W0=`#define STANDARD
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
}`,X0=`#define STANDARD
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
}`,q0=`#define TOON
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
}`,Y0=`#define TOON
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
}`,Z0=`uniform float size;
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
}`,J0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,$0=`uniform vec3 color;
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
}`,Q0=`uniform float rotation;
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
}`,j0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Mf,alphahash_pars_fragment:Sf,alphamap_fragment:yf,alphamap_pars_fragment:wf,alphatest_fragment:bf,alphatest_pars_fragment:Ef,aomap_fragment:Tf,aomap_pars_fragment:Af,batching_pars_vertex:Rf,batching_vertex:Cf,begin_vertex:Pf,beginnormal_vertex:Lf,bsdfs:Df,iridescence_fragment:If,bumpmap_pars_fragment:Uf,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:Of,clipping_planes_vertex:Bf,color_fragment:kf,color_pars_fragment:zf,color_pars_vertex:Hf,color_vertex:Gf,common:Vf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:qf,displacementmap_vertex:Yf,emissivemap_fragment:Zf,emissivemap_pars_fragment:Jf,colorspace_fragment:Kf,colorspace_pars_fragment:$f,envmap_fragment:Qf,envmap_common_pars_fragment:jf,envmap_pars_fragment:tp,envmap_pars_vertex:ep,envmap_physical_pars_fragment:dp,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:sp,fog_fragment:rp,fog_pars_fragment:ap,gradientmap_pars_fragment:op,lightmap_pars_fragment:cp,lights_lambert_fragment:lp,lights_lambert_pars_fragment:hp,lights_pars_begin:up,lights_toon_fragment:fp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:_p,lights_physical_pars_fragment:xp,lights_fragment_begin:vp,lights_fragment_maps:Mp,lights_fragment_end:Sp,lightprobes_pars_fragment:yp,logdepthbuf_fragment:wp,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:Ep,logdepthbuf_vertex:Tp,map_fragment:Ap,map_pars_fragment:Rp,map_particle_fragment:Cp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Dp,morphinstance_vertex:Ip,morphcolor_vertex:Up,morphnormal_vertex:Np,morphtarget_pars_vertex:Fp,morphtarget_vertex:Op,normal_fragment_begin:Bp,normal_fragment_maps:kp,normal_pars_fragment:zp,normal_pars_vertex:Hp,normal_vertex:Gp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:Yp,opaque_fragment:Zp,packing:Jp,premultiplied_alpha_fragment:Kp,project_vertex:$p,dithering_fragment:Qp,dithering_pars_fragment:jp,roughnessmap_fragment:t0,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:n0,shadowmap_pars_vertex:i0,shadowmap_vertex:s0,shadowmask_pars_fragment:r0,skinbase_vertex:a0,skinning_pars_vertex:o0,skinning_vertex:c0,skinnormal_vertex:l0,specularmap_fragment:h0,specularmap_pars_fragment:u0,tonemapping_fragment:d0,tonemapping_pars_fragment:f0,transmission_fragment:p0,transmission_pars_fragment:m0,uv_pars_fragment:g0,uv_pars_vertex:_0,uv_vertex:x0,worldpos_vertex:v0,background_vert:M0,background_frag:S0,backgroundCube_vert:y0,backgroundCube_frag:w0,cube_vert:b0,cube_frag:E0,depth_vert:T0,depth_frag:A0,distance_vert:R0,distance_frag:C0,equirect_vert:P0,equirect_frag:L0,linedashed_vert:D0,linedashed_frag:I0,meshbasic_vert:U0,meshbasic_frag:N0,meshlambert_vert:F0,meshlambert_frag:O0,meshmatcap_vert:B0,meshmatcap_frag:k0,meshnormal_vert:z0,meshnormal_frag:H0,meshphong_vert:G0,meshphong_frag:V0,meshphysical_vert:W0,meshphysical_frag:X0,meshtoon_vert:q0,meshtoon_frag:Y0,points_vert:Z0,points_frag:J0,shadow_vert:K0,shadow_frag:$0,sprite_vert:Q0,sprite_frag:j0},xt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new w},probesMax:{value:new w},probesResolution:{value:new w}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Fn={basic:{uniforms:sn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:sn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:sn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:sn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:sn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:sn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:sn([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:sn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:sn([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:sn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:sn([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:sn([xt.common,xt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:sn([xt.lights,xt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Fn.physical={uniforms:sn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Dr={r:0,b:0,g:0},tm=new jt,Fh=new Yt;Fh.set(-1,0,0,0,1,0,0,0,1);function em(s,t,e,n,i,r){const a=new Kt(0);let o=i===!0?0:1,c,l,h=null,d=0,u=null;function f(b){let y=b.isScene===!0?b.background:null;if(y&&y.isTexture){const M=b.backgroundBlurriness>0;y=t.get(y,M)}return y}function g(b){let y=!1;const M=f(b);M===null?p(a,o):M&&M.isColor&&(p(M,1),y=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(b,y){const M=f(y);M&&(M.isCubeTexture||M.mapping===ea)?(l===void 0&&(l=new V(new vn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Ss(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Fh),l.material.toneMapped=re.getTransfer(M.colorSpace)!==de,(h!==M||d!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new V(new Ze(2,2),new en({name:"BackgroundMaterial",uniforms:Ss(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=re.getTransfer(M.colorSpace)!==de,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(Dr,Dh(s)),e.buffers.color.setClear(Dr.r,Dr.g,Dr.b,y,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),o=y,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:g,addToRenderList:_,dispose:m}}function nm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(D,U,W,J,O){let q=!1;const k=d(D,J,W,U);r!==k&&(r=k,l(r.object)),q=f(D,J,W,O),q&&g(D,J,W,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(D,U,W,J),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return s.createVertexArray()}function l(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,U,W,J){const O=J.wireframe===!0;let q=n[U.id];q===void 0&&(q={},n[U.id]=q);const k=D.isInstancedMesh===!0?D.id:0;let j=q[k];j===void 0&&(j={},q[k]=j);let it=j[W.id];it===void 0&&(it={},j[W.id]=it);let ct=it[O];return ct===void 0&&(ct=u(c()),it[O]=ct),ct}function u(D){const U=[],W=[],J=[];for(let O=0;O<e;O++)U[O]=0,W[O]=0,J[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:J,object:D,attributes:{},index:null}}function f(D,U,W,J){const O=r.attributes,q=U.attributes;let k=0;const j=W.getAttributes();for(const it in j)if(j[it].location>=0){const ht=O[it];let wt=q[it];if(wt===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(wt=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(wt=D.instanceColor)),ht===void 0||ht.attribute!==wt||wt&&ht.data!==wt.data)return!0;k++}return r.attributesNum!==k||r.index!==J}function g(D,U,W,J){const O={},q=U.attributes;let k=0;const j=W.getAttributes();for(const it in j)if(j[it].location>=0){let ht=q[it];ht===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor));const wt={};wt.attribute=ht,ht&&ht.data&&(wt.data=ht.data),O[it]=wt,k++}r.attributes=O,r.attributesNum=k,r.index=J}function _(){const D=r.newAttributes;for(let U=0,W=D.length;U<W;U++)D[U]=0}function p(D){m(D,0)}function m(D,U){const W=r.newAttributes,J=r.enabledAttributes,O=r.attributeDivisors;W[D]=1,J[D]===0&&(s.enableVertexAttribArray(D),J[D]=1),O[D]!==U&&(s.vertexAttribDivisor(D,U),O[D]=U)}function b(){const D=r.newAttributes,U=r.enabledAttributes;for(let W=0,J=U.length;W<J;W++)U[W]!==D[W]&&(s.disableVertexAttribArray(W),U[W]=0)}function y(D,U,W,J,O,q,k){k===!0?s.vertexAttribIPointer(D,U,W,O,q):s.vertexAttribPointer(D,U,W,J,O,q)}function M(D,U,W,J){_();const O=J.attributes,q=W.getAttributes(),k=U.defaultAttributeValues;for(const j in q){const it=q[j];if(it.location>=0){let ct=O[j];if(ct===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor)),ct!==void 0){const ht=ct.normalized,wt=ct.itemSize,te=t.get(ct);if(te===void 0)continue;const ge=te.buffer,ae=te.type,$=te.bytesPerElement,ut=ae===s.INT||ae===s.UNSIGNED_INT||ct.gpuType===Ko;if(ct.isInterleavedBufferAttribute){const at=ct.data,Ut=at.stride,Vt=ct.offset;if(at.isInstancedInterleavedBuffer){for(let Ot=0;Ot<it.locationSize;Ot++)m(it.location+Ot,at.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ot=0;Ot<it.locationSize;Ot++)p(it.location+Ot);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Ot=0;Ot<it.locationSize;Ot++)y(it.location+Ot,wt/it.locationSize,ae,ht,Ut*$,(Vt+wt/it.locationSize*Ot)*$,ut)}else{if(ct.isInstancedBufferAttribute){for(let at=0;at<it.locationSize;at++)m(it.location+at,ct.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let at=0;at<it.locationSize;at++)p(it.location+at);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let at=0;at<it.locationSize;at++)y(it.location+at,wt/it.locationSize,ae,ht,wt*$,wt/it.locationSize*at*$,ut)}}else if(k!==void 0){const ht=k[j];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(it.location,ht);break;case 3:s.vertexAttrib3fv(it.location,ht);break;case 4:s.vertexAttrib4fv(it.location,ht);break;default:s.vertexAttrib1fv(it.location,ht)}}}}b()}function A(){R();for(const D in n){const U=n[D];for(const W in U){const J=U[W];for(const O in J){const q=J[O];for(const k in q)h(q[k].object),delete q[k];delete J[O]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;const U=n[D.id];for(const W in U){const J=U[W];for(const O in J){const q=J[O];for(const k in q)h(q[k].object),delete q[k];delete J[O]}}delete n[D.id]}function P(D){for(const U in n){const W=n[U];for(const J in W){const O=W[J];if(O[D.id]===void 0)continue;const q=O[D.id];for(const k in q)h(q[k].object),delete q[k];delete O[D.id]}}}function v(D){for(const U in n){const W=n[U],J=D.isInstancedMesh===!0?D.id:0,O=W[J];if(O!==void 0){for(const q in O){const k=O[q];for(const j in k)h(k[j].object),delete k[j];delete O[q]}delete W[J],Object.keys(W).length===0&&delete n[U]}}}function R(){L(),a=!0,r!==i&&(r=i,l(r.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function im(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==An&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const v=P===Xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==pn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Tn&&!v)}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Gt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:M,maxSamples:A,samples:T}}function rm(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Nn,o=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{const b=r?0:n,y=b*4;let M=m.clippingState||null;c.value=M,M=h(g,u,y,f);for(let A=0;A!==y;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,M=f;y!==_;++y,M+=4)a.copy(d[y]).applyMatrix4(b,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}const wi=4,yl=[.125,.215,.35,.446,.526,.582],Fi=20,am=256,Ls=new sa,wl=new Kt;let za=null,Ha=0,Ga=0,Va=!1;const om=new w;class Vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=om}=r;za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(za,Ha,Ga),this._renderer.xr.enabled=Va,t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Xn,format:An,colorSpace:Js,depthBuffer:!1},i=bl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bl(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cm(r)),this._blurMaterial=hm(r,t,e),this._ggxMaterial=lm(r,t,e)}return i}_compileMaterial(t){const e=new V(new Pe,t);this._renderer.compile(e,Ls)}_sceneToCubeUV(t,e,n,i,r){const c=new an(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(wl),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new V(new vn,new Ti({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let m=!1;const b=t.background;b?b.isColor&&(p.color.copy(b),t.background=null,m=!0):(p.color.copy(wl),m=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):M===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const A=this._cubeSize;os(i,M*A,y>2?A:0,A,A),d.setRenderTarget(i),m&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ki||t.mapping===_s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;os(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ls)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-wi?n-g+wi:0),m=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,os(r,p,m,3*_,2*_),i.setRenderTarget(r),i.render(o,Ls),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,os(t,p,m,3*_,2*_),i.setRenderTarget(t),i.render(o,Ls)}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&se("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[i];d.material=l;const u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Fi;p>Fi&&Gt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fi}`);const m=[];let b=0;for(let P=0;P<Fi;++P){const v=P/_,R=Math.exp(-v*v/2);m.push(R),P===0?b+=R:P<p&&(b+=2*R)}for(let P=0;P<m.length;P++)m[P]=m[P]/b;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const M=this._sizeLods[i],A=3*M*(i>y-wi?i-y+wi:0),T=4*(this._cubeSize-M);os(e,A,T,3*M,2*M),c.setRenderTarget(e),c.render(d,Ls)}}function cm(s){const t=[],e=[],n=[];let i=s;const r=s-wi+1+yl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-wi?c=yl[a-s+wi-1]:a===0&&(c=0),e.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,p=2,m=1,b=new Float32Array(_*g*f),y=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let T=0;T<f;T++){const P=T%3*2/3-1,v=T>2?0:-1,R=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];b.set(R,_*g*T),y.set(u,p*g*T);const L=[T,T,T,T,T,T];M.set(L,m*g*T)}const A=new Pe;A.setAttribute("position",new qe(b,_)),A.setAttribute("uv",new qe(y,p)),A.setAttribute("faceIndex",new qe(M,m)),n.push(new V(A,null)),i>wi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function bl(s,t,e){const n=new Cn(s,t,e);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function lm(s,t,e){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:am,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ra(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function hm(s,t,e){const n=new Float32Array(Fi),i=new w(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ra(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function El(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Tl(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ra(){return`

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
	`}class Oh extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Mh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new vn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ci});r.uniforms.tEquirect.value=e;const a=new V(i,r),o=e.minFilter;return e.minFilter===Oi&&(e.minFilter=Xe),new mf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}function um(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===ua||f===da)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const _=new Oh(g.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",l),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===ua||f===da,_=f===ki||f===_s;if(g||_){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Vo(s)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const b=u.image;return g&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new Vo(s)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===ua?u.mapping=ki:f===da&&(u.mapping=_s),u}function c(u){let f=0;const g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function dm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&fs("WebGLRenderer: "+n+" extension not supported."),i}}}function fm(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const b=f.array;_=f.version;for(let y=0,M=b.length;y<M;y+=3){const A=b[y+0],T=b[y+1],P=b[y+2];u.push(A,T,T,P,P,A)}}else{const b=g.array;_=g.version;for(let y=0,M=b.length/3-1;y<M;y+=3){const A=y+0,T=y+1,P=y+2;u.push(A,T,T,P,P,A)}}const p=new(g.count>=65535?_h:gh)(u,1);p.version=_;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function pm(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function mm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:se("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function gm(s,t,e){const n=new WeakMap,i=new Se;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let L=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",L)};var f=L;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let A=o.attributes.position.count*M,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*T*4*d),v=new ph(P,A,T,d);v.type=Tn,v.needsUpdate=!0;const R=M*4;for(let D=0;D<d;D++){const U=m[D],W=b[D],J=y[D],O=A*T*4*D;for(let q=0;q<U.count;q++){const k=q*R;g===!0&&(i.fromBufferAttribute(U,q),P[O+k+0]=i.x,P[O+k+1]=i.y,P[O+k+2]=i.z,P[O+k+3]=0),_===!0&&(i.fromBufferAttribute(W,q),P[O+k+4]=i.x,P[O+k+5]=i.y,P[O+k+6]=i.z,P[O+k+7]=0),p===!0&&(i.fromBufferAttribute(J,q),P[O+k+8]=i.x,P[O+k+9]=i.y,P[O+k+10]=i.z,P[O+k+11]=J.itemSize===4?i.w:1)}}u={count:d,texture:v,size:new nt(A,T)},n.set(o,u),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function _m(s,t,e,n,i){let r=new WeakMap;function a(l){const h=i.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const xm={[th]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[nh]:"CINEON_TONE_MAPPING",[ih]:"ACES_FILMIC_TONE_MAPPING",[Jo]:"AGX_TONE_MAPPING",[rh]:"NEUTRAL_TONE_MAPPING",[sh]:"CUSTOM_TONE_MAPPING"};function vm(s,t,e,n,i,r){const a=new Cn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,depthTexture:i?new vs(t,e):void 0}),o=new Cn(t,e,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),c=new Pe;c.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new me([0,2,0,0,2,0],2));const l=new rf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new V(c,l),d=new sa(-1,1,1,-1,0,1);let u=null,f=null,g=!1,_,p=null,m=[],b=!1;this.setSize=function(y,M){a.setSize(y,M),o.setSize(y,M);for(let A=0;A<m.length;A++){const T=m[A];T.setSize&&T.setSize(y,M)}},this.setEffects=function(y){m=y,b=m.length>0&&m[0].isRenderPass===!0;const M=a.width,A=a.height;for(let T=0;T<m.length;T++){const P=m[T];P.setSize&&P.setSize(M,A)}},this.begin=function(y,M){if(g||y.toneMapping===Gn&&m.length===0)return!1;if(p=M,M!==null){const A=M.width,T=M.height;(a.width!==A||a.height!==T)&&this.setSize(A,T)}return b===!1&&y.setRenderTarget(a),_=y.toneMapping,y.toneMapping=Gn,!0},this.hasRenderPass=function(){return b},this.end=function(y,M){y.toneMapping=_,g=!0;let A=a,T=o;for(let P=0;P<m.length;P++){const v=m[P];if(v.enabled!==!1&&(v.render(y,T,A,M),v.needsSwap!==!1)){const R=A;A=T,T=R}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,l.defines={},re.getTransfer(u)===de&&(l.defines.SRGB_TRANSFER="");const P=xm[f];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(p),y.render(h,d),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const Bh=new tn,Wo=new vs(1,1),kh=new ph,zh=new sd,Hh=new Mh,Al=[],Rl=[],Cl=new Float32Array(16),Pl=new Float32Array(9),Ll=new Float32Array(4);function bs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Al[i];if(r===void 0&&(r=new Float32Array(i),Al[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function He(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function aa(s,t){let e=Rl[t];e===void 0&&(e=new Int32Array(t),Rl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Mm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Sm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2fv(this.addr,t),Ge(e,t)}}function ym(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;s.uniform3fv(this.addr,t),Ge(e,t)}}function wm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4fv(this.addr,t),Ge(e,t)}}function bm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Ll.set(n),s.uniformMatrix2fv(this.addr,!1,Ll),Ge(e,n)}}function Em(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Pl.set(n),s.uniformMatrix3fv(this.addr,!1,Pl),Ge(e,n)}}function Tm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Cl.set(n),s.uniformMatrix4fv(this.addr,!1,Cl),Ge(e,n)}}function Am(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Rm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2iv(this.addr,t),Ge(e,t)}}function Cm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3iv(this.addr,t),Ge(e,t)}}function Pm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4iv(this.addr,t),Ge(e,t)}}function Lm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Dm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2uiv(this.addr,t),Ge(e,t)}}function Im(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3uiv(this.addr,t),Ge(e,t)}}function Um(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4uiv(this.addr,t),Ge(e,t)}}function Nm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Wo.compareFunction=e.isReversedDepthBuffer()?sc:ic,r=Wo):r=Bh,e.setTexture2D(t||r,i)}function Fm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||zh,i)}function Om(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Hh,i)}function Bm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||kh,i)}function km(s){switch(s){case 5126:return Mm;case 35664:return Sm;case 35665:return ym;case 35666:return wm;case 35674:return bm;case 35675:return Em;case 35676:return Tm;case 5124:case 35670:return Am;case 35667:case 35671:return Rm;case 35668:case 35672:return Cm;case 35669:case 35673:return Pm;case 5125:return Lm;case 36294:return Dm;case 36295:return Im;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}function zm(s,t){s.uniform1fv(this.addr,t)}function Hm(s,t){const e=bs(t,this.size,2);s.uniform2fv(this.addr,e)}function Gm(s,t){const e=bs(t,this.size,3);s.uniform3fv(this.addr,e)}function Vm(s,t){const e=bs(t,this.size,4);s.uniform4fv(this.addr,e)}function Wm(s,t){const e=bs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Xm(s,t){const e=bs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function qm(s,t){const e=bs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ym(s,t){s.uniform1iv(this.addr,t)}function Zm(s,t){s.uniform2iv(this.addr,t)}function Jm(s,t){s.uniform3iv(this.addr,t)}function Km(s,t){s.uniform4iv(this.addr,t)}function $m(s,t){s.uniform1uiv(this.addr,t)}function Qm(s,t){s.uniform2uiv(this.addr,t)}function jm(s,t){s.uniform3uiv(this.addr,t)}function tg(s,t){s.uniform4uiv(this.addr,t)}function eg(s,t,e){const n=this.cache,i=t.length,r=aa(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Wo:a=Bh;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function ng(s,t,e){const n=this.cache,i=t.length,r=aa(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||zh,r[a])}function ig(s,t,e){const n=this.cache,i=t.length,r=aa(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Hh,r[a])}function sg(s,t,e){const n=this.cache,i=t.length,r=aa(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||kh,r[a])}function rg(s){switch(s){case 5126:return zm;case 35664:return Hm;case 35665:return Gm;case 35666:return Vm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return Km;case 5125:return $m;case 36294:return Qm;case 36295:return jm;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return ng;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return sg}}class ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=km(e.type)}}class og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rg(e.type)}}class cg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function Dl(s,t){s.seq.push(t),s.map[t.id]=t}function lg(s,t,e){const n=s.name,i=n.length;for(Wa.lastIndex=0;;){const r=Wa.exec(n),a=Wa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Dl(e,l===void 0?new ag(o,s,t):new og(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new cg(o),Dl(e,d)),e=d}}}class qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);lg(o,c,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Il(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const hg=37297;let ug=0;function dg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ul=new Yt;function fg(s){re._getMatrix(Ul,re.workingColorSpace,s);const t=`mat3( ${Ul.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(s)){case Kr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Nl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+dg(s.getShaderSource(t),o)}else return r}function pg(s,t){const e=fg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const mg={[th]:"Linear",[eh]:"Reinhard",[nh]:"Cineon",[ih]:"ACESFilmic",[Jo]:"AgX",[rh]:"Neutral",[sh]:"Custom"};function gg(s,t){const e=mg[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ir=new w;function _g(){re.getLuminanceCoefficients(Ir);const s=Ir.x.toFixed(4),t=Ir.y.toFixed(4),e=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function vg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Hs(s){return s!==""}function Fl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ol(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(s){return s.replace(Sg,wg)}const yg=new Map;function wg(s,t){let e=$t[t];if(e===void 0){const n=yg.get(t);if(n!==void 0)e=$t[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xo(e)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(s){return s.replace(bg,Eg)}function Eg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const Tg={[Hr]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function Ag(s){return Tg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Rg={[ki]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE_UV"};function Cg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Rg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Pg={[_s]:"ENVMAP_MODE_REFRACTION"};function Lg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Pg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Dg={[jl]:"ENVMAP_BLENDING_MULTIPLY",[yu]:"ENVMAP_BLENDING_MIX",[wu]:"ENVMAP_BLENDING_ADD"};function Ig(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Dg[s.combine]||"ENVMAP_BLENDING_NONE"}function Ug(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ng(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Ag(e),l=Cg(e),h=Lg(e),d=Ig(e),u=Ug(e),f=xg(e),g=vg(r),_=i.createProgram();let p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`)):(p=[kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),m=[kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Gn?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,pg("linearToOutputTexel",e.outputColorSpace),_g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),a=Xo(a),a=Fl(a,e),a=Ol(a,e),o=Xo(o),o=Fl(o,e),o=Ol(o,e),a=Bl(a),o=Bl(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=b+p+a,M=b+m+o,A=Il(i,i.VERTEX_SHADER,y),T=Il(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(D){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(_)||"",W=i.getShaderInfoLog(A)||"",J=i.getShaderInfoLog(T)||"",O=U.trim(),q=W.trim(),k=J.trim();let j=!0,it=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,T);else{const ct=Nl(i,A,"vertex"),ht=Nl(i,T,"fragment");se("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+ct+`
`+ht)}else O!==""?Gt("WebGLProgram: Program Info Log:",O):(q===""||k==="")&&(it=!1);it&&(D.diagnostics={runnable:j,programLog:O,vertexShader:{log:q,prefix:p},fragmentShader:{log:k,prefix:m}})}i.deleteShader(A),i.deleteShader(T),v=new qr(i,_),R=Mg(i,_)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(_,hg)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ug++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let Fg=0;class Og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bg(t),e.set(t,n)),n}}class Bg{constructor(t){this.id=Fg++,this.code=t,this.usedTimes=0}}function kg(s){return s===Hi||s===Zr||s===Jr}function zg(s,t,e,n,i,r){const a=new oc,o=new Og,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,R,L,D,U,W){const J=D.fog,O=U.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=t.get(v.envMap||q,k),it=j&&j.mapping===ea?j.image.height:null,ct=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&Gt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ht=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,wt=ht!==void 0?ht.length:0;let te=0;O.morphAttributes.position!==void 0&&(te=1),O.morphAttributes.normal!==void 0&&(te=2),O.morphAttributes.color!==void 0&&(te=3);let ge,ae,$,ut;if(ct){const At=Fn[ct];ge=At.vertexShader,ae=At.fragmentShader}else{ge=v.vertexShader,ae=v.fragmentShader;const At=o.getVertexShaderStage(v),Ae=o.getFragmentShaderStage(v);o.update(v,At,Ae),$=At.id,ut=Ae.id}const at=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),Vt=U.isInstancedMesh===!0,Ot=U.isBatchedMesh===!0,le=!!v.map,Xt=!!v.matcap,tt=!!j,rt=!!v.aoMap,st=!!v.lightMap,vt=!!v.bumpMap&&v.wireframe===!1,gt=!!v.normalMap,Bt=!!v.displacementMap,Lt=!!v.emissiveMap,Wt=!!v.metalnessMap,qt=!!v.roughnessMap,I=v.anisotropy>0,fe=v.clearcoat>0,ie=v.dispersion>0,C=v.iridescence>0,x=v.sheen>0,B=v.transmission>0,G=I&&!!v.anisotropyMap,Y=fe&&!!v.clearcoatMap,ot=fe&&!!v.clearcoatNormalMap,lt=fe&&!!v.clearcoatRoughnessMap,Z=C&&!!v.iridescenceMap,Q=C&&!!v.iridescenceThicknessMap,ft=x&&!!v.sheenColorMap,Dt=x&&!!v.sheenRoughnessMap,_t=!!v.specularMap,pt=!!v.specularColorMap,Ft=!!v.specularIntensityMap,zt=B&&!!v.transmissionMap,Zt=B&&!!v.thicknessMap,N=!!v.gradientMap,dt=!!v.alphaMap,K=v.alphaTest>0,mt=!!v.alphaHash,yt=!!v.extensions;let et=Gn;v.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(et=s.toneMapping);const Pt={shaderID:ct,shaderType:v.type,shaderName:v.name,vertexShader:ge,fragmentShader:ae,defines:v.defines,customVertexShaderID:$,customFragmentShaderID:ut,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ot,batchingColor:Ot&&U._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&U.instanceColor!==null,instancingMorph:Vt&&U.morphTexture!==null,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:le,matcap:Xt,envMap:tt,envMapMode:tt&&j.mapping,envMapCubeUVHeight:it,aoMap:rt,lightMap:st,bumpMap:vt,normalMap:gt,displacementMap:Bt,emissiveMap:Lt,normalMapObjectSpace:gt&&v.normalMapType===Tu,normalMapTangentSpace:gt&&v.normalMapType===Oo,packedNormalMap:gt&&v.normalMapType===Oo&&kg(v.normalMap.format),metalnessMap:Wt,roughnessMap:qt,anisotropy:I,anisotropyMap:G,clearcoat:fe,clearcoatMap:Y,clearcoatNormalMap:ot,clearcoatRoughnessMap:lt,dispersion:ie,iridescence:C,iridescenceMap:Z,iridescenceThicknessMap:Q,sheen:x,sheenColorMap:ft,sheenRoughnessMap:Dt,specularMap:_t,specularColorMap:pt,specularIntensityMap:Ft,transmission:B,transmissionMap:zt,thicknessMap:Zt,gradientMap:N,opaque:v.transparent===!1&&v.blending===bi&&v.alphaToCoverage===!1,alphaMap:dt,alphaTest:K,alphaHash:mt,combine:v.combine,mapUv:le&&g(v.map.channel),aoMapUv:rt&&g(v.aoMap.channel),lightMapUv:st&&g(v.lightMap.channel),bumpMapUv:vt&&g(v.bumpMap.channel),normalMapUv:gt&&g(v.normalMap.channel),displacementMapUv:Bt&&g(v.displacementMap.channel),emissiveMapUv:Lt&&g(v.emissiveMap.channel),metalnessMapUv:Wt&&g(v.metalnessMap.channel),roughnessMapUv:qt&&g(v.roughnessMap.channel),anisotropyMapUv:G&&g(v.anisotropyMap.channel),clearcoatMapUv:Y&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&g(v.sheenRoughnessMap.channel),specularMapUv:_t&&g(v.specularMap.channel),specularColorMapUv:pt&&g(v.specularColorMap.channel),specularIntensityMapUv:Ft&&g(v.specularIntensityMap.channel),transmissionMapUv:zt&&g(v.transmissionMap.channel),thicknessMapUv:Zt&&g(v.thicknessMap.channel),alphaMapUv:dt&&g(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(gt||I),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(le||dt),fog:!!J,useFog:v.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&gt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ut,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:et,decodeVideoTexture:le&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===de,decodeVideoTextureEmissive:Lt&&v.emissiveMap.isVideoTexture===!0&&re.getTransfer(v.emissiveMap.colorSpace)===de,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ze,flipSided:v.side===on,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:yt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&v.extensions.multiDraw===!0||Ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)R.push(L),R.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(m(R,v),b(R,v),R.push(s.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function m(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function b(v,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function y(v){const R=f[v.type];let L;if(R){const D=Fn[R];L=ef.clone(D.uniforms)}else L=v.uniforms;return L}function M(v,R){let L=h.get(R);return L!==void 0?++L.usedTimes:(L=new Ng(s,R,v,i),l.push(L),h.set(R,L)),L}function A(v){if(--v.usedTimes===0){const R=l.indexOf(v);l[R]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function P(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:P}}function Hg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Gg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function zl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Hl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,m){let b=s[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},s[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=a(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=p,b.group=m),t++,b}function c(u,f,g,_,p,m){const b=o(u,f,g,_,p,m);g.transmission>0?n.push(b):g.transparent===!0?i.push(b):e.push(b)}function l(u,f,g,_,p,m){const b=o(u,f,g,_,p,m);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):e.unshift(b)}function h(u,f,g){e.length>1&&e.sort(u||Gg),n.length>1&&n.sort(f||zl),i.length>1&&i.sort(f||zl),g&&(e.reverse(),n.reverse(),i.reverse())}function d(){for(let u=t,f=s.length;u<f;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function Vg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Hl,s.set(n,[a])):i>=r.length?(a=new Hl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Wg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Kt};break;case"SpotLight":e={position:new w,direction:new w,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new w,halfWidth:new w,halfHeight:new w};break}return s[t.id]=e,e}}}function Xg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let qg=0;function Yg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Zg(s){const t=new Wg,e=Xg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);const i=new w,r=new jt,a=new jt;function o(l){let h=0,d=0,u=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,b=0,y=0,M=0,A=0,T=0,P=0;l.sort(Yg);for(let R=0,L=l.length;R<L;R++){const D=l[R],U=D.color,W=D.intensity,J=D.distance;let O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Hi?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=U.r*W,d+=U.g*W,u+=U.b*W;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],W);P++}else if(D.isDirectionalLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,j=e.get(D);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=D.shadow.matrix,b++}n.directional[f]=q,f++}else if(D.isSpotLight){const q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(U).multiplyScalar(W),q.distance=J,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[_]=q;const k=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,k.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=k.matrix,D.castShadow){const j=e.get(D);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=O,M++}_++}else if(D.isRectAreaLight){const q=t.get(D);q.color.copy(U).multiplyScalar(W),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=q,p++}else if(D.isPointLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const k=D.shadow,j=e.get(D);j.shadowIntensity=k.intensity,j.shadowBias=k.bias,j.shadowNormalBias=k.normalBias,j.shadowRadius=k.radius,j.shadowMapSize=k.mapSize,j.shadowCameraNear=k.camera.near,j.shadowCameraFar=k.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=q,g++}else if(D.isHemisphereLight){const q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(W),q.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[m]=q,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const v=n.hash;(v.directionalLength!==f||v.pointLength!==g||v.spotLength!==_||v.rectAreaLength!==p||v.hemiLength!==m||v.numDirectionalShadows!==b||v.numPointShadows!==y||v.numSpotShadows!==M||v.numSpotMaps!==A||v.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,v.directionalLength=f,v.pointLength=g,v.spotLength=_,v.rectAreaLength=p,v.hemiLength=m,v.numDirectionalShadows=b,v.numPointShadows=y,v.numSpotShadows=M,v.numSpotMaps=A,v.numLightProbes=P,n.version=qg++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){const y=l[m];if(y.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(y.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function Gl(s){const t=new Zg(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Jg(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Gl(s),t.set(i,[o])):r>=a.length?(o=new Gl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`,Qg=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],jg=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],Vl=new jt,Ds=new w,Xa=new w;function t_(s,t,e){let n=new uc;const i=new nt,r=new nt,a=new Se,o=new of,c=new cf,l={},h=e.maxTextureSize,d={[Ei]:on,[on]:Ei,[ze]:ze},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Kg,fragmentShader:$g}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new V(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let m=this.type;this.render=function(T,P,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Ql&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hr);const R=s.getRenderTarget(),L=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),U=s.state;U.setBlending(ci),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const W=m!==this.type;W&&P.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(O=>O.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,O=T.length;J<O;J++){const q=T[J],k=q.shadow;if(k===void 0){Gt("WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const j=k.getFrameExtents();i.multiply(j),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,k.mapSize.y=r.y));const it=s.state.buffers.depth.getReversed();if(k.camera._reversedDepth=it,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ks){if(q.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Cn(i.x,i.y,{format:Hi,type:Xn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),k.map.texture.name=q.name+".shadowMap",k.map.depthTexture=new vs(i.x,i.y,Tn),k.map.depthTexture.name=q.name+".shadowMapDepth",k.map.depthTexture.format=hi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Je,k.map.depthTexture.magFilter=Je}else q.isPointLight?(k.map=new Oh(i.x),k.map.depthTexture=new yd(i.x,Wn)):(k.map=new Cn(i.x,i.y),k.map.depthTexture=new vs(i.x,i.y,Wn)),k.map.depthTexture.name=q.name+".shadowMap",k.map.depthTexture.format=hi,this.type===Hr?(k.map.depthTexture.compareFunction=it?sc:ic,k.map.depthTexture.minFilter=Xe,k.map.depthTexture.magFilter=Xe):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Je,k.map.depthTexture.magFilter=Je);k.camera.updateProjectionMatrix()}const ct=k.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<ct;ht++){if(k.map.isWebGLCubeRenderTarget)s.setRenderTarget(k.map,ht),s.clear();else{ht===0&&(s.setRenderTarget(k.map),s.clear());const wt=k.getViewport(ht);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),U.viewport(a)}if(q.isPointLight){const wt=k.camera,te=k.matrix,ge=q.distance||wt.far;ge!==wt.far&&(wt.far=ge,wt.updateProjectionMatrix()),Ds.setFromMatrixPosition(q.matrixWorld),wt.position.copy(Ds),Xa.copy(wt.position),Xa.add(Qg[ht]),wt.up.copy(jg[ht]),wt.lookAt(Xa),wt.updateMatrixWorld(),te.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Vl.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Vl,wt.coordinateSystem,wt.reversedDepth)}else k.updateMatrices(q);n=k.getFrustum(),M(P,v,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===ks&&b(k,v),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(R,L,D)};function b(T,P){const v=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Cn(i.x,i.y,{format:Hi,type:Xn})),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(P,null,v,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(P,null,v,f,_,null)}function y(T,P,v,R){let L=null;const D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)L=D;else if(L=v.isPointLight===!0?c:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const U=L.uuid,W=P.uuid;let J=l[U];J===void 0&&(J={},l[U]=J);let O=J[W];O===void 0&&(O=L.clone(),J[W]=O,P.addEventListener("dispose",A)),L=O}if(L.visible=P.visible,L.wireframe=P.wireframe,R===ks?L.side=P.shadowSide!==null?P.shadowSide:P.side:L.side=P.shadowSide!==null?P.shadowSide:d[P.side],L.alphaMap=P.alphaMap,L.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,L.map=P.map,L.clipShadows=P.clipShadows,L.clippingPlanes=P.clippingPlanes,L.clipIntersection=P.clipIntersection,L.displacementMap=P.displacementMap,L.displacementScale=P.displacementScale,L.displacementBias=P.displacementBias,L.wireframeLinewidth=P.wireframeLinewidth,L.linewidth=P.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const U=s.properties.get(L);U.light=v}return L}function M(T,P,v,R,L){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===ks)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const W=t.update(T),J=T.material;if(Array.isArray(J)){const O=W.groups;for(let q=0,k=O.length;q<k;q++){const j=O[q],it=J[j.materialIndex];if(it&&it.visible){const ct=y(T,it,R,L);T.onBeforeShadow(s,T,P,v,W,ct,j),s.renderBufferDirect(v,null,W,ct,T,j),T.onAfterShadow(s,T,P,v,W,ct,j)}}}else if(J.visible){const O=y(T,J,R,L);T.onBeforeShadow(s,T,P,v,W,O,null),s.renderBufferDirect(v,null,W,O,T,null),T.onAfterShadow(s,T,P,v,W,O,null)}}const U=T.children;for(let W=0,J=U.length;W<J;W++)M(U[W],P,v,R,L)}function A(T){T.target.removeEventListener("dispose",A);for(const v in l){const R=l[v],L=T.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}function e_(s,t){function e(){let N=!1;const dt=new Se;let K=null;const mt=new Se(0,0,0,0);return{setMask:function(yt){K!==yt&&!N&&(s.colorMask(yt,yt,yt,yt),K=yt)},setLocked:function(yt){N=yt},setClear:function(yt,et,Pt,At,Ae){Ae===!0&&(yt*=At,et*=At,Pt*=At),dt.set(yt,et,Pt,At),mt.equals(dt)===!1&&(s.clearColor(yt,et,Pt,At),mt.copy(dt))},reset:function(){N=!1,K=null,mt.set(-1,0,0,0)}}}function n(){let N=!1,dt=!1,K=null,mt=null,yt=null;return{setReversed:function(et){if(dt!==et){const Pt=t.get("EXT_clip_control");et?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),dt=et;const At=yt;yt=null,this.setClear(At)}},getReversed:function(){return dt},setTest:function(et){et?at(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(et){K!==et&&!N&&(s.depthMask(et),K=et)},setFunc:function(et){if(dt&&(et=Fu[et]),mt!==et){switch(et){case Qa:s.depthFunc(s.NEVER);break;case ja:s.depthFunc(s.ALWAYS);break;case to:s.depthFunc(s.LESS);break;case gs:s.depthFunc(s.LEQUAL);break;case eo:s.depthFunc(s.EQUAL);break;case no:s.depthFunc(s.GEQUAL);break;case io:s.depthFunc(s.GREATER);break;case so:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}mt=et}},setLocked:function(et){N=et},setClear:function(et){yt!==et&&(yt=et,dt&&(et=1-et),s.clearDepth(et))},reset:function(){N=!1,K=null,mt=null,yt=null,dt=!1}}}function i(){let N=!1,dt=null,K=null,mt=null,yt=null,et=null,Pt=null,At=null,Ae=null;return{setTest:function(ve){N||(ve?at(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(ve){dt!==ve&&!N&&(s.stencilMask(ve),dt=ve)},setFunc:function(ve,Pn,Ln){(K!==ve||mt!==Pn||yt!==Ln)&&(s.stencilFunc(ve,Pn,Ln),K=ve,mt=Pn,yt=Ln)},setOp:function(ve,Pn,Ln){(et!==ve||Pt!==Pn||At!==Ln)&&(s.stencilOp(ve,Pn,Ln),et=ve,Pt=Pn,At=Ln)},setLocked:function(ve){N=ve},setClear:function(ve){Ae!==ve&&(s.clearStencil(ve),Ae=ve)},reset:function(){N=!1,dt=null,K=null,mt=null,yt=null,et=null,Pt=null,At=null,Ae=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,y=null,M=null,A=null,T=null,P=null,v=new Kt(0,0,0),R=0,L=!1,D=null,U=null,W=null,J=null,O=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,j=0;const it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(it)[1]),k=j>=1):it.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),k=j>=2);let ct=null,ht={};const wt=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),ge=new Se().fromArray(wt),ae=new Se().fromArray(te);function $(N,dt,K,mt){const yt=new Uint8Array(4),et=s.createTexture();s.bindTexture(N,et),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<K;Pt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(dt+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return et}const ut={};ut[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),ut[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ut[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(s.DEPTH_TEST),a.setFunc(gs),vt(!1),gt(Ic),at(s.CULL_FACE),rt(ci);function at(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Ut(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Vt(N,dt){return u[N]!==dt?(s.bindFramebuffer(N,dt),u[N]=dt,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ot(N,dt){let K=g,mt=!1;if(N){K=f.get(dt),K===void 0&&(K=[],f.set(dt,K));const yt=N.textures;if(K.length!==yt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let et=0,Pt=yt.length;et<Pt;et++)K[et]=s.COLOR_ATTACHMENT0+et;K.length=yt.length,mt=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,mt=!0);mt&&s.drawBuffers(K)}function le(N){return _!==N?(s.useProgram(N),_=N,!0):!1}const Xt={[Ni]:s.FUNC_ADD,[ru]:s.FUNC_SUBTRACT,[au]:s.FUNC_REVERSE_SUBTRACT};Xt[ou]=s.MIN,Xt[cu]=s.MAX;const tt={[lu]:s.ZERO,[hu]:s.ONE,[uu]:s.SRC_COLOR,[Ka]:s.SRC_ALPHA,[_u]:s.SRC_ALPHA_SATURATE,[mu]:s.DST_COLOR,[fu]:s.DST_ALPHA,[du]:s.ONE_MINUS_SRC_COLOR,[$a]:s.ONE_MINUS_SRC_ALPHA,[gu]:s.ONE_MINUS_DST_COLOR,[pu]:s.ONE_MINUS_DST_ALPHA,[xu]:s.CONSTANT_COLOR,[vu]:s.ONE_MINUS_CONSTANT_COLOR,[Mu]:s.CONSTANT_ALPHA,[Su]:s.ONE_MINUS_CONSTANT_ALPHA};function rt(N,dt,K,mt,yt,et,Pt,At,Ae,ve){if(N===ci){p===!0&&(Ut(s.BLEND),p=!1);return}if(p===!1&&(at(s.BLEND),p=!0),N!==su){if(N!==m||ve!==L){if((b!==Ni||A!==Ni)&&(s.blendEquation(s.FUNC_ADD),b=Ni,A=Ni),ve)switch(N){case bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qs:s.blendFunc(s.ONE,s.ONE);break;case Uc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:se("WebGLState: Invalid blending: ",N);break}else switch(N){case bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Uc:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",N);break}y=null,M=null,T=null,P=null,v.set(0,0,0),R=0,m=N,L=ve}return}yt=yt||dt,et=et||K,Pt=Pt||mt,(dt!==b||yt!==A)&&(s.blendEquationSeparate(Xt[dt],Xt[yt]),b=dt,A=yt),(K!==y||mt!==M||et!==T||Pt!==P)&&(s.blendFuncSeparate(tt[K],tt[mt],tt[et],tt[Pt]),y=K,M=mt,T=et,P=Pt),(At.equals(v)===!1||Ae!==R)&&(s.blendColor(At.r,At.g,At.b,Ae),v.copy(At),R=Ae),m=N,L=!1}function st(N,dt){N.side===ze?Ut(s.CULL_FACE):at(s.CULL_FACE);let K=N.side===on;dt&&(K=!K),vt(K),N.blending===bi&&N.transparent===!1?rt(ci):rt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const mt=N.stencilWrite;o.setTest(mt),mt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Lt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function gt(N){N!==nu?(at(s.CULL_FACE),N!==U&&(N===Ic?s.cullFace(s.BACK):N===iu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),U=N}function Bt(N){N!==W&&(k&&s.lineWidth(N),W=N)}function Lt(N,dt,K){N?(at(s.POLYGON_OFFSET_FILL),(J!==dt||O!==K)&&(J=dt,O=K,a.getReversed()&&(dt=-dt),s.polygonOffset(dt,K))):Ut(s.POLYGON_OFFSET_FILL)}function Wt(N){N?at(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function qt(N){N===void 0&&(N=s.TEXTURE0+q-1),ct!==N&&(s.activeTexture(N),ct=N)}function I(N,dt,K){K===void 0&&(ct===null?K=s.TEXTURE0+q-1:K=ct);let mt=ht[K];mt===void 0&&(mt={type:void 0,texture:void 0},ht[K]=mt),(mt.type!==N||mt.texture!==dt)&&(ct!==K&&(s.activeTexture(K),ct=K),s.bindTexture(N,dt||ut[N]),mt.type=N,mt.texture=dt)}function fe(){const N=ht[ct];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ie(){try{s.compressedTexImage2D(...arguments)}catch(N){se("WebGLState:",N)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(N){se("WebGLState:",N)}}function x(){try{s.texSubImage2D(...arguments)}catch(N){se("WebGLState:",N)}}function B(){try{s.texSubImage3D(...arguments)}catch(N){se("WebGLState:",N)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(N){se("WebGLState:",N)}}function Y(){try{s.compressedTexSubImage3D(...arguments)}catch(N){se("WebGLState:",N)}}function ot(){try{s.texStorage2D(...arguments)}catch(N){se("WebGLState:",N)}}function lt(){try{s.texStorage3D(...arguments)}catch(N){se("WebGLState:",N)}}function Z(){try{s.texImage2D(...arguments)}catch(N){se("WebGLState:",N)}}function Q(){try{s.texImage3D(...arguments)}catch(N){se("WebGLState:",N)}}function ft(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function Dt(N,dt){d[N]!==dt&&(s.pixelStorei(N,dt),d[N]=dt)}function _t(N){ge.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),ge.copy(N))}function pt(N){ae.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ae.copy(N))}function Ft(N,dt){let K=l.get(dt);K===void 0&&(K=new WeakMap,l.set(dt,K));let mt=K.get(N);mt===void 0&&(mt=s.getUniformBlockIndex(dt,N.name),K.set(N,mt))}function zt(N,dt){const mt=l.get(dt).get(N);c.get(dt)!==mt&&(s.uniformBlockBinding(dt,mt,N.__bindingPointIndex),c.set(dt,mt))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},ct=null,ht={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,y=null,M=null,A=null,T=null,P=null,v=new Kt(0,0,0),R=0,L=!1,D=null,U=null,W=null,J=null,O=null,ge.set(0,0,s.canvas.width,s.canvas.height),ae.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Ut,bindFramebuffer:Vt,drawBuffers:Ot,useProgram:le,setBlending:rt,setMaterial:st,setFlipSided:vt,setCullFace:gt,setLineWidth:Bt,setPolygonOffset:Lt,setScissorTest:Wt,activeTexture:qt,bindTexture:I,unbindTexture:fe,compressedTexImage2D:ie,compressedTexImage3D:C,texImage2D:Z,texImage3D:Q,pixelStorei:Dt,getParameter:ft,updateUBOMapping:Ft,uniformBlockBinding:zt,texStorage2D:ot,texStorage3D:lt,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:_t,viewport:pt,reset:Zt}}function n_(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return g?new OffscreenCanvas(C,x):$r("canvas")}function p(C,x,B){let G=1;const Y=ie(C);if((Y.width>B||Y.height>B)&&(G=B/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ot=Math.floor(G*Y.width),lt=Math.floor(G*Y.height);u===void 0&&(u=_(ot,lt));const Z=x?_(ot,lt):u;return Z.width=ot,Z.height=lt,Z.getContext("2d").drawImage(C,0,0,ot,lt),Gt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ot+"x"+lt+")."),Z}else return"data"in C&&Gt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function m(C){return C.generateMipmaps}function b(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(C,x,B,G,Y,ot=!1){if(C!==null){if(s[C]!==void 0)return s[C];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let lt;G&&(lt=t.get("EXT_texture_norm16"),lt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===s.RED&&(B===s.FLOAT&&(Z=s.R32F),B===s.HALF_FLOAT&&(Z=s.R16F),B===s.UNSIGNED_BYTE&&(Z=s.R8),B===s.UNSIGNED_SHORT&&lt&&(Z=lt.R16_EXT),B===s.SHORT&&lt&&(Z=lt.R16_SNORM_EXT)),x===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.R8UI),B===s.UNSIGNED_SHORT&&(Z=s.R16UI),B===s.UNSIGNED_INT&&(Z=s.R32UI),B===s.BYTE&&(Z=s.R8I),B===s.SHORT&&(Z=s.R16I),B===s.INT&&(Z=s.R32I)),x===s.RG&&(B===s.FLOAT&&(Z=s.RG32F),B===s.HALF_FLOAT&&(Z=s.RG16F),B===s.UNSIGNED_BYTE&&(Z=s.RG8),B===s.UNSIGNED_SHORT&&lt&&(Z=lt.RG16_EXT),B===s.SHORT&&lt&&(Z=lt.RG16_SNORM_EXT)),x===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RG8UI),B===s.UNSIGNED_SHORT&&(Z=s.RG16UI),B===s.UNSIGNED_INT&&(Z=s.RG32UI),B===s.BYTE&&(Z=s.RG8I),B===s.SHORT&&(Z=s.RG16I),B===s.INT&&(Z=s.RG32I)),x===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),B===s.UNSIGNED_INT&&(Z=s.RGB32UI),B===s.BYTE&&(Z=s.RGB8I),B===s.SHORT&&(Z=s.RGB16I),B===s.INT&&(Z=s.RGB32I)),x===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),B===s.UNSIGNED_INT&&(Z=s.RGBA32UI),B===s.BYTE&&(Z=s.RGBA8I),B===s.SHORT&&(Z=s.RGBA16I),B===s.INT&&(Z=s.RGBA32I)),x===s.RGB&&(B===s.UNSIGNED_SHORT&&lt&&(Z=lt.RGB16_EXT),B===s.SHORT&&lt&&(Z=lt.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),x===s.RGBA){const Q=ot?Kr:re.getTransfer(Y);B===s.FLOAT&&(Z=s.RGBA32F),B===s.HALF_FLOAT&&(Z=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Z=Q===de?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&lt&&(Z=lt.RGBA16_EXT),B===s.SHORT&&lt&&(Z=lt.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function A(C,x){let B;return C?x===null||x===Wn||x===Zs?B=s.DEPTH24_STENCIL8:x===Tn?B=s.DEPTH32F_STENCIL8:x===Ys&&(B=s.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Wn||x===Zs?B=s.DEPTH_COMPONENT24:x===Tn?B=s.DEPTH_COMPONENT32F:x===Ys&&(B=s.DEPTH_COMPONENT16),B}function T(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Je&&C.minFilter!==Xe?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function P(C){const x=C.target;x.removeEventListener("dispose",P),R(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(C){const x=C.target;x.removeEventListener("dispose",v),D(x)}function R(C){const x=n.get(C);if(x.__webglInit===void 0)return;const B=C.source,G=f.get(B);if(G){const Y=G[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&L(C),Object.keys(G).length===0&&f.delete(B)}n.remove(C)}function L(C){const x=n.get(C);s.deleteTexture(x.__webglTexture);const B=C.source,G=f.get(B);delete G[x.__cacheKey],a.memory.textures--}function D(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let Y=0;Y<x.__webglFramebuffer[G].length;Y++)s.deleteFramebuffer(x.__webglFramebuffer[G][Y]);else s.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)s.deleteFramebuffer(x.__webglFramebuffer[G]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=C.textures;for(let G=0,Y=B.length;G<Y;G++){const ot=n.get(B[G]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(B[G])}n.remove(C)}let U=0;function W(){U=0}function J(){return U}function O(C){U=C}function q(){const C=U;return C>=i.maxTextures&&Gt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),U+=1,C}function k(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function j(C,x){const B=n.get(C);if(C.isVideoTexture&&I(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const G=C.image;if(G===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(B,C,x);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+x)}function it(C,x){const B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Ut(B,C,x);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+x)}function ct(C,x){const B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){Ut(B,C,x);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+x)}function ht(C,x){const B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Vt(B,C,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+x)}const wt={[zi]:s.REPEAT,[oi]:s.CLAMP_TO_EDGE,[ro]:s.MIRRORED_REPEAT},te={[Je]:s.NEAREST,[bu]:s.NEAREST_MIPMAP_NEAREST,[or]:s.NEAREST_MIPMAP_LINEAR,[Xe]:s.LINEAR,[fa]:s.LINEAR_MIPMAP_NEAREST,[Oi]:s.LINEAR_MIPMAP_LINEAR},ge={[Au]:s.NEVER,[Du]:s.ALWAYS,[Ru]:s.LESS,[ic]:s.LEQUAL,[Cu]:s.EQUAL,[sc]:s.GEQUAL,[Pu]:s.GREATER,[Lu]:s.NOTEQUAL};function ae(C,x){if(x.type===Tn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Xe||x.magFilter===fa||x.magFilter===or||x.magFilter===Oi||x.minFilter===Xe||x.minFilter===fa||x.minFilter===or||x.minFilter===Oi)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,wt[x.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,wt[x.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,wt[x.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,te[x.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,te[x.minFilter]),x.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ge[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Je||x.minFilter!==or&&x.minFilter!==Oi||x.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function $(C,x){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",P));const G=x.source;let Y=f.get(G);Y===void 0&&(Y={},f.set(G,Y));const ot=k(x);if(ot!==C.__cacheKey){Y[ot]===void 0&&(Y[ot]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[ot].usedTimes++;const lt=Y[C.__cacheKey];lt!==void 0&&(Y[C.__cacheKey].usedTimes--,lt.usedTimes===0&&L(x)),C.__cacheKey=ot,C.__webglTexture=Y[ot].texture}return B}function ut(C,x,B){return Math.floor(Math.floor(C/B)/x)}function at(C,x,B,G){const ot=C.updateRanges;if(ot.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,B,G,x.data);else{ot.sort((Dt,_t)=>Dt.start-_t.start);let lt=0;for(let Dt=1;Dt<ot.length;Dt++){const _t=ot[lt],pt=ot[Dt],Ft=_t.start+_t.count,zt=ut(pt.start,x.width,4),Zt=ut(_t.start,x.width,4);pt.start<=Ft+1&&zt===Zt&&ut(pt.start+pt.count-1,x.width,4)===zt?_t.count=Math.max(_t.count,pt.start+pt.count-_t.start):(++lt,ot[lt]=pt)}ot.length=lt+1;const Z=e.getParameter(s.UNPACK_ROW_LENGTH),Q=e.getParameter(s.UNPACK_SKIP_PIXELS),ft=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Dt=0,_t=ot.length;Dt<_t;Dt++){const pt=ot[Dt],Ft=Math.floor(pt.start/4),zt=Math.ceil(pt.count/4),Zt=Ft%x.width,N=Math.floor(Ft/x.width),dt=zt,K=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,Zt,N,dt,K,B,G,x.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(s.UNPACK_SKIP_ROWS,ft)}}function Ut(C,x,B){let G=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=s.TEXTURE_3D);const Y=$(C,x),ot=x.source;e.bindTexture(G,C.__webglTexture,s.TEXTURE0+B);const lt=n.get(ot);if(ot.version!==lt.__version||Y===!0){if(e.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const K=re.getPrimaries(re.workingColorSpace),mt=x.colorSpace===Bn?null:re.getPrimaries(x.colorSpace),yt=x.colorSpace===Bn||K===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=p(x.image,!1,i.maxTextureSize);Q=fe(x,Q);const ft=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type);let _t=M(x.internalFormat,ft,Dt,x.normalized,x.colorSpace,x.isVideoTexture);ae(G,x);let pt;const Ft=x.mipmaps,zt=x.isVideoTexture!==!0,Zt=lt.__version===void 0||Y===!0,N=ot.dataReady,dt=T(x,Q);if(x.isDepthTexture)_t=A(x.format===Bi,x.type),Zt&&(zt?e.texStorage2D(s.TEXTURE_2D,1,_t,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,_t,Q.width,Q.height,0,ft,Dt,null));else if(x.isDataTexture)if(Ft.length>0){zt&&Zt&&e.texStorage2D(s.TEXTURE_2D,dt,_t,Ft[0].width,Ft[0].height);for(let K=0,mt=Ft.length;K<mt;K++)pt=Ft[K],zt?N&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,pt.width,pt.height,ft,Dt,pt.data):e.texImage2D(s.TEXTURE_2D,K,_t,pt.width,pt.height,0,ft,Dt,pt.data);x.generateMipmaps=!1}else zt?(Zt&&e.texStorage2D(s.TEXTURE_2D,dt,_t,Q.width,Q.height),N&&at(x,Q,ft,Dt)):e.texImage2D(s.TEXTURE_2D,0,_t,Q.width,Q.height,0,ft,Dt,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,_t,Ft[0].width,Ft[0].height,Q.depth);for(let K=0,mt=Ft.length;K<mt;K++)if(pt=Ft[K],x.format!==An)if(ft!==null)if(zt){if(N)if(x.layerUpdates.size>0){const yt=Sl(pt.width,pt.height,x.format,x.type);for(const et of x.layerUpdates){const Pt=pt.data.subarray(et*yt/pt.data.BYTES_PER_ELEMENT,(et+1)*yt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,et,pt.width,pt.height,1,ft,Pt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,_t,pt.width,pt.height,Q.depth,0,pt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,pt.width,pt.height,Q.depth,ft,Dt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,_t,pt.width,pt.height,Q.depth,0,ft,Dt,pt.data)}else{zt&&Zt&&e.texStorage2D(s.TEXTURE_2D,dt,_t,Ft[0].width,Ft[0].height);for(let K=0,mt=Ft.length;K<mt;K++)pt=Ft[K],x.format!==An?ft!==null?zt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,_t,pt.width,pt.height,0,pt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?N&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,pt.width,pt.height,ft,Dt,pt.data):e.texImage2D(s.TEXTURE_2D,K,_t,pt.width,pt.height,0,ft,Dt,pt.data)}else if(x.isDataArrayTexture)if(zt){if(Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,_t,Q.width,Q.height,Q.depth),N)if(x.layerUpdates.size>0){const K=Sl(Q.width,Q.height,x.format,x.type);for(const mt of x.layerUpdates){const yt=Q.data.subarray(mt*K/Q.data.BYTES_PER_ELEMENT,(mt+1)*K/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,mt,Q.width,Q.height,1,ft,Dt,yt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Dt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,Q.width,Q.height,Q.depth,0,ft,Dt,Q.data);else if(x.isData3DTexture)zt?(Zt&&e.texStorage3D(s.TEXTURE_3D,dt,_t,Q.width,Q.height,Q.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Dt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,_t,Q.width,Q.height,Q.depth,0,ft,Dt,Q.data);else if(x.isFramebufferTexture){if(Zt)if(zt)e.texStorage2D(s.TEXTURE_2D,dt,_t,Q.width,Q.height);else{let K=Q.width,mt=Q.height;for(let yt=0;yt<dt;yt++)e.texImage2D(s.TEXTURE_2D,yt,_t,K,mt,0,ft,Dt,null),K>>=1,mt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in s){const K=s.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),d.add(x),K.onpaint=mt=>{const yt=mt.changedElements;for(const et of d)yt.includes(et.image)&&(et.needsUpdate=!0)},K.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{const yt=s.RGBA,et=s.RGBA,Pt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,yt,et,Pt,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(zt&&Zt){const K=ie(Ft[0]);e.texStorage2D(s.TEXTURE_2D,dt,_t,K.width,K.height)}for(let K=0,mt=Ft.length;K<mt;K++)pt=Ft[K],zt?N&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,ft,Dt,pt):e.texImage2D(s.TEXTURE_2D,K,_t,ft,Dt,pt);x.generateMipmaps=!1}else if(zt){if(Zt){const K=ie(Q);e.texStorage2D(s.TEXTURE_2D,dt,_t,K.width,K.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Dt,Q)}else e.texImage2D(s.TEXTURE_2D,0,_t,ft,Dt,Q);m(x)&&b(G),lt.__version=ot.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Vt(C,x,B){if(x.image.length!==6)return;const G=$(C,x),Y=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+B);const ot=n.get(Y);if(Y.version!==ot.__version||G===!0){e.activeTexture(s.TEXTURE0+B);const lt=re.getPrimaries(re.workingColorSpace),Z=x.colorSpace===Bn?null:re.getPrimaries(x.colorSpace),Q=x.colorSpace===Bn||lt===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ft=x.isCompressedTexture||x.image[0].isCompressedTexture,Dt=x.image[0]&&x.image[0].isDataTexture,_t=[];for(let et=0;et<6;et++)!ft&&!Dt?_t[et]=p(x.image[et],!0,i.maxCubemapSize):_t[et]=Dt?x.image[et].image:x.image[et],_t[et]=fe(x,_t[et]);const pt=_t[0],Ft=r.convert(x.format,x.colorSpace),zt=r.convert(x.type),Zt=M(x.internalFormat,Ft,zt,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,dt=ot.__version===void 0||G===!0,K=Y.dataReady;let mt=T(x,pt);ae(s.TEXTURE_CUBE_MAP,x);let yt;if(ft){N&&dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Zt,pt.width,pt.height);for(let et=0;et<6;et++){yt=_t[et].mipmaps;for(let Pt=0;Pt<yt.length;Pt++){const At=yt[Pt];x.format!==An?Ft!==null?N?K&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,0,0,At.width,At.height,Ft,At.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,Zt,At.width,At.height,0,At.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,0,0,At.width,At.height,Ft,zt,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt,Zt,At.width,At.height,0,Ft,zt,At.data)}}}else{if(yt=x.mipmaps,N&&dt){yt.length>0&&mt++;const et=ie(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Zt,et.width,et.height)}for(let et=0;et<6;et++)if(Dt){N?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,_t[et].width,_t[et].height,Ft,zt,_t[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Zt,_t[et].width,_t[et].height,0,Ft,zt,_t[et].data);for(let Pt=0;Pt<yt.length;Pt++){const Ae=yt[Pt].image[et].image;N?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,0,0,Ae.width,Ae.height,Ft,zt,Ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,Zt,Ae.width,Ae.height,0,Ft,zt,Ae.data)}}else{N?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ft,zt,_t[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Zt,Ft,zt,_t[et]);for(let Pt=0;Pt<yt.length;Pt++){const At=yt[Pt];N?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,0,0,Ft,zt,At.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Pt+1,Zt,Ft,zt,At.image[et])}}}m(x)&&b(s.TEXTURE_CUBE_MAP),ot.__version=Y.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Ot(C,x,B,G,Y,ot){const lt=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),Q=M(B.internalFormat,lt,Z,B.normalized,B.colorSpace),ft=n.get(x),Dt=n.get(B);if(Dt.__renderTarget=x,!ft.__hasExternalTextures){const _t=Math.max(1,x.width>>ot),pt=Math.max(1,x.height>>ot);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,ot,Q,_t,pt,x.depth,0,lt,Z,null):e.texImage2D(Y,ot,Q,_t,pt,0,lt,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),qt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,Y,Dt.__webglTexture,0,Wt(x)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,Y,Dt.__webglTexture,ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function le(C,x,B){if(s.bindRenderbuffer(s.RENDERBUFFER,C),x.depthBuffer){const G=x.depthTexture,Y=G&&G.isDepthTexture?G.type:null,ot=A(x.stencilBuffer,Y),lt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;qt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(x),ot,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(x),ot,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ot,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,C)}else{const G=x.textures;for(let Y=0;Y<G.length;Y++){const ot=G[Y],lt=r.convert(ot.format,ot.colorSpace),Z=r.convert(ot.type),Q=M(ot.internalFormat,lt,Z,ot.normalized,ot.colorSpace);qt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(x),Q,x.width,x.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(x),Q,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Q,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(C,x,B){const G=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ae(s.TEXTURE_CUBE_MAP,x.depthTexture);const ft=r.convert(x.depthTexture.format),Dt=r.convert(x.depthTexture.type);let _t;x.depthTexture.format===hi?_t=s.DEPTH_COMPONENT24:x.depthTexture.format===Bi&&(_t=s.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,_t,x.width,x.height,0,ft,Dt,null)}}else j(x.depthTexture,0);const ot=Y.__webglTexture,lt=Wt(x),Z=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,Q=x.depthTexture.format===Bi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===hi)qt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,Z,ot,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,Q,Z,ot,0);else if(x.depthTexture.format===Bi)qt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,Z,ot,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,Q,Z,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(C){const x=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const G=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=G}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)Xt(x.__webglFramebuffer[G],C,G);else{const G=C.texture.mipmaps;G&&G.length>0?Xt(x.__webglFramebuffer[0],C,0):Xt(x.__webglFramebuffer,C,0)}else if(B){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=s.createRenderbuffer(),le(x.__webglDepthbuffer[G],C,!1);else{const Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,ot)}}else{const G=C.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),le(x.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,ot)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(C,x,B){const G=n.get(C);x!==void 0&&Ot(G.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&tt(C)}function st(C){const x=C.texture,B=n.get(C),G=n.get(x);C.addEventListener("dispose",v);const Y=C.textures,ot=C.isWebGLCubeRenderTarget===!0,lt=Y.length>1;if(lt||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=x.version,a.memory.textures++),ot){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let Q=0;Q<x.mipmaps.length;Q++)B.__webglFramebuffer[Z][Q]=s.createFramebuffer()}else B.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Z]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(lt)for(let Z=0,Q=Y.length;Z<Q;Z++){const ft=n.get(Y[Z]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&qt(C)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){const Q=Y[Z];B.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const ft=r.convert(Q.format,Q.colorSpace),Dt=r.convert(Q.type),_t=M(Q.internalFormat,ft,Dt,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),pt=Wt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),le(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),ae(s.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Ot(B.__webglFramebuffer[Z][Q],C,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else Ot(B.__webglFramebuffer[Z],C,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(x)&&b(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let Z=0,Q=Y.length;Z<Q;Z++){const ft=Y[Z],Dt=n.get(ft);let _t=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,Dt.__webglTexture),ae(_t,ft),Ot(B.__webglFramebuffer,C,ft,s.COLOR_ATTACHMENT0+Z,_t,0),m(ft)&&b(_t)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,G.__webglTexture),ae(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Ot(B.__webglFramebuffer[Q],C,x,s.COLOR_ATTACHMENT0,Z,Q);else Ot(B.__webglFramebuffer,C,x,s.COLOR_ATTACHMENT0,Z,0);m(x)&&b(Z),e.unbindTexture()}C.depthBuffer&&tt(C)}function vt(C){const x=C.textures;for(let B=0,G=x.length;B<G;B++){const Y=x[B];if(m(Y)){const ot=y(C),lt=n.get(Y).__webglTexture;e.bindTexture(ot,lt),b(ot),e.unbindTexture()}}}const gt=[],Bt=[];function Lt(C){if(C.samples>0){if(qt(C)===!1){const x=C.textures,B=C.width,G=C.height;let Y=s.COLOR_BUFFER_BIT;const ot=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(C),Z=x.length>1;if(Z)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[ft]);const Dt=n.get(x[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Dt,0)}s.blitFramebuffer(0,0,B,G,0,0,B,G,Y,s.NEAREST),c===!0&&(gt.length=0,Bt.length=0,gt.push(s.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(gt.push(ot),Bt.push(ot),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Bt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,lt.__webglColorRenderbuffer[ft]);const Dt=n.get(x[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Dt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const x=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Wt(C){return Math.min(i.maxSamples,C.samples)}function qt(C){const x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(C){const x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function fe(C,x){const B=C.colorSpace,G=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Js&&B!==Bn&&(re.getTransfer(B)===de?(G!==An||Y!==pn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",B)),x}function ie(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=W,this.getTextureUnits=J,this.setTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=it,this.setTexture3D=ct,this.setTextureCube=ht,this.rebindTextures=rt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function i_(s,t){function e(n,i=Bn){let r;const a=re.getTransfer(i);if(n===pn)return s.UNSIGNED_BYTE;if(n===$o)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return s.BYTE;if(n===ch)return s.SHORT;if(n===Ys)return s.UNSIGNED_SHORT;if(n===Ko)return s.INT;if(n===Wn)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===Xn)return s.HALF_FLOAT;if(n===uh)return s.ALPHA;if(n===dh)return s.RGB;if(n===An)return s.RGBA;if(n===hi)return s.DEPTH_COMPONENT;if(n===Bi)return s.DEPTH_STENCIL;if(n===jo)return s.RED;if(n===tc)return s.RED_INTEGER;if(n===Hi)return s.RG;if(n===ec)return s.RG_INTEGER;if(n===nc)return s.RGBA_INTEGER;if(n===Gr||n===Vr||n===Wr||n===Xr)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===oo||n===co||n===lo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ho||n===uo||n===fo||n===po||n===mo||n===Zr||n===go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ho||n===uo)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===po)return r.COMPRESSED_R11_EAC;if(n===mo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zr)return r.COMPRESSED_RG11_EAC;if(n===go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_o||n===xo||n===vo||n===Mo||n===So||n===yo||n===wo||n===bo||n===Eo||n===To||n===Ao||n===Ro||n===Co||n===Po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_o)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Po)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lo||n===Do||n===Io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lo)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===No||n===Jr||n===Fo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r_=`
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

}`;class a_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Sh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new en({vertexShader:s_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new V(new Ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o_ extends Vi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",p=new a_,m={},b=e.getContextAttributes();let y=null,M=null;const A=[],T=[],P=new nt;let v=null;const R=new an;R.viewport=new Se;const L=new an;L.viewport=new Se;const D=[R,L],U=new gf;let W=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ut=A[$];return ut===void 0&&(ut=new va,A[$]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function($){let ut=A[$];return ut===void 0&&(ut=new va,A[$]=ut),ut.getGripSpace()},this.getHand=function($){let ut=A[$];return ut===void 0&&(ut=new va,A[$]=ut),ut.getHandSpace()};function O($){const ut=T.indexOf($.inputSource);if(ut===-1)return;const at=A[ut];at!==void 0&&(at.update($.inputSource,$.frame,l||a),at.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",k);for(let $=0;$<A.length;$++){const ut=T[$];ut!==null&&(T[$]=null,A[$].disconnect(ut))}W=null,J=null,p.reset();for(const $ in m)delete m[$];t.setRenderTarget(y),f=null,u=null,d=null,i=null,M=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",q),i.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,Ut=null,Vt=null;b.depth&&(Vt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=b.stencil?Bi:hi,Ut=b.stencil?Zs:Wn);const Ot={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ot),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Cn(u.textureWidth,u.textureHeight,{format:An,type:pn,depthTexture:new vs(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const at={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Cn(f.framebufferWidth,f.framebufferHeight,{format:An,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k($){for(let ut=0;ut<$.removed.length;ut++){const at=$.removed[ut],Ut=T.indexOf(at);Ut>=0&&(T[Ut]=null,A[Ut].disconnect(at))}for(let ut=0;ut<$.added.length;ut++){const at=$.added[ut];let Ut=T.indexOf(at);if(Ut===-1){for(let Ot=0;Ot<A.length;Ot++)if(Ot>=T.length){T.push(at),Ut=Ot;break}else if(T[Ot]===null){T[Ot]=at,Ut=Ot;break}if(Ut===-1)break}const Vt=A[Ut];Vt&&Vt.connect(at)}}const j=new w,it=new w;function ct($,ut,at){j.setFromMatrixPosition(ut.matrixWorld),it.setFromMatrixPosition(at.matrixWorld);const Ut=j.distanceTo(it),Vt=ut.projectionMatrix.elements,Ot=at.projectionMatrix.elements,le=Vt[14]/(Vt[10]-1),Xt=Vt[14]/(Vt[10]+1),tt=(Vt[9]+1)/Vt[5],rt=(Vt[9]-1)/Vt[5],st=(Vt[8]-1)/Vt[0],vt=(Ot[8]+1)/Ot[0],gt=le*st,Bt=le*vt,Lt=Ut/(-st+vt),Wt=Lt*-st;if(ut.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Wt),$.translateZ(Lt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Vt[10]===-1)$.projectionMatrix.copy(ut.projectionMatrix),$.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const qt=le+Lt,I=Xt+Lt,fe=gt-Wt,ie=Bt+(Ut-Wt),C=tt*Xt/I*qt,x=rt*Xt/I*qt;$.projectionMatrix.makePerspective(fe,ie,C,x,qt,I),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ht($,ut){ut===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ut.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let ut=$.near,at=$.far;p.texture!==null&&(p.depthNear>0&&(ut=p.depthNear),p.depthFar>0&&(at=p.depthFar)),U.near=L.near=R.near=ut,U.far=L.far=R.far=at,(W!==U.near||J!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),W=U.near,J=U.far),U.layers.mask=$.layers.mask|6,R.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;const Ut=$.parent,Vt=U.cameras;ht(U,Ut);for(let Ot=0;Ot<Vt.length;Ot++)ht(Vt[Ot],Ut);Vt.length===2?ct(U,R,L):U.projectionMatrix.copy(R.projectionMatrix),wt($,U,Ut)};function wt($,ut,at){at===null?$.matrix.copy(ut.matrixWorld):($.matrix.copy(at.matrixWorld),$.matrix.invert(),$.matrix.multiply(ut.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ut.projectionMatrix),$.projectionMatrixInverse.copy(ut.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=xs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function($){return m[$]};let te=null;function ge($,ut){if(h=ut.getViewerPose(l||a),g=ut,h!==null){const at=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ut=!1;at.length!==U.cameras.length&&(U.cameras.length=0,Ut=!0);for(let Xt=0;Xt<at.length;Xt++){const tt=at[Xt];let rt=null;if(f!==null)rt=f.getViewport(tt);else{const vt=d.getViewSubImage(u,tt);rt=vt.viewport,Xt===0&&(t.setRenderTargetTextures(M,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(M))}let st=D[Xt];st===void 0&&(st=new an,st.layers.enable(Xt),st.viewport=new Se,D[Xt]=st),st.matrix.fromArray(tt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(tt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(rt.x,rt.y,rt.width,rt.height),Xt===0&&(U.matrix.copy(st.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ut===!0&&U.cameras.push(st)}const Vt=i.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Xt=d.getDepthInformation(at[0]);Xt&&Xt.isValid&&Xt.texture&&p.init(Xt,i.renderState)}if(Vt&&Vt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Xt=0;Xt<at.length;Xt++){const tt=at[Xt].camera;if(tt){let rt=m[tt];rt||(rt=new Sh,m[tt]=rt);const st=d.getCameraImage(tt);rt.sourceTexture=st}}}}for(let at=0;at<A.length;at++){const Ut=T[at],Vt=A[at];Ut!==null&&Vt!==void 0&&Vt.update(Ut,ut,l||a)}te&&te($,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}const ae=new Nh;ae.setAnimationLoop(ge),this.setAnimationLoop=function($){te=$},this.dispose=function(){}}}const c_=new jt,Gh=new Yt;Gh.set(-1,0,0,0,1,0,0,0,1);function l_(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Dh(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,y,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,b,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=t.get(m),y=b.envMap,M=b.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Gh),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function h_(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,A){const T=A.program;n.uniformBlockBinding(M,T)}function l(M,A){let T=i[M.id];T===void 0&&(p(M),T=h(M),i[M.id]=T,M.addEventListener("dispose",b));const P=A.program;n.updateUBOMapping(M,P);const v=t.render.frame;r[M.id]!==v&&(u(M),r[M.id]=v)}function h(M){const A=d();M.__bindingPointIndex=A;const T=s.createBuffer(),P=M.__size,v=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,P,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,T),T}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const A=i[M.id],T=M.uniforms,P=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let v=0,R=T.length;v<R;v++){const L=T[v];if(Array.isArray(L))for(let D=0,U=L.length;D<U;D++)f(L[D],v,D,P);else f(L,v,0,P)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,A,T,P){if(_(M,A,T,P)===!0){const v=M.__offset,R=M.value;if(Array.isArray(R)){let L=0;for(let D=0;D<R.length;D++){const U=R[D],W=m(U);g(U,M.__data,L),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,M.__data)}}function g(M,A,T){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,T)}function _(M,A,T,P){const v=M.value,R=A+"_"+T;if(P[R]===void 0)return typeof v=="number"||typeof v=="boolean"?P[R]=v:ArrayBuffer.isView(v)?P[R]=v.slice():P[R]=v.clone(),!0;{const L=P[R];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return P[R]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function p(M){const A=M.uniforms;let T=0;const P=16;for(let R=0,L=A.length;R<L;R++){const D=Array.isArray(A[R])?A[R]:[A[R]];for(let U=0,W=D.length;U<W;U++){const J=D[U],O=Array.isArray(J.value)?J.value:[J.value];for(let q=0,k=O.length;q<k;q++){const j=O[q],it=m(j),ct=T%P,ht=ct%it.boundary,wt=ct+ht;T+=ht,wt!==0&&P-wt<it.storage&&(T+=P-wt),J.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=T,T+=it.storage}}}const v=T%P;return v>0&&(T+=P-v),M.__size=T,M.__cache={},this}function m(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",M),A}function b(M){const A=M.target;A.removeEventListener("dispose",b);const T=a.indexOf(A.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function y(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:y}}const u_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function d_(){return Un===null&&(Un=new xh(u_,16,16,Hi,Xn),Un.name="DFG_LUT",Un.minFilter=Xe,Un.magFilter=Xe,Un.wrapS=oi,Un.wrapT=oi,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class f_{constructor(t={}){const{canvas:e=Uu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=pn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=f,p=new Set([nc,ec,tc]),m=new Set([pn,Wn,Ys,Zs,$o,Qo]),b=new Uint32Array(4),y=new Int32Array(4),M=new w;let A=null,T=null;const P=[],v=[];let R=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,U=null,W=null,J=null,O=null;this._outputColorSpace=Ne;let q=0,k=0,j=null,it=-1,ct=null;const ht=new Se,wt=new Se;let te=null;const ge=new Kt(0);let ae=0,$=e.width,ut=e.height,at=1,Ut=null,Vt=null;const Ot=new Se(0,0,$,ut),le=new Se(0,0,$,ut);let Xt=!1;const tt=new uc;let rt=!1,st=!1;const vt=new jt,gt=new w,Bt=new Se,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function qt(){return j===null?at:1}let I=n;function fe(S,F){return e.getContext(S,F)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zo}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Pn,!1),I===null){const F="webgl2";if(I=fe(F,S),I===null)throw fe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw se("WebGLRenderer: "+S.message),S}let ie,C,x,B,G,Y,ot,lt,Z,Q,ft,Dt,_t,pt,Ft,zt,Zt,N,dt,K,mt,yt,et;function Pt(){ie=new dm(I),ie.init(),mt=new i_(I,ie),C=new sm(I,ie,t,mt),x=new e_(I,ie),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),W=I.createFramebuffer(),J=I.createFramebuffer(),O=I.createFramebuffer(),B=new mm(I),G=new Hg,Y=new n_(I,ie,x,G,C,mt,B),ot=new um(L),lt=new vf(I),yt=new nm(I,lt),Z=new fm(I,lt,B,yt),Q=new _m(I,Z,lt,yt,B),N=new gm(I,C,Y),Ft=new rm(G),ft=new zg(L,ot,ie,C,yt,Ft),Dt=new l_(L,G),_t=new Vg,pt=new Jg(ie),Zt=new em(L,ot,x,Q,g,c),zt=new t_(L,Q,C),et=new h_(I,B,C,x),dt=new im(I,ie,B),K=new pm(I,ie,B),B.programs=ft.programs,L.capabilities=C,L.extensions=ie,L.properties=G,L.renderLists=_t,L.shadowMap=zt,L.state=x,L.info=B}Pt(),_!==pn&&(R=new vm(_,e.width,e.height,o,i,r));const At=new o_(L,I);this.xr=At,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=ie.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ie.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(S){S!==void 0&&(at=S,this.setSize($,ut,!1))},this.getSize=function(S){return S.set($,ut)},this.setSize=function(S,F,X=!0){if(At.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,ut=F,e.width=Math.floor(S*at),e.height=Math.floor(F*at),X===!0&&(e.style.width=S+"px",e.style.height=F+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set($*at,ut*at).floor()},this.setDrawingBufferSize=function(S,F,X){$=S,ut=F,at=X,e.width=Math.floor(S*X),e.height=Math.floor(F*X),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(_===pn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ht)},this.getViewport=function(S){return S.copy(Ot)},this.setViewport=function(S,F,X,z){S.isVector4?Ot.set(S.x,S.y,S.z,S.w):Ot.set(S,F,X,z),x.viewport(ht.copy(Ot).multiplyScalar(at).round())},this.getScissor=function(S){return S.copy(le)},this.setScissor=function(S,F,X,z){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,F,X,z),x.scissor(wt.copy(le).multiplyScalar(at).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(S){x.setScissorTest(Xt=S)},this.setOpaqueSort=function(S){Ut=S},this.setTransparentSort=function(S){Vt=S},this.getClearColor=function(S){return S.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,X=!0){let z=0;if(S){let H=!1;if(j!==null){const St=j.texture.format;H=p.has(St)}if(H){const St=j.texture.type,Et=m.has(St),Mt=Zt.getClearColor(),Rt=Zt.getClearAlpha(),It=Mt.r,Jt=Mt.g,ee=Mt.b;Et?(b[0]=It,b[1]=Jt,b[2]=ee,b[3]=Rt,I.clearBufferuiv(I.COLOR,0,b)):(y[0]=It,y[1]=Jt,y[2]=ee,y[3]=Rt,I.clearBufferiv(I.COLOR,0,y))}else z|=I.COLOR_BUFFER_BIT}F&&(z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Pn,!1),Zt.dispose(),_t.dispose(),pt.dispose(),G.dispose(),ot.dispose(),Q.dispose(),yt.dispose(),et.dispose(),ft.dispose(),At.dispose(),At.removeEventListener("sessionstart",Ec),At.removeEventListener("sessionend",Tc),Ri.stop()};function Ae(S){S.preventDefault(),zc("WebGLRenderer: Context Lost."),D=!0}function ve(){zc("WebGLRenderer: Context Restored."),D=!1;const S=B.autoReset,F=zt.enabled,X=zt.autoUpdate,z=zt.needsUpdate,H=zt.type;Pt(),B.autoReset=S,zt.enabled=F,zt.autoUpdate=X,zt.needsUpdate=z,zt.type=H}function Pn(S){se("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ln(S){const F=S.target;F.removeEventListener("dispose",Ln),Yh(F)}function Yh(S){Zh(S),G.remove(S)}function Zh(S){const F=G.get(S).programs;F!==void 0&&(F.forEach(function(X){ft.releaseProgram(X)}),S.isShaderMaterial&&ft.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,X,z,H,St){F===null&&(F=Lt);const Et=H.isMesh&&H.matrixWorld.determinantAffine()<0,Mt=$h(S,F,X,z,H);x.setMaterial(z,Et);let Rt=X.index,It=1;if(z.wireframe===!0){if(Rt=Z.getWireframeAttribute(X),Rt===void 0)return;It=2}const Jt=X.drawRange,ee=X.attributes.position;let Nt=Jt.start*It,pe=(Jt.start+Jt.count)*It;St!==null&&(Nt=Math.max(Nt,St.start*It),pe=Math.min(pe,(St.start+St.count)*It)),Rt!==null?(Nt=Math.max(Nt,0),pe=Math.min(pe,Rt.count)):ee!=null&&(Nt=Math.max(Nt,0),pe=Math.min(pe,ee.count));const Le=pe-Nt;if(Le<0||Le===1/0)return;yt.setup(H,z,Mt,X,Rt);let Re,_e=dt;if(Rt!==null&&(Re=lt.get(Rt),_e=K,_e.setIndex(Re)),H.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*qt()),_e.setMode(I.LINES)):_e.setMode(I.TRIANGLES);else if(H.isLine){let $e=z.linewidth;$e===void 0&&($e=1),x.setLineWidth($e*qt()),H.isLineSegments?_e.setMode(I.LINES):H.isLineLoop?_e.setMode(I.LINE_LOOP):_e.setMode(I.LINE_STRIP)}else H.isPoints?_e.setMode(I.POINTS):H.isSprite&&_e.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))_e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const $e=H._multiDrawStarts,bt=H._multiDrawCounts,ln=H._multiDrawCount,ce=Rt?lt.get(Rt).bytesPerElement:1,gn=G.get(z).currentProgram.getUniforms();for(let Dn=0;Dn<ln;Dn++)gn.setValue(I,"_gl_DrawID",Dn),_e.render($e[Dn]/ce,bt[Dn])}else if(H.isInstancedMesh)_e.renderInstances(Nt,Le,H.count);else if(X.isInstancedBufferGeometry){const $e=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,bt=Math.min(X.instanceCount,$e);_e.renderInstances(Nt,Le,bt)}else _e.render(Nt,Le)};function bc(S,F,X){S.transparent===!0&&S.side===ze&&S.forceSinglePass===!1?(S.side=on,S.needsUpdate=!0,ar(S,F,X),S.side=Ei,S.needsUpdate=!0,ar(S,F,X),S.side=ze):ar(S,F,X)}this.compile=function(S,F,X=null){X===null&&(X=S),T=pt.get(X),T.init(F),v.push(T),X.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==X&&S.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const z=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const St=H.material;if(St)if(Array.isArray(St))for(let Et=0;Et<St.length;Et++){const Mt=St[Et];bc(Mt,X,H),z.add(Mt)}else bc(St,X,H),z.add(St)}),T=v.pop(),z},this.compileAsync=function(S,F,X=null){const z=this.compile(S,F,X);return new Promise(H=>{function St(){if(z.forEach(function(Et){G.get(Et).currentProgram.isReady()&&z.delete(Et)}),z.size===0){H(S);return}setTimeout(St,10)}ie.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let la=null;function Jh(S){la&&la(S)}function Ec(){Ri.stop()}function Tc(){Ri.start()}const Ri=new Nh;Ri.setAnimationLoop(Jh),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(S){la=S,At.setAnimationLoop(S),S===null?Ri.stop():Ri.start()},At.addEventListener("sessionstart",Ec),At.addEventListener("sessionend",Tc),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(S,F);const X=At.enabled===!0&&At.isPresenting===!0,z=R!==null&&(j===null||X)&&R.begin(L,j);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(F),F=At.getCamera()),S.isScene===!0&&S.onBeforeRender(L,S,F,j),T=pt.get(S,v.length),T.init(F),T.state.textureUnits=Y.getTextureUnits(),v.push(T),vt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),tt.setFromProjectionMatrix(vt,kn,F.reversedDepth),st=this.localClippingEnabled,rt=Ft.init(this.clippingPlanes,st),A=_t.get(S,P.length),A.init(),P.push(A),At.enabled===!0&&At.isPresenting===!0){const Et=L.xr.getDepthSensingMesh();Et!==null&&ha(Et,F,-1/0,L.sortObjects)}ha(S,F,0,L.sortObjects),A.finish(),L.sortObjects===!0&&A.sort(Ut,Vt,F.reversedDepth),Wt=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Wt&&Zt.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Ft.beginShadows();const H=T.state.shadowsArray;if(zt.render(H,S,F),rt===!0&&Ft.endShadows(),(z&&R.hasRenderPass())===!1){const Et=A.opaque,Mt=A.transmissive;if(T.setupLights(),F.isArrayCamera){const Rt=F.cameras;if(Mt.length>0)for(let It=0,Jt=Rt.length;It<Jt;It++){const ee=Rt[It];Rc(Et,Mt,S,ee)}Wt&&Zt.render(S);for(let It=0,Jt=Rt.length;It<Jt;It++){const ee=Rt[It];Ac(A,S,ee,ee.viewport)}}else Mt.length>0&&Rc(Et,Mt,S,F),Wt&&Zt.render(S),Ac(A,S,F)}j!==null&&k===0&&(Y.updateMultisampleRenderTarget(j),Y.updateRenderTargetMipmap(j)),z&&R.end(L),S.isScene===!0&&S.onAfterRender(L,S,F),yt.resetDefaultState(),it=-1,ct=null,v.pop(),v.length>0?(T=v[v.length-1],Y.setTextureUnits(T.state.textureUnits),rt===!0&&Ft.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?A=P[P.length-1]:A=null,U!==null&&U.renderEnd()};function ha(S,F,X,z){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||tt.intersectsSprite(S)){z&&Bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(vt);const Et=Q.update(S),Mt=S.material;Mt.visible&&A.push(S,Et,Mt,X,Bt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||tt.intersectsObject(S))){const Et=Q.update(S),Mt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Bt.copy(S.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Bt.copy(Et.boundingSphere.center)),Bt.applyMatrix4(S.matrixWorld).applyMatrix4(vt)),Array.isArray(Mt)){const Rt=Et.groups;for(let It=0,Jt=Rt.length;It<Jt;It++){const ee=Rt[It],Nt=Mt[ee.materialIndex];Nt&&Nt.visible&&A.push(S,Et,Nt,X,Bt.z,ee)}}else Mt.visible&&A.push(S,Et,Mt,X,Bt.z,null)}}const St=S.children;for(let Et=0,Mt=St.length;Et<Mt;Et++)ha(St[Et],F,X,z)}function Ac(S,F,X,z){const{opaque:H,transmissive:St,transparent:Et}=S;T.setupLightsView(X),rt===!0&&Ft.setGlobalState(L.clippingPlanes,X),z&&x.viewport(ht.copy(z)),H.length>0&&rr(H,F,X),St.length>0&&rr(St,F,X),Et.length>0&&rr(Et,F,X),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Rc(S,F,X,z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const Nt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Cn(1,1,{generateMipmaps:!0,type:Nt?Xn:pn,minFilter:Oi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace})}const St=T.state.transmissionRenderTarget[z.id],Et=z.viewport||ht;St.setSize(Et.z*L.transmissionResolutionScale,Et.w*L.transmissionResolutionScale);const Mt=L.getRenderTarget(),Rt=L.getActiveCubeFace(),It=L.getActiveMipmapLevel();L.setRenderTarget(St),L.getClearColor(ge),ae=L.getClearAlpha(),ae<1&&L.setClearColor(16777215,.5),L.clear(),Wt&&Zt.render(X);const Jt=L.toneMapping;L.toneMapping=Gn;const ee=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),rt===!0&&Ft.setGlobalState(L.clippingPlanes,z),rr(S,X,z),Y.updateMultisampleRenderTarget(St),Y.updateRenderTargetMipmap(St),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let pe=0,Le=F.length;pe<Le;pe++){const Re=F[pe],{object:_e,geometry:$e,material:bt,group:ln}=Re;if(bt.side===ze&&_e.layers.test(z.layers)){const ce=bt.side;bt.side=on,bt.needsUpdate=!0,Cc(_e,X,z,$e,bt,ln),bt.side=ce,bt.needsUpdate=!0,Nt=!0}}Nt===!0&&(Y.updateMultisampleRenderTarget(St),Y.updateRenderTargetMipmap(St))}L.setRenderTarget(Mt,Rt,It),L.setClearColor(ge,ae),ee!==void 0&&(z.viewport=ee),L.toneMapping=Jt}function rr(S,F,X){const z=F.isScene===!0?F.overrideMaterial:null;for(let H=0,St=S.length;H<St;H++){const Et=S[H],{object:Mt,geometry:Rt,group:It}=Et;let Jt=Et.material;Jt.allowOverride===!0&&z!==null&&(Jt=z),Mt.layers.test(X.layers)&&Cc(Mt,F,X,Rt,Jt,It)}}function Cc(S,F,X,z,H,St){S.onBeforeRender(L,F,X,z,H,St),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(L,F,X,z,S,St),H.transparent===!0&&H.side===ze&&H.forceSinglePass===!1?(H.side=on,H.needsUpdate=!0,L.renderBufferDirect(X,F,z,H,S,St),H.side=Ei,H.needsUpdate=!0,L.renderBufferDirect(X,F,z,H,S,St),H.side=ze):L.renderBufferDirect(X,F,z,H,S,St),S.onAfterRender(L,F,X,z,H,St)}function ar(S,F,X){F.isScene!==!0&&(F=Lt);const z=G.get(S),H=T.state.lights,St=T.state.shadowsArray,Et=H.state.version,Mt=ft.getParameters(S,H.state,St,F,X,T.state.lightProbeGridArray),Rt=ft.getProgramCacheKey(Mt);let It=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;const Jt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=ot.get(S.envMap||z.environment,Jt),z.envMapRotation=z.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,It===void 0&&(S.addEventListener("dispose",Ln),It=new Map,z.programs=It);let ee=It.get(Rt);if(ee!==void 0){if(z.currentProgram===ee&&z.lightsStateVersion===Et)return Lc(S,Mt),ee}else Mt.uniforms=ft.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,X,Mt),S.onBeforeCompile(Mt,L),ee=ft.acquireProgram(Mt,Rt),It.set(Rt,ee),z.uniforms=Mt.uniforms;const Nt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Nt.clippingPlanes=Ft.uniform),Lc(S,Mt),z.needsLights=jh(S),z.lightsStateVersion=Et,z.needsLights&&(Nt.ambientLightColor.value=H.state.ambient,Nt.lightProbe.value=H.state.probe,Nt.directionalLights.value=H.state.directional,Nt.directionalLightShadows.value=H.state.directionalShadow,Nt.spotLights.value=H.state.spot,Nt.spotLightShadows.value=H.state.spotShadow,Nt.rectAreaLights.value=H.state.rectArea,Nt.ltc_1.value=H.state.rectAreaLTC1,Nt.ltc_2.value=H.state.rectAreaLTC2,Nt.pointLights.value=H.state.point,Nt.pointLightShadows.value=H.state.pointShadow,Nt.hemisphereLights.value=H.state.hemi,Nt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Nt.spotLightMatrix.value=H.state.spotLightMatrix,Nt.spotLightMap.value=H.state.spotLightMap,Nt.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=ee,z.uniformsList=null,ee}function Pc(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=qr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Lc(S,F){const X=G.get(S);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Kh(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let X=0,z=S.length;X<z;X++){const H=S[X];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function $h(S,F,X,z,H){F.isScene!==!0&&(F=Lt),Y.resetTextureUnits();const St=F.fog,Et=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,Mt=j===null?L.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:re.workingColorSpace,Rt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,It=ot.get(z.envMap||Et,Rt),Jt=z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ee=!!X.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Nt=!!X.morphAttributes.position,pe=!!X.morphAttributes.normal,Le=!!X.morphAttributes.color;let Re=Gn;z.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Re=L.toneMapping);const _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$e=_e!==void 0?_e.length:0,bt=G.get(z),ln=T.state.lights;if(rt===!0&&(st===!0||S!==ct)){const Me=S===ct&&z.id===it;Ft.setState(z,S,Me)}let ce=!1;z.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==ln.state.version||bt.outputColorSpace!==Mt||H.isBatchedMesh&&bt.batching===!1||!H.isBatchedMesh&&bt.batching===!0||H.isBatchedMesh&&bt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&bt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&bt.instancing===!1||!H.isInstancedMesh&&bt.instancing===!0||H.isSkinnedMesh&&bt.skinning===!1||!H.isSkinnedMesh&&bt.skinning===!0||H.isInstancedMesh&&bt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&bt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&bt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&bt.instancingMorph===!1&&H.morphTexture!==null||bt.envMap!==It||z.fog===!0&&bt.fog!==St||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Ft.numPlanes||bt.numIntersection!==Ft.numIntersection)||bt.vertexAlphas!==Jt||bt.vertexTangents!==ee||bt.morphTargets!==Nt||bt.morphNormals!==pe||bt.morphColors!==Le||bt.toneMapping!==Re||bt.morphTargetsCount!==$e||!!bt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,bt.__version=z.version);let gn=bt.currentProgram;ce===!0&&(gn=ar(z,F,H),U&&z.isNodeMaterial&&U.onUpdateProgram(z,gn,bt));let Dn=!1,di=!1,Xi=!1;const xe=gn.getUniforms(),De=bt.uniforms;if(x.useProgram(gn.program)&&(Dn=!0,di=!0,Xi=!0),z.id!==it&&(it=z.id,di=!0),bt.needsLights){const Me=Kh(T.state.lightProbeGridArray,H);bt.lightProbeGrid!==Me&&(bt.lightProbeGrid=Me,di=!0)}if(Dn||ct!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),xe.setValue(I,"projectionMatrix",S.projectionMatrix),xe.setValue(I,"viewMatrix",S.matrixWorldInverse);const pi=xe.map.cameraPosition;pi!==void 0&&pi.setValue(I,gt.setFromMatrixPosition(S.matrixWorld)),C.logarithmicDepthBuffer&&xe.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&xe.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),ct!==S&&(ct=S,di=!0,Xi=!0)}if(bt.needsLights&&(ln.state.directionalShadowMap.length>0&&xe.setValue(I,"directionalShadowMap",ln.state.directionalShadowMap,Y),ln.state.spotShadowMap.length>0&&xe.setValue(I,"spotShadowMap",ln.state.spotShadowMap,Y),ln.state.pointShadowMap.length>0&&xe.setValue(I,"pointShadowMap",ln.state.pointShadowMap,Y)),H.isSkinnedMesh){xe.setOptional(I,H,"bindMatrix"),xe.setOptional(I,H,"bindMatrixInverse");const Me=H.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),xe.setValue(I,"boneTexture",Me.boneTexture,Y))}H.isBatchedMesh&&(xe.setOptional(I,H,"batchingTexture"),xe.setValue(I,"batchingTexture",H._matricesTexture,Y),xe.setOptional(I,H,"batchingIdTexture"),xe.setValue(I,"batchingIdTexture",H._indirectTexture,Y),xe.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&xe.setValue(I,"batchingColorTexture",H._colorsTexture,Y));const fi=X.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&N.update(H,X,gn),(di||bt.receiveShadow!==H.receiveShadow)&&(bt.receiveShadow=H.receiveShadow,xe.setValue(I,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(De.envMapIntensity.value=F.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=d_()),di){if(xe.setValue(I,"toneMappingExposure",L.toneMappingExposure),bt.needsLights&&Qh(De,Xi),St&&z.fog===!0&&Dt.refreshFogUniforms(De,St),Dt.refreshMaterialUniforms(De,z,at,ut,T.state.transmissionRenderTarget[S.id]),bt.needsLights&&bt.lightProbeGrid){const Me=bt.lightProbeGrid;De.probesSH.value=Me.texture,De.probesMin.value.copy(Me.boundingBox.min),De.probesMax.value.copy(Me.boundingBox.max),De.probesResolution.value.copy(Me.resolution)}qr.upload(I,Pc(bt),De,Y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(qr.upload(I,Pc(bt),De,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&xe.setValue(I,"center",H.center),xe.setValue(I,"modelViewMatrix",H.modelViewMatrix),xe.setValue(I,"normalMatrix",H.normalMatrix),xe.setValue(I,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){const Me=z.uniformsGroups;for(let pi=0,qi=Me.length;pi<qi;pi++){const Dc=Me[pi];et.update(Dc,gn),et.bind(Dc,gn)}}return gn}function Qh(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function jh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(S,F,X){const z=G.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=F,G.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:X,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const X=G.get(S);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,X=0){j=S,q=F,k=X;let z=null,H=!1,St=!1;if(S){const Mt=G.get(S);if(Mt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,Mt.__webglFramebuffer),ht.copy(S.viewport),wt.copy(S.scissor),te=S.scissorTest,x.viewport(ht),x.scissor(wt),x.setScissorTest(te),it=-1;return}else if(Mt.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(Mt.__hasExternalTextures)Y.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Jt=S.depthTexture;if(Mt.__boundDepthTexture!==Jt){if(Jt!==null&&G.has(Jt)&&(S.width!==Jt.image.width||S.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}const Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(St=!0);const It=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[F])?z=It[F][X]:z=It[F],H=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?z=G.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?z=It[X]:z=It,ht.copy(S.viewport),wt.copy(S.scissor),te=S.scissorTest}else ht.copy(Ot).multiplyScalar(at).floor(),wt.copy(le).multiplyScalar(at).floor(),te=Xt;if(X!==0&&(z=W),x.bindFramebuffer(I.FRAMEBUFFER,z)&&x.drawBuffers(S,z),x.viewport(ht),x.scissor(wt),x.setScissorTest(te),H){const Mt=G.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,X)}else if(St){const Mt=F;for(let Rt=0;Rt<S.textures.length;Rt++){const It=G.get(S.textures[Rt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Rt,It.__webglTexture,X,Mt)}}else if(S!==null&&X!==0){const Mt=G.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Mt.__webglTexture,X)}it=-1},this.readRenderTargetPixels=function(S,F,X,z,H,St,Et,Mt=0){if(!(S&&S.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){x.bindFramebuffer(I.FRAMEBUFFER,Rt);try{const It=S.textures[Mt],Jt=It.format,ee=It.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Mt),!C.textureFormatReadable(Jt)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(ee)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-z&&X>=0&&X<=S.height-H&&I.readPixels(F,X,z,H,mt.convert(Jt),mt.convert(ee),St)}finally{const It=j!==null?G.get(j).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(S,F,X,z,H,St,Et,Mt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt)if(F>=0&&F<=S.width-z&&X>=0&&X<=S.height-H){x.bindFramebuffer(I.FRAMEBUFFER,Rt);const It=S.textures[Mt],Jt=It.format,ee=It.type;if(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Mt),!C.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Nt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Nt),I.bufferData(I.PIXEL_PACK_BUFFER,St.byteLength,I.STREAM_READ),I.readPixels(F,X,z,H,mt.convert(Jt),mt.convert(ee),0);const pe=j!==null?G.get(j).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,pe);const Le=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Nu(I,Le,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Nt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,St),I.deleteBuffer(Nt),I.deleteSync(Le),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,X=0){const z=Math.pow(2,-X),H=Math.floor(S.image.width*z),St=Math.floor(S.image.height*z),Et=F!==null?F.x:0,Mt=F!==null?F.y:0;Y.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,Et,Mt,H,St),x.unbindTexture()},this.copyTextureToTexture=function(S,F,X=null,z=null,H=0,St=0){let Et,Mt,Rt,It,Jt,ee,Nt,pe,Le;const Re=S.isCompressedTexture?S.mipmaps[St]:S.image;if(X!==null)Et=X.max.x-X.min.x,Mt=X.max.y-X.min.y,Rt=X.isBox3?X.max.z-X.min.z:1,It=X.min.x,Jt=X.min.y,ee=X.isBox3?X.min.z:0;else{const De=Math.pow(2,-H);Et=Math.floor(Re.width*De),Mt=Math.floor(Re.height*De),S.isDataArrayTexture?Rt=Re.depth:S.isData3DTexture?Rt=Math.floor(Re.depth*De):Rt=1,It=0,Jt=0,ee=0}z!==null?(Nt=z.x,pe=z.y,Le=z.z):(Nt=0,pe=0,Le=0);const _e=mt.convert(F.format),$e=mt.convert(F.type);let bt;F.isData3DTexture?(Y.setTexture3D(F,0),bt=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Y.setTexture2DArray(F,0),bt=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(F,0),bt=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const ln=x.getParameter(I.UNPACK_ROW_LENGTH),ce=x.getParameter(I.UNPACK_IMAGE_HEIGHT),gn=x.getParameter(I.UNPACK_SKIP_PIXELS),Dn=x.getParameter(I.UNPACK_SKIP_ROWS),di=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,Re.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Re.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,It),x.pixelStorei(I.UNPACK_SKIP_ROWS,Jt),x.pixelStorei(I.UNPACK_SKIP_IMAGES,ee);const Xi=S.isDataArrayTexture||S.isData3DTexture,xe=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const De=G.get(S),fi=G.get(F),Me=G.get(De.__renderTarget),pi=G.get(fi.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,Me.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let qi=0;qi<Rt;qi++)Xi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(S).__webglTexture,H,ee+qi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(F).__webglTexture,St,Le+qi)),I.blitFramebuffer(It,Jt,Et,Mt,Nt,pe,Et,Mt,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||G.has(S)){const De=G.get(S),fi=G.get(F);x.bindFramebuffer(I.READ_FRAMEBUFFER,J),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let Me=0;Me<Rt;Me++)Xi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.__webglTexture,H,ee+Me):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,De.__webglTexture,H),xe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fi.__webglTexture,St,Le+Me):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fi.__webglTexture,St),H!==0?I.blitFramebuffer(It,Jt,Et,Mt,Nt,pe,Et,Mt,I.COLOR_BUFFER_BIT,I.NEAREST):xe?I.copyTexSubImage3D(bt,St,Nt,pe,Le+Me,It,Jt,Et,Mt):I.copyTexSubImage2D(bt,St,Nt,pe,It,Jt,Et,Mt);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else xe?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(bt,St,Nt,pe,Le,Et,Mt,Rt,_e,$e,Re.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(bt,St,Nt,pe,Le,Et,Mt,Rt,_e,Re.data):I.texSubImage3D(bt,St,Nt,pe,Le,Et,Mt,Rt,_e,$e,Re):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,St,Nt,pe,Et,Mt,_e,$e,Re.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,St,Nt,pe,Re.width,Re.height,_e,Re.data):I.texSubImage2D(I.TEXTURE_2D,St,Nt,pe,Et,Mt,_e,$e,Re);x.pixelStorei(I.UNPACK_ROW_LENGTH,ln),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ce),x.pixelStorei(I.UNPACK_SKIP_PIXELS,gn),x.pixelStorei(I.UNPACK_SKIP_ROWS,Dn),x.pixelStorei(I.UNPACK_SKIP_IMAGES,di),St===0&&F.generateMipmaps&&I.generateMipmap(bt),x.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){q=0,k=0,j=null,x.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const Ur=4;class p_{constructor(){E(this,"scene",new lc);E(this,"camera",new sa(-1,1,1,-1,0,1));E(this,"material");E(this,"mesh");this.material=new en({uniforms:{tScene:{value:null},uTime:{value:0},uAspect:{value:1},uVignette:{value:.9},uHeat:{value:Array.from({length:Ur},()=>new Se(0,0,0,0))},uShimmer:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D tScene;
        uniform float uTime;
        uniform float uAspect;
        uniform float uVignette;
        uniform float uShimmer;
        uniform vec4 uHeat[${Ur}];
        varying vec2 vUv;

        float hash11(float p) {
          p = fract(p * 0.1031);
          p *= p + 33.33;
          return fract((p + p) * p);
        }

        void main() {
          vec2 uv = vUv;

          if (uShimmer > 0.5) {
            vec2 warp = vec2(0.0);
            for (int i = 0; i < ${Ur}; i++) {
              vec4 h = uHeat[i];
              if (h.w <= 0.001) continue;
              vec2 d = uv - h.xy;
              d.x *= uAspect;
              // the plume only exists above the flame and widens as it climbs
              float up = uv.y - h.xy.y;
              if (up < -0.01) continue;
              float climb = clamp(up / max(h.z, 1e-4), 0.0, 1.0);
              float width = h.z * (0.34 + climb * 0.95);
              float lateral = 1.0 - smoothstep(0.0, width, abs(d.x));
              float vertical = (1.0 - smoothstep(0.0, h.z, up)) * smoothstep(-0.012, 0.02, up);
              float mask = lateral * vertical * h.w;
              if (mask <= 0.002) continue;
              float seed = hash11(float(i) * 17.13) * 40.0;
              float t = uTime * 1.9 + seed;
              float wob = sin(uv.y * 190.0 - t * 3.1) * 0.55
                        + sin(uv.y * 311.0 - t * 2.05 + 1.7) * 0.32
                        + sin(uv.x * 240.0 + t * 1.4) * 0.13;
              warp.x += wob * mask * 0.0028;
              warp.y += sin(uv.y * 150.0 - t * 2.6) * mask * 0.0011;
            }
            uv += warp;
          }

          vec3 col = texture2D(tScene, uv).rgb;

          // very small chromatic separation at the far edges: glass, not glitch
          float r2 = dot(vUv - 0.5, vUv - 0.5);
          if (r2 > 0.16) {
            vec2 off = (vUv - 0.5) * (r2 - 0.16) * 0.006;
            col.r = texture2D(tScene, uv + off).r;
            col.b = texture2D(tScene, uv - off).b;
          }

          float vig = 1.0 - uVignette * smoothstep(0.18, 0.82, r2);
          col *= vig;

          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,depthTest:!1,depthWrite:!1});const t=new Pe;t.setAttribute("position",new qe(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),t.setAttribute("uv",new qe(new Float32Array([0,0,2,0,0,2]),2)),this.mesh=new V(t,this.material),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}setHeat(t,e,n,i,r){t>=Ur||this.material.uniforms.uHeat.value[t].set(e,n,i,r)}clearHeat(){for(const t of this.material.uniforms.uHeat.value)t.set(0,0,0,0)}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}}const Yr={low:{name:"low",dprCap:1.25,shadows:!1,shadowMapSize:512,smokeCount:26,dustCount:46,snowCount:130,shimmer:!1,anisotropy:2,textureScale:.5},mid:{name:"mid",dprCap:1.75,shadows:!0,shadowMapSize:1024,smokeCount:40,dustCount:90,snowCount:220,shimmer:!0,anisotropy:4,textureScale:.75},high:{name:"high",dprCap:2,shadows:!0,shadowMapSize:2048,smokeCount:56,dustCount:140,snowCount:320,shimmer:!0,anisotropy:8,textureScale:1}};function m_(s){const t=navigator.deviceMemory??4,e=navigator.hardwareConcurrency??4,n=window.screen.width*window.screen.height*(window.devicePixelRatio||1)**2;let i="";try{const a=s.getExtension("WEBGL_debug_renderer_info");a&&(i=String(s.getParameter(a.UNMASKED_RENDERER_WEBGL)??""))}catch{}let r=0;return e>=6&&(r+=1),e>=8&&(r+=1),t>=4&&(r+=1),t>=8&&(r+=1),n>4e6&&(r-=1),/apple\s*(a1[5-9]|a[2-9]\d|m[1-9])/i.test(i)&&(r+=2),/apple\s*a(9|10|11|12)/i.test(i)&&(r-=2),/(adreno\s*[45]\d\d|mali-t)/i.test(i)&&(r-=2),r<=0?{...Yr.low}:r<=2?{...Yr.mid}:{...Yr.high}}function Wl(s){return{...Yr[s]}}const Tt=(s,t,e)=>s<t?t:s>e?e:s,Fe=(s,t,e)=>s+(t-s)*e,g_=(s,t,e)=>{const n=Tt((e-s)/(t-s),0,1);return n*n*(3-2*n)},us=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2,__=s=>1-Math.pow(1-s,3),x_=s=>1+2.35*Math.pow(s-1,3)+1.35*Math.pow(s-1,2),Ke=(s,t,e,n)=>Fe(s,t,1-Math.exp(-e*n)),ke=Math.PI*2,v_=(s,t)=>{let e=(s-t)%ke;return e>Math.PI&&(e-=ke),e<-Math.PI&&(e+=ke),e};class ys{constructor(t=20251224){E(this,"s");this.s=t>>>0}next(){return this.s=this.s*1664525+1013904223>>>0,this.s/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}sign(){return this.next()<.5?-1:1}}function nr(s,t,e=0){const n=Math.floor(s),i=Math.floor(t),r=s-n,a=t-i,o=(g,_)=>{let p=g*374761393+_*668265263+e*1442695040;return p=(p^p>>13)*1274126177,((p^p>>16)>>>0)/4294967296},c=r*r*(3-2*r),l=a*a*(3-2*a),h=o(n,i),d=o(n+1,i),u=o(n,i+1),f=o(n+1,i+1);return Fe(Fe(h,d,c),Fe(u,f,c),l)}function Ye(s,t,e=4,n=0){let i=0,r=.5,a=1;for(let o=0;o<e;o++)i+=r*nr(s*a,t*a,n+o*71),a*=2,r*=.5;return i}let qo=1;function M_(s){qo=s}function Ie(s,t=s){const e=document.createElement("canvas");return e.width=Math.max(32,Math.round(s*qo)),e.height=Math.max(32,Math.round(t*qo)),e}function mn(s,t,e=1,n=e){const i=new Ai(s);return i.colorSpace=t?Ne:Bn,i.wrapS=i.wrapT=zi,i.repeat.set(e,n),i.needsUpdate=!0,i}let Vh=4;function S_(s){Vh=s}function cn(s){return s.anisotropy=Vh,s}function ir(s,t=1.6){const e=s.width,n=s.height,r=s.getContext("2d").getImageData(0,0,e,n).data,a=document.createElement("canvas");a.width=e,a.height=n;const o=a.getContext("2d"),c=o.createImageData(e,n),l=(d,u)=>r[((u+n)%n*e+(d+e)%e)*4]/255;for(let d=0;d<n;d++)for(let u=0;u<e;u++){const f=(l(u+1,d)-l(u-1,d))*t,g=(l(u,d+1)-l(u,d-1))*t;let _=-f,p=-g,m=1;const b=Math.hypot(_,p,m);_/=b,p/=b,m/=b;const y=(d*e+u)*4;c.data[y]=(_*.5+.5)*255,c.data[y+1]=(p*.5+.5)*255,c.data[y+2]=(m*.5+.5)*255,c.data[y+3]=255}o.putImageData(c,0,0);const h=new Ai(a);return h.colorSpace=Bn,h.wrapS=h.wrapT=zi,cn(h)}function Ii(s){const t=s.size??512,e=new ys(s.seed??7),n=[];for(let u=0;u<s.knots;u++)n.push({x:e.next(),y:e.next(),r:e.range(.018,.05)});const i=Ie(t),r=Ie(t),a=Ie(t),o=i.width,c=i.height,l=i.getContext("2d").createImageData(o,c),h=r.getContext("2d").createImageData(o,c),d=a.getContext("2d").createImageData(o,c);for(let u=0;u<c;u++)for(let f=0;f<o;f++){const g=f/o,_=u/c;let p=_*s.grainScaleY+Ye(g*s.grainScaleX,_*1.5,3,s.seed??7)*.4;for(const v of n){const R=Math.hypot((g-v.x)*.45,_-v.y);R<v.r*3&&(p+=(v.r*3-R)*2.1)}let m=Math.sin(p*s.ringDensity*Math.PI*2)*.5+.5;m=Math.pow(m,2.3);const b=nr(g*320*.32,_*320,991),y=b>.74?(b-.74)*3.4:0;let M=Tt(m*.62+y*.34,0,1);M=Tt(M*.8+Ye(g*2.4,_*1.6,3,313)*.24,0,1);const A=(u*o+f)*4;l.data[A]=Fe(s.light[0],s.dark[0],M),l.data[A+1]=Fe(s.light[1],s.dark[1],M),l.data[A+2]=Fe(s.light[2],s.dark[2],M),l.data[A+3]=255;const T=Tt(.55-m*.16-y*.42,0,1)*255;h.data[A]=h.data[A+1]=h.data[A+2]=T,h.data[A+3]=255;const P=Tt(.86-m*.13+y*.14,0,1)*255;d.data[A]=d.data[A+1]=d.data[A+2]=P,d.data[A+3]=255}return i.getContext("2d").putImageData(l,0,0),r.getContext("2d").putImageData(h,0,0),a.getContext("2d").putImageData(d,0,0),{map:cn(mn(i,!0)),rough:cn(mn(a,!1)),normal:ir(r,1.3)}}function Xl(s){const t=s.size??512,e=s.toolMarks??150,n=Ie(t),i=Ie(t),r=Ie(t),a=n.width,o=n.height,c=n.getContext("2d").createImageData(a,o),l=i.getContext("2d").createImageData(a,o),h=r.getContext("2d").createImageData(a,o),d=s.seed??21;for(let u=0;u<o;u++){const f=u/o,g=f*e*Math.PI*2+Ye(0,f*8,2,d+5)*3.2,_=(Math.sin(g)*.5+.5)**2;for(let p=0;p<a;p++){const m=p/a;let b=m*s.grainScaleX+Ye(m*2.4,f*s.grainScaleY*.28,3,d)*.55,y=Math.sin(b*s.ringDensity*Math.PI*2)*.5+.5;y=Math.pow(y,2.1);const M=nr(m*300,f*300*.3,77),A=M>.78?(M-.78)*3.2:0;let T=Tt(y*.5+A*.3+_*.12,0,1);T=Tt(T*.84+Ye(m*2,f*2,3,404)*.18,0,1);const P=(u*a+p)*4;c.data[P]=Fe(s.light[0],s.dark[0],T),c.data[P+1]=Fe(s.light[1],s.dark[1],T),c.data[P+2]=Fe(s.light[2],s.dark[2],T),c.data[P+3]=255;const v=Tt(.55-_*.34-A*.4,0,1)*255;l.data[P]=l.data[P+1]=l.data[P+2]=v,l.data[P+3]=255;const R=Tt(.8-y*.12+_*.1+A*.14,0,1)*255;h.data[P]=h.data[P+1]=h.data[P+2]=R,h.data[P+3]=255}}return n.getContext("2d").putImageData(c,0,0),i.getContext("2d").putImageData(l,0,0),r.getContext("2d").putImageData(h,0,0),{map:cn(mn(n,!0)),rough:cn(mn(r,!1)),normal:ir(i,1.05)}}function y_(s){const t=s.size??256,e=Ie(t),n=Ie(t),i=e.width,r=e.height,a=e.getContext("2d").createImageData(i,r),o=n.getContext("2d").createImageData(i,r);for(let c=0;c<r;c++)for(let l=0;l<i;l++){const h=l/i-.5,d=c/r-.5,u=Math.hypot(h,d)+Ye(h*6+3,d*6+3,3,12)*.06;let f=Math.sin(u*s.ringDensity*Math.PI*2*6)*.5+.5;f=Math.pow(f,1.8);const g=Tt(f*.55+.12,0,1),_=(c*i+l)*4;a.data[_]=Fe(s.light[0],s.dark[0],g),a.data[_+1]=Fe(s.light[1],s.dark[1],g),a.data[_+2]=Fe(s.light[2],s.dark[2],g),a.data[_+3]=255;const p=Tt(.5-f*.3,0,1)*255;o.data[_]=o.data[_+1]=o.data[_+2]=p,o.data[_+3]=255}return e.getContext("2d").putImageData(a,0,0),n.getContext("2d").putImageData(o,0,0),{map:cn(mn(e,!0)),rough:cn(mn(n,!1)),normal:ir(n,.9)}}function w_(s,t,e,n=3){const r=Ie(256),a=Ie(256),o=r.width,c=r.height,l=r.getContext("2d").createImageData(o,c),h=a.getContext("2d").createImageData(o,c);for(let d=0;d<c;d++){const u=d/c,f=u>e[0]&&u<e[1]?1-Math.abs((u-(e[0]+e[1])/2)/((e[1]-e[0])/2)):0;for(let g=0;g<o;g++){const _=g/o,p=Ye(_*26,u*3.4,3,n)*.5+.5,m=Tt((Ye(_*9,u*9,3,n+40)-.42)*3.4,0,1)*f,b=Tt(1-m*.85-(p-.5)*.16,0,1),y=(d*o+g)*4;l.data[y]=Fe(t[0],s[0],b),l.data[y+1]=Fe(t[1],s[1],b),l.data[y+2]=Fe(t[2],s[2],b),l.data[y+3]=255;const M=Tt(.82-f*.3-m*.1+(p-.5)*.1,.24,1)*255;h.data[y]=h.data[y+1]=h.data[y+2]=M,h.data[y+3]=255}}return r.getContext("2d").putImageData(l,0,0),a.getContext("2d").putImageData(h,0,0),{map:cn(mn(r,!0)),rough:cn(mn(a,!1))}}function qa(s=5,t=.55){const n=Ie(256),i=Ie(256),r=n.width,a=n.height,o=n.getContext("2d").createImageData(r,a),c=i.getContext("2d").createImageData(r,a);for(let l=0;l<a;l++)for(let h=0;h<r;h++){const d=h/r,u=l/a,f=Ye(d*190,u*3,3,s)*.5+.5,g=Ye(d*4.2,u*4.2,4,s+17),_=Tt((g-.46)*3,0,1)*t,p=Tt(.13+f*.16+_*.55,.06,.95),m=(l*r+h)*4;o.data[m]=o.data[m+1]=o.data[m+2]=p*255,o.data[m+3]=255,c.data[m]=Fe(232,150,_),c.data[m+1]=Fe(196,132,_),c.data[m+2]=Fe(126,96,_),c.data[m+3]=255}return n.getContext("2d").putImageData(o,0,0),i.getContext("2d").putImageData(c,0,0),{rough:cn(mn(n,!1)),map:cn(mn(i,!0))}}function b_(s=9){const e=Ie(256),n=e.width,i=e.height,r=e.getContext("2d").createImageData(n,i);for(let a=0;a<i;a++)for(let o=0;o<n;o++){const c=o/n,l=a/i,h=Ye(c*240,l*2,2,s)*.5+.5,d=Tt((nr(c*90,l*90,s+3)-.72)*4,0,1),u=Tt(.3+h*.22+d*.4,.12,.95),f=(a*n+o)*4;r.data[f]=r.data[f+1]=r.data[f+2]=u*255,r.data[f+3]=255}return e.getContext("2d").putImageData(r,0,0),{rough:cn(mn(e,!1))}}function E_(s,t=31){const n=Ie(256),i=Ie(256),r=n.width,a=n.height,o=n.getContext("2d").createImageData(r,a),c=i.getContext("2d").createImageData(r,a);for(let l=0;l<a;l++)for(let h=0;h<r;h++){const d=h/r,u=l/a,f=Ye(d*9,u*9,4,t),g=nr(d*130,u*130,t+2),_=Tt(f*.7+g*.3,0,1),p=(l*r+h)*4;o.data[p]=s[0]*(.82+_*.3),o.data[p+1]=s[1]*(.82+_*.3),o.data[p+2]=s[2]*(.82+_*.3),o.data[p+3]=255,c.data[p]=c.data[p+1]=c.data[p+2]=_*255,c.data[p+3]=255}return n.getContext("2d").putImageData(o,0,0),i.getContext("2d").putImageData(c,0,0),{map:cn(mn(n,!0)),normal:ir(i,.5)}}function T_(){const t=Ie(512),e=Ie(512),n=t.width,i=t.height,r=t.getContext("2d").createImageData(n,i),a=e.getContext("2d").createImageData(n,i);for(let o=0;o<i;o++)for(let c=0;c<n;c++){const l=c/n,h=o/i,d=Tt(1-Math.min(l,1-l,h,1-h)*15,0,1),u=Math.abs(Ye(l*26,h*26,5,61)-.5)*2,f=Math.abs(Ye(l*60,h*60,3,91)-.5)*2,g=Tt((1-u)*1.35-.72,0,1)+Tt((1-f)*1.1-.68,0,1)*.5,_=Tt(g*Math.pow(d,3)*1,0,1),p=(o*n+c)*4;r.data[p]=r.data[p+1]=r.data[p+2]=255,r.data[p+3]=_*120,a.data[p]=a.data[p+1]=a.data[p+2]=_*255,a.data[p+3]=255}return t.getContext("2d").putImageData(r,0,0),e.getContext("2d").putImageData(a,0,0),{alpha:cn(mn(t,!0)),normal:ir(e,1.4)}}function A_(){const t=Ie(128),e=t.width,n=t.height,i=t.getContext("2d").createImageData(e,n);for(let a=0;a<n;a++)for(let o=0;o<e;o++){const c=o/e-.5,l=a/n-.5,h=Math.hypot(c,l)*2,d=Ye(o/e*5.5,a/n*5.5,4,88);let u=Tt(1-h,0,1);u=Math.pow(u,1.35)*(.55+d*.75),u=Tt(u,0,1);const f=(a*e+o)*4;i.data[f]=i.data[f+1]=i.data[f+2]=255,i.data[f+3]=u*255}t.getContext("2d").putImageData(i,0,0);const r=new Ai(t);return r.colorSpace=Ne,r}function Wh(s=.35){const e=Ie(64),n=e.width,i=e.height,r=e.getContext("2d"),a=r.createRadialGradient(n/2,i/2,0,n/2,i/2,n/2);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(s,"rgba(255,255,255,0.82)"),a.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=a,r.fillRect(0,0,n,i);const o=new Ai(e);return o.colorSpace=Ne,o}function R_(){const t=Ie(128),e=t.getContext("2d"),n=e.createRadialGradient(t.width/2,t.height/2,0,t.width/2,t.height/2,t.width/2);n.addColorStop(0,"rgba(0,0,0,0.72)"),n.addColorStop(.45,"rgba(0,0,0,0.34)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height);const i=new Ai(t);return i.colorSpace=Ne,i}function C_(){const t=Ie(128),e=t.width,n=t.height,i=t.getContext("2d").createImageData(e,n);for(let a=0;a<n;a++)for(let o=0;o<e;o++){const c=o/e,l=a/n,h=Ye(c*6,l*6,4,133),d=Tt(1-l*1.7,0,1),u=Tt(.35+Math.sin(c*Math.PI*2+.9)*.5,0,1),f=Tt(h*d*u*1.9-.16,0,1),g=(a*e+o)*4;i.data[g]=i.data[g+1]=i.data[g+2]=14,i.data[g+3]=f*255}t.getContext("2d").putImageData(i,0,0);const r=new Ai(t);return r.colorSpace=Ne,r.wrapS=r.wrapT=zi,r}class P_{constructor(t){E(this,"canvas");E(this,"renderer");E(this,"scene",new lc);E(this,"camera");E(this,"composite");E(this,"tier");E(this,"width",1);E(this,"height",1);E(this,"dpr",1);E(this,"orientation","landscape");E(this,"time",0);E(this,"rt");E(this,"updaters",[]);E(this,"resizers",[]);E(this,"last",0);E(this,"frameAvg",1/60);E(this,"sampleCount",0);E(this,"demoted",!1);E(this,"fps",60);E(this,"lastShown",0);E(this,"running",!1);E(this,"onResize",()=>{const t=Math.max(1,window.innerWidth),e=Math.max(1,window.innerHeight);this.dpr=Math.min(window.devicePixelRatio||1,this.tier.dprCap),this.width=t,this.height=e,this.orientation=e>=t?"portrait":"landscape",this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(t,e,!1),this.rt.setSize(Math.round(t*this.dpr),Math.round(e*this.dpr)),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.composite.material.uniforms.uAspect.value=t/e;for(const n of this.resizers)n(t,e,this.orientation)});this.canvas=t;const e=t.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!0});if(!e)throw new Error("WebGL2 is required");this.renderer=new f_({canvas:t,context:e,antialias:!1,alpha:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ne,this.renderer.toneMapping=Jo,this.renderer.toneMappingExposure=.96,this.renderer.shadowMap.type=Ql,this.renderer.localClippingEnabled=!0,this.renderer.setClearColor(460293,1),this.tier=m_(e),this.renderer.shadowMap.enabled=this.tier.shadows,M_(this.tier.textureScale),S_(Math.min(this.tier.anisotropy,this.renderer.capabilities.getMaxAnisotropy())),this.camera=new an(38,1,.02,60),this.scene.add(this.camera),this.rt=new Cn(2,2,{type:Xn,colorSpace:Js,depthBuffer:!0,samples:0,minFilter:Xe,magFilter:Xe}),this.composite=new p_,this.composite.material.uniforms.tScene.value=this.rt.texture,this.composite.material.uniforms.uShimmer.value=this.tier.shimmer?1:0,window.addEventListener("resize",this.onResize,{passive:!0}),window.addEventListener("orientationchange",()=>setTimeout(this.onResize,120)),window.visualViewport&&window.visualViewport.addEventListener("resize",this.onResize,{passive:!0}),document.addEventListener("visibilitychange",()=>{document.hidden||(this.last=performance.now())}),this.onResize()}onUpdate(t){this.updaters.push(t)}onResizeHook(t){this.resizers.push(t),t(this.width,this.height,this.orientation)}watchPerformance(t){if(!(this.demoted||this.tier.name==="low")&&(this.frameAvg=this.frameAvg*.94+t*.06,this.sampleCount++,!(this.sampleCount<180)&&this.frameAvg>1/34)){this.demoted=!0;const e=this.tier.name==="high"?Wl("mid"):Wl("low");this.tier=e,this.renderer.shadowMap.enabled=e.shadows,this.composite.material.uniforms.uShimmer.value=e.shimmer?1:0,this.dpr=Math.min(window.devicePixelRatio||1,e.dprCap),this.renderer.setPixelRatio(this.dpr),this.rt.setSize(Math.round(this.width*this.dpr),Math.round(this.height*this.dpr)),this.sampleCount=0}}start(){if(this.running)return;this.running=!0,this.last=performance.now();const t=e=>{requestAnimationFrame(t);let n=(e-this.last)/1e3;this.last=e,n>0||(n=1/60),n=Math.min(n,.1),this.time+=n;for(const i of this.updaters)i(n,this.time);this.composite.material.uniforms.uTime.value=this.time,this.renderer.setRenderTarget(this.rt),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.renderer.render(this.composite.scene,this.composite.camera),this.fps=this.fps*.9+1e3/Math.max(e-(this.lastShown||e-16),1)*.1,this.lastShown=e,this.watchPerformance(n)};requestAnimationFrame(t)}projectUV(t,e){const n=t.clone().project(this.camera);return e.set(n.x*.5+.5,n.y*.5+.5),e}projectPx(t,e){const n=t.clone().project(this.camera);return e.set((n.x*.5+.5)*this.width,(1-(n.y*.5+.5))*this.height),e}}function Ya(s,t,e,n){const i=t==="portrait",r=i?s.pDist??s.dist*1.28:s.dist,a=i?s.pPitch??s.pitch:s.pitch;n.copy(s.target),i&&(n.y+=s.pTargetY??.012);const o=Math.cos(a),c=Math.sin(a);return e.set(n.x+Math.sin(s.yaw)*o*r,n.y+c*r,n.z+Math.cos(s.yaw)*o*r),i?s.pFov??(s.fov??38)*1.06:s.fov??38}class L_{constructor(t,e){E(this,"engine");E(this,"from");E(this,"to");E(this,"t",1);E(this,"dur",1);E(this,"posA",new w);E(this,"tgtA",new w);E(this,"posB",new w);E(this,"tgtB",new w);E(this,"curPos",new w);E(this,"curTgt",new w);E(this,"shake",0);E(this,"fromOverride",null);this.engine=t,this.from=e,this.to=e,Ya(e,t.orientation,this.curPos,this.curTgt)}go(t,e=1.6){this.to.name===t.name&&this.t>=1||(this.from={...this.to,name:this.to.name+"@cur",target:this.curTgt.clone()},this.fromOverride={pos:this.curPos.clone(),tgt:this.curTgt.clone()},this.to=t,this.t=0,this.dur=Math.max(.001,e))}get poseName(){return this.to.name}get settled(){return this.t>=.985}nudge(t=.4){this.shake=t}update(t,e){this.t=Tt(this.t+t/this.dur,0,1);const n=us(this.t),i=this.engine.orientation,r=Ya(this.to,i,this.posB,this.tgtB);let a=r;this.fromOverride&&this.t<1?(this.posA.copy(this.fromOverride.pos),this.tgtA.copy(this.fromOverride.tgt),a=this.engine.camera.fov):a=Ya(this.from,i,this.posA,this.tgtA),this.curPos.copy(this.posA).lerp(this.posB,n),this.curTgt.copy(this.tgtA).lerp(this.tgtB,n);const o=Fe(a,r,n),c=Math.sin(e*.37)*.0016+Math.sin(e*.83)*9e-4,l=Math.cos(e*.29)*.0014;this.shake=Math.max(0,this.shake-t*1.6);const h=this.shake*.004,d=this.engine.camera;d.position.set(this.curPos.x+c+Math.sin(e*31)*h,this.curPos.y+l+Math.cos(e*27)*h,this.curPos.z),d.lookAt(this.curTgt),Math.abs(d.fov-o)>.001&&(d.fov=o,d.updateProjectionMatrix())}}class D_{constructor(t){E(this,"benchTop");E(this,"benchFrame");E(this,"floor");E(this,"wall");E(this,"beam");E(this,"shelf");E(this,"maple");E(this,"mapleTurned");E(this,"walnutTurned");E(this,"walnut");E(this,"endGrain");E(this,"vaneWood");E(this,"paintRed");E(this,"paintTeal");E(this,"paintCream");E(this,"paintOchre");E(this,"paintBrown");E(this,"skinPaint");E(this,"brass");E(this,"brassDark");E(this,"brassBell");E(this,"steel");E(this,"steelDark");E(this,"wax");E(this,"wick");E(this,"wickLit");E(this,"incense");E(this,"incenseLit");E(this,"charBlack");E(this,"glass");E(this,"frost");E(this,"apron");E(this,"cloth");E(this,"interiorDark");E(this,"env",null);this.buildEnvironment(t),this.build()}buildEnvironment(t){const e=new lc,n=(r,a,o,c,l)=>{const h=new V(new Ze(o,c),new Ti({color:r,side:ze}));h.material.color.multiplyScalar(a),h.position.copy(l),h.lookAt(0,0,0),e.add(h)};e.background=new Kt(723468),n(9418458,1.7,5,4,new w(.3,1.1,-3.4)),n(16756838,2.1,2.2,1.2,new w(0,-.5,1.2)),n(16764826,1.25,3.2,1.4,new w(0,2.6,.4)),n(5913124,.85,6,3,new w(-3,.2,.6)),n(4731946,.72,6,3,new w(3,.2,.6)),n(3154714,.55,6,6,new w(0,-2.4,0));const i=new Vo(t);i.compileEquirectangularShader(),this.env=i.fromScene(e,.04).texture,i.dispose(),e.traverse(r=>{const a=r;a.isMesh&&(a.geometry.dispose(),a.material.dispose())})}std(t){const e=new We(t);return e.envMap=this.env,e.envMapIntensity=t.envMapIntensity??.65,e}build(){const t=Ii({light:[136,102,70],dark:[70,48,30],grainScaleX:1.3,grainScaleY:4,ringDensity:5.6,knots:2,seed:11,size:768});t.map.repeat.set(1,4),t.rough.repeat.copy(t.map.repeat),t.normal.repeat.copy(t.map.repeat),this.benchTop=this.std({map:t.map,roughnessMap:t.rough,normalMap:t.normal,normalScale:new nt(.75,.75),roughness:1,metalness:0,envMapIntensity:.5});const e=Ii({light:[126,92,58],dark:[58,38,22],grainScaleX:1.1,grainScaleY:6,ringDensity:4.4,knots:4,seed:29});this.benchFrame=this.std({map:e.map,roughnessMap:e.rough,normalMap:e.normal,roughness:1,metalness:0,envMapIntensity:.35});const n=Ii({light:[118,84,54],dark:[52,34,20],grainScaleX:.8,grainScaleY:9,ringDensity:6.5,knots:6,seed:47,size:768});n.map.repeat.set(3,8),n.rough.repeat.copy(n.map.repeat),n.normal.repeat.copy(n.map.repeat),this.floor=this.std({map:n.map,roughnessMap:n.rough,normalMap:n.normal,normalScale:new nt(.6,.6),roughness:1,metalness:0,envMapIntensity:.28});const i=E_([120,117,114]);i.map.repeat.set(4,3),i.normal.repeat.set(4,3),this.wall=this.std({map:i.map,normalMap:i.normal,normalScale:new nt(1,1),roughness:.98,metalness:0,envMapIntensity:.26});const r=Ii({light:[92,64,40],dark:[38,25,15],grainScaleX:.9,grainScaleY:7,ringDensity:3.8,knots:5,seed:53});r.map.repeat.set(4,1),r.rough.repeat.set(4,1),r.normal.repeat.set(4,1),this.beam=this.std({map:r.map,roughnessMap:r.rough,normalMap:r.normal,roughness:1,metalness:0,envMapIntensity:.22}),this.shelf=this.std({map:e.map,roughnessMap:e.rough,normalMap:e.normal,roughness:1,metalness:0,envMapIntensity:.3});const a=Ii({light:[214,178,130],dark:[150,111,68],grainScaleX:1.6,grainScaleY:5,ringDensity:6,knots:1,seed:71});this.maple=this.std({map:a.map,roughnessMap:a.rough,normalMap:a.normal,normalScale:new nt(.55,.55),roughness:1,metalness:0,envMapIntensity:.55});const o=Xl({light:[219,183,136],dark:[151,110,66],grainScaleX:2.4,grainScaleY:4.2,ringDensity:4.6,seed:83,toolMarks:130});this.mapleTurned=this.std({map:o.map,roughnessMap:o.rough,normalMap:o.normal,normalScale:new nt(.42,.42),roughness:1,metalness:0,envMapIntensity:.6});const c=Xl({light:[128,88,56],dark:[62,39,24],grainScaleX:2.2,grainScaleY:4,ringDensity:4.2,seed:97,toolMarks:118});this.walnutTurned=this.std({map:c.map,roughnessMap:c.rough,normalMap:c.normal,normalScale:new nt(.42,.42),roughness:1,metalness:0,envMapIntensity:.5});const l=Ii({light:[124,86,55],dark:[56,35,21],grainScaleX:1.5,grainScaleY:5,ringDensity:5,knots:1,seed:101});this.walnut=this.std({map:l.map,roughnessMap:l.rough,normalMap:l.normal,roughness:1,metalness:0,envMapIntensity:.45});const h=y_({light:[206,172,128],dark:[138,100,62],ringDensity:2.2});this.endGrain=this.std({map:h.map,roughnessMap:h.rough,normalMap:h.normal,roughness:1,metalness:0,envMapIntensity:.4});const d=Ii({light:[166,124,78],dark:[98,66,38],grainScaleX:2.2,grainScaleY:6,ringDensity:7,knots:0,seed:131,size:256});this.vaneWood=this.std({map:d.map,roughnessMap:d.rough,normalMap:d.normal,normalScale:new nt(.35,.35),roughness:.97,metalness:0,side:ze,envMapIntensity:.4});const u=(b,y,M,A=.88)=>{const T=w_(b,[168,128,84],y,M);return this.std({map:T.map,roughnessMap:T.rough,roughness:A,metalness:0,normalMap:o.normal,normalScale:new nt(.16,.16),envMapIntensity:.4})};this.paintRed=u([150,52,42],[.28,.62],3),this.paintTeal=u([58,92,88],[.3,.7],13),this.paintCream=u([222,204,172],[.35,.75],23),this.paintOchre=u([190,142,62],[.2,.6],33),this.paintBrown=u([96,66,44],[.25,.7],43),this.skinPaint=u([224,178,146],[.4,.9],53,.8);const f=qa(5,.42);this.brass=this.std({map:f.map,roughnessMap:f.rough,metalness:.92,roughness:.36,color:16771268,envMapIntensity:1.5});const g=qa(19,.92);this.brassDark=this.std({map:g.map,roughnessMap:g.rough,metalness:.9,roughness:.55,envMapIntensity:1.15});const _=qa(31,.3);this.brassBell=this.std({map:_.map,roughnessMap:_.rough,metalness:.93,roughness:.26,color:16772300,envMapIntensity:1.9,side:ze});const p=b_(9);this.steel=this.std({roughnessMap:p.rough,metalness:.93,roughness:.4,color:12172480,envMapIntensity:1.25}),this.steelDark=this.std({roughnessMap:p.rough,metalness:.9,roughness:.58,color:6974834,envMapIntensity:.95}),this.wax=this.std({color:15193520,roughness:.58,metalness:0,envMapIntensity:.35}),this.wax.onBeforeCompile=b=>{b.fragmentShader=b.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         float _rim = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewPosition))), 2.5);
         totalEmissiveRadiance += vec3(0.22, 0.13, 0.06) * _rim;`)},this.wick=this.std({color:2827293,roughness:.95,metalness:0,envMapIntensity:.2}),this.wickLit=this.std({color:1314829,roughness:.95,metalness:0,emissive:16738846,emissiveIntensity:1.6,envMapIntensity:.2}),this.incense=this.std({color:3155230,roughness:.92,metalness:0,envMapIntensity:.25}),this.incenseLit=this.std({color:1708557,roughness:.9,metalness:0,emissive:16730642,emissiveIntensity:1,envMapIntensity:.2}),this.charBlack=this.std({color:1512208,roughness:.98,metalness:0,envMapIntensity:.15}),this.interiorDark=this.std({color:3812386,roughness:.95,metalness:0,side:ze,envMapIntensity:.2}),this.glass=new af({color:12111069,roughness:.1,metalness:0,transmission:0,transparent:!0,opacity:.055,envMapIntensity:.9,side:ze}),this.glass.envMap=this.env;const m=T_();m.alpha.repeat.set(3,2),m.normal.repeat.set(3,2),this.frost=this.std({color:13031142,alphaMap:m.alpha,normalMap:m.normal,normalScale:new nt(.8,.8),transparent:!0,roughness:.55,metalness:0,envMapIntensity:.45,side:ze,depthWrite:!1}),this.apron=this.std({color:7166533,roughness:.95,metalness:0,envMapIntensity:.25}),this.cloth=this.std({color:4866104,roughness:.97,metalness:0,envMapIntensity:.2})}}let jr=null;function I_(s){return jr=new D_(s),jr}function Ce(){if(!jr)throw new Error("materials not initialised");return jr}function kt(s,t=32,e=Math.PI*2){const n=s.map(([r,a])=>new nt(Math.max(r,1e-5),a)),i=new mc(n,t,0,e);return i.computeVertexNormals(),i}function U_(s,t,e,n){const i=s.getAttribute("position"),r=s.getAttribute("normal"),a=new Float32Array(i.count*2);for(let o=0;o<i.count;o++){const c=i.getX(o),l=i.getY(o),h=i.getZ(o),d=Math.abs(r.getX(o)),u=Math.abs(r.getY(o)),f=Math.abs(r.getZ(o));let g,_;f>=d&&f>=u?(g=c/t+.5,_=l/e+.5):d>=u?(g=h/n+.5,_=l/e+.5):(g=c/t+.5,_=h/n+.5),a[o*2]=g,a[o*2+1]=_}return s.setAttribute("uv",new qe(a,2)),s}function he(s,t,e,n=.0015,i=1){const r=new pc,a=s/2-n,o=t/2-n;r.moveTo(-a,-o),r.lineTo(a,-o),r.lineTo(a,o),r.lineTo(-a,o),r.closePath();const c=new na(r,{depth:e-n*2,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelSegments:i,curveSegments:1});return c.translate(0,0,-(e-n*2)/2),c.computeVertexNormals(),U_(c,s,t,e),c}let Za=null;function sr(s,t=.5){Za||(Za=R_());const e=new V(new Ze(s*2,s*2),new Ti({map:Za,transparent:!0,opacity:t,depthWrite:!1,color:0,blending:bi}));return e.rotation.x=-Math.PI/2,e.renderOrder=2,e}function On(s,t){const e=new V(new Mn(s,8,6),new Ti({visible:!1}));return e.name=t,e.userData.hit=t,e}function oa(s,t,e,n){const i=new V(new vn(s,t,e),new Ti({visible:!1}));return i.name=n,i.userData.hit=n,i}function Rn(s,t,e){return s.traverse(n=>{const i=n;i.isMesh&&(i.castShadow=t,i.receiveShadow=e)}),s}function Xh(s,t,e,n=.16){const a=new Pe,o=[],c=[],l=[],h=4,d=9;for(let f=0;f<2;f++){const g=f===0?1:-1;for(let _=0;_<h;_++){const p=_/3;for(let m=0;m<d;m++){const b=m/8,y=1-b*.22,M=b*s,A=(p-.5)*t*y,T=g*e*.5+Math.sin(b*Math.PI)*n*t*.5*(p-.5)*2*.5;o.push(M,A,T),l.push(b,p)}}}const u=(f,g,_,p)=>c.push(f,g,_,f,_,p);for(let f=0;f<2;f++){const g=f*h*d;for(let _=0;_<3;_++)for(let p=0;p<8;p++){const m=g+_*d+p,b=m+1,y=m+d+1,M=m+d;f===0?u(m,b,y,M):u(m,M,y,b)}}for(let f=0;f<8;f++){const g=f,_=f+1,p=h*d+f,m=h*d+f+1;u(g,p,m,_);const b=(h-1)*d+f,y=b+1,M=h*d+(h-1)*d+f,A=M+1;u(y,A,M,b)}return a.setAttribute("position",new me(o,3)),a.setAttribute("uv",new me(l,2)),a.setIndex(c),a.computeVertexNormals(),a}const ue=.9,jn=2.42,dn=.8,Is=.062,Ct={ceilY:2.62,backZ:-.86,frontZ:2.9,leftX:-2.35,rightX:2.35},fn={cx:.16,cy:1.62,w:1.46,h:.92,depth:.14},N_=new w(-.545,ue,.175),F_=new w(.045,ue,-.075),O_=new w(.625,ue,.055),B_=.28,ql=-.1,k_=0,Yl=.9,z_=new w(.99,ue+.012,.285);class H_{constructor(t,e){E(this,"group",new oe);E(this,"lamp");E(this,"lampTarget",new Te);E(this,"windowFill");E(this,"ambient");E(this,"windowGlow");E(this,"lampShade");E(this,"lampBulbMat");E(this,"lampLevel",1);const n=Ce(),i=this.group,r=new V(new Ze(Ct.rightX-Ct.leftX,Ct.frontZ-Ct.backZ),n.floor);r.rotation.x=-Math.PI/2,r.position.set((Ct.leftX+Ct.rightX)/2,0,(Ct.backZ+Ct.frontZ)/2),r.receiveShadow=e,i.add(r);const a=Ct.ceilY,o=fn.cx-fn.w/2,c=fn.cx+fn.w/2,l=fn.cy-fn.h/2,h=fn.cy+fn.h/2,d=(y,M,A,T)=>{const P=new V(he(M-y,T-A,.12),n.wall);P.position.set((y+M)/2,(A+T)/2,Ct.backZ-.06),P.receiveShadow=e,i.add(P)};d(Ct.leftX,o,0,a),d(c,Ct.rightX,0,a),d(o,c,0,l),d(o,c,h,a);const u=(y,M)=>{const A=new V(new Ze(Ct.frontZ-Ct.backZ,a),n.wall);A.rotation.y=M*Math.PI/2,A.position.set(y,a/2,(Ct.backZ+Ct.frontZ)/2),A.receiveShadow=e,i.add(A)};u(Ct.leftX,1),u(Ct.rightX,-1);const f=new V(new Ze(Ct.rightX-Ct.leftX,Ct.frontZ-Ct.backZ),n.wall);f.rotation.x=Math.PI/2,f.position.set(0,Ct.ceilY,(Ct.backZ+Ct.frontZ)/2),i.add(f);for(let y=0;y<4;y++){const M=new V(he(Ct.rightX-Ct.leftX,.14,.11,.006),n.beam);M.position.set(0,Ct.ceilY-.075,Ct.backZ+.5+y*.82),M.castShadow=e,i.add(M)}i.add(this.buildWindow(e));for(const y of[-.86,1.16]){const M=new V(he(.115,Ct.ceilY,.075,.004),n.beam);M.position.set(y,Ct.ceilY/2,Ct.backZ+.038),M.castShadow=e,M.receiveShadow=e,i.add(M)}const g=new V(he(Ct.rightX-Ct.leftX,.1,.06,.004),n.beam);g.position.set(0,1.03,Ct.backZ+.032),g.receiveShadow=e,i.add(g);const _=new V(he(Ct.rightX-Ct.leftX,.085,.055,.004),n.beam);_.position.set(0,2.2,Ct.backZ+.03),i.add(_),i.add(this.buildToolWall(e)),i.add(this.buildShelf(e)),i.add(this.buildLathe(e)),i.add(this.buildStove(e)),this.ambient=new lf(4481150,3022356,.46),i.add(this.ambient),this.windowFill=new pf(9417956,1.35),this.windowFill.position.set(fn.cx+.5,fn.cy+.9,Ct.backZ-2.2),this.windowFill.target.position.set(0,ue,.1),i.add(this.windowFill,this.windowFill.target),this.windowGlow=new tr(10469608,.8,2.6,2),this.windowGlow.position.set(fn.cx,fn.cy-.1,Ct.backZ+.16),i.add(this.windowGlow);const p=new oe,m=new V(new we(.004,.004,.46,6),n.cloth);m.position.set(0,Ct.ceilY-.23,0),p.add(m),this.lampShade=new V(kt([[.012,0],[.014,.008],[.055,.028],[.115,.1],[.128,.115],[.128,.122],[.118,.118],[.05,.036],[.012,.006]],28),n.paintTeal),this.lampShade.position.set(0,Ct.ceilY-.58,0),this.lampShade.castShadow=e,p.add(this.lampShade),this.lampBulbMat=new We({color:2761496,emissive:16767392,emissiveIntensity:3.2,roughness:.4});const b=new V(new Mn(.026,12,10),this.lampBulbMat);b.position.set(0,Ct.ceilY-.6,0),p.add(b),p.position.set(.02,0,.12),i.add(p),this.lamp=new uf(16768188,6.4,4.2,Math.PI*.34,.62,1.7),this.lamp.position.set(.02,Ct.ceilY-.62,.12),this.lampTarget.position.set(.02,ue-.05,.05),this.lamp.target=this.lampTarget,this.lamp.castShadow=e,this.lamp.shadow.mapSize.set(t,t),this.lamp.shadow.camera.near=.4,this.lamp.shadow.camera.far=4,this.lamp.shadow.bias=-9e-4,this.lamp.shadow.normalBias=.012,i.add(this.lamp,this.lampTarget)}setLampLevel(t){this.lampLevel=t,this.lamp.intensity=6.4*t,this.lampBulbMat.emissiveIntensity=.5+3*t,this.lampShade.material.emissiveIntensity=t,this.ambient.intensity=.22+.26*t,this.windowFill.intensity=1.35+(1-t)*.55}get lampValue(){return this.lampLevel}buildWindow(t){const e=Ce(),n=new oe,{cx:i,cy:r,w:a,h:o,depth:c}=fn,l=.055,h=(g,_,p,m)=>{const b=new V(he(g,_,c,.004),e.walnut);b.position.set(p,m,Ct.backZ-c/2+.02),b.castShadow=t,b.receiveShadow=t,n.add(b)};h(a+l*2,l,i,r+o/2+l/2),h(a+l*2,l*1.6,i,r-o/2-l*.8),h(l,o+l*2,i-a/2-l/2,r),h(l,o+l*2,i+a/2+l/2,r),h(.026,o,i-a/6,r),h(.026,o,i+a/6,r),h(a,.024,i,r);const d=new V(he(a+.2,.036,.2,.005),e.walnut);d.position.set(i,r-o/2-l*1.6-.012,Ct.backZ+.03),d.castShadow=t,d.receiveShadow=t,n.add(d);const u=new V(new Ze(a,o),e.glass);u.position.set(i,r,Ct.backZ-c+.03),n.add(u);const f=new V(new Ze(a,o),e.frost);return f.position.set(i,r,Ct.backZ-c+.036),f.renderOrder=3,n.add(f),n}buildToolWall(t){const e=Ce(),n=new oe,i=new V(he(.86,.72,.022,.003),e.shelf);i.position.set(-1.42,1.62,Ct.backZ+.015),i.receiveShadow=t,n.add(i);const r=kt([[0,0],[.008,.004],[.012,.02],[.0125,.055],[.0095,.082],[.01,.088],[.006,.092],[0,.093]],12),a=new zn(r,e.walnutTurned,6),o=new vn(.013,.1,.0035),c=new zn(o,e.steel,6),l=new jt;for(let g=0;g<6;g++){const _=-1.74+g*.115,p=.85+g%3*.14;l.makeTranslation(_,1.74,Ct.backZ+.045),l.scale(new w(p,p,p)),a.setMatrixAt(g,l),l.makeTranslation(_,1.74-.052*p,Ct.backZ+.045),l.scale(new w(p,p,p)),c.setMatrixAt(g,l)}a.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0,a.castShadow=t,c.castShadow=t,n.add(a,c);const h=new V(new vn(.42,.1,.0018),e.steel);h.position.set(-1.36,1.46,Ct.backZ+.042),h.rotation.z=-.07;const d=new V(he(.1,.13,.018,.004),e.walnut);d.position.set(-1.6,1.47,Ct.backZ+.042),d.rotation.z=-.07,n.add(h,d);const u=new V(kt([[0,0],[.036,0],[.038,.02],[.036,.088],[0,.088]],14),e.walnutTurned);u.position.set(-1.12,1.42,Ct.backZ+.05),u.rotation.z=Math.PI/2;const f=new V(new we(.0105,.0125,.2,10),e.mapleTurned);return f.position.set(-1.12,1.31,Ct.backZ+.05),n.add(u,f),Rn(n,t,t),n}buildShelf(t){const e=Ce(),n=new oe;for(let a=0;a<2;a++){const o=new V(he(.82,.026,.24,.004),e.shelf);o.position.set(1.55,1.36+a*.36,Ct.backZ+.13),n.add(o);const c=he(.02,.13,.13,.002);for(const l of[1.22,1.88]){const h=new V(c,e.steelDark);h.position.set(l,1.29+a*.36,Ct.backZ+.11),n.add(h)}}const i=new ys(88);for(let a=0;a<7;a++){const o=.1+i.next()*.14,c=.018+i.next()*.014,l=new V(kt([[0,0],[c,0],[c*(.9+i.next()*.3),o*.5],[c,o],[0,o]],14),a%2?e.mapleTurned:e.walnutTurned);l.position.set(1.26+a*.095,1.386+(a%2?.36:0),Ct.backZ+.1+i.next()*.06),n.add(l)}const r=new V(kt([[0,0],[.035,0],[.038,.02],[.03,.07],[.034,.08],[.03,.084],[0,.084]],16),e.brassDark);return r.position.set(1.8,1.386,Ct.backZ+.13),n.add(r),Rn(n,t,t),n}buildLathe(t){const e=Ce(),n=new oe,i=.86,r=new V(he(1.05,.075,.2,.005),e.benchFrame);r.position.set(0,i,0),n.add(r);for(const d of[-.42,.42]){const u=new V(he(.08,i-.04,.14,.004),e.benchFrame);u.position.set(d,(i-.04)/2,0),n.add(u)}const a=new V(he(.16,.19,.17,.005),e.steelDark);a.position.set(-.4,i+.13,0),n.add(a);const o=new V(he(.11,.15,.14,.005),e.steelDark);o.position.set(.4,i+.11,0),n.add(o);const c=new V(new we(.011,.011,.62,10),e.steel);c.rotation.z=Math.PI/2,c.position.set(0,i+.14,0),n.add(c);const l=new V(kt([[.006,0],[.028,.02],[.024,.09],[.033,.15],[.026,.24],[.03,.3],[.006,.33]],18),e.mapleTurned);l.rotation.z=Math.PI/2,l.position.set(-.17,i+.14,0),n.add(l);const h=new V(he(.24,.016,.03,.002),e.steelDark);return h.position.set(-.05,i+.1,.1),n.add(h),n.position.set(-1.66,0,-.12),n.rotation.y=.42,Rn(n,t,t),n}buildStove(t){const e=Ce(),n=new oe,i=new V(kt([[0,0],[.13,0],[.135,.02],[.13,.42],[.145,.45],[.145,.47],[.12,.48],[.05,.49],[.045,.5],[0,.5]],18),e.steelDark);n.add(i);const r=new V(new we(.042,.045,1.5,12),e.steelDark);r.position.y=1.25,n.add(r);const a=new V(new we(.055,.055,.01,14),e.brassDark);a.rotation.x=Math.PI/2,a.position.set(0,.22,.128),n.add(a);const o=C_();o.repeat.set(2,1);const c=new V(new we(.147,.147,.3,18,1,!0),new We({color:854794,alphaMap:o,transparent:!0,roughness:1,depthWrite:!1,side:ze}));c.position.y=.36,n.add(c);const l=new tr(16742954,.5,1.1,2);return l.position.set(0,.25,.2),n.add(l),n.position.set(1.92,0,.62),Rn(n,t,t),n}}const ti=.3;function G_(){const s=document.createElement("canvas");s.width=8,s.height=256;const t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#0d1830"),e.addColorStop(.34,"#1b2b4a"),e.addColorStop(.62,"#3a4664"),e.addColorStop(.82,"#6d6274"),e.addColorStop(.93,"#9c7d70"),e.addColorStop(1,"#b08b6e"),t.fillStyle=e,t.fillRect(0,0,8,256);const n=new Ai(s);return n.colorSpace=Ne,n}function V_(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n=e.createImageData(256,256);for(let r=0;r<256;r++)for(let a=0;a<256;a++){const c=150+Ye(a/256*7,r/256*7,4,202)*70,l=(r*256+a)*4;n.data[l]=c*.92,n.data[l+1]=c*.96,n.data[l+2]=c*1.05,n.data[l+3]=255}e.putImageData(n,0,0);const i=new Ai(t);return i.colorSpace=Ne,i.wrapS=i.wrapT=zi,i.repeat.set(9,9),i}class W_{constructor(){E(this,"group",new oe);E(this,"snowBox");E(this,"windowMat");const t=new ys(1224),e=this.group,n=new V(new Ze(90,34),new Ti({map:G_(),fog:!1,depthWrite:!1}));n.position.set(0,7,-30),n.renderOrder=-10,e.add(n);const i=new Ze(80,44,48,26),r=i.getAttribute("position");for(let L=0;L<r.count;L++){const D=r.getX(L),U=r.getY(L),W=Math.max(0,1-Math.abs(U+4)/7)*.5;r.setZ(L,(Ye(D*.08,U*.08,3,17)-.5)*1.15+W)}i.computeVertexNormals();const a=new V(i,new We({map:V_(),roughness:.92,metalness:0,color:11123407}));a.rotation.x=-Math.PI/2,a.position.set(0,ti,-16),e.add(a);const o=new We({color:4865336,roughness:.95}),c=new We({color:11056840,roughness:.88}),l=new We({color:2893344,roughness:1}),h=new We({color:2307631,roughness:1});this.windowMat=new Ti({color:16757596,fog:!0});const d=new pc;d.moveTo(-.62,0),d.lineTo(.62,0),d.lineTo(0,.46),d.closePath();const u=new na(d,{depth:1,bevelEnabled:!1});u.translate(0,0,-.5);const f=[],g=new jt,_=[[-4.9,-8.6,1.25],[-1.1,-12.4,1.05],[3.9,-9.8,1.35],[8.4,-13.4,1.1],[-9.2,-14.6,.95],[1,-18,.85],[12.6,-19.5,.9],[-14.5,-21,.8]];for(const[L,D,U]of _){const W=2.15*U,J=new V(new vn(2*U,W,1.7*U),o);J.position.set(L,ti+W/2,D);const O=t.range(-.35,.35);J.rotation.y=O,e.add(J);const q=new V(u,c);q.scale.set(1.75*U,1.6*U,1.75*U),q.position.set(L,ti+W,D),q.rotation.y=O,e.add(q);const k=t.int(1,2);for(let j=0;j<k;j++){const it=(j-(k-1)/2)*.34*U,ct=new w(it*2.4,ti+W*.56,.86*U+.006);ct.applyAxisAngle(new w(0,1,0),O),g.makeRotationY(O),g.setPosition(L+ct.x,ct.y,D+ct.z),g.scale(new w(.42*U,.52*U,1)),f.push(g.clone())}}const p=new zn(new Ze(1,1),this.windowMat,f.length);f.forEach((L,D)=>p.setMatrixAt(D,L)),p.instanceMatrix.needsUpdate=!0,e.add(p);const m=new er(.5,1.9,7),b=new we(.05,.07,.4,5),y=22,M=new zn(m,h,y),A=new zn(b,l,y);for(let L=0;L<y;L++){const D=t.range(-24,24),U=t.range(-24,-6.5),W=t.range(1,2.2);g.makeTranslation(D,ti+.2+.95*W,U),g.scale(new w(W,W,W)),M.setMatrixAt(L,g),g.makeTranslation(D,ti+.2*W,U),g.scale(new w(W,W,W)),A.setMatrixAt(L,g)}M.instanceMatrix.needsUpdate=!0,A.instanceMatrix.needsUpdate=!0,e.add(M,A);const T=new vn(.08,.82,.08),P=new We({color:5456954,roughness:1}),v=new zn(T,P,12);for(let L=0;L<12;L++)g.makeRotationY(t.range(-.08,.08)),g.setPosition(-3.2+L*.62,ti+.4+t.range(-.04,.04),-3.4),v.setMatrixAt(L,g);v.instanceMatrix.needsUpdate=!0,e.add(v);const R=new V(new vn(7,.05,.04),P);R.position.set(.2,ti+.6,-3.4),e.add(R),this.snowBox=new ui(new w(-16,ti,-22),new w(16,9,-2.6)),e.position.z=Ct.backZ-.9}setEvening(t){this.windowMat.color.setRGB(1*(.5+t*.6),.62*(.5+t*.55),.3*(.5+t*.4))}}class X_{constructor(t){E(this,"group",new oe);const e=Ce(),n=this.group,i=ue-Is/2,r=4,a=.0042,o=(dn-a*(r-1))/r,c=he(jn,Is,o,.0032,2);for(let m=0;m<r;m++){const b=new V(c,e.benchTop);b.position.set(0,i,-dn/2+o/2+m*(o+a)),b.receiveShadow=t,b.castShadow=t,n.add(b)}const l=new V(he(jn,.012,dn,.002),e.benchFrame);l.position.set(0,i-Is/2-.005,0),n.add(l);const h=new V(he(jn-.12,.09,.03,.002),e.benchFrame);h.position.set(0,ue-.12,dn/2-.05),n.add(h);const d=h.clone();d.position.z=-dn/2+.05,n.add(d);for(const m of[-jn/2+.1,jn/2-.1])for(const b of[-dn/2+.09,dn/2-.09]){const y=new V(he(.075,ue-Is,.075,.003),e.benchFrame);y.position.set(m,(ue-Is)/2,b),y.castShadow=t,n.add(y)}const u=new V(he(jn-.3,.05,.04,.002),e.benchFrame);u.position.set(0,.26,dn/2-.09),n.add(u);const f=u.clone();f.position.z=-dn/2+.09,n.add(f);const g=new V(he(.2,.1,.035,.003),e.walnut);g.position.set(-jn/2+.2,ue-.085,dn/2-.02),n.add(g);const _=new V(new we(.011,.011,.14,10),e.steel);_.rotation.x=Math.PI/2,_.position.set(-jn/2+.2,ue-.085,dn/2+.05),n.add(_);const p=new V(new we(.008,.008,.13,8),e.steel);p.position.set(-jn/2+.2,ue-.085,dn/2+.115),n.add(p),n.add(this.buildShavings(t)),n.add(this.buildOffcuts())}buildShavings(t){const e=Ce(),n=new ys(511),i=20,r=new Vn(.019,.0125,3,22,Math.PI*2.1);r.scale(1,.17,1);const a=new zn(r,e.maple,i),o=new jt,c=new be,l=new ye,h=new w;for(let d=0;d<i;d++){const u=n.range(-1.15,.35)+(n.next()<.3?.95:0),f=n.range(.17,dn/2-.02);l.set(Math.PI/2+n.range(-.5,.5),n.range(0,Math.PI*2),n.range(-.4,.4)),c.setFromEuler(l);const g=n.range(.75,1.9);h.set(g,g,g),o.compose(new w(u,ue+.007*g,f),c,h),a.setMatrixAt(d,o)}return a.instanceMatrix.needsUpdate=!0,a.castShadow=t,a.receiveShadow=t,a}buildOffcuts(){const t=Ce(),e=new oe,n=new ys(733),i=new we(.0016,.0016,.019,6),r=new zn(i,t.brass,9),a=new jt,o=new be;for(let d=0;d<9;d++)o.setFromEuler(new ye(Math.PI/2,n.range(0,6.28),0)),a.compose(new w(n.range(.8,1.14),ue+.0016,n.range(.1,.32)),o,new w(1,1,1)),r.setMatrixAt(d,a);r.instanceMatrix.needsUpdate=!0,e.add(r);const c=new Vn(.005,.0016,4,12),l=new zn(c,t.brassDark,5);for(let d=0;d<5;d++)o.setFromEuler(new ye(Math.PI/2,0,n.range(0,6.28))),a.compose(new w(n.range(-1.16,-.86),ue+.0018,n.range(.05,.3)),o,new w(1,1,1)),l.setMatrixAt(d,a);l.instanceMatrix.needsUpdate=!0,e.add(l);const h=new V(kt([[0,0],[.028,0],[.03,.004],[.03,.026],[.032,.028],[.03,.031],[0,.031]],18),t.brassDark);return h.position.set(-.86,ue,-.1),e.add(h),e}}class q_{constructor(t){E(this,"group",new oe);E(this,"targetPos",new w);E(this,"targetRot",0);E(this,"anchor",new w);E(this,"orientation","landscape");E(this,"dxLandscape",ql);E(this,"layoutHalf",.055);const e=Ce(),n=.38,i=.19,r=.019,a=new V(he(n,.012,i,.002),e.walnut);a.position.y=.006,this.group.add(a);const o=he(n,r,.011,.0015),c=he(.011,r,i-.022,.0015);for(const h of[-i/2+.0055,i/2-.0055]){const d=new V(o,e.walnut);d.position.set(0,r/2,h),this.group.add(d)}for(const h of[-n/2+.0055,n/2-.0055]){const d=new V(c,e.walnut);d.position.set(h,r/2,0),this.group.add(d)}for(const h of[-n/5,n/5]){const d=new V(he(.008,r*.7,i-.022,.001),e.walnut);d.position.set(h,r*.35,0),this.group.add(d)}const l=sr(.29,.42);l.position.y=.0015,l.scale.set(1,1,.55),this.group.add(l),Rn(this.group,t,t),this.anchor.set(0,ue,0),this.recompute(),this.group.position.copy(this.targetPos)}setAnchor(t,e=ql){this.anchor.set(t.x,ue,t.z),this.dxLandscape=e,this.recompute()}recompute(){const t=this.orientation==="portrait"?k_:this.dxLandscape;this.targetPos.set(Bo.clamp(this.anchor.x+t,-Yl,Yl),ue,B_),this.targetRot=this.orientation==="portrait"?0:.06}targetCenter(t=new w){return t.copy(this.targetPos).setY(ue+.02)}layout(t,e=.013){const n=t.length,i=n>3?Math.ceil(n/2):n,r=Math.ceil(n/i),a=Math.min(.3,(i-1)*.082);t.forEach((o,c)=>{const l=Math.floor(c/i),h=c%i,d=Math.min(i,n-l*i),u=Math.min(.3,(d-1)*.082),f=d===1?0:-u/2+u/(d-1)*h,g=r===1?0:-.04+l*.08;o.position.set(f,e,g)}),this.layoutHalf=Math.max(.055,a/2)}get partsHalfWidth(){return this.layoutHalf}set partsHalfWidth(t){this.layoutHalf=t}setOrientation(t){this.orientation=t,this.recompute()}update(t){this.group.position.x=Ke(this.group.position.x,this.targetPos.x,5,t),this.group.position.y=Ke(this.group.position.y,this.targetPos.y,5,t),this.group.position.z=Ke(this.group.position.z,this.targetPos.z,5,t),this.group.rotation.y=Ke(this.group.rotation.y,this.targetRot,5,t)}}class Y_{constructor(t){E(this,"group",new oe);E(this,"tip",new Te);E(this,"hit");E(this,"home",new w);E(this,"homeQuat",new be);E(this,"held",!1);const e=Ce(),n=this.group,i=new V(kt([[0,0],[.011,.002],[.013,.012],[.0135,.052],[.011,.07],[.0085,.078],[.006,.082],[0,.083]],16),e.paintTeal);n.add(i);const r=new V(kt([[0,0],[.01,0],[.011,.006],[.008,.012],[0,.013]],14),e.steelDark);r.position.y=.082,n.add(r);const a=new V(he(.016,.012,.006,.001),e.steelDark);a.position.set(0,.062,.012),n.add(a);const o=new V(new we(.0034,.004,.148,8),e.steel);o.position.y=.095+.074,n.add(o);const c=new V(new we(.0044,.0036,.015,8),e.steelDark);c.position.y=.095+.148+.006,n.add(c),this.tip.position.set(0,.095+.148+.0155,0),n.add(this.tip),this.hit=oa(.09,.13,.09,"lighter"),this.hit.position.y=.05,n.add(this.hit);const l=sr(.055,.4);l.position.y=.001,n.add(l),Rn(n,t,!1),this.home.copy(z_),this.homeQuat.setFromEuler(new ye(-Math.PI/2+.12,0,-.35,"XYZ")),n.position.copy(this.home),n.quaternion.copy(this.homeQuat)}tipWorld(t=new w){return this.tip.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.tip.matrixWorld)}}class Z_{constructor(t){E(this,"group",new oe);E(this,"torso");E(this,"head");E(this,"armR");E(this,"lookTarget",new w(0,1,.1));E(this,"headYaw",0);E(this,"headPitch",0);E(this,"phase",0);const e=Ce(),n=this.group,i=new We({color:9068615,roughness:.88,metalness:0});i.envMap=e.apron.envMap,i.envMapIntensity=.28;const r=e.cloth,a=new We({color:4274737,roughness:.97,metalness:0});a.envMap=e.apron.envMap,a.envMapIntensity=.3;for(const R of[-1,1]){const L=new V(kt([[.062,0],[.07,.06],[.062,.32],[.07,.46],[.078,.72],[.082,.86]],12),r);L.position.set(R*.085,0,0),n.add(L);const D=new V(kt([[0,0],[.072,0],[.078,.03],[.07,.085],[.062,.1],[0,.1]],12),new We({color:3024416,roughness:.95}));D.position.set(R*.085,0,.012),D.scale.z=1.5,n.add(D)}this.torso=new oe,this.torso.position.y=.86,n.add(this.torso);const o=new V(kt([[.135,0],[.152,.1],[.17,.26],[.178,.38],[.172,.44],[.12,.475],[.078,.495],[.062,.5]],16),a);o.scale.z=.72,this.torso.add(o);const c=new V(kt([[.145,0],[.152,.14],[.14,.3],[.108,.4],[.082,.45]],16,Math.PI*1.05),e.apron);c.rotation.y=-Math.PI*.52,c.scale.set(1.03,1,.79),c.position.y=-.2,this.torso.add(c);const l=new V(new Vn(.075,.008,5,14,Math.PI),e.apron);l.position.set(0,.46,-.01),l.rotation.set(.25,0,0),this.torso.add(l);const h=kt([[.046,0],[.05,.06],[.042,.22],[.038,.24]],10),d=kt([[.04,0],[.043,.05],[.031,.21],[.029,.23]],10),u=new Mn(.036,10,8),f=R=>{const L=new oe;L.position.set(R*.163,.425,0);const D=new V(h,a);D.rotation.x=Math.PI,L.add(D);const U=new oe;U.position.y=-.24,L.add(U);const W=new V(d,i);W.rotation.x=Math.PI,U.add(W);const J=new V(kt([[.046,0],[.049,.02],[.042,.1],[.04,.115]],10),a);J.rotation.x=Math.PI,U.add(J);const O=new V(u,i);return O.position.y=-.245,O.scale.set(1,1.15,.75),U.add(O),this.torso.add(L),{shoulder:L,elbow:U}},g=f(-1),_=f(1);g.shoulder.rotation.set(-.62,0,-.3),g.elbow.rotation.set(.55,0,0),_.shoulder.rotation.set(.1,0,.16),_.elbow.rotation.set(.3,0,0),this.armR=_.shoulder,this.head=new oe,this.head.position.y=.53,this.torso.add(this.head);const p=new V(new we(.042,.05,.06,10),i);p.position.y=-.03,this.head.add(p);const m=new V(new Mn(.093,14,12),i);m.scale.set(.92,1.08,1),m.position.y=.075,this.head.add(m);const b=new V(kt([[0,.1],[.06,.098],[.092,.06],[.098,0],[.096,-.05],[.088,-.075]],14),new We({color:3878953,roughness:1}));b.position.y=.075,b.rotation.y=.4,this.head.add(b);const y=new V(new er(.016,.032,8),i);y.rotation.x=Math.PI/2+.35,y.position.set(0,.078,.086),this.head.add(y);const M=new vn(.03,.008,.01),A=new We({color:3878953,roughness:1});for(const R of[-1,1]){const L=new V(M,A);L.position.set(R*.034,.106,.078),L.rotation.z=R*.12,this.head.add(L)}const T=new V(kt([[0,.168],[.07,.164],[.098,.14],[.104,.116],[.1,.104],[.086,.1],[.03,.098]],16),new We({color:3354667,roughness:1}));T.position.y=.02,this.head.add(T);const P=new V(new we(.088,.088,.01,14,1,!1,-.9,1.8),new We({color:2828323,roughness:1}));P.position.set(0,.124,.03),P.scale.z=1.35,this.head.add(P);const v=new V(kt([[.092,.03],[.1,-.015],[.086,-.06],[.048,-.092],[0,-.1]],14,Math.PI*1),new We({color:4865073,roughness:1}));v.rotation.y=-Math.PI*.5,v.position.set(0,.055,.006),v.scale.z=.85,this.head.add(v),n.position.set(-1.16,0,-.625),n.rotation.y=.3,n.scale.setScalar(1),Rn(n,t,!1)}lookAt(t){this.lookTarget.copy(t)}update(t,e){this.phase=e;const n=1+Math.sin(e*1.05)*.011;this.torso.scale.set(n,1+Math.sin(e*1.05)*.006,n),this.group.rotation.z=Math.sin(e*.23)*.012,this.group.position.x=-1.16+Math.sin(e*.19)*.008,this.armR.rotation.x=.1+Math.sin(e*.6)*.05;const i=this.group.worldToLocal(this.lookTarget.clone()),r=Math.atan2(i.x,i.z)-Math.PI/2,a=-Math.atan2(i.y-1.39,Math.hypot(i.x,i.z));this.headYaw=Ke(this.headYaw,Bo.clamp(r,-.75,.75),2,t),this.headPitch=Ke(this.headPitch,Bo.clamp(a,-.5,.45),2,t),this.head.rotation.y=this.headYaw+Math.sin(this.phase*.31)*.03,this.head.rotation.x=this.headPitch}}class J_{constructor(t){E(this,"mesh");E(this,"count");E(this,"aOffset");E(this,"aScale");E(this,"aSeed");E(this,"aAmt");E(this,"target");E(this,"material");E(this,"flicker");this.count=t;const e=new Ze(1,1,1,6);e.translate(0,.5,0);const n=new Uh;n.index=e.index,n.setAttribute("position",e.getAttribute("position")),n.setAttribute("uv",e.getAttribute("uv")),n.instanceCount=t,this.aOffset=new yi(new Float32Array(t*3),3),this.aScale=new yi(new Float32Array(t*2),2),this.aSeed=new yi(new Float32Array(t),1),this.aAmt=new yi(new Float32Array(t),1);for(let i=0;i<t;i++)this.aSeed.setX(i,Math.random()*100),this.aScale.setXY(i,.011,.026),this.aOffset.setXYZ(i,0,-999,0);n.setAttribute("aOffset",this.aOffset),n.setAttribute("aScale",this.aScale),n.setAttribute("aSeed",this.aSeed),n.setAttribute("aAmt",this.aAmt),n.boundingSphere=new qn(new w(0,1,0),12),this.target=new Float32Array(t),this.flicker=new Float32Array(t),this.material=new en({uniforms:{uTime:{value:0}},vertexShader:`
        attribute vec3 aOffset;
        attribute vec2 aScale;
        attribute float aSeed;
        attribute float aAmt;
        varying vec2 vUv;
        varying float vSeed;
        varying float vAmt;
        void main() {
          vUv = uv; vSeed = aSeed; vAmt = aAmt;
          vec3 toCam = normalize(cameraPosition - aOffset);
          vec3 up = vec3(0.0, 1.0, 0.0);
          vec3 right = normalize(cross(up, toCam));
          float s = 0.55 + 0.45 * clamp(aAmt, 0.0, 1.0);
          vec3 wp = aOffset
                  + right * position.x * aScale.x * s
                  + up * position.y * aScale.y * s;
          gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform float uTime;
        varying vec2 vUv;
        varying float vSeed;
        varying float vAmt;

        void main() {
          if (vAmt <= 0.004) discard;
          float t = uTime * 1.0 + vSeed * 9.7;

          // the tip wanders, the root stays put
          float sway = (sin(t * 6.3 + vUv.y * 5.4) * 0.55
                      + sin(t * 10.9 + vUv.y * 9.1 + 1.9) * 0.3) * 0.075 * pow(vUv.y, 1.7);
          float x = (vUv.x - 0.5) + sway;

          float h = 0.80 + 0.13 * sin(t * 8.1 + vSeed) + 0.07 * sin(t * 14.3 + 2.1);
          float y = vUv.y / max(h, 0.2);
          if (y > 1.0) discard;

          float w = 0.50 * pow(1.0 - y, 0.5) * pow(clamp(y * 5.0, 0.0, 1.0), 0.42);
          float d = abs(x) / max(w, 1e-4);
          float body = 1.0 - smoothstep(0.55, 1.02, d);
          if (body <= 0.001) discard;

          float core = 1.0 - smoothstep(0.0, 0.62, d + y * 0.75);
          float bluish = (1.0 - smoothstep(0.0, 0.30, y)) * (1.0 - smoothstep(0.55, 1.0, d));

          vec3 col = mix(vec3(1.00, 0.42, 0.10), vec3(1.0, 0.80, 0.42), core);
          col = mix(col, vec3(1.0, 0.96, 0.86), core * core * 0.85);
          col = mix(col, vec3(0.34, 0.55, 1.0), bluish * 0.72);

          float a = body * (0.55 + core * 0.65) * vAmt;
          a *= 1.0 - smoothstep(0.86, 1.0, y);
          gl_FragColor = vec4(col * (1.5 + core * 2.6) * vAmt, a);
        }
      `,transparent:!0,depthWrite:!1,blending:qs,side:ze}),this.mesh=new V(n,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6}place(t,e,n=.011,i=.026){this.aOffset.setXYZ(t,e.x,e.y,e.z),this.aScale.setXY(t,n,i),this.aOffset.needsUpdate=!0,this.aScale.needsUpdate=!0}setLit(t,e){this.target[t]=e?1:0}isLit(t){return this.target[t]>.5}amount(t){return this.aAmt.getX(t)}update(t,e){this.material.uniforms.uTime.value=e;let n=!1;for(let i=0;i<this.count;i++){const r=this.aAmt.getX(i),a=this.target[i];if(Math.abs(r-a)>8e-4){const o=Ke(r,a,a>r?7.5:4,t);this.aAmt.setX(i,Tt(o,0,1)),n=!0}else r!==a&&(this.aAmt.setX(i,a),n=!0);this.flicker[i]=.82+.18*Math.sin(e*7.3+i*2.1)}n&&(this.aAmt.needsUpdate=!0)}brightness(t){return this.aAmt.getX(t)*this.flicker[t]}worldPos(t,e){return e.set(this.aOffset.getX(t),this.aOffset.getY(t),this.aOffset.getZ(t))}}const Nr=3;class K_{constructor(t,e){E(this,"points");E(this,"material");const n=new Pe,i=new Float32Array(t*3),r=new Float32Array(t*3),a=new w;e.getSize(a);for(let o=0;o<t;o++)i[o*3]=e.min.x+Math.random()*a.x,i[o*3+1]=e.min.y+Math.random()*a.y,i[o*3+2]=e.min.z+Math.random()*a.z,r[o*3]=.006+Math.random()*.022,r[o*3+1]=Math.random()*100,r[o*3+2]=.6+Math.random()*1.2;n.setAttribute("position",new qe(i,3)),n.setAttribute("aMote",new qe(r,3)),n.boundingSphere=new qn(new w(0,1,0),8),this.material=new en({uniforms:{uTime:{value:0},tDot:{value:Wh(.2)},uMinY:{value:e.min.y},uSpanY:{value:Math.max(.001,a.y)},uScale:{value:1},uThermal:{value:Array.from({length:Nr},()=>new Se(0,-99,0,0))}},vertexShader:`
        attribute vec3 aMote;   // speed, phase, size
        uniform float uTime;
        uniform float uMinY;
        uniform float uSpanY;
        uniform float uScale;
        uniform vec4 uThermal[${Nr}];
        varying float vFade;
        void main() {
          vec3 p = position;
          float rise = aMote.x;
          float boost = 0.0;
          for (int i = 0; i < ${Nr}; i++) {
            vec4 h = uThermal[i];
            if (h.w <= 0.001) continue;
            vec2 d = p.xz - h.xz;
            float radial = 1.0 - smoothstep(0.0, 0.075, length(d));
            float above = smoothstep(-0.03, 0.02, p.y - h.y) * (1.0 - smoothstep(0.0, 0.6, p.y - h.y));
            boost += radial * above * h.w;
          }
          rise += boost * 0.22;
          float y = uMinY + mod(p.y - uMinY + uTime * rise + aMote.y, uSpanY);
          float sw = sin(uTime * 0.42 + aMote.y * 6.2) * 0.035;
          float sw2 = cos(uTime * 0.33 + aMote.y * 4.7) * 0.035;
          vec3 wp = vec3(p.x + sw, y, p.z + sw2);
          vec4 mv = modelViewMatrix * vec4(wp, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aMote.z * uScale * (1.0 + boost * 1.6) * 1.35 / max(-mv.z, 0.05);
          vFade = 0.085 + boost * 0.42;
        }
      `,fragmentShader:`
        precision mediump float;
        uniform sampler2D tDot;
        varying float vFade;
        void main() {
          float a = texture2D(tDot, gl_PointCoord).a * vFade;
          if (a < 0.004) discard;
          gl_FragColor = vec4(vec3(1.0, 0.84, 0.62), a);
        }
      `,transparent:!0,depthWrite:!1,blending:qs}),this.points=new vh(n,this.material),this.points.frustumCulled=!1,this.points.renderOrder=4}setThermal(t,e,n){if(t>=Nr)return;const i=this.material.uniforms.uThermal.value;e?i[t].set(e.x,e.y,e.z,n):i[t].set(0,-99,0,0)}setDpr(t){this.material.uniforms.uScale.value=t}update(t,e){this.material.uniforms.uTime.value=e}}class $_{constructor(t,e){E(this,"points");E(this,"material");const n=new Pe,i=new Float32Array(t*3),r=new Float32Array(t*3),a=new w;e.getSize(a);for(let o=0;o<t;o++)i[o*3]=e.min.x+Math.random()*a.x,i[o*3+1]=e.min.y+Math.random()*a.y,i[o*3+2]=e.min.z+Math.random()*a.z,r[o*3]=.18+Math.random()*.42,r[o*3+1]=Math.random()*100,r[o*3+2]=.5+Math.random()*1.5;n.setAttribute("position",new qe(i,3)),n.setAttribute("aFlake",new qe(r,3)),n.boundingSphere=new qn(new w(0,0,-6),24),this.material=new en({uniforms:{uTime:{value:0},tDot:{value:Wh(.45)},uMinY:{value:e.min.y},uSpanY:{value:Math.max(.001,a.y)},uScale:{value:1}},vertexShader:`
        attribute vec3 aFlake;   // fall speed, phase, size
        uniform float uTime; uniform float uMinY; uniform float uSpanY; uniform float uScale;
        varying float vFade;
        void main() {
          vec3 p = position;
          float fall = uTime * aFlake.x + aFlake.y;
          float y = uMinY + mod(p.y - uMinY - fall, uSpanY);
          float drift = sin(uTime * 0.50 + aFlake.y * 3.1) * 0.55
                      + sin(uTime * 0.19 + aFlake.y) * 0.90;
          vec3 wp = vec3(p.x + drift, y, p.z + cos(uTime * 0.31 + aFlake.y * 2.2) * 0.35);
          vec4 mv = modelViewMatrix * vec4(wp, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aFlake.z * uScale * 9.0 / max(-mv.z, 0.5);
          // distance haze: the far village dissolves into blue dusk
          vFade = 0.78 * (1.0 - smoothstep(8.0, 26.0, -mv.z));
        }
      `,fragmentShader:`
        precision mediump float;
        uniform sampler2D tDot;
        varying float vFade;
        void main() {
          float a = texture2D(tDot, gl_PointCoord).a * vFade;
          if (a < 0.01) discard;
          gl_FragColor = vec4(vec3(0.84, 0.90, 1.0), a);
        }
      `,transparent:!0,depthWrite:!1}),this.points=new vh(n,this.material),this.points.frustumCulled=!1,this.points.renderOrder=1}setDpr(t){this.material.uniforms.uScale.value=t}update(t,e){this.material.uniforms.uTime.value=e}}class Q_{constructor(t){E(this,"mesh");E(this,"origin",new w);E(this,"dir",new w(0,1,0));E(this,"wind",new w(.012,0,-.006));E(this,"rate",0);E(this,"strength",1);E(this,"spread",.0016);E(this,"speed",.075);E(this,"parts",[]);E(this,"aOffset");E(this,"aParams");E(this,"material");E(this,"emitAcc",0);E(this,"rng",new ys(4242));E(this,"count");this.count=t;const e=new Ze(1,1),n=new Uh;n.index=e.index,n.setAttribute("position",e.getAttribute("position")),n.setAttribute("uv",e.getAttribute("uv")),n.instanceCount=t,this.aOffset=new yi(new Float32Array(t*3),3),this.aParams=new yi(new Float32Array(t*4),4),n.setAttribute("aOffset",this.aOffset),n.setAttribute("aParams",this.aParams),n.boundingSphere=new qn(new w(0,1.2,0),8);for(let r=0;r<t;r++)this.parts.push({age:0,life:1,px:0,py:-999,pz:0,vx:0,vy:0,vz:0,seed:this.rng.next()*10,rot:0,spin:0,alive:!1}),this.aOffset.setXYZ(r,0,-999,0);const i=A_();this.material=new en({uniforms:{tSmoke:{value:i},uTint:{value:new Kt(.5,.49,.48)},uWarm:{value:new Kt(1,.72,.45)}},vertexShader:`
        attribute vec3 aOffset;
        attribute vec4 aParams; // size, rot, alpha, seed
        varying vec2 vUv;
        varying float vAlpha;
        varying float vSeed;
        varying float vRise;
        void main() {
          vUv = uv; vAlpha = aParams.z; vSeed = aParams.w;
          vec3 toCam = normalize(cameraPosition - aOffset);
          vec3 upW = vec3(0.0, 1.0, 0.0);
          vec3 right = normalize(cross(upW, toCam));
          vec3 up = normalize(cross(toCam, right));
          float c = cos(aParams.y), s = sin(aParams.y);
          vec2 p = vec2(position.x * c - position.y * s, position.x * s + position.y * c);
          vec3 wp = aOffset + right * p.x * aParams.x + up * p.y * aParams.x;
          vRise = clamp(aParams.x * 30.0, 0.0, 1.0);
          gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D tSmoke;
        uniform vec3 uTint;
        uniform vec3 uWarm;
        varying vec2 vUv;
        varying float vAlpha;
        varying float vSeed;
        varying float vRise;
        void main() {
          if (vAlpha <= 0.002) discard;
          vec4 s = texture2D(tSmoke, vUv);
          float a = s.a * vAlpha;
          if (a <= 0.003) discard;
          // young smoke sits in candle light and is warmer; old smoke is cool
          vec3 col = mix(uWarm * 0.55 + uTint * 0.5, uTint, vRise);
          gl_FragColor = vec4(col, a);
        }
      `,transparent:!0,depthWrite:!1,blending:bi,side:ze}),this.mesh=new V(n,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5}setOrigin(t,e){this.origin.copy(t),this.dir.copy(e).normalize()}clear(){for(let t=0;t<this.count;t++)this.parts[t].alive=!1,this.aOffset.setXYZ(t,0,-999,0),this.aParams.setXYZW(t,0,0,0,this.parts[t].seed);this.aOffset.needsUpdate=!0,this.aParams.needsUpdate=!0}spawn(t){const e=this.rng;t.alive=!0,t.age=0,t.life=2.7+e.next()*1.5,t.px=this.origin.x+(e.next()-.5)*this.spread,t.py=this.origin.y+(e.next()-.5)*this.spread,t.pz=this.origin.z+(e.next()-.5)*this.spread;const n=.14;t.vx=this.dir.x*this.speed+(e.next()-.5)*this.speed*n,t.vy=this.dir.y*this.speed+(e.next()-.5)*this.speed*n,t.vz=this.dir.z*this.speed+(e.next()-.5)*this.speed*n,t.seed=e.next()*10,t.rot=e.next()*Math.PI*2,t.spin=(e.next()-.5)*.55}update(t,e){if(this.rate>0)for(this.emitAcc+=this.rate*t;this.emitAcc>=1;){this.emitAcc-=1;const n=this.parts.find(i=>!i.alive);if(!n){this.emitAcc=0;break}this.spawn(n)}for(let n=0;n<this.count;n++){const i=this.parts[n];if(!i.alive)continue;i.age+=t;const r=i.age/i.life;if(r>=1){i.alive=!1,this.aOffset.setXYZ(n,0,-999,0),this.aParams.setXYZW(n,0,0,0,i.seed);continue}const a=.062*(1-r*.55);i.vy+=a*t;const o=Math.sin(e*.55+i.py*9+i.seed*3.1),c=Math.cos(e*.47+i.py*8.2+i.seed*2.3);i.vx+=(o*.03+this.wind.x)*t,i.vz+=(c*.03+this.wind.z)*t;const l=1-Math.min(.9,.85*t);i.vx*=l,i.vy*=l*.999,i.vz*=l,i.px+=i.vx*t,i.py+=i.vy*t,i.pz+=i.vz*t,i.rot+=i.spin*t;const h=.0042+Math.pow(r,.78)*.04,d=Tt(r/.06,0,1),u=Math.pow(1-r,1.55),f=d*u*.29*this.strength;this.aOffset.setXYZ(n,i.px,i.py,i.pz),this.aParams.setXYZW(n,h,i.rot,f,i.seed)}this.aOffset.needsUpdate=!0,this.aParams.needsUpdate=!0}}class j_{constructor(){E(this,"ctx",null);E(this,"master",null);E(this,"noise",null);E(this,"muted",!1);E(this,"started",!1);E(this,"fireGain",null);E(this,"windGain",null);E(this,"roomGain",null);E(this,"rotorGains",[]);E(this,"rotorFilters",[]);E(this,"crackleTimer",0);E(this,"fireLevel",0)}get available(){return this.ctx!==null&&this.ctx.state==="running"}async unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t({latencyHint:"interactive"}),this.buildGraph()}if(this.ctx.state!=="running")try{await this.ctx.resume()}catch{}!this.started&&this.ctx.state==="running"&&(this.started=!0,this.startBeds())}buildGraph(){const t=this.ctx,e=t.createDynamicsCompressor();e.threshold.value=-14,e.knee.value=22,e.ratio.value=3.2,e.attack.value=.005,e.release.value=.24,e.connect(t.destination),this.master=t.createGain(),this.master.gain.value=this.muted?0:.9,this.master.connect(e);const n=Math.floor(t.sampleRate*2.5),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);let a=0,o=0,c=0;for(let l=0;l<n;l++){const h=Math.random()*2-1;a=.99765*a+h*.099046,o=.963*o+h*.2965164,c=.57*c+h*1.0526913,r[l]=(a+o+c+h*.1848)*.22}this.noise=i}noiseSource(t=!0){const e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=t,e}startBeds(){const t=this.ctx,e=this.noiseSource(),n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=190,n.Q.value=.5,this.roomGain=t.createGain(),this.roomGain.gain.value=.055,e.connect(n).connect(this.roomGain).connect(this.master),e.start();const i=this.noiseSource(),r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=420,r.Q.value=.7,this.windGain=t.createGain(),this.windGain.gain.value=.035;const a=t.createOscillator();a.frequency.value=.07;const o=t.createGain();o.gain.value=.028,a.connect(o).connect(this.windGain.gain),a.start(),i.connect(r).connect(this.windGain).connect(this.master),i.start();const c=this.noiseSource(),l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=640,l.Q.value=.55,this.fireGain=t.createGain(),this.fireGain.gain.value=0,c.connect(l).connect(this.fireGain).connect(this.master),c.start();for(let h=0;h<2;h++){const d=this.noiseSource(),u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=380,u.Q.value=.8;const f=t.createGain();f.gain.value=0,d.connect(u).connect(f).connect(this.master),d.start(),this.rotorGains.push(f),this.rotorFilters.push(u)}}setMuted(t){this.muted=t,this.master&&this.ctx&&this.master.gain.setTargetAtTime(t?0:.9,this.ctx.currentTime,.05)}get isMuted(){return this.muted}bell(t,e,n=.5){if(!this.ctx||!this.master||this.muted)return;const i=this.ctx,r=i.currentTime,a=Tt(e,.05,1),o=i.createGain();o.gain.value=.28*a,o.connect(this.master);const c=[[.5,.2,1.35],[1,1,1.1],[2.02,.52,.66],[2.76,.4,.44],[4.07,.22,.28],[5.42,.14,.19],[8.21,.07,.12]],l=.62+(1-n)*.5;for(const[f,g,_]of c){const p=i.createOscillator();p.type="sine",p.frequency.value=t*f*(1+(Math.random()-.5)*.006);const m=i.createGain(),b=g*(.55+a*.55);m.gain.setValueAtTime(1e-4,r),m.gain.exponentialRampToValueAtTime(Math.max(2e-4,b),r+.004),m.gain.exponentialRampToValueAtTime(1e-4,r+_*l*(.7+a*.6)),p.connect(m).connect(o),p.start(r),p.stop(r+_*l*1.4+.1)}const h=this.noiseSource(!1),d=i.createBiquadFilter();d.type="highpass",d.frequency.value=2600;const u=i.createGain();u.gain.setValueAtTime(.16*a,r),u.gain.exponentialRampToValueAtTime(1e-4,r+.035),h.connect(d).connect(u).connect(o),h.start(r),h.stop(r+.06)}woodPlace(t=.7,e=200){if(!this.ctx||!this.master||this.muted)return;const n=this.ctx,i=n.currentTime,r=n.createGain();r.gain.value=.5*t,r.connect(this.master);const a=this.noiseSource(!1),o=n.createBiquadFilter();o.type="bandpass",o.frequency.value=e*2.2,o.Q.value=2.4;const c=n.createGain();c.gain.setValueAtTime(.5,i),c.gain.exponentialRampToValueAtTime(1e-4,i+.09),a.connect(o).connect(c).connect(r),a.start(i),a.stop(i+.12);for(const[l,h,d]of[[1,.5,.16],[1.94,.22,.1],[3.1,.1,.06]]){const u=n.createOscillator();u.type="triangle",u.frequency.value=e*l;const f=n.createGain();f.gain.setValueAtTime(1e-4,i),f.gain.exponentialRampToValueAtTime(h,i+.004),f.gain.exponentialRampToValueAtTime(1e-4,i+d),u.connect(f).connect(r),u.start(i),u.stop(i+d+.05)}}metalSeat(t=.7){if(!this.ctx||!this.master||this.muted)return;const e=this.ctx,n=e.currentTime,i=e.createGain();i.gain.value=.32*t,i.connect(this.master);const r=this.noiseSource(!1),a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=3400,a.Q.value=1.4;const o=e.createGain();o.gain.setValueAtTime(.55,n),o.gain.exponentialRampToValueAtTime(1e-4,n+.07),r.connect(a).connect(o).connect(i),r.start(n),r.stop(n+.1);const c=e.createOscillator();c.type="sine",c.frequency.value=1180;const l=e.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(.2,n+.003),l.gain.exponentialRampToValueAtTime(1e-4,n+.16),c.connect(l).connect(i),c.start(n),c.stop(n+.2)}slide(t=.28){if(!this.ctx||!this.master||this.muted)return;const e=this.ctx,n=e.currentTime,i=this.noiseSource(!1),r=e.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(900,n),r.frequency.exponentialRampToValueAtTime(380,n+t),r.Q.value=1.2;const a=e.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.linearRampToValueAtTime(.1,n+t*.35),a.gain.exponentialRampToValueAtTime(1e-4,n+t),i.connect(r).connect(a).connect(this.master),i.start(n),i.stop(n+t+.05)}lighterClick(){if(!this.ctx||!this.master||this.muted)return;const t=this.ctx,e=t.currentTime,n=this.noiseSource(!1),i=t.createBiquadFilter();i.type="highpass",i.frequency.value=3e3;const r=t.createGain();r.gain.setValueAtTime(.3,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.045),n.connect(i).connect(r).connect(this.master),n.start(e),n.stop(e+.08)}igniteWhoosh(){if(!this.ctx||!this.master||this.muted)return;const t=this.ctx,e=t.currentTime,n=this.noiseSource(!1),i=t.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(320,e),i.frequency.exponentialRampToValueAtTime(1500,e+.16),i.frequency.exponentialRampToValueAtTime(520,e+.5),i.Q.value=.9;const r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.2,e+.05),r.gain.exponentialRampToValueAtTime(1e-4,e+.55),n.connect(i).connect(r).connect(this.master),n.start(e),n.stop(e+.6)}setFire(t){if(this.fireLevel=t,!this.ctx||!this.fireGain)return;const e=Tt(t,0,6)*.021;this.fireGain.gain.setTargetAtTime(e,this.ctx.currentTime,.4)}setRotor(t,e){if(!this.ctx||!this.rotorGains[t])return;const n=Tt(Math.abs(e),0,6);this.rotorGains[t].gain.setTargetAtTime(n*.011,this.ctx.currentTime,.35),this.rotorFilters[t].frequency.setTargetAtTime(260+n*130,this.ctx.currentTime,.35)}bearingTick(t=.4,e=150){if(!this.ctx||!this.master||this.muted)return;const n=this.ctx,i=n.currentTime,r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(e*1.2,i),r.frequency.exponentialRampToValueAtTime(e*.75,i+.12);const a=n.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.05*t,i+.01),a.gain.exponentialRampToValueAtTime(1e-4,i+.18),r.connect(a).connect(this.master),r.start(i),r.stop(i+.22)}update(t){if(!this.ctx||this.muted||this.fireLevel<=0||(this.crackleTimer-=t*(.5+this.fireLevel*.55),this.crackleTimer>0))return;this.crackleTimer=.25+Math.random()*.9;const e=this.ctx,n=e.currentTime,i=this.noiseSource(!1),r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=1400+Math.random()*2600,r.Q.value=3.5;const a=e.createGain(),o=.02+Math.random()*.05;a.gain.setValueAtTime(o,n),a.gain.exponentialRampToValueAtTime(1e-4,n+.03+Math.random()*.05),i.connect(r).connect(a).connect(this.master),i.start(n),i.stop(n+.12)}emberBreath(){if(!this.ctx||!this.master||this.muted)return;const t=this.ctx,e=t.currentTime,n=this.noiseSource(!1),i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=900,i.Q.value=1.1;const r=t.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(.06,e+.3),r.gain.exponentialRampToValueAtTime(1e-4,e+1.1),n.connect(i).connect(r).connect(this.master),n.start(e),n.stop(e+1.2)}chime(t){if(!this.ctx||!this.master||this.muted)return;const e=this.ctx,n=[523.25,587.33,659.25,783.99,880],i=Tt(t,0,2);[n[i],n[i+1],n[i+2]].forEach((a,o)=>{const c=e.currentTime+o*.13,l=e.createOscillator();l.type="sine",l.frequency.value=a;const h=e.createOscillator();h.type="sine",h.frequency.value=a*2.01;const d=e.createGain();d.gain.setValueAtTime(1e-4,c),d.gain.exponentialRampToValueAtTime(.16,c+.012),d.gain.exponentialRampToValueAtTime(1e-4,c+.9);const u=e.createGain();u.gain.value=.22,l.connect(d),h.connect(u).connect(d),d.connect(this.master),l.start(c),l.stop(c+1),h.start(c),h.stop(c+1)})}tick(t=880){if(!this.ctx||!this.master||this.muted)return;const e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.value=t;const r=e.createGain();r.gain.setValueAtTime(1e-4,n),r.gain.exponentialRampToValueAtTime(.07,n+.008),r.gain.exponentialRampToValueAtTime(1e-4,n+.16),i.connect(r).connect(this.master),i.start(n),i.stop(n+.2)}}const ne=new j_,Ui=.148;class tx{constructor(t,e){E(this,"group",new oe);E(this,"lower",new oe);E(this,"upper",new oe);E(this,"smoke");E(this,"bodyHit");E(this,"clipLower",new Nn(new w(1,0,0),10));E(this,"clipUpper",new Nn(new w(1,0,0),10));E(this,"cone");E(this,"coneDrag");E(this,"lit",!1);E(this,"isOpen",!1);E(this,"openAmt",0);E(this,"openTarget",0);E(this,"cutaway",0);E(this,"cutawayTarget",0);E(this,"ember");E(this,"coneMatLit");E(this,"coneMatCold");E(this,"clipped",[]);E(this,"smokeDelay",-1);E(this,"mouthLocal",new w(0,.2045,.035));E(this,"tmp",new w);E(this,"emberBase",0);const n=Ce();this.group.position.copy(N_),this.group.rotation.y=.14,this.group.add(this.lower,this.upper);const i=(L,D=!0)=>{const U=L.clone();return U.clippingPlanes=[D?this.clipUpper:this.clipLower],U.side=ze,this.clipped.push(U),U},r=L=>i(L,!1),a=new V(kt([[0,0],[.0525,0],[.0548,.01],[.0512,.048],[.05,.086],[.0512,.116],[.0455,Ui],[.0365,Ui],[.0355,.132],[.0375,.098],[.0355,.055],[.03,.032],[0,.03]],40),r(n.mapleTurned));this.lower.add(a);const o=new V(kt([[.0522,.022],[.053,.03],[.0519,.048],[.0508,.086],[.052,.116],[.0463,Ui]],40),r(n.paintRed));this.lower.add(o);const c=new V(kt([[0,5e-4],[.0528,5e-4],[.0551,.01],[.0524,.022]],32),r(n.paintBrown));this.lower.add(c);const l=new V(kt([[0,.0295],[.0225,.0305],[.0245,.0345],[.0235,.0355],[.0215,.0325],[0,.0315]],24),r(n.brass));this.lower.add(l);const h=new V(kt([[.0455,Ui],[.048,.158],[.0468,.172],[.0405,.183],[.027,.189],[.02,.193],[.029,.1975],[.0378,.2075],[.0368,.217],[.028,.224],[.014,.2285],[0,.2295],[.0125,.2245],[.018,.215],[.0175,.204],[.011,.195],[.01,.19],[.0215,.181],[.0305,.1695],[.036,.158],[.0365,Ui]],40),i(n.mapleTurned));this.upper.add(h);const d=new V(kt([[.0463,Ui],[.0489,.158],[.0477,.172],[.0414,.183],[.0279,.189]],40),i(n.paintRed));this.upper.add(d);const u=new V(kt([[.0207,.193],[.0297,.1975],[.0385,.2075],[.0375,.217],[.0287,.224]],40),i(n.skinPaint));this.upper.add(u);const f=new yh([new w(0,.1955,0),new w(0,.201,.009),new w(0,.204,.022),new w(0,.2045,.0345)]),g=new V(new gc(f,16,.0062,12,!1),i(n.interiorDark));this.upper.add(g);const _=new V(kt([[.0058,0],[.0058,-.006],[.0034,-.012],[0,-.013]],16),i(n.charBlack));_.rotation.x=Math.PI/2,_.position.copy(this.mouthLocal),this.upper.add(_);const p=new V(kt([[0,.2265],[.036,.2275],[.05,.2312],[.0486,.2348],[.031,.2358],[.0256,.2392],[.025,.268],[.0222,.274],[0,.2752]],32),i(n.paintTeal));this.upper.add(p);const m=new V(kt([[.0262,.2412],[.0265,.2482],[.0255,.2488]],32),i(n.paintOchre));this.upper.add(m);const b=new V(kt([[.0215,.19],[.031,.1955],[.0342,.2005],[.0312,.2032]],26,Math.PI*.92),i(n.paintCream));b.rotation.y=-Math.PI*.46,this.upper.add(b);const y=new Mn(.003,8,6);for(const L of[-1,1]){const D=new V(y,i(n.charBlack));D.position.set(L*.0125,.2135,.0342),this.upper.add(D)}const M=new V(new er(.005,.0105,8),i(n.skinPaint));M.rotation.x=Math.PI/2,M.position.set(0,.2092,.0368),this.upper.add(M);const A=kt([[.0088,0],[.0096,.005],[.0082,.03],[.007,.04]],12),T=new Mn(.0088,10,8);for(const L of[-1,1]){const D=new V(A,i(n.paintRed));D.position.set(L*.0455,.181,.006),D.rotation.set(-.14,0,L*(Math.PI-.28)),this.upper.add(D);const U=new V(T,i(n.paintCream));U.position.set(L*.0568,.1408,.0104),this.upper.add(U)}const P=new Mn(.0033,8,6);for(let L=0;L<2;L++){const D=new V(P,i(n.brass));D.position.set(0,.1615+L*.0145,.0462-L*.0014),this.upper.add(D)}this.coneMatCold=n.incense,this.coneMatLit=n.incenseLit.clone(),this.cone=new V(kt([[0,0],[.0092,5e-4],[.0088,.004],[.006,.0125],[.0026,.0185],[0,.0205]],16),this.coneMatCold),this.cone.name="incense";const v=On(.036,"incense");v.position.y=.012,this.cone.add(v),this.ember=new tr(16735252,0,.3,2),this.ember.position.set(0,.048,0),this.cone.add(this.ember),this.bodyHit=oa(.14,.29,.14,"smoker"),this.bodyHit.position.set(0,.142,0),this.group.add(this.bodyHit);const R=sr(.085,.55);R.position.y=.0012,this.group.add(R),Rn(this.lower,t,!0),Rn(this.upper,t,!1),this.smoke=new Q_(e),this.updateClip()}mouthWorld(t=new w){return this.upper.updateWorldMatrix(!0,!1),t.copy(this.mouthLocal).applyMatrix4(this.upper.matrixWorld)}mouthClosedWorld(t=new w){return this.group.updateWorldMatrix(!0,!1),t.copy(this.mouthLocal).applyMatrix4(this.group.matrixWorld)}mouthDirWorld(t=new w){return t.set(0,.52,1).normalize().applyQuaternion(this.group.getWorldQuaternion(new be))}coneTipWorld(t=new w){return this.cone.updateWorldMatrix(!0,!1),t.set(0,.021,0).applyMatrix4(this.cone.matrixWorld)}dishWorld(t=new w){return this.lower.updateWorldMatrix(!0,!1),t.set(0,.033,0).applyMatrix4(this.lower.matrixWorld)}upperHandleWorld(t=new w){return this.upper.updateWorldMatrix(!0,!1),t.set(0,.2,0).applyMatrix4(this.upper.matrixWorld)}open(){this.openTarget=1,this.isOpen=!0,this.smokeDelay=-1}close(){this.openTarget=0,this.isOpen=!1}showSection(t){this.cutawayTarget=t?1:0}ignite(){this.lit||(this.lit=!0,this.cone.material=this.coneMatLit,ne.igniteWhoosh(),ne.emberBreath())}extinguish(){this.lit=!1,this.cone.material=this.coneMatCold,this.smoke.rate=0,this.smoke.clear()}updateClip(){this.upper.updateWorldMatrix(!0,!1);const t=this.tmp.setFromMatrixPosition(this.upper.matrixWorld).x,e=this.group.position.x,n=this.cutaway>.001;this.clipUpper.constant=n?-(t-.075+this.cutaway*.075):10,this.clipLower.constant=n?-(e-.075+this.cutaway*.075):10}update(t,e){this.openAmt=Ke(this.openAmt,this.openTarget,5,t);const n=us(Tt(this.openAmt,0,1)),i=Math.sin(n*Math.PI)*.085;this.upper.position.set(n*.108,i-n*Ui,n*.006),this.upper.rotation.set(0,n*.34,0),this.cutaway=Ke(this.cutaway,this.cutawayTarget,3.4,t),this.updateClip();const r=1-g_(.05,.55,this.openAmt);this.emberBase=this.lit?1:0;const a=.72+.28*Math.sin(e*5.7)*Math.sin(e*2.3);this.ember.intensity=this.emberBase*(1-r*.94)*.085*a,this.coneMatLit.emissiveIntensity=this.emberBase*(.7+a*.9),this.lit?this.openAmt>.35?(this.smoke.setOrigin(this.coneTipWorld(this.tmp),new w(0,1,0)),this.smoke.rate=9,this.smoke.strength=.55,this.smoke.speed=.045,this.smokeDelay=-1):(this.smokeDelay<0&&(this.smokeDelay=0,this.smoke.rate=0),this.smokeDelay+=t,this.smoke.setOrigin(this.mouthWorld(this.tmp),this.mouthDirWorld()),this.smoke.speed=.085,this.smoke.strength=1,this.smoke.rate=this.smokeDelay>1.35?15*Tt((this.smokeDelay-1.35)/1.1,.12,1):0):this.smoke.rate=0,this.smoke.update(t,e)}get puffing(){return this.lit&&!this.isOpen&&this.smokeDelay>1.5}}class ms{constructor(t,e,n,i=!1){E(this,"mesh");E(this,"shown");E(this,"mtx",new jt);E(this,"hidden",new jt().makeScale(0,0,0));this.mesh=new zn(t,e,n),this.mesh.castShadow=i,this.mesh.receiveShadow=!1,this.mesh.frustumCulled=!1,this.shown=new Array(n).fill(!1);for(let r=0;r<n;r++)this.mesh.setMatrixAt(r,this.hidden);this.mesh.instanceMatrix.needsUpdate=!0}place(t,e,n,i=1){this.mtx.compose(e,n,new w(i,i,i)),this.mesh.setMatrixAt(t,this.mtx),this.mesh.instanceMatrix.needsUpdate=!0,this.shown[t]=!0}setMatrix(t,e){this.mesh.setMatrixAt(t,e),this.mesh.instanceMatrix.needsUpdate=!0,this.shown[t]=!0}hide(t){this.mesh.setMatrixAt(t,this.hidden),this.mesh.instanceMatrix.needsUpdate=!0,this.shown[t]=!1}isShown(t){return this.shown[t]}}function qh(s){const t=new we(.006,.0068,s,14,1);t.translate(0,s/2,0);const e=new we(6e-4,95e-5,.0105,5);return e.translate(0,s+.0042,0),{wax:t,wick:e}}const ii=6,Oe=4,Us=.028,Si=.148,ex=Si+.009,Fr=.452,Or=.093,Ns=.07,Fs=.038;class nx{constructor(t,e){E(this,"group",new oe);E(this,"spinner",new oe);E(this,"hub",new oe);E(this,"table",new oe);E(this,"bodyHit");E(this,"vaneSet");E(this,"waxSet");E(this,"wickSet");E(this,"shaftMesh");E(this,"tableMesh");E(this,"figureMeshes",[]);E(this,"hubMesh");E(this,"vaneMeshes",[]);E(this,"candleMeshes",[]);E(this,"shaftIn",!1);E(this,"tableIn",!1);E(this,"hubIn",!1);E(this,"figuresIn",[!1,!1,!1]);E(this,"vanesIn",new Array(ii).fill(!1));E(this,"candlesIn",new Array(Oe).fill(!1));E(this,"pitch",.2);E(this,"angle",0);E(this,"omega",0);E(this,"heat",0);E(this,"litCount",0);E(this,"lastRev",0);E(this,"tremble",0);E(this,"flameBase",0);E(this,"clusterLight");E(this,"mtx",new jt);const n=Ce();this.flameBase=e,this.group.position.copy(F_),this.group.rotation.y=-.1,this.group.add(this.spinner);const i=new V(kt([[0,0],[.12,0],[.1225,.005],[.1205,.014],[.1235,.018],[.119,.024],[.115,Us],[.03,Us],[.026,.024],[0,.024]],44),n.walnutTurned);this.group.add(i);const r=new V(new Vn(.1205,.0042,6,44),n.walnutTurned);r.rotation.x=Math.PI/2,r.position.y=.0165,this.group.add(r);const a=new V(kt([[0,.0225],[.0255,.0235],[.0265,Us+.004],[.0215,Us+.005],[.0205,Us+.001],[.0075,.0215],[.0032,.0175],[0,.017]],26),n.brass);this.group.add(a);const o=kt([[0,.026],[.0175,.027],[.0185,.0315],[.0165,.0325],[.0105,.0345],[.0105,Fs+.004],[.0082,Fs+.004],[.0082,.0335],[.0072,.032],[0,.031]],20);for(let u=0;u<Oe;u++){const f=u/Oe*ke+Math.PI/4,g=new V(o,n.brassDark);g.position.set(Math.cos(f)*Or,0,Math.sin(f)*Or),this.group.add(g)}this.shaftMesh=new V(kt([[0,0],[.0038,.005],[.0044,.014],[.0042,.398],[.0056,.403],[.0056,.412],[.0034,.419],[0,.4235]],14),n.brass),this.shaftMesh.add(On(.05,"py_shaft")),this.shaftMesh.children[0].position.y=.21,this.tableMesh=new V(kt([[0,0],[.0125,0],[.013,.004],[.0145,.0055],[.0765,.0055],[.078,.0075],[.076,.009],[.014,.009],[.0125,.02],[.0075,.0205],[0,.0205]],40),n.mapleTurned),this.tableMesh.add(On(.06,"py_table")),this.figureMeshes=[this.buildTree(),this.buildAngel(),this.buildDeer()],this.figureMeshes.forEach((u,f)=>{const g=On(.042,`py_fig${f}`);g.position.y=.028,u.add(g)}),this.hubMesh=new V(kt([[0,0],[.011,0],[.0116,.004],[.03,.0052],[.0314,.0088],[.0302,.0158],[.013,.017],[.0118,.0205],[.0056,.021],[.0056,.004],[0,.0034]],26),n.mapleTurned),this.hubMesh.add(On(.05,"py_hub"));const c=Xh(.092,.058,.003,.22);c.rotateX(Math.PI/2);for(let u=0;u<ii;u++){const f=new V(c,n.vaneWood);f.add(On(.042,`py_vane${u}`)),f.children[0].position.x=.042,this.vaneMeshes.push(f)}this.vaneSet=new ms(c,n.vaneWood,ii,t),this.hub.add(this.vaneSet.mesh);const{wax:l,wick:h}=qh(Ns);this.waxSet=new ms(l,n.wax,Oe,t),this.wickSet=new ms(h,n.wick,Oe,!1),this.group.add(this.waxSet.mesh,this.wickSet.mesh);for(let u=0;u<Oe;u++){const f=new oe;f.add(new V(l,n.wax)),f.add(new V(h,n.wick));const g=On(.045,`py_candle${u}`);g.position.y=.045,f.add(g),this.candleMeshes.push(f)}this.spinner.add(this.table),this.spinner.add(this.hub),this.hub.position.y=Fr,this.table.position.y=Si,this.clusterLight=new tr(16751176,0,1.1,2),this.clusterLight.position.set(0,Fs+Ns+.055,0),this.group.add(this.clusterLight),this.bodyHit=oa(.26,.5,.26,"pyramid"),this.bodyHit.position.y=.25,this.group.add(this.bodyHit);const d=sr(.17,.55);d.position.y=.0012,this.group.add(d),Rn(this.group,t,!0)}buildTree(){const t=Ce();return new V(kt([[0,0],[.01,0],[.01,.008],[.0045,.01],[.0045,.018],[.019,.02],[.0155,.022],[.006,.026],[.0165,.03],[.013,.032],[.005,.038],[.013,.042],[.01,.044],[.0038,.05],[.0085,.053],[.006,.055],[0,.066]],20),t.paintTeal)}buildAngel(){const t=Ce(),e=new V(kt([[0,0],[.0125,0],[.0135,.006],[.0125,.03],[.0092,.038],[.006,.042],[.0068,.045],[.0105,.052],[.0092,.058],[.004,.061],[0,.062]],20),t.paintCream),n=he(.0022,.026,.017,6e-4);for(const r of[-1,1]){const a=new V(n,t.paintOchre);a.position.set(r*.011,.034,-.005),a.rotation.set(.12,r*.5,r*.22),e.add(a)}const i=new V(new Vn(.0072,.0011,5,12),t.brass);return i.position.set(0,.0625,-.002),i.rotation.x=.5,e.add(i),e}buildDeer(){const t=Ce(),e=t.paintOchre,n=new V(kt([[0,0],[.0115,.002],[.0125,.012],[.0105,.024],[0,.028]],16),e);n.scale.set(1,1,1.7),n.position.y=.024;const i=new V(new Pe,e);i.add(n);const r=new we(.0022,.0018,.024,6);for(const l of[-1,1])for(const h of[-1,1]){const d=new V(r,e);d.position.set(l*.0068,.012,h*.013),i.add(d)}const a=new V(new we(.0048,.006,.02,8),e);a.position.set(0,.042,-.014),a.rotation.x=-.42,i.add(a);const o=new V(new Mn(.0062,10,8),e);o.scale.set(.9,.85,1.4),o.position.set(0,.0505,-.02),i.add(o);const c=new we(9e-4,7e-4,.014,4);for(const l of[-1,1]){const h=new V(c,t.paintCream);h.position.set(l*.0035,.0575,-.019),h.rotation.z=l*.3,i.add(h)}return i}world(t,e){return this.group.updateWorldMatrix(!0,!1),e.copy(t).applyMatrix4(this.group.matrixWorld)}shaftSocketWorld(t=new w){return this.world(new w(0,.0175,0),t)}tableSocketWorld(t=new w){return this.world(new w(0,Si,0),t)}hubSocketWorld(t=new w){return this.world(new w(0,Fr,0),t)}figureSocketLocal(t){const e=t/3*ke+.5;return new w(Math.cos(e)*.046,ex,Math.sin(e)*.046)}figureSocketWorld(t,e=new w){return this.world(this.figureSocketLocal(t),e)}vaneSocketLocal(t){const e=t/ii*ke;return new w(Math.cos(e)*.034,Fr+.011,Math.sin(e)*.034)}vaneSocketWorld(t,e=new w){return this.world(this.vaneSocketLocal(t),e)}vaneWorldQuat(t){const e=t/ii*ke,n=new be().setFromEuler(new ye(this.pitch,-e,0,"YXZ"));return this.group.getWorldQuaternion(new be).multiply(n)}candleSocketLocal(t){const e=t/Oe*ke+Math.PI/4;return new w(Math.cos(e)*Or,Fs,Math.sin(e)*Or)}candleSocketWorld(t,e=new w){return this.world(this.candleSocketLocal(t),e)}wickWorld(t,e=new w){const n=this.candleSocketLocal(t);return n.y+=Ns+.006,this.world(n,e)}flameWorld(t,e=new w){const n=this.candleSocketLocal(t);return n.y+=Ns+.0045,this.world(n,e)}rotorWorld(t=new w){return this.world(new w(0,Fr+.01,0),t)}thermalWorld(t=new w){return this.world(new w(0,Fs+Ns+.02,0),t)}fitShaft(){this.shaftIn=!0,this.shaftMesh.position.set(0,.0175,0),this.shaftMesh.rotation.set(0,0,0),this.spinner.add(this.shaftMesh);const t=new V(kt([[0,Si-.0495],[.0118,Si-.049],[.0124,Si-.0465],[.0056,Si-.046]],16),Ce().brass);this.spinner.add(t),ne.metalSeat(.8)}fitTable(){this.tableIn=!0,this.tableMesh.position.set(0,0,0),this.table.add(this.tableMesh),ne.slide(.3),ne.woodPlace(.55,240)}fitFigure(t){this.figuresIn[t]=!0;const e=this.figureSocketLocal(t),n=this.figureMeshes[t];n.position.set(e.x,e.y-Si,e.z),n.rotation.y=t/3*ke+2.1,this.table.add(n),ne.woodPlace(.5,300+t*40)}fitHub(){this.hubIn=!0,this.hubMesh.position.set(0,0,0),this.hub.add(this.hubMesh),ne.woodPlace(.6,210)}fitVane(t){this.vanesIn[t]=!0,this.vaneMeshes[t].visible=!1,this.applyVaneMatrices(),ne.woodPlace(.42,380+t*22)}fitCandle(t){this.candlesIn[t]=!0,this.candleMeshes[t].visible=!1;const e=this.candleSocketLocal(t),n=new be;this.waxSet.place(t,e,n),this.wickSet.place(t,e,n),ne.woodPlace(.34,520)}applyVaneMatrices(){const t=new w(.034,.011,0);for(let e=0;e<ii;e++){if(!this.vanesIn[e]){this.vaneSet.hide(e);continue}const n=e/ii*ke;this.mtx.makeRotationY(-n);const i=new jt().makeTranslation(t.x,t.y,t.z).multiply(new jt().makeRotationX(this.pitch));this.mtx.multiply(i),this.vaneSet.setMatrix(e,this.mtx)}}get vanesPlaced(){return this.vanesIn.filter(Boolean).length}get candlesPlaced(){return this.candlesIn.filter(Boolean).length}setPitch(t){this.pitch=Tt(t,-.62,.62),this.applyVaneMatrices()}vaneFactor(){const e=.3+.7*(Math.sin(Math.abs(this.pitch))/Math.sin(.62)),n=this.pitch>=0?1:-1;return e*n*(this.vanesPlaced/ii)}setLitCount(t){this.litCount=t}update(t,e,n){const i=this.litCount/Oe;this.heat=Ke(this.heat,i,.55,t);const r=1.25*this.heat*this.vaneFactor(),a=.42,o=.6,c=2.2;if(Math.abs(this.omega)<.012&&Math.abs(r)<a){this.omega=0;const u=Tt((Math.abs(r)/a-.25)/.75,0,1);this.tremble=Ke(this.tremble,u,1.6,t)}else{const u=r-Math.sign(this.omega||r)*a*.35-o*this.omega;this.omega+=u/c*t,this.tremble=Ke(this.tremble,0,2.4,t)}this.angle+=this.omega*t;const l=this.tremble*.03*Math.sin(e*9.2)+this.tremble*.012*Math.sin(e*15.7);this.spinner.rotation.y=this.angle+l,this.spinner.rotation.x=Math.sin(this.angle*1+.7)*.0022,this.spinner.rotation.z=Math.cos(this.angle*1)*.0022;const h=Math.floor(Math.abs(this.angle)/ke);h!==this.lastRev&&(this.lastRev=h,ne.bearingTick(Tt(Math.abs(this.omega)*.4,.12,.7),138)),ne.setRotor(0,this.omega);let d=0;for(let u=0;u<Oe;u++)d+=n.brightness(this.flameBase+u);this.clusterLight.intensity=d*.115,this.clusterLight.color.setRGB(1,.62+.05*Math.sin(e*6.1),.3)}get running(){return Math.abs(this.omega)>.06}get speedRatio(){return Tt(Math.abs(this.omega)/2.1,0,1)}}const rn=3,xn=5,Be=4,Br=.01,Zl=.248,cs=.2405,ei=.0345,Jl=.0173,ix=.051,kr=.185,zr=.036,Os=.07,Bs=.0165,ni=[{ang:0,r:.0138,f:1046.5},{ang:1.15,r:.013,f:1174.7},{ang:2.05,r:.0125,f:1318.5},{ang:3.45,r:.0118,f:1396.9},{ang:4.85,r:.0108,f:1568}],Ja=s=>ix+s.r;class sx{constructor(t,e){E(this,"group",new oe);E(this,"spinner",new oe);E(this,"bodyHit");E(this,"waxSet");E(this,"wickSet");E(this,"angelMeshes",[]);E(this,"bellMeshes",[]);E(this,"candleMeshes",[]);E(this,"angelsIn",new Array(rn).fill(!1));E(this,"bellsIn",new Array(xn).fill(!1));E(this,"candlesIn",new Array(Be).fill(!1));E(this,"wire",.0625);E(this,"angle",0);E(this,"omega",0);E(this,"heat",0);E(this,"hangers",[]);E(this,"holders",[]);E(this,"deflect",new Float32Array(rn));E(this,"deflectVel",new Float32Array(rn));E(this,"prevDelta",new Float32Array(rn*xn).fill(9));E(this,"bellRing",new Float32Array(xn));E(this,"litCount",0);E(this,"lastRev",0);E(this,"tremble",0);E(this,"flameBase");E(this,"clusterLight");E(this,"strikes",0);const n=Ce();this.flameBase=e,this.group.position.copy(O_),this.group.rotation.y=.24,this.group.add(this.spinner);const i=new V(kt([[0,0],[.086,0],[.0875,.0028],[.0855,.0072],[.082,Br],[.018,Br],[.016,.0075],[0,.0072]],42),n.brass);this.group.add(i);const r=new V(kt([[0,Br],[.0175,Br],[.018,.0155],[.0125,.0185],[.006,.0195],[.0028,.0165],[0,.016]],22),n.brass);this.group.add(r);const a=new V(kt([[0,.016],[.0034,.02],[.0038,.23],[.005,.234],[.004,.24],[.0016,.2455],[0,.2465]],12),n.brass);this.group.add(a);for(const _ of ni){const p=Ja(_),m=new V(kt([[0,.008],[.0055,.01],[.0044,.017],[.0032,.15],[.0036,.2035],[.0024,.2065],[0,.207]],10),n.brass);m.position.set(Math.cos(_.ang)*p,0,Math.sin(_.ang)*p),this.group.add(m);const b=new V(he(.0165,.003,.003,5e-4),n.brass);b.position.set(Math.cos(_.ang)*(p-.0082),.2055,Math.sin(_.ang)*(p-.0082)),b.rotation.y=-_.ang,this.group.add(b);const y=new V(new Vn(.0048,.0012,5,12),n.brassBell);y.position.set(Math.cos(_.ang)*p,kr,Math.sin(_.ang)*p),y.rotation.x=Math.PI/2,this.group.add(y)}const o=kt([[0,.009],[.0155,.0098],[.0162,.0128],[.0145,.0138],[.0098,.0155],[.0098,Bs+.004],[.0078,Bs+.004],[.0078,.0148],[.0068,.0138],[0,.0132]],18);for(let _=0;_<Be;_++){const p=_/Be*ke+.6,m=new V(o,n.brassDark);m.position.set(Math.cos(p)*zr,0,Math.sin(p)*zr),this.group.add(m)}const c=new V(kt([[0,.238],[.0105,.2385],[.0112,.2425],[.0105,.2525],[.0042,.2545],[.0032,.2395],[0,.2385]],18),n.brass);this.spinner.add(c);const l=Xh(.042,.03,.0011,.3);l.rotateX(Math.PI/2);const h=new ms(l,n.brass,6,t),d=new jt;for(let _=0;_<6;_++){const p=_/6*ke;d.makeRotationY(-p),d.multiply(new jt().makeTranslation(.0105,Zl-.002,0).multiply(new jt().makeRotationX(.62))),h.setMatrix(_,d)}this.spinner.add(h.mesh);for(let _=0;_<rn;_++){const p=_/rn*ke,m=new V(he(ei+.004,.0018,.0018,4e-4),n.brass);m.position.set(Math.cos(p)*(ei/2),cs+.0025,Math.sin(p)*(ei/2)),m.rotation.y=-p,this.spinner.add(m);const b=new V(new Vn(.0026,6e-4,4,10,Math.PI*1.5),n.brass);b.position.set(Math.cos(p)*ei,cs,Math.sin(p)*ei),b.rotation.set(Math.PI/2,0,-p),this.spinner.add(b);const y=new oe;y.position.set(Math.cos(p)*ei,cs,Math.sin(p)*ei),y.rotation.y=-p,y.visible=!1;const M=new V(new we(42e-5,42e-5,1,5),Ce().brass);M.name="wire",y.add(M);const A=new Te;A.name="holder",y.add(A),this.spinner.add(y),this.hangers.push(y),this.holders.push(A)}for(let _=0;_<rn;_++)this.angelMeshes.push(this.buildAngel(_));for(let _=0;_<xn;_++)this.bellMeshes.push(this.buildBell(_));const{wax:u,wick:f}=qh(Os);this.waxSet=new ms(u,n.wax,Be,t),this.wickSet=new ms(f,n.wick,Be,!1),this.group.add(this.waxSet.mesh,this.wickSet.mesh);for(let _=0;_<Be;_++){const p=new oe;p.add(new V(u,n.wax)),p.add(new V(f,n.wick));const m=On(.042,`ch_candle${_}`);m.position.y=.038,p.add(m),this.candleMeshes.push(p)}this.clusterLight=new tr(16753236,0,.95,2),this.clusterLight.position.set(0,Bs+Os+.05,0),this.group.add(this.clusterLight),this.bodyHit=oa(.2,.3,.2,"chimes"),this.bodyHit.position.y=.15,this.group.add(this.bodyHit);const g=sr(.125,.55);g.position.y=.0012,this.group.add(g),Rn(this.group,t,!0)}buildAngel(t){const e=Ce(),n=new oe,i=new V(kt([[0,0],[.011,.0015],[.0118,.006],[.0105,.02],[.0072,.026],[.0048,.029],[.0055,.032],[.0082,.038],[.007,.043],[.003,.046],[0,.0465]],18),t===1?e.paintCream:e.paintOchre);i.position.y=-.046,n.add(i);const r=he(.0016,.021,.014,5e-4);for(const d of[-1,1]){const u=new V(r,e.brass);u.position.set(d*.0088,-.0155,-.0045),u.rotation.set(.1,d*.55,d*.2),n.add(u)}const a=Jl-.005,o=new V(new we(75e-5,65e-5,a,6),e.brass);o.rotation.z=-Math.PI/2,o.position.set(.005+a/2,-.0225,0),n.add(o);const c=new V(new Mn(.0021,8,6),e.brassBell);c.position.set(Jl,-.0225,0),n.add(c);const l=new V(new Vn(.0058,9e-4,4,10),e.brass);l.position.set(0,.0015,-.002),l.rotation.x=.55,n.add(l);const h=On(.04,`ch_angel${t}`);return h.position.y=-.022,n.add(h),n}buildBell(t){const e=Ce(),i=ni[t].r,r=new V(kt([[0,.0215],[.0032,.0212],[.0036,.0196],[.0048,.0185],[i*.42,.0155],[i*.78,.0095],[i*.97,.0035],[i,8e-4],[i,0],[i*.9,6e-4],[i*.86,.0038],[i*.68,.0098],[i*.34,.0158],[.0026,.0192],[0,.0195]],26),e.brassBell),a=new V(new Mn(i*.2,8,6),e.brassDark);a.position.y=.0045,r.add(a);const o=On(.038,`ch_bell${t}`);return o.position.y=.01,r.add(o),r.userData.hit=`ch_bell${t}`,r}world(t,e){return this.group.updateWorldMatrix(!0,!1),e.copy(t).applyMatrix4(this.group.matrixWorld)}hookLocal(t){const e=t/rn*ke+this.angle;return new w(Math.cos(e)*ei,cs-this.wire,Math.sin(e)*ei)}hookWorld(t,e=new w){return this.world(this.hookLocal(t),e)}bellLocal(t){const e=ni[t],n=Ja(e);return new w(Math.cos(e.ang)*n,kr-.0195,Math.sin(e.ang)*n)}bellWorld(t,e=new w){return this.world(this.bellLocal(t),e)}candleLocal(t){const e=t/Be*ke+.6;return new w(Math.cos(e)*zr,Bs,Math.sin(e)*zr)}candleWorld(t,e=new w){return this.world(this.candleLocal(t),e)}wickWorld(t,e=new w){const n=this.candleLocal(t);return n.y+=Os+.006,this.world(n,e)}flameWorld(t,e=new w){const n=this.candleLocal(t);return n.y+=Os+.0045,this.world(n,e)}rotorWorld(t=new w){return this.world(new w(0,Zl,0),t)}thermalWorld(t=new w){return this.world(new w(0,Bs+Os+.02,0),t)}wireHandleWorld(t=new w){return this.world(new w(0,cs-this.wire+.02,0),t)}fitAngel(t){this.angelsIn[t]=!0;const e=this.angelMeshes[t];e.position.set(0,0,0),e.rotation.set(0,0,0),this.holders[t].add(e),this.hangers[t].visible=!0,ne.metalSeat(.55),this.applyWire()}fitBell(t){this.bellsIn[t]=!0;const e=ni[t],n=Ja(e),i=this.bellMeshes[t];i.position.set(Math.cos(e.ang)*n,kr-.0195,Math.sin(e.ang)*n),i.rotation.set(0,-e.ang,0),this.group.add(i),ne.bell(e.f,.35,t/xn)}fitCandle(t){this.candlesIn[t]=!0,this.candleMeshes[t].visible=!1;const e=this.candleLocal(t);this.waxSet.place(t,e,new be),this.wickSet.place(t,e,new be),ne.woodPlace(.3,540)}setWire(t){this.wire=Tt(t,.038,.064),this.applyWire()}applyWire(){for(let t=0;t<rn;t++){const e=this.hangers[t].getObjectByName("wire");e.scale.y=this.wire,e.position.y=-this.wire/2,this.holders[t].position.y=-this.wire}}get alignment(){return 1-Tt(Math.abs(this.wire-.05)/.014,0,1)}get angelsPlaced(){return this.angelsIn.filter(Boolean).length}get bellsPlaced(){return this.bellsIn.filter(Boolean).length}get candlesPlaced(){return this.candlesIn.filter(Boolean).length}get strikeCount(){return this.strikes}setLitCount(t){this.litCount=t}rotateBellSet(){const t=ni.map(n=>n.f),e=t.shift();t.push(e),ni.forEach((n,i)=>{n.f=t[i]});for(let n=0;n<xn;n++)this.bellsIn[n]&&ne.bell(ni[n].f,.3,n/xn)}update(t,e,n){const i=this.litCount/Be;this.heat=Ke(this.heat,i,.7,t);const r=.95*this.heat*(.35+.65*(this.angelsPlaced/rn)),a=.22,o=.36,c=.95;if(Math.abs(this.omega)<.012&&r<a){this.omega=0;const _=Tt((r/a-.25)/.75,0,1);this.tremble=Ke(this.tremble,_,1.8,t)}else{const _=r-Math.sign(this.omega||r)*a*.3-o*this.omega;this.omega+=_/c*t,this.tremble=Ke(this.tremble,0,2.4,t)}this.angle+=this.omega*t;const l=this.tremble*.026*Math.sin(e*11.3);this.spinner.rotation.y=this.angle+l;const h=Math.floor(Math.abs(this.angle)/ke);h!==this.lastRev&&(this.lastRev=h,ne.bearingTick(Tt(Math.abs(this.omega)*.22,.06,.3),320)),ne.setRotor(1,this.omega*1.2);const d=Tt(Math.abs(this.omega)*.011,0,.026),u=cs-this.wire-.0225,f=1-Tt(Math.abs(u-kr)/.016,0,1)*.62;for(let _=0;_<rn;_++){if(!this.angelsIn[_])continue;const p=this.hangers[_];this.deflectVel[_]+=(-56*this.deflect[_]-7.5*this.deflectVel[_])*t,this.deflect[_]+=this.deflectVel[_]*t;const m=this.angle+_/rn*ke;let b=0;for(let M=0;M<xn;M++){if(!this.bellsIn[M])continue;const A=v_(m,ni[M].ang),T=_*xn+M,P=this.prevDelta[T],v=1-Tt(Math.abs(A)/.16,0,1);if(v>b&&(b=v),P<9&&Math.abs(P)<.5&&Math.abs(A)<.5&&Math.sign(P)!==Math.sign(A)&&Math.abs(this.omega)>.1){const R=Tt(Math.abs(this.omega)*.42,.14,1)*f;ne.bell(ni[M].f,R,M/xn),this.bellRing[M]=1,this.deflectVel[_]-=Math.sign(this.omega)*3.4*R,this.strikes++}this.prevDelta[T]=A}const y=b*f;p.rotation.z=d-y*.045,p.rotation.y=-(_/rn)*ke+this.deflect[_]}for(let _=0;_<xn;_++){if(!this.bellsIn[_])continue;this.bellRing[_]=Ke(this.bellRing[_],0,4.2,t);const p=this.bellMeshes[_];p.rotation.z=Math.sin(e*26+_)*this.bellRing[_]*.05,p.rotation.x=Math.cos(e*24+_*2)*this.bellRing[_]*.035}let g=0;for(let _=0;_<Be;_++)g+=n.brightness(this.flameBase+_);this.clusterLight.intensity=g*.1}get running(){return Math.abs(this.omega)>.06}}function Kl(s,t,e){return s.homeParent.updateWorldMatrix(!0,!1),t.copy(s.homeLocal).applyMatrix4(s.homeParent.matrixWorld),s.homeParent.getWorldQuaternion(e).multiply(s.homeQuatLocal),t}class rx{constructor(t,e){E(this,"mode",{kind:"none"});E(this,"lighterRoot",null);E(this,"lighterHome",new w);E(this,"lighterHomeQuat",new be);E(this,"onLighterMove",null);E(this,"lighterTip",null);E(this,"traceAnchor",null);E(this,"traceScreenOffset",new nt);E(this,"onLighterPick",null);E(this,"onLighterDrop",null);E(this,"dragging",!1);E(this,"pointerActive",!1);E(this,"pointerNdc",new nt);E(this,"pointerPx",new nt);E(this,"lastInputAt",0);E(this,"engine");E(this,"ray",new _f);E(this,"plane",new Nn);E(this,"grabOffset",new w);E(this,"held",null);E(this,"heldStartPos",new w);E(this,"downPx",new nt);E(this,"downAt",0);E(this,"movedPx",0);E(this,"flights",[]);E(this,"pointerId",-1);E(this,"swipeAccum",0);E(this,"arcAccum",0);E(this,"root");E(this,"onDown",t=>{if(this.pointerActive)return;t.preventDefault(),this.pointerId=t.pointerId,this.pointerActive=!0,this.setPointer(t),this.downPx.copy(this.pointerPx),this.downAt=performance.now(),this.movedPx=0,this.swipeAccum=0,this.arcAccum=0,this.lastInputAt=performance.now(),ne.unlock();const e=this.mode;if(e.kind==="drag"){const n=e.items.filter(o=>!o.placed&&!this.isFlying(o.root)),i=n.map(o=>o.proxy),r=this.pick(i);let a;if(r&&(a=n.find(o=>this.contains(o.proxy,r))),!a){let o=1/0;for(const c of n){const l=c.root.getWorldPosition(new w),h=this.screenDist(l);h<o&&h<this.touchRadius()*1.25&&(o=h,a=c)}}a&&this.beginDrag(a)}else if(e.kind==="trace"){if(this.lighterRoot){const n=this.lighterRoot.getWorldPosition(new w),i=this.lighterTip?.()??n;if(this.pick([this.lighterRoot])||this.screenDist(n)<this.touchRadius()*1.6||this.screenDist(i)<this.touchRadius()*1.6){this.dragging=!0;const a=this.engine.projectPx(i,new nt);this.traceScreenOffset.copy(a).sub(this.pointerPx),this.onLighterPick?.()}}}else(e.kind==="swipe"||e.kind==="arc")&&(this.dragging=!0)});E(this,"onMove",t=>{if(t.pointerId!==this.pointerId||!this.pointerActive)return;t.preventDefault();const e=this.pointerPx.clone();if(this.setPointer(t),this.movedPx+=this.pointerPx.distanceTo(e),this.lastInputAt=performance.now(),!this.dragging)return;const n=this.mode;if(n.kind==="drag"&&this.held){const i=this.planePoint();if(i){const r=i.add(this.grabOffset),a=r.distanceTo(this.held.targetPos),o=1-Tt(a/(this.held.snapRadius*2.4),0,1);r.lerp(this.held.targetPos,o*o*.85),this.held.root.position.copy(r);const c=new be;Kl(this.held,new w,c);const l=c.slerp(this.held.targetQuat,Tt(o*1.5,0,1));this.held.root.quaternion.copy(l)}}else if(n.kind==="swipe"){const i=e.y-this.pointerPx.y;if(this.swipeAccum+=i*n.dir,this.swipeAccum>this.engine.height*.045){this.dragging=!1,this.pointerActive=!1,this.pointerId=-1;const r=n.onDone;this.mode={kind:"none"},r()}}else if(n.kind==="arc"){const i=this.pointerPx.x-e.x,r=this.pointerPx.y-e.y,a=(i-r)/Math.min(this.engine.width,this.engine.height);this.arcAccum+=Math.abs(a),n.onChange(a)}else n.kind==="trace"&&this.lighterRoot&&this.moveWand()});E(this,"onUp",t=>{t.pointerId===this.pointerId&&this.finishPointer(!1)});E(this,"onCancel",t=>{t.pointerId===this.pointerId&&this.finishPointer(!0)});this.engine=t,this.root=e;const n=t.canvas;n.addEventListener("pointerdown",this.onDown,{passive:!1}),n.addEventListener("pointermove",this.onMove,{passive:!1}),window.addEventListener("pointerup",this.onUp,{passive:!1}),window.addEventListener("pointercancel",this.onCancel,{passive:!1}),n.addEventListener("contextmenu",i=>i.preventDefault())}setPointer(t){this.pointerPx.set(t.clientX,t.clientY),this.pointerNdc.set(t.clientX/this.engine.width*2-1,-(t.clientY/this.engine.height)*2+1)}pick(t){if(t.length===0)return null;this.ray.setFromCamera(this.pointerNdc,this.engine.camera);const e=this.ray.intersectObjects(t,!0);return e.length?e[0].object:null}screenDist(t){return this.engine.projectPx(t,new nt).distanceTo(this.pointerPx)}touchRadius(){return Math.min(this.engine.width,this.engine.height)*.17}contains(t,e){let n=e;for(;n;){if(n===t)return!0;n=n.parent}return!1}isFlying(t){return this.flights.some(e=>e.obj===t)}beginDrag(t){this.held=t,this.dragging=!0,t.root.getWorldPosition(this.heldStartPos);const e=t.root.getWorldQuaternion(new be);this.root.attach(t.root),t.root.position.copy(this.heldStartPos),t.root.quaternion.copy(e);const n=this.engine.camera.getWorldDirection(new w);this.plane.setFromNormalAndCoplanarPoint(n,this.heldStartPos);const i=this.planePoint();this.grabOffset.copy(this.heldStartPos).sub(i??this.heldStartPos),ne.tick(660)}moveWand(){const t=this.lighterRoot;if(!t)return;const e=this.lighterTip?.()??t.getWorldPosition(new w),n=this.pointerPx.clone().add(this.traceScreenOffset);this.ray.setFromCamera(new nt(n.x/this.engine.width*2-1,-(n.y/this.engine.height)*2+1),this.engine.camera);const i=this.ray.ray.origin,r=this.ray.ray.direction,a=this.traceAnchor??e,o=Tt(a.clone().sub(i).dot(r),.06,6),c=i.clone().addScaledVector(r,o);t.position.add(c.sub(e)),this.onLighterMove?.(t.position)}planePoint(){this.ray.setFromCamera(this.pointerNdc,this.engine.camera);const t=new w;return this.ray.ray.intersectPlane(this.plane,t)?t:null}finishPointer(t){const e=this.mode,n=this.movedPx<14&&performance.now()-this.downAt<500;if(e.kind==="drag"){if(this.held){const i=this.held,a=i.root.getWorldPosition(new w).distanceTo(i.targetPos)<i.snapRadius||this.screenDist(i.targetPos)<this.touchRadius();!t&&(a||n)?this.seat(i):this.returnHome(i)}else if(!t&&n){const i=e.items.filter(o=>!o.placed&&!this.isFlying(o.root));let r=null,a=1/0;for(const o of i){const c=this.screenDist(o.root.getWorldPosition(new w));c<a&&(a=c,r=o)}r&&this.seat(r)}}else if(e.kind==="tap"&&!t&&n){const i=this.pick(e.proxies);if(i){let r=i;for(;r&&!r.userData.hit;)r=r.parent;r?.userData.hit&&e.onTap(String(r.userData.hit))}}else if(e.kind==="trace")this.onLighterDrop?.();else if(e.kind==="arc"&&this.arcAccum>.1){const i=e.onDone;this.mode={kind:"none"},i()}this.held=null,this.dragging=!1,this.pointerActive=!1,this.pointerId=-1}seat(t){if(t.placed)return;t.placed=!0;const e=t.root.getWorldPosition(new w),n=t.root.getWorldQuaternion(new be);this.root.attach(t.root),t.root.position.copy(e),t.root.quaternion.copy(n),this.flights.push({obj:t.root,fromPos:e,toPos:t.targetPos.clone(),fromQuat:n,toQuat:t.targetQuat.clone(),t:0,dur:.42,arc:Math.min(.06,e.distanceTo(t.targetPos)*.28),onEnd:()=>{t.destParent.attach(t.root),t.onPlace()}})}returnHome(t){const e=t.root.getWorldPosition(new w),n=t.root.getWorldQuaternion(new be),i=new w,r=new be;Kl(t,i,r),this.flights.push({obj:t.root,fromPos:e,toPos:i,fromQuat:n,toQuat:r,t:0,dur:.34,arc:.03,onEnd:()=>{t.homeParent.attach(t.root),t.root.position.copy(t.homeLocal),t.root.quaternion.copy(t.homeQuatLocal)}})}update(t){for(let e=this.flights.length-1;e>=0;e--){const n=this.flights[e];n.t+=t;const i=Tt(n.t/n.dur,0,1),r=i<1?__(i):1,a=n.fromPos.clone().lerp(n.toPos,r);a.y+=Math.sin(i*Math.PI)*n.arc,n.obj.position.copy(a),n.obj.quaternion.copy(n.fromQuat.clone().slerp(n.toQuat,x_(Tt(i*1.1,0,1)))),i>=1&&(n.obj.position.copy(n.toPos),n.obj.quaternion.copy(n.toQuat),this.flights.splice(e,1),n.onEnd?.())}}get busy(){return this.flights.length>0}}class ax{constructor(){E(this,"mesh");E(this,"mat");E(this,"strength",0);E(this,"targetStrength",0);this.mat=new en({uniforms:{uTime:{value:0},uAmt:{value:0},uHue:{value:0},uSize:{value:.12}},vertexShader:`
        uniform float uSize;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mv.xy += position.xy * uSize;
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        precision mediump float;
        uniform float uTime; uniform float uAmt; uniform float uHue;
        varying vec2 vUv;
        void main() {
          if (uAmt <= 0.003) discard;
          vec2 d = vUv - 0.5;
          float r = length(d) * 2.0;
          float pulse = 0.62 + 0.24 * sin(uTime * 2.6);
          float ring = smoothstep(0.10, 0.0, abs(r - pulse)) * 0.85;
          float inner = (1.0 - smoothstep(0.0, pulse * 0.9, r)) * 0.10;
          float a = (ring + inner) * uAmt * (1.0 - smoothstep(0.92, 1.0, r));
          if (a <= 0.004) discard;
          vec3 col = mix(vec3(1.0, 0.80, 0.46), vec3(0.72, 0.90, 1.0), uHue);
          gl_FragColor = vec4(col * (0.8 + ring), a);
        }
      `,transparent:!0,depthWrite:!1,depthTest:!1,blending:qs}),this.mesh=new V(new Ze(1,1),this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20,this.mesh.visible=!1}show(t,e=.05,n=!1){this.mesh.position.copy(t),this.mat.uniforms.uSize.value=e*2.6,this.targetStrength=1,this.mat.uniforms.uHue.value=n?1:0,this.mesh.visible=!0}hide(){this.targetStrength=0}update(t,e){this.strength+=(this.targetStrength-this.strength)*Math.min(1,t*5),this.mat.uniforms.uAmt.value=this.strength,this.mat.uniforms.uTime.value=e,this.strength<.004&&this.targetStrength===0&&(this.mesh.visible=!1)}}const si=0,ri=si+Oe,ds=ri+Be,$l=ds+1;class ox{constructor(t){E(this,"engine");E(this,"scene");E(this,"room");E(this,"outside");E(this,"bench");E(this,"tray");E(this,"lighter");E(this,"craftsman");E(this,"smoker");E(this,"pyramid");E(this,"chimes");E(this,"flames");E(this,"dust");E(this,"snow");E(this,"interaction");E(this,"indicator");E(this,"lighterHeld",!1);E(this,"focus",new w(0,ue+.1,0));E(this,"evening",0);E(this,"lampTarget",1);E(this,"tmp",new w);E(this,"uv",new nt);E(this,"uv2",new nt);E(this,"lighterBob",0);E(this,"tickers",new Set);this.engine=t,this.scene=t.scene;const e=t.tier;I_(t.renderer),this.scene.fog=new cc(2897480,.03),this.room=new H_(e.shadowMapSize,e.shadows),this.scene.add(this.room.group),this.outside=new W_,this.scene.add(this.outside.group),this.bench=new X_(e.shadows),this.scene.add(this.bench.group),this.tray=new q_(e.shadows),this.scene.add(this.tray.group),this.lighter=new Y_(e.shadows),this.scene.add(this.lighter.group),this.craftsman=new Z_(e.shadows),this.scene.add(this.craftsman.group),this.flames=new J_($l),this.scene.add(this.flames.mesh),this.smoker=new tx(e.shadows,e.smokeCount),this.scene.add(this.smoker.group,this.smoker.smoke.mesh),this.pyramid=new nx(e.shadows,si),this.scene.add(this.pyramid.group),this.chimes=new sx(e.shadows,ri),this.scene.add(this.chimes.group),this.dust=new K_(e.dustCount,new ui(new w(-1.5,ue-.2,-.7),new w(1.5,ue+1.1,.9))),this.scene.add(this.dust.points),this.snow=new $_(e.snowCount,this.outside.snowBox),this.outside.group.add(this.snow.points),this.indicator=new ax,this.scene.add(this.indicator.mesh),this.interaction=new rx(t,this.scene),this.interaction.lighterRoot=this.lighter.group,this.interaction.lighterHome.copy(this.lighter.home),this.interaction.lighterHomeQuat.copy(this.lighter.homeQuat),this.interaction.lighterTip=()=>this.lighter.tipWorld(new w),this.interaction.onLighterPick=()=>{if(this.lighterHeld)return;this.lighterHeld=!0,ne.lighterClick();let n=.18;const i=r=>{n-=r,!(n>0)&&(this.tickers.delete(i),this.lighterHeld&&(this.flames.setLit(ds,!0),ne.igniteWhoosh()))};this.tickers.add(i)},t.onResizeHook((n,i,r)=>this.tray.setOrientation(r)),this.dust.setDpr(t.dpr),this.snow.setDpr(t.dpr)}presentLighter(t){const e=this.lighter.group,n=new be().setFromEuler(new ye(.35,0,2.3,"XYZ")),i=e.position.clone(),r=e.quaternion.clone(),a=this.lighter.tip.position.clone().applyQuaternion(n),o=t.clone().sub(a);let c=0;const l=h=>{c=Tt(c+h/.8,0,1);const d=c*c*(3-2*c);e.position.copy(i).lerp(o,d),e.quaternion.copy(r).slerp(n,d),c>=1&&this.tickers.delete(l)};this.tickers.add(l)}dropLighter(){this.lighterHeld=!1,this.flames.setLit(ds,!1)}stowLighter(){this.dropLighter();const t=this.lighter.group,e=t.position.clone(),n=t.quaternion.clone();let i=0;const r=a=>{i=Tt(i+a/.5,0,1),t.position.copy(e).lerp(this.lighter.home,i*i*(3-2*i)),t.quaternion.copy(n).slerp(this.lighter.homeQuat,i),i>=1&&this.tickers.delete(r)};this.tickers.add(r)}addTicker(t){this.tickers.add(t)}removeTicker(t){this.tickers.delete(t)}setEvening(t){this.evening=t}setLamp(t){this.lampTarget=t}litFlameCount(){let t=0;for(let e=0;e<$l-1;e++)this.flames.isLit(e)&&t++;return t}syncFlamePositions(){for(let t=0;t<Oe;t++)this.flames.place(si+t,this.pyramid.flameWorld(t,this.tmp),.0105,.024);for(let t=0;t<Be;t++)this.flames.place(ri+t,this.chimes.flameWorld(t,this.tmp),.0098,.022)}update(t,e){for(const c of Array.from(this.tickers))c(t);this.lighterHeld&&(this.lighterBob+=t,this.lighter.group.position.y+=Math.sin(this.lighterBob*2.4)*16e-5),this.flames.place(ds,this.lighter.tipWorld(this.tmp),.0085,.021),this.interaction.update(t),this.tray.update(t),this.flames.update(t,e),this.smoker.update(t,e),this.pyramid.update(t,e,this.flames),this.chimes.update(t,e,this.flames),this.craftsman.lookAt(this.focus),this.craftsman.update(t,e),this.dust.update(t,e),this.snow.update(t,e),this.indicator.update(t,e),ne.setFire(this.litFlameCount()+(this.smoker.lit?.6:0)),ne.update(t);const n=this.engine.composite;n.clearHeat();let i=0;const r=this.countLit(si,Oe),a=this.countLit(ri,Be);if(r>0){const c=this.pyramid.thermalWorld(this.tmp);this.dust.setThermal(0,c,Tt(r/Oe,0,1)),i=this.pushHeat(n,i,c,.34*(r/Oe)+.2,.3)}else this.dust.setThermal(0,null,0);if(a>0){const c=this.chimes.thermalWorld(this.tmp);this.dust.setThermal(1,c,Tt(a/Be,0,1)),i=this.pushHeat(n,i,c,.3*(a/Be)+.18,.22)}else this.dust.setThermal(1,null,0);if(this.smoker.lit&&!this.smoker.isOpen){const c=this.smoker.mouthWorld(this.tmp);this.dust.setThermal(2,c,.35),i=this.pushHeat(n,i,c,.16,.1)}else if(this.smoker.lit){const c=this.smoker.coneTipWorld(this.tmp);this.dust.setThermal(2,c,.5),i=this.pushHeat(n,i,c,.13,.12)}else this.dust.setThermal(2,null,0);this.flames.isLit(ds)&&(i=this.pushHeat(n,i,this.lighter.tipWorld(this.tmp),.1,.14));const o=Ke(this.room.lampValue,this.lampTarget,1.1,t);this.room.setLampLevel(o),this.outside.setEvening(this.evening),n.material.uniforms.uVignette.value=.62+(1-o)*.28,this.engine.renderer.toneMappingExposure=.96+(1-o)*.12}countLit(t,e){let n=0;for(let i=0;i<e;i++)this.flames.isLit(t+i)&&n++;return n}pushHeat(t,e,n,i,r){if(e>=4)return e;this.engine.projectUV(n,this.uv),this.engine.projectUV(this.tmp.copy(n).setY(n.y+i),this.uv2);const a=Math.abs(this.uv2.y-this.uv.y);return this.uv.x<-.4||this.uv.x>1.4||a<.002?e:(t.setHeat(e,this.uv.x,this.uv.y,a,r),e+1)}}const Ht=(s,t,e)=>new w(s,t,e);class cx{constructor(t,e,n){E(this,"w");E(this,"rig");E(this,"hud");E(this,"steps",[]);E(this,"idx",-1);E(this,"t",0);E(this,"free",!1);E(this,"freeMode","idle");E(this,"freeT",0);E(this,"smokerReopen",0);E(this,"dwell",[]);E(this,"drags",[]);E(this,"sectionHold",0);this.w=t,this.rig=e,this.hud=n,this.buildSteps()}pose(t,e,n,i,r,a={}){return{name:t,target:e,dist:n,yaw:i,pitch:r,...a}}look(t){this.w.focus.copy(t)}fitPose(t,e,n,i,r=.42){const a=this.w.tray.targetCenter(),o=this.w.tray.partsHalfWidth,c=Math.abs(e.z-a.z),l=Math.max(Math.abs(e.x-a.x)+o,o*2)+c*.3,d=((Math.abs(e.y-a.y)+.09+c*.3)*.5+.05)/.344,u=(l*.5+.05)/.294,f=Tt(Math.max(d,u),r,1.3),g=e.clone().lerp(a,.45);return this.pose(t,g,f,n,i,{pDist:f*1.22})}mkDrag(t,e,n,i,r,a){return{id:t,root:e,proxy:e,targetPos:n.clone(),targetQuat:i.clone(),homeParent:this.w.tray.group,homeLocal:e.position.clone(),homeQuatLocal:e.quaternion.clone(),snapRadius:r,placed:!1,onPlace:a,destParent:this.w.scene}}stage(t,e,n,i,r=.075,a){this.clearTray(),t.forEach(c=>{c.visible=!0,c.quaternion.setFromEuler(e),this.w.tray.group.add(c)}),this.w.tray.layout(t);const o=new be;this.drags=t.map((c,l)=>this.mkDrag(`p${l}`,c,n(l),a?a(l):o,r,()=>i(l))),this.w.interaction.mode={kind:"drag",items:this.drags}}clearTray(){for(const t of this.drags)!t.placed&&t.root.parent===this.w.tray.group&&this.w.tray.group.remove(t.root);this.drags=[]}allPlaced(){return this.drags.every(t=>t.placed)&&!this.w.interaction.busy}dragHint(){const t=this.drags.find(e=>!e.placed);return t?{kind:"drag",from:t.root.getWorldPosition(new w),to:t.targetPos.clone()}:null}beginIgnition(t,e){this.dwell=new Array(t).fill(0),this.w.interaction.mode={kind:"trace"},this.w.interaction.traceAnchor=e.clone(),this.w.interaction.onLighterDrop=()=>{},this.w.presentLighter(e.clone().add(Ht(.052,.052,.036)))}runIgnition(t,e,n,i){const r=this.w.lighter.tipWorld(new w),a=this.w.flames.isLit(ds);let o=-1,c=1/0;for(let l=0;l<e.length;l++){if(n(l))continue;const h=r.distanceTo(e[l]);h<c&&(c=h,o=l)}if(o<0){this.w.interaction.traceAnchor=null;return}if(this.w.interaction.traceAnchor=e[o],c<.09&&this.w.lighterHeld){const l=this.w.lighter.group,h=r.clone().sub(l.position),d=e[o].clone().sub(h);d.y+=.004,l.position.lerp(d,Tt(t*6.5,0,.4))}c<.055&&a?(this.dwell[o]+=t,this.dwell[o]>.24&&(i(o),this.dwell[o]=-99)):this.dwell[o]>0&&(this.dwell[o]=Math.max(0,this.dwell[o]-t*2))}igniteHint(t,e){const n=t.findIndex((r,a)=>!e(a));return n<0?null:{kind:"trace",from:this.w.lighter.tipWorld(new w),to:t[n].clone()}}buildSteps(){const t=this.w,e=t.smoker,n=t.pyramid,i=t.chimes,r=o=>this.steps.push(o),a=()=>this.pose("overview",Ht(.05,ue+.13,0),1.92,.05,.2,{fov:40,pDist:2.72,pFov:44,pTargetY:.02,pPitch:.26});r({id:"intro",enter:()=>{t.setLamp(.5),t.setEvening(.35),this.rig.go(this.pose("introWide",Ht(.05,ue+.2,-.05),2.5,-.12,.16,{fov:42,pDist:3,pFov:45}),.01),this.look(Ht(.05,ue+.1,0))},update:()=>{this.t>.4&&this.rig.go(a(),3.4),t.setLamp(.5+Tt((this.t-1.2)/2.4,0,1)*.5),t.setEvening(.35+Tt(this.t/6,0,1)*.2)},done:()=>this.t>4}),r({id:"sm_wide",enter:()=>{this.hud.setPip(0,"active"),this.rig.go(this.pose("smWide",e.upperHandleWorld().add(Ht(0,-.04,0)),.62,-.3,.2,{pDist:.8,pTargetY:0}),2),this.look(e.upperHandleWorld()),t.interaction.mode={kind:"swipe",dir:1,onDone:()=>{e.open(),ne.slide(.42),ne.woodPlace(.5,180),this.advance()}}},hint:()=>({kind:"swipe",at:e.upperHandleWorld(),dir:"up"}),done:()=>!1}),r({id:"sm_section",enter:()=>{this.rig.go(this.pose("smDuct",e.group.position.clone().add(Ht(.055,.1,0)),.38,-.52,.2,{pDist:.5}),1.6),t.interaction.mode={kind:"none"}},update:()=>{this.t>1.4&&e.showSection(!0),this.t>2.6&&this.rig.go(this.pose("smDuct2",e.group.position.clone().add(Ht(.055,.1,0)),.38,.1,.24,{pDist:.5}),3.6)},done:()=>this.t>7.2,exit:()=>e.showSection(!1)}),r({id:"sm_cone",enter:()=>{t.tray.setAnchor(e.group.position,-.26),this.stage([e.cone],new ye(0,0,0),()=>e.dishWorld(),()=>{e.lower.attach(e.cone),ne.woodPlace(.3,620)},.07),this.rig.go(this.fitPose("smDish",e.dishWorld().add(Ht(0,.06,0)),-.16,.42,.46),1.6),this.look(e.dishWorld())},hint:()=>this.dragHint(),done:()=>this.allPlaced()}),r({id:"sm_light",enter:()=>{this.rig.go(this.pose("smLight",e.dishWorld().add(Ht(0,.08,0)),.66,-.26,.32,{pDist:.86}),1.6),this.beginIgnition(1,e.coneTipWorld(new w))},update:o=>this.runIgnition(o,[e.coneTipWorld(new w)],()=>e.lit,()=>e.ignite()),hint:()=>this.igniteHint([e.coneTipWorld(new w)],()=>e.lit),done:()=>e.lit&&this.t>1.4,exit:()=>{t.stowLighter(),t.interaction.traceAnchor=null}}),r({id:"sm_close",enter:()=>{this.rig.go(this.pose("smClose",e.group.position.clone().add(Ht(.05,.115,0)),.44,-.3,.2,{pDist:.56}),1.5),t.interaction.mode={kind:"swipe",dir:-1,onDone:()=>{e.close(),ne.woodPlace(.75,150),this.advance()}}},hint:()=>({kind:"swipe",at:e.upperHandleWorld(),dir:"down"}),done:()=>!1}),r({id:"sm_mouth",enter:()=>{t.interaction.mode={kind:"none"},this.rig.go(this.pose("smMouth",e.mouthClosedWorld().add(Ht(0,.01,.004)),.255,-.22,.06,{pDist:.33}),2.4),this.look(e.mouthClosedWorld())},done:()=>e.puffing&&this.t>4.6}),r({id:"sm_done",enter:()=>{ne.chime(0),this.hud.setPip(0,"done"),this.rig.go(this.pose("smProud",e.group.position.clone().add(Ht(0,.165,0)),.56,-.34,.16,{pDist:.72}),2.2)},done:()=>this.t>2.6}),r({id:"py_intro",enter:()=>{this.hud.setPip(1,"active"),t.tray.setAnchor(n.group.position),this.rig.go(this.pose("pyIntro",n.group.position.clone().add(Ht(0,.14,0)),.78,.12,.22,{pDist:.98}),2.4),this.look(n.group.position.clone().add(Ht(0,.1,0)))},done:()=>this.t>1.9}),r({id:"py_shaft",enter:()=>{n.shaftMesh.visible=!0,this.stage([n.shaftMesh],new ye(0,0,-Math.PI/2),()=>n.shaftSocketWorld(),()=>n.fitShaft(),.09),n.shaftMesh.position.set(-.19,.02,0),this.drags[0].homeLocal.copy(n.shaftMesh.position),t.tray.partsHalfWidth=.215,this.rig.go(this.fitPose("pyBase",n.shaftSocketWorld().add(Ht(0,.1,0)),.14,.3,.5),1.8)},hint:()=>this.dragHint(),done:()=>this.allPlaced()}),r({id:"py_table",enter:()=>{this.stage([n.tableMesh],new ye(0,0,0),()=>n.tableSocketWorld(),()=>n.fitTable(),.085),this.rig.go(this.fitPose("pyTable",n.tableSocketWorld(),.16,.26,.48),1.6)},hint:()=>this.dragHint(),done:()=>this.allPlaced()}),r({id:"py_figures",enter:()=>{this.stage(n.figureMeshes,new ye(0,0,0),o=>n.figureSocketWorld(o),o=>n.fitFigure(o),.055),this.rig.go(this.fitPose("pyFigs",n.tableSocketWorld().add(Ht(0,.035,0)),.2,.28,.46),1.6)},hint:()=>this.dragHint(),done:()=>this.allPlaced()}),r({id:"py_hub",enter:()=>{this.stage([n.hubMesh],new ye(0,0,0),()=>n.hubSocketWorld(),()=>n.fitHub(),.075),this.rig.go(this.fitPose("pyTop",n.hubSocketWorld(),.18,.16,.55),1.8),this.look(n.hubSocketWorld())},hint:()=>this.dragHint(),done:()=>this.allPlaced()}),r({id:"py_vanes",enter:()=>{this.stage(n.vaneMeshes,new ye(-.62,0,0),o=>n.vaneSocketWorld(o),o=>n.fitVane(o),.05,o=>n.vaneWorldQuat(o)),this.rig.go(this.fitPose("pyVanes",n.hubSocketWorld().add(Ht(0,.012,0)),.3,.2,.55),1.6)},hint:()=>this.dragHint(),done:()=>this.allPlaced()}),r({id:"py_pitch",enter:()=>{this.clearTray(),this.rig.go(this.pose("pyPitch",n.hubSocketWorld().add(Ht(0,.008,0)),.28,.28,.34,{pDist:.36}),1.4),t.interaction.mode={kind:"arc",onChange:o=>{n.setPitch(n.pitch+o*1.9),ne.tick(520+n.pitch*260)},onDone:()=>this.advance()}},hint:()=>{const o=n.rotorWorld(new w);return{kind:"arc",from:o.clone().add(Ht(-.075,.004,.03)),to:o.clone().add(Ht(.075,.004,-.03))}},done:()=>!1}),r({id:"py_candles",enter:()=>{this.stage(n.candleMeshes,new ye(0,0,0),o=>n.candleSocketWorld(o),o=>{n.fitCandle(o),t.syncFlamePositions()},.06),this.rig.go(this.fitPose("pyCandles",n.group.position.clone().add(Ht(0,.075,0)),.06,.28,.5),2)},hint:()=>this.dragHint(),done:()=>this.allPlaced()}),r({id:"py_light",enter:()=>{this.clearTray(),t.syncFlamePositions(),this.rig.go(this.pose("pyLight",n.group.position.clone().add(Ht(0,.14,0)),.68,.1,.22,{pDist:.9}),1.8),this.beginIgnition(Oe,n.wickWorld(0,new w))},update:o=>{const c=Array.from({length:Oe},(l,h)=>n.wickWorld(h,new w));this.runIgnition(o,c,l=>t.flames.isLit(si+l),l=>{t.flames.setLit(si+l,!0),ne.igniteWhoosh(),n.setLitCount(n.candlesIn.filter((h,d)=>t.flames.isLit(si+d)).length)})},hint:()=>this.igniteHint(Array.from({length:Oe},(o,c)=>n.wickWorld(c,new w)),o=>t.flames.isLit(si+o)),done:()=>{let o=0;for(let c=0;c<Oe;c++)t.flames.isLit(si+c)&&o++;return o>=Oe},exit:()=>{t.stowLighter(),t.interaction.traceAnchor=null}}),r({id:"py_rise",enter:()=>{t.interaction.mode={kind:"none"},this.rig.go(this.pose("pyFlameLow",n.flameWorld(0,new w).add(Ht(0,.012,0)),.235,.06,.03,{pDist:.3}),2.2),this.look(n.flameWorld(0,new w))},update:()=>{this.t>2.6&&(this.rig.go(this.pose("pyRotorHigh",n.rotorWorld(new w).add(Ht(0,-.01,0)),.235,.06,.03,{pDist:.3}),4.6),this.look(n.rotorWorld(new w)))},done:()=>this.t>8&&n.running}),r({id:"py_settle",enter:()=>{this.rig.go(this.pose("pyWhole",n.group.position.clone().add(Ht(0,.255,0)),.94,.1,.15,{pDist:1.18}),3)},done:()=>this.t>3.6&&n.speedRatio>.45}),r({id:"py_done",enter:()=>{ne.chime(1),this.hud.setPip(1,"done")},done:()=>this.t>1.4}),r({id:"ch_intro",enter:()=>{this.hud.setPip(2,"active"),t.tray.setAnchor(i.group.position),this.rig.go(this.pose("chIntro",i.group.position.clone().add(Ht(0,.13,0)),.56,-.22,.2,{pDist:.72}),2.4),this.look(i.group.position.clone().add(Ht(0,.12,0)))},done:()=>this.t>1.9}),r({id:"ch_angels",enter:()=>{this.stage(i.angelMeshes,new ye(0,0,0),o=>i.hookWorld(o),o=>i.fitAngel(o),.06),i.angelMeshes.forEach(o=>{o.position.y+=.05}),this.drags.forEach((o,c)=>{o.homeLocal.copy(i.angelMeshes[c].position)}),this.rig.go(this.fitPose("chHooks",i.rotorWorld(new w).add(Ht(0,-.03,0)),-.2,.14,.46),1.8)},hint:()=>this.dragHint(),done:()=>this.allPlaced()}),r({id:"ch_wire",enter:()=>{this.clearTray(),this.rig.go(this.pose("chWire",i.group.position.clone().add(Ht(0,.2,0)),.27,-.16,.06,{pDist:.34}),1.6),t.interaction.mode={kind:"arc",onChange:o=>{i.setWire(i.wire-o*.1),ne.tick(700+i.alignment*300)},onDone:()=>this.advance()}},hint:()=>{const o=i.wireHandleWorld(new w);return{kind:"arc",from:o.clone().add(Ht(0,-.045,0)),to:o.clone().add(Ht(0,.045,0))}},done:()=>!1}),r({id:"ch_bells",enter:()=>{this.stage(i.bellMeshes,new ye(0,0,0),o=>i.bellWorld(o),o=>i.fitBell(o),.05),this.rig.go(this.fitPose("chBells",i.group.position.clone().add(Ht(0,.17,0)),-.3,.22,.44),1.8)},hint:()=>this.dragHint(),done:()=>this.allPlaced()}),r({id:"ch_candles",enter:()=>{this.stage(i.candleMeshes,new ye(0,0,0),o=>i.candleWorld(o),o=>{i.fitCandle(o),t.syncFlamePositions()},.055),this.rig.go(this.fitPose("chCandles",i.group.position.clone().add(Ht(0,.055,0)),-.1,.28,.42),1.8)},hint:()=>this.dragHint(),done:()=>this.allPlaced()}),r({id:"ch_light",enter:()=>{this.clearTray(),t.syncFlamePositions(),this.rig.go(this.pose("chLight",i.group.position.clone().add(Ht(0,.12,0)),.64,-.1,.2,{pDist:.84}),1.8),this.beginIgnition(Be,i.wickWorld(0,new w))},update:o=>{const c=Array.from({length:Be},(l,h)=>i.wickWorld(h,new w));this.runIgnition(o,c,l=>t.flames.isLit(ri+l),l=>{t.flames.setLit(ri+l,!0),ne.igniteWhoosh(),i.setLitCount(i.candlesIn.filter((h,d)=>t.flames.isLit(ri+d)).length)})},hint:()=>this.igniteHint(Array.from({length:Be},(o,c)=>i.wickWorld(c,new w)),o=>t.flames.isLit(ri+o)),done:()=>{let o=0;for(let c=0;c<Be;c++)t.flames.isLit(ri+c)&&o++;return o>=Be},exit:()=>{t.stowLighter(),t.interaction.traceAnchor=null}}),r({id:"ch_rise",enter:()=>{t.interaction.mode={kind:"none"},this.rig.go(this.pose("chFlameLow",i.group.position.clone().add(Ht(0,.058,0)),.34,-.1,.03,{pDist:.44}),2)},update:()=>{this.t>2.4&&(this.rig.go(this.pose("chBellRun",i.group.position.clone().add(Ht(0,.168,0)),.34,-.1,.03,{pDist:.44}),4.2),this.look(i.group.position.clone().add(Ht(0,.19,0))))},done:()=>this.t>7.5&&i.strikeCount>2}),r({id:"ch_done",enter:()=>{ne.chime(2),this.hud.setPip(2,"done"),this.rig.go(this.pose("chWhole",i.group.position.clone().add(Ht(0,.15,0)),.54,-.18,.16,{pDist:.68}),2.6)},done:()=>this.t>3}),r({id:"final_macro",enter:()=>{t.tray.setAnchor(Ht(1.1,0,0)),this.rig.go(this.pose("finalMacro",t.smoker.mouthClosedWorld().add(Ht(0,.045,.01)),.3,-.18,.06,{pDist:.38}),3),this.look(t.smoker.mouthClosedWorld())},done:()=>this.t>3.2}),r({id:"final_pull",enter:()=>{this.rig.go(a(),6.5),this.look(Ht(.1,ue+.15,0))},update:()=>{const o=Tt((this.t-1.6)/3.2,0,1);t.setLamp(1-o*.7),t.setEvening(.55+o*.45)},done:()=>this.t>7}),r({id:"freeplay",enter:()=>{this.free=!0,this.hud.setPipsInteractive(!0),this.enterFreeIdle()},update:o=>this.updateFree(o),hint:()=>this.freeHint(),done:()=>!1})}enterFreeIdle(){this.freeMode="idle",this.freeT=0;const t=this.w;this.rig.go(this.pose("overview",Ht(.05,ue+.13,0),1.92,.05,.2,{fov:40,pDist:2.72,pFov:44,pTargetY:.02,pPitch:.26}),2.6),this.look(Ht(.1,ue+.15,0)),t.interaction.mode={kind:"tap",proxies:[t.smoker.bodyHit,t.pyramid.bodyHit,t.chimes.bodyHit],onTap:e=>{e==="smoker"?this.enterFree(0):e==="pyramid"?this.enterFree(1):e==="chimes"&&this.enterFree(2)}}}enterFree(t){if(!this.free)return;const e=this.w;if(this.freeT=0,t===0)this.freeMode="smoker",this.smokerReopen=0,this.rig.go(this.pose("freeSm",e.smoker.group.position.clone().add(Ht(.05,.115,0)),.46,-.3,.2,{pDist:.58}),1.8),this.look(e.smoker.upperHandleWorld()),e.interaction.mode={kind:"swipe",dir:1,onDone:()=>{e.smoker.open(),e.smoker.showSection(!0),ne.slide(.4),this.smokerReopen=1,this.sectionHold=2.4,e.interaction.mode={kind:"swipe",dir:-1,onDone:()=>{e.smoker.close(),ne.woodPlace(.7,150),this.smokerReopen=2,this.freeT=0}}}};else if(t===1){this.freeMode="pyramid",this.rig.go(this.pose("freePy",e.pyramid.rotorWorld(new w).add(Ht(0,.005,0)),.3,.28,.3,{pDist:.38}),1.8),this.look(e.pyramid.rotorWorld(new w));const n=()=>{e.interaction.mode={kind:"arc",onChange:i=>{e.pyramid.setPitch(e.pyramid.pitch+i*1.9)},onDone:()=>{this.freeT=0,n()}}};n()}else this.freeMode="chimes",this.rig.go(this.pose("freeCh",e.chimes.group.position.clone().add(Ht(0,.17,0)),.32,-.28,.22,{pDist:.41}),1.8),this.look(e.chimes.group.position.clone().add(Ht(0,.18,0))),e.interaction.mode={kind:"tap",proxies:e.chimes.bellMeshes,onTap:()=>{e.chimes.rotateBellSet(),this.freeT=0}}}updateFree(t){this.freeT+=t,this.sectionHold>0&&(this.sectionHold-=t,this.sectionHold<=0&&this.w.smoker.showSection(!1));const e=this.freeMode==="idle"?1/0:this.freeMode==="smoker"?this.smokerReopen===2?4.5:1/0:9;this.freeT>e&&this.enterFreeIdle()}freeHint(){const t=this.w;if(this.freeMode==="idle")return this.freeT<6?null:{kind:"tap",at:t.pyramid.group.position.clone().add(Ht(0,.3,0))};if(this.freeMode==="smoker")return this.smokerReopen===0?{kind:"swipe",at:t.smoker.upperHandleWorld(),dir:"up"}:this.smokerReopen===1?{kind:"swipe",at:t.smoker.upperHandleWorld(),dir:"down"}:null;if(this.freeMode==="pyramid"){const n=t.pyramid.rotorWorld(new w);return{kind:"arc",from:n.clone().add(Ht(-.075,.004,.03)),to:n.clone().add(Ht(.075,.004,-.03))}}return{kind:"tap",at:t.chimes.bellWorld(0,new w)}}advance(){this.steps[this.idx]?.exit?.(),this.idx++,this.t=0,this.steps[this.idx]?.enter()}start(){this.idx=0,this.t=0,this.steps[0].enter()}update(t){if(this.idx<0)return;this.t+=t;const e=this.steps[this.idx];if(!e)return;e.update?.(t),e.done()&&this.idx<this.steps.length-1&&this.advance();const n=this.hintNow();n&&n.kind==="drag"?this.w.indicator.show(n.to,.055):n&&n.kind==="trace"?this.w.indicator.show(n.to,.03):n&&n.kind==="tap"?this.w.indicator.show(n.at,.09):this.w.indicator.hide()}hintNow(){const t=this.steps[this.idx];return t?.hint?t.hint():null}get stepId(){return this.steps[this.idx]?.id??"none"}get progress(){return`${this.idx+1}/${this.steps.length}`}get machinesRunning(){return[this.w.smoker.puffing,this.w.pyramid.running,this.w.chimes.running]}get counts(){return{vanes:this.w.pyramid.vanesPlaced,vaneTotal:ii,angels:this.w.chimes.angelsPlaced,angelTotal:rn,bells:this.w.chimes.bellsPlaced,bellTotal:xn,strikes:this.w.chimes.strikeCount}}}class lx{constructor(t){E(this,"engine");E(this,"ghost");E(this,"ghostHand");E(this,"ghostArrow");E(this,"pips");E(this,"pipEls");E(this,"soundBtn");E(this,"cycle",0);E(this,"a",new nt);E(this,"b",new nt);E(this,"shown",!1);E(this,"onPip",null);E(this,"onSound",null);this.engine=t,this.ghost=document.getElementById("ghost"),this.ghostHand=document.getElementById("ghost-hand"),this.ghostArrow=document.getElementById("ghost-arrow"),this.pips=document.getElementById("pips"),this.pipEls=Array.from(this.pips.querySelectorAll(".pip")),this.soundBtn=document.getElementById("sound"),this.pipEls.forEach((n,i)=>{n.addEventListener("pointerup",r=>{r.stopPropagation(),this.pips.classList.contains("interactive")&&this.onPip?.(i)})});let e=!1;this.soundBtn.addEventListener("pointerup",n=>{n.stopPropagation(),e=!e,this.soundBtn.classList.toggle("muted",e),this.onSound?.(e)})}setPip(t,e){const n=this.pipEls[t];n&&(n.classList.toggle("active",e==="active"),n.classList.toggle("done",e==="done"))}setPipsInteractive(t){this.pips.classList.toggle("interactive",t)}update(t,e,n,i){const r=!!e&&n>2&&!i;if(r!==this.shown&&(this.shown=r,this.ghost.style.opacity=r?"1":"0"),!r||!e){this.cycle=0;return}this.cycle+=t;const a=e.kind==="tap"?1.5:2.3,o=this.cycle%a/a;let c=0,l=0,h=1,d=0;if(e.kind==="tap")this.engine.projectPx(e.at,this.a),c=this.a.x,l=this.a.y,h=1-(o<.35?us(o/.35):1-us(Tt((o-.35)/.35,0,1)))*.28;else if(e.kind==="swipe"){this.engine.projectPx(e.at,this.a);const u=Math.min(this.engine.height*.13,110),f=e.dir==="up"?-1:1,g=o<.62?us(o/.62):1,_=o>.78?1-(o-.78)/.22:1;c=this.a.x,l=this.a.y+f*u*(g-.5),h=1-(o<.62?.1:0),d=_,this.ghostArrow.style.transform=e.dir==="up"?"none":"rotate(180deg)",this.ghostArrow.style.transformOrigin="50px 50px"}else{this.engine.projectPx(e.from,this.a),this.engine.projectPx(e.to,this.b);const u=o<.72?us(o/.72):1,f=o>.82?1-(o-.82)/.18:1;c=this.a.x+(this.b.x-this.a.x)*u,l=this.a.y+(this.b.y-this.a.y)*u,h=1-.08*Math.sin(u*Math.PI),this.ghost.style.opacity=String(f),d=0}this.ghostArrow.style.opacity=String(d),this.ghostHand.style.opacity="1",this.ghost.style.transform=`translate(${c}px, ${l}px) scale(${h})`}}const hx=document.getElementById("scene"),Yo=document.getElementById("veil");function ux(s){Yo.innerHTML=`<div style="max-width:22rem;padding:1.5rem;color:#e6cfa8;font-size:15px;line-height:1.7;text-align:center">${s}</div>`}let Hn;try{Hn=new P_(hx)}catch{throw ux("この端末では WebGL2 を利用できませんでした。<br>別のブラウザでお試しください。"),new Error("no webgl2")}const ai=new ox(Hn),xc=new L_(Hn,{name:"boot",target:new w(.05,ue+.2,-.05),dist:2.5,yaw:-.12,pitch:.16,fov:42}),ca=new lx(Hn),bn=new cx(ai,xc,ca);ca.onSound=s=>ne.setMuted(s);ca.onPip=s=>bn.enterFree(s);Hn.onUpdate((s,t)=>{xc.update(s,t),ai.update(s,t),bn.update(s);const e=(performance.now()-ai.interaction.lastInputAt)/1e3;ca.update(s,bn.hintNow(),e,ai.interaction.pointerActive)});Hn.start();bn.start();const dx=()=>{ne.unlock()};window.addEventListener("pointerdown",dx,{once:!1});requestAnimationFrame(()=>{requestAnimationFrame(()=>{Yo.classList.add("gone"),window.setTimeout(()=>Yo.remove(),1400)})});if(location.search.includes("autotest")){const s=t=>{const e=Hn.projectPx(t,new nt);return{x:Math.round(e.x),y:Math.round(e.y)}};window.__CMW={get step(){return bn.stepId},get hint(){const t=bn.hintNow();return t?t.kind==="tap"?{kind:t.kind,at:s(t.at)}:t.kind==="swipe"?{kind:t.kind,at:s(t.at),dir:t.dir}:{kind:t.kind,from:s(t.from),to:s(t.to)}:null},get state(){const[t,e,n]=bn.machinesRunning;return{step:bn.stepId,progress:bn.progress,smoking:t,pyramidRunning:e,chimesRunning:n,free:bn.free,orientation:Hn.orientation,tier:Hn.tier.name,fps:Math.round(Hn.fps),cameraSettled:xc.settled,counts:bn.counts,pyramidPitch:Number(ai.pyramid.pitch.toFixed(3)),pyramidOmega:Number(ai.pyramid.omega.toFixed(3)),chimesOmega:Number(ai.chimes.omega.toFixed(3)),wire:Number(ai.chimes.wire.toFixed(4)),lamp:Number(ai.room.lampValue.toFixed(3))}}}}
