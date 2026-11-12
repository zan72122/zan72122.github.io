var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=1e3,r=1001,i=1002,a=1003,o=1004,s=1005,c=1006,l=1007,u=1008,d=1009,f=1010,p=1011,m=1012,h=1013,g=1014,_=1015,v=1016,y=1017,b=1018,x=1020,S=35902,C=35899,w=1021,T=1022,E=1023,D=1026,O=1027,k=1028,A=1029,j=1030,ee=1031,M=1033,te=33776,N=33777,P=33778,ne=33779,re=35840,ie=35841,ae=35842,oe=35843,se=36196,ce=37492,F=37496,le=37808,ue=37809,de=37810,fe=37811,pe=37812,me=37813,I=37814,he=37815,ge=37816,_e=37817,L=37818,ve=37819,R=37820,ye=37821,be=36492,xe=36494,Se=36495,Ce=36283,we=36284,Te=36285,Ee=36286,De=2300,Oe=2301,ke=2302,Ae=2400,je=2401,Me=2402,Ne=3200,Pe=3201,Fe=`srgb`,Ie=`srgb-linear`,Le=`linear`,Re=`srgb`,ze=7680,Be=35044,Ve=35048,He=2e3,Ue=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},We=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ge=1234567,Ke=Math.PI/180,qe=180/Math.PI;function Je(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(We[e&255]+We[e>>8&255]+We[e>>16&255]+We[e>>24&255]+`-`+We[t&255]+We[t>>8&255]+`-`+We[t>>16&15|64]+We[t>>24&255]+`-`+We[n&63|128]+We[n>>8&255]+`-`+We[n>>16&255]+We[n>>24&255]+We[r&255]+We[r>>8&255]+We[r>>16&255]+We[r>>24&255]).toLowerCase()}function Ye(e,t,n){return Math.max(t,Math.min(n,e))}function Xe(e,t){return(e%t+t)%t}function Ze(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Qe(e,t,n){return e===t?0:(n-e)/(t-e)}function $e(e,t,n){return(1-n)*e+n*t}function et(e,t,n,r){return $e(e,t,1-Math.exp(-n*r))}function tt(e,t=1){return t-Math.abs(Xe(e,t*2)-t)}function nt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function rt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function it(e,t){return e+Math.floor(Math.random()*(t-e+1))}function at(e,t){return e+Math.random()*(t-e)}function ot(e){return e*(.5-Math.random())}function st(e){e!==void 0&&(Ge=e);let t=Ge+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ct(e){return e*Ke}function lt(e){return e*qe}function ut(e){return!(e&e-1)&&e!==0}function dt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ft(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function pt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function mt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function ht(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var gt={DEG2RAD:Ke,RAD2DEG:qe,generateUUID:Je,clamp:Ye,euclideanModulo:Xe,mapLinear:Ze,inverseLerp:Qe,lerp:$e,damp:et,pingpong:tt,smoothstep:nt,smootherstep:rt,randInt:it,randFloat:at,randFloatSpread:ot,seededRandom:st,degToRad:ct,radToDeg:lt,isPowerOfTwo:ut,ceilPowerOfTwo:dt,floorPowerOfTwo:ft,setQuaternionFromProperEuler:pt,normalize:ht,denormalize:mt},z=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_t=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vt.copy(this).projectOnVector(e),this.sub(vt)}reflect(e){return this.sub(vt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vt=new B,yt=new _t,bt=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xt.makeScale(e,t)),this}rotate(e){return this.premultiply(xt.makeRotation(-e)),this}translate(e,t){return this.premultiply(xt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xt=new bt;function St(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ct(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function wt(){let e=Ct(`canvas`);return e.style.display=`block`,e}var Tt={};function Et(e){e in Tt||(Tt[e]=!0,console.warn(e))}function Dt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Ot=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kt=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function At(){let e={enabled:!0,workingColorSpace:Ie,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Mt(e.r),e.g=Mt(e.g),e.b=Mt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Nt(e.r),e.g=Nt(e.g),e.b=Nt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Le:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Et(`THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Et(`THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ie]:{primaries:t,whitePoint:r,transfer:Le,toXYZ:Ot,fromXYZ:kt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:Ot,fromXYZ:kt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),e}var jt=At();function Mt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Nt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Pt,Ft=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pt===void 0&&(Pt=Ct(`canvas`)),Pt.width=e.width,Pt.height=e.height;let t=Pt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Pt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ct(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Mt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Mt(t[e]/255)*255):t[e]=Mt(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},It=0,Lt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:It++}),this.uuid=Je(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Rt(r[t].image)):e.push(Rt(r[t]))}else e=Rt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Rt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ft.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var zt=0,Bt=new B,Vt=class e extends Ue{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=r,a=r,o=c,s=u,l=E,f=d,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=Je(),this.name=``,this.source=new Lt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=f,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bt).x}get height(){return this.source.getSize(Bt).y}get depth(){return this.source.getSize(Bt).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case n:e.x-=Math.floor(e.x);break;case r:e.x=e.x<0?0:1;break;case i:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case n:e.y-=Math.floor(e.y);break;case r:e.y=e.y<0?0:1;break;case i:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null,Vt.DEFAULT_MAPPING=300,Vt.DEFAULT_ANISOTROPY=1;var Ht=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ut=class extends Ue{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:c,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);let r=new Vt({width:e,height:t,depth:n.depth});this.textures=[];let i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:c,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Lt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Wt=class extends Ut{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Gt=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Kt=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=a,this.minFilter=a,this.wrapR=r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qt=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Yt):Yt.fromBufferAttribute(r,t),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Xt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Xt.copy(e.boundingBox)),Xt.applyMatrix4(e.matrixWorld),this.union(Xt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rn),an.subVectors(this.max,rn),Zt.subVectors(e.a,rn),Qt.subVectors(e.b,rn),$t.subVectors(e.c,rn),en.subVectors(Qt,Zt),tn.subVectors($t,Qt),nn.subVectors(Zt,$t);let t=[0,-en.z,en.y,0,-tn.z,tn.y,0,-nn.z,nn.y,en.z,0,-en.x,tn.z,0,-tn.x,nn.z,0,-nn.x,-en.y,en.x,0,-tn.y,tn.x,0,-nn.y,nn.x,0];return!cn(t,Zt,Qt,$t,an)||(t=[1,0,0,0,1,0,0,0,1],!cn(t,Zt,Qt,$t,an))?!1:(on.crossVectors(en,tn),t=[on.x,on.y,on.z],cn(t,Zt,Qt,$t,an))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Jt=[new B,new B,new B,new B,new B,new B,new B,new B],Yt=new B,Xt=new qt,Zt=new B,Qt=new B,$t=new B,en=new B,tn=new B,nn=new B,rn=new B,an=new B,on=new B,sn=new B;function cn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){sn.fromArray(e,a);let o=i.x*Math.abs(sn.x)+i.y*Math.abs(sn.y)+i.z*Math.abs(sn.z),s=t.dot(sn),c=n.dot(sn),l=r.dot(sn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ln=new qt,un=new B,dn=new B,fn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ln.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;un.subVectors(e,this.center);let t=un.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(un,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(un.copy(e.center).add(dn)),this.expandByPoint(un.copy(e.center).sub(dn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pn=new B,mn=new B,hn=new B,gn=new B,_n=new B,vn=new B,yn=new B,bn=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){mn.copy(e).add(t).multiplyScalar(.5),hn.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(mn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(hn),o=gn.dot(this.direction),s=-gn.dot(hn),c=gn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(mn).addScaledVector(hn,d),f}intersectSphere(e,t){pn.subVectors(e.center,this.origin);let n=pn.dot(this.direction),r=pn.dot(pn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,r,i){_n.subVectors(t,e),vn.subVectors(n,e),yn.crossVectors(_n,vn);let a=this.direction.dot(yn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gn.subVectors(this.origin,e);let s=o*this.direction.dot(vn.crossVectors(gn,vn));if(s<0)return null;let c=o*this.direction.dot(_n.cross(gn));if(c<0||s+c>a)return null;let l=-o*gn.dot(yn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},V=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/xn.setFromMatrixColumn(e,0).length(),i=1/xn.setFromMatrixColumn(e,1).length(),a=1/xn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cn,e,wn)}lookAt(e,t,n){let r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Tn.crossVectors(n,Dn),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Tn.crossVectors(n,Dn)),Tn.normalize(),En.crossVectors(Dn,Tn),r[0]=Tn.x,r[4]=En.x,r[8]=Dn.x,r[1]=Tn.y,r[5]=En.y,r[9]=Dn.y,r[2]=Tn.z,r[6]=En.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],N=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*N,i[12]=a*w+o*O+s*ee+c*P,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*N,i[13]=l*w+u*O+d*ee+f*P,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*N,i[14]=p*w+m*O+h*ee+g*P,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*N,i[15]=_*w+v*O+y*ee+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=xn.set(r[0],r[1],r[2]).length(),a=xn.set(r[4],r[5],r[6]).length(),o=xn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);let s=1/i,c=1/a,l=1/o;return Sn.elements[0]*=s,Sn.elements[1]*=s,Sn.elements[2]*=s,Sn.elements[4]*=c,Sn.elements[5]*=c,Sn.elements[6]*=c,Sn.elements[8]*=l,Sn.elements[9]*=l,Sn.elements[10]*=l,t.setFromRotationMatrix(Sn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xn=new B,Sn=new V,Cn=new B(0,0,0),wn=new B(1,1,1),Tn=new B,En=new B,Dn=new B,On=new V,kn=new _t,An=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Ye(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Ye(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return On.makeRotationFromQuaternion(e),this.setFromRotationMatrix(On,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kn.setFromEuler(this),this.setFromQuaternion(kn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER=`XYZ`;var jn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Mn=0,Nn=new B,Pn=new _t,Fn=new V,In=new B,Ln=new B,Rn=new B,zn=new _t,Bn=new B(1,0,0),Vn=new B(0,1,0),Hn=new B(0,0,1),Un={type:`added`},Wn={type:`removed`},Gn={type:`childadded`,child:null},Kn={type:`childremoved`,child:null},qn=class e extends Ue{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mn++}),this.uuid=Je(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new An,r=new _t,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new V},normalMatrix:{value:new bt}}),this.matrix=new V,this.matrixWorld=new V,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.multiply(Pn),this}rotateOnWorldAxis(e,t){return Pn.setFromAxisAngle(e,t),this.quaternion.premultiply(Pn),this}rotateX(e){return this.rotateOnAxis(Bn,e)}rotateY(e){return this.rotateOnAxis(Vn,e)}rotateZ(e){return this.rotateOnAxis(Hn,e)}translateOnAxis(e,t){return Nn.copy(e).applyQuaternion(this.quaternion),this.position.add(Nn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bn,e)}translateY(e){return this.translateOnAxis(Vn,e)}translateZ(e){return this.translateOnAxis(Hn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?In.copy(e):In.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ln.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ln,In,this.up):Fn.lookAt(In,Ln,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),Pn.setFromRotationMatrix(Fn),this.quaternion.premultiply(Pn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Un),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wn),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Un),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ln,e,Rn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ln,zn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};qn.DEFAULT_UP=new B(0,1,0),qn.DEFAULT_MATRIX_AUTO_UPDATE=!0,qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new B,Yn=new B,Xn=new B,Zn=new B,Qn=new B,$n=new B,er=new B,tr=new B,nr=new B,rr=new B,ir=new Ht,ar=new Ht,or=new Ht,sr=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jn.subVectors(e,t),r.cross(Jn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Jn.subVectors(r,t),Yn.subVectors(n,t),Xn.subVectors(e,t);let a=Jn.dot(Jn),o=Jn.dot(Yn),s=Jn.dot(Xn),c=Yn.dot(Yn),l=Yn.dot(Xn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zn)!==null&&Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Zn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Zn.x),s.addScaledVector(a,Zn.y),s.addScaledVector(o,Zn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ir.setScalar(0),ar.setScalar(0),or.setScalar(0),ir.fromBufferAttribute(e,t),ar.fromBufferAttribute(e,n),or.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ir,i.x),a.addScaledVector(ar,i.y),a.addScaledVector(or,i.z),a}static isFrontFacing(e,t,n,r){return Jn.subVectors(n,t),Yn.subVectors(e,t),Jn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Jn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Qn.subVectors(r,n),$n.subVectors(i,n),tr.subVectors(e,n);let s=Qn.dot(tr),c=$n.dot(tr);if(s<=0&&c<=0)return t.copy(n);nr.subVectors(e,r);let l=Qn.dot(nr),u=$n.dot(nr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Qn,a);rr.subVectors(e,i);let f=Qn.dot(rr),p=$n.dot(rr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector($n,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return er.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(er,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Qn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},ur={h:0,s:0,l:0};function dr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,jt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=jt.workingColorSpace){if(e=Xe(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=dr(i,r,e+1/3),this.g=dr(i,r,e),this.b=dr(i,r,e-1/3)}return jt.colorSpaceToWorking(this,r),this}setStyle(e,t=Fe){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){let n=cr[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mt(e.r),this.g=Mt(e.g),this.b=Mt(e.b),this}copyLinearToSRGB(e){return this.r=Nt(e.r),this.g=Nt(e.g),this.b=Nt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return jt.workingToColorSpace(fr.copy(this),e),Math.round(Ye(fr.r*255,0,255))*65536+Math.round(Ye(fr.g*255,0,255))*256+Math.round(Ye(fr.b*255,0,255))}getHexString(e=Fe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.workingToColorSpace(fr.copy(this),t);let n=fr.r,r=fr.g,i=fr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=jt.workingColorSpace){return jt.workingToColorSpace(fr.copy(this),t),e.r=fr.r,e.g=fr.g,e.b=fr.b,e}getStyle(e=Fe){jt.workingToColorSpace(fr.copy(this),e);let t=fr.r,n=fr.g,r=fr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+t,lr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(ur);let n=$e(lr.h,ur.h,t),r=$e(lr.s,ur.s,t),i=$e(lr.l,ur.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fr=new H;H.NAMES=cr;var pr=0,mr=class extends Ue{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pr++}),this.uuid=Je(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ze,this.stencilZFail=ze,this.stencilZPass=ze,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},hr=class extends mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gr=new B,_r=new z,vr=0,yr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Be,this.updateRanges=[],this.gpuType=_,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix4(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyNormalMatrix(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.transformDirection(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mt(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mt(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mt(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},br=class extends yr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},xr=class extends yr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},U=class extends yr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sr=0,Cr=new V,wr=new qn,Tr=new B,Er=new qt,Dr=new qt,Or=new B,kr=class e extends Ue{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sr++}),this.uuid=Je(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(St(e)?xr:br)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new bt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cr.makeRotationFromQuaternion(e),this.applyMatrix4(Cr),this}rotateX(e){return Cr.makeRotationX(e),this.applyMatrix4(Cr),this}rotateY(e){return Cr.makeRotationY(e),this.applyMatrix4(Cr),this}rotateZ(e){return Cr.makeRotationZ(e),this.applyMatrix4(Cr),this}translate(e,t,n){return Cr.makeTranslation(e,t,n),this.applyMatrix4(Cr),this}scale(e,t,n){return Cr.makeScale(e,t,n),this.applyMatrix4(Cr),this}lookAt(e){return wr.lookAt(e),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new U(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Er.setFromBufferAttribute(n),this.morphTargetsRelative?(Or.addVectors(this.boundingBox.min,Er.min),this.boundingBox.expandByPoint(Or),Or.addVectors(this.boundingBox.max,Er.max),this.boundingBox.expandByPoint(Or)):(this.boundingBox.expandByPoint(Er.min),this.boundingBox.expandByPoint(Er.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(Er.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Dr.setFromBufferAttribute(n),this.morphTargetsRelative?(Or.addVectors(Er.min,Dr.min),Er.expandByPoint(Or),Or.addVectors(Er.max,Dr.max),Er.expandByPoint(Or)):(Er.expandByPoint(Dr.min),Er.expandByPoint(Dr.max))}Er.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Or.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Or));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Or.fromBufferAttribute(a,t),o&&(Tr.fromBufferAttribute(e,t),Or.add(Tr)),r=Math.max(r,n.distanceToSquared(Or))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new yr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new yr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Or.fromBufferAttribute(e,t),Or.normalize(),e.setXYZ(t,Or.x,Or.y,Or.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new yr(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ar=new V,jr=new bn,Mr=new fn,Nr=new B,Pr=new B,Fr=new B,Ir=new B,Lr=new B,Rr=new B,zr=new B,Br=new B,W=class extends qn{constructor(e=new kr,t=new hr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Rr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Lr.fromBufferAttribute(s,e),a?Rr.addScaledVector(Lr,r):Rr.addScaledVector(Lr.sub(t),r))}t.add(Rr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(i),jr.copy(e.ray).recast(e.near),!(Mr.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Mr,Nr)===null||jr.origin.distanceToSquared(Nr)>(e.far-e.near)**2))&&(Ar.copy(i).invert(),jr.copy(e.ray).applyMatrix4(Ar),(n.boundingBox===null||jr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Hr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Hr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Hr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Hr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Vr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Br.copy(s),Br.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Br);return l<n.near||l>n.far?null:{distance:l,point:Br.clone(),object:e}}function Hr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Pr),e.getVertexPosition(c,Fr),e.getVertexPosition(l,Ir);let u=Vr(e,t,n,r,Pr,Fr,Ir,zr);if(u){let e=new B;sr.getBarycoord(zr,Pr,Fr,Ir,e),i&&(u.uv=sr.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=sr.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=sr.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};sr.getNormal(Pr,Fr,Ir,t.normal),u.face=t,u.barycoord=e}return u}var Ur=class e extends kr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new U(c,3)),this.setAttribute(`normal`,new U(l,3)),this.setAttribute(`uv`,new U(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Wr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Gr(e){let t={};for(let n=0;n<e.length;n++){let r=Wr(e[n]);for(let e in r)t[e]=r[e]}return t}function Kr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function qr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Jr={clone:Wr,merge:Gr},Yr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zr=class extends mr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yr,this.fragmentShader=Xr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Kr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qr=class extends qn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new V,this.projectionMatrix=new V,this.projectionMatrixInverse=new V,this.coordinateSystem=He,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$r=new B,ei=new z,ti=new z,ni=class extends Qr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qe*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ke*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qe*2*Math.atan(Math.tan(Ke*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,t){return this.getViewBounds(e,ei,ti),t.subVectors(ti,ei)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ke*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ri=-90,ii=1,ai=class extends qn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ni(ri,ii,e,t);r.layers=this.layers,this.add(r);let i=new ni(ri,ii,e,t);i.layers=this.layers,this.add(i);let a=new ni(ri,ii,e,t);a.layers=this.layers,this.add(a);let o=new ni(ri,ii,e,t);o.layers=this.layers,this.add(o);let s=new ni(ri,ii,e,t);s.layers=this.layers,this.add(s);let c=new ni(ri,ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},oi=class extends Vt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},si=class extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ur(5,5,5),i=new Zr({name:`CubemapFromEquirect`,uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=c),new ai(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},G=class extends qn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ci={type:`move`},li=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new G,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new G,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new G,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ci)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new G;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ui=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new H(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},di=class extends qn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},fi=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Be,this.updateRanges=[],this.version=0,this.uuid=Je()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pi=new B,mi=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix4(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyNormalMatrix(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.transformDirection(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new yr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hi=class extends mr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gi,_i=new B,vi=new B,yi=new B,bi=new z,xi=new z,Si=new V,Ci=new B,wi=new B,Ti=new B,Ei=new z,Di=new z,Oi=new z,ki=class extends qn{constructor(e=new hi){if(super(),this.isSprite=!0,this.type=`Sprite`,gi===void 0){gi=new kr;let e=new fi(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);gi.setIndex([0,1,2,0,2,3]),gi.setAttribute(`position`,new mi(e,3,0,!1)),gi.setAttribute(`uv`,new mi(e,2,3,!1))}this.geometry=gi,this.material=e,this.center=new z(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),vi.setFromMatrixScale(this.matrixWorld),Si.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),yi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vi.multiplyScalar(-yi.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ai(Ci.set(-.5,-.5,0),yi,a,vi,r,i),Ai(wi.set(.5,-.5,0),yi,a,vi,r,i),Ai(Ti.set(.5,.5,0),yi,a,vi,r,i),Ei.set(0,0),Di.set(1,0),Oi.set(1,1);let o=e.ray.intersectTriangle(Ci,wi,Ti,!1,_i);if(o===null&&(Ai(wi.set(-.5,.5,0),yi,a,vi,r,i),Di.set(0,1),o=e.ray.intersectTriangle(Ci,Ti,wi,!1,_i),o===null))return;let s=e.ray.origin.distanceTo(_i);s<e.near||s>e.far||t.push({distance:s,point:_i.clone(),uv:sr.getInterpolation(_i,Ci,wi,Ti,Ei,Di,Oi,new z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ai(e,t,n,r,i,a){bi.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?xi.copy(bi):(xi.x=a*bi.x-i*bi.y,xi.y=i*bi.x+a*bi.y),e.copy(t),e.x+=xi.x,e.y+=xi.y,e.applyMatrix4(Si)}var ji=class extends Vt{constructor(e=null,t=1,n=1,r,i,o,s,c,l=a,u=a,d,f){super(null,o,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mi=class extends yr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ni=new V,Pi=new V,Fi=[],Ii=new qt,Li=new V,Ri=new W,zi=new fn,Bi=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Li)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),Ii.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Ii)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),zi.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ri.geometry=this.geometry,Ri.material=this.material,Ri.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zi.copy(this.boundingSphere),zi.applyMatrix4(n),e.ray.intersectsSphere(zi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ni),Pi.multiplyMatrices(n,Ni),Ri.matrixWorld=Pi,Ri.raycast(e,Fi);for(let e=0,n=Fi.length;e<n;e++){let n=Fi[e];n.instanceId=i,n.object=this,t.push(n)}Fi.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ji(new Float32Array(r*this.count),r,this.count,k,_));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vi=new B,Hi=new B,Ui=new bt,Wi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Vi.subVectors(n,t).cross(Hi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Vi),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ui.getNormalMatrix(e),r=this.coplanarPoint(Vi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new fn,Ki=new z(.5,.5),qi=new B,Ji=class{constructor(e=new Wi,t=new Wi,n=new Wi,r=new Wi,i=new Wi,a=new Wi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=He,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476+Ki.distanceTo(e.center),Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(qi.x=r.normal.x>0?e.max.x:e.min.x,qi.y=r.normal.y>0?e.max.y:e.min.y,qi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yi=class extends mr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xi=new V,Zi=new bn,Qi=new fn,$i=new B,ea=class extends qn{constructor(e=new kr,t=new Yi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),Qi.radius+=i,e.ray.intersectsSphere(Qi)===!1)return;Xi.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Xi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);$i.fromBufferAttribute(l,n),ta($i,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)$i.fromBufferAttribute(l,a),ta($i,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ta(e,t,n,r,i,a,o){let s=Zi.distanceSqToPoint(e);if(s<n){let n=new B;Zi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var na=class extends Vt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ra=class extends Vt{constructor(e,t,n=g,r,i,o,s=a,c=a,l,u=D,d=1){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ia=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},aa=class e extends kr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new B,g=new B;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new U(o,3)),this.setAttribute(`normal`,new U(s,3)),this.setAttribute(`uv`,new U(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},oa=class e extends kr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new U(a,3)),this.setAttribute(`normal`,new U(o,3)),this.setAttribute(`uv`,new U(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},sa=class e extends kr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new U(u,3)),this.setAttribute(`normal`,new U(d,3)),this.setAttribute(`uv`,new U(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ca=class e extends sa{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},la=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn(`THREE.Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new z:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,r=[],i=[],a=[],o=new B,s=new V;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Ye(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Ye(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ua=class extends la{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new z){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},da=class extends ua{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function fa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var pa=new B,ma=new fa,ha=new fa,ga=new fa,_a=class extends la{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(pa.subVectors(r[0],r[1]).add(r[0]),c=pa);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(pa.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=pa),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ma.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ha.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ga.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ma.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ha.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ga.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ma.calc(s),ha.calc(s),ga.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function va(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ya(e,t){let n=1-e;return n*n*t}function ba(e,t){return 2*(1-e)*e*t}function xa(e,t){return e*e*t}function Sa(e,t,n,r){return ya(e,t)+ba(e,n)+xa(e,r)}function Ca(e,t){let n=1-e;return n*n*n*t}function wa(e,t){let n=1-e;return 3*n*n*e*t}function Ta(e,t){return 3*(1-e)*e*e*t}function Ea(e,t){return e*e*e*t}function Da(e,t,n,r,i){return Ca(e,t)+wa(e,n)+Ta(e,r)+Ea(e,i)}var Oa=class extends la{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Da(e,r.x,i.x,a.x,o.x),Da(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends la{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Da(e,r.x,i.x,a.x,o.x),Da(e,r.y,i.y,a.y,o.y),Da(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends la{constructor(e=new z,t=new z){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends la{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends la{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Sa(e,r.x,i.x,a.x),Sa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends la{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Sa(e,r.x,i.x,a.x),Sa(e,r.y,i.y,a.y),Sa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends la{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new z){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(va(o,s.x,c.x,l.x,u.x),va(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this}},Fa=Object.freeze({__proto__:null,ArcCurve:da,CatmullRomCurve3:_a,CubicBezierCurve:Oa,CubicBezierCurve3:ka,EllipseCurve:ua,LineCurve:Aa,LineCurve3:ja,QuadraticBezierCurve:Ma,QuadraticBezierCurve3:Na,SplineCurve:Pa}),Ia=class extends la{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Fa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Fa[n.type]().fromJSON(n))}return this}},La=class extends Ia{constructor(e){super(),this.type=`Path`,this.currentPoint=new z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Aa(this.currentPoint.clone(),new z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ma(this.currentPoint.clone(),new z(e,t),new z(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Oa(this.currentPoint.clone(),new z(e,t),new z(n,r),new z(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Pa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ua(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ra=class extends La{constructor(e){super(e),this.uuid=Je(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new La().fromJSON(n))}return this}};function za(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ba(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=qa(e,t,a,n)),e.length>80*n){s=1/0,c=1/0;let t=-1/0,r=-1/0;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ha(a,o,n,s,c,l,0),o}function Ba(e,t,n,r,i){let a;if(i===vo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=ho(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=ho(i/r|0,e[i],e[i+1],a);return a&&oo(a,a.next)&&(go(a),a=a.next),a}function Va(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(oo(n,n.next)||ao(n.prev,n,n.next)===0)){if(go(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ha(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Qa(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Wa(e,r,i,a):Ua(e))t.push(c.i,e.i,l.i),go(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Ga(Va(e),t),Ha(e,t,n,r,i,a,2)):o===2&&Ka(e,t,n,r,i,a):Ha(Va(e),t,n,r,i,a,1);break}}}function Ua(e){let t=e.prev,n=e,r=e.next;if(ao(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&ro(i,s,a,c,o,l,m.x,m.y)&&ao(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Wa(e,t,n,r){let i=e.prev,a=e,o=e.next;if(ao(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=eo(p,m,t,n,r),v=eo(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ro(s,u,c,d,l,f,y.x,y.y)&&ao(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ro(s,u,c,d,l,f,b.x,b.y)&&ao(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ro(s,u,c,d,l,f,y.x,y.y)&&ao(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ro(s,u,c,d,l,f,b.x,b.y)&&ao(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ga(e,t){let n=e;do{let r=n.prev,i=n.next.next;!oo(r,i)&&so(r,n,n.next,i)&&fo(r,i)&&fo(i,r)&&(t.push(r.i,n.i,i.i),go(n),go(n.next),n=e=i),n=n.next}while(n!==e);return Va(n)}function Ka(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&io(o,e)){let s=mo(o,e);o=Va(o,o.next),s=Va(s,s.next),Ha(o,t,n,r,i,a,0),Ha(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function qa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ba(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(to(o))}i.sort(Ja);for(let e=0;e<i.length;e++)n=Ya(i[e],n);return n}function Ja(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ya(e,t){let n=Xa(e,t);if(!n)return t;let r=mo(n,e);return Va(r,r.next),Va(n,n.next)}function Xa(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(oo(e,n))return n;do{if(oo(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&no(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);fo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Za(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Za(e,t){return ao(e.prev,e,t.prev)<0&&ao(t.next,e,e.next)<0}function Qa(e,t,n,r){let i=e;do i.z===0&&(i.z=eo(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,$a(i)}function $a(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function eo(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function to(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function no(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function ro(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&no(e,t,n,r,i,a,o,s)}function io(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!uo(e,t)&&(fo(e,t)&&fo(t,e)&&po(e,t)&&(ao(e.prev,e,t.prev)||ao(e,t.prev,t))||oo(e,t)&&ao(e.prev,e,e.next)>0&&ao(t.prev,t,t.next)>0)}function ao(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function oo(e,t){return e.x===t.x&&e.y===t.y}function so(e,t,n,r){let i=lo(ao(e,t,n)),a=lo(ao(e,t,r)),o=lo(ao(n,r,e)),s=lo(ao(n,r,t));return!!(i!==a&&o!==s||i===0&&co(e,n,t)||a===0&&co(e,r,t)||o===0&&co(n,e,r)||s===0&&co(n,t,r))}function co(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function lo(e){return e>0?1:e<0?-1:0}function uo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&so(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function fo(e,t){return ao(e.prev,e,e.next)<0?ao(e,t,e.next)>=0&&ao(e,e.prev,t)>=0:ao(e,t,e.prev)<0||ao(e,e.next,t)<0}function po(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function mo(e,t){let n=_o(e.i,e.x,e.y),r=_o(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function ho(e,t,n,r){let i=_o(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function go(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function _o(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var yo=class{static triangulate(e,t,n=2){return za(e,t,n)}},bo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];xo(e),So(n,e);let a=e.length;t.forEach(xo);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,So(n,t[e]);let o=yo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function xo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function So(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Co=class e extends kr{constructor(e=new Ra([new z(.5,.5),new z(-.5,.5),new z(-.5,-.5),new z(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new U(r,3)),this.setAttribute(`uv`,new U(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?wo:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new B,b=new B,x=new B),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!bo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];bo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new z(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new z(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let ee=[],M,te=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];M=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),M[e]=A(t[e],t[r],t[i]);ee.push(M),te=te.concat(M)}let N;if(p===0)N=bo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);oe(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];M=ee[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],M[e],a);oe(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}N=bo.triangulateShape(e,t)}let P=N.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],te[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),oe(x.x,x.y,x.z)):oe(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],te[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),oe(x.x,x.y,x.z)):oe(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);oe(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];M=ee[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],M[e],r);_?oe(i.x,i.y+g[s-1].y,g[s-1].x+n):oe(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<P;e++){let n=N[e];se(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<P;e++){let n=N[e];se(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<P;e++){let t=N[e];se(t[2],t[1],t[0])}for(let e=0;e<P;e++){let t=N[e];se(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ce(t+r+n,t+i+n,t+i+a,t+r+a)}}}function oe(e,t,n){a.push(e),a.push(t),a.push(n)}function se(e,t,i){F(e),F(t),F(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);le(o[0]),le(o[1]),le(o[2])}function ce(e,t,i,a){F(e),F(t),F(a),F(t),F(i),F(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);le(s[0]),le(s[1]),le(s[3]),le(s[1]),le(s[2]),le(s[3])}function F(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function le(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return To(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Fa[i.type]().fromJSON(i)),new e(r,t.options)}},wo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new z(a,o),new z(s,c),new z(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new z(o,1-c),new z(l,1-d),new z(f,1-m),new z(h,1-_)]:[new z(s,1-c),new z(u,1-d),new z(p,1-m),new z(g,1-_)]}};function To(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Eo=class e extends kr{constructor(e=[new z(0,-.5),new z(.5,0),new z(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Ye(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new B,d=new z,f=new B,p=new B,m=new B,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new U(a,3)),this.setAttribute(`uv`,new U(o,2)),this.setAttribute(`normal`,new U(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Do=class e extends kr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new U(p,3)),this.setAttribute(`normal`,new U(m,3)),this.setAttribute(`uv`,new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Oo=class e extends kr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new B,p=new z;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new U(s,3)),this.setAttribute(`normal`,new U(c,3)),this.setAttribute(`uv`,new U(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ko=class e extends kr{constructor(e=new Ra([new z(0,.5),new z(-.5,-.5),new z(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new U(r,3)),this.setAttribute(`normal`,new U(i,3)),this.setAttribute(`uv`,new U(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;bo.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];bo.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=bo.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ao(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Ao(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var K=class e extends kr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new U(p,3)),this.setAttribute(`normal`,new U(m,3)),this.setAttribute(`uv`,new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},jo=class e extends kr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new B,u=new B,d=new B;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new U(o,3)),this.setAttribute(`normal`,new U(s,3)),this.setAttribute(`uv`,new U(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Mo=class extends Zr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},No=class extends mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new H(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Po=class extends mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ne,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fo=class extends mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Io=class extends mr{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:``},this.type=`MeshMatcapMaterial`,this.color=new H(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:``},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Lo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ro(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var zo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Bo=class extends zo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ae,endingEnd:Ae}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case je:i=e,o=2*t-n;break;case Me:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case je:a=e,s=2*n-t;break;case Me:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Vo=class extends zo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ho=class extends zo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Uo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Lo(t,this.TimeBufferType),this.values=Lo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lo(e.times,Array),values:Lo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case De:t=this.InterpolantFactoryMethodDiscrete;break;case Oe:t=this.InterpolantFactoryMethodLinear;break;case ke:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return De;case this.InterpolantFactoryMethodLinear:return Oe;case this.InterpolantFactoryMethodSmooth:return ke}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ro(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ke,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Uo.prototype.ValueTypeName=``,Uo.prototype.TimeBufferType=Float32Array,Uo.prototype.ValueBufferType=Float32Array,Uo.prototype.DefaultInterpolation=Oe;var Wo=class extends Uo{constructor(e,t,n){super(e,t,n)}};Wo.prototype.ValueTypeName=`bool`,Wo.prototype.ValueBufferType=Array,Wo.prototype.DefaultInterpolation=De,Wo.prototype.InterpolantFactoryMethodLinear=void 0,Wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends Uo{constructor(e,t,n,r){super(e,t,n,r)}};Go.prototype.ValueTypeName=`color`;var Ko=class extends Uo{constructor(e,t,n,r){super(e,t,n,r)}};Ko.prototype.ValueTypeName=`number`;var qo=class extends zo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)_t.slerpFlat(i,0,a,c-o,a,c,s);return i}},Jo=class extends Uo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new qo(this.times,this.values,this.getValueSize(),e)}};Jo.prototype.ValueTypeName=`quaternion`,Jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends Uo{constructor(e,t,n){super(e,t,n)}};Yo.prototype.ValueTypeName=`string`,Yo.prototype.ValueBufferType=Array,Yo.prototype.DefaultInterpolation=De,Yo.prototype.InterpolantFactoryMethodLinear=void 0,Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends Uo{constructor(e,t,n,r){super(e,t,n,r)}};Xo.prototype.ValueTypeName=`vector`;var Zo=class extends qn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Qo=class extends Zo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},$o=new V,es=new B,ts=new B,ns=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=d,this.map=null,this.mapPass=null,this.matrix=new V,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;es.setFromMatrixPosition(e.matrixWorld),t.position.copy(es),ts.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ts),t.updateMatrixWorld(),$o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rs=new V,is=new B,as=new B,os=class extends ns{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new z(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),n.position.copy(is),as.copy(n.position),as.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(as),n.updateMatrixWorld(),r.makeTranslation(-is.x,-is.y,-is.z),rs.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rs,n.coordinateSystem,n.reversedDepth)}},ss=class extends Zo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new os}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},cs=class extends Qr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ls=class extends ns{constructor(){super(new cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},us=class extends Zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.target=new qn,this.shadow=new ls}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ds=class extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},fs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},ps=`\\[\\]\\.:\\/`,ms=RegExp(`[\\[\\]\\.:\\/]`,`g`),hs=`[^\\[\\]\\.:\\/]`,gs=`[^`+ps.replace(`\\.`,``)+`]`,_s=`((?:WC+[\\/:])*)`.replace(`WC`,hs),vs=`(WCOD+)?`.replace(`WCOD`,gs),ys=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,hs),bs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,hs),xs=RegExp(`^`+_s+vs+ys+bs+`$`),Ss=[`material`,`materials`,`bones`,`map`],Cs=class{constructor(e,t,n){let r=n||ws.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ws=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ms,``)}static parseTrackName(e){let t=xs.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ss.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ws.Composite=Cs,ws.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ws.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ws.prototype.GetterByBindingType=[ws.prototype._getValue_direct,ws.prototype._getValue_array,ws.prototype._getValue_arrayElement,ws.prototype._getValue_toArray],ws.prototype.SetterByBindingTypeAndVersioning=[[ws.prototype._setValue_direct,ws.prototype._setValue_direct_setNeedsUpdate,ws.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ws.prototype._setValue_array,ws.prototype._setValue_array_setNeedsUpdate,ws.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ws.prototype._setValue_arrayElement,ws.prototype._setValue_arrayElement_setNeedsUpdate,ws.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ws.prototype._setValue_fromArray,ws.prototype._setValue_fromArray_setNeedsUpdate,ws.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ts=new V,Es=class{constructor(e,t,n=0,r=1/0){this.ray=new bn(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new jn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ts.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ts),this}intersectObject(e,t=!0,n=[]){return Os(e,this,n,t),n.sort(Ds),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Os(e[r],this,n,t);return n.sort(Ds),n}};function Ds(e,t){return e.distance-t.distance}function Os(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Os(r[e],t,n,!0)}}function ks(e,t,n,r){let i=As(r);switch(n){case w:return e*t;case k:return e*t/i.components*i.byteLength;case A:return e*t/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case ee:return e*t*2/i.components*i.byteLength;case T:return e*t*3/i.components*i.byteLength;case E:return e*t*4/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case te:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ie:case oe:return Math.max(e,16)*Math.max(t,8)/4;case re:case ae:return Math.max(e,8)*Math.max(t,8)/2;case se:case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case I:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ge:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case L:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case R:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ye:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case be:case xe:case Se:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ce:case we:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function As(e){switch(e){case d:case f:return{byteLength:1,components:1};case m:case p:case v:return{byteLength:2,components:1};case y:case b:return{byteLength:2,components:4};case g:case h:case _:return{byteLength:4,components:1};case S:case C:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`180`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`180`);function js(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ms(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ns={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
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
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
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
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,lights_toon_fragment:`ToonMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`},q={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},Ps={basic:{uniforms:Gr([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:Ns.meshbasic_vert,fragmentShader:Ns.meshbasic_frag},lambert:{uniforms:Gr([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new H(0)}}]),vertexShader:Ns.meshlambert_vert,fragmentShader:Ns.meshlambert_frag},phong:{uniforms:Gr([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30}}]),vertexShader:Ns.meshphong_vert,fragmentShader:Ns.meshphong_frag},standard:{uniforms:Gr([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ns.meshphysical_vert,fragmentShader:Ns.meshphysical_frag},toon:{uniforms:Gr([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new H(0)}}]),vertexShader:Ns.meshtoon_vert,fragmentShader:Ns.meshtoon_frag},matcap:{uniforms:Gr([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:Ns.meshmatcap_vert,fragmentShader:Ns.meshmatcap_frag},points:{uniforms:Gr([q.points,q.fog]),vertexShader:Ns.points_vert,fragmentShader:Ns.points_frag},dashed:{uniforms:Gr([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ns.linedashed_vert,fragmentShader:Ns.linedashed_frag},depth:{uniforms:Gr([q.common,q.displacementmap]),vertexShader:Ns.depth_vert,fragmentShader:Ns.depth_frag},normal:{uniforms:Gr([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:Ns.meshnormal_vert,fragmentShader:Ns.meshnormal_frag},sprite:{uniforms:Gr([q.sprite,q.fog]),vertexShader:Ns.sprite_vert,fragmentShader:Ns.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ns.background_vert,fragmentShader:Ns.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:Ns.backgroundCube_vert,fragmentShader:Ns.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ns.cube_vert,fragmentShader:Ns.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ns.equirect_vert,fragmentShader:Ns.equirect_frag},distanceRGBA:{uniforms:Gr([q.common,q.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ns.distanceRGBA_vert,fragmentShader:Ns.distanceRGBA_frag},shadow:{uniforms:Gr([q.lights,q.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:Ns.shadow_vert,fragmentShader:Ns.shadow_frag}};Ps.physical={uniforms:Gr([Ps.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:Ns.meshphysical_vert,fragmentShader:Ns.meshphysical_frag};var Fs={r:0,b:0,g:0},Is=new An,Ls=new V;function Rs(e,t,n,r,i,a,o){let s=new H(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new W(new Ur(1,1,1),new Zr({name:`BackgroundCubeMaterial`,uniforms:Wr(Ps.backgroundCube.uniforms),vertexShader:Ps.backgroundCube.vertexShader,fragmentShader:Ps.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Is.copy(n.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ls.makeRotationFromEuler(Is)),u.material.toneMapped=jt.getTransfer(r.colorSpace)!==Re,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new W(new Do(2,2),new Zr({name:`BackgroundMaterial`,uniforms:Wr(Ps.background.uniforms),vertexShader:Ps.background.vertexShader,fragmentShader:Ps.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=jt.getTransfer(r.colorSpace)!==Re,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(Fs,qr(e)),r.buffers.color.setClear(Fs.r,Fs.g,Fs.b,n,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g,dispose:v}}function zs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Bs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Vs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Hs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Wi,s=new bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Us(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new si(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Ws=4,Gs=[.125,.215,.35,.446,.526,.582],Ks=20,qs=new cs,Js=new H,Ys=null,Xs=0,Zs=0,Qs=!1,$s=(1+Math.sqrt(5))/2,ec=1/$s,tc=[new B(-$s,ec,0),new B($s,ec,0),new B(-ec,0,$s),new B(ec,0,$s),new B(0,$s,-ec),new B(0,$s,ec),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],nc=new B,rc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=nc}=i;Ys=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),Zs=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ys,Xs,Zs),this._renderer.xr.enabled=Qs,e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ys=this._renderer.getRenderTarget(),Xs=this._renderer.getActiveCubeFace(),Zs=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:c,minFilter:c,generateMipmaps:!1,type:v,format:E,colorSpace:Ie,depthBuffer:!1},r=ac(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ic(r)),this._blurMaterial=sc(r,e,t)}return r}_compileMaterial(e){let t=new W(this._lodPlanes[0],e);this._renderer.compile(t,qs)}_sceneToCubeUV(e,t,n,r,i){let a=new ni(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Js),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null));let d=new hr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),f=new W(new Ur,d),p=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(Js),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;oc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(f,a),c.render(e,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new W(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;oc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,qs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=tc[(r-t-1)%tc.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new W(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Ks;m>Ks&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ks}`);let h=[],g=0;for(let e=0;e<Ks;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];oc(t,3*v*(r>_-Ws?r-_+Ws:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,qs)}};function ic(e){let t=[],n=[],r=[],i=e,a=e-Ws+1+Gs.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Ws?s=Gs[o-e+Ws-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new kr;h.setAttribute(`position`,new yr(f,3)),h.setAttribute(`uv`,new yr(p,2)),h.setAttribute(`faceIndex`,new yr(m,1)),t.push(h),i>Ws&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function ac(e,t,n){let r=new Wt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function oc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function sc(e,t,n){let r=new Float32Array(Ks),i=new B(0,1,0);return new Zr({name:`SphericalGaussianBlur`,defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function cc(){return new Zr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function lc(){return new Zr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function dc(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new rc(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new rc(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function fc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Et(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function pc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(St(n)?xr:br)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function mc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function hc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function gc(e,t,n){let r=new WeakMap,i=new Ht;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Gt(h,p,m,u);g.type=_,g.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function _c(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var vc=new Vt,yc=new ra(1,1),bc=new Gt,xc=new Kt,Sc=new oi,Cc=[],wc=[],Tc=new Float32Array(16),Ec=new Float32Array(9),Dc=new Float32Array(4);function Oc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Cc[i];if(a===void 0&&(a=new Float32Array(i),Cc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function kc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ac(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function jc(e,t){let n=wc[t];n===void 0&&(n=new Int32Array(t),wc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Mc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(kc(n,t))return;e.uniform2fv(this.addr,t),Ac(n,t)}}function Pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(kc(n,t))return;e.uniform3fv(this.addr,t),Ac(n,t)}}function Fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(kc(n,t))return;e.uniform4fv(this.addr,t),Ac(n,t)}}function Ic(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(kc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ac(n,t)}else{if(kc(n,r))return;Dc.set(r),e.uniformMatrix2fv(this.addr,!1,Dc),Ac(n,r)}}function Lc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(kc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ac(n,t)}else{if(kc(n,r))return;Ec.set(r),e.uniformMatrix3fv(this.addr,!1,Ec),Ac(n,r)}}function Rc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(kc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ac(n,t)}else{if(kc(n,r))return;Tc.set(r),e.uniformMatrix4fv(this.addr,!1,Tc),Ac(n,r)}}function zc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(kc(n,t))return;e.uniform2iv(this.addr,t),Ac(n,t)}}function Vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(kc(n,t))return;e.uniform3iv(this.addr,t),Ac(n,t)}}function Hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(kc(n,t))return;e.uniform4iv(this.addr,t),Ac(n,t)}}function Uc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(kc(n,t))return;e.uniform2uiv(this.addr,t),Ac(n,t)}}function Gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(kc(n,t))return;e.uniform3uiv(this.addr,t),Ac(n,t)}}function Kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(kc(n,t))return;e.uniform4uiv(this.addr,t),Ac(n,t)}}function qc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(yc.compareFunction=515,a=yc):a=vc,n.setTexture2D(t||a,i)}function Jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||xc,i)}function Yc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Sc,i)}function Xc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||bc,i)}function Zc(e){switch(e){case 5126:return Mc;case 35664:return Nc;case 35665:return Pc;case 35666:return Fc;case 35674:return Ic;case 35675:return Lc;case 35676:return Rc;case 5124:case 35670:return zc;case 35667:case 35671:return Bc;case 35668:case 35672:return Vc;case 35669:case 35673:return Hc;case 5125:return Uc;case 36294:return Wc;case 36295:return Gc;case 36296:return Kc;case 35678:case 36198:case 36298:case 36306:case 35682:return qc;case 35679:case 36299:case 36307:return Jc;case 35680:case 36300:case 36308:case 36293:return Yc;case 36289:case 36303:case 36311:case 36292:return Xc}}function Qc(e,t){e.uniform1fv(this.addr,t)}function $c(e,t){let n=Oc(t,this.size,2);e.uniform2fv(this.addr,n)}function el(e,t){let n=Oc(t,this.size,3);e.uniform3fv(this.addr,n)}function tl(e,t){let n=Oc(t,this.size,4);e.uniform4fv(this.addr,n)}function nl(e,t){let n=Oc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function rl(e,t){let n=Oc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function il(e,t){let n=Oc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function al(e,t){e.uniform1iv(this.addr,t)}function ol(e,t){e.uniform2iv(this.addr,t)}function sl(e,t){e.uniform3iv(this.addr,t)}function cl(e,t){e.uniform4iv(this.addr,t)}function ll(e,t){e.uniform1uiv(this.addr,t)}function ul(e,t){e.uniform2uiv(this.addr,t)}function dl(e,t){e.uniform3uiv(this.addr,t)}function fl(e,t){e.uniform4uiv(this.addr,t)}function pl(e,t,n){let r=this.cache,i=t.length,a=jc(n,i);kc(r,a)||(e.uniform1iv(this.addr,a),Ac(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||vc,a[e])}function ml(e,t,n){let r=this.cache,i=t.length,a=jc(n,i);kc(r,a)||(e.uniform1iv(this.addr,a),Ac(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||xc,a[e])}function hl(e,t,n){let r=this.cache,i=t.length,a=jc(n,i);kc(r,a)||(e.uniform1iv(this.addr,a),Ac(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Sc,a[e])}function gl(e,t,n){let r=this.cache,i=t.length,a=jc(n,i);kc(r,a)||(e.uniform1iv(this.addr,a),Ac(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||bc,a[e])}function _l(e){switch(e){case 5126:return Qc;case 35664:return $c;case 35665:return el;case 35666:return tl;case 35674:return nl;case 35675:return rl;case 35676:return il;case 5124:case 35670:return al;case 35667:case 35671:return ol;case 35668:case 35672:return sl;case 35669:case 35673:return cl;case 5125:return ll;case 36294:return ul;case 36295:return dl;case 36296:return fl;case 35678:case 36198:case 36298:case 36306:case 35682:return pl;case 35679:case 36299:case 36307:return ml;case 35680:case 36300:case 36308:case 36293:return hl;case 36289:case 36303:case 36311:case 36292:return gl}}var vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zc(t.type)}},yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_l(t.type)}},bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},xl=/(\w+)(\])?(\[|\.)?/g;function Sl(e,t){e.seq.push(t),e.map[t.id]=t}function Cl(e,t,n){let r=e.name,i=r.length;for(xl.lastIndex=0;;){let a=xl.exec(r),o=xl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Sl(n,l===void 0?new vl(s,e,t):new yl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new bl(s),Sl(n,e)),n=e}}}var wl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Cl(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Tl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var El=37297,Dl=0;function Ol(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var kl=new bt;function Al(e){jt._getMatrix(kl,jt.workingColorSpace,e);let t=`mat3( ${kl.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(e)){case Le:return[t,`LinearTransferOETF`];case Re:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function jl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ol(e.getShaderSource(t),r)}return i}function Ml(e,t){let n=Al(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function Nl(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Pl=new B;function Fl(){return jt.getLuminanceCoefficients(Pl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Pl.x.toFixed(4)}, ${Pl.y.toFixed(4)}, ${Pl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Il(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(zl).join(`
`)}function Ll(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Rl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function zl(e){return e!==``}function Bl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(e){return e.replace(Hl,Gl)}var Wl=new Map;function Gl(e,t){let n=Ns[t];if(n===void 0){let e=Wl.get(t);if(e!==void 0)n=Ns[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Ul(n)}var Kl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(e){return e.replace(Kl,Jl)}function Jl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Yl(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function Xl(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Zl(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Ql(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function $l(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function eu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function tu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Xl(n),l=Zl(n),u=Ql(n),d=$l(n),f=eu(n),p=Il(n),m=Ll(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(zl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(zl).join(`
`),_.length>0&&(_+=`
`)):(g=[Yl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(zl).join(`
`),_=[Yl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ns.tonemapping_pars_fragment,n.toneMapping===0?``:Nl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ns.colorspace_pars_fragment,Ml(`linearToOutputTexel`,n.outputColorSpace),Fl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(zl).join(`
`)),o=Ul(o),o=Bl(o,n),o=Vl(o,n),s=Ul(s),s=Bl(s,n),s=Vl(s,n),o=ql(o),s=ql(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Tl(i,i.VERTEX_SHADER,y),S=Tl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=jl(i,x,`vertex`),n=jl(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new wl(i,h),T=Rl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,El)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Dl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var nu=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new iu(e),t.set(e,n)),n}},iu=class{constructor(e){this.id=nu++,this.code=e,this.usedTimes=0}};function au(e,t,n,r,i,a,o){let s=new jn,c=new ru,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ps[C];D=e.vertexShader,O=e.fragmentShader}else D=a.vertexShader,O=a.fragmentShader,c.update(a),k=c.getVertexShaderID(a),A=c.getFragmentShaderID(a);let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=_.isInstancedMesh===!0,te=_.isBatchedMesh===!0,N=!!a.map,P=!!a.matcap,ne=!!x,re=!!a.aoMap,ie=!!a.lightMap,ae=!!a.bumpMap,oe=!!a.normalMap,se=!!a.displacementMap,ce=!!a.emissiveMap,F=!!a.metalnessMap,le=!!a.roughnessMap,ue=a.anisotropy>0,de=a.clearcoat>0,fe=a.dispersion>0,pe=a.iridescence>0,me=a.sheen>0,I=a.transmission>0,he=ue&&!!a.anisotropyMap,ge=de&&!!a.clearcoatMap,_e=de&&!!a.clearcoatNormalMap,L=de&&!!a.clearcoatRoughnessMap,ve=pe&&!!a.iridescenceMap,R=pe&&!!a.iridescenceThicknessMap,ye=me&&!!a.sheenColorMap,be=me&&!!a.sheenRoughnessMap,xe=!!a.specularMap,Se=!!a.specularColorMap,Ce=!!a.specularIntensityMap,we=I&&!!a.transmissionMap,Te=I&&!!a.thicknessMap,Ee=!!a.gradientMap,De=!!a.alphaMap,Oe=a.alphaTest>0,ke=!!a.alphaHash,Ae=!!a.extensions,je=0;a.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(je=e.toneMapping);let Me={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:D,fragmentShader:O,defines:a.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:te,batchingColor:te&&_._colorsTexture!==null,instancing:M,instancingColor:M&&_.instanceColor!==null,instancingMorph:M&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ie,alphaToCoverage:!!a.alphaToCoverage,map:N,matcap:P,envMap:ne,envMapMode:ne&&x.mapping,envMapCubeUVHeight:S,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:f&&se,emissiveMap:ce,normalMapObjectSpace:oe&&a.normalMapType===1,normalMapTangentSpace:oe&&a.normalMapType===0,metalnessMap:F,roughnessMap:le,anisotropy:ue,anisotropyMap:he,clearcoat:de,clearcoatMap:ge,clearcoatNormalMap:_e,clearcoatRoughnessMap:L,dispersion:fe,iridescence:pe,iridescenceMap:ve,iridescenceThicknessMap:R,sheen:me,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:I,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:ke,combine:a.combine,mapUv:N&&h(a.map.channel),aoMapUv:re&&h(a.aoMap.channel),lightMapUv:ie&&h(a.lightMap.channel),bumpMapUv:ae&&h(a.bumpMap.channel),normalMapUv:oe&&h(a.normalMap.channel),displacementMapUv:se&&h(a.displacementMap.channel),emissiveMapUv:ce&&h(a.emissiveMap.channel),metalnessMapUv:F&&h(a.metalnessMap.channel),roughnessMapUv:le&&h(a.roughnessMap.channel),anisotropyMapUv:he&&h(a.anisotropyMap.channel),clearcoatMapUv:ge&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:_e&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:R&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:be&&h(a.sheenRoughnessMap.channel),specularMapUv:xe&&h(a.specularMap.channel),specularColorMapUv:Se&&h(a.specularColorMap.channel),specularIntensityMapUv:Ce&&h(a.specularIntensityMap.channel),transmissionMapUv:we&&h(a.transmissionMap.channel),thicknessMapUv:Te&&h(a.thicknessMap.channel),alphaMapUv:De&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(oe||ue),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(N||De),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0&&a.wireframe===!1,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:N&&a.map.isVideoTexture===!0&&jt.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&a.emissiveMap.isVideoTexture===!0&&jt.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Ae&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&a.extensions.multiDraw===!0||te)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),t.gradientMap&&s.enable(22),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=Ps[t];n=Jr.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new tu(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function ou(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function su(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function cu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function lu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||su),r.length>1&&r.sort(t||cu),i.length>1&&i.sort(t||cu)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function uu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new lu,e.set(t,[i])):n>=r.length?(i=new lu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function du(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new B,color:new H};break;case`SpotLight`:n={position:new B,direction:new B,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function fu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var pu=0;function mu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function hu(e){let t=new du,n=fu(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new V,o=new V;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(mu);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=pu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function gu(e){let t=new hu(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function _u(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new gu(e),t.set(n,[a])):r>=i.length?(a=new gu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var vu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yu=`uniform sampler2D shadow_pass;
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
}`;function bu(e,t,n){let r=new Ji,i=new z,o=new z,s=new Ht,c=new Po({depthPacking:Pe}),l=new Fo,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:vu,fragmentShader:yu}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new kr;h.setAttribute(`position`,new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new W(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;i.copy(f.mapSize);let g=f.getFrameExtents();if(i.multiply(g),o.copy(f.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/g.x),i.x=o.x*g.x,f.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/g.y),i.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:a,magFilter:a};f.map!==null&&f.map.dispose(),f.map=new Wt(i.x,i.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),r=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let a=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Wt(i.x,i.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var xu={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Su(e,t){function n(){let t=!1,n=new Ht,r=null,i=new Ht(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ce(e.DEPTH_TEST):F(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=xu[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ce(e.STENCIL_TEST):F(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new H(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,M=0,te=e.getParameter(e.VERSION);te.indexOf(`WebGL`)===-1?te.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ee=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(te)[1]),ee=M>=1);let N=null,P={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Ht().fromArray(ne),ae=new Ht().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ce(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),ce(e.CULL_FACE),me(0);function ce(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function F(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return m!==t&&(e.useProgram(t),m=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0)h===!0&&(F(e.BLEND),h=!1);else if(h===!1&&(ce(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:console.error(`THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:console.error(`THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}}else a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(fe[n],fe[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function I(t,n){t.side===2?F(e.CULL_FACE):ce(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),L(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ce(e.SAMPLE_ALPHA_TO_COVERAGE):F(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function ge(t){t===0?F(e.CULL_FACE):(ce(e.CULL_FACE),t!==D&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),D=t}function _e(t){t!==O&&(ee&&e.lineWidth(t),O=t)}function L(t,n,r){t?(ce(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(e.polygonOffset(n,r),k=n,A=r)):F(e.POLYGON_OFFSET_FILL)}function ve(t){t?ce(e.SCISSOR_TEST):F(e.SCISSOR_TEST)}function R(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function ye(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=P[r];i===void 0&&(i={type:void 0,texture:void 0},P[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function be(){let t=P[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.texImage2D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.texImage3D(...arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Me(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Pe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},N=null,P={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new H(0,0,0),w=0,T=!1,E=null,D=null,O=null,k=null,A=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ce,disable:F,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:I,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:L,setScissorTest:ve,activeTexture:R,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:ke,texImage3D:Ae,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:je,viewport:Me,reset:Fe}}function Cu(e,t,d,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):Ct(`canvas`)}function w(e,t,n){let r=1,i=ke(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps}function E(t){e.generateMipmap(t)}function D(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(s=e.R11F_G11F_B10F)),r===e.RGBA){let t=o?Le:jt.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return(s===e.R16F||s===e.R32F||s===e.RG16F||s===e.RG32F||s===e.RGBA16F||s===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),s}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=e.target;t.removeEventListener(`dispose`,ee),te(t),t.isVideoTexture&&y.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),P(t)}function te(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&N(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function N(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=x.get(r);delete i[n.__cacheKey],h.memory.textures--}function P(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let ne=0;function re(){ne=0}function ie(){let e=ne;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ne+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(t,n){let r=f.get(t);if(t.isVideoTexture&&De(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{he(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function se(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?he(r,t,n):d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function ce(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?he(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function F(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?ge(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let le={[n]:e.REPEAT,[r]:e.CLAMP_TO_EDGE,[i]:e.MIRRORED_REPEAT},ue={[a]:e.NEAREST,[o]:e.NEAREST_MIPMAP_NEAREST,[s]:e.NEAREST_MIPMAP_LINEAR,[c]:e.LINEAR,[l]:e.LINEAR_MIPMAP_NEAREST,[u]:e.LINEAR_MIPMAP_LINEAR},de={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function fe(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,le[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,le[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,le[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ue[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ue[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,de[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function pe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ee));let i=n.source,a=x.get(i);a===void 0&&(a={},x.set(i,a));let o=ae(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function me(e,t,n){return Math.floor(Math.floor(e/n)/t)}function I(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=me(r.start,n.width,4),c=me(t.start,n.width,4);r.start<=i+1&&s===c&&me(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=e.getParameter(e.UNPACK_ROW_LENGTH),c=e.getParameter(e.UNPACK_SKIP_PIXELS),l=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,s),e.pixelStorei(e.UNPACK_SKIP_PIXELS,c),e.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function he(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=pe(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){d.activeTexture(e.TEXTURE0+r);let t=jt.getPrimaries(jt.workingColorSpace),c=n.colorSpace===``?null:jt.getPrimaries(n.colorSpace),l=n.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=w(n.image,!1,p.maxTextureSize);u=Oe(n,u);let f=m.convert(n.format,n.colorSpace),h=m.convert(n.type),g=k(n.internalFormat,f,h,n.colorSpace,n.isVideoTexture);fe(i,n);let _,v=n.mipmaps,y=n.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=j(n,u);if(n.isDepthTexture)g=A(n.format===O,n.type),b&&(y?d.texStorage2D(e.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(n.isDataTexture){if(v.length>0){y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data);n.generateMipmaps=!1}else y?(b&&d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height),x&&I(n,u,f,h)):d.texImage2D(e.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){y&&b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let t=0,r=v.length;t<r;t++)if(_=v[t],n.format!==1023){if(f!==null){if(y){if(x){if(n.layerUpdates.size>0){let r=ks(_.width,_.height,n.format,n.type);for(let i of n.layerUpdates){let n=_.data.subarray(i*r/_.data.BYTES_PER_ELEMENT,(i+1)*r/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,_.width,_.height,1,f,n)}n.clearLayerUpdates()}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,_.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,_.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(e.TEXTURE_2D_ARRAY,t,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(e.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let t=0,r=v.length;t<r;t++)_=v[t],n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,h,_.data):d.texImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(e.TEXTURE_2D,t,g,_.width,_.height,0,_.data)}}else if(n.isDataArrayTexture){if(y){if(b&&d.texStorage3D(e.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x){if(n.layerUpdates.size>0){let t=ks(u.width,u.height,n.format,n.type);for(let r of n.layerUpdates){let n=u.data.subarray(r*t/u.data.BYTES_PER_ELEMENT,(r+1)*t/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,u.width,u.height,1,f,h,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data)}else if(n.isData3DTexture)y?(b&&d.texStorage3D(e.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(e.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(n.isFramebufferTexture){if(b){if(y)d.texStorage2D(e.TEXTURE_2D,S,g,u.width,u.height);else{let t=u.width,n=u.height;for(let r=0;r<S;r++)d.texImage2D(e.TEXTURE_2D,r,g,t,n,0,f,h,null),t>>=1,n>>=1}}}else if(v.length>0){if(y&&b){let t=ke(v[0]);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}for(let t=0,n=v.length;t<n;t++)_=v[t],y?x&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f,h,_):d.texImage2D(e.TEXTURE_2D,t,g,f,h,_);n.generateMipmaps=!1}else if(y){if(b){let t=ke(u);d.texStorage2D(e.TEXTURE_2D,S,g,t.width,t.height)}x&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(e.TEXTURE_2D,0,g,f,h,u);T(n)&&E(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function ge(t,n,r){if(n.image.length!==6)return;let i=pe(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=jt.getPrimaries(jt.workingColorSpace),s=n.colorSpace===``?null:jt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=w(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=Oe(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=k(n.internalFormat,g,_,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=j(n,h);fe(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=ke(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}T(n)&&E(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function _e(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=k(r.internalFormat,s,c,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Ee(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,Te(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function L(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=Te(n);Ee(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,c,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,c,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=k(a.internalFormat,o,s,a.colorSpace),l=Te(n);r&&Ee(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,n.width,n.height):Ee(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ve(t,n){if(n&&n.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let r=f.get(n.depthTexture);r.__renderTarget=n,(!r.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),oe(n.depthTexture,0);let i=r.__webglTexture,a=Te(n);if(n.depthTexture.format===1026)Ee(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0,a):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0);else if(n.depthTexture.format===1027)Ee(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0,a):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0);else throw Error(`Unknown depthTexture format`)}function R(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)throw Error(`target.depthTexture not supported in Cube render targets`);let e=t.texture.mipmaps;e&&e.length>0?ve(n.__webglFramebuffer[0],t):ve(n.__webglFramebuffer,t)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),L(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),L(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,r){let i=f.get(t);n!==void 0&&_e(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&R(t)}function be(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,M);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Ee(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=k(i.internalFormat,o,s,i.colorSpace,t.isXRRenderTarget===!0),l=Te(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),L(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),fe(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)_e(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else _e(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);T(n)&&E(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),fe(s,i),_e(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),T(i)&&E(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),fe(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)_e(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else _e(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);T(n)&&E(a),d.unbindTexture()}t.depthBuffer&&R(t)}function xe(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(T(r)){let t=D(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),E(t),d.unbindTexture()}}}let Se=[],Ce=[];function we(t){if(t.samples>0){if(Ee(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Se.length=0,Ce.length=0,Se.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Se.push(o),Ce.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Se))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Te(e){return Math.min(p.maxSamples,e.samples)}function Ee(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function De(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Oe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(jt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function ke(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ie,this.resetTextureUnits=re,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=F,this.rebindTextures=ye,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ee}function wu(e,t){function n(n,r=``){let i,a=jt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Tu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eu=`
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

}`,Du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zr({vertexShader:Tu,fragmentShader:Eu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Do(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ou=class extends Ue{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,f=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,_=new Du,v={},y=t.getContextAttributes(),b=null,S=null,C=[],w=[],T=new z,k=null,A=new ni;A.viewport=new Ht;let j=new ni;j.viewport=new Ht;let ee=[A,j],M=new ds,te=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new li,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new li,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new li,C[e]=t),t.getHandSpace()};function P(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,P),r.removeEventListener(`selectstart`,P),r.removeEventListener(`selectend`,P),r.removeEventListener(`squeeze`,P),r.removeEventListener(`squeezestart`,P),r.removeEventListener(`squeezeend`,P),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}te=null,N=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(b),p=null,f=null,u=null,r=null,S=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,P),r.addEventListener(`selectstart`,P),r.addEventListener(`selectend`,P),r.addEventListener(`squeeze`,P),r.addEventListener(`squeezestart`,P),r.addEventListener(`squeezeend`,P),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?O:D,a=y.stencil?x:g);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),f=u.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Wt(f.textureWidth,f.textureHeight,{format:E,type:d,depthTexture:new ra(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Wt(p.framebufferWidth,p.framebufferHeight,{format:E,type:d,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ie=new B,ae=new B;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=A.near=t,M.far=j.far=A.far=n,(te!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),te=M.near,N=M.far),M.layers.mask=e.layers.mask|6,A.layers.mask=M.layers.mask&3,j.layers.mask=M.layers.mask&5;let i=e.parent,a=M.cameras;se(M,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(M,A,j):M.projectionMatrix.copy(A.projectionMatrix),ce(e,M,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=qe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let F=null;function le(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ee[n];o===void 0&&(o=new ni,o.layers.enable(n),o.viewport=new Ht,ee[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ia,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}F&&F(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let ue=new js;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){F=e},this.dispose=function(){}}},ku=new An,Au=new V;function ju(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,qr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,ku.copy(o),ku.x*=-1,ku.y*=-1,ku.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(ku.y*=-1,ku.z*=-1),e.envMapRotation.value.setFromMatrix4(Au.makeRotationFromEuler(ku)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Mu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Nu=class{constructor(e={}){let{canvas:t=wt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=new Uint32Array(4),g=new Int32Array(4),_=null,y=null,b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,C=!1;this._outputColorSpace=Fe;let w=0,T=0,E=null,D=-1,O=null,k=new Ht,A=new Ht,j=null,ee=new H(0),M=0,te=t.width,N=t.height,P=1,ne=null,re=null,ie=new Ht(0,0,te,N),ae=new Ht(0,0,te,N),oe=!1,se=new Ji,ce=!1,F=!1,le=new V,ue=new B,de=new Ht,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function me(){return E===null?P:1}let I=n;function he(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r180`),t.addEventListener(`webglcontextlost`,Ue,!1),t.addEventListener(`webglcontextrestored`,We,!1),t.addEventListener(`webglcontextcreationerror`,Ge,!1),I===null){let t=`webgl2`;if(I=he(t,e),I===null)throw he(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let ge,_e,L,ve,R,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Le,Re,ze;function Be(){ge=new fc(I),ge.init(),Le=new wu(I,ge),_e=new Vs(I,ge,e,Le),L=new Su(I,ge),_e.reversedDepthBuffer&&p&&L.buffers.depth.setReversed(!0),ve=new hc(I),R=new ou,ye=new Cu(I,ge,L,R,_e,Le,ve),be=new Us(S),xe=new dc(S),Se=new Ms(I),Re=new zs(I,Se),Ce=new pc(I,Se,ve,Re),we=new _c(I,Ce,Se,ve),Me=new gc(I,_e,ye),ke=new Hs(R),Te=new au(S,be,xe,ge,_e,Re,ke),Ee=new ju(S,R),De=new uu,Oe=new _u(ge),je=new Rs(S,be,xe,L,we,m,s),Ae=new bu(S,we,_e),ze=new Mu(I,ve,_e,L),Ne=new Bs(I,ge,ve),Pe=new mc(I,ge,ve),ve.programs=Te.programs,S.capabilities=_e,S.extensions=ge,S.properties=R,S.renderLists=De,S.shadowMap=Ae,S.state=L,S.info=ve}Be();let Ve=new Ou(S,I);this.xr=Ve,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let e=ge.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ge.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(e){e!==void 0&&(P=e,this.setSize(te,N,!1))},this.getSize=function(e){return e.set(te,N)},this.setSize=function(e,n,r=!0){Ve.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(te=e,N=n,t.width=Math.floor(e*P),t.height=Math.floor(n*P),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(te*P,N*P).floor()},this.setDrawingBufferSize=function(e,n,r){te=e,N=n,P=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(k)},this.getViewport=function(e){return e.copy(ie)},this.setViewport=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),L.viewport(k.copy(ie).multiplyScalar(P).round())},this.getScissor=function(e){return e.copy(ae)},this.setScissor=function(e,t,n,r){e.isVector4?ae.set(e.x,e.y,e.z,e.w):ae.set(e,t,n,r),L.scissor(A.copy(ae).multiplyScalar(P).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(e){L.setScissorTest(oe=e)},this.setOpaqueSort=function(e){ne=e},this.setTransparentSort=function(e){re=e},this.getClearColor=function(e){return e.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(E!==null){let t=E.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=E.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=je.getClearColor(),r=je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,I.clearBufferuiv(I.COLOR,0,h)):(g[0]=i,g[1]=a,g[2]=o,g[3]=r,I.clearBufferiv(I.COLOR,0,g))}else r|=I.COLOR_BUFFER_BIT}t&&(r|=I.DEPTH_BUFFER_BIT),n&&(r|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ue,!1),t.removeEventListener(`webglcontextrestored`,We,!1),t.removeEventListener(`webglcontextcreationerror`,Ge,!1),je.dispose(),De.dispose(),Oe.dispose(),R.dispose(),be.dispose(),xe.dispose(),we.dispose(),Re.dispose(),ze.dispose(),Te.dispose(),Ve.dispose(),Ve.removeEventListener(`sessionstart`,Qe),Ve.removeEventListener(`sessionend`,$e),et.stop()};function Ue(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),C=!0}function We(){console.log(`THREE.WebGLRenderer: Context Restored.`),C=!1;let e=ve.autoReset,t=Ae.enabled,n=Ae.autoUpdate,r=Ae.needsUpdate,i=Ae.type;Be(),ve.autoReset=e,Ae.enabled=t,Ae.autoUpdate=n,Ae.needsUpdate=r,Ae.type=i}function Ge(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ke(e){let t=e.target;t.removeEventListener(`dispose`,Ke),qe(t)}function qe(e){Je(e),R.remove(e)}function Je(e){let t=R.get(e).programs;t!==void 0&&(t.forEach(function(e){Te.releaseProgram(e)}),e.isShaderMaterial&&Te.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=fe);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=lt(e,t,n,r,i);L.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ce.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Re.setup(i,r,s,n,c);let h,g=Ne;if(c!==null&&(h=Se.get(c),g=Pe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(L.setLineWidth(r.wireframeLinewidth*me()),g.setMode(I.LINES)):g.setMode(I.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),L.setLineWidth(e*me()),i.isLineSegments?g.setMode(I.LINES):i.isLineLoop?g.setMode(I.LINE_LOOP):g.setMode(I.LINE_STRIP)}else i.isPoints?g.setMode(I.POINTS):i.isSprite&&g.setMode(I.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)Et(`THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(ge.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Se.get(c).bytesPerElement:1,o=R.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(I,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ye(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ot(e,t,n),e.side=0,e.needsUpdate=!0,ot(e,t,n),e.side=2):ot(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),y=Oe.get(n),y.init(t),x.push(y),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),y.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ye(a,n,e),r.add(a)}else Ye(t,n,e),r.add(t)}}),y=x.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){R.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ge.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Xe=null;function Ze(e){Xe&&Xe(e)}function Qe(){et.stop()}function $e(){et.start()}let et=new js;et.setAnimationLoop(Ze),typeof self<`u`&&et.setContext(self),this.setAnimationLoop=function(e){Xe=e,Ve.setAnimationLoop(e),e===null?et.stop():et.start()},Ve.addEventListener(`sessionstart`,Qe),Ve.addEventListener(`sessionend`,$e),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(C===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(t),t=Ve.getCamera()),e.isScene===!0&&e.onBeforeRender(S,e,t,E),y=Oe.get(e,x.length),y.init(t),x.push(y),le.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),se.setFromProjectionMatrix(le,He,t.reversedDepth),F=this.localClippingEnabled,ce=ke.init(this.clippingPlanes,F),_=De.get(e,b.length),_.init(),b.push(_),Ve.enabled===!0&&Ve.isPresenting===!0){let e=S.xr.getDepthSensingMesh();e!==null&&tt(e,t,-1/0,S.sortObjects)}tt(e,t,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(ne,re),pe=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,pe&&je.addToRenderList(_,e),this.info.render.frame++,ce===!0&&ke.beginShadows();let n=y.state.shadowsArray;Ae.render(n,e,t),ce===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=_.opaque,i=_.transmissive;if(y.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];rt(r,i,e,a)}pe&&je.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];nt(_,e,r,r.viewport)}}else i.length>0&&rt(r,i,e,t),pe&&je.render(e),nt(_,e,t);E!==null&&T===0&&(ye.updateMultisampleRenderTarget(E),ye.updateRenderTargetMipmap(E)),e.isScene===!0&&e.onAfterRender(S,e,t),Re.resetDefaultState(),D=-1,O=null,x.pop(),x.length>0?(y=x[x.length-1],ce===!0&&ke.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,b.pop(),_=b.length>0?b[b.length-1]:null};function tt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)y.pushLight(e),e.castShadow&&y.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||se.intersectsSprite(e)){r&&de.setFromMatrixPosition(e.matrixWorld).applyMatrix4(le);let t=we.update(e),i=e.material;i.visible&&_.push(e,t,i,n,de.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||se.intersectsObject(e))){let t=we.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),de.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),de.copy(e.boundingSphere.center)),de.applyMatrix4(e.matrixWorld).applyMatrix4(le)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&_.push(e,t,s,n,de.z,o)}}else i.visible&&_.push(e,t,i,n,de.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)tt(i[e],t,n,r)}function nt(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;y.setupLightsView(n),ce===!0&&ke.setGlobalState(S.clippingPlanes,n),r&&L.viewport(k.copy(r)),i.length>0&&it(i,t,n),a.length>0&&it(a,t,n),o.length>0&&it(o,t,n),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function rt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[r.id]===void 0&&(y.state.transmissionRenderTarget[r.id]=new Wt(1,1,{generateMipmaps:!0,type:ge.has(`EXT_color_buffer_half_float`)||ge.has(`EXT_color_buffer_float`)?v:d,minFilter:u,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let a=y.state.transmissionRenderTarget[r.id],o=r.viewport||k;a.setSize(o.z*S.transmissionResolutionScale,o.w*S.transmissionResolutionScale);let s=S.getRenderTarget(),c=S.getActiveCubeFace(),l=S.getActiveMipmapLevel();S.setRenderTarget(a),S.getClearColor(ee),M=S.getClearAlpha(),M<1&&S.setClearColor(16777215,.5),S.clear(),pe&&je.render(n);let f=S.toneMapping;S.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),y.setupLightsView(r),ce===!0&&ke.setGlobalState(S.clippingPlanes,r),it(e,n,r),ye.updateMultisampleRenderTarget(a),ye.updateRenderTargetMipmap(a),ge.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,at(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(ye.updateMultisampleRenderTarget(a),ye.updateRenderTargetMipmap(a))}S.setRenderTarget(s,c,l),S.setClearColor(ee,M),p!==void 0&&(r.viewport=p),S.toneMapping=f}function it(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=a.group,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&at(o,t,n,s,l,c)}}function at(e,t,n,r,i,a){e.onBeforeRender(S,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(S,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=2):S.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(S,t,n,r,i,a)}function ot(e,t,n){t.isScene!==!0&&(t=fe);let r=R.get(e),i=y.state.lights,a=y.state.shadowsArray,o=i.state.version,s=Te.getParameters(e,i.state,a,t,n),c=Te.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?xe:be).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ke),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return ct(e,s),u}else s.uniforms=Te.getUniforms(e),e.onBeforeCompile(s,S),u=Te.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=ke.uniform),ct(e,s),r.needsLights=dt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function st(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=wl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ct(e,t){let n=R.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function lt(e,t,n,r,i){t.isScene!==!0&&(t=fe),ye.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ie,c=(r.isMeshStandardMaterial?xe:be).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(m=S.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=R.get(r),v=y.state.lights;if(ce===!0&&(F===!0||e!==O)){let t=e===O&&r.id===D;ke.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==ke.numPlanes||_.numIntersection!==ke.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let x=_.currentProgram;b===!0&&(x=ot(r,t,i));let C=!1,w=!1,T=!1,k=x.getUniforms(),A=_.uniforms;if(L.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==D&&(D=r.id,w=!0),C||O!==e){L.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(I,`projectionMatrix`,e.projectionMatrix),k.setValue(I,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(I,ue.setFromMatrixPosition(e.matrixWorld)),_e.logarithmicDepthBuffer&&k.setValue(I,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(I,`isOrthographic`,e.isOrthographicCamera===!0),O!==e&&(O=e,w=!0,T=!0)}if(i.isSkinnedMesh){k.setOptional(I,i,`bindMatrix`),k.setOptional(I,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(I,`boneTexture`,e.boneTexture,ye))}i.isBatchedMesh&&(k.setOptional(I,i,`batchingTexture`),k.setValue(I,`batchingTexture`,i._matricesTexture,ye),k.setOptional(I,i,`batchingIdTexture`),k.setValue(I,`batchingIdTexture`,i._indirectTexture,ye),k.setOptional(I,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(I,`batchingColorTexture`,i._colorsTexture,ye));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&Me.update(i,n,x),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,k.setValue(I,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),w&&(k.setValue(I,`toneMappingExposure`,S.toneMappingExposure),_.needsLights&&ut(A,T),a&&r.fog===!0&&Ee.refreshFogUniforms(A,a),Ee.refreshMaterialUniforms(A,r,P,N,y.state.transmissionRenderTarget[e.id]),wl.upload(I,st(_),A,ye)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(wl.upload(I,st(_),A,ye),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(I,`center`,i.center),k.setValue(I,`modelViewMatrix`,i.modelViewMatrix),k.setValue(I,`normalMatrix`,i.normalMatrix),k.setValue(I,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ze.update(n,x),ze.bind(n,x)}}return x}function ut(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(e,t,n){let r=R.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),R.get(e.texture).__webglTexture=t,R.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=R.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let ft=I.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){E=e,w=t,T=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=R.get(e);if(s.__useDefaultFramebuffer!==void 0)L.bindFramebuffer(I.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)ye.setupRenderTarget(e);else if(s.__hasExternalTextures)ye.rebindTextures(e,R.get(e.texture).__webglTexture,R.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&R.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);ye.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=R.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&ye.useMultisampledRTT(e)===!1?R.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,k.copy(e.viewport),A.copy(e.scissor),j=e.scissorTest}else k.copy(ie).multiplyScalar(P).floor(),A.copy(ae).multiplyScalar(P).floor(),j=oe;if(n!==0&&(i=ft),L.bindFramebuffer(I.FRAMEBUFFER,i)&&r&&L.drawBuffers(e,i),L.viewport(k),L.scissor(A),L.setScissorTest(j),a){let r=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=t;for(let t=0;t<e.textures.length;t++){let i=R.get(e.textures[t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=R.get(e.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,t.__webglTexture,n)}D=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){L.bindFramebuffer(I.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(!_e.textureFormatReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!_e.textureTypeReadable(l)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&(e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s),I.readPixels(t,n,r,i,Le.convert(c),Le.convert(l),a))}finally{let e=E===null?null:R.get(E).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=R.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){L.bindFramebuffer(I.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(!_e.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!_e.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,d),I.bufferData(I.PIXEL_PACK_BUFFER,a.byteLength,I.STREAM_READ),e.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+s),I.readPixels(t,n,r,i,Le.convert(l),Le.convert(u),0);let f=E===null?null:R.get(E).__webglFramebuffer;L.bindFramebuffer(I.FRAMEBUFFER,f);let p=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Dt(I,p,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,d),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,a),I.deleteBuffer(d),I.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ye.setTexture2D(e,0),I.copyTexSubImage2D(I.TEXTURE_2D,n,0,0,o,s,i,a),L.unbindTexture()};let pt=I.createFramebuffer(),mt=I.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){a===null&&(i===0?a=0:(Et(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Le.convert(t.format),_=Le.convert(t.type),v;t.isData3DTexture?(ye.setTexture3D(t,0),v=I.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ye.setTexture2DArray(t,0),v=I.TEXTURE_2D_ARRAY):(ye.setTexture2D(t,0),v=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(I.UNPACK_ROW_LENGTH),b=I.getParameter(I.UNPACK_IMAGE_HEIGHT),x=I.getParameter(I.UNPACK_SKIP_PIXELS),S=I.getParameter(I.UNPACK_SKIP_ROWS),C=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,l),I.pixelStorei(I.UNPACK_SKIP_ROWS,u),I.pixelStorei(I.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=R.get(e),r=R.get(t),h=R.get(n.__renderTarget),g=R.get(r.__renderTarget);L.bindFramebuffer(I.READ_FRAMEBUFFER,h.__webglFramebuffer),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(e).__webglTexture,i,d+n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,R.get(t).__webglTexture,a,m+n)),I.blitFramebuffer(l,u,o,s,f,p,o,s,I.DEPTH_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||R.has(e)){let n=R.get(e),r=R.get(t);L.bindFramebuffer(I.READ_FRAMEBUFFER,pt),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,mt);for(let e=0;e<c;e++)w?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,n.__webglTexture,i),T?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,r.__webglTexture,a),i===0?T?I.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):I.copyTexSubImage2D(v,a,f,p,l,u,o,s):I.blitFramebuffer(l,u,o,s,f,p,o,s,I.COLOR_BUFFER_BIT,I.NEAREST);L.bindFramebuffer(I.READ_FRAMEBUFFER,null),L.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?I.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):I.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):I.texSubImage2D(I.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(I.UNPACK_ROW_LENGTH,y),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S),I.pixelStorei(I.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&I.generateMipmap(v),L.unbindTexture()},this.initRenderTarget=function(e){R.get(e).__webglFramebuffer===void 0&&ye.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ye.setTextureCube(e,0):e.isData3DTexture?ye.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ye.setTexture2DArray(e,0):ye.setTexture2D(e,0),L.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,L.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return He}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=jt._getUnpackColorSpace()}},Pu={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Fu=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Iu=new cs(-1,1,1,-1,0,1),Lu=new class extends kr{constructor(){super(),this.setAttribute(`position`,new U([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new U([0,2,0,0,2,0],2))}},Ru=class{constructor(e){this._mesh=new W(Lu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Iu)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},zu=class extends Fu{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Zr?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jr.clone(e.uniforms),this.material=new Zr({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ru(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Bu=class extends Fu{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Vu=class extends Fu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Hu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new z);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:v}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zu(Pu),this.copyPass.material.blending=0,this.clock=new fs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Bu!==void 0&&(r instanceof Bu?n=!0:r instanceof Vu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Uu=class extends Fu{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new H}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Wu={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new H(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Gu=class e extends Fu{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new z(256,256):new z(e.x,e.y),this.clearColor=new H(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(i,a,{type:v}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Wt(i,a,{type:v});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Wt(i,a,{type:v});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Wu;this.highPassUniforms=Jr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Zr({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Jr.clone(Pu.uniforms),this.blendMaterial=new Zr({uniforms:this.copyUniforms,vertexShader:Pu.vertexShader,fragmentShader:Pu.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new H,this._oldClearAlpha=1,this._basic=new hr,this._fsQuad=new Ru(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new z(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Zr({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new z(.5,.5)},direction:{value:new z(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Zr({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Gu.BlurDirectionX=new z(1,0),Gu.BlurDirectionY=new z(0,1);var Ku={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},qu=class extends Fu{constructor(){super(),this.uniforms=Jr.clone(Ku.uniforms),this.material=new Mo({name:Ku.name,uniforms:this.uniforms,vertexShader:Ku.vertexShader,fragmentShader:Ku.fragmentShader}),this._fsQuad=new Ru(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},J=Math.PI*2,Y=(e,t=0,n=1)=>e<t?t:e>n?n:e,Ju=(e,t,n)=>e+(t-e)*n,Yu=(e,t,n)=>{let r=Y((n-e)/(t-e));return r*r*(3-2*r)},X=(e=0,t=1)=>e+Math.random()*(t-e),Xu=e=>e[Math.floor(Math.random()*e.length)],Z={linear:e=>e,inQuad:e=>e*e,outQuad:e=>1-(1-e)*(1-e),inOutQuad:e=>e<.5?2*e*e:1-(-2*e+2)**2/2,inCubic:e=>e*e*e,outCubic:e=>1-(1-e)**3,inOutCubic:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,outQuart:e=>1-(1-e)**4,inOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,outSine:e=>Math.sin(e*Math.PI/2),outBack:e=>1+2.70158*(e-1)**3+1.70158*(e-1)**2,outBackSoft:e=>1+2.1*(e-1)**3+1.1*(e-1)**2,outElastic:e=>e===0||e===1?e:2**(-10*e)*Math.sin((e*10-.75)*(2*Math.PI/3))+1,outBounce:e=>{let t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375}},Zu=(e,t,n,r)=>Ju(e,t,1-Math.exp(-n*r)),Qu=(e,t,n,r)=>{let i=t-e;for(;i>Math.PI;)i-=J;for(;i<-Math.PI;)i+=J;return e+i*(1-Math.exp(-n*r))},$u=(e,t,n,r)=>e.lerp(t,1-Math.exp(-n*r)),ed=class{constructor(e=0,t=120,n=12){this.x=e,this.v=0,this.target=e,this.k=t,this.c=n}update(e){let t=Math.max(1,Math.ceil(e/(1/120))),n=e/t;for(let e=0;e<t;e++){let e=(this.target-this.x)*this.k-this.v*this.c;this.v+=e*n,this.x+=this.v*n}return this.x}set(e){this.x=e,this.target=e,this.v=0}kick(e){this.v+=e}},td=class{constructor(e=new B,t=120,n=12){this.x=e.clone(),this.v=new B,this.target=e.clone(),this.k=t,this.c=n,this._a=new B}update(e){let t=Math.max(1,Math.ceil(e/(1/120))),n=e/t;for(let e=0;e<t;e++)this._a.copy(this.target).sub(this.x).multiplyScalar(this.k).addScaledVector(this.v,-this.c),this.v.addScaledVector(this._a,n),this.x.addScaledVector(this.v,n);return this.x}set(e){this.x.copy(e),this.target.copy(e),this.v.set(0,0,0)}},nd=class{constructor(){this.time=0,this.items=[]}update(e){this.time+=e;let t=this.items;for(let e=0;e<t.length;e++){let n=t[e];if(!n.dead){if(n.type===`wait`)this.time>=n.end&&(n.dead=!0,n.resolve());else{let e=Y((this.time-n.start)/n.duration);this.time>=n.start&&(n.fn(n.ease(e),e),e>=1&&(n.dead=!0,n.resolve()))}}}t.length>64&&(this.items=t.filter(e=>!e.dead))}wait(e){return new Promise(t=>this.items.push({type:`wait`,end:this.time+e,resolve:t}))}tween(e,t,n=Z.inOutCubic,r=0){return new Promise(i=>this.items.push({type:`tween`,start:this.time+r,duration:Math.max(1e-4,e),fn:t,ease:n,resolve:i}))}clear(){this.items.length=0}};function rd(e,t){let n=t-e;for(;n>Math.PI;)n-=J;for(;n<-Math.PI;)n+=J;return n}var id={uniforms:{tDiffuse:{value:null},uRes:{value:new z(1,1)},uVignette:{value:.28},uFlash:{value:0},uFlashColor:{value:new H(1,.93,.97)},uTime:{value:0},uWarm:{value:.04}},vertexShader:`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uRes; uniform float uVignette; uniform float uFlash;
    uniform vec3 uFlashColor; uniform float uTime; uniform float uWarm;
    varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 p = vUv - 0.5;
      p.x *= mix(1.0, uRes.x / uRes.y, 0.5);
      float r = length(p);
      float v = smoothstep(0.85, 0.2, r);
      vec3 tint = vec3(0.86, 0.76, 0.8);
      c.rgb = mix(c.rgb, c.rgb * tint, (1.0 - v) * uVignette);
      c.rgb = mix(c.rgb, c.rgb * vec3(1.03, 1.0, 0.97), uWarm);
      // gentle S-curve + saturation: keeps pastels from going milky
      vec3 sc = c.rgb * c.rgb * (3.0 - 2.0 * c.rgb);
      c.rgb = mix(c.rgb, sc, 0.22);
      float l = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(l), c.rgb, 1.12);
      c.rgb = mix(c.rgb, uFlashColor, clamp(uFlash, 0.0, 1.0));
      c.rgb += (hash(vUv * uRes + fract(uTime)) - 0.5) / 255.0;
      gl_FragColor = vec4(c.rgb, 1.0);
    }
  `},ad=class{constructor(e){this.canvas=e;let t=new Nu({canvas:e,antialias:!1,alpha:!1,stencil:!1,powerPreference:`high-performance`});t.outputColorSpace=Fe,t.toneMapping=7,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.localClippingEnabled=!0,t.shadowMap.type=2,t.setClearColor(16508142,1),this.renderer=t,this.camera=new ni(42,1,.02,400),this.scene=new di;let n=new URLSearchParams(location.search);this.maxPixelRatio=Math.min(window.devicePixelRatio||1,2),n.has(`pr`)&&(this.maxPixelRatio=parseFloat(n.get(`pr`))||1),this.pixelRatio=this.maxPixelRatio,this.samples=n.has(`nomsaa`)?0:(window.devicePixelRatio||1)>=2?2:4,this.bloomEnabled=!0,this.preRender=[];let r=this._size(),i=new Wt(r.w*this.pixelRatio,r.h*this.pixelRatio,{type:v,samples:this.samples});this.composer=new Hu(t,i),this.renderPass=new Uu(this.scene,this.camera),this.bloom=new Gu(new z(r.w,r.h),.32,.12,1.2),this.output=new qu,this.grade=new zu(id),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(this.output),this.composer.addPass(this.grade),this.layout={w:1,h:1,aspect:1,portrait:!0,landscape:!1,t:0},this.time=0,this.timeScale=1,this._frameTimes=[],this._qualityTimer=0,this._upgradeUsed=!1,this.onResize=[],this.resize(),window.addEventListener(`resize`,()=>this.resize()),window.addEventListener(`orientationchange`,()=>setTimeout(()=>this.resize(),120)),window.visualViewport&&window.visualViewport.addEventListener(`resize`,()=>this.resize())}_size(){return{w:Math.max(1,Math.round(window.innerWidth)),h:Math.max(1,Math.round(window.innerHeight))}}setScene(e){this.scene=e,this.renderPass.scene=e}resize(){let{w:e,h:t}=this._size(),n=this.renderer;n.setPixelRatio(this.pixelRatio),n.setSize(e,t,!1),this.composer.setPixelRatio(this.pixelRatio),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.grade.uniforms.uRes.value.set(e*this.pixelRatio,t*this.pixelRatio);let r=e/t,i=Y((r-.62)/.83);this.layout={w:e,h:t,aspect:r,portrait:r<.9,landscape:r>=.9,t:i};for(let e of this.onResize)e(this.layout)}setQuality(e,t){this.pixelRatio=e,t!==this.samples&&(this.samples=t,this.composer.renderTarget1.samples=t,this.composer.renderTarget2.samples=t),this.resize()}_adaptQuality(e){let t=this._frameTimes;if(t.push(e),t.length>90&&t.shift(),this._qualityTimer+=e,this._qualityTimer<2.5||t.length<60)return;let n=t.reduce((e,t)=>e+t,0)/t.length;n>1/40?(this._qualityTimer=0,t.length=0,this.pixelRatio>1.01?this.setQuality(Math.max(1,this.pixelRatio-.35),this.samples):this.samples>0?this.setQuality(this.pixelRatio,0):this.bloomEnabled?(this.bloomEnabled=!1,this.bloom.enabled=!1):this.pixelRatio>.75&&this.setQuality(.75,0)):n<1/58&&!this._upgradeUsed&&this.pixelRatio<this.maxPixelRatio-.01&&(this._qualityTimer=-4,this._upgradeUsed=!0,this.setQuality(Math.min(this.maxPixelRatio,this.pixelRatio+.35),this.samples))}render(e,t){this.grade.uniforms.uTime.value=this.time;for(let t of this.preRender)t(this.renderer,e);this.composer.render(e),this.adaptive!==!1&&this._adaptQuality(t)}ndc(e,t,n=new z){return n.set(e/this.layout.w*2-1,-(t/this.layout.h)*2+1)}toScreen(e,t=new B){t.copy(e).project(this.camera);let n=t.z;return t.set((t.x*.5+.5)*this.layout.w,(-t.y*.5+.5)*this.layout.h,n),t}},od=class{constructor(e){this.el=e,this.listeners={down:[],move:[],up:[],any:[]},this.active=null,this.lastActivity=performance.now()/1e3,this.enabled=!0;let t={passive:!1};e.addEventListener(`pointerdown`,e=>this._down(e),t),window.addEventListener(`pointermove`,e=>this._move(e),t),window.addEventListener(`pointerup`,e=>this._up(e,!1),t),window.addEventListener(`pointercancel`,e=>this._up(e,!0),t);let n=e=>e.preventDefault();e.addEventListener(`contextmenu`,n),document.addEventListener(`gesturestart`,n,t),document.addEventListener(`gesturechange`,n,t),document.addEventListener(`dblclick`,n,t),document.addEventListener(`touchmove`,t=>{(t.touches.length>1||t.target===e)&&t.preventDefault()},t),document.addEventListener(`touchstart`,e=>{e.touches.length>1&&e.preventDefault()},t)}on(e,t){this.listeners[e].push(t)}_now(){return performance.now()/1e3}_ts(e){let t=e&&e.timeStamp?e.timeStamp/1e3:this._now();return Math.abs(t-this._now())<5?t:this._now()}_emit(e,t,n){for(let r of this.listeners[e])r(t,n);for(let r of this.listeners.any)r(e,t,n)}_down(e){if(e.preventDefault(),this.lastActivity=this._now(),!this.enabled||this.active)return;try{this.el.setPointerCapture(e.pointerId)}catch{}let t=this._ts(e),n={id:e.pointerId,x:e.clientX,y:e.clientY,downX:e.clientX,downY:e.clientY,t,downT:t,vx:0,vy:0,path:[{x:e.clientX,y:e.clientY,t}],maxDist:0,pathLen:0,target:null,data:{}};this.active=n,this._emit(`down`,n,e)}_move(e){let t=this.active;if(!t||e.pointerId!==t.id)return;e.preventDefault();let n=Math.max(t.t+1e-4,this._ts(e));this.lastActivity=this._now();let r=Math.max(.001,n-t.t),i=e.clientX-t.x,a=e.clientY-t.y,o=Math.min(1,r/.035);t.vx+=(i/r-t.vx)*o,t.vy+=(a/r-t.vy)*o,t.pathLen+=Math.hypot(i,a),t.x=e.clientX,t.y=e.clientY,t.t=n,t.maxDist=Math.max(t.maxDist,Math.hypot(t.x-t.downX,t.y-t.downY)),t.path.push({x:t.x,y:t.y,t:n}),t.path.length>240&&t.path.splice(0,t.path.length-240),this._emit(`move`,t,e)}_up(e,t){let n=this.active;n&&e.pointerId===n.id&&(this.lastActivity=this._now(),n.t=Math.max(n.t,this._ts(e)),n.cancelled=t,n.duration=n.t-n.downT,this.active=null,this._emit(`up`,n,e))}idleTime(){return this._now()-this.lastActivity}poke(){this.lastActivity=this._now()}},sd=new B;function cd(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;sd.copy(t),sd[r]=0,sd.normalize();let l=.5*o/(o+s),u=1-sd.angleTo(e)/c;return Math.sign(sd[n])===1?u*l:s/(o+s)+l+l*(1-u)}var ld=class e extends Ur{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new B,c=new B,l=new B(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new B,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=cd(m,c,`z`,`y`,i,n),f[a+1]=1-cd(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-cd(m,c,`z`,`y`,i,n),f[a+1]=1-cd(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-cd(m,c,`x`,`z`,i,e),f[a+1]=cd(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-cd(m,c,`x`,`z`,i,e),f[a+1]=1-cd(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-cd(m,c,`x`,`y`,i,e),f[a+1]=1-cd(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=cd(m,c,`x`,`y`,i,e),f[a+1]=1-cd(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function ud(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new kr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=dd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=dd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}return c}function dd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new yr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function fd(e=96,t=1){let n=[];for(let r=0;r<e;r++){let i=r/e*J,a=Math.sin(i),o=16*a*a*a,s=13*Math.cos(i)-5*Math.cos(2*i)-2*Math.cos(3*i)-Math.cos(4*i),c=Math.exp(-((Math.min(i,J-i)/.35)**2));s-=c*1.2,n.push(new z(o/32*t,(s+2.6)/32*t))}return n}function pd(e=5,t=.5,n=.22,r=Math.PI/2){let i=[];for(let a=0;a<e*2;a++){let o=a%2==0?t:n,s=r+a/(e*2)*J;i.push(new z(Math.cos(s)*o,Math.sin(s)*o))}return i}function md(e,{thickness:t=.25,rings:n=10,power:r=2.2,center:i=null,back:a=1}={}){let o=e.length,s=i||e.reduce((e,t)=>e.add(t),new z).multiplyScalar(1/o),c=[],l=[],u=[],d=i=>{let d=c.length/3;c.push(s.x,s.y,t*i*(i<0?a:1)),l.push(.5,.5);for(let u=1;u<=n;u++){let d=u/n,f=t*Math.max(0,1-d**+r)**.5*(i<0?a:1);for(let t=0;t<o;t++){let r=e[t],a=s.x+(r.x-s.x)*d,o=s.y+(r.y-s.y)*d;c.push(a,o,u===n?0:f*i),l.push(.5+(a-s.x),.5+(o-s.y))}}for(let e=0;e<o;e++){let t=d+1+e,n=d+1+(e+1)%o;i>0?u.push(d,t,n):u.push(d,n,t)}for(let e=1;e<n;e++){let t=d+1+(e-1)*o,n=d+1+e*o;for(let e=0;e<o;e++){let r=(e+1)%o;i>0?(u.push(t+e,n+e,n+r),u.push(t+e,n+r,t+r)):(u.push(t+e,n+r,n+e),u.push(t+e,t+r,n+r))}}return d},f=d(1),p=d(-1),m=f+1+(n-1)*o,h=p+1+(n-1)*o;for(let e=0;e<u.length;e++){let t=u[e];t>=h&&t<h+o&&(u[e]=m+(t-h))}let g=new kr;return g.setAttribute(`position`,new U(c,3)),g.setAttribute(`uv`,new U(l,2)),g.setIndex(u),g.computeVertexNormals(),g}function hd(e=1,t=.28,n=8,r=56){return md(fd(r,e),{thickness:t*e,rings:n,center:new z(0,-.04*e)})}function gd(e=.5,t=.24,n=.16,r=6){let i=pd(5,e,t),a=[];for(let e=0;e<i.length;e++){let t=i[e],n=i[(e+1)%i.length];for(let e=0;e<4;e++)a.push(new z().lerpVectors(t,n,e/4))}return md(a,{thickness:n,rings:r,power:1.6,center:new z})}function _d(e=.5,t=.23,n=.16,r=5){let i=pd(r,e,t),a=[],o=i.length;for(let e=0;e<o;e++){let t=i[e],r=i[(e+1)%o];a.push(0,0,n,t.x,t.y,0,r.x,r.y,0),a.push(0,0,-n*.7,r.x,r.y,0,t.x,t.y,0)}let s=new kr;s.setAttribute(`position`,new U(a,3)),s.computeVertexNormals();let c=new Float32Array(a.length/3*2);return s.setAttribute(`uv`,new yr(c,2)),s}function vd(e,{table:t=.5,crown:n=.12,girdle:r=.04,pavilion:i=.32}={}){let a=e.length,o=e.reduce((e,t)=>e.add(t),new z).multiplyScalar(1/a),s=[],c=(t,n,r)=>{let i=e[r%a];return[o.x+(i.x-o.x)*t,o.y+(i.y-o.y)*t,n]},l=(e,t,n)=>s.push(...e,...t,...n);for(let e=0;e<a;e++){let a=e+1;l([o.x,o.y,n+r],c(t,n+r,e),c(t,n+r,a));let s=c(t,n+r,e),u=c(t,n+r,a),d=c(1,r,e),f=c(1,r,a);l(s,d,f),l(s,f,u);let p=c(1,-r*.5,e),m=c(1,-r*.5,a);l(d,p,m),l(d,m,f),l(p,[o.x,o.y,-i],m)}let u=new kr;return u.setAttribute(`position`,new U(s,3)),u.computeVertexNormals(),u.setAttribute(`uv`,new yr(new Float32Array(s.length/3*2),2)),u}function yd(e=1,t=.5){return vd(fd(28,e),{table:.55,crown:.13*e*t*2,girdle:.03*e,pavilion:.34*e*t*2})}function bd(e,t,{tubular:n=24,radial:r=10,flatten:i=1,closeEnds:a=!0}={}){let o=e.computeFrenetFrames(n,!1),s=[],c=[],l=[],u=[],d=new B,f=new B,p=new B,m=new B;for(let a=0;a<=n;a++){let u=a/n;e.getPointAt(u,d),f.copy(o.normals[a]),p.copy(o.binormals[a]);let h=t(u);for(let e=0;e<=r;e++){let t=e/r*J,n=Math.sin(t),a=-Math.cos(t);m.set(0,0,0).addScaledVector(f,a*i).addScaledVector(p,n),s.push(d.x+m.x*h,d.y+m.y*h,d.z+m.z*h);let o=new B().addScaledVector(f,a/Math.max(.2,i)).addScaledVector(p,n).normalize();c.push(o.x,o.y,o.z),l.push(u,e/r)}}for(let e=0;e<n;e++)for(let t=0;t<r;t++){let n=e*(r+1)+t,i=(e+1)*(r+1)+t;u.push(n,i,n+1,i,i+1,n+1)}if(a)for(let t of[0,n]){e.getPointAt(t/n,d);let i=s.length/3;s.push(d.x,d.y,d.z);let a=e.getTangentAt(t/n).multiplyScalar(t===0?-1:1);c.push(a.x,a.y,a.z),l.push(t/n,.5);let o=t*(r+1);for(let e=0;e<r;e++)t===0?u.push(i,o+e+1,o+e):u.push(i,o+e,o+e+1)}let h=new kr;return h.setAttribute(`position`,new U(s,3)),h.setAttribute(`normal`,new U(c,3)),h.setAttribute(`uv`,new U(l,2)),h.setIndex(u),h}function xd({rTop:e=.1,rBottom:t=.14,height:n=.04,waves:r=12,amp:i=.012,segs:a=96,rows:o=5,arc:s=J,start:c=0}={}){let l=[],u=[],d=[];for(let d=0;d<=o;d++){let f=d/o;for(let o=0;o<=a;o++){let d=o/a,p=c+d*s,m=Math.sin(p*r)*i*f**1.3,h=Ju(e,t,f)+m,g=-n*f+Math.cos(p*r)*i*.25*f;l.push(Math.sin(p)*h,g,Math.cos(p)*h),u.push(d,1-f)}}for(let e=0;e<o;e++)for(let t=0;t<a;t++){let n=e*(a+1)+t,r=(e+1)*(a+1)+t;d.push(n,r,n+1,r,r+1,n+1)}let f=new kr;return f.setAttribute(`position`,new U(l,3)),f.setAttribute(`uv`,new U(u,2)),f.setIndex(d),f.computeVertexNormals(),f}function Sd(e,t=32,n=1){let r=new Eo(e.map(([e,t])=>new z(e,t)),t);return n!==1&&r.scale(1,1,n),r}function Cd(e=.1,t=.07,n=.035){let r=new K(1,28,18),i=r.attributes.position,a=new B;for(let r=0;r<i.count;r++){a.fromBufferAttribute(i,r);let o=(a.x+1)/2,s=Math.sin(Math.PI*Math.min(1,o*.92+.08))**.6,c=.55+.45*o**.7;a.y*=t*.5*s*c,a.z*=n*.5*s,a.z-=Math.exp(-(((o-.55)/.2)**2))*Math.exp(-((a.y/(t*.2))**2))*n*.18*Math.sign(a.z),a.x=o*e,i.setXYZ(r,a.x,a.y,a.z)}return r.computeVertexNormals(),r}function wd(e=.12,t=.03,n=.006,r=.02,i=12){let a=[],o=[],s=[];for(let o=0;o<=i;o++){let c=o/i;for(let l=0;l<3;l++){let u=l/2-.5,d=-c*e;o===i&&(d+=Math.abs(u)<.01?t*.45:0);let f=u*t*(1+c*.25)+Math.sin(c*Math.PI)*r,p=Math.sin(c*2.2)*r*.6;a.push(f,d,p+n*.5),s.push(l/2,c)}}let c=a.length/3;for(let e=0;e<c;e++)a.push(a[e*3],a[e*3+1],a[e*3+2]-n),s.push(s[e*2],s[e*2+1]);for(let e=0;e<i;e++)for(let t=0;t<2;t++){let n=e*3+t,r=(e+1)*3+t;o.push(n,r,n+1,r,r+1,n+1),o.push(c+n,c+n+1,c+r,c+r,c+n+1,c+r+1)}let l=new kr;return l.setAttribute(`position`,new U(a,3)),l.setAttribute(`uv`,new U(s,2)),l.setIndex(o),l.computeVertexNormals(),l}function Td(e){return ud(e.map(({geo:e,color:t,matrix:n})=>{let r=e.index?e.toNonIndexed():e.clone();for(let e of Object.keys(r.attributes))e!==`position`&&e!==`normal`&&r.deleteAttribute(e);r.attributes.normal||r.computeVertexNormals(),n&&r.applyMatrix4(n);let i=new H(t),a=r.attributes.position.count,o=new Float32Array(a*3);for(let e=0;e<a;e++)o[e*3]=i.r,o[e*3+1]=i.g,o[e*3+2]=i.b;return r.setAttribute(`color`,new yr(o,3)),r}),!1)}function Q(e=[0,0,0],t=[0,0,0],n=[1,1,1]){let r=new V,i=new _t().setFromEuler(new An(t[0],t[1],t[2])),a=typeof n==`number`?new B(n,n,n):new B(...n);return r.compose(new B(...e),i,a),r}function Ed(e=1,t=0){return new _a(fd(120,e).map(e=>new B(e.x,e.y,t)),!0,`centripetal`)}function Dd(e,t,n,r=.3,i=16){let a=new Ur(e,t,n,i,4,i),o=a.attributes.position,s=new B;for(let i=0;i<o.count;i++){s.fromBufferAttribute(o,i);let a=s.x/(e/2),c=s.z/(n/2),l=(1-a*a)*(1-c*c);s.y>0?s.y+=l*t*r:s.y-=l*t*r*.3,s.x*=1-.08*Math.abs(c)**4,s.z*=1-.08*Math.abs(a)**4,o.setXYZ(i,s.x,s.y,s.z)}return a.computeVertexNormals(),a}var Od=new Map;function kd(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}function Ad(e,{srgb:t=!0,repeat:r=!1,aniso:i=4,mips:a=!0}={}){let o=new na(e);return t&&(o.colorSpace=Fe),r&&(o.wrapS=o.wrapT=n),o.anisotropy=i,o.generateMipmaps=a,a||(o.minFilter=c),o.needsUpdate=!0,o}function jd(e,t){return Od.has(e)||Od.set(e,t()),Od.get(e)}function Md(e,t,n,r){let i=fd(48,r);e.beginPath(),i.forEach((r,i)=>i?e.lineTo(t+r.x,n-r.y):e.moveTo(t+r.x,n-r.y)),e.closePath()}function Nd(e,t,n,r,i=r*.45,a=0){let o=pd(5,r,i,Math.PI/2+a);e.beginPath(),o.forEach((r,i)=>i?e.lineTo(t+r.x,n-r.y):e.moveTo(t+r.x,n-r.y)),e.closePath()}function Pd(){return jd(`glow`,()=>{let e=kd(128,128),t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.25,`rgba(255,255,255,0.55)`),n.addColorStop(.6,`rgba(255,255,255,0.12)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),Ad(e,{srgb:!1})})}function Fd(){return jd(`shaft`,()=>{let e=kd(64,256),t=e.getContext(`2d`),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,`rgba(255,255,255,0.0)`),n.addColorStop(.08,`rgba(255,255,255,0.9)`),n.addColorStop(.6,`rgba(255,255,255,0.35)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,256);let r=t.getImageData(0,0,64,256);for(let e=0;e<256;e++)for(let t=0;t<64;t++){let n=Math.sin(t/63*Math.PI);r.data[(e*64+t)*4+3]*=n**1.5}return t.putImageData(r,0,0),Ad(e,{srgb:!1})})}function Id(){return jd(`wallpaper`,()=>{let e=kd(512,512),t=e.getContext(`2d`);t.fillStyle=`#fde3ec`,t.fillRect(0,0,512,512);for(let e=0;e<8;e++)t.fillStyle=e%2?`rgba(255,255,255,0.35)`:`rgba(255,214,230,0.25)`,t.fillRect(e*64,0,64,512);for(let e=0;e<4;e++)for(let n=0;n<4;n++){let r=n*128+64+e%2*32-16,i=e*128+64;(n+e)%2==0?(Md(t,r,i,26),t.fillStyle=`rgba(255,255,255,0.85)`,t.fill()):(Nd(t,r,i,13),t.fillStyle=`rgba(255,236,170,0.9)`,t.fill())}return Ad(e,{repeat:!0})})}function Ld(){return jd(`wood`,()=>{let e=kd(512,512),t=e.getContext(`2d`);t.fillStyle=`#f2dcc4`,t.fillRect(0,0,512,512);for(let e=0;e<8;e++){let n=e*64,r=e*173%512,i=[0,8,-6,4,-3,10,-8,2][e];t.fillStyle=`rgb(${242+i},${222+i},${198+i})`,t.fillRect(0,n,512,64);for(let e=0;e<22;e++){t.strokeStyle=`rgba(200,160,120,${.05+Math.random()*.07})`,t.lineWidth=1+Math.random()*1.5,t.beginPath();let r=n+4+Math.random()*56;t.moveTo(0,r);for(let n=0;n<=512;n+=32)t.lineTo(n,r+Math.sin(n*.02+e)*2);t.stroke()}t.fillStyle=`rgba(190,150,115,0.45)`,t.fillRect(0,n,512,2),t.fillRect(r,n,2,64),t.fillRect((r+256)%512,n,2,64)}return Ad(e,{repeat:!0})})}function Rd(){return jd(`rug`,()=>{let e=kd(512,512),t=e.getContext(`2d`);t.clearRect(0,0,512,512),t.fillStyle=`#ffffff`,t.beginPath();for(let e=0;e<28;e++){let n=e/28*Math.PI*2;t.moveTo(256+Math.cos(n)*236,256+Math.sin(n)*236),t.arc(256+Math.cos(n)*236,256+Math.sin(n)*236,20,0,Math.PI*2)}t.fill(),t.beginPath(),t.arc(256,256,238,0,Math.PI*2),t.fill(),t.fillStyle=`#ffb9d3`,t.beginPath(),t.arc(256,256,222,0,Math.PI*2),t.fill(),t.fillStyle=`#ffd3e3`,t.beginPath(),t.arc(256,256,170,0,Math.PI*2),t.fill(),t.fillStyle=`#fff4f8`,t.beginPath(),t.arc(256,256,110,0,Math.PI*2),t.fill();for(let e=0;e<12;e++){let n=e/12*Math.PI*2;Md(t,256+Math.cos(n)*196,256+Math.sin(n)*196,30),t.fillStyle=e%2?`#ffffff`:`#fff1a8`,t.fill()}Md(t,256,256,90),t.fillStyle=`#ffc3da`,t.fill();let n=t.getImageData(0,0,512,512);for(let e=0;e<n.data.length;e+=4){let t=(Math.random()-.5)*14;n.data[e]+=t,n.data[e+1]+=t,n.data[e+2]+=t}return t.putImageData(n,0,0),Ad(e)})}function zd(e=`room`){return jd(`sky`+e,()=>{let t=kd(512,512),n=t.getContext(`2d`),r=n.createLinearGradient(0,0,0,512);e===`room`?(r.addColorStop(0,`#9fd6ff`),r.addColorStop(.55,`#d6efff`),r.addColorStop(1,`#fff3e6`)):(r.addColorStop(0,`#8fd0ff`),r.addColorStop(.6,`#cfeeff`),r.addColorStop(1,`#fff6fb`)),n.fillStyle=r,n.fillRect(0,0,512,512);let i=(e,t,r)=>{n.fillStyle=`rgba(255,255,255,0.92)`;for(let i=0;i<7;i++)n.beginPath(),n.arc(e+(i-3)*r*.5,t+Math.sin(i*1.7)*r*.18,r*(.38+.2*Math.sin(i*2.3+1)),0,Math.PI*2),n.fill();n.fillStyle=`rgba(255,240,248,0.6)`,n.fillRect(e-r*1.6,t,r*3.2,r*.25)};if(e===`room`){i(120,150,70),i(380,90,55),i(330,260,40),n.fillStyle=`#bfe8c4`;for(let e=0;e<9;e++)n.beginPath(),n.arc(e*64,520,80+e%3*18,0,Math.PI*2),n.fill();n.fillStyle=`#a6deb2`;for(let e=0;e<7;e++)n.beginPath(),n.arc(e*90+30,560,90,0,Math.PI*2),n.fill()}else for(let e=0;e<9;e++)i(Math.random()*512,60+Math.random()*380,30+Math.random()*40);return Ad(t)})}function Bd(e=`#ffc2d9`,t=`room`){return jd(`fabric`+e+t,()=>{let n=kd(256,256),r=n.getContext(`2d`);r.fillStyle=e,r.fillRect(0,0,256,256);for(let e=0;e<256;e+=2)r.fillStyle=`rgba(255,255,255,${e%4?.04:.08})`,r.fillRect(0,e,256,1);for(let e=0;e<256;e+=2)r.fillStyle=`rgba(0,0,0,0.025)`,r.fillRect(e,0,1,256);if(t===`theater`)for(let e=0;e<4;e++)for(let t=0;t<4;t++){let n=t*64+32+e%2*32,i=e*64+32;(t+e)%2==0?(Md(r,n%256,i,26),r.fillStyle=`rgba(255,255,255,0.32)`):(Nd(r,n%256,i,12),r.fillStyle=`rgba(255,236,160,0.55)`),r.fill()}else if(t===`dots`){r.fillStyle=`rgba(255,255,255,0.7)`;for(let e=0;e<8;e++)for(let t=0;t<8;t++)r.beginPath(),r.arc(t*32+16+e%2*16,e*32+16,4,0,Math.PI*2),r.fill()}return Ad(n,{repeat:!0})})}function Vd(){return jd(`tulle`,()=>{let e=kd(128,128),t=e.getContext(`2d`);t.fillStyle=`#5a5a5a`,t.fillRect(0,0,128,128),t.strokeStyle=`#ffffff`,t.lineWidth=2.2;for(let e=-1;e<10;e++)for(let n=-1;n<10;n++){let r=n*16*1.5,i=e*16*1.732+(n%2?13.856:0);t.beginPath();for(let e=0;e<6;e++){let n=e/6*Math.PI*2,a=r+Math.cos(n)*16,o=i+Math.sin(n)*16;e?t.lineTo(a,o):t.moveTo(a,o)}t.closePath(),t.stroke()}return Ad(e,{srgb:!1,repeat:!0})})}function Hd(){return jd(`glitter`,()=>{let e=kd(256,256),t=e.getContext(`2d`);t.fillStyle=`#000`,t.fillRect(0,0,256,256);for(let e=0;e<180;e++){let e=Math.random()*256,n=Math.random()*256,r=.6+Math.random()*1.4;t.fillStyle=`rgba(255,255,255,${.5+Math.random()*.5})`,t.beginPath(),t.arc(e,n,r,0,Math.PI*2),t.fill()}return Ad(e,{srgb:!1,repeat:!0})})}function Ud(){return jd(`quilt`,()=>{let e=kd(256,256),t=e.getContext(`2d`);t.fillStyle=`#ffffff`,t.fillRect(0,0,256,256);for(let e=0;e<4;e++)for(let n=0;n<4;n++){let r=t.createRadialGradient(n*64+32,e*64+32,4,n*64+32,e*64+32,46);r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(1,`rgba(236,226,236,1)`),t.fillStyle=r,t.save(),t.translate(n*64+32,e*64+32),t.rotate(Math.PI/4),t.fillRect(-23,-23,46,46),t.restore()}return Ad(e,{repeat:!0})})}function Wd(){return jd(`marble`,()=>{let e=kd(512,512),t=e.getContext(`2d`);t.fillStyle=`#fffaf8`,t.fillRect(0,0,512,512);for(let e=0;e<14;e++){t.strokeStyle=`rgba(240,212,226,${.15+Math.random()*.2})`,t.lineWidth=.6+Math.random()*1.6,t.beginPath();let e=Math.random()*512,n=Math.random()*512;t.moveTo(e,n);for(let r=0;r<30;r++)e+=(Math.random()-.3)*30,n+=(Math.random()-.5)*30,t.lineTo(e,n);t.stroke()}t.strokeStyle=`rgba(235,215,225,0.6)`,t.lineWidth=2;for(let e=0;e<=512;e+=128)t.beginPath(),t.moveTo(e,0),t.lineTo(e,512),t.stroke(),t.beginPath(),t.moveTo(0,e),t.lineTo(512,e),t.stroke();return Ad(e,{repeat:!0})})}function Gd(){return jd(`stage`,()=>{let e=kd(1024,1024),t=e.getContext(`2d`),n=t.createRadialGradient(512,512,10,512,512,512);n.addColorStop(0,`#fffdfd`),n.addColorStop(.85,`#fff4f8`),n.addColorStop(1,`#ffe8f1`),t.fillStyle=n,t.fillRect(0,0,1024,1024),t.strokeStyle=`rgba(244,205,150,0.9)`,t.lineWidth=6;for(let e of[500,470])t.beginPath(),t.arc(512,512,e,0,Math.PI*2),t.stroke();t.lineWidth=2.5,t.strokeStyle=`rgba(250,190,215,0.8)`,t.beginPath(),t.arc(512,512,150,0,Math.PI*2),t.stroke();for(let e=0;e<24;e++){let n=e/24*Math.PI*2;t.beginPath(),t.moveTo(512+Math.cos(n)*150,512+Math.sin(n)*150),t.lineTo(512+Math.cos(n)*470,512+Math.sin(n)*470),t.strokeStyle=`rgba(250,215,230,0.45)`,t.stroke()}for(let e=0;e<36;e++){let n=e/36*Math.PI*2;Md(t,512+Math.cos(n)*485,512+Math.sin(n)*485,16),t.fillStyle=`rgba(255,190,215,0.9)`,t.fill()}return Ad(e,{aniso:8})})}function Kd(e=`open`,t=`#7a4a3a`){return jd(`eye`+e+t,()=>{let n=kd(256,256),r=n.getContext(`2d`);if(r.clearRect(0,0,256,256),e===`open`||e===`wow`){let n=e===`wow`?92:86;r.fillStyle=`#ffffff`,r.beginPath(),r.ellipse(128,136,66,n,0,0,Math.PI*2),r.fill();let i=r.createLinearGradient(0,136-n,0,136+n);i.addColorStop(0,`#3a2320`),i.addColorStop(.45,t),i.addColorStop(1,`#e9a3b6`),r.fillStyle=i,r.beginPath(),r.ellipse(128,142,56.76,n*.9,0,0,Math.PI*2),r.fill(),r.fillStyle=`#2a1715`,r.beginPath(),r.ellipse(128,144,27.72,n*.46,0,0,Math.PI*2),r.fill(),r.fillStyle=`#ffffff`,r.beginPath(),r.ellipse(106,110,22,26,-.3,0,Math.PI*2),r.fill(),r.beginPath(),r.ellipse(154,172,10,11,0,0,Math.PI*2),r.fill(),e===`wow`&&(Nd(r,150,126,14),r.fill()),r.fillStyle=`rgba(255,255,255,0.6)`,r.beginPath(),r.ellipse(122,182,22,8,0,0,Math.PI*2),r.fill(),r.strokeStyle=`#3a2422`,r.lineCap=`round`,r.lineWidth=16,r.beginPath(),r.ellipse(128,140,72,n+4,0,Math.PI*1.08,Math.PI*1.92),r.stroke(),r.lineWidth=9,r.beginPath(),r.moveTo(190,136-n*.45),r.lineTo(214,136-n*.68),r.stroke(),r.beginPath(),r.moveTo(66,136-n*.45),r.lineTo(48,136-n*.62),r.stroke()}else e===`happy`?(r.strokeStyle=`#3a2422`,r.lineWidth=16,r.lineCap=`round`,r.beginPath(),r.arc(128,176,58,Math.PI*1.15,Math.PI*1.85),r.stroke()):e===`closed`&&(r.strokeStyle=`#3a2422`,r.lineWidth=14,r.lineCap=`round`,r.beginPath(),r.arc(128,106,60,Math.PI*.2,Math.PI*.8),r.stroke());return Ad(n,{mips:!0})})}function qd(e=`smile`){return jd(`mouth`+e,()=>{let t=kd(128,128),n=t.getContext(`2d`);return n.clearRect(0,0,128,128),n.lineCap=`round`,e===`smile`?(n.strokeStyle=`#c85a6a`,n.lineWidth=9,n.beginPath(),n.arc(64,50,22,Math.PI*.2,Math.PI*.8),n.stroke()):e===`open`?(n.fillStyle=`#d0566c`,n.beginPath(),n.moveTo(38,58),n.quadraticCurveTo(64,58,90,58),n.quadraticCurveTo(64,104,38,58),n.fill(),n.fillStyle=`#ff9fb0`,n.beginPath(),n.ellipse(64,80,12,7,0,0,Math.PI*2),n.fill()):e===`o`&&(n.fillStyle=`#d0566c`,n.beginPath(),n.ellipse(64,66,13,16,0,0,Math.PI*2),n.fill()),Ad(t)})}function Jd(){return jd(`blush`,()=>{let e=kd(128,64),t=e.getContext(`2d`),n=t.createRadialGradient(64,32,2,64,32,40);n.addColorStop(0,`rgba(255,135,165,0.8)`),n.addColorStop(1,`rgba(255,140,170,0)`),t.fillStyle=n,t.save(),t.scale(1,.6),t.beginPath(),t.arc(64,53,60,0,Math.PI*2),t.restore(),t.fillRect(0,0,128,64),t.strokeStyle=`rgba(255,255,255,0.7)`,t.lineWidth=3;for(let e=0;e<3;e++)t.beginPath(),t.moveTo(48+e*12,26),t.lineTo(44+e*12,38),t.stroke();return Ad(e)})}function Yd(){return jd(`clock`,()=>{let e=kd(256,256),t=e.getContext(`2d`);t.fillStyle=`#fffaf2`,t.beginPath(),t.arc(128,128,124,0,Math.PI*2),t.fill(),t.fillStyle=`#ffc6da`;for(let e=0;e<12;e++){let n=e/12*Math.PI*2;e%3==0?(Md(t,128+Math.sin(n)*96,128-Math.cos(n)*96,24),t.fill()):(t.beginPath(),t.arc(128+Math.sin(n)*98,128-Math.cos(n)*98,6,0,Math.PI*2),t.fill())}return t.strokeStyle=`#8a5a6a`,t.lineCap=`round`,t.lineWidth=12,t.beginPath(),t.moveTo(128,128),t.lineTo(186,128),t.stroke(),t.lineWidth=8,t.beginPath(),t.moveTo(128,128),t.lineTo(128,42),t.stroke(),t.fillStyle=`#ff9ec6`,t.beginPath(),t.arc(128,128,10,0,Math.PI*2),t.fill(),Ad(e)})}function Xd(e=0){return jd(`drawing`+e,()=>{let t=kd(256,256),n=t.getContext(`2d`);if(n.fillStyle=`#fffdf8`,n.fillRect(0,0,256,256),n.lineCap=`round`,n.lineJoin=`round`,e===0){n.strokeStyle=`#ffc94a`,n.lineWidth=8,n.beginPath(),n.arc(60,60,26,0,Math.PI*2),n.stroke();for(let e=0;e<8;e++){let t=e*Math.PI/4;n.beginPath(),n.moveTo(60+Math.cos(t)*36,60+Math.sin(t)*36),n.lineTo(60+Math.cos(t)*50,60+Math.sin(t)*50),n.stroke()}n.strokeStyle=`#7fd19a`,n.beginPath(),n.moveTo(170,230),n.lineTo(170,150),n.stroke(),n.fillStyle=`#ff8fbf`;for(let e=0;e<5;e++){let t=e*Math.PI*2/5;n.beginPath(),n.arc(170+Math.cos(t)*22,130+Math.sin(t)*22,16,0,Math.PI*2),n.fill()}n.fillStyle=`#ffe27a`,n.beginPath(),n.arc(170,130,13,0,Math.PI*2),n.fill()}else[`#ff8fbf`,`#ffd36e`,`#8fd3ff`,`#c6a8ff`].forEach((e,t)=>{n.strokeStyle=e,n.lineWidth=10,n.beginPath(),n.arc(128,200,100-t*14,Math.PI,0),n.stroke()}),Md(n,128,150,70),n.fillStyle=`#ff9ec6`,n.fill();return Ad(t)})}function Zd(){return jd(`mirrorGlow`,()=>{let e=kd(256,256),t=e.getContext(`2d`),n=t.createRadialGradient(128,128,0,128,128,128);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.3,`rgba(255,214,232,0.95)`),n.addColorStop(.65,`rgba(255,170,210,0.45)`),n.addColorStop(1,`rgba(255,170,210,0)`),t.fillStyle=n,t.fillRect(0,0,256,256),t.fillStyle=`rgba(255,255,255,0.9)`;for(let e=0;e<40;e++){let e=Math.random()*Math.PI*2,n=40+Math.random()*70;t.beginPath(),t.arc(128+Math.cos(e)*n,128+Math.sin(e)*n,Math.random()*2+.5,0,Math.PI*2),t.fill()}return Ad(e,{srgb:!1})})}function Qd(){return jd(`books`,()=>{let e=kd(256,64),t=e.getContext(`2d`),n=[`#ffb3cf`,`#a8dcff`,`#ffe28a`,`#cdb6ff`,`#a8eed2`,`#ffffff`,`#ffc9a8`],r=0;for(;r<256;){let e=14+Math.random()*18;t.fillStyle=n[Math.floor(Math.random()*n.length)],t.fillRect(r,0,e-2,64),t.fillStyle=`rgba(255,255,255,0.6)`,t.fillRect(r+3,10,e-8,3),t.fillRect(r+3,50,e-8,3),r+=e}return Ad(e)})}function $d(e,t,n,r=.38,i=.34){let a=e.createRadialGradient(t*r,t*i,t*.02,t*.5,t*.5,t*.5);n.forEach(([e,t])=>a.addColorStop(e,t)),e.fillStyle=a,e.beginPath(),e.arc(t/2,t/2,t/2,0,Math.PI*2),e.fill()}function ef(e=`champagne`){return jd(`mcgold`+e,()=>{let t=kd(256,256),n=t.getContext(`2d`);n.fillStyle=`#5a3d22`,n.fillRect(0,0,256,256),$d(n,256,e===`rose`?[[0,`#fffaf4`],[.12,`#ffe3d6`],[.38,`#e8a99a`],[.7,`#a8665c`],[.9,`#6e3b38`],[1,`#c98a8a`]]:[[0,`#fffdf4`],[.12,`#fff0c8`],[.36,`#ecc98c`],[.66,`#b48444`],[.88,`#6f4a22`],[1,`#d9a76a`]]),n.save(),n.beginPath(),n.arc(128,128,128,0,Math.PI*2),n.clip();let r=n.createLinearGradient(0,133.12,0,189.44);r.addColorStop(0,`rgba(255,240,215,0)`),r.addColorStop(.5,`rgba(255,236,205,0.55)`),r.addColorStop(1,`rgba(255,240,215,0)`),n.fillStyle=r,n.fillRect(0,128,256,66.56);let i=n.createRadialGradient(128,128,102.4,128,128,128);return i.addColorStop(0,`rgba(255,190,215,0)`),i.addColorStop(1,`rgba(255,200,222,0.65)`),n.fillStyle=i,n.fillRect(0,0,256,256),n.fillStyle=`rgba(255,255,255,0.95)`,n.beginPath(),n.ellipse(87.04,71.68,17.92,11.52,-.6,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255,255,255,0.6)`,n.beginPath(),n.ellipse(179.2,189.44,12.8,6.4,-.6,0,Math.PI*2),n.fill(),n.restore(),Ad(t,{mips:!0})})}function tf(e){return jd(`mcgem`+e,()=>{let t=kd(256,256),n=t.getContext(`2d`),r=new H(e),i=(e,t=1,n=1)=>`rgba(${Math.round(Math.min(1,e.r*t)*255)},${Math.round(Math.min(1,e.g*t)*255)},${Math.round(Math.min(1,e.b*t)*255)},${n})`,a=r.clone().lerp(new H(1,1,1),.55),o=r.clone().multiplyScalar(.62);n.fillStyle=i(o),n.fillRect(0,0,256,256),$d(n,256,[[0,`#ffffff`],[.1,i(a)],[.4,i(r)],[.75,i(o)],[.92,i(r,.9)],[1,i(a)]],.36,.32),n.save(),n.beginPath(),n.arc(128,128,128,0,Math.PI*2),n.clip();let s=n.createRadialGradient(148.48,168.96,0,148.48,168.96,76.8);s.addColorStop(0,i(a,1.05,.85)),s.addColorStop(1,i(a,1,0)),n.fillStyle=s,n.fillRect(0,0,256,256),n.fillStyle=`rgba(255,255,255,1)`,n.beginPath(),n.ellipse(81.92,66.56,20.48,12.8,-.7,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255,255,255,0.8)`;for(let[e,t,r]of[[.7,.3,.025],[.22,.62,.02],[.66,.78,.03],[.5,.14,.018]])n.beginPath(),n.arc(256*e,256*t,256*r,0,Math.PI*2),n.fill();return n.restore(),Ad(t,{mips:!0})})}function nf(){return jd(`hair`,()=>{let e=e=>{let t=kd(256,256),n=t.getContext(`2d`);n.fillStyle=`#d8d8d8`,n.fillRect(0,0,256,256);for(let t=0;t<90;t++){let t=Math.random()*256,r=1+Math.random()*3,i=180+Math.random()*75;n.fillStyle=`rgba(${i},${i},${i},${.35+Math.random()*.4})`,e?n.fillRect(t,0,r,256):n.fillRect(0,t,256,r)}return Ad(t,{repeat:!0})},t=kd(256,256),n=t.getContext(`2d`);n.fillStyle=`#000`,n.fillRect(0,0,256,256);for(let e=0;e<256;e++){let t=256*(.3+.03*Math.sin(e/256*Math.PI*12)),r=n.createLinearGradient(0,t-14,0,t+14);r.addColorStop(0,`rgba(255,255,255,0)`),r.addColorStop(.5,`rgba(255,255,255,0.9)`),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.fillRect(e,t-14,1,28)}let r=Ad(t,{srgb:!1});return{cap:e(!0),strand:e(!1),ring:r}})}var rf=[{key:`pink`,color:`#ff8fc0`,light:`#ffc8df`,deep:`#ff5f9f`},{key:`blue`,color:`#8ed4ff`,light:`#d2f0ff`,deep:`#4fb2f2`},{key:`yellow`,color:`#ffe27a`,light:`#fff4c4`,deep:`#f6c33d`},{key:`lavender`,color:`#c4a6ff`,light:`#e8dcff`,deep:`#9c7cf2`},{key:`white`,color:`#ffffff`,light:`#ffffff`,deep:`#f3e8f6`},{key:`mint`,color:`#92e8c6`,light:`#d4f8ea`,deep:`#4fcfa2`}],af=`#ff9cc6`,of={pink:{main:`#ffa6cc`,tulle:`#ffcfe2`,sheer:`#ff94c2`,ribbon:`#ff78b2`,heart:`#ff6aa8`,accent:`#ffe7a3`},blue:{main:`#a8dcff`,tulle:`#d6f0ff`,sheer:`#8ed4ff`,ribbon:`#68bff5`,heart:`#ff8fc0`,accent:`#fff2b8`},yellow:{main:`#ffe68f`,tulle:`#fff4c8`,sheer:`#ffdb6b`,ribbon:`#ffc44d`,heart:`#ff8fc0`,accent:`#ffffff`},lavender:{main:`#d4bcff`,tulle:`#ffc6de`,sheer:`#c4a6ff`,ribbon:`#a888f5`,heart:`#ff8fc0`,accent:`#fff2b8`},white:{main:`#ffffff`,tulle:`#fde4ef`,sheer:`#f4ecff`,ribbon:`#ffb0d0`,heart:`#ff8fc0`,accent:`#ffe7a3`},mint:{main:`#b2f0d8`,tulle:`#ddf9ee`,sheer:`#92e8c6`,ribbon:`#5fd6ac`,heart:`#ff8fc0`,accent:`#fff2b8`}},sf={uRimColor:{value:new H(`#ffd6ea`)},uRimStrength:{value:.35}};function cf(e){let t=e.userData.fx;e.onBeforeCompile=e=>{let n=``,r=``;if(t.rim&&(e.uniforms.uRimColor=sf.uRimColor,e.uniforms.uRimStrength=sf.uRimStrength,n+=`uniform vec3 uRimColor; uniform float uRimStrength;
`,r+=`totalEmissiveRadiance += uRimColor * pow(fres, 2.6) * uRimStrength * ${t.rim.toFixed(3)};\n`),t.sheen&&(e.uniforms.uSheenColor={value:t.sheen.color},n+=`uniform vec3 uSheenColor;
`,r+=`totalEmissiveRadiance += uSheenColor * (pow(fres, 1.6) * 0.45 + pow(fres, 4.0) * 0.8) * ${t.sheen.k.toFixed(3)};\n`),t.reveal){let i=t.reveal;Object.assign(e.uniforms,i.uniforms),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\nattribute float ${i.attribute};\nvarying float vReveal;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\nvReveal = ${i.attribute};`),n+=`uniform float uReveal; uniform vec3 uRevealGlow; uniform float uRevealWidth; uniform float uFlash; varying float vReveal;
`,e.fragmentShader=e.fragmentShader.replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
if (vReveal > uReveal) discard;`),r+=`{
        float edge = 1.0 - smoothstep(0.0, uRevealWidth, uReveal - vReveal);
        totalEmissiveRadiance += uRevealGlow * edge * step(uReveal, 0.999);
        totalEmissiveRadiance += uRevealGlow * 0.35 * uFlash;
      }
`}e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
`+n).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
        {
          float fres = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
          ${r}
        }`)};let n=`fx`+(t.rim||0)+(t.sheen?`s`+t.sheen.k:``)+(t.reveal?`r`+t.reveal.attribute:``);return e.customProgramCacheKey=()=>n,e.needsUpdate=!0,e}function lf(e){return e.userData.fx=e.userData.fx||{},e.userData.fx}function uf(e,t=1){return lf(e).rim=t,cf(e)}function df(e,t=`#ffffff`,n=.35){return lf(e).sheen={color:new H(t),k:n},cf(e)}function ff(e,{glowColor:t=`#ffffff`,width:n=.08,attribute:r=`aReveal`,rim:i=0}={}){let a={uReveal:{value:1},uRevealGlow:{value:new H(t).multiplyScalar(3)},uRevealWidth:{value:n},uFlash:{value:0}};e.userData.reveal=a;let o=lf(e);return o.reveal={uniforms:a,attribute:r},i&&(o.rim=i),cf(e)}var pf=class{constructor(e){this.renderer=e,this.env=this._makeEnv(e)}_makeEnv(e){let t=new di,n=new K(10,48,24),r=[],i=n.attributes.position,a=new H(`#fff6fb`),o=new H(`#f6c4d8`),s=new H(`#9c7466`),c=new H;for(let e=0;e<i.count;e++){let t=i.getY(e)/10;t>0?c.copy(o).lerp(a,t**.45):c.copy(o).lerp(s,(-t)**.35),r.push(c.r,c.g,c.b)}n.setAttribute(`color`,new U(r,3)),t.add(new W(n,new hr({vertexColors:!0,side:1})));let l=(e,n,r,i,a,o,s)=>{let c=new W(new Do(i,a),new hr({color:new H(o).multiplyScalar(s),side:2}));c.position.set(e,n,r),c.lookAt(0,0,0),t.add(c)};l(-4,5,-6,4,3,`#fff4e4`,6),l(6,3,2,3,3,`#ffffff`,3.5),l(-6,2,5,2.5,2,`#ffe6f2`,3),l(0,9,0,6,6,`#ffffff`,2.2),l(3,-2,-7,3,1,`#ffd9ea`,1.8);let u=new rc(e),d=u.fromScene(t,.02);return u.dispose(),d.texture}gold({color:e=`#ffffff`,kind:t=`champagne`}={}){let n=new Io({matcap:ef(t),color:new H(e)});return n.userData.kind=`gold`,n}gem(e,{opacity:t=1,emissive:n=.3,flat:r=!0}={}){let i=new Io({matcap:tf(`#`+new H(e).getHexString()),flatShading:r,transparent:t<1,opacity:t});return i.userData.gemColor=new H(e),i.userData.base=1+n*.6,i.color.setScalar(i.userData.base),i}static setGemColor(e,t){e.matcap=tf(`#`+new H(t).getHexString()),e.userData.gemColor=new H(t)}static setGemGlow(e,t){e.color.setScalar((e.userData.base||1)*(1+t))}satin(e,{sheen:t=`#ffffff`,roughness:n=.36,side:r=0}={}){return df(new No({color:e,roughness:n,metalness:0,envMap:this.env,envMapIntensity:.55,side:r}),new H(e).lerp(new H(t),.6),.32)}lacquer(e,{map:t=null,roughness:n=.2}={}){return df(new No({color:e,map:t,roughness:n,metalness:0,envMap:this.env,envMapIntensity:.5}),`#ffffff`,.12)}matte(e,{map:t=null,roughness:n=.82,side:r=0,envI:i=.25}={}){return new No({color:e,map:t,roughness:n,metalness:0,envMap:this.env,envMapIntensity:i,side:r})}glow(e,t=2){return new hr({color:new H(e).multiplyScalar(t),toneMapped:!0})}},mf=`
  attribute vec3 aColor;
  attribute float aSize;
  attribute float aAlpha;
  attribute float aKind;
  attribute float aRot;
  uniform float uScale;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vKind;
  varying float vRot;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    float s = aSize * uScale / max(0.05, -mv.z);
    gl_PointSize = clamp(s, 0.0, 256.0);
    vColor = aColor;
    vAlpha = aAlpha * smoothstep(0.0, 1.5, s);
    vKind = aKind;
    vRot = aRot;
  }
`,hf=`
  varying vec3 vColor;
  varying float vAlpha;
  varying float vKind;
  varying float vRot;
  float dot2(vec2 v){ return dot(v,v); }
  float sdHeart(vec2 p){
    p.x = abs(p.x);
    if (p.y + p.x > 1.0) return sqrt(dot2(p - vec2(0.25, 0.75))) - sqrt(2.0) / 4.0;
    return sqrt(min(dot2(p - vec2(0.0, 1.0)), dot2(p - 0.5 * max(p.x + p.y, 0.0)))) * sign(p.x - p.y);
  }
  void main() {
    vec2 p = gl_PointCoord * 2.0 - 1.0;
    p.y = -p.y;
    float c = cos(vRot), s = sin(vRot);
    p = mat2(c, -s, s, c) * p;
    float d = length(p);
    float a = 0.0;
    if (vKind < 0.5) {
      a = exp(-d * d * 7.0) + exp(-d * d * 2.2) * 0.25;
    } else if (vKind < 1.5) {
      float core = exp(-d * d * 18.0);
      float rays = max(0.0, 1.0 - abs(p.x) * 9.0) * max(0.0, 1.0 - abs(p.y) * 1.05)
                 + max(0.0, 1.0 - abs(p.y) * 9.0) * max(0.0, 1.0 - abs(p.x) * 1.05);
      a = core + rays * 0.85 + exp(-d * d * 3.0) * 0.18;
    } else {
      vec2 hp = p * 0.85 + vec2(0.0, 0.55);
      float sd = sdHeart(hp);
      a = smoothstep(0.06, -0.04, sd) * 0.9 + exp(-max(sd, 0.0) * 9.0) * 0.35;
    }
    a *= vAlpha;
    if (a < 0.003) discard;
    gl_FragColor = vec4(vColor * a, 1.0);
  }
`,gf=class{constructor(e=3e3){this.cap=e;let t=e;this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.baseSize=new Float32Array(t),this.alpha=new Float32Array(t),this.kind=new Float32Array(t),this.rot=new Float32Array(t),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.twinkle=new Float32Array(t),this.spin=new Float32Array(t),this.floor=new Float32Array(t).fill(-1e9),this.next=0;let n=new kr;n.setAttribute(`position`,new yr(this.pos,3).setUsage(Ve)),n.setAttribute(`aColor`,new yr(this.col,3).setUsage(Ve)),n.setAttribute(`aSize`,new yr(this.size,1).setUsage(Ve)),n.setAttribute(`aAlpha`,new yr(this.alpha,1).setUsage(Ve)),n.setAttribute(`aKind`,new yr(this.kind,1).setUsage(Ve)),n.setAttribute(`aRot`,new yr(this.rot,1).setUsage(Ve)),this.geo=n,this.mat=new Zr({vertexShader:mf,fragmentShader:hf,uniforms:{uScale:{value:400}},transparent:!0,depthWrite:!1,blending:2}),this.points=new ea(n,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=10,this._c=new H}attach(e){e.add(this.points)}setViewport(e,t){this.mat.uniforms.uScale.value=e/(2*Math.tan(t*Math.PI/360))}spawn(e,t={}){let n=this.next;this.next=(this.next+1)%this.cap;let r=n*3;this.pos[r]=e.x,this.pos[r+1]=e.y,this.pos[r+2]=e.z;let i=t.vel;this.vel[r]=i?i.x:0,this.vel[r+1]=i?i.y:0,this.vel[r+2]=i?i.z:0;let a=this._c.set(t.color||`#ffffff`),o=t.intensity??2.2;return this.col[r]=a.r*o,this.col[r+1]=a.g*o,this.col[r+2]=a.b*o,this.baseSize[n]=t.size??.03,this.size[n]=this.baseSize[n],this.kind[n]=t.kind??0,this.rot[n]=t.rot??X(0,J),this.spin[n]=t.spin??X(-2,2),this.maxLife[n]=this.life[n]=t.life??1.2,this.grav[n]=t.gravity??0,this.drag[n]=t.drag??1.2,this.twinkle[n]=t.twinkle??0,this.floor[n]=t.floor??-1e9,this.alpha[n]=1,n}burst(e,t,n={}){let r=n.speed??1,i=n.colors||[n.color||`#ffffff`],a=new B;for(let o=0;o<t;o++)a.set(X(-1,1),X(-1,1),X(-1,1)),a.lengthSq()>1&&a.normalize(),a.multiplyScalar(r*X(.4,1)),n.up&&(a.y+=n.up),n.dir&&a.addScaledVector(n.dir,X(.5,1)),this.spawn(e,{...n,vel:a.clone(),color:i[o%i.length],size:(n.size??.03)*X(.6,1.3),life:(n.life??1.2)*X(.6,1.2),kind:n.kind??+(Math.random()<(n.twinkleRatio??.35))})}update(e,t){let n=this.cap,r=this.pos,i=this.vel;for(let a=0;a<n;a++){if(this.life[a]<=0){this.alpha[a]!==0&&(this.alpha[a]=0,this.size[a]=0);continue}this.life[a]-=e;let n=a*3,o=Math.exp(-this.drag[a]*e);i[n]*=o,i[n+1]=i[n+1]*o-this.grav[a]*e,i[n+2]*=o,r[n]+=i[n]*e,r[n+1]+=i[n+1]*e,r[n+2]+=i[n+2]*e,r[n+1]<this.floor[a]&&(r[n+1]=this.floor[a],i[n+1]*=-.3,i[n]*=.7,i[n+2]*=.7);let s=this.life[a]/this.maxLife[a],c=Math.min(1,s*3)*Math.min(1,(1-s)*12+.2);this.twinkle[a]>0&&(c*=.55+.45*Math.sin(t*this.twinkle[a]+a*1.7)),this.alpha[a]=Math.max(0,c),this.size[a]=this.baseSize[a]*(.6+.4*Math.min(1,s*2.5)),this.rot[a]+=this.spin[a]*e}let a=this.geo.attributes;a.position.needsUpdate=!0,a.aColor.needsUpdate=!0,a.aSize.needsUpdate=!0,a.aAlpha.needsUpdate=!0,a.aKind.needsUpdate=!0,a.aRot.needsUpdate=!0}clear(){this.life.fill(0),this.alpha.fill(0)}};function _f(e,t=.35,n=.9){return e.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
      #ifdef USE_COLOR
        totalEmissiveRadiance += vColor * ${t.toFixed(3)};
      #endif
      {
        float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
        #ifdef USE_COLOR
          totalEmissiveRadiance += (vColor * 0.6 + 0.4) * pow(rimF, 2.2) * ${n.toFixed(3)};
        #endif
      }`)},e.customProgramCacheKey=()=>`instglow`+t+n,e}var vf=class{constructor(e,t,n){this.cap=n,this.mesh=new Bi(e,t,n),this.mesh.instanceMatrix.setUsage(Ve),this.mesh.frustumCulled=!1,this.mesh.count=0;let r=new H(1,1,1);for(let e=0;e<n;e++)this.mesh.setColorAt(e,r);this.items=[];for(let e=0;e<n;e++)this.items.push({alive:!1,i:e,pos:new B,vel:new B,quat:new _t,av:new B,scale:0,size:.1,age:0,life:1,color:new H,gravity:0,drag:1,buoy:0,floor:-1e9,hover:0,wobble:0,home:null,spring:0,persistent:!1,squash:0,onDie:null,data:{}});this.next=0,this._m=new V,this._s=new B,this._q=new _t,this._e=new An,this._zero=new V().makeScale(0,0,0);for(let e=0;e<n;e++)this.mesh.setMatrixAt(e,this._zero)}spawn(e){let t=null;for(let e=0;e<this.cap;e++){let n=this.items[e];if(!n.alive){t=n;break}}if(!t){let e=null;for(let t of this.items)!t.persistent&&(!e||t.age/t.life>e.age/e.life)&&(e=t);t=e||this.items[0]}return t.alive=!0,t.pos.copy(e.pos),t.vel.copy(e.vel||new B),t.quat.setFromEuler(this._e.set(X(-.3,.3),X(-.6,.6),X(-.4,.4))),e.face&&t.quat.copy(e.face),t.av.set(X(-1,1),X(-1.5,1.5),X(-1,1)).multiplyScalar(e.spin??1),t.size=e.size??.08,t.scale=0,t.age=0,t.life=e.life??2.5,t.color.set(e.color||`#ff9ec6`),t.gravity=e.gravity??0,t.drag=e.drag??1.5,t.buoy=e.buoy??0,t.floor=e.floor??-1e9,t.hover=e.hover??0,t.wobble=e.wobble??1,t.home=e.home?e.home.clone():null,t.spring=e.spring??0,t.persistent=!!e.persistent,t.squash=0,t.onDie=e.onDie||null,t.data=e.data||{},t.popIn=e.popIn??.3,t.upright=e.upright??.6,this.mesh.setColorAt(t.i,t.color),this.mesh.instanceColor.needsUpdate=!0,t}setColor(e,t){e.color.set(t),this.mesh.setColorAt(e.i,e.color),this.mesh.instanceColor.needsUpdate=!0}kill(e){e.alive=!1,this.mesh.setMatrixAt(e.i,this._zero)}update(e,t){let n=-1;for(let r of this.items){if(!r.alive)continue;if(n=Math.max(n,r.i),r.age+=e,!r.persistent&&r.age>=r.life){r.alive=!1,this.mesh.setMatrixAt(r.i,this._zero),r.onDie&&r.onDie(r);continue}let i=r.age<r.hover,a=Math.exp(-(i?r.drag*3:r.drag)*e);r.vel.multiplyScalar(a),i||(r.vel.y+=(r.buoy-r.gravity)*e),r.home&&r.spring>0&&(r.vel.x+=(r.home.x-r.pos.x)*r.spring*e,r.vel.y+=(r.home.y-r.pos.y)*r.spring*e,r.vel.z+=(r.home.z-r.pos.z)*r.spring*e),r.pos.addScaledVector(r.vel,e),r.pos.x+=Math.sin(t*1.3+r.i)*.02*r.wobble*e,r.pos.y+=Math.sin(t*1.9+r.i*.7)*.03*r.wobble*e,r.pos.y-r.size*.4<r.floor&&(r.pos.y=r.floor+r.size*.4,r.vel.y<0&&(r.vel.y*=-.45),r.vel.x*=.8,r.vel.z*=.8,r.squash=Math.min(1,r.squash+.5)),this._q.setFromEuler(this._e.set(r.av.x*e,r.av.y*e,r.av.z*e)),r.quat.multiply(this._q),r.av.multiplyScalar(Math.exp(-.8*e)),r.upright>0&&(this._e.setFromQuaternion(r.quat,`YXZ`),this._e.x*=Math.exp(-r.upright*2*e),this._e.z*=Math.exp(-r.upright*2*e),r.quat.setFromEuler(this._e));let o=r.popIn>0?Z.outBack(Y(r.age/r.popIn)):1,s=r.persistent?1:Y((r.life-r.age)/.45);r.squash*=Math.exp(-6*e);let c=r.size*o*Z.outQuad(s);this._s.set(c*(1+r.squash*.25),c*(1-r.squash*.3),c*(1+r.squash*.25)),this._m.compose(r.pos,r.quat,this._s),this.mesh.setMatrixAt(r.i,this._m)}this.mesh.count=n+1,this.mesh.instanceMatrix.needsUpdate=!0}forEachAlive(e){for(let t of this.items)t.alive&&e(t)}clear(){for(let e of this.items)e.alive&&this.kill(e);this.mesh.instanceMatrix.needsUpdate=!0}},yf=class{constructor(e){let t=hd(1,.32,6);t.translate(0,.02,0);let n=_f(new No({color:16777215,roughness:.1,metalness:0,transparent:!0,opacity:.84,depthWrite:!1,envMap:e.env,envMapIntensity:1.7}),.42,1.2);this.hearts=new vf(t,n,220),this.hearts.mesh.renderOrder=6;let r=_d(.5,.22,.17),i=_f(new No({color:16777215,roughness:.16,metalness:.85,envMap:e.env,envMapIntensity:2,flatShading:!0}),.28,.8);this.stars=new vf(r,i,220),this.stars.mesh.renderOrder=5}attach(e){e.add(this.hearts.mesh),e.add(this.stars.mesh)}heart(e){return this.hearts.spawn(e)}star(e){return this.stars.spawn(e)}update(e,t){this.hearts.update(e,t),this.stars.update(e,t)}clear(){this.hearts.clear(),this.stars.clear()}},bf=40,xf=class{constructor(e){this.pts=Array.from({length:bf},()=>new B),this.prev=Array.from({length:bf},()=>new B),this.released=new Uint8Array(bf),this.path=Array.from({length:bf},()=>new B),this.rest=.02;let t=new Float32Array(240),n=new Float32Array(240),r=new Float32Array(320),i=new Float32Array(160),a=[];for(let e=0;e<39;e++){let t=e*2,n=t+1,r=t+2,i=t+3;a.push(t,r,n,n,r,i)}for(let e=0;e<bf;e++)i[e*4]=e/39,i[e*4+1]=0,i[e*4+2]=e/39,i[e*4+3]=1;let o=new kr;o.setAttribute(`position`,new yr(t,3).setUsage(Ve)),o.setAttribute(`normal`,new yr(n,3).setUsage(Ve)),o.setAttribute(`color`,new yr(r,4).setUsage(Ve)),o.setAttribute(`uv`,new yr(i,2)),o.setIndex(a),this.geo=o,this.mat=new No({color:16777215,emissive:16777215,emissiveIntensity:1,roughness:.3,metalness:.05,envMap:e,envMapIntensity:1,side:2,transparent:!0,vertexColors:!0,depthWrite:!1}),this.mesh=new W(o,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,this.mesh.visible=!1,this.active=!1,this._t=new B,this._s=new B,this._v=new B,this._n=new B,this._x=new B}},Sf=class{constructor(e,t=16){this.list=Array.from({length:t},()=>new xf(e.env)),this.camera=null,this.floorY=-1e9}attach(e){for(let t of this.list)e.add(t.mesh)}_get(){let e=this.list.find(e=>!e.active);return e||=this.list.reduce((e,t)=>e.age/e.life>t.age/t.life?e:t),e}fromPath(e,t={}){let n=this._get();n.active=!0,n.mode=`path`,n.age=0,n.life=t.life??3.2,n.grow=t.grow??.35,n.width=t.width??.05,n.gravity=t.gravity??.35,n.drag=t.drag??1.2,n.glow=t.glow??2.4,n.twist=t.twist??2.2,n.twistSpeed=X(1.5,3)*(Math.random()<.5?-1:1),n.curl=t.curl??.6,n.seed=X(0,100),n.color=new H(t.color||`#ff9ec6`),n.mat.color.copy(n.color),n.mat.emissive.copy(n.color);let r=[0];for(let t=1;t<e.length;t++)r.push(r[t-1]+e[t].distanceTo(e[t-1]));let i=Math.max(1e-4,r[r.length-1]),a=0;for(let t=0;t<bf;t++){let o=t/39*i;for(;a<e.length-2&&r[a+1]<o;)a++;let s=Math.max(1e-5,r[a+1]-r[a]),c=Y((o-r[a])/s);n.path[t].lerpVectors(e[a],e[Math.min(a+1,e.length-1)],c)}n.rest=i/39,n.vel=(t.vel||new B).clone(),n.released.fill(0);for(let e=0;e<bf;e++)n.pts[e].copy(n.path[0]),n.prev[e].copy(n.path[0]);return n.mesh.visible=!0,n.fade=1,n}scripted(e,t={}){let n=this._get();return n.active=!0,n.mode=`func`,n.fn=e,n.age=0,n.life=t.life??6,n.width=t.width??.08,n.glow=t.glow??1.5,n.twist=t.twist??2.5,n.twistSpeed=t.twistSpeed??1.4,n.seed=X(0,100),n.color=new H(t.color||`#ff9ec6`),n.mat.color.copy(n.color),n.mat.emissive.copy(n.color),n.persistent=!!t.persistent,n.glowFloor=t.glowFloor??.35,n.mesh.visible=!0,n.fade=1,n}release(e){e.active=!1,e.mesh.visible=!1,e.persistent=!1}update(e,t){let n=this.camera;for(let r of this.list){if(!r.active)continue;if(r.age+=e,!r.persistent&&r.age>r.life){this.release(r);continue}if(r.mode===`path`)this._simulate(r,e,t);else for(let e=0;e<bf;e++)r.fn(e/39,r.age,r.pts[e],e);let i=r.mode===`path`?Y(r.age/1.1):0,a=r.mode===`path`?.32:r.glowFloor;r.mat.emissiveIntensity=a+(r.glow-a)*(1-i)*(1-i);let o=r.persistent?1:Y((r.life-r.age)/.8);this._build(r,n,t,o*r.fade)}}_simulate(e,t,n){let r=Y(e.age/e.grow),i=Math.floor(r*39);for(let n=0;n<=i;n++)if(!e.released[n]){e.released[n]=1,e.pts[n].copy(e.path[n]);let r=n/39;e.prev[n].copy(e.path[n]).addScaledVector(e.vel,-t*(.25+r*.9))}let a=e.pts,o=e.prev,s=Math.exp(-e.drag*t),c=e._v;for(let r=0;r<bf;r++){if(!e.released[r]){a[r].copy(a[Math.max(0,i)]),o[r].copy(a[r]);continue}c.subVectors(a[r],o[r]).multiplyScalar(s),o[r].copy(a[r]);let l=r/39;c.y-=e.gravity*t*t;let u=n*1.6+l*5+e.seed;c.x+=Math.sin(u)*e.curl*.02*t,c.z+=Math.cos(u*.8)*e.curl*.02*t,c.y+=Math.sin(u*1.3)*e.curl*.012*t,a[r].add(c),a[r].y<this.floorY+.01&&(a[r].y=this.floorY+.01)}for(let t=0;t<3;t++)for(let t=0;t<39;t++){if(!e.released[t]||!e.released[t+1])continue;let n=a[t],r=a[t+1];c.subVectors(r,n);let i=c.length()||1e-6,o=(i-e.rest)/i*.5;n.addScaledVector(c,o),r.addScaledVector(c,-o)}}_build(e,t,n,r){let i=e.geo.attributes.position.array,a=e.geo.attributes.normal.array,o=e.geo.attributes.color.array,s=e.pts,c=e._t,l=e._s,u=e._n,d=e._v,f=e._x;for(let p=0;p<bf;p++){let m=s[Math.max(0,p-1)],h=s[Math.min(39,p+1)];c.subVectors(h,m),c.lengthSq()<1e-10&&c.set(1,0,0),c.normalize(),t?d.subVectors(t.position,s[p]).normalize():d.set(0,0,1),l.crossVectors(c,d),l.lengthSq()<1e-8&&l.set(0,1,0),l.normalize();let g=p/39,_=Math.sin(g*e.twist*2+n*e.twistSpeed+e.seed)*1.1;f.crossVectors(c,l),l.multiplyScalar(Math.cos(_)).addScaledVector(f,Math.sin(_));let v=e.width*(.3+.7*Math.sin(Math.PI*Y(g*.98+.01))**.45)*.5;u.crossVectors(l,c).normalize();let y=p*6;i[y]=s[p].x+l.x*v,i[y+1]=s[p].y+l.y*v,i[y+2]=s[p].z+l.z*v,i[y+3]=s[p].x-l.x*v,i[y+4]=s[p].y-l.y*v,i[y+5]=s[p].z-l.z*v,a[y]=a[y+3]=u.x,a[y+1]=a[y+4]=u.y,a[y+2]=a[y+5]=u.z;let b=Yu(0,.1,g)*(1-Yu(.88,1,g)*.7)*r,x=p*8;o[x]=o[x+1]=o[x+2]=1,o[x+3]=b,o[x+4]=o[x+5]=o[x+6]=1,o[x+7]=b}e.geo.attributes.position.needsUpdate=!0,e.geo.attributes.normal.needsUpdate=!0,e.geo.attributes.color.needsUpdate=!0}clear(){for(let e of this.list)this.release(e)}};function Cf(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`);return n.filter=`blur(6px)`,n.fillStyle=`rgba(255,255,255,0.55)`,e===`star`?Nd(n,64,64,52,24):Md(n,64,70,104),n.fill(),n.filter=`blur(1.5px)`,n.fillStyle=`rgba(255,255,255,1)`,e===`star`?Nd(n,64,64,40,18):Md(n,64,68,80),n.fill(),n.filter=`none`,new na(t)}var wf=class{constructor(e,t){let n=new Do(1,1);n.rotateX(-Math.PI/2);let r=new hr({map:e,transparent:!0,depthWrite:!1,blending:2,toneMapped:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.mesh=new Bi(n,r,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.cap=t,this.items=Array.from({length:t},(e,t)=>({i:t,alive:!1,pos:new B,size:1,color:new H,intensity:1,life:1,age:0,rot:0,hold:0,grow:.2})),this._m=new V,this._q=new _t,this._s=new B,this._c=new H;let i=new V().makeScale(0,0,0);for(let e=0;e<t;e++)this.mesh.setMatrixAt(e,i),this.mesh.setColorAt(e,this._c.set(0,0,0));this.next=0}spawn(e,{size:t=.6,color:n=`#ffb6d6`,intensity:r=1.5,life:i=1.5,rot:a=0,hold:o=0,grow:s=.18}={}){let c=this.items[this.next];for(let e=0;e<this.cap;e++){let t=this.items[(this.next+e)%this.cap];if(!t.alive){c=t;break}}return this.next=(c.i+1)%this.cap,c.alive=!0,c.pos.copy(e),c.size=t,c.color.set(n),c.intensity=r,c.life=i,c.age=0,c.rot=a,c.hold=o,c.grow=s,c}update(e){let t=-1;for(let n of this.items){if(!n.alive)continue;if(t=Math.max(t,n.i),n.age+=e,n.hold!==1/0&&n.age>n.life+n.hold){n.alive=!1,this.mesh.setMatrixAt(n.i,this._m.makeScale(0,0,0)),this.mesh.setColorAt(n.i,this._c.setRGB(0,0,0));continue}let r=Y(n.age/n.grow),i=n.hold===1/0||n.age<n.hold?1:Y(1-(n.age-n.hold)/n.life),a=n.intensity*i*(.6+.4*r);this._q.setFromAxisAngle(new B(0,1,0),n.rot);let o=n.size*(.5+.5*r);this._s.set(o,1,o),this._m.compose(n.pos,this._q,this._s),this.mesh.setMatrixAt(n.i,this._m),this.mesh.setColorAt(n.i,this._c.copy(n.color).multiplyScalar(a))}this.mesh.count=t+1,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}clear(){for(let e of this.items)e.alive=!1;for(let e=0;e<this.cap;e++)this.mesh.setMatrixAt(e,this._m.makeScale(0,0,0));this.mesh.instanceMatrix.needsUpdate=!0}},Tf=class{constructor(){this.round=new wf(Pd(),64),this.star=new wf(Cf(`star`),64),this.heart=new wf(Cf(`heart`),32)}attach(e){e.add(this.round.mesh,this.star.mesh,this.heart.mesh)}spawn(e,t,n){return this[e].spawn(t,n)}update(e){this.round.update(e),this.star.update(e),this.heart.update(e)}clear(){this.round.clear(),this.star.clear(),this.heart.clear()}},Ef=class{constructor(e,t=3){this.lights=[];for(let n=0;n<t;n++){let t=new ss(16777215,0,3.2,2);t.userData={age:0,life:0,peak:0,target:null},e.add(t),this.lights.push(t)}this.next=0}flash(e,t,n=2,r=.8,i=3){n*=this.scale??.32;let a=this.lights[this.next];return this.next=(this.next+1)%this.lights.length,a.position.copy(e),a.color.set(t),a.distance=i,a.userData.age=0,a.userData.life=r,a.userData.peak=n,a.intensity=n,a}update(e){for(let t of this.lights){let n=t.userData;if(n.life<=0){t.intensity=0;continue}n.age+=e;let r=Y(n.age/n.life);t.intensity=n.peak*(1-r)**1.6,r>=1&&(n.life=0)}}},Df={deskTop:.625,boxPos:new B(0,.625,-1.98),girlDesk:new B(0,0,-1.3),girlStage:new B(0,0,-.95),mirrorPos:new B(0,0,-1.62),sunDir:new B(.26,-.8,.54).normalize()};function Of(e){let t=new di;t.fog=new ui(`#fbe6ee`,9,20),t.background=new H(`#fde7ef`);let n=new G;t.add(n);let r=[],i=new Qo(`#ffeef6`,`#f2cdbd`,.5);t.add(i);let a=new us(`#ffe9cc`,2);a.target.position.set(.1,.4,-1.2),a.position.copy(a.target.position).addScaledVector(Df.sunDir,-5.5),a.castShadow=!0,a.shadow.mapSize.set(1024,1024);let o=a.shadow.camera;o.left=-2,o.right=2,o.top=2.2,o.bottom=-1.6,o.near=1,o.far=9,a.shadow.bias=-5e-4,a.shadow.normalBias=.015,a.shadow.radius=5,t.add(a,a.target);let s=new us(`#ffe9f3`,.32);s.position.set(.8,2.2,3.5),s.target.position.set(0,.6,-1.2),t.add(s,s.target);let c=5.2,l=-2.4,u=2.65,d=Ld().clone();d.needsUpdate=!0,d.repeat.set(3,3);let f=new W(new Do(c,5.199999999999999),new No({map:d,roughness:.48,metalness:0,envMap:e.env,envMapIntensity:.55}));f.rotation.x=-Math.PI/2,f.position.set(0,0,.3999999999999999/2),f.receiveShadow=!0,n.add(f);let p=Id().clone();p.needsUpdate=!0,p.repeat.set(4,2.4);let m=new No({map:p,roughness:.9,envMap:e.env,envMapIntensity:.25}),h=e.matte(`#fffafc`,{roughness:.6}),g=e.matte(`#ffffff`,{roughness:.45,envI:.5}),_={x0:-.82,x1:.82,y0:.98,y1:2.12},v=(e,t,r,i,a,o=0,s=m)=>{let c=new Do(t-e,i-r),l=c.attributes.uv;for(let n=0;n<l.count;n++)l.setXY(n,(e+(t-e)*l.getX(n)+3)/1.3,(r+(i-r)*l.getY(n))/1.1);let u=new W(c,s);return u.position.set((e+t)/2,(r+i)/2,a),u.rotation.y=o,u.receiveShadow=!0,n.add(u),u};p.repeat.set(1,1),v(-5.2/2,_.x0,0,u,l),v(_.x1,c/2,0,u,l),v(_.x0,_.x1,0,_.y0,l),v(_.x0,_.x1,_.y1,u,l);let y=(e,t)=>{let r=new Do(5.199999999999999,u),i=r.attributes.uv;for(let e=0;e<i.count;e++)i.setXY(e,i.getX(e)*5.199999999999999/1.3,i.getY(e)*u/1.1);let a=new W(r,m);a.position.set(e,u/2,.3999999999999999/2),a.rotation.y=t,a.receiveShadow=!0,n.add(a)};y(-5.2/2,Math.PI/2),y(c/2,-Math.PI/2);{let e=new Do(c,u),t=e.attributes.uv;for(let e=0;e<t.count;e++)t.setXY(e,t.getX(e)*c/1.3,t.getY(e)*u/1.1);let r=new W(e,m);r.position.set(0,u/2,2.8),r.rotation.y=Math.PI,n.add(r)}let b=new W(new Do(c,5.199999999999999),e.matte(`#fff6fa`));b.rotation.x=Math.PI/2,b.position.set(0,u,.3999999999999999/2),n.add(b);let x=(e,t,r,i,a,o,s=0,c=h)=>{let l=new W(new ld(e,t,r,2,Math.min(.01,r/2.2)),c);return l.position.set(i,a,o),l.rotation.y=s,l.receiveShadow=!0,n.add(l),l};x(c,.86,.02,0,.43,-2.39),x(5.199999999999999,.86,.02,-5.2/2+.01,.43,.3999999999999999/2,Math.PI/2),x(5.199999999999999,.86,.02,c/2-.01,.43,.3999999999999999/2,Math.PI/2),x(c,.86,.02,0,.43,2.79),x(c,.035,.04,0,.88,-2.38,0,g),x(5.199999999999999,.035,.04,-2.58,.88,.3999999999999999/2,Math.PI/2,g),x(5.199999999999999,.035,.04,c/2-.02,.88,.3999999999999999/2,Math.PI/2,g),x(c,.035,.04,0,.88,2.78,0,g);let S=e.matte(`#fbe7ef`,{roughness:.6});for(let e=-2.4;e<=2.4;e+=.4)x(.012,.7,.01,e,.45,-2.375,0,S);let C=new hr({map:zd(`room`),toneMapped:!0});C.color.setScalar(1.18);let w=new W(new Do(4.4,3.4),C);w.position.set(-.4,1.55,-3.5),n.add(w);let T=e.matte(`#ffffff`,{roughness:.35,envI:.6}),E=.06;x(_.x1-_.x0+E*2,E,.12,0,_.y1+E/2,l,0,T),x(_.x1-_.x0+E*2,E,.12,0,_.y0-E/2,l,0,T),x(E,_.y1-_.y0,.12,_.x0-E/2,(_.y0+_.y1)/2,l,0,T),x(E,_.y1-_.y0,.12,_.x1+E/2,(_.y0+_.y1)/2,l,0,T),x(.035,_.y1-_.y0,.05,0,(_.y0+_.y1)/2,-2.42,0,T),x(_.x1-_.x0,.035,.05,0,(_.y0+_.y1)/2+.12,-2.42,0,T),x(_.x1-_.x0+.24,.04,.2,0,_.y0-.07,-2.34,0,T);{let t=new W(new sa(.045,.035,.07,20),e.lacquer(`#ffc3d9`));t.position.set(.58,_.y0-.015,-2.34),n.add(t);let r=e.matte(`#8fdcae`,{roughness:.6});for(let e=0;e<5;e++){let t=new W(new K(.03,12,8),r);t.scale.set(.6,1.4,.6);let i=e/5*J;t.position.set(.58+Math.cos(i)*.025,_.y0+.06,-2.34+Math.sin(i)*.025),t.rotation.set(Math.sin(i)*.5,0,-Math.cos(i)*.5),n.add(t)}let i=new W(new K(.022,12,10),e.matte(`#ffe27a`));i.position.set(.58,_.y0+.11,-2.34),n.add(i)}let D=Bd(`#ffc4da`,`dots`).clone();D.needsUpdate=!0,D.repeat.set(2,3);let O=new No({map:D,roughness:.85,side:2,envMap:e.env,envMapIntensity:.3}),k=[];for(let t of[-1,1]){let r=new Do(.62,1.75,24,24),i=r.attributes.position.array.slice(),a=new W(r,O);a.position.set(t*(_.x1+.1),1.42,-2.28),a.castShadow=!0,a.receiveShadow=!0,n.add(a),k.push({m:a,base:i,sgn:t});let o=new W(new jo(.06,.018,8,20),e.satin(`#ff8fbf`));o.position.set(t*(_.x1+.12),1.12,-2.2399999999999998),o.scale.set(1.3,.5,1),n.add(o);let s=new W(hd(.09,.25),e.satin(`#ff8fbf`));s.position.set(t*(_.x1+.12),1.12,-2.1799999999999997),n.add(s)}let A=e=>{for(let t of k){let n=t.m.geometry.attributes.position,r=t.base;for(let i=0;i<n.count;i++){let a=r[i*3],o=r[i*3+1],s=(.875-o)/1.75,c=1-.55*Math.exp(-(((s-.68)/.18)**2)),l=a*c-t.sgn*(1-c)*.12,u=Math.sin(a/.62*Math.PI*7)*.025*(.6+.4*c),d=Math.sin(e*.9+s*2.5)*.012*s;n.setXYZ(i,l,o,u+d)}n.needsUpdate=!0,t.m.geometry.computeVertexNormals()}};A(0),r.push({update:(e,t)=>A(t),every:2});let j=e.gold(),ee=new W(new sa(.014,.014,2.2,12),j);ee.rotation.z=Math.PI/2,ee.position.set(0,2.32,-2.27),n.add(ee);for(let e of[-1,1]){let t=new W(hd(.07,.3),j);t.position.set(e*1.12,2.32,-2.27),n.add(t)}let M=new W(xd({rTop:1.2,rBottom:1.22,height:.2,waves:30,amp:.035,arc:1.5,start:-.75,rows:4,segs:120}),new No({color:`#ffffff`,roughness:.8,side:2,envMap:e.env,envMapIntensity:.3}));M.scale.set(.95,1,.12),M.position.set(0,2.34,-2.35),n.add(M);let te=new hr({map:Fd(),color:new H(`#fff2dc`).multiplyScalar(.32),transparent:!0,blending:2,depthWrite:!1,side:2,toneMapped:!0}),N=[];for(let[e,t,r,i]of[[-.45,2,.34,1.9],[.08,1.95,.5,2.1],[.5,1.9,.3,1.7],[-.12,1.45,.26,1.2]]){let a=new Do(r,i);a.translate(0,-i/2,0);let o=new W(a,te);o.position.set(e,t,-2.4499999999999997),o.renderOrder=3,n.add(o),N.push({m:o,phase:X(0,6)})}let P=(e,t)=>{let n=Df.sunDir.clone();for(let r of N){let i=e.position.clone().sub(r.m.position),a=n.clone().negate(),o=i.sub(a.clone().multiplyScalar(i.dot(a))).normalize(),s=new B().crossVectors(a,o),c=new V().makeBasis(s,a,o);r.m.quaternion.setFromRotationMatrix(c),r.m.scale.x=1+Math.sin(t*.4+r.phase)*.12}te.color.setRGB(1,.95,.86).multiplyScalar(.12+Math.sin(t*.5)*.02)},ne=e.lacquer(`#fffafc`,{roughness:.25}),re=e.lacquer(`#ffd0e1`,{roughness:.3}),ie=Df.deskTop,ae=-1.98,oe=new W(new ld(1.2,.05,.58,3,.02),ne);oe.position.set(0,ie-.025,ae),oe.castShadow=!0,oe.receiveShadow=!0,n.add(oe);for(let[e,t]of[[-.55,-.24],[.55,-.24],[-.55,.24],[.55,.24]]){let r=new W(new ld(.06,ie-.05,.06,2,.02),re);r.position.set(e,(ie-.05)/2,ae+t),r.castShadow=!0,n.add(r)}let se=new W(new ld(.9,.12,.5,2,.02),ne);se.position.set(0,ie-.11,-1.99),se.castShadow=!0,n.add(se);let ce=new W(hd(.05,.4),re);ce.position.set(0,ie-.11,-1.7349999999999999),n.add(ce);let F=new W(xd({rTop:.6,rBottom:.6,height:.035,waves:40,amp:.006,arc:1.1,start:-.55,rows:2,segs:60}),re);F.scale.set(1,1,.06),F.position.set(0,ie-.05,-1.73),n.add(F);{let t=new W(new sa(.04,.035,.09,24,1,!0),e.lacquer(`#a8dcff`));t.position.set(.44,ie+.045,-2.06),t.castShadow=!0,n.add(t);let r=new W(new oa(.035,20),e.lacquer(`#a8dcff`));r.rotation.x=-Math.PI/2,r.position.set(.44,ie+.002,-2.06),n.add(r);let i=[`#ff8fbf`,`#ffd36e`,`#8fd3ff`,`#c6a8ff`,`#92e8c6`];i.forEach((t,r)=>{let a=r/i.length*J,o=new W(new sa(.006,.006,.13,8),e.matte(t,{roughness:.5}));o.position.set(.44+Math.cos(a)*.017,ie+.09,-2.06+Math.sin(a)*.017),o.rotation.set(Math.sin(a)*.15,0,Math.cos(a)*.15),n.add(o);let s=new W(new ca(.006,.015,8),e.matte(t));s.position.copy(o.position).add(new B(Math.cos(a)*.01,.072,Math.sin(a)*.01)),s.rotation.copy(o.rotation),n.add(s)})}let le=kf(e);le.position.set(-.43,ie,-2.08),le.rotation.y=.5,le.scale.setScalar(.7),n.add(le);{let t=new W(new ld(.13,.16,.015,2,.006),e.gold());t.position.set(-.25,ie+.08,-2.2),t.rotation.x=-.15,n.add(t);let r=new W(new Do(.1,.13),e.matte(`#ffffff`,{map:Xd(1)}));r.position.set(0,0,.0085),t.add(r)}let ue=new W(new oa(1.15,64),new No({map:Rd(),transparent:!0,roughness:.95,envMap:e.env,envMapIntensity:.2}));ue.rotation.x=-Math.PI/2,ue.position.set(0,.004,-.55),ue.receiveShadow=!0,n.add(ue);{let t=new G;t.position.set(-1.95,0,-.9),n.add(t);let r=new W(new ld(1,.3,1.7,3,.04),ne);r.position.y=.2,r.castShadow=!0,r.receiveShadow=!0,t.add(r);let i=Bd(`#ffb9d2`,`dots`).clone();i.needsUpdate=!0,i.repeat.set(3,4);let a=new W(Dd(1.02,.1,1.3,.35),new No({map:i,roughness:.9,envMap:e.env,envMapIntensity:.25}));a.position.set(0,.4,.2),a.castShadow=!0,a.receiveShadow=!0,t.add(a);let o=new W(Dd(.6,.09,.32,.6),e.satin(`#ffffff`));o.position.set(0,.42,-.62),t.add(o);let s=new W(hd(.9,.12),re);s.position.set(0,.75,-.86),s.castShadow=!0,t.add(s);let c=Af(e);c.position.set(.1,.45,-.3),c.rotation.y=.7,c.scale.setScalar(.95),t.add(c)}{let t=new G;t.position.set(2.32,0,-1.2),t.rotation.y=-Math.PI/2,n.add(t);let r=new W(new ld(.04,1.4,.32,2,.015),ne);r.position.set(-.45,.7,0);let i=r.clone();i.position.x=.45,t.add(r,i);for(let e of[.05,.5,.95,1.38]){let n=new W(new ld(.94,.035,.32,2,.012),ne);n.position.set(0,e,0),n.castShadow=!0,t.add(n)}let a=new W(new Ur(.5,.3,.22),e.matte(`#ffffff`,{map:Qd()}));a.position.set(-.15,.68,.02),t.add(a);let o=Af(e);o.position.set(.25,.53,0),o.scale.setScalar(.8),t.add(o),[`#ffb3cf`,`#a8dcff`,`#ffe28a`,`#cdb6ff`,`#a8eed2`].forEach((n,r)=>{let i=new W(new ld(.1,.1,.1,2,.015),e.lacquer(n));i.position.set(-.3+r*.13,.12+(r===2?.1:0),.02),i.rotation.y=r*.3,t.add(i)});let s=new W(new K(.12,24,16),e.lacquer(`#ffd0e1`));s.position.set(.2,1.08,0),t.add(s)}{let t=new G;t.position.set(-1.55,1.78,-2.37);let i=new W(new jo(.18,.025,12,40),re),a=new W(new oa(.18,40),e.matte(`#ffffff`,{map:Yd(),roughness:.5}));a.position.z=.005;let o=[-1,1].map(e=>{let t=new W(new K(.05,16,12),re);return t.position.set(e*.15,.17,-.01),t});t.add(i,a,...o),n.add(t);let s=(t,r,i,a=.36,o=.3)=>{let s=new W(new ld(a,o,.03,2,.01),e.lacquer(`#ffffff`));s.position.set(t,r,-2.37);let c=new W(new Do(a-.06,o-.06),e.matte(`#ffffff`,{map:Xd(i)}));c.position.z=.016,s.add(c),n.add(s)};s(1.45,1.62,0),s(1.75,1.2,1,.26,.26);let c=[`#ff9ec6`,`#ffe27a`,`#8ed4ff`,`#c4a6ff`,`#92e8c6`,`#ffffff`],l=[];for(let t=0;t<13;t++){let r=t/12,i=-1.5+3*r,a=2.48-Math.sin(r*Math.PI)*.16,o=new W(new ko(new Ra([new z(-.075,0),new z(.075,0),new z(0,-.15)])),e.matte(c[t%c.length],{side:2,roughness:.8}));o.position.set(i,a,-2.34),n.add(o),l.push({f:o,ph:t*.7})}r.push({update:(e,t)=>{for(let e of l)e.f.rotation.x=Math.sin(t*1.2+e.ph)*.08}});let u=new W(bd(new _a(Array.from({length:12},(e,t)=>new B(-1.55+3.1*t/11,2.48-Math.sin(t/11*Math.PI)*.16,-2.34))),()=>.004,{tubular:40,radial:4}),e.matte(`#ffffff`));n.add(u)}{let t=new W(new ld(.9,2,.05,2,.02),ne);t.position.set(1.2,1,2.77),n.add(t);let r=new W(hd(.32,.06),e.matte(`#ffd6e6`,{roughness:.3}));r.position.set(1.2,1.45,2.73),r.rotation.y=Math.PI,n.add(r);let i=new W(new ld(1.1,.75,.45,3,.03),re);i.position.set(-1.1,.375,2.55),n.add(i);let a=new W(new K(.16,24,16),new No({color:`#fff7e6`,emissive:`#ffe9c8`,emissiveIntensity:.9}));a.position.set(-1.35,.95,2.55),n.add(a);let o=Af(e);o.position.set(-.85,.75,2.5),o.rotation.y=Math.PI,n.add(o)}return{scene:t,root:n,sun:a,hemi:i,fill:s,moteBox:{x0:-.9,x1:.9,y0:.2,y1:2,z0:-2.3,z1:-.4},update(e,t,n){for(let n of r)n.frame=(n.frame||0)+1,!(n.every&&n.frame%n.every)&&n.update(e,t);P(n,t)}}}function kf(e){let t=new G,n=e.matte(`#fffaf6`,{roughness:.95}),r=e.matte(`#ffc6da`,{roughness:.9}),i=new W(new K(.08,20,16),n);i.scale.set(1,.95,.9),i.position.y=.075;let a=new W(new K(.07,20,16),n);a.position.y=.19;let o=[-1,1].map(e=>{let t=new W(new aa(.022,.09,6,12),n);t.position.set(e*.03,.29,0),t.rotation.z=-e*.2;let i=new W(new aa(.012,.07,4,8),r);return i.position.z=.014,t.add(i),t}),s=e.matte(`#3a2422`,{roughness:.3}),c=[-1,1].map(e=>{let t=new W(new K(.009,10,8),s);return t.position.set(e*.025,.2,.063),t}),l=[-1,1].map(e=>{let t=new W(new K(.012,10,8),r);return t.scale.set(1,.6,.4),t.position.set(e*.042,.183,.058),t});return t.add(i,a,...o,...c,...l),t.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t}function Af(e){let t=new G,n=e.matte(`#e8b98f`,{roughness:.95}),r=e.matte(`#f8dcc0`,{roughness:.95}),i=e.matte(`#3a2422`,{roughness:.3}),a=new W(new K(.1,20,16),n);a.scale.set(1,1.05,.9),a.position.y=.1;let o=new W(new K(.06,16,12),r);o.position.set(0,.09,.06),o.scale.z=.5;let s=new W(new K(.085,20,16),n);s.position.y=.24;let c=new W(new K(.035,16,12),r);c.position.set(0,.225,.07),c.scale.set(1.1,.8,.8);let l=new W(new K(.012,10,8),i);l.position.set(0,.235,.098);let u=[-1,1].map(e=>{let t=new W(new K(.032,12,10),n);return t.position.set(e*.065,.31,0),t}),d=[-1,1].map(e=>{let t=new W(new K(.01,10,8),i);return t.position.set(e*.032,.26,.074),t}),f=new W(hd(.06,.3),e.satin(`#ff8fbf`));f.position.set(0,.17,.075);let p=[-1,1].map(e=>{let t=new W(new K(.035,12,10),n);return t.scale.set(.8,1.3,.8),t.position.set(e*.09,.12,.03),t}),m=[-1,1].map(e=>{let t=new W(new K(.04,12,10),n);return t.position.set(e*.055,.03,.06),t});return t.add(a,o,s,c,l,...u,...d,f,...p,...m),t.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t}var jf=class{constructor(e){this.group=new G;let t=this.group,n=e.lacquer(`#ffd6e4`,{roughness:.16}),r=e.gold(),i=e.satin(`#ffffff`,{sheen:`#ffe6f0`}),a=.3,o=.1,s=.21,c=.018,l=.012;this.dims={BW:a,BH:o,BD:s};let u=.01;for(let[e,n]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let i=new W(new K(.012,12,10),r);i.position.set(e*(a/2-.02),.009,n*(s/2-.02)),t.add(i)}let d=new W(new ld(a,o,s,3,.012),n);d.position.y=.060000000000000005,d.castShadow=!0,d.receiveShadow=!0,t.add(d),this.base=d;let f=new ld(a,c,l,2,.004),p=new ld(l,c,s,2,.004);for(let e of[-1,1]){let r=new W(f,n);r.position.set(0,.119,e*(s/2-l/2)),t.add(r);let i=new W(p,n);i.position.set(e*(a/2-l/2),.119,0),t.add(i)}let m=new W(new sa(.003,.003,.304,8),r);for(let e of[-1,1]){let n=m.clone();n.rotation.z=Math.PI/2,n.position.set(0,.128,s/2*e),t.add(n)}let h=Ud().clone();h.needsUpdate=!0,h.repeat.set(3,2);let g=df(new No({color:`#ffffff`,map:h,roughness:.35,envMap:e.env,envMapIntensity:.6}),`#ffe9f2`,.3),_=new W(Dd(a-2*l-.004,.014,s-2*l-.004,.5),g);_.position.y=.114,_.receiveShadow=!0,t.add(_),this.cushionTop=.124;let v=_d(.5,.22,.14),y=e.gold();y.flatShading=!0;let b=[],x=(e,t,n)=>b.push({pos:e,normal:t,size:n});for(let e=0;e<14;e++)x(new B(X(-.13,a/2-.02),u+X(.015,.085),.106),new B(0,0,1),X(.008,.016));for(let e=0;e<8;e++)for(let e of[-1,1])x(new B(e*.151,u+X(.015,.085),X(-.21/2+.02,s/2-.02)),new B(e,0,0),X(.008,.015));let S=b.filter(e=>!(e.normal.z>.5&&Math.abs(e.pos.x)<.05&&e.pos.y>.035)),C=new Bi(v,y,S.length),w=new V,T=new _t;S.forEach((e,t)=>{T.setFromUnitVectors(new B(0,0,1),e.normal),T.multiply(new _t().setFromAxisAngle(new B(0,0,1),X(0,J))),w.compose(e.pos,T,new B(e.size,e.size,e.size*.6)),C.setMatrixAt(t,w)}),t.add(C);let E=new G;E.position.set(0,.128,-.21/2),t.add(E),this.lidPivot=E;let D=.05,O=new W(new ld(.312,D,.222,3,.016),n);O.position.set(0,D/2,.107),O.castShadow=!0,O.receiveShadow=!0,E.add(O),this.lid=O;let k=new W(new Do(.27999999999999997,.19),i);k.rotation.x=Math.PI/2,k.position.set(0,-5e-4,s/2),E.add(k);let A=new W(bd(Ed(.11,0),()=>.0032,{tubular:120,radial:6,closeEnds:!1}),r);A.rotation.x=-Math.PI/2,A.position.set(0,.052000000000000005,.11499999999999999),E.add(A);let j=new W(hd(.07,.12),e.lacquer(`#ffc0d8`,{roughness:.15}));j.rotation.x=-Math.PI/2,j.position.set(0,.051500000000000004,.11499999999999999),E.add(j);for(let[e,t,n,i]of[[.29,.004,0,.012],[.29,.004,0,.20199999999999999],[.004,.19,-.142,.107],[.004,.19,a/2-.008,.107]]){let a=new W(new ld(e,.003,t,1,.0012),r);a.position.set(n,.0505,i),E.add(a)}let ee=[];for(let e=0;e<26;e++){let e,t;do e=X(-.13,a/2-.02),t=X(.02,.19999999999999998);while(Math.hypot(e/.07,(t-s/2-.01)/.065)<1.05);ee.push({pos:new B(e,.051000000000000004,t),normal:new B(0,1,0),size:X(.007,.016)})}for(let e=0;e<6;e++){let e=X(-.13,a/2-.02);Math.abs(e)<.05||ee.push({pos:new B(e,D*.5,.219),normal:new B(0,0,1),size:X(.008,.012)})}let M=new Bi(v,y,ee.length);ee.forEach((e,t)=>{T.setFromUnitVectors(new B(0,0,1),e.normal),T.multiply(new _t().setFromAxisAngle(new B(0,0,1),X(0,J))),w.compose(e.pos,T,new B(e.size,e.size,e.size*.6)),M.setMatrixAt(t,w)}),E.add(M);let te=new G;te.position.set(0,.092,.11299999999999999),t.add(te),this.clasp=te;let N=new W(bd(Ed(.058,0),()=>.0035,{tubular:90,radial:8,closeEnds:!1}),r);te.add(N);let P=new W(hd(.06,.08),r);P.position.z=-.003,te.add(P);let ne=new G;te.add(ne),this.jewelHolder=ne;let re=new W(yd(.05,.42),e.gem(af,{opacity:.78,emissive:.35}));re.position.z=.004,ne.add(re),this.jewel=re;let ie=new W(hd(.022,.3),new hr({color:new H(`#ffb3d4`).multiplyScalar(2.2)}));ie.position.z=0,ne.add(ie),this.core=ie;let ae=new ki(new hi({map:Pd(),color:new H(`#ff9cc6`).multiplyScalar(.9),blending:2,depthWrite:!1,transparent:!0}));ae.scale.setScalar(.11),ae.position.z=.01,te.add(ae),this.halo=ae,this.jewelLight=new ss(`#ff9cc6`,.06,.6,2),this.jewelLight.position.set(0,0,.05),te.add(this.jewelLight);let oe=new G;oe.position.set(0,.002,.219),E.add(oe);let se=new W(new ld(.024,.016,.006,2,.002),r);se.position.set(0,-.006,.002),oe.add(se);let ce=new W(hd(.014,.3),e.lacquer(`#ffffff`));ce.position.set(0,-.007,.006),oe.add(ce),this.latchPivot=oe;let F=new W(new Do(.27,.18),new hr({color:new H(`#ffd0e4`).multiplyScalar(1.1),transparent:!0,opacity:0,depthWrite:!1,blending:2}));F.rotation.x=-Math.PI/2,F.position.y=.129,t.add(F),this.leak=F,this.innerLight=new ss(`#ffc4de`,0,.6,2),this.innerLight.position.set(0,.16999999999999998,0),t.add(this.innerLight),this.press=new ed(0,260,20),this.lidAngle=new ed(0,70,9),this.latchAngle=new ed(0,160,12),this.wiggle=new ed(0,220,9),this.hop=new ed(0,200,10),this.glow=.35,this.leakAmt=0,this.unlocked=!1,this.open=!1}jewelWorld(e=new B){return this.jewel.getWorldPosition(e)}lidWorld(e=new B){return this.lid.getWorldPosition(e)}update(e,t){this.press.update(e),this.jewelHolder.position.z=-this.press.x*.006,this.lidPivot.rotation.x=-this.lidAngle.update(e),this.latchPivot.rotation.x=-this.latchAngle.update(e),this.group.rotation.z=this.wiggle.update(e)*.04,this.group.position.y=this.baseY+Math.max(0,this.hop.update(e))*.012;let n=Math.max(0,Math.sin(t*2.2))**8+Math.max(0,Math.sin(t*2.2-.6))**10*.6,r=this.glow*(.8+.6*n);this.core.material.color.set(`#ffb3d4`).multiplyScalar(1.2+r*2.2),this.halo.material.opacity=Math.min(1,.25+r*.8),this.halo.scale.setScalar(.09+r*.05),this.jewelLight.intensity=.004+r*.01,this.leak.material.opacity=Math.min(.85,this.leakAmt*(.5+.15*Math.sin(t*3))),this.innerLight.parent===this.group&&(this.innerLight.intensity=this.leakAmt*.035)}},Mf=`
  uniform mat4 uTexMatrix;
  varying vec2 vUv;
  varying vec4 vProj;
  void main(){
    vUv = uv;
    vProj = uTexMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Nf=`
  uniform sampler2D tView;
  uniform sampler2D tPortal;
  uniform float uMix;
  uniform float uPortalMode;
  uniform vec2 uRes;
  uniform float uTime;
  uniform float uRipple;
  uniform float uGlow;
  uniform vec3 uGlowColor;
  uniform float uFlip;
  uniform float uBright;
  uniform float uHasView;
  varying vec2 vUv;
  varying vec4 vProj;
  void main(){
    vec2 uv = vUv;
    vec2 c = uv - vec2(0.5, 0.55);
    float r = length(c);
    float rip = sin(r * 46.0 - uTime * 5.5) * uRipple * (1.0 - smoothstep(0.1, 0.75, r) * 0.5);
    vec2 off = (c / max(r, 1e-3)) * rip * 0.025;
    vec2 vuv = vec2(mix(uv.x, 1.0 - uv.x, uFlip), uv.y) + off;
    vec3 a = uHasView > 0.5 ? texture2D(tView, vuv).rgb : vec3(1.0, 0.86, 0.92);
    vec2 puv = uv + off;
    if (uPortalMode > 1.5) puv = vProj.xy / vProj.w + off * 0.4;
    else if (uPortalMode > 0.5) puv = gl_FragCoord.xy / uRes + off * 0.6;
    vec3 b = texture2D(tPortal, puv).rgb;
    vec3 col = mix(a, b, uMix);
    // magic glow growing from the centre
    float g = uGlow * (1.0 - smoothstep(0.0, 0.62, r * (1.2 - uGlow * 0.4)));
    col = mix(col, uGlowColor, clamp(g, 0.0, 1.0));
    col += uGlowColor * uGlow * 0.35;
    // glass sheen streak
    float streak = smoothstep(0.06, 0.0, abs(uv.x + uv.y * 0.6 - 0.62)) * 0.12 + smoothstep(0.03, 0.0, abs(uv.x + uv.y * 0.6 - 0.78)) * 0.08;
    col += streak;
    col *= uBright;
    gl_FragColor = vec4(col, 1.0);
  }
`;function Pf(){let e=new ji(new Uint8Array([255,220,235,255]),1,1);return e.needsUpdate=!0,new Zr({vertexShader:Mf,fragmentShader:Nf,uniforms:{tView:{value:e},tPortal:{value:e},uMix:{value:0},uPortalMode:{value:0},uTexMatrix:{value:new V},uRes:{value:new z(1,1)},uTime:{value:0},uRipple:{value:0},uGlow:{value:0},uGlowColor:{value:new H(`#ffd0e4`).multiplyScalar(1.4)},uFlip:{value:1},uBright:{value:1},uHasView:{value:0}}})}function Ff(e){let t=new ko(new Ra(fd(96,e)),24);t.computeBoundingBox();let n=t.boundingBox,r=t.attributes.position,i=t.attributes.uv;for(let e=0;e<r.count;e++)i.setXY(e,(r.getX(e)-n.min.x)/(n.max.x-n.min.x),(r.getY(e)-n.min.y)/(n.max.y-n.min.y));return t}function If(e,t,n){return new Co(new Ra(fd(80,e)),{depth:t,bevelEnabled:!0,bevelThickness:n,bevelSize:n,bevelOffset:-n,bevelSegments:3,curveSegments:4})}var Lf=class{constructor(e){let t=.11;this.W=t,this.group=new G,this.inner=new G,this.group.add(this.inner);let n=e.gold(),r=e.gold({color:`#e8d2b0`}),i=e.lacquer(`#ffd9e7`,{roughness:.12}),a=e.lacquer(`#fff7fb`,{roughness:.1}),o=new G;this.inner.add(o);let s=new W(If(t,.008,.003),n);s.position.z=-.011,o.add(s);let c=new W(hd(t*.84,.03),a);c.position.set(0,0,5e-4),c.scale.z=.5,o.add(c);let l=new W(bd(Ed(t*.88,0),()=>.0016,{tubular:140,radial:6,closeEnds:!1}),r);l.position.z=.001,o.add(l),this.centerHolder=new G,this.centerHolder.position.set(0,-.002,.003),o.add(this.centerHolder);let u=new W(bd(Ed(t*.46,0),()=>.0022,{tubular:100,radial:6,closeEnds:!1}),n);this.centerHolder.add(u),this.centerGem=new W(yd(t*.42,.45),e.gem(af,{opacity:.8,emissive:.35})),this.centerGem.position.z=.002,this.centerHolder.add(this.centerGem),this.centerCore=new W(hd(t*.17,.3),new hr({color:new H(`#ffb8d6`).multiplyScalar(2)})),this.centerHolder.add(this.centerCore);let d=new K(.0022,10,8),f=fd(18,t*.7);for(let e of f){let t=new W(d,a);t.position.set(e.x,e.y,.0015),o.add(t)}this.tabPivot=new G,this.tabPivot.position.set(t*.5,t*.2,0),o.add(this.tabPivot);let p=new W(new Ur(.008,.014,.014),n);p.position.set(.002,0,.004),this.tabPivot.add(p),this.hinge=new G,this.hinge.position.set(-.055,t*.2,0),this.inner.add(this.hinge);let m=new G;m.position.set(t*.5,-.11*.2,0),this.hinge.add(m),this.lid=m;let h=new W(If(t,.006,.0028),n);h.position.z=3e-4,m.add(h);let g=new W(new sa(.003,.003,.03,10),r);g.position.set(-.055,t*.2,.003),m.add(g);let _=new G;_.position.z=.0095,m.add(_);let v=new W(hd(t*.84,.04),i);v.scale.z=.5,_.add(v);let y=new W(bd(Ed(t*.9,0),()=>.0016,{tubular:140,radial:6,closeEnds:!1}),r);_.add(y),this.outerHolder=new G,this.outerHolder.position.set(0,-.001,.002),_.add(this.outerHolder);let b=new W(bd(Ed(t*.42,0),()=>.002,{tubular:100,radial:6,closeEnds:!1}),n);this.outerHolder.add(b),this.outerGem=new W(yd(t*.38,.45),e.gem(af,{opacity:.8,emissive:.35})),this.outerGem.position.z=.002,this.outerHolder.add(this.outerGem),this.outerCore=new W(hd(t*.15,.3),new hr({color:new H(`#ffb8d6`).multiplyScalar(2)})),this.outerHolder.add(this.outerCore),this.outerSmall=[];let x=this._ringPositions(t*.66);rf.forEach((n,r)=>{let i=new W(yd(t*.12,.45),e.gem(n.color,{opacity:.9,emissive:.25}));i.position.set(x[r].x,x[r].y,.002),_.add(i),this.outerSmall.push(i)});let S=new G;S.position.z=-.0034,S.rotation.y=Math.PI,m.add(S),this.innerFace=S;let C=new W(hd(t*.9,.025),n);C.scale.z=.4,S.add(C),this.mirrorMat=Pf();let w=new W(Ff(t*.54),this.mirrorMat);w.position.set(0,0,.0018),S.add(w),this.mirror=w;let T=new W(bd(Ed(t*.56,0),()=>.0022,{tubular:140,radial:6,closeEnds:!1}),r);T.position.z=.0018,S.add(T),this.gems=[];let E=this._ringPositions(t*.86),D=t*.19;rf.forEach((n,i)=>{let a=new G;a.position.set(E[i].x,E[i].y,.002),S.add(a);let o=new W(bd(Ed(D*1.1,0),()=>.0014,{tubular:60,radial:5,closeEnds:!1}),r);a.add(o);let s=new W(yd(D,.5),e.gem(n.color,{emissive:.4}));s.position.z=.0015,a.add(s);let c=new ki(new hi({map:Pd(),color:new H(n.color).multiplyScalar(2),transparent:!0,opacity:0,blending:2,depthWrite:!1}));c.scale.setScalar(t*.35),c.position.z=.006,a.add(c),this.gems.push({key:n.key,def:n,holder:a,mesh:s,glint:c,press:new ed(0,300,16),flash:0,hop:new ed(0,220,9)})}),this.aura=new ki(new hi({map:Pd(),color:new H(`#ffc2dc`).multiplyScalar(1.2),transparent:!0,opacity:0,blending:2,depthWrite:!1})),this.aura.scale.setScalar(t*3.2),this.aura.position.z=-.02,this.inner.add(this.aura),this.openAngle=new ed(0,60,11),this.tabAngle=new ed(0,200,14),this.press=new ed(0,300,18),this.centerPress=new ed(0,300,16),this.wobble=new ed(0,160,7),this.glow=.4,this.centerGlow=.4,this.opened=!1,this.openT=0,this.mirror.renderOrder=1}_ringPositions(e){let t=fd(360,e),n=e=>t[Math.round(e/360*359)%360],r=[n(46),n(92),n(136)],i=[n(314),n(268),n(224)];return[i[0],r[0],r[1],r[2],i[2],i[1]]}get openFrac(){return Y(this.openAngle.x/2.95)}visibleWidth(){return this.W*(1+this.openFrac*1.05)}update(e,t){let n=this.openAngle.update(e);this.hinge.rotation.y=-n,this.inner.position.x=this.W*.52*this.openFrac,this.tabPivot.rotation.y=this.tabAngle.update(e),this.outerHolder.position.z=.002-this.press.update(e)*.0025,this.centerHolder.position.z=.003-this.centerPress.update(e)*.0025;let r=this.wobble.update(e);this.inner.rotation.z=r*.06;let i=Math.max(0,Math.sin(t*2.4))**8;this.outerCore.material.color.set(`#ffb8d6`).multiplyScalar(1.2+this.glow*(1.5+i*2)),this.centerCore.material.color.set(`#ffb8d6`).multiplyScalar(1+this.centerGlow*(1.2+i*1.8));for(let t of this.gems){t.press.update(e);let n=t.hop.update(e);t.holder.position.z=.002-t.press.x*.002+Math.max(0,n)*.004,t.holder.scale.setScalar(1+Math.max(0,n)*.25),t.flash=Math.max(0,t.flash-e*1.6),t.glint.material.opacity=Math.min(1,t.flash),t.glint.scale.setScalar(this.W*(.25+t.flash*.4)),pf.setGemGlow(t.mesh.material,t.flash*1.2)}this.mirrorMat.uniforms.uTime.value=t}gemWorld(e,t=new B){return this.gems[e].mesh.getWorldPosition(t)}centerWorld(e=new B){return this.centerGem.getWorldPosition(e)}outerWorld(e=new B){return this.outerGem.getWorldPosition(e)}mirrorWorld(e=new B){return this.mirror.getWorldPosition(e)}},Rf=class{constructor({segs:e=64,rows:t=12,material:n,startAngle:r=0}={}){this.segs=e,this.rows=t;let i=(e+1)*(t+1);this.pos=new Float32Array(i*3);let a=new Float32Array(i*2),o=new Float32Array(i),s=[];for(let n=0;n<=t;n++)for(let r=0;r<=e;r++){let i=n*(e+1)+r;a[i*2]=r/e,a[i*2+1]=1-n/t,o[i]=r/e}for(let n=0;n<t;n++)for(let t=0;t<e;t++){let r=n*(e+1)+t,i=(n+1)*(e+1)+t;s.push(r,i,r+1,i,i+1,r+1)}let c=new kr;c.setAttribute(`position`,new yr(this.pos,3).setUsage(Ve)),c.setAttribute(`uv`,new yr(a,2)),c.setAttribute(`aReveal`,new yr(o,1)),c.setIndex(s),this.geo=c,this.mesh=new W(c,n),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.startAngle=r,this.p={length:.2,waistR:.1,a0:.5,a1:.8,waves:12,amp:.01,phase:0,waveV:.25},this.flare=0,this.droop=1,this.lagX=0,this.lagZ=0,this.ripple=0,this.time=0,this.lengthScale=1}setParams(e){Object.assign(this.p,e)}update(e,t){this.time=t;let{segs:n,rows:r}=this,i=this.p,a=this.pos,o=i.length*this.lengthScale/r,s=this.flare;for(let e=0;e<=n;e++){let c=this.startAngle+e/n*J,l=Math.sin(c),u=Math.cos(c),d=Math.sin(c*i.waves+i.phase),f=Math.cos(c*i.waves+i.phase),p=i.waistR,m=0;for(let h=0;h<=r;h++){let g=h/r,_=(h*(n+1)+e)*3,v=i.amp*d*g**1.1*(1+s*.6),y=this.ripple*Math.sin(c*3-t*6+g*3)*.012*g,b=g*g;a[_]=l*(p+v+y)+this.lagX*b,a[_+1]=m+f*i.amp*.35*g+s*.02*g*g,a[_+2]=u*(p+v+y)+this.lagZ*b;let x=Ju(i.a0,i.a1,g**.8),S=Ju(Math.PI*.5,x,this.droop);S+=s*(1.35-S)*(.35+.65*g),p+=Math.sin(S)*o,m-=Math.cos(S)*o}}this.geo.attributes.position.needsUpdate=!0,this.geo.computeVertexNormals();let c=this.geo.attributes.normal.array;for(let e=0;e<=r;e++){let t=e*(n+1)*3,r=(e*(n+1)+n)*3,i=c[t]+c[r],a=c[t+1]+c[r+1],o=c[t+2]+c[r+2],s=Math.hypot(i,a,o)||1;c[t]=c[r]=i/s,c[t+1]=c[r+1]=a/s,c[t+2]=c[r+2]=o/s}}hemPoint(e,t=new B){let{segs:n,rows:r}=this,i=Math.round(Y(e)*n),a=(r*(n+1)+i)*3;return t.set(this.pos[a],this.pos[a+1],this.pos[a+2]),this.mesh.localToWorld(t)}waistPoint(e,t=new B){let n=Math.round(Y(e)*this.segs)*3;return t.set(this.pos[n],this.pos[n+1],this.pos[n+2]),this.mesh.localToWorld(t)}},zf=[[{length:.19,waistR:.098,a0:.62,a1:.8,waves:12,amp:.008},{length:.17,waistR:.1,a0:.9,a1:1,waves:20,amp:.015},{length:.2,waistR:.103,a0:.66,a1:.78,waves:9,amp:.012}],[{length:.36,waistR:.098,a0:.42,a1:.42,waves:14,amp:.009},{length:.33,waistR:.1,a0:.52,a1:.5,waves:22,amp:.012},{length:.385,waistR:.103,a0:.44,a1:.44,waves:10,amp:.014}],[{length:.22,waistR:.098,a0:.52,a1:.66,waves:6,amp:.02},{length:.2,waistR:.1,a0:.74,a1:.86,waves:12,amp:.02},{length:.245,waistR:.103,a0:.56,a1:.66,waves:6,amp:.028,phase:Math.PI/6}]];function Bf(e,t){let n=e.attributes.position,r=new Float32Array(n.count),i=new B;for(let a=0;a<n.count;a++)i.fromBufferAttribute(n,a),r[a]=t(i,a,e);return e.setAttribute(`aReveal`,new yr(r,1)),e}var Vf=class{constructor(e,t){this.girl=e,this.mats=t,this.sched=new nd,this.fx=null,this.style=0,this.built={boots:!1,skirt:!1,top:!1,bow:!1},this.palette={boots:`pink`,skirt:`lavender`,top:`pink`,bow:`pink`},this.building=!1,this.pops=[],this._buildBoots(),this._buildSkirt(),this._buildTop(),this._buildHairBow()}get complete(){return this.built.boots&&this.built.skirt&&this.built.top&&this.built.bow}get bodyComplete(){return this.built.boots&&this.built.skirt&&this.built.top}_pop(e,t=1){let n=new ed(0,220,11);n.target=0,e.scale.setScalar(1e-4),e.visible=!1;let r={obj:e,s:n,scale:t};return this.pops.push(r),r}_show(e,t=0){return this.sched.wait(t).then(()=>{e.obj.visible=!0,e.s.x=0,e.s.v=0,e.s.target=1,e.s.kick(8)})}_buildBoots(){let e=this.girl,t=this.mats;this.bootMat=ff(df(new No({color:`#ffffff`,roughness:.16,envMap:t.env,envMapIntensity:.9}),`#ffffff`,.3),{glowColor:`#ffc8e0`,width:.1,rim:1}),this.bootHeartMat=t.lacquer(of.pink.heart,{roughness:.15}),this.bootFrillMat=t.satin(`#ffffff`,{side:2}),this.goldMat=t.gold(),this.goldMat.flatShading=!0,this.boots=[];for(let[t,n,r]of[[1,e.kneeL,e.footL],[-1,e.kneeR,e.footR]]){let e=new K(1,22,16);e.scale(.046,.034,.074),e.translate(0,-.026,.022),Bf(e,e=>Y(.4*(.096-e.z)/.15));let i=new W(e,this.bootMat);i.castShadow=!0,r.add(i);let a=Sd([[.0335,-.185],[.036,-.15],[.0385,-.1],[.0415,-.062],[.043,-.058],[0,-.058]],22);Bf(a,e=>Y(.4+.6*(e.y+.185)/.13));let o=new W(a,this.bootMat);o.castShadow=!0,n.add(o);let s=new W(hd(.05,.22),this.bootHeartMat);s.position.set(t*.04,-.118,0),s.rotation.y=t*Math.PI/2;let c=new G;c.add(s),n.add(c);let l=new W(xd({rTop:.041,rBottom:.054,height:.026,waves:10,amp:.006,rows:4,segs:60}),this.bootFrillMat);l.position.y=-.058,n.add(l);let u=new W(_d(.5,.22,.2),this.goldMat);u.scale.setScalar(.024);let d=new G;d.position.set(t*.037,-.168,.004),d.rotation.y=t*Math.PI/2,d.add(u),n.add(d),i.visible=o.visible=!1,this.boots.push({foot:i,shaft:o,s:t,heart:this._pop(c),frill:this._pop(l),star:this._pop(d),reveal:0})}}async buildBoots(e){this.palette.boots=e;let t=of[e];this.bootHeartMat.color.set(t.heart),this.bootMat.userData.reveal.uRevealGlow.value.set(t.main).multiplyScalar(3.5);let n=this.bootMat.userData.reveal.uReveal;for(let e of this.boots)e.foot.visible=e.shaft.visible=!0;n.value=0,this.fx&&this.fx.footRibbon(this.girl,t.ribbon,1.6),await this.sched.tween(1.25,e=>{if(n.value=e,this.fx&&Math.random()<.7)for(let n of this.boots)this.fx.sparkleAt(this._bootFront(n,e),t.main,1)},Z.inOutSine);for(let e of this.girl.shoes)e.visible=!1;for(let e of this.girl.socks)e.visible=!1;for(let e of this.boots)this._show(e.star,0),this._show(e.heart,.12),this._show(e.frill,.24);this.fx&&this.fx.chime(3),await this.sched.wait(.5),this.built.boots=!0}_bootFront(e,t){let n=new B;return t<.4?(n.set(0,-.02,.096-t/.4*.15),e.foot.localToWorld(n)):(n.set(e.s*.04,-.185+(t-.4)/.6*.13,.02),e.shaft.localToWorld(n))}_buildSkirt(){let e=this.mats,t=Vd().clone();t.needsUpdate=!0,t.repeat.set(10,3);let n=Hd().clone();n.needsUpdate=!0,n.repeat.set(4,2),this.skirtMats=[ff(df(new No({color:`#ffffff`,roughness:.34,envMap:e.env,envMapIntensity:.6,side:2}),`#fff0f7`,.3),{glowColor:`#ffffff`,width:.08,rim:1}),ff(df(new No({color:of.lavender.tulle,roughness:.6,alphaMap:t,transparent:!0,opacity:1,depthWrite:!1,envMap:e.env,envMapIntensity:.5,side:2}),`#ffffff`,.35),{glowColor:`#ffd6e8`,width:.08}),ff(df(new No({color:of.lavender.sheer,roughness:.25,transparent:!0,opacity:.46,depthWrite:!1,emissive:`#ffffff`,emissiveMap:n,emissiveIntensity:.55,envMap:e.env,envMapIntensity:.9,side:2}),`#e8f4ff`,.6),{glowColor:`#e8dcff`,width:.08})],this.layers=this.skirtMats.map((e,t)=>{let n=new Rf({segs:64,rows:12,material:e,startAngle:Math.PI*.5+t*.7});return n.setParams(zf[0][t]),n.mesh.position.y=.052+t*.002,n.mesh.visible=!1,n.mesh.renderOrder=t,n.droop=1,n.droopSpring=new ed(1,70,4.5),this.girl.hips.add(n.mesh),n}),this.layers[1].mesh.castShadow=!1,this.layers[2].mesh.castShadow=!1,this.sashMat=e.satin(of.pink.ribbon);let r=new W(new jo(.096,.011,10,40),this.sashMat);r.rotation.x=Math.PI/2,r.scale.set(1,.83,1.2),r.position.y=.05,this.girl.hips.add(r),this.sash=this._pop(r)}async buildSkirt(e){this.palette.skirt=e;let t=of[e];this.skirtMats[1].color.set(t.tulle),this.skirtMats[2].color.set(t.sheer),this.sashMat.color.set(t.ribbon);let n=[`#ffffff`,t.tulle,t.sheer];for(let e=0;e<3;e++){let r=this.layers[e],i=this.skirtMats[e],a=i.userData.reveal.uReveal;i.userData.reveal.uRevealGlow.value.set(n[e]).multiplyScalar(3.2),a.value=0,r.mesh.visible=!0,r.droopSpring.set(.08),r.droop=.08,this.fx&&this.fx.waistTrail(this.girl,r,n[e]===`#ffffff`?t.main:n[e],.75),await this.sched.tween(.75,t=>{a.value=t,this.fx&&this.fx.sparkleAt(r.hemPoint(t),n[e]===`#ffffff`?`#ffffff`:n[e],2)},Z.inOutSine),e===0&&(this.girl.casualSkirt.mesh.visible=!1,this.girl.casualBelt.visible=!1),r.droopSpring.target=1,r.droopSpring.kick(-1.5),this.fx&&this.fx.chime(1,e),await this.sched.wait(.25)}this._show(this.sash,0),await this.sched.wait(.4),this.built.skirt=!0}_buildTop(){let e=this.girl,t=this.mats;this.bodiceMat=ff(df(new No({color:of.pink.main,roughness:.34,envMap:t.env,envMapIntensity:.6}),`#ffffff`,.3),{glowColor:`#ffffff`,width:.12,rim:1});let n=Sd([[0,-.04],[.093,-.04],[.095,0],[.099,.05],[.104,.1],[.1,.135],[.088,.16],[0,.16]],32,.82);Bf(n,e=>Y((e.y+.04)/.2));let r=new W(n,this.bodiceMat);r.castShadow=!0,r.visible=!1,e.spine.add(r),this.bodice=r,this.whiteSatin=t.satin(`#ffffff`,{side:2});let i=new W(xd({rTop:.083,rBottom:.1,height:.022,waves:14,amp:.006,rows:3,segs:72}),this.whiteSatin);i.position.y=.163,i.scale.set(1,1,.82),i.rotation.x=0,e.spine.add(i),this.neckFrill=this._pop(i),this.ribbonMat=t.satin(of.pink.ribbon,{sheen:`#ffe6f0`});let a=new G;a.position.set(0,.108,.083),e.spine.add(a);let o=Cd(.072,.064,.034),s=new W(o,this.ribbonMat);s.rotation.z=.22,s.castShadow=!0;let c=new W(o,this.ribbonMat);c.rotation.set(0,Math.PI,.22),c.castShadow=!0;let l=new G;l.add(s);let u=new G;u.add(c),a.add(l,u);let d=new W(new K(.019,14,10),this.ribbonMat);d.scale.set(1,1.1,.8),a.add(d);let f=wd(.085,.026,.006,.012),p=new W(f,this.ribbonMat);p.position.set(.006,-.008,-.004),p.rotation.z=.32;let m=new W(f,this.ribbonMat);m.position.set(-.006,-.008,-.004),m.rotation.z=-.32;let h=new G;h.add(p,m),a.add(h),this.chestTails=h,this.chestGemMat=t.gem(of.pink.heart,{emissive:.5});let g=new W(yd(.038,.5),this.chestGemMat);g.position.z=.018;let _=new G;_.add(g),a.add(_),this.bowParts={loopsL:this._pop(l),loopsR:this._pop(u),knot:this._pop(d),tails:this._pop(h),gem:this._pop(_)},this.chestBow=a,this.chestStars=[-.034,0,.034].map((t,n)=>{let r=new W(_d(.5,.22,.2),this.goldMat);r.scale.setScalar(.021);let i=new G;return i.position.set(t,.147-Math.abs(t)*.25,.072-Math.abs(t)*.3),i.rotation.x=-.25,i.add(r),e.spine.add(i),this._pop(i)}),this.puffMat=t.satin(of.pink.main,{sheen:`#ffffff`}),this.puffs=[];for(let t of[e.shoulderL,e.shoulderR]){let e=new G,n=new W(new K(.044,18,12),this.puffMat);n.scale.set(1.05,.88,1),n.position.y=-.022,n.castShadow=!0;let r=new W(xd({rTop:.038,rBottom:.05,height:.02,waves:9,amp:.006,rows:3,segs:48}),this.whiteSatin);r.position.y=-.045,e.add(n,r),t.add(e),this.puffs.push(this._pop(e))}this.laceMat=ff(df(new No({color:`#ffffff`,roughness:.5,side:2,envMap:t.env,envMapIntensity:.5}),`#ffffff`,.3),{glowColor:`#ffffff`,width:.15}),this.laces=[];for(let t of[e.elbowL,e.elbowR]){let e=xd({rTop:.025,rBottom:.037,height:.024,waves:9,amp:.006,rows:3,segs:48});Bf(e,(t,n)=>e.attributes.uv.getX(n));let n=new W(e,this.laceMat);n.position.y=-.088,n.visible=!1,t.add(n),this.laces.push(n)}}async buildTop(e){this.palette.top=e;let t=of[e];this.bodiceMat.color.set(t.main),this.puffMat.color.set(t.main),this.ribbonMat.color.set(t.ribbon),pf.setGemColor(this.chestGemMat,t.heart);let n=this.bodiceMat.userData.reveal;n.uRevealGlow.value.set(t.main).lerp(new H(`#ffffff`),.5).multiplyScalar(3.5),n.uReveal.value=0,this.bodice.visible=!0,this.fx&&this.fx.spiralUp(this.girl,t.main,.9),await this.sched.tween(.9,e=>{n.uReveal.value=e},Z.inOutSine),this.girl.shirtTorso.visible=!1,this.girl.shirtCollar.visible=!1,this.girl.shirtHeart.visible=!1,this._show(this.neckFrill,0);let r=this.bowParts;this._show(r.knot,.05),this._show(r.loopsL,.15),this._show(r.loopsR,.25),this._show(r.tails,.35),await this.sched.wait(.45),this._show(r.gem,0),this.fx&&(this.fx.sparkleAt(this.chestBow.localToWorld(new B(0,0,.03)),t.heart,14),this.fx.chime(2)),await this.sched.wait(.25);for(let e of this.girl.shirtSleeves)e.visible=!1;this._show(this.puffs[0],0),this._show(this.puffs[1],.1);for(let e of this.laces)e.visible=!0;let i=this.laceMat.userData.reveal.uReveal;i.value=0,await this.sched.tween(.5,e=>{i.value=e},Z.outCubic);for(let e=0;e<3;e++)this._show(this.chestStars[e],0),this.fx&&(this.fx.sparkleAt(this.chestStars[e].obj.getWorldPosition(new B),`#fff2b8`,6),this.fx.ding(e)),await this.sched.wait(.18);this.built.top=!0}_buildHairBow(){let e=this.girl,t=this.mats;this.hairRibbonMat=t.satin(of.pink.ribbon,{sheen:`#ffe6f0`});let n=new G;n.position.set(0,.148,-.03),n.rotation.x=-.32,e.skull.add(n),this.hairBow=n;let r=Cd(.1,.085,.042),i=new W(r,this.hairRibbonMat);i.rotation.z=.38,i.castShadow=!0;let a=new W(r,this.hairRibbonMat);a.rotation.set(0,Math.PI,.38),a.castShadow=!0;let o=new G;o.add(i);let s=new G;s.add(a);let c=new W(new K(.025,14,10),this.hairRibbonMat);c.scale.set(1,1.1,.85);let l=wd(.12,.034,.006,.015),u=new W(l,this.hairRibbonMat);u.position.set(.01,-.01,-.012),u.rotation.set(.5,0,.35);let d=new W(l,this.hairRibbonMat);d.position.set(-.01,-.01,-.012),d.rotation.set(.5,0,-.35);let f=new G;f.add(u,d),n.add(o,s,c,f),this.hairTails=f,this.hairBowParts={gL:this._pop(o),gR:this._pop(s),knot:this._pop(c),tails:this._pop(f)},this.hairStars=[[0,0,.026,.028],[.06,.02,.02,.022],[-.06,.02,.02,.022]].map(([e,t,r,i])=>{let a=new W(_d(.5,.22,.2),this.goldMat);a.scale.setScalar(i);let o=new G;return o.position.set(e,t,r),o.add(a),n.add(o),o.visible=!1,{h:o,home:o.position.clone()}})}async buildBow(e){this.palette.bow=e;let t=of[e];this.hairRibbonMat.color.set(t.ribbon);let n=this.hairBowParts;this.fx&&this.fx.sparkleAt(this.hairBow.getWorldPosition(new B),t.ribbon,18),this._show(n.knot,0),this._show(n.gL,.12),this._show(n.gR,.22),this._show(n.tails,.32),await this.sched.wait(.55);for(let e=0;e<3;e++){let t=this.hairStars[e];t.h.visible=!0;let n=t.home.clone().add(new B((e-1)*.25,.25,.15));await this.sched.tween(.32,e=>{t.h.position.lerpVectors(n,t.home,e),t.h.rotation.z=(1-e)*6,t.h.scale.setScalar(.4+.6*e)},Z.outBack),this.fx&&(this.fx.sparkleAt(t.h.getWorldPosition(new B),`#fff2b8`,8),this.fx.ding(e+2))}this.built.bow=!0}instantComplete(e=`pink`){let t=of[e];for(let e of this.boots)e.foot.visible=e.shaft.visible=!0;this.bootMat.userData.reveal.uReveal.value=1,this.bootHeartMat.color.set(t.heart);for(let e of this.girl.shoes)e.visible=!1;for(let e of this.girl.socks)e.visible=!1;this.skirtMats[1].color.set(t.tulle),this.skirtMats[2].color.set(t.sheer),this.sashMat.color.set(t.ribbon);for(let e of this.layers)e.mesh.visible=!0,e.droopSpring.set(1),e.droop=1;for(let e of this.skirtMats)e.userData.reveal.uReveal.value=1;this.girl.casualSkirt.mesh.visible=!1,this.girl.casualBelt.visible=!1,this.bodiceMat.color.set(t.main),this.puffMat.color.set(t.main),this.ribbonMat.color.set(t.ribbon),pf.setGemColor(this.chestGemMat,t.heart),this.bodice.visible=!0,this.bodiceMat.userData.reveal.uReveal.value=1,this.laceMat.userData.reveal.uReveal.value=1;for(let e of this.laces)e.visible=!0;this.girl.shirtTorso.visible=!1,this.girl.shirtCollar.visible=!1,this.girl.shirtHeart.visible=!1;for(let e of this.girl.shirtSleeves)e.visible=!1;this.hairRibbonMat.color.set(t.ribbon);for(let e of this.pops)e.obj.visible=!0,e.s.set(1),e.obj.scale.setScalar(e.scale);for(let e of this.hairStars)e.h.visible=!0,e.h.position.copy(e.home),e.h.scale.setScalar(1);for(let t of Object.keys(this.built))this.built[t]=!0,this.palette[t]=e}async recolor(e){let t=of[e],n=[],r=(e,t)=>{e&&n.push({mat:e,from:e.color.clone(),to:new H(t)})};this.built.boots&&r(this.bootHeartMat,t.heart),this.built.skirt&&(r(this.skirtMats[1],t.tulle),r(this.skirtMats[2],t.sheer),r(this.sashMat,t.ribbon)),this.built.top&&(r(this.bodiceMat,t.main),r(this.puffMat,t.main),r(this.ribbonMat,t.ribbon)),this.built.bow&&r(this.hairRibbonMat,t.ribbon);for(let t of Object.keys(this.palette))this.built[t]&&(this.palette[t]=e);let i=[this.bootMat,...this.skirtMats,this.bodiceMat];for(let e of i)e.userData.reveal.uRevealGlow.value.set(t.main).lerp(new H(`#ffffff`),.4).multiplyScalar(3);await this.sched.tween(.7,e=>{for(let t of n)t.mat.color.copy(t.from).lerp(t.to,e);let t=Math.sin(Math.PI*e);for(let e of i)e.userData.reveal.uFlash.value=t},Z.inOutSine),this.built.top&&pf.setGemColor(this.chestGemMat,t.heart)}async setStyle(e){let t=this.layers.map(e=>({...e.p})),n=zf[e%zf.length];this.style=e%zf.length;for(let e of this.layers)e.droopSpring.target=.55;await this.sched.tween(.55,e=>{this.layers.forEach((r,i)=>{let a=t[i],o=n[i];r.p.length=Ju(a.length,o.length,e),r.p.a0=Ju(a.a0,o.a0,e),r.p.a1=Ju(a.a1,o.a1,e),r.p.amp=Ju(a.amp,o.amp,e),r.p.phase=Ju(a.phase||0,o.phase||0,e),e>.5&&(r.p.waves=o.waves)})},Z.inOutSine);for(let e of this.layers)e.droopSpring.target=1,e.droopSpring.kick(-1)}hemInfo(){let e=this.built.skirt?this.layers[2]:this.girl.casualSkirt;return{y:e.hemPoint(0).y,r:e.p.length*Math.sin(e.p.a1)+e.p.waistR+.05}}update(e,t,n){this.sched.update(e);for(let t of this.pops)t.obj.visible&&(t.s.update(e),t.obj.scale.setScalar(Math.max(1e-4,t.s.x*t.scale)));for(let r of this.layers)r.mesh.visible&&(r.droop=r.droopSpring.update(e),r.flare=n.flare,r.lagX=n.lag.x,r.lagZ=n.lag.y,r.update(e,t));let r=Math.sin(t*2.3)*.05;this.chestTails.rotation.z=-n.lag.x*4+r*.5,this.chestTails.rotation.x=n.lag.y*4+n.flare*.3,this.hairTails.rotation.x=.1+n.flare*.5-n.hopY*3+n.bowAmt*.4,this.hairTails.rotation.z=-n.yawRate*.02+r,this.hairBow.visible&&(this.hairBow.rotation.z=Math.sin(t*1.7)*.03-n.yawRate*.006)}},Hf=`#ffe3d6`,Uf=`#8f5a42`;function Wf(e,t,n,r,i,a=10){let o=[],s=[],c=[];for(let c=0;c<=a;c++)for(let l=0;l<=a;l++){let u=l/a,d=c/a,f=t+(u-.5)*r,p=n+(d-.5)*i;o.push(Math.sin(f)*Math.cos(p)*e,Math.sin(p)*e,Math.cos(f)*Math.cos(p)*e),s.push(u,d)}for(let e=0;e<a;e++)for(let t=0;t<a;t++){let n=e*(a+1)+t,r=n+a+1;c.push(n,n+1,r,r,n+1,r+1)}let l=new kr;return l.setAttribute(`position`,new U(o,3)),l.setAttribute(`uv`,new U(s,2)),l.setIndex(c),l.computeVertexNormals(),l}function Gf(e,t,n){return new B(Math.sin(t)*Math.cos(n)*e,Math.sin(n)*e,Math.cos(t)*Math.cos(n)*e)}function Kf(e,t){let n=e.attributes.position,r=new B;for(let e=0;e<n.count;e++){r.fromBufferAttribute(n,e);let i=r.y/t,a=r.z/t,o=gt.smoothstep(-i,-.15,.55),s=gt.smoothstep(a,-.35,.55),c=1+.085*o*s;r.x*=c,r.z*=1+.035*o*s,i<-.7&&(r.x*=1-(-i-.7)*.25),n.setXYZ(e,r.x,r.y,r.z)}return e.computeVertexNormals(),e}var qf=new B,Jf=new _t,Yf=new B(0,-1,0),Xf=class{constructor(e){this.mats=e,this.root=new G,this.body=new G,this.root.add(this.body);let t=uf(new No({color:Hf,roughness:.6,emissive:`#ffcdbd`,emissiveIntensity:.16,envMap:e.env,envMapIntensity:.4}),.8),n=uf(df(new No({color:Uf,map:nf().strand,roughness:.38,envMap:e.env,envMapIntensity:.55}),`#ffcfb5`,.28),.6);this.skinMat=t,this.hairMat=n;let r=uf(e.matte(`#fff1c2`,{roughness:.75}),.7),i=e.matte(`#ffffff`,{roughness:.7}),a=uf(e.matte(`#a3c8ea`,{roughness:.8}),.6),o=e.matte(`#ffffff`,{roughness:.8}),s=e.lacquer(`#e9837a`,{roughness:.25}),c=e.matte(`#ffffff`,{roughness:.8}),l=(e,t,n,r)=>{let i=new G;return i.position.set(t,n,r),e.add(i),i};this.hips=l(this.body,0,.43,0),this.spine=l(this.hips,0,.04,0),this.chest=l(this.spine,0,.16,0),this.neck=l(this.chest,0,.04,0),this.head=l(this.neck,0,.03,0),this.skull=l(this.head,0,.165,.005),this.skull.scale.set(1,.95,.96),this.shoulderL=l(this.chest,.088,.022,0),this.shoulderR=l(this.chest,-.088,.022,0),this.elbowL=l(this.shoulderL,0,-.118,0),this.elbowR=l(this.shoulderR,0,-.118,0),this.handL=l(this.elbowL,0,-.112,0),this.handR=l(this.elbowR,0,-.112,0),this.legL=l(this.hips,.047,-.012,0),this.legR=l(this.hips,-.047,-.012,0),this.kneeL=l(this.legL,0,-.18,0),this.kneeR=l(this.legR,0,-.18,0),this.footL=l(this.kneeL,0,-.178,0),this.footR=l(this.kneeR,0,-.178,0);let u=(e,t,n,r=0,i=0,a=0)=>{let o=new W(e,t);return o.position.set(r,i,a),o.castShadow=!0,n.add(o),o},d=u(Sd([[0,-.03],[.083,-.03],[.087,0],[.091,.05],[.096,.1],[.092,.14],[.078,.172],[.05,.19],[.026,.2],[0,.202]].map(([e,t])=>[e*.97,t]),28,.8),t,this.spine);d.castShadow=!0,this.shirtTorso=u(Sd([[0,-.035],[.088,-.035],[.091,0],[.095,.05],[.1,.1],[.097,.14],[.084,.168],[.062,.182],[.045,.186],[0,.186]],28,.8),r,this.spine);let f=u(new jo(.045,.008,8,24),i,this.spine,0,.183,.006);f.rotation.x=Math.PI/2-.25,f.scale.set(1,.8,1),this.shirtCollar=f,this.shirtHeart=u(hd(.035,.1),e.matte(`#ff9ec6`,{roughness:.6}),this.spine,0,.1,.081),u(new sa(.028,.032,.06,14),t,this.neck,0,0,0),u(new K(.085,20,14),c,this.hips,0,0,0).scale.set(1.05,.62,.86);let p=new aa(.027,.085,6,12);p.translate(0,-.058,0);let m=new aa(.024,.075,6,12);m.translate(0,-.05,0);let h=new K(.031,16,12);h.scale(.95,1.05,.85);let g=new K(.038,16,12);g.scale(1,1.15,1),g.translate(0,-.03,0),this.shirtSleeves=[];for(let[e,n,i]of[[this.shoulderL,this.elbowL,this.handL],[this.shoulderR,this.elbowR,this.handR]]){u(p,t,e),this.shirtSleeves.push(u(g,r,e)),u(m,t,n);let a=u(h,t,i,0,-.012,0);u(new K(.012,10,8),t,a,0,.006,.022).scale.set(1,1.3,1)}let _=new aa(.033,.11,6,12);_.translate(0,-.09,0);let v=new aa(.029,.12,6,12);v.translate(0,-.09,0);let y=new sa(.0315,.0305,.07,14,1,!0);y.translate(0,-.14,0);let b=new jo(.032,.006,6,16);b.rotateX(Math.PI/2),b.translate(0,-.105,0);let x=new K(1,20,14);x.scale(.04,.028,.064),x.translate(0,-.03,.02),this.shoes=[],this.socks=[];for(let[n,r,i]of[[this.legL,this.kneeL,this.footL],[this.legR,this.kneeR,this.footR]]){u(_,t,n),u(v,t,r),this.socks.push(u(y,o,r),u(b,o,r));let a=u(x,s,i),c=u(new jo(.03,.005,6,16,Math.PI),s,i,0,-.012,.01);c.rotation.y=Math.PI/2,this.shoes.push(a,c);let l=u(new sa(.04,.04,.008,18),e.matte(`#ffffff`),i,0,-.054,.02);l.scale.set(1,1,1.55),this.shoes.push(l)}this.casualSkirt=new Rf({segs:48,rows:6,material:a}),this.casualSkirt.setParams({length:.13,waistR:.095,a0:.42,a1:.5,waves:10,amp:.004}),this.casualSkirt.mesh.position.y=.05,this.hips.add(this.casualSkirt.mesh);let S=u(new jo(.094,.009,8,32),a,this.hips,0,.05,0);S.rotation.x=Math.PI/2,S.scale.set(1,.82,1),this.casualBelt=S;let C=.165,w=u(Kf(new K(C,44,32),C),t,this.skull);w.castShadow=!0;for(let e of[-1,1])u(new K(.03,12,10),t,this.skull,e*.16,-.01,-.01).scale.set(.5,1,.8);u(new K(.008,10,8),t,this.skull,0,-.045,.163);let T=e=>new hr({map:e,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,toneMapped:!0});this.eyeMats=[T(Kd(`open`)),T(Kd(`open`))],this.eyes=[];for(let[e,t]of[[0,1],[1,-1]]){let n=new W(Kf(Wf(C*1.004,t*.35,-.13,.5,.66,12),C),this.eyeMats[e]);n.renderOrder=2,this.skull.add(n),this.eyes.push(n)}this.mouthMat=T(qd(`smile`));let E=new W(Kf(Wf(C*1.006,0,-.47,.24,.24,8),C),this.mouthMat);E.position.z=.002,E.renderOrder=2,this.skull.add(E);let D=T(Jd());for(let e of[-1,1]){let t=new W(Kf(Wf(C*1.006,e*.5,-.33,.45,.24,8),C),D);t.renderOrder=2,this.skull.add(t)}let O=new G;this.skull.add(O),this.hairGroup=O;{let t=new K(C*1.075,48,34),n=t.attributes.position,r=t.index.array,i=[],a=new B,o=new B,s=new B,c=new B;for(let e=0;e<r.length;e+=3){o.fromBufferAttribute(n,r[e]),s.fromBufferAttribute(n,r[e+1]),c.fromBufferAttribute(n,r[e+2]),a.copy(o).add(s).add(c).multiplyScalar(1/3);let t=Math.abs(a.x)/(C*1.075);if(!(a.y<-.15)){if(a.z>0){let e=.075-.13*t*t;if(a.y<e&&a.z>.03||a.y<-.04&&t<.85)continue}i.push(r[e],r[e+1],r[e+2])}}t.setIndex(i),t.computeVertexNormals();let l=nf(),d=uf(df(new No({color:Uf,map:l.cap,emissive:`#ffd9c4`,emissiveMap:l.ring,emissiveIntensity:.32,roughness:.38,envMap:e.env,envMapIntensity:.55}),`#ffcfb5`,.28),.6);u(t,d,O).position.set(0,.004,-.004),u(new K(C*1.02,24,18),d,O,0,-.04,-.045).scale.set(1.04,.9,.9)}[-.7,-.52,-.35,-.17,0,.17,.35,.52,.7].forEach((e,t)=>{let r=[.85,1,.9,1.05,.95,1.05,.9,1,.85][t],i=e*.12,a=bd(new _a([Gf(C*1.05,e*.2,1.2),Gf(C*1.105,e*.65,.78),Gf(C*1.11,e*.92-i,.4),Gf(C*1.07,e*.98-i*1.6,.08+(1-r)*.4)]),e=>.05*(1-e)**.5*(.78+.22*Math.sin(Math.PI*Math.min(1,e*1.6)))+.003,{tubular:18,radial:10,flatten:.3});u(a,n,O)});for(let e of[-1,1])u(bd(new _a([Gf(C*1.07,e*.85,.6),Gf(C*1.1,e*1,.1),Gf(C*1.08,e*1.02,-.4),Gf(C*1,e*.95,-.72)]),e=>.032*(1-e)**.7+.005,{tubular:20,radial:10,flatten:.45}),n,O);this.tails=[];for(let t of[-1,1]){let r=new G;r.position.copy(Gf(C*1.02,t*1.7,.42)),O.add(r);let i=u(new K(.024,14,10),e.lacquer(`#ff9ec6`,{roughness:.3}),r,0,0,0);i.scale.set(1,1,.8),this.pompoms=this.pompoms||[],this.pompoms.push(i);let a=new G;r.add(a),u(bd(new _a([new B(0,0,0),new B(t*.06,-.02,-.02),new B(t*.095,-.1,-.02),new B(t*.085,-.2,0),new B(t*.06,-.27,.02),new B(t*.08,-.31,.03)]),e=>.042*Math.sin(Math.PI*Math.min(1,.15+e*.95))*(1-e*.6)+.006,{tubular:26,radial:12,flatten:.8}),n,a),this.tails.push({pivot:a,side:t,sx:new ed(0,60,5),sz:new ed(0,60,5)})}this.outfit=new Vf(this,e),this.facing=0,this.facingTarget=0,this.spinVel=0,this.spinAngle=0,this.walk=null,this.walkPhase=0,this.moveSpeed=0,this.lookTarget=null,this.pointTarget=null,this.actions=[],this.expr=`normal`,this.exprTimer=0,this.blinkTimer=X(1.5,3.5),this.blinking=0,this.time=0,this.bounce=new ed(0,180,9),this.armsUp=0,this.armsUpTarget=0,this.holdingWand=!1,this.flare=0,this.lag=new z,this.prevPos=new B,this.vel=new B,this.onStep=null,this.stepSide=0,this.layerMask=0,this._lastYaw=0,this.headYaw=0,this.headPitch=0}setLayer(e){this.root.traverse(t=>t.layers.set(e))}setPosition(e){this.root.position.copy(e),this.prevPos.copy(e)}setFacing(e,t=!1){this.facingTarget=e,t&&(this.facing=e,this.root.rotation.y=e)}faceTowards(e,t=!1){let n=qf.copy(e).sub(this.root.position);this.setFacing(Math.atan2(n.x,n.z),t)}setExpression(e,t=1.6){this.expr=e,this.exprTimer=t;let n=e===`happy`?`happy`:e===`wow`?`wow`:`open`;for(let e of this.eyeMats)e.map=Kd(n);this.mouthMat.map=qd(e===`happy`?`open`:e===`wow`?`o`:`smile`)}_act(e,t,n={}){this.actions=this.actions.filter(t=>t.name!==e);let r={name:e,t:0,dur:t,...n};return this.actions.push(r),r}_has(e){return this.actions.find(t=>t.name===e)}stomp(e){this._has(`bow`)||(e===void 0&&(this.stepSide=1-this.stepSide,e=this.stepSide),this._act(`stomp`+e,.42,{side:e,fired:!1}),this.bounce.kick(.6))}twirl(e=1){this.spinVel+=11*e*(this.spinVel>=0?1:-1)||11*e,this._act(`twirl`,1.3),this.setExpression(`happy`,1.6),this.bounce.kick(.8)}bow(){this._has(`bow`)||(this._act(`bow`,1.9),this.setExpression(`happy`,2))}hop(e=1){this._act(`hop`,.55,{h:e}),this.bounce.kick(1.2*e)}cheer(e=1.4){this._act(`cheer`,e),this.setExpression(`happy`,e),this.hop(1)}wave(){this._act(`wave`,1.6),this.setExpression(`happy`,1.4)}flourish(){this._act(`flourish`,.8)}pose(){this._act(`pose`,1.6),this.setExpression(`happy`,1.6),this.bounce.kick(1)}walkTo(e,t,n=.9){this.walk={target:e.clone(),onArrive:t,speed:n}}get busy(){return this.actions.some(e=>e.name===`bow`)}footWorld(e,t=new B){return(e===0?this.footL:this.footR).getWorldPosition(t),t.y=this.root.position.y,t}handWorld(e=1,t=new B){return(e===0?this.handL:this.handR).getWorldPosition(t)}headWorld(e=new B){return this.skull.getWorldPosition(e)}chestWorld(e=new B){return this.chest.getWorldPosition(e)}waistWorld(e=new B){return this.spine.getWorldPosition(e)}eyeWorld(e=new B){return this.skull.getWorldPosition(e),e.y-=.01,e}_aim(e,t,n,r){Jf.setFromUnitVectors(Yf,qf.copy(t).normalize()),e.quaternion.slerp(Jf,1-Math.exp(-n*r))}update(e,t,n){this.time=t;let r=this.root,i=!1;if(this.walk){let t=qf.copy(this.walk.target).sub(r.position);t.y=0;let n=t.length();if(n<.03){let e=this.walk.onArrive;this.walk=null,e&&e()}else{i=!0,this.facingTarget=Math.atan2(t.x,t.z);let a=Math.min(this.walk.speed,n*4+.15);r.position.addScaledVector(t.normalize(),Math.min(n,a*e)),this.walkPhase+=e*a*15}}if(this.forceWalk&&(this.walkPhase+=e*11*this.forceWalk),this.moveSpeed=Zu(this.moveSpeed,i||this.forceWalk?1:0,10,e),this.vel.copy(r.position).sub(this.prevPos).divideScalar(Math.max(e,1e-4)),this.prevPos.copy(r.position),Math.abs(this.spinVel)>.05){if(this.spinAngle+=this.spinVel*e,this.spinVel*=Math.exp(-1.6*e),Math.abs(this.spinVel)<1.2){let t=rd(0,this.spinAngle%J);this.spinVel+=-t*6*e,Math.abs(t)<.03&&Math.abs(this.spinVel)<.8&&(this.spinVel=0,this.spinAngle=0)}}else this.spinAngle=Qu(this.spinAngle,0,6,e);this.facing=Qu(this.facing,this.facingTarget,i?10:6,e),r.rotation.y=this.facing+this.spinAngle;let a=rd(this._lastYaw,r.rotation.y)/Math.max(e,1e-4);this._lastYaw=r.rotation.y;let o=[0,0],s=[0,0],c=0,l=0,u=0,d=0,f=0,p=0,m=0;for(let t of this.actions){t.t+=e;let n=Y(t.t/t.dur);if(t.name.startsWith(`stomp`)){let e=t.side,r=n<.45?Z.outCubic(n/.45):1-Z.inCubic((n-.45)/.25),i=Math.max(0,n<.7?r:0);o[e]=Math.max(o[e],i*.85),s[e]=Math.max(s[e],i*1.25),!t.fired&&n>=.68&&(t.fired=!0,this.bounce.kick(-.6),this.onStep&&this.onStep(this.footWorld(e),e))}else t.name===`bow`?c=Math.max(c,Math.sin(Math.PI*Math.min(1,n*1.05))*(n<.3?Z.outCubic(n/.3):1)):t.name===`cheer`?l=Math.max(l,Math.sin(Math.PI*n)):t.name===`wave`?u=Math.max(u,Math.sin(Math.PI*n)):t.name===`twirl`?d=Math.max(d,Math.sin(Math.PI*Math.min(1,n*1.2))):t.name===`flourish`?f=Math.max(f,Math.sin(Math.PI*n)):t.name===`pose`?p=Math.max(p,Math.sin(Math.PI*Math.min(1,n*1.3))):t.name===`hop`&&(m=Math.max(m,Math.sin(Math.PI*n)*.07*(t.h||1)))}this.actions=this.actions.filter(e=>e.t<e.dur);let h=Y(Math.abs(this.spinVel)/10),g=Math.sin(t*2.1)*.5+.5,_=this.bounce.update(e),v=Math.abs(Math.sin(this.walkPhase))*.018*this.moveSpeed;this.body.position.y=m+v+_*.01,this.body.scale.set(1+_*.015,1-_*.02,1+_*.015),this.spine.rotation.x=c*.55+this.moveSpeed*.06,this.spine.rotation.z=Math.sin(t*1.1)*.02*(1-this.moveSpeed),this.chest.scale.setScalar(1+g*.012),this.hips.rotation.y=Math.sin(this.walkPhase)*.1*this.moveSpeed;let y=Math.sin(this.walkPhase)*.55*this.moveSpeed;this.legL.rotation.x=-o[0]-y-c*.05,this.legR.rotation.x=-o[1]+y+c*.25,this.kneeL.rotation.x=s[0]+Math.max(0,-Math.sin(this.walkPhase))*.5*this.moveSpeed,this.kneeR.rotation.x=s[1]+Math.max(0,Math.sin(this.walkPhase))*.5*this.moveSpeed,this.footL.rotation.x=-s[0]*.3,this.footR.rotation.x=-s[1]*.3,this.legL.rotation.z=.02+d*.05,this.legR.rotation.z=-.02-d*.05;let b=e=>qf.set(e*(.28+g*.03),-1,.12),x=b(1).clone(),S=b(-1).clone(),C=Math.max(d,h);C>0&&(x.lerp(new B(1,.05,.1),C),S.lerp(new B(-1,.05,.1),C)),l>0&&(x.lerp(new B(.55,1,.25),l),S.lerp(new B(-.55,1,.25),l)),c>0&&(x.lerp(new B(.45,-1,.35),c),S.lerp(new B(-.45,-1,.35),c)),p>0&&x.lerp(new B(.9,.2,.2),p),this.armsUp>.01&&(x.lerp(new B(.3,.6,.6),this.armsUp),S.lerp(new B(-.3,.6,.6),this.armsUp)),this.moveSpeed>.01&&(x.z+=-Math.sin(this.walkPhase)*.5*this.moveSpeed,S.z+=Math.sin(this.walkPhase)*.5*this.moveSpeed),this.holdingWand&&l<.3&&c<.3&&S.lerp(new B(-.45,-.35,.75),.85),p>0&&S.lerp(new B(-.35,1,.35),p),f>0&&S.lerp(new B(-.5,.8,.6),f),u>0&&S.lerp(new B(-.6+Math.sin(t*14)*.25,1,.3),u);let w=!1;if(this.pointTarget){this.chest.updateWorldMatrix(!0,!1);let e=this.chest.worldToLocal(this.pointTarget.clone());w=e.x>.06;let t=w?this.shoulderL:this.shoulderR,n=e.sub(t.position).normalize();w?x.copy(n):S.copy(n)}this._aim(this.shoulderL,x,w?14:9,e),this._aim(this.shoulderR,S,this.pointTarget&&!w?14:9,e),this.elbowL.rotation.x=Zu(this.elbowL.rotation.x,-.25-c*.3,8,e),this.elbowR.rotation.x=Zu(this.elbowR.rotation.x,this.holdingWand&&!this.pointTarget?-.7:-.25,8,e);let T=0,E=0;if(this.lookTarget){this.neck.updateWorldMatrix(!0,!1);let e=this.neck.worldToLocal(this.lookTarget.clone());T=Y(Math.atan2(e.x,e.z),-.9,.9),E=Y(Math.atan2(e.y-.18,Math.hypot(e.x,e.z)),-.5,.45)}if(E-=c*.45,E+=l*.25,this.headYaw=Zu(this.headYaw,T,6,e),this.headPitch=Zu(this.headPitch,E,6,e),this.head.rotation.set(-this.headPitch,this.headYaw,Math.sin(t*.9)*.04+d*.12),this.exprTimer>0&&(this.exprTimer-=e,this.exprTimer<=0&&this.expr!==`normal`&&this.setExpression(`normal`,0)),this.blinkTimer-=e,this.blinkTimer<=0&&this.expr===`normal`){this.blinking=.13,this.blinkTimer=X(2.2,5);for(let e of this.eyeMats)e.map=Kd(`closed`)}if(this.blinking>0&&(this.blinking-=e,this.blinking<=0&&this.expr===`normal`))for(let e of this.eyeMats)e.map=Kd(`open`);let D=this.vel.clone().applyAxisAngle(new B(0,1,0),-r.rotation.y);for(let n of this.tails)n.sx.target=Y(-D.z*.8+c*.6-m*4,-.8,.8),n.sz.target=Y(n.side*Math.min(1.2,Math.abs(a)*.09)+D.x*.7,-1.2,1.2)+Math.sin(t*1.4+n.side)*.04,n.sx.update(e),n.sz.update(e),n.pivot.rotation.set(n.sx.x,0,n.sz.x);this.flare=Zu(this.flare,Math.max(h*1,d*.6),6,e),this.lag.x=Zu(this.lag.x,Y(-D.x*.05-a*.004,-.06,.06),5,e),this.lag.y=Zu(this.lag.y,Y(-D.z*.05+m*.2,-.06,.06),5,e),this.casualSkirt.flare=this.flare*.5,this.casualSkirt.lagX=this.lag.x*.5,this.casualSkirt.lagZ=this.lag.y*.5,this.casualSkirt.mesh.visible&&this.casualSkirt.update(e,t),this.outfit.update(e,t,{flare:this.flare,lag:this.lag,yawRate:a,bowAmt:c,hopY:m})}},Zf=.44,Qf=class{constructor(e){this.group=new G,this.model=new G,this.group.add(this.model);let t=e.lacquer(`#fffdfd`,{roughness:.15}),n=e.gold(),r=Zf,i=new W(new sa(.0105,.0125,r*.7,16),t);i.position.y=r*.35,i.castShadow=!0,this.model.add(i);let a=new W(new K(.017,16,12),n);this.model.add(a);for(let e of[.06,.22,.3]){let t=new W(new jo(.013,.0035,8,20),n);t.rotation.x=Math.PI/2,t.position.y=e,this.model.add(t)}let o=[];for(let e=0;e<=60;e++){let t=e/60,n=t*J*3.2;o.push(new B(Math.cos(n)*.0128,.07+t*.15,Math.sin(n)*.0128))}this.model.add(new W(bd(new _a(o),()=>.0022,{tubular:90,radial:5}),n));let s=new W(new sa(.02,.012,.028,16),n);s.position.y=.316,this.model.add(s);let c=new G;c.position.y=r*.83,this.model.add(c),this.tip=c;let l=e.gem(`#ffd6e8`,{opacity:.55,emissive:.25}),u=new W(yd(.11,.42),l);c.add(u),this.heartMat=l;let d=new W(bd(new _a($f(.112)),()=>.003,{tubular:100,radial:6,closeEnds:!1}),n);c.add(d);let f=new W(yd(.042,.5),e.gem(af,{opacity:.92,emissive:.45}));f.position.z=.012,c.add(f),this.jewel=f,this.core=new W(hd(.022,.3),new hr({color:new H(`#ffc0dc`).multiplyScalar(2.5)})),this.core.position.z=.004,c.add(this.core);let p=e.lacquer(`#ffffff`,{roughness:.2});for(let e of[-1,1]){let t=new G;t.position.set(e*.05,.01,-.004),c.add(t);for(let r=0;r<3;r++){let i=new W(new K(1,14,10),r===0?p:n),a=.034-r*.007;i.scale.set(a,.009,.004),i.position.set(e*(.016+r*.004),.012-r*.012,0),i.rotation.z=e*(.65-r*.38),t.add(i)}}let m=new W(_d(.5,.22,.2),n);m.scale.setScalar(.026),m.position.y=.072,c.add(m),this.halo=new ki(new hi({map:Pd(),color:new H(`#ffc2dc`),transparent:!0,opacity:.55,blending:2,depthWrite:!1})),this.halo.scale.setScalar(.28),c.add(this.halo),this.model.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),this.grip=new B,this.gripTarget=new B,this.tipSim=new td(new B(0,r,0),95,9),this.up=new B(0,1,0),this.restUp=new B(0,1,0),this.mode=`hidden`,this.group.visible=!1,this.glow=.5,this.tipVel=new B,this._prevTip=new B,this.twist=0,this.scaleMul=1,this.followK=40}show(e=!0){this.group.visible=e,e&&this.mode===`hidden`&&(this.mode=`free`),e||(this.mode=`hidden`)}teleport(e,t=new B(0,1,0)){this.grip.copy(e),this.gripTarget.copy(e),this.up.copy(t).normalize(),this.tipSim.set(e.clone().addScaledVector(this.up,Zf)),this._prevTip.copy(this.tipSim.x)}tipWorld(e=new B){return this.tip.getWorldPosition(e)}gripWorld(e=new B){return e.copy(this.grip)}update(e,t){if(!this.group.visible)return;this.grip.lerp(this.gripTarget,1-Math.exp(-this.followK*e)),this.tipSim.target.copy(this.grip).addScaledVector(this.restUp,Zf),this.tipSim.update(e);let n=this.tipSim.x.clone().sub(this.grip);n.lengthSq()<1e-8&&n.set(0,1,0),n.normalize(),this.tipSim.x.copy(this.grip).addScaledVector(n,Zf),this.up.copy(n),this.group.position.copy(this.grip),this.group.quaternion.setFromUnitVectors(new B(0,1,0),n),this.twist=Zu(this.twist,0,4,e),this.model.rotation.y=this.twist+Math.sin(t*1.3)*.15,this.model.scale.setScalar(this.scaleMul);let r=this.tipWorld(new B);this.tipVel.copy(r).sub(this._prevTip).divideScalar(Math.max(e,1e-4)),this._prevTip.copy(r);let i=Y(this.tipVel.length()/4),a=.5+.5*Math.sin(t*3);this.core.material.color.set(`#ffc0dc`).multiplyScalar(1.5+this.glow*2+i*2+a*.5),this.halo.material.opacity=Math.min(1,.25+this.glow*.4+i*.5),this.halo.scale.setScalar(.22+i*.18+this.glow*.08)}};function $f(e){let t=[];for(let n=0;n<100;n++){let r=n/100*J,i=Math.sin(r),a=16*i*i*i,o=13*Math.cos(r)-5*Math.cos(2*r)-2*Math.cos(3*r)-Math.cos(4*r),s=Math.exp(-((Math.min(r,J-r)/.35)**2));o-=s*1.2,t.push(new B(a/32*e,(o+2.6)/32*e,0))}return t.push(t[0].clone()),t}var ep=1,tp={MAIN:0,MIRROR:ep};function np(e,t){return new Wt(e,t,{type:v,samples:0,depthBuffer:!0})}function rp(e,t,n=0){let r=t.clone().applyMatrix4(e.matrixWorldInverse),i=new Ht(r.normal.x,r.normal.y,r.normal.z,r.constant),a=e.projectionMatrix,o=new Ht((Math.sign(i.x)+a.elements[8])/a.elements[0],(Math.sign(i.y)+a.elements[9])/a.elements[5],-1,(1+a.elements[10])/a.elements[14]);i.multiplyScalar(2/i.dot(o)),a.elements[2]=i.x,a.elements[6]=i.y,a.elements[10]=i.z+1-n,a.elements[14]=i.w,e.projectionMatrixInverse.copy(a).invert()}var ip=class{constructor(e=384){this.rt=np(e,e),this.camera=new ni(30,1,.02,60),this.camera.layers.enable(ep),this.enabled=!1}render(e,t){if(!this.enabled)return;let n=e.getRenderTarget();e.setRenderTarget(this.rt),e.clear(),e.render(t,this.camera),e.setRenderTarget(n)}},ap=class{constructor(e=.5){this.scale=e,this.rt=np(16,16),this.camera=new ni,this.enabled=!1,this._m=new V,this._plane=new Wi,this._n=new B,this._p=new B}setSize(e,t){this.rt.setSize(Math.max(16,Math.round(e*this.scale)),Math.max(16,Math.round(t*this.scale)))}mapMatrix(e,t,n,r=new V){return e.updateWorldMatrix(!0,!1),t.updateWorldMatrix(!0,!1),this._m.copy(e.matrixWorld).invert(),r.copy(t.matrixWorld).multiply(this._m).multiply(n)}render(e,t,n,r,i){if(!this.enabled)return;let a=this.camera;t.updateMatrixWorld(),this.mapMatrix(r,i,t.matrixWorld,a.matrixWorld),a.matrixWorld.decompose(a.position,a.quaternion,a.scale),a.matrixWorldInverse.copy(a.matrixWorld).invert(),a.matrixAutoUpdate=!1,a.projectionMatrix.copy(t.projectionMatrix),a.layers.mask=t.layers.mask,this._n.set(0,0,-1).transformDirection(i.matrixWorld),i.getWorldPosition(this._p),this._plane.setFromNormalAndCoplanarPoint(this._n,this._p),this._plane.distanceToPoint(a.position)<-.02&&rp(a,this._plane,0);let o=e.getRenderTarget();e.setRenderTarget(this.rt),e.clear(),e.render(n,a),e.setRenderTarget(o)}},op=class{constructor(e=512){this.rt=np(e,e),this.camera=new ni,this.texMatrix=new V,this.enabled=!1,this._plane=new Wi,this._n=new B,this._p=new B,this._view=new B,this._target=new B,this._look=new B,this._rot=new V}setSize(e,t){this.rt.setSize(Math.max(16,Math.round(e)),Math.max(16,Math.round(t)))}render(e,t,n,r){if(!this.enabled)return;r.updateWorldMatrix(!0,!1);let i=this._p.setFromMatrixPosition(r.matrixWorld);this._rot.extractRotation(r.matrixWorld);let a=this._n.set(0,0,1).applyMatrix4(this._rot),o=this._view.setFromMatrixPosition(t.matrixWorld).sub(i);if(o.dot(a)<0)return;o.reflect(a).add(i),this._rot.extractRotation(t.matrixWorld),this._look.set(0,0,-1).applyMatrix4(this._rot),this._target.setFromMatrixPosition(t.matrixWorld).add(this._look);let s=this._target.sub(i).reflect(a).add(i),c=this.camera;c.position.copy(o),c.up.set(0,1,0).applyMatrix4(this._rot).reflect(a),c.lookAt(s),c.far=t.far,c.near=t.near,c.updateMatrixWorld(),c.projectionMatrix.copy(t.projectionMatrix),c.layers.mask=t.layers.mask,this.texMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMatrix.multiply(c.projectionMatrix).multiply(c.matrixWorldInverse).multiply(r.matrixWorld),this._plane.setFromNormalAndCoplanarPoint(a,i),rp(c,this._plane,0),r.visible=!1;let l=e.getRenderTarget();e.setRenderTarget(this.rt),e.clear(),e.render(n,c),e.setRenderTarget(l),r.visible=!0}},sp=class{constructor(e){this.h=e,this.reset()}reset(){this.samples=[],this.stroke=null,this.turn=0,this.turnPath=[],this.lastDir=null,this.slowTime=0,this.startT=0,this.total=0,this.lastEmitT=-1,this.lastCircleT=-9}begin(e,t,n,r){this.reset(),this.scale=r,this.startT=n,this.samples.push({x:e,y:t,t:n}),this.down={x:e,y:t,t:n}}move(e,t,n){let r=this.samples,i=r[r.length-1],a=Math.max(.001,n-i.t),o=e-i.x,s=t-i.y,c=Math.hypot(o,s);r.push({x:e,y:t,t:n}),r.length>200&&r.shift(),this.total+=c;let l=this.scale,u=c/a/l;if(c>l*.004){let r=Math.atan2(s,o);if(this.lastDir!==null){let i=r-this.lastDir;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;Math.abs(i)<1.4&&(this.turn=this.turn*Math.exp(-a*.15)+i,this.turnPath.push({x:e,y:t,t:n}),this.turnPath.length>120&&this.turnPath.shift())}this.lastDir=r}if(Math.abs(this.turn)>Math.PI*1.65){let e=this.turnPath.slice(-60),t=e.reduce((e,t)=>e+t.x,0)/e.length,r=e.reduce((e,t)=>e+t.y,0)/e.length,i=e.reduce((e,n)=>e+Math.hypot(n.x-t,n.y-r),0)/e.length;if(i>l*.03){this.h.circle&&this.h.circle({cx:t,cy:r,r:i/l,rpx:i,points:e,dir:Math.sign(this.turn),t:n}),this.turn=0,this.turnPath=[],this.stroke=null,this.lastEmitT=n,this.lastCircleT=n;return}}if(this.stroke){let r=this.stroke;r.pts.push({x:e,y:t,t:n}),r.peak=Math.max(r.peak,u);let i=e-r.x0,d=t-r.y0,f=Math.hypot(i,d),p=!1;f>l*.05&&c>0&&(p=(i*o+d*s)/(f*c)<-.2),u<.25?this.slowTime+=a:this.slowTime=0,(this.slowTime>.05||p)&&this._endStroke(n)}else if(u>.55){let i=r[Math.max(0,r.length-4)];this.stroke={x0:i.x,y0:i.y,t0:i.t,peak:u,pts:[i,{x:e,y:t,t:n}],turnAtStart:this.turn}}}_endStroke(e){let t=this.stroke;if(this.stroke=null,!t)return;let n=t.pts[t.pts.length-1],r=n.x-t.x0,i=n.y-t.y0,a=this.scale,o=Math.hypot(r,i)/a;if(o<.045||e-(this.lastCircleT??-9)<.45||Math.abs(this.turn-t.turnAtStart)>Math.PI*.9&&Math.abs(this.turn)>Math.PI*.9)return;let s,c=Math.abs(r),l=Math.abs(i);s=i<0&&l>c*.75?`up`:i>0&&l>c*1.1?`down`:r>0?`right`:`left`,this.lastEmitT=e,this.h.stroke&&this.h.stroke({dir:s,dx:r/a,dy:i/a,len:o,speed:t.peak,duration:n.t-t.t0,pts:t.pts,x0:t.x0,y0:t.y0,x1:n.x,y1:n.y})}end(e,t,n){this.stroke&&this._endStroke(n);let r=n-this.startT,i=Math.hypot(e-this.down.x,t-this.down.y)/this.scale;if(this.lastEmitT<0&&Math.abs(this.turn)>Math.PI*1.2&&this.turnPath.length>6){let e=this.turnPath,t=e.reduce((e,t)=>e+t.x,0)/e.length,r=e.reduce((e,t)=>e+t.y,0)/e.length,i=e.reduce((e,n)=>e+Math.hypot(n.x-t,n.y-r),0)/e.length;this.lastEmitT=n,this.h.circle&&this.h.circle({cx:t,cy:r,r:i/this.scale,rpx:i,points:e,dir:Math.sign(this.turn),t:n})}else{if(this.lastEmitT<0&&i>.07){let e=this.samples;if(this.stroke={x0:this.down.x,y0:this.down.y,t0:this.down.t,peak:Math.max(.6,i/Math.max(.2,r)),pts:e.slice(),turnAtStart:this.turn},this.turn=0,this._endStroke(n),this.lastEmitT>=0)return}r<.45&&i<.04&&this.lastEmitT<0?this.h.tap&&this.h.tap({x:e,y:t,dur:r}):this.lastEmitT<0&&this.total/this.scale>.02&&this.h.tap&&this.h.tap({x:e,y:t,dur:r,soft:!0})}}},cp=[`#ff8fc0`,`#ffc6de`,`#ffe27a`,`#8ed4ff`,`#c4a6ff`,`#92e8c6`,`#ffffff`,`#ffb0d0`],lp=class{constructor(e,t=700){let n=new ko(new Ra(fd(24,.07))),r=new ko(new Ra(pd(5,.04,.018))),i=new No({roughness:.45,metalness:.1,side:2,envMap:e.env,envMapIntensity:.9,emissive:`#ffffff`,emissiveIntensity:.08});this.meshes=[new Bi(n,i,t/2),new Bi(r,i,t/2)],this.items=[];let a=new V().makeScale(0,0,0);this.meshes.forEach((e,n)=>{e.frustumCulled=!1,e.instanceMatrix.setUsage(Ve),e.count=0;for(let n=0;n<t/2;n++)e.setMatrixAt(n,a),e.setColorAt(n,new H(Xu(cp))),this.items.push({mesh:e,i:n,alive:!1,pos:new B,vel:new B,rot:new An,av:new B,ph:X(0,J),rest:0,life:0})}),this._m=new V,this._q=new _t,this._s=new B,this.floorY=0,this.girl=null}attach(e){for(let t of this.meshes)e.add(t)}burst(e,{center:t=new B,radius:n=3.5,height:r=6.5}={}){let i=0;for(let a of this.items){if(i>=e)break;if(a.alive)continue;let o=X(0,J),s=Math.sqrt(Math.random())*n;a.alive=!0,a.pos.set(t.x+Math.cos(o)*s,r+X(0,2.5),t.z+Math.sin(o)*s),a.vel.set(X(-.3,.3),X(-.5,0),X(-.3,.3)),a.rot.set(X(0,J),X(0,J),X(0,J)),a.av.set(X(-6,6),X(-4,4),X(-6,6)),a.rest=0,a.life=X(14,20),a.mesh.setColorAt(a.i,new H(Xu(cp))),a.mesh.instanceColor.needsUpdate=!0,i++}}update(e,t){let n=this.girl,r=null,i=0,a=null;n&&n.root.parent&&(r=n.root.position,i=Math.abs(n.spinVel),a=n.outfit.built.skirt?n.outfit.hemInfo():null);let o=[-1,-1];for(let s of this.items){if(!s.alive)continue;let c=s.mesh===this.meshes[0]?0:1;if(s.life-=e,s.life<=0){s.alive=!1,s.mesh.setMatrixAt(s.i,this._m.makeScale(0,0,0));continue}if(o[c]=Math.max(o[c],s.i),s.rest>0){if(r&&i>5){let e=s.pos.x-r.x,t=s.pos.z-r.z,a=Math.hypot(e,t);if(a<1.3){s.rest=0;let r=new B(-t,0,e).normalize().multiplyScalar(i*.12*(n.spinVel>0?1:-1));s.vel.set(e/(a+.1)*.6,X(1.2,2.4),t/(a+.1)*.6).add(r),s.av.set(X(-8,8),X(-6,6),X(-8,8))}}if(s.rest>0){s.onDress&&r&&(s.pos.x+=(s.pos.x-r.x)*e*.35,s.pos.z+=(s.pos.z-r.z)*e*.35,s.pos.y-=e*.08,a&&s.pos.y<a.y&&(s.rest=0,s.onDress=!1)),this._write(s);continue}}let l=Math.exp(-2.6*e);s.vel.multiplyScalar(l),s.vel.y-=2.2*e;let u=Math.sin(t*4+s.ph);if(s.vel.x+=Math.cos(s.rot.y)*u*.9*e,s.vel.z+=Math.sin(s.rot.y)*u*.9*e,s.pos.addScaledVector(s.vel,e),s.rot.x+=s.av.x*e,s.rot.y+=s.av.y*e,s.rot.z+=s.av.z*e,a&&r){let e=s.pos.x-r.x,t=s.pos.z-r.z,n=Math.hypot(e,t),i=r.y+.48;if(s.pos.y<i&&s.pos.y>a.y){let o=(i-s.pos.y)/Math.max(.05,i-a.y),c=.1+(a.r-.1)*o;n<c&&s.vel.y<0&&Math.random()<.5&&(s.rest=1,s.onDress=!0,s.pos.x=r.x+e/(n+1e-4)*c,s.pos.z=r.z+t/(n+1e-4)*c,s.rot.x=-Math.PI/2+.6,s.av.set(0,0,0))}}s.pos.y<=this.floorY+.004&&(s.pos.y=this.floorY+.003+s.i%7*4e-4,s.rest=1,s.onDress=!1,s.rot.x=-Math.PI/2,s.rot.y=0,s.av.set(0,0,0),s.vel.set(0,0,0)),this._write(s)}this.meshes.forEach((e,t)=>{e.count=o[t]+1,e.instanceMatrix.needsUpdate=!0})}_write(e){this._q.setFromEuler(e.rot);let t=Y(e.life/1);this._s.set(t,t,t),this._m.compose(e.pos,this._q,this._s),e.mesh.setMatrixAt(e.i,this._m)}clear(){for(let e of this.items)e.alive=!1;this.meshes.forEach(e=>{e.count=0})}};function up(e,t=11,n=8){return new K(e,Math.min(t,11),Math.min(n,8))}function dp(){let e=`#fffaf6`,t=`#ffc0d6`,n=`#3a2422`;return Td([{geo:up(.13,11,8),color:e,matrix:Q([0,.13,0],[0,0,0],[1,.95,.9])},{geo:up(.105,11,8),color:e,matrix:Q([0,.32,.01])},{geo:new aa(.028,.13,2,6),color:e,matrix:Q([.045,.47,-.01],[0,0,-.18])},{geo:new aa(.028,.13,2,6),color:e,matrix:Q([-.045,.47,-.01],[0,0,.18])},{geo:new aa(.014,.1,2,5),color:t,matrix:Q([.047,.47,.012],[0,0,-.18])},{geo:new aa(.014,.1,2,5),color:t,matrix:Q([-.047,.47,.012],[0,0,.18])},{geo:up(.013,6,5),color:n,matrix:Q([.036,.335,.095])},{geo:up(.013,6,5),color:n,matrix:Q([-.036,.335,.095])},{geo:up(.016,6,5),color:t,matrix:Q([.06,.305,.085],[0,0,0],[1,.6,.5])},{geo:up(.016,6,5),color:t,matrix:Q([-.06,.305,.085],[0,0,0],[1,.6,.5])},{geo:up(.035,8,6),color:e,matrix:Q([.1,.17,.07])},{geo:up(.035,8,6),color:e,matrix:Q([-.1,.17,.07])}])}function fp(){let e=`#e2a874`,t=`#f7dcbc`,n=`#3a2422`,r=`#ffb3c8`;return Td([{geo:up(.15,11,8),color:e,matrix:Q([0,.14,0],[0,0,0],[1,.95,.92])},{geo:up(.09,12,10),color:t,matrix:Q([0,.13,.08],[0,0,0],[1,1,.6])},{geo:up(.115,11,8),color:e,matrix:Q([0,.34,.01])},{geo:up(.04,8,6),color:e,matrix:Q([.085,.43,0])},{geo:up(.04,8,6),color:e,matrix:Q([-.085,.43,0])},{geo:up(.02,6,5),color:r,matrix:Q([.085,.43,.025])},{geo:up(.02,6,5),color:r,matrix:Q([-.085,.43,.025])},{geo:up(.045,12,8),color:t,matrix:Q([0,.315,.09],[0,0,0],[1.15,.85,.8])},{geo:up(.015,6,5),color:n,matrix:Q([0,.33,.13])},{geo:up(.012,6,5),color:n,matrix:Q([.04,.36,.1])},{geo:up(.012,6,5),color:n,matrix:Q([-.04,.36,.1])},{geo:up(.042,8,6),color:e,matrix:Q([.13,.18,.06])},{geo:up(.042,8,6),color:e,matrix:Q([-.13,.18,.06])}])}function pp(){let e=`#fff3e3`,t=`#ff8fbf`,n=`#3a2422`;return Td([{geo:up(.12,11,8),color:e,matrix:Q([0,.12,0],[0,0,0],[1,1,.9])},{geo:up(.105,11,8),color:e,matrix:Q([0,.31,.01],[0,0,0],[1.08,.95,1])},{geo:new ca(.04,.07,6),color:`#ffd7a8`,matrix:Q([.065,.41,0],[0,0,-.3])},{geo:new ca(.04,.07,6),color:e,matrix:Q([-.065,.41,0],[0,0,.3])},{geo:up(.03,6,5),color:t,matrix:Q([.07,.44,.02],[0,0,0],[1.2,.8,.6])},{geo:up(.03,6,5),color:t,matrix:Q([.105,.43,.02],[0,0,0],[1.2,.8,.6])},{geo:up(.012,6,5),color:n,matrix:Q([.038,.32,.092],[0,0,0],[1,1.3,1])},{geo:up(.012,6,5),color:n,matrix:Q([-.038,.32,.092],[0,0,0],[1,1.3,1])},{geo:up(.009,6,6),color:t,matrix:Q([0,.295,.1])},{geo:new jo(.075,.012,4,12),color:t,matrix:Q([0,.22,.01],[Math.PI/2,0,0])},{geo:up(.028,6,5),color:t,matrix:Q([.025,.215,.075])},{geo:up(.028,6,5),color:t,matrix:Q([-.025,.215,.075])},{geo:up(.032,8,6),color:e,matrix:Q([.09,.07,.08])},{geo:up(.032,8,6),color:e,matrix:Q([-.09,.07,.08])}])}function mp(){let e=`#ff9cc8`,t=`#e8ddff`,n=`#3a2422`;return Td([{geo:new ca(.1,.2,10),color:`#fff0f7`,matrix:Q([0,.1,0])},{geo:up(.085,11,8),color:`#ffe3d6`,matrix:Q([0,.28,0])},{geo:up(.092,11,8),color:e,matrix:Q([0,.305,-.018],[0,0,0],[1.05,.95,1])},{geo:up(.04,8,6),color:e,matrix:Q([.075,.27,-.03])},{geo:up(.04,8,6),color:e,matrix:Q([-.075,.27,-.03])},{geo:up(.011,6,5),color:n,matrix:Q([.03,.27,.078])},{geo:up(.011,6,5),color:n,matrix:Q([-.03,.27,.078])},{geo:up(.1,8,6),color:t,matrix:Q([.1,.22,-.07],[0,.4,.5],[.9,.5,.08])},{geo:up(.1,8,6),color:t,matrix:Q([-.1,.22,-.07],[0,-.4,-.5],[.9,.5,.08])},{geo:up(.022,6,5),color:`#fff2a8`,matrix:Q([0,.4,0])}])}var hp={bunny:dp,bear:fp,cat:pp,fairy:mp},gp=class{constructor(e,t){this.group=new G,this.members=[],this.center=t.center.clone();let n=uf(new No({vertexColors:!0,roughness:.75,envMap:e.env,envMapIntensity:.4}),.6),r=[];for(let e=0;e<t.rows;e++){let n=t.r0+e*t.dr,i=t.h0+e*t.dh,a=(t.a1-t.a0)*n,o=Math.floor(a/t.spacing);for(let a=0;a<=o;a++){let s=t.a0+(t.a1-t.a0)*a/Math.max(1,o)+(e%2?.5*t.spacing/n:0);t.gap&&Math.abs(Math.atan2(Math.sin(s-(t.gapAt||0)),Math.cos(s-(t.gapAt||0))))<t.gap||s>t.a1||r.push({row:e,a:s,r:n,h:i})}}this.rows=t.rows;let i=t.weights||{bunny:.3,bear:.25,cat:.25,fairy:.2},a=r.map(()=>{let e=Math.random(),t=0;for(let[n,r]of Object.entries(i))if(t+=r,e<=t)return n;return`bunny`});this.meshes={};for(let e of Object.keys(hp)){let i=r.filter((t,n)=>a[n]===e);if(!i.length)continue;let o=new Bi(hp[e](),n,i.length);o.instanceMatrix.setUsage(Ve),o.castShadow=!1,o.frustumCulled=!1,this.group.add(o),this.meshes[e]=o,i.forEach((n,r)=>{let i=new B(this.center.x+Math.sin(n.a)*n.r,n.h,this.center.z+Math.cos(n.a)*n.r),a=Math.atan2(this.center.x-i.x,this.center.z-i.z);this.members.push({kind:e,mesh:o,idx:r,pos:i,yaw:a,baseYaw:a,row:n.row,a:n.a,scale:X(.92,1.12)*(t.scale||1),phase:X(0,J),hop:0,hopV:0,stand:0,wave:0,look:0,delay:0})})}let o=this.members.filter(e=>e.kind===`bunny`),s=this.members.filter(e=>e.kind===`bear`),c=new sa(.012,.012,.16,8);c.translate(0,.08,0),this.penMat=new hr({color:16777215,toneMapped:!0}),this.pens=new Bi(c,this.penMat,Math.max(1,o.length)),this.pens.frustumCulled=!1,this.group.add(this.pens);let l=[`#ff8fc0`,`#8ed4ff`,`#c4a6ff`,`#ffb3d9`];o.forEach((e,t)=>{e.pen=t,e.penColor=new H(Xu(l))}),this.penGlow=new _p(Math.max(1,o.length)),this.group.add(this.penGlow.points);let u=hd(.16,.28,5,36),d=uf(new No({roughness:.25,envMap:e.env,envMapIntensity:.8}),.8);this.balloons=new Bi(u,d,Math.max(1,s.length)),this.balloons.frustumCulled=!1;let f=new sa(.003,.003,.36,4);f.translate(0,.18,0),this.strings=new Bi(f,new hr({color:`#ffffff`}),Math.max(1,s.length)),this.strings.frustumCulled=!1;let p=[`#ff8fc0`,`#ffb0d0`,`#ff7fb0`,`#ffc6de`,`#c4a6ff`,`#8ed4ff`];s.forEach((e,t)=>{e.balloon=t,this.balloons.setColorAt(t,new H(Xu(p)))}),this.group.add(this.balloons,this.strings),this.excite=0,this.standTarget=0,this.penLevel=.25,this.waveT=-1,this.waveSpeed=4,this.lookTarget=null,this.cheerT=0,this._m=new V,this._q=new _t,this._s=new B,this._p=new B,this._e=new An,this._c=new H,this._pp=new B,this._tip=new B,this._t2=new B,this.update(0,0)}cheer(e=1,t=2.5){this.cheerT=Math.max(this.cheerT,t),this.excite=Math.max(this.excite,e);for(let e of this.members)e.delay=X(0,.5)}penWave(e=3.5){this.waveT=0,this.waveSpeed=e}update(e,t){this.cheerT=Math.max(0,this.cheerT-e);let n=this.cheerT>0;n||(this.excite=Zu(this.excite,0,.8,e)),this.waveT>=0&&(this.waveT+=e*this.waveSpeed,this.waveT>this.rows+6&&(this.waveT=-1));let r=this._m,i=this._q,a=this._s,o=this._p,s=this._e;for(let c of this.members){c.stand=Zu(c.stand,this.standTarget,3,e),n&&c.delay>0&&(c.delay-=e);let l=n&&c.delay<=0&&(c.kind===`bunny`||Math.random()<.3);c.hop<=0&&c.hopV<=0&&l&&Math.random()<e*(c.kind===`bunny`?5:2)*this.excite&&(c.hopV=X(.8,1.4)*(c.kind===`bunny`?1.2:.7)),c.hopV-=6*e,c.hop+=c.hopV*e,c.hop<0&&(c.hop=0,c.hopV=0);let u=c.baseYaw;if(this.lookTarget){let e=Math.atan2(this.lookTarget.x-c.pos.x,this.lookTarget.z-c.pos.z)-c.baseYaw;for(;e>Math.PI;)e-=J;for(;e<-Math.PI;)e+=J;u+=Y(e,-.6,.6)*.8}c.yaw=Zu(c.yaw,u,4,e);let d=1-(this.calm||0)*.85,f=Math.sin(t*(1.6+this.excite*3)+c.phase)*.012*(1+this.excite*2)*d,p=Math.sin(t*1.3+c.phase)*.05*(1+this.excite*2)*d;o.copy(c.pos),o.y+=c.hop*.25+f+c.stand*.08,s.set(0,c.yaw,p*.5),i.setFromEuler(s);let m=c.scale,h=1+(c.hopV<-.5&&c.hop<.02?-.08:0)+c.stand*.08,g=c.kind===`fairy`&&this.cheerT>0?Math.abs(Math.sin(t*16+c.phase))*.08*this.excite:0;if(a.set(m*(1+g),m*h,m*(1-g*.5)),r.compose(o,i,a),c.mesh.setMatrixAt(c.idx,r),c.pen!==void 0){let e=.1,n=Math.sin(c.yaw),l=Math.cos(c.yaw),u=Math.sin(t*(2+this.excite*6)+c.phase)*(.35+this.excite*.6),d=this._pp.set(o.x+l*e+n*.08,o.y+.2*m,o.z-n*e+l*.08);s.set(0,c.yaw,u),i.setFromEuler(s),r.compose(d,i,a.set(m,m,m)),this.pens.setMatrixAt(c.pen,r);let f=this.penLevel;if(this.waveT>=0){let e=this.waveT-c.row;f=Math.max(f,e>0?.35+1.4*Math.exp(-e*.9)+.4:0)}f+=this.excite*.4,this.pens.setColorAt(c.pen,this._c.copy(c.penColor).multiplyScalar(.8+f*1.4));let p=this._tip.copy(d).add(this._t2.set(-Math.sin(u)*.16*Math.cos(c.yaw),Math.cos(u)*.16*m,Math.sin(u)*.16*Math.sin(c.yaw)));this.penGlow.set(c.pen,p,c.penColor,.12+f*.18,f)}if(c.balloon!==void 0){let e=Math.sin(t*(1.4+this.excite*4)+c.phase)*(.12+this.excite*.45),n=o.x+Math.cos(c.yaw)*.14,l=o.z-Math.sin(c.yaw)*.14,u=o.y+.18*m;s.set(e*.4,c.yaw,e),i.setFromEuler(s);let d=this._pp.set(n,u,l);r.compose(d,i,a.set(1,1,1)),this.strings.setMatrixAt(c.balloon,r);let f=this._tip.set(0,.38,0).applyQuaternion(i).add(d);s.set(0,c.yaw,e*.6),i.setFromEuler(s),r.compose(f,i,a.set(m,m,m)),this.balloons.setMatrixAt(c.balloon,r)}}for(let e of Object.keys(this.meshes))this.meshes[e].instanceMatrix.needsUpdate=!0;this.pens.instanceMatrix.needsUpdate=!0,this.pens.instanceColor&&(this.pens.instanceColor.needsUpdate=!0),this.balloons.instanceMatrix.needsUpdate=!0,this.strings.instanceMatrix.needsUpdate=!0,this.penGlow.flush()}},_p=class{constructor(e){this.n=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e);let t=new kr;t.setAttribute(`position`,new yr(this.pos,3).setUsage(Ve)),t.setAttribute(`aColor`,new yr(this.col,3).setUsage(Ve)),t.setAttribute(`aSize`,new yr(this.size,1).setUsage(Ve)),this.mat=new Zr({uniforms:{uScale:{value:500}},vertexShader:`attribute vec3 aColor; attribute float aSize; uniform float uScale; varying vec3 vC;
        void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); gl_Position = projectionMatrix * mv; gl_PointSize = clamp(aSize * uScale / max(0.1, -mv.z), 0., 128.); vC = aColor; }`,fragmentShader:`varying vec3 vC; void main(){ vec2 p = gl_PointCoord*2.-1.; float d = dot(p,p); float a = exp(-d*5.) + exp(-d*1.6)*0.25; gl_FragColor = vec4(vC*a, 1.); }`,transparent:!0,depthWrite:!1,blending:2}),this.points=new ea(t,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=9}set(e,t,n,r,i){this.pos[e*3]=t.x,this.pos[e*3+1]=t.y,this.pos[e*3+2]=t.z,this.col[e*3]=n.r*i,this.col[e*3+1]=n.g*i,this.col[e*3+2]=n.b*i,this.size[e]=r}flush(){let e=this.points.geometry.attributes;e.position.needsUpdate=!0,e.aColor.needsUpdate=!0,e.aSize.needsUpdate=!0}},vp=class{constructor(e,{width:t=1.3,standH:n=.32,light:r=null}={}){this.group=new G,this.width=t;let i=e.gold(),a=e.lacquer(`#ffd3e4`,{roughness:.15}),o=t*.95;this.cy=n+o*.5;let s=new W(new ld(t*.55,.08,.32,3,.03),a);s.position.y=.04,this.group.add(s);for(let e of[-1,1]){let r=new W(new sa(.025,.03,n+.1,12),i);r.position.set(e*t*.18,n*.5+.05,-.02),r.rotation.z=e*.12,this.group.add(r)}let c=new G;c.position.y=this.cy,this.group.add(c),this.holder=c;let l=new W(hd(t*1.06,.06),a);l.position.z=-.03,l.scale.z=.6,c.add(l);let u=new W(bd(Ed(t*.98,0),()=>t*.028,{tubular:200,radial:10,closeEnds:!1}),i);u.position.z=.012,c.add(u);let d=new W(bd(Ed(t*.88,0),()=>t*.01,{tubular:200,radial:6,closeEnds:!1}),i);d.position.z=.014,c.add(d),this.mat=Pf(),this.mat.uniforms.uFlip.value=0,this.mat.uniforms.uMix.value=1,this.mat.uniforms.uPortalMode.value=1;let f=new W(Ff(t*.86),this.mat);f.position.z=.008,c.add(f),this.surface=f,this.frame=new qn,this.frame.position.set(0,0,.008),c.add(this.frame);let p=fd(360,t*.98),m=[38,80,128,232,280,322],h=[1,2,3,4,5,0];m.forEach((n,r)=>{let i=p[Math.round(n/360*359)],a=rf[h[r]],o=new W(yd(t*.11,.5),e.gem(a.color,{opacity:.9,emissive:.4}));o.position.set(i.x,i.y,.035),c.add(o)});let g=new W(yd(t*.16,.5),e.gem(af,{opacity:.85,emissive:.45})),_=p[0];g.position.set(_.x,_.y+t*.03,.04),c.add(g);let v=new W(_d(.5,.22,.2),i);v.scale.setScalar(t*.1),v.position.set(_.x,_.y+t*.14,.03),c.add(v),this.aura=new ki(new hi({map:Pd(),color:new H(`#ffd6ea`).multiplyScalar(1.2),transparent:!0,opacity:.5,blending:2,depthWrite:!1})),this.aura.scale.setScalar(t*2.4),this.aura.position.z=-.08,c.add(this.aura),this.light=r,this.group.traverse(e=>{e.isMesh&&e!==f&&(e.castShadow=!0)}),this.ripple=.25,this.pulse=0}setPortal(e){this.mat.uniforms.tPortal.value=e}center(e=new B){return this.holder.getWorldPosition(e)}randomSurfacePoint(){let e=X(0,J),t=X(0,this.width*.3);return this.surface.localToWorld(new B(Math.cos(e)*t,Math.sin(e)*t*.9,.02))}screenHit(e,t,n){let r=e.screenOf(this.center()),i=e.screenOf(this.center().add(new B(this.width*.55,0,0))),a=Math.abs(i.x-r.x)*1.15;return Math.abs(t-r.x)<a&&Math.abs(n-r.y)<a*1.05}update(e,t,n){let r=this.mat.uniforms;n&&r.uRes.value.set(n.layout.w*n.pixelRatio,n.layout.h*n.pixelRatio),this.light&&(this.light.color.set(`#ffd6ea`),this.light.distance=3.5,this.center(this.light.position).add(new B(0,0,.5))),this.pulse=Math.max(0,this.pulse-e*.8),r.uTime.value=t,r.uRipple.value=this.ripple+Math.sin(t*1.3)*.08+this.pulse*.5,r.uGlow.value=this.pulse*.25,this.aura.material.opacity=.35+.15*Math.sin(t*2)+this.pulse*.4,this.light&&(this.light.intensity=1.2+this.pulse*2)}},yp={stageY:.45,stageR:2.3,platformY:1.65,doorZ:-4.55,doorW:2.7,entrance:{floorY:2.2,z:10.4}},bp=`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,xp=`uniform vec3 uColor; uniform float uProg; uniform float uBase; uniform float uTime; varying vec2 vUv;
  void main(){
    float head = smoothstep(uProg - 0.25, uProg, vUv.x) * (1.0 - smoothstep(uProg, uProg + 0.02, vUv.x));
    float trail = step(vUv.x, uProg) * 0.35;
    float shimmer = 0.85 + 0.15 * sin(vUv.x * 40.0 - uTime * 6.0);
    vec3 c = uColor * (uBase + (head * 3.0 + trail) * shimmer);
    gl_FragColor = vec4(c, 1.0);
  }`,Sp=`uniform vec3 uColor; uniform float uProg; uniform float uTime; varying vec2 vUv;
  void main(){
    float u = min(vUv.x, 1.0 - vUv.x) * 2.0; // 0 at the top cleft, 1 at the bottom point
    if (u > uProg) discard;
    float head = 1.0 - smoothstep(0.0, 0.12, uProg - u);
    vec3 c = uColor * (1.4 + head * 3.0 + 0.3 * sin(uTime * 5.0 + u * 30.0));
    gl_FragColor = vec4(c, 1.0);
  }`;function Cp(e){let t=new di;t.userData.floorY=yp.stageY,t.background=new H(`#cfeaff`),t.fog=new ui(`#fbeaf3`,30,80);let n=[],r=yp;t.add(new Qo(`#f4f9ff`,`#f7c7d9`,.42));let i=new us(`#fff4e6`,1.45);i.position.set(3,11,6),i.target.position.set(0,.4,-.6),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),Object.assign(i.shadow.camera,{left:-4.5,right:4.5,top:4.5,bottom:-4.5,near:4,far:22}),i.shadow.bias=-6e-4,i.shadow.normalBias=.02,t.add(i,i.target);let a=new us(`#ffe8f2`,.25);a.position.set(-3,4,9),t.add(a);let o=new hr({map:zd(`theater`),side:1,fog:!1}),s=new W(new K(70,32,16),o);t.add(s);let c=new W(new K(14,48,16,0,J,0,Math.PI/2),new No({color:`#e8f6ff`,transparent:!0,opacity:.1,roughness:.05,envMap:e.env,envMapIntensity:1.2,side:1,depthWrite:!1}));c.position.y=3,t.add(c);let l=e.gold();for(let e=0;e<14;e++){let n=e/14*J,r=[];for(let e=0;e<=16;e++){let t=e/16*(Math.PI/2);r.push(new B(Math.cos(t)*Math.sin(n)*14*.995,3+Math.sin(t)*14*.995,Math.cos(t)*Math.cos(n)*14*.995))}t.add(new W(bd(new _a(r),()=>.07,{tubular:32,radial:6}),l))}let u=[.35,.75,1.15];for(let e of u){let n=new W(new jo(Math.cos(e)*14*.99,.06,6,96),l);n.rotation.x=Math.PI/2,n.position.y=3+Math.sin(e)*14*.99,t.add(n)}{let e=new Bi(_d(.5,.22,.2),l,14*u.length+1),n=new V,r=0;for(let t of u)for(let i=0;i<14;i++){let a=i/14*J,o=new B(Math.cos(t)*Math.sin(a)*14*.97,3+Math.sin(t)*14*.97,Math.cos(t)*Math.cos(a)*14*.97),s=new _t().setFromUnitVectors(new B(0,0,1),o.clone().sub(new B(0,3,0)).normalize().negate());n.compose(o,s,new B(.55,.55,.55)),e.setMatrixAt(r++,n)}n.compose(new B(0,16.58,0),new _t().setFromEuler(new An(Math.PI/2,0,0)),new B(1.1,1.1,1.1)),e.setMatrixAt(r++,n),t.add(e)}let d=new hr({map:Fd(),color:new H(`#fff4e6`).multiplyScalar(.16),transparent:!0,blending:2,depthWrite:!1,side:2,fog:!1}),f=[];for(let[e,n,r,i]of[[-1.6,-.6,1.4,.18],[1.2,.3,1.1,-.12],[.1,-1.6,1.8,.05],[2.6,-1.4,.9,-.2]]){let a=new Do(r,12);a.translate(0,-6,0);let o=new W(a,d);o.position.set(e*1.6,12.5,n*1.6),o.rotation.z=i,o.renderOrder=4,t.add(o),f.push({m:o,ph:X(0,6)})}n.push({update:(e,t,n)=>{for(let e of f){if(n){let t=n.position.x-e.m.position.x,r=n.position.z-e.m.position.z;e.m.rotation.y=Math.atan2(t,r)}e.m.scale.x=1+Math.sin(t*.5+e.ph)*.15}}});let p=Wd().clone();p.needsUpdate=!0,p.repeat.set(7,7);let m=new W(new oa(16,64),df(new No({map:p,color:`#f7eef2`,roughness:.16,envMap:e.env,envMapIntensity:.5}),`#ffffff`,.12));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,t.add(m);let h=e.lacquer(`#fffafd`,{roughness:.22}),g=e.lacquer(`#ffc6dc`,{roughness:.25}),_=new W(new sa(r.stageR,r.stageR+.08,r.stageY,72),h);_.position.y=r.stageY/2,_.receiveShadow=!0,t.add(_);let v=new W(new oa(r.stageR,72),df(new No({map:Gd(),roughness:.2,envMap:e.env,envMapIntensity:.7}),`#ffffff`,.15));v.rotation.x=-Math.PI/2,v.position.y=r.stageY+.002,v.receiveShadow=!0,t.add(v);let y=new W(new jo(r.stageR+.01,.04,8,96),l);y.rotation.x=Math.PI/2,y.position.y=r.stageY,t.add(y);let b=new W(new sa(r.stageR+.085,r.stageR+.085,.12,72,1,!0),g);b.position.y=r.stageY*.45,t.add(b);{let e=new Bi(hd(.12,.3,4,32),l,28),n=new V;for(let t=0;t<28;t++){let i=t/28*J;n.compose(new B(Math.sin(i)*(r.stageR+.13),r.stageY*.45,Math.cos(i)*(r.stageR+.13)),new _t().setFromEuler(new An(0,i,0)),new B(1,1,1)),e.setMatrixAt(t,n)}t.add(e)}for(let[e,n]of[[r.stageR+.45,.3],[r.stageR+.85,.15]]){let r=new W(new sa(e,e,n,48,1,!1,-.75,1.5),h);r.position.y=n/2,r.receiveShadow=!0,t.add(r)}for(let e=0;e<6;e++){let n=r.stageY+.2*(e+1),i=-r.stageR+.1-e*.32,a=2.9-e*.05,o=new W(new ld(a,n,.34,2,.02),h);o.position.set(0,n/2,i-.17),o.receiveShadow=!0,o.castShadow=!0,t.add(o);let s=new W(new sa(.012,.012,a,6),l);s.rotation.z=Math.PI/2,s.position.set(0,n,i),t.add(s)}let x=-r.stageR+.1-1.92,S=new W(new ld(5,r.platformY,1.6,2,.03),h);S.position.set(0,r.platformY/2,x-.8),S.receiveShadow=!0,t.add(S);for(let i of[-1,1]){let a=new W(new sa(.16,.2,3.4,20),h);a.position.set(i*2.1,r.platformY+1.7,r.doorZ-.1),t.add(a);let o=new W(hd(.6,.3),e.gem(af,{emissive:.5}));o.position.set(i*2.1,r.platformY+3.75,r.doorZ-.1),t.add(o),n.push({update:(e,t)=>{o.rotation.y=Math.sin(t*.8+i)*.4}})}let C=new G,w=r.platformY+r.doorW*.5;C.position.set(0,w,r.doorZ),t.add(C);let T=new W(hd(r.doorW*1.18,.07),h);T.position.z=-.12,T.scale.z=.6,C.add(T);let E=new W(bd(Ed(r.doorW*1.02,0),()=>.06,{tubular:240,radial:10,closeEnds:!1}),l);E.position.z=.03,C.add(E);let D=Pf();D.uniforms.uFlip.value=0,D.uniforms.uMix.value=1,D.uniforms.uPortalMode.value=1,D.uniforms.uGlow.value=.9,D.uniforms.uGlowColor.value.set(`#ffffff`).multiplyScalar(1.2);let O=new W(Ff(r.doorW*.97),D);O.position.z=0,O.visible=!1,C.add(O);let k=new qn;k.position.set(0,0,0),C.add(k);let A=new K(1,12,8);A.scale(.085,.13,.02),A.translate(0,-.08,0);let j=df(new No({roughness:.35,envMap:e.env,envMapIntensity:.6}),`#ffffff`,.4),ee=fd(200,r.doorW*.95),M=(e,t)=>{let n=!1;for(let r=0,i=ee.length-1;r<ee.length;i=r++){let a=ee[r],o=ee[i];a.y>t!=o.y>t&&e<(o.x-a.x)*(t-a.y)/(o.y-a.y)+a.x&&(n=!n)}return n},te=[];for(let e=1.4;e>-1.6;e-=.11){let t=Math.round(e/.11);for(let n=-1.5;n<1.5;n+=.13){let r=n+(t%2?.065:0);M(r,e-.04)&&te.push({x:r,y:e,z:.02+(1.4-e)*.004,d:Math.hypot(r,e-.05)})}}let N=new Bi(A,j,te.length),P=[`#ffb3cf`,`#ff9cc4`,`#ffc6dc`,`#ffa8c9`,`#ffd3e4`];te.forEach((e,t)=>{e.rot=X(-.12,.12),N.setColorAt(t,new H(Xu(P)).lerp(new H(`#ffffff`),Y(.35-e.d*.2,0,.35)))}),N.castShadow=!0,C.add(N);let ne=new G;ne.position.set(0,.05,.08),C.add(ne);let re=new W(bd(Ed(.26,0),()=>.018,{tubular:90,radial:8,closeEnds:!1}),l);ne.add(re);let ie=new W(Ff(.22),new hr({color:`#b04a7c`}));ie.position.z=-.005,ne.add(ie);for(let e of[-1,1])for(let t=0;t<3;t++){let n=new W(new K(1,10,8),t===0?h:l);n.scale.set(.08-t*.016,.022,.01),n.position.set(e*(.16+t*.012),.02-t*.028,0),n.rotation.z=e*(.6-t*.35),ne.add(n)}let ae=new ki(new hi({map:Pd(),color:new H(`#fff0b8`),transparent:!0,opacity:0,blending:2,depthWrite:!1}));ae.scale.setScalar(.9),ae.position.z=.05,ne.add(ae);let oe=new Zr({vertexShader:bp,fragmentShader:Sp,uniforms:{uColor:{value:new H(`#ffd98a`)},uProg:{value:0},uTime:{value:0}}}),se=new W(bd(Ed(r.doorW*1.02,0),()=>.075,{tubular:240,radial:8,closeEnds:!1}),oe);se.position.z=.04,C.add(se);let ce=new ki(new hi({map:Pd(),color:new H(`#ffffff`),transparent:!0,opacity:0,blending:2,depthWrite:!1}));ce.scale.set(7,7,1),ce.position.z=.4,C.add(ce);let F={open:0,featherT:-1},le=new V,ue=new _t,de=new An,fe=new B,pe=new B,me=new B,I=e=>{let t=ue;te.forEach((n,r)=>{let i=F.featherT<0?0:Y((F.featherT-n.d*.35)/.6),a=Z.inOutCubic(i),o=Math.sin(e*2+n.d*3)*.04*(1-a);t.setFromEuler(de.set(-a*1.4+o,a*Math.sign(n.x||1)*.8,n.rot+a*Math.sign(n.x||1)*1.2));let s=fe.set(n.x,n.y,0).normalize(),c=pe.set(n.x,n.y,n.z+a*.4).addScaledVector(s,a*1.2),l=1-a*.9;le.compose(c,t,me.setScalar(l)),N.setMatrixAt(r,le)}),N.instanceMatrix.needsUpdate=!0};I(0);let he=0;n.push({update:(e,t)=>{oe.uniforms.uTime.value=t,F.featherT>=0&&F.featherT<3?(F.featherT+=e,I(t)):he++&1||I(t)}});let ge=new W(new jo(6.3,.14,12,80,Math.PI),l);ge.position.set(0,.8,-1.8),t.add(ge);let _e=new W(hd(1,.25),e.gem(af,{emissive:.5}));_e.position.set(0,7.15,-1.8),t.add(_e);let L=Bd(`#ff9fc8`,`theater`).clone();L.needsUpdate=!0,L.repeat.set(3,6);let ve=df(new No({map:L,roughness:.55,side:2,envMap:e.env,envMapIntensity:.4}),`#ffe0ee`,.35),R=[];for(let n of[-1,1]){let r=new Do(2.6,7.2,30,30),i=r.attributes.position.array.slice(),a=new W(r,ve);a.position.set(n*4.9,3.6,-1.9),a.rotation.y=-n*.35,a.castShadow=!1,t.add(a),R.push({m:a,base:i,sgn:n});let o=new W(new jo(.22,.06,8,24),l);o.position.set(n*5.25,2.3,-1.6),o.scale.set(1.4,.5,1),t.add(o);let s=new W(hd(.4,.3),e.gem(af,{emissive:.4}));s.position.set(n*5.2,2.3,-1.45),t.add(s)}let ye=e=>{for(let t of R){let n=t.m.geometry.attributes.position,r=t.base;for(let i=0;i<n.count;i++){let a=r[i*3],o=r[i*3+1],s=(3.6-o)/7.2,c=1-.6*Math.exp(-(((s-.82)/.12)**2)),l=a*c+t.sgn*(1-c)*.5,u=Math.sin(a/2.6*Math.PI*9)*.14*(.5+.5*c),d=Math.sin(e*.7+s*2+t.sgn)*.05*s;n.setXYZ(i,l,o,u+d)}n.needsUpdate=!0,t.m.geometry.computeVertexNormals()}};ye(0),n.push({update:(e,t)=>ye(t),every:3});let be=e.matte(`#fff5f9`,{roughness:.7}),xe=new W(new sa(10,10,9,64,1,!0,Math.PI*.62,Math.PI*.76),be);xe.position.y=4.5,xe.material.side=1,t.add(xe);for(let e=0;e<9;e++){let n=Math.PI*.64+e/8*Math.PI*.72,r=new W(new sa(.18,.2,9,12),g);r.position.set(Math.sin(n)*9.8,4.5,Math.cos(n)*9.8),t.add(r)}let Se=e.lacquer(`#fff0f6`,{roughness:.3}),Ce=e.lacquer(`#ffc0d8`,{roughness:.3}),we=4.3,Te=.75,Ee=.12,De=.3;for(let e=0;e<7;e++){let n=we+e*Te-Te*.5,r=n+Te,i=Ee+e*De;for(let[a,o]of[[-2.3,4.6]]){let s=new W(new Eo([new z(n,0),new z(r,0),new z(r,i),new z(n,i),new z(n,0)],48,a,o),e%2?Se:Ce);s.receiveShadow=!0,t.add(s)}}let Oe=r.entrance,ke=new W(new ld(3.2,Oe.floorY,2.4,2,.04),h);ke.position.set(0,Oe.floorY/2,Oe.z+.2),t.add(ke);let Ae=new vp(e,{width:1.3});Ae.group.position.set(0,Oe.floorY,Oe.z),Ae.mat.uniforms.uMix.value=0,Ae.mat.uniforms.uHasView.value=0,Ae.mat.uniforms.uGlow.value=.6,t.add(Ae.group);let je=new qn;je.position.set(0,Oe.floorY+Ae.cy,Oe.z+.008),t.add(je);let Me=new gp(e,{center:new B(0,0,0),rows:7,r0:we,dr:Te,h0:Ee,dh:De,a0:-2.2,a1:2.2,gap:0,gapAt:0,spacing:.56});t.add(Me.group);let Ne=[];{let r=new Bi(_d(.5,.22,.2),uf(new No({roughness:.18,metalness:.8,envMap:e.env,envMapIntensity:1.6,flatShading:!0}),.6),260),i=[`#ffe9a8`,`#fff6d8`,`#ffd0e4`,`#d6ecff`,`#e8dcff`];for(let e=0;e<260;e++){let t;do{let e=X(0,J),n=Math.sqrt(Math.random())*11;t=new B(Math.sin(e)*n,X(5.2,11.5),Math.cos(e)*n)}while(t.y>3+Math.sqrt(Math.max(0,196-t.x*t.x-t.z*t.z))-.8||t.z>3&&t.y<7);Ne.push({p:t,s:X(.18,.42),ph:X(0,J),spin:X(.3,.9)*(Math.random()<.5?-1:1)}),r.setColorAt(e,new H(Xu(i)))}t.add(r);let a=new _t,o=new An,s=new B,c=new B;n.push({update:(e,t)=>{Ne.forEach((e,n)=>{e.hidden?(le.makeScale(0,0,0),r.setMatrixAt(n,le)):(a.setFromEuler(o.set(0,t*e.spin+e.ph,Math.sin(t+e.ph)*.15)),le.compose(s.copy(e.p).setY(e.p.y+Math.sin(t*.8+e.ph)*.06),a,c.setScalar(e.s)),r.setMatrixAt(n,le))}),r.instanceMatrix.needsUpdate=!0},every:2})}let Pe=new G,Fe=new W(hd(1.15,.3),e.gem(`#ffb3d4`,{opacity:.82,emissive:.6,flat:!1}));Pe.add(Fe);let Ie=new ki(new hi({map:Pd(),color:new H(`#ffc6de`),transparent:!0,opacity:.5,blending:2,depthWrite:!1}));Ie.scale.setScalar(2.6),Pe.add(Ie),Pe.position.set(0,2.25,-1.1),Pe.scale.setScalar(.72),t.add(Pe);let Le={x:0,v:0,home:0},Re=[],ze=new ko(new Ra(pd(5,.2,.09)));ze.rotateX(-Math.PI/2);for(let e=0;e<5;e++){let n=e/5*J+Math.PI/5,i=new B(Math.sin(n)*1.3,r.stageY+.006,Math.cos(n)*1.3),a=new W(ze,new hr({color:new H(`#f6d9a8`),transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}));a.position.copy(i),a.rotation.y=-n,a.renderOrder=2,t.add(a);let o=new W(new Oo(.26,.29,40),new hr({color:`#f6d9a8`,transparent:!0,opacity:.7,depthWrite:!1}));o.rotation.x=-Math.PI/2,o.position.copy(i).add(new B(0,.001,0)),t.add(o),Re.push({i:e,pos:i,mesh:a,ring:o,lit:0,litT:0,pulse:0})}let Be=[];for(let e=0;e<5;e++){let n=Re[e].pos,i=Re[(e+2)%5].pos,a=new Do(1,.06);a.rotateX(-Math.PI/2);let o=new W(a,new hr({color:new H(`#ffe7a8`).multiplyScalar(2.2),transparent:!0,opacity:0,depthWrite:!1,blending:2})),s=n.clone().add(i).multiplyScalar(.5);o.position.copy(s).setY(r.stageY+.008),o.scale.x=n.distanceTo(i),o.rotation.y=-Math.atan2(i.z-n.z,i.x-n.x),t.add(o),Be.push({a:e,b:(e+2)%5,mesh:o,t:0})}let Ve=[],He=n=>{let r=new G,i=new W(new sa(.2,.24,.42,28),h);i.position.y=.21,i.castShadow=!0,r.add(i);let a=new W(new jo(.205,.022,8,32),l);a.rotation.x=Math.PI/2,a.position.y=.42,r.add(a);let o=a.clone();o.position.y=.02,o.scale.setScalar(1.17),r.add(o);let s=new G;s.position.y=.6,r.add(s);let c;if(n===`heart`)c=new W(hd(.42,.32),e.gem(`#ff8fc0`,{emissive:.5,flat:!1}));else if(n===`star`)c=new W(gd(.24,.11,.08),e.gem(`#ffe27a`,{emissive:.5,flat:!1}));else{c=new G;let t=e.satin(`#c4a6ff`),n=new W(Cd(.2,.17,.08),t);n.rotation.z=.25;let r=new W(Cd(.2,.17,.08),t);r.rotation.set(0,Math.PI,.25);let i=new W(new K(.05,12,10),t);c.add(n,r,i)}c.castShadow=!0,s.add(c);let u=new ki(new hi({map:Pd(),color:new H(n===`heart`?`#ff9cc6`:n===`star`?`#ffe7a0`:`#d6c2ff`),transparent:!0,opacity:.25,blending:2,depthWrite:!1}));u.scale.setScalar(.9),s.add(u),t.add(r);let d=new Zr({vertexShader:bp,fragmentShader:xp,uniforms:{uColor:{value:new H(n===`heart`?`#ff8fc0`:n===`star`?`#ffd86e`:`#b996ff`)},uProg:{value:0},uBase:{value:.35},uTime:{value:0}}}),f={kind:n,group:r,btn:s,shape:c,glow:u,press:new ed(0,260,14),grooveMat:d,groove:null,flash:0,count:0,angle:0,wobble:new ed(0,200,8)};return Ve.push(f),f};He(`heart`),He(`star`),He(`ribbon`);let Ue=new B(0,r.stageY+.004,-.2),We=e=>{let n=[Ju(-.72,-1.05,e),Ju(Math.PI-.5,Math.PI-.62,e),Ju(.72,1.05,e)],i=[Ju(1.72,1.95,e),1.75,Ju(1.72,1.95,e)];Ve.forEach((e,a)=>{let o=i[a];e.angle=n[a],e.group.position.set(Math.sin(n[a])*o,r.stageY,Math.cos(n[a])*o),e.group.rotation.y=n[a];let s=e.group.position.clone().setY(r.stageY+.004),c=s.clone().lerp(Ue,.5);c.x+=.35*Math.sign(Math.sin(n[a]));let l=new Na(s,c,Ue.clone()),u=bd(l,()=>.022,{tubular:40,radial:4,closeEnds:!1,flatten:.3});e.groove&&(t.remove(e.groove),e.groove.geometry.dispose()),e.groove=new W(u,e.grooveMat),e.groove.renderOrder=2,e.curve=l,t.add(e.groove)})};We(0);let Ge=[];{let n=_d(.5,.22,.2);for(let r=0;r<10;r++){let r=new W(n,uf(new No({color:Xu([`#ffe9a8`,`#fff2c8`,`#ffd0e4`]),roughness:.15,metalness:.75,envMap:e.env,envMapIntensity:1.8,flatShading:!0,emissive:`#ffe7a0`,emissiveIntensity:.2}),1));r.visible=!1,r.castShadow=!0;let i=new W(new sa(.004,.004,1,4),new hr({color:new H(`#fff0c0`).multiplyScalar(1.6),transparent:!0,opacity:.7}));i.visible=!1,t.add(r,i),Ge.push({m:r,thread:i,active:!1,y:0,top:0,target:0,v:0,x:0,z:0,bounce:new ed(0,220,6),spin:X(.5,1)})}}return{scene:t,entranceFrame:je,doorFrame:k,door:C,portal:O,portalMat:D,keyhole:ne,kGlow:ae,tracer:se,traceMat:oe,doorLight:ce,doorState:F,entrance:Ae,audience:Me,devices:Ve,marks:Re,pentaLines:Be,stageHeart:Pe,shState:Le,shMesh:Fe,shGlow:Ie,bigStars:Ge,hanging:Ne,layoutDevices:We,sun:i,placePreviewCamera(e){e.fov=58,e.position.set(0,3.4,9.6),e.lookAt(0,2,-1.5),e.updateProjectionMatrix()},update(e,t,r){for(let i of n)i.frame=(i.frame||0)+1,!(i.every&&i.frame%i.every)&&i.update(e*(i.every||1),t,r);Me.update(e,t),Ae.update(e,t),Le.v+=(Le.home-Le.x)*3*e,Le.v*=Math.exp(-1.5*e),Le.x+=Le.v*e,Le.x=Y(Le.x,-2.6,2.6),Pe.position.x=Le.x,Pe.position.y=2.25+Math.sin(t*1.2)*.08,Pe.rotation.y=Math.sin(t*.7)*.35-Le.v*.15,Pe.rotation.z=-Le.v*.12;for(let n of Ve)n.press.update(e),n.btn.position.y=.6-n.press.x*.1,n.btn.rotation.y=t*.6+n.angle,n.btn.rotation.z=n.wobble.update(e)*.15,n.flash=Math.max(0,n.flash-e*1.5),n.glow.material.opacity=.18+n.flash*.8+Math.sin(t*2+n.angle*3)*.05,n.grooveMat.uniforms.uTime.value=t;for(let n of Re){n.pulse=Math.max(0,n.pulse-e*1.2);let r=n.lit,i=r?2.2+Math.sin(t*3+n.i)*.3:.9+.15*Math.sin(t*2+n.i);n.mesh.material.color.set(r?`#ffe28a`:`#f6d9a8`).multiplyScalar(i+n.pulse*2),n.ring.material.color.set(`#ffe7a8`).multiplyScalar(r?1.8:.9),n.mesh.scale.setScalar(1+n.pulse*.4)}for(let n of Be){let r=Re[n.a].lit&&Re[n.b].lit;n.t=Zu(n.t,+!!r,3,e),n.mesh.material.opacity=n.t*(.8+.2*Math.sin(t*4+n.a))}for(let t of Ge){if(!t.active)continue;t.v+=(t.target-t.y)*18*e,t.v*=Math.exp(-3*e),t.y+=t.v*e;let n=t.bounce.update(e);t.m.position.set(t.x,t.y+n*.15,t.z),t.m.rotation.y+=e*t.spin,t.m.scale.setScalar(.42*(1+n*.2)),t.thread.position.set(t.x,(t.top+t.y)/2+.2,t.z),t.thread.scale.y=Math.max(.01,t.top-t.y-.2)}}}}var wp={entranceZ:9.6,tiles:[8.3,7.1,5.9,4.7,3.5,2.2,0],heartCenter:new B(0,3.5,-.6),heartW:2.9,mirrorZ:-4.6};function Tp(e){let t=new di;t.userData.floorY=0,t.background=new H(`#fbf1f6`),t.fog=new ui(`#fbf1f6`,6,15);let n=wp;t.add(new Qo(`#ffffff`,`#f6d2e0`,.5));let r=new us(`#fff6ee`,1.3);r.position.set(2.5,9,7),r.target.position.set(0,0,0),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),Object.assign(r.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:3,far:22}),r.shadow.bias=-6e-4,r.shadow.normalBias=.02,t.add(r,r.target);let i=new W(new oa(30,72),df(new No({color:`#f6eaf0`,roughness:.14,envMap:e.env,envMapIntensity:.55}),`#ffffff`,.12));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,t.add(i);let a=new K(19,40,16,0,J,0,Math.PI/2);{let e=a.attributes.position,t=[],n=new H(`#fffafd`),r=new H(`#f4dfea`);for(let i=0;i<e.count;i++){let a=r.clone().lerp(n,(e.getY(i)/19)**.6);t.push(a.r,a.g,a.b)}a.setAttribute(`color`,new U(t,3))}let o=new W(a,new hr({vertexColors:!0,side:1}));t.add(o);let s=new W(new Oo(3.2,3.32,96),new hr({color:`#f6dcc0`,transparent:!0,opacity:.8}));s.rotation.x=-Math.PI/2,s.position.y=.003,t.add(s);let c=e.gold(),l=new W(bd(Ed(2.8,0),()=>.07,{tubular:220,radial:10,closeEnds:!1}),c);l.position.set(0,1.4,n.entranceZ),t.add(l);let u=new qn;u.position.set(0,1.35,n.entranceZ),t.add(u);let d=n.tiles.map((e,r)=>{let i=Ff(r===n.tiles.length-1?1.6:.62);i.rotateX(-Math.PI/2);let a=new W(i,new hr({color:new H(`#fbe9f0`),transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return a.position.set(0,.004,e),a.rotation.y=Math.PI,a.renderOrder=2,t.add(a),{m:a,z:e,lit:0,pulse:0}}),f=[];for(let n=0;n<14;n++){let r=Math.PI+(n-6.5)*.36,i=17.5,a=new W(hd(X(1.6,2.6),.26),e.gem(Xu([af,`#ffb3d4`,`#ff8fc0`,`#ffc6de`,`#c4a6ff`,`#8ed4ff`]),{emissive:.6,flat:!1}));a.position.set(Math.sin(r)*i,X(4.5,8.5),Math.cos(r)*i),a.lookAt(0,a.position.y*.7,0),a.scale.setScalar(.001),a.visible=!1,t.add(a),f.push({m:a,t:-1})}let p=[],m=new Bi(_d(.5,.22,.2),uf(new No({roughness:.15,metalness:.8,envMap:e.env,envMapIntensity:1.7,flatShading:!0,emissive:`#fff0c0`,emissiveIntensity:.25}),.8),150);m.frustumCulled=!1;let h=[`#ffe9a8`,`#fff6d8`,`#ffd0e4`,`#d6ecff`,`#e8dcff`];for(let e=0;e<150;e++){let t=X(0,J),n=X(.35,1.35),r=new B(Math.cos(n)*Math.sin(t)*17,Math.sin(n)*17,Math.cos(n)*Math.cos(t)*17);p.push({p:r,s:X(.35,.8),t:-1,ph:X(0,J)}),m.setColorAt(e,new H(Xu(h)))}t.add(m);let g=[`#ff9cc6`,`#ffc58f`,`#ffe27a`,`#92e8c6`,`#8ed4ff`,`#c4a6ff`].map((e,n)=>{let r=1+n*.36,i=new W(new Oo(r,r+.24,96),new hr({color:new H(e).multiplyScalar(1.1),transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return i.rotation.x=-Math.PI/2,i.position.y=.002,t.add(i),{m:i,t:-1}}),_=new gp(e,{center:new B(0,0,0),rows:5,r0:8.6,dr:.9,h0:.25,dh:.4,a0:-Math.PI+.05,a1:Math.PI-.05,gap:.34,gapAt:0,spacing:.7,scale:1.3});t.add(_.group);let v=e.lacquer(`#fff3f8`,{roughness:.3});for(let e=0;e<5;e++){let n=8.6+e*.9-.45,r=n+.9,i=.25+e*.4;for(let[e,a]of[[.34,Math.PI*2-.68]]){let o=new Eo([new z(n,0),new z(r,0),new z(r,i),new z(n,i),new z(n,0)],72,e,a);t.add(new W(o,v))}}let y=new G;y.position.copy(n.heartCenter),t.add(y);let b=[];for(let t of[-1,1]){let r=new G;y.add(r);let i=e.gem(`#ffb8d8`,{opacity:.9,emissive:.8,flat:!1});i.clippingPlanes=[new Wi];let a=new W(hd(n.heartW,.24),i);r.add(a),r.visible=!1,b.push({side:t,pivot:r,mesh:a,plane:i.clippingPlanes[0]})}let x=new ki(new hi({map:Pd(),color:new H(`#ffd0e6`),transparent:!0,opacity:0,blending:2,depthWrite:!1}));x.scale.setScalar(n.heartW*2.2),y.add(x);let S=[];{let e=fd(240,n.heartW*.98),t=(t,n)=>{let r=!1;for(let i=0,a=e.length-1;i<e.length;a=i++){let o=e[i],s=e[a];o.y>n!=s.y>n&&t<(s.x-o.x)*(n-o.y)/(s.y-o.y)+o.x&&(r=!r)}return r};for(let t=0;t<120;t++){let n=e[t*2];S.push(new B(n.x,n.y,.15))}let r=0;for(;r<380;){let e=X(-n.heartW/2,n.heartW/2),i=X(-n.heartW*.55,n.heartW*.45);t(e,i)&&(S.push(new B(e,i,X(-.25,.3))),r++)}}let C=new _p(S.length);y.add(C.points);let w=S.map(e=>({slot:e,t:-1,from:new B,ctrl:new B,col:new H(Xu([`#ffffff`,`#ffd6ea`,`#fff2b8`,`#ffc6de`,`#e8dcff`])),dur:1})),T=new B,E=new V,D=new _t,O=new An,k=new B,A=new vp(e,{width:3.4,standH:.5});A.group.position.set(0,-6,n.mirrorZ),A.mat.uniforms.uPortalMode.value=2,A.mat.uniforms.uMix.value=1,A.ripple=0,A.group.visible=!1,t.add(A.group);let j={formed:0,open:0,mirrorUp:0,fogFar:13};return{scene:t,entranceFrame:u,tiles:d,wallHearts:f,ceilStars:p,rings:g,audience:_,heartGroup:y,halves:b,heartGlow:x,slots:S,motes:C,moteState:w,mirror:A,state:j,slotWorld(e,t=new B){return y.localToWorld(t.copy(S[e]))},update(e,r,i){_.update(e,r),t.fog.far=Zu(t.fog.far,j.fogFar,1.2,e),t.fog.near=Math.min(t.fog.far-4,Zu(t.fog.near,j.fogFar>20?18:5,1.2,e));for(let t of d){t.pulse=Math.max(0,t.pulse-e);let n=t.lit?new H(`#ffb8d6`).multiplyScalar(1.6+t.pulse*2+Math.sin(r*3+t.z)*.2):new H(`#fbe9f0`).multiplyScalar(1+t.pulse*1.2);t.m.material.color.copy(n),t.m.scale.setScalar(1+t.pulse*.15)}for(let t of f)t.t<0||(t.t+=e,t.m.visible=!0,t.m.scale.setScalar(Math.max(.001,Z.outBack(Y(t.t/.8)))),t.m.rotation.z=Math.sin(r+t.t)*.08);let a=E,o=D,s=O,c=k;p.forEach((t,n)=>{t.t>=0&&(t.t+=e);let i=t.t<0?0:Z.outBack(Y(t.t/.7));o.setFromEuler(s.set(0,r*.5+t.ph,0)),a.compose(t.p,o,c.setScalar(Math.max(1e-4,t.s*i*(1+.1*Math.sin(r*3+t.ph))))),m.setMatrixAt(n,a)}),m.instanceMatrix.needsUpdate=!0;for(let t of g)t.t<0||(t.t+=e,t.m.material.opacity=Y(t.t/.6)*(.7+.15*Math.sin(r*2+t.t)),t.m.scale.setScalar(.6+.4*Z.outBack(Y(t.t/.8))));let l=0;w.forEach((t,n)=>{if(t.t<0){C.set(n,T.set(0,-100,0),t.col,0,0);return}t.t+=e/t.dur;let i=Y(t.t);i>=1&&l++;let a=Z.inOutSine(i);T.set(0,0,0).addScaledVector(t.from,(1-a)*(1-a)).addScaledVector(t.ctrl,2*(1-a)*a).addScaledVector(t.slot,a*a),i>=1&&(T.y+=Math.sin(r*2+n)*.02);let o=.7+.3*Math.sin(r*5+n*1.3);C.set(n,T,t.col,(i>=1?.07:.1)*(1-j.formed*.4),(i>=1?1.6:2.4)*o*(1-j.open*.8))}),C.flush(),j.placed=l;for(let e of b){e.pivot.updateMatrixWorld();let t=new B(e.side,0,0).transformDirection(e.pivot.matrixWorld),n=new B().setFromMatrixPosition(e.pivot.matrixWorld);e.plane.setFromNormalAndCoplanarPoint(t.negate(),n).negate()}y.position.y=n.heartCenter.y+Math.sin(r*.9)*.05*j.formed,A.update(e,r)}}}var Ep=t({AudioEngine:()=>Np,audio:()=>$}),Dp=e=>440*2**((e-69)/12),Op=[[[64,2],[67,1]],[[72,2],[71,1]],[[69,1],[67,1],[64,1]],[[67,3]],[[65,2],[69,1]],[[74,2],[72,1]],[[71,1],[69,1],[71,1]],[[67,3]],[[64,2],[67,1]],[[72,2],[76,1]],[[74,1],[72,1],[69,1]],[[67,3]],[[69,1],[72,1],[77,1]],[[76,2],[74,1]],[[72,1],[74,1],[71,1]],[[72,3]]],kp=[`C`,`Am`,`F`,`G`,`F`,`Dm`,`G`,`G`,`C`,`Am`,`Dm`,`Em`,`F`,`C`,`G7`,`C`],Ap={C:[48,52,55],Am:[45,48,52],F:[41,45,48],G:[43,47,50],Dm:[38,41,45],Em:[40,43,47],G7:[43,47,50,53]},jp=[60,62,64,67,69],Mp={silent:{},room:{box:.55,boxBass:.35},compact:{box:.6,boxBass:.35,celArp:.3,pad:.18},transform:{box:.55,boxBass:.3,celArp:.4,pad:.3,bell:.3},wand:{box:.5,celArp:.35,pad:.3,harp:.35,pizz:.35,bell:.25},mirror:{box:.35,celArp:.2,pad:.2,harp:.5,pizz:.5,strings:.45,glock:.45,far:1},theater:{glock:.5,harp:.45,pizz:.5,strings:.5,celArp:.25,bell:.2,box:.15},finaleWalk:{pad:.45,celArp:.45,harp:.25,bell:.2},hush:{hush:.6},bloom:{glock:.6,harp:.55,pizz:.55,strings:.65,celArp:.35,bell:.45,box:.2,pad:.3},dance:{glock:.6,harp:.5,pizz:.6,strings:.6,celArp:.4,bell:.35,box:.25,pad:.25,shaker:.3}},Np=class e{constructor(){this.ctx=null,this.ready=!1,this.stage=`silent`,this.vol={},this.target={},this.beat=0,this.tempo=96,this.nextTime=0,this.muted=!1,this.chordIndex=0}unlock(){if(this.ctx){this.ctx.state!==`running`&&this.ctx.resume().catch(()=>{});return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;try{navigator.audioSession&&(navigator.audioSession.type=`playback`)}catch{}let t=new e({latencyHint:`interactive`});this._build(t);let n=t.createBuffer(1,1,t.sampleRate),r=t.createBufferSource();r.buffer=n,r.connect(t.destination),r.start(0),this._timer=setInterval(()=>this._schedule(),30),document.addEventListener(`visibilitychange`,()=>{this.ctx&&(document.hidden?this.ctx.suspend().catch(()=>{}):this.ctx.resume().catch(()=>{}))})}_build(e){this.ctx=e;let t=e.createDynamicsCompressor();t.threshold.value=-16,t.knee.value=18,t.ratio.value=3,t.attack.value=.008,t.release.value=.25,this.master=e.createGain(),this.master.gain.value=0,this.master.gain.setTargetAtTime(.85,e.currentTime,.4);let n=e.createBiquadFilter();n.type=`highshelf`,n.frequency.value=7e3,n.gain.value=-6,this.master.connect(n).connect(t).connect(e.destination),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(3),this.reverbGain=e.createGain(),this.reverbGain.gain.value=.42,this.reverb.connect(this.reverbGain).connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.7,this.farFilter=e.createBiquadFilter(),this.farFilter.type=`lowpass`,this.farFilter.frequency.value=18e3,this.farFilter.Q.value=.4,this.musicBus.connect(this.farFilter),this.farFilter.connect(this.master),this.musicSend=e.createGain(),this.musicSend.gain.value=.55,this.farFilter.connect(this.musicSend).connect(this.reverb),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.85,this.sfxBus.connect(this.master),this.sfxSend=e.createGain(),this.sfxSend.gain.value=.5,this.sfxBus.connect(this.sfxSend).connect(this.reverb),this.noise=this._noiseBuffer(),this.nextTime=e.currentTime+.1,this.ready=!0}static async analyze(t,n=8,r=[]){let i=22050,a=new OfflineAudioContext(2,Math.floor(i*n),i),o=new e;o._build(a),o.master.gain.cancelScheduledValues(0),o.master.gain.value=.85,o.setMusic(t),o.vol={...o.target};let s=60/o.tempo,c=.05,l=0;for(;c<n-.5;)o._playBeat(l++,c,s),c+=s;r.forEach(([t,n])=>{let r=Object.getOwnPropertyDescriptor(e.prototype,`now`);Object.defineProperty(o,"now",{value:n,configurable:!0}),o.sfx(t),Object.defineProperty(o,"now",{get:r.get,configurable:!0})});let u=(await a.startRendering()).getChannelData(0),d=0,f=0;for(let e=0;e<u.length;e++){let t=Math.abs(u[e]);t>d&&(d=t),f+=u[e]*u[e]}return{stage:t,peak:+d.toFixed(3),rms:+Math.sqrt(f/u.length).toFixed(4)}}_impulse(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),r=t.createBuffer(2,n,t.sampleRate);for(let e=0;e<2;e++){let i=r.getChannelData(e),a=0;for(let e=0;e<n;e++){let r=e/n,o=Math.random()*2-1;a=a*.55+o*.45;let s=e<t.sampleRate*.03?.4:1;i[e]=a*(1-r)**2.6*s}}return r}_noiseBuffer(){let e=this.ctx,t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),r=n.getChannelData(0);for(let e=0;e<t;e++)r[e]=Math.random()*2-1;return n}get now(){return this.ctx?this.ctx.currentTime:0}_env(e,t,n,r,i,a=0,o=.2,s=0){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(r,t+n),s>0?(e.gain.setTargetAtTime(r*a,t+n,i/3),e.gain.setTargetAtTime(1e-4,t+s,o/3)):e.gain.exponentialRampToValueAtTime(1e-4,t+n+i)}_osc(e,t,n,r,i,a=0){let o=this.ctx.createOscillator();return o.type=e,o.frequency.setValueAtTime(Math.min(2e4,t),n),a&&(o.detune.value=a),o.connect(i),o.start(n),o.stop(r),o}_pan(e,t){if(!this.ctx.createStereoPanner)return e;let n=this.ctx.createStereoPanner();return n.pan.value=Math.max(-1,Math.min(1,t)),n.connect(e),n}musicBox(e,t,n=.5,r=this.musicBus,i=0){let a=this.ctx,o=Dp(e),s=a.createGain();s.connect(this._pan(r,i));let c=Math.max(.6,1.8+(84-e)*.03);this._env(s,t,.003,n*.32,c),this._osc(`sine`,o,t,t+c+.1,s);let l=a.createGain();l.connect(s),l.gain.setValueAtTime(.35,t),l.gain.exponentialRampToValueAtTime(.001,t+.5),this._osc(`sine`,o*3.01,t,t+.6,l);let u=a.createGain();u.connect(s),u.gain.setValueAtTime(.18,t),u.gain.exponentialRampToValueAtTime(.001,t+.18),this._osc(`sine`,o*5.9,t,t+.25,u)}celesta(e,t,n=.5,r=this.musicBus,i=0){let a=this.ctx,o=Dp(e),s=a.createGain();s.connect(this._pan(r,i)),this._env(s,t,.004,n*.26,1.3);let c=a.createOscillator();c.frequency.value=o;let l=a.createOscillator();l.frequency.value=o*4;let u=a.createGain();u.gain.setValueAtTime(o*1.6,t),u.gain.exponentialRampToValueAtTime(o*.05,t+.35),l.connect(u).connect(c.frequency),c.connect(s),c.start(t),l.start(t),c.stop(t+1.5),l.stop(t+1.5)}bell(e,t,n=.5,r=this.musicBus,i=0){let a=this.ctx,o=Dp(e),s=this._pan(r,i);for(let[e,r,i]of[[1,1,3.2],[2,.5,2.2],[2.76,.35,1.4],[4.07,.22,.9],[5.4,.14,.6]]){let c=a.createGain();c.connect(s),this._env(c,t,.002,n*.13*r,i),this._osc(`sine`,o*e,t,t+i+.1,c)}}glock(e,t,n=.5,r=this.musicBus,i=0){let a=this.ctx,o=Dp(e),s=this._pan(r,i),c=a.createGain();c.connect(s),this._env(c,t,.002,n*.22,1.1),this._osc(`sine`,o,t,t+1.2,c);let l=a.createGain();l.connect(s),this._env(l,t,.002,n*.08,.35),this._osc(`sine`,o*2.756,t,t+.4,l)}harp(e,t,n=.5,r=this.musicBus,i=0){let a=this.ctx,o=Dp(e),s=a.createGain(),c=a.createBiquadFilter();c.type=`lowpass`,c.frequency.setValueAtTime(Math.min(16e3,o*7),t),c.frequency.exponentialRampToValueAtTime(Math.min(12e3,o*1.5),t+.6),c.connect(s),s.connect(this._pan(r,i)),this._env(s,t,.003,n*.22,1.4),this._osc(`triangle`,o,t,t+1.5,c),this._osc(`sine`,o*2,t,t+.8,c)}pizz(e,t,n=.5,r=this.musicBus){let i=this.ctx,a=Dp(e),o=i.createGain(),s=i.createBiquadFilter();s.type=`lowpass`,s.frequency.setValueAtTime(Math.min(16e3,a*5),t),s.frequency.exponentialRampToValueAtTime(a*1.2,t+.25),s.connect(o),o.connect(r),this._env(o,t,.004,n*.32,.45),this._osc(`triangle`,a,t,t+.5,s),this._osc(`sawtooth`,a,t,t+.3,s,4)}pad(e,t,n,r=.4,i=this.musicBus,a=1){let o=this.ctx,s=o.createGain(),c=o.createBiquadFilter();c.type=`lowpass`,c.frequency.value=900+900*a,c.Q.value=.5,c.connect(s),s.connect(i);let l=Math.min(.7,n*.4);s.gain.setValueAtTime(1e-4,t),s.gain.linearRampToValueAtTime(r*.07,t+l),s.gain.setValueAtTime(r*.07,t+n-.05),s.gain.linearRampToValueAtTime(1e-4,t+n+.6);for(let r of e){let e=Dp(r);for(let r of[-7,0,7])this._osc(`sawtooth`,e,t,t+n+.7,c,r)}}noiseHit(e,{dur:t=.2,freq:n=2e3,q:r=1,type:i=`bandpass`,vel:a=.3,sweepTo:o=null,bus:s=this.sfxBus,attack:c=.005}={}){let l=this.ctx,u=l.createBufferSource();u.buffer=this.noise;let d=l.createBiquadFilter();d.type=i,d.frequency.setValueAtTime(Math.min(18e3,n),e),o&&d.frequency.exponentialRampToValueAtTime(Math.min(18e3,o),e+t),d.Q.value=r;let f=l.createGain();f.gain.setValueAtTime(1e-4,e),f.gain.linearRampToValueAtTime(a,e+c),f.gain.exponentialRampToValueAtTime(1e-4,e+t),u.connect(d).connect(f).connect(s),u.start(e,Math.random()*1.5),u.stop(e+t+.05)}get chord(){return kp[this.chordIndex%kp.length]}chordTone(e=0,t=72){let n=Ap[this.chord],r=n[(e%n.length+n.length)%n.length];for(;r<t;)r+=12;return r+12*Math.floor(e/n.length)}penta(e,t=72){let n=Math.floor(e/jp.length);return jp[(e%jp.length+jp.length)%jp.length]+12*n+(t-60)}sfx(e,t={}){if(!this.ready)return;let n=this.now+.005,r=t.vel??1,i=t.pan??0,a=this.sfxBus;switch(e){case`tap`:this.celesta(this.chordTone(t.i??Math.floor(Math.random()*3),79),n,.35*r,a,i);break;case`press`:{this.noiseHit(n,{dur:.08,freq:900,q:2,vel:.12*r});let e=this.ctx.createGain();e.connect(a),this._env(e,n,.003,.15*r,.12),this._osc(`sine`,260,n,n+.15,e).frequency.exponentialRampToValueAtTime(180,n+.1);break}case`click`:this.noiseHit(n,{dur:.03,freq:5200,q:4,vel:.35*r}),this.noiseHit(n+.045,{dur:.025,freq:6400,q:5,vel:.25*r}),this.bell(84,n+.05,.5*r,a,i);break;case`latch`:{let e=this.ctx.createGain();e.connect(a),this._env(e,n,.004,.14*r,.35),this._osc(`sine`,520,n,n+.4,e).frequency.exponentialRampToValueAtTime(880,n+.12),this.celesta(84,n+.08,.4*r,a),this.celesta(88,n+.16,.35*r,a);break}case`lid`:this.noiseHit(n,{dur:.6,freq:500,sweepTo:2600,q:.8,vel:.08*r,attack:.2}),[0,1,2,3,4,5].forEach(e=>this.celesta(this.chordTone(e,72),n+.1+e*.07,.45*r,a,(e-2.5)*.15)),this.bell(this.chordTone(0,84),n+.55,.45*r,a);break;case`gem`:{let e=[0,2,4,1,5,3][t.i??0];for(let t=0;t<4;t++)this.celesta(this.penta(e+t*2,74),n+t*.065,.4*r,a,i+(t-1.5)*.1);this.bell(this.penta(e,86),n+.26,.28*r,a,i);break}case`magicRise`:{let e=t.n??8;for(let i=0;i<e;i++)this.celesta(this.chordTone(i,72),n+i*(t.gap??.07),(.25+i/e*.2)*r,a,(i/e-.5)*.6);break}case`sparkle`:{let e=t.n??4;for(let t=0;t<e;t++)this.celesta(this.penta(5+Math.floor(Math.random()*6),72),n+t*.045+Math.random()*.02,.22*r,a,i+(Math.random()-.5)*.4);break}case`whoosh`:{let e=t.speed??1;this.noiseHit(n,{dur:.35/Math.sqrt(e),freq:600*e,sweepTo:2600*e,q:1.2,vel:.08*r,attack:.06,type:`bandpass`});break}case`heart`:{let e=t.n??3,o=t.pitch??0;for(let t=0;t<e;t++){let e=this.ctx.createGain();e.connect(this._pan(a,i));let s=n+t*.08;this._env(e,s,.004,.08*r,.12),this._osc(`sine`,500+o*120+t*60,s,s+.15,e).frequency.exponentialRampToValueAtTime(900+o*200+t*90,s+.08),this.celesta(this.chordTone(t+o,79),s+.02,.3*r,a,i)}break}case`star`:{let e=t.n??4;for(let o=0;o<e;o++)this.glock(this.penta(3+o+(t.pitch??0),79),n+o*.06,.4*r,a,i+(o-e/2)*.1);this.noiseHit(n,{dur:.3,freq:3e3,sweepTo:7e3,q:2,vel:.04*r});break}case`ribbon`:{let e=t.len??1;this.noiseHit(n,{dur:.5*e+.2,freq:400,sweepTo:1800,q:.9,vel:.09*r,attack:.08});let o=Math.round(5+e*5);for(let e=0;e<o;e++)this.harp(this.chordTone(e,60),n+e*.04,.3*r,a,i+(e/o-.5)*.8);break}case`circle`:for(let e=0;e<8;e++)this.celesta(this.chordTone(e,72),n+e*.05,.32*r,a,Math.sin(e)*.5);this.bell(this.chordTone(0,84),n+.4,.35*r,a);break;case`step`:{let e=this.penta(t.i??0,67),o=this.ctx.createGain();o.connect(this._pan(a,i)),this._env(o,n,.004,.2*r,.4),this._osc(`sine`,Dp(e),n,n+.5,o),this._osc(`sine`,Dp(e)*4,n,n+.15,o),this.celesta(e+12,n+.03,.25*r,a,i);break}case`boing`:{let e=this.ctx.createGain();e.connect(this._pan(a,i)),this._env(e,n,.004,.13*r,.3),this._osc(`sine`,700,n,n+.35,e).frequency.exponentialRampToValueAtTime(330,n+.25);break}case`pop`:{let e=this.ctx.createGain();e.connect(this._pan(a,i)),this._env(e,n,.002,.14*r,.08),this._osc(`sine`,400+(t.pitch??0)*50,n,n+.1,e).frequency.exponentialRampToValueAtTime(1300,n+.06);break}case`chime`:Ap[this.chord].forEach((e,t)=>this.bell(e+36,n+t*.03,.35*r,a,(t-1)*.3));break;case`ding`:this.glock(this.penta(5+(t.i??0),72),n,.45*r,a,i);break;case`twirl`:this.noiseHit(n,{dur:.7,freq:500,sweepTo:3e3,q:1,vel:.07*r,attack:.15});for(let e=0;e<10;e++)this.harp(this.chordTone(e,60),n+e*.05,.28*r,a,Math.sin(e*.8)*.6);break;case`applause`:{let e=t.dur??2.5,i=Math.round(e*70*(t.density??1));for(let t=0;t<i;t++){let t=n+Math.random()*e*(.5+.5*Math.random()),i=1-(t-n)/(e*1.1);this.noiseHit(t,{dur:.04,freq:1200+Math.random()*1800,q:1.4,vel:.06*r*Math.max(.1,i),bus:a})}break}case`cheer`:this.sfx(`applause`,{dur:2.2,vel:.9*r}),[0,1,2].forEach(e=>this.bell(this.chordTone(e,84),n+.05*e,.35*r,a,(e-1)*.4));break;case`door`:{let e=this.ctx.createGain();e.connect(a),this._env(e,n,.02,.25*r,3.5),this._osc(`sine`,98,n,n+3.6,e),this._osc(`sine`,196.5,n,n+3,e),this.noiseHit(n,{dur:2.5,freq:2500,sweepTo:9e3,q:1.5,vel:.05*r,attack:.8});for(let e=0;e<12;e++)this.celesta(this.chordTone(e,72),n+.3+e*.08,.3*r,a,Math.sin(e)*.6);break}case`key`:for(let e=0;e<3;e++)this.noiseHit(n+e*.09,{dur:.025,freq:4500-e*400,q:6,vel:.25*r});this.bell(88,n+.3,.45*r,a);break;case`ripple`:{let e=this.ctx.createGain();e.connect(a),this._env(e,n,.15,.06*r,1.2);let t=this._osc(`sine`,600,n,n+1.3,e),i=this.ctx.createOscillator();i.frequency.value=9;let o=this.ctx.createGain();o.gain.value=40,i.connect(o).connect(t.frequency),i.start(n),i.stop(n+1.3),t.frequency.exponentialRampToValueAtTime(900,n+1.2);for(let e=0;e<5;e++)this.celesta(this.penta(e*2,79),n+.15+e*.12,.2*r,a);break}case`bloom`:{this.noiseHit(n,{dur:3,freq:3e3,sweepTo:8e3,q:.8,vel:.06*r,attack:.5});let e=Ap.C;for(let t=0;t<4;t++)e.forEach((e,i)=>this.bell(e+24+t*12,n+t*.12+i*.03,.25*r,a,(i-1)*.4));for(let e=0;e<16;e++)this.harp(this.chordTone(e,55),n+e*.045,.3*r,a,e/16-.5);break}case`shimmer`:this.noiseHit(n,{dur:1.2,freq:5e3,sweepTo:9e3,q:3,vel:.035*r,attack:.3});break;case`swell`:this.pad(Ap.C.map(e=>e+24),n,t.dur??3,.6*r,a,1.2);break;case`thump`:{let e=this.ctx.createGain();e.connect(a),this._env(e,n,.004,.25*r,.25),this._osc(`sine`,140,n,n+.3,e).frequency.exponentialRampToValueAtTime(70,n+.2);break}}}setMusic(e){if(!Mp[e]||(this.stage=e,this.target={...Mp[e]},!this.ctx))return;let t=+!!this.target.far;this.farFilter.frequency.setTargetAtTime(t?900:18e3,this.ctx.currentTime,t?.5:1.2)}duck(e=.4,t=1.5){if(!this.ctx)return;let n=this.musicBus.gain,r=this.ctx.currentTime;n.cancelScheduledValues(r),n.setTargetAtTime(.7*e,r,.15),n.setTargetAtTime(.7,r+t,.6)}_schedule(){if(!this.ready||this.ctx.state!==`running`)return;let e=60/this.tempo,t=this.ctx.currentTime+.15;for(this.nextTime<this.ctx.currentTime-.5&&(this.nextTime=this.ctx.currentTime+.05);this.nextTime<t;){let t=new Set([...Object.keys(this.vol),...Object.keys(this.target)]);for(let e of t){let t=this.vol[e]||0,n=this.target[e]||0;this.vol[e]=t+(n-t)*.22,Math.abs(this.vol[e]-n)<.01&&(this.vol[e]=n)}this._playBeat(this.beat,this.nextTime,e),this.beat++,this.nextTime+=e}}_playBeat(e,t,n){let r=this.vol,i=Math.floor(e/3),a=e%3,o=i%16;this.chordIndex=o;let s=Ap[kp[o]],c=this.musicBus,l=Op[o],u=0,d=null;for(let[e,t]of l)u===a&&(d=[e,t]),u+=t;let f=(Math.random()-.5)*.008;if(d){let[e,i]=d;r.box>.01&&this.musicBox(e+12,t+f,r.box*.9,c,.1),r.glock>.01&&this.glock(e+12,t+f,r.glock*.8,c,-.1),r.strings>.01&&i>=2&&this.pad([e],t,n*i,r.strings*.9,c,1.2)}if(r.boxBass>.01&&a===0&&this.musicBox(s[0]+24,t,r.boxBass*.7,c,-.2),r.celArp>.01&&a>0&&this.celesta(s[(a+i)%s.length]+36,t+.01,r.celArp*.6,c,a===1?.35:-.35),r.harp>.01){let e=[s[0]+12,s[1]+12,s[2]+12,s[0]+24,s[2]+12,s[1]+12];this.harp(e[a*2],t,r.harp*.7,c,-.3),this.harp(e[a*2+1],t+n/2,r.harp*.55,c,.3)}r.pizz>.01&&(a===0?this.pizz(s[0],t,r.pizz,c):this.pizz(s[1+(a-1)]+12,t,r.pizz*.55,c)),r.pad>.01&&a===0&&this.pad(s.map(e=>e+12),t,n*3,r.pad,c,.8),r.strings>.01&&a===0&&this.pad(s,t,n*3,r.strings*.8,c,.6),r.bell>.01&&a===0&&i%2==0&&this.bell(s[0]+48,t,r.bell*.6,c,i%4?.4:-.4),r.shaker>.01&&(this.noiseHit(t,{dur:.06,freq:7e3,q:1,vel:.03*r.shaker,bus:c}),this.noiseHit(t+n/2,{dur:.05,freq:7500,q:1,vel:.018*r.shaker,bus:c})),r.hush>.01&&a===0&&i%2==0&&(this.pad([84,91],t,n*6,r.hush*.6,c,1.4),this.musicBox(96,t+.2,r.hush*.35,c))}},$=new Np,Pp=new B,Fp=new B,Ip=new _t,Lp=class{constructor(e,t){this.engine=e,this.input=t,this.audio=$,this.camera=e.camera,this.sched=new nd,this.time=0,this.states={},this.state=null,this.token=0,this.palette=`pink`,this.magicCount=0,this.testMode=/[?&]test\b/.test(location.search),this.debug=/[?&]debug\b/.test(location.search)}async init(){let e=this.engine;this.mats=new pf(e.renderer),this.room=Of(this.mats),this.scenes={room:this.room.scene},this.lightsByScene=new Map,this._sceneLights(this.room.scene),this.box=new jf(this.mats),this.box.group.position.copy(Df.boxPos),this.box.baseY=Df.boxPos.y,this.room.scene.add(this.box.group),this.compact=new Lf(this.mats),this.girl=new Xf(this.mats),this.wand=new Qf(this.mats),this.sparkles=new gf(3200),this.shapes=new yf(this.mats),this.ribbons=new Sf(this.mats,18),this.glows=new Tf,this.confetti=new lp(this.mats,700),this.theater=Cp(this.mats),this.scenes.theater=this.theater.scene,this._sceneLights(this.theater.scene),this.finale=Tp(this.mats),this.scenes.finale=this.finale.scene,this._sceneLights(this.finale.scene),this.ribbons.camera=this.camera,this.girl.outfit.fx=this._outfitFx(),this.girl.onStep=(e,t)=>this.onGirlStep(e,t),this.portrait=new ip(384),this.preview=new ip(320),this.preview.camera.fov=50,this.portal=new ap(.5),this.reflect=new op(512),e.onResize.push(t=>{this.portal.setSize(t.w*e.pixelRatio,t.h*e.pixelRatio),this.reflect.setSize(Math.min(1024,t.w*e.pixelRatio*.6),Math.min(1024,t.h*e.pixelRatio*.6)),this.sparkles.setViewport(t.h*e.pixelRatio,this.camera.fov)}),e.resize(),e.preRender.push(e=>this._renderViews(e)),this.gesture=new sp({stroke:e=>this._onWandGesture(`stroke`,e),circle:e=>this._onWandGesture(`circle`,e),tap:e=>this._onWandGesture(`tap`,e)}),this.tipHistory=[],this.cam={pos:new B(0,1,0),target:new B(0,.6,-2),fov:46,goal:null,lambda:2.2,script:null,shake:0},this.hud={active:!1,x:0,y:-.6,w:.85,h:.28,depth:.55,tilt:-.1,k:7,scaleOverride:0};let t=this.input;t.on(`down`,e=>this._down(e)),t.on(`move`,e=>this._move(e)),t.on(`up`,e=>this._up(e)),this.setActiveScene(`room`),this.room.scene.add(this.girl.root),this.girl.setLayer(tp.MIRROR),this.camera.layers.set(0)}_sceneLights(e){let t=new Ef(e,3),n=new ss(`#ffc2dc`,0,2.2,2);e.add(n);let r=new ss(`#ffffff`,0,2.5,2);e.add(r),this.lightsByScene.set(e,{magic:t,tip:n,gemLight:r})}get lights(){return this.lightsByScene.get(this.activeScene)}setActiveScene(e){let t=this.scenes[e];this.activeName=e,this.activeScene=t,this.engine.setScene(t);for(let e of[this.sparkles,this.shapes,this.ribbons,this.glows,this.confetti])e.attach(t);t.add(this.wand.group),t.add(this.compact.group),this.floorY=t.userData.floorY??0,this.ribbons.floorY=this.floorY}moveGirlTo(e){this.scenes[e].add(this.girl.root)}addState(e,t){this.states[e]=t,t.game=this}goto(e,t){this.state&&this.state.exit&&this.state.exit(),this.token++,this.stateName=e,this.state=this.states[e],this.stateTime=0,this.input.poke(),this.state.enter&&this.state.enter(t),this.onStateChange&&this.onStateChange(e)}alive(e){return e===this.token}wait(e){return this.sched.wait(e)}tween(e,t,n=Z.inOutCubic,r=0){return this.sched.tween(e,t,n,r)}update(e){this.time+=e,this.stateTime+=e;let t=this.time;this.sched.update(e),this.state&&this.state.update&&this.state.update(e,t),this.state&&this.state.idle&&this.state.idle(this.input.idleTime(),e),this._updateCamera(e),this.girl.update(e,t,this.camera),this._updateWand(e,t),this.compact.update(e,t),this._placeHud(e),this.box.update(e,t),this.activeName===`room`&&this.room.update(e,t,this.camera),this.theater&&this.activeName===`theater`&&this.theater.update(e,t,this.camera),this.finale&&this.activeName===`finale`&&this.finale.update(e,t,this.camera),this.sparkles.update(e,t),this.shapes.update(e,t),this.ribbons.update(e,t),this.glows.update(e),this.confetti.update(e,t);let n=this.lights;n&&(n.magic.update(e),n.gemLight.intensity=Zu(n.gemLight.intensity,0,3,e)),sf.uRimStrength.value=Zu(sf.uRimStrength.value,this.rimTarget??.35,3,e),this.engine.grade.uniforms.uFlash.value=Zu(this.engine.grade.uniforms.uFlash.value,this.flashTarget??0,this.flashLambda??4,e)}flash(e=.8,t=120,n=`#fff0f6`,r=3){this.engine.grade.uniforms.uFlashColor.value.set(n),this.flashTarget=e,this.flashLambda=12,setTimeout(()=>{this.flashTarget=0,this.flashLambda=r},t)}setCameraGoal(e,t=2.2){this.cam.goal=e,this.cam.lambda=t,this.cam.script=null}snapCamera(){if(!this.cam.goal)return;let e=this.cam.goal(this.engine.layout);this.cam.pos.copy(e.pos),this.cam.target.copy(e.target),this.cam.fov=e.fov}cameraTo(e,t=1.5,n=Z.inOutCubic){let r={pos:this.cam.pos.clone(),target:this.cam.target.clone(),fov:this.cam.fov},i={};return this.cam.script=i,this.tween(t,t=>{if(this.cam.script!==i)return;let n=e(this.engine.layout);this.cam.pos.lerpVectors(r.pos,n.pos,t),this.cam.target.lerpVectors(r.target,n.target,t),this.cam.fov=Ju(r.fov,n.fov,t)},n).then(()=>{this.cam.script===i&&(this.cam.script=null,this.cam.goal=e)})}_updateCamera(e){let t=this.cam;if(!t.script&&t.goal){let n=t.goal(this.engine.layout);$u(t.pos,n.pos,t.lambda,e),$u(t.target,n.target,t.lambda,e),t.fov=Zu(t.fov,n.fov,t.lambda,e)}let n=this.camera;n.position.copy(t.pos),t.shake>0&&(t.shake=Math.max(0,t.shake-e*2),n.position.x+=(Math.random()-.5)*t.shake*.01,n.position.y+=(Math.random()-.5)*t.shake*.01);let r=t.pos.distanceTo(t.target),i=this.time;Pp.copy(t.target).add(Fp.set(Math.sin(i*.45)*.0035*r,Math.sin(i*.33+1)*.0025*r,0)),n.lookAt(Pp),Math.abs(n.fov-t.fov)>.01&&(n.fov=t.fov,n.updateProjectionMatrix(),this.sparkles.setViewport(this.engine.layout.h*this.engine.pixelRatio,n.fov)),n.updateMatrixWorld()}fitDistance(e,t,n,r,i=.9){let a=Math.tan(n*Math.PI/360),o=a*r;return Math.max(e/(2*o*i),t/(2*a*i))}_placeHud(e){let t=this.hud;if(!t.active)return;let n=this.camera,r=this.engine.layout,i=Math.tan(n.fov*Math.PI/360),a=i*r.aspect,o=t.depth,s=this.compact.visibleWidth(),c=this.compact.W*.95,l=Math.min(t.w*2*o*a/s,t.h*2*o*i/c);t.scaleOverride&&(l=t.scaleOverride);let u=Pp.set(1,0,0).applyQuaternion(n.quaternion),d=Fp.set(0,1,0).applyQuaternion(n.quaternion),f=new B(0,0,-1).applyQuaternion(n.quaternion),p=n.position.clone().addScaledVector(f,o).addScaledVector(u,t.x*o*a).addScaledVector(d,t.y*o*i),m=n.quaternion.clone().multiply(Ip.setFromEuler(new An(t.tilt,0,0))),h=this.compact.group,g=t.k===1/0?1:1-Math.exp(-t.k*e);h.position.lerp(p,g),h.quaternion.slerp(m,g);let _=h.scale.x;h.scale.setScalar(_+(l-_)*g)}_renderViews(e){let t=this.portrait;this._pvFrame=(this._pvFrame||0)+1;let n=this.hud.active&&this.hud.w<.5;if(t.enabled&&(!n||this._pvFrame%2==0)){this.portraitUpdate&&this.portraitUpdate(t.camera);let n=this.compact.group.visible;this.compact.group.visible=!1,t.render(e,this.portraitScene||this.activeScene),this.compact.group.visible=n}if(this.preview.enabled&&this.previewScene&&this.preview.render(e,this.previewScene),this.portal.enabled&&this.portalSrc){let t=this.compact.mirror.visible;this.compact.mirror.visible=!1,this.portal.render(e,this.camera,this.portalDstScene,this.portalSrc,this.portalDst),this.compact.mirror.visible=t}if(this.reflect.enabled&&this.reflectMesh&&(this._pvFrame%2==1||this.engine.pixelRatio>=1.5)){let t=this.compact.group.visible;this.compact.group.visible=!1,this.reflect.render(e,this.camera,this.activeScene,this.reflectMesh),this.compact.group.visible=t}}_outfitFx(){let e=this;return{sparkleAt(t,n,r=3){for(let i=0;i<r;i++)e.sparkles.spawn(t,{color:n,size:X(.012,.03),life:X(.5,1.1),kind:+(Math.random()<.4),vel:new B(X(-.3,.3),X(-.1,.4),X(-.3,.3)),drag:2,intensity:2.6})},footRibbon(t,n,r){let i=t.root.position.clone();e.ribbons.scripted((t,n,r)=>{let a=t*J*1.2+n*7,o=.16-t*.03,s=.03+Math.sin(t*J+n*3)*.02+t*.06;r.set(i.x+Math.cos(a)*o,s+e.floorY,i.z+Math.sin(a)*o)},{color:n,width:.022,life:r,glow:2.4,glowFloor:1.2}),e.lights.magic.flash(i.clone().setY(e.floorY+.15),n,2.5,r,1.8),$.sfx(`magicRise`,{n:8,gap:.09})},waistTrail(t,n,r,i){let a=e.ribbons.scripted((e,t,r)=>{let a=Y(Y(t/i)-(1-e)*.25);n.hemPoint(a,r),r.y+=.01+(1-e)*.02},{color:r,width:.02,life:i+.3,glow:2.6,glowFloor:1});return e.lights.magic.flash(t.waistWorld(new B),r,2,i+.3,1.6),$.sfx(`twirl`,{vel:.6}),a},spiralUp(t,n,r){let i=t.root.position.clone();e.ribbons.scripted((t,n,a)=>{let o=Y(n/r),s=t*J*2+n*8,c=.45+(t*.25+o*.2),l=.15-t*.03;a.set(i.x+Math.cos(s)*l,e.floorY+c,i.z+Math.sin(s)*l)},{color:n,width:.02,life:r+.2,glow:2.4,glowFloor:1}),e.lights.magic.flash(t.chestWorld(new B),n,2,r,1.6),$.sfx(`magicRise`,{n:10,gap:.07})},chime(e=1){$.sfx(`chime`,{vel:.7})},ding(e=0){$.sfx(`ding`,{i:e})}}}_down(e){if($.unlock(),this.onFirstTouch){let e=this.onFirstTouch;this.onFirstTouch=null,e()}let t=this.state;if(e.handler=null,t&&t.allow&&t.allow.gems&&this.hud.active&&this.compact.openFrac>.8){let t=this._pickCompact(e);if(t){e.handler=t,t.down&&t.down(e);return}}if(t&&t.pick){let n=t.pick(e);if(n){e.handler=n,n.down&&n.down(e);return}}if(t&&t.allow&&t.allow.wand&&this.wand.group.visible&&this.wandGrabbable()&&this._nearWand(e.x,e.y))e.handler=this._wandHandler(),e.handler.down(e);else{if(t&&t.allow&&t.allow.girl){let t=this._pickGirl(e.x,e.y);if(t){e.handler=this._girlHandler(t),e.handler.down(e);return}}e.handler=this._pendingHandler(),e.handler.down(e)}}_move(e){e.handler&&e.handler.move&&e.handler.move(e)}_up(e){$.unlock(),e.handler&&e.handler.up&&e.handler.up(e)}screenOf(e){return this.engine.toScreen(e,new B)}rayAt(e,t){let n=new Es;return n.setFromCamera(this.engine.ndc(e,t),this.camera),n}floorPoint(e,t,n=this.floorY){let r=this.rayAt(e,t),i=new Wi(new B(0,1,0),-n),a=new B;return r.ray.intersectPlane(i,a)?a:null}viewPlanePoint(e,t,n){let r=this.rayAt(e,t),i=new B(0,0,-1).applyQuaternion(this.camera.quaternion).negate(),a=new Wi().setFromNormalAndCoplanarPoint(i,n),o=new B;return r.ray.intersectPlane(a,o)?o:n.clone()}_pickCompact(e){let t=this.compact,n=this.engine.layout;Math.min(n.w,n.h);let r=null,i=1/0,a=Math.max(30,this._gemScreenSize()*.95);t.gems.forEach((n,o)=>{let s=this.screenOf(t.gemWorld(o)),c=Math.hypot(s.x-e.x,s.y-e.y);c<a&&c<i&&(i=c,r={type:`gem`,i:o})});let o=this.screenOf(t.centerWorld()),s=Math.hypot(o.x-e.x,o.y-e.y);if(s<a*1.5&&s<i*1.2&&(i=s,r={type:`center`}),!r){let n=this.screenOf(t.mirrorWorld()),i=Math.hypot(n.x-e.x,n.y-e.y),a=this._gemScreenSize()*3.2;i<a?r={type:`mirror`}:s<a&&(r={type:`body`})}if(!r)return null;let c=this.state;return{down:()=>{r.type===`gem`?t.gems[r.i].press.target=1:r.type===`center`?t.centerPress.target=1:t.wobble.kick(4)},up:()=>{r.type===`gem`?(t.gems[r.i].press.target=0,c.onGem?c.onGem(r.i):this.defaultGem(r.i)):r.type===`center`?(t.centerPress.target=0,c.onCenter?c.onCenter():this.defaultCenter()):r.type===`mirror`?c.onMirror?c.onMirror():this.defaultMirrorTap():$.sfx(`press`,{vel:.6})}}}_gemScreenSize(){let e=this.compact,t=this.screenOf(e.gemWorld(0)),n=this.screenOf(e.gemWorld(1));return Math.hypot(t.x-n.x,t.y-n.y)*.45}defaultGem(e,{recolor:t=!0}={}){let n=this.compact,r=rf[e],i=this.palette;n.gems[e].flash=1.4,n.gems[e].hop.kick(6),$.sfx(`gem`,{i:e});let a=n.gemWorld(e),o=this.girl.chestWorld(new B);this.beam(a,o,r.color),this.lights.gemLight.position.copy(o).add(new B(0,.2,.4)),this.lights.gemLight.color.set(r.color),this.lights.gemLight.intensity=.9,this.girl.lookTarget=a.clone(),setTimeout(()=>{this.girl.lookTarget&&this.girl.lookTarget.equals(a)&&(this.girl.lookTarget=null)},900);let s=this.girl.root.position.clone(),c=this.camera.position.clone().sub(s).setY(0).normalize();if(this.shapes.heart({pos:s.clone().addScaledVector(c,.25).add(new B(0,.15,0)),vel:new B(0,.55,0),size:.16,color:r.color,life:2.4,hover:.3,drag:1.4,buoy:.05,spin:.2,popIn:.4}),this.glows.spawn(`heart`,s.clone().setY(this.floorY+.004),{size:1.1,color:r.color,intensity:1.3,life:1.6,rot:Math.PI}),navigator.vibrate)try{navigator.vibrate(12)}catch{}this.palette=r.key,this.state&&this.state.afterGem&&this.state.afterGem(e);let l=this.girl.outfit;t&&l.complete&&!this._recoloring&&(this._recoloring=!0,this.sched.wait(.3).then(async()=>{l.palette.skirt===r.key&&i===r.key?($.sfx(`twirl`),this.girl.twirl(.9),await l.setStyle(l.style+1)):($.sfx(`magicRise`,{n:6}),await l.recolor(r.key),this.girl.twirl(.5)),this._recoloring=!1}))}defaultCenter(){let e=this.compact;$.sfx(`magicRise`,{n:8}),e.centerGlow=1.6,setTimeout(()=>e.centerGlow=.5,600),this.girl.twirl(.8),$.sfx(`twirl`),this.sparkleBurst(this.girl.chestWorld(new B),of[this.palette].main,30)}defaultMirrorTap(){this.girl.wave(),$.sfx(`sparkle`,{n:3}),this.compact.mirrorMat.uniforms.uGlow.value=.35,setTimeout(()=>this.compact.mirrorMat.uniforms.uGlow.value=0,250)}beam(e,t,n,r=.35){let i=e.clone().lerp(t,.5).add(new B(0,.15,0)),a=new Na(e.clone(),i,t.clone());this.ribbons.scripted((e,t,n)=>{let i=Y(Y(t/r)*1.3-(1-e)*.3);a.getPoint(i,n)},{color:n,width:.012,life:r+.35,glow:3,glowFloor:2});for(let e=0;e<14;e++){let t=e/13;this.sched.wait(t*r).then(()=>{this.sparkles.spawn(a.getPoint(t),{color:n,size:X(.015,.03),life:.6,kind:1,intensity:3})})}}sparkleBurst(e,t,n=20,r=.8,i={}){this.sparkles.burst(e,n,{color:t,speed:r,size:.025,life:1,intensity:2.6,drag:2.2,colors:i.colors,...i})}_pickGirl(e,t){let n=this.girl;if(!n.root.visible)return null;let r=this.rayAt(e,t).intersectObject(n.root,!0),i=null;if(r.length)i=r[0].point.y-n.root.position.y;else{let r=this.screenOf(n.root.position),a=this.screenOf(n.headWorld(Pp)),o=Math.abs(a.y-r.y)*.32;t>a.y-o&&t<r.y+o*.4&&Math.abs(e-Ju(a.x,r.x,Y((t-a.y)/Math.max(1,r.y-a.y))))<o*.8&&(i=Ju(1,0,Y((t-a.y)/Math.max(1,r.y-a.y))))}return i===null?null:i<.16?`feet`:i>.72?`head`:`body`}_girlHandler(e){let t=this.girl,n=!1,r=0;return{down:e=>{r=t.facingTarget},move:e=>{let i=e.x-e.downX;!n&&Math.abs(i)>18&&(n=!0),n&&(t.setFacing(r+i/this.engine.layout.w*5.5),t.flare=Math.max(t.flare,Math.min(.6,Math.abs(e.vx)/2500)))},up:r=>{if(n){let e=r.vx/this.engine.layout.w;Math.abs(e)>1.2&&(t.spinVel+=e*6,t.twirl(.3),$.sfx(`twirl`,{vel:.6})),setTimeout(()=>t.setFacing(this.girlHomeFacing??0),900)}else this.state&&this.state.onGirlTap&&this.state.onGirlTap(e)||this.defaultGirlTap(e)}}}defaultGirlTap(e){let t=this.girl;e===`feet`?t.stomp():e===`head`?(t.bow(),$.sfx(`chime`,{vel:.5})):(t.twirl(1),$.sfx(`twirl`),this.sparkleBurst(t.waistWorld(new B),of[this.palette].sheer,24,.9))}onGirlStep(e,t){let n=this.girl.outfit,r=of[n.palette.boots||this.palette].main;this.stepCount=(this.stepCount||0)+1,$.sfx(`step`,{i:this.stepCount%8});let i=e.clone();i.y=this.floorY+.004,n.built.boots?(this.glows.spawn(`star`,i,{size:.32,color:r,intensity:1.8,life:6,hold:14,rot:X(0,J)}),this.glows.spawn(`round`,i,{size:.8,color:r,intensity:.6,life:1.2}),this.sparkles.burst(i.clone().setY(this.floorY+.03),10,{color:r,speed:.5,up:.6,size:.02,life:.8,gravity:.5,intensity:2.5}),this.lights.magic.flash(i.clone().setY(this.floorY+.12),r,1.6,.6,1.4)):this.sparkles.burst(i.clone().setY(this.floorY+.02),5,{color:`#ffffff`,speed:.3,up:.3,size:.015,life:.5,intensity:1.5}),this.state&&this.state.onStep&&this.state.onStep(i,t)}_pendingHandler(){let e=null,t=null;return{down:e=>{},move:n=>{if(e)t&&t.move(n);else if(Math.hypot(n.x-n.downX,n.y-n.downY)>14){let r=this.state;r&&r.allow&&r.allow.wand&&this.wand.group.visible&&this.wandGrabbable()?(e=`wand`,t=this._wandHandler(!0),t.down(n),t.move(n)):(e=`swipe`,r&&r.onSwipe&&r.onSwipe(n))}},up:n=>{if(e===`wand`){t.up(n);return}if(e===`swipe`){let e=this.state;e&&e.onSwipeEnd?e.onSwipeEnd(n):this.emptyTap(n.x,n.y,!0);return}let r=this.state;if(!(r&&r.onEmptyTap&&r.onEmptyTap(n))){if(r&&r.allow&&r.allow.floor){let e=this.floorPoint(n.x,n.y);if(e&&r.floorBounds&&r.floorBounds(e)){this.walkGirl(e);return}}this.emptyTap(n.x,n.y)}}}}walkGirl(e){let t=this.girl,n=this.state.floorClamp?this.state.floorClamp(e):e;this.glows.spawn(`round`,n.clone().setY(this.floorY+.004),{size:.35,color:`#ffffff`,intensity:.8,life:.8}),$.sfx(`tap`,{vel:.6}),t.walkTo(n.setY(this.floorY),()=>{t.setFacing(this.girlHomeFacing??0),t.stomp()})}emptyTap(e,t,n=!1){let r=this.girl.chestWorld(new B),i=this.viewPlanePoint(e,t,r.lerp(this.camera.position,.15)),a=Xu([of[this.palette].main,`#ffffff`,af,`#fff2b8`]);this.sparkles.burst(i,n?8:12,{color:a,speed:.35,size:.022,life:.9,intensity:2.2,drag:2.5,twinkleRatio:.6}),$.sfx(`tap`,{vel:.5,pan:(e/this.engine.layout.w-.5)*1.2})}wandGrabbable(){return this.wand.mode!==`hidden`&&this.wand.mode!==`locked`&&this.wand.mode!==`script`}_nearWand(e,t){let n=this.wand,r=this.screenOf(n.grip),i=this.screenOf(n.tipWorld(Pp)),a=this.engine.layout,o=Math.max(44,Math.min(a.w,a.h)*.09),s=i.x-r.x,c=i.y-r.y,l=Y(((e-r.x)*s+(t-r.y)*c)/Math.max(1,s*s+c*c)),u=r.x+s*l,d=r.y+c*l;return Math.hypot(e-u,t-d)<o}wandPlaneRef(){return this.state&&this.state.wandPlaneRef?this.state.wandPlaneRef():this.girl.chestWorld(new B).lerp(this.camera.position,.22)}_wandHandler(e=!1){let t=this.wand,n=this.engine.layout;return{down:r=>{t.mode=`drag`,t.followK=e?14:30,t.restUp.set(0,1,0),this.girl.holdingWand=!1,this.gesture.begin(r.x,r.y,r.t,n.h),this.tipHistory.length=0,this._dragTarget(r),this.wandDragging=!0,$.sfx(`sparkle`,{n:2,vel:.5}),this.state&&this.state.onWandGrab&&this.state.onWandGrab()},move:e=>{this._dragTarget(e),this.gesture.move(e.x,e.y,e.t),t.followK=Math.min(36,t.followK+2),this.state&&this.state.onWandMove&&this.state.onWandMove(e)},up:e=>{this.gesture.end(e.x,e.y,e.t),this.wandDragging=!1,this.wandReleaseTime=this.time,!(this.state&&this.state.onWandRelease&&this.state.onWandRelease(e))&&(t.mode=`linger`)}}}_dragTarget(e){let t=this.wand;if(t.mode===`locked`||t.mode===`script`)return;let n=this.wandPlaneRef(),r=this.viewPlanePoint(e.x,e.y,n),i=new B(0,1,0);r.addScaledVector(i,-Zf*.12),t.gripTarget.copy(r)}_updateWand(e,t){let n=this.wand,r=this.girl;if(!n.group.visible){let e=this.lights;e&&(e.tip.intensity=0);return}if(n.mode===`hand`||n.mode===`linger`&&this.time-this.wandReleaseTime>.7){n.mode===`linger`&&(n.mode=`hand`,n.followK=12);let t=r.handWorld(1,Pp);n.gripTarget.copy(t).add(new B(0,-.035,0));let i=new B(0,0,1).applyQuaternion(r.root.quaternion),a=new B(-1,0,0).applyQuaternion(r.root.quaternion);n.restUp.set(0,1,0).addScaledVector(i,.35).addScaledVector(a,.25).normalize(),r.holdingWand=!0,n.followK<30&&(n.followK+=e*20)}else if(n.mode===`present`){let e=r.handWorld(1,Pp),i=this.camera.position.clone().sub(e).normalize();n.gripTarget.copy(e).addScaledVector(i,.18).add(new B(0,.05+Math.sin(t*4)*.02,0)),n.restUp.set(Math.sin(t*3)*.2,1,0).normalize(),n.followK=6}n.mode===`drag`||n.mode===`linger`?r.pointTarget=n.tipWorld(new B):n.mode!==`locked`&&(r.pointTarget=null),n.mode!==`hand`&&n.mode!==`present`&&(r.holdingWand=n.mode!==`drag`&&r.holdingWand),n.update(e,t);let i=n.tipWorld(new B),a=this.lights,o=n.tipVel.length();if(a&&(a.tip.position.copy(i),a.tip.color.set(of[this.palette].main),a.tip.intensity=Zu(a.tip.intensity,.12+Math.min(.5,o*.15)+(this.wandDragging?.12:0),8,e)),this.wandDragging||o>1.2){this.tipHistory.push({p:i.clone(),t:this.time}),this.tipHistory.length>90&&this.tipHistory.shift();let e=Math.min(4,Math.floor(o*1.2));for(let t=0;t<e;t++)this.sparkles.spawn(i.clone().add(new B(X(-.02,.02),X(-.02,.02),X(-.02,.02))),{color:Xu([of[this.palette].main,`#ffffff`,`#fff2b8`,of[this.palette].sheer]),size:X(.012,.03),life:X(.5,1.1),kind:+(Math.random()<.5),drag:1.5,gravity:.15,vel:n.tipVel.clone().multiplyScalar(-.05).add(new B(X(-.1,.1),X(-.1,.15),X(-.1,.1))),intensity:2.4})}else Math.random()<e*4&&this.sparkles.spawn(i.clone().add(new B(X(-.04,.04),X(-.03,.05),0)),{color:`#ffffff`,size:.018,life:.8,kind:1,intensity:2,vel:new B(0,.05,0)})}tipPath(e){let t=this.tipHistory.filter(t=>t.t>=e-.05).map(e=>e.p.clone());if(t.length<2){let e=this.wand.tipWorld(new B);return[e.clone().add(new B(-.1,0,0)),e]}return t}_onWandGesture(e,t){this.magicCount++,this.input.poke();let n=this.state;n&&n.onGesture&&n.onGesture(e,t)||this.defaultMagic(e,t)}defaultMagic(e,t){let n=of[this.palette],r=this.wand.tipWorld(new B);this.glows.spawn(`round`,r.clone().setY(this.floorY+.004),{size:e===`circle`?1.8:1.2,color:n.main,intensity:.9,life:1.2});let i=[n.main,n.sheer,af,`#ffffff`,n.tulle],a=this.engine.layout,o=(this.screenOf(r).x/a.w-.5)*1.2;if(e===`tap`){let e=t.soft?2:3;for(let t=0;t<e;t++){let e=-.6+t*.6+X(-.15,.15);this.shapes.heart({pos:r.clone(),vel:new B(Math.sin(e)*.5,.35+Math.cos(e)*.2,X(-.1,.1)),size:X(.05,.075),color:Xu(i),life:2.6,hover:.9,drag:3,buoy:.12,spin:.5})}this.sparkleBurst(r,n.main,10,.4),this.lights.magic.flash(r,n.main,1.5,.6,2),$.sfx(`heart`,{n:e,pan:o})}else if(e===`stroke`&&t.dir===`up`){let e=Math.round(Y(2+t.len*8+t.speed*1.2,3,12)),i=1.6+t.speed*.8;for(let a=0;a<e;a++)this.shapes.star({pos:r.clone().add(new B(X(-.03,.03),0,X(-.03,.03))),vel:new B(X(-.6,.6),i*X(.7,1.2),X(-.3,.3)),size:X(.05,.09)*(1+t.len*.5),color:Xu([`#fff2b8`,`#ffe27a`,n.main,`#ffffff`,`#ffd0e4`]),life:X(2,3),drag:1.4,gravity:.25,spin:3});this.sparkles.burst(r,16,{color:`#fff2b8`,speed:.6,up:1.2,size:.025,life:1.2,kind:1,intensity:3}),this.lights.magic.flash(r.clone().add(new B(0,.3,0)),`#fff0c0`,2.2,1,2.5),$.sfx(`star`,{n:Math.min(6,e),pan:o})}else if(e===`stroke`&&(t.dir===`left`||t.dir===`right`)){let e=this.tipPath(t.pts[0].t),n=e[e.length-1].clone().sub(e[0]).clone().normalize().multiplyScalar(1+t.speed*.5),r=Xu(i);this.ribbons.fromPath(e,{color:r,width:.045+t.len*.03,life:3+t.len*1.5,vel:n,grow:.25,gravity:.25}),this.lights.magic.flash(e[Math.floor(e.length/2)],r,2.2,1.2,2.5),$.sfx(`ribbon`,{len:t.len,pan:o}),this.state&&this.state.onRibbon&&this.state.onRibbon(t,e)}else if(e===`stroke`&&t.dir===`down`){for(let e=0;e<5;e++)this.shapes.heart({pos:r.clone().add(new B(X(-.08,.08),X(-.05,.05),X(-.05,.05))),vel:new B(X(-.3,.3),X(-.2,.3),X(-.2,.2)),size:X(.04,.06),color:Xu(i),life:3,gravity:1.2,drag:.8,floor:this.floorY,spin:2});this.sparkles.burst(r,24,{color:n.main,speed:.5,size:.022,life:1.4,gravity:.8,floor:this.floorY+.01,intensity:2.4,twinkleRatio:.6}),$.sfx(`sparkle`,{n:6,pan:o})}else if(e===`circle`){let e=t.points,r=this.wandPlaneRef(),a=e.filter((e,t)=>t%4==0).map(e=>this.viewPlanePoint(e.x,e.y,r).add(new B(0,Zf*.8,0))),s=Math.min(12,a.length),c=a.reduce((e,t)=>e.add(t),new B).multiplyScalar(1/a.length);for(let e=0;e<s;e++){let t=a[Math.floor(e/s*a.length)];this.sched.wait(e*.04).then(()=>{this.shapes.heart({pos:t,vel:t.clone().sub(c).multiplyScalar(.6).add(new B(0,.25,0)),size:X(.05,.07),color:i[e%i.length],life:3.2,hover:.8,drag:2.5,buoy:.15,spin:.4}),this.sparkles.spawn(t,{color:`#ffffff`,size:.03,life:.6,kind:1,intensity:3})})}this.lights.magic.flash(c,n.main,2.5,1.2,2.5),$.sfx(`circle`,{pan:o}),this.girl.busy||this.girl.twirl(1)}}};function Rp(e,t,n){let r=new B,i=new B,a=(e,t,n)=>{let r=t.fov,i=Math.tan(r*Math.PI/360),a=i*e.aspect,o=n.height/t.fill,s=(n.width||n.height*.6)/(t.fillW||.85),c=Math.max(o/(2*i),s/(2*a))*(t.zoom||1),l=n.pos.clone().add(new B(0,n.height*(n.centerY??.5),0)),u=t.yaw||0,d=new B(Math.sin(u),t.elev??.15,Math.cos(u)).normalize(),f=new B(Math.cos(u),0,-Math.sin(u)),p=new B().crossVectors(d,f).normalize(),m=l.clone().addScaledVector(f,-(t.sx||0)*c*a).addScaledVector(p,-(t.sy||0)*c*i);return{pos:m.clone().addScaledVector(d,c),target:m,fov:r}};return o=>{let s=e(),c=a(o,t,s),l=a(o,n,s),u=Yu(.3,.7,o.t);return r.lerpVectors(c.pos,l.pos,u),i.lerpVectors(c.target,l.target,u),{pos:r.clone(),target:i.clone(),fov:Ju(c.fov,l.fov,u)}}}function zp(e,t){let n=e.engine.layout,r=Yu(.3,.7,n.t),[i,a]={transform:[{x:0,y:-.66,w:.9,h:.27},{x:.6,y:-.12,w:.36,h:.46}],wand:[{x:0,y:-.76,w:.66,h:.19},{x:.7,y:-.55,w:.25,h:.3}],corner:[{x:-.6,y:-.86,w:.36,h:.11},{x:.79,y:-.72,w:.19,h:.21}]}[t],o=e.hud;o.x=Ju(i.x,a.x,r),o.y=Ju(i.y,a.y,r),o.w=Ju(i.w,a.w,r),o.h=Ju(i.h,a.h,r)}var Bp=class{constructor(){this.allow={}}enter(){let e=this.game;this.phase=`closed`,this.box=e.box,this.compact=e.compact,this.idleNext=4.5,this.lidDrag=null,e.girl.setPosition(Df.girlDesk),e.girl.setFacing(Math.PI,!0),e.girl.setLayer(tp.MIRROR),e.girlHomeFacing=Math.PI;let t=this.compact;this.box.group.add(t.group),t.group.position.set(0,this.box.cushionTop+.004,.005),t.group.rotation.set(-Math.PI/2,0,0),t.group.scale.setScalar(1),e.hud.active=!1,e.setCameraGoal(this._boxFrame(0),2),e.snapCamera(),this.mirrorGlow=new ki(new hi({map:Zd(),color:new H(`#ffd2e6`).multiplyScalar(1.6),transparent:!0,blending:2,depthWrite:!1})),this.mirrorGlow.layers.set(tp.MIRROR),this.mirrorGlow.scale.setScalar(.01),e.room.scene.add(this.mirrorGlow),this.glowLevel=0,this.moteTimer=0,e.onFirstTouch=()=>$.setMusic(`room`)}_boxFrame(e){return this.game,Rp(()=>({pos:Df.boxPos.clone().add(new B(0,-.01,.02)),height:e===0?.16:.22,width:.34,centerY:.5}),{fov:50,fill:.2,fillW:.74,sy:e===0?-.3:-.22,elev:e===0?.3:.85},{fov:42,fill:.19,fillW:.36,sy:e===0?-.25:-.12,elev:e===0?.3:.8})}pick(e){let t=this.game,n=this.box;if(this.phase===`closed`){let r=t.screenOf(n.jewelWorld()),i=t.engine.layout,a=Math.max(48,Math.min(i.w,i.h)*.1);return Math.hypot(r.x-e.x,r.y-e.y)<a?this._jewelHandler():this._hitBox(e)?this._boxWiggle():null}if(this.phase===`unlatched`)return this._hitBox(e,1.4)?this._lidHandler():null;if(this.phase===`open`){let n=t.screenOf(this.compact.group.getWorldPosition(new B)),r=t.engine.layout,i=Math.max(70,Math.min(r.w,r.h)*.16);return Math.hypot(n.x-e.x,n.y-e.y)<i?{up:()=>this.liftCompact()}:this._hitBox(e)?this._boxWiggle():null}if(this.phase===`held`){let n=this.compact,r=t.screenOf(n.outerWorld()),i=t.engine.layout,a=Math.max(56,Math.min(i.w,i.h)*.12);if(Math.hypot(r.x-e.x,r.y-e.y)<a)return{down:()=>{n.press.target=.5,$.sfx(`press`,{vel:.7})},up:()=>this.openCompact()};let o=t.screenOf(n.group.getWorldPosition(new B));return Math.hypot(o.x-e.x,o.y-e.y)<a*2.6?{up:()=>{n.wobble.kick(5),n.glow=1.5,setTimeout(()=>n.glow=.5,500),$.sfx(`press`,{vel:.5})}}:null}return this.phase===`mirror`?{up:()=>this.feedMirror(e)}:null}onEmptyTap(e){return this.game,this.phase===`closed`&&this._glint(),!1}_hitBox(e,t=1){let n=this.game,r=n.screenOf(this.box.group.getWorldPosition(new B).add(new B(0,.07,0))),i=n.screenOf(this.box.group.getWorldPosition(new B).add(new B(.17,.07,0))),a=Math.abs(i.x-r.x)*1.2*t;return Math.abs(e.x-r.x)<a&&Math.abs(e.y-r.y)<a*.8}_boxWiggle(){let e=this.box;return{up:()=>{e.wiggle.kick(X(-1,1)>0?6:-6),e.hop.kick(3),$.sfx(`press`,{vel:.6}),this._glint()}}}_glint(){let e=this.game,t=this.box.jewelWorld();this.box.glow=1.3,setTimeout(()=>this.box.glow=.35,450),e.sparkles.spawn(t.clone().add(new B(.012,.014,.012)),{color:`#ffffff`,size:.045,life:.7,kind:1,intensity:3,spin:2}),$.sfx(`sparkle`,{n:2,vel:.5})}_jewelHandler(){let e=this.box,t=!1,n=()=>{t||(t=!0,this.unlatch())};return{down:t=>{performance.now(),e.press.target=.35,e.press.k=120,$.sfx(`press`,{vel:.8}),this._holdTimer=setTimeout(n,260)},up:()=>{clearTimeout(this._holdTimer),n()}}}unlatch(){let e=this.game,t=this.box;if(t.press.k=320,t.press.target=1,$.sfx(`click`),navigator.vibrate)try{navigator.vibrate(18)}catch{}setTimeout(()=>{t.press.target=0},260),e.sched.wait(.12).then(()=>{t.latchAngle.target=2.1,t.latchAngle.kick(14),t.lidAngle.target=.1,t.lidAngle.kick(2.2),t.leakAmt=1,t.glow=1.4,$.sfx(`latch`);let n=t.group.localToWorld(new B(0,t.lidPivot.position.y+.005,.1));for(let n=0;n<26;n++){let r=X(-.14,.14);e.sparkles.spawn(t.group.localToWorld(new B(r,t.lidPivot.position.y+.004,X(-.09,.11))),{color:n%3?`#ffd2e6`:`#ffffff`,vel:new B(r*.6,X(.15,.45),X(0,.2)),size:X(.008,.02),life:X(.8,1.6),kind:n%2,drag:1.5,intensity:3})}e.lights.magic.flash(n,`#ffc6de`,.4,1.2,.6),this.phase=`unlatched`,this.idleNext=this.game.stateTime+4,e.setCameraGoal(this._boxFrame(.5),1.6)})}_lidHandler(){let e=this.box,t=this.game,n=!1;return{down:t=>{this.lidDrag={y0:t.y,a0:e.lidAngle.x}},move:r=>{let i=(this.lidDrag.y0-r.y)/t.engine.layout.h;Math.abs(i)>.015&&(n=!0),n&&(e.lidAngle.target=Y(.1+i*6,.05,2),e.lidAngle.target>1&&this.openLid())},up:()=>{this.phase===`unlatched`&&(!n||e.lidAngle.target>.45?this.openLid():(e.lidAngle.target=.1,e.wiggle.kick(3),$.sfx(`boing`,{vel:.5})))}}}openLid(){if(this.phase!==`unlatched`)return;let e=this.game,t=this.box;this.phase=`open`,t.lidAngle.target=1.95,t.lidAngle.kick(3),t.open=!0,$.sfx(`lid`),$.setMusic(`room`),e.rimTarget=.45,t.leakAmt=1.6,e.tween(2.5,e=>{t.leakAmt=Ju(1.6,.35,e)},Z.outCubic);let n=t.group.localToWorld(new B(0,t.cushionTop+.01,0));e.lights.magic.flash(n.clone().add(new B(0,.12,.05)),`#ffd6ea`,.8,2,.9);for(let t=0;t<40;t++)e.sched.wait(t*.03).then(()=>{e.sparkles.spawn(n.clone().add(new B(X(-.12,.12),0,X(-.08,.08))),{color:t%4?`#ffe0ee`:`#fff4c8`,vel:new B(X(-.05,.05),X(.25,.6),X(-.05,.05)),size:X(.008,.022),life:X(1.2,2.2),kind:t%2,drag:.8,intensity:2.6,twinkle:9})});this._beams(n),e.setCameraGoal(this._boxFrame(1),1.4),this.compact.glow=1.2,this.idleNext=e.stateTime+3.5}_beams(e){let t=this.game,n=new hi({map:Pd(),color:new H(`#ffe0ee`).multiplyScalar(.8),transparent:!0,opacity:0,blending:2,depthWrite:!1}),r=new ki(n);r.position.copy(e).add(new B(0,.08,0)),r.scale.set(.5,.5,1),t.room.scene.add(r),t.tween(2.4,e=>{n.opacity=Math.sin(Math.PI*e)*.45,r.scale.set(.35+e*.4,.3+e*.6,1)},Z.linear).then(()=>t.room.scene.remove(r))}liftCompact(){if(this.phase!==`open`)return;let e=this.game,t=this.compact;this.phase=`lifting`,$.sfx(`magicRise`,{n:10,gap:.06});let n=t.group.getWorldPosition(new B),r=t.group.getWorldQuaternion(new _t);e.activeScene.add(t.group),t.group.position.copy(n),t.group.quaternion.copy(r),t.group.scale.setScalar(1);let i=n.clone().add(new B(0,.12,.02));e.tween(.6,r=>{t.group.position.lerpVectors(n,i,r);for(let n=0;n<2;n++)e.sparkles.spawn(t.group.position.clone().add(new B(X(-.05,.05),X(-.02,.02),X(-.05,.05))),{color:`#ffd6ea`,size:.015,life:.8,kind:1,intensity:2.5,vel:new B(0,-.1,0)})},Z.outCubic).then(()=>{e.hud.active=!0,e.hud.k=3.2,e.hud.depth=.42,e.hud.tilt=-.15,this._hudHeld(),this.phase=`held`,this.idleNext=e.stateTime+3,t.glow=1,e.tween(1,()=>{},Z.linear).then(()=>{e.hud.k=7})})}_hudHeld(){let e=this.game,t=e.engine.layout,n=Yu(.3,.7,t.t);e.hud.x=0,e.hud.y=Ju(-.08,-.05,n),e.hud.w=Ju(.62,.32,n),e.hud.h=Ju(.36,.5,n)}_hudMirror(){let e=this.game,t=e.engine.layout,n=Yu(.3,.7,t.t),r=Ju(1.6,.78,n);e.hud.w=r,e.hud.h=Ju(.8,.9,n);let i=this.compact.openFrac;e.hud.x=r*.5*i,e.hud.y=Ju(0,-.02,n)}openCompact(){if(this.phase!==`held`)return;let e=this.game,t=this.compact;this.phase=`mirror`,t.press.target=1,$.sfx(`click`),setTimeout(()=>t.press.target=0,220),t.tabAngle.target=1.4,t.tabAngle.kick(10),e.sched.wait(.18).then(()=>{t.openAngle.target=2.95,t.openAngle.kick(1.5),$.sfx(`lid`,{vel:.8}),t.aura.material.opacity=.6,e.tween(1.2,e=>t.aura.material.opacity=.6*(1-e),Z.outCubic),this._hudMirror(),e.portrait.enabled=!0,t.mirrorMat.uniforms.tView.value=e.portrait.rt.texture,t.mirrorMat.uniforms.uHasView.value=1,t.mirrorMat.uniforms.uMix.value=0,t.mirrorMat.uniforms.uFlip.value=1,e.portraitUpdate=e=>this._updatePortrait(e),e.girl.setExpression(`wow`,2.5),e.sched.wait(2.2).then(()=>{this.phase===`mirror`&&e.girl.setExpression(`happy`,2)}),this.mirrorStart=e.stateTime,this.idleNext=e.stateTime+6})}_updatePortrait(e){let t=this.game,n=t.girl.headWorld(new B);n.y-=.03;let r=new B(0,0,1).applyQuaternion(t.girl.root.quaternion);e.fov=44,e.position.copy(n).addScaledVector(r,.56).add(new B(0,.02,0)),e.lookAt(n.clone().add(new B(0,-.07,0))),e.updateProjectionMatrix(),this.mirrorGlow.position.copy(n).addScaledVector(r,-.55).add(new B(0,.05,0))}feedMirror(e){let t=this.game;this.glowLevel=Math.min(1,this.glowLevel+.14),t.compact.wobble.kick(2),$.sfx(`sparkle`,{n:4,vel:.7});let n=t.compact.mirrorWorld();t.sparkleBurst(n,`#ffd0e4`,14,.25),t.girl.setExpression(`happy`,1.5),Math.random()<.5&&t.girl.wave()}update(e,t){let n=this.game;if(this.moteTimer-=e,this.moteTimer<=0&&n.activeName===`room`){this.moteTimer=.12;let e=n.room.moteBox;n.sparkles.spawn(new B(X(e.x0,e.x1),X(e.y0,e.y1),X(e.z0,e.z1)),{color:`#fff6e0`,size:X(.006,.012),life:X(3,5),intensity:1.3,vel:new B(X(-.02,.02),X(-.01,.02),X(-.02,.02)),drag:.1,twinkle:X(2,5)})}if(this.phase===`unlatched`&&(this.box.lidAngle.target=this.lidDrag&&this.game.input.active?this.box.lidAngle.target:.1+Math.sin(t*2.2)*.025,this.box.leakAmt=.8+Math.sin(t*3)*.2),(this.phase===`held`||this.phase===`mirror`)&&(this.phase===`held`?this._hudHeld():this._hudMirror()),this.phase===`mirror`){let t=n.stateTime-this.mirrorStart;this.glowLevel=Math.min(1,this.glowLevel+e*(t>2?.085:.02));let r=this.glowLevel;this.mirrorGlow.scale.setScalar(.25+r*2.2),this.mirrorGlow.material.opacity=Math.min(1,.4+r);let i=n.compact.mirrorMat.uniforms;if(i.uGlow.value=Yu(.55,1,r)*1.2,n.compact.aura.material.opacity=r*.6,Math.random()<r*e*30){let e=n.compact.mirrorWorld();n.sparkles.spawn(e.clone().add(new B(X(-.03,.03),X(-.03,.03),.005)),{color:`#ffd6ea`,size:X(.004,.01),life:1,kind:1,intensity:3,vel:new B(X(-.04,.04),X(-.02,.05),.06).applyQuaternion(n.camera.quaternion)})}r>=1&&!this.leaving&&(this.leaving=!0,this.toTransform())}}idle(e){let t=this.game;if(!(t.stateTime<this.idleNext)&&(this.idleNext=t.stateTime+5.5,!(e<3.5))){if(this.phase===`closed`)this.box.hop.kick(5),this._glint();else if(this.phase===`unlatched`)this.box.lidAngle.kick(1.5),this.box.leakAmt=1.4,$.sfx(`sparkle`,{n:2,vel:.4});else if(this.phase===`open`){let e=this.compact;e.group.position.y+=0,e.wobble.kick(4),e.glow=1.6,setTimeout(()=>e.glow=1,500),t.sparkleBurst(e.group.getWorldPosition(new B),`#fff2b8`,8,.2),$.sfx(`sparkle`,{n:2,vel:.4})}else if(this.phase===`held`){let e=this.compact;e.wobble.kick(4),e.glow=2,setTimeout(()=>e.glow=.8,600),t.sparkles.spawn(e.outerWorld().add(new B(.01,.01,.01)),{color:`#ffffff`,size:.03,life:.7,kind:1,intensity:3}),$.sfx(`sparkle`,{n:2,vel:.4})}else this.phase===`mirror`&&t.girl.wave()}}async toTransform(){let e=this.game,t=e.girl,n=e.token;this.phase=`leaving`,$.sfx(`bloom`),$.setMusic(`transform`),e.flash(.92,420,`#ffe8f3`,2.2),e.rimTarget=.8;let r=e.compact.mirrorWorld();for(let t=0;t<60;t++)e.sparkles.spawn(r.clone(),{color:t%3?`#ffd6ea`:`#ffffff`,size:X(.01,.03),life:X(.8,1.6),kind:t%2,intensity:3,vel:new B(X(-.5,.5),X(-.4,.5),X(.2,.8)).applyQuaternion(e.camera.quaternion),drag:1.5});let i=e.cam.pos.clone(),a=Df.girlDesk.clone().add(new B(.28,1.18,.95)),o=Df.girlDesk.clone().add(new B(0,.72,-.5)),s=e.cam.target.clone();e.cam.script={},e.hud.active=!1;let c=e.compact.group.position.clone(),l=e.compact.group.quaternion.clone(),u=e.compact.group.scale.x,d=Df.girlDesk.clone().add(new B(0,.8,-.32)),f=new _t().setFromEuler(new An(-.15,0,0)),p=!1;if(await e.tween(1.1,n=>{e.cam.pos.lerpVectors(i,a,n),e.cam.target.lerpVectors(s,o,n),e.compact.group.position.lerpVectors(c,d,n),e.compact.group.quaternion.slerpQuaternions(l,f,n),e.compact.group.scale.setScalar(Ju(u,1.4,n)),!p&&n>.22&&(p=!0,t.setLayer(0))},Z.inOutCubic),e.alive(n)){e.portrait.enabled=!1,this.mirrorGlow.visible=!1,t.setFacing(0),t.spinVel=0,t.setExpression(`happy`,2.5),$.sfx(`twirl`);for(let n=0;n<50;n++)e.sched.wait(n*.02).then(()=>{let r=n*.5;e.sparkles.spawn(t.root.position.clone().add(new B(Math.cos(r)*.3,.1+n*.018,Math.sin(r)*.3)),{color:n%2?`#ffd6ea`:`#fff2b8`,size:.025,life:1.2,kind:1,intensity:2.6})});t.walkTo(Df.girlStage,()=>t.setFacing(0),.55),e.girlHomeFacing=0,e.hud.active=!0,e.hud.k=2.6,e.hud.depth=.55,e.hud.tilt=-.12,zp(e,`transform`),this.compact.mirrorMat.uniforms.uGlow.value=0,e.portrait.enabled=!0,e.portraitScene=null,e.room.scene.remove(this.mirrorGlow),e.goto(`transform`,{fromAct1:!0})}}exit(){}};function Vp(e,t={}){return Rp(()=>({pos:e.girl.root.position.clone(),height:1.06,width:.62,centerY:.5}),{fov:38,fill:t.pFill??.58,fillW:.9,sy:t.pSy??.27,elev:t.elev??.16},{fov:36,fill:t.lFill??.8,fillW:.6,sx:t.lSx??-.28,sy:t.lSy??.02,elev:t.elev??.14})}function Hp(e,t=1.35,n=.62,r=36){return i=>{let a=e.girl,o=new B(0,0,1).applyQuaternion(new _t().setFromEuler(new An(0,a.facing,0))),s=a.root.position.clone();i.fov=r,i.position.copy(s).addScaledVector(o,t).add(new B(0,n+.05,0)),i.lookAt(s.clone().add(new B(0,n-.02,0))),i.updateProjectionMatrix()}}var Up={pink:`boots`,lavender:`skirt`,blue:`top`},Wp=class{constructor(){this.allow={gems:!0,girl:!0,floor:!0,wand:!1}}enter(e={}){let t=this.game;this.busy=!1,this.queue=[],this.done=!1,this.glintTimer=1,this.glintIdx=0,this.idleNext=5,this.allow={gems:!0,girl:!0,floor:!0,wand:!1};let n=Vp(t);e.fromAct1?t.cameraTo(n,2.6,Z.inOutSine):(t.setCameraGoal(n),t.snapCamera()),t.hud.active=!0,zp(t,`transform`);let r=t.compact;r.openAngle.target=2.95;let i=r.mirrorMat.uniforms;i.tView.value=t.portrait.rt.texture,i.uHasView.value=1,i.uMix.value=0,i.uFlip.value=1,t.portrait.enabled=!0,t.portraitUpdate=Hp(t),t.girlHomeFacing=0,e.fromAct1||(t.girl.setLayer(0),t.girl.setPosition(Df.girlStage),t.girl.setFacing(0,!0))}floorBounds(e){return Math.hypot(e.x,e.z- -.6)<1.05&&e.z<.25}floorClamp(e){let t=new B(0,0,-.75),n=e.clone().sub(t);return n.y=0,n.length()>.6&&n.setLength(.6),t.add(n)}onGem(e){if(this.done)this.game.defaultGem(e,{recolor:!1});else if(this.busy){this.queue=[e];let t=this.game.compact;t.gems[e].flash=1,t.gems[e].hop.kick(4),$.sfx(`ding`,{i:e})}else this.doGem(e)}async doGem(e){let t=this.game,n=t.girl.outfit;this.busy=!0,t.defaultGem(e,{recolor:!1}),t.input.poke(),await t.wait(.32);let r=rf[e].key,i=Up[r],a=null;a=i&&!n.built[i]?i:[`boots`,`skirt`,`top`].find(e=>!n.built[e]),t.girl.setExpression(`wow`,3),t.rimTarget=.7,a===`boots`?(await n.buildBoots(r),t.girl.stomp(0),setTimeout(()=>t.girl.stomp(1),650)):a===`skirt`?await n.buildSkirt(r):a===`top`?await n.buildTop(r):n.palette.skirt===r?($.sfx(`twirl`),t.girl.twirl(.9),await n.setStyle(n.style+1)):($.sfx(`magicRise`,{n:6}),await n.recolor(r),t.girl.twirl(.5)),t.rimTarget=.4,t.girl.setExpression(`happy`,1.5),a&&(t.girl.hop(.8),this._celebrate(of[r].main)),this.busy=!1,this._checkComplete(),this._next()}_next(){if(!this.queue.length||this.done)return;let e=this.queue.shift();e===`center`?this.onCenter():this.doGem(e)}_celebrate(e){let t=this.game,n=t.girl.chestWorld(new B);for(let r=0;r<3;r++)t.shapes.heart({pos:n.clone().add(new B(X(-.2,.2),X(0,.3),.1)),vel:new B(X(-.2,.2),.4,X(0,.2)),size:X(.05,.07),color:Xu([e,af,`#ffffff`]),life:2.2,hover:.5,buoy:.1});$.sfx(`heart`,{n:2,vel:.6})}async onCenter(){let e=this.game,t=e.girl.outfit;if(this.done||t.built.bow&&!this.busy)e.defaultCenter();else if(this.busy)t.built.bow?e.defaultCenter():(this.queue=[`center`],e.compact.centerGlow=1.8,setTimeout(()=>e.compact.centerGlow=.5,400),$.sfx(`ding`,{i:4}));else if(t.built.bow)e.defaultCenter();else{this.busy=!0;let n=e.compact;n.centerGlow=2,$.sfx(`magicRise`,{n:9}),e.beam(n.centerWorld(),e.girl.headWorld(new B).add(new B(0,.15,0)),af),await e.wait(.35),e.girl.setExpression(`wow`,2),await t.buildBow(t.built.top?t.palette.top:e.palette),n.centerGlow=.5,e.girl.setExpression(`happy`,1.5),e.girl.hop(.8),this.busy=!1,this._checkComplete(),this._next()}}_checkComplete(){this.game.girl.outfit.complete&&!this.done&&(this.done=!0,this.game.wait(1.2).then(()=>this.wandBirth()))}async wandBirth(){let e=this.game,t=e.girl,n=e.wand,r=e.token;if(this.allow={gems:!1,girl:!1,floor:!1,wand:!1},t.walk=null,t.setFacing(0),t.cheer(1.2),$.sfx(`cheer`,{vel:.5}),await e.wait(1.3),!e.alive(r))return;let i=e.compact;i.centerGlow=2.4,$.sfx(`swell`,{dur:3});let a=i.centerWorld(),o=t.chestWorld(new B).lerp(e.camera.position,.18).add(new B(.12,.12,0)),s=new Na(a.clone(),a.clone().lerp(o,.5).add(new B(0,.25,0)),o.clone());if(e.ribbons.scripted((e,t,n)=>{let r=Y(t/.7);s.getPoint(e*r,n)},{color:`#ffe7a8`,width:.01,life:1.4,glow:3.5,glowFloor:2.5}),$.sfx(`magicRise`,{n:12,gap:.05}),t.lookTarget=o.clone(),await e.wait(.7),!e.alive(r)||(n.show(!0),n.mode=`script`,n.teleport(o.clone().add(new B(0,-Zf*.5,0))),n.gripTarget.copy(n.grip),n.scaleMul=.01,e.lights.magic.flash(o,`#ffe7a8`,3,1.6,2.5),await e.tween(1,t=>{n.scaleMul=Math.max(.01,Z.outBack(t)),n.twist=(1-t)*18;let r=t*J*3;for(let n=0;n<2;n++){let i=r+n*Math.PI;e.sparkles.spawn(o.clone().add(new B(Math.cos(i)*.16*(1-t*.5),(t-.5)*.3,Math.sin(i)*.16*(1-t*.5))),{color:n?`#fff2b8`:`#ffd6ea`,size:.025,life:.7,kind:1,intensity:3})}},Z.linear),!e.alive(r))||($.sfx(`chime`),e.sparkleBurst(n.tipWorld(new B),`#ffffff`,40,1),await e.wait(.3),n.mode=`hand`,n.followK=3,await e.wait(.7),!e.alive(r)))return;t.lookTarget=null,t.pose(),$.sfx(`heart`,{n:4});let c=n.tipWorld(new B);for(let t=0;t<6;t++)e.shapes.heart({pos:c.clone(),vel:new B(X(-.6,.6),X(.2,.8),X(-.1,.3)),size:X(.05,.08),color:Xu([af,`#ffffff`,of[e.palette].main]),life:2.5,hover:.6,drag:2.5,buoy:.12});await e.wait(1.2),e.alive(r)&&e.goto(`wand`)}update(e,t){let n=this.game;if(n.cam.script===null&&n.cam.goal===null&&n.setCameraGoal(Vp(n)),zp(n,`transform`),this.glintTimer-=e,this.glintTimer<=0){this.glintTimer=1.5;let e=n.compact.gems[this.glintIdx%6];e.flash=Math.max(e.flash,.45),this.glintIdx++}}idle(e){let t=this.game;if(t.stateTime<this.idleNext||(this.idleNext=t.stateTime+6.5,e<4.5||this.busy||this.done))return;let n=t.girl.outfit,r=null;n.built.boots?n.built.skirt?n.built.top||(r=1):r=3:r=0;let i=t.compact,a;r===null?n.built.bow||(i.centerGlow=2.2,i.centerPress.kick(-6),setTimeout(()=>i.centerGlow=.5,800),$.sfx(`ding`,{i:4}),a=i.centerWorld()):(i.gems[r].hop.kick(7),i.gems[r].flash=1.3,$.sfx(`ding`,{i:r}),a=i.gemWorld(r)),a&&(t.girl.lookTarget=a.clone(),t.girl.pointTarget=a.clone(),setTimeout(()=>{t.girl.pointTarget=null,t.girl.lookTarget=null},1300),t.girl.hop(.5))}exit(){}},Gp=class{constructor(){this.allow={gems:!0,girl:!0,floor:!0,wand:!0}}enter(){let e=this.game;this.phase=`play`,this.allow={gems:!0,girl:!0,floor:!0,wand:!0},$.setMusic(`wand`),e.setCameraGoal(Vp(e,{pFill:.48,pSy:.1,lFill:.66,lSx:-.18,lSy:-.02}),1.5),e.wand.show(!0),[`hidden`,`script`,`free`].includes(e.wand.mode)&&(e.wand.mode=`hand`),e.hud.active=!0,zp(e,`wand`),e.portrait.enabled=!0,e.portraitUpdate=Hp(e),this.idleNext=6,this.magicStart=e.magicCount,this.kinds=new Set}floorBounds(e){return Math.hypot(e.x,e.z+.6)<1.05&&e.z<.25}floorClamp(e){let t=new B(0,0,-.75),n=e.clone().sub(t);return n.y=0,n.length()>.6&&n.setLength(.6),t.add(n)}onGesture(e,t){let n=this.game;if(this.kinds.add(e===`stroke`?t.dir:e),this.phase===`wait`&&this.mirror){let r=n.screenOf(n.wand.tipWorld(new B));if(this.mirror.screenHit(n,r.x,r.y))return n.defaultMagic(e,t),this.enterTheater(),!0}return!1}pick(e){return this.phase===`wait`&&this.mirror&&this.mirror.screenHit(this.game,e.x,e.y)?{up:()=>this.enterTheater()}:null}onMirror(){this.phase===`wait`?this.enterTheater():this.game.defaultMirrorTap()}update(e,t){let n=this.game;if(zp(n,`wand`),this.phase===`play`){let e=n.magicCount-this.magicStart;(e>=7&&n.stateTime>16||e>=3&&n.stateTime>50||n.stateTime>75)&&this.mirrorCall()}if(this.mirror&&this.mirror.update(e,t,n.engine),this.phase===`wait`&&Math.random()<e*6&&this.mirror){let e=this.mirror.randomSurfacePoint();n.sparkles.spawn(e,{color:Xu([`#ffd6ea`,`#ffffff`,`#fff2b8`]),size:X(.015,.03),life:2,kind:1,intensity:2.4,vel:new B(X(-.05,.05),X(0,.08),X(.08,.2)),drag:.4,twinkle:6})}}idle(e){let t=this.game;if(!(t.stateTime<this.idleNext)&&(this.idleNext=t.stateTime+7,!(e<5))){if(this.phase===`play`&&!t.wandDragging){t.wand.mode=`present`,t.girl.setExpression(`happy`,2),$.sfx(`sparkle`,{n:3,vel:.5});let e=t.wand.tipWorld(new B);for(let n=0;n<3;n++)t.shapes.heart({pos:e.clone(),vel:new B(X(-.3,.3),.4,.2),size:.045,color:Xu([af,`#ffffff`]),life:1.8,hover:.5,buoy:.1});setTimeout(()=>{t.wand.mode===`present`&&(t.wand.mode=`hand`)},2600)}else this.phase===`wait`&&this.mirror&&(this.mirror.pulse=1.2,$.sfx(`ripple`,{vel:.7}),t.girl.lookTarget=this.mirror.center(),t.girl.pointTarget=this.mirror.center(),t.girl.hop(.6),setTimeout(()=>{t.girl.lookTarget=null,t.girl.pointTarget=null},1600))}}async mirrorCall(){let e=this.game,t=e.token;if(!e.theater)return;this.phase=`call`,$.setMusic(`mirror`),$.sfx(`ripple`);let n=e.compact,r=n.mirrorMat.uniforms;if(e.preview.enabled=!0,e.previewScene=e.theater.scene,e.theater.placePreviewCamera(e.preview.camera),r.tPortal.value=e.preview.rt.texture,r.uPortalMode.value=0,n.wobble.kick(6),await e.tween(2,e=>{r.uRipple.value=Math.sin(Math.PI*e)*1.2+e*.3,r.uMix.value=Yu(.2,.8,e)},Z.linear),!e.alive(t)||(e.girl.lookTarget=n.mirrorWorld(),e.girl.setExpression(`wow`,2),await e.wait(.8),!e.alive(t)))return;let i=Df.mirrorPos.clone();this.mirror=new vp(e.mats,{light:e.box.innerLight}),e.box.innerLight.parent.remove(e.box.innerLight),e.room.scene.add(e.box.innerLight),e.box.leakAmt=0,this.mirror.group.position.copy(i),this.mirror.group.scale.setScalar(.001),e.room.scene.add(this.mirror.group),e.beam(n.mirrorWorld(),i.clone().add(new B(0,.9,0)),`#ffd6ea`,.5),$.sfx(`magicRise`,{n:12,gap:.05}),await e.wait(.5),e.alive(t)&&(e.portalSrc=this.mirror.frame,e.portalDst=e.theater.entranceFrame,e.portalDstScene=e.theater.scene,e.portal.enabled=!0,this.mirror.setPortal(e.portal.rt.texture),$.sfx(`door`,{vel:.6}),e.lights.magic.flash(i.clone().add(new B(0,1,.4)),`#ffd6ea`,3,2,3),await e.tween(1.2,e=>{this.mirror.group.scale.setScalar(Math.max(.001,Z.outBack(e))),this.mirror.ripple=1.5*(1-e)+.25},Z.linear),e.alive(t)&&(e.girl.lookTarget=this.mirror.center(),e.girl.setFacing(Math.PI*.85),await e.wait(1.2),e.girl.setFacing(0),e.girl.hop(1),e.girl.setExpression(`happy`,2),e.girl.lookTarget=null,e.setCameraGoal(Vp(e,{pFill:.4,pSy:.08,lFill:.55,lSx:-.08,lSy:-.05,elev:.2}),1.2),r.uMix.value=1,this.phase=`wait`,this.idleNext=e.stateTime+4))}async enterTheater(){if(this.phase!==`wait`)return;let e=this.game,t=e.girl,n=e.token;this.phase=`enter`,this.allow={gems:!1,girl:!1,floor:!1,wand:!1},e.wand.mode=`hand`,$.sfx(`ripple`),$.sfx(`swell`,{dur:3}),this.mirror.ripple=1.2,this.mirror.pulse=1.5;let r=this.mirror.group.position.clone();t.lookTarget=null,t.setExpression(`happy`,4);let i=r.clone().add(new B(0,0,-.6));t.walkTo(r.clone().add(new B(0,0,.25)),null,.8),e.hud.k=4;let a=this.mirror.center(),o=e.cam.pos.clone(),s=e.cam.target.clone(),c=new B(0,1.32,r.z+1.6);if(e.cam.script={},await e.tween(1.6,t=>{e.cam.pos.lerpVectors(o,c,t),e.cam.target.lerpVectors(s,a,t),e.cam.fov=Ju(e.cam.fov,46,.05)},Z.inOutSine),!e.alive(n))return;t.walkTo(i,null,.75);let l=!1,u=!1,d=e.theater,f=new B(0,1.3,r.z-.5),p=new B(0,1,r.z-3),m=e.cam.pos.clone(),h=e.cam.target.clone();await e.tween(2.2,n=>{if(!l&&t.root.position.z<r.z-.05){l=!0;let n=e.portal.mapMatrix(this.mirror.frame,d.entranceFrame,t.root.matrixWorld),r=new B,i=new _t,a=new B;if(n.decompose(r,i,a),d.scene.add(t.root),t.root.position.copy(r),t.prevPos.copy(r),t.walk){let n=t.walk.target.clone(),r=e.portal.mapMatrix(this.mirror.frame,d.entranceFrame,new V().makeTranslation(n.x,n.y,n.z));t.walk.target.setFromMatrixPosition(r)}e.wand.group.visible=!1,$.sfx(`ripple`,{vel:.8})}u||(e.cam.pos.lerpVectors(m,f,n),e.cam.target.lerpVectors(h,p,n),e.cam.pos.z<r.z+.02&&(u=!0,this._crossIntoTheater()))},Z.inOutSine),e.alive(n)&&(u||this._crossIntoTheater(),e.goto(`theater`,{arrival:!0}))}_crossIntoTheater(){let e=this.game,t=e.theater,n=new V().compose(e.cam.pos,e.camera.quaternion,new B(1,1,1)),r=e.portal.mapMatrix(this.mirror.frame,t.entranceFrame,n),i=new B,a=new _t,o=new B;r.decompose(i,a,o);let s=e.portal.mapMatrix(this.mirror.frame,t.entranceFrame,new V().makeTranslation(e.cam.target.x,e.cam.target.y,e.cam.target.z));e.cam.pos.copy(i),e.cam.target.setFromMatrixPosition(s),e.portal.enabled=!1,e.preview.enabled=!1,e.setActiveScene(`theater`),e.theater.scene.add(e.girl.root),e.wand.group.visible=!0,e.flash(.25,60,`#ffffff`,3)}exit(){let e=this.game;e.portal.enabled=!1}};function Kp(e,t,n){let r=Yu(.3,.7,e.t);return{pos:t.pos.clone().lerp(n.pos,r),target:t.target.clone().lerp(n.target,r),fov:Ju(t.fov,n.fov,r)}}function qp(e){let t={pos:new B(0,1.75,6.1),target:new B(0,1.2,0),fov:50},n={pos:new B(0,2.25,6.9),target:new B(0,1.05,0),fov:40};return e=>{let r=Kp(e,t,n),i=Y((.6-e.aspect)/.2,0,1);return r.pos.z+=i*1.2,r}}function Jp(e){let t={pos:new B(0,2.1,6.6),target:new B(0,2,-1.4),fov:54},n={pos:new B(0,2.5,7.4),target:new B(0,1.8,-1.2),fov:42};return e=>Kp(e,t,n)}var Yp=class{constructor(){this.allow={gems:!0,girl:!0,floor:!0,wand:!0}}enter(e={}){let t=this.game,n=t.theater;this.T=n,this.phase=`play`,this.kinds=new Set,this.heartItems=[],this.ribbonSide=1,this.idleNext=6,this.doorReady=!1,this.lastHint=0,this.keyTwist=0,t.girlHomeFacing=0,t.hud.active=!0,zp(t,`corner`),t.portrait.enabled=!0,t.portraitUpdate=Hp(t),t.compact.mirrorMat.uniforms.uMix.value=0,t.compact.mirrorMat.uniforms.tView.value=t.portrait.rt.texture,n.layoutDevices(Yu(.3,.7,t.engine.layout.t)),this._onResize=e=>n.layoutDevices(Yu(.3,.7,e.t)),t.engine.onResize.push(this._onResize),e.arrival?this.arrive():(t.setActiveScene(`theater`),t.moveGirlTo(`theater`),t.girl.setPosition(new B(0,yp.stageY,0)),t.girl.setFacing(0,!0),t.wand.show(!0),t.wand.mode=`hand`,t.setCameraGoal(qp(t)),t.snapCamera(),$.setMusic(`theater`))}exit(){let e=this.game;e.engine.onResize=e.engine.onResize.filter(e=>e!==this._onResize),e.portal.enabled=!1}async arrive(){let e=this.game,t=e.girl,n=this.T,r=e.token;this.phase=`arrive`,this.allow={gems:!1,girl:!1,floor:!1,wand:!1},$.setMusic(`theater`),n.audience.lookTarget=t.root.position,e.cameraTo(qp(e),4.2,Z.inOutSine),t.walk=null;let i=t.root.position.clone(),a=new B(0,yp.stageY,0),o=new Na(i,new B(0,4.6,5),a);t.setFacing(Math.PI),t.setExpression(`happy`,4),$.sfx(`twirl`),await e.wait(.3),await e.tween(3.2,n=>{o.getPoint(n,t.root.position),t.prevPos.copy(t.root.position),t.armsUp=Math.sin(Math.PI*n)*.8,Math.random()<.8&&e.sparkles.spawn(t.root.position.clone().add(new B(X(-.2,.2),X(.2,.9),X(-.2,.2))),{color:Xu([`#ffd6ea`,`#fff2b8`,`#ffffff`,of[e.palette].main]),size:X(.02,.05),life:1.5,kind:1,intensity:2.6,gravity:.2})},Z.inOutSine),e.alive(r)&&(t.armsUp=0,t.bounce.kick(-2),$.sfx(`thump`),e.glows.spawn(`round`,new B(0,yp.stageY+.004,0),{size:2.2,color:`#ffd6ea`,intensity:1.4,life:1.2}),e.sparkleBurst(new B(0,yp.stageY+.1,0),`#fff2b8`,40,1.4,{up:.6}),t.setFacing(0),await e.wait(.6),e.alive(r)&&(t.pose(),n.audience.cheer(1,3.5),n.audience.penWave(3),$.sfx(`cheer`),n.audience.lookTarget=t.root.position,await e.wait(1.2),e.alive(r)&&(this.phase=`play`,this.allow={gems:!0,girl:!0,floor:!0,wand:!0},e.setCameraGoal(qp(e),2))))}pick(e){let t=this.game,n=this.T;if(this.phase!==`play`)return null;let r=t.engine.layout,i=Math.max(40,Math.min(r.w,r.h)*.075);for(let r of n.devices){let n=t.screenOf(r.btn.getWorldPosition(new B)),a=t.screenOf(r.group.position.clone().add(new B(0,.2,0))),o=Math.max(i,Math.abs(a.y-n.y)*1.2);if(Math.hypot(n.x-e.x,(n.y+a.y)/2-e.y)<o)return{down:()=>{r.press.target=1,$.sfx(`press`,{vel:.8})},up:()=>this.pressDevice(r)}}for(let r of n.bigStars){if(!r.active||r.leaving)continue;let n=t.screenOf(r.m.position);if(Math.hypot(n.x-e.x,n.y-e.y)<i*1.1)return{up:()=>this.popStar(r)}}for(let r of n.marks){let n=t.screenOf(r.pos);if(Math.hypot(n.x-e.x,n.y-e.y)<i*.9)return{up:()=>this.goToMark(r)}}return null}floorBounds(e){return Math.hypot(e.x,e.z)<yp.stageR-.25}floorClamp(e){let t=e.clone();return t.y=0,t.length()>1.7&&t.setLength(1.7),t.setY(yp.stageY)}wandPlaneRef(){return this.game.girl.chestWorld(new B).lerp(this.game.camera.position,.12)}_count(e){this.kinds.add(e),this.interactions=(this.interactions||0)+1}async pressDevice(e){let t=this.game,n=this.T,r=t.token;e.press.target=0,e.press.kick(-6),e.flash=1,e.wobble.kick(4),this._count(e.kind),$.sfx(`click`,{vel:.6}),t.girl.lookTarget=e.group.position.clone().add(new B(0,.6,0)),setTimeout(()=>t.girl.lookTarget=null,1200);let i=e.grooveMat.uniforms;if($.sfx(`magicRise`,{n:6,gap:.06}),await t.tween(.5,e=>{i.uProg.value=e*1.1},Z.inQuad),!t.alive(r))return;t.tween(1.2,e=>{i.uProg.value=1.1+e,i.uBase.value=.35+(1-e)*1.2},Z.outCubic).then(()=>{i.uProg.value=0,i.uBase.value=.35});let a=new B(0,yp.stageY+.05,-.2);t.glows.spawn(`round`,a,{size:1.4,color:i.uColor.value.getStyle(),intensity:1.4,life:.9}),e.count++,e.kind===`heart`?this._deviceHeart(e):e.kind===`star`?this._deviceStar(e):this._deviceRibbon(e),n.audience.cheer(.4,1.2)}_deviceHeart(e){let t=this.game;if(this.heartItems.length>=8){let e=this.heartItems.shift();e.persistent=!1,e.life=e.age+.6}let n=new B(X(-1.6,1.6),yp.stageY+X(1.3,2.4),X(-1.4,-.4)),r=t.shapes.heart({pos:new B(0,yp.stageY+.2,-.2),vel:new B(0,1.5,0),size:X(.32,.45),color:Xu([`#ff9cc6`,`#ffb3d4`,`#ff8fc0`,`#ffc6de`,of[t.palette].main]),persistent:!0,home:n,spring:2.2,drag:2.4,wobble:3,spin:.3,popIn:.5,upright:1.2});this.heartItems.push(r),t.lights.magic.flash(n,`#ff9cc6`,3,1.2,3.5),$.sfx(`heart`,{n:3,pitch:e.count%4}),t.sparkleBurst(new B(0,yp.stageY+.3,-.2),`#ffd0e4`,24,1,{up:1.2})}_deviceStar(e){let t=this.game,n=this.T,r=n.bigStars.find(e=>!e.active);if(!r){$.sfx(`star`,{n:3});return}let i=n.hanging.filter(e=>!e.hidden&&Math.hypot(e.p.x,e.p.z)<3.2),a=i.length?Xu(i):n.hanging[0];a.hidden=!0,r.hang=a,r.active=!0,r.leaving=!1,r.x=Y(a.p.x,-1.7,1.7),r.z=Y(a.p.z,-1.3,.9),r.top=a.p.y,r.y=a.p.y,r.v=0,r.target=yp.stageY+X(1.5,2.3),r.m.visible=!0,r.thread.visible=!0,$.sfx(`star`,{n:5,pitch:-1}),t.lights.magic.flash(new B(r.x,r.target,r.z),`#ffe7a0`,2.5,1.5,3)}popStar(e){let t=this.game;e.bounce.kick(12),$.sfx(`boing`),this._count(`starpop`),setTimeout(()=>{if(!e.active)return;e.active=!1,e.m.visible=!1,e.thread.visible=!1;let n=e.m.position.clone();for(let e=0;e<3;e++){let r=e/3*J+X(-.3,.3);t.shapes.star({pos:n.clone(),vel:new B(Math.cos(r)*1.2,1.4+X(0,.6),Math.sin(r)*.6),size:.16,color:Xu([`#ffe9a8`,`#fff2c8`,`#ffd0e4`]),life:3.2,drag:.9,buoy:.3,spin:3})}t.sparkleBurst(n,`#fff2b8`,30,1.2),$.sfx(`star`,{n:6}),setTimeout(()=>{e.hang&&(e.hang.hidden=!1)},2500)},260)}_deviceRibbon(e){let t=this.game,n=(e.count-1)%3,r=this.ribbonSide=-this.ribbonSide,i=Xu([of[t.palette].ribbon,`#c4a6ff`,`#ff9cc6`,`#8ed4ff`,`#92e8c6`,`#ffe27a`]),a=yp.stageY;t.ribbons.scripted([(e,t,n)=>{let i=Y(t/1.6),o=r*(4.6-e*9.2*i);n.set(o,a+1.6+Math.sin(e*7+t*2.5)*.4,-.9+Math.cos(e*4+t)*.4)},(e,t,n)=>{let i=Y(t/1.8),o=r*(e*J*1.6*i+t*.9),s=2-e*.6;n.set(Math.sin(o)*s,a+.4+e*2.4*i+Math.sin(t*2+e*6)*.1,Math.cos(o)*s-.2)},(e,t,n)=>{let i=Y(t/1.6),o=e*J*i+t*.8;n.set(Math.sin(o)*2*r,a+1.7+Math.sin(2*o)*.7,-.6+Math.cos(o)*.3)}][n],{color:i,width:.16,life:7,glow:2.6,glowFloor:.5,twist:3}),t.lights.magic.flash(new B(r*2.5,a+1.5,-.6),i,3,2,4),$.sfx(`ribbon`,{len:1.5})}goToMark(e){let t=this.game.girl;$.sfx(`tap`),e.pulse=.6,t.walkTo(e.pos.clone().setY(yp.stageY),()=>{t.setFacing(0),t.stomp()})}onStep(e){let t=this.T,n=this.game,r=null,i=.42;for(let n of t.marks){let t=Math.hypot(n.pos.x-e.x,n.pos.z-e.z);t<i&&(i=t,r=n)}if(!r)return;this._count(`mark`);let a=r.lit;r.lit=1,r.pulse=1,n.glows.spawn(`star`,r.pos.clone().setY(yp.stageY+.005),{size:.9,color:`#ffe28a`,intensity:2,life:1.5}),n.sparkleBurst(r.pos.clone().setY(yp.stageY+.05),`#fff2b8`,26,1,{up:1}),n.lights.magic.flash(r.pos.clone().setY(yp.stageY+.4),`#ffe7a0`,2.5,1,2.5),$.sfx(`step`,{i:r.i+3}),$.sfx(`ding`,{i:r.i}),!a&&t.marks.every(e=>e.lit)&&this.bigStar()}async bigStar(){let e=this.game,t=this.T;await e.wait(.5),$.sfx(`bloom`),t.audience.cheer(1,3),t.audience.penWave(4),e.girl.cheer();for(let e of t.marks)e.pulse=1.5;for(let n=0;n<5;n++){let r=t.marks[n].pos;for(let t=0;t<6;t++)e.shapes.star({pos:r.clone().setY(yp.stageY+.1),vel:new B(X(-.5,.5),X(2,3.2),X(-.5,.5)),size:X(.08,.14),color:Xu([`#ffe9a8`,`#fff2c8`,`#ffd0e4`,`#ffffff`]),life:3,gravity:.6,drag:.6,spin:3})}e.glows.spawn(`star`,new B(0,yp.stageY+.006,0),{size:3.6,color:`#ffe28a`,intensity:1.6,life:2.5,hold:1}),e.lights.magic.flash(new B(0,yp.stageY+1,0),`#ffe7a0`,4,2,5)}onGesture(e,t){let n=this.game,r=this.T;if(this.phase===`key`)return!0;if(this.phase!==`play`)return!1;if(this._count(`wand-`+(e===`stroke`?t.dir:e)),e===`stroke`&&(t.dir===`left`||t.dir===`right`)){let e=t.dir===`right`?1:-1;r.shState.v+=e*(2.5+t.speed*1.2);for(let n of this.heartItems)n.alive&&(n.vel.x+=e*(1.2+t.speed*.4));r.audience.lookTarget=r.stageHeart.position,setTimeout(()=>r.audience.lookTarget=n.girl.root.position,1500)}if(e===`stroke`&&t.dir===`up`)for(let e=0;e<8;e++){let e=Xu(r.hanging);n.sparkles.spawn(e.p,{color:`#fff2b8`,size:.35,life:1.2,kind:1,intensity:3})}return!1}onWandMove(e){let t=this.game,n=this.T;if(!this.doorReady||this.phase!==`play`)return;let r=t.screenOf(t.wand.tipWorld(new B)),i=t.screenOf(n.keyhole.getWorldPosition(new B)),a=t.engine.layout,o=Math.max(46,Math.min(a.w,a.h)*.085);Math.hypot(r.x-i.x,r.y-i.y)<o&&this.insertKey()}onWandRelease(e){return this.phase===`key`&&(this.turned||this.turnKey(),!0)}insertKey(){let e=this.game,t=this.T,n=e.wand;this.phase=`key`,this.allow={gems:!1,girl:!1,floor:!1,wand:!0},n.mode=`locked`,n.followK=10;let r=t.keyhole.getWorldPosition(new B);n.restUp.set(0,.25,-1).normalize(),n.gripTarget.copy(r).addScaledVector(n.restUp,-Zf*.86),$.sfx(`click`),$.sfx(`sparkle`,{n:4}),t.kGlow.material.opacity=1,e.sparkleBurst(r,`#fff2b8`,30,.8),e.girl.lookTarget=r,e.girl.pointTarget=r,this.keyTwist=0,this.turned=!1,this._keyStart=e.stateTime}async turnKey(){if(this.turned)return;this.turned=!0;let e=this.game,t=this.T,n=e.token,r=e.wand;$.sfx(`key`),await e.tween(.5,e=>{r.twist=e*Math.PI*.5},Z.outBack),e.alive(n)&&(r.mode=`script`,$.sfx(`magicRise`,{n:14,gap:.08}),$.setMusic(`finaleWalk`),t.audience.cheer(.6,2),await e.tween(1.8,e=>{t.traceMat.uniforms.uProg.value=e*1.02},Z.inOutSine),e.alive(n)&&($.sfx(`door`),e.flash(.35,120,`#fff6e0`,2.5),t.audience.cheer(1,3),t.audience.penWave(5),t.portal.visible=!0,e.portalSrc=t.doorFrame,e.portalDst=e.finale.entranceFrame,e.portalDstScene=e.finale.scene,e.portal.enabled=!0,t.portalMat.uniforms.tPortal.value=e.portal.rt.texture,t.doorState.featherT=0,await e.tween(2.2,e=>{t.doorLight.material.opacity=Math.sin(Math.PI*Math.min(1,e*1.2))*.8,t.portalMat.uniforms.uGlow.value=.9*(1-e)+.1},Z.linear),e.alive(n)&&(t.kGlow.material.opacity=0,r.mode=`hand`,r.twist=0,e.girl.lookTarget=null,e.girl.pointTarget=null,this.walkToDoor())))}async walkToDoor(){let e=this.game,t=e.girl,n=this.T,r=e.token;this.phase=`leave`,this.allow={gems:!1,girl:!1,floor:!1,wand:!1};let i=yp.stageY,a=new _a([t.root.position.clone(),new B(0,i,-1.6),new B(0,i,-yp.stageR+.15),new B(0,yp.platformY,yp.doorZ+1),new B(0,yp.platformY,yp.doorZ+.35),new B(0,yp.platformY,yp.doorZ-.9)],!1,`centripetal`);t.walk=null,t.setFacing(Math.PI),t.forceWalk=1,e.cam.script={};let o=e.cam.pos.clone(),s=e.cam.target.clone(),c=n.doorFrame.getWorldPosition(new B),l=!1,u=!1;await e.tween(5.5,r=>{let i=Y(r*1.08);a.getPointAt(i,t.root.position),t.prevPos.copy(t.root.position);let d=t.root.position.clone().add(new B(0,1.4,3.2)),f=t.root.position.clone().add(new B(0,1,-1.5)),p=Yu(0,.35,r);if(!u){e.cam.pos.lerpVectors(o,d,p);let t=c.clone().add(new B(0,0,-.4)),n=Yu(.62,1,r);e.cam.pos.lerp(t,n),e.cam.target.lerpVectors(s,f,p).lerp(c.clone().add(new B(0,-.2,-4)),n),e.cam.fov=Ju(e.cam.fov,50,.03)}if(!l&&t.root.position.z<yp.doorZ-.02){l=!0;let r=e.portal.mapMatrix(n.doorFrame,e.finale.entranceFrame,t.root.matrixWorld),i=new B,a=new _t,o=new B;r.decompose(i,a,o),e.finale.scene.add(t.root),this._girlOffset=i.clone().sub(t.root.position),t.root.position.copy(i),e.wand.group.visible=!1}l&&(t.root.position.add(this._girlOffset),t.prevPos.copy(t.root.position)),!u&&e.cam.pos.z<yp.doorZ+.01&&(u=!0,this._cross())},Z.inOutSine),e.alive(r)&&(u||this._cross(),t.forceWalk=0,e.goto(`finale`,{arrival:!0}))}_cross(){let e=this.game,t=this.T,n=new V().compose(e.cam.pos,e.camera.quaternion,new B(1,1,1)),r=e.portal.mapMatrix(t.doorFrame,e.finale.entranceFrame,n),i=new B,a=new _t,o=new B;r.decompose(i,a,o);let s=e.portal.mapMatrix(t.doorFrame,e.finale.entranceFrame,new V().makeTranslation(e.cam.target.x,e.cam.target.y,e.cam.target.z));e.cam.pos.copy(i),e.cam.target.setFromMatrixPosition(s),e.portal.enabled=!1,e.setActiveScene(`finale`),e.finale.scene.add(e.girl.root),e.wand.group.visible=!0,e.flash(.6,80,`#ffffff`,2)}update(e,t){let n=this.game,r=this.T;if(zp(n,`corner`),this.phase===`play`&&!this.doorReady&&(this.kinds.size>=4||(this.interactions||0)>=7||n.stateTime>45)&&(this.doorReady=!0,$.sfx(`shimmer`),n.setCameraGoal(Jp(n),.9),this.idleNext=n.stateTime+2),this.doorReady&&this.phase===`play`&&(r.kGlow.material.opacity=.35+.25*Math.sin(t*3)),this.phase===`key`){let t=n.input.active;t&&(this.keyTwist+=Math.hypot(t.vx,t.vy)*e/n.engine.layout.h,n.wand.twist=Math.min(1.2,this.keyTwist*2.2),this.keyTwist>.35&&this.turnKey()),n.stateTime-this._keyStart>2.5&&this.turnKey()}this.heartItems=this.heartItems.filter(e=>e.alive)}idle(e){let t=this.game,n=this.T;if(t.stateTime<this.idleNext||(this.idleNext=t.stateTime+6,this.phase!==`play`))return;if(this.doorReady&&e>3){let e=t.wand.tipWorld(new B),r=n.keyhole.getWorldPosition(new B);t.beam(e,r,`#fff0b8`,1.4),$.sfx(`sparkle`,{n:3,vel:.6}),n.kGlow.material.opacity=1,Math.random()<.5&&(t.wand.mode=`present`),setTimeout(()=>{t.wand.mode===`present`&&(t.wand.mode=`hand`)},2200);return}if(e<4)return;let r=Xu(n.devices);r.flash=1,r.wobble.kick(5),r.grooveMat.uniforms.uBase.value=1,setTimeout(()=>r.grooveMat.uniforms.uBase.value=.35,600),$.sfx(`ding`,{i:n.devices.indexOf(r)});let i=Xu(n.marks.filter(e=>!e.lit).length?n.marks.filter(e=>!e.lit):n.marks);i.pulse=1,t.girl.lookTarget=r.group.position.clone().add(new B(0,.6,0)),setTimeout(()=>t.girl.lookTarget=null,1500)}},Xp=[`#ff9cc6`,`#ffe27a`,`#8ed4ff`,`#c4a6ff`,`#92e8c6`,`#ffffff`];function Zp(e,t=5.6,n=.48){return Rp(()=>({pos:e.girl.root.position.clone().setY(-.55),height:t+.55,width:3,centerY:n}),{fov:50,fill:.9,fillW:.98,sy:-.02,elev:.1},{fov:42,fill:.9,fillW:.45,sy:0,elev:.1})}var Qp=class{constructor(){this.allow={gems:!1,girl:!1,floor:!1,wand:!1}}enter(e={}){let t=this.game;this.F=t.finale,this.phase=`steps`,this.step=0,this.idleNext=4,this.raise=0,this.launched=0,this.confettiDone=0,this.mirrorSpawned=!1,t.girlHomeFacing=Math.PI,t.hud.active=!0,zp(t,`corner`),t.portrait.enabled=!0,t.portraitUpdate=Hp(t),t.confetti.girl=t.girl,t.confetti.floorY=0,$.setMusic(`finaleWalk`),this.allow={gems:!1,girl:!1,floor:!1,wand:!1},e.arrival||(t.setActiveScene(`finale`),t.moveGirlTo(`finale`),t.girl.setPosition(new B(0,0,wp.tiles[0])),t.wand.show(!0),t.wand.mode=`hand`),t.girl.setFacing(Math.PI);let n=()=>{let e=t.girl.root.position;return{pos:new B(e.x,1.75,e.z+2.5),target:new B(e.x,.9,e.z-2.5),fov:52}};e.arrival?t.cameraTo(n,1.6,Z.inOutSine):(t.setCameraGoal(n),t.snapCamera()),this.behind=n}pick(e){return this.phase===`steps`?{up:()=>this.nextStep()}:null}async nextStep(){let e=this.game,t=this.F;if(this.phase!==`steps`)return;if(this.walking){this.pendingStep=!0;return}let n=this.step+1;if(n>=t.tiles.length)return;this.walking=!0;let r=e.girl,i=new B(0,0,t.tiles[n].z);r.walkTo(i,()=>{r.setFacing(Math.PI),r.stomp()},1.35),await new Promise(e=>{let t=()=>r.walk?setTimeout(t,50):e();t()}),await e.wait(.35),this.walking=!1,this.step=n;let a=t.tiles[n];a.lit=1,a.pulse=1,n===1&&(t.tiles[0].lit=1),$.sfx(`step`,{i:n+2}),$.sfx(`chime`,{vel:.5}),e.glows.spawn(`heart`,new B(0,.005,a.z),{size:1.2,color:`#ffb8d6`,intensity:1.6,life:1.5});let o=(e,t)=>{let n=0;for(let r of e){if(n>=t)break;r.t<0&&(r.t=0-n*.15,n++)}};n===1&&(o(t.wallHearts,3),$.sfx(`heart`,{n:3})),n===2&&(o(t.ceilStars,40),$.sfx(`star`,{n:6})),n===3&&(o(t.rings.slice(0,2),2),o(t.wallHearts,3),$.sfx(`magicRise`,{n:8})),n===4&&(o(t.ceilStars,50),o(t.rings,2),$.sfx(`star`,{n:6})),n===5&&(o(t.wallHearts,4),o(t.rings,2),o(t.ceilStars,60),$.sfx(`heart`,{n:4})),n===t.tiles.length-1?this.reachCenter():this.pendingStep&&(this.pendingStep=!1,this.nextStep())}async reachCenter(){let e=this.game,t=e.token;this.phase=`turning`;let n=e.girl;await e.wait(.4),n.setFacing(0),e.girlHomeFacing=0,n.setExpression(`happy`,2),$.sfx(`twirl`),e.cameraTo(Zp(e),2.4,Z.inOutSine),await e.wait(2.4),e.alive(t)&&(this.phase=`raise`,this.allow={gems:!1,girl:!0,floor:!1,wand:!0},this.idleNext=e.stateTime+2.5,$.setMusic(`finaleWalk`))}wandPlaneRef(){return this.game.girl.chestWorld(new B).lerp(this.game.camera.position,.15)}_launch(e){let t=this.game,n=this.F,r=t.wand.tipWorld(new B),i=n.heartGroup.worldToLocal(r.clone()),a=0;for(let t of n.moteState){if(a>=e)break;t.t>=0||(t.t=0,t.from.copy(i),t.ctrl.copy(i).lerp(t.slot,.5).add(new B(X(-.8,.8),X(.3,1.2),X(.2,.8))),t.dur=X(.9,1.6),a++,this.launched++)}a>0&&Math.random()<.35&&$.sfx(`sparkle`,{n:1,vel:.4})}update(e,t){let n=this.game,r=this.F;if(zp(n,`corner`),this.phase===`steps`&&!this.walking&&n.cam.script===null&&n.setCameraGoal(this.behind,1.5),this.phase===`raise`||this.phase===`dance`&&this.reform){if(n.wandDragging){let t=n.wand.tipWorld(new B).y>n.girl.root.position.y+1.05;this.raise+=e*(t?1:.6);let r=this.raise<1?1.5:this.raise<2.2?8:this.raise<3.4?40:160;this._acc=(this._acc||0)+r*e;let i=Math.floor(this._acc);i>0&&(this._acc-=i,this._launch(i)),n.girl.armsUp=Zu(n.girl.armsUp,.5,3,e)}else n.girl.armsUp=Zu(n.girl.armsUp,0,3,e);this.launched>=r.moteState.length&&(r.state.placed||0)>=r.moteState.length-2&&!this.hushing&&this.hush()}this.phase===`dance`&&(Math.abs(n.girl.spinVel)>9&&t-(this._lastConfetti||-10)>4&&(this._lastConfetti=t,this.confettiRain()),!this.mirrorSpawned&&n.stateTime-this.danceStart>14&&this.raiseMirror()),this.mirrorUp&&(n.reflectMesh=r.mirror.surface,r.mirror.mat.uniforms.tPortal.value=n.reflect.rt.texture,r.mirror.mat.uniforms.uTexMatrix.value.copy(n.reflect.texMatrix))}async hush(){let e=this.game,t=this.F,n=e.token;this.hushing=!0,this.phase=`hush`,this.reform=!1,this.allow={gems:!1,girl:!1,floor:!1,wand:!1},e.wand.mode=`hand`,t.audience.calm=1,t.audience.excite=0,$.setMusic(`hush`),$.duck(.2,2.5),$.sfx(`swell`,{dur:4});for(let e of t.halves)e.pivot.visible=!0,e.pivot.position.set(0,0,0),e.pivot.rotation.set(0,0,0),e.mesh.scale.setScalar(.001);await e.tween(1.6,e=>{t.state.formed=e;for(let n of t.halves)n.mesh.scale.setScalar(Math.max(.001,Z.outCubic(e)));t.heartGlow.material.opacity=e*.7},Z.inOutSine),e.alive(n)&&(e.girl.lookTarget=t.heartGroup.position.clone(),e.lights.magic.flash(t.heartGroup.position,`#ffd0e6`,4,3,7),await e.wait(2.2),e.alive(n)&&(this.phase=`open`,this.hushing=!1,this.allow={gems:!1,girl:!0,floor:!1,wand:!0},this.idleNext=e.stateTime+3))}onGesture(e,t){return this.game,this.phase===`raise`?(e===`tap`&&(this._launch(30),this.raise+=.6),e===`stroke`&&t.dir===`up`&&(this._launch(45),this.raise+=.9),e===`tap`||e===`stroke`&&t.dir===`up`):this.phase===`open`?(this.openTaps=(this.openTaps||0)+ +(e===`tap`),e===`stroke`||e===`circle`||this.openTaps>=3?(this.openTaps=0,this.openHeart(),!0):!1):this.phase===`dance`?(this._mirrorEcho(e,t),!1):this.phase!==`dance`}async openHeart(){let e=this.game,t=this.F,n=e.token;this.phase=`bloom`,t.audience.calm=0,this.allow={gems:!1,girl:!0,floor:!1,wand:!0},$.setMusic(`bloom`),$.sfx(`bloom`),e.flash(.3,100,`#fff3f8`,2),e.girl.cheer(1.6),e.tween(1.6,e=>{for(let n of t.halves)n.pivot.position.x=n.side*e*2.2,n.pivot.rotation.y=n.side*e*.9,n.mesh.scale.setScalar(Math.max(.001,1-e*.35));t.state.open=e,t.heartGlow.material.opacity=.7+Math.sin(Math.PI*e)*.6},Z.inOutCubic).then(()=>{e.tween(1.2,e=>{for(let n of t.halves)n.mesh.scale.setScalar(Math.max(.001,.65*(1-e)));t.heartGlow.material.opacity=.7*(1-e)},Z.inCubic).then(()=>{for(let e of t.halves)e.pivot.visible=!1})});let r=t.heartGroup.position.clone();Xp.forEach((t,n)=>{let i=n/Xp.length*J+.3;e.ribbons.scripted((e,t,a)=>{let o=e*Y(t/1),s=Yu(.9,2.4,t),c=Yu(2,4,t),l=1.2+c*4.2,u=i+o*(s*1.6+c*5.5)+t*.25*c,d=o*l;a.set(r.x+Math.cos(u)*d,r.y+Math.sin(u)*d*.75+Math.sin(o*6+t)*.15*s-c*o*1.2,r.z+Math.sin(o*4+t*.8+n)*.6*s+o*c*1.5)},{color:t,width:.2,life:15,glow:2.6,glowFloor:.6,twist:3.5,twistSpeed:1.2})}),e.lights.magic.flash(r,`#ffffff`,4,3,8),await e.wait(1.2),e.alive(n)&&(t.state.fogFar=60,t.audience.standTarget=1,t.audience.penLevel=.35,t.audience.penWave(3.2),t.audience.cheer(1,5),t.audience.lookTarget=e.girl.root.position,$.sfx(`cheer`),e.setCameraGoal(Zp(e,6.8,.42),.8),await e.wait(3.5),e.alive(n)&&($.sfx(`applause`,{dur:3}),t.audience.penWave(3.5),await e.wait(2),e.alive(n)&&this.startDance()))}startDance(){let e=this.game,t=this.F;this.phase=`dance`,this.danceStart=e.stateTime,this.allow={gems:!0,girl:!0,floor:!0,wand:!0},$.setMusic(`dance`),t.audience.standTarget=.6,e.setCameraGoal(Zp(e,4.2,.4),1),this.idleNext=e.stateTime+5;for(let e of t.moteState)e.t=-1;this.launched=0,this.raise=0,t.state.formed=0,t.state.open=0}floorBounds(e){return Math.hypot(e.x,e.z)<3.2}floorClamp(e){let t=e.clone();return t.y=0,t.length()>2.2&&t.setLength(2.2),t}onStep(e){let t=this.game;if(this.phase!==`dance`)return;let n=Xu([`#ff9cc6`,`#ffe27a`,`#8ed4ff`,`#c4a6ff`,`#92e8c6`]);t.glows.spawn(`round`,e.clone().setY(.004),{size:2.6,color:n,intensity:1.2,life:1.4}),t.glows.spawn(`heart`,e.clone().setY(.005),{size:.9,color:n,intensity:1.8,life:3,hold:4,rot:X(-.4,.4)+Math.PI}),this.F.audience.cheer(.4,1)}onGirlTap(e){let t=this.game;return this.phase!==`dance`&&this.phase!==`open`?!1:e===`head`&&(t.girl.bow(),$.sfx(`chime`,{vel:.6}),setTimeout(()=>{this.F.audience.cheer(1,3.5),this.F.audience.penWave(4),$.sfx(`cheer`)},700),!0)}onSwipeEnd(e){let t=this.game;this.phase===`dance`&&e.y-e.downY>t.engine.layout.h*.08?this.onGirlTap(`head`):t.emptyTap(e.x,e.y,!0)}confettiRain(){let e=this.game;e.confetti.burst(320,{center:e.girl.root.position.clone(),radius:3.8,height:6.5}),$.sfx(`cheer`,{vel:.8}),this.F.audience.cheer(1,4),this.F.audience.penWave(5),this.confettiDone++,!this.mirrorSpawned&&this.confettiDone>=1&&setTimeout(()=>this.raiseMirror(),2500)}async raiseMirror(){let e=this.game,t=this.F;if(this.mirrorSpawned)return;this.mirrorSpawned=!0;let n=t.mirror;n.group.visible=!0,e.reflect.enabled=!0,e.reflectMesh=n.surface,this.mirrorUp=!0,$.sfx(`door`,{vel:.7}),$.sfx(`shimmer`),await e.tween(3,e=>{n.group.position.y=-6+6*e},Z.outCubic),e.sparkleBurst(n.center(),`#ffffff`,60,2),e.setCameraGoal(Zp(e,4.8,.45),1)}_mirrorEcho(e,t){let n=this.game;if(!this.mirrorUp)return;let r=this.F,i=n.wand.tipWorld(new B),a=r.mirror.center().z+.02,o=new B(i.x,i.y,a),s=e===`circle`?8:3;for(let e=0;e<s;e++){let t=e/s*J;n.shapes.heart({pos:o.clone().add(new B(Math.cos(t)*.25,Math.sin(t)*.25,0)),vel:new B(X(-.3,.3),X(.1,.5),X(.6,1.2)),size:X(.06,.09),color:Xu([af,`#ffffff`,of[n.palette].main,`#ffe27a`]),life:3,hover:.4,drag:1.6,buoy:.1})}n.sparkleBurst(o,`#ffffff`,16,.6)}idle(e){let t=this.game,n=this.F;if(!(t.stateTime<this.idleNext)&&(this.idleNext=t.stateTime+4.5,!(e<2.5))){if(this.phase===`steps`){let e=n.tiles[Math.min(this.step+1,n.tiles.length-1)];e.pulse=1,$.sfx(`ding`,{i:this.step}),t.girl.hop(.6),t.girl.lookTarget=t.camera.position.clone(),setTimeout(()=>t.girl.lookTarget=null,1200)}else if(this.phase===`raise`){let e=t.wand.tipWorld(new B);for(let n=0;n<8;n++)t.sched.wait(n*.12).then(()=>t.sparkles.spawn(e.clone(),{color:`#fff2b8`,size:.06,life:1.6,kind:1,intensity:3,vel:new B(0,1.6,0),drag:.3}));t.girl.lookTarget=n.heartGroup.position.clone(),t.wand.mode=`present`,setTimeout(()=>{t.wand.mode===`present`&&(t.wand.mode=`hand`),t.girl.lookTarget=null},2e3),$.sfx(`sparkle`,{n:2})}else if(this.phase===`open`){for(let e of n.halves)e.pivot.rotation.y=e.side*.12;setTimeout(()=>{for(let e of n.halves)e.pivot.rotation.y=0},400);let e=n.heartGroup.position;for(let n=0;n<10;n++)t.sched.wait(n*.05).then(()=>t.sparkles.spawn(new B(e.x-1.6+n*.32,e.y,e.z+.5),{color:`#ffffff`,size:.08,life:.8,kind:1,intensity:3}));$.sfx(`whoosh`)}else this.phase===`dance`&&e>5&&(t.girl.twirl(.6),n.audience.cheer(.5,1.5))}}onWandGrab(){this.phase===`dance`&&(this.reform=!0,this.raise=0)}onWandRelease(){if(this.phase===`dance`&&this.launched<60){for(let e of this.F.moteState)e.t=-1;this.launched=0,this.reform=!1}return!1}exit(){}},$p=`modulepreload`,em=function(e,t){return new URL(e,t).href},tm={},nm=function(e){return e.pathname.endsWith(`.css`)},rm=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},im=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=em(t,n);let r=s(t),i=nm(r);return rm(tm,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:$p,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function am(e,t){if(!e.testMode&&!e.debug)return;let n=()=>new B,r={boxJewel:()=>e.box.jewelWorld(),boxLid:()=>e.box.lid.getWorldPosition(n()),compact:()=>e.compact.group.getWorldPosition(n()),compactJewel:()=>e.compact.outerWorld(),mirror:()=>e.compact.mirrorWorld(),center:()=>e.compact.centerWorld(),girl:()=>e.girl.chestWorld(n()),girlHead:()=>e.girl.headWorld(n()).add(new B(0,.05,0)),girlFeet:()=>e.girl.root.position.clone().add(new B(0,.05,0)),wandTip:()=>e.wand.tipWorld(n()),wandGrip:()=>e.wand.grip.clone().add(new B(0,.08,0)),bigMirror:()=>e.states.wand.mirror?e.states.wand.mirror.center():n()};for(let t=0;t<6;t++)r[`gem`+t]=()=>e.compact.gemWorld(t);let i=e.theater,a=e.finale;[`devHeart`,`devStar`,`devRibbon`].forEach((e,t)=>{r[e]=()=>i.devices[t].btn.getWorldPosition(n())});for(let e=0;e<5;e++)r[`mark`+e]=()=>i.marks[e].pos.clone();r.keyhole=()=>i.keyhole.getWorldPosition(n()),r.bigStar=()=>{let e=i.bigStars.find(e=>e.active);return e?e.m.position.clone():n()},r.giantHeart=()=>a.heartGroup.getWorldPosition(n()),window.__game={game:e,engine:t,state:()=>({name:e.stateName,phase:e.state&&e.state.phase,magic:e.magicCount,scene:e.activeName,outfit:{...e.girl.outfit.built}}),screen:i=>{let a=r[i]||e.extraScreen&&e.extraScreen[i];if(!a)return null;let o=t.toScreen(a(),n());return{x:o.x,y:o.y,z:o.z}},timeScale:e=>{t.timeScale=e},setAdaptive:e=>{t.adaptive=e},quality:(e,n)=>t.setQuality(e,n),jump:t=>om(e,t),audioLevels:async(e,t,n)=>(await im(async()=>{let{AudioEngine:e}=await Promise.resolve().then(()=>Ep);return{AudioEngine:e}},void 0,import.meta.url)).AudioEngine.analyze(e,t,n),fps:()=>t._frameTimes.length?1/(t._frameTimes.reduce((e,t)=>e+t,0)/t._frameTimes.length):0}}function om(e,t){let n=e,r=n.girl,i=n.compact,a=()=>{n.box.lidAngle.set(1.95),n.box.latchAngle.set(2.1),n.box.open=!0},o=()=>{a(),n.room.scene.add(i.group),i.openAngle.set(2.95),i.tabAngle.set(1.4),n.hud.active=!0,n.hud.k=7,r.setLayer(tp.MAIN),r.setPosition(Df.girlStage),r.setFacing(0,!0),n.audio.setMusic(`transform`)};if(t===`transform`)o(),n.goto(`transform`);else if(t===`wand`)o(),r.outfit.instantComplete(`pink`),n.goto(`wand`);else if(t===`theater`||t===`finale`||t===`dance`||t===`raise`){if(o(),r.outfit.instantComplete(`pink`),n.wand.show(!0),n.wand.mode=`hand`,t===`theater`)n.goto(`theater`);else if(n.goto(`finale`),t===`raise`||t===`dance`){let e=n.finale;for(let t of e.tiles)t.lit=1;for(let t of e.wallHearts)t.t=1;for(let t of e.ceilStars)t.t=1;for(let t of e.rings)t.t=1;let i=n.state;i.step=e.tiles.length-1,r.setPosition(new B(0,0,0)),i.reachCenter(),t===`dance`&&(e.state.fogFar=60,e.audience.standTarget=.6,setTimeout(()=>i.startDance(),2600))}}}function sm(){let e=document.getElementById(`boot`);e||(e=document.createElement(`div`),e.id=`boot`,e.innerHTML=`<svg viewBox="0 0 100 100"><path d="M50 88 C20 66 6 50 6 32 C6 18 17 8 30 8 C39 8 46 13 50 21 C54 13 61 8 70 8 C83 8 94 18 94 32 C94 50 80 66 50 88 Z" fill="#ff9ec6"/></svg>`,document.body.appendChild(e)),e.classList.remove(`hide`)}async function cm(){let e=document.getElementById(`c`),t;try{t=new ad(e)}catch(e){console.error(e),sm();return}e.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),sm()},!1),e.addEventListener(`webglcontextrestored`,()=>location.reload(),!1);let n=new od(e),r=new Lp(t,n);await r.init(),r.buildLater&&await r.buildLater(),r.addState(`act1`,new Bp),r.addState(`transform`,new Wp),r.addState(`wand`,new Gp),r.addState(`theater`,new Yp),r.addState(`finale`,new Qp),r.registerLater&&r.registerLater(),r.goto(`act1`);try{for(let e of Object.values(r.scenes))t.renderer.compile(e,t.camera)}catch(e){console.warn(e)}let i=performance.now(),a=!0,o=r.testMode?.25:1/20,s=e=>{let n=Math.min(.25,(e-i)/1e3);i=e;let c=Math.min(o,n)*t.timeScale;if(t.time+=c,r.update(c),t.render(c,n),a){a=!1;let e=document.getElementById(`boot`);e&&(e.classList.add(`hide`),setTimeout(()=>e.remove(),1500))}requestAnimationFrame(s)};requestAnimationFrame(s),am(r,t)}cm().catch(e=>{console.error(e),sm()});