(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1004,m=1005,h=1006,g=1007,_=1008,v=1009,y=1010,b=1011,x=1012,S=1013,C=1014,w=1015,T=1016,E=1017,D=1018,O=1020,k=35902,A=35899,j=1021,ee=1022,M=1023,te=1026,N=1027,ne=1028,re=1029,ie=1030,ae=1031,oe=1033,se=33776,ce=33777,le=33778,P=33779,ue=35840,de=35841,fe=35842,pe=35843,me=36196,he=37492,ge=37496,_e=37488,ve=37489,ye=37490,be=37491,xe=37808,Se=37809,Ce=37810,we=37811,Te=37812,Ee=37813,De=37814,Oe=37815,ke=37816,Ae=37817,je=37818,Me=37819,Ne=37820,F=37821,Pe=36492,Fe=36494,Ie=36495,I=36283,Le=36284,Re=36285,ze=36286,Be=2300,Ve=2301,He=2302,Ue=2303,We=2400,Ge=2401,Ke=2402,qe=3200,Je=`srgb`,Ye=`srgb-linear`,Xe=`linear`,Ze=`srgb`,Qe=7680,$e=35044,et=35048,tt=2e3;function nt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function rt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function it(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function at(){let e=it(`canvas`);return e.style.display=`block`,e}var ot={};function st(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ct(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=ct(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=ct(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function lt(...e){let t=e.join(` `);t in ot||(ot[t]=!0,L(...e))}function ut(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var dt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ft=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},pt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),mt=1234567,ht=Math.PI/180,gt=180/Math.PI;function _t(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pt[e&255]+pt[e>>8&255]+pt[e>>16&255]+pt[e>>24&255]+`-`+pt[t&255]+pt[t>>8&255]+`-`+pt[t>>16&15|64]+pt[t>>24&255]+`-`+pt[n&63|128]+pt[n>>8&255]+`-`+pt[n>>16&255]+pt[n>>24&255]+pt[r&255]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]).toLowerCase()}function vt(e,t,n){return Math.max(t,Math.min(n,e))}function yt(e,t){return(e%t+t)%t}function bt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function xt(e,t,n){return e===t?0:(n-e)/(t-e)}function St(e,t,n){return(1-n)*e+n*t}function Ct(e,t,n,r){return St(e,t,1-Math.exp(-n*r))}function wt(e,t=1){return t-Math.abs(yt(e,t*2)-t)}function Tt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Et(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Dt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ot(e,t){return e+Math.random()*(t-e)}function kt(e){return e*(.5-Math.random())}function At(e){e!==void 0&&(mt=e);let t=mt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jt(e){return e*ht}function Mt(e){return e*gt}function Nt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Pt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ft(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function It(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Lt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var zt={DEG2RAD:ht,RAD2DEG:gt,generateUUID:_t,clamp:vt,euclideanModulo:yt,mapLinear:bt,inverseLerp:xt,lerp:St,damp:Ct,pingpong:wt,smoothstep:Tt,smootherstep:Et,randInt:Dt,randFloat:Ot,randFloatSpread:kt,seededRandom:At,degToRad:jt,radToDeg:Mt,isPowerOfTwo:Nt,ceilPowerOfTwo:Pt,floorPowerOfTwo:Ft,setQuaternionFromProperEuler:It,normalize:Rt,denormalize:Lt};o=Symbol.iterator;var z=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=z,e.prototype.isVector2=!0;var Bt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var B=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ht.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ht.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vt.copy(this).projectOnVector(e),this.sub(Vt)}reflect(e){return this.sub(Vt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=B,t.prototype.isVector3=!0;var Vt=new B,Ht=new Bt,V=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return lt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ut.makeScale(e,t)),this}rotate(e){return lt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ut.makeRotation(-e)),this}translate(e,t){return lt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ut.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=V,n.prototype.isMatrix3=!0;var Ut=new V,Wt=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kt(){let e={enabled:!0,workingColorSpace:Ye,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Jt(e.r),e.g=Jt(e.g),e.b=Jt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Yt(e.r),e.g=Yt(e.g),e.b=Yt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Xe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return lt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return lt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ye]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:Wt,fromXYZ:Gt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:r,transfer:Ze,toXYZ:Wt,fromXYZ:Gt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),e}var qt=Kt();function Jt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Yt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Xt,Zt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xt===void 0&&(Xt=it(`canvas`)),Xt.width=e.width,Xt.height=e.height;let t=Xt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Xt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=it(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Jt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Jt(t[e]/255)*255):t[e]=Jt(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Qt=0,$t=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qt++}),this.uuid=_t(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(en(r[t].image)):e.push(en(r[t]))}else e=en(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function en(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Zt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var tn=0,nn=new B,rn=class e extends ft{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=h,o=_,s=M,c=v,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tn++}),this.uuid=_t(),this.name=``,this.source=new $t(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nn).x}get height(){return this.source.getSize(nn).y}get depth(){return this.source.getSize(nn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null,rn.DEFAULT_MAPPING=300,rn.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var an=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=an,r.prototype.isVector4=!0;var on=class extends ft{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];let r=new rn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:h,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new $t(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},sn=class extends on{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},cn=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ln=class extends rn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},un=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/dn.setFromMatrixColumn(e,0).length(),i=1/dn.setFromMatrixColumn(e,1).length(),a=1/dn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pn,e,mn)}lookAt(e,t,n){let r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),hn.crossVectors(n,_n),hn.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),hn.crossVectors(n,_n)),hn.normalize(),gn.crossVectors(_n,hn),r[0]=hn.x,r[4]=gn.x,r[8]=_n.x,r[1]=hn.y,r[5]=gn.y,r[9]=_n.y,r[2]=hn.z,r[6]=gn.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],N=r[11],ne=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*N,i[12]=a*w+o*O+s*ee+c*ne,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*N,i[13]=l*w+u*O+d*ee+f*ne,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*N,i[14]=p*w+m*O+h*ee+g*ne,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*N,i[15]=_*w+v*O+y*ee+b*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=dn.set(r[0],r[1],r[2]).length(),o=dn.set(r[4],r[5],r[6]).length(),s=dn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),fn.copy(this);let c=1/a,l=1/o,u=1/s;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=l,fn.elements[5]*=l,fn.elements[6]*=l,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=tt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=tt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=un,i.prototype.isMatrix4=!0;var dn=new B,fn=new un,pn=new B(0,0,0),mn=new B(1,1,1),hn=new B,gn=new B,_n=new B,vn=new un,yn=new Bt,bn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-vt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yn.setFromEuler(this),this.setFromQuaternion(yn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER=`XYZ`;var xn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Sn=0,Cn=new B,wn=new Bt,Tn=new un,En=new B,Dn=new B,On=new B,kn=new Bt,An=new B(1,0,0),jn=new B(0,1,0),Mn=new B(0,0,1),Nn={type:`added`},Pn={type:`removed`},Fn={type:`childadded`,child:null},In={type:`childremoved`,child:null},Ln=class e extends ft{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sn++}),this.uuid=_t(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new bn,r=new Bt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new un},normalMatrix:{value:new V}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.multiply(wn),this}rotateOnWorldAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.premultiply(wn),this}rotateX(e){return this.rotateOnAxis(An,e)}rotateY(e){return this.rotateOnAxis(jn,e)}rotateZ(e){return this.rotateOnAxis(Mn,e)}translateOnAxis(e,t){return Cn.copy(e).applyQuaternion(this.quaternion),this.position.add(Cn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(An,e)}translateY(e){return this.translateOnAxis(jn,e)}translateZ(e){return this.translateOnAxis(Mn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?En.copy(e):En.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Dn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Dn,En,this.up):Tn.lookAt(En,Dn,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),wn.setFromRotationMatrix(Tn),this.quaternion.premultiply(wn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nn),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pn),In.child=e,this.dispatchEvent(In),In.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nn),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,e,On),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,kn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Ln.DEFAULT_UP=new B(0,1,0),Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=class extends Ln{constructor(){super(),this.isGroup=!0,this.type=`Group`}},zn={type:`move`},Bn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Un={h:0,s:0,l:0};function Wn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=qt.workingColorSpace){if(e=yt(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Wn(i,r,e+1/3),this.g=Wn(i,r,e),this.b=Wn(i,r,e-1/3)}return qt.colorSpaceToWorking(this,r),this}setStyle(e,t=Je){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){let n=Vn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jt(e.r),this.g=Jt(e.g),this.b=Jt(e.b),this}copyLinearToSRGB(e){return this.r=Yt(e.r),this.g=Yt(e.g),this.b=Yt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return qt.workingToColorSpace(Gn.copy(this),e),Math.round(vt(Gn.r*255,0,255))*65536+Math.round(vt(Gn.g*255,0,255))*256+Math.round(vt(Gn.b*255,0,255))}getHexString(e=Je){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.workingToColorSpace(Gn.copy(this),t);let n=Gn.r,r=Gn.g,i=Gn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=qt.workingColorSpace){return qt.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Je){qt.workingToColorSpace(Gn.copy(this),e);let t=Gn.r,n=Gn.g,r=Gn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Un);let n=St(Hn.h,Un.h,t),r=St(Hn.s,Un.s,t),i=St(Hn.l,Un.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new H;H.NAMES=Vn;var Kn=class extends Ln{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new B,Jn=new B,Yn=new B,Xn=new B,Zn=new B,Qn=new B,$n=new B,er=new B,tr=new B,nr=new B,rr=new an,ir=new an,ar=new an,or=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qn.subVectors(e,t),r.cross(qn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){qn.subVectors(r,t),Jn.subVectors(n,t),Yn.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(Jn),s=qn.dot(Yn),c=Jn.dot(Jn),l=Jn.dot(Yn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xn)!==null&&Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Xn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Xn.x),s.addScaledVector(a,Xn.y),s.addScaledVector(o,Xn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return rr.setScalar(0),ir.setScalar(0),ar.setScalar(0),rr.fromBufferAttribute(e,t),ir.fromBufferAttribute(e,n),ar.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(rr,i.x),a.addScaledVector(ir,i.y),a.addScaledVector(ar,i.z),a}static isFrontFacing(e,t,n,r){return qn.subVectors(n,t),Jn.subVectors(e,t),qn.cross(Jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),qn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Zn.subVectors(r,n),Qn.subVectors(i,n),er.subVectors(e,n);let s=Zn.dot(er),c=Qn.dot(er);if(s<=0&&c<=0)return t.copy(n);tr.subVectors(e,r);let l=Zn.dot(tr),u=Qn.dot(tr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Zn,a);nr.subVectors(e,i);let f=Zn.dot(nr),p=Qn.dot(nr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Qn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return $n.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector($n,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Zn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sr=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(lr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(lr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=lr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,lr):lr.fromBufferAttribute(r,t),lr.applyMatrix4(e.matrixWorld),this.expandByPoint(lr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,lr),lr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),vr.subVectors(this.max,_r),dr.subVectors(e.a,_r),fr.subVectors(e.b,_r),pr.subVectors(e.c,_r),mr.subVectors(fr,dr),hr.subVectors(pr,fr),gr.subVectors(dr,pr);let t=[0,-mr.z,mr.y,0,-hr.z,hr.y,0,-gr.z,gr.y,mr.z,0,-mr.x,hr.z,0,-hr.x,gr.z,0,-gr.x,-mr.y,mr.x,0,-hr.y,hr.x,0,-gr.y,gr.x,0];return!xr(t,dr,fr,pr,vr)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,dr,fr,pr,vr))?!1:(yr.crossVectors(mr,hr),t=[yr.x,yr.y,yr.z],xr(t,dr,fr,pr,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,lr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(lr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},cr=[new B,new B,new B,new B,new B,new B,new B,new B],lr=new B,ur=new sr,dr=new B,fr=new B,pr=new B,mr=new B,hr=new B,gr=new B,_r=new B,vr=new B,yr=new B,br=new B;function xr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){br.fromArray(e,a);let o=i.x*Math.abs(br.x)+i.y*Math.abs(br.y)+i.z*Math.abs(br.z),s=t.dot(br),c=n.dot(br),l=r.dot(br);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Sr=Cr();function Cr(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=new Uint32Array(512),i=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function wr(e){Math.abs(e)>65504&&L(`DataUtils.toHalfFloat(): Value out of range.`),e=vt(e,-65504,65504),Sr.floatView[0]=e;let t=Sr.uint32View[0],n=t>>23&511;return Sr.baseTable[n]+((t&8388607)>>Sr.shiftTable[n])}function Tr(e){let t=e>>10;return Sr.uint32View[0]=Sr.mantissaTable[Sr.offsetTable[t]+(e&1023)]+Sr.exponentTable[t],Sr.floatView[0]}var Er=class{static toHalfFloat(e){return wr(e)}static fromHalfFloat(e){return Tr(e)}},Dr=new B,Or=new z,kr=0,U=class extends ft{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=$e,this.updateRanges=[],this.gpuType=w,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix4(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyNormalMatrix(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.transformDirection(e),this.setXYZ(t,Dr.x,Dr.y,Dr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Ar=class extends U{constructor(e,t,n){super(new Uint16Array(e),t,n)}},jr=class extends U{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Mr=class extends U{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nr=new sr,Pr=new B,Fr=new B,Ir=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Nr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Pr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Fr)),this.expandByPoint(Pr.copy(e.center).sub(Fr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lr=0,Rr=new un,zr=new Ln,Br=new B,Vr=new sr,Hr=new sr,Ur=new B,Wr=class e extends ft{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lr++}),this.uuid=_t(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(nt(e)?jr:Ar)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rr.makeRotationFromQuaternion(e),this.applyMatrix4(Rr),this}rotateX(e){return Rr.makeRotationX(e),this.applyMatrix4(Rr),this}rotateY(e){return Rr.makeRotationY(e),this.applyMatrix4(Rr),this}rotateZ(e){return Rr.makeRotationZ(e),this.applyMatrix4(Rr),this}translate(e,t,n){return Rr.makeTranslation(e,t,n),this.applyMatrix4(Rr),this}scale(e,t,n){return Rr.makeScale(e,t,n),this.applyMatrix4(Rr),this}lookAt(e){return zr.lookAt(e),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Mr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Vr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ur.addVectors(this.boundingBox.min,Vr.min),this.boundingBox.expandByPoint(Ur),Ur.addVectors(this.boundingBox.max,Vr.max),this.boundingBox.expandByPoint(Ur)):(this.boundingBox.expandByPoint(Vr.min),this.boundingBox.expandByPoint(Vr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Vr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Hr.setFromBufferAttribute(n),this.morphTargetsRelative?(Ur.addVectors(Vr.min,Hr.min),Vr.expandByPoint(Ur),Ur.addVectors(Vr.max,Hr.max),Vr.expandByPoint(Ur)):(Vr.expandByPoint(Hr.min),Vr.expandByPoint(Hr.max))}Vr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Ur.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Ur));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Ur.fromBufferAttribute(a,t),o&&(Br.fromBufferAttribute(e,t),Ur.add(Br)),r=Math.max(r,n.distanceToSquared(Ur))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new U(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new U(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ur.fromBufferAttribute(e,t),Ur.normalize(),e.setXYZ(t,Ur.x,Ur.y,Ur.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new U(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Gr=new B,Kr=new B,qr=new V,Jr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Gr.subVectors(n,t).cross(Kr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Gr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qr.getNormalMatrix(e),r=this.coplanarPoint(Gr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Yr=0,Xr=class extends ft{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yr++}),this.uuid=_t(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qe,this.stencilZFail=Qe,this.stencilZPass=Qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Jr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Zr=new B,Qr=new B,$r=new B,ei=new B,ti=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zr.copy(this.origin).addScaledVector(this.direction,t),Zr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qr.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Qr);let i=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=ei.dot(this.direction),s=-ei.dot($r),c=ei.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qr).addScaledVector($r,d),f}intersectSphere(e,t){if(e.radius<0)return null;Zr.subVectors(e.center,this.origin);let n=Zr.dot(this.direction),r=Zr.dot(Zr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Zr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,N=C/w,ne=1/w,re=T-te*D,ie=E-N*D,ae=O-te*A,oe=k-N*A,se=j-te*M,ce=ee-N*M,le=se*oe-ce*ae,P=re*ce-ie*se,ue=ae*ie-oe*re;if(r){if(le<0||P<0||ue<0)return null}else if((le<0||P<0||ue<0)&&(le>0||P>0||ue>0))return null;let de=le+P+ue;if(de===0)return null;let fe=ne*(le*D+P*A+ue*M);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ni=class extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ri=new un,ii=new ti,ai=new Ir,oi=new B,si=new B,ci=new B,li=new B,ui=new B,di=new B,fi=new B,pi=new B,W=class extends Ln{constructor(e=new Wr,t=new ni){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){di.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ui.fromBufferAttribute(s,e),a?di.addScaledVector(ui,r):di.addScaledVector(ui.sub(t),r))}t.add(di)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ai.copy(n.boundingSphere),ai.applyMatrix4(i),ii.copy(e.ray).recast(e.near),!(ai.containsPoint(ii.origin)===!1&&(ii.intersectSphere(ai,oi)===null||ii.origin.distanceToSquared(oi)>(e.far-e.near)**2))&&(ri.copy(i).invert(),ii.copy(e.ray).applyMatrix4(ri),(n.boundingBox===null||ii.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=hi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=hi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=hi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=hi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function mi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;pi.copy(s),pi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(pi);return l<n.near||l>n.far?null:{distance:l,point:pi.clone(),object:e}}function hi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,si),e.getVertexPosition(c,ci),e.getVertexPosition(l,li);let u=mi(e,t,n,r,si,ci,li,fi);if(u){let e=new B;or.getBarycoord(fi,si,ci,li,e),i&&(u.uv=or.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=or.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=or.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};or.getNormal(si,ci,li,t.normal),u.face=t,u.barycoord=e}return u}var gi=class extends rn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_i=class extends U{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vi=new un,yi=new un,bi=[],xi=new sr,Si=new un,Ci=new W,wi=new Ir,Ti=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Si)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),xi.copy(e.boundingBox).applyMatrix4(vi),this.boundingBox.union(xi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ir),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),wi.copy(e.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(wi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ci.geometry=this.geometry,Ci.material=this.material,Ci.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wi.copy(this.boundingSphere),wi.applyMatrix4(n),e.ray.intersectsSphere(wi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,vi),yi.multiplyMatrices(n,vi),Ci.matrixWorld=yi,Ci.raycast(e,bi);for(let e=0,n=bi.length;e<n;e++){let n=bi[e];n.instanceId=i,n.object=this,t.push(n)}bi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new gi(new Float32Array(r*this.count),r,this.count,ne,w));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ei=new Ir,Di=new z(.5,.5),Oi=new B,ki=class{constructor(e=new Jr,t=new Jr,n=new Jr,r=new Jr,i=new Jr,a=new Jr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476+Di.distanceTo(e.center),Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Oi.x=r.normal.x>0?e.max.x:e.min.x,Oi.y=r.normal.y>0?e.max.y:e.min.y,Oi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ai=class extends Xr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ji=new un,Mi=new ti,Ni=new Ir,Pi=new B,Fi=class extends Ln{constructor(e=new Wr,t=new Ai){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ni.copy(n.boundingSphere),Ni.applyMatrix4(r),Ni.radius+=i,e.ray.intersectsSphere(Ni)===!1)return;ji.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(ji);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Pi.fromBufferAttribute(l,n),Ii(Pi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Pi.fromBufferAttribute(l,a),Ii(Pi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ii(e,t,n,r,i,a,o){let s=Mi.distanceSqToPoint(e);if(s<n){let n=new B;Mi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Li=class extends rn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ri=class extends rn{constructor(e,t,n=C,r,i,a,o=f,s=f,c,l=te,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $t(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},zi=class extends Ri{constructor(e,t=C,n=301,r,i,a=f,o=f,s,c=te){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Bi=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vi=class e extends Wr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Mr(c,3)),this.setAttribute(`normal`,new Mr(l,3)),this.setAttribute(`uv`,new Mr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Hi=class e extends Wr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Mr(a,3)),this.setAttribute(`normal`,new Mr(o,3)),this.setAttribute(`uv`,new Mr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ui=class e extends Wr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Mr(u,3)),this.setAttribute(`normal`,new Mr(d,3)),this.setAttribute(`uv`,new Mr(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new z:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,r=[],i=[],a=[],o=new B,s=new un;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(vt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(vt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gi=class extends Wi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new z){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ki=class extends Gi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function qi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ji=new B,Yi=new B,Xi=new qi,Zi=new qi,Qi=new qi,$i=class extends Wi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Yi.subVectors(r[0],r[1]).add(r[0]),c=Yi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ji.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ji),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Xi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Zi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Qi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Xi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Zi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Qi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Xi.calc(s),Zi.calc(s),Qi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ea(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ta(e,t){let n=1-e;return n*n*t}function na(e,t){return 2*(1-e)*e*t}function ra(e,t){return e*e*t}function ia(e,t,n,r){return ta(e,t)+na(e,n)+ra(e,r)}function aa(e,t){let n=1-e;return n*n*n*t}function oa(e,t){let n=1-e;return 3*n*n*e*t}function sa(e,t){return 3*(1-e)*e*e*t}function ca(e,t){return e*e*e*t}function la(e,t,n,r,i){return aa(e,t)+oa(e,n)+sa(e,r)+ca(e,i)}var ua=class extends Wi{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(la(e,r.x,i.x,a.x,o.x),la(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},da=class extends Wi{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(la(e,r.x,i.x,a.x,o.x),la(e,r.y,i.y,a.y,o.y),la(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fa=class extends Wi{constructor(e=new z,t=new z){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends Wi{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends Wi{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ia(e,r.x,i.x,a.x),ia(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends Wi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ia(e,r.x,i.x,a.x),ia(e,r.y,i.y,a.y),ia(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=Object.freeze({__proto__:null,ArcCurve:Ki,CatmullRomCurve3:$i,CubicBezierCurve:ua,CubicBezierCurve3:da,EllipseCurve:Gi,LineCurve:fa,LineCurve3:pa,QuadraticBezierCurve:ma,QuadraticBezierCurve3:ha,SplineCurve:class extends Wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new z){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ea(o,s.x,c.x,l.x,u.x),ea(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this}}}),_a=class e extends Wr{constructor(e=[new z(0,-.5),new z(.5,0),new z(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=vt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new B,d=new z,f=new B,p=new B,m=new B,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Mr(a,3)),this.setAttribute(`uv`,new Mr(o,2)),this.setAttribute(`normal`,new Mr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},va=class e extends Wr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Mr(p,3)),this.setAttribute(`normal`,new Mr(m,3)),this.setAttribute(`uv`,new Mr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ya=class e extends Wr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new B,p=new z;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Mr(s,3)),this.setAttribute(`normal`,new Mr(c,3)),this.setAttribute(`uv`,new Mr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ba=class e extends Wr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Mr(p,3)),this.setAttribute(`normal`,new Mr(m,3)),this.setAttribute(`uv`,new Mr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},xa=class e extends Wr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new B,f=new B,p=new B;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Mr(c,3)),this.setAttribute(`normal`,new Mr(l,3)),this.setAttribute(`uv`,new Mr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Sa=class e extends Wr{constructor(e=new ha(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,s=new B,c=new z,l=new B,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Mr(u,3)),this.setAttribute(`normal`,new Mr(d,3)),this.setAttribute(`uv`,new Mr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ga[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ca(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ta(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ta(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function wa(e){let t={};for(let n=0;n<e.length;n++){let r=Ca(e[n]);for(let e in r)t[e]=r[e]}return t}function Ta(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ea(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Da(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var Oa={clone:Ca,merge:wa},ka=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Aa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ja=class extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ka,this.fragmentShader=Aa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ca(e.uniforms),this.uniformsGroups=Ea(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new an().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new un().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ma=class extends ja{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Na=class extends Xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new H(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pa=class extends Na{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new H(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new H(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new H(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Fa=class extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=qe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ia=class extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function La(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ra(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var za=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ba=class extends za{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:We,endingEnd:We}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ge:i=e,o=2*t-n;break;case Ke:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ge:a=e,s=2*n-t;break;case Ke:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Va=class extends za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ha=class extends za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ua=class extends za{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ka(n,t,g,y,r);i[p]=Wa(x,o,_,b,m)}return i}};function Wa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ga(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ka(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Wa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ga(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var qa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=La(t,this.TimeBufferType),this.values=La(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:La(e.times,Array),values:La(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ra(e.settings)&&(n.settings={inTangents:La(e.settings.inTangents,Array),outTangents:La(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ua(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Be:t=this.InterpolantFactoryMethodDiscrete;break;case Ve:t=this.InterpolantFactoryMethodLinear;break;case He:t=this.InterpolantFactoryMethodSmooth;break;case Ue:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Be;case this.InterpolantFactoryMethodLinear:return Ve;case this.InterpolantFactoryMethodSmooth:return He;case this.InterpolantFactoryMethodBezier:return Ue}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ra(this.settings)&&(Ja(this.settings.inTangents,e),Ja(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&rt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===He,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ra(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ja(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}qa.prototype.ValueTypeName=``,qa.prototype.TimeBufferType=Float32Array,qa.prototype.ValueBufferType=Float32Array,qa.prototype.DefaultInterpolation=Ve;var Ya=class extends qa{constructor(e,t,n){super(e,t,n)}};Ya.prototype.ValueTypeName=`bool`,Ya.prototype.ValueBufferType=Array,Ya.prototype.DefaultInterpolation=Be,Ya.prototype.InterpolantFactoryMethodLinear=void 0,Ya.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends qa{constructor(e,t,n,r){super(e,t,n,r)}};Xa.prototype.ValueTypeName=`color`;var Za=class extends qa{constructor(e,t,n,r){super(e,t,n,r)}};Za.prototype.ValueTypeName=`number`;var Qa=class extends za{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Bt.slerpFlat(i,0,a,c-o,a,c,s);return i}},$a=class extends qa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}};$a.prototype.ValueTypeName=`quaternion`,$a.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends qa{constructor(e,t,n){super(e,t,n)}};eo.prototype.ValueTypeName=`string`,eo.prototype.ValueBufferType=Array,eo.prototype.DefaultInterpolation=Be,eo.prototype.InterpolantFactoryMethodLinear=void 0,eo.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends qa{constructor(e,t,n,r){super(e,t,n,r)}};to.prototype.ValueTypeName=`vector`;var no=class extends Ln{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ro=class extends no{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},io=new un,ao=new B,oo=new B,so=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=v,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ki,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ao.setFromMatrixPosition(e.matrixWorld),t.position.copy(ao),oo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(io,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},co=new B,lo=new Bt,uo=new B,fo=class extends Ln{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=tt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(co,lo,uo),uo.x===1&&uo.y===1&&uo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,lo,uo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(co,lo,uo),uo.x===1&&uo.y===1&&uo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,lo,uo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},po=new B,mo=new z,ho=new z,go=class extends fo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ht*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gt*2*Math.atan(Math.tan(ht*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){po.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(po.x,po.y).multiplyScalar(-e/po.z),po.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(po.x,po.y).multiplyScalar(-e/po.z)}getViewSize(e,t){return this.getViewBounds(e,mo,ho),t.subVectors(ho,mo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ht*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_o=class extends so{constructor(){super(new go(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=gt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},vo=class extends no{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new _o}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},yo=class extends fo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bo=class extends so{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xo=class extends no{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new bo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},So=class extends Wr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Co=-90,wo=1,To=class extends Ln{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new go(Co,wo,e,t);r.layers=this.layers,this.add(r);let i=new go(Co,wo,e,t);i.layers=this.layers,this.add(i);let a=new go(Co,wo,e,t);a.layers=this.layers,this.add(a);let o=new go(Co,wo,e,t);o.layers=this.layers,this.add(o);let s=new go(Co,wo,e,t);s.layers=this.layers,this.add(s);let c=new go(Co,wo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Eo=class extends go{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Do=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Oo.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Oo(){this._document.hidden===!1&&this.reset()}var ko=`\\[\\]\\.:\\/`,Ao=RegExp(`[\\[\\]\\.:\\/]`,`g`),jo=`[^\\[\\]\\.:\\/]`,Mo=`[^`+ko.replace(`\\.`,``)+`]`,No=`((?:WC+[\\/:])*)`.replace(`WC`,jo),Po=`(WCOD+)?`.replace(`WCOD`,Mo),Fo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,jo),Io=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,jo),Lo=RegExp(`^`+No+Po+Fo+Io+`$`),Ro=[`material`,`materials`,`bones`,`map`],zo=class{constructor(e,t,n){let r=n||Bo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ao,``)}static parseTrackName(e){let t=Lo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ro.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bo.Composite=zo,Bo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Bo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Bo.prototype.GetterByBindingType=[Bo.prototype._getValue_direct,Bo.prototype._getValue_array,Bo.prototype._getValue_arrayElement,Bo.prototype._getValue_toArray],Bo.prototype.SetterByBindingTypeAndVersioning=[[Bo.prototype._setValue_direct,Bo.prototype._setValue_direct_setNeedsUpdate,Bo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bo.prototype._setValue_array,Bo.prototype._setValue_array_setNeedsUpdate,Bo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bo.prototype._setValue_arrayElement,Bo.prototype._setValue_arrayElement_setNeedsUpdate,Bo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bo.prototype._setValue_fromArray,Bo.prototype._setValue_fromArray_setNeedsUpdate,Bo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vo=new un,Ho=class{constructor(e,t,n=0,r=1/0){this.ray=new ti(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new xn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):R(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Vo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vo),this}intersectObject(e,t=!0,n=[]){return Wo(e,this,n,t),n.sort(Uo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Wo(e[r],this,n,t);return n.sort(Uo),n}};function Uo(e,t){return e.distance-t.distance}function Wo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Wo(r[e],t,n,!0)}}a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function Go(e,t,n,r){let i=Ko(r);switch(n){case j:return e*t;case ne:return e*t/i.components*i.byteLength;case re:return e*t/i.components*i.byteLength;case ie:return e*t*2/i.components*i.byteLength;case ae:return e*t*2/i.components*i.byteLength;case ee:return e*t*3/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case oe:return e*t*4/i.components*i.byteLength;case se:case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case le:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:case pe:return Math.max(e,16)*Math.max(t,8)/4;case ue:case fe:return Math.max(e,8)*Math.max(t,8)/2;case me:case he:case _e:case ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ge:case ye:case be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ne:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case F:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pe:case Fe:case Ie:return Math.ceil(e/4)*Math.ceil(t/4)*16;case I:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Re:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ko(e){switch(e){case v:case y:return{byteLength:1,components:1};case x:case b:case T:return{byteLength:2,components:1};case E:case D:return{byteLength:2,components:4};case C:case S:case w:return{byteLength:4,components:1};case k:case A:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function qo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Jo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Yo={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},G={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},Xo={basic:{uniforms:wa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:Yo.meshbasic_vert,fragmentShader:Yo.meshbasic_frag},lambert:{uniforms:wa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:Yo.meshlambert_vert,fragmentShader:Yo.meshlambert_frag},phong:{uniforms:wa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yo.meshphong_vert,fragmentShader:Yo.meshphong_frag},standard:{uniforms:wa([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yo.meshphysical_vert,fragmentShader:Yo.meshphysical_frag},toon:{uniforms:wa([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new H(0)}}]),vertexShader:Yo.meshtoon_vert,fragmentShader:Yo.meshtoon_frag},matcap:{uniforms:wa([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:Yo.meshmatcap_vert,fragmentShader:Yo.meshmatcap_frag},points:{uniforms:wa([G.points,G.fog]),vertexShader:Yo.points_vert,fragmentShader:Yo.points_frag},dashed:{uniforms:wa([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yo.linedashed_vert,fragmentShader:Yo.linedashed_frag},depth:{uniforms:wa([G.common,G.displacementmap]),vertexShader:Yo.depth_vert,fragmentShader:Yo.depth_frag},normal:{uniforms:wa([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:Yo.meshnormal_vert,fragmentShader:Yo.meshnormal_frag},sprite:{uniforms:wa([G.sprite,G.fog]),vertexShader:Yo.sprite_vert,fragmentShader:Yo.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yo.background_vert,fragmentShader:Yo.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:Yo.backgroundCube_vert,fragmentShader:Yo.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yo.cube_vert,fragmentShader:Yo.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yo.equirect_vert,fragmentShader:Yo.equirect_frag},distance:{uniforms:wa([G.common,G.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yo.distance_vert,fragmentShader:Yo.distance_frag},shadow:{uniforms:wa([G.lights,G.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:Yo.shadow_vert,fragmentShader:Yo.shadow_frag}};Xo.physical={uniforms:wa([Xo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:Yo.meshphysical_vert,fragmentShader:Yo.meshphysical_frag};var Zo={r:0,b:0,g:0},Qo=new un,$o=new V;$o.set(-1,0,0,0,1,0,0,0,1);function es(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new Vi(1,1,1),new ja({name:`BackgroundCubeMaterial`,uniforms:Ca(Xo.backgroundCube.uniforms),vertexShader:Xo.backgroundCube.vertexShader,fragmentShader:Xo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Qo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply($o),l.material.toneMapped=qt.getTransfer(i.colorSpace)!==Ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new va(2,2),new ja({name:`BackgroundMaterial`,uniforms:Ca(Xo.background.uniforms),vertexShader:Xo.background.vertexShader,fragmentShader:Xo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=qt.getTransfer(i.colorSpace)!==Ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Zo,Da(e)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ts(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ns(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function rs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function is(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Jr,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var as=4,os=6,ss=20,cs=256,ls=new yo,us=new H,ds=null,fs=0,ps=0,ms=!1,hs=new B,gs=new B,_s=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=hs}=i;ds=this._renderer.getRenderTarget(),fs=this._renderer.getActiveCubeFace(),ps=this._renderer.getActiveMipmapLevel(),ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ws(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ds,fs,ps),this._renderer.xr.enabled=ms,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ds=this._renderer.getRenderTarget(),fs=this._renderer.getActiveCubeFace(),ps=this._renderer.getActiveMipmapLevel(),ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:h,minFilter:h,generateMipmaps:!1,type:T,format:M,colorSpace:Ye,depthBuffer:!1},r=ys(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ys(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vs(r)),this._blurMaterial=Ss(r,e,t),this._ggxMaterial=xs(r,e,t)}return r}_compileMaterial(e){let t=new W(new Wr,e);this._renderer.compile(t,ls)}_sceneToCubeUV(e,t,n,r,i){let a=new go(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(us),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new Vi,new ni({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(us),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;bs(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ws()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;bs(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ls)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-as?n-d+as:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,bs(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ls),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,bs(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ls)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];bs(t,3*l*(r>this._lodMax-as?r-this._lodMax+as:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,ls)}};function vs(e){let t=[],n=[],r=e,i=e-as+1+os;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?gs.set(1,r,n):e===1?gs.set(-n,1,-r):e===2?gs.set(-n,r,1):e===3?gs.set(-1,r,-n):e===4?gs.set(-n,-1,r):gs.set(n,r,-1),gs.toArray(l,(e*6+t)*3)}}let u=new Wr;u.setAttribute(`position`,new U(c,3)),u.setAttribute(`outputDirection`,new U(l,3)),n.push(new W(u,null)),r>as&&r--}return{lodMeshes:n,sizeLods:t}}function ys(e,t,n){let r=new sn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function bs(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function xs(e,t,n){return new ja({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ss(e,t,n){return new ja({name:`SphericalGaussianBlur`,defines:{SAMPLES:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cs(){return new ja({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ts(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ws(){return new ja({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ts(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Es=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Li(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vi(5,5,5),i=new ja({name:`CubemapFromEquirect`,uniforms:Ca(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=h),new To(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ds(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Es(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new _s(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new _s(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Os(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&lt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ks(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?jr:Ar)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function As(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function js(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ms(e,t,n){let r=new WeakMap,i=new an;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new cn(h,p,m,u);g.type=w,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ns(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ps={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Fs(e,t,n,r,i,a){let o=new sn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Wr;l.setAttribute(`position`,new Mr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Mr([0,2,0,0,2,0],2));let u=new Ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new W(l,u),f=new yo(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new sn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new sn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},qt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Ps[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Is=new rn,Ls=new Ri(1,1),Rs=new cn,zs=new ln,Bs=new Li,Vs=[],Hs=[],Us=new Float32Array(16),Ws=new Float32Array(9),Gs=new Float32Array(4);function Ks(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Vs[i];if(a===void 0&&(a=new Float32Array(i),Vs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function qs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Js(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ys(e,t){let n=Hs[t];n===void 0&&(n=new Int32Array(t),Hs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Xs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Zs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qs(n,t))return;e.uniform2fv(this.addr,t),Js(n,t)}}function Qs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(qs(n,t))return;e.uniform3fv(this.addr,t),Js(n,t)}}function $s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qs(n,t))return;e.uniform4fv(this.addr,t),Js(n,t)}}function ec(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Js(n,t)}else{if(qs(n,r))return;Gs.set(r),e.uniformMatrix2fv(this.addr,!1,Gs),Js(n,r)}}function tc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Js(n,t)}else{if(qs(n,r))return;Ws.set(r),e.uniformMatrix3fv(this.addr,!1,Ws),Js(n,r)}}function nc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(qs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Js(n,t)}else{if(qs(n,r))return;Us.set(r),e.uniformMatrix4fv(this.addr,!1,Us),Js(n,r)}}function rc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qs(n,t))return;e.uniform2iv(this.addr,t),Js(n,t)}}function ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qs(n,t))return;e.uniform3iv(this.addr,t),Js(n,t)}}function oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qs(n,t))return;e.uniform4iv(this.addr,t),Js(n,t)}}function sc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qs(n,t))return;e.uniform2uiv(this.addr,t),Js(n,t)}}function lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qs(n,t))return;e.uniform3uiv(this.addr,t),Js(n,t)}}function uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qs(n,t))return;e.uniform4uiv(this.addr,t),Js(n,t)}}function dc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ls.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ls):a=Is,n.setTexture2D(t||a,i)}function fc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||zs,i)}function pc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Bs,i)}function mc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Rs,i)}function hc(e){switch(e){case 5126:return Xs;case 35664:return Zs;case 35665:return Qs;case 35666:return $s;case 35674:return ec;case 35675:return tc;case 35676:return nc;case 5124:case 35670:return rc;case 35667:case 35671:return ic;case 35668:case 35672:return ac;case 35669:case 35673:return oc;case 5125:return sc;case 36294:return cc;case 36295:return lc;case 36296:return uc;case 35678:case 36198:case 36298:case 36306:case 35682:return dc;case 35679:case 36299:case 36307:return fc;case 35680:case 36300:case 36308:case 36293:return pc;case 36289:case 36303:case 36311:case 36292:return mc}}function gc(e,t){e.uniform1fv(this.addr,t)}function _c(e,t){let n=Ks(t,this.size,2);e.uniform2fv(this.addr,n)}function vc(e,t){let n=Ks(t,this.size,3);e.uniform3fv(this.addr,n)}function yc(e,t){let n=Ks(t,this.size,4);e.uniform4fv(this.addr,n)}function bc(e,t){let n=Ks(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function xc(e,t){let n=Ks(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Sc(e,t){let n=Ks(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Cc(e,t){e.uniform1iv(this.addr,t)}function wc(e,t){e.uniform2iv(this.addr,t)}function Tc(e,t){e.uniform3iv(this.addr,t)}function Ec(e,t){e.uniform4iv(this.addr,t)}function Dc(e,t){e.uniform1uiv(this.addr,t)}function Oc(e,t){e.uniform2uiv(this.addr,t)}function kc(e,t){e.uniform3uiv(this.addr,t)}function Ac(e,t){e.uniform4uiv(this.addr,t)}function jc(e,t,n){let r=this.cache,i=t.length,a=Ys(n,i);qs(r,a)||(e.uniform1iv(this.addr,a),Js(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ls:Is;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Mc(e,t,n){let r=this.cache,i=t.length,a=Ys(n,i);qs(r,a)||(e.uniform1iv(this.addr,a),Js(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||zs,a[e])}function Nc(e,t,n){let r=this.cache,i=t.length,a=Ys(n,i);qs(r,a)||(e.uniform1iv(this.addr,a),Js(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Bs,a[e])}function Pc(e,t,n){let r=this.cache,i=t.length,a=Ys(n,i);qs(r,a)||(e.uniform1iv(this.addr,a),Js(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Rs,a[e])}function Fc(e){switch(e){case 5126:return gc;case 35664:return _c;case 35665:return vc;case 35666:return yc;case 35674:return bc;case 35675:return xc;case 35676:return Sc;case 5124:case 35670:return Cc;case 35667:case 35671:return wc;case 35668:case 35672:return Tc;case 35669:case 35673:return Ec;case 5125:return Dc;case 36294:return Oc;case 36295:return kc;case 36296:return Ac;case 35678:case 36198:case 36298:case 36306:case 35682:return jc;case 35679:case 36299:case 36307:return Mc;case 35680:case 36300:case 36308:case 36293:return Nc;case 36289:case 36303:case 36311:case 36292:return Pc}}var Ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hc(t.type)}},Lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fc(t.type)}},Rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g;function Bc(e,t){e.seq.push(t),e.map[t.id]=t}function Vc(e,t,n){let r=e.name,i=r.length;for(zc.lastIndex=0;;){let a=zc.exec(r),o=zc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Bc(n,l===void 0?new Ic(s,e,t):new Lc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Rc(s),Bc(n,e)),n=e}}}var Hc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Vc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Uc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Wc=37297,Gc=0;function Kc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var qc=new V;function Jc(e){qt._getMatrix(qc,qt.workingColorSpace,e);let t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(e)){case Xe:return[t,`LinearTransferOETF`];case Ze:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Yc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Kc(e.getShaderSource(t),r)}return i}function Xc(e,t){let n=Jc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Zc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Qc(e,t){let n=Zc[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var $c=new B;function el(){return qt.getLuminanceCoefficients($c),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${$c.x.toFixed(4)}, ${$c.y.toFixed(4)}, ${$c.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function tl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(il).join(`
`)}function nl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function rl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function il(e){return e!==``}function al(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ol(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sl=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(e){return e.replace(sl,ul)}var ll=new Map;function ul(e,t){let n=Yo[t];if(n===void 0){let e=ll.get(t);if(e!==void 0)n=Yo[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return cl(n)}var dl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(e){return e.replace(dl,pl)}function pl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ml(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var hl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function gl(e){return hl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var _l={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function vl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:_l[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var yl={302:`ENVMAP_MODE_REFRACTION`};function bl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:yl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var xl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Sl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:xl[e.combine]||`ENVMAP_BLENDING_NONE`}function Cl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function wl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=gl(n),l=vl(n),u=bl(n),d=Sl(n),f=Cl(n),p=tl(n),m=nl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(il).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(il).join(`
`),_.length>0&&(_+=`
`)):(g=[ml(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(il).join(`
`),_=[ml(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Yo.tonemapping_pars_fragment,n.toneMapping===0?``:Qc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Yo.colorspace_pars_fragment,Xc(`linearToOutputTexel`,n.outputColorSpace),el(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(il).join(`
`)),o=cl(o),o=al(o,n),o=ol(o,n),s=cl(s),s=al(s,n),s=ol(s,n),o=fl(o),s=fl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Uc(i,i.VERTEX_SHADER,y),S=Uc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Yc(i,x,`vertex`),n=Yc(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Hc(i,h),T=rl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Wc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Tl=0,El=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dl(e),t.set(e,n)),n}},Dl=class{constructor(e){this.id=Tl++,this.code=e,this.usedTimes=0}};function Ol(e){return e===1030||e===37490||e===36285}function kl(e,t,n,r,i,a){let o=new xn,s=new El,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Xo[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,te=h.isBatchedMesh===!0,N=!!i.map,ne=!!i.matcap,re=!!x,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.retroreflectivity>0,he=i.iridescence>0,ge=i.sheen>0,_e=i.transmission>0,ve=de&&!!i.anisotropyMap,ye=fe&&!!i.clearcoatMap,be=fe&&!!i.clearcoatNormalMap,xe=fe&&!!i.clearcoatRoughnessMap,Se=he&&!!i.iridescenceMap,Ce=he&&!!i.iridescenceThicknessMap,we=ge&&!!i.sheenColorMap,Te=ge&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=_e&&!!i.transmissionMap,Ae=_e&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,Ne=i.alphaTest>0,F=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let Ie={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:te,batchingColor:te&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:ne,envMap:re,envMapMode:re&&x.mapping,envMapCubeUVHeight:S,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Ol(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:ve,clearcoat:fe,clearcoatMap:ye,clearcoatNormalMap:be,clearcoatRoughnessMap:xe,dispersion:pe,retroreflection:me,iridescence:he,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:ge,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:_e,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ne,alphaHash:F,combine:i.combine,mapUv:N&&m(i.map.channel),aoMapUv:ie&&m(i.aoMap.channel),lightMapUv:ae&&m(i.lightMap.channel),bumpMapUv:oe&&m(i.bumpMap.channel),normalMapUv:se&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:P&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:ve&&m(i.anisotropyMap.channel),clearcoatMapUv:ye&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:be&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:Ae&&m(i.thicknessMap.channel),alphaMapUv:Me&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(se||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(N||Me),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&qt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&qt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Xo[t];n=Oa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new wl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Al(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function jl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ml(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Nl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||jl),r.length>1&&r.sort(t||Ml),i.length>1&&i.sort(t||Ml)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Pl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Nl,e.set(t,[i])):n>=r.length?(i=new Nl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Fl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new H};break;case`SpotLight`:n={position:new B,direction:new B,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function Il(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ll=0;function Rl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function zl(e){let t=new Fl,n=Il(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new un,o=new un;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Rl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ll++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Bl(e){let t=new zl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Vl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Bl(e),t.set(n,[a])):r>=i.length?(a=new Bl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Hl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ul=`uniform sampler2D shadow_pass;
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
}`,Wl=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Gl=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Kl=new un,ql=new B,Jl=new B;function Yl(e,t,n){let r=new ki,i=new z,a=new z,o=new an,s=new Fa,c=new Ia,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:Hl,fragmentShader:Ul}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Wr;g.setAttribute(`position`,new U(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new W(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new sn(i.x,i.y,{format:ie,type:T,minFilter:h,magFilter:h,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ri(i.x,i.y,w),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=te,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new Es(i.x),d.map.depthTexture=new zi(i.x,C)):(d.map=new sn(i.x,i.y),d.map.depthTexture=new Ri(i.x,i.y,C)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=te,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ql.setFromMatrixPosition(l.matrixWorld),e.position.copy(ql),Jl.copy(e.position),Jl.add(Wl[t]),e.up.copy(Gl[t]),e.lookAt(Jl),e.updateMatrixWorld(),n.makeTranslation(-ql.x,-ql.y,-ql.z),Kl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Kl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new sn(i.x,i.y,{format:ie,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Xl(e,t){function n(){let t=!1,n=new an,r=null,i=new an(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=dt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(N)[1]),M=te>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new an().fromArray(ie),se=new an().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ue(e.BLEND),g=!1);return}if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(M&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+ee-1),ne!==t&&(e.activeTexture(t),ne=t)}function we(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+ee-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function F(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function Le(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:F,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:I,viewport:Le,reset:Be}}function Zl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):it(`canvas`)}function T(e,t,n){let r=1,i=Fe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Xe:qt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),te(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),re(t)}function te(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ne(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function ne(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function re(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ie=0;function ae(){ie=0}function oe(){return ie}function se(e){ie=e}function ce(){let e=ie;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ie+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&F(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){be(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){be(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let pe={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},me={[f]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[m]:e.NEAREST_MIPMAP_LINEAR,[h]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[_]:e.LINEAR_MIPMAP_LINEAR},he={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ge(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,pe[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,pe[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,pe[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,me[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,me[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,he[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function _e(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ee));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=le(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ne(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ve(n.start,r.width,4),c=ve(t.start,r.width,4);n.start<=i+1&&a===c&&ve(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function be(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=_e(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=qt.getPrimaries(qt.workingColorSpace),r=o.colorSpace===``?null:qt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Pe(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);ge(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=j(o,t);if(o.isDepthTexture)p=A(o.format===N,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&ye(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=Go(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=Go(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Fe(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Fe(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,o,s){if(o.image.length!==6)return;let c=_e(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=qt.getPrimaries(qt.workingColorSpace),r=o.colorSpace===``?null:qt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Pe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=k(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=j(o,h);ge(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Fe(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Me(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function we(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,ee)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=Me(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Te(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)we(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?we(i.__webglFramebuffer[0],t,0):we(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ce(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ce(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,i){let a=r.get(t);n!==void 0&&Se(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Te(t)}function De(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,M);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ne(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ge(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Se(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ge(c,a),Se(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ge(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Se(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Te(t)}function Oe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let ke=[],Ae=[];function je(t){if(t.samples>0){if(Ne(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ke.length=0,Ae.length=0,ke.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ke.push(l),Ae.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Me(e){return Math.min(i.maxSamples,e.samples)}function Ne(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function F(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Pe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(qt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ce,this.resetTextureUnits=ae,this.getTextureUnits=oe,this.setTextureUnits=se,this.setTexture2D=P,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Ql(e,t){function n(n,r=``){let i,a=qt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var $l=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eu=`
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

}`,tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Bi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ja({vertexShader:$l,fragmentShader:eu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new va(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nu=class extends ft{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new tu,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],w=new z,T=null,E=null,D=new go;D.viewport=new an;let k=new go;k.viewport=new an;let A=[D,k],j=new Eo,ee=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getHandSpace()};function re(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ee=null,ne=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?N:te,a=_.stencil?O:C);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new sn(d.textureWidth,d.textureHeight,{format:M,type:v,depthTexture:new Ri(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new sn(f.framebufferWidth,f.framebufferHeight,{format:M,type:v,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let oe=new B,se=new B;function ce(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),j.near=k.near=D.near=t,j.far=k.far=D.far=n,(ee!==j.near||ne!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),ee=j.near,ne=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,k.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;le(j,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?ce(j,D,k):j.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),P(e,j,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=gt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)},this.getCameraTexture=function(e){return g[e]};let ue=null;function de(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=A[n];o===void 0&&(o=new go,o.layers.enable(n),o.viewport=new an,A[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Bi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let fe=new qo;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},ru=new un,iu=new V;iu.set(-1,0,0,0,1,0,0,0,1);function au(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Da(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ru.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(iu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ou(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var su=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cu=null;function lu(){return cu===null&&(cu=new gi(su,16,16,ie,T),cu.name=`DFG_LUT`,cu.minFilter=h,cu.magFilter=h,cu.wrapS=u,cu.wrapT=u,cu.generateMipmaps=!1,cu.needsUpdate=!0),cu}var uu=class{constructor(e={}){let{canvas:t=at(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=v}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([oe,ae,re]),g=new Set([v,C,x,O,E,D]),y=new Uint32Array(4),b=new Int32Array(4),S=new B,w=null,k=null,A=[],j=[],ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,te=!1,N=null,ne=null,ie=null,se=null;this._outputColorSpace=Je;let ce=0,le=0,P=null,ue=-1,de=null,fe=new an,pe=new an,me=null,he=new H(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new an(0,0,_e,ve),Ce=new an(0,0,_e,ve),we=!1,Te=new ki,Ee=!1,De=!1,Oe=new un,ke=new B,Ae=new an,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Ne(){return P===null?ye:1}let F=n;function Pe(e,n){return t.getContext(e,n)}let Fe,Ie,I,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Ye,Xe,Ze,Qe,$e,et,nt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),F===null){let t=`webgl2`;if(F=Pe(t,e),F===null)throw Pe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),R(`WebGLRenderer: `+e.message),e}function ot(){Fe=new Os(F),Fe.init(),nt=new Ql(F,Fe),Ie=new rs(F,Fe,e,nt),I=new Xl(F,Fe),Ie.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),ne=F.createFramebuffer(),ie=F.createFramebuffer(),se=F.createFramebuffer(),Le=new js(F),Re=new Al,ze=new Zl(F,Fe,I,Re,Ie,nt,Le),Be=new Ds(M),Ve=new Jo(F),rt=new ts(F,Ve),He=new ks(F,Ve,Le,rt),Ue=new Ns(F,He,Ve,rt,Le),Qe=new Ms(F,Ie,ze),Ye=new is(Re),We=new kl(M,Be,Fe,Ie,rt,Ye),Ge=new au(M,Re),Ke=new Pl,qe=new Vl(Fe),Ze=new es(M,Be,I,Ue,p,s),Xe=new Yl(M,Ue,Ie),it=new ou(F,Le,Ie,I),$e=new ns(F,Fe,Le),et=new As(F,Fe,Le),Le.programs=We.programs,M.capabilities=Ie,M.extensions=Fe,M.properties=Re,M.renderLists=Ke,M.shadowMap=Xe,M.state=I,M.info=Le}m!==1009&&(ee=new Fs(m,t.width,t.height,o,r,i));let ct=new nu(M,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Fe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){if(ct.isPresenting){L(`WebGLRenderer: Can't change size while VR device is presenting.`);return}_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ee.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(ye).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(ye).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=h.has(t)}if(e){let e=P.texture.type,t=g.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,F.clearBufferuiv(F.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,F.clearBufferiv(F.COLOR,0,b))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),N=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),Ze.dispose(),Ke.dispose(),qe.dispose(),Re.dispose(),Be.dispose(),Ue.dispose(),rt.dispose(),it.dispose(),We.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,yt),ct.removeEventListener(`sessionend`,bt),xt.stop()};function lt(e){e.preventDefault(),st(`WebGLRenderer: Context Lost.`),te=!0}function dt(){st(`WebGLRenderer: Context Restored.`),te=!1;let e=Le.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;ot(),Le.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function ft(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),Re.remove(e)}function ht(e){let t=Re.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=je);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Ve.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ne()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ne()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Fe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=Re.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){N!==null&&e.isNodeMaterial&&N.setObject(r,e),Ee===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),N!==null&&N.renderStart(e,t,n),k=qe.get(n),k.init(t),j.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),N!==null&&N.updateLights(k.state.lightsArray),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),Ee===!0&&Ye.setGlobalState(this.clippingPlanes,t),N!==null&&Xe.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),k=j.pop(),N!==null&&N.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=Re.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Fe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new qo;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,ct.setAnimationLoop(e),e===null?xt.stop():xt.start()},ct.addEventListener(`sessionstart`,yt),ct.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;N!==null&&N.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=ee!==null&&(P===null||n)&&ee.begin(M,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,P),k=qe.get(e,j.length),k.init(t),k.state.textureUnits=ze.getTextureUnits(),j.push(k),Oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Te.setFromProjectionMatrix(Oe,tt,t.reversedDepth),De=this.localClippingEnabled,Ee=Ye.init(this.clippingPlanes,De),w=Ke.get(e,A.length),w.init(),A.push(w),ct.enabled===!0&&ct.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,M.sortObjects)}St(e,t,0,M.sortObjects),w.finish(),N!==null&&N.updateLights(k.state.lightsArray),M.sortObjects===!0&&w.sort(be,xe),Me=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Me&&Ze.addToRenderList(w,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ye.beginShadows();let i=k.state.shadowsArray;if(Xe.render(i,e,t),Ee===!0&&Ye.endShadows(),(r&&ee.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Me&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(w,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Me&&Ze.render(e),Ct(w,e,t)}P!==null&&le===0&&(ze.updateMultisampleRenderTarget(P),ze.updateRenderTargetMipmap(P)),r&&ee.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),rt.resetDefaultState(),ue=-1,de=null,j.pop(),j.length>0?(k=j[j.length-1],ze.setTextureUnits(k.state.textureUnits),Ee===!0&&Ye.setGlobalState(M.clippingPlanes,k.state.camera)):k=null,A.pop(),w=A.length>0?A[A.length-1]:null,N!==null&&N.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Te)){r&&Ae.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Oe);let i=Ue.update(e),a=e.material;a.visible&&w.push(e,i,a,n,Ae.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Te))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ae.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ae.copy(e.boundingSphere.center)),Ae.applyMatrix4(e.matrixWorld).applyMatrix4(Oe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&w.push(e,i,c,n,Ae.z,s,t)}}else a.visible&&w.push(e,i,a,n,Ae.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Ee===!0&&Ye.setGlobalState(M.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Fe.has(`EXT_color_buffer_half_float`)||Fe.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new sn(1,1,{generateMipmaps:!0,type:e?T:v,minFilter:_,samples:Math.max(4,Ie.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(he),ge=M.getClearAlpha(),ge<1&&M.setClearColor(16777215,.5),M.clear(),Me&&Ze.render(n);let u=M.toneMapping;M.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Ee===!0&&Ye.setGlobalState(M.clippingPlanes,r),Tt(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),Fe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}M.setRenderTarget(s,c,l),M.setClearColor(he,ge),d!==void 0&&(r.viewport=d),M.toneMapping=u}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){N!==null&&i.isNodeMaterial&&N.setObject(e,i),e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function Dt(e,t,n){t.isScene!==!0&&(t=je);let r=Re.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=We.getUniforms(e),N!==null&&e.isNodeMaterial&&N.build(e,n,s),e.onBeforeCompile(s,M),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),kt(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Hc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=Re.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];S.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(S))return n}return null}function jt(e,t,n,r,i){t.isScene!==!0&&(t=je),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:qt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Re.get(r),y=k.state.lights;if(Ee===!0&&(De===!0||e!==de)){let t=e===de&&r.id===ue;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Dt(r,t,i),N&&r.isNodeMaterial&&N.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(I.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ue&&(ue=r.id,C=!0),v.needsLights){let e=At(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(F,`projectionMatrix`,e.projectionMatrix),T.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(F,ke.setFromMatrixPosition(e.matrixWorld)),Ie.logarithmicDepthBuffer&&T.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(F,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&T.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&T.setValue(F,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&T.setValue(F,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){T.setOptional(F,i,`bindMatrix`),T.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(F,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(T.setOptional(F,i,`batchingTexture`),T.setValue(F,`batchingTexture`,i._matricesTexture,ze),T.setOptional(F,i,`batchingIdTexture`),T.setValue(F,`batchingIdTexture`,i._indirectTexture,ze),T.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(F,`batchingColorTexture`,i._colorsTexture,ze));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=lu()),C){if(T.setValue(F,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&Mt(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,ye,ve,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Hc.upload(F,Ot(v),E,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Hc.upload(F,Ot(v),E,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(F,`center`,i.center),T.setValue(F,`modelViewMatrix`,i.modelViewMatrix),T.setValue(F,`normalMatrix`,i.normalMatrix),T.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=Re.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Re.get(e.texture).__webglTexture=t,Re.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Re.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=Re.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),ue=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,Re.get(e.texture).__webglTexture,Re.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Re.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Re.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?Re.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=ne),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=Re.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Re.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Re.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function Pt(e){let t=Re.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ie.textureFormatReadable(e.format),t.__typeReadable=Ie.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Re.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=P===null?null:Re.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Re.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=P===null?null:Re.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ut(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Re.get(e),r=Re.get(t),h=Re.get(n.__renderTarget),g=Re.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Re.has(e)){let n=Re.get(e),r=Re.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,ie),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){Re.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,I.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return tt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(e),t.unpackColorSpace=qt._getUnpackColorSpace()}},K={minX:-2.6,maxX:2.6,minZ:-3,maxZ:2.4,height:2.65},du={x0:.45,x1:2.25,y0:.82,y1:2.28},q={cx:-.78,cz:-1.2,w:2.7,d:1.8,pile:.036},J={cx:-1.1,cz:-2.52,w:2.1,d:.92,legH:.075,seatH:.44,backH:.9,armW:.2,armH:.62},fu={x0:.22,x1:1.55,top:2.4,bottom:.015,z:K.minZ+.13},pu={x0:2.02,x1:2.52,top:2.4,bottom:.015,z:K.minZ+.13},mu={cx:2.33,cz:-.9,w:.48,d:1.5,h:.62,legH:.13},hu={cx:-2.37,cz:.45,w:.44,d:1.1,h:.95,legH:.11},gu={x:-2.38,z:-2.72,h:1.58,shadeR:.24},_u={x:2.24,z:-2.42,r:.145},vu={body:{x:.8,z:1.35},nozzle:{x:.08,z:.42}},Y={FLOOR:0,CARPET:1,SOFA:2,CURTAIN:3,HIDDEN:4},yu=[{id:`sideboard`,x0:2.12,x1:2.55,z0:-1.6,z1:-.2,gapH:mu.legH,open:[-1,0]},{id:`cabinet`,x0:-2.57,x1:-2.18,z0:-.05,z1:.95,gapH:hu.legH,open:[1,0]},{id:`sofa`,x0:-2.05,x1:-.15,z0:-2.9,z1:-2.12,gapH:J.legH,open:[0,1]}],bu={floor:34,carpet:22,sofa:15,curtain:18,hidden:11},xu={assistStart:100,assistEnd:165,minCapacity:30},Su={length:2.1,radius:.05,innerRadius:.043,samples:128},Cu={width:.34,depth:.13,mouthForward:.07,maxSpeed:3.2,spring:13,margin:.2},wu={reach:1.05,core:.16,peak:3.4,swirl:.38,capture:.075};function Tu(){let e=.02;return[Eu(J.cx,J.cz,J.w+e,J.d+e),Eu(mu.cx,mu.cz,mu.w+e,mu.d+e),Eu(hu.cx,hu.cz,hu.w+e,hu.d+e),Eu(gu.x,gu.z,.36,.36),Eu(_u.x,_u.z,2*_u.r+.08,2*_u.r+.08)]}function Eu(e,t,n,r){return{cx:e,cz:t,hw:n/2,hd:r/2}}function Du(e,t,n=0){return Math.abs(e-q.cx)<=q.w/2-n&&Math.abs(t-q.cz)<=q.d/2-n}var Ou={res:64,minX:K.minX,minZ:K.minZ,sizeX:K.maxX-K.minX,sizeZ:K.maxZ-K.minZ},ku=(e,t,n)=>e<t?t:e>n?n:e,Au=e=>e<0?0:e>1?1:e,ju=(e,t,n)=>e+(t-e)*n,X=(e,t,n)=>{let r=Au((n-e)/(t-e));return r*r*(3-2*r)},Mu=(e,t,n,r)=>ju(e,t,1-Math.exp(-n*r));function Nu(e,t,n,r){let i=1+2*r*n,a=n*n*r,o=r*a,s=1/(i+o),c=i*e.x+r*e.v+o*t,l=e.v+a*(t-e.x);e.x=c*s,e.v=l*s}var Pu=Math.PI*2;function Fu(e){let t=Math.sin(e*127.1+311.7)*43758.5453123;return t-Math.floor(t)}var Iu=[[0,.22,1,.42],[.16,.08,1,.72],[.32,.1,.78,1],[.5,.26,.42,1],[.68,.58,.26,1],[.84,.95,.24,.78],[1,1,.36,.55]];function Lu(e,t=new H){let n=Math.min(.9999,Math.max(0,e));for(let e=0;e<Iu.length-1;e++){let r=Iu[e],i=Iu[e+1];if(n>=r[0]&&n<=i[0]){let e=(n-r[0])/(i[0]-r[0]),a=e*e*(3-2*e);return t.setRGB(r[1]+(i[1]-r[1])*a,r[2]+(i[2]-r[2])*a,r[3]+(i[3]-r[3])*a),t}}let r=Iu[Iu.length-1];return t.setRGB(r[1],r[2],r[3])}function Ru(e,t,n=new H){let r=1.33,i=2*r*e*Math.sqrt(Math.max(.05,1-(1-t*t)/(r*r))),a=.5+.5*Math.cos(2*Math.PI*i/650),o=.5+.5*Math.cos(2*Math.PI*i/532),s=.5+.5*Math.cos(2*Math.PI*i/450);return n.setRGB(a*a,o*o,s*s)}var zu=`
vec3 auroraRGB(float h) {
  h = clamp(h, 0.0, 0.9999);
  vec3 c0 = vec3(0.22, 1.0, 0.42);
  vec3 c1 = vec3(0.08, 1.0, 0.72);
  vec3 c2 = vec3(0.10, 0.78, 1.0);
  vec3 c3 = vec3(0.26, 0.42, 1.0);
  vec3 c4 = vec3(0.58, 0.26, 1.0);
  vec3 c5 = vec3(0.95, 0.24, 0.78);
  vec3 c6 = vec3(1.0, 0.36, 0.55);
  float x = h * 6.0;
  float t = smoothstep(0.0, 1.0, fract(x));
  if (x < 1.0) return mix(c0, c1, t);
  if (x < 2.0) return mix(c1, c2, t);
  if (x < 3.0) return mix(c2, c3, t);
  if (x < 4.0) return mix(c3, c4, t);
  if (x < 5.0) return mix(c4, c5, t);
  return mix(c5, c6, t);
}
vec3 thinFilm(float thickness, float cosTheta) {
  float n = 1.33;
  float s2 = 1.0 - (1.0 - cosTheta * cosTheta) / (n * n);
  float opd = 2.0 * n * thickness * sqrt(max(0.05, s2));
  vec3 c = 0.5 + 0.5 * cos(6.2831853 * opd / vec3(650.0, 532.0, 450.0));
  return c * c;
}
// visible spectrum approx for band t in [0,1] (0 = red, 1 = violet)
vec3 spectrum(float t) {
  vec3 c = vec3(
    (1.0 - smoothstep(0.0, 0.55, t)) + 0.35 * smoothstep(0.8, 1.0, t),
    smoothstep(0.0, 0.4, t) * (1.0 - smoothstep(0.45, 0.85, t)),
    smoothstep(0.35, 0.8, t)
  );
  return c;
}
`,Bu=[[.1,.38],[0,.18],[.52,.74],[.72,1],[.3,.7]];function Vu(e){"@babel/helpers - typeof";return Vu=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Vu(e)}function Hu(e,t){if(Vu(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Vu(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Uu(e){var t=Hu(e,`string`);return Vu(t)==`symbol`?t:t+``}function Z(e,t,n){return(t=Uu(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Wu={low:{tier:`low`,level:0,pixelBudget:95e4,maxDpr:1.5,particles:5200,chamberParticles:380,shells:7,hoseRadial:10,hoseTubular:72,bloomScale:.35,msaa:0,shadows:!1,shadowMapSize:512,mistLayers:2,curtainCols:18,curtainRows:24,auroraLayers:2,spectralBands:5},mid:{tier:`mid`,level:1,pixelBudget:17e5,maxDpr:2,particles:10500,chamberParticles:650,shells:11,hoseRadial:12,hoseTubular:96,bloomScale:.5,msaa:2,shadows:!0,shadowMapSize:1024,mistLayers:3,curtainCols:24,curtainRows:32,auroraLayers:3,spectralBands:7},high:{tier:`high`,level:2,pixelBudget:28e5,maxDpr:2,particles:15500,chamberParticles:1e3,shells:16,hoseRadial:14,hoseTubular:128,bloomScale:.5,msaa:4,shadows:!0,shadowMapSize:1024,mistLayers:4,curtainCols:30,curtainRows:40,auroraLayers:3,spectralBands:9}};function Gu(e){let t=new URLSearchParams(location.search).get(`tier`),n=`mid`;if(t&&t in Wu)n=t;else if(e){let t=``;try{let n=e.getExtension(`WEBGL_debug_renderer_info`);t=String(n?e.getParameter(n.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}catch{}let r=t.toLowerCase(),i=navigator.hardwareConcurrency||4,a=navigator.deviceMemory??4;n=r.includes(`swiftshader`)||r.includes(`llvmpipe`)||r.includes(`software`)?`low`:r.includes(`apple`)?i>=6?`high`:`mid`:/mali-[gt]\d{1,2}\b|adreno \(tm\) [1-5]\d\d|powervr/.test(r)?`low`:/nvidia|radeon|geforce|rtx|intel\(r\) (iris|arc)/.test(r)?`high`:i<=4||a<=3?`low`:`mid`}let r=Wu[n];return{...r,dprScale:1,shellsActive:r.shells,shadowRefresh:n===`high`?2:4}}function Ku(e,t,n){let r=window.devicePixelRatio||1,i=Math.sqrt(e.pixelBudget/Math.max(1,t*n));return Math.max(.6,Math.min(r,e.maxDpr,i)*e.dprScale)}var qu=class{constructor(e){Z(this,`q`,void 0),Z(this,`acc`,0),Z(this,`n`,0),Z(this,`cool`,3),Z(this,`step`,0),this.q=e}sample(e){if(this.cool>0)return this.cool-=e,!1;if(this.acc+=Math.min(e,.1),this.n++,this.acc<2)return!1;let t=this.acc/this.n;return this.acc=0,this.n=0,t>1/47&&(this.cool=1.5,this.degrade())}degrade(){let e=this.q;switch(this.step++,this.step){case 1:e.dprScale=.88;break;case 2:e.shellsActive=Math.max(5,Math.round(e.shells*.65)),e.shadowRefresh=8;break;case 3:e.dprScale=.76,e.bloomScale=Math.min(e.bloomScale,.35);break;case 4:e.shadowRefresh=0,e.shellsActive=5;break;case 5:e.dprScale=.66;break;default:return!1}return!0}},Ju=class{constructor(e){Z(this,`s`,void 0),this.s=e>>>0||2654435769}next(){let e=this.s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t))}pick(e){return e[Math.floor(this.next()*e.length)]}gauss(e=0,t=1){return e+t*(this.next()+this.next()+this.next()+this.next()-2)*1.2247}chance(e){return this.next()<e}};function Yu(){return Math.random()*4294967295>>>0}var Xu={uTime:{value:0},uLightField:{value:null},uLightFieldRect:{value:new an(Ou.minX,Ou.minZ,1/Ou.sizeX,1/Ou.sizeZ)},uLightFieldGain:{value:1},uNozzle:{value:new B},uNozzleDir:{value:new B(0,0,-1)},uAir:{value:0},uFinale:{value:0},uAuroraAmbient:{value:new H(0,0,0)},uAuroraCeiling:{value:new H(0,0,0)}},Zu=6,Qu=.25,$u=48,ed=2.6,td=.32,nd=`
  varying vec2 vUv;
  void main() {
    vUv = position.xy * 0.5 + 0.5;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,rd=`
  uniform float uThreshold;
  uniform float uKnee;
  // soft-knee threshold on the max channel (keeps hue; quadratic ramp across the knee)
  vec3 brightPart(vec3 c) {
    float br = max(c.r, max(c.g, c.b));
    float soft = clamp(br - uThreshold + uKnee, 0.0, 2.0 * uKnee);
    soft = soft * soft / (4.0 * uKnee + 1e-4);
    return c * (max(soft, br - uThreshold) / max(br, 1e-4));
  }
`,id=`
  uniform sampler2D tSrc;
  uniform vec2 uRatio; // source texels per destination texel
  uniform float uExposure;
  ${rd}
  void main() {
    vec2 c = gl_FragCoord.xy * uRatio; // destination texel center in source texels
    ivec2 k0 = ivec2(floor(c - uRatio - 0.5)) + 1;
    ivec2 srcMax = textureSize(tSrc, 0) - 1;
    vec3 sum = vec3(0.0);
    for (int y = 0; y < TAPS; y++) {
      float wy = 1.0 - abs(float(k0.y + y) + 0.5 - c.y) / uRatio.y;
      if (wy <= 0.0) continue;
      for (int x = 0; x < TAPS; x++) {
        float wx = 1.0 - abs(float(k0.x + x) + 0.5 - c.x) / uRatio.x;
        if (wx <= 0.0) continue;
        vec3 s = texelFetch(tSrc, clamp(k0 + ivec2(x, y), ivec2(0), srcMax), 0).rgb * uExposure;
        // max() also maps NaN to 0 on the GPUs we target; the cap bounds one hot pixel's glow
        sum += brightPart(min(max(s, vec3(0.0)), vec3(${$u.toFixed(1)}))) * (wx * wy);
      }
    }
    gl_FragColor = vec4(sum / (uRatio.x * uRatio.y), 1.0);
  }
`,ad=`
  uniform sampler2D tSrc;
  uniform vec2 uTexel; // source texel size
  varying vec2 vUv;
  void main() {
    vec3 s = texture2D(tSrc, vUv).rgb * 4.0;
    s += texture2D(tSrc, vUv - uTexel).rgb;
    s += texture2D(tSrc, vUv + uTexel).rgb;
    s += texture2D(tSrc, vUv + vec2(uTexel.x, -uTexel.y)).rgb;
    s += texture2D(tSrc, vUv - vec2(uTexel.x, -uTexel.y)).rgb;
    gl_FragColor = vec4(s * 0.125, 1.0);
  }
`,od=`
  uniform sampler2D tLow;  // coarser level (already upsampled chain)
  uniform sampler2D tHigh; // this level's downsample
  uniform vec2 uTexel;     // coarse texel size
  uniform float uScatter;
  varying vec2 vUv;
  void main() {
    vec2 o = uTexel * 0.5;
    vec3 s = texture2D(tLow, vUv + vec2(-2.0 * o.x, 0.0)).rgb;
    s += texture2D(tLow, vUv + vec2(2.0 * o.x, 0.0)).rgb;
    s += texture2D(tLow, vUv + vec2(0.0, 2.0 * o.y)).rgb;
    s += texture2D(tLow, vUv + vec2(0.0, -2.0 * o.y)).rgb;
    s += texture2D(tLow, vUv + vec2(-o.x, o.y)).rgb * 2.0;
    s += texture2D(tLow, vUv + vec2(o.x, o.y)).rgb * 2.0;
    s += texture2D(tLow, vUv + vec2(o.x, -o.y)).rgb * 2.0;
    s += texture2D(tLow, vUv + vec2(-o.x, -o.y)).rgb * 2.0;
    vec3 hi = texture2D(tHigh, vUv).rgb;
    gl_FragColor = vec4(mix(hi, s * (1.0 / 12.0), uScatter), 1.0);
  }
`,sd=`
  uniform mat4 uProjInv;
  uniform mat4 uCamWorld;
  varying vec2 vUv;
  varying vec3 vRay;
  void main() {
    vUv = position.xy * 0.5 + 0.5;
    // world-space view ray through this vertex (far-plane point; interpolates linearly)
    vec4 v = uProjInv * vec4(position.xy, 1.0, 1.0);
    vRay = mat3(uCamWorld) * (v.xyz / v.w);
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,cd=`
  uniform sampler2D tScene;
  uniform sampler2D tBloom;
  uniform float uExposure;
  uniform float uBloom;
  uniform float uVignette;
  uniform float uGrain;
  uniform float uSaturation;
  uniform float uHaze;
  uniform vec3 uHazeColor;
  uniform vec3 uCamPos;
  uniform vec3 uBoxMin;
  uniform vec3 uBoxMax;
  uniform float uFrame;
  varying vec2 vUv;
  varying vec3 vRay;
  ${rd}

  // ACES RRT+ODT fit (Stephen Hill) with three's 1/0.6 exposure normalization
  vec3 acesCurve(vec3 x) {
    vec3 v = x * (1.0 / 0.6);
    vec3 a = v * (v + 0.0245786) - 0.000090537;
    vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
    return clamp(a / b, 0.0, 1.0);
  }

  vec3 tonemap(vec3 c) {
    float peak = max(c.r, max(c.g, c.b));
    vec3 perChannel = acesCurve(c);
    // hue-preserving: compress the peak, keep channel ratios, drift slowly toward white
    float mapped = acesCurve(vec3(peak)).x;
    float over = max(peak - 1.5, 0.0);
    vec3 chroma = mix(c / max(peak, 1e-5), vec3(1.0), over / (over + 10.0));
    return mix(perChannel, chroma * mapped, smoothstep(0.15, 1.0, peak));
  }

  vec3 linearToSRGB(vec3 c) {
    vec3 lo = c * 12.92;
    vec3 hi = 1.055 * pow(max(c, vec3(0.0031308)), vec3(1.0 / 2.4)) - 0.055;
    return mix(hi, lo, step(c, vec3(0.0031308)));
  }

  // interleaved gradient noise (Jimenez) — well distributed, cheap
  float ign(vec2 p) {
    return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
  }
  // white noise (Dave Hoskins hash12)
  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  void main() {
    vec3 hdr = texture2D(tScene, vUv).rgb * uExposure;

    // bloom: move the scattered part of bright light into the glow (energy conserving)
    if (uBloom > 0.0) {
      vec3 bright = brightPart(min(max(hdr, vec3(0.0)), vec3(${$u.toFixed(1)})));
      hdr += uBloom * (texture2D(tBloom, vUv).rgb - bright);
    }

    // blue-hour haze by distance to the room walls / floor along the view ray
    if (uHaze > 0.0) {
      vec3 rd = normalize(vRay);
      rd += (step(0.0, rd) * 2.0 - 1.0) * 1e-5;
      vec3 t0 = (uBoxMin - uCamPos) / rd;
      vec3 t1 = (uBoxMax - uCamPos) / rd;
      vec3 tf = max(t0, t1);
      float dist = min(min(tf.x, tf.y), tf.z);
      float fog = uHaze * (1.0 - exp(-max(dist - ${ed.toFixed(2)}, 0.0) * ${td.toFixed(3)}));
      hdr = mix(hdr, uHazeColor * uExposure, fog);
    }

    // lens vignette (multiplies radiance, so it happens before the tone map)
    vec2 vc = vUv * 2.0 - 1.0;
    float r2 = dot(vc, vc) * 0.5;
    hdr *= 1.0 - uVignette * smoothstep(0.12, 1.0, r2);

    float luma = dot(hdr, vec3(0.2126, 0.7152, 0.0722));
    hdr = max(mix(vec3(luma), hdr, uSaturation), vec3(0.0));

    vec3 col = linearToSRGB(tonemap(hdr));

    // film grain: strongest in the mid-darks where the scene lives, faint in black and white
    float l = dot(col, vec3(0.299, 0.587, 0.114));
    float grainW = 0.3 + 2.8 * l * (1.0 - l);
    col += (hash12(gl_FragCoord.xy + uFrame * 17.31) - 0.5) * uGrain * grainW;
    // triangular dither, +-1 code value: no banding in the dark gradients
    vec2 fc = gl_FragCoord.xy + mod(uFrame, 64.0) * 5.588238;
    col += (ign(fc) + ign(fc + vec2(47.0, 17.0)) - 1.0) / 255.0;

    gl_FragColor = vec4(col, 1.0);
  }
`;function ld(e,t,n){return new sn(e,t,{type:n,format:M,minFilter:h,magFilter:h,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1})}function ud(e,t,n=nd){return new ja({uniforms:t,vertexShader:n,fragmentShader:e,depthTest:!1,depthWrite:!1,blending:0})}var dd=class{constructor(e,t){Z(this,`params`,{exposure:1,bloomStrength:.6,bloomRadius:.62,bloomThreshold:.8,vignette:.32,grain:.018,saturation:1.04,haze:.22,hazeColor:new H(.024,.038,.078)}),Z(this,`renderer`,void 0),Z(this,`quality`,void 0),Z(this,`hdrType`,void 0),Z(this,`sceneRT`,void 0),Z(this,`down`,[]),Z(this,`up`,[]),Z(this,`quad`,void 0),Z(this,`quadCam`,new yo(-1,1,1,-1,0,1)),Z(this,`prefilterMat`,void 0),Z(this,`downMat`,void 0),Z(this,`upMat`,void 0),Z(this,`compositeMat`,void 0),Z(this,`uThreshold`,{value:1}),Z(this,`uKnee`,{value:.5}),Z(this,`width`,0),Z(this,`height`,0),Z(this,`bloomScale`,0),Z(this,`frame`,0),Z(this,`bufSize`,new z),this.renderer=e,this.quality=t,e.toneMapping=0;let n=e.extensions,r=n.has(`EXT_color_buffer_half_float`)||n.has(`EXT_color_buffer_float`);this.hdrType=r?T:v,this.sceneRT=new sn(1,1,{type:this.hdrType,format:M,minFilter:h,magFilter:h,generateMipmaps:!1,depthBuffer:!0,stencilBuffer:!1,samples:t.msaa});let i=new Wr;i.setAttribute(`position`,new Mr([-1,-1,0,3,-1,0,-1,3,0],3)),this.quad=new W(i),this.quad.frustumCulled=!1;let a={uThreshold:this.uThreshold,uKnee:this.uKnee};this.prefilterMat=ud(id,{tSrc:{value:this.sceneRT.texture},uRatio:{value:new z(2,2)},uExposure:{value:1},...a}),this.prefilterMat.defines.TAPS=4,this.downMat=ud(ad,{tSrc:{value:null},uTexel:{value:new z}}),this.upMat=ud(od,{tLow:{value:null},tHigh:{value:null},uTexel:{value:new z},uScatter:{value:.6}}),this.compositeMat=ud(cd,{tScene:{value:this.sceneRT.texture},tBloom:{value:null},uExposure:{value:1},uBloom:{value:0},uVignette:{value:0},uGrain:{value:0},uSaturation:{value:1},uHaze:{value:0},uHazeColor:{value:new H},uCamPos:{value:new B},uBoxMin:{value:new B(K.minX,0,K.minZ)},uBoxMax:{value:new B(K.maxX,K.height,K.maxZ)},uProjInv:{value:new un},uCamWorld:{value:new un},uFrame:{value:0},...a},sd)}setSize(e,t,n){this.allocate(Math.max(1,Math.floor(e*n)),Math.max(1,Math.floor(t*n)))}render(e,t){let n=this.renderer,r=this.params;n.getDrawingBufferSize(this.bufSize),this.allocate(this.bufSize.x,this.bufSize.y),n.setRenderTarget(this.sceneRT),n.render(e,t);let i=Math.max(.05,r.bloomThreshold*.5);this.uThreshold.value=r.bloomThreshold,this.uKnee.value=i;let a=r.bloomStrength>.001;a&&this.renderBloom(r.exposure,zt.clamp(r.bloomRadius,0,1));let o=this.compositeMat.uniforms;o.uExposure.value=r.exposure,o.uBloom.value=a?r.bloomStrength:0,o.tBloom.value=this.bloomTexture,o.uVignette.value=r.vignette,o.uGrain.value=r.grain,o.uSaturation.value=r.saturation,o.uHaze.value=r.haze,o.uHazeColor.value.copy(r.hazeColor),o.uCamPos.value.setFromMatrixPosition(t.matrixWorld),o.uProjInv.value.copy(t.projectionMatrixInverse),o.uCamWorld.value.copy(t.matrixWorld),this.frame=(this.frame+1)%4096,o.uFrame.value=this.frame,this.pass(this.compositeMat,null)}dispose(){this.disposeBloom(),this.sceneRT.dispose(),this.quad.geometry.dispose(),this.prefilterMat.dispose(),this.downMat.dispose(),this.upMat.dispose(),this.compositeMat.dispose()}renderBloom(e,t){let n=this.down,r=this.up,i=n.length;this.prefilterMat.uniforms.uExposure.value=e,this.pass(this.prefilterMat,n[0]);let a=this.downMat.uniforms;for(let e=1;e<i;e++)a.tSrc.value=n[e-1].texture,a.uTexel.value.set(1/n[e-1].width,1/n[e-1].height),this.pass(this.downMat,n[e]);let o=this.upMat.uniforms;o.uScatter.value=.35+t*.5;for(let e=i-2;e>=0;e--){let t=e===i-2?n[i-1]:r[e+1];o.tLow.value=t.texture,o.tHigh.value=n[e].texture,o.uTexel.value.set(1/t.width,1/t.height),this.pass(this.upMat,r[e])}}pass(e,t){this.quad.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this.quad,this.quadCam)}allocate(e,t){let n=zt.clamp(this.quality.bloomScale,Qu,1);if(e===this.width&&t===this.height&&n===this.bloomScale)return;(e!==this.width||t!==this.height)&&this.sceneRT.setSize(e,t),this.width=e,this.height=t,this.bloomScale=n,this.disposeBloom();let r=Math.max(1,Math.round(e*n)),i=Math.max(1,Math.round(t*n));for(let e=0;e<Zu&&(this.down.push(ld(r,i,this.hdrType)),!(Math.min(r,i)<12));e++)r=Math.max(1,r>>1),i=Math.max(1,i>>1);for(let e=0;e<this.down.length-1;e++)this.up.push(ld(this.down[e].width,this.down[e].height,this.hdrType));let a=e/this.down[0].width,o=t/this.down[0].height,s=this.prefilterMat;s.uniforms.uRatio.value.set(a,o);let c=Math.ceil(2*Math.max(a,o)-1e-6);s.defines.TAPS!==c&&(s.defines.TAPS=c,s.needsUpdate=!0)}get bloomTexture(){return(this.up.length>0?this.up[0]:this.down[0]).texture}disposeBloom(){for(let e of this.down)e.dispose();for(let e of this.up)e.dispose();this.down=[],this.up=[]}};function fd(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var pd=e=>e<0?0:e>1?1:e,md=e=>e<-1?-1:e>1?1:e,hd=(e,t,n)=>{let r=pd((n-e)/(t-e));return r*r*(3-2*r)};function gd(e,t,n,r){let i=0;for(let e=0;e<n;e++)i+=t[e]*t[e];let a=r/Math.sqrt(i/n||1),o=e.createBuffer(1,n,e.sampleRate),s=o.getChannelData(0);for(let e=0;e<n;e++)s[e]=t[e]*a;return o}function _d(e,t,n,r,i=.3){let a=e.sampleRate,o=Math.round(t*a),s=Math.round(.05*a),c=new Float32Array(o+s),l=fd(r);if(n===`white`)for(let e=0;e<c.length;e++)c[e]=l()*2-1;else{let e=0,t=0,n=0,r=0,i=0,a=0,o=0;for(let s=-4096;s<c.length;s++){let u=l()*2-1;e=.99886*e+u*.0555179,t=.99332*t+u*.0750759,n=.969*n+u*.153852,r=.8665*r+u*.3104856,i=.55*i+u*.5329522,a=-.7616*a-u*.016898;let d=e+t+n+r+i+a+o+u*.5362;o=u*.115926,s>=0&&(c[s]=d)}}for(let e=0;e<s;e++){let t=e/s;c[e]=c[e]*Math.sqrt(t)+c[o+e]*Math.sqrt(1-t)}return gd(e,c,o,i)}function vd(e,t,n,r){let i=e.sampleRate,a=Math.round(t*i),o=new Float32Array(a),s=fd(r),c=1-Math.exp(-2*Math.PI*5e3/i),l=1-Math.exp(-2*Math.PI*1200/i),u=s()*.05;for(;;){u+=-Math.log(1-s()*.999)/n;let e=Math.round(u*i);if(e>=a)break;let t=.15+.85*s()**2.2,r=Math.round((.004+s()*.007)*i),d=Math.round(.0012*i),f=0,p=0;for(let n=0;n<r;n++){f+=(s()*2-1-f)*c,p+=(f-p)*l;let i=Math.min(1,n/d)*Math.exp(-3.5*n/r);o[(e+n)%a]+=(f-p)*i*t}}let d=0;for(let e=0;e<a;e++)d=Math.max(d,Math.abs(o[e]));let f=e.createBuffer(1,a,i),p=f.getChannelData(0);for(let e=0;e<a;e++)p[e]=o[e]/(d||1);return f}function yd(e,t,n,r,i){let a=e.sampleRate,o=Math.round(t*a),s=new Float32Array(o),c=fd(i),l=Math.ceil(n*t),u=Math.floor(r*t);for(let e=l;e<=u;e++){let t=.4+c()*.6,n=c()*Math.PI*2,r=2*Math.PI*e/o;for(let e=0;e<o;e++)s[e]+=t*Math.sin(r*e+n)}let d=0;for(let e=0;e<o;e++)d=Math.max(d,Math.abs(s[e]));let f=e.createBuffer(1,o,a),p=f.getChannelData(0);for(let e=0;e<o;e++)p[e]=s[e]/(d||1);return f}function bd(e,t,n){let r=e.sampleRate,i=Math.round(t*r),a=e.createBuffer(2,i,r),o=fd(n),s=Math.round(.011*r);for(let e=0;e<2;e++){let n=a.getChannelData(e),c=0;for(let e=s;e<i;e++){let i=(e-s)/r,a=.1+.45*Math.exp(-i/.22);c+=(o()*2-1-c)*a;let l=Math.min(1,i/.02);n[e]=c*Math.exp(-6.9*i/(t-.011))*l}for(let e=0;e<7;e++){let e=s+Math.round((.004+o()*.04)*r);n[e]+=(o()<.5?-1:1)*(.25+o()*.35)*8}let l=0;for(let e=0;e<i;e++)l+=n[e]*n[e];let u=1/Math.sqrt(l||1);for(let e=0;e<i;e++)n[e]*=u}return a}function xd(e,t=2049){let n=new Float32Array(t);for(let r=0;r<t;r++){let i=r/(t-1)*2-1;n[r]=e*Math.tanh(i/e)}return n}function Sd(e,t){let n=new Float32Array(t.length+1),r=new Float32Array(t.length+1);for(let e=0;e<t.length;e++){let i=e*2.39996;n[e+1]=t[e]*Math.sin(i),r[e+1]=t[e]*Math.cos(i)}return e.createPeriodicWave(n,r)}var Cd=[0,2,4,7,9];function wd(e,t=4){let n=Math.floor(e),r=Math.floor(n/5);return 440*2**((12*(t+1)+2+12*r+Cd[(n%5+5)%5]-69)/12)}function Td(e,t,n,r,i,a=0){return e.setValueAtTime(0,t),e.linearRampToValueAtTime(n,t+r),a>0&&e.setValueAtTime(n,t+r+a),e.setTargetAtTime(0,t+r+a,i),t+r+a+i*7}function Ed(e,t=0){if(typeof e.createStereoPanner==`function`){let n=e.createStereoPanner();return n.pan.value=md(t),{node:n,to:(e,t,r)=>n.pan.setTargetAtTime(md(e),t,r)}}let n=e.createPanner();n.panningModel=`equalpower`,n.distanceModel=`linear`,n.rolloffFactor=0;let r=(e,t,r)=>{let i=md(e)*Math.PI*.5;n.positionX?(n.positionX.setTargetAtTime(Math.sin(i),t,r),n.positionZ.setTargetAtTime(-Math.cos(i),t,r)):n.setPosition(Math.sin(i),0,-Math.cos(i))};return r(t,0,.01),{node:n,to:r}}var Dd={motor:.05,resonance:.045,whoosh:.26,floor:.2,carpet:.3,ticks:.035,sofa:.34,curtain:.45,hidden:.01,hoseNoise:.21,hoseTone:.006},Od=class{constructor(e,t,n){Z(this,`param`,void 0),Z(this,`eps`,void 0),Z(this,`last`,void 0),this.param=e,this.eps=n,e.value=t,this.last=t}get value(){return this.last}to(e,t,n){Math.abs(e)<this.eps&&(e=0),!(e===this.last||e!==0&&Math.abs(e-this.last)<this.eps)&&(this.param.setTargetAtTime(e,t,n),this.last=e)}},kd=class{constructor(e,t,n){Z(this,`ctx`,void 0),Z(this,`spinTarget`,0),Z(this,`spin`,0),Z(this,`growlT`,99),Z(this,`nudgeT`,99),Z(this,`motorPan`,void 0),Z(this,`f0Low`,void 0),Z(this,`f0High`,void 0),Z(this,`fWhineA`,void 0),Z(this,`fWhineB`,void 0),Z(this,`gLow`,void 0),Z(this,`gHigh`,void 0),Z(this,`gWhine`,void 0),Z(this,`motorCut`,void 0),Z(this,`motorAmp`,void 0),Z(this,`growlDepth`,void 0),Z(this,`resAmp`,void 0),Z(this,`airPan`,void 0),Z(this,`whooshHz`,void 0),Z(this,`gWhoosh`,void 0),Z(this,`gSurf`,void 0),Z(this,`gTicks`,void 0),Z(this,`ticksRate`,void 0),Z(this,`flutterRate`,void 0),Z(this,`hosePan`,void 0),Z(this,`gHoseNoise`,void 0),Z(this,`gHoseTone`,void 0),Z(this,`hoseHz`,void 0),Z(this,`glitterRate`,void 0),Z(this,`panLast`,new Float32Array([9,9,9])),this.ctx=e;let r=e,i=(e,t)=>{let n=r.createOscillator();return typeof e==`string`?n.type=e:n.setPeriodicWave(e),n.frequency.value=t,n.start(),n},a=e=>{let t=r.createGain();return t.gain.value=e,t},o=(e,t,n)=>{let i=r.createBiquadFilter();return i.type=e,i.frequency.value=t,i.Q.value=n,i},s=(e,t)=>{let n=r.createBufferSource();return n.buffer=e,n.loop=!0,n.start(0,t%e.duration),n};this.motorPan=Ed(r),this.motorPan.node.connect(n.motor);let c=i(t.motorLow,98),l=i(t.motorHigh,98),u=i(`sine`,1274),d=i(`sine`,1279),f=a(1),p=a(0),m=a(0),h=o(`lowpass`,500,.8),g=a(1),_=a(0);c.connect(f).connect(h),l.connect(p).connect(h),u.connect(m),d.connect(m),h.connect(g),m.connect(g),g.connect(_).connect(this.motorPan.node);let v=i(`sine`,.31),y=i(`sine`,5.3),b=a(7),x=a(2.5);v.connect(b),y.connect(x);for(let e of[c,l,u,d])b.connect(e.detune),x.connect(e.detune);let S=i(`sine`,.23),C=a(.07);S.connect(C).connect(g.gain);let w=i(`sine`,19),T=a(0);w.connect(T).connect(g.gain);let E=i(t.reed,110),D=i(t.reed,164.81),O=a(.65),k=a(.45),A=i(`sine`,.2),j=a(.35),ee=a(0);E.connect(O),D.connect(k).connect(O),A.connect(j).connect(O.gain),O.connect(ee).connect(this.motorPan.node),this.f0Low=new Od(c.frequency,98,.05),this.f0High=new Od(l.frequency,98,.05),this.fWhineA=new Od(u.frequency,1274,.5),this.fWhineB=new Od(d.frequency,1279,.5),this.gLow=new Od(f.gain,1,.005),this.gHigh=new Od(p.gain,0,.003),this.gWhine=new Od(m.gain,0,5e-4),this.motorCut=new Od(h.frequency,500,4),this.motorAmp=new Od(_.gain,0,5e-4),this.growlDepth=new Od(T.gain,0,.005),this.resAmp=new Od(ee.gain,0,2e-4),this.airPan=Ed(r),this.airPan.node.connect(n.air);let M=this.airPan.node,te=s(t.white,0),N=s(t.pink,0),ne=o(`bandpass`,700,.7),re=a(0);N.connect(ne).connect(re).connect(M);let ie=o(`bandpass`,3800,1),ae=a(0);te.connect(ie).connect(ae).connect(M);let oe=o(`bandpass`,520,.9),se=a(0);N.connect(oe).connect(se).connect(M);let ce=s(t.ticks,0),le=a(0);ce.connect(le).connect(M);let P=o(`bandpass`,420,.8),ue=a(.6),de=i(`sine`,.72),fe=a(.4);de.connect(fe).connect(ue.gain);let pe=a(0);N.connect(P).connect(ue).connect(pe).connect(M);let me=o(`bandpass`,1250,.8),he=a(.55),ge=s(t.flutter,0),_e=a(.45);ge.connect(_e).connect(he.gain);let ve=a(0);te.connect(me).connect(he).connect(ve).connect(M);let ye=a(0);for(let[e,t]of[[2349.3,1],[2353.1,.8],[3521,.55]]){let n=a(t);i(`sine`,e).connect(n).connect(ye)}ye.connect(M),this.whooshHz=new Od(ne.frequency,700,5),this.gWhoosh=new Od(re.gain,0,5e-4),this.gSurf=[ae,se,pe,ve,ye].map(e=>new Od(e.gain,0,3e-4)),this.gTicks=new Od(le.gain,0,5e-4),this.ticksRate=new Od(ce.playbackRate,1,.01),this.flutterRate=new Od(ge.playbackRate,1,.01),this.hosePan=Ed(r),this.hosePan.node.connect(n.hose);let be=a(.6),xe=s(t.flutter,.7);xe.playbackRate.value=2;let Se=a(.4);xe.connect(Se).connect(be.gain),be.connect(this.hosePan.node);let Ce=o(`bandpass`,4200,.9),we=a(0);s(t.white,1.7).connect(Ce).connect(we).connect(be);let Te=a(0),Ee=i(`sine`,1174.66),De=i(`sine`,1177.9),Oe=i(`sine`,1760);Ee.connect(Te),De.connect(Te);let ke=a(.6);Oe.connect(ke).connect(Te),Te.connect(be),this.gHoseNoise=new Od(we.gain,0,5e-4),this.gHoseTone=new Od(Te.gain,0,5e-5),this.hoseHz=new Od(Ce.frequency,4200,10),this.glitterRate=new Od(xe.playbackRate,2,.02)}growl(){this.growlT=0}nudge(){this.nudgeT=0}update(e,t,n){let r=this.ctx.currentTime;if(e=Math.min(Math.max(e,0),.1),this.spin+=(this.spinTarget-this.spin)*(1-Math.exp(-e*(this.spinTarget>this.spin?2.2:7.5))),this.growlT+=e,this.nudgeT+=e,!n)return;let i=pd(t.motor)*this.spin,a=pd(t.intake),o=Math.min(1.2,Math.max(0,t.fullness)),s=hd(.5,.9,o),c=hd(.92,1,o),l=hd(.78,.9,o)*(1-c),u=this.growlT<1.4?Math.sin(Math.PI*this.growlT/1.4):0,d=this.nudgeT<.45?Math.sin(Math.PI*this.nudgeT/.45)**2:0,f=(98*(1+.045*a)*(1-c)+110*c)*(.3+.7*i)*2**((-3*u+1.6*d)/12),p=.04;this.f0Low.to(f,r,p),this.f0High.to(f,r,p),this.fWhineA.to(f*13,r,p),this.fWhineB.to(f*13.05,r,p),this.gLow.to(1-.5*c,r,.3),this.gHigh.to(.55*s*(1-.6*c)+.5*u,r,.2),this.gWhine.to(.05*l,r,.3),this.motorCut.to((560+650*a+1500*s)*(1-.35*u)*(1-.35*c),r,.12),this.motorAmp.to(Dd.motor*i**.7*(1+.4*d+.15*u),r,.05),this.growlDepth.to(.28*u,r,.05);let m=Dd.resonance*c*i*(1-u);this.resAmp.to(m,r,m<this.resAmp.value?.12:.9),this.panTo(0,this.motorPan,t.bodyPan,r,.15);let h=Math.min(1,Math.max(0,t.nozzleSpeed)/1.6);this.whooshHz.to(620+1100*a+250*h,r,.15),this.gWhoosh.to(Dd.whoosh*i*(.1+.9*a**.7+.12*h),r,.08);let g=t.surfaceAir,_=.1;this.gSurf[0].to(Dd.floor*pd(g[0])*(.6+.4*h),r,_),this.gSurf[1].to(Dd.carpet*pd(g[1])*(.7+.3*h),r,_),this.gSurf[2].to(Dd.sofa*pd(g[2]),r,.15),this.gSurf[3].to(Dd.curtain*pd(g[3]),r,.15),this.gSurf[4].to(Dd.hidden*pd(g[4]),r,.3),this.gTicks.to(Dd.ticks*pd(g[1])*(.35+.65*h),r,_),this.ticksRate.to(.8+.5*h,r,.2),this.flutterRate.to(.8+.5*pd(g[3]),r,.3),this.panTo(1,this.airPan,t.nozzlePan,r,.08);let v=pd(t.hoseFlux);this.gHoseNoise.to(Dd.hoseNoise*Math.sqrt(v),r,.1),this.gHoseTone.to(Dd.hoseTone*v*Math.sqrt(v),r,.15),this.hoseHz.to(3600+1600*v,r,.2),this.glitterRate.to(1.4+1.4*v,r,.3),this.panTo(2,this.hosePan,t.hosePan,r,.06)}panTo(e,t,n,r,i){Math.abs(n-this.panLast[e])<.01||(this.panLast[e]=n,t.to(n,r,i))}},Ad=.019,jd=.009,Md=class{constructor(e,t,n){Z(this,`ctx`,void 0),Z(this,`dest`,void 0),Z(this,`wave`,void 0),Z(this,`oscs`,[]),Z(this,`out`,null),this.ctx=e,this.dest=t,this.wave=n}get active(){return this.out!==null}swell(e,t){let n=this.ctx,r=n.currentTime+.02;this.out&&this.settle(2.5);let i=n.createGain();i.gain.value=1;let a=n.createBiquadFilter();a.type=`lowpass`,a.Q.value=.4,a.frequency.setValueAtTime(320,r),a.frequency.setTargetAtTime(1900,r+.5,1.8),a.connect(i).connect(this.dest);let o=this.osc(`sine`,.09,r),s=n.createGain();s.gain.value=260,o.connect(s).connect(a.detune);let c=[];for(let t of e){let e=Math.round(pd(t)*8);c.indexOf(e)<0&&c.length<5&&c.push(e)}if(c.length<2&&c.push(c[0]===3?5:3),c.sort((e,t)=>e-t),[[wd(0,3),.8],[wd(3,3),.4],...c.map((e,t)=>[wd(e,4),1/(1+.18*t)])].forEach(([e,t],i)=>{let o=n.createGain();o.gain.value=0,o.gain.setValueAtTime(0,r),o.gain.setTargetAtTime(Ad*t,r+i*.45,1+.12*i),o.connect(a);for(let t of[-5,5]){let n=this.osc(this.wave,e,r);n.detune.value=t+(Math.random()-.5)*2,n.connect(o)}}),t>.01){let e=n.createGain();e.gain.value=0,e.gain.setValueAtTime(0,r),e.gain.setTargetAtTime(jd*Math.min(1,.4+t),r+1.5,1.6),e.connect(i);for(let[t,i]of[[1760,1],[1762.7,.8],[2637,.5],[2640.4,.4]]){let a=this.osc(`sine`,t,r),o=n.createGain();o.gain.value=i,a.connect(o).connect(e)}}this.out=i}settle(e=1.6){let t=this.out;if(!t)return;let n=this.ctx.currentTime;t.gain.cancelScheduledValues(n),t.gain.setValueAtTime(t.gain.value,n),t.gain.setTargetAtTime(0,n,e);let r=n+e*7,i=this.oscs;for(let e of i)e.stop(r);i[0].onended=()=>t.disconnect(),this.oscs=[],this.out=null}osc(e,t,n){let r=this.ctx.createOscillator();return typeof e==`string`?r.type=e:r.setPeriodicWave(e),r.frequency.value=t,r.start(n),this.oscs.push(r),r}},Nd=class{constructor(e,t,n){Z(this,`input`,void 0),Z(this,`pan`,void 0),Z(this,`end`,0),Z(this,`last`,null),this.input=e.createGain(),this.pan=Ed(e,n),this.input.connect(this.pan.node).connect(t)}panTo(e,t,n){this.pan.to(e,t,n)}track(e,t){t>=this.end&&(this.end=t,this.last=e)}seal(){let e=this.last;e&&(e.onended=()=>{this.input.disconnect(),this.pan.node.disconnect()})}},Pd=class{constructor(e,t=1){Z(this,`target`,void 0),Z(this,`tau`,void 0),Z(this,`rate`,0),Z(this,`at`,0),this.target=e,this.tau=t}pass(e){return this.rate=this.rate*Math.exp(-Math.max(0,e-this.at)/this.tau)+1/this.tau,this.at=e,Math.random()*this.rate<this.target}get busy(){return Math.min(1,Math.max(0,this.rate-this.target)/(3*this.target))}},Fd={pop:.11,popAir:.22,zip:.05,zipAir:.16,sparkle:.026,deposit:.03,pon:.11,chime:.035,click:.09,blip:.05,rush:.4,touch:.07,glint:.036},Id=class{constructor(e,t,n,r){Z(this,`ctx`,void 0),Z(this,`bank`,void 0),Z(this,`sfx`,void 0),Z(this,`padBus`,void 0),Z(this,`lastSparkle`,-9),Z(this,`lastDeposit`,-9),Z(this,`lastZip`,-9),Z(this,`lastPop`,-9),Z(this,`lastLatch`,-9),Z(this,`lastTouch`,-9),Z(this,`sparkles`,new Pd(1.2)),Z(this,`deposits`,new Pd(3)),this.ctx=e,this.bank=t,this.sfx=n,this.padBus=r}voice(e,t=this.sfx){return new Nd(this.ctx,t,e)}tone(e,t,n,r,i,a,o={}){let s=this.ctx,c=s.createOscillator();o.wave&&c.setPeriodicWave(o.wave),c.frequency.setValueAtTime(n,t),o.glideTo&&c.frequency.exponentialRampToValueAtTime(o.glideTo,t+(o.glideTime??.1));let l=s.createGain();l.gain.value=0;let u=Td(l.gain,t,r,i,a,o.hold);c.connect(l).connect(e.input),c.start(t),c.stop(u),e.track(c,u)}noise(e,t,n,r,i,a,o,s={}){let c=this.ctx,l=c.createBufferSource();l.buffer=t,l.loop=!0;let u=c.createBiquadFilter();u.type=s.type??`bandpass`,u.Q.value=s.q??1,u.frequency.setValueAtTime(r,n),s.sweepTo&&u.frequency.exponentialRampToValueAtTime(s.sweepTo,n+(s.sweepTime??.2));let d=c.createGain();d.gain.value=0;let f=Td(d.gain,n,i,a,o,s.hold);l.connect(u).connect(d).connect(e.input),l.start(n,Math.random()*t.duration),l.stop(f),e.track(l,f)}get now(){return this.ctx.currentTime+.005}pop(e,t){let n=.4+.6*pd(e),r=this.now;if(r-this.lastPop<.08)return;this.lastPop=r;let i=this.voice(t),a=470*(.92+Math.random()*.16);this.tone(i,r,a,Fd.pop*n,.004,.032,{glideTo:a*.45,glideTime:.09}),this.tone(i,r,a*2.02,Fd.pop*.18*n,.004,.018,{glideTo:a*.9,glideTime:.07}),this.noise(i,this.bank.pink,r,950,Fd.popAir*n,.006,.035,{q:1.1,sweepTo:600,sweepTime:.1}),i.seal()}zip(e,t,n,r){let i=this.now;if(i-this.lastZip<.12)return;this.lastZip=i;let a=.3+.7*pd(e),o=.75+.5*pd(n),s=this.voice(t);s.panTo(r,i+.04,.14);let c=440*o;this.tone(s,i,c,Fd.zip*a,.03,.07,{glideTo:c*3,glideTime:.34,hold:.12}),this.tone(s,i,c*1.5,Fd.zip*.45*a,.04,.06,{glideTo:c*4.5,glideTime:.34,hold:.1}),this.noise(s,this.bank.white,i,1300*o,Fd.zipAir*a,.05,.08,{q:1.4,sweepTo:5200*o,sweepTime:.34,hold:.1}),s.seal()}sparkle(e,t){let n=this.now,r=pd(e);if(!this.sparkles.pass(n)||n-this.lastSparkle<.3||Math.random()>.5+.5*r)return;this.lastSparkle=n;let i=this.voice(t),a=wd(Math.floor(Math.random()*4),5)/2,o=r>.6?4:3;for(let e=0;e<o;e++){let t=[3,4,5,6][e];this.tone(i,n+e*(.032+Math.random()*.012),a*t,Fd.sparkle*(.5+.5*r)/Math.sqrt(e+1),.004,.05)}i.seal()}deposit(e,t,n){let r=this.now;if(!this.deposits.pass(r)||r-this.lastDeposit<.09)return;this.lastDeposit=r;let i=.35+.65*pd(e),a=this.voice(t),o=wd(3+Math.floor(pd(n)*6)+(Math.random()<.5?0:1),5),s=1-.35*this.deposits.busy;this.tone(a,r,o,Fd.deposit*i*s,.003,.028),this.tone(a,r,o*2.76,Fd.deposit*.3*i*s,.002,.014),a.seal()}click(e,t=1){let n=this.now,r=this.voice(e);this.noise(r,this.bank.white,n,2100,Fd.click*.8*t,.002,.008,{q:1.6}),this.tone(r,n,380,Fd.click*t,.003,.018,{glideTo:300,glideTime:.04}),r.seal()}latchHint(e){let t=this.now;if(t-this.lastLatch<.5)return;this.lastLatch=t;let n=this.voice(e);this.tone(n,t,640,Fd.pon,.004,.045,{wave:this.bank.soft,glideTo:560,glideTime:.08}),this.noise(n,this.bank.white,t,1800,Fd.pon*.35,.002,.01,{q:1.2});let r=this.voice(e,this.padBus);this.bell(r,t+.1,wd(3,5),Fd.chime,.26),this.bell(r,t+.23,wd(5,5),Fd.chime,.32),n.seal(),r.seal()}bell(e,t,n,r,i){this.tone(e,t,n,r,.006,i),this.tone(e,t,n*2,r*.16,.005,i*.5),this.tone(e,t,n*3,r*.05,.004,i*.3)}motorBlip(e){let t=this.now,n=this.voice(e),r=this.ctx.createBiquadFilter();r.type=`lowpass`,r.frequency.value=900,r.connect(n.input);let i=this.ctx.createOscillator();i.setPeriodicWave(this.bank.motorLow),i.frequency.setValueAtTime(150,t),i.frequency.exponentialRampToValueAtTime(215,t+.09),i.frequency.exponentialRampToValueAtTime(160,t+.26);let a=this.ctx.createGain();a.gain.value=0;let o=Td(a.gain,t,Fd.blip,.025,.06,.1);i.connect(a).connect(r),i.start(t),i.stop(o),n.track(i,o),n.seal()}rush(e){let t=this.now,n=.4+.6*pd(e),r=2.6;for(let e of[-.55,.55]){let i=this.voice(e);this.noise(i,this.bank.pink,t+(e>0?.06:0),240,Fd.rush*n,.9,r*.2,{q:.85,sweepTo:3e3,sweepTime:r,hold:r*.35}),i.seal()}let i=this.voice(0);this.tone(i,t,150,Fd.rush*.12*n,.35,.35,{wave:this.bank.soft,glideTo:110,glideTime:1.2}),i.seal()}touch(e,t){let n=this.now;if(n-this.lastTouch<.1)return;this.lastTouch=n;let r=this.voice(e,this.padBus),i=Math.round(pd(t)*8);this.bell(r,n,wd(i,5),Fd.touch,.38),r.seal()}moteDrop(e){let t=this.now,n=this.voice(e*.5,this.padBus);n.panTo(e,t,1.2);let r=[8,7,6,5];for(let e=0;e<r.length;e++){let i=wd(r[e],5);this.tone(n,t+e*1.05,i,Fd.glint*(1-e*.12),.005,.12),this.tone(n,t+e*1.05,i*3,Fd.glint*.12,.004,.05)}n.seal()}moteSplit(e){let t=this.now;for(let n=0;n<7;n++){let r=this.voice(e+(Math.random()-.5)*.8,this.padBus),i=5+Math.floor(Math.random()*6);this.tone(r,t+n*.07+Math.random()*.04,wd(i,5),Fd.glint*(.6+.4*Math.random()),.005,.1),r.seal()}let n=this.voice(e);this.noise(n,this.bank.pink,t,1100,Fd.popAir*.25,.02,.08,{q:.8}),n.seal()}},Ld=1.7,Rd=.5,zd={threshold:-12,knee:0,ratio:12,attack:.004,release:.25},Bd=1/2.138,Vd={layers:.07,sfx:.22,pad:.42},Hd=class{constructor(e){if(Z(this,`ctx`,null),Z(this,`live`,void 0),Z(this,`isUnlocked`,!1),Z(this,`layers`,null),Z(this,`voices`,null),Z(this,`pad`,null),Z(this,`mix`,null),Z(this,`airDuck`,null),Z(this,`hoseDuck`,null),Z(this,`fullness`,0),Z(this,`bodyPan`,0),Z(this,`padAge`,0),Z(this,`hideToken`,0),this.live=!e?.context,e?.context&&(this.build(e.context),this.isUnlocked=!Ud(e.context)||e.context.state===`running`),typeof document<`u`&&this.live){let e=()=>this.onGesture();for(let t of[`pointerdown`,`pointerup`,`touchend`,`mousedown`,`keydown`])window.addEventListener(t,e,{capture:!0,passive:!0});document.addEventListener(`visibilitychange`,()=>this.onVisibility()),window.addEventListener(`pageshow`,()=>this.onVisibility())}}get unlocked(){return this.isUnlocked}get running(){let e=this.ctx;return!!e&&(!Ud(e)||e.state===`running`)}sound(){return this.running?this.voices:null}unlock(){try{let e=navigator;e.audioSession&&e.audioSession.type!==`playback`&&(e.audioSession.type=`playback`)}catch{}try{if(!this.ctx){let e=window,t=e.AudioContext??e.webkitAudioContext;if(!t)return;let n;try{n=new t({latencyHint:`interactive`})}catch{n=new t}this.build(n)}let e=this.ctx;if(!e||!Ud(e))return;let t=e;if(t.state!==`running`){let e=t.createBufferSource();e.buffer=t.createBuffer(1,1,t.sampleRate),e.connect(t.destination),e.start(0),document.hidden||t.resume().catch(()=>void 0)}this.isUnlocked=!0}catch{}}update(e,t){this.fullness=t.fullness,this.bodyPan=t.bodyPan,this.layers&&(this.layers.update(e,t,this.running),this.pad?.active&&(this.padAge+=e,this.padAge>45&&this.pad.settle()))}pop(e,t){this.sound()?.pop(e,t)}zip(e,t,n){this.sound()?.zip(e,t,n,this.bodyPan)}sparkle(e,t){this.sound()?.sparkle(e,t)}deposit(e,t){this.sound()?.deposit(e,t,this.fullness)}fullReached(){this.layers?.growl()}latchHint(e){this.sound()?.latchHint(e)}finaleOpen(){let e=this.ctx;if(!e||!this.layers)return;let t=e.currentTime;this.sound()?.click(this.bodyPan,1),this.layers.spinTarget=0,Wd(this.airDuck,0,t,.08),Wd(this.hoseDuck,0,t,.08),Wd(this.hoseDuck,.5,t+1.3,.5)}finaleRush(e){this.sound()?.rush(e)}finaleSwell(e,t){this.padAge=0,this.pad?.swell(e,t)}finaleTouch(e,t){this.sound()?.touch(e,t)}finaleSettle(){this.pad?.settle()}moteDrop(e){this.sound()?.moteDrop(e)}moteSplit(e){this.sound()?.moteSplit(e)}idleNudge(e){this.layers?.nudge(),this.sound()?.motorBlip(e)}motorStart(){let e=this.ctx;if(!e||!this.layers)return;let t=e.currentTime;this.layers.spinTarget<1&&this.sound()?.click(this.bodyPan,.5),this.layers.spinTarget=1,Wd(this.airDuck,1,t,.35),Wd(this.hoseDuck,1,t,.35)}build(e){this.ctx=e;let t=t=>{let n=e.createGain();return n.gain.value=t,n},n={white:_d(e,4.3,`white`,11),pink:_d(e,5.1,`pink`,23),ticks:vd(e,3.3,15,37),flutter:yd(e,2,6,13,41),motorLow:Sd(e,[.55,.8,.62,.45,.3,.18,.1]),motorHigh:Sd(e,[0,0,0,0,.5,.42,.34,.25,.18,.12,.08]),soft:Sd(e,[1,.38,.16,.07,.03]),reed:Sd(e,[.6,1,.6,.38,.2,.1])},r=t(0);r.gain.setTargetAtTime(Ld,e.currentTime,.05);let i=e.createDynamicsCompressor();i.threshold.value=zd.threshold,i.knee.value=zd.knee,i.ratio.value=zd.ratio,i.attack.value=zd.attack,i.release.value=zd.release;let a=t(Bd),o=e.createWaveShaper();o.curve=xd(Rd),o.oversample=`none`,r.connect(i).connect(a).connect(o).connect(e.destination);let s=e.createConvolver();s.normalize=!1,s.buffer=bd(e,1.2,53),s.connect(r);let c=e=>{let n=t(1);return n.connect(r),n.connect(t(e)).connect(s),n},l=c(Vd.layers),u=c(Vd.sfx),d=c(Vd.pad),f=t(1),p=t(1);f.connect(l),p.connect(l),this.mix=r,this.airDuck=f,this.hoseDuck=p,this.layers=new kd(e,n,{motor:l,air:f,hose:p}),this.voices=new Id(e,n,u,d),this.pad=new Md(e,d,n.soft)}onGesture(){let e=this.ctx;(!e||e.state!==`running`)&&this.unlock()}onVisibility(){let e=this.ctx,t=this.mix;if(!e||!t||!this.live)return;let n=++this.hideToken,r=e.currentTime;t.gain.cancelScheduledValues(r),t.gain.setValueAtTime(t.gain.value,r),document.hidden?(t.gain.setTargetAtTime(0,r,.015),setTimeout(()=>{n===this.hideToken&&document.hidden&&e.suspend().catch(()=>void 0)},120)):this.isUnlocked&&(e.resume().catch(()=>void 0),t.gain.setTargetAtTime(Ld,r,.12))}};function Ud(e){return!(`startRendering`in e)}function Wd(e,t,n,r){e&&(e.gain.cancelScheduledValues(n),e.gain.setTargetAtTime(t,n,r))}var Gd=Tu();function Kd(e,t,n,r){let i=K.minX+n,a=K.maxX-n,o=K.minZ+n,s=K.maxZ-n;e=Math.min(a,Math.max(i,e)),t=Math.min(s,Math.max(o,t));for(let r=0;r<3;r++){let r=!1;for(let c of Gd){let l=c.hw+n,u=c.hd+n,d=e-c.cx,f=t-c.cz;if(Math.abs(d)>=l||Math.abs(f)>=u)continue;let p=-1,m=1/0,h=e,g=t;for(let n=0;n<4;n++){let r=n===0?c.cx-l:n===1?c.cx+l:e,_=n===2?c.cz-u:n===3?c.cz+u:t,v=n===0?l+d:n===1?l-d:n===2?u+f:u-f;r>=i-1e-4&&r<=a+1e-4&&_>=o-1e-4&&_<=s+1e-4&&v<m&&(m=v,p=n,h=r,g=_)}p>=0&&(e=h,t=g,r=!0)}if(!r)break}return r[0]=e,r[1]=t,r}function qd(e,t,n){for(let r of Gd)if(Math.abs(e-r.cx)<r.hw+n&&Math.abs(t-r.cz)<r.hd+n)return!0;return!1}var Jd={x0:J.cx-J.w/2+J.armW+.18,x1:J.cx+J.w/2-J.armW-.18,z0:J.cz-J.d/2+.38,z1:J.cz+J.d/2-.12,front:J.cz+J.d/2,y:J.seatH};function Yd(e,t,n=0){return Math.abs(e-J.cx)<J.w/2+n&&Math.abs(t-J.cz)<J.d/2+n}function Xd(e,t){if(e<Jd.x0-.02||e>Jd.x1+.02)return 0;let n=Math.min(1,Math.max(0,(Jd.front+.16-t)/.26));return Jd.y*n*n*(3-2*n)}function Zd(e,t,n,r,i){return r&&Yd(e,t,n)?(i[0]=Math.min(Jd.x1,Math.max(Jd.x0,e)),i[1]=Math.max(Jd.z0,t),i):Kd(e,t,n,i)}var Qd=0,$d=1,ef=2,tf=3,nf=4,rf=5,af=6,of={MOTE:0,FILAMENT:1,RARE:2,CLUMP:3,FLASH:4},sf=2.4,cf=.25,lf=Math.ceil((K.maxX-K.minX)/cf),uf=Math.ceil((K.maxZ-K.minZ)/cf),df=[{gain:8,max:5.5},{gain:6,max:3.6},{gain:4,max:2.4},{gain:0,max:0},{gain:0,max:.9}],ff=.45,pf=.5,mf=1.5,hf=.28,gf=14,_f=.07,vf=class{constructor(e){Z(this,`group`,new Rn),Z(this,`cap`,void 0),Z(this,`events`,{}),Z(this,`remaining`,new Float32Array(5)),Z(this,`surfaceAir`,new Float32Array(5)),Z(this,`spot`,yu[0]),Z(this,`spotCoax`,0),Z(this,`hueShift`,0),Z(this,`pos`,void 0),Z(this,`vel`,void 0),Z(this,`home`,void 0),Z(this,`col`,void 0),Z(this,`data`,void 0),Z(this,`surf`,void 0),Z(this,`state`,void 0),Z(this,`kind`,void 0),Z(this,`hold`,void 0),Z(this,`loosen`,void 0),Z(this,`depth`,void 0),Z(this,`amount`,void 0),Z(this,`hue`,void 0),Z(this,`lit`,void 0),Z(this,`timer`,void 0),Z(this,`aux`,void 0),Z(this,`free`,void 0),Z(this,`freeTop`,0),Z(this,`loose`,void 0),Z(this,`looseN`,0),Z(this,`cellStart`,new Int32Array(lf*uf+1)),Z(this,`cellItems`,void 0),Z(this,`gridDirty`,!0),Z(this,`clumps`,[]),Z(this,`floorRibbons`,[]),Z(this,`ribbons`,null),Z(this,`rng`,new Ju(1)),Z(this,`rareAnnounced`,!1),Z(this,`surfAirAcc`,new Float32Array(5)),Z(this,`stressList`,void 0),Z(this,`stressN`,0),Z(this,`inStress`,void 0),Z(this,`visit`,void 0),Z(this,`stamp`,1),Z(this,`flashIdx`,void 0),Z(this,`flash`,0),Z(this,`flashCol`,new H(.4,1,.9)),Z(this,`geo`,new Wr),Z(this,`aPos`,void 0),Z(this,`aVel`,void 0),Z(this,`aCol`,void 0),Z(this,`aData`,void 0),Z(this,`dirtyMin`,1/0),Z(this,`dirtyMax`,-1),Z(this,`dataMin`,1/0),Z(this,`dataMax`,-1),Z(this,`colDirty`,!0),Z(this,`colMin`,1/0),Z(this,`colMax`,-1),Z(this,`material`,void 0),Z(this,`mirrorMaterial`,void 0),Z(this,`points`,void 0),Z(this,`mirror`,void 0),Z(this,`air`,new B),Z(this,`tmpV`,new B),Z(this,`tmpV2`,new B),Z(this,`tmpC`,new H),Z(this,`cellFill`,new Int32Array(lf*uf)),Z(this,`finaleList`,new Int32Array(4096)),Z(this,`finaleN`,0),Z(this,`interestScore`,0),Z(this,`spawning`,0);let t=this.cap=e.quality.particles+901;this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.home=new Float32Array(t*3),this.col=new Float32Array(t*3),this.data=new Float32Array(t*4),this.surf=new Uint8Array(t),this.state=new Uint8Array(t),this.kind=new Uint8Array(t),this.hold=new Float32Array(t),this.loosen=new Float32Array(t),this.depth=new Float32Array(t),this.amount=new Float32Array(t),this.hue=new Float32Array(t),this.lit=new Float32Array(t),this.timer=new Float32Array(t),this.aux=new Float32Array(t*4),this.free=new Int32Array(t),this.loose=new Int32Array(t),this.cellItems=new Int32Array(t),this.stressList=new Int32Array(t),this.inStress=new Uint8Array(t),this.visit=new Uint32Array(t),this.flashIdx=t-1,this.state[this.flashIdx]=af,this.kind[this.flashIdx]=of.FLASH,this.data[this.flashIdx*4]=.05,this.data[this.flashIdx*4+1]=.5,this.data[this.flashIdx*4+3]=of.FLASH,this.resetPool(),this.aPos=new U(this.pos,3).setUsage(et),this.aVel=new U(this.vel,3).setUsage(et),this.aCol=new U(this.col,3).setUsage(et),this.aData=new U(this.data,4).setUsage(et),this.geo.setAttribute(`position`,this.aPos),this.geo.setAttribute(`aVel`,this.aVel),this.geo.setAttribute(`aColor`,this.aCol),this.geo.setAttribute(`aData`,this.aData),this.geo.boundingSphere=new Ir(new B(0,1,0),8),this.material=this.makeMaterial(!1),this.mirrorMaterial=this.makeMaterial(!0),this.points=new Fi(this.geo,this.material),this.points.frustumCulled=!1,this.points.renderOrder=5,this.group.add(this.points),e.quality.level>=1?(this.mirror=new Fi(this.geo,this.mirrorMaterial),this.mirror.frustumCulled=!1,this.mirror.renderOrder=4,this.group.add(this.mirror)):this.mirror=null}setViewport(e,t){let n=e/(2*Math.tan(zt.degToRad(t)/2));this.material.uniforms.uPixel.value=n,this.mirrorMaterial.uniforms.uPixel.value=n,this.material.uniforms.uViewH.value=e,this.mirrorMaterial.uniforms.uViewH.value=e}resetPool(){this.freeTop=0;for(let e=this.flashIdx-1;e>=0;e--)this.state[e]=Qd,this.data[e*4+2]=0,this.inStress[e]=0,this.free[this.freeTop++]=e;this.looseN=0,this.stressN=0}alloc(){return this.freeTop>0?this.free[--this.freeTop]:-1}kill(e){this.state[e]=Qd,this.data[e*4+2]=0,this.vel[e*3]=this.vel[e*3+1]=this.vel[e*3+2]=0,this.free[this.freeTop++]=e,this.touch(e)}touch(e){e<this.dirtyMin&&(this.dirtyMin=e),e>this.dirtyMax&&(this.dirtyMax=e)}touchData(e){e<this.dataMin&&(this.dataMin=e),e>this.dataMax&&(this.dataMax=e)}setStress(e,t){let n=Math.round(Math.min(1,Math.max(0,t))*24)/24,r=this.kind[e]+n*.9;this.data[e*4+3]!==r&&(this.data[e*4+3]=r,this.touchData(e))}markStress(e){this.visit[e]=this.stamp,!this.inStress[e]&&(this.inStress[e]=1,this.stressList[this.stressN++]=e)}seed(e,t,n,r){this.rng=e,this.resetPool(),t.light.clearRest(),this.remaining.fill(0),this.hueShift=e.range(-.07,.07),this.spot=e.pick(yu),this.spotCoax=0,this.rareAnnounced=!1,this.clumps=[],this.floorRibbons=[];let i=this.cap-901,a=Math.round(i*.44),o=Math.round(i*.3),s=Math.round(i*.14),c=i-a-o-s,l=[];this.seedFloor(e,a,n,l),this.seedCarpet(e,o,t.carpet,l),this.seedSofa(e,s,t.sofa,l),this.seedHidden(e,c,l);for(let e of this.clumps)e.idx>=0&&l.push(e.idx);for(let n of l)if(r){this.state[n]=tf,this.aux[n*4]=r.x,this.aux[n*4+1]=r.y,this.aux[n*4+2]=r.z;let t=Math.hypot(this.home[n*3]-r.x,this.home[n*3+2]-r.z);this.timer[n]=-(e.range(0,.9)+t*.35),this.aux[n*4+3]=1.3+t*.45+e.range(0,.6),this.pos[n*3]=r.x,this.pos[n*3+1]=r.y,this.pos[n*3+2]=r.z,this.data[n*4+2]=0}else this.kind[n]===of.CLUMP?this.state[n]=rf:this.settle(n,t.light);this.gridDirty=!0,this.colDirty=!0,this.dirtyMin=0,this.dirtyMax=this.cap-1}setColor(e,t,n){Lu(t,this.tmpC),this.col[e*3]=this.tmpC.r*n,this.col[e*3+1]=this.tmpC.g*n,this.col[e*3+2]=this.tmpC.b*n,this.markCol(e)}markCol(e){e<this.colMin&&(this.colMin=e),e>this.colMax&&(this.colMax=e)}hueFor(e,t){let[n,r]=Bu[e];return Math.min(1,Math.max(0,n+(r-n)*t+this.hueShift))}init(e,t,n,r,i,a,o,s,c,l){this.surf[e]=t,this.home[e*3]=this.pos[e*3]=n,this.home[e*3+1]=this.pos[e*3+1]=r,this.home[e*3+2]=this.pos[e*3+2]=i,this.vel[e*3]=this.vel[e*3+1]=this.vel[e*3+2]=0,this.hue[e]=a,this.amount[e]=o,this.loosen[e]=0,this.lit[e]=0,this.timer[e]=0,this.kind[e]=s;let u=l.next(),d=(.5+1.8*u*u*u)*(s===of.FILAMENT?.8:1);Lu(a,this.tmpC),this.col[e*3]=this.tmpC.r*d,this.col[e*3+1]=this.tmpC.g*d,this.col[e*3+2]=this.tmpC.b*d,this.data[e*4]=s===of.MOTE?c*(.8+.35*u):c,this.data[e*4+1]=l.next(),this.data[e*4+2]=1,this.data[e*4+3]=s}seedFloor(e,t,n,r){let i=bu.floor*.9299999999999999/t,a=[];a.push({x:n.x+e.range(-.1,.1),z:n.z-.42,r:.26,ang:e.range(0,Math.PI),asp:1.5,w:1.1,phase:e.next()*6});let o=0;for(;a.length<8&&o++<400;){let t=e.range(K.minX+.35,K.maxX-.35),n=e.range(K.minZ+.4,K.maxZ-.35),r=e.range(.24,.5);Du(t,n,-r*.5)||qd(t,n,r*.6)||a.some(e=>Math.hypot(e.x-t,e.z-n)<e.r+r+.25)||a.push({x:t,z:n,r,ang:e.range(0,Math.PI),asp:e.range(1.2,2.4),w:e.range(.7,1.3),phase:e.next()*6})}this.planFloorRibbons(e,a);let s=a.reduce((e,t)=>e+t.w*t.r,0),c=Math.round(t*.8),l=0;for(let t=0;t<a.length;t++){let n=a[t],o=t===a.length-1?c-l:Math.round(c*n.w*n.r/s);l+=o;let u=Math.cos(n.ang),d=Math.sin(n.ang),f=e.next();for(let t=0;t<o;t++){let t=this.alloc();if(t<0)return;let a=e.gauss(0,n.r*.55*n.asp),o=e.gauss(0,n.r*.4/n.asp);o+=.06*Math.sin(a*8+n.phase)+.03*Math.sin(a*19+n.phase*2);let s=n.x+a*u-o*d,c=n.z+a*d+o*u;if(Du(s,c)||qd(s,c,.02)||s<K.minX+.05||s>K.maxX-.05||c<K.minZ+.05||c>K.maxZ-.05){this.free[this.freeTop++]=t;continue}let l=e.chance(.05),p=this.hueFor(0,(f+a/(n.r*2)*.6+e.range(-.1,.1)+10)%1),m=e.next();this.init(t,Y.FLOOR,s,.004+e.next()*.008,c,p,i,l?of.FILAMENT:of.MOTE,l?e.range(.07,.13):.0065+.011*m*m,e),this.hold[t]=l?.17:.11+e.next()*.08,this.depth[t]=0,r.push(t)}}for(let n=0;n<t-c;n++){let t=this.alloc();if(t<0)return;let n=e.range(K.minX+.2,K.maxX-.2),a=e.range(K.minZ+.25,K.maxZ-.2);if(Du(n,a)||qd(n,a,.02)){this.free[this.freeTop++]=t;continue}this.init(t,Y.FLOOR,n,.004,a,this.hueFor(0,e.next()),i,of.MOTE,e.range(.0055,.011),e),this.hold[t]=.12,this.depth[t]=0,r.push(t)}}planFloorRibbons(e,t){let n=t.slice(1).sort((e,t)=>t.w*t.r*t.asp-e.w*e.r*e.asp),r=Math.min(2,n.length);for(let t=0;t<r;t++){let i=n[t],a=Math.cos(i.ang),o=Math.sin(i.ang),s=Math.min(.8,Math.max(.36,i.r*i.asp*1.1)),c=[],l=!0;for(let e=0;e<gf&&l;e++){let t=(e/13-.5)*s,n=.06*Math.sin(t*8+i.phase)+.03*Math.sin(t*19+i.phase*2),r=i.x+t*a-n*o,u=i.z+t*o+n*a;l=!Du(r,u,-.05)&&!qd(r,u,.03)&&r>K.minX+.08&&r<K.maxX-.08&&u>K.minZ+.08&&u<K.maxZ-.08,c.push(new B(r,.012,u))}if(!l)continue;let u=this.hueFor(0,e.next());this.floorRibbons.push({pts:c,color:Lu(u,new H),hue:u,amount:bu.floor*_f/r,handle:-1,stress:0,done:!1})}}carpetY(e,t){return e?e.depthToY(t):.003+q.pile*(1-t)*.9}seedCarpet(e,t,n,r){let i=bu.carpet/t,a=[];for(let t=0;t<4;t++)a.push({x:q.cx+e.range(-q.w*.38,q.w*.38),z:q.cz+e.range(-q.d*.36,q.d*.36),r:e.range(.25,.45)});for(let o=0;o<t;o++){let t=this.alloc();if(t<0)return;let o,s;if(e.chance(.65)){let t=e.pick(a);o=t.x+e.gauss(0,t.r*.5),s=t.z+e.gauss(0,t.r*.5)}else o=q.cx+e.range(-q.w/2,q.w/2),s=q.cz+e.range(-q.d/2,q.d/2);if(!Du(o,s,.06)||qd(o,s,0)){this.free[this.freeTop++]=t;continue}let c=e.chance(.65),l=c?e.range(.35,1):e.range(0,.2),u=e.chance(.07);this.init(t,Y.CARPET,o,this.carpetY(n,l),s,this.hueFor(1,e.next()),i,u?of.FILAMENT:of.MOTE,u?e.range(.05,.09):e.range(.0075,.016),e),this.depth[t]=l,this.hold[t]=c?.26:.3+e.next()*.1,this.data[t*4+2]=c?.45:1,r.push(t)}}fallbackSeams(){let e=J.cx-J.w/2+J.armW,t=J.cx+J.w/2-J.armW,n=J.cz-J.d/2+.25,r=J.seatH,i=[{points:[new B(e,r,n),new B(t,r,n)],normal:new B(0,.6,.8).normalize(),kind:`crevice`}],a=(t-e)/3;for(let t=1;t<3;t++){let o=e+a*t;i.push({points:[new B(o,r,n+.02),new B(o,r,J.cz+J.d/2-.02)],normal:new B(0,1,.2).normalize(),kind:`gap`})}return i}seedSofa(e,t,n,r){let i=n&&n.seams.length?n.seams:this.fallbackSeams(),a=bu.sofa*.6799999999999999/t,o=i.map(e=>{let t=0;for(let n=1;n<e.points.length;n++)t+=e.points[n].distanceTo(e.points[n-1]);return t*(e.kind===`crevice`?2.2:e.kind===`gap`?1.3:.5)}),s=o.reduce((e,t)=>e+t,0),c=(e,t,n)=>{let r=e.points.length-1,i=t*r,a=Math.min(r-1,Math.floor(i));return n.lerpVectors(e.points[a],e.points[a+1],i-a)},l=()=>{let t=e.next()*s;for(let e=0;e<i.length;e++)if(t-=o[e],t<=0)return i[e];return i[i.length-1]};for(let t=0;t<5;t++){let t=l(),n=c(t,e.range(.1,.9),new B),r={pos:n,normal:t.normal.clone(),amount:bu.sofa*.32/5,hue:this.hueFor(2,e.next()),pressure:0,popped:!1,idx:this.alloc()};if(this.clumps.push(r),this.remaining[Y.SOFA]+=r.amount,r.idx>=0){let t=this.tmpV2.copy(n).addScaledVector(r.normal,.014);this.init(r.idx,Y.SOFA,t.x,t.y,t.z,r.hue,0,of.CLUMP,.042,e),this.setColor(r.idx,r.hue,1.1),this.data[r.idx*4+2]=.8}}let u=new B;for(let n=0;n<t;n++){let t=this.alloc();if(t<0)return;let n;if(e.chance(.3)&&this.clumps.length){let t=e.pick(this.clumps);u.copy(t.pos).add(this.tmpV.set(e.gauss(0,.06),e.gauss(0,.006),e.gauss(0,.012))),n=i[0]}else n=l(),c(n,e.next(),u),u.x+=e.gauss(0,.006),u.y+=e.gauss(0,.005),u.z+=e.gauss(0,.006);let o=e.chance(.12);this.init(t,Y.SOFA,u.x,u.y,u.z,this.hueFor(2,e.next()),a,o?of.FILAMENT:of.MOTE,o?e.range(.04,.07):e.range(.007,.014),e),this.aux[t*4]=n.normal.x,this.aux[t*4+1]=n.normal.y,this.aux[t*4+2]=n.normal.z,this.hold[t]=.4+e.next()*.16,this.depth[t]=0,r.push(t)}}seedHidden(e,t,n){let r=this.spot,i=bu.hidden/t,[a,o]=r.open;for(let s=0;s<t;s++){let t=this.alloc();if(t<0)return;let s=e.range(r.x0+.03,r.x1-.03),c=e.range(r.z0+.03,r.z1-.03),l=.006+e.next()*Math.min(.05,r.gapH*.4);this.init(t,Y.HIDDEN,s,l,c,e.next(),i,of.RARE,e.range(.011,.021),e);let u=a<0?r.x0:a>0?r.x1:s,d=o<0?r.z0:o>0?r.z1:c,f=Math.hypot(s-u,c-d);this.depth[t]=f,this.hold[t]=.25+f*1.3+e.next()*.2,n.push(t)}}settle(e,t){this.state[e]=$d,this.vel[e*3]=this.vel[e*3+1]=this.vel[e*3+2]=0;let n=this.surf[e],r=this.data[e*4+2],i=this.amount[e]*sf*(n===Y.CARPET?.45+.55*r:n===Y.HIDDEN?1.3:1);this.lit[e]=i,this.kind[e]===of.RARE?t.addRest(this.pos[e*3],this.pos[e*3+2],i*.7,i*.55,i*.9):t.addRest(this.pos[e*3],this.pos[e*3+2],this.col[e*3]*i,this.col[e*3+1]*i,this.col[e*3+2]*i),this.remaining[n]+=this.amount[e],this.gridDirty=!0,this.touch(e)}unsettle(e,t){let n=this.lit[e];n>0&&(this.kind[e]===of.RARE?t.addRest(this.home[e*3],this.home[e*3+2],-n*.7,-n*.55,-n*.9):t.addRest(this.home[e*3],this.home[e*3+2],-this.col[e*3]*n,-this.col[e*3+1]*n,-this.col[e*3+2]*n),this.lit[e]=0),this.remaining[this.surf[e]]=Math.max(0,this.remaining[this.surf[e]]-this.amount[e])}rebuildGrid(){let e=this.cellStart;e.fill(0);let t=this.cap;for(let n=0;n<t;n++)this.state[n]===$d&&e[this.cellOf(this.pos[n*3],this.pos[n*3+2])+1]++;for(let t=1;t<=lf*uf;t++)e[t]+=e[t-1];let n=this.cellFill;n.set(e.subarray(0,lf*uf));for(let e=0;e<t;e++){if(this.state[e]!==$d)continue;let t=this.cellOf(this.pos[e*3],this.pos[e*3+2]);this.cellItems[n[t]++]=e}this.gridDirty=!1}cellOf(e,t){let n=Math.min(lf-1,Math.max(0,Math.floor((e-K.minX)/cf)));return Math.min(uf-1,Math.max(0,Math.floor((t-K.minZ)/cf)))*lf+n}update(e,t){let n=e.dt;this.gridDirty&&this.rebuildGrid(),this.surfAirAcc.fill(0),this.stamp=this.stamp+1>>>0||1;let r=t.suction;r.strength>.01&&r.sign>0?(this.updateHiddenCoax(n,r),this.scanNearNozzle(n,t),this.updateClumps(n,t)):this.spotCoax=Math.max(0,this.spotCoax-n*.05),this.relaxStress(n),this.updateFloorRibbons(n,t),this.updateLoose(n,t),this.updateFlash(n,r);for(let e=0;e<5;e++){let t=Math.min(1,this.surfAirAcc[e]);this.surfaceAir[e]+=(t-this.surfaceAir[e])*(1-Math.exp(-n*6))}this.upload()}updateHiddenCoax(e,t){let n=this.spot,r=t.mouth,i=Math.min(n.x1,Math.max(n.x0,r.x)),a=Math.min(n.z1,Math.max(n.z0,r.z)),o=Math.hypot(r.x-i,r.z-a),s=1-Math.min(1,Math.max(0,(o-.15)/.85));this.spotCoax=Math.min(2.2,this.spotCoax+s*s*e*.55*t.strength),s<.05&&(this.spotCoax=Math.max(0,this.spotCoax-e*.03)),this.surfAirAcc[Y.HIDDEN]+=s*.8}scanNearNozzle(e,t){let n=t.suction,r=n.mouth,i=wu.reach,a=Math.max(0,Math.floor((r.x-i-K.minX)/cf)),o=Math.min(lf-1,Math.floor((r.x+i-K.minX)/cf)),s=Math.max(0,Math.floor((r.z-i-K.minZ)/cf)),c=Math.min(uf-1,Math.floor((r.z+i-K.minZ)/cf)),l=t.carpet,u=t.sofa,d=this.spotCoax;for(let r=s;r<=c;r++)for(let i=a;i<=o;i++){let a=r*lf+i;for(let r=this.cellStart[a],i=this.cellStart[a+1];r<i;r++){let i=this.cellItems[r];if(this.state[i]!==$d)continue;let a=this.pos[i*3],o=this.pos[i*3+1],s=this.pos[i*3+2],c=this.surf[i];if(c===Y.HIDDEN){let n=this.hold[i];if(d<=.02)continue;if(d<n){let e=d/n;this.loosen[i]=Math.max(this.loosen[i],.6*e*e)}else this.rareAnnounced||(this.rareAnnounced=!0,this.events.rareEmerge?.(this.tmpV.set(a,o,s))),this.loosen[i]=Math.max(.6,this.loosen[i])+e*df[Y.HIDDEN].max;this.markStress(i),this.surfAirAcc[c]+=.006,this.loosen[i]>=1?this.lift(i,t):this.setStress(i,this.loosen[i]);continue}let f=n.speedAt(a,o,s);if(f<.05)continue;if(c===Y.CARPET){let e=this.depth[i];if(e>.25&&l){let t=l.partingAt(a,s),n=Math.min(1,Math.max(0,(t*1.15-e+.2)/.3)),r=.45+.55*n;if(Math.abs(r-this.data[i*4+2])>.02&&(this.data[i*4+2]=r,this.pos[i*3+1]=this.carpetY(l,e*(1-n*.85)),this.touch(i)),n<.6){this.surfAirAcc[c]+=f*.004,f>this.hold[i]&&(this.loosen[i]=Math.max(this.loosen[i],.3*n),this.markStress(i),this.setStress(i,this.loosen[i]));continue}}}else c===Y.SOFA&&u&&(f*=1+1.6*u.pullAt(this.tmpV.set(a,o,s)));let p=f-this.hold[i];if(p<=0)continue;let m=df[c];this.loosen[i]+=Math.min(p*m.gain,m.max)*e,this.surfAirAcc[c]+=.006,this.markStress(i),this.loosen[i]>=1?this.lift(i,t):this.setStress(i,this.loosen[i])}}}relaxStress(e){let t=0,n=this.stamp;for(let r=0;r<this.stressN;r++){let i=this.stressList[r];if(this.state[i]!==$d){this.inStress[i]=0;continue}if(this.visit[i]!==n&&(this.loosen[i]=Math.max(0,this.loosen[i]-e*ff),this.setStress(i,this.loosen[i]),this.loosen[i]<=0)){this.inStress[i]=0;continue}this.stressList[t++]=i}this.stressN=t}lift(e,t){this.unsettle(e,t.light),this.state[e]=ef,this.timer[e]=0,this.aux[e*4+3]=0;let n=this.surf[e],r=this.vel,i=this.data[e*4+1];if(n===Y.SOFA)r[e*3]=this.aux[e*4]*.3,r[e*3+1]=this.aux[e*4+1]*.3,r[e*3+2]=this.aux[e*4+2]*.3;else if(n===Y.HIDDEN){let[t,n]=this.spot.open;r[e*3]=t*.08,r[e*3+1]=0,r[e*3+2]=n*.08}else n===Y.CARPET?r[e*3+1]=(this.depth[e]>.25?.42:.2)+i*.12:r[e*3+1]=.02;this.data[e*4+2]=1,this.data[e*4+3]=this.kind[e],this.loosen[e]=0,this.loose[this.looseN++]=e,this.touch(e)}updateClumps(e,t){let n=t.suction;for(let r of this.clumps){if(r.popped)continue;let i=n.speedAt(r.pos.x,r.pos.y,r.pos.z);if(t.sofa&&(i*=1+1.6*t.sofa.pullAt(r.pos)),i>.45?r.pressure+=Math.min(1.6,(i-.45)*.6)*e:r.pressure=Math.max(0,r.pressure-e*.25),r.idx>=0&&this.state[r.idx]===rf&&this.setStress(r.idx,r.pressure),r.pressure<1)continue;r.popped=!0,this.remaining[Y.SOFA]=Math.max(0,this.remaining[Y.SOFA]-r.amount);let a=r.idx;if(a<0||this.state[a]!==rf){if(a=this.alloc(),a<0)continue;this.init(a,Y.SOFA,r.pos.x,r.pos.y,r.pos.z,r.hue,0,of.CLUMP,.085,this.rng)}let o=r.amount*.04;this.amount[a]=r.amount-6*o,this.data[a*4]=.085,this.data[a*4+2]=1,this.data[a*4+3]=of.CLUMP,this.setColor(a,r.hue,1.6),this.state[a]=ef,this.timer[a]=0,this.aux[a*4+3]=0,this.vel[a*3]=r.normal.x*1.2,this.vel[a*3+1]=r.normal.y*1.2+.3,this.vel[a*3+2]=r.normal.z*1.2,this.loose[this.looseN++]=a,this.touch(a);for(let e=0;e<6;e++){let e=this.alloc();if(e<0)break;let t=this.rng;this.init(e,Y.SOFA,r.pos.x,r.pos.y+.01,r.pos.z,r.hue+t.range(-.04,.04),o,of.MOTE,t.range(.009,.015),t),this.setColor(e,r.hue,1.5),this.state[e]=ef,this.aux[e*4+3]=hf;let n=t.range(.5,1.1);this.vel[e*3]=(r.normal.x+t.gauss(0,.6))*n,this.vel[e*3+1]=(Math.abs(r.normal.y)+t.range(.3,.8))*n,this.vel[e*3+2]=(r.normal.z+t.gauss(0,.6))*n,this.loose[this.looseN++]=e,this.touch(e)}this.events.clumpPop?.(r.pos,r.amount)}}updateFloorRibbons(e,t){let n=t.ribbons;if(!n)return;this.ribbons=n;let r=t.suction,i=r.mouth,a=r.strength>.01&&r.sign>0;for(let o of this.floorRibbons){if(o.done)continue;if(o.handle<0){if(this.spawning>0)continue;if(o.handle=n.spawn(o.pts,o.color,o.hue,o.amount,Y.FLOOR,{width:.034,anchored:!0}),o.handle<0){o.done=!0;continue}this.remaining[Y.FLOOR]+=o.amount,this.ribbonLight(o,t.light,1);continue}if(!n.isAlive(o.handle)){o.done=!0,this.remaining[Y.FLOOR]=Math.max(0,this.remaining[Y.FLOOR]-o.amount),this.ribbonLight(o,t.light,-1);continue}let s=0,c=0;if(a)for(let e=0;e<o.pts.length;e+=2){let t=o.pts[e],n=r.speedAt(t.x,t.y,t.z);n>s&&(s=n,c=e)}let l=s-.5,u=o.stress;if(o.stress=l>0?o.stress+Math.min(1.8,l*2.2)*e:Math.max(0,o.stress-e*ff),o.stress>=1){let e=o.pts[c],r=this.tmpV.set(i.x-e.x,0,i.z-e.z);r.multiplyScalar(.6/(r.length()+1e-4)),r.y=.35,n.release(o.handle,o.pts.length,r),o.done=!0,this.remaining[Y.FLOOR]=Math.max(0,this.remaining[Y.FLOOR]-o.amount),this.ribbonLight(o,t.light,-1),this.surfAirAcc[Y.FLOOR]+=.3;continue}if(o.stress<=0&&u<=0)continue;let d=Xu.uTime.value;for(let e=0;e<o.pts.length;e++){let t=o.pts[e],r=i.x-t.x,a=i.z-t.z,s=Math.hypot(r,a)+1e-4,l=o.stress*o.stress*Math.exp(-Math.abs(e-c)*.25),u=Math.min(.05,s*.2)*l,f=.012*l*(.5+.5*Math.sin(d*17+e*.9));n.pin(o.handle,e,t.x+r/s*u,t.y+f,t.z+a/s*u)}this.surfAirAcc[Y.FLOOR]+=.05*o.stress}}ribbonLight(e,t,n){let r=e.pts.length,i=n*e.amount*sf/4;for(let n=1;n<r;n+=Math.floor(r/4)){let r=e.pts[n];t.addRest(r.x,r.z,e.color.r*i,e.color.g*i,e.color.b*i)}}updateLoose(e,t){let n=t.suction,r=this.air,i=n.mouth,a=wu.capture*wu.capture,o=t.light,s=Xu.uTime.value,c=n.strength>.05&&n.sign>0,l=0;for(let u=0;u<this.looseN;u++){let d=this.loose[u];if(this.state[d]!==ef)continue;let f=d*3,p=this.pos[f],m=this.pos[f+1],h=this.pos[f+2],g=this.kind[d],_=this.surf[d],v=this.aux[d*4+3]+=e;n.velocityAt(p,m,h,r);let y=r.length(),b=i.x-p,x=i.y-m,S=i.z-h,C=Math.sqrt(b*b+x*x+S*S);if(y>.05){let e=Math.sqrt(b*b+S*S)+1e-4,t=y*pf*(e/(e+.05))*Math.exp(-e*e/.2);r.x+=-S/e*t,r.z+=b/e*t}let w=1-Math.min(1,Math.max(0,(C-.1)/.5)),T=(g===of.CLUMP?9:g===of.FILAMENT?5:7)*(.45+.85*w),E=this.vel[f],D=this.vel[f+1],O=this.vel[f+2];if(g===of.CLUMP&&n.strength>0){let e=C+1e-4;r.x+=b/e*2.4,r.y+=x/e*2.4,r.z+=S/e*2.4}else if(_===Y.HIDDEN&&v<mf){let e=.1+v/mf*.2;if(y>e){let t=e/y;r.x*=t,r.z*=t}r.x+=this.spot.open[0]*.12,r.z+=this.spot.open[1]*.12,r.y=0,T=1.6,y=Math.min(y,e)}else _===Y.SOFA&&v<hf&&(T*=.3);let k=1-Math.exp(-T*e);if(E+=(r.x-E)*k,D+=(r.y-D)*k,O+=(r.z-O)*k,y<.2){D-=.22*e;let t=this.data[d*4+1]*50;E+=Math.sin(s*1.3+t)*.05*e,O+=Math.cos(s*1.1+t*1.7)*.05*e,E*=1-.6*e,O*=1-.6*e}p+=E*e,m+=D*e,h+=O*e;let A=Du(p,h)?q.pile*.85:.004;m<A&&(m=A,D<0&&(D=0)),p=Math.min(K.maxX-.02,Math.max(K.minX+.02,p)),h=Math.min(K.maxZ-.02,Math.max(K.minZ+.02,h)),this.pos[f]=p,this.pos[f+1]=m,this.pos[f+2]=h,this.vel[f]=E,this.vel[f+1]=D,this.vel[f+2]=O,this.touch(d);let j=p-i.x,ee=m-i.y,M=h-i.z,te=j*j+ee*ee+M*M;if(c&&te<a*(g===of.CLUMP?2.5:1)){this.capture(d,t);continue}let N=this.amount[d]*sf*(g===of.CLUMP?.6:1);if(g===of.RARE?o.addDyn(p,h,N*.7,N*.55,N*.9):o.addDyn(p,h,this.col[f]*N,this.col[f+1]*N,this.col[f+2]*N),this.surfAirAcc[_]+=.004,y<.03&&Math.abs(D)<.02&&m<=A+.001){if(this.timer[d]+=e,this.timer[d]>1.2&&g!==of.CLUMP){this.home[f]=p,this.home[f+1]=m,this.home[f+2]=h,this.surf[d]=Du(p,h)?Y.CARPET:_===Y.HIDDEN?Y.HIDDEN:Y.FLOOR,this.surf[d]===Y.CARPET&&(this.depth[d]=.1),this.hold[d]=.12,this.loosen[d]=0,this.settle(d,o);continue}}else this.timer[d]=0;this.loose[l++]=d}this.looseN=l}capture(e,t){let n=e*3;this.tmpC.setRGB(this.col[n],this.col[n+1],this.col[n+2]);let r=this.kind[e],i=r===of.CLUMP?1.2:r===of.RARE?.3:r===of.FILAMENT?.16:.09;this.flash=Math.min(1.4,this.flash+i),this.flashCol.lerp(this.tmpC,Math.min(1,i*1.5));let a=Math.max(this.tmpC.r,this.tmpC.g,this.tmpC.b,1e-4);this.tmpC.multiplyScalar(1/a),t.intake.add(this.amount[e],this.tmpC,this.hue[e],this.surf[e],{rare:r===of.RARE,clump:r===of.CLUMP}),this.kill(e)}updateFlash(e,t){let n=this.flashIdx;this.flash*=Math.exp(-e*11);let r=this.flash>.01&&t.sign>0?this.flash:0,i=this.data[n*4+2];if(r===0&&i===0)return;let a=t.mouth,o=n*3;this.pos[o]=a.x,this.pos[o+1]=a.y+.008,this.pos[o+2]=a.z;let s=Math.max(this.flashCol.r,this.flashCol.g,this.flashCol.b,1e-4),c=.9/s*Math.min(1,r);this.col[o]=(this.flashCol.r+.35*s)*c,this.col[o+1]=(this.flashCol.g+.35*s)*c,this.col[o+2]=(this.flashCol.b+.35*s)*c,this.markCol(n),this.data[n*4]=.035+.05*Math.min(1.4,r),this.data[n*4+2]=r,this.touch(n)}emit(e,t,n,r,i,a,o=.45){for(let s=0;s<i;s++){let s=this.alloc();if(s<0)return;let c=s*3;this.surf[s]=Y.FLOOR,this.state[s]=nf,this.pos[c]=e.x,this.pos[c+1]=e.y,this.pos[c+2]=e.z;let l=a.range(1.6,3.4);this.vel[c]=(t.x+a.gauss(0,o))*l,this.vel[c+1]=Math.abs(t.y+a.gauss(.15,o*.6))*l*.6,this.vel[c+2]=(t.z+a.gauss(0,o))*l;let u=a.range(.7,1.4);this.col[c]=n.r*u,this.col[c+1]=n.g*u,this.col[c+2]=n.b*u,this.markCol(s),this.data[s*4]=a.range(.014,.034),this.data[s*4+1]=a.next(),this.data[s*4+2]=1,this.kind[s]=a.chance(.1)?of.FILAMENT:of.MOTE,this.data[s*4+3]=this.kind[s],this.amount[s]=r/i,this.timer[s]=0,this.aux[s*4]=e.x,this.aux[s*4+2]=e.z,this.aux[s*4+3]=a.range(5.5,9),this.finaleList[this.finaleN++]=s,this.touch(s)}}updateSpecial(e,t){let n=e.dt,r=0,i=e.t;for(let e=0;e<this.finaleN;e++){let a=this.finaleList[e];if(this.state[a]!==nf)continue;let o=a*3,s=this.timer[a]+=n,c=this.aux[a*4+3],l=this.pos[o],u=this.pos[o+1],d=this.pos[o+2],f=this.vel[o],p=this.vel[o+1],m=this.vel[o+2],h=l-this.aux[a*4],g=d-this.aux[a*4+2],_=Math.hypot(h,g)+.001,v=this.data[a*4+1]*40,y=.55*Math.exp(-s*.25),b=h/_*y+Math.sin(i*.7+v)*.25,x=g/_*y+Math.cos(i*.6+v*1.3)*.25,S=Math.min(l-K.minX,K.maxX-l,d-K.minZ),C=Math.min(1,Math.max(0,(s-1.2)/2.5))*.45+(S<.35?.7:0)+.12*Math.sin(i*2+v);u>2.2&&(C=.05,b*=1.6,x*=1.6);let w=1-Math.exp(-n*1.4);f+=(b-f)*w,p+=(C-p)*w,m+=(x-m)*w,l+=f*n,u+=p*n,d+=m*n,u<.006&&(u=.006,p=Math.abs(p)*.3),u=Math.min(K.height-.05,u),l=Math.min(K.maxX-.03,Math.max(K.minX+.03,l)),d=Math.min(K.maxZ-.03,Math.max(K.minZ+.03,d)),this.pos[o]=l,this.pos[o+1]=u,this.pos[o+2]=d,this.vel[o]=f,this.vel[o+1]=p,this.vel[o+2]=m;let T=Math.min(1,s*3)*Math.min(1,Math.max(0,(c-s)/1.5));this.data[a*4+2]=T;let E=this.amount[a]*sf*2.2*T*Math.exp(-u*.6);if(t.addDyn(l,d,this.col[o]*E,this.col[o+1]*E,this.col[o+2]*E),this.touch(a),s>=c){this.kill(a);continue}this.finaleList[r++]=a}if(this.finaleN=r,this.spawning>0){let e=0;for(let r=0;r<this.cap;r++){if(this.state[r]!==tf)continue;e++;let i=r*3;this.timer[r]+=n;let a=this.timer[r];if(a<0)continue;let o=this.aux[r*4+3],s=Math.min(1,a/o),c=s<.5?2*s*s:1-(-2*s+2)**2/2,l=this.aux[r*4],u=this.aux[r*4+1],d=this.aux[r*4+2],f=this.home[i],p=this.home[i+1],m=this.home[i+2],h=Math.hypot(f-l,m-d),g=Math.max(u,p)+.25+h*.28,_=1-c,v=_*_*l+2*_*c*(l+f)*.5+c*c*f,y=_*_*u+2*_*c*g+c*c*p,b=_*_*d+2*_*c*(d+m)*.5+c*c*m;this.vel[i]=(v-this.pos[i])/Math.max(n,.001),this.vel[i+1]=(y-this.pos[i+1])/Math.max(n,.001),this.vel[i+2]=(b-this.pos[i+2])/Math.max(n,.001),this.pos[i]=v,this.pos[i+1]=y,this.pos[i+2]=b;let x=this.surf[r]===Y.CARPET&&this.depth[r]>.25?.45:1;this.data[r*4+2]=Math.min(1,s*4)*(s>.85?x+(1-x)*(1-s)/.15:1),this.touch(r),s>=1&&(this.data[r*4+2]=x,this.kind[r]===of.CLUMP?(this.state[r]=rf,this.data[r*4+2]=.8):this.settle(r,t),this.vel[i]=this.vel[i+1]=this.vel[i+2]=0,e--)}this.spawning=e}}respawn(e,t,n,r){this.finaleN=0,this.seed(e,t,n,r);let i=0;for(let e=0;e<this.cap;e++)this.state[e]===tf&&i++;this.spawning=i}totalRemaining(){let e=0;for(let t=0;t<5;t++)e+=this.remaining[t];return e}interest(e,t,n){let r=0,i=0,a=0,o=this.cellStart;for(let n=0;n<uf;n++)for(let s=0;s<lf;s++){let c=n*lf+s;if(o[c+1]-o[c]<=0)continue;let l=0;for(let e=o[c];e<o[c+1];e++){let t=this.cellItems[e];this.state[t]===$d&&(l+=this.amount[t]*(this.surf[t]===Y.HIDDEN?.5:1))}let u=K.minX+(s+.5)*cf,d=K.minZ+(n+.5)*cf,f=Math.hypot(u-e,d-t),p=l/(.6+f*f);p>r&&(r=p,i=u,a=d)}return this.interestScore=r,r>.02?n.set(i,0,a):null}clearAll(e){this.resetPool(),this.finaleN=0,this.spawning=0,e.clearRest(),this.remaining.fill(0),this.clumps=[],this.floorRibbons=[],this.gridDirty=!0,this.dirtyMin=0,this.dirtyMax=this.cap-1}upload(){let e=this.dirtyMin,t=this.dirtyMax;if(t>=e){let n=t-e+1;this.aPos.clearUpdateRanges(),this.aVel.clearUpdateRanges(),this.aPos.addUpdateRange(e*3,n*3),this.aVel.addUpdateRange(e*3,n*3),this.aPos.needsUpdate=!0,this.aVel.needsUpdate=!0}let n=Math.min(e,this.dataMin),r=Math.max(t,this.dataMax);r>=n&&(this.aData.clearUpdateRanges(),this.aData.addUpdateRange(n*4,(r-n+1)*4),this.aData.needsUpdate=!0),this.dirtyMin=this.dataMin=1/0,this.dirtyMax=this.dataMax=-1,this.colDirty?(this.aCol.clearUpdateRanges(),this.aCol.needsUpdate=!0,this.colDirty=!1):this.colMax>=this.colMin&&(this.aCol.clearUpdateRanges(),this.aCol.addUpdateRange(this.colMin*3,(this.colMax-this.colMin+1)*3),this.aCol.needsUpdate=!0),this.colMin=1/0,this.colMax=-1}makeMaterial(e){return new ja({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:Xu.uTime,uNozzle:Xu.uNozzle,uAir:Xu.uAir,uPixel:{value:800},uViewH:{value:800},uIntensity:{value:3},uMirror:{value:+!!e},uRug:{value:new an(q.cx,q.cz,q.w/2,q.d/2)}},vertexShader:`
        uniform float uTime;
        uniform vec3 uNozzle;
        uniform float uAir;
        uniform float uPixel;
        uniform float uViewH;
        uniform float uIntensity;
        uniform float uMirror;
        uniform vec4 uRug;
        attribute vec3 aVel;
        attribute vec3 aColor;
        attribute vec4 aData; // size, seed, alpha, kind + 0.9 * stress
        varying vec3 vCol;
        varying vec2 vDir;
        varying float vStretch;
        varying float vCore;
        varying float vKind;
        varying float vSeed;
        varying float vCurve;
        varying float vMoving;
        void main() {
          float alpha = aData.z;
          float kind = floor(aData.w + 0.005);
          float stress = clamp((aData.w - kind) / 0.9, 0.0, 1.0);
          vec3 p = position;
          if (uMirror > 0.5) {
            // no reflection on the rug, from the sofa, or of the swallow flash
            vec2 rd = abs(p.xz - uRug.xy) - uRug.zw;
            if (max(rd.x, rd.y) < 0.0 || p.y > 0.3 || kind > 3.5) alpha = 0.0;
          }
          if (alpha <= 0.001) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; return; }
          float seed = aData.y;
          bool thread = kind > 0.5 && kind < 1.5;
          float speed2 = dot(aVel, aVel);
          float moving = step(1e-5, speed2);
          vec3 toN = uNozzle - p;
          float dn = length(toN.xz);
          vec2 dirN = toN.xz / max(dn, 1e-4);
          float sizeMul = 1.0;
          float glow = 1.0;
          if (moving < 0.5 && kind < 3.5) {
            // resting light breathes a hair above its surface
            p.y += (0.002 + 0.004 * seed) * (0.5 + 0.5 * sin(uTime * (0.7 + seed) + seed * 30.0));
            // anticipation: worked by the air, a speck leans toward the mouth, lifts a little,
            // trembles and brightens before it lets go
            float s2 = stress * stress;
            p.xz += dirN * (uAir * (0.005 * exp(-dn * dn / 0.3) + 0.03 * s2) * step(0.05, dn));
            p.y += 0.007 * s2;
            float tr = 0.004 * stress * uAir;
            p.x += sin(uTime * 41.0 + seed * 91.0) * tr;
            p.z += cos(uTime * 37.0 + seed * 57.0) * tr;
            p.y += sin(uTime * 29.0 + seed * 23.0) * tr * 0.5;
            glow = 1.0 + 1.1 * stress;
            if (kind > 2.5) {
              // a clump in its seam swells and throbs faster as the pressure builds
              sizeMul = 1.0 + 0.55 * stress + 0.2 * stress * sin(uTime * (7.0 + 16.0 * stress) + seed * 20.0);
              glow = 0.6 + 1.2 * stress;
            }
          }
          vec3 vel = aVel;
          // rushing into the mouth: a last bright acceleration
          float rush = 1.0 + 1.4 * moving * exp(-dot(toN, toN) / 0.014);
          if (uMirror > 0.5) {
            p.y = -p.y;
            vel.y = -vel.y;
          }
          vec4 mv = viewMatrix * vec4(p, 1.0);
          vec4 clip = projectionMatrix * mv;
          vec2 toPx = 0.5 * vec2(uViewH * (projectionMatrix[1][1] / projectionMatrix[0][0]), uViewH);
          vec3 span;
          if (thread && moving < 0.5) {
            // a resting thread lies along its surface (foreshortened like everything else)
            float a = seed * 6.2831;
            span = vec3(cos(a), 0.0, sin(a)) * aData.x;
          } else {
            // motion streak: stretches more than linearly with speed, so acceleration reads
            float spd = sqrt(speed2);
            span = vel * (0.03 + 0.04 * smoothstep(0.5, 3.0, spd));
          }
          vec4 clip2 = projectionMatrix * viewMatrix * vec4(p + span, 1.0);
          vec2 sp = (clip2.xy / clip2.w - clip.xy / clip.w) * toPx;
          float lenPx = min(length(sp), 90.0);
          float sizePx = aData.x * sizeMul * uPixel / max(0.05, -mv.z);
          float ps;
          if (thread) {
            float L = moving < 0.5 ? lenPx : max(lenPx, sizePx * 0.9);
            ps = clamp(L + 3.0, 1.5, 110.0);
            vStretch = L / ps;
            vCore = clamp(0.8 / ps, 0.01, 0.5);
            vCurve = (fract(seed * 7.31) - 0.5) * (moving < 0.5 ? 0.45 : 0.3);
          } else {
            ps = clamp(sizePx + lenPx, 1.5, 110.0);
            vStretch = lenPx / ps;
            // streaks thin out as they stretch
            vCore = clamp(max(sizePx * (moving > 0.5 ? 0.24 : 0.42), 0.7) / ps, 0.012, 0.5);
            vCurve = 0.0;
          }
          gl_PointSize = ps;
          vDir = lenPx > 0.5 ? sp / lenPx : vec2(cos(seed * 6.2831), sin(seed * 6.2831));
          float tw = 1.0;
          if (moving < 0.5) {
            tw = 0.72 + 0.28 * sin(uTime * (0.6 + seed * 2.2) + seed * 50.0);
            // a few specks catch the light now and then: slow glints, not blinking
            float g = max(0.0, sin(uTime * (0.35 + fract(seed * 13.0) * 0.5) + seed * 90.0));
            tw += step(0.86, fract(seed * 7.13)) * pow(g, 14.0) * 1.6;
          }
          // sub-pixel motes fade instead of aliasing
          float tiny = clamp(sizePx / 2.5, 0.25, 1.0);
          // motion blur: a streak spreads its light instead of getting brighter
          float blur = moving > 0.5 && !thread ? mix(1.0, (sizePx * 1.6 + 1.0) / (sizePx * 1.6 + 1.0 + lenPx), 0.55) : 1.0;
          vCol = aColor * uIntensity * alpha * tw * tiny * glow * rush * blur;
          vKind = kind;
          vSeed = seed;
          vMoving = moving;
          if (uMirror > 0.5) {
            // reflection: dim, warm-tinted by the wood, fades with height; drawn at floor depth
            float h = position.y;
            vCol *= 0.2 * exp(-h * 9.0) * vec3(1.0, 0.86, 0.7);
            vec3 cam = cameraPosition;
            float tHit = cam.y / max(1e-4, cam.y - p.y);
            vec3 f = cam + (p - cam) * tHit;
            vec4 fc = projectionMatrix * viewMatrix * vec4(f, 1.0);
            clip = vec4(clip.xy / clip.w * fc.w, fc.z - 0.0005 * fc.w, fc.w);
            gl_PointSize = ps * 1.35;
          }
          gl_Position = clip;
        }`,fragmentShader:`
        ${zu}
        uniform float uTime;
        uniform float uMirror;
        varying vec3 vCol;
        varying vec2 vDir;
        varying float vStretch;
        varying float vCore;
        varying float vKind;
        varying float vSeed;
        varying float vCurve;
        varying float vMoving;
        void main() {
          vec2 q = gl_PointCoord * 2.0 - 1.0;
          q.y = -q.y;
          float edge = 1.0 - smoothstep(0.7, 1.0, length(q));
          vec3 col = vCol;
          if (vKind > 3.5) {
            // swallow flash: a soft wink with a hot pinpoint
            float rr = dot(q, q);
            gl_FragColor = vec4(max(col * (exp(-rr * 4.5) * 0.5 + exp(-rr * 32.0)) * edge, 0.0), 1.0);
            return;
          }
          if (vKind > 2.5) {
            // clump: dense glowing lump with a white-hot core
            float rr = dot(q, q);
            float lump = exp(-rr * 3.5);
            float hot = exp(-rr * 18.0);
            gl_FragColor = vec4(max((col * lump + vec3(1.0) * hot * length(col) * 0.5) * edge, 0.0), 1.0);
            return;
          }
          // distance to a (softly curved) segment along vDir: speck, streak or thread
          float hl = vStretch;
          vec2 perp = vec2(-vDir.y, vDir.x);
          float along = dot(q, vDir);
          float cl = clamp(along, -hl, hl);
          float u = cl / max(hl, 1e-3);
          float across = dot(q, perp) - vCurve * hl * (1.0 - u * u);
          vec2 d = vec2(along - cl, across);
          float r2 = dot(d, d);
          float c2 = vCore * vCore;
          float core = exp(-r2 / c2);
          float halo = exp(-r2 / (c2 * 9.0)) * 0.22;
          if (vKind > 1.5) {
            // rare: thin-film iridescence drifting with time and angle
            float th = 330.0 + 280.0 * sin(uTime * 1.3 + vSeed * 17.0) + 120.0 * q.x;
            col = thinFilm(th, 0.55 + 0.4 * sin(uTime * 0.7 + vSeed * 9.0)) * 1.25 * length(vCol);
          }
          float s = u * 0.5 + 0.5; // 0 tail … 1 head
          float taper = 1.0;
          if (vKind > 0.5 && vKind < 1.5) taper = sin(3.14159 * s) * 0.75; // thread: soft ends
          else if (vMoving > 0.5 && hl > 0.05) taper = 0.05 + 0.95 * s * s; // streak: bright head, fading tail
          vec3 c = col * (core + halo) * edge * taper;
          if (uMirror > 0.5) c *= 1.0 - smoothstep(0.3, 1.0, length(q)) * 0.3;
          gl_FragColor = vec4(max(c, 0.0), 1.0);
        }`})}},yf=.016,bf=3,xf=7.2,Sf=128,Cf=null;function wf(){if(Cf)return Cf;let e=Sf,t=[Tf(e,[[4,4,1],[8,8,.5],[16,16,.25],[32,32,.125]],11),Tf(e,[[4,4,1],[8,8,.5],[16,16,.25],[32,32,.125]],23),Tf(e,[[2,16,1],[4,32,.55],[8,64,.3]],37),Tf(e,[[16,16,1],[32,32,.5],[64,64,.25]],51)],n=new Uint8Array(65536);t.forEach((e,t)=>{let r=1/0,i=-1/0;for(let t=0;t<e.length;t++)r=Math.min(r,e[t]),i=Math.max(i,e[t]);let a=255/Math.max(1e-6,i-r);for(let i=0;i<e.length;i++)n[i*4+t]=Math.round((e[i]-r)*a)});let r=new gi(n,e,e,M,v);return r.wrapS=r.wrapT=l,r.minFilter=_,r.magFilter=h,r.generateMipmaps=!0,r.needsUpdate=!0,Cf=r,r}function Tf(e,t,n){let r=new Float32Array(e*e),i=n>>>0,a=()=>{i=i+1831565813>>>0;let e=Math.imul(i^i>>>15,i|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296};for(let[n,i,o]of t){let t=new Float32Array(n*i),s=new Float32Array(n*i);for(let e=0;e<n*i;e++){let n=a()*Math.PI*2;t[e]=Math.cos(n),s[e]=Math.sin(n)}let c=(e,r,a,o)=>{let c=(r%i+i)%i*n+(e%n+n)%n;return t[c]*a+s[c]*o},l=e=>e*e*e*(e*(e*6-15)+10);for(let t=0;t<e;t++){let a=t/e*i,s=Math.floor(a),u=a-s,d=l(u);for(let i=0;i<e;i++){let a=i/e*n,f=Math.floor(a),p=a-f,m=l(p),h=c(f,s,p,u)+(c(f+1,s,p-1,u)-c(f,s,p,u))*m,g=c(f,s+1,p,u-1)+(c(f+1,s+1,p-1,u-1)-c(f,s+1,p,u-1))*m;r[t*e+i]+=(h+(g-h)*d)*o}}}return r}var Ef=`
attribute float aLayer;
varying vec3 vWorld;
varying float vLayer;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vLayer = aLayer;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Df=`
uniform float uTime;
uniform sampler2D uLightField;
uniform vec4 uLightFieldRect;
uniform float uLightFieldGain;
uniform vec3 uNozzle;
uniform sampler2D uNoise;
uniform float uIntensity;
uniform float uLayerGain;
uniform float uFlow;        // signed: + air pulled into the mouth, - air blown out (finale)
uniform float uStreamPhase; // integrated stream travel (so reversing never jumps)
uniform float uFlood;
uniform float uFloodRadius;
uniform vec3 uFloodColor;
uniform sampler2D uFloodPal; // collected colors (the sky aurora's palette strip)
uniform float uFloodPalOn;
varying vec3 vWorld;
varying float vLayer;

void main() {
  vec2 p = vWorld.xz;
  float lay = vLayer;           // 0 = lowest layer, 1 = highest
  float t = uTime;

  // Screen-space derivatives are taken up front, in uniform control flow: every noise lookup
  // below uses explicit gradients, so the early-out for dark floor stays well defined.
  vec2 dpx = dFdx(p);
  vec2 dpy = dFdy(p);
  vec2 d = p - uNozzle.xz;
  float r = length(d) + 1e-4;
  // polar coordinates around the mouth; take whichever angle parametrization has no seam at
  // this pixel, otherwise the atan wrap would pick the coarsest mip along a line
  float ang = atan(d.y, d.x) * 0.15915494;
  float angB = fract(ang);
  float dax = dFdx(ang), day = dFdy(ang);
  float dbx = dFdx(angB), dby = dFdy(angB);
  dax = abs(dax) < abs(dbx) ? dax : dbx;
  day = abs(day) < abs(dby) ? day : dby;
  float rr = r * r * 0.8;
  vec2 sgx = vec2(dax * 3.0, dFdx(rr));
  vec2 sgy = vec2(day * 3.0, dFdy(rr));

  vec2 luv = (p - uLightFieldRect.xy) * uLightFieldRect.zw;
  vec3 L = texture2D(uLightField, clamp(luv, 0.001, 0.999)).rgb * uLightFieldGain;
  // most of the floor is dark most of the time: skip all the noise work there
  if (max(L.r, max(L.g, L.b)) < 0.004 && uFlood <= 0.001) {
    gl_FragColor = vec4(0.0);
    return;
  }

  // --- air around the nozzle
  vec2 dirIn = -d / r;
  float near = 1.0 - smoothstep(0.12, 1.1, r);
  float flow = uFlow * near;

  // --- drifting wisps, domain-warped; upper layers larger + softer.
  // Two-phase flow-map advection drags the pattern into the mouth (compressing it into
  // radial streaks close in) without the texture ever tearing.
  float sc = mix(0.46, 0.27, lay);
  vec2 gx = dpx * sc;
  vec2 gy = dpy * sc;
  vec2 q = p * sc + vec2(0.011, 0.006) * t * (1.0 + lay) + lay * vec2(0.31, 0.17);
  vec2 warp = (textureGrad(uNoise, q * 0.47 + vec2(0.0, t * 0.006), gx * 0.47, gy * 0.47).gb - 0.5) * 0.4;
  float ph = t * 0.24 + lay * 0.37;
  float ph1 = fract(ph);
  float ph2 = fract(ph + 0.5);
  vec2 adv = dirIn * flow * 0.8 * sc;
  float w1 = textureGrad(uNoise, q + warp - adv * ph1, gx, gy).r;
  float w2 = textureGrad(uNoise, q + warp - adv * ph2 + 0.5, gx, gy).r;
  float wisp = mix(w1, w2, abs(2.0 * ph1 - 1.0));
  // fibrous streaks (the b channel is stretched along x), slightly rotated per layer
  float ca = 0.8 + lay * 0.9;
  mat2 rot = mat2(cos(ca), sin(ca), -sin(ca), cos(ca)) * (sc * 1.3);
  vec2 fq = rot * p + warp * 0.6 - vec2(t * 0.008, 0.0);
  float fib = textureGrad(uNoise, fq, rot * dpx, rot * dpy).b;
  float shape = smoothstep(0.28, 0.82, wisp) * (0.45 + 0.75 * smoothstep(0.3, 0.8, fib)) + 0.1;

  // --- converging streams near the mouth: noise in polar coordinates, the radial
  // coordinate r^2 makes them accelerate and stretch thin as they approach.
  float sw = min(1.0, abs(flow) * 1.3);
  if (sw > 0.001) {
    float sn = textureGrad(uNoise, vec2(ang * 3.0, rr + uStreamPhase), sgx, sgy).a;
    float streams = 0.2 + smoothstep(0.38, 0.8, sn) * 1.5;
    shape *= mix(1.0, streams, sw * 0.65);
  }
  // the mouth swallows what reaches it
  shape *= mix(1.0, smoothstep(0.02, 0.12, r), clamp(uFlow, 0.0, 1.0));

  vec3 col = L * shape * 1.25;

  // --- finale flood: colored mist spreading outward from the nozzle
  if (uFlood > 0.001) {
    float fn = textureGrad(uNoise, p * 0.21 - vec2(t * 0.01, t * 0.004), dpx * 0.21, dpy * 0.21).r;
    float e = r - uFloodRadius + (fn - 0.5) * 1.1;
    float inside = 1.0 - smoothstep(-0.6, 0.12, e);
    float rim = exp(-e * e * 7.0);
    // a soft, low-contrast haze with fine fibers (large high-contrast blobs read as water);
    // the spreading front glows a little brighter
    float fl = inside * (0.4 + 0.35 * wisp) * (0.55 + 0.45 * fib) + rim * (0.4 + 0.4 * wisp);
    // the collected colors drift across the floor in broad patches, in proportion
    float pc = textureGrad(uNoise, p * 0.16 + vec2(0.37 - t * 0.006, 0.11 + t * 0.009), dpx * 0.16, dpy * 0.16).g;
    vec3 fc = textureLod(uFloodPal, vec2(0.015 + 0.97 * smoothstep(0.2, 0.8, pc), 0.5), 0.0).rgb;
    col += mix(uFloodColor, fc * 0.9, uFloodPalOn) * fl * uFlood * 0.055;
  }

  // open front of the room: fade out
  col *= 1.0 - smoothstep(1.6, 2.4, p.y);
  // a slab of haze looks denser at grazing angles
  vec3 V = normalize(cameraPosition - vWorld);
  float slab = mix(1.0, 1.0 / max(abs(V.y), 0.3), 0.45);

  gl_FragColor = vec4(col * slab * uLayerGain * mix(1.0, 0.35, lay) * uIntensity, 1.0);
}
`,Of=class{constructor(e){Z(this,`group`,new Rn),Z(this,`mat`,void 0),Z(this,`u`,void 0),Z(this,`air`,void 0),Z(this,`floodPeak`,0),Z(this,`flood`,0);let{shared:t,quality:n}=e,r=Math.max(1,n.mistLayers);this.air=t.uAir,this.u={uIntensity:{value:1},uLayerGain:{value:bf/r},uFlow:{value:0},uStreamPhase:{value:0},uFlood:{value:0},uFloodRadius:{value:0},uFloodColor:{value:new H},uFloodPal:{value:null},uFloodPalOn:{value:0}},this.mat=new ja({name:`aurora-mist`,uniforms:{uTime:t.uTime,uLightField:t.uLightField,uLightFieldRect:t.uLightFieldRect,uLightFieldGain:t.uLightFieldGain,uNozzle:t.uNozzle,uNoise:{value:wf()},...this.u},vertexShader:Ef,fragmentShader:Df,transparent:!0,depthWrite:!1,depthTest:!0,blending:2});let i=new Float32Array(r*4*3),a=new Float32Array(r*4),o=[],s=[K.minX,K.maxX,K.maxX,K.minX],c=[K.maxZ,K.maxZ,K.minZ,K.minZ];for(let e=0;e<r;e++){let t=r===1?0:e/(r-1),n=yf+.12400000000000001*t*(.55+.45*t);for(let r=0;r<4;r++){let o=(e*4+r)*3;i[o]=s[r],i[o+1]=n,i[o+2]=c[r],a[e*4+r]=t}let l=e*4;o.push(l,l+1,l+2,l,l+2,l+3)}let l=new Wr;l.setAttribute(`position`,new U(i,3)),l.setAttribute(`aLayer`,new U(a,1)),l.setIndex(o),l.computeBoundingSphere();let u=new W(l,this.mat);u.name=`aurora-mist`,u.renderOrder=5,this.group.add(u)}update(e,t){let n=this.u;n.uIntensity.value=Math.max(0,t);let r=Au(this.air.value),i=this.flood*(1-this.floodPeak*.6);n.uFlow.value=Mu(n.uFlow.value,r-i*.9,3,e.dt),n.uStreamPhase.value=(n.uStreamPhase.value+e.dt*.55*n.uFlow.value)%64,n.uFlood.value=this.flood,n.uFloodRadius.value=.25+this.floodPeak*xf,this.group.visible=t>.001}setFlood(e,t){let n=Au(e);this.floodPeak=n<=0?0:Math.max(this.floodPeak,n),this.flood=n<=0?0:Math.min(1,n/Math.max(this.floodPeak,.001)*Math.min(1,n*4)),this.u.uFloodColor.value.copy(t)}setFloodPalette(e){this.u.uFloodPal.value=e,this.u.uFloodPalOn.value=+!!e}},kf=24,Af=24,jf=47,Mf=2256,Nf=2.6,Pf=1.35,Ff=11,If=1.5,Lf=Math.max(.08,wu.capture+.005),Rf=.2,zf=.014,Bf=2.2,Vf=3.4,Hf=4,Uf=class{constructor(e){Z(this,`group`,new Rn),Z(this,`ribbons`,[]),Z(this,`pos`,new Float32Array(1728)),Z(this,`vel`,new Float32Array(1728)),Z(this,`prd`,new Float32Array(1728)),Z(this,`geo`,new Wr),Z(this,`aPos`,void 0),Z(this,`aTan`,void 0),Z(this,`aAlong`,void 0),Z(this,`aRib`,void 0),Z(this,`aCol`,void 0),Z(this,`mesh`,void 0),Z(this,`dynAttrs`,void 0),Z(this,`air`,new B),Z(this,`mode`,`suck`),Z(this,`seedCounter`,0),Z(this,`live`,0),Z(this,`drawnSlots`,0);for(let e=0;e<kf;e++)this.ribbons.push({alive:!1,gen:0,n:0,h:0,e:0,pinnedFrom:0,seg:.05,amountPer:0,color:new H,hue:0,surface:0,rare:!1,width:.04,seed:0,lead:0,accAmount:0,accLen:0,age:0,freeAge:0,alpha:0});let t=new Float32Array(Mf);for(let e=0;e<Mf;e++)t[e]=e%2==0?-1:1;let n=new Uint16Array(6624),r=0;for(let e=0;e<kf;e++)for(let t=0;t<46;t++){let i=(e*jf+t)*2;n[r++]=i,n[r++]=i+1,n[r++]=i+2,n[r++]=i+1,n[r++]=i+3,n[r++]=i+2}let i=e=>{let t=new U(new Float32Array(Mf*e),e);return t.setUsage(et),t};this.aPos=i(3),this.aTan=i(3),this.aAlong=i(3),this.aRib=i(4),this.aCol=i(3),this.geo.setAttribute(`position`,this.aPos),this.geo.setAttribute(`aTan`,this.aTan),this.geo.setAttribute(`aSide`,new U(t,1)),this.geo.setAttribute(`aAlong`,this.aAlong),this.geo.setAttribute(`aRib`,this.aRib),this.geo.setAttribute(`aCol`,this.aCol),this.geo.setIndex(new U(n,1)),this.dynAttrs=[this.aPos,this.aTan,this.aAlong,this.aRib,this.aCol];let a=new ja({uniforms:{uTime:Xu.uTime,uNozzle:Xu.uNozzle,uAir:Xu.uAir},vertexShader:qf,fragmentShader:Jf,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,side:2});this.mesh=new W(this.geo,a),this.mesh.name=`ribbons`,this.mesh.frustumCulled=!1,this.mesh.renderOrder=14,this.mesh.visible=!1,this.group.add(this.mesh)}spawn(e,t,n,r,i,a={}){if(e.length<2)return-1;let o=-1;for(let e=0;e<kf&&o<0;e++)this.ribbons[e].alive||(o=e);if(o<0){let e=-1;for(let t=0;t<kf;t++){let n=this.ribbons[t];n.freeAge>0&&(e<0||n.freeAge>this.ribbons[e].freeAge)&&(e=t)}if(e<0)return-1;o=e}let s=this.ribbons[o],c=Math.min(Af,e.length),l=o*Af*3,u=0;for(let t=0;t<c;t++){let n=e[c===e.length?t:Math.round(t*(e.length-1)/(c-1))],r=l+t*3;this.pos[r]=n.x,this.pos[r+1]=n.y,this.pos[r+2]=n.z,t>0&&(u+=Wf(n.x-this.pos[r-3],n.y-this.pos[r-2],n.z-this.pos[r-1]))}let d=this.pos[l+(c-1)*3]-this.pos[l],f=this.pos[l+(c-1)*3+1]-this.pos[l+1],p=this.pos[l+(c-1)*3+2]-this.pos[l+2],m=Wf(d,f,p)+1e-6;for(let e=0;e<c;e++){let t=l+e*3,n=this.mode===`free`&&!a.anchored?.9+.8*(e/(c-1)):0;this.vel[t]=d/m*n,this.vel[t+1]=f/m*n,this.vel[t+2]=p/m*n}return s.alive=!0,s.gen=s.gen+1&65535,s.n=c,s.h=0,s.e=c,s.pinnedFrom=a.anchored?0:c,s.seg=Math.max(.01,u/(c-1)),s.amountPer=Math.max(0,r)/c,s.color.copy(t),s.hue=n,s.surface=i,s.rare=!!a.rare,s.width=a.width??.04,s.seed=this.seedCounter++*.618034%1,s.lead=0,s.accAmount=0,s.accLen=0,s.age=0,s.freeAge=0,s.alpha=0,o+(s.gen<<5)}isAlive(e){return this.get(e)!==null}pin(e,t,n,r,i){let a=this.get(e);if(!a||t<a.pinnedFrom||t>=a.e)return;let o=((e&31)*Af+t)*3;this.pos[o]=n,this.pos[o+1]=r,this.pos[o+2]=i,this.vel[o]=this.vel[o+1]=this.vel[o+2]=0}release(e,t,n){let r=this.get(e);if(!r)return;let i=Math.min(r.n,t);if(n)for(let t=r.pinnedFrom;t<i;t++){let r=((e&31)*Af+t)*3;this.vel[r]=n.x,this.vel[r+1]=n.y,this.vel[r+2]=n.z}r.pinnedFrom=Math.max(r.pinnedFrom,i)}pendingLight(e){let t=0;for(let n of this.ribbons)!n.alive||n.freeAge>0||e!==void 0&&n.surface!==e||(t+=(n.e-n.h)*n.amountPer+n.accAmount);return t}activeCount(){return this.live}clear(){for(let e of this.ribbons)e.alive=!1;this.live=0}forEachGlow(e){for(let t=0;t<kf;t++){let n=this.ribbons[t];if(!n.alive)continue;let r=n.e-n.h;if(r<=0)continue;let i=r*n.amountPer*n.alpha*1.1;for(let a=0;a<3;a++){let o=n.h+Math.floor((a+.5)/3*r),s=(t*Af+o)*3,c=this.pos[s+1],l=i/3*Math.exp(-c*1.6);e(this.pos[s],this.pos[s+2],n.color.r*l,n.color.g*l,n.color.b*l)}}}update(e,t,n,r=`suck`){this.mode=r;let i=Math.min(e.dt,1/20),a=i>1/45?2:1,o=i/a,s=r===`suck`?t.strength:0,c=0;for(let l=0;l<kf;l++){let u=this.ribbons[l];if(!u.alive)continue;u.age+=i,r===`free`&&(u.freeAge+=i),s>.02&&this.chooseLead(u,l,t.mouth);for(let n=0;n<a;n++)this.integrate(u,l,o,e.t,t,s);r===`suck`&&n&&s>.05&&this.swallow(u,l,t.mouth,n);let d=Math.min(1,u.age/.14),f=u.freeAge>0?1-Kf(Bf,Vf,u.freeAge):1;if(u.alpha=d*f,u.e-u.h<2||u.freeAge>0&&f<=0){n&&u.accAmount>0&&this.flush(u,n),n&&r===`suck`&&u.e-u.h===1&&n.add(u.amountPer,u.color,u.hue,u.surface,{length:.14,rare:u.rare}),u.alive=!1;continue}c++}this.live=c,this.writeGeometry()}get(e){if(e<0)return null;let t=this.ribbons[e&31];return t&&t.alive&&t.gen===e>>5?t:null}chooseLead(e,t,n){if(e.pinnedFrom<e.n){e.lead=0;return}let r=(t*Af+e.h)*3,i=(t*Af+e.e-1)*3,a=Wf(this.pos[r]-n.x,this.pos[r+1]-n.y,this.pos[r+2]-n.z),o=Wf(this.pos[i]-n.x,this.pos[i+1]-n.y,this.pos[i+2]-n.z);e.lead===0&&o<a-.2?e.lead=1:e.lead===1&&a<o-.2&&(e.lead=0)}integrate(e,t,n,r,i,a){let o=this.pos,s=this.vel,c=this.prd,l=t*Af,u=this.mode===`free`,d=e.lead===0?e.h:e.e-1,f=i.mouth,p=this.air;for(let t=e.h;t<e.e;t++){let m=(l+t)*3;if(t>=e.pinnedFrom){c[m]=o[m],c[m+1]=o[m+1],c[m+2]=o[m+2];continue}let h=o[m],g=o[m+1],_=o[m+2],v=s[m],y=s[m+1],b=s[m+2],x=0,S=0,C=0;if(u)x=-v*.7+Math.sin(r*1.3+t*.45+e.seed*20)*.5,S=-y*.7+.55,C=-b*.7+Math.cos(r*1.1+t*.4+e.seed*13)*.5;else{let n=0;a>0?(i.velocityAt(h,g,_,p),n=Wf(p.x,p.y,p.z)):p.set(0,0,0);let o=(1-Math.min(1,n*2))*(1-Kf(K.minZ+.5,K.minZ+1.2,_));p.x+=o*.05*Math.sin(r*.37+e.seed*9),p.z+=o*.12;let s=Nf+6.4*Math.min(1,n*1.5);x=(p.x-v)*s,S=(p.y-y)*s-Pf*(1-Math.min(1,n*.8)),C=(p.z-b)*s;let c=Math.min(1.4,n)*8+(g>.044?.15:0),l=(t-d)*.55-r*8.5+e.seed*30;if(x+=Math.sin(l)*c,S+=Math.sin(l*.7+1.7)*c*.6,C+=Math.cos(l*1.13)*c,t===d&&a>0){let e=f.x-h,t=f.y-g,n=f.z-_,r=Wf(e,t,n)+1e-5,i=1-Kf(.9,1.7,r);if(i>0){let o=Ff*a*i*(1+2.2*(1-Kf(.05,.35,r)));x+=e/r*o,S+=t/r*o,C+=n/r*o}}}if(v+=x*n,y+=S*n,b+=C*n,!u){let e=Wf(v,y,b);if(e>If){let t=If/e;v*=t,y*=t,b*=t}}s[m]=v,s[m+1]=y,s[m+2]=b,c[m]=h+v*n,c[m+1]=g+y*n,c[m+2]=_+b*n}let m=e.seg,h=m*1.93;for(let t=0;t<Hf;t++){for(let t=0;t<e.e-e.h-2;t++){let n=e.h+t,r=n+2,i=n>=e.pinnedFrom?0:1,a=r>=e.pinnedFrom?0:1;if(i+a===0)continue;let o=(l+n)*3,s=(l+r)*3,u=c[s]-c[o],d=c[s+1]-c[o+1],f=c[s+2]-c[o+2],p=Wf(u,d,f)+1e-7;if(p>=h)continue;let m=(p-h)/p*.5/(i+a);c[o]+=u*m*i,c[o+1]+=d*m*i,c[o+2]+=f*m*i,c[s]-=u*m*a,c[s+1]-=d*m*a,c[s+2]-=f*m*a}for(let t=0;t<e.e-e.h-1;t++){let n=e.lead===0?e.h+t:e.e-1-t,r=e.lead===0?n+1:n-1,i=(l+n)*3,a=(l+r)*3,o=n>=e.pinnedFrom?0:n===d?.45:1,s=r>=e.pinnedFrom?0:1,u=o+s;if(u<=0)continue;o/=u,s/=u;let f=c[a]-c[i],p=c[a+1]-c[i+1],h=c[a+2]-c[i+2],g=Wf(f,p,h)+1e-7,_=(g-m)/g;c[i]+=f*_*o,c[i+1]+=p*_*o,c[i+2]+=h*_*o,c[a]-=f*_*s,c[a+1]-=p*_*s,c[a+2]-=h*_*s}}let g=1/n;for(let t=e.h;t<e.e;t++){if(t>=e.pinnedFrom)continue;let r=(l+t)*3,i=c[r],a=c[r+1],u=c[r+2],d=!1;a<zf&&(a=zf,d=!0),a>K.height-.03&&(a=K.height-.03),u<K.minZ+.03&&(u=K.minZ+.03),i<K.minX+.03&&(i=K.minX+.03),i>K.maxX-.03&&(i=K.maxX-.03);let f=(i-o[r])*g,p=(a-o[r+1])*g,m=(u-o[r+2])*g;if(d){let e=Math.exp(-n*9);f*=e,m*=e,p=Math.max(0,p)}s[r]=f,s[r+1]=p,s[r+2]=m,o[r]=i,o[r+1]=a,o[r+2]=u}}swallow(e,t,n,r){let i=t*Af;for(;e.e-e.h>0;){let t=e.lead===0?e.h:e.e-1;if(t>=e.pinnedFrom)break;let a=(i+t)*3;if(Wf(this.pos[a]-n.x,this.pos[a+1]-n.y,this.pos[a+2]-n.z)>Lf)break;e.lead===0?e.h++:e.e--,e.accAmount+=e.amountPer,e.accLen+=e.seg,e.accLen>=Rf&&this.flush(e,r)}}flush(e,t){t.add(e.accAmount,e.color,e.hue,e.surface,{length:Math.max(.14,e.accLen*1.1),rare:e.rare}),e.accAmount=0,e.accLen=0}writeGeometry(){let e=this.pos,t=this.aPos.array,n=this.aTan.array,r=this.aAlong.array,i=this.aRib.array,a=this.aCol.array,o=-1;for(let s=0;s<kf;s++){let c=this.ribbons[s],l=s*jf*2;if(!c.alive){if(s<this.drawnSlots&&i[l*4+3]!==0)for(let e=l;e<l+94;e++)t[e*3]=t[e*3+1]=t[e*3+2]=0,i[e*4+3]=0;continue}o=s;let u=s*Af,d=c.h,f=c.e-1,p=Math.max(1,f-d);for(let o=0;o<jf;o++){let s=Math.min(f,Math.max(d,o*.5)),m=Math.floor(s),h,g,_,v,y,b;if(s-m<.25||m>=f){let t=Gf(u,d,f,m),n=Gf(u,d,f,m-1),r=Gf(u,d,f,m+1);h=e[t],g=e[t+1],_=e[t+2],v=e[r]-e[n],y=e[r+1]-e[n+1],b=e[r+2]-e[n+2]}else{let t=Gf(u,d,f,m-1),n=Gf(u,d,f,m),r=Gf(u,d,f,m+1),i=Gf(u,d,f,m+2);h=(-e[t]+9*e[n]+9*e[r]-e[i])/16,g=(-e[t+1]+9*e[n+1]+9*e[r+1]-e[i+1])/16,_=(-e[t+2]+9*e[n+2]+9*e[r+2]-e[i+2])/16,v=e[r]-e[n],y=e[r+1]-e[n+1],b=e[r+2]-e[n+2]}let x=(s-d)/p;for(let e=0;e<2;e++){let u=l+o*2+e;t[u*3]=h,t[u*3+1]=g,t[u*3+2]=_,n[u*3]=v,n[u*3+1]=y,n[u*3+2]=b,r[u*3]=x,r[u*3+1]=s*c.seg,r[u*3+2]=+!!c.rare,i[u*4]=c.hue,i[u*4+1]=c.seed,i[u*4+2]=c.width,i[u*4+3]=c.alpha,a[u*3]=c.color.r,a[u*3+1]=c.color.g,a[u*3+2]=c.color.b}}}let s=Math.max(o+1,0),c=Math.max(s,this.drawnSlots);if(this.drawnSlots=s,this.mesh.visible=s>0,c===0)return;let l=c*jf*2;for(let e of this.dynAttrs)e.clearUpdateRanges(),e.addUpdateRange(0,l*e.itemSize),e.needsUpdate=!0;this.geo.setDrawRange(0,s*46*6)}};function Wf(e,t,n){return Math.sqrt(e*e+t*t+n*n)}function Gf(e,t,n,r){return(e+(r<t?t:r>n?n:r))*3}function Kf(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}var qf=`
attribute vec3 aTan;
attribute float aSide;
attribute vec3 aAlong;   // (0..1 along live length, meters from the original head, rare)
attribute vec4 aRib;     // (hue, seed, width, alpha)
attribute vec3 aCol;
uniform float uTime;
uniform vec3 uNozzle;
uniform float uAir;
varying vec2 vCoord;     // (across -1..1, meters along)
varying float vS01;
varying vec3 vCol;
varying float vAlpha;
varying float vGain;
varying float vHue;
varying float vSeed;
varying float vRare;
varying float vFacing;
void main() {
  vec3 p = position;
  float tl = length(aTan);
  vec3 T = tl > 1e-6 ? aTan / tl : vec3(0.0, 1.0, 0.0);
  vec3 V = normalize(cameraPosition - p);
  vec3 C = cross(T, V);
  float cl = length(C);
  C = cl > 1e-5 ? C / cl : vec3(1.0, 0.0, 0.0);
  // a slowly twisting sheet: its apparent width follows the twist, never fully edge-on
  vec3 up = abs(T.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
  vec3 A = normalize(cross(T, up));
  vec3 B = cross(T, A);
  float tw = aRib.y * 6.2832 + aAlong.y * 4.2 + uTime * 1.1;
  vec3 S = cos(tw) * A + sin(tw) * B;
  float wf = max(abs(dot(S, C)), 0.42);
  // streamer silhouette: full width in the middle, narrowing toward both ends
  float span = pow(sin(3.14159 * clamp(aAlong.x, 0.0, 1.0)), 0.55);
  p += C * aSide * aRib.z * 0.5 * wf * (0.3 + 0.7 * span);
  vCoord = vec2(aSide, aAlong.y);
  vS01 = aAlong.x;
  vCol = aCol;
  // edge-on sheets look thinner but denser
  vGain = inversesqrt(wf);
  vFacing = abs(dot(cross(T, S), V));
  // swallowed smoothly into the mouth while the motor runs
  float mouthFade = mix(1.0, smoothstep(0.025, 0.12, distance(position, uNozzle)), step(0.05, uAir));
  vAlpha = aRib.w * mouthFade;
  vHue = aRib.x;
  vSeed = aRib.y;
  vRare = aAlong.z;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,Jf=`
uniform float uTime;
varying vec2 vCoord;
varying float vS01;
varying vec3 vCol;
varying float vAlpha;
varying float vGain;
varying float vHue;
varying float vSeed;
varying float vRare;
varying float vFacing;
${zu}
void main() {
  if (vAlpha <= 0.001) discard;
  float x = vCoord.x;
  float s = vCoord.y;
  float ax = abs(x);
  // bright core, soft falloff to the edges
  float core = exp(-x * x * 7.0);
  float body = 1.0 - smoothstep(0.35, 1.0, ax);
  // fine lengthwise striations that drift a little along the ribbon
  float w = sin(s * 7.0 + vSeed * 40.0) * 1.3 + sin(s * 2.3 - uTime * 0.9) * 0.8;
  float fib = 0.5 + 0.45 * pow(0.5 + 0.5 * sin(x * 8.3 + w), 2.0) + 0.35 * pow(0.5 + 0.5 * sin(x * 19.0 - w * 1.7 + vSeed * 9.0), 3.0);
  fib *= 0.8 + 0.2 * sin(x * 31.0 + s * 3.0 + w);
  // pulses travelling along the length + soft taper at both ends
  float shimmer = 0.72 + 0.28 * sin(s * 13.0 - uTime * 6.5 + vSeed * 25.0);
  float taper = smoothstep(0.0, 0.12, vS01) * (1.0 - smoothstep(0.8, 1.0, vS01));
  taper = max(taper, 0.12);
  // color drifts along the length (aurora gradient); rare light shimmers as a thin film
  vec3 grad = auroraRGB(clamp(vHue + (vS01 - 0.5) * 0.2 + 0.04 * sin(s * 3.0 + uTime * 0.8), 0.0, 1.0));
  vec3 col = mix(vCol, grad, 0.55);
  if (vRare > 0.5) col = mix(col, thinFilm(430.0 + 260.0 * sin(s * 3.0 + uTime * 0.7), 0.35 + 0.6 * vFacing) * 1.2, 0.8);
  // the core runs a little whiter (hot center), the edges keep the color
  vec3 hot = mix(col, vec3(1.0), 0.14 * core);
  float I = (core * 1.0 + body * 0.45) * fib * shimmer * taper * vGain * vAlpha;
  gl_FragColor = vec4(hot * I * 1.25, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function Yf(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Wr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Xf(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Xf(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Xf(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new U(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Zf=K.height,Qf=.012,$f=64,ep=8,tp=8,np=4.5,rp=64,ip=.14,ap=[{pts:[[-2.45,-.72],[-1.6,-1.55],[-.6,-1.02],[.35,-1.72],[1.3,-1.18],[2.45,-1.88]],yb:1.55,yt:2.6,gain:1},{pts:[[-2.45,.05],[-1.3,.45],[-.2,-.12],[.9,.38],[2.45,-.15]],yb:1.82,yt:2.6,gain:.8},{pts:[[-2.45,-2.2],[-1.3,-2.55],[-.1,-2.02],[1,-2.5],[2.45,-2.12]],yb:1.72,yt:2.62,gain:.72}],op=`
float h11(float p) {
  p = fract(p * 0.1031);
  p *= p + 33.33;
  p *= p + p;
  return fract(p);
}
float n11(float x) {
  float i = floor(x);
  float f = fract(x);
  return mix(h11(i), h11(i + 1.0), f * f * (3.0 - 2.0 * f));
}
`,sp=`
attribute vec2 aSurf; // along-wall coordinate (m, continuous around the corners), kind (0 wall, 1 ceiling)
varying vec3 vWorld;
varying vec2 vSurf;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vSurf = aSurf;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,cp=`
uniform float uTime;
uniform sampler2D uNoise;
uniform sampler2D uPal;
uniform vec3 uNozzle;
uniform float uIntensity;
uniform float uClimb;
uniform float uSpread;
uniform float uWallGain;
uniform float uCeilGain;
uniform vec4 uRoom;   // minX, maxX, minZ, maxZ
uniform vec4 uWin;    // window x0, x1, y0, y1 (back wall)
uniform sampler2D uFoot; // ceiling footprint of each curtain layer (rgb = layer 0..2)
uniform vec3 uForm;
varying vec3 vWorld;
varying vec2 vSurf;

vec3 pal(float v) { return texture2D(uPal, vec2(0.015 + 0.97 * clamp(v, 0.0, 1.0), 0.5)).rgb; }

void main() {
  vec3 p = vWorld;
  float t = uTime;
  vec3 col;
  if (vSurf.y < 0.5) {
    // ---- walls: a luminous front rising from the floor, streaks trailing below it
    float a = vSurf.x;
    float y = p.y;
    float dn = length(p.xz - uNozzle.xz);
    float c = clamp(uClimb * 1.55 - dn * 0.085, 0.0, 1.0);
    float n1 = texture2D(uNoise, vec2(a * 0.09 + t * 0.004, 0.37)).r;
    float n2 = texture2D(uNoise, vec2(a * 0.41 - t * 0.012, 0.71)).g;
    float front = c * ${(Zf+1).toFixed(2)} - 0.5 + (n1 - 0.5) * 0.95 + (n2 - 0.5) * 0.32;
    float dy = front - y; // > 0 below the front
    float lit = smoothstep(-0.06, 0.12, dy);
    float lead = exp(-abs(dy) * 5.5) * smoothstep(-0.2, 0.02, dy);
    // vertical striations drifting upward (light climbing)
    float st = texture2D(uNoise, vec2(a * 0.62, y * 0.055 - t * 0.022)).r;
    float st2 = texture2D(uNoise, vec2(a * 1.9 + 0.3, y * 0.14 - t * 0.05)).a;
    float streak = smoothstep(0.35, 0.9, st) * (0.45 + 0.8 * st2);
    // the trail below the front fades: the light moves up, it does not paint the wall
    float I = lit * streak * (0.1 + 0.6 * exp(-max(dy, 0.0) * 1.6)) * 0.6;
    I += lead * (0.3 + 0.7 * streak);
    // where the floor mist meets the wall
    I += c * exp(-y * 3.2) * 0.22 * (0.6 + 0.4 * st);
    // no glow over the window opening; fade out toward the open front of the room
    float back = 1.0 - step(uRoom.z + 0.05, p.z);
    float wx = smoothstep(uWin.x - 0.03, uWin.x + 0.06, p.x) * (1.0 - smoothstep(uWin.y - 0.06, uWin.y + 0.03, p.x));
    float wy = smoothstep(uWin.z - 0.03, uWin.z + 0.06, y) * (1.0 - smoothstep(uWin.w - 0.06, uWin.w + 0.03, y));
    I *= 1.0 - wx * wy * back;
    I *= 1.0 - smoothstep(1.2, uRoom.w, p.z);
    col = pal(y * ${(.85/Zf).toFixed(4)} + (st - 0.5) * 0.12) * I * uWallGain;
  } else {
    // ---- ceiling: the light pours over the wall tops and streams inward
    vec2 q = p.xz;
    float dl = q.x - uRoom.x;
    float dr = uRoom.y - q.x;
    float db = q.y - uRoom.z;
    float dW = min(min(dl, dr), db);
    // broad soft rays running away from the nearest wall, drifting inward: veils of light
    // pouring over the wall tops (blended across the corner bisectors: no seams)
    float wl = exp((dW - dl) * 14.0);
    float wr = exp((dW - dr) * 14.0);
    float wb = exp((dW - db) * 14.0);
    float drift = t * 0.02;
    float sl = texture2D(uNoise, vec2(dl * 0.22 - drift, q.y * 0.3)).b;
    float sr = texture2D(uNoise, vec2(dr * 0.22 - drift, q.y * 0.3 + 0.37)).b;
    float sb = texture2D(uNoise, vec2(db * 0.22 - drift, q.x * 0.3 + 0.71)).b;
    float streak = smoothstep(0.25, 0.9, (sl * wl + sr * wr + sb * wb) / (wl + wr + wb));
    // once the curtain has formed the ceiling calms into a soft backdrop
    streak = mix(streak, 0.5, uForm.x * 0.85);
    float f1 = texture2D(uNoise, q * 0.15 + vec2(t * 0.005, -t * 0.003)).r;
    float front = uSpread * 3.7 - 0.35 + (f1 - 0.5) * 1.0;
    float dd = front - dW;
    float lit = smoothstep(-0.1, 0.5, dd);
    float lead = exp(-abs(dd) * 2.2) * smoothstep(-0.45, 0.0, dd);
    float body = smoothstep(0.2, 0.85, f1) * (0.45 + 0.75 * streak);
    float I = (lit * body * 0.26 + lead * (0.3 + 0.5 * streak) * 0.75) * uCeilGain;
    // light thrown up onto the ceiling by the curtain rays just below it
    vec2 fuv = vec2((q.x - uRoom.x) / (uRoom.y - uRoom.x), (q.y - uRoom.z) / (uRoom.w - uRoom.z));
    // (broken up like the rays themselves: an even wash would flatten the whole ceiling)
    float fr = texture2D(uNoise, q * vec2(0.9, 0.35) + vec2(t * 0.01, 0.0)).b;
    float foot = dot(texture2D(uFoot, fuv).rgb, uForm) * (0.25 + 0.9 * f1 * fr);
    // it arrives in the wall-top colors and drifts through the whole collected palette inward
    float cv = 0.85 - 0.55 * clamp(dW * 0.4, 0.0, 1.0) + (f1 - 0.5) * 0.5;
    col = pal(cv) * I + pal(0.85 + 0.12 * f1) * foot * 0.14;
    col *= 1.0 - smoothstep(0.9, uRoom.w, q.y);
  }
  gl_FragColor = vec4(col * uIntensity, 1.0);
}
`,lp=`
#define SKIRT ${ip.toFixed(3)}
attribute vec4 aCurt;  // s (m along the curtain), v (0 lower edge .. 1 top), layer, layer length (m)
attribute vec4 aFrame; // horizontal curtain normal (x, z), bottom y, top y
uniform float uTime;
uniform vec3 uForm;
varying vec4 vCurt;
varying vec3 vWorld;
varying vec3 vNrm;
varying float vEdge;
varying float vH;
${op}
void main() {
  float s = aCurt.x;
  float v = aCurt.y;
  float lay = aCurt.z;
  float t = uTime;
  vec3 lm = vec3(1.0 - step(0.5, lay), step(0.5, lay) * (1.0 - step(1.5, lay)), step(1.5, lay));
  float form = dot(uForm, lm);
  float fe = 1.0 - (1.0 - form) * (1.0 - form);
  // rays descend from the ceiling as the curtain forms; the lower edge wanders slowly
  float wob = 0.06 * sin(s * 2.1 + t * 0.37 + lay * 1.9) + 0.035 * sin(s * 5.3 - t * 0.61 + lay)
    + 0.03 * (n11(s * 3.1 + t * 0.2) - 0.5) + 0.022 * (n11(s * 11.0 - t * 0.45 + lay * 5.0) - 0.5);
  float yb = mix(aFrame.w - 0.14, aFrame.z + wob, fe);
  // the lowest row hangs a little below the edge: a soft glow skirt instead of a hard cut
  float y = mix(yb - SKIRT, aFrame.w, v);
  // slow folds travelling along the curtain, leaning with height
  float ph = s + v * 0.35;
  float k1 = 1.25, k2 = 2.7, k3 = 5.3;
  float p1 = ph * k1 - t * 0.21 + lay * 2.1;
  float p2 = ph * k2 + t * 0.29 + lay * 4.3;
  float p3 = ph * k3 - t * 0.44 + lay * 1.7;
  float amp = (0.72 + 0.56 * v) * mix(0.45, 1.0, fe);
  float fold = (0.16 * sin(p1) + 0.075 * sin(p2) + 0.032 * sin(p3)) * amp;
  float dfold = (0.16 * k1 * cos(p1) + 0.075 * k2 * cos(p2) + 0.032 * k3 * cos(p3)) * amp;
  vec2 N = aFrame.xy;
  vec2 T = vec2(N.y, -N.x);
  vec3 pos = position;
  pos.y = y;
  pos.xz += N * (fold + 0.07 * v);
  vec2 n2 = normalize(N - T * dfold);
  vNrm = vec3(n2.x, 0.0, n2.y);
  vec4 wp = modelMatrix * vec4(pos, 1.0);
  vWorld = wp.xyz;
  vCurt = aCurt;
  // height above the (wobbling) lower edge: meters, and as a fraction of the curtain height
  vEdge = y - yb;
  vH = (y - yb) / (aFrame.w - yb);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,up=`
uniform float uTime;
uniform sampler2D uPal;
uniform float uIntensity;
uniform vec3 uForm;
uniform vec3 uGain;
uniform float uRare;
uniform vec4 uRipS[${tp}]; // s0 on each layer (xyz), age (w)
uniform vec4 uRipA[${tp}]; // amplitude on each layer (xyz)
uniform float uRipOn;
varying vec4 vCurt;
varying vec3 vWorld;
varying vec3 vNrm;
varying float vEdge;
varying float vH;
${op}
${zu}

void main() {
  float s = vCurt.x;
  float v = max(vH, 0.0);
  float lay = vCurt.z;
  float len = vCurt.w;
  float t = uTime;
  vec3 lm = vec3(1.0 - step(0.5, lay), step(0.5, lay) * (1.0 - step(1.5, lay)), step(1.5, lay));
  float form = dot(uForm, lm);

  // ---- finger ripples: a bright wave running both ways along the curtain + a local flash
  float rip = 0.0;
  if (uRipOn > 0.5) {
    for (int i = 0; i < ${tp}; i++) {
      float amp = dot(uRipA[i].xyz, lm);
      float age = uRipS[i].w;
      float dist = abs(s - dot(uRipS[i].xyz, lm));
      float fr = dist - age * 1.5;
      rip += amp * (exp(-fr * fr * 7.0) * exp(-age * 0.9) + exp(-dist * dist * 4.0) * exp(-age * 1.8));
    }
    rip = 1.0 - exp(-rip * 1.4);
  }

  // ---- rays: bundles, rays, striations, hairlines (drifting slowly along the curtain).
  // The finest octaves fade out where they would alias (curtain seen edge-on / far away).
  float x = s + lay * 17.0;
  float fw = fwidth(x);
  float r1 = n11(x * 4.3 + t * 0.05);
  float r2 = n11(x * 16.0 - t * 0.11);
  float r3 = mix(n11(x * 47.0 + t * 0.23), 0.55, smoothstep(0.15, 0.5, fw * 47.0));
  float r4 = mix(n11(x * 131.0 - t * 0.4), 0.5, smoothstep(0.15, 0.5, fw * 131.0));
  float rays = (0.15 + 0.85 * r1) * (0.15 + 1.25 * r2 * r2) * (0.5 + 0.8 * r3 * r3) * (0.8 + 0.4 * r4);

  // ---- vertical profile: crisp bright lower edge, rays of varying reach above it
  float e = vEdge;
  float edge = smoothstep(-0.015, 0.04, e);
  float band = exp(-max(e, 0.0) * 11.0);
  float skirt = exp(min(e, 0.0) * 22.0) * (1.0 - edge);
  float reach = mix(1.2, 3.4, n11(x * 2.6 + t * 0.04)) * (1.0 - 0.45 * rip);
  float tail = exp(-v * reach);
  float top = 1.0 - smoothstep(0.7, 1.0, v);
  // the lower edge brightens and dims in long patches along the curtain
  float patchy = 0.65 + 0.55 * n11(x * 0.9 - t * 0.12);
  // the tails get the rays' contrast squared-ish: dark gaps between bright rays, no haze
  float I = edge * top * (band * (0.55 + 0.45 * rays) * patchy + tail * rays * (0.35 + 0.65 * rays) * 1.25) + skirt * (0.3 + 0.3 * rays) * patchy;

  // ---- color by height: first palette colors at the lower edge, later ones above
  float cv = v * 1.08 + (r1 - 0.5) * 0.07 + rip * 0.2;
  vec3 col = texture2D(uPal, vec2(0.015 + 0.97 * clamp(cv, 0.0, 1.0), 0.5)).rgb;
  // the lower edge burns a little brighter and paler (still colored)
  col = mix(col, col * 0.7 + vec3(0.3), band * edge * 0.12);

  // ---- view: seen edge-on a curtain is optically thicker (bright fold lines)
  vec3 V = normalize(cameraPosition - vWorld);
  float ndv = abs(dot(normalize(vNrm), V));
  float od = clamp(mix(1.0, 1.0 / max(ndv, 0.2), 0.4), 1.0, 1.7);

  // ---- rare light: iridescent thin-film bands sliding through the curtain
  if (uRare > 0.001) {
    float bands = sin(v * 21.0 + x * 0.9 - t * 0.55 + 3.0 * n11(x * 1.7 + t * 0.1));
    float rb = smoothstep(0.5, 1.0, bands) * smoothstep(0.03, 0.2, v) * (0.5 + 0.5 * r1);
    vec3 film = thinFilm(360.0 + 280.0 * n11(x * 1.3 - t * 0.08) + 220.0 * v, 0.35 + 0.65 * ndv);
    col = mix(col, film * 1.35, clamp(uRare * rb, 0.0, 0.85));
  }

  // ---- extent: soft ends, unfurls from the middle outward while forming
  float hl = len * 0.5;
  float ends = smoothstep(0.0, 0.9, s) * (1.0 - smoothstep(len - 0.9, len, s));
  float reveal = 1.0 - smoothstep(-0.7, 0.0, abs(s - hl) - form * (hl + 0.8));
  float g = dot(uGain, lm) * smoothstep(0.0, 0.45, form);

  col = mix(col, col * 0.6 + vec3(0.4), rip * 0.2);
  gl_FragColor = vec4(col * I * od * ends * reveal * g * (1.0 + 2.6 * rip) * uIntensity * 1.05, 1.0);
}
`,dp=class{constructor(e){Z(this,`group`,new Rn),Z(this,`shell`,void 0),Z(this,`curtain`,void 0),Z(this,`palTex`,void 0),Z(this,`footTex`,void 0),Z(this,`palData`,new Uint16Array(256)),Z(this,`bandW`,new Float32Array(ep)),Z(this,`bandC`,new Float32Array(ep)),Z(this,`avg`,new H(.3,.9,.8)),Z(this,`tmpC`,new H),Z(this,`samples`,[]),Z(this,`layerCount`,void 0),Z(this,`su`,void 0),Z(this,`cu`,void 0),Z(this,`rare`,0),Z(this,`energy`,0),Z(this,`touchGlow`,0),Z(this,`intensity`,0);let{shared:t,quality:n}=e;this.layerCount=Math.max(1,Math.min(ap.length,n.auroraLayers)),this.palTex=new gi(this.palData,$f,1,M,T),this.palTex.minFilter=this.palTex.magFilter=h,this.palTex.wrapS=this.palTex.wrapT=u,this.palTex.generateMipmaps=!1,this.setPalette([Lu(.04),Lu(.22),Lu(.62),Lu(.8)],[.4,.25,.2,.15],0);let r=[],i=[];for(let e=0;e<tp;e++)r.push(new an(0,0,0,np)),i.push(new an(0,0,0,0));this.cu={uIntensity:{value:0},uForm:{value:new B},uGain:{value:new B(ap[0].gain,ap[1].gain,ap[2].gain)},uRare:{value:0},uRipS:{value:r},uRipA:{value:i},uRipOn:{value:0}};let a=new ja({name:`sky-aurora-curtain`,uniforms:{uTime:t.uTime,uPal:{value:this.palTex},...this.cu},vertexShader:lp,fragmentShader:up,transparent:!0,depthWrite:!1,side:2,blending:2}),o=n.level===0?110:150;this.curtain=new W(this.buildCurtain(o,8),a),this.curtain.name=`sky-aurora-curtain`,this.curtain.renderOrder=7,this.su={uIntensity:{value:0},uClimb:{value:0},uSpread:{value:0},uWallGain:{value:1},uCeilGain:{value:1}},this.footTex=this.buildFootprint();let s=new ja({name:`sky-aurora-shell`,uniforms:{uTime:t.uTime,uNozzle:t.uNozzle,uNoise:{value:wf()},uPal:{value:this.palTex},uFoot:{value:this.footTex},uForm:this.cu.uForm,uRoom:{value:new an(K.minX,K.maxX,K.minZ,K.maxZ)},uWin:{value:new an(du.x0,du.x1,du.y0,du.y1)},...this.su},vertexShader:sp,fragmentShader:cp,transparent:!0,depthWrite:!1,blending:2});this.shell=new W(fp(),s),this.shell.name=`sky-aurora-shell`,this.shell.renderOrder=6,this.group.add(this.shell,this.curtain),this.group.visible=!1}setPalette(e,t,n){let r=Math.min(ep,e.length);if(r===0)return;let i=this.bandW,a=this.bandC,o=0;for(let e=0;e<r;e++)i[e]=Math.max(.07,t[e]??1/r),o+=i[e];let s=0;this.avg.setRGB(0,0,0);for(let t=0;t<r;t++)a[t]=(s+i[t]*.5)/o,s+=i[t],this.avg.r+=e[t].r*i[t],this.avg.g+=e[t].g*i[t],this.avg.b+=e[t].b*i[t];let c=Math.max(this.avg.r,this.avg.g,this.avg.b,1e-4);this.avg.multiplyScalar(1/c);let l=Er.toHalfFloat,u=this.tmpC;for(let t=0;t<$f;t++){let n=(t+.5)/$f;if(n<=a[0])u.copy(e[0]);else if(n>=a[r-1])u.copy(e[r-1]);else{let t=0;for(;t<r-2&&n>a[t+1];)t++;u.copy(e[t]).lerp(e[t+1],X(a[t],a[t+1],n))}this.palData[t*4]=l(u.r),this.palData[t*4+1]=l(u.g),this.palData[t*4+2]=l(u.b),this.palData[t*4+3]=l(1)}this.palTex.needsUpdate=!0,this.rare=n>.001?.4+.6*Au(n):0}get paletteTexture(){return this.palTex}update(e,t,n){let r=Au(t),i=Au(n);this.intensity=i,this.group.visible=i>.002&&r>.001;let a=this.cu.uRipS.value,o=this.cu.uRipA.value,s=0;for(let t=0;t<tp;t++)a[t].w>=np||(a[t].w=Math.min(np,a[t].w+e.dt),a[t].w>=np?o[t].set(0,0,0,0):s++);if(this.cu.uRipOn.value=+(s>0),this.touchGlow*=Math.exp(-e.dt*1.2),!this.group.visible){this.energy=0;return}let c=Au(r/.3),l=Au((r-.3)/.3),u=this.cu.uForm.value;u.set(X(.6,.88,r),this.layerCount>1?X(.66,.94,r):0,this.layerCount>2?X(.72,1,r):0);let d=(u.x+u.y+u.z)/this.layerCount,f=this.su;f.uIntensity.value=i,f.uClimb.value=c,f.uSpread.value=l,f.uWallGain.value=(1-.6*l)*(1-.6*d),f.uCeilGain.value=1-.85*d,this.cu.uIntensity.value=i,this.cu.uRare.value=this.rare,this.curtain.visible=u.x>.001,this.energy=.28*c*f.uWallGain.value+.34*l*f.uCeilGain.value+.72*d}touch(e){let t=this.cu.uRipS.value,n=this.cu.uRipA.value,r=0;for(let e=1;e<tp;e++)t[e].w>t[r].w&&(r=e);let i=t[r],a=n[r];i.set(0,0,0,0),a.set(0,0,0,0);for(let t=0;t<this.layerCount;t++){let n=this.samples[t],r=1/0,o=0;for(let t=0;t<n.x.length;t++){let i=n.x[t]-e.x,a=n.z[t]-e.z,s=i*i+a*a;s<r&&(r=s,o=n.s[t])}i.setComponent(t,o),a.setComponent(t,Math.exp(-Math.sqrt(r)/1.5))}this.cu.uRipOn.value=1,this.touchGlow=Math.min(1,this.touchGlow+.35)}ambient(e){let t=this.energy*this.intensity*.16*(1+.35*this.touchGlow);return e.copy(this.avg).multiplyScalar(t)}buildCurtain(e,t){let n=this.layerCount,r=(e+1)*(t+1),i=new Float32Array(n*r*3),a=new Float32Array(n*r*4),o=new Float32Array(n*r*4),s=[],c=new B;for(let l=0;l<n;l++){let n=ap[l],u=new $i(n.pts.map(([e,t])=>new B(e,0,t)),!1,`centripetal`),d=u.getLength(),f=u.getSpacedPoints(e),p={x:new Float32Array(e+1),z:new Float32Array(e+1),s:new Float32Array(e+1)};for(let s=0;s<=e;s++){let m=s/e;u.getTangentAt(m,c),c.y=0,c.normalize();let h=-c.z,g=c.x,_=m*d;p.x[s]=f[s].x,p.z[s]=f[s].z,p.s[s]=_;for(let e=0;e<=t;e++){let c=e/t,u=l*r+s*(t+1)+e;i[u*3]=f[s].x,i[u*3+1]=n.yb+(n.yt-n.yb)*c,i[u*3+2]=f[s].z,a[u*4]=_,a[u*4+1]=c,a[u*4+2]=l,a[u*4+3]=d,o[u*4]=h,o[u*4+1]=g,o[u*4+2]=n.yb,o[u*4+3]=n.yt}}this.samples.push(p);for(let n=0;n<e;n++)for(let e=0;e<t;e++){let i=l*r+n*(t+1)+e,a=i+t+1;s.push(i,a,i+1,a,a+1,i+1)}}let l=new Wr;return l.setAttribute(`position`,new U(i,3)),l.setAttribute(`aCurt`,new U(a,4)),l.setAttribute(`aFrame`,new U(o,4)),l.setIndex(s),l.computeBoundingSphere(),l.boundingSphere&&(l.boundingSphere.radius+=.5),l}buildFootprint(){let e=rp,t=new Uint8Array(16384),n=K.maxX-K.minX,r=K.maxZ-K.minZ;for(let i=0;i<e;i++)for(let a=0;a<e;a++){let o=K.minX+(a+.5)/e*n,s=K.minZ+(i+.5)/e*r;for(let n=0;n<this.layerCount;n++){let r=this.samples[n],c=1/0;for(let e=0;e<r.x.length;e++)c=Math.min(c,(r.x[e]-o)**2+(r.z[e]-s)**2);t[(i*e+a)*4+n]=Math.round(255*Math.exp(-c*4.8828125))}t[(i*e+a)*4+3]=255}let i=new gi(t,e,e,M,v);return i.minFilter=i.magFilter=h,i.generateMipmaps=!1,i.needsUpdate=!0,i}};function fp(){let e=K.maxX-K.minX,t=K.maxZ-K.minZ,n=(K.minX+K.maxX)/2,r=(K.minZ+K.maxZ)/2,i=new va(e,Zf,4,1);i.translate(n,Zf/2,K.minZ+Qf);let a=new va(t,Zf,4,1);a.rotateY(Math.PI/2),a.translate(K.minX+Qf,Zf/2,r);let o=new va(t,Zf,4,1);o.rotateY(-Math.PI/2),o.translate(K.maxX-Qf,Zf/2,r);let s=new va(e,t,1,1);s.rotateX(Math.PI/2),s.translate(n,Zf-Qf,r);let c=[a,i,o,s];c.forEach((n,r)=>{let i=n.attributes.position,a=new Float32Array(i.count*2);for(let n=0;n<i.count;n++){let o=i.getX(n),s=i.getZ(n),c=0;r===0?c=K.maxZ-s:r===1?c=t+(o-K.minX):r===2&&(c=t+e+(s-K.minZ)),a[n*2]=c,a[n*2+1]=+(r===3)}n.setAttribute(`aSurf`,new U(a,2)),n.deleteAttribute(`normal`),n.deleteAttribute(`uv`)});let l=Yf(c);return c.forEach(e=>e.dispose()),l}var pp=`
uniform sampler2D uLightField;
uniform vec4 uLightFieldRect;
uniform float uLightFieldGain;
uniform vec3 uAuroraAmbient;
uniform vec3 uAuroraCeiling;
vec3 auroraBounce(vec3 p, vec3 n, float heightFalloff) {
  vec2 q = p.xz + n.xz * 0.28;
  vec2 uv = (q - uLightFieldRect.xy) * uLightFieldRect.zw;
  vec3 L = texture2D(uLightField, clamp(uv, 0.001, 0.999)).rgb;
  float up = clamp(n.y, -1.0, 1.0);
  float facing = mix(0.55, 1.0, max(up, 0.0)) * (up < -0.2 ? 0.25 : 1.0);
  float h = exp(-max(p.y, 0.0) * heightFalloff);
  vec3 sky = uAuroraAmbient * (0.35 + 0.65 * clamp(0.5 - 0.5 * n.y + 0.5 * smoothstep(0.6, 2.4, p.y), 0.0, 1.0));
  sky += uAuroraCeiling * smoothstep(1.2, 2.6, p.y);
  return L * uLightFieldGain * facing * h + sky;
}
`;function mp(e,t={}){let n={value:t.strength??1},r={value:t.heightFalloff??1.4},i=e.onBeforeCompile;e.onBeforeCompile=(t,a)=>{i?.call(e,t,a),t.uniforms.uLightField=Xu.uLightField,t.uniforms.uLightFieldRect=Xu.uLightFieldRect,t.uniforms.uLightFieldGain=Xu.uLightFieldGain,t.uniforms.uAuroraAmbient=Xu.uAuroraAmbient,t.uniforms.uAuroraCeiling=Xu.uAuroraCeiling,t.uniforms.uBounceStrength=n,t.uniforms.uBounceFalloff=r,t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vBounceWorld;
varying vec3 vBounceNormal;`).replace(`#include <project_vertex>`,`#include <project_vertex>
        {
          vec4 bp = vec4(transformed, 1.0);
          vec3 bn = objectNormal;
          #ifdef USE_INSTANCING
            bp = instanceMatrix * bp;
            bn = mat3(instanceMatrix) * bn;
          #endif
          vBounceWorld = (modelMatrix * bp).xyz;
          vBounceNormal = normalize(mat3(modelMatrix) * bn);
        }`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>\nvarying vec3 vBounceWorld;\nvarying vec3 vBounceNormal;\nuniform float uBounceStrength;\nuniform float uBounceFalloff;\n${pp}`).replace(`#include <lights_fragment_maps>`,`#include <lights_fragment_maps>
        {
          vec3 bnW = normalize(vBounceNormal) * (gl_FrontFacing ? 1.0 : -1.0);
          vec3 bounceIrr = auroraBounce(vBounceWorld, bnW, uBounceFalloff) * uBounceStrength;
          reflectedLight.indirectDiffuse += bounceIrr * material.diffuseColor;
        }`)};let a=e.customProgramCacheKey?.bind(e);return e.customProgramCacheKey=()=>(a?a():``)+`|bounce`,e.userData.bounceStrength=n,e.userData.bounceFalloff=r,e}var hp=.002,gp=.026,_p=.035,vp=72,yp=48,bp=.0068,xp=.0075,Sp={resX:48,resZ:32,radius:.45,rate:1.15,decay:.12,combRate:2.4,combDecay:.03},Cp=[[34,41,66],[55,67,99],[120,85,73],[98,60,50],[160,129,86],[196,182,152]],wp=0,Tp=1,Ep=2,Dp=3,Op=4,kp=5,Ap=16,jp=new H(2501956),Mp=new H(12891284),Np=e=>`vec3(${e.r.toFixed(4)}, ${e.g.toFixed(4)}, ${e.b.toFixed(4)})`,Pp=e=>e.toFixed(5),Fp=(e,t)=>e-t*Math.round(e/t);function Ip(e,t){let n=q.w,r=q.d,i=Math.min(e,n-e),a=Math.min(t,r-t),o=Math.min(i,a),s=a<i?e-n/2:t-r/2;if(o<.032)return wp;if(o<.054)return Math.abs(Fp(s,.045))/.014+Math.abs(o-.043)/.0085<1?wp:Op;if(o<.064)return 21;if(o<.196){let e=o-.13,t=Math.abs(Fp(s,.2))/.075+Math.abs(e)/.058;if(t<.3)return Op;if(t<.62)return Dp;if(t<.84)return kp;let n=Fp(s+.1,.2);return Math.abs(n)<.005&&Math.abs(e)<.024||Math.abs(e)<.005&&Math.abs(n)<.024?Op:wp}if(o<.206)return kp;if(o<.25){let e=s/.04-Math.floor(s/.04);return o-.206<.04*(1-Math.abs(2*e-1))?wp:Dp}if(o<.258)return 21;let c=Math.abs(e-n/2),l=Math.abs(t-r/2),u=c/.6+l/.4;if(u<1.04)return u>.97?20:u>.89||u<.12?kp:u<.28?Op:u<.34?kp:Math.abs(c-.31)/.065+l/.045<1||c/.045+Math.abs(l-.2)/.055<1?Dp:Tp;let d=Math.abs(c-.73)/.095+l/.072;if(d<1)return d<.4?Op:d<.76?Tp:21;if(l<.006&&c<.66)return kp;let f=n/2-.258,p=r/2-.258,m=(f-c)/.46+(p-l)/.3;if(m<1.04)return m>.95?21:m<.36?Op:m>.58&&m<.66?Dp:Tp;if(u>1.22&&m>1.28&&d>1.6){let e=Math.round(c/.17),t=Math.round(l/.15);if((e+t)%2==0){let n=Math.abs(c-e*.17)+Math.abs(l-t*.15);if(n<.03&&n>.015)return e%2==0?Op:kp;if(n<.006)return Dp}}return Ep}function Lp(e,t){let n=Math.imul(e,668265261)^Math.imul(t+374761393,2246822507);return n=Math.imul(n^n>>>15,739982445),n^=n>>>13,(n>>>0)/4294967296}function Rp(e){let t=Math.round(q.w/xp),n=Math.round(q.d/xp),r=t*2,i=n*2,a=new Uint8Array(r*i*4);for(let e=0;e<n;e++)for(let n=0;n<t;n++){let t=(n+.5)*xp,i=Ip(t,(e+.5)*xp),o=Cp[i&15],s=1+(.055*Math.sin(t*2.3+.4)+.035*Math.sin(t*6.7+1.9)+.02*Math.sin(t*17))*((i&15)===Ep?1:.45)+(Lp(n,e)-.5)*.08,c=i&Ap?188:255;for(let t=0;t<2;t++)for(let i=0;i<2;i++){let l=n*2+i,u=e*2+t,d=s*(1+(Lp(l+7919,u)-.5)*.05),f=(u*r+l)*4;a[f]=Math.min(255,o[0]*d),a[f+1]=Math.min(255,o[1]*d),a[f+2]=Math.min(255,o[2]*d),a[f+3]=c}}let o=new gi(a,r,i,M,v);return o.colorSpace=Je,o.wrapS=o.wrapT=u,o.magFilter=h,o.minFilter=_,o.generateMipmaps=!0,o.anisotropy=e,o.needsUpdate=!0,o}var zp=`
uniform vec3 uNozzle;
uniform vec3 uNozzleDir;
uniform float uAir;
uniform float uTime;
uniform vec3 uLampPos;
uniform vec3 uLampCol;
uniform float uLampDecay;
uniform vec4 uSofa;
uniform float uSofaTop;
uniform vec4 uContact;

// Lamp irradiance at p (inverse-power falloff like three's lights), softly shadowed by the
// sofa: the ray p → lamp is tested against the sofa footprint; it rises, so it is lowest
// where it enters the footprint.
vec3 rugLamp(vec3 p, out vec3 L) {
  vec3 d = uLampPos - p;
  float dist = length(d);
  L = d / dist;
  vec2 dd = d.xz + 1e-5;
  vec2 t0 = (uSofa.xy - uSofa.zw - p.xz) / dd;
  vec2 t1 = (uSofa.xy + uSofa.zw - p.xz) / dd;
  vec2 tn = min(t0, t1);
  vec2 tf = max(t0, t1);
  float tin = max(max(tn.x, tn.y), 0.0);
  float tout = min(min(tf.x, tf.y), 1.0);
  float crossed = max(tout - tin, 0.0) * length(d.xz);
  float yIn = p.y + d.y * tin;
  float shadow = smoothstep(0.0, 0.16, crossed) * (1.0 - smoothstep(uSofaTop - 0.18, uSofaTop + 0.1, yIn));
  return uLampCol * pow(max(dist, 0.1), -uLampDecay) * (1.0 - 0.85 * shadow);
}

// Floor point in nozzle-head coordinates (across, along forward) relative to the head
// center; z is 1 while the head is on the floor (0 up on the sofa seat).
vec3 rugHeadLocal(vec2 p) {
  vec2 fwd = normalize(uNozzleDir.xz + vec2(1e-5, 0.0));
  vec2 rel = p - (uNozzle.xz - fwd * ${Pp(Cu.mouthForward)});
  return vec3(dot(rel, vec2(-fwd.y, fwd.x)), dot(rel, fwd), 1.0 - smoothstep(0.06, 0.16, uNozzle.y));
}

// Ambient / contact occlusion: next to the sofa, under the nozzle head, under the canister.
float rugOcclusion(vec3 p) {
  vec2 q = abs(p.xz - uSofa.xy) - uSofa.zw;
  float ds = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
  float occ = mix(0.5, 1.0, smoothstep(-0.03, 0.42, ds));
  vec3 head = rugHeadLocal(p.xz);
  vec2 loc = head.xy / vec2(0.22, 0.12);
  occ *= 1.0 - 0.5 * head.z * exp(-dot(loc, loc));
  vec2 rb = (p.xz - uContact.xy) / max(uContact.z, 1e-3);
  occ *= 1.0 - uContact.w * exp(-2.0 * dot(rb, rb));
  return occ;
}
`,Bp=`
uniform vec3 uSky;
uniform vec3 uGround;
uniform vec3 uDirCol[2];
uniform vec3 uDirDir[2];
const float RUG_INV_PI = 0.31830989;

vec3 hash32(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yzz) * p3.zyx);
}
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float sdRoundRect(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}
// Diffuse irradiance / PI for fuzzy yarn (slightly wrapped), same scale as three's
// MeshStandardMaterial: ambient is occluded by the pile above (ao), direct light more so.
vec3 rugDiffuse(vec3 n, vec3 lampIrr, vec3 lampDir, float ao, float aoDirect) {
  vec3 amb = mix(uGround, uSky, 0.5 + 0.5 * n.y) * ao;
  vec3 direct = lampIrr * clamp(dot(n, lampDir) * 0.8 + 0.2, 0.0, 1.0);
  direct += uDirCol[0] * clamp(dot(n, uDirDir[0]) * 0.8 + 0.2, 0.0, 1.0);
  direct += uDirCol[1] * clamp(dot(n, uDirDir[1]) * 0.8 + 0.2, 0.0, 1.0);
  return (amb + direct * aoDirect) * RUG_INV_PI;
}
`,Vp=`
${zp}
uniform float uShellCount;
uniform float uPile;
uniform float uSwirl;
uniform vec2 uNap;
uniform sampler2D uPart;
uniform vec4 uRugRect;
varying vec3 vPos;
varying vec2 vRoot;
varying float vH;
varying vec3 vLean;
varying vec3 vLampIrr;
varying vec3 vLampDir;
varying float vOcc;

void main() {
  // shells are drawn tip-first so the dense lower shells get depth-rejected behind the tips
  float s = uShellCount - 1.0 - float(gl_InstanceID);
  float h = s / (uShellCount - 1.0);
  vec2 root = position.xz;
  vec4 part = texture2D(uPart, (root - uRugRect.xy) * uRugRect.zw);
  float parting = part.r;
  vec2 comb = part.gb * 2.0 - 1.0;

  // the air drags the fibers toward the mouth, spiralling like the suction field
  vec2 toM = uNozzle.xz - root;
  float dM = length(toM) + 1e-4;
  vec2 dirM = toM / dM;
  float dy = uNozzle.y - 0.02;
  float prox = 1.0 - smoothstep(0.05, 0.62, sqrt(dM * dM + dy * dy));
  vec2 airDir = dirM + vec2(-dirM.y, dirM.x) * (uSwirl * min(1.0, dM / 0.22));
  // gusts run inward through the pile toward the mouth (wind over a field), plus a fine flutter
  float gust = 0.5 + 0.5 * sin(dM * 30.0 + uTime * 13.0 + 0.8 * sin(atan(dirM.y, dirM.x) * 3.0 + uTime));
  float flutter = (0.62 + 0.5 * gust) * (0.85 + 0.15 * sin(uTime * 23.0 + root.x * 47.0 + root.y * 31.0));
  // combed pile leans along the last stroke; parted pile lies nearly flat
  vec2 lean = airDir * (uAir * prox * 1.3 * flutter) + comb * (0.6 + 1.0 * parting) + uNap;

  // each strand bends along a circular arc whose angle grows toward the tip
  float bend = length(lean);
  vec2 dir = lean / max(bend, 1e-4);
  float B = min(bend * 1.3, 1.75);
  float a = B * h;
  float sa = sin(0.5 * a);
  float along = 2.0 * sa * sa / max(B, 1e-4);
  float up = a > 1e-4 ? sin(a) / B : h;
  up *= 1.0 - 0.45 * parting;
  // the nozzle head rests on the pile and presses it down (keeps its glowing mouth in view)
  vec3 head = rugHeadLocal(root);
  vec2 foot = abs(head.xy) - vec2(${Pp(Cu.width/2)}, ${Pp(Cu.depth/2)});
  float press = head.z * (1.0 - smoothstep(-0.01, 0.035, max(foot.x, foot.y)));
  up *= 1.0 - 0.7 * press;
  vec3 p = vec3(root.x + dir.x * along * uPile, ${Pp(hp)} + up * uPile, root.y + dir.y * along * uPile);

  vPos = p;
  vRoot = root;
  vH = h;
  vLean = vec3(lean, parting);
  vLampIrr = rugLamp(p, vLampDir);
  vOcc = rugOcclusion(p);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,Hp=`
${Bp}
${pp}
uniform sampler2D uPattern;
uniform vec4 uRugRect;
uniform vec4 uPileRect;
uniform float uCorner;
uniform float uTuft;
uniform float uBounce;
uniform float uInner;
uniform float uSheen;
varying vec3 vPos;
varying vec2 vRoot;
varying float vH;
varying vec3 vLean;
varying vec3 vLampIrr;
varying vec3 vLampDir;
varying float vOcc;

void main() {
  // pixel footprint in tuft cells (derivatives are taken before any discard)
  float px = length(fwidth(vRoot)) / uTuft;
  if (sdRoundRect(vRoot - uPileRect.xy, uPileRect.zw, uCorner) > 0.0) discard;
  float h = vH;
  float parting = vLean.z;
  vec2 lean = vLean.xy;
  vec4 pat = texture2D(uPattern, (vRoot - uRugRect.xy) * uRugRect.zw);

  // --- coverage: yarn tufts on a staggered knot grid, tapering and curling toward the tips
  vec2 g = vRoot / uTuft;
  g.x += 0.5 * mod(floor(g.y), 2.0);
  vec2 cell = floor(g);
  vec2 f = g - cell - 0.5;
  vec3 rnd = hash32(cell);
  float ang = rnd.z * 6.2832 + h * 4.5;
  vec2 c = (rnd.xy - 0.5) * 0.26 + vec2(cos(ang), sin(ang)) * (0.09 * h);
  float bendAmt = length(lean);
  vec2 ld = lean / max(bendAmt, 1e-4);
  vec2 perp = vec2(-ld.y, ld.x);
  // parted pile splays: tufts fan apart across the combed direction
  c += perp * ((rnd.x - 0.5) * 0.6 * parting * h);
  // tilted strands cut the shell in elongated streaks along the lean (combed, lying pile)
  float tiltA = min(bendAmt * 1.3, 1.75) * h;
  float stretch = 1.0 + 1.6 * smoothstep(0.25, 1.3, tiltA);
  vec2 fc = f - c;
  float dist = length(vec2(dot(fc, ld) / stretch, dot(fc, perp)));
  // single strands fray the tuft outline; they fade out once smaller than a pixel
  float strand = hash12(floor(vRoot / (uTuft * 0.34)));
  float fine = 1.0 - smoothstep(0.35, 0.9, px * 2.9);
  // tapered tips; a parted pile opens up so the deep layer shows between the tufts
  float rad = mix(0.72, 0.2, h) * (0.8 + 0.4 * rnd.z) * (1.0 - 0.5 * parting * sqrt(h));
  rad *= 1.0 + fine * (strand - 0.5) * 0.55;
  float aa = clamp(px * 0.7, 0.03, 0.5);
  float cov = 1.0 - smoothstep(rad - aa, rad + aa, dist);
  // carved outlines have a shorter pile
  cov *= 1.0 - smoothstep(pat.a, pat.a + 0.06, h);
  if (h < 0.001) cov = 1.0;
#ifdef A2C
  if (cov < 0.3) discard;
  cov = smoothstep(0.3, 0.7, cov);
#else
  if (cov < 0.5) discard;
  cov = 1.0;
#endif

  // --- shading
  vec3 albedo = pat.rgb * (0.84 + 0.32 * rnd.y);
  // softly rounded tuft tops, tilted by the lean
  vec2 tilt = fc * 0.55 + lean * 0.5;
  vec3 n = normalize(vec3(tilt.x, 1.0, tilt.y));
  // fake self-shadowing: deeper shells are darker. Once tufts shrink below a pixel the
  // depth contrast is eased so the pile reads as texture instead of sparkling noise.
  float far = smoothstep(0.45, 1.3, px);
  // a parted pile lies flat and open: light reaches the lower fibers (no sooty trough)
  float ao = mix(0.2 + 0.22 * far + 0.34 * parting, 1.0, pow(h, 0.75));
  vec3 V = normalize(cameraPosition - vPos);
  // nap: pile brushed away from the viewer shows the fiber sides (lighter), toward the
  // viewer the darker cut ends — this is what draws the vacuum tracks
  vec2 away = -normalize(V.xz + 1e-4);
  float nap = 1.0 + 0.5 * (1.0 - 0.35 * parting) * clamp(dot(lean, away), -1.0, 1.0);
  vec3 col = albedo * rugDiffuse(n, vLampIrr, vLampDir, ao, ao * ao) * (nap * vOcc);
  // velvet sheen on the tips (Kajiya-Kay style on the leaning fiber)
  vec3 T = normalize(vec3(lean.x, 1.0, lean.y));
  float TH = dot(T, normalize(vLampDir + V));
  // (flattened, combed fibers show their long glossy sides: satin lanes)
  col += vLampIrr * (albedo + 0.15) * (uSheen * h * (h + 0.9 * parting) * pow(max(1.0 - TH * TH, 0.0), 8.0) * vOcc);
  // aurora light: bounce on the fibers + light trapped deep in the pile glowing between them
  vec3 aur = auroraBounce(vPos, n, 1.2);
  float deep = (1.0 - h) * (1.0 - h);
  // (where the pile is parted the trapped light shines up between the splayed tufts)
  col += aur * (albedo * (uBounce * ao) + (albedo * 0.6 + 0.12) * (uInner * deep * (1.0 + 1.8 * parting)));

  gl_FragColor = vec4(col, cov);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Up=`
${zp}
attribute vec4 aTrim;
attribute vec2 aDir;
varying vec3 vPos;
varying vec3 vNrm;
varying vec4 vTrim;
varying vec3 vLampIrr;
varying vec3 vLampDir;
varying float vOcc;

void main() {
  vec3 p = position;
  if (aTrim.x > 0.5) {
    // fringe tassel: lifts and streams toward the nozzle, tips flutter
    float t = aTrim.y;
    vec2 toM = uNozzle.xz - p.xz;
    float dM = length(toM) + 1e-4;
    float dy = uNozzle.y - 0.02;
    float prox = (1.0 - smoothstep(0.08, 0.7, sqrt(dM * dM + dy * dy))) * uAir;
    float w = t * t;
    float fl = sin(uTime * (15.0 + 8.0 * aTrim.w) + aTrim.w * 37.0 + t * 2.5);
    vec2 side = vec2(-aDir.y, aDir.x);
    p.xz += (toM / dM * 0.05 + side * (fl * 0.014)) * (prox * w);
    p.y += abs(prox) * w * (0.024 + 0.008 * fl);
  }
  vPos = p;
  vNrm = normal;
  vTrim = aTrim;
  vLampIrr = rugLamp(p, vLampDir);
  vOcc = rugOcclusion(p);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`,Wp=`
${Bp}
${pp}
uniform float uBounce;
varying vec3 vPos;
varying vec3 vNrm;
varying vec4 vTrim;
varying vec3 vLampIrr;
varying vec3 vLampDir;
varying float vOcc;

void main() {
  vec3 n = normalize(vNrm);
  // binding stitch / fringe yarn coordinates and their pixel footprints (before any discard)
  float st = vTrim.y / 0.0042 + vTrim.z * 2.2;
  float u = (vTrim.z * 0.5 + 0.5) * 4.0 + sin(vTrim.y * 18.0 + vTrim.w * 9.0) * 0.18;
  float stW = fwidth(st);
  float uW = fwidth(u);
  vec3 albedo;
  float ao;
  if (vTrim.x < 0.5) {
    // binding: yarn whipstitched over the edge (diagonal wraps)
    float wrap = 0.5 + 0.5 * cos(6.2832 * st);
    wrap = mix(wrap, 0.5, smoothstep(0.3, 0.8, stW));
    albedo = ${Np(jp)} * (0.72 + 0.4 * wrap);
    // darker where it tucks under the pile and meets the floor
    ao = mix(0.35, 1.0, smoothstep(0.0, 0.45, sin(vTrim.z * 3.14159)));
  } else {
    // fringe: a few twisted yarns per tassel, ending raggedly; a wrapped knot at the root
    float id = floor(u);
    float yarn = 1.0 - smoothstep(0.3, 0.46, abs(fract(u) - 0.5));
    yarn = mix(yarn, 1.0, smoothstep(0.4, 1.0, uW));
    float cov = yarn * step(vTrim.y, 0.78 + 0.22 * hash12(vec2(id, vTrim.w * 97.0)));
    cov = max(cov, 1.0 - step(0.14, vTrim.y));
    if (cov < 0.5) discard;
    albedo = ${Np(Mp)} * (0.84 + 0.26 * hash12(vec2(id + 3.0, vTrim.w * 31.0)));
    ao = mix(0.5, 1.0, smoothstep(0.0, 0.45, vTrim.y));
  }
  vec3 col = albedo * rugDiffuse(n, vLampIrr, vLampDir, ao, ao) * vOcc;
  col += auroraBounce(vPos, n, 1.2) * albedo * (uBounce * ao);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function Gp(e,t){let n=new Float32Array(10731);for(let r=0;r<49;r++)for(let i=0;i<73;i++){let a=(r*73+i)*3;n[a]=q.cx-e+2*e*i/vp,n[a+1]=0,n[a+2]=q.cz-t+2*t*r/yp}let r=new Uint16Array(20736),i=0;for(let e=0;e<yp;e++)for(let t=0;t<vp;t++){let n=e*73+t;r[i++]=n,r[i++]=n+73,r[i++]=n+1,r[i++]=n+1,r[i++]=n+73,r[i++]=n+73+1}let a=new So;return a.setIndex(new U(r,1)),a.setAttribute(`position`,new U(n,3)),a.boundingBox=new sr(new B(q.cx-e-.05,0,q.cz-t-.05),new B(q.cx+e+.05,q.pile+.01,q.cz+t+.05)),a.boundingSphere=a.boundingBox.getBoundingSphere(new Ir),a}function Kp(){let e=[],t=[],n=[],r=[],i=[],a=q.w/2-gp/2,o=q.d/2-gp/2,s=_p,c=[],l=(e,t,n)=>{for(let r=0;r<=6;r++){let i=n+r/6*(Math.PI/2);c.push([e+Math.cos(i)*s,t+Math.sin(i)*s,Math.cos(i),Math.sin(i)])}},u=(e,t,n,r,i,a)=>{let o=Math.max(2,Math.ceil(Math.hypot(n-e,r-t)/.05));for(let s=1;s<o;s++)c.push([e+(n-e)*s/o,t+(r-t)*s/o,i,a])},d=q.cx,f=q.cz;l(d+a-s,f+o-s,0),u(d+a-s,f+o,d-a+s,f+o,0,1),l(d-a+s,f+o-s,Math.PI/2),u(d-a,f+o-s,d-a,f-o+s,-1,0),l(d-a+s,f-o+s,Math.PI),u(d-a+s,f-o,d+a-s,f-o,0,-1),l(d+a-s,f-o+s,3*Math.PI/2),u(d+a,f-o+s,d+a,f+o-s,1,0),c.push(c[0]);let p=gp/2,m=q.pile*.94,h=0;for(let i=0;i<c.length;i++){let[a,o,s,l]=c[i];i>0&&(h+=Math.hypot(a-c[i-1][0],o-c[i-1][1]));for(let i=0;i<=10;i++){let c=i/10*Math.PI,u=p*Math.cos(c);e.push(a+s*u,8e-4+m*Math.sin(c),o+l*u);let d=Math.cos(c)/p,f=Math.sin(c)/m,g=Math.hypot(d,f);t.push(s*d/g,f/g,l*d/g),n.push(0,h,i/10,0),r.push(0,0)}}for(let e=0;e<c.length-1;e++)for(let t=0;t<10;t++){let n=e*11+t,r=n+11;i.push(n,r,n+1,n+1,r,r+1)}let g=1;for(let a of[-1,1]){let o=q.cx+a*q.w/2,s=Math.floor((q.d-.14)/.03)+1;for(let c=0;c<s;c++){let s=q.cz-q.d/2+.07+c*.03;g=g*16807%2147483647;let l=g/2147483647,u=(l-.5)*.3,d=Math.cos(u)*a,f=Math.sin(u),p=.05+.016*(l*7.31%1),m=(l*13.7%1-.5)*.008,h=e.length/3;for(let i=0;i<=6;i++){let c=i/6,u=Math.sin(c*Math.PI)*m;for(let i of[-1,1]){let m=i*.011*(1-.3*c)/2+u,h=o-a*.004+d*p*c-f*m,g=s+f*p*c+d*m*a;e.push(h,.0016+.006*(1-c)**3,g),t.push(0,1,0),n.push(1,c,i,l),r.push(d,f)}}for(let e=0;e<6;e++){let t=h+e*2;i.push(t,t+2,t+1,t+1,t+2,t+3)}}}let _=new Wr;return _.setAttribute(`position`,new Mr(e,3)),_.setAttribute(`normal`,new Mr(t,3)),_.setAttribute(`aTrim`,new Mr(n,4)),_.setAttribute(`aDir`,new Mr(r,2)),_.setIndex(i),_.computeBoundingSphere(),_.boundingSphere&&(_.boundingSphere.radius+=.05),_}var qp=class{constructor(e){Z(this,`group`,new Rn),Z(this,`ctx`,void 0),Z(this,`pileGeo`,void 0),Z(this,`pileMat`,void 0),Z(this,`qualityShells`,0),Z(this,`part`,new Float32Array(Sp.resX*Sp.resZ)),Z(this,`combX`,new Float32Array(Sp.resX*Sp.resZ)),Z(this,`combZ`,new Float32Array(Sp.resX*Sp.resZ)),Z(this,`partBytes`,new Uint8Array(Sp.resX*Sp.resZ*4)),Z(this,`partTex`,void 0),Z(this,`fieldLive`,!1),Z(this,`air`,new B),Z(this,`lightU`,{uSky:{value:new H},uGround:{value:new H},uLampPos:{value:new B(gu.x,gu.h-.15,gu.z)},uLampCol:{value:new H},uLampDecay:{value:1.25},uDirCol:{value:[new H,new H]},uDirDir:{value:[new B(0,1,0),new B(0,1,0)]},uContact:{value:new an(0,0,.3,0)}}),Z(this,`lampColor`,new H(1,1,1)),Z(this,`lampIntensity`,1),Z(this,`bound`,null),Z(this,`tmpA`,new B),Z(this,`tmpB`,new B),Z(this,`canvasMsaa`,void 0),this.ctx=e,this.group.name=`carpet`;let t=e.quality,n=e.shared;this.setLighting({ambientSky:new H(.2,.3,.58),ambientGround:new H(.06,.042,.03),lampColor:new H(1,.64,.36),lampIntensity:9.5,lampDecay:1.25});let r=this.partBytes;for(let e=0;e<r.length;e+=4)r[e+1]=r[e+2]=128,r[e+3]=255;this.partTex=new gi(this.partBytes,Sp.resX,Sp.resZ,M,v),this.partTex.magFilter=this.partTex.minFilter=h,this.partTex.wrapS=this.partTex.wrapT=u,this.partTex.generateMipmaps=!1,this.partTex.needsUpdate=!0;let i=Rp(Math.min(8,e.renderer.capabilities.getMaxAnisotropy())),a=new an(q.cx-q.w/2,q.cz-q.d/2,1/q.w,1/q.d),o=q.w/2-gp/2,s=q.d/2-gp/2,c={uLightField:n.uLightField,uLightFieldRect:n.uLightFieldRect,uLightFieldGain:n.uLightFieldGain,uAuroraAmbient:n.uAuroraAmbient,uAuroraCeiling:n.uAuroraCeiling},l={...this.lightU,...c,uNozzle:n.uNozzle,uNozzleDir:n.uNozzleDir,uAir:n.uAir,uTime:n.uTime,uSofa:{value:new an(J.cx,J.cz,J.w/2,J.d/2)},uSofaTop:{value:J.seatH+.06}};this.pileMat=new ja({name:`carpet-pile`,uniforms:{...l,uShellCount:{value:t.shells},uPile:{value:q.pile},uSwirl:{value:wu.swirl},uNap:{value:new z(.1,.02)},uPart:{value:this.partTex},uPattern:{value:i},uRugRect:{value:a},uPileRect:{value:new an(q.cx,q.cz,o,s)},uCorner:{value:_p},uTuft:{value:bp},uBounce:{value:1.2},uInner:{value:1.6},uSheen:{value:.35}},defines:{},vertexShader:Vp,fragmentShader:Hp}),this.pileGeo=Gp(o,s);let d=new W(this.pileGeo,this.pileMat);d.name=`carpet-pile`,this.canvasMsaa=e.renderer.getContext().getContextAttributes()?.antialias??!1,d.onBeforeRender=e=>this.syncCoverage(e);let f=new ja({name:`carpet-trim`,uniforms:{...l,uBounce:{value:1.1}},vertexShader:Up,fragmentShader:Wp,side:2}),p=new W(Kp(),f);p.name=`carpet-trim`,this.group.add(d,p),this.qualityShells=t.shellsActive,this.setShells(t.shellsActive),this.bindLights(e.scene)}update(e,t,n){let r=e.dt,i=this.ctx.quality.shellsActive;i!==this.qualityShells&&(this.qualityShells=i,this.setShells(i)),this.syncLights();let a=Sp.resX,o=Sp.resZ,s=this.part,c=this.combX,l=this.combZ,u=!1;if(this.fieldLive){let e=Sp.decay*r,t=Math.exp(-Sp.combDecay*r);for(let n=0;n<s.length;n++)s[n]=Math.max(0,s[n]-e),c[n]*=t,l[n]*=t,(s[n]>0||c[n]*c[n]+l[n]*l[n]>1e-5)&&(u=!0)}let d=Math.max(0,n.strength),f=t.mouth,p=Sp.radius,m=f.y-.02;if(d>.01&&Math.abs(m)<p&&Du(f.x,f.z,-p)){let e=1-X(.25,1.2,t.speed),i=Sp.rate*e*d*r,h=Sp.combRate*d*r,g=X(.04,.35,t.speed)*1.6/Math.max(1e-4,t.speed),_=t.vel.x*g,v=t.vel.z*g,y=q.cx-q.w/2,b=q.cz-q.d/2,x=q.w/a,S=q.d/o,C=Math.max(0,Math.floor((f.x-p-y)/x)),w=Math.min(a-1,Math.ceil((f.x+p-y)/x)),T=Math.max(0,Math.floor((f.z-p-b)/S)),E=Math.min(o-1,Math.ceil((f.z+p-b)/S));for(let e=T;e<=E;e++){let t=b+(e+.5)*S;for(let r=C;r<=w;r++){let o=y+(r+.5)*x,d=o-f.x,g=t-f.z,b=d*d+g*g+m*m;if(b>=p*p)continue;let S=1-X(.05,p,Math.sqrt(b)),C=e*a+r;s[C]=Math.min(1,s[C]+i*S);let w=n.velocityAt(o,.02,t,this.air),T=Math.hypot(w.x,w.z)+1e-4,E=w.x/T+_,D=w.z/T+v,O=Math.hypot(E,D);if(O>.001){let e=Math.min(1,h*S*S);c[C]+=(E/O-c[C])*e,l[C]+=(D/O-l[C])*e}u=!0}}}if(u||this.fieldLive){let e=this.partBytes;for(let t=0,n=0;t<s.length;t++,n+=4)e[n]=Math.round(s[t]*255),e[n+1]=Math.round((c[t]*.5+.5)*255),e[n+2]=Math.round((l[t]*.5+.5)*255);this.partTex.needsUpdate=!0}this.fieldLive=u}partingAt(e,t){let n=Sp.resX,r=Sp.resZ,i=Math.min(n-1,Math.max(0,(e-(q.cx-q.w/2))/q.w*n-.5)),a=Math.min(r-1,Math.max(0,(t-(q.cz-q.d/2))/q.d*r-.5)),o=Math.min(n-2,Math.floor(i)),s=Math.min(r-2,Math.floor(a)),c=i-o,l=a-s,u=this.part,d=s*n+o,f=u[d]+(u[d+1]-u[d])*c;return f+(u[d+n]+(u[d+n+1]-u[d+n])*c-f)*l}contains(e,t,n=0){return Du(e,t,n)}depthToY(e){return .0035+(1-Math.min(1,Math.max(0,e)))*q.pile*.9}setShells(e){let t=Math.max(3,Math.min(24,Math.round(e)));this.pileGeo.instanceCount=t,this.pileMat.uniforms.uShellCount.value=t}setLighting(e){this.bound=null;let t=this.lightU;if(e.ambientSky&&t.uSky.value.copy(e.ambientSky),e.ambientGround&&t.uGround.value.copy(e.ambientGround),e.lampColor&&this.lampColor.copy(e.lampColor),e.lampIntensity!==void 0&&(this.lampIntensity=e.lampIntensity),t.uLampCol.value.copy(this.lampColor).multiplyScalar(this.lampIntensity),e.lampPos&&t.uLampPos.value.copy(e.lampPos),e.lampDecay!==void 0&&(t.uLampDecay.value=e.lampDecay),e.directional)for(let n=0;n<2;n++){let r=e.directional[n];r?(t.uDirCol.value[n].copy(r.color),t.uDirDir.value[n].copy(r.dir).normalize()):t.uDirCol.value[n].setRGB(0,0,0)}}bindLights(e){let t=null,n=null,r=[];e.traverse(e=>{let i=e;i.isLight&&(e.isHemisphereLight?t??(t=e):e.isPointLight||e.isSpotLight?(!n||i.intensity>n.intensity)&&(n=e):e.isDirectionalLight&&r.length<2&&r.push(e))}),(t||n||r.length!==0)&&(this.bound={hemi:t,lamp:n,dirs:r},this.syncLights())}setContactShadow(e,t,n,r){this.lightU.uContact.value.set(e,t,n,r)}syncCoverage(e){let t=e.getRenderTarget(),n=t?t.samples>0:this.canvasMsaa,r=this.pileMat;n!==r.alphaToCoverage&&(r.alphaToCoverage=n,n?r.defines.A2C=``:delete r.defines.A2C,r.needsUpdate=!0)}syncLights(){let e=this.bound;if(!e)return;let t=this.lightU;if(e.hemi){let n=e.hemi.visible?e.hemi.intensity:0;t.uSky.value.copy(e.hemi.color).multiplyScalar(n),t.uGround.value.copy(e.hemi.groundColor).multiplyScalar(n)}e.lamp&&(t.uLampCol.value.copy(e.lamp.color).multiplyScalar(e.lamp.visible?e.lamp.intensity:0),t.uLampDecay.value=e.lamp.decay,e.lamp.getWorldPosition(t.uLampPos.value));for(let n=0;n<2;n++){let r=e.dirs[n];if(!r){t.uDirCol.value[n].setRGB(0,0,0);continue}t.uDirCol.value[n].copy(r.color).multiplyScalar(r.visible?r.intensity:0),r.getWorldPosition(this.tmpA),r.target.getWorldPosition(this.tmpB),t.uDirDir.value[n].subVectors(this.tmpA,this.tmpB).normalize()}}},Jp=.02,Yp=128,Xp=64,Zp=22,Qp=fu.bottom,$p=fu.top-fu.bottom,em=fu.x1-fu.x0,tm=(em-2*Jp)/11,nm=Math.PI*em/tm,rm=K.minZ+.085,im=.012,am=5,om=.9,sm=3.8,cm=2.3,lm=1.1,um=.45,dm=.17,fm=2.1,pm=2,mm=1.7,hm=2.5,gm=new H(7766156),_m=(e,t,n)=>Math.sqrt(e*e+t*t+n*n),vm=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function ym(e,t){return .34*Math.sin(t*2.6+e*6+.7)*(1-t)**.7}function bm(e,t){return Math.PI*(e*em-Jp)/tm+ym(e,t)}function xm(e,t){return(.04+.032*(1-t))*(.86+.14*Math.sin(e*17+.4)+.07*Math.sin(e*37+t*3))}function Sm(e,t){let n=((e+.5)*tm+Jp)/em;return n-ym(n,t)/nm}var Cm=class{constructor(e,t,n){Z(this,`C`,void 0),Z(this,`R`,void 0),Z(this,`n`,void 0),Z(this,`pos`,void 0),Z(this,`vel`,void 0),Z(this,`rest`,void 0),Z(this,`nrm`,void 0),Z(this,`ag`,void 0),Z(this,`prd`,void 0),Z(this,`ca`,void 0),Z(this,`cb`,void 0),Z(this,`cl`,void 0),Z(this,`ks`,void 0),Z(this,`kc`,void 0),Z(this,`iters`,void 0),Z(this,`tether`,void 0),Z(this,`air`,new B),this.C=e,this.R=t,this.n=e*t,this.iters=n;let r=this.n;this.pos=new Float32Array(r*3),this.vel=new Float32Array(r*3),this.prd=new Float32Array(r*3),this.rest=new Float32Array(r*3),this.nrm=new Float32Array(r*3),this.ag=new Float32Array(r);for(let n=0;n<t;n++){let r=1-n/(t-1);for(let t=0;t<e;t++){let i=t/(e-1),a=(n*e+t)*3;this.rest[a]=fu.x0+i*em+(i-.5)*em*.05*(1-r)**1.5,this.rest[a+1]=Qp+r*$p,this.rest[a+2]=fu.z,this.nrm[a+2]=1}}this.pos.set(this.rest),this.tether=new Float32Array(r);for(let t=0;t<r;t++){let n=t*3,r=t%e*3;this.tether[t]=_m(this.rest[n]-this.rest[r],this.rest[n+1]-this.rest[r+1],this.rest[n+2]-this.rest[r+2])}let i=[],a=(t,n)=>n*e+t;for(let n=0;n<t;n++)for(let r=0;r<e;r++)n+1<t&&i.push([a(r,n),a(r,n+1),1,1]),r+1<e&&i.push([a(r,n),a(r+1,n),1,.22]),n+2<t&&i.push([a(r,n),a(r,n+2),.35,.3]),r+2<e&&i.push([a(r,n),a(r+2,n),.3,.16]);let o=i.length;this.ca=new Uint16Array(o),this.cb=new Uint16Array(o),this.cl=new Float32Array(o),this.ks=new Float32Array(o),this.kc=new Float32Array(o);for(let e=0;e<o;e++){let[t,n,r,a]=i[e];this.ca[e]=t,this.cb[e]=n,this.ks[e]=r,this.kc[e]=a;let o=t*3,s=n*3;this.cl[e]=_m(this.rest[s]-this.rest[o],this.rest[s+1]-this.rest[o+1],this.rest[s+2]-this.rest[o+2])}}updateNormals(){let{C:e,R:t,pos:n,nrm:r}=this;for(let i=0;i<t;i++){let a=Math.max(0,i-1),o=Math.min(t-1,i+1);for(let t=0;t<e;t++){let s=Math.max(0,t-1),c=Math.min(e-1,t+1),l=(i*e+s)*3,u=(i*e+c)*3,d=(a*e+t)*3,f=(o*e+t)*3,p=n[u]-n[l],m=n[u+1]-n[l+1],h=n[u+2]-n[l+2],g=n[d]-n[f],_=n[d+1]-n[f+1],v=n[d+2]-n[f+2],y=m*v-h*_,b=h*g-p*v,x=p*_-m*g,S=_m(y,b,x)||1;y/=S,b/=S,x/=S;let C=(i*e+t)*3;r[C]=y,r[C+1]=b,r[C+2]=x}}}step(e,t,n,r){let{C:i,n:a,pos:o,vel:s,prd:c,nrm:l,rest:u}=this,d=this.air,f=n.strength,p=n.mouth,m=.55+.45*Math.sin(t*.23)*Math.sin(t*.61+1);for(let r=0;r<a;r++){let a=r*3;if(r<i){c[a]=u[a],c[a+1]=u[a+1],c[a+2]=u[a+2];continue}let h=o[a],g=o[a+1],_=o[a+2],v=s[a],y=s[a+1],b=s[a+2],x=l[a],S=l[a+1],C=l[a+2],w=0,T=-9.8,E=0,D=p.x-h,O=p.y-g,k=p.z-_,A=0;if(f>0&&D*D+O*O+k*k<1.6900000000000002&&(n.velocityAt(h,g,_,d),A=_m(d.x,d.y,d.z),A>1e-4)){let e=1+1.6*Math.exp(-A/.45),n=d.x*e,i=d.y*e,a=d.z*e,o=n*x+i*S+a*C,s=x*o*am+(n-x*o)*om,c=S*o*am+(i-S*o)*om,l=C*o*am+(a-C*o)*om,u=_m(s,c,l);if(u>sm){let e=sm*(1+Math.log(u/sm)*.3)/u;s*=e,c*=e,l*=e}w+=s,T+=c,E+=l;let f=Math.min(2.2,A)*4.2,p=t*13+r*.37,m=Math.sin(p)*f,h=Math.sin(p*.73+2.1)*f;w+=x*m+h*.4,T+=S*m,E+=C*m}let j=1-(g-Qp)/$p;w+=(u[a]-h)*cm*j,E+=(u[a+2]-_)*cm*j;let ee=v*x+y*S+b*C;w-=x*ee*lm+(v-x*ee)*um,T-=S*ee*lm+(y-S*ee)*um,E-=C*ee*lm+(b-C*ee)*um,E+=.05+m*.1*Math.sin(t*.47+h*2.2+g*.8),w+=.05*Math.sin(t*.31+g*1.1),v+=w*e,y+=T*e,b+=E*e,s[a]=v,s[a+1]=y,s[a+2]=b,c[a]=h+v*e,c[a+1]=g+y*e,c[a+2]=_+b*e}let{ca:h,cb:g,cl:_,ks:v,kc:y}=this,b=h.length;for(let e=0;e<this.iters;e++)for(let e=0;e<b;e++){let t=h[e],n=g[e],r=t<i?0:1,a=n<i?0:1,o=r+a;if(o===0)continue;let s=t*3,l=n*3,u=c[l]-c[s],d=c[l+1]-c[s+1],f=c[l+2]-c[s+2],p=Math.sqrt(u*u+d*d+f*f)+1e-9,m=_[e],b=(p>m?v[e]:y[e])*((p-m)/p)/o;c[s]+=u*b*r,c[s+1]+=d*b*r,c[s+2]+=f*b*r,c[l]-=u*b*a,c[l+1]-=d*b*a,c[l+2]-=f*b*a}let x=1/e,S=this.tether;for(let t=i;t<a;t++){let n=t*3,a=c[n],l=c[n+1],d=c[n+2],f=t%i*3,p=a-u[f],m=l-u[f+1],h=d-u[f+2],g=Math.sqrt(p*p+m*m+h*h);if(g>S[t]){let e=S[t]/g;a=u[f]+p*e,l=u[f+1]+m*e,d=u[f+2]+h*e}if(r){let e=a-r.cx,t=d-r.cz,n=Math.max(-r.half,Math.min(r.half,e*r.sx+t*r.sz)),i=e-r.sx*n,o=l-r.cy,s=t-r.sz*n,c=i*i+o*o+s*s;if(c<r.r*r.r){let e=Math.sqrt(c)+1e-6,t=(r.r-e)/e;a+=i*t,l+=o*t,d+=s*t}}let _=!1;l<im&&(l=im,_=!0),d<rm&&(d=rm);let v=(a-o[n])*x,y=(l-o[n+1])*x,b=(d-o[n+2])*x;if(_){let t=Math.exp(-e*5);v*=t,b*=t,y<0&&(y=0)}s[n]=v,s[n+1]=y,s[n+2]=b,o[n]=a,o[n+1]=l,o[n+2]=d}}accumulateAgitation(e){let t=Math.exp(-e*1.6),{ag:n,vel:r}=this;for(let i=0;i<this.n;i++){let a=i*3;n[i]=n[i]*t+_m(r[a],r[a+1],r[a+2])*e}}},wm=0,Tm=1,Em=2,Dm=3,Om=class{constructor(e,t){Z(this,`group`,new Rn),Z(this,`ribbons`,void 0),Z(this,`cloth`,void 0),Z(this,`RC`,67),Z(this,`RR`,void 0),Z(this,`dynCount`,void 0),Z(this,`geo`,new Wr),Z(this,`aPos`,void 0),Z(this,`aNrm`,void 0),Z(this,`mid`,void 0),Z(this,`fold`,void 0),Z(this,`depth`,void 0),Z(this,`restDu`,void 0),Z(this,`tapI`,void 0),Z(this,`tapW`,void 0),Z(this,`coatData`,new Uint8Array(32768)),Z(this,`coatTex`,void 0),Z(this,`coatDirty`,!0),Z(this,`streaks`,[]),Z(this,`streakCount`,0),Z(this,`cooldown`,0),Z(this,`uniforms`,{uCoat:{value:null},uCoatGain:{value:mm},uFinaleGlow:{value:0},uFinaleColor:{value:new H},uWinTrans:{value:new H(.018,.032,.07)}}),Z(this,`hemPos`,void 0),Z(this,`hemAlpha`,void 0),Z(this,`head`,{cx:0,cy:0,cz:0,sx:1,sz:0,half:0,r:0}),Z(this,`ptsOfLen`,[]),Z(this,`tmpP`,new B),Z(this,`tmpN`,new B),Z(this,`kick`,new B),Z(this,`rngState`,1),Z(this,`pendingDt`,0),Z(this,`finaleLevel`,0),Z(this,`finaleColor`,new H),Z(this,`coatAge`,0),this.ribbons=t,this.group.name=`curtain`;let n=e.quality;this.cloth=new Cm(n.curtainCols,n.curtainRows,3),this.RR=n.curtainRows;let r=this.RC,i=this.RR,a=n.curtainCols;this.tapI=new Int32Array(r*4),this.tapW=new Float32Array(r*4);for(let e=0;e<r;e++){let t=e/(r-1)*(a-1),n=Math.min(a-2,Math.floor(t)),i=t-n,o=i*i,s=o*i,c=[-.5*s+o-.5*i,1.5*s-2.5*o+1,-1.5*s+2*o+.5*i,.5*s-.5*o];for(let t=0;t<4;t++)this.tapI[e*4+t]=Math.min(a-1,Math.max(0,n-1+t)),this.tapW[e*4+t]=c[t]}this.dynCount=r*i;let o=this.dynCount+738;this.mid=new Float32Array(this.dynCount*3),this.fold=new Float32Array(this.dynCount),this.depth=new Float32Array(this.dynCount),this.restDu=new Float32Array(this.dynCount);let s=new Float32Array(o*3),c=new Float32Array(o*3),l=new Float32Array(o*2),d=new Float32Array(o),f=new Float32Array(o);for(let e=0;e<i;e++){let t=1-e/(i-1);for(let n=0;n<r;n++){let i=n/(r-1),a=e*r+n;this.fold[a]=Math.sin(bm(i,t)),this.depth[a]=xm(i,t),l[a*2]=i,l[a*2+1]=t,d[a]=this.fold[a],f[a]=1}}this.buildMid();for(let e=0;e<i;e++)for(let t=0;t<r;t++){let n=(e*r+Math.max(0,t-1))*3,i=(e*r+Math.min(r-1,t+1))*3;this.restDu[e*r+t]=_m(this.mid[i]-this.mid[n],this.mid[i+1]-this.mid[n+1],this.mid[i+2]-this.mid[n+2])}km(this.dynCount,41,18,s,l,d),Am(s,c,this.dynCount,41,18);let p=[],m=(e,t,n)=>{for(let r=0;r<n-1;r++)for(let n=0;n<t-1;n++){let i=e+r*t+n,a=i+1,o=i+t,s=o+1;p.push(i,o,a,a,o,s)}};m(0,r,i),m(this.dynCount,41,18),this.aPos=new U(s,3).setUsage(et),this.aNrm=new U(c,3).setUsage(et),this.geo.setAttribute(`position`,this.aPos),this.geo.setAttribute(`normal`,this.aNrm),this.geo.setAttribute(`aCurtUv`,new U(l,2)),this.geo.setAttribute(`aFold`,new U(d,1)),this.geo.setAttribute(`aCoatMask`,new U(f,1)),this.geo.setIndex(o>65535?new jr(p,1):new Ar(p,1)),this.geo.boundingSphere=new Ir(new B((fu.x0+pu.x1)/2,1.2,fu.z+.3),2.2),this.coatTex=new gi(this.coatData,Yp,Xp,M,v),this.coatTex.minFilter=_,this.coatTex.magFilter=h,this.coatTex.generateMipmaps=!0,this.coatTex.wrapS=this.coatTex.wrapT=u,this.coatTex.needsUpdate=!0,this.uniforms.uCoat.value=this.coatTex;let g=new W(this.geo,this.makeMaterial(e));g.name=`curtain-cloth`,g.castShadow=!0,g.receiveShadow=!0,this.group.add(g);let y=r+41;this.hemPos=new U(new Float32Array(y*3*3),3).setUsage(et),this.hemAlpha=new U(new Float32Array(y*3),1).setUsage(et),this.group.add(this.makeHemShadow(r,41));for(let e=0;e<41;e++){let t=(this.dynCount+697+e)*3;this.hemColumn(r+e,s[t],s[t+1],s[t+2])}this.buildSurface();let b=Array.from({length:24},()=>new B);for(let e=0;e<=24;e++)this.ptsOfLen.push(b.slice(0,e));for(let e=0;e<Zp;e++)this.streaks.push({line:0,off:0,y0:0,y1:0,w:0,hue:0,amount:0,color:new H,state:Dm,timer:0,delay:0,front:0,handle:-1,points:0,excite:0,dens:1,k1:1,k2:1,ph:0});this.rasterCoat()}reseed(e,t,n){for(let e of this.streaks)e.state===Em&&e.handle>=0&&this.ribbons.release(e.handle,64),e.state=Dm,e.handle=-1;this.rngState=e.next()*4294967295>>>0;let[r,i]=Bu[Y.CURTAIN],a=Math.min(Zp,Math.round(e.range(14,18))),o=new Int8Array(11),s=0;for(let n=0;n<a;n++){let a=this.streaks[n],c=0;for(let t=0;t<8;t++){c=e.int(0,11);let t=c%2==1;if(o[c]<(t?2:1)&&(t||e.chance(.55)))break}o[c]++,a.line=c,a.off=o[c]===1?e.range(-.08,.08):e.chance(.5)?.3:-.3,a.y0=e.range(.03,.2);let l=e.chance(.18)?e.range(1.2,1.65):e.range(.45,1.1);a.y1=Math.min(fu.top-.25,a.y0+l),a.w=e.range(.024,.042),a.hue=Math.min(1,Math.max(0,r+(i-r)*e.next()+t)),Lu(a.hue,a.color),a.dens=e.range(.75,1),a.k1=e.range(11,20),a.k2=e.range(28,44),a.ph=e.range(0,6.28),a.amount=(a.y1-a.y0)*a.w,s+=a.amount,a.state=wm,a.timer=0,a.front=0,a.handle=-1,a.excite=0}for(let e=0;e<a;e++)this.streaks[e].amount*=n/Math.max(1e-6,s);this.streakCount=a,this.cooldown=0,this.coatAge=0,this.coatDirty=!0}remaining(){let e=0;for(let t=0;t<this.streakCount;t++){let n=this.streaks[t];(n.state===wm||n.state===Tm)&&(e+=n.amount)}return e+this.ribbons.pendingLight(Y.CURTAIN)}finaleGlow(e,t){this.finaleLevel=Math.max(0,e),this.finaleColor.copy(t),this.uniforms.uFinaleGlow.value=this.finaleLevel,this.uniforms.uFinaleColor.value.copy(t)}forEachGlow(e){for(let t=0;t<this.streakCount;t++){let n=this.streaks[t];if(n.state===Dm)continue;let r=n.state===Em?Math.max(0,1-n.front/(n.y1-n.y0)):1,i=n.amount*r*.6*this.uniforms.uCoatGain.value/mm;if(i<=.001)continue;let a=Sm(n.line,.05)+n.off/11;e(fu.x0+a*em,fu.z+.12,n.color.r*i,n.color.g*i,n.color.b*i)}if(this.finaleLevel>.01){let t=this.finaleLevel*.5;for(let n=0;n<4;n++)e(fu.x0+(n+.5)/4*em,fu.z+.12,this.finaleColor.r*t,this.finaleColor.g*t,this.finaleColor.b*t)}}update(e,t,n){let r=t.mouth,i=t.strength<.02||r.z-fu.z>1.5||r.x<fu.x0-1.3||r.x>fu.x1+1.3;if(this.pendingDt+=e.dt,!i||!(e.frame&1)||this.pendingDt>=1/20){let n=Math.min(this.pendingDt,1/20);this.pendingDt=0;let r=this.cloth;r.updateNormals();let a=this.updateHead(t),o=n>1/45&&!i?2:1;for(let i=0;i<o;i++)r.step(n/o,e.t,t,a);r.accumulateAgitation(n),this.buildSurface()}this.updatePeel(e.dt,n),this.coatDirty&&this.rasterCoat(),this.coatAge<hm&&(this.coatAge+=e.dt,this.uniforms.uCoatGain.value=mm*vm(0,hm,this.coatAge))}updateHead(e){let t=e.mouth;if(t.z>fu.z+.6||t.x<fu.x0-.4||t.x>fu.x1+.4)return null;let n=e.forward,r=this.head,i=n?n.x:0,a=n?n.z:-1;return r.cx=t.x-i*Cu.mouthForward,r.cz=t.z-a*Cu.mouthForward,r.cy=.03,r.sx=-a,r.sz=i,r.half=Cu.width/2-.05,r.r=.1,r}buildMid(){let{RC:e,RR:t,tapI:n,tapW:r,mid:i}=this,a=this.cloth.C,o=this.cloth.pos;for(let s=0;s<t;s++){let t=s*a;for(let a=0;a<e;a++){let c=0,l=0,u=0;for(let e=0;e<4;e++){let i=(t+n[a*4+e])*3,s=r[a*4+e];c+=o[i]*s,l+=o[i+1]*s,u+=o[i+2]*s}let d=(s*e+a)*3;i[d]=c,i[d+1]=l,i[d+2]=u}}}buildSurface(){this.buildMid();let{RC:e,RR:t,mid:n,fold:r,depth:i,restDu:a}=this,o=this.aPos.array,s=this.aNrm.array;for(let s=0;s<t;s++)for(let t=0;t<e;t++){let c=(s*e+Math.max(0,t-1))*3,l=(s*e+Math.min(e-1,t+1))*3,u=n[l]-n[c],d=n[l+1]-n[c+1],f=n[l+2]-n[c+2],p=s*e+t,m=p*3,h=_m(u,d,f)+1e-6,g=Math.min(1.7,Math.max(.65,a[p]/h)),_=i[p]*g**.8*r[p],v=-f,y=u,b=Math.sqrt(v*v+y*y)||1;v/=b,y/=b,o[m]=n[m]+v*_,o[m+1]=n[m+1]-(s===0?.013*Math.abs(r[p]):s===1?.004*Math.abs(r[p]):0),o[m+2]=n[m+2]+y*_}Am(o,s,0,e,t);let c=this.dynCount*3;this.aPos.clearUpdateRanges(),this.aPos.addUpdateRange(0,c),this.aPos.needsUpdate=!0,this.aNrm.clearUpdateRanges(),this.aNrm.addUpdateRange(0,c),this.aNrm.needsUpdate=!0,this.writeHemShadow(o)}makeHemShadow(e,t){let n=[],r=(e,t)=>{for(let r=0;r<t-1;r++)for(let t=0;t<2;t++){let i=(e+r)*3+t,a=(e+r+1)*3+t;n.push(i,i+1,a,a,i+1,a+1)}};r(0,e),r(e,t);let i=new Wr;i.setAttribute(`position`,this.hemPos),i.setAttribute(`aShade`,this.hemAlpha),i.setIndex(n);let a=new W(i,new ja({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:`
          attribute float aShade;
          varying float vA;
          void main() { vA = aShade; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
          varying float vA;
          void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, vA * vA); }`}));return a.name=`curtain-hem-shadow`,a.frustumCulled=!1,a.renderOrder=1,a}hemColumn(e,t,n,r){let i=this.hemPos.array,a=this.hemAlpha.array,o=1-vm(.02,.22,n),s=e*3,c=s*3;i[c]=t,i[c+1]=.002,i[c+2]=Math.max(K.minZ+.005,r-.07),i[c+3]=t,i[c+4]=.002,i[c+5]=r+.01,i[c+6]=t,i[c+7]=.002,i[c+8]=r+.2,a[s]=0,a[s+1]=.62*o,a[s+2]=0}writeHemShadow(e){let t=this.RC,n=(this.RR-1)*t;for(let r=0;r<t;r++){let t=(n+r)*3;this.hemColumn(r,e[t],e[t+1],e[t+2])}this.hemPos.clearUpdateRanges(),this.hemPos.addUpdateRange(0,t*9),this.hemPos.needsUpdate=!0,this.hemAlpha.clearUpdateRanges(),this.hemAlpha.addUpdateRange(0,t*3),this.hemAlpha.needsUpdate=!0}surfacePoint(e,t,n,r){let{RC:i,RR:a}=this,o=this.aPos.array,s=this.aNrm.array,c=Math.min(i-1.001,Math.max(0,e*(i-1))),l=Math.min(a-1.001,Math.max(0,(1-t)*(a-1))),u=Math.floor(c),d=Math.floor(l),f=c-u,p=l-d,m=(d*i+u)*3,h=m+3,g=m+i*3,_=g+3,v=(1-f)*(1-p),y=f*(1-p),b=(1-f)*p,x=f*p;return n.set(o[m]*v+o[h]*y+o[g]*b+o[_]*x,o[m+1]*v+o[h+1]*y+o[g+1]*b+o[_+1]*x,o[m+2]*v+o[h+2]*y+o[g+2]*b+o[_+2]*x),r.set(s[m]*v+s[h]*y+s[g]*b+s[_]*x,s[m+1]*v+s[h+1]*y+s[g+1]*b+s[_+1]*x,s[m+2]*v+s[h+2]*y+s[g+2]*b+s[_+2]*x).normalize(),n}streakU(e,t){return Sm(e.line,t)+e.off/11}streakAgitation(e){let{C:t,R:n,ag:r}=this.cloth,i=(e.y0-Qp)/$p,a=(Math.min(e.y1,e.y0+.6)-Qp)/$p,o=Math.round(this.streakU(e,i)*(t-1)),s=Math.max(1,Math.floor((1-a)*(n-1))),c=Math.min(n-1,Math.ceil((1-i)*(n-1))),l=0;for(let e=s;e<=c;e++)for(let n=Math.max(0,o-1);n<=Math.min(t-1,o+1);n++)l=Math.max(l,r[e*t+n]);return l}rand(){return this.rngState=Math.imul(this.rngState,1664525)+1013904223>>>0,this.rngState/4294967296}updatePeel(e,t){this.cooldown-=e;let n=0;for(let e=0;e<this.streakCount;e++){let t=this.streaks[e].state;(t===Tm||t===Em)&&n++}if(t>.25&&this.cooldown<=0&&n<pm){let e=-1,t=dm;for(let n=0;n<this.streakCount;n++){let r=this.streaks[n];if(r.state!==wm)continue;let i=this.streakAgitation(r);i>t&&(t=i,e=n)}if(e>=0){let t=this.streaks[e];t.state=Tm,t.delay=t.timer=.25+this.rand()*.35,this.cooldown=.7+this.rand()*.5}}for(let t=0;t<this.streakCount;t++){let n=this.streaks[t];if(n.state===Tm)n.timer-=e,n.excite=Math.min(1,1-n.timer/n.delay),this.coatDirty=!0,n.timer<=0&&!this.startPeel(n)&&(n.timer=.1);else if(n.state===Em){let t=n.y1-n.y0;n.front+=e*fm*(.7+.6*Math.min(1,n.front/.3));let r=Math.min(n.points,Math.floor(n.front/t*(n.points-1))+1),i=(Math.min(n.y1,n.y0+n.front)-Qp)/$p;this.surfacePoint(this.streakU(n,i),i,this.tmpP,this.tmpN),this.kick.copy(this.tmpN).multiplyScalar(.65),this.kick.y-=.1,this.ribbons.release(n.handle,r,this.kick);for(let e=r;e<n.points;e++)this.anchorPoint(n,e,this.tmpP),this.ribbons.pin(n.handle,e,this.tmpP.x,this.tmpP.y,this.tmpP.z);n.front>=t&&(this.ribbons.release(n.handle,n.points),n.state=Dm),this.coatDirty=!0}}}anchorPoint(e,t,n){let r=(e.y0+(e.y1-e.y0)*t/Math.max(1,e.points-1)-Qp)/$p;return this.surfacePoint(this.streakU(e,r),r,n,this.tmpN),n.addScaledVector(this.tmpN,.014)}startPeel(e){let t=e.y1-e.y0,n=Math.max(6,Math.min(24,Math.round(t/.055)));e.points=n;let r=this.ptsOfLen[n];for(let t=0;t<n;t++)this.anchorPoint(e,t,r[t]);let i=this.ribbons.spawn(r,e.color,e.hue,e.amount,Y.CURTAIN,{width:Math.max(.085,e.w*2.5),anchored:!0});return i<0?!1:(e.handle=i,e.state=Em,e.front=0,e.excite=0,!0)}rasterCoat(){this.coatDirty=!1;let e=this.coatData;e.fill(0);let t=1/Yp;for(let n=0;n<this.streakCount;n++){let r=this.streaks[n];if(r.state===Dm)continue;let i=r.w/em/2,a=r.state===Em?r.y0+r.front:-1,o=Math.max(0,Math.floor((r.y0-.06-Qp)/$p*Xp)),s=Math.min(63,Math.ceil((r.y1+.06-Qp)/$p*Xp)),c=r.y1-r.y0;for(let n=o;n<=s;n++){let o=(n+.5)/Xp,s=Qp+o*$p,l=vm(r.y0-.03,r.y0+.05,s)*(1-vm(r.y1-c*.4,r.y1+.03,s)),u=r.excite;if(a>=0&&(l*=vm(a-.01,a+.05,s),u=Math.max(u,1-vm(0,.12,Math.abs(s-a-.04)))),l<=.003)continue;let d=this.streakU(r,o)+.004*Math.sin(s*9+r.ph),f=Math.max(0,Math.floor((d-i*2.2)*Yp)),p=Math.min(127,Math.ceil((d+i*2.2)*Yp)),m=.5+.5*Math.sin(s*r.k1+r.ph),h=r.dens*(.3+.7*m*Math.sqrt(m))*(.7+.3*Math.sin(s*r.k2+r.ph*1.7));for(let a=f;a<=p;a++){let o=((a+.5)*t-d)/i,s=Math.exp(-o*o*1.8),c=s*l*h,f=(n*Yp+a)*4;e[f]=Math.max(e[f],Math.min(255,r.color.r*c*255)),e[f+1]=Math.max(e[f+1],Math.min(255,r.color.g*c*255)),e[f+2]=Math.max(e[f+2],Math.min(255,r.color.b*c*255)),e[f+3]=Math.max(e[f+3],Math.min(255,u*s*255))}}}this.coatTex.needsUpdate=!0}makeMaterial(e){let t=new Na({color:gm,roughness:.9,metalness:0,side:2}),n=this.uniforms,r=e.shared;return t.onBeforeCompile=e=>{e.uniforms.uCoat=n.uCoat,e.uniforms.uCoatGain=n.uCoatGain,e.uniforms.uFinaleGlow=n.uFinaleGlow,e.uniforms.uFinaleColor=n.uFinaleColor,e.uniforms.uWinTrans=n.uWinTrans,e.uniforms.uTime=r.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
          attribute vec2 aCurtUv;
          attribute float aFold;
          attribute float aCoatMask;
          uniform float uTime;
          varying vec2 vCurtUv;
          varying float vFold;
          varying float vCoatMask;
          varying vec3 vCurtWorld;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
          vCurtUv = aCurtUv;
          vFold = aFold;
          vCoatMask = aCoatMask;
          {
            // the static panel breathes a little in the draft (no sim)
            float stat = 1.0 - aCoatMask;
            float hang = (1.0 - aCurtUv.y) * (1.0 - aCurtUv.y);
            transformed.z += stat * hang * 0.012 * sin(uTime * 0.55 + aCurtUv.x * 3.0);
            transformed.x += stat * hang * 0.006 * sin(uTime * 0.37 + 1.3);
          }`).replace(`#include <project_vertex>`,`#include <project_vertex>
          vCurtWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
          uniform sampler2D uCoat;
          uniform float uCoatGain;
          uniform float uFinaleGlow;
          uniform vec3 uFinaleColor;
          uniform vec3 uWinTrans;
          uniform float uTime;
          varying vec2 vCurtUv;
          varying float vFold;
          varying float vCoatMask;
          varying vec3 vCurtWorld;
          ${zu}`).replace(`#include <color_fragment>`,`#include <color_fragment>
          {
            // cavity darkening deep in the folds (seen from the room)
            float valley = gl_FrontFacing ? 1.0 - smoothstep(-1.0, -0.2, vFold) : smoothstep(0.2, 1.0, vFold);
            diffuseColor.rgb *= 1.0 - 0.38 * valley;
          }`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
          {
            vec2 cu = vCurtUv;
            vec3 Vv = normalize(vViewPosition);
            float facing = abs(dot(normalize(normal), Vv));
            // --- aurora coating in the folds (front side only)
            float front = gl_FrontFacing ? vCoatMask : 0.0;
            if (front > 0.0) {
              vec4 coat = texture2D(uCoat, cu);
              vec3 halo = texture2D(uCoat, cu, 2.5).rgb;
              // fine vertical threads of light (they fade to their average before aliasing)
              float um = cu.x * ${jm(em)}, vm = cu.y * ${jm($p)};
              float wv = sin(vm * 6.0 + um * 29.0) * 0.6 + sin(vm * 2.1 - um * 13.0) * 0.9;
              float p1 = um * 520.0 + wv * 2.6;
              float p2 = um * 210.0 - wv * 1.5 + 1.7;
              float a1 = clamp(1.6 - fwidth(p1) * 0.7, 0.0, 1.0);
              float a2 = clamp(1.6 - fwidth(p2) * 0.7, 0.0, 1.0);
              float t1 = mix(0.3, pow(0.5 + 0.5 * sin(p1), 5.0), a1);
              float t2 = mix(0.35, pow(0.5 + 0.5 * sin(p2), 3.0), a2);
              float threads = 0.18 + 1.25 * t1 + 0.8 * t2;
              // dusty dashes along the threads, not a solid bar
              float dash = 0.75 + 0.25 * sin(vm * 47.0 + um * 150.0 + wv * 3.0);
              // slow luminous pulses drifting up the folds
              float sh = 0.78 + 0.22 * sin(vm * 5.0 - uTime * 1.3 + um * 9.0) * sin(uTime * 0.7 + um * 21.0);
              // light gathers in the fold valleys and along the ridge lines
              float fw = 0.65 + 0.6 * smoothstep(0.25, 0.95, abs(vFold));
              // about to let go: it quivers and brightens
              float ex = coat.a * (0.75 + 0.25 * sin(uTime * 31.0 + vm * 40.0));
              vec3 c = coat.rgb * threads * dash * sh * fw * (1.0 + 1.8 * ex);
              // rare glints twinkling in the dust
              vec2 gq = vec2(um * 110.0, vm * 40.0);
              vec2 gf = fract(gq) - 0.5;
              float gh = fract(sin(dot(floor(gq), vec2(127.1, 311.7))) * 43758.5453);
              float glint = step(0.9, gh) * pow(max(0.0, sin(uTime * (1.5 + gh * 2.5) + gh * 60.0)), 12.0) * exp(-dot(gf, gf) * 14.0);
              c += (coat.rgb + 0.2 * step(0.03, coat.r + coat.g + coat.b)) * glint * 2.0;
              totalEmissiveRadiance += c * uCoatGain * mix(0.7, 1.0, facing);
              // soft glow of the coating on the surrounding fabric
              totalEmissiveRadiance += halo * diffuseColor.rgb * 1.3;
            }
            // --- dusk sky through the cloth where it covers the window
            vec3 w = vCurtWorld;
            float win = smoothstep(${jm(du.x0-.15)}, ${jm(du.x0+.25)}, w.x) * (1.0 - smoothstep(${jm(du.x1-.25)}, ${jm(du.x1+.15)}, w.x))
                      * smoothstep(${jm(du.y0-.2)}, ${jm(du.y0+.35)}, w.y) * (1.0 - smoothstep(${jm(du.y1-.3)}, ${jm(du.y1+.1)}, w.y));
            // thin where the cloth faces the window square-on, dense on the fold flanks
            totalEmissiveRadiance += uWinTrans * win * pow(facing, 1.5) * (0.8 + 0.2 * vFold);
            // --- finale: colored light climbs the fabric
            if (uFinaleGlow > 0.001) {
              float reach = uFinaleGlow * 1.35;
              float climb = 1.0 - smoothstep(reach - 0.3, reach, cu.y);
              // soft bands of reflected aurora drifting up the folds
              float band = 0.5 + 0.5 * sin(cu.y * 7.0 - uTime * 0.9 + sin(cu.x * 5.0 + uTime * 0.3) * 1.5);
              float wisp = 0.35 + 0.65 * band * band;
              float ridge = 0.6 + 0.4 * vFold * (gl_FrontFacing ? 1.0 : -1.0);
              totalEmissiveRadiance += uFinaleColor * diffuseColor.rgb * (uFinaleGlow * climb * wisp * ridge * 1.05);
            }
          }`)},t.customProgramCacheKey=()=>`curtain-cloth`,mp(t,{strength:1,heightFalloff:1.1})}};function km(e,t,n,r,i,a){let o=pu,s=o.x1-o.x0,c=(s-2*Jp)/8;for(let l=0;l<n;l++){let u=1-l/(n-1),d=o.bottom+u*(o.top-o.bottom),f=(1-u)**1.4;for(let n=0;n<t;n++){let p=n/(t-1),m=e+l*t+n,h=Math.sin(Math.PI*(p*s-Jp)/c+.3*Math.sin(u*3.1+p*5)*(1-u)),g=(.034+.02*(1-u))*(.9+.1*Math.sin(p*23));r[m*3]=o.x0+p*s-(1-p)*.05*f+p*.02*f,r[m*3+1]=d-(l===0?.012*Math.abs(h):0),r[m*3+2]=o.z+h*g,i[m*2]=p,i[m*2+1]=u,a[m]=h}}}function Am(e,t,n,r,i){for(let a=0;a<i;a++){let o=Math.max(0,a-1),s=Math.min(i-1,a+1);for(let i=0;i<r;i++){let c=(n+a*r+Math.max(0,i-1))*3,l=(n+a*r+Math.min(r-1,i+1))*3,u=(n+o*r+i)*3,d=(n+s*r+i)*3,f=e[l]-e[c],p=e[l+1]-e[c+1],m=e[l+2]-e[c+2],h=e[u]-e[d],g=e[u+1]-e[d+1],_=e[u+2]-e[d+2],v=p*_-m*g,y=m*h-f*_,b=f*g-p*h,x=_m(v,y,b)||1,S=(n+a*r+i)*3;t[S]=v/x,t[S+1]=y/x,t[S+2]=b/x}}}function jm(e){return e.toFixed(4)}var Mm=class{constructor(){Z(this,`res`,Ou.res),Z(this,`texture`,void 0),Z(this,`rest`,void 0),Z(this,`dyn`,void 0),Z(this,`workA`,void 0),Z(this,`workB`,void 0),Z(this,`smooth`,void 0),Z(this,`half`,void 0),Z(this,`sx`,Ou.res/Ou.sizeX),Z(this,`sz`,Ou.res/Ou.sizeZ),Z(this,`gain`,1);let e=this.res*this.res;this.rest=new Float32Array(e*3),this.dyn=new Float32Array(e*3),this.workA=new Float32Array(e*3),this.workB=new Float32Array(e*3),this.smooth=new Float32Array(e*3),this.half=new Uint16Array(e*4),this.texture=new gi(this.half,this.res,this.res,M,T),this.texture.minFilter=h,this.texture.magFilter=h,this.texture.wrapS=this.texture.wrapT=u,this.texture.generateMipmaps=!1,this.texture.needsUpdate=!0,Xu.uLightField.value=this.texture}addRest(e,t,n,r,i){this.splat(this.rest,e,t,n,r,i)}addDyn(e,t,n,r,i){this.splat(this.dyn,e,t,n,r,i)}addDynDisc(e,t,n,r,i,a){let o=this.res,s=(e-Ou.minX)*this.sx,c=(t-Ou.minZ)*this.sz,l=Math.max(1,n*this.sx),u=Math.max(0,Math.floor(s-l)),d=Math.min(o-1,Math.ceil(s+l)),f=Math.max(0,Math.floor(c-l)),p=Math.min(o-1,Math.ceil(c+l)),m=0;for(let e=f;e<=p;e++)for(let t=u;t<=d;t++){let n=((t+.5-s)**2+(e+.5-c)**2)/(l*l);n<1&&(m+=1-n)}if(m<=0)return;let h=1/m;for(let e=f;e<=p;e++)for(let t=u;t<=d;t++){let n=((t+.5-s)**2+(e+.5-c)**2)/(l*l);if(n>=1)continue;let u=(1-n)*h,d=(e*o+t)*3;this.dyn[d]+=r*u,this.dyn[d+1]+=i*u,this.dyn[d+2]+=a*u}}clearRest(){this.rest.fill(0)}splat(e,t,n,r,i,a){let o=this.res,s=(t-Ou.minX)*this.sx-.5,c=(n-Ou.minZ)*this.sz-.5,l=Math.floor(s),u=Math.floor(c),d=s-l,f=c-u;for(let t=0;t<2;t++){let n=u+t;if(n<0||n>=o)continue;let s=t?f:1-f;for(let t=0;t<2;t++){let c=l+t;if(c<0||c>=o)continue;let u=s*(t?d:1-d),f=(n*o+c)*3;e[f]+=r*u,e[f+1]+=i*u,e[f+2]+=a*u}}}commit(e){let t=this.res*this.res*3,n=this.workA,r=this.workB;for(let e=0;e<t;e++)n[e]=Math.max(0,this.rest[e])+this.dyn[e];this.dyn.fill(0);for(let e=0;e<2;e++)this.blurAxis(n,r,1,0),this.blurAxis(r,n,0,1);let i=1-Math.exp(-e*14),a=this.smooth,o=this.half,s=this.gain,c=Er.toHalfFloat;for(let e=0,r=0;e<t;e+=3,r+=4)a[e]+=(n[e]*s-a[e])*i,a[e+1]+=(n[e+1]*s-a[e+1])*i,a[e+2]+=(n[e+2]*s-a[e+2])*i,o[r]=c(Math.min(a[e],6e4)),o[r+1]=c(Math.min(a[e+1],6e4)),o[r+2]=c(Math.min(a[e+2],6e4)),o[r+3]=15360;this.texture.needsUpdate=!0}blurAxis(e,t,n,r){let i=this.res;for(let a=0;a<i;a++)for(let o=0;o<i;o++){let s=0,c=0,l=0,u=0;for(let t=-2;t<=2;t++){let d=o+t*n,f=a+t*r;if(d<0||f<0||d>=i||f>=i)continue;let p=t===0?6:t===1||t===-1?4:1,m=(f*i+d)*3;s+=e[m]*p,c+=e[m+1]*p,l+=e[m+2]*p,u+=p}let d=(a*i+o)*3;t[d]=s/u,t[d+1]=c/u,t[d+2]=l/u}}},Nm=new B;function Pm(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Nm.copy(t),Nm[r]=0,Nm.normalize();let l=.5*o/(o+s),u=1-Nm.angleTo(e)/c;return Math.sign(Nm[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Fm=class e extends Vi{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new B,c=new B,l=new B(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new B,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Pm(m,c,`z`,`y`,i,n),f[a+1]=1-Pm(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Pm(m,c,`z`,`y`,i,n),f[a+1]=1-Pm(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Pm(m,c,`x`,`z`,i,e),f[a+1]=Pm(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Pm(m,c,`x`,`z`,i,e),f[a+1]=1-Pm(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Pm(m,c,`x`,`y`,i,e),f[a+1]=1-Pm(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Pm(m,c,`x`,`y`,i,e),f[a+1]=1-Pm(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Im=(e,t=.6,n=0)=>({color:new H(e),rough:t,metal:n}),Lm=[`position`,`normal`,`uv`],Rm=new un,zm=new Bt,Bm=new bn,Vm=new B,Hm=new B(1,1,1),Um=class{constructor(){Z(this,`parts`,[])}add(e,t,n=[0,0,0],r=[0,0,0],i={}){return Bm.set(r[0],r[1],r[2]),zm.setFromEuler(Bm),Rm.compose(Vm.set(n[0],n[1],n[2]),zm,Hm),this.addMatrix(e,t,Rm,i)}addMatrix(e,t,n,r={}){let i=e.index?e.toNonIndexed():e;i!==e&&e.dispose();for(let e of Object.keys(i.attributes))Lm.includes(e)||i.deleteAttribute(e);i.attributes.uv||i.setAttribute(`uv`,new U(new Float32Array(i.attributes.position.count*2),2)),i.applyMatrix4(n);let a=i.attributes.position,o=i.attributes.normal,s=a.count,c=new Float32Array(s*3),l=new Float32Array(s*2);for(let e=0;e<s;e++){let n=1;r.shadeDown!==void 0&&o.getY(e)<-.6&&(n*=r.shadeDown),r.tint&&(n*=r.tint(a.getX(e),a.getY(e),a.getZ(e))),c[e*3]=t.color.r*n,c[e*3+1]=t.color.g*n,c[e*3+2]=t.color.b*n,l[e*2]=t.rough,l[e*2+1]=t.metal}return i.setAttribute(`color`,new U(c,3)),i.setAttribute(`surf`,new U(l,2)),i.clearGroups(),this.parts.push(i),i}addBuilt(e,t){e.applyMatrix4(t),this.parts.push(e)}box(e,t,n,r,i,a,o){return this.add(new Vi(e,t,n),r,i,a,o)}rbox(e,t,n,r,i,a,o,s){return this.add(new Fm(e,t,n,1,r),i,a,o,s)}cyl(e,t,n,r,i,a,o,s){return this.add(new Ui(e,t,n,r),i,a,o,s)}sphere(e,t,n,r=12,i=8){return this.add(new ba(e,r,i),t,n)}lathe(e,t,n,r,i){let a=e.map(([e,t])=>new z(e,t));return this.add(new _a(a,t),n,r,void 0,i)}rod(e,t,n,r,i=6){let a=new B().subVectors(t,e),o=a.length(),s=new Ui(n*.8,n,o,i,1,!0),c=new Bt().setFromUnitVectors(new B(0,1,0),a.normalize()),l=new un().compose(new B().addVectors(e,t).multiplyScalar(.5),c,new B(1,1,1));return this.addMatrix(s,r,l)}build(){let e=Yf(this.parts,!1);if(!e)throw Error(`PartBuilder: merge failed`);for(let e of this.parts)e.dispose();return this.parts=[],e.computeBoundingSphere(),e.computeBoundingBox(),e}};function Wm(e,t,n,r,i,a){let o=[],s=[],c=[],l=e.clone(),u=t.clone().normalize(),d=n.clone().normalize(),f=new B,p=r/7;for(let e=0;e<=7;e++){let t=e/7,n=i*Math.sin(Math.PI*Math.min(.999,.06+t*.94))**.75*(1-.25*t);f.crossVectors(d,u).normalize();let r=.28*n,m=l.clone().addScaledVector(d,-n),h=l.clone().addScaledVector(f,r),g=l.clone().addScaledVector(d,n);if(o.push(m.x,m.y,m.z,h.x,h.y,h.z,g.x,g.y,g.z),s.push(0,t,.5,t,1,t),e<7){let t=e*3,n=t+3;c.push(t,n,t+1,t+1,n,n+1,t+1,n+1,t+2,t+2,n+1,n+2)}l.addScaledVector(u,p),u.y-=a*p*(.4+t),u.normalize()}let m=new Wr;return m.setAttribute(`position`,new Mr(o,3)),m.setAttribute(`uv`,new Mr(s,2)),m.setIndex(c),m.computeVertexNormals(),m}var Gm=`
float rHash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float rHash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float rNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = rHash12(i);
  float b = rHash12(i + vec2(1.0, 0.0));
  float c = rHash12(i + vec2(0.0, 1.0));
  float d = rHash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
`,Km=`
uniform vec4 uRoomBox;
uniform vec3 uLampPos;
uniform vec3 uLampGlow;
uniform vec4 uLampCone;
uniform float uLampDecay;
uniform vec3 uSpotDir;
${Gm}
// occlusion by an infinite plane at distance d; facing = dot(surfaceNormal, planeNormal)
float roomPlaneOcc(float d, float facing, float R) {
  float f = 1.0 - smoothstep(0.0, R, max(d, 0.0));
  return f * f * clamp(0.5 - 0.5 * facing, 0.0, 1.0);
}
float roomPlaneAO(vec3 p, vec3 n) {
  float ao = 1.0;
  ao *= 1.0 - 0.55 * roomPlaneOcc(p.y, n.y, 0.42);
  ao *= 1.0 - 0.40 * roomPlaneOcc(uRoomBox.w - p.y, -n.y, 0.4);
  ao *= 1.0 - 0.50 * roomPlaneOcc(p.x - uRoomBox.x, n.x, 0.45);
  ao *= 1.0 - 0.50 * roomPlaneOcc(uRoomBox.y - p.x, -n.x, 0.45);
  ao *= 1.0 - 0.50 * roomPlaneOcc(p.z - uRoomBox.z, n.z, 0.45);
  return ao;
}
// Warm lamp light outside the SpotLight's cone: bright cone through the open top of the
// shade, softer cone through the bottom, dim transmission through the fabric elsewhere.
vec3 roomLampGlow(vec3 p, vec3 n) {
  vec3 d = uLampPos - p;
  float r2 = max(dot(d, d), 0.04);
  vec3 l = d * inversesqrt(r2);
  float ndl = max(dot(n, l), 0.0);
  float cUp = -l.y;
  float top = smoothstep(uLampCone.x - 0.12, uLampCone.x + 0.1, cUp);
  float bot = smoothstep(uLampCone.y - 0.07, uLampCone.y + 0.07, -cUp);
  float profile = 0.16 + top + 0.55 * bot;
  float inSpot = smoothstep(uLampCone.z, uLampCone.w, dot(-l, uSpotDir));
  return uLampGlow * (profile * (1.0 - inSpot) * ndl * RECIPROCAL_PI) * pow(r2, -0.5 * uLampDecay);
}
`,qm=`
uniform vec4 uOccA[5];
uniform vec4 uOccB[5];
// The sample point is pushed along the normal before measuring the distance to the box, so
// surfaces facing the box are occluded and surfaces facing away are not — continuously, with
// no seam where the nearest box face changes (e.g. on the wall beside a sofa's end).
float roomBoxOcc(vec3 p, vec3 n, vec4 A, vec4 B) {
  vec3 c = vec3(A.x, 0.5 * (B.x + B.y), A.y);
  vec3 h = vec3(A.z, 0.5 * (B.y - B.x), A.w);
  vec3 q = abs(p + n * (0.4 * B.w) - c) - h;
  float f = 1.0 - smoothstep(0.0, B.w, length(max(q, 0.0)));
  float occ = f * f;
  // the space under raised furniture sees almost no sky: darken toward the middle
  vec2 q2 = abs(p.xz - A.xy) - A.zw;
  float sd = length(max(q2, 0.0)) + min(max(q2.x, q2.y), 0.0);
  float under = smoothstep(0.0, B.x * 2.2 + 0.03, -sd) * step(p.y, B.x);
  return B.z * max(occ, under * 1.08);
}
float roomAO(vec3 p, vec3 n) {
  float ao = roomPlaneAO(p, n);
  for (int i = 0; i < 5; i++) ao *= 1.0 - min(roomBoxOcc(p, n, uOccA[i], uOccB[i]), 0.97);
  return ao;
}
`,Jm=`
uniform vec4 uWinRect;
uniform float uWinZ;
uniform vec4 uWinGap;
uniform vec3 uWinRad;
float roomEdgeFF(vec3 a, vec3 b, vec3 n) {
  float c = clamp(dot(a, b), -0.9999, 0.9999);
  return dot(n, cross(a, b)) * acos(c) * inversesqrt(1.0 - c * c);
}
float roomRectFF(vec3 p, vec3 n, float xa, float xb) {
  vec3 a = normalize(vec3(xa, uWinRect.z, uWinZ) - p);
  vec3 b = normalize(vec3(xb, uWinRect.z, uWinZ) - p);
  vec3 c = normalize(vec3(xb, uWinRect.w, uWinZ) - p);
  vec3 d = normalize(vec3(xa, uWinRect.w, uWinZ) - p);
  float s = roomEdgeFF(a, b, n) + roomEdgeFF(b, c, n) + roomEdgeFF(c, d, n) + roomEdgeFF(d, a, n);
  return abs(s) * 0.15915494;
}
// radiance factor: multiply by albedo. Not valid for surfaces facing away from the window
// plane (the back wall), so callers mask those out.
vec3 roomWindowLight(vec3 p, vec3 n) {
  float full = roomRectFF(p, n, uWinRect.x, uWinRect.y);
  float gap = roomRectFF(p, n, uWinGap.x, uWinGap.y);
  return uWinRad * (full * uWinGap.z + gap * (1.0 - uWinGap.z));
}
`,Ym=`
uniform vec3 uWoodDark;
uniform vec3 uWoodLight;
uniform float uGloss;
uniform float uDustSheen;
uniform vec3 uShadePos;
uniform vec3 uShadeCol;
uniform vec3 uSkyLo;
uniform vec3 uSkyHi;
uniform float uLampLevel;
uniform float uWinLevel;
varying vec3 vRoomPos;

struct RoomWood { vec3 col; float rough; vec2 tilt; };

// AA line: d = distance to the line center, w = half width, fw = meters per pixel
float roomLine(float d, float w, float fw) {
  float cov = 1.0 - smoothstep(w, w + fw * 1.2, d);
  return cov * clamp(1.6 * w / fw, 0.35, 1.0);
}

// Planks run along Z (toward the window). p = world xz.
RoomWood floorWood(vec2 p, float fw) {
  const float W = 0.172;
  const float L = 1.34;
  float cx = p.x / W + 64.0;
  float ci = floor(cx);
  float u = cx - ci;
  float cz = p.y / L + rHash11(ci * 7.13 + 1.7) + 64.0;
  float ri = floor(cz);
  float v = cz - ri;
  vec2 id = vec2(ci, ri);
  float h1 = rHash12(id + 0.37);
  float h2 = rHash12(id * 1.91 + 5.3);
  float h3 = rHash12(id * 0.73 + 11.1);
  vec2 lp = vec2((u - 0.5) * W, v * L);
  vec2 g = lp + vec2(h1 * 3.1, h2 * 7.7);

  // fine detail fades out once it gets close to pixel size (no shimmer on phones)
  float fineK = 1.0 - smoothstep(0.0012, 0.0045, fw);
  float n1 = rNoise(vec2(g.x * 26.0, g.y * 1.2));
  float n2 = rNoise(vec2(g.x * 110.0 + n1 * 3.0, g.y * 3.5));
  // flat-sawn "cathedral" figure: growth rings around a pith below the board
  float pith = (h3 - 0.5) * 0.12;
  float depth = 0.018 + 0.05 * h2 + 0.045 * fract(lp.y * 0.55 + h1);
  float ring = length(vec2(lp.x - pith, depth)) / 0.0075 + n1 * 1.4;
  float late = smoothstep(0.55, 0.97, fract(ring)) * fineK;

  float tone = mix(0.32, 0.72, h1) + (n1 - 0.5) * 0.28;
  vec3 col = mix(uWoodDark, uWoodLight, clamp(tone, 0.0, 1.0));
  col *= 1.0 + (h2 - 0.5) * vec3(0.08, 0.02, -0.06);
  col *= 1.0 - 0.2 * late;
  col *= 1.0 + (n2 - 0.5) * 0.14 * fineK;

  // seams: long edges + staggered end joints, and a touch of edge wear
  float dEdge = (0.5 - abs(u - 0.5)) * W;
  float dEnd = (0.5 - abs(v - 0.5)) * L;
  float seam = max(roomLine(dEdge, 0.0009, fw), 0.85 * roomLine(dEnd, 0.0008, fw));
  col *= 1.0 - 0.72 * seam;
  col *= 1.0 - 0.1 * (1.0 - smoothstep(0.0, 0.008 + fw, dEdge));

  float wear = rNoise(p * 1.6 + 3.0);
  RoomWood o;
  o.col = col;
  o.rough = clamp(0.3 + (h2 - 0.5) * 0.1 + (wear - 0.5) * 0.14 + late * 0.05 + seam * 0.45, 0.14, 0.9);
  // boards are slightly cupped and not perfectly coplanar: breaks up reflections per plank
  float cup = (u - 0.5) * 0.016;
  o.tilt = vec2(-cup + (h2 - 0.5) * 0.006, (h3 - 0.5) * 0.005 + 0.003 * sin(lp.y * 3.1 + h1 * 6.283));
  return o;
}

// Glossy reflection of the window: reflected ray vs. the window rectangle, blurred by
// roughness and travel distance, with the mullion bars and the curtains.
vec3 roomWindowReflect(vec3 p, vec3 R, float rough) {
  if (R.z > -0.02) return vec3(0.0);
  float t = (uWinZ - p.z) / R.z;
  vec3 h = p + R * t;
  float blur = 0.012 + t * (0.015 + rough * rough * 0.9);
  float mx = smoothstep(uWinRect.x - blur, uWinRect.x + blur, h.x) * (1.0 - smoothstep(uWinRect.y - blur, uWinRect.y + blur, h.x));
  float my = smoothstep(uWinRect.z - blur, uWinRect.z + blur, h.y) * (1.0 - smoothstep(uWinRect.w - blur, uWinRect.w + blur, h.y));
  float xm = 0.5 * (uWinRect.x + uWinRect.y);
  float ym = mix(uWinRect.z, uWinRect.w, 0.68);
  float bars = (1.0 - (1.0 - smoothstep(0.035, 0.035 + blur, abs(h.x - xm))) * min(1.0, 0.07 / blur))
             * (1.0 - (1.0 - smoothstep(0.025, 0.025 + blur, abs(h.y - ym))) * min(1.0, 0.05 / blur));
  float inGap = smoothstep(uWinGap.x - blur, uWinGap.x + blur, h.x) * (1.0 - smoothstep(uWinGap.y - blur, uWinGap.y + blur, h.x));
  float trans = mix(uWinGap.z, 1.0, inGap);
  vec3 sky = mix(uSkyLo, uSkyHi, smoothstep(0.15, 0.85, R.y));
  return sky * (mx * my * bars * trans * uWinLevel);
}

// Glossy reflection of the glowing lamp shade (soft ellipsoid).
vec3 roomShadeReflect(vec3 p, vec3 R, float rough) {
  vec3 d = uShadePos - p;
  float t = dot(d, R);
  if (t < 0.0) return vec3(0.0);
  vec3 q = d - R * t;
  q.y *= 0.72;
  float blur = 0.02 + t * (0.015 + rough * rough * 0.9);
  float m = 1.0 - smoothstep(0.17 - blur, 0.17 + blur, length(q));
  return uShadeCol * (m * uLampLevel);
}
`,Xm=(()=>{let e=Yo.lights_fragment_begin,t=e.replace(/(getDirectionalLightInfo\( directionalLight, directLight \);[\s\S]*?)RE_Direct\( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight \);/,`$1reflectedLight.directDiffuse += saturate( dot( geometryNormal, directLight.direction ) ) * directLight.color * BRDF_Lambert( material.diffuseColor );`);if(t===e)throw Error(`room: lights_fragment_begin layout changed`);return t})();function Zm(e){return{uRoomBox:e.uRoomBox,uLampPos:e.uLampPos,uLampGlow:e.uLampGlow,uLampCone:e.uLampCone,uLampDecay:e.uLampDecay,uSpotDir:e.uSpotDir}}function Qm(e){return{uOccA:e.uOccA,uOccB:e.uOccB}}function $m(e){return{uWinRect:e.uWinRect,uWinZ:e.uWinZ,uWinGap:e.uWinGap,uWinRad:e.uWinRad}}var eh=`varying vec3 vRoomPos;
varying vec3 vRoomNormal;`,th=`
  vRoomPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
  vRoomNormal = normalize(mat3(modelMatrix) * objectNormal);`;function nh(e,t){let n=new Na({color:16777215,roughness:.35,metalness:0}),r={uWoodDark:{value:t.woodDark},uWoodLight:{value:t.woodLight},uGloss:{value:t.gloss},uDustSheen:{value:t.dustSheen},uShadePos:e.uShadePos,uShadeCol:e.uShadeCol,uSkyLo:e.uSkyLo,uSkyHi:e.uSkyHi,uLampLevel:e.uLampLevel,uWinLevel:e.uWinLevel};return n.onBeforeCompile=t=>{Object.assign(t.uniforms,Zm(e),Qm(e),$m(e),r),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vRoomPos;`).replace(`#include <project_vertex>`,`#include <project_vertex>
  vRoomPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>\n${Km}\n${qm}\n${Jm}\n${Ym}`).replace(`#include <map_fragment>`,`#include <map_fragment>
  float roomFw = max(length(fwidth(vRoomPos.xz)), 1e-5);
  RoomWood wd = floorWood(vRoomPos.xz, roomFw);
  diffuseColor.rgb *= wd.col;`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
  roughnessFactor = wd.rough;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
  vec3 roomN = normalize(vec3(wd.tilt.x, 1.0, wd.tilt.y));
  normal = normalize((viewMatrix * vec4(roomN, 0.0)).xyz);`).replace(`#include <lights_fragment_begin>`,`${Xm}
  float roomAo = roomAO(vRoomPos, vec3(0.0, 1.0, 0.0));
  reflectedLight.directDiffuse *= roomAo;
  reflectedLight.directSpecular *= roomAo * 0.7;
  irradiance *= roomAo;
  reflectedLight.directDiffuse += roomWindowLight(vRoomPos, vec3(0.0, 1.0, 0.0)) * material.diffuseColor * roomAo;`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
  {
    vec3 V = normalize(vRoomPos - cameraPosition);
    vec3 R = reflect(V, roomN);
    float NoV = clamp(dot(roomN, -V), 0.0, 1.0);
    float Fr = 0.04 + 0.96 * pow(1.0 - NoV, 5.0);
    vec3 glossy = roomWindowReflect(vRoomPos, R, roughnessFactor) + roomShadeReflect(vRoomPos, R, roughnessFactor);
    vec2 lfuv = (vRoomPos.xz + V.xz * 0.12 - uLightFieldRect.xy) * uLightFieldRect.zw;
    glossy += texture2D(uLightField, clamp(lfuv, 0.001, 0.999)).rgb * (uLightFieldGain * uDustSheen);
    reflectedLight.indirectSpecular += glossy * (Fr * uGloss * roomAo);
  }`)},n.customProgramCacheKey=()=>`room-floor`,mp(n,{strength:1.3,heightFalloff:1.2})}function rh(e){let t=new Na({color:16777215,roughness:.9,metalness:0,vertexColors:!0});return t.onBeforeCompile=t=>{Object.assign(t.uniforms,Zm(e),Qm(e),$m(e)),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>\n${eh}`).replace(`#include <project_vertex>`,`#include <project_vertex>${th}`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>\n${eh}\n${Km}\n${qm}\n${Jm}`).replace(`#include <color_fragment>`,`#include <color_fragment>
  vec3 roomWN = normalize(vRoomNormal);
  vec2 roomUV = abs(roomWN.y) > 0.5 ? vRoomPos.xz : vec2(vRoomPos.x + vRoomPos.z, vRoomPos.y);
  float roomFw = max(length(fwidth(roomUV)), 1e-5);
  float roomFine = 1.0 - smoothstep(0.002, 0.006, roomFw);
  diffuseColor.rgb *= 1.0 + (rNoise(roomUV * 2.3) - 0.5) * 0.07 + (rNoise(roomUV * vec2(31.0, 17.0)) - 0.5) * 0.05 * roomFine;`).replace(`#include <lights_fragment_begin>`,`#include <lights_fragment_begin>
  float roomAo = roomAO(vRoomPos, roomWN);
  reflectedLight.directDiffuse *= mix(1.0, roomAo, 0.7);
  irradiance *= roomAo;
  float roomWinMask = 1.0 - smoothstep(0.3, 0.7, roomWN.z);
  reflectedLight.directDiffuse += roomLampGlow(vRoomPos, roomWN) * material.diffuseColor * mix(1.0, roomAo, 0.35);
  reflectedLight.directDiffuse += roomWindowLight(vRoomPos, roomWN) * material.diffuseColor * (roomWinMask * roomAo);`)},t.customProgramCacheKey=()=>`room-walls`,mp(t,{strength:1.15,heightFalloff:.9})}function ih(e,t=0){let n=new Na({color:16777215,roughness:.6,metalness:0,vertexColors:!0,side:t});return n.onBeforeCompile=t=>{Object.assign(t.uniforms,Zm(e)),t.vertexShader=t.vertexShader.replace(`#include <common>`,`#include <common>\n${eh}\nattribute vec2 surf;\nvarying vec2 vSurf;`).replace(`#include <project_vertex>`,`#include <project_vertex>${th}\n  vSurf = surf;`),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>\n${eh}\nvarying vec2 vSurf;\n${Km}`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
  roughnessFactor = vSurf.x;`).replace(`#include <metalnessmap_fragment>`,`#include <metalnessmap_fragment>
  metalnessFactor = vSurf.y;`).replace(`#include <lights_fragment_begin>`,`#include <lights_fragment_begin>
  vec3 roomWN = normalize(vRoomNormal) * (gl_FrontFacing ? 1.0 : -1.0);
  float roomAo = roomPlaneAO(vRoomPos, roomWN);
  reflectedLight.directDiffuse *= mix(1.0, roomAo, 0.6);
  irradiance *= roomAo;
  reflectedLight.directDiffuse += roomLampGlow(vRoomPos, roomWN) * material.diffuseColor;`)},n.customProgramCacheKey=()=>`room-props`,mp(n,{strength:1.1,heightFalloff:1.5})}function ah(e,t,n){return new ja({side:2,uniforms:{uShadeCol:e.uShadeCol,uLampLevel:e.uLampLevel,uShadeY:{value:new z(t,n)}},vertexShader:`
      attribute float glow;
      varying float vGlow;
      varying vec3 vW;
      varying vec3 vN;
      void main() {
        vGlow = glow;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vW = wp.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,fragmentShader:`
      uniform vec3 uShadeCol;
      uniform float uLampLevel;
      uniform vec2 uShadeY;
      varying float vGlow;
      varying vec3 vW;
      varying vec3 vN;
      void main() {
        float t = clamp((vW.y - uShadeY.x) / (uShadeY.y - uShadeY.x), 0.0, 1.0);
        vec3 col;
        if (vGlow > 0.5) {
          col = vec3(1.0, 0.82, 0.6) * 9.0;
        } else if (gl_FrontFacing) {
          // outside: translucent fabric, brightest toward the open bottom, a bright hem
          vec3 V = normalize(cameraPosition - vW);
          float ndv = abs(dot(normalize(vN), V));
          float g = mix(0.95, 0.5, smoothstep(0.0, 1.0, t));
          g += 0.5 * (1.0 - smoothstep(0.0, 0.07, t));
          g *= mix(0.72, 1.0, ndv);
          col = uShadeCol * g;
        } else {
          // inside: lit directly by the bulb (seen through the top opening)
          col = uShadeCol * vec3(1.0, 1.08, 1.16) * mix(3.2, 2.0, t);
        }
        gl_FragColor = vec4(col * uLampLevel, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function oh(e){return new ja({uniforms:{uTime:Xu.uTime,uWinLevel:e.uWinLevel,uSkyLo:e.uSkyLo,uSkyHi:e.uSkyHi,uWinZ:e.uWinZ},vertexShader:`
      varying vec3 vW;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vW = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,fragmentShader:`
      uniform float uTime;
      uniform float uWinLevel;
      uniform vec3 uSkyLo;
      uniform vec3 uSkyHi;
      uniform float uWinZ;
      varying vec3 vW;
      ${Gm}
      const float STREET_Y = -9.0;   // street level relative to our floor (we are on the 3rd floor)
      const float FACADE_D = 30.0;   // distance to the low buildings across the street
      const float FAR_D = 260.0;

      vec3 skyColor(vec3 dir) {
        float el = dir.y;
        vec3 c = mix(uSkyLo, uSkyHi, smoothstep(-0.01, 0.3, el));
        // a faint warm band right at the horizon (city glow)
        c += vec3(0.07, 0.045, 0.03) * exp(-abs(el - 0.01) * 22.0);
        // blue hour: only a few of the brightest stars are out, high up
        vec2 sp = dir.xy / max(-dir.z, 0.2) * 70.0;
        vec2 cell = floor(sp);
        float h = rHash12(cell);
        vec2 off = vec2(rHash12(cell + 7.1), rHash12(cell + 3.3)) - 0.5;
        float star = step(0.993, h) * (1.0 - smoothstep(0.03, 0.12, length(fract(sp) - 0.5 - off * 0.6)));
        c += vec3(0.6, 0.7, 1.0) * star * smoothstep(0.22, 0.45, el) * (0.7 + 0.3 * sin(uTime * 1.3 + h * 40.0));
        return c;
      }

      // grid of windows on a facade; returns rgb emission (lit windows) and a 0..1 glass mask
      vec4 facadeWindows(vec2 fp, float seed, float fw) {
        vec2 cellSz = vec2(2.2, 3.0);
        vec2 c = fp / cellSz;
        vec2 ci = floor(c);
        vec2 f = fract(c);
        vec2 ww = vec2(0.17, 0.17);
        vec2 q = f - vec2(0.5, 0.55);
        vec2 d = abs(q) - ww;
        float soft = fw * 1.5 / cellSz.x + 0.01;
        float m = (1.0 - smoothstep(-soft, soft, d.x)) * (1.0 - smoothstep(-soft, soft, d.y));
        float bar = smoothstep(0.012, 0.012 + soft, abs(q.x)) * smoothstep(0.012, 0.012 + soft, abs(q.y - 0.05));
        float h = rHash12(ci + seed);
        float lit = step(0.74, h);
        vec3 warm = mix(vec3(1.0, 0.42, 0.14), vec3(1.0, 0.62, 0.3), rHash12(ci + seed + 9.0));
        if (rHash12(ci + seed + 4.0) > 0.9) warm = vec3(0.35, 0.5, 1.0);
        float bright = mix(0.12, 0.42, rHash12(ci + seed + 2.0)) * (1.0 - 0.45 * length(q / ww) * 0.7);
        return vec4(warm * (bright * lit * m * mix(0.55, 1.0, bar)), m);
      }

      void main() {
        vec3 dir = normalize(vW - cameraPosition);
        vec3 o = vW;
        vec3 col = skyColor(dir);

        // ray hits (and their pixel footprints, taken outside any branch)
        float tF = (uWinZ - FAR_D - o.z) / dir.z;
        vec3 hF = o + dir * tF;
        vec2 cf = hF.xy / vec2(3.0, 4.0);
        float fwF = length(fwidth(cf));
        float tN = (uWinZ - FACADE_D - o.z) / dir.z;
        vec3 hN = o + dir * tN;
        float fw = length(fwidth(hN.xy));
        float tS = (STREET_Y - o.y) / min(dir.y, -1e-3);
        vec3 hS = o + dir * tS;
        float fwS = length(fwidth(hS.xz));

        // far skyline: low silhouette with a few tiny lights (at least ~1 px, energy kept)
        float bxF = floor(hF.x / 18.0);
        float topF = STREET_Y + 12.0 + 30.0 * rHash11(bxF * 3.1) * rHash11(bxF * 1.7 + 4.0);
        if (hF.y < topF) {
          col = mix(uSkyLo * 0.28, uSkyLo * 0.4, smoothstep(topF - 30.0, topF, hF.y));
          float r = max(0.12, fwF * 0.8);
          float lit = step(0.9, rHash12(floor(cf) + 1.3));
          float dotm = 1.0 - smoothstep(r * 0.4, r, length(fract(cf) - 0.5));
          col += vec3(1.0, 0.66, 0.36) * (lit * dotm * 0.9 * min(1.0, 0.0144 / (r * r)));
        }

        // near buildings across the street
        float bx = floor((hN.x + 3.0) / 11.0);
        float bh = rHash11(bx * 5.7 + 2.0);
        float topN = STREET_Y + 6.0 + 7.5 * bh;
        bool streetFirst = dir.y < 0.0 && (STREET_Y - o.y) / dir.y < tN;
        if (!streetFirst && hN.y < topN) {
          vec3 wallC = mix(vec3(0.016, 0.02, 0.034), vec3(0.03, 0.026, 0.028), rHash11(bx * 2.3));
          wallC *= 0.75 + 0.5 * smoothstep(topN - 12.0, topN, hN.y);   // tops catch the sky
          vec4 wnd = facadeWindows(vec2(hN.x - bx * 11.0 - 3.0, hN.y - STREET_Y), bx * 13.0, fw);
          vec3 glass = mix(wallC * 0.6, uSkyLo * 0.3, 0.5);
          col = mix(wallC, glass, wnd.a) + wnd.rgb;
          // a dark gap between buildings
          float gx = fract((hN.x + 3.0) / 11.0);
          col *= smoothstep(0.0, 0.02, gx) * (1.0 - smoothstep(0.98, 1.0, gx)) * 0.8 + 0.2;
          // rooftop edge highlight
          col += uSkyHi * 0.35 * (1.0 - smoothstep(0.0, 0.25 + fw, topN - hN.y));
        } else if (streetFirst) {
          // street seen from above: far sidewalk | road | near sidewalk (s = meters from their facade)
          float s = hS.z - (uWinZ - FACADE_D);
          float road = smoothstep(3.0 - fwS, 3.0 + fwS, s) * (1.0 - smoothstep(13.0 - fwS, 13.0 + fwS, s));
          col = mix(vec3(0.024, 0.024, 0.03), vec3(0.011, 0.013, 0.021), road);
          // curb edges catch a little sky
          col += uSkyLo * 0.12 * (1.0 - smoothstep(0.0, 0.08 + fwS, min(abs(s - 3.0), abs(s - 13.0))));
          // street lamps on both curbs (staggered): soft warm pools
          vec2 pa = vec2((fract(hS.x / 16.0) - 0.5) * 16.0, s - 3.4);
          vec2 pb = vec2((fract(hS.x / 16.0 + 0.5) - 0.5) * 16.0, s - 12.6);
          float pool = exp(-dot(pa, pa) * 0.11) + exp(-dot(pb, pb) * 0.11);
          col += vec3(0.5, 0.3, 0.13) * (pool * 0.45);
          // dashed centre line, faded out before it can alias
          float dash = step(0.55, fract(hS.x * 0.2)) * (1.0 - smoothstep(0.06, 0.06 + fwS * 1.5, abs(s - 8.0)));
          col += vec3(0.05) * dash * road * (1.0 - smoothstep(0.1, 0.3, fwS));
        }

        // glass: slight absorption + faint warm fresnel reflection of the room
        float ndv = abs(dir.z);
        float fres = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);
        col = col * 0.9 + vec3(0.05, 0.032, 0.02) * fres;
        gl_FragColor = vec4(col * uWinLevel, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function sh(e,t){return new ja({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uTime:Xu.uTime,uWinLevel:e.uWinLevel,uWinGap:e.uWinGap,uStrength:{value:t},uCol:{value:new H(.32,.5,.95)}},vertexShader:`
      varying vec2 vUv;
      varying float vX;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vX = wp.x;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,fragmentShader:`
      uniform float uTime;
      uniform float uWinLevel;
      uniform vec4 uWinGap;
      uniform float uStrength;
      uniform vec3 uCol;
      varying vec2 vUv;
      varying float vX;
      ${Gm}
      void main() {
        // soft beam edges; densest a little way into the room, gone at the glass and the floor
        float a = smoothstep(0.0, 0.22, vUv.x) * (1.0 - smoothstep(0.78, 1.0, vUv.x));
        a *= smoothstep(0.0, 0.3, vUv.y) * (1.0 - smoothstep(0.45, 1.0, vUv.y));
        float n = rNoise(vec2(vUv.x * 6.0 + uTime * 0.05, vUv.y * 3.0 - uTime * 0.04));
        a *= 0.65 + 0.7 * n;
        float inGap = smoothstep(uWinGap.x - 0.15, uWinGap.x + 0.1, vX) * (1.0 - smoothstep(uWinGap.y - 0.1, uWinGap.y + 0.15, vX));
        a *= mix(uWinGap.z, 1.0, inGap);
        gl_FragColor = vec4(uCol * (a * uStrength * uWinLevel), 1.0);
      }`})}var ch=K.height,lh=K.maxZ+2.4,uh=.16,dh=K.minZ-.095,fh=(du.x0+du.x1)/2,ph=ju(du.y0,du.y1,.68),mh={bottom:gu.h-.34,top:gu.h,rBottom:gu.shadeR*.9,rTop:gu.shadeR*.69},hh=mh.bottom+.19,gh={y:fu.top+.05,z:fu.z,x0:fu.x0-.12,x1:pu.x1+.02,r:.013},_h={hemiSky:new H(.2,.3,.58),hemiGround:new H(.06,.042,.03),hemiI:1,lampColor:new H(1,.64,.36),lampI:9.5,lampDecay:1.25,lampAngle:1.22,lampPenumbra:.7,lampAim:new B(-1.2,0,-1.4),glowI:7,shadeCol:new H(1,.56,.26).multiplyScalar(1.25),winColor:new H(.5,.68,1),winI:.3,fillColor:new H(1,.85,.7),fillI:.4,winRad:new H(.6,1.1,2.3),skyLo:new H(.06,.15,.25),skyHi:new H(.01,.026,.1),winDir:new B(-.2,-.62,1).normalize(),hazeStrength:.3,curtainTrans:.4,woodDark:new H(3811613),woodLight:new H(7295033)},Q={wall:Im(9077109,.92),ceiling:Im(11117723,.95),trim:Im(14209476,.42),lampMetal:Im(4864556,.34,.55),rod:Im(5916208,.32,.6),brass:Im(11569744,.3,.75),oak:Im(10781278,.5),oakDoor:Im(11242086,.46),oakDark:Im(3943456,.8),cabinet:Im(7110522,.55),cabinetIn:Im(4147783,.7),legs:Im(3811871,.5),frameDark:Im(3024160,.45),frameOak:Im(10519136,.5),mat:Im(14538439,.8),vase:Im(8228985,.32),pot:Im(13353134,.6),soil:Im(2759957,1),stem:Im(5004342,.6),basket:Im(6123390,.85)},vh=[8211258,11110735,6123352,4150630,13221284,3092277,9138045,7240838,11564624,5070154,10115920,12890236].map(e=>Im(e,.7)),yh=class{constructor(e){Z(this,`group`,new Rn),Z(this,`lights`,void 0),Z(this,`blockers`,[{cx:_u.x,cz:_u.z,hw:_u.r+.04,hd:_u.r+.04}]),Z(this,`curtainRings`,void 0),Z(this,`ctx`,void 0),Z(this,`u`,void 0),Z(this,`target`,{finale:0,color:new H,intensity:0}),Z(this,`cur`,{finale:0,color:new H,intensity:0}),Z(this,`tmp`,new H),this.ctx=e,this.group.name=`room`,this.lights=this.makeLights(),this.u=this.makeUniforms(),this.curtainRings={y:gh.y,z:gh.z,interactive:bh(fu.x0+.02,fu.x1-.02,12),static:bh(pu.x0+.02,pu.x1-.02,9)};let t=new Um,n=new Um;this.buildShell(),this.buildTrim(t),this.buildWindow(t),this.buildRod(t),this.buildSideboard(t),this.buildCabinet(t),this.buildPictures(t),this.buildPlant(t,n),this.buildLamp(),this.buildHaze();let r=new W(t.build(),ih(this.u));r.name=`room-props`,r.castShadow=!0,r.receiveShadow=!0,this.group.add(r);let i=new W(n.build(),ih(this.u,2));i.name=`room-plant`,i.castShadow=!0,i.receiveShadow=!0,this.group.add(i),this.applyIllumination()}update(e){let t=1-Math.exp(-1.8*e.dt);this.cur.finale=Mu(this.cur.finale,this.target.finale,1.8,e.dt),this.cur.intensity=Mu(this.cur.intensity,this.target.intensity,1.8,e.dt),this.cur.color.lerp(this.target.color,t),this.applyIllumination()}setIllumination(e){this.target.finale=zt.clamp(e.finale,0,1),this.target.intensity=zt.clamp(e.auroraIntensity,0,1),this.target.color.copy(e.auroraColor)}markShadowsDirty(){this.lights.lamp.shadow.needsUpdate=!0,this.ctx.renderer.shadowMap.needsUpdate=!0}applyIllumination(){let e=this.cur.finale,t=ju(1,.4,e),n=ju(1,.4,e),{hemi:r,lamp:i,window:a,fill:o}=this.lights;i.intensity=_h.lampI*t,a.intensity=_h.winI*n,o.intensity=_h.fillI*ju(1,.6,e);let s=this.tmp.copy(this.cur.color).multiplyScalar(this.cur.intensity);r.color.copy(_h.hemiSky).lerp(s.multiplyScalar(.55),e),s.copy(this.cur.color).multiplyScalar(this.cur.intensity*.22),r.groundColor.copy(_h.hemiGround).lerp(s,e);let c=this.u;c.uLampLevel.value=t,c.uLampGlow.value.copy(_h.lampColor).multiplyScalar(_h.glowI*t),c.uWinLevel.value=n,c.uWinRad.value.copy(_h.winRad).multiplyScalar(n)}makeLights(){let e=this.ctx.quality,t=new ro(_h.hemiSky,_h.hemiGround,_h.hemiI),n=new vo(_h.lampColor,_h.lampI,12,_h.lampAngle,_h.lampPenumbra,_h.lampDecay);n.name=`lampKey`,n.position.set(gu.x,hh,gu.z),n.target.position.copy(_h.lampAim),n.castShadow=e.shadows,n.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),n.shadow.focus=.75,n.shadow.camera.near=.15,n.shadow.camera.far=9,n.shadow.bias=-6e-4,n.shadow.normalBias=.025,n.shadow.radius=3;let r=new xo(_h.winColor,_h.winI);r.name=`windowLight`,r.target.position.set(.8,0,-.6),r.position.copy(r.target.position).addScaledVector(_h.winDir,-6);let i=new xo(_h.fillColor,_h.fillI);return i.name=`fillLight`,i.position.set(2.2,3.8,5.5),i.target.position.set(0,0,0),this.group.add(t,n,n.target,r,r.target,i,i.target),{hemi:t,lamp:n,window:r,fill:i}}makeUniforms(){let e=this.lights.lamp,t=new B().subVectors(_h.lampAim,e.position).normalize(),n=[[J.cx,J.cz,J.w/2,J.d/2,J.legH,J.backH,.85,.42],[mu.cx,mu.cz,mu.w/2,mu.d/2,mu.legH,mu.h,.85,.4],[hu.cx,hu.cz,hu.w/2,hu.d/2,hu.legH,hu.h,.85,.42],[gu.x,gu.z,.13,.13,0,.045,.6,.14],[_u.x,_u.z,_u.r*.85,_u.r*.85,0,.27,.7,.26]];if(n.length!==5)throw Error(`room occluder count mismatch`);return{uRoomBox:{value:new an(K.minX,K.maxX,K.minZ,ch)},uOccA:{value:n.map(e=>new an(e[0],e[1],e[2],e[3]))},uOccB:{value:n.map(e=>new an(e[4],e[5],e[6],e[7]))},uLampPos:{value:e.position.clone()},uLampGlow:{value:_h.lampColor.clone().multiplyScalar(_h.glowI)},uLampCone:{value:new an(Math.cos(Math.atan2(mh.rTop,mh.top-hh)),Math.cos(Math.atan2(mh.rBottom,hh-mh.bottom)),Math.cos(_h.lampAngle),Math.cos(_h.lampAngle*(1-_h.lampPenumbra)))},uLampDecay:{value:_h.lampDecay},uSpotDir:{value:t},uWinRect:{value:new an(du.x0,du.x1,du.y0,du.y1)},uWinZ:{value:dh},uWinGap:{value:new an(fu.x1,pu.x0,_h.curtainTrans,0)},uWinRad:{value:_h.winRad.clone()},uSkyLo:{value:_h.skyLo.clone()},uSkyHi:{value:_h.skyHi.clone()},uShadePos:{value:new B(gu.x,(mh.bottom+mh.top)/2,gu.z)},uShadeCol:{value:_h.shadeCol.clone()},uLampLevel:{value:1},uWinLevel:{value:1}}}buildShell(){let{minX:e,maxX:t,minZ:n}=K,r=lh-n,i=(n+lh)/2,a=new va(t-e,r);a.rotateX(-Math.PI/2),a.translate((e+t)/2,0,i);let o=new W(a,nh(this.u,{woodDark:_h.woodDark,woodLight:_h.woodLight,gloss:.75,dustSheen:1.4}));o.name=`room-floor`,o.receiveShadow=!0,this.group.add(o);let s=new Um,{x0:c,x1:l,y0:u,y1:d}=du,f=(e,t,n,r,i)=>s.add(new va(e,t),n,r,i);f(c-e,ch,Q.wall,[(e+c)/2,ch/2,n],[0,0,0]),f(t-l,ch,Q.wall,[(l+t)/2,ch/2,n],[0,0,0]),f(l-c,u,Q.wall,[(c+l)/2,u/2,n],[0,0,0]),f(l-c,ch-d,Q.wall,[(c+l)/2,(d+ch)/2,n],[0,0,0]),f(uh,d-u,Q.wall,[c,(u+d)/2,n-uh/2],[0,Math.PI/2,0]),f(uh,d-u,Q.wall,[l,(u+d)/2,n-uh/2],[0,-Math.PI/2,0]),f(l-c,uh,Q.wall,[(c+l)/2,d,n-uh/2],[Math.PI/2,0,0]),f(l-c,uh,Q.wall,[(c+l)/2,u,n-uh/2],[-Math.PI/2,0,0]),f(r,ch,Q.wall,[e,ch/2,i],[0,Math.PI/2,0]),f(r,ch,Q.wall,[t,ch/2,i],[0,-Math.PI/2,0]),f(t-e,r,Q.ceiling,[(e+t)/2,ch,i],[Math.PI/2,0,0]);let p=new W(s.build(),rh(this.u));p.name=`room-walls`,p.receiveShadow=!0,this.group.add(p)}buildTrim(e){let{minX:t,maxX:n,minZ:r}=K,i=lh-r,a=(r+lh)/2,o=.095,s=.016;e.rbox(n-t,o,s,.005,Q.trim,[0,o/2,r+s/2]),e.rbox(s,o,i,.005,Q.trim,[t+s/2,o/2,a]),e.rbox(s,o,i,.005,Q.trim,[n-s/2,o/2,a]);let c=.065,l=.028;e.box(n-t,c,l,Q.trim,[0,ch-c/2,r+l/2]),e.box(l,c,i,Q.trim,[t+l/2,ch-c/2,a]),e.box(l,c,i,Q.trim,[n-l/2,ch-c/2,a]),e.box(n-t,.018,.05,Q.trim,[0,ch-c-.009,r+.05/2]),e.box(.05,.018,i,Q.trim,[t+.05/2,ch-c-.009,a]),e.box(.05,.018,i,Q.trim,[n-.05/2,ch-c-.009,a])}buildWindow(e){let{x0:t,x1:n,y0:r,y1:i}=du,a=K.minZ,o=.07,s=.02;e.rbox(o,i-r+o,s,.005,Q.trim,[t-o/2,(r+i+o)/2,a+s/2]),e.rbox(o,i-r+o,s,.005,Q.trim,[n+o/2,(r+i+o)/2,a+s/2]),e.rbox(n-t+o*2+.02,o,.024,.006,Q.trim,[fh,i+o/2,a+.024/2]);let c=.115;e.rbox(n-t+.22,.03,c,.008,Q.trim,[fh,r-.003,a-.065+c/2]),e.rbox(n-t+.1,.075,.018,.005,Q.trim,[fh,r-.018-.0375,a+.009]);let l=dh,u=.06,d=.055;e.box(d,i-r,u,Q.trim,[t+d/2,(r+i)/2,l]),e.box(d,i-r,u,Q.trim,[n-d/2,(r+i)/2,l]),e.box(n-t,d,u,Q.trim,[fh,i-d/2,l]),e.box(n-t,.07,u,Q.trim,[fh,r+.035,l]),e.box(.07,i-r,.06999999999999999,Q.trim,[fh,(r+i)/2,l+.005]),e.box(n-t,.05,u,Q.trim,[fh,ph,l]);let f=.03;for(let[i,a]of[[t+d,fh-.035],[fh+.035,n-d]]){let t=r+.07,n=ph-.025,o=l+u/2+.006,s=(i+a)/2;e.box(f,n-t,.022,Q.trim,[i+f/2,(t+n)/2,o]),e.box(f,n-t,.022,Q.trim,[a-f/2,(t+n)/2,o]),e.box(a-i,f,.022,Q.trim,[s,t+f/2,o]),e.box(a-i,f,.022,Q.trim,[s,n-f/2,o])}e.rbox(.018,.11,.022,.006,Q.brass,[fh+.07,ju(r,ph,.5),l+u/2+.03]);let p=new W(new va(n-t,i-r),oh(this.u));p.position.set(fh,(r+i)/2,dh-.004),p.name=`room-window-view`,this.group.add(p)}buildRod(e){let{y:t,z:n,x0:r,x1:i,r:a}=gh;e.cyl(a,a,i-r,12,Q.rod,[(r+i)/2,t,n],[0,0,Math.PI/2]);for(let[o,s]of[[r,-1],[i,1]])e.cyl(a*1.35,a*1.35,.012,12,Q.rod,[o+s*.006,t,n],[0,0,Math.PI/2]),e.sphere(.021,Q.rod,[o+s*.03,t,n]);let o=K.minZ;for(let a of[r+.07,i-.06])e.cyl(.026,.026,.01,16,Q.rod,[a,t,o+.005],[Math.PI/2,0,0]),e.box(.012,.012,n-o,Q.rod,[a,t-.005,(n+o)/2]),e.cyl(.004,.004,.03,6,Q.rod,[a,t-.02,n]);let s=.022,c=t-(s-a);for(let t of[...this.curtainRings.interactive,...this.curtainRings.static]){e.add(new xa(s,.0032,5,16),Q.rod,[t,c,n],[0,Math.PI/2,0]);let r=c-s;e.box(.006,r-fu.top,.004,Q.rod,[t,(r+fu.top)/2,n])}}buildSideboard(e){let t=mu,n=t.cx-t.w/2,r=t.cx+t.w/2,i=t.cz-t.d/2,a=t.cz+t.d/2,o=t.h-t.legH,s=.028;e.rbox(t.w,s,t.d,.008,Q.oak,[t.cx,t.h-s/2,t.cz],void 0,{shadeDown:.35});let c=o-s;e.box(t.w-.03,c-.004,t.d-.03,Q.oakDark,[t.cx+.01,t.legH+c/2,t.cz]),e.rbox(t.w-.012,c,.02,.004,Q.oak,[t.cx+.004,t.legH+c/2,i+.01]),e.rbox(t.w-.012,c,.02,.004,Q.oak,[t.cx+.004,t.legH+c/2,a-.01]),e.rbox(t.w-.012,.022,t.d-.004,.004,Q.oak,[t.cx+.004,t.legH+.011,t.cz],void 0,{shadeDown:.12});let l=t.legH+.03,u=t.h-s-.008-l,d=(t.d-.05)/3,f=.006,p=n+.012;for(let t=0;t<3;t++){let n=i+.025+d*(t+.5);if(t===1){let t=(u-f)/2;for(let r=0;r<2;r++){let i=l+t/2+r*(t+f);e.rbox(.02,t,d-f,.004,Q.oakDoor,[p,i,n]),e.rbox(.014,.014,.11,.006,Q.brass,[p-.016,i+t*.12,n])}}else{e.rbox(.02,u,d-f,.004,Q.oakDoor,[p,l+u/2,n]);let r=n+(t===0?1:-1)*(d/2-.05);e.rbox(.014,.1,.014,.006,Q.brass,[p-.016,l+u*.62,r])}}for(let o of[n+.05,r-.05])for(let n of[i+.06,a-.06])e.cyl(.017,.011,t.legH,10,Q.legs,[o,t.legH/2,n]);let m=t.h;e.lathe([[0,0],[.046,0],[.056,.03],[.062,.09],[.052,.15],[.03,.2],[.022,.235],[.029,.256],[.024,.26],[.017,.24]],24,Q.vase,[t.cx+.03,m,a-.3]);let h=[[.21,.032,.27,0],[.19,.026,.25,.08],[.17,.036,.23,-.05]],g=m;h.forEach(([n,r,i,a],o)=>{e.rbox(n,r,i,.003,vh[(o*5+2)%vh.length],[t.cx+.02,g+r/2,t.cz-.02],[0,a,0]),g+=r});let _=i+.3,v=new un().compose(new B(t.cx+.02,m+.085,_),new Bt().setFromEuler(new bn(0,0,-.14)),new B(1,1,1)),y=new Um;y.rbox(.014,.17,.135,.004,Q.frameDark,[0,0,0]),y.add(new va(.105,.14),Q.mat,[-.0075,0,0],[0,-Math.PI/2,0]),y.add(new va(.075,.1),Im(10252116,.6),[-.0078,.004,0],[0,-Math.PI/2,0]),y.add(new Hi(.022,16),Im(14201466,.6),[-.008,.02,.012],[0,-Math.PI/2,0]),e.addBuilt(y.build(),v)}buildCabinet(e){let t=hu,n=t.cx-t.w/2,r=t.cx+t.w/2,i=t.cz-t.d/2,a=t.cz+t.d/2,o=.02,s=t.h-t.legH,c=t.legH+s/2;e.rbox(t.w,s,o,.004,Q.cabinet,[t.cx,c,i+o/2]),e.rbox(t.w,s,o,.004,Q.cabinet,[t.cx,c,a-o/2]),e.rbox(t.w+.01,.024,t.d+.01,.006,Q.cabinet,[t.cx+.005,t.h-.012,t.cz],void 0,{shadeDown:.5}),e.box(t.w,o,t.d-2*o,Q.cabinet,[t.cx,t.legH+o/2,t.cz],void 0,{shadeDown:.12});let l=t.legH+o+(s-o-.024)/2;e.box(t.w-.014,o,t.d-2*o,Q.cabinet,[t.cx+.007,l,t.cz],void 0,{shadeDown:.6}),e.box(t.w-.014,s-o-.024,o,Q.cabinet,[t.cx+.007,t.legH+o+(s-o-.024)/2,t.cz]),e.box(.012,s-.024,t.d-2*o,Q.cabinetIn,[n+.006,t.legH+(s-.024)/2,t.cz]);for(let o of[n+.04,r-.04])for(let n of[i+.04,a-.04])e.cyl(.018,.013,t.legH,10,Q.legs,[o,t.legH/2,n]);let u=new Ju(24301),d=t.legH+o,f=l+o/2,p=l-o/2-d,m=i+o,h=t.cz-o/2,g=t.cz+o/2,_=a-o,v=n+.014;this.bookRow(e,u,v,f,m+.004,h-.004,[.19,.3],[.018,.042],[.15,.2],p-.02),this.bookRow(e,u,v,d,g+.004,_-.004,[.26,.33],[.01,.018],[.22,.28],p-.02);let y=f;for(let t=0;t<4;t++){let t=u.range(.02,.035),n=vh[u.int(0,vh.length)];e.rbox(u.range(.2,.26),t,u.range(.24,.3),.003,n,[v+.13,y+t/2,g+.2],[0,u.range(-.08,.08),0]),y+=t}e.sphere(.055,Im(10705480,.55),[r-.1,f+.055,_-.08],16,12),e.rbox(t.w-.07,p-.07,h-m-.03,.03,Q.basket,[v+(t.w-.07)/2,d+(p-.07)/2,(m+h)/2]),e.rbox(t.w-.06,.03,h-m-.02,.012,Im(4938601,.8),[v+(t.w-.06)/2,d+p-.085,(m+h)/2]);let b=t.h;e.rbox(.22,.03,.28,.003,vh[3],[t.cx,b+.015,i+.25],[0,.1,0]),e.rbox(.2,.024,.25,.003,vh[4],[t.cx+.005,b+.042,i+.25],[0,-.05,0]);let x=t.cx+.02,S=a-.22;e.cyl(.062,.066,.014,20,Q.oak,[x,b+.007,S]),e.cyl(.007,.007,.17,8,Q.oak,[x,b+.1,S]);let C=[[.052,.018,10968906],[.045,.017,12819282],[.038,.016,7309930],[.031,.015,5337226]],w=b+.014;for(let[t,n,r]of C)w+=n,e.add(new xa(t,n,8,24),Im(r,.5),[x,w,S],[Math.PI/2,0,0]),w+=n;e.sphere(.022,Im(12819282,.5),[x,w+.02,S],14,10)}bookRow(e,t,n,r,i,a,o,s,c,l){let u=i,d=.34;for(;;){let i=t.range(s[0],s[1]),f=Math.min(l,t.range(o[0],o[1])),p=t.range(c[0],c[1]),m=vh[t.int(0,vh.length)],h=a-u;if(h<i+.02)break;if(h<.1&&h>f*Math.sin(d)*.5){let t=u+f/2*Math.sin(d)+i/2*Math.cos(d),a=r+f/2*Math.cos(d)+i/2*Math.sin(d)*.2;e.rbox(p,f,i,.002,m,[n+p/2,a,t],[d,0,0]);break}e.rbox(p,f,i,.002,m,[n+p/2,r+f/2,u+i/2]),u+=i+t.range(0,.003)}}buildPictures(e){{let t=new Um,n=.76,r=.54,i=.03,a=.028;t.rbox(n,i,a,.004,Q.frameDark,[0,r/2-i/2,a/2]),t.rbox(n,i,a,.004,Q.frameDark,[0,-.255,a/2]),t.rbox(i,r,a,.004,Q.frameDark,[-.365,0,a/2]),t.rbox(i,r,a,.004,Q.frameDark,[n/2-i/2,0,a/2]),t.add(new va(n-2*i,r-2*i),Q.mat,[0,0,.01]),t.add(new va(.46,.28),Im(10136240,.85),[0,0,.011]),t.add(new Hi(.055,24),Im(13212234,.85),[.11,.035,.012]),t.add(xh(.17,.62),Im(11101515,.85),[-.06,-.14,.013]),t.add(xh(.2,.42),Im(6782819,.85),[.12,-.14,.014]),t.add(new va(.46,.01),Im(5069397,.85),[0,-.135,.015]);let o=new un().makeTranslation(J.cx,1.66,K.minZ);e.addBuilt(t.build(),o)}{let t=new Um,n=.38,r=.48,i=.025,a=.024;t.rbox(n,i,a,.004,Q.frameOak,[0,r/2-i/2,a/2]),t.rbox(n,i,a,.004,Q.frameOak,[0,-.22749999999999998,a/2]),t.rbox(i,r,a,.004,Q.frameOak,[-.1775,0,a/2]),t.rbox(i,r,a,.004,Q.frameOak,[n/2-i/2,0,a/2]),t.add(new va(n-2*i,r-2*i),Q.mat,[0,0,.01]),t.add(new va(.24,.32),Im(3362906,.85),[0,0,.011]),t.add(new Hi(.035,24),Im(14932155,.85),[.045,.085,.012]),t.add(new Hi(.11,3),Im(6258556,.85),[-.05,-.11,.012],[0,0,Math.PI/2]),t.add(new Hi(.09,3),Im(8165008,.85),[.06,-.12,.013],[0,0,Math.PI/2]);let o=new un().makeTranslation(K.minX,1.52,hu.cz).multiply(new un().makeRotationY(Math.PI/2));e.addBuilt(t.build(),o)}}buildPlant(e,t){let{x:n,z:r}=_u;e.lathe([[0,0],[.1,0],[.106,.012],[.136,.245],[.146,.25],[.146,.268],[.132,.268],[.127,.25]],28,Q.pot,[n,0,r]),e.cyl(.127,.127,.01,24,Q.soil,[n,.242,r]);let i=new Ju(2471),a=new B(0,1,0);for(let e=0;e<12;e++){let o=e*2.39996+i.range(-.3,.3),s=Math.cos(o),c=Math.sin(o);s>0&&(s*=.45),c<0&&(c*=.5);let l=new B(s,0,c),u=i.range(.12,.42),d=i.range(.3,.62)*(1-u*.3),f=new B(n+s*.03,.245,r+c*.03),p=l.clone().multiplyScalar(Math.sin(u)).add(new B(0,Math.cos(u),0)).normalize(),m=f.clone().addScaledVector(p,d);t.rod(f,m,.0045,Q.stem);let h=i.range(.45,.95),g=l.clone().multiplyScalar(Math.sin(h)).addScaledVector(a,Math.cos(h)).normalize(),_=Wm(m,g,new B().crossVectors(g,a).normalize(),i.range(.22,.32),i.range(.055,.075),i.range(1.2,2.4)),v=i.range(.8,1.15),y=Im(e%3==0?3955251:3099436,.5);t.add(_,y,void 0,void 0,{tint:(e,t,n)=>{let r=e-m.x,i=n-m.z,a=Math.min(1,Math.hypot(r,t-m.y,i)/.3);return v*(.85+.25*a)}})}}buildLamp(){let e=new Um,{x:t,z:n}=gu;e.lathe([[0,0],[.14,0],[.147,.005],[.145,.017],[.125,.025],[.035,.031],[.02,.043],[0,.045]],32,Q.lampMetal,[t,0,n]);let r=hh-.06;e.cyl(.0105,.0105,r-.045,10,Q.lampMetal,[t,(r+.045)/2,n]),e.cyl(.018,.021,.05,12,Q.lampMetal,[t,r+.02,n]);let i=mh.top-.006;e.cyl(.003,.003,i-r,6,Q.lampMetal,[t,(i+r)/2,n]),e.cyl(.012,.012,.018,12,Q.lampMetal,[t,i,n]),e.sphere(.012,Q.lampMetal,[t,i+.018,n]);for(let r=0;r<3;r++){let a=r/3*Math.PI*2+.4;e.box(mh.rTop,.004,.004,Q.lampMetal,[t+Math.cos(a)*mh.rTop*.5,i,n+Math.sin(a)*mh.rTop*.5],[0,-a,0])}e.add(new xa(mh.rBottom,.0035,6,48),Q.lampMetal,[t,mh.bottom,n],[Math.PI/2,0,0]),e.add(new xa(mh.rTop,.0035,6,40),Q.lampMetal,[t,mh.top,n],[Math.PI/2,0,0]);let a=new W(e.build(),ih(this.u));a.name=`room-lamp`,a.receiveShadow=!0,this.group.add(a);let o=new Ui(mh.rTop,mh.rBottom,mh.top-mh.bottom,48,3,!0);o.translate(t,(mh.top+mh.bottom)/2,n);let s=new ba(.036,14,10);s.translate(t,hh,n),o.setAttribute(`glow`,new U(new Float32Array(o.attributes.position.count),1)),s.setAttribute(`glow`,new U(new Float32Array(s.attributes.position.count).fill(1),1));let c=Yf([o,s]);o.dispose(),s.dispose();let l=new W(c,ah(this.u,mh.bottom,mh.top));l.name=`room-lamp-shade`,this.group.add(l)}buildHaze(){let{x0:e,x1:t,y0:n,y1:r}=du,i=_h.winDir,a=[],o=[],s=[],c=this.ctx.quality.level===0?[.45]:[.25,.55,.85];c.forEach((c,l)=>{let u=ju(n+.05,r-.05,c),d=u/-i.y,f=K.minZ+.02,p=l*4;a.push(e,u,f,t,u,f,t+i.x*d,.01,f+i.z*d,e+i.x*d,.01,f+i.z*d),o.push(0,0,1,0,1,1,0,1),s.push(p,p+2,p+1,p,p+3,p+2)});let l=new Wr;l.setAttribute(`position`,new Mr(a,3)),l.setAttribute(`uv`,new Mr(o,2)),l.setIndex(s);let u=new W(l,sh(this.u,_h.hazeStrength/Math.sqrt(c.length)));u.name=`room-window-haze`,u.renderOrder=2,this.group.add(u)}};function bh(e,t,n){return Array.from({length:n},(r,i)=>ju(e,t,i/(n-1)))}function xh(e,t){let n=new Hi(e,24,0,Math.PI);return n.scale(1,t,1),n}var Sh=J.w/2,Ch=J.d/2,wh=Sh-J.armW,Th=.27,Eh=J.seatH-.022,Dh=-.1,Oh=Ch+.018,kh=2*wh/3,Ah=.14,jh=J.backH-.1,Mh=.18,Nh=zt.degToRad(9),Ph=-Ch+Ah+(jh-Th)*Math.tan(Nh)-.008,Fh=(J.backH-.012-Th-Mh*Math.sin(Nh))/Math.cos(Nh),Ih=.0055,Lh=.01,Rh=.06,zh=.75,Bh=.075,Vh=new H(`#4f6c69`),Hh=new H(`#3c5553`),Uh=new H(`#a4c6bf`),Wh=new H(`#4a3121`),Gh=2.8,Kh=.25,qh={crevice:1,gap:.85,piping:.45},Jh=16,Yh=e=>({px:0,nx:0,py:0,ny:0,pz:0,nz:0,...e}),Xh=e=>Math.max(0,1-e*e),Zh=e=>e<0?0:e>1?1:e,Qh=(e,t,n)=>{let r=Zh((n-e)/(t-e));return r*r*(3-2*r)};function $h(e,t,n,r){let i=e-t,a=Math.max(1,Math.round(2*i/r)),o=[];for(let e=n;e>=1;e--)o.push(-(i+t*Math.tan(Math.PI/4*(e/n))));for(let e=0;e<=a;e++)o.push(-i+2*i*e/a);for(let e=1;e<=n;e++)o.push(i+t*Math.tan(Math.PI/4*(e/n)));return o}var eg=class{constructor(e,t,n,r,i,a,o,s,c,l=null){Z(this,`r`,void 0),Z(this,`bulge`,void 0),Z(this,`matrix`,void 0),Z(this,`soft`,void 0),Z(this,`faces`,void 0),Z(this,`color`,void 0),Z(this,`ao`,void 0),Z(this,`h`,void 0),Z(this,`center`,new B),Z(this,`nMat`,new V),this.r=r,this.bulge=i,this.matrix=a,this.soft=o,this.faces=s,this.color=c,this.ao=l,this.h=[e,t,n],this.center.setFromMatrixPosition(a),this.nMat.getNormalMatrix(a)}world(e,t,n,r,i){let[a,o,s]=this.h,c=this.r,l=Math.max(-(a-c),Math.min(a-c,e)),u=Math.max(-(o-c),Math.min(o-c,t)),d=Math.max(-(s-c),Math.min(s-c,n)),f=e-l,p=t-u,m=n-d,h=Math.hypot(f,p,m)||1;f/=h,p/=h,m/=h;let g=this.bulge,_=Xh(e/a),v=Xh(t/o),y=Xh(n/s),b=(f>0?g.px:g.nx)*f*f*v*y+(p>0?g.py:g.ny)*p*p*_*y+(m>0?g.pz:g.nz)*m*m*_*v;return r.set(l+f*(c+b),u+p*(c+b),d+m*(c+b)).applyMatrix4(this.matrix),i&&i.set(f,p,m).applyMatrix3(this.nMat).normalize(),r}outline(e,t){let n=(e+1)%3,r=(e+2)%3,i=this.h,a=Math.max(-i[e],Math.min(i[e],t)),o=$h(i[n],this.r,6,.03),s=$h(i[r],this.r,6,.03),c=[],l=[0,0,0],u=(t,i)=>{l[e]=a,l[n]=t,l[r]=i,c.push(this.world(l[0],l[1],l[2],new B))};for(let e=0;e<s.length-1;e++)u(i[n],s[e]);for(let e=o.length-1;e>0;e--)u(o[e],i[r]);for(let e=s.length-1;e>0;e--)u(-i[n],s[e]);for(let e=0;e<o.length-1;e++)u(o[e],-i[r]);return c}axisWorld(e,t){return t.setFromMatrixColumn(this.matrix,e).normalize()}},tg=class{constructor(){Z(this,`pos`,[]),Z(this,`nrm`,[]),Z(this,`uv`,[]),Z(this,`tint`,[]),Z(this,`soft`,[]),Z(this,`edge`,[]),Z(this,`occ`,[]),Z(this,`idx`,[])}get count(){return this.pos.length/3}push(e,t,n,r,i,a,o,s){this.pos.push(e.x,e.y,e.z),this.nrm.push(t.x,t.y,t.z),this.uv.push(n,r),this.tint.push(i.r,i.g,i.b),this.soft.push(a),this.edge.push(o),this.occ.push(s)}},ng=[{nR:3,spacing:.06,pipeRadial:5,pipeStep:.028},{nR:4,spacing:.045,pipeRadial:6,pipeStep:.02},{nR:5,spacing:.035,pipeRadial:6,pipeStep:.016}],rg=class{constructor(e){Z(this,`group`,new Rn),Z(this,`seams`,void 0),Z(this,`fabric`,void 0),Z(this,`uniforms`,{uPullCenter:{value:new B(0,-10,0)},uPull:{value:0},uCreviceGain:{value:Gh},uHaloGain:{value:Kh}}),Z(this,`pullCenter`,this.uniforms.uPullCenter.value),Z(this,`pullVel`,new B),Z(this,`pull`,0);let t=ng[e.quality.level],n=ig();this.seams=_g(n);let r=new tg;for(let e of n.all)fg(e,r,t);for(let e of n.seats)pg(r,e,1,t);for(let e of n.backs)pg(r,e,2,t);for(let e of n.arms)pg(r,e,2,t);let i=vg(r,this.seams),a=this.makeFabricMaterial(e);this.fabric=new W(i,a),this.fabric.name=`sofa-fabric`,this.fabric.castShadow=e.quality.shadows,this.fabric.receiveShadow=e.quality.shadows,this.group.add(this.fabric);let o=new W(yg(),mp(new Na({color:Wh,roughness:.48}),{strength:.8,heightFalloff:1.3}));o.name=`sofa-legs`,o.castShadow=e.quality.shadows,o.receiveShadow=e.quality.shadows,this.group.add(o,bg())}update(e){let t=e.dt,n=Xu.uNozzle.value,r=this.pullCenter,i=this.pullVel;if(r.distanceToSquared(n)>2.25)r.copy(n),i.set(0,0,0);else{let e=1.24*Math.sqrt(160);i.x+=(160*(n.x-r.x)-e*i.x)*t,i.y+=(160*(n.y-r.y)-e*i.y)*t,i.z+=(160*(n.z-r.z)-e*i.z)*t,r.addScaledVector(i,t)}let a=Xu.uAir.value,o=Math.abs(a)>Math.abs(this.pull)?4:2.5;this.pull+=(a-this.pull)*(1-Math.exp(-t*o)),this.uniforms.uPull.value=this.pull}pullAt(e){let t=this.pullCenter,n=Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z);if(n>=zh||this.pull<=0)return 0;let r=1-Qh(Rh,zh,n);return Zh(r*Math.sqrt(r)*this.pull)}makeFabricMaterial(e){let t=e.quality.level>=1?new Pa({vertexColors:!0,roughness:.84,sheen:1,sheenRoughness:.42,sheenColor:Uh,specularIntensity:.3}):new Na({vertexColors:!0,roughness:.86}),n=this.uniforms;return t.onBeforeCompile=e=>{e.uniforms.uPullCenter=n.uPullCenter,e.uniforms.uPull=n.uPull,e.uniforms.uCreviceGain=n.uCreviceGain,e.uniforms.uHaloGain=n.uHaloGain,e.uniforms.uTime=Xu.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${xg}`).replace(`#include <beginnormal_vertex>`,`#include <beginnormal_vertex>\n${Sg}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
transformed += fabDisp;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\n${Cg}`).replace(`#include <color_fragment>`,`#include <color_fragment>\n${wg}`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>\n${Tg}`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n${Eg}`).replace(`#include <lights_physical_fragment>`,`#include <lights_physical_fragment>\n${Dg}`)},t.customProgramCacheKey=()=>`sofa-fabric`,mp(t,{strength:1.1,heightFalloff:1.3})}};function ig(){let e=(e,t,n)=>new un().makeTranslation(J.cx+e,t,J.cz+n),t=J.legH,n=new eg(wh+.012,(Th-t)/2,Ch,.03,Yh({pz:.004}),e(0,(t+Th)/2,0),.2,Jh,Vh,(e,t)=>t.z>.3?1-.55*Qh(.19,Th,e.y):1),r=new eg(Sh-.02,(jh-t)/2,Ah/2,.045,Yh({py:.006}),e(0,(t+jh)/2,-Ch+Ah/2),.25,20,Vh,(e,t)=>t.z>.5&&e.y<jh-.04?.35:1),i=[-1,1].map(n=>new eg(J.armW/2,(J.armH-t)/2,Ch,.07,Yh({py:.01,px:.007,nx:.007,pz:.004}),e(n*(wh+J.armW/2),(t+J.armH)/2,0),.5,23,Vh,(e,t)=>t.x*-n>.5?1-.6*(1-Qh(Th,Eh,e.y)):1)),a=[{yaw:.006,crown:1.08,back:.95,dx:.003},{yaw:-.003,crown:.9,back:1.07,dx:-.002},{yaw:.004,crown:1,back:.92,dx:.004}],o=[],s=[];for(let t=0;t<3;t++){let n=a[t],r=-wh+kh*(t+.5)+n.dx,i=e(r,(Th+Eh)/2,(Dh+Oh)/2).multiply(new un().makeRotationY(n.yaw));o.push(new eg(kh/2,(Eh-Th)/2,(Oh-Dh)/2,.062,Yh({py:.03*n.crown,pz:.014,nz:.008,px:.012,nx:.012}),i,1,55,Vh,e=>1-.35*(1-Qh(Th,.34,e.y))));let c=e(r,Th,Ph).multiply(new un().makeRotationY(-n.yaw*.7)).multiply(new un().makeRotationX(-Nh)).multiply(new un().makeTranslation(0,Fh/2,Mh/2));s.push(new eg(kh/2,Fh/2,Mh/2,.072,Yh({pz:.036*n.back,nz:.01,py:.012,px:.012,nx:.012}),c,1,55,Vh,e=>1-.4*(1-Qh(Eh-.05,Eh+.04,e.y))))}return{all:[n,r,...i,...o,...s],seats:o,backs:s,arms:i}}var ag=new B,og=new B,sg=new B,cg=new B,lg=new B,ug=new B,dg=new B;function fg(e,t,n){let r=e.h,i=.001,a=[0,0,0],o=[0,0,0],s=(t,n,r)=>(o[0]=a[0],o[1]=a[1],o[2]=a[2],o[n]+=r,e.world(o[0],o[1],o[2],t));for(let o=0;o<3;o++)for(let c of[1,-1]){if(!(e.faces&1<<o*2+(c>0?0:1)))continue;let l=(o+1)%3,u=(o+2)%3,d=$h(r[l],e.r,n.nR,n.spacing),f=$h(r[u],e.r,n.nR,n.spacing),p=t.count;for(let n=0;n<f.length;n++)for(let p=0;p<d.length;p++){a[o]=c*r[o],a[l]=d[p],a[u]=f[n],e.world(a[0],a[1],a[2],ag,dg),s(cg,l,i).sub(s(sg,l,-.001)),s(ug,u,i).sub(s(lg,u,-.001)),og.crossVectors(cg,ug).normalize(),og.dot(dg)<0&&og.negate();let m=Math.max(Zh((Math.abs(d[p])-(r[l]-e.r-.06))/(e.r+.06)),Zh((Math.abs(f[n])-(r[u]-e.r-.06))/(e.r+.06))),h=e.ao?e.ao(ag,og):1;t.push(ag,og,d[p],f[n],e.color,e.soft,m,h)}let m=d.length;for(let e=0;e<f.length-1;e++)for(let n=0;n<m-1;n++){let r=p+e*m+n,i=r+1,a=r+m,o=a+1;c>0?t.idx.push(r,i,o,r,o,a):t.idx.push(r,o,i,r,a,o)}}}function pg(e,t,n,r){let i=t.h,a=(n+1)%3,o=(n+2)%3,s=[],c=[0,0,0];c[n]=i[n];let l=$h(i[a],t.r,6,.05),u=$h(i[o],t.r,6,.05),d=(e,n)=>{c[a]=e,c[o]=n;let r=t.world(c[0],c[1],c[2],new B,og);s.push(r.addScaledVector(og,Ih*.35))};for(let e=0;e<u.length-1;e++)d(i[a],u[e]);for(let e=l.length-1;e>0;e--)d(l[e],i[o]);for(let e=u.length-1;e>0;e--)d(-i[a],u[e]);for(let e=0;e<l.length-1;e++)d(l[e],-i[o]);let f=new $i(s,!0,`centripetal`),p=new Sa(f,Math.max(12,Math.round(f.getLength()/r.pipeStep)),Ih,r.pipeRadial,!0),m=p.attributes.position,h=p.attributes.normal,g=p.attributes.uv,_=e.count;for(let n=0;n<m.count;n++)ag.fromBufferAttribute(m,n),og.fromBufferAttribute(h,n),e.push(ag,og,g.getX(n)*8,g.getY(n)*.03,Hh,t.soft,1,1);let v=p.index;for(let t=0;t<v.count;t++)e.idx.push(_+v.getX(t));p.dispose()}function mg(e,t,n,r,i,a,o){let s=.02,c=e.length,l=t.length,u=e.map(e=>e.dot(i)),d=e.map(e=>e.dot(a)),f=t.map(e=>e.dot(i)),p=t.map(e=>e.dot(a)),m=-1/0,h=-1,g=-1,_=1/0,v=0,y=0,b=new B,x=new B,S=(e,t,n)=>{let r=x.dot(o)-6*n;r>m&&(m=r,b.copy(x),h=e,g=t)};for(let n=0;n<c;n++){let r=(n+1)%c,i=u[r]-u[n],a=d[r]-d[n];for(let o=0;o<l;o++){let c=(o+1)%l,m=f[c]-f[o],h=p[c]-p[o],g=m*m+h*h,b=g>0?Math.min(1,Math.max(0,((u[n]-f[o])*m+(d[n]-p[o])*h)/g)):0,C=u[n]-(f[o]+m*b),w=d[n]-(p[o]+h*b),T=C*C+w*w;T<_&&(_=T,v=n,y=o),T<s*s&&(x.lerpVectors(t[o],t[c],b).add(e[n]).multiplyScalar(.5),S(n,o,Math.sqrt(T)));let E=i*h-a*m;if(Math.abs(E)<1e-12)continue;let D=f[o]-u[n],O=p[o]-d[n],k=(D*h-O*m)/E,A=(D*a-O*i)/E;k<0||k>1||A<0||A>1||(x.lerpVectors(e[n],e[r],k).add(ag.lerpVectors(t[o],t[c],A)).multiplyScalar(.5),S(n,o,0))}}h<0&&(h=v,g=y,b.lerpVectors(t[y],t[(y+1)%l],.5).add(e[v]).multiplyScalar(.5));let C=new B().crossVectors(i,a),w=(e,t,n)=>{let r=new B().subVectors(e[(t+1)%e.length],e[t]).cross(C).normalize();return r.dot(ag.subVectors(e[t],n))<0?r.negate():r},T=w(e,h,n).add(w(t,g,r));return(T.lengthSq()<1e-4||T.dot(o)<=0)&&T.copy(o),T.normalize(),{p:b,n:T}}function hg(e,t){let n=new B;return{points:e.map(e=>(n.add(e.n),e.p.clone().addScaledVector(e.n,Lh))),normal:n.normalize(),kind:t}}function gg(e,t,n){return Array.from({length:n},(r,i)=>e+(t-e)*i/(n-1))}function _g(e){let{seats:t,backs:n,arms:r}=e,i=new B(1,0,0),a=new B(0,1,0),o=new B(0,0,1),s=n[0].axisWorld(2,new B),c=[];{let e=new B(0,.8,.6).normalize(),r=[];for(let i of gg(-wh+.025,wh-.025,42)){let s=Math.min(2,Math.max(0,Math.floor((i+wh)/kh))),c=J.cx+i,l=t[s],u=n[s];r.push(mg(l.outline(0,c-l.center.x),u.outline(0,c-u.center.x),l.center,u.center,o,a,e))}c.push(hg(r,`crevice`))}for(let e of[0,1]){let n=t[e*2],o=r[e],s=new B(e?-.5:.5,.87,0).normalize(),l=n.h[2],u=gg(-l+.035,l,12).map(e=>{let t=n.center.z+e;return mg(n.outline(2,e),o.outline(2,t-o.center.z),n.center,o.center,i,a,s)});c.push(hg(u,`crevice`))}for(let e=0;e<2;e++){let n=t[e],r=t[e+1],o=n.h[2],s=gg(-o+.035,o,12).map(e=>mg(n.outline(2,e),r.outline(2,e),n.center,r.center,i,a,a));c.push(hg(s,`gap`))}let l=(e,t)=>(t-Th-Mh*Math.sin(Nh))/Math.cos(Nh)-e.h[1];for(let e=0;e<2;e++){let t=n[e],r=n[e+1],a=gg(l(t,Eh+.03),t.h[1],12).map(e=>mg(t.outline(1,e),r.outline(1,e),t.center,r.center,i,s,s));c.push(hg(a,`gap`))}for(let e of[0,1]){let t=n[e*2],a=r[e],o=new B().copy(i).multiplyScalar(e?-.7:.7).addScaledVector(s,.7).normalize(),u=gg(Eh+.03,J.armH-.05,6).map(e=>mg(t.outline(1,l(t,e)),a.outline(1,e-a.center.y),t.center,a.center,i,s,o));c.push(hg(u,`crevice`))}for(let e=0;e<2;e++){let n=t[e],r=t[e+1],a=n.h[1],s=gg(a-n.r*.6,-a+.03,5).map(e=>mg(n.outline(1,e),r.outline(1,e),n.center,r.center,i,o,o));c.push(hg(s,`gap`))}for(let e of t){let[t,n,r]=e.h,i=new B,a=gg(-t+e.r,t-e.r,10).map(t=>e.world(t,n,r,new B,i).addScaledVector(i,.011425000000000001));e.world(0,n,r,ag,i),c.push({points:a,normal:i.clone(),kind:`piping`})}return c}function vg(e,t){let n=.11,r=[],i=[];for(let e of t){let t=[];for(let n=0;n<e.points.length-1;n++)t.push({a:e.points[n],b:e.points[n+1],w:qh[e.kind]});r.push(t),i.push(new sr().setFromPoints(e.points).expandByScalar(n))}let a=e.count,o=new Float32Array(a*3),s=new Float32Array(a*3),c=new B,l=new B,u=new B;for(let t=0;t<a;t++){c.fromArray(e.pos,t*3);let a=0,d=0;for(let e=0;e<r.length;e++)if(i[e].containsPoint(c))for(let t of r[e]){l.subVectors(t.b,t.a);let e=Zh(u.subVectors(c,t.a).dot(l)/Math.max(1e-9,l.lengthSq())),r=u.copy(t.a).addScaledVector(l,e).distanceTo(c);a=Math.max(a,t.w*(1-Qh(.004,.05,r))),d=Math.max(d,t.w*(1-Qh(0,n,r)))}let f=e.nrm[t*3+1],p=e.occ[t];p*=1-.5*d**1.5,p*=1-.55*Math.max(0,-f),p*=.55+.45*Qh(J.legH-.01,J.legH+.16,c.y),o[t*3]=e.tint[t*3]*p,o[t*3+1]=e.tint[t*3+1]*p,o[t*3+2]=e.tint[t*3+2]*p,s[t*3]=e.soft[t]*(.35+.65*Math.max(e.edge[t],d)),s[t*3+1]=a,s[t*3+2]=d}let d=new Wr;return d.setAttribute(`position`,new Mr(e.pos,3)),d.setAttribute(`normal`,new Mr(e.nrm,3)),d.setAttribute(`uv`,new Mr(e.uv,2)),d.setAttribute(`color`,new U(o,3)),d.setAttribute(`aFab`,new U(s,3)),d.setIndex(e.idx),d.computeBoundingSphere(),d.computeBoundingBox(),d}function yg(){let e=J.legH,t=[];for(let n of[-Sh+.075,0,Sh-.075])for(let r of[-Ch+.07,Ch-.07]){let i=new Ui(.021,.015,e,12,1,!0);i.translate(J.cx+n,e/2,J.cz+r),t.push(i)}let n=Yf(t);for(let e of t)e.dispose();return n}function bg(){let e=.16,t=new va(J.w+2*e,J.d+2*e);t.rotateX(-Math.PI/2);let n=new W(t,new ja({uniforms:{uHalf:{value:new z(Sh-.02,Ch-.02)}},vertexShader:`
      varying vec2 vP;
      void main() {
        vP = position.xz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec2 uHalf;
      varying vec2 vP;
      void main() {
        vec2 q = abs(vP) - uHalf + 0.06;
        float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - 0.06;
        float a = 0.5 * (1.0 - smoothstep(-0.05, 0.1, d)) + 0.38 * (1.0 - smoothstep(-0.22, 0.0, d));
        gl_FragColor = vec4(0.0, 0.0, 0.0, a);
      }`,transparent:!0,depthWrite:!1}));return n.name=`sofa-contact-shadow`,n.position.set(J.cx,.0025,J.cz),n.renderOrder=-4,n}var xg=`
attribute vec3 aFab; // x: pull weight, y: crease (glow), z: wide crease
uniform vec3 uPullCenter;
uniform float uPull;
varying vec2 vFabUv;
varying vec3 vFabPos;
varying vec3 vFabC; // crease, wide crease, current pull
`,Sg=`
vec3 fabDisp = vec3(0.0);
{
  vec3 toC = uPullCenter - position;
  float dC = length(toC) + 1e-4;
  float fall = 1.0 - smoothstep(${Rh.toFixed(3)}, ${zh.toFixed(3)}, dC);
  float k = aFab.x * fall * sqrt(fall) * uPull; // negative while the nozzle blows (finale)
  float ak = abs(k);
  // drawn toward the mouth (the cloth facing it puffs out toward it), never more than a
  // third of the way there
  vec3 dir = toC / dC;
  vec3 pullDir = normalize(dir + objectNormal * max(dot(dir, objectNormal), 0.0));
  fabDisp = pullDir * sign(k) * min(${Bh.toFixed(3)} * ak, dC * 0.33);
  // crease lips part so the pooled light shows
  fabDisp -= objectNormal * 0.014 * aFab.y * ak;
  vFabC = vec3(aFab.y, aFab.z, ak);
  vFabUv = uv;
  vFabPos = position;
}
`,Cg=`
uniform vec3 uPullCenter;
uniform float uTime;
uniform float uCreviceGain;
uniform float uHaloGain;
varying vec2 vFabUv;
varying vec3 vFabPos;
varying vec3 vFabC;
float fabHash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float fabNoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(fabHash(i), fabHash(i + vec3(1.0, 0.0, 0.0)), f.x), mix(fabHash(i + vec3(0.0, 1.0, 0.0)), fabHash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
    mix(mix(fabHash(i + vec3(0.0, 0.0, 1.0)), fabHash(i + vec3(1.0, 0.0, 1.0)), f.x), mix(fabHash(i + vec3(0.0, 1.0, 1.0)), fabHash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y),
    f.z);
}
// derivative bump mapping (Mikkelsen) for a procedural height in meters
vec3 fabPerturb(vec3 pos, vec3 nrm, vec2 dH, float fd) {
  vec3 sx = dFdx(pos);
  vec3 sy = dFdy(pos);
  vec3 r1 = cross(sy, nrm);
  vec3 r2 = cross(nrm, sx);
  float det = dot(sx, r1) * fd;
  vec3 grad = sign(det) * (dH.x * r1 + dH.y * r2);
  return normalize(abs(det) * nrm - grad);
}
`,wg=`
float fabPile = fabNoise(vFabPos * 6.0) * 0.6 + fabNoise(vFabPos * 17.0 + 3.1) * 0.4;
diffuseColor.rgb *= 0.88 + 0.24 * fabPile;
// pulled cloth: folds gather toward the nozzle. Any function of the direction to the nozzle
// is constant along rays from it, so this draws radial folds (faded right at the mouth,
// where the angular pattern would get too fine). The velvet pile is brushed along them:
// lighter on the crests, darker in between, so the pull reads even when small on screen.
float fabFold = 0.0;
float fabDist = 1.0;
if (vFabC.z > 0.002) {
  vec3 rel = vFabPos - uPullCenter;
  fabDist = length(rel);
  fabFold = (fabNoise(rel / fabDist * 8.0 + vec3(0.0, uTime * 1.4, uTime * 0.6)) - 0.5) * smoothstep(0.04, 0.16, fabDist);
  diffuseColor.rgb *= 1.0 + vFabC.z * (0.9 * fabFold + 0.08);
}
`,Tg=`
{
  // weave micro-bump, faded out before the threads get smaller than a pixel
  vec2 wv = vFabUv * 260.0;
  float fw = max(fwidth(wv.x), fwidth(wv.y));
  float H = sin(wv.x * 6.2832) * sin(wv.y * 6.2832) * (1.0 - smoothstep(0.1, 0.3, fw)) * 0.00025;
  // pulled cloth: folds gathering toward the nozzle, fluttering in the air stream
  // (only evaluated near the nozzle; the derivatives below stay in uniform control flow)
  if (vFabC.z > 0.002) {
    // (fabFold / fabDist: the radial folds from FRAG_COLOR) + air rippling through the cloth
    float ripple = sin(fabDist * 90.0 + uTime * 40.0 + 3.0 * fabFold);
    H += (fabFold * 0.005 + ripple * 0.001) * vFabC.z;
  }
  normal = fabPerturb(-vViewPosition, normal, vec2(dFdx(H), dFdy(H)), faceDirection);
}
`,Eg=`
{
  vec2 fuv = (vFabPos.xz - uLightFieldRect.xy) * uLightFieldRect.zw;
  vec3 pool = texture2D(uLightField, clamp(fuv, 0.001, 0.999)).rgb * uLightFieldGain;
  if (vFabC.y > 0.002) {
    float cr = vFabC.x;
    // light pools unevenly along a crease and breathes a little; stirred up while pulled
    float pooled = 0.3 + 1.2 * fabNoise(vFabPos * 9.0 + vec3(0.0, uTime * 0.15, 0.0));
    float shimmer = 0.82 + 0.18 * sin(uTime * 2.1 + dot(vFabPos, vec3(19.0, 13.0, 23.0)));
    float k = uCreviceGain * cr * cr * pooled * (1.0 + 3.0 * vFabC.z) * shimmer + uHaloGain * vFabC.y * vFabC.y;
    totalEmissiveRadiance += pool * k;
  }
}
`,Dg=`
#ifdef USE_SHEEN
material.sheenColor *= (0.55 + 0.9 * fabPile) * (1.0 + vFabC.z * (1.4 * fabFold + 0.25));
#endif
`,$={hull:{cy:.115,hx:.128,hy:.078,hz:.25,r:.075,bottom:.037},belt:.124,chamber:{z:-.09,r:.106,collarR:.115,floor:.198,top:.308},lid:{rimIn:.1,rimY:.324,domeTop:.338},bag:{cy:.19,cz:.103,hx:.106,hy:.034,hz:.07,r:.034,puff:.03},wheel:{r:.1,w:.044,x:.156,z:.1},caster:{r:.024,z:-.165},vent:{y:.118,z:.175,r:.075,a0:.3,a1:1.12,hw:.048},port:{y:.1,z0:-.19,z1:-.262,r:.054},neck:{r:Su.radius*.86,cuffR:Su.radius*1.12,cuffLen:.03}},Og=new B(0,$.chamber.top,$.chamber.z-$.chamber.collarR),kg=new ha(new B(0,$.port.y,$.port.z1),new B(0,$.port.y,-.33),new B(0,.13,-.385)),Ag=kg.getTangent(1,new B).normalize(),jg=kg.getPoint(1,new B).addScaledVector(Ag,$.neck.cuffLen),Mg=($.vent.a0+$.vent.a1)/2,Ng=new B(0,$.vent.y+$.vent.r*Math.sin(Mg),$.vent.z+$.vent.r*Math.cos(Mg)),Pg={shell:new H(15261647),accent:new H(2844272),fabric:new H(4877166),rubber:new H(1711134),chrome:new H(14080478),latch:new H(16183784)};function Fg(e,t,n,r,i,a,o){let s=Math.abs(e)-r+o,c=Math.abs(t)-i+o,l=Math.abs(n)-a+o;return Math.hypot(Math.max(s,0),Math.max(c,0),Math.max(l,0))+Math.min(Math.max(s,c,l),0)-o}function Ig(e,t,n,r){let i=new Vi(2,2,2,r[0],r[1],r[2]);i.deleteAttribute(`uv`);let a=i.attributes.position,o=i.attributes.normal,s=n.length()*3,c=1e-4;for(let r=0;r<a.count;r++){let i=a.getX(r)*n.x,l=a.getY(r)*n.y,u=a.getZ(r)*n.z,d=Math.hypot(i,l,u);i/=d,l/=d,u/=d;let f=0,p=s;for(let n=0;n<32;n++){let n=(f+p)*.5;e(t.x+i*n,t.y+l*n,t.z+u*n)<0?f=n:p=n}let m=(f+p)*.5,h=t.x+i*m,g=t.y+l*m,_=t.z+u*m;a.setXYZ(r,h,g,_);let v=e(h+c,g,_)-e(h-c,g,_),y=e(h,g+c,_)-e(h,g-c,_),b=e(h,g,_+c)-e(h,g,_-c),x=Math.hypot(v,y,b)||1;o.setXYZ(r,v/x,y/x,b/x)}return i.computeBoundingSphere(),i}function Lg(e,t,n){let r=$.hull,i=X(.02,-.27,n);return Fg(e*(1+.16*i),r.bottom+(t-r.bottom)*(1+.24*i)-r.cy,n,r.hx,r.hy,r.hz,r.r)}function Rg(){let e=$.hull;return Ig(Lg,new B(0,e.cy,0),new B(e.hx,e.hy,e.hz),[22,14,40])}function zg(){let e=$.bag;return Ig((t,n,r)=>Fg(t,n-e.cy,r-e.cz,e.hx,e.hy,e.hz,e.r),new B(0,e.cy,e.cz),new B(e.hx,e.hy,e.hz),[34,8,24])}function Bg(e,t){return new _a(e.map(([e,t])=>new z(e,t)),t)}function Vg(e,t){let n=e.index?e.toNonIndexed():e,r=n.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=t.r,i[e*3+1]=t.g,i[e*3+2]=t.b;n.setAttribute(`color`,new U(i,3));for(let e of Object.keys(n.attributes))e!==`position`&&e!==`normal`&&e!==`color`&&n.deleteAttribute(e);return n}function Hg(e){let t=Yf(e,!1);if(!t)throw Error(`bodyParts: merge failed`);for(let t of e)t.dispose();return t}function Ug(){let e=$.chamber,t=[],n=e.floor,r=Bg([[e.collarR,n-.05],[e.collarR+6e-4,n-.015],[e.collarR,n],[e.collarR-.0028,n+.0036],[e.r+.004,n+.005],[e.r+5e-4,n+.0036],[e.r-.0015,n],[e.r-.0015,n-.05]],64);r.translate(0,0,e.z),t.push(Vg(r,Pg.shell));let i=new Hi(e.r-.001,48);i.rotateX(-Math.PI/2),i.translate(0,e.floor,e.z),t.push(Vg(i,Pg.accent.clone().multiplyScalar(.5)));let a=$.port,o=new Ui(a.r,a.r,a.z0-a.z1,36,1,!1);o.rotateX(Math.PI/2),o.translate(0,a.y,(a.z0+a.z1)/2),t.push(Vg(o,Pg.accent));let s=$.vent;for(let e=0;e<6;e++){let n=s.a0+(e+.5)/6*(s.a1-s.a0),r=new Vi(s.hw*2-.004,.012,.0046);r.rotateX(Math.PI/2-n);let i=s.r+.0015;r.translate(0,s.y+i*Math.sin(n),s.z+i*Math.cos(n)),t.push(Vg(r,Pg.accent))}let c=new ba(.034,20,10,0,Math.PI*2,0,Math.PI/2);return c.scale(1,.6,1),c.rotateX(Math.PI),c.translate(0,.058,$.caster.z),t.push(Vg(c,Pg.accent)),Hg(t)}function Wg(){let e=[],t=$.port,n=new xa(t.r-.004,.0075,10,40);n.translate(0,t.y,t.z1),e.push(n);let r=$.neck,i=Bg([[r.r-.002,0],[r.cuffR,.002],[r.cuffR+.002,.01],[r.cuffR+.002,r.cuffLen-.006],[r.cuffR-.002,r.cuffLen],[Su.radius-.004,r.cuffLen]],36),a=kg.getPoint(1,new B);i.applyQuaternion(new Bt().setFromUnitVectors(new B(0,1,0),Ag)),i.translate(a.x,a.y,a.z),e.push(i);let o=new ba($.caster.r,16,12);o.translate(0,$.caster.r,$.caster.z),e.push(o);for(let t of e)for(let e of Object.keys(t.attributes))e!==`position`&&e!==`normal`&&t.deleteAttribute(e);return Hg(e.map(e=>e.index?e.toNonIndexed():e))}function Gg(){let e=$.chamber,t=$.lid,n=e.top,r=Bg([[e.r-.002,n-.003],[e.collarR-.001,n-.002],[e.collarR+.001,n+.006],[e.collarR,t.rimY-.003],[e.collarR-.005,t.rimY+5e-4],[t.rimIn+.004,t.rimY+5e-4],[t.rimIn,t.rimY-.003]],64),i=t.domeTop,a=Bg([[.037,t.rimY+.004],[.0365,i+.002],[.031,i+.009],[.018,i+.0125],[0,i+.013]],40),o=new xa(.0368,.0028,8,40);o.rotateX(Math.PI/2),o.translate(0,i+.003,0);let s=Hg([Vg(r,Pg.accent),Vg(a,Pg.accent),Vg(o,Pg.chrome)]);return s.translate(0,0,e.z),s.translate(-Og.x,-Og.y,-Og.z),s}function Kg(){let e=$.chamber,t=e.floor,n=Bg([[0,t+.017],[.015,t+.018],[.02,t+.022],[.021,t+.03],[.028,t+.052],[.039,t+.078],[.045,e.top-.012],[.046,e.top]],40);return n.deleteAttribute(`uv`),n.translate(0,0,e.z),n}function qg(){let e=$.lid,t=[];for(let n=0;n<=10;n++){let r=e.rimIn+.003-n/10*(e.rimIn+.003-.034),i=r/(e.rimIn+.003);t.push([r,e.rimY+.001+(e.domeTop-e.rimY)*(1-i*i)])}let n=Bg(t,56);return n.translate(0,0,$.chamber.z),n.translate(-Og.x,-Og.y,-Og.z),n}function Jg(){let e=$.chamber,t=e.z+e.collarR,n=e.top,r=new Fm(.05,.036,.014,4,.0065);r.translate(0,n+.003,t+.006);let i=new Fm(.054,.012,.036,4,.0058);i.translate(0,$.lid.rimY+.0015,t-.004);let a=Hg([r,i].map(e=>{let t=e.index?e.toNonIndexed():e;return t.deleteAttribute(`uv`),t})),o=new B(0,$.lid.rimY+.008,t);return a.translate(-Og.x,-Og.y,-Og.z),o.sub(Og),{geometry:a,padCenter:o}}function Yg(){let e=new Sa(kg,20,$.neck.r,20,!1);return e.deleteAttribute(`uv`),e}function Xg(){let e=$.chamber,t=new Ui(e.r,e.r,e.top-e.floor+.004,56,1,!0);return t.translate(0,(e.top-e.floor)/2-.002,0),t.deleteAttribute(`uv`),t}function Zg(){let e=$.wheel,t=e.w/2,n=.084,r=e.r-n,i=.011,a=[],o=(e,t,n)=>{for(let r=0;r<=4;r++){let o=n+r/4*(Math.PI/2);a.push([e+Math.cos(o)*i,t+Math.sin(o)*i])}};o(n-r+i,-t+i,Math.PI),o(n+r-i,-t+i,-Math.PI/2),o(n+r-i,t-i,0),o(n-r+i,t-i,Math.PI/2),a.push([a[0][0],a[0][1]]);let s=Bg(a,72),c=s.attributes.position;for(let t=0;t<c.count;t++){let n=c.getX(t),r=c.getZ(t),i=Math.hypot(n,r);if(i>e.r-.004){let a=Math.cos(Math.atan2(r,n)*18)>.1?1:.975,o=(e.r-.004+(i-(e.r-.004))*a)/i;c.setXYZ(t,n*o,c.getY(t),r*o)}}return s.deleteAttribute(`uv`),s.computeVertexNormals(),s.rotateZ(Math.PI/2),s}function Qg(){let e=$.wheel.w/2,t=[Vg(Bg([[.075,-e+.004],[.074,e-.001],[.06,e-5e-4],[.03,e-.003],[0,e-.002]],48),Pg.accent)];for(let n=0;n<5;n++){let r=n/5*Math.PI*2,i=new Fm(.016,.006,.04,2,.003);i.translate(0,e-.001,.038),i.rotateY(r),t.push(Vg(i,Pg.shell))}let n=new Ui(.016,.018,.008,24);n.translate(0,e+.001,0),t.push(Vg(n,Pg.chrome));let r=Hg(t);return r.rotateZ(Math.PI/2),r}var $g=`
vec3 duskEnv(vec3 d) {
  vec3 c = mix(vec3(0.014, 0.011, 0.009), vec3(0.02, 0.028, 0.05), smoothstep(-0.25, 0.3, d.y));
  c += vec3(0.02, 0.03, 0.055) * smoothstep(0.35, 1.0, d.y);
  float az = atan(d.x, -d.z);
  float el = asin(clamp(d.y, -1.0, 1.0));
  float win = smoothstep(-0.05, 0.02, az) * (1.0 - smoothstep(0.35, 0.42, az)) * smoothstep(0.08, 0.14, el) * (1.0 - smoothstep(0.55, 0.62, el));
  float mullion = 1.0 - 0.7 * (1.0 - smoothstep(0.0, 0.012, abs(az - 0.18)));
  c += vec3(0.3, 0.45, 0.95) * win * mullion * 1.8;
  vec3 ld = normalize(vec3(-0.62, 0.22, -0.76));
  float l = max(dot(d, ld), 0.0);
  c += vec3(1.0, 0.6, 0.3) * (pow(l, 300.0) * 14.0 + pow(l, 10.0) * 0.1);
  return c;
}
`,e_=new WeakMap;function t_(e){let t=e_.get(e);if(t)return t;let n=new Kn,r=new ja({side:1,depthWrite:!1,vertexShader:`
      varying vec3 vDir;
      void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      varying vec3 vDir;
      ${$g}
      void main() { gl_FragColor = vec4(duskEnv(normalize(vDir)), 1.0); }`}),i=new W(new ba(10,48,24),r);n.add(i);let a=new _s(e),o=a.fromScene(n,.01,.1,50,{size:128});return a.dispose(),i.geometry.dispose(),r.dispose(),e_.set(e,o.texture),o.texture}function n_(e){return mp(new Na({vertexColors:!0,roughness:.34,metalness:0,envMap:e,envMapIntensity:1}),{heightFalloff:1.6})}function r_(e){return mp(new Na({color:Pg.chrome,roughness:.2,metalness:1,envMap:e,envMapIntensity:1.4}),{strength:.4})}function i_(e){return mp(new Na({color:Pg.rubber,roughness:.72,metalness:0,envMap:e,envMapIntensity:.6}),{heightFalloff:1.2})}var a_=`
float bHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float bNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(bHash(i), bHash(i + vec2(1.0, 0.0)), u.x), mix(bHash(i + vec2(0.0, 1.0)), bHash(i + vec2(1.0, 1.0)), u.x), u.y);
}
// periodic in x with the given integer period (for noise around a cylinder)
float bNoiseP(vec2 p, float period) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x0 = mod(i.x, period);
  float x1 = mod(i.x + 1.0, period);
  return mix(mix(bHash(vec2(x0, i.y)), bHash(vec2(x1, i.y)), u.x), mix(bHash(vec2(x0, i.y + 1.0)), bHash(vec2(x1, i.y + 1.0)), u.x), u.y);
}
`;function o_(e){let t={uShell:{value:Pg.shell.clone()},uAccent:{value:Pg.accent.clone()},uLeakColor:{value:new H(0,0,0)},uSeamGlow:{value:0},uVentGlow:{value:0},uChamberLight:{value:new H(0,0,0)}},n=new Na({roughness:.3,metalness:0,envMap:e,envMapIntensity:1}),r=$.chamber,i=$.bag,a=$.vent,o=e=>e.toFixed(4);return n.onBeforeCompile=e=>{Object.assign(e.uniforms,t),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vLocal;
varying vec3 vLocalN;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vLocal = position;
vLocalN = normal;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        varying vec3 vLocal;
        varying vec3 vLocalN;
        uniform vec3 uShell;
        uniform vec3 uAccent;
        uniform vec3 uLeakColor;
        uniform float uSeamGlow;
        uniform float uVentGlow;
        uniform vec3 uChamberLight;
        float bSdRoundRect(vec2 p, vec2 b, float r) {
          vec2 q = abs(p) - b + r;
          return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
        }`).replace(`#include <color_fragment>`,`#include <color_fragment>
        vec3 lp = vLocal;
        // two-tone split
        float fwY = fwidth(lp.y) + 1e-5;
        float lower = 1.0 - smoothstep(${o($.belt)} - fwY, ${o($.belt)} + fwY, lp.y);
        diffuseColor.rgb = mix(uShell, uAccent, lower);
        // panel lines: belt, ring around the chamber collar, bag-cover outline (on the open
        // shoulder beside the bag so the inflated fabric never hides it)
        float dBelt = abs(lp.y - ${o($.belt)});
        float upper = step(${o($.belt+.02)}, lp.y);
        float dCol = abs(length(lp.xz - vec2(0.0, ${o(r.z)})) - ${o(r.collarR+.006)}) + (1.0 - upper);
        float dBag = abs(bSdRoundRect(lp.xz - vec2(0.0, ${o(i.cz)}), vec2(${o(i.hx+.014)}, ${o(i.hz+.014)}), 0.045)) + (1.0 - upper);
        float dSeam = min(dBelt, min(dCol, dBag));
        // exhaust vent recess on the rear-top edge
        vec2 va = lp.yz - vec2(${o(a.y)}, ${o(a.z)});
        float ang = atan(va.x, va.y);
        vec2 vq = vec2(lp.x, (ang - ${o(Mg)}) * ${o(a.r)});
        float dVent = bSdRoundRect(vq, vec2(${o(a.hw)}, ${o((a.a1-a.a0)/2*a.r)}), 0.012) + step(va.y, -0.02) + step(lp.y, 0.1);
        float fwV = fwidth(dVent) + 1e-5;
        float inVent = 1.0 - smoothstep(-fwV, fwV, dVent);
        float fwS = fwidth(dSeam) + 1e-5;
        float groove = 1.0 - smoothstep(0.0015 - fwS, 0.0015 + fwS, dSeam);
        float bevel = 1.0 - smoothstep(0.0012 - fwV, 0.0012 + fwV, abs(dVent));
        diffuseColor.rgb *= 1.0 - 0.6 * max(groove, bevel);
        diffuseColor.rgb = mix(diffuseColor.rgb, uAccent * 0.18, inVent);
        // a crisp line plus a wide soft spill: the grooves are ~1 px at phone size, the
        // spill is what makes the leaking seams readable from the game camera
        float seamLeak = exp(-dSeam * dSeam / (0.005 * 0.005)) + 0.32 * exp(-dSeam / 0.015);
        float ventLeak = inVent * (0.6 + 0.4 * smoothstep(-0.02, 0.0, -dVent)) + 0.3 * exp(-max(dVent, 0.0) / 0.006);`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        totalEmissiveRadiance += uLeakColor * (uSeamGlow * seamLeak + uVentGlow * ventLeak);
        {
          // light from the chamber falling on nearby shell (local space)
          vec3 toC = vec3(0.0, clamp(lp.y, 0.2, 0.29), ${o(r.z)}) - lp;
          float dC = length(toC);
          float lam = max(dot(normalize(vLocalN), toC / max(dC, 1e-4)), 0.0);
          totalEmissiveRadiance += uChamberLight * diffuseColor.rgb * lam / (1.0 + dC * dC / 0.0036);
        }`)},n.customProgramCacheKey=()=>`vacuum-hull`,mp(n,{heightFalloff:1.6}),{material:n,uniforms:t}}function s_(e){let t=$.bag,n={uInflate:{value:0},uGlowColor:{value:new H(0,0,0)},uTrans:{value:0},uFlutter:{value:0},uTimeB:{value:0}},r=new Na({color:Pg.fabric,roughness:.88,metalness:0,envMap:e,envMapIntensity:.35}),i=e=>e.toFixed(4),a=`
    uniform float uInflate;
    uniform float uFlutter;
    uniform float uTimeB;
    varying vec3 vBagQ;
    float bagPuff(vec3 p) {
      vec3 q = (p - vec3(0.0, ${i(t.cy)}, ${i(t.cz)})) / vec3(${i(t.hx)}, ${i(t.hy)}, ${i(t.hz)});
      float top = smoothstep(-0.4, 0.95, q.y);
      float ex = clamp(1.0 - q.x * q.x, 0.0, 1.0);
      float ez = clamp(1.0 - q.z * q.z * 0.92, 0.0, 1.0);
      float lobes = 0.7 + 0.3 * cos(q.x * 9.4248);
      return top * sqrt(ex) * ez * lobes;
    }
    float bagDisp(vec3 p) {
      float puff = bagPuff(p);
      float wr = sin(p.z * 140.0 + sin(p.x * 55.0) * 2.2) * 0.6 + sin(p.x * 95.0 + p.z * 35.0) * 0.4;
      float slack = 1.0 - uInflate;
      float fl = uFlutter * sin(uTimeB * 23.0 + p.x * 40.0) * 0.0006;
      return ${i(t.puff)} * uInflate * puff - slack * slack * 0.0038 * wr * puff + fl * puff - slack * 0.006 * puff;
    }
  `;return r.onBeforeCompile=e=>{Object.assign(e.uniforms,n),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\n${a}`).replace(`#include <beginnormal_vertex>`,`#include <beginnormal_vertex>
        vec3 bagOffset;
        {
          vec3 n0 = normalize(objectNormal);
          vec3 t1 = normalize(abs(n0.y) < 0.9 ? cross(n0, vec3(0.0, 1.0, 0.0)) : cross(n0, vec3(1.0, 0.0, 0.0)));
          vec3 t2 = cross(n0, t1);
          float e = 0.0025;
          float d0 = bagDisp(position);
          float d1 = bagDisp(position + t1 * e);
          float d2 = bagDisp(position + t2 * e);
          vec3 a = t1 * e + n0 * (d1 - d0);
          vec3 c = t2 * e + n0 * (d2 - d0);
          objectNormal = normalize(cross(a, c));
          if (dot(objectNormal, n0) < 0.0) objectNormal = -objectNormal;
          bagOffset = n0 * d0;
          vBagQ = (position - vec3(0.0, ${i(t.cy)}, ${i(t.cz)})) / vec3(${i(t.hx)}, ${i(t.hy)}, ${i(t.hz)});
        }`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
transformed += bagOffset;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform vec3 uGlowColor;
        uniform float uTrans;
        uniform float uInflate;
        varying vec3 vBagQ;`).replace(`#include <color_fragment>`,`#include <color_fragment>
        vec3 bq = vBagQ;
        // quilting stitches in the lobe valleys + piping around the rim
        float st = abs(abs(bq.x) - 0.3333);
        float fwq = fwidth(bq.x) + 1e-4;
        float stitch = (1.0 - smoothstep(0.012, 0.012 + fwq * 1.5, st)) * smoothstep(0.1, 0.5, bq.y);
        float dash = step(0.35, fract(bq.z * 9.0));
        diffuseColor.rgb *= 1.0 - 0.35 * stitch * (0.6 + 0.4 * dash);
        float pipe = 1.0 - smoothstep(-0.1, 0.35, bq.y);
        diffuseColor.rgb *= 1.0 - 0.25 * pipe;
        // fabric is thinnest (most translucent) at the crown of each stretched lobe
        float lobe = 0.5 + 0.5 * cos(bq.x * 9.4248);
        float bagThin = smoothstep(-0.1, 0.95, bq.y) * (0.25 + 0.75 * lobe * lobe) * (1.0 - 0.85 * stitch) * (1.0 - 0.5 * bq.z * bq.z);`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        {
          float ndv = clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0);
          float sheen = pow(1.0 - ndv, 3.0) * 0.18;
          totalEmissiveRadiance += diffuseColor.rgb * sheen * 0.3;
          totalEmissiveRadiance += uGlowColor * uTrans * bagThin * bagThin * (0.3 + 0.7 * ndv);
        }`)},r.customProgramCacheKey=()=>`vacuum-bag`,mp(r,{heightFalloff:1.6}),{material:r,uniforms:n}}var c_=$.chamber,l_=c_.top-c_.floor,u_=.05,d_=.099,f_=-Math.PI/2,p_=.038;function m_(e,t){return new ja({side:e,transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:205,uniforms:{uInner:t,uTint:{value:new H(.55,.68,.72)}},vertexShader:`
      varying vec3 vW;
      varying vec3 vNW;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz;
        vNW = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform vec3 uInner;
      uniform vec3 uTint;
      varying vec3 vW;
      varying vec3 vNW;
      ${$g}
      void main() {
        vec3 V = normalize(cameraPosition - vW);
        vec3 N = normalize(vNW) * (gl_FrontFacing ? 1.0 : -1.0);
        float ndv = clamp(dot(N, V), 0.0, 1.0);
        float fres = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);
        float wall = pow(1.0 - ndv, 2.2);
        vec3 refl = duskEnv(reflect(-V, N)) * fres * 1.6;
        float a = clamp(0.05 + 0.5 * wall + 0.4 * fres, 0.0, 0.8);
        vec3 col = uTint * 0.05 * a + refl + uInner * (0.12 + 0.9 * wall);
        gl_FragColor = vec4(col, a);
      }`})}var h_=class{constructor(e,t){Z(this,`group`,new Rn),Z(this,`innerLight`,{value:new H(0,0,0)}),Z(this,`n`,void 0),Z(this,`seeds`,void 0),Z(this,`phase`,void 0),Z(this,`color`,void 0),Z(this,`birth`,void 0),Z(this,`dynAttrs`,void 0),Z(this,`points`,void 0),Z(this,`pointMat`,void 0),Z(this,`gas`,void 0),Z(this,`gasMat`,void 0),Z(this,`leak`,void 0),Z(this,`leakMat`,void 0),Z(this,`recent`,[0,1,2,3].map(()=>new H)),Z(this,`recentCount`,0),Z(this,`recentHead`,0),Z(this,`head`,0),Z(this,`assigned`,0),Z(this,`carry`,0),Z(this,`swirlT`,0),Z(this,`dirtyLo`,1/0),Z(this,`dirtyHi`,-1),Z(this,`t`,0),this.group.position.set(0,c_.floor,c_.z);let n=this.n=e.chamberParticles,r=Xg(),i=new W(r,m_(1,this.innerLight)),a=new W(r,m_(0,this.innerLight));i.renderOrder=1,a.renderOrder=3,this.group.add(i,a);let o=new Float32Array(n*3);this.seeds=new Float32Array(n*4);let s=new Float32Array(n);for(let e=0;e<n;e++)this.seeds[e*4]=Fu(e*3.1+.7),this.seeds[e*4+1]=Fu(e*5.7+1.3),this.seeds[e*4+2]=Fu(e*2.3+9.1),this.seeds[e*4+3]=Fu(e*7.9+4.4),s[e]=(e+.5)/n;let c=new Wr;c.setAttribute(`position`,new U(o,3)),c.setAttribute(`aSeed`,new U(this.seeds,4)),c.setAttribute(`aIdx`,new U(s,1));let l=new Float32Array(n);for(let e=0;e<n;e++)l[e]=this.seeds[e*4+2]*Pu;this.phase=new U(l,1).setUsage(et),this.color=new U(new Float32Array(n*4),4).setUsage(et);let u=new Float32Array(n).fill(-100);this.birth=new U(u,1).setUsage(et),this.dynAttrs=[this.color,this.phase,this.birth],c.setAttribute(`aPhase`,this.phase),c.setAttribute(`aColor`,this.color),c.setAttribute(`aBirth`,this.birth),c.boundingSphere=new Ir(new B(0,l_/2,0),.16),this.pointMat=new ja({transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:201,uniforms:{uTime:{value:0},uSwirlT:{value:0},uCount:{value:0},uBright:{value:1},uDrain:{value:0},uLift:{value:0},uLevel:{value:0},uFallback:{value:new H(.2,.9,.8)},uViewH:t},vertexShader:`
        uniform float uTime;
        uniform float uSwirlT;
        uniform float uCount;
        uniform float uBright;
        uniform float uDrain;
        uniform float uLift;
        uniform float uLevel;
        uniform vec3 uFallback;
        uniform float uViewH;
        attribute vec4 aSeed;
        attribute float aIdx;
        attribute float aPhase;
        attribute vec4 aColor;
        attribute float aBirth;
        varying vec3 vCol;
        varying float vA;
        const float R0 = ${u_.toFixed(4)};
        const float R1 = ${d_.toFixed(4)};
        const float H = ${l_.toFixed(4)};
        const float ENTRY_TH = ${f_.toFixed(5)};
        const float ENTRY_Y = ${p_.toFixed(4)};
        void main() {
          float rn = aSeed.x;
          float r = mix(R0, R1, sqrt(rn));
          float omega = (1.3 + 3.2 * rn * rn) * (0.75 + 0.5 * aSeed.w);
          float th = aPhase + uSwirlT * omega;
          float tt = uTime * (1.3 + aSeed.w);
          // turbulence: radial breathing + vertical bobbing + occasional larger eddies
          r += 0.006 * sin(tt * 2.3 + aSeed.w * 40.0) + 0.004 * sin(tt * 5.1 + aSeed.y * 17.0);
          r = min(r, R1 + 0.003);
          float yb = mix(0.006, H - 0.012, aSeed.y * (0.3 + 0.7 * uLevel));
          float y = yb + 0.007 * sin(tt * 1.7 + aSeed.x * 30.0) + 0.012 * sin(th * 2.0 + aSeed.z * 6.0) * rn;
          y += uLift * (0.012 + 0.05 * aSeed.y);
          // birth: enter tangentially at the inlet, then settle into the orbit
          float age = uTime - aBirth;
          float bk = smoothstep(0.0, 1.1, age);
          float boost = age >= 0.0 ? exp(-age * 2.5) : 0.0;
          r = mix(R1 - 0.002, r, bk);
          y = mix(ENTRY_Y, y, bk);
          vec3 p = vec3(cos(th) * r, y, sin(th) * r);
          // finale: each mote leaves back through the inlet in turn
          float dk = smoothstep(aSeed.z * 0.75, aSeed.z * 0.75 + 0.22, uDrain);
          vec3 e = vec3(cos(ENTRY_TH) * R1, ENTRY_Y, sin(ENTRY_TH) * R1);
          p = mix(p, e, dk * dk);
          float vis = clamp((uCount - aIdx) * 40.0, 0.0, 1.0) * (1.0 - dk);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          float size = (0.003 + 0.0055 * aSeed.w * aSeed.w) * (1.0 + 1.6 * boost);
          float px = size * projectionMatrix[1][1] * 0.5 * uViewH / max(-mv.z, 0.01);
          gl_PointSize = max(px, 2.0);
          float cover = min(1.0, px * px / 4.0);
          vec3 c = mix(uFallback, aColor.rgb, aColor.a);
          float tw = 0.75 + 0.25 * sin(tt * 3.7 + aSeed.x * 50.0);
          vCol = c * uBright * (0.55 + 0.9 * aSeed.w) * tw * (1.0 + 3.0 * boost);
          vA = vis * cover;
        }`,fragmentShader:`
        varying vec3 vCol;
        varying float vA;
        void main() {
          vec2 d = gl_PointCoord - 0.5;
          float r2 = dot(d, d) * 4.0;
          float a = exp(-r2 * 3.5) * (1.0 - smoothstep(0.7, 1.0, r2)) * vA;
          gl_FragColor = vec4(vCol * a, 1.0);
        }`}),this.points=new Fi(c,this.pointMat),this.points.renderOrder=2,this.points.frustumCulled=!1,this.group.add(this.points);let d=new Ui(.10200000000000001,.10200000000000001,l_-.004,48,1,!0);d.translate(0,l_/2,0),d.deleteAttribute(`uv`);let f=new ya(.02,d_,48,1);f.rotateX(-Math.PI/2),f.translate(0,.004,0),f.deleteAttribute(`uv`);let p=__(d,f);this.gasMat=new ja({transparent:!0,depthWrite:!1,side:2,blending:5,blendSrc:201,blendDst:201,uniforms:{uTime:{value:0},uSwirlT:{value:0},uGas:{value:0},uLevel:{value:0},uCols:{value:this.recent}},vertexShader:`
        varying vec3 vL;
        varying vec3 vW;
        varying vec3 vNW;
        void main() {
          vL = position;
          vec4 w = modelMatrix * vec4(position, 1.0);
          vW = w.xyz;
          vNW = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,fragmentShader:`
        uniform float uTime;
        uniform float uSwirlT;
        uniform float uGas;
        uniform float uLevel;
        uniform vec3 uCols[4];
        varying vec3 vL;
        varying vec3 vW;
        varying vec3 vNW;
        const float H = ${l_.toFixed(4)};
        void main() {
          float th = atan(vL.z, vL.x);
          float y = vL.y / H;
          float r = length(vL.xz);
          float sw = th + uSwirlT * 1.7 - y * 4.0;
          float b1 = 0.5 + 0.5 * sin(3.0 * sw + 2.0 * sin(y * 7.0 + uTime * 0.7));
          float b2 = 0.5 + 0.5 * sin(5.0 * sw - 1.3 + 3.0 * y + uTime * 0.4);
          float strands = 0.35 + pow(b1, 3.0) * 0.8 + pow(b2, 4.0) * 0.5;
          vec4 w = vec4(
            0.5 + 0.5 * sin(sw * 2.0),
            0.5 + 0.5 * sin(sw * 2.0 + 1.5708),
            0.5 + 0.5 * sin(sw * 2.0 + 3.1416),
            0.5 + 0.5 * sin(sw * 2.0 + 4.7124));
          w = w * w;
          vec3 col = (uCols[0] * w.x + uCols[1] * w.y + uCols[2] * w.z + uCols[3] * w.w) / (w.x + w.y + w.z + w.w);
          float settle = exp(-y / (0.12 + 0.75 * uLevel));
          float i;
          if (vL.y < 0.01) {
            // floor pool: brightest in the swirl annulus
            i = smoothstep(0.02, 0.06, r) * (0.6 + 0.4 * b1) * 0.8;
          } else {
            vec3 V = normalize(cameraPosition - vW);
            float ndv = abs(dot(normalize(vNW), V));
            i = settle * strands * (0.35 + 0.65 * (1.0 - ndv)) * (1.0 - smoothstep(0.8, 1.0, y));
          }
          gl_FragColor = vec4(col * i * uGas, 1.0);
        }`}),this.gas=new W(p,this.gasMat),this.gas.renderOrder=2,this.gas.visible=!1,this.group.add(this.gas);let m=new Ui(c_.r+.003,c_.r+.012,.05,48,1,!0);m.translate(0,l_+.025-.004,0),m.deleteAttribute(`uv`),this.leakMat=new ja({transparent:!0,depthWrite:!1,side:2,blending:5,blendSrc:201,blendDst:201,uniforms:{uTime:{value:0},uAngle:{value:0},uLeak:{value:0},uColor:{value:new H(1,1,1)}},vertexShader:`
        varying vec3 vL;
        void main() { vL = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform float uTime;
        uniform float uAngle;
        uniform float uLeak;
        uniform vec3 uColor;
        varying vec3 vL;
        ${a_}
        void main() {
          float th = atan(vL.z, vL.x);
          float y = vL.y - ${(l_-.004).toFixed(4)};
          // lid hinge at the front: the gap opens toward the rear (+Z)
          float gap = max(0.0, vL.z + ${c_.collarR.toFixed(4)}) * tan(uAngle);
          float spread = 0.004 + gap * 1.6;
          float band = 1.0 - smoothstep(0.0, spread, y);
          float rays = 0.55 + 0.45 * bNoiseP(vec2((th / 6.2831853 + 0.5) * 88.0, uTime * 0.8), 88.0);
          float i = band * rays * smoothstep(0.0, 0.004, gap) * uLeak;
          gl_FragColor = vec4(uColor * i, 1.0);
        }`}),this.leak=new W(m,this.leakMat),this.leak.renderOrder=4,this.leak.visible=!1,this.group.add(this.leak)}deposit(e,t){let n=Math.min(32,Math.floor((this.carry+=Math.max(0,t)*(this.n/55))+1e-4));this.carry-=n;let r=Math.max(1,n);this.recent[this.recentHead].copy(e),this.recentHead=this.recentHead+1&3,this.recentCount=Math.min(4,this.recentCount+1);let i=this.color.array,a=this.phase.array,o=this.birth.array;for(let t=0;t<r;t++){let n=this.head,r=.85+.3*this.seeds[n*4+1];i[n*4]=e.r*r,i[n*4+1]=e.g*r,i[n*4+2]=e.b*r,i[n*4+3]=1;let s=this.seeds[n*4],c=(1.3+3.2*s*s)*(.75+.5*this.seeds[n*4+3]);a[n]=f_-this.swirlT*c-.12*t,o[n]=this.t+t*.035,this.dirtyLo=Math.min(this.dirtyLo,n),this.dirtyHi=Math.max(this.dirtyHi,n),this.head=(this.head+1)%this.n,this.assigned=Math.min(this.n,this.assigned+1)}}sampleColor(e,t,n){if(this.assigned===0)return n.copy(t);let r=Math.min(this.assigned-1,Math.floor(e*this.assigned)),i=this.color.array;return n.setRGB(i[r*4],i[r*4+1],i[r*4+2])}clear(){this.color.array.fill(0),this.birth.array.fill(-100),this.head=0,this.assigned=0,this.carry=0,this.recentCount=0,this.dirtyLo=0,this.dirtyHi=this.n-1}update(e,t,n){if(this.t=e,this.swirlT+=t*n.swirl,this.dirtyHi>=0){for(let e of this.dynAttrs)e.clearUpdateRanges(),e.addUpdateRange(this.dirtyLo*e.itemSize,(this.dirtyHi-this.dirtyLo+1)*e.itemSize),e.needsUpdate=!0;this.dirtyLo=1/0,this.dirtyHi=-1}for(let e=this.recentCount;e<4;e++)this.recent[e].copy(n.fallback);let r=this.pointMat.uniforms;r.uTime.value=e,r.uSwirlT.value=this.swirlT,r.uCount.value=Math.max(n.count,this.assigned/this.n),r.uBright.value=n.bright,r.uDrain.value=n.drain,r.uLift.value=n.lift,r.uLevel.value=n.level,r.uFallback.value.copy(n.fallback),this.points.visible=r.uCount.value>.001&&n.drain<.999;let i=this.gasMat.uniforms;i.uTime.value=e,i.uSwirlT.value=this.swirlT,i.uGas.value=n.gas*n.bright*.5,i.uLevel.value=n.level,this.gas.visible=i.uGas.value>.002;let a=this.leakMat.uniforms;a.uTime.value=e,a.uAngle.value=Math.max(0,n.lidAngle),a.uLeak.value=n.leak,a.uColor.value.copy(n.fallback).lerp(g_,.35).multiplyScalar(2.2),this.leak.visible=n.leak>.002&&n.lidAngle>.004,this.innerLight.value.copy(n.fallback).multiplyScalar(.14*n.bright*(.3*n.count+.7*n.gas))}},g_=new H(1,.86,.66);function __(e,t){let n=e.toNonIndexed(),r=t.toNonIndexed(),i=new Wr;for(let e of[`position`,`normal`]){let t=n.attributes[e].array,a=r.attributes[e].array,o=new Float32Array(t.length+a.length);o.set(t),o.set(a,t.length),i.setAttribute(e,new U(o,3))}for(let i of[e,t,n,r])i.dispose();return i.computeBoundingSphere(),i}var v_=10,y_=.42,b_=.43,x_=class{constructor(e){Z(this,`points`,void 0),Z(this,`neckGlow`,{value:new H(0,0,0)}),Z(this,`path`,[]),Z(this,`age`,new Float32Array(v_).fill(99)),Z(this,`outward`,new Uint8Array(v_)),Z(this,`cols`,[]),Z(this,`pos`,void 0),Z(this,`col`,void 0),Z(this,`tmp`,new B),Z(this,`next`,0);let t=[jg.clone()];for(let e=10;e>=0;e--)t.push(kg.getPoint(e/10));t.push(new B(0,$.port.y+.01,$.port.z0)),t.push(new B(0,c_.floor+p_,c_.z-d_-.02)),t.push(new B(.03,c_.floor+p_,c_.z-d_+.004));let n=new $i(t,!1,`centripetal`);for(let e=0;e<=48;e++)this.path.push(n.getPointAt(e/48));for(let e=0;e<v_;e++)this.cols.push(new H);let r=new Wr;this.pos=new U(new Float32Array(30),3).setUsage(et),this.col=new U(new Float32Array(40),4).setUsage(et),r.setAttribute(`position`,this.pos),r.setAttribute(`aCol`,this.col);let i=new ja({transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:201,uniforms:{uViewH:e},vertexShader:`
        uniform float uViewH;
        attribute vec4 aCol;
        varying vec4 vCol;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
          float px = aCol.a * projectionMatrix[1][1] * 0.5 * uViewH / max(-mv.z, 0.01);
          gl_PointSize = max(px, 1.0);
          vCol = vec4(aCol.rgb, step(0.0001, aCol.a));
        }`,fragmentShader:`
        varying vec4 vCol;
        void main() {
          vec2 d = gl_PointCoord - 0.5;
          float r2 = dot(d, d) * 4.0;
          float core = exp(-r2 * 18.0);
          float halo = exp(-r2 * 4.0) * (1.0 - smoothstep(0.6, 1.0, r2));
          gl_FragColor = vec4(vCol.rgb * (core * 2.0 + halo * 0.6) * vCol.a, 1.0);
        }`});this.points=new Fi(r,i),this.points.frustumCulled=!1,this.points.renderOrder=5,this.points.visible=!1}spawn(e,t,n=!1){let r=this.next;this.next=(this.next+1)%v_,this.age[r]=0,this.outward[r]=+!!n,this.cols[r].copy(e).multiplyScalar(1.4+Math.min(2,t)*.6)}update(e){let t=this.pos.array,n=this.col.array,r=this.path.length-1,i=!1,a=0;this.neckGlow.value.setRGB(0,0,0);for(let o=0;o<v_;o++){let s=this.age[o]+=e,c=s/y_;if(c>=1){n[o*4+3]=0;continue}i=!0;let l=this.outward[o]===1,u=Math.min(1,c*c*.4+c*.6),d=l?1-u:u,f=d*r,p=Math.min(r-1,Math.floor(f));this.tmp.copy(this.path[p]).lerp(this.path[p+1],f-p),t[o*3]=this.tmp.x,t[o*3+1]=this.tmp.y,t[o*3+2]=this.tmp.z;let m=Math.exp(-(l?y_-s:s)*22),h=1-(l?1-c:c)**6,g=this.cols[o];if(n[o*4]=g.r*h,n[o*4+1]=g.g*h,n[o*4+2]=g.b*h,n[o*4+3]=.032+.07*m,d<b_){let e=Math.sin(d/b_*Math.PI)*.25;this.neckGlow.value.r+=g.r*e,this.neckGlow.value.g+=g.g*e,this.neckGlow.value.b+=g.b*e,a++}}return i&&(this.pos.needsUpdate=!0,this.col.needsUpdate=!0),this.points.visible=i,a}},S_=3,C_=18,w_=30,T_=`
uniform float uTime;
uniform float uHeight;
uniform float uColumn;
vec3 plumeCenter(float y) {
  float lean = 0.035 * (1.0 - exp(-y / 0.05));
  float wisp = 1.0 + 1.8 * (1.0 - uColumn);
  float sway = y * y * 0.03 * wisp;
  float curl = 0.011 * y * wisp * (1.0 - uColumn * 0.7);
  return vec3(
    sin(uTime * 0.55 + y * 3.1) * sway + sin(uTime * 1.7 + y * 11.0) * curl,
    y,
    lean + cos(uTime * 0.43 + y * 2.3) * sway * 0.7 + cos(uTime * 1.3 + y * 9.0) * curl * 0.6
  );
}
`,E_=class{constructor(e,t){Z(this,`group`,new Rn),Z(this,`shell`,void 0),Z(this,`shellMat`,void 0),Z(this,`motes`,void 0),Z(this,`moteMat`,void 0),Z(this,`strength`,0),Z(this,`height`,0),this.group.position.copy(Ng);let n={uTime:{value:0},uHeight:{value:.3},uColumn:{value:0},uThread:{value:0},uColor:{value:new H(1,1,1)}},r=[];for(let e=0;e<S_;e++){let t=new Ui(1,1,1,C_,w_,!0).toNonIndexed();t.translate(0,.5,0);let n=t.attributes.position.count;t.setAttribute(`aLayer`,new U(new Float32Array(n).fill(e),1)),t.deleteAttribute(`uv`),t.deleteAttribute(`normal`),r.push(t)}let i=new Wr;for(let e of[`position`,`aLayer`]){let t=e===`position`?3:1,n=r.reduce((t,n)=>t+n.attributes[e].array.length,0),a=new Float32Array(n),o=0;for(let t of r)a.set(t.attributes[e].array,o),o+=t.attributes[e].array.length;i.setAttribute(e,new U(a,t))}for(let e of r)e.dispose();i.boundingSphere=new Ir(new B(0,.7,.05),.9),this.shellMat=new ja({transparent:!0,depthWrite:!1,side:2,blending:5,blendSrc:201,blendDst:201,uniforms:n,vertexShader:`
        ${T_}
        uniform float uThread;
        attribute float aLayer;
        varying float vH;
        varying float vLayer;
        varying float vU;
        varying vec3 vW;
        varying vec3 vNW;
        void main() {
          float h = position.y;
          float y = h * uHeight;
          vec3 c = plumeCenter(y);
          vec2 dir = normalize(position.xz);
          float r;
          if (aLayer < 0.5) r = mix(0.006, 0.012, h) * (1.0 - uColumn) + mix(0.008, 0.016, h) * uColumn;
          else if (aLayer < 1.5) r = mix(0.018, 0.042, pow(h, 0.8));
          else r = mix(0.036, 0.09, pow(h, 0.7));
          r *= 1.0 + 0.18 * sin(y * 13.0 - uTime * 2.6 + aLayer * 2.1);
          vec3 p = c + vec3(dir.x, 0.0, dir.y) * r;
          vec4 w = modelMatrix * vec4(p, 1.0);
          vW = w.xyz;
          vNW = normalize(mat3(modelMatrix) * vec3(dir.x, 0.0, dir.y));
          vH = h;
          vLayer = aLayer;
          vU = atan(dir.y, dir.x) / 6.2831853 + 0.5;
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,fragmentShader:`
        uniform float uTime;
        uniform float uHeight;
        uniform float uColumn;
        uniform float uThread;
        uniform vec3 uColor;
        varying float vH;
        varying float vLayer;
        varying float vU;
        varying vec3 vW;
        varying vec3 vNW;
        ${a_}
        void main() {
          // soften edges against the view direction projected across the (vertical) axis,
          // so the column stays full-bodied when seen from the high game camera
          vec3 V = cameraPosition - vW;
          V.y = 0.0;
          float ndv = abs(dot(normalize(vNW), normalize(V + vec3(1e-4, 0.0, 0.0))));
          float soft = pow(ndv, 1.3);
          float y = vH * uHeight;
          float n1 = bNoiseP(vec2(vU * 6.0, y * 6.0 - uTime * 1.5 + vLayer * 3.7), 6.0);
          float n2 = bNoiseP(vec2(vU * 12.0, y * 15.0 - uTime * 2.9), 12.0);
          float streak = 0.35 + 1.1 * n1 * (0.5 + n2);
          float vert = smoothstep(0.0, 0.03, y) * (1.0 - smoothstep(0.45, 1.0, vH)) * (1.0 - 0.3 * vH);
          float li;
          if (vLayer < 0.5) li = uThread * 1.9 * (1.0 - 0.6 * uColumn) + uColumn * 0.6;
          else if (vLayer < 1.5) li = uThread * 0.18 + uColumn * 0.48;
          else li = uColumn * 0.17;
          gl_FragColor = vec4(uColor * li * soft * streak * vert, 1.0);
        }`}),this.shell=new W(i,this.shellMat),this.shell.renderOrder=4,this.shell.visible=!1,this.group.add(this.shell);let a=e.level===0?24:e.level===1?40:64,o=new Float32Array(a*4);for(let e=0;e<a;e++)o[e*4]=Fu(e*1.7+3.3),o[e*4+1]=Fu(e*4.1+.9),o[e*4+2]=Fu(e*6.3+2.2),o[e*4+3]=Fu(e*8.9+5.5);let s=new Wr;s.setAttribute(`position`,new U(new Float32Array(a*3),3)),s.setAttribute(`aSeed`,new U(o,4)),this.moteMat=new ja({transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:201,uniforms:{...n,uViewH:t},vertexShader:`
        ${T_}
        uniform float uViewH;
        uniform vec3 uColor;
        attribute vec4 aSeed;
        varying vec3 vCol;
        void main() {
          float speed = 0.09 + 0.12 * aSeed.w;
          float u = fract(aSeed.y + uTime * speed / max(uHeight, 0.2));
          float y = u * uHeight;
          vec3 c = plumeCenter(y);
          float a = aSeed.z * 6.2831853 + uTime * (0.6 + aSeed.x);
          float r = (0.006 + 0.022 * aSeed.x) * (0.4 + 0.6 * u);
          vec3 p = c + vec3(cos(a) * r, 0.0, sin(a) * r);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          float px = (0.006 + 0.005 * aSeed.w) * projectionMatrix[1][1] * 0.5 * uViewH / max(-mv.z, 0.01);
          gl_PointSize = max(px, 2.0);
          float fade = smoothstep(0.0, 0.1, u) * (1.0 - smoothstep(0.6, 1.0, u));
          float tw = 0.6 + 0.4 * sin(uTime * 4.0 + aSeed.x * 40.0);
          vCol = uColor * 2.2 * uColumn * fade * tw * min(1.0, px * px / 4.0);
        }`,fragmentShader:`
        varying vec3 vCol;
        void main() {
          vec2 d = gl_PointCoord - 0.5;
          float r2 = dot(d, d) * 4.0;
          gl_FragColor = vec4(vCol * exp(-r2 * 4.0) * (1.0 - smoothstep(0.7, 1.0, r2)), 1.0);
        }`}),this.motes=new Fi(s,this.moteMat),this.motes.frustumCulled=!1,this.motes.renderOrder=4,this.motes.visible=!1,this.group.add(this.motes)}update(e,t){let n=this.shellMat.uniforms;n.uTime.value=e,n.uThread.value=t.thread,n.uColumn.value=t.column,this.height=.2+.35*t.thread+.75*t.column,n.uHeight.value=this.height,n.uColor.value.copy(t.color),this.shell.visible=t.thread>.002||t.column>.002,this.motes.visible=t.column>.02,this.strength=.25*t.thread+.75*t.column}},D_=1.95,O_=.03,k_=1.05,A_=4,j_=36,M_=new H(1,.84,.62),N_=new H(.2,.95,.8),P_=new B(0,$.chamber.floor+l_*.5,$.chamber.z),F_=new B(0,.16,-.02),I_=.3,L_=class{constructor(e){Z(this,`group`,new Rn),Z(this,`onLatchPop`,null),Z(this,`rig`,new Rn),Z(this,`lid`,new Rn),Z(this,`renderer`,void 0),Z(this,`hull`,void 0),Z(this,`bag`,void 0),Z(this,`latchMat`,void 0),Z(this,`shroudMat`,void 0),Z(this,`rimMat`,void 0),Z(this,`haloMat`,void 0),Z(this,`halo`,void 0),Z(this,`rimGlow`,void 0),Z(this,`shadowMat`,void 0),Z(this,`tires`,void 0),Z(this,`hubs`,void 0),Z(this,`chamber`,void 0),Z(this,`flashes`,void 0),Z(this,`plume`,void 0),Z(this,`padCenter`,void 0),Z(this,`viewH`,{value:800}),Z(this,`fill`,0),Z(this,`drain`,0),Z(this,`drainSent`,0),Z(this,`drainBeads`,0),Z(this,`lift`,0),Z(this,`lidAngle`,0),Z(this,`lidVel`,0),Z(this,`lidTarget`,0),Z(this,`lidMode`,`closed`),Z(this,`popTimer`,0),Z(this,`popFlash`,0),Z(this,`wasFull`,!1),Z(this,`trembleIn`,1.2),Z(this,`trembleAge`,9),Z(this,`placed`,!1),Z(this,`px`,0),Z(this,`pz`,0),Z(this,`pyaw`,0),Z(this,`spinL`,0),Z(this,`spinR`,0),Z(this,`glowI`,0),Z(this,`plumeShare`,0),Z(this,`col`,new H),Z(this,`beadCol`,new H),Z(this,`hsl`,{h:0,s:0,l:0}),Z(this,`v1`,new B),Z(this,`v2`,new B),Z(this,`v3`,new B),Z(this,`m4`,new un),Z(this,`q`,new Bt),Z(this,`e`,new bn),Z(this,`one`,new B(1,1,1)),Z(this,`v2d`,new z),this.renderer=e.renderer;let t=e.quality,n=t_(e.renderer),r=t.shadows;this.group.name=`vacuumBody`,this.group.add(this.rig),this.hull=o_(n);let i=new W(Rg(),this.hull.material);i.castShadow=r,this.rig.add(i),this.bag=s_(n);let a=new W(zg(),this.bag.material);a.castShadow=r,this.rig.add(a);let o=n_(n);this.rig.add(new W(Ug(),o)),this.rig.add(new W(Wg(),r_(n))),this.chamber=new h_(t,this.viewH),this.rig.add(this.chamber.group),this.shroudMat=mp(new Na({color:13225160,roughness:.42,metalness:.15,envMap:n,emissive:0}),{strength:.5}),this.rig.add(new W(Kg(),this.shroudMat)),this.flashes=new x_(this.viewH);let s=new W(Yg(),m_(2,this.flashes.neckGlow));s.renderOrder=3,this.rig.add(s,this.flashes.points),this.lid.position.copy(Og),this.rig.add(this.lid),this.lid.add(new W(Gg(),o));let c=new W(qg(),m_(0,this.chamber.innerLight));c.renderOrder=3,this.lid.add(c);let l=Jg();this.padCenter=l.padCenter,this.latchMat=new Na({color:Pg.latch,roughness:.28,metalness:0,envMap:n,emissive:new H(0,0,0)}),this.lid.add(new W(l.geometry,this.latchMat)),this.rimMat=new ni({color:0,transparent:!0,depthWrite:!1,blending:2});let u=new xa($.chamber.collarR+.001,.0042,8,72);u.rotateX(Math.PI/2),u.translate(0,$.chamber.top+.009,$.chamber.z),u.translate(-Og.x,-Og.y,-Og.z),this.rimGlow=new W(u,this.rimMat),this.rimGlow.renderOrder=5,this.rimGlow.visible=!1,this.lid.add(this.rimGlow),this.haloMat=new ja({transparent:!0,depthWrite:!1,depthTest:!1,blending:5,blendSrc:201,blendDst:201,uniforms:{uTime:{value:0},uI:{value:0},uColor:{value:M_.clone()},uSize:{value:.22}},vertexShader:`
        uniform float uSize;
        varying vec2 vP;
        void main() {
          vP = position.xy;
          vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mv.xy += position.xy * uSize;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uTime;
        uniform float uI;
        uniform vec3 uColor;
        varying vec2 vP;
        void main() {
          float r = length(vP);
          float core = exp(-r * r * 130.0) * 0.9;
          float glow = exp(-r * r * 19.0) * 0.38;
          // a soft ring swells from the latch out past the body onto the floor every 1.9 s
          // ("touch here", no words)
          float ph = fract(uTime / 1.9);
          float rr = 0.1 + 0.75 * ph;
          float ring = exp(-pow((r - rr) / 0.07, 2.0)) * smoothstep(0.0, 0.12, ph) * pow(1.0 - ph, 1.3) * 0.75;
          float edge = 1.0 - smoothstep(0.85, 1.0, r);
          gl_FragColor = vec4(uColor * uI * (core + glow + ring) * edge, 1.0);
        }`}),this.halo=new W(new va(2,2),this.haloMat),this.halo.position.copy(this.padCenter),this.halo.frustumCulled=!1,this.halo.renderOrder=6,this.halo.visible=!1,this.lid.add(this.halo),this.tires=new Ti(Zg(),i_(n),2),this.hubs=new Ti(Qg(),o,2),this.tires.castShadow=r,this.group.add(this.tires,this.hubs),this.writeWheels(),this.plume=new E_(t,this.viewH),this.group.add(this.plume.group),this.shadowMat=new ja({transparent:!0,depthWrite:!1,blending:5,blendSrc:201,blendDst:205,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uGlow:{value:new H(0,0,0)},uPlume:{value:new H(0,0,0)}},vertexShader:`
        varying vec2 vP;
        void main() { vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform vec3 uGlow;
        uniform vec3 uPlume;
        varying vec2 vP;
        float sdRR(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
        void main() {
          float d = sdRR(vP - vec2(0.0, -0.01), vec2(0.15, 0.25), 0.1);
          float body = 1.0 - smoothstep(-0.07, 0.09, d);
          float core = 1.0 - smoothstep(-0.12, 0.0, d);
          vec2 w = vec2(abs(vP.x) - ${$.wheel.x.toFixed(3)}, vP.y - ${$.wheel.z.toFixed(3)});
          float wheel = exp(-(w.x * w.x) / 0.0006 - (w.y * w.y) / 0.0016);
          vec2 c = vP - vec2(0.0, ${$.caster.z.toFixed(3)});
          float caster = exp(-dot(c, c) / 0.0005);
          float a = clamp(body * 0.42 + core * 0.2 + wheel * 0.55 + caster * 0.4, 0.0, 0.85);
          vec2 cc = vP - vec2(0.0, ${$.chamber.z.toFixed(3)});
          vec3 glow = uGlow * exp(-dot(cc, cc) / 0.05) * smoothstep(-0.06, 0.06, d);
          vec2 pc = vP - vec2(0.0, 0.3);
          glow += uPlume * exp(-dot(pc, pc) / 0.03);
          gl_FragColor = vec4(glow, a);
        }`});let d=new W(new va(1.1,1.2).rotateX(-Math.PI/2),this.shadowMat);d.position.set(0,.0015,.02),d.renderOrder=-1,this.group.add(d),this.group.updateMatrixWorld(!0)}setPlacement(e,t,n){if(this.placed){let r=e-this.px,i=t-this.pz,a=n-this.pyaw;a-=Math.round(a/Pu)*Pu;let o=-r*Math.sin(this.pyaw)-i*Math.cos(this.pyaw);if(Math.abs(o)<.5&&Math.abs(a)<1){let e=$.wheel.x;this.spinL-=(o-e*a)/$.wheel.r,this.spinR-=(o+e*a)/$.wheel.r,this.writeWheels()}}this.placed=!0,this.px=e,this.pz=t,this.pyaw=n,this.group.position.set(e,0,t),this.group.rotation.set(0,n,0),this.group.updateMatrixWorld(!0)}inletPoint(e){return e.copy(jg).applyMatrix4(this.rig.matrixWorld)}inletDir(e){return e.copy(Ag).transformDirection(this.rig.matrixWorld)}latchWorld(e){return e.copy(this.padCenter).applyMatrix4(this.lid.matrixWorld)}deposit(e,t){this.flashes.spawn(e,t),this.chamber.deposit(e,t)}hitScore(e,t,n,r,i){let a=this.v1.copy(F_).applyMatrix4(this.rig.matrixWorld).project(n);if(a.z>1||a.z<-1)return 0;let o=(a.x*.5+.5)*r,s=(.5-a.y*.5)*i,c=this.v2.setFromMatrixColumn(n.matrixWorld,0).normalize(),l=this.v3.copy(F_).applyMatrix4(this.rig.matrixWorld).addScaledVector(c,I_).project(n),u=Math.hypot((l.x-a.x)*.5*r,(l.y-a.y)*.5*i),d=Math.max(u*1.4,36),f=Math.hypot(e-o,t-s);if(f>d)return 0;let p=.2+.8*(1-f/d),m=this.latchWorld(this.v1).project(n),h=(m.x*.5+.5)*r,g=(.5-m.y*.5)*i,_=Math.max(u*.5,30);return p+=1.5*Math.max(0,1-Math.hypot(e-h,t-g)/_),p}glow(e,t){return e.copy(P_).applyMatrix4(this.rig.matrixWorld),this.plumeShare>0&&(this.v2.copy(Ng).setY(Ng.y+.25).applyMatrix4(this.group.matrixWorld),e.lerp(this.v2,this.plumeShare)),t.copy(this.col),this.glowI}openLid(){this.lidMode=`open`,this.lidTarget=D_,this.lidVel+=2.2}setDrain(e){this.drain=Au(e)}resetAfterFinale(){this.lidMode=`closing`,this.lidTarget=0,this.drain=0,this.drainSent=0,this.drainBeads=0,this.fill=0,this.popTimer=0,this.wasFull=!1,this.chamber.clear()}update(e,t){let n=e.t,r=e.dt,i=Math.max(t.color.r,t.color.g,t.color.b);if(i>1e-4){this.col.setRGB(t.color.r/i,t.color.g/i,t.color.b/i).getHSL(this.hsl),this.col.setHSL(this.hsl.h,Math.max(this.hsl.s,.35+.5*this.hsl.s),.55);let e=Math.max(this.col.r,this.col.g,this.col.b);this.col.multiplyScalar(1/e)}else this.col.copy(N_);let a=Math.max(0,t.fullness)*(1-this.drain);this.fill=Mu(this.fill,a,a>this.fill?2.2:3.5,r);let o=this.fill,s=Math.min(1,o/.72)**.8,c=X(.2,.62,o),l=(.75+1.5*X(.15,.95,o))*(1+.35*t.intake),u=X(.28,.92,o),d=X(.3,1,o),f=X(.58,.8,o),p=X(.6,.78,o),m=X(.8,.93,o),h=X(.8,.84,o)*(1-X(.95,.985,o)),g=X(.945,.985,o),_=Au(this.lidAngle/.4),v=X(.95,1,o)*(1-_)*(1-this.drain),y=.5+.5*Math.sin(n*Pu*.8),b=t.fullness>=1&&this.lidMode===`closed`&&this.drain===0;this.lidMode===`closed`&&(this.lidTarget=b?O_:0,b&&(this.wasFull||(this.popTimer=.5),this.popTimer-=r,this.popTimer<=0&&(this.lidVel+=k_,this.popFlash=1,this.popTimer=A_,this.onLatchPop?.()))),this.wasFull=b,this.stepLid(r),this.lid.rotation.x=-this.lidAngle,this.popFlash=Math.max(0,this.popFlash-r*1.6),this.lift=Mu(this.lift,+(this.lidMode===`open`),1.4,r);let x=t.motor,S=(Math.sin(n*93.1)*3e-4+Math.sin(n*151.7)*2e-4)*x,C=Math.sin(n*117.3)*25e-5*x,w=Math.sin(n*103.9)*.0018*x,T=Math.sin(n*87.7)*.0022*x;if(h>.01&&(this.trembleIn-=r,this.trembleIn<=0&&(this.trembleAge=0,this.trembleIn=1.5+Math.random()*2.6)),this.trembleAge+=r,this.trembleAge<.5){let e=Math.sin(Math.PI*this.trembleAge/.5)*h;S+=Math.sin(n*61)*.0028*e,C+=Math.abs(Math.sin(n*70))*.0018*e,w+=Math.sin(n*47)*.012*e,T+=Math.sin(n*53)*.02*e}let E=1+.025*g*Math.sin(n*Pu*.35);this.rig.position.set(S,C,0),this.rig.rotation.set(w,0,T),this.rig.scale.setScalar(E);let D=this.hull.uniforms;D.uLeakColor.value.copy(this.col),D.uSeamGlow.value=f*(1.05+.35*y)*(1-.4*v),D.uVentGlow.value=p*.7+m*1.8;let O=s*l;D.uChamberLight.value.copy(this.col).multiplyScalar(.04*O+.06*c*l),this.shroudMat.emissive.copy(this.col).multiplyScalar(.06*O+.1*c*l);let k=this.bag.uniforms;k.uInflate.value=u,k.uTrans.value=d*(.25+.6*l),k.uGlowColor.value.copy(this.col),k.uFlutter.value=x*(.4+t.intake)*(1-u*.7),k.uTimeB.value=n;let A=v*(.65+.35*y)+this.popFlash*.6*v;this.latchMat.emissive.copy(M_).multiplyScalar(A*1.3),this.rimMat.color.copy(M_).lerp(this.col,.25).multiplyScalar(A*1.6),this.rimGlow.visible=A>.003,this.haloMat.uniforms.uTime.value=n,this.haloMat.uniforms.uI.value=A*1.5,this.halo.visible=A>.003,this.renderer.getDrawingBufferSize(this.v2d),this.viewH.value=this.v2d.y,this.chamber.update(n,r,{count:s,bright:l,gas:c,level:X(0,1,o),swirl:(.3+.7*x)*(1+.6*t.intake)*(1+.5*o),drain:this.drain,lift:this.lift,lidAngle:this.lidAngle,leak:Math.max(v*(.7+.3*y)+this.popFlash,this.lidMode===`open`?1-this.drain:0),fallback:this.col}),this.drain>this.drainSent&&(this.drainBeads+=(this.drain-this.drainSent)*j_,this.drainSent=this.drain);for(let e=0;this.drainBeads>=1&&e<2;e++)--this.drainBeads,this.flashes.spawn(this.chamber.sampleColor(Math.random(),this.col,this.beadCol),.8,!0);let j=this.flashes.update(r),ee=.5-.5*Math.sin(n*Pu*.35);this.plume.update(n,{thread:p,column:m*(1-g*(.7-.35*ee)),color:this.col});let M=this.shadowMat.uniforms;M.uGlow.value.copy(this.col).multiplyScalar(.06*O+.05*c),M.uPlume.value.copy(this.col).multiplyScalar(.12*m),this.glowI=.35*O+.1*c+.8*this.plume.strength+.25*A+.15*j,this.plumeShare=this.plume.strength/Math.max(.001,this.plume.strength+.5*O),this.group.updateMatrixWorld(!0)}stepLid(e){let t=this.lidMode,n=t===`open`?55:t===`closing`?14:170,r=t===`open`?4.2:t===`closing`?7.5:6.5,i=Math.max(1,Math.ceil(e/(1/120))),a=e/i;for(let e=0;e<i;e++)this.lidVel+=(-n*(this.lidAngle-this.lidTarget)-r*this.lidVel)*a,this.lidAngle+=this.lidVel*a,this.lidAngle<0&&(this.lidAngle=0,this.lidVel=-this.lidVel*.25);t===`closing`&&this.lidAngle<.002&&Math.abs(this.lidVel)<.01&&(this.lidMode=`closed`)}writeWheels(){let e=$.wheel;for(let t=0;t<2;t++){let n=t===0?-1:1;this.e.set(t===0?this.spinL:-this.spinR,t===0?0:Math.PI,0,`YXZ`),this.q.setFromEuler(this.e),this.m4.compose(this.v1.set(n*e.x,e.r,e.z),this.q,this.one),this.tires.setMatrixAt(t,this.m4),this.hubs.setMatrixAt(t,this.m4)}this.tires.instanceMatrix.needsUpdate=!0,this.hubs.instanceMatrix.needsUpdate=!0}},R_=5,z_=`
uniform sampler2D uHose;
uniform float uHoseN;
uniform float uHoseLen;
vec4 hoseRow(float u, int row) {
  float x = clamp(u, 0.0, 1.0) * (uHoseN - 1.0);
  float i0 = floor(x);
  float f = x - i0;
  int a = int(i0);
  int b = int(min(i0 + 1.0, uHoseN - 1.0));
  return mix(texelFetch(uHose, ivec2(a, row), 0), texelFetch(uHose, ivec2(b, row), 0), f);
}
`,B_=30,V_=-9.8,H_=.13,U_=.075,W_=.2,G_=.075,K_=.02,q_=.3,J_=4,Y_=9,X_=3.6,Z_=.019,Q_=class e{constructor(t,n,r,i,a){Z(this,`length`,Su.length),Z(this,`samples`,Su.samples),Z(this,`group`,new Rn),Z(this,`texture`,void 0),Z(this,`pos`,void 0),Z(this,`tan`,void 0),Z(this,`curvDir`,void 0),Z(this,`kappa`,void 0),Z(this,`disp`,void 0),Z(this,`light`,void 0),Z(this,`lightCol`,void 0),Z(this,`flowDir`,1),Z(this,`tension`,0),Z(this,`uniforms`,void 0),Z(this,`x`,new Float32Array(90)),Z(this,`px`,new Float32Array(90)),Z(this,`seg`,void 0),Z(this,`data`,void 0),Z(this,`dense`,void 0),Z(this,`denseLen`,void 0),Z(this,`denseN`,void 0),Z(this,`frameN`,new B(0,1,0)),Z(this,`blockers`,Tu()),Z(this,`tubeFront`,void 0),Z(this,`tubeBack`,void 0),Z(this,`shadowStrip`,void 0),Z(this,`bodyCol`,new B),Z(this,`bodyColR`,.3),Z(this,`minChord`,new Float32Array(B_)),Z(this,`stiff`,new Float32Array(B_));let o=this.samples;this.seg=this.length/29,this.pos=new Float32Array(o*3),this.tan=new Float32Array(o*3),this.curvDir=new Float32Array(o*3),this.kappa=new Float32Array(o),this.disp=new Float32Array(o),this.light=new Float32Array(o),this.lightCol=new Float32Array(o*3),this.data=new Float32Array(o*R_*4),this.texture=new gi(this.data,o,R_,M,w),this.texture.minFilter=this.texture.magFilter=f,this.texture.generateMipmaps=!1,this.texture.needsUpdate=!0,this.uniforms={uHose:{value:this.texture},uHoseN:{value:o},uHoseLen:{value:this.length}},this.denseN=233,this.dense=new Float32Array(this.denseN*3),this.denseLen=new Float32Array(this.denseN);for(let e=1;e<29;e++){let t=29-e,n=H_,r=G_;t<=3||e<=2?(n=W_,r=q_):t>=J_&&t<Y_&&(n=U_,r=K_),this.minChord[e]=2*this.seg*Math.cos(Math.min(1.2,this.seg/n)/2),this.stiff[e]=r}this.initRope(n,r,i,a);for(let e=0;e<150;e++)this.simulate(1/60,n,r,i,a);this.resample();let s=t.quality,c=e.tubeGeometry(s.hoseTubular,s.hoseRadial);this.tubeBack=new W(c,this.makeMaterial(!0)),this.tubeFront=new W(c,this.makeMaterial(!1)),this.tubeBack.frustumCulled=this.tubeFront.frustumCulled=!1,this.tubeBack.renderOrder=10,this.tubeFront.renderOrder=30,this.shadowStrip=new W(e.stripGeometry(96),this.makeShadowMaterial()),this.shadowStrip.frustumCulled=!1,this.shadowStrip.renderOrder=-1,this.group.add(this.shadowStrip,this.tubeBack,this.tubeFront)}setBodyCollider(e,t){this.bodyCol.copy(e),this.bodyColR=t}initRope(e,t,n,r){let i=Su.radius,a=.16,o=e.x+t.x*a,s=e.z+t.z*a,c=n.x+r.x*a,l=n.z+r.z*a,u=c-o,d=l-s,f=Math.max(.001,Math.hypot(u,d)),p=Math.max(f*1.001,this.length-2*a-.1),m=.001,h=Math.PI*.94;for(let e=0;e<40;e++){let e=(m+h)/2;Math.sin(e)/e>f/p?m=e:h=e}let g=(m+h)/2,_=p/(2*g),v=-d/f,y=u/f,b=(o+c)/2,x=(s+l)/2,S=v*(t.x+r.x)+y*(t.z+r.z),C=v*(0-b)+y*(-.4-x);(Math.abs(S)>.15?S:C)<0&&(v=-v,y=-y);let w=b-v*_*Math.cos(g),T=x-y*_*Math.cos(g),E=Math.atan2(s-T,o-w),D=Math.atan2(y,v)-E;D=Math.atan2(Math.sin(D),Math.cos(D));let O=E+Math.sign(D||1)*2*g;for(let a=0;a<B_;a++){let o=a/29,s=a*3,c,l,u;if(a<=1||a>=28){let i=a<=1?e:n,o=a<=1?t:r,s=a===0||a===29?0:this.seg*.95;c=i.x+o.x*s,l=i.y+o.y*s,u=i.z+o.z*s}else{let e=E+(O-E)*o;c=w+Math.cos(e)*_,u=T+Math.sin(e)*_,l=i+.02}this.x[s]=this.px[s]=c,this.x[s+1]=this.px[s+1]=l,this.x[s+2]=this.px[s+2]=u}}update(e,t,n,r,i){let a=Math.min(e,1/30)/2;this.simulate(a,t,n,r,i),this.simulate(a,t,n,r,i),this.resample()}pin(e,t,n,r){let i=e*3;this.x[i]=t.x+(n?n.x*r:0),this.x[i+1]=t.y+(n?n.y*r:0),this.x[i+2]=t.z+(n?n.z*r:0)}simulate(e,t,n,r,i){let a=this.x,o=this.px,s=Su.radius,c=V_*e*e;for(let e=2;e<28;e++){let t=e*3,n=a[t+1]<=s+.004+(Du(a[t],a[t+2])?q.pile*.6:0)?.9:.985;for(let e=0;e<3;e++){let r=(a[t+e]-o[t+e])*n;o[t+e]=a[t+e],a[t+e]+=r+(e===1?c:0)}}let l=this.seg,u=l*.95;for(let e=0;e<14;e++){this.pin(0,t,null,0),this.pin(1,t,n,u),this.pin(29,r,null,0),this.pin(28,r,i,u);for(let e=1;e<29;e++)this.straighten(e,this.stiff[e]);for(let e=0;e<29;e++)this.constrain(e,e+1,l,!1);for(let e=0;e<28;e++)this.constrain(e,e+2,this.minChord[e+1],!0);e&1&&this.selfCollide();for(let e=2;e<28;e++){let t=e*3,n=Du(a[t],a[t+2])?s+q.pile*.6:s;if(a[t+1]<n&&(a[t+1]=n),e<25){let e=a[t]-this.bodyCol.x,n=a[t+2]-this.bodyCol.z,r=Math.hypot(e,n),i=this.bodyColR+s;if(r<i&&a[t+1]<.42){let o=(i-r)/Math.max(r,1e-4);a[t]+=e*o,a[t+2]+=n*o}}if(e>5)for(let e of this.blockers){let n=a[t]-e.cx,r=a[t+2]-e.cz,i=e.hw+s-Math.abs(n),o=e.hd+s-Math.abs(r);i>0&&o>0&&a[t+1]<.5&&(i<o?a[t]+=Math.sign(n)*i:a[t+2]+=Math.sign(r)*o)}a[t]=Math.min(K.maxX-s,Math.max(K.minX+s,a[t])),a[t+2]=Math.min(K.maxZ-s,Math.max(K.minZ+s,a[t+2]))}}this.pin(0,t,null,0),this.pin(1,t,n,u),this.pin(29,r,null,0),this.pin(28,r,i,u);for(let e=2;e<28;e++){let t=e*3;a[t+1]<=s+.003+(Du(a[t],a[t+2])?q.pile*.6:0)&&(o[t]+=(a[t]-o[t])*.35,o[t+2]+=(a[t+2]-o[t+2])*.35)}let d=t.x-r.x,f=t.z-r.z,p=Math.hypot(d,f);this.tension=Math.max(0,(p-this.length*.72)/(this.length*.2))}straighten(e,t){let n=this.x,r=(e-1)*3,i=e*3,a=(e+1)*3,o=e-1<=1||e-1>=28,s=e<=1||e>=28,c=e+1<=1||e+1>=28,l=1/3,u=2/3,d=1/3;if(s){if(o||c)return;l=d=1,u=0}else o&&c?(l=d=0,u=1):o?(l=0,d=2/3):c&&(d=0,l=2/3);for(let e=0;e<3;e++){let o=((n[r+e]+n[a+e])*.5-n[i+e])*t;n[i+e]+=o*u,n[r+e]-=o*l,n[a+e]-=o*d}}selfCollide(){let e=this.x,t=2*Su.radius*1.04,n=t*t;for(let r=0;r<27;r++){let i=r*3,a=r<=1;for(let o=r+3;o<B_;o++){let r=o*3,s=e[r]-e[i],c=e[r+1]-e[i+1],l=e[r+2]-e[i+2],u=s*s+c*c+l*l;if(u>=n)continue;let d=o>=28;if(a&&d)continue;let f=Math.sqrt(u)+1e-6,p=(t-f)/f,m=a?0:d?1:.5,h=d?0:a?1:.5;e[i]-=s*p*m,e[i+1]-=c*p*m,e[i+2]-=l*p*m,e[r]+=s*p*h,e[r+1]+=c*p*h,e[r+2]+=l*p*h}}}constrain(e,t,n,r){let i=this.x,a=e*3,o=t*3,s=i[o]-i[a],c=i[o+1]-i[a+1],l=i[o+2]-i[a+2],u=Math.sqrt(s*s+c*c+l*l)+1e-6;if(r&&u>=n)return;let d=(u-n)/u,f=e<=1||e>=28,p=t<=1||t>=28;if(f&&p)return;let m=f?0:p?1:.5,h=p?0:f?1:.5,g=r?.5:1;i[a]+=s*d*m*g,i[a+1]+=c*d*m*g,i[a+2]+=l*d*m*g,i[o]-=s*d*h*g,i[o+1]-=c*d*h*g,i[o+2]-=l*d*h*g}resample(){let e=this.x,t=this.dense,n=this.denseLen,r=0;for(let n=0;n<29;n++){let i=Math.max(0,n-1)*3,a=n*3,o=(n+1)*3,s=Math.min(29,n+2)*3,c=n===28?9:8;for(let n=0;n<c;n++){let c=n/8,l=c*c,u=l*c;for(let n=0;n<3;n++){let d=e[i+n],f=e[a+n],p=e[o+n],m=e[s+n];t[r*3+n]=.5*(2*f+(-d+p)*c+(2*d-5*f+4*p-m)*l+(-d+3*f-3*p+m)*u)}r++}}n[0]=0;for(let e=1;e<r;e++){let r=t[e*3]-t[e*3-3],i=t[e*3+1]-t[e*3-2],a=t[e*3+2]-t[e*3-1];n[e]=n[e-1]+Math.sqrt(r*r+i*i+a*a)}let i=n[r-1],a=this.samples,o=this.pos,s=0;for(let e=0;e<a;e++){let c=e/(a-1)*i;for(;s<r-2&&n[s+1]<c;)s++;let l=(c-n[s])/Math.max(1e-6,n[s+1]-n[s]);for(let n=0;n<3;n++)o[e*3+n]=t[s*3+n]+(t[(s+1)*3+n]-t[s*3+n])*l}let c=i/(a-1),l=this.tan;for(let e=0;e<a;e++){let t=Math.max(0,e-1),n=Math.min(a-1,e+1),r=o[n*3]-o[t*3],i=o[n*3+1]-o[t*3+1],s=o[n*3+2]-o[t*3+2],c=Math.sqrt(r*r+i*i+s*s)+1e-9;r/=c,i/=c,s/=c,l[e*3]=r,l[e*3+1]=i,l[e*3+2]=s}let u=this.kappa,d=this.curvDir;for(let e=0;e<a;e++){let t=Math.max(0,e-2),n=Math.min(a-1,e+2),r=l[n*3]-l[t*3],i=l[n*3+1]-l[t*3+1],o=l[n*3+2]-l[t*3+2],s=Math.sqrt(r*r+i*i+o*o);u[e]=s/Math.max(1e-6,(n-t)*c),s>1e-4?(d[e*3]=r/s,d[e*3+1]=i/s,d[e*3+2]=o/s):e>0?(d[e*3]=d[e*3-3],d[e*3+1]=d[e*3-2],d[e*3+2]=d[e*3-1]):(d[0]=0,d[1]=1,d[2]=0)}let f=this.disp;for(let e=0;e<a;e++)f[e]=u[e];for(let e=1;e<a-1;e++)u[e]=.25*f[e-1]+.5*f[e]+.25*f[e+1];let p=Math.exp(-c/.09),m=e=>{let t=Math.min(1,Math.max(0,(e-X_)/5.9));return t*t*(3-2*t)};if(this.flowDir>0){let e=0;for(let t=0;t<a;t++)e=Math.max(m(u[t]),e*p),f[t]=e}else{let e=0;for(let t=a-1;t>=0;t--)e=Math.max(m(u[t]),e*p),f[t]=e}let h=this.data,g=a*4,_=this.frameN;_.set(0,1,0);for(let e=0;e<a;e++){let t=l[e*3],n=l[e*3+1],r=l[e*3+2],s=_.x*t+_.y*n+_.z*r;_.set(_.x-t*s,_.y-n*s,_.z-r*s),_.lengthSq()<1e-8&&_.set(n,-t,0),_.normalize();let c=e*4;h[c]=o[e*3],h[c+1]=o[e*3+1],h[c+2]=o[e*3+2],h[c+3]=u[e],h[g+c]=t,h[g+c+1]=n,h[g+c+2]=r,h[g+c+3]=f[e],h[2*g+c]=_.x,h[2*g+c+1]=_.y,h[2*g+c+2]=_.z,h[3*g+c]=d[e*3],h[3*g+c+1]=d[e*3+1],h[3*g+c+2]=d[e*3+2],h[3*g+c+3]=e/(a-1)*i}this.uniforms.uHoseLen.value=i}commitLight(){let e=this.data,t=this.samples,n=t*4;for(let r=0;r<t;r++){let t=r*4;e[2*n+t+3]=this.light[r],e[4*n+t]=this.lightCol[r*3],e[4*n+t+1]=this.lightCol[r*3+1],e[4*n+t+2]=this.lightCol[r*3+2]}this.texture.needsUpdate=!0}pointAt(e,t){let n=this.samples,r=Math.min(1,Math.max(0,e))*(n-1),i=Math.min(n-2,Math.floor(r)),a=r-i,o=this.pos;return t.set(o[i*3]+(o[i*3+3]-o[i*3])*a,o[i*3+1]+(o[i*3+4]-o[i*3+1])*a,o[i*3+2]+(o[i*3+5]-o[i*3+2])*a)}get currentLength(){return this.uniforms.uHoseLen.value}static tubeGeometry(e,t){let n=(e+1)*(t+1),r=new Float32Array(n*2),i=new Float32Array(n*3),a=0;for(let n=0;n<=e;n++)for(let i=0;i<=t;i++)r[a*2]=n/e,r[a*2+1]=i/t*Math.PI*2,a++;let o=[];for(let n=0;n<e;n++)for(let e=0;e<t;e++){let r=n*(t+1)+e,i=r+t+1;o.push(r,i,r+1,i,i+1,r+1)}let s=new Wr;return s.setAttribute(`position`,new U(i,3)),s.setAttribute(`aTube`,new U(r,2)),s.setIndex(o),s}static stripGeometry(e){let t=(e+1)*2,n=new Float32Array(t*2);for(let t=0;t<=e;t++)n[t*4]=t/e,n[t*4+1]=-1,n[t*4+2]=t/e,n[t*4+3]=1;let r=[];for(let t=0;t<e;t++){let e=t*2;r.push(e,e+1,e+2,e+1,e+3,e+2)}let i=new Wr;return i.setAttribute(`position`,new U(new Float32Array(t*3),3)),i.setAttribute(`aStrip`,new U(n,2)),i.setIndex(r),i}makeMaterial(e){return new ja({transparent:!0,depthWrite:!1,side:+!!e,blending:5,blendSrc:201,blendDst:205,uniforms:{...this.uniforms,uTime:Xu.uTime,uRadius:{value:Su.radius},uRib:{value:Z_},uBack:{value:+!!e},uLampPos:{value:new B(gu.x,gu.h-.15,gu.z)},uWinDir:{value:new B((du.x0+du.x1)/2,1.6,K.minZ).normalize()},uLightField:Xu.uLightField,uLightFieldRect:Xu.uLightFieldRect,uLightFieldGain:Xu.uLightFieldGain,uAuroraAmbient:Xu.uAuroraAmbient,uAuroraCeiling:Xu.uAuroraCeiling},vertexShader:`
        ${z_}
        uniform float uRadius;
        attribute vec2 aTube;
        varying vec3 vWorld;
        varying vec3 vNormal;
        varying vec3 vTan;
        varying float vS;
        varying vec4 vLight;
        varying float vDisp;
        varying float vCurvSide;
        void main() {
          float u = aTube.x;
          vec4 p = hoseRow(u, 0);
          vec4 t = hoseRow(u, 1);
          vec4 n = hoseRow(u, 2);
          vec4 k = hoseRow(u, 3);
          vec3 T = normalize(t.xyz);
          vec3 N = normalize(n.xyz - T * dot(n.xyz, T));
          vec3 B = cross(T, N);
          float th = aTube.y;
          vec3 radial = cos(th) * N + sin(th) * B;
          // light travelling inside makes the soft hose bulge a little (a visible "gulp")
          float r = uRadius * (1.0 + 0.16 * clamp(n.w * 0.45, 0.0, 1.0));
          // taper into the cuffs so the ends tuck inside them
          r *= mix(0.9, 1.0, smoothstep(0.0, 0.03, u) * (1.0 - smoothstep(0.97, 1.0, u)));
          vec3 pos = p.xyz + radial * r;
          vWorld = pos;
          vNormal = radial;
          vTan = T;
          vS = k.w;
          vLight = vec4(hoseRow(u, 4).rgb, n.w);
          vDisp = t.w;
          vCurvSide = dot(radial, k.xyz);
          gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
        }`,fragmentShader:`
        ${zu}
        ${pp}
        uniform float uBack;
        uniform float uTime;
        uniform float uRib;
        uniform vec3 uLampPos;
        uniform vec3 uWinDir;
        varying vec3 vWorld;
        varying vec3 vNormal;
        varying vec3 vTan;
        varying float vS;
        varying vec4 vLight;
        varying float vDisp;
        varying float vCurvSide;
        void main() {
          vec3 T = normalize(vTan);
          vec3 n0 = normalize(vNormal);
          // corrugation, shaded per pixel; fades out before a rib gets smaller than ~3 px
          float ph = vS * 6.2831853 / uRib;
          float ribVis = 1.0 - smoothstep(0.2, 0.45, fwidth(vS) / uRib);
          float crest = (0.5 + 0.5 * cos(ph)) * ribVis;
          vec3 n = normalize(n0 - T * (sin(ph) * 0.5 * ribVis));
          float back = step(0.5, uBack);
          if (back > 0.5) { n = -n; n0 = -n0; }
          vec3 V = normalize(cameraPosition - vWorld);
          float ndv = clamp(abs(dot(n, V)), 0.0, 1.0);
          float fres = pow(1.0 - ndv, 2.4);
          float rim = pow(1.0 - clamp(abs(dot(n0, V)), 0.0, 1.0), 3.0);
          // clear resin speculars: warm lamp + cool window; the ribs break them into glints
          vec3 Ll = normalize(uLampPos - vWorld);
          float sl = pow(max(dot(n, normalize(Ll + V)), 0.0), 110.0);
          vec3 W = normalize(uWinDir);
          float sw = pow(max(dot(n, normalize(W + V)), 0.0), 70.0);
          vec3 spec = sl * vec3(2.6, 1.7, 1.0) + sw * vec3(0.5, 0.7, 1.25);
          // a long, soft reflection of the window / ceiling along the top of the tube
          vec3 R = reflect(-V, n);
          float env = smoothstep(0.35, 0.95, R.y) * 0.1 + pow(max(dot(R, W), 0.0), 10.0) * 0.4;
          vec3 envCol = vec3(0.4, 0.55, 0.85) * env + uAuroraCeiling * smoothstep(0.2, 0.9, R.y) * 0.8;
          spec = (spec + envCol) * mix(1.0, 0.25, back) * (0.7 + 0.6 * crest);
          // ambient + aurora bounce reflected in the resin
          vec3 amb = vec3(0.07, 0.09, 0.13) + auroraBounce(vWorld, n, 1.2) * 0.35;
          // light travelling inside: the wall scatters it, strongest at the rims (fiber-optic)
          // and on the rib crests, so a passing packet lights up the corrugation around it
          // (soft-saturated so the dense finale stream doesn't blow the wall out)
          float L = vLight.a / (1.0 + 0.12 * vLight.a);
          vec3 lc = vLight.rgb;
          vec3 inner = lc * L * (0.04 + 0.34 * rim) * (0.65 + 1.1 * crest) * mix(0.6, 1.2, back);
          float Lg = L / (1.0 + 0.3 * L);
          // tight bends: light hits the outer wall — spectral glints on the crests there
          float outer = clamp(-vCurvSide, 0.0, 1.0);
          float tS = clamp(0.5 + 0.5 * vCurvSide + 0.12 * cos(ph * 0.5 + uTime * 6.0), 0.0, 1.0);
          vec3 glint = spectrum(tS) * vDisp * (Lg * (0.15 + 1.1 * outer * outer) * (0.35 + 1.4 * crest) + 0.03);
          float alpha = clamp(0.06 + 0.6 * fres, 0.0, 0.8) * mix(1.0, 0.55, back);
          vec3 col = amb * alpha * 2.0 + spec + inner + glint * mix(1.0, 0.6, back);
          gl_FragColor = vec4(max(col, 0.0), alpha);
        }`})}makeShadowMaterial(){return new ja({transparent:!0,depthWrite:!1,side:2,uniforms:{...this.uniforms,uRadius:{value:Su.radius},uRug:{value:new an(q.cx,q.cz,q.w/2,q.d/2)},uPile:{value:q.pile}},vertexShader:`
        ${z_}
        uniform float uRadius;
        uniform vec4 uRug;
        uniform float uPile;
        attribute vec2 aStrip;
        varying float vSide;
        varying float vFade;
        varying float vContact;
        void main() {
          vec4 p = hoseRow(aStrip.x, 0);
          vec3 T = normalize(hoseRow(aStrip.x, 1).xyz);
          vec3 side = normalize(vec3(-T.z, 0.0, T.x) + 1e-5);
          vec4 rug = uRug;
          float onRug = step(abs(p.x - rug.x), rug.z) * step(abs(p.z - rug.y), rug.w);
          float base = 0.0025 + onRug * (uPile + 0.004);
          float h = max(p.y - uRadius - onRug * uPile * 0.6, 0.0);
          float w = uRadius * (1.25 + h * 3.0);
          vec3 pos = vec3(p.x, base, p.z) + side * aStrip.y * w;
          vSide = aStrip.y;
          // light passing through the hose washes out its own shadow
          vFade = exp(-h * 5.0) * (1.0 - clamp(hoseRow(aStrip.x, 2).w * 0.6, 0.0, 0.85));
          vContact = 1.0 - smoothstep(0.0, 0.03, h);
          gl_Position = projectionMatrix * viewMatrix * vec4(pos, 1.0);
        }`,fragmentShader:`
        varying float vSide;
        varying float vFade;
        varying float vContact;
        void main() {
          // soft penumbra + a tighter dark line where the tube touches the floor
          float a = (exp(-vSide * vSide * 2.8) * 0.42 + exp(-vSide * vSide * 16.0) * 0.3 * vContact) * vFade;
          gl_FragColor = vec4(0.0, 0.0, 0.0, a);
        }`})}},$_=class{constructor(){Z(this,`total`,0),Z(this,`capacity`,78),Z(this,`rare`,0),Z(this,`bins`,new Float32Array(12)),Z(this,`bySurface`,new Float32Array(5)),Z(this,`rgb`,new B),Z(this,`rate`,0),Z(this,`recent`,0)}add(e,t,n,r,i=!1){if(!(e>0))return;this.total+=e,this.recent+=e,this.bySurface[r]+=e,i&&(this.rare+=e);let a=Math.min(11,Math.max(0,Math.floor(n*12)));this.bins[a]+=e*(i?.4:1),this.rgb.x+=t.r*e,this.rgb.y+=t.g*e,this.rgb.z+=t.b*e}update(e){let t=this.recent/Math.max(e,.001);this.recent=0,this.rate+=(t-this.rate)*(1-Math.exp(-e*3))}get fullness(){return this.total/this.capacity}averageColor(e){if(this.total<=0)return e.setRGB(.3,.9,.8);let t=Math.max(this.rgb.x,this.rgb.y,this.rgb.z,1e-6);return e.setRGB(this.rgb.x/t,this.rgb.y/t,this.rgb.z/t)}palette(e=6){let t=[],n=0;for(let e=0;e<12;e++)n+=this.bins[e];for(let e=0;e<12;e++){let r=this.bins[e];r>n*.04&&t.push({hue:(e+.5)/12,w:r})}t.length===0&&t.push({hue:.15,w:1},{hue:.6,w:.6}),t.sort((e,t)=>t.w-e.w);let r=t.slice(0,e).sort((e,t)=>e.hue-t.hue),i=r.reduce((e,t)=>e+t.w,0);return{colors:r.map(e=>Lu(e.hue)),weights:r.map(e=>e.w/i),hues:r.map(e=>e.hue),rare:this.total>0?Math.min(1,this.rare/Math.max(1,this.total)*5):0}}sampleHue(e){let t=0;for(let e=0;e<12;e++)t+=this.bins[e];if(t<=0)return e;let n=0,r=e*t;for(let e=0;e<12;e++)if(n+=this.bins[e],n>=r){let t=this.bins[e]>0?1-(n-r)/this.bins[e]:.5;return(e+t)/12}return .5}reset(){this.total=0,this.rare=0,this.rate=0,this.recent=0,this.bins.fill(0),this.bySurface.fill(0),this.rgb.set(0,0,0),this.capacity=78}},ev=zt.degToRad(46),tv=.2,nv=.056,rv=.04,iv=class{swallowPulse(e){this.gulp=Math.min(1,this.gulp+e)}constructor(e){Z(this,`group`,new Rn),Z(this,`state`,void 0),Z(this,`target`,new B),Z(this,`head`,new Rn),Z(this,`sx`,{x:0,v:0}),Z(this,`sz`,{x:0,v:0}),Z(this,`sy`,{x:0,v:0}),Z(this,`targetOnSeat`,!1),Z(this,`yaw`,0),Z(this,`lean`,0),Z(this,`roll`,0),Z(this,`prevVel`,new B),Z(this,`mouthMat`,void 0),Z(this,`haloMat`,void 0),Z(this,`halo`,void 0),Z(this,`shadow`,void 0),Z(this,`neckEnd`,new Ln),Z(this,`neckStart`,new Ln),Z(this,`tmp`,[0,0]),Z(this,`v1`,new B),Z(this,`haloIdle`,0),Z(this,`gulp`,0),Z(this,`idleT`,0),Z(this,`wobble`,0),Z(this,`buzz`,0),Z(this,`intakeGlow`,0),Z(this,`intakeColor`,new H(.3,1,.85)),this.state={pos:new B(vu.nozzle.x,0,vu.nozzle.z),mouth:new B,forward:new B(0,0,-1),vel:new B,speed:0,air:0,grabbed:!1},this.sx.x=this.state.pos.x,this.sz.x=this.state.pos.z,this.target.copy(this.state.pos);let t=mp(new Na({color:15328215,roughness:.34,metalness:0}),{strength:1.1}),n=mp(new Na({color:1985877,roughness:.38,metalness:.05}),{strength:1}),r=mp(new Na({color:2369322,roughness:.82}),{strength:.8}),i=mp(new Na({color:2896180,roughness:.3,metalness:.2}),{strength:.9}),a=new W(new Fm(Cu.width,nv,Cu.depth,4,.024),t);a.castShadow=!0;let o=new W(new Fm(Cu.width*.72,.012,Cu.depth*.42,3,.005),n);o.position.set(0,.029,.008);let s=new W(new Fm(Cu.width+.008,.024,.03,3,.011),r);s.position.set(0,-.012,-Cu.depth/2+.012),this.mouthMat=new ja({uniforms:{uGlow:{value:0},uColor:{value:new H},uTime:Xu.uTime},vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform float uGlow; uniform vec3 uColor; uniform float uTime;
        varying vec2 vUv;
        void main() {
          float edge = smoothstep(0.0, 0.12, vUv.x) * (1.0 - smoothstep(0.88, 1.0, vUv.x));
          float flick = 0.85 + 0.15 * sin(uTime * 31.0 + vUv.x * 40.0);
          vec3 c = mix(vec3(0.05, 0.07, 0.08), uColor * (0.4 + 5.0 * uGlow * flick), clamp(0.25 + uGlow, 0.0, 1.0));
          gl_FragColor = vec4(c * edge + vec3(0.02) * (1.0 - edge), 1.0);
        }`});let c=new W(new va(Cu.width*.78,.02),this.mouthMat);c.rotation.x=-Math.PI/2,c.position.set(0,.029500000000000002,-Cu.depth/2+.026);let l=new Ui(.02,.02,.016,16);l.rotateZ(Math.PI/2);for(let e of[-1,1]){let t=new W(l,r);t.position.set(e*(Cu.width/2-.035),-.02,Cu.depth/2-.022),this.head.add(t)}let u=new W(new ba(.032,20,14),i);u.position.set(0,nv/2-.004,Cu.depth/2-.03);let d=new Ui(.026,.029,tv,20,1,!0);d.translate(0,tv/2,0);let f=new W(d,t);f.castShadow=!0,f.position.copy(u.position),f.rotation.x=Math.PI/2-ev;let p=new W(new Ui(.056,.056,.05,24,1,!0),n);p.position.set(0,.188,0);let m=new W(new xa(.052,.006,8,24),i);m.rotation.x=Math.PI/2,m.position.set(0,.21300000000000002,0),f.add(p,m),this.neckStart.position.set(0,.17,0),this.neckEnd.position.set(0,.21000000000000002,0),f.add(this.neckStart,this.neckEnd),this.head.add(a,o,s,c,u,f),this.head.position.y=rv,this.group.add(this.head),this.shadow=new W(new va(Cu.width*1.5,Cu.depth*2.3),new ja({transparent:!0,depthWrite:!1,uniforms:{},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);} `,fragmentShader:`varying vec2 vUv; void main(){ vec2 p = (vUv - 0.5) * 2.0; float d = dot(p, p); float a = exp(-d * 3.2) * 0.62; gl_FragColor = vec4(0.0, 0.0, 0.0, a); }`})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.0025,this.shadow.renderOrder=-1,this.group.add(this.shadow),this.haloMat=new ja({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:Xu.uTime,uIdle:{value:0},uAir:{value:0},uGrab:{value:0},uIntake:{value:0},uReach:{value:wu.reach},uColor:{value:new H(.45,.95,1)}},vertexShader:`varying vec2 vP; uniform float uReach; void main(){ vP = (uv - 0.5) * 2.0 * uReach; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);} `,fragmentShader:`
        uniform float uTime, uIdle, uAir, uGrab, uIntake, uReach; uniform vec3 uColor;
        varying vec2 vP;
        void main() {
          float r = length(vP);
          float breathe = 0.5 + 0.5 * sin(uTime * 2.4);
          // idle: a soft breathing pool of light under the head (diegetic, not a UI ring)
          float pool = exp(-r * r / (0.05 + 0.02 * breathe)) * (0.25 + 0.3 * breathe) * uIdle;
          float ring = pool + exp(-r * r / 0.03) * uGrab * 0.18;
          float ang = atan(vP.y, vP.x);
          // two inward-running spiral arms: the air swirls as it converges on the mouth
          float ph = fract(r * 4.2 + uTime * 1.35 + ang * 0.31831 + 0.12 * sin(ang * 3.0 + uTime));
          float rip = smoothstep(0.0, 0.08, ph) * (1.0 - smoothstep(0.08, 0.3, ph));
          // broken, wispy arcs rather than perfect rings
          rip *= 0.5 + 0.5 * sin(ang * 5.0 - r * 7.0 + uTime * 0.7);
          rip *= (1.0 - smoothstep(uReach * 0.3, uReach * 0.9, r)) * smoothstep(0.1, 0.24, r) * uAir;
          // the air shows more while it is actually carrying light
          float a = ring * 0.55 + rip * (0.016 + 0.022 * uIntake);
          gl_FragColor = vec4(max(uColor * a, 0.0), 1.0);
        }`}),this.halo=new W(new va(wu.reach*2,wu.reach*2),this.haloMat),this.halo.rotation.x=-Math.PI/2,this.halo.position.y=.006,this.halo.renderOrder=2,this.group.add(this.halo),this.syncTransform()}setTarget(e,t){this.targetOnSeat=Yd(e,t,.05),this.targetOnSeat?Zd(e,t,Cu.margin,!0,this.tmp):Kd(e,t,Cu.margin,this.tmp),this.target.set(this.tmp[0],this.targetOnSeat?Jd.y:0,this.tmp[1])}teleport(e,t){this.setTarget(e,t),this.sx.x=this.target.x,this.sz.x=this.target.z,this.sy.x=this.target.y,this.sx.v=this.sz.v=this.sy.v=0,this.syncTransform()}update(e,t){let n=this.state,r=n.grabbed?Cu.spring:Cu.spring*.55,i=this.target.x,a=this.target.z,o=Yd(this.sx.x,this.sz.x,.02),s=Jd.front+Cu.margin+.04,c=this.sx.x>Jd.x0-.06&&this.sx.x<Jd.x1+.06;this.targetOnSeat&&!o&&!c?(i=Math.min(Jd.x1,Math.max(Jd.x0,this.target.x)),a=s+.08):!this.targetOnSeat&&o&&this.target.z<s&&(i=Math.min(Jd.x1,Math.max(Jd.x0,this.sx.x)),a=s+.12),Nu(this.sx,i,r,e),Nu(this.sz,a,r,e);let l=Math.hypot(this.sx.v,this.sz.v);if(l>Cu.maxSpeed){let e=Cu.maxSpeed/l;this.sx.v*=e,this.sz.v*=e}let u=this.targetOnSeat&&c||o;Zd(this.sx.x,this.sz.x,Cu.margin,u,this.tmp),this.tmp[0]!==this.sx.x&&(this.sx.v*=.3),this.tmp[1]!==this.sz.x&&(this.sz.v*=.3),this.sx.x=this.tmp[0],this.sz.x=this.tmp[1],Nu(this.sy,Xd(this.sx.x,this.sz.x),22,e),this.sy.x<0&&(this.sy.x=0),this.prevVel.copy(n.vel),n.vel.set(this.sx.v,0,this.sz.v),n.speed=n.vel.length();let d=this.sx.x-t.x+n.vel.x*.35,f=this.sz.x-t.z+n.vel.z*.35;if(d*d+f*f>.04){let t=Math.atan2(-d,-f)-this.yaw;t=Math.atan2(Math.sin(t),Math.cos(t)),this.yaw+=t*(1-Math.exp(-e*5))}let p=(n.vel.x-this.prevVel.x)/Math.max(e,.001),m=(n.vel.z-this.prevVel.z)/Math.max(e,.001),h=-(p*Math.sin(this.yaw)+m*Math.cos(this.yaw)),g=p*Math.cos(this.yaw)-m*Math.sin(this.yaw);this.lean=Mu(this.lean,ku(-h*.012,-.12,.12),12,e),this.roll=Mu(this.roll,ku(g*.01,-.1,.1),12,e),this.gulp=Math.max(0,this.gulp-e*3.5),this.buzz=Mu(this.buzz,this.intakeGlow,this.intakeGlow>this.buzz?12:4,e),this.idleT+=e;let _=n.grabbed?0:Math.max(0,1-n.speed*8);this.wobble=Mu(this.wobble,_*n.air,3,e),this.syncTransform();let v=this.intakeGlow,y=this.mouthMat.uniforms;y.uGlow.value=Mu(y.uGlow.value,v,10,e),y.uColor.value.lerp(this.intakeColor,1-Math.exp(-e*6));let b=this.haloMat.uniforms;b.uIdle.value=Mu(b.uIdle.value,this.haloIdle,2.5,e),b.uAir.value=n.air,b.uGrab.value=Mu(b.uGrab.value,+!!n.grabbed,8,e),b.uIntake.value=this.buzz}syncTransform(){let e=this.state;e.pos.set(this.sx.x,this.sy.x,this.sz.x),this.group.position.copy(e.pos);let t=this.wobble,n=this.buzz*.012;this.head.rotation.set(this.lean+Math.sin(this.idleT*7.3)*.012*t+Math.sin(this.idleT*53)*n,this.yaw+Math.sin(this.idleT*1.9)*.035*t,this.roll+Math.sin(this.idleT*5.1+1)*.01*t+Math.sin(this.idleT*47+2)*n*.8,`YXZ`);let r=Math.sin(this.gulp*Math.PI)*this.gulp;this.head.scale.set(1+.07*r,1-.12*r,1+.07*r),this.halo.position.set(0,(Du(e.pos.x,e.pos.z)?q.pile+.006:.006)-e.pos.y,0),this.shadow.rotation.set(-Math.PI/2,0,this.yaw),e.forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),e.mouth.set(e.pos.x+e.forward.x*Cu.mouthForward,e.pos.y+.03,e.pos.z+e.forward.z*Cu.mouthForward),this.group.updateMatrixWorld(!0)}hoseAttach(e){return this.neckEnd.getWorldPosition(e)}hoseAttachDir(e){return this.neckEnd.getWorldPosition(e),this.neckStart.getWorldPosition(this.v1),e.sub(this.v1).normalize()}screenDistance(e,t,n,r,i){let a=this.v1.copy(this.state.pos);a.y=.05,a.project(n);let o=(a.x*.5+.5)*r,s=(-a.y*.5+.5)*i;return Math.hypot(o-e,s-t)}},av=110,ov=18,sv=3,cv=.58,lv=.3;function uv(e,t){let n=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};return t.setRGB(1-n(0,.55,e)+.35*n(.8,1,e),n(0,.4,e)*(1-n(.45,.85,e)),n(.35,.8,e))}var dv=class{constructor(e,t){Z(this,`hose`,void 0),Z(this,`group`,new Rn),Z(this,`packets`,[]),Z(this,`dir`,1),Z(this,`events`,{}),Z(this,`flux`,0),Z(this,`lead`,new B),Z(this,`bands`,void 0),Z(this,`mesh`,void 0),Z(this,`geo`,void 0),Z(this,`iPacket`,void 0),Z(this,`iBand`,void 0),Z(this,`iColor`,void 0),Z(this,`bandGain`,void 0),Z(this,`causticMesh`,void 0),Z(this,`causticAttr`,void 0),Z(this,`causticGlow`,new Float32Array(sv)),Z(this,`causticIdx`,new Int32Array(sv).fill(-1)),Z(this,`siteFound`,new Int32Array(8)),Z(this,`tmpC`,new H),Z(this,`v1`,new B),Z(this,`m4`,new un),Z(this,`seedCounter`,0),this.hose=t,this.bands=e.quality.spectralBands;for(let e=0;e<av;e++)this.packets.push({alive:!1,s:0,v:0,amount:0,color:new H,hue:0,surface:0,rare:!1,clump:!1,len0:.1,len:.1,sparkled:0,seed:0});this.bandGain=new Float32Array(av*this.bands);let n=new Float32Array(76);for(let e=0;e<=ov;e++){let t=(e/ov)**1.35;n[e*4]=t,n[e*4+1]=-1,n[e*4+2]=t,n[e*4+3]=1}let r=[];for(let e=0;e<ov;e++){let t=e*2;r.push(t,t+1,t+2,t+1,t+3,t+2)}let i=new So;i.setAttribute(`position`,new U(new Float32Array(114),3)),i.setAttribute(`aStrip`,new U(n,2)),i.setIndex(r);let a=av*this.bands;this.iPacket=new _i(new Float32Array(a*4),4).setUsage(et),this.iBand=new _i(new Float32Array(a*4),4).setUsage(et),this.iColor=new _i(new Float32Array(a*3),3).setUsage(et),i.setAttribute(`iPacket`,this.iPacket),i.setAttribute(`iBand`,this.iBand),i.setAttribute(`iColor`,this.iColor),i.instanceCount=0,this.geo=i;let o=new ja({transparent:!0,depthWrite:!1,side:2,blending:2,uniforms:{...t.uniforms,uTime:Xu.uTime,uInnerR:{value:Su.innerRadius},uDir:{value:1},uBands:{value:this.bands},uFanW:{value:cv}},vertexShader:`
        ${z_}
        uniform float uInnerR;
        uniform float uDir;
        uniform float uTime;
        uniform float uBands;
        uniform float uFanW;
        attribute vec2 aStrip;
        attribute vec4 iPacket; // head s, streak length, half-width, seed
        attribute vec4 iBand;   // band t (0 red..1 violet), spectral gain, rare, clump
        attribute vec3 iColor;  // merged color share (packet color * intensity / bands)
        varying vec3 vColor;
        varying float vGain;
        varying float vAcross;
        varying float vAlong;
        varying float vFade;
        varying float vSpread;
        varying float vBandT;
        varying float vHueSpan;
        varying float vRare;
        void main() {
          float along = aStrip.x;
          float s = iPacket.x - along * iPacket.y * uDir;
          float u = s / uHoseLen;
          float inside = step(0.0, u) * step(u, 1.0);
          vec4 p = hoseRow(u, 0);
          vec4 t = hoseRow(u, 1);
          vec4 k = hoseRow(u, 3);
          vec3 T = normalize(t.xyz);
          vec3 K = k.xyz - T * dot(k.xyz, T);
          K /= max(length(K), 1e-4);
          float spread = t.w;
          vec3 view = normalize(cameraPosition - p.xyz);
          vec3 side = cross(T, view);
          side /= max(length(side), 1e-4);
          vec3 up = cross(side, T);
          // the fan opens across the tube as the camera sees it; light presses against the
          // outer wall of the bend (red outermost, violet innermost)
          float ks = dot(K, side);
          float outer = ks > 0.0 ? -1.0 : 1.0;
          float off = iBand.x * 2.0 - 1.0;
          float hug = 0.3 * spread * abs(ks);
          float across = outer * (hug - off * uFanW * spread);
          float twist = sin(iPacket.w * 6.2831 + uTime * 3.0 + along * 4.0);
          vec3 c = p.xyz + side * (across * uInnerR) + up * (off * spread * uInnerR * 0.25 * twist);
          // a tiny wobble keeps merged light alive-looking
          c += side * sin(uTime * 17.0 + iPacket.w * 40.0 + along * 9.0) * uInnerR * 0.07 * (1.0 - spread);
          // strip half-width: the packet's own when merged, one band's slice of the fan when split
          float slice = uFanW * uInnerR / max(uBands - 1.0, 1.0);
          float w = mix(iPacket.z, slice * 1.25, spread);
          c += side * aStrip.y * w;
          vColor = iColor;
          vGain = iBand.y;
          vAcross = aStrip.y;
          vAlong = along;
          vFade = inside * smoothstep(0.0, 0.02, u) * (1.0 - smoothstep(0.985, 1.0, u));
          vSpread = spread;
          vBandT = iBand.x;
          vHueSpan = -outer * 0.62 / max(uBands - 1.0, 1.0) * spread;
          vRare = iBand.z;
          gl_Position = projectionMatrix * viewMatrix * vec4(c, 1.0);
        }`,fragmentShader:`
        ${zu}
        uniform float uTime;
        varying vec3 vColor;
        varying float vGain;
        varying float vAcross;
        varying float vAlong;
        varying float vFade;
        varying float vSpread;
        varying float vBandT;
        varying float vHueSpan;
        varying float vRare;
        void main() {
          float x = vAcross;
          float prof = exp(-x * x * 3.2);
          float core = exp(-x * x * 18.0);
          // bright head, tapering tail
          float trail = pow(1.0 - vAlong, 1.35);
          float head = exp(-vAlong * vAlong * 140.0);
          vec3 base = vColor;
          if (vRare > 0.5) {
            float th = 380.0 + 260.0 * sin(uTime * 2.3 + vAlong * 7.0 + vBandT * 3.0);
            base = thinFilm(th, 0.4 + 0.6 * vBandT) * length(vColor) * 1.4;
          }
          // merged: the packet's own color with a hot, whiter core at the head
          vec3 merged = base * ((prof * 0.75 + core * 0.55) * trail + head * (prof * 0.7 + core * 1.3));
          merged += vec3(dot(base, vec3(0.3, 0.5, 0.2))) * head * core * 1.3;
          // split: a continuous spectrum across this band's slice, drawn as three fine strands
          float tc = clamp(vBandT + x * vHueSpan, 0.0, 1.0);
          float strands = pow(0.5 + 0.5 * cos(x * 9.4247780), 6.0);
          float edge = 1.0 - smoothstep(0.72, 1.0, abs(x));
          vec3 fan = spectrum(tc) * vGain * (0.3 + 1.7 * strands) * edge * (trail * 1.1 + head * 1.6);
          vec3 col = mix(merged, fan, vSpread);
          gl_FragColor = vec4(max(col * vFade, 0.0), 1.0);
        }`});this.mesh=new W(i,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20;let s=new va(1,1);s.rotateX(-Math.PI/2),this.causticAttr=new _i(new Float32Array(12),4).setUsage(et),s.setAttribute(`iCaustic`,this.causticAttr);let c=new ja({transparent:!0,depthWrite:!1,side:2,blending:2,uniforms:{uTime:Xu.uTime},vertexShader:`
        attribute vec4 iCaustic; // glow, seed, spectral order (+1/-1), -
        varying vec2 vUv;
        varying float vGlow;
        varying float vSeed;
        varying float vOrder;
        void main() {
          vUv = uv;
          vGlow = iCaustic.x;
          vSeed = iCaustic.y;
          vOrder = iCaustic.z;
          gl_Position = projectionMatrix * viewMatrix * instanceMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        ${zu}
        uniform float uTime;
        varying vec2 vUv;
        varying float vGlow;
        varying float vSeed;
        varying float vOrder;
        void main() {
          // uv.y runs from the hose outward, uv.x across: rays fan out from a point at the hose
          float y = vUv.y;
          float x = (vUv.x - 0.5) * 2.0;
          float r = length(vec2(x * 0.5, y + 0.12));
          float ang = atan(x * 0.5, y + 0.12);
          float a = clamp(ang / 0.55, -1.0, 1.0);
          float fanEnv = 1.0 - smoothstep(0.35, 1.0, abs(a));
          float radial = smoothstep(0.12, 0.3, r) * exp(-r * 3.2);
          float rays = 0.65 + 0.35 * pow(0.5 + 0.5 * cos(ang * 38.0 + vSeed * 9.0), 3.0);
          float shimmer = 0.85 + 0.15 * sin(uTime * 11.0 + vSeed * 20.0 + r * 30.0);
          vec3 c = spectrum(clamp(0.5 + 0.5 * a * vOrder, 0.0, 1.0)) * rays * fanEnv * radial * shimmer * vGlow;
          gl_FragColor = vec4(max(c, 0.0), 1.0);
        }`});this.causticMesh=new Ti(s,c,sv),this.causticMesh.frustumCulled=!1,this.causticMesh.count=sv,this.causticMesh.renderOrder=3;for(let e=0;e<sv;e++)this.causticMesh.setMatrixAt(e,this.m4.makeScale(0,0,0));this.group.add(this.mesh,this.causticMesh)}spawn(e,t,n,r,i){let a=-1;for(let e=0;e<av;e++)if(!this.packets[e].alive){a=e;break}if(a<0){let t=this.packets[0];for(let e of this.packets)(this.dir>0?e.s<t.s:e.s>t.s)&&(t=e);return t.amount+=e,t}let o=this.packets[a],s=this.hose.currentLength;o.alive=!0,o.amount=e,o.color.copy(t),o.hue=n,o.surface=r,o.rare=!!i?.rare,o.clump=!!i?.clump,o.s=this.dir>0?0:s,o.v=o.clump?2.6:1.8+Math.min(1,e)*.4;let c=.16+Math.min(.22,Math.sqrt(e)*.16);return o.len0=i?.length?Math.max(c,i.length):o.clump?.46:c,o.len=o.len0,o.sparkled=0,o.seed=this.seedCounter++*.6180339%1,this.writeBandGains(a),o}writeBandGains(e){let t=this.packets[e],n=this.bands,r=t.color,i=Math.hypot(r.r,r.g,r.b)+1e-6,a=0;for(let t=0;t<n;t++){uv(n===1?.5:t/(n-1),this.tmpC);let o=Math.hypot(this.tmpC.r,this.tmpC.g,this.tmpC.b)+1e-6,s=(this.tmpC.r*r.r+this.tmpC.g*r.g+this.tmpC.b*r.b)/(o*i),c=.32+.68*Math.max(0,s)**1.5;this.bandGain[e*n+t]=c,a+=c*(.2126*this.tmpC.r+.7152*this.tmpC.g+.0722*this.tmpC.b)}let o=(.2126*r.r+.7152*r.g+.0722*r.b)/(a+1e-6)*1.3;for(let t=0;t<n;t++)this.bandGain[e*n+t]*=o}update(e){let t=this.hose,n=t.currentLength,r=t.samples,i=this.bands,a=this.dir;t.flowDir=a,this.mesh.material.uniforms.uDir.value=a,t.light.fill(0),t.lightCol.fill(0),this.findSites();let o=0,s=0,c=0,l=this.iPacket.array,u=this.iBand.array,d=this.iColor.array,f=1/i;for(let p=0;p<av;p++){let m=this.packets[p];if(!m.alive)continue;let h=m.clump?5.2:3.5+Math.min(1.1,m.amount*.6);m.v=Math.min(h,m.v+(m.clump?5:4.4)*e);let g=m.s;if(m.s+=m.v*e*a,m.len=m.len0*(.55+.5*Math.min(1.3,m.v/3.5)),a>0?m.s-m.len*.2>=n:m.s+m.len*.2<=0){m.alive=!1,a>0?this.events.arrive?.(m):this.events.emit?.(m);continue}let _=(.9+Math.sqrt(m.amount)*2.2)*(m.clump?1.7:1);s+=m.amount,_>c&&(c=_,t.pointAt(Math.min(1,Math.max(0,m.s/n)),this.lead));let v=m.s/n,y=Math.max(.035,m.len*.45)/n,b=Math.max(0,Math.floor((v-2.5*y)*(r-1))),x=Math.min(r-1,Math.ceil((v+2.5*y)*(r-1)));for(let e=b;e<=x;e++){let n=(e/(r-1)-(v-a*y*.8))/y,i=Math.exp(-n*n)*_*.35;t.light[e]+=i,t.lightCol[e*3]+=m.color.r*i,t.lightCol[e*3+1]+=m.color.g*i,t.lightCol[e*3+2]+=m.color.b*i}let S=m.s-m.len*a,C=Math.min(g,S,m.s),w=Math.max(g,S,m.s);for(let i=0;i<sv;i++){let o=this.causticIdx[i];if(o<0)continue;let s=o/(r-1)*n;if(s<C-.03||s>w+.03)continue;let c=t.disp[o];this.causticGlow[i]=Math.min(2.2,this.causticGlow[i]+_*c*e*7),(a>0?g<=s+.03&&m.s>=s-.03:g>=s-.03&&m.s<=s+.03)&&!(m.sparkled&1<<i)&&(m.sparkled|=1<<i,t.pointAt(o/(r-1),this.v1),this.events.bend?.(m,this.v1,c*Math.min(1,_/3)))}let T=Su.innerRadius*(m.clump?.72:.28+Math.min(.34,Math.sqrt(m.amount)*.22)),E=m.color.r*_*f,D=m.color.g*_*f,O=m.color.b*_*f;for(let e=0;e<i;e++){let t=o*4,n=o*3;l[t]=m.s,l[t+1]=m.len,l[t+2]=T,l[t+3]=m.seed,u[t]=i===1?.5:e/(i-1),u[t+1]=this.bandGain[p*i+e]*_,u[t+2]=+!!m.rare,u[t+3]=+!!m.clump,d[n]=E,d[n+1]=D,d[n+2]=O,o++}}for(let e=0;e<r;e++){let n=t.light[e];n>1e-4&&(t.lightCol[e*3]/=n,t.lightCol[e*3+1]/=n,t.lightCol[e*3+2]/=n)}t.commitLight(),this.geo.instanceCount=o,o>0&&(this.iPacket.needsUpdate=!0,this.iBand.needsUpdate=!0,this.iColor.needsUpdate=!0,this.iPacket.addUpdateRange(0,o*4),this.iBand.addUpdateRange(0,o*4),this.iColor.addUpdateRange(0,o*3)),this.flux+=(Math.min(1,s/3)-this.flux)*(1-Math.exp(-e*6)),this.updateCaustics(e)}findSites(){let e=this.hose,t=e.samples,n=e.kappa,r=e.disp,i=this.siteFound,a=0;for(let e=3;e<t-3;e++){let t=n[e];if(r[e]<lv||t<n[e-1]||t<n[e+1]||t<n[e-3]||t<n[e+3])continue;let o=-1;for(let t=0;t<a;t++)Math.abs(i[t]-e)<10&&(o=t);if(o>=0){t>n[i[o]]&&(i[o]=e);continue}if(a<i.length)i[a++]=e;else{let r=0;for(let e=1;e<a;e++)n[i[e]]<n[i[r]]&&(r=e);t>n[i[r]]&&(i[r]=e)}}for(let e=1;e<a;e++){let t=i[e],r=e-1;for(;r>=0&&n[i[r]]<n[t];)i[r+1]=i[r],r--;i[r+1]=t}for(let e=0;e<sv;e++){let t=e<a?i[e]:-1,n=this.causticIdx[e];n>=0&&t>=0&&Math.abs(n-t)<12||t>=0&&(n<0||this.causticGlow[e]<.02)?this.causticIdx[e]=t:t<0&&this.causticGlow[e]<.02&&(this.causticIdx[e]=-1)}}updateCaustics(e){let t=this.hose,n=this.causticAttr.array;for(let r=0;r<sv;r++){this.causticGlow[r]*=Math.exp(-e*3.2);let i=this.causticIdx[r];if(i<0||this.causticGlow[r]<.005){this.causticMesh.setMatrixAt(r,this.m4.makeScale(0,0,0)),n[r*4]=0;continue}let a=t.pos,o=t.tan,s=t.curvDir,c=a[i*3],l=a[i*3+1],u=a[i*3+2],d=o[i*3]*this.dir,f=o[i*3+2]*this.dir,p=-s[i*3]*.9+d*.55,m=-s[i*3+2]*.9+f*.55,h=Math.hypot(p,m);h<.25&&(p=d,m=f,h=Math.hypot(p,m)),p/=h+1e-6,m/=h+1e-6;let g=Math.max(0,l-Su.radius),_=.22+g*.5,v=_*.9,y=Su.radius*.2+g*.25,b=m,x=-p;this.m4.set(b*v,0,-p*_,c+p*(_*.5+y),0,1,0,.004,x*v,0,-m*_,u+m*(_*.5+y),0,0,0,1),this.causticMesh.setMatrixAt(r,this.m4);let S=-(s[i*3]*b+s[i*3+2]*x);n[r*4]=this.causticGlow[r]*Math.exp(-g*3)*.5,n[r*4+1]=r*.37+i*.013,n[r*4+2]=S>=0?-1:1}this.causticMesh.instanceMatrix.needsUpdate=!0,this.causticAttr.needsUpdate=!0}forEachCaustic(e){let t=this.hose;for(let n=0;n<sv;n++){let r=this.causticIdx[n];r<0||this.causticGlow[n]<.01||e(t.pos[r*3],t.pos[r*3+2],this.causticGlow[n])}}aliveCount(){let e=0;for(let t of this.packets)t.alive&&e++;return e}clear(){for(let e of this.packets)e.alive=!1}},fv=class{constructor(e){Z(this,`packets`,void 0),Z(this,`amount`,0),Z(this,`r`,0),Z(this,`g`,0),Z(this,`b`,0),Z(this,`hue`,0),Z(this,`surface`,0),Z(this,`rareAmount`,0),Z(this,`rareHue`,0),Z(this,`timer`,0),Z(this,`rate`,0),Z(this,`recent`,0),Z(this,`lastColor`,new H(.3,1,.8)),Z(this,`c`,new H),Z(this,`onSwallow`,void 0),this.packets=e}add(e,t,n,r,i){if(e>0){if(this.recent+=e,this.lastColor.lerp(t,Math.min(1,e*2)),this.onSwallow?.(e,r,i),i?.clump||i?.length){this.packets.spawn(e,t,n,r,i);return}if(i?.rare){this.rareAmount+=e,this.rareHue=n;return}this.amount+=e,this.r+=t.r*e,this.g+=t.g*e,this.b+=t.b*e,this.hue+=n*e,this.surface=r}}update(e){if(this.rate+=(this.recent/Math.max(e,.001)-this.rate)*(1-Math.exp(-e*5)),this.recent=0,this.timer+=e,this.amount>.35||this.amount>0&&this.timer>.09){let e=this.amount;this.c.setRGB(this.r/e,this.g/e,this.b/e),this.packets.spawn(e,this.c,this.hue/e,this.surface),this.amount=this.r=this.g=this.b=this.hue=0,this.timer=0}(this.rareAmount>.25||this.rareAmount>0&&this.timer>.2)&&(this.c.setRGB(.8,.7,1),this.packets.spawn(this.rareAmount,this.c,this.rareHue,4,{rare:!0}),this.rareAmount=0)}},pv=class{constructor(){Z(this,`mouth`,new B),Z(this,`forward`,new B(0,0,-1)),Z(this,`strength`,0),Z(this,`sign`,1),Z(this,`reach`,wu.reach),Z(this,`core2`,wu.core*wu.core)}velocityAt(e,t,n,r){let i=this.strength;if(i<=0)return r.set(0,0,0);let a=this.mouth.x-e,o=this.mouth.y-t,s=this.mouth.z-n,c=a*a+o*o+s*s,l=this.reach;if(c>l*l)return r.set(0,0,0);let u=Math.sqrt(c)+1e-5,d=1/u,f=this.radialSpeed(u,a*d,s*d)*i;r.set(a*d*f,o*d*f,s*d*f);let p=Math.sqrt(a*a+s*s)+1e-5,m=f*wu.swirl*Math.min(1,p/.22);return r.x+=-s/p*m,r.z+=a/p*m,this.sign<0&&r.multiplyScalar(-1),r}speedAt(e,t,n){let r=this.strength;if(r<=0)return 0;let i=this.mouth.x-e,a=this.mouth.y-t,o=this.mouth.z-n,s=i*i+a*a+o*o;if(s>this.reach*this.reach)return 0;let c=Math.sqrt(s)+1e-5;return this.radialSpeed(c,i/c,o/c)*r*(1+wu.swirl*.35)}radialSpeed(e,t,n){let r=this.reach,i=Math.min(1,Math.max(0,(e-r*.5)/(r*.5))),a=1-i*i*(3-2*i),o=wu.peak*this.core2/(e*e+this.core2),s=wu.peak*.13*(1-e/r),c=-(t*this.forward.x+n*this.forward.z);return(o*a+s)*(1+.45*c)}},mv={fov:54,pitch:56,dist:3.55,bias:.55,lead:.68,dzX:.52,dzTop:.4,dzBot:.5},hv={fov:40,pitch:45,dist:4.1,bias:.55,lead:.4,dzX:.58,dzTop:.36,dzBot:.46},gv=class{constructor(e){Z(this,`camera`,void 0),Z(this,`framing`,mv),Z(this,`focus`,new B),Z(this,`dist`,mv.dist),Z(this,`zoom`,1),Z(this,`present`,0),Z(this,`rate`,1.7),Z(this,`initialized`,!1),Z(this,`tmp`,new B),Z(this,`tmp2`,new B),Z(this,`pos`,new B),Z(this,`target`,new B),Z(this,`safe`,{top:0,right:0,bottom:0,left:0}),Z(this,`w`,1),Z(this,`h`,1),this.camera=e}setViewport(e,t){this.w=e,this.h=t;let n=e/t,r={...n<1?mv:hv};n<.5&&(r.fov+=3),n>=1&&n<1.4&&(r.dist+=.25),n>1.6&&(r.fov-=2),this.framing=r,this.camera.fov=r.fov,this.camera.aspect=n,this.camera.updateProjectionMatrix()}update(e,t){let n=this.framing,r=this.tmp.copy(t.body).lerp(t.nozzle,n.bias);if(r.x=(Math.min(t.body.x-.32,t.nozzle.x-.22)+Math.max(t.body.x+.32,t.nozzle.x+.22))/2,t.interest&&t.interestWeight>0){let e=t.interest.x-r.x,n=t.interest.z-r.z,i=t.interestWeight*Math.min(.32,1/Math.max(Math.hypot(e,n),.001));r.x+=e*i,r.z+=n*i}this.present=Mu(this.present,t.bodyFocus,1.2,e);let i=this.present*.8;i>0&&(r.x+=(t.body.x-r.x)*i,r.z+=(t.body.z+n.lead*.72-r.z)*i),r.y=0,r.x=ku(r.x,K.minX+.9,K.maxX-.9),r.z=ku(r.z,K.minZ+1.25,K.maxZ-.4),this.initialized||(this.focus.copy(r),this.initialized=!0);let a=1.7;if(t.grabbed){let e=Math.max(this.edge(t.nozzle,0),this.edge(t.body,.3)*.8);a=.08+3.6*e*e}this.rate=Mu(this.rate,a,a<this.rate?25:5,e),this.focus.x=Mu(this.focus.x,r.x,this.rate,e),this.focus.z=Mu(this.focus.z,r.z,this.rate,e);let o=this.requiredZoom(t);this.zoom=Mu(this.zoom,o,o>this.zoom?3:.8,e),this.dist=n.dist*this.zoom*(1-.12*this.present);let s=zt.degToRad(n.pitch);if(this.target.set(this.focus.x,0,this.focus.z-n.lead),this.pos.set(this.target.x,Math.sin(s)*this.dist,this.target.z+Math.cos(s)*this.dist),t.overridePos&&t.overrideTarget&&t.overrideBlend>0){let e=t.overrideBlend;this.pos.lerp(t.overridePos,e),this.target.lerp(t.overrideTarget,e)}this.camera.position.copy(this.pos),this.camera.lookAt(this.target),this.camera.updateMatrixWorld()}edge(e,t){let n=this.framing,r=this.tmp2.set(e.x,.05,e.z).project(this.camera),i=Math.min(.95,n.dzX+t),a=(Math.abs(r.x)-i)/(1-i),o=Math.min(.95,(r.y>0?n.dzTop:n.dzBot)+t),s=(Math.abs(r.y)-o)/(1-o);return Au(Math.max(a,s))}requiredZoom(e){let t=this.camera;t.updateMatrixWorld();let n=1-(2*Math.max(this.safe.left,this.safe.right)+24)/this.w,r=1-(2*this.safe.top+24)/this.h,i=1-(2*this.safe.bottom+40)/this.h,a=0;for(let o=0;o<3;o++){let s=o<2?e.body:e.nozzle,c=this.tmp2.copy(s);c.x+=o===0?-.3:o===1?.3:0,c.y=.18,c.project(t);let l=Math.abs(c.x)/n,u=c.y>0?c.y/r:-c.y/i;a=Math.max(a,l,u)}let o=this.zoom;return a>.9?o=this.zoom*(1+(a-.9)*1.1):a<.72&&(o=this.zoom*.985),ku(o,1,1.45)}},_v=130,vv=class{constructor(){Z(this,`phase`,`play`),Z(this,`playTime`,0),Z(this,`phaseTime`,0),Z(this,`engaged`,!1),Z(this,`auto`,new B),Z(this,`autoActive`,!1),Z(this,`autoT`,0),Z(this,`autoDur`,0),Z(this,`autoFrom`,new B),Z(this,`autoTo`,new B),Z(this,`nextDemo`,2.4),Z(this,`demos`,0),Z(this,`fullTime`,0),Z(this,`homeActive`,!1),Z(this,`homeT`,0),Z(this,`homeDur`,0),Z(this,`homeFrom`,new B),Z(this,`homeTo`,new B)}setPhase(e){this.phase=e,this.phaseTime=0,e===`play`&&(this.playTime=0,this.demos=0,this.nextDemo=3.2),e===`full`&&(this.fullTime=0),this.homeActive=!1}capacity(e,t){let n=this.playTime,r=78,i=e/Math.max(n,25)*_v;i<78&&(r+=(Math.max(i,78*.56)-78)*X(30,90,n));let a=X(xu.assistStart,xu.assistEnd,n);if(a<=0)return r;let o=Math.min(2.5,t*.3)*(1-X(xu.assistEnd,xu.assistEnd+25,n)),s=Math.max(xu.minCapacity,e+o);return Math.min(r,Math.max(Math.min(78,s),78+(s-78)*a))}updateDemo(e,t,n,r){if(this.phase!==`play`)return this.autoActive=!1,!1;if(t<.2)return this.autoActive=!1,this.nextDemo=Math.max(this.nextDemo,7),!1;if(!this.autoActive){if(t<this.nextDemo||this.phaseTime<1.6)return!1;if(this.autoActive=!0,this.autoT=0,this.autoDur=2.6,this.autoFrom.copy(n),r){this.autoTo.copy(r).sub(n);let e=this.autoTo.length();this.autoTo.multiplyScalar(Math.min(1,.45/Math.max(e,.001))).add(n)}else this.autoTo.set(n.x+.3,0,n.z-.15);this.demos++,this.nextDemo=t+5+Math.min(10,this.demos*2.5)}this.autoT+=e;let i=this.autoT/this.autoDur;if(i>=1)return this.autoActive=!1,!1;let a=X(0,.45,i),o=X(.7,1,i)*.35;this.auto.lerpVectors(this.autoFrom,this.autoTo,a-o);let s=Math.sin(i*Math.PI*3)*.08*X(.3,.5,i)*(1-X(.7,.9,i)),c=this.autoTo.x-this.autoFrom.x,l=this.autoTo.z-this.autoFrom.z,u=Math.hypot(c,l)+1e-4;return this.auto.x+=-l/u*s,this.auto.z+=c/u*s,!0}updateHome(e,t,n,r){if(this.phase!==`full`||t<.2)return this.homeActive=!1,!1;if(!this.homeActive){if(t<2.6||this.fullTime<1.5)return!1;let e=n.x-r.x,i=n.z-r.z,a=Math.hypot(e,i);if(a<1.25)return!1;this.homeActive=!0,this.homeT=0,this.homeDur=1.6+a*.7,this.homeFrom.copy(n),this.homeTo.set(r.x+e/a*1.05,0,r.z+i/a*1.05)}return this.homeT+=e,this.auto.lerpVectors(this.homeFrom,this.homeTo,X(0,1,this.homeT/this.homeDur)),!0}demoJustStarted(){return this.autoActive&&this.autoT===0}tick(e,t){this.phaseTime+=e,this.phase===`play`&&t&&(this.playTime+=e),this.phase===`full`&&(this.fullTime+=e)}},yv={reverse:1.2,emit:3.8,flood0:2.2,flood1:9,climb0:6,climb1:10.2,spread1:13.2,form1:18,fade0:23.2,fade1:27.2,mote:23.6,fall:3.4,pulse:1.6,tail:2.3},bv=3,xv=14,Sv=class{constructor(e){Z(this,`g`,void 0),Z(this,`active`,!1),Z(this,`t`,0),Z(this,`camBlend`,0),Z(this,`camPos`,new B),Z(this,`camTarget`,new B),Z(this,`aurora`,0),Z(this,`grow`,0),Z(this,`done`,!1),Z(this,`toEmit`,0),Z(this,`emitted`,0),Z(this,`rareShare`,0),Z(this,`totalAmount`,0),Z(this,`outShare`,0),Z(this,`exhale`,0),Z(this,`reversed`,!1),Z(this,`swell`,!1),Z(this,`rushed`,!1),Z(this,`settled`,!1),Z(this,`moteStage`,0),Z(this,`moteT`,0),Z(this,`pulseN`,0),Z(this,`curtainReseeded`,!1),Z(this,`mote`,void 0),Z(this,`moteMat`,void 0),Z(this,`moteColor`,void 0),Z(this,`motePos`,new B),Z(this,`moteFrom`,new B),Z(this,`moteTo`,new B),Z(this,`flood`,new H),Z(this,`avg`,new H),Z(this,`tmpC`,new H),Z(this,`tmpV`,new B),Z(this,`dir`,new B),Z(this,`walk`,[0,0]),Z(this,`keys`,[]),Z(this,`pathPos`,new B),Z(this,`pathTarget`,new B),Z(this,`playPos`,new B),Z(this,`playTarget`,new B),Z(this,`ribbonPts`,[]),Z(this,`ribbonAt`,-1),Z(this,`emitBudget`,1600),Z(this,`rng`,new Ju(1)),Z(this,`auroraPlane`,new Jr(new B(0,-1,0),2.25)),this.g=e,this.moteColor=new H(1,1,1),this.moteMat=new ja({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:Xu.uTime,uColor:{value:this.moteColor},uGlow:{value:0},uRing:{value:0},uRingA:{value:0}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(0.0,0.0,0.0,1.0); mv.xyz -= normalize(mv.xyz) * 0.45; mv.xy += position.xy; gl_Position = projectionMatrix * mv; }`,fragmentShader:`
        uniform vec3 uColor; uniform float uGlow; uniform float uTime;
        uniform float uRing; uniform float uRingA;
        varying vec2 vUv;
        void main(){
          vec2 p = vUv * 2.0 - 1.0;
          float r = length(p);
          float core = exp(-r * r * 160.0);
          float halo = exp(-r * r * 14.0) * 0.45 + exp(-r * r * 3.5) * 0.12;
          float rays = pow(max(0.0, 1.0 - abs(p.x * p.y) * 60.0), 6.0) * exp(-r * 5.0) * 0.45;
          float tw = 0.88 + 0.12 * sin(uTime * 9.0);
          // a thin ring that swells out with each pulse
          float dr = (r - uRing) * 18.0;
          float ring = exp(-dr * dr) * uRingA * (1.0 - smoothstep(0.8, 1.0, r));
          vec3 c = uColor * ((core * 5.0 + halo + rays) * uGlow * tw + ring * 0.7);
          gl_FragColor = vec4(max(c, 0.0), 1.0);
        }`}),this.mote=new W(new va(.5,.5),this.moteMat),this.mote.frustumCulled=!1,this.mote.visible=!1,this.mote.renderOrder=40,e.scene.add(this.mote);for(let e=0;e<xv;e++)this.ribbonPts.push(new B);for(let e=0;e<9;e++)this.keys.push({t:0,pos:new B,target:new B})}start(e){let t=this.g;this.active=!0,this.done=!1,this.t=0,this.rng=new Ju(e),this.totalAmount=Math.max(1,t.ledger.total),this.rareShare=t.ledger.total>0?t.ledger.rare/t.ledger.total:0,this.toEmit=Math.round(80+Math.min(60,this.totalAmount*.6)),this.emitted=0,this.outShare=0,this.exhale=0,this.emitBudget=Math.min(2200,Math.round(t.quality.particles*.28)),this.reversed=this.swell=this.rushed=this.settled=!1,this.curtainReseeded=!1,this.moteStage=0,this.moteT=0,this.pulseN=0,this.ribbonAt=-1,this.aurora=0,this.grow=0,this.camBlend=0,t.ledger.averageColor(this.avg);let n=t.ledger.palette(6);t.sky.setPalette(n.colors,n.weights,n.rare),t.mist.setFloodPalette(t.sky.paletteTexture),t.body.openLid(),t.audio.finaleOpen(),this.buildKeys(),this.camPos.copy(this.keys[0].pos),this.camTarget.copy(this.keys[0].target)}buildKeys(){let e=this.g,t=e.camera,n=t.aspect<1,r=this.keys;this.playPos.copy(t.position),t.getWorldDirection(this.dir),this.playTarget.copy(t.position).addScaledVector(this.dir,-t.position.y/Math.min(-.05,this.dir.y));let i=e.body.group.position;this.setKey(0,0,this.playPos,this.playTarget),this.tmpV.set(i.x,.3,i.z),this.setKey(1,yv.reverse,this.playPos,this.playTarget),r[1].pos.lerp(this.tmpV,.14),r[1].target.lerp(this.tmpV,.45),this.buildStreamKeys();let a=e.nozzle.state.pos,o=Math.max(-.5,Math.min(.6,a.x*.3));n?this.setKeyXYZ(4,7.6,o,2,3,o*.5+.1,1,-2.3):this.setKeyXYZ(4,7.6,o*.6,1.95,3.3,o*.3,.95,-2.2),n?this.setKeyXYZ(5,11.2,.2,1.4,2.25,-.1,1.95,-2.1):this.setKeyXYZ(5,11.2,.12,1.4,2.5,-.08,1.8,-2.1),n?this.setKeyXYZ(6,15,.25,1,1.75,-.35,2.35,-1.7):this.setKeyXYZ(6,15,.15,1.05,1.9,-.2,2.05,-1.9),n?this.setKeyXYZ(7,yv.mote,.02,1.08,1.95,0,2.3,-1.6):this.setKeyXYZ(7,yv.mote,-.08,1.1,2.1,.05,2,-1.8),this.setKey(8,yv.mote+yv.fall,this.playPos,this.playTarget)}buildStreamKeys(){let e=this.g,t=e.nozzle.state.pos,n=e.nozzle.state.forward,r=e.body.group.position;this.tmpV.set(r.x+(t.x-r.x)*.72+n.x*.25,.08,r.z+(t.z-r.z)*.72+n.z*.25),this.setKey(2,yv.reverse+1.5,this.playPos,this.playTarget),this.keys[2].target.lerp(this.tmpV,.55),this.tmpV.set(t.x+n.x*1.1,.05,t.z+n.z*1.1),this.setKey(3,yv.reverse+yv.emit,this.playPos,this.tmpV);let i=this.keys[3];i.pos.z+=.45,i.pos.y=Math.min(i.pos.y,2.6),i.target.lerp(this.playTarget,.35)}setKey(e,t,n,r){let i=this.keys[e];i.t=t,i.pos.copy(n),i.target.copy(r)}setKeyXYZ(e,t,n,r,i,a,o,s){let c=this.keys[e];c.t=t,c.pos.set(n,r,i),c.target.set(a,o,s)}touchPoint(e,t){return e.intersectPlane(this.auroraPlane,t)}get acceptsNozzle(){return this.t<yv.reverse}get auroraReady(){return this.t>yv.climb1+1&&this.t<yv.fade1-1}update(e){if(!this.active)return;let t=this.g,n=e.dt;this.t+=n;let r=this.t;if(t.motorTarget=0,!this.reversed&&r>yv.reverse&&(this.reversed=!0,t.packets.dir=-1,t.hose.flowDir=-1,this.buildStreamKeys()),this.reversed&&this.emitted<this.toEmit){let e=Math.ceil(this.toEmit*X(0,1,(r-yv.reverse)/yv.emit)),n=this.totalAmount/this.toEmit*1.4;for(let r=0;this.emitted<e&&r<8;r++){let e=(this.emitted*.6180339887+this.rng.next()*.04)%1,r=this.rng.next()<this.rareShare*1.4,i=t.ledger.sampleHue(e);Lu(i,this.tmpC),t.packets.spawn(n,this.tmpC,i,r?Y.HIDDEN:Y.FLOOR,{rare:r,length:.16+this.rng.next()*.2}),this.emitted++}t.body.setDrain(this.emitted/this.toEmit)}this.exhale*=Math.exp(-n*3),t.nozzle.intakeGlow=Math.max(t.nozzle.intakeGlow,Math.min(.8,this.exhale));let i=Math.min(X(yv.flood0,yv.flood1,r),this.outShare*1.6),a=i*(1-X(yv.fade0-1,yv.fade1-.5,r));if(this.flood.copy(this.avg).multiplyScalar(.9),t.mist.setFlood(a,this.flood),a>.001){let e=t.nozzle.state.mouth,n=a*3;t.light.addDynDisc(e.x,e.z,.4+i*3.4,this.avg.r*n,this.avg.g*n,this.avg.b*n)}if(!this.rushed&&r>yv.reverse+.8&&(this.rushed=!0,t.audio.finaleRush(1)),!this.swell&&r>yv.climb0){this.swell=!0;let e=t.ledger.palette(6);t.audio.finaleSwell(e.hues,e.rare)}!this.settled&&r>yv.fade0&&(this.settled=!0,t.audio.finaleSettle()),this.grow=Cv(r);let o=1-X(yv.fade0,yv.fade1,r),s=X(yv.climb0-.4,yv.climb0+2.2,r)*o;t.sky.update(e,this.grow,s),this.aurora=s*.72,t.curtain.finaleGlow(X(yv.climb0-.6,yv.climb1-1,r)*o,this.avg),this.updateMote(e),this.updateCamera(n)}updateCamera(e){let t=this.t,n=this.keys,r=0;for(;r<n.length-2&&t>=n[r+1].t;)r++;let i=X(n[r].t,n[r+1].t,t);if(this.pathPos.lerpVectors(n[r].pos,n[r+1].pos,i),this.pathTarget.lerpVectors(n[r].target,n[r+1].target,i),this.moteStage>=1){let e=this.moteStage===1?.6*X(0,.8,this.moteT):.6;this.pathTarget.lerp(this.motePos,e)}let a=1-Math.exp(-e*2.6);this.camPos.lerp(this.pathPos,a),this.camTarget.lerp(this.pathTarget,a);let o=yv.mote+yv.fall;this.camBlend=X(0,1.1,t)*(1-X(o-.4,o+2.2,t))}updateMote(e){let t=this.g,n=this.t,r=this.moteMat.uniforms;if(this.moteStage===0&&n>yv.mote){this.moteStage=1,this.moteT=0;let e=t.nozzle.state.pos,n=this.rng.range(0,Math.PI*2);Kd(e.x+(this.playTarget.x-e.x)*.55+Math.cos(n)*.35,e.z+(this.playTarget.z-e.z)*.55+Math.sin(n)*.3,.35,this.walk),Math.hypot(this.walk[0]-e.x,this.walk[1]-e.z)<.4&&Kd(this.walk[0],this.walk[1]-.45,.35,this.walk),this.moteTo.set(this.walk[0],.03,this.walk[1]),this.moteFrom.set(this.moteTo.x+(this.camPos.x-this.moteTo.x)*.7,1.8,this.moteTo.z-.4),this.motePos.copy(this.moteFrom),this.keys[8].target.lerp(this.moteTo,.5),this.mote.visible=!0,this.mote.scale.setScalar(1),Lu(t.ledger.sampleHue(.5),this.moteColor).lerp(this.tmpC.setRGB(1,1,1),.35),r.uRingA.value=0,t.audio.moteDrop(t.panOf(this.moteTo))}if(this.moteStage===1){this.moteT+=e.dt;let n=Au(this.moteT/yv.fall),i=n*n*(3-2*n);this.motePos.lerpVectors(this.moteFrom,this.moteTo,i);let a=1-n;this.motePos.x+=Math.sin(this.moteT*2.3)*.13*a,this.motePos.z+=Math.cos(this.moteT*1.7)*.06*a;let o=Math.exp(-this.moteT*3)*(1-Math.exp(-this.moteT*30));r.uGlow.value=X(0,.35,this.moteT)*(1.1+.15*Math.sin(this.moteT*5))+1.6*o;let s=2.2*Math.exp(-this.motePos.y*1.3);t.light.addDynDisc(this.motePos.x,this.motePos.z,.35,this.moteColor.r*s,this.moteColor.g*s,this.moteColor.b*s),n>=1&&(this.moteStage=2,this.moteT=0,this.pulseN=0)}else if(this.moteStage===2){this.moteT+=e.dt;let n=this.moteT/yv.pulse*bv,i=Math.floor(n),a=n-i;i>=this.pulseN&&i<bv&&(this.pulseN=i+1,t.audio.sparkle(.22+.1*i,t.panOf(this.moteTo)));let o=Math.exp(-a*5)*(1-Math.exp(-a*40));r.uGlow.value=1.1+1.3*o*(.7+.15*i),r.uRing.value=.12+a*.7,r.uRingA.value=o*.9,this.mote.scale.setScalar(1+.3*o);let s=2.2+3*o;t.light.addDynDisc(this.moteTo.x,this.moteTo.z,.35+.35*a,this.moteColor.r*s,this.moteColor.g*s,this.moteColor.b*s),this.moteT>=yv.pulse&&(this.moteStage=3,this.moteT=0,t.audio.moteSplit(t.panOf(this.moteTo)),t.beginNextRound(this.moteTo))}else if(this.moteStage===3){this.moteT+=e.dt;let n=Au(this.moteT/.7);r.uGlow.value=2.6*(1-n)*(1-n),r.uRing.value=.2+.7*n,r.uRingA.value=1.2*(1-n),this.mote.scale.setScalar(1+1.6*n);let i=5*(1-n);t.light.addDynDisc(this.moteTo.x,this.moteTo.z,.4+.8*n,this.moteColor.r*i,this.moteColor.g*i,this.moteColor.b*i),n>=1&&(this.mote.visible=!1,this.mote.scale.setScalar(1),this.moteStage=4)}this.moteStage>=3&&(this.moteStage===4&&(this.moteT+=e.dt),!this.curtainReseeded&&this.moteT>.9&&(this.curtainReseeded=!0,t.reseedCurtain()),this.moteStage===4&&this.moteT>yv.tail&&(this.active=!1,this.done=!0,this.camBlend=0)),this.mote.position.copy(this.motePos)}emitFromNozzle(e,t,n){let r=this.g,i=r.nozzle.state.mouth,a=r.nozzle.state.forward;this.outShare=Math.min(1,this.outShare+t/(this.totalAmount*1.4)),this.exhale=Math.min(1.5,this.exhale+.08);let o=this.outShare;this.dir.set(a.x,.12+.22*o,a.z).normalize();let s=.035+.3*X(.08,.75,o),c=Math.max(4,Math.round(this.emitBudget/this.toEmit));this.tmpV.copy(i).addScaledVector(a,.04),n?this.tmpC.setRGB(.9,.75,1):this.tmpC.copy(e),r.dust.emit(this.tmpV,this.dir,this.tmpC,t,c,this.rng,s);let l=.9;if(r.light.addDynDisc(i.x,i.z,.35,e.r*l,e.g*l,e.b*l),o<.8&&this.t-this.ribbonAt>.45){this.ribbonAt=this.t;let e=this.ribbonPts,t=.16+.35*o;for(let n=0;n<xv;n++){let r=n*.055;e[n].set(i.x+a.x*r+this.rng.gauss(0,.008),i.y+.015+r*t,i.z+a.z*r+this.rng.gauss(0,.008))}r.ribbons.spawn(e,this.tmpC,0,.1,Y.FLOOR,{width:.045})}}};function Cv(e){let t=Au((e-yv.climb0)/(yv.climb1-yv.climb0)),n=Au((e-yv.climb1)/(yv.spread1-yv.climb1)),r=Au((e-yv.spread1)/(yv.form1-yv.spread1));return .3*t*(.6+.4*t)+.3*n+.4*(1-(1-r)*(1-r))}var wv=class{constructor(e){Z(this,`el`,void 0),Z(this,`active`,!1),Z(this,`x`,0),Z(this,`y`,0),Z(this,`downX`,0),Z(this,`downY`,0),Z(this,`downTime`,0),Z(this,`travel`,0),Z(this,`pointerType`,`touch`),Z(this,`pressed`,!1),Z(this,`released`,!1),Z(this,`lastActivity`,-1e9),Z(this,`taps`,[]),Z(this,`id`,null),Z(this,`onDown`,e=>{if(e.cancelable&&e.preventDefault(),this.id===null&&(e.pointerType!==`mouse`||e.button===0)){this.id=e.pointerId;try{this.el.setPointerCapture(e.pointerId)}catch{}this.active=!0,this.pressed=!0,this.pointerType=e.pointerType||`touch`,this.x=this.downX=e.clientX,this.y=this.downY=e.clientY,this.travel=0,this.downTime=this.now(),this.lastActivity=this.downTime}}),Z(this,`onMove`,e=>{e.pointerId===this.id&&(e.cancelable&&e.preventDefault(),this.x=e.clientX,this.y=e.clientY,this.travel=Math.max(this.travel,Math.hypot(this.x-this.downX,this.y-this.downY)),this.lastActivity=this.now())}),Z(this,`onUp`,e=>{if(e.pointerId!==this.id)return;let t=this.now();t-this.downTime<.45&&this.travel<18&&this.taps.push({x:this.x,y:this.y}),this.id=null,this.active=!1,this.released=!0,this.lastActivity=t}),this.el=e,e.addEventListener(`pointerdown`,this.onDown,{passive:!1}),e.addEventListener(`pointermove`,this.onMove,{passive:!1}),e.addEventListener(`pointerup`,this.onUp,{passive:!1}),e.addEventListener(`pointercancel`,this.onUp,{passive:!1}),e.addEventListener(`lostpointercapture`,this.onUp);let t=e=>{e.cancelable&&e.preventDefault()};document.addEventListener(`touchstart`,t,{passive:!1}),document.addEventListener(`touchmove`,t,{passive:!1}),document.addEventListener(`touchend`,t,{passive:!1}),document.addEventListener(`gesturestart`,t,{passive:!1}),document.addEventListener(`gesturechange`,t,{passive:!1}),document.addEventListener(`dblclick`,t,{passive:!1}),document.addEventListener(`contextmenu`,t),document.addEventListener(`selectstart`,t),window.addEventListener(`blur`,()=>this.reset()),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.reset()})}now(){return performance.now()/1e3}reset(){this.id=null,this.active&&(this.released=!0),this.active=!1}idleFor(){return this.active?0:this.now()-this.lastActivity}endFrame(){this.pressed=!1,this.released=!1,this.taps.length=0}},Tv=class{constructor(e){Z(this,`renderer`,void 0),Z(this,`scene`,new Kn),Z(this,`camera`,new go(54,1,.05,40)),Z(this,`quality`,void 0),Z(this,`ctx`,void 0),Z(this,`post`,void 0),Z(this,`rig`,void 0),Z(this,`input`,void 0),Z(this,`audio`,new Hd),Z(this,`light`,new Mm),Z(this,`ledger`,new $_),Z(this,`suction`,new pv),Z(this,`director`,new vv),Z(this,`room`,void 0),Z(this,`carpet`,void 0),Z(this,`sofa`,void 0),Z(this,`ribbons`,void 0),Z(this,`curtain`,void 0),Z(this,`mist`,void 0),Z(this,`sky`,void 0),Z(this,`body`,void 0),Z(this,`nozzle`,void 0),Z(this,`hose`,void 0),Z(this,`packets`,void 0),Z(this,`intake`,void 0),Z(this,`dust`,void 0),Z(this,`finale`,void 0),Z(this,`adaptive`,void 0),Z(this,`motor`,0),Z(this,`motorTarget`,1),Z(this,`bodyPos`,new B(vu.body.x,0,vu.body.z)),Z(this,`bodyVel`,new B),Z(this,`bodyYaw`,0),Z(this,`inlet`,new B),Z(this,`inletDir`,new B),Z(this,`attach`,new B),Z(this,`attachDir`,new B),Z(this,`raycaster`,new Ho),Z(this,`floorPlane`,new Jr(new B(0,1,0),0)),Z(this,`seatPlane`,new Jr(new B(0,1,0),-Jd.y)),Z(this,`sofaBox`,new sr(new B(J.cx-J.w/2,0,J.cz-J.d/2),new B(J.cx+J.w/2,J.backH,J.cz+J.d/2))),Z(this,`walk`,[0,0]),Z(this,`frameState`,{t:0,dt:0,frame:0}),Z(this,`deps`,void 0),Z(this,`capTarget`,1/0),Z(this,`ndc`,new z),Z(this,`tmpV`,new B),Z(this,`tmpV2`,new B),Z(this,`tmpC`,new H),Z(this,`ledgerColor`,new H),Z(this,`interestPt`,new B),Z(this,`camDrive`,void 0),Z(this,`interest`,null),Z(this,`interestTimer`,0),Z(this,`audioState`,void 0),Z(this,`timer`,new Do),Z(this,`t`,0),Z(this,`frameNo`,0),Z(this,`cssW`,1),Z(this,`cssH`,1),Z(this,`touchConsumed`,!1),Z(this,`grabDX`,0),Z(this,`grabDY`,0),Z(this,`touchSound`,0),Z(this,`seedBase`,void 0),Z(this,`round`,0),Z(this,`rng`,void 0),Z(this,`fullAnnounced`,!1),Z(this,`lastPop`,0),Z(this,`params`,new URLSearchParams(location.search)),Z(this,`autoplay`,void 0),Z(this,`autoplayAngle`,0),Z(this,`simSteps`,Math.max(1,Math.min(12,Number(new URLSearchParams(location.search).get(`sim`))||1)));let t=new uu({antialias:!1,powerPreference:`high-performance`,alpha:!1,stencil:!1,depth:!0});this.renderer=t,t.toneMapping=0,t.outputColorSpace=Je,e.appendChild(t.domElement),t.domElement.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),setTimeout(()=>location.reload(),600)}),this.quality=Gu(t.getContext());let n=this.quality;t.shadowMap.enabled=n.shadows,t.shadowMap.type=1,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!0,this.adaptive=new qu(n),this.scene.background=new H(329483),this.ctx={scene:this.scene,renderer:t,camera:this.camera,quality:n,shared:Xu},this.post=new dd(t,n),this.rig=new gv(this.camera),this.input=new wv(t.domElement),this.seedBase=Number(this.params.get(`seed`))||Yu(),this.rng=new Ju(this.seedBase),this.autoplay=this.params.get(`autoplay`)===`1`,this.room=new yh(this.ctx),this.carpet=new qp(this.ctx),this.sofa=new rg(this.ctx),this.ribbons=new Uf(this.ctx),this.curtain=new Om(this.ctx,this.ribbons),this.mist=new Of(this.ctx),this.sky=new dp(this.ctx),this.scene.add(this.room.group,this.carpet.group,this.sofa.group,this.curtain.group,this.ribbons.group,this.mist.group,this.sky.group),this.body=new L_(this.ctx),this.nozzle=new iv(this.ctx),this.bodyYaw=Math.atan2(-(vu.nozzle.x-this.bodyPos.x),-(vu.nozzle.z-this.bodyPos.z)),this.body.setPlacement(this.bodyPos.x,this.bodyPos.z,this.bodyYaw),this.body.group.updateMatrixWorld(!0),this.nozzle.teleport(vu.nozzle.x,vu.nozzle.z),this.nozzle.update(0,this.bodyPos),this.body.inletPoint(this.inlet),this.body.inletDir(this.inletDir),this.nozzle.hoseAttach(this.attach),this.nozzle.hoseAttachDir(this.attachDir),this.hose=new Q_(this.ctx,this.attach,this.attachDir,this.inlet,this.inletDir),this.hose.setBodyCollider(this.bodyPos,.25),this.packets=new dv(this.ctx,this.hose),this.intake=new fv(this.packets),this.dust=new vf(this.ctx),this.scene.add(this.body.group,this.nozzle.group,this.hose.group,this.packets.group,this.dust.group),this.finale=new Sv(this),this.deps={suction:this.suction,intake:this.intake,light:this.light,carpet:this.carpet,sofa:this.sofa},this.camDrive={body:this.bodyPos,nozzle:this.nozzle.state.pos,grabbed:!1,interest:null,interestWeight:0,bodyFocus:0,overridePos:null,overrideTarget:null,overrideBlend:0},this.audioState={motor:0,intake:0,fullness:0,nozzleSpeed:0,surfaceAir:new Float32Array(5),hoseFlux:0,hosePan:0,nozzlePan:0,bodyPan:0},this.wireEvents(),this.startRound(null),this.applyDebugParams(),window.addEventListener(`resize`,()=>this.resize()),window.visualViewport?.addEventListener(`resize`,()=>this.resize()),window.addEventListener(`orientationchange`,()=>setTimeout(()=>this.resize(),250)),this.resize(),this.timer.connect(document),t.setAnimationLoop(()=>this.frame()),this.exposeDebug()}wireEvents(){this.packets.events.arrive=e=>{this.ledger.add(e.amount,e.color,e.hue,e.surface,e.rare),!this.finale.active&&this.capTarget<this.ledger.capacity&&(this.ledger.capacity=Math.max(this.capTarget,this.ledger.capacity-e.amount*1.8)),this.body.deposit(e.color,e.amount),this.audio.deposit(Math.min(1,.25+e.amount*.5),this.audioState.bodyPan)},this.packets.events.bend=(e,t,n)=>{n>.22&&this.audio.sparkle(Math.min(1,n*(e.clump?1.4:1)),this.panOf(t))},this.packets.events.emit=e=>this.finale.emitFromNozzle(e.color,e.amount,e.rare),this.intake.onSwallow=(e,t,n)=>{n?.clump?(this.audio.zip(1,this.audioState.nozzlePan,.85),this.nozzle.swallowPulse(1)):e>.2?this.nozzle.swallowPulse(Math.min(.4,e)):n?.length&&Math.random()<.25?this.audio.zip(.35,this.audioState.nozzlePan,.6):t===Y.HIDDEN&&Math.random()<.08&&this.audio.zip(.3,this.audioState.nozzlePan,1)},this.dust.events.clumpPop=e=>{this.t-this.lastPop>.12&&this.audio.pop(1,this.panOf(e)),this.lastPop=this.t},this.dust.events.rareEmerge=e=>this.audio.sparkle(.7,this.panOf(e)),this.body.onLatchPop=()=>this.audio.latchHint(this.audioState.bodyPan)}startRound(e){this.rng=new Ju(this.seedBase+this.round*7919);let t={light:this.light,carpet:this.carpet,sofa:this.sofa};e?this.dust.respawn(this.rng,t,this.nozzle.state.pos,e):this.dust.seed(this.rng,t,this.nozzle.state.pos),e||this.reseedCurtain(),this.ledger.reset(),this.fullAnnounced=!1}beginNextRound(e){this.round++,this.body.resetAfterFinale(),this.startRound(e)}reseedCurtain(){this.curtain.reseed(this.rng,this.dust.hueShift,bu.curtain)}applyDebugParams(){let e=Number(this.params.get(`fill`));e>0&&this.prefill(e),this.params.get(`finale`)===`1`&&(this.prefill(1.02),setTimeout(()=>this.startFinale(),1500))}prefill(e){let t=this.ledger.capacity*e;for(let[e,n,r]of[[0,.42,.22],[1,.25,.08],[2,.16,.62],[3,.12,.86],[4,.05,.5]]){let i=Lu(r);this.ledger.add(t*n,i,r,e,e===4);for(let e=0;e<8;e++)this.body.deposit(i,.1)}}startFinale(){this.finale.active||(this.director.setPhase(`finale`),this.finale.start(this.seedBase+this.round*131))}resize(){let e=window.visualViewport?.width??window.innerWidth,t=window.visualViewport?.height??window.innerHeight;this.cssW=Math.max(1,Math.round(e)),this.cssH=Math.max(1,Math.round(t));let n=Ku(this.quality,this.cssW,this.cssH);this.renderer.setPixelRatio(n),this.renderer.setSize(this.cssW,this.cssH,!1),this.renderer.domElement.style.width=this.cssW+`px`,this.renderer.domElement.style.height=this.cssH+`px`,this.post.setSize(this.cssW,this.cssH,n),this.rig.safe=Ev(),this.rig.setViewport(this.cssW,this.cssH),this.dust.setViewport(this.cssH*n,this.camera.fov)}panOf(e){return this.tmpV2.copy(e).project(this.camera),ku(this.tmpV2.x,-1,1)*.8}floorPoint(e,t,n){return this.ndc.set(e/this.cssW*2-1,-(t/this.cssH)*2+1),this.raycaster.setFromCamera(this.ndc,this.camera),this.raycaster.ray.intersectPlane(this.floorPlane,n)!==null}frame(){this.timer.update();let e=Math.min(this.timer.getDelta(),1/20);if(e<=0)return;let t=this.simSteps;for(let n=0;n<t;n++)this.step(t>1?1/20:e,n===t-1)}step(e,t){this.t+=e,this.frameNo++,Xu.uTime.value=this.t;let n=this.frameState;n.t=this.t,n.dt=e,n.frame=this.frameNo,this.adaptive.sample(e)&&(this.resize(),this.carpet.setShells(this.quality.shellsActive)),this.handleInput(n),this.updatePhase(n),this.motor=Mu(this.motor,this.motorTarget,this.motorTarget>this.motor?1.6:5,e);let r=this.nozzle.state;r.air=this.motor,r.grabbed=this.input.active&&!this.touchConsumed,this.nozzle.update(e,this.bodyPos),this.updateBody(e);let i=this.carpet.contains(this.bodyPos.x,this.bodyPos.z,-.3);this.carpet.setContactShadow(this.bodyPos.x,this.bodyPos.z,.28,i?.55:0),this.suction.mouth.copy(r.mouth),this.suction.forward.copy(r.forward),this.suction.strength=this.motor,Xu.uNozzle.value.copy(r.mouth),Xu.uNozzleDir.value.copy(r.forward),Xu.uAir.value=this.motor,this.nozzle.hoseAttach(this.attach),this.nozzle.hoseAttachDir(this.attachDir),this.body.inletPoint(this.inlet),this.body.inletDir(this.inletDir),this.hose.setBodyCollider(this.bodyPos,.25),this.hose.update(e,this.attach,this.attachDir,this.inlet,this.inletDir);let a=this.deps;this.sofa.update(n),this.carpet.update(n,r,this.suction),this.dust.update(n,a),this.dust.updateSpecial(n,this.light),this.curtain.update(n,this.suction,this.motor),this.ribbons.update(n,this.suction,this.finale.active?null:this.intake,this.finale.active?`free`:`suck`),this.intake.update(e),this.packets.update(e),this.ledger.update(e),this.updateCapacity(),this.ledger.averageColor(this.ledgerColor),this.nozzle.intakeGlow=Au(this.intake.rate*.45),this.nozzle.intakeColor.lerp(this.intake.lastColor,1-Math.exp(-e*4)),this.body.update(n,{fullness:this.finale.active?Math.max(0,this.ledger.fullness):this.ledger.fullness,motor:this.motor,intake:Au(this.ledger.rate*.5),color:this.ledgerColor}),this.finale.active&&this.finale.update(n),this.finale.done&&(this.finale.done=!1,this.packets.dir=1,this.hose.flowDir=1,this.motorTarget=1,this.audio.motorStart(),this.director.setPhase(`play`)),this.updateIllumination(n),this.emitLight(n),this.light.commit(e),this.mist.update(n,1),this.finale.active||this.sky.update(n,0,0),this.room.update(n),this.interestTimer-=e,this.interestTimer<=0&&(this.interestTimer=.5,this.pickInterest()),this.updateCamera(e);let o=this.quality.shadowRefresh;this.quality.shadows&&o>0&&this.frameNo%o===0&&(this.renderer.shadowMap.needsUpdate=!0),this.updateAudio(e),t&&(this.post.render(this.scene,this.camera),this.input.endFrame())}handleInput(e){let t=this.input;if(t.pressed&&(this.audio.unlock(),this.director.engaged||(this.director.engaged=!0,this.audio.motorStart()),this.touchConsumed=!1,this.director.phase===`full`&&this.body.hitScore(t.x,t.y,this.camera,this.cssW,this.cssH)>0&&(this.touchConsumed=!0,this.startFinale()),this.grabDX=0,this.grabDY=-this.fingerLift(),this.nozzle.screenDistance(t.x,t.y,this.camera,this.cssW,this.cssH)<64)){let e=this.tmpV2.copy(this.nozzle.state.pos).project(this.camera);this.grabDX=(e.x*.5+.5)*this.cssW-t.x,this.grabDY=(.5-e.y*.5)*this.cssH-t.y}t.released&&(this.touchConsumed=!1);let n=this.nozzle.state;if(this.finale.active){t.active&&this.finale.acceptsNozzle&&!this.touchConsumed?this.driveNozzleToFinger():this.finale.auroraReady&&t.active&&(this.touchSound-=e.dt,(t.pressed||this.touchSound<=0)&&(this.touchSound=.28,this.ndc.set(t.x/this.cssW*2-1,-(t.y/this.cssH)*2+1),this.raycaster.setFromCamera(this.ndc,this.camera),this.finale.touchPoint(this.raycaster.ray,this.tmpV)&&(this.sky.touch(this.tmpV),this.audio.finaleTouch(this.ndc.x*.8,Au(.5+this.ndc.y*.5)))));return}if(t.active&&!this.touchConsumed)this.driveNozzleToFinger();else if(this.autoplay)this.autoplayDrive(e);else{let r=t.idleFor(),i=this.director.updateHome(e.dt,r,n.pos,this.bodyPos),a=!i&&this.director.updateDemo(e.dt,r,n.pos,this.interest);a&&this.director.demoJustStarted()&&this.audio.idleNudge(this.audioState.nozzlePan),(i||a)&&this.targetNozzle(this.director.auto.x,this.director.auto.z)}this.nozzle.haloIdle=+(!t.active&&t.idleFor()>2.5&&this.director.phase===`play`)}fingerLift(){return this.input.pointerType===`mouse`?0:Math.min(38,this.cssH*.045)}driveNozzleToFinger(){let e=this.input,t=1-Math.exp(-this.frameState.dt*3.5);this.grabDX+=(0-this.grabDX)*t,this.grabDY+=(-this.fingerLift()-this.grabDY)*t,this.ndc.set((e.x+this.grabDX)/this.cssW*2-1,-((e.y+this.grabDY)/this.cssH)*2+1),this.raycaster.setFromCamera(this.ndc,this.camera);let n=this.raycaster.ray,r=this.tmpV;n.intersectPlane(this.seatPlane,r)&&Yd(r.x,r.z,.02)||n.intersectBox(this.sofaBox,r)&&r.y>J.seatH*.6?this.nozzle.setTarget(r.x,Math.min(r.z,Jd.z1)):n.intersectPlane(this.floorPlane,r)&&(r.z<J.cz-J.d/2+.05&&Math.abs(r.x-J.cx)<J.w/2?this.nozzle.setTarget(r.x,Jd.z0):this.targetNozzle(r.x,r.z))}targetNozzle(e,t){let n=this.bodyPos,r=e-n.x,i=t-n.z,a=Math.hypot(r,i),o=.44;if(a<o){a<.2&&(r=this.nozzle.state.pos.x-n.x,i=this.nozzle.state.pos.z-n.z);let s=Math.hypot(r,i)||1;e=n.x+r/s*o,t=n.z+i/s*o}this.nozzle.setTarget(e,t)}autoplayDrive(e){if(this.nozzle.state,this.director.phase===`full`){this.director.fullTime>2.5&&this.startFinale();return}this.autoplayAngle+=e.dt*2.4;let t=this.interest??this.tmpV.set(.9,0,-2.4),n=.18;this.nozzle.setTarget(t.x+Math.cos(this.autoplayAngle)*n,t.z+Math.sin(this.autoplayAngle)*n*.6)}updatePhase(e){let t=this.director;t.tick(e.dt,this.input.idleFor()<12||this.autoplay),t.phase===`play`&&this.ledger.fullness>=1&&this.dust.spawning===0&&(t.setPhase(`full`),this.fullAnnounced||(this.fullAnnounced=!0,this.audio.fullReached()))}updateBody(e){let t=this.nozzle.state,n=this.hose.tension,r=t.pos.x-this.bodyPos.x,i=t.pos.z-this.bodyPos.z,a=Math.hypot(r,i)+1e-4;if(n>0){let t=Math.min(1.7,n*2);this.bodyVel.x=Mu(this.bodyVel.x,r/a*t,6,e),this.bodyVel.z=Mu(this.bodyVel.z,i/a*t,6,e)}else this.bodyVel.multiplyScalar(Math.exp(-e*5));this.bodyPos.x+=this.bodyVel.x*e,this.bodyPos.z+=this.bodyVel.z*e;let o=Kd(this.bodyPos.x,this.bodyPos.z,.34,this.walk);if(this.bodyPos.x=o[0],this.bodyPos.z=o[1],n>.1||a>Su.length*.65){let t=Math.atan2(-r,-i)-this.bodyYaw;t=Math.atan2(Math.sin(t),Math.cos(t)),this.bodyYaw+=t*(1-Math.exp(-e*2.2*Math.min(1,n+.3)))}this.body.setPlacement(this.bodyPos.x,this.bodyPos.z,this.bodyYaw)}updateCapacity(){let e=this.dust.totalRemaining()+this.curtain.remaining();this.capTarget=this.director.capacity(this.ledger.total,e),this.director.phase===`play`&&e<.3&&this.ledger.total>1&&this.ledger.rate<.02&&this.intake.rate<.02&&(this.ledger.capacity=Math.min(this.ledger.capacity,this.ledger.total))}pickInterest(){let e=this.nozzle.state,t=this.ledger.fullness;this.interest=this.dust.interest(e.pos.x,e.pos.z,this.interestPt);let n=this.dust.interestScore,r=this.curtain.remaining();if(r>.5){let i=(fu.x0+fu.x1)/2,a=fu.z+.45,o=Math.hypot(i-e.pos.x,a-e.pos.z),s=r*.35/(.6+o*o)*(.3+.7*X(.2,.45,t));s>n&&(n=s,this.interest=this.interestPt.set(i,0,a))}let i=this.dust.remaining[Y.HIDDEN];if(i>.5&&t>.35){let r=this.dust.spot,a=(r.x0+r.x1)/2+r.open[0]*((r.x1-r.x0)/2+.3),o=(r.z0+r.z1)/2+r.open[1]*((r.z1-r.z0)/2+.3),s=Math.hypot(a-e.pos.x,o-e.pos.z);i*.3/(.6+s*s)*X(.35,.65,t)>n&&(this.interest=this.interestPt.set(a,0,o))}}updateCamera(e){let t=this.director,n=this.camDrive,r=this.input.idleFor(),i=t.phase===`full`;n.grabbed=this.nozzle.state.grabbed,n.bodyFocus=i?X(.5,2.2,r)*(.7+.3*X(5,15,t.fullTime)):0,n.interest=i?null:this.interest,n.interestWeight=i?0:Au((r-1.5)/3)*.8;let a=this.finale.active;n.overridePos=a?this.finale.camPos:null,n.overrideTarget=a?this.finale.camTarget:null,n.overrideBlend=a?this.finale.camBlend:0,this.rig.update(e,n)}emitLight(e){let t=this.light,n=this.hose;for(let e=2;e<n.samples;e+=4){let r=n.light[e];if(r<.02)continue;let i=n.pos[e*3+1],a=r*.22*Math.exp(-i*3);t.addDyn(n.pos[e*3],n.pos[e*3+2],n.lightCol[e*3]*a,n.lightCol[e*3+1]*a,n.lightCol[e*3+2]*a)}this.packets.forEachCaustic((e,n,r)=>t.addDyn(e,n,r*.18,r*.16,r*.2));let r=this.body.glow(this.tmpV,this.tmpC);r>.001&&t.addDynDisc(this.tmpV.x,this.tmpV.z,.55,this.tmpC.r*r,this.tmpC.g*r,this.tmpC.b*r);let i=this.nozzle.intakeGlow;if(i>.01){let e=this.nozzle.intakeColor,n=this.nozzle.state.mouth;t.addDyn(n.x,n.z,e.r*i*.35,e.g*i*.35,e.b*i*.35)}let a=this.dust.remaining[Y.HIDDEN];if(a>.05){let n=this.dust.spot;Ru(420+180*Math.sin(e.t*.45)+90*Math.sin(e.t*1.3),.6+.3*Math.sin(e.t*.3),this.tmpC);let r=a*.16*(1+.25*Math.sin(e.t*1.7)),i=(n.x0+n.x1)/2,o=(n.z0+n.z1)/2,s=i+n.open[0]*((n.x1-n.x0)/2+.1),c=o+n.open[1]*((n.z1-n.z0)/2+.1);t.addDynDisc(s,c,.45,this.tmpC.r*r,this.tmpC.g*r,this.tmpC.b*r),t.addDynDisc(i,o,.35,this.tmpC.r*r*.8,this.tmpC.g*r*.8,this.tmpC.b*r*.8)}}updateIllumination(e){let t=this.finale.active?this.finale.aurora:0,n=this.sky.ambient(this.tmpC);Xu.uAuroraAmbient.value.copy(n).multiplyScalar(.4),Xu.uAuroraCeiling.value.copy(n).multiplyScalar(.35*this.finale.grow),Xu.uFinale.value=t,this.room.setIllumination({finale:t,auroraColor:this.ledgerColor,auroraIntensity:t}),this.post.params.exposure=Mu(this.post.params.exposure,1+t*.05,2,e.dt)}updateAudio(e){let t=this.audioState,n=this.nozzle.state;t.motor=this.motor,t.intake=Au(this.intake.rate*.25),t.fullness=this.ledger.fullness,t.nozzleSpeed=n.speed;for(let e=0;e<5;e++)t.surfaceAir[e]=this.dust.surfaceAir[e];let r=ku(n.mouth.x,fu.x0,fu.x1),i=Math.hypot(n.mouth.x-r,n.mouth.z-fu.z);t.surfaceAir[3]=Math.max(t.surfaceAir[3],this.motor*(1-X(.25,1.15,i))),t.hoseFlux=this.packets.flux,t.hosePan=this.panOf(this.packets.lead),t.nozzlePan=this.panOf(n.pos),t.bodyPan=this.panOf(this.bodyPos),this.audio.update(e,t)}exposeDebug(){let e=this,t=(t,n,r)=>{let i=new B(t,n,r).project(e.camera);return{x:(i.x*.5+.5)*e.cssW,y:(-i.y*.5+.5)*e.cssH}};window.__game={get phase(){return e.director.phase},get fullness(){return e.ledger.fullness},get total(){return e.ledger.total},get finaleT(){return e.finale.t},get tier(){return e.quality.tier},get remaining(){return Array.from(e.dust.remaining)},screenOf:t,body:()=>t(e.bodyPos.x,.2,e.bodyPos.z),nozzle:()=>t(e.nozzle.state.pos.x,.03,e.nozzle.state.pos.z),interest:()=>e.interest?t(e.interest.x,0,e.interest.z):null,prefill:t=>e.prefill(t),game:e}}};function Ev(){let e=document.createElement(`div`);e.style.cssText=`position:fixed;left:0;top:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)`,document.body.appendChild(e);let t=getComputedStyle(e),n={top:parseFloat(t.paddingTop)||0,right:parseFloat(t.paddingRight)||0,bottom:parseFloat(t.paddingBottom)||0,left:parseFloat(t.paddingLeft)||0};return e.remove(),n}function Dv(){try{return!!document.createElement(`canvas`).getContext(`webgl2`)}catch{return!1}}var Ov=document.getElementById(`app`);Dv()?new Tv(Ov):Ov.classList.add(`fallback`);