var zl=Object.defineProperty;var kl=(i,t,e)=>t in i?zl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var tt=(i,t,e)=>kl(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Jo="180",Hl=0,Aa=1,Vl=2,kc=1,Hc=2,yn=3,Tn=0,Ie=1,sn=2,On=0,Ti=1,Ca=2,Ra=3,Pa=4,Gl=5,$n=100,Wl=101,Xl=102,ql=103,Yl=104,Zl=200,Kl=201,Jl=202,$l=203,jr=204,Qr=205,jl=206,Ql=207,th=208,eh=209,nh=210,ih=211,sh=212,rh=213,oh=214,to=0,eo=1,no=2,Ri=3,io=4,so=5,ro=6,oo=7,$o=0,ah=1,ch=2,Bn=0,lh=1,hh=2,uh=3,Vc=4,dh=5,fh=6,ph=7,Gc=300,Pi=301,Li=302,ao=303,co=304,nr=306,$s=1e3,Qn=1001,lo=1002,Ke=1003,mh=1004,gs=1005,ln=1006,lr=1007,ti=1008,dn=1009,Wc=1010,Xc=1011,es=1012,jo=1013,ei=1014,hn=1015,us=1016,Qo=1017,ta=1018,ns=1020,qc=35902,Yc=35899,Zc=1021,Kc=1022,on=1023,is=1026,ss=1027,ea=1028,na=1029,Jc=1030,ia=1031,sa=1033,Xs=33776,qs=33777,Ys=33778,Zs=33779,ho=35840,uo=35841,fo=35842,po=35843,mo=36196,go=37492,_o=37496,vo=37808,xo=37809,Mo=37810,yo=37811,So=37812,bo=37813,Eo=37814,wo=37815,To=37816,Ao=37817,Co=37818,Ro=37819,Po=37820,Lo=37821,Io=36492,Do=36494,Uo=36495,No=36283,Fo=36284,Oo=36285,Bo=36286,gh=3200,_h=3201,ra=0,vh=1,Fn="",ke="srgb",Ii="srgb-linear",js="linear",ce="srgb",ai=7680,La=519,xh=512,Mh=513,yh=514,$c=515,Sh=516,bh=517,Eh=518,wh=519,Ia=35044,Da="300 es",un=2e3,Qs=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hr=Math.PI/180,zo=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function Th(i,t){return(i%t+t)%t}function ur(i,t,e){return(1-e)*i+e*t}function ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const T=Math.sqrt(x),w=Math.atan2(T,p*M);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const v=a*M;if(c=c*m+f*v,l=l*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ua.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ua.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dr.copy(this).projectOnVector(t),this.sub(dr)}reflect(t){return this.sub(dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dr=new R,Ua=new Oe;class Kt{constructor(t,e,n,s,r,o,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],x=s[4],v=s[7],T=s[2],w=s[5],C=s[8];return r[0]=o*_+a*M+c*T,r[3]=o*m+a*x+c*w,r[6]=o*p+a*v+c*C,r[1]=l*_+h*M+u*T,r[4]=l*m+h*x+u*w,r[7]=l*p+h*v+u*C,r[2]=f*_+d*M+g*T,r[5]=f*m+d*x+g*w,r[8]=f*p+d*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fr.makeScale(t,e)),this}rotate(t){return this.premultiply(fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fr=new Kt;function jc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ah(){const i=tr("canvas");return i.style.display="block",i}const Na={};function rs(i){i in Na||(Na[i]=!0,console.warn(i))}function Ch(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Fa=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oa=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rh(){const i={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fn?js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ii]:{primaries:t,whitePoint:n,transfer:js,toXYZ:Fa,fromXYZ:Oa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:Fa,fromXYZ:Oa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}const se=Rh();function En(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ci;class Ph{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ci===void 0&&(ci=tr("canvas")),ci.width=t.width,ci.height=t.height;const s=ci.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ci}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=En(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lh=0;class oa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pr(s[o].image)):r.push(pr(s[o]))}else r=pr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function pr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ph.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;const mr=new R;class De extends Ni{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=Qn,s=Qn,r=ln,o=ti,a=on,c=dn,l=De.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Fi(),this.name="",this.source=new oa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mr).x}get height(){return this.source.getSize(mr).y}get depth(){return this.source.getSize(mr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $s:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $s:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Gc;De.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(d+1)/2,T=(p+1)/2,w=(h+f)/4,C=(u+_)/4,L=(g+m)/4;return x>v&&x>T?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=C/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=L/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=L/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dh extends Ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new De(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new oa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Dh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qc extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uh extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_s.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_s.copy(n.boundingBox)),_s.applyMatrix4(t.matrixWorld),this.union(_s)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),vs.subVectors(this.max,Hi),li.subVectors(t.a,Hi),hi.subVectors(t.b,Hi),ui.subVectors(t.c,Hi),Cn.subVectors(hi,li),Rn.subVectors(ui,hi),Vn.subVectors(li,ui);let e=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-Vn.z,Vn.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,Vn.z,0,-Vn.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-Vn.y,Vn.x,0];return!gr(e,li,hi,ui,vs)||(e=[1,0,0,0,1,0,0,0,1],!gr(e,li,hi,ui,vs))?!1:(xs.crossVectors(Cn,Rn),e=[xs.x,xs.y,xs.z],gr(e,li,hi,ui,vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const mn=[new R,new R,new R,new R,new R,new R,new R,new R],tn=new R,_s=new ri,li=new R,hi=new R,ui=new R,Cn=new R,Rn=new R,Vn=new R,Hi=new R,vs=new R,xs=new R,Gn=new R;function gr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gn.fromArray(i,r);const a=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),c=t.dot(Gn),l=e.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Nh=new ri,Vi=new R,_r=new R;class ds{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vi.subVectors(t,this.center);const e=Vi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Vi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vi.copy(t.center).add(_r)),this.expandByPoint(Vi.copy(t.center).sub(_r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const gn=new R,vr=new R,Ms=new R,Pn=new R,xr=new R,ys=new R,Mr=new R;class tl{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vr.copy(t).add(e).multiplyScalar(.5),Ms.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(vr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ms),a=Pn.dot(this.direction),c=-Pn.dot(Ms),l=Pn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vr).addScaledVector(Ms,f),d}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,n,s,r){xr.subVectors(e,t),ys.subVectors(n,t),Mr.crossVectors(xr,ys);let o=this.direction.dot(Mr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pn.subVectors(this.origin,t);const c=a*this.direction.dot(ys.crossVectors(Pn,ys));if(c<0)return null;const l=a*this.direction.dot(xr.cross(Pn));if(l<0||c+l>o)return null;const h=-a*Pn.dot(Mr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/di.setFromMatrixColumn(t,0).length(),r=1/di.setFromMatrixColumn(t,1).length(),o=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fh,t,Oh)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Ln.crossVectors(n,We),Ln.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Ln.crossVectors(n,We)),Ln.normalize(),Ss.crossVectors(We,Ln),s[0]=Ln.x,s[4]=Ss.x,s[8]=We.x,s[1]=Ln.y,s[5]=Ss.y,s[9]=We.y,s[2]=Ln.z,s[6]=Ss.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],v=n[11],T=n[15],w=s[0],C=s[4],L=s[8],b=s[12],S=s[1],P=s[5],U=s[9],W=s[13],k=s[2],F=s[6],D=s[10],N=s[14],B=s[3],J=s[7],at=s[11],_t=s[15];return r[0]=o*w+a*S+c*k+l*B,r[4]=o*C+a*P+c*F+l*J,r[8]=o*L+a*U+c*D+l*at,r[12]=o*b+a*W+c*N+l*_t,r[1]=h*w+u*S+f*k+d*B,r[5]=h*C+u*P+f*F+d*J,r[9]=h*L+u*U+f*D+d*at,r[13]=h*b+u*W+f*N+d*_t,r[2]=g*w+_*S+m*k+p*B,r[6]=g*C+_*P+m*F+p*J,r[10]=g*L+_*U+m*D+p*at,r[14]=g*b+_*W+m*N+p*_t,r[3]=M*w+x*S+v*k+T*B,r[7]=M*C+x*P+v*F+T*J,r[11]=M*L+x*U+v*D+T*at,r[15]=M*b+x*W+v*N+T*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,x=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,v=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,T=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,w=e*M+n*x+s*v+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=M*C,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*C,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*C,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*C,t[4]=x*C,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*C,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*C,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*C,t[8]=v*C,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*C,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*C,t[12]=T*C,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,M=c*l,x=c*h,v=c*u,T=n.x,w=n.y,C=n.z;return s[0]=(1-(_+p))*T,s[1]=(d+v)*T,s[2]=(g-x)*T,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(f+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+x)*C,s[9]=(m-M)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=di.set(s[0],s[1],s[2]).length();const o=di.set(s[4],s[5],s[6]).length(),a=di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],en.copy(this);const l=1/r,h=1/o,u=1/a;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,e.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=un,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===un)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Qs)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=un,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===un)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Qs)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const di=new R,en=new jt,Fh=new R(0,0,0),Oh=new R(1,1,1),Ln=new R,Ss=new R,We=new R,Ba=new jt,za=new Oe;class Je{constructor(t=0,e=0,n=0,s=Je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ba.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ba,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return za.setFromEuler(this),this.setFromQuaternion(za,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Je.DEFAULT_ORDER="XYZ";class aa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bh=0;const ka=new R,fi=new Oe,_n=new jt,bs=new R,Gi=new R,zh=new R,kh=new Oe,Ha=new R(1,0,0),Va=new R(0,1,0),Ga=new R(0,0,1),Wa={type:"added"},Hh={type:"removed"},pi={type:"childadded",child:null},yr={type:"childremoved",child:null};class Ae extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new R,e=new Je,n=new Oe,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Kt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.multiply(fi),this}rotateOnWorldAxis(t,e){return fi.setFromAxisAngle(t,e),this.quaternion.premultiply(fi),this}rotateX(t){return this.rotateOnAxis(Ha,t)}rotateY(t){return this.rotateOnAxis(Va,t)}rotateZ(t){return this.rotateOnAxis(Ga,t)}translateOnAxis(t,e){return ka.copy(t).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ha,t)}translateY(t){return this.translateOnAxis(Va,t)}translateZ(t){return this.translateOnAxis(Ga,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bs.copy(t):bs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Gi,bs,this.up):_n.lookAt(bs,Gi,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),fi.setFromRotationMatrix(_n),this.quaternion.premultiply(fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wa),pi.child=t,this.dispatchEvent(pi),pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hh),yr.child=t,this.dispatchEvent(yr),yr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wa),pi.child=t,this.dispatchEvent(pi),pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,zh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,kh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new R(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new R,vn=new R,Sr=new R,xn=new R,mi=new R,gi=new R,Xa=new R,br=new R,Er=new R,wr=new R,Tr=new le,Ar=new le,Cr=new le;class rn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){nn.subVectors(s,e),vn.subVectors(n,e),Sr.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(vn),c=nn.dot(Sr),l=vn.dot(vn),h=vn.dot(Sr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(o,xn.y),c.addScaledVector(a,xn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Tr.setScalar(0),Ar.setScalar(0),Cr.setScalar(0),Tr.fromBufferAttribute(t,e),Ar.fromBufferAttribute(t,n),Cr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Tr,r.x),o.addScaledVector(Ar,r.y),o.addScaledVector(Cr,r.z),o}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),vn.subVectors(t,e),nn.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),nn.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;mi.subVectors(s,n),gi.subVectors(r,n),br.subVectors(t,n);const c=mi.dot(br),l=gi.dot(br);if(c<=0&&l<=0)return e.copy(n);Er.subVectors(t,s);const h=mi.dot(Er),u=gi.dot(Er);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(mi,o);wr.subVectors(t,r);const d=mi.dot(wr),g=gi.dot(wr);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(gi,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Xa.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Xa,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(mi,o).addScaledVector(gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const el={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Rr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Th(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Rr(o,r,t+1/3),this.g=Rr(o,r,t),this.b=Rr(o,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=el[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return se.workingToColorSpace(Pe.copy(this),t),Math.round($t(Pe.r*255,0,255))*65536+Math.round($t(Pe.g*255,0,255))*256+Math.round($t(Pe.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=ke){se.workingToColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Es);const n=ur(In.h,Es.h,e),s=ur(In.s,Es.s,e),r=ur(In.l,Es.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Yt;Yt.NAMES=el;let Vh=0;class Oi extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Ti,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jr,this.blendDst=Qr,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=La,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==La&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class nl extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new R,ws=new ct;let Gh=0;class Se{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ia,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),s=ze(s,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ia&&(t.usage=this.usage),t}}class il extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sl extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class zt extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Wh=0;const Qe=new jt,Pr=new Ae,_i=new R,Xe=new ri,Wi=new ri,we=new R;class fe extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jc(t)?sl:il)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Pr.lookAt(t),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Wi.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Xe.min,Wi.min),Xe.expandByPoint(we),we.addVectors(Xe.max,Wi.max),Xe.expandByPoint(we)):(Xe.expandByPoint(Wi.min),Xe.expandByPoint(Wi.max))}Xe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)we.fromBufferAttribute(a,l),c&&(_i.fromBufferAttribute(t,l),we.add(_i)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new R,c[L]=new R;const l=new R,h=new R,u=new R,f=new ct,d=new ct,g=new ct,_=new R,m=new R;function p(L,b,S){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(_),a[b].add(_),a[S].add(_),c[L].add(m),c[b].add(m),c[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,b=M.length;L<b;++L){const S=M[L],P=S.start,U=S.count;for(let W=P,k=P+U;W<k;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const x=new R,v=new R,T=new R,w=new R;function C(L){T.fromBufferAttribute(s,L),w.copy(T);const b=a[L];x.copy(b),x.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(w,b);const P=v.dot(c[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,P)}for(let L=0,b=M.length;L<b;++L){const S=M[L],P=S.start,U=S.count;for(let W=P,k=P+U;W<k;W+=3)C(t.getX(W+0)),C(t.getX(W+1)),C(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Se(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new jt,Wn=new tl,Ts=new ds,Ya=new R,As=new R,Cs=new R,Rs=new R,Lr=new R,Ps=new R,Za=new R,Ls=new R;class pt extends Ae{constructor(t=new fe,e=new nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ps.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Lr.fromBufferAttribute(u,t),o?Ps.addScaledVector(Lr,h):Ps.addScaledVector(Lr.sub(e),h))}e.add(Ps)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(Ts.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ts,Ya)===null||Wn.origin.distanceToSquared(Ya)>(t.far-t.near)**2))&&(qa.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(qa),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=x;v<T;v+=3){const w=a.getX(v),C=a.getX(v+1),L=a.getX(v+2);s=Is(this,p,t,n,l,h,u,w,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=Is(this,o,t,n,l,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=x;v<T;v+=3){const w=v,C=v+1,L=v+2;s=Is(this,p,t,n,l,h,u,w,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,v=m+2;s=Is(this,o,t,n,l,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Xh(i,t,e,n,s,r,o,a){let c;if(t.side===Ie?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Tn,a),c===null)return null;Ls.copy(a),Ls.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ls);return l<e.near||l>e.far?null:{distance:l,point:Ls.clone(),object:i}}function Is(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,As),i.getVertexPosition(c,Cs),i.getVertexPosition(l,Rs);const h=Xh(i,t,e,n,As,Cs,Rs,Za);if(h){const u=new R;rn.getBarycoord(Za,As,Cs,Rs,u),s&&(h.uv=rn.getInterpolatedAttribute(s,a,c,l,u,new ct)),r&&(h.uv1=rn.getInterpolatedAttribute(r,a,c,l,u,new ct)),o&&(h.normal=rn.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new R,materialIndex:0};rn.getNormal(As,Cs,Rs,f.normal),h.face=f,h.barycoord=u}return h}class ye extends fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2));function g(_,m,p,M,x,v,T,w,C,L,b){const S=v/C,P=T/L,U=v/2,W=T/2,k=w/2,F=C+1,D=L+1;let N=0,B=0;const J=new R;for(let at=0;at<D;at++){const _t=at*P-W;for(let Nt=0;Nt<F;Nt++){const Wt=Nt*S-U;J[_]=Wt*M,J[m]=_t*x,J[p]=k,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=w>0?1:-1,h.push(J.x,J.y,J.z),u.push(Nt/C),u.push(1-at/L),N+=1}}for(let at=0;at<L;at++)for(let _t=0;_t<C;_t++){const Nt=f+_t+F*at,Wt=f+_t+F*(at+1),et=f+(_t+1)+F*(at+1),nt=f+(_t+1)+F*at;c.push(Nt,Wt,nt),c.push(Wt,et,nt),B+=6}a.addGroup(d,B,b),d+=B,f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Di(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=Di(i[e]);for(const s in n)t[s]=n[s]}return t}function qh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function rl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Yh={clone:Di,merge:Fe};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=Kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=qh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ol extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new R,Ka=new ct,Ja=new ct;class Ye extends ol{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zo*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,Ka,Ja),e.subVectors(Ja,Ka)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vi=-90,xi=1;class Jh extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ye(vi,xi,t,e);s.layers=this.layers,this.add(s);const r=new Ye(vi,xi,t,e);r.layers=this.layers,this.add(r);const o=new Ye(vi,xi,t,e);o.layers=this.layers,this.add(o);const a=new Ye(vi,xi,t,e);a.layers=this.layers,this.add(a);const c=new Ye(vi,xi,t,e);c.layers=this.layers,this.add(c);const l=new Ye(vi,xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class al extends De{constructor(t=[],e=Pi,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $h extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new al(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ye(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:On});r.uniforms.tEquirect.value=e;const o=new pt(s,r),a=e.minFilter;return e.minFilter===ti&&(e.minFilter=ln),new Jh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class te extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jh={type:"move"};class Ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jh)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ca{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new ca(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cl extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Qh extends De{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ke,h=Ke,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Mi=new jt,ja=new jt,Ds=[],Qa=new ri,tu=new jt,Xi=new pt,qi=new ds;class ir extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $a(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),Qa.copy(t.boundingBox).applyMatrix4(Mi),this.boundingBox.union(Qa)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ds),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),qi.copy(t.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(qi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Xi.geometry=this.geometry,Xi.material=this.material,Xi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qi.copy(this.boundingSphere),qi.applyMatrix4(n),t.ray.intersectsSphere(qi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mi),ja.multiplyMatrices(n,Mi),Xi.matrixWorld=ja,Xi.raycast(t,Ds);for(let o=0,a=Ds.length;o<a;o++){const c=Ds[o];c.instanceId=r,c.object=this,e.push(c)}Ds.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $a(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qh(new Float32Array(s*this.count),s,this.count,ea,hn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Dr=new R,eu=new R,nu=new Kt;class Ze{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Dr.subVectors(n,e).cross(eu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Dr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nu.getNormalMatrix(t),s=this.coplanarPoint(Dr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new ds,iu=new ct(.5,.5),Us=new R;class la{constructor(t=new Ze,e=new Ze,n=new Ze,s=new Ze,r=new Ze,o=new Ze){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],M=r[12],x=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-o,d-h,p-g,T-M).normalize(),s[1].setComponents(l+o,d+h,p+g,T+M).normalize(),s[2].setComponents(l+a,d+u,p+_,T+x).normalize(),s[3].setComponents(l-a,d-u,p-_,T-x).normalize(),n)s[4].setComponents(c,f,m,v).normalize(),s[5].setComponents(l-c,d-f,p-m,T-v).normalize();else if(s[4].setComponents(l-c,d-f,p-m,T-v).normalize(),e===un)s[5].setComponents(l+c,d+f,p+m,T+v).normalize();else if(e===Qs)s[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){Xn.center.set(0,0,0);const e=iu.distanceTo(t.center);return Xn.radius=.7071067811865476+e,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Us.x=s.normal.x>0?t.max.x:t.min.x,Us.y=s.normal.y>0?t.max.y:t.min.y,Us.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class su extends De{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ll extends De{constructor(t,e,n=ei,s,r,o,a=Ke,c=Ke,l,h=is,u=1){if(h!==is&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new oa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class hl extends De{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Te extends fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(d,2));function M(){const v=new R,T=new R;let w=0;const C=(e-t)/n;for(let L=0;L<=r;L++){const b=[],S=L/r,P=S*(e-t)+t;for(let U=0;U<=s;U++){const W=U/s,k=W*c+a,F=Math.sin(k),D=Math.cos(k);T.x=P*F,T.y=-S*n+m,T.z=P*D,u.push(T.x,T.y,T.z),v.set(F,C,D).normalize(),f.push(v.x,v.y,v.z),d.push(W,1-S),b.push(g++)}_.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){const S=_[b][L],P=_[b+1][L],U=_[b+1][L+1],W=_[b][L+1];(t>0||b!==0)&&(h.push(S,P,W),w+=3),(e>0||b!==r-1)&&(h.push(P,U,W),w+=3)}l.addGroup(p,w,0),p+=w}function x(v){const T=g,w=new ct,C=new R;let L=0;const b=v===!0?t:e,S=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;const P=g;for(let U=0;U<=s;U++){const k=U/s*c+a,F=Math.cos(k),D=Math.sin(k);C.x=b*D,C.y=m*S,C.z=b*F,u.push(C.x,C.y,C.z),f.push(0,S,0),w.x=F*.5+.5,w.y=D*.5*S+.5,d.push(w.x,w.y),g++}for(let U=0;U<s;U++){const W=T+U,k=P+U;v===!0?h.push(k,k+1,W):h.push(k+1,k,W),L+=3}l.addGroup(p,L,v===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ha extends fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new zt(r,3)),this.setAttribute("normal",new zt(r.slice(),3)),this.setAttribute("uv",new zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new R,v=new R,T=new R;for(let w=0;w<e.length;w+=3)d(e[w+0],x),d(e[w+1],v),d(e[w+2],T),c(x,v,T,M)}function c(M,x,v,T){const w=T+1,C=[];for(let L=0;L<=w;L++){C[L]=[];const b=M.clone().lerp(v,L/w),S=x.clone().lerp(v,L/w),P=w-L;for(let U=0;U<=P;U++)U===0&&L===w?C[L][U]=b:C[L][U]=b.clone().lerp(S,U/P)}for(let L=0;L<w;L++)for(let b=0;b<2*(w-L)-1;b++){const S=Math.floor(b/2);b%2===0?(f(C[L][S+1]),f(C[L+1][S]),f(C[L][S])):(f(C[L][S+1]),f(C[L+1][S+1]),f(C[L+1][S]))}}function l(M){const x=new R;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const M=new R;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const v=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;o.push(v,1-T)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){const x=o[M+0],v=o[M+2],T=o[M+4],w=Math.max(x,v,T),C=Math.min(x,v,T);w>.9&&C<.1&&(x<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const M=new R,x=new R,v=new R,T=new R,w=new ct,C=new ct,L=new ct;for(let b=0,S=0;b<r.length;b+=9,S+=6){M.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(o[S+0],o[S+1]),C.set(o[S+2],o[S+3]),L.set(o[S+4],o[S+5]),T.copy(M).add(x).add(v).divideScalar(3);const P=m(T);_(w,S+0,M,P),_(C,S+2,x,P),_(L,S+4,v,P)}}function _(M,x,v,T){T<0&&M.x===1&&(o[x]=M.x-1),v.x===0&&v.z===0&&(o[x]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.vertices,t.indices,t.radius,t.details)}}class fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ct:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,s=[],r=[],o=[],a=new R,c=new jt;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($t(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos($t(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ua extends fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ru extends ua{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function da(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ns=new R,Ur=new da,Nr=new da,Fr=new da;class ul extends fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ns.subVectors(s[0],s[1]).add(s[0]),l=Ns);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ns.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ns),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ur.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Nr.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Fr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ur.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Nr.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Fr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Ur.calc(c),Nr.calc(c),Fr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function ou(i,t){const e=1-i;return e*e*t}function au(i,t){return 2*(1-i)*i*t}function cu(i,t){return i*i*t}function Qi(i,t,e,n){return ou(i,t)+au(i,e)+cu(i,n)}function lu(i,t){const e=1-i;return e*e*e*t}function hu(i,t){const e=1-i;return 3*e*e*i*t}function uu(i,t){return 3*(1-i)*i*i*t}function du(i,t){return i*i*i*t}function ts(i,t,e,n,s){return lu(i,t)+hu(i,e)+uu(i,n)+du(i,s)}class dl extends fn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ts(t,s.x,r.x,o.x,a.x),ts(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fu extends fn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ts(t,s.x,r.x,o.x,a.x),ts(t,s.y,r.y,o.y,a.y),ts(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fl extends fn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pu extends fn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pl extends fn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qi(t,s.x,r.x,o.x),Qi(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mu extends fn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Qi(t,s.x,r.x,o.x),Qi(t,s.y,r.y,o.y),Qi(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ml extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(tc(a,c.x,l.x,h.x,u.x),tc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var ko=Object.freeze({__proto__:null,ArcCurve:ru,CatmullRomCurve3:ul,CubicBezierCurve:dl,CubicBezierCurve3:fu,EllipseCurve:ua,LineCurve:fl,LineCurve3:pu,QuadraticBezierCurve:pl,QuadraticBezierCurve3:mu,SplineCurve:ml});class gu extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ko[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ko[s.type]().fromJSON(s))}return this}}class ec extends gu{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new fl(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new pl(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new dl(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ml(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new ua(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class fs extends ec{constructor(t){super(t),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ec().fromJSON(s))}return this}}function _u(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=gl(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Su(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return os(r,o,e,a,c,l,0),o}function gl(i,t,e,n,s){let r;if(s===Du(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=nc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=nc(o/n|0,i[o],i[o+1],r);return r&&Ui(r,r.next)&&(cs(r),r=r.next),r}function ii(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ui(e,e.next)||_e(e.prev,e,e.next)===0)){if(cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function os(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Au(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?xu(i,n,s,r):vu(i)){t.push(c.i,i.i,l.i),cs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Mu(ii(i),t),os(i,t,e,n,s,r,2)):o===2&&yu(i,t,e,n,s,r):os(ii(i),t,e,n,s,r,1);break}}}function vu(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ki(s,a,r,c,o,l,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xu(i,t,e,n){const s=i.prev,r=i,o=i.next;if(_e(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),_=Math.max(a,c,l),m=Math.max(h,u,f),p=Ho(d,g,t,e,n),M=Ho(_,m,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ki(a,h,c,u,l,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ki(a,h,c,u,l,f,v.x,v.y)&&_e(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ki(a,h,c,u,l,f,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ki(a,h,c,u,l,f,v.x,v.y)&&_e(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Mu(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ui(n,s)&&vl(n,e,e.next,s)&&as(n,s)&&as(s,n)&&(t.push(n.i,e.i,s.i),cs(e),cs(e.next),e=i=s),e=e.next}while(e!==i);return ii(e)}function yu(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pu(o,a)){let c=xl(o,a);o=ii(o,o.next),c=ii(c,c.next),os(o,t,e,n,s,r,0),os(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Su(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=gl(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Ru(l))}s.sort(bu);for(let r=0;r<s.length;r++)e=Eu(s[r],e);return e}function bu(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Eu(i,t){const e=wu(i,t);if(!e)return t;const n=xl(e,i);return ii(n,n.next),ii(e,e.next)}function wu(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Ui(i,e))return e;do{if(Ui(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&_l(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);as(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Tu(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Tu(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function Au(i,t,e,n){let s=i;do s.z===0&&(s.z=Ho(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cu(s)}function Cu(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ho(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ru(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _l(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ki(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&_l(i,t,e,n,s,r,o,a)}function Pu(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Lu(i,t)&&(as(i,t)&&as(t,i)&&Iu(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||Ui(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ui(i,t){return i.x===t.x&&i.y===t.y}function vl(i,t,e,n){const s=Os(_e(i,t,e)),r=Os(_e(i,t,n)),o=Os(_e(e,n,i)),a=Os(_e(e,n,t));return!!(s!==r&&o!==a||s===0&&Fs(i,e,t)||r===0&&Fs(i,n,t)||o===0&&Fs(e,i,n)||a===0&&Fs(e,t,n))}function Fs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Os(i){return i>0?1:i<0?-1:0}function Lu(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vl(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function as(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Iu(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xl(i,t){const e=Vo(i.i,i.x,i.y),n=Vo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nc(i,t,e,n){const s=Vo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Du(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Uu{static triangulate(t,e,n=2){return _u(t,e,n)}}class bn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return bn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ic(t),sc(n,t);let o=t.length;e.forEach(ic);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,sc(n,e[c]);const a=Uu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function ic(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class sr extends fe{constructor(t=new fs([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new zt(s,3)),this.setAttribute("uv",new zt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Nu;let x,v=!1,T,w,C,L;p&&(x=p.getSpacedPoints(h),v=!0,f=!1,T=p.computeFrenetFrames(h,!1),w=new R,C=new R,L=new R),f||(m=0,d=0,g=0,_=0);const b=a.extractPoints(l);let S=b.shape;const P=b.holes;if(!bn.isClockWise(S)){S=S.reverse();for(let st=0,Q=P.length;st<Q;st++){const j=P[st];bn.isClockWise(j)&&(P[st]=j.reverse())}}function W(st){const j=10000000000000001e-36;let $=st[0];for(let xt=1;xt<=st.length;xt++){const ht=xt%st.length,Mt=st[ht],Xt=Mt.x-$.x,Gt=Mt.y-$.y,A=Xt*Xt+Gt*Gt,y=Math.max(Math.abs(Mt.x),Math.abs(Mt.y),Math.abs($.x),Math.abs($.y)),V=j*y*y;if(A<=V){st.splice(ht,1),xt--;continue}$=Mt}}W(S),P.forEach(W);const k=P.length,F=S;for(let st=0;st<k;st++){const Q=P[st];S=S.concat(Q)}function D(st,Q,j){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(Q,j)}const N=S.length;function B(st,Q,j){let $,xt,ht;const Mt=st.x-Q.x,Xt=st.y-Q.y,Gt=j.x-st.x,A=j.y-st.y,y=Mt*Mt+Xt*Xt,V=Mt*A-Xt*Gt;if(Math.abs(V)>Number.EPSILON){const Z=Math.sqrt(y),rt=Math.sqrt(Gt*Gt+A*A),K=Q.x-Xt/Z,Dt=Q.y+Mt/Z,gt=j.x-A/rt,Pt=j.y+Gt/rt,Lt=((gt-K)*A-(Pt-Dt)*Gt)/(Mt*A-Xt*Gt);$=K+Mt*Lt-st.x,xt=Dt+Xt*Lt-st.y;const ut=$*$+xt*xt;if(ut<=2)return new ct($,xt);ht=Math.sqrt(ut/2)}else{let Z=!1;Mt>Number.EPSILON?Gt>Number.EPSILON&&(Z=!0):Mt<-Number.EPSILON?Gt<-Number.EPSILON&&(Z=!0):Math.sign(Xt)===Math.sign(A)&&(Z=!0),Z?($=-Xt,xt=Mt,ht=Math.sqrt(y)):($=Mt,xt=Xt,ht=Math.sqrt(y/2))}return new ct($/ht,xt/ht)}const J=[];for(let st=0,Q=F.length,j=Q-1,$=st+1;st<Q;st++,j++,$++)j===Q&&(j=0),$===Q&&($=0),J[st]=B(F[st],F[j],F[$]);const at=[];let _t,Nt=J.concat();for(let st=0,Q=k;st<Q;st++){const j=P[st];_t=[];for(let $=0,xt=j.length,ht=xt-1,Mt=$+1;$<xt;$++,ht++,Mt++)ht===xt&&(ht=0),Mt===xt&&(Mt=0),_t[$]=B(j[$],j[ht],j[Mt]);at.push(_t),Nt=Nt.concat(_t)}let Wt;if(m===0)Wt=bn.triangulateShape(F,P);else{const st=[],Q=[];for(let j=0;j<m;j++){const $=j/m,xt=d*Math.cos($*Math.PI/2),ht=g*Math.sin($*Math.PI/2)+_;for(let Mt=0,Xt=F.length;Mt<Xt;Mt++){const Gt=D(F[Mt],J[Mt],ht);yt(Gt.x,Gt.y,-xt),$===0&&st.push(Gt)}for(let Mt=0,Xt=k;Mt<Xt;Mt++){const Gt=P[Mt];_t=at[Mt];const A=[];for(let y=0,V=Gt.length;y<V;y++){const Z=D(Gt[y],_t[y],ht);yt(Z.x,Z.y,-xt),$===0&&A.push(Z)}$===0&&Q.push(A)}}Wt=bn.triangulateShape(st,Q)}const et=Wt.length,nt=g+_;for(let st=0;st<N;st++){const Q=f?D(S[st],Nt[st],nt):S[st];v?(C.copy(T.normals[0]).multiplyScalar(Q.x),w.copy(T.binormals[0]).multiplyScalar(Q.y),L.copy(x[0]).add(C).add(w),yt(L.x,L.y,L.z)):yt(Q.x,Q.y,0)}for(let st=1;st<=h;st++)for(let Q=0;Q<N;Q++){const j=f?D(S[Q],Nt[Q],nt):S[Q];v?(C.copy(T.normals[st]).multiplyScalar(j.x),w.copy(T.binormals[st]).multiplyScalar(j.y),L.copy(x[st]).add(C).add(w),yt(L.x,L.y,L.z)):yt(j.x,j.y,u/h*st)}for(let st=m-1;st>=0;st--){const Q=st/m,j=d*Math.cos(Q*Math.PI/2),$=g*Math.sin(Q*Math.PI/2)+_;for(let xt=0,ht=F.length;xt<ht;xt++){const Mt=D(F[xt],J[xt],$);yt(Mt.x,Mt.y,u+j)}for(let xt=0,ht=P.length;xt<ht;xt++){const Mt=P[xt];_t=at[xt];for(let Xt=0,Gt=Mt.length;Xt<Gt;Xt++){const A=D(Mt[Xt],_t[Xt],$);v?yt(A.x,A.y+x[h-1].y,x[h-1].x+j):yt(A.x,A.y,u+j)}}}G(),q();function G(){const st=s.length/3;if(f){let Q=0,j=N*Q;for(let $=0;$<et;$++){const xt=Wt[$];vt(xt[2]+j,xt[1]+j,xt[0]+j)}Q=h+m*2,j=N*Q;for(let $=0;$<et;$++){const xt=Wt[$];vt(xt[0]+j,xt[1]+j,xt[2]+j)}}else{for(let Q=0;Q<et;Q++){const j=Wt[Q];vt(j[2],j[1],j[0])}for(let Q=0;Q<et;Q++){const j=Wt[Q];vt(j[0]+N*h,j[1]+N*h,j[2]+N*h)}}n.addGroup(st,s.length/3-st,0)}function q(){const st=s.length/3;let Q=0;lt(F,Q),Q+=F.length;for(let j=0,$=P.length;j<$;j++){const xt=P[j];lt(xt,Q),Q+=xt.length}n.addGroup(st,s.length/3-st,1)}function lt(st,Q){let j=st.length;for(;--j>=0;){const $=j;let xt=j-1;xt<0&&(xt=st.length-1);for(let ht=0,Mt=h+m*2;ht<Mt;ht++){const Xt=N*ht,Gt=N*(ht+1),A=Q+$+Xt,y=Q+xt+Xt,V=Q+xt+Gt,Z=Q+$+Gt;Bt(A,y,V,Z)}}}function yt(st,Q,j){c.push(st),c.push(Q),c.push(j)}function vt(st,Q,j){re(st),re(Q),re(j);const $=s.length/3,xt=M.generateTopUV(n,s,$-3,$-2,$-1);I(xt[0]),I(xt[1]),I(xt[2])}function Bt(st,Q,j,$){re(st),re(Q),re($),re(Q),re(j),re($);const xt=s.length/3,ht=M.generateSideWallUV(n,s,xt-6,xt-3,xt-2,xt-1);I(ht[0]),I(ht[1]),I(ht[3]),I(ht[1]),I(ht[2]),I(ht[3])}function re(st){s.push(c[st*3+0]),s.push(c[st*3+1]),s.push(c[st*3+2])}function I(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Fu(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ko[s.type]().fromJSON(s)),new sr(n,t.options)}}const Nu={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,c),new ct(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ct(o,1-c),new ct(l,1-u),new ct(f,1-g),new ct(_,1-p)]:[new ct(a,1-c),new ct(h,1-u),new ct(d,1-g),new ct(m,1-p)]}};function Fu(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class fa extends fe{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=$t(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,f=new ct,d=new R,g=new R,_=new R;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let M=0;M<=e;M++){const x=n+M*h*s,v=Math.sin(x),T=Math.cos(x);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*T,o.push(u.x,u.y,u.z),f.x=M/e,f.y=w/(t.length-1),a.push(f.x,f.y);const C=c[3*w+0]*v,L=c[3*w+1],b=c[3*w+0]*T;l.push(C,L,b)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const v=x+M*t.length,T=v,w=v+t.length,C=v+t.length+1,L=v+1;r.push(T,w,L),r.push(C,L,w)}this.setIndex(r),this.setAttribute("position",new zt(o,3)),this.setAttribute("uv",new zt(a,2)),this.setAttribute("normal",new zt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.points,t.segments,t.phiStart,t.phiLength)}}class si extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*f-o;for(let x=0;x<l;x++){const v=x*u-r;g.push(v,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const x=M+l*p,v=M+l*(p+1),T=M+1+l*(p+1),w=M+1+l*p;d.push(x,v,w),d.push(v,T,w)}this.setIndex(d),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.width,t.height,t.widthSegments,t.heightSegments)}}class pa extends fe{constructor(t=new fs([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(r,3)),this.setAttribute("uv",new zt(o,2));function l(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;bn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];bn.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=bn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){const M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){const M=_[m],x=M[0]+u,v=M[1]+u,T=M[2]+u;n.push(x,v,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Ou(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new pa(n,t.curveSegments)}}function Ou(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class wn extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,f=new R,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const w=T/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-x),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const x=h[p][M+1],v=h[p][M],T=h[p+1][M],w=h[p+1][M+1];(p!==0||o>0)&&d.push(x,v,w),(p!==n-1||c<Math.PI)&&d.push(v,T,w)}this.setIndex(d),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rr extends ha{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rr(t.radius,t.detail)}}class ls extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xe extends Oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bi extends xe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Bu extends Oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zu extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ku extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ma extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Hu extends ma{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Or=new jt,rc=new R,oc=new R;class Ml{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(rc),oc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oc),e.updateMatrixWorld(),Or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Or,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ac=new jt,Yi=new R,Br=new R;class Vu extends Ml{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Yi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Yi),Br.copy(n.position),Br.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Br),n.updateMatrixWorld(),s.makeTranslation(-Yi.x,-Yi.y,-Yi.z),ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac,n.coordinateSystem,n.reversedDepth)}}class Gu extends ma{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class yl extends ol{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Wu extends Ml{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zr extends ma{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Wu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xu extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const cc=new jt;class qu{constructor(t,e,n=0,s=1/0){this.ray=new tl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return cc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cc),this}intersectObject(t,e=!0,n=[]){return Go(t,this,n,e),n.sort(lc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Go(t[s],this,n,e);return n.sort(lc),n}}function lc(i,t){return i.distance-t.distance}function Go(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Go(r[o],t,e,!0)}}function hc(i,t,e,n){const s=Yu(n);switch(e){case Zc:return i*t;case ea:return i*t/s.components*s.byteLength;case na:return i*t/s.components*s.byteLength;case Jc:return i*t*2/s.components*s.byteLength;case ia:return i*t*2/s.components*s.byteLength;case Kc:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case sa:return i*t*4/s.components*s.byteLength;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:case po:return Math.max(i,16)*Math.max(t,8)/4;case ho:case fo:return Math.max(i,8)*Math.max(t,8)/2;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Io:case Do:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case No:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yu(i){switch(i){case dn:case Wc:return{byteLength:1,components:1};case es:case Xc:case us:return{byteLength:2,components:1};case Qo:case ta:return{byteLength:2,components:4};case ei:case jo:case hn:return{byteLength:4,components:1};case qc:case Yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);function Sl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zu(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ju=`#ifdef USE_ALPHAHASH
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
#endif`,$u=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ed=`#ifdef USE_AOMAP
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
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
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
#endif`,sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ad=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cd=`#ifdef USE_IRIDESCENCE
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
#endif`,ld=`#ifdef USE_BUMPMAP
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vd=`#define PI 3.141592653589793
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
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Md=`vec3 transformedNormal = objectNormal;
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
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
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
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
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
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
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
#endif`,Yd=`struct PhysicalMaterial {
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
}`,Zd=`
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
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$d=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rf=`#if defined( USE_POINTS_UV )
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
#endif`,of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uf=`#ifdef USE_MORPHTARGETS
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
#endif`,df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vf=`#ifdef USE_NORMALMAP
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
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uf=`float getShadowMask() {
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
}`,Nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ff=`#ifdef USE_SKINNING
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
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bf=`#ifdef USE_SKINNING
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
#endif`,zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gf=`#ifdef USE_TRANSMISSION
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
#endif`,Wf=`#ifdef USE_TRANSMISSION
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
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jf=`uniform sampler2D t2D;
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
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`#include <common>
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
}`,np=`#if DEPTH_PACKING == 3200
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
}`,ip=`#define DISTANCE
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
}`,sp=`#define DISTANCE
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`uniform float scale;
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
}`,cp=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,hp=`uniform vec3 diffuse;
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
}`,up=`#define LAMBERT
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
}`,dp=`#define LAMBERT
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
}`,fp=`#define MATCAP
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
}`,pp=`#define MATCAP
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
}`,mp=`#define NORMAL
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
}`,gp=`#define NORMAL
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
}`,_p=`#define PHONG
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
}`,vp=`#define PHONG
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
}`,xp=`#define STANDARD
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
}`,Mp=`#define STANDARD
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
}`,yp=`#define TOON
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
}`,Sp=`#define TOON
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
}`,bp=`uniform float size;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Tp=`uniform vec3 color;
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
}`,Ap=`uniform float rotation;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Ku,alphahash_pars_fragment:Ju,alphamap_fragment:$u,alphamap_pars_fragment:ju,alphatest_fragment:Qu,alphatest_pars_fragment:td,aomap_fragment:ed,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:sd,begin_vertex:rd,beginnormal_vertex:od,bsdfs:ad,iridescence_fragment:cd,bumpmap_pars_fragment:ld,clipping_planes_fragment:hd,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:dd,clipping_planes_vertex:fd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:_d,common:vd,cube_uv_reflection_fragment:xd,defaultnormal_vertex:Md,displacementmap_pars_vertex:yd,displacementmap_vertex:Sd,emissivemap_fragment:bd,emissivemap_pars_fragment:Ed,colorspace_fragment:wd,colorspace_pars_fragment:Td,envmap_fragment:Ad,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Rd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Hd,envmap_vertex:Ld,fog_vertex:Id,fog_pars_vertex:Dd,fog_fragment:Ud,fog_pars_fragment:Nd,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:Od,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:zd,lights_pars_begin:kd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:qd,lights_physical_pars_fragment:Yd,lights_fragment_begin:Zd,lights_fragment_maps:Kd,lights_fragment_end:Jd,logdepthbuf_fragment:$d,logdepthbuf_pars_fragment:jd,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:tf,map_fragment:ef,map_pars_fragment:nf,map_particle_fragment:sf,map_particle_pars_fragment:rf,metalnessmap_fragment:of,metalnessmap_pars_fragment:af,morphinstance_vertex:cf,morphcolor_vertex:lf,morphnormal_vertex:hf,morphtarget_pars_vertex:uf,morphtarget_vertex:df,normal_fragment_begin:ff,normal_fragment_maps:pf,normal_pars_fragment:mf,normal_pars_vertex:gf,normal_vertex:_f,normalmap_pars_fragment:vf,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:yf,iridescence_pars_fragment:Sf,opaque_fragment:bf,packing:Ef,premultiplied_alpha_fragment:wf,project_vertex:Tf,dithering_fragment:Af,dithering_pars_fragment:Cf,roughnessmap_fragment:Rf,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:Lf,shadowmap_pars_vertex:If,shadowmap_vertex:Df,shadowmask_pars_fragment:Uf,skinbase_vertex:Nf,skinning_pars_vertex:Ff,skinning_vertex:Of,skinnormal_vertex:Bf,specularmap_fragment:zf,specularmap_pars_fragment:kf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Vf,transmission_fragment:Gf,transmission_pars_fragment:Wf,uv_pars_fragment:Xf,uv_pars_vertex:qf,uv_vertex:Yf,worldpos_vertex:Zf,background_vert:Kf,background_frag:Jf,backgroundCube_vert:$f,backgroundCube_frag:jf,cube_vert:Qf,cube_frag:tp,depth_vert:ep,depth_frag:np,distanceRGBA_vert:ip,distanceRGBA_frag:sp,equirect_vert:rp,equirect_frag:op,linedashed_vert:ap,linedashed_frag:cp,meshbasic_vert:lp,meshbasic_frag:hp,meshlambert_vert:up,meshlambert_frag:dp,meshmatcap_vert:fp,meshmatcap_frag:pp,meshnormal_vert:mp,meshnormal_frag:gp,meshphong_vert:_p,meshphong_frag:vp,meshphysical_vert:xp,meshphysical_frag:Mp,meshtoon_vert:yp,meshtoon_frag:Sp,points_vert:bp,points_frag:Ep,shadow_vert:wp,shadow_frag:Tp,sprite_vert:Ap,sprite_frag:Cp},bt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},cn={basic:{uniforms:Fe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Fe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Fe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Fe([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Fe([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Fe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Fe([bt.points,bt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Fe([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Fe([bt.common,bt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Fe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Fe([bt.sprite,bt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Fe([bt.common,bt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Fe([bt.lights,bt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};cn.physical={uniforms:Fe([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Bs={r:0,b:0,g:0},qn=new Je,Rp=new jt;function Pp(i,t,e,n,s,r,o){const a=new Yt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function _(x){let v=!1;const T=g(x);T===null?p(a,c):T&&T.isColor&&(p(T,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===nr)?(h===void 0&&(h=new pt(new ye(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Di(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qn.copy(v.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rp.makeRotationFromEuler(qn)),h.material.toneMapped=se.getTransfer(T.colorSpace)!==ce,(u!==T||f!==T.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new pt(new si(2,2),new zn({name:"BackgroundMaterial",uniforms:Di(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=se.getTransfer(T.colorSpace)!==ce,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,f=T.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(Bs,rl(i)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,v,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:m,dispose:M}}function Lp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,P,U,W,k){let F=!1;const D=u(W,U,P);r!==D&&(r=D,l(r.object)),F=d(S,W,U,k),F&&g(S,W,U,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(S,P,U,W),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,U){const W=U.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let F=k[P.id];F===void 0&&(F={},k[P.id]=F);let D=F[W];return D===void 0&&(D=f(c()),F[W]=D),D}function f(S){const P=[],U=[],W=[];for(let k=0;k<e;k++)P[k]=0,U[k]=0,W[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:W,object:S,attributes:{},index:null}}function d(S,P,U,W){const k=r.attributes,F=P.attributes;let D=0;const N=U.getAttributes();for(const B in N)if(N[B].location>=0){const at=k[B];let _t=F[B];if(_t===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(_t=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(_t=S.instanceColor)),at===void 0||at.attribute!==_t||_t&&at.data!==_t.data)return!0;D++}return r.attributesNum!==D||r.index!==W}function g(S,P,U,W){const k={},F=P.attributes;let D=0;const N=U.getAttributes();for(const B in N)if(N[B].location>=0){let at=F[B];at===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(at=S.instanceColor));const _t={};_t.attribute=at,at&&at.data&&(_t.data=at.data),k[B]=_t,D++}r.attributes=k,r.attributesNum=D,r.index=W}function _(){const S=r.newAttributes;for(let P=0,U=S.length;P<U;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const U=r.newAttributes,W=r.enabledAttributes,k=r.attributeDivisors;U[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),k[S]!==P&&(i.vertexAttribDivisor(S,P),k[S]=P)}function M(){const S=r.newAttributes,P=r.enabledAttributes;for(let U=0,W=P.length;U<W;U++)P[U]!==S[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function x(S,P,U,W,k,F,D){D===!0?i.vertexAttribIPointer(S,P,U,k,F):i.vertexAttribPointer(S,P,U,W,k,F)}function v(S,P,U,W){_();const k=W.attributes,F=U.getAttributes(),D=P.defaultAttributeValues;for(const N in F){const B=F[N];if(B.location>=0){let J=k[N];if(J===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const at=J.normalized,_t=J.itemSize,Nt=t.get(J);if(Nt===void 0)continue;const Wt=Nt.buffer,et=Nt.type,nt=Nt.bytesPerElement,G=et===i.INT||et===i.UNSIGNED_INT||J.gpuType===jo;if(J.isInterleavedBufferAttribute){const q=J.data,lt=q.stride,yt=J.offset;if(q.isInstancedInterleavedBuffer){for(let vt=0;vt<B.locationSize;vt++)p(B.location+vt,q.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let vt=0;vt<B.locationSize;vt++)m(B.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let vt=0;vt<B.locationSize;vt++)x(B.location+vt,_t/B.locationSize,et,at,lt*nt,(yt+_t/B.locationSize*vt)*nt,G)}else{if(J.isInstancedBufferAttribute){for(let q=0;q<B.locationSize;q++)p(B.location+q,J.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let q=0;q<B.locationSize;q++)m(B.location+q);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let q=0;q<B.locationSize;q++)x(B.location+q,_t/B.locationSize,et,at,_t*nt,_t/B.locationSize*q*nt,G)}}else if(D!==void 0){const at=D[N];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(B.location,at);break;case 3:i.vertexAttrib3fv(B.location,at);break;case 4:i.vertexAttrib4fv(B.location,at);break;default:i.vertexAttrib1fv(B.location,at)}}}}M()}function T(){L();for(const S in n){const P=n[S];for(const U in P){const W=P[U];for(const k in W)h(W[k].object),delete W[k];delete P[U]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const U in P){const W=P[U];for(const k in W)h(W[k].object),delete W[k];delete P[U]}delete n[S.id]}function C(S){for(const P in n){const U=n[P];if(U[S.id]===void 0)continue;const W=U[S.id];for(const k in W)h(W[k].object),delete W[k];delete U[S.id]}}function L(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Ip(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Dp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==on&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==dn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==hn&&!L)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function Up(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ze,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,x=M*4;let v=p.clippingState||null;c.value=v,v=h(g,f,x,d);for(let T=0;T!==x;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Np(i){let t=new WeakMap;function e(o,a){return a===ao?o.mapping=Pi:a===co&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ao||a===co)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new $h(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ei=4,uc=[.125,.215,.35,.446,.526,.582],jn=20,kr=new yl,dc=new Yt;let Hr=null,Vr=0,Gr=0,Wr=!1;const Kn=(1+Math.sqrt(5))/2,yi=1/Kn,fc=[new R(-Kn,yi,0),new R(Kn,yi,0),new R(-yi,0,Kn),new R(yi,0,Kn),new R(0,Kn,-yi),new R(0,Kn,yi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Fp=new R;class Wo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Fp}=r;Hr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hr,Vr,Gr),this._renderer.xr.enabled=Wr,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),Wr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:us,format:on,colorSpace:Ii,depthBuffer:!1},s=pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Op(r)),this._blurMaterial=Bp(r,t,e)}return s}_compileMaterial(t){const e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,kr)}_sceneToCubeUV(t,e,n,s,r){const c=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(dc),u.toneMapping=Bn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new nl({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),m=new pt(new ye,_);let p=!1;const M=t.background;M?M.isColor&&(_.color.copy(M),t.background=null,p=!0):(_.color.copy(dc),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):v===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));const T=this._cubeSize;zs(s,v*T,x>2?T:0,T,T),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Pi||t.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;zs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,kr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fc[(s-r-1)%fc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new pt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*jn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const p=[];let M=0;for(let C=0;C<jn;++C){const L=C/_,b=Math.exp(-L*L/2);p.push(b),C===0?M+=b:C<m&&(M+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[s],T=3*v*(s>x-Ei?s-x+Ei:0),w=4*(this._cubeSize-v);zs(e,T,w,3*v,2*v),c.setRenderTarget(e),c.render(u,kr)}}function Op(i){const t=[],e=[],n=[];let s=i;const r=i-Ei+1+uc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ei?c=uc[o-i+Ei-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const C=w%3*2/3-1,L=w>2?0:-1,b=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];M.set(b,_*g*w),x.set(f,m*g*w);const S=[w,w,w,w,w,w];v.set(S,p*g*w)}const T=new fe;T.setAttribute("position",new Se(M,_)),T.setAttribute("uv",new Se(x,m)),T.setAttribute("faceIndex",new Se(v,p)),t.push(T),s>Ei&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function pc(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Bp(i,t,e){const n=new Float32Array(jn),s=new R(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ga(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function mc(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function gc(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ga(){return`

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
	`}function zp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ao||c===co,h=c===Pi||c===Li;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Wo(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Wo(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function kp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hp(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,v=M.length;x<v;x+=3){const T=M[x+0],w=M[x+1],C=M[x+2];f.push(T,w,w,C,C,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const T=x+0,w=x+1,C=x+2;f.push(T,w,w,C,C,T)}}else return;const m=new(jc(f)?sl:il)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Vp(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Gp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Wp(i,t,e){const n=new WeakMap,s=new le;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,w=1;T>t.maxTextureSize&&(w=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const C=new Float32Array(T*w*4*u),L=new Qc(C,T,w,u);L.type=hn,L.needsUpdate=!0;const b=v*4;for(let P=0;P<u;P++){const U=p[P],W=M[P],k=x[P],F=T*w*4*P;for(let D=0;D<U.count;D++){const N=D*b;g===!0&&(s.fromBufferAttribute(U,D),C[F+N+0]=s.x,C[F+N+1]=s.y,C[F+N+2]=s.z,C[F+N+3]=0),_===!0&&(s.fromBufferAttribute(W,D),C[F+N+4]=s.x,C[F+N+5]=s.y,C[F+N+6]=s.z,C[F+N+7]=0),m===!0&&(s.fromBufferAttribute(k,D),C[F+N+8]=s.x,C[F+N+9]=s.y,C[F+N+10]=s.z,C[F+N+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new ct(T,w)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Xp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const bl=new De,_c=new ll(1,1),El=new Qc,wl=new Uh,Tl=new al,vc=[],xc=[],Mc=new Float32Array(16),yc=new Float32Array(9),Sc=new Float32Array(4);function Bi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=vc[s];if(r===void 0&&(r=new Float32Array(s),vc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function or(i,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function Jp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;Sc.set(n),i.uniformMatrix2fv(this.addr,!1,Sc),Ee(e,n)}}function $p(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;yc.set(n),i.uniformMatrix3fv(this.addr,!1,yc),Ee(e,n)}}function jp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;Mc.set(n),i.uniformMatrix4fv(this.addr,!1,Mc),Ee(e,n)}}function Qp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_c.compareFunction=$c,r=_c):r=bl,e.setTexture2D(t||r,s)}function cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wl,s)}function lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tl,s)}function hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||El,s)}function um(i){switch(i){case 5126:return qp;case 35664:return Yp;case 35665:return Zp;case 35666:return Kp;case 35674:return Jp;case 35675:return $p;case 35676:return jp;case 5124:case 35670:return Qp;case 35667:case 35671:return tm;case 35668:case 35672:return em;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return hm}}function dm(i,t){i.uniform1fv(this.addr,t)}function fm(i,t){const e=Bi(t,this.size,2);i.uniform2fv(this.addr,e)}function pm(i,t){const e=Bi(t,this.size,3);i.uniform3fv(this.addr,e)}function mm(i,t){const e=Bi(t,this.size,4);i.uniform4fv(this.addr,e)}function gm(i,t){const e=Bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _m(i,t){const e=Bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vm(i,t){const e=Bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xm(i,t){i.uniform1iv(this.addr,t)}function Mm(i,t){i.uniform2iv(this.addr,t)}function ym(i,t){i.uniform3iv(this.addr,t)}function Sm(i,t){i.uniform4iv(this.addr,t)}function bm(i,t){i.uniform1uiv(this.addr,t)}function Em(i,t){i.uniform2uiv(this.addr,t)}function wm(i,t){i.uniform3uiv(this.addr,t)}function Tm(i,t){i.uniform4uiv(this.addr,t)}function Am(i,t,e){const n=this.cache,s=t.length,r=or(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||bl,r[o])}function Cm(i,t,e){const n=this.cache,s=t.length,r=or(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wl,r[o])}function Rm(i,t,e){const n=this.cache,s=t.length,r=or(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Tl,r[o])}function Pm(i,t,e){const n=this.cache,s=t.length,r=or(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||El,r[o])}function Lm(i){switch(i){case 5126:return dm;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return vm;case 5124:case 35670:return xm;case 35667:case 35671:return Mm;case 35668:case 35672:return ym;case 35669:case 35673:return Sm;case 5125:return bm;case 36294:return Em;case 36295:return wm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Pm}}class Im{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=um(e.type)}}class Dm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lm(e.type)}}class Um{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Xr=/(\w+)(\])?(\[|\.)?/g;function bc(i,t){i.seq.push(t),i.map[t.id]=t}function Nm(i,t,e){const n=i.name,s=n.length;for(Xr.lastIndex=0;;){const r=Xr.exec(n),o=Xr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){bc(e,l===void 0?new Im(a,i,t):new Dm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Um(a),bc(e,u)),e=u}}}class Ks{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Nm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ec(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Fm=37297;let Om=0;function Bm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const wc=new Kt;function zm(i){se._getMatrix(wc,se.workingColorSpace,i);const t=`mat3( ${wc.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case js:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Bm(i.getShaderSource(t),a)}else return r}function km(i,t){const e=zm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Hm(i,t){let e;switch(t){case lh:e="Linear";break;case hh:e="Reinhard";break;case uh:e="Cineon";break;case Vc:e="ACESFilmic";break;case fh:e="AgX";break;case ph:e="Neutral";break;case dh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ks=new R;function Vm(){se.getLuminanceCoefficients(ks);const i=ks.x.toFixed(4),t=ks.y.toFixed(4),e=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function Wm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ji(i){return i!==""}function Ac(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(i){return i.replace(qm,Zm)}const Ym=new Map;function Zm(i,t){let e=Jt[t];if(e===void 0){const n=Ym.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xo(e)}const Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(i){return i.replace(Km,Jm)}function Jm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function $m(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function jm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Li&&(t="ENVMAP_MODE_REFRACTION"),t}function t0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $o:t="ENVMAP_BLENDING_MULTIPLY";break;case ah:t="ENVMAP_BLENDING_MIX";break;case ch:t="ENVMAP_BLENDING_ADD";break}return t}function e0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function n0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=$m(e),l=jm(e),h=Qm(e),u=t0(e),f=e0(e),d=Gm(e),g=Wm(r),_=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ji).join(`
`),p.length>0&&(p+=`
`)):(m=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),p=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?Hm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,km("linearToOutputTexel",e.outputColorSpace),Vm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ji).join(`
`)),o=Xo(o),o=Ac(o,e),o=Cc(o,e),a=Xo(a),a=Ac(a,e),a=Cc(a,e),o=Rc(o),a=Rc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Da?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Da?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+o,v=M+p+a,T=Ec(s,s.VERTEX_SHADER,x),w=Ec(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",W=s.getShaderInfoLog(T)||"",k=s.getShaderInfoLog(w)||"",F=U.trim(),D=W.trim(),N=k.trim();let B=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const at=Tc(s,T,"vertex"),_t=Tc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+at+`
`+_t)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(D===""||N==="")&&(J=!1);J&&(P.diagnostics={runnable:B,programLog:F,vertexShader:{log:D,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(T),s.deleteShader(w),L=new Ks(s,_),b=Xm(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Fm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Om++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let i0=0;class s0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new r0(t),e.set(t,n)),n}}class r0{constructor(t){this.id=i0++,this.code=t,this.usedTimes=0}}function o0(i,t,e,n,s,r,o){const a=new aa,c=new s0,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,P,U,W){const k=U.fog,F=W.geometry,D=b.isMeshStandardMaterial?U.environment:null,N=(b.isMeshStandardMaterial?e:t).get(b.envMap||D),B=N&&N.mapping===nr?N.image.height:null,J=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const at=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,_t=at!==void 0?at.length:0;let Nt=0;F.morphAttributes.position!==void 0&&(Nt=1),F.morphAttributes.normal!==void 0&&(Nt=2),F.morphAttributes.color!==void 0&&(Nt=3);let Wt,et,nt,G;if(J){const oe=cn[J];Wt=oe.vertexShader,et=oe.fragmentShader}else Wt=b.vertexShader,et=b.fragmentShader,c.update(b),nt=c.getVertexShaderID(b),G=c.getFragmentShaderID(b);const q=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),yt=W.isInstancedMesh===!0,vt=W.isBatchedMesh===!0,Bt=!!b.map,re=!!b.matcap,I=!!N,st=!!b.aoMap,Q=!!b.lightMap,j=!!b.bumpMap,$=!!b.normalMap,xt=!!b.displacementMap,ht=!!b.emissiveMap,Mt=!!b.metalnessMap,Xt=!!b.roughnessMap,Gt=b.anisotropy>0,A=b.clearcoat>0,y=b.dispersion>0,V=b.iridescence>0,Z=b.sheen>0,rt=b.transmission>0,K=Gt&&!!b.anisotropyMap,Dt=A&&!!b.clearcoatMap,gt=A&&!!b.clearcoatNormalMap,Pt=A&&!!b.clearcoatRoughnessMap,Lt=V&&!!b.iridescenceMap,ut=V&&!!b.iridescenceThicknessMap,Tt=Z&&!!b.sheenColorMap,Ht=Z&&!!b.sheenRoughnessMap,Ut=!!b.specularMap,Et=!!b.specularColorMap,Zt=!!b.specularIntensityMap,O=rt&&!!b.transmissionMap,mt=rt&&!!b.thicknessMap,St=!!b.gradientMap,Ct=!!b.alphaMap,dt=b.alphaTest>0,it=!!b.alphaHash,It=!!b.extensions;let qt=Bn;b.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(qt=i.toneMapping);const ue={shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:Wt,fragmentShader:et,defines:b.defines,customVertexShaderID:nt,customFragmentShaderID:G,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:vt,batchingColor:vt&&W._colorsTexture!==null,instancing:yt,instancingColor:yt&&W.instanceColor!==null,instancingMorph:yt&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ii,alphaToCoverage:!!b.alphaToCoverage,map:Bt,matcap:re,envMap:I,envMapMode:I&&N.mapping,envMapCubeUVHeight:B,aoMap:st,lightMap:Q,bumpMap:j,normalMap:$,displacementMap:f&&xt,emissiveMap:ht,normalMapObjectSpace:$&&b.normalMapType===vh,normalMapTangentSpace:$&&b.normalMapType===ra,metalnessMap:Mt,roughnessMap:Xt,anisotropy:Gt,anisotropyMap:K,clearcoat:A,clearcoatMap:Dt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Pt,dispersion:y,iridescence:V,iridescenceMap:Lt,iridescenceThicknessMap:ut,sheen:Z,sheenColorMap:Tt,sheenRoughnessMap:Ht,specularMap:Ut,specularColorMap:Et,specularIntensityMap:Zt,transmission:rt,transmissionMap:O,thicknessMap:mt,gradientMap:St,opaque:b.transparent===!1&&b.blending===Ti&&b.alphaToCoverage===!1,alphaMap:Ct,alphaTest:dt,alphaHash:it,combine:b.combine,mapUv:Bt&&_(b.map.channel),aoMapUv:st&&_(b.aoMap.channel),lightMapUv:Q&&_(b.lightMap.channel),bumpMapUv:j&&_(b.bumpMap.channel),normalMapUv:$&&_(b.normalMap.channel),displacementMapUv:xt&&_(b.displacementMap.channel),emissiveMapUv:ht&&_(b.emissiveMap.channel),metalnessMapUv:Mt&&_(b.metalnessMap.channel),roughnessMapUv:Xt&&_(b.roughnessMap.channel),anisotropyMapUv:K&&_(b.anisotropyMap.channel),clearcoatMapUv:Dt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:gt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&_(b.sheenRoughnessMap.channel),specularMapUv:Ut&&_(b.specularMap.channel),specularColorMapUv:Et&&_(b.specularColorMap.channel),specularIntensityMapUv:Zt&&_(b.specularIntensityMap.channel),transmissionMapUv:O&&_(b.transmissionMap.channel),thicknessMapUv:mt&&_(b.thicknessMap.channel),alphaMapUv:Ct&&_(b.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&($||Gt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!F.attributes.uv&&(Bt||Ct),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:lt,skinning:W.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Nt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:Bt&&b.map.isVideoTexture===!0&&se.getTransfer(b.map.colorSpace)===ce,decodeVideoTextureEmissive:ht&&b.emissiveMap.isVideoTexture===!0&&se.getTransfer(b.emissiveMap.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===sn,flipSided:b.side===Ie,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:It&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&b.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ue.vertexUv1s=l.has(1),ue.vertexUv2s=l.has(2),ue.vertexUv3s=l.has(3),l.clear(),ue}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)S.push(P),S.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(M(S,b),x(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function M(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const S=g[b.type];let P;if(S){const U=cn[S];P=Yh.clone(U.uniforms)}else P=b.uniforms;return P}function T(b,S){let P;for(let U=0,W=h.length;U<W;U++){const k=h[U];if(k.cacheKey===S){P=k,++P.usedTimes;break}}return P===void 0&&(P=new n0(i,S,b,r),h.push(P)),P}function w(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function C(b){c.remove(b)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:L}}function a0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function c0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Lc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ic(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||c0),n.length>1&&n.sort(f||Lc),s.length>1&&s.sort(f||Lc)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function l0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ic,i.set(n,[o])):s>=r.length?(o=new Ic,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function h0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Yt};break;case"SpotLight":e={position:new R,direction:new R,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function u0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let d0=0;function f0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function p0(i){const t=new h0,e=u0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new jt,o=new jt;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,x=0,v=0,T=0,w=0,C=0;l.sort(f0);for(let b=0,S=l.length;b<S;b++){const P=l[b],U=P.color,W=P.intensity,k=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*W,u+=U.g*W,f+=U.b*W;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],W);C++}else if(P.isDirectionalLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const N=P.shadow,B=e.get(P);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=P.shadow.matrix,M++}n.directional[d]=D,d++}else if(P.isSpotLight){const D=t.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(U).multiplyScalar(W),D.distance=k,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[_]=D;const N=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,N.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=N.matrix,P.castShadow){const B=e.get(P);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=F,v++}_++}else if(P.isRectAreaLight){const D=t.get(P);D.color.copy(U).multiplyScalar(W),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=D,m++}else if(P.isPointLight){const D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){const N=P.shadow,B=e.get(P);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,B.shadowCameraNear=N.camera.near,B.shadowCameraFar=N.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=D,g++}else if(P.isHemisphereLight){const D=t.get(P);D.skyColor.copy(P.color).multiplyScalar(W),D.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[p]=D,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==x||L.numSpotShadows!==v||L.numSpotMaps!==T||L.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=x,L.numSpotShadows=v,L.numSpotMaps=T,L.numLightProbes=C,n.version=d0++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Dc(i){const t=new p0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function m0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Dc(i),t.set(s,[a])):r>=o.length?(a=new Dc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const g0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_0=`uniform sampler2D shadow_pass;
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
}`;function v0(i,t,e){let n=new la;const s=new ct,r=new ct,o=new le,a=new zu({depthPacking:_h}),c=new ku,l={},h=e.maxTextureSize,u={[Tn]:Ie,[Ie]:Tn,[sn]:sn},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:g0,fragmentShader:_0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new fe;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let p=this.type;this.render=function(w,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(On),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const W=p!==yn&&this.type===yn,k=p===yn&&this.type!==yn;for(let F=0,D=w.length;F<D;F++){const N=w[F],B=N.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const J=B.getFrameExtents();if(s.multiply(J),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,B.mapSize.y=r.y)),B.map===null||W===!0||k===!0){const _t=this.type!==yn?{minFilter:Ke,magFilter:Ke}:{};B.map!==null&&B.map.dispose(),B.map=new ni(s.x,s.y,_t),B.map.texture.name=N.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const at=B.getViewportCount();for(let _t=0;_t<at;_t++){const Nt=B.getViewport(_t);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),U.viewport(o),B.updateMatrices(N,_t),n=B.getFrustum(),v(C,L,B.camera,N,this.type)}B.isPointLightShadow!==!0&&this.type===yn&&M(B,L),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,P)};function M(w,C){const L=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ni(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,L,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,L,d,_,null)}function x(w,C,L,b){let S=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=S.uuid,W=C.uuid;let k=l[U];k===void 0&&(k={},l[U]=k);let F=k[W];F===void 0&&(F=S.clone(),k[W]=F,C.addEventListener("dispose",T)),S=F}if(S.visible=C.visible,S.wireframe=C.wireframe,b===yn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=i.properties.get(S);U.light=L}return S}function v(w,C,L,b,S){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===yn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const W=t.update(w),k=w.material;if(Array.isArray(k)){const F=W.groups;for(let D=0,N=F.length;D<N;D++){const B=F[D],J=k[B.materialIndex];if(J&&J.visible){const at=x(w,J,b,S);w.onBeforeShadow(i,w,C,L,W,at,B),i.renderBufferDirect(L,null,W,at,w,B),w.onAfterShadow(i,w,C,L,W,at,B)}}}else if(k.visible){const F=x(w,k,b,S);w.onBeforeShadow(i,w,C,L,W,F,null),i.renderBufferDirect(L,null,W,F,w,null),w.onAfterShadow(i,w,C,L,W,F,null)}}const U=w.children;for(let W=0,k=U.length;W<k;W++)v(U[W],C,L,b,S)}function T(w){w.target.removeEventListener("dispose",T);for(const L in l){const b=l[L],S=w.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const x0={[to]:eo,[no]:ro,[io]:oo,[Ri]:so,[eo]:to,[ro]:no,[oo]:io,[so]:Ri};function M0(i,t){function e(){let O=!1;const mt=new le;let St=null;const Ct=new le(0,0,0,0);return{setMask:function(dt){St!==dt&&!O&&(i.colorMask(dt,dt,dt,dt),St=dt)},setLocked:function(dt){O=dt},setClear:function(dt,it,It,qt,ue){ue===!0&&(dt*=qt,it*=qt,It*=qt),mt.set(dt,it,It,qt),Ct.equals(mt)===!1&&(i.clearColor(dt,it,It,qt),Ct.copy(mt))},reset:function(){O=!1,St=null,Ct.set(-1,0,0,0)}}}function n(){let O=!1,mt=!1,St=null,Ct=null,dt=null;return{setReversed:function(it){if(mt!==it){const It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),mt=it;const qt=dt;dt=null,this.setClear(qt)}},getReversed:function(){return mt},setTest:function(it){it?q(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(it){St!==it&&!O&&(i.depthMask(it),St=it)},setFunc:function(it){if(mt&&(it=x0[it]),Ct!==it){switch(it){case to:i.depthFunc(i.NEVER);break;case eo:i.depthFunc(i.ALWAYS);break;case no:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case io:i.depthFunc(i.EQUAL);break;case so:i.depthFunc(i.GEQUAL);break;case ro:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=it}},setLocked:function(it){O=it},setClear:function(it){dt!==it&&(mt&&(it=1-it),i.clearDepth(it),dt=it)},reset:function(){O=!1,St=null,Ct=null,dt=null,mt=!1}}}function s(){let O=!1,mt=null,St=null,Ct=null,dt=null,it=null,It=null,qt=null,ue=null;return{setTest:function(oe){O||(oe?q(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(oe){mt!==oe&&!O&&(i.stencilMask(oe),mt=oe)},setFunc:function(oe,pn,an){(St!==oe||Ct!==pn||dt!==an)&&(i.stencilFunc(oe,pn,an),St=oe,Ct=pn,dt=an)},setOp:function(oe,pn,an){(it!==oe||It!==pn||qt!==an)&&(i.stencilOp(oe,pn,an),it=oe,It=pn,qt=an)},setLocked:function(oe){O=oe},setClear:function(oe){ue!==oe&&(i.clearStencil(oe),ue=oe)},reset:function(){O=!1,mt=null,St=null,Ct=null,dt=null,it=null,It=null,qt=null,ue=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,T=null,w=null,C=new Yt(0,0,0),L=0,b=!1,S=null,P=null,U=null,W=null,k=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,N=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(B)[1]),D=N>=1):B.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),D=N>=2);let J=null,at={};const _t=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Wt=new le().fromArray(_t),et=new le().fromArray(Nt);function nt(O,mt,St,Ct){const dt=new Uint8Array(4),it=i.createTexture();i.bindTexture(O,it),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<St;It++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(mt+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return it}const G={};G[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(Ri),j(!1),$(Aa),q(i.CULL_FACE),st(On);function q(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function lt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function yt(O,mt){return u[O]!==mt?(i.bindFramebuffer(O,mt),u[O]=mt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function vt(O,mt){let St=d,Ct=!1;if(O){St=f.get(mt),St===void 0&&(St=[],f.set(mt,St));const dt=O.textures;if(St.length!==dt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let it=0,It=dt.length;it<It;it++)St[it]=i.COLOR_ATTACHMENT0+it;St.length=dt.length,Ct=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(St)}function Bt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const re={[$n]:i.FUNC_ADD,[Wl]:i.FUNC_SUBTRACT,[Xl]:i.FUNC_REVERSE_SUBTRACT};re[ql]=i.MIN,re[Yl]=i.MAX;const I={[Zl]:i.ZERO,[Kl]:i.ONE,[Jl]:i.SRC_COLOR,[jr]:i.SRC_ALPHA,[nh]:i.SRC_ALPHA_SATURATE,[th]:i.DST_COLOR,[jl]:i.DST_ALPHA,[$l]:i.ONE_MINUS_SRC_COLOR,[Qr]:i.ONE_MINUS_SRC_ALPHA,[eh]:i.ONE_MINUS_DST_COLOR,[Ql]:i.ONE_MINUS_DST_ALPHA,[ih]:i.CONSTANT_COLOR,[sh]:i.ONE_MINUS_CONSTANT_COLOR,[rh]:i.CONSTANT_ALPHA,[oh]:i.ONE_MINUS_CONSTANT_ALPHA};function st(O,mt,St,Ct,dt,it,It,qt,ue,oe){if(O===On){_===!0&&(lt(i.BLEND),_=!1);return}if(_===!1&&(q(i.BLEND),_=!0),O!==Gl){if(O!==m||oe!==b){if((p!==$n||v!==$n)&&(i.blendEquation(i.FUNC_ADD),p=$n,v=$n),oe)switch(O){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFunc(i.ONE,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ra:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,x=null,T=null,w=null,C.set(0,0,0),L=0,m=O,b=oe}return}dt=dt||mt,it=it||St,It=It||Ct,(mt!==p||dt!==v)&&(i.blendEquationSeparate(re[mt],re[dt]),p=mt,v=dt),(St!==M||Ct!==x||it!==T||It!==w)&&(i.blendFuncSeparate(I[St],I[Ct],I[it],I[It]),M=St,x=Ct,T=it,w=It),(qt.equals(C)===!1||ue!==L)&&(i.blendColor(qt.r,qt.g,qt.b,ue),C.copy(qt),L=ue),m=O,b=!1}function Q(O,mt){O.side===sn?lt(i.CULL_FACE):q(i.CULL_FACE);let St=O.side===Ie;mt&&(St=!St),j(St),O.blending===Ti&&O.transparent===!1?st(On):st(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Ct=O.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ht(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function $(O){O!==Hl?(q(i.CULL_FACE),O!==P&&(O===Aa?i.cullFace(i.BACK):O===Vl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),P=O}function xt(O){O!==U&&(D&&i.lineWidth(O),U=O)}function ht(O,mt,St){O?(q(i.POLYGON_OFFSET_FILL),(W!==mt||k!==St)&&(i.polygonOffset(mt,St),W=mt,k=St)):lt(i.POLYGON_OFFSET_FILL)}function Mt(O){O?q(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function Xt(O){O===void 0&&(O=i.TEXTURE0+F-1),J!==O&&(i.activeTexture(O),J=O)}function Gt(O,mt,St){St===void 0&&(J===null?St=i.TEXTURE0+F-1:St=J);let Ct=at[St];Ct===void 0&&(Ct={type:void 0,texture:void 0},at[St]=Ct),(Ct.type!==O||Ct.texture!==mt)&&(J!==St&&(i.activeTexture(St),J=St),i.bindTexture(O,mt||G[O]),Ct.type=O,Ct.texture=mt)}function A(){const O=at[J];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Lt(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(O){Wt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Wt.copy(O))}function Ht(O){et.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),et.copy(O))}function Ut(O,mt){let St=l.get(mt);St===void 0&&(St=new WeakMap,l.set(mt,St));let Ct=St.get(O);Ct===void 0&&(Ct=i.getUniformBlockIndex(mt,O.name),St.set(O,Ct))}function Et(O,mt){const Ct=l.get(mt).get(O);c.get(mt)!==Ct&&(i.uniformBlockBinding(mt,Ct,O.__bindingPointIndex),c.set(mt,Ct))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,at={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,T=null,w=null,C=new Yt(0,0,0),L=0,b=!1,S=null,P=null,U=null,W=null,k=null,Wt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:lt,bindFramebuffer:yt,drawBuffers:vt,useProgram:Bt,setBlending:st,setMaterial:Q,setFlipSided:j,setCullFace:$,setLineWidth:xt,setPolygonOffset:ht,setScissorTest:Mt,activeTexture:Xt,bindTexture:Gt,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:V,texImage2D:Lt,texImage3D:ut,updateUBOMapping:Ut,uniformBlockBinding:Et,texStorage2D:gt,texStorage3D:Pt,texSubImage2D:Z,texSubImage3D:rt,compressedTexSubImage2D:K,compressedTexSubImage3D:Dt,scissor:Tt,viewport:Ht,reset:Zt}}function y0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return d?new OffscreenCanvas(A,y):tr("canvas")}function _(A,y,V){let Z=1;const rt=Gt(A);if((rt.width>V||rt.height>V)&&(Z=V/Math.max(rt.width,rt.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(Z*rt.width),Dt=Math.floor(Z*rt.height);u===void 0&&(u=g(K,Dt));const gt=y?g(K,Dt):u;return gt.width=K,gt.height=Dt,gt.getContext("2d").drawImage(A,0,0,K,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+K+"x"+Dt+")."),gt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,y,V,Z,rt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=y;if(y===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),y===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),y===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),y===i.RGBA){const Dt=rt?js:se.getTransfer(Z);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=Dt===ce?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(A,y){let V;return A?y===null||y===ei||y===ns?V=i.DEPTH24_STENCIL8:y===hn?V=i.DEPTH32F_STENCIL8:y===es&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ei||y===ns?V=i.DEPTH_COMPONENT24:y===hn?V=i.DEPTH_COMPONENT32F:y===es&&(V=i.DEPTH_COMPONENT16),V}function T(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ke&&A.minFilter!==ln?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function w(A){const y=A.target;y.removeEventListener("dispose",w),L(y),y.isVideoTexture&&h.delete(y)}function C(A){const y=A.target;y.removeEventListener("dispose",C),S(y)}function L(A){const y=n.get(A);if(y.__webglInit===void 0)return;const V=A.source,Z=f.get(V);if(Z){const rt=Z[y.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&b(A),Object.keys(Z).length===0&&f.delete(V)}n.remove(A)}function b(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const V=A.source,Z=f.get(V);delete Z[y.__cacheKey],o.memory.textures--}function S(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let rt=0;rt<y.__webglFramebuffer[Z].length;rt++)i.deleteFramebuffer(y.__webglFramebuffer[Z][rt]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=A.textures;for(let Z=0,rt=V.length;Z<rt;Z++){const K=n.get(V[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(V[Z])}n.remove(A)}let P=0;function U(){P=0}function W(){const A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function k(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function F(A,y){const V=n.get(A);if(A.isVideoTexture&&Mt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(V,A,y);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function D(A,y){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){G(V,A,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function N(A,y){const V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){G(V,A,y);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function B(A,y){const V=n.get(A);if(A.version>0&&V.__version!==A.version){q(V,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}const J={[$s]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},at={[Ke]:i.NEAREST,[mh]:i.NEAREST_MIPMAP_NEAREST,[gs]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[lr]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},_t={[xh]:i.NEVER,[wh]:i.ALWAYS,[Mh]:i.LESS,[$c]:i.LEQUAL,[yh]:i.EQUAL,[Eh]:i.GEQUAL,[Sh]:i.GREATER,[bh]:i.NOTEQUAL};function Nt(A,y){if(y.type===hn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ln||y.magFilter===lr||y.magFilter===gs||y.magFilter===ti||y.minFilter===ln||y.minFilter===lr||y.minFilter===gs||y.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,J[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,J[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,J[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,at[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,at[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,_t[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ke||y.minFilter!==gs&&y.minFilter!==ti||y.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Wt(A,y){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",w));const Z=y.source;let rt=f.get(Z);rt===void 0&&(rt={},f.set(Z,rt));const K=k(y);if(K!==A.__cacheKey){rt[K]===void 0&&(rt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),rt[K].usedTimes++;const Dt=rt[A.__cacheKey];Dt!==void 0&&(rt[A.__cacheKey].usedTimes--,Dt.usedTimes===0&&b(y)),A.__cacheKey=K,A.__webglTexture=rt[K].texture}return V}function et(A,y,V){return Math.floor(Math.floor(A/V)/y)}function nt(A,y,V,Z){const K=A.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,V,Z,y.data);else{K.sort((ut,Tt)=>ut.start-Tt.start);let Dt=0;for(let ut=1;ut<K.length;ut++){const Tt=K[Dt],Ht=K[ut],Ut=Tt.start+Tt.count,Et=et(Ht.start,y.width,4),Zt=et(Tt.start,y.width,4);Ht.start<=Ut+1&&Et===Zt&&et(Ht.start+Ht.count-1,y.width,4)===Et?Tt.count=Math.max(Tt.count,Ht.start+Ht.count-Tt.start):(++Dt,K[Dt]=Ht)}K.length=Dt+1;const gt=i.getParameter(i.UNPACK_ROW_LENGTH),Pt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ut=0,Tt=K.length;ut<Tt;ut++){const Ht=K[ut],Ut=Math.floor(Ht.start/4),Et=Math.ceil(Ht.count/4),Zt=Ut%y.width,O=Math.floor(Ut/y.width),mt=Et,St=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Zt,O,mt,St,V,Z,y.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,gt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function G(A,y,V){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);const rt=Wt(A,y),K=y.source;e.bindTexture(Z,A.__webglTexture,i.TEXTURE0+V);const Dt=n.get(K);if(K.version!==Dt.__version||rt===!0){e.activeTexture(i.TEXTURE0+V);const gt=se.getPrimaries(se.workingColorSpace),Pt=y.colorSpace===Fn?null:se.getPrimaries(y.colorSpace),Lt=y.colorSpace===Fn||gt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ut=_(y.image,!1,s.maxTextureSize);ut=Xt(y,ut);const Tt=r.convert(y.format,y.colorSpace),Ht=r.convert(y.type);let Ut=x(y.internalFormat,Tt,Ht,y.colorSpace,y.isVideoTexture);Nt(Z,y);let Et;const Zt=y.mipmaps,O=y.isVideoTexture!==!0,mt=Dt.__version===void 0||rt===!0,St=K.dataReady,Ct=T(y,ut);if(y.isDepthTexture)Ut=v(y.format===ss,y.type),mt&&(O?e.texStorage2D(i.TEXTURE_2D,1,Ut,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Ut,ut.width,ut.height,0,Tt,Ht,null));else if(y.isDataTexture)if(Zt.length>0){O&&mt&&e.texStorage2D(i.TEXTURE_2D,Ct,Ut,Zt[0].width,Zt[0].height);for(let dt=0,it=Zt.length;dt<it;dt++)Et=Zt[dt],O?St&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Et.width,Et.height,Tt,Ht,Et.data):e.texImage2D(i.TEXTURE_2D,dt,Ut,Et.width,Et.height,0,Tt,Ht,Et.data);y.generateMipmaps=!1}else O?(mt&&e.texStorage2D(i.TEXTURE_2D,Ct,Ut,ut.width,ut.height),St&&nt(y,ut,Tt,Ht)):e.texImage2D(i.TEXTURE_2D,0,Ut,ut.width,ut.height,0,Tt,Ht,ut.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){O&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Ut,Zt[0].width,Zt[0].height,ut.depth);for(let dt=0,it=Zt.length;dt<it;dt++)if(Et=Zt[dt],y.format!==on)if(Tt!==null)if(O){if(St)if(y.layerUpdates.size>0){const It=hc(Et.width,Et.height,y.format,y.type);for(const qt of y.layerUpdates){const ue=Et.data.subarray(qt*It/Et.data.BYTES_PER_ELEMENT,(qt+1)*It/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,qt,Et.width,Et.height,1,Tt,ue)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Et.width,Et.height,ut.depth,Tt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Ut,Et.width,Et.height,ut.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?St&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Et.width,Et.height,ut.depth,Tt,Ht,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Ut,Et.width,Et.height,ut.depth,0,Tt,Ht,Et.data)}else{O&&mt&&e.texStorage2D(i.TEXTURE_2D,Ct,Ut,Zt[0].width,Zt[0].height);for(let dt=0,it=Zt.length;dt<it;dt++)Et=Zt[dt],y.format!==on?Tt!==null?O?St&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Ut,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?St&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Et.width,Et.height,Tt,Ht,Et.data):e.texImage2D(i.TEXTURE_2D,dt,Ut,Et.width,Et.height,0,Tt,Ht,Et.data)}else if(y.isDataArrayTexture)if(O){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Ut,ut.width,ut.height,ut.depth),St)if(y.layerUpdates.size>0){const dt=hc(ut.width,ut.height,y.format,y.type);for(const it of y.layerUpdates){const It=ut.data.subarray(it*dt/ut.data.BYTES_PER_ELEMENT,(it+1)*dt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,ut.width,ut.height,1,Tt,Ht,It)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Tt,Ht,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,ut.width,ut.height,ut.depth,0,Tt,Ht,ut.data);else if(y.isData3DTexture)O?(mt&&e.texStorage3D(i.TEXTURE_3D,Ct,Ut,ut.width,ut.height,ut.depth),St&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Tt,Ht,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,ut.width,ut.height,ut.depth,0,Tt,Ht,ut.data);else if(y.isFramebufferTexture){if(mt)if(O)e.texStorage2D(i.TEXTURE_2D,Ct,Ut,ut.width,ut.height);else{let dt=ut.width,it=ut.height;for(let It=0;It<Ct;It++)e.texImage2D(i.TEXTURE_2D,It,Ut,dt,it,0,Tt,Ht,null),dt>>=1,it>>=1}}else if(Zt.length>0){if(O&&mt){const dt=Gt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,Ut,dt.width,dt.height)}for(let dt=0,it=Zt.length;dt<it;dt++)Et=Zt[dt],O?St&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Tt,Ht,Et):e.texImage2D(i.TEXTURE_2D,dt,Ut,Tt,Ht,Et);y.generateMipmaps=!1}else if(O){if(mt){const dt=Gt(ut);e.texStorage2D(i.TEXTURE_2D,Ct,Ut,dt.width,dt.height)}St&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Ht,ut)}else e.texImage2D(i.TEXTURE_2D,0,Ut,Tt,Ht,ut);m(y)&&p(Z),Dt.__version=K.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function q(A,y,V){if(y.image.length!==6)return;const Z=Wt(A,y),rt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const K=n.get(rt);if(rt.version!==K.__version||Z===!0){e.activeTexture(i.TEXTURE0+V);const Dt=se.getPrimaries(se.workingColorSpace),gt=y.colorSpace===Fn?null:se.getPrimaries(y.colorSpace),Pt=y.colorSpace===Fn||Dt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Lt=y.isCompressedTexture||y.image[0].isCompressedTexture,ut=y.image[0]&&y.image[0].isDataTexture,Tt=[];for(let it=0;it<6;it++)!Lt&&!ut?Tt[it]=_(y.image[it],!0,s.maxCubemapSize):Tt[it]=ut?y.image[it].image:y.image[it],Tt[it]=Xt(y,Tt[it]);const Ht=Tt[0],Ut=r.convert(y.format,y.colorSpace),Et=r.convert(y.type),Zt=x(y.internalFormat,Ut,Et,y.colorSpace),O=y.isVideoTexture!==!0,mt=K.__version===void 0||Z===!0,St=rt.dataReady;let Ct=T(y,Ht);Nt(i.TEXTURE_CUBE_MAP,y);let dt;if(Lt){O&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Zt,Ht.width,Ht.height);for(let it=0;it<6;it++){dt=Tt[it].mipmaps;for(let It=0;It<dt.length;It++){const qt=dt[It];y.format!==on?Ut!==null?O?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,qt.width,qt.height,Ut,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,Zt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,qt.width,qt.height,Ut,Et,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,Zt,qt.width,qt.height,0,Ut,Et,qt.data)}}}else{if(dt=y.mipmaps,O&&mt){dt.length>0&&Ct++;const it=Gt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Zt,it.width,it.height)}for(let it=0;it<6;it++)if(ut){O?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Tt[it].width,Tt[it].height,Ut,Et,Tt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Zt,Tt[it].width,Tt[it].height,0,Ut,Et,Tt[it].data);for(let It=0;It<dt.length;It++){const ue=dt[It].image[it].image;O?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,ue.width,ue.height,Ut,Et,ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,Zt,ue.width,ue.height,0,Ut,Et,ue.data)}}else{O?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ut,Et,Tt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Zt,Ut,Et,Tt[it]);for(let It=0;It<dt.length;It++){const qt=dt[It];O?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,Ut,Et,qt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,Zt,Ut,Et,qt.image[it])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),K.__version=rt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function lt(A,y,V,Z,rt,K){const Dt=r.convert(V.format,V.colorSpace),gt=r.convert(V.type),Pt=x(V.internalFormat,Dt,gt,V.colorSpace),Lt=n.get(y),ut=n.get(V);if(ut.__renderTarget=y,!Lt.__hasExternalTextures){const Tt=Math.max(1,y.width>>K),Ht=Math.max(1,y.height>>K);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,K,Pt,Tt,Ht,y.depth,0,Dt,gt,null):e.texImage2D(rt,K,Pt,Tt,Ht,0,Dt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ht(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,rt,ut.__webglTexture,0,xt(y)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,rt,ut.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(A,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const Z=y.depthTexture,rt=Z&&Z.isDepthTexture?Z.type:null,K=v(y.stencilBuffer,rt),Dt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=xt(y);ht(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,K,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,K,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,K,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,A)}else{const Z=y.textures;for(let rt=0;rt<Z.length;rt++){const K=Z[rt],Dt=r.convert(K.format,K.colorSpace),gt=r.convert(K.type),Pt=x(K.internalFormat,Dt,gt,K.colorSpace),Lt=xt(y);V&&ht(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,Pt,y.width,y.height):ht(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,Pt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),F(y.depthTexture,0);const rt=Z.__webglTexture,K=xt(y);if(y.depthTexture.format===is)ht(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,rt,0);else if(y.depthTexture.format===ss)ht(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Bt(A){const y=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const rt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",rt)};Z.addEventListener("dispose",rt),y.__depthDisposeCallback=rt}y.__boundDepthTexture=Z}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Z=A.texture.mipmaps;Z&&Z.length>0?vt(y.__webglFramebuffer[0],A):vt(y.__webglFramebuffer,A)}else if(V){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),yt(y.__webglDepthbuffer[Z],A,!1);else{const rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,K)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),yt(y.__webglDepthbuffer,A,!1);else{const rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(A,y,V){const Z=n.get(A);y!==void 0&&lt(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Bt(A)}function I(A){const y=A.texture,V=n.get(A),Z=n.get(y);A.addEventListener("dispose",C);const rt=A.textures,K=A.isWebGLCubeRenderTarget===!0,Dt=rt.length>1;if(Dt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),K){V.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[gt]=[];for(let Pt=0;Pt<y.mipmaps.length;Pt++)V.__webglFramebuffer[gt][Pt]=i.createFramebuffer()}else V.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)V.__webglFramebuffer[gt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let gt=0,Pt=rt.length;gt<Pt;gt++){const Lt=n.get(rt[gt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&ht(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let gt=0;gt<rt.length;gt++){const Pt=rt[gt];V.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[gt]);const Lt=r.convert(Pt.format,Pt.colorSpace),ut=r.convert(Pt.type),Tt=x(Pt.internalFormat,Lt,ut,Pt.colorSpace,A.isXRRenderTarget===!0),Ht=xt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Tt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,V.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Pt=0;Pt<y.mipmaps.length;Pt++)lt(V.__webglFramebuffer[gt][Pt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt);else lt(V.__webglFramebuffer[gt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let gt=0,Pt=rt.length;gt<Pt;gt++){const Lt=rt[gt],ut=n.get(Lt);let Tt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Tt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,ut.__webglTexture),Nt(Tt,Lt),lt(V.__webglFramebuffer,A,Lt,i.COLOR_ATTACHMENT0+gt,Tt,0),m(Lt)&&p(Tt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Z.__webglTexture),Nt(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let Pt=0;Pt<y.mipmaps.length;Pt++)lt(V.__webglFramebuffer[Pt],A,y,i.COLOR_ATTACHMENT0,gt,Pt);else lt(V.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,gt,0);m(y)&&p(gt),e.unbindTexture()}A.depthBuffer&&Bt(A)}function st(A){const y=A.textures;for(let V=0,Z=y.length;V<Z;V++){const rt=y[V];if(m(rt)){const K=M(A),Dt=n.get(rt).__webglTexture;e.bindTexture(K,Dt),p(K),e.unbindTexture()}}}const Q=[],j=[];function $(A){if(A.samples>0){if(ht(A)===!1){const y=A.textures,V=A.width,Z=A.height;let rt=i.COLOR_BUFFER_BIT;const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(A),gt=y.length>1;if(gt)for(let Lt=0;Lt<y.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Pt=A.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Lt=0;Lt<y.length;Lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Lt]);const ut=n.get(y[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,V,Z,0,0,V,Z,rt,i.NEAREST),c===!0&&(Q.length=0,j.length=0,Q.push(i.COLOR_ATTACHMENT0+Lt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push(K),j.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Lt=0;Lt<y.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Lt]);const ut=n.get(y[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function xt(A){return Math.min(s.maxSamples,A.samples)}function ht(A){const y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Mt(A){const y=o.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Xt(A,y){const V=A.colorSpace,Z=A.format,rt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Ii&&V!==Fn&&(se.getTransfer(V)===ce?(Z!==on||rt!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function Gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=U,this.setTexture2D=F,this.setTexture2DArray=D,this.setTexture3D=N,this.setTextureCube=B,this.rebindTextures=re,this.setupRenderTarget=I,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=ht}function S0(i,t){function e(n,s=Fn){let r;const o=se.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===Qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===jo)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===us)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===Kc)return i.RGB;if(n===on)return i.RGBA;if(n===is)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===ea)return i.RED;if(n===na)return i.RED_INTEGER;if(n===Jc)return i.RG;if(n===ia)return i.RG_INTEGER;if(n===sa)return i.RGBA_INTEGER;if(n===Xs||n===qs||n===Ys||n===Zs)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mo||n===go||n===_o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mo||n===go)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_o)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vo||n===xo||n===Mo||n===yo||n===So||n===bo||n===Eo||n===wo||n===To||n===Ao||n===Co||n===Ro||n===Po||n===Lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Co)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lo)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Do||n===Uo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Io)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===No||n===Fo||n===Oo||n===Bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===No)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const b0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E0=`
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

}`;class w0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new hl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zn({vertexShader:b0,fragmentShader:E0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T0 extends Ni{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new w0,p={},M=e.getContextAttributes();let x=null,v=null;const T=[],w=[],C=new ct;let L=null;const b=new Ye;b.viewport=new le;const S=new Ye;S.viewport=new le;const P=[b,S],U=new Xu;let W=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let q=T[G];return q===void 0&&(q=new Ir,T[G]=q),q.getTargetRaySpace()},this.getControllerGrip=function(G){let q=T[G];return q===void 0&&(q=new Ir,T[G]=q),q.getGripSpace()},this.getHand=function(G){let q=T[G];return q===void 0&&(q=new Ir,T[G]=q),q.getHandSpace()};function F(G){const q=w.indexOf(G.inputSource);if(q===-1)return;const lt=T[q];lt!==void 0&&(lt.update(G.inputSource,G.frame,l||o),lt.dispatchEvent({type:G.type,data:G.inputSource}))}function D(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",N);for(let G=0;G<T.length;G++){const q=w[G];q!==null&&(w[G]=null,T[G].disconnect(q))}W=null,k=null,m.reset();for(const G in p)delete p[G];t.setRenderTarget(x),d=null,f=null,u=null,s=null,v=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",D),s.addEventListener("inputsourceschange",N),M.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,yt=null,vt=null;M.depth&&(vt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=M.stencil?ss:is,yt=M.stencil?ns:ei);const Bt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new ni(f.textureWidth,f.textureHeight,{format:on,type:dn,depthTexture:new ll(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const lt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ni(d.framebufferWidth,d.framebufferHeight,{format:on,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(G){for(let q=0;q<G.removed.length;q++){const lt=G.removed[q],yt=w.indexOf(lt);yt>=0&&(w[yt]=null,T[yt].disconnect(lt))}for(let q=0;q<G.added.length;q++){const lt=G.added[q];let yt=w.indexOf(lt);if(yt===-1){for(let Bt=0;Bt<T.length;Bt++)if(Bt>=w.length){w.push(lt),yt=Bt;break}else if(w[Bt]===null){w[Bt]=lt,yt=Bt;break}if(yt===-1)break}const vt=T[yt];vt&&vt.connect(lt)}}const B=new R,J=new R;function at(G,q,lt){B.setFromMatrixPosition(q.matrixWorld),J.setFromMatrixPosition(lt.matrixWorld);const yt=B.distanceTo(J),vt=q.projectionMatrix.elements,Bt=lt.projectionMatrix.elements,re=vt[14]/(vt[10]-1),I=vt[14]/(vt[10]+1),st=(vt[9]+1)/vt[5],Q=(vt[9]-1)/vt[5],j=(vt[8]-1)/vt[0],$=(Bt[8]+1)/Bt[0],xt=re*j,ht=re*$,Mt=yt/(-j+$),Xt=Mt*-j;if(q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Xt),G.translateZ(Mt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),vt[10]===-1)G.projectionMatrix.copy(q.projectionMatrix),G.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Gt=re+Mt,A=I+Mt,y=xt-Xt,V=ht+(yt-Xt),Z=st*I/A*Gt,rt=Q*I/A*Gt;G.projectionMatrix.makePerspective(y,V,Z,rt,Gt,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function _t(G,q){q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let q=G.near,lt=G.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(lt=m.depthFar)),U.near=S.near=b.near=q,U.far=S.far=b.far=lt,(W!==U.near||k!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),W=U.near,k=U.far),U.layers.mask=G.layers.mask|6,b.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;const yt=G.parent,vt=U.cameras;_t(U,yt);for(let Bt=0;Bt<vt.length;Bt++)_t(vt[Bt],yt);vt.length===2?at(U,b,S):U.projectionMatrix.copy(b.projectionMatrix),Nt(G,U,yt)};function Nt(G,q,lt){lt===null?G.matrix.copy(q.matrixWorld):(G.matrix.copy(lt.matrixWorld),G.matrix.invert(),G.matrix.multiply(q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(q.projectionMatrix),G.projectionMatrixInverse.copy(q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=zo*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(G){return p[G]};let Wt=null;function et(G,q){if(h=q.getViewerPose(l||o),g=q,h!==null){const lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let yt=!1;lt.length!==U.cameras.length&&(U.cameras.length=0,yt=!0);for(let I=0;I<lt.length;I++){const st=lt[I];let Q=null;if(d!==null)Q=d.getViewport(st);else{const $=u.getViewSubImage(f,st);Q=$.viewport,I===0&&(t.setRenderTargetTextures(v,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(v))}let j=P[I];j===void 0&&(j=new Ye,j.layers.enable(I),j.viewport=new le,P[I]=j),j.matrix.fromArray(st.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(st.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Q.x,Q.y,Q.width,Q.height),I===0&&(U.matrix.copy(j.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),yt===!0&&U.cameras.push(j)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const I=u.getDepthInformation(lt[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(vt&&vt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let I=0;I<lt.length;I++){const st=lt[I].camera;if(st){let Q=p[st];Q||(Q=new hl,p[st]=Q);const j=u.getCameraImage(st);Q.sourceTexture=j}}}}for(let lt=0;lt<T.length;lt++){const yt=w[lt],vt=T[lt];yt!==null&&vt!==void 0&&vt.update(yt,q,l||o)}Wt&&Wt(G,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const nt=new Sl;nt.setAnimationLoop(et),this.setAnimationLoop=function(G){Wt=G},this.dispose=function(){}}}const Yn=new Je,A0=new jt;function C0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ie&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ie&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,Yn.copy(v),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(A0.makeRotationFromEuler(Yn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ie&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function l(M,x){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const T=x.program;n.updateUBOMapping(M,T);const w=t.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function h(M){const x=u();M.__bindingPointIndex=x;const v=i.createBuffer(),T=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=s[M.id],v=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,C=v.length;w<C;w++){const L=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,S=L.length;b<S;b++){const P=L[b];if(d(P,w,b,T)===!0){const U=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let F=0;F<W.length;F++){const D=W[F],N=_(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,U+k,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,k),k+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,x,v,T){const w=M.value,C=x+"_"+v;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{const L=T[C];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return T[C]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(M){const x=M.uniforms;let v=0;const T=16;for(let C=0,L=x.length;C<L;C++){const b=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,P=b.length;S<P;S++){const U=b[S],W=Array.isArray(U.value)?U.value:[U.value];for(let k=0,F=W.length;k<F;k++){const D=W[k],N=_(D),B=v%T,J=B%N.boundary,at=B+J;v+=J,at!==0&&T-at<N.storage&&(v+=T-at),U.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=N.storage}}}const w=v%T;return w>0&&(v+=T-w),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class P0{constructor(t={}){const{canvas:e=Ah(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=ke;let w=0,C=0,L=null,b=-1,S=null;const P=new le,U=new le;let W=null;const k=new Yt(0);let F=0,D=e.width,N=e.height,B=1,J=null,at=null;const _t=new le(0,0,D,N),Nt=new le(0,0,D,N);let Wt=!1;const et=new la;let nt=!1,G=!1;const q=new jt,lt=new R,yt=new le,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function re(){return L===null?B:1}let I=n;function st(E,z){return e.getContext(E,z)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jo}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",dt,!1),I===null){const z="webgl2";if(I=st(z,E),I===null)throw st(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,j,$,xt,ht,Mt,Xt,Gt,A,y,V,Z,rt,K,Dt,gt,Pt,Lt,ut,Tt,Ht,Ut,Et,Zt;function O(){Q=new kp(I),Q.init(),Ut=new S0(I,Q),j=new Dp(I,Q,t,Ut),$=new M0(I,Q),j.reversedDepthBuffer&&f&&$.buffers.depth.setReversed(!0),xt=new Gp(I),ht=new a0,Mt=new y0(I,Q,$,ht,j,Ut,xt),Xt=new Np(v),Gt=new zp(v),A=new Zu(I),Et=new Lp(I,A),y=new Hp(I,A,xt,Et),V=new Xp(I,y,A,xt),ut=new Wp(I,j,Mt),gt=new Up(ht),Z=new o0(v,Xt,Gt,Q,j,Et,gt),rt=new C0(v,ht),K=new l0,Dt=new m0(Q),Lt=new Pp(v,Xt,Gt,$,V,d,c),Pt=new v0(v,V,j),Zt=new R0(I,xt,j,$),Tt=new Ip(I,Q,xt),Ht=new Vp(I,Q,xt),xt.programs=Z.programs,v.capabilities=j,v.extensions=Q,v.properties=ht,v.renderLists=K,v.shadowMap=Pt,v.state=$,v.info=xt}O();const mt=new T0(v,I);this.xr=mt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(D,N,!1))},this.getSize=function(E){return E.set(D,N)},this.setSize=function(E,z,X=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=E,N=z,e.width=Math.floor(E*B),e.height=Math.floor(z*B),X===!0&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(D*B,N*B).floor()},this.setDrawingBufferSize=function(E,z,X){D=E,N=z,B=X,e.width=Math.floor(E*X),e.height=Math.floor(z*X),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,z,X,Y){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,z,X,Y),$.viewport(P.copy(_t).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(Nt)},this.setScissor=function(E,z,X,Y){E.isVector4?Nt.set(E.x,E.y,E.z,E.w):Nt.set(E,z,X,Y),$.scissor(U.copy(Nt).multiplyScalar(B).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(E){$.setScissorTest(Wt=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,X=!0){let Y=0;if(E){let H=!1;if(L!==null){const ft=L.texture.format;H=ft===sa||ft===ia||ft===na}if(H){const ft=L.texture.type,wt=ft===dn||ft===ei||ft===es||ft===ns||ft===Qo||ft===ta,Rt=Lt.getClearColor(),At=Lt.getClearAlpha(),kt=Rt.r,Vt=Rt.g,Ft=Rt.b;wt?(g[0]=kt,g[1]=Vt,g[2]=Ft,g[3]=At,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=kt,_[1]=Vt,_[2]=Ft,_[3]=At,I.clearBufferiv(I.COLOR,0,_))}else Y|=I.COLOR_BUFFER_BIT}z&&(Y|=I.DEPTH_BUFFER_BIT),X&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Lt.dispose(),K.dispose(),Dt.dispose(),ht.dispose(),Xt.dispose(),Gt.dispose(),V.dispose(),Et.dispose(),Zt.dispose(),Z.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",an),mt.removeEventListener("sessionend",ya),kn.stop()};function St(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=xt.autoReset,z=Pt.enabled,X=Pt.autoUpdate,Y=Pt.needsUpdate,H=Pt.type;O(),xt.autoReset=E,Pt.enabled=z,Pt.autoUpdate=X,Pt.needsUpdate=Y,Pt.type=H}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const z=E.target;z.removeEventListener("dispose",it),It(z)}function It(E){qt(E),ht.remove(E)}function qt(E){const z=ht.get(E).programs;z!==void 0&&(z.forEach(function(X){Z.releaseProgram(X)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,X,Y,H,ft){z===null&&(z=vt);const wt=H.isMesh&&H.matrixWorld.determinant()<0,Rt=Dl(E,z,X,Y,H);$.setMaterial(Y,wt);let At=X.index,kt=1;if(Y.wireframe===!0){if(At=y.getWireframeAttribute(X),At===void 0)return;kt=2}const Vt=X.drawRange,Ft=X.attributes.position;let Qt=Vt.start*kt,ae=(Vt.start+Vt.count)*kt;ft!==null&&(Qt=Math.max(Qt,ft.start*kt),ae=Math.min(ae,(ft.start+ft.count)*kt)),At!==null?(Qt=Math.max(Qt,0),ae=Math.min(ae,At.count)):Ft!=null&&(Qt=Math.max(Qt,0),ae=Math.min(ae,Ft.count));const ve=ae-Qt;if(ve<0||ve===1/0)return;Et.setup(H,Y,Rt,X,At);let de,he=Tt;if(At!==null&&(de=A.get(At),he=Ht,he.setIndex(de)),H.isMesh)Y.wireframe===!0?($.setLineWidth(Y.wireframeLinewidth*re()),he.setMode(I.LINES)):he.setMode(I.TRIANGLES);else if(H.isLine){let Ot=Y.linewidth;Ot===void 0&&(Ot=1),$.setLineWidth(Ot*re()),H.isLineSegments?he.setMode(I.LINES):H.isLineLoop?he.setMode(I.LINE_LOOP):he.setMode(I.LINE_STRIP)}else H.isPoints?he.setMode(I.POINTS):H.isSprite&&he.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))he.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ot=H._multiDrawStarts,pe=H._multiDrawCounts,ne=H._multiDrawCount,Ve=At?A.get(At).bytesPerElement:1,oi=ht.get(Y).currentProgram.getUniforms();for(let Ge=0;Ge<ne;Ge++)oi.setValue(I,"_gl_DrawID",Ge),he.render(Ot[Ge]/Ve,pe[Ge])}else if(H.isInstancedMesh)he.renderInstances(Qt,ve,H.count);else if(X.isInstancedBufferGeometry){const Ot=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,pe=Math.min(X.instanceCount,Ot);he.renderInstances(Qt,ve,pe)}else he.render(Qt,ve)};function ue(E,z,X){E.transparent===!0&&E.side===sn&&E.forceSinglePass===!1?(E.side=Ie,E.needsUpdate=!0,ms(E,z,X),E.side=Tn,E.needsUpdate=!0,ms(E,z,X),E.side=sn):ms(E,z,X)}this.compile=function(E,z,X=null){X===null&&(X=E),p=Dt.get(X),p.init(z),x.push(p),X.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==X&&E.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Y=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ft=H.material;if(ft)if(Array.isArray(ft))for(let wt=0;wt<ft.length;wt++){const Rt=ft[wt];ue(Rt,X,H),Y.add(Rt)}else ue(ft,X,H),Y.add(ft)}),p=x.pop(),Y},this.compileAsync=function(E,z,X=null){const Y=this.compile(E,z,X);return new Promise(H=>{function ft(){if(Y.forEach(function(wt){ht.get(wt).currentProgram.isReady()&&Y.delete(wt)}),Y.size===0){H(E);return}setTimeout(ft,10)}Q.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let oe=null;function pn(E){oe&&oe(E)}function an(){kn.stop()}function ya(){kn.start()}const kn=new Sl;kn.setAnimationLoop(pn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(E){oe=E,mt.setAnimationLoop(E),E===null?kn.stop():kn.start()},mt.addEventListener("sessionstart",an),mt.addEventListener("sessionend",ya),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(z),z=mt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,z,L),p=Dt.get(E,x.length),p.init(z),x.push(p),q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),et.setFromProjectionMatrix(q,un,z.reversedDepth),G=this.localClippingEnabled,nt=gt.init(this.clippingPlanes,G),m=K.get(E,M.length),m.init(),M.push(m),mt.enabled===!0&&mt.isPresenting===!0){const ft=v.xr.getDepthSensingMesh();ft!==null&&ar(ft,z,-1/0,v.sortObjects)}ar(E,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(J,at),Bt=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,Bt&&Lt.addToRenderList(m,E),this.info.render.frame++,nt===!0&&gt.beginShadows();const X=p.state.shadowsArray;Pt.render(X,E,z),nt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ft=z.cameras;if(H.length>0)for(let wt=0,Rt=ft.length;wt<Rt;wt++){const At=ft[wt];ba(Y,H,E,At)}Bt&&Lt.render(E);for(let wt=0,Rt=ft.length;wt<Rt;wt++){const At=ft[wt];Sa(m,E,At,At.viewport)}}else H.length>0&&ba(Y,H,E,z),Bt&&Lt.render(E),Sa(m,E,z);L!==null&&C===0&&(Mt.updateMultisampleRenderTarget(L),Mt.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(v,E,z),Et.resetDefaultState(),b=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],nt===!0&&gt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ar(E,z,X,Y){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||et.intersectsSprite(E)){Y&&yt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const wt=V.update(E),Rt=E.material;Rt.visible&&m.push(E,wt,Rt,X,yt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||et.intersectsObject(E))){const wt=V.update(E),Rt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),yt.copy(E.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),yt.copy(wt.boundingSphere.center)),yt.applyMatrix4(E.matrixWorld).applyMatrix4(q)),Array.isArray(Rt)){const At=wt.groups;for(let kt=0,Vt=At.length;kt<Vt;kt++){const Ft=At[kt],Qt=Rt[Ft.materialIndex];Qt&&Qt.visible&&m.push(E,wt,Qt,X,yt.z,Ft)}}else Rt.visible&&m.push(E,wt,Rt,X,yt.z,null)}}const ft=E.children;for(let wt=0,Rt=ft.length;wt<Rt;wt++)ar(ft[wt],z,X,Y)}function Sa(E,z,X,Y){const H=E.opaque,ft=E.transmissive,wt=E.transparent;p.setupLightsView(X),nt===!0&&gt.setGlobalState(v.clippingPlanes,X),Y&&$.viewport(P.copy(Y)),H.length>0&&ps(H,z,X),ft.length>0&&ps(ft,z,X),wt.length>0&&ps(wt,z,X),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function ba(E,z,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ni(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?us:dn,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const ft=p.state.transmissionRenderTarget[Y.id],wt=Y.viewport||P;ft.setSize(wt.z*v.transmissionResolutionScale,wt.w*v.transmissionResolutionScale);const Rt=v.getRenderTarget(),At=v.getActiveCubeFace(),kt=v.getActiveMipmapLevel();v.setRenderTarget(ft),v.getClearColor(k),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),Bt&&Lt.render(X);const Vt=v.toneMapping;v.toneMapping=Bn;const Ft=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),nt===!0&&gt.setGlobalState(v.clippingPlanes,Y),ps(E,X,Y),Mt.updateMultisampleRenderTarget(ft),Mt.updateRenderTargetMipmap(ft),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let ae=0,ve=z.length;ae<ve;ae++){const de=z[ae],he=de.object,Ot=de.geometry,pe=de.material,ne=de.group;if(pe.side===sn&&he.layers.test(Y.layers)){const Ve=pe.side;pe.side=Ie,pe.needsUpdate=!0,Ea(he,X,Y,Ot,pe,ne),pe.side=Ve,pe.needsUpdate=!0,Qt=!0}}Qt===!0&&(Mt.updateMultisampleRenderTarget(ft),Mt.updateRenderTargetMipmap(ft))}v.setRenderTarget(Rt,At,kt),v.setClearColor(k,F),Ft!==void 0&&(Y.viewport=Ft),v.toneMapping=Vt}function ps(E,z,X){const Y=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ft=E.length;H<ft;H++){const wt=E[H],Rt=wt.object,At=wt.geometry,kt=wt.group;let Vt=wt.material;Vt.allowOverride===!0&&Y!==null&&(Vt=Y),Rt.layers.test(X.layers)&&Ea(Rt,z,X,At,Vt,kt)}}function Ea(E,z,X,Y,H,ft){E.onBeforeRender(v,z,X,Y,H,ft),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(v,z,X,Y,E,ft),H.transparent===!0&&H.side===sn&&H.forceSinglePass===!1?(H.side=Ie,H.needsUpdate=!0,v.renderBufferDirect(X,z,Y,H,E,ft),H.side=Tn,H.needsUpdate=!0,v.renderBufferDirect(X,z,Y,H,E,ft),H.side=sn):v.renderBufferDirect(X,z,Y,H,E,ft),E.onAfterRender(v,z,X,Y,H,ft)}function ms(E,z,X){z.isScene!==!0&&(z=vt);const Y=ht.get(E),H=p.state.lights,ft=p.state.shadowsArray,wt=H.state.version,Rt=Z.getParameters(E,H.state,ft,z,X),At=Z.getProgramCacheKey(Rt);let kt=Y.programs;Y.environment=E.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(E.isMeshStandardMaterial?Gt:Xt).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,kt===void 0&&(E.addEventListener("dispose",it),kt=new Map,Y.programs=kt);let Vt=kt.get(At);if(Vt!==void 0){if(Y.currentProgram===Vt&&Y.lightsStateVersion===wt)return Ta(E,Rt),Vt}else Rt.uniforms=Z.getUniforms(E),E.onBeforeCompile(Rt,v),Vt=Z.acquireProgram(Rt,At),kt.set(At,Vt),Y.uniforms=Rt.uniforms;const Ft=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=gt.uniform),Ta(E,Rt),Y.needsLights=Nl(E),Y.lightsStateVersion=wt,Y.needsLights&&(Ft.ambientLightColor.value=H.state.ambient,Ft.lightProbe.value=H.state.probe,Ft.directionalLights.value=H.state.directional,Ft.directionalLightShadows.value=H.state.directionalShadow,Ft.spotLights.value=H.state.spot,Ft.spotLightShadows.value=H.state.spotShadow,Ft.rectAreaLights.value=H.state.rectArea,Ft.ltc_1.value=H.state.rectAreaLTC1,Ft.ltc_2.value=H.state.rectAreaLTC2,Ft.pointLights.value=H.state.point,Ft.pointLightShadows.value=H.state.pointShadow,Ft.hemisphereLights.value=H.state.hemi,Ft.directionalShadowMap.value=H.state.directionalShadowMap,Ft.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ft.spotShadowMap.value=H.state.spotShadowMap,Ft.spotLightMatrix.value=H.state.spotLightMatrix,Ft.spotLightMap.value=H.state.spotLightMap,Ft.pointShadowMap.value=H.state.pointShadowMap,Ft.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Vt,Y.uniformsList=null,Vt}function wa(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Ks.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Ta(E,z){const X=ht.get(E);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Dl(E,z,X,Y,H){z.isScene!==!0&&(z=vt),Mt.resetTextureUnits();const ft=z.fog,wt=Y.isMeshStandardMaterial?z.environment:null,Rt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ii,At=(Y.isMeshStandardMaterial?Gt:Xt).get(Y.envMap||wt),kt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ft=!!X.morphAttributes.position,Qt=!!X.morphAttributes.normal,ae=!!X.morphAttributes.color;let ve=Bn;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ve=v.toneMapping);const de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,he=de!==void 0?de.length:0,Ot=ht.get(Y),pe=p.state.lights;if(nt===!0&&(G===!0||E!==S)){const Ue=E===S&&Y.id===b;gt.setState(Y,E,Ue)}let ne=!1;Y.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==pe.state.version||Ot.outputColorSpace!==Rt||H.isBatchedMesh&&Ot.batching===!1||!H.isBatchedMesh&&Ot.batching===!0||H.isBatchedMesh&&Ot.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ot.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ot.instancing===!1||!H.isInstancedMesh&&Ot.instancing===!0||H.isSkinnedMesh&&Ot.skinning===!1||!H.isSkinnedMesh&&Ot.skinning===!0||H.isInstancedMesh&&Ot.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ot.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ot.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ot.instancingMorph===!1&&H.morphTexture!==null||Ot.envMap!==At||Y.fog===!0&&Ot.fog!==ft||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==gt.numPlanes||Ot.numIntersection!==gt.numIntersection)||Ot.vertexAlphas!==kt||Ot.vertexTangents!==Vt||Ot.morphTargets!==Ft||Ot.morphNormals!==Qt||Ot.morphColors!==ae||Ot.toneMapping!==ve||Ot.morphTargetsCount!==he)&&(ne=!0):(ne=!0,Ot.__version=Y.version);let Ve=Ot.currentProgram;ne===!0&&(Ve=ms(Y,z,H));let oi=!1,Ge=!1,zi=!1;const me=Ve.getUniforms(),$e=Ot.uniforms;if($.useProgram(Ve.program)&&(oi=!0,Ge=!0,zi=!0),Y.id!==b&&(b=Y.id,Ge=!0),oi||S!==E){$.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),me.setValue(I,"projectionMatrix",E.projectionMatrix),me.setValue(I,"viewMatrix",E.matrixWorldInverse);const Be=me.map.cameraPosition;Be!==void 0&&Be.setValue(I,lt.setFromMatrixPosition(E.matrixWorld)),j.logarithmicDepthBuffer&&me.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&me.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Ge=!0,zi=!0)}if(H.isSkinnedMesh){me.setOptional(I,H,"bindMatrix"),me.setOptional(I,H,"bindMatrixInverse");const Ue=H.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),me.setValue(I,"boneTexture",Ue.boneTexture,Mt))}H.isBatchedMesh&&(me.setOptional(I,H,"batchingTexture"),me.setValue(I,"batchingTexture",H._matricesTexture,Mt),me.setOptional(I,H,"batchingIdTexture"),me.setValue(I,"batchingIdTexture",H._indirectTexture,Mt),me.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&me.setValue(I,"batchingColorTexture",H._colorsTexture,Mt));const je=X.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&ut.update(H,X,Ve),(Ge||Ot.receiveShadow!==H.receiveShadow)&&(Ot.receiveShadow=H.receiveShadow,me.setValue(I,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&($e.envMap.value=At,$e.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&($e.envMapIntensity.value=z.environmentIntensity),Ge&&(me.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&Ul($e,zi),ft&&Y.fog===!0&&rt.refreshFogUniforms($e,ft),rt.refreshMaterialUniforms($e,Y,B,N,p.state.transmissionRenderTarget[E.id]),Ks.upload(I,wa(Ot),$e,Mt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ks.upload(I,wa(Ot),$e,Mt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&me.setValue(I,"center",H.center),me.setValue(I,"modelViewMatrix",H.modelViewMatrix),me.setValue(I,"normalMatrix",H.normalMatrix),me.setValue(I,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ue=Y.uniformsGroups;for(let Be=0,cr=Ue.length;Be<cr;Be++){const Hn=Ue[Be];Zt.update(Hn,Ve),Zt.bind(Hn,Ve)}}return Ve}function Ul(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Nl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,z,X){const Y=ht.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ht.get(E.texture).__webglTexture=z,ht.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const X=ht.get(E);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0};const Fl=I.createFramebuffer();this.setRenderTarget=function(E,z=0,X=0){L=E,w=z,C=X;let Y=!0,H=null,ft=!1,wt=!1;if(E){const At=ht.get(E);if(At.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(At.__webglFramebuffer===void 0)Mt.setupRenderTarget(E);else if(At.__hasExternalTextures)Mt.rebindTextures(E,ht.get(E.texture).__webglTexture,ht.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ft=E.depthTexture;if(At.__boundDepthTexture!==Ft){if(Ft!==null&&ht.has(Ft)&&(E.width!==Ft.image.width||E.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Mt.setupDepthRenderbuffer(E)}}const kt=E.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(wt=!0);const Vt=ht.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Vt[z])?H=Vt[z][X]:H=Vt[z],ft=!0):E.samples>0&&Mt.useMultisampledRTT(E)===!1?H=ht.get(E).__webglMultisampledFramebuffer:Array.isArray(Vt)?H=Vt[X]:H=Vt,P.copy(E.viewport),U.copy(E.scissor),W=E.scissorTest}else P.copy(_t).multiplyScalar(B).floor(),U.copy(Nt).multiplyScalar(B).floor(),W=Wt;if(X!==0&&(H=Fl),$.bindFramebuffer(I.FRAMEBUFFER,H)&&Y&&$.drawBuffers(E,H),$.viewport(P),$.scissor(U),$.setScissorTest(W),ft){const At=ht.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,At.__webglTexture,X)}else if(wt){const At=z;for(let kt=0;kt<E.textures.length;kt++){const Vt=ht.get(E.textures[kt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+kt,Vt.__webglTexture,X,At)}}else if(E!==null&&X!==0){const At=ht.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,At.__webglTexture,X)}b=-1},this.readRenderTargetPixels=function(E,z,X,Y,H,ft,wt,Rt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=ht.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){$.bindFramebuffer(I.FRAMEBUFFER,At);try{const kt=E.textures[Rt],Vt=kt.format,Ft=kt.type;if(!j.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Y&&X>=0&&X<=E.height-H&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Rt),I.readPixels(z,X,Y,H,Ut.convert(Vt),Ut.convert(Ft),ft))}finally{const kt=L!==null?ht.get(L).__webglFramebuffer:null;$.bindFramebuffer(I.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(E,z,X,Y,H,ft,wt,Rt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=ht.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At)if(z>=0&&z<=E.width-Y&&X>=0&&X<=E.height-H){$.bindFramebuffer(I.FRAMEBUFFER,At);const kt=E.textures[Rt],Vt=kt.format,Ft=kt.type;if(!j.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Qt),I.bufferData(I.PIXEL_PACK_BUFFER,ft.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Rt),I.readPixels(z,X,Y,H,Ut.convert(Vt),Ut.convert(Ft),0);const ae=L!==null?ht.get(L).__webglFramebuffer:null;$.bindFramebuffer(I.FRAMEBUFFER,ae);const ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ch(I,ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Qt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ft),I.deleteBuffer(Qt),I.deleteSync(ve),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,X=0){const Y=Math.pow(2,-X),H=Math.floor(E.image.width*Y),ft=Math.floor(E.image.height*Y),wt=z!==null?z.x:0,Rt=z!==null?z.y:0;Mt.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,wt,Rt,H,ft),$.unbindTexture()};const Ol=I.createFramebuffer(),Bl=I.createFramebuffer();this.copyTextureToTexture=function(E,z,X=null,Y=null,H=0,ft=null){ft===null&&(H!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=H,H=0):ft=0);let wt,Rt,At,kt,Vt,Ft,Qt,ae,ve;const de=E.isCompressedTexture?E.mipmaps[ft]:E.image;if(X!==null)wt=X.max.x-X.min.x,Rt=X.max.y-X.min.y,At=X.isBox3?X.max.z-X.min.z:1,kt=X.min.x,Vt=X.min.y,Ft=X.isBox3?X.min.z:0;else{const je=Math.pow(2,-H);wt=Math.floor(de.width*je),Rt=Math.floor(de.height*je),E.isDataArrayTexture?At=de.depth:E.isData3DTexture?At=Math.floor(de.depth*je):At=1,kt=0,Vt=0,Ft=0}Y!==null?(Qt=Y.x,ae=Y.y,ve=Y.z):(Qt=0,ae=0,ve=0);const he=Ut.convert(z.format),Ot=Ut.convert(z.type);let pe;z.isData3DTexture?(Mt.setTexture3D(z,0),pe=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Mt.setTexture2DArray(z,0),pe=I.TEXTURE_2D_ARRAY):(Mt.setTexture2D(z,0),pe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const ne=I.getParameter(I.UNPACK_ROW_LENGTH),Ve=I.getParameter(I.UNPACK_IMAGE_HEIGHT),oi=I.getParameter(I.UNPACK_SKIP_PIXELS),Ge=I.getParameter(I.UNPACK_SKIP_ROWS),zi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,de.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ft);const me=E.isDataArrayTexture||E.isData3DTexture,$e=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const je=ht.get(E),Ue=ht.get(z),Be=ht.get(je.__renderTarget),cr=ht.get(Ue.__renderTarget);$.bindFramebuffer(I.READ_FRAMEBUFFER,Be.__webglFramebuffer),$.bindFramebuffer(I.DRAW_FRAMEBUFFER,cr.__webglFramebuffer);for(let Hn=0;Hn<At;Hn++)me&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ht.get(E).__webglTexture,H,Ft+Hn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ht.get(z).__webglTexture,ft,ve+Hn)),I.blitFramebuffer(kt,Vt,wt,Rt,Qt,ae,wt,Rt,I.DEPTH_BUFFER_BIT,I.NEAREST);$.bindFramebuffer(I.READ_FRAMEBUFFER,null),$.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||ht.has(E)){const je=ht.get(E),Ue=ht.get(z);$.bindFramebuffer(I.READ_FRAMEBUFFER,Ol),$.bindFramebuffer(I.DRAW_FRAMEBUFFER,Bl);for(let Be=0;Be<At;Be++)me?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.__webglTexture,H,Ft+Be):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,je.__webglTexture,H),$e?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ue.__webglTexture,ft,ve+Be):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ue.__webglTexture,ft),H!==0?I.blitFramebuffer(kt,Vt,wt,Rt,Qt,ae,wt,Rt,I.COLOR_BUFFER_BIT,I.NEAREST):$e?I.copyTexSubImage3D(pe,ft,Qt,ae,ve+Be,kt,Vt,wt,Rt):I.copyTexSubImage2D(pe,ft,Qt,ae,kt,Vt,wt,Rt);$.bindFramebuffer(I.READ_FRAMEBUFFER,null),$.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else $e?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(pe,ft,Qt,ae,ve,wt,Rt,At,he,Ot,de.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(pe,ft,Qt,ae,ve,wt,Rt,At,he,de.data):I.texSubImage3D(pe,ft,Qt,ae,ve,wt,Rt,At,he,Ot,de):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ft,Qt,ae,wt,Rt,he,Ot,de.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ft,Qt,ae,de.width,de.height,he,de.data):I.texSubImage2D(I.TEXTURE_2D,ft,Qt,ae,wt,Rt,he,Ot,de);I.pixelStorei(I.UNPACK_ROW_LENGTH,ne),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ve),I.pixelStorei(I.UNPACK_SKIP_PIXELS,oi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,zi),ft===0&&z.generateMipmaps&&I.generateMipmap(pe),$.unbindTexture()},this.initRenderTarget=function(E){ht.get(E).__webglFramebuffer===void 0&&Mt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Mt.setTextureCube(E,0):E.isData3DTexture?Mt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Mt.setTexture2DArray(E,0):Mt.setTexture2D(E,0),$.unbindTexture()},this.resetState=function(){w=0,C=0,L=null,$.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}class L0 extends cl{constructor(){super();const t=new ye;t.deleteAttribute("uv");const e=new xe({side:Ie}),n=new xe,s=new Gu(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new pt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ir(t,n,6),a=new Ae;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new pt(t,Si(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new pt(t,Si(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new pt(t,Si(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new pt(t,Si(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new pt(t,Si(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new pt(t,Si(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Si(i){return new Bu({color:0,emissive:16777215,emissiveIntensity:i})}class An{constructor(t=1){tt(this,"s");this.s=t>>>0}next(){this.s=this.s+1831565813>>>0;let t=this.s;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1-1e-9))}pick(t){return t[Math.floor(this.next()*t.length)%t.length]}signed(){return this.next()*2-1}}class qo{constructor(t=7){tt(this,"perm");tt(this,"grad");const e=new An(t);this.perm=new Uint8Array(512);const n=new Uint8Array(256);for(let s=0;s<256;s++)n[s]=s;for(let s=255;s>0;s--){const r=e.int(0,s),o=n[s];n[s]=n[r],n[r]=o}for(let s=0;s<512;s++)this.perm[s]=n[s&255];this.grad=new Float32Array(512);for(let s=0;s<512;s++)this.grad[s]=e.signed()}hash(t,e){return this.grad[this.perm[(t&255)+this.perm[e&255]]+0&511]}value(t,e,n){const s=Math.floor(t),r=Math.floor(e),o=t-s,a=e-r,c=o*o*(3-2*o),l=a*a*(3-2*a),h=(x,v)=>(x%v+v)%v,u=h(s,n),f=h(s+1,n),d=h(r,n),g=h(r+1,n),_=this.hash(u,d),m=this.hash(f,d),p=this.hash(u,g),M=this.hash(f,g);return(_*(1-c)+m*c)*(1-l)+(p*(1-c)+M*c)*l}fbm(t,e,n,s=4,r=.5,o=2){let a=1,c=0,l=0,h=1;for(let u=0;u<s;u++)c+=a*this.value(t*h,e*h,n*h),l+=a,a*=r,h*=o;return c/l}cell(t,e,n){const s=t*n,r=e*n,o=Math.floor(s),a=Math.floor(r);let c=9,l=9,h=0;for(let u=-1;u<=1;u++)for(let f=-1;f<=1;f++){const d=o+f,g=a+u,_=(d%n+n)%n,m=(g%n+n)%n,p=this.hash(_,m)*.5+.5,M=this.hash(_+37,m+11)*.5+.5,x=d+p-s,v=g+M-r,T=Math.sqrt(x*x+v*v);T<c?(l=c,c=T,h=_*131+m*17):T<l&&(l=T)}return{f1:c,f2:l,id:h}}}const Ci=i=>i<0?0:i>1?1:i,Ne=(i,t,e)=>{const n=Ci((e-i)/(t-i));return n*n*(3-2*n)},ee=(i,t,e)=>i+(t-i)*e;function _a(i){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d",{willReadFrequently:!0});return{c:t,d:e.createImageData(i,i)}}function va(i,t){return i.getContext("2d").putImageData(t,0,0),i}function xa(i,t,e=1){const n=new su(i);return n.wrapS=n.wrapT=$s,n.repeat.set(e,e),n.anisotropy=8,t&&(n.colorSpace=ke),n.needsUpdate=!0,n}function Un(i,t,e=1){const{c:n,d:s}=_a(i),r=s.data;for(let o=0;o<i;o++)for(let a=0;a<i;a++){const c=t(a/i,o/i),l=(o*i+a)*4;r[l]=Ci(c[0])*255,r[l+1]=Ci(c[1])*255,r[l+2]=Ci(c[2])*255,r[l+3]=255}return xa(va(n,s),!0,e)}function Zn(i,t,e=1){const{c:n,d:s}=_a(i),r=s.data;for(let o=0;o<i;o++)for(let a=0;a<i;a++){const c=Ci(t(a/i,o/i))*255,l=(o*i+a)*4;r[l]=r[l+1]=r[l+2]=c,r[l+3]=255}return xa(va(n,s),!1,e)}function Nn(i,t,e=1,n=1){const s=new Float32Array(i*i);for(let l=0;l<i;l++)for(let h=0;h<i;h++)s[l*i+h]=t(h/i,l/i);const r=(l,h)=>s[(h%i+i)%i*i+(l%i+i)%i],{c:o,d:a}=_a(i),c=a.data;for(let l=0;l<i;l++)for(let h=0;h<i;h++){const u=(r(h+1,l)-r(h-1,l))*e*i*.02,f=(r(h,l+1)-r(h,l-1))*e*i*.02,d=Math.sqrt(u*u+f*f+1),g=(l*i+h)*4;c[g]=(-u/d*.5+.5)*255,c[g+1]=(-f/d*.5+.5)*255,c[g+2]=(1/d*.5+.5)*255,c[g+3]=255}return xa(va(o,a),!1,n)}const I0=()=>new Promise(i=>setTimeout(i,0));async function D0(i){const t=new qo(1337),e=new qo(90210),n=12;let s=0;const r=async()=>{i(++s,n),await I0()},o=(et,nt)=>{const G=et+t.fbm(et*6,nt*6,6,3)*.12,q=nt+e.fbm(et*6+3,nt*6+5,6,3)*.12,lt=t.cell(G,q,9),yt=e.cell(G*1+.31,q*1+.77,22),vt=.13+.24*(Math.sin(lt.id*12.9898)*43758.5453%1+1)*.5,Bt=.1+.22*(Math.sin(yt.id*78.233)*12345.6789%1+1)*.5,re=Ne(vt,vt*.35,lt.f1),I=Ne(Bt,Bt*.4,yt.f1)*.7;return Ci(Math.max(re,I))},a=(et,nt)=>{const G=o(et,nt),q=t.fbm(et*30,nt*30,30,3)*.12;return 1-G*.72+q},c=Un(512,(et,nt)=>{const G=o(et,nt),q=t.fbm(et*26,nt*26,26,4)*.5+.5,lt=Ne(.72,.92,e.fbm(et*60,nt*60,60,2)*.5+.5);let yt=[.965,.892,.717];yt=[yt[0]*ee(.94,1.04,q),yt[1]*ee(.93,1.03,q),yt[2]*ee(.9,1.05,q)];const vt=[.855,.762,.567],Bt=[ee(yt[0],vt[0],G),ee(yt[1],vt[1],G),ee(yt[2],vt[2],G)];return[Bt[0]+lt*.04,Bt[1]+lt*.035,Bt[2]+lt*.02]},1);await r();const l=Zn(256,(et,nt)=>.86+o(et,nt)*.1+t.fbm(et*20,nt*20,20,2)*.06),h=Nn(512,a,1.5),u=Zn(256,(et,nt)=>1-o(et,nt)*.42);await r();const f=(et,nt)=>t.fbm(et*14,nt*14,14,4)*.5+.5,d=Un(256,(et,nt)=>{const G=t.fbm(et*9,nt*9,9,4)*.5+.5,q=Ne(.45,.85,e.fbm(et*4,nt*4,4,3)*.5+.5),lt=[.79,.585,.335],yt=[.6,.4,.208];return[ee(lt[0],yt[0],q*.75)*ee(.92,1.06,G),ee(lt[1],yt[1],q*.75)*ee(.92,1.06,G),ee(lt[2],yt[2],q*.75)*ee(.9,1.08,G)]}),g=Nn(256,f,.7),_=Zn(256,(et,nt)=>.7+(t.fbm(et*12,nt*12,12,3)*.5+.5)*.2);await r();const m=(et,nt)=>{const G=t.fbm(et*7,nt*7,7,4)*.5+.5,q=e.fbm(et*34,nt*34,34,2)*.5+.5;return G*.75+q*.25},p=Un(256,(et,nt)=>{const G=m(et,nt);return[ee(.905,.962,G),ee(.874,.933,G),ee(.808,.872,G)]}),M=Zn(256,(et,nt)=>{const G=m(et,nt);return .33+(e.fbm(et*5+2,nt*5+9,5,3)*.5+.5)*.28+G*.14}),x=Nn(256,m,.55);await r();const v=(et,nt)=>{const G=Math.sin((nt*11+t.fbm(et*3,nt*7,7,2)*5)*Math.PI)*.5+.5;return .78+Ne(.45,1,G)*(.35+.65*(e.fbm(et*4,nt*9,9,2)*.5+.5))*.22+t.fbm(et*22,nt*22,22,2)*.06},T=Un(256,(et,nt)=>{const G=v(et,nt);return[ee(.9,.958,G),ee(.868,.929,G),ee(.802,.868,G)]}),w=Nn(256,v,.28);await r();const C=new An(4242),L=[];for(let et=0;et<260;et++)L.push({u:C.next(),v:C.next(),r:C.range(.008,.019),ang:C.range(0,Math.PI),deep:C.range(.4,1)});const b=(et,nt)=>{let G=0,q=0;for(const lt of L){const yt=Ne(.05,.55,1-Math.abs(lt.v-.42)*1.4);if(yt<.15)continue;let vt=et-lt.u;vt-=Math.round(vt);const Bt=nt-lt.v,re=Math.cos(lt.ang),I=Math.sin(lt.ang),st=(vt*re+Bt*I)/(lt.r*1.35),Q=(-vt*I+Bt*re)/lt.r,j=Math.sqrt(st*st+Q*Q),$=Ne(1,.15,j)*lt.deep*yt;$>G&&(G=$,q=lt.ang)}return{val:G,ang:q}},S=Un(512,(et,nt)=>{const G=b(et,nt),q=t.fbm(et*10,nt*10,10,4)*.5+.5,lt=Ne(0,.85,nt);let yt=ee(.74,.86,q)*ee(.86,1,lt),vt=ee(.075,.14,q)*ee(1.5,.85,lt),Bt=ee(.085,.13,q)*ee(1.2,.9,lt);return yt=ee(yt,.86,G.val*.75),vt=ee(vt,.7,G.val*.8),Bt=ee(Bt,.36,G.val*.8),[yt,vt,Bt]}),P=Nn(512,(et,nt)=>1-b(et,nt).val*.55+e.fbm(et*40,nt*40,40,2)*.05,1.5),U=Zn(256,(et,nt)=>.24+b(et,nt).val*.35+(t.fbm(et*14,nt*14,14,3)*.5+.5)*.14);await r();const k=Nn(512,(et,nt)=>{const G=t.fbm(et*220,nt*3,220,2)*.5+.5,q=Ne(.86,1,e.fbm(et*70,nt*8,70,3)*.5+.5);return G*.55+q*.45},.35),F=Zn(512,(et,nt)=>{const G=t.fbm(et*220,nt*3,220,2)*.5+.5,q=Ne(.8,1,e.fbm(et*70,nt*8,70,3)*.5+.5);return .14+G*.1+q*.3+Ne(.2,.95,nt)*.1});await r();const D=(et,nt)=>{const G=t.fbm(et*180,nt*4,180,2)*.5+.5,q=Ne(.85,.2,Math.hypot(et-.62,nt-.44)*1.6),lt=Ne(.72,1,e.fbm(et*40+nt*9,nt*6,40,3)*.5+.5);return G*.5+lt*q*.5},N=Un(512,(et,nt)=>{const G=D(et,nt),q=ee(.3,.42,G);return[q*1.02,q,q*.975]}),B=Nn(512,D,.4),J=Zn(512,(et,nt)=>.28+D(et,nt)*.22+t.fbm(et*9,nt*9,9,2)*.06);await r();const at=(et,nt)=>t.fbm(et*60,nt*60,60,3)*.5+.5,_t=Un(256,(et,nt)=>{const G=at(et,nt),q=ee(.86,.93,G);return[q,q*.985,q*.955]}),Nt=Nn(256,at,.35);await r();const Wt=Un(256,(et,nt)=>{const G=Ne(0,.03,Math.min(et%.25,.25-et%.25)/.25*4),q=Ne(0,.03,Math.min(nt%.5,.5-nt%.5)/.5*4),lt=Math.min(G,q),yt=t.fbm(et*5,nt*5,5,3)*.5+.5,vt=ee(.62,.74,yt);return[ee(.5,vt,lt),ee(.49,vt*.99,lt),ee(.47,vt*.965,lt)]},1);return await r(),{spongeCutColor:c,spongeCutRough:l,spongeCutNormal:h,spongeCutAO:u,spongeBakeColor:d,spongeBakeNormal:g,spongeBakeRough:_,creamColor:p,creamRough:M,creamNormal:x,creamCutColor:T,creamCutNormal:w,berrySkinColor:S,berrySkinNormal:P,berrySkinRough:U,metalNormal:k,metalRough:F,benchColor:N,benchRough:J,benchNormal:B,boardColor:_t,boardNormal:Nt,wallColor:Wt}}function Hs(i,t,e,n){const s={uCoat:{value:1}};return i.onBeforeCompile=r=>{r.uniforms.uCoat=s.uCoat,r.uniforms.uCoatRadius={value:e},r.vertexShader=`varying vec3 vCoatPos;
`+r.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
  vCoatPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`);const o=t==="angular"?"float p = (atan(vCoatPos.z, vCoatPos.x) + 3.14159265) / 6.2831853;":t==="radialIn"?"float p = 1.0 - clamp(length(vCoatPos.xz) / uCoatRadius, 0.0, 1.0);":"float p = clamp(length(vCoatPos.xz) / uCoatRadius, 0.0, 1.0);";r.fragmentShader=`uniform float uCoat;
uniform float uCoatRadius;
varying vec3 vCoatPos;
`+r.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
  ${o}
  if (p > uCoat) discard;`)},i.customProgramCacheKey=()=>`coat-${t}-${n}`,s}function Vs(i,t="wall"){const e=i.onBeforeCompile,n=t==="wall"?"float band = sin(vNappePos.y * 24.0 + sin(ang * 3.0) * 0.9 + sin(vNappePos.y * 7.0) * 1.7);":"float band = sin(length(vNappePos.xz) * 17.0 + sin(ang * 4.0) * 1.1 + sin(length(vNappePos.xz) * 5.0) * 1.4);";i.onBeforeCompile=(s,r)=>{e?.call(i,s,r),s.vertexShader.includes("vNappePos")||(s.vertexShader=`varying vec3 vNappePos;
`+s.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
  vNappePos = (modelMatrix * vec4(transformed, 1.0)).xyz;`)),s.fragmentShader=`varying vec3 vNappePos;
`+s.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  {
    float ang = atan(vNappePos.z, vNappePos.x);
    ${n}
    float striae = smoothstep(0.2, 1.0, band);
    roughnessFactor = clamp(roughnessFactor - striae * 0.17 + (1.0 - striae) * 0.07, 0.05, 1.0);
    diffuseColor.rgb *= 1.0 + striae * 0.02;
  }`)}}function Al(){const i=new bi({color:16777215,roughness:.52,metalness:0,clearcoat:.16,clearcoatRoughness:.42,envMapIntensity:.5,side:Tn});return i.onBeforeCompile=t=>{t.vertexShader=`attribute float aRadial;
attribute float aAngle;
attribute float aSeed;
varying float vRadial;
varying float vAngle;
varying float vSeed;
`+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vRadial = aRadial;
  vAngle = aAngle;
  vSeed = aSeed;`),t.fragmentShader=`varying float vRadial;
varying float vAngle;
varying float vSeed;
float bhash(vec2 p){ return fract(sin(dot(p, vec2(41.7, 289.1))) * 43758.5453); }
float bnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f*f*(3.0-2.0*f);
  return mix(mix(bhash(i), bhash(i+vec2(1.0,0.0)), f.x),
             mix(bhash(i+vec2(0.0,1.0)), bhash(i+vec2(1.0,1.0)), f.x), f.y);
}
`+t.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  {
    float t = clamp(vRadial, 0.0, 1.0);
    float a = vAngle;
    // Break the perfect bullseye: no berry is a target pattern.
    float wob = bnoise(vec2(a * 2.0, vSeed * 7.0)) * 0.09
              + bnoise(vec2(a * 6.0 + 3.0, vSeed * 11.0)) * 0.04 - 0.065;
    float tt = clamp(t + wob, 0.0, 1.0);

    float skin = smoothstep(0.918, 0.985, tt);
    // Pale pith, drifting off centre the way a real core does.
    float core = 1.0 - smoothstep(0.02, 0.1, tt * (1.0 + 0.35 * sin(a * 1.0 + vSeed * 6.0)));
    float fib = sin(a * 19.0 + sin(a * 3.0 + vSeed * 5.0) * 2.4);
    fib = pow(max(fib, 0.0), 5.0) * smoothstep(0.08, 0.7, tt) * (1.0 - skin);
    float ring = smoothstep(0.8, 0.9, tt) * (1.0 - smoothstep(0.94, 0.99, tt));
    float seeds = smoothstep(0.7, 0.97, bnoise(vec2(a * 23.0, vSeed * 3.0 + 1.0))) * ring;

    vec3 skinCol  = vec3(0.330, 0.018, 0.030);
    vec3 fleshOut = vec3(0.660, 0.048, 0.060);
    vec3 fleshMid = vec3(0.780, 0.105, 0.108);
    vec3 fleshIn  = vec3(0.855, 0.218, 0.200);
    vec3 pithCol  = vec3(0.950, 0.880, 0.822);

    vec3 col = mix(fleshIn, fleshMid, smoothstep(0.02, 0.38, tt));
    col = mix(col, fleshOut, smoothstep(0.38, 0.92, tt));
    col = mix(col, pithCol, core * 0.55);
    col = mix(col, vec3(0.930, 0.690, 0.650), fib * 0.2);
    col = mix(col, vec3(0.88, 0.78, 0.48), seeds * 0.55);
    col = mix(col, skinCol, skin);
    col *= 0.92 + bnoise(vec2(a * 21.0, tt * 24.0)) * 0.16;
    diffuseColor.rgb *= col;
  }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
  {
    float t = clamp(vRadial, 0.0, 1.0);
    // A very thin juice film, pooled in patches rather than a mirror centre.
    float juice = smoothstep(0.45, 0.9, bnoise(vec2(vAngle * 5.0, t * 6.0)))
                * (1.0 - smoothstep(0.72, 0.95, t));
    roughnessFactor = clamp(roughnessFactor - juice * 0.16, 0.26, 1.0);
  }`)},i.customProgramCacheKey=()=>"berryCut",i}function U0(i,t){const e=new xe({map:i.spongeCutColor,normalMap:i.spongeCutNormal,roughnessMap:i.spongeCutRough,aoMap:i.spongeCutAO,aoMapIntensity:.6,roughness:1,metalness:0,color:16777215});e.normalScale.set(.45,.45);const n=new xe({map:i.spongeBakeColor,normalMap:i.spongeBakeNormal,roughnessMap:i.spongeBakeRough,roughness:1,metalness:0}),s=()=>new bi({map:i.creamColor,normalMap:i.creamNormal,roughnessMap:i.creamRough,roughness:1,metalness:0,sheen:.5,sheenRoughness:.65,sheenColor:new Yt(16774371),clearcoat:.12,clearcoatRoughness:.5}),r=s(),o=s();Vs(o,"wall");const a=s();Vs(a,"top");const c=()=>{const M=s(),x=Hs(M,"angular",t,"wall");Vs(M);const v=s(),T=Hs(v,"radialOut",t,"top");Vs(v,"top");const w=()=>new bi({map:i.creamColor,normalMap:i.creamNormal,roughness:.62,metalness:0,color:new Yt(15785922)}),C=w(),L=Hs(C,"angular",t,"uw"),b=w(),S=Hs(b,"radialOut",t,"ut");return{wall:M,top:v,underWall:C,underTop:b,u:{wall:x,top:T,underWall:L,underTop:S}}},l=new bi({map:i.creamCutColor,normalMap:i.creamCutNormal,roughness:.5,metalness:0,sheen:.35,sheenRoughness:.5,sheenColor:new Yt(16773856),clearcoat:.2,clearcoatRoughness:.35}),h=new bi({map:i.berrySkinColor,normalMap:i.berrySkinNormal,roughnessMap:i.berrySkinRough,roughness:1,metalness:0,clearcoat:.65,clearcoatRoughness:.22,sheen:.2,sheenColor:new Yt(16738906)});h.normalScale.set(1.1,1.1);const u=new xe({color:6525247,roughness:.66,metalness:0,side:sn}),f=new xe({color:13620182,metalness:1,roughness:1,roughnessMap:i.metalRough,normalMap:i.metalNormal,envMapIntensity:1.35});f.normalScale.set(.35,.35);const d=new xe({color:2895667,metalness:.15,roughness:.62}),g=new xe({map:i.boardColor,normalMap:i.boardNormal,roughness:.78,metalness:0}),_=new xe({map:i.benchColor,normalMap:i.benchNormal,roughnessMap:i.benchRough,roughness:1,metalness:.85,envMapIntensity:.75});_.normalScale.set(.5,.5);const m=new xe({map:i.wallColor,roughness:.85,metalness:0}),p=new xe({color:15191964,roughness:.95,metalness:0});return{spongeCut:e,spongeBake:n,creamOuter:o,creamTop:a,cream:r,creamCut:l,berrySkin:h,berryHull:u,berryCut:Al(),metal:f,metalHandle:d,board:g,bench:_,wall:m,crumb:p,makeCoat:c}}const Uc=[0,.26,.52,.73,.89,.98,1,.95,.8];function Cl(i,t=1){const e=Uc.map((n,s)=>{if(s===0)return 0;const r=s/(Uc.length-1),o=i.range(-.09,.1)*(1-r),a=i.range(-.055,.055),c=i.range(-.12,.07)*r;return Math.max(.02,n+o+a+c)});return{length:i.range(3.1,4.3)*t,radius:i.range(1.05,1.5)*t,profile:e,lobeAmp:i.range(.03,.075),lobePhase:i.range(0,Math.PI*2),lobeCount:i.pick([3,4,5]),lobe2Amp:i.range(.015,.04),lobe2Phase:i.range(0,Math.PI*2),bend:i.range(0,.1),bendPhase:i.range(0,Math.PI*2),seed:i.next()}}function N0(i,t){const e=i.length-1,n=Math.max(0,Math.min(1,t))*e,s=Math.min(e-1,Math.floor(n)),r=n-s,o=i[Math.max(0,s-1)],a=i[s],c=i[Math.min(e,s+1)],l=i[Math.min(e,s+2)],h=r*r,u=h*r;return .5*(2*a+(-o+c)*r+(2*o-5*a+4*c-l)*h+(-o+3*a-3*c+l)*u)}class Rl{constructor(t){tt(this,"p");this.p=t}radiusAt(t,e){const n=this.p;if(t<=0||t>=1)return 0;const s=N0(n.profile,t),r=.35+.65*t,o=1+n.lobeAmp*Math.cos(n.lobeCount*e+n.lobePhase)*r+n.lobe2Amp*Math.cos((n.lobeCount+3)*e+n.lobe2Phase);return Math.max(0,s*n.radius*o)}axisOffset(t){const e=this.p.bend*this.p.radius*(t-.5);return{x:e*Math.cos(this.p.bendPhase),z:e*Math.sin(this.p.bendPhase)}}get halfLength(){return this.p.length*.5}get boundRadius(){return Math.hypot(this.p.length*.5,this.p.radius*1.12)}point(t,e,n){const s=this.radiusAt(t,e),r=this.axisOffset(t);return n.set(r.x+s*Math.cos(e),(t-.5)*this.p.length,r.z+s*Math.sin(e)),n}buildGeometry(t,e=26,n=22){const s=t?Math.PI:0,r=t?Math.PI:Math.PI*2,o=e+1,a=n+1,c=[],l=[],h=[],u=new R;for(let d=0;d<a;d++){const g=d/n,_=.0025+g*.995;for(let m=0;m<o;m++){const p=s+m/e*r;this.point(_,p,u),c.push(u.x,u.y,u.z),l.push(m/e,g)}}for(let d=0;d<n;d++)for(let g=0;g<e;g++){const _=d*o+g,m=_+1,p=_+o,M=p+1;h.push(_,p,m,m,p,M)}if(!t){const d=n*o,g=c.length/3;c.push(0,this.halfLength*.995,0),l.push(.5,1);for(let _=0;_<e;_++)h.push(g,d+_+1,d+_)}const f=new fe;return f.setAttribute("position",new zt(c,3)),f.setAttribute("uv",new zt(l,2)),f.setIndex(h),f.computeVertexNormals(),f.computeBoundingSphere(),f}silhouette(t=26){const e=[];for(let n=0;n<=t;n++){const s=.0025+n/t*.995,r=this.axisOffset(s);e.push(new ct(r.x+this.radiusAt(s,0),(s-.5)*this.p.length))}for(let n=t;n>=0;n--){const s=.0025+n/t*.995,r=this.axisOffset(s);e.push(new ct(r.x-this.radiusAt(s,Math.PI),(s-.5)*this.p.length))}return e}signedSlab(t,e,n,s){const r=this.halfLength,o=Math.max(-(e+r),e-r),a=Math.min(.998,Math.max(.002,(e+r)/this.p.length)),c=this.axisOffset(a),l=c.x+this.radiusAt(a,0),h=c.x-this.radiusAt(a,Math.PI),u=Math.max(h-t,t-l);return Math.max(o,u,Math.abs(n)-s)}buildSlabFaces(t,e=30){const n=this.silhouette(e),s=n.reduce((g,_)=>g+_.x,0)/n.length,r=n.reduce((g,_)=>g+_.y,0)/n.length,o=[],a=[],c=[],l=[],h=[],u=[],f=[0,.55,1];for(const g of[1,-1]){const _=o.length/3;for(let x=0;x<f.length;x++){const v=f[x];if(x===0){o.push(s,r,g*t),a.push(0,0,g),c.push(0),l.push(0),h.push(this.p.seed);continue}for(const T of n)o.push(s+(T.x-s)*v,r+(T.y-r)*v,g*t),a.push(0,0,g),c.push(v),l.push(Math.atan2(T.y-r,T.x-s)),h.push(this.p.seed)}const m=n.length,p=_+1,M=p+m;for(let x=0;x<m;x++){const v=(x+1)%m;g>0?(u.push(_,p+x,p+v),u.push(p+x,M+x,p+v),u.push(p+v,M+x,M+v)):(u.push(_,p+v,p+x),u.push(p+x,p+v,M+x),u.push(p+v,M+v,M+x))}}const d=new fe;return d.setAttribute("position",new zt(o,3)),d.setAttribute("normal",new zt(a,3)),d.setAttribute("aRadial",new zt(c,1)),d.setAttribute("aAngle",new zt(l,1)),d.setAttribute("aSeed",new zt(h,1)),d.setIndex(u),d.computeBoundingSphere(),d}buildSlabRim(t,e=30){const n=this.silhouette(e),s=n.length,r=[],o=[],a=[],c=[-1,-.6,0,.6,1];let l=0;const h=[];for(let f=0;f<s;f++)h.push(l),l+=n[f].distanceTo(n[(f+1)%s]);for(let f=0;f<c.length;f++){const d=c[f],g=Math.cos(d*Math.PI/2)*.085;for(let _=0;_<s;_++){const m=n[(_-1+s)%s],p=n[(_+1)%s],M=p.x-m.x,x=p.y-m.y,v=Math.hypot(M,x)||1,T=x/v,w=-M/v;r.push(n[_].x+T*g,n[_].y+w*g,d*t),o.push(h[_]/2.4,d*t/2.4+.5)}}for(let f=0;f<c.length-1;f++)for(let d=0;d<s;d++){const g=(d+1)%s,_=f*s+d,m=f*s+g,p=(f+1)*s+d,M=(f+1)*s+g;a.push(_,m,p,m,M,p)}const u=new fe;return u.setAttribute("position",new zt(r,3)),u.setAttribute("uv",new zt(o,2)),u.setIndex(a),u.computeVertexNormals(),u.computeBoundingSphere(),u}buildAcheneGeometry(t=34,e=3){const n=new An(Math.floor(this.p.seed*1e5)+e),s=[],r=new R,o=new R,a=new R,c=new R;for(let l=0;l<t;l++){const h=n.range(.12,.94),u=n.range(0,Math.PI*2);if(this.point(h,u,r),this.point(h+.01,u,a),this.point(h,u+.01,c),o.copy(a).sub(r).cross(c.clone().sub(r)).normalize().multiplyScalar(-1),o.lengthSq()<.5)continue;const f=new wn(n.range(.055,.085),6,4);f.scale(1,1.45,.55);const d=new jt,g=new Oe().setFromUnitVectors(new R(0,0,1),o),_=new Oe().setFromAxisAngle(o,n.range(0,Math.PI));g.premultiply(_),d.compose(r.clone().addScaledVector(o,-.012),g,new R(1,1,1)),f.applyMatrix4(d),s.push(f)}return Yo(s)}buildHullGeometry(){const t=new An(Math.floor(this.p.seed*77777)+11),e=[],n=t.int(6,8),s=this.halfLength*.96,r=this.radiusAt(.985,0)*.95;for(let a=0;a<n;a++){const c=a/n*Math.PI*2+t.range(-.14,.14),l=r*t.range(.8,1.15),h=r*t.range(.3,.45),u=new fs;u.moveTo(0,0),u.quadraticCurveTo(h,l*.4,0,l),u.quadraticCurveTo(-h,l*.4,0,0);const f=new pa(u,8),d=t.range(.1,.5),g=new jt().makeRotationX(Math.PI/2+d);f.applyMatrix4(g),f.applyMatrix4(new jt().makeRotationY(-c)),f.applyMatrix4(new jt().makeTranslation(0,s-.02,0)),e.push(f)}const o=new Te(.08,.11,.55,6);return o.translate(0,s+.22,0),e.push(o),Yo(e)}}function Yo(i){const t=new fe;if(!i.length)return t;let e=0,n=0;for(const h of i)e+=h.getAttribute("position").count,n+=h.index?h.index.count:h.getAttribute("position").count;const s=new Float32Array(e*3),r=new Float32Array(e*3),o=new Float32Array(e*2),a=e>65535?new Uint32Array(n):new Uint16Array(n);let c=0,l=0;for(const h of i){h.getAttribute("normal")||h.computeVertexNormals();const u=h.getAttribute("position"),f=h.getAttribute("normal"),d=h.getAttribute("uv");if(s.set(u.array,c*3),r.set(f.array,c*3),d&&o.set(d.array,c*2),h.index)for(let g=0;g<h.index.count;g++)a[l++]=h.index.getX(g)+c;else for(let g=0;g<u.count;g++)a[l++]=g+c;c+=u.count}return t.setAttribute("position",new Se(s,3)),t.setAttribute("normal",new Se(r,3)),t.setAttribute("uv",new Se(o,2)),t.setIndex(new Se(a,1)),t.computeBoundingSphere(),t}const ot={radius:7.5,coreRadius:7.2,wedgeAngle:Math.PI/4,cutSteps:24,sponge1:{y0:0,y1:1.55},filling:{y0:1.55,y1:3.75},sponge2:{y0:3.75,y1:5.3},topCoat:{y0:5.3,y1:5.7},skim:.4,boardRadius:8.7,boardThickness:.5},qr=["flatTipOut","faceOut","tilt","flatTipIn"],Sn=(()=>{const i=[];for(let t=0;t<8;t++)i.push({index:t,angle:t/8*Math.PI*2,radius:4.4});return i.push({index:8,angle:0,radius:0}),i})();function F0(i){const t=new R(Math.cos(i.angle),0,Math.sin(i.angle)),e=new R(-Math.sin(i.angle),0,Math.cos(i.angle)),n=new R(0,1,0);return{R:t,T:e,U:n}}function Pl(i,t,e){const{R:n,T:s,U:r}=F0(i),o=new jt,a=new R,c=new R,l=new R;switch(t){case"flatTipOut":a.copy(s).negate(),c.copy(n).negate(),l.copy(r);break;case"flatTipIn":a.copy(s),c.copy(n),l.copy(r);break;case"faceOut":a.copy(r),c.copy(s),l.copy(n);break;case"tilt":a.copy(s).negate(),c.copy(n).negate(),l.copy(r);break}o.makeBasis(a,c,l);const h=new Oe().setFromRotationMatrix(o);return t==="tilt"&&h.premultiply(new Oe().setFromAxisAngle(s,-.62)),h.premultiply(new Oe().setFromAxisAngle(new R(0,1,0),e)),h}function O0(i){const t=Pl(Sn[i.slot],i.pose,i.jitter),e=i.berry.halfLength,n=i.berry.p.radius*1.05,s=i.slab,r=new R;let o=1/0,a=-1/0;for(const c of[-n,n])for(const l of[-e,e])for(const h of[-s,s])r.set(c,l,h).applyQuaternion(t),o=Math.min(o,r.y),a=Math.max(a,r.y);return{min:o,max:a}}function Yr(i,t=0){const e=Sn[i.slot],n=Pl(e,i.pose,i.jitter),{min:s}=O0(i),r=ot.filling.y0+ot.skim*.55-s-t,o=new R(Math.cos(e.angle)*e.radius,r,Math.sin(e.angle)*e.radius);return new jt().compose(o,n,new R(1,1,1))}function Zo(i,t,e,n=1){const s=Cl(e,1);return s.length=e.range(3,3.9)*n,s.radius=e.range(.8,1)*n,{slot:i,pose:t,params:s,slab:e.range(.42,.55),jitter:e.range(-.13,.13),berry:new Rl(s)}}function B0(i=20260829){const t=new An(i),e=["flatTipOut","flatTipOut","tilt","faceOut","flatTipOut","flatTipOut","tilt","faceOut"],n=[];for(let s=0;s<8;s++)n.push(Zo(s,e[s],t,s%2===0?1.06:.92));return n.push(Zo(8,"flatTipOut",t,1)),{placements:n,fill:1}}function wi(i,t,e,n){const s=new fe;return s.setAttribute("position",new zt(i,3)),s.setAttribute("normal",new zt(t,3)),s.setAttribute("uv",new zt(e,2)),s.setAttribute("uv1",new zt(e,2)),s.setIndex(n),s.computeBoundingSphere(),s}function qe(i,t){const e=i.rInner??0,n=i.rOuter,{y0:s,y1:r,a0:o,a1:a}=i,c=i.uvScale??6,l=a-o>=Math.PI*2-1e-6,h=i.arcSeg??Math.max(6,Math.ceil((a-o)/(Math.PI*2)*96)),u=i.radialSeg??4,f={},d=m=>o+(a-o)*m/h;if(t.includes("outer")){const m=[],p=[],M=[],x=[];for(let w=0;w<2;w++){const C=w===0?s:r;for(let L=0;L<=h;L++){const b=d(L),S=Math.cos(b),P=Math.sin(b);m.push(S*n,C,P*n),p.push(S,0,P),M.push(b*n/c,C/c)}}const T=h+1;for(let w=0;w<h;w++){const C=w,L=w+1,b=w+T,S=b+1;x.push(C,b,L,L,b,S)}f.outer=wi(m,p,M,x)}if(t.includes("inner")&&e>0){const m=[],p=[],M=[],x=[];for(let T=0;T<2;T++){const w=T===0?s:r;for(let C=0;C<=h;C++){const L=d(C),b=Math.cos(L),S=Math.sin(L);m.push(b*e,w,S*e),p.push(-b,0,-S),M.push(L*e/c,w/c)}}const v=h+1;for(let T=0;T<h;T++){const w=T,C=T+1,L=T+v,b=L+1;x.push(w,C,L,C,b,L)}f.inner=wi(m,p,M,x)}const g=(m,p)=>{const M=[],x=[],v=[],T=[];for(let C=0;C<=u;C++){const L=e+(n-e)*C/u;for(let b=0;b<=h;b++){const S=d(b),P=Math.cos(S)*L,U=Math.sin(S)*L;M.push(P,m,U),x.push(0,p?1:-1,0),v.push(P/c+.5,U/c+.5)}}const w=h+1;for(let C=0;C<u;C++)for(let L=0;L<h;L++){const b=C*w+L,S=b+1,P=b+w,U=P+1;p?T.push(b,S,P,S,U,P):T.push(b,P,S,S,P,U)}return wi(M,x,v,T)};t.includes("top")&&(f.top=g(r,!0)),t.includes("bottom")&&(f.bottom=g(s,!1));const _=(m,p)=>{const M=Math.cos(m),x=Math.sin(m),v=-Math.sin(m),T=Math.cos(m),w=p?-1:1,C=[],L=[],b=[],S=[],P=i.capRelief,U=P?P.seg[0]:6,W=P?P.seg[1]:3;for(let D=0;D<=W;D++){const N=s+(r-s)*D/W;for(let B=0;B<=U;B++){const J=e+(n-e)*B/U;let at=0;if(P){const _t=Math.min(1,Math.min(B,U-B)/U*5)*Math.min(1,Math.min(D,W-D)/W*4);at=P.depth(J,N)*_t}C.push(M*J+v*w*-at,N,x*J+T*w*-at),L.push(v*w,0,T*w),b.push(J/c,N/c)}}const k=U+1;for(let D=0;D<W;D++)for(let N=0;N<U;N++){const B=D*k+N,J=B+1,at=B+k,_t=at+1;p?S.push(B,at,J,J,at,_t):S.push(B,J,at,J,_t,at)}const F=wi(C,L,b,S);return P&&F.computeVertexNormals(),F};return l||(t.includes("capStart")&&(f.capStart=_(o,!0)),t.includes("capEnd")&&(f.capEnd=_(a,!1))),f}function Nc(i,t,e,n,s){const r=Math.max(8,Math.ceil((s-n)/(Math.PI*2)*96)),o=5,a=[],c=[],l=[],h=[];for(let d=0;d<=o;d++){const _=d/o*Math.PI/2,m=i-e+Math.cos(_)*e,p=t+Math.sin(_)*e;for(let M=0;M<=r;M++){const x=n+(s-n)*M/r,v=Math.cos(x),T=Math.sin(x);a.push(v*m,p,T*m),c.push(v*Math.cos(_),Math.sin(_)-.4,T*Math.cos(_)),l.push(x*i/6,p/6)}}const u=r+1;for(let d=0;d<o;d++)for(let g=0;g<r;g++){const _=d*u+g,m=_+1,p=_+u,M=p+1;h.push(_,p,m,m,p,M)}const f=wi(a,c,l,h);return f.computeVertexNormals(),f}function z0(i,t,e=2.15){const r=[],o=[];for(let g=0;g<=150;g++){const _=g/150,m=_*Math.PI*2*e,p=i*(1-_*.82);r.push(new R(Math.cos(m)*p,t*_,Math.sin(m)*p)),o.push(i*(.34-_*.2)+.04)}const c=new ul(r).computeFrenetFrames(150,!1),l=[],h=[],u=[],f=[];for(let g=0;g<=150;g++){const _=r[g],m=c.normals[Math.min(g,149)],p=c.binormals[Math.min(g,149)];for(let M=0;M<=7;M++){const x=M/7*Math.PI*2,v=Math.cos(x),T=Math.sin(x),w=m.x*v+p.x*T,C=m.y*v+p.y*T,L=m.z*v+p.z*T;l.push(_.x+w*o[g],_.y+C*o[g],_.z+L*o[g]),h.push(w,C,L),u.push(g/150,M/7)}}const d=8;for(let g=0;g<150;g++)for(let _=0;_<7;_++){const m=g*d+_,p=m+1,M=m+d,x=M+1;f.push(m,p,M,p,x,M)}return wi(l,h,u,f)}class Fc{constructor(t){tt(this,"angle");tt(this,"dir");tt(this,"normal");this.angle=t,this.dir=new R(Math.cos(t),0,Math.sin(t)),this.normal=new R(-Math.sin(t),0,Math.cos(t))}toWorld(t,e,n){return n.set(this.dir.x*t,e,this.dir.z*t)}}function k0(i,t,e,n,s){if(s>0)return i.signedSlab(t,e,n,s);const r=i.halfLength,o=i.p.length,a=Math.max(-(e+r),e-r),c=Math.min(.998,Math.max(.002,(e+r)/o)),l=i.axisOffset(c),h=t-l.x,u=n-l.z,d=Math.hypot(h,u)-i.radiusAt(c,Math.atan2(u,h));return Math.max(a,d)}function H0(i,t,e,n,s){const r=[],o=(d,g)=>i[g*t+d],a=(d,g,_,m,p,M)=>{const x=_===M?.5:_/(_-M);return new ct(d+(m-d)*x,g+(p-g)*x)};for(let d=0;d<t-1;d++)for(let g=0;g<t-1;g++){const _=e+g*s,m=n+d*s,p=_+s,M=m+s,x=o(g,d),v=o(g+1,d),T=o(g+1,d+1),w=o(g,d+1);let C=0;if(x<0&&(C|=1),v<0&&(C|=2),T<0&&(C|=4),w<0&&(C|=8),C===0||C===15)continue;const L=()=>a(_,m,x,p,m,v),b=()=>a(p,m,v,p,M,T),S=()=>a(p,M,T,_,M,w),P=()=>a(_,M,w,_,m,x),U=(W,k)=>r.push({a:W,b:k});switch(C){case 1:case 14:U(P(),L());break;case 2:case 13:U(L(),b());break;case 3:case 12:U(P(),b());break;case 4:case 11:U(b(),S());break;case 5:U(P(),S()),U(L(),b());break;case 6:case 9:U(L(),S());break;case 7:case 8:U(P(),S());break;case 10:U(P(),L()),U(b(),S());break}}if(!r.length)return[];const c=d=>`${Math.round(d.x/(s*.06))},${Math.round(d.y/(s*.06))}`,l=new Map,h=d=>{const g=c(d);let _=l.get(g);return _||(_={p:d,next:[]},l.set(g,_)),g};for(const d of r){const g=h(d.a),_=h(d.b);l.get(g).next.push(_),l.get(_).next.push(g)}const u=new Set,f=[];for(const d of l.keys()){if(u.has(d))continue;const g=[];let _=d,m="";for(let M=0;M<4e3;M++){u.add(_);const x=l.get(_);g.push(x.p);const v=x.next.find(T=>T!==m&&!u.has(T));if(!v)break;m=_,_=v}if(g.length<6)continue;let p=0;for(let M=0;M<g.length;M++){const x=g[M],v=g[(M+1)%g.length];p+=x.x*v.y-v.x*x.y}f.push({pts:g,area:Math.abs(p)*.5})}return f.sort((d,g)=>g.area-d.area),f}function Oc(i,t,e=46){const n=new R().setFromMatrixPosition(i.matrix),s=i.berry.boundRadius*V0(i.matrix),r=t.normal.dot(n);if(Math.abs(r)>=s)return null;const o=Math.sqrt(Math.max(0,s*s-r*r))*1.06+.05,a=t.dir.dot(n),c=n.y,l=a-o,h=c-o,u=o*2/(e-1),f=new Float32Array(e*e),d=new R;for(let k=0;k<e;k++)for(let F=0;F<e;F++)t.toWorld(l+F*u,h+k*u,d),d.applyMatrix4(i.inverse),f[k*e+F]=k0(i.berry,d.x,d.y,d.z,i.slab);const g=H0(f,e,l,h,u);if(!g.length||g[0].area<.06)return null;const _=g[0];let m=0,p=0;for(const k of _.pts)m+=k.x,p+=k.y;m/=_.pts.length,p/=_.pts.length;const M=k=>(1-k*k)*.045,x=64,v=new Float32Array(x);for(const k of _.pts){let F=Math.atan2(k.y-p,k.x-m);F<0&&(F+=Math.PI*2);const D=Math.min(x-1,Math.floor(F/(Math.PI*2)*x)),N=Math.hypot(k.x-m,k.y-p);N>v[D]&&(v[D]=N)}for(let k=0;k<3;k++)for(let F=0;F<x;F++){if(v[F]>0)continue;const D=v[(F-1+x)%x],N=v[(F+1)%x];D>0&&N>0?v[F]=(D+N)*.5:D>0?v[F]=D:N>0&&(v[F]=N)}const T=new Float32Array(x);for(let k=0;k<x;k++)T[k]=v[(k-1+x)%x]*.25+v[k]*.5+v[(k+1)%x]*.25;const w=[],C=[],L=[],b=[],S=[],P=new R;t.toWorld(m,p,P),P.addScaledVector(t.normal,M(0)),w.push(P.x,P.y,P.z),C.push(0),L.push(0),b.push(i.seed);const U=[.32,.66,1];for(let k=0;k<U.length;k++)for(let F=0;F<x;F++){const D=F/x*Math.PI*2,N=T[F]*U[k];t.toWorld(m+Math.cos(D)*N,p+Math.sin(D)*N,P),P.addScaledVector(t.normal,M(U[k])),w.push(P.x,P.y,P.z),C.push(U[k]),L.push(D),b.push(i.seed)}for(let k=0;k<x;k++){const F=(k+1)%x;S.push(0,1+k,1+F);for(let D=0;D<U.length-1;D++){const N=1+D*x,B=N+x;S.push(N+k,B+k,N+F),S.push(N+F,B+k,B+F)}}const W=new fe;return W.setAttribute("position",new zt(w,3)),W.setAttribute("aRadial",new zt(C,1)),W.setAttribute("aAngle",new zt(L,1)),W.setAttribute("aSeed",new zt(b,1)),W.setIndex(S),W.computeVertexNormals(),W.computeBoundingSphere(),{geometry:W,area:_.area}}function V0(i){const t=i.elements,e=Math.hypot(t[0],t[1],t[2]),n=Math.hypot(t[4],t[5],t[6]),s=Math.hypot(t[8],t[9],t[10]);return Math.max(e,n,s)}const Le=Math.PI*2;class Zr{constructor(t,e){tt(this,"root",new te);tt(this,"body",new te);tt(this,"wedge",new te);tt(this,"remainder",new te);tt(this,"design");tt(this,"mats");tt(this,"coat");tt(this,"berryNodes",[]);tt(this,"topBerries",[]);tt(this,"noise",new qo(3));tt(this,"fillMesh",null);tt(this,"fillAmount",0);tt(this,"blobs",null);tt(this,"blobCount",0);tt(this,"topSpongeGroup",new te);tt(this,"coatGroup",new te);tt(this,"decorGroup",new te);tt(this,"scoreGroup",new te);tt(this,"clipMaterials",[]);tt(this,"planeSets",[]);tt(this,"isSplit",!1);tt(this,"cutAngle",0);this.mats=t,this.coat=t.makeCoat(),this.design=e,this.root.add(this.body,this.wedge,this.remainder),this.body.add(this.topSpongeGroup,this.coatGroup,this.decorGroup,this.scoreGroup),this.wedge.visible=!1,this.remainder.visible=!1}buildBoardAndBase(){const t=ot.sponge1,e=qe({rOuter:ot.coreRadius,y0:t.y0,y1:t.y1,a0:0,a1:Le,uvScale:4.5},["outer","top","bottom"]),n=new te;for(const o of["outer","top","bottom"]){const a=e[o];if(!a)continue;const c=new pt(a,this.mats.spongeBake);c.castShadow=o!=="bottom",c.receiveShadow=!0,n.add(c)}n.name="baseSponge",this.body.add(n);const s=this.skimGeometry(),r=new pt(s,this.mats.cream);r.receiveShadow=!0,r.name="skim",this.body.add(r)}skimGeometry(){const t=ot.coreRadius,e=22,n=72,s=[],r=[],o=[],a=ot.filling.y0;for(let h=0;h<=e;h++){const u=t*h/e;for(let f=0;f<=n;f++){const d=f/n*Le,g=Math.cos(d)*u,_=Math.sin(d)*u,m=this.noise.fbm(g*.09+3,_*.09+5,32,3)*.09;let p=0;for(const M of Sn){const x=g-Math.cos(M.angle)*M.radius,v=_-Math.sin(M.angle)*M.radius,T=Math.hypot(x,v)/2.05;if(T>=1.4)continue;const w=T<1?Math.pow(1-T*T,1.3)*.32:0,C=Math.max(0,1-Math.abs(T-1.12)/.26)*.085;p+=w-C}s.push(g,a+ot.skim+m-Math.min(.34,p),_),r.push(g/6+.5,_/6+.5)}}for(let h=0;h<e;h++)for(let u=0;u<n;u++){const f=h*(n+1)+u,d=f+1,g=f+n+1,_=g+1;o.push(f,d,g,d,_,g)}const c=new fe;c.setAttribute("position",new zt(s,3)),c.setAttribute("uv",new zt(r,2)),c.setIndex(o),c.computeVertexNormals();const l=qe({rOuter:ot.coreRadius,y0:a,y1:a+ot.skim,a0:0,a1:Le,uvScale:6},["outer"]).outer;return Bc(c,l)}nodeFor(t,e=0){return{placement:t,rim:t.berry.buildSlabRim(t.slab),faces:t.berry.buildSlabFaces(t.slab),matrix:Yr(t,e),sink:e}}addBerry(t,e=0){this.design.placements.includes(t)||this.design.placements.push(t);const n=this.nodeFor(t,e);this.berryNodes.push(n);const s=this.berryGroup(n,this.mats.berrySkin,this.mats.berryCut);return s.name=`berry-${t.slot}`,this.body.add(s),s}get topSponge(){return this.topSpongeGroup}setPose(t,e){const n=this.berryNodes.find(r=>r.placement.slot===t);if(!n)return;n.placement.pose=e,n.matrix=Yr(n.placement,n.sink);const s=this.body.getObjectByName(`berry-${t}`);s&&(s.matrix.copy(n.matrix),s.updateMatrixWorld(!0))}hasSlot(t){return this.berryNodes.some(e=>e.placement.slot===t)}get placedCount(){return this.berryNodes.length}berryGroups(){return this.body.children.filter(t=>t.name.startsWith("berry-"))}setBerrySink(t){for(const e of this.berryNodes){e.sink=t(e.placement),e.matrix=Yr(e.placement,e.sink);const n=this.body.getObjectByName(`berry-${e.placement.slot}`);n&&(n.matrix.copy(e.matrix),n.matrixAutoUpdate=!1,n.updateMatrixWorld(!0))}}berryGroup(t,e,n){const s=new te,r=new pt(t.rim,e),o=new pt(t.faces,n);return r.castShadow=!0,s.add(r,o),s.matrixAutoUpdate=!1,s.matrix.copy(t.matrix),s.updateMatrixWorld(!0),s}fillGeometry(){const t=ot.coreRadius,e=ot.filling.y0+ot.skim,n=ot.filling.y1-e,s=20,r=72,o=[],a=[],c=[];for(let f=0;f<=s;f++){const d=t*f/s;for(let g=0;g<=r;g++){const _=g/r*Le,m=Math.cos(_)*d,p=Math.sin(_)*d,M=this.noise.fbm(m*.19+11,p*.19+7,24,3)*.24;o.push(m,n-.06+M,p),a.push(m/6+.5,p/6+.5)}}for(let f=0;f<s;f++)for(let d=0;d<r;d++){const g=f*(r+1)+d,_=g+1,m=g+r+1,p=m+1;c.push(g,_,m,_,p,m)}const l=new fe;l.setAttribute("position",new zt(o,3)),l.setAttribute("uv",new zt(a,2)),l.setIndex(c),l.computeVertexNormals();const h=qe({rOuter:t,y0:0,y1:n,a0:0,a1:Le,uvScale:6},["outer"]).outer,u=Bc(l,h);return u.translate(0,e,0),u}ensureFill(){if(this.fillMesh)return;const t=this.fillGeometry(),e=new pt(t,this.mats.cream);e.castShadow=!0,e.receiveShadow=!0,e.name="fill",e.position.y=ot.filling.y0+ot.skim,t.translate(0,-1.9500000000000002,0),e.scale.y=.02,this.body.add(e),this.fillMesh=e}setFill(t){this.fillAmount=t,this.ensureFill(),this.fillMesh&&(this.fillMesh.scale.y=Math.max(.02,t))}get fill(){return this.fillAmount}get fillSurfaceY(){const t=ot.filling.y0+ot.skim;return t+(ot.filling.y1-t)*Math.max(.02,this.fillAmount)}pipeBlob(t,e,n){if(!this.blobs){const o=new wn(.6,12,8);o.scale(1,.58,1);const a=new ir(o,this.mats.cream,90);a.count=0,a.castShadow=!0,a.name="blobs",this.body.add(a),this.blobs=a}if(this.blobCount>=90)return;const s=new jt,r=n.range(.75,1.25);s.compose(new R(t,this.fillSurfaceY-.12+n.range(0,.14),e),new Oe().setFromAxisAngle(new R(0,1,0),n.range(0,Le)),new R(r,r*n.range(.8,1.2),r)),this.blobs.setMatrixAt(this.blobCount++,s),this.blobs.count=this.blobCount,this.blobs.instanceMatrix.needsUpdate=!0}addTopSponge(){const t=ot.sponge2,e=qe({rOuter:ot.coreRadius,y0:0,y1:t.y1-t.y0,a0:0,a1:Le,uvScale:4.5},["outer","top","bottom"]);for(const n of["outer","top","bottom"]){const s=e[n];if(!s)continue;const r=new pt(s,this.mats.spongeBake);r.castShadow=!0,r.receiveShadow=!0,this.topSpongeGroup.add(r)}return this.topSpongeGroup.position.y=t.y0,this.topSpongeGroup}buildCoat(){const t=ot.topCoat.y1,e=-.02,n=new te,s=new te,r=qe({rInner:ot.coreRadius-.02,rOuter:ot.coreRadius+.1,y0:e,y1:ot.topCoat.y0+.1,a0:0,a1:Le,uvScale:6},["outer"]).outer;n.add(new pt(r,this.coat.underWall));const o=qe({rOuter:ot.coreRadius+.1,y0:0,y1:ot.topCoat.y0+.08,a0:0,a1:Le,uvScale:6},["top"]).top;n.add(new pt(o,this.coat.underTop));const a=qe({rOuter:ot.radius,y0:e,y1:t,a0:0,a1:Le,uvScale:6},["outer"]).outer,c=new pt(a,this.coat.wall);c.castShadow=!0,s.add(c);const l=qe({rOuter:ot.radius,y0:0,y1:t,a0:0,a1:Le,uvScale:6},["top"]).top,h=new pt(l,this.coat.top);h.castShadow=!0,s.add(h);const u=Nc(ot.radius,e,.34,0,Le);s.add(new pt(u,this.coat.top)),this.coatGroup.add(n,s)}setCoat(t,e){this.coat.u.underWall.uCoat.value=t,this.coat.u.underTop.uCoat.value=t,this.coat.u.wall.uCoat.value=e,this.coat.u.top.uCoat.value=e}addDecoration(t){const e=new An(t),n=ot.topCoat.y1,s=5;for(let r=0;r<s;r++){const o=r/s*Le+e.range(-.16,.16),a=5.05+e.range(-.22,.22),c=Cl(e,1);c.length=e.range(3.1,3.8),c.radius=e.range(.98,1.2);const l=new Rl(c),h=l.buildGeometry(!1,26,20),u=l.buildAcheneGeometry(30,r),f=l.buildHullGeometry(),d=e.range(.72,1.05),g=new Oe().setFromAxisAngle(new R(-Math.sin(o),0,Math.cos(o)),d);g.premultiply(new Oe().setFromAxisAngle(new R(0,1,0),e.range(0,Le)));const _=new R(Math.cos(o)*a,n+l.halfLength*Math.cos(d)*.86,Math.sin(o)*a),m=new jt().compose(_,g,new R(1,1,1));this.topBerries.push({berry:l,body:h,achenes:u,hull:f,matrix:m,seed:c.seed});const p=new te;p.matrixAutoUpdate=!1,p.matrix.copy(m);const M=new pt(h,this.mats.berrySkin);M.castShadow=!0;const x=new pt(u,this.mats.berrySkin),v=new pt(f,this.mats.berryHull);p.add(M,x,v),p.updateMatrixWorld(!0),this.decorGroup.add(p);const T=o+.42,w=new pt(z0(.9,.95),this.mats.cream);w.position.set(Math.cos(T)*(a-.4),n-.04,Math.sin(T)*(a-.4)),w.castShadow=!0,this.decorGroup.add(w)}}setScore(t,e,n="a"){const s=`score-${n}`;let r=this.scoreGroup.getObjectByName(s);const o=n==="guide";if(!r){const l=new si(1,1);l.rotateX(-Math.PI/2),l.translate(.5,0,0);const h=new xe({color:o?13351332:10324087,roughness:.55,transparent:!0,opacity:o?.62:.8,depthWrite:!1});r=new pt(l,h),r.name=s,r.renderOrder=3,this.scoreGroup.add(r)}r.visible=e>.001;const a=ot.radius*Math.min(1,e),c=ot.radius-a;r.position.set(Math.cos(t)*c,ot.topCoat.y1+.012,Math.sin(t)*c),r.rotation.y=-t,r.scale.set(a,1,o?.1:.13)}clearScore(){for(const t of[...this.scoreGroup.children])this.scoreGroup.remove(t),t.geometry?.dispose()}instances(){const t=[];for(const e of this.berryNodes)t.push({berry:e.placement.berry,matrix:e.matrix,inverse:new jt().copy(e.matrix).invert(),slab:e.placement.slab,seed:e.placement.params.seed});for(const e of this.topBerries)t.push({berry:e.berry,matrix:e.matrix,inverse:new jt().copy(e.matrix).invert(),slab:0,seed:e.seed});return t}split(t){this.cutAngle=t;const e=ot.wedgeAngle,n=t,s=t+e,r=new Fc(n),o=new Fc(s);this.body.visible=!1,this.disposeGroup(this.wedge),this.disposeGroup(this.remainder);for(const F of this.clipMaterials)F.dispose();this.clipMaterials=[],this.planeSets=[];const a=[new Ze(r.normal.clone(),0),new Ze(o.normal.clone().negate(),0)],c=[new Ze(r.normal.clone().negate(),0)],l=[new Ze(r.normal.clone(),0),new Ze(o.normal.clone(),0)],h=(F,D)=>{const N=F.map(B=>B.clone());return this.planeSets.push({planes:N,local:F,owner:D}),N},u=h(a,this.wedge),f=h(c,this.remainder),d=h(l,this.remainder),g=(F,D)=>{const N=F.clone();return N.clippingPlanes=D,N.clipShadows=!0,this.clipMaterials.push(N),N},_=(F,D)=>{const N=Al();return F&&(N.clippingPlanes=F,N.clipShadows=!0),D&&(N.side=D),this.clipMaterials.push(N),N};this.buildSectorBody(this.wedge,n,s),this.buildSectorBody(this.remainder,s,n+Le);const m=g(this.mats.berrySkin,u),p=_(u),M=g(this.mats.berryHull,u),x=g(this.mats.berrySkin,f),v=_(f),T=g(this.mats.berryHull,f),w=g(this.mats.berrySkin,d),C=_(d),L=g(this.mats.berryHull,d),b=g(this.mats.cream,u),S=g(this.mats.cream,f),P=g(this.mats.cream,d);for(const F of this.berryNodes){const D=new R().setFromMatrixPosition(F.matrix),N=F.placement.berry.boundRadius,B=r.normal.dot(D),J=o.normal.dot(D);B>-N&&J<N&&this.wedge.add(this.berryGroup(F,m,p)),B<N&&this.remainder.add(this.berryGroup(F,x,v)),B>-N&&J>-N&&this.remainder.add(this.berryGroup(F,w,C))}for(const F of this.topBerries){const D=new R().setFromMatrixPosition(F.matrix),N=F.berry.boundRadius,B=r.normal.dot(D),J=o.normal.dot(D),at=(_t,Nt)=>{const Wt=new te;return Wt.matrixAutoUpdate=!1,Wt.matrix.copy(F.matrix),Wt.add(new pt(F.body,_t),new pt(F.achenes,_t),new pt(F.hull,Nt)),Wt.updateMatrixWorld(!0),Wt};B>-N&&J<N&&this.wedge.add(at(m,M)),B<N&&this.remainder.add(at(x,T)),B>-N&&J>-N&&this.remainder.add(at(w,L))}for(const F of this.decorGroup.children){const D=F;if(!(D.geometry instanceof fe)||D.type!=="Mesh")continue;D.updateMatrix(),D.geometry.computeBoundingSphere();const N=D.geometry.boundingSphere,B=N?N.center.clone().applyMatrix4(D.matrix):D.position,J=N?.radius??1.1,at=r.normal.dot(B),_t=o.normal.dot(B),Nt=Wt=>{const et=new pt(D.geometry,Wt);return et.matrixAutoUpdate=!1,et.matrix.copy(D.matrix),et.castShadow=!0,et};at>-J&&_t<J&&this.wedge.add(Nt(b)),at<J&&this.remainder.add(Nt(S)),at>-J&&_t>-J&&this.remainder.add(Nt(P))}const U=_(),W=_(void 0,Ie),k=.008;for(const F of this.instances()){const D=Oc(F,r);if(D){const B=new pt(D.geometry,W);B.position.copy(r.normal).multiplyScalar(-k),B.renderOrder=2,this.wedge.add(B);const J=new pt(D.geometry,U);J.position.copy(r.normal).multiplyScalar(k),J.renderOrder=2,this.remainder.add(J)}const N=Oc(F,o);if(N){const B=new pt(N.geometry,U);B.position.copy(o.normal).multiplyScalar(k),B.renderOrder=2,this.wedge.add(B);const J=new pt(N.geometry,W);J.position.copy(o.normal).multiplyScalar(-k),J.renderOrder=2,this.remainder.add(J)}}this.wedge.visible=!0,this.remainder.visible=!0,this.isSplit=!0,this.updateClipping()}poreDepth(t,e){const n=t*.32+this.noise.fbm(t*.5,e*.5,16,2)*.5,s=e*.32+this.noise.fbm(t*.5+4,e*.5+9,16,2)*.5,r=this.noise.cell(n*.22,s*.22,14),o=.14+.3*(Math.sin(r.id*12.9898)*43758.5453%1+1)*.5,a=Math.max(0,1-r.f1/o);return Math.pow(a,.7)*.07}buildSectorBody(t,e,n){const s=Math.max(6,Math.ceil((n-e)/Le*96)),r=(h,u,f=!0)=>{if(!h)return;const d=new pt(h,u);d.castShadow=f,d.receiveShadow=!0,t.add(d)};for(const h of[ot.sponge1,ot.sponge2]){const u=qe({rOuter:ot.coreRadius,y0:h.y0,y1:h.y1,a0:e,a1:n,arcSeg:s,uvScale:1.7,capRelief:{seg:[30,14],depth:(d,g)=>this.poreDepth(d,g)}},["capStart","capEnd"]);r(u.capStart,this.mats.spongeCut),r(u.capEnd,this.mats.spongeCut);const f=qe({rOuter:ot.coreRadius,y0:h.y0,y1:h.y1,a0:e,a1:n,arcSeg:s,uvScale:4.5},h===ot.sponge1?["bottom"]:[]);r(f.bottom,this.mats.spongeBake,!1)}const o=qe({rOuter:ot.coreRadius,y0:ot.filling.y0,y1:ot.filling.y1,a0:e,a1:n,arcSeg:s,uvScale:3.4},["capStart","capEnd"]);r(o.capStart,this.mats.creamCut),r(o.capEnd,this.mats.creamCut);const a=qe({rInner:ot.coreRadius,rOuter:ot.radius,y0:-.02,y1:ot.topCoat.y0,a0:e,a1:n,arcSeg:s,uvScale:6},["outer","capStart","capEnd"]);r(a.outer,this.mats.creamOuter),r(a.capStart,this.mats.creamCut),r(a.capEnd,this.mats.creamCut);const c=qe({rOuter:ot.radius,y0:ot.topCoat.y0,y1:ot.topCoat.y1,a0:e,a1:n,arcSeg:s,uvScale:6},["top","outer","capStart","capEnd"]);r(c.top,this.mats.creamTop),r(c.outer,this.mats.creamOuter),r(c.capStart,this.mats.creamCut),r(c.capEnd,this.mats.creamCut);const l=Nc(ot.radius,-.02,.34,e,n);r(l,this.mats.creamOuter)}updateClipping(){for(const t of this.planeSets){t.owner.updateWorldMatrix(!0,!1);for(let e=0;e<t.planes.length;e++)t.planes[e].copy(t.local[e]).applyMatrix4(t.owner.matrixWorld)}}disposeGroup(t){for(const e of[...t.children])t.remove(e)}dispose(){this.root.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose()});for(const t of this.clipMaterials)t.dispose();this.clipMaterials=[];for(const t of[this.coat.wall,this.coat.top,this.coat.underWall,this.coat.underTop])t.dispose();this.root.removeFromParent()}}function Bc(i,t){const e=[i,t];let n=0,s=0;for(const f of e)f.getAttribute("normal")||f.computeVertexNormals(),n+=f.getAttribute("position").count,s+=f.index.count;const r=new Float32Array(n*3),o=new Float32Array(n*3),a=new Float32Array(n*2),c=n>65535?new Uint32Array(s):new Uint16Array(s);let l=0,h=0;for(const f of e){const d=f.getAttribute("position");r.set(d.array,l*3),o.set(f.getAttribute("normal").array,l*3);const g=f.getAttribute("uv");g&&a.set(g.array,l*2);for(let _=0;_<f.index.count;_++)c[h++]=f.index.getX(_)+l;l+=d.count}const u=new fe;return u.setAttribute("position",new Se(r,3)),u.setAttribute("normal",new Se(o,3)),u.setAttribute("uv",new Se(a,2)),u.setIndex(new Se(c,1)),u.computeBoundingSphere(),u}const ge={cut:new R(0,0,0),build:new R(34,0,0)};function Kr(i,t,e,n,s=3){const r=new fs,o=-i/2+n,a=-e/2+n,c=i-2*n,l=e-2*n;r.moveTo(o,a-n),r.lineTo(o+c,a-n),r.absarc(o+c,a,n,-Math.PI/2,0,!1),r.lineTo(o+c+n,a+l),r.absarc(o+c,a+l,n,0,Math.PI/2,!1),r.lineTo(o,a+l+n),r.absarc(o,a+l,n,Math.PI/2,Math.PI,!1),r.lineTo(o-n,a),r.absarc(o,a,n,Math.PI,Math.PI*1.5,!1);const h=new sr(r,{depth:t,bevelEnabled:!0,bevelSize:n*.3,bevelThickness:n*.3,bevelSegments:s,curveSegments:8});h.rotateX(-Math.PI/2),h.computeBoundingBox();const u=h.boundingBox;return h.translate(0,-u.min.y,0),h.scale(1,t/(u.max.y-u.min.y),1),h.computeBoundingBox(),h.computeBoundingSphere(),h}function G0(i){const t=new te,e=new An(88),n=new pt(Kr(150,4,78,1.2),i.bench);n.position.set(17,-4,0),n.receiveShadow=!0,t.add(n);const s=new pt(new ye(150,12,2),i.bench);s.position.set(17,-10,38),t.add(s);const r=new pt(new si(320,170),i.wall);r.position.set(10,55,-78),r.receiveShadow=!0,t.add(r);const o=new pt(new si(320,200),new xe({color:6051150,roughness:.9}));o.rotation.x=-Math.PI/2,o.position.set(10,-92,-10),t.add(o);const a=new xe({color:10133668,metalness:.9,roughness:.42}),c=new te;for(let D=0;D<4;D++){const N=new pt(new ye(64,1.2,22),a);N.position.set(0,D*17,0),c.add(N)}for(const D of[-31,31])for(const N of[-10,10]){const B=new pt(new Te(.9,.9,56,8),a);B.position.set(D,27,N),c.add(B)}const l=new xe({color:12172994,metalness:.85,roughness:.35});for(let D=0;D<5;D++){const N=new pt(new wn(4.6+D*.35,14,8,0,Math.PI*2,Math.PI*.52,Math.PI*.48),l);N.position.set(-20+e.range(-1.5,1.5),18.5+D*1.5,e.range(-3,3)),c.add(N)}for(let D=0;D<3;D++){const N=new pt(new ye(24,.8,16),a);N.position.set(14+e.range(-1,1),35.6+D*1.1,e.range(-1,1)),N.rotation.y=e.range(-.05,.05),c.add(N)}c.position.set(-42,-2,-58),c.rotation.y=.16,t.add(c);const h=new pt(new ye(46,26,18),new bi({color:14674154,roughness:.1,metalness:0,transparent:!0,opacity:.16}));h.position.set(84,14,-74),t.add(h);const u=new pt(new ye(48,24,20),a);u.position.set(84,-11,-74),t.add(u);const f=new te,d=new xe({color:14275527,roughness:.94});for(let D=0;D<3;D++){const N=new pt(Kr(15-D*1.1,.55,9.5-D*.7,.35),d);N.position.set(e.range(-.3,.3),D*.5,e.range(-.25,.25)),N.rotation.y=e.range(-.04,.04),N.castShadow=!0,f.add(N)}f.position.set(17.5,0,22),f.rotation.y=-.22,t.add(f);const g=new pt(new wn(7.4,22,14,0,Math.PI*2,Math.PI*.5,Math.PI*.5),l.clone());g.position.set(-24,7.2,-20),g.castShadow=!0,g.receiveShadow=!0,t.add(g);const _=new pt(new ls(7.4,.28,6,26),l);_.rotation.x=Math.PI/2,_.position.copy(g.position),t.add(_);const m=new pt(new wn(7.46,18,10,.5,1.15,Math.PI*.56,Math.PI*.3),new xe({color:11120305,roughness:.72,metalness:.55,transparent:!0,opacity:.5}));m.position.copy(g.position),t.add(m);const p=new rr(.16,0),M=new ir(p,i.crumb,26),x=new jt;for(let D=0;D<26;D++){const N=e.range(-.5,2.2),B=e.range(11,21),J=e.range(.5,1.3);x.compose(new R(Math.cos(N)*B+3,.12,Math.sin(N)*B*.6+6),new Oe().setFromEuler(new Je(e.range(0,3),e.range(0,3),e.range(0,3))),new R(J,J*.6,J)),M.setMatrixAt(D,x)}M.castShadow=!0,t.add(M);const v=new xe({color:11975614,metalness:.92,roughness:.31}),T=()=>{const D=new te,N=new pt(new Te(9.4,10.6,1.6,48),v);N.position.y=.8,N.castShadow=!0,N.receiveShadow=!0,D.add(N);const B=new pt(new Te(3.2,3.6,2.2,28),v);B.position.y=2.5,D.add(B);const J=new te,at=new pt(new Te(11.2,11,1.1,64),v);at.position.y=4.1,at.castShadow=!0,at.receiveShadow=!0,J.add(at);const _t=new pt(new ls(10.4,.16,6,56),v);_t.rotation.x=Math.PI/2,_t.position.y=3.6,J.add(_t);const Nt=new pt(new Te(ot.boardRadius,ot.boardRadius,ot.boardThickness,64),i.board);return Nt.position.y=4.65+ot.boardThickness/2,Nt.castShadow=!0,Nt.receiveShadow=!0,J.add(Nt),D.add(J),{group:D,plate:J,cakeY:4.65+ot.boardThickness}},w=T();w.group.position.copy(ge.cut),t.add(w.group);const C=T();C.group.position.copy(ge.build),t.add(C.group);const L=new te,b=new xe({color:12830923,metalness:.88,roughness:.36}),S=new pt(Kr(22,.5,13,1.4),b);S.receiveShadow=!0,L.add(S);for(const[D,N,B,J]of[[0,-6.4,22,.5],[0,6.4,22,.5],[-10.9,0,.5,13],[10.9,0,.5,13]]){const at=new pt(new ye(B,1.5,J),b);at.position.set(D,.75,N),at.castShadow=!0,L.add(at)}L.position.set(ge.build.x-.5,.25,15.5),L.rotation.y=-.08,t.add(L);const P=new zr(16774114,2.5);P.position.set(-26,52,34),P.castShadow=!0,P.shadow.mapSize.set(2048,2048),P.shadow.camera.near=10,P.shadow.camera.far=160;const U=46;P.shadow.camera.left=-U,P.shadow.camera.right=U,P.shadow.camera.top=U,P.shadow.camera.bottom=-U,P.shadow.bias=-6e-4,P.shadow.normalBias=.05,P.target.position.set(17,4,0),t.add(P,P.target);const W=new zr(14674431,.55);W.position.set(40,24,46),t.add(W);const k=new zr(16771536,.4);k.position.set(18,30,-50),t.add(k);const F=new Hu(15922943,7299414,.55);return t.add(F),{root:t,cutTable:w,buildTable:C,tray:L}}function Ll(i,t,e){const r=[],o=[],a=[],c=d=>{const g=Math.max(0,(d-.6)/.4);return t*(1-g*g*.93)*(1-Math.max(0,(.06-d)/.06)*.12)},l=d=>e*(.08+.92*Math.min(1,Math.pow(d,.55)));for(let d=0;d<=44;d++){const g=d/44,_=c(g);for(let m=0;m<=30;m++){const p=m/30;let M,x;if(p<.45)M=p/.45,x=l(M)/2;else if(p<.55){const v=(p-.45)/.1*Math.PI;M=1+.05*Math.sin(v),x=l(1)/2*Math.cos(v)}else M=(1-p)/.45,x=-l(M)/2;r.push(g*i,M*_,x),o.push(g*3.2,p)}}const h=31;for(let d=0;d<44;d++)for(let g=0;g<30;g++){const _=d*h+g,m=_+1,p=_+h,M=p+1;a.push(_,p,m,m,p,M)}const u=r.length/3;r.push(0,c(0)*.5,0),o.push(0,.5);for(let d=0;d<=30;d++){const g=d*3;r.push(r[g],r[g+1],r[g+2]),o.push(0,d/30)}for(let d=0;d<30;d++)a.push(u,u+1+d+1,u+1+d);const f=new fe;return f.setAttribute("position",new zt(r,3)),f.setAttribute("uv",new zt(o,2)),f.setIndex(a),f.computeVertexNormals(),f}function Ma(i,t,e){const n=new te,s=new pt(new Te(e*.86,e,t,16,1,!0),i.metalHandle);s.rotation.z=Math.PI/2,s.position.x=-t/2,s.castShadow=!0,n.add(s);const r=new pt(new wn(e*.86,14,10),i.metalHandle);r.position.x=-t,n.add(r);const o=new pt(new Te(e*1.06,e*.94,.7,16),i.metal);o.rotation.z=Math.PI/2,o.position.x=-.35,n.add(o);for(let a=0;a<3;a++){const c=new pt(new Te(.14,.14,e*1.75,10),i.metal);c.rotation.x=Math.PI/2,c.position.set(-1.6-a*2.5,0,0),n.add(c)}return n}function W0(i){const t=new te,e=new pt(Ll(22,3.4,.18),i.metal);return e.castShadow=!0,t.add(e),t.add(Ma(i,10.5,1.05)),t}function X0(i){const t=new te,e=new pt(Ll(9,2.2,.1),i.metal);e.castShadow=!0,t.add(e);const n=new pt(new wn(1.1,14,8),i.metal);return n.scale.set(.3,1,.09),n.position.set(9,1.1,0),t.add(n),t.add(Ma(i,8,.9)),t}function q0(i){const t=new te,e=new fs;e.moveTo(0,-1.5),e.lineTo(11.4,-3.35),e.quadraticCurveTo(13.4,0,11.4,3.35),e.lineTo(0,1.5),e.quadraticCurveTo(-.7,0,0,-1.5);const n=new sr(e,{depth:.13,bevelEnabled:!0,bevelSize:.07,bevelThickness:.05,bevelSegments:2,curveSegments:10});n.rotateX(-Math.PI/2);const s=new pt(n,i.metal);s.castShadow=!0,s.receiveShadow=!0,t.add(s);const r=new pt(new ye(3.6,.22,1.5),i.metal);r.position.set(-1.7,.85,0),r.rotation.z=.5,t.add(r);const o=Ma(i,10,1);return o.position.set(-3.1,1.62,0),t.add(o),t}function Y0(i){const t=new te,e=new xe({color:15855335,roughness:.82,side:sn}),n=[];for(let c=0;c<=16;c++){const l=c/16,h=.75+Math.pow(l,1.25)*4.4;n.push(new ct(h,l*13))}n.push(new ct(3.6,15.4)),n.push(new ct(1.1,16.4));const s=new pt(new fa(n,26),e);s.castShadow=!0,t.add(s);const r=new pt(new Te(.72,.46,2.1,18,1,!0),i.metal);r.position.y=-.7,t.add(r);const o=[];for(let c=0;c<6;c++){const l=c/6*Math.PI*2,h=new ye(.17,.5,.3);h.translate(Math.cos(l)*.4,-1.65,Math.sin(l)*.4),o.push(h)}const a=new pt(Yo(o),i.metal);return t.add(a),{group:t,nozzleTip:new R(0,-1.9,0)}}function Z0(i){const t=new te,e=new te,n=i.metal,s=new pt(new Te(.75,1,18.5,18),n);s.position.set(0,9.25,0),s.castShadow=!0,e.add(s);const r=new pt(new Te(2.9,3.4,1,22),n);r.position.y=.5,r.castShadow=!0,r.receiveShadow=!0,e.add(r);const o=new pt(new ye(30,.8,1.3),n);o.position.set(-14.2,18.2,0),o.castShadow=!0,e.add(o);for(const u of[.62,-.62]){const f=new pt(new Te(.22,.22,30,10),n);f.rotation.z=Math.PI/2,f.position.set(-14.2,17.5,u),e.add(f)}const a=new te,c=new pt(new ye(2.4,2,2.6),n);c.castShadow=!0,a.add(c);const l=new pt(new Te(.26,.26,3,12),n);l.rotation.x=Math.PI/2,a.add(l);const h=new pt(new ye(.62,1,1),n);return h.geometry.translate(0,-.5,0),h.position.y=-1,h.castShadow=!0,a.add(h),a.position.set(-12,17.5,0),e.add(a),t.add(e),{group:t,boom:e,carriage:a,stem:h}}const $i=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,Mn=i=>1-Math.pow(1-i,3),ji=(i,t,e)=>i<t?t:i>e?e:i,zc=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));class K0{constructor(){tt(this,"items",[])}add(t,e,n=0,s){return this.items.push({t:0,dur:t,delay:n,fn:e,done:s}),this}wait(t,e){return this.add(t,()=>{},0,e)}get busy(){return this.items.length>0}clear(){this.items.length=0}update(t){for(let e=this.items.length-1;e>=0;e--){const n=this.items[e];n.t+=t;const s=n.t-n.delay;if(s<0)continue;const r=n.dur<=0?1:ji(s/n.dur,0,1);n.fn(r),r>=1&&(this.items.splice(e,1),n.done?.())}}}const ie=(i,t,e)=>new R(i,t,e),Jr={whole:{target:ie(0,8.4,0),dir:ie(-.34,.6,1),fit:8.6},cutA:{target:ie(0,8.9,0),dir:ie(.24,.4,1),fit:10.6},turn:{target:ie(0,7.6,0),dir:ie(-.08,.46,1),fit:11.4},cutB:{target:ie(0,8.9,0),dir:ie(-.5,.38,.95),fit:10.6},serve:{target:ie(3.6,7.6,1),dir:ie(.08,.3,1),fit:11.8},study:{target:ie(5.4,7.2,2.2),dir:ie(.42,.4,1),fit:9.6,portraitBias:.7},buildTop:{target:ie(34,4.6,4.5),dir:ie(.02,.95,.42),fit:12},place:{target:ie(34,3.6,6.5),dir:ie(-.1,.78,1),fit:12.6},fill:{target:ie(34,5.6,.8),dir:ie(.14,.66,1),fit:10.6},lid:{target:ie(34,6.6,2.4),dir:ie(-.08,.6,1),fit:12.8},coat:{target:ie(34,7.8,0),dir:ie(-.3,.44,1),fit:11},aim:{target:ie(34,9.4,0),dir:ie(0,.95,.62),fit:10.4},cutNew:{target:ie(34,8.9,0),dir:ie(.24,.4,1),fit:10.6},serveNew:{target:ie(37.6,7.6,1),dir:ie(.08,.3,1),fit:11.8},revealNew:{target:ie(39.4,7.2,2.2),dir:ie(.42,.4,1),fit:9.6,portraitBias:.7},gallery:{target:ie(34,4.8,-22.5),dir:ie(.02,.28,1),fit:16}};class J0{constructor(t){tt(this,"camera");tt(this,"from",{pos:new R,tgt:new R});tt(this,"to",{pos:new R,tgt:new R});tt(this,"t",1);tt(this,"dur",1);tt(this,"cur",Jr.whole);tt(this,"pos",new R);tt(this,"tgt",new R);tt(this,"shake",0);tt(this,"portrait",!1);this.camera=new Ye(38,t,.5,500),this.apply(Jr.whole,!0)}setAspect(t){this.camera.aspect=t,this.portrait=t<1,this.camera.updateProjectionMatrix(),this.solve(this.cur,this.to.pos,this.to.tgt),this.t>=1&&(this.pos.copy(this.to.pos),this.tgt.copy(this.to.tgt))}solve(t,e,n){const s=this.camera.fov*Math.PI/180,r=2*Math.atan(Math.tan(s/2)*this.camera.aspect),o=Math.min(s,r);let a=t.fit/Math.tan(o/2);this.portrait&&t.portraitBias&&(a*=1-t.portraitBias*.12);const c=t.dir.clone().normalize();n.copy(t.target),e.copy(t.target).addScaledVector(c,a)}apply(t,e=!1,n=1.5){this.cur=t,this.from.pos.copy(this.pos),this.from.tgt.copy(this.tgt),this.solve(t,this.to.pos,this.to.tgt),e?(this.pos.copy(this.to.pos),this.tgt.copy(this.to.tgt),this.t=1):(this.t=0,this.dur=n)}goto(t,e=1.5){this.apply(Jr[t],!1,e)}nudge(t){this.shake=Math.max(this.shake,t)}get moving(){return this.t<1}update(t){if(this.t<1){this.t=Math.min(1,this.t+t/this.dur);const n=$i(this.t);this.pos.lerpVectors(this.from.pos,this.to.pos,n),this.tgt.lerpVectors(this.from.tgt,this.to.tgt,n)}this.shake*=Math.exp(-t*7);const e=this.shake;this.camera.position.set(this.pos.x+Math.sin(performance.now()*.031)*e,this.pos.y+Math.sin(performance.now()*.043)*e,this.pos.z),this.camera.lookAt(this.tgt)}}class $0{constructor(){tt(this,"hint",document.getElementById("hint"));tt(this,"cue",document.getElementById("cue"));tt(this,"text","");tt(this,"kind","none");tt(this,"anchor",null);tt(this,"target",null);tt(this,"screenDelta",null);tt(this,"circleEdges",null);tt(this,"angle",0)}setHint(t){if(this.hint.classList.remove("remind"),t!==this.text){if(this.text=t,!t){this.hint.classList.remove("on");return}this.hint.textContent=t,this.hint.classList.add("on")}}remind(t){this.setHint(t),this.hint.classList.remove("remind"),this.hint.offsetWidth,this.hint.classList.add("remind")}setCue(t,e,n=0){this.anchor=e,this.target=null,this.screenDelta=null,this.circleEdges=null,this.angle=n,this.applyCue(t)}setWorldGesture(t,e,n){this.anchor=e,this.target=n,this.screenDelta=null,this.circleEdges=null,this.angle=0,this.applyCue(t)}setScreenGesture(t,e,n){this.anchor=e,this.target=null,this.screenDelta=n,this.circleEdges=null,this.angle=0,this.applyCue(t)}setWorldCircle(t,e,n){this.anchor=t,this.target=null,this.screenDelta=null,this.circleEdges=[e,n],this.angle=0,this.applyCue("circle")}applyCue(t){t!==this.kind&&(this.kind=t,this.cue.innerHTML=t==="none"?"":j0(t)),this.cue.classList.toggle("on",t!=="none"&&!!this.anchor),this.cue.classList.toggle("path",t!=="none"&&(!!this.target||!!this.screenDelta))}hideCue(){this.setCue("none",null)}update(t,e,n){if(!this.anchor||this.kind==="none")return;const s=this.anchor.clone().project(t),r=(s.x+1)/2*e,o=(-s.y+1)/2*n;let a=0,c=0;if(this.target){const l=this.target.clone().project(t);a=(l.x-s.x)/2*e,c=-(l.y-s.y)/2*n}else this.screenDelta&&(a=this.screenDelta.x/2*e,c=-this.screenDelta.y/2*n);if(this.circleEdges){const[l,h]=this.circleEdges.map(g=>g.clone().project(t)),u=Math.hypot((l.x-s.x)/2*e,-(l.y-s.y)/2*n),f=Math.hypot((h.x-s.x)/2*e,-(h.y-s.y)/2*n),d=.6;this.cue.style.setProperty("--cue-width",`${Math.max(84,u*2/d)}px`),this.cue.style.setProperty("--cue-height",`${Math.max(64,f*2/d)}px`)}else this.cue.style.removeProperty("--cue-width"),this.cue.style.removeProperty("--cue-height");if(this.target||this.screenDelta){const l=Math.max(42,Math.hypot(a,c));this.cue.style.setProperty("--cue-length",`${l}px`),this.cue.style.transform=`translate(${r}px, ${o}px) rotate(${Math.atan2(c,a)*180/Math.PI}deg)`}else this.cue.style.removeProperty("--cue-length"),this.cue.style.transform=`translate(${r}px, ${o}px) rotate(${this.angle*180/Math.PI}deg)`}}function j0(i){const t="#4a3b34",e="#fffdf8";return i==="tap"?`<svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="15" fill="none" stroke="${e}" stroke-width="10" opacity="0.7"/>
      <circle cx="50" cy="50" r="15" fill="none" stroke="${t}" stroke-width="5" opacity="0.85"/>
      <circle cx="50" cy="50" r="15" fill="none" stroke="${t}" stroke-width="4" opacity="0.55">
        <animate attributeName="r" values="15;33;15" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.55;0;0.55" dur="1.5s" repeatCount="indefinite"/>
      </circle>
    </svg>`:i==="circle"?`<svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="30" fill="none" stroke="${e}" stroke-width="11" opacity="0.6"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="${t}" stroke-width="5" stroke-dasharray="10 9" opacity="0.7">
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="80" cy="50" r="8" fill="${t}" opacity="0.8">
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="4s" repeatCount="indefinite"/>
      </circle>
    </svg>`:`<div class="gesture-path" aria-hidden="true">
    <i class="gesture-dot"></i><b class="gesture-arrow"></b>
  </div>`}class Q0{constructor(t){tt(this,"down",!1);tt(this,"state",{x:0,y:0,px:0,py:0,startX:0,startY:0,startPx:0,startPy:0,dx:0,dy:0,age:0});tt(this,"onDown",null);tt(this,"onMove",null);tt(this,"onUp",null);tt(this,"el");tt(this,"t0",0);tt(this,"activeId",null);tt(this,"handleDown",t=>{if(this.activeId!==null)return;t.preventDefault();const e=this.read(t);this.activeId=t.pointerId,this.down=!0,this.t0=performance.now(),this.state={...e,startX:e.x,startY:e.y,startPx:e.px,startPy:e.py,dx:0,dy:0,age:0},this.el.setPointerCapture?.(t.pointerId),this.onDown?.(this.state)});tt(this,"handleMove",t=>{if(!this.down||t.pointerId!==this.activeId)return;t.preventDefault();const e=this.read(t),n=this.state;n.x=e.x,n.y=e.y,n.px=e.px,n.py=e.py,n.dx=e.x-n.startX,n.dy=e.y-n.startY,n.age=(performance.now()-this.t0)/1e3,this.onMove?.(n)});tt(this,"handleUp",t=>{!this.down||t.pointerId!==this.activeId||(t.preventDefault?.(),this.activeId=null,this.down=!1,this.state.age=(performance.now()-this.t0)/1e3,this.onUp?.(this.state))});this.el=t,t.addEventListener("pointerdown",this.handleDown,{passive:!1}),t.addEventListener("pointermove",this.handleMove,{passive:!1}),window.addEventListener("pointerup",this.handleUp,{passive:!1}),window.addEventListener("pointercancel",this.handleUp,{passive:!1}),t.addEventListener("contextmenu",e=>e.preventDefault())}read(t){const e=this.el.getBoundingClientRect(),n=t.clientX-e.left,s=t.clientY-e.top;return{px:n,py:s,x:n/e.width*2-1,y:-(s/e.height)*2+1}}}class tg{constructor(){tt(this,"ctx",null);tt(this,"master",null);tt(this,"noiseBuf",null);tt(this,"pipeSrc",null);tt(this,"pipeGain",null)}resume(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination);const e=Math.floor(this.ctx.sampleRate*2),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0);let r=0;for(let o=0;o<e;o++){const a=Math.random()*2-1;r=r*.72+a*.28,s[o]=r}this.noiseBuf=n}this.ctx.state==="suspended"&&this.ctx.resume()}noise(t,e,n,s,r,o="bandpass"){if(!this.ctx||!this.noiseBuf||!this.master)return;const a=this.ctx.currentTime,c=this.ctx.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0;const l=this.ctx.createBiquadFilter();l.type=o,l.frequency.setValueAtTime(n,a),r&&l.frequency.exponentialRampToValueAtTime(r,a+t),l.Q.value=s;const h=this.ctx.createGain();h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(e,a+t*.16),h.gain.exponentialRampToValueAtTime(1e-4,a+t),c.connect(l).connect(h).connect(this.master),c.start(a),c.stop(a+t+.05)}tone(t,e,n,s="sine"){if(!this.ctx||!this.master)return;const r=this.ctx.currentTime,o=this.ctx.createOscillator();o.type=s,o.frequency.setValueAtTime(t,r);const a=this.ctx.createGain();a.gain.setValueAtTime(1e-4,r),a.gain.exponentialRampToValueAtTime(n,r+.02),a.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(a).connect(this.master),o.start(r),o.stop(r+e+.05)}cut(){this.noise(.42,.16,900,1.1,240),this.noise(.3,.06,2600,2.5,1400)}bearing(){this.noise(.05,.05,4200,8)}settle(){this.noise(.24,.13,320,1.4,120,"lowpass"),this.tone(96,.16,.05,"sine")}release(){this.noise(.55,.11,620,.9,180)}place(){this.noise(.16,.1,700,1.6,300,"lowpass")}tap(){this.noise(.08,.07,1800,3.5)}pipeStart(){if(!this.ctx||!this.noiseBuf||!this.master||this.pipeSrc)return;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuf,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=620;const n=this.ctx.createGain();n.gain.value=0,n.gain.linearRampToValueAtTime(.11,this.ctx.currentTime+.09),t.connect(e).connect(n).connect(this.master),t.start(),this.pipeSrc=t,this.pipeGain=n}pipeStop(){if(!this.ctx||!this.pipeSrc||!this.pipeGain)return;const t=this.ctx.currentTime;this.pipeGain.gain.linearRampToValueAtTime(0,t+.12),this.pipeSrc.stop(t+.2),this.pipeSrc=null,this.pipeGain=null}spread(){this.noise(.7,.07,1100,.8,500)}}const Gs=ot.wedgeAngle,Zi=Math.PI/4,Ce=class Ce{constructor(t,e,n,s){tt(this,"scene",new cl);tt(this,"rig");tt(this,"kitchen");tt(this,"mats");tt(this,"hud",new $0);tt(this,"sfx",new tg);tt(this,"pointer");tt(this,"timeline",new K0);tt(this,"rng",new An(7));tt(this,"phase","intro");tt(this,"clock",0);tt(this,"cutStation");tt(this,"buildStation");tt(this,"paletteKnife");tt(this,"piping");tt(this,"cutProgress",0);tt(this,"knifeLift",0);tt(this,"aimAngle",0);tt(this,"round",0);tt(this,"busy",!1);tt(this,"trayBerries",[]);tt(this,"trayHomeX",0);tt(this,"carried",null);tt(this,"carriedSlot",-1);tt(this,"downHitBerrySlot",-1);tt(this,"poseTipSlot",-1);tt(this,"poseTipUntil",0);tt(this,"lidDragging",!1);tt(this,"aimActive",!1);tt(this,"ignoreCurrentUp",!1);tt(this,"raycaster",new qu);tt(this,"crumbs",[]);tt(this,"crumbMesh");tt(this,"pipeLast",new ct(999,999));tt(this,"fillZones",new Set);tt(this,"fillAtDown",0);tt(this,"archiveRoot",new te);tt(this,"archiveSamples",[]);this.mats=t,this.scene.background=new Yt(14275272),this.scene.environment=s,this.scene.environmentIntensity=.75,this.scene.fog=new ca(13617084,150,300),this.kitchen=G0(t),this.scene.add(this.kitchen.root),this.rig=new J0(n),this.cutStation=this.makeStation(this.kitchen.cutTable.group,this.kitchen.cutTable.plate,ge.cut,this.kitchen.cutTable.cakeY,B0()),this.buildStation=this.makeStation(this.kitchen.buildTable.group,this.kitchen.buildTable.plate,ge.build,this.kitchen.buildTable.cakeY,{placements:[],fill:0}),this.buildFinishedCake(this.cutStation.cake),this.prepareBuildCake(),this.paletteKnife=X0(t),this.paletteKnife.visible=!1,this.scene.add(this.paletteKnife),this.piping=Y0(t),this.piping.group.scale.setScalar(.82),this.piping.group.visible=!1,this.scene.add(this.piping.group),this.makeTray(),this.buildArchiveRack(),document.body.dataset.archives="0";const r=new rr(.15,0);this.crumbMesh=new ir(r,this.mats.crumb,Ce.MAX_CRUMBS),this.crumbMesh.count=0,this.crumbMesh.castShadow=!0,this.crumbMesh.frustumCulled=!1,this.scene.add(this.crumbMesh),this.pointer=new Q0(e),this.pointer.onDown=o=>this.onDown(o),this.pointer.onMove=o=>this.onMove(o),this.pointer.onUp=o=>this.onUp(o),this.rig.apply({target:new R(0,8.2,0),dir:new R(-.9,.5,1),fit:15},!0),this.rig.goto("whole",2.6),this.setPhase("intro")}makeStation(t,e,n,s,r){const o=new Zr(this.mats,r);o.root.position.y=s,e.add(o.root);const a=Z0(this.mats);a.group.position.set(n.x+26,0,n.z),a.group.visible=!1,t.parent.add(a.group);const c=W0(this.mats);c.rotation.y=Math.PI,a.boom.add(c),c.visible=!1;const l=q0(this.mats);return l.visible=!1,this.scene.add(l),{cake:o,plate:e,guide:a,knife:c,server:l,origin:n,cakeY:s,plateAngle:0,servedProgress:0,scoreKind:"a"}}buildFinishedCake(t,e=4242){t.buildBoardAndBase();for(const n of t.design.placements)t.addBerry(n);t.setFill(1),t.addTopSponge(),t.buildCoat(),t.setCoat(1,1),t.addDecoration(e)}prepareBuildCake(){const t=this.buildStation.cake;t.buildBoardAndBase(),t.buildCoat(),t.setCoat(0,0),t.setFill(0),t.root.visible=!1}makeTray(){this.trayHomeX=this.kitchen.tray.position.x;const t=new An(517),e=5;for(let n=0;n<9;n++){const s=Zo(n,"flatTipOut",t,n%3===0?1.12:n%3===1?.9:1),r=new te,o=new pt(s.berry.buildSlabRim(s.slab),this.mats.berrySkin),a=new pt(s.berry.buildSlabFaces(s.slab),this.mats.berryCut);o.castShadow=!0,r.add(o,a);const c=Math.floor(n/e),l=n%e,h=this.kitchen.tray.position.x+(l-(e-1)/2)*3.9+(c===1?1.95:0),u=this.kitchen.tray.position.z+(c-.5)*4.2;r.position.set(h,.75+s.slab,u),r.rotation.set(-Math.PI/2,0,t.range(-.4,.4)),r.userData.home=r.position.clone(),this.scene.add(r),this.trayBerries.push({group:r,placement:s})}}buildArchiveRack(){const t=this.archiveRoot;t.position.set(ge.build.x,0,-23),t.name="section-archive";const e=new pt(new ye(34,.8,10.5),this.mats.metal);e.position.y=.4,e.castShadow=!0,e.receiveShadow=!0,t.add(e);const n=new pt(new ye(34,8.8,.65),this.mats.metal);n.position.set(0,4.8,-5),n.castShadow=!0,t.add(n);for(const[s,r]of Ce.ARCHIVE_X.entries()){const o=new pt(new Te(4.45,4.6,.28,40),this.mats.board);o.position.set(r,1.03,.35),o.castShadow=!0,o.receiveShadow=!0,t.add(o);const a=new pt(new ls(3.65,.16,8,36),this.mats.creamOuter);a.position.set(r,4.75,-4.61),a.renderOrder=s,t.add(a)}for(const s of[-16.2,16.2]){const r=new pt(new Te(.42,.5,10.2,14),this.mats.metal);r.position.set(s,5.1,-4.6),r.castShadow=!0,t.add(r)}this.scene.add(t)}setPhase(t){this.phase=t,this.lidDragging=!1,this.aimActive=!1,document.body.dataset.phase=t,this.hud.hideCue();const e=t==="cut1"||t==="cut2"||t==="cutNew"||t==="turnNew"||t==="aim";switch(this.cutStation.guide.group.visible=e&&(t==="cut1"||t==="cut2"),this.buildStation.guide.group.visible=e&&t!=="cut1"&&t!=="cut2",t){case"intro":this.hud.setHint("しろい ケーキ");break;case"cut1":this.cutStation.scoreKind="a",this.rig.goto("cutA",1.6),this.hud.setHint("ゆびで すーっと きろう"),this.cutStation.knife.visible=!0,this.cutProgress=0,this.knifeLift=0;break;case"turn":this.rig.goto("turn",1.3),this.hud.setHint("だいを まわそう");break;case"cut2":this.cutStation.scoreKind="b",this.rig.goto("cutB",1.3),this.hud.setHint("もういちど すーっ"),this.cutStation.knife.visible=!0,this.cutProgress=0,this.knifeLift=0;break;case"serve":case"serveNew":this.rig.goto(t==="serve"?"serve":"serveNew",1.4),this.hud.setHint("てまえに ひっぱる"),(t==="serve"?this.cutStation:this.buildStation).servedProgress=0;break;case"study":this.hud.setHint("しろい なかに いちごが ならんでた");break;case"toBuild":this.hud.setHint("つぎは じぶんで つくろう");break;case"place":this.rig.goto("place",1.4),this.hud.setHint(this.round===0?"いちごを おいてみよう":"こんどは ちがう ところに");break;case"fill":this.rig.goto("fill",1.4),this.hud.setHint("クリームで すきまを うめよう");break;case"lid":this.rig.goto("lid",1.4),this.hud.setHint("スポンジを のせよう");break;case"coat":this.rig.goto("coat",1.4),this.hud.setHint("しろく つつむよ");break;case"aim":this.rig.goto("aim",1.4),this.hud.setHint(this.round>=1?"きる むきを かえてみよう":"どこで きる？");break;case"cutNew":this.buildStation.scoreKind="a",this.rig.apply(this.cutNewPose(),!1,1.2),this.hud.setHint("すーっと きろう"),this.buildStation.knife.visible=!0,this.cutProgress=0,this.knifeLift=0;break;case"studyNew":this.hud.setHint("じぶんで おいた いちごの だんめん");break;case"gallery":this.kitchen.buildTable.group.visible=!1,this.buildStation.server.visible=!1,this.hud.setHint("だんめんを のこして おこう");break;case"again":this.hud.setHint("つぎは どんな だんめん？");break}}cutNewPose(){let t=this.aimAngle+Math.PI/2;return Math.sin(t)<.12&&(t=this.aimAngle-Math.PI/2),{target:new R(ge.build.x,8.9,ge.build.z),dir:new R(Math.cos(t)*.92,.42,Math.max(.34,Math.sin(t))*1.05),fit:10.8}}activeStation(){return this.phase==="cut1"||this.phase==="turn"||this.phase==="cut2"||this.phase==="serve"||this.phase==="study"?this.cutStation:this.buildStation}cutScreenDir(t,e){const n=new R(Math.cos(e)*ot.radius,ot.topCoat.y1,Math.sin(e)*ot.radius).add(t.origin).setY(t.cakeY+ot.topCoat.y1),s=new R(t.origin.x,t.cakeY+ot.topCoat.y1,t.origin.z),r=n.clone().project(this.rig.camera),o=s.clone().project(this.rig.camera);return new ct(o.x-r.x,o.y-r.y)}cutWorldAngle(t){return t===this.cutStation?0:this.aimAngle}onDown(t){if(this.sfx.resume(),this.busy){this.ignoreCurrentUp=!0;return}if(this.phase==="intro"){this.ignoreCurrentUp=!0,this.setPhase("cut1");return}if(this.phase==="again"){this.ignoreCurrentUp=!0,this.restart();return}this.phase==="place"&&this.pickBerry(t),this.phase==="aim"&&this.beginAim(t),this.phase==="lid"&&this.beginLidDrag(t),this.phase==="fill"&&(this.piping.group.visible=!0,this.sfx.pipeStart(),this.pipeLast.set(999,999),this.fillAtDown=this.buildStation.cake.fill,this.movePiping(t))}onMove(t){if(!(this.busy||this.ignoreCurrentUp))switch(this.phase){case"cut1":case"cut2":case"cutNew":{const e=this.activeStation(),n=this.cutScreenDir(e,this.cutWorldAngle(e)),s=Math.max(.26,n.length()),r=(t.dx*n.x+t.dy*n.y)/s,o=ji(r/(s*.72),0,1);o>this.cutProgress&&(this.cutProgress<.04&&o>=.04&&this.sfx.cut(),Math.floor(o*7)>Math.floor(this.cutProgress*7)&&this.spawnCrumbs(e),this.cutProgress=o);break}case"turn":{const e=this.cutStation,n=ji(t.dx*1.9,0,Zi*1.12),s=e.plateAngle;e.plateAngle=n,Math.floor(n/.11)!==Math.floor(s/.11)&&this.sfx.bearing();break}case"serve":case"serveNew":{const e=this.activeStation(),n=ji(-t.dy/.34,0,1);n>e.servedProgress&&(!e.cake.isSplit&&n>.015&&this.performSplit(e),e.servedProgress=n);break}case"place":this.dragBerry(t);break;case"lid":this.lidDragging&&this.handleLidDrag(t);break;case"fill":this.movePiping(t);break;case"aim":this.aimActive&&this.aimDrag(t);break}}onUp(t){if(this.ignoreCurrentUp){this.ignoreCurrentUp=!1;return}if(!this.busy)switch(this.phase){case"cut1":case"cut2":case"cutNew":this.cutProgress>.9?this.finishCut():(this.cutProgress=0,this.hud.remind("てんから まんなかまで すーっ"));break;case"turn":{this.cutStation.plateAngle>Zi*.45?this.settleTurn(Zi):this.settleTurn(0);break}case"serve":case"serveNew":this.activeStation().servedProgress>.72?this.finishServe():this.resetServeAttempt();break;case"place":this.dropBerry();break;case"fill":this.sfx.pipeStop(),this.piping.group.visible=!1,this.buildStation.cake.fill>=.995?this.advanceToLid():this.buildStation.cake.fill<=this.fillAtDown+1e-4&&this.hud.remind("ちがう すきまへ ぐるっと");break;case"aim":this.aimActive&&(this.aimActive=!1,this.armCut());break;case"lid":this.lidDragging&&this.dropLid(t);break}}finishCut(){const t=this.activeStation();this.busy=!0,this.cutProgress=1,this.sfx.settle();const e=this.cutWorldAngle(t)+t.plateAngle;this.timeline.add(.55,n=>{this.knifeLift=Mn(n)*9},.18,()=>{t.knife.visible=!1,this.knifeLift=0,this.busy=!1,this.phase==="cut1"?(this.cutStation.cake.setScore(e,1,"a"),this.setPhase("turn")):this.phase==="cut2"?this.setPhase("serve"):this.phase==="cutNew"&&this.autoSecondCut()})}autoSecondCut(){const t=this.buildStation;this.busy=!0,this.setPhase("turnNew"),this.hud.setHint("");const e=t.plateAngle;this.timeline.add(.85,n=>{t.plateAngle=e+$i(n)*Zi,Math.random()<.25&&this.sfx.bearing()},.15,()=>{t.knife.visible=!0,t.scoreKind="b",this.cutProgress=0,this.knifeLift=0,this.sfx.cut(),this.timeline.add(.85,n=>{this.cutProgress=$i(n),Math.floor(n*7)!==Math.floor((n-.02)*7)&&this.spawnCrumbs(t)},0,()=>{this.timeline.add(.4,n=>{this.knifeLift=Mn(n)*9},0,()=>{t.knife.visible=!1,this.knifeLift=0;const n=t.plateAngle,s=this.aimAngle+Zi;this.timeline.add(.7,r=>{t.plateAngle=n+(s-n)*$i(r)},.1,()=>{this.busy=!1,this.setPhase("serveNew")})})})})}settleTurn(t){const e=this.cutStation,n=e.plateAngle;this.busy=!0,this.timeline.add(.6,s=>{const r=1-Math.pow(1-s,3);e.plateAngle=n+(t-n)*r},0,()=>{this.busy=!1,t>0?(this.sfx.bearing(),this.setPhase("cut2")):this.hud.remind("やじるしの ほうへ まわそう")})}performSplit(t){const e=t===this.cutStation?0:this.aimAngle;t.cake.split(e),t.cake.clearScore(),this.sfx.release(),this.rig.nudge(.05),t.server.visible=!0}finishServe(){const t=this.activeStation();this.busy=!0;const e=t.servedProgress;this.sfx.settle(),this.timeline.add(.5,n=>{t.servedProgress=e+(1-e)*Mn(n)},0,()=>{this.busy=!1,this.phase==="serve"?(this.rig.goto("study",2.2),this.setPhase("study"),this.timeline.wait(3.4,()=>this.goToBuild())):(this.rig.goto("revealNew",1.6),this.setPhase("studyNew"),this.timeline.wait(3.6,()=>{this.showArchive()}))})}showArchive(){this.setPhase("gallery"),this.busy=!0,this.rig.goto("gallery",1.8),this.archiveSamples.length>=Ce.MAX_ARCHIVES&&this.archiveSamples.shift()?.cake.dispose();for(let r=0;r<this.archiveSamples.length;r++)this.archiveSamples[r].cake.root.position.x=Ce.ARCHIVE_X[r];const t={placements:[...this.buildStation.cake.design.placements],fill:1},e=new Zr(this.mats,t),n=this.archiveSamples.length;e.root.position.set(Ce.ARCHIVE_X[n],1.18,.2),e.root.rotation.y=this.aimAngle+Gs/2-Math.PI/2,e.root.scale.setScalar(.015),this.archiveRoot.add(e.root),this.buildFinishedCake(e,1e3+this.round*13),e.split(this.aimAngle);const s=this.aimAngle+Gs/2;e.wedge.position.set(Math.cos(s)*8.2,.55,Math.sin(s)*8.2),this.archiveSamples.push({cake:e}),document.body.dataset.archives=String(this.archiveSamples.length),this.archiveRoot.updateWorldMatrix(!0,!0),e.updateClipping(),this.timeline.add(1,r=>{const o=.015+(Ce.ARCHIVE_SCALE-.015)*Mn(r);e.root.scale.setScalar(o),e.root.position.y=1.18+Math.sin(r*Math.PI)*.55},.72,()=>{e.root.scale.setScalar(Ce.ARCHIVE_SCALE),e.root.position.y=1.18,this.sfx.place(),this.busy=!1,this.setPhase("again")})}resetServeAttempt(){const t=this.activeStation();if(t.servedProgress<=0){this.hud.remind("てんから おさらまで ひっぱろう");return}const e=t.servedProgress;this.busy=!0,this.timeline.add(.28,n=>{t.servedProgress=e*(1-Mn(n))},0,()=>{t.servedProgress=0,this.busy=!1,this.hud.remind("てんから おさらまで ひっぱろう")})}goToBuild(){this.setPhase("toBuild"),this.busy=!0,this.buildStation.cake.root.visible=!0,this.rig.goto("buildTop",2.4),this.timeline.wait(2.6,()=>{this.busy=!1,this.setPhase("place")})}planePoint(t,e,n=0){this.raycaster.setFromCamera(new ct(t.x,t.y+n),this.rig.camera);const s=new Ze(new R(0,1,0),-e),r=new R;return this.raycaster.ray.intersectPlane(s,r)}pickBerry(t){this.raycaster.setFromCamera(new ct(t.x,t.y),this.rig.camera),this.downHitBerrySlot=-1;const e=this.poseTipAnchor();if(e){const o=e.project(this.rig.camera),a=(t.x-o.x)*this.rig.camera.aspect,c=t.y-o.y;if(Math.hypot(a,c)<.12){this.downHitBerrySlot=this.poseTipSlot;return}}const n=this.trayBerries[0];if(n){const o=this.trayCueAnchor(n).project(this.rig.camera),a=(t.x-o.x)*this.rig.camera.aspect,c=t.y-o.y;if(Math.hypot(a,c)<.12){this.carried={group:n.group,placement:n.placement,home:n.group.userData.home.clone()},this.carriedSlot=-1,this.sfx.tap();return}}const s=this.buildStation.cake.berryGroups(),r=this.raycaster.intersectObjects([...this.trayBerries.map(o=>o.group),...s],!0);if(r.length){const o=this.findTray(r[0].object);if(o){this.carried={group:o.group,placement:o.placement,home:o.group.userData.home.clone()},this.carriedSlot=-1,this.sfx.tap();return}let a=r[0].object;for(;a&&!a.name.startsWith("berry-");)a=a.parent;a&&(this.downHitBerrySlot=Number(a.name.split("-")[1]))}}findTray(t){for(const e of this.trayBerries){let n=t;for(;n;){if(n===e.group)return e;n=n.parent}}return null}poseTipAnchor(){if(this.poseTipSlot<0||this.clock>=this.poseTipUntil)return null;const t=this.buildStation.cake.berryGroups().find(n=>n.name===`berry-${this.poseTipSlot}`),e=this.buildStation.cake.design.placements.find(n=>n.slot===this.poseTipSlot);return!t||!e?null:t.localToWorld(new R(0,e.berry.p.length*.18,0))}trayCueAnchor(t){return t.group.localToWorld(new R(0,t.placement.berry.p.length*.18,t.placement.slab))}dragBerry(t){if(!this.carried)return;const e=this.buildStation,n=e.cakeY+ot.filling.y0+ot.skim,s=this.planePoint(t,n,.06);if(!s)return;const r=s.clone().sub(e.origin),o=Math.hypot(r.x,r.z)<ot.radius+2.5;let a=-1,c=o?1/0:5.6;for(const l of Sn){if(e.cake.hasSlot(l.index))continue;const h=r.x-Math.cos(l.angle)*l.radius,u=r.z-Math.sin(l.angle)*l.radius,f=Math.hypot(h,u);f<c&&(c=f,a=l.index)}if(this.carriedSlot=a,a>=0){const l=Sn[a];this.carried.group.position.set(e.origin.x+Math.cos(l.angle)*l.radius,n+1.5,e.origin.z+Math.sin(l.angle)*l.radius),this.carried.group.rotation.set(-Math.PI/2,0,-l.angle)}else this.carried.group.position.set(s.x,n+2.4,s.z),this.carried.group.rotation.set(-Math.PI/2,0,0)}dropBerry(){if(!this.carried){this.downHitBerrySlot>=0?this.cyclePose(this.downHitBerrySlot):this.hud.remind("いちごから つかんで ケーキへ"),this.downHitBerrySlot=-1;return}const t=this.buildStation;if(this.carriedSlot>=0&&!t.cake.hasSlot(this.carriedSlot)){const e=this.carried.placement;e.slot=this.carriedSlot;const n=this.carriedSlot;t.cake.addBerry(e),this.trayBerries=this.trayBerries.filter(s=>s.group!==this.carried.group),this.scene.remove(this.carried.group),this.sfx.place(),t.cake.placedCount===1?(this.poseTipSlot=n,this.poseTipUntil=this.clock+1.7,this.hud.setHint("とんとんで むきも かわるよ")):t.cake.placedCount<Sn.length&&this.hud.setHint("つぎの いちごも ケーキへ"),t.cake.placedCount>=Sn.length&&(this.hud.setHint(""),this.slideTray(!0),this.busy=!0,this.timeline.wait(.7,()=>{this.setPhase("fill"),this.busy=!1}))}else this.carried.group.position.copy(this.carried.home),this.carried.group.rotation.set(-Math.PI/2,0,0),this.hud.remind("ケーキの しろい くぼみへ");this.carried=null,this.carriedSlot=-1,this.downHitBerrySlot=-1}cyclePose(t){const e=this.buildStation.cake,n=e.design.placements.find(o=>o.slot===t);if(!n)return;const s=qr.indexOf(n.pose),r=qr[(s+1)%qr.length];e.setPose(t,r),this.poseTipSlot=-1,this.poseTipUntil=0,this.sfx.tap(),this.hud.setHint("むきが かわった！ つぎも おこう")}movePiping(t){const e=this.buildStation,n=e.cakeY+e.cake.fillSurfaceY,s=this.planePoint(t,n,.1);if(!s)return;const r=s.clone().sub(e.origin),o=Math.hypot(r.x,r.z),a=ot.coreRadius-.95;if(o>a&&r.multiplyScalar(a/o),this.piping.group.position.set(e.origin.x+r.x,n+1.75,e.origin.z+r.z),this.piping.group.rotation.set(.22,0,-.16),!this.pointer.down)return;const c=new ct(r.x,r.z);c.distanceTo(this.pipeLast)>1.1&&(this.pipeLast.copy(c),e.cake.pipeBlob(r.x,r.z,this.rng),this.markFillZone(r.x,r.z),this.reseat(e)),e.cake.fill>=.995&&this.hud.setHint("")}markFillZone(t,e){const n=Math.PI*2/8,s=(Math.atan2(e,t)+Math.PI*2+n/2)%(Math.PI*2);this.fillZones.add(Math.floor(s/n)%8),this.buildStation.cake.setFill(Math.min(1,this.fillZones.size/Ce.REQUIRED_FILL_ZONES))}slideTray(t){const e=this.kitchen.tray,n=e.position.x,s=t?this.trayHomeX+24:this.trayHomeX;Math.abs(n-s)<.01||this.timeline.add(.8,r=>{e.position.x=n+(s-n)*$i(r)})}reseat(t){const e=t.cake.fill;t.cake.setBerrySink(()=>(1-Math.min(1,e*1.15))*.16)}advanceToLid(){this.sfx.pipeStop(),this.piping.group.visible=!1,this.setPhase("lid");const e=this.buildStation.cake.addTopSponge();e.position.set(-7.5,ot.sponge2.y0+4.6,8.5),e.rotation.z=.16}beginLidDrag(t){const e=this.buildStation,n=e.cake.topSponge,s=this.planePoint(t,e.cakeY+ot.sponge2.y0+4.5,.08),r=s?s.sub(e.origin):null,o=!!r&&Math.hypot(r.x-n.position.x,r.z-n.position.z)<ot.radius+1.8;this.lidDragging=o,o?this.sfx.tap():this.hud.remind("スポンジから つかもう")}dropLid(t){this.lidDragging=!1;const e=this.buildStation,n=e.cake.topSponge,s=this.planePoint(t,e.cakeY+ot.sponge2.y0+4.5,.08),r=s?s.sub(e.origin):null;if(!(!!r&&Math.hypot(r.x,r.z)<ot.radius+3)){n.position.set(-7.5,ot.sponge2.y0+4.6,8.5),n.rotation.z=.16,this.hud.remind("スポンジを ケーキの うえへ");return}this.busy=!0;const a=n.position.clone(),c=n.rotation.z;this.sfx.place(),this.timeline.add(.45,l=>{const h=Mn(l);n.position.set(a.x*(1-h),ot.sponge2.y0+(a.y-ot.sponge2.y0)*(1-h),a.z*(1-h)),n.rotation.z=c*(1-h)},0,()=>{this.sfx.settle(),this.timeline.add(.5,l=>{const h=Math.sin(l*Math.PI)*.035;e.cake.setFill(1-h),e.cake.setBerrySink(()=>h*1.6)},0,()=>{e.cake.setFill(.985),e.cake.setBerrySink(()=>.02),this.busy=!1,this.startCoating()})})}startCoating(){const t=this.buildStation;this.setPhase("coat"),this.busy=!0,this.paletteKnife.visible=!0;const e=t.plateAngle;this.sfx.spread(),this.timeline.add(1.15,n=>{t.cake.setCoat(n,0),t.plateAngle=e+n*Math.PI*2.1,this.placePalette(t,.35+n*.2,n)},.2,()=>{this.sfx.spread(),this.timeline.add(1.5,n=>{t.cake.setCoat(1,n),t.plateAngle=e+Math.PI*2.1+n*Math.PI*1.9,this.placePalette(t,.55+n*.35,n)},.05,()=>{this.paletteKnife.visible=!1,t.cake.addDecoration(1e3+this.round*13),this.sfx.place(),t.plateAngle=0,this.timeline.wait(.7,()=>{this.busy=!1,this.setPhase("aim")})})})}placePalette(t,e,n){const s=.52+Math.sin(n*Math.PI)*.22,r=ot.radius+.55;this.paletteKnife.position.set(t.origin.x+Math.cos(s)*r,t.cakeY+ot.topCoat.y1+2.3+e*.5,t.origin.z+Math.sin(s)*r),this.paletteKnife.rotation.set(0,-(Math.PI/2+s),-Math.PI/2+.18)}aimDrag(t){const e=this.buildStation,n=this.planePoint(t,e.cakeY+ot.topCoat.y1);if(!n)return;const s=n.clone().sub(e.origin);if(Math.hypot(s.x,s.z)<1.5)return;const r=Math.atan2(s.z,s.x),o=Math.PI*2/ot.cutSteps,a=Math.round(r/o)*o;Math.abs(a-this.aimAngle)>1e-4&&this.sfx.tap(),this.aimAngle=a}beginAim(t){const e=this.buildStation,n=this.planePoint(t,e.cakeY+ot.topCoat.y1),s=n?n.sub(e.origin):null,r=s?Math.hypot(s.x,s.z):1/0;this.aimActive=r>=2.5&&r<=ot.radius+3,this.aimActive?this.aimDrag(t):this.hud.remind("ケーキの ふちを さわろう")}armCut(){this.busy=!0,this.timeline.wait(.55,()=>{this.busy=!1,this.setPhase("cutNew")})}restart(){this.round++;const t=this.buildStation;this.kitchen.buildTable.group.visible=!0,t.cake.dispose();const e=new Zr(this.mats,{placements:[],fill:0});e.root.position.y=t.cakeY,t.plate.add(e.root),t.cake=e,t.plateAngle=0,t.server.visible=!1,t.servedProgress=0,this.fillZones.clear(),this.fillAtDown=0,this.poseTipSlot=-1,this.poseTipUntil=0,e.buildBoardAndBase(),e.buildCoat(),e.setCoat(0,0),e.setFill(0);for(const n of this.trayBerries)n.group.traverse(s=>{const r=s;r.geometry&&r.geometry.dispose()}),this.scene.remove(n.group);this.trayBerries=[],this.kitchen.tray.position.x=this.trayHomeX,this.makeTray(),this.setPhase("place")}spawnCrumbs(t){const e=this.cutWorldAngle(t),n=ot.radius*(1-this.cutProgress*.9);for(let s=0;s<2;s++)this.crumbs.length>=Ce.MAX_CRUMBS&&this.crumbs.shift(),this.crumbs.push({pos:new R(t.origin.x+Math.cos(e)*n+this.rng.range(-.4,.4),t.cakeY+ot.topCoat.y1,t.origin.z+Math.sin(e)*n+this.rng.range(-.4,.4)),vel:new R(this.rng.range(-1.4,1.4),this.rng.range(.4,2.2),this.rng.range(-1.4,1.4)),rot:new Je(this.rng.range(0,3),this.rng.range(0,3),this.rng.range(0,3)),spin:new R(this.rng.range(-6,6),this.rng.range(-6,6),this.rng.range(-6,6)),scale:this.rng.range(.55,1.15),life:0,support:t,supportLocal:new R,sleeping:!1})}update(t,e,n){this.clock+=t,this.timeline.update(t);for(const s of[this.cutStation,this.buildStation])s.plate.rotation.y=s.plateAngle,s.plate.updateWorldMatrix(!0,!1),s.cake.updateClipping();for(const s of this.archiveSamples)s.cake.updateClipping();this.updateKnife(t),this.updateWedge(t),this.updateCrumbs(t),this.updateCue(),this.phase==="aim"&&(this.buildStation.cake.setScore(this.aimAngle,1,"guide"),this.buildStation.guide.group.position.set(ge.build.x+Math.cos(this.aimAngle)*26,0,ge.build.z+Math.sin(this.aimAngle)*26),this.buildStation.guide.group.rotation.y=-this.aimAngle),this.rig.update(t),this.hud.update(this.rig.camera,e,n)}updateKnife(t){for(const e of[this.cutStation,this.buildStation]){if(!e.knife.visible)continue;const n=this.cutProgress,s=8.6-n*8.6,r=e.cakeY+ot.topCoat.y1+1.6,o=e.cakeY+.08,a=r+(o-r)*n+this.knifeLift,c=-(26-s),l=-.2+.06*n;e.knife.position.set(c+22,a,0),e.knife.rotation.set(0,Math.PI,l),e.guide.carriage.position.x=zc(e.guide.carriage.position.x,c+11.5,20,t);const h=Math.max(.6,e.guide.carriage.position.y-(a+2.6));e.guide.stem.scale.y=h,e.cake.setScore(this.cutWorldAngle(e)+e.plateAngle,n,e.scoreKind)}}updateWedge(t){for(const e of[this.cutStation,this.buildStation]){if(!e.cake.isSplit)continue;const n=e.servedProgress,s=Mn(n),r=e.cake.cutAngle+Gs/2,o=Math.min(1,n/.72),a=.05+8.6*o*o*(3-2*o),c=6.5*Mn(Math.max(0,(n-.45)/.55)),l=1.15*Math.sin(Math.PI*Math.min(1,n*1.3))+.5*s,h=Math.PI/2+e.plateAngle;e.cake.wedge.position.set(Math.cos(r)*a+Math.cos(h)*c,l,Math.sin(r)*a+Math.sin(h)*c);const u=-.16*Mn(ji((n-.2)/.8,0,1));e.cake.wedge.rotation.y=u,e.cake.wedge.rotation.z=.035*Math.sin(n*Math.PI);const f=r-e.plateAngle-u,d=e.cake.wedge.getWorldPosition(new R);e.server.visible=n>.001&&this.activeStation()===e,e.server.position.set(d.x+Math.cos(f)*8.9,e.cakeY+l-.34-s*.22,d.z+Math.sin(f)*8.9),e.server.rotation.set(0,Math.PI-f,-.03-s*.04)}}updateCrumbs(t){const e=new jt,n=new Oe,s=new R;for(let r=this.crumbs.length-1;r>=0;r--){const o=this.crumbs[r];if(o.life+=t,o.life>16){this.crumbs.splice(r,1);continue}if(o.sleeping){o.pos.copy(o.supportLocal).applyMatrix4(o.support.plate.matrixWorld);continue}o.vel.y-=55*t,o.pos.addScaledVector(o.vel,t),o.rot.x+=o.spin.x*t,o.rot.y+=o.spin.y*t,o.rot.z+=o.spin.z*t;const a=o.pos.x-o.support.origin.x,c=o.pos.z-o.support.origin.z,l=Math.hypot(a,c)<=ot.radius+.3,h=o.support.cakeY+(l?ot.topCoat.y1:0)+.08*o.scale;if(o.pos.y<h){o.pos.y=h;const u=Math.abs(o.vel.y)*.12;o.vel.x*=.24,o.vel.z*=.24,o.spin.multiplyScalar(.4),u<.5||o.life>.8?(o.vel.set(0,0,0),o.spin.set(0,0,0),o.sleeping=!0,o.supportLocal.copy(o.pos),o.support.plate.worldToLocal(o.supportLocal)):o.vel.y=u}}for(let r=0;r<this.crumbs.length;r++){const o=this.crumbs[r];n.setFromEuler(o.rot),s.setScalar(o.scale),e.compose(o.pos,n,s),this.crumbMesh.setMatrixAt(r,e)}this.crumbMesh.count=this.crumbs.length,this.crumbMesh.instanceMatrix.needsUpdate=!0}updateCue(){const t=this.activeStation();switch(this.phase){case"intro":this.hud.setCue("tap",new R(0,this.cutStation.cakeY+ot.topCoat.y1+2.4,0));break;case"cut1":case"cut2":case"cutNew":{if(this.pointer.down){this.hud.hideCue();break}const e=this.cutWorldAngle(t),n=new R(t.origin.x+Math.cos(e)*(ot.radius+1.4),t.cakeY+ot.topCoat.y1+1.6,t.origin.z+Math.sin(e)*(ot.radius+1.4)),s=new R(t.origin.x,n.y,t.origin.z);this.hud.setWorldGesture("swipe",n,s);break}case"turn":{const e=new R(0,this.cutStation.cakeY,ot.boardRadius*.72);this.pointer.down?this.hud.hideCue():this.hud.setScreenGesture("drag",e,new ct(.28,0));break}case"serve":case"serveNew":{if(this.pointer.down){this.hud.hideCue();break}const e=(t===this.cutStation?0:this.aimAngle)+Gs/2-t.plateAngle,n=new R(t.origin.x+Math.cos(e)*5,t.cakeY+2.4,t.origin.z+Math.sin(e)*5);this.hud.setScreenGesture("swipe",n,new ct(0,-.29));break}case"place":{if(this.carried||this.pointer.down){this.hud.hideCue();break}if(this.poseTipSlot>=0&&this.clock<this.poseTipUntil){const s=this.poseTipAnchor();s&&this.hud.setCue("tap",s);break}this.poseTipSlot>=0&&(this.poseTipSlot=-1,this.poseTipUntil=0,this.hud.setHint("つぎの いちごも ケーキへ"));const e=this.trayBerries[0],n=Sn.find(s=>!this.buildStation.cake.hasSlot(s.index));if(e&&n){const s=this.trayCueAnchor(e),r=new R(ge.build.x+Math.cos(n.angle)*n.radius,this.buildStation.cakeY+ot.filling.y0+ot.skim+1.1,ge.build.z+Math.sin(n.angle)*n.radius);this.hud.setWorldGesture("drag",s,r)}break}case"fill":{if(this.pointer.down){this.hud.hideCue();break}const e=this.buildStation.cakeY+ot.filling.y0+ot.skim+.5,n=Sn[0].radius,s=new R(ge.build.x,e,ge.build.z);this.hud.setWorldCircle(s,new R(ge.build.x+n,e,ge.build.z),new R(ge.build.x,e,ge.build.z+n));break}case"lid":this.pointer.down?this.hud.hideCue():this.hud.setWorldGesture("drag",new R(ge.build.x-7.5,this.buildStation.cakeY+ot.sponge2.y0+6.4,8.5),new R(ge.build.x,this.buildStation.cakeY+ot.sponge2.y0+3,ge.build.z));break;case"aim":{if(this.pointer.down){this.hud.hideCue();break}const e=ot.radius-.8;this.hud.setCue("tap",new R(ge.build.x+Math.cos(this.aimAngle)*e,this.buildStation.cakeY+ot.topCoat.y1+1.2,ge.build.z+Math.sin(this.aimAngle)*e));break}case"again":this.hud.setCue("tap",this.latestArchiveAnchor());break;default:this.hud.hideCue();break}}latestArchiveAnchor(){const t=this.archiveSamples.length-1;return t<0?null:(this.archiveRoot.updateWorldMatrix(!0,!1),new R(Ce.ARCHIVE_X[t],1.15,4).applyMatrix4(this.archiveRoot.matrixWorld))}handleLidDrag(t){if(this.phase!=="lid"||this.busy)return;const e=this.buildStation,n=e.cake.topSponge,s=this.planePoint(t,e.cakeY+ot.sponge2.y0+4.5,.08);if(!s)return;const r=s.clone().sub(e.origin);Math.hypot(r.x,r.z)<3.4?n.position.set(r.x*.25,ot.sponge2.y0+3,r.z*.25):n.position.set(r.x,ot.sponge2.y0+4.5,r.z),n.rotation.z=zc(n.rotation.z,0,8,.016)}get snapshot(){return{phase:this.phase,busy:this.busy,cut:this.cutProgress,served:this.activeStation().servedProgress,plate:this.cutStation.plateAngle,placed:this.buildStation.cake.placedCount,fill:this.buildStation.cake.fill,fillZones:this.fillZones.size,archives:this.archiveSamples.length,clock:this.clock}}get aimDirection(){return this.aimAngle}get trayAnchors(){return this.trayBerries.map(t=>t.group.position.clone())}get archiveAnchors(){return this.archiveSamples.map(t=>(t.cake.root.updateWorldMatrix(!0,!1),new R(0,ot.topCoat.y1*.55,0).applyMatrix4(t.cake.root.matrixWorld)))}};tt(Ce,"MAX_CRUMBS",64),tt(Ce,"REQUIRED_FILL_ZONES",6),tt(Ce,"MAX_ARCHIVES",3),tt(Ce,"ARCHIVE_SCALE",.4),tt(Ce,"ARCHIVE_X",[-10.5,0,10.5]);let Ko=Ce;const hs=document.getElementById("app"),er=document.getElementById("boot"),$r=er.querySelector("#bar > i"),He=new P0({antialias:!0,powerPreference:"high-performance",alpha:!1});He.outputColorSpace=ke;He.toneMapping=Vc;He.toneMappingExposure=.95;He.shadowMap.enabled=!0;He.shadowMap.type=Hc;He.localClippingEnabled=!0;hs.appendChild(He.domElement);const Il=He.capabilities.isWebGL2;let Js=Math.min(window.devicePixelRatio||1,Il?2:1.5),Jn=Math.min(Js,1.75);function Ws(){const i=hs.clientWidth,t=hs.clientHeight;return He.setPixelRatio(Jn),He.setSize(i,t,!1),{w:i,h:t}}async function eg(){const i=await D0((f,d)=>{$r.style.width=`${Math.round(f/d*88)}%`}),t=U0(i,ot.radius),e=new Wo(He);e.compileEquirectangularShader();const n=e.fromScene(new L0,.04).texture;$r.style.width="96%";const{w:s,h:r}=Ws(),o=new Ko(t,He.domElement,s/r,n);o.rig.setAspect(s/r);const a=()=>{Js=Math.min(window.devicePixelRatio||1,Il?2:1.5);const f=Ws();o.rig.setAspect(f.w/f.h)};window.addEventListener("resize",a),window.addEventListener("orientationchange",()=>setTimeout(a,220)),He.compile(o.scene,o.rig.camera),$r.style.width="100%",er.classList.add("gone"),setTimeout(()=>er.remove(),700);let c=performance.now(),l=0,h=0;const u=()=>{requestAnimationFrame(u);const f=performance.now(),d=Math.min(.25,(f-c)/1e3);c=f;const g={w:hs.clientWidth,h:hs.clientHeight};if(o.update(d,g.w,g.h),He.render(o.scene,o.rig.camera),l+=performance.now()-f,++h>=30){const _=l/h;l=0,h=0,_>20&&Jn>1?(Jn=Math.max(1,Jn-.25),Ws()):_<11&&Jn<Js&&(Jn=Math.min(Js,Jn+.25),Ws())}};u()}eg().catch(i=>{er.innerHTML=`<h1>よみこみに しっぱい</h1><p>${String(i)}</p>`});
