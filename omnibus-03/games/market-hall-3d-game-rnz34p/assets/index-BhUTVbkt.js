var kc=Object.defineProperty;var Hc=(s,t,e)=>t in s?kc(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var E=(s,t,e)=>Hc(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="180",Gc=0,ba=1,Vc=2,Vl=1,Wl=2,Cn=3,Vn=0,Fe=1,Ne=2,Hn=0,Pi=1,Qr=2,wa=3,Ta=4,Wc=5,ti=100,Xc=101,qc=102,Yc=103,Zc=104,jc=200,Jc=201,Kc=202,$c=203,to=204,eo=205,Qc=206,th=207,eh=208,nh=209,ih=210,sh=211,rh=212,oh=213,ah=214,no=0,io=1,so=2,Ui=3,ro=4,oo=5,ao=6,lo=7,Jo=0,lh=1,ch=2,Gn=0,hh=1,uh=2,dh=3,Xl=4,fh=5,ph=6,mh=7,ql=300,Ni=301,Fi=302,co=303,ho=304,sr=306,Ks=1e3,ni=1001,uo=1002,en=1003,gh=1004,vs=1005,vn=1006,fr=1007,ii=1008,yn=1009,Yl=1010,Zl=1011,is=1012,Ko=1013,si=1014,xn=1015,ds=1016,$o=1017,Qo=1018,ss=1020,jl=35902,Jl=35899,Kl=1021,$l=1022,mn=1023,rs=1026,os=1027,ta=1028,ea=1029,Ql=1030,na=1031,ia=1033,qs=33776,Ys=33777,Zs=33778,js=33779,fo=35840,po=35841,mo=35842,go=35843,_o=36196,vo=37492,xo=37496,Mo=37808,yo=37809,So=37810,bo=37811,wo=37812,To=37813,Eo=37814,Ao=37815,Ro=37816,Co=37817,Po=37818,Lo=37819,Do=37820,Io=37821,Uo=36492,No=36494,Fo=36495,Oo=36283,Bo=36284,zo=36285,ko=36286,_h=3200,vh=3201,sa=0,xh=1,We="",we="srgb",Oi="srgb-linear",$s="linear",ce="srgb",ui=7680,Ea=519,Mh=512,yh=513,Sh=514,tc=515,bh=516,wh=517,Th=518,Eh=519,Aa=35044,ra=35048,Ra="300 es",Mn=2e3,Qs=2001;class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ca=1234567;const Qi=Math.PI/180,as=180/Math.PI;function li(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[s&255]+Ie[s>>8&255]+Ie[s>>16&255]+Ie[s>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function qt(s,t,e){return Math.max(t,Math.min(e,s))}function oa(s,t){return(s%t+t)%t}function Ah(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Rh(s,t,e){return s!==t?(e-s)/(t-s):0}function ts(s,t,e){return(1-e)*s+e*t}function Ch(s,t,e,n){return ts(s,t,1-Math.exp(-e*n))}function Ph(s,t=1){return t-Math.abs(oa(s,t*2)-t)}function Lh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Dh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ih(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Uh(s,t){return s+Math.random()*(t-s)}function Nh(s){return s*(.5-Math.random())}function Fh(s){s!==void 0&&(Ca=s);let t=Ca+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Oh(s){return s*Qi}function Bh(s){return s*as}function zh(s){return(s&s-1)===0&&s!==0}function kh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Hh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gh(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ai(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function He(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Li={DEG2RAD:Qi,RAD2DEG:as,generateUUID:li,clamp:qt,euclideanModulo:oa,mapLinear:Ah,inverseLerp:Rh,lerp:ts,damp:Ch,pingpong:Ph,smoothstep:Lh,smootherstep:Dh,randInt:Ih,randFloat:Uh,randFloatSpread:Nh,seededRandom:Fh,degToRad:Oh,radToDeg:Bh,isPowerOfTwo:zh,ceilPowerOfTwo:kh,floorPowerOfTwo:Hh,setQuaternionFromProperEuler:Gh,normalize:He,denormalize:Ai};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ci{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,A=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const P=Math.sqrt(S),C=Math.atan2(P,p*A);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const x=a*A;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{constructor(t=0,e=0,n=0){y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pr.copy(this).projectOnVector(t),this.sub(pr)}reflect(t){return this.sub(pr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pr=new y,Pa=new ci;class Vt{constructor(t,e,n,i,r,o,a,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],A=i[1],S=i[4],x=i[7],P=i[2],C=i[5],L=i[8];return r[0]=o*_+a*A+l*P,r[3]=o*m+a*S+l*C,r[6]=o*p+a*x+l*L,r[1]=c*_+h*A+u*P,r[4]=c*m+h*S+u*C,r[7]=c*p+h*x+u*L,r[2]=d*_+f*A+g*P,r[5]=d*m+f*S+g*C,r[8]=d*p+f*x+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(mr.makeScale(t,e)),this}rotate(t){return this.premultiply(mr.makeRotation(-t)),this}translate(t,e){return this.premultiply(mr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mr=new Vt;function ec(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vh(){const s=tr("canvas");return s.style.display="block",s}const La={};function ls(s){s in La||(La[s]=!0,console.warn(s))}function Wh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Da=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ia=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xh(){const s={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(i.r=Pn(i.r),i.g=Pn(i.g),i.b=Pn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===We?$s:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Oi]:{primaries:t,whitePoint:n,transfer:$s,toXYZ:Da,fromXYZ:Ia,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:Da,fromXYZ:Ia,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),s}const Qt=Xh();function Pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Di(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let di;class qh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{di===void 0&&(di=tr("canvas")),di.width=t.width,di.height=t.height;const i=di.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yh=0;class aa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(gr(i[o].image)):r.push(gr(i[o]))}else r=gr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function gr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zh=0;const _r=new y;class Oe extends ki{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=ni,i=ni,r=vn,o=ii,a=mn,l=yn,c=Oe.DEFAULT_ANISOTROPY,h=We){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=li(),this.name="",this.source=new aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_r).x}get height(){return this.source.getSize(_r).y}get depth(){return this.source.getSize(_r).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ks:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ks:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=ql;Oe.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(f+1)/2,P=(p+1)/2,C=(h+d)/4,L=(u+_)/4,U=(g+m)/4;return S>x&&S>P?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=C/n,r=L/n):x>P?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=C/i,r=U/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=L/r,i=U/r),this.set(n,i,r,e),this}let A=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-_)/A,this.z=(d-h)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jh extends ki{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Oe(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new aa(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends jh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nc extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jh extends Oe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xe{constructor(t=new y(1/0,1/0,1/0),e=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(t.matrixWorld),this.union(xs)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),Ms.subVectors(this.max,Wi),fi.subVectors(t.a,Wi),pi.subVectors(t.b,Wi),mi.subVectors(t.c,Wi),In.subVectors(pi,fi),Un.subVectors(mi,pi),Yn.subVectors(fi,mi);let e=[0,-In.z,In.y,0,-Un.z,Un.y,0,-Yn.z,Yn.y,In.z,0,-In.x,Un.z,0,-Un.x,Yn.z,0,-Yn.x,-In.y,In.x,0,-Un.y,Un.x,0,-Yn.y,Yn.x,0];return!vr(e,fi,pi,mi,Ms)||(e=[1,0,0,0,1,0,0,0,1],!vr(e,fi,pi,mi,Ms))?!1:(ys.crossVectors(In,Un),e=[ys.x,ys.y,ys.z],vr(e,fi,pi,mi,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wn=[new y,new y,new y,new y,new y,new y,new y,new y],hn=new y,xs=new Xe,fi=new y,pi=new y,mi=new y,In=new y,Un=new y,Yn=new y,Wi=new y,Ms=new y,ys=new y,Zn=new y;function vr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Zn.fromArray(s,r);const a=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Kh=new Xe,Xi=new y,xr=new y;class fs{constructor(t=new y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);const e=Xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(xr)),this.expandByPoint(Xi.copy(t.center).sub(xr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Tn=new y,Mr=new y,Ss=new y,Nn=new y,yr=new y,bs=new y,Sr=new y;class ic{constructor(t=new y,e=new y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Mr.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(Mr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ss),a=Nn.dot(this.direction),l=-Nn.dot(Ss),c=Nn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Mr).addScaledVector(Ss,d),f}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,i,r){yr.subVectors(e,t),bs.subVectors(n,t),Sr.crossVectors(yr,bs);let o=this.direction.dot(Sr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,t);const l=a*this.direction.dot(bs.crossVectors(Nn,bs));if(l<0)return null;const c=a*this.direction.dot(yr.cross(Nn));if(c<0||l+c>o)return null;const h=-a*Nn.dot(Sr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/gi.setFromMatrixColumn(t,0).length(),r=1/gi.setFromMatrixColumn(t,1).length(),o=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($h,t,Qh)}lookAt(t,e,n){const i=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Fn.crossVectors(n,$e),Fn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Fn.crossVectors(n,$e)),Fn.normalize(),ws.crossVectors($e,Fn),i[0]=Fn.x,i[4]=ws.x,i[8]=$e.x,i[1]=Fn.y,i[5]=ws.y,i[9]=$e.y,i[2]=Fn.z,i[6]=ws.z,i[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],A=n[3],S=n[7],x=n[11],P=n[15],C=i[0],L=i[4],U=i[8],w=i[12],b=i[1],D=i[5],B=i[9],G=i[13],Z=i[2],W=i[6],Y=i[10],tt=i[14],X=i[3],ft=i[7],xt=i[11],St=i[15];return r[0]=o*C+a*b+l*Z+c*X,r[4]=o*L+a*D+l*W+c*ft,r[8]=o*U+a*B+l*Y+c*xt,r[12]=o*w+a*G+l*tt+c*St,r[1]=h*C+u*b+d*Z+f*X,r[5]=h*L+u*D+d*W+f*ft,r[9]=h*U+u*B+d*Y+f*xt,r[13]=h*w+u*G+d*tt+f*St,r[2]=g*C+_*b+m*Z+p*X,r[6]=g*L+_*D+m*W+p*ft,r[10]=g*U+_*B+m*Y+p*xt,r[14]=g*w+_*G+m*tt+p*St,r[3]=A*C+S*b+x*Z+P*X,r[7]=A*L+S*D+x*W+P*ft,r[11]=A*U+S*B+x*Y+P*xt,r[15]=A*w+S*G+x*tt+P*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],A=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,P=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,C=e*A+n*S+i*x+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return t[0]=A*L,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*L,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*L,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*L,t[4]=S*L,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*L,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*L,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*L,t[8]=x*L,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*L,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*L,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*L,t[12]=P*L,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*L,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*L,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,A=l*c,S=l*h,x=l*u,P=n.x,C=n.y,L=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+x)*P,i[2]=(g-S)*P,i[3]=0,i[4]=(f-x)*C,i[5]=(1-(d+p))*C,i[6]=(m+A)*C,i[7]=0,i[8]=(g+S)*L,i[9]=(m-A)*L,i[10]=(1-(d+_))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=gi.set(i[0],i[1],i[2]).length();const o=gi.set(i[4],i[5],i[6]).length(),a=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],un.copy(this);const c=1/r,h=1/o,u=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Mn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Mn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Qs)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Mn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Mn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Qs)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gi=new y,un=new ue,$h=new y(0,0,0),Qh=new y(1,1,1),Fn=new y,ws=new y,$e=new y,Ua=new ue,Na=new ci;class cn{constructor(t=0,e=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Na.setFromEuler(this),this.setFromQuaternion(Na,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class la{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tu=0;const Fa=new y,_i=new ci,En=new ue,Ts=new y,qi=new y,eu=new y,nu=new ci,Oa=new y(1,0,0),Ba=new y(0,1,0),za=new y(0,0,1),ka={type:"added"},iu={type:"removed"},vi={type:"childadded",child:null},br={type:"childremoved",child:null};class Ee extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new y,e=new cn,n=new ci,i=new y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Vt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(Oa,t)}rotateY(t){return this.rotateOnAxis(Ba,t)}rotateZ(t){return this.rotateOnAxis(za,t)}translateOnAxis(t,e){return Fa.copy(t).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oa,t)}translateY(t){return this.translateOnAxis(Ba,t)}translateZ(t){return this.translateOnAxis(za,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ts.copy(t):Ts.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(qi,Ts,this.up):En.lookAt(Ts,qi,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),_i.setFromRotationMatrix(En),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ka),vi.child=t,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(iu),br.child=t,this.dispatchEvent(br),br.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ka),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,t,eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new y(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new y,An=new y,wr=new y,Rn=new y,xi=new y,Mi=new y,Ha=new y,Tr=new y,Er=new y,Ar=new y,Rr=new he,Cr=new he,Pr=new he;class fn{constructor(t=new y,e=new y,n=new y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){dn.subVectors(i,e),An.subVectors(n,e),wr.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(An),l=dn.dot(wr),c=An.dot(An),h=An.dot(wr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Rr.setScalar(0),Cr.setScalar(0),Pr.setScalar(0),Rr.fromBufferAttribute(t,e),Cr.fromBufferAttribute(t,n),Pr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Rr,r.x),o.addScaledVector(Cr,r.y),o.addScaledVector(Pr,r.z),o}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),An.subVectors(t,e),dn.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),dn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;xi.subVectors(i,n),Mi.subVectors(r,n),Tr.subVectors(t,n);const l=xi.dot(Tr),c=Mi.dot(Tr);if(l<=0&&c<=0)return e.copy(n);Er.subVectors(t,i);const h=xi.dot(Er),u=Mi.dot(Er);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(xi,o);Ar.subVectors(t,r);const f=xi.dot(Ar),g=Mi.dot(Ar);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Mi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ha.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Ha,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(xi,o).addScaledVector(Mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Lr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=oa(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Lr(o,r,t+1/3),this.g=Lr(o,r,t),this.b=Lr(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,i),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=sc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Qt.workingToColorSpace(Ue.copy(this),t),Math.round(qt(Ue.r*255,0,255))*65536+Math.round(qt(Ue.g*255,0,255))*256+Math.round(qt(Ue.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ue.copy(this),e);const n=Ue.r,i=Ue.g,r=Ue.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=we){Qt.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,i=Ue.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Es);const n=ts(On.h,Es.h,e),i=ts(On.s,Es.s,e),r=ts(On.l,Es.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Xt;Xt.NAMES=sc;let su=0;class Hi extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Pi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=eo,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ea,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==to&&(n.blendSrc=this.blendSrc),this.blendDst!==eo&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ea&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ii extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new y,As=new lt;let ru=0;class ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ru++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Aa,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Aa&&(t.usage=this.usage),t}}class rc extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class oc extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ou=0;const on=new ue,Dr=new Ee,yi=new y,Qe=new Xe,Yi=new Xe,Pe=new y;class qe extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ec(t)?oc:rc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Dr.lookAt(t),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Yi.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(Qe.min,Yi.min),Qe.expandByPoint(Pe),Pe.addVectors(Qe.max,Yi.max),Qe.expandByPoint(Pe)):(Qe.expandByPoint(Yi.min),Qe.expandByPoint(Yi.max))}Qe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pe.fromBufferAttribute(a,c),l&&(yi.fromBufferAttribute(t,c),Pe.add(yi)),i=Math.max(i,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new y,l[U]=new y;const c=new y,h=new y,u=new y,d=new lt,f=new lt,g=new lt,_=new y,m=new y;function p(U,w,b){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[U].add(_),a[w].add(_),a[b].add(_),l[U].add(m),l[w].add(m),l[b].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let U=0,w=A.length;U<w;++U){const b=A[U],D=b.start,B=b.count;for(let G=D,Z=D+B;G<Z;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const S=new y,x=new y,P=new y,C=new y;function L(U){P.fromBufferAttribute(i,U),C.copy(P);const w=a[U];S.copy(w),S.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(C,w);const D=x.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,D)}for(let U=0,w=A.length;U<w;++U){const b=A[U],D=b.start,B=b.count;for(let G=D,Z=D+B;G<Z;G+=3)L(t.getX(G+0)),L(t.getX(G+1)),L(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new y,r=new y,o=new y,a=new y,l=new y,c=new y,h=new y,u=new y;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ln(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ga=new ue,jn=new ic,Rs=new fs,Va=new y,Cs=new y,Ps=new y,Ls=new y,Ir=new y,Ds=new y,Wa=new y,Is=new y;class z extends Ee{constructor(t=new qe,e=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ir.fromBufferAttribute(u,t),o?Ds.addScaledVector(Ir,h):Ds.addScaledVector(Ir.sub(e),h))}e.add(Ds)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Rs.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Rs,Va)===null||jn.origin.distanceToSquared(Va)>(t.far-t.near)**2))&&(Ga.copy(r).invert(),jn.copy(t.ray).applyMatrix4(Ga),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],A=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=A,P=S;x<P;x+=3){const C=a.getX(x),L=a.getX(x+1),U=a.getX(x+2);i=Us(this,p,t,n,c,h,u,C,L,U),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const A=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=Us(this,o,t,n,c,h,u,A,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],A=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=A,P=S;x<P;x+=3){const C=x,L=x+1,U=x+2;i=Us(this,p,t,n,c,h,u,C,L,U),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const A=m,S=m+1,x=m+2;i=Us(this,o,t,n,c,h,u,A,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function au(s,t,e,n,i,r,o,a){let l;if(t.side===Fe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Vn,a),l===null)return null;Is.copy(a),Is.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Is);return c<e.near||c>e.far?null:{distance:c,point:Is.clone(),object:s}}function Us(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Cs),s.getVertexPosition(l,Ps),s.getVertexPosition(c,Ls);const h=au(s,t,e,n,Cs,Ps,Ls,Wa);if(h){const u=new y;fn.getBarycoord(Wa,Cs,Ps,Ls,u),i&&(h.uv=fn.getInterpolatedAttribute(i,a,l,c,u,new lt)),r&&(h.uv1=fn.getInterpolatedAttribute(r,a,l,c,u,new lt)),o&&(h.normal=fn.getInterpolatedAttribute(o,a,l,c,u,new y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new y,materialIndex:0};fn.getNormal(Cs,Ps,Ls,d.normal),h.face=d,h.barycoord=u}return h}class te extends qe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function g(_,m,p,A,S,x,P,C,L,U,w){const b=x/L,D=P/U,B=x/2,G=P/2,Z=C/2,W=L+1,Y=U+1;let tt=0,X=0;const ft=new y;for(let xt=0;xt<Y;xt++){const St=xt*D-G;for(let Ht=0;Ht<W;Ht++){const Jt=Ht*b-B;ft[_]=Jt*A,ft[m]=St*S,ft[p]=Z,c.push(ft.x,ft.y,ft.z),ft[_]=0,ft[m]=0,ft[p]=C>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(Ht/L),u.push(1-xt/U),tt+=1}}for(let xt=0;xt<U;xt++)for(let St=0;St<L;St++){const Ht=d+St+W*xt,Jt=d+St+W*(xt+1),oe=d+(St+1)+W*(xt+1),Kt=d+(St+1)+W*xt;l.push(Ht,Jt,Kt),l.push(Jt,oe,Kt),X+=6}a.addGroup(f,X,w),f+=X,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=Bi(s[e]);for(const i in n)t[i]=n[i]}return t}function lu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ac(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const cu={clone:Bi,merge:Ge};var hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hu,this.fragmentShader=uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=lu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lc extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new y,Xa=new lt,qa=new lt;class tn extends lc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=as*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Xa,qa),e.subVectors(qa,Xa)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Si=-90,bi=1;class du extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new tn(Si,bi,t,e);i.layers=this.layers,this.add(i);const r=new tn(Si,bi,t,e);r.layers=this.layers,this.add(r);const o=new tn(Si,bi,t,e);o.layers=this.layers,this.add(o);const a=new tn(Si,bi,t,e);a.layers=this.layers,this.add(a);const l=new tn(Si,bi,t,e);l.layers=this.layers,this.add(l);const c=new tn(Si,bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cc extends Oe{constructor(t=[],e=Ni,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fu extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new cc(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new te(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Hn});r.uniforms.tEquirect.value=e;const o=new z(i,r),a=e.minFilter;return e.minFilter===ii&&(e.minFilter=vn),new du(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class xe extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pu={type:"move"};class Ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pu)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ca{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new ca(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hc extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mu extends Oe{constructor(t=null,e=1,n=1,i,r,o,a,l,c=en,h=en,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya extends ln{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const wi=new ue,Za=new ue,Ns=[],ja=new Xe,gu=new ue,Zi=new z,ji=new fs;class ps extends z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ya(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wi),ja.copy(t.boundingBox).applyMatrix4(wi),this.boundingBox.union(ja)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wi),ji.copy(t.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),t.ray.intersectsSphere(ji)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,wi),Za.multiplyMatrices(n,wi),Zi.matrixWorld=Za,Zi.raycast(t,Ns);for(let o=0,a=Ns.length;o<a;o++){const l=Ns[o];l.instanceId=r,l.object=this,e.push(l)}Ns.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ya(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new mu(new Float32Array(i*this.count),i,this.count,ta,xn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Nr=new y,_u=new y,vu=new Vt;class kn{constructor(t=new y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Nr.subVectors(n,e).cross(_u.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vu.getNormalMatrix(t),i=this.coplanarPoint(Nr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new fs,xu=new lt(.5,.5),Fs=new y;class ha{constructor(t=new kn,e=new kn,n=new kn,i=new kn,r=new kn,o=new kn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],A=r[12],S=r[13],x=r[14],P=r[15];if(i[0].setComponents(c-o,f-h,p-g,P-A).normalize(),i[1].setComponents(c+o,f+h,p+g,P+A).normalize(),i[2].setComponents(c+a,f+u,p+_,P+S).normalize(),i[3].setComponents(c-a,f-u,p-_,P-S).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,f-d,p-m,P-x).normalize();else if(i[4].setComponents(c-l,f-d,p-m,P-x).normalize(),e===Mn)i[5].setComponents(c+l,f+d,p+m,P+x).normalize();else if(e===Qs)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){Jn.center.set(0,0,0);const e=xu.distanceTo(t.center);return Jn.radius=.7071067811865476+e,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fs.x=i.normal.x>0?t.max.x:t.min.x,Fs.y=i.normal.y>0?t.max.y:t.min.y,Fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mu extends Oe{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uc extends Oe{constructor(t,e,n=si,i,r,o,a=en,l=en,c,h=rs,u=1){if(h!==rs&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new aa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class dc extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class oi extends qe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new y,h=new lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jt extends qe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;A(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function A(){const x=new y,P=new y;let C=0;const L=(e-t)/n;for(let U=0;U<=r;U++){const w=[],b=U/r,D=b*(e-t)+t;for(let B=0;B<=i;B++){const G=B/i,Z=G*l+a,W=Math.sin(Z),Y=Math.cos(Z);P.x=D*W,P.y=-b*n+m,P.z=D*Y,u.push(P.x,P.y,P.z),x.set(W,L,Y).normalize(),d.push(x.x,x.y,x.z),f.push(G,1-b),w.push(g++)}_.push(w)}for(let U=0;U<i;U++)for(let w=0;w<r;w++){const b=_[w][U],D=_[w+1][U],B=_[w+1][U+1],G=_[w][U+1];(t>0||w!==0)&&(h.push(b,D,G),C+=3),(e>0||w!==r-1)&&(h.push(D,B,G),C+=3)}c.addGroup(p,C,0),p+=C}function S(x){const P=g,C=new lt,L=new y;let U=0;const w=x===!0?t:e,b=x===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const D=g;for(let B=0;B<=i;B++){const Z=B/i*l+a,W=Math.cos(Z),Y=Math.sin(Z);L.x=w*Y,L.y=m*b,L.z=w*W,u.push(L.x,L.y,L.z),d.push(0,b,0),C.x=W*.5+.5,C.y=Y*.5*b+.5,f.push(C.x,C.y),g++}for(let B=0;B<i;B++){const G=P+B,Z=D+B;x===!0?h.push(Z,Z+1,G):h.push(Z+1,Z,G),U+=3}c.addGroup(p,U,x===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new lt:new y);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new y,i=[],r=[],o=[],a=new y,l=new ue;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new y)}r[0]=new y,o[0]=new y;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(qt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(qt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ua extends Sn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yu extends ua{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function da(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Os=new y,Fr=new da,Or=new da,Br=new da;class Ho extends Sn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new y){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Os.subVectors(i[0],i[1]).add(i[0]),c=Os);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Os.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Os),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Fr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Or.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Br.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Fr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Or.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Br.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Fr.calc(l),Or.calc(l),Br.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new y().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ja(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Su(s,t){const e=1-s;return e*e*t}function bu(s,t){return 2*(1-s)*s*t}function wu(s,t){return s*s*t}function es(s,t,e,n){return Su(s,t)+bu(s,e)+wu(s,n)}function Tu(s,t){const e=1-s;return e*e*e*t}function Eu(s,t){const e=1-s;return 3*e*e*s*t}function Au(s,t){return 3*(1-s)*s*s*t}function Ru(s,t){return s*s*s*t}function ns(s,t,e,n,i){return Tu(s,t)+Eu(s,e)+Au(s,n)+Ru(s,i)}class fc extends Sn{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ns(t,i.x,r.x,o.x,a.x),ns(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cu extends Sn{constructor(t=new y,e=new y,n=new y,i=new y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new y){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ns(t,i.x,r.x,o.x,a.x),ns(t,i.y,r.y,o.y,a.y),ns(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pc extends Sn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pu extends Sn{constructor(t=new y,e=new y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new y){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mc extends Sn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(es(t,i.x,r.x,o.x),es(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends Sn{constructor(t=new y,e=new y,n=new y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new y){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(es(t,i.x,r.x,o.x),es(t,i.y,r.y,o.y),es(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _c extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ja(a,l.x,c.x,h.x,u.x),Ja(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new lt().fromArray(i))}return this}}var er=Object.freeze({__proto__:null,ArcCurve:yu,CatmullRomCurve3:Ho,CubicBezierCurve:fc,CubicBezierCurve3:Cu,EllipseCurve:ua,LineCurve:pc,LineCurve3:Pu,QuadraticBezierCurve:mc,QuadraticBezierCurve3:gc,SplineCurve:_c});class Lu extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new er[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new er[i.type]().fromJSON(i))}return this}}class Ka extends Lu{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new pc(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new mc(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new fc(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _c(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new ua(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ms extends Ka{constructor(t){super(t),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ka().fromJSON(i))}return this}}function Du(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=vc(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ou(s,t,r,e)),s.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<i;d+=e){const f=s[d],g=s[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return cs(r,o,e,a,l,c,0),o}function vc(s,t,e,n,i){let r;if(i===Zu(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=$a(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=$a(o/n|0,s[o],s[o+1],r);return r&&zi(r,r.next)&&(us(r),r=r.next),r}function ai(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(zi(e,e.next)||Se(e.prev,e,e.next)===0)){if(us(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cs(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Gu(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Uu(s,n,i,r):Iu(s)){t.push(l.i,s.i,c.i),us(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Nu(ai(s),t),cs(s,t,e,n,i,r,2)):o===2&&Fu(s,t,e,n,i,r):cs(ai(s),t,e,n,i,r,1);break}}}function Iu(s){const t=s.prev,e=s,n=s.next;if(Se(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ki(i,a,r,l,o,c,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Uu(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Se(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),p=Go(f,g,t,e,n),A=Go(_,m,t,e,n);let S=s.prevZ,x=s.nextZ;for(;S&&S.z>=p&&x&&x.z<=A;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&Ki(a,h,l,u,c,d,S.x,S.y)&&Se(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ki(a,h,l,u,c,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&Ki(a,h,l,u,c,d,S.x,S.y)&&Se(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=A;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ki(a,h,l,u,c,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Nu(s,t){let e=s;do{const n=e.prev,i=e.next.next;!zi(n,i)&&Mc(n,e,e.next,i)&&hs(n,i)&&hs(i,n)&&(t.push(n.i,e.i,i.i),us(e),us(e.next),e=s=i),e=e.next}while(e!==s);return ai(e)}function Fu(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xu(o,a)){let l=yc(o,a);o=ai(o,o.next),l=ai(l,l.next),cs(o,t,e,n,i,r,0),cs(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Ou(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=vc(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Wu(c))}i.sort(Bu);for(let r=0;r<i.length;r++)e=zu(i[r],e);return e}function Bu(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function zu(s,t){const e=ku(s,t);if(!e)return t;const n=yc(e,s);return ai(n,n.next),ai(e,e.next)}function ku(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(zi(s,e))return e;do{if(zi(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&xc(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);hs(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Hu(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Hu(s,t){return Se(s.prev,s,t.prev)<0&&Se(t.next,s,s.next)<0}function Gu(s,t,e,n){let i=s;do i.z===0&&(i.z=Go(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Vu(i)}function Vu(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Go(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Wu(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function xc(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Ki(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&xc(s,t,e,n,i,r,o,a)}function Xu(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!qu(s,t)&&(hs(s,t)&&hs(t,s)&&Yu(s,t)&&(Se(s.prev,s,t.prev)||Se(s,t.prev,t))||zi(s,t)&&Se(s.prev,s,s.next)>0&&Se(t.prev,t,t.next)>0)}function Se(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function zi(s,t){return s.x===t.x&&s.y===t.y}function Mc(s,t,e,n){const i=zs(Se(s,t,e)),r=zs(Se(s,t,n)),o=zs(Se(e,n,s)),a=zs(Se(e,n,t));return!!(i!==r&&o!==a||i===0&&Bs(s,e,t)||r===0&&Bs(s,n,t)||o===0&&Bs(e,s,n)||a===0&&Bs(e,t,n))}function Bs(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function zs(s){return s>0?1:s<0?-1:0}function qu(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Mc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function hs(s,t){return Se(s.prev,s,s.next)<0?Se(s,t,s.next)>=0&&Se(s,s.prev,t)>=0:Se(s,t,s.prev)<0||Se(s,s.next,t)<0}function Yu(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function yc(s,t){const e=Vo(s.i,s.x,s.y),n=Vo(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $a(s,t,e,n){const i=Vo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function us(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Vo(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zu(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ju{static triangulate(t,e,n=2){return Du(t,e,n)}}class Ri{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ri.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Qa(t),tl(n,t);let o=t.length;e.forEach(Qa);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,tl(n,e[l]);const a=ju.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Qa(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function tl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class rr extends qe{constructor(t=new ms([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new _e(i,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:Ju;let S,x=!1,P,C,L,U;p&&(S=p.getSpacedPoints(h),x=!0,d=!1,P=p.computeFrenetFrames(h,!1),C=new y,L=new y,U=new y),d||(m=0,f=0,g=0,_=0);const w=a.extractPoints(c);let b=w.shape;const D=w.holes;if(!Ri.isClockWise(b)){b=b.reverse();for(let nt=0,$=D.length;nt<$;nt++){const K=D[nt];Ri.isClockWise(K)&&(D[nt]=K.reverse())}}function G(nt){const K=10000000000000001e-36;let J=nt[0];for(let ut=1;ut<=nt.length;ut++){const st=ut%nt.length,dt=nt[st],zt=dt.x-J.x,Bt=dt.y-J.y,T=zt*zt+Bt*Bt,v=Math.max(Math.abs(dt.x),Math.abs(dt.y),Math.abs(J.x),Math.abs(J.y)),O=K*v*v;if(T<=O){nt.splice(st,1),ut--;continue}J=dt}}G(b),D.forEach(G);const Z=D.length,W=b;for(let nt=0;nt<Z;nt++){const $=D[nt];b=b.concat($)}function Y(nt,$,K){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector($,K)}const tt=b.length;function X(nt,$,K){let J,ut,st;const dt=nt.x-$.x,zt=nt.y-$.y,Bt=K.x-nt.x,T=K.y-nt.y,v=dt*dt+zt*zt,O=dt*T-zt*Bt;if(Math.abs(O)>Number.EPSILON){const V=Math.sqrt(v),et=Math.sqrt(Bt*Bt+T*T),q=$.x-zt/V,Ct=$.y+dt/V,ht=K.x-T/et,Et=K.y+Bt/et,At=((ht-q)*T-(Et-Ct)*Bt)/(dt*T-zt*Bt);J=q+dt*At-nt.x,ut=Ct+zt*At-nt.y;const rt=J*J+ut*ut;if(rt<=2)return new lt(J,ut);st=Math.sqrt(rt/2)}else{let V=!1;dt>Number.EPSILON?Bt>Number.EPSILON&&(V=!0):dt<-Number.EPSILON?Bt<-Number.EPSILON&&(V=!0):Math.sign(zt)===Math.sign(T)&&(V=!0),V?(J=-zt,ut=dt,st=Math.sqrt(v)):(J=dt,ut=zt,st=Math.sqrt(v/2))}return new lt(J/st,ut/st)}const ft=[];for(let nt=0,$=W.length,K=$-1,J=nt+1;nt<$;nt++,K++,J++)K===$&&(K=0),J===$&&(J=0),ft[nt]=X(W[nt],W[K],W[J]);const xt=[];let St,Ht=ft.concat();for(let nt=0,$=Z;nt<$;nt++){const K=D[nt];St=[];for(let J=0,ut=K.length,st=ut-1,dt=J+1;J<ut;J++,st++,dt++)st===ut&&(st=0),dt===ut&&(dt=0),St[J]=X(K[J],K[st],K[dt]);xt.push(St),Ht=Ht.concat(St)}let Jt;if(m===0)Jt=Ri.triangulateShape(W,D);else{const nt=[],$=[];for(let K=0;K<m;K++){const J=K/m,ut=f*Math.cos(J*Math.PI/2),st=g*Math.sin(J*Math.PI/2)+_;for(let dt=0,zt=W.length;dt<zt;dt++){const Bt=Y(W[dt],ft[dt],st);Lt(Bt.x,Bt.y,-ut),J===0&&nt.push(Bt)}for(let dt=0,zt=Z;dt<zt;dt++){const Bt=D[dt];St=xt[dt];const T=[];for(let v=0,O=Bt.length;v<O;v++){const V=Y(Bt[v],St[v],st);Lt(V.x,V.y,-ut),J===0&&T.push(V)}J===0&&$.push(T)}}Jt=Ri.triangulateShape(nt,$)}const oe=Jt.length,Kt=g+_;for(let nt=0;nt<tt;nt++){const $=d?Y(b[nt],Ht[nt],Kt):b[nt];x?(L.copy(P.normals[0]).multiplyScalar($.x),C.copy(P.binormals[0]).multiplyScalar($.y),U.copy(S[0]).add(L).add(C),Lt(U.x,U.y,U.z)):Lt($.x,$.y,0)}for(let nt=1;nt<=h;nt++)for(let $=0;$<tt;$++){const K=d?Y(b[$],Ht[$],Kt):b[$];x?(L.copy(P.normals[nt]).multiplyScalar(K.x),C.copy(P.binormals[nt]).multiplyScalar(K.y),U.copy(S[nt]).add(L).add(C),Lt(U.x,U.y,U.z)):Lt(K.x,K.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){const $=nt/m,K=f*Math.cos($*Math.PI/2),J=g*Math.sin($*Math.PI/2)+_;for(let ut=0,st=W.length;ut<st;ut++){const dt=Y(W[ut],ft[ut],J);Lt(dt.x,dt.y,u+K)}for(let ut=0,st=D.length;ut<st;ut++){const dt=D[ut];St=xt[ut];for(let zt=0,Bt=dt.length;zt<Bt;zt++){const T=Y(dt[zt],St[zt],J);x?Lt(T.x,T.y+S[h-1].y,S[h-1].x+K):Lt(T.x,T.y,u+K)}}}j(),it();function j(){const nt=i.length/3;if(d){let $=0,K=tt*$;for(let J=0;J<oe;J++){const ut=Jt[J];Tt(ut[2]+K,ut[1]+K,ut[0]+K)}$=h+m*2,K=tt*$;for(let J=0;J<oe;J++){const ut=Jt[J];Tt(ut[0]+K,ut[1]+K,ut[2]+K)}}else{for(let $=0;$<oe;$++){const K=Jt[$];Tt(K[2],K[1],K[0])}for(let $=0;$<oe;$++){const K=Jt[$];Tt(K[0]+tt*h,K[1]+tt*h,K[2]+tt*h)}}n.addGroup(nt,i.length/3-nt,0)}function it(){const nt=i.length/3;let $=0;yt(W,$),$+=W.length;for(let K=0,J=D.length;K<J;K++){const ut=D[K];yt(ut,$),$+=ut.length}n.addGroup(nt,i.length/3-nt,1)}function yt(nt,$){let K=nt.length;for(;--K>=0;){const J=K;let ut=K-1;ut<0&&(ut=nt.length-1);for(let st=0,dt=h+m*2;st<dt;st++){const zt=tt*st,Bt=tt*(st+1),T=$+J+zt,v=$+ut+zt,O=$+ut+Bt,V=$+J+Bt;Yt(T,v,O,V)}}}function Lt(nt,$,K){l.push(nt),l.push($),l.push(K)}function Tt(nt,$,K){pe(nt),pe($),pe(K);const J=i.length/3,ut=A.generateTopUV(n,i,J-3,J-2,J-1);R(ut[0]),R(ut[1]),R(ut[2])}function Yt(nt,$,K,J){pe(nt),pe($),pe(J),pe($),pe(K),pe(J);const ut=i.length/3,st=A.generateSideWallUV(n,i,ut-6,ut-3,ut-2,ut-1);R(st[0]),R(st[1]),R(st[3]),R(st[1]),R(st[2]),R(st[3])}function pe(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function R(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ku(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new er[i.type]().fromJSON(i)),new rr(n,t.options)}}const Ju={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new lt(r,o),new lt(a,l),new lt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new lt(o,1-l),new lt(c,1-u),new lt(d,1-g),new lt(_,1-p)]:[new lt(a,1-l),new lt(h,1-u),new lt(f,1-g),new lt(m,1-p)]}};function Ku(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class De extends qe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const A=p*d-o;for(let S=0;S<c;S++){const x=S*u-r;g.push(x,-A,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const S=A+c*p,x=A+c*(p+1),P=A+1+c*(p+1),C=A+1+c*p;f.push(S,x,C),f.push(x,P,C)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.width,t.height,t.widthSegments,t.heightSegments)}}class pn extends qe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new y,d=new y,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const A=[],S=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const C=P/e;u.x=-t*Math.cos(i+C*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(i+C*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+x,1-S),A.push(c++)}h.push(A)}for(let p=0;p<n;p++)for(let A=0;A<e;A++){const S=h[p][A+1],x=h[p][A],P=h[p+1][A],C=h[p+1][A+1];(p!==0||o>0)&&f.push(S,x,C),(p!==n-1||l<Math.PI)&&f.push(x,P,C)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ve extends qe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new y,u=new y,d=new y;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,A=(i+1)*f+g;o.push(_,m,A),o.push(m,p,A)}this.setIndex(o),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class fa extends qe{constructor(t=new gc(new y(-1,-1,0),new y(-1,1,0),new y(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new y,l=new y,c=new lt;let h=new y;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function _(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),A(),p()}function m(S){h=t.getPointAt(S/e,h);const x=o.normals[S],P=o.binormals[S];for(let C=0;C<=i;C++){const L=C/i*Math.PI*2,U=Math.sin(L),w=-Math.cos(L);l.x=w*x.x+U*P.x,l.y=w*x.y+U*P.y,l.z=w*x.z+U*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=e;S++)for(let x=1;x<=i;x++){const P=(i+1)*(S-1)+(x-1),C=(i+1)*S+(x-1),L=(i+1)*S+x,U=(i+1)*(S-1)+x;g.push(P,C,U),g.push(C,L,U)}}function A(){for(let S=0;S<=e;S++)for(let x=0;x<=i;x++)c.x=S/e,c.y=x/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new fa(new er[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class ne extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zr extends ne{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class $u extends Hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qu extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class td extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class or extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ed extends or{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const kr=new ue,el=new y,nl=new y;class Sc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ha,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;el.setFromMatrixPosition(t.matrixWorld),e.position.copy(el),nl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nl),e.updateMatrixWorld(),kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const il=new ue,Ji=new y,Hr=new y;class nd extends Sc{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new y(1,0,0),new y(-1,0,0),new y(0,0,1),new y(0,0,-1),new y(0,1,0),new y(0,-1,0)],this._cubeUps=[new y(0,1,0),new y(0,1,0),new y(0,1,0),new y(0,1,0),new y(0,0,1),new y(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ji.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ji),Hr.copy(n.position),Hr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Hr),n.updateMatrixWorld(),i.makeTranslation(-Ji.x,-Ji.y,-Ji.z),il.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il,n.coordinateSystem,n.reversedDepth)}}class pa extends or{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new nd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bc extends lc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class id extends Sc{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sl extends or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new id}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sd extends or{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rd extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class od{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const rl=new ue;class ad{constructor(t,e,n=0,i=1/0){this.ray=new ic(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new la,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rl),this}intersectObject(t,e=!0,n=[]){return Wo(t,this,n,e),n.sort(ol),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Wo(t[i],this,n,e);return n.sort(ol),n}}function ol(s,t){return s.distance-t.distance}function Wo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Wo(r[o],t,e,!0)}}function al(s,t,e,n){const i=ld(n);switch(e){case Kl:return s*t;case ta:return s*t/i.components*i.byteLength;case ea:return s*t/i.components*i.byteLength;case Ql:return s*t*2/i.components*i.byteLength;case na:return s*t*2/i.components*i.byteLength;case $l:return s*t*3/i.components*i.byteLength;case mn:return s*t*4/i.components*i.byteLength;case ia:return s*t*4/i.components*i.byteLength;case qs:case Ys:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zs:case js:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case po:case go:return Math.max(s,16)*Math.max(t,8)/4;case fo:case mo:return Math.max(s,8)*Math.max(t,8)/2;case _o:case vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case So:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case bo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case To:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Co:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Po:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Do:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Uo:case No:case Fo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Oo:case Bo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case zo:case ko:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ld(s){switch(s){case yn:case Yl:return{byteLength:1,components:1};case is:case Zl:case ds:return{byteLength:2,components:1};case $o:case Qo:return{byteLength:2,components:4};case si:case Ko:case xn:return{byteLength:4,components:1};case jl:case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function cd(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
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
#endif`,dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
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
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
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
#endif`,xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bd=`#ifdef USE_IRIDESCENCE
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
#endif`,wd=`#ifdef USE_BUMPMAP
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Id=`#define PI 3.141592653589793
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
} // validated`,Ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nd=`vec3 transformedNormal = objectNormal;
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
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kd=`#ifdef USE_GRADIENTMAP
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
}`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ef=`uniform bool receiveShadow;
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
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lf=`PhysicalMaterial material;
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
#endif`,cf=`struct PhysicalMaterial {
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
}`,hf=`
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
#endif`,uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mf=`#if defined( USE_POINTS_UV )
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
#endif`,yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`#ifdef USE_MORPHTARGETS
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
#endif`,Af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,If=`#ifdef USE_NORMALMAP
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
#endif`,Uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jf=`float getShadowMask() {
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
}`,Jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kf=`#ifdef USE_SKINNING
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
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qf=`#ifdef USE_SKINNING
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
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
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
#endif`,rp=`#ifdef USE_TRANSMISSION
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,up=`uniform sampler2D t2D;
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
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`#include <common>
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
}`,_p=`#if DEPTH_PACKING == 3200
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
}`,vp=`#define DISTANCE
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
}`,xp=`#define DISTANCE
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`uniform float scale;
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
}`,bp=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ep=`#define LAMBERT
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
}`,Ap=`#define LAMBERT
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
}`,Rp=`#define MATCAP
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
}`,Cp=`#define MATCAP
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
}`,Pp=`#define NORMAL
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
}`,Lp=`#define NORMAL
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
}`,Dp=`#define PHONG
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
}`,Ip=`#define PHONG
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
}`,Up=`#define STANDARD
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
}`,Np=`#define STANDARD
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
}`,Fp=`#define TOON
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
}`,Op=`#define TOON
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
}`,Bp=`uniform float size;
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
}`,zp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Hp=`uniform vec3 color;
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
}`,Gp=`uniform float rotation;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:hd,alphahash_pars_fragment:ud,alphamap_fragment:dd,alphamap_pars_fragment:fd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,batching_pars_vertex:vd,batching_vertex:xd,begin_vertex:Md,beginnormal_vertex:yd,bsdfs:Sd,iridescence_fragment:bd,bumpmap_pars_fragment:wd,clipping_planes_fragment:Td,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:Ad,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Pd,color_pars_vertex:Ld,color_vertex:Dd,common:Id,cube_uv_reflection_fragment:Ud,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Fd,displacementmap_vertex:Od,emissivemap_fragment:Bd,emissivemap_pars_fragment:zd,colorspace_fragment:kd,colorspace_pars_fragment:Hd,envmap_fragment:Gd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:nf,envmap_vertex:qd,fog_vertex:Yd,fog_pars_vertex:Zd,fog_fragment:jd,fog_pars_fragment:Jd,gradientmap_pars_fragment:Kd,lightmap_pars_fragment:$d,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:tf,lights_pars_begin:ef,lights_toon_fragment:sf,lights_toon_pars_fragment:rf,lights_phong_fragment:of,lights_phong_pars_fragment:af,lights_physical_fragment:lf,lights_physical_pars_fragment:cf,lights_fragment_begin:hf,lights_fragment_maps:uf,lights_fragment_end:df,logdepthbuf_fragment:ff,logdepthbuf_pars_fragment:pf,logdepthbuf_pars_vertex:mf,logdepthbuf_vertex:gf,map_fragment:_f,map_pars_fragment:vf,map_particle_fragment:xf,map_particle_pars_fragment:Mf,metalnessmap_fragment:yf,metalnessmap_pars_fragment:Sf,morphinstance_vertex:bf,morphcolor_vertex:wf,morphnormal_vertex:Tf,morphtarget_pars_vertex:Ef,morphtarget_vertex:Af,normal_fragment_begin:Rf,normal_fragment_maps:Cf,normal_pars_fragment:Pf,normal_pars_vertex:Lf,normal_vertex:Df,normalmap_pars_fragment:If,clearcoat_normal_fragment_begin:Uf,clearcoat_normal_fragment_maps:Nf,clearcoat_pars_fragment:Ff,iridescence_pars_fragment:Of,opaque_fragment:Bf,packing:zf,premultiplied_alpha_fragment:kf,project_vertex:Hf,dithering_fragment:Gf,dithering_pars_fragment:Vf,roughnessmap_fragment:Wf,roughnessmap_pars_fragment:Xf,shadowmap_pars_fragment:qf,shadowmap_pars_vertex:Yf,shadowmap_vertex:Zf,shadowmask_pars_fragment:jf,skinbase_vertex:Jf,skinning_pars_vertex:Kf,skinning_vertex:$f,skinnormal_vertex:Qf,specularmap_fragment:tp,specularmap_pars_fragment:ep,tonemapping_fragment:np,tonemapping_pars_fragment:ip,transmission_fragment:sp,transmission_pars_fragment:rp,uv_pars_fragment:op,uv_pars_vertex:ap,uv_vertex:lp,worldpos_vertex:cp,background_vert:hp,background_frag:up,backgroundCube_vert:dp,backgroundCube_frag:fp,cube_vert:pp,cube_frag:mp,depth_vert:gp,depth_frag:_p,distanceRGBA_vert:vp,distanceRGBA_frag:xp,equirect_vert:Mp,equirect_frag:yp,linedashed_vert:Sp,linedashed_frag:bp,meshbasic_vert:wp,meshbasic_frag:Tp,meshlambert_vert:Ep,meshlambert_frag:Ap,meshmatcap_vert:Rp,meshmatcap_frag:Cp,meshnormal_vert:Pp,meshnormal_frag:Lp,meshphong_vert:Dp,meshphong_frag:Ip,meshphysical_vert:Up,meshphysical_frag:Np,meshtoon_vert:Fp,meshtoon_frag:Op,points_vert:Bp,points_frag:zp,shadow_vert:kp,shadow_frag:Hp,sprite_vert:Gp,sprite_frag:Vp},mt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},_n={basic:{uniforms:Ge([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ge([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ge([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ge([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ge([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ge([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ge([mt.points,mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ge([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ge([mt.common,mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ge([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ge([mt.sprite,mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ge([mt.common,mt.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ge([mt.lights,mt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};_n.physical={uniforms:Ge([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const ks={r:0,b:0,g:0},Kn=new cn,Wp=new ue;function Xp(s,t,e,n,i,r,o){const a=new Xt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1;const P=g(S);P===null?p(a,l):P&&P.isColor&&(p(P,1),x=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,x){const P=g(x);P&&(P.isCubeTexture||P.mapping===sr)?(h===void 0&&(h=new z(new te(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Bi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Kn.copy(x.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(Kn)),h.material.toneMapped=Qt.getTransfer(P.colorSpace)!==ce,(u!==P||d!==P.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=P,d=P.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new z(new De(2,2),new Wn({name:"BackgroundMaterial",uniforms:Bi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(P.colorSpace)!==ce,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||d!==P.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=P,d=P.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(ks,ac(s)),n.buffers.color.setClear(ks.r,ks.g,ks.b,x,o)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m,dispose:A}}function qp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(b,D,B,G,Z){let W=!1;const Y=u(G,B,D);r!==Y&&(r=Y,c(r.object)),W=f(b,G,B,Z),W&&g(b,G,B,Z),Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(b,D,B,G),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,D,B){const G=B.wireframe===!0;let Z=n[b.id];Z===void 0&&(Z={},n[b.id]=Z);let W=Z[D.id];W===void 0&&(W={},Z[D.id]=W);let Y=W[G];return Y===void 0&&(Y=d(l()),W[G]=Y),Y}function d(b){const D=[],B=[],G=[];for(let Z=0;Z<e;Z++)D[Z]=0,B[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:G,object:b,attributes:{},index:null}}function f(b,D,B,G){const Z=r.attributes,W=D.attributes;let Y=0;const tt=B.getAttributes();for(const X in tt)if(tt[X].location>=0){const xt=Z[X];let St=W[X];if(St===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(St=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(St=b.instanceColor)),xt===void 0||xt.attribute!==St||St&&xt.data!==St.data)return!0;Y++}return r.attributesNum!==Y||r.index!==G}function g(b,D,B,G){const Z={},W=D.attributes;let Y=0;const tt=B.getAttributes();for(const X in tt)if(tt[X].location>=0){let xt=W[X];xt===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor));const St={};St.attribute=xt,xt&&xt.data&&(St.data=xt.data),Z[X]=St,Y++}r.attributes=Z,r.attributesNum=Y,r.index=G}function _(){const b=r.newAttributes;for(let D=0,B=b.length;D<B;D++)b[D]=0}function m(b){p(b,0)}function p(b,D){const B=r.newAttributes,G=r.enabledAttributes,Z=r.attributeDivisors;B[b]=1,G[b]===0&&(s.enableVertexAttribArray(b),G[b]=1),Z[b]!==D&&(s.vertexAttribDivisor(b,D),Z[b]=D)}function A(){const b=r.newAttributes,D=r.enabledAttributes;for(let B=0,G=D.length;B<G;B++)D[B]!==b[B]&&(s.disableVertexAttribArray(B),D[B]=0)}function S(b,D,B,G,Z,W,Y){Y===!0?s.vertexAttribIPointer(b,D,B,Z,W):s.vertexAttribPointer(b,D,B,G,Z,W)}function x(b,D,B,G){_();const Z=G.attributes,W=B.getAttributes(),Y=D.defaultAttributeValues;for(const tt in W){const X=W[tt];if(X.location>=0){let ft=Z[tt];if(ft===void 0&&(tt==="instanceMatrix"&&b.instanceMatrix&&(ft=b.instanceMatrix),tt==="instanceColor"&&b.instanceColor&&(ft=b.instanceColor)),ft!==void 0){const xt=ft.normalized,St=ft.itemSize,Ht=t.get(ft);if(Ht===void 0)continue;const Jt=Ht.buffer,oe=Ht.type,Kt=Ht.bytesPerElement,j=oe===s.INT||oe===s.UNSIGNED_INT||ft.gpuType===Ko;if(ft.isInterleavedBufferAttribute){const it=ft.data,yt=it.stride,Lt=ft.offset;if(it.isInstancedInterleavedBuffer){for(let Tt=0;Tt<X.locationSize;Tt++)p(X.location+Tt,it.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Tt=0;Tt<X.locationSize;Tt++)m(X.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let Tt=0;Tt<X.locationSize;Tt++)S(X.location+Tt,St/X.locationSize,oe,xt,yt*Kt,(Lt+St/X.locationSize*Tt)*Kt,j)}else{if(ft.isInstancedBufferAttribute){for(let it=0;it<X.locationSize;it++)p(X.location+it,ft.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let it=0;it<X.locationSize;it++)m(X.location+it);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let it=0;it<X.locationSize;it++)S(X.location+it,St/X.locationSize,oe,xt,St*Kt,St/X.locationSize*it*Kt,j)}}else if(Y!==void 0){const xt=Y[tt];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(X.location,xt);break;case 3:s.vertexAttrib3fv(X.location,xt);break;case 4:s.vertexAttrib4fv(X.location,xt);break;default:s.vertexAttrib1fv(X.location,xt)}}}}A()}function P(){U();for(const b in n){const D=n[b];for(const B in D){const G=D[B];for(const Z in G)h(G[Z].object),delete G[Z];delete D[B]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const B in D){const G=D[B];for(const Z in G)h(G[Z].object),delete G[Z];delete D[B]}delete n[b.id]}function L(b){for(const D in n){const B=n[D];if(B[b.id]===void 0)continue;const G=B[b.id];for(const Z in G)h(G[Z].object),delete G[Z];delete B[b.id]}}function U(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function Yp(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==mn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const U=L===ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==yn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==xn&&!U)}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:P,maxSamples:C}}function jp(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new kn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const A=r?0:n,S=A*4;let x=p.clippingState||null;l.value=x,x=h(g,d,S,f);for(let P=0;P!==S;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(A,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Jp(s){let t=new WeakMap;function e(o,a){return a===co?o.mapping=Ni:a===ho&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===co||a===ho)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new fu(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ci=4,ll=[.125,.215,.35,.446,.526,.582],ei=20,Gr=new bc,cl=new Xt;let Vr=null,Wr=0,Xr=0,qr=!1;const Qn=(1+Math.sqrt(5))/2,Ti=1/Qn,hl=[new y(-Qn,Ti,0),new y(Qn,Ti,0),new y(-Ti,0,Qn),new y(Ti,0,Qn),new y(0,Qn,-Ti),new y(0,Qn,Ti),new y(-1,1,-1),new y(1,1,-1),new y(-1,1,1),new y(1,1,1)],Kp=new y;class Xo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Kp}=r;Vr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vr,Wr,Xr),this._renderer.xr.enabled=qr,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:ds,format:mn,colorSpace:Oi,depthBuffer:!1},i=ul(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$p(r)),this._blurMaterial=Qp(r,t,e)}return i}_compileMaterial(t){const e=new z(this._lodPlanes[0],t);this._renderer.compile(e,Gr)}_sceneToCubeUV(t,e,n,i,r){const l=new tn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(cl),u.toneMapping=Gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new Ii({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),m=new z(new te,_);let p=!1;const A=t.background;A?A.isColor&&(_.color.copy(A),t.background=null,p=!0):(_.color.copy(cl),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const P=this._cubeSize;Hs(i,x*P,S>2?P:0,P,P),u.setRenderTarget(i),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=A}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ni||t.mapping===Fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new z(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Gr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hl[(i-r-1)%hl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new z(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ei-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ei;m>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ei}`);const p=[];let A=0;for(let L=0;L<ei;++L){const U=L/_,w=Math.exp(-U*U/2);p.push(w),L===0?A+=w:L<m&&(A+=2*w)}for(let L=0;L<p.length;L++)p[L]=p[L]/A;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const x=this._sizeLods[i],P=3*x*(i>S-Ci?i-S+Ci:0),C=4*(this._cubeSize-x);Hs(e,P,C,3*x,2*x),l.setRenderTarget(e),l.render(u,Gr)}}function $p(s){const t=[],e=[],n=[];let i=s;const r=s-Ci+1+ll.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ci?l=ll[o-s+Ci-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,A=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let C=0;C<f;C++){const L=C%3*2/3-1,U=C>2?0:-1,w=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];A.set(w,_*g*C),S.set(d,m*g*C);const b=[C,C,C,C,C,C];x.set(b,p*g*C)}const P=new qe;P.setAttribute("position",new ln(A,_)),P.setAttribute("uv",new ln(S,m)),P.setAttribute("faceIndex",new ln(x,p)),t.push(P),i>Ci&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ul(s,t,e){const n=new ri(s,t,e);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Qp(s,t,e){const n=new Float32Array(ei),i=new y(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function dl(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ma(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function fl(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ma(){return`

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
	`}function tm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===co||l===ho,h=l===Ni||l===Fi;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Xo(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Xo(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function em(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ls("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nm(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const A=f.array;_=f.version;for(let S=0,x=A.length;S<x;S+=3){const P=A[S+0],C=A[S+1],L=A[S+2];d.push(P,C,C,L,L,P)}}else if(g!==void 0){const A=g.array;_=g.version;for(let S=0,x=A.length/3-1;S<x;S+=3){const P=S+0,C=S+1,L=S+2;d.push(P,C,C,L,L,P)}}else return;const m=new(ec(d)?oc:rc)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function im(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let A=0;A<g;A++)p+=f[A]*_[A];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function rm(s,t,e){const n=new WeakMap,i=new he;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const L=new Float32Array(P*C*4*u),U=new nc(L,P,C,u);U.type=xn,U.needsUpdate=!0;const w=x*4;for(let D=0;D<u;D++){const B=p[D],G=A[D],Z=S[D],W=P*C*4*D;for(let Y=0;Y<B.count;Y++){const tt=Y*w;g===!0&&(i.fromBufferAttribute(B,Y),L[W+tt+0]=i.x,L[W+tt+1]=i.y,L[W+tt+2]=i.z,L[W+tt+3]=0),_===!0&&(i.fromBufferAttribute(G,Y),L[W+tt+4]=i.x,L[W+tt+5]=i.y,L[W+tt+6]=i.z,L[W+tt+7]=0),m===!0&&(i.fromBufferAttribute(Z,Y),L[W+tt+8]=i.x,L[W+tt+9]=i.y,L[W+tt+10]=i.z,L[W+tt+11]=Z.itemSize===4?i.w:1)}}d={count:u,texture:U,size:new lt(P,C)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function om(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Tc=new Oe,pl=new uc(1,1),Ec=new nc,Ac=new Jh,Rc=new cc,ml=[],gl=[],_l=new Float32Array(16),vl=new Float32Array(9),xl=new Float32Array(4);function Gi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ml[i];if(r===void 0&&(r=new Float32Array(i),ml[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ar(s,t){let e=gl[t];e===void 0&&(e=new Int32Array(t),gl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function am(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function lm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function cm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function hm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function um(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;xl.set(n),s.uniformMatrix2fv(this.addr,!1,xl),Ce(e,n)}}function dm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;vl.set(n),s.uniformMatrix3fv(this.addr,!1,vl),Ce(e,n)}}function fm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;_l.set(n),s.uniformMatrix4fv(this.addr,!1,_l),Ce(e,n)}}function pm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function mm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function gm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function _m(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function vm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function xm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function Mm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function ym(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function Sm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(pl.compareFunction=tc,r=pl):r=Tc,e.setTexture2D(t||r,i)}function bm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ac,i)}function wm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Rc,i)}function Tm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ec,i)}function Em(s){switch(s){case 5126:return am;case 35664:return lm;case 35665:return cm;case 35666:return hm;case 35674:return um;case 35675:return dm;case 35676:return fm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return _m;case 5125:return vm;case 36294:return xm;case 36295:return Mm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Sm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Tm}}function Am(s,t){s.uniform1fv(this.addr,t)}function Rm(s,t){const e=Gi(t,this.size,2);s.uniform2fv(this.addr,e)}function Cm(s,t){const e=Gi(t,this.size,3);s.uniform3fv(this.addr,e)}function Pm(s,t){const e=Gi(t,this.size,4);s.uniform4fv(this.addr,e)}function Lm(s,t){const e=Gi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Dm(s,t){const e=Gi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Im(s,t){const e=Gi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Um(s,t){s.uniform1iv(this.addr,t)}function Nm(s,t){s.uniform2iv(this.addr,t)}function Fm(s,t){s.uniform3iv(this.addr,t)}function Om(s,t){s.uniform4iv(this.addr,t)}function Bm(s,t){s.uniform1uiv(this.addr,t)}function zm(s,t){s.uniform2uiv(this.addr,t)}function km(s,t){s.uniform3uiv(this.addr,t)}function Hm(s,t){s.uniform4uiv(this.addr,t)}function Gm(s,t,e){const n=this.cache,i=t.length,r=ar(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Tc,r[o])}function Vm(s,t,e){const n=this.cache,i=t.length,r=ar(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ac,r[o])}function Wm(s,t,e){const n=this.cache,i=t.length,r=ar(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Rc,r[o])}function Xm(s,t,e){const n=this.cache,i=t.length,r=ar(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ec,r[o])}function qm(s){switch(s){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Lm;case 35675:return Dm;case 35676:return Im;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return km;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}class Ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Em(e.type)}}class Zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qm(e.type)}}class jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function Ml(s,t){s.seq.push(t),s.map[t.id]=t}function Jm(s,t,e){const n=s.name,i=n.length;for(Yr.lastIndex=0;;){const r=Yr.exec(n),o=Yr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ml(e,c===void 0?new Ym(a,s,t):new Zm(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new jm(a),Ml(e,u)),e=u}}}class Js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Jm(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function yl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Km=37297;let $m=0;function Qm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Sl=new Vt;function t0(s){Qt._getMatrix(Sl,Qt.workingColorSpace,s);const t=`mat3( ${Sl.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(s)){case $s:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function bl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Qm(s.getShaderSource(t),a)}else return r}function e0(s,t){const e=t0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function n0(s,t){let e;switch(t){case hh:e="Linear";break;case uh:e="Reinhard";break;case dh:e="Cineon";break;case Xl:e="ACESFilmic";break;case ph:e="AgX";break;case mh:e="Neutral";break;case fh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new y;function i0(){Qt.getLuminanceCoefficients(Gs);const s=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($i).join(`
`)}function r0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function $i(s){return s!==""}function wl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const a0=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(s){return s.replace(a0,c0)}const l0=new Map;function c0(s,t){let e=Wt[t];if(e===void 0){const n=l0.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qo(e)}const h0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function El(s){return s.replace(h0,u0)}function u0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Al(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function d0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function f0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ni:case Fi:t="ENVMAP_TYPE_CUBE";break;case sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function p0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function m0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jo:t="ENVMAP_BLENDING_MULTIPLY";break;case lh:t="ENVMAP_BLENDING_MIX";break;case ch:t="ENVMAP_BLENDING_ADD";break}return t}function g0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function _0(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=d0(e),c=f0(e),h=p0(e),u=m0(e),d=g0(e),f=s0(e),g=r0(r),_=i.createProgram();let m,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($i).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($i).join(`
`),p.length>0&&(p+=`
`)):(m=[Al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),p=[Al(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?n0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,e0("linearToOutputTexel",e.outputColorSpace),i0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($i).join(`
`)),o=qo(o),o=wl(o,e),o=Tl(o,e),a=qo(a),a=wl(a,e),a=Tl(a,e),o=El(o),a=El(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=A+m+o,x=A+p+a,P=yl(i,i.VERTEX_SHADER,S),C=yl(i,i.FRAGMENT_SHADER,x);i.attachShader(_,P),i.attachShader(_,C),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function L(D){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_)||"",G=i.getShaderInfoLog(P)||"",Z=i.getShaderInfoLog(C)||"",W=B.trim(),Y=G.trim(),tt=Z.trim();let X=!0,ft=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,C);else{const xt=bl(i,P,"vertex"),St=bl(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+xt+`
`+St)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(Y===""||tt==="")&&(ft=!1);ft&&(D.diagnostics={runnable:X,programLog:W,vertexShader:{log:Y,prefix:m},fragmentShader:{log:tt,prefix:p}})}i.deleteShader(P),i.deleteShader(C),U=new Js(i,_),w=o0(i,_)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,Km)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$m++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=C,this}let v0=0;class x0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new M0(t),e.set(t,n)),n}}class M0{constructor(t){this.id=v0++,this.code=t,this.usedTimes=0}}function y0(s,t,e,n,i,r,o){const a=new la,l=new x0,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,D,B,G){const Z=B.fog,W=G.geometry,Y=w.isMeshStandardMaterial?B.environment:null,tt=(w.isMeshStandardMaterial?e:t).get(w.envMap||Y),X=tt&&tt.mapping===sr?tt.image.height:null,ft=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const xt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,St=xt!==void 0?xt.length:0;let Ht=0;W.morphAttributes.position!==void 0&&(Ht=1),W.morphAttributes.normal!==void 0&&(Ht=2),W.morphAttributes.color!==void 0&&(Ht=3);let Jt,oe,Kt,j;if(ft){const re=_n[ft];Jt=re.vertexShader,oe=re.fragmentShader}else Jt=w.vertexShader,oe=w.fragmentShader,l.update(w),Kt=l.getVertexShaderID(w),j=l.getFragmentShaderID(w);const it=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),Lt=G.isInstancedMesh===!0,Tt=G.isBatchedMesh===!0,Yt=!!w.map,pe=!!w.matcap,R=!!tt,nt=!!w.aoMap,$=!!w.lightMap,K=!!w.bumpMap,J=!!w.normalMap,ut=!!w.displacementMap,st=!!w.emissiveMap,dt=!!w.metalnessMap,zt=!!w.roughnessMap,Bt=w.anisotropy>0,T=w.clearcoat>0,v=w.dispersion>0,O=w.iridescence>0,V=w.sheen>0,et=w.transmission>0,q=Bt&&!!w.anisotropyMap,Ct=T&&!!w.clearcoatMap,ht=T&&!!w.clearcoatNormalMap,Et=T&&!!w.clearcoatRoughnessMap,At=O&&!!w.iridescenceMap,rt=O&&!!w.iridescenceThicknessMap,vt=V&&!!w.sheenColorMap,Ft=V&&!!w.sheenRoughnessMap,Pt=!!w.specularMap,gt=!!w.specularColorMap,Gt=!!w.specularIntensityMap,I=et&&!!w.transmissionMap,ct=et&&!!w.thicknessMap,pt=!!w.gradientMap,bt=!!w.alphaMap,ot=w.alphaTest>0,Q=!!w.alphaHash,Rt=!!w.extensions;let kt=Gn;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(kt=s.toneMapping);const me={shaderID:ft,shaderType:w.type,shaderName:w.name,vertexShader:Jt,fragmentShader:oe,defines:w.defines,customVertexShaderID:Kt,customFragmentShaderID:j,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&G._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&G.instanceColor!==null,instancingMorph:Lt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Oi,alphaToCoverage:!!w.alphaToCoverage,map:Yt,matcap:pe,envMap:R,envMapMode:R&&tt.mapping,envMapCubeUVHeight:X,aoMap:nt,lightMap:$,bumpMap:K,normalMap:J,displacementMap:d&&ut,emissiveMap:st,normalMapObjectSpace:J&&w.normalMapType===xh,normalMapTangentSpace:J&&w.normalMapType===sa,metalnessMap:dt,roughnessMap:zt,anisotropy:Bt,anisotropyMap:q,clearcoat:T,clearcoatMap:Ct,clearcoatNormalMap:ht,clearcoatRoughnessMap:Et,dispersion:v,iridescence:O,iridescenceMap:At,iridescenceThicknessMap:rt,sheen:V,sheenColorMap:vt,sheenRoughnessMap:Ft,specularMap:Pt,specularColorMap:gt,specularIntensityMap:Gt,transmission:et,transmissionMap:I,thicknessMap:ct,gradientMap:pt,opaque:w.transparent===!1&&w.blending===Pi&&w.alphaToCoverage===!1,alphaMap:bt,alphaTest:ot,alphaHash:Q,combine:w.combine,mapUv:Yt&&_(w.map.channel),aoMapUv:nt&&_(w.aoMap.channel),lightMapUv:$&&_(w.lightMap.channel),bumpMapUv:K&&_(w.bumpMap.channel),normalMapUv:J&&_(w.normalMap.channel),displacementMapUv:ut&&_(w.displacementMap.channel),emissiveMapUv:st&&_(w.emissiveMap.channel),metalnessMapUv:dt&&_(w.metalnessMap.channel),roughnessMapUv:zt&&_(w.roughnessMap.channel),anisotropyMapUv:q&&_(w.anisotropyMap.channel),clearcoatMapUv:Ct&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ht&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&_(w.sheenRoughnessMap.channel),specularMapUv:Pt&&_(w.specularMap.channel),specularColorMapUv:gt&&_(w.specularColorMap.channel),specularIntensityMapUv:Gt&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:ct&&_(w.thicknessMap.channel),alphaMapUv:bt&&_(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(J||Bt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(Yt||bt),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:yt,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ht,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:Yt&&w.map.isVideoTexture===!0&&Qt.getTransfer(w.map.colorSpace)===ce,decodeVideoTextureEmissive:st&&w.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(w.emissiveMap.colorSpace)===ce,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ne,flipSided:w.side===Fe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Rt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&w.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function p(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)b.push(D),b.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(A(b,w),S(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function A(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function S(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const b=g[w.type];let D;if(b){const B=_n[b];D=cu.clone(B.uniforms)}else D=w.uniforms;return D}function P(w,b){let D;for(let B=0,G=h.length;B<G;B++){const Z=h[B];if(Z.cacheKey===b){D=Z,++D.usedTimes;break}}return D===void 0&&(D=new _0(s,b,w,r),h.push(D)),D}function C(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function L(w){l.remove(w)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:U}}function S0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function b0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Rl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Cl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||b0),n.length>1&&n.sort(d||Rl),i.length>1&&i.sort(d||Rl)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function w0(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Cl,s.set(n,[o])):i>=r.length?(o=new Cl,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function T0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new y,color:new Xt};break;case"SpotLight":e={position:new y,direction:new y,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new y,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new y,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new y,halfWidth:new y,halfHeight:new y};break}return s[t.id]=e,e}}}function E0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let A0=0;function R0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function C0(s){const t=new T0,e=E0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new y);const i=new y,r=new ue,o=new ue;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,A=0,S=0,x=0,P=0,C=0,L=0;c.sort(R0);for(let w=0,b=c.length;w<b;w++){const D=c[w],B=D.color,G=D.intensity,Z=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*G,u+=B.g*G,d+=B.b*G;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],G);L++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const tt=D.shadow,X=e.get(D);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=D.shadow.matrix,A++}n.directional[f]=Y,f++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(B).multiplyScalar(G),Y.distance=Z,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[_]=Y;const tt=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,tt.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[_]=tt.matrix,D.castShadow){const X=e.get(D);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=W,x++}_++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(B).multiplyScalar(G),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Y,m++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const tt=D.shadow,X=e.get(D);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(G),Y.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[p]=Y,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==A||U.numPointShadows!==S||U.numSpotShadows!==x||U.numSpotMaps!==P||U.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,U.directionalLength=f,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=A,U.numPointShadows=S,U.numSpotShadows=x,U.numSpotMaps=P,U.numLightProbes=L,n.version=A0++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const S=c[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Pl(s){const t=new C0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function P0(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Pl(s),t.set(i,[a])):r>=o.length?(a=new Pl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D0=`uniform sampler2D shadow_pass;
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
}`;function I0(s,t,e){let n=new ha;const i=new lt,r=new lt,o=new he,a=new Qu({depthPacking:vh}),l=new td,c={},h=e.maxTextureSize,u={[Vn]:Fe,[Fe]:Vn,[Ne]:Ne},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:L0,fragmentShader:D0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new qe;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new z(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let p=this.type;this.render=function(C,L,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=s.getRenderTarget(),b=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Hn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=p!==Cn&&this.type===Cn,Z=p===Cn&&this.type!==Cn;for(let W=0,Y=C.length;W<Y;W++){const tt=C[W],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ft=X.getFrameExtents();if(i.multiply(ft),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ft.x),i.x=r.x*ft.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ft.y),i.y=r.y*ft.y,X.mapSize.y=r.y)),X.map===null||G===!0||Z===!0){const St=this.type!==Cn?{minFilter:en,magFilter:en}:{};X.map!==null&&X.map.dispose(),X.map=new ri(i.x,i.y,St),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const xt=X.getViewportCount();for(let St=0;St<xt;St++){const Ht=X.getViewport(St);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),B.viewport(o),X.updateMatrices(tt,St),n=X.getFrustum(),x(L,U,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===Cn&&A(X,U),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,b,D)};function A(C,L){const U=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ri(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(L,null,U,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(L,null,U,f,_,null)}function S(C,L,U,w){let b=null;const D=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)b=D;else if(b=U.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const B=b.uuid,G=L.uuid;let Z=c[B];Z===void 0&&(Z={},c[B]=Z);let W=Z[G];W===void 0&&(W=b.clone(),Z[G]=W,L.addEventListener("dispose",P)),b=W}if(b.visible=L.visible,b.wireframe=L.wireframe,w===Cn?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:u[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=s.properties.get(b);B.light=U}return b}function x(C,L,U,w,b){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Cn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const G=t.update(C),Z=C.material;if(Array.isArray(Z)){const W=G.groups;for(let Y=0,tt=W.length;Y<tt;Y++){const X=W[Y],ft=Z[X.materialIndex];if(ft&&ft.visible){const xt=S(C,ft,w,b);C.onBeforeShadow(s,C,L,U,G,xt,X),s.renderBufferDirect(U,null,G,xt,C,X),C.onAfterShadow(s,C,L,U,G,xt,X)}}}else if(Z.visible){const W=S(C,Z,w,b);C.onBeforeShadow(s,C,L,U,G,W,null),s.renderBufferDirect(U,null,G,W,C,null),C.onAfterShadow(s,C,L,U,G,W,null)}}const B=C.children;for(let G=0,Z=B.length;G<Z;G++)x(B[G],L,U,w,b)}function P(C){C.target.removeEventListener("dispose",P);for(const U in c){const w=c[U],b=C.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const U0={[no]:io,[so]:ao,[ro]:lo,[Ui]:oo,[io]:no,[ao]:so,[lo]:ro,[oo]:Ui};function N0(s,t){function e(){let I=!1;const ct=new he;let pt=null;const bt=new he(0,0,0,0);return{setMask:function(ot){pt!==ot&&!I&&(s.colorMask(ot,ot,ot,ot),pt=ot)},setLocked:function(ot){I=ot},setClear:function(ot,Q,Rt,kt,me){me===!0&&(ot*=kt,Q*=kt,Rt*=kt),ct.set(ot,Q,Rt,kt),bt.equals(ct)===!1&&(s.clearColor(ot,Q,Rt,kt),bt.copy(ct))},reset:function(){I=!1,pt=null,bt.set(-1,0,0,0)}}}function n(){let I=!1,ct=!1,pt=null,bt=null,ot=null;return{setReversed:function(Q){if(ct!==Q){const Rt=t.get("EXT_clip_control");Q?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ct=Q;const kt=ot;ot=null,this.setClear(kt)}},getReversed:function(){return ct},setTest:function(Q){Q?it(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(Q){pt!==Q&&!I&&(s.depthMask(Q),pt=Q)},setFunc:function(Q){if(ct&&(Q=U0[Q]),bt!==Q){switch(Q){case no:s.depthFunc(s.NEVER);break;case io:s.depthFunc(s.ALWAYS);break;case so:s.depthFunc(s.LESS);break;case Ui:s.depthFunc(s.LEQUAL);break;case ro:s.depthFunc(s.EQUAL);break;case oo:s.depthFunc(s.GEQUAL);break;case ao:s.depthFunc(s.GREATER);break;case lo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}bt=Q}},setLocked:function(Q){I=Q},setClear:function(Q){ot!==Q&&(ct&&(Q=1-Q),s.clearDepth(Q),ot=Q)},reset:function(){I=!1,pt=null,bt=null,ot=null,ct=!1}}}function i(){let I=!1,ct=null,pt=null,bt=null,ot=null,Q=null,Rt=null,kt=null,me=null;return{setTest:function(re){I||(re?it(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(re){ct!==re&&!I&&(s.stencilMask(re),ct=re)},setFunc:function(re,bn,gn){(pt!==re||bt!==bn||ot!==gn)&&(s.stencilFunc(re,bn,gn),pt=re,bt=bn,ot=gn)},setOp:function(re,bn,gn){(Q!==re||Rt!==bn||kt!==gn)&&(s.stencilOp(re,bn,gn),Q=re,Rt=bn,kt=gn)},setLocked:function(re){I=re},setClear:function(re){me!==re&&(s.clearStencil(re),me=re)},reset:function(){I=!1,ct=null,pt=null,bt=null,ot=null,Q=null,Rt=null,kt=null,me=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,A=null,S=null,x=null,P=null,C=null,L=new Xt(0,0,0),U=0,w=!1,b=null,D=null,B=null,G=null,Z=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,tt=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=tt>=2);let ft=null,xt={};const St=s.getParameter(s.SCISSOR_BOX),Ht=s.getParameter(s.VIEWPORT),Jt=new he().fromArray(St),oe=new he().fromArray(Ht);function Kt(I,ct,pt,bt){const ot=new Uint8Array(4),Q=s.createTexture();s.bindTexture(I,Q),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Rt=0;Rt<pt;Rt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(ct+Rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return Q}const j={};j[s.TEXTURE_2D]=Kt(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(s.DEPTH_TEST),o.setFunc(Ui),K(!1),J(ba),it(s.CULL_FACE),nt(Hn);function it(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function yt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Lt(I,ct){return u[I]!==ct?(s.bindFramebuffer(I,ct),u[I]=ct,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function Tt(I,ct){let pt=f,bt=!1;if(I){pt=d.get(ct),pt===void 0&&(pt=[],d.set(ct,pt));const ot=I.textures;if(pt.length!==ot.length||pt[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,Rt=ot.length;Q<Rt;Q++)pt[Q]=s.COLOR_ATTACHMENT0+Q;pt.length=ot.length,bt=!0}}else pt[0]!==s.BACK&&(pt[0]=s.BACK,bt=!0);bt&&s.drawBuffers(pt)}function Yt(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const pe={[ti]:s.FUNC_ADD,[Xc]:s.FUNC_SUBTRACT,[qc]:s.FUNC_REVERSE_SUBTRACT};pe[Yc]=s.MIN,pe[Zc]=s.MAX;const R={[jc]:s.ZERO,[Jc]:s.ONE,[Kc]:s.SRC_COLOR,[to]:s.SRC_ALPHA,[ih]:s.SRC_ALPHA_SATURATE,[eh]:s.DST_COLOR,[Qc]:s.DST_ALPHA,[$c]:s.ONE_MINUS_SRC_COLOR,[eo]:s.ONE_MINUS_SRC_ALPHA,[nh]:s.ONE_MINUS_DST_COLOR,[th]:s.ONE_MINUS_DST_ALPHA,[sh]:s.CONSTANT_COLOR,[rh]:s.ONE_MINUS_CONSTANT_COLOR,[oh]:s.CONSTANT_ALPHA,[ah]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(I,ct,pt,bt,ot,Q,Rt,kt,me,re){if(I===Hn){_===!0&&(yt(s.BLEND),_=!1);return}if(_===!1&&(it(s.BLEND),_=!0),I!==Wc){if(I!==m||re!==w){if((p!==ti||x!==ti)&&(s.blendEquation(s.FUNC_ADD),p=ti,x=ti),re)switch(I){case Pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qr:s.blendFunc(s.ONE,s.ONE);break;case wa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ta:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case wa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ta:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,S=null,P=null,C=null,L.set(0,0,0),U=0,m=I,w=re}return}ot=ot||ct,Q=Q||pt,Rt=Rt||bt,(ct!==p||ot!==x)&&(s.blendEquationSeparate(pe[ct],pe[ot]),p=ct,x=ot),(pt!==A||bt!==S||Q!==P||Rt!==C)&&(s.blendFuncSeparate(R[pt],R[bt],R[Q],R[Rt]),A=pt,S=bt,P=Q,C=Rt),(kt.equals(L)===!1||me!==U)&&(s.blendColor(kt.r,kt.g,kt.b,me),L.copy(kt),U=me),m=I,w=!1}function $(I,ct){I.side===Ne?yt(s.CULL_FACE):it(s.CULL_FACE);let pt=I.side===Fe;ct&&(pt=!pt),K(pt),I.blending===Pi&&I.transparent===!1?nt(Hn):nt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const bt=I.stencilWrite;a.setTest(bt),bt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),st(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function K(I){b!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),b=I)}function J(I){I!==Gc?(it(s.CULL_FACE),I!==D&&(I===ba?s.cullFace(s.BACK):I===Vc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),D=I}function ut(I){I!==B&&(Y&&s.lineWidth(I),B=I)}function st(I,ct,pt){I?(it(s.POLYGON_OFFSET_FILL),(G!==ct||Z!==pt)&&(s.polygonOffset(ct,pt),G=ct,Z=pt)):yt(s.POLYGON_OFFSET_FILL)}function dt(I){I?it(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function zt(I){I===void 0&&(I=s.TEXTURE0+W-1),ft!==I&&(s.activeTexture(I),ft=I)}function Bt(I,ct,pt){pt===void 0&&(ft===null?pt=s.TEXTURE0+W-1:pt=ft);let bt=xt[pt];bt===void 0&&(bt={type:void 0,texture:void 0},xt[pt]=bt),(bt.type!==I||bt.texture!==ct)&&(ft!==pt&&(s.activeTexture(pt),ft=pt),s.bindTexture(I,ct||j[I]),bt.type=I,bt.texture=ct)}function T(){const I=xt[ft];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(I){Jt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Jt.copy(I))}function Ft(I){oe.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),oe.copy(I))}function Pt(I,ct){let pt=c.get(ct);pt===void 0&&(pt=new WeakMap,c.set(ct,pt));let bt=pt.get(I);bt===void 0&&(bt=s.getUniformBlockIndex(ct,I.name),pt.set(I,bt))}function gt(I,ct){const bt=c.get(ct).get(I);l.get(ct)!==bt&&(s.uniformBlockBinding(ct,bt,I.__bindingPointIndex),l.set(ct,bt))}function Gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ft=null,xt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,A=null,S=null,x=null,P=null,C=null,L=new Xt(0,0,0),U=0,w=!1,b=null,D=null,B=null,G=null,Z=null,Jt.set(0,0,s.canvas.width,s.canvas.height),oe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:yt,bindFramebuffer:Lt,drawBuffers:Tt,useProgram:Yt,setBlending:nt,setMaterial:$,setFlipSided:K,setCullFace:J,setLineWidth:ut,setPolygonOffset:st,setScissorTest:dt,activeTexture:zt,bindTexture:Bt,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:At,texImage3D:rt,updateUBOMapping:Pt,uniformBlockBinding:gt,texStorage2D:ht,texStorage3D:Et,texSubImage2D:V,texSubImage3D:et,compressedTexSubImage2D:q,compressedTexSubImage3D:Ct,scissor:vt,viewport:Ft,reset:Gt}}function F0(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):tr("canvas")}function _(T,v,O){let V=1;const et=Bt(T);if((et.width>O||et.height>O)&&(V=O/Math.max(et.width,et.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(V*et.width),Ct=Math.floor(V*et.height);u===void 0&&(u=g(q,Ct));const ht=v?g(q,Ct):u;return ht.width=q,ht.height=Ct,ht.getContext("2d").drawImage(T,0,0,q,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+q+"x"+Ct+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(T,v,O,V,et=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=v;if(v===s.RED&&(O===s.FLOAT&&(q=s.R32F),O===s.HALF_FLOAT&&(q=s.R16F),O===s.UNSIGNED_BYTE&&(q=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.R8UI),O===s.UNSIGNED_SHORT&&(q=s.R16UI),O===s.UNSIGNED_INT&&(q=s.R32UI),O===s.BYTE&&(q=s.R8I),O===s.SHORT&&(q=s.R16I),O===s.INT&&(q=s.R32I)),v===s.RG&&(O===s.FLOAT&&(q=s.RG32F),O===s.HALF_FLOAT&&(q=s.RG16F),O===s.UNSIGNED_BYTE&&(q=s.RG8)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RG8UI),O===s.UNSIGNED_SHORT&&(q=s.RG16UI),O===s.UNSIGNED_INT&&(q=s.RG32UI),O===s.BYTE&&(q=s.RG8I),O===s.SHORT&&(q=s.RG16I),O===s.INT&&(q=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGB8UI),O===s.UNSIGNED_SHORT&&(q=s.RGB16UI),O===s.UNSIGNED_INT&&(q=s.RGB32UI),O===s.BYTE&&(q=s.RGB8I),O===s.SHORT&&(q=s.RGB16I),O===s.INT&&(q=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),O===s.UNSIGNED_INT&&(q=s.RGBA32UI),O===s.BYTE&&(q=s.RGBA8I),O===s.SHORT&&(q=s.RGBA16I),O===s.INT&&(q=s.RGBA32I)),v===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),v===s.RGBA){const Ct=et?$s:Qt.getTransfer(V);O===s.FLOAT&&(q=s.RGBA32F),O===s.HALF_FLOAT&&(q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(q=Ct===ce?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(T,v){let O;return T?v===null||v===si||v===ss?O=s.DEPTH24_STENCIL8:v===xn?O=s.DEPTH32F_STENCIL8:v===is&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===si||v===ss?O=s.DEPTH_COMPONENT24:v===xn?O=s.DEPTH_COMPONENT32F:v===is&&(O=s.DEPTH_COMPONENT16),O}function P(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==en&&T.minFilter!==vn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function C(T){const v=T.target;v.removeEventListener("dispose",C),U(v),v.isVideoTexture&&h.delete(v)}function L(T){const v=T.target;v.removeEventListener("dispose",L),b(v)}function U(T){const v=n.get(T);if(v.__webglInit===void 0)return;const O=T.source,V=d.get(O);if(V){const et=V[v.__cacheKey];et.usedTimes--,et.usedTimes===0&&w(T),Object.keys(V).length===0&&d.delete(O)}n.remove(T)}function w(T){const v=n.get(T);s.deleteTexture(v.__webglTexture);const O=T.source,V=d.get(O);delete V[v.__cacheKey],o.memory.textures--}function b(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let et=0;et<v.__webglFramebuffer[V].length;et++)s.deleteFramebuffer(v.__webglFramebuffer[V][et]);else s.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)s.deleteFramebuffer(v.__webglFramebuffer[V]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=T.textures;for(let V=0,et=O.length;V<et;V++){const q=n.get(O[V]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(O[V])}n.remove(T)}let D=0;function B(){D=0}function G(){const T=D;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),D+=1,T}function Z(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function W(T,v){const O=n.get(T);if(T.isVideoTexture&&dt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const V=T.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,T,v);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function Y(T,v){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){j(O,T,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function tt(T,v){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){j(O,T,v);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function X(T,v){const O=n.get(T);if(T.version>0&&O.__version!==T.version){it(O,T,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}const ft={[Ks]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[uo]:s.MIRRORED_REPEAT},xt={[en]:s.NEAREST,[gh]:s.NEAREST_MIPMAP_NEAREST,[vs]:s.NEAREST_MIPMAP_LINEAR,[vn]:s.LINEAR,[fr]:s.LINEAR_MIPMAP_NEAREST,[ii]:s.LINEAR_MIPMAP_LINEAR},St={[Mh]:s.NEVER,[Eh]:s.ALWAYS,[yh]:s.LESS,[tc]:s.LEQUAL,[Sh]:s.EQUAL,[Th]:s.GEQUAL,[bh]:s.GREATER,[wh]:s.NOTEQUAL};function Ht(T,v){if(v.type===xn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===vn||v.magFilter===fr||v.magFilter===vs||v.magFilter===ii||v.minFilter===vn||v.minFilter===fr||v.minFilter===vs||v.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,ft[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ft[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ft[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,xt[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,xt[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===en||v.minFilter!==vs&&v.minFilter!==ii||v.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Jt(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",C));const V=v.source;let et=d.get(V);et===void 0&&(et={},d.set(V,et));const q=Z(v);if(q!==T.__cacheKey){et[q]===void 0&&(et[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),et[q].usedTimes++;const Ct=et[T.__cacheKey];Ct!==void 0&&(et[T.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(v)),T.__cacheKey=q,T.__webglTexture=et[q].texture}return O}function oe(T,v,O){return Math.floor(Math.floor(T/O)/v)}function Kt(T,v,O,V){const q=T.updateRanges;if(q.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,O,V,v.data);else{q.sort((rt,vt)=>rt.start-vt.start);let Ct=0;for(let rt=1;rt<q.length;rt++){const vt=q[Ct],Ft=q[rt],Pt=vt.start+vt.count,gt=oe(Ft.start,v.width,4),Gt=oe(vt.start,v.width,4);Ft.start<=Pt+1&&gt===Gt&&oe(Ft.start+Ft.count-1,v.width,4)===gt?vt.count=Math.max(vt.count,Ft.start+Ft.count-vt.start):(++Ct,q[Ct]=Ft)}q.length=Ct+1;const ht=s.getParameter(s.UNPACK_ROW_LENGTH),Et=s.getParameter(s.UNPACK_SKIP_PIXELS),At=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let rt=0,vt=q.length;rt<vt;rt++){const Ft=q[rt],Pt=Math.floor(Ft.start/4),gt=Math.ceil(Ft.count/4),Gt=Pt%v.width,I=Math.floor(Pt/v.width),ct=gt,pt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,Gt,I,ct,pt,O,V,v.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ht),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Et),s.pixelStorei(s.UNPACK_SKIP_ROWS,At)}}function j(T,v,O){let V=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=s.TEXTURE_3D);const et=Jt(T,v),q=v.source;e.bindTexture(V,T.__webglTexture,s.TEXTURE0+O);const Ct=n.get(q);if(q.version!==Ct.__version||et===!0){e.activeTexture(s.TEXTURE0+O);const ht=Qt.getPrimaries(Qt.workingColorSpace),Et=v.colorSpace===We?null:Qt.getPrimaries(v.colorSpace),At=v.colorSpace===We||ht===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let rt=_(v.image,!1,i.maxTextureSize);rt=zt(v,rt);const vt=r.convert(v.format,v.colorSpace),Ft=r.convert(v.type);let Pt=S(v.internalFormat,vt,Ft,v.colorSpace,v.isVideoTexture);Ht(V,v);let gt;const Gt=v.mipmaps,I=v.isVideoTexture!==!0,ct=Ct.__version===void 0||et===!0,pt=q.dataReady,bt=P(v,rt);if(v.isDepthTexture)Pt=x(v.format===os,v.type),ct&&(I?e.texStorage2D(s.TEXTURE_2D,1,Pt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Pt,rt.width,rt.height,0,vt,Ft,null));else if(v.isDataTexture)if(Gt.length>0){I&&ct&&e.texStorage2D(s.TEXTURE_2D,bt,Pt,Gt[0].width,Gt[0].height);for(let ot=0,Q=Gt.length;ot<Q;ot++)gt=Gt[ot],I?pt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,gt.width,gt.height,vt,Ft,gt.data):e.texImage2D(s.TEXTURE_2D,ot,Pt,gt.width,gt.height,0,vt,Ft,gt.data);v.generateMipmaps=!1}else I?(ct&&e.texStorage2D(s.TEXTURE_2D,bt,Pt,rt.width,rt.height),pt&&Kt(v,rt,vt,Ft)):e.texImage2D(s.TEXTURE_2D,0,Pt,rt.width,rt.height,0,vt,Ft,rt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Pt,Gt[0].width,Gt[0].height,rt.depth);for(let ot=0,Q=Gt.length;ot<Q;ot++)if(gt=Gt[ot],v.format!==mn)if(vt!==null)if(I){if(pt)if(v.layerUpdates.size>0){const Rt=al(gt.width,gt.height,v.format,v.type);for(const kt of v.layerUpdates){const me=gt.data.subarray(kt*Rt/gt.data.BYTES_PER_ELEMENT,(kt+1)*Rt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,kt,gt.width,gt.height,1,vt,me)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,gt.width,gt.height,rt.depth,vt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,Pt,gt.width,gt.height,rt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,gt.width,gt.height,rt.depth,vt,Ft,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ot,Pt,gt.width,gt.height,rt.depth,0,vt,Ft,gt.data)}else{I&&ct&&e.texStorage2D(s.TEXTURE_2D,bt,Pt,Gt[0].width,Gt[0].height);for(let ot=0,Q=Gt.length;ot<Q;ot++)gt=Gt[ot],v.format!==mn?vt!==null?I?pt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,ot,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?pt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,gt.width,gt.height,vt,Ft,gt.data):e.texImage2D(s.TEXTURE_2D,ot,Pt,gt.width,gt.height,0,vt,Ft,gt.data)}else if(v.isDataArrayTexture)if(I){if(ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Pt,rt.width,rt.height,rt.depth),pt)if(v.layerUpdates.size>0){const ot=al(rt.width,rt.height,v.format,v.type);for(const Q of v.layerUpdates){const Rt=rt.data.subarray(Q*ot/rt.data.BYTES_PER_ELEMENT,(Q+1)*ot/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,vt,Ft,Rt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,vt,Ft,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,rt.width,rt.height,rt.depth,0,vt,Ft,rt.data);else if(v.isData3DTexture)I?(ct&&e.texStorage3D(s.TEXTURE_3D,bt,Pt,rt.width,rt.height,rt.depth),pt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,vt,Ft,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,rt.width,rt.height,rt.depth,0,vt,Ft,rt.data);else if(v.isFramebufferTexture){if(ct)if(I)e.texStorage2D(s.TEXTURE_2D,bt,Pt,rt.width,rt.height);else{let ot=rt.width,Q=rt.height;for(let Rt=0;Rt<bt;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,Pt,ot,Q,0,vt,Ft,null),ot>>=1,Q>>=1}}else if(Gt.length>0){if(I&&ct){const ot=Bt(Gt[0]);e.texStorage2D(s.TEXTURE_2D,bt,Pt,ot.width,ot.height)}for(let ot=0,Q=Gt.length;ot<Q;ot++)gt=Gt[ot],I?pt&&e.texSubImage2D(s.TEXTURE_2D,ot,0,0,vt,Ft,gt):e.texImage2D(s.TEXTURE_2D,ot,Pt,vt,Ft,gt);v.generateMipmaps=!1}else if(I){if(ct){const ot=Bt(rt);e.texStorage2D(s.TEXTURE_2D,bt,Pt,ot.width,ot.height)}pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Ft,rt)}else e.texImage2D(s.TEXTURE_2D,0,Pt,vt,Ft,rt);m(v)&&p(V),Ct.__version=q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function it(T,v,O){if(v.image.length!==6)return;const V=Jt(T,v),et=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const q=n.get(et);if(et.version!==q.__version||V===!0){e.activeTexture(s.TEXTURE0+O);const Ct=Qt.getPrimaries(Qt.workingColorSpace),ht=v.colorSpace===We?null:Qt.getPrimaries(v.colorSpace),Et=v.colorSpace===We||Ct===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const At=v.isCompressedTexture||v.image[0].isCompressedTexture,rt=v.image[0]&&v.image[0].isDataTexture,vt=[];for(let Q=0;Q<6;Q++)!At&&!rt?vt[Q]=_(v.image[Q],!0,i.maxCubemapSize):vt[Q]=rt?v.image[Q].image:v.image[Q],vt[Q]=zt(v,vt[Q]);const Ft=vt[0],Pt=r.convert(v.format,v.colorSpace),gt=r.convert(v.type),Gt=S(v.internalFormat,Pt,gt,v.colorSpace),I=v.isVideoTexture!==!0,ct=q.__version===void 0||V===!0,pt=et.dataReady;let bt=P(v,Ft);Ht(s.TEXTURE_CUBE_MAP,v);let ot;if(At){I&&ct&&e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Gt,Ft.width,Ft.height);for(let Q=0;Q<6;Q++){ot=vt[Q].mipmaps;for(let Rt=0;Rt<ot.length;Rt++){const kt=ot[Rt];v.format!==mn?Pt!==null?I?pt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,kt.width,kt.height,Pt,kt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,Gt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,0,0,kt.width,kt.height,Pt,gt,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt,Gt,kt.width,kt.height,0,Pt,gt,kt.data)}}}else{if(ot=v.mipmaps,I&&ct){ot.length>0&&bt++;const Q=Bt(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Gt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){I?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,vt[Q].width,vt[Q].height,Pt,gt,vt[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Gt,vt[Q].width,vt[Q].height,0,Pt,gt,vt[Q].data);for(let Rt=0;Rt<ot.length;Rt++){const me=ot[Rt].image[Q].image;I?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,me.width,me.height,Pt,gt,me.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,Gt,me.width,me.height,0,Pt,gt,me.data)}}else{I?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pt,gt,vt[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Gt,Pt,gt,vt[Q]);for(let Rt=0;Rt<ot.length;Rt++){const kt=ot[Rt];I?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,0,0,Pt,gt,kt.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Rt+1,Gt,Pt,gt,kt.image[Q])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),q.__version=et.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function yt(T,v,O,V,et,q){const Ct=r.convert(O.format,O.colorSpace),ht=r.convert(O.type),Et=S(O.internalFormat,Ct,ht,O.colorSpace),At=n.get(v),rt=n.get(O);if(rt.__renderTarget=v,!At.__hasExternalTextures){const vt=Math.max(1,v.width>>q),Ft=Math.max(1,v.height>>q);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,q,Et,vt,Ft,v.depth,0,Ct,ht,null):e.texImage2D(et,q,Et,vt,Ft,0,Ct,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),st(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,et,rt.__webglTexture,0,ut(v)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,et,rt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(T,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){const V=v.depthTexture,et=V&&V.isDepthTexture?V.type:null,q=x(v.stencilBuffer,et),Ct=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=ut(v);st(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,q,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,q,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,q,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,T)}else{const V=v.textures;for(let et=0;et<V.length;et++){const q=V[et],Ct=r.convert(q.format,q.colorSpace),ht=r.convert(q.type),Et=S(q.internalFormat,Ct,ht,q.colorSpace),At=ut(v);O&&st(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,Et,v.width,v.height):st(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,Et,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Et,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(v.depthTexture);V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const et=V.__webglTexture,q=ut(v);if(v.depthTexture.format===rs)st(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(v.depthTexture.format===os)st(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Yt(T){const v=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const V=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){const et=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",et)};V.addEventListener("dispose",et),v.__depthDisposeCallback=et}v.__boundDepthTexture=V}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const V=T.texture.mipmaps;V&&V.length>0?Tt(v.__webglFramebuffer[0],T):Tt(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=s.createRenderbuffer(),Lt(v.__webglDepthbuffer[V],T,!1);else{const et=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,q)}}else{const V=T.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Lt(v.__webglDepthbuffer,T,!1);else{const et=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,q)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(T,v,O){const V=n.get(T);v!==void 0&&yt(V.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Yt(T)}function R(T){const v=T.texture,O=n.get(T),V=n.get(v);T.addEventListener("dispose",L);const et=T.textures,q=T.isWebGLCubeRenderTarget===!0,Ct=et.length>1;if(Ct||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=v.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ht]=[];for(let Et=0;Et<v.mipmaps.length;Et++)O.__webglFramebuffer[ht][Et]=s.createFramebuffer()}else O.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)O.__webglFramebuffer[ht]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let ht=0,Et=et.length;ht<Et;ht++){const At=n.get(et[ht]);At.__webglTexture===void 0&&(At.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&st(T)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){const Et=et[ht];O.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);const At=r.convert(Et.format,Et.colorSpace),rt=r.convert(Et.type),vt=S(Et.internalFormat,At,rt,Et.colorSpace,T.isXRRenderTarget===!0),Ft=ut(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,vt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Lt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,v);for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0)for(let Et=0;Et<v.mipmaps.length;Et++)yt(O.__webglFramebuffer[ht][Et],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et);else yt(O.__webglFramebuffer[ht],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ht=0,Et=et.length;ht<Et;ht++){const At=et[ht],rt=n.get(At);let vt=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(vt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,rt.__webglTexture),Ht(vt,At),yt(O.__webglFramebuffer,T,At,s.COLOR_ATTACHMENT0+ht,vt,0),m(At)&&p(vt)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,V.__webglTexture),Ht(ht,v),v.mipmaps&&v.mipmaps.length>0)for(let Et=0;Et<v.mipmaps.length;Et++)yt(O.__webglFramebuffer[Et],T,v,s.COLOR_ATTACHMENT0,ht,Et);else yt(O.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,ht,0);m(v)&&p(ht),e.unbindTexture()}T.depthBuffer&&Yt(T)}function nt(T){const v=T.textures;for(let O=0,V=v.length;O<V;O++){const et=v[O];if(m(et)){const q=A(T),Ct=n.get(et).__webglTexture;e.bindTexture(q,Ct),p(q),e.unbindTexture()}}}const $=[],K=[];function J(T){if(T.samples>0){if(st(T)===!1){const v=T.textures,O=T.width,V=T.height;let et=s.COLOR_BUFFER_BIT;const q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(T),ht=v.length>1;if(ht)for(let At=0;At<v.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const Et=T.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let At=0;At<v.length;At++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);const rt=n.get(v[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,O,V,0,0,O,V,et,s.NEAREST),l===!0&&($.length=0,K.length=0,$.push(s.COLOR_ATTACHMENT0+At),T.depthBuffer&&T.resolveDepthBuffer===!1&&($.push(q),K.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,K)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let At=0;At<v.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[At]);const rt=n.get(v[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,rt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function ut(T){return Math.min(i.maxSamples,T.samples)}function st(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function dt(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function zt(T,v){const O=T.colorSpace,V=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Oi&&O!==We&&(Qt.getTransfer(O)===ce?(V!==mn||et!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=tt,this.setTextureCube=X,this.rebindTextures=pe,this.setupRenderTarget=R,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=st}function O0(s,t){function e(n,i=We){let r;const o=Qt.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===$o)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Jl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yl)return s.BYTE;if(n===Zl)return s.SHORT;if(n===is)return s.UNSIGNED_SHORT;if(n===Ko)return s.INT;if(n===si)return s.UNSIGNED_INT;if(n===xn)return s.FLOAT;if(n===ds)return s.HALF_FLOAT;if(n===Kl)return s.ALPHA;if(n===$l)return s.RGB;if(n===mn)return s.RGBA;if(n===rs)return s.DEPTH_COMPONENT;if(n===os)return s.DEPTH_STENCIL;if(n===ta)return s.RED;if(n===ea)return s.RED_INTEGER;if(n===Ql)return s.RG;if(n===na)return s.RG_INTEGER;if(n===ia)return s.RGBA_INTEGER;if(n===qs||n===Ys||n===Zs||n===js)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fo||n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_o||n===vo||n===xo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_o||n===vo)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mo||n===yo||n===So||n===bo||n===wo||n===To||n===Eo||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===So)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===To)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ao)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Po)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Do)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uo||n===No||n===Fo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Uo)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oo||n===Bo||n===zo||n===ko)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const B0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z0=`
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

}`;class k0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new dc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wn({vertexShader:B0,fragmentShader:z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new z(new De(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H0 extends ki{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new k0,p={},A=e.getContextAttributes();let S=null,x=null;const P=[],C=[],L=new lt;let U=null;const w=new tn;w.viewport=new he;const b=new tn;b.viewport=new he;const D=[w,b],B=new rd;let G=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let it=P[j];return it===void 0&&(it=new Ur,P[j]=it),it.getTargetRaySpace()},this.getControllerGrip=function(j){let it=P[j];return it===void 0&&(it=new Ur,P[j]=it),it.getGripSpace()},this.getHand=function(j){let it=P[j];return it===void 0&&(it=new Ur,P[j]=it),it.getHandSpace()};function W(j){const it=C.indexOf(j.inputSource);if(it===-1)return;const yt=P[it];yt!==void 0&&(yt.update(j.inputSource,j.frame,c||o),yt.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",tt);for(let j=0;j<P.length;j++){const it=C[j];it!==null&&(C[j]=null,P[j].disconnect(it))}G=null,Z=null,m.reset();for(const j in p)delete p[j];t.setRenderTarget(S),f=null,d=null,u=null,i=null,x=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",tt),A.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Lt=null,Tt=null;A.depth&&(Tt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=A.stencil?os:rs,Lt=A.stencil?ss:si);const Yt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Yt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new ri(d.textureWidth,d.textureHeight,{format:mn,type:yn,depthTexture:new uc(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const yt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ri(f.framebufferWidth,f.framebufferHeight,{format:mn,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(j){for(let it=0;it<j.removed.length;it++){const yt=j.removed[it],Lt=C.indexOf(yt);Lt>=0&&(C[Lt]=null,P[Lt].disconnect(yt))}for(let it=0;it<j.added.length;it++){const yt=j.added[it];let Lt=C.indexOf(yt);if(Lt===-1){for(let Yt=0;Yt<P.length;Yt++)if(Yt>=C.length){C.push(yt),Lt=Yt;break}else if(C[Yt]===null){C[Yt]=yt,Lt=Yt;break}if(Lt===-1)break}const Tt=P[Lt];Tt&&Tt.connect(yt)}}const X=new y,ft=new y;function xt(j,it,yt){X.setFromMatrixPosition(it.matrixWorld),ft.setFromMatrixPosition(yt.matrixWorld);const Lt=X.distanceTo(ft),Tt=it.projectionMatrix.elements,Yt=yt.projectionMatrix.elements,pe=Tt[14]/(Tt[10]-1),R=Tt[14]/(Tt[10]+1),nt=(Tt[9]+1)/Tt[5],$=(Tt[9]-1)/Tt[5],K=(Tt[8]-1)/Tt[0],J=(Yt[8]+1)/Yt[0],ut=pe*K,st=pe*J,dt=Lt/(-K+J),zt=dt*-K;if(it.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(zt),j.translateZ(dt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Tt[10]===-1)j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Bt=pe+dt,T=R+dt,v=ut-zt,O=st+(Lt-zt),V=nt*R/T*Bt,et=$*R/T*Bt;j.projectionMatrix.makePerspective(v,O,V,et,Bt,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function St(j,it){it===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(it.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let it=j.near,yt=j.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),B.near=b.near=w.near=it,B.far=b.far=w.far=yt,(G!==B.near||Z!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),G=B.near,Z=B.far),B.layers.mask=j.layers.mask|6,w.layers.mask=B.layers.mask&3,b.layers.mask=B.layers.mask&5;const Lt=j.parent,Tt=B.cameras;St(B,Lt);for(let Yt=0;Yt<Tt.length;Yt++)St(Tt[Yt],Lt);Tt.length===2?xt(B,w,b):B.projectionMatrix.copy(w.projectionMatrix),Ht(j,B,Lt)};function Ht(j,it,yt){yt===null?j.matrix.copy(it.matrixWorld):(j.matrix.copy(yt.matrixWorld),j.matrix.invert(),j.matrix.multiply(it.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=as*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(j){return p[j]};let Jt=null;function oe(j,it){if(h=it.getViewerPose(c||o),g=it,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Lt=!1;yt.length!==B.cameras.length&&(B.cameras.length=0,Lt=!0);for(let R=0;R<yt.length;R++){const nt=yt[R];let $=null;if(f!==null)$=f.getViewport(nt);else{const J=u.getViewSubImage(d,nt);$=J.viewport,R===0&&(t.setRenderTargetTextures(x,J.colorTexture,J.depthStencilTexture),t.setRenderTarget(x))}let K=D[R];K===void 0&&(K=new tn,K.layers.enable(R),K.viewport=new he,D[R]=K),K.matrix.fromArray(nt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(nt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set($.x,$.y,$.width,$.height),R===0&&(B.matrix.copy(K.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Lt===!0&&B.cameras.push(K)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const R=u.getDepthInformation(yt[0]);R&&R.isValid&&R.texture&&m.init(R,i.renderState)}if(Tt&&Tt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let R=0;R<yt.length;R++){const nt=yt[R].camera;if(nt){let $=p[nt];$||($=new dc,p[nt]=$);const K=u.getCameraImage(nt);$.sourceTexture=K}}}}for(let yt=0;yt<P.length;yt++){const Lt=C[yt],Tt=P[yt];Lt!==null&&Tt!==void 0&&Tt.update(Lt,it,c||o)}Jt&&Jt(j,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const Kt=new wc;Kt.setAnimationLoop(oe),this.setAnimationLoop=function(j){Jt=j},this.dispose=function(){}}}const $n=new cn,G0=new ue;function V0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ac(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,A,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=t.get(p),S=A.envMap,x=A.envMapRotation;S&&(m.envMap.value=S,$n.copy(x),$n.x*=-1,$n.y*=-1,$n.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),m.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler($n)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const A=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function W0(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,S){const x=S.program;n.uniformBlockBinding(A,x)}function c(A,S){let x=i[A.id];x===void 0&&(g(A),x=h(A),i[A.id]=x,A.addEventListener("dispose",m));const P=S.program;n.updateUBOMapping(A,P);const C=t.render.frame;r[A.id]!==C&&(d(A),r[A.id]=C)}function h(A){const S=u();A.__bindingPointIndex=S;const x=s.createBuffer(),P=A.__size,C=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,P,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const S=i[A.id],x=A.uniforms,P=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let C=0,L=x.length;C<L;C++){const U=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,b=U.length;w<b;w++){const D=U[w];if(f(D,C,w,P)===!0){const B=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let Z=0;for(let W=0;W<G.length;W++){const Y=G[W],tt=_(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,B+Z,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,Z),Z+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(A,S,x,P){const C=A.value,L=S+"_"+x;if(P[L]===void 0)return typeof C=="number"||typeof C=="boolean"?P[L]=C:P[L]=C.clone(),!0;{const U=P[L];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return P[L]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function g(A){const S=A.uniforms;let x=0;const P=16;for(let L=0,U=S.length;L<U;L++){const w=Array.isArray(S[L])?S[L]:[S[L]];for(let b=0,D=w.length;b<D;b++){const B=w[b],G=Array.isArray(B.value)?B.value:[B.value];for(let Z=0,W=G.length;Z<W;Z++){const Y=G[Z],tt=_(Y),X=x%P,ft=X%tt.boundary,xt=X+ft;x+=ft,xt!==0&&P-xt<tt.storage&&(x+=P-xt),B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=tt.storage}}}const C=x%P;return C>0&&(x+=P-C),A.__size=x,A.__cache={},this}function _(A){const S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function m(A){const S=A.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const A in i)s.deleteBuffer(i[A]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class X0{constructor(t={}){const{canvas:e=Vh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const A=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let P=!1;this._outputColorSpace=we;let C=0,L=0,U=null,w=-1,b=null;const D=new he,B=new he;let G=null;const Z=new Xt(0);let W=0,Y=e.width,tt=e.height,X=1,ft=null,xt=null;const St=new he(0,0,Y,tt),Ht=new he(0,0,Y,tt);let Jt=!1;const oe=new ha;let Kt=!1,j=!1;const it=new ue,yt=new y,Lt=new he,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function pe(){return U===null?X:1}let R=n;function nt(M,N){return e.getContext(M,N)}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jo}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),R===null){const N="webgl2";if(R=nt(N,M),R===null)throw nt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let $,K,J,ut,st,dt,zt,Bt,T,v,O,V,et,q,Ct,ht,Et,At,rt,vt,Ft,Pt,gt,Gt;function I(){$=new em(R),$.init(),Pt=new O0(R,$),K=new Zp(R,$,t,Pt),J=new N0(R,$),K.reversedDepthBuffer&&d&&J.buffers.depth.setReversed(!0),ut=new sm(R),st=new S0,dt=new F0(R,$,J,st,K,Pt,ut),zt=new Jp(x),Bt=new tm(x),T=new cd(R),gt=new qp(R,T),v=new nm(R,T,ut,gt),O=new om(R,v,T,ut),rt=new rm(R,K,dt),ht=new jp(st),V=new y0(x,zt,Bt,$,K,gt,ht),et=new V0(x,st),q=new w0,Ct=new P0($),At=new Xp(x,zt,Bt,J,O,f,l),Et=new I0(x,O,K),Gt=new W0(R,ut,K,J),vt=new Yp(R,$,ut),Ft=new im(R,$,ut),ut.programs=V.programs,x.capabilities=K,x.extensions=$,x.properties=st,x.renderLists=q,x.shadowMap=Et,x.state=J,x.info=ut}I();const ct=new H0(x,R);this.xr=ct,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=$.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(Y,tt,!1))},this.getSize=function(M){return M.set(Y,tt)},this.setSize=function(M,N,k=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,tt=N,e.width=Math.floor(M*X),e.height=Math.floor(N*X),k===!0&&(e.style.width=M+"px",e.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Y*X,tt*X).floor()},this.setDrawingBufferSize=function(M,N,k){Y=M,tt=N,X=k,e.width=Math.floor(M*k),e.height=Math.floor(N*k),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(St)},this.setViewport=function(M,N,k,H){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,N,k,H),J.viewport(D.copy(St).multiplyScalar(X).round())},this.getScissor=function(M){return M.copy(Ht)},this.setScissor=function(M,N,k,H){M.isVector4?Ht.set(M.x,M.y,M.z,M.w):Ht.set(M,N,k,H),J.scissor(B.copy(Ht).multiplyScalar(X).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(M){J.setScissorTest(Jt=M)},this.setOpaqueSort=function(M){ft=M},this.setTransparentSort=function(M){xt=M},this.getClearColor=function(M){return M.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,k=!0){let H=0;if(M){let F=!1;if(U!==null){const at=U.texture.format;F=at===ia||at===na||at===ea}if(F){const at=U.texture.type,_t=at===yn||at===si||at===is||at===ss||at===$o||at===Qo,wt=At.getClearColor(),Mt=At.getClearAlpha(),Nt=wt.r,Ot=wt.g,Dt=wt.b;_t?(g[0]=Nt,g[1]=Ot,g[2]=Dt,g[3]=Mt,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Nt,_[1]=Ot,_[2]=Dt,_[3]=Mt,R.clearBufferiv(R.COLOR,0,_))}else H|=R.COLOR_BUFFER_BIT}N&&(H|=R.DEPTH_BUFFER_BIT),k&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),At.dispose(),q.dispose(),Ct.dispose(),st.dispose(),zt.dispose(),Bt.dispose(),O.dispose(),gt.dispose(),Gt.dispose(),V.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",gn),ct.removeEventListener("sessionend",_a),Xn.stop()};function pt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const M=ut.autoReset,N=Et.enabled,k=Et.autoUpdate,H=Et.needsUpdate,F=Et.type;I(),ut.autoReset=M,Et.enabled=N,Et.autoUpdate=k,Et.needsUpdate=H,Et.type=F}function ot(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Q(M){const N=M.target;N.removeEventListener("dispose",Q),Rt(N)}function Rt(M){kt(M),st.remove(M)}function kt(M){const N=st.get(M).programs;N!==void 0&&(N.forEach(function(k){V.releaseProgram(k)}),M.isShaderMaterial&&V.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,k,H,F,at){N===null&&(N=Tt);const _t=F.isMesh&&F.matrixWorld.determinant()<0,wt=Uc(M,N,k,H,F);J.setMaterial(H,_t);let Mt=k.index,Nt=1;if(H.wireframe===!0){if(Mt=v.getWireframeAttribute(k),Mt===void 0)return;Nt=2}const Ot=k.drawRange,Dt=k.attributes.position;let Zt=Ot.start*Nt,ae=(Ot.start+Ot.count)*Nt;at!==null&&(Zt=Math.max(Zt,at.start*Nt),ae=Math.min(ae,(at.start+at.count)*Nt)),Mt!==null?(Zt=Math.max(Zt,0),ae=Math.min(ae,Mt.count)):Dt!=null&&(Zt=Math.max(Zt,0),ae=Math.min(ae,Dt.count));const be=ae-Zt;if(be<0||be===1/0)return;gt.setup(F,H,wt,k,Mt);let ge,de=vt;if(Mt!==null&&(ge=T.get(Mt),de=Ft,de.setIndex(ge)),F.isMesh)H.wireframe===!0?(J.setLineWidth(H.wireframeLinewidth*pe()),de.setMode(R.LINES)):de.setMode(R.TRIANGLES);else if(F.isLine){let Ut=H.linewidth;Ut===void 0&&(Ut=1),J.setLineWidth(Ut*pe()),F.isLineSegments?de.setMode(R.LINES):F.isLineLoop?de.setMode(R.LINE_LOOP):de.setMode(R.LINE_STRIP)}else F.isPoints?de.setMode(R.POINTS):F.isSprite&&de.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if($.get("WEBGL_multi_draw"))de.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ut=F._multiDrawStarts,Me=F._multiDrawCounts,$t=F._multiDrawCount,Je=Mt?T.get(Mt).bytesPerElement:1,hi=st.get(H).currentProgram.getUniforms();for(let Ke=0;Ke<$t;Ke++)hi.setValue(R,"_gl_DrawID",Ke),de.render(Ut[Ke]/Je,Me[Ke])}else if(F.isInstancedMesh)de.renderInstances(Zt,be,F.count);else if(k.isInstancedBufferGeometry){const Ut=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Me=Math.min(k.instanceCount,Ut);de.renderInstances(Zt,be,Me)}else de.render(Zt,be)};function me(M,N,k){M.transparent===!0&&M.side===Ne&&M.forceSinglePass===!1?(M.side=Fe,M.needsUpdate=!0,_s(M,N,k),M.side=Vn,M.needsUpdate=!0,_s(M,N,k),M.side=Ne):_s(M,N,k)}this.compile=function(M,N,k=null){k===null&&(k=M),p=Ct.get(k),p.init(N),S.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),M!==k&&M.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const at=F.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const wt=at[_t];me(wt,k,F),H.add(wt)}else me(at,k,F),H.add(at)}),p=S.pop(),H},this.compileAsync=function(M,N,k=null){const H=this.compile(M,N,k);return new Promise(F=>{function at(){if(H.forEach(function(_t){st.get(_t).currentProgram.isReady()&&H.delete(_t)}),H.size===0){F(M);return}setTimeout(at,10)}$.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let re=null;function bn(M){re&&re(M)}function gn(){Xn.stop()}function _a(){Xn.start()}const Xn=new wc;Xn.setAnimationLoop(bn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(M){re=M,ct.setAnimationLoop(M),M===null?Xn.stop():Xn.start()},ct.addEventListener("sessionstart",gn),ct.addEventListener("sessionend",_a),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(N),N=ct.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,N,U),p=Ct.get(M,S.length),p.init(N),S.push(p),it.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),oe.setFromProjectionMatrix(it,Mn,N.reversedDepth),j=this.localClippingEnabled,Kt=ht.init(this.clippingPlanes,j),m=q.get(M,A.length),m.init(),A.push(m),ct.enabled===!0&&ct.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&ur(at,N,-1/0,x.sortObjects)}ur(M,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ft,xt),Yt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Yt&&At.addToRenderList(m,M),this.info.render.frame++,Kt===!0&&ht.beginShadows();const k=p.state.shadowsArray;Et.render(k,M,N),Kt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const at=N.cameras;if(F.length>0)for(let _t=0,wt=at.length;_t<wt;_t++){const Mt=at[_t];xa(H,F,M,Mt)}Yt&&At.render(M);for(let _t=0,wt=at.length;_t<wt;_t++){const Mt=at[_t];va(m,M,Mt,Mt.viewport)}}else F.length>0&&xa(H,F,M,N),Yt&&At.render(M),va(m,M,N);U!==null&&L===0&&(dt.updateMultisampleRenderTarget(U),dt.updateRenderTargetMipmap(U)),M.isScene===!0&&M.onAfterRender(x,M,N),gt.resetDefaultState(),w=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],Kt===!0&&ht.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function ur(M,N,k,H){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||oe.intersectsSprite(M)){H&&Lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(it);const _t=O.update(M),wt=M.material;wt.visible&&m.push(M,_t,wt,k,Lt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||oe.intersectsObject(M))){const _t=O.update(M),wt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Lt.copy(M.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Lt.copy(_t.boundingSphere.center)),Lt.applyMatrix4(M.matrixWorld).applyMatrix4(it)),Array.isArray(wt)){const Mt=_t.groups;for(let Nt=0,Ot=Mt.length;Nt<Ot;Nt++){const Dt=Mt[Nt],Zt=wt[Dt.materialIndex];Zt&&Zt.visible&&m.push(M,_t,Zt,k,Lt.z,Dt)}}else wt.visible&&m.push(M,_t,wt,k,Lt.z,null)}}const at=M.children;for(let _t=0,wt=at.length;_t<wt;_t++)ur(at[_t],N,k,H)}function va(M,N,k,H){const F=M.opaque,at=M.transmissive,_t=M.transparent;p.setupLightsView(k),Kt===!0&&ht.setGlobalState(x.clippingPlanes,k),H&&J.viewport(D.copy(H)),F.length>0&&gs(F,N,k),at.length>0&&gs(at,N,k),_t.length>0&&gs(_t,N,k),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function xa(M,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ri(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?ds:yn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const at=p.state.transmissionRenderTarget[H.id],_t=H.viewport||D;at.setSize(_t.z*x.transmissionResolutionScale,_t.w*x.transmissionResolutionScale);const wt=x.getRenderTarget(),Mt=x.getActiveCubeFace(),Nt=x.getActiveMipmapLevel();x.setRenderTarget(at),x.getClearColor(Z),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Yt&&At.render(k);const Ot=x.toneMapping;x.toneMapping=Gn;const Dt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Kt===!0&&ht.setGlobalState(x.clippingPlanes,H),gs(M,k,H),dt.updateMultisampleRenderTarget(at),dt.updateRenderTargetMipmap(at),$.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let ae=0,be=N.length;ae<be;ae++){const ge=N[ae],de=ge.object,Ut=ge.geometry,Me=ge.material,$t=ge.group;if(Me.side===Ne&&de.layers.test(H.layers)){const Je=Me.side;Me.side=Fe,Me.needsUpdate=!0,Ma(de,k,H,Ut,Me,$t),Me.side=Je,Me.needsUpdate=!0,Zt=!0}}Zt===!0&&(dt.updateMultisampleRenderTarget(at),dt.updateRenderTargetMipmap(at))}x.setRenderTarget(wt,Mt,Nt),x.setClearColor(Z,W),Dt!==void 0&&(H.viewport=Dt),x.toneMapping=Ot}function gs(M,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,at=M.length;F<at;F++){const _t=M[F],wt=_t.object,Mt=_t.geometry,Nt=_t.group;let Ot=_t.material;Ot.allowOverride===!0&&H!==null&&(Ot=H),wt.layers.test(k.layers)&&Ma(wt,N,k,Mt,Ot,Nt)}}function Ma(M,N,k,H,F,at){M.onBeforeRender(x,N,k,H,F,at),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(x,N,k,H,M,at),F.transparent===!0&&F.side===Ne&&F.forceSinglePass===!1?(F.side=Fe,F.needsUpdate=!0,x.renderBufferDirect(k,N,H,F,M,at),F.side=Vn,F.needsUpdate=!0,x.renderBufferDirect(k,N,H,F,M,at),F.side=Ne):x.renderBufferDirect(k,N,H,F,M,at),M.onAfterRender(x,N,k,H,F,at)}function _s(M,N,k){N.isScene!==!0&&(N=Tt);const H=st.get(M),F=p.state.lights,at=p.state.shadowsArray,_t=F.state.version,wt=V.getParameters(M,F.state,at,N,k),Mt=V.getProgramCacheKey(wt);let Nt=H.programs;H.environment=M.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(M.isMeshStandardMaterial?Bt:zt).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Nt===void 0&&(M.addEventListener("dispose",Q),Nt=new Map,H.programs=Nt);let Ot=Nt.get(Mt);if(Ot!==void 0){if(H.currentProgram===Ot&&H.lightsStateVersion===_t)return Sa(M,wt),Ot}else wt.uniforms=V.getUniforms(M),M.onBeforeCompile(wt,x),Ot=V.acquireProgram(wt,Mt),Nt.set(Mt,Ot),H.uniforms=wt.uniforms;const Dt=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Dt.clippingPlanes=ht.uniform),Sa(M,wt),H.needsLights=Fc(M),H.lightsStateVersion=_t,H.needsLights&&(Dt.ambientLightColor.value=F.state.ambient,Dt.lightProbe.value=F.state.probe,Dt.directionalLights.value=F.state.directional,Dt.directionalLightShadows.value=F.state.directionalShadow,Dt.spotLights.value=F.state.spot,Dt.spotLightShadows.value=F.state.spotShadow,Dt.rectAreaLights.value=F.state.rectArea,Dt.ltc_1.value=F.state.rectAreaLTC1,Dt.ltc_2.value=F.state.rectAreaLTC2,Dt.pointLights.value=F.state.point,Dt.pointLightShadows.value=F.state.pointShadow,Dt.hemisphereLights.value=F.state.hemi,Dt.directionalShadowMap.value=F.state.directionalShadowMap,Dt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Dt.spotShadowMap.value=F.state.spotShadowMap,Dt.spotLightMatrix.value=F.state.spotLightMatrix,Dt.spotLightMap.value=F.state.spotLightMap,Dt.pointShadowMap.value=F.state.pointShadowMap,Dt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ot,H.uniformsList=null,Ot}function ya(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Js.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Sa(M,N){const k=st.get(M);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Uc(M,N,k,H,F){N.isScene!==!0&&(N=Tt),dt.resetTextureUnits();const at=N.fog,_t=H.isMeshStandardMaterial?N.environment:null,wt=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Oi,Mt=(H.isMeshStandardMaterial?Bt:zt).get(H.envMap||_t),Nt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ot=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Dt=!!k.morphAttributes.position,Zt=!!k.morphAttributes.normal,ae=!!k.morphAttributes.color;let be=Gn;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(be=x.toneMapping);const ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,de=ge!==void 0?ge.length:0,Ut=st.get(H),Me=p.state.lights;if(Kt===!0&&(j===!0||M!==b)){const ke=M===b&&H.id===w;ht.setState(H,M,ke)}let $t=!1;H.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Me.state.version||Ut.outputColorSpace!==wt||F.isBatchedMesh&&Ut.batching===!1||!F.isBatchedMesh&&Ut.batching===!0||F.isBatchedMesh&&Ut.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ut.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ut.instancing===!1||!F.isInstancedMesh&&Ut.instancing===!0||F.isSkinnedMesh&&Ut.skinning===!1||!F.isSkinnedMesh&&Ut.skinning===!0||F.isInstancedMesh&&Ut.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ut.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ut.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ut.instancingMorph===!1&&F.morphTexture!==null||Ut.envMap!==Mt||H.fog===!0&&Ut.fog!==at||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ht.numPlanes||Ut.numIntersection!==ht.numIntersection)||Ut.vertexAlphas!==Nt||Ut.vertexTangents!==Ot||Ut.morphTargets!==Dt||Ut.morphNormals!==Zt||Ut.morphColors!==ae||Ut.toneMapping!==be||Ut.morphTargetsCount!==de)&&($t=!0):($t=!0,Ut.__version=H.version);let Je=Ut.currentProgram;$t===!0&&(Je=_s(H,N,F));let hi=!1,Ke=!1,Vi=!1;const ye=Je.getUniforms(),sn=Ut.uniforms;if(J.useProgram(Je.program)&&(hi=!0,Ke=!0,Vi=!0),H.id!==w&&(w=H.id,Ke=!0),hi||b!==M){J.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ye.setValue(R,"projectionMatrix",M.projectionMatrix),ye.setValue(R,"viewMatrix",M.matrixWorldInverse);const Ye=ye.map.cameraPosition;Ye!==void 0&&Ye.setValue(R,yt.setFromMatrixPosition(M.matrixWorld)),K.logarithmicDepthBuffer&&ye.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ye.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Ke=!0,Vi=!0)}if(F.isSkinnedMesh){ye.setOptional(R,F,"bindMatrix"),ye.setOptional(R,F,"bindMatrixInverse");const ke=F.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),ye.setValue(R,"boneTexture",ke.boneTexture,dt))}F.isBatchedMesh&&(ye.setOptional(R,F,"batchingTexture"),ye.setValue(R,"batchingTexture",F._matricesTexture,dt),ye.setOptional(R,F,"batchingIdTexture"),ye.setValue(R,"batchingIdTexture",F._indirectTexture,dt),ye.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&ye.setValue(R,"batchingColorTexture",F._colorsTexture,dt));const rn=k.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&rt.update(F,k,Je),(Ke||Ut.receiveShadow!==F.receiveShadow)&&(Ut.receiveShadow=F.receiveShadow,ye.setValue(R,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(sn.envMap.value=Mt,sn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(sn.envMapIntensity.value=N.environmentIntensity),Ke&&(ye.setValue(R,"toneMappingExposure",x.toneMappingExposure),Ut.needsLights&&Nc(sn,Vi),at&&H.fog===!0&&et.refreshFogUniforms(sn,at),et.refreshMaterialUniforms(sn,H,X,tt,p.state.transmissionRenderTarget[M.id]),Js.upload(R,ya(Ut),sn,dt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Js.upload(R,ya(Ut),sn,dt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ye.setValue(R,"center",F.center),ye.setValue(R,"modelViewMatrix",F.modelViewMatrix),ye.setValue(R,"normalMatrix",F.normalMatrix),ye.setValue(R,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const ke=H.uniformsGroups;for(let Ye=0,dr=ke.length;Ye<dr;Ye++){const qn=ke[Ye];Gt.update(qn,Je),Gt.bind(qn,Je)}}return Je}function Nc(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Fc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,N,k){const H=st.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),st.get(M.texture).__webglTexture=N,st.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const k=st.get(M);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const Oc=R.createFramebuffer();this.setRenderTarget=function(M,N=0,k=0){U=M,C=N,L=k;let H=!0,F=null,at=!1,_t=!1;if(M){const Mt=st.get(M);if(Mt.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(Mt.__webglFramebuffer===void 0)dt.setupRenderTarget(M);else if(Mt.__hasExternalTextures)dt.rebindTextures(M,st.get(M.texture).__webglTexture,st.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Dt=M.depthTexture;if(Mt.__boundDepthTexture!==Dt){if(Dt!==null&&st.has(Dt)&&(M.width!==Dt.image.width||M.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(M)}}const Nt=M.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(_t=!0);const Ot=st.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[N])?F=Ot[N][k]:F=Ot[N],at=!0):M.samples>0&&dt.useMultisampledRTT(M)===!1?F=st.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?F=Ot[k]:F=Ot,D.copy(M.viewport),B.copy(M.scissor),G=M.scissorTest}else D.copy(St).multiplyScalar(X).floor(),B.copy(Ht).multiplyScalar(X).floor(),G=Jt;if(k!==0&&(F=Oc),J.bindFramebuffer(R.FRAMEBUFFER,F)&&H&&J.drawBuffers(M,F),J.viewport(D),J.scissor(B),J.setScissorTest(G),at){const Mt=st.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,k)}else if(_t){const Mt=N;for(let Nt=0;Nt<M.textures.length;Nt++){const Ot=st.get(M.textures[Nt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Nt,Ot.__webglTexture,k,Mt)}}else if(M!==null&&k!==0){const Mt=st.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Mt.__webglTexture,k)}w=-1},this.readRenderTargetPixels=function(M,N,k,H,F,at,_t,wt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=st.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(Mt=Mt[_t]),Mt){J.bindFramebuffer(R.FRAMEBUFFER,Mt);try{const Nt=M.textures[wt],Ot=Nt.format,Dt=Nt.type;if(!K.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-H&&k>=0&&k<=M.height-F&&(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+wt),R.readPixels(N,k,H,F,Pt.convert(Ot),Pt.convert(Dt),at))}finally{const Nt=U!==null?st.get(U).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(M,N,k,H,F,at,_t,wt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=st.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(Mt=Mt[_t]),Mt)if(N>=0&&N<=M.width-H&&k>=0&&k<=M.height-F){J.bindFramebuffer(R.FRAMEBUFFER,Mt);const Nt=M.textures[wt],Ot=Nt.format,Dt=Nt.type;if(!K.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Zt),R.bufferData(R.PIXEL_PACK_BUFFER,at.byteLength,R.STREAM_READ),M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+wt),R.readPixels(N,k,H,F,Pt.convert(Ot),Pt.convert(Dt),0);const ae=U!==null?st.get(U).__webglFramebuffer:null;J.bindFramebuffer(R.FRAMEBUFFER,ae);const be=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Wh(R,be,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Zt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,at),R.deleteBuffer(Zt),R.deleteSync(be),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,k=0){const H=Math.pow(2,-k),F=Math.floor(M.image.width*H),at=Math.floor(M.image.height*H),_t=N!==null?N.x:0,wt=N!==null?N.y:0;dt.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,_t,wt,F,at),J.unbindTexture()};const Bc=R.createFramebuffer(),zc=R.createFramebuffer();this.copyTextureToTexture=function(M,N,k=null,H=null,F=0,at=null){at===null&&(F!==0?(ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=F,F=0):at=0);let _t,wt,Mt,Nt,Ot,Dt,Zt,ae,be;const ge=M.isCompressedTexture?M.mipmaps[at]:M.image;if(k!==null)_t=k.max.x-k.min.x,wt=k.max.y-k.min.y,Mt=k.isBox3?k.max.z-k.min.z:1,Nt=k.min.x,Ot=k.min.y,Dt=k.isBox3?k.min.z:0;else{const rn=Math.pow(2,-F);_t=Math.floor(ge.width*rn),wt=Math.floor(ge.height*rn),M.isDataArrayTexture?Mt=ge.depth:M.isData3DTexture?Mt=Math.floor(ge.depth*rn):Mt=1,Nt=0,Ot=0,Dt=0}H!==null?(Zt=H.x,ae=H.y,be=H.z):(Zt=0,ae=0,be=0);const de=Pt.convert(N.format),Ut=Pt.convert(N.type);let Me;N.isData3DTexture?(dt.setTexture3D(N,0),Me=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(dt.setTexture2DArray(N,0),Me=R.TEXTURE_2D_ARRAY):(dt.setTexture2D(N,0),Me=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const $t=R.getParameter(R.UNPACK_ROW_LENGTH),Je=R.getParameter(R.UNPACK_IMAGE_HEIGHT),hi=R.getParameter(R.UNPACK_SKIP_PIXELS),Ke=R.getParameter(R.UNPACK_SKIP_ROWS),Vi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ge.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ge.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Nt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ot),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Dt);const ye=M.isDataArrayTexture||M.isData3DTexture,sn=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const rn=st.get(M),ke=st.get(N),Ye=st.get(rn.__renderTarget),dr=st.get(ke.__renderTarget);J.bindFramebuffer(R.READ_FRAMEBUFFER,Ye.__webglFramebuffer),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let qn=0;qn<Mt;qn++)ye&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,st.get(M).__webglTexture,F,Dt+qn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,st.get(N).__webglTexture,at,be+qn)),R.blitFramebuffer(Nt,Ot,_t,wt,Zt,ae,_t,wt,R.DEPTH_BUFFER_BIT,R.NEAREST);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||st.has(M)){const rn=st.get(M),ke=st.get(N);J.bindFramebuffer(R.READ_FRAMEBUFFER,Bc),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,zc);for(let Ye=0;Ye<Mt;Ye++)ye?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,rn.__webglTexture,F,Dt+Ye):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,rn.__webglTexture,F),sn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ke.__webglTexture,at,be+Ye):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ke.__webglTexture,at),F!==0?R.blitFramebuffer(Nt,Ot,_t,wt,Zt,ae,_t,wt,R.COLOR_BUFFER_BIT,R.NEAREST):sn?R.copyTexSubImage3D(Me,at,Zt,ae,be+Ye,Nt,Ot,_t,wt):R.copyTexSubImage2D(Me,at,Zt,ae,Nt,Ot,_t,wt);J.bindFramebuffer(R.READ_FRAMEBUFFER,null),J.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else sn?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(Me,at,Zt,ae,be,_t,wt,Mt,de,Ut,ge.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Me,at,Zt,ae,be,_t,wt,Mt,de,ge.data):R.texSubImage3D(Me,at,Zt,ae,be,_t,wt,Mt,de,Ut,ge):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,at,Zt,ae,_t,wt,de,Ut,ge.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,at,Zt,ae,ge.width,ge.height,de,ge.data):R.texSubImage2D(R.TEXTURE_2D,at,Zt,ae,_t,wt,de,Ut,ge);R.pixelStorei(R.UNPACK_ROW_LENGTH,$t),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Je),R.pixelStorei(R.UNPACK_SKIP_PIXELS,hi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ke),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Vi),at===0&&N.generateMipmaps&&R.generateMipmap(Me),J.unbindTexture()},this.initRenderTarget=function(M){st.get(M).__webglFramebuffer===void 0&&dt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?dt.setTextureCube(M,0):M.isData3DTexture?dt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?dt.setTexture2DArray(M,0):dt.setTexture2D(M,0),J.unbindTexture()},this.resetState=function(){C=0,L=0,U=null,J.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class q0 extends hc{constructor(){super();const t=new te;t.deleteAttribute("uv");const e=new ne({side:Fe}),n=new ne,i=new pa(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new z(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ps(t,n,6),a=new Ee;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new z(t,Ei(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new z(t,Ei(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new z(t,Ei(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new z(t,Ei(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new z(t,Ei(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new z(t,Ei(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ei(s){return new $u({color:0,emissive:16777215,emissiveIntensity:s})}const fe=(s,t,e)=>s<t?t:s>e?e:s,se=(s,t,e)=>s+(t-s)*e,ve=(s,t,e,n)=>se(s,t,1-Math.pow(e,n)),Ll=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,an=s=>1-Math.pow(1-s,3),nr=s=>1+2.70158*Math.pow(s-1,3)+1.70158*Math.pow(s-1,2),Vs=(s,t,e)=>{const n=fe((e-s)/(t-s),0,1);return n*n*(3-2*n)},Y0=(s,t)=>{let e=(t-s)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e};class je{constructor(t=1){E(this,"s");this.s=t>>>0||1}next(){return this.s^=this.s<<13,this.s^=this.s>>>17,this.s^=this.s<<5,this.s>>>=0,this.s/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.min(t.length-1,Math.floor(this.next()*t.length))]}}const ga=new Map,Yo=[];function nn(s){const t=document.createElement("canvas");t.width=s,t.height=s;const e=t.getContext("2d");if(!e)throw new Error("2D canvas unavailable");return[t,e]}function Be(s,t,e,n=1){const i=new Mu(s);return i.colorSpace=e,i.wrapS=i.wrapT=Ks,i.repeat.set(n,n),i.anisotropy=4,i.needsUpdate=!0,i.name=t,ga.set(t,i),Yo.push(i),i}function ze(s,t){const e=ga.get(s);return e||t()}function lr(s,t,e){const[n,i]=nn(t),r=i.createImageData(t,t),o=(a,l)=>s[(l+t)%t*t+(a+t)%t];for(let a=0;a<t;a++)for(let l=0;l<t;l++){const c=(o(l+1,a)-o(l-1,a))*e,h=(o(l,a+1)-o(l,a-1))*e;let u=-c,d=-h;const f=1,g=Math.hypot(u,d,f);u/=g,d/=g;const _=(a*t+l)*4;r.data[_]=(u*.5+.5)*255,r.data[_+1]=(d*.5+.5)*255,r.data[_+2]=f/g*255,r.data[_+3]=255}return i.putImageData(r,0,0),n}function Z0(s,t,e){const n=new Float32Array((t+1)*(t+1));for(let o=0;o<n.length;o++)n[o]=e.next();const i=new Float32Array(s*s),r=s/t;for(let o=0;o<s;o++){const a=o/r,l=Math.floor(a),c=a-l,h=c*c*(3-2*c);for(let u=0;u<s;u++){const d=u/r,f=Math.floor(d),g=d-f,_=g*g*(3-2*g),m=n[l*(t+1)+f],p=n[l*(t+1)+(f+1)%(t+1)],A=n[(l+1)%(t+1)*(t+1)+f],S=n[(l+1)%(t+1)*(t+1)+(f+1)%(t+1)];i[o*s+u]=m+(p-m)*_+(A-m)*h+(m-p-A+S)*_*h}}return i}function Dn(s,t,e){const n=new Float32Array(s*s);let i=1,r=0;for(let o=0;o<t;o++){const a=Z0(s,4<<o,new je(e+o*977));for(let l=0;l<n.length;l++)n[l]+=a[l]*i;r+=i,i*=.5}for(let o=0;o<n.length;o++)n[o]/=r;return n}function Cc(s,t,e,n){const i=s.createImageData(t,t);for(let r=0;r<t*t;r++){const[o,a,l]=n(e[r]);i.data[r*4]=o,i.data[r*4+1]=a,i.data[r*4+2]=l,i.data[r*4+3]=255}s.putImageData(i,0,0)}function j0(){return ze("terrazzo",()=>{const[t,e]=nn(512);e.fillStyle="#d9d2c7",e.fillRect(0,0,512,512);const n=new je(31337),i=["#b9ada0","#8e8477","#e8e3da","#a89a8c","#cfc4b4","#7d7a72"];for(let r=0;r<2600;r++){const o=n.range(0,512),a=n.range(0,512),l=n.range(1.2,6.5);e.save(),e.translate(o,a),e.rotate(n.range(0,Math.PI)),e.fillStyle=n.pick(i),e.globalAlpha=n.range(.45,.9),e.beginPath();const c=n.int(4,7);for(let h=0;h<c;h++){const u=h/c*Math.PI*2,d=l*n.range(.65,1.25);e.lineTo(Math.cos(u)*d,Math.sin(u)*d*.8)}e.closePath(),e.fill(),e.restore()}e.globalAlpha=.25,e.strokeStyle="#a99f92",e.lineWidth=2;for(let r=0;r<=4;r++)e.beginPath(),e.moveTo(r*128,0),e.lineTo(r*128,512),e.moveTo(0,r*128),e.lineTo(512,r*128),e.stroke();return Be(t,"terrazzo",we)})}function J0(){return ze("terrazzoR",()=>{const[t,e]=nn(256),n=Dn(256,4,77);return Cc(e,256,n,i=>{const r=fe(.28+i*.34,0,1)*255;return[r,r,r]}),Be(t,"terrazzoR",We)})}function K0(){return ze("plasterN",()=>{const t=Dn(256,4,1201),e=lr(t,256,9);return Be(e,"plasterN",We)})}function $0(){return ze("plasterR",()=>{const[t,e]=nn(256),n=Dn(256,3,55);return Cc(e,256,n,i=>{const r=fe(.72+i*.2,0,1)*255;return[r,r,r]}),Be(t,"plasterR",We)})}function Dl(s=!1){const t=s?"woodDark":"wood";return ze(t,()=>{const[n,i]=nn(512),r=s?[96,66,44]:[186,148,105],o=Dn(512,4,s?909:404),a=i.createImageData(512,512);for(let l=0;l<512;l++)for(let c=0;c<512;c++){const h=l*512+c,u=o[h]*42,d=Math.sin((l+u)*.29)*.5+.5,f=o[h]*.35,g=.78+d*.2+f*.18;a.data[h*4]=fe(r[0]*g,0,255),a.data[h*4+1]=fe(r[1]*g,0,255),a.data[h*4+2]=fe(r[2]*g,0,255),a.data[h*4+3]=255}return i.putImageData(a,0,0),Be(n,t,we)})}function Il(){return ze("steelR",()=>{const[t,e]=nn(512),n=new je(6161);e.fillStyle="#4d4d4d",e.fillRect(0,0,512,512);for(let i=0;i<5200;i++){const r=n.range(0,512),o=n.range(0,512),a=n.range(18,190);e.strokeStyle=n.next()>.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.05)",e.lineWidth=n.range(.5,1.6),e.beginPath(),e.moveTo(o,r),e.lineTo(o+a,r+n.range(-.6,.6)),e.stroke()}return Be(t,"steelR",We)})}function Ul(s){const t=`paper_${s}`;return ze(t,()=>{const[n,i]=nn(512);i.fillStyle=s,i.fillRect(0,0,512,512);const r=new je(2024);for(let o=0;o<9e3;o++){const a=r.range(0,512),l=r.range(0,512),c=r.range(2,16),h=r.range(0,Math.PI);i.strokeStyle=r.next()>.5?"rgba(255,255,255,0.09)":"rgba(120,96,64,0.07)",i.lineWidth=1,i.beginPath(),i.moveTo(a,l),i.lineTo(a+Math.cos(h)*c,l+Math.sin(h)*c),i.stroke()}return Be(n,t,we)})}function Nl(){return ze("paperN",()=>{const t=Dn(256,5,8181),e=lr(t,256,5);return Be(e,"paperN",We)})}function Q0(s){const t=`crust_${s}`;return ze(t,()=>{const[n,i]=nn(512),r=s==="dark"?[138,84,44]:s==="seeded"?[162,112,66]:[196,145,88],o=Dn(512,5,s==="dark"?12:s==="seeded"?24:36),a=i.createImageData(512,512);for(let c=0;c<512*512;c++){const u=.66+o[c]*.62;a.data[c*4]=fe(r[0]*u,0,255),a.data[c*4+1]=fe(r[1]*u,0,255),a.data[c*4+2]=fe(r[2]*u,0,255),a.data[c*4+3]=255}if(i.putImageData(a,0,0),s==="seeded"){const c=new je(717);for(let h=0;h<900;h++)i.save(),i.translate(c.range(0,512),c.range(0,512)),i.rotate(c.range(0,Math.PI)),i.fillStyle=c.next()>.5?"#e8ddc0":"#4c3a25",i.beginPath(),i.ellipse(0,0,c.range(2,4.5),c.range(1,2),0,0,Math.PI*2),i.fill(),i.restore()}const l=new je(4242);i.globalAlpha=.16,i.fillStyle="#fdf6e6";for(let c=0;c<420;c++)i.beginPath(),i.arc(l.range(0,512),l.range(0,512),l.range(1,7),0,Math.PI*2),i.fill();return i.globalAlpha=1,Be(n,t,we)})}function tg(s=!1){const t=`crumb_${s}`;return ze(t,()=>{const[n,i]=nn(512);i.fillStyle=s?"#e2d3b4":"#f2e6cd",i.fillRect(0,0,512,512);const r=new je(s?313:191);for(let o=0;o<2400;o++){const a=r.range(0,512),l=r.range(0,512),c=Math.pow(r.next(),2.2)*9+1;i.fillStyle=`rgba(178,152,112,${r.range(.18,.5)})`,i.beginPath(),i.ellipse(a,l,c,c*r.range(.7,1.2),r.range(0,Math.PI),0,Math.PI*2),i.fill(),i.fillStyle="rgba(255,250,236,0.5)",i.beginPath(),i.ellipse(a-c*.2,l-c*.25,c*.5,c*.4,0,0,Math.PI*2),i.fill()}if(s)for(let o=0;o<500;o++)i.save(),i.translate(r.range(0,512),r.range(0,512)),i.rotate(r.range(0,Math.PI)),i.fillStyle="#6b5433",i.beginPath(),i.ellipse(0,0,r.range(1.5,3),r.range(.8,1.5),0,0,Math.PI*2),i.fill(),i.restore();return Be(n,t,we)})}function Fl(){return ze("crumbN",()=>{const t=Dn(256,5,606),e=lr(t,256,14);return Be(e,"crumbN",We)})}function eg(){return ze("peelN",()=>{const t=new Float32Array(65536),e=new je(9090),n=[];for(let o=0;o<900;o++)n.push([e.range(0,256),e.range(0,256),e.range(2.5,5.5)]);for(const[o,a,l]of n){const c=Math.ceil(l);for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++){const d=Math.hypot(u,h);if(d>l)continue;const f=(Math.round(o)+u+256)%256,g=(Math.round(a)+h+256)%256;t[g*256+f]-=(1-d/l)*.55}}const i=Dn(256,4,1717);for(let o=0;o<t.length;o++)t[o]+=i[o]*.3;const r=lr(t,256,22);return Be(r,"peelN",We)})}function ng(s){const t=`peel_${s}`;return ze(t,()=>{const[n,i]=nn(256);i.fillStyle=s,i.fillRect(0,0,256,256);const r=Dn(256,4,313),o=i.getImageData(0,0,256,256);for(let a=0;a<256*256;a++){const l=.86+r[a]*.28;o.data[a*4]=fe(o.data[a*4]*l,0,255),o.data[a*4+1]=fe(o.data[a*4+1]*l,0,255),o.data[a*4+2]=fe(o.data[a*4+2]*(l*.98),0,255)}return i.putImageData(o,0,0),Be(n,t,we)})}function ig(s,t){return ze(`label_${t}`,()=>{const[n,i]=nn(512);i.fillStyle="#fbf8f2",i.fillRect(0,0,512,512);const r=new je(51);i.globalAlpha=.05;for(let l=0;l<160;l++)i.fillStyle="#c9bda6",i.fillRect(0,r.range(0,512),512,r.range(1,3));i.globalAlpha=1,i.fillStyle=s.accent,i.fillRect(0,0,512,54);let o=60;i.fillStyle="#1d1b19";const a=new je(88);for(;o<452;){const l=a.range(3,11);a.next()>.36&&i.fillRect(o,322,l,130),o+=l+a.range(3,9)}if(i.save(),i.translate(512/2,512*.42),i.strokeStyle="#3a332c",i.fillStyle="#3a332c",i.lineWidth=14,i.lineCap="round",s.glyph==="spiral"){i.beginPath();for(let l=0;l<=120;l++){const c=l/120,h=c*Math.PI*5,u=18+c*74;i.lineTo(Math.cos(h)*u,Math.sin(h)*u)}i.stroke()}else if(s.glyph==="ring")for(const[l,c,h]of[[-46,-12,40],[42,4,46],[-6,52,32]])i.beginPath(),i.arc(l,c,h,0,Math.PI*2),i.stroke();else if(s.glyph==="bean")for(const[l,c,h]of[[-44,-6,.4],[40,10,-.6],[-4,58,.1]])i.save(),i.translate(l,c),i.rotate(h),i.beginPath(),i.ellipse(0,0,44,28,0,0,Math.PI*2),i.fill(),i.restore();else if(s.glyph==="bottle")i.beginPath(),i.moveTo(-26,-80),i.lineTo(-26,-46),i.lineTo(-46,-12),i.lineTo(-46,82),i.lineTo(46,82),i.lineTo(46,-12),i.lineTo(26,-46),i.lineTo(26,-80),i.closePath(),i.stroke();else{i.lineWidth=12;for(let l=-2;l<=2;l++)i.beginPath(),i.moveTo(l*30,-62),i.lineTo(l*30,70),i.stroke()}return i.restore(),Be(n,`label_${t}`,we)})}function sg(){return ze("receipt",()=>{const[t,e]=nn(256);e.fillStyle="#faf7f0",e.fillRect(0,0,256,256);const n=new je(404);e.fillStyle="#8d8578";for(let i=30;i<236;i+=22){const r=n.int(2,5);for(let o=0;o<r;o++)e.globalAlpha=n.range(.35,.7),e.fillRect(24+o*46,i,n.range(18,40),6)}return e.globalAlpha=1,e.fillStyle="#c8748c",e.fillRect(0,0,256,10),Be(t,"receipt",we)})}function rg(s,t){return ze(`sign_${s}`,()=>{const[n,i]=nn(256);if(i.fillStyle="#f3ece0",i.fillRect(0,0,256,256),i.strokeStyle="#5c5348",i.fillStyle="#5c5348",i.lineWidth=12,i.lineJoin="round",i.save(),i.translate(256/2,256/2),t==="fish")i.beginPath(),i.moveTo(-72,0),i.quadraticCurveTo(0,-56,62,0),i.quadraticCurveTo(0,56,-72,0),i.stroke(),i.beginPath(),i.moveTo(62,0),i.lineTo(92,-28),i.lineTo(92,28),i.closePath(),i.stroke();else if(t==="cheese"){i.beginPath(),i.moveTo(-80,40),i.lineTo(70,40),i.lineTo(-20,-46),i.closePath(),i.stroke();for(const[r,o]of[[-30,20],[10,24],[-4,-4]])i.beginPath(),i.arc(r,o,11,0,Math.PI*2),i.fill()}else if(t==="leaf")i.beginPath(),i.moveTo(0,66),i.quadraticCurveTo(-86,-10,0,-70),i.quadraticCurveTo(86,-10,0,66),i.stroke(),i.beginPath(),i.moveTo(0,62),i.lineTo(0,-54),i.stroke();else if(t==="grape")for(let r=0;r<4;r++)for(let o=0;o<=r;o++)i.beginPath(),i.arc((o-r/2)*34,r*30-42,15,0,Math.PI*2),i.fill();else i.beginPath(),i.moveTo(-46,-40),i.lineTo(-38,48),i.lineTo(38,48),i.lineTo(46,-40),i.closePath(),i.stroke(),i.beginPath(),i.arc(56,0,24,-1.2,1.2),i.stroke();return i.restore(),Be(n,`sign_${s}`,we)})}function og(){for(const s of Yo)s.dispose();Yo.length=0,ga.clear()}class ag{constructor(){E(this,"all",[]);E(this,"floor",this.track(new ne({map:(()=>{const t=j0();return t.repeat.set(34,16),t})(),roughnessMap:(()=>{const t=J0();return t.repeat.set(34,16),t})(),roughness:.42,metalness:0,color:16777215})));E(this,"wall",this.track(new ne({color:15525594,roughness:.94,metalness:0,normalMap:(()=>{const t=K0();return t.repeat.set(6,3),t})(),normalScale:new lt(.35,.35),roughnessMap:(()=>{const t=$0();return t.repeat.set(6,3),t})()})));E(this,"ceiling",this.track(new ne({color:15196889,roughness:.96,metalness:0})));E(this,"beam",this.track(new ne({color:12168345,roughness:.8,metalness:0})));E(this,"column",this.track(new ne({color:14998993,roughness:.85,metalness:0})));E(this,"wood",this.track(new ne({map:Dl(!1),roughness:.6,metalness:0})));E(this,"woodDark",this.track(new ne({map:Dl(!0),roughness:.55,metalness:0})));E(this,"steel",this.track(new ne({color:14541542,metalness:1,roughness:.3,roughnessMap:Il()})));E(this,"steelDark",this.track(new ne({color:11055286,metalness:1,roughness:.42,roughnessMap:Il()})));E(this,"painted",this.track(new ne({color:13946562,metalness:.18,roughness:.52})));E(this,"paintedWarm",this.track(new ne({color:13090219,metalness:.12,roughness:.6})));E(this,"steelPolished",this.track(new ne({color:14673128,metalness:1,roughness:.16})));E(this,"guard",this.track(new zr({color:14676212,metalness:0,roughness:.06,transparent:!0,opacity:.3,clearcoat:1,clearcoatRoughness:.04,side:Ne,depthWrite:!1})));E(this,"glassBottle",this.track(new zr({color:15266548,metalness:0,roughness:.05,transparent:!0,opacity:.26,clearcoat:1,clearcoatRoughness:.03,side:Ne,depthWrite:!1})));E(this,"paperBag",this.track(new ne({map:Ul("#cbab7f"),normalMap:Nl(),normalScale:new lt(.6,.6),roughness:.92,metalness:0,side:Ne})));E(this,"paperWhite",this.track(new ne({map:Ul("#efe8db"),normalMap:Nl(),normalScale:new lt(.45,.45),roughness:.9,metalness:0,side:Ne})));E(this,"rose",this.track(new ne({color:13137036,roughness:.45,metalness:0})));E(this,"roseSoft",this.track(new ne({color:14327982,roughness:.6,metalness:0})));E(this,"rubber",this.track(new ne({color:3092531,roughness:.88,metalness:0})));E(this,"juice",this.track(new zr({color:15900706,roughness:.14,metalness:0,transparent:!0,opacity:.9,clearcoat:.8,clearcoatRoughness:.08})));E(this,"foam",this.track(new ne({color:16767370,roughness:.85,metalness:0,transparent:!0,opacity:.95})));E(this,"peel",this.track(new ne({map:ng("#f08a1e"),normalMap:eg(),normalScale:new lt(1.1,1.1),roughness:.62,metalness:0})));E(this,"pulp",this.track(new ne({color:16757829,roughness:.5,metalness:0})));E(this,"signBoard",this.track(new ne({color:15985888,roughness:.8,metalness:0})));E(this,"lampShade",this.track(new ne({color:15984333,roughness:.5,metalness:.15,side:Ne})));E(this,"lampGlow",this.track(new Ii({color:16771522,toneMapped:!1})));E(this,"scanLight",this.track(new Ii({color:16730682,transparent:!0,opacity:.85,toneMapped:!1,blending:Qr,depthWrite:!1})));E(this,"hitVolume",this.track(new Ii({visible:!1})));E(this,"labelCache",new Map)}track(t){return this.all.push(t),t}crust(t){return this.track(new ne({map:Q0(t),roughness:.78,metalness:0,normalMap:Fl(),normalScale:new lt(.5,.5)}))}crumb(t){return this.track(new ne({map:tg(t),normalMap:Fl(),normalScale:new lt(.9,.9),roughness:.95,metalness:0}))}label(t,e){const n=this.labelCache.get(e);if(n)return n;const i=this.track(new ne({map:ig(t,e),roughness:.68,metalness:0,side:Ne}));return this.labelCache.set(e,i),i}receipt(){return this.track(new ne({map:sg(),roughness:.85,metalness:0,side:Ne}))}sign(t,e){return this.track(new ne({map:rg(t,e),roughness:.8,metalness:0}))}plain(t,e=.7,n=0){return this.track(new ne({color:t,roughness:e,metalness:n}))}dispose(){this.labelCache.clear();for(const t of this.all)t.dispose();this.all.length=0,og()}}const It={minX:-31,maxX:35,backZ:-18.5,frontZ:10.5,ceiling:6.8,mezzanineY:4.2,mezzanineZ:-13},Le=-1.8,Zr=.92,Ol=-4.4,le={bulk:-7.2,juice:-1.4,bread:4.4,checkout:10.4},Bl=["bulk","juice","bread","checkout"];function zl(s){return new y(le[s]+.8,0,Le+1.5)}function lg(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new qe;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=kl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=kl(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function kl(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new ln(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Pc(s,t,e){const n=new ms,i=Math.min(e,s/2,t/2),r=-s/2,o=-t/2;return n.moveTo(r+i,o),n.lineTo(r+s-i,o),n.quadraticCurveTo(r+s,o,r+s,o+i),n.lineTo(r+s,o+t-i),n.quadraticCurveTo(r+s,o+t,r+s-i,o+t),n.lineTo(r+i,o+t),n.quadraticCurveTo(r,o+t,r,o+t-i),n.lineTo(r,o+i),n.quadraticCurveTo(r,o,r+i,o),n}function ie(s,t,e,n=.02,i=2){const r=Math.min(n,s/2-.001,t/2-.001,e/2-.001),o=Pc(s-r*2,t-r*2,Math.max(.001,n-r)),a=new rr(o,{depth:Math.max(.001,e-r*2),bevelEnabled:!0,bevelThickness:r,bevelSize:r,bevelSegments:i,curveSegments:4});return a.translate(0,0,-(e-r*2)/2-r),a.computeVertexNormals(),a}function Ze(s,t,e,n){const i=new z(new te(s,t,e),n);return i.name="hit",i.renderOrder=-1,i}function Te(s,t,e=!1,n=!1){const i=lg(s,!1);for(const o of s)o.dispose();const r=new z(i??new qe,t);return r.castShadow=e,r.receiveShadow=n,r}function ee(s,t,e,n,i,r,o=0){const a=new te(s,t,e);return o&&a.rotateY(o),a.translate(n,i,r),a}function Hl(s,t,e,n,i,r,o){const a=new jt(s,t,e,n);return a.translate(i,r,o),a}class cg{constructor(t,e){E(this,"group",new xe);E(this,"sun");E(this,"lampLights",[]);E(this,"farDetail",[]);E(this,"smallProps",[]);E(this,"productMeshes",[]);E(this,"budget",{boxes:[],boxColors:[],cans:[],canColors:[],jars:[],jarColors:[],bottles:[],bottleColors:[]});E(this,"rng",new je(20260906));this.mat=t,this.quality=e,this.group.name="MarketHall",this.buildShell(),this.buildColumnsAndBeams(),this.buildMezzanine(),this.buildPendants(),this.buildFrontCounters(),this.buildBackShelving(),this.buildFarShops(),this.buildAisleGondolas(),this.flushProducts();const n=new ed(16184042,8222056,.55);n.position.set(0,It.ceiling,0),this.group.add(n),this.sun=new sl(16773592,1.7),this.sun.position.set(-6,12,7),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=34,this.sun.shadow.camera.left=-6,this.sun.shadow.camera.right=6,this.sun.shadow.camera.top=6,this.sun.shadow.camera.bottom=-4,this.sun.shadow.bias=-9e-4,this.sun.shadow.normalBias=.02,this.group.add(this.sun),this.group.add(this.sun.target);const i=new sl(14673648,.22);i.position.set(9,7,-9),this.group.add(i),this.group.add(new sd(15262940,.12));for(const r of[le.bulk,le.juice,le.bread,le.checkout]){const o=new pa(16765088,0,6.5,2);o.position.set(r,2.55,Le+.3),this.lampLights.push(o),this.group.add(o)}}buildShell(){const t=It.maxX-It.minX,e=It.frontZ-It.backZ,n=(It.maxX+It.minX)/2,i=(It.frontZ+It.backZ)/2,r=new z(new De(t,e,1,1),this.mat.floor);r.rotation.x=-Math.PI/2,r.position.set(n,0,i),r.receiveShadow=!0,this.group.add(r);const o=[ee(t,7.4,.4,n,3.7,It.backZ-.2),ee(t,7.4,.4,n,3.7,It.frontZ+.2),ee(.4,7.4,e,It.minX-.2,3.7,i),ee(.4,7.4,e,It.maxX+.2,3.7,i)],a=Te(o,this.mat.wall,!1,!0);this.group.add(a);const l=new z(new De(t,e),this.mat.ceiling);l.rotation.x=Math.PI/2,l.position.set(n,It.ceiling,i),this.group.add(l);const c=new z(new De(t-6,4.2),new Ii({color:16643816,toneMapped:!1}));c.rotation.x=Math.PI/2,c.position.set(n,It.ceiling-.06,-5.2),this.group.add(c);const h=[];for(let u=It.minX+4;u<It.maxX-3;u+=3.2)h.push(ee(.16,.22,4.4,u,It.ceiling-.12,-5.2));h.push(ee(t-6,.24,.2,n,It.ceiling-.12,-7.3)),h.push(ee(t-6,.24,.2,n,It.ceiling-.12,-3.1)),this.group.add(Te(h,this.mat.beam))}buildColumnsAndBeams(){const t=[],e=[];for(let n=-26;n<=32;n+=8){for(const i of[3.6,-9.6])t.push(ee(.52,It.ceiling,.52,n,It.ceiling/2,i)),t.push(ee(.72,.2,.72,n,.1,i)),t.push(ee(.66,.16,.66,n,It.ceiling-.1,i));e.push(ee(.34,.5,14.2,n,It.ceiling-.35,-3))}for(const n of[3.6,-9.6,-1.9])e.push(ee(It.maxX-It.minX,.42,.3,2,It.ceiling-.6,n));this.group.add(Te(t,this.mat.column,!0,!0)),this.group.add(Te(e,this.mat.beam,!0,!1))}buildMezzanine(){const t=It.maxX-It.minX,e=(It.maxX+It.minX)/2,n=[ee(t,.42,It.mezzanineZ-It.backZ,e,It.mezzanineY,(It.mezzanineZ+It.backZ)/2)];this.group.add(Te(n,this.mat.column,!1,!0));const i=[];for(let c=It.minX+1;c<It.maxX;c+=1.5)i.push(Hl(.025,.025,1.05,6,c,It.mezzanineY+.74,It.mezzanineZ-.1));this.group.add(Te(i,this.mat.steelDark));const r=new z(new jt(.05,.05,t,8),this.mat.steel);r.rotation.z=Math.PI/2,r.position.set(e,It.mezzanineY+1.28,It.mezzanineZ-.1),this.group.add(r);const o=new z(new De(t-2,.95),this.mat.guard);o.position.set(e,It.mezzanineY+.72,It.mezzanineZ-.1),this.group.add(o),this.farDetail.push(o);const a=[];for(let c=It.minX+3;c<It.maxX-2;c+=6)a.push(ee(4.4,2.6,.4,c,It.mezzanineY+1.55,It.backZ+1.2)),a.push(ee(.4,2.6,2.2,c+2.4,It.mezzanineY+1.55,It.backZ+2.3));const l=Te(a,this.mat.wall);this.group.add(l),this.farDetail.push(l)}buildPendants(){const t=[],e=[],n=[];for(let i=-24;i<=32;i+=3.6)for(const[r,o]of[[1.2,3.15],[-6.4,3.6]]){const a=new jt(.3,.14,.26,12,1,!0);a.translate(i,o,r),t.push(a);const l=new oi(.28,12);l.rotateX(Math.PI/2),l.translate(i,o-.13,r),e.push(l),n.push(Hl(.008,.008,It.ceiling-o-.13,4,i,(It.ceiling+o)/2,r))}this.group.add(Te(t,this.mat.lampShade)),this.group.add(Te(e,this.mat.lampGlow)),this.group.add(Te(n,this.mat.steelDark))}buildFrontCounters(){const t=[],e=[],n=[],i=[[le.bulk,3.1],[le.juice,3],[le.bread,3.1],[le.checkout,3.2]];for(const[o,a]of i)t.push(ee(a,Zr-.08,.8,o,(Zr-.08)/2,Le)),n.push(ee(a+.1,.08,.9,o,Zr-.04,Le)),e.push(ee(a-.1,.06,.06,o,.12,Le+.42));for(const o of[-4.3,1.5,7.4])n.push(ee(.3,2.1,3.6,o,1.05,Le-1.3)),t.push(ee(.36,.12,3.66,o,2.12,Le-1.3));for(const[o,a]of i)n.push(ee(a+.9,3.4,.28,o,1.7,Ol-.9));this.group.add(Te(t,this.mat.wood,!0,!0)),this.group.add(Te(e,this.mat.steelDark)),this.group.add(Te(n,this.mat.column,!0,!0));const r=[[le.bulk,"bulk","leaf"],[le.juice,"juice","grape"],[le.bread,"bread","cup"],[le.checkout,"checkout","cheese"]];for(const[o,a,l]of r){const c=new z(new te(1.1,1.1,.06),[this.mat.woodDark,this.mat.woodDark,this.mat.woodDark,this.mat.woodDark,this.mat.sign(a,l),this.mat.woodDark]);c.position.set(o,2.62,Le-1),this.group.add(c);const h=new z(new jt(.012,.012,1,6),this.mat.steelDark);h.position.set(o,3.15,Le-1),this.group.add(h),this.smallProps.push(h)}}buildBackShelving(){const t=[],e=[];for(const n of[le.bulk,le.juice,le.bread,le.checkout])this.shelfUnit(n,Ol,2.9,.62,t,e,0);this.group.add(Te(t,this.mat.steelDark,!1,!0)),this.group.add(Te(e,this.mat.wood,!0,!0))}shelfUnit(t,e,n,i,r,o,a,l=4,c=1){const u=Math.cos(a),d=Math.sin(a),f=(_,m)=>new y(t+_*u-m*d,0,e+_*d+m*u);for(const _ of[-1,1]){const m=f(n/2*_,0);r.push(ee(.06,2.1,i,m.x,2.1/2,m.z,a))}const g=f(0,-i/2+.03);r.push(ee(n,2.1,.05,g.x,2.1/2,g.z,a));for(let _=0;_<l;_++){const m=.34+_*(1.6/(l-1)),p=f(0,0);o.push(ee(n-.02,.045,i,p.x,m,p.z,a));const A=Math.round(n/.22*c);for(let S=0;S<A;S++){if(this.rng.next()>.86)continue;const x=-n/2+.14+(S+.5)*((n-.28)/A),P=this.rng.range(-i/2+.12,i/2-.14),C=f(x,P);this.addProduct(C.x,m+.023,C.z,a)}}}addProduct(t,e,n,i){const r=this.rng.next(),o=i+this.rng.range(-.25,.25),a=new ue,l=new ci().setFromAxisAngle(new y(0,1,0),o);if(r<.42){const c=this.rng.range(.17,.28),h=this.rng.range(.09,.15);a.compose(new y(t,e+c/2,n),l,new y(h,c,this.rng.range(.05,.08))),this.budget.boxes.push(a),this.budget.boxColors.push(this.foodColor())}else if(r<.68){const c=this.rng.range(.09,.14),h=this.rng.range(.033,.045);a.compose(new y(t,e+c/2,n),l,new y(h,c,h)),this.budget.cans.push(a),this.budget.canColors.push(this.foodColor())}else if(r<.86){const c=this.rng.range(.11,.16),h=this.rng.range(.04,.055);a.compose(new y(t,e+c/2,n),l,new y(h,c,h)),this.budget.jars.push(a),this.budget.jarColors.push(this.foodColor())}else{const c=this.rng.range(.2,.3),h=this.rng.range(.035,.05);a.compose(new y(t,e+c/2,n),l,new y(h,c,h)),this.budget.bottles.push(a),this.budget.bottleColors.push(this.foodColor())}}foodColor(){const t=[14262618,12870716,9413207,14271354,11035199,14727562,8359773,13601358,12558460,14338470,10246986,14864808];return new Xt(t[Math.floor(this.rng.next()*t.length)])}flushProducts(){const t=(h,u,d,f)=>{if(!u.length)return;const g=new ps(h,f,u.length);g.castShadow=!0,g.receiveShadow=!0;for(let _=0;_<u.length;_++)g.setMatrixAt(_,u[_]),g.setColorAt(_,d[_]);g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0),g.frustumCulled=!0,this.group.add(g),this.productMeshes.push({mesh:g,full:u.length})},e=new te(1,1,1),n=new jt(1,1,1,10),i=new jt(1,.92,1,10),r=new jt(.45,1,1,10),o=this.mat.plain(16777215,.72,0),a=this.mat.plain(16777215,.3,.85),l=this.mat.plain(16777215,.22,0),c=this.mat.plain(16777215,.24,0);t(e,this.budget.boxes,this.budget.boxColors,o),t(n,this.budget.cans,this.budget.canColors,a),t(i,this.budget.jars,this.budget.jarColors,l),t(r,this.budget.bottles,this.budget.bottleColors,c)}buildFarShops(){const t=[],e=[],n=[],i=[];for(let h=0;h<6;h++){const u=-22+h*9.5;t.push(ee(7.2,3.6,.3,u,1.8,-12.2)),t.push(ee(.3,3.6,2.6,u-3.5,1.8,-11)),e.push(ee(6.4,.95,.75,u,.48,-9.9)),e.push(ee(6.6,.1,.9,u,1,-9.9));const d=ee(6.6,.08,1.5,u,2.6,-10.4);d.rotateX(-.22),d.translate(0,.1,.05),e.push(d),this.shelfUnit(u,-11.6,6,.55,n,i,0,4,.75*this.quality.backgroundDensity)}for(const h of[-28,31])for(let u=0;u<3;u++){const d=-8+u*5.5;t.push(ee(.3,3.4,4.4,h,1.7,d)),e.push(ee(1.4,.95,3.6,h+(h<0?1.2:-1.2),.48,d)),this.shelfUnit(h+(h<0?2.6:-2.6),d,4,.5,n,i,Math.PI/2,4,.6*this.quality.backgroundDensity)}const r=Te(t,this.mat.wall,!1,!0),o=Te(e,this.mat.woodDark,!1,!0),a=Te(n,this.mat.steelDark),l=Te(i,this.mat.wood);this.group.add(r,o,a,l),this.farDetail.push(a,l);const c=["fish","cheese","grape","leaf","cup","fish"];for(let h=0;h<6;h++){const u=-22+h*9.5,d=new z(new De(1.5,1.5),this.mat.sign(`far${h}`,c[h]));d.position.set(u,3,-12.02),this.group.add(d),this.farDetail.push(d)}}buildAisleGondolas(){const t=[],e=[];for(const[r,o,a]of[[-17.5,2.2,Math.PI/2],[-4.5,5.6,0],[10.5,5.4,0],[23.5,2,Math.PI/2],[27.5,-3.2,0]])this.shelfUnit(r,o,3.6,.7,t,e,a,4,this.quality.backgroundDensity);const n=Te(t,this.mat.steelDark,!0,!0),i=Te(e,this.mat.wood,!0,!0);this.group.add(n,i)}setFocus(t,e){this.sun.position.set(t-5.5,11,e+8),this.sun.target.position.set(t,1,e),this.sun.target.updateMatrixWorld();const n=[le.bulk,le.juice,le.bread,le.checkout];for(let i=0;i<this.lampLights.length;i++){const r=Math.abs(n[i]-t)<3.5;this.lampLights[i].intensity=r?6.5:0}}applyQuality(){this.sun.castShadow=this.quality.shadowsEnabled,this.sun.shadow.mapSize.width!==this.quality.shadowSize&&(this.sun.shadow.mapSize.set(this.quality.shadowSize,this.quality.shadowSize),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null);for(const t of this.farDetail)t.visible=this.quality.tier>0;for(const t of this.smallProps)t.visible=this.quality.smallProps;for(const t of this.productMeshes)t.mesh.count=this.quality.tier>0?t.full:Math.floor(t.full*.45)}}class hg{constructor(t){E(this,"group",new xe);E(this,"basket",new xe);E(this,"target",new y);E(this,"targetYaw",0);E(this,"wheelSpin",[]);E(this,"lastPos",new y);this.group.name="ShoppingCart";const e=(a,l,c,h,u=0,d=0,f=.016)=>{const g=new z(new jt(f,f,a,8),t.steel);return g.position.set(l,c,h),g.rotation.set(u,0,d),g.castShadow=!0,this.group.add(g),g};for(const a of[-1,1])for(const l of[-1,1]){e(.86,a*.21,.46,l*.24,0,0);const c=new xe;c.position.set(a*.21,.05,l*.24);const h=new z(new Ve(.045,.018,6,14),t.rubber);h.rotation.y=Math.PI/2,h.castShadow=!0,c.add(h),this.group.add(c),this.wheelSpin.push(h)}e(.48,0,.1,.24,0,Math.PI/2),e(.48,0,.1,-.24,0,Math.PI/2),e(.5,0,.86,.3,Math.PI/2,0);const n=new z(new te(.52,.26,.42),t.rose);n.position.set(0,.95,0),n.castShadow=!0,n.receiveShadow=!0,this.basket.add(n);const i=new z(new te(.47,.24,.37),t.roseSoft);i.position.set(0,.975,0),i.material.side=Fe,this.basket.add(i);const r=new z(new Ve(.29,.014,6,20),t.steelPolished);r.rotation.x=Math.PI/2,r.scale.set(1,.8,1),r.position.set(0,1.08,0),this.basket.add(r);const o=new z(new jt(.02,.02,.44,8),t.roseSoft);o.rotation.z=Math.PI/2,o.position.set(0,1.14,.3),this.group.add(o),e(.24,-.22,1.03,.3),e(.24,.22,1.03,.3),this.group.add(this.basket),this.group.position.set(0,0,0),this.lastPos.copy(this.group.position)}slotLocal(t){const e=[new y(-.15,1.06,.02),new y(.02,1.06,-.08),new y(.17,1.06,.06)];return e[t%e.length].clone()}moveTo(t,e=0){this.target.copy(t),this.targetYaw=e}snapTo(t,e=0){this.target.copy(t),this.targetYaw=e,this.group.position.copy(t),this.group.rotation.y=e,this.lastPos.copy(t)}receive(t,e){return this.basket.attach(t.root),this.slotLocal(e)}update(t){this.group.position.x=ve(this.group.position.x,this.target.x,5e-4,t),this.group.position.z=ve(this.group.position.z,this.target.z,5e-4,t),this.group.rotation.y=ve(this.group.rotation.y,this.targetYaw,.002,t);const e=this.group.position.distanceTo(this.lastPos);if(this.lastPos.copy(this.group.position),e>1e-5){const n=e/.045;for(const i of this.wheelSpin)i.rotation.x-=n}}}class ug{constructor(){E(this,"map",new Map)}set(t){this.map.set(t.id,t)}get(t){return this.map.get(t)}delete(t){this.map.delete(t)}get list(){return["bulk","juice","bread"].map(e=>this.map.get(e)).filter(e=>!!e)}get complete(){return this.list.length===3}clear(){this.map.clear()}}const dg={arcDeg:0,arcPeriod:16,truck:0,truckPeriod:13,dollyFrom:1,dollyTo:1,dollyTime:12};function Ws(s,t){const e=t&&s.portrait?s.portrait:{},n={...dg,...s.motion??{},...e.motion??{}};return{target:(e.target??s.target).clone(),radius:e.radius??s.radius,radiusX:e.radiusX??s.radiusX??e.radius??s.radius,yaw:Li.degToRad(e.yawDeg??s.yawDeg),pitch:Li.degToRad(e.pitchDeg??s.pitchDeg),focal:e.focal??s.focal,composeX:e.compose?.x??s.compose?.x??0,composeY:e.compose?.y??s.compose?.y??0,minDist:e.minDist??s.minDist??.55,motion:n}}class fg{constructor(t,e){E(this,"camera");E(this,"from",null);E(this,"to");E(this,"spec");E(this,"t",1);E(this,"duration",1);E(this,"shotTime",0);E(this,"portrait",!1);E(this,"tmpTarget",new y);E(this,"tmpDir",new y);E(this,"tmpRight",new y);E(this,"tmpUp",new y);E(this,"lookPoint",new y);this.camera=new tn(50,t,.05,80),this.camera.filmGauge=36,this.spec=e,this.portrait=t<1,this.to=Ws(e,this.portrait),this.apply(this.to,0)}get currentShotName(){return this.spec.name}get settled(){return this.t>=1}setAspect(t){this.camera.aspect=t;const e=t<1;e!==this.portrait&&(this.portrait=e,this.from=this.currentResolved(),this.to=Ws(this.spec,e),this.t=0,this.duration=.6)}cut(t){this.spec=t,this.to=Ws(t,this.portrait),this.from=null,this.t=1,this.shotTime=0}goTo(t,e=1.2){this.spec===t&&this.t>=1||(this.from=this.currentResolved(),this.spec=t,this.to=Ws(t,this.portrait),this.t=0,this.duration=Math.max(.001,e),this.shotTime=0)}currentResolved(){if(!this.from||this.t>=1)return{...this.to,target:this.to.target.clone()};const t=Ll(fe(this.t,0,1)),e=this.from,n=this.to;return{target:e.target.clone().lerp(n.target,t),radius:se(e.radius,n.radius,t),radiusX:se(e.radiusX,n.radiusX,t),yaw:se(e.yaw,n.yaw,t),pitch:se(e.pitch,n.pitch,t),focal:se(e.focal,n.focal,t),composeX:se(e.composeX,n.composeX,t),composeY:se(e.composeY,n.composeY,t),minDist:se(e.minDist,n.minDist,t),motion:n.motion}}update(t){this.t<1?this.t=fe(this.t+t/this.duration,0,1):this.shotTime+=t,this.apply(this.currentResolved(),this.t>=1?this.shotTime:0)}apply(t,e){const n=this.camera;n.setFocalLength(t.focal),n.updateProjectionMatrix();const i=t.motion,r=i.dollyTime>0?fe(e/i.dollyTime,0,1):1,o=se(i.dollyFrom,i.dollyTo,Ll(r)),a=i.arcDeg>0?Li.degToRad(i.arcDeg)*Math.sin(e/i.arcPeriod*Math.PI*2):0,l=t.yaw+a,c=Li.degToRad(n.fov*.5),h=Math.atan(Math.tan(c)*n.aspect),u=t.radius*o/Math.tan(c),d=t.radiusX*o/Math.tan(h),f=Math.max(t.minDist,Math.max(u,d));if(this.tmpDir.set(Math.sin(l)*Math.cos(t.pitch),Math.sin(t.pitch),Math.cos(l)*Math.cos(t.pitch)),this.tmpTarget.copy(t.target),this.tmpRight.set(Math.cos(l),0,-Math.sin(l)),i.truck>0){const m=i.truck*Math.sin(e/i.truckPeriod*Math.PI*2+1.1);this.tmpTarget.addScaledVector(this.tmpRight,m)}n.position.copy(this.tmpTarget).addScaledVector(this.tmpDir,f);const g=Math.tan(c)*f,_=g*n.aspect;this.tmpUp.set(0,1,0).projectOnPlane(this.tmpDir).normalize(),(!Number.isFinite(this.tmpUp.x)||this.tmpUp.lengthSq()<1e-6)&&this.tmpUp.set(0,1,0),this.lookPoint.copy(this.tmpTarget).addScaledVector(this.tmpUp,-t.composeY*g).addScaledVector(this.tmpRight,-t.composeX*_),n.up.set(0,1,0),n.lookAt(this.lookPoint),n.updateMatrixWorld()}distanceTo(t){return this.camera.position.distanceTo(t)}metresPerPixel(t,e){const n=Li.degToRad(this.camera.fov*.5);return 2*Math.tan(n)*t/Math.max(1,e)}}class pg{constructor(t,e){E(this,"handles",new Map);E(this,"order",[]);E(this,"active",null);E(this,"raycaster",new ad);E(this,"ndc",new lt);E(this,"plane",new kn);E(this,"hitPoint",new y);E(this,"tmp",new y);E(this,"screenUp",new y);E(this,"camForward",new y);E(this,"projected",new y);E(this,"idleTime",0);E(this,"onFirstInput",null);E(this,"hadFirstInput",!1);E(this,"onPointerDown",t=>this.pointerDown(t));E(this,"onPointerMove",t=>this.pointerMove(t));E(this,"onPointerUp",t=>this.pointerUp(t));E(this,"onContextMenu",t=>t.preventDefault());this.canvas=t,this.camera=e,t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointermove",this.onPointerMove),t.addEventListener("pointerup",this.onPointerUp),t.addEventListener("pointercancel",this.onPointerUp),t.addEventListener("contextmenu",this.onContextMenu)}dispose(){this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("pointercancel",this.onPointerUp),this.canvas.removeEventListener("contextmenu",this.onContextMenu),this.handles.clear(),this.order.length=0,this.active=null}add(t){t.enabled=t.enabled??!0,this.handles.set(t.id,t),this.rebuild()}remove(t){this.active?.handle.id===t&&this.releaseActive(),this.handles.delete(t),this.rebuild()}clear(){this.releaseActive(),this.handles.clear(),this.order.length=0}setEnabled(t,e){const n=this.handles.get(t);n&&(n.enabled=e,!e&&this.active?.handle.id===t&&this.releaseActive())}has(t){return this.handles.has(t)}get isDragging(){return this.active!==null}get activeId(){return this.active?.handle.id??null}describe(){const t=this.canvas.getBoundingClientRect(),e=i=>{const r=i.clone().project(this.camera);return{x:(r.x+1)/2*t.width,y:(1-r.y)/2*t.height}},n=[];for(const i of this.handles.values()){if(i.enabled===!1)continue;const r=i.object.getObjectByName("hit")??i.object,o=e(r.getWorldPosition(new y)),a=i.kind==="drag"&&i.snaps?i.snaps().map(l=>e(l.world())):[];n.push({id:i.id,kind:i.kind,at:o,targets:a,pivot:i.kind==="crank"?e(i.pivot.getWorldPosition(new y)):void 0})}return n}get liveCount(){let t=0;for(const e of this.handles.values())e.enabled!==!1&&t++;return t}rebuild(){this.order=[...this.handles.values()]}toNdc(t){const e=this.canvas.getBoundingClientRect();return this.ndc.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),e}pointerDown(t){if(this.idleTime=0,this.hadFirstInput||(this.hadFirstInput=!0,this.onFirstInput?.()),this.active)return;t.preventDefault();const e=this.toNdc(t);this.raycaster.setFromCamera(this.ndc,this.camera);let n=null;for(const a of this.order){if(a.enabled===!1)continue;const l=this.raycaster.intersectObject(a.object,!0);l.length&&(!n||l[0].distance<n.dist)&&(n={handle:a,dist:l[0].distance})}if(!n)return;const i=n.handle,r=new lt(t.clientX-e.left,t.clientY-e.top);i.object.getWorldPosition(this.tmp),this.camera.getWorldDirection(this.camForward),this.plane.setFromNormalAndCoplanarPoint(this.camForward.clone().negate(),this.tmp);let o=0;i.kind==="crank"&&(o=this.angleAroundPivot(i,r,e)),this.active={handle:i,pointerId:t.pointerId,plane:this.plane.clone(),startAngle:o,startPx:r.clone(),lastPx:r.clone(),moved:!1};try{this.canvas.setPointerCapture(t.pointerId)}catch{}if(i.kind==="drag"){const a=this.dragPoint(e);i.onStart?.(a),i.onDrag(a)}else i.kind==="crank"?i.onStart?.():i.kind==="lever"&&(i.onStart?.(),i.onPull(0))}angleAroundPivot(t,e,n){t.pivot.getWorldPosition(this.projected),this.projected.project(this.camera);const i=(this.projected.x+1)/2*n.width,r=(1-this.projected.y)/2*n.height;return Math.atan2(e.y-r,e.x-i)}dragPoint(t){const e=this.active?.handle;this.raycaster.setFromCamera(this.ndc,this.camera);const n=this.active?.plane??this.plane;this.raycaster.ray.intersectPlane(n,this.hitPoint)||this.hitPoint.set(0,0,0);const i=e?.liftPx??48;if(i>0){const r=this.camera.position.distanceTo(this.hitPoint),o=Li.degToRad(this.camera.fov*.5),a=2*Math.tan(o)*r/Math.max(1,t.height);this.screenUp.set(0,1,0).applyQuaternion(this.camera.quaternion),this.hitPoint.addScaledVector(this.screenUp,i*a)}return this.hitPoint.clone()}pointerMove(t){if(this.idleTime=0,!this.active||t.pointerId!==this.active.pointerId)return;t.preventDefault();const e=this.toNdc(t),n=new lt(t.clientX-e.left,t.clientY-e.top),i=this.active;n.distanceTo(i.startPx)>6&&(i.moved=!0);const r=i.handle;if(r.kind==="drag")r.onDrag(this.dragPoint(e));else if(r.kind==="crank"){const o=this.angleAroundPivot(r,n,e),a=Y0(i.startAngle,o);i.startAngle=o,r.onSpin(a)}else if(r.kind==="lever"){const o=r.direction??"down",a=o==="down"?n.y-i.startPx.y:o==="up"?i.startPx.y-n.y:n.x-i.startPx.x;r.onPull(fe(a/r.travelPx,0,1))}i.lastPx.copy(n)}pointerUp(t){if(this.idleTime=0,!this.active||t.pointerId!==this.active.pointerId)return;t.preventDefault();const e=this.toNdc(t),n=new lt(t.clientX-e.left,t.clientY-e.top),i=this.active.handle;if(i.kind==="drag"){const r=this.dragPoint(e);if(i.onEnd(r),i.snaps){const o=new lt(n.x,n.y-(i.liftPx??48)),a=this.resolveSnap(r,o,i.snaps(),e);a?a.onSnap():i.onMiss?.()}}else i.kind==="crank"?i.onEnd?.():i.kind==="lever"?i.onRelease():i.kind==="tap"&&i.onTap();this.releaseActive(t.pointerId)}resolveSnap(t,e,n,i){let r=null,o=1/0;for(const a of n){const l=a.world(),c=t.distanceTo(l);this.projected.copy(l).project(this.camera);const h=(this.projected.x+1)/2*i.width,u=(1-this.projected.y)/2*i.height,f=this.projected.z>1?1/0:Math.hypot(e.x-h,e.y-u),g=a.radiusPx??96,_=this.camera.position.distanceTo(l)<6;if(!(c<a.radius||f<g&&_))continue;const p=Math.min(c/Math.max(.01,a.radius),f/g);p<o&&(o=p,r=a)}return r}releaseActive(t){const e=t??this.active?.pointerId;if(e!==void 0)try{this.canvas.hasPointerCapture(e)&&this.canvas.releasePointerCapture(e)}catch{}this.active=null}update(t){this.active||(this.idleTime+=t)}}const ir=class ir{constructor(){E(this,"ctx",null);E(this,"master",null);E(this,"noise",null);E(this,"loops",new Map);E(this,"started",!1);E(this,"suspended",!1)}resume(){if(!this.started){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}this.master=this.ctx.createGain(),this.master.gain.value=.85,this.master.connect(this.ctx.destination),this.noise=this.makeNoiseBuffer(this.ctx),this.started=!0,this.setLoop("ambience",1)}this.ctx&&this.ctx.state!=="running"&&this.ctx.resume(),this.suspended=!1}setSuspended(t){this.ctx&&(this.suspended=t,t?this.ctx.suspend():this.ctx.resume())}makeNoiseBuffer(t){const e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);let r=0,o=0,a=0;for(let l=0;l<e;l++){const c=Math.random()*2-1;r=.99765*r+c*.099046,o=.963*o+c*.2965164,a=.57555*a+c*1.0526913,i[l]=(r+o+a+c*.1848)*.16}return n}ensureLoop(t){if(!this.ctx||!this.master||!this.noise)return null;const e=this.loops.get(t);if(e)return e;const n=this.ctx,i=n.createBufferSource();i.buffer=this.noise,i.loop=!0;const r=n.createBiquadFilter(),o=n.createGain();switch(o.gain.value=0,t){case"ambience":r.type="lowpass",r.frequency.value=620,r.Q.value=.4;break;case"crank":r.type="bandpass",r.frequency.value=220,r.Q.value=2.5;break;case"grain":r.type="bandpass",r.frequency.value=2600,r.Q.value=.9;break;case"motor":r.type="lowpass",r.frequency.value=190,r.Q.value=6;break;case"juice":r.type="bandpass",r.frequency.value=1500,r.Q.value=1.4;break;case"blades":r.type="bandpass",r.frequency.value=900,r.Q.value=3;break;case"conveyor":r.type="lowpass",r.frequency.value=420,r.Q.value=1;break}i.connect(r),r.connect(o),o.connect(this.master),i.start();const a={gain:o,filter:r,target:0};return this.loops.set(t,a),a}setLoop(t,e,n){const i=this.ensureLoop(t);if(!i||!this.ctx)return;const r=this.ctx.currentTime,o=fe(e,0,1)*ir.LOOP_LEVEL[t];i.target=o,i.gain.gain.cancelScheduledValues(r),i.gain.gain.setTargetAtTime(o,r,.06),n!==void 0&&(i.filter.frequency.cancelScheduledValues(r),i.filter.frequency.setTargetAtTime(n,r,.08))}stopAllLoops(t){for(const e of this.loops.keys())e!=="ambience"&&(t?.includes(e)||this.setLoop(e,0))}tone(t,e,n,i="sine",r,o=0){if(!this.ctx||!this.master||this.suspended)return;const a=this.ctx,l=a.currentTime+o,c=a.createOscillator();c.type=i,c.frequency.setValueAtTime(t,l),r!==void 0&&c.frequency.exponentialRampToValueAtTime(Math.max(20,r),l+e);const h=a.createGain();h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(n,l+Math.min(.012,e*.3)),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(this.master),c.start(l),c.stop(l+e+.05)}burst(t,e,n,i,r="bandpass",o=0){if(!this.ctx||!this.master||!this.noise||this.suspended)return;const a=this.ctx,l=a.currentTime+o,c=a.createBufferSource();c.buffer=this.noise,c.playbackRate.value=.8+Math.random()*.4;const h=a.createBiquadFilter();h.type=r,h.frequency.value=t,h.Q.value=e;const u=a.createGain();u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(i,l+.005),u.gain.exponentialRampToValueAtTime(1e-4,l+n),c.connect(h),h.connect(u),u.connect(this.master),c.start(l,Math.random()*1.5),c.stop(l+n+.05)}click(){this.burst(2400,6,.05,.28,"bandpass"),this.tone(180,.06,.12,"square")}lockClack(){this.burst(1100,3,.09,.34),this.tone(120,.12,.18,"triangle",70)}snapPlace(){this.burst(700,1.6,.14,.16),this.tone(320,.14,.09,"sine",220)}paperStick(){this.burst(1800,.9,.2,.13,"lowpass")}labelPrint(){for(let t=0;t<9;t++)this.burst(3e3-t*90,8,.03,.11,"bandpass",t*.035);this.burst(1500,1.2,.16,.12,"bandpass",.34)}receiptPrint(){for(let t=0;t<16;t++)this.burst(2600,7,.028,.075,"bandpass",t*.045)}scanBeep(){this.tone(1180,.09,.16,"square"),this.tone(1770,.07,.06,"sine",1770,.02)}grainTick(){this.burst(3200,1.2,.035,.05)}orangeRoll(){this.burst(320,1.1,.22,.1,"lowpass"),this.tone(96,.2,.05,"triangle",74)}squeeze(){this.burst(520,.8,.3,.09,"bandpass")}bagPuff(){this.burst(900,.7,.26,.1,"lowpass")}chime(){this.tone(523.25,.5,.07,"sine"),this.tone(659.25,.5,.05,"sine",659.25,.07),this.tone(783.99,.6,.045,"sine",783.99,.14)}nudge(){this.tone(440,.16,.035,"sine",560)}dispose(){this.loops.clear(),this.ctx&&this.ctx.close(),this.ctx=null,this.master=null,this.started=!1}};E(ir,"LOOP_LEVEL",{ambience:.045,crank:.09,grain:.2,motor:.14,juice:.15,blades:.11,conveyor:.08});let Zo=ir;class mg{constructor(t){E(this,"tier",2);E(this,"dpr",1.5);E(this,"particleScale",1);E(this,"backgroundDensity",1);E(this,"shadowSize",1024);E(this,"shadowsEnabled",!0);E(this,"smallProps",!0);E(this,"onChange",null);E(this,"samples",[]);E(this,"cooldown",2.5);this.renderer=t;const e=window.devicePixelRatio||1,n=navigator.deviceMemory??4,i=navigator.hardwareConcurrency??4;(n<=3||i<=4)&&this.applyTier(1),this.dpr=Math.min(this.dpr,e)}applyTier(t){t!==this.tier&&(this.tier=t,t===2?(this.dpr=Math.min(1.5,window.devicePixelRatio||1),this.particleScale=1,this.backgroundDensity=1,this.shadowSize=1024,this.shadowsEnabled=!0,this.smallProps=!0):t===1?(this.dpr=Math.min(1.25,window.devicePixelRatio||1),this.particleScale=.6,this.backgroundDensity=.65,this.shadowSize=1024,this.shadowsEnabled=!0,this.smallProps=!0):(this.dpr=1,this.particleScale=.35,this.backgroundDensity=.4,this.shadowSize=512,this.shadowsEnabled=!1,this.smallProps=!1),this.renderer.setPixelRatio(this.dpr),this.renderer.shadowMap.enabled=this.shadowsEnabled,this.onChange?.())}update(t){if(this.cooldown>0){this.cooldown-=t;return}if(this.samples.push(t),this.samples.length<45)return;this.samples.sort((n,i)=>n-i);const e=this.samples[Math.floor(this.samples.length*.8)];this.samples.length=0,e>1/34&&this.tier>0?(this.applyTier(this.tier-1),this.cooldown=4):e<1/56&&this.tier<2&&(this.applyTier(this.tier+1),this.cooldown=8)}particles(t){return Math.max(1,Math.round(t*fe(this.particleScale,.2,1)))}}const gg=s=>s;class Lc{constructor(){E(this,"entries",[])}add(t,e,n={}){this.entries.push({time:0,duration:Math.max(1e-4,t),delay:n.delay??0,ease:n.ease??gg,onUpdate:e,onComplete:n.onComplete,done:!1})}after(t,e){this.add(1e-4,()=>{},{delay:t,onComplete:e})}update(t){for(const e of this.entries){if(e.done)continue;if(e.delay>0){if(e.delay-=t,e.delay>0)continue;e.time=-e.delay}else e.time+=t;const n=Math.min(1,e.time/e.duration);e.onUpdate(e.ease(n)),n>=1&&(e.done=!0,e.onComplete?.())}this.entries.length&&this.entries.every(e=>e.done)?this.entries.length=0:this.entries.length>64&&(this.entries=this.entries.filter(e=>!e.done))}clear(){this.entries.length=0}get busy(){return this.entries.some(t=>!t.done)}}class cr{constructor(t,e){E(this,"group",new xe);E(this,"tween",new Lc);E(this,"onComplete",null);E(this,"replayCount",0);E(this,"handleIds",[]);this.id=t,this.ctx=e,this.group.name=`Station_${t}`}addHandle(t){this.ctx.input.add(t),this.handleIds.includes(t.id)||this.handleIds.push(t.id)}clearHandles(){for(const t of this.handleIds)this.ctx.input.remove(t);this.handleIds.length=0}}class Ln{constructor(t){E(this,"home",new y);E(this,"target",new y);E(this,"smoothing",2e-5);E(this,"clampBox",null);E(this,"held",!1);E(this,"parked",!1);E(this,"tmp",new y);this.object=t,this.home.copy(t.position),this.target.copy(t.position)}setHome(t){this.home.copy(t)}setWorldTarget(t){this.tmp.copy(t),this.object.parent?.worldToLocal(this.tmp),this.clampBox&&this.clampBox.clampPoint(this.tmp,this.tmp),this.target.copy(this.tmp)}setLocalTarget(t){this.target.copy(t)}returnHome(){this.target.copy(this.home)}get worldPosition(){return this.object.getWorldPosition(new y)}update(t){if(this.parked)return;const e=this.object.position,n=this.held?this.smoothing:this.smoothing*12;e.x=ve(e.x,this.target.x,n,t),e.y=ve(e.y,this.target.y,n,t),e.z=ve(e.z,this.target.z,n,t)}get settled(){return this.object.position.distanceToSquared(this.target)<1e-6}}const jr=[{kind:"fusilli",color:15324066,gravity:6.4,spread:.03,rate:46,spin:9,pitch:2400,glyph:"spiral",accent:"#d8b26a",geometry:()=>new jt(.0048,.0048,.024,5,1)},{kind:"rings",color:14130002,gravity:5.4,spread:.055,rate:56,spin:14,pitch:3100,glyph:"ring",accent:"#c8748c",geometry:()=>new Ve(.0085,.0033,4,10)},{kind:"beans",color:12615493,gravity:9.4,spread:.018,rate:74,spin:5,pitch:1700,glyph:"bean",accent:"#8fa257",geometry:()=>{const s=new pn(.0075,6,5);return s.scale(1,.72,.82),s}}],Jr=140,_g=1/235,Gl=.86;class vg extends cr{constructor(e){super("bulk",e);E(this,"step","placeBag");E(this,"grain",jr[0]);E(this,"fill",0);E(this,"spin",0);E(this,"pendingSpin",0);E(this,"spinIdle",0);E(this,"flow",0);E(this,"bagGroup",new xe);E(this,"bagMesh");E(this,"bagContent");E(this,"bagRim");E(this,"bagBody");E(this,"labelMesh");E(this,"labelBody");E(this,"wheel",new xe);E(this,"auger");E(this,"hopperMass");E(this,"scalePlate");E(this,"needle");E(this,"pulleyA");E(this,"pulleyB");E(this,"particles");E(this,"pool",[]);E(this,"spawnAcc",0);E(this,"wobble",0);E(this,"wobbleV",0);E(this,"nextPuff",.22);E(this,"tickAcc",0);E(this,"detail",[]);E(this,"rng",new je(7));E(this,"dummy",new Ee);E(this,"labelStuck",!1);E(this,"printed",!1);E(this,"base",new y(le.bulk,0,Le));E(this,"bagRestLocal",new y(.16,1.095,-.02));E(this,"bagStartLocal",new y(.34,1.075,.34));E(this,"crankHitMesh",null);this.group.position.copy(this.base),this.build()}build(){const e=this.ctx.mat,n=(S,x=!1)=>(this.group.add(S),x&&this.detail.push(S),S),i=new z(ie(1.06,.08,.62,.02),e.steel);i.position.set(0,.96,-.1),i.castShadow=!0,i.receiveShadow=!0,n(i);const r=new z(ie(.74,.92,.16,.03),e.painted);r.position.set(0,1.46,-.36),r.castShadow=!0,n(r);for(const S of[-1,1]){const x=new z(ie(.05,.5,.52,.012),e.wood);x.position.set(S*.58,1.2,-.14),x.castShadow=!0,n(x)}const o=new z(new jt(.24,.115,.42,24,1,!0),e.guard);o.position.set(-.16,1.63,-.06),n(o);const a=new z(new Ve(.24,.012,6,20),e.steel);a.rotation.x=Math.PI/2,a.position.set(-.16,1.84,-.06),n(a,!0);const l=new jt(.225,.108,.4,20);l.translate(0,.2,0),this.hopperMass=new z(l,e.plain(this.grain.color,.85,0)),this.hopperMass.position.set(-.16,1.42,-.06),n(this.hopperMass);const c=new z(ie(.6,.2,.22,.03),e.steelDark);c.position.set(-.02,1.34,-.04),c.castShadow=!0,n(c);const h=new z(new De(.44,.13),e.guard);h.position.set(-.02,1.35,.075),n(h,!0);const u=new jt(.035,.035,.42,8);u.rotateZ(Math.PI/2),this.auger=new z(u,e.steelPolished),this.auger.position.set(-.02,1.35,-.02),n(this.auger,!0);for(let S=0;S<5;S++){const x=new z(new Ve(.05,.008,4,12),e.steelPolished);x.rotation.y=Math.PI/2,x.position.set(-.19+S*.085,0,0),x.scale.set(1,1,.5),this.auger.add(x)}const d=new z(new jt(.05,.05,.14,12),e.steel);d.position.set(.16,1.3,-.02),n(d);const f=new z(new jt(.05,.072,.05,12,1,!0),e.steel);f.position.set(.16,1.235,-.02),n(f,!0);const g=new z(new te(.3,.06,.1),e.steelDark);g.position.set(.05,1.33,-.02),n(g),this.scalePlate=new xe,this.scalePlate.position.set(.16,.955,-.02);const _=new z(ie(.28,.018,.26,.008),e.steelPolished);_.receiveShadow=!0,this.scalePlate.add(_),n(this.scalePlate);const m=new z(new jt(.062,.062,.02,20),e.steelDark);m.rotation.x=Math.PI/2,m.position.set(.16,1.06,-.22),n(m,!0);const p=new z(new oi(.055,20),e.plain(15920354,.7));p.position.set(.16,1.06,-.208),n(p,!0);const A=new te(.006,.05,.004);A.translate(0,.023,0),this.needle=new z(A,e.rose),this.needle.position.set(.16,1.06,-.202),n(this.needle,!0);for(const S of[-1,1]){const x=new z(new Ve(.016,.005,4,10,Math.PI),e.steel);x.position.set(.16+S*.082,1.2,-.02),x.rotation.z=Math.PI,n(x,!0)}this.buildCrank(),this.buildPrinter(),this.buildBag(),this.buildParticles()}buildCrank(){const e=this.ctx.mat;this.wheel.position.set(-.4,1.19,.26),this.group.add(this.wheel);const n=new z(new Ve(.135,.017,8,26),e.steel);n.castShadow=!0,this.wheel.add(n);const i=new z(new jt(.032,.032,.05,14),e.steelDark);i.rotation.x=Math.PI/2,this.wheel.add(i);for(let u=0;u<3;u++){const d=new z(new te(.26,.018,.018),e.steel);d.rotation.z=u/3*Math.PI,this.wheel.add(d)}const r=new z(new jt(.038,.042,.09,14),e.rose);r.rotation.x=Math.PI/2,r.position.set(0,.135,.055),r.castShadow=!0,this.wheel.add(r);const o=new z(new pn(.04,12,9),e.roseSoft);o.position.set(0,.135,.1),this.wheel.add(o);const a=new z(new jt(.018,.018,.34,10),e.steelDark);a.rotation.x=Math.PI/2,a.position.set(-.4,1.19,.09),this.group.add(a),this.pulleyA=new z(new Ve(.045,.011,4,14),e.steelDark),this.pulleyA.position.set(-.4,1.19,-.06),this.group.add(this.pulleyA),this.pulleyB=new z(new Ve(.058,.011,4,14),e.steelDark),this.pulleyB.position.set(-.24,1.35,-.06),this.group.add(this.pulleyB);const l=-.24- -.4,c=1.35-1.19,h=new z(new te(Math.hypot(l,c),.1,.01),e.rubber);h.position.set(-.32,1.27,-.06),h.rotation.z=Math.atan2(c,l),this.group.add(h),this.detail.push(h,this.pulleyA,this.pulleyB,a)}buildPrinter(){const e=this.ctx.mat,n=new z(ie(.2,.16,.18,.02),e.steelDark);n.position.set(.42,1.02,-.16),n.castShadow=!0,this.group.add(n);const i=new z(new te(.13,.012,.02),e.rubber);i.position.set(.42,1.03,-.07),this.group.add(i);const r=new z(new pn(.008,8,6),e.lampGlow);r.position.set(.5,1.08,-.07),this.group.add(r),this.detail.push(i,r)}makeBagGeometry(){const r=new te(.15,.24,.1,3,5,3),o=r.attributes.position,a=new Float32Array(o.count*3);for(let l=0;l<o.count;l++){const h=(o.getY(l)+.24/2)/.24,u=Math.sin(Math.pow(h,.75)*Math.PI)*(1-h*.45);a[l*3]=o.getX(l)*u*.6,a[l*3+1]=0,a[l*3+2]=o.getZ(l)*u*1.05}return r.morphAttributes.position=[new _e(a,3)],r.morphTargetsRelative=!0,r}buildBag(){const e=this.ctx.mat;this.bagMesh=new z(this.makeBagGeometry(),e.paperBag),this.bagMesh.castShadow=!0,this.bagMesh.receiveShadow=!0,this.bagMesh.morphTargetInfluences=[0],this.bagGroup.add(this.bagMesh);const n=new te(.128,.2,.082);n.translate(0,.1,0),this.bagContent=new z(n,e.plain(this.grain.color,.9,0)),this.bagContent.position.y=-.11,this.bagContent.scale.y=.001,this.bagGroup.add(this.bagContent),this.bagRim=new z(new Ve(.085,.008,4,14),e.paperWhite),this.bagRim.rotation.x=Math.PI/2,this.bagRim.scale.set(.95,.68,1),this.bagRim.position.y=.118,this.bagGroup.add(this.bagRim),this.bagGroup.position.copy(this.bagStartLocal),this.group.add(this.bagGroup);const i=Ze(.3,.34,.28,this.ctx.mat.hitVolume);i.position.y=.02,this.bagGroup.add(i),this.bagBody=new Ln(this.bagGroup),this.bagBody.clampBox=new Xe(new y(-.7,.8,-.35),new y(.9,1.55,1.5));const r=new De(.1,.115);this.labelMesh=new z(r,e.label({accent:this.grain.accent,glyph:this.grain.glyph},this.grain.kind)),this.labelMesh.position.set(.42,1.032,-.115),this.labelMesh.rotation.x=-Math.PI/2,this.labelMesh.visible=!1,this.group.add(this.labelMesh);const o=Ze(.22,.06,.22,this.ctx.mat.hitVolume);o.rotation.x=Math.PI/2,this.labelMesh.add(o),this.labelBody=new Ln(this.labelMesh),this.labelBody.clampBox=new Xe(new y(-.4,1,-.3),new y(.9,1.6,.7))}buildParticles(){const e=this.grain.geometry();this.particles=new ps(e,this.ctx.mat.plain(this.grain.color,.8,0),Jr),this.particles.instanceMatrix.setUsage(ra),this.particles.frustumCulled=!1,this.particles.count=0,this.group.add(this.particles);for(let n=0;n<Jr;n++)this.pool.push({alive:!1,p:new y,v:new y,rot:new cn,spin:new y})}get establishShot(){return{name:"bulk_establish",target:new y(this.base.x+.12,1.35,this.base.z+.15),radius:1.45,radiusX:2.3,yawDeg:-20,pitchDeg:-2,focal:37,motion:{truck:.32,truckPeriod:15,arcDeg:3.5,arcPeriod:18},portrait:{radius:2.1,radiusX:1.08,focal:35,compose:{y:-.14}}}}get workShot(){return{name:"bulk_work",target:new y(this.base.x+.04,1.3,this.base.z+.02),radius:.52,radiusX:.78,yawDeg:-14,pitchDeg:-4.5,focal:55,motion:{arcDeg:8,arcPeriod:15,truck:.2,truckPeriod:11,dollyFrom:1.2,dollyTo:.86,dollyTime:15},portrait:{target:new y(this.base.x-.02,1.34,this.base.z+.06),radius:1.02,radiusX:.72,focal:44,pitchDeg:-5,motion:{arcDeg:5,arcPeriod:16,truck:.1,dollyFrom:1.14,dollyTo:.92,dollyTime:15}}}}get labelShot(){return{name:"bulk_label",target:new y(this.base.x+.3,1.1,this.base.z+0),radius:.32,radiusX:.46,yawDeg:-8,pitchDeg:4,focal:68,motion:{arcDeg:6,arcPeriod:12,truck:.09,dollyFrom:1.1,dollyTo:.92,dollyTime:10},portrait:{radius:.5,radiusX:.32,focal:58}}}get cartShot(){return{name:"bulk_cart",target:new y(this.base.x+.5,1.05,this.base.z+.85),radius:.86,radiusX:1.22,yawDeg:-12,pitchDeg:7,focal:42,motion:{arcDeg:6,arcPeriod:14,truck:.16,dollyFrom:1.12,dollyTo:.94,dollyTime:10},portrait:{radius:1.2,radiusX:.78,focal:38}}}enter(){this.reset(),this.ctx.camera.goTo(this.establishShot,1.4),this.tween.after(1.5,()=>{this.ctx.camera.goTo(this.workShot,1.5),this.armBag()})}reset(){this.tween.clear(),this.clearHandles(),this.grain=jr[this.replayCount%jr.length],this.fill=0,this.spin=0,this.pendingSpin=0,this.flow=0,this.wobble=0,this.wobbleV=0,this.nextPuff=.22,this.printed=!1,this.labelStuck=!1,this.step="placeBag",this.hopperMass.material.color.setHex(this.grain.color),this.bagContent.material.color.setHex(this.grain.color),this.hopperMass.scale.y=1,this.particles.geometry.dispose(),this.particles.geometry=this.grain.geometry(),this.particles.material.color.setHex(this.grain.color),this.particles.count=0;for(const e of this.pool)e.alive=!1;this.labelMesh.material=this.ctx.mat.label({accent:this.grain.accent,glyph:this.grain.glyph},this.grain.kind),this.group.attach(this.bagGroup),this.bagGroup.position.copy(this.bagStartLocal),this.bagGroup.rotation.set(0,0,0),this.bagGroup.scale.set(1,1,1),this.bagBody.parked=!1,this.bagBody.setHome(this.bagStartLocal),this.bagBody.setLocalTarget(this.bagStartLocal),this.bagMesh.morphTargetInfluences=[0],this.bagContent.scale.set(1,.001,1),this.bagRim.scale.set(.95,.68,1),this.group.attach(this.labelMesh),this.labelMesh.visible=!1,this.labelMesh.position.set(.42,1.032,-.115),this.labelMesh.rotation.set(-Math.PI/2,0,0),this.labelMesh.scale.set(1,1,1),this.labelBody.parked=!1,this.labelBody.setHome(this.labelMesh.position),this.labelBody.setLocalTarget(this.labelMesh.position)}exit(){this.clearHandles(),this.ctx.audio.setLoop("grain",0),this.ctx.audio.setLoop("crank",0)}setDetail(e){for(const n of this.detail)n.visible=e&&this.ctx.quality.tier>0;this.particles.visible=e}armBag(){const e={world:()=>this.group.localToWorld(this.bagRestLocal.clone()),radius:.5,onSnap:()=>{this.bagBody.setLocalTarget(this.bagRestLocal),this.bagBody.setHome(this.bagRestLocal),this.ctx.audio.snapPlace(),this.ctx.input.remove("bulk_bag"),this.step="crank",this.armCrank()}};this.addHandle({kind:"drag",id:"bulk_bag",object:this.bagGroup,liftPx:44,onStart:()=>{this.bagBody.held=!0},onDrag:n=>this.bagBody.setWorldTarget(n),onEnd:n=>{this.bagBody.held=!1,this.bagBody.setWorldTarget(n)},snaps:()=>[e],onMiss:()=>this.bagBody.returnHome()})}armCrank(){this.addHandle({kind:"crank",id:"bulk_crank",object:this.crankHit(),pivot:this.wheel,onSpin:e=>{this.pendingSpin+=e,this.spinIdle=0},onEnd:()=>{this.spinIdle=1}})}crankHit(){return this.crankHitMesh||(this.crankHitMesh=Ze(.46,.46,.28,this.ctx.mat.hitVolume),this.crankHitMesh.position.set(0,0,.04),this.wheel.add(this.crankHitMesh)),this.crankHitMesh}printLabel(){this.printed||(this.printed=!0,this.ctx.input.remove("bulk_crank"),this.ctx.audio.setLoop("grain",0),this.ctx.audio.setLoop("crank",0),this.ctx.camera.goTo(this.labelShot,1.3),this.tween.after(.75,()=>{this.labelMesh.visible=!0,this.ctx.audio.labelPrint();const e=new y(.42,1.032,-.115),n=new y(.42,1.052,0);this.tween.add(.55,i=>{this.labelMesh.position.lerpVectors(e,n,nr(i)),this.labelMesh.rotation.x=-Math.PI/2+i*.35},{onComplete:()=>{this.labelBody.setHome(this.labelMesh.position.clone()),this.labelBody.setLocalTarget(this.labelMesh.position.clone()),this.step="label",this.armLabel()}})}))}armLabel(){const e={world:()=>this.bagGroup.localToWorld(new y(0,.01,.062)),radius:.42,onSnap:()=>{this.ctx.input.remove("bulk_label"),this.labelStuck=!0,this.bagGroup.attach(this.labelMesh);const n=new y(0,.01,.062),i=this.labelMesh.position.clone(),r=this.labelMesh.quaternion.clone(),o=new ci;this.tween.add(.28,a=>{const l=an(a);this.labelMesh.position.lerpVectors(i,n,l),this.labelMesh.quaternion.slerpQuaternions(r,o,l);const c=1+Math.sin(a*Math.PI)*.18;this.labelMesh.scale.set(c,c,1)},{onComplete:()=>{this.labelMesh.scale.set(1,1,1),this.labelBody.parked=!0,this.ctx.audio.paperStick(),this.step="toCart",this.ctx.camera.goTo(this.cartShot,1.2),this.armToCart()}})}};this.addHandle({kind:"drag",id:"bulk_label",object:this.labelMesh,liftPx:56,onStart:()=>{this.labelBody.held=!0,this.ctx.audio.click()},onDrag:n=>{this.labelBody.setWorldTarget(n),this.labelMesh.rotation.x=ve(this.labelMesh.rotation.x,-.25,.001,1/60)},onEnd:n=>{this.labelBody.held=!1,this.labelBody.setWorldTarget(n)},snaps:()=>[e],onMiss:()=>this.labelBody.returnHome()})}armToCart(){const e={world:()=>this.ctx.cart.basket.localToWorld(this.ctx.cart.slotLocal(0)),radius:.85,radiusPx:150,onSnap:()=>{this.ctx.input.remove("bulk_toCart");const n={id:"bulk",root:this.bagGroup,state:this.itemState(),drop:.12,scanned:!1,bagged:!1},i=this.ctx.cart.receive(n,0);this.bagBody.setHome(i),this.bagBody.setLocalTarget(i),this.ctx.items.set(n),this.ctx.audio.snapPlace(),this.ctx.audio.chime(),this.step="done",this.tween.after(.5,()=>{this.bagBody.object.position.copy(this.bagBody.target),this.bagBody.parked=!0,this.onComplete?.()})}};this.addHandle({kind:"drag",id:"bulk_toCart",object:this.bagGroup,liftPx:44,onStart:()=>{this.bagBody.held=!0},onDrag:n=>this.bagBody.setWorldTarget(n),onEnd:n=>{this.bagBody.held=!1,this.bagBody.setWorldTarget(n)},snaps:()=>[e],onMiss:()=>this.bagBody.returnHome()})}itemState(){return{kind:"bulk",fill:this.fill,grain:this.grain.kind,labelled:this.labelStuck}}hint(){const e=(n,i,r)=>{const o=n.position[i];this.tween.add(.55,a=>{n.position[i]=o+Math.sin(a*Math.PI)*r})};if(this.ctx.audio.nudge(),this.step==="placeBag"){const n=this.bagBody.target.y;this.tween.add(.6,i=>{this.bagBody.setLocalTarget(new y(this.bagBody.target.x,n+Math.sin(i*Math.PI)*.012,this.bagBody.target.z))})}else if(this.step==="crank"){const n=this.wheel.rotation.z;this.tween.add(.7,i=>{this.wheel.rotation.z=n-Math.sin(i*Math.PI)*.45})}else if(this.step==="label")e(this.labelMesh,"z",.012);else if(this.step==="toCart"){const n=this.bagBody.target.clone();this.tween.add(.7,i=>{const r=Math.sin(i*Math.PI)*.03;this.bagBody.setLocalTarget(new y(n.x+r,n.y+r*.4,n.z+r))})}}update(e){this.tween.update(e),this.bagBody.update(e),this.labelBody.update(e);const n=this.pendingSpin/Math.max(e,1e-4);this.pendingSpin=0,this.spinIdle+=e,Math.abs(n)>.01&&(this.spin=ve(this.spin,n,1e-4,e)),this.spinIdle>.09&&(this.spin=ve(this.spin,0,1e-6,e)),this.wheel.rotation.z-=this.spin*e,this.auger.rotation.x-=this.spin*e*3.2,this.pulleyA.rotation.z-=this.spin*e,this.pulleyB.rotation.z-=this.spin*e*.8;const i=this.step==="crank"&&this.fill<Gl;if(this.flow=i?fe(Math.abs(this.spin)/5.5,0,1):0,this.flow>.04){for(this.spawnAcc+=this.flow*this.grain.rate*e;this.spawnAcc>=1;)this.spawnAcc-=1,this.spawn();this.ctx.audio.setLoop("grain",this.flow,this.grain.pitch),this.ctx.audio.setLoop("crank",Math.min(1,this.flow*.9),180+this.flow*120)}else this.ctx.audio.setLoop("grain",0),this.ctx.audio.setLoop("crank",0),this.spawnAcc=0;this.stepParticles(e),this.applyFill(e),this.step==="crank"&&this.fill>=Gl&&!this.printed&&(this.pool.some(o=>o.alive)||this.printLabel()),this.tickAcc+=e}spawn(){const e=this.pool.find(r=>!r.alive);if(!e)return;e.alive=!0;const n=this.rng.range(0,Math.PI*2),i=this.rng.range(0,.032);e.p.set(.16+Math.cos(n)*i,1.215,-.02+Math.sin(n)*i),e.v.set(this.rng.range(-1,1)*this.grain.spread,-this.rng.range(.05,.2),this.rng.range(-1,1)*this.grain.spread),e.rot.set(this.rng.range(0,6.28),this.rng.range(0,6.28),this.rng.range(0,6.28)),e.spin.set(this.rng.range(-1,1)*this.grain.spin,this.rng.range(-1,1)*this.grain.spin,this.rng.range(-1,1)*this.grain.spin)}stepParticles(e){const n=.995+this.fill*.185;let i=0,r=0;for(const a of this.pool){if(!a.alive)continue;a.v.y-=this.grain.gravity*e,a.p.addScaledVector(a.v,e),a.rot.x+=a.spin.x*e,a.rot.y+=a.spin.y*e,a.rot.z+=a.spin.z*e;const l=Math.abs(a.p.x-.16)<.085&&Math.abs(a.p.z+.02)<.06;if(a.p.y<=n&&l){a.alive=!1,r++;continue}if(a.p.y<.9){a.alive=!1;continue}this.dummy.position.copy(a.p),this.dummy.rotation.copy(a.rot),this.dummy.updateMatrix(),this.particles.setMatrixAt(i,this.dummy.matrix),i++}const o=this.ctx.quality.particles(Jr);this.particles.count=Math.min(i,o),this.particles.instanceMatrix.needsUpdate=!0,r&&(this.fill=fe(this.fill+r*_g,0,1),this.wobbleV-=r*.014,this.tickAcc>.07&&(this.tickAcc=0,this.ctx.audio.grainTick()),this.fill>=this.nextPuff&&(this.nextPuff+=.22,this.ctx.audio.bagPuff()))}applyFill(e){this.bagMesh.morphTargetInfluences&&(this.bagMesh.morphTargetInfluences[0]=ve(this.bagMesh.morphTargetInfluences[0],this.fill,.002,e)),this.bagContent.scale.y=ve(this.bagContent.scale.y,Math.max(.001,this.fill*.95),.002,e);const n=1+this.fill*.32;this.bagContent.scale.x=ve(this.bagContent.scale.x,n,.002,e),this.bagContent.scale.z=ve(this.bagContent.scale.z,n,.002,e),this.bagRim.scale.x=ve(this.bagRim.scale.x,.95+this.fill*.2,.002,e),this.hopperMass.scale.y=ve(this.hopperMass.scale.y,1-this.fill*.55,.01,e),this.wobbleV+=-this.wobble*220*e,this.wobbleV*=Math.exp(-6*e),this.wobble+=this.wobbleV*e,this.scalePlate.position.y=.955-this.fill*.004+this.wobble,this.needle.rotation.z=-(this.fill*2.3+this.wobble*9)}restart(){this.replayCount++;const e=this.ctx.items.get("bulk");e&&(e.root.parent?.remove(e.root),this.ctx.items.delete("bulk")),this.group.add(this.bagGroup),this.enter()}get currentStep(){return this.step}}const Xs=[{count:3,radius:.044,gap:.115,foamBubble:.011,foamHeight:.016,wobbleHz:2.4,rollSpeed:1},{count:4,radius:.035,gap:.086,foamBubble:.006,foamHeight:.011,wobbleHz:3.6,rollSpeed:1.35},{count:2,radius:.055,gap:.14,foamBubble:.016,foamHeight:.023,wobbleHz:1.7,rollSpeed:.78}];class xg extends cr{constructor(e){super("juice",e);E(this,"step","placeBottle");E(this,"variant",Xs[0]);E(this,"bottleGroup",new xe);E(this,"bottleBody");E(this,"liquid");E(this,"foam");E(this,"bubbles");E(this,"cap");E(this,"capGroup",new xe);E(this,"lever",new xe);E(this,"leverPull",0);E(this,"leverHeld",!1);E(this,"railCurve");E(this,"oranges",[]);E(this,"crateOranges",[]);E(this,"crateBodies",[]);E(this,"placedCount",0);E(this,"pressGroup",new xe);E(this,"cupLeft");E(this,"cupRight");E(this,"blade");E(this,"halfL");E(this,"halfR");E(this,"pressedOrange",null);E(this,"cycleT",-1);E(this,"cycleOrange",null);E(this,"stream");E(this,"level",0);E(this,"levelTarget",0);E(this,"perOrange",.3);E(this,"capTurn",0);E(this,"detail",[]);E(this,"dummy",new Ee);E(this,"wobblePhase",0);E(this,"capArmed",!1);E(this,"rollSound",0);E(this,"base",new y(le.juice,0,Le));E(this,"bottleRest",new y(.12,.975,0));E(this,"bottleStart",new y(.4,.975,.36));this.group.position.copy(this.base),this.build()}build(){const e=this.ctx.mat,n=S=>(this.detail.push(S),S),i=new z(ie(1,.09,.6,.02),e.steel);i.position.set(0,.965,-.08),i.castShadow=!0,i.receiveShadow=!0,this.group.add(i);const r=new z(ie(.52,.86,.44,.03),e.painted);r.position.set(0,1.44,-.24),r.castShadow=!0,this.group.add(r);const o=new z(ie(.98,.5,.08,.02),e.paintedWarm);o.position.set(0,1.75,-.4),this.group.add(o);for(const S of[-1,1]){const x=new z(ie(.05,.46,.56,.012),e.wood);x.position.set(S*.5,1.22,-.1),x.castShadow=!0,this.group.add(x)}this.railCurve=new Ho([new y(-.54,1.88,-.06),new y(-.38,1.8,-.06),new y(-.2,1.71,-.06),new y(-.07,1.63,-.06),new y(0,1.56,-.06)]);for(const S of[-1,1]){const x=this.railCurve.getPoints(24).map(C=>C.clone().add(new y(0,-.03,S*.05))),P=new z(new fa(new Ho(x),24,.009,5,!1),e.steel);P.castShadow=!0,this.group.add(P)}for(let S=0;S<8;S++){const x=this.railCurve.getPointAt(S/8),P=this.railCurve.getPointAt((S+1)/8),C=new z(new te(x.distanceTo(P)*1.06,.012,.088),e.steelPolished);C.position.copy(x).lerp(P,.5).add(new y(0,-.036,0)),C.rotation.z=Math.atan2(P.y-x.y,P.x-x.x),C.receiveShadow=!0,this.group.add(C)}for(let S=0;S<=4;S++){const x=this.railCurve.getPointAt(S/4),P=new z(new jt(.009,.009,.16,6),e.steelDark);P.position.set(x.x,x.y-.12,x.z),this.group.add(n(P))}const a=new z(ie(.52,.36,.42,.03),e.guard);a.position.set(0,1.47,-.06),this.group.add(a);const l=new z(new Ve(.25,.008,4,4),e.steelDark);l.rotation.z=Math.PI/4,l.position.set(0,1.47,.152),l.scale.set(1.02,.86,1),this.group.add(n(l)),this.pressGroup.position.set(0,1.44,-.06),this.group.add(this.pressGroup),this.blade=new z(new te(.012,.14,.14),e.steelPolished),this.blade.position.set(0,.16,0),this.pressGroup.add(this.blade);const c=new pn(.06,14,10,0,Math.PI*2,0,Math.PI/2);c.rotateZ(Math.PI/2),this.cupLeft=new z(c,e.steelPolished),this.cupLeft.position.set(-.14,0,0),this.cupRight=new z(c.clone(),e.steelPolished),this.cupRight.position.set(.14,0,0),this.cupRight.rotation.z=Math.PI,this.pressGroup.add(this.cupLeft,this.cupRight);const h=new pn(.044,14,10,0,Math.PI*2,0,Math.PI/2);h.rotateZ(-Math.PI/2),this.halfL=new z(h,e.peel),this.halfR=new z(h.clone(),e.peel),this.halfR.rotation.z=Math.PI;const u=new oi(.042,14);u.rotateY(Math.PI/2);const d=new z(u,e.pulp);d.position.x=.001,this.halfL.add(d);const f=new z(u.clone(),e.pulp);f.position.x=.001,this.halfR.add(f),this.halfL.visible=!1,this.halfR.visible=!1,this.pressGroup.add(this.halfL,this.halfR);const g=new z(new jt(.018,.014,.1,12),e.steel);g.position.set(.12,1.24,0),this.group.add(g);const _=new z(new te(.16,.05,.07),e.steel);_.position.set(.06,1.27,0),this.group.add(_);const m=new jt(.006,.0085,1,8,1,!0);m.translate(0,-.5,0),this.stream=new z(m,e.juice),this.stream.position.set(.12,1.2,0),this.stream.visible=!1,this.group.add(this.stream);const p=new z(ie(.36,.02,.3,.006),e.steelPolished);p.position.set(.12,.985,0),p.receiveShadow=!0,this.group.add(p);const A=new z(new te(.3,.006,.24),e.steelDark);A.position.set(.12,.998,0),this.group.add(n(A)),this.buildBottle(),this.buildLever(),this.buildCrate()}buildBottle(){const e=this.ctx.mat,n=new z(new jt(.048,.048,.18,20,1,!0),e.glassBottle);n.position.y=.09;const i=new z(new oi(.048,20),e.glassBottle);i.rotation.x=-Math.PI/2;const r=new z(new jt(.023,.048,.05,20,1,!0),e.glassBottle);r.position.y=.205;const o=new z(new jt(.023,.023,.035,16,1,!0),e.glassBottle);o.position.y=.247,this.bottleGroup.add(n,i,r,o);const a=new jt(.045,.045,.19,20);a.translate(0,.095,0),this.liquid=new z(a,e.juice),this.liquid.position.y=.006,this.liquid.scale.y=.001,this.bottleGroup.add(this.liquid),this.foam=new z(new jt(.045,.045,.012,20),e.foam),this.foam.visible=!1,this.bottleGroup.add(this.foam),this.bubbles=new ps(new pn(1,6,5),e.foam,26),this.bubbles.instanceMatrix.setUsage(ra),this.bubbles.count=0,this.bubbles.frustumCulled=!1,this.bottleGroup.add(this.bubbles),this.cap=new z(new jt(.029,.029,.03,16),e.rose);for(let c=0;c<12;c++){const h=new z(new te(.004,.028,.006),e.roseSoft),u=c/12*Math.PI*2;h.position.set(Math.cos(u)*.028,0,Math.sin(u)*.028),h.rotation.y=-u,this.cap.add(h)}this.capGroup.add(this.cap),this.capGroup.position.y=.33,this.capGroup.visible=!1,this.bottleGroup.add(this.capGroup),this.bottleGroup.position.copy(this.bottleStart),this.group.add(this.bottleGroup);const l=Ze(.3,.36,.3,e.hitVolume);l.position.y=.15,this.bottleGroup.add(l),this.bottleBody=new Ln(this.bottleGroup),this.bottleBody.clampBox=new Xe(new y(-.7,.8,-.35),new y(1,1.45,1.5))}buildLever(){const e=this.ctx.mat;this.lever.position.set(.44,1.22,0),this.group.add(this.lever);const n=new z(ie(.05,.34,.05,.014),e.steelDark);n.position.set(0,.15,.08),n.rotation.x=-.35,n.castShadow=!0,this.lever.add(n);const i=new z(new pn(.062,14,10),e.roseSoft);i.position.set(0,.3,.19),i.castShadow=!0,this.lever.add(i);const r=new z(new jt(.035,.035,.07,12),e.steel);r.rotation.z=Math.PI/2,this.group.add(r),r.position.copy(this.lever.position);const o=Ze(.28,.34,.3,e.hitVolume);o.position.set(0,.24,.14),this.lever.add(o)}buildCrate(){const e=this.ctx.mat,n=new xe;n.position.set(-.4,.965,.34);const i=(r,o,a,l,c,h)=>{const u=new z(new te(r,o,a),e.woodDark);u.position.set(l,c,h),u.castShadow=!0,n.add(u)};i(.32,.015,.26,0,.008,0),i(.32,.09,.014,0,.05,-.123),i(.32,.09,.014,0,.05,.123),i(.014,.09,.26,-.153,.05,0),i(.014,.09,.26,.153,.05,0),this.group.add(n)}get establishShot(){return{name:"juice_establish",target:new y(this.base.x+.12,1.35,this.base.z+.15),radius:1.45,radiusX:2.3,yawDeg:-17,pitchDeg:-2,focal:38,motion:{truck:.34,truckPeriod:15,arcDeg:4,arcPeriod:18},portrait:{radius:2.1,radiusX:1.08,focal:35,compose:{y:-.14}}}}get workShot(){return{name:"juice_work",target:new y(this.base.x-.02,1.42,this.base.z-.02),radius:.62,radiusX:.86,yawDeg:-12,pitchDeg:-5.5,focal:52,motion:{arcDeg:9,arcPeriod:16,truck:.22,truckPeriod:12,dollyFrom:1.22,dollyTo:.88,dollyTime:18},portrait:{target:new y(this.base.x-.02,1.46,this.base.z+.02),radius:1.05,radiusX:.76,focal:42,pitchDeg:-7,motion:{arcDeg:5,arcPeriod:17,truck:.1,dollyFrom:1.16,dollyTo:.92,dollyTime:18}}}}get bottleShot(){return{name:"juice_bottle",target:new y(this.base.x+.12,1.09,this.base.z+0),radius:.24,radiusX:.32,yawDeg:-9,pitchDeg:2,focal:70,motion:{arcDeg:7,arcPeriod:12,truck:.07,dollyFrom:1.12,dollyTo:.9,dollyTime:11},portrait:{radius:.4,radiusX:.25,focal:58}}}get cartShot(){return{name:"juice_cart",target:new y(this.base.x+.5,1.05,this.base.z+.85),radius:.86,radiusX:1.22,yawDeg:-9,pitchDeg:7,focal:42,motion:{arcDeg:6,arcPeriod:14,truck:.16,dollyFrom:1.12,dollyTo:.94,dollyTime:10},portrait:{radius:1.2,radiusX:.78,focal:38}}}enter(){this.reset(),this.ctx.camera.goTo(this.establishShot,1.4),this.tween.after(1.5,()=>{this.ctx.camera.goTo(this.workShot,1.5),this.armBottle()})}reset(){this.tween.clear(),this.clearHandles(),this.variant=Xs[this.replayCount%Xs.length],this.level=0,this.levelTarget=0,this.placedCount=0,this.capTurn=0,this.capArmed=!1,this.cycleT=-1,this.cycleOrange=null,this.leverPull=0,this.leverHeld=!1,this.step="placeBottle",this.perOrange=.9/this.variant.count,this.group.attach(this.bottleGroup),this.bottleGroup.position.copy(this.bottleStart),this.bottleGroup.rotation.set(0,0,0),this.bottleBody.parked=!1,this.bottleBody.setHome(this.bottleStart),this.bottleBody.setLocalTarget(this.bottleStart),this.liquid.scale.set(1,.001,1),this.foam.visible=!1,this.bubbles.count=0,this.capGroup.visible=!1,this.capGroup.position.y=.33,this.capGroup.rotation.y=0,this.stream.visible=!1,this.halfL.visible=!1,this.halfR.visible=!1;for(const n of this.oranges)n.mesh.parent?.remove(n.mesh);this.oranges.length=0;for(const n of this.crateOranges){n.parent?.remove(n),n.geometry.dispose();for(const i of n.children)i.geometry?.dispose()}this.crateOranges.length=0,this.crateBodies.length=0,this.pressedOrange&&(this.pressedOrange.parent?.remove(this.pressedOrange),this.pressedOrange=null);const e=this.variant.radius;this.halfL.scale.setScalar(e/.044),this.halfR.scale.setScalar(e/.044);for(let n=0;n<this.variant.count;n++){const i=new z(new pn(e,16,12),this.ctx.mat.peel);i.castShadow=!0;const r=new z(new jt(e*.09,e*.12,e*.2,6),this.ctx.mat.plain(7109178,.9));r.position.y=e*.97,i.add(r);const o=n%3/3;i.material.userData.shared=!0,i.position.set(-.4+(n-(this.variant.count-1)/2)*(e*2.05),.965+.015+e,.34+(n%2===0?-.03:.03)+o*.01),this.group.add(i),this.crateOranges.push(i);const a=Ze(e*4.2,e*4.2,e*4.2,this.ctx.mat.hitVolume);i.add(a),this.crateBodies.push(new Ln(i))}}exit(){this.clearHandles(),this.ctx.audio.setLoop("motor",0),this.ctx.audio.setLoop("juice",0),this.ctx.audio.setLoop("conveyor",0)}setDetail(e){for(const n of this.detail)n.visible=e&&this.ctx.quality.tier>0}armBottle(){const e={world:()=>this.group.localToWorld(this.bottleRest.clone()),radius:.5,onSnap:()=>{this.bottleBody.setLocalTarget(this.bottleRest),this.bottleBody.setHome(this.bottleRest),this.ctx.audio.snapPlace(),this.ctx.input.remove("juice_bottle"),this.step="load",this.armOranges()}};this.addHandle({kind:"drag",id:"juice_bottle",object:this.bottleGroup,liftPx:46,onStart:()=>{this.bottleBody.held=!0},onDrag:n=>this.bottleBody.setWorldTarget(n),onEnd:n=>{this.bottleBody.held=!1,this.bottleBody.setWorldTarget(n)},snaps:()=>[e],onMiss:()=>this.bottleBody.returnHome()})}armOranges(){const e=this.placedCount;if(e>=this.crateOranges.length){this.step="press",this.armLever();return}const n=this.crateOranges[e],i=this.crateBodies[e],r=`juice_orange${e}`,o={world:()=>this.group.localToWorld(this.railCurve.getPointAt(.03).clone()),radius:.5,onSnap:()=>{this.ctx.input.remove(r);const a={mesh:n,s:.02,v:0,placed:!0};this.oranges.push(a),this.placedCount++,this.ctx.audio.orangeRoll(),this.armOranges()}};this.addHandle({kind:"drag",id:r,object:n,liftPx:52,onStart:()=>{i.held=!0},onDrag:a=>i.setWorldTarget(a),onEnd:a=>{i.held=!1,i.setWorldTarget(a)},snaps:()=>[o],onMiss:()=>i.returnHome()})}armLever(){this.addHandle({kind:"lever",id:"juice_lever",object:this.lever,travelPx:120,direction:"down",onStart:()=>{this.leverHeld=!0},onPull:e=>{this.leverPull=e},onRelease:()=>{this.leverHeld=!1,this.leverPull=0}})}armCap(){this.capArmed||(this.capArmed=!0,this.ctx.input.remove("juice_lever"),this.step="cap",this.ctx.camera.goTo(this.bottleShot,1.2),this.capGroup.visible=!0,this.capGroup.position.y=.42,this.tween.add(.5,e=>{this.capGroup.position.y=se(.42,.278,an(e))},{delay:.6,onComplete:()=>{this.ctx.audio.click();const e=Ze(.16,.14,.16,this.ctx.mat.hitVolume);this.capGroup.add(e),this.addHandle({kind:"crank",id:"juice_cap",object:e,pivot:this.capGroup,onSpin:n=>{this.capTurn+=Math.abs(n),this.capGroup.rotation.y-=n,this.capGroup.position.y=.278-Math.min(.012,this.capTurn*.0022),this.capTurn>=Math.PI*1.8&&this.finishCap()}})}}))}finishCap(){this.step==="cap"&&(this.ctx.input.remove("juice_cap"),this.ctx.audio.lockClack(),this.capGroup.position.y=.266,this.step="toCart",this.ctx.camera.goTo(this.cartShot,1.2),this.armToCart())}armToCart(){const e={world:()=>this.ctx.cart.basket.localToWorld(this.ctx.cart.slotLocal(1)),radius:.85,radiusPx:150,onSnap:()=>{this.ctx.input.remove("juice_toCart");const n={id:"juice",root:this.bottleGroup,state:this.itemState(),drop:0,scanned:!1,bagged:!1},i=this.ctx.cart.receive(n,1);i.y-=.06,this.bottleBody.setHome(i),this.bottleBody.setLocalTarget(i),this.ctx.items.set(n),this.ctx.audio.snapPlace(),this.ctx.audio.chime(),this.step="done",this.tween.after(.5,()=>{this.bottleBody.object.position.copy(this.bottleBody.target),this.bottleBody.parked=!0,this.onComplete?.()})}};this.addHandle({kind:"drag",id:"juice_toCart",object:this.bottleGroup,liftPx:46,onStart:()=>{this.bottleBody.held=!0},onDrag:n=>this.bottleBody.setWorldTarget(n),onEnd:n=>{this.bottleBody.held=!1,this.bottleBody.setWorldTarget(n)},snaps:()=>[e],onMiss:()=>this.bottleBody.returnHome()})}itemState(){return{kind:"juice",level:this.level,capped:this.capTurn>=Math.PI*1.8,variant:this.replayCount%Xs.length}}hint(){if(this.ctx.audio.nudge(),this.step==="placeBottle"){const e=this.bottleBody.target.clone();this.tween.add(.6,n=>{this.bottleBody.setLocalTarget(new y(e.x,e.y+Math.sin(n*Math.PI)*.014,e.z))})}else if(this.step==="load"){if(!this.crateOranges[this.placedCount])return;const n=this.crateBodies[this.placedCount],i=n.target.clone();this.tween.add(.7,r=>{n.setLocalTarget(new y(i.x,i.y+Math.sin(r*Math.PI)*.02,i.z))})}else if(this.step==="press")this.tween.add(.7,e=>{this.leverPull=Math.sin(e*Math.PI)*.3});else if(this.step==="cap"){const e=this.capGroup.rotation.y;this.tween.add(.7,n=>{this.capGroup.rotation.y=e-Math.sin(n*Math.PI)*.4})}else if(this.step==="toCart"){const e=this.bottleBody.target.clone();this.tween.add(.7,n=>{const i=Math.sin(n*Math.PI)*.03;this.bottleBody.setLocalTarget(new y(e.x+i,e.y,e.z+i))})}}update(e){this.tween.update(e),this.bottleBody.update(e);for(let n=this.placedCount;n<this.crateBodies.length;n++)this.crateBodies[n].update(e);this.lever.rotation.x=ve(this.lever.rotation.x,this.leverPull*.62,4e-4,e),this.rollOranges(e),this.runPress(e),this.updateLiquid(e)}rollOranges(e){const n=this.leverPull>.5;let i=!1;for(let o=0;o<this.oranges.length;o++){const a=this.oranges[o];if(!a.placed||a===this.cycleOrange)continue;const l=this.oranges[o-1],c=this.variant.gap,h=l&&l!==this.cycleOrange?Math.max(0,l.s-c):1;a.s<h?(a.v=Math.min(a.v+.9*this.variant.rollSpeed*e,.55*this.variant.rollSpeed),a.s=Math.min(h,a.s+a.v*e),i=!0):(a.v*=.4,a.s=h);const u=this.railCurve.getPointAt(fe(a.s,0,1));a.mesh.position.set(u.x,u.y+this.variant.radius*.55,u.z),a.mesh.rotation.z-=a.v*e/Math.max(.02,this.variant.radius)}(i?.5:0)>0&&(this.rollSound+=e,this.rollSound>.45&&(this.rollSound=0,this.ctx.audio.orangeRoll())),this.ctx.audio.setLoop("conveyor",n?.6:0)}runPress(e){const n=this.leverHeld&&this.leverPull>.5&&this.step==="press",i=1.7;if(this.cycleT<0){if(n){const l=this.oranges.find(c=>c.s>=.98&&c!==this.cycleOrange);l?(this.cycleOrange=l,this.cycleT=0,this.pressedOrange=l.mesh):this.oranges.some(c=>c.placed)}this.ctx.audio.setLoop("motor",n?.8:0),n||this.ctx.audio.setLoop("juice",0),this.checkPressDone();return}this.cycleT+=e/i;const r=fe(this.cycleT,0,1);this.ctx.audio.setLoop("motor",.9);const o=this.variant.radius;if(this.pressedOrange)if(r<.22){const l=r/.22,c=this.railCurve.getPointAt(1);this.pressedOrange.position.lerpVectors(new y(c.x,c.y+o*.55,c.z),new y(0,1.44,-.06),an(l)),this.pressedOrange.visible=!0,this.blade.position.y=se(.16,.02,Vs(.12,.22,r))}else r<.24&&(this.pressedOrange.visible=!1,this.halfL.visible=!0,this.halfR.visible=!0,this.ctx.audio.squeeze());if(r>=.22){const l=Vs(.22,.55,r),c=Vs(.8,1,r),h=se(0,.075,l)*(1-c*.4);this.halfL.position.set(-h,0,0),this.halfR.position.set(h,0,0);const u=1-l*.42*(1-c);this.halfL.scale.set(o/.044*u,o/.044,o/.044),this.halfR.scale.set(o/.044*u,o/.044,o/.044),this.cupLeft.position.x=se(-.14,-.085,l)+c*.06,this.cupRight.position.x=se(.14,.085,l)-c*.06,this.blade.position.y=se(.02,.16,c)}if(r>.28&&r<.9){const l=Vs(.82,.98,this.levelTarget),c=this.perOrange/.62*(1-l*.75);this.levelTarget=fe(this.levelTarget+c*e,0,.97),this.stream.visible=!0,this.stream.scale.x=this.stream.scale.z=se(1,.35,l),this.ctx.audio.setLoop("juice",se(.9,.35,l),se(1500,2300,l))}else this.stream.visible=!1,this.ctx.audio.setLoop("juice",0);r>=1&&(this.cycleT=-1,this.halfL.visible=!1,this.halfR.visible=!1,this.cycleOrange&&(this.cycleOrange.placed=!1,this.cycleOrange.mesh.visible=!1,this.oranges.splice(this.oranges.indexOf(this.cycleOrange),1),this.cycleOrange=null),this.pressedOrange=null,this.checkPressDone())}checkPressDone(){this.step==="press"&&this.oranges.length===0&&this.cycleT<0&&this.placedCount>=this.variant.count&&(this.ctx.audio.setLoop("motor",0),this.ctx.audio.setLoop("juice",0),this.ctx.audio.setLoop("conveyor",0),this.armCap())}updateLiquid(e){this.level=ve(this.level,this.levelTarget,.02,e),this.liquid.scale.y=Math.max(.001,this.level);const n=.006+this.level*.19;this.wobblePhase+=e*this.variant.wobbleHz*Math.PI*2;const i=Math.sin(this.wobblePhase)*.0018*(this.cycleT>=0?1:.25);if(this.liquid.rotation.z=Math.sin(this.wobblePhase*.6)*.02*(this.cycleT>=0?1:.2),this.level>.02){this.foam.visible=!0,this.foam.position.y=n+i,this.foam.scale.y=se(.5,1.4,fe(this.level*1.2,0,1))*(this.variant.foamHeight/.016);const r=Math.min(this.bubbles.instanceMatrix.count,this.ctx.quality.particles(22));let o=0;for(let a=0;a<r;a++){const l=a/r*Math.PI*2+this.wobblePhase*.12,c=.014+a*7919%100/100*.026,h=this.variant.foamBubble*(.55+a*104729%100/100*.7);this.dummy.position.set(Math.cos(l)*c,n+i+h*.4+Math.sin(this.wobblePhase+a)*.0012,Math.sin(l)*c),this.dummy.scale.setScalar(h),this.dummy.rotation.set(0,0,0),this.dummy.updateMatrix(),this.bubbles.setMatrixAt(o++,this.dummy.matrix)}this.bubbles.count=o,this.bubbles.instanceMatrix.needsUpdate=!0}if(this.stream.visible){const o=this.bottleGroup.position.y+n;this.stream.scale.y=Math.max(.02,1.2-o)}}restart(){this.replayCount++;const e=this.ctx.items.get("juice");e&&(e.root.parent?.remove(e.root),this.ctx.items.delete("juice")),this.group.add(this.bottleGroup),this.enter()}get currentStep(){return this.step}}function Mg(){const s=new ms,t=.098;return s.moveTo(-t,0),s.lineTo(t,0),s.lineTo(t,.075),s.quadraticCurveTo(t+.012,.112,t*.62,.145),s.quadraticCurveTo(0,.185,-t*.62,.145),s.quadraticCurveTo(-t-.012,.112,-t,.075),s.closePath(),s}function yg(){const s=Pc(.175,.135,.018),t=new ms;return s.getPoints(28).forEach((n,i)=>i===0?t.moveTo(n.x,n.y+.0675):t.lineTo(n.x,n.y+.0675)),t.closePath(),t}function Sg(){const s=new ms,t=.083,e=.052;for(let n=0;n<=22;n++){const i=n/22*Math.PI*2,r=Math.cos(i)*t,o=Math.sin(i)*e*(Math.sin(i)>0?1.15:.8)+e;n===0?s.moveTo(r,o):s.lineTo(r,o)}return s.closePath(),s}const Kr=[{kind:"farmhouse",slices:14,thickness:.018,crust:"light",seeded:!1,shape:Mg,fan:.032},{kind:"pullman",slices:16,thickness:.016,crust:"dark",seeded:!1,shape:yg,fan:.026},{kind:"grain",slices:10,thickness:.019,crust:"seeded",seeded:!0,shape:Sg,fan:.04}],zn=.06,bg=.135,$r=20;class wg extends cr{constructor(e){super("bread",e);E(this,"step","placeLoaf");E(this,"spec",Kr[0]);E(this,"breadGroup",new xe);E(this,"breadBody");E(this,"slices",[]);E(this,"cover",new xe);E(this,"coverT",0);E(this,"locked",!1);E(this,"latch");E(this,"interlock");E(this,"lever",new xe);E(this,"leverPull",0);E(this,"running",!1);E(this,"feed",0);E(this,"bladeLocal",0);E(this,"exitLocal",0);E(this,"bladeBank",new xe);E(this,"pusher");E(this,"sleeve",new xe);E(this,"sleeveBody");E(this,"loafHit");E(this,"fanned",!1);E(this,"crumbs");E(this,"crumbPool",[]);E(this,"crumbAcc",0);E(this,"bladeTick",0);E(this,"detail",[]);E(this,"rng",new je(577));E(this,"dummy",new Ee);E(this,"interlockWarned",!1);E(this,"crustMats");E(this,"crumbMats");E(this,"base",new y(le.bread,0,Le));E(this,"loafStart",new y(.16,1.02,.36));E(this,"loafRest",new y(-.34,1.02,-.02));E(this,"sleeveStart",new y(.5,1.04,.34));this.group.position.copy(this.base),this.crustMats={light:e.mat.crust("light"),dark:e.mat.crust("dark"),seeded:e.mat.crust("seeded")},this.crumbMats={plain:e.mat.crumb(!1),seeded:e.mat.crumb(!0)},this.build()}build(){const e=this.ctx.mat,n=_=>(this.detail.push(_),_),i=new z(ie(1.12,.1,.62,.02),e.steel);i.position.set(0,.97,-.06),i.castShadow=!0,i.receiveShadow=!0,this.group.add(i);const r=new z(ie(1.12,.62,.1,.02),e.painted);r.position.set(0,1.32,-.32),this.group.add(r);for(const _ of[-1,1]){const m=new z(ie(.05,.42,.58,.012),e.wood);m.position.set(_*.57,1.19,-.06),m.castShadow=!0,this.group.add(m)}const o=new z(ie(.42,.02,.3,.006),e.steelPolished);o.position.set(-.36,1.015,-.02),o.receiveShadow=!0,this.group.add(o);for(const _ of[-1,1]){const m=new z(ie(.42,.09,.014,.004),e.steel);m.position.set(-.36,1.06,_*.14),this.group.add(n(m))}const a=ie(.03,.11,.24,.006);this.pusher=new z(a,e.steelDark),this.pusher.position.set(-.6,1.075,-.02),this.group.add(this.pusher);const l=new z(ie(.44,.02,.3,.006),e.steelPolished);l.position.set(.4,1.015,-.02),l.receiveShadow=!0,this.group.add(l);const c=new z(ie(.02,.07,.3,.005),e.steel);c.position.set(.62,1.05,-.02),this.group.add(n(c)),this.bladeBank.position.set(zn,1.3,-.02),this.group.add(this.bladeBank);for(let _=0;_<9;_++){const m=new z(new te(.0035,.2,.26),e.steelPolished);m.position.set((_-4)*.017,0,0),this.bladeBank.add(m)}const h=new z(ie(.19,.03,.29,.006),e.steelDark);h.position.set(0,.115,0),this.bladeBank.add(h);const u=new z(ie(.56,.42,.44,.02),e.guard);this.cover.add(u);const d=new z(new Ve(.28,.007,4,4),e.steelDark);d.rotation.z=Math.PI/4,d.position.z=.22,d.scale.set(1,.78,1),this.cover.add(n(d));const f=new z(new jt(.014,.014,.4,10),e.roseSoft);f.rotation.z=Math.PI/2,f.position.set(0,-.18,.24),this.cover.add(f);const g=Ze(.6,.24,.3,e.hitVolume);g.position.set(0,-.14,.18),this.cover.add(g),this.cover.position.set(zn,1.74,-.02),this.group.add(this.cover),this.latch=new z(new te(.05,.026,.026),e.rose),this.latch.position.set(zn+.32,1.31,.06),this.group.add(this.latch),this.buildLever(e),this.buildSleeve(e),this.crumbs=new ps(new te(.006,.005,.006),this.crumbMats.plain,$r),this.crumbs.instanceMatrix.setUsage(ra),this.crumbs.count=0,this.crumbs.frustumCulled=!1,this.group.add(this.crumbs);for(let _=0;_<$r;_++)this.crumbPool.push({alive:!1,p:new y,v:new y,life:0})}buildLever(e){this.lever.position.set(.42,1.2,0),this.group.add(this.lever);const n=new z(ie(.05,.32,.05,.014),e.steelDark);n.position.set(0,.14,.08),n.rotation.x=-.35,n.castShadow=!0,this.lever.add(n);const i=new z(new pn(.062,14,10),e.roseSoft);i.position.set(0,.28,.18),i.castShadow=!0,this.lever.add(i);const r=Ze(.28,.32,.3,e.hitVolume);r.position.set(0,.22,.14),this.lever.add(r),this.interlock=new z(new te(.03,.06,.05),e.rose),this.interlock.position.set(.42,1.26,-.1),this.group.add(this.interlock)}buildSleeve(e){const n=new z(new jt(.145,.145,.2,4,1,!0),e.paperWhite);n.rotation.z=Math.PI/2,n.rotation.x=Math.PI/4,n.castShadow=!0,this.sleeve.add(n);const i=new z(new Ve(.145,.008,4,4),e.rose);i.rotation.y=Math.PI/2,i.rotation.x=Math.PI/4,i.position.x=.06,this.sleeve.add(i);const r=Ze(.32,.3,.3,e.hitVolume);this.sleeve.add(r),this.sleeve.position.copy(this.sleeveStart),this.sleeve.visible=!1,this.group.add(this.sleeve),this.sleeveBody=new Ln(this.sleeve),this.sleeveBody.clampBox=new Xe(new y(-.7,.98,-.35),new y(1.1,1.5,1.5)),this.group.add(this.breadGroup),this.loafHit=Ze(.34,.3,.36,e.hitVolume),this.loafHit.position.set(0,.1,0),this.breadGroup.add(this.loafHit),this.breadBody=new Ln(this.breadGroup),this.breadBody.clampBox=new Xe(new y(-.8,.8,-.35),new y(1.2,1.5,1.6))}get establishShot(){return{name:"bread_establish",target:new y(this.base.x+.12,1.35,this.base.z+.15),radius:1.45,radiusX:2.3,yawDeg:-22,pitchDeg:-2,focal:38,motion:{truck:.33,truckPeriod:15,arcDeg:4,arcPeriod:18},portrait:{radius:2.1,radiusX:1.08,focal:35,compose:{y:-.14}}}}get workShot(){return{name:"bread_work",target:new y(this.base.x+.04,1.28,this.base.z-.02),radius:.5,radiusX:.88,yawDeg:-15,pitchDeg:-4,focal:52,motion:{arcDeg:9,arcPeriod:16,truck:.24,truckPeriod:12,dollyFrom:1.2,dollyTo:.88,dollyTime:18},portrait:{target:new y(this.base.x+.04,1.36,this.base.z+.04),radius:1.05,radiusX:.8,focal:42,pitchDeg:-5,motion:{arcDeg:5,arcPeriod:17,truck:.1,dollyFrom:1.16,dollyTo:.92,dollyTime:18}}}}get fanShot(){return{name:"bread_fan",target:new y(this.base.x+.4,1.12,this.base.z-.02),radius:.26,radiusX:.4,yawDeg:-8,pitchDeg:6,focal:68,motion:{arcDeg:8,arcPeriod:13,truck:.09,dollyFrom:1.14,dollyTo:.9,dollyTime:12},portrait:{radius:.5,radiusX:.32,focal:58}}}get cartShot(){return{name:"bread_cart",target:new y(this.base.x+.5,1.05,this.base.z+.85),radius:.86,radiusX:1.22,yawDeg:-10,pitchDeg:7,focal:42,motion:{arcDeg:6,arcPeriod:14,truck:.16,dollyFrom:1.12,dollyTo:.94,dollyTime:10},portrait:{radius:1.2,radiusX:.78,focal:38}}}enter(){this.reset(),this.ctx.camera.goTo(this.establishShot,1.4),this.tween.after(1.5,()=>{this.ctx.camera.goTo(this.workShot,1.5),this.armLoaf()})}reset(){this.tween.clear(),this.clearHandles(),this.spec=Kr[this.replayCount%Kr.length],this.step="placeLoaf",this.coverT=0,this.locked=!1,this.running=!1,this.fanned=!1,this.feed=0,this.leverPull=0,this.interlockWarned=!1,this.cover.position.set(zn,1.74,-.02),this.latch.position.set(zn+.32,1.31,.06),this.interlock.position.set(.46,1.26,-.08),this.pusher.position.x=-.6,this.crumbs.count=0;for(const e of this.crumbPool)e.alive=!1;for(const e of this.slices)e.mesh.parent?.remove(e.mesh),e.mesh.geometry.dispose();this.slices.length=0,this.group.attach(this.breadGroup),this.breadGroup.position.copy(this.loafStart),this.breadGroup.rotation.set(0,0,0),this.loafHit.position.set(0,.1,0),this.loafHit.scale.set(1,1,1),this.breadBody.parked=!1,this.breadBody.setHome(this.loafStart),this.breadBody.setLocalTarget(this.loafStart),this.sleeve.visible=!1,this.group.attach(this.sleeve),this.sleeve.position.copy(this.sleeveStart),this.sleeve.rotation.set(0,0,0),this.sleeveBody.parked=!1,this.sleeveBody.setHome(this.sleeveStart),this.sleeveBody.setLocalTarget(this.sleeveStart),this.buildLoaf()}buildLoaf(){const e=this.spec.shape(),n=this.crustMats[this.spec.crust],i=this.spec.seeded?this.crumbMats.seeded:this.crumbMats.plain;this.crumbs.material=i;const r=this.spec.slices,o=this.spec.thickness,a=r*o;for(let l=0;l<r;l++){const c=new rr(e,{depth:o,bevelEnabled:!1,curveSegments:6});c.rotateY(Math.PI/2),c.translate(o/2,0,0);const h=c.attributes.uv;for(let _=0;_<h.count;_++)h.setX(_,h.getX(_)+l*.083);h.needsUpdate=!0;const d=l===0||l===r-1?n:i,f=new z(c,[d,n]);f.castShadow=!0,f.receiveShadow=!0;const g=-a/2+l*o;f.position.set(g,0,0),this.breadGroup.add(f),this.slices.push({mesh:f,index:l,cut:!1,targetX:g,targetY:0,targetRot:0,lag:0})}this.bladeLocal=zn-this.loafRest.x,this.exitLocal=.26-this.loafRest.x}exit(){this.clearHandles(),this.ctx.audio.setLoop("blades",0),this.ctx.audio.setLoop("conveyor",0)}setDetail(e){for(const n of this.detail)n.visible=e&&this.ctx.quality.tier>0;this.crumbs.visible=e}armLoaf(){const e={world:()=>this.group.localToWorld(this.loafRest.clone()),radius:.5,onSnap:()=>{this.ctx.input.remove("bread_loaf");const n=this.breadGroup.position.clone(),i=this.breadGroup.rotation.y;this.tween.add(.4,r=>{const o=an(r);this.breadGroup.position.lerpVectors(n,this.loafRest,o),this.breadGroup.rotation.y=se(i,0,o)},{onComplete:()=>{this.breadBody.setHome(this.loafRest),this.breadBody.setLocalTarget(this.loafRest),this.ctx.audio.snapPlace(),this.step="closeCover",this.armCover()}})}};this.addHandle({kind:"drag",id:"bread_loaf",object:this.breadGroup,liftPx:50,onStart:()=>{this.breadBody.held=!0},onDrag:n=>{this.breadBody.setWorldTarget(n),this.breadGroup.rotation.y=ve(this.breadGroup.rotation.y,0,.02,1/60)},onEnd:n=>{this.breadBody.held=!1,this.breadBody.setWorldTarget(n)},snaps:()=>[e],onMiss:()=>this.breadBody.returnHome()}),this.armLever()}armCover(){this.addHandle({kind:"lever",id:"bread_cover",object:this.cover,travelPx:150,direction:"down",onPull:e=>{this.locked||(this.coverT=Math.max(this.coverT*.4,e),this.coverT>=.94&&this.lockCover())},onRelease:()=>{this.locked||(this.coverT=0)}})}lockCover(){if(this.locked)return;this.locked=!0,this.coverT=1,this.ctx.input.remove("bread_cover"),this.ctx.audio.lockClack();const e=this.latch.position.x;this.tween.add(.22,n=>{this.latch.position.x=se(e,zn+.27,nr(n)),this.interlock.position.y=se(1.26,1.19,an(Math.min(1,n*1.4)))}),this.step="run"}armLever(){this.addHandle({kind:"lever",id:"bread_lever",object:this.lever,travelPx:110,direction:"down",onPull:e=>{if(!this.locked){this.leverPull=Math.min(e,.08),e>.2&&!this.interlockWarned&&(this.interlockWarned=!0,this.ctx.audio.click());return}this.leverPull=e,e>.6&&!this.running&&this.step==="run"&&this.startCut()},onRelease:()=>{this.leverPull=0,this.interlockWarned=!1}})}startCut(){this.running=!0,this.ctx.input.remove("bread_lever")}finishCut(){this.running=!1,this.ctx.audio.setLoop("blades",0),this.ctx.audio.setLoop("conveyor",0),this.fanned=!0,this.ctx.camera.goTo(this.fanShot,1.3);const e=this.slices.length;for(const n of this.slices){const i=n.targetX,r=n.targetRot,o=this.exitLocal-.04+n.index*this.spec.fan*.5,a=-(.22+n.index/e*.72);this.tween.add(.55,l=>{const c=nr(l);n.targetX=se(i,o,c),n.targetRot=se(r,a,c)},{delay:.06+n.index*.035})}this.tween.after(.5+e*.035,()=>{this.ctx.audio.chime(),this.step="sleeve",this.sleeve.visible=!0,this.armSleeve()})}armSleeve(){const e={world:()=>this.breadGroup.localToWorld(new y(this.exitLocal+.06,.07,0)),radius:.48,onSnap:()=>{this.ctx.input.remove("bread_sleeve");const n=this.sleeve.position.clone(),i=new y(this.exitLocal+.06,.07,0);this.tween.add(.35,r=>{const o=an(r),a=this.breadGroup.localToWorld(i.clone());this.group.worldToLocal(a),this.sleeve.position.lerpVectors(n,a,o)},{onComplete:()=>{this.ctx.audio.paperStick(),this.sleeveBody.parked=!0,this.breadGroup.attach(this.sleeve),this.recentreBread(),this.step="toCart",this.ctx.camera.goTo(this.cartShot,1.2),this.armToCart()}})}};this.addHandle({kind:"drag",id:"bread_sleeve",object:this.sleeve,liftPx:52,onStart:()=>{this.sleeveBody.held=!0},onDrag:n=>this.sleeveBody.setWorldTarget(n),onEnd:n=>{this.sleeveBody.held=!1,this.sleeveBody.setWorldTarget(n)},snaps:()=>[e],onMiss:()=>this.sleeveBody.returnHome()})}recentreBread(){const e=new Xe;for(const r of this.slices)e.expandByObject(r.mesh);e.expandByObject(this.sleeve);const n=e.getCenter(new y);this.group.worldToLocal(n);const i=n.clone().sub(this.breadGroup.position);this.breadGroup.position.copy(n);for(const r of this.breadGroup.children)r.position.sub(i);for(const r of this.slices)r.targetX-=i.x,r.targetY-=i.y;this.loafHit.position.set(0,0,0),this.loafHit.scale.set(1.5,1.2,1.1),this.breadBody.setHome(this.breadGroup.position.clone()),this.breadBody.setLocalTarget(this.breadGroup.position.clone())}armToCart(){const e={world:()=>this.ctx.cart.basket.localToWorld(this.ctx.cart.slotLocal(2)),radius:.85,radiusPx:150,onSnap:()=>{this.ctx.input.remove("bread_toCart");const n={id:"bread",root:this.breadGroup,state:this.itemState(),drop:.08,scanned:!1,bagged:!1},i=this.ctx.cart.receive(n,2);i.y+=.02,this.breadBody.setHome(i),this.breadBody.setLocalTarget(i),this.ctx.items.set(n),this.ctx.audio.snapPlace(),this.ctx.audio.chime(),this.step="done",this.tween.after(.5,()=>{this.breadBody.object.position.copy(this.breadBody.target),this.breadBody.parked=!0,this.onComplete?.()})}};this.addHandle({kind:"drag",id:"bread_toCart",object:this.breadGroup,liftPx:50,onStart:()=>{this.breadBody.held=!0},onDrag:n=>this.breadBody.setWorldTarget(n),onEnd:n=>{this.breadBody.held=!1,this.breadBody.setWorldTarget(n)},snaps:()=>[e],onMiss:()=>this.breadBody.returnHome()})}itemState(){return{kind:"bread",loaf:this.spec.kind,sliced:this.fanned,sleeved:this.step!=="sleeve"}}hint(){if(this.ctx.audio.nudge(),this.step==="placeLoaf"){const e=this.breadBody.target.clone();this.tween.add(.6,n=>{this.breadBody.setLocalTarget(new y(e.x,e.y+Math.sin(n*Math.PI)*.014,e.z))})}else if(this.step==="closeCover")this.tween.add(.7,e=>{this.locked||(this.coverT=Math.sin(e*Math.PI)*.16)});else if(this.step==="run")this.tween.add(.7,e=>{this.running||(this.leverPull=Math.sin(e*Math.PI)*.28)});else if(this.step==="sleeve"){const e=this.sleeveBody.target.clone();this.tween.add(.7,n=>{const i=Math.sin(n*Math.PI)*.025;this.sleeveBody.setLocalTarget(new y(e.x-i,e.y,e.z-i))})}else if(this.step==="toCart"){const e=this.breadBody.target.clone();this.tween.add(.7,n=>{const i=Math.sin(n*Math.PI)*.03;this.breadBody.setLocalTarget(new y(e.x+i,e.y,e.z+i))})}}update(e){this.tween.update(e),this.breadBody.update(e),this.sleeveBody.update(e),this.cover.position.y=ve(this.cover.position.y,se(1.74,1.44,this.coverT),5e-4,e),this.lever.rotation.x=ve(this.lever.rotation.x,this.leverPull*.6,4e-4,e),this.running?this.runCut(e):this.ctx.audio.setLoop("blades",0),this.applySlices(e),this.stepCrumbs(e)}runCut(e){this.feed+=bg*e;const n=this.spec.thickness,i=this.slices.length*n;this.pusher.position.x=this.loafRest.x-i/2+this.feed-.06;let r=!0;for(const o of this.slices){const a=-i/2+o.index*n+this.feed;o.cut||(a>=this.bladeLocal?(o.cut=!0,this.spawnCrumbs(2)):(o.targetX=a,o.targetY=0,r=!1)),o.cut&&!this.fanned&&(o.targetX=this.exitLocal+o.index*(n+.004),o.targetY=0,o.targetRot=-.06)}this.bladeBank.position.y=1.3+Math.sin(this.feed*180)*.016,this.ctx.audio.setLoop("blades",.85,800+Math.sin(this.feed*30)*220),this.ctx.audio.setLoop("conveyor",.7),this.bladeTick+=e,this.bladeTick>.16&&(this.bladeTick=0,this.ctx.audio.grainTick()),r&&this.finishCut()}applySlices(e){for(const n of this.slices){const i=n.mesh,r=2e-5+n.index%5*15e-6;i.position.x=ve(i.position.x,n.targetX,r,e),i.position.y=ve(i.position.y,n.targetY,r,e),i.rotation.z=ve(i.rotation.z,n.targetRot,r*2,e)}}spawnCrumbs(e){for(let n=0;n<e;n++){const i=this.crumbPool.find(r=>!r.alive);if(!i)return;i.alive=!0,i.life=1.1,i.p.set(zn+this.rng.range(-.02,.02),1.16,this.rng.range(-.08,.08)),i.v.set(this.rng.range(-.1,.1),this.rng.range(-.1,.1),this.rng.range(-.08,.08))}}stepCrumbs(e){let n=0;for(const i of this.crumbPool)if(i.alive){if(i.life-=e,i.v.y-=6*e,i.p.addScaledVector(i.v,e),i.p.y<1.03&&(i.p.y=1.03,i.v.set(0,0,0)),i.life<=0){i.alive=!1;continue}this.dummy.position.copy(i.p),this.dummy.rotation.set(i.life*3,i.life*2,0),this.dummy.scale.setScalar(fe(i.life,0,1)),this.dummy.updateMatrix(),this.crumbs.setMatrixAt(n++,this.dummy.matrix)}this.crumbAcc+=e,this.crumbs.count=Math.min(n,this.ctx.quality.particles($r)),this.crumbs.instanceMatrix.needsUpdate=!0}restart(){this.replayCount++;const e=this.ctx.items.get("bread");e&&(e.root.parent?.remove(e.root),this.ctx.items.delete("bread")),this.group.add(this.breadGroup),this.enter()}get currentStep(){return this.step}}class Tg extends cr{constructor(e){super("checkout",e);E(this,"step","unload");E(this,"lanes",[]);E(this,"baggedCount",0);E(this,"scanGlow");E(this,"scanBeam");E(this,"scanLight");E(this,"shelf");E(this,"shelfDip",0);E(this,"card",new xe);E(this,"cardBody");E(this,"reader");E(this,"readerLamp");E(this,"receipt");E(this,"receiptBody");E(this,"bagGroup",new xe);E(this,"bagPanels",[]);E(this,"bagOpen",0);E(this,"detail",[]);E(this,"beamT",-1);E(this,"beamItem",null);E(this,"onReplayRequest",null);E(this,"base",new y(le.checkout,0,Le));E(this,"scanCentre",new y(0,1.06,.05));E(this,"scanHalfX",.17);this.group.position.copy(this.base),this.build()}build(){const e=this.ctx.mat,n=A=>(this.detail.push(A),A),i=new z(ie(.64,.02,.42,.006),e.steelPolished);i.position.set(-.5,.945,.02),i.receiveShadow=!0,this.group.add(i);const r=new z(ie(.64,.05,.014,.004),e.steel);r.position.set(-.5,.97,.23),this.group.add(n(r));const o=new z(ie(.42,.05,.4,.01),e.steelDark);o.position.set(0,.935,.05),this.group.add(o);const a=new z(new De(.34,.32),e.guard);a.rotation.x=-Math.PI/2,a.position.set(0,.962,.05),this.group.add(a),this.scanGlow=new z(new De(.32,.3),e.scanLight),this.scanGlow.rotation.x=-Math.PI/2,this.scanGlow.position.set(0,.966,.05),this.scanGlow.visible=!1,this.group.add(this.scanGlow);const l=new z(ie(.34,.62,.16,.02),e.painted);l.position.set(0,1.27,-.24),l.castShadow=!0,this.group.add(l);const c=new z(new De(.24,.2),e.guard);c.position.set(0,1.24,-.155),this.group.add(n(c)),this.scanBeam=new z(new De(.3,.012),e.scanLight),this.scanBeam.visible=!1,this.group.add(this.scanBeam),this.scanLight=new pa(16726566,0,.9,2),this.scanLight.position.set(0,1.02,.05),this.group.add(this.scanLight),this.shelf=new z(ie(.58,.03,.44,.008),e.steelPolished),this.shelf.position.set(.52,.955,.02),this.shelf.receiveShadow=!0,this.group.add(this.shelf);for(const A of[-1,1]){const S=new z(new jt(.008,.008,.05,8),e.steelDark);S.position.set(.52+A*.24,.925,.02),this.group.add(n(S))}this.reader=new z(ie(.16,.2,.1,.014),e.steelDark),this.reader.position.set(.92,1.06,-.08),this.reader.rotation.x=-.32,this.reader.castShadow=!0,this.group.add(this.reader);const h=new z(new De(.12,.14),e.plain(2369066,.35));h.position.set(0,0,.052),this.reader.add(h),this.readerLamp=new z(new oi(.014,12),e.lampGlow),this.readerLamp.position.set(0,.055,.054),this.reader.add(this.readerLamp);const u=new z(new jt(.02,.03,.14,10),e.steel);u.position.set(.92,.99,-.11),this.group.add(u);const d=new z(ie(.086,.054,.004,.006),e.rose),f=new z(new te(.016,.013,.001),e.plain(14205050,.35,.8));f.position.set(-.022,.006,.003),d.add(f),this.card.add(d),this.card.position.set(.92,.985,.22),this.card.rotation.x=-Math.PI/2,this.group.add(this.card);const g=Ze(.24,.24,.12,e.hitVolume);this.card.add(g),this.cardBody=new Ln(this.card);const _=new De(.075,.3,1,16),m=_.attributes.position;for(let A=0;A<m.count;A++){const x=(m.getY(A)+.15)/.3;m.setZ(A,Math.sin(x*Math.PI*.9)*.035)}_.translate(0,-.15,0),_.computeVertexNormals(),this.receipt=new z(_,e.receipt()),this.receipt.position.set(.92,1.14,-.02),this.receipt.scale.y=.001,this.receipt.visible=!1,this.group.add(this.receipt);const p=Ze(.2,.2,.14,e.hitVolume);p.position.y=-.14,this.receipt.add(p),this.receiptBody=new Ln(this.receipt),this.buildBag()}buildBag(){const e=this.ctx.mat;this.bagGroup.position.set(.52,.97,.02),this.group.add(this.bagGroup);const n=new z(new te(.3,.012,.22),e.paperBag);n.receiveShadow=!0,this.bagGroup.add(n);const i=[[.3,.3,.012,0,-.11],[.3,.3,.012,0,.11],[.012,.3,.22,-.15,0],[.012,.3,.22,.15,0]];for(const[r,o,a,l,c]of i){const h=new te(r,o,a);h.translate(0,o/2,0);const u=new z(h,e.paperBag);u.position.set(l,.006,c),u.castShadow=!0,this.bagGroup.add(u),this.bagPanels.push(u)}this.bagGroup.visible=!1}get establishShot(){return{name:"checkout_establish",target:new y(this.base.x+.12,1.35,this.base.z+.15),radius:1.45,radiusX:2.3,yawDeg:-16,pitchDeg:-2,focal:36,motion:{truck:.36,truckPeriod:15,arcDeg:4,arcPeriod:18},portrait:{radius:2.2,radiusX:1.15,focal:34,compose:{y:-.1}}}}get workShot(){return{name:"checkout_work",target:new y(this.base.x+0,1.12,this.base.z+.05),radius:.48,radiusX:.95,yawDeg:-8,pitchDeg:2,focal:50,motion:{arcDeg:7,arcPeriod:17,truck:.22,truckPeriod:13,dollyFrom:1.18,dollyTo:.9,dollyTime:20},portrait:{target:new y(this.base.x+0,1.2,this.base.z+.1),radius:1.15,radiusX:1.02,focal:36,motion:{arcDeg:4,arcPeriod:18,truck:.1,dollyFrom:1.14,dollyTo:.94,dollyTime:20}}}}get cardShot(){return{name:"checkout_card",target:new y(this.base.x+.86,1.07,this.base.z-.02),radius:.3,radiusX:.44,yawDeg:-4,pitchDeg:7,focal:62,motion:{arcDeg:7,arcPeriod:12,truck:.09,dollyFrom:1.12,dollyTo:.92,dollyTime:12},portrait:{radius:.46,radiusX:.3,focal:54}}}get revealShot(){return{name:"checkout_reveal",target:new y(this.base.x+.25,1.35,this.base.z+.5),radius:1.5,radiusX:2.6,yawDeg:-24,pitchDeg:2,focal:35,motion:{arcDeg:6,arcPeriod:22,truck:.4,truckPeriod:18,dollyFrom:1,dollyTo:.9,dollyTime:20},portrait:{radius:2.2,radiusX:1.15,focal:34,compose:{y:-.08}}}}get replayShot(){return{name:"checkout_replay",target:new y(this.base.x+0,1.3,this.base.z+.35),radius:.4,radiusX:.62,yawDeg:-6,pitchDeg:4,focal:50,motion:{arcDeg:8,arcPeriod:18,truck:.14,dollyFrom:1.1,dollyTo:.96,dollyTime:18},portrait:{radius:.86,radiusX:.5,focal:42}}}enter(){this.reset(),this.ctx.camera.goTo(this.establishShot,1.6),this.tween.after(1.7,()=>{this.ctx.camera.goTo(this.workShot,1.6),this.unload()})}reset(){this.tween.clear(),this.clearHandles(),this.step="unload",this.baggedCount=0,this.bagOpen=0,this.beamT=-1,this.beamItem=null,this.lanes.length=0,this.bagGroup.visible=!1;for(const e of this.bagPanels)e.rotation.set(0,0,0);this.receipt.visible=!1,this.receipt.scale.y=.001,this.receipt.position.set(.92,1.14,-.02),this.receiptBody.setHome(this.receipt.position.clone()),this.receiptBody.setLocalTarget(this.receipt.position.clone()),this.card.position.set(.92,.985,.22),this.card.rotation.set(-Math.PI/2,0,0),this.cardBody.setHome(this.card.position.clone()),this.cardBody.setLocalTarget(this.card.position.clone()),this.scanGlow.visible=!1,this.scanBeam.visible=!1,this.scanLight.intensity=0;for(const e of this.ctx.items.list)e.scanned=!1,e.bagged=!1}unload(){const e=this.ctx.items.list;e.forEach((n,i)=>{const r=new y(-.78+i*.27,.955+n.drop,.02),o=n.root.getWorldPosition(new y);this.group.attach(n.root);const a=this.group.worldToLocal(o.clone());n.root.position.copy(a);const l=new Ln(n.root);l.clampBox=new Xe(new y(-1.1,.85,-.32),new y(1.15,1.45,1.2));const c=new Xe().setFromObject(n.root),h=c.getSize(new y),u=c.getCenter(new y);n.root.worldToLocal(u);const d=_=>Math.min(.26,Math.max(.2,_+.08)),f=Ze(d(h.x),Math.max(.26,h.y+.08),d(h.z),this.ctx.mat.hitVolume);f.position.copy(u),n.root.add(f);const g={item:n,body:l,deck:r,hit:f};this.lanes.push(g),this.tween.add(.5,_=>{const m=an(_);n.root.position.lerpVectors(a,r,m),n.root.position.y+=Math.sin(_*Math.PI)*.06},{delay:.15*i,onComplete:()=>{l.setHome(r),l.setLocalTarget(r),this.ctx.audio.snapPlace(),i===e.length-1&&(this.step="scan",this.armLanes())}})}),e.length||(this.step="card",this.armCard())}exit(){this.clearHandles()}setDetail(e){for(const n of this.detail)n.visible=e&&this.ctx.quality.tier>0}armLanes(){for(const e of this.lanes){if(e.item.bagged)continue;const n=`checkout_${e.item.id}`,i={world:()=>this.group.localToWorld(this.bagSlot(this.baggedCount)),radius:.62,onSnap:()=>this.placeOnShelf(e)};this.addHandle({kind:"drag",id:n,object:e.item.root,liftPx:46,onStart:()=>{e.body.held=!0},onDrag:r=>{e.body.setWorldTarget(r),this.testScan(e)},onEnd:r=>{e.body.held=!1,e.body.setWorldTarget(r)},snaps:()=>[i],onMiss:()=>e.body.returnHome()})}}bagSlot(e){return new y(.34+e*.16,.985,.02)}testScan(e){if(e.item.scanned)return;const n=e.item.root.getWorldPosition(new y);this.group.worldToLocal(n),Math.abs(n.x-this.scanCentre.x)<this.scanHalfX&&Math.abs(n.z-this.scanCentre.z)<.26&&n.y<this.scanCentre.y+.34&&n.y>this.scanCentre.y-.2&&(e.item.scanned=!0,this.ctx.audio.scanBeep(),this.beamT=0,this.beamItem=e.item.root,this.scanGlow.visible=!0,this.scanBeam.visible=!0,this.scanLight.intensity=2.4)}placeOnShelf(e){if(this.ctx.input.remove(`checkout_${e.item.id}`),!e.item.scanned){e.body.returnHome(),this.tween.after(.05,()=>this.armLanes());return}e.item.bagged=!0;const n=this.bagSlot(this.baggedCount);n.y+=e.item.drop,this.baggedCount++;const i=e.item.root.position.clone();this.tween.add(.3,r=>{const o=an(r);e.item.root.position.lerpVectors(i,n,o)},{onComplete:()=>{e.body.setHome(n),e.body.setLocalTarget(n),this.shelfDip=-.004,this.ctx.audio.snapPlace(),this.baggedCount>=this.lanes.length&&(this.step="card",this.tween.after(.4,()=>{this.ctx.camera.goTo(this.cardShot,1.2),this.armCard()}))}})}armCard(){this.addHandle({kind:"tap",id:"checkout_card",object:this.card,onTap:()=>{this.ctx.input.remove("checkout_card");const e=this.card.position.clone(),n=new y(.92,1.09,-.02);this.tween.add(.35,i=>{const r=an(i);this.card.position.lerpVectors(e,n,r),this.card.rotation.x=se(-Math.PI/2,-.32,r)},{onComplete:()=>{this.ctx.audio.scanBeep(),this.readerLamp.scale.setScalar(1.6),this.tween.add(.4,i=>this.readerLamp.scale.setScalar(1.6-i*.6)),this.tween.after(.35,()=>this.printReceipt())}})}})}printReceipt(){this.step="receipt",this.receipt.visible=!0,this.ctx.audio.receiptPrint(),this.tween.add(.75,e=>{this.receipt.scale.y=Math.max(.001,an(e))},{onComplete:()=>{this.receiptBody.setHome(this.receipt.position.clone()),this.receiptBody.setLocalTarget(this.receipt.position.clone()),this.armReceipt()}})}armReceipt(){this.addHandle({kind:"drag",id:"checkout_receipt",object:this.receipt,liftPx:20,onStart:()=>{this.receiptBody.held=!0},onDrag:e=>this.receiptBody.setWorldTarget(e),onEnd:()=>{if(this.receiptBody.held=!1,this.receiptBody.target.distanceTo(this.receiptBody.home)>.06){this.ctx.input.remove("checkout_receipt"),this.ctx.audio.paperStick();const n=this.receipt.position.clone();this.tween.add(.5,i=>{this.receipt.position.lerpVectors(n,new y(n.x,.97,n.z+.16),i),this.receipt.rotation.x=se(0,-1.35,i)},{onComplete:()=>this.openBag()})}else this.receiptBody.returnHome()}})}openBag(){this.bagGroup.visible=!0,this.bagGroup.position.set(.52,.97,.02),this.ctx.audio.bagPuff(),this.tween.add(.7,e=>{this.bagOpen=nr(e)},{onComplete:()=>{this.ctx.audio.chime(),this.step="reveal",this.ctx.camera.goTo(this.revealShot,1.7),this.tween.after(2.4,()=>this.armReplay())}});for(let e=0;e<this.lanes.length;e++){const n=this.lanes[e],i=n.item.root.position.clone(),r=new y(.52+(e-1)*.085,.985+n.item.drop,.02);this.tween.add(.5,o=>{n.item.root.position.lerpVectors(i,r,an(o))},{delay:.12*e}),this.tween.after(.12*e+.5,()=>{n.body.setHome(r),n.body.setLocalTarget(r)})}}armReplay(){this.step="replay",this.ctx.camera.goTo(this.replayShot,1.5),this.lanes.forEach((e,n)=>{const i=new y(-.28+n*.28,1.28,.3),r=e.item.root.position.clone();this.tween.add(.7,o=>{const a=an(o);e.item.root.position.lerpVectors(r,i,a),e.item.root.scale.setScalar(se(1,1.35,a))},{delay:.1*n,onComplete:()=>{e.body.setHome(i),e.body.setLocalTarget(i),this.addHandle({kind:"tap",id:`replay_${e.item.id}`,object:e.hit,onTap:()=>{this.ctx.audio.click(),this.clearHandles(),this.onReplayRequest?.(e.item.id)}})}})})}releaseItem(e){const n=this.lanes.find(i=>i.item.id===e);n&&(n.item.root.scale.setScalar(1),n.item.root.parent?.remove(n.item.root),this.ctx.items.delete(e));for(const i of this.lanes){if(i===n)continue;i.item.root.scale.setScalar(1),this.ctx.cart.basket.attach(i.item.root);const r=this.ctx.cart.slotLocal(i.item.id==="bulk"?0:i.item.id==="juice"?1:2);i.item.root.position.copy(r),i.item.root.rotation.set(0,0,0)}for(const i of this.lanes)i.hit.parent?.remove(i.hit);this.lanes.length=0}hint(){if(this.ctx.audio.nudge(),this.step==="scan"){const e=this.lanes.find(i=>!i.item.bagged);if(!e)return;const n=e.body.target.clone();this.tween.add(.8,i=>{e.body.setLocalTarget(new y(n.x+Math.sin(i*Math.PI)*.05,n.y,n.z))})}else if(this.step==="card"){const e=this.cardBody.target.clone();this.tween.add(.7,n=>{this.cardBody.setLocalTarget(new y(e.x,e.y+Math.sin(n*Math.PI)*.02,e.z))})}else if(this.step==="receipt"){const e=this.receiptBody.target.clone();this.tween.add(.7,n=>{this.receiptBody.setLocalTarget(new y(e.x,e.y-Math.sin(n*Math.PI)*.02,e.z))})}else if(this.step==="replay"){const e=this.lanes[0];if(!e)return;const n=e.body.target.clone();this.tween.add(.7,i=>{e.body.setLocalTarget(new y(n.x,n.y+Math.sin(i*Math.PI)*.025,n.z))})}}update(e){this.tween.update(e);for(const n of this.lanes)n.body.update(e);if(this.cardBody.update(e),this.receiptBody.update(e),this.shelfDip=ve(this.shelfDip,0,.03,e),this.shelf.position.y=.955+this.shelfDip,this.bagGroup.position.y=.97+this.shelfDip,this.beamT>=0){this.beamT+=e/.32;const n=fe(this.beamT,0,1);if(this.beamItem){const r=this.beamItem.getWorldPosition(new y);this.group.worldToLocal(r),this.scanBeam.position.set(r.x,se(r.y-.14,r.y+.16,n),r.z+.14),this.scanBeam.lookAt(this.ctx.camera.camera.position.clone().sub(this.group.getWorldPosition(new y)))}const i=Math.sin(n*Math.PI);this.scanBeam.material.opacity=i*.9,this.scanGlow.material.opacity=i*.55,this.scanLight.intensity=i*2.6,n>=1&&(this.beamT=-1,this.beamItem=null,this.scanBeam.visible=!1,this.scanGlow.visible=!1,this.scanLight.intensity=0)}for(let n=0;n<this.bagPanels.length;n++){const i=this.bagPanels[n],r=(1-this.bagOpen)*1.15;n===0?i.rotation.x=r:n===1?i.rotation.x=-r:n===2?i.rotation.z=-r:i.rotation.z=r,i.scale.y=se(.35,1,fe(this.bagOpen,0,1))}if(this.step==="replay")for(const n of this.lanes)n.item.root.rotation.y+=e*.35}get currentStep(){return this.step}}const Eg={name:"hall",target:new y(-3.6,1.5,-2.8),radius:2.9,radiusX:6,yawDeg:24,pitchDeg:-1.5,focal:36,motion:{truck:.55,truckPeriod:20,arcDeg:5,arcPeriod:26,dollyFrom:1.06,dollyTo:.93,dollyTime:18},portrait:{target:new y(-4.4,1.9,-2.8),radius:4.4,radiusX:2.4,focal:34,compose:{y:-.1}}};class Ag{constructor(t,e){E(this,"renderer");E(this,"scene",new hc);E(this,"clock",new od);E(this,"mat",new ag);E(this,"quality");E(this,"hall");E(this,"cart");E(this,"items",new ug);E(this,"camera");E(this,"input");E(this,"audio",new Zo);E(this,"tween",new Lc);E(this,"stations");E(this,"current","bulk");E(this,"started",!1);E(this,"running",!0);E(this,"hintAt",3);E(this,"frame",0);E(this,"resizeQueued",!0);E(this,"onResize",()=>{this.resizeQueued=!0});E(this,"onVisibility",()=>{const t=document.visibilityState==="hidden";this.running=!t,this.audio.setSuspended(t),t||this.clock.getDelta()});this.canvas=t,this.boot=e,this.renderer=new X0({canvas:t,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=we,this.renderer.toneMapping=Xl,this.renderer.toneMappingExposure=.94,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Wl,this.quality=new mg(this.renderer),this.renderer.setPixelRatio(this.quality.dpr),this.scene.background=new Xt(15130837),this.scene.fog=new ca(15130837,21,78);const n=new Xo(this.renderer),i=new q0;this.scene.environment=n.fromScene(i,.04).texture,this.scene.environmentIntensity=1.15,n.dispose(),this.hall=new cg(this.mat,this.quality),this.scene.add(this.hall.group),this.cart=new hg(this.mat),this.cart.snapTo(zl("bulk"),-.2),this.scene.add(this.cart.group),this.camera=new fg(this.aspect(),Eg),this.input=new pg(t,this.camera.camera);const r={root:this.scene,mat:this.mat,audio:this.audio,input:this.input,camera:this.camera,cart:this.cart,items:this.items,quality:this.quality},o=new vg(r),a=new xg(r),l=new wg(r),c=new Tg(r);this.stations={bulk:o,juice:a,bread:l,checkout:c};for(const h of Object.values(this.stations))this.scene.add(h.group);o.onComplete=()=>this.advance("juice"),a.onComplete=()=>this.advance("bread"),l.onComplete=()=>this.advance("checkout"),c.onReplayRequest=h=>this.replay(h),this.quality.onChange=()=>{this.hall.applyQuality(),this.applyDetail()},this.hall.applyQuality(),this.hall.setFocus(-5,Le),this.applyDetail(),this.input.onFirstInput=()=>{this.audio.resume(),this.started||this.start()},window.addEventListener("resize",this.onResize),window.addEventListener("orientationchange",this.onResize),window.visualViewport?.addEventListener("resize",this.onResize),document.addEventListener("visibilitychange",this.onVisibility),this.resize(),this.renderer.setAnimationLoop(()=>this.tick()),window.__marketHall={info:()=>({calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures}),station:()=>this.current,quality:()=>this.quality.tier,handles:()=>this.input.describe(),settled:()=>this.camera.settled}}aspect(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;return t/Math.max(1,e)}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;this.renderer.setPixelRatio(this.quality.dpr),this.renderer.setSize(t,e,!1),this.camera.setAspect(t/Math.max(1,e))}applyDetail(){for(const t of Bl)this.stations[t].setDetail(t===this.current)}start(){this.started=!0,this.boot.classList.add("hidden"),this.tween.after(.6,()=>{this.travelTo("bulk",2.4)})}stationTarget(t){return t==="checkout"?new y(le.checkout-1.55,0,Le+1.35):zl(t)}travelTo(t,e=2.2){this.current=t,this.applyDetail(),this.hall.setFocus(le[t],Le),this.cart.moveTo(this.stationTarget(t),t==="checkout"?.25:-.2),this.input.clear(),this.camera.goTo(this.stations[t].establishShot,e),this.hintAt=3,this.tween.after(e*.55,()=>{this.stations[t].enter()})}advance(t){const e=this.stations[this.current];this.tween.after(.9,()=>{e.exit(),this.travelTo(t,3)})}replay(t){const e=this.stations.checkout;e.releaseItem(t),e.exit();const n=t;this.current=n,this.applyDetail(),this.hall.setFocus(le[n],Le),this.cart.moveTo(this.stationTarget(n),-.2),this.input.clear(),this.camera.goTo(this.stations[n].establishShot,3),this.hintAt=3;const i=this.stations[n];i.onComplete=()=>{i.exit(),this.tween.after(.9,()=>this.travelTo("checkout",3))},this.tween.after(1.3,()=>i.restart())}tick(){this.resizeQueued&&(this.resizeQueued=!1,this.resize());const t=Math.min(.05,this.clock.getDelta());if(this.running){this.tween.update(t),this.input.update(t),this.camera.update(t),this.cart.update(t);for(const e of Bl)this.stations[e].update(t);this.input.idleTime<.05&&(this.hintAt=3),this.started&&this.input.liveCount>0&&this.camera.settled&&this.input.idleTime>this.hintAt&&(this.stations[this.current].hint(),this.hintAt=this.input.idleTime+7),this.quality.update(t),this.renderer.render(this.scene,this.camera.camera),this.frame++}}dispose(){this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.onResize),window.removeEventListener("orientationchange",this.onResize),window.visualViewport?.removeEventListener("resize",this.onResize),document.removeEventListener("visibilitychange",this.onVisibility),this.input.dispose(),this.audio.dispose(),this.mat.dispose(),this.renderer.dispose()}}const Dc=document.getElementById("scene"),Ic=document.getElementById("boot");if(!Dc||!Ic)throw new Error("Missing canvas or boot element");const hr=()=>{const s=document.getElementById("app");s&&(s.style.height=`${window.visualViewport?.height??window.innerHeight}px`)};hr();window.addEventListener("resize",hr);window.addEventListener("orientationchange",()=>setTimeout(hr,120));window.visualViewport?.addEventListener("resize",hr);new Ag(Dc,Ic);
