var nh=Object.defineProperty;var ih=(i,t,e)=>t in i?nh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var U=(i,t,e)=>ih(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const _o="182",sh=0,Xo=1,rh=2,dr=1,nc=2,_s=3,si=0,en=1,Le=2,Gn=0,Hi=1,ma=2,qo=3,$o=4,ah=5,mi=100,oh=101,lh=102,ch=103,hh=104,uh=200,dh=201,fh=202,ph=203,ga=204,_a=205,mh=206,gh=207,_h=208,xh=209,vh=210,Mh=211,yh=212,Sh=213,wh=214,xa=0,va=1,Ma=2,Xi=3,ya=4,Sa=5,wa=6,ba=7,ic=0,bh=1,Eh=2,Ln=0,sc=1,rc=2,ac=3,xo=4,oc=5,lc=6,cc=7,hc=300,vi=301,qi=302,Ea=303,Ta=304,Ar=306,bs=1e3,Oe=1001,Aa=1002,Be=1003,Th=1004,zs=1005,Ve=1006,Ur=1007,_i=1008,ln=1009,uc=1010,dc=1011,Es=1012,vo=1013,Un=1014,Sn=1015,qn=1016,Mo=1017,yo=1018,Ts=1020,fc=35902,pc=35899,mc=1021,gc=1022,wn=1023,$n=1026,xi=1027,So=1028,wo=1029,$i=1030,bo=1031,Eo=1033,fr=33776,pr=33777,mr=33778,gr=33779,Ra=35840,Ca=35841,Pa=35842,La=35843,Ia=36196,Da=37492,Ua=37496,Na=37488,Fa=37489,Oa=37490,Ba=37491,za=37808,ka=37809,Va=37810,Ha=37811,Ga=37812,Wa=37813,Xa=37814,qa=37815,$a=37816,Ya=37817,Za=37818,Ja=37819,Ka=37820,ja=37821,Qa=36492,to=36494,eo=36495,no=36283,io=36284,so=36285,ro=36286,Ah=3200,_c=0,Rh=1,ni="",je="srgb",Yi="srgb-linear",xr="linear",me="srgb",Si=7680,Yo=519,Ch=512,Ph=513,Lh=514,To=515,Ih=516,Dh=517,Ao=518,Uh=519,ao=35044,Zo="300 es",Pn=2e3,vr=2001;function xc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nh(){const i=Mr("canvas");return i.style.display="block",i}const Jo={};function yr(...i){const t="THREE."+i.shift();console.log(t,...i)}function $t(...i){const t="THREE."+i.shift();console.warn(t,...i)}function ie(...i){const t="THREE."+i.shift();console.error(t,...i)}function As(...i){const t=i.join(" ");t in Jo||(Jo[t]=!0,$t(...i))}function Fh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ko=1234567;const Ms=Math.PI/180,Rs=180/Math.PI;function In(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Ro(i,t){return(i%t+t)%t}function Oh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Bh(i,t,e){return i!==t?(e-i)/(t-i):0}function ys(i,t,e){return(1-e)*i+e*t}function zh(i,t,e,n){return ys(i,t,1-Math.exp(-e*n))}function kh(i,t=1){return t-Math.abs(Ro(i,t*2)-t)}function Vh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Hh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Gh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wh(i,t){return i+Math.random()*(t-i)}function Xh(i){return i*(.5-Math.random())}function qh(i){i!==void 0&&(Ko=i);let t=Ko+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $h(i){return i*Ms}function Yh(i){return i*Rs}function Zh(i){return(i&i-1)===0&&i!==0}function Jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:$t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bt={DEG2RAD:Ms,RAD2DEG:Rs,generateUUID:In,clamp:jt,euclideanModulo:Ro,mapLinear:Oh,inverseLerp:Bh,lerp:ys,damp:zh,pingpong:kh,smoothstep:Vh,smootherstep:Hh,randInt:Gh,randFloat:Wh,randFloatSpread:Xh,seededRandom:qh,degToRad:$h,radToDeg:Yh,isPowerOfTwo:Zh,ceilPowerOfTwo:Jh,floorPowerOfTwo:Kh,setQuaternionFromProperEuler:jh,normalize:ge,denormalize:yn};class Y{constructor(t=0,e=0){Y.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Re{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],y=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let f=l*d+c*p+h*g+u*y;f<0&&(d=-d,p=-p,g=-g,y=-y,f=-f);let m=1-o;if(f<.9995){const S=Math.acos(f),x=Math.sin(S);m=Math.sin(m*S)/x,o=Math.sin(o*S)/x,l=l*m+d*o,c=c*m+p*o,h=h*m+g*o,u=u*m+y*o}else{l=l*m+d*o,c=c*m+p*o,h=h*m+g*o,u=u*m+y*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nr.copy(this).projectOnVector(t),this.sub(Nr)}reflect(t){return this.sub(Nr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nr=new b,jo=new Re;class Jt{constructor(t,e,n,s,r,a,o,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],y=s[0],f=s[3],m=s[6],S=s[1],x=s[4],v=s[7],A=s[2],E=s[5],R=s[8];return r[0]=a*y+o*S+l*A,r[3]=a*f+o*x+l*E,r[6]=a*m+o*v+l*R,r[1]=c*y+h*S+u*A,r[4]=c*f+h*x+u*E,r[7]=c*m+h*v+u*R,r[2]=d*y+p*S+g*A,r[5]=d*f+p*x+g*E,r[8]=d*m+p*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fr.makeScale(t,e)),this}rotate(t){return this.premultiply(Fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fr=new Jt,Qo=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tl=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qh(){const i={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yi]:{primaries:t,whitePoint:n,transfer:xr,toXYZ:Qo,fromXYZ:tl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Qo,fromXYZ:tl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),i}const ae=Qh();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let wi;class tu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{wi===void 0&&(wi=Mr("canvas")),wi.width=t.width,wi.height=t.height;const s=wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eu=0;class Co{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Or(s[a].image)):r.push(Or(s[a]))}else r=Or(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Or(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let nu=0;const Br=new b;class He extends es{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Oe,s=Oe,r=Ve,a=_i,o=wn,l=ln,c=He.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=In(),this.name="",this.source=new Co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Br).x}get height(){return this.source.getSize(Br).y}get depth(){return this.source.getSize(Br).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bs:t.x=t.x-Math.floor(t.x);break;case Oe:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bs:t.y=t.y-Math.floor(t.y);break;case Oe:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=hc;He.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],f=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(p+1)/2,A=(m+1)/2,E=(h+d)/4,R=(u+y)/4,P=(g+f)/4;return x>v&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=R/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=P/r),this.set(n,s,r,e),this}let S=Math.sqrt((f-g)*(f-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(u-y)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iu extends es{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new He(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Co(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends iu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vc extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Oe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class su extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Oe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),Vs.subVectors(this.max,as),bi.subVectors(t.a,as),Ei.subVectors(t.b,as),Ti.subVectors(t.c,as),Jn.subVectors(Ei,bi),Kn.subVectors(Ti,Ei),ai.subVectors(bi,Ti);let e=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-ai.z,ai.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,ai.z,0,-ai.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-ai.y,ai.x,0];return!zr(e,bi,Ei,Ti,Vs)||(e=[1,0,0,0,1,0,0,0,1],!zr(e,bi,Ei,Ti,Vs))?!1:(Hs.crossVectors(Jn,Kn),e=[Hs.x,Hs.y,Hs.z],zr(e,bi,Ei,Ti,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const On=[new b,new b,new b,new b,new b,new b,new b,new b],gn=new b,ks=new Zn,bi=new b,Ei=new b,Ti=new b,Jn=new b,Kn=new b,ai=new b,as=new b,Vs=new b,Hs=new b,oi=new b;function zr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);const o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ru=new Zn,os=new b,kr=new b;class Ns{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ru.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);const e=os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(kr)),this.expandByPoint(os.copy(t.center).sub(kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Bn=new b,Vr=new b,Gs=new b,jn=new b,Hr=new b,Ws=new b,Gr=new b;class Mc{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Vr.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Vr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Gs),o=jn.dot(this.direction),l=-jn.dot(Gs),c=jn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const y=1/h;u*=y,d*=y,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vr).addScaledVector(Gs,d),p}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){Hr.subVectors(e,t),Ws.subVectors(n,t),Gr.crossVectors(Hr,Ws);let a=this.direction.dot(Gr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,t);const l=o*this.direction.dot(Ws.crossVectors(jn,Ws));if(l<0)return null;const c=o*this.direction.dot(Hr.cross(jn));if(c<0||l+c>a)return null;const h=-o*jn.dot(Gr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,l,c,h,u,d,p,g,y,f){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,y,f)}set(t,e,n,s,r,a,o,l,c,h,u,d,p,g,y,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=g,m[11]=y,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),a=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-y*c,e[9]=-o*l,e[2]=y-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d+y*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=y-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-y*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(au,t,ou)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Qn.crossVectors(n,an),Qn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Qn.crossVectors(n,an)),Qn.normalize(),Xs.crossVectors(an,Qn),s[0]=Qn.x,s[4]=Xs.x,s[8]=an.x,s[1]=Qn.y,s[5]=Xs.y,s[9]=an.y,s[2]=Qn.z,s[6]=Xs.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],y=n[6],f=n[10],m=n[14],S=n[3],x=n[7],v=n[11],A=n[15],E=s[0],R=s[4],P=s[8],M=s[12],w=s[1],I=s[5],D=s[9],F=s[13],G=s[2],H=s[6],V=s[10],z=s[14],et=s[3],ft=s[7],lt=s[11],ht=s[15];return r[0]=a*E+o*w+l*G+c*et,r[4]=a*R+o*I+l*H+c*ft,r[8]=a*P+o*D+l*V+c*lt,r[12]=a*M+o*F+l*z+c*ht,r[1]=h*E+u*w+d*G+p*et,r[5]=h*R+u*I+d*H+p*ft,r[9]=h*P+u*D+d*V+p*lt,r[13]=h*M+u*F+d*z+p*ht,r[2]=g*E+y*w+f*G+m*et,r[6]=g*R+y*I+f*H+m*ft,r[10]=g*P+y*D+f*V+m*lt,r[14]=g*M+y*F+f*z+m*ht,r[3]=S*E+x*w+v*G+A*et,r[7]=S*R+x*I+v*H+A*ft,r[11]=S*P+x*D+v*V+A*lt,r[15]=S*M+x*F+v*z+A*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],y=t[7],f=t[11],m=t[15],S=l*p-c*d,x=o*p-c*u,v=o*d-l*u,A=a*p-c*h,E=a*d-l*h,R=a*u-o*h;return e*(y*S-f*x+m*v)-n*(g*S-f*A+m*E)+s*(g*x-y*A+m*R)-r*(g*v-y*E+f*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],y=t[13],f=t[14],m=t[15],S=u*f*c-y*d*c+y*l*p-o*f*p-u*l*m+o*d*m,x=g*d*c-h*f*c-g*l*p+a*f*p+h*l*m-a*d*m,v=h*y*c-g*u*c+g*o*p-a*y*p-h*o*m+a*u*m,A=g*u*l-h*y*l-g*o*d+a*y*d+h*o*f-a*u*f,E=e*S+n*x+s*v+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=S*R,t[1]=(y*d*r-u*f*r-y*s*p+n*f*p+u*s*m-n*d*m)*R,t[2]=(o*f*r-y*l*r+y*s*c-n*f*c-o*s*m+n*l*m)*R,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*p-n*l*p)*R,t[4]=x*R,t[5]=(h*f*r-g*d*r+g*s*p-e*f*p-h*s*m+e*d*m)*R,t[6]=(g*l*r-a*f*r-g*s*c+e*f*c+a*s*m-e*l*m)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*R,t[8]=v*R,t[9]=(g*u*r-h*y*r-g*n*p+e*y*p+h*n*m-e*u*m)*R,t[10]=(a*y*r-g*o*r+g*n*c-e*y*c-a*n*m+e*o*m)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*R,t[12]=A*R,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*f+e*u*f)*R,t[14]=(g*o*s-a*y*s-g*n*l+e*y*l+a*n*f-e*o*f)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,y=a*h,f=a*u,m=o*u,S=l*c,x=l*h,v=l*u,A=n.x,E=n.y,R=n.z;return s[0]=(1-(y+m))*A,s[1]=(p+v)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(p-v)*E,s[5]=(1-(d+m))*E,s[6]=(f+S)*E,s[7]=0,s[8]=(g+x)*R,s[9]=(f-S)*R,s[10]=(1-(d+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let r=Ai.set(s[0],s[1],s[2]).length();const a=Ai.set(s[4],s[5],s[6]).length(),o=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),_n.copy(this);const c=1/r,h=1/a,u=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Pn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Pn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===vr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Pn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Pn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===vr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ai=new b,_n=new oe,au=new b(0,0,0),ou=new b(1,1,1),Qn=new b,Xs=new b,an=new b,el=new oe,nl=new Re;class qe{constructor(t=0,e=0,n=0,s=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return el.makeRotationFromQuaternion(t),this.setFromRotationMatrix(el,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nl.setFromEuler(this),this.setFromQuaternion(nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class Po{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lu=0;const il=new b,Ri=new Re,zn=new oe,qs=new b,ls=new b,cu=new b,hu=new Re,sl=new b(1,0,0),rl=new b(0,1,0),al=new b(0,0,1),ol={type:"added"},uu={type:"removed"},Ci={type:"childadded",child:null},Wr={type:"childremoved",child:null};class De extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new b,e=new qe,n=new Re,s=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Jt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(sl,t)}rotateY(t){return this.rotateOnAxis(rl,t)}rotateZ(t){return this.rotateOnAxis(al,t)}translateOnAxis(t,e){return il.copy(t).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(sl,t)}translateY(t){return this.translateOnAxis(rl,t)}translateZ(t){return this.translateOnAxis(al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(ls,qs,this.up):zn.lookAt(qs,ls,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(zn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ol),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uu),Wr.child=t,this.dispatchEvent(Wr),Wr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ol),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new b(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new b,kn=new b,Xr=new b,Vn=new b,Pi=new b,Li=new b,ll=new b,qr=new b,$r=new b,Yr=new b,Zr=new Ae,Jr=new Ae,Kr=new Ae;class pn{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),kn.subVectors(n,e),Xr.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(kn),l=xn.dot(Xr),c=kn.dot(kn),h=kn.dot(Xr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Zr.setScalar(0),Jr.setScalar(0),Kr.setScalar(0),Zr.fromBufferAttribute(t,e),Jr.fromBufferAttribute(t,n),Kr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Zr,r.x),a.addScaledVector(Jr,r.y),a.addScaledVector(Kr,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),kn.subVectors(t,e),xn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),xn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Pi.subVectors(s,n),Li.subVectors(r,n),qr.subVectors(t,n);const l=Pi.dot(qr),c=Li.dot(qr);if(l<=0&&c<=0)return e.copy(n);$r.subVectors(t,s);const h=Pi.dot($r),u=Li.dot($r);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Pi,a);Yr.subVectors(t,r);const p=Pi.dot(Yr),g=Li.dot(Yr);if(g>=0&&p<=g)return e.copy(r);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Li,o);const f=h*g-p*u;if(f<=0&&u-h>=0&&p-g>=0)return ll.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(ll,o);const m=1/(f+y+d);return a=y*m,o=d*m,e.copy(n).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},$s={h:0,s:0,l:0};function jr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Ro(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=jr(a,r,t+1/3),this.g=jr(a,r,t),this.b=jr(a,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=yc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return ae.workingToColorSpace(ke.copy(this),t),Math.round(jt(ke.r*255,0,255))*65536+Math.round(jt(ke.g*255,0,255))*256+Math.round(jt(ke.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,r=ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=je){ae.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL($s);const n=ys(ti.h,$s.h,e),s=ys(ti.s,$s.s,e),r=ys(ti.l,$s.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Zt;Zt.NAMES=yc;let du=0;class ns extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Hi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zi extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new b,Ys=new Y;let fu=0;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ao,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ao&&(t.usage=this.usage),t}}class Sc extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wc extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pu=0;const un=new oe,Qr=new De,Ii=new b,on=new Zn,cs=new Zn,Fe=new b;class be extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xc(t)?wc:Sc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Qr.lookAt(t),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(on.min,cs.min),on.expandByPoint(Fe),Fe.addVectors(on.max,cs.max),on.expandByPoint(Fe)):(on.expandByPoint(cs.min),on.expandByPoint(cs.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(t,c),Fe.add(Ii)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new b,l[P]=new b;const c=new b,h=new b,u=new b,d=new Y,p=new Y,g=new Y,y=new b,f=new b;function m(P,M,w){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,w),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),o[P].add(y),o[M].add(y),o[w].add(y),l[P].add(f),l[M].add(f),l[w].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,M=S.length;P<M;++P){const w=S[P],I=w.start,D=w.count;for(let F=I,G=I+D;F<G;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new b,v=new b,A=new b,E=new b;function R(P){A.fromBufferAttribute(s,P),E.copy(A);const M=o[P];x.copy(M),x.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(E,M);const I=v.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,I)}for(let P=0,M=S.length;P<M;++P){const w=S[P],I=w.start,D=w.count;for(let F=I,G=I+D;F<G;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new b,r=new b,a=new b,o=new b,l=new b,c=new b,h=new b,u=new b;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),y=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,f),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let y=0,f=l.length;y<f;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let m=0;m<h;m++)d[g++]=c[p++]}return new $e(d,h,u)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new oe,li=new Mc,Zs=new Ns,hl=new b,Js=new b,Ks=new b,js=new b,ta=new b,Qs=new b,ul=new b,tr=new b;class Z extends De{constructor(t=new be,e=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ta.fromBufferAttribute(u,t),a?Qs.addScaledVector(ta,h):Qs.addScaledVector(ta.sub(e),h))}e.add(Qs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(Zs.containsPoint(li.origin)===!1&&(li.intersectSphere(Zs,hl)===null||li.origin.distanceToSquared(hl)>(t.far-t.near)**2))&&(cl.copy(r).invert(),li.copy(t.ray).applyMatrix4(cl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const f=d[g],m=a[f.materialIndex],S=Math.max(f.start,p.start),x=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let v=S,A=x;v<A;v+=3){const E=o.getX(v),R=o.getX(v+1),P=o.getX(v+2);s=er(this,m,t,n,c,h,u,E,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let f=g,m=y;f<m;f+=3){const S=o.getX(f),x=o.getX(f+1),v=o.getX(f+2);s=er(this,a,t,n,c,h,u,S,x,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){const f=d[g],m=a[f.materialIndex],S=Math.max(f.start,p.start),x=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let v=S,A=x;v<A;v+=3){const E=v,R=v+1,P=v+2;s=er(this,m,t,n,c,h,u,E,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let f=g,m=y;f<m;f+=3){const S=f,x=f+1,v=f+2;s=er(this,a,t,n,c,h,u,S,x,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function mu(i,t,e,n,s,r,a,o){let l;if(t.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===si,o),l===null)return null;tr.copy(o),tr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(tr);return c<e.near||c>e.far?null:{distance:c,point:tr.clone(),object:i}}function er(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Js),i.getVertexPosition(l,Ks),i.getVertexPosition(c,js);const h=mu(i,t,e,n,Js,Ks,js,ul);if(h){const u=new b;pn.getBarycoord(ul,Js,Ks,js,u),s&&(h.uv=pn.getInterpolatedAttribute(s,o,l,c,u,new Y)),r&&(h.uv1=pn.getInterpolatedAttribute(r,o,l,c,u,new Y)),a&&(h.normal=pn.getInterpolatedAttribute(a,o,l,c,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new b,materialIndex:0};pn.getNormal(Js,Ks,js,d.normal),h.face=d,h.barycoord=u}return h}class de extends be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(y,f,m,S,x,v,A,E,R,P,M){const w=v/R,I=A/P,D=v/2,F=A/2,G=E/2,H=R+1,V=P+1;let z=0,et=0;const ft=new b;for(let lt=0;lt<V;lt++){const ht=lt*I-F;for(let zt=0;zt<H;zt++){const Ut=zt*w-D;ft[y]=Ut*S,ft[f]=ht*x,ft[m]=G,c.push(ft.x,ft.y,ft.z),ft[y]=0,ft[f]=0,ft[m]=E>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(zt/R),u.push(1-lt/P),z+=1}}for(let lt=0;lt<P;lt++)for(let ht=0;ht<R;ht++){const zt=d+ht+H*lt,Ut=d+ht+H*(lt+1),ee=d+(ht+1)+H*(lt+1),se=d+(ht+1)+H*lt;l.push(zt,Ut,se),l.push(Ut,ee,se),et+=6}o.addGroup(p,et,M),p+=et,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Ji(i[e]);for(const s in n)t[s]=n[s]}return t}function gu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const _u={clone:Ji,merge:Xe};var xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xu,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ec extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new b,dl=new Y,fl=new Y;class fn extends Ec{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,dl,fl),e.subVectors(fl,dl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Di=-90,Ui=1;class Mu extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Di,Ui,t,e);s.layers=this.layers,this.add(s);const r=new fn(Di,Ui,t,e);r.layers=this.layers,this.add(r);const a=new fn(Di,Ui,t,e);a.layers=this.layers,this.add(a);const o=new fn(Di,Ui,t,e);o.layers=this.layers,this.add(o);const l=new fn(Di,Ui,t,e);l.layers=this.layers,this.add(l);const c=new fn(Di,Ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Tc extends He{constructor(t=[],e=vi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ac extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new de(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Gn});r.uniforms.tEquirect.value=e;const a=new Z(s,r),o=e.minFilter;return e.minFilter===_i&&(e.minFilter=Ve),new Mu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class fe extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yu={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const f=e.getJointPose(y,n),m=this._getHandJoint(c,y);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Su extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class wu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ao,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new b;class Sr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Rc extends ns{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ni;const hs=new b,Fi=new b,Oi=new b,Bi=new Y,us=new Y,Cc=new oe,nr=new b,ds=new b,ir=new b,pl=new Y,na=new Y,ml=new Y;class bu extends De{constructor(t=new Rc){if(super(),this.isSprite=!0,this.type="Sprite",Ni===void 0){Ni=new be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wu(e,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new Sr(n,3,0,!1)),Ni.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=Ni,this.material=t,this.center=new Y(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ie('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),Cc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Oi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Oi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;sr(nr.set(-.5,-.5,0),Oi,a,Fi,s,r),sr(ds.set(.5,-.5,0),Oi,a,Fi,s,r),sr(ir.set(.5,.5,0),Oi,a,Fi,s,r),pl.set(0,0),na.set(1,0),ml.set(1,1);let o=t.ray.intersectTriangle(nr,ds,ir,!1,hs);if(o===null&&(sr(ds.set(-.5,.5,0),Oi,a,Fi,s,r),na.set(0,1),o=t.ray.intersectTriangle(nr,ir,ds,!1,hs),o===null))return;const l=t.ray.origin.distanceTo(hs);l<t.near||l>t.far||e.push({distance:l,point:hs.clone(),uv:pn.getInterpolation(hs,nr,ds,ir,pl,na,ml,new Y),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function sr(i,t,e,n,s,r){Bi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(us.x=r*Bi.x-s*Bi.y,us.y=s*Bi.x+r*Bi.y):us.copy(Bi),i.copy(t),i.x+=us.x,i.y+=us.y,i.applyMatrix4(Cc)}class Pc extends He{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Be,h=Be,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gl extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zi=new oe,_l=new oe,rr=[],xl=new Zn,Eu=new oe,fs=new Z,ps=new Ns;class Tu extends Z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Eu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),xl.copy(t.boundingBox).applyMatrix4(zi),this.boundingBox.union(xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,zi),ps.copy(t.boundingSphere).applyMatrix4(zi),this.boundingSphere.union(ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),t.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zi),_l.multiplyMatrices(n,zi),fs.matrixWorld=_l,fs.raycast(t,rr);for(let a=0,o=rr.length;a<o;a++){const l=rr[a];l.instanceId=r,l.object=this,e.push(l)}rr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pc(new Float32Array(s*this.count),s,this.count,So,Sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ia=new b,Au=new b,Ru=new Jt;class pi{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ia.subVectors(n,e).cross(Au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ru.getNormalMatrix(t),s=this.coplanarPoint(ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Ns,Cu=new Y(.5,.5),ar=new b;class Lo{constructor(t=new pi,e=new pi,n=new pi,s=new pi,r=new pi,a=new pi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],y=r[9],f=r[10],m=r[11],S=r[12],x=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-a,p-h,m-g,A-S).normalize(),s[1].setComponents(c+a,p+h,m+g,A+S).normalize(),s[2].setComponents(c+o,p+u,m+y,A+x).normalize(),s[3].setComponents(c-o,p-u,m-y,A-x).normalize(),n)s[4].setComponents(l,d,f,v).normalize(),s[5].setComponents(c-l,p-d,m-f,A-v).normalize();else if(s[4].setComponents(c-l,p-d,m-f,A-v).normalize(),e===Pn)s[5].setComponents(c+l,p+d,m+f,A+v).normalize();else if(e===vr)s[5].setComponents(l,d,f,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){ci.center.set(0,0,0);const e=Cu.distanceTo(t.center);return ci.radius=.7071067811865476+e,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ar.x=s.normal.x>0?t.max.x:t.min.x,ar.y=s.normal.y>0?t.max.y:t.min.y,ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lc extends He{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cs extends He{constructor(t,e,n=Un,s,r,a,o=Be,l=Be,c,h=$n,u=1){if(h!==$n&&h!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Co(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Pu extends Cs{constructor(t,e=Un,n=vi,s,r,a=Be,o=Be,l,c=$n){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ic extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ki extends be{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,p=2*u+d,g=n*2+r,y=s+1,f=new b,m=new b;for(let S=0;S<=g;S++){let x=0,v=0,A=0,E=0;if(S<=n){const M=S/n,w=M*Math.PI/2;v=-h-t*Math.cos(w),A=t*Math.sin(w),E=-t*Math.cos(w),x=M*u}else if(S<=n+r){const M=(S-n)/r;v=-h+M*e,A=t,E=0,x=u+M*d}else{const M=(S-n-r)/n,w=M*Math.PI/2;v=h+t*Math.sin(w),A=t*Math.cos(w),E=t*Math.sin(w),x=u+d+M*u}const R=Math.max(0,Math.min(1,x/p));let P=0;S===0?P=.5/s:S===g&&(P=-.5/s);for(let M=0;M<=s;M++){const w=M/s,I=w*Math.PI*2,D=Math.sin(I),F=Math.cos(I);m.x=-A*F,m.y=v,m.z=A*D,o.push(m.x,m.y,m.z),f.set(-A*F,E,A*D),f.normalize(),l.push(f.x,f.y,f.z),c.push(w+P,R)}if(S>0){const M=(S-1)*y;for(let w=0;w<s;w++){const I=M+w,D=M+w+1,F=S*y+w,G=S*y+w+1;a.push(I,D,F),a.push(D,G,F)}}}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class wr extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new b,h=new Y;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ce extends be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const y=[],f=n/2;let m=0;S(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(p,2));function S(){const v=new b,A=new b;let E=0;const R=(e-t)/n;for(let P=0;P<=r;P++){const M=[],w=P/r,I=w*(e-t)+t;for(let D=0;D<=s;D++){const F=D/s,G=F*l+o,H=Math.sin(G),V=Math.cos(G);A.x=I*H,A.y=-w*n+f,A.z=I*V,u.push(A.x,A.y,A.z),v.set(H,R,V).normalize(),d.push(v.x,v.y,v.z),p.push(F,1-w),M.push(g++)}y.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){const w=y[M][P],I=y[M+1][P],D=y[M+1][P+1],F=y[M][P+1];(t>0||M!==0)&&(h.push(w,I,F),E+=3),(e>0||M!==r-1)&&(h.push(I,D,F),E+=3)}c.addGroup(m,E,0),m+=E}function x(v){const A=g,E=new Y,R=new b;let P=0;const M=v===!0?t:e,w=v===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,f*w,0),d.push(0,w,0),p.push(.5,.5),g++;const I=g;for(let D=0;D<=s;D++){const G=D/s*l+o,H=Math.cos(G),V=Math.sin(G);R.x=M*V,R.y=f*w,R.z=M*H,u.push(R.x,R.y,R.z),d.push(0,w,0),E.x=H*.5+.5,E.y=V*.5*w+.5,p.push(E.x,E.y),g++}for(let D=0;D<s;D++){const F=A+D,G=I+D;v===!0?h.push(G,G+1,F):h.push(G+1,G,F),P+=3}c.addGroup(m,P,v===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Io extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new b,v=new b,A=new b;for(let E=0;E<e.length;E+=3)p(e[E+0],x),p(e[E+1],v),p(e[E+2],A),l(x,v,A,S)}function l(S,x,v,A){const E=A+1,R=[];for(let P=0;P<=E;P++){R[P]=[];const M=S.clone().lerp(v,P/E),w=x.clone().lerp(v,P/E),I=E-P;for(let D=0;D<=I;D++)D===0&&P===E?R[P][D]=M:R[P][D]=M.clone().lerp(w,D/I)}for(let P=0;P<E;P++)for(let M=0;M<2*(E-P)-1;M++){const w=Math.floor(M/2);M%2===0?(d(R[P][w+1]),d(R[P+1][w]),d(R[P][w])):(d(R[P][w+1]),d(R[P+1][w+1]),d(R[P+1][w]))}}function c(S){const x=new b;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(S),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const S=new b;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const v=f(S)/2/Math.PI+.5,A=m(S)/Math.PI+.5;a.push(v,1-A)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const x=a[S+0],v=a[S+2],A=a[S+4],E=Math.max(x,v,A),R=Math.min(x,v,A);E>.9&&R<.1&&(x<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),A<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,x){const v=S*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const S=new b,x=new b,v=new b,A=new b,E=new Y,R=new Y,P=new Y;for(let M=0,w=0;M<r.length;M+=9,w+=6){S.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),E.set(a[w+0],a[w+1]),R.set(a[w+2],a[w+3]),P.set(a[w+4],a[w+5]),A.copy(S).add(x).add(v).divideScalar(3);const I=f(A);y(E,w+0,S,I),y(R,w+2,x,I),y(P,w+4,v,I)}}function y(S,x,v,A){A<0&&S.x===1&&(a[x]=S.x-1),v.x===0&&v.z===0&&(a[x]=A/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.vertices,t.indices,t.radius,t.detail)}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Y:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new b,s=[],r=[],a=[],o=new b,l=new oe;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new b)}r[0]=new b,a[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(jt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(jt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Do extends Fn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Y){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Lu extends Do{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Uo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const or=new b,sa=new Uo,ra=new Uo,aa=new Uo;class Dc extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new b){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(or.subVectors(s[0],s[1]).add(s[0]),c=or);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(or.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=or),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),f<1e-4&&(f=y),sa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,f),ra.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,f),aa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,f)}else this.curveType==="catmullrom"&&(sa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ra.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),aa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(sa.calc(l),ra.calc(l),aa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new b().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Iu(i,t){const e=1-i;return e*e*t}function Du(i,t){return 2*(1-i)*i*t}function Uu(i,t){return i*i*t}function Ss(i,t,e,n){return Iu(i,t)+Du(i,e)+Uu(i,n)}function Nu(i,t){const e=1-i;return e*e*e*t}function Fu(i,t){const e=1-i;return 3*e*e*i*t}function Ou(i,t){return 3*(1-i)*i*i*t}function Bu(i,t){return i*i*i*t}function ws(i,t,e,n,s){return Nu(i,t)+Fu(i,e)+Ou(i,n)+Bu(i,s)}class Uc extends Fn{constructor(t=new Y,e=new Y,n=new Y,s=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Y){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ws(t,s.x,r.x,a.x,o.x),ws(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zu extends Fn{constructor(t=new b,e=new b,n=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new b){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ws(t,s.x,r.x,a.x,o.x),ws(t,s.y,r.y,a.y,o.y),ws(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nc extends Fn{constructor(t=new Y,e=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Y){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ku extends Fn{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fc extends Fn{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ss(t,s.x,r.x,a.x),Ss(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class No extends Fn{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ss(t,s.x,r.x,a.x),Ss(t,s.y,r.y,a.y),Ss(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oc extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Y){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(vl(o,l.x,c.x,h.x,u.x),vl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Y().fromArray(s))}return this}}var br=Object.freeze({__proto__:null,ArcCurve:Lu,CatmullRomCurve3:Dc,CubicBezierCurve:Uc,CubicBezierCurve3:zu,EllipseCurve:Do,LineCurve:Nc,LineCurve3:ku,QuadraticBezierCurve:Fc,QuadraticBezierCurve3:No,SplineCurve:Oc});class Vu extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new br[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new br[s.type]().fromJSON(s))}return this}}class oo extends Vu{constructor(t){super(),this.type="Path",this.currentPoint=new Y,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Nc(this.currentPoint.clone(),new Y(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Fc(this.currentPoint.clone(),new Y(t,e),new Y(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Uc(this.currentPoint.clone(),new Y(t,e),new Y(n,s),new Y(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Oc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Do(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Er extends oo{constructor(t){super(t),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new oo().fromJSON(s))}return this}}function Hu(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Bc(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=$u(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){const p=i[d],g=i[d+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ps(r,a,e,o,l,c,0),a}function Bc(i,t,e,n,s){let r;if(s===sd(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ml(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ml(a/n|0,i[a],i[a+1],r);return r&&ji(r,r.next)&&(Is(r),r=r.next),r}function Mi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ji(e,e.next)||we(e.prev,e,e.next)===0)){if(Is(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ps(i,t,e,n,s,r,a){if(!i)return;!a&&r&&ju(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Wu(i,n,s,r):Gu(i)){t.push(l.i,i.i,c.i),Is(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Xu(Mi(i),t),Ps(i,t,e,n,s,r,2)):a===2&&qu(i,t,e,n,s,r):Ps(Mi(i),t,e,n,s,r,1);break}}}function Gu(i){const t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&xs(s,o,r,l,a,c,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wu(i,t,e,n){const s=i.prev,r=i,a=i.next;if(we(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,l,c),g=Math.min(h,u,d),y=Math.max(o,l,c),f=Math.max(h,u,d),m=lo(p,g,t,e,n),S=lo(y,f,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=m&&v&&v.z<=S;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=f&&x!==s&&x!==a&&xs(o,h,l,u,c,d,x.x,x.y)&&we(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=y&&v.y>=g&&v.y<=f&&v!==s&&v!==a&&xs(o,h,l,u,c,d,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=f&&x!==s&&x!==a&&xs(o,h,l,u,c,d,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=S;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=f&&v!==s&&v!==a&&xs(o,h,l,u,c,d,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Xu(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ji(n,s)&&kc(n,e,e.next,s)&&Ls(n,s)&&Ls(s,n)&&(t.push(n.i,e.i,s.i),Is(e),Is(e.next),e=i=s),e=e.next}while(e!==i);return Mi(e)}function qu(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ed(a,o)){let l=Vc(a,o);a=Mi(a,a.next),l=Mi(l,l.next),Ps(a,t,e,n,s,r,0),Ps(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function $u(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Bc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(td(c))}s.sort(Yu);for(let r=0;r<s.length;r++)e=Zu(s[r],e);return e}function Yu(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Zu(i,t){const e=Ju(i,t);if(!e)return t;const n=Vc(e,i);return Mi(n,n.next),Mi(e,e.next)}function Ju(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(ji(i,e))return e;do{if(ji(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&zc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Ls(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Ku(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Ku(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function ju(i,t,e,n){let s=i;do s.z===0&&(s.z=lo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qu(s)}function Qu(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function lo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function td(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function xs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&zc(i,t,e,n,s,r,a,o)}function ed(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!nd(i,t)&&(Ls(i,t)&&Ls(t,i)&&id(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||ji(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ji(i,t){return i.x===t.x&&i.y===t.y}function kc(i,t,e,n){const s=cr(we(i,t,e)),r=cr(we(i,t,n)),a=cr(we(e,n,i)),o=cr(we(e,n,t));return!!(s!==r&&a!==o||s===0&&lr(i,e,t)||r===0&&lr(i,n,t)||a===0&&lr(e,i,n)||o===0&&lr(e,t,n))}function lr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function cr(i){return i>0?1:i<0?-1:0}function nd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ls(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function id(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Vc(i,t){const e=co(i.i,i.x,i.y),n=co(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ml(i,t,e,n){const s=co(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Is(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function co(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sd(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class rd{static triangulate(t,e,n=2){return Hu(t,e,n)}}class Vi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Vi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];yl(t),Sl(n,t);let a=t.length;e.forEach(yl);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Sl(n,e[l]);const o=rd.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function yl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ds extends be{constructor(t=new Er([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:ad;let x,v=!1,A,E,R,P;if(m){x=m.getSpacedPoints(h),v=!0,d=!1;const j=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,j),E=new b,R=new b,P=new b}d||(f=0,p=0,g=0,y=0);const M=o.extractPoints(c);let w=M.shape;const I=M.holes;if(!Vi.isClockWise(w)){w=w.reverse();for(let j=0,rt=I.length;j<rt;j++){const tt=I[j];Vi.isClockWise(tt)&&(I[j]=tt.reverse())}}function F(j){const tt=10000000000000001e-36;let mt=j[0];for(let L=1;L<=j.length;L++){const Dt=L%j.length,wt=j[Dt],kt=wt.x-mt.x,at=wt.y-mt.y,C=kt*kt+at*at,_=Math.max(Math.abs(wt.x),Math.abs(wt.y),Math.abs(mt.x),Math.abs(mt.y)),N=tt*_*_;if(C<=N){j.splice(Dt,1),L--;continue}mt=wt}}F(w),I.forEach(F);const G=I.length,H=w;for(let j=0;j<G;j++){const rt=I[j];w=w.concat(rt)}function V(j,rt,tt){return rt||ie("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(rt,tt)}const z=w.length;function et(j,rt,tt){let mt,L,Dt;const wt=j.x-rt.x,kt=j.y-rt.y,at=tt.x-j.x,C=tt.y-j.y,_=wt*wt+kt*kt,N=wt*C-kt*at;if(Math.abs(N)>Number.EPSILON){const q=Math.sqrt(_),Q=Math.sqrt(at*at+C*C),$=rt.x-kt/q,Rt=rt.y+wt/q,ut=tt.x-C/Q,Et=tt.y+at/Q,Ft=((ut-$)*C-(Et-Rt)*at)/(wt*C-kt*at);mt=$+wt*Ft-j.x,L=Rt+kt*Ft-j.y;const it=mt*mt+L*L;if(it<=2)return new Y(mt,L);Dt=Math.sqrt(it/2)}else{let q=!1;wt>Number.EPSILON?at>Number.EPSILON&&(q=!0):wt<-Number.EPSILON?at<-Number.EPSILON&&(q=!0):Math.sign(kt)===Math.sign(C)&&(q=!0),q?(mt=-kt,L=wt,Dt=Math.sqrt(_)):(mt=wt,L=kt,Dt=Math.sqrt(_/2))}return new Y(mt/Dt,L/Dt)}const ft=[];for(let j=0,rt=H.length,tt=rt-1,mt=j+1;j<rt;j++,tt++,mt++)tt===rt&&(tt=0),mt===rt&&(mt=0),ft[j]=et(H[j],H[tt],H[mt]);const lt=[];let ht,zt=ft.concat();for(let j=0,rt=G;j<rt;j++){const tt=I[j];ht=[];for(let mt=0,L=tt.length,Dt=L-1,wt=mt+1;mt<L;mt++,Dt++,wt++)Dt===L&&(Dt=0),wt===L&&(wt=0),ht[mt]=et(tt[mt],tt[Dt],tt[wt]);lt.push(ht),zt=zt.concat(ht)}let Ut;if(f===0)Ut=Vi.triangulateShape(H,I);else{const j=[],rt=[];for(let tt=0;tt<f;tt++){const mt=tt/f,L=p*Math.cos(mt*Math.PI/2),Dt=g*Math.sin(mt*Math.PI/2)+y;for(let wt=0,kt=H.length;wt<kt;wt++){const at=V(H[wt],ft[wt],Dt);Nt(at.x,at.y,-L),mt===0&&j.push(at)}for(let wt=0,kt=G;wt<kt;wt++){const at=I[wt];ht=lt[wt];const C=[];for(let _=0,N=at.length;_<N;_++){const q=V(at[_],ht[_],Dt);Nt(q.x,q.y,-L),mt===0&&C.push(q)}mt===0&&rt.push(C)}}Ut=Vi.triangulateShape(j,rt)}const ee=Ut.length,se=g+y;for(let j=0;j<z;j++){const rt=d?V(w[j],zt[j],se):w[j];v?(R.copy(A.normals[0]).multiplyScalar(rt.x),E.copy(A.binormals[0]).multiplyScalar(rt.y),P.copy(x[0]).add(R).add(E),Nt(P.x,P.y,P.z)):Nt(rt.x,rt.y,0)}for(let j=1;j<=h;j++)for(let rt=0;rt<z;rt++){const tt=d?V(w[rt],zt[rt],se):w[rt];v?(R.copy(A.normals[j]).multiplyScalar(tt.x),E.copy(A.binormals[j]).multiplyScalar(tt.y),P.copy(x[j]).add(R).add(E),Nt(P.x,P.y,P.z)):Nt(tt.x,tt.y,u/h*j)}for(let j=f-1;j>=0;j--){const rt=j/f,tt=p*Math.cos(rt*Math.PI/2),mt=g*Math.sin(rt*Math.PI/2)+y;for(let L=0,Dt=H.length;L<Dt;L++){const wt=V(H[L],ft[L],mt);Nt(wt.x,wt.y,u+tt)}for(let L=0,Dt=I.length;L<Dt;L++){const wt=I[L];ht=lt[L];for(let kt=0,at=wt.length;kt<at;kt++){const C=V(wt[kt],ht[kt],mt);v?Nt(C.x,C.y+x[h-1].y,x[h-1].x+tt):Nt(C.x,C.y,u+tt)}}}J(),nt();function J(){const j=s.length/3;if(d){let rt=0,tt=z*rt;for(let mt=0;mt<ee;mt++){const L=Ut[mt];St(L[2]+tt,L[1]+tt,L[0]+tt)}rt=h+f*2,tt=z*rt;for(let mt=0;mt<ee;mt++){const L=Ut[mt];St(L[0]+tt,L[1]+tt,L[2]+tt)}}else{for(let rt=0;rt<ee;rt++){const tt=Ut[rt];St(tt[2],tt[1],tt[0])}for(let rt=0;rt<ee;rt++){const tt=Ut[rt];St(tt[0]+z*h,tt[1]+z*h,tt[2]+z*h)}}n.addGroup(j,s.length/3-j,0)}function nt(){const j=s.length/3;let rt=0;yt(H,rt),rt+=H.length;for(let tt=0,mt=I.length;tt<mt;tt++){const L=I[tt];yt(L,rt),rt+=L.length}n.addGroup(j,s.length/3-j,1)}function yt(j,rt){let tt=j.length;for(;--tt>=0;){const mt=tt;let L=tt-1;L<0&&(L=j.length-1);for(let Dt=0,wt=h+f*2;Dt<wt;Dt++){const kt=z*Dt,at=z*(Dt+1),C=rt+mt+kt,_=rt+L+kt,N=rt+L+at,q=rt+mt+at;Vt(C,_,N,q)}}}function Nt(j,rt,tt){l.push(j),l.push(rt),l.push(tt)}function St(j,rt,tt){le(j),le(rt),le(tt);const mt=s.length/3,L=S.generateTopUV(n,s,mt-3,mt-2,mt-1);qt(L[0]),qt(L[1]),qt(L[2])}function Vt(j,rt,tt,mt){le(j),le(rt),le(mt),le(rt),le(tt),le(mt);const L=s.length/3,Dt=S.generateSideWallUV(n,s,L-6,L-3,L-2,L-1);qt(Dt[0]),qt(Dt[1]),qt(Dt[3]),qt(Dt[1]),qt(Dt[2]),qt(Dt[3])}function le(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function qt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return od(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new br[s.type]().fromJSON(s)),new Ds(n,t.options)}}const ad={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Y(r,a),new Y(o,l),new Y(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],y=t[r*3],f=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Y(a,1-l),new Y(c,1-u),new Y(d,1-g),new Y(y,1-m)]:[new Y(o,1-l),new Y(h,1-u),new Y(p,1-g),new Y(f,1-m)]}};function od(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Us extends Io{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Us(t.radius,t.detail)}}class Yn extends be{constructor(t=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=jt(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/e,u=new b,d=new Y,p=new b,g=new b,y=new b;let f=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:f=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,p.x=m*1,p.y=-f,p.z=m*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:f=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,p.x=m*1,p.y=-f,p.z=m*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let S=0;S<=e;S++){const x=n+S*h*s,v=Math.sin(x),A=Math.cos(x);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*A,a.push(u.x,u.y,u.z),d.x=S/e,d.y=E/(t.length-1),o.push(d.x,d.y);const R=l[3*E+0]*v,P=l[3*E+1],M=l[3*E+0]*A;c.push(R,P,M)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){const v=x+S*t.length,A=v,E=v+t.length,R=v+t.length+1,P=v+1;r.push(A,E,P),r.push(R,P,E)}this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("uv",new te(o,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.points,t.segments,t.phiStart,t.phiLength)}}class cn extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],y=[],f=[];for(let m=0;m<h;m++){const S=m*d-a;for(let x=0;x<c;x++){const v=x*u-r;g.push(v,-S,0),y.push(0,0,1),f.push(x/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const x=S+c*m,v=S+c*(m+1),A=S+1+c*(m+1),E=S+1+c*m;p.push(x,v,E),p.push(v,A,E)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(y,3)),this.setAttribute("uv",new te(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.widthSegments,t.heightSegments)}}class ue extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new b,d=new b,p=[],g=[],y=[],f=[];for(let m=0;m<=n;m++){const S=[],x=m/n;let v=0;m===0&&a===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(s+E*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+E*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),f.push(E+v,1-x),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const x=h[m][S+1],v=h[m][S],A=h[m+1][S],E=h[m+1][S+1];(m!==0||a>0)&&p.push(x,v,E),(m!==n-1||l<Math.PI)&&p.push(v,A,E)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(y,3)),this.setAttribute("uv",new te(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xn extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new b,u=new b,d=new b;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const y=g/s*r,f=p/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(y),u.y=(t+e*Math.cos(f))*Math.sin(y),u.z=e*Math.sin(f),o.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const y=(s+1)*p+g-1,f=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,S=(s+1)*p+g;a.push(y,f,S),a.push(f,m,S)}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Fo extends be{constructor(t=1,e=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],c=[],h=[],u=new b,d=new b,p=new b,g=new b,y=new b,f=new b,m=new b;for(let x=0;x<=n;++x){const v=x/n*r*Math.PI*2;S(v,r,a,t,p),S(v+.01,r,a,t,g),f.subVectors(g,p),m.addVectors(g,p),y.crossVectors(f,m),m.crossVectors(y,f),y.normalize(),m.normalize();for(let A=0;A<=s;++A){const E=A/s*Math.PI*2,R=-e*Math.cos(E),P=e*Math.sin(E);u.x=p.x+(R*m.x+P*y.x),u.y=p.y+(R*m.y+P*y.y),u.z=p.z+(R*m.z+P*y.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(A/s)}}for(let x=1;x<=n;x++)for(let v=1;v<=s;v++){const A=(s+1)*(x-1)+(v-1),E=(s+1)*x+(v-1),R=(s+1)*x+v,P=(s+1)*(x-1)+v;o.push(A,E,P),o.push(E,R,P)}this.setIndex(o),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(h,2));function S(x,v,A,E,R){const P=Math.cos(x),M=Math.sin(x),w=A/v*x,I=Math.cos(w);R.x=E*(2+I)*.5*P,R.y=E*(2+I)*M*.5,R.z=E*Math.sin(w)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Rr extends be{constructor(t=new No(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new b,l=new b,c=new Y;let h=new b;const u=[],d=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(p,2));function y(){for(let x=0;x<e;x++)f(x);f(r===!1?e:0),S(),m()}function f(x){h=t.getPointAt(x/e,h);const v=a.normals[x],A=a.binormals[x];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,P=Math.sin(R),M=-Math.cos(R);l.x=M*v.x+P*A.x,l.y=M*v.y+P*A.y,l.z=M*v.z+P*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){const A=(s+1)*(x-1)+(v-1),E=(s+1)*x+(v-1),R=(s+1)*x+v,P=(s+1)*(x-1)+v;g.push(A,E,P),g.push(E,R,P)}}function S(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)c.x=x/e,c.y=v/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Rr(new br[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ld extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ot extends ns{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qe extends Ot{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class cd extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hd extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Hc extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class ud extends Hc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const oa=new oe,wl=new b,bl=new b;class dd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(wl),bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bl),e.updateMatrixWorld(),oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Oo extends Ec{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class fd extends dd{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class la extends Hc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new fd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class pd extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const El=new oe;class md{constructor(t,e,n=0,s=1/0){this.ray=new Mc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return El.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(El),this}intersectObject(t,e=!0,n=[]){return ho(t,this,n,e),n.sort(Tl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ho(t[s],this,n,e);return n.sort(Tl),n}}function Tl(i,t){return i.distance-t.distance}function ho(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ho(r[a],t,e,!0)}}function Al(i,t,e,n){const s=gd(n);switch(e){case mc:return i*t;case So:return i*t/s.components*s.byteLength;case wo:return i*t/s.components*s.byteLength;case $i:return i*t*2/s.components*s.byteLength;case bo:return i*t*2/s.components*s.byteLength;case gc:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case Eo:return i*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:case La:return Math.max(i,16)*Math.max(t,8)/4;case Ra:case Pa:return Math.max(i,8)*Math.max(t,8)/2;case Ia:case Da:case Na:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qa:case to:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case no:case io:return Math.ceil(i/4)*Math.ceil(t/4)*8;case so:case ro:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gd(i){switch(i){case ln:case uc:return{byteLength:1,components:1};case Es:case dc:case qn:return{byteLength:2,components:1};case Mo:case yo:return{byteLength:2,components:4};case Un:case vo:case Sn:return{byteLength:4,components:1};case fc:case pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_o}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_o);function Gc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _d(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const y=u[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
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
#endif`,Md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
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
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
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
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ld=`#ifdef USE_IRIDESCENCE
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
#endif`,Id=`#ifdef USE_BUMPMAP
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vd=`#define PI 3.141592653589793
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
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gd=`vec3 transformedNormal = objectNormal;
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
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,af=`#ifdef USE_GRADIENTMAP
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
}`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hf=`uniform bool receiveShadow;
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
#endif`,uf=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gf=`PhysicalMaterial material;
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
#endif`,_f=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,xf=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rf=`#if defined( USE_POINTS_UV )
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
#endif`,Cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,If=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
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
#endif`,Nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Of=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vf=`#ifdef USE_NORMALMAP
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
#endif`,Hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$f=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ip=`float getShadowMask() {
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
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vp=`uniform sampler2D t2D;
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
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
}`,Ep=`#if DEPTH_PACKING == 3200
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
}`,Tp=`#define DISTANCE
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
}`,Ap=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`uniform float scale;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Up=`#define LAMBERT
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
}`,Np=`#define LAMBERT
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
}`,Fp=`#define MATCAP
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
}`,Op=`#define MATCAP
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
}`,Bp=`#define NORMAL
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
}`,zp=`#define NORMAL
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
}`,kp=`#define PHONG
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
}`,Vp=`#define PHONG
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
}`,Hp=`#define STANDARD
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
}`,Gp=`#define STANDARD
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
}`,Wp=`#define TOON
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
}`,Xp=`#define TOON
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
}`,qp=`uniform float size;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,Zp=`uniform vec3 color;
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
}`,Jp=`uniform float rotation;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:xd,alphahash_pars_fragment:vd,alphamap_fragment:Md,alphamap_pars_fragment:yd,alphatest_fragment:Sd,alphatest_pars_fragment:wd,aomap_fragment:bd,aomap_pars_fragment:Ed,batching_pars_vertex:Td,batching_vertex:Ad,begin_vertex:Rd,beginnormal_vertex:Cd,bsdfs:Pd,iridescence_fragment:Ld,bumpmap_pars_fragment:Id,clipping_planes_fragment:Dd,clipping_planes_pars_fragment:Ud,clipping_planes_pars_vertex:Nd,clipping_planes_vertex:Fd,color_fragment:Od,color_pars_fragment:Bd,color_pars_vertex:zd,color_vertex:kd,common:Vd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Gd,displacementmap_pars_vertex:Wd,displacementmap_vertex:Xd,emissivemap_fragment:qd,emissivemap_pars_fragment:$d,colorspace_fragment:Yd,colorspace_pars_fragment:Zd,envmap_fragment:Jd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:jd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:uf,envmap_vertex:tf,fog_vertex:ef,fog_pars_vertex:nf,fog_fragment:sf,fog_pars_fragment:rf,gradientmap_pars_fragment:af,lightmap_pars_fragment:of,lights_lambert_fragment:lf,lights_lambert_pars_fragment:cf,lights_pars_begin:hf,lights_toon_fragment:df,lights_toon_pars_fragment:ff,lights_phong_fragment:pf,lights_phong_pars_fragment:mf,lights_physical_fragment:gf,lights_physical_pars_fragment:_f,lights_fragment_begin:xf,lights_fragment_maps:vf,lights_fragment_end:Mf,logdepthbuf_fragment:yf,logdepthbuf_pars_fragment:Sf,logdepthbuf_pars_vertex:wf,logdepthbuf_vertex:bf,map_fragment:Ef,map_pars_fragment:Tf,map_particle_fragment:Af,map_particle_pars_fragment:Rf,metalnessmap_fragment:Cf,metalnessmap_pars_fragment:Pf,morphinstance_vertex:Lf,morphcolor_vertex:If,morphnormal_vertex:Df,morphtarget_pars_vertex:Uf,morphtarget_vertex:Nf,normal_fragment_begin:Ff,normal_fragment_maps:Of,normal_pars_fragment:Bf,normal_pars_vertex:zf,normal_vertex:kf,normalmap_pars_fragment:Vf,clearcoat_normal_fragment_begin:Hf,clearcoat_normal_fragment_maps:Gf,clearcoat_pars_fragment:Wf,iridescence_pars_fragment:Xf,opaque_fragment:qf,packing:$f,premultiplied_alpha_fragment:Yf,project_vertex:Zf,dithering_fragment:Jf,dithering_pars_fragment:Kf,roughnessmap_fragment:jf,roughnessmap_pars_fragment:Qf,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:ep,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:ap,skinnormal_vertex:op,specularmap_fragment:lp,specularmap_pars_fragment:cp,tonemapping_fragment:hp,tonemapping_pars_fragment:up,transmission_fragment:dp,transmission_pars_fragment:fp,uv_pars_fragment:pp,uv_pars_vertex:mp,uv_vertex:gp,worldpos_vertex:_p,background_vert:xp,background_frag:vp,backgroundCube_vert:Mp,backgroundCube_frag:yp,cube_vert:Sp,cube_frag:wp,depth_vert:bp,depth_frag:Ep,distance_vert:Tp,distance_frag:Ap,equirect_vert:Rp,equirect_frag:Cp,linedashed_vert:Pp,linedashed_frag:Lp,meshbasic_vert:Ip,meshbasic_frag:Dp,meshlambert_vert:Up,meshlambert_frag:Np,meshmatcap_vert:Fp,meshmatcap_frag:Op,meshnormal_vert:Bp,meshnormal_frag:zp,meshphong_vert:kp,meshphong_frag:Vp,meshphysical_vert:Hp,meshphysical_frag:Gp,meshtoon_vert:Wp,meshtoon_frag:Xp,points_vert:qp,points_frag:$p,shadow_vert:Yp,shadow_frag:Zp,sprite_vert:Jp,sprite_frag:Kp},xt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Cn={basic:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Xe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Xe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Xe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Xe([xt.points,xt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Xe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Xe([xt.common,xt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Xe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Xe([xt.sprite,xt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Xe([xt.common,xt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Xe([xt.lights,xt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Cn.physical={uniforms:Xe([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const hr={r:0,b:0,g:0},hi=new qe,jp=new oe;function Qp(i,t,e,n,s,r,a){const o=new Zt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function y(x){let v=!1;const A=g(x);A===null?m(o,l):A&&A.isColor&&(m(A,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(x,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Ar)?(h===void 0&&(h=new Z(new de(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ji(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hi.copy(v.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler(hi)),h.material.toneMapped=ae.getTransfer(A.colorSpace)!==me,(u!==A||d!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Z(new cn(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ji(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ae.getTransfer(A.colorSpace)!==me,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(hr,bc(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,v,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(o,l)},render:y,addToRenderList:f,dispose:S}}function tm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(w,I,D,F,G){let H=!1;const V=u(F,D,I);r!==V&&(r=V,c(r.object)),H=p(w,F,D,G),H&&g(w,F,D,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(w,I,D,F),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,I,D){const F=D.wireframe===!0;let G=n[w.id];G===void 0&&(G={},n[w.id]=G);let H=G[I.id];H===void 0&&(H={},G[I.id]=H);let V=H[F];return V===void 0&&(V=d(l()),H[F]=V),V}function d(w){const I=[],D=[],F=[];for(let G=0;G<e;G++)I[G]=0,D[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:F,object:w,attributes:{},index:null}}function p(w,I,D,F){const G=r.attributes,H=I.attributes;let V=0;const z=D.getAttributes();for(const et in z)if(z[et].location>=0){const lt=G[et];let ht=H[et];if(ht===void 0&&(et==="instanceMatrix"&&w.instanceMatrix&&(ht=w.instanceMatrix),et==="instanceColor"&&w.instanceColor&&(ht=w.instanceColor)),lt===void 0||lt.attribute!==ht||ht&&lt.data!==ht.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(w,I,D,F){const G={},H=I.attributes;let V=0;const z=D.getAttributes();for(const et in z)if(z[et].location>=0){let lt=H[et];lt===void 0&&(et==="instanceMatrix"&&w.instanceMatrix&&(lt=w.instanceMatrix),et==="instanceColor"&&w.instanceColor&&(lt=w.instanceColor));const ht={};ht.attribute=lt,lt&&lt.data&&(ht.data=lt.data),G[et]=ht,V++}r.attributes=G,r.attributesNum=V,r.index=F}function y(){const w=r.newAttributes;for(let I=0,D=w.length;I<D;I++)w[I]=0}function f(w){m(w,0)}function m(w,I){const D=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;D[w]=1,F[w]===0&&(i.enableVertexAttribArray(w),F[w]=1),G[w]!==I&&(i.vertexAttribDivisor(w,I),G[w]=I)}function S(){const w=r.newAttributes,I=r.enabledAttributes;for(let D=0,F=I.length;D<F;D++)I[D]!==w[D]&&(i.disableVertexAttribArray(D),I[D]=0)}function x(w,I,D,F,G,H,V){V===!0?i.vertexAttribIPointer(w,I,D,G,H):i.vertexAttribPointer(w,I,D,F,G,H)}function v(w,I,D,F){y();const G=F.attributes,H=D.getAttributes(),V=I.defaultAttributeValues;for(const z in H){const et=H[z];if(et.location>=0){let ft=G[z];if(ft===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor)),ft!==void 0){const lt=ft.normalized,ht=ft.itemSize,zt=t.get(ft);if(zt===void 0)continue;const Ut=zt.buffer,ee=zt.type,se=zt.bytesPerElement,J=ee===i.INT||ee===i.UNSIGNED_INT||ft.gpuType===vo;if(ft.isInterleavedBufferAttribute){const nt=ft.data,yt=nt.stride,Nt=ft.offset;if(nt.isInstancedInterleavedBuffer){for(let St=0;St<et.locationSize;St++)m(et.location+St,nt.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let St=0;St<et.locationSize;St++)f(et.location+St);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let St=0;St<et.locationSize;St++)x(et.location+St,ht/et.locationSize,ee,lt,yt*se,(Nt+ht/et.locationSize*St)*se,J)}else{if(ft.isInstancedBufferAttribute){for(let nt=0;nt<et.locationSize;nt++)m(et.location+nt,ft.meshPerAttribute);w.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let nt=0;nt<et.locationSize;nt++)f(et.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let nt=0;nt<et.locationSize;nt++)x(et.location+nt,ht/et.locationSize,ee,lt,ht*se,ht/et.locationSize*nt*se,J)}}else if(V!==void 0){const lt=V[z];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(et.location,lt);break;case 3:i.vertexAttrib3fv(et.location,lt);break;case 4:i.vertexAttrib4fv(et.location,lt);break;default:i.vertexAttrib1fv(et.location,lt)}}}}S()}function A(){P();for(const w in n){const I=n[w];for(const D in I){const F=I[D];for(const G in F)h(F[G].object),delete F[G];delete I[D]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;const I=n[w.id];for(const D in I){const F=I[D];for(const G in F)h(F[G].object),delete F[G];delete I[D]}delete n[w.id]}function R(w){for(const I in n){const D=n[I];if(D[w.id]===void 0)continue;const F=D[w.id];for(const G in F)h(F[G].object),delete F[G];delete D[w.id]}}function P(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:f,disableUnusedAttributes:S}}function em(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function nm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==wn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Sn&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&($t("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,maxSamples:A,samples:E}}function im(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new pi,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,y=u.clipIntersection,f=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{const S=r?0:n,x=S*4;let v=m.clippingState||null;l.value=v,v=h(g,d,x,p);for(let A=0;A!==x;++A)v[A]=e[A];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const y=u!==null?u.length:0;let f=null;if(y!==0){if(f=l.value,g!==!0||f===null){const m=p+y*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<m)&&(f=new Float32Array(m));for(let x=0,v=p;x!==y;++x,v+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(f,v),f[v+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,f}}function sm(i){let t=new WeakMap;function e(a,o){return o===Ea?a.mapping=vi:o===Ta&&(a.mapping=qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ea||o===Ta)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ac(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ii=4,Rl=[.125,.215,.35,.446,.526,.582],gi=20,rm=256,ms=new Oo,Cl=new Zt;let ca=null,ha=0,ua=0,da=!1;const am=new b;class Pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=am}=r;ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ca,ha,ua),this._renderer.xr.enabled=da,t.scissorTest=!1,ki(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ca=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:qn,format:wn,colorSpace:Yi,depthBuffer:!1},s=Ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=om(r)),this._blurMaterial=cm(r,t,e),this._ggxMaterial=lm(r,t,e)}return s}_compileMaterial(t){const e=new Z(new be,t);this._renderer.compile(e,ms)}_sceneToCubeUV(t,e,n,s,r){const l=new fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Cl),u.toneMapping=Ln,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Z(new de,new Zi({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,f=y.material;let m=!1;const S=t.background;S?S.isColor&&(f.color.copy(S),t.background=null,m=!0):(f.color.copy(Cl),m=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const A=this._cubeSize;ki(s,v*A,x>2?A:0,A,A),u.setRenderTarget(s),m&&u.render(y,l),u.render(t,l)}u.toneMapping=p,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===vi||t.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Il());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ki(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ms)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:g}=this,y=this._sizeLods[n],f=3*y*(n>g-ii?n-g+ii:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,ki(r,f,m,3*y,2*y),s.setRenderTarget(r),s.render(o,ms),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ki(t,f,m,3*y,2*y),s.setRenderTarget(t),s.render(o,ms)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ie("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gi-1),y=r/g,f=isFinite(r)?1+Math.floor(h*y):gi;f>gi&&$t(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${gi}`);const m=[];let S=0;for(let R=0;R<gi;++R){const P=R/y,M=Math.exp(-P*P/2);m.push(M),R===0?S+=M:R<f&&(S+=2*M)}for(let R=0;R<m.length;R++)m[R]=m[R]/S;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[s],A=3*v*(s>x-ii?s-x+ii:0),E=4*(this._cubeSize-v);ki(e,A,E,3*v,2*v),l.setRenderTarget(e),l.render(u,ms)}}function om(i){const t=[],e=[],n=[];let s=i;const r=i-ii+1+Rl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ii?l=Rl[a-i+ii-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,f=2,m=1,S=new Float32Array(y*g*p),x=new Float32Array(f*g*p),v=new Float32Array(m*g*p);for(let E=0;E<p;E++){const R=E%3*2/3-1,P=E>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];S.set(M,y*g*E),x.set(d,f*g*E);const w=[E,E,E,E,E,E];v.set(w,m*g*E)}const A=new be;A.setAttribute("position",new $e(S,y)),A.setAttribute("uv",new $e(x,f)),A.setAttribute("faceIndex",new $e(v,m)),n.push(new Z(A,null)),s>ii&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ll(i,t,e){const n=new Dn(i,t,e);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ki(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lm(i,t,e){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cr(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function cm(i,t,e){const n=new Float32Array(gi),s=new b(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cr(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Il(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cr(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Dl(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Cr(){return`

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
	`}function hm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ea||l===Ta,h=l===vi||l===qi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Pl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Pl(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function um(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&As("WebGLRenderer: "+n+" extension not supported."),s}}}function dm(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let y=0;if(p!==null){const S=p.array;y=p.version;for(let x=0,v=S.length;x<v;x+=3){const A=S[x+0],E=S[x+1],R=S[x+2];d.push(A,E,E,R,R,A)}}else if(g!==void 0){const S=g.array;y=g.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const A=x+0,E=x+1,R=x+2;d.push(A,E,E,R,R,A)}}else return;const f=new(xc(d)?wc:Sc)(d,1);f.version=y;const m=r.get(u);m&&t.remove(m),r.set(u,f)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function fm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m];e.update(f,n,1)}function u(d,p,g,y){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)c(d[m]/a,p[m],y[m]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,g);let m=0;for(let S=0;S<g;S++)m+=p[S]*y[S];e.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function pm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function mm(i,t,e){const n=new WeakMap,s=new Ae;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let w=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",w)};var p=w;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),y===!0&&(v=2),f===!0&&(v=3);let A=o.attributes.position.count*v,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*E*4*u),P=new vc(R,A,E,u);P.type=Sn,P.needsUpdate=!0;const M=v*4;for(let I=0;I<u;I++){const D=m[I],F=S[I],G=x[I],H=A*E*4*I;for(let V=0;V<D.count;V++){const z=V*M;g===!0&&(s.fromBufferAttribute(D,V),R[H+z+0]=s.x,R[H+z+1]=s.y,R[H+z+2]=s.z,R[H+z+3]=0),y===!0&&(s.fromBufferAttribute(F,V),R[H+z+4]=s.x,R[H+z+5]=s.y,R[H+z+6]=s.z,R[H+z+7]=0),f===!0&&(s.fromBufferAttribute(G,V),R[H+z+8]=s.x,R[H+z+9]=s.y,R[H+z+10]=s.z,R[H+z+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new Y(A,E)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<c.length;f++)g+=c[f];const y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function gm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const _m={[sc]:"LINEAR_TONE_MAPPING",[rc]:"REINHARD_TONE_MAPPING",[ac]:"CINEON_TONE_MAPPING",[xo]:"ACES_FILMIC_TONE_MAPPING",[lc]:"AGX_TONE_MAPPING",[cc]:"NEUTRAL_TONE_MAPPING",[oc]:"CUSTOM_TONE_MAPPING"};function xm(i,t,e,n,s){const r=new Dn(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Dn(t,e,{type:qn,depthBuffer:!1,stencilBuffer:!1}),o=new be;o.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new te([0,2,0,0,2,0],2));const l=new ld({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Z(o,l),h=new Oo(-1,1,1,-1,0,1);let u=null,d=null,p=!1,g,y=null,f=[],m=!1;this.setSize=function(S,x){r.setSize(S,x),a.setSize(S,x);for(let v=0;v<f.length;v++){const A=f[v];A.setSize&&A.setSize(S,x)}},this.setEffects=function(S){f=S,m=f.length>0&&f[0].isRenderPass===!0;const x=r.width,v=r.height;for(let A=0;A<f.length;A++){const E=f[A];E.setSize&&E.setSize(x,v)}},this.begin=function(S,x){if(p||S.toneMapping===Ln&&f.length===0)return!1;if(y=x,x!==null){const v=x.width,A=x.height;(r.width!==v||r.height!==A)&&this.setSize(v,A)}return m===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=Ln,!0},this.hasRenderPass=function(){return m},this.end=function(S,x){S.toneMapping=g,p=!0;let v=r,A=a;for(let E=0;E<f.length;E++){const R=f[E];if(R.enabled!==!1&&(R.render(S,A,v,x),R.needsSwap!==!1)){const P=v;v=A,A=P}}if(u!==S.outputColorSpace||d!==S.toneMapping){u=S.outputColorSpace,d=S.toneMapping,l.defines={},ae.getTransfer(u)===me&&(l.defines.SRGB_TRANSFER="");const E=_m[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(y),S.render(c,h),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Wc=new He,uo=new Cs(1,1),Xc=new vc,qc=new su,$c=new Tc,Ul=[],Nl=[],Fl=new Float32Array(16),Ol=new Float32Array(9),Bl=new Float32Array(4);function is(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ul[s];if(r===void 0&&(r=new Float32Array(s),Ul[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pr(i,t){let e=Nl[t];e===void 0&&(e=new Int32Array(t),Nl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Bl.set(n),i.uniformMatrix2fv(this.addr,!1,Bl),Ne(e,n)}}function bm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Ol.set(n),i.uniformMatrix3fv(this.addr,!1,Ol),Ne(e,n)}}function Em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Fl.set(n),i.uniformMatrix4fv(this.addr,!1,Fl),Ne(e,n)}}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function Pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function Um(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uo.compareFunction=e.isReversedDepthBuffer()?Ao:To,r=uo):r=Wc,e.setTexture2D(t||r,s)}function Nm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qc,s)}function Fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$c,s)}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xc,s)}function Bm(i){switch(i){case 5126:return vm;case 35664:return Mm;case 35665:return ym;case 35666:return Sm;case 35674:return wm;case 35675:return bm;case 35676:return Em;case 5124:case 35670:return Tm;case 35667:case 35671:return Am;case 35668:case 35672:return Rm;case 35669:case 35673:return Cm;case 5125:return Pm;case 36294:return Lm;case 36295:return Im;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}function zm(i,t){i.uniform1fv(this.addr,t)}function km(i,t){const e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function Vm(i,t){const e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function Hm(i,t){const e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function Gm(i,t){const e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wm(i,t){const e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xm(i,t){const e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qm(i,t){i.uniform1iv(this.addr,t)}function $m(i,t){i.uniform2iv(this.addr,t)}function Ym(i,t){i.uniform3iv(this.addr,t)}function Zm(i,t){i.uniform4iv(this.addr,t)}function Jm(i,t){i.uniform1uiv(this.addr,t)}function Km(i,t){i.uniform2uiv(this.addr,t)}function jm(i,t){i.uniform3uiv(this.addr,t)}function Qm(i,t){i.uniform4uiv(this.addr,t)}function t0(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=uo:a=Wc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function e0(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qc,r[a])}function n0(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$c,r[a])}function i0(i,t,e){const n=this.cache,s=t.length,r=Pr(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xc,r[a])}function s0(i){switch(i){case 5126:return zm;case 35664:return km;case 35665:return Vm;case 35666:return Hm;case 35674:return Gm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return $m;case 35668:case 35672:return Ym;case 35669:case 35673:return Zm;case 5125:return Jm;case 36294:return Km;case 36295:return jm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}class r0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bm(e.type)}}class a0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s0(e.type)}}class o0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function zl(i,t){i.seq.push(t),i.map[t.id]=t}function l0(i,t,e){const n=i.name,s=n.length;for(fa.lastIndex=0;;){const r=fa.exec(n),a=fa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zl(e,c===void 0?new r0(o,i,t):new a0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new o0(o),zl(e,u)),e=u}}}class _r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);l0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function kl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const c0=37297;let h0=0;function u0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Vl=new Jt;function d0(i){ae._getMatrix(Vl,ae.workingColorSpace,i);const t=`mat3( ${Vl.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case xr:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Hl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+u0(i.getShaderSource(t),o)}else return r}function f0(i,t){const e=d0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const p0={[sc]:"Linear",[rc]:"Reinhard",[ac]:"Cineon",[xo]:"ACESFilmic",[lc]:"AgX",[cc]:"Neutral",[oc]:"Custom"};function m0(i,t){const e=p0[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ur=new b;function g0(){ae.getLuminanceCoefficients(ur);const i=ur.x.toFixed(4),t=ur.y.toFixed(4),e=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function x0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function v0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function vs(i){return i!==""}function Gl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function fo(i){return i.replace(M0,S0)}const y0=new Map;function S0(i,t){let e=Kt[t];if(e===void 0){const n=y0.get(t);if(n!==void 0)e=Kt[n],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fo(e)}const w0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(i){return i.replace(w0,b0)}function b0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ql(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const E0={[dr]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function T0(i){return E0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const A0={[vi]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE_UV"};function R0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":A0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const C0={[qi]:"ENVMAP_MODE_REFRACTION"};function P0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":C0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L0={[ic]:"ENVMAP_BLENDING_MULTIPLY",[bh]:"ENVMAP_BLENDING_MIX",[Eh]:"ENVMAP_BLENDING_ADD"};function I0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":L0[i.combine]||"ENVMAP_BLENDING_NONE"}function D0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function U0(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=T0(e),c=R0(e),h=P0(e),u=I0(e),d=D0(e),p=_0(e),g=x0(r),y=s.createProgram();let f,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vs).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vs).join(`
`),m.length>0&&(m+=`
`)):(f=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),m=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?m0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,f0("linearToOutputTexel",e.outputColorSpace),g0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),a=fo(a),a=Gl(a,e),a=Wl(a,e),o=fo(o),o=Gl(o,e),o=Wl(o,e),a=Xl(a),o=Xl(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=S+f+a,v=S+m+o,A=kl(s,s.VERTEX_SHADER,x),E=kl(s,s.FRAGMENT_SHADER,v);s.attachShader(y,A),s.attachShader(y,E),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(I){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(y)||"",F=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(E)||"",H=D.trim(),V=F.trim(),z=G.trim();let et=!0,ft=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,E);else{const lt=Hl(s,A,"vertex"),ht=Hl(s,E,"fragment");ie("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+lt+`
`+ht)}else H!==""?$t("WebGLProgram: Program Info Log:",H):(V===""||z==="")&&(ft=!1);ft&&(I.diagnostics={runnable:et,programLog:H,vertexShader:{log:V,prefix:f},fragmentShader:{log:z,prefix:m}})}s.deleteShader(A),s.deleteShader(E),P=new _r(s,y),M=v0(s,y)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(y,c0)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=E,this}let N0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new O0(t),e.set(t,n)),n}}class O0{constructor(t){this.id=N0++,this.code=t,this.usedTimes=0}}function B0(i,t,e,n,s,r,a){const o=new Po,l=new F0,c=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function f(M,w,I,D,F){const G=D.fog,H=F.geometry,V=M.isMeshStandardMaterial?D.environment:null,z=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),et=z&&z.mapping===Ar?z.image.height:null,ft=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&$t("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const lt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ht=lt!==void 0?lt.length:0;let zt=0;H.morphAttributes.position!==void 0&&(zt=1),H.morphAttributes.normal!==void 0&&(zt=2),H.morphAttributes.color!==void 0&&(zt=3);let Ut,ee,se,J;if(ft){const re=Cn[ft];Ut=re.vertexShader,ee=re.fragmentShader}else Ut=M.vertexShader,ee=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),J=l.getFragmentShaderID(M);const nt=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,St=F.isBatchedMesh===!0,Vt=!!M.map,le=!!M.matcap,qt=!!z,j=!!M.aoMap,rt=!!M.lightMap,tt=!!M.bumpMap,mt=!!M.normalMap,L=!!M.displacementMap,Dt=!!M.emissiveMap,wt=!!M.metalnessMap,kt=!!M.roughnessMap,at=M.anisotropy>0,C=M.clearcoat>0,_=M.dispersion>0,N=M.iridescence>0,q=M.sheen>0,Q=M.transmission>0,$=at&&!!M.anisotropyMap,Rt=C&&!!M.clearcoatMap,ut=C&&!!M.clearcoatNormalMap,Et=C&&!!M.clearcoatRoughnessMap,Ft=N&&!!M.iridescenceMap,it=N&&!!M.iridescenceThicknessMap,dt=q&&!!M.sheenColorMap,bt=q&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,pt=!!M.specularColorMap,Yt=!!M.specularIntensityMap,O=Q&&!!M.transmissionMap,gt=Q&&!!M.thicknessMap,ot=!!M.gradientMap,vt=!!M.alphaMap,st=M.alphaTest>0,K=!!M.alphaHash,ct=!!M.extensions;let Wt=Ln;M.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const ce={shaderID:ft,shaderType:M.type,shaderName:M.name,vertexShader:Ut,fragmentShader:ee,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:St,batchingColor:St&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Yi,alphaToCoverage:!!M.alphaToCoverage,map:Vt,matcap:le,envMap:qt,envMapMode:qt&&z.mapping,envMapCubeUVHeight:et,aoMap:j,lightMap:rt,bumpMap:tt,normalMap:mt,displacementMap:L,emissiveMap:Dt,normalMapObjectSpace:mt&&M.normalMapType===Rh,normalMapTangentSpace:mt&&M.normalMapType===_c,metalnessMap:wt,roughnessMap:kt,anisotropy:at,anisotropyMap:$,clearcoat:C,clearcoatMap:Rt,clearcoatNormalMap:ut,clearcoatRoughnessMap:Et,dispersion:_,iridescence:N,iridescenceMap:Ft,iridescenceThicknessMap:it,sheen:q,sheenColorMap:dt,sheenRoughnessMap:bt,specularMap:Ct,specularColorMap:pt,specularIntensityMap:Yt,transmission:Q,transmissionMap:O,thicknessMap:gt,gradientMap:ot,opaque:M.transparent===!1&&M.blending===Hi&&M.alphaToCoverage===!1,alphaMap:vt,alphaTest:st,alphaHash:K,combine:M.combine,mapUv:Vt&&y(M.map.channel),aoMapUv:j&&y(M.aoMap.channel),lightMapUv:rt&&y(M.lightMap.channel),bumpMapUv:tt&&y(M.bumpMap.channel),normalMapUv:mt&&y(M.normalMap.channel),displacementMapUv:L&&y(M.displacementMap.channel),emissiveMapUv:Dt&&y(M.emissiveMap.channel),metalnessMapUv:wt&&y(M.metalnessMap.channel),roughnessMapUv:kt&&y(M.roughnessMap.channel),anisotropyMapUv:$&&y(M.anisotropyMap.channel),clearcoatMapUv:Rt&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ut&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&y(M.sheenRoughnessMap.channel),specularMapUv:Ct&&y(M.specularMap.channel),specularColorMapUv:pt&&y(M.specularColorMap.channel),specularIntensityMapUv:Yt&&y(M.specularIntensityMap.channel),transmissionMapUv:O&&y(M.transmissionMap.channel),thicknessMapUv:gt&&y(M.thicknessMap.channel),alphaMapUv:vt&&y(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(mt||at),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Vt||vt),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:zt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Vt&&M.map.isVideoTexture===!0&&ae.getTransfer(M.map.colorSpace)===me,decodeVideoTextureEmissive:Dt&&M.emissiveMap.isVideoTexture===!0&&ae.getTransfer(M.emissiveMap.colorSpace)===me,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Le,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ct&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&M.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function m(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)w.push(I),w.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(S(w,M),x(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function S(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const w=g[M.type];let I;if(w){const D=Cn[w];I=_u.clone(D.uniforms)}else I=M.uniforms;return I}function A(M,w){let I=u.get(w);return I!==void 0?++I.usedTimes:(I=new U0(i,w,M,r),h.push(I),u.set(w,I)),I}function E(M){if(--M.usedTimes===0){const w=h.indexOf(M);h[w]=h[h.length-1],h.pop(),u.delete(M.cacheKey),M.destroy()}}function R(M){l.remove(M)}function P(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:P}}function z0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function k0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $l(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,p,g,y,f){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:f},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=y,m.group=f),t++,m}function o(u,d,p,g,y,f){const m=a(u,d,p,g,y,f);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(u,d,p,g,y,f){const m=a(u,d,p,g,y,f);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||k0),n.length>1&&n.sort(d||$l),s.length>1&&s.sort(d||$l)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function V0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Yl,i.set(n,[a])):s>=r.length?(a=new Yl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function H0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Zt};break;case"SpotLight":e={position:new b,direction:new b,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new b,halfWidth:new b,halfHeight:new b};break}return i[t.id]=e,e}}}function G0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let W0=0;function X0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function q0(i){const t=new H0,e=G0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const s=new b,r=new oe,a=new oe;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,y=0,f=0,m=0,S=0,x=0,v=0,A=0,E=0,R=0;c.sort(X0);for(let M=0,w=c.length;M<w;M++){const I=c[M],D=I.color,F=I.intensity,G=I.distance;let H=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===$i?H=I.shadow.map.texture:H=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=D.r*F,u+=D.g*F,d+=D.b*F;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],F);R++}else if(I.isDirectionalLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,et=e.get(I);et.shadowIntensity=z.intensity,et.shadowBias=z.bias,et.shadowNormalBias=z.normalBias,et.shadowRadius=z.radius,et.shadowMapSize=z.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=I.shadow.matrix,S++}n.directional[p]=V,p++}else if(I.isSpotLight){const V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(D).multiplyScalar(F),V.distance=G,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[y]=V;const z=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,z.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[y]=z.matrix,I.castShadow){const et=e.get(I);et.shadowIntensity=z.intensity,et.shadowBias=z.bias,et.shadowNormalBias=z.normalBias,et.shadowRadius=z.radius,et.shadowMapSize=z.mapSize,n.spotShadow[y]=et,n.spotShadowMap[y]=H,v++}y++}else if(I.isRectAreaLight){const V=t.get(I);V.color.copy(D).multiplyScalar(F),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[f]=V,f++}else if(I.isPointLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const z=I.shadow,et=e.get(I);et.shadowIntensity=z.intensity,et.shadowBias=z.bias,et.shadowNormalBias=z.normalBias,et.shadowRadius=z.radius,et.shadowMapSize=z.mapSize,et.shadowCameraNear=z.camera.near,et.shadowCameraFar=z.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=I.shadow.matrix,x++}n.point[g]=V,g++}else if(I.isHemisphereLight){const V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(F),V.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[m]=V,m++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==f||P.hemiLength!==m||P.numDirectionalShadows!==S||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==A||P.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=f,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.directionalLength=p,P.pointLength=g,P.spotLength=y,P.rectAreaLength=f,P.hemiLength=m,P.numDirectionalShadows=S,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=A,P.numLightProbes=R,n.version=W0++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0;const f=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const x=c[m];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),u++}else if(x.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),p++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),a.identity(),r.copy(x.matrixWorld),r.premultiply(f),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){const v=n.hemi[y];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(f),y++}}}return{setup:o,setupView:l,state:n}}function Zl(i){const t=new q0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function $0(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Zl(i),t.set(s,[o])):r>=a.length?(o=new Zl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`,J0=[new b(1,0,0),new b(-1,0,0),new b(0,1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1)],K0=[new b(0,-1,0),new b(0,-1,0),new b(0,0,1),new b(0,0,-1),new b(0,-1,0),new b(0,-1,0)],Jl=new oe,gs=new b,pa=new b;function j0(i,t,e){let n=new Lo;const s=new Y,r=new Y,a=new Ae,o=new cd,l=new hd,c={},h=e.maxTextureSize,u={[si]:en,[en]:si,[Le]:Le},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:Y0,fragmentShader:Z0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new be;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Z(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dr;let m=this.type;this.render=function(E,R,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;E.type===nc&&($t("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=dr);const M=i.getRenderTarget(),w=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Gn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=m!==this.type;F&&R.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(H=>H.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,H=E.length;G<H;G++){const V=E[G],z=V.shadow;if(z===void 0){$t("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const et=z.getFrameExtents();if(s.multiply(et),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,z.mapSize.y=r.y)),z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===_s){if(V.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Dn(s.x,s.y,{format:$i,type:qn,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new Cs(s.x,s.y,Sn),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=$n,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Be,z.map.depthTexture.magFilter=Be}else{V.isPointLight?(z.map=new Ac(s.x),z.map.depthTexture=new Pu(s.x,Un)):(z.map=new Dn(s.x,s.y),z.map.depthTexture=new Cs(s.x,s.y,Un)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=$n;const lt=i.state.buffers.depth.getReversed();this.type===dr?(z.map.depthTexture.compareFunction=lt?Ao:To,z.map.depthTexture.minFilter=Ve,z.map.depthTexture.magFilter=Ve):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Be,z.map.depthTexture.magFilter=Be)}z.camera.updateProjectionMatrix()}const ft=z.map.isWebGLCubeRenderTarget?6:1;for(let lt=0;lt<ft;lt++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,lt),i.clear();else{lt===0&&(i.setRenderTarget(z.map),i.clear());const ht=z.getViewport(lt);a.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),D.viewport(a)}if(V.isPointLight){const ht=z.camera,zt=z.matrix,Ut=V.distance||ht.far;Ut!==ht.far&&(ht.far=Ut,ht.updateProjectionMatrix()),gs.setFromMatrixPosition(V.matrixWorld),ht.position.copy(gs),pa.copy(ht.position),pa.add(J0[lt]),ht.up.copy(K0[lt]),ht.lookAt(pa),ht.updateMatrixWorld(),zt.makeTranslation(-gs.x,-gs.y,-gs.z),Jl.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Jl,ht.coordinateSystem,ht.reversedDepth)}else z.updateMatrices(V);n=z.getFrustum(),v(R,P,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===_s&&S(z,P),z.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(M,w,I)};function S(E,R){const P=t.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Dn(s.x,s.y,{format:$i,type:qn})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,P,p,y,null)}function x(E,R,P,M){let w=null;const I=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)w=I;else if(w=P.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=w.uuid,F=R.uuid;let G=c[D];G===void 0&&(G={},c[D]=G);let H=G[F];H===void 0&&(H=w.clone(),G[F]=H,R.addEventListener("dispose",A)),w=H}if(w.visible=R.visible,w.wireframe=R.wireframe,M===_s?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:u[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const D=i.properties.get(w);D.light=P}return w}function v(E,R,P,M,w){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===_s)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const F=t.update(E),G=E.material;if(Array.isArray(G)){const H=F.groups;for(let V=0,z=H.length;V<z;V++){const et=H[V],ft=G[et.materialIndex];if(ft&&ft.visible){const lt=x(E,ft,M,w);E.onBeforeShadow(i,E,R,P,F,lt,et),i.renderBufferDirect(P,null,F,lt,E,et),E.onAfterShadow(i,E,R,P,F,lt,et)}}}else if(G.visible){const H=x(E,G,M,w);E.onBeforeShadow(i,E,R,P,F,H,null),i.renderBufferDirect(P,null,F,H,E,null),E.onAfterShadow(i,E,R,P,F,H,null)}}const D=E.children;for(let F=0,G=D.length;F<G;F++)v(D[F],R,P,M,w)}function A(E){E.target.removeEventListener("dispose",A);for(const P in c){const M=c[P],w=E.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const Q0={[xa]:va,[Ma]:wa,[ya]:ba,[Xi]:Sa,[va]:xa,[wa]:Ma,[ba]:ya,[Sa]:Xi};function tg(i,t){function e(){let O=!1;const gt=new Ae;let ot=null;const vt=new Ae(0,0,0,0);return{setMask:function(st){ot!==st&&!O&&(i.colorMask(st,st,st,st),ot=st)},setLocked:function(st){O=st},setClear:function(st,K,ct,Wt,ce){ce===!0&&(st*=Wt,K*=Wt,ct*=Wt),gt.set(st,K,ct,Wt),vt.equals(gt)===!1&&(i.clearColor(st,K,ct,Wt),vt.copy(gt))},reset:function(){O=!1,ot=null,vt.set(-1,0,0,0)}}}function n(){let O=!1,gt=!1,ot=null,vt=null,st=null;return{setReversed:function(K){if(gt!==K){const ct=t.get("EXT_clip_control");K?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),gt=K;const Wt=st;st=null,this.setClear(Wt)}},getReversed:function(){return gt},setTest:function(K){K?nt(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(K){ot!==K&&!O&&(i.depthMask(K),ot=K)},setFunc:function(K){if(gt&&(K=Q0[K]),vt!==K){switch(K){case xa:i.depthFunc(i.NEVER);break;case va:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case Sa:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=K}},setLocked:function(K){O=K},setClear:function(K){st!==K&&(gt&&(K=1-K),i.clearDepth(K),st=K)},reset:function(){O=!1,ot=null,vt=null,st=null,gt=!1}}}function s(){let O=!1,gt=null,ot=null,vt=null,st=null,K=null,ct=null,Wt=null,ce=null;return{setTest:function(re){O||(re?nt(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(re){gt!==re&&!O&&(i.stencilMask(re),gt=re)},setFunc:function(re,nn,ve){(ot!==re||vt!==nn||st!==ve)&&(i.stencilFunc(re,nn,ve),ot=re,vt=nn,st=ve)},setOp:function(re,nn,ve){(K!==re||ct!==nn||Wt!==ve)&&(i.stencilOp(re,nn,ve),K=re,ct=nn,Wt=ve)},setLocked:function(re){O=re},setClear:function(re){ce!==re&&(i.clearStencil(re),ce=re)},reset:function(){O=!1,gt=null,ot=null,vt=null,st=null,K=null,ct=null,Wt=null,ce=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,y=!1,f=null,m=null,S=null,x=null,v=null,A=null,E=null,R=new Zt(0,0,0),P=0,M=!1,w=null,I=null,D=null,F=null,G=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,z=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(et)[1]),V=z>=1):et.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),V=z>=2);let ft=null,lt={};const ht=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),Ut=new Ae().fromArray(ht),ee=new Ae().fromArray(zt);function se(O,gt,ot,vt){const st=new Uint8Array(4),K=i.createTexture();i.bindTexture(O,K),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ct=0;ct<ot;ct++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(gt+ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return K}const J={};J[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(Xi),tt(!1),mt(Xo),nt(i.CULL_FACE),j(Gn);function nt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function yt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Nt(O,gt){return u[O]!==gt?(i.bindFramebuffer(O,gt),u[O]=gt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=gt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function St(O,gt){let ot=p,vt=!1;if(O){ot=d.get(gt),ot===void 0&&(ot=[],d.set(gt,ot));const st=O.textures;if(ot.length!==st.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let K=0,ct=st.length;K<ct;K++)ot[K]=i.COLOR_ATTACHMENT0+K;ot.length=st.length,vt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,vt=!0);vt&&i.drawBuffers(ot)}function Vt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const le={[mi]:i.FUNC_ADD,[oh]:i.FUNC_SUBTRACT,[lh]:i.FUNC_REVERSE_SUBTRACT};le[ch]=i.MIN,le[hh]=i.MAX;const qt={[uh]:i.ZERO,[dh]:i.ONE,[fh]:i.SRC_COLOR,[ga]:i.SRC_ALPHA,[vh]:i.SRC_ALPHA_SATURATE,[_h]:i.DST_COLOR,[mh]:i.DST_ALPHA,[ph]:i.ONE_MINUS_SRC_COLOR,[_a]:i.ONE_MINUS_SRC_ALPHA,[xh]:i.ONE_MINUS_DST_COLOR,[gh]:i.ONE_MINUS_DST_ALPHA,[Mh]:i.CONSTANT_COLOR,[yh]:i.ONE_MINUS_CONSTANT_COLOR,[Sh]:i.CONSTANT_ALPHA,[wh]:i.ONE_MINUS_CONSTANT_ALPHA};function j(O,gt,ot,vt,st,K,ct,Wt,ce,re){if(O===Gn){y===!0&&(yt(i.BLEND),y=!1);return}if(y===!1&&(nt(i.BLEND),y=!0),O!==ah){if(O!==f||re!==M){if((m!==mi||v!==mi)&&(i.blendEquation(i.FUNC_ADD),m=mi,v=mi),re)switch(O){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $o:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ie("WebGLState: Invalid blending: ",O);break}else switch(O){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qo:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $o:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",O);break}S=null,x=null,A=null,E=null,R.set(0,0,0),P=0,f=O,M=re}return}st=st||gt,K=K||ot,ct=ct||vt,(gt!==m||st!==v)&&(i.blendEquationSeparate(le[gt],le[st]),m=gt,v=st),(ot!==S||vt!==x||K!==A||ct!==E)&&(i.blendFuncSeparate(qt[ot],qt[vt],qt[K],qt[ct]),S=ot,x=vt,A=K,E=ct),(Wt.equals(R)===!1||ce!==P)&&(i.blendColor(Wt.r,Wt.g,Wt.b,ce),R.copy(Wt),P=ce),f=O,M=!1}function rt(O,gt){O.side===Le?yt(i.CULL_FACE):nt(i.CULL_FACE);let ot=O.side===en;gt&&(ot=!ot),tt(ot),O.blending===Hi&&O.transparent===!1?j(Gn):j(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const vt=O.stencilWrite;o.setTest(vt),vt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Dt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(O){w!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),w=O)}function mt(O){O!==sh?(nt(i.CULL_FACE),O!==I&&(O===Xo?i.cullFace(i.BACK):O===rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),I=O}function L(O){O!==D&&(V&&i.lineWidth(O),D=O)}function Dt(O,gt,ot){O?(nt(i.POLYGON_OFFSET_FILL),(F!==gt||G!==ot)&&(i.polygonOffset(gt,ot),F=gt,G=ot)):yt(i.POLYGON_OFFSET_FILL)}function wt(O){O?nt(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function kt(O){O===void 0&&(O=i.TEXTURE0+H-1),ft!==O&&(i.activeTexture(O),ft=O)}function at(O,gt,ot){ot===void 0&&(ft===null?ot=i.TEXTURE0+H-1:ot=ft);let vt=lt[ot];vt===void 0&&(vt={type:void 0,texture:void 0},lt[ot]=vt),(vt.type!==O||vt.texture!==gt)&&(ft!==ot&&(i.activeTexture(ot),ft=ot),i.bindTexture(O,gt||J[O]),vt.type=O,vt.texture=gt)}function C(){const O=lt[ft];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function q(){try{i.texSubImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function Q(){try{i.texSubImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function ut(){try{i.texStorage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function Et(){try{i.texStorage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function Ft(){try{i.texImage2D(...arguments)}catch(O){ie("WebGLState:",O)}}function it(){try{i.texImage3D(...arguments)}catch(O){ie("WebGLState:",O)}}function dt(O){Ut.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ut.copy(O))}function bt(O){ee.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function Ct(O,gt){let ot=c.get(gt);ot===void 0&&(ot=new WeakMap,c.set(gt,ot));let vt=ot.get(O);vt===void 0&&(vt=i.getUniformBlockIndex(gt,O.name),ot.set(O,vt))}function pt(O,gt){const vt=c.get(gt).get(O);l.get(gt)!==vt&&(i.uniformBlockBinding(gt,vt,O.__bindingPointIndex),l.set(gt,vt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ft=null,lt={},u={},d=new WeakMap,p=[],g=null,y=!1,f=null,m=null,S=null,x=null,v=null,A=null,E=null,R=new Zt(0,0,0),P=0,M=!1,w=null,I=null,D=null,F=null,G=null,Ut.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:yt,bindFramebuffer:Nt,drawBuffers:St,useProgram:Vt,setBlending:j,setMaterial:rt,setFlipSided:tt,setCullFace:mt,setLineWidth:L,setPolygonOffset:Dt,setScissorTest:wt,activeTexture:kt,bindTexture:at,unbindTexture:C,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:Ft,texImage3D:it,updateUBOMapping:Ct,uniformBlockBinding:pt,texStorage2D:ut,texStorage3D:Et,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:Rt,scissor:dt,viewport:bt,reset:Yt}}function eg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Y,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,_){return p?new OffscreenCanvas(C,_):Mr("canvas")}function y(C,_,N){let q=1;const Q=at(C);if((Q.width>N||Q.height>N)&&(q=N/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(q*Q.width),Rt=Math.floor(q*Q.height);u===void 0&&(u=g($,Rt));const ut=_?g($,Rt):u;return ut.width=$,ut.height=Rt,ut.getContext("2d").drawImage(C,0,0,$,Rt),$t("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Rt+")."),ut}else return"data"in C&&$t("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function f(C){return C.generateMipmaps}function m(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,_,N,q,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=_;if(_===i.RED&&(N===i.FLOAT&&($=i.R32F),N===i.HALF_FLOAT&&($=i.R16F),N===i.UNSIGNED_BYTE&&($=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&($=i.R8UI),N===i.UNSIGNED_SHORT&&($=i.R16UI),N===i.UNSIGNED_INT&&($=i.R32UI),N===i.BYTE&&($=i.R8I),N===i.SHORT&&($=i.R16I),N===i.INT&&($=i.R32I)),_===i.RG&&(N===i.FLOAT&&($=i.RG32F),N===i.HALF_FLOAT&&($=i.RG16F),N===i.UNSIGNED_BYTE&&($=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&($=i.RG8UI),N===i.UNSIGNED_SHORT&&($=i.RG16UI),N===i.UNSIGNED_INT&&($=i.RG32UI),N===i.BYTE&&($=i.RG8I),N===i.SHORT&&($=i.RG16I),N===i.INT&&($=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&($=i.RGB8UI),N===i.UNSIGNED_SHORT&&($=i.RGB16UI),N===i.UNSIGNED_INT&&($=i.RGB32UI),N===i.BYTE&&($=i.RGB8I),N===i.SHORT&&($=i.RGB16I),N===i.INT&&($=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&($=i.RGBA8UI),N===i.UNSIGNED_SHORT&&($=i.RGBA16UI),N===i.UNSIGNED_INT&&($=i.RGBA32UI),N===i.BYTE&&($=i.RGBA8I),N===i.SHORT&&($=i.RGBA16I),N===i.INT&&($=i.RGBA32I)),_===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),_===i.RGBA){const Rt=Q?xr:ae.getTransfer(q);N===i.FLOAT&&($=i.RGBA32F),N===i.HALF_FLOAT&&($=i.RGBA16F),N===i.UNSIGNED_BYTE&&($=Rt===me?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(C,_){let N;return C?_===null||_===Un||_===Ts?N=i.DEPTH24_STENCIL8:_===Sn?N=i.DEPTH32F_STENCIL8:_===Es&&(N=i.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Un||_===Ts?N=i.DEPTH_COMPONENT24:_===Sn?N=i.DEPTH_COMPONENT32F:_===Es&&(N=i.DEPTH_COMPONENT16),N}function A(C,_){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Be&&C.minFilter!==Ve?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function E(C){const _=C.target;_.removeEventListener("dispose",E),P(_),_.isVideoTexture&&h.delete(_)}function R(C){const _=C.target;_.removeEventListener("dispose",R),w(_)}function P(C){const _=n.get(C);if(_.__webglInit===void 0)return;const N=C.source,q=d.get(N);if(q){const Q=q[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(C),Object.keys(q).length===0&&d.delete(N)}n.remove(C)}function M(C){const _=n.get(C);i.deleteTexture(_.__webglTexture);const N=C.source,q=d.get(N);delete q[_.__cacheKey],a.memory.textures--}function w(C){const _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let Q=0;Q<_.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=C.textures;for(let q=0,Q=N.length;q<Q;q++){const $=n.get(N[q]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(N[q])}n.remove(C)}let I=0;function D(){I=0}function F(){const C=I;return C>=s.maxTextures&&$t("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function G(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function H(C,_){const N=n.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const q=C.image;if(q===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{J(N,C,_);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function V(C,_){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){J(N,C,_);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function z(C,_){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){J(N,C,_);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function et(C,_){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){nt(N,C,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const ft={[bs]:i.REPEAT,[Oe]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},lt={[Be]:i.NEAREST,[Th]:i.NEAREST_MIPMAP_NEAREST,[zs]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},ht={[Ch]:i.NEVER,[Uh]:i.ALWAYS,[Ph]:i.LESS,[To]:i.LEQUAL,[Lh]:i.EQUAL,[Ao]:i.GEQUAL,[Ih]:i.GREATER,[Dh]:i.NOTEQUAL};function zt(C,_){if(_.type===Sn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ve||_.magFilter===Ur||_.magFilter===zs||_.magFilter===_i||_.minFilter===Ve||_.minFilter===Ur||_.minFilter===zs||_.minFilter===_i)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ft[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ft[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ft[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,lt[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,lt[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ht[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Be||_.minFilter!==zs&&_.minFilter!==_i||_.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ut(C,_){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",E));const q=_.source;let Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));const $=G(_);if($!==C.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Q[$].usedTimes++;const Rt=Q[C.__cacheKey];Rt!==void 0&&(Q[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&M(_)),C.__cacheKey=$,C.__webglTexture=Q[$].texture}return N}function ee(C,_,N){return Math.floor(Math.floor(C/N)/_)}function se(C,_,N,q){const $=C.updateRanges;if($.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,N,q,_.data);else{$.sort((it,dt)=>it.start-dt.start);let Rt=0;for(let it=1;it<$.length;it++){const dt=$[Rt],bt=$[it],Ct=dt.start+dt.count,pt=ee(bt.start,_.width,4),Yt=ee(dt.start,_.width,4);bt.start<=Ct+1&&pt===Yt&&ee(bt.start+bt.count-1,_.width,4)===pt?dt.count=Math.max(dt.count,bt.start+bt.count-dt.start):(++Rt,$[Rt]=bt)}$.length=Rt+1;const ut=i.getParameter(i.UNPACK_ROW_LENGTH),Et=i.getParameter(i.UNPACK_SKIP_PIXELS),Ft=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let it=0,dt=$.length;it<dt;it++){const bt=$[it],Ct=Math.floor(bt.start/4),pt=Math.ceil(bt.count/4),Yt=Ct%_.width,O=Math.floor(Ct/_.width),gt=pt,ot=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Yt,O,gt,ot,N,q,_.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ut),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ft)}}function J(C,_,N){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const Q=Ut(C,_),$=_.source;e.bindTexture(q,C.__webglTexture,i.TEXTURE0+N);const Rt=n.get($);if($.version!==Rt.__version||Q===!0){e.activeTexture(i.TEXTURE0+N);const ut=ae.getPrimaries(ae.workingColorSpace),Et=_.colorSpace===ni?null:ae.getPrimaries(_.colorSpace),Ft=_.colorSpace===ni||ut===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let it=y(_.image,!1,s.maxTextureSize);it=kt(_,it);const dt=r.convert(_.format,_.colorSpace),bt=r.convert(_.type);let Ct=x(_.internalFormat,dt,bt,_.colorSpace,_.isVideoTexture);zt(q,_);let pt;const Yt=_.mipmaps,O=_.isVideoTexture!==!0,gt=Rt.__version===void 0||Q===!0,ot=$.dataReady,vt=A(_,it);if(_.isDepthTexture)Ct=v(_.format===xi,_.type),gt&&(O?e.texStorage2D(i.TEXTURE_2D,1,Ct,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Ct,it.width,it.height,0,dt,bt,null));else if(_.isDataTexture)if(Yt.length>0){O&&gt&&e.texStorage2D(i.TEXTURE_2D,vt,Ct,Yt[0].width,Yt[0].height);for(let st=0,K=Yt.length;st<K;st++)pt=Yt[st],O?ot&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,pt.width,pt.height,dt,bt,pt.data):e.texImage2D(i.TEXTURE_2D,st,Ct,pt.width,pt.height,0,dt,bt,pt.data);_.generateMipmaps=!1}else O?(gt&&e.texStorage2D(i.TEXTURE_2D,vt,Ct,it.width,it.height),ot&&se(_,it,dt,bt)):e.texImage2D(i.TEXTURE_2D,0,Ct,it.width,it.height,0,dt,bt,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){O&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ct,Yt[0].width,Yt[0].height,it.depth);for(let st=0,K=Yt.length;st<K;st++)if(pt=Yt[st],_.format!==wn)if(dt!==null)if(O){if(ot)if(_.layerUpdates.size>0){const ct=Al(pt.width,pt.height,_.format,_.type);for(const Wt of _.layerUpdates){const ce=pt.data.subarray(Wt*ct/pt.data.BYTES_PER_ELEMENT,(Wt+1)*ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Wt,pt.width,pt.height,1,dt,ce)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,it.depth,dt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Ct,pt.width,pt.height,it.depth,0,pt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ot&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,pt.width,pt.height,it.depth,dt,bt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Ct,pt.width,pt.height,it.depth,0,dt,bt,pt.data)}else{O&&gt&&e.texStorage2D(i.TEXTURE_2D,vt,Ct,Yt[0].width,Yt[0].height);for(let st=0,K=Yt.length;st<K;st++)pt=Yt[st],_.format!==wn?dt!==null?O?ot&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Ct,pt.width,pt.height,0,pt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ot&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,pt.width,pt.height,dt,bt,pt.data):e.texImage2D(i.TEXTURE_2D,st,Ct,pt.width,pt.height,0,dt,bt,pt.data)}else if(_.isDataArrayTexture)if(O){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ct,it.width,it.height,it.depth),ot)if(_.layerUpdates.size>0){const st=Al(it.width,it.height,_.format,_.type);for(const K of _.layerUpdates){const ct=it.data.subarray(K*st/it.data.BYTES_PER_ELEMENT,(K+1)*st/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,dt,bt,ct)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,dt,bt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,it.width,it.height,it.depth,0,dt,bt,it.data);else if(_.isData3DTexture)O?(gt&&e.texStorage3D(i.TEXTURE_3D,vt,Ct,it.width,it.height,it.depth),ot&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,dt,bt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,it.width,it.height,it.depth,0,dt,bt,it.data);else if(_.isFramebufferTexture){if(gt)if(O)e.texStorage2D(i.TEXTURE_2D,vt,Ct,it.width,it.height);else{let st=it.width,K=it.height;for(let ct=0;ct<vt;ct++)e.texImage2D(i.TEXTURE_2D,ct,Ct,st,K,0,dt,bt,null),st>>=1,K>>=1}}else if(Yt.length>0){if(O&&gt){const st=at(Yt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Ct,st.width,st.height)}for(let st=0,K=Yt.length;st<K;st++)pt=Yt[st],O?ot&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,dt,bt,pt):e.texImage2D(i.TEXTURE_2D,st,Ct,dt,bt,pt);_.generateMipmaps=!1}else if(O){if(gt){const st=at(it);e.texStorage2D(i.TEXTURE_2D,vt,Ct,st.width,st.height)}ot&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,bt,it)}else e.texImage2D(i.TEXTURE_2D,0,Ct,dt,bt,it);f(_)&&m(q),Rt.__version=$.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function nt(C,_,N){if(_.image.length!==6)return;const q=Ut(C,_),Q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+N);const $=n.get(Q);if(Q.version!==$.__version||q===!0){e.activeTexture(i.TEXTURE0+N);const Rt=ae.getPrimaries(ae.workingColorSpace),ut=_.colorSpace===ni?null:ae.getPrimaries(_.colorSpace),Et=_.colorSpace===ni||Rt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Ft=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!Ft&&!it?dt[K]=y(_.image[K],!0,s.maxCubemapSize):dt[K]=it?_.image[K].image:_.image[K],dt[K]=kt(_,dt[K]);const bt=dt[0],Ct=r.convert(_.format,_.colorSpace),pt=r.convert(_.type),Yt=x(_.internalFormat,Ct,pt,_.colorSpace),O=_.isVideoTexture!==!0,gt=$.__version===void 0||q===!0,ot=Q.dataReady;let vt=A(_,bt);zt(i.TEXTURE_CUBE_MAP,_);let st;if(Ft){O&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Yt,bt.width,bt.height);for(let K=0;K<6;K++){st=dt[K].mipmaps;for(let ct=0;ct<st.length;ct++){const Wt=st[ct];_.format!==wn?Ct!==null?O?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,Wt.width,Wt.height,Ct,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Yt,Wt.width,Wt.height,0,Wt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,Wt.width,Wt.height,Ct,pt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Yt,Wt.width,Wt.height,0,Ct,pt,Wt.data)}}}else{if(st=_.mipmaps,O&&gt){st.length>0&&vt++;const K=at(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Yt,K.width,K.height)}for(let K=0;K<6;K++)if(it){O?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,Ct,pt,dt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,dt[K].width,dt[K].height,0,Ct,pt,dt[K].data);for(let ct=0;ct<st.length;ct++){const ce=st[ct].image[K].image;O?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,ce.width,ce.height,Ct,pt,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Yt,ce.width,ce.height,0,Ct,pt,ce.data)}}else{O?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,pt,dt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,Ct,pt,dt[K]);for(let ct=0;ct<st.length;ct++){const Wt=st[ct];O?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,Ct,pt,Wt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Yt,Ct,pt,Wt.image[K])}}}f(_)&&m(i.TEXTURE_CUBE_MAP),$.__version=Q.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function yt(C,_,N,q,Q,$){const Rt=r.convert(N.format,N.colorSpace),ut=r.convert(N.type),Et=x(N.internalFormat,Rt,ut,N.colorSpace),Ft=n.get(_),it=n.get(N);if(it.__renderTarget=_,!Ft.__hasExternalTextures){const dt=Math.max(1,_.width>>$),bt=Math.max(1,_.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,Et,dt,bt,_.depth,0,Rt,ut,null):e.texImage2D(Q,$,Et,dt,bt,0,Rt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,it.__webglTexture,0,L(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,it.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(C,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){const q=_.depthTexture,Q=q&&q.isDepthTexture?q.type:null,$=v(_.stencilBuffer,Q),Rt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Dt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(_),$,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(_),$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,C)}else{const q=_.textures;for(let Q=0;Q<q.length;Q++){const $=q[Q],Rt=r.convert($.format,$.colorSpace),ut=r.convert($.type),Et=x($.internalFormat,Rt,ut,$.colorSpace);Dt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(_),Et,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(_),Et,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Et,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(C,_,N){const q=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",E)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),zt(i.TEXTURE_CUBE_MAP,_.depthTexture);const Ft=r.convert(_.depthTexture.format),it=r.convert(_.depthTexture.type);let dt;_.depthTexture.format===$n?dt=i.DEPTH_COMPONENT24:_.depthTexture.format===xi&&(dt=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,dt,_.width,_.height,0,Ft,it,null)}}else H(_.depthTexture,0);const $=Q.__webglTexture,Rt=L(_),ut=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Et=_.depthTexture.format===xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===$n)Dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Et,ut,$,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,Et,ut,$,0);else if(_.depthTexture.format===xi)Dt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Et,ut,$,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,Et,ut,$,0);else throw new Error("Unknown depthTexture format")}function Vt(C){const _=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=q}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)St(_.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?St(_.__webglFramebuffer[0],C,0):St(_.__webglFramebuffer,C,0)}else if(N){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),Nt(_.__webglDepthbuffer[q],C,!1);else{const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Nt(_.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function le(C,_,N){const q=n.get(C);_!==void 0&&yt(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Vt(C)}function qt(C){const _=C.texture,N=n.get(C),q=n.get(_);C.addEventListener("dispose",R);const Q=C.textures,$=C.isWebGLCubeRenderTarget===!0,Rt=Q.length>1;if(Rt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,a.memory.textures++),$){N.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ut]=[];for(let Et=0;Et<_.mipmaps.length;Et++)N.__webglFramebuffer[ut][Et]=i.createFramebuffer()}else N.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ut=0;ut<_.mipmaps.length;ut++)N.__webglFramebuffer[ut]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let ut=0,Et=Q.length;ut<Et;ut++){const Ft=n.get(Q[ut]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Dt(C)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ut=0;ut<Q.length;ut++){const Et=Q[ut];N.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ut]);const Ft=r.convert(Et.format,Et.colorSpace),it=r.convert(Et.type),dt=x(Et.internalFormat,Ft,it,Et.colorSpace,C.isXRRenderTarget===!0),bt=L(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,dt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,N.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(N.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),zt(i.TEXTURE_CUBE_MAP,_);for(let ut=0;ut<6;ut++)if(_.mipmaps&&_.mipmaps.length>0)for(let Et=0;Et<_.mipmaps.length;Et++)yt(N.__webglFramebuffer[ut][Et],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Et);else yt(N.__webglFramebuffer[ut],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);f(_)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ut=0,Et=Q.length;ut<Et;ut++){const Ft=Q[ut],it=n.get(Ft);let dt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,it.__webglTexture),zt(dt,Ft),yt(N.__webglFramebuffer,C,Ft,i.COLOR_ATTACHMENT0+ut,dt,0),f(Ft)&&m(dt)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,q.__webglTexture),zt(ut,_),_.mipmaps&&_.mipmaps.length>0)for(let Et=0;Et<_.mipmaps.length;Et++)yt(N.__webglFramebuffer[Et],C,_,i.COLOR_ATTACHMENT0,ut,Et);else yt(N.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,ut,0);f(_)&&m(ut),e.unbindTexture()}C.depthBuffer&&Vt(C)}function j(C){const _=C.textures;for(let N=0,q=_.length;N<q;N++){const Q=_[N];if(f(Q)){const $=S(C),Rt=n.get(Q).__webglTexture;e.bindTexture($,Rt),m($),e.unbindTexture()}}}const rt=[],tt=[];function mt(C){if(C.samples>0){if(Dt(C)===!1){const _=C.textures,N=C.width,q=C.height;let Q=i.COLOR_BUFFER_BIT;const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(C),ut=_.length>1;if(ut)for(let Ft=0;Ft<_.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const Et=C.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Ft=0;Ft<_.length;Ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ft]);const it=n.get(_[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,N,q,0,0,N,q,Q,i.NEAREST),l===!0&&(rt.length=0,tt.length=0,rt.push(i.COLOR_ATTACHMENT0+Ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(rt.push($),tt.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Ft=0;Ft<_.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ft]);const it=n.get(_[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,it,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function L(C){return Math.min(s.maxSamples,C.samples)}function Dt(C){const _=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function wt(C){const _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function kt(C,_){const N=C.colorSpace,q=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Yi&&N!==ni&&(ae.getTransfer(N)===me?(q!==wn||Q!==ln)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",N)),_}function at(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=z,this.setTextureCube=et,this.rebindTextures=le,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ng(i,t){function e(n,s=ni){let r;const a=ae.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uc)return i.BYTE;if(n===dc)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===mc)return i.ALPHA;if(n===gc)return i.RGB;if(n===wn)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===So)return i.RED;if(n===wo)return i.RED_INTEGER;if(n===$i)return i.RG;if(n===bo)return i.RG_INTEGER;if(n===Eo)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Pa||n===La)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===Da)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ua)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Na)return r.COMPRESSED_R11_EAC;if(n===Fa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Oa)return r.COMPRESSED_RG11_EAC;if(n===Ba)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===za||n===ka||n===Va||n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===$a||n===Ya||n===Za||n===Ja||n===Ka||n===ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===to||n===eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qa)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===no||n===io||n===so||n===ro)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===no)return r.COMPRESSED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===so)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sg=`
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

}`;class rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ic(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Nn({vertexShader:ig,fragmentShader:sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ag extends es{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",f=new rg,m={},S=e.getContextAttributes();let x=null,v=null;const A=[],E=[],R=new Y;let P=null;const M=new fn;M.viewport=new Ae;const w=new fn;w.viewport=new Ae;const I=[M,w],D=new pd;let F=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=A[J];return nt===void 0&&(nt=new ea,A[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=A[J];return nt===void 0&&(nt=new ea,A[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=A[J];return nt===void 0&&(nt=new ea,A[J]=nt),nt.getHandSpace()};function H(J){const nt=E.indexOf(J.inputSource);if(nt===-1)return;const yt=A[nt];yt!==void 0&&(yt.update(J.inputSource,J.frame,c||a),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",z);for(let J=0;J<A.length;J++){const nt=E[J];nt!==null&&(E[J]=null,A[J].disconnect(nt))}F=null,G=null,f.reset();for(const J in m)delete m[J];t.setRenderTarget(x),p=null,d=null,u=null,s=null,v=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",V),s.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Nt=null,St=null;S.depth&&(St=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=S.stencil?xi:$n,Nt=S.stencil?Ts:Un);const Vt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Dn(d.textureWidth,d.textureHeight,{format:wn,type:ln,depthTexture:new Cs(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Dn(p.framebufferWidth,p.framebufferHeight,{format:wn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function z(J){for(let nt=0;nt<J.removed.length;nt++){const yt=J.removed[nt],Nt=E.indexOf(yt);Nt>=0&&(E[Nt]=null,A[Nt].disconnect(yt))}for(let nt=0;nt<J.added.length;nt++){const yt=J.added[nt];let Nt=E.indexOf(yt);if(Nt===-1){for(let Vt=0;Vt<A.length;Vt++)if(Vt>=E.length){E.push(yt),Nt=Vt;break}else if(E[Vt]===null){E[Vt]=yt,Nt=Vt;break}if(Nt===-1)break}const St=A[Nt];St&&St.connect(yt)}}const et=new b,ft=new b;function lt(J,nt,yt){et.setFromMatrixPosition(nt.matrixWorld),ft.setFromMatrixPosition(yt.matrixWorld);const Nt=et.distanceTo(ft),St=nt.projectionMatrix.elements,Vt=yt.projectionMatrix.elements,le=St[14]/(St[10]-1),qt=St[14]/(St[10]+1),j=(St[9]+1)/St[5],rt=(St[9]-1)/St[5],tt=(St[8]-1)/St[0],mt=(Vt[8]+1)/Vt[0],L=le*tt,Dt=le*mt,wt=Nt/(-tt+mt),kt=wt*-tt;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(kt),J.translateZ(wt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),St[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const at=le+wt,C=qt+wt,_=L-kt,N=Dt+(Nt-kt),q=j*qt/C*at,Q=rt*qt/C*at;J.projectionMatrix.makePerspective(_,N,q,Q,at,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ht(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let nt=J.near,yt=J.far;f.texture!==null&&(f.depthNear>0&&(nt=f.depthNear),f.depthFar>0&&(yt=f.depthFar)),D.near=w.near=M.near=nt,D.far=w.far=M.far=yt,(F!==D.near||G!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,G=D.far),D.layers.mask=J.layers.mask|6,M.layers.mask=D.layers.mask&3,w.layers.mask=D.layers.mask&5;const Nt=J.parent,St=D.cameras;ht(D,Nt);for(let Vt=0;Vt<St.length;Vt++)ht(St[Vt],Nt);St.length===2?lt(D,M,w):D.projectionMatrix.copy(M.projectionMatrix),zt(J,D,Nt)};function zt(J,nt,yt){yt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Rs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(D)},this.getCameraTexture=function(J){return m[J]};let Ut=null;function ee(J,nt){if(h=nt.getViewerPose(c||a),g=nt,h!==null){const yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Nt=!1;yt.length!==D.cameras.length&&(D.cameras.length=0,Nt=!0);for(let qt=0;qt<yt.length;qt++){const j=yt[qt];let rt=null;if(p!==null)rt=p.getViewport(j);else{const mt=u.getViewSubImage(d,j);rt=mt.viewport,qt===0&&(t.setRenderTargetTextures(v,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(v))}let tt=I[qt];tt===void 0&&(tt=new fn,tt.layers.enable(qt),tt.viewport=new Ae,I[qt]=tt),tt.matrix.fromArray(j.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(j.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(rt.x,rt.y,rt.width,rt.height),qt===0&&(D.matrix.copy(tt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Nt===!0&&D.cameras.push(tt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();const qt=u.getDepthInformation(yt[0]);qt&&qt.isValid&&qt.texture&&f.init(qt,s.renderState)}if(St&&St.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let qt=0;qt<yt.length;qt++){const j=yt[qt].camera;if(j){let rt=m[j];rt||(rt=new Ic,m[j]=rt);const tt=u.getCameraImage(j);rt.sourceTexture=tt}}}}for(let yt=0;yt<A.length;yt++){const Nt=E[yt],St=A[yt];Nt!==null&&St!==void 0&&St.update(Nt,nt,c||a)}Ut&&Ut(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const se=new Gc;se.setAnimationLoop(ee),this.setAnimationLoop=function(J){Ut=J},this.dispose=function(){}}}const ui=new qe,og=new oe;function lg(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,bc(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,S,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(f,m):m.isMeshToonMaterial?(r(f,m),u(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,v)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),y(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,S,x):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===en&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===en&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const S=t.get(m),x=S.envMap,v=S.envMapRotation;x&&(f.envMap.value=x,ui.copy(v),ui.x*=-1,ui.y*=-1,ui.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),f.envMapRotation.value.setFromMatrix4(og.makeRotationFromEuler(ui)),f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,S,x){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*S,f.scale.value=x*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,S){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function y(f,m){const S=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function c(S,x){let v=s[S.id];v===void 0&&(g(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",f));const A=x.program;n.updateUBOMapping(S,A);const E=t.render.frame;r[S.id]!==E&&(d(S),r[S.id]=E)}function h(S){const x=u();S.__bindingPointIndex=x;const v=i.createBuffer(),A=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=s[S.id],v=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,R=v.length;E<R;E++){const P=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,w=P.length;M<w;M++){const I=P[M];if(p(I,E,M,A)===!0){const D=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let H=0;H<F.length;H++){const V=F[H],z=y(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,D+G,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,G),G+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,x,v,A){const E=S.value,R=x+"_"+v;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:A[R]=E.clone(),!0;{const P=A[R];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return A[R]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(S){const x=S.uniforms;let v=0;const A=16;for(let R=0,P=x.length;R<P;R++){const M=Array.isArray(x[R])?x[R]:[x[R]];for(let w=0,I=M.length;w<I;w++){const D=M[w],F=Array.isArray(D.value)?D.value:[D.value];for(let G=0,H=F.length;G<H;G++){const V=F[G],z=y(V),et=v%A,ft=et%z.boundary,lt=et+ft;v+=ft,lt!==0&&A-lt<z.storage&&(v+=A-lt),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=z.storage}}}const E=v%A;return E>0&&(v+=A-E),S.__size=v,S.__cache={},this}function y(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$t("WebGLRenderer: Unsupported uniform value type.",S),x}function f(S){const x=S.target;x.removeEventListener("dispose",f);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}const hg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function ug(){return bn===null&&(bn=new Pc(hg,16,16,$i,qn),bn.name="DFG_LUT",bn.minFilter=Ve,bn.magFilter=Ve,bn.wrapS=Oe,bn.wrapT=Oe,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class dg{constructor(t={}){const{canvas:e=Nh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=ln}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const y=p,f=new Set([Eo,bo,wo]),m=new Set([ln,Un,Es,Ts,Mo,yo]),S=new Uint32Array(4),x=new Int32Array(4);let v=null,A=null;const E=[],R=[];let P=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=je;let I=0,D=0,F=null,G=-1,H=null;const V=new Ae,z=new Ae;let et=null;const ft=new Zt(0);let lt=0,ht=e.width,zt=e.height,Ut=1,ee=null,se=null;const J=new Ae(0,0,ht,zt),nt=new Ae(0,0,ht,zt);let yt=!1;const Nt=new Lo;let St=!1,Vt=!1;const le=new oe,qt=new b,j=new Ae,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function mt(){return F===null?Ut:1}let L=n;function Dt(T,B){return e.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_o}`),e.addEventListener("webglcontextlost",Wt,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",re,!1),L===null){const B="webgl2";if(L=Dt(B,T),L===null)throw Dt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw ie("WebGLRenderer: "+T.message),T}let wt,kt,at,C,_,N,q,Q,$,Rt,ut,Et,Ft,it,dt,bt,Ct,pt,Yt,O,gt,ot,vt,st;function K(){wt=new um(L),wt.init(),ot=new ng(L,wt),kt=new nm(L,wt,t,ot),at=new tg(L,wt),kt.reversedDepthBuffer&&d&&at.buffers.depth.setReversed(!0),C=new pm(L),_=new z0,N=new eg(L,wt,at,_,kt,ot,C),q=new sm(M),Q=new hm(M),$=new _d(L),vt=new tm(L,$),Rt=new dm(L,$,C,vt),ut=new gm(L,Rt,$,C),Yt=new mm(L,kt,N),bt=new im(_),Et=new B0(M,q,Q,wt,kt,vt,bt),Ft=new lg(M,_),it=new V0,dt=new $0(wt),pt=new Qp(M,q,Q,at,ut,g,l),Ct=new j0(M,ut,kt),st=new cg(L,C,kt,at),O=new em(L,wt,C),gt=new fm(L,wt,C),C.programs=Et.programs,M.capabilities=kt,M.extensions=wt,M.properties=_,M.renderLists=it,M.shadowMap=Ct,M.state=at,M.info=C}K(),y!==ln&&(P=new xm(y,e.width,e.height,s,r));const ct=new ag(M,L);this.xr=ct,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=wt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=wt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(T){T!==void 0&&(Ut=T,this.setSize(ht,zt,!1))},this.getSize=function(T){return T.set(ht,zt)},this.setSize=function(T,B,X=!0){if(ct.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=T,zt=B,e.width=Math.floor(T*Ut),e.height=Math.floor(B*Ut),X===!0&&(e.style.width=T+"px",e.style.height=B+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(ht*Ut,zt*Ut).floor()},this.setDrawingBufferSize=function(T,B,X){ht=T,zt=B,Ut=X,e.width=Math.floor(T*X),e.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(y===ln){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(V)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,B,X,W){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,B,X,W),at.viewport(V.copy(J).multiplyScalar(Ut).round())},this.getScissor=function(T){return T.copy(nt)},this.setScissor=function(T,B,X,W){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,B,X,W),at.scissor(z.copy(nt).multiplyScalar(Ut).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(T){at.setScissorTest(yt=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){se=T},this.getClearColor=function(T){return T.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor(...arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,X=!0){let W=0;if(T){let k=!1;if(F!==null){const _t=F.texture.format;k=f.has(_t)}if(k){const _t=F.texture.type,At=m.has(_t),Mt=pt.getClearColor(),Pt=pt.getClearAlpha(),It=Mt.r,Xt=Mt.g,Ht=Mt.b;At?(S[0]=It,S[1]=Xt,S[2]=Ht,S[3]=Pt,L.clearBufferuiv(L.COLOR,0,S)):(x[0]=It,x[1]=Xt,x[2]=Ht,x[3]=Pt,L.clearBufferiv(L.COLOR,0,x))}else W|=L.COLOR_BUFFER_BIT}B&&(W|=L.DEPTH_BUFFER_BIT),X&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",re,!1),pt.dispose(),it.dispose(),dt.dispose(),_.dispose(),q.dispose(),Q.dispose(),ut.dispose(),vt.dispose(),st.dispose(),Et.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",ne),ct.removeEventListener("sessionend",ye),Se.stop()};function Wt(T){T.preventDefault(),yr("WebGLRenderer: Context Lost."),w=!0}function ce(){yr("WebGLRenderer: Context Restored."),w=!1;const T=C.autoReset,B=Ct.enabled,X=Ct.autoUpdate,W=Ct.needsUpdate,k=Ct.type;K(),C.autoReset=T,Ct.enabled=B,Ct.autoUpdate=X,Ct.needsUpdate=W,Ct.type=k}function re(T){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function nn(T){const B=T.target;B.removeEventListener("dispose",nn),ve(B)}function ve(T){Fs(T),_.remove(T)}function Fs(T){const B=_.get(T).programs;B!==void 0&&(B.forEach(function(X){Et.releaseProgram(X)}),T.isShaderMaterial&&Et.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,W,k,_t){B===null&&(B=rt);const At=k.isMesh&&k.matrixWorld.determinant()<0,Mt=Jc(T,B,X,W,k);at.setMaterial(W,At);let Pt=X.index,It=1;if(W.wireframe===!0){if(Pt=Rt.getWireframeAttribute(X),Pt===void 0)return;It=2}const Xt=X.drawRange,Ht=X.attributes.position;let Qt=Xt.start*It,_e=(Xt.start+Xt.count)*It;_t!==null&&(Qt=Math.max(Qt,_t.start*It),_e=Math.min(_e,(_t.start+_t.count)*It)),Pt!==null?(Qt=Math.max(Qt,0),_e=Math.min(_e,Pt.count)):Ht!=null&&(Qt=Math.max(Qt,0),_e=Math.min(_e,Ht.count));const Ee=_e-Qt;if(Ee<0||Ee===1/0)return;vt.setup(k,W,Mt,X,Pt);let Te,xe=O;if(Pt!==null&&(Te=$.get(Pt),xe=gt,xe.setIndex(Te)),k.isMesh)W.wireframe===!0?(at.setLineWidth(W.wireframeLinewidth*mt()),xe.setMode(L.LINES)):xe.setMode(L.TRIANGLES);else if(k.isLine){let Gt=W.linewidth;Gt===void 0&&(Gt=1),at.setLineWidth(Gt*mt()),k.isLineSegments?xe.setMode(L.LINES):k.isLineLoop?xe.setMode(L.LINE_LOOP):xe.setMode(L.LINE_STRIP)}else k.isPoints?xe.setMode(L.POINTS):k.isSprite&&xe.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)As("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(wt.get("WEBGL_multi_draw"))xe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Gt=k._multiDrawStarts,pe=k._multiDrawCounts,he=k._multiDrawCount,sn=Pt?$.get(Pt).bytesPerElement:1,yi=_.get(W).currentProgram.getUniforms();for(let rn=0;rn<he;rn++)yi.setValue(L,"_gl_DrawID",rn),xe.render(Gt[rn]/sn,pe[rn])}else if(k.isInstancedMesh)xe.renderInstances(Qt,Ee,k.count);else if(X.isInstancedBufferGeometry){const Gt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,pe=Math.min(X.instanceCount,Gt);xe.renderInstances(Qt,Ee,pe)}else xe.render(Qt,Ee)};function ss(T,B,X){T.transparent===!0&&T.side===Le&&T.forceSinglePass===!1?(T.side=en,T.needsUpdate=!0,Bs(T,B,X),T.side=si,T.needsUpdate=!0,Bs(T,B,X),T.side=Le):Bs(T,B,X)}this.compile=function(T,B,X=null){X===null&&(X=T),A=dt.get(X),A.init(B),R.push(A),X.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),T!==X&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights();const W=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const _t=k.material;if(_t)if(Array.isArray(_t))for(let At=0;At<_t.length;At++){const Mt=_t[At];ss(Mt,X,k),W.add(Mt)}else ss(_t,X,k),W.add(_t)}),A=R.pop(),W},this.compileAsync=function(T,B,X=null){const W=this.compile(T,B,X);return new Promise(k=>{function _t(){if(W.forEach(function(At){_.get(At).currentProgram.isReady()&&W.delete(At)}),W.size===0){k(T);return}setTimeout(_t,10)}wt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Tt=null;function Lt(T){Tt&&Tt(T)}function ne(){Se.stop()}function ye(){Se.start()}const Se=new Gc;Se.setAnimationLoop(Lt),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(T){Tt=T,ct.setAnimationLoop(T),T===null?Se.stop():Se.start()},ct.addEventListener("sessionstart",ne),ct.addEventListener("sessionend",ye),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const X=ct.enabled===!0&&ct.isPresenting===!0,W=P!==null&&(F===null||X)&&P.begin(M,F);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(B),B=ct.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,B,F),A=dt.get(T,R.length),A.init(B),R.push(A),le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Nt.setFromProjectionMatrix(le,Pn,B.reversedDepth),Vt=this.localClippingEnabled,St=bt.init(this.clippingPlanes,Vt),v=it.get(T,E.length),v.init(),E.push(v),ct.enabled===!0&&ct.isPresenting===!0){const At=M.xr.getDepthSensingMesh();At!==null&&Ir(At,B,-1/0,M.sortObjects)}Ir(T,B,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(ee,se),tt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,tt&&pt.addToRenderList(v,T),this.info.render.frame++,St===!0&&bt.beginShadows();const k=A.state.shadowsArray;if(Ct.render(k,T,B),St===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&P.hasRenderPass())===!1){const At=v.opaque,Mt=v.transmissive;if(A.setupLights(),B.isArrayCamera){const Pt=B.cameras;if(Mt.length>0)for(let It=0,Xt=Pt.length;It<Xt;It++){const Ht=Pt[It];Vo(At,Mt,T,Ht)}tt&&pt.render(T);for(let It=0,Xt=Pt.length;It<Xt;It++){const Ht=Pt[It];ko(v,T,Ht,Ht.viewport)}}else Mt.length>0&&Vo(At,Mt,T,B),tt&&pt.render(T),ko(v,T,B)}F!==null&&D===0&&(N.updateMultisampleRenderTarget(F),N.updateRenderTargetMipmap(F)),W&&P.end(M),T.isScene===!0&&T.onAfterRender(M,T,B),vt.resetDefaultState(),G=-1,H=null,R.pop(),R.length>0?(A=R[R.length-1],St===!0&&bt.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function Ir(T,B,X,W){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Nt.intersectsSprite(T)){W&&j.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);const At=ut.update(T),Mt=T.material;Mt.visible&&v.push(T,At,Mt,X,j.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Nt.intersectsObject(T))){const At=ut.update(T),Mt=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),j.copy(T.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),j.copy(At.boundingSphere.center)),j.applyMatrix4(T.matrixWorld).applyMatrix4(le)),Array.isArray(Mt)){const Pt=At.groups;for(let It=0,Xt=Pt.length;It<Xt;It++){const Ht=Pt[It],Qt=Mt[Ht.materialIndex];Qt&&Qt.visible&&v.push(T,At,Qt,X,j.z,Ht)}}else Mt.visible&&v.push(T,At,Mt,X,j.z,null)}}const _t=T.children;for(let At=0,Mt=_t.length;At<Mt;At++)Ir(_t[At],B,X,W)}function ko(T,B,X,W){const{opaque:k,transmissive:_t,transparent:At}=T;A.setupLightsView(X),St===!0&&bt.setGlobalState(M.clippingPlanes,X),W&&at.viewport(V.copy(W)),k.length>0&&Os(k,B,X),_t.length>0&&Os(_t,B,X),At.length>0&&Os(At,B,X),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Vo(T,B,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){const Qt=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new Dn(1,1,{generateMipmaps:!0,type:Qt?qn:ln,minFilter:_i,samples:kt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const _t=A.state.transmissionRenderTarget[W.id],At=W.viewport||V;_t.setSize(At.z*M.transmissionResolutionScale,At.w*M.transmissionResolutionScale);const Mt=M.getRenderTarget(),Pt=M.getActiveCubeFace(),It=M.getActiveMipmapLevel();M.setRenderTarget(_t),M.getClearColor(ft),lt=M.getClearAlpha(),lt<1&&M.setClearColor(16777215,.5),M.clear(),tt&&pt.render(X);const Xt=M.toneMapping;M.toneMapping=Ln;const Ht=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),St===!0&&bt.setGlobalState(M.clippingPlanes,W),Os(T,X,W),N.updateMultisampleRenderTarget(_t),N.updateRenderTargetMipmap(_t),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let _e=0,Ee=B.length;_e<Ee;_e++){const Te=B[_e],{object:xe,geometry:Gt,material:pe,group:he}=Te;if(pe.side===Le&&xe.layers.test(W.layers)){const sn=pe.side;pe.side=en,pe.needsUpdate=!0,Ho(xe,X,W,Gt,pe,he),pe.side=sn,pe.needsUpdate=!0,Qt=!0}}Qt===!0&&(N.updateMultisampleRenderTarget(_t),N.updateRenderTargetMipmap(_t))}M.setRenderTarget(Mt,Pt,It),M.setClearColor(ft,lt),Ht!==void 0&&(W.viewport=Ht),M.toneMapping=Xt}function Os(T,B,X){const W=B.isScene===!0?B.overrideMaterial:null;for(let k=0,_t=T.length;k<_t;k++){const At=T[k],{object:Mt,geometry:Pt,group:It}=At;let Xt=At.material;Xt.allowOverride===!0&&W!==null&&(Xt=W),Mt.layers.test(X.layers)&&Ho(Mt,B,X,Pt,Xt,It)}}function Ho(T,B,X,W,k,_t){T.onBeforeRender(M,B,X,W,k,_t),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(M,B,X,W,T,_t),k.transparent===!0&&k.side===Le&&k.forceSinglePass===!1?(k.side=en,k.needsUpdate=!0,M.renderBufferDirect(X,B,W,k,T,_t),k.side=si,k.needsUpdate=!0,M.renderBufferDirect(X,B,W,k,T,_t),k.side=Le):M.renderBufferDirect(X,B,W,k,T,_t),T.onAfterRender(M,B,X,W,k,_t)}function Bs(T,B,X){B.isScene!==!0&&(B=rt);const W=_.get(T),k=A.state.lights,_t=A.state.shadowsArray,At=k.state.version,Mt=Et.getParameters(T,k.state,_t,B,X),Pt=Et.getProgramCacheKey(Mt);let It=W.programs;W.environment=T.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(T.isMeshStandardMaterial?Q:q).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,It===void 0&&(T.addEventListener("dispose",nn),It=new Map,W.programs=It);let Xt=It.get(Pt);if(Xt!==void 0){if(W.currentProgram===Xt&&W.lightsStateVersion===At)return Wo(T,Mt),Xt}else Mt.uniforms=Et.getUniforms(T),T.onBeforeCompile(Mt,M),Xt=Et.acquireProgram(Mt,Pt),It.set(Pt,Xt),W.uniforms=Mt.uniforms;const Ht=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ht.clippingPlanes=bt.uniform),Wo(T,Mt),W.needsLights=jc(T),W.lightsStateVersion=At,W.needsLights&&(Ht.ambientLightColor.value=k.state.ambient,Ht.lightProbe.value=k.state.probe,Ht.directionalLights.value=k.state.directional,Ht.directionalLightShadows.value=k.state.directionalShadow,Ht.spotLights.value=k.state.spot,Ht.spotLightShadows.value=k.state.spotShadow,Ht.rectAreaLights.value=k.state.rectArea,Ht.ltc_1.value=k.state.rectAreaLTC1,Ht.ltc_2.value=k.state.rectAreaLTC2,Ht.pointLights.value=k.state.point,Ht.pointLightShadows.value=k.state.pointShadow,Ht.hemisphereLights.value=k.state.hemi,Ht.directionalShadowMap.value=k.state.directionalShadowMap,Ht.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ht.spotShadowMap.value=k.state.spotShadowMap,Ht.spotLightMatrix.value=k.state.spotLightMatrix,Ht.spotLightMap.value=k.state.spotLightMap,Ht.pointShadowMap.value=k.state.pointShadowMap,Ht.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Xt,W.uniformsList=null,Xt}function Go(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=_r.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Wo(T,B){const X=_.get(T);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Jc(T,B,X,W,k){B.isScene!==!0&&(B=rt),N.resetTextureUnits();const _t=B.fog,At=W.isMeshStandardMaterial?B.environment:null,Mt=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Yi,Pt=(W.isMeshStandardMaterial?Q:q).get(W.envMap||At),It=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xt=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ht=!!X.morphAttributes.position,Qt=!!X.morphAttributes.normal,_e=!!X.morphAttributes.color;let Ee=Ln;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ee=M.toneMapping);const Te=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xe=Te!==void 0?Te.length:0,Gt=_.get(W),pe=A.state.lights;if(St===!0&&(Vt===!0||T!==H)){const Ge=T===H&&W.id===G;bt.setState(W,T,Ge)}let he=!1;W.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==pe.state.version||Gt.outputColorSpace!==Mt||k.isBatchedMesh&&Gt.batching===!1||!k.isBatchedMesh&&Gt.batching===!0||k.isBatchedMesh&&Gt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Gt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Gt.instancing===!1||!k.isInstancedMesh&&Gt.instancing===!0||k.isSkinnedMesh&&Gt.skinning===!1||!k.isSkinnedMesh&&Gt.skinning===!0||k.isInstancedMesh&&Gt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Gt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Gt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Gt.instancingMorph===!1&&k.morphTexture!==null||Gt.envMap!==Pt||W.fog===!0&&Gt.fog!==_t||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==bt.numPlanes||Gt.numIntersection!==bt.numIntersection)||Gt.vertexAlphas!==It||Gt.vertexTangents!==Xt||Gt.morphTargets!==Ht||Gt.morphNormals!==Qt||Gt.morphColors!==_e||Gt.toneMapping!==Ee||Gt.morphTargetsCount!==xe)&&(he=!0):(he=!0,Gt.__version=W.version);let sn=Gt.currentProgram;he===!0&&(sn=Bs(W,B,k));let yi=!1,rn=!1,rs=!1;const Me=sn.getUniforms(),Ye=Gt.uniforms;if(at.useProgram(sn.program)&&(yi=!0,rn=!0,rs=!0),W.id!==G&&(G=W.id,rn=!0),yi||H!==T){at.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Me.setValue(L,"projectionMatrix",T.projectionMatrix),Me.setValue(L,"viewMatrix",T.matrixWorldInverse);const Ze=Me.map.cameraPosition;Ze!==void 0&&Ze.setValue(L,qt.setFromMatrixPosition(T.matrixWorld)),kt.logarithmicDepthBuffer&&Me.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Me.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),H!==T&&(H=T,rn=!0,rs=!0)}if(Gt.needsLights&&(pe.state.directionalShadowMap.length>0&&Me.setValue(L,"directionalShadowMap",pe.state.directionalShadowMap,N),pe.state.spotShadowMap.length>0&&Me.setValue(L,"spotShadowMap",pe.state.spotShadowMap,N),pe.state.pointShadowMap.length>0&&Me.setValue(L,"pointShadowMap",pe.state.pointShadowMap,N)),k.isSkinnedMesh){Me.setOptional(L,k,"bindMatrix"),Me.setOptional(L,k,"bindMatrixInverse");const Ge=k.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Me.setValue(L,"boneTexture",Ge.boneTexture,N))}k.isBatchedMesh&&(Me.setOptional(L,k,"batchingTexture"),Me.setValue(L,"batchingTexture",k._matricesTexture,N),Me.setOptional(L,k,"batchingIdTexture"),Me.setValue(L,"batchingIdTexture",k._indirectTexture,N),Me.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Me.setValue(L,"batchingColorTexture",k._colorsTexture,N));const hn=X.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Yt.update(k,X,sn),(rn||Gt.receiveShadow!==k.receiveShadow)&&(Gt.receiveShadow=k.receiveShadow,Me.setValue(L,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ye.envMap.value=Pt,Ye.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Ye.envMapIntensity.value=B.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=ug()),rn&&(Me.setValue(L,"toneMappingExposure",M.toneMappingExposure),Gt.needsLights&&Kc(Ye,rs),_t&&W.fog===!0&&Ft.refreshFogUniforms(Ye,_t),Ft.refreshMaterialUniforms(Ye,W,Ut,zt,A.state.transmissionRenderTarget[T.id]),_r.upload(L,Go(Gt),Ye,N)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(_r.upload(L,Go(Gt),Ye,N),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Me.setValue(L,"center",k.center),Me.setValue(L,"modelViewMatrix",k.modelViewMatrix),Me.setValue(L,"normalMatrix",k.normalMatrix),Me.setValue(L,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ge=W.uniformsGroups;for(let Ze=0,Dr=Ge.length;Ze<Dr;Ze++){const ri=Ge[Ze];st.update(ri,sn),st.bind(ri,sn)}}return sn}function Kc(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function jc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(T,B,X){const W=_.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),_.get(T.texture).__webglTexture=B,_.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const X=_.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const Qc=L.createFramebuffer();this.setRenderTarget=function(T,B=0,X=0){F=T,I=B,D=X;let W=null,k=!1,_t=!1;if(T){const Mt=_.get(T);if(Mt.__useDefaultFramebuffer!==void 0){at.bindFramebuffer(L.FRAMEBUFFER,Mt.__webglFramebuffer),V.copy(T.viewport),z.copy(T.scissor),et=T.scissorTest,at.viewport(V),at.scissor(z),at.setScissorTest(et),G=-1;return}else if(Mt.__webglFramebuffer===void 0)N.setupRenderTarget(T);else if(Mt.__hasExternalTextures)N.rebindTextures(T,_.get(T.texture).__webglTexture,_.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Xt=T.depthTexture;if(Mt.__boundDepthTexture!==Xt){if(Xt!==null&&_.has(Xt)&&(T.width!==Xt.image.width||T.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(T)}}const Pt=T.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(_t=!0);const It=_.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(It[B])?W=It[B][X]:W=It[B],k=!0):T.samples>0&&N.useMultisampledRTT(T)===!1?W=_.get(T).__webglMultisampledFramebuffer:Array.isArray(It)?W=It[X]:W=It,V.copy(T.viewport),z.copy(T.scissor),et=T.scissorTest}else V.copy(J).multiplyScalar(Ut).floor(),z.copy(nt).multiplyScalar(Ut).floor(),et=yt;if(X!==0&&(W=Qc),at.bindFramebuffer(L.FRAMEBUFFER,W)&&at.drawBuffers(T,W),at.viewport(V),at.scissor(z),at.setScissorTest(et),k){const Mt=_.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Mt.__webglTexture,X)}else if(_t){const Mt=B;for(let Pt=0;Pt<T.textures.length;Pt++){const It=_.get(T.textures[Pt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Pt,It.__webglTexture,X,Mt)}}else if(T!==null&&X!==0){const Mt=_.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mt.__webglTexture,X)}G=-1},this.readRenderTargetPixels=function(T,B,X,W,k,_t,At,Mt=0){if(!(T&&T.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=_.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){at.bindFramebuffer(L.FRAMEBUFFER,Pt);try{const It=T.textures[Mt],Xt=It.format,Ht=It.type;if(!kt.textureFormatReadable(Xt)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Ht)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-W&&X>=0&&X<=T.height-k&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Mt),L.readPixels(B,X,W,k,ot.convert(Xt),ot.convert(Ht),_t))}finally{const It=F!==null?_.get(F).__webglFramebuffer:null;at.bindFramebuffer(L.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(T,B,X,W,k,_t,At,Mt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=_.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt)if(B>=0&&B<=T.width-W&&X>=0&&X<=T.height-k){at.bindFramebuffer(L.FRAMEBUFFER,Pt);const It=T.textures[Mt],Xt=It.format,Ht=It.type;if(!kt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qt),L.bufferData(L.PIXEL_PACK_BUFFER,_t.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Mt),L.readPixels(B,X,W,k,ot.convert(Xt),ot.convert(Ht),0);const _e=F!==null?_.get(F).__webglFramebuffer:null;at.bindFramebuffer(L.FRAMEBUFFER,_e);const Ee=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Fh(L,Ee,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_t),L.deleteBuffer(Qt),L.deleteSync(Ee),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,X=0){const W=Math.pow(2,-X),k=Math.floor(T.image.width*W),_t=Math.floor(T.image.height*W),At=B!==null?B.x:0,Mt=B!==null?B.y:0;N.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,At,Mt,k,_t),at.unbindTexture()};const th=L.createFramebuffer(),eh=L.createFramebuffer();this.copyTextureToTexture=function(T,B,X=null,W=null,k=0,_t=null){_t===null&&(k!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=k,k=0):_t=0);let At,Mt,Pt,It,Xt,Ht,Qt,_e,Ee;const Te=T.isCompressedTexture?T.mipmaps[_t]:T.image;if(X!==null)At=X.max.x-X.min.x,Mt=X.max.y-X.min.y,Pt=X.isBox3?X.max.z-X.min.z:1,It=X.min.x,Xt=X.min.y,Ht=X.isBox3?X.min.z:0;else{const hn=Math.pow(2,-k);At=Math.floor(Te.width*hn),Mt=Math.floor(Te.height*hn),T.isDataArrayTexture?Pt=Te.depth:T.isData3DTexture?Pt=Math.floor(Te.depth*hn):Pt=1,It=0,Xt=0,Ht=0}W!==null?(Qt=W.x,_e=W.y,Ee=W.z):(Qt=0,_e=0,Ee=0);const xe=ot.convert(B.format),Gt=ot.convert(B.type);let pe;B.isData3DTexture?(N.setTexture3D(B,0),pe=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(N.setTexture2DArray(B,0),pe=L.TEXTURE_2D_ARRAY):(N.setTexture2D(B,0),pe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const he=L.getParameter(L.UNPACK_ROW_LENGTH),sn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),yi=L.getParameter(L.UNPACK_SKIP_PIXELS),rn=L.getParameter(L.UNPACK_SKIP_ROWS),rs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Te.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Te.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,It),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ht);const Me=T.isDataArrayTexture||T.isData3DTexture,Ye=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const hn=_.get(T),Ge=_.get(B),Ze=_.get(hn.__renderTarget),Dr=_.get(Ge.__renderTarget);at.bindFramebuffer(L.READ_FRAMEBUFFER,Ze.__webglFramebuffer),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let ri=0;ri<Pt;ri++)Me&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_.get(T).__webglTexture,k,Ht+ri),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_.get(B).__webglTexture,_t,Ee+ri)),L.blitFramebuffer(It,Xt,At,Mt,Qt,_e,At,Mt,L.DEPTH_BUFFER_BIT,L.NEAREST);at.bindFramebuffer(L.READ_FRAMEBUFFER,null),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||_.has(T)){const hn=_.get(T),Ge=_.get(B);at.bindFramebuffer(L.READ_FRAMEBUFFER,th),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,eh);for(let Ze=0;Ze<Pt;Ze++)Me?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,hn.__webglTexture,k,Ht+Ze):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,hn.__webglTexture,k),Ye?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,_t,Ee+Ze):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,_t),k!==0?L.blitFramebuffer(It,Xt,At,Mt,Qt,_e,At,Mt,L.COLOR_BUFFER_BIT,L.NEAREST):Ye?L.copyTexSubImage3D(pe,_t,Qt,_e,Ee+Ze,It,Xt,At,Mt):L.copyTexSubImage2D(pe,_t,Qt,_e,It,Xt,At,Mt);at.bindFramebuffer(L.READ_FRAMEBUFFER,null),at.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ye?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(pe,_t,Qt,_e,Ee,At,Mt,Pt,xe,Gt,Te.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(pe,_t,Qt,_e,Ee,At,Mt,Pt,xe,Te.data):L.texSubImage3D(pe,_t,Qt,_e,Ee,At,Mt,Pt,xe,Gt,Te):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_t,Qt,_e,At,Mt,xe,Gt,Te.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_t,Qt,_e,Te.width,Te.height,xe,Te.data):L.texSubImage2D(L.TEXTURE_2D,_t,Qt,_e,At,Mt,xe,Gt,Te);L.pixelStorei(L.UNPACK_ROW_LENGTH,he),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,sn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,yi),L.pixelStorei(L.UNPACK_SKIP_ROWS,rn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,rs),_t===0&&B.generateMipmaps&&L.generateMipmap(pe),at.unbindTexture()},this.initRenderTarget=function(T){_.get(T).__webglFramebuffer===void 0&&N.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?N.setTextureCube(T,0):T.isData3DTexture?N.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?N.setTexture2DArray(T,0):N.setTexture2D(T,0),at.unbindTexture()},this.resetState=function(){I=0,D=0,F=null,at.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}function po(i,t,e=24,n=28){const s=[];for(let a=0;a<=e;a++){const o=a/e;s.push(new Y(Math.max(5e-4,t(o)),o*i))}const r=new Yn(s,n);return r.computeVertexNormals(),r}function di(i,t,e,n=26,s=28){return po(i,r=>{const a=t+(e-t)*r,o=Math.min(1,r*i/t),l=Math.min(1,(1-r)*i/e);return a*Math.sqrt(Math.max(0,1-(1-o)*(1-o)))*Math.sqrt(Math.max(0,1-(1-l)*(1-l)))},n,s)}function Ke(i,t,e,n,s=3){const r=new Er,a=-i/2,o=-t/2,l=Math.min(n,i/2,t/2);r.moveTo(a+l,o),r.lineTo(a+i-l,o),r.quadraticCurveTo(a+i,o,a+i,o+l),r.lineTo(a+i,o+t-l),r.quadraticCurveTo(a+i,o+t,a+i-l,o+t),r.lineTo(a+l,o+t),r.quadraticCurveTo(a,o+t,a,o+t-l),r.lineTo(a,o+l),r.quadraticCurveTo(a,o,a+l,o);const c=Math.min(l,e/2.5),h=new Ds(r,{depth:e-c*2,bevelEnabled:!0,bevelThickness:c,bevelSize:c*.999,bevelSegments:s,curveSegments:6});return h.translate(0,0,-(e-c*2)/2),h.computeVertexNormals(),h}const fg=new b(0,1,0);function pg(i,t=new Re){return t.setFromUnitVectors(fg,i.clone().normalize())}function tn(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,{c:e,ctx:e.getContext("2d")}}function Ie(i,t=!0,e=1){const n=new Lc(i);return t&&(n.colorSpace=je),n.wrapS=n.wrapT=bs,n.repeat.set(e,e),n.anisotropy=4,n}function Qi(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function ts(i,t,e,n,s,r=Qi(7)){const{c:a,ctx:o}=tn(i,i);o.fillStyle=t,o.fillRect(0,0,i,i);const l=i/s;for(let c=0;c<s;c++)for(let h=0;h<s;h++){const u=(c+h)%2===0;o.fillStyle=u?e:n,o.globalAlpha=.16+r()*.12,u?o.fillRect(c*l,h*l+l*.15,l,l*.7):o.fillRect(c*l+l*.15,h*l,l*.7,l)}o.globalAlpha=1;for(let c=0;c<i*i*.02;c++)o.fillStyle=r()>.5?n:e,o.globalAlpha=.08,o.fillRect(r()*i,r()*i,1.5,1.5);return o.globalAlpha=1,a}function Lr(i,t){const{c:e,ctx:n}=tn(i,i);n.fillStyle="#808080",n.fillRect(0,0,i,i);const s=i/t;for(let r=0;r<t;r++)for(let a=0;a<t;a++){const o=(r+a)%2===0;n.fillStyle=o?"#a0a0a0":"#606060",o?n.fillRect(r*s,a*s+s*.15,s,s*.7):n.fillRect(r*s+s*.15,a*s,s*.7,s)}return e}class mg{constructor(){U(this,"group",new fe);U(this,"keyLight");U(this,"tray");U(this,"dishCenter",new b);U(this,"dishFloorY",.189);U(this,"trayCenter",new b);const t=this.group,e=Qi(3),n=tn(512,512);n.ctx.fillStyle="#d9c3a0",n.ctx.fillRect(0,0,512,512);for(let Tt=0;Tt<6;Tt++){const Lt=Tt*85.3;n.ctx.fillStyle=`hsl(33, ${38+e()*10}%, ${72+e()*6}%)`,n.ctx.fillRect(0,Lt,512,84),n.ctx.strokeStyle="rgba(120,80,40,0.35)",n.ctx.lineWidth=2,n.ctx.strokeRect(-1,Lt,514,84);for(let ye=0;ye<22;ye++){n.ctx.strokeStyle=`rgba(140,95,50,${.06+e()*.08})`,n.ctx.lineWidth=1+e(),n.ctx.beginPath();const Se=Lt+e()*84;n.ctx.moveTo(0,Se),n.ctx.bezierCurveTo(170,Se+e()*6-3,340,Se+e()*6-3,512,Se),n.ctx.stroke()}n.ctx.strokeStyle="rgba(120,80,40,0.35)",n.ctx.beginPath();const ne=e()*512;n.ctx.moveTo(ne,Lt),n.ctx.lineTo(ne,Lt+84),n.ctx.stroke()}const s=Ie(n.c,!0,4),r=new Z(new cn(2.4,2.4),new Ot({map:s,roughness:.55,metalness:0}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,t.add(r);const a=new Ot({color:"#f3ede1",roughness:.92}),o=new Ot({color:"#bfe1d6",roughness:.6}),l=new Ot({color:"#fbf8f1",roughness:.5}),c=1,h=.8,u=new Z(new de(h*2,c,.02),a);u.position.set(0,c/2,-.55-.01),u.receiveShadow=!0,t.add(u);const d=new Z(new de(.02,c,1.6),a);d.position.set(-h,c/2,.25),t.add(d);const p=new Z(new de(.02,c,1.6),a);p.position.set(h,c/2,.25),t.add(p);const g=new Z(new cn(2,2),new Ot({color:"#f7f3ea"}));g.rotation.x=Math.PI/2,g.position.y=c,t.add(g);const y=new Z(new de(h*2,.24,.012),o);y.position.set(0,.12,-.55+.005),y.receiveShadow=!0,t.add(y);const f=new Z(new de(h*2,.018,.02),l);f.position.set(0,.245,-.55+.008),t.add(f);const m=new Z(new de(h*2,.03,.02),l);m.position.set(0,.015,-.55+.008),t.add(m);for(const Tt of[-1,1]){const Lt=new Z(new de(.012,.24,1.6),o);Lt.position.set(Tt*(h-.005),.12,.25),t.add(Lt);const ne=new Z(new de(.02,.018,1.6),l);ne.position.set(Tt*(h-.008),.245,.25),t.add(ne)}const S=.2,x=.5,v=.36,A=.34;u.geometry.dispose(),u.geometry=new de(.01,.01,.01),u.visible=!1;const E=[[-h,-.55,S-v/2,0,c],[S+v/2,-.55,h,0,c],[S-v/2,-.55,S+v/2,0,x-A/2],[S-v/2,-.55,S+v/2,x+A/2,c]];for(const[Tt,,Lt,ne,ye]of E){const Se=new Z(new de(Lt-Tt,ye-ne,.04),a);Se.position.set((Tt+Lt)/2,(ne+ye)/2,-.55-.02),Se.receiveShadow=!0,t.add(Se)}const R=new Ot({color:"#fdfbf6",roughness:.45}),P=.022,M=.05,w=[[S,x+A/2+P/2,v+P*2,P],[S,x-A/2-P/2,v+P*2,P]];for(const[Tt,Lt,ne,ye]of w){const Se=new Z(new de(ne,ye,M),R);Se.position.set(Tt,Lt,-.55),Se.castShadow=!0,t.add(Se)}for(const Tt of[-1,1]){const Lt=new Z(new de(P,A,M),R);Lt.position.set(S+Tt*(v/2+P/2),x,-.55),t.add(Lt)}const I=new Z(new de(.012,A,.03),R);I.position.set(S,x,-.55-.005),t.add(I);const D=new Z(new de(v,.012,.03),R);D.position.set(S,x,-.55-.005),t.add(D);const F=new Z(new de(v+.09,.016,.07),R);F.position.set(S,x-A/2-P-.008,-.55+.012),F.castShadow=!0,t.add(F);const G=new Z(new cn(v,A),new Qe({color:"#e8f4ff",transparent:!0,opacity:.18,roughness:.05,metalness:0,transmission:0}));G.position.set(S,x,-.55-.02),t.add(G);const H=new fe;H.position.set(0,0,-.55-.05);const V=new Z(new cn(3,2),new Ot({color:"#9ccf84",roughness:1}));V.rotation.x=-Math.PI/2,V.position.set(0,.01,-1),H.add(V);const z=new Z(new de(2.4,.42,.08),new Ot({color:"#e5d8c6",roughness:.95}));z.position.set(.3,.21,-.9),H.add(z);const et=new Ot({color:"#cbbba5",roughness:.9}),ft=new Z(new de(2.4,.03,.12),et);ft.position.set(.3,.43,-.9),H.add(ft);const lt=new Ot({color:"#5fa668",roughness:.9}),ht=new Ot({color:"#7cbd6d",roughness:.9});for(let Tt=0;Tt<9;Tt++){const Lt=new Z(new Us(.06+e()*.06,2),e()>.5?lt:ht);Lt.position.set(-.3+Tt*.13+e()*.04,.06+e()*.05,-.25-e()*.45),Lt.scale.y=.8,H.add(Lt)}const zt=new fe,Ut=new Z(new Ce(.02,.03,.4,8),new Ot({color:"#8a6a4a"}));Ut.position.y=.2,zt.add(Ut);const ee=new Z(new Us(.2,2),lt);ee.position.y=.5,ee.scale.set(1,.85,1),zt.add(ee),zt.position.set(.55,0,-.7),H.add(zt);const se=new Z(new cn(6,3),new Zi({color:"#cfe6f7"}));se.position.set(0,1.2,-2.2),H.add(se),t.add(H);const J=new Ot({color:"#e9dcc5",roughness:.6}),nt=new Z(Ke(.3,.22,.15,.008),J);nt.position.set(-.52,.11,-.47),nt.castShadow=!0,nt.receiveShadow=!0,t.add(nt);const yt=new Z(Ke(.32,.018,.17,.006),new Ot({color:"#f9f7f2",roughness:.3}));yt.position.set(-.52,.229,-.47),yt.receiveShadow=!0,t.add(yt);const Nt=[new Y(5e-4,0),new Y(.05,0),new Y(.075,.03),new Y(.085,.045),new Y(.078,.045),new Y(.07,.036),new Y(.046,.006),new Y(5e-4,.006)],St=new Z(new Yn(Nt,32),new Ot({color:"#f4f6f5",roughness:.25,side:Le}));St.position.set(-.52,.2,-.47),t.add(St);const Vt=new Ot({color:"#dfe3e6",roughness:.25,metalness:.9}),le=new Z(new Rr(new Dc([new b(0,0,0),new b(0,.06,0),new b(0,.075,.03),new b(0,.06,.055)]),16,.006,8),Vt);le.position.set(-.52,.238,-.53),le.castShadow=!0,t.add(le);for(const Tt of[-.04,.04]){const Lt=new Z(new Ce(.008,.008,.02,12),Vt);Lt.position.set(-.52+Tt,.248,-.53),t.add(Lt)}for(const Tt of[.06,.15]){const Lt=new Z(new de(.05,.008,.008),Vt);Lt.position.set(-.52,Tt,-.39),t.add(Lt)}const qt=new Ot({color:"#d7b78e",roughness:.55}),j=new fe;j.position.set(.6,0,-.45);for(const Tt of[-.1,.1]){const Lt=new Z(new de(.012,.66,.14),qt);Lt.position.set(Tt,.33,0),Lt.castShadow=!0,j.add(Lt)}for(const Tt of[.02,.22,.42,.62]){const Lt=new Z(new de(.2,.012,.14),qt);Lt.position.set(0,Tt,0),Lt.castShadow=!0,Lt.receiveShadow=!0,j.add(Lt)}const rt=["#f7d7cf","#cfe9e2","#f3e6bd","#dfe7f6","#f9f2ee"];for(let Tt=0;Tt<9;Tt++){const Lt=[.026,.226,.426][Math.floor(Tt/3)],ne=-.06+Tt%3*.06,ye=new Z(new Ce(.02,.022,.07+e()*.05,16),new Qe({color:rt[Tt%5],roughness:.3,transparent:!0,opacity:.85}));ye.position.set(ne,Lt+ye.geometry.parameters.height/2,e()*.02),ye.castShadow=!0,j.add(ye);const Se=new Z(new Ce(.021,.021,.012,16),new Ot({color:"#e7c9a6",roughness:.5}));Se.position.set(ne,ye.position.y+ye.geometry.parameters.height/2+.006,ye.position.z),j.add(Se)}t.add(j);const tt=new Er,mt=40,L=.5,Dt=.018,wt=.004;for(let Tt=0;Tt<=mt;Tt++){const Lt=Tt/mt,ne=Math.sin(Lt*Math.PI*7)*Dt,ye=Lt*L;Tt===0?tt.moveTo(ne,ye):tt.lineTo(ne,ye)}for(let Tt=mt;Tt>=0;Tt--){const Lt=Tt/mt,ne=Math.sin(Lt*Math.PI*7)*Dt+wt,ye=Lt*L;tt.lineTo(ne,ye)}tt.closePath();const kt=new Ds(tt,{depth:.62,bevelEnabled:!1,curveSegments:4});kt.rotateX(Math.PI/2);const at=tn(256,256);at.ctx.fillStyle="#bfe3da",at.ctx.fillRect(0,0,256,256),at.ctx.strokeStyle="rgba(255,255,255,0.35)",at.ctx.lineWidth=2;for(let Tt=0;Tt<256;Tt+=12)at.ctx.beginPath(),at.ctx.moveTo(Tt,0),at.ctx.lineTo(Tt,256),at.ctx.stroke();const C=new Z(kt,new Ot({map:Ie(at.c,!0,6),roughness:.95,side:Le}));C.position.set(.36,.72,-.5),C.castShadow=!0,C.receiveShadow=!0,t.add(C);const _=new Z(new Ce(.005,.005,L+.06,10),Vt);_.rotation.x=Math.PI/2,_.position.set(.36,.735,-.5+L/2),t.add(_);for(let Tt=0;Tt<=7;Tt++){const Lt=new Z(new Xn(.009,.0022,8,16),Vt);Lt.position.set(.36,.73,-.5+Tt/7*L),t.add(Lt)}const N=new fe;N.position.set(-.22,.6,-.55+.02);const q=new Ot({color:"#f5b6a4",roughness:.6});for(let Tt=0;Tt<5;Tt++){const Lt=new Z(new Ce(.022,.022,.006,20),q),ne=Tt/5*Math.PI*2;Lt.rotation.x=Math.PI/2,Lt.position.set(Math.cos(ne)*.026,Math.sin(ne)*.026,0),N.add(Lt)}const Q=new Z(new Ce(.02,.02,.008,20),new Ot({color:"#fff9ee"}));Q.rotation.x=Math.PI/2,Q.position.z=.002,N.add(Q);const $=new Ot({color:"#8fd1c0"}),Rt=new Z(new de(.02,.006,.004),$);Rt.position.z=.008,N.add(Rt);const ut=new Z(new de(.006,.02,.004),$);ut.position.z=.008,N.add(ut),t.add(N);const Et=new Ot({color:"#f2f0ea",roughness:.4,metalness:.1}),Ft=new Z(Ke(.34,.05,.26,.018,4),new Ot({color:"#dff0ea",roughness:.8}));Ft.position.set(0,.095,-.07),Ft.castShadow=!0,Ft.receiveShadow=!0,t.add(Ft);const it=new Z(Ke(.3,.012,.2,.01,3),new Ot({color:"#fbfbf7",roughness:.85}));it.position.set(0,.123,-.07),it.receiveShadow=!0,t.add(it);const dt=new Z(Ke(.36,.03,.28,.008),Et);dt.position.set(0,.06,-.07),dt.castShadow=!0,t.add(dt);for(const[Tt,Lt]of[[-.15,-.18],[.15,-.18],[-.15,.04],[.15,.04]]){const ne=new Z(new Ce(.008,.008,.05,12),Et);ne.position.set(Tt,.025,Lt),ne.castShadow=!0,t.add(ne)}const bt=new Z(Ke(.12,.035,.07,.016,4),new Ot({color:"#f6f3ec",roughness:.9}));bt.position.set(-.08,.14,-.15),bt.rotation.z=.1,bt.castShadow=!0,t.add(bt);const Ct=new Z(Ke(.34,.12,.02,.01),Et);Ct.position.set(0,.12,-.21),Ct.castShadow=!0,t.add(Ct);const pt=new Ot({color:"#f6f1e6",roughness:.35}),Yt=new Z(Ke(.34,.012,.19,.008),pt);Yt.position.set(.03,.18,.095),Yt.castShadow=!0,Yt.receiveShadow=!0,t.add(Yt);for(const Tt of[-.14,.2]){const Lt=new Z(new Ce(.007,.007,.175,12),Vt);Lt.position.set(Tt,.0875,.095),Lt.castShadow=!0,t.add(Lt);const ne=new Z(Ke(.03,.012,.2,.005),Vt);ne.position.set(Tt,.006,.095),t.add(ne)}const O=[new Y(5e-4,0),new Y(.03,0),new Y(.041,.008),new Y(.045,.012),new Y(.042,.012),new Y(.038,.008),new Y(.028,.003),new Y(5e-4,.003)],gt=new Z(new Yn(O,40),new Qe({color:"#cfe7ee",roughness:.2,side:Le,clearcoat:.6}));gt.position.set(-.022,.186,.047),gt.receiveShadow=!0,gt.castShadow=!0,t.add(gt),this.dishCenter.copy(gt.position),this.dishFloorY=.189;const ot=new Ot({color:"#f0f4f4",roughness:.35,metalness:.05}),vt=new fe;this.tray=vt,t.add(vt);const st=new Z(Ke(.13,.006,.09,.008),ot);st.position.set(0,.189,0),st.receiveShadow=!0,vt.add(st);const K=new Er;K.moveTo(-.065,-.045),K.lineTo(.065,-.045),K.lineTo(.065,.045),K.lineTo(-.065,.045),K.closePath();const ct=new oo;ct.moveTo(-.059,-.039),ct.lineTo(.059,-.039),ct.lineTo(.059,.039),ct.lineTo(-.059,.039),ct.closePath(),K.holes.push(ct);const Wt=new Z(new Ds(K,{depth:.014,bevelEnabled:!0,bevelThickness:.002,bevelSize:.002,bevelSegments:2}),ot);Wt.rotation.x=-Math.PI/2,Wt.position.set(0,.189,0),Wt.castShadow=!0,Wt.receiveShadow=!0,vt.add(Wt),this.setTrayLayout(!1);const ce=new fe;ce.position.set(-.3,0,.36);const re=new Z(new Ce(.065,.06,.03,28),new Ot({color:"#f2b7a5",roughness:.6}));re.position.y=.16,re.castShadow=!0,ce.add(re);const nn=new Z(new Ce(.01,.01,.15,12),Vt);nn.position.y=.075,ce.add(nn);for(let Tt=0;Tt<5;Tt++){const Lt=Tt/5*Math.PI*2,ne=new Z(new de(.08,.01,.014),Vt);ne.position.set(Math.cos(Lt)*.04,.01,Math.sin(Lt)*.04),ne.rotation.y=-Lt,ce.add(ne)}t.add(ce);const ve=new la("#fff3e2",2.6);ve.position.set(.35,.7,-.15),ve.target.position.set(0,.18,.05),ve.castShadow=!0,ve.shadow.mapSize.set(1024,1024),ve.shadow.camera.near=.2,ve.shadow.camera.far=1.6,ve.shadow.camera.left=-.32,ve.shadow.camera.right=.32,ve.shadow.camera.top=.32,ve.shadow.camera.bottom=-.32,ve.shadow.bias=-15e-5,ve.shadow.normalBias=.0025,ve.shadow.radius=3,t.add(ve),t.add(ve.target);const Fs=new la("#dfe9ff",.9);Fs.position.set(-.6,.4,.6),t.add(Fs);const ss=new la("#ffffff",.5);ss.position.set(.1,.5,-.8),t.add(ss),t.add(new ud("#fff7ec","#c9b9a5",.9)),this.keyLight=ve}setTrayLayout(t){t?this.tray.position.set(-.015,0,.142):this.tray.position.set(.09,0,.1),this.trayCenter.set(this.tray.position.x,.192,this.tray.position.z)}}class gg{constructor(t){U(this,"faceDir");U(this,"group",new fe);U(this,"skin");U(this,"sleeve");U(this,"cuff");U(this,"length",.058);U(this,"baseR",t=>.0098-.0022*t+8e-4*Math.sin(t*Math.PI));U(this,"woundPhi",0);U(this,"woundY",.034);U(this,"woundHalfLen",.0105);U(this,"woundHalfW",.0034);U(this,"phiStart",0);U(this,"dry",tn(512,256));U(this,"skinC",tn(512,256));U(this,"roughC",(()=>{const t=document.createElement("canvas");return t.width=512,t.height=256,{c:t,ctx:t.getContext("2d",{willReadFrequently:!0})}})());U(this,"wetImg");U(this,"wetC",tn(64,32));U(this,"wetRoughImg");U(this,"wetRoughC",tn(64,32));U(this,"skinTex");U(this,"roughTex");U(this,"wet",new Float32Array(2048));U(this,"wetDirty",!1);U(this,"sand");U(this,"grains",[]);U(this,"dummy",new De);U(this,"sleeveBase",[]);U(this,"sleeveRings",22);U(this,"sleeveSegs",30);U(this,"roll",0);U(this,"sleeveLen",.05);U(this,"seed",1);this.faceDir=t,this.wetImg=this.wetC.ctx.createImageData(64,32),this.wetRoughImg=this.wetRoughC.ctx.createImageData(64,32),this.skinTex=Ie(this.skinC.c),this.skinTex.wrapS=Oe,this.skinTex.wrapT=Oe,this.roughTex=Ie(this.roughC.c,!1),this.roughTex.wrapS=Oe,this.roughTex.wrapT=Oe;const e=new Qe({map:this.skinTex,roughnessMap:this.roughTex,roughness:1,metalness:0,clearcoat:.08,clearcoatRoughness:.6,sheen:.15,sheenColor:new Zt("#ffd9c8")});this.skin=new Z(new be,e),this.skin.castShadow=!0,this.skin.receiveShadow=!0,this.group.add(this.skin);const n=new Ot({map:Ie(ts(256,"#f6ecd0","#e2d3a8","#fff8e6",32),!0,3),bumpMap:Ie(Lr(256,32),!1,3),bumpScale:6e-4,roughness:.9,side:Le});this.sleeve=new Z(new be,n),this.sleeve.castShadow=!0,this.sleeve.receiveShadow=!0,this.group.add(this.sleeve),this.cuff=new Z(new Xn(.0118,.0024,12,32),new Ot({map:Ie(ts(128,"#f1e4c2","#d9c898","#fff6df",16),!0,4),roughness:.95})),this.cuff.rotation.x=Math.PI/2,this.cuff.castShadow=!0,this.group.add(this.cuff);const s=new Us(55e-5,0);this.sand=new Tu(s,new Ot({color:"#8d6a44",roughness:.9}),40),this.sand.castShadow=!1,this.sand.frustumCulled=!1}radiusAt(t){return this.baseR(Math.min(1,Math.max(0,t)))}build(t=1){this.seed=t,this.group.updateWorldMatrix(!0,!1);const e=this.group.worldToLocal(this.faceDir.clone().add(this.group.getWorldPosition(new b)));this.woundPhi=Math.atan2(e.x,e.z),this.phiStart=this.woundPhi-Math.PI;const n=new Yn(Array.from({length:25},(s,r)=>new Y(this.baseR(r/24),r/24*this.length)),40,this.phiStart,Math.PI*2);n.computeVertexNormals(),this.skin.geometry.dispose(),this.skin.geometry=n,this.wet.fill(0),this.wetDirty=!0,this.drawDry(t),this.composite(),this.buildSleeve(),this.buildSand(t)}uvOf(t,e){let n=t-this.phiStart;return n=(n%(Math.PI*2)+Math.PI*2)%(Math.PI*2),{u:n/(Math.PI*2),v:e/this.length}}localOf(t){const e=this.group.worldToLocal(t.clone());return{phi:Math.atan2(e.x,e.z),y:e.y,r:Math.hypot(e.x,e.z)}}worldOf(t,e,n=0){const s=this.radiusAt(e/this.length)+n;return this.group.localToWorld(new b(s*Math.sin(t),e,s*Math.cos(t)))}worldNormal(t){return new b(Math.sin(t),0,Math.cos(t)).transformDirection(this.group.matrixWorld).normalize()}get axisWorld(){return new b(0,1,0).transformDirection(this.group.matrixWorld).normalize()}drawDry(t){const e=Qi(t*17+5),{ctx:n}=this.dry,s=512,r=256;n.clearRect(0,0,s,r),n.fillStyle="#f7cdb6",n.fillRect(0,0,s,r);for(let p=0;p<260;p++)n.fillStyle=e()>.5?"rgba(255,225,205,0.18)":"rgba(228,170,145,0.12)",n.beginPath(),n.ellipse(e()*s,e()*r,6+e()*24,4+e()*12,e()*3,0,Math.PI*2),n.fill();n.strokeStyle="rgba(200,140,120,0.25)",n.lineWidth=3,n.beginPath(),n.moveTo(0,8),n.quadraticCurveTo(s/2,14,s,8),n.stroke();const a=s*.5,o=this.woundY/this.length*r,l=this.roughC.ctx;l.fillStyle="#8f8f8f",l.fillRect(0,0,s,r);const c=this.woundHalfLen/this.length*r,h=this.woundHalfW/(2*Math.PI*this.radiusAt(.55))*s;n.save(),n.translate(a,o),n.rotate(Math.PI/2+(e()-.5)*.35);const u=n.createRadialGradient(0,0,2,0,0,c*1.35);u.addColorStop(0,"rgba(240,150,130,0.35)"),u.addColorStop(1,"rgba(240,150,130,0)"),n.fillStyle=u,n.beginPath(),n.ellipse(0,0,c*1.4,h*1.8,0,0,Math.PI*2),n.fill();const d=4+Math.floor(e()*2);for(let p=0;p<d;p++){const g=(p/(d-1)-.5)*h*1.6,y=c*(.55+e()*.5),f=(e()-.5)*10;n.strokeStyle=`rgba(232,${125+e()*25},${105+e()*20},${.55+e()*.25})`,n.lineWidth=2.2+e()*1.8,n.lineCap="round",n.beginPath(),n.moveTo(-y+e()*6,g),n.quadraticCurveTo(0,g+f,y-e()*6,g),n.stroke()}n.restore(),l.save(),l.translate(a,o),l.rotate(Math.PI/2),l.fillStyle="rgba(110,110,110,0.7)",l.beginPath(),l.ellipse(0,0,c*1.1,h*1.3,0,0,Math.PI*2),l.fill(),l.restore(),this.roughC.baseSaved=this.roughC.ctx.getImageData(0,0,s,r)}composite(){const n=this.skinC.ctx,s=this.roughC.ctx;n.clearRect(0,0,512,256),n.drawImage(this.dry.c,0,0),s.putImageData(this.roughC.baseSaved,0,0);const r=this.wetImg.data,a=this.wetRoughImg.data;for(let o=0;o<2048;o++){const l=Math.min(1,this.wet[o]);r[o*4]=120,r[o*4+1]=70,r[o*4+2]=60,r[o*4+3]=l*90,a[o*4]=20,a[o*4+1]=20,a[o*4+2]=20,a[o*4+3]=l*200}this.wetC.ctx.putImageData(this.wetImg,0,0),this.wetRoughC.ctx.putImageData(this.wetRoughImg,0,0),n.imageSmoothingEnabled=!0,n.drawImage(this.wetC.c,0,0,512,256),s.imageSmoothingEnabled=!0,s.drawImage(this.wetRoughC.c,0,0,512,256),this.skinTex.needsUpdate=!0,this.roughTex.needsUpdate=!0,this.wetDirty=!1}paintWet(t,e,n,s){const{u:r,v:a}=this.uvOf(t,e),o=this.radiusAt(e/this.length),l=n/(2*Math.PI*o),c=n/this.length;for(let h=0;h<32;h++)for(let u=0;u<64;u++){const d=((u+.5)/64-r)/l,p=((h+.5)/32-a)/c,g=d*d+p*p;if(g<1){const y=u+h*64;this.wet[y]=Math.min(1,this.wet[y]+s*(1-g))}}this.wetDirty=!0}absorbWet(t,e,n,s){const{u:r,v:a}=this.uvOf(t,e),o=this.radiusAt(e/this.length),l=n/(2*Math.PI*o),c=n/this.length;let h=0;for(let u=0;u<32;u++)for(let d=0;d<64;d++){const p=((d+.5)/64-r)/l,g=((u+.5)/32-a)/c,y=p*p+g*g;if(y<1){const f=d+u*64,m=this.wet[f]*s*(1-y*.5);this.wet[f]-=m,h+=m}}return this.wetDirty=!0,h}wetTotal(){let t=0;for(let e=0;e<this.wet.length;e++)t+=this.wet[e];return t}buildSand(t){const e=Qi(t*31+11);this.grains.length=0;const n=this.radiusAt(.55);for(let s=0;s<40;s++){const r=e()*Math.PI*2,a=Math.sqrt(e()),o=this.woundY+Math.cos(r)*a*this.woundHalfLen*1.25,l=this.woundPhi+Math.sin(r)*a*this.woundHalfW*1.8/n;this.grains.push({phi:l,y:o,loose:!1,pos:new b,vel:new b,rest:!1,scale:.7+e()*.7,rot:e()*6})}this.sand.count=40,this.updateSand(0,0)}updateSand(t,e,n){for(let s=0;s<this.grains.length;s++){const r=this.grains[s];if(!r.loose)r.pos.copy(this.worldOf(r.phi,r.y,3e-4));else if(!r.rest&&(r.vel.y-=9.8*t*.35,r.pos.addScaledVector(r.vel,t),r.pos.y<=e&&(r.pos.y=e,r.rest=!0,r.vel.set(0,0,0),n))){const a=r.pos.x-n.x,o=r.pos.z-n.z,l=Math.hypot(a,o);l>.034&&(r.pos.x=n.x+a/l*.045,r.pos.z=n.z+o/l*.045)}this.dummy.position.copy(r.pos),this.dummy.rotation.set(r.rot,r.rot*1.3,0),this.dummy.scale.setScalar(r.scale),this.dummy.updateMatrix(),this.sand.setMatrixAt(s,this.dummy.matrix)}this.sand.instanceMatrix.needsUpdate=!0}loosenSand(t,e,n,s){const r=this.radiusAt(.55);let a=0;for(const o of this.grains){if(o.loose)continue;let l=o.phi-t;l=Math.atan2(Math.sin(l),Math.cos(l)),Math.hypot(l*r,o.y-e)<n&&(o.loose=!0,a++,o.pos.copy(this.worldOf(o.phi,o.y,.001)),o.vel.copy(s).multiplyScalar(.05+Math.random()*.05),o.vel.x+=(Math.random()-.5)*.06,o.vel.z+=(Math.random()-.5)*.06,o.vel.y+=.02)}return a}sandLooseFraction(){return this.grains.filter(t=>t.loose).length/this.grains.length}buildSleeve(){const t=this.sleeveRings,e=this.sleeveSegs;this.sleeveBase=Array.from({length:t+1},(s,r)=>new Y(0,r/t));const n=new Yn(this.sleeveBase.map(s=>new Y(.012,s.y*this.sleeveLen)),e,this.phiStart,Math.PI*2);this.sleeve.geometry.dispose(),this.sleeve.geometry=n,this.roll=0,this.updateSleeve()}updateSleeve(){const t=this.roll,e=this.sleeveRings,n=this.sleeveSegs,s=this.sleeve.geometry.attributes.position,r=.28;for(let l=0;l<=n;l++){const c=this.phiStart+l/n*Math.PI*2;for(let h=0;h<=e;h++){const u=h/e,d=this.sleeveLen*(u*(1-t)+u*r*t)-.004,p=this.radiusAt(Math.max(0,d)/this.length),g=t*(.0022+.0016*Math.sin(u*Math.PI*4+t*2))*Math.pow(u,.6),y=p+.0022+g+t*.0015,f=l*(e+1)+h;s.setXYZ(f,y*Math.sin(c),d,y*Math.cos(c))}}s.needsUpdate=!0,this.sleeve.geometry.computeVertexNormals();const a=this.sleeveLen*(1-t+r*t)-.004,o=this.radiusAt(a/this.length)+.0032+t*.0012;this.cuff.position.y=a,this.cuff.scale.setScalar(o/.0118)}cuffWorld(){return this.group.localToWorld(this.cuff.position.clone())}sleeveEdgeY(){return this.sleeveLen*(1-this.roll+.28*this.roll)}}const _g=(i,t,e)=>new b(i,t,e),Bo=i=>Object.fromEntries(Object.entries(i).map(([t,e])=>[t,_g(...e)])),mn={upperArm:.055,forearm:.058,thigh:.068,lowerLeg:.094};function Kl(i,t,e,n,s,r){const a=new b().subVectors(t,i),o=a.length();if(o<1e-7)return r.copy(e);a.multiplyScalar(1/o);const l=Bt.clamp(o,Math.abs(n-s)+1e-6,n+s-1e-6),c=(n*n-s*s+l*l)/(2*l),h=Math.sqrt(Math.max(0,n*n-c*c)),u=new b().subVectors(e,i),d=u.clone().addScaledVector(a,-u.dot(a));return d.lengthSq()<1e-10&&(d.set(0,0,1).addScaledVector(a,-a.z),d.lengthSq()<1e-10&&d.set(1,0,0).addScaledVector(a,-a.x)),r.copy(i).addScaledVector(a,c).addScaledVector(d.normalize(),h)}function zo(i){for(const t of["L","R"])Kl(i[`s${t}`],i[`w${t}`],i[`e${t}`],mn.upperArm,mn.forearm,i[`e${t}`]),Kl(i[`h${t}`],i[`a${t}`],i[`k${t}`],mn.thigh,mn.lowerLeg,i[`k${t}`]);return i}const Rn=Bo({pelvis:[0,.147,-.025],neck:[.004,.252,-.022],head:[.006,.292,-.014],headLook:[-.03,.2,.09],sL:[.038,.24,-.024],eL:[.1,.235,.005],wL:[.07,.23,.035],sR:[-.037,.24,-.024],eR:[-.05,.206,.042],wR:[.006,.208,.058],hL:[.02,.14,-.025],kL:[.026,.148,.062],aL:[.03,.05,.078],hR:[-.02,.14,-.025],kR:[-.026,.148,.062],aR:[-.03,.05,.078],handRDir:[.2,-.3,.9],handLDir:[-.1,-.6,.8]}),Wi=Bo({pelvis:[-.245,.19,.02],neck:[-.245,.295,.02],head:[-.245,.336,.022],headLook:[-.26,.25,.09],sL:[-.207,.283,.02],eL:[-.198,.232,.035],wL:[-.205,.22,.078],sR:[-.283,.283,.02],eR:[-.29,.232,.045],wR:[-.242,.245,.075],hL:[-.225,.183,.02],kL:[-.223,.115,.024],aL:[-.223,.022,.024],hR:[-.265,.183,.02],kR:[-.267,.115,.024],aR:[-.267,.022,.024],handRDir:[.7,.35,.6],handLDir:[.2,-.4,.9]}),Tr=Bo({pelvis:[-.235,.19,.17],neck:[-.232,.295,.172],head:[-.23,.336,.176],headLook:[-.2,.25,.26],sL:[-.196,.283,.172],eL:[-.178,.234,.19],wL:[-.15,.244,.218],sR:[-.272,.283,.172],eR:[-.285,.232,.195],wR:[-.232,.245,.225],hL:[-.215,.183,.17],kL:[-.212,.115,.176],aL:[-.21,.022,.178],hR:[-.255,.183,.17],kR:[-.258,.115,.172],aR:[-.26,.022,.17],handRDir:[.75,.3,.6],handLDir:[.55,-.15,.82]});function mo(i,t,e,n){for(const s of Object.keys(i))n[s].lerpVectors(i[s],t[s],e);return zo(n)}function go(i,t,e,n){const s=Bt.smoothstep(e,0,.58),r=Bt.smoothstep(e,.42,1);for(const a of Object.keys(i))if(a==="handLDir"||a==="handRDir")n[a].lerpVectors(i[a],t[a],e).normalize();else{const o=a==="kL"||a==="aL"||a==="kR"||a==="aR",l=e<.25?Bt.lerp(i[a].z,.052,Bt.smoothstep(e,0,.25)):e<.62?.052:Bt.lerp(.052,t[a].z,Bt.smoothstep(e,.62,1));n[a].set(Bt.lerp(i[a].x,t[a].x,s),Bt.lerp(i[a].y,t[a].y,e),o?l:Bt.lerp(i[a].z,t[a].z,r))}return zo(n)}function Mn(i){const t={};for(const e of Object.keys(i))t[e]=i[e].clone();return t}const En={halfWidth:.0092,halfLength:.011,halfDepth:.0047,centerY:.0095},xg=.0165,vg=[{name:"index",radialPosition:.0063,length:.0083,radius:.00205,splay:.07},{name:"middle",radialPosition:.0021,length:.0098,radius:.0021,splay:.015},{name:"ring",radialPosition:-.0021,length:.0089,radius:.002,splay:-.015},{name:"little",radialPosition:-.0062,length:.0068,radius:.0018,splay:-.1}];function Je(i,t,e){i.name=`hand:${t}:${e}`,i.userData.handSide=t,i.userData.handPart=e}function jl(i){return i.matrixWorld.elements.every(Number.isFinite)}class Ql{constructor(t,e){U(this,"group",new fe);U(this,"palmNode",new fe);U(this,"palm");U(this,"thumb",new fe);U(this,"fingers",[]);U(this,"contactSurfaces",[]);U(this,"side");U(this,"thumbTipLocal");U(this,"thumbContactLocal");U(this,"thumbRadius",.00255);U(this,"thumbShaftLength",.0054);U(this,"palmContactLocal",new b(0,.0105,En.halfDepth));this.side=e;const n=e==="L"?-1:1;Je(this.group,e,"root"),Je(this.palmNode,e,"palm"),this.group.add(this.palmNode),this.palm=new Z(new ue(1,28,20),t),this.palm.scale.set(En.halfWidth,En.halfLength,En.halfDepth),this.palm.position.y=En.centerY,this.palm.castShadow=!0,this.palm.receiveShadow=!0,Je(this.palm,e,"palm-volume"),this.palmNode.add(this.palm);const s=new Ot({color:"#dda995",roughness:.82}),r=new Z(new ue(1,16,10),t);r.scale.set(.0038,.0056,.0011),r.position.set(n*.0045,.0088,.0041),Je(r,e,"thenar-pad"),this.palmNode.add(r);const a=new No(new b(-n*.0048,.0062,.00375),new b(0,.0113,.00465),new b(n*.0042,.0145,.00375)),o=new Z(new Rr(a,12,32e-5,5,!1),s);Je(o,e,"palm-crease"),this.palmNode.add(o);const l=t,c=new Z(new ue(1,16,10),l);c.scale.set(.0045,.0052,8e-5),c.position.copy(this.palmContactLocal),c.position.z-=32e-5,Je(c,e,"contact:palm"),this.palmNode.add(c),this.contactSurfaces.push(c);const h=new Ot({color:"#f5bdaf",roughness:.6});for(const f of vg){const m=f.radialPosition*n,S=new fe;S.position.set(m,xg,0),S.rotation.z=-f.splay*n,Je(S,e,`finger:${f.name}`),this.palmNode.add(S);const x=f.length+f.radius*2,v=new Z(new Ki(f.radius,f.length,5,12),t);v.position.y=x/2,v.castShadow=!0,v.receiveShadow=!0,Je(v,e,`finger:${f.name}:volume`),S.add(v);const A=new Z(new ue(1,12,8),h);A.scale.set(f.radius*.58,f.radius*.72,28e-5),A.position.set(0,x-f.radius*.9,-f.radius*.88),Je(A,e,`finger:${f.name}:nail`),S.add(A);const E=new b(0,x-f.radius*.9,f.radius*.88),R=new Z(new ue(1,12,8),l);R.scale.set(f.radius*.56,f.radius*.7,22e-5),R.position.copy(E),Je(R,e,`contact:finger:${f.name}`),S.add(R),this.contactSurfaces.push(R);const P=S.position.clone().add(new b(0,x,0).applyQuaternion(S.quaternion));this.fingers.push({name:f.name,group:S,body:v,tipLocal:P,contactLocal:S.position.clone().add(E.clone().applyQuaternion(S.quaternion)),length:x,radius:f.radius,shaftLength:f.length})}Je(this.thumb,e,"thumb"),this.thumb.position.set(n*.0062,.0068,3e-4),this.thumb.rotation.set(-.12,0,-n*.72),this.palmNode.add(this.thumb);const u=this.thumbShaftLength+this.thumbRadius*2,d=new Z(new Ki(this.thumbRadius,this.thumbShaftLength,5,12),t);d.position.y=u/2,d.castShadow=!0,d.receiveShadow=!0,Je(d,e,"thumb:volume"),this.thumb.add(d);const p=new Z(new ue(1,12,8),h);p.scale.set(this.thumbRadius*.62,this.thumbRadius*.72,3e-4),p.position.set(0,u-this.thumbRadius,-this.thumbRadius*.9),Je(p,e,"thumb:nail"),this.thumb.add(p);const g=new Z(new ue(1,12,8),l),y=new b(0,u-this.thumbRadius,this.thumbRadius*.9);g.scale.set(this.thumbRadius*.58,this.thumbRadius*.68,24e-5),g.position.copy(y),Je(g,e,"contact:thumb"),this.thumb.add(g),this.contactSurfaces.push(g),this.thumbTipLocal=this.thumb.position.clone().add(new b(0,u,0).applyQuaternion(this.thumb.quaternion)),this.thumbContactLocal=this.thumb.position.clone().add(y.applyQuaternion(this.thumb.quaternion))}localLandmarks(){return{wrist:new b,palm:new b(0,En.centerY,0),thumb:this.thumbTipLocal.clone(),fingers:Object.fromEntries(this.fingers.map(t=>[t.name,t.tipLocal.clone()])),contact:{palm:this.palmContactLocal.clone(),thumb:this.thumbContactLocal.clone(),fingers:Object.fromEntries(this.fingers.map(t=>[t.name,t.contactLocal.clone()]))}}}worldLandmarks(){this.group.updateWorldMatrix(!0,!0);const t=this.localLandmarks(),e=n=>this.group.localToWorld(n.clone());return{wrist:e(t.wrist),palm:e(t.palm),thumb:e(t.thumb),fingers:Object.fromEntries(Object.entries(t.fingers).map(([n,s])=>[n,e(s)])),contact:{palm:e(t.contact.palm),thumb:e(t.contact.thumb),fingers:Object.fromEntries(Object.entries(t.contact.fingers).map(([n,s])=>[n,e(s)]))}}}worldCollisionVolumes(){this.group.updateWorldMatrix(!0,!0);const t=(n,s)=>n.localToWorld(s.clone()),e=[{id:"palm",a:t(this.palmNode,new b(0,.004,0)),b:t(this.palmNode,new b(0,.015,0)),radius:En.halfDepth}];for(const n of this.fingers)e.push({id:`finger:${n.name}`,a:t(n.group,new b(0,n.radius,0)),b:t(n.group,new b(0,n.radius+n.shaftLength,0)),radius:n.radius});return e.push({id:"thumb",a:t(this.thumb,new b(0,this.thumbRadius,0)),b:t(this.thumb,new b(0,this.thumbRadius+this.thumbShaftLength,0)),radius:this.thumbRadius}),e}audit(t){this.group.updateWorldMatrix(!0,!0);const e=[],n=this.side==="L"?-1:1;this.palmNode.parent!==this.group&&e.push("hierarchy:palm"),this.thumb.parent!==this.palmNode&&e.push("hierarchy:thumb"),this.fingers.length!==4&&e.push(`finger-count:${this.fingers.length}`),this.contactSurfaces.length!==6&&e.push(`contact-surface-count:${this.contactSurfaces.length}`);for(const c of this.contactSurfaces)(!c.visible||!c.parent)&&e.push(`contact-surface:${c.name}:detached`),jl(c)||e.push(`contact-surface:${c.name}:non-finite`);Math.sign(this.thumb.position.x)!==n&&e.push("thumb:wrong-side");const s=new Set(this.fingers.map(c=>c.name));for(const c of["index","middle","ring","little"])s.has(c)||e.push(`finger-missing:${c}`);for(const c of this.fingers)c.group.parent!==this.palmNode&&e.push(`hierarchy:${c.name}`),(c.group.position.y>En.centerY+En.halfLength||Math.abs(c.group.position.x)>En.halfWidth)&&e.push(`disconnected:${c.name}`);[this.group,this.palmNode,this.palm,this.thumb,...this.fingers.flatMap(c=>[c.group,c.body])].every(jl)||e.push("transform:non-finite");const r=this.fingers.map(c=>c.tipLocal.x).sort((c,h)=>c-h);let a=1/0;for(let c=1;c<r.length;c++)a=Math.min(a,r[c]-r[c-1]);a<.0028&&e.push(`fingers:fused:${a.toFixed(5)}`);const o=this.worldLandmarks();let l=null;if(t){t.updateMatrixWorld(!0),t.updateProjectionMatrix();const c=[o.thumb,...Object.values(o.fingers)].map(p=>p.clone().project(t)),h=c.map(p=>p.x),u=c.map(p=>p.y);let d=1/0;for(let p=0;p<c.length;p++)for(let g=p+1;g<c.length;g++)d=Math.min(d,c[p].distanceTo(c[g]));l={x:Math.max(...h)-Math.min(...h),y:Math.max(...u)-Math.min(...u),minDigitSeparation:d},Math.max(l.x,l.y)<.02&&e.push("silhouette:collapsed"),d<.004&&e.push(`silhouette:digits-fused:${d.toFixed(5)}`)}return{ok:e.length===0,issues:e,side:this.side,structuralParts:6,contactSurfaceCount:this.contactSurfaces.length,fingerCount:this.fingers.length,minFingerSeparation:a,wristOverlap:.0014999999999999996,projectedSpan:l,landmarks:{wrist:o.wrist.toArray(),palm:o.palm.toArray(),thumb:o.thumb.toArray(),fingers:Object.fromEntries(Object.entries(o.fingers).map(([c,h])=>[c,h.toArray()])),contact:{palm:o.contact.palm.toArray(),thumb:o.contact.thumb.toArray(),fingers:Object.fromEntries(Object.entries(o.contact.fingers).map(([c,h])=>[c,h.toArray()]))}}}}}function Mg(i,t){const e=[],n=i.localLandmarks(),s=t.localLandmarks(),r=(o,l,c)=>{const h=l.clone();h.x*=-1;const u=h.distanceTo(c);return u>1e-6&&e.push(`${o}:${u.toFixed(6)}`),u},a=[r("palm",n.palm,s.palm),r("thumb",n.thumb,s.thumb)];for(const o of["index","middle","ring","little"])a.push(r(o,n.fingers[o],s.fingers[o])),a.push(r(`contact:${o}`,n.contact.fingers[o],s.contact.fingers[o]));return a.push(r("contact:palm",n.contact.palm,s.contact.palm)),a.push(r("contact:thumb",n.contact.thumb,s.contact.thumb)),{ok:e.length===0,issues:e,maxLandmarkError:Math.max(...a)}}function tc(i,t,e){const n=new b().subVectors(i,t).normalize(),s=new b().subVectors(e,t).normalize();return Bt.radToDeg(Math.acos(Bt.clamp(n.dot(s),-1,1)))}function Yc(i,t,e,n){const s=new b().subVectors(t,i),r=new b().subVectors(n,e),a=new b().subVectors(i,e),o=s.dot(s),l=r.dot(r),c=r.dot(a);let h=0,u=0;if(o<=1e-12&&l<=1e-12)return i.distanceTo(e);if(o<=1e-12)u=Bt.clamp(c/l,0,1);else{const g=s.dot(a);if(l<=1e-12)h=Bt.clamp(-g/o,0,1);else{const y=s.dot(r),f=o*l-y*y;f!==0&&(h=Bt.clamp((y*c-g*l)/f,0,1)),u=(y*h+c)/l,u<0?(u=0,h=Bt.clamp(-g/o,0,1)):u>1&&(u=1,h=Bt.clamp((y-g)/o,0,1))}}const d=new b().copy(i).addScaledVector(s,h),p=new b().copy(e).addScaledVector(r,u);return d.distanceTo(p)}function yg(){const i=new Map([["pelvis",null],["torso","pelvis"],["neck","torso"],["head","neck"]]);for(const t of["L","R"])i.set(`${t}:shoulder`,"torso"),i.set(`${t}:upperArm`,`${t}:shoulder`),i.set(`${t}:elbow`,`${t}:upperArm`),i.set(`${t}:forearm`,`${t}:elbow`),i.set(`${t}:wrist`,`${t}:forearm`),i.set(`${t}:hand`,`${t}:wrist`),i.set(`${t}:hip`,"pelvis"),i.set(`${t}:thigh`,`${t}:hip`),i.set(`${t}:knee`,`${t}:thigh`),i.set(`${t}:lowerLeg`,`${t}:knee`),i.set(`${t}:ankle`,`${t}:lowerLeg`),i.set(`${t}:foot`,`${t}:ankle`);return i}function Sg(i,t){const e=i.pose,n=i.hands[t],s=n.group.getWorldQuaternion(new Re),r=new b(0,1,0).applyQuaternion(s).normalize(),a=new b(0,0,1).applyQuaternion(s).normalize(),o=new b().subVectors(e[`w${t}`],e[`e${t}`]).normalize(),l=e[`hand${t}Dir`].clone().addScaledVector(r,-e[`hand${t}Dir`].dot(r));l.lengthSq()>1e-10&&l.normalize();const c=Bt.radToDeg(Math.acos(Bt.clamp(r.dot(o),-1,1))),h=l.lengthSq()<1e-10?0:Bt.radToDeg(Math.acos(Bt.clamp(a.dot(l),-1,1))),u=n.worldLandmarks().wrist.distanceTo(e[`w${t}`]),d=[];return c>25&&d.push(`wrist-angle:${c.toFixed(2)}`),h>3&&d.push(`palm-orientation:${h.toFixed(2)}`),u>15e-5&&d.push(`wrist-continuity:${u.toFixed(6)}`),{ok:d.length===0,issues:d,wristAngle:c,palmNormalError:h,wristContinuity:u}}function wg(i){const t=[{id:"torso",a:i.pelvis,b:i.neck,nominal:.105,start:"torso",end:"neck",radius:.018}];for(const e of["L","R"])t.push({id:`${e}:upperArm`,a:i[`s${e}`],b:i[`e${e}`],nominal:mn.upperArm,start:`${e}:upperArm`,end:`${e}:elbow`,radius:.0115},{id:`${e}:forearm`,a:i[`e${e}`],b:i[`w${e}`],nominal:mn.forearm,start:`${e}:forearm`,end:`${e}:wrist`,radius:.0105},{id:`${e}:thigh`,a:i[`h${e}`],b:i[`k${e}`],nominal:mn.thigh,start:`${e}:thigh`,end:`${e}:knee`,radius:.012},{id:`${e}:lowerLeg`,a:i[`k${e}`],b:i[`a${e}`],nominal:mn.lowerLeg,start:`${e}:lowerLeg`,end:`${e}:ankle`,radius:.01});return t}function bg(i,t){const e=[...i];for(const s of["L","R"]){const r=t.hands[s],a=r.group.localToWorld(new b),o=r.group.localToWorld(new b(0,.031,0));e.push({id:`${s}:hand`,a,b:o,radius:.0058})}const n=[];for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){const a=e[s],o=e[r],l=a.id.match(/^([LR]):/)?.[1],c=o.id.match(/^([LR]):/)?.[1],u=l!==void 0&&l===c&&(a.id.includes("upperArm")&&o.id.includes("forearm")||a.id.includes("forearm")&&o.id.includes("hand")||a.id.includes("thigh")&&o.id.includes("lowerLeg")),d=(a.id==="torso"||o.id==="torso")&&(a.id.includes("upperArm")||o.id.includes("upperArm")||a.id.includes("thigh")||o.id.includes("thigh"));if(u||d)continue;const p=Yc(a.a,a.b,o.a,o.b)-a.radius-o.radius;p<-.0015&&n.push(`${a.id}/${o.id}:${p.toFixed(5)}`)}return n}function Eg(i){const t=i.hands.L.worldCollisionVolumes(),e=i.hands.R.worldCollisionVolumes(),n=[];let s=1/0;for(const r of t)for(const a of e){const o=Yc(r.a,r.b,a.a,a.b)-r.radius-a.radius;s=Math.min(s,o),o<-5e-4&&n.push(`${r.id}/${a.id}:${o.toFixed(5)}`)}return{ok:n.length===0,collisions:n,minClearance:s}}function Tg(i,t){i.group.updateMatrixWorld(!0);const e=[],n=yg(),s=f=>i.nodes.get(f).getWorldPosition(new b);for(const[f,m]of n){const S=i.nodes.get(f),x=i.meshes.get(f);if(!S||!x){e.push(`missing:${f}`);continue}const v=S.parent?.userData.anatomyId??null;v!==m&&e.push(`parent:${f}:${v??"none"}!=${m??"root"}`),S.matrixWorld.elements.every(Number.isFinite)||e.push(`transform:${f}:non-finite`);let A=!0,E=!1,R=x;for(x.traverse(P=>{P.isMesh&&P.visible&&(E=!0)});R;)A=A&&R.visible,R=R.parent;(!A||!E)&&e.push(`visibility:${f}`)}const r=wg(i.pose);let a=0,o=0;for(const f of r){const m=Math.abs(f.a.distanceTo(f.b)-f.nominal),S=Math.max(s(f.start).distanceTo(f.a),s(f.end).distanceTo(f.b));a=Math.max(a,m),o=Math.max(o,S),m>15e-5&&e.push(`length:${f.id}:${m.toFixed(6)}`),S>15e-5&&e.push(`continuity:${f.id}:${S.toFixed(6)}`)}const l={};for(const f of["L","R"]){const m=tc(i.pose[`s${f}`],i.pose[`e${f}`],i.pose[`w${f}`]),S=tc(i.pose[`h${f}`],i.pose[`k${f}`],i.pose[`a${f}`]);l[`${f}:elbow`]=m,l[`${f}:knee`]=S,(m<15||m>175)&&e.push(`range:${f}:elbow:${m.toFixed(2)}`),(S<20||S>178)&&e.push(`range:${f}:knee:${S.toFixed(2)}`)}const c={};for(const f of["L","R"]){const m=i.hands[f].audit(t),S=Sg(i,f);c[f]={...m,orientation:S},e.push(...m.issues.map(x=>`hand:${f}:${x}`)),e.push(...S.issues.map(x=>`hand:${f}:${x}`))}const h=Mg(i.hands.L,i.hands.R);e.push(...h.issues.map(f=>`hand:symmetry:${f}`));const u=Eg(i);e.push(...u.collisions.map(f=>`hand:embedding:${f}`));const d=bg(r,i);e.push(...d.map(f=>`collision:${f}`));const p=new Zn().setFromObject(i.group),g=p.getSize(new b);(g.x<.07||g.y<.22||g.z<.04)&&e.push(`silhouette:collapsed:${g.toArray().map(f=>f.toFixed(3)).join(",")}`);for(const f of[["L:shoulder","R:shoulder"],["L:hip","R:hip"],["L:ankle","R:ankle"]])s(f[0]).distanceTo(s(f[1]))<.015&&e.push(`silhouette:duplicate:${f.join("/")}`);let y=null;if(t){t.updateMatrixWorld(!0),t.updateProjectionMatrix(),y=1/0;for(const f of n.keys()){const m=s(f),S=m.clone().applyMatrix4(t.matrixWorldInverse);y=Math.min(y,-S.z-t.near);const x=m.clone().project(t);(Math.abs(x.x)>1.02||Math.abs(x.y)>1.02||x.z<-1||x.z>1)&&e.push(`camera-clip:${f}`)}y<.002&&e.push(`near-plane:${y.toFixed(5)}`)}return{ok:e.length===0,issues:e,partCount:n.size,hierarchyCount:i.nodes.size,handPartCount:c.L.structuralParts+c.R.structuralParts,hands:c,handSymmetry:h,handEmbedding:u,maxBoneError:a,maxContinuityError:o,angles:l,collisions:d,bounds:{min:p.min.toArray(),max:p.max.toArray(),size:g.toArray()},cameraClearance:y}}class Ag{constructor(){U(this,"group",new fe);U(this,"pose",Mn(Rn));U(this,"forearm");U(this,"torso");U(this,"neck");U(this,"head");U(this,"skirt");U(this,"pelvisBody");U(this,"uL");U(this,"fL");U(this,"uR");U(this,"hR");U(this,"hL");U(this,"tL");U(this,"tR");U(this,"sL");U(this,"sR");U(this,"shoeL");U(this,"shoeR");U(this,"jointR");U(this,"jointL");U(this,"kneeL");U(this,"kneeR");U(this,"shL");U(this,"shR");U(this,"hipL");U(this,"hipR");U(this,"wristL");U(this,"wristR");U(this,"ankleL");U(this,"ankleR");U(this,"lfGroup");U(this,"nodes",new Map);U(this,"meshes",new Map);U(this,"faceTex");U(this,"faceC",tn(1024,512));U(this,"mood",0);U(this,"blink",0);U(this,"skinMat");const t=this.group;this.skinMat=new Qe({color:"#f7cdb6",roughness:.62,metalness:0,clearcoat:.08,clearcoatRoughness:.6,sheen:.15,sheenColor:new Zt("#ffd9c8")});const e=this.skinMat,n=Ie(ts(256,"#f6ecd0","#e2d3a8","#fff8e6",32),!0,3),s=Ie(Lr(256,32),!1,3),r=new Ot({map:n,bumpMap:s,bumpScale:6e-4,roughness:.9}),a=(D,F)=>{const G=new Z(D,F);return G.castShadow=!0,G.receiveShadow=!0,t.add(G),G},o=po(.105,D=>.031-.009*Math.sin(D*Math.PI*.9)*(1-D)+.006*Math.pow(D,3)*(D<.9?1:(1-D)*10)+.004*D*D,30,32);o.scale(1,1,.68),this.torso=a(o,r),this.pelvisBody=a(new ue(1,28,20),e),this.pelvisBody.scale.set(.035,.024,.022);const l=new Z(new wr(.035,40),r);l.rotation.x=-Math.PI/2,l.scale.y=.68,l.position.y=.1049,l.receiveShadow=!0,this.torso.add(l);const c=new Z(new wr(.031,40),r);c.rotation.x=Math.PI/2,c.scale.y=.68,c.position.y=1e-4,c.receiveShadow=!0,this.torso.add(c);const h=new Z(new Xn(.0145,.0025,10,28),r);h.rotation.x=Math.PI/2,h.scale.set(1,1,.8),h.position.y=.101,h.castShadow=!0,this.torso.add(h);const u=new Z(new Xn(.03,.002,8,32),r);u.rotation.x=Math.PI/2,u.scale.set(1,1,.68),u.position.y=.006,this.torso.add(u),this.neck=a(new Ce(.0105,.012,.03,20),e);const d=new ue(.033,48,36),p=d.attributes.position;for(let D=0;D<p.count;D++){const F=p.getX(D),G=p.getY(D),H=p.getZ(D),V=G/.033,z=V<0?1-.22*-V*-V:1,et=1+.05*Math.max(0,H/.033)*(1-V*V);p.setXYZ(D,F*z*et,G*(V>0?1.06:1),H*z*(V<-.3?.92:1))}d.computeVertexNormals(),this.faceTex=Ie(this.faceC.c),this.faceTex.wrapS=Oe;const g=new Qe({map:this.faceTex,roughness:.6,clearcoat:.1,clearcoatRoughness:.5,sheen:.15,sheenColor:new Zt("#ffd9c8")});this.head=new fe;const y=new Z(d,g);y.castShadow=!0,y.receiveShadow=!0,this.head.add(y);for(const D of[-1,1]){const F=new Z(new ue(.007,12,10),e);F.scale.set(.6,1,.9),F.position.set(D*.031,-.002,-.002),this.head.add(F)}const f=new Qe({color:"#7a4a2c",roughness:.45,clearcoat:.35,clearcoatRoughness:.35,sheen:.3,sheenColor:new Zt("#c98a5c")}),m=new Z(new ue(.0355,40,28,0,Math.PI*2,0,Math.PI*.5),f);m.position.set(0,.0055,-.0035),m.scale.set(1.02,1,1.02),m.castShadow=!0,this.head.add(m);const S=new Z(new ue(.036,32,24,Math.PI*1.02,Math.PI*.96,Math.PI*.3,Math.PI*.5),f);S.scale.set(1,1.35,1),S.position.set(0,-.012,-.004),S.castShadow=!0,this.head.add(S);for(const D of[-1,1]){const F=new Z(new Ki(.011,.03,6,14),f);F.position.set(D*.031,-.02,-.006),F.rotation.z=D*.12,F.scale.set(.8,1,1),F.castShadow=!0,this.head.add(F)}const x=new Z(new ue(.0362,40,20,Math.PI*.05,Math.PI*.9,Math.PI*.2,Math.PI*.27),f);x.position.set(0,.004,-.002),x.scale.set(1,1.02,1),x.castShadow=!0,this.head.add(x);for(const D of[-1,1]){const F=new Z(new Ki(.0055,.012,6,12),f);F.position.set(D*.024,.008,.022),F.rotation.z=D*.55,F.rotation.x=-.25,F.castShadow=!0,this.head.add(F)}const v=new Z(new Fo(.005,.0022,40,8,2,3),new Ot({color:"#f2a58f",roughness:.6}));v.position.set(.024,.026,.006),v.castShadow=!0,this.head.add(v),t.add(this.head),this.drawFace(),this.uL=a(di(.055,.0125,.0115),r),this.uR=a(di(.055,.0125,.0115),r),this.shL=a(new ue(.0135,20,16),r),this.shR=a(new ue(.0135,20,16),r);const A=new fe,E=new Z(di(.058,.0122,.0105),r);E.castShadow=!0,A.add(E);const R=new Z(new Xn(.0115,.0028,12,32),r);R.rotation.x=Math.PI/2,R.position.y=.05,A.add(R),this.fL=E,this.lfGroup=A,t.add(A),this.forearm=new gg(new b(.25,.75,.62).normalize()),t.add(this.forearm.group),this.jointR=a(new ue(.0092,18,14),e),this.jointL=a(new ue(.0092,18,14),r),this.wristR=a(new ue(.0081,18,14),e),this.wristL=a(new ue(.0081,18,14),e),this.hR=new Ql(e,"R"),this.hL=new Ql(e,"L"),t.add(this.hR.group,this.hL.group);const P=new Ot({color:"#bcd3ea",roughness:.85});this.hipL=a(new ue(.013,18,14),e),this.hipR=a(new ue(.013,18,14),e),this.tL=a(di(.07,.0135,.0115),e),this.tR=a(di(.07,.0135,.0115),e),this.kneeL=a(new ue(.0115,16,12),P),this.kneeR=a(new ue(.0115,16,12),P),this.sL=a(di(.1,.0115,.0085),P),this.sR=a(di(.1,.0115,.0085),P),this.ankleL=a(new ue(.0087,16,12),P),this.ankleR=a(new ue(.0087,16,12),P);const M=new Qe({color:"#e98a72",roughness:.35,clearcoat:.5});this.shoeL=a(Ke(.017,.014,.034,.006,3),M),this.shoeR=a(Ke(.017,.014,.034,.006,3),M);const w=tn(256,128);w.ctx.fillStyle="#9fd6c6",w.ctx.fillRect(0,0,256,128);for(let D=0;D<16;D++)w.ctx.fillStyle=D%2?"rgba(255,255,255,0.14)":"rgba(60,120,105,0.14)",w.ctx.fillRect(D*16,0,16,128);w.ctx.fillStyle="#f2a58f",w.ctx.fillRect(0,118,256,10);const I=new Ot({map:Ie(w.c,!0,1),roughness:.9,side:Le});I.map.repeat.set(3,1),this.skirt=a(po(.075,D=>.035+.027*D+.0025*Math.sin(D*Math.PI*12)*D,16,48),I),this.setupHierarchy(),this.applyPose()}makeNode(t,e){const n=new fe;return n.name=`anatomy:${t}`,n.userData.anatomyId=t,e.add(n),this.nodes.set(t,n),n}setupHierarchy(){const t=this.makeNode("pelvis",this.group),e=this.makeNode("torso",t),n=this.makeNode("neck",e),s=this.makeNode("head",n);t.add(this.pelvisBody),e.add(this.torso),n.add(this.neck),s.add(this.head),this.meshes.set("pelvis",this.pelvisBody),this.meshes.set("torso",this.torso),this.meshes.set("neck",this.neck),this.meshes.set("head",this.head);for(const r of["L","R"]){const a=this.makeNode(`${r}:shoulder`,e),o=this.makeNode(`${r}:upperArm`,a),l=this.makeNode(`${r}:elbow`,o),c=this.makeNode(`${r}:forearm`,l),h=this.makeNode(`${r}:wrist`,c),u=this.makeNode(`${r}:hand`,h),d=r==="L"?this.shL:this.shR,p=r==="L"?this.uL:this.uR,g=r==="L"?this.jointL:this.jointR,y=r==="L"?this.lfGroup:this.forearm.group,f=r==="L"?this.wristL:this.wristR,m=(r==="L"?this.hL:this.hR).group;a.add(d),o.add(p),l.add(g),c.add(y),h.add(f),u.add(m),this.meshes.set(`${r}:shoulder`,d),this.meshes.set(`${r}:upperArm`,p),this.meshes.set(`${r}:elbow`,g),this.meshes.set(`${r}:forearm`,y),this.meshes.set(`${r}:wrist`,f),this.meshes.set(`${r}:hand`,m);const S=this.makeNode(`${r}:hip`,t),x=this.makeNode(`${r}:thigh`,S),v=this.makeNode(`${r}:knee`,x),A=this.makeNode(`${r}:lowerLeg`,v),E=this.makeNode(`${r}:ankle`,A),R=this.makeNode(`${r}:foot`,E),P=r==="L"?this.hipL:this.hipR,M=r==="L"?this.tL:this.tR,w=r==="L"?this.kneeL:this.kneeR,I=r==="L"?this.sL:this.sR,D=r==="L"?this.ankleL:this.ankleR,F=r==="L"?this.shoeL:this.shoeR;S.add(P),x.add(M),v.add(w),A.add(I),E.add(D),R.add(F),this.meshes.set(`${r}:hip`,P),this.meshes.set(`${r}:thigh`,M),this.meshes.set(`${r}:knee`,w),this.meshes.set(`${r}:lowerLeg`,I),this.meshes.set(`${r}:ankle`,D),this.meshes.set(`${r}:foot`,F)}}drawFace(){const{ctx:t}=this.faceC,e=1024,n=512,s=this.mood;t.clearRect(0,0,e,n),t.fillStyle="#f7cdb6",t.fillRect(0,0,e,n);const r=e*.25,a=n*.5;for(const c of[-1,1]){const h=t.createRadialGradient(r+c*78,a+42,4,r+c*78,a+42,44);h.addColorStop(0,`rgba(245,150,140,${.35+s*.15})`),h.addColorStop(1,"rgba(245,150,140,0)"),t.fillStyle=h,t.beginPath(),t.arc(r+c*78,a+42,44,0,Math.PI*2),t.fill()}const o=this.blink;for(const c of[-1,1]){const h=r+c*46,u=a-8+(1-s)*4,d=40*(1-o*.9),p=27;t.fillStyle="#fbfbfb",t.beginPath(),t.ellipse(h,u,p,d,0,0,Math.PI*2),t.fill(),t.fillStyle="#5a7a6a",t.beginPath(),t.ellipse(h+c*(1-s)*3,u+3+(1-s)*3,19,Math.min(d,30)*(1-o*.9),0,0,Math.PI*2),t.fill(),t.fillStyle="#2b2b30",t.beginPath(),t.ellipse(h+c*(1-s)*3,u+4+(1-s)*3,12,Math.min(d,21)*(1-o*.9),0,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,255,255,0.95)",t.beginPath(),t.arc(h-6*c+2,u-8,6*(1-o),0,Math.PI*2),t.fill(),t.beginPath(),t.arc(h+6*c,u+8,3*(1-o),0,Math.PI*2),t.fill(),t.strokeStyle="#4a3a34",t.lineWidth=4,t.lineCap="round",t.beginPath(),t.ellipse(h,u,p+1,d+1,0,Math.PI*1.1,Math.PI*1.9),t.stroke(),t.beginPath(),t.moveTo(h+c*26,u-14),t.lineTo(h+c*34,u-22),t.stroke();const g=u-58;t.strokeStyle="#6a4632",t.lineWidth=5,t.beginPath(),t.moveTo(h-c*26,g+6-(1-s)*8),t.quadraticCurveTo(h,g-8+(1-s)*2,h+c*24,g+2+(1-s)*2),t.stroke()}t.fillStyle="rgba(200,130,110,0.6)",t.beginPath(),t.arc(r-4,a+24,2.5,0,Math.PI*2),t.arc(r+4,a+24,2.5,0,Math.PI*2),t.fill(),t.strokeStyle="#d36f6a",t.lineWidth=5,t.lineCap="round",t.beginPath();const l=a+52;if(s<.5){const c=1-s*2;t.ellipse(r,l,7+4*(1-c),8*c+2,0,0,Math.PI*2)}else{const c=(s-.5)*2;t.moveTo(r-14-6*c,l-2),t.quadraticCurveTo(r,l+8+10*c,r+14+6*c,l-2)}t.stroke(),this.faceTex.needsUpdate=!0}setMood(t){Math.abs(t-this.mood)>.01&&(this.mood=t,this.drawFace())}setBlink(t){Math.abs(t-this.blink)>.05&&(this.blink=t,this.drawFace())}worldQuaternionFromYZ(t,e){const n=t.clone().normalize(),s=e.clone().addScaledVector(n,-e.dot(n));s.lengthSq()<1e-10&&s.set(0,0,1).addScaledVector(n,-n.z),s.normalize();const r=new b().crossVectors(n,s).normalize();return new Re().setFromRotationMatrix(new oe().makeBasis(r,n,s))}setWorldPose(t,e,n){const s=t.parent;s.updateWorldMatrix(!0,!1),t.position.copy(e).applyMatrix4(new oe().copy(s.matrixWorld).invert());const r=s.getWorldQuaternion(new Re);t.quaternion.copy(r.invert().multiply(n)),t.scale.setScalar(1),t.updateMatrixWorld(!0)}placeSegment(t,e,n,s,r){const a=new b().subVectors(s,n),o=a.length();this.setWorldPose(t,n,pg(a)),e.position.set(0,0,0),e.quaternion.identity(),e.scale.set(1,o/r,1)}applyPose(){const t=zo(this.pose),e=new b().subVectors(t.sL,t.sR).normalize(),n=new b().subVectors(t.neck,t.pelvis).normalize(),s=new b().crossVectors(e,n).normalize(),r=new Re().setFromRotationMatrix(new oe().makeBasis(e,n,s)),a=this.nodes.get("pelvis");this.setWorldPose(a,t.pelvis,new Re),this.pelvisBody.position.set(0,.004,0),this.pelvisBody.scale.set(.032,.024,.021);const o=this.nodes.get("torso");this.setWorldPose(o,t.pelvis,r),this.torso.position.set(0,0,0),this.torso.quaternion.identity(),this.torso.scale.set(1,t.pelvis.distanceTo(t.neck)/.105,1);const l=this.nodes.get("neck");this.setWorldPose(l,t.neck,this.worldQuaternionFromYZ(new b().subVectors(t.head,t.neck),s)),this.neck.position.set(0,.012,0),this.neck.quaternion.identity(),this.neck.scale.set(1,.8,1);const c=new b().subVectors(t.headLook,t.head).normalize(),h=new b(c.x,c.y*.5,c.z).normalize(),u=new b().crossVectors(new b(0,1,0),h).normalize(),d=new b().crossVectors(h,u).normalize(),p=new Re().setFromRotationMatrix(new oe().makeBasis(u,d,h));this.setWorldPose(this.nodes.get("head"),t.head,p),this.head.position.set(0,0,0),this.head.quaternion.identity(),this.head.scale.setScalar(1),this.skirt.position.copy(t.pelvis);const g=new b().addVectors(t.kL,t.kR).multiplyScalar(.5),y=new b().subVectors(g,t.pelvis);y.y-=.05,this.skirt.quaternion.setFromUnitVectors(new b(0,1,0),y.normalize()),this.skirt.position.y+=.012;for(const f of["L","R"]){const m=t[`s${f}`],S=t[`e${f}`],x=t[`w${f}`],v=f==="L"?this.uL:this.uR,A=f==="L"?this.lfGroup:this.forearm.group,E=(f==="L"?this.hL:this.hR).group;this.setWorldPose(this.nodes.get(`${f}:shoulder`),m,r),this.placeSegment(this.nodes.get(`${f}:upperArm`),v,m,S,mn.upperArm),this.setWorldPose(this.nodes.get(`${f}:elbow`),S,new Re),this.placeSegment(this.nodes.get(`${f}:forearm`),A,S,x,mn.forearm),this.setWorldPose(this.nodes.get(`${f}:wrist`),x,new Re);const R=new b().subVectors(x,S).normalize(),P=e.clone().multiplyScalar(f==="L"?1:-1);P.addScaledVector(R,-P.dot(R)),P.lengthSq()>1e-10&&P.normalize();const M=R.clone().addScaledVector(P,Math.tan(Bt.degToRad(14))).normalize();this.setWorldPose(this.nodes.get(`${f}:hand`),x,this.worldQuaternionFromYZ(M,t[`hand${f}Dir`])),E.position.set(0,0,0),E.quaternion.identity(),E.scale.setScalar(1);const w=t[`h${f}`],I=t[`k${f}`],D=t[`a${f}`],F=f==="L"?this.tL:this.tR,G=f==="L"?this.sL:this.sR,H=f==="L"?this.shoeL:this.shoeR;this.setWorldPose(this.nodes.get(`${f}:hip`),w,new Re),this.placeSegment(this.nodes.get(`${f}:thigh`),F,w,I,mn.thigh),this.setWorldPose(this.nodes.get(`${f}:knee`),I,new Re),this.placeSegment(this.nodes.get(`${f}:lowerLeg`),G,I,D,mn.lowerLeg),this.setWorldPose(this.nodes.get(`${f}:ankle`),D,new Re);const V=Bt.smoothstep(-D.x,.08,.13)*(1-Bt.smoothstep(-D.x,.18,.23)),z=new Re().setFromEuler(new qe(0,-Math.PI/2*V,0));this.setWorldPose(this.nodes.get(`${f}:foot`),D,z),H.position.set(0,-.015,.012),H.quaternion.identity(),H.scale.setScalar(1)}this.group.updateMatrixWorld(!0)}setReviewPose(t){this.pose=Mn(t==="sit"?Rn:t==="standA"?Wi:Tr),this.applyPose()}partBounds(t){const e=this.meshes.get(t);return e?new Zn().setFromObject(e):null}auditAnatomy(t){return Tg({group:this.group,pose:this.pose,nodes:this.nodes,meshes:this.meshes,hands:{L:this.hL,R:this.hR}},t)}auditTemporal(t=80){const e=Mn(this.pose),n=[[Rn,Wi,!0],[Wi,Tr,!1]],s=new Set;let r=0,a=0,o=0;for(const[l,c,h]of n)for(let u=0;u<=t;u++){(h?go:mo)(l,c,u/t,this.pose),this.applyPose();const d=this.auditAnatomy();o++,r=Math.max(r,d.maxBoneError),a=Math.max(a,d.maxContinuityError);for(const p of d.issues)s.add(p.replace(/:-?\d+\.\d+$/,""))}return this.pose=e,this.applyPose(),{ok:s.size===0,frames:o,maxBoneError:r,maxContinuityError:a,failures:[...s]}}}class Rg{constructor(){U(this,"group",new fe);U(this,"s1");U(this,"s2");U(this,"sheath");U(this,"impact");U(this,"ring");U(this,"drops",[]);U(this,"t",0);U(this,"on",!1);U(this,"mat");this.mat=new Qe({color:"#dff3ff",roughness:.05,transparent:!0,opacity:.55,clearcoat:1,clearcoatRoughness:.05,depthWrite:!1});const t=new Ce(1,1,1,10,1,!0);t.translate(0,.5,0),this.s1=new Z(t,this.mat),this.s2=new Z(t,this.mat),this.sheath=new Z(t,new Zi({color:"#ffffff",transparent:!0,opacity:.18,depthWrite:!1})),this.impact=new Z(new ue(1,14,10),new Qe({color:"#e6f6ff",roughness:.05,transparent:!0,opacity:.45,clearcoat:1,depthWrite:!1})),this.ring=new Z(new Xn(1,.12,6,24),new Zi({color:"#ffffff",transparent:!0,opacity:.35,depthWrite:!1})),this.ring.rotation.x=Math.PI/2,this.group.add(this.s1,this.s2,this.sheath,this.impact,this.ring);const e=new ue(7e-4,8,6);for(let n=0;n<28;n++){const s=new Z(e,this.mat);s.visible=!1,this.group.add(s),this.drops.push({m:s,v:new b,life:0})}this.group.visible=!1}stretch(t,e,n,s){const r=new b().subVectors(n,e),a=r.length();t.position.copy(e),t.quaternion.setFromUnitVectors(new b(0,1,0),r.normalize()),t.scale.set(s,a,s),t.visible=a>5e-4}spawn(t,e,n,s){let r=0;for(const a of this.drops)if(!(a.life>0)&&(a.life=.25+Math.random()*.25,a.m.position.copy(t),a.v.set((Math.random()-.5)*n,s*(.5+Math.random()),(Math.random()-.5)*n),a.m.visible=!0,++r>=e))break}set(t,e,n,s,r){this.on=!0,this.group.visible=!0,this.t+=r;const a=1+.15*Math.sin(this.t*40),o=e??s;this.stretch(this.s1,t,o,.0011*a),this.stretch(this.sheath,t,o,.0019),this.impact.position.copy(o),this.impact.scale.set(.0032,.0016,.0032),this.impact.visible=!0,e?(this.stretch(this.s2,n,s,9e-4),Math.random()<.5&&this.spawn(e,1,.08,.06)):this.s2.visible=!1,this.ring.position.copy(s),this.ring.position.y+=4e-4;const l=.004+.003*(this.t*2%1);this.ring.scale.set(l,l,l),this.ring.material.opacity=.35*(1-this.t*2%1),Math.random()<.6&&this.spawn(s,1,.12,.05)}off(){this.on=!1,this.s1.visible=this.s2.visible=this.sheath.visible=this.impact.visible=this.ring.visible=!1}update(t){let e=!1;for(const n of this.drops)n.life<=0||(e=!0,n.life-=t,n.v.y-=9.8*t*.4,n.m.position.addScaledVector(n.v,t),n.life<=0&&(n.m.visible=!1));!this.on&&!e?this.group.visible=!1:this.group.visible=!0,this.on||(this.ring.visible=!1)}}function Cg(){const i=new fe,t=new fe;t.position.y=-.0765,i.add(t);const e=[new Y(5e-4,0),new Y(.011,0),new Y(.0135,.004),new Y(.0135,.04),new Y(.012,.047),new Y(.008,.051),new Y(5e-4,.052)],n=new Z(new Yn(e,32),new Qe({color:"#bfe2f2",roughness:.25,transmission:0,transparent:!0,opacity:.85,clearcoat:.8,clearcoatRoughness:.2}));n.castShadow=!0,t.add(n);const s=new Z(new Yn([new Y(5e-4,.002),new Y(.0118,.002),new Y(.0118,.03),new Y(5e-4,.03)],24),new Ot({color:"#8fd0ee",roughness:.3,transparent:!0,opacity:.6}));t.add(s);const r=new Z(new Ce(.008,.0095,.012,24),new Ot({color:"#fbfbf8",roughness:.4}));r.position.y=.056,r.castShadow=!0,t.add(r);const a=new Z(new Ce(.0018,.0045,.014,16),new Ot({color:"#fbfbf8",roughness:.4}));a.position.y=.069,t.add(a);const o=new Z(new Ce(.0138,.0138,.02,32,1,!0),new Ot({color:"#ffffff",roughness:.6,side:Le}));o.position.y=.024,t.add(o);const l=new Z(new ue(.004,12,10),new Ot({color:"#6fb8e0"}));return l.scale.set(1,1.3,.3),l.position.set(0,.024,.0139),t.add(l),{group:i,nozzleTip:new b(0,0,0)}}function Pg(){const i=tn(256,256),t=ts(256,"#fbfaf5","#e8e4d8","#ffffff",40,Qi(21)),e=()=>{i.ctx.clearRect(0,0,256,256),i.ctx.drawImage(t,0,0)};e();const n=Ie(i.c);n.wrapS=n.wrapT=Oe,n.repeat.set(1,1);const s=Ie(Lr(256,40),!1,1),r=new Qe({map:n,bumpMap:s,bumpScale:8e-4,roughness:.95,sheen:.5,sheenColor:new Zt("#ffffff"),transparent:!0,opacity:1}),a=new Z(Ke(.024,.024,.0052,.004,3),r);a.rotation.x=Math.PI/2;const o=new fe;o.add(a),a.castShadow=!0,a.receiveShadow=!0;const l=[];return{group:o,mesh:a,stain(c,h,u){l.push({x:c,z:h,a:u}),e();for(const p of l){const g=128+p.x/.024*256,y=128+p.z/.024*256,f=40+p.a*60,m=i.ctx.createRadialGradient(g,y,2,g,y,f);m.addColorStop(0,`rgba(205,190,175,${Math.min(.85,.35+p.a*.6)})`),m.addColorStop(.7,`rgba(215,200,185,${Math.min(.6,p.a*.5)})`),m.addColorStop(1,"rgba(215,200,185,0)"),i.ctx.fillStyle=m,i.ctx.beginPath(),i.ctx.arc(g,y,f,0,Math.PI*2),i.ctx.fill()}n.needsUpdate=!0;const d=Math.min(1,l.reduce((p,g)=>p+g.a,0));r.opacity=1-d*.12,r.roughness=.95-d*.25},reset(){l.length=0,e(),n.needsUpdate=!0,r.opacity=1,r.roughness=.95}}}function Lg(){const i=new fe,t=.026,e=.014,n=.0022,s=ts(256,"#f4b19c","#dd9a86","#ffc9b8",36,Qi(9)),r=new Ot({map:Ie(s,!0,1),roughness:.8});r.map.wrapS=r.map.wrapT=bs,r.map.repeat.set(2,1);const a=new de(t,n,e,12,1,6),o=new Z(a,r);o.castShadow=!0,o.receiveShadow=!0,i.add(o);const l=new Z(Ke(.012,.0075,8e-4,.0012,2),new Ot({color:"#fdfdfb",roughness:.95}));l.rotation.x=Math.PI/2,l.position.y=-n/2-3e-4,i.add(l);const c=new Z(new cn(t-.001,e-.001),new Qe({color:"#f8e9e2",roughness:.25,clearcoat:.6}));c.rotation.x=Math.PI/2,c.position.y=-n/2-2e-4,i.add(c);const h=a.attributes.position;for(let E=0;E<h.count;E++){const R=h.getX(E),P=h.getZ(E),M=Math.abs(R)/(t/2),w=Math.abs(P)/(e/2);if(M>.85&&w>.85){const I=1-(M-.85)/.15*((w-.85)/.15)*.35;h.setX(E,R*I),h.setZ(E,P*I)}}a.computeVertexNormals();const u=tn(128,64);u.ctx.fillStyle="#f6f2ea",u.ctx.fillRect(0,0,128,64),u.ctx.fillStyle="rgba(160,190,200,0.5)";for(let E=0;E<40;E++)u.ctx.fillRect(E*37%128,E*53%64,3,3);u.ctx.fillStyle="#e8b2a2",u.ctx.fillRect(112,0,16,64);const d=new Ot({map:Ie(u.c),roughness:.75,side:Le}),p=new Qe({color:"#fbfaf7",roughness:.2,clearcoat:.9,clearcoatRoughness:.1,side:Le}),g=new Ot({color:"#efeae0",roughness:.8,side:Le}),y=t/2+.005,f=35e-5,m=28,S=[-1,1].map(E=>{const R=new fe,P=new Z(new cn(y,e+8e-4,m,1),d),M=new Z(new cn(y,e+8e-4,m,1),p),w=new Z(new cn(y,f,m,1),g);P.castShadow=!0,R.add(P,M,w),i.add(R);const I=P.geometry.attributes.position.array.slice(),D=w.geometry.attributes.position.array.slice();return{side:E,g:R,top:P,bot:M,edge:w,base:I,edgeBase:D,peel:0,done:!1,gone:!1}}),x=.0022,v=.55;function A(E){const R=E.peel*y,P=y-R,M=(w,I,D,F=!1)=>{const G=w.geometry.attributes.position,H=F?E.edgeBase:E.base;for(let V=0;V<G.count;V++){const z=H[V*3]+y/2,et=F?e/2+4e-4:H[V*3+1],ft=F?H[V*3+1]:0;let lt,ht,zt=1,Ut=0;if(z<=P)lt=z,ht=0;else{const St=z-P;if(St<Math.PI*x){const Vt=St/x;lt=P+x*Math.sin(Vt),ht=x-x*Math.cos(Vt),Ut=Math.sin(Vt),zt=Math.cos(Vt)}else{const Vt=St-Math.PI*x;lt=P-Vt*Math.cos(v),ht=2*x+Vt*Math.sin(v),Ut=-Math.sin(v)*0-Math.sin(v),zt=-Math.cos(v)}}const ee=Math.hypot(Ut,zt)||1,se=Ut/ee*I,J=zt/ee*I,nt=(lt+se)*E.side,yt=ht+J+ft*(zt/ee),Nt=et;G.setXYZ(V,nt,yt,Nt)}G.needsUpdate=!0,w.geometry.computeVertexNormals()};M(E.top,f/2),M(E.bot,-f/2),M(E.edge,0,!1,!0)}for(const E of S)E.g.position.y=-n/2-.0011,E.g.rotation.x=Math.PI,A(E);return{group:i,padMesh:o,papers:S,W:t,D:e,T:n,PW:y,setPeel(E,R){const P=S.find(M=>M.side===E);P.peel=Math.max(0,Math.min(1,R)),A(P)},bend(E){const R=a.attributes.position,P=a.base||(a.base=R.array.slice());for(let M=0;M<R.count;M++){const w=P[M*3],I=P[M*3+1],F=P[M*3+2]/E,G=E+I;R.setXYZ(M,w,G*Math.cos(F)-E,G*Math.sin(F))}R.needsUpdate=!0,a.computeVertexNormals();for(const M of[l,c])M.visible=!1},unbend(){const E=a.attributes.position,R=a.base;if(R){for(let P=0;P<E.count;P++)E.setXYZ(P,R[P*3],R[P*3+1],R[P*3+2]);E.needsUpdate=!0,a.computeVertexNormals(),l.visible=!0,c.visible=!0}}}}function Zc(i,t,e,n,s=1){const r=26*s;if(t==="star"){i.fillStyle="#f5b940";for(let a=r;a<e+r;a+=r*2.4)for(let o=r*.7,l=0;o<n;o+=r*1.5,l++){const c=a+l%2*r*1.2;i.beginPath();for(let h=0;h<10;h++){const u=h%2?r*.22:r*.5,d=-Math.PI/2+h/10*Math.PI*2;i.lineTo(c+Math.cos(d)*u,o+Math.sin(d)*u)}i.closePath(),i.fill()}}else if(t==="flower")for(let a=r;a<e+r;a+=r*2.6)for(let o=r*.75,l=0;o<n;o+=r*1.6,l++){const c=a+l%2*r*1.3;i.fillStyle=l%2?"#f08aa0":"#f4a5b5";for(let h=0;h<5;h++){const u=h/5*Math.PI*2;i.beginPath(),i.arc(c+Math.cos(u)*r*.3,o+Math.sin(u)*r*.3,r*.2,0,Math.PI*2),i.fill()}i.fillStyle="#ffe27a",i.beginPath(),i.arc(c,o,r*.16,0,Math.PI*2),i.fill()}else{const a=["#f47c7c","#f8b26a","#f6e27a","#8fd18f","#7fb9ea","#b79ce8"],o=n/6/1.1;for(let l=0;l<6;l++)i.fillStyle=a[l],i.globalAlpha=.85,i.fillRect(0,n*.05+l*o,e,o*.92);i.globalAlpha=1}}function Ig(i){const t=tn(256,256);t.ctx.fillStyle="#fbf9f2",t.ctx.fillRect(0,0,256,256),t.ctx.drawImage(ts(256,"#fbf9f2","#e6e0d2","#ffffff",40),0,0),t.ctx.save(),t.ctx.beginPath(),t.ctx.roundRect(14,14,228,228,24),t.ctx.clip(),Zc(t.ctx,i,256,256,1.9),t.ctx.restore();const e=Ie(t.c);e.wrapS=e.wrapT=Oe;const n=new Ot({map:e,roughness:.85}),s=new Ot({color:"#efe9dc",roughness:.9}),r=new Z(new de(.03,.005,.03),[s,s,n,s,s,s]);r.castShadow=!0,r.receiveShadow=!0;const a=new fe;return a.add(r),{group:a,mesh:r,id:i}}class Dg{constructor(t){U(this,"arm");U(this,"group",new fe);U(this,"ribbon");U(this,"roll");U(this,"turns",0);U(this,"maxTurns",5);U(this,"W",.0105);U(this,"T",.0011);U(this,"pitch",.0066);U(this,"y0",.052);U(this,"dir",1);U(this,"phi0",0);U(this,"segPerTurn",44);U(this,"maxSamples");U(this,"pos");U(this,"uv");U(this,"texC",tn(2048,128));U(this,"tex");U(this,"pattern",null);U(this,"reveal",0);U(this,"padY",0);U(this,"padPhi",0);U(this,"padOn",!1);U(this,"rollMesh");U(this,"rollCore");this.arm=t,this.maxSamples=this.maxTurns*this.segPerTurn+2;const e=new be;this.pos=new $e(new Float32Array(this.maxSamples*8*3),3),this.uv=new $e(new Float32Array(this.maxSamples*8*2),2),e.setAttribute("position",this.pos),e.setAttribute("uv",this.uv),e.setAttribute("normal",new $e(new Float32Array(this.maxSamples*8*3),3));const n=[];for(let l=0;l<this.maxSamples-1;l++){const c=l*8,h=(l+1)*8;for(let u=0;u<4;u++){const d=u*2;n.push(c+d,h+d,c+d+1,h+d,h+d+1,c+d+1)}}e.setIndex(n),e.setDrawRange(0,0),this.drawTexture(),this.tex=Ie(this.texC.c),this.tex.wrapS=Oe,this.tex.wrapT=Oe;const s=Ie(Lr(128,24),!1,1);s.repeat.set(60,1);const r=new Ot({map:this.tex,bumpMap:s,bumpScale:5e-4,roughness:.92,side:Le});this.ribbon=new Z(e,r),this.ribbon.castShadow=!0,this.ribbon.receiveShadow=!0,this.ribbon.frustumCulled=!1,this.group.add(this.ribbon),this.roll=new fe;const a=new Ot({map:Ie(this.texC.c,!0,1),bumpMap:s,bumpScale:5e-4,roughness:.92});a.map.repeat.set(.05,1),this.rollMesh=new Z(new Ce(1,1,this.W,32),a),this.rollMesh.castShadow=!0,this.roll.add(this.rollMesh),this.rollCore=new Z(new Ce(.0025,.0025,this.W+4e-4,16),new Ot({color:"#ded6c4",roughness:.8})),this.roll.add(this.rollCore);const o=new Ot({color:"#f1ece2",roughness:.95});for(const l of[-1,1]){const c=new Z(new Ce(1,1,3e-4,32),o);c.position.y=l*(this.W/2+1e-4),c.name="cap",this.roll.add(c)}this.group.add(this.roll)}init(){const t=this.arm;this.phi0=t.woundPhi;const e=new b(Math.cos(this.phi0),0,-Math.sin(this.phi0)).transformDirection(t.group.matrixWorld);this.dir=e.y+e.z*.4>=0?1:-1,this.turns=0,this.pattern=null,this.reveal=0,this.drawTexture(),this.tex.needsUpdate=!0,this.rollMesh.material.map.needsUpdate=!0,this.update()}drawTexture(){const{ctx:t}=this.texC,e=2048,n=128;t.clearRect(0,0,e,n),t.fillStyle="#f4efe3",t.fillRect(0,0,e,n),t.strokeStyle="rgba(190,178,150,0.35)",t.lineWidth=1;for(let s=0;s<e;s+=5)t.beginPath(),t.moveTo(s,0),t.lineTo(s+1,n),t.stroke();for(let s=0;s<n;s+=5)t.beginPath(),t.moveTo(0,s),t.lineTo(e,s+1),t.stroke();t.fillStyle="rgba(255,255,255,0.35)";for(let s=0;s<400;s++)t.fillRect(s*971%e,s*331%n,3,2);t.fillStyle="rgba(180,170,140,0.35)",t.fillRect(0,0,e,5),t.fillRect(0,n-5,e,5),this.pattern&&this.reveal>0&&(t.save(),t.beginPath(),t.rect(e*(1-this.reveal),0,e*this.reveal+2,n),t.clip(),t.globalAlpha=.9,Zc(t,this.pattern,e,n,1.35),t.restore())}setPattern(t,e){this.pattern=t,this.reveal=e,this.drawTexture(),this.tex.needsUpdate=!0,this.rollMesh.material.map.needsUpdate=!0}radiusAt(t,e,n){let s=this.arm.radiusAt(e/this.arm.length)+4e-4;if(this.padOn){let r=t-this.padPhi;r=Math.atan2(Math.sin(r),Math.cos(r));const a=Math.max(0,1-Math.abs(e-this.padY)/.0135),o=Math.max(0,1-Math.abs(r)/.85);s+=.0021*Math.min(1,a*3)*Math.min(1,o*3)}return s+=this.T*.55*Math.min(n,1.2),s}sample(t){const e=this.phi0+this.dir*t*Math.PI*2,n=this.y0-t*this.pitch;return{phi:e,y:n}}update(){const t=Math.min(this.maxSamples-1,Math.floor(this.turns*this.segPerTurn)+1),e=this.pos,n=this.uv,s=this.W,r=this.T;for(let u=0;u<=t;u++){const d=Math.min(u/this.segPerTurn,this.turns),{phi:p,y:g}=this.sample(d),y=this.radiusAt(p,g,d),f=Math.sin(p),m=Math.cos(p),S=Bt.smoothstep(d,.85,1.15)*r*.85,x=[{dy:+s/2,ro:S},{dy:-s/2,ro:0}],v=(I,D,F)=>{const G=y+D+(F?0:r);return[G*f,g+I,G*m]},A=v(x[0].dy,x[0].ro,!1),E=v(x[1].dy,x[1].ro,!1),R=v(x[0].dy,x[0].ro,!0),P=v(x[1].dy,x[1].ro,!0),M=u*8,w=(I,D,F)=>{e.setXYZ(M+I,D[0],D[1],D[2]),n.setXY(M+I,1-d/this.maxTurns,F)};w(0,A,1),w(1,E,0),w(2,P,0),w(3,R,1),w(4,E,0),w(5,P,.02),w(6,R,.98),w(7,A,1)}e.needsUpdate=!0,n.needsUpdate=!0,this.ribbon.geometry.setDrawRange(0,t*24),this.ribbon.geometry.computeVertexNormals();const{phi:a,y:o}=this.sample(this.turns),c=.0135-.0075*(this.turns/this.maxTurns),h=this.radiusAt(a,o,this.turns)+r+c;this.roll.position.set(h*Math.sin(a),o-this.W/2+this.W/2,h*Math.cos(a)),this.rollMesh.scale.set(c,1,c),this.roll.children.forEach(u=>{u.name==="cap"&&u.scale.set(c,1,c)}),this.rollMesh.rotation.y=-this.dir*(this.turns*Math.PI*2*(this.arm.radiusAt(.5)+.002))/c,this.roll.visible=this.turns<this.maxTurns-.001}rollWorld(){return this.arm.group.localToWorld(this.roll.position.clone())}endWorld(){const{phi:t,y:e}=this.sample(this.turns);return this.arm.worldOf(t,e,.003)}}const dn=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,fi=i=>1-Math.pow(1-i,3),Ug=i=>1+(1.70158+1)*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),An=i=>i;class Ng{constructor(){U(this,"items",[])}add(t,e,n={}){return new Promise(s=>{const r={t:0,d:Math.max(1e-4,t),ease:n.ease??dn,fn:e,dead:!1,tag:n.tag,done:()=>{n.done?.(),s()}};this.items.push(r),e(0)})}delay(t,e){return this.add(t,()=>{},{ease:An,tag:e})}killTag(t){for(const e of this.items)e.tag===t&&(e.dead=!0)}clear(){this.items.length=0}update(t){const e=this.items.slice();for(const n of e){if(n.dead)continue;n.t+=t;const s=Math.min(1,n.t/n.d);n.fn(n.ease(s)),s>=1&&(n.dead=!0,n.done?.())}this.items=this.items.filter(n=>!n.dead)}}const Tn=(i,t,e,n,s,r=0,a,o)=>({target:new b(...i),az:t,el:e,spanV:n,spanH:s,lift:r,targetP:a?new b(...a):void 0,azP:o});class Fg{constructor(t){U(this,"camera");U(this,"from",null);U(this,"to");U(this,"k",1);U(this,"dur",1);U(this,"t",0);U(this,"ease",dn);U(this,"resolve",null);U(this,"aspect",1);U(this,"shake",0);U(this,"a",{pos:new b,tgt:new b});U(this,"b",{pos:new b,tgt:new b});this.camera=new fn(40,1,.03,6),this.to=t}get moving(){return this.k<1}setAspect(t){this.aspect=t,this.camera.aspect=t,this.camera.fov=this.fovFor(t),this.camera.updateProjectionMatrix()}fovFor(t){return 33+19*Bt.clamp((2-t)/1.55,0,1)}distFor(t){const e=Bt.degToRad(this.camera.fov),n=2*Math.atan(Math.tan(e/2)*this.aspect),s=t.spanV/(2*Math.tan(e/2)),r=t.spanH/(2*Math.tan(n/2)),a=Bt.clamp((1.35-this.aspect)/.6,0,1);return r+(s-r)*a}eval(t,e){const n=this.distFor(t),s=Bt.degToRad(t.az),r=Bt.degToRad(t.el),a=Bt.clamp((1.2-this.aspect)/.7,0,1);e.tgt.copy(t.target),t.targetP&&e.tgt.lerp(t.targetP,a),e.tgt.y+=(t.lift??0)*t.spanV*a;const o=t.azP!==void 0?Bt.lerp(s,Bt.degToRad(t.azP),a):s;e.pos.set(e.tgt.x+n*Math.cos(r)*Math.sin(o),e.tgt.y+n*Math.sin(r),e.tgt.z+n*Math.cos(r)*Math.cos(o))}goTo(t,e=.8,n=dn){if(this.resolve?.(),this.resolve=null,e<=0)return this.from=null,this.to=t,this.k=1,Promise.resolve();const s=this.currentShot();return this.from=s,this.to=t,this.dur=e,this.t=0,this.k=0,this.ease=n,new Promise(r=>{this.resolve=r})}currentShot(){if(!this.from||this.k>=1)return this.to;const t=this.ease(this.k),e=this.from,n=this.to;return{targetP:(e.targetP??e.target).clone().lerp(n.targetP??n.target,t),azP:Bt.lerp(e.azP??e.az,n.azP??n.az,t),target:e.target.clone().lerp(n.target,t),az:Bt.lerp(e.az,n.az,t),el:Bt.lerp(e.el,n.el,t),spanV:Bt.lerp(e.spanV,n.spanV,t),spanH:Bt.lerp(e.spanH,n.spanH,t),lift:Bt.lerp(e.lift??0,n.lift??0,t)}}update(t){if(this.k<1&&(this.t+=t,this.k=Math.min(1,this.t/this.dur),this.k>=1)){const n=this.resolve;this.resolve=null,n?.()}const e=this.currentShot();this.eval(e,this.a),this.camera.position.copy(this.a.pos),this.camera.lookAt(this.a.tgt)}}const vn={establish:Tn([0,.2,.03],42,24,.5,.72),posture:Tn([-.01,.238,.04],16,21,.25,.36,.1),sleeve:Tn([-.02,.232,.05],10,27,.2,.27,.16),rinse:Tn([.005,.212,.065],6,34,.2,.25,.1,[-.02,.212,.09],2),gauze:Tn([.03,.207,.07],12,33,.19,.25,.1,[-.02,.207,.09],4),peel:Tn([.09,.196,.097],26,44,.085,.11,.05,[-.015,.196,.14],14),place:Tn([.03,.204,.075],12,36,.19,.25,.1,[-.02,.204,.09],4),wrap:Tn([-.01,.207,.06],8,30,.14,.17,.1,[-.02,.207,.062],4),pattern:Tn([.035,.2,.08],14,38,.21,.26,.08,[-.02,.2,.1],4),reveal:Tn([-.16,.22,.1],-22,14,.44,.58,.05)},ec=64,Hn=.192;function Og(i,t,e,n){const s=new b().subVectors(t,i),r=new b().subVectors(n,e),a=new b().subVectors(i,e),o=s.dot(s),l=r.dot(r),c=r.dot(a);let h=0,u=0;if(o<=1e-12&&l<=1e-12)return i.distanceTo(e);if(o<=1e-12)u=Bt.clamp(c/l,0,1);else{const d=s.dot(a);if(l<=1e-12)h=Bt.clamp(-d/o,0,1);else{const p=s.dot(r),g=o*l-p*p;g!==0&&(h=Bt.clamp((p*c-d*l)/g,0,1)),u=(p*h+c)/l,u<0?(u=0,h=Bt.clamp(-d/o,0,1)):u>1&&(u=1,h=Bt.clamp((p-d)/o,0,1))}}return new b().copy(i).addScaledVector(s,h).distanceTo(new b().copy(e).addScaledVector(r,u))}class Bg{constructor(t,e){U(this,"input");U(this,"sfx");U(this,"scene",new Su);U(this,"rig",new Fg(vn.establish));U(this,"room",new mg);U(this,"doll",new Ag);U(this,"arm");U(this,"water",new Rg);U(this,"bandage");U(this,"bottle",Cg());U(this,"gauze",Pg());U(this,"pad",Lg());U(this,"swatches",[]);U(this,"tweens",new Ng);U(this,"ray",new md);U(this,"state",0);U(this,"busy",!1);U(this,"hits",[]);U(this,"drag",null);U(this,"seed",1);U(this,"time",0);U(this,"idleT",0);U(this,"hintStage",0);U(this,"ghost");U(this,"ghostMat");U(this,"hint",null);U(this,"pulseTarget",null);U(this,"pulseBase",new b);U(this,"pulseK",-1);U(this,"glint");U(this,"wetPeak",1);U(this,"dabs",0);U(this,"wrapTick",0);U(this,"wrapDir",new Y);U(this,"wrapPx",150);U(this,"rinseDone",!1);U(this,"padHome",new b);U(this,"savedPattern",null);U(this,"blinkT",2);U(this,"prevPose",Mn(Rn));U(this,"poseK",1);U(this,"poseFrom",Mn(Rn));U(this,"poseTo",Mn(Rn));U(this,"lastArmTop",.215);U(this,"onReplayReady",null);U(this,"width",1);U(this,"height",1);U(this,"texFrame",0);U(this,"portrait",!1);U(this,"swatchOrder",["star","flower","rainbow"]);U(this,"enterId",0);U(this,"impact",new b);U(this,"impactArm",!1);this.input=t,this.sfx=e,this.scene.background=new Zt("#e7ebee"),this.scene.add(this.room.group,this.doll.group,this.water.group),this.arm=this.doll.forearm,this.scene.add(this.arm.sand),this.bandage=new Dg(this.arm),this.arm.group.add(this.bandage.group),this.bandage.group.visible=!1,this.scene.add(this.bottle.group,this.gauze.group,this.pad.group);for(const l of["star","flower","rainbow"]){const c=Ig(l);c.group.visible=!1,this.scene.add(c.group),this.swatches.push(c)}this.ghostMat=new Ot({color:"#ffffff",transparent:!0,opacity:0,roughness:.6,depthWrite:!1}),this.ghost=new fe;const n=new Z(new ue(.0075,20,16),this.ghostMat);n.scale.set(1,.7,1),this.ghost.add(n);const s=new Z(new Xn(.011,.0012,8,32),this.ghostMat);s.rotation.x=Math.PI/2,this.ghost.add(s),this.ghost.visible=!1,this.scene.add(this.ghost);const r=document.createElement("canvas");r.width=r.height=128;const a=r.getContext("2d"),o=a.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.25,"rgba(255,250,230,0.6)"),o.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=o,a.fillRect(0,0,128,128),a.strokeStyle="rgba(255,255,255,0.9)",a.lineWidth=3,a.beginPath(),a.moveTo(64,4),a.lineTo(64,124),a.moveTo(4,64),a.lineTo(124,64),a.stroke(),this.glint=new bu(new Rc({map:new Lc(r),transparent:!0,opacity:0,depthWrite:!1,blending:ma})),this.glint.scale.setScalar(.03),this.scene.add(this.glint);try{const l=localStorage.getItem("oteate.pattern");(l==="star"||l==="flower"||l==="rainbow")&&(this.savedPattern=l)}catch{}t.handler={onDown:l=>this.onDown(l),onMove:(l,c,h)=>this.onMove(l,c,h),onUp:(l,c)=>this.onUp(l,c)},this.doll.applyPose(),this.arm.build(this.seed),this.bandage.init(),this.pad.group.visible=!1,this.bottle.group.visible=!1,this.gauze.group.visible=!1}qa(){const t=n=>{const s=this.project(n);return{x:s.x,y:s.y}},e=n=>t(this.tabWorld(n));return{state:this.state,busy:this.busy,roll:this.arm.roll,sand:this.arm.sandLooseFraction(),wet:this.arm.wetTotal(),turns:this.bandage.turns,peel:this.pad.papers.map(n=>n.peel),dabs:this.dabs,cuff:t(this.arm.cuffWorld()),elbow:t(this.arm.group.localToWorld(new b(0,.004,0))),wound:t(this.woundWorld(0)),woundHi:t(this.woundWorld(.03)),bottle:t(this.bottle.group.position.clone().add(new b(0,-.035,0))),gauze:t(this.gauze.group.position),pad:t(this.pad.group.position),tabL:e(-1),tabR:e(1),padCenter:t(this.pad.group.position),swatches:this.swatches.map(n=>({id:n.id,...t(n.group.position)})),roll3d:t(this.bandage.rollWorld()),wrapDir:{x:this.wrapDir.x,y:this.wrapDir.y},armMid:t(this.arm.worldOf(this.arm.woundPhi,this.arm.woundY,.012)),hits:this.hits.length,tweens:this.tweens.items.length,objects:(()=>{let n=0;return this.scene.traverse(()=>n++),n})()}}qaEnvironment(){const t=this.doll.pose,e=[{id:"torso",a:t.pelvis,b:t.neck,radius:.024},{id:"pelvis",a:t.pelvis,b:t.pelvis,radius:.021},{id:"head",a:t.head,b:t.head,radius:.033}];for(const a of["L","R"])e.push({id:`${a}:upperArm`,a:t[`s${a}`],b:t[`e${a}`],radius:.0125},{id:`${a}:forearm`,a:t[`e${a}`],b:t[`w${a}`],radius:.011},{id:`${a}:hand`,a:t[`w${a}`],b:t[`w${a}`].clone().add(new b().subVectors(t[`w${a}`],t[`e${a}`]).normalize().multiplyScalar(.025)),radius:.0085},{id:`${a}:thigh`,a:t[`h${a}`],b:t[`k${a}`],radius:.0135},{id:`${a}:lowerLeg`,a:t[`k${a}`],b:t[`a${a}`],radius:.0115});const n={min:new b(-.14,.174,0),max:new b(.2,.186,.19)},s=a=>Math.hypot(Math.max(n.min.x-a.x,0,a.x-n.max.x),Math.max(n.min.y-a.y,0,a.y-n.max.y),Math.max(n.min.z-a.z,0,a.z-n.max.z)),r=[];for(const a of e){let o=1/0;for(let l=0;l<=32;l++){const c=a.a.clone().lerp(a.b,l/32);o=Math.min(o,s(c)-a.radius)}o<-.001&&r.push(`${a.id}/table:${o.toFixed(5)}`)}for(const a of[-.14,.2]){const o=new b(a,0,.095),l=new b(a,.175,.095);for(const c of e){const h=Og(c.a,c.b,o,l)-c.radius-.007;h<-.001&&r.push(`${c.id}/table-leg-${a.toFixed(2)}:${h.toFixed(5)}`)}for(const c of["L","R"]){const h=this.doll.partBounds(`${c}:foot`);if(!h||h.min.y>=.175||h.max.y<=0)continue;const u=Math.max(h.min.x-a,0,a-h.max.x),d=Math.max(h.min.z-.095,0,.095-h.max.z),p=Math.hypot(u,d)-.007;p<-.001&&r.push(`${c}:foot/table-leg-${a.toFixed(2)}:${p.toFixed(5)}`)}}return{ok:r.length===0,collisions:r}}qaTemporalEnvironment(t=120){const e=Mn(this.doll.pose),n=new Set;let s=0;const r=[[Rn,Wi,!0],[Wi,Tr,!1]];for(const[a,o,l]of r)for(let c=0;c<=t;c++){(l?go:mo)(a,o,c/t,this.doll.pose),this.doll.applyPose(),s++;for(const h of this.qaEnvironment().collisions)n.add(h.replace(/:-?\d+\.\d+$/,""))}return this.doll.pose=e,this.doll.applyPose(),{ok:n.size===0,frames:s,failures:[...n]}}resize(t,e){this.width=t,this.height=e,this.rig.setAspect(t/e),this.input.reset(),this.drag=null;const n=e>t*1.1;if(n!==this.portrait&&(this.portrait=n,this.room.setTrayLayout(n),!this.busy)){if(this.state===2&&(this.bottle.group.position.copy(this.bottleHome()),this.hits[0]?.mesh.position.copy(this.bottleHome()).add(new b(0,-.035,0))),this.state===3&&(this.gauze.group.position.copy(this.gauzeHome()),this.hits[0]?.mesh.position.copy(this.gauze.group.position)),this.state===4){this.padHome.set(this.room.trayCenter.x,Hn+this.pad.T+.0015,this.room.trayCenter.z),this.pad.group.position.copy(this.padHome);for(const s of this.hits)s.kind==="tab"&&s.mesh.position.copy(this.tabWorld(s.data))}this.state===5&&(this.pad.group.position.set(this.room.trayCenter.x,Hn+this.pad.T/2+8e-4,this.room.trayCenter.z),this.hits[0]?.mesh.position.copy(this.pad.group.position)),this.state===7&&this.layoutSwatches()}}layoutSwatches(){const t=this.portrait?[-.031,0,.031]:[-.04,0,.04],e=this.portrait?[.024,-.016,.024]:[.012,-.012,.012];this.swatchOrder.forEach((n,s)=>{const r=this.swatches.find(o=>o.id===n);r.group.position.set(this.room.trayCenter.x+t[s],Hn+.0025,this.room.trayCenter.z+e[s]),this.hits.find(o=>o.kind==="swatch"&&o.data===n)?.mesh.position.copy(r.group.position)})}project(t){const e=t.clone().project(this.rig.camera);return new Y((e.x+1)/2*this.width,(1-e.y)/2*this.height)}setRay(t,e){this.ray.setFromCamera(new Y(t/this.width*2-1,-(e/this.height)*2+1),this.rig.camera)}planeHit(t,e,n){this.setRay(t,e);const s=this.ray.ray.origin,r=this.ray.ray.direction,a=(n-s.y)/r.y;return!isFinite(a)||a<0?null:s.clone().addScaledVector(r,a)}pick(t,e){this.setRay(t,e);const n=this.hits.map(r=>r.mesh),s=this.ray.intersectObjects(n,!1);return s.length?this.hits.find(r=>r.mesh===s[0].object)??null:null}makeHit(t,e,n){const s=new Z(new ue(e,8,6),new Zi({visible:!1}));s.visible=!1,this.scene.add(s);const r={mesh:s,kind:t,data:n};return this.hits.push(r),r}clearHits(){for(const t of this.hits)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.hits.length=0}armTopY(){return this.arm.worldOf(this.arm.woundPhi,this.arm.woundY,0).y}woundWorld(t=0){return this.arm.worldOf(this.arm.woundPhi,this.arm.woundY,t)}distToArm(t){const e=this.doll.pose.eR,n=this.doll.pose.wR,s=new b().subVectors(n,e),r=Bt.clamp(new b().subVectors(t,e).dot(s)/s.lengthSq(),0,1),a=e.clone().addScaledVector(s,r);return{d:Math.hypot(t.x-a.x,t.z-a.z),t:r,q:a}}dropIn(t,e,n=.55){t.visible=!0,t.position.copy(e),t.position.y+=.06;const s=t.position.clone();return this.tweens.add(n,r=>{t.position.lerpVectors(s,e,r)},{ease:Ug,tag:"tool"})}moveTo(t,e,n=.4,s){const r=t.position.clone(),a=t.quaternion.clone(),o=s?new Re().setFromEuler(s):a;return this.tweens.add(n,l=>{t.position.lerpVectors(r,e,l),t.quaternion.slerpQuaternions(a,o,l)},{ease:dn,tag:"tool"})}wobble(t){const e=t.rotation.z;this.sfx.wobble(),this.tweens.add(.35,n=>{t.rotation.z=e+Math.sin(n*Math.PI*3)*.08*(1-n)},{ease:An,tag:"wobble"})}setHint(t){this.hint=t,this.idleT=0,this.hintStage=0,this.ghost.visible=!1,this.ghostMat.opacity=0,this.tweens.killTag("hint"),this.pulseTarget&&this.pulseK>=0&&(this.pulseTarget.scale.copy(this.pulseBase),this.pulseK=-1)}cancelHint(){this.idleT=0,this.hintStage=0,this.tweens.killTag("hint"),this.ghost.visible=!1,this.ghostMat.opacity=0,this.pulseTarget&&this.pulseK>=0&&(this.pulseTarget.scale.copy(this.pulseBase),this.pulseK=-1)}async enter(t){const e=++this.enterId;switch(this.state=t,this.busy=!0,this.drag=null,this.input.reset(),this.clearHits(),this.setHint(null),t){case 0:await this.doEstablish();break;case 1:await this.rig.goTo(vn.sleeve,.8),this.setupSleeve();break;case 2:await this.rig.goTo(vn.rinse,.8),await this.setupRinse();break;case 3:await this.rig.goTo(vn.gauze,.8),await this.setupDab();break;case 4:await this.rig.goTo(vn.peel,.9),await this.setupPeel();break;case 5:await this.rig.goTo(vn.place,.8),await this.setupPlace();break;case 6:await this.rig.goTo(vn.wrap,.8),await this.setupWrap();break;case 7:await this.rig.goTo(vn.pattern,.8),await this.setupPattern();break;case 8:await this.doReveal();return}e===this.enterId&&(this.busy=!1)}resetWorld(){this.tweens.clear(),this.water.off(),this.sfx.waterOff(),this.doll.pose=Mn(Rn),this.poseFrom=Mn(Rn),this.poseTo=Mn(Rn),this.poseK=1,this.doll.applyPose(),this.doll.setMood(0),this.arm.build(this.seed),this.arm.roll=0,this.arm.updateSleeve(),this.bandage.group.visible=!1,this.bandage.padOn=!1,this.bandage.init(),this.pad.group.parent!==this.scene&&this.scene.attach(this.pad.group),this.pad.unbend(),this.pad.group.visible=!1,this.pad.group.scale.setScalar(1);for(const t of this.pad.papers)t.peel=0,t.done=!1,t.gone=!1,t.g.position.set(0,-this.pad.T/2-.0011,0),t.g.rotation.set(Math.PI,0,0),t.g.visible=!0,this.pad.setPeel(t.side,0);this.gauze.reset(),this.gauze.group.visible=!1,this.bottle.group.visible=!1;for(const t of this.swatches)t.group.visible=!1,t.group.scale.setScalar(1);this.glint.material.opacity=0,this.dabs=0,this.rinseDone=!1}async doEstablish(){const t=this.enterId;this.resetWorld(),await this.rig.goTo(vn.establish,0);const e=this.rig.goTo(vn.posture,2.3),n=this.doll.pose.wR.clone();this.tweens.add(1.6,s=>{this.doll.pose.wR.y=n.y+Math.max(0,Math.sin(s*Math.PI*2))*.004},{ease:An}),await e,await this.tweens.delay(.2),await this.tweens.add(.6,s=>{this.arm.roll=Math.sin(s*Math.PI)*.08,this.arm.updateSleeve()},{ease:An}),this.arm.roll=0,this.arm.updateSleeve(),t===this.enterId&&this.enter(1)}setupSleeve(){this.makeHit("cuff",.021).mesh.position.copy(this.arm.cuffWorld()),this.setHint({target:()=>this.arm.cuff,path:()=>[this.arm.cuffWorld().add(new b(0,.012,.006)),this.arm.group.localToWorld(new b(0,.012,0)).add(new b(0,.012,.006))]})}sleeveDrag(t,e){const n=this.project(this.arm.cuffWorld()),s=this.project(this.arm.group.localToWorld(new b(0,.004,0))),r=Math.max(90,s.distanceTo(n)*1.1),a=s.sub(n).normalize(),o=(t*a.x+e*a.y)/r,l=this.arm.roll;if(this.arm.roll=Bt.clamp(this.arm.roll+o,0,1),this.arm.updateSleeve(),Math.floor(this.arm.roll*5)!==Math.floor(l*5)&&this.sfx.sleeve(),this.hits[0]?.mesh.position.copy(this.arm.cuffWorld()),this.arm.roll>=.62&&!this.busy){this.busy=!0,this.drag=null;const c=this.arm.roll;this.tweens.add(.35,h=>{this.arm.roll=c+(1-c)*h,this.arm.updateSleeve()},{ease:fi}).then(async()=>{this.sfx.sleeve(),await this.tweens.delay(.45),this.enter(2)})}}bottleHome(){return new b(this.room.trayCenter.x+.005,Hn+.0765,this.room.trayCenter.z-.005)}async setupRinse(){const t=this.bottle.group;t.rotation.set(0,0,0),await this.dropIn(t,this.bottleHome()),this.makeHit("bottle",.034).mesh.position.copy(t.position).add(new b(0,-.035,0)),this.setHint({target:()=>t,path:()=>[t.position.clone().add(new b(0,-.03,.01)),this.woundWorld(.03)]})}bottleFollow(t){this.setRay(t.x,t.y-ec);const e=this.ray.intersectObjects([this.arm.skin,this.arm.sleeve],!1);let n=e.length?e[0].point:null;if(this.impactArm=!!e.length&&e[0].object===this.arm.skin,!n){const l=this.ray.ray.origin,c=this.ray.ray.direction,h=(.19-l.y)/c.y;n=h>0?l.clone().addScaledVector(c,h):this.impact.clone()}n.x=Bt.clamp(n.x,-.16,.22),n.z=Bt.clamp(n.z,-.02,.2),this.impact.lerp(n,.6);const s=new b().subVectors(this.rig.camera.position,this.impact);s.y=0,s.normalize();const r=this.impact.clone().add(new b(0,.024,0)).addScaledVector(s,.006),a=this.bottle.group;a.position.copy(r);const o=new b(0,1,0).addScaledVector(s,.45).normalize();a.quaternion.setFromUnitVectors(new b(0,-1,0),o)}rinseFrame(t){const e=this.bottle.group.position,n=this.impactArm?this.impact.clone():null;let s=e.clone(),r=new b(e.x,.186,e.z);const a=this.room.dishCenter,o=l=>Math.hypot(l.x-a.x,l.z-a.z)<.052;if(n){const l=this.arm.localOf(n);this.arm.paintWet(l.phi,l.y,.0065,3*t);const c=this.arm.group.worldToLocal(this.arm.group.getWorldPosition(new b).add(new b(0,-1,0))),h=new b(0,-1,0);this.arm.loosenSand(l.phi,l.y,.0062,h)>0&&this.sfx.grain();const d=Math.atan2(c.x,c.z);s=this.arm.worldOf(d,l.y,6e-4),r=new b(s.x,o(s)?this.room.dishFloorY+.001:.186,s.z)}else r.copy(this.impact),r.y=o(this.impact)?this.room.dishFloorY+.001:Math.max(.186,this.impact.y);this.water.set(e,n,s,r,t),!this.rinseDone&&this.arm.sandLooseFraction()>=.9&&this.arm.wetTotal()>6&&(this.rinseDone=!0,this.tweens.delay(.5).then(async()=>{this.stopWater(),this.busy=!0,this.drag=null,await this.moveTo(this.bottle.group,this.bottleHome(),.5,new qe(0,0,0)),await this.tweens.delay(.3),this.enter(3)}))}stopWater(){this.water.on&&(this.water.off(),this.sfx.waterOff())}gauzeHome(){return new b(this.room.trayCenter.x,Hn+.0027,this.room.trayCenter.z)}async setupDab(){this.wetPeak=Math.max(4,this.arm.wetTotal()),this.dabs=0,this.bottle.group.visible&&await this.takeAway(this.bottle.group);const t=this.gauze.group;t.rotation.set(0,.2,0),await this.dropIn(t,this.gauzeHome()),this.makeHit("gauze",.03).mesh.position.copy(t.position),this.setHint({target:()=>t,path:()=>[t.position.clone().add(new b(0,.012,0)),this.woundWorld(.02)]})}async dab(t){this.busy=!0;const e=this.gauze.group,{t:n}=this.distToArm(t),s=Bt.clamp(n*this.arm.length,.006,this.arm.length-.006),r=this.arm.group.worldToLocal(this.arm.group.getWorldPosition(new b).add(new b(0,1,0))),a=Math.atan2(r.x,r.z),o=this.arm.worldOf(a,s,.0028),l=e.position.clone(),c=new b(o.x,o.y,o.z);await this.tweens.add(.14,d=>{e.position.lerpVectors(l,c,d)},{ease:fi,tag:"tool"});const h=this.arm.absorbWet(a,s,.0145,.85),u=Math.min(1,h/(this.wetPeak*.3));if(this.gauze.stain((Math.random()-.5)*.006,(Math.random()-.5)*.006,Math.max(.12,u)),this.sfx.gauze(),this.dabs++,await this.tweens.add(.22,d=>{e.position.lerpVectors(c,c.clone().add(new b(0,.006,0)),d),e.scale.y=1-.25*Math.sin(d*Math.PI)},{ease:fi,tag:"tool"}),e.scale.y=1,this.hits[0]?.mesh.position.copy(e.position),this.arm.wetTotal()<this.wetPeak*.16||this.dabs>=6){await this.tweens.delay(.3),await this.moveTo(e,this.gauzeHome(),.5),await this.tweens.delay(.25),this.enter(4);return}this.busy=!1}tabWorld(t){return this.pad.group.localToWorld(new b(t*this.pad.PW*.92,-this.pad.T/2,0))}async setupPeel(){this.gauze.group.visible&&await this.takeAway(this.gauze.group);const t=this.pad.group;t.rotation.set(Math.PI,.15,0),this.padHome.set(this.room.trayCenter.x,Hn+this.pad.T+.0015,this.room.trayCenter.z),await this.dropIn(t,this.padHome,.6);for(const e of[-1,1])this.makeHit("tab",.014,e).mesh.position.copy(this.tabWorld(e));this.setHint({target:()=>{const e=this.pad.papers.find(n=>!n.done);return e?e.g:null},path:()=>{const e=this.pad.papers.find(a=>!a.done);if(!e)return null;const n=this.tabWorld(e.side),s=this.pad.group.position.clone(),r=n.clone().sub(s);return r.y=0,r.normalize(),[n.clone().add(new b(0,.006,0)),n.clone().addScaledVector(r,.03).add(new b(0,.02,0))]}})}peelDrag(t,e,n){const s=this.pad.papers.find(u=>u.side===t);if(s.done)return;const r=this.project(this.tabWorld(t)),a=this.project(this.pad.group.position),o=r.clone().sub(a).normalize(),l=new Y(0,-1),c=o.multiplyScalar(.7).add(l.multiplyScalar(.3)).normalize(),h=(e*c.x+n*c.y)/Math.max(70,r.distanceTo(a)*1);this.pad.setPeel(t,s.peel+h),s.peel>=.62&&this.finishPeel(s)}finishPeel(t){if(t.done)return;t.done=!0,this.drag=null,this.busy=!0,this.sfx.peel();const e=t.peel;this.tweens.add(.28,n=>this.pad.setPeel(t.side,e+(1-e)*n),{ease:fi}).then(async()=>{const n=t.g,s=n.position.clone(),r=new b(t.side*.045,-.0035-this.pad.T,.025*t.side),a=n.rotation.clone(),o=new qe(Math.PI,t.side*.5,0);if(await this.tweens.add(.5,l=>{n.position.lerpVectors(s,r,l),n.position.y+=Math.sin(l*Math.PI)*.02,n.rotation.set(Bt.lerp(a.x,o.x,l),Bt.lerp(a.y,o.y,l),Bt.lerp(a.z,o.z,l))},{ease:dn}),t.gone=!0,this.hits=this.hits.filter(l=>l.kind==="tab"&&l.data===t.side?(this.scene.remove(l.mesh),!1):!0),this.pad.papers.every(l=>l.done)){await this.tweens.delay(.25),this.enter(5);return}this.busy=!1,this.setHint(this.hint)})}async setupPlace(){const t=this.pad.group;for(const a of this.pad.papers)a.g.visible=!1;const e=t.quaternion.clone(),n=new Re().setFromEuler(new qe(0,.15,0)),s=t.position.y;await this.tweens.add(.5,a=>{t.quaternion.slerpQuaternions(e,n,a),t.position.y=s+Math.sin(a*Math.PI)*.025},{ease:dn,tag:"tool"}),t.position.y=Hn+this.pad.T/2+8e-4,this.makeHit("pad",.03).mesh.position.copy(t.position),this.setHint({target:()=>t,path:()=>[t.position.clone().add(new b(0,.012,0)),this.woundWorld(.02)]})}async stickPad(){this.busy=!0,this.drag=null;const t=this.pad.group,e=this.arm.axisWorld,n=this.arm.worldNormal(this.arm.woundPhi),s=new b().crossVectors(e,n).normalize(),r=new Re().setFromRotationMatrix(new oe().makeBasis(e,n,s)),a=this.woundWorld(this.pad.T/2+4e-4),o=t.position.clone(),l=t.quaternion.clone();await this.tweens.add(.28,c=>{t.position.lerpVectors(o,a,c),t.position.y+=Math.sin(c*Math.PI)*.01,t.quaternion.slerpQuaternions(l,r,c)},{ease:dn,tag:"tool"}),t.position.copy(a),t.quaternion.copy(r),this.pad.bend(this.arm.radiusAt(this.arm.woundY/this.arm.length)+this.pad.T/2+4e-4),this.sfx.stick(),await this.tweens.add(.25,c=>{const h=1-.12*Math.sin(c*Math.PI);t.scale.set(1,h,1)},{ease:An,tag:"tool"}),t.scale.setScalar(1),this.arm.group.attach(t),this.bandage.padOn=!0,this.bandage.padY=this.arm.woundY,this.bandage.padPhi=this.arm.woundPhi,await this.tweens.delay(.3),this.enter(6)}async setupWrap(){this.bandage.init(),this.bandage.group.visible=!0,this.wrapTick=0,await this.tweens.add(.5,o=>{this.bandage.turns=.22*o,this.bandage.update()},{ease:fi}),this.sfx.stick();for(const o of[.25,.5,.75])this.makeHit("arm",.026).mesh.position.lerpVectors(this.doll.pose.eR,this.doll.pose.wR,o);this.makeHit("arm",.02).mesh.position.copy(this.bandage.rollWorld());const e=this.arm.worldOf(this.arm.woundPhi,this.arm.woundY,0),n=new b(Math.cos(this.bandage.phi0),0,-Math.sin(this.bandage.phi0)).transformDirection(this.arm.group.matrixWorld).multiplyScalar(this.bandage.dir),s=this.project(e),r=this.project(e.clone().addScaledVector(n,.01));this.wrapDir.copy(r.sub(s).normalize());const a=this.project(this.arm.worldOf(this.arm.woundPhi,this.arm.woundY,.012)).distanceTo(this.project(this.arm.worldOf(this.arm.woundPhi+Math.PI,this.arm.woundY,.012)));this.wrapPx=Bt.clamp(a*2.2,80,220),this.setHint({target:()=>this.bandage.roll,path:()=>[e.clone().addScaledVector(n,-.03).add(new b(0,0,.012)),e.clone().addScaledVector(n,.03).add(new b(0,0,.012))]})}wrapDrag(t,e){const n=Math.max(0,t*this.wrapDir.x+e*this.wrapDir.y)/this.wrapPx;if(n<=0)return;const s=this.bandage.turns;this.bandage.turns=Math.min(this.bandage.maxTurns,s+n),this.bandage.update(),Math.floor(this.bandage.turns*4)!==Math.floor(s*4)&&this.sfx.wrapTick(),this.hits.find(a=>a.kind==="arm"&&a.mesh.geometry.boundingSphere?.radius===.02)?.mesh.position.copy(this.bandage.rollWorld()),this.bandage.turns>=this.bandage.maxTurns&&this.finishWrap()}wrapRelease(){const t=this.bandage.turns;if(t-Math.floor(t)>.45&&t<this.bandage.maxTurns){const n=Math.min(this.bandage.maxTurns,Math.ceil(t));this.busy=!0,this.tweens.add(.3*(n-t),s=>{this.bandage.turns=t+(n-t)*s,this.bandage.update()},{ease:fi,tag:"wrap"}).then(()=>{this.busy=!1,this.bandage.turns>=this.bandage.maxTurns&&this.finishWrap()})}}finishWrap(){this.state!==6||this._wrapDone||(this._wrapDone=!0,this.busy=!0,this.drag=null,this.sfx.stick(),this.tweens.delay(.45).then(()=>{this._wrapDone=!1,this.enter(7)}))}async setupPattern(){const t=["star","flower","rainbow"];this.savedPattern&&(t.splice(t.indexOf(this.savedPattern),1),t.splice(1,0,this.savedPattern)),this.swatchOrder=t;const e=this.portrait?[-.031,0,.031]:[-.04,0,.04],n=this.portrait?[.024,-.016,.024]:[.012,-.012,.012],s=[];t.forEach((a,o)=>{const l=this.swatches.find(c=>c.id===a);l.group.rotation.set(0,(o-1)*.25,0),l.group.scale.setScalar(1),s.push(this.tweens.delay(o*.12).then(()=>this.dropIn(l.group,new b(this.room.trayCenter.x+e[o],Hn+.0025,this.room.trayCenter.z+n[o]),.5)))}),await Promise.all(s);for(const a of this.swatches)this.makeHit("swatch",.026,a.id).mesh.position.copy(a.group.position);const r=this.swatches.find(a=>a.id===t[1]);this.setHint({target:()=>r.group,path:()=>[r.group.position.clone().add(new b(0,.03,0)),r.group.position.clone().add(new b(0,.008,0))],tap:!0})}async choosePattern(t){this.busy=!0,this.drag=null,this.sfx.chime();try{localStorage.setItem("oteate.pattern",t)}catch{}this.savedPattern=t;for(const e of this.swatches){const n=e.group,s=n.position.y;e.id===t?this.tweens.add(.5,r=>{n.position.y=s+Math.sin(r*Math.PI)*.02},{ease:An}):this.tweens.add(.4,r=>{n.scale.setScalar(1-.25*r),n.position.y=s-.002*r},{ease:fi})}await this.tweens.add(1.2,e=>{((this.texFrame++&1)===0||e===1)&&this.bandage.setPattern(t,e)},{ease:dn}),this.bandage.setPattern(t,1),await this.tweens.delay(.6),this.enter(8)}async doReveal(){this.busy=!0,this.sfx.reveal();const t=this.rig.goTo(vn.reveal,1.7);this.tweens.add(.9,n=>this.doll.setMood(n),{ease:dn}),await this.tweenPose(Wi,.9,!0),await this.tweenPose(Tr,.8),await t;const e=this.arm.worldOf(this.arm.woundPhi,this.arm.woundY,.006);this.glint.position.copy(e),await this.tweens.add(.9,n=>{this.glint.material.opacity=Math.sin(n*Math.PI)*.9,this.glint.scale.setScalar(.02+n*.03),this.glint.material.rotation=n*1.2},{ease:An}),this.glint.material.opacity=0,this.onReplayReady?.()}tweenPose(t,e,n=!1){return this.poseFrom=Mn(this.doll.pose),this.poseTo=t,this.poseK=0,this.tweens.add(e,s=>{this.poseK=s,(n?go:mo)(this.poseFrom,this.poseTo,s,this.doll.pose)},{ease:dn})}replay(){this.state===8&&(this.seed++,this.enter(0))}onDown(t){if(this.cancelHint(),this.busy)return;const e=this.pick(t.x,t.y);if(!e){this.setRay(t.x,t.y);const n=[this.bottle.group,this.gauze.group,this.pad.group,...this.swatches.map(r=>r.group)].filter(r=>r.visible&&r.parent===this.scene),s=this.ray.intersectObjects(n,!0);if(s.length){let r=s[0].object;for(;r.parent&&r.parent!==this.scene;)r=r.parent;this.wobble(r)}return}switch(this.drag={kind:e.kind,data:e.data,last:new Y(t.x,t.y)},this.state){case 2:this.impact.copy(this.woundWorld(0)),this.bottleFollow(t),this.sfx.waterOn();break;case 3:this.dragTool(this.gauze.group,t,.008);break;case 5:this.dragTool(this.pad.group,t,.007);break;case 7:this.choosePattern(e.data);break}}dragTool(t,e,n){this.setRay(e.x,e.y-ec);const s=this.ray.intersectObjects([this.arm.skin,this.arm.sleeve],!1);let r=s.length?s[0].point:null;if(!r){const a=this.ray.ray.origin,o=this.ray.ray.direction,l=(.19-a.y)/o.y;l>0&&(r=a.clone().addScaledVector(o,l))}r&&(r.x=Bt.clamp(r.x,-.16,.22),r.z=Bt.clamp(r.z,-.02,.2),r.y+=n,t.position.lerp(r,.6))}async takeAway(t){const e=t.position.clone(),n=e.clone().add(new b(.03,.09,.04));await this.tweens.add(.45,s=>t.position.lerpVectors(e,n,s),{ease:dn,tag:"tool"}),t.visible=!1}onMove(t,e,n){if(!(!this.drag||this.busy))switch(this.state){case 1:this.sleeveDrag(e,n);break;case 2:this.bottleFollow(t);break;case 3:this.dragTool(this.gauze.group,t,.008);break;case 4:this.peelDrag(this.drag.data,e,n);break;case 5:this.dragTool(this.pad.group,t,.007);break;case 6:this.wrapDrag(e,n);break}}onUp(t,e){const n=this.drag;if(this.drag=null,this.state===2&&(this.stopWater(),!this.busy&&n&&this.bottle.group.visible&&(this.moveTo(this.bottle.group,this.bottleHome(),.45,new qe(0,0,0)),this.hits[0]?.mesh.position.copy(this.bottleHome()).add(new b(0,-.035,0)))),!(!n||this.busy))switch(this.state){case 3:{const s=this.gauze.group,{d:r}=this.distToArm(s.position);r<.02?this.dab(s.position.clone()):this.moveTo(s,this.gauzeHome(),.4).then(()=>this.hits[0]?.mesh.position.copy(s.position));break}case 5:{const s=this.pad.group,r=this.woundWorld(0);if(Math.hypot(s.position.x-r.x,s.position.z-r.z)<.03)this.stickPad();else{const a=new b(this.room.trayCenter.x,Hn+this.pad.T/2+8e-4,this.room.trayCenter.z);this.moveTo(s,a,.4).then(()=>this.hits[0]?.mesh.position.copy(s.position))}break}case 6:this.wrapRelease();break}}update(t){this.time+=t,this.tweens.update(t),this.doll.applyPose(),this.doll.head.position.y+=Math.sin(this.time*1.6)*8e-4,this.doll.head.rotation.z+=Math.sin(this.time*.9)*.02,this.blinkT-=t,this.blinkT<0&&(this.blinkT=2.5+Math.random()*3,this.tweens.add(.22,n=>this.doll.setBlink(Math.sin(n*Math.PI)),{ease:An})),this.state===2&&this.drag&&!this.busy?this.rinseFrame(t):this.water.on&&this.stopWater(),this.water.update(t),this.arm.wetDirty&&this.texFrame++%2===0&&this.arm.composite();const e=this.room.dishFloorY+6e-4;if(this.arm.updateSand(t,e,this.room.dishCenter),this.arm.wetDirty&&this.state!==2&&this.arm.composite(),this.hint&&!this.busy&&!this.drag&&(this.idleT+=t,this.hintStage===0&&this.idleT>2.2?(this.hintStage=1,this.pulse(this.hint.target())):this.hintStage===1&&this.idleT>4.5?(this.hintStage=2,this.ghostRun(this.hint.path(),!!this.hint.tap)):this.hintStage===2&&this.idleT>9.5&&(this.idleT=0,this.hintStage=0)),this.pulseTarget&&this.pulseK>=0){const n=1+Math.sin(this.pulseK*Math.PI)*.09;this.pulseTarget.scale.copy(this.pulseBase).multiplyScalar(n)}this.rig.update(t)}pulse(t){t&&(this.pulseTarget=t,this.pulseBase.copy(t.scale),this.pulseK=0,this.tweens.add(.8,e=>{this.pulseK=e},{ease:An,tag:"hint",done:()=>{this.pulseTarget&&this.pulseTarget.scale.copy(this.pulseBase),this.pulseK=-1}}))}ghostRun(t,e){if(!t)return;const[n,s]=t;this.ghost.visible=!0,this.tweens.add(e?1:1.2,r=>{const a=e?Math.sin(r*Math.PI):dn(r);this.ghost.position.lerpVectors(n,s,a),this.ghostMat.opacity=.55*Math.sin(Math.min(1,r*1)*Math.PI)},{ease:An,tag:"hint",done:()=>{this.ghost.visible=!1,this.ghostMat.opacity=0}})}}class zg{constructor(t){U(this,"el");U(this,"active",null);U(this,"handler",null);U(this,"down",t=>{if(t.preventDefault(),this.active||t.button!==void 0&&t.button>0)return;const{x:e,y:n}=this.pos(t);this.active={id:t.pointerId,x:e,y:n,down:!0,startX:e,startY:n,t0:performance.now()};try{this.el.setPointerCapture(t.pointerId)}catch{}this.handler?.onDown?.(this.active)});U(this,"move",t=>{if(t.preventDefault(),!this.active||t.pointerId!==this.active.id)return;const{x:e,y:n}=this.pos(t),s=e-this.active.x,r=n-this.active.y;this.active.x=e,this.active.y=n;const a=this.el.getBoundingClientRect();if(e<-40||n<-40||e>a.width+40||n>a.height+40){this.end(!0);return}this.handler?.onMove?.(this.active,s,r)});U(this,"up",t=>{t.preventDefault(),!(!this.active||t.pointerId!==this.active.id)&&this.end(!1)});U(this,"cancel",t=>{const e=t;!this.active||e.pointerId!==void 0&&e.pointerId!==this.active.id||this.end(!0)});this.el=t,t.addEventListener("pointerdown",this.down,{passive:!1}),t.addEventListener("pointermove",this.move,{passive:!1}),t.addEventListener("pointerup",this.up,{passive:!1}),t.addEventListener("pointercancel",this.cancel,{passive:!1}),t.addEventListener("lostpointercapture",this.cancel),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("blur",()=>this.end(!0)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.end(!0)})}get pointer(){return this.active}pos(t){const e=this.el.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}}end(t){const e=this.active;if(e){this.active=null,e.down=!1;try{this.el.releasePointerCapture(e.id)}catch{}this.handler?.onUp?.(e,t)}}reset(){this.end(!0)}}class kg{constructor(){U(this,"ctx",null);U(this,"master",null);U(this,"noiseBuf",null);U(this,"muted",!1);U(this,"loopSrc",null);U(this,"loopGain",null)}unlock(){try{if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.7,this.master.connect(this.ctx.destination);const e=this.ctx.sampleRate*2;this.noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noiseBuf.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}catch{this.ctx=null}}setMuted(t){this.muted=t,this.master&&this.ctx&&this.master.gain.setTargetAtTime(t?0:.7,this.ctx.currentTime,.02)}noise(t,e,n,s=1,r="bandpass",a=.005){if(!this.ctx||!this.master||!this.noiseBuf)return;const o=this.ctx,l=o.currentTime,c=o.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0;const h=o.createBiquadFilter();h.type=r,h.frequency.value=n,h.Q.value=s;const u=o.createGain();u.gain.setValueAtTime(0,l),u.gain.linearRampToValueAtTime(e,l+a),u.gain.exponentialRampToValueAtTime(5e-4,l+t),c.connect(h),h.connect(u),u.connect(this.master),c.start(l),c.stop(l+t+.05)}tone(t,e,n,s="sine",r=0){if(!this.ctx||!this.master)return;const a=this.ctx,o=a.currentTime,l=a.createOscillator();l.type=s,l.frequency.setValueAtTime(t,o),r&&l.frequency.exponentialRampToValueAtTime(Math.max(20,t+r),o+e);const c=a.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(n,o+.01),c.gain.exponentialRampToValueAtTime(5e-4,o+e),l.connect(c),c.connect(this.master),l.start(o),l.stop(o+e+.05)}sleeve(){this.noise(.28,.25,1800,.8,"bandpass",.04)}grain(){this.noise(.03,.08,5e3+Math.random()*3e3,3)}gauze(){this.noise(.12,.3,700,.7,"lowpass",.01),this.tone(180,.1,.12,"sine",-60)}peel(){this.noise(.32,.35,2400,1.2,"bandpass",.02),this.tone(500,.3,.06,"triangle",700)}stick(){this.tone(240,.12,.25,"sine",-120),this.noise(.06,.15,1200,1)}wrapTick(){this.noise(.09,.22,1400+Math.random()*400,1,"bandpass",.01)}chime(){[880,1320,1760].forEach((t,e)=>setTimeout(()=>this.tone(t,.6,.15),e*60))}reveal(){[523,659,784,1046].forEach((t,e)=>setTimeout(()=>this.tone(t,1.1,.12,"sine"),e*90))}wobble(){this.tone(300,.08,.05,"triangle",60)}waterOn(){if(!this.ctx||!this.master||!this.noiseBuf||this.loopSrc)return;const t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuf,e.loop=!0;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=3200,n.Q.value=.6;const s=t.createGain();s.gain.setValueAtTime(0,t.currentTime),s.gain.linearRampToValueAtTime(.14,t.currentTime+.08),e.connect(n),n.connect(s),s.connect(this.master),e.start(),this.loopSrc=e,this.loopGain=s}waterOff(){if(!this.ctx||!this.loopSrc||!this.loopGain)return;const t=this.loopSrc,e=this.loopGain;this.loopSrc=null,this.loopGain=null,e.gain.setTargetAtTime(0,this.ctx.currentTime,.03),setTimeout(()=>{try{t.stop()}catch{}},200)}}function Vg(){const i=document.getElementById("app"),t=document.getElementById("nogl");if(!document.createElement("canvas").getContext("webgl2")){t.style.display="flex";return}const n=new dg({antialias:!0,powerPreference:"high-performance",alpha:!1});n.outputColorSpace=je,n.toneMapping=xo,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=nc,i.appendChild(n.domElement);const s=n.domElement,r=new kg,a=new zg(s),o=new Bg(a,r);let c=Math.min(1.75,window.devicePixelRatio||1);function h(){const v=i.clientWidth||window.innerWidth,A=i.clientHeight||window.innerHeight;n.setPixelRatio(c),n.setSize(v,A,!1),o.resize(v,A)}window.addEventListener("resize",h),window.addEventListener("orientationchange",()=>setTimeout(h,120)),window.visualViewport?.addEventListener("resize",h),h(),s.addEventListener("webglcontextlost",v=>{v.preventDefault()}),s.addEventListener("webglcontextrestored",()=>{h()});const u=document.getElementById("replay"),d=document.getElementById("mute"),p=document.getElementById("start"),g=document.getElementById("startBtn");o.onReplayReady=()=>u.classList.add("show");let y=!1;u.addEventListener("pointerdown",v=>{v.preventDefault(),!y&&(y=!0,u.classList.remove("show"),r.unlock(),o.replay(),setTimeout(()=>y=!1,1200))}),d.addEventListener("pointerdown",v=>{v.preventDefault(),r.unlock(),r.setMuted(!r.muted),d.classList.toggle("off",r.muted)}),g.addEventListener("pointerdown",v=>{v.preventDefault(),r.unlock(),p.classList.add("hide"),o.enter(0)},{once:!0});let f=performance.now(),m=0,S=!1;document.addEventListener("visibilitychange",()=>{S=document.hidden,f=performance.now()});function x(v){if(requestAnimationFrame(x),S)return;const A=Math.min(.05,(v-f)/1e3);f=v,A>.034?++m>45&&c>1&&(c=Math.max(1,c-.25),m=0,h()):m=Math.max(0,m-1),o.update(A),n.render(o.scene,o.rig.camera)}requestAnimationFrame(x),window.__game=o}Vg();
